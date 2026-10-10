// Run after bundle exec jekyll build: check solutions, bilingual content and generated pages.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { init } = require('../assets/vendor/mathjax/3.2.2/es5/node-main.js');
const root = path.join(__dirname, '..');
const topic = 'alevel/a2-further-mathematics/first-order-differential-equations';
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const en = read(`${topic}.md`);
const zh = read(`zh/${topic}.md`);
const close = (a, b) => assert(Math.abs(a - b) < 1e-7 * (1 + Math.abs(b)), `${a} != ${b}`);
const derivative = (f, x) => {
  const h = 1e-5;
  return (f(x - 2 * h) - 8 * f(x - h) + 8 * f(x + h) - f(x + 2 * h)) / (12 * h);
};

// Numerically differentiate each solution family and substitute into the original equation.
const families = [
  [x => 2, x => 4, x => 6, (x, c) => 1.5 + c * Math.exp(-2 * x), [-1, 0, 1], [0, 1, -.5]],
  [x => 1, x => 2 / x, x => x, (x, c) => x * x / 4 + c / (x * x), [.5, 1, 2], [1, 2, 1.75]],
  [x => 1, x => 1 / (Math.sin(x) * Math.cos(x)), x => 2 * Math.tan(x),
    (x, c) => 2 + (c - 2 * x) / Math.tan(x), [.2, Math.PI / 4, 1.3], [Math.PI / 4, 1, Math.PI / 2 - 1]],
  [x => 1, x => 2, x => 4 * x + 3, (x, c) => c * Math.exp(-2 * x) + 2 * x + .5,
    [-1, 0, 1], [1, 2, -Math.exp(2) / 2]],
  [x => 1, x => -3, x => 2 * Math.exp(x), (x, c) => c * Math.exp(3 * x) - Math.exp(x),
    [-1, 0, 1], [0, 4, 5]],
  [x => 1, x => 2, x => 3 * Math.exp(-2 * x), (x, c) => (c + 3 * x) * Math.exp(-2 * x),
    [-1, 0, 1], null],
  [x => 3, x => 6, x => 12, (x, c) => 2 + c * Math.exp(-2 * x), [-1, 0, 1], [0, 5, 3]],
  [x => 1, x => 1 / x, x => 2, (x, c) => x + c / x, [.5, 1, 2], [2, 5, 6]],
  [x => 1, x => 2 * x, x => 2 * x, (x, c) => 1 + c * Math.exp(-x * x), [-1, 0, 1], [0, 3, 2]],
  [x => 1, x => 1, x => x * x, (x, c) => c * Math.exp(-x) + x * x - 2 * x + 2,
    [-1, 0, 1], [1, 0, -Math.E]],
  [x => 1, x => -1, x => 4 * Math.exp(x), (x, c) => (c + 4 * x) * Math.exp(x),
    [-1, 0, 1], [0, 2, 2]],
  [x => 1, x => -1 / x, x => x, (x, c) => x * x + c * x, [-2, -1, -.5], [-1, 2, -1]]
];
for (const [a, b, rhs, solution, points, condition] of families) {
  const constants = [-2, 0, 3];
  if (condition) {
    const [x, y, c] = condition;
    close(solution(x, c), y);
    constants.push(c);
  }
  for (const c of constants)
    for (const x of points)
      close(a(x) * derivative(t => solution(t, c), x) + b(x) * solution(x, c), rhs(x));
}
// The factor used on the negative interval must be nonzero and satisfy mu' = P mu.
for (const x of [-2, -1, -.5]) {
  assert(1 / x !== 0);
  close(derivative(t => 1 / t, x), (-1 / x) * (1 / x));
}

const math = source => source.match(/\$\$[\s\S]*?\$\$|\$[^$\r\n]+\$/g) || [];
const ids = source => Array.from(source.matchAll(/\{#([^}]+)\}/g), match => match[1]);
assert.deepEqual(math(zh), math(en), 'Chinese formulas must match English in order');
assert.deepEqual(zh.match(/^>.*$/gm), en.match(/^>.*$/gm), 'Keep English questions unchanged');
assert.deepEqual(ids(zh), ids(en), 'Preserve section anchors when changing language');
assert(zh.includes(`translation_of: /${topic}/`));
assert(zh.includes(`permalink: /zh/${topic}/`));
assert(zh.includes('lang: zh-CN'));
assert.equal((en.match(/^### Example /gm) || []).length, 6);
assert.equal((en.match(/^### Question /gm) || []).length, 6);

for (const [prefix, source, language, target] of [
  ['', en, 'en', `/zh/${topic}/`], ['zh/', zh, 'zh-CN', `/${topic}/`]
]) {
  const html = read(`_site/${prefix}${topic}/index.html`);
  assert(html.includes(`<html lang="${language}">`));
  assert(html.includes(`id="languageSwitch" href="${target}"`));
  assert.equal((html.match(/<details\b/g) || []).length, 24);
  for (const id of ids(source)) assert(html.includes(`id="${id}"`), `Missing anchor ${id}`);
  for (const match of source.matchAll(/\]\((\/[^)#]+)(?:#[^)]*)?\)/g)) {
    const url = match[1];
    const file = url.endsWith('/') ? `${url}index.html` : url;
    assert(fs.existsSync(path.join(root, '_site', file)), `Missing internal link ${url}`);
  }
  assert(!html.includes('<p>$$'), 'Display math must reach MathJax intact');
  const index = read(`_site/${prefix}alevel/a2-further-mathematics/index.html`);
  const previous = read(`_site/${prefix}alevel/a2-further-mathematics/hyperbolic-functions/index.html`);
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
    console.log(`First-order equations passed: 12 solution families, 11 conditions, negative-interval factor, bilingual questions/formulas/anchors, generated links/disclosures and ${formulas.size} TeX formulas.`);
  })
  .catch(error => { console.error(error); process.exitCode = 1; });
