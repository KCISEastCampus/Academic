// Run after the Jekyll build. Mathematical and scope reviews are recorded separately.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = path.join(__dirname, '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8').replace(/\r\n/g, '\n');
const evidence = 'docs/agents/audit-assets/igcse-mathematics-rollout-2026-10-27/';
const route = JSON.parse(read(evidence + 'course-route.json'));
const topics = route.flatMap(group => group[3].map(topic => topic[0]));
const pages = ['index', ...topics, 'mixed-review'];
const oldAnchors = JSON.parse(read('docs/agents/audit-assets/igcse-mathematics-sample-2026-10-26/previous-index-anchors.json'));
const coverage = JSON.parse(read(evidence + 'syllabus-coverage.json'));
const expectedItems = [['N', 20], ['A', 26], ['G', 26], ['S', 18]].flatMap(([prefix, count]) => Array.from({ length: count }, (_, i) => prefix + (i + 1)));
assert.deepEqual(coverage.items.map(item => item.item), expectedItems, 'Complete official item register');
const math = source => source.match(/\$\$[\s\S]*?\$\$|(?<!\$)\$(?!\$)[^\n$]+\$(?!\$)/g) || [];
const questions = source => source.match(/^\*\*Question:\*\* .+$/gm) || [];
const sourceIds = source => [...source.matchAll(/\{#([^}]+)\}|\bid="([^"]+)"/g)].map(m => m[1] || m[2]);
const body = html => html.split('id="content-container"')[1]?.split('<div id="toc"')[0];
const ids = html => [...html.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]);
let taskCount = 0, formulaCount = 0, localLinkCount = 0;
for (const slug of pages) {
  const en = read('igcse/mathematics/' + slug + '.md');
  const zh = read('zh/igcse/mathematics/' + slug + '.md');
  if (slug !== 'index') {
    assert.deepEqual(questions(zh), questions(en), slug + ': paired English prompts and conditions');
    assert.deepEqual(math(zh), math(en), slug + ': paired mathematical reasoning and answers');
    assert.deepEqual(sourceIds(zh), sourceIds(en), slug + ': paired reading positions');
    formulaCount += math(en).length;
    assert(questions(en).length > 0, slug + ': actual tasks');
  }
  for (const prefix of ['', 'zh/']) {
    const source = prefix ? zh : en;
    assert(!source.includes('§'), slug + ': no temporary TeX placeholders');
    assert(!/[\x00-\x08\x0b\x0c\x0e-\x1f]/.test(source), slug + ': no corrupted control characters');
    for (const formula of math(source)) {
      assert(!/(?<!\\)(?:\^circ\b|\dmid\d|\dle\s)/.test(formula), slug + ': preserve degree, stem-key and inequality commands');
    }
    const url = '/' + prefix + 'igcse/mathematics/' + (slug === 'index' ? '' : slug + '/');
    const html = read('_site' + url + 'index.html');
    const content = body(html);
    assert(content, url + ': rendered article');
    assert(source.includes('subject: igcse-mathematics'));
    assert(html.includes('class="reading-layout"'), url + ': shared reading layout');
    assert(source.includes('permalink: ' + url));
    const breadcrumb = html.match(/<nav[^>]*class="site-breadcrumb"[\s\S]*?<\/nav>/)?.[0];
    assert(breadcrumb?.includes('href="/' + prefix + 'igcse/"'), url + ': localized stage breadcrumb');
    if (slug !== 'index') {
      const label = prefix ? 'IGCSE 数学' : 'IGCSE Mathematics';
      assert(breadcrumb.includes('href="/' + prefix + 'igcse/mathematics/">' + label + '</a>'), url + ': localized course breadcrumb');
    }
    if (prefix) assert(source.includes('translation_of: /igcse/mathematics/' + (slug === 'index' ? '' : slug + '/')));
    assert(!content.includes('{{'), url + ': no raw Liquid');
    const contentIds = ids(content);
    assert.equal(new Set(contentIds).size, contentIds.length, url + ': unique rendered IDs');
    assert(!/<details\b[^>]*\bopen(?:\s|=|>)/.test(content), url + ': answers closed by default');
    if (slug === 'index') {
      assert(!source.includes('Core'), url + ': no separate Core route');
      for (const id of oldAnchors[prefix + 'igcse/mathematics/']) assert(contentIds.includes(id), url + ': preserved old ' + id);
      for (const topic of topics) assert(content.includes('href="/' + prefix + 'igcse/mathematics/' + topic + '/"'), url + ': localized route ' + topic);
      assert(content.includes('Lynn'), url + ': PDF attribution');
    } else {
      for (const id of ['next-step', 'sources']) assert(contentIds.includes(id), url + ': ' + id);
      const tasks = [...source.matchAll(/<div class="lesson-check" markdown="1">([\s\S]*?)<\/div>/g)];
      assert(tasks.length > 0, url + ': bounded student attempts');
      for (const [, task] of tasks) {
        assert(!task.includes('<div'), url + ': no nested task boxes');
        assert(task.includes('**Question:**'), url + ': task prompt');
        assert(task.indexOf('**Question:**') < task.indexOf('<details'), url + ': question before help');
        assert.equal((task.match(/<details\b/g) || []).length, 2, url + ': separate hint and solution');
      }
      if (!prefix) taskCount += tasks.length;
      // Multirow matrices must be display math: inline Markdown can erase row breaks.
      for (const formula of math(source).filter(s => !s.startsWith('$$'))) {
        assert(!/\\begin\{[pbBvV]?matrix\}[\s\S]*?\\\\/.test(formula), url + ': inline multirow matrix');
      }
    }
    for (const [, href] of content.matchAll(/href="([^"\s]+)"/g)) {
      const parsed = new URL(href.replace(/&amp;/g, '&'), 'https://academic.kcisec.site' + url);
      if (parsed.origin !== 'https://academic.kcisec.site') continue;
      const dest = path.join(root, '_site', decodeURI(parsed.pathname), parsed.pathname.endsWith('/') ? 'index.html' : '');
      assert(fs.existsSync(dest), url + ': target ' + href);
      if (parsed.hash && dest.endsWith('.html')) assert(ids(fs.readFileSync(dest, 'utf8')).includes(decodeURIComponent(parsed.hash.slice(1))), url + ': anchor ' + href);
      localLinkCount++;
    }
    for (const [, src] of content.matchAll(/<img\b[^>]*src="([^"]+)"/g)) {
      if (!src.startsWith('/assets/')) continue;
      const file = path.join(root, src);
      assert(fs.existsSync(file), url + ': image ' + src);
      if (src.endsWith('.svg')) {
        const svg = fs.readFileSync(file, 'utf8');
        assert(svg.includes('<title') && svg.includes('<desc'), src + ': accessible diagram description');
      }
    }
  }
}
for (const item of coverage.items) for (const location of item.evidence) {
  assert(topics.includes(location.page), item.item + ': mapped course topic');
  const html = body(read('_site/igcse/mathematics/' + location.page + '/index.html'));
  for (const id of [...location.teaching, ...location.independent]) assert(ids(html).includes(id), item.item + ': evidence position ' + location.page + '#' + id);
}
console.log(`IGCSE mathematics: ${pages.length * 2} pages, ${taskCount} bounded tasks, ${formulaCount} paired TeX fragments, ${localLinkCount} local links checked. Content review and student trials remain separate evidence.`);
