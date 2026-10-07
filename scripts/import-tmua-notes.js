const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

// Import presentation only; compare the protected content before writing.
const sourcePath = process.argv[2];
assert(sourcePath, 'Usage: node scripts/import-tmua-notes.js SOURCE.html [--check]');
const source = fs.readFileSync(sourcePath, 'utf8');
const targetPath = path.join(__dirname, '../admissions/tmua-esat/index.html');
function extract(html, pattern) {
  const match = html.match(pattern);
  assert(match, `Missing ${pattern}`);
  return match[1];
}
const title = extract(source, /<title>(.*?)<\/title>/);
const main = extract(source, /<main>([\s\S]*?)<\/main>/);
const footer = extract(source, /<footer>([\s\S]*?)<\/footer>/);
const originalScript = extract(source, /<script>([\s\S]*?)<\/script>/);
const problems = extract(source, /const PROBLEMS = ([\s\S]*?);\r?\n/);
const subtitle = extract(source, /<div class="sub">(.*?)<\/div>/);
const panel = extract(source, /<aside id="panel">([\s\S]*?)<\/aside>/)
  .replace('<button id="panel-close" title="关闭">✕</button>',
    '<button id="panel-close" type="button" aria-label="关闭" title="关闭"><i class="bi bi-x-lg" aria-hidden="true"></i></button>');
let script = originalScript
  .replace('function hydrateImgs(root) {', 'const FIGURE_SIZES = {{ site.data.tmua_figure_sizes | jsonify }};\nfunction hydrateImgs(root) {')
  .replace("if (v) { im.src = v; im.removeAttribute('data-fig'); }", `if (v) {
      const size = FIGURE_SIZES[im.dataset.fig];
      if (size) {
        const scale = Math.min(1, (im.classList.contains('qfig') ? 380 : 420) / size[1]);
        im.width = Math.round(size[0] * scale);
        im.height = Math.round(size[1] * scale);
      }
      im.loading = 'lazy';
      im.decoding = 'async';
      im.src = v;
      im.removeAttribute('data-fig');
    }`)
  .replace("const panel = document.getElementById('panel');", `function wrapInlineMath(root) {
  root.querySelectorAll('math').forEach(math => {
    const block = math.getAttribute('display') === 'block';
    const wrapper = document.createElement(block ? 'div' : 'span');
    wrapper.className = block ? 'notes-block-math' : 'notes-inline-math';
    math.replaceWith(wrapper);
    wrapper.append(math);
  });
}
wrapInlineMath(document.querySelector('main'));
const panel = document.getElementById('panel');`)
  .replace("panel.classList.add('open');", "wrapInlineMath(panelBody);\n  panel.classList.add('open');")
  .replace("panel.classList.add('open');", "panel.classList.add('open');\n  panel.inert = false;\n  closeBtn.focus();")
  .replace('  panelBody.innerHTML =', '  renderNotesMath(() => {\n  window.MathJax?.typesetClear?.([panelBody]);\n  panelBody.innerHTML =')
  .replace('  panel.scrollTop = 0;', '  panel.scrollTop = 0;\n  });')
  .replace("closeBtn.addEventListener('click', () => panel.classList.remove('open'));", `let lastProblemButton;
document.addEventListener('click', e => {
  const button = e.target.closest('.prob-btn');
  if (button) lastProblemButton = button;
});
function closePanel() {
  panel.classList.remove('open');
  panel.inert = true;
  if (lastProblemButton) lastProblemButton.focus();
}
closeBtn.addEventListener('click', closePanel);
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && panel.classList.contains('open')) closePanel();
});
panel.inert = true;`);
script += `
document.querySelectorAll('main h2, main h3, main h4').forEach((heading, index) => {
  if (!heading.id) heading.id = 'notes-heading-' + index;
});
function refreshNotesTOC() {
  const version = document.body.classList.contains('mode-concise') ? '.ver-concise' : '.ver-full';
  document.getElementById('content-container').dataset.tocHeadings =
    ['h2', 'h3'].flatMap(tag => [version + ' ' + tag, '.ver-both ' + tag]).join(', ');
  generateTOC();
  document.getElementById('tocSearch').dispatchEvent(new Event('input'));
}
modeBtn.addEventListener('click', refreshNotesTOC);
document.addEventListener('DOMContentLoaded', refreshNotesTOC);
`;
const output = `---
layout: subjects
tmua_notes: true
lang: zh-CN
breadcrumb_skip_parent: admissions
mathjax: true
title: ${JSON.stringify(title)}
subtitle: ${JSON.stringify(subtitle)}
description: "ESAT Mathematics 1 & Physics, TMUA & ESAT Mathematics 2"
permalink: /admissions/tmua-esat/
---
<main>${main}</main>
  <aside id="panel" aria-label="题目与解答" tabindex="-1" inert>${panel}</aside>
  <footer class="notes-credit">${footer}</footer>
  <script>${script}</script>
`;
const result = process.argv.includes('--check') ? fs.readFileSync(targetPath, 'utf8') : output;
assert.equal(extract(result, /<main[^>]*>([\s\S]*?)<\/main>/), main, 'Notes changed');
assert.equal(extract(result, /const PROBLEMS = ([\s\S]*?);\r?\n/), problems, 'Problems changed');
assert.equal(extract(result, /<footer class="notes-credit">([\s\S]*?)<\/footer>/), footer, 'Credit changed');
const data = JSON.parse(problems);
const buttons = [...main.matchAll(/data-pid="([^"]+)"/g)].map(m => m[1]);
assert.equal(Object.keys(data).length, 598);
assert.equal(new Set(buttons).size, 598);
for (const id of buttons) assert(data[id], `Missing problem ${id}`);
assert.equal(script.match(/const PROBLEMS = ([\s\S]*?);\r?\n/)[1], problems);
assert.equal(result, output, 'Imported page drifted; compare before re-importing');
if (!process.argv.includes('--check')) {
  fs.mkdirSync(path.dirname(targetPath), { recursive: true });
  fs.writeFileSync(targetPath, output);
}
console.log('Passed: unchanged notes, all 598 problems, original credit, and complete import.');
