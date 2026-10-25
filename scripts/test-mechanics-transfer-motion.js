// Source-only checks: no Jekyll build or generated HTML is required.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = path.join(__dirname, '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8').replace(/\r\n?/g, '\n');
const close = (a, b) => assert(Math.abs(a - b) < 1e-9, `${a} != ${b}`);
const slug = text => text.match(/\{#([^}]+)\}$/)?.[1] || text.toLowerCase().replace(/[^a-z0-9 _-]/g, '').replace(/ /g, '-');
const maths = text => [...text.matchAll(/\${1,2}[^$]+\${1,2}/g)].map(match => match[0]);
const questions = text => [...text.matchAll(/\*\*Question:\*\*[^\n]*(?:\n(?!\n)[^\n]*)*/g)].map(match => match[0]);
const practice = text => [...text.matchAll(/^### Q\d+[^\n]*\n\n([\s\S]*?)(?=\n\n<details)/gm)].map(match => match[1]);

// Keep all original tasks, mathematical expressions and anchors paired.
for (const [name, examples, exercises, diagrams] of [
  ['projectiles', 8, 8, 3],
  ['work-and-energy', 8, 8, 3],
  ['uniform-circular-motion', 9, 11, 5],
]) {
  const route = `/alevel/a2-mathematics/mechanics/${name}/`;
  const en = read(`alevel/a2-mathematics/mechanics/${name}.md`);
  const zh = read(`zh/alevel/a2-mathematics/mechanics/${name}.md`);
  assert(zh.includes('lang: zh-CN\n'));
  assert(zh.includes(`translation_of: ${route}\n`));
  assert(zh.includes(`permalink: /zh${route}\n`));
  assert.deepEqual(maths(zh), maths(en), `${name}: exact formula order`);
  assert.deepEqual(questions(zh), questions(en), `${name}: English example/diagnostic prompts`);
  assert.deepEqual(practice(zh), practice(en), `${name}: English practice prompts`);
  assert(practice(en).length >= exercises, `${name}: retain original practice`);
  assert((en.match(/^### Example \d+/gm) || []).length >= examples, `${name}: retain original examples`);

  const expected = [...en.matchAll(/^#{2,3} (.+)$/gm)].map(match => slug(match[1]));
  const actual = [...zh.matchAll(/^#{2,3} .+ \{#([^}]+)\}$/gm)].map(match => match[1]);
  assert.deepEqual(actual, expected, `${name}: explicit Chinese anchors`);
  assert.equal(new Set(actual).size, actual.length);
  const anchors = [...actual, ...[...zh.matchAll(/\bid="([^"]+)"/g)].map(match => match[1])];
  assert.equal(new Set(anchors).size, anchors.length, `${name}: unique heading and compatibility anchors`);
  for (const [, id] of zh.matchAll(/\]\(#([^)]+)\)/g)) assert(anchors.includes(id), `${name}: #${id}`);

  const image = /!\[([^\]]+)\]\((\/assets\/[^)]+)\)/g;
  const enImages = [...en.matchAll(image)].map(match => match[2]);
  const zhImages = [...zh.matchAll(image)].map(match => match[2]);
  assert.deepEqual(zhImages, enImages, `${name}: diagram URL order`);
  assert(enImages.length >= diagrams, `${name}: retain original teaching figures`);
  for (const url of enImages) {
    const svg = read(url.slice(1));
    assert(svg.includes('<title') && svg.includes('<desc'), `${url}: accessible SVG`);
  }
  for (const [, label, url] of zh.matchAll(/\[([^\]]+)\]\((\/alevel\/a2-mathematics\/mechanics\/[^)]*)\)/g)) {
    assert.equal(url.split('#')[0], '/alevel/a2-mathematics/mechanics/quick-reference/');
    assert(label.includes('英文'), 'A remaining English reference link must identify its language');
  }
  for (const source of [en, zh]) {
    // Help labels may change; the rendered bilingual test checks each disclosure survives.
    const disclosures = (source.match(/<details markdown="1">/g) || []).length;
    assert(disclosures >= 2 * exercises + 4);
    assert.equal((source.match(/<\/details>/g) || []).length, disclosures);
    assert(!/<details[^>]*\bopen\b/.test(source));
    assert(source.includes('specification.pdf'));
    assert(source.includes('v5.2'));
    assert(source.includes('oxfordaqa-ma05-2025-january-question-paper.pdf'));
    assert(source.includes('oxfordaqa-ma05-2025-january-mark-scheme.pdf'));
    assert(source.includes('Version 1.0 Final'));
  }
}

// Projectile diagnostics: kinematics checked against energy, including domains.
const g = 9.8;
const height = t => 4.9 + 14.7 * t - g * t * t / 2;
const landing = (14.7 + Math.sqrt(14.7 ** 2 + 2 * g * 4.9)) / g;
for (const [t, x, vy] of [[1, 8, 4.9], [2, 16, -4.9]]) {
  close(height(t), 14.7);
  close(8 * t, x);
  close(14.7 - g * t, vy);
  close(8 ** 2 + vy ** 2, 8 ** 2 + 14.7 ** 2 - 2 * g * 9.8);
  assert(t > 0 && t < landing);
}
close(height(landing), 0);
close(14.7 - g * 1.5, 0);
close(height(1.5), 15.925);
assert.equal(Math.hypot(8, 4.9).toPrecision(3), '9.38');
assert.equal((Math.atan2(4.9, 8) * 180 / Math.PI).toFixed(1), '31.5');
const flight = Math.sqrt(2 * 19.6 / g), ux = 18 / flight;
close(flight, 2);
close(ux, 9);
close(-g * flight, -19.6);
close(ux ** 2 + (g * flight) ** 2, ux ** 2 + 2 * g * 19.6);
assert.equal(Math.hypot(ux, g * flight).toPrecision(3), '21.6');
assert.equal((Math.atan2(g * flight, ux) * 180 / Math.PI).toFixed(1), '65.3');

// Energy diagnostics: independent Newton/kinematics and stage feasibility.
const acceleration = -(2 * g / 4 + 1) / 2;
for (const s of [0, 5, 360 / 59, 8]) {
  const fromForces = 6 ** 2 + 2 * acceleration * s;
  const fromEnergy = 36 - 2 * g * s / 4 - s;
  close(fromForces, fromEnergy);
}
close(36 + 2 * acceleration * 5, 6.5);
close(36 + 2 * acceleration * (360 / 59), 0);
assert(36 + 2 * acceleration * 8 < 0);
assert.equal(Math.sqrt(6.5).toPrecision(3), '2.55');
assert.equal((360 / 59).toPrecision(3), '6.10');
const downhill = (2 * g / 4 - 1) / 2;
close(2 * downhill * 4, 2 * g - 4);
close(2 * downhill * 4, 15.6);
const horizontalAcceleration = 0;
close(15.6 + 2 * horizontalAcceleration * 3, 15.6);
assert.equal(Math.sqrt(15.6).toPrecision(3), '3.95');

// Circular diagnostics: actual force limits and an inverse contact problem.
const blocks = [[0.2, 0.25, 0.2], [0.8, 0.75, 0.3]];
assert(blocks[0][0] * blocks[0][1] * 4 < blocks[0][2] * blocks[0][0] * g);
assert(blocks[1][0] * blocks[1][1] * 4 > blocks[1][2] * blocks[1][0] * g);
const omega2 = Math.min(...blocks.map(([, r, mu]) => mu * g / r));
close(omega2, 3.92);
close(blocks[0][0] * blocks[0][1] * omega2, 0.196);
close(blocks[1][0] * blocks[1][1] * omega2, 2.352);
assert.equal(Math.sqrt(omega2).toPrecision(3), '1.98');
const m = 0.5, h = 0.6, length = 1;
const radius = Math.sqrt(length ** 2 - h ** 2), reaction = m * g / 2;
const tension = (m * g - reaction) * length / h;
const angular2 = tension / (m * length);
close(tension, 49 / 12);
close(angular2, 49 / 6);
close(tension * radius / length, m * radius * angular2);
close(reaction, m * (g - h * angular2));
assert(radius > 0 && tension > 0 && reaction > 0 && angular2 < g / h);
assert.equal(Math.sqrt(angular2).toPrecision(3), '2.86');
assert.equal((radius * Math.sqrt(angular2)).toPrecision(3), '2.29');

console.log('Motion transfer passed: 3 bilingual pairs, 25 original examples, 27 original exercises, exact formula order, prompts, anchors, 11 diagrams, closed disclosures, and 6 independently checked diagnostic/retry problems.');
