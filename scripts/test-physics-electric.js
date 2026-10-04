// Run after bundle exec jekyll build. Independent gradients, trajectory and energy checks.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const k = 8.99e9, e = 1.60e-19, me = 9.11e-31, G = 6.67e-11, mp = 1.67e-27;
const close = (a, b, tol = 1e-8) => assert(Math.abs(a - b) <= tol * Math.max(Math.abs(a), Math.abs(b), 1e-300), `${a} != ${b}`);
const rounded = (x, value, digits = 2) => assert.equal(x.toPrecision(digits), value);
// Differentiate the scalar potential numerically for both signs, not its value divided by r.
for (const Q of [4e-9, -4e-9]) {
  const V = r => k * Q / r;
  for (const r of [.06, .1, .3]) {
    const h = r * 1e-5, field = -(V(r + h) - V(r - h)) / (2 * h);
    close(field, k * Q / r ** 2, 1e-7);
    assert.equal(Math.sign(field), Math.sign(Q));
  }
}
rounded(k * 3e-9 * 8e-9 / .06 ** 2, '0.000060');
const field = k * 4e-9 / .1 ** 2, potential = k * 4e-9 / .1;
rounded(field, '3.6e+3'); rounded(potential, '3.6e+2');
rounded(e * field, '5.8e-16'); rounded(-e * potential, '-5.8e-17');
// Two-dimensional superposition: field components from independent potential differences.
const Vxy = (x, y) => k * (2e-9 / Math.hypot(x + .1, y) - 3e-9 / Math.hypot(x, y - .1));
const h = 1e-6;
const Ex = -(Vxy(h, 0) - Vxy(-h, 0)) / (2 * h);
const Ey = -(Vxy(0, h) - Vxy(0, -h)) / (2 * h);
close(Ex, 1798, 1e-7); close(Ey, 2697, 1e-7);
rounded(Math.hypot(Ex, Ey), '3.2e+3'); rounded(Math.atan2(Ey, Ex) * 180 / Math.PI, '56');
rounded(Vxy(0, 0), '-90');
close(k * 2e-9 / (.1 / 3) ** 2, k * 8e-9 / (2 * .1 / 3) ** 2);
close(k * 2e-9 / (.1 / 3) + k * 8e-9 / (2 * .1 / 3), 9 * k * 2e-9 / .1);
close(k * 2e-9 / .1 - k * 2e-9 / .1, 0);
assert(2 * k * 2e-9 / .1 ** 2 > 0);
// Numerical trajectories check constant horizontal speed, opposite charge directions and work.
for (const [U, d, L, u] of [[100, .02, .04, 2e7], [40, .02, .03, 1.5e7]]) {
  for (const q of [e, -e]) {
    const Ey = -U / d, ay = q * Ey / me, t = L / u, dt = t / 2000;
    let x = 0, y = 0, vy = 0;
    for (let i = 0; i < 2000; i++) { x += u * dt; y += vy * dt + .5 * ay * dt ** 2; vy += ay * dt; }
    close(x, L); close(y, .5 * ay * t ** 2); close(vy, ay * t);
    assert(Math.abs(y) < d / 2); assert.equal(Math.sign(y), -Math.sign(q));
    const deltaV = -Ey * y;
    close(.5 * me * vy ** 2, -q * deltaV);
    if (q < 0) {
      rounded(t, '2.0e-9');
      rounded(y * 1000, U === 100 ? '1.8' : '0.70');
      if (U === 100) rounded(Math.atan(vy / u) * 180 / Math.PI, '5.0');
    }
  }
}
rounded(250 / .02, '1.25e+4', 3); rounded(e * 250 / .02, '2.00e-15', 3);
rounded(e * 250, '4.00e-17', 3); rounded(Math.sqrt(2 * e * 250 / me), '9.37e+6', 3);
close(.5 * me * (Math.sqrt(2 * e * 250 / me)) ** 2, e * 250);
rounded(k * e ** 2 / (G * me * mp), '2.3e+39');
rounded(k * e ** 2 / (G * me * 2 * mp), '1.1e+39');
close((2 * 2 / 3 ** 2), 4 / 9);
close(-(40 - 120) / .02, 4000); close(4000 * .02, 80);
rounded(-e * (-80), '1.28e-17', 3);
// Oil-drop equilibrium uses only the external plate field; X includes both source fields.
const plates = 16 / .0015, q = -4.8e-19, mass = -q * plates / 9.81;
close(q * plates, -mass * 9.81);
const drop = k * Math.abs(q) / (1.5e-6) ** 2;
rounded(plates - drop, '8.7e+3'); assert(plates > drop);
assert(mass * 9.81 + q * (plates * .9) > 0);
assert(mass * 9.81 + q * (16 / (.0015 * 1.1)) > 0);
close(3e-6 * 25e3, .075); close(-3e-6 * 25e3, -.075);
for (const charge of [3e-6, -3e-6]) close(charge * (25e3 - 25e3), 0);
const source = fs.readFileSync('alevel/a2-physics/electric-fields.md', 'utf8');
const html = fs.readFileSync('_site/alevel/a2-physics/electric-fields/index.html', 'utf8');
assert(!/[\u3400-\u9fff]/u.test(source));
assert.equal((source.match(/### Example /g) || []).length, 6);
assert.equal((source.match(/### Question /g) || []).length, 8);
assert.equal((html.match(/<details\b/g) || []).length, 18);
assert.equal((html.match(/<img[^>]*data-lazy-ignore="true"/g) || []).length, 3);
for (const id of ['force-and-field-strength', 'potential-and-potential-energy', 'graphs-and-equipotentials', 'combining-fields-and-potentials', 'uniform-fields-between-plates', 'motion-across-a-uniform-field', 'comparing-electric-and-gravitational-fields', 'practice', 'quick-reference']) {
  assert(html.includes(`id="${id}"`), `Missing section: ${id}`);
}
console.log('Physics electric fields passed: potential gradients, superposition, trajectory integration, work and energy, oil-drop balance, OxfordAQA answers and rendered lesson.');
