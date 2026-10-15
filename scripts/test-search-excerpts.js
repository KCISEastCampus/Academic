const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const original = fs.readFileSync(path.join(__dirname, '../assets/js/search.js'), 'utf8');
const importCall = "return import(/* webpackIgnore: true */ '/pagefind/pagefind.js')";
assert(original.includes(importCall), 'Pagefind import stub remains available');
const source = original.replace(importCall, 'return Promise.resolve(window.pagefind)');

async function search(mode, excerpt) {
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
          meta: { title: 'Capacitor lesson' },
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

  const long = await search('fallback', 'Capacitor ' + 'clear English description '.repeat(8));
  assert.equal(long.children[1].textContent.length, 120);

  const empty = await search('fallback', '');
  assert.equal(empty.children.length, 1, 'An empty excerpt does not create an empty snippet');
  console.log('Search excerpts passed: Pagefind and fallback cleanup, safe omission, readability and 120-character limit.');
})().catch(error => { console.error(error); process.exitCode = 1; });