// Run after bundle exec jekyll build.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.join(__dirname, '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const ids = html => [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
const body = html => html.split('id="content-container"')[1].split('<div id="toc"')[0];
const built = url => read(path.join('_site', decodeURI(url), url.endsWith('/') ? 'index.html' : ''));

function languagePage(html, href) {
  const config = JSON.parse(html.match(/<script id="site-language-data" type="application\/json">([\s\S]*?)<\/script>/)[1]);
  const links = [...body(html).matchAll(/<a\b([^>]*)>/g)].map(([, tag]) => {
    const attributes = Object.fromEntries([...tag.matchAll(/([\w-]+)="([^"]*)"/g)].map(([, key, value]) => [key, value]));
    const link = { dataset: {}, getAttribute: key => attributes[key] ?? null, hasAttribute: key => Object.hasOwn(attributes, key) };
    Object.defineProperty(link, 'href', { get: () => new URL(attributes.href, href).href, set: value => { attributes.href = value; } });
    return link;
  });
  const select = new EventTarget();
  const destinations = [];
  const document = {
    readyState: 'complete', documentElement: { lang: 'zh-CN', dataset: {} },
    getElementById: id => ({ 'site-language-data': { textContent: JSON.stringify(config) }, siteLanguage: select })[id],
    querySelectorAll: selector => selector === 'a[href]' ? links : []
  };
  const window = {};
  vm.runInNewContext(read('assets/js/site-language.js'), {
    URL, document, window,
    location: { href, pathname: new URL(href).pathname, origin: new URL(href).origin, assign: url => destinations.push(url) },
    localStorage: { getItem: () => 'zh-CN', setItem() {} }
  });
  return { links, select, destinations };
}

// Directory-only pages point to English notes; learning routes link to paired lessons.
const subjectIndexes = ['alevel/as-physics', 'alevel/as-mathematics',
  'igcse/biology', 'igcse/chemistry', 'igcse/mathematics', 'igcse/physics'];
const translatedNotes = ['alevel/as-physics', 'igcse/physics'];
for (const subject of subjectIndexes) {
  const enUrl = `/${subject}/`, zhUrl = `/zh${enUrl}`;
  const en = built(enUrl), zh = built(zhUrl);
  const enSource = read(`${subject}/index.md`), zhSource = read(`zh/${subject}/index.md`);
  for (const field of ['layout', 'mathjax', 'grade', 'subject']) {
    const value = source => source.match(new RegExp(`^${field}: (.+)$`, 'm'))?.[1].trim();
    assert.equal(value(zhSource), value(enSource), `${subject}: ${field}`);
  }
  assert(zhSource.includes(`translation_of: ${enUrl}`), `${subject}: original URL`);
  assert(zhSource.includes(`permalink: ${zhUrl}`), `${subject}: translated URL`);
  for (const [html, language, target] of [[en, 'en', zhUrl], [zh, 'zh-CN', enUrl]]) {
    assert(html.includes(`<html lang="${language}">`), `${subject}: document language`);
    assert(html.match(/<a[^>]*id="languageSwitch"[^>]*>/)?.[0].includes(`href="${target}"`), `${subject}: paired switch`);
    assert(html.includes(`hreflang="en" href="https://academic.kcisec.site${enUrl}"`));
    assert(html.includes(`hreflang="zh-CN" href="https://academic.kcisec.site${zhUrl}"`));
  }
  const enBody = body(en), zhBody = body(zh), zhIds = ids(zhBody);
  for (const id of ids(enBody)) assert(zhIds.includes(id), `${subject}: missing original anchor ${id}`);
  assert.equal(new Set(zhIds).size, zhIds.length, `${subject}: duplicate content IDs`);
  for (const [, href] of zhBody.matchAll(/href="([/#][^"]*)"/g)) {
    const [url, fragment] = href.split('#');
    const target = url ? built(url) : zh;
    if (fragment) assert(ids(target).includes(decodeURI(fragment)), `${subject}: broken link ${href}`);
  }
  assert(/<h2\b[^>]*class="contents-list"[^>]*>目录<\/h2>/.test(zh), `${subject}: Chinese contents`);
  assert(zh.includes('placeholder="搜索目录…"'), `${subject}: Chinese search`);
  assert(zh.includes('aria-label="阅读此页英文版"'), `${subject}: Chinese switch label`);
  const translated = translatedNotes.includes(subject);
  const learningCourse = ['alevel/as-mathematics', 'igcse/mathematics'].includes(subject);
  const scope = learningCourse ? '中文页保留英文练习题，也可切换至英文课程。' : translated ? '本页为中文复习笔记' : '本页提供中文主题目录';
  assert(zhBody.includes(scope), `${subject}: translation scope`);
  if (translated) {
    const math = source => source.match(/\$\$[\s\S]*?\$\$|(?<!\$)\$(?!\$)[^\n$]+\$(?!\$)/g) || [];
    assert.deepEqual(math(zhSource), math(enSource), subject + ': identical equations and numerical conditions');
    if (subject === 'igcse/physics') {
      const questions = source => [...source.matchAll(/^\*\*\d+\.\*\* (.+)$/gm)].map(m => m[1]);
      assert.equal(questions(enSource).length, 26, 'IGCSE: all quick checks retained');
      assert.deepEqual(questions(zhSource), questions(enSource), 'IGCSE: unchanged English questions');
      assert.equal((zhBody.match(/<details\b/g) || []).length, 26, 'IGCSE: independently closed answers');
      assert(!/<details\b[^>]*\bopen(?:\s|=|>)/.test(zhBody), 'IGCSE: answers closed by default');
      assert(zhSource.includes('有符号面积为位移') && enSource.includes('signed area'), 'IGCSE: displacement is not distance');
      assert(zhSource.includes('扣除本底') && enSource.includes('background subtraction'), 'IGCSE: corrected half-life conditions');
    } else {
      const questions = source => [...source.matchAll(/^> (?:A wire|A car|Calculate the specific|\(Proton mass|A battery|Calculate the de Broglie)[^\n]+/gm)].map(m => m[0]);
      assert.equal(questions(enSource).length, 6, 'AS: five examples and their given constants');
      assert.deepEqual(questions(zhSource), questions(enSource), 'AS: unchanged English example prompts');
    }
  }
  assert(!zhBody.includes('{{'), `${subject}: unrendered UI text`);
  const current = 'https://academic.example' + zhUrl;
  const runtime = languagePage(zh, current);
  for (const link of translated || learningCourse ? [] : runtime.links) {
    assert.equal(new URL(link.href).pathname, enUrl, subject + ': English note destination after language initialization');
  }
  if (learningCourse) {
    const firstLesson = subject === 'alevel/as-mathematics' ? 'algebra/' : 'fractions-decimals-and-percentages/';
    assert(runtime.links.some(link => new URL(link.href).pathname === zhUrl + firstLesson), subject + ': Chinese lesson destination');
    for (const link of runtime.links.filter(link => link.getAttribute('hreflang') === 'en')) {
      assert.equal(new URL(link.href).pathname, enUrl, subject + ': explicit English outline destination');
    }
  }
  const headings = [...zhBody.matchAll(/<h2\b[^>]*id="([^"]+)"[^>]*>([\s\S]*?)<\/h2>/g)];
  assert(headings.length > 0, subject + ': topic headings');
  const toc = vm.createContext({ document: { documentElement: { lang: 'zh-CN' } } });
  vm.runInContext(read('assets/js/toc_generator.js'), toc);
  const tree = toc.buildTOCTree(headings.map(([, id, textContent]) => ({ id, tagName: 'H2', textContent })));
  const rendered = toc.renderTOCTree(tree);
  for (const node of tree) {
    assert(ids(enBody).includes(node.id), subject + ': TOC fragment missing in English notes: ' + node.id);
    assert(rendered.includes('href="#' + node.id + '"'), subject + ': generated TOC fragment');
    const switching = languagePage(zh, current + '?review=91#' + encodeURI(node.id));
    switching.select.value = 'en';
    switching.select.dispatchEvent(new Event('change'));
    assert.equal(switching.destinations[0], 'https://academic.example' + enUrl + '?review=91#' + encodeURI(node.id), subject + ': preserve TOC fragment during language switch');
  }
}
console.log(`Bilingual subject index checks passed for ${subjectIndexes.length} pages: front matter, switches, anchors, links and UI text.`);

for (const subject of subjectIndexes) {
  for (const parent of ['/zh/', '/zh/' + subject.split('/')[0] + '/']) {
    assert(built(parent).includes('href="/zh/' + subject + '/"'), parent + ': missing Chinese subject card ' + subject);
  }
}
console.log('Chinese homepage and course pages link to all six indexes.');
