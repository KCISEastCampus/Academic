const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = path.join(__dirname, '..');
const read = file => fs.readFileSync(path.join(root, '_site', file), 'utf8');
const home = read('index.html');
const diagrams = read('tests/test.html');
const mermaidScript = /<script\b[^>]*src="[^"]*mermaid\.min\.js"/;
assert(!mermaidScript.test(home), 'Pages without diagrams do not download Mermaid');
for (const file of ['index.html', 'zh/index.html']) {
  const html = read(file);
  const notice = html.match(/<script\b[^>]*src="[^"]*pop_ups\.js"[^>]*>/)?.[0];
  assert(notice?.includes('async'), `${file}: optional notices do not block parsing or DOM readiness`);
}
for (const file of ['index.html', 'zh/index.html', 'zh/alevel/a2-mathematics/mechanics/index.html']) {
  const badge = read(file).match(/<img\b[^>]*id="hitscounter-badge"[^>]*>/)?.[0];
  assert(badge?.includes('loading="lazy"'), `${file}: offscreen third-party counter does not delay page load`);
}
assert(/class="language-mermaid"/.test(diagrams), 'The diagram fixture still contains Mermaid blocks');
assert(mermaidScript.test(diagrams), 'Pages with diagrams retain the renderer');
const preload = home.match(/<link\b(?=[^>]*rel="preload")(?=[^>]*href="[^"]*bootstrap\.min\.css")[^>]*>/)?.[0];
assert(preload, 'Bootstrap preload exists');
assert(preload.includes('crossorigin="anonymous"'), 'Preload and stylesheet use the same request mode');
const lesson = read('zh/alevel/a2-physics/capacitance/index.html');
const mathPreload = lesson.match(/<link\b(?=[^>]*rel="preload")(?=[^>]*href="[^"]*tex-chtml-full\.js")[^>]*>/)?.[0];
assert(mathPreload?.includes('crossorigin="anonymous"'), 'MathJax preload matches the anonymous script request');
for (const [file, absent] of [
  ['docs/universal_math_guide.html', '/docs/'],
  ['tests/formula_test.html', '/tests/'],
  ['tests/test.html', '/tests/']
]) {
  const breadcrumb = read(file).match(/<nav\b[^>]*class="site-breadcrumb"[^>]*>[\s\S]*?<\/nav>/)?.[0];
  assert(breadcrumb, `${file}: breadcrumb exists`);
  assert(!breadcrumb.includes(`href="${absent}"`), `${file}: nonexistent parent is not a link`);
}
console.log('Frontend loading passed: nonblocking notices, lazy counters, conditional diagrams, reusable style preload and valid parent breadcrumbs.');
