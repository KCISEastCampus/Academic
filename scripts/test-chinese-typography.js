const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const variables = read('assets/css/variables.css');
for (const font of ['Sitka Text', 'Microsoft YaHei', 'PingFang SC', 'Noto Sans CJK SC']) {
  assert.ok(variables.includes(font), `Missing font fallback: ${font}`);
}
assert.match(variables, /:lang\(zh\)\s*\{\s*--line-height-body:\s*1\.8;/);
for (const route of ['', 'members/', 'alumni/', 'news/', 'news/recruitment/', 'news/logo-announcement/', 'news/events-260417/']) {
  const html = read(`_site/student-council/${route}index.html`);
  assert.ok(html.includes('/assets/css/variables.css'), `Missing shared fonts: ${route}`);
  assert.ok(html.includes('/assets/css/student_council.css'), `Missing council styles: ${route}`);
}
for (const route of ['members', 'alumni']) {
  const html = read(`_site/student-council/${route}/index.html`);
  const names = [...html.matchAll(/<span class="name" lang="zh-CN">([^<]+)<\/span>/g)];
  assert.ok(names.length > 0, `Missing Chinese name labels: ${route}`);
  assert.ok(!html.includes('<span class="name">'), `Unlabelled names: ${route}`);
}
for (const [route, englishAnchor] of [
  ['recruitment', 'recruitment-event-successfully-held'],
  ['logo-announcement', 'new-logo-announcement'],
  ['events-260417', 'a-level-student-councils-first-series-of-fun-events-successfully-held-uniting-everyone-for-the-upcoming-official-exams'],
]) {
  const html = read(`_site/student-council/news/${route}/index.html`);
  assert.match(html, /<div lang="zh-CN">\s*<h1/);
  assert.match(html, /<div lang="zh-CN">[\s\S]*?<p>[\s\S]*?[\u4e00-\u9fff]/);
  assert.ok(html.includes(`id="${englishAnchor}"`), `Broken English section anchor: ${route}`);
  assert.ok(html.indexOf('</div>', html.indexOf('lang="zh-CN"')) < html.indexOf(`id="${englishAnchor}"`));
}
console.log('Chinese typography passed: shared fonts on all 7 council pages, labelled names, rendered bilingual sections and preserved English anchors.');
