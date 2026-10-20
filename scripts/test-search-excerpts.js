const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const original = fs.readFileSync(path.join(__dirname, '../assets/js/search.js'), 'utf8');
const importCall = "return import(/* webpackIgnore: true */ '/pagefind/pagefind.js')";
assert(original.includes(importCall), 'Pagefind import stub remains available');
const source = original.replace(importCall, 'return Promise.resolve(window.pagefind)');

async function search(mode, excerpt, section) {
  function element(tag) {
    const node = new EventTarget();
    const attributes = {};
    node.tagName = tag.toUpperCase();
    node.children = [];
    node.style = {};
    node.classList = { add() {}, remove() {} };
    node.setAttribute = (key, value) => { attributes[key] = value; };
    node.getAttribute = key => attributes[key] ?? null;
    node.appendChild = child => node.children.push(child);
    node.querySelectorAll = () => [];
    node.contains = () => false;
    Object.defineProperty(node, 'innerHTML', { set: () => { node.children = []; } });
    return node;
  }

  const input = element('input');
  input.setAttribute('data-search-source', '/search.json');
  const results = element('div');
  const document = new EventTarget();
  document.documentElement = { lang: 'en' };
  document.getElementById = id => ({ 'search-input': input, 'search-results': results })[id];
  document.createElement = element;
  let timer;
  let requests = 0;
  const window = mode === 'pagefind' ? {
    pagefind: {
      async search() {
        return { results: [{ data: async () => ({
          meta: { title: 'Capacitor lesson', section },
          url: '/alevel/a2-physics/capacitor-charge-and-discharge/',
          excerpt
        }) }] };
      }
    }
  } : {};

  vm.runInNewContext(source, {
    document, window,
    fetch: async () => {
      requests++;
      return { ok: true, json: async () => [{
        title: 'Capacitor lesson',
        content: excerpt,
        section,
        url: '/alevel/a2-physics/capacitor-charge-and-discharge/'
      }] };
    },
    setTimeout: callback => { timer = callback; }, clearTimeout() {}, console: { error() {} }
  });
  assert.equal(requests, 0, 'Page startup does not download the fallback index');
  input.value = 'capacitor';
  input.dispatchEvent(new Event('input'));
  await timer();
  assert.equal(requests, mode === 'pagefind' ? 0 : 1);
  input.dispatchEvent(new Event('input'));
  await timer();
  assert.equal(requests, mode === 'pagefind' ? 0 : 1, 'Repeated searches share the fallback download');
  return results.children[0];
}

(async () => {
  for (const mode of ['fallback', 'pagefind']) {
    const result = await search(mode,
      'Capacitor charges through a resistor. $V_C=V_s(1-e^{-t/RC})$. The voltage approaches the supply.');
    assert.equal(result.children[0].textContent, 'Capacitor lesson');
    assert.equal(result.href, '/alevel/a2-physics/capacitor-charge-and-discharge/');
    assert.match(result.children[1].textContent, /Capacitor charges through a resistor/);
    assert.match(result.children[1].textContent, /voltage approaches the supply/);
    assert.doesNotMatch(result.children[1].textContent, /[\\$^{}_]|\b[A-Za-z]\w*\s*=/);
  }

  const rawCommand = await search('pagefind', 'Capacitor uses \\mathrm{k\\Omega} in the setup.');
  assert.equal(rawCommand.children.length, 1, 'Omit an excerpt if TeX source remains after cleanup');

  const bareEquation = await search('fallback', 'Capacitor relation: C=1/(R|m|).');
  assert.equal(bareEquation.children.length, 1, 'Omit unmarked equations instead of exposing formula fragments');

  for (const mode of ['fallback', 'pagefind']) {
    const formulaSentence = await search(mode, '极板带 $+Q$ 和 $-Q$ 电荷。先判断电容器是否连接电源。', 'A2 物理');
    assert.equal(formulaSentence.children[1].textContent, 'A2 物理');
    assert.equal(formulaSentence.children[2].textContent, '先判断电容器是否连接电源。', 'Discard the whole sentence containing a formula');
    const clipped = await search(mode, 'Capacitor uses \\frac{Q}{V}.');
    assert.equal(clipped.children.length, 1, 'Clipped TeX does not produce broken prose');
  }
  const long = await search('fallback', 'Capacitor ' + 'clear English description '.repeat(8));
  assert.equal(long.children.length, 1, 'Do not cut long sentences mid-word');

  const empty = await search('fallback', '');
  assert.equal(empty.children.length, 1, 'An empty excerpt does not create an empty snippet');
  console.log('Search excerpts passed: complete prose, formula sentence omission, course context and length limit in both engines.');
})().catch(error => { console.error(error); process.exitCode = 1; });
