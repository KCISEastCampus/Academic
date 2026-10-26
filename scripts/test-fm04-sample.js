const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const relative = 'alevel/a2-further-mathematics/statistics/';
const lesson = 'moment-generating-functions.md';
const en = fs.readFileSync(path.join(root, relative, lesson), 'utf8');
const zh = fs.readFileSync(path.join(root, 'zh', relative, lesson), 'utf8');
const questions = source => source.match(/^\*\*Question:\*\* .+$/gm);
const displays = source => [...source.matchAll(/\$\$([\s\S]*?)\$\$/g)]
  .map(match => match[1].trim());
assert.deepEqual(questions(en), questions(zh), 'Bilingual question identities differ');
assert.deepEqual(displays(en), displays(zh), 'Bilingual displayed mathematics differs');
for (const source of [en, zh]) {
  assert.match(source, /reading_layout: true/);
  assert.equal((source.match(/class="lesson-check"/g) || []).length, 7);
  assert.equal((source.match(/class="worked-example"/g) || []).length, 1);
  assert.doesNotMatch(source, /<details[^>]*\bopen\b/);
  for (const id of ['meaning', 'moments', 'example', 'transform', 'sums',
    'task-a', 'task-b', 'task-c', 'retry-a', 'retry-b', 'retry-c', 'later-review']) {
    assert.ok(source.includes('{#' + id + '}'), 'Missing learning anchor: ' + id);
  }
}

const near = (actual, expected, message) =>
  assert.ok(Math.abs(actual - expected) < 1e-10, message + ': ' + actual);
const moment = (distribution, power) =>
  distribution.reduce((sum, [value, probability]) => sum + probability * value ** power, 0);
const variance = distribution => moment(distribution, 2) - moment(distribution, 1) ** 2;
const mgf = (distribution, t) =>
  distribution.reduce((sum, [value, probability]) => sum + probability * Math.exp(t * value), 0);
const transform = (distribution, a, b) =>
  distribution.map(([value, probability]) => [a + b * value, probability]);
const sumIndependent = (left, right) =>
  left.flatMap(([x, p]) => right.map(([y, q]) => [x + y, p * q]));

const x = [[0, 0.5], [2, 0.5]];
const w = [[-1, 0.25], [0, 0.5], [2, 0.25]];
const r = [[-2, 2 / 3], [1, 1 / 3]];
const b = [[0, 2 / 3], [1, 1 / 3]];
const a = [[1, 0.5], [3, 0.5]];
for (const [distribution, mean, second, spread] of [
  [x, 1, 2, 1], [w, 1 / 4, 5 / 4, 19 / 16],
  [transform(w, 3, -2), 5 / 2, 11, 19 / 4],
  [r, -1, 3, 2], [transform(r, 2, -1), 3, 11, 2],
]) {
  near(moment(distribution, 0), 1, 'Probability total');
  near(moment(distribution, 1), mean, 'Mean');
  near(moment(distribution, 2), second, 'Second moment');
  near(variance(distribution), spread, 'Variance');
}
for (const t of [-1, -0.2, 0, 0.3, 1]) {
  near(mgf(w, t), Math.exp(-t) / 4 + 0.5 + Math.exp(2 * t) / 4, 'Task A MGF');
  near(mgf(transform(w, 3, -2), t), Math.exp(3 * t) * mgf(w, -2 * t), 'Negative scaling');
  for (const d of [x, w, b]) {
    near(mgf(sumIndependent(d, d), t), mgf(d, t) ** 2, 'Independent convolution');
    near(mgf(transform(d, 0, 2), t), mgf(d, 2 * t), 'Repeated same variable');
  }
  near(mgf(sumIndependent(a, transform(a, 0, -1)), t),
    Math.exp(-2 * t) / 4 + 0.5 + Math.exp(2 * t) / 4, 'Mixed return difference');
}
near(variance(sumIndependent(w, w)), 19 / 8, 'Task C sum variance');
near(variance(transform(w, 0, 2)), 19 / 4, 'Task C scale variance');
near(variance(sumIndependent(b, b)), 4 / 9, 'Retry C sum variance');
near(variance(transform(b, 0, 2)), 8 / 9, 'Retry C scale variance');
near(variance(sumIndependent(a, transform(a, 0, -1))), 2, 'Mixed return variance');
near(variance(transform(a, -2, 1)), 1, 'Mixed return shift variance');
console.log('FM04 sample: bilingual question/display identity and independent finite-distribution checks passed.');
