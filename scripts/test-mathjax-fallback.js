const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const source = fs.readFileSync(path.join(__dirname, '../_includes/mathjax.html'), 'utf8');
const sources = [
  '/assets/vendor/mathjax/3.2.2/es5/tex-chtml-full.js',
  'https://cdn.bootcdn.net/ajax/libs/mathjax/3.2.2/es5/tex-chtml-full.js',
  'https://cdn.jsdelivr.net/npm/mathjax@3.2.2/es5/tex-chtml-full.js'
];

function fixture({ lang = 'en', loading = false, mathml = false, content = true } = {}) {
  const attempts = [];
  const notices = [];
  const listeners = [];
  const logs = { info: [], log: [], warn: [], error: [] };
  let context;
  const container = { prepend: node => notices.push(node) };
  const document = {
    readyState: loading ? 'loading' : 'complete',
    documentElement: { lang },
    body: loading ? null : container,
    getElementById(id) {
      if (id === 'content-container') return content && this.body ? container : null;
      return notices.find(node => node.id === id) || null;
    },
    addEventListener(type, handler, options) {
      assert.equal(type, 'DOMContentLoaded');
      listeners.push({ handler, options });
    },
    createElement(tag) {
      const node = { tag, attributes: {}, setAttribute(name, value) { this.attributes[name] = value; } };
      if (tag === 'script') {
        let src;
        Object.defineProperty(node, 'src', {
          get: () => src,
          set(value) {
            assert.equal(src, undefined, 'Every URL must get a fresh script element');
            src = value;
          }
        });
        node.remove = () => { node.removed = true; };
      }
      return node;
    },
    head: {
      appendChild(script) {
        assert.equal(script.tag, 'script');
        assert.equal(script.id, 'MathJax-script');
        assert.equal(script.crossOrigin, 'anonymous');
        assert.equal(script.defer, true);
        assert.equal(typeof script.onload, 'function', 'Install handlers before connection');
        assert.equal(typeof script.onerror, 'function');
        assert(context.MathJax.tex.macros.cosec, 'Configuration runs before the first request');
        attempts.push({ script, load: script.onload, error: script.onerror });
      }
    }
  };
  context = vm.createContext({
    document,
    console: Object.fromEntries(Object.keys(logs).map(level => [level, (...args) => logs[level].push(args)]))
  });
  context.window = context;
  const rendered = source.replace(/{% if include\.mathml %}([\s\S]*?){% endif %}/g,
    (_, body) => mathml ? body : '');
  assert(!rendered.includes('{%'), 'All conditional configuration branches are handled');
  const scripts = [...rendered.matchAll(/<script>([\s\S]*?)<\/script>/g)];
  assert.equal(scripts.length, 2);
  scripts.forEach(script => vm.runInContext(script[1], context));
  return {
    attempts, notices, listeners, logs, context,
    ready() {
      document.body = container;
      document.readyState = 'interactive';
      listeners.splice(0).forEach(({ handler }) => handler());
    }
  };
}

for (const failureCount of [0, 1, 2]) {
  const test = fixture();
  for (let index = 0; index < failureCount; index++) {
    const attempt = test.attempts[index];
    attempt.error();
    assert.equal(attempt.script.removed, true, 'Failed nodes leave no duplicate IDs');
    // Even retained references to a settled attempt must be harmless.
    attempt.error();
    attempt.load();
    assert.equal(test.attempts.length, index + 2, 'Stale events must not skip sources');
  }
  const winner = test.attempts[failureCount];
  winner.load();
  winner.load();
  winner.error();
  for (const attempt of test.attempts) { attempt.error(); attempt.load(); }
  assert.deepEqual(test.attempts.map(attempt => attempt.script.src), sources.slice(0, failureCount + 1));
  assert.equal(new Set(test.attempts.map(attempt => attempt.script)).size, failureCount + 1);
  assert.equal(test.logs.log.length, 1, 'Success settles the chain exactly once');
  assert.equal(test.logs.warn.length, failureCount);
  assert.equal(test.logs.error.length, 0);
  assert.equal(test.notices.length, 0, 'Successful recovery must not show a failure notice');
  assert.equal(test.listeners.length, 0);
  assert.equal(winner.script.removed, undefined);
}

for (const lang of ['en', 'zh-CN']) {
  for (const loading of [false, true]) {
    for (const content of [false, true]) {
      const test = fixture({ lang, loading, content });
      for (let index = 0; index < sources.length; index++) test.attempts[index].error();
      for (const attempt of test.attempts) { attempt.error(); attempt.load(); }
      assert.deepEqual(test.attempts.map(attempt => attempt.script.src), sources);
      assert.equal(test.logs.error.length, 1, 'Exhaustion is reported once');
      assert.equal(test.logs.warn.length, 3);
      assert.equal(test.logs.log.length, 0, 'Late success cannot reverse an already failed attempt');
      if (loading) {
        assert.equal(test.notices.length, 0, 'Head execution must wait for body');
        assert.equal(test.listeners.length, 1, 'Only one notice is scheduled');
        assert.equal(test.listeners[0].options.once, true);
        const queued = test.listeners[0].handler;
        test.ready();
        queued(); // Extra invocation must not duplicate an existing notice.
      } else {
        assert.equal(test.listeners.length, 0);
      }
      assert.equal(test.notices.length, 1);
      const notice = test.notices[0];
      assert.equal(notice.attributes.role, 'status');
      assert.equal(notice.id, 'mathjax-load-status');
      assert.equal(notice.tag, 'p');
      assert(notice.textContent.includes(lang === 'zh-CN' ? '公式显示组件加载失败' : 'Math display could not load'));
      assert(!notice.textContent.includes(lang === 'zh-CN' ? 'Math display' : '公式显示'));
      assert(!notice.hidden, 'Failure text remains visible');
    }
  }
}

for (const mathml of [false, true]) {
  const test = fixture({ mathml });
  const config = test.context.MathJax;
  assert.deepEqual(Array.from(config.loader.load), mathml ? ['[tex]/mhchem', 'input/mml'] : ['[tex]/mhchem']);
  assert.equal(config.startup.typeset, mathml ? false : undefined, 'Preserve TMUA manual typesetting');
  assert.equal(config.loader.paths?.mathjax, mathml ? '/assets/vendor/mathjax/3.2.2/es5' : undefined);
  assert.equal(config.chtml.fontURL, '/assets/vendor/mathjax/3.2.2/es5/output/chtml/fonts/woff-v2');
  assert.equal(typeof config.startup.ready, 'function');
  assert.equal(config.options.enableMenu, false);
  const originalConfig = config;
  test.attempts[0].error();
  assert.equal(test.context.MathJax, originalConfig, 'Retry does not replace engine configuration');
  test.attempts[1].load();
}

console.log('Passed: fresh MathJax retries, single settlement, stale events, localized notices, DOM readiness and TMUA configuration.');
