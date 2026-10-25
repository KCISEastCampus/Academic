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

// Entrance mixed/retrieval tasks: check balances by a second route.
const g = 9.8;
for (const parcel of [0, 4, 8, 9]) {
  const right = (16 + 4 * parcel) * g / 3;
  const left = (8 + parcel) * g - right;
  close(3 * right - 8 * g * 2 - parcel * g * 4, 0);
  close(3 * left - 8 * g + parcel * g, 0); // moments about the other support
  assert.equal(left >= -1e-10, parcel <= 8);
}
close((8 * 2 + 4 * 4) / 12, 8 / 3);
const platformAcceleration = (10 - 2) / 2;
const edgeSpeed = Math.sqrt(2 * platformAcceleration * 4);
close(edgeSpeed, 4 * Math.sqrt(2));
const flightTime = Math.sqrt(2 * 4.9 / g);
close(flightTime, 1);
close(edgeSpeed ** 2 + (g * flightTime) ** 2, (10 - 2) * 4 + 2 * g * 4.9);
for (const t of [0, .25, 1, 2]) {
  const r = [.8 * Math.cos(2 * t), .8 * Math.sin(2 * t)];
  const v = [-1.6 * Math.sin(2 * t), 1.6 * Math.cos(2 * t)];
  close(Math.hypot(...r), .8);
  close(Math.hypot(...v), 1.6);
  close(r[0] * v[0] + r[1] * v[1], 0);
}
assert(.5 * .8 * 2 ** 2 < .4 * .5 * g);
assert(.5 * .8 * 3 ** 2 > .4 * .5 * g);
close(.5 * .8 * Math.sqrt(4.9) ** 2, .4 * .5 * g);
const acceleration = g / 3, tension = 2 * g / 3;
close(tension / 2, acceleration);
close(g - tension, acceleration);
close(.5 * acceleration * (Math.sqrt(12 / g)) ** 2, 2);
close(1 * 6, 3 * 2); // collision momentum
close(.5 * 6 ** 2 - .5 * 3 * 2 ** 2, 12);
close(3 * g * (2 / g), .5 * 3 * 2 ** 2);
close(4.9 * .8, .4 * g); // conical pendulum, vertical
close(4.9 * .6, .4 * .75 * g); // radial
close((2 * Math.PI / Math.sqrt(g)) * Math.sqrt(g), 2 * Math.PI);
console.log('MA05 entrance checks passed: support loss, stagewise work and flight, radial friction bounds, taut-string interval, collision energy and conical forces.');
