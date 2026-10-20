const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = path.join(__dirname, '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8');

for (const prefix of ['', 'zh/']) {
  const html = read(`_site/${prefix}alevel/a2-mathematics/integration/index.html`);
  assert.equal((html.match(/<header class="subject-header">/g) || []).length, 1);
  assert(html.indexOf('class="reading-layout"') < html.indexOf('<header class="subject-header">'));
  const examples = [...html.matchAll(/<section class="worked-example">([\s\S]*?)<\/section>/g)];
  assert.equal(examples.length, 6, 'Each worked question has one complete boundary');
  for (const [, example] of examples) {
    assert.match(example, /<h[34] id="example-/, 'Keep the existing example anchor');
    assert.match(example, /Question:/);
    assert.match(example, /检查|Check/);
    assert(!example.includes('<h2'), 'A new chapter must stay outside the example');
  }
  const firstExercise = html.slice(html.indexOf('id="q1--simplify-first"'));
  assert.match(firstExercise, /<details>\s*<summary>/, 'Independent solutions remain closed');
  assert(!/<details\b[^>]*\bopen\b/.test(firstExercise));
  assert(html.includes('data-toc-compact="true"'));
}

for (const route of ['zh/alevel/a2-chemistry/', 'admissions/tmua-esat/', 'student-council/news/recruitment/']) {
  const html = read(`_site/${route}index.html`);
  assert(!html.includes('/assets/css/reading.css'), 'The sample stylesheet stays scoped');
}
for (const route of ['zh/alevel/a2-chemistry/', 'zh/igcse/mathematics/', 'alevel/as-economics/']) {
  const html = read(`_site/${route}index.html`);
  assert(html.indexOf('<div id="main-container"') < html.indexOf('<header class="subject-header">'),
    `${route}: ordinary courses share the aligned header`);
  assert.equal((html.match(/<header class="subject-header">/g) || []).length, 1);
}
const tmua = read('_site/admissions/tmua-esat/index.html');
assert(tmua.indexOf('<header class="subject-header">') < tmua.indexOf('<div id="main-container"'),
  'Keep the specialized TMUA controls in their existing shell');
console.log('Reading sample passed: bilingual examples, stable anchors, closed practice solutions and scoped layout.');
