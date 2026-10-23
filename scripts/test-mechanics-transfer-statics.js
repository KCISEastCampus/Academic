// Source and model checks only; final rendered-page checks belong to the main executor.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = path.join(__dirname, '..');
const close = (a, b) => assert(Math.abs(a - b) < 1e-8, `${a} != ${b}`);
const vector = (a, b) => a.forEach((value, i) => close(value, b[i]));
const moment = (forces, [px, py]) => forces.reduce((sum, [x, y, fx, fy]) => sum + (x - px) * fy - (y - py) * fx, 0);
function balance(forces, pivots) {
  close(forces.reduce((s, f) => s + f[2], 0), 0);
  close(forces.reduce((s, f) => s + f[3], 0), 0);
  pivots.forEach(p => close(moment(forces, p), 0));
}

// Check every contact over the pre-failure intervals, using original world-coordinate forces.
for (const P of [0, 20, 60, 70, 80]) {
  const N = 200, F = P, x = .6 + 1.5 * P / N;
  balance([[.6, 1, 0, -200], [0, 1.5, P, 0], [x, 0, -F, N]], [[0, 0], [1.2, 0], [.6, 1]]);
  assert.equal(F <= .3 * N, P <= 60);
  assert.equal(x <= 1.2, P <= 80);
}
const tip = 120 / (Math.sqrt(3) + .6);
const slide = 120 / (Math.sqrt(3) / 2 + .3);
assert(tip < slide);
for (const T of [0, tip / 2, tip]) {
  const fx = T * Math.sqrt(3) / 2, fy = T / 2, N = 200 - fy;
  const x = (120 + 2 * fx) / N;
  balance([[.6, 1, 0, -200], [0, 2, fx, fy], [x, 0, -fx, N]], [[0, 0], [1.2, 0]]);
  assert(N > 0 && fx < .6 * N && x >= .6 && x <= 1.2 + 1e-8);
}
assert.equal(tip.toPrecision(3), '51.5');
assert.equal(slide.toPrecision(3), '103');

// Mass moments and suspension checked after rotation, rather than only the angle ratio.
const rho = 5;
const parts = [[4 * rho, 1, 1], [4, 3, 1], [4, 4, 2]];
const G = [12 / 7, 8 / 7];
for (let axis = 0; axis < 2; axis++) close(parts.reduce((sum, p) => sum + p[0] * (p[axis + 1] - G[axis]), 0), 0);
const theta = Math.atan(2), dx = G[0], down = 2 - G[1];
close(dx * Math.cos(theta) - down * Math.sin(theta), 0);
assert(dx * Math.sin(theta) + down * Math.cos(theta) > 0);
const leftT = 156.8, rightT = 78.4, g = 9.8;
close(leftT / rightT, 2);
balance([[0, 2, 0, leftT], [4, 2, 0, rightT], [1, 1, 0, -20 * g], [3, 1, 0, -4 * g]], [[0, 2], [4, 2], [4 / 3, 1]]);
close(20 * (1 - 4 / 3) + 4 * (3 - 4 / 3), 0);

// Inclined-plane forces in fixed horizontal/vertical coordinates.
const c = Math.sqrt(3) / 2, s = .5, m = 2, N = m * g * c, kinetic = N / (2 * Math.sqrt(3));
const a = -4.35;
vector([(6 - kinetic) * c - N * s, (6 - kinetic) * s + N * c - m * g], [m * a * c, m * a * s]);
const stop = 20 / 29, distance = 30 / 29;
close(3 + a * stop, 0);
close(3 * stop + .5 * a * stop ** 2, distance);
const staticF = 3.8;
assert(staticF < kinetic && N > 0);
vector([(6 + staticF) * c - N * s, (6 + staticF) * s + N * c - m * g], [0, 0]);

// Integrate the force numerically from the given one-second conditions as an independent check.
const accel = t => [2 * t, -2, 6 * t];
const velocity = t => [t * t - 1, 3 - 2 * t, 3 * t * t - 1];
const position = t => [t ** 3 / 3 - t + 8 / 3, 3 * t - t * t + 1, t ** 3 - t + 1];
function simpson(f, lo, hi) {
  const n = 100, h = (hi - lo) / n;
  return f(lo).map((_, axis) => {
    let sum = f(lo)[axis] + f(hi)[axis];
    for (let i = 1; i < n; i++) sum += (i % 2 ? 4 : 2) * f(lo + i * h)[axis];
    return h * sum / 3;
  });
}
vector(velocity(1), [0, 1, 2]);
vector(position(1), [2, 3, 1]);
for (const t of [0, .5, 1, 2, 3]) {
  vector(simpson(accel, 1, t).map((delta, i) => velocity(1)[i] + delta), velocity(t));
  vector(simpson(velocity, 1, t).map((delta, i) => position(1)[i] + delta), position(t));
}
vector(velocity(2), [3, -1, 11]);
vector(position(2), [10 / 3, 3, 7]);
close(Math.hypot(...position(2).map((value, i) => value - position(1)[i])), 2 * Math.sqrt(85) / 3);
assert.equal((2 * Math.sqrt(85) / 3).toPrecision(3), '6.15');

const headings = source => [...source.matchAll(/^#{2,3} (.+)$/gm)].map(([, label]) => {
  const explicit = label.match(/\{#([^}]+)\}$/);
  return explicit ? explicit[1] : label.toLowerCase().replace(/[^a-z0-9 _-]/g, '').replace(/ /g, '-');
});
const displays = source => [...source.matchAll(/\$\$([\s\S]*?)\$\$/g)].map(([, formula]) => formula);
const prompts = source => [...source.matchAll(/^### (?:Example \d+|Q\d+)[^\n]*\n\n([\s\S]*?)(?=^###? |$(?![\s\S]))/gm)]
  .map(([, body]) => body.startsWith('**Question:**') ? body.split('\n\n')[0] : body.split('<details')[0].trim());
for (const slug of ['moments-and-rigid-objects', 'centres-of-mass', 'newtons-laws-of-motion']) {
  const route = `alevel/a2-mathematics/mechanics/${slug}/`;
  const en = fs.readFileSync(path.join(root, route.slice(0, -1) + '.md'), 'utf8').replace(/\r\n/g, '\n');
  const zh = fs.readFileSync(path.join(root, 'zh', route.slice(0, -1) + '.md'), 'utf8').replace(/\r\n/g, '\n');
  assert(zh.includes('lang: zh-CN') && zh.includes(`translation_of: /${route}`) && zh.includes(`permalink: /zh/${route}`));
  assert.deepEqual(headings(en), headings(zh), `${slug}: heading anchors changed`);
  assert.equal(new Set(headings(zh)).size, headings(zh).length);
  assert([...zh.matchAll(/^#{2,3} (.+)$/gm)].every(([, heading]) => /\{#[^}]+\}$/.test(heading)));
  assert.deepEqual(displays(en), displays(zh), `${slug}: display formula mismatch`);
  assert.equal(prompts(en).length, 16);
  for (const prompt of prompts(en)) assert(zh.includes(prompt), `${slug}: original English prompt missing`);
  for (const section of en.matchAll(/^##(?:#)? (?:Independent Task:|Retry:)[^\n]*\n\n([\s\S]*?)<details/gm)) {
    assert(zh.includes(section[1].trim()), `${slug}: transfer prompt mismatch`);
  }
  if (slug === 'centres-of-mass') assert(zh.includes('For a separate system, two particles of masses $2m$ and $3m$'));
  if (slug === 'newtons-laws-of-motion') {
    for (const word of ['the trigonometric argument', 'trigonometric arguments']) {
      const continuation = en.split('\n\n').find(p => p.startsWith('Find the resultant force') && p.includes(word));
      assert(continuation && zh.includes(continuation));
    }
    assert(en.includes('/alevel/a2-mathematics/mechanics/momentum-bridge/'));
    assert(zh.includes('/zh/alevel/a2-mathematics/mechanics/momentum-bridge/'));
  }
  const imageUrls = source => [...source.matchAll(/!\[[^\]]+\]\(([^)]+)\)/g)].map(([, url]) => url);
  assert.deepEqual(imageUrls(en), imageUrls(zh));
  for (const url of imageUrls(zh)) assert(fs.existsSync(path.join(root, url)), `Missing image ${url}`);
  for (const [label, count] of [['Hint', 8], ['Solution and check', 8], ['Reasoning hint', 1], ['Feedback and check', 1], ['Retry hint', 1], ['Retry check', 1]]) {
    assert.equal(en.split(`<summary>${label}</summary>`).length - 1, count);
  }
  assert.equal(zh.split('<summary>提示</summary>').length - 1, 8);
  assert.equal(zh.split('<summary>解答与核对</summary>').length - 1, 8);
  for (const source of [en, zh]) {
    assert.equal((source.match(/<details markdown="1">/g) || []).length, 20);
    assert.equal((source.match(/<\/details>/g) || []).length, 20);
    assert(!/<details[^>]*\bopen(?:[\s=>])/i.test(source));
    for (const formula of displays(source)) assert(!formula.includes('|'), 'ASCII pipe inside display TeX');
    assert(source.includes('specification v5.2') && source.includes('January 2025') && source.includes('Version 1.0 Final'));
    for (const kind of ['question-paper', 'mark-scheme']) {
      const file = `/assets/pdf/fx-cg50/references/oxfordaqa-ma05-2025-january-${kind}.pdf`;
      assert(source.includes(file) && fs.existsSync(path.join(root, file)));
    }
  }
}
console.log('MA05 statics transfer checks passed: contact limits, mass moments, stable suspension, force signs, integration conditions, and three complete bilingual source pairs.');
