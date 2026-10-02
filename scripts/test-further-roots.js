// Run after bundle exec jekyll build. Checks the lesson's polynomial identities and root bounds.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const source = fs.readFileSync('alevel/a2-further-mathematics/roots-and-polynomials.md', 'utf8');
const html = fs.readFileSync('_site/alevel/a2-further-mathematics/roots-and-polynomials/index.html', 'utf8');
const multiply = (a, b) => {
  const result = Array(a.length + b.length - 1).fill(0);
  a.forEach((x, i) => b.forEach((y, j) => { result[i + j] += x * y; }));
  return result;
};
const value = (p, x) => p.reduce((s, c) => s * x + c, 0);
const factors = (p, a, b) => assert.deepEqual(multiply(a, b), p);

// Cubic sums, pairs, product, squares and transformed roots (Examples 1-2).
const roots = [1.5, 2, -2];
const sum = roots.reduce((a, b) => a + b, 0);
const product = roots.reduce((a, b) => a * b, 1);
const pairs = [roots[0] * roots[1], roots[1] * roots[2], roots[2] * roots[0]];
assert.equal(sum, 3 / 2);
assert.equal(product, -6);
assert.equal(pairs.reduce((a, b) => a + b, 0), -4);
assert.equal(roots.reduce((a, b) => a + b * b, 0), 41 / 4);
assert.deepEqual(roots.reduce((p, r) => multiply(p, [1, -r]), [2]), [2, -3, -8, 12]);
assert.deepEqual(pairs.reduce((p, r) => multiply(p, [1, -r]), [1]), [1, 4, -9, -36]);

// Quadratics from p +/- qi are [1, -2p, p*p+q*q]. Check every displayed factorisation.
factors([1, -5, 11, -15], [1, -2, 5], [1, -3]);
factors([1, -6, 15, -18, 10], [1, -2, 2], [1, -4, 5]);
assert.equal(2 * 15 - 30, 0); // Substituting 1+i determines k in Example 4.
factors([2, -3, 4, 0, -1, 8], [1, 1], [2, -5, 9, -9, 8]);
assert.equal(value([2, -3, 4, 0, -1, 8], -1), 0);
factors([1, -2, -1, 2], [1, -2], [1, 0, -1]);
factors([1, -5, 6, 0], [1, 0], [1, -5, 6]);
factors([1, -8, 31, -46, 34], [1, -2, 2], [1, -6, 17]);
factors([1, -4, -2, 20], [1, 2], [1, -6, 10]);
assert.equal((-4) ** 2 - 2 * (-2), 20); // Original AQA question's sum of squares.
assert.equal((-2) ** 2 - 2 * (-3), 10); // Question 1.

// Complex-coefficient quadratics do not require conjugate roots.
const complexProduct = ([a, b], [c, d]) => [a * c - b * d, a * d + b * c];
assert.deepEqual(complexProduct([1, 1], [2, 0]), [2, 2]);
assert.deepEqual(complexProduct([1, 1], [3, -2]), [5, 1]);

// Uniqueness proofs use completed-square derivatives, not just sampled signs.
assert.deepEqual(multiply([1, -1], [1, -1]).map((c, i) => 3 * c + (i === 2 ? 1 : 0)), [3, -6, 4]);
assert.equal(value([1, -3, 4, -5], 2), -1);
assert.equal(value([1, -3, 4, -5], 3), 7);
assert.equal((3 - 3) / 2, 0);
assert.equal((3 - 2) / 2, 0.5);
assert.equal(value([1, 0, 3, 2], -1), -2);
assert.equal(value([1, 0, 3, 2], 0), 2);

for (const formula of ['2x^3-3x^2-8x+12', 't^3+4t^2-9t-36', 'z^3-5z^2+11z-15',
  'z^4-6z^3+15z^2-18z+10', '2x^5-3x^4+4x^3-x+8', 't^3-5t^2+6t',
  'z^4-8z^3+31z^2-46z+34', 'x^3-4x^2-2x+20']) assert(source.includes(formula), formula);
assert(!/[\u3400-\u9fff]/u.test(source));
assert.equal((source.match(/### Example /g) || []).length, 6);
assert.equal((source.match(/### Question /g) || []).length, 7);
assert.equal((html.match(/<details\b/g) || []).length, 14);
assert(!html.includes('<p>$$'));
assert(html.includes('A2 Further Pure Mathematics</a>'), 'Full course breadcrumb');
for (const id of ['method', 'roots-and-coefficients', 'complex-roots', 'real-roots', 'practice', 'quick-reference'])
  assert(html.includes(`id="${id}"`), id);
console.log('Further roots passed: coefficient relations, factors, conjugates, intervals and lesson structure.');
