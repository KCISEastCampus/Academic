// Run after bundle exec jekyll build. Independent derivative and quadrature checks for the lesson.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const pi = Math.PI;
const close = (a, b, tolerance = 1e-10) => assert(Math.abs(a - b) < tolerance, `${a} != ${b}`);
const derivative = (f, x) => {
  const h = 1e-5;
  return (f(x - 2 * h) - 8 * f(x - h) + 8 * f(x + h) - f(x + 2 * h)) / (12 * h);
};
const integrate = (f, a, b) => {
  const n = 12000, h = (b - a) / n;
  let total = f(a) + f(b);
  for (let i = 1; i < n; i++) total += (i % 2 ? 4 : 2) * f(a + i * h);
  return total * h / 3;
};

close(Math.asin(-.5), -pi / 6);
close(Math.acos(-Math.sqrt(3) / 2), 5 * pi / 6);
close(Math.atan(-1), -pi / 4);
close(Math.acos(Math.sin(2 * pi / 5)), pi / 10);
close(Math.asin(Math.sin(5 * pi / 6)), pi / 6);
close(Math.acos(Math.cos(7 * pi / 6)), 5 * pi / 6);
close(Math.atan(Math.tan(3 * pi / 4)), -pi / 4);
for (const x of [-1, -.5, 0, .5, 1]) close(Math.asin(x) + Math.acos(x), pi / 2);
assert(Number.isNaN(Math.asin(1.01)) && Number.isNaN(Math.acos(-1.01)));
for (const x of [-1e6, -1, 0, 1, 1e6]) assert(Math.abs(Math.atan(x)) < pi / 2);
for (const x of [.1, .25, .5, .75, .9])
  close(derivative(t => Math.acos(2 * t - 1), x), -1 / Math.sqrt(x * (1 - x)), 1e-8);
close(derivative(t => Math.acos(2 * t - 1), .5), -2, 1e-8);
for (const x of [-.4, -.2, 0, .1, .3, .4])
  close(derivative(t => Math.asin(2 * t) ** 3, x), 6 * Math.asin(2 * x) ** 2 / Math.sqrt(1 - 4 * x ** 2), 1e-8);
for (const x of [-5, -1, -.2, 0, .7, 1, 3]) {
  close(derivative(t => Math.atan(t / (1 + t ** 2)), x), (1 - x ** 2) / (x ** 4 + 3 * x ** 2 + 1), 1e-8);
  close(derivative(t => Math.atan(3 * t / 2), x), 6 / (4 + 9 * x ** 2), 1e-8);
}
for (const x of [.05, .15, .25, .4, .45])
  close(derivative(t => Math.asin(Math.sqrt(2 * t)), x), 1 / Math.sqrt(2 * x * (1 - 2 * x)), 1e-8);

// Differentiate antiderivatives numerically; expected values use the original integrands.
const antiderivatives = [
  [x => Math.atan(5 * x / 4) / 20, x => 1 / (16 + 25 * x ** 2), [-3, -1, 0, 1, 3]],
  [x => Math.asin(2 * x / 5) / 2, x => 1 / Math.sqrt(25 - 4 * x ** 2), [-2, -1, 0, 1, 2]],
  [x => Math.atan((x + 3) / 4) / 4, x => 1 / (x ** 2 + 6 * x + 25), [-6, -3, 0, 2]],
  [x => Math.log(x ** 2 + 6 * x + 25), x => (2 * x + 6) / (x ** 2 + 6 * x + 25), [-6, -3, 0, 2]],
  [x => Math.asin(2 * (x + 1) / Math.sqrt(15)) / 2, x => 1 / Math.sqrt(11 - 8 * x - 4 * x ** 2), [-2.5, -1, 0, .5]],
  [x => Math.atan(5 * x / 3) / 15, x => 1 / (9 + 25 * x ** 2), [-3, -1, 0, 1, 3]],
  [x => Math.asin(5 * x / 3) / 5, x => 1 / Math.sqrt(9 - 25 * x ** 2), [-.5, -.2, 0, .2, .5]],
  [x => Math.atan(Math.sqrt(2 / 5) * (x + 2)) / Math.sqrt(10), x => 1 / (2 * x ** 2 + 8 * x + 13), [-5, -2, 0, 2]],
  [x => Math.asin(Math.sqrt(2) * (x - 2) / 5) / Math.sqrt(2), x => 1 / Math.sqrt(17 + 8 * x - 2 * x ** 2), [-1, 0, 2, 4, 5]],
  [x => x * Math.atan(x) - Math.log(1 + x ** 2) / 2, Math.atan, [-3, -1, 0, 1, 3]],
  [x => x * Math.asin(x) + Math.sqrt(1 - x ** 2), Math.asin, [-.9, -.4, 0, .4, .9]]
];
for (const [f, integrand, points] of antiderivatives)
  for (const x of points) close(derivative(f, x), integrand(x), 1e-8);
for (const x of [-3, -1, 0, 1, 2, 5]) {
  close(11 - 8 * x - 4 * x ** 2, 15 - 4 * (x + 1) ** 2);
  close(2 * x ** 2 + 8 * x + 13, 2 * (x + 2) ** 2 + 5);
  close(17 + 8 * x - 2 * x ** 2, 25 - 2 * (x - 2) ** 2);
  close(7 + 4 * x - 2 * x ** 2, 9 - 2 * (x - 1) ** 2);
}
for (const bound of [-1 - Math.sqrt(15) / 2, -1 + Math.sqrt(15) / 2]) close(11 - 8 * bound - 4 * bound ** 2, 0);
for (const bound of [2 - 5 / Math.sqrt(2), 2 + 5 / Math.sqrt(2)]) close(17 + 8 * bound - 2 * bound ** 2, 0);
close(integrate(x => 1 / Math.sqrt(4 - 3 * x ** 2), 0, 1), pi / (3 * Math.sqrt(3)));
close(integrate(x => 1 / Math.sqrt(7 + 4 * x - 2 * x ** 2), 1, 2.5), pi / (4 * Math.sqrt(2)));
close(integrate(Math.asin, 0, Math.sqrt(3) / 2), Math.sqrt(3) * pi / 6 - .5);
close(integrate(Math.atan, 0, 1), pi / 4 - Math.log(Math.sqrt(2)));
for (const b of [1, 1.8, 1.98]) {
  const value = integrate(x => 1 / Math.sqrt(4 - x ** 2), 0, b);
  close(value, Math.asin(b / 2), 1e-8);
  assert(value < pi / 2);
}
assert.equal(Math.asin(1), pi / 2);
// Midpoint quadrature of the original singular integrand checks the finite endpoint limit.
let endpointArea = 0;
const endpointSteps = 200000, endpointWidth = 2 / endpointSteps;
for (let i = 0; i < endpointSteps; i++) endpointArea += endpointWidth / Math.sqrt(4 - ((i + .5) * endpointWidth) ** 2);
close(endpointArea, pi / 2, .002);
for (const x of [-10, -2, -1, -.3, 0, .5, .99])
  close(Math.atan((1 + x) / (1 - x)), pi / 4 + Math.atan(x));
for (const x of [1.001, 2, 10])
  close(Math.atan((1 + x) / (1 - x)), pi / 4 + Math.atan(x) - pi);

const source = fs.readFileSync('alevel/a2-further-mathematics/inverse-trigonometric-functions.md', 'utf8');
const html = fs.readFileSync('_site/alevel/a2-further-mathematics/inverse-trigonometric-functions/index.html', 'utf8');
assert(!/[\u3400-\u9fff]/u.test(source), 'English content');
assert.equal((source.match(/### Example /g) || []).length, 8);
assert.equal((source.match(/### Question /g) || []).length, 8);
assert.equal((html.match(/<details\b/g) || []).length, 17);
assert.equal((html.match(/<table\b/g) || []).length, 3);
for (const row of html.match(/<tr\b[\s\S]*?<\/tr>/g) || []) assert.equal((row.match(/<(?:td|th)\b/g) || []).length, 3);
assert(!html.includes('<p>$$'), 'Display math must reach MathJax intact');
for (const id of ['method', 'values-and-graphs', 'differentiation', 'standard-integrals', 'completing-the-square', 'definite-integrals', 'integration-by-parts', 'practice', 'quick-reference'])
  assert(html.includes(`id="${id}"`), `Missing section ${id}`);
assert(html.includes('A2 Further Pure Mathematics'), 'Course breadcrumb');
assert(html.includes('/assets/img/further-inverse-trig-graphs.svg'), 'Inverse function graphs');
console.log('Further inverse trig passed: principal ranges, chain rules, integral derivatives, completed squares, domains, quadrature and AQA results.');
