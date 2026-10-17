// Run after bundle exec jekyll build; --source-only checks calculations and bilingual sources without using stale output.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const sourceOnly = process.argv.includes('--source-only');
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

// Recompute the newly supplied quantities independently of the prose answers.
close(10 ** -2.20 / 10 ** -4.95, 562.34, .005);
close(.4 ** 2 / (.2 * .2), 4, 1e-12);
close(2 * 192.77 - 191.61 - 3 * 130.68, -198.11, 1e-10);
close(2 * 186.90 - 130.68 - 223.08, 20.04, 1e-10);
close((2 * 186.90 - 130.68 - 223.08) / 2, 10.02, 1e-10);
assert.equal(2493 - 2326, 167);
assert(1803 - 10 < 1800 && 1800 < 1803 + 10);
assert(1740 - 10 > 1600);
close(2 * 294.19, 588.38, 1e-10);

const course = 'alevel/a2-chemistry';
const slugs = ['index', 'thermodynamics', 'electrode-potentials', 'acids-bases-and-buffers',
  'period-3', 'transition-metals', 'ions-in-solution'];
const read = file => fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n');
const math = source => source.match(/\$\$[\s\S]*?\$\$|\$[^$\r\n]+\$/g) || [];
const ids = html => [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
const headings = html => [...html.matchAll(/<h[2-4]\b[^>]*id="([^"]+)"/g)].map(match => match[1]);
const body = html => html.split('id="content-container"')[1].split('<div id="toc"')[0];
const built = url => read(path.join('_site', decodeURI(url), url.endsWith('/') ? 'index.html' : ''));
const numericalRows = source => (source.match(/^\| (?:[ABC]|\d+\.\d+) \|[^\n]*$/gm) || [])
  .map(row => row.split('|').map(cell => cell.trim()).filter(cell => /^(?:[ABC]|[-+]?\d+(?:\.\d+)?)$/.test(cell)));
const numericLastCells = source => [...source.matchAll(/^\|[^\n]*\| ([-+]?\d+\.\d+) \|$/gm)].map(match => match[1]);
const imageSources = source => [...source.matchAll(/!\[[^\]]*\]\(([^)]+)\)/g)].map(match => match[1]);
const parents = source => {
  const stack = [], result = {};
  for (const [, marks, id] of source.matchAll(/^(#{2,4}) [^\n]*\{#([^}]+)\}/gm)) {
    while (stack.length && stack.at(-1).level >= marks.length) stack.pop();
    result[id] = stack.at(-1)?.id;
    stack.push({level: marks.length, id});
  }
  return result;
};
const electrodeSource = read(`${course}/electrode-potentials.md`);
const records = [...electrodeSource.matchAll(/^\| ([ABC]) \| (1\.\d{3}) \| (1\.\d{3}) \| (1\.\d{3}) \|$/gm)]
  .map(([, set, ...values]) => ({set, values: values.map(Number)}));
assert.deepEqual(records.map(record => record.set), ['A', 'B', 'C']);
const means = records.map(({values}) => values.reduce((sum, value) => sum + value, 0) / values.length);
records.forEach(({values}) => close(Math.max(...values) - Math.min(...values), .002, 1e-12));
[1.097, 1.039, 1.077].forEach((value, i) => close(means[i], value, 1e-12));
close(means[2] + (1.100 - 1.080), means[0], 1e-12);
assert(means[1] < means[0]);
// The deliberately non-standard record is also physically plausible: Nernst is an author check, not a student requirement.
const nonStandardIdeal = 1.10 - 8.314462618 * 298 / (2 * 96485.33212) * Math.log(1 / .0100);
assert(Math.abs(means[1] - nonStandardIdeal) < .003);
const acidSource = read(`${course}/acids-bases-and-buffers.md`);
const curve = acidSource.split('{#curve-construction}')[1].split('For example,')[0];
const curvePoints = [...curve.matchAll(/^\| (\d+\.\d) \| [^\n]*? \| (\d+\.\d{2}) \|$/gm)]
  .map(([, volume, ph]) => [Number(volume), Number(ph)]);
assert.equal(curvePoints.length, 6);
for (const [volume, ph] of curvePoints) {
  const excess = .100 * (.0250 - volume / 1000), total = .0250 + volume / 1000;
  const predicted = Math.abs(excess) < 1e-12 ? 7 : excess > 0
    ? -Math.log10(excess / total) : 14 + Math.log10(-excess / total);
  close(ph, predicted, .005);
}

let groups = 0;
for (const slug of slugs) {
  const url = `/${course}/${slug === 'index' ? '' : slug + '/'}`;
  const en = read(`${course}/${slug}.md`), zh = read(`zh/${course}/${slug}.md`);
  assert(en.includes('lang: en\n'), `${slug}: English metadata`);
  assert(zh.includes(`translation_of: ${url}\n`), `${slug}: translation pair`);
  assert(zh.includes(`permalink: /zh${url}\n`), `${slug}: Chinese route`);
  assert.deepEqual(math(zh), math(en), `${slug}: formula parity`);
  assert.deepEqual(numericalRows(zh), numericalRows(en), `${slug}: raw numeric records`);
  assert.deepEqual(numericLastCells(zh), numericLastCells(en), `${slug}: numeric table values`);
  assert.deepEqual(imageSources(zh), imageSources(en), `${slug}: image parity`);
  assert.deepEqual(zh.match(/^>[^\n]*$/gm) || [], en.match(/^>[^\n]*$/gm) || [], `${slug}: all quoted exam prompts`);
  assert.deepEqual(parents(zh), parents(en), `${slug}: source heading ownership`);
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
    for (const question of en.split(/^#{3,4} Q\d+[^\n]*\n/m).slice(1)) {
      if (!question.split('<details')[0].includes('**OxfordAQA CH03')) continue;
      for (const paragraph of question.split('<details')[0].trim().split(/\n\s*\n/)) {
        if (/^\*\*(?:Source|Course note|来源|课程说明)/.test(paragraph) || /^<span/.test(paragraph) || paragraph.startsWith('![')) continue;
        assert(zh.includes(paragraph), `${slug}: exam prompt parity ${paragraph.slice(0, 100)}`);
      }
    }
    assert(!/<summary>[^<]*(?:Hint|Solution)/.test(zh), `${slug}: translated disclosure labels`);
  }
  for (const [source, language] of [[en, 'en'], [zh, 'zh']]) {
    const tree = parents(source);
    if (slug === 'transition-metals') {
      assert.equal(tree.q5, 'haemoglobin', `${language}: CO question belongs to haemoglobin`);
      assert.equal(tree.q8, 'autocatalysis', `${language}: autocatalysis question ownership`);
    }
    if (slug === 'electrode-potentials') {
      assert.equal(tree['rp6-measurement'], undefined, `${language}: RP6 is an independent main section`);
      assert.equal(tree['salt-bridge'], 'rp6-measurement');
      assert.equal(tree['rp6-data'], 'rp6-measurement');
    }
    if (slug === 'ions-in-solution') assert.equal(tree['excess-ammonia'], undefined);
    if (slug === 'index') {
      assert.equal(tree.resources, undefined);
      assert.equal(tree.textbook, 'resources');
    }
  }
  if (sourceOnly) continue;
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
for (const prefix of sourceOnly ? [] : ['', '/zh']) {
  const level = built(`${prefix}/alevel/`);
  assert(level.includes(`href="${prefix}/${course}/"`), 'Localized subject card');
  assert(level.includes(prefix ? 'A2化学' : 'A2 Chemistry'), 'Localized subject name');
}
console.log(sourceOnly
  ? 'CH03 sources passed: calculations, entropy/curve/EMF data, atom/charge balance, 7 bilingual pairs, 32 authentic exam groups, formula/source/image/prompt parity and heading ownership. Build and browser checks pending.'
  : 'CH03 passed: calculations, entropy/curve/EMF data, atom/charge balance, 7 bilingual pairs, 32 authentic exam groups, formulas, marks, heading ownership, anchors, source/image parity, closed answers and localized links.');
