// Independent substitutions and force/work integrals for the AS-to-MA05 bridge.
const assert = require('node:assert/strict');
const close = (a, b) => assert(Math.abs(a - b) < 1e-8, `${a} != ${b}`);
const energy = (m, v) => m.reduce((s, mass, i) => s + mass * v[i] ** 2 / 2, 0);
const momentum = (m, v) => m.reduce((s, mass, i) => s + mass * v[i], 0);
const integrate = (f, a, b) => {
  const n = 200, h = (b - a) / n;
  let total = f(a) + f(b);
  for (let i = 1; i < n; i++) total += (i % 2 ? 4 : 2) * f(a + i * h);
  return total * h / 3;
};

// Cross-check impulse through acceleration and energy through work, using v(t).
const v = t => -1 + 1.5 * t * t;
close(v(2), 5);
close(integrate(t => 6 * t, 0, 2), 2 * (v(2) - v(0)));
close(integrate(t => 6 * t * v(t), 0, 2), energy([2], [5]) - energy([2], [-1]));

const m = [2, 3], u = [5, 0], branches = [[1, 8 / 3], [-1, 4]];
for (const [i, final] of branches.entries()) {
  close(momentum(m, final), momentum(m, u));
  close(Math.abs(2 * final[0]), 2);
  assert(final[1] > final[0], 'Particles separate');
  close(energy(m, u) - energy(m, final), [40 / 3, 0][i]);
}

// Triangular force record: derive the velocity on each segment independently.
const v1 = t => -4 + 3 * t * t;
const v2 = t => -10 + 12 * t - 3 * t * t;
close(v1(1), v2(1)); close(v2(2), 2);
close(integrate(t => 3 * t, 0, 1) + integrate(t => 6 - 3 * t, 1, 2), 3);
close(integrate(t => 3 * t * v1(t), 0, 1) + integrate(t => (6 - 3 * t) * v2(t), 1, 2), -3);
for (const final of [[1, 2], [-1, 4]]) {
  close(momentum([1, 1], final), 3);
  assert(final[1] > final[0]);
}
close(energy([1, 1], [1, 2]), 2.5);
assert(energy([1, 1], [-1, 4]) > 4.5, 'Reject energy release under passive model');
close(momentum([0.5], [-2]) - momentum([0.5], [3]), -2.5);
close(energy([0.5], [3]) - energy([0.5], [-2]), 1.25);

// Retained bisection interval must follow all five trial values, not a solver.
const f = x => x ** 3 - x - 1;
let a = 1, b = 2;
for (const expected of [1.5, 1.25, 1.375, 1.3125, 1.34375]) {
  const c = (a + b) / 2;
  close(c, expected);
  if (f(a) * f(c) < 0) b = c; else a = c;
}
assert.deepEqual([a, b], [1.3125, 1.34375]);
close((a + b) / 2, 1.328125); close((b - a) / 2, 0.015625);
console.log('Momentum bridge: impulses, work-energy, both direction branches, passive-model rejection, wall impulse and five-step bisection verified.');
