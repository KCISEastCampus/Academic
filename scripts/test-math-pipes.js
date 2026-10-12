// Markdown parses tables before MathJax sees formulas, including table cells.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = path.join(__dirname, '..');

function mathPipes(source) {
  const mask = text => text.replace(/[^\r\n]/g, ' ');
  const content = source
    .replace(/^---\r?\n[\s\S]*?\r?\n---(?:\r?\n|$)/, mask)
    .replace(/^ {0,3}(`{3,}|~{3,})[^\n]*\n[\s\S]*?^ {0,3}\1[ \t]*$/gm, mask)
    .replace(/<(script|style|pre|code)\b[^>]*>[\s\S]*?<\/\1>/gi, mask)
    .replace(/(`+)[^\r\n]*?\1/g, mask);
  const formulas = /(?<!\\)\$\$[\s\S]*?(?<!\\)\$\$|(?<![\\$])\$(?!\$)(?:\\.|[^$])*?(?<!\\)\$(?!\$)|\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\]/g;
  const failures = [];
  let match;
  while ((match = formulas.exec(content))) {
    if (/^\$[+-]?\d+(?:[.,]\d+)*[ \t]*\|(?:[^$]*\|)?[ \t]*\$$/.test(match[0]) &&
        /[^\s|$]/.test(content[formulas.lastIndex] || '')) {
      // A price can precede the next cell's opening dollar; scan that dollar again.
      formulas.lastIndex--;
      continue;
    }
    if (match[0].includes('|')) {
      failures.push({
        line: content.slice(0, match.index).split('\n').length,
        formula: match[0],
      });
    }
  }
  return failures;
}

assert.equal(mathPipes('$|x|$').length, 1);
assert.equal(mathPipes('| Force | $k|Qq|/r^2$ |').length, 1);
assert.equal(mathPipes('$$\\ln\\left|\\frac{x+1}{x-1}\\right|$$').length, 1);
assert.equal(mathPipes('\\( |v| \\)\n\\[ |x| \\]').length, 2);
assert.equal(mathPipes('$x+\n|y|$').length, 1);
assert.equal(mathPipes('$\\left. f(x)\\right|_{x=0}$').length, 1);
assert.equal(mathPipes('$\\|v\\|$').length, 1);
assert.equal(mathPipes('$\\lvert x\\rvert$, $\\left\\lvert x\\right\\rvert$, $\\lVert v\\rVert$').length, 0);
assert.equal(mathPipes('| Formula | Value |\n|---|---|\n| $x$ | $y$ |').length, 0);
assert.equal(mathPipes('`$|x|$`\n```\n$|y|$\n```\n~~~\n$|z|$\n~~~').length, 0);
assert.equal(mathPipes('<script>const value = "$x|y$";</script><code>$|x|$</code>').length, 0);
assert.equal(mathPipes('---\ntitle: "$|x|$"\n---\n\n$|y|$')[0].line, 5);
assert.equal(mathPipes('\\$5 and \\$10').length, 0);
assert.equal(mathPipes('| Price | $5 | $10 |').length, 0);
assert.equal(mathPipes('| Price | $5.50 | $10.25 | $20 |').length, 0);
assert.equal(mathPipes('| Price | $5 | $x$ | $10 | $y$ |').length, 0);
assert.equal(mathPipes('| Price | $5 | $10 | $|x|$ |').length, 1);
assert.equal(mathPipes('| Formula | $5|x|$ |').length, 1);
assert.equal(mathPipes('| Formula | $5|$ |').length, 1);
assert.equal(mathPipes('| Item | Price |\n|---|---|\n| A | $5 |\n| B | $10 |').length, 0);
assert.equal(mathPipes('| Price | $5 | note | $10 |').length, 0);
assert.equal(mathPipes('| Refund | $-5 | $-10 |').length, 0);
assert.equal(mathPipes('| A | $5 |\n| B | $10 | $|x|$ |').length, 1);

const skipped = new Set(['_site', 'vendor', 'node_modules', 'scripts', 'npm-cache']);
const failures = [];
let files = 0;
function scan(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if (entry.name.startsWith('.') || skipped.has(entry.name)) continue;
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) scan(file);
    else if (/\.(md|markdown)$/i.test(entry.name)) {
      files++;
      for (const { line, formula } of mathPipes(fs.readFileSync(file, 'utf8'))) {
        failures.push(`${path.relative(root, file)}:${line}: ${formula.replace(/\s+/g, ' ')}`);
      }
    }
  }
}
scan(root);
assert.equal(failures.length, 0,
  `Use \\lvert...\\rvert, \\lVert...\\rVert, \\mid or \\vert instead of literal pipes in math:\n${failures.join('\n')}`);
console.log(`Math pipe checks passed: ${files} Markdown files and 23 scanner regressions.`);
