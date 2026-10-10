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
for (let n = 1; n <= 31; n++) assert(ids.includes(`task-${n}`), `Missing task ${n}`);
for (const [, href] of page.matchAll(/href="#([^"]+)"/g)) {
  assert(ids.includes(decodeURIComponent(href)), `Broken anchor ${href}`);
}
const screenshots = [...page.matchAll(/<img[^>]+src="([^"]*\/fx-cg50\/S\d{2}[^" ]+)"[^>]*>/g)];
assert.equal(screenshots.length, 57);
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
assert.equal((page.match(/<details\b/g) || []).length, 7, 'Practice answers must remain collapsible');
const source = read('alevel/fx-cg50/index.md');
for (const formula of ['\\frac{1}{2}', '\\sqrt{72}', '\\sin\\left(\\frac{\\pi}{6}\\right)', '\\log_{10}(1000)', '10^{23}', '$(-3)^2$', '$-3^2$']) {
  assert(source.includes(formula), `Missing TeX expression ${formula}`);
}
for (const [, keys] of source.matchAll(/`([^`]+)`/g)) assert(!keys.includes('$'), 'Key sequences must remain literal');

for (let n = 1; n <= 10; n++) assert(ids.includes(`chapter-${n}`), `Missing chapter ${n}`);
assert(source.includes('第 4–9 章已在 03.81.0202 中文固件逐项核对并配图'));
assert(!source.includes('第 5–9 章为文字初稿'));
for (const name of ['keys-overview', 'keys-secondary', 'keys-signs']) {
  assert(page.includes(`${name}.svg`));
  assert(fs.existsSync(path.join(root, '_site/assets/img/fx-cg50', `${name}.svg`)));
}
assert(source.includes('F5（设定）'));
assert(source.includes('回到“计算”菜单，直接按 `F1（单变量）`'));
assert(source.includes('读取屏幕底部的完整数值'));
assert(source.includes('OPTN → F1（编辑）'));
assert(source.includes('直到出现“选择类型”页'));
for (const name of ['S13-quadratic-coefficients', 'S14-quadratic-roots', 'S15-simultaneous-coefficients', 'S16-simultaneous-solution', 'S17-numerical-solver-settings', 'S18-numerical-solver-root']) assert(source.includes(name));
for (const result of ['0.5671432904', '0.266827932', '0.6496107184', '0.7745375448', '82.81551566']) assert(source.includes(result), `Missing checked example result ${result}`);
console.log('fx-CG50 guide passed: 31 tasks, anchors, 57 screens, 3 key diagrams, PDF, attribution and A-Level entry.');

const further = read('_site/alevel/fx-cg50/further-mathematics/index.html');
const furtherIds = [...further.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
assert.equal(new Set(furtherIds).size, furtherIds.length, 'Further Mathematics IDs must be unique');
for (const task of Array.from({length: 20}, (_, n) => String(n + 1).padStart(2, '0'))) {
  assert(furtherIds.includes('fm-task-' + task), 'Missing core task ' + task);
}
for (const [, href] of further.matchAll(/href="#([^"]+)"/g)) {
  assert(furtherIds.includes(decodeURIComponent(href)), 'Broken Further Mathematics anchor ' + href);
}
for (const [tag, url] of further.matchAll(/<img[^>]+src="([^"]*\/fx-cg50\/fm\/[^"]+)"[^>]*>/g)) {
  assert(/alt="[^"]+"/.test(tag), 'Further Mathematics image needs alt text');
  assert(fs.existsSync(path.join(root, '_site', url)), 'Missing Further Mathematics image ' + url);
}
assert(further.includes('<html lang="zh-CN">') && further.includes('tex-chtml-full.js'));
// Absolute-value bars in prose must not become Markdown table separators.
assert.equal((further.match(/<table>/g) || []).length, 3, 'Unexpected Further Mathematics table');
assert(/<p>距虚轴的距离是 \$\\lvert\\operatorname\{Re\}z\\rvert\$。比较上表/.test(further), 'Root distance formula must remain one paragraph');
assert(page.includes('href="/alevel/fx-cg50/further-mathematics/"'));
const numerical = read('_site/alevel/fx-cg50/further-mathematics/numerical-calculus/index.html');
const mechanics = read('_site/alevel/fx-cg50/further-mechanics/index.html');
const guidePages = new Map([
  ['/alevel/fx-cg50/', page],
  ['/alevel/fx-cg50/further-mathematics/', further],
  ['/alevel/fx-cg50/further-mathematics/numerical-calculus/', numerical],
  ['/alevel/fx-cg50/further-mechanics/', mechanics]
]);
for (const [url, html] of guidePages) {
  const headingIds = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
  assert.equal(new Set(headingIds).size, headingIds.length, url + ': duplicate ID');
  assert(html.includes('<html lang="zh-CN">') && html.includes('tex-chtml-full.js'), url + ': language or MathJax missing');
  assert(!html.includes('@@figure:') && !html.includes('将继续补充'), url + ': unfinished content');
  for (const [, href] of html.matchAll(/href="([^"]+)"/g)) {
    const destination = new URL(href, 'https://local.test' + url);
    if (destination.origin !== 'https://local.test' || !guidePages.has(destination.pathname)) continue;
    if (destination.hash) assert(guidePages.get(destination.pathname).includes('id="' + decodeURIComponent(destination.hash.slice(1)) + '"'), url + ': broken link ' + href);
  }
  for (const [tag, img] of html.matchAll(/<img[^>]+src="([^" ]*\/fx-cg50\/[^" ]+)"[^>]*>/g)) {
    assert(/alt="[^"]+"/.test(tag), url + ': image needs alt text');
    assert(fs.existsSync(path.join(root, '_site', img)), url + ': missing image ' + img);
  }
  for (const [, cell] of html.matchAll(/<t[dh]\b[^>]*>([\s\S]*?)<\/t[dh]>/g)) assert.equal((cell.match(/(?<!\\)\$/g) || []).length % 2, 0, url + ': math split across cells');
}
for (let n = 21; n <= 30; n++) assert(numerical.includes('id="fm-task-' + n + '"'), 'Missing numerical task ' + n);
for (let n = 1; n <= 6; n++) assert(mechanics.includes('id="fm-mech-' + String(n).padStart(2, '0') + '"'), 'Missing mechanics extension ' + n);
assert.equal((numerical.match(/<table>/g) || []).length, 1, 'Unexpected numerical-method table');
assert.equal((mechanics.match(/<table>/g) || []).length, 0, 'Unexpected mechanics table');
assert(mechanics.includes('fm-shm-phase.png') && mechanics.includes('最接近的整数度'));
assert(numerical.includes('差分消项') && numerical.includes('1.789473684211'));
console.log('Further Mathematics passed: 30 core tasks, six mechanics extensions, cross-page anchors, assets, tables and MathJax configuration.');
