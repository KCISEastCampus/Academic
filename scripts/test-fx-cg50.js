// Run after bundle exec jekyll build.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = path.join(__dirname, '..');
const read = name => fs.readFileSync(path.join(root, name), 'utf8');
const page = read('_site/alevel/fx-cg50/index.html');
const ids = [...page.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
assert.equal(new Set(ids).size, ids.length, 'Heading IDs must be unique');
assert(page.includes('<html lang="zh-CN">'));
assert(page.includes('Eric Shi') && page.includes('GPT'));
for (let n = 1; n <= 14; n++) assert(ids.includes(`task-${n}`), `Missing task ${n}`);
for (const [, href] of page.matchAll(/href="#([^"]+)"/g)) {
  assert(ids.includes(decodeURIComponent(href)), `Broken anchor ${href}`);
}
const screenshots = [...page.matchAll(/<img[^>]+src="([^"]*\/fx-cg50\/S\d{2}[^" ]+)"[^>]*>/g)];
assert.equal(screenshots.length, 12);
for (const [tag, url] of screenshots) {
  assert(/alt="[^"]+"/.test(tag), 'Screenshot needs alt text');
  assert(fs.existsSync(path.join(root, '_site', url)), `Missing screenshot ${url}`);
}
const pdf = '/assets/pdf/fx-CG50-guide-chapters-1-3-illustrated.pdf';
assert(page.includes(`href="${pdf}"`));
assert(fs.readFileSync(path.join(root, '_site', pdf)).subarray(0, 5).equals(Buffer.from('%PDF-')));
assert(read('_site/alevel/index.html').includes('href="/alevel/fx-cg50/"'), 'A-Level entry missing');
assert(!page.includes('截图位置') && !page.includes('---PAGE---'));
assert(page.includes('左括号要手动输入') && page.includes('×10ˣ（π）'));
assert(page.includes('尚未在这台中文版实机验收'));
assert(page.includes('UK') && page.includes('IB') && page.includes('品红色'));
assert.equal((page.match(/<details\b/g) || []).length, 4, 'Practice answers must remain collapsible');
const source = read('alevel/fx-cg50/index.md');
for (const formula of ['\\frac{1}{2}', '\\sqrt{72}', '\\sin\\left(\\frac{\\pi}{6}\\right)', '\\log_{10}(1000)', '10^{23}', '$(-3)^2$', '$-3^2$']) {
  assert(source.includes(formula), `Missing TeX expression ${formula}`);
}
for (const [, keys] of source.matchAll(/`([^`]+)`/g)) assert(!keys.includes('$'), 'Key sequences must remain literal');
console.log('fx-CG50 guide passed: 14 tasks, anchors, 12 images, PDF, attribution and A-Level entry.');
