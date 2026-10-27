// Run after bundle exec jekyll build.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const read = file => fs.readFileSync(path.join(__dirname, '..', file), 'utf8');
const slug = 'fractions-decimals-and-percentages';
const en = read('igcse/mathematics/' + slug + '.md');
const zh = read('zh/igcse/mathematics/' + slug + '.md');
const questions = source => source.match(/^\*\*Question:\*\* .+$/gm);
const math = source => source.match(/\$\$[\s\S]*?\$\$|(?<!\$)\$(?!\$)[^\n$]+\$(?!\$)/g);
assert.deepEqual(questions(zh), questions(en), 'Paired English questions and conditions');
assert.deepEqual(math(zh), math(en), 'Paired mathematical reasoning, answers and checks');
const contentIds = source => [...source.matchAll(/\{#([^}]+)\}|id="([^"]+)"/g)].map(m => m[1] || m[2]);
assert.deepEqual(contentIds(zh), contentIds(en), 'Paired stable reading positions');
assert(zh.includes('translation_of: /igcse/mathematics/' + slug + '/'));
const tasks = ['practice-forms', 'exam-check', 'practice-part', 'practice-share',
  'mixed-check', 'retry-forms', 'retry-part', 'retry-share', 'later-check'];
for (const [prefix, source] of [['', en], ['zh/', zh]]) {
  const html = read('_site/' + prefix + 'igcse/mathematics/' + slug + '/index.html');
  const body = html.split('id="content-container"')[1].split('<div id="toc"')[0];
  assert(html.includes('class="reading-layout"'), 'Existing shared reading layout');
  assert(!/<details\b[^>]*\bopen(?:\s|=|>)/.test(body), 'Help closed by default');
  assert(!body.includes('{{'), 'No unrendered Liquid');
  const ids = [...body.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]);
  assert.equal(ids.length, new Set(ids).size, 'Unique rendered IDs');
  const groups = [...source.matchAll(/<div class="lesson-check" markdown="1">([\s\S]*?)<\/div>/g)];
  assert.deepEqual(groups.map(m => m[1].match(/\{#([^}]+)\}/)[1]), tasks, 'Each intended task has its own boundary');
  for (const [, group] of groups) {
    assert.equal((group.match(/<details\b/g) || []).length, 2, 'Separate hint and solution');
    assert(group.indexOf('**Question:**') < group.indexOf('<details'), 'Prompt available before help');
    assert(!group.includes('<div'), 'No nested tasks');
  }
  assert.equal((source.match(/class="worked-example"/g) || []).length, 3, 'Three public complete demonstrations');
  const index = read('_site/' + prefix + 'igcse/mathematics/index.html');
  assert(index.includes('href="/' + prefix + 'igcse/mathematics/' + slug + '/"'), 'Localized sample entry');
  for (const [, id] of source.matchAll(/\]\(#([^)]*)\)/g)) assert(ids.includes(id), 'Local recovery: ' + id);
}
assert(en.includes('9260/1C') && en.includes('Specimen 2018') && en.includes('**1 mark**'));
assert(en.includes('15% &emsp; 20% &emsp; 35% &emsp; 55% &emsp; 60%'), 'All original options');
const svg = read('assets/img/igcse-fraction-strip.svg');
assert(svg.includes('<title') && svg.includes('<desc'), 'Diagram has a non-colour-only description');

// Independent numeric checks support, but do not prove, the written general reasoning.
const near = (actual, expected) => assert(Math.abs(actual - expected) < 1e-12, actual + ' vs ' + expected);
near(3 / 8 * 100, 37.5);
near(7 / 20, 35 / 100);
assert.deepEqual([15, 20, 35, 55, 60].filter(p => p > 100 / 4 && p < 100 / 2), [35]);
assert.equal(160 - 160 / 8 * 3, 100);
near(18 / 24 * 100, 75);
near(12 / 30 * 100, 40);
near(30 / 12 * 100, 250);
const unsold = 80 - 0.35 * 80 - 3 / 8 * 80;
assert.equal(unsold, 22);
near(unsold / 80 * 100, 27.5);
near(18 / 100, 9 / 50);
assert.equal(150 - 0.24 * 150 - 150 / 3, 64);
near(46 / 40 * 100, 115);
assert.equal(40 * 5 / 8 - 40 * 0.6, 1);
near(5 / 8 * 100, 62.5);
for (const whole of [12, 40, 80, 150]) {
  for (const share of [0.08, 0.25, 0.375, 1.2]) {
    const amount = whole * share;
    near(amount / whole, share);
    near((100 * share) / 100 * whole, amount);
  }
}
console.log('IGCSE mathematics sample: paired questions/math, task boundaries, recovery links and calculations passed.');
