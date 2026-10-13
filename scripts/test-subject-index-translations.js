// Run after bundle exec jekyll build.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = path.join(__dirname, '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const ids = html => [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
const body = html => html.split('id="content-container"')[1].split('<div id="toc"')[0];
const built = url => read(path.join('_site', decodeURI(url), url.endsWith('/') ? 'index.html' : ''));

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

for (const subject of subjectIndexes) {
  for (const parent of ['/zh/', '/zh/' + subject.split('/')[0] + '/']) {
    assert(built(parent).includes('href="/zh/' + subject + '/"'), parent + ': missing Chinese subject card ' + subject);
  }
}
console.log('Chinese homepage and course pages link to all six indexes.');
