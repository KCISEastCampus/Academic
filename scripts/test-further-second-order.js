// Run after bundle exec jekyll build: check solutions, bilingual content and generated pages.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { init } = require('../assets/vendor/mathjax/3.2.2/es5/node-main.js');
const root = path.join(__dirname, '..');
const topic = 'alevel/a2-further-mathematics/second-order-differential-equations';
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const en = read(`${topic}.md`);
const zh = read(`zh/${topic}.md`);

const close = (a, b) => assert(Math.abs(a - b) < 1e-6 * (1 + Math.abs(b)), `${a} != ${b}`);
const derivatives = (f, x) => {
  const h = 1e-3;
  const ym2 = f(x - 2 * h), ym1 = f(x - h), y = f(x), yp1 = f(x + h), yp2 = f(x + 2 * h);
  return [(ym2 - 8 * ym1 + 8 * yp1 - yp2) / (12 * h),
    (-ym2 + 16 * ym1 - 30 * y + 16 * yp1 - yp2) / (12 * h * h)];
};
// Independently differentiate all fourteen solution families and use the original coefficients.
const families = [
  [2, -2, -4, x => 0, (x, a, b) => a * Math.exp(2 * x) + b * Math.exp(-x), [1, 2], [[0, 3, 0]]],
  [1, 4, 4, x => 0, (x, a, b) => (a + b * x) * Math.exp(-2 * x), [1, 2], [[0, 1, 0]]],
  [1, 2, 5, x => 0, (x, a, b) => Math.exp(-x) * (a * Math.cos(2 * x) + b * Math.sin(2 * x)),
    [2, 1], [[0, 2, 0]]],
  [1, 0, -1, x => 6 * Math.exp(2 * x),
    (x, a, b) => a * Math.exp(x) + b * Math.exp(-x) + 2 * Math.exp(2 * x)],
  [1, 1, 2, x => 3 * Math.cos(x),
    (x, a, b) => Math.exp(-x / 2) * (a * Math.cos(Math.sqrt(7) * x / 2) + b * Math.sin(Math.sqrt(7) * x / 2))
      + 1.5 * (Math.cos(x) + Math.sin(x))],
  [1, -4, 4, x => 8 * Math.exp(2 * x), (x, a, b) => (a + b * x + 4 * x * x) * Math.exp(2 * x)],
  [1, 1, -2, x => 4 * x - 6 * Math.exp(-2 * x),
    (x, a, b) => a * Math.exp(-2 * x) + b * Math.exp(x) - 2 * x - 1 + 2 * x * Math.exp(-2 * x),
    [3, 0], [[0, 2], [20, null, -2]]],
  [1, -5, 6, x => 0, (x, a, b) => a * Math.exp(2 * x) + b * Math.exp(3 * x), [3, -2], [[0, 1, 0]]],
  [1, -2, 1, x => 0, (x, a, b) => (a + b * x) * Math.exp(x), [0, 2], [[0, 0, 2]]],
  [1, 0, 9, x => 0, (x, a, b) => a * Math.cos(3 * x) + b * Math.sin(3 * x), [1, 2], [[0, 1, 6]]],
  [1, 0, 1, x => x ** 4, (x, a, b) => a * Math.cos(x) + b * Math.sin(x) + x ** 4 - 12 * x * x + 24],
  [1, -3, 2, x => 5 * Math.exp(x), (x, a, b) => a * Math.exp(x) + b * Math.exp(2 * x) - 5 * x * Math.exp(x)],
  [1, 0, 4, x => 8 * Math.sin(2 * x),
    (x, a, b) => a * Math.cos(2 * x) + b * Math.sin(2 * x) - 2 * x * Math.cos(2 * x), [0, 1], [[0, 0, 0]]],
  [1, 0, 0, x => 6 * x + 4, (x, a, b) => x ** 3 + 2 * x * x + a + b * x, [1, 0], [[0, 1], [1, 4]]]
];
for (const [a, b, c, rhs, solution, constants, conditions] of families) {
  const pairs = [[-2, 3], [0, 0], [3, -2]];
  if (constants) {
    pairs.push(constants);
    const f = x => solution(x, ...constants);
    for (const [x, y, slope] of conditions) {
      if (y != null) close(f(x), y);
      if (slope != null) close(derivatives(f, x)[0], slope);
    }
  }
  for (const pair of pairs) {
    const f = x => solution(x, ...pair);
    for (const x of [-.75, 0, .4, 1]) {
      const [dy, d2y] = derivatives(f, x);
      close(a * d2y + b * dy + c * f(x), rhs(x));
    }
  }
}

const math = source => source.match(/\$\$[\s\S]*?\$\$|\$[^$\r\n]+\$/g) || [];
const ids = source => Array.from(source.matchAll(/\{#([^}]+)\}/g), match => match[1]);
assert.deepEqual(math(zh), math(en), 'Chinese formulas must match English in order');
assert.deepEqual(zh.match(/^>.*$/gm), en.match(/^>.*$/gm), 'Keep English questions unchanged');
assert.deepEqual(ids(zh), ids(en), 'Preserve section anchors when changing language');
assert(zh.includes(`translation_of: /${topic}/`));
assert(zh.includes(`permalink: /zh/${topic}/`));
assert(zh.includes('lang: zh-CN'));
assert.equal((en.match(/^### Example /gm) || []).length, 7);
assert.equal((en.match(/^### Question /gm) || []).length, 7);
assert.equal((en.match(/<details\b/g) || []).length, 28);
assert.equal((zh.match(/<details\b/g) || []).length, 28);

for (const [prefix, source, language, target] of [
  ['', en, 'en', `/zh/${topic}/`], ['zh/', zh, 'zh-CN', `/${topic}/`]
]) {
  const html = read(`_site/${prefix}${topic}/index.html`);
  assert(html.includes(`<html lang="${language}">`));
  assert(html.includes(`id="languageSwitch" href="${target}"`));
  assert.equal((html.match(/<details\b/g) || []).length, (source.match(/<details\b/g) || []).length);
  for (const id of ids(source)) assert(html.includes(`id="${id}"`), `Missing anchor ${id}`);
  for (const match of source.matchAll(/\]\((\/[^)#]+)(?:#[^)]*)?\)/g)) {
    const url = match[1];
    const file = url.endsWith('/') ? `${url}index.html` : url;
    assert(fs.existsSync(path.join(root, '_site', file)), `Missing internal link ${url}`);
  }
  assert(!html.includes('<p>$$'), 'Display math must reach MathJax intact');
  assert(!math(html).some(formula => /[‘’]/.test(formula)), 'Smart quotes must not corrupt derivative notation');
  const index = read(`_site/${prefix}alevel/a2-further-mathematics/index.html`);
  const previous = read(`_site/${prefix}alevel/a2-further-mathematics/first-order-differential-equations/index.html`);
  assert(index.includes(`href="/${prefix}${topic}/"`));
  assert(previous.includes(`href="/${prefix}${topic}/"`));
}

// Compile the actual lesson's TeX with the site's existing MathJax, without a new dependency.
init({ loader: { load: ['input/tex', 'output/svg'] }, tex: { packages: ['base', 'ams'] } })
  .then(mj => {
    const formulas = new Set(math(en));
    for (const formula of formulas) {
      const display = formula.startsWith('$$');
      const width = display ? 2 : 1;
      const svg = mj.startup.adaptor.outerHTML(mj.tex2svg(formula.slice(width, -width), { display }));
      assert(!svg.includes('data-mml-node="merror"') && !svg.includes('data-mjx-error'), `Invalid TeX: ${formula}`);
    }
    console.log(`Second-order equations passed: 14 solution families, initial/boundary values and a large-x derivative check, bilingual questions/formulas/anchors, generated links/28 disclosures per language and ${formulas.size} TeX formulas.`);
  })
  .catch(error => { console.error(error); process.exitCode = 1; });
