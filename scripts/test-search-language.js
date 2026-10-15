const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const source = fs.readFileSync(path.join(__dirname, '../assets/js/search.js'), 'utf8');
async function search(lang, preferred, query = 'missing') {
  function element(tag) {
    const node = new EventTarget();
    const attributes = {};
    node.tagName = tag;
    node.children = [];
    node.style = {};
    node.classList = { add() {} };
    node.setAttribute = (key, value) => { attributes[key] = value; };
    node.getAttribute = key => attributes[key] ?? null;
    node.appendChild = child => node.children.push(child);
    Object.defineProperty(node, 'innerHTML', { set: () => { node.children = []; } });
    return node;
  }
  const input = element('input');
  input.setAttribute('data-search-source', '/assets/search.json');
  const results = element('div');
  const document = new EventTarget();
  document.documentElement = { lang };
  document.getElementById = id => ({ 'search-input': input, 'search-results': results })[id];
  document.createElement = element;
  let timer;
  let applied = 0;
  const window = preferred ? { siteLanguage: {
    text(key) { assert.equal(key, 'no_matches'); return preferred === 'zh-CN' ? '没有找到匹配结果' : 'No matches found'; },
    apply() {
      applied++;
      assert(results.children.length, 'Apply preferences after appending results');
      results.children.forEach(node => {
        if (node.getAttribute('data-ui') === 'no_matches') node.lang = preferred;
        if (node.href === '/alevel/math/' && preferred === 'zh-CN') node.href = '/zh/alevel/math/';
      });
    }
  } } : {};
  vm.runInNewContext(source, {
    document, window,
    fetch: async url => {
      assert.equal(url, '/assets/search.json');
      return { ok: true, json: async () => [{ title: 'Calculus lesson', content: 'Original English content', url: '/alevel/math/' }] };
    },
    setTimeout: callback => { timer = callback; }, clearTimeout() {}, console: { error() {} }
  });
  input.value = query;
  input.dispatchEvent(new Event('input'));
  await timer();
  assert.equal(results.style.display, 'block');
  assert.equal(applied, preferred ? 1 : 0);
  return results.children[0];
}

(async () => {
  for (const [lang, preferred, expected] of [
    ['en', 'zh-CN', '没有找到匹配结果'],
    ['zh-CN', 'en', 'No matches found'],
    ['en', null, 'No results found'],
    ['zh-CN', null, '没有找到匹配结果']
  ]) {
    const empty = await search(lang, preferred);
    assert.equal(empty.textContent, expected);
    assert.equal(empty.getAttribute('data-ui'), 'no_matches', 'Rendered status remains translatable after a preference change');
    if (preferred) assert.equal(empty.lang, preferred);
  }
  const result = await search('en', 'zh-CN', 'calculus');
  assert.equal(result.href, '/zh/alevel/math/', 'Apply preferences to newly rendered result links');
  assert.equal(result.children[0].textContent, 'Calculus lesson', 'Do not relabel or translate the indexed content');
  assert.equal(result.children[1].textContent, 'Original English content');
  console.log('Search language passed: selected UI status, page-language fallback and preferences on newly rendered links.');
})().catch(error => { console.error(error); process.exitCode = 1; });
