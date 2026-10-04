// Run after bundle exec jekyll build. Check forces, gradients, work and orbit energies.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const G = 6.67e-11, M = 5.97e24, R = 6.37e6, mu = G * M;
const close = (a, b, tol = 1e-8) => assert(Math.abs(a - b) <= tol * Math.max(1, Math.abs(b)), `${a} != ${b}`);
const rounded = (x, expected, digits = 3) => assert.equal(x.toPrecision(digits), expected);
const V = r => -mu / r;
// Finite-difference potential gradients and numerical work integration check signs.
for (const r of [R, R + 4e5, 2 * R, 4.5e8]) {
  const dr = r * 1e-5;
  const outwardField = -(V(r + dr) - V(r - dr)) / (2 * dr);
  close(outwardField, -mu / r ** 2, 1e-7);
  assert(outwardField < 0);
}
const r1 = R + 4e5, r2 = R + 8e5, m = 500;
rounded(mu / r1 ** 2, '8.69'); rounded(m * mu / r1 ** 2, '4.34e+3');
rounded(V(R), '-6.25e+7'); rounded(V(r1), '-5.88e+7');
const steps = 10000, dr = (r1 - R) / steps;
let integral = 0;
for (let i = 0; i < steps; i++) integral += m * mu / (R + (i + .5) * dr) ** 2 * dr;
close(integral, m * (V(r1) - V(R)), 1e-8);
rounded(integral, '1.85e+9');
// Reconstruct circular force balance from circumference and period, plus energy identity.
for (const r of [r1, r2, 2 * r1]) {
  const T = 2 * Math.PI * Math.sqrt(r ** 3 / mu), v = 2 * Math.PI * r / T;
  close(m * v ** 2 / r, G * M * m / r ** 2);
  const kinetic = .5 * m * v ** 2, potential = m * V(r);
  close(potential, -2 * kinetic); close(kinetic + potential, potential / 2);
}
const speed = Math.sqrt(mu / r1), period = 2 * Math.PI * r1 / speed;
rounded(speed, '7.67e+3'); rounded(period, '5.55e+3');
assert.equal((period / 60).toFixed(1), '92.4');
const dPotential = m * (V(r2) - V(r1));
const dKinetic = .5 * m * (mu / r2 - mu / r1);
assert(dPotential > 0 && dKinetic < 0);
rounded(dPotential + dKinetic, '8.20e+8');
close(dPotential, -2 * dKinetic);
const geo = Math.cbrt(mu * 86400 ** 2 / (4 * Math.PI ** 2));
rounded(geo, '4.22e+7'); rounded(geo - R, '3.59e+7');
close(mu / geo ** 2, (2 * Math.PI / 86400) ** 2 * geo);
rounded(Math.sqrt(2 * mu / R) / 1000, '11.2');
// Two-source fields cancel as vectors; potentials remain negative.
const d = 12, x = 2 * d / 3;
close(-4 / x ** 2 + 1 / (d - x) ** 2, 0);
close(-4 / x - 1 / (d - x), -9 / d);
const twoV = x => -4 / x - 1 / (d - x);
assert(twoV(x - .01) < twoV(x) && twoV(x + .01) < twoV(x));
close((2 * m * mu / (2 * r1) ** 2) / (m * mu / r1 ** 2), .5);
close(V(2 * r1) / V(r1), .5); close(2 * m * V(2 * r1), m * V(r1));
rounded(mu / (2 * R) ** 2, '2.45'); rounded(V(2 * R), '-3.13e+7');
rounded(-100 * V(2 * R), '3.13e+9'); rounded(-1.4 / 37, '-0.038', 2);
// Authentic adapted paper questions, checked from the supplied data.
const w = 2 * Math.PI / (27.3 * 86400), a = w * w * 4.5e8;
rounded(w, '0.00000266'); rounded(mu / (4.5e8) ** 2, '0.0020', 2);
rounded(a, '0.0032', 2); assert(a > mu / (4.5e8) ** 2);
const barrier = -4.8e7 - (-1.4e8), launch = Math.sqrt(2 * barrier / 37);
close(.5 * 37 * launch ** 2 - 1.4e8, -4.8e7);
rounded(launch, '2.2e+3', 2);
const source = fs.readFileSync('alevel/a2-physics/gravitational-fields-and-satellites.md', 'utf8');
const html = fs.readFileSync('_site/alevel/a2-physics/gravitational-fields-and-satellites/index.html', 'utf8');
assert(!/[\u3400-\u9fff]/u.test(source));
assert.equal((source.match(/### Example /g) || []).length, 6);
assert.equal((source.match(/### Question /g) || []).length, 8);
assert.equal((html.match(/<details\b/g) || []).length, 19);
assert.equal((html.match(/<img[^>]*data-lazy-ignore="true"/g) || []).length, 2);
for (const id of ['force-and-field-strength', 'potential-and-potential-energy', 'graphs-equipotentials-and-combined-fields', 'circular-orbits', 'orbital-energy', 'geosynchronous-and-geostationary-orbits', 'practice', 'quick-reference']) {
  assert(html.includes(`id="${id}"`), `Missing section: ${id}`);
}
console.log('Physics gravity passed: field gradients, work integration, circular force balance, orbital energy, combined fields, OxfordAQA answers and rendered lesson.');
