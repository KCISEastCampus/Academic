const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = path.join(__dirname, '..');
const read = file => fs.readFileSync(path.join(root, '_site', file), 'utf8');
const home = read('index.html');
const diagrams = read('tests/test.html');
const mermaidScript = /<script\b[^>]*src="[^"]*mermaid\.min\.js"/;
assert(!mermaidScript.test(home), 'Pages without diagrams do not download Mermaid');
assert(/class="language-mermaid"/.test(diagrams), 'The diagram fixture still contains Mermaid blocks');
assert(mermaidScript.test(diagrams), 'Pages with diagrams retain the renderer');
const preload = home.match(/<link\b(?=[^>]*rel="preload")(?=[^>]*href="[^"]*bootstrap\.min\.css")[^>]*>/)?.[0];
assert(preload, 'Bootstrap preload exists');
assert(preload.includes('crossorigin="anonymous"'), 'Preload and stylesheet use the same request mode');
for (const [file, absent] of [
  ['docs/universal_math_guide.html', '/docs/'],
  ['tests/formula_test.html', '/tests/'],
  ['tests/test.html', '/tests/']
]) {
  const breadcrumb = read(file).match(/<nav\b[^>]*class="site-breadcrumb"[^>]*>[\s\S]*?<\/nav>/)?.[0];
  assert(breadcrumb, `${file}: breadcrumb exists`);
  assert(!breadcrumb.includes(`href="${absent}"`), `${file}: nonexistent parent is not a link`);
}
console.log('Frontend loading passed: conditional diagrams, reusable style preload and valid parent breadcrumbs.');
