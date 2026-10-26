const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = path.join(__dirname, '..');
const read = p => fs.readFileSync(path.join(root, p), 'utf8').replace(/\r\n/g, '\n');
const slugs = ['poisson-distribution','continuous-random-variables','exponential-distribution','normal-distribution','estimation','hypothesis-testing','mean-tests'];
const base = 'alevel/a2-mathematics/statistics';
const prompts = s => s.match(/^\*\*Question:\*\* .+$/gm) || [];
const ids = s => [...s.matchAll(/\{#([^}]+)\}|\bid="([^"]+)"/g)].map(m => m[1] || m[2]);
const math = s => [...new Set([...s.matchAll(/\$\$([\s\S]*?)\$\$|(?<!\$)\$([^$\n]+)\$(?!\$)/g)].map(m => (m[1] ?? m[2]).replace(/\s+/g,' ').trim()).filter(t => !/^[a-zA-Z]$/.test(t)))].sort();
let checked = 0;
for (const slug of slugs) {
  const en = read(`${base}/${slug}.md`), zh = read(`zh/${base}/${slug}.md`);
  assert.deepEqual(prompts(zh), prompts(en), `${slug}: same English questions/conditions`);
  assert(prompts(en).length > 0, `${slug}: actual tasks`);
  assert.deepEqual(math(zh), math(en), `${slug}: paired mathematical statements`);
  assert.deepEqual(ids(zh), ids(en), `${slug}: stable paired learning anchors`);
  for (const prefix of ['', 'zh/']) {
    const src = read(`${prefix}${base}/${slug}.md`);
    assert(src.includes('reading_layout: true') && src.includes('study_page: true'));
    const html = read(`_site/${prefix}${base}/${slug}/index.html`);
    assert(!/<details\b[^>]*\bopen(?:[\s=>])/.test(html), 'help starts closed');
    assert(html.includes('class="worked-example"'), 'visible complete example');
    const tasks = [...html.matchAll(/<section class="lesson-check"[^>]*>([\s\S]*?)<\/section>/g)];
    assert(tasks.length > 0, `${slug}: rendered independent tasks`);
    for (const [, task] of tasks) {
      assert(!task.includes('class="lesson-check"'), 'no nested tasks');
      assert.equal((task.match(/<details\b/g)||[]).length,2, `${slug}: separate hint and solution`);
    }
    for (const id of ids(src)) assert(html.includes(`id="${id}"`), `${slug} rendered ${id}`);
    checked += tasks.length;
  }
}
const enIndex = read(`${base}.md`), zhIndex = read(`zh/${base}.md`);
assert.deepEqual(prompts(enIndex.split('<details markdown="1" id="legacy-reference">')[0]), prompts(zhIndex), 'course mixed/later tasks match');
for (const prefix of ['', 'zh/']) {
  const html = read(`_site/${prefix}${base}/index.html`);
  for (const slug of slugs) assert(html.includes(`${base}/${slug}/`), `route: ${slug}`);
  for (const id of ['mixed-review','later-review','mixed-a','mixed-b','mixed-c','later-a','later-b']) assert(html.includes(`id="${id}"`));
}
const old = JSON.parse(read('docs/agents/audit-assets/ma04-full-2026-10-26/legacy-ids.json'));
const index = read(`_site/${base}/index.html`);
for (const id of old) assert(index.includes(`id="${id}"`), `legacy heading ${id}`);
// Check actual referenced local targets and fragments, including recovery links.
const links = new Map();
for (const prefix of ['', 'zh/']) for (const slug of ['', ...slugs]) {
  const file = `_site/${prefix}${base}/${slug ? slug+'/' : ''}index.html`;
  for (const m of read(file).matchAll(/href="([^"?#]*)(?:\?[^"#]*)?(?:#([^"#]*))?"/g)) {
    const url = m[1], hash = m[2];
    if (url && (!url.startsWith('/') || url.startsWith('//'))) continue;
    const dest = url ? '_site'+decodeURIComponent(url)+(url.endsWith('/')?'index.html':'') : file;
    assert(fs.existsSync(path.join(root,dest)), `missing ${url}`);
    if (hash && dest.endsWith('.html')) assert(read(dest).includes(`id="${decodeURIComponent(hash)}"`), `missing ${url}#${hash}`);
    links.set(`${dest}#${hash||''}`,true);
  }
}
console.log(`MA04: 7 bilingual lessons, ${checked} rendered tasks, ${old.length} legacy headings and ${links.size} local references checked.`);
