// Run after bundle exec jekyll build. Recompute exam answers and check rendered course links.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const close = (a, b, tolerance) => assert(Math.abs(a - b) < tolerance, `${a} != ${b}`);

assert.equal(193 + 248 + 590 + 1150 - 142 + 844 - 3513, -630);
assert.equal(2493 - 1920 - 2 * 364, -155);
close(-25 * 4.18 * (24.9 - 19.6) / (1.25 / 199.9) / 1000, -88.6, .05);
close(15400 / 1810, 8.51, .005);
close(.77 - .34, .43, 1e-12);
close(-.44 - .34, -.78, 1e-12);
close(-Math.log10(Math.sqrt(1.86e-15)), 7.37, .005);
close(-Math.log10(1.86e-15 / (.1 * 2)), 14.03, .005);
close(10 ** -4.82, 1.51e-5, .005e-5);
close(.100 * .027 / .025, .108, 1e-12);
close(10 ** -5.3, 5.01e-6, .005e-6);
const acid = .014 * .200, hydroxide = .025 * .100;
assert(acid > hydroxide);
close(-Math.log10(1.35e-5 * (acid - hydroxide) / hydroxide), 5.79, .005);
const ka = 10 ** -2.22, concentration = (1.35 / 162.3) / .750;
const approximation = Math.sqrt(ka * concentration);
const exact = 2 * ka * concentration / (ka + Math.sqrt(ka ** 2 + 4 * ka * concentration));
assert(approximation / concentration > .7);
close(exact ** 2 / (concentration - exact), ka, 1e-12);
close(-Math.log10(approximation), 2.09, .005);
close(-Math.log10(exact), 2.24, .005);
close(6.63e-34 * 3e8 / 3.67e-19 * 1e9, 542, .5);
const ethanedioate = (.910 / 134) / .150;
close(ethanedioate, .0453, .00005);
close(ethanedioate * .025 * 2 / 5 / .02235, .0203, .00005);
close(5 * (.0200 * .0200) / .0250, .0800, 1e-12);

// New self-written tasks exercise the skills missing from the original question selection.
close(-Math.log10(.100 * .0100 / .0500), 1.70, .005);
const weakAcidRoot = (k, c) => 2 * k * c / (k + Math.sqrt(k * k + 4 * k * c));
close(-Math.log10(weakAcidRoot(1e-5, .100)), 3.002, .0005);
close(-Math.log10(weakAcidRoot(1e-5, .0100)), 3.51, .005);
close(5 + Math.log10((.00100 + .000200) / (.00100 - .000200)), 5.18, .005);
for (const [enthalpy, entropy, values] of [[40, .100, [10, -10]], [-60, -.150, [-15, 15]]]) {
  close(enthalpy / entropy, 400, 1e-12);
  [300, 500].forEach((temperature, i) => close(enthalpy - temperature * entropy, values[i], 1e-12));
}

// Independent atom and charge counts for the two easily confused ammonia stages.
// Vectors are [Cu, N, H, O, charge].
const species = {
  aqua: [1, 0, 12, 6, 2], ammonia: [0, 1, 3, 0, 0],
  precipitate: [1, 0, 10, 6, 0], ammonium: [0, 1, 4, 0, 1],
  ammine: [1, 4, 16, 2, 2], hydroxide: [0, 0, 1, 1, -1], water: [0, 0, 2, 1, 0]
};
for (const reaction of [
  {aqua: -1, ammonia: -2, precipitate: 1, ammonium: 2},
  {precipitate: -1, ammonia: -4, ammine: 1, hydroxide: 2, water: 2}
]) {
  for (let column = 0; column < 5; column++) {
    assert.equal(Object.entries(reaction).reduce((sum, [name, coefficient]) => sum + coefficient * species[name][column], 0), 0);
  }
}

const course = 'alevel/a2-chemistry';
const slugs = ['index', 'thermodynamics', 'electrode-potentials', 'acids-bases-and-buffers',
  'period-3', 'transition-metals', 'ions-in-solution'];
const read = file => fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n');
const math = source => source.match(/\$\$[\s\S]*?\$\$|\$[^$\r\n]+\$/g) || [];
const ids = html => [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
const headings = html => [...html.matchAll(/<h[2-4]\b[^>]*id="([^"]+)"/g)].map(match => match[1]);
const body = html => html.split('id="content-container"')[1].split('<div id="toc"')[0];
const built = url => read(path.join('_site', decodeURI(url), url.endsWith('/') ? 'index.html' : ''));
const imageSources = source => [...source.matchAll(/!\[[^\]]*\]\(([^)]+)\)/g)].map(match => match[1]);
let groups = 0;
for (const slug of slugs) {
  const url = `/${course}/${slug === 'index' ? '' : slug + '/'}`;
  const en = read(`${course}/${slug}.md`), zh = read(`zh/${course}/${slug}.md`);
  assert(en.includes('lang: en\n'), `${slug}: English metadata`);
  assert(zh.includes(`translation_of: ${url}\n`), `${slug}: translation pair`);
  assert(zh.includes(`permalink: /zh${url}\n`), `${slug}: Chinese route`);
  assert.deepEqual(math(zh), math(en), `${slug}: formula parity`);
  assert.deepEqual(imageSources(zh), imageSources(en), `${slug}: image parity`);
  assert.deepEqual(zh.match(/https:\/\/[^)\s]+/g) || [], en.match(/https:\/\/[^)\s]+/g) || [], `${slug}: source parity`);
  assert.deepEqual(zh.match(/^\*\*OxfordAQA CH03[^\n]+\*\*$/gm) || [],
    en.match(/^\*\*OxfordAQA CH03[^\n]+\*\*$/gm) || [], `${slug}: original marks`);
  if (slug !== 'index') {
    const count = (en.match(/^\*\*OxfordAQA CH03[^\n]+\*\*$/gm) || []).length;
    groups += count;
    assert(count > 0, `${slug}: authentic exam groups`);
    for (const section of ['introduction', 'method', 'practice', 'quick-reference']) {
      assert(en.includes(`{#${section}}`) && zh.includes(`{#${section}}`), `${slug}: ${section}`);
    }
    // Authentic exam prompts must remain English in both versions; explanations may differ.
    for (const question of en.split(/^### Q\d+[^\n]*\n/m).slice(1)) {
      if (!question.split('<details')[0].includes('**OxfordAQA CH03')) continue;
      for (const paragraph of question.split('<details')[0].trim().split(/\n\s*\n/)) {
        if (/^\*\*(?:Source|Course note|来源|课程说明)/.test(paragraph) || /^<span/.test(paragraph) || paragraph.startsWith('![')) continue;
        assert(zh.includes(paragraph), `${slug}: exam prompt parity ${paragraph.slice(0, 100)}`);
      }
    }
    assert(!/<summary>[^<]*(?:Hint|Solution)/.test(zh), `${slug}: translated disclosure labels`);
  }
  const enHtml = built(url), zhHtml = built(`/zh${url}`);
  assert.deepEqual(headings(body(zhHtml)), headings(body(enHtml)), `${slug}: identical heading IDs`);
  for (const [html, source, lang, target] of [[enHtml, en, 'en', `/zh${url}`], [zhHtml, zh, 'zh-CN', url]]) {
    const content = body(html);
    assert.equal(new Set(ids(content)).size, ids(content).length, `${slug}: duplicate IDs`);
    assert(html.includes(`<html lang="${lang}">`), `${slug}: document language`);
    assert(html.match(/<a[^>]*id="languageSwitch"[^>]*>/)?.[0].includes(`href="${target}"`), `${slug}: switch destination`);
    assert(html.includes(`hreflang="${lang === 'en' ? 'zh-CN' : 'en'}" href="https://academic.kcisec.site${target}"`), `${slug}: alternate`);
    assert(!html.includes('markdown="1"'), `${slug}: unprocessed Markdown`);
    assert(!/<details\b[^>]*\bopen(?:\s|=|>)/.test(html), `${slug}: exposed answer`);
    assert.equal((source.match(/<details\b/g) || []).length, (content.match(/<details\b/g) || []).length, `${slug}: rendered disclosures`);
    for (const [, href] of content.matchAll(/(?:href|src)="([/#][^"]*)"/g)) {
      const [local, fragment] = href.split('#');
      const destination = local ? built(local) : html;
      if (fragment) assert(ids(destination).includes(decodeURI(fragment)), `${slug}: missing anchor ${href}`);
      if (lang === 'zh-CN' && local.startsWith(`/${course}/`)) assert.fail(`${slug}: Chinese learning link points to English ${href}`);
    }
  }
}
assert.equal(groups, 32);
const subjects = read('_data/subjects.yml');
assert(/id: a2chemistry\s+name: A2 Chemistry\s+name_zh: A2化学\s+icon:/.test(subjects));
for (const prefix of ['', '/zh']) {
  const level = built(`${prefix}/alevel/`);
  assert(level.includes(`href="${prefix}/${course}/"`), 'Localized subject card');
  assert(level.includes(prefix ? 'A2化学' : 'A2 Chemistry'), 'Localized subject name');
}
console.log('CH03 passed: independent exam calculations, atom/charge balance, 7 bilingual page pairs, 32 authentic exam groups, formulas, marks, anchors, source/image parity, closed answers and localized links.');
