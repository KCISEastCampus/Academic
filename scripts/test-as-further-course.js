// Source checks only. Main owns the Jekyll build and rendered-page acceptance.
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.resolve(__dirname, '..');
const read = p => fs.readFileSync(path.join(root, p), 'utf8').replace(/\r\n/g, '\n');
const route = {
  'rational-functions': ['FP1.1'],
  'conics-and-loci': ['FP1.1', 'FP1.2'],
  'trigonometric-solutions': ['FP1.6'],
  'complex-numbers-and-roots': ['FP1.3', 'FP1.4'],
  series: ['FP1.5'],
  'rates-and-approximations': ['FP1.7'],
  'improper-integrals': ['FP1.7'],
  'matrix-algebra': ['FPP1.1'],
  transformations: ['FPP1.1'],
  linearisation: ['FPP1.2'],
  'numerical-roots': ['FPP1.3'],
  'euler-method': ['FPP1.3'],
  bayes: ['FS1.1'],
  'discrete-uniform': ['FS1.2'],
  'geometric-distribution': ['FS1.3'],
  'generating-functions': ['FS1.4'],
  'linear-combinations': ['FS1.5'],
  'relative-motion': ['FM1.1'],
  dimensions: ['FM1.2'],
  'impulse-and-collisions': ['FM1.3']
};
const math = s => [...s.matchAll(/\$\$[\s\S]*?\$\$|(?<!\$)\$(?!\$)[^$\n]*?\$/g)].map(m => m[0]);
const ids = s => [...s.matchAll(/\{#([a-z0-9-]+)\}|\bid="([a-z0-9-]+)"/g)].map(m => m[1] || m[2]);
const prompts = s => s.split('\n').filter(l => /^\*\*(Scaffold|Independent task|Retry) \(self-written\):\*\*/.test(l));
const enIndex = read('alevel/as-further-mathematics/index.md');
const zhIndex = read('zh/alevel/as-further-mathematics/index.md');
for (const [slug, topics] of Object.entries(route)) {
  const rel = `alevel/as-further-mathematics/${slug}.md`;
  const en = read(rel), zh = read(`zh/${rel}`);
  const url = `/alevel/as-further-mathematics/${slug}/`;
  assert.ok(enIndex.includes(`](${url})`), `${slug}: EN route`);
  assert.ok(zhIndex.includes(`](/zh${url})`), `${slug}: ZH route`);
  assert.ok(en.includes(`permalink: ${url}`));
  assert.ok(zh.includes(`translation_of: ${url}`));
  assert.ok(zh.includes(`permalink: /zh${url}`));
  assert.ok(zh.includes('lang: zh-CN'));
  assert.ok(!/[\u3400-\u9fff]/u.test(en), `${slug}: CJK in English lesson`);
  assert.deepEqual(ids(en), ids(zh), `${slug}: stable bilingual IDs`);
  assert.equal(new Set(ids(en)).size, ids(en).length, `${slug}: duplicate ID`);
  const enMath = math(en), zhMath = math(zh);
  enMath.sort(); zhMath.sort();
  assert.deepEqual(enMath, zhMath, `${slug}: matching bilingual formulas`);
  assert.deepEqual(prompts(en), prompts(zh), `${slug}: exact English prompts`);
  {
    const allPrompts = s => s.split('\n').filter(l => /^\*\*.*\(self-written\):\*\*/.test(l));
    assert.deepEqual(allPrompts(en), allPrompts(zh), `${slug}: full bilingual task wording`);
    for (const s of [en, zh]) {
      const tasks = [...s.matchAll(/<section class="lesson-check"[^>]*markdown="1">([\s\S]*?)<\/section>/g)];
      assert.ok(tasks.length > 0, `${slug}: student tasks`);
      for (const [, task] of tasks) {
        assert.ok(!task.includes('<section'), 'Questions must not nest');
        assert.equal((task.match(/<details /g) || []).length, 2, 'Each question owns its help and feedback');
        assert.match(task, /\*\*.*\(self-written\):\*\*/);
      }
      assert.ok(s.includes('reading_layout: true'));
    }
  }
  for (const s of [en, zh]) {
    for (const id of ['model', 'demonstration', 'practice', 'retry', 'sources']) assert.ok(ids(s).includes(id), `${slug}: ${id}`);
    const disclosures = (s.match(/<details markdown="1">/g) || []).length;
    assert.ok(disclosures >= 4, `${slug}: separate practice/feedback disclosures`);
    assert.equal((s.match(/<\/details>/g) || []).length, disclosures, `${slug}: balanced disclosures`);
    assert.ok(!/<details\b[^>]*\bopen\b/.test(s), `${slug}: answers closed by default`);
    assert.ok(!/\[\[|\|\||\\cancel\b/.test(s), `${slug}: authoring marker or unsupported cancel`);
    assert.ok(!math(s).some(m => m.includes('|')), `${slug}: ASCII pipe in TeX`);
    assert.ok(!math(s).some(m => !m.startsWith('$$') && m.includes('\\begin{')), `${slug}: matrices and environments need display math to preserve row breaks`);
    assert.ok(s.includes('self-written'));
    assert.ok(topics.every(t => s.includes(t)));
    assert.ok(s.includes('9665 specification v5.2'));
    assert.ok(s.includes('MS p'));
    if (slug === 'rational-functions' || topics.some(t => t.startsWith('FP1.'))) assert.ok(s.includes('Specimen 2018 Morning'));
    for (const [, image] of s.matchAll(/!\[[^\]]+\]\((\/alevel\/as-further-mathematics\/diagrams\/[^)]+)\)/g)) {
      const svg = read(image.slice(1));
      assert.ok(svg.includes('viewBox=') && svg.includes('<title') && svg.includes('<desc') && svg.includes('aria-labelledby='), image);
    }
  }
}
assert.equal(Object.keys(route).length, 20);
assert.equal(new Set(Object.values(route).flat()).size, 18);
for (const index of [enIndex, zhIndex]) {
  assert.ok(index.includes('toc_headings: "#learning-route, #entry-diagnosis, #route-a, #route-b, #route-s, #route-m, #exit-check, #course-sources, #reference-notes"'), 'course TOC excludes archived headings');
  assert.ok(index.split('{#reference-notes}')[1].includes('<details markdown="1">') && index.trim().endsWith('</details>'), 'legacy content stays in an archive panel');
  assert.ok(index.includes('{#learning-route}') && index.includes('{#entry-diagnosis}') && index.includes('{#exit-check}'));
  assert.ok(index.includes('Specimen 2018 Morning'));
  const current = index.split(/## (?:Archived reference|旧版参考资料)/)[0];
  assert.ok(current.includes('reading_layout: true'));
  assert.ok(!/\*\*[ABSM]\d+ ·/.test(current), 'learner entrance uses topic names');
  for (const [, task] of current.matchAll(/<section class="lesson-check" markdown="1">([\s\S]*?)<\/section>/g)) {
    assert.equal((task.match(/<details /g) || []).length, 2, 'entrance tasks own hint and solution');
    assert.ok(!task.includes('<section'), 'entrance questions do not nest');
  }
  assert.ok(current.indexOf('rational-functions/') < current.indexOf('### Entry diagnosis') || current.indexOf('rational-functions/') < current.indexOf('### 入口诊断'), 'learner start before optional diagnosis');
}
const currentIndex = s => s.split(/## (?:Archived reference|旧版参考资料)/)[0];
assert.deepEqual(math(currentIndex(enIndex)).sort(), math(currentIndex(zhIndex)).sort(), 'entrance bilingual math');
assert.deepEqual(currentIndex(enIndex).split('\n').filter(l => l.startsWith('**Task (self-written):**')), currentIndex(zhIndex).split('\n').filter(l => l.startsWith('**Task (self-written):**')), 'entrance bilingual English prompts');
assert.ok(enIndex.includes('After five iterations the retained interval is $[1.3125,1.34375]$'));
assert.ok(enIndex.includes('When $A\\ne0$'));
assert.ok(enIndex.includes('constructed data illustrate an exact power law'));
assert.ok(enIndex.includes('two close approximations alone do not prove an error bound'));
assert.ok(!fs.existsSync(path.join(root, 'alevel/as-further-mathematics/_authoring.py')));
console.log('PASS: 20 bilingual lesson pairs; 18 topics; exact IDs, math and prompts; sources, disclosures and diagrams.');

// Actual legacy heading IDs read from the pre-upgrade generated English HTML.
const legacyIds = [
  "️-as-level-course-structure",
  "two-compulsory-units",
  "unit-fp1-pure-mathematics",
  "unit-fpsm1-pure-mathematics-statistics-and-mechanics",
  "-unit-fp1-pure-mathematics",
  "1-algebra-and-graphs-fp11",
  "11-rational-functions---complete-foundation",
  "12-conic-sections---deep-understanding",
  "2-coordinate-geometry-fp12",
  "locus-problems---systematic-approach",
  "3-complex-numbers-fp13",
  "31-what-are-complex-numbers",
  "32-basic-operations---step-by-step",
  "33-different-forms-of-complex-numbers",
  "34-complex-conjugates",
  "35-argand-diagram-and-loci",
  "4-roots-and-coefficients-fp14",
  "41-fundamental-relationships",
  "42-advanced-manipulations",
  "43-forming-new-equations",
  "5-series-fp15",
  "51-essential-summation-formulas",
  "52-method-of-differences",
  "53-advanced-summation-examples",
  "6-trigonometry-fp16---general-solutions",
  "61-solving-trigonometric-equations",
  "62-exact-values---must-know",
  "63-worked-examples",
  "7-calculus-fp17",
  "71-first-principles-differentiation",
  "72-connected-rates-of-change",
  "73-small-changes",
  "74-improper-integrals",
  "-unit-fpsm1-pure-mathematics-statistics-and-mechanics",
  "fpp11-matrices-and-transformations",
  "11-matrix-algebra",
  "definitions",
  "addition-and-subtraction",
  "scalar-multiplication",
  "matrix-multiplication",
  "identity-matrix",
  "inverse-of-a-2-times-2-matrix",
  "transpose-of-a-matrix",
  "12-transformations-in-the-x-y-plane",
  "standard-transformation-matrices",
  "combinations-of-transformations",
  "determinant-and-area-scale-factor",
  "13-invariant-points-and-lines",
  "invariant-points",
  "lines-of-invariant-points",
  "invariant-lines",
  "fpp12-linear-graphs--reducing-to-linear-form",
  "21-transforming-non-linear-relationships",
  "case-1-power-law-y--kxn",
  "case-2-exponential-law-y--k-cdot-ax",
  "case-3-reciprocal-relationship-frac1y--a--fracbx",
  "case-4-quadratic-form-y2--ax3--b",
  "fpp13-numerical-methods",
  "31-location-of-roots",
  "32-interval-bisection",
  "33-linear-interpolation",
  "34-newton-raphson-method",
  "35-eulers-method-for-differential-equations",
  "fs11-bayes-theorem",
  "11-conditional-probability-review",
  "12-law-of-total-probability",
  "13-bayes-theorem",
  "14-tree-diagrams",
  "fs12-discrete-uniform-distribution",
  "21-definition",
  "22-probability-mass-function-pmf",
  "23-cumulative-distribution-function-cdf",
  "24-mean-and-variance",
  "25-probability-calculations",
  "fs13-geometric-distribution",
  "31-definition",
  "32-probability-mass-function",
  "33-cumulative-distribution-function",
  "34-mean-and-variance",
  "35-memoryless-property",
  "fs14-probability-generating-functions-pgf",
  "41-definition",
  "42-properties",
  "43-pgfs-for-common-distributions",
  "44-sum-of-independent-random-variables",
  "fs15-linear-combinations-of-discrete-random-variables",
  "51-expectation-of-a-linear-combination",
  "52-variance-of-a-linear-combination",
  "53-covariance",
  "54-correlation-coefficient",
  "fm11-constant-velocity-in-two-dimensions",
  "11-vector-representation",
  "12-speed-and-distance",
  "13-relative-velocity",
  "14-interception-problems",
  "15-closest-approach",
  "fm12-dimensional-analysis",
  "21-base-dimensions",
  "22-derived-dimensions",
  "23-dimensional-homogeneity",
  "24-deriving-formulae-by-dimensional-analysis",
  "fm13-collisions-in-one-dimension",
  "31-momentum",
  "32-impulse",
  "33-conservation-of-momentum",
  "34-newtons-experimental-law-coefficient-of-restitution",
  "35-impact-with-a-fixed-surface",
  "36-worked-example-two-particle-collision",
  "key-formulae-summary",
  "pure-mathematics",
  "statistics",
  "mechanics"
];
for (const id of legacyIds) {
  assert.ok(enIndex.includes(`id="${id}"`), `English archived anchor ${id}`);
  assert.ok(zhIndex.includes(`id="${id}"`), `legacy anchor ${id}`);
  assert.ok(zhIndex.includes(`href="/alevel/as-further-mathematics/#${id}" hreflang="en"`), `English reference target ${id}`);
}
assert.ok(zhIndex.includes("旧笔记正文尚未全文汉化"));
console.log(`PASS: ${legacyIds.length} original rendered heading IDs preserved by the Chinese reference directory.`);
