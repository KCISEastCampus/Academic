// Run after Jekyll build; an optional argument selects a separate build directory.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = path.join(__dirname, '..');
const builtRoot = path.resolve(process.argv[2] || path.join(root, '_site'));
const slugs = ['index', 'paper-3', 'paper-4', 'paper-5', 'prerequisites',
  'ecology', 'photosynthesis', 'respiration', 'energy-production', 'nutrient-cycles', 'inheritance', 'evolution',
  'receptors', 'nervous-communication', 'muscles', 'plant-responses', 'homeostasis', 'gene-expression', 'gene-technology',
  'experimental-design', 'data-skills', 'synoptic-writing'];
const read = file => fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n');
const built = url => path.join(builtRoot, decodeURIComponent(url), url.endsWith('/') ? 'index.html' : '');
const ids = html => [...html.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]);
const body = html => html.split('id="content-container"')[1].split('<div id="toc"')[0];
const math = source => source.match(/\$\$[\s\S]*?\$\$|\$[^$\n]+\$/g) || [];
const tasks = source => [...source.matchAll(/<!-- task:([^ ]+) -->([\s\S]*?)<!-- \/task:\1 -->/g)].map(m => m[2]);
for (const slug of slugs) {
  const url = '/alevel/a2-biology/' + (slug === 'index' ? '' : slug + '/');
  const en = read(path.join(root, 'alevel/a2-biology', slug + '.md'));
  const zh = read(path.join(root, 'zh/alevel/a2-biology', slug + '.md'));
  assert(zh.includes('translation_of: ' + url), slug + ': translation metadata');
  assert(en.includes('permalink: ' + url), slug + ': English route');
  assert(zh.includes('permalink: /zh' + url), slug + ': Chinese route');
  assert.deepEqual(math(zh), math(en), slug + ': bilingual formulas');
  assert.deepEqual(tasks(zh), tasks(en), slug + ': marked English tasks');
  assert.deepEqual(zh.match(/^> .+$/gm) || [], en.match(/^> .+$/gm) || [], slug + ': quoted English tasks');
  for (const formula of math(en)) assert(!formula.includes('|'), slug + ': unsafe TeX pipe');
  const enHtml = read(built(url)), zhHtml = read(built('/zh' + url));
  const enBody = body(enHtml), zhBody = body(zhHtml);
  const headings = html => [...html.matchAll(/<h([2-4])\b[^>]*id="([^"]+)"/g)].map(m => [Number(m[1]), m[2]]);
  assert.deepEqual(headings(zhBody), headings(enBody), slug + ': language-switch anchors');
  for (const [source, content] of [[en, enBody], [zh, zhBody]]) {
    const tree = headings(content);
    let previous = 1;
    for (const [level] of tree) {
      assert(level <= previous + 1, slug + ': skipped heading level');
      previous = level;
    }
    if (tree.some(([level]) => level === 3)) {
      assert(source.includes("toc_headings: 'h2, h3'"), slug + ': subtopics missing from TOC');
    }
    if (slug === 'data-skills') {
      assert(/<h3\b[^>]*id="chi-model-task"[\s\S]*?<!-- task:chi-transfer -->/.test(content), 'chi transfer needs its own sibling section');
    }
    const parents = {
      'data-skills': { 'chi-model-task': 'chi-squared' },
      'plant-responses': { direction: 'iaa', ethene: 'other-signals', aba: 'other-signals' },
      evolution: { 'selection-patterns': 'natural-selection' },
      'nutrient-cycles': { climate: 'carbon' }
    };
    let section;
    for (const [level, id] of tree) {
      if (level === 2) section = id;
      if (parents[slug]?.[id]) assert.equal(section, parents[slug][id], slug + ': wrong parent for ' + id);
    }
  }
  assert.equal((zhBody.match(/<details/g) || []).length, (enBody.match(/<details/g) || []).length, slug + ': help parity');
  for (const [html, content, lang, target] of [[enHtml, enBody, 'en', '/zh' + url], [zhHtml, zhBody, 'zh-CN', url]]) {
    assert(html.includes(`<html lang="${lang}">`), slug + ': document language');
    assert(html.match(/<a[^>]*id="languageSwitch"[^>]*>/)?.[0].includes(`href="${target}"`), slug + ': language switch');
    assert.equal(new Set(ids(content)).size, ids(content).length, slug + ': duplicate IDs');
    assert(!/<details\b[^>]*\bopen(?:\s|>|=)/.test(content), slug + ': answers must start closed');
    assert(!/[CD]:[\\/](?:Users|ProgramData|GitHub)/.test(content), slug + ': leaked local source path');
    assert(!content.includes('{{'), slug + ': unrendered Liquid');
    for (const [, attributes] of content.matchAll(/<a\b([^>]*)>(?:English|中文)<\/a>/g)) {
      assert(/\bhreflang="(?:en|zh-CN)"/.test(attributes), slug + ': explicit language link must bypass automatic localization');
    }
    for (const [, attributes] of content.matchAll(/<img\b([^>]*)>/g)) {
      assert(/\balt="[^"]+"/.test(attributes), slug + ': missing image description');
    }
    for (const [, href] of content.matchAll(/(?:href|src)="([/#][^"]*)"/g)) {
      const [route, fragment] = href.split('#');
      const targetFile = route ? built(route) : built(lang === 'en' ? url : '/zh' + url);
      assert(fs.existsSync(targetFile), slug + ': missing ' + href);
      if (fragment) assert(ids(read(targetFile)).includes(decodeURIComponent(fragment)), slug + ': missing anchor ' + href);
    }
  }
}
// Independently check the numerical models underlying the adapted teaching examples.
const near = (actual, expected, tolerance = 1e-8) => assert(Math.abs(actual - expected) < tolerance);
near([22, 45, 19].reduce((sum, value, i) => sum + (value - [21.5, 43, 21.5][i]) ** 2 / [21.5, 43, 21.5][i], 0), 0.3953488372093023);
near(2 * .004 * .996 * 340000000, 2709120);
near(Math.PI * .5 ** 2 * 14 / 20 * 60, 32.98672286269283);
assert(read(built('/alevel/')).includes('href="/alevel/a2-biology/"'), 'English subject card');
assert(read(built('/zh/alevel/')).includes('href="/zh/alevel/a2-biology/"'), 'Chinese subject card');
console.log(`PASS: ${slugs.length} Biology page pairs; formulas, tasks, anchors, help, links, image descriptions, navigation and numerical checks.`);
