// Run after bundle exec jekyll build. Independent numeric checks of the lesson's mathematics.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const close = (a, b, tolerance = 1e-10) => assert(Math.abs(a - b) < tolerance, a + ' != ' + b);
const same = (a, b) => a.forEach((v, i) => close(v, b[i]));
const multiply = ([a, b], [c, d]) => [a * c - b * d, a * d + b * c];
const power = (z, n) => {
  if (n < 0) {
    const modulusSquared = z[0] ** 2 + z[1] ** 2;
    return power([z[0] / modulusSquared, -z[1] / modulusSquared], -n);
  }
  let result = [1, 0];
  for (let i = 0; i < n; i++) result = multiply(result, z);
  return result;
};
const polar = (r, theta) => [r * Math.cos(theta), r * Math.sin(theta)];
const roots = (r, theta, n) => Array.from({length: n}, (_, k) => polar(r ** (1 / n), (theta + 2 * k * Math.PI) / n));
const checkRoots = (values, n, target) => {
  values.forEach(z => same(power(z, n), target));
  for (let i = 0; i < values.length; i++)
    for (let j = i + 1; j < values.length; j++)
      assert(Math.hypot(values[i][0] - values[j][0], values[i][1] - values[j][1]) > 1e-6);
};

for (const theta of [-2.1, -0.4, 0, 0.7, 2.8]) {
  for (const n of [-5, -1, 0, 1, 4, 7]) same(power(polar(2, theta), n), polar(2 ** n, n * theta));
  same(power([Math.sin(theta), Math.cos(theta)], 6), [-Math.cos(6 * theta), Math.sin(6 * theta)]);
}
same(power([1, -1], 6), [0, 8]);
same(power([Math.sqrt(3), 1], -3), [0, -1 / 8]);
same(power([-Math.sqrt(3), 1], 4), [-8, -8 * Math.sqrt(3)]);
same(polar(16, -2 * Math.PI / 3), [-8, -8 * Math.sqrt(3)]);
const cubeRoots = [[Math.sqrt(3), 1], [-Math.sqrt(3), 1], [0, -2]];
checkRoots(cubeRoots, 3, [0, 8]);
roots(8, Math.PI / 2, 3).forEach((z, i) => same(z, cubeRoots[i]));
close(Math.hypot(...cubeRoots[0]), 2);
close(Math.hypot(cubeRoots[0][0] - cubeRoots[1][0], cubeRoots[0][1] - cubeRoots[1][1]), 2 * Math.sqrt(3));
const a = (Math.sqrt(3) + 1) / 2, b = (Math.sqrt(3) - 1) / 2;
checkRoots([[a, b], [-a, -b]], 2, [Math.sqrt(3), 1]);
close(a / Math.sqrt(2), (Math.sqrt(6) + Math.sqrt(2)) / 4);
close(Math.cos(Math.PI / 12), a / Math.sqrt(2));
for (const n of [2, 3, 5, 7]) {
  const values = roots(1, 0, n);
  checkRoots(values, n, [1, 0]);
  same(values.reduce((s, z) => [s[0] + z[0], s[1] + z[1]], [0, 0]), [0, 0]);
}
close(Math.cos(2 * Math.PI / 5) + Math.cos(4 * Math.PI / 5), -1 / 2);
for (const z of [[-1, 0], [1 / 3, 0], [1 / 5, 2 / 5], [1 / 5, -2 / 5]])
  same(power(z, 4).map(v => 16 * v), power([z[0] - 1, z[1]], 4));
const rt2 = Math.sqrt(2);
checkRoots([[rt2, rt2], [-rt2, rt2], [-rt2, -rt2], [rt2, -rt2]], 4, [-16, 0]);
for (const z of [[3, 0], [0, Math.sqrt(3)], [0, -Math.sqrt(3)]])
  same(power([z[0] - 1, z[1]], 3), [8, 0]);

for (const x of [-1.1, -0.7, 0, 0.2, 0.9, 1.4]) {
  const c = Math.cos(x), s = Math.sin(x), t = Math.tan(x);
  close(Math.cos(3 * x), 4 * c ** 3 - 3 * c);
  close(Math.sin(3 * x), 3 * s - 4 * s ** 3);
  close(Math.tan(3 * x), (3 * t - t ** 3) / (1 - 3 * t ** 2));
  close(s ** 5, (Math.sin(5 * x) - 5 * Math.sin(3 * x) + 10 * s) / 16);
  close(Math.cos(4 * x), 8 * c ** 4 - 8 * c ** 2 + 1);
  if (s) close(Math.sin(4 * x) / s, 8 * c ** 3 - 4 * c);
  close(c ** 4, Math.cos(4 * x) / 8 + Math.cos(2 * x) / 2 + 3 / 8);
  same(power([c, s], 5), [c ** 5 - 10 * c ** 3 * s ** 2 + 5 * c * s ** 4,
    5 * c ** 4 * s - 10 * c ** 2 * s ** 3 + s ** 5]);
  close(Math.tan(5 * x), t * (5 - 10 * t ** 2 + t ** 4) / (1 - 10 * t ** 2 + 5 * t ** 4));
  const derivative = f => (f(x + 1e-5) - f(x - 1e-5)) / 2e-5;
  close(derivative(y => -Math.cos(5 * y) / 80 + 5 * Math.cos(3 * y) / 48 - 5 * Math.cos(y) / 8), s ** 5, 1e-8);
  close(derivative(y => Math.sin(4 * y) / 32 + Math.sin(2 * y) / 4 + 3 * y / 8), c ** 4, 1e-8);
  close(derivative(y => Math.exp(2 * y) / 13 * (2 * Math.cos(3 * y) + 3 * Math.sin(3 * y))),
    Math.exp(2 * x) * Math.cos(3 * x), 1e-7);
}
same(power(polar(1, Math.PI / 10), 15), [0, -1]);
assert(-Math.PI / 30 < 0 && -Math.PI / 30 + 2 * Math.PI / 15 > 0);
for (const k of [1, 2, 3, 4]) {
  const t = Math.tan(k * Math.PI / 5);
  close(t ** 4 - 10 * t ** 2 + 5, 0);
  assert(Math.abs(1 - 10 * t ** 2 + 5 * t ** 4) > 1e-6);
}
close(Math.tan(Math.PI / 5) * Math.tan(2 * Math.PI / 5), Math.sqrt(5));

const source = fs.readFileSync('alevel/a2-further-mathematics/de-moivres-theorem.md', 'utf8');
const html = fs.readFileSync('_site/alevel/a2-further-mathematics/de-moivres-theorem/index.html', 'utf8');
assert(!/[\u3400-\u9fff]/u.test(source), 'English course content');
assert(!source.includes('with Mechanics'), 'Use the shared textbook name');
assert(source.includes('+C'), 'Integration constants use +C');
assert.equal((source.match(/### Example /g) || []).length, 10);
assert.equal((source.match(/### Question /g) || []).length, 8);
assert.equal((html.match(/<details\b/g) || []).length, 16);
assert.equal((html.match(/<table\b/g) || []).length, 1, 'Absolute-value pipes must not create tables');
for (const row of html.match(/<tr\b[\s\S]*?<\/tr>/g) || []) assert.equal((row.match(/<(?:td|th)\b/g) || []).length, 3);
assert(!html.includes('<p>$$'), 'Display math must reach MathJax intact');
for (const id of ['method', 'powers-and-proof', 'complex-roots', 'roots-of-unity', 'trigonometric-identities', 'integration', 'practice', 'quick-reference'])
  assert(html.includes('id="' + id + '"'), id);
console.log('De Moivre passed: powers, all roots, geometry, surd value, identities, integral derivatives and AQA results.');
