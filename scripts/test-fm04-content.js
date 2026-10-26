// Source identity, rendered learning roles and recovery destinations; not a student trial.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const read = p => fs.readFileSync(path.join(root, p), 'utf8').replace(/\r\n/g, '\n');
const base = 'alevel/a2-further-mathematics/statistics/';
const slugs = ['moment-generating-functions', 'standard-mgfs', 'estimators',
  'confidence-intervals', 'test-power', 'comparing-means', 'paired-tests',
  'variance-tests', 'goodness-of-fit', 'association-tests'];
const questions = s => s.match(/^\*\*Question:\*\* .+$/gm) || [];
const displays = s => [...s.matchAll(/\$\$([\s\S]*?)\$\$/g)].map(m => m[1].replace(/\s+/g, ' ').trim());
const ids = s => [...s.matchAll(/\{#([^}]+)\}|\bid="([^"]+)"/g)].map(m => m[1] || m[2]);
const links = new Map();
let tasks = 0;
for (const slug of ['index', ...slugs]) {
  const en = read(base + slug + '.md'), zh = read('zh/' + base + slug + '.md');
  assert.deepEqual(questions(zh), questions(en), slug + ': English question identity and conditions');
  assert.deepEqual(displays(zh), displays(en), slug + ': paired displayed reasoning');
  assert.deepEqual(ids(zh), ids(en), slug + ': paired stable anchors');
  assert(questions(en).length > 0, slug + ': actual student work');
  for (const prefix of ['', 'zh/']) {
    const src = read(prefix + base + slug + '.md');
    assert.equal(new Set(ids(src)).size, ids(src).length, slug + ': unique task and recovery anchors');
    const url = prefix + base + (slug === 'index' ? '' : slug + '/');
    const html = read('_site/' + url + 'index.html');
    for (const [, formula] of html.matchAll(/\$([^$\n]+)\$/g)) {
      assert(!/<\/?(?:em|strong)>/.test(formula), url + ': Markdown must not consume TeX subscripts');
    }
    assert(src.includes('reading_layout: true') && src.includes('study_page: true'));
    for (const id of ids(src)) assert(html.includes('id="' + id + '"'), url + ': rendered ' + id);
    assert(!/<details\b[^>]*\bopen(?:[\s=>])/.test(html), url + ': help starts closed');
    for (const role of ['worked-example', 'lesson-check']) {
      assert.equal((html.match(new RegExp('<section class="' + role + '"', 'g')) || []).length,
        (src.match(new RegExp('<section class="' + role + '"', 'g')) || []).length,
        url + ': Markdown preserves ' + role);
    }
    if (slug !== 'index') assert(html.includes('class="worked-example"'), url + ': public demonstration');
    const checks = [...html.matchAll(/<section class="lesson-check"[^>]*>([\s\S]*?)<\/section>/g)];
    for (const [, task] of checks) {
      assert(!task.includes('class="lesson-check"'), url + ': no nested tasks');
      assert.equal((task.match(/<details\b/g) || []).length, 2, url + ': separate hint and answer');
      assert(task.includes('Question:'), url + ': visible question');
      tasks++;
    }
    for (const m of html.matchAll(/href="([^"?#]*)(?:\?[^"#]*)?(?:#([^"#]*))?"/g)) {
      const href = m[1];
      if (href && (!href.startsWith('/') || href.startsWith('//'))) continue;
      const target = new URL((href || '/') + (m[2] ? '#' + m[2] : ''), 'https://local.test/' + url);
      if (!href) target.pathname = '/' + url;
      links.set(target.pathname + target.hash, target);
    }
  }
}
for (const slug of slugs) assert(read('_site/' + base + 'index.html').includes(base + slug + '/'), 'route: ' + slug);
for (const url of links.values()) {
  const file = path.join(root, '_site', decodeURIComponent(url.pathname), url.pathname.endsWith('/') ? 'index.html' : '');
  assert(fs.existsSync(file), 'Missing local target: ' + url.pathname);
  if (url.hash) {
    const target = fs.readFileSync(file, 'utf8');
    const id = decodeURIComponent(url.hash.slice(1));
    assert(target.includes('id="' + id + '"'), 'Missing recovery anchor: ' + url.pathname + url.hash);
  }
}
console.log(`FM04: 22 bilingual pages, ${tasks} rendered tasks and ${links.size} local targets checked.`);
