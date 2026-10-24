// Compare the rewritten MA03 source and rebuilt HTML with the saved baseline.
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const root = process.cwd();
const baseline = JSON.parse(fs.readFileSync(path.join(__dirname, 'baseline-guards.json'), 'utf8'));
const math = text => text.match(/\$\$[\s\S]*?\$\$|\$[^$\n]+\$/g) || [];
const ids = text => [...text.matchAll(/\{#([^}]+)\}|\bid="([^"]+)"/g)].map(m => m[1] || m[2]);
const sha = value => crypto.createHash('sha256').update(value).digest('hex');
const pages = [];
let headings = 0, questions = 0, formulas = 0;
for (const old of baseline.pages) {
  const source = fs.readFileSync(path.join(root, old.path), 'utf8');
  const actualQuestions = source.match(/^\*\*Question:\*\* .+$/gm) || [];
  assert.deepEqual(actualQuestions, old.questions, old.path + ': original English questions');
  questions += actualQuestions.length;
  const sourceIDs = ids(source);
  for (const pair of old.sourceIDs) assert(sourceIDs.includes(pair[0] || pair[1]), old.path + ': original source ID');
  const htmlPath = '_site/' + old.path.replace(/index\.md$/, 'index.html').replace(/\.md$/, '/index.html');
  const html = fs.readFileSync(path.join(root, htmlPath), 'utf8');
  const headingIDs = [...html.matchAll(/<h[1-6]\b[^>]*\bid="([^"]+)"/g)].map(m => m[1]);
  for (const id of old.oldHeadingIDs) assert(headingIDs.includes(id), old.path + ': original heading #' + id);
  headings += old.oldHeadingIDs.length;
  if (!old.path.startsWith('zh/')) {
    const translated = fs.readFileSync(path.join(root, 'zh', old.path), 'utf8');
    const enMath = math(source), zhMath = math(translated);
    const firstDifference = enMath.findIndex((value, i) => value !== zhMath[i]);
    assert(firstDifference === -1 && enMath.length === zhMath.length, old.path + ': paired mathematical expressions, first difference ' + firstDifference);
    formulas += math(source).length;
  }
  pages.push({ path: old.path, sourceSHA256: sha(source), htmlSHA256: sha(html) });
}
assert.equal(pages.length, 34);
const styles = ['assets/css/reading.css', 'assets/css/home.css', '_layouts/subjects.html'].map(file => ({path:file, sha256:sha(fs.readFileSync(path.join(root, file)))}));
const result = { baseline: baseline.baseline, pages: pages.length, preservedHeadingIDs: headings, preservedEnglishPrompts: questions, pairedMathExpressions: formulas, sources: pages, sharedStyles: styles };
fs.writeFileSync(path.join(__dirname, 'source-manifest.json'), JSON.stringify(result, null, 2) + '\n');
console.log(JSON.stringify({pages:pages.length, preservedHeadingIDs:headings, preservedEnglishPrompts:questions, pairedMathExpressions:formulas}));
