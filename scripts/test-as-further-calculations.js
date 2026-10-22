// Independent numerical/algebraic checks of the self-written FM01/FM02 tasks.
const assert = require('node:assert/strict');
let checks = 0;
function near(actual, expected, tolerance = 1e-10) {
  assert.ok(Number.isFinite(actual) && Math.abs(actual - expected) <= tolerance,
    `${actual} != ${expected} (tolerance ${tolerance})`);
  checks++;
}
const sum = a => a.reduce((s, x) => s + x, 0);
const range = n => Array.from({ length: n }, (_, i) => i + 1);
const rational = x => (x * x + 2) / (x * x - 4 * x);
near(rational(1), -1); near(rational(-2), 0.5); near(rational(-0.5), 1);
const h = x => (x * x - 1) / (x * x - x - 2);
for (const x of [-4, -0.5, 0, 1, 1.9, 2.1, 2.5, 2.9, 3, 5]) {
  assert.equal(h(x) > 2, x > 2 && x < 3);
  checks++;
}
// Substitution at tangent contact points, including transformed locus.
for (const sign of [-1, 1]) {
  near((sign * 2) ** 2, 4 * 1);
  near(sign * 2, sign * (1 + 1));
  near((sign * 4 * Math.SQRT2) ** 2, 8 * 4);
  near(sign * 4 * Math.SQRT2, sign * (4 + 4) / Math.SQRT2);
}
near((6 / Math.sqrt(13)) ** 2 / 9 + (6 / Math.sqrt(13)) ** 2 / 4, 1);
for (let n = -4; n <= 4; n++) {
  for (const x of [Math.PI / 6 + n * Math.PI, Math.PI / 2 + n * Math.PI]) near(Math.sin(2 * x - Math.PI / 6), 0.5);
  for (const x of [Math.PI / 6 + 2 * n * Math.PI, 5 * Math.PI / 6 + 2 * n * Math.PI, Math.PI / 2 + 2 * n * Math.PI]) {
    const s = Math.sin(x); near(2 * s * s - 3 * s + 1, 0);
  }
  near(Math.tan(3 * (-Math.PI / 6 + n * Math.PI / 3) + Math.PI / 4), -1);
  near(Math.cos(3 * ((Math.acos(0.3) - 0.2 + 2 * n * Math.PI) / 3) + 0.2), 0.3);
}
const add = (a, b) => [a[0] + b[0], a[1] + b[1]];
const mul = (a, b) => [a[0] * b[0] - a[1] * b[1], a[0] * b[1] + a[1] * b[0]];
const scale = (a, c) => a.map(x => x * c);
const reciprocal = a => [a[0] / (a[0] ** 2 + a[1] ** 2), -a[1] / (a[0] ** 2 + a[1] ** 2)];
assert.deepEqual(mul([1, 1], [1, -1]), [2, 0]);
assert.deepEqual(add(mul([1, 1], [2, 0]), [2, 0]), [4, 2]);
for (const sign of [-1, 1]) {
  const z = [1.5, sign * Math.sqrt(7) / 2];
  const w = add(z, reciprocal(z));
  const value = add(add(scale(mul(w, w), 4), scale(w, -15)), [18, 0]);
  near(value[0], 0); near(value[1], 0);
}
near(Math.hypot(Math.SQRT2, Math.SQRT2), 2);
near(Math.atan2(Math.SQRT2, Math.SQRT2), Math.PI / 4);
for (const n of range(20)) {
  near(sum(range(n).map(r => (2 * r - 1) * (2 * r + 1))), n * (4 * n * n + 6 * n - 1) / 3);
  near(sum(range(n).map(r => 1 / (r * (r + 2)))), 0.5 * (1.5 - 1 / (n + 1) - 1 / (n + 2)));
  near(sum(range(n).map(r => r ** 3 - (r - 1) ** 3)), n ** 3);
  if (n >= 3) {
    near(sum(range(n).slice(2).map(r => 3 * r * r + 2 * r)), n * (n + 1) * (2 * n + 3) / 2 - 21);
    near(sum(range(n).slice(2).map(r => 1 / (r * (r + 1)))), 1 / 3 - 1 / (n + 1));
  }
}
near(12 * Math.PI / (4 * Math.PI * 2 ** 2), 0.75);
near(20 / 5.1 ** 2 - 20 / 5 ** 2, -0.0310649750096117);
near(Math.sqrt(9.06) - 3, 0.009983388658482, 1e-12);
near((-6 / (2 * 3)) * 4, -4);
// Integrate numerically on finite intervals; the accompanying lessons prove limits.
function midpoint(f, a, b, n = 10000) {
  const step = (b - a) / n;
  return sum(Array.from({ length: n }, (_, i) => f(a + (i + 0.5) * step))) * step;
}
near(midpoint(x => 1 / (x * x), 1, 4), 0.75, 1e-8);
near(midpoint(t => 6 * t * (1 - t), 0, 1), 1, 1e-8);
near(midpoint(t => 12 * t * (1 - t), 0, 1), 2, 2e-8);
const mm = (a, b) => a.map(row => b[0].map((_, j) => sum(row.map((v, k) => v * b[k][j]))));
assert.deepEqual(mm([[1, 2, 0], [-1, 0, 3]], [[1, 0], [0, 1], [2, -1]]), [[1, 2], [5, -3]]);
assert.deepEqual(mm([[1, 0], [0, 1], [2, -1]], [[1, 2, 0], [-1, 0, 3]]), [[1, 2, 0], [-1, 0, 3], [3, 4, -3]]);
assert.deepEqual(mm([[2, 4], [1, 3]], [[1.5, -2], [-0.5, 1]]), [[1, 0], [0, 1]]);
assert.deepEqual(mm([[1, 2, 0], [0, -1, 3], [4, 0, 2]], [[1], [2], [-1]]), [[5], [-5], [2]]);
for (const k of [-3, 0, 2]) for (const x of [-4, 0, 5]) {
  const y = k, xp = 2 * x + y, yp = y;
  near(yp, k); assert.ok(Number.isFinite(xp));
  near((-x), -(2 * x + (-x))); // the line y=-x is pointwise fixed
}
const powerData = [[1, 2.5], [2, 10], [3, 22.5], [4, 40], [5, 62.5]];
for (const [x, y] of powerData) near(Math.log10(y), 2 * Math.log10(x) + Math.log10(2.5));
for (const [x, y] of [[1, 1 / 5], [2, 2 / 7], [3, 1 / 3], [6, 2 / 5]]) near(1 / y, 2 + 3 / x);
near(4 / (2 * 4 + 3), 4 / 11);
const f = x => x ** 3 - x - 1;
const midpoints = [1.5, 1.25, 1.375, 1.3125, 1.34375];
const values = [0.875, -0.296875, 0.224609375, -0.051513671875, 0.082611083984375];
let a = 1, b = 2;
midpoints.forEach((c, i) => {
  near((a + b) / 2, c); near(f(c), values[i]);
  if (f(a) * f(c) < 0) b = c; else a = c;
});
near(a, 1.3125); near(b, 1.34375); near((a + b) / 2, 1.328125); near((b - a) / 2, 0.015625);
near(1.5 - f(1.5) / (3 * 1.5 ** 2 - 1), 1.3478260869565217);
near(1 / 2 ** 10, 0.0009765625); assert.ok(1 / 2 ** 9 > 0.001);
function euler(fn, x, y, step, n) {
  const ys = [y];
  for (let i = 0; i < n; i++) { y += step * fn(x, y); x += step; ys.push(y); }
  return ys;
}
euler((x, y) => x - y, 0, 1, 0.2, 2).forEach((v, i) => near(v, [1, 0.8, 0.68][i]));
euler((x, y) => x - y, 0, 1, 0.1, 4).forEach((v, i) => near(v, [1, 0.9, 0.82, 0.758, 0.7122][i]));
near(euler((x, y) => x + y, 0, 1, -0.1, 2).at(-1), 0.82);
near(euler((x, y) => 2 * x - y, 0, 2, 0.1, 2).at(-1), 1.64);
near(euler((x, y) => -2 * y, 0, 1, 0.25, 2).at(-1), 0.25);
near(0.4 - 1 + 2 * Math.exp(-0.4), 0.7406400920712787);
near(0.02 / (0.5 * 0.02 + 0.3 * 0.04 + 0.2 * 0.1), 10 / 21);
near(0.18 / 0.958, 90 / 479); near(0.1 / 0.16, 5 / 8); near(0.54 / 0.84, 9 / 14);
for (const n of range(20)) {
  const mean = sum(range(n)) / n, second = sum(range(n).map(x => x * x)) / n;
  near(mean, (n + 1) / 2); near(second - mean * mean, (n * n - 1) / 12);
}
for (const p of [0.1, 0.25, 0.4, 0.8, 1]) {
  const probabilities = Array.from({ length: 2000 }, (_, i) => p * (1 - p) ** i);
  const mean = sum(probabilities.map((v, i) => (i + 1) * v));
  const second = sum(probabilities.map((v, i) => (i + 1) ** 2 * v));
  near(sum(probabilities), 1); near(mean, 1 / p); near(second - mean * mean, (1 - p) / p ** 2, 1e-9);
}
near(0.6 ** 3 * 0.4 / 0.6 ** 2, 0.24); near(0.75 ** 2 * 0.25, 0.140625);
function convolve(a, b) {
  const out = Array(a.length + b.length - 1).fill(0);
  a.forEach((x, i) => b.forEach((y, j) => { out[i + j] += x * y; }));
  return out;
}
const pgf = convolve(convolve([0.2, 0.8], [0.2, 0.8]), [0, 0.5, 0.5]);
near(sum(pgf), 1); near(pgf[2], 0.18);
const mean = sum(pgf.map((p, x) => p * x));
near(mean, 3.1); near(sum(pgf.map((p, x) => p * (x - mean) ** 2)), 0.57);
const joint = [[0, 0, 0.4], [0, 1, 0.1], [1, 0, 0.1], [1, 1, 0.4]];
near(sum(joint.map(([x, y, p]) => p * (x - y) ** 2)), 0.2);
near(sum(joint.map(([x, y, p]) => p * (2 * x - y + 3 - 3.5) ** 2)), 0.65);
near((4 + 9 - 7) / 2, 3); near(9 * 4 + 4 * 9 - 12 * 3, 36);
assert.ok(Math.abs((13 - 30) / 2) > Math.sqrt(4 * 9));
const t = 2 * Math.sqrt(3); near(Math.sqrt(3) * t, 6); near(1 * t, t);
for (const time of [0, 1, 2, 3.5, 6]) near((6 - 2 * time) ** 2 + (8 - 2 * time) ** 2, 8 * (time - 3.5) ** 2 + 2);
near(Math.hypot(6 - 4, 8 - 4), 2 * Math.sqrt(5));
// Dimensional exponent vectors are [M,L,T]; compare the proposed model products.
assert.deepEqual([1, -3, 0].map((v, i) => v + [0, 1, -2][i] + [0, 1, 0][i]), [1, -1, -2]);
assert.deepEqual([1, -3, 0].map((v, i) => v + [0, 2, 0][i] + [0, 2, -2][i]), [1, 1, -2]);
near(2 * 1 + 3, 2 * 3 - 1); near(3 - 1, 0.5 * (3 - (-1)));
near(2 * (1 - 3), -4); near(3 - (-1), 4);
near((0.5 * 2 * 9 + 0.5) - (0.5 * 2 + 0.5 * 9), 4);
near(0.5 * (3 - (-4)), 3.5);
for (const u of [0.5, 1, 1.5, 2, 2.5]) {
  const v = 2 - u, e = v / u;
  assert.equal(e >= 0 && e <= 1 && v >= 0, u >= 1 && u <= 2); checks++;
}
console.log(`PASS: ${checks} numerical/algebraic comparisons, plus matrix, probability, dimension and model assertions.`);
