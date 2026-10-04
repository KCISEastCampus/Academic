// Run after bundle exec jekyll build. Independent force balances and rendered links.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const g = 9.81;
const close = (a, b, tol = 1e-7) => assert(Math.abs(a - b) < tol, `${a} != ${b}`);
const rounded = (x, value) => assert.equal(x.toPrecision(2), value);
// Velocity changes in a circle: finite differences check acceleration towards the centre.
for (const [r, rpm, v, a] of [[.15, 120, 1.884955592, 23.68705056], [.2, 90, 1.884955592, 17.76528792], [.4, 90, 3.769911184, 35.53057584]]) {
  const w = rpm * Math.PI / 30, h = 1e-5, t = .37;
  const position = t => [r * Math.cos(w * t), r * Math.sin(w * t)];
  const velocity = t => [-r * w * Math.sin(w * t), r * w * Math.cos(w * t)];
  const acc = velocity(t + h).map((x, i) => (x - velocity(t - h)[i]) / (2 * h));
  close(Math.hypot(...velocity(t)), v);
  close(Math.hypot(...acc), a, 1e-6);
  for (let i = 0; i < 2; i++) close(acc[i], -w * w * position(t)[i], 1e-6);
  close(v * 60 / rpm, 2 * Math.PI * r);
}
close(.2 * 3 ** 2 / .5, 3.6);
rounded(Math.sqrt(5 * .5 / .2), '3.5');
close(750 * 12 ** 2 / 40, 2700);
rounded(Math.sqrt(4000 * 40 / 750), '15');
// Cartesian balances distinguish a hill's outward reaction from inward string tension.
for (const [m, r, v, crest, dip] of [[1000, 50, 15, 5310, 14310], [600, 25, 10, 3486, 8286]]) {
  close(-m * g + crest, -m * v ** 2 / r);
  close(-m * g + dip, m * v ** 2 / r);
  const limit = Math.sqrt(g * r);
  for (const speed of [limit - .1, limit + .1]) {
    assert.equal(m * g - m * speed ** 2 / r >= 0, speed < limit);
    assert.equal(m * speed ** 2 / r - m * g >= 0, speed > limit);
  }
}
assert(600 * g - 600 * 18 ** 2 / 25 < 0);
close(Math.sqrt(6 * .8 / .3), 4);
close(4 / .8, 5);
close(.3 * 4 ** 2 / .4, 12);
// OxfordAQA Jan 2020 aircraft: component vector sum, not total lift as centripetal force.
const angle = 25 * Math.PI / 180, weight = 1100 * g;
const lift = weight / Math.cos(angle), inward = lift * Math.sin(angle);
rounded(lift, '1.2e+4'); rounded(inward, '5.0e+3');
rounded(Math.sqrt(inward * 900 / 1100), '64');
close(Math.hypot(inward, weight), lift);
assert(lift * Math.cos(angle + .1) < weight);
assert(lift * Math.sin(angle + .1) > inward);
// June 2024 station: momentum reconstructs mass; released ball's tangent is perpendicular to radius.
const speed = Math.sqrt(g * 150), mass = 2500 / speed;
rounded(mass, '65'); close(mass * speed, 2500);
close(mass * speed ** 2 / 150, mass * g);

for (const slug of ['', 'circular-motion/', 'simple-harmonic-motion/', 'gravitational-fields-and-satellites/', 'electric-fields/', 'capacitance/', 'capacitor-charge-and-discharge/', 'quick-reference/']) {
  const base = `/alevel/a2-physics/${slug}`;
  const html = fs.readFileSync(path.join('_site', base, 'index.html'), 'utf8');
  assert(!html.includes('<p>$$'), `Raw display math in ${base}`);
  for (const match of html.matchAll(/(?:href|src)="([^"<>]+)"/g)) {
    const href = match[1];
    if (!(href.startsWith('/') || href.startsWith('#')) || href.startsWith('//')) continue;
    const url = new URL(href, `https://local.test${base}`);
    let target = path.join('_site', decodeURIComponent(url.pathname));
    if (url.pathname.endsWith('/')) target = path.join(target, 'index.html');
    assert(fs.existsSync(target), `Missing target: ${href}`);
    if (url.hash) assert(fs.readFileSync(target, 'utf8').includes(`id="${decodeURIComponent(url.hash.slice(1))}"`), `Missing anchor: ${href}`);
  }
}
const source = fs.readFileSync('alevel/a2-physics/circular-motion.md', 'utf8');
const html = fs.readFileSync('_site/alevel/a2-physics/circular-motion/index.html', 'utf8');
assert(!/[\u3400-\u9fff]/u.test(source));
assert.equal((source.match(/### Question /g) || []).length, 6);
assert.equal((html.match(/<details\b/g) || []).length, 14);
assert.equal((html.match(/<img[^>]*data-lazy-ignore="true"/g) || []).length, 3, 'Small diagrams load without changing anchor layout');
assert(html.includes('A2 Physics</a>'), 'Physics course breadcrumb');
console.log('Physics circular motion passed: kinematics, force components, contact limits, OxfordAQA answers, English content and rendered links.');
