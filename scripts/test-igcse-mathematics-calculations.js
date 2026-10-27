// Independent numerical checks supplement the written reasoning and content review.
const assert = require('node:assert/strict');
const near = (a, b) => assert(Math.abs(a - b) < 1e-10, `${a} versus ${b}`);
// Mixed tasks: conversions and changing reference amounts must agree end to end.
const realLengths = [6, 4].map(cm => cm * 200 / 100);
assert.deepEqual(realLengths, [12, 8]);
near(realLengths[0] * realLengths[1] * (1 - 3 / 8) * 15 * 0.88, 792);
near(2.35 * 1.75, 4.1125);
near(2.45 * 1.85, 4.5325);
assert(2.44 * 1.84 > 4.4);
const ticketSolutions = [];
for (let adults = 0; adults <= 32; adults++) {
  const students = 32 - adults;
  if (8 * adults + 5 * students === 199) ticketSolutions.push([adults, students]);
}
assert.deepEqual(ticketSolutions, [[13, 19]]);
const f = x => x * x - 4 * x + 1;
for (const x of [2, 2.1, 3, 5, 20]) near(2 + Math.sqrt(f(x) + 3), x);
assert.deepEqual([-1, 5].filter(x => x >= 2 && f(x) === 6), [5]);
near(4 * 3 * 2 * 1.5 ** 3, 81);
near(2 * (4 * 3 + 4 * 2 + 3 * 2) * 1.5 ** 2, 117);
near(Math.hypot(4, 3), 5);
assert.equal(Math.round(180 + Math.atan2(4, 3) * 180 / Math.PI), 233);
const mean = data => data.reduce((a, b) => a + b, 0) / data.length;
const a = [2, 3, 3, 4, 8], b = [3, 3, 4, 5, 5];
near(mean(a), 4); near(mean(b), 4);
assert.deepEqual([a[2], b[2], a[4] - a[0], b[4] - b[0]], [3, 4, 6, 2]);
assert.equal(20 - ((8 - 5) + 5 + (12 - 5)), 5);
assert.notEqual(5 / 20, 8 / 20 * (12 / 20));
near(100 * 1.2 * 0.8, 96);
const planWidth = 12 / 2 - 4;
assert.equal(planWidth, 2);
near((4 * 500 / 100) * (planWidth * 500 / 100), 200);
const curve = x => x ** 3 - 3 * x;
const gradient = x => 3 * x * x - 3;
assert.deepEqual([-2, 0, 2].map(x => Math.sign(gradient(x))), [1, -1, 1]);
assert.deepEqual([curve(-1), curve(1), curve(0), gradient(0)], [2, -2, 0, -3]);
// A stationary inflection must not be classified merely by its zero derivative.
assert.deepEqual([-0.1, 0, 0.1].map(x => Math.sign(3 * x * x)), [1, 0, 1]);
console.log('IGCSE mixed review: independent conversion, constraint, count, geometry, data and derivative checks passed.');
