// Run after bundle exec jekyll build.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { init } = require('../assets/vendor/mathjax/3.2.2/es5/node-main.js');
const root = path.join(__dirname, '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8').replace(/\r\n/g, '\n');
const course = 'alevel/a2-further-mathematics';
const slugs = ['roots-and-polynomials', 'proof-by-induction', 'finite-series',
  'series-and-limits', 'de-moivres-theorem', 'polar-coordinates', 'inverse-trigonometric-functions'];
const math = source => source.match(/\$\$[\s\S]*?\$\$|\$[^$\r\n]+\$/g) || [];
const body = html => html.split('id="content-container"')[1].split('<div id="toc"')[0];
const ids = html => [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
const headings = html => [...html.matchAll(/<h[2-4]\b[^>]*id="([^"]+)"/g)].map(match => match[1]);
const built = url => read(path.join('_site', decodeURI(url), url.endsWith('/') ? 'index.html' : ''));
const index = body(built(`/zh/${course}/`));
const formulas = new Set();

for (const slug of slugs) {
  const enUrl = `/${course}/${slug}/`, zhUrl = `/zh${enUrl}`;
  const en = read(`${course}/${slug}.md`), zh = read(`zh/${course}/${slug}.md`);
  assert.deepEqual(math(zh), math(en), `${slug}: formulas and their order`);
  assert.deepEqual(zh.match(/\*\*[^*\r\n]*\bmarks?[^*\r\n]*\*\*/g) || [],
    en.match(/\*\*[^*\r\n]*\bmarks?[^*\r\n]*\*\*/g) || [], `${slug}: original marks`);
  assert.deepEqual(zh.match(/https:\/\/[^)\s]+/g) || [],
    en.match(/https:\/\/[^)\s]+/g) || [], `${slug}: source URLs`);
  for (const formula of math(zh)) formulas.add(formula);
  assert(zh.includes(`lang: zh-CN\ntranslation_of: ${enUrl}\npermalink: ${zhUrl}`), `${slug}: metadata`);
  assert.equal((zh.match(/<details\b/g) || []).length, (en.match(/<details\b/g) || []).length, `${slug}: disclosures`);
  assert(!/<summary>[^<]*(?:Hint|Solution|solution)/.test(zh), `${slug}: Chinese disclosure labels`);
  for (const line of en.match(/^\*\*Question:\*\*.*$/gm) || []) assert(zh.includes(line), `${slug}: English example prompt`);

  // Keep the full exercise prompt; source descriptions may be translated.
  for (const question of en.split(/^### Question .+$/m).slice(1)) {
    const prompt = question.split('<details')[0].trim().split(/\n\s*\n/)
      .filter(paragraph => !/^\*\*(?:Source:|Original AQA question\.)/.test(paragraph) && !paragraph.startsWith('!['));
    for (const paragraph of prompt) assert(zh.includes(paragraph), `${slug}: English exercise prompt ${paragraph.slice(0, 70)}`);
  }
  for (const match of en.matchAll(/^### Example[^\n]*\n\n([^\n]+)/gm)) {
    if (slug === 'roots-and-polynomials')
      assert(zh.includes(match[1]), `${slug}: English example prompt`);
  }
  if (slug === 'roots-and-polynomials')
    for (const line of en.match(/^\*\*[1-3]\. .*$/gm) || [])
      assert(zh.includes(line), `${slug}: English example instructions`);
  assert.deepEqual([...zh.matchAll(/!\[[^\]]*\]\(([^)]+)\)/g)].map(match => match[1]),
    [...en.matchAll(/!\[[^\]]*\]\(([^)]+)\)/g)].map(match => match[1]), `${slug}: images`);

  const enHtml = built(enUrl), zhHtml = built(zhUrl);
  assert.deepEqual(headings(body(zhHtml)), headings(body(enHtml)), `${slug}: identical heading anchors`);
  assert.equal(new Set(ids(body(zhHtml))).size, ids(body(zhHtml)).length, `${slug}: unique IDs`);
  for (const [html, lang, target] of [[enHtml, 'en', zhUrl], [zhHtml, 'zh-CN', enUrl]]) {
    assert(html.includes(`<html lang="${lang}">`), `${slug}: document language`);
    assert(html.match(/<a[^>]*id="languageSwitch"[^>]*>/)?.[0].includes(`href="${target}"`), `${slug}: paired switch`);
    assert(html.includes(`hreflang="en" href="https://academic.kcisec.site${enUrl}"`), `${slug}: English alternate`);
    assert(html.includes(`hreflang="zh-CN" href="https://academic.kcisec.site${zhUrl}"`), `${slug}: Chinese alternate`);
    assert(!html.includes('<p>$$'), `${slug}: display math`);
    assert(!math(html).some(formula => /[\u2018\u2019]/.test(formula)), `${slug}: derivative smart quotes`);
  }
  for (const [, href] of body(zhHtml).matchAll(/href="([/#][^"]*)"/g)) {
    const [url, fragment] = href.split('#');
    const target = url ? built(url) : zhHtml;
    if (fragment) assert(ids(target).includes(decodeURI(fragment)), `${slug}: broken anchor ${href}`);
    if (url.startsWith(`/${course}/`)) assert.fail(`${slug}: Chinese course link falls back to English: ${href}`);
  }
  assert(index.includes(`href="${zhUrl}" hreflang="zh-CN"`), `${slug}: Chinese syllabus link`);
}
assert(!index.includes('\u82f1\u6587\u8bfe\u7a0b'), 'No obsolete English-only syllabus labels');
assert.equal((index.match(/hreflang="zh-CN" lang="zh-CN">/g) || []).length, 11, 'All eleven available syllabus rows link to Chinese');
assert(body(built(`/zh/${course}/arc-length-and-surface-area/`)).includes(`href="/zh/${course}/inverse-trigonometric-functions/"`), 'Adjacent Chinese lesson returns to translated predecessor');

// Exercise the existing navigation script: switching languages preserves the section.
const html = built(`/${course}/roots-and-polynomials/`);
const script = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].find(match => match[1].includes('var languageSwitch'))[1];
for (const hash of ['', '#complex-roots']) {
  let click;
  const link = { href: `https://academic.kcisec.site/zh/${course}/roots-and-polynomials/`, hreflang: 'zh-CN', addEventListener: (_, handler) => { click = handler; } };
  const stored = {};
  vm.runInNewContext(script, { URL, window: { location: { hash } },
    localStorage: { setItem: (key, value) => { stored[key] = value; } },
    document: { getElementById: id => id === 'languageSwitch' ? link : null } });
  click();
  assert.equal(new URL(link.href).hash, hash);
  assert.equal(stored['site-language'], 'zh-CN');
}
init({ loader: { load: ['input/tex', 'output/svg'] }, tex: { packages: ['base', 'ams'] } })
  .then(mj => {
    for (const formula of formulas) {
      const display = formula.startsWith('$$'), width = display ? 2 : 1;
      const svg = mj.startup.adaptor.outerHTML(mj.tex2svg(formula.slice(width, -width), { display }));
      assert(!svg.includes('data-mml-node="merror"') && !svg.includes('data-mjx-error'), `Invalid TeX: ${formula}`);
    }
    console.log(`Further bilingual passed: 7 paired lessons, English prompts/formulas, anchors, disclosures, links, syllabus, language persistence and ${formulas.size} unique TeX formulas.`);
  }).catch(error => { console.error(error); process.exitCode = 1; });
