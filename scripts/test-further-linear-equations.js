// Run after bundle exec jekyll build. Check solution sets, parameter branches and the actual lesson pair.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = path.join(__dirname, '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8').replace(/\r\n/g, '\n');
const topic = 'alevel/a2-further-mathematics/linear-equations';
const dot = (a, b) => a.reduce((s, x, i) => s + x * b[i], 0);
const mv = (a, x) => a.map(row => dot(row, x));
const mm = (a, b) => a.map(row => b[0].map((_, j) => dot(row, b.map(r => r[j]))));
const det = a => a[0][0] * (a[1][1] * a[2][2] - a[1][2] * a[2][1])
  - a[0][1] * (a[1][0] * a[2][2] - a[1][2] * a[2][0])
  + a[0][2] * (a[1][0] * a[2][1] - a[1][1] * a[2][0]);
const close = (a, b) => a.forEach((x, i) => assert(Math.abs(x - b[i]) < 1e-10, `${a} != ${b}`));

// Independent substitution in every original equation, not just the reduced pair.
const unique = [[1, 1, 1], [2, -1, 1], [1, 2, -1]];
assert.equal(det(unique), 7);
assert.deepEqual(mv(unique, [1, 2, 3]), [6, 3, 2]);
assert.deepEqual(mv(unique, [-1, 2, 0]), [1, -4, 3]);
const a = [[1, 1, 0], [0, 1, 1], [1, 0, 1]];
const adj = [[1, -1, 1], [1, 1, -1], [-1, 1, 1]];
assert.equal(det(a), 2);
assert.deepEqual(mm(a, adj), [[2, 0, 0], [0, 2, 0], [0, 0, 2]]);
assert.deepEqual(mv(adj, [5, 7, 6]).map(x => x / 2), [2, 3, 4]);

// A free parameter is a whole affine line. Its direction must be in the homogeneous kernel.
const common = [[1, 1, 1], [2, 2, 2], [1, -1, 1]];
assert.equal(det(common), 0);
assert.deepEqual(mv(common, [2, -1, 0]), [1, 2, 3]);
assert.deepEqual(mv(common, [-1, 0, 1]), [0, 0, 0]);
assert.equal(3 - 2 * 1, 1); // Changed right side contradicts the same dependent coefficient rows.

const param = k => [[1, 1, 1], [1, 2, 3], [2, 3, k + 4]];
assert.deepEqual(param(0)[2], param(0)[0].map((x, i) => x + param(0)[1][i]));
assert.deepEqual(mv(param(0), [0, 3, 0]), [3, 6, 9]);
assert.deepEqual(mv(param(0), [1, -2, 1]), [0, 0, 0]);
for (const k of [-3, -1, 0, 2, 7]) {
  assert.equal(det(param(k)), k);
  for (const h of [-2, 9, 10]) {
    if (k !== 0) {
      const t = (h - 9) / k;
      close(mv(param(k), [t, 3 - 2 * t, t]), [3, 6, h]);
    } else assert.equal(h - 3 - 6 === 0, h === 9);
  }
}
// Coefficient identities: determinant polynomial and the actual contradictory right sides.
const exam = k => [[2, -1, 3], [1, k - 1, -1], [k - 3, -1, 1]];
for (const k of [-5, 0, 1, 2, 3, 9]) assert(det(exam(k)) === -3 * (k - 2) * (k - 3));
assert.deepEqual(exam(3)[0].map((x, i) => x - 2 * exam(3)[1][i]), [0, -5, 5]);
assert.deepEqual(exam(3)[2].map(x => 5 * x), [0, -5, 5]);
assert.notEqual(1 - 2 * 3, 5 * 1);
assert.deepEqual(exam(2)[1].map((x, i) => x + exam(2)[2][i]), [0, 0, 0]);
assert.notEqual(3 + 1, 0);

const en = read(`${topic}.md`), zh = read(`zh/${topic}.md`);
const math = s => s.match(/\$\$[\s\S]*?\$\$|\$[^$\r\n]+\$/g) || [];
assert.deepEqual(math(zh), math(en), 'All mathematical conditions and answers align');
for (const question of en.match(/^\*\*Question:\*\*.+$/gm) || []) assert(zh.includes(question));
assert.equal((en.match(/^### Question /gm) || []).length, 6);
for (const label of ['Adapted example', 'January 2025 Q8', 'MS p.13', 'Q13(b)']) assert(en.includes(label));
for (const [prefix, lang] of [['', 'en'], ['zh/', 'zh-CN']]) {
  const html = read(`_site/${prefix}${topic}/index.html`);
  assert(html.includes(`<html lang="${lang}">`));
  assert(!html.includes('<p>$$'));
  for (const [, id] of en.matchAll(/\{#([^}]+)\}/g)) assert(html.includes(`id="${id}"`), id);
  assert.equal((html.match(/<details\b/g) || []).length, 17);
  assert(!/<details\b[^>]*\bopen(?:\s|>|=)/.test(html), 'Solutions stay closed initially');
  assert(html.includes('further-linear-equations.svg'));
}
console.log('Linear equations passed: original constraints, inverse, affine families, exceptional parameters, contradictory systems and bilingual pages.');
