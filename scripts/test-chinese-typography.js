const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const variables = read('assets/css/variables.css');
const chineseFonts = read('assets/css/fonts/chinese.css');
assert.ok(read('_includes/head.html').includes('/assets/css/fonts/chinese.css'));
for (const token of ['body', 'heading']) {
  assert.match(variables, new RegExp(`--font-${token}: 'Academic Chinese Local', 'Academic Chinese Web',`));
}
assert.match(variables, /--font-mono: 'MapleMono'/);
assert.equal((chineseFonts.match(/font-display: swap/g) || []).length, 2);
assert.equal((chineseFonts.match(/font-weight: 100 900/g) || []).length, 2);
for (const file of ['common', 'extended']) {
  const font = fs.readFileSync(path.join(root, `assets/fonts/noto-sans-sc/NotoSansSC-${file}.woff2`));
  assert.equal(font.subarray(0, 4).toString(), 'wOF2', `Invalid WOFF2: ${file}`);
  assert.ok(chineseFonts.includes(`/assets/fonts/noto-sans-sc/NotoSansSC-${file}.woff2`));
}
// Keep ASCII, Greek and mathematical operators out of every CJK face.
for (const [, value] of chineseFonts.matchAll(/unicode-range: ([^;]+);/g)) {
  for (const range of value.split(/,\s*/)) {
    const [, first, last] = /^U\+([0-9A-F]+)(?:-([0-9A-F]+))?$/.exec(range);
    const start = parseInt(first, 16), end = parseInt(last || first, 16);
    assert.ok(start <= end);
    for (const [a, b] of [[0x20, 0x7e], [0x370, 0x3ff], [0x2200, 0x22ff], [0x1d400, 0x1d7ff]]) {
      assert.ok(end < a || start > b, `CJK face overrides English/math: ${range}`);
    }
  }
}
assert.ok(fs.existsSync(path.join(root, 'assets/fonts/noto-sans-sc/OFL.txt')));
for (const font of ['Sitka Text', 'Microsoft YaHei', 'PingFang SC', 'Noto Sans CJK SC']) {
  assert.ok(variables.includes(font), `Missing font fallback: ${font}`);
}
assert.match(variables, /:lang\(zh\)\s*\{\s*--line-height-body:\s*1\.8;/);
for (const route of ['', 'members/', 'alumni/', 'news/', 'news/recruitment/', 'news/logo-announcement/', 'news/events-260417/']) {
  const html = read(`_site/student-council/${route}index.html`);
  assert.ok(html.includes('/assets/css/fonts/chinese.css'), `Missing downloadable Chinese font: ${route}`);
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
for (const route of ['zh/', 'zh/alevel/a2-mathematics/', 'alevel/fx-cg50/']) {
  assert.ok(read(`_site/${route}index.html`).includes('/assets/css/fonts/chinese.css'), `Missing Chinese font: ${route}`);
}
console.log('Chinese typography passed: CJK-only local and self-hosted faces, preserved English/math fonts, shared fonts on all 7 council pages, labelled names, rendered bilingual sections and preserved English anchors.');
