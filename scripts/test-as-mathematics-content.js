// Source checks; build, rendered HTML and actual reading are verified separately.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = path.join(__dirname, '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const topics = [
  ['algebra', 'P1.1', [1, 2, 3, 5]],
  ['coordinate-geometry', 'P1.2', [4]],
  ['differentiation', 'P1.3', [6, 7]],
  ['integration', 'P1.4', [8, 9]],
  ['sequences', 'P1.5', [10, 11, 12, 13]],
  ['circles', 'PP1.1', [14]],
  ['trigonometry', 'PP1.2', [15, 16]],
  ['exponentials-logarithms', 'PP1.3', [17]],
  ['probability', 'S1.1', [18]],
  ['random-variables', 'S1.2', [19, 20]],
  ['binomial', 'S1.3', [21]],
  ['constant-acceleration', 'M1.1', [22]],
  ['variable-acceleration', 'M1.2', [23]],
  ['forces', 'M1.3', [24]],
  ['momentum', 'M1.4', [25]]
];
const math = text => text.match(/\$\$[\s\S]*?\$\$|\$[^$\n]+\$/g) || [];
const ids = text => [
  ...[...text.matchAll(/\{#([^}]+)\}/g)].map(m => m[1]),
  ...[...text.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]),
  ...[...text.matchAll(/^#{1,6} (.+)$/gm)].filter(m => !m[1].includes('{#'))
    .map(m => m[1].toLowerCase().replace(/[^\w -]/g, '').replace(/ /g, '-'))
];
const enIndex = read('alevel/as-mathematics/index.md');
const zhIndex = read('zh/alevel/as-mathematics/index.md');
for (const source of [enIndex, zhIndex]) {
  assert(source.includes('toc_headings: "#learning-route, #pure-foundations, #further-pure, #statistics, #mechanics, #how-to-study, #mixed-review, #later-review, #sources-and-scope, #legacy-reference"'), 'index TOC includes learner routes and review, excluding archived headings');
  assert(source.includes('<details markdown="1">') && !/<details[^>]*\bopen\b/.test(source) && source.trim().endsWith('</details>'), 'old outline is archived in a closed panel');
}
for (const id of ids(enIndex)) assert(ids(zhIndex).includes(id), `index anchor: ${id}`);
assert(zhIndex.includes('开始第一课：代数') && enIndex.includes('Start the first lesson: Algebra'));
for (const source of [enIndex, zhIndex]) {
  const route = source.split('{#learning-route}')[1].split('{#how-to-study}')[0];
  assert(!/\[L\d+\]|\| MA0/.test(route), 'learning route uses topic names rather than code tables');
  assert.equal((route.match(/^\d+\. \*\*\[/gm) || []).length, 15, 'all lessons have a route entry');
}
assert(!zhIndex.includes('ui.subject_index_intro'), 'remove old English-only directory introduction');
let count = 0, questions = 0, disclosures = 0;
const prompts = text => text.match(/^\*\*Question:\*\* .+$/gm) || [];
function checkRoles(source, name) {
  const tasks = [...source.matchAll(/<div class="lesson-check" markdown="1">([\s\S]*?)<\/div>/g)].map(m => m[1]);
  const examples = [...source.matchAll(/<div class="worked-example" markdown="1">([\s\S]*?)<\/div>/g)].map(m => m[1]);
  for (const task of tasks) {
    assert.equal(prompts(task).length, 1, `${name}: one prompt per task`);
    assert.equal((task.match(/<details\b/g) || []).length, 2, `${name}: separate hint and solution`);
    assert(!task.includes('class="lesson-check"'), `${name}: no nested tasks`);
    assert(task.indexOf('**Question:**') < task.indexOf('<details'), `${name}: prompt precedes help`);
  }
  for (const example of examples) {
    assert.equal(prompts(example).length, 1, `${name}: one complete demonstration`);
    assert(!example.includes('<details') && !example.includes('class="lesson-check"'), `${name}: examples are public and separate`);
  }
  assert.equal(prompts(source).length, tasks.length + examples.length, `${name}: every prompt has one reading role`);
  return { tasks, examples };
}
for (const source of [enIndex, zhIndex]) {
  assert(source.includes('reading_layout: true'));
  assert.equal(checkRoles(source.split('{#legacy-reference}')[0], 'course review').tasks.length, 8);
  for (const route of ['foundations', 'further', 'statistics', 'mechanics']) {
    for (const phase of ['mixed', 'later']) assert(ids(source).includes(`${phase}-${route}`));
  }
}
const review = text => text.split('{#mixed-review}')[1].split('{#sources-and-scope}')[0];
assert.deepEqual(prompts(review(zhIndex)), prompts(review(enIndex)), 'course review English prompts');
assert.deepEqual(math(review(zhIndex)), math(review(enIndex)), 'course review formulae');
for (const [name, topic, groups] of topics) {
  const url = `/alevel/as-mathematics/${name}/`;
  const en = read(`alevel/as-mathematics/${name}.md`);
  const zh = read(`zh/alevel/as-mathematics/${name}.md`);
  assert(zh.includes(`translation_of: ${url}`));
  assert(zh.includes(`permalink: /zh${url}`));
  assert(zh.includes('lang: zh-CN'));
  for (const field of ['layout: subjects', 'mathjax: true', 'grade: as', 'subject: as-mathematics', 'study_page: true', 'reading_layout: true']) {
    assert(en.includes(field) && zh.includes(field), `${name}: ${field}`);
  }
  assert(en.includes(topic) && zh.includes(topic), `${name}: specification topic`);
  assert(enIndex.includes(`](${url})`) && zhIndex.includes(`](/zh${url})`));
  assert(en.includes('self-written') && zh.includes('自拟题'));
  const position = topics.findIndex(row => row[0] === name);
  for (const [source, prefix] of [[en, ''], [zh, '/zh']]) {
    const nextStep = source.split('{#next-step}')[1].split('{#sources}')[0];
    assert(nextStep.includes(`${prefix}/alevel/as-mathematics/#learning-route`), `${name}: return to route`);
    for (const neighbor of [topics[position - 1], topics[position + 1]].filter(Boolean)) {
      assert(nextStep.includes(`${prefix}/alevel/as-mathematics/${neighbor[0]}/`), `${name}: named adjacent lesson`);
    }
    if (position === 0) assert(!/Previous lesson:|上一课：/.test(nextStep), 'first lesson has no previous lesson');
    if (position === topics.length - 1) assert(!/Next lesson:|下一课：/.test(nextStep), 'final lesson has no phantom next lesson');
  }
  assert.deepEqual(math(zh), math(en), `${name}: bilingual formula order and content`);
  assert.deepEqual(ids(zh), ids(en), `${name}: stable paired anchors`);
  assert.equal(new Set(ids(en)).size, ids(en).length, `${name}: no duplicate IDs`);
  assert.deepEqual(prompts(zh), prompts(en), `${name}: English prompts`);
  for (const source of [en, zh]) {
    const panels = (source.match(/<details\b[^>]*>/g) || []).length;
    assert.equal((source.match(/<\/details>/g) || []).length, panels, `${name}: balanced help panels`);
    const roles = checkRoles(source, name);
    const notes = name === 'algebra' ? 2 : 1; // L01 prerequisite recap and the source panel.
    assert.equal(panels, 2 * roles.tasks.length + notes, `${name}: all help and notes accounted for`);
    assert(roles.examples.length >= groups.length, `${name}: visible demonstrations for its groups`);
    assert(!/<details[^>]*\bopen\b/.test(source), `${name}: solutions initially closed`);
    for (const formula of math(source)) assert(!formula.includes('|'), `${name}: ASCII pipe in TeX`);
    for (const [, alt, file] of source.matchAll(/!\[([^\]]*)\]\(([^)]+)\)/g)) {
      assert(alt.trim().length > 15, `${name}: useful image alternative`);
      const svg = read(file.slice(1));
      assert(svg.includes('<title') && svg.includes('<desc') && svg.includes('viewBox='));
      assert(!/<script|foreignObject/i.test(svg));
    }
  }
  for (const n of groups) {
    const id = `l${String(n).padStart(2, '0')}`;
    for (const suffix of ['', '-worked', '-scaffold', '-independent', '-diagnosis', '-retry']) {
      assert(ids(en).includes(id + suffix), `${name}: missing group activity ${id + suffix}`);
    }
    const section = en.split(`{#${id}}`)[1].split(/^## /m)[0];
    assert(section.includes('Goal:') && section.includes('Prerequisites:'));
    assert(prompts(section).length >= 4, `${id}: preserve existing learning opportunities`);
    if (n !== 1) assert(ids(section).includes(`${id}-concept`), `${id}: concept recovery target`);
    const diagnosis = section.split(`{#${id}-diagnosis}`)[1];
    assert(/\]\(#[^)]+\)/.test(diagnosis), `${id}: actionable recovery and retry links`);
    count++;
  }
  questions += prompts(en).length;
  disclosures += (en.match(/<details\b[^>]*>/g) || []).length;
}
assert.equal(count, 25);
// Guard the reviewed recovery paths and the distribution identity that makes reciprocals valid.
const retryRoutes = {
  algebra: ['l03-retry-division'],
  sequences: ['l10-retry-threshold'],
  trigonometry: ['l15-retry-triangle', 'l16-retry-restrictions'],
  probability: ['l18-retry-conditional'],
  binomial: ['l21-retry-model'],
  momentum: ['l25-retry-separation'],
  forces: ['l24-independent-friction', 'l24-retry-friction']
};
for (const prefix of ['', 'zh/']) {
  for (const [topic, anchors] of Object.entries(retryRoutes)) {
    const source = read(`${prefix}alevel/as-mathematics/${topic}.md`);
    for (const anchor of anchors) assert(ids(source).includes(anchor), `reviewed task: ${anchor}`);
    for (const anchor of anchors.filter(id => id.includes('-retry-'))) {
      assert(source.includes(`](#${anchor})`), `diagnosis reaches the specific retry: ${anchor}`);
    }
  }
  const reciprocal = read(`${prefix}alevel/as-mathematics/random-variables.md`).split('{#l19-retry}')[1].split('</div>')[0];
  const context = reciprocal.split('<details')[0];
  assert(context.includes('](#l19-worked)') && context.includes('$X=1,2,4$') && context.includes('$1/4,1/2,1/4$'), 'reciprocal task explicitly restores its nonzero distribution before help');
}
const forceSVG = read('alevel/as-mathematics/assets/car-trailer-check.svg');
const arrows = forceSVG.match(/<g[^>]*marker-end="url\(#arrow\)"[^>]*>([\s\S]*?)<\/g>/)[1];
const forcePaths = [...arrows.matchAll(/<path d="([^"]+)"/g)].map(m => m[1]);
assert.equal(forcePaths.length, 10, 'nine force arrows and one direction arrow');
assert(forcePaths.every(d => (d.match(/M/g) || []).length === 1), 'each arrow has its own path endpoint');
// Retain the accepted L01 pilot and its real later application while extending the page.
for (const prefix of ['', 'zh/']) {
  const source = read(`${prefix}alevel/as-mathematics/algebra.md`);
  assert(source.includes('reading_layout: true'));
  for (const id of ['l01-prerequisite', 'l01-indices', 'l01-surds', 'l01-independent-indices', 'l01-retry-indices', 'l01-later', 'l01-later-task']) {
    assert(ids(source).includes(id), `L01: ${id}`);
  }
  const tasks = [...source.matchAll(/<div class="lesson-check" markdown="1">([\s\S]*?)<\/div>/g)].map(m => m[1]);
  for (const task of tasks) {
    assert.equal((task.match(/^\*\*Question:\*\*/gm) || []).length, 1, 'one prompt per task');
    assert.equal((task.match(/<details\b/g) || []).length, 2, 'separate hint and solution');
    assert(!task.includes('class="lesson-check"'), 'no nested tasks');
  }
  const examples = [...source.split('{#l02}')[0].matchAll(/<div class="worked-example" markdown="1">([\s\S]*?)<\/div>/g)].map(m => m[1]);
  assert.equal(examples.length, 2, 'both index and surd demonstrations are visible');
  assert(examples.every(example => !example.includes('<details')), 'complete examples remain public');
  const l01 = source.split('{#l01}')[1].split('{#l02}')[0];
  assert(l01.includes('](#l01-later)') && l01.includes('](#l02)'), 'initial continuation and later return');
  const l02 = source.split('{#l02}')[1].split('{#l03}')[0];
  assert(l02.includes('](#l01-later)'), 'quadratics explicitly returns to the mixed task');
  assert(source.includes('differentiation/#l06-scaffold'), 'later index application is reachable');
}
// Every local course link resolves to a source file and, if present, a stable anchor.
for (const dir of ['alevel/as-mathematics', 'zh/alevel/as-mathematics']) {
  for (const name of fs.readdirSync(path.join(root, dir)).filter(n => n.endsWith('.md'))) {
    for (const [, url, fragment] of read(`${dir}/${name}`).matchAll(/(?:\]\(|href=")(\/(?:zh\/)?alevel\/as-mathematics\/[^#)"\s]*)(?:#([^)"]+))?/g)) {
      if (url.includes('/assets/')) {
        assert(fs.existsSync(path.join(root, url.slice(1))), `missing asset: ${url}`);
        continue;
      }
      const file = url.replace(/^\//, '').replace(/\/$/, '') + (url.match(/as-mathematics\/$/) ? '/index.md' : '.md');
      const target = read(file);
      if (fragment) assert(ids(target).includes(fragment), `broken source link: ${url}#${fragment}`);
    }
  }
}
console.log(`AS source checks passed: 15 topics, ${count} groups, ${questions} matched prompts per language, ${disclosures} closed disclosures per language.`);
