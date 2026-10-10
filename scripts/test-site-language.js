const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.join(__dirname, '..');
const source = fs.readFileSync(path.join(root, 'assets/js/site-language.js'), 'utf8');
const config = {
  ui: { en: { home: 'Home', search: 'Search', fallback: 'English fallback' }, 'zh-CN': { home: '首页', search: '搜索' } },
  pairs: [
    { en: '/', 'zh-CN': '/zh/' },
    { en: '/alevel/', 'zh-CN': '/zh/alevel/' },
    { en: '/alevel/math/', 'zh-CN': '/zh/alevel/math/' },
    { en: '/external-pair/', 'zh-CN': 'https://other.example/zh/' }
  ]
};

function run({ lang = 'en', saved = null, blocked = false, href = 'https://academic.example/alevel/math/?paper=FP#task-2', loading = false, fallbackLink = true } = {}) {
  function element(attributes = {}) {
    const node = new EventTarget();
    node.dataset = {};
    node.hidden = false;
    node.getAttribute = name => attributes[name] ?? null;
    node.hasAttribute = name => Object.hasOwn(attributes, name);
    node.setAttribute = (name, value) => { attributes[name] = value; };
    Object.defineProperty(node, 'href', {
      get: () => new URL(attributes.href, href).href,
      set: value => { attributes.href = value; }
    });
    return node;
  }
  const links = [
    element({ href: '/alevel/math/?paper=FP#task-2' }),
    element({ href: '/alevel/math/index.html?q=1#chapter' }),
    element({ href: '/alevel/math' }),
    element({ href: '/zh/alevel/math/' }),
    ...[
      { href: '#section' },
      { href: 'https://other.example/alevel/math/' },
      { href: '/alevel/math/', download: '' },
      { href: '/alevel/math/', hreflang: 'en' },
      { href: '/alevel/math/', 'data-language-explicit': '' },
      { href: '/alevel/fx-cg50/' },
      { href: '/external-pair/' }
    ].map(element)
  ];
  const originals = links.map(link => link.getAttribute('href'));
  const ui = element({ 'data-site-ui': '' });
  const label = element({ 'data-ui': 'home' });
  const search = element({ 'data-ui-aria': 'search', 'data-ui-title': 'search', 'data-ui-placeholder': 'search', 'data-ui-alt': 'search' });
  const select = element();
  select.hidden = true;
  const fallback = element();
  const document = new EventTarget();
  document.documentElement = { lang, dataset: {} };
  document.readyState = loading ? 'loading' : 'complete';
  document.getElementById = id => ({ 'site-language-data': { textContent: JSON.stringify(config) }, siteLanguage: select, languageSwitch: fallbackLink ? fallback : null })[id];
  document.querySelectorAll = selector => selector === 'a[href]' ? links : [ui, label, search].filter(node => node.hasAttribute(selector.slice(1, -1)));
  const assigned = [];
  const writes = [];
  const window = {};
  vm.runInNewContext(source, {
    URL, document, window,
    location: { href, origin: new URL(href).origin, assign: destination => assigned.push(destination) },
    localStorage: {
      getItem(key) { assert.equal(key, 'site-language'); if (blocked) throw Error('Blocked storage'); return saved; },
      setItem(key, value) { if (blocked) throw Error('Blocked storage'); writes.push([key, value]); }
    }
  });
  const choose = language => { select.value = language; select.dispatchEvent(new Event('change')); };
  return { document, links, originals, ui, label, search, select, fallback, assigned, writes, window, choose };
}

for (const lang of ['en', 'zh-CN']) {
  for (const saved of [null, '', 'en', 'zh-CN', 'invalid']) {
    for (const blocked of [false, true]) {
      const result = run({ lang, saved, blocked });
      const expected = !blocked && ['en', 'zh-CN'].includes(saved) ? saved : lang;
      assert.equal(result.document.documentElement.dataset.uiLanguage, expected);
      assert.equal(result.document.documentElement.lang, lang, 'UI preference must not mislabel the document language');
      assert.equal(result.ui.lang, expected);
      assert.equal(result.label.textContent, config.ui[expected].home);
      for (const attribute of ['aria-label', 'title', 'placeholder', 'alt']) assert.equal(result.search.getAttribute(attribute), config.ui[expected].search);
      assert.equal(result.select.value, expected);
      assert.equal(result.select.hidden, false);
      assert.equal(result.fallback.hidden, lang === expected, 'A differing content language keeps its translation link available');
      assert.equal(result.label.lang, expected);
      assert.equal(result.search.lang, expected);
      assert.deepEqual(result.writes, [], 'Loading a page must not reset the saved preference');
      assert.deepEqual(result.assigned, [], 'Opening an explicit page URL must not force a redirect');
      assert.equal(result.window.siteLanguage.text('fallback'), 'English fallback');
      assert.equal(result.window.siteLanguage.text('missing'), '');
    }
  }
}

const paired = run({ loading: true });
assert.equal(paired.select.hidden, true);
paired.document.dispatchEvent(new Event('DOMContentLoaded'));
paired.choose('zh-CN');
assert.equal(paired.fallback.hidden, false);
paired.window.siteLanguage.apply();
assert.equal(paired.fallback.hidden, false, 'Refreshing UI keeps access to the selected translation');
assert.deepEqual(paired.writes, [['site-language', 'zh-CN']]);
assert.deepEqual(paired.assigned, ['https://academic.example/zh/alevel/math/?paper=FP#task-2']);
assert.equal(paired.links[0].href, paired.assigned[0]);
assert.equal(paired.links[1].href, 'https://academic.example/zh/alevel/math/?q=1#chapter');
assert.equal(paired.links[2].href, 'https://academic.example/zh/alevel/math/');
for (let index = 4; index < paired.links.length; index++) {
  assert.equal(paired.links[index].getAttribute('href'), paired.originals[index], 'Unpaired or explicit links must keep their destination');
}
paired.choose('en');
assert.equal(paired.fallback.hidden, true, 'Matching content and preference hides the redundant link');
assert.deepEqual(paired.writes[1], ['site-language', 'en']);
assert.equal(paired.links[0].href, 'https://academic.example/alevel/math/?paper=FP#task-2');
assert.equal(paired.links[3].href, 'https://academic.example/alevel/math/');
assert.equal(paired.document.documentElement.lang, 'en');
paired.choose('invalid');
assert.equal(paired.writes.length, 2, 'Only supported preferences are stored');

const chinese = run({ lang: 'zh-CN', saved: 'zh-CN', href: 'https://academic.example/zh/alevel/math/?paper=FP#task-2' });
chinese.choose('en');
assert.equal(chinese.fallback.hidden, false);
assert.deepEqual(chinese.assigned, ['https://academic.example/alevel/math/?paper=FP#task-2']);
const unpaired = run({ lang: 'zh-CN', saved: 'en', href: 'https://academic.example/alevel/fx-cg50/', fallbackLink: false });
assert.equal(unpaired.document.getElementById('languageSwitch'), null);
assert.equal(unpaired.select.value, 'en', 'A Chinese-only guide must not reset an English preference');
unpaired.choose('zh-CN');
unpaired.window.siteLanguage.apply();
assert.equal(unpaired.document.getElementById('languageSwitch'), null);
assert.deepEqual(unpaired.assigned, []);
assert.equal(unpaired.document.documentElement.lang, 'zh-CN');
const blocked = run({ blocked: true });
blocked.choose('zh-CN');
assert.equal(blocked.select.value, 'zh-CN');
assert.equal(blocked.assigned.length, 1, 'Session selection works even when persistence is blocked');
assert.deepEqual(blocked.writes, []);
vm.runInNewContext(source, { document: { getElementById: () => null } });

const site = path.join(root, '_site');
assert.equal(fs.readFileSync(path.join(site, 'assets/js/site-language.js'), 'utf8'), source, 'Build the site before checking generated pages');
let generated;
for (const [url, language, alternate] of [
  ['/', 'en', '/zh/'], ['/zh/', 'zh-CN', '/'],
  ['/alevel/', 'en', '/zh/alevel/'], ['/zh/alevel/', 'zh-CN', '/alevel/'],
  ['/igcse/', 'en', '/zh/igcse/'], ['/zh/igcse/', 'zh-CN', '/igcse/']
]) {
  const html = fs.readFileSync(path.join(site, url, 'index.html'), 'utf8');
  assert(html.includes(`<html lang="${language}">`), `${url}: static document language`);
  assert(html.includes(`id="languageSwitch" href="${alternate}"`), `${url}: no-JavaScript language link`);
  assert(/<select\b[^>]*id="siteLanguage"[^>]*\bhidden/.test(html), `${url}: hide JavaScript-only controls until initialized`);
  assert(html.includes('href="/zh/alevel/"') && html.includes('href="/zh/igcse/"') || language === 'en', `${url}: static Chinese navigation`);
  assert(html.includes(language === 'zh-CN' ? 'Casio fx-CG50 使用指南' : 'Casio fx-CG50 Guide') || url.includes('igcse'), `${url}: preserve calculator entry title`);
  const data = html.match(/<script id="site-language-data" type="application\/json">([\s\S]*?)<\/script>/);
  assert(data, `${url}: generated pairing configuration`);
  const parsed = JSON.parse(data[1]);
  if (generated) assert.deepEqual(parsed, generated, `${url}: shared language configuration`);
  generated = parsed;
}
assert.deepEqual(Object.keys(generated.ui.en).sort(), Object.keys(generated.ui['zh-CN']).sort(), 'Both interface dictionaries must cover the same keys');
const seen = new Set();
for (const pair of generated.pairs) {
  assert(!seen.has(pair.en), `Duplicate English pairing: ${pair.en}`);
  seen.add(pair.en);
  for (const language of ['en', 'zh-CN']) {
    assert(pair[language].startsWith('/'), 'Pair destinations must be site paths');
    assert(fs.existsSync(path.join(site, pair[language], 'index.html')), `Missing language destination: ${pair[language]}`);
  }
}
for (const english of ['/', '/alevel/', '/igcse/']) assert(seen.has(english), `Missing landing-page language pair: ${english}`);
assert(!generated.pairs.some(pair => pair.en === '/alevel/fx-cg50/'), 'The Chinese-only guide must not invent an English counterpart');
assert(!fs.readFileSync(path.join(site, 'alevel/fx-cg50/index.html'), 'utf8').includes('id="languageSwitch"'), 'An unpaired guide must not expose a nonexistent translation');
console.log(`Site language passed: preferences, safe reversible links, explicit switching, document language, storage fallback and ${seen.size} built page pairs.`);
