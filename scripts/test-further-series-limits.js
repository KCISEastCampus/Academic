// Run after bundle exec jekyll build. Checks the chapter's coefficients, limits and integral values.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const close = (a, b, tolerance = 1e-12) => assert(Math.abs(a - b) < tolerance, a + ' != ' + b);
const same = (a, b) => {
  assert.equal(a.length, b.length);
  a.forEach((v, i) => close(v, b[i]));
};
const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);
const exp = k => Array.from({length: 5}, (_, n) => k ** n / factorial(n));
const sin = k => Array.from({length: 5}, (_, n) => n % 2 ? (-1) ** ((n - 1) / 2) * k ** n / factorial(n) : 0);
const cos = k => Array.from({length: 5}, (_, n) => n % 2 ? 0 : (-1) ** (n / 2) * k ** n / factorial(n));
const log = k => Array.from({length: 5}, (_, n) => n ? (-1) ** (n + 1) * k ** n / n : 0);
const binomial = (p, k, scale = 1) => {
  const result = [scale];
  for (let n = 1; n <= 4; n++) result.push(result[n - 1] * (p - n + 1) * k / n);
  return result;
};
const product = (a, b) => Array.from({length: 5}, (_, n) =>
  a.reduce((total, v, i) => total + (i <= n ? v * (b[n - i] || 0) : 0), 0));
const expOf = u => {
  assert.equal(u[0], 0);
  const result = [1, 0, 0, 0, 0];
  let power = [1, 0, 0, 0, 0];
  for (let n = 1; n <= 4; n++) {
    power = product(power, u);
    power.forEach((v, i) => { result[i] += v / factorial(n); });
  }
  return result;
};

same(exp(2).slice(0, 4), [1, 2, 2, 4 / 3]);
same(log(2).map((v, n) => v - log(-2)[n]), [0, 4, 0, 16 / 3, 0]);
same(product(exp(2), sin(1)), [0, 1, 2, 11 / 6, 1]);
same(expOf(sin(1)), [1, 1, 1 / 2, 0, -1 / 8]);
same(log(-3).slice(0, 4), [0, -3, -9 / 2, -9]);
same(binomial(-1 / 2, -1 / 4, 1 / 2).slice(0, 4), [1 / 2, 1 / 16, 3 / 256, 5 / 2048]);
const cosMinusOne = cos(1);
cosMinusOne[0] -= 1;
same(expOf(cosMinusOne), [1, 0, -1 / 2, 0, 1 / 6]);
same(product(exp(1), cos(2)).slice(0, 3), [1, 1, -3 / 2]);
same(binomial(1 / 2, 1 / 4, 2).slice(0, 3), [2, 1 / 4, -1 / 64]);
same(product(exp(3), binomial(-3 / 2, 2)).slice(0, 3), [1, 0, 3]);

// The first non-zero coefficient after cancellation determines these limits.
close(exp(2)[2], 2);
close(-sin(1)[3] / exp(2)[1], 1 / 12);
close(product(exp(1), cos(2))[2], -3 / 2);
close(binomial(1 / 2, 1 / 4, 2)[1], 1 / 4);
const validLog = u => u > -1 && u <= 1;
assert(validLog(-3 * (-1 / 3)));
assert(!validLog(-3 * (1 / 3)));
for (const x of [-1 / 2, 1 / 2]) assert(!(validLog(2 * x) && validLog(-2 * x)));
assert(validLog(2 * 0.49) && validLog(-2 * 0.49));

let harmonic = 1;
for (let m = 1; m <= 9; m++) {
  for (let n = 2 ** (m - 1) + 1; n <= 2 ** m; n++) harmonic += 1 / n;
  assert(harmonic >= 1 + m / 2);
}
for (const n of [1, 5, 100]) {
  close(((n + 1) ** 2 * (0.6 / 2) ** (n + 1)) / (n ** 2 * (0.6 / 2) ** n),
    ((n + 1) / n) ** 2 * 0.3);
}

// Independent quadrature checks the finite values; the lesson shows the limiting processes.
const integrate = (f, a, b) => {
  const steps = 10000;
  const h = (b - a) / steps;
  let total = f(a) + f(b);
  for (let n = 1; n < steps; n++) total += (n % 2 ? 4 : 2) * f(a + n * h);
  return total * h / 3;
};
close(integrate(x => 1 / x ** 2, 1, 10), 1 - 1 / 10, 1e-10);
close(integrate(x => x === 0 ? 0 : x * Math.log(x), 0, 1), -1 / 4, 1e-8);
close(integrate(x => x === 0 ? 0 : x ** 2 * Math.log(x), 0, Math.E), 2 * Math.E ** 3 / 9, 1e-9);
for (const a of [2, 3]) {
  close(integrate(x => x * Math.exp(-a * x), 0, 20), 1 / a ** 2, 1e-9);
  // Differentiate -(x/a+1/a^2)e^(-ax): the constant terms cancel.
  close(-1 / a + a / a ** 2, 0);
}
assert(-Math.log(1e-8) > -Math.log(1e-4)); // The 1/x integral grows as the lower bound approaches zero.

const source = fs.readFileSync('alevel/a2-further-mathematics/series-and-limits.md', 'utf8');
const html = fs.readFileSync('_site/alevel/a2-further-mathematics/series-and-limits/index.html', 'utf8');
assert(!/[\u3400-\u9fff]/u.test(source), 'English course content');
assert(!source.includes('with Mechanics'), 'Use the shared Further Mathematics textbook name');
assert(source.includes('+C'), 'Integration constants use +C');
assert.equal((source.match(/### Example /g) || []).length, 10);
assert.equal((source.match(/### Question /g) || []).length, 8);
assert.equal((html.match(/<details\b/g) || []).length, 17);
assert.equal((html.match(/<table\b/g) || []).length, 1, 'Absolute-value pipes must not become Markdown tables');
for (const row of html.match(/<tr\b[\s\S]*?<\/tr>/g) || [])
  assert.equal((row.match(/<(?:td|th)\b/g) || []).length, 3, 'Quick-reference rows have three cells');
assert(!html.includes('<p>$$'), 'Display math must reach MathJax intact');
for (const id of ['method', 'convergence', 'maclaurin-series', 'related-functions', 'limits', 'improper-integrals', 'practice', 'quick-reference'])
  assert(html.includes('id="' + id + '"'), id);
console.log('Further series and limits passed: coefficients, products, compositions, ranges, limit coefficients and integral values.');
