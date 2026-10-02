// Run after bundle exec jekyll build. Checks coordinates, positive-radius domains and areas.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const close = (a, b, tolerance = 1e-10) => assert(Math.abs(a - b) < tolerance, a + ' != ' + b);
const xy = (r, theta) => [r * Math.cos(theta), r * Math.sin(theta)];
const same = (a, b) => a.forEach((v, i) => close(v, b[i]));
const integrate = (f, a, b) => {
  const n = 6000, h = (b - a) / n;
  let total = f(a) + f(b);
  for (let i = 1; i < n; i++) total += (i % 2 ? 4 : 2) * f(a + i * h);
  return total * h / 3;
};
same(xy(4, Math.PI / 6), [2 * Math.sqrt(3), 2]);
same(xy(2, -2 * Math.PI / 3), [-1, -Math.sqrt(3)]);
same(xy(4, -Math.PI / 3), [2, -2 * Math.sqrt(3)]);
same(xy(3, 5 * Math.PI / 6), [-3 * Math.sqrt(3) / 2, 3 / 2]);
for (const theta of [-1, -0.4, 0, 0.7, 1.4]) {
  const [x, y] = xy(4 * Math.cos(theta), theta);
  close((x - 2) ** 2 + y ** 2, 4);
}
for (const theta of [-Math.PI / 6 + .1, 0, .8, 5 * Math.PI / 6 - .1]) {
  const r = 2 / Math.cos(Math.PI / 3 - theta);
  assert(r > 0);
  const [x, y] = xy(r, theta);
  close(x + Math.sqrt(3) * y, 4);
}
const rose = t => 2 * Math.cos(3 * t);
for (const t of [-2 * Math.PI / 3, 0, 2 * Math.PI / 3]) close(rose(t), 2);
for (const t of [-5 * Math.PI / 6, -Math.PI / 2, -Math.PI / 6, Math.PI / 6, Math.PI / 2, 5 * Math.PI / 6])
  close(rose(t), 0);
for (const t of [-Math.PI, -Math.PI / 3, Math.PI / 3, Math.PI]) assert(rose(t) < 0);
close(1 + 2 * Math.cos(2 * Math.PI / 3), 0);
assert(1 + 2 * Math.cos(Math.PI) < 0);
same(xy(2, Math.PI / 3), [1, Math.sqrt(3)]);
same(xy(2, 5 * Math.PI / 3), [1, -Math.sqrt(3)]);
close(4 * (1 - Math.cos(Math.PI / 3)), 2);
close(integrate(t => .5 * rose(t) ** 2, -Math.PI / 6, Math.PI / 6), Math.PI / 3);
close(integrate(t => .5 * (2 * t) ** 2, Math.PI / 2, Math.PI), 7 * Math.PI ** 3 / 12);
const cardioid = t => 1 + Math.cos(t), circle = t => Math.sqrt(3) * Math.sin(t);
close(cardioid(Math.PI / 3), 1.5); close(circle(Math.PI / 3), 1.5);
close(cardioid(Math.PI), 0); close(circle(Math.PI), 0);
assert(circle(.2) < cardioid(.2) && cardioid(2) < circle(2));
close(integrate(t => .5 * circle(t) ** 2, 0, Math.PI / 3), Math.PI / 4 - 3 * Math.sqrt(3) / 16);
close(integrate(t => .5 * cardioid(t) ** 2, Math.PI / 3, Math.PI), Math.PI / 2 - 9 * Math.sqrt(3) / 16);
const commonArea = 3 * (Math.PI - Math.sqrt(3)) / 4;
close(integrate(t => .5 * Math.min(cardioid(t), circle(t)) ** 2, 0, Math.PI), commonArea);
// Independent Cartesian polygon area also checks the shaded-region geometry.
let polygonArea = 0, previous = [0, 0];
for (let i = 0; i <= 20000; i++) {
  const t = i * Math.PI / 20000, point = xy(Math.min(cardioid(t), circle(t)), t);
  polygonArea += previous[0] * point[1] - point[0] * previous[1];
  previous = point;
}
close(polygonArea / 2, commonArea, 1e-7);
for (const t of [-2.5, -2, .2, .8, 1.4]) {
  const r = 2 / Math.sqrt(Math.sin(2 * t)), [x, y] = xy(r, t);
  close(x * y, 2);
}
assert(Math.sin(2 * 2) < 0 && Math.sin(2 * -.3) < 0);
assert(2 * Math.sin(2 * Math.PI / 4) > 0 && 2 * Math.sin(2 * 5 * Math.PI / 4) > 0);
assert(2 * Math.sin(2 * 3 * Math.PI / 4) < 0 && 2 * Math.sin(2 * 7 * Math.PI / 4) < 0);
close(integrate(t => .5 * (2 * Math.sin(2 * t)) ** 2, 0, Math.PI / 2), Math.PI / 2);
close(integrate(t => .5 * (4 * Math.cos(t)) ** 2, 0, Math.PI / 4), Math.PI + 2);
same(xy(Math.sqrt(2), Math.PI / 4), [1, 1]);
close(integrate(t => .5 * Math.min(2 * Math.sin(t), 2 * Math.cos(t)) ** 2, 0, Math.PI / 2),
  Math.PI / 2 - 1);
for (const t of [-2.4, -.5, 0, .6, 2.9]) {
  const r = 4 / (4 - 3 * Math.cos(t)), [x, y] = xy(r, t);
  close(y ** 2, 1 + 1.5 * x - 7 * x ** 2 / 16);
  assert(x >= -4 / 7 - 1e-10 && x <= 4 && 1 + .75 * x > 0);
}
for (const t of [1, 1.8, 2.7, 3.4]) {
  const r = 12 * Math.sin(t) - 16 * Math.cos(t);
  assert(r > 0);
  const [x, y] = xy(r, t);
  close((x + 8) ** 2 + (y - 6) ** 2, 100);
}
close(integrate(t => .5 * (2 + Math.cos(t)) ** 2 * Math.sin(t), 0, Math.PI), 13 / 3);

const source = fs.readFileSync('alevel/a2-further-mathematics/polar-coordinates.md', 'utf8');
const html = fs.readFileSync('_site/alevel/a2-further-mathematics/polar-coordinates/index.html', 'utf8');
assert(!/[\u3400-\u9fff]/u.test(source), 'English content');
assert(!source.includes('with Mechanics'), 'Shared textbook name');
assert.equal((source.match(/### Example /g) || []).length, 9);
assert.equal((source.match(/### Question /g) || []).length, 8);
assert.equal((html.match(/<details\b/g) || []).length, 16);
assert.equal((html.match(/<table\b/g) || []).length, 3, 'Absolute-value pipes must not create tables');
for (const row of html.match(/<tr\b[\s\S]*?<\/tr>/g) || []) assert.equal((row.match(/<(?:td|th)\b/g) || []).length, 3);
assert(!html.includes('<p>$$'), 'Display math must reach MathJax intact');
for (const id of ['method', 'coordinates', 'equations', 'sketching', 'intersections', 'areas', 'practice', 'quick-reference'])
  assert(html.includes('id="' + id + '"'), id);
for (const name of ['curves', 'overlap', 'practice-loop'])
  assert(fs.statSync('assets/img/further-polar-' + name + '.svg').size > 1000);
console.log('Polar passed: coordinate conversions, domains, intersections, sector areas, overlap geometry and AQA results.');
