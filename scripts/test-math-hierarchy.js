const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const site = path.resolve(__dirname, '../_site');
const read = url => fs.readFileSync(path.join(site, url, 'index.html'), 'utf8');
const text = html => html.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
const units = [
  ['alevel/a2-mathematics/', 'a2-mathematics-overview', 'A2 Mathematics', 'A2 数学', 'A2 Pure Mathematics', 'A2 纯数学'],
  ['alevel/a2-mathematics/statistics/', 'a2-mathematics-overview', 'A2 Mathematics', 'A2 数学', 'A2 Statistics', 'A2 统计学'],
  ['alevel/a2-mathematics/mechanics/', 'a2-mathematics-overview', 'A2 Mathematics', 'A2 数学', 'A2 Mechanics', 'A2 力学'],
  ['alevel/a2-further-mathematics/', 'a2-further-mathematics-overview', 'A2 Further Mathematics', 'A2 高等数学', 'A2 Further Pure Mathematics', 'A2 高等纯数学'],
  ['alevel/a2-further-mathematics/statistics/', 'a2-further-mathematics-overview', 'A2 Further Mathematics', 'A2 高等数学', 'A2 Further Statistics', 'A2 高等统计'],
];
function pages(dir) {
  return fs.readdirSync(path.join(site, dir), {withFileTypes:true}).flatMap(entry =>
    entry.isDirectory() ? pages(dir + entry.name + '/') : entry.name === 'index.html' ? [dir] : []);
}
let checked = 0;
for (const prefix of ['', 'zh/']) {
  const urls = [...pages(prefix + 'alevel/a2-mathematics/'), ...pages(prefix + 'alevel/a2-further-mathematics/')];
  for (const url of urls) {
    const html = read(url);
    const breadcrumb = html.match(/<nav\b[^>]*class="site-breadcrumb"[^>]*>([\s\S]*?)<\/nav>/)?.[1];
    if (!breadcrumb) { assert(/http-equiv="refresh"/.test(html), url + ': only redirects omit breadcrumbs'); continue; }
    const canonical = url.replace(/^zh\//, '');
    const unit = units.filter(u => canonical.startsWith(u[0])).sort((a,b)=>b[0].length-a[0].length)[0];
    assert(unit, url + ': known unit');
    const [root, hub, enFamily, zhFamily, enUnit, zhUnit] = unit;
    const actual = [...breadcrumb.matchAll(/<a\b[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g)]
      .map(m => [m[1], text(m[2])]);
    const expected = [['/' + prefix, prefix ? '首页' : 'Home'],
      ['/' + prefix + 'alevel/', 'A-Level'],
      ['/' + prefix + 'alevel/' + hub + '/', prefix ? zhFamily : enFamily]];
    if (canonical !== root) expected.push(['/' + prefix + root, prefix ? zhUnit : enUnit]);
    assert.deepEqual(actual, expected, url + ': subject → parallel unit → lesson');
    assert.equal((breadcrumb.match(/aria-current="page"/g)||[]).length, 1, url + ': one current page');
    const title = text(html.match(/<h1\b[^>]*class="subject-page-title"[^>]*>([\s\S]*?)<\/h1>/)[1]);
    assert.equal(text(breadcrumb.match(/aria-current="page"[^>]*>([\s\S]*?)<\/li>/)[1]), title);
    checked++;
  }
  for (const hub of ['a2-mathematics-overview', 'a2-further-mathematics-overview']) {
    const html = read(prefix + 'alevel/' + hub + '/');
    const main = html.split('id="content-container"')[1].split('id="toc"')[0];
    for (const id of ['pure', 'statistics', 'mechanics']) assert(main.includes('id="' + id + '"'));
    assert(!html.includes('http-equiv="refresh"'), 'real hub, not a redirect to pure');
    if (hub.includes('further')) assert(!main.includes('/a2-further-mathematics/mechanics/'), 'FM05 not fabricated');
    const breadcrumb = html.match(/<nav\b[^>]*class="site-breadcrumb"[^>]*>([\s\S]*?)<\/nav>/)[1];
    assert.equal((breadcrumb.match(/<a\b/g)||[]).length, 2, 'hub ends at the subject');
    checked++;
  }
  for (const entry of [prefix, prefix + 'alevel/']) {
    const html = read(entry);
    for (const [family,count] of [['mathematics',3],['further-mathematics',2]]) {
      const section = html.match(new RegExp('<section aria-labelledby="' + family + '-units"[^>]*>([\\s\\S]*?)</section>'))[1];
      assert.equal((section.match(/class="modern-subject-card"/g)||[]).length,count);
      const cardPaths = [...section.matchAll(/href="([^"]+)" class="modern-subject-card"/g)].map(m=>m[1].replace(/\/?$/, '/'));
      const familyRoot = '/' + prefix + 'alevel/a2-' + family + '/';
      const expectedPaths = [familyRoot, familyRoot + 'statistics/'];
      if (family === 'mathematics') expectedPaths.push(familyRoot + 'mechanics/');
      assert.deepEqual(cardPaths, expectedPaths, 'parallel units in course-code order');
      assert(section.includes('href="/' + prefix + 'alevel/a2-' + family + '-overview/"'));
      assert(section.includes('class="course-family-link"'), 'separate subject heading and all-units action');
    }
  }
}
const index = JSON.parse(fs.readFileSync(path.join(site,'assets/search.json'),'utf8'));
for (const prefix of ['', 'zh/']) {
  for (const [url,section] of [
    ['alevel/a2-further-mathematics/statistics/standard-mgfs/', prefix ? 'A2 高等数学 · 统计学' : 'A2 Further Math - Statistics'],
    ['alevel/a2-further-mathematics-overview/', prefix ? 'A2 高等数学' : 'A2 Further Mathematics'],
    ['alevel/a2-mathematics-overview/', prefix ? 'A2 数学' : 'A2 Mathematics'],
  ]) {
    assert.equal(index.find(item=>item.url==='/' + prefix + url)?.section,section);
    assert(read(prefix+url).includes('data-pagefind-meta="section[content]" content="'+section+'"'));
  }
}
console.log(`Mathematics hierarchy: ${checked} subject/unit/lesson breadcrumbs, grouped discovery and both search classifications passed.`);
