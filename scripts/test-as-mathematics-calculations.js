// Independent numerical/enumerative checks for the self-written MA01/MA02 tasks.
const assert = require('node:assert/strict');
let checks = 0;
function close(actual, expected, tolerance = 1e-9) {
  assert(Math.abs(actual - expected) <= tolerance * Math.max(1, Math.abs(expected)), `${actual} != ${expected}`);
  checks++;
}
function integral(f, a, b, n = 24000) {
  const h = (b - a) / n;
  let total = 0;
  for (let i = 0; i < n; i++) total += f(a + (i + 0.5) * h) * h;
  return total;
}
const sum = values => values.reduce((a, b) => a + b, 0);
function moments(values, probabilities) {
  const mean = sum(values.map((v, i) => v * probabilities[i]));
  return [mean, sum(values.map((v, i) => (v - mean) ** 2 * probabilities[i]))];
}
function convolve(a, b) {
  const product = Array(a.length + b.length - 1).fill(0);
  a.forEach((v, i) => b.forEach((w, j) => { product[i + j] += v * w; }));
  return product;
}
function power(a, n) {
  let result = [1];
  for (let i = 0; i < n; i++) result = convolve(result, a);
  return result;
}
// L01–L05: exact forms, polynomial products, geometry and transformed points.
close(Math.sqrt(50) - Math.sqrt(8), 3 * Math.sqrt(2));
close(3 / (Math.sqrt(5) + Math.sqrt(2)), Math.sqrt(5) - Math.sqrt(2));
close(4 ** -1.5, 1 / 8);
assert(1 / (Math.sqrt(3) - 1) > (Math.sqrt(3) + 1) / 3);
close((Math.sqrt(7) + Math.sqrt(3)) / 2 * (Math.sqrt(7) - Math.sqrt(3)), 2);
for (const x of [-4, -1, 0, 1, 2, 3, 4]) {
  assert.equal(x * x - 2 * x - 3 <= 0, x >= -1 && x <= 3);
  assert.equal(x * x < 4 * x - 3, x > 1 && x < 3);
  assert.equal(-x * x + 5 * x - 6 > 0, x > 2 && x < 3);
  assert.equal(5 - 3 * x >= 11, x <= -2);
}
close((2 * 2 - 4 * 2 + 4), 0); // repeated root at contact for k = -4
assert.deepEqual(convolve([1, -2, 1], [2, 1]), [2, -3, 0, 1]);
assert.deepEqual(convolve([2, -1, 1], [1, 1]), [2, 1, 0, 1]);
assert.deepEqual(convolve([4, -4, 1], [1, 1]), [4, 0, -3, 1]);
close(1 - 3 + 4, 2);
close(Math.hypot(5 - 1, 4 - 2), 2 * Math.sqrt(5));
close((5 - 1) / 2, 2); // horizontal extent / vertical extent
close(3 * 2 - 7, -1);
close(2 * 3 + 3 - 9, 0);
assert.deepEqual([2 / 2, 3], [1, 3]);
assert.deepEqual([2, -2 * 3], [2, -6]);
assert.deepEqual([-1 * 3, 4], [-3, 4]);
// L06–L09: finite differences and independent midpoint integration.
for (const h of [0.1, 0.01, 0.001]) close(((1 + h) ** 2 - 1) / h, 2 + h);
const diff = (f, x) => (f(x + 1e-5) - f(x - 1e-5)) / 2e-5;
for (const x of [1, 2, 4]) {
  close(diff(t => t * t + 4 * Math.sqrt(t), x), 2 * x + 2 / Math.sqrt(x), 1e-7);
  close(diff(t => 3 / t ** 2 - 2 * Math.sqrt(t), x), -6 / x ** 3 - 1 / Math.sqrt(x), 1e-7);
}
close(4 * (-1 / 4), -1);
close(6 * (-1 / 6), -1);
close((-1) ** 3 - 3 * (-1), 2);
close(1 ** 3 - 3, -2);
close(5 * (10 - 5), 25);
close(3 * (10 - 3), 21);
close(2 ** 2 - 6 * 2 + 12, 4);
close(integral(x => 2 * x - x * x, 0, 2), 4 / 3, 1e-8);
close(integral(x => x ** 3 - x * x + x + 4, 0, 1), 53 / 12, 1e-8);
close(integral(x => x + 2 - x * x, -1, 2), 9 / 2, 1e-8);
close(integral(x => 4 - x * x, 0, 2), 16 / 3, 1e-8);
close(integral(x => x * x + 1, 0, 2), 14 / 3, 1e-8);
const trapezia = (xs, ys) => sum(xs.slice(1).map((x, i) => (x - xs[i]) * (ys[i] + ys[i + 1]) / 2));
close(trapezia([0, 1, 2], [1, 2, 5]), 5);
close(trapezia([0, 0.5, 1, 1.5], [2, 3, 4, 6]), 5.5);
close(trapezia([0, 2, 4], [0, 3, 4]), 10);
close(trapezia([1, 2, 3], [4, 5, 8]), 11);
// L10–L13: enumerate terms; multiply polynomials instead of coefficient formulae.
const seq = (n, f) => Array.from({ length: n }, (_, i) => f(i + 1));
close(20 + 5 * 5, 45);
close(sum(seq(6, n => 20 + (n - 1) * 5)), 195);
close(sum(seq(10, n => 3 * n + 2)), 185);
close(sum(seq(5, n => 10 + (n - 1) * 5)), 100);
close(sum(seq(10, n => 10 + (n - 1) * 5)), 325);
close(sum(seq(7, n => 10 + (n - 1) * 5)), 175);
close(sum(seq(8, n => 10 + (n - 1) * 5)), 220);
close(sum(seq(7, n => 2 * (n + 3) - 1)), 91);
close(sum(seq(4, n => 18 * (1 / 3) ** (n - 1))), 80 / 3);
close(sum(seq(100, n => 18 * (1 / 3) ** (n - 1))), 27);
close(sum(seq(4, n => 12 * (-0.5) ** (n - 1))), 15 / 2);
for (const k of [1, 2, 4]) close(sum(seq(2 * k, n => 12 * (-0.5) ** (n - 1))), 8 * (1 - 4 ** -k));
let x = 0;
for (const expected of [3, 4.5, 5.25, 5.625]) { x = (x + 6) / 2; close(x, expected); }
let u = 2;
for (const expected of [5, 14, 41]) { u = 3 * u - 1; close(u, expected); }
for (const [start, expected] of [[0.5, [0.25, 1 / 16, 1 / 256]], [2, [4, 16, 256]]]) {
  let value = start;
  for (const next of expected) { value *= value; close(value, next); }
}
assert.deepEqual(power([1, 2], 4), [1, 8, 24, 32, 16]);
close(1.02 ** 4, 1.08243216);
close(1.02 ** 4 - 1.0824, 0.00003216);
close(power([2, -3], 4)[2], 216);
close(power([1, -3], 5)[2], 90);
close(power([1, -3], 5)[3], -270);
close(1 - 15 * 0.01 + 90 * 0.01 ** 2, 0.859);
close(power([2, 1], 5)[3], 40);
// L14–L17: original circle constraints, angles and substitution back into equations.
close((5 - 2) ** 2 + (3 + 1) ** 2, 25);
close(3 * 5 + 4 * 3, 27);
close((-1 - 2) ** 2 + (0 - 2) ** 2, 13);
for (const [a, b] of [[0, 1], [4, 3]]) close((a - 3) ** 2 + b * b, 10);
close(6 * Math.PI / 3, 2 * Math.PI);
close(0.5 * 36 * Math.sin(Math.PI / 3), 9 * Math.sqrt(3));
assert(6 * Math.PI - 9 * Math.sqrt(3) > 0);
close(25 + 49 - 70 * Math.cos(Math.PI / 3), 39);
close(0.5 * 5 * 7 * Math.sin(Math.PI / 3), 35 * Math.sqrt(3) / 4);
close(Math.asin(0.8) * 180 / Math.PI, 53.13010235415598);
close(0.5 * 16 * ((14 - 8) / 4), 12);
for (const angle of [0, Math.PI / 3, 5 * Math.PI / 3, 2 * Math.PI]) close(2 * Math.sin(angle) ** 2 + 3 * Math.cos(angle), 3);
for (const angle of [Math.PI / 3, 5 * Math.PI / 3]) close((1 - Math.sin(angle) ** 2) / Math.cos(angle), 0.5);
for (const angle of [Math.PI / 12, 5 * Math.PI / 12]) close(Math.sin(2 * angle), 0.5);
close(Math.log(5) / Math.log(2), 2.321928094887362);
close(Math.log2(9 - 1), 3);
close(Math.log2(5 - 1) + Math.log2(5 - 3), 3);
close(80 * 0.5 ** 3, 10);
// L18–L21: tables, direct centred moments, and enumeration of Bernoulli sequences.
close(20 / 50, 0.4);
close(0.4 * 0.5, 0.2);
close(0.3 * 0.6, 0.18);
close(1 - (0.4 + 0.7 - 0.5 * 0.7), 0.25);
assert(0.45 > 0.4); // impossible intersection in the diagnostic
const probabilities = [0.25, 0.5, 0.25], values = [1, 2, 4];
for (const [fn, mean, variance] of [
  [x => x, 9 / 4, 19 / 16], [x => 3 - 2 * x, -3 / 2, 19 / 4],
  [x => x * x, 25 / 4, 531 / 16], [x => 1 / x, 9 / 16, 19 / 256]
]) {
  const [m, v] = moments(values.map(fn), probabilities);
  close(m, mean); close(v, variance);
}
const [mX, vX] = moments([1, 5, 9], [0.25, 0.5, 0.25]);
const outcomes = [], probs = [];
for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) {
  outcomes.push([1, 5, 9][i] - [1, 5, 9][j]); probs.push(probabilities[i] * probabilities[j]);
}
close(moments(outcomes, probs)[0], 0);
close(moments(outcomes, probs)[1], 2 * vX);
close(moments([1, 5, 9].map(x => 2 * x), probabilities)[1], 4 * vX);
close(2 * 5 - 2 + 7, 15); close(4 * 4 + 1 + 9, 26);
function bernoulliSequences(n, p) {
  const distribution = Array(n + 1).fill(0);
  function visit(i, successes, probability) {
    if (i === n) { distribution[successes] += probability; return; }
    visit(i + 1, successes, probability * (1 - p));
    visit(i + 1, successes + 1, probability * p);
  }
  visit(0, 0, 1);
  return distribution;
}
const bin = bernoulliSequences(5, 0.2);
close(sum(bin), 1); close(bin[2], 0.2048); close(sum(bin.slice(2)), 0.26272);
close(sum(bin.slice(0, 2)), 0.73728); close(sum(bin.slice(0, 4)), 0.99328);
close(sum(bin.slice(1, 4)), 0.6656);
const bm = moments([0, 1, 2, 3, 4, 5], bin); close(bm[0], 1); close(bm[1], 0.8);
const bin15 = bernoulliSequences(15, 0.2);
close(moments(seq(16, n => n - 1), bin15)[0], 3);
close(moments(seq(16, n => n - 1), bin15)[1], 2.4);
close(sum(bin15.slice(1)), 0.964815627911168);
close(sum(bernoulliSequences(4, 0.5).slice(3)), 5 / 16);
// L22–L25: integrate velocity independently and check each body's force/impulse.
close(integral(t => 14.7 - 9.8 * t, 0, 1.5), 11.025);
close(integral(t => Math.abs(14.7 - 9.8 * t), 0, 3), 22.05);
close(22.05 / 3, 7.35);
close(integral(t => 4 + 2 * t, 0, 3), 21);
const stagedV = t => t < 4 ? 2 * t : t < 7 ? 8 : 8 - 4 * (t - 7);
close(integral(stagedV, 0, 10), 46, 1e-7);
close(integral(t => Math.abs(stagedV(t)), 0, 10), 50, 1e-7);
close(integral(t => 6 - 2 * t, 0, 5), 5);
close(integral(t => Math.abs(6 - 2 * t), 0, 5), 13, 1e-7);
close(integral(t => t * t - 4 * t + 3, 0, 4), 4 / 3, 1e-8);
close(integral(t => Math.abs(t * t - 4 * t + 3), 0, 4), 4, 1e-8);
close(integral(t => 3 * t * t + 2, 0, 2), 12, 1e-8);
close(integral(t => 3 * t * t, 0, 2), 8, 1e-8);
close(integral(t => 12 - 4 * (t - 2), 2, 5), 18);
close(integral(t => Math.abs(3 * t * (t - 2)), 0, 3), 8, 1e-8);
close(3 * 9.8 - 23.52, 3 * 1.96); close(23.52 - 2 * 9.8, 2 * 1.96);
close(10 - 0.2 * 19.6, 2 * 3.04);
close(1800 - 400 - 680, 600 * 1.2); close(680 - 200, 400 * 1.2);
close(-700 - 300, 500 * -2);
close(2 * 5 + 3 * -1, 2 * 0.5 + 3 * 2);
close(2 * (0.5 - 5), -9); close(3 * (2 + 1), 9);
close(0.4 * (-4 - 6), -4);
for (const v of [-1, 0, 0.5, 1, 1.5, 2, 3, 6]) {
  const other = (6 - v) / 2;
  assert.equal(v > 0 && v < other, v > 0 && v < 2);
  if (v > 0 && v < 2) assert(6 - v > 4 && 6 - v < 6);
}
close(1 * 4, (1 + 3) * 1); close(1 * (1 - 4), -3);
console.log(`AS calculation checks passed: ${checks} numerical comparisons plus algebraic, sign, model-boundary and coefficient assertions across L01–L25.`);
