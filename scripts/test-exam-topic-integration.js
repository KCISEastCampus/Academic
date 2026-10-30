// Full: run after Jekyll. Offline: --source-only --canonical=... --exam-root=...
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { createHash } = require('node:crypto');
const { execFileSync } = require('node:child_process');
const root = path.join(__dirname, '..');
const args = process.argv.slice(2);
const sourceOnly = args.includes('--source-only');
const option = name => args.find(arg => arg.startsWith(`--${name}=`))?.slice(name.length + 3);
const canonical = option('canonical') || args.find(arg => !arg.startsWith('--'));
const examRoot = option('exam-root');
const read = file => fs.readFileSync(path.join(root, file), 'utf8').replace(/\r\n/g, '\n');
const mapping = fs.readFileSync(path.join(root, '_data/exam_topics.json'));
if (canonical) assert.deepEqual(mapping, fs.readFileSync(canonical), 'Copy the canonical source byte for byte');
// CI pins the reviewed source bytes without needing the author's external library checkout.
assert.equal(createHash('sha256').update(mapping).digest('hex'),
  '3d6a40883ca11c16dc71cd6c0998803e80b3f1b19517238b3ed6474c5a16406a', 'Canonical mapping changed: verify source and evidence before repinning');
const topics = JSON.parse(mapping);
assert(topics.length > 0);
assert.equal(new Set(topics.map(topic => topic.id)).size, topics.length, 'Unique, stable mapping IDs');
const courses = ['further-math', 'mathematics', 'physics'];
assert.deepEqual([...new Set(topics.map(topic => topic.course))].sort(), [...courses].sort());
const datasets = new Map();
if (examRoot) for (const course of courses) datasets.set(course,
  JSON.parse(fs.readFileSync(path.join(examRoot, 'dist', course === 'further-math' ? '' : course, 'data.json'), 'utf8')));
const evidence = read('docs/agents/exam-topics-mapping-2026-10-31.md');
const template = read('_includes/exam_topic_practice.html');
assert.match(template, /topic\.chapters\s*\|\s*join:\s*','/, 'Multi-chapter links use the agreed CSV contract');
assert.match(template, /chapters=\{\{ exam_chapters \| url_encode \}\}/);
const codesOf = topic => topic.chapters || [topic.chapter];
const routeOf = (topic, lang) => topic.lessons[lang].split('#')[0];
const pages = new Map();
for (const topic of topics) {
  assert.match(topic.id, /^[a-z][a-z0-9-]+$/);
  assert(courses.includes(topic.course));
  assert.match(topic.unit, /^[A-Z]+\d+$/);
  assert.equal(typeof topic.title, 'string');
  assert(topic.title.trim());
  assert.equal(typeof topic.chapter, 'string');
  const codes = codesOf(topic);
  assert(Array.isArray(codes) && codes.length > 0);
  assert(codes.includes(topic.chapter), 'Primary chapter stays in the selected chapters');
  assert.equal(new Set(codes).size, codes.length, 'Do not repeat a chapter filter');
  for (const code of codes) {
    assert.match(code, /^[A-Z]+\d+(?::[A-Z]*\d+)?(?:\.\d+)+$/);
    if (examRoot) {
      const data = datasets.get(topic.course);
      const record = data.overall[code] || data.subtopics?.overall?.[code];
      assert(record, `${topic.id}: missing real dist syllabus ID ${code}`);
      assert.equal(record.unit, topic.unit, `${topic.id}: cross-unit mapping ${code}`);
    }
  }
  assert(evidence.includes(`| \`${topic.id}\` |`), topic.id + ': per-mapping evidence');
  assert.deepEqual(Object.keys(topic.lessons).sort(), ['en', 'zh']);
  for (const lang of ['en', 'zh']) {
    const [route, anchor] = topic.lessons[lang].split('#');
    assert.match(route, lang === 'zh' ? /^\/zh\/alevel\/[a-z0-9/-]+\/$/ : /^\/alevel\/[a-z0-9/-]+\/$/);
    const file = `${route.slice(1, -1)}.md`, source = read(file);
    assert.match(source, new RegExp('^permalink: ' + route + '$', 'm'));
    if (lang === 'zh') {
      assert.match(source, /^lang: zh-CN$/m);
      assert(source.includes(`translation_of: ${routeOf(topic, 'en')}`));
      assert.equal(route, '/zh' + routeOf(topic, 'en'));
    }
    if (anchor) assert(source.includes(`id="${anchor}"`) || source.includes(`{#${anchor}}`), file + ': mapped anchor');
    const include = '{% include exam_topic_practice.html %}';
    const position = source.indexOf(include);
    assert.equal(source.split(include).length - 1, 1, file + ': one shared component invocation');
    assert(position > source.lastIndexOf('</details>'), file + ': entry follows every attempt and closed feedback');
    const before = source.slice(0, position);
    const opening = [...before.matchAll(/<details\b/g)].length;
    assert(opening > 0 && opening === [...before.matchAll(/<\/details>/g)].length, file + ': entry outside all feedback');
    assert(!/<details\b[^>]*\bopen(?:\s|=|>)/.test(source), file + ': keep feedback closed');
    if (!pages.has(route)) pages.set(route, { route, lang, source, topics: [] });
    pages.get(route).topics.push(topic);
  }
}
for (const [id, course, unit, chapter, title, en] of [
  ['polar-coordinates', 'further-math', 'FP2', 'FP2.3', 'Polar coordinates', '/alevel/a2-further-mathematics/polar-coordinates/'],
  ['moments', 'physics', 'U1', 'U1:3.2.2', 'Moments', '/alevel/as-physics/vectors-and-moments/#moments']
]) assert.deepEqual(topics.find(topic => topic.id === id), { id, course, unit, chapter, title, lessons: { en, zh: '/zh' + en } }, 'Existing pilot object stays stable');
const components = html => [...html.matchAll(/<aside class="exam-topic-practice\b[^>]*>[\s\S]*?<\/aside>/g)].map(match => match[0]);
const hrefs = html => [...html.matchAll(/href="([^"]+)"/g)].map(match => match[1].replace(/&amp;/g, '&'));
function checkLinks(html, selected, lang) {
  assert.equal(components(html).length, 1, 'One restrained component, including when a page has several mappings');
  const links = hrefs(html);
  assert.equal(links.length, selected.length, 'Render all selected mappings once');
  for (const topic of selected) {
    const found = links.filter(href => {
      const url = new URL(href);
      return url.pathname === `/exams/${topic.course}/` && url.searchParams.get('unit') === topic.unit &&
        url.searchParams.get('chapters') === codesOf(topic).join(',');
    });
    assert.equal(found.length, 1, topic.id + ': exact mapped filter URL');
    const url = new URL(found[0]);
    assert.equal(url.origin, 'https://ericstone.top');
    assert.equal(url.hash, '');
    assert.deepEqual([...url.searchParams], [
      ['unit', topic.unit], ['view', 'questions'], ['units', topic.unit],
      ['chapters', codesOf(topic).join(',')], ['lesson_lang', lang]
    ], 'Only filters/language; never reset or replace an existing draft');
    if (topic.chapters) assert(found[0].includes('%2C'), 'Encode the complete chapter list');
  }
  assert.match(html, lang === 'en' ? /whole questions.*other chapters/ : /跨章.*整题/);
  assert.match(html, lang === 'en' ? /keeps your existing paper draft/ : /保留已有组卷草稿/);
  assert.doesNotMatch(html, /difficulty|难度/);
}
for (const [file, id] of [
  ['alevel/a2-further-mathematics/index.md', 'polar-coordinates'], ['alevel/as-physics/index.md', 'moments']
]) for (const prefix of ['', 'zh/']) assert(read(prefix + file).includes(`{% include exam_topic_practice.html topic="${id}" %}`), 'Retain explicit pilot course entrance');
for (const file of ['alevel/a2-mathematics/mathematical-proof.md', 'alevel/a2-physics/quick-reference.md']) {
  assert(!read(file).includes('{% include exam_topic_practice.html'), 'Unmapped/ambiguous pages stay hidden');
  assert(evidence.includes(file), 'Record why the existing page was skipped');
}
console.log(`Source checks passed: ${topics.length} mappings, ${pages.size} bilingual lesson pages, ${topics.filter(t => t.chapters).length} multi-chapter entries${examRoot ? ', all IDs/units checked against real dist' : ''}.`);
if (sourceOnly) {
  console.log('Real Liquid and generated HTML checks intentionally deferred (--source-only); no Ruby or browser launched.');
  process.exit(0);
}
// Exercise the real Ruby Liquid component; source-only mode above has no runtime dependency.
const contexts = [], expectations = [];
function fixture(selected, lang, route, expected, include = {}) {
  contexts.push({ page: { url: route, lang: lang === 'zh' ? 'zh-CN' : 'en' }, include,
    site: { data: { exam_topics: selected } } });
  expectations.push({ selected: expected, lang });
}
for (const page of pages.values()) fixture(page.topics, page.lang, page.route, page.topics);
for (const topic of topics) for (const lang of ['en', 'zh']) {
  const route = routeOf(topic, lang);
  for (const absent of [null, []]) fixture(absent, lang, route, []);
  for (const field of ['course', 'unit', 'chapter']) for (const value of ['', null]) fixture([{ ...topic, [field]: value }], lang, route, []);
  fixture([{ ...topic, lessons: {} }], lang, route, []);
  fixture([topic], lang, route, [], { topic: 'unknown-topic' });
  fixture([topic], lang, '/unmapped/', []);
  fixture([{ ...topic, chapters: [] }], lang, route, []);
  fixture([topic], lang, '/course/', [topic], { topic: topic.id });
}
const rendered = JSON.parse(execFileSync('ruby', ['-EUTF-8', '-rbundler/setup', '-rjekyll', '-rjson', '-ryaml', '-e',
  'template = Liquid::Template.parse(File.read(ARGV[0])); ui = YAML.safe_load(File.read(ARGV[1])); puts JSON.generate(JSON.parse(STDIN.read).map { |context| context["site"]["data"]["ui"] = ui; template.render!(context, filters: [Jekyll::Filters]) })',
  path.join(root, '_includes/exam_topic_practice.html'), path.join(root, '_data/ui.yml')],
  { cwd: root, input: JSON.stringify(contexts), encoding: 'utf8', maxBuffer: 16 * 1024 * 1024 }));
rendered.forEach((html, index) => {
  const { selected, lang } = expectations[index];
  if (selected.length) checkLinks(html, selected, lang);
  else assert.equal(html.trim(), '', 'Missing/incomplete/unknown mapping or empty chapter selection hides the component');
});
const built = route => read(`_site${route}index.html`);
const body = html => html.split('id="content-container"')[1].split('<div id="toc"')[0];
for (const page of pages.values()) {
  const html = built(page.route), content = body(html), blocks = components(content);
  assert.equal(blocks.length, 1, page.route + ': one generated component');
  checkLinks(blocks[0], page.topics, page.lang);
  assert(content.indexOf(blocks[0]) > content.lastIndexOf('</details>'), 'Generated entry follows every practice/retry and disclosure');
  assert(!/<details\b[^>]*\bopen(?:\s|=|>)/.test(content));
  if (/^reading_layout: true$/m.test(page.source)) assert.match(html, /class="reading-layout"/);
  assert.match(html, /id="languageSwitch"/);
  for (const topic of page.topics) {
    const anchor = topic.lessons[page.lang].split('#')[1];
    if (anchor) assert(html.includes(`id="${anchor}"`));
  }
}
for (const [route, id] of [['/alevel/a2-further-mathematics/', 'polar-coordinates'], ['/alevel/as-physics/', 'moments']]) for (const lang of ['en', 'zh']) {
  const blocks = components(body(built((lang === 'zh' ? '/zh' : '') + route)));
  assert.equal(blocks.length, 1);
  checkLinks(blocks[0], [topics.find(topic => topic.id === id)], lang);
}
for (const [route, label] of [['/', 'Questions & papers'], ['/zh/', '找题组卷']]) {
  const html = built(route);
  assert.match(html, /href="https:\/\/ericstone\.top\/exams\/" class="site-nav-link" data-ui="question_finder"/);
  assert(html.includes(`>${label}</a>`));
  assert.equal(components(body(built(`${route}alevel/a2-mathematics/mathematical-proof/`))).length, 0);
}
console.log(`Rendered checks passed: ${pages.size} lesson pages, four pilot course links and ${contexts.length} real Liquid fixtures.`);
