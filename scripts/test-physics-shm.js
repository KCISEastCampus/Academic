// Run after bundle exec jekyll build. Derivatives, energy and actual-force checks.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const g = 9.81, pi = Math.PI;
const close = (a, b, tol = 1e-8) => assert(Math.abs(a - b) < tol, `${a} != ${b}`);
const rounded = (x, expected) => assert.equal(x.toPrecision(2), expected);
// Both initial conditions: independently differentiate position and velocity.
for (const [A, w, phase] of [[.05, 12, 0], [.04, 5 * pi, 0], [.03, 2.5 * pi, -pi / 2]]) {
  const x = t => A * Math.cos(w * t + phase);
  const v = t => -A * w * Math.sin(w * t + phase);
  for (const t of [0, .03, .1, .15, .2, .39]) {
    const h = 1e-6;
    close((x(t + h) - x(t - h)) / (2 * h), v(t), 1e-7);
    close((v(t + h) - v(t - h)) / (2 * h), -w * w * x(t), 1e-7);
    close(v(t) ** 2 + w * w * x(t) ** 2, w * w * A ** 2);
  }
  close(x(2 * pi / w), x(0)); close(v(2 * pi / w), v(0));
}
rounded(2 * pi / 12, '0.52'); close(144 * .05, 7.2); close(-144 * .03, -4.32);
rounded(.04 * Math.cos(3 * pi / 4), '-0.028');
rounded(-.04 * 5 * pi * Math.sin(3 * pi / 4), '-0.44');
rounded(-((5 * pi) ** 2) * .04 * Math.cos(3 * pi / 4), '7.0');
rounded(Math.sqrt(250) * .04, '0.63');
rounded(Math.sqrt(250 * (.04 ** 2 - .024 ** 2)), '0.51');
close(.5 * 50 * .04 ** 2, .04); close(.5 * 50 * .024 ** 2, .0144);
close(.04 - .0144, .0256); close(Math.sqrt(2 * .0256 / .2), Math.sqrt(250 * (.04 ** 2 - .024 ** 2)));
// Vertical springs: combined elastic and gravitational energy; natural length is not equilibrium.
for (const [m, k, A, T, vmax] of [[.25, 40, .02, '0.50', null], [.3, 60, .015, '0.44', '0.21']]) {
  const e0 = m * g / k, w = Math.sqrt(k / m);
  assert(e0 > A); rounded(2 * pi / w, T);
  if (vmax) rounded(w * A, vmax);
  for (const x of [-A, 0, A]) {
    const forceDown = m * g - k * (e0 + x);
    close(forceDown / m, -w * w * x);
    close(.5 * k * (e0 + x) ** 2 - m * g * x - .5 * k * e0 ** 2, .5 * k * x ** 2);
  }
}
close(.25 * g + 40 * .02, 3.2525); close(.8 / .25, 3.2);
// Pendulum: energy gives speed; check the small-angle approximation against sin(theta).
const L = .8, height = .003, theta = Math.acos(1 - height / L);
rounded(2 * pi * Math.sqrt(L / g), '1.8'); rounded(Math.sqrt(2 * g * height), '0.24');
assert(theta * 180 / pi < 5.1);
close(g * Math.sin(theta), g * theta, .002);
assert(2 * g * height / L > 0); // radial acceleration at the bottom is not zero
rounded(10 / (2 * pi), '1.6'); close(-100 * -.02, 2);
close(.03 * Math.sin(2.5 * pi * .2), .03);
rounded(-((2.5 * pi) ** 2) * .03, '-1.9');
const energy = .5 * .4 * (4 * pi) ** 2 * .02 ** 2;
rounded(energy, '0.013'); rounded(.75 * energy, '0.0095');
rounded(4 * pi * Math.sqrt(.02 ** 2 - .01 ** 2), '0.22');
// Energy curves sum to a constant and repeat in T/2, unlike displacement.
for (const t of [0, .07, .19, .4]) {
  const pe = t => Math.cos(4 * pi * t) ** 2;
  const ke = t => Math.sin(4 * pi * t) ** 2;
  close(pe(t) + ke(t), 1); close(pe(t + .25), pe(t)); close(ke(t + .25), ke(t));
}
rounded(4 * pi * pi * .9 / 1.9 ** 2, '9.8');
rounded(2 * .2 / 38 * 100, '1.1'); close((.2 / 20) / (38 / 20), .2 / 38);
// Cut-thread model from OxfordAQA June 2024 Q9: balance before and after, then energy.
for (const [M, m, dl] of [[.4, .1, .05], [.6, .2, .1], [.2, .2, .04]]) {
  const k = (M + m) * g / dl, newEq = M * g / k, A = m * g / k;
  close(newEq + A, dl);
  const T = 2 * pi * Math.sqrt(M * dl / ((M + m) * g));
  close((2 * pi / T) ** 2, k / M);
  for (const x of [-A, 0, A]) close((M * g - k * (newEq + x)) / M, -k * x / M);
  assert(newEq - A > -1e-12);
}
// Graph transformations recover k and g with the plotted ordinate T squared.
close(4 * pi * pi / (4 * pi * pi / 50), 50);
close(4 * pi * pi / (4 * pi * pi / g), g);
const source = fs.readFileSync('alevel/a2-physics/simple-harmonic-motion.md', 'utf8');
const html = fs.readFileSync('_site/alevel/a2-physics/simple-harmonic-motion/index.html', 'utf8');
assert(!/[\u3400-\u9fff]/u.test(source), 'English content');
assert.equal((source.match(/### Example /g) || []).length, 5);
assert.equal((source.match(/### Question /g) || []).length, 7);
assert.equal((html.match(/<details\b/g) || []).length, 17);
assert.equal((html.match(/<img[^>]*data-lazy-ignore="true"/g) || []).length, 3);
assert(!html.includes('<p>$$'), 'MathJax display blocks');
for (const id of ['the-condition-for-shm', 'motion-graphs-and-equations', 'speed-at-a-given-displacement', 'energy-in-shm', 'massspring-systems-and-pendulums', 'measurements-and-graphs', 'practice', 'quick-reference'])
  assert(html.includes(`id="${id}"`), `Missing section: ${id}`);
console.log('Physics SHM passed: derivatives, initial conditions, energy, spring force balances, pendulum approximation, OxfordAQA models and rendered structure.');
