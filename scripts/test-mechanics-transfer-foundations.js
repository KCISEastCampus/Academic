const assert = require('node:assert/strict');
const close = (a, b) => assert(Math.abs(a - b) < 1e-8, `${a} != ${b}`);
const A = t => [t, t * t], B = t => [3 - t, 1];
assert.deepEqual(A(1), B(2));
// Equal horizontal coordinates force this time; the vertical coordinates differ.
close(A(1.5)[0], B(1.5)[0]);
assert.notEqual(A(1.5)[1], B(1.5)[1]);
for (let t = 0; t <= Math.PI / 2; t += 0.05) {
  const h = 1e-5;
  const vx = (Math.cos(t + h) - Math.cos(t - h)) / (2 * h);
  const vy = (Math.sin(t + h) - Math.sin(t - h)) / (2 * h);
  close(Math.hypot(Math.cos(t), Math.sin(t)), 1);
  close(Math.hypot(vx, vy), 1);
}
// Straight tow arrangement: internal forces cancel only in the combined system.
for (const a of [-0.1, 0, 1.8, 2]) {
  const trailerForce = 300 * a + 60;
  assert(trailerForce > 0, 'Taut rope can pull');
  close((900 + 300) * a, (900 * a + trailerForce + 180) - 180 - 60);
}
assert(300 * (-2) + 60 < 0, 'Stronger braking needs compression; a rope cannot supply it');
console.log('Foundation transfer checks passed: path intersection at different times, no collision, constant radius/nonzero speed and tow-system force balance.');
