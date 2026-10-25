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
assert(1 / (Math.sqrt(12) - 2) < (Math.sqrt(3) + 1) / 3);
close(2 / (Math.sqrt(28) - Math.sqrt(12)), (Math.sqrt(7) + Math.sqrt(3)) / 4);
close((Math.sqrt(7) + Math.sqrt(3)) / 4 * (Math.sqrt(28) - Math.sqrt(12)), 2);
assert(Math.sqrt(7 + 3) < Math.sqrt(7) + Math.sqrt(3));
close((Math.sqrt(7) + Math.sqrt(3)) ** 2, 10 + 2 * Math.sqrt(21));
// L01 pilot: compare the original root expressions with the claimed powers.
for (const value of [1 / 64, 1 / 8, 1, 8, 9, 64, 729]) {
  close(Math.cbrt(value ** 2) / value, value ** (-1 / 3));
  close(value ** (5 / 6) / Math.cbrt(value ** 2), value ** (1 / 6));
  close((value ** 3) ** (1 / 4) / value ** (5 / 4), 1 / Math.sqrt(value));
}
close(64 ** (5 / 6) / Math.cbrt(64 ** 2), 2);
close((9 ** 3) ** (1 / 4) / 9 ** (5 / 4), 1 / 3);
const mixedCandidates = [1, 4]; // roots of the squared equation
assert.deepEqual(mixedCandidates.filter(x => x > 0 && x / Math.sqrt(x) === x - 2), [4]);
close(((Math.sqrt(3) + 1) / 3 - 1 / (Math.sqrt(12) - 2)), (Math.sqrt(3) + 1) / 12);
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
// New independent tasks and course reviews: numerical checks supplement the written proofs.
close(Math.hypot(6, 4), 2 * Math.sqrt(13));
close(Math.hypot(3, 6), 3 * Math.sqrt(5));
close(3 * 1 + 2 * 3, 9); close(2 * 1.5 + 4 * 2, 11);
const derivative = (f, x) => (f(x + 1e-5) - f(x - 1e-5)) / 2e-5;
for (const x of [0.5, 1, 4, 9]) {
  close(derivative(t => 6 / t + 3 * Math.sqrt(t), x), -6 / x ** 2 + 1.5 / Math.sqrt(x), 1e-7);
  close(derivative(t => (2 * t * t + 3) / Math.sqrt(t), x), 3 * Math.sqrt(x) - 1.5 * x ** -1.5, 1e-7);
  close(derivative(t => 2 * t ** 1.5 - 2 / t + 4, x), 3 * Math.sqrt(x) + 2 / x ** 2, 1e-7);
  close(derivative(t => 4 * t ** 1.5 + 4 / t + 2, x), 6 * Math.sqrt(x) - 4 / x ** 2, 1e-7);
}
close(2 * 1 ** 1.5 - 2 + 4, 4); close(4 * 4 ** 1.5 + 4 / 4 + 2, 35);
assert.deepEqual(power([1, -2], 4), [1, -8, 24, -32, 16]);
close(0.98 ** 4 - 0.922368, 0.00000016);
close((3 + 1) ** 2 + (5 - 2) ** 2, 25);
close(3 * 3 - 4 * 5, -11); close(4 * 3 + 3 * 5, 27);
close(4 * 5 - 3 * 3, 11); close(4 * 4 - 3 * 2, 10);
assert.deepEqual([-2, 2].filter(x => x > 1 && Math.abs(Math.log(x + 1) / Math.log(3) + Math.log(x - 1) / Math.log(3) - 1) < 1e-10), [2]);
const coinScores = [0, 1, 1, 2], coinProbabilities = [0.25, 0.25, 0.25, 0.25];
close(moments(coinScores.map(x => 5 - 3 * x), coinProbabilities)[0], 2);
close(moments(coinScores.map(x => 5 - 3 * x), coinProbabilities)[1], 9 / 2);
const diePayments = [1, 1, 4, 4, 4, 4].map(x => 2 * x + 1);
close(moments(diePayments, Array(6).fill(1 / 6))[0], 7);
close(moments(diePayments, Array(6).fill(1 / 6))[1], 8);
close(integral(t => 6 * t - 2, 1, 2) + 3, 10);
close(integral(t => 3 * t * t - 2 * t + 2, 0, 2), 8, 1e-8);
close(integral(t => 2 * t * t - 2, 0, 2) + 1, 7 / 3, 1e-8);
close(integral(x => 3 * x * x - x ** 3, 0, 3), 27 / 4, 1e-8);
close(integral(x => 4 * x - x * x, 0, 4), 32 / 3, 1e-8);
const trigRoot = (Math.sqrt(17) - 1) / 4;
assert((-Math.sqrt(17) - 1) / 4 < -1);
for (const angle of [Math.acos(trigRoot), 2 * Math.PI - Math.acos(trigRoot)]) close(2 * Math.sin(angle) ** 2, Math.cos(angle));
close(12 / 20, 3 / 5); assert.notEqual(12 / 20, 30 / 60);
const reviewBinomial = bernoulliSequences(4, 1 / 3);
close(sum(reviewBinomial.slice(1)), 65 / 81);
close(moments([0, 1, 2, 3, 4], reviewBinomial)[0], 4 / 3);
close(moments([0, 1, 2, 3, 4], reviewBinomial)[1], 8 / 9);
const squaredValues = [0, 1, 9], squaredProbabilities = [1 / 2, 1 / 3, 1 / 6];
close(moments(squaredValues, squaredProbabilities)[0], 11 / 6);
close(moments(squaredValues, squaredProbabilities)[1], 377 / 36);
const paymentTotals = [], paymentChances = [];
for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) {
  paymentTotals.push(squaredValues[i] + squaredValues[j] - 1);
  paymentChances.push(squaredProbabilities[i] * squaredProbabilities[j]);
}
close(moments(paymentTotals, paymentChances)[0], 8 / 3);
close(moments(paymentTotals, paymentChances)[1], 377 / 18);
close(integral(t => 2 + 4 * t, 0, 4), 40);
close(2 * (18 - 2), (10 - 2) * 4);
close(integral(t => 2 * t - t * t, 0, 3), 0, 1e-8);
close(integral(t => Math.abs(2 * t - t * t), 0, 3), 8 / 3, 1e-8);
close(integral(t => 1.5 * (2 - 2 * t), 0, 3), -4.5);
// Review repairs: exact products, enumerated thresholds, restrictions and changed motion.
assert.deepEqual(convolve([2, 1], [3, -4, 1]), [6, -5, -2, 1]);
const newDeposits = seq(12, n => 12 + 4 * (n - 1));
assert.equal(newDeposits.findIndex((_, i) => sum(newDeposits.slice(0, i + 1)) >= 250) + 1, 9);
close(sum(newDeposits.slice(0, 8)), 208); close(sum(newDeposits.slice(0, 9)), 252);
const firstAngle = Math.asin(6 * Math.sin(40 * Math.PI / 180) / 9) * 180 / Math.PI;
close(firstAngle, 25.374, 1e-4);
assert(firstAngle + 40 < 180 && (180 - firstAngle) + 40 > 180);
assert.deepEqual([0, Math.PI, 2 * Math.PI].filter(t => Math.abs(Math.sin(t)) > 1e-12), []);
close(8 / 20, 2 / 5); close(8 / 22, 4 / 11); assert.notEqual(8 / 20, 22 / 50);
assert.notEqual(3 / 5, 2 / 4);
close(bernoulliSequences(3, 3 / 5)[2], 54 / 125);
for (const v of [-1, 0, 0.5, 2, 3.5, 4, 5, 6]) {
  assert.equal(v > 0 && v < 12 - 2 * v, v > 0 && v < 4);
  if (v > 0 && v < 4) assert(12 - 2 * v > 4 && 12 - 2 * v < 12);
}
close((-3 - 0.25 * 4 * 9.8) / 4, -3.2);
close((8 + 0.2 * 5 * 9.8) / 5, 3.56);
for (const [c, x, y] of [[10, -3, 4], [-10, 5, 0]]) {
  close(y, 2 * x + c); close((x - 1) ** 2 + (y - 2) ** 2, 20);
  close((4 * c - 10) ** 2 - 20 * ((c - 2) ** 2 - 19), 0);
}
for (const c of [-12, -10, 0, 10, 12]) close((4 * c - 10) ** 2 - 20 * ((c - 2) ** 2 - 19), 400 - 4 * c * c);
console.log(`AS calculation checks passed: ${checks} numerical comparisons plus algebraic, sign, model-boundary and coefficient assertions across L01–L25.`);
