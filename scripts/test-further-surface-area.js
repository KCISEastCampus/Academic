// Run after the Jekyll build; compare exact lesson answers with independent geometry quadrature.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = path.join(__dirname, '..');
const topic = 'alevel/a2-further-mathematics/arc-length-and-surface-area';
const read = name => fs.readFileSync(path.join(root, name), 'utf8');
const close = (a, b, tolerance = 1e-8) => assert(Math.abs(a - b) < tolerance, `${a} != ${b}`);
const integrate = (f, a, b) => {
  const n = 8192, h = (b - a) / n;
  let sum = f(a) + f(b);
  for (let i = 1; i < n; i++) sum += (i % 2 ? 4 : 2) * f(a + i * h);
  return sum * h / 3;
};
const derivative = (f, x) => {
  const h = 1e-5;
  return (f(x + h) - f(x - h)) / (2 * h);
};
const primitive = x => Math.sqrt(x * x - 1) * Math.acosh(x) - x;
for (const x of [1.1, 1.5, 2, 3])
  close(derivative(primitive, x), x * Math.acosh(x) / Math.sqrt(x * x - 1));
close(primitive(1 + 1e-8), -1, 2e-8);

// Parametrisation makes the endpoint regular and checks the Cartesian example independently.
const curveSpeed = t => Math.hypot(Math.sinh(t), 1);
const curvedArea = bound => 2 * Math.PI * integrate(t => t * curveSpeed(t), 0, bound);
close(curvedArea(Math.acosh(2)), 2 * Math.PI * (Math.sqrt(3) * Math.log(2 + Math.sqrt(3)) - 1));
close(integrate(curveSpeed, 0, Math.log(2)), 3 / 4);
close(curvedArea(Math.log(2)), Math.PI / 2 * (3 * Math.log(2) - 1));
close(2 * Math.PI * integrate(t => (2 * t) * Math.hypot(2 * Math.sinh(2 * t), 2), 0, Math.log(3) / 2),
  4 * Math.PI / 3 * (2 * Math.log(3) - 1));
close(2 * Math.PI * integrate(t => (t + 1) * Math.SQRT2, 0, 2), 8 * Math.PI * Math.SQRT2);
close(2 * Math.PI * integrate(x => (x - 2) * Math.SQRT2, 2, 4), 4 * Math.PI * Math.SQRT2);
close(integrate(() => 1, 0, Math.PI), Math.PI);
close(2 * Math.PI * integrate(t => Math.sin(t), 0, Math.PI), 4 * Math.PI);
close(2 * Math.PI * integrate(x => x ** 3 / 3 * Math.hypot(1, x * x), 0, 1),
  Math.PI / 9 * (2 * Math.sqrt(2) - 1));
close(curveSpeed(0), 1);

const required = [
  ['example-5--radius-absolute-value', ['x=t', 'y=t+1', '0\\le t\\le2', '8\\pi\\sqrt2']],
  ['q5--surface-crosses-the-axis', ['y=x-2', '2\\le x\\le4', '4\\pi\\sqrt2']],
  ['q6--avoid-counting-the-same-surface-twice', ['x=\\cos t', 'y=\\sin t', '0\\le t\\le\\pi', 'L=\\int_0^\\pi1', '4\\pi']],
  ['nonlinear-surface-example', ['y=\\cosh^{-1}x', '1\\le x\\le2', '\\sqrt3\\ln(2+\\sqrt3)-1']],
  ['nonlinear-surface-task', ['x=\\cosh t', 'y=t', '0\\le t\\le\\ln2', '\\frac\\pi2(3\\ln2-1)']],
  ['nonlinear-surface-retry', ['x=\\cosh(2t)', 'y=2t', '0\\le t\\le\\frac12\\ln3', '\\frac{4\\pi}{3}(2\\ln3-1)']],
  ['nonlinear-surface-later', ['y=x^3/3', '0\\le x\\le1', 'u=1+x^4', '\\frac\\pi9(2\\sqrt2-1)']]
];
const sources = ['', 'zh/'].map(prefix => read(prefix + topic + '.md'));
for (const [i, prefix] of ['', 'zh/'].entries()) {
  const source = sources[i];
  const html = read('_site/' + prefix + topic + '/index.html');
  for (const [id, tokens] of required) {
    const part = source.split('{#' + id + '}')[1]?.split('</section>')[0];
    assert(part, `Missing learning block ${id}`);
    for (const token of tokens) assert(part.replace(/\s/g, '').includes(token.replace(/\s/g, '')), `${id}: ${token}`);
    assert(html.includes(`id="${id}"`), `Missing rendered anchor ${id}`);
    if (id !== 'nonlinear-surface-example' && !id.startsWith('example-')) {
      assert.equal((part.match(/<details\b/g) || []).length, 2, `${id}: separate hint and solution`);
      assert(!/<details\b[^>]*\bopen\b/.test(part), `${id}: help starts closed`);
      const prompt = part.split('<details')[0];
      assert(!/\\boxed|\\frac\\pi2|\\frac\{4\\pi\}|\\frac\\pi9/.test(prompt), `${id}: no answer in prompt`);
    }
  }
  const hyperbolic = read(prefix + 'alevel/a2-further-mathematics/hyperbolic-functions.md');
  assert(hyperbolic.includes('/' + prefix + topic + '/#nonlinear-surfaces'), 'Precise return after the prerequisite');
  assert(source.includes('/' + prefix + 'alevel/a2-further-mathematics/hyperbolic-functions/#inverse-cosh'));
  assert(source.includes('/' + prefix + 'alevel/a2-mathematics/integration/#integration-by-parts'));
  assert(source.includes('January 2026 FM03 Q5') && source.includes('Version 1.0 Final'));
  assert(html.includes('/assets/img/further-nonlinear-surface-elements.svg'));
  assert(!source.includes('\\lvert y\\rvert') && !source.includes('y=-t'), 'Surface tasks use non-negative heights directly');
  const surface = source.split('{#surface-area-about-the-x-axis}')[1].split(/^## /m)[0];
  assert(surface.includes('y\\ge0') && surface.includes('r=y'), 'State the condition for radius y');
}
assert.deepEqual(sources[0].match(/^\*\*Question(?: \(adapted\))?:\*\*.*$/gm),
  sources[1].match(/^\*\*Question(?: \(adapted\))?:\*\*.*$/gm), 'Bilingual English task identity');
const svg = read('assets/img/further-nonlinear-surface-elements.svg');
assert(svg.includes('<title') && svg.includes('<desc') && svg.includes('aria-labelledby='));
console.log('Nonlinear surface sample passed: exact answers, primitive/endpoint checks, geometry quadrature, paired tasks, closed help and prerequisite routes.');
