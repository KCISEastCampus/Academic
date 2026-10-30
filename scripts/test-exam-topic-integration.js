// Run after the Jekyll build; optionally pass the canonical academic-topics.json path.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { createHash } = require('node:crypto');
const { execFileSync } = require('node:child_process');
const root = path.join(__dirname, '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8').replace(/\r\n/g, '\n');
const mapping = fs.readFileSync(path.join(root, '_data/exam_topics.json'));
if (process.argv[2]) assert.deepEqual(mapping, fs.readFileSync(process.argv[2]), 'Copy the canonical source byte for byte');
// Pin the approved source bytes so CI can check equality without the author's local file.
assert.equal(createHash('sha256').update(mapping).digest('hex'),
  '9b2307464737bd19ab5c2e5b0a486e44a9edf90edff3d8c2cbeb4d4cdf1b5bd4', 'Canonical mapping changed: verify and repin its source');
const topics = JSON.parse(mapping);
assert.equal(topics.length, 2);
assert.equal(new Set(topics.map(topic => topic.id)).size, 2, 'Topic IDs must be unique');
const body = html => html.split('id="content-container"')[1].split('<div id="toc"')[0];
const built = route => read(`_site${route}index.html`);
const components = html => [...html.matchAll(/<aside class="exam-topic-practice\b[^>]*>[\s\S]*?<\/aside>/g)].map(match => match[0]);
function checkLink(component, topic, lang) {
  const url = new URL(component.match(/href="([^"]+)"/)[1].replace(/&amp;/g, '&'));
  assert.equal(url.origin, 'https://ericstone.top');
  assert.equal(url.pathname, `/exams/${topic.course}/`);
  assert.equal(url.hash, '');
  assert.deepEqual([...url.searchParams], [
    ['unit', topic.unit], ['view', 'questions'], ['units', topic.unit],
    ['chapters', topic.chapter], ['lesson_lang', lang]
  ], 'Only filters and lesson language belong in the entry URL; never reset or replace a draft');
  assert.match(component, lang === 'en' ? /whole questions.*other chapters/ : /跨章.*整题/);
  assert.doesNotMatch(component, /difficulty|难度/, 'Keep the entry copy focused on scope and draft preservation');
  assert.match(component, lang === 'en' ? /keeps your existing paper draft/ : /保留已有组卷草稿/);
}
const contexts = [];
const positiveIndexes = new Set();
for (const topic of topics) {
  assert.match(topic.id, /^[a-z][a-z-]+$/);
  assert.match(topic.course, /^[a-z][a-z-]+$/);
  assert.match(topic.unit, /^[A-Z]+\d+$/);
  assert(topic.chapter.startsWith(topic.unit), 'Chapter must belong to the mapped unit');
  for (const lang of ['en', 'zh']) {
    const [route, anchor] = topic.lessons[lang].split('#');
    assert(route.startsWith(lang === 'zh' ? '/zh/alevel/' : '/alevel/'));
    assert(route.endsWith('/'));
    const source = read(`${route.slice(1, -1)}.md`);
    const html = built(route);
    const content = body(html);
    const blocks = components(content);
    assert.equal(blocks.length, 1, `${route}: render exactly one practice link`);
    checkLink(blocks[0], topic, lang);
    if (anchor) assert(html.includes(`id="${anchor}"`), `${route}: preserve the mapped anchor`);
    const includePosition = source.indexOf('{% include exam_topic_practice.html %}');
    assert(includePosition > source.lastIndexOf('</details>'), `${route}: link follows every independent attempt and closed feedback`);
    const renderedPosition = content.indexOf(blocks[0]);
    const practicePosition = content.search(/id="(?:practice|independent-practice)"/);
    assert(practicePosition > 0 && renderedPosition > practicePosition);
    assert(renderedPosition > content.lastIndexOf('</details>'), `${route}: rendered link follows all practice and retries`);
    assert(!/<details\b[^>]*\bopen(?:\s|=|>)/.test(content), 'Hints and solutions remain closed');
    assert.match(html, /class="reading-layout"/);
    assert.match(html, /id="languageSwitch"/);
    const courseRoute = route.slice(0, route.slice(0, -1).lastIndexOf('/') + 1);
    const courseBlocks = components(body(built(courseRoute)));
    assert.equal(courseBlocks.length, 1, `${courseRoute}: matching course entrance`);
    checkLink(courseBlocks[0], topic, lang);
    const ui = { exam_topic_questions: 'Questions', exam_topic_scope: 'Scope', exam_topic_drafts: 'Drafts' };
    const context = { page: { url: route, lang: lang === 'zh' ? 'zh-CN' : 'en' }, include: {}, site: { data: { exam_topics: topics, ui: { en: ui, 'zh-CN': ui } } } };
    positiveIndexes.add(contexts.length);
    contexts.push(context);
    for (const missing of [undefined, [], topics.filter(item => item.id !== topic.id)]) {
      const fixture = structuredClone(context);
      fixture.site.data.exam_topics = missing;
      contexts.push(fixture);
    }
    for (const field of ['course', 'unit', 'chapter']) for (const value of ['', null]) {
      const fixture = structuredClone(context);
      fixture.site.data.exam_topics = [{ ...topic, [field]: value }];
      contexts.push(fixture);
    }
    const untranslated = structuredClone(context);
    untranslated.site.data.exam_topics = [{ ...topic, lessons: {} }];
    contexts.push(untranslated);
    const unknown = structuredClone(context);
    unknown.include.topic = 'unknown-topic';
    contexts.push(unknown);
    const unrelated = structuredClone(context);
    unrelated.page.url = '/unmapped/';
    contexts.push(unrelated);
  }
}
// Render the real Liquid component, including missing/partial mapping fixtures.
const rendered = JSON.parse(execFileSync('ruby', ['-EUTF-8', '-rbundler/setup', '-rjekyll', '-rjson', '-e',
  'template = Liquid::Template.parse(File.read(ARGV[0])); puts JSON.generate(JSON.parse(STDIN.read).map { |context| template.render!(context, filters: [Jekyll::Filters]) })',
  path.join(root, '_includes/exam_topic_practice.html')], { cwd: root, input: JSON.stringify(contexts), encoding: 'utf8' }));
rendered.forEach((html, index) => {
  if (positiveIndexes.has(index)) assert.equal(components(html).length, 1, 'Fixture must exercise a successful render too');
  else assert.equal(html.trim(), '', 'Missing, partial or unknown mapping must render nothing');
});
for (const [route, label] of [['/', 'Questions & papers'], ['/zh/', '找题组卷']]) {
  const html = built(route);
  assert.match(html, /href="https:\/\/ericstone\.top\/exams\/" class="site-nav-link" data-ui="question_finder"/);
  assert(html.includes(`>${label}</a>`));
  assert.equal(components(body(built(`${route}alevel/as-physics/straight-line-motion/`))).length, 0, 'Unmapped lessons have no practice entry');
}
console.log(`Exam integration passed: canonical bytes, four lesson/course links, filter-only URLs, placement, bilingual navigation and ${contexts.length - positiveIndexes.size} missing-map fixtures.`);
