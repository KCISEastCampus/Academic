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
  .replace("const panel = document.getElementById('panel');", `function wrapInlineMath(root) {
  root.querySelectorAll('math[display="inline"]').forEach(math => {
    const wrapper = document.createElement('span');
    wrapper.className = 'notes-inline-math';
    math.replaceWith(wrapper);
    wrapper.append(math);
  });
}
wrapInlineMath(document.querySelector('main'));
const panel = document.getElementById('panel');`)
  .replace("panel.classList.add('open');", "wrapInlineMath(panelBody);\n  panel.classList.add('open');")
  .replace("panel.classList.add('open');", "panel.classList.add('open');\n  panel.inert = false;\n  closeBtn.focus();")
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
    ['h2', 'h3'].map(tag => version + ' ' + tag).join(', ');
  generateTOC();
  document.getElementById('tocSearch').dispatchEvent(new Event('input'));
}
modeBtn.addEventListener('click', refreshNotesTOC);
refreshNotesTOC();
`;
const output = `---
layout: none
title: ${JSON.stringify(title)}
description: "TMUA & ESAT Mathematics 2"
permalink: /admissions/tmua-esat/
---
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  {% include head.html %}
  <link rel="stylesheet" href="/assets/css/subject.css">
  <link rel="stylesheet" href="/assets/css/tmua-notes.css">
  <script src="/assets/js/toc_generator.js"></script>
</head>
<body class="tmua-notes scheme-alevel">
  {% include nav.html %}
  <header class="notes-header">
    <a href="/">Academic</a>
    <h1>${title}</h1>
    <div class="notes-controls"><p class="sub">${subtitle}</p><button id="mode-toggle" type="button">切换到简洁版</button></div>
  </header>
  <button class="toc-toggle" id="tocToggle" type="button" aria-label="Toggle Table of Contents" aria-controls="toc" aria-expanded="false"><i class="bi bi-list" aria-hidden="true"></i></button>
  <div id="main-container">
    <main id="content-container" data-pagefind-body>${main}</main>
    <div id="toc" class="table-of-contents">
      <div class="toc-header-fixed">
        <h2 class="contents-list">Contents</h2>
        <div class="toc-search-container">
          <input type="text" id="tocSearch" class="toc-search-input" placeholder="Search contents..." aria-label="Search table of contents">
          <button id="tocSearchClear" class="toc-search-clear" aria-label="Clear search" style="display: none;"><i class="bi bi-x-circle"></i></button>
        </div>
        <div class="reading-progress-container">
          <div class="reading-progress-bar" id="readingProgress"></div>
          <span class="reading-progress-text" id="progressText">0%</span>
        </div>
      </div>
      <div class="toc-content"></div>
    </div>
  </div>
  <aside id="panel" aria-label="题目与解答" tabindex="-1" inert>${panel}</aside>
  <footer class="notes-credit">${footer}</footer>
  {% include footer.html %}
  <script>${script}</script>
</body>
</html>
`;
const result = process.argv.includes('--check') ? fs.readFileSync(targetPath, 'utf8') : output;
assert.equal(extract(result, /<main[^>]*>([\s\S]*?)<\/main>/), main, 'Notes changed');
assert.equal(extract(result, /const PROBLEMS = ([\s\S]*?);\r?\n/), problems, 'Problems changed');
assert.equal(extract(result, /<footer class="notes-credit">([\s\S]*?)<\/footer>/), footer, 'Credit changed');
const data = JSON.parse(problems);
const buttons = [...main.matchAll(/data-pid="([^"]+)"/g)].map(m => m[1]);
assert.equal(Object.keys(data).length, 94);
assert.equal(new Set(buttons).size, 94);
for (const id of buttons) assert(data[id], `Missing problem ${id}`);
assert.equal(script.match(/const PROBLEMS = ([\s\S]*?);\r?\n/)[1], problems);
assert.equal(result, output, 'Imported page drifted; compare before re-importing');
if (!process.argv.includes('--check')) {
  fs.mkdirSync(path.dirname(targetPath), { recursive: true });
  fs.writeFileSync(targetPath, output);
}
console.log('Passed: unchanged notes, all 94 problems, original credit, and complete import.');
