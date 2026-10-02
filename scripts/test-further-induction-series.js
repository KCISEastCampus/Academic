// Run after bundle exec jekyll build.
// Numerical regression checks for lesson calculations; the written induction proofs establish the general results.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const sum = (n, term, start = 1) => {
  let result = [0n, 1n];
  for (let r = start; r <= n; r++) {
    const [a, b] = term(BigInt(r));
    result = [result[0] * b + a * result[1], result[1] * b];
  }
  return result;
};
const equalFraction = ([a, b], [c, d]) => assert.equal(a * d, c * b);
const multiply = (a, b) => [
  [a[0][0] * b[0][0] + a[0][1] * b[1][0], a[0][0] * b[0][1] + a[0][1] * b[1][1]],
  [a[1][0] * b[0][0] + a[1][1] * b[1][0], a[1][0] * b[0][1] + a[1][1] * b[1][1]]
];

let aPower = [[1n, 0n], [0n, 1n]];
let bPower = [[1n, 0n], [0n, 1n]];
let u = 3n;
let previous = 1n;
let current = 3n;
for (let n = 1; n <= 25; n++) {
  const k = BigInt(n);
  equalFraction(sum(n, r => [r * r, 1n]), [k * (k + 1n) * (2n * k + 1n), 6n]);
  equalFraction(sum(n, r => [r ** 3n, 1n]), [k * k * (k + 1n) ** 2n, 4n]);
  assert.equal(u, k * k + 2n);
  u += 2n * k + 1n;
  if (n >= 2) {
    assert.equal(current, 2n ** k - 1n);
    [previous, current] = [current, 3n * current - 2n * previous];
  }
  const divisorExample = j => 7n ** j + 4n ** j + 1n;
  assert.equal(divisorExample(k) % 6n, 0n);
  assert.equal(divisorExample(k + 1n) - divisorExample(k), 6n * (7n ** k + 2n ** (2n * k - 1n)));
  assert.equal((11n ** k - 3n ** k) % 8n, 0n);
  assert.equal(11n ** (k + 1n) - 3n ** (k + 1n) - 3n * (11n ** k - 3n ** k), 8n * 11n ** k);
  if (n >= 2) {
    const f = j => 15n ** j - 8n ** (j - 2n);
    assert.equal(f(k) % 7n, 0n);
    assert.equal(f(k + 1n) - 8n * f(k), 7n * 15n ** k);
  }
  aPower = multiply(aPower, [[3n, 2n], [0n, 1n]]);
  bPower = multiply(bPower, [[1n, 0n], [5n, 1n]]);
  assert.deepEqual(aPower, [[3n ** k, 3n ** k - 1n], [0n, 1n]]);
  assert.deepEqual(bPower, [[1n, 0n], [5n * k, 1n]]);

  equalFraction(sum(n, r => [1n, r * (r + 1n)]), [k, k + 1n]);
  equalFraction(sum(n, r => [1n, r * (r + 2n)]),
    [3n * (k + 1n) * (k + 2n) - 2n * (k + 2n) - 2n * (k + 1n), 4n * (k + 1n) * (k + 2n)]);
  equalFraction(sum(n, r => [2n, r * (r + 1n) * (r + 2n)]),
    [(k + 1n) * (k + 2n) - 2n, 2n * (k + 1n) * (k + 2n)]);
  equalFraction(sum(n, r => [1n, (2n * r - 1n) * (2n * r + 1n)]), [k, 2n * k + 1n]);
  equalFraction(sum(n, r => [2n * r + 1n, r * r * (r + 1n) ** 2n]), [(k + 1n) ** 2n - 1n, (k + 1n) ** 2n]);
  if (n >= 2) equalFraction(sum(n, r => [1n, r * r - 1n], 2),
    [3n * k * (k + 1n) - 2n * (k + 1n) - 2n * k, 4n * k * (k + 1n)]);
  if (n >= 3) equalFraction(sum(n, r => [r * r + 2n * r, 1n], 3),
    [k * (k + 1n) * (2n * k + 7n) - 66n, 6n]);
}
equalFraction(sum(12, r => [1n, r * (r + 1n) * (r + 2n)], 5), [19n, 1365n]);
equalFraction(sum(48, r => [1n, r * (r + 2n)]), [894n, 1225n]);
assert.equal(15n ** 2n - 1n, 224n);
assert.equal(15n ** 3n - 8n, 3367n);

// Differentiation maps a*sin(x)+b*cos(x) to (a-b)*sin(x)+(a+b)*cos(x), after the e^x factor.
let sinCoefficients = [1, 0];
let cosCoefficients = [0, 1];
for (let n = 1; n <= 12; n++) {
  sinCoefficients = [sinCoefficients[0] - sinCoefficients[1], sinCoefficients[0] + sinCoefficients[1]];
  cosCoefficients = [cosCoefficients[0] - cosCoefficients[1], cosCoefficients[0] + cosCoefficients[1]];
  const scale = 2 ** (n / 2);
  const phi = n * Math.PI / 4;
  [scale * Math.cos(phi), scale * Math.sin(phi)].forEach((c, i) => assert(Math.abs(c - sinCoefficients[i]) < 1e-10));
  [-scale * Math.sin(phi), scale * Math.cos(phi)].forEach((c, i) => assert(Math.abs(c - cosCoefficients[i]) < 1e-10));
}
for (const theta of [-1.2, 0, 0.7, Math.PI]) {
  let [a, b] = [1, 0];
  for (let n = 1; n <= 12; n++) {
    [a, b] = [a * Math.cos(theta) - b * Math.sin(theta), a * Math.sin(theta) + b * Math.cos(theta)];
    assert(Math.abs(a - Math.cos(n * theta)) < 1e-12);
    assert(Math.abs(b - Math.sin(n * theta)) < 1e-12);
  }
}

for (const [slug, examples, questions] of [['proof-by-induction', 6, 6], ['finite-series', 4, 5]]) {
  const source = fs.readFileSync('alevel/a2-further-mathematics/' + slug + '.md', 'utf8');
  const html = fs.readFileSync('_site/alevel/a2-further-mathematics/' + slug + '/index.html', 'utf8');
  assert(!/[\u3400-\u9fff]/u.test(source), 'English course content');
  assert(!/(?<!\$)\$(?!\$)[^\n$]*\\begin\{pmatrix\}/.test(source), 'Keep matrix row breaks in display math');
  assert.equal((source.match(/### Example /g) || []).length, examples);
  assert.equal((source.match(/### Question /g) || []).length, questions);
  assert.equal((html.match(/<details\b/g) || []).length, questions * 2);
  assert(!html.includes('<p>$$'), 'Display math must reach MathJax intact');
  assert(html.includes('A2 Further Pure Mathematics</a>'), 'Full course breadcrumb');
}
console.log('Further induction and series passed: exact sums, recurrences, divisibility, matrix powers, derivative and complex-power checks.');
