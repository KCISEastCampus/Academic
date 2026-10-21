// Run after Jekyll build: independently check the decay model, published records and navigation.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const close = (a, b, tolerance = 1e-8) => assert(Math.abs(a - b) <= tolerance * Math.max(Math.abs(a), Math.abs(b), 1e-300), `${a} != ${b}`);
const source = fs.readFileSync('alevel/a2-physics/radioactive-decay.md', 'utf8');
const fit = points => {
  const mx = points.reduce((s, [x]) => s + x, 0) / points.length;
  const my = points.reduce((s, [, y]) => s + y, 0) / points.length;
  return points.reduce((s, [x, y]) => s + (x - mx) * (y - my), 0) / points.reduce((s, [x]) => s + (x - mx) ** 2, 0);
};

// Check the published expected-value table by applying the removal rule to survivors.
const modelFeedback = source.split('<summary>Model feedback</summary>')[1].split('</details>')[0];
const modelRows = [...modelFeedback.matchAll(/^\| (\d+) \| (\d+) \| (\d+) \| (\d+|—) \|$/gm)].map(m => m.slice(1));
assert.equal(modelRows.length, 4);
let previous = 1000;
for (const [step, time, remaining, removed] of modelRows) {
  assert.equal(Number(time), Number(step) * 20);
  close(Number(remaining), 1000 * .8 ** Number(step));
  if (Number(step)) close(Number(removed), previous * .2);
  previous = Number(remaining);
}
assert.equal(2000 * .2, 400);

// The worked pair and the independent pair must agree across graph representations.
const workedActivity = t => 800 * Math.exp(-Math.LN2 * t / 40);
close(workedActivity(40), 400);
close(workedActivity(80), 200);
close(-Math.LN2 / fit([0,40,80,120].map(t => [t, Math.log(workedActivity(t) / 800)])), 40);
const totalRate = t => 24 * 2 ** (-t / 50) + 4;
assert.deepEqual([0,50,100].map(t => totalRate(t)), [28,16,10]);
const graphSlope = fit([0,50,100,150].map(t => [t, Math.log(totalRate(t) - 4)]));
close(-Math.LN2 / graphSlope, 50);
assert(50 * Math.log2(24 / (28 / 2 - 4)) > 50, 'halving the total rate overestimates the half-life');
assert(source.indexOf('a sample has a half-life of 60 s') < source.indexOf('{#counting-and-background}'));

// Differentiate N(t) and integrate activity independently to check signs and nuclei lost.
for (const [N0, half] of [[1e12, 720], [1.5e13, 78 * 3600]]) {
  const lambda = Math.LN2 / half, N = t => N0 * Math.exp(-lambda * t);
  close(N(half), N0 / 2);
  close(N(3 * half), N0 / 8);
  const t = .7 * half, h = half * 1e-5;
  close(-(N(t + h) - N(t - h)) / (2 * h), lambda * N(t));
  const dt = 2 * half / 10000;
  let decays = 0;
  for (let i = 0; i < 10000; i++) decays += lambda * (N(i * dt) + N((i + 1) * dt)) * dt / 2;
  close(decays, N0 - N(2 * half));
  const survive = Math.exp(-lambda * half);
  close(N(2 * half) / N(half), survive); // surviving nuclei have the same future probability
}

assert.equal((1600 * 2 ** (-30 / 12)).toPrecision(3), '283');
const NA = 6.02e23, exampleN = 1.2e-13 / .0600 * NA;
assert.equal(exampleN.toPrecision(3), '1.20e+12');
assert.equal((Math.LN2 / (8 * 3600) * exampleN).toPrecision(3), '2.90e+7');
close((720 / 60 - 300 / 300) / .20, 55);
close((94 / 20 - 210 / 300) / .25, 16);
const thresholdTime = 6 / Math.LN2 * Math.log(4.8 / .70);
assert(thresholdTime > 12 && thresholdTime < 18);
assert.equal(thresholdTime.toPrecision(2), '17');
const galliumLambda = Math.LN2 / (78 * 3600);
assert.equal((37e6 / galliumLambda).toPrecision(2), '1.5e+13');
assert.equal((37 * 2 ** (-117 / 78)).toPrecision(2), '13');
const americiumLambda = Math.LN2 / (432 * 365 * 24 * 3600);
assert.equal(((39e3 - 32e3) / americiumLambda / NA * .241).toPrecision(2), '5.5e-11');
assert.equal((Math.LN2 / (.0040 * Math.LN10)).toPrecision(2), '75');

const task = source.split('{#data-decay-records}')[1].split('<details')[0];
const records = [...task.matchAll(/^\| (\d+)–(\d+) \| (\d+) \| (\d+) \|$/gm)].map(m => m.slice(1).map(Number));
assert.equal(records.length, 6);
const background = 120 / 600;
const rates = records.map(([start, end, midpoint, counts]) => {
  assert.equal(end - start, 10);
  assert.equal(midpoint, (start + end) / 2);
  return [midpoint, counts / (end - start) - background];
});
assert.deepEqual(rates.map(([, r]) => Number(r.toFixed(1))), [10, 7.1, 5, 3.5, 2.5, 1.8]);
const slope = fit(rates.map(([t, r]) => [t, Math.log(r)]));
const rawSlope = fit(records.map(([, , t, counts]) => [t, Math.log(counts / 10)]));
const half = -Math.LN2 / slope, uncorrectedHalf = -Math.LN2 / rawSlope;
assert.equal(half.toFixed(1), '60.3');
assert.equal(uncorrectedHalf.toFixed(1), '63.5');
assert(uncorrectedHalf > half);
close(46 / 20 - 150 / 300, 1.8);
assert(8 / 20 - 150 / 300 < 0);
assert(Number.isNaN(Math.log(8 / 20 - 150 / 300)));

// Equal recording windows preserve slope even though the rate is interval averaged.
const lambda = -slope, window = 10;
const averageRate = start => (Math.exp(-lambda * start) - Math.exp(-lambda * (start + window))) / (lambda * window);
close(Math.log(averageRate(60) / averageRate(0)) / 60, -lambda);

assert(!/[\u3400-\u9fff]/u.test(source), 'English lesson should not contain CJK prose');
for (const prefix of ['', '/zh']) {
  const html = fs.readFileSync(`_site${prefix}/alevel/a2-physics/radioactive-decay/index.html`, 'utf8');
  assert(!/<details\b[^>]*\bopen(?:\s|=|>)/.test(html), 'solutions start closed');
  assert(!html.includes('<p>$$'), 'display math must remain intact');
  for (const id of ['random-decay', 'model-constant-probability', 'exponential-model', 'half-life', 'mass-to-activity', 'counting-and-background', 'decay-graphs', 'graph-walkthrough', 'checkpoint-decay-graphs', 'data-decay-records', 'challenge-decay-records', 'retry-counting', 'practice', 'question-1', 'question-2', 'question-3', 'question-4', 'question-5', 'quick-reference']) {
    assert(html.includes(`id="${id}"`), id);
  }
  assert(html.includes('physics-decay-measurement.svg'));
  assert(html.includes('physics-decay-graphs.svg'));
  assert(html.includes('physics-decay-graph-practice.svg'));
  assert(html.includes(`href="${prefix}/alevel/a2-physics/capacitor-charge-and-discharge/"`));
  for (const slug of ['index', 'capacitor-charge-and-discharge', 'quick-reference']) {
    const file = slug === 'index' ? `_site${prefix}/alevel/a2-physics/index.html` : `_site${prefix}/alevel/a2-physics/${slug}/index.html`;
    assert(fs.readFileSync(file, 'utf8').includes(`href="${prefix}/alevel/a2-physics/radioactive-decay/"`), `${slug}: lesson entry`);
  }
}
console.log('PASS: radioactive decay; survivor model, paired graphs, signed rates, half-lives, mass/activity, raw-record fit, background bias, averaging and bilingual lesson entries');
