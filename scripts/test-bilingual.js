// Run after bundle exec jekyll build.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.join(__dirname, '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const math = text => text.match(/\$\$[\s\S]*?\$\$|\$[^$\n]+\$/g) || [];
const ids = html => [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
const body = html => html.split('id="content-container"')[1].split('<div id="toc"')[0];
const built = url => read(path.join('_site', decodeURI(url), url.endsWith('/') ? 'index.html' : ''));

const chapters = fs.readdirSync(path.join(root, 'alevel/a2-mathematics'))
  .filter(name => name.endsWith('.md') && !['mechanics.md', 'statistics.md'].includes(name))
  .map(name => name.slice(0, -3));
for (const name of chapters) {
  const enUrl = '/alevel/a2-mathematics/' + (name === 'index' ? '' : name + '/');
  const zhUrl = '/zh' + enUrl;
  const en = built(enUrl);
  const zh = built(zhUrl);
  for (const [html, language, target] of [[en, 'en', zhUrl], [zh, 'zh-CN', enUrl]]) {
    assert(html.includes(`<html lang="${language}">`), `${name}: document language`);
    assert(html.match(/<a[^>]*id="languageSwitch"[^>]*>/)[0].includes(`href="${target}"`), `${name}: paired switch`);
    assert(html.includes(`hreflang="en" href="https://academic.kcisec.site${enUrl}"`));
    assert(html.includes(`hreflang="zh-CN" href="https://academic.kcisec.site${zhUrl}"`));
  }
  const enBody = body(en), zhBody = body(zh);
  const zhIds = ids(zhBody);
  for (const id of ids(enBody)) assert(zhIds.includes(id), `${name}: missing original anchor ${id}`);
  assert.equal(new Set(zhIds).size, zhIds.length, `${name}: duplicate content IDs`);
  assert.equal((enBody.match(/<h[2-4]\b/g) || []).length, (zhBody.match(/<h[2-4]\b/g) || []).length, `${name}: heading count`);
  assert.equal((enBody.match(/<details\b/g) || []).length, (zhBody.match(/<details\b/g) || []).length, `${name}: hints/solutions`);
  const enSource = read(`alevel/a2-mathematics/${name}.md`);
  const zhSource = read(`zh/alevel/a2-mathematics/${name}.md`);
  const enMath = math(enSource), zhMath = math(zhSource);
  assert.equal(zhMath.length, enMath.length, `${name}: formula count`);
  enMath.forEach((formula, index) => assert.equal(zhMath[index], formula, `${name}: formula ${index + 1}`));
  const questions = enSource.match(/^\*\*Question:\*\* .+$/gm) || [];
  // The original partial-fractions examples predate the Question label.
  if (name === 'partial-fractions') questions.push(...(enSource.split(/^## Practice/m)[0].match(/^(?:Express|Find) .+$/gm) || []));
  for (const question of questions) {
    assert(zhSource.includes(question.trim()), `${name}: English question wording changed`);
  }
  const practice = enSource.split(/^## Practice\b.*$/m)[1]?.split(/^## /m)[0];
  for (const exercise of practice?.split(/^### .+$/m).slice(1) || []) {
    const prompt = exercise.split('<details')[0].trim();
    assert(zhSource.replace(/\r\n/g, '\n').includes(prompt.replace(/\r\n/g, '\n')), `${name}: English practice prompt changed`);
  }
  assert(/<h2\b[^>]*class="contents-list"[^>]*>目录<\/h2>/.test(zh));
  assert(zh.includes('placeholder="搜索目录…"'));
  for (const [, href] of zhBody.matchAll(/href="([/#][^"]*)"/g)) {
    const [url, fragment] = href.split('#');
    const target = url ? built(url) : zh;
    if (fragment) assert(ids(target).includes(decodeURI(fragment)), `${name}: broken link ${href}`);
  }
}

// Exercise the actual navigation script with and without a fragment.
const nav = built('/alevel/a2-mathematics/partial-fractions/');
const script = [...nav.matchAll(/<script>([\s\S]*?)<\/script>/g)].find(match => match[1].includes('var languageSwitch'))[1];
for (const hash of ['', '#practice']) {
  let click;
  const link = { href: 'https://academic.kcisec.site/zh/alevel/a2-mathematics/partial-fractions/', addEventListener: (_, handler) => { click = handler; } };
  vm.runInNewContext(script, {
    URL,
    window: { location: { hash } },
    document: { getElementById: id => id === 'languageSwitch' ? link : null }
  });
  click();
  assert.equal(new URL(link.href).hash, hash);
}
assert(!built('/alevel/a2-mathematics/mechanics/').includes('id="languageSwitch"'), 'Untranslated page must not link to a missing translation');
console.log(`Bilingual checks passed for ${chapters.length} pages: paired switches, formulas, heading IDs, links, details and Chinese controls.`);

// Chinese subject indexes point to English notes until those lessons are translated.
const subjectIndexes = ['alevel/as-physics', 'alevel/as-mathematics',
  'igcse/biology', 'igcse/chemistry', 'igcse/mathematics', 'igcse/physics'];
for (const subject of subjectIndexes) {
  const enUrl = `/${subject}/`, zhUrl = `/zh${enUrl}`;
  const en = built(enUrl), zh = built(zhUrl);
  const enSource = read(`${subject}/index.md`), zhSource = read(`zh/${subject}/index.md`);
  for (const field of ['layout', 'mathjax', 'grade', 'subject']) {
    const value = source => source.match(new RegExp(`^${field}: (.+)$`, 'm'))?.[1].trim();
    assert.equal(value(zhSource), value(enSource), `${subject}: ${field}`);
  }
  assert(zhSource.includes(`translation_of: ${enUrl}`), `${subject}: original URL`);
  assert(zhSource.includes(`permalink: ${zhUrl}`), `${subject}: translated URL`);
  for (const [html, language, target] of [[en, 'en', zhUrl], [zh, 'zh-CN', enUrl]]) {
    assert(html.includes(`<html lang="${language}">`), `${subject}: document language`);
    assert(html.match(/<a[^>]*id="languageSwitch"[^>]*>/)?.[0].includes(`href="${target}"`), `${subject}: paired switch`);
    assert(html.includes(`hreflang="en" href="https://academic.kcisec.site${enUrl}"`));
    assert(html.includes(`hreflang="zh-CN" href="https://academic.kcisec.site${zhUrl}"`));
  }
  const enBody = body(en), zhBody = body(zh), zhIds = ids(zhBody);
  for (const id of ids(enBody)) assert(zhIds.includes(id), `${subject}: missing original anchor ${id}`);
  assert.equal(new Set(zhIds).size, zhIds.length, `${subject}: duplicate content IDs`);
  for (const [, href] of zhBody.matchAll(/href="([/#][^"]*)"/g)) {
    const [url, fragment] = href.split('#');
    const target = url ? built(url) : zh;
    if (fragment) assert(ids(target).includes(decodeURI(fragment)), `${subject}: broken link ${href}`);
  }
  assert(/<h2\b[^>]*class="contents-list"[^>]*>目录<\/h2>/.test(zh), `${subject}: Chinese contents`);
  assert(zh.includes('placeholder="搜索目录…"'), `${subject}: Chinese search`);
  assert(zh.includes('aria-label="阅读此页英文版"'), `${subject}: Chinese switch label`);
  assert(zhBody.includes('本页提供中文主题目录'), `${subject}: translation scope`);
  assert(!zhBody.includes('{{'), `${subject}: unrendered UI text`);
}
console.log(`Bilingual subject index checks passed for ${subjectIndexes.length} pages: front matter, switches, anchors, links and UI text.`);
