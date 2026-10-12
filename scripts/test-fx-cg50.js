// Run after bundle exec jekyll build.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const windowMock = { addEventListener() {} };
const root = path.join(__dirname, '..');
const read = name => fs.readFileSync(path.join(root, name), 'utf8');
const overview = read('_site/alevel/fx-cg50/index.html');
const beginner = read('_site/alevel/fx-cg50/beginner/index.html');
const advanced = read('_site/alevel/fx-cg50/advanced/index.html');
const page = overview + beginner + advanced;
const ids = [...page.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
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
assert(page.includes('UK') && page.includes('IB') && page.includes('品红色'));
assert.equal((page.match(/<details\b/g) || []).length, 7, 'Practice answers must remain collapsible');
const source = read('alevel/fx-cg50/beginner/index.md') + read('alevel/fx-cg50/advanced/index.md');
for (const formula of ['\\frac{1}{2}', '\\sqrt{72}', '\\sin\\left(\\frac{\\pi}{6}\\right)', '\\log_{10}(1000)', '10^{23}', '$(-3)^2$', '$-3^2$']) {
  assert(source.includes(formula), `Missing TeX expression ${formula}`);
}
for (const [, keys] of source.matchAll(/`([^`]+)`/g)) assert(!keys.includes('$'), 'Key sequences must remain literal');

for (let n = 1; n <= 10; n++) assert(ids.includes(`chapter-${n}`), `Missing chapter ${n}`);
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
const advancedMechanics = read('_site/alevel/fx-cg50/advanced/mechanics/index.html');
const guidePages = new Map([
  ['/alevel/fx-cg50/', overview],
  ['/alevel/fx-cg50/beginner/', beginner],
  ['/alevel/fx-cg50/advanced/', advanced],
  ['/alevel/fx-cg50/advanced/mechanics/', advancedMechanics],
  ['/alevel/fx-cg50/further-mathematics/', further],
  ['/alevel/fx-cg50/further-mathematics/numerical-calculus/', numerical],
  ['/alevel/fx-cg50/further-mechanics/', mechanics]
]);
const applications = '/alevel/fx-cg50/mathematics/';
const referencePdfs = new Set();
for (const [url, html] of guidePages) {
  assert(!/https?:\/\/(?:drive|docs)\.google\.com\//.test(html), url + ': personal Drive link');
  const headingIds = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
  assert.equal(new Set(headingIds).size, headingIds.length, url + ': duplicate ID');
  assert(html.includes('<html lang="zh-CN">') && html.includes('tex-chtml-full.js'), url + ': language or MathJax missing');
  assert(!/@@figure:|将继续补充|文字初稿|核对进度|后续工作|截图待补充|尚待同版本实机抽查|尚未在这台中文版实机验收|本轮选用|下一步请老师审阅|第 4–9 章已在/.test(html), url + ': editorial status must stay out of student pages');
  for (const [, href] of html.matchAll(/href="([^"]+)"/g)) {
    const destination = new URL(href, 'https://local.test' + url);
    if (destination.origin === 'https://local.test' && destination.pathname.startsWith('/assets/pdf/fx-cg50/references/')) {
      const file = fs.readFileSync(path.join(root, '_site', destination.pathname));
      assert(file.subarray(0, 5).equals(Buffer.from('%PDF-')), url + ': invalid reference PDF ' + href);
      referencePdfs.add(destination.pathname);
    }
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

assert.equal(referencePdfs.size, 18, 'All 18 exam reference PDFs must be linked locally');
console.log('Reference PDFs passed: 18 local files and no personal Drive links.');

// The learning route must work across all pages, with an accurate current stage.
for (const [url, html] of guidePages) {
  const breadcrumb = html.match(/<nav[^>]*class="site-breadcrumb"[^>]*>([\s\S]*?)<\/nav>/)[1];
  if (url !== '/alevel/fx-cg50/') assert(breadcrumb.includes('fx-CG50 指南'), url + ': guide breadcrumb missing');
  if (url.includes('/further-')) assert(breadcrumb.includes('href="/alevel/fx-cg50/#further-topics"'), url + ': stage breadcrumb missing');
  assert(html.includes('本页目录') && html.includes('搜索本页目录'), url + ': page-local contents label missing');
  const nav = html.match(/<nav class="cg50-stage-nav"[^>]*>([\s\S]*?)<\/nav>/);
  assert(nav, url + ': learning-stage navigation missing');
  for (const destination of ['beginner/', 'advanced/', 'further-mathematics/']) {
    assert(nav[1].includes('href="/alevel/fx-cg50/' + destination + '"'), url + ': stage link missing');
  }
  const selected = [...nav[1].matchAll(/<a href="([^"]+)" aria-current="step"/g)];
  assert.equal(selected.length, url === '/alevel/fx-cg50/' ? 0 : 1, url + ': current-stage count');
  if (selected.length) {
    const expected = url.includes('/beginner/') ? '/alevel/fx-cg50/beginner/'
      : url.includes('/advanced/') ? '/alevel/fx-cg50/advanced/' : '/alevel/fx-cg50/further-mathematics/';
    assert.equal(selected[0][1], expected, url + ': wrong current stage');
  }
  if (url.includes('/further-')) {
    const topics = nav[1].match(/<div class="cg50-topic-links" aria-label="高数进阶专题">([\s\S]*?)<\/div>/);
    assert(topics, url + ': Further Mathematics topic navigation missing');
    const current = [...topics[1].matchAll(/<a href="([^"]+)" aria-current="page"/g)];
    assert.equal(current.length, 1, url + ': current topic count');
    assert.equal(current[0][1], url, url + ': wrong current topic');
  }
  assert(!nav[1].includes(applications), url + ': MA units must not be a separate learning route');
  if (url.includes('/advanced/')) {
    const topics = nav[1].match(/<div class="cg50-topic-links" aria-label="进阶专题">([\s\S]*?)<\/div>/)[1];
    const current = [...topics.matchAll(/<a href="([^"]+)" aria-current="page"/g)];
    assert.equal(current.length, 1, url + ': current advanced topic count');
    assert.equal(current[0][1], url, url + ': wrong advanced topic');
    assert(html.includes('英文题意改写') && html.includes('答卷保留'), url + ': source label or written method missing');
    if (url.includes('/mechanics/')) assert(breadcrumb.includes('href="/alevel/fx-cg50/advanced/"'), url + ': advanced breadcrumb missing');
  }
}
// Keep bookmarked MA examples working after merging them into the advanced lessons.
let applicationCount;
for (const unit of ['', 'ma01/', 'ma02/', 'ma03/', 'ma04/', 'ma05/']) {
  const url = applications + unit;
  const html = read('_site' + url + 'index.html');
  assert(html.includes('content="noindex"'), url + ': legacy route must not duplicate search results');
  const script = html.match(/<script id="cg50-legacy-mathematics">([\s\S]*?)<\/script>/)[1];
  let targets;
  vm.runInNewContext(script + '\nresult = destinations;', {location: {hash: '', replace() {}}, set result(value) { targets = value; }});
  const examples = Object.keys(targets).filter(anchor => /^ma0[1-5]-/.test(anchor) && !anchor.endsWith('-check'));
  assert.equal(examples.length, 34, 'All MA applications must survive the merge');
  applicationCount = examples.length;
  for (const [anchor, expected] of Object.entries(targets)) {
    const destination = new URL(expected, 'https://local.test');
    assert(guidePages.has(destination.pathname), 'Missing merged destination: ' + expected);
    if (destination.hash) assert(guidePages.get(destination.pathname).includes('id="' + destination.hash.slice(1) + '"'), 'Missing merged anchor: ' + expected);
    let redirected;
    vm.runInNewContext(script, {location: {hash: '#' + anchor, replace: value => { redirected = value; }}});
    assert.equal(redirected, expected, url + ': broken MA bookmark ' + anchor);
  }
  for (const hash of ['', '#unknown', '#__proto__']) {
    let redirected;
    vm.runInNewContext(script, {location: {hash, replace: value => { redirected = value; }}});
    const expected = unit === 'ma05/' ? '/alevel/fx-cg50/advanced/mechanics/'
      : '/alevel/fx-cg50/advanced/#' + (unit ? unit.slice(0, -1) : 'mathematics-units');
    assert.equal(redirected, expected, url + ': incorrect legacy fallback');
  }
  for (const anchor of examples) {
    assert.equal(((advanced + advancedMechanics).match(new RegExp('<h3 id="' + anchor + '"', 'g')) || []).length, 1, 'Merged application must occur exactly once: ' + anchor);
  }
}
for (let n = 1; n <= 5; n++) {
  for (const kind of ['question-paper', 'mark-scheme']) assert(advanced.includes(`href="/assets/pdf/fx-cg50/references/oxfordaqa-ma0${n}-2025-january-${kind}.pdf"`), 'Paired January 2025 source missing');
}
for (const [before, example, after] of [['task-16', 'ma01-distance', 'task-17'], ['task-21', 'ma03-iteration', 'chapter-7'], ['task-22', 'ma03-parametric', 'task-23'], ['task-27', 'ma02-binomial', 'task-28']]) {
  assert(advanced.indexOf('id="' + before + '"') < advanced.indexOf('id="' + example + '"') && advanced.indexOf('id="' + example + '"') < advanced.indexOf('id="' + after + '"'), 'Example must follow its relevant operation: ' + example);
}
for (let n = 1; n <= 31; n++) {
  const target = n <= 14 ? beginner : advanced;
  const other = n <= 14 ? advanced : beginner;
  assert(target.includes('id="task-' + n + '"'), 'Task in wrong learning stage: ' + n);
  assert(!other.includes('id="task-' + n + '"'), 'Duplicate task across stages: ' + n);
}
assert(!overview.includes('id="task-1"') && !overview.includes('id="chapter-1"'), 'Overview must be a route map, not the old long lesson');
assert(beginner.slice(beginner.indexOf('id="beginner-next"')).includes('href="/alevel/fx-cg50/advanced/"') && advanced.slice(advanced.indexOf('id="advanced-next"')).includes('href="/alevel/fx-cg50/further-mathematics/"'), 'Next-stage links missing from completion sections');
// Run the shipped legacy-bookmark script in a synthetic location, not a browser.
const legacyScript = overview.match(/<script id="cg50-legacy-anchors">([\s\S]*?)<\/script>/)[1];
for (const [stage, html, count] of [['beginner', beginner, 26], ['advanced', advanced, 24]]) {
  const anchors = JSON.parse(legacyScript.match(new RegExp('const ' + stage + ' = (\\[[^;]+\\]);'))[1]);
  assert.equal(anchors.length, count, 'Legacy anchor inventory changed: ' + stage);
  for (const anchor of anchors) {
    assert(html.includes('id="' + anchor + '"'), 'Legacy target missing: ' + anchor);
    let redirected;
    vm.runInNewContext(legacyScript, { window: windowMock, location: { hash: '#' + anchor, replace: url => { redirected = url; } } });
    assert.equal(redirected, '/alevel/fx-cg50/' + stage + '/#' + anchor, 'Legacy bookmark route: ' + anchor);
  }
}
for (const hash of ['', '#exam-mode', '#credits', '#further-topics', '#unknown', '#__proto__']) {
  let redirected;
  vm.runInNewContext(legacyScript, { window: windowMock, location: { hash, replace: url => { redirected = url; } } });
  assert.equal(redirected, undefined, 'Overview or unknown anchor must not redirect: ' + hash);
}
console.log(`Learning routes passed: 7 pages, ${applicationCount} integrated MA applications, 14 beginner + 17 advanced tasks, active navigation, 50 old guide bookmarks and six MA redirect routes.`);

let hashChange;
let changedDestination;
const changingLocation = { hash: '', replace: url => { changedDestination = url; } };
vm.runInNewContext(legacyScript, { location: changingLocation, window: { addEventListener: (event, listener) => { if (event === 'hashchange') hashChange = listener; } } });
assert.equal(typeof hashChange, 'function', 'Old anchors must work after a same-page hash change');
changingLocation.hash = '#task-23';
hashChange();
assert.equal(changedDestination, '/alevel/fx-cg50/advanced/#task-23');
