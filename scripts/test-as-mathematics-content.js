// Source-only checks; main owns Jekyll, generated HTML and browser acceptance.
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
  assert(source.includes('toc_headings: "#learning-route, #pure-foundations, #further-pure, #statistics, #mechanics, #how-to-study, #sources-and-scope, #legacy-reference"'), 'index TOC includes learner routes and excludes archived headings');
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
for (const [name, topic, groups] of topics) {
  const url = `/alevel/as-mathematics/${name}/`;
  const en = read(`alevel/as-mathematics/${name}.md`);
  const zh = read(`zh/alevel/as-mathematics/${name}.md`);
  assert(zh.includes(`translation_of: ${url}`));
  assert(zh.includes(`permalink: /zh${url}`));
  assert(zh.includes('lang: zh-CN'));
  for (const field of ['layout: subjects', 'mathjax: true', 'grade: as', 'subject: as-mathematics', 'study_page: true']) {
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
  const prompts = text => text.match(/^\*\*Question:\*\* .+$/gm) || [];
  assert.deepEqual(prompts(zh), prompts(en), `${name}: English prompts`);
  assert.equal(prompts(en).length, groups.length * 4);
  for (const source of [en, zh]) {
    assert.equal((source.match(/<details markdown="1">/g) || []).length, groups.length * 6);
    assert.equal((source.match(/<\/details>/g) || []).length, groups.length * 6);
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
    count++;
  }
  questions += prompts(en).length;
  disclosures += groups.length * 6;
}
assert.equal(count, 25);
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
