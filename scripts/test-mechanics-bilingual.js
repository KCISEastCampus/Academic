// Run after Jekyll build; extend slugs as each full Chinese lesson is completed.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { init } = require('../assets/vendor/mathjax/3.2.2/es5/node-main.js');
const root = path.join(__dirname, '..');
const course = 'alevel/a2-mathematics/mechanics';
const slugs = fs.readdirSync(path.join(root, `zh/${course}`)).filter(file => file.endsWith('.md')).map(file => file.slice(0, -3));
const read = file => fs.readFileSync(path.join(root, file), 'utf8').replace(/\r\n/g, '\n');
const math = text => text.match(/\$\$[\s\S]*?\$\$|\$[^$\r\n]+\$/g) || [];
const body = html => html.split('id="content-container"')[1].split('<div id="toc"')[0];
const ids = html => [...html.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]);
const headings = html => [...html.matchAll(/<h[2-4]\b[^>]*id="([^"]+)"/g)].map(m => m[1]);
const built = url => read(path.join('_site', decodeURI(url), url.endsWith('/') ? 'index.html' : ''));
const formulas = new Set();

for (const slug of [...slugs, 'course-entry']) {
  const source = slug === 'course-entry' ? course : `${course}/${slug}`;
  const enUrl = `/${source}/`, zhUrl = `/zh${enUrl}`;
  const en = read(`${source}.md`), zh = read(`zh/${source}.md`);
  assert.deepEqual(math(zh), math(en), `${slug}: identical formula sequence`);
  for (const formula of math(zh)) formulas.add(formula);
  assert(zh.includes(`lang: zh-CN\ntranslation_of: ${enUrl}\npermalink: ${zhUrl}`));
  for (const prompt of en.match(/^(?:\*\*Question:\*\*|\*\*Self-written (?:task|diagnostic)\.\*\*|\*\*Retry, with this panel closed:\*\*).*$/gm) || [])
    assert(zh.includes(prompt), `${slug}: preserve English question ${prompt.slice(0, 80)}`);
  for (const [, prompt] of en.matchAll(/^\*\*[^*\n]*Question:\*\*\s*(.+)$/gm))
    assert(zh.includes(prompt), `${slug}: preserve labelled English question ${prompt.slice(0, 80)}`);
  for (const q of (en.split('## Practice')[1] || '').split(/^### Q[^\n]*\n\n/m).slice(1))
    assert(zh.includes(q.split('<details')[0].trim()), `${slug}: preserve full Q prompt`);
  for (const q of en.matchAll(/\*\*Question:\*\*[^\n]*(?:position|velocity)\n\n\$\$[\s\S]*?\$\$\n\n([^\n]+)/g))
    assert(zh.includes(q[1]), `${slug}: preserve multipart English example instruction`);
  assert.equal((zh.match(/<details\b/g) || []).length, (en.match(/<details\b/g) || []).length);
  assert(!/<summary>[^<]*(?:Hint|Solution|check)/i.test(zh), 'Chinese disclosure labels');
  assert.deepEqual([...zh.matchAll(/!\[[^\]]*\]\(([^)]+)\)/g)].map(m => m[1]),
    [...en.matchAll(/!\[[^\]]*\]\(([^)]+)\)/g)].map(m => m[1]), 'Images preserved');
  const enHtml = built(enUrl), zhHtml = built(zhUrl);
  assert.deepEqual(headings(body(zhHtml)), headings(body(enHtml)), `${slug}: matching anchors`);
  for (const [html, lang, target] of [[enHtml, 'en', zhUrl], [zhHtml, 'zh-CN', enUrl]]) {
    assert(html.includes(`<html lang="${lang}">`));
    assert(html.match(/<a[^>]*id="languageSwitch"[^>]*>/)?.[0].includes(`href="${target}"`));
    const content = body(html);
    assert((lang === 'en' ? en : zh).includes('reading_layout: true'), `${slug}: shared reading layout`);
    const sourceDetails = ((lang === 'en' ? en : zh).match(/<details\b/g) || []).length;
    assert.equal((content.match(/<details\b/g) || []).length, sourceDetails, `${slug}: disclosures survive rendering`);
    assert.equal((content.match(/class="lesson-check"/g) || []).length,
      ((lang === 'en' ? en : zh).match(/class="lesson-check"/g) || []).length, `${slug}: task boundaries survive rendering`);
    assert.equal(new Set(ids(content)).size, ids(content).length, 'Unique IDs');
    assert(!/<details[^>]*\bopen\b/.test(content), 'Answers start closed');
    const decoded = html.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
    for (const [, formula] of (lang === 'en' ? en : zh).matchAll(/\$\$([\s\S]*?)\$\$/g))
      assert(decoded.includes(formula), `${slug}: intact display formula ${formula}`);
    for (const [, href] of content.matchAll(/href="([/#][^"]*)"/g)) {
      const [url, fragment] = href.split('#');
      const destination = url ? built(url) : html;
      if (fragment && !url.endsWith('.pdf')) assert(ids(destination).includes(decodeURI(fragment)), `Missing anchor ${href}`);
    }
  }
}
init({ loader: { load: ['input/tex', 'output/svg'] }, tex: { packages: ['base', 'ams'] } }).then(mj => {
  for (const formula of formulas) {
    const display = formula.startsWith('$$'), n = display ? 2 : 1;
    const svg = mj.startup.adaptor.outerHTML(mj.tex2svg(formula.slice(n, -n), { display }));
    assert(!svg.includes('data-mml-node="merror"') && !svg.includes('data-mjx-error'), formula);
  }
  console.log(`Mechanics bilingual: ${slugs.length + 1} pairs including reference and entry; English prompts, formulas, anchors, images, switches, links and ${formulas.size} unique TeX fragments passed.`);
}).catch(e => { console.error(e); process.exitCode = 1; });
