// Run with node scripts/test-further-vectors.js. No build or external dependencies required.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = path.join(__dirname, '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8').replace(/\r\n/g, '\n');
const dot = (a, b) => a.reduce((sum, x, i) => sum + x * b[i], 0);
const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const add = (a, b) => a.map((x, i) => x + b[i]);
const sub = (a, b) => a.map((x, i) => x - b[i]);
const scale = (k, a) => a.map(x => k * x);
const zero = a => assert(a.every(x => x === 0), `Expected zero vector, got ${a}`);
const near = (a, b) => assert(Math.abs(a - b) < 1e-10, `${a} != ${b}`);

// Keep rational feet/images as integer numerators to verify plane membership exactly.
const reflection = (p, n, d, imageNumerator, imageDenominator) => {
  const denominator = dot(n, n), step = d - dot(p, n);
  assert(denominator > 0, 'A plane needs a nonzero normal');
  const footNumerator = add(scale(denominator, p), scale(step, n));
  const qNumerator = sub(scale(2, footNumerator), scale(denominator, p));
  assert.equal(dot(footNumerator, n), denominator * d, 'Foot lies in the plane');
  zero(cross(sub(qNumerator, scale(denominator, p)), n));
  assert(dot(qNumerator, n) - denominator * d === -denominator * (dot(p, n) - d));
  assert.deepEqual(scale(imageDenominator, qNumerator), scale(denominator, imageNumerator));
  assert.deepEqual(add(scale(denominator, p), qNumerator), scale(2, footNumerator));
  return step * step / denominator;
};

// June 2024 Q2: vector output, perpendicular checks, distinct geometric conditions.
const a = [1, 2, 3], b = [3, 3, 5], normal = cross(a, b);
assert.deepEqual(normal, [1, 4, -3]);
assert.equal(dot(normal, a), 0);
assert.equal(dot(normal, b), 0);
assert.equal(dot(normal, [-3, 15 / 2, 9]), 0);
zero(cross([-3, -12, 9], normal));
assert.notEqual(dot(normal, [-3, -12, 9]), 0, 'The parallel case is not the coplanar case');
assert.deepEqual(cross(b, a), scale(-1, normal));
zero(cross(a, scale(2, a)));
assert.notEqual(dot(normal, normal), 0);
assert.notDeepEqual(cross([1, 0, 0], cross([1, 0, 0], [0, 1, 0])),
  cross(cross([1, 0, 0], [1, 0, 0]), [0, 1, 0]), 'Cross products are not associative');

// January 2025 Q1: edges from the actual common vertex, not position vectors.
const origin = [3, 4, 2];
const signedVolume = k => dot(cross(sub([k + 4, 6, 3], origin), sub([6, 7, 3], origin)),
  sub([k + 5, 3, 5], origin));
for (const k of [-3, 0, 1, 3]) assert.equal(signedVolume(k), 9 * k - 13);
assert.equal(signedVolume(1), -4);
// k=17/9: scale the first and third edge by 9 so all arithmetic stays integral.
assert.equal(dot(cross([26, 18, 9], [3, 3, 1]), [35, -9, 27]), 4 * 81);
assert.notEqual(dot(cross([5, 6, 3], [6, 7, 3]), [6, 3, 5]), signedVolume(1));

// Original area/coplanarity tasks, including translation and degenerate cases.
for (const [points, expectedNormal, squaredNormal] of [
  [[[1, 0, 1], [2, 2, 1], [1, 1, 3], [2, 3, 3]], [4, -2, 1], 21],
  [[[2, 1, 0], [3, 1, 1], [2, 3, 1], [4, 3, 3]], [-2, -1, 2], 9]
]) {
  const [p, q, r, s] = points, u = sub(q, p), v = sub(r, p), w = sub(s, p), n = cross(u, v);
  assert.deepEqual(n, expectedNormal);
  assert.equal(dot(n, n), squaredNormal); // Triangle area is sqrt(squaredNormal)/2.
  assert.equal(dot(n, w), 0);
  const d = dot(n, p);
  for (const point of points) assert.equal(dot(n, point), d, 'Independent plane substitution');
  assert.notEqual(dot(n, sub(add(s, [0, 0, 1]), p)), 0, 'Changing the fourth point can destroy coplanarity');
  const translated = points.map(point => add(point, [4, -3, 8]));
  assert.deepEqual(sub(translated[1], translated[0]), u, 'Common translation leaves edges unchanged');
  const triangleAreaSquared = dot(n, n) / 4;
  assert.equal(triangleAreaSquared * 4, squaredNormal);
}
assert.equal(dot(cross([1, 2, 0], [0, 1, 2]), [1, 2, 0]), 0);
assert.deepEqual(cross([1, 1, 0], [2, 4, 1]), [1, -1, 2]);
for (const s of [-5, 0, 2, 4]) assert.equal(cross([1, 1, 0], [2, s, 1])[0], 1);
for (const k of [-1, 1 / 2]) {
  const u = [2, 1, 0], v = [1, 0, 2], w = [0, k, 1], n = cross(u, v);
  assert.deepEqual(n, [2, -4, -1]);
  assert.equal(Math.abs(dot(n, w)), 3);
  assert.equal(dot(n, add(w, u)), dot(n, w), 'Adding a base edge leaves signed height unchanged');
  assert.equal(Math.abs(dot(n, scale(2, w))), 6);
}
zero(cross([1, 1, 0], [2, 2, 0])); // No nonzero normal from dependent plane directions.
assert.equal(dot([1, 0, 0], cross([2, 0, 0], [0, 1, 1])), 0); // Degenerate coplanarity.

// Line forms, zero components, direction cosines and both plane representations.
const cosines = [2 / 3, -1 / 3, 2 / 3];
near(dot(cosines, cosines), 1);
assert(cosines[1] < 0, 'Second positive-axis angle is obtuse');
for (const t of [-3, 0, 2]) {
  const p = add([1, 2, 3], scale(t, [0, 2, -1]));
  assert.equal(p[0], 1);
  assert((p[1] - 2) / 2 === (p[2] - 3) / -1);
  zero(cross(sub(p, [1, 2, 3]), [0, 2, -1]));
  const twoZeros = add([1, 2, 3], scale(t, [0, 0, 1]));
  assert.deepEqual(twoZeros.slice(0, 2), [1, 2]);
  assert.equal(dot(add([1, 2], scale(t, [3, 4])), [4, -3]), -2);
}
const planeNormal = cross([1, 1, 0], [0, 1, 1]);
assert.deepEqual(planeNormal, [1, -1, 1]);
for (const [lambda, mu] of [[0, 0], [2, -3], [-1, 4]]) {
  const p = add([1, 0, 2], add(scale(lambda, [1, 1, 0]), scale(mu, [0, 1, 1])));
  assert.equal(dot(p, planeNormal), 3);
}
assert.equal(dot([2, 1, 1], [1, 1, 1]), 4); // One line-plane intersection.
assert.equal(dot([2, 0, -1], [1, 0, 2]), 0); // Parallel direction.
assert.equal(dot([0, 1, 2], [1, 0, 2]), 4); // Contained if constant=4, disjoint if constant=5.
assert.notEqual(4, 5);

// June 2024 Q10: acute line-plane angle, two independent distance methods, required line form.
const direction = [2, -1, 4], n1 = [1, 1, 3], n2 = [1, -3, 2];
const angle = Math.asin(Math.abs(dot(direction, n1)) / Math.sqrt(dot(direction, direction) * dot(n1, n1))) * 180 / Math.PI;
assert.equal(Number(angle.toFixed(1)), 58.8);
const base = [7, 1, 3], point = [4, 1, 15], displacement = sub(point, base);
const areaVector = cross(displacement, direction);
assert.deepEqual(areaVector, [12, 36, 3]);
assert.equal(dot(areaVector, areaVector) / dot(direction, direction), 69);
const t = dot(displacement, direction) / dot(direction, direction), foot = add(base, scale(t, direction));
assert.equal(t, 2);
assert.deepEqual(foot, [11, -1, 11]);
assert.equal(dot(sub(point, foot), direction), 0);
assert.equal(dot(sub(point, foot), sub(point, foot)), 69);
const intersectionDirection = cross(n1, n2), commonPoint = [-1, 0, 1];
assert.deepEqual(intersectionDirection, [11, 1, -4]);
assert.equal(dot(intersectionDirection, n1), 0);
assert.equal(dot(intersectionDirection, n2), 0);
for (const u of [-2, 0, 3]) {
  const p = add(commonPoint, scale(u, intersectionDirection));
  assert.equal(dot(p, n1), 2);
  assert.equal(dot(p, n2), 1);
  zero(cross(sub(p, commonPoint), intersectionDirection));
}

// January 2025 Q11: all three original coordinates, not just the reduced pair.
const l1Point = add([6, 7, 5], scale(-2, [1 / 2, 2, -1]));
const l2Point = add([8, 1, 6], scale(1, [-3, 2, 1]));
assert.deepEqual(l1Point, [5, 3, 7]);
assert.deepEqual(l1Point, l2Point);
const examNormal = cross([1, 4, -2], [-3, 2, 1]); // First direction scaled by 2.
assert.deepEqual(examNormal, [8, 5, 14]);
for (const p of [[6, 7, 5], [8, 1, 6], l1Point]) assert.equal(dot(p, examNormal), 153);
assert.equal(dot([1, 4, -2], examNormal), 0);
assert.equal(dot([-3, 2, 1], examNormal), 0);
assert.equal(reflection([5, -3, 1], examNormal, 153, [57, 5, 61], 5), 228 / 5);
near((2 * Math.sqrt(285) / 5) ** 2, 228 / 5);

// Original projection error and independent mixed practice, including angle limits.
assert.notEqual(dot([1, 0, 3], [1, -1, 1]), 0, 'The proposed foot is not in the plane');
near(reflection([1, 2, 3], [1, -1, 1], 0, [-1, 10, 5], 3), 4 / 3);
near(reflection([1, 2, 3], [1, -1, 1], 4, [7, 2, 13], 3), 4 / 3);
assert.equal(reflection([1, 2, 3], [1, -1, 1], 2, [1, 2, 3], 1), 0, 'A point on the plane is fixed');
assert.equal(dot([6, 1, -1], [1, -1, 1]), 4);
assert.equal(Number((Math.asin(1 / Math.sqrt(15)) * 180 / Math.PI).toFixed(1)), 15.0);
assert.equal(dot([1, -1, 0], [1, 1, 3]), 0, 'Parallel line gives zero line-plane angle');
near(dot(n1, n1) / Math.sqrt(dot(n1, n1) ** 2), 1); // Normal line gives sine=1.
const pn1 = [1, 0, 1], pn2 = [0, 1, 1];
near(Math.acos(dot(pn1, pn2) / Math.sqrt(dot(pn1, pn1) * dot(pn2, pn2))) * 180 / Math.PI, 60);
assert.deepEqual(cross(pn1, pn2), [-1, -1, 1]);
for (const u of [-2, 0, 5]) {
  const p = add([2, 3, 0], scale(u, [-1, -1, 1]));
  assert.equal(dot(p, pn1), 2);
  assert.equal(dot(p, pn2), 3);
}
assert.equal(dot([2, 0, 0], [2, 0, 2]), 4);
assert.notEqual(4, 5, 'Proportional normals but inconsistent constants give distinct parallel planes');
assert.notDeepEqual(add([0, 0, 0], scale(1, [1, 1, 1])), add([1, 0, 0], scale(1, [0, 1, 2])));
assert.equal(dot(sub([3, 2, 0], [1, 1, 1]), [0, 1, 1]), 0);
assert.equal(dot(sub([3, 2, 0], [1, 1, 1]), sub([3, 2, 0], [1, 1, 1])), 6);
assert.equal(reflection([3, 2, 0], [1, 0, 0], 1, [-1, 2, 0], 1), 4);

// Source checks bind both lesson pairs to the mathematical and English question evidence.
for (const slug of ['vector-products-and-coplanarity', 'lines-and-planes']) {
  const en = read(`alevel/a2-further-mathematics/${slug}.md`), zh = read(`zh/alevel/a2-further-mathematics/${slug}.md`);
  const math = s => s.match(/\$\$[\s\S]*?\$\$|\$[^$\r\n]+\$/g) || [];
  assert.deepEqual(math(zh), math(en), `${slug}: complete formula occurrence sequence`);
  assert.deepEqual(en.split('\n').filter(s => s.startsWith('>')), zh.split('\n').filter(s => s.startsWith('>')), `${slug}: complete English prompts`);
  for (const line of en.match(/^\*\*Question:\*\*.*$/gm) || []) assert(zh.includes(line));
  for (const date of ['June 2024', 'January 2025']) assert(en.includes(date) && zh.includes(date));
  assert(/MS pp?\./.test(en) && zh.includes('MS 第'));
  assert(!/<details\b[^>]*\bopen(?:\s|>|=)/.test(en + zh), 'Hints/solutions start closed');
}
console.log('Further vectors passed: products, areas, volume branches, coplanarity, line/plane conditions, all-coordinate intersections, angles, exact distances/reflections and both bilingual source pairs. No build required.');
