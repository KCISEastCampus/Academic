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

// The PI-only tasks isolate form choice from CF and initial-condition work.
const piTasks = [
  ['pi-try-exponential', 'y^{\\prime\\prime}-y=5e^{3x}', 'y_p=5e^{3x}/8', 1, 0, -1, x => 5 * Math.exp(3 * x), x => 5 / 8 * Math.exp(3 * x)],
  ['pi-try-polynomial', 'y^{\\prime\\prime}+3y^{\\prime}+2y=x', 'y_p=x/2-3/4', 1, 3, 2, x => x, x => x / 2 - 3 / 4],
  ['pi-try-trig', 'y^{\\prime\\prime}+y^{\\prime}+y=\\sin x', 'y_p=-\\cos x', 1, 1, 1, Math.sin, x => -Math.cos(x)],
  ['zero-root-simple', 'y^{\\prime\\prime}+y^{\\prime}=2x', 'y_p=x^2-2x', 1, 1, 0, x => 2 * x, x => x * x - 2 * x],
  ['pi-try-zero', 'y^{\\prime\\prime}+2y^{\\prime}=6x+4', 'y_p=3x^2/2+x/2', 1, 2, 0, x => 6 * x + 4, x => 1.5 * x * x + x / 2],
  ['pi-target-retry', 'y^{\\prime\\prime}-2y^{\\prime}+y=7e^x', 'y_p=7x^2e^x/2', 1, -2, 1, x => 7 * Math.exp(x), x => 7 / 2 * x * x * Math.exp(x)]
];
for (const [id, equation, answer, a, b, c, rhs, solution] of piTasks) {
  for (const source of [en, zh]) {
    const section = source.split('{#' + id + '}')[1]?.split('</section>')[0];
    assert(section, 'Missing PI learning task ' + id);
    assert(section.replace(/\s/g, '').includes(equation.replace(/\s/g, '')), id + ': source equation changed');
    assert(section.replace(/\s/g, '').includes(answer.replace(/\s/g, '')), id + ': source answer changed');
  }
  for (const x of [-.75, 0, .4, 1]) {
    const [dy, d2y] = derivatives(solution, x);
    close(a * d2y + b * dy + c * solution(x), rhs(x));
  }
}
assert(en.indexOf('{#pi-try-exponential}') < en.indexOf('{#resonance}'),
  'A first PI attempt must precede the overlap cases');
assert(en.includes('multiply the whole polynomial trial by $x$'));
assert(en.includes('a repeated zero root means multiply it by $x^2$'));
console.log('PI-only mathematical checks passed: ' + piTasks.length);

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
// Independent tasks must require the student to classify the roots and choose a PI.
assert.deepEqual(en.match(/^### Question .*$/gm),
  Array.from({ length: 7 }, (_, i) => `### Question ${i + 1} {#practice-${i + 1}}`));
assert.equal((en.match(/<details\b/g) || []).length, (zh.match(/<details\b/g) || []).length,
  'The languages provide equal optional help');

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
    console.log(`Second-order equations passed: 14 solution families, initial/boundary values and a large-x derivative check, bilingual questions/formulas/anchors, generated links/disclosures and ${formulas.size} TeX formulas.`);
  })
  .catch(error => { console.error(error); process.exitCode = 1; });
