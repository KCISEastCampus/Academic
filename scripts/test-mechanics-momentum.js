// Independent substitutions and force/work integrals for the AS-to-MA05 bridge.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const close = (a, b) => assert(Math.abs(a - b) < 1e-8, `${a} != ${b}`);
const energy = (m, v) => m.reduce((s, mass, i) => s + mass * v[i] ** 2 / 2, 0);
const momentum = (m, v) => m.reduce((s, mass, i) => s + mass * v[i], 0);
const integrate = (f, a, b) => {
  const n = 200, h = (b - a) / n;
  let total = f(a) + f(b);
  for (let i = 1; i < n; i++) total += (i % 2 ? 4 : 2) * f(a + i * h);
  return total * h / 3;
};

// Cross-check impulse through acceleration and energy through work, using v(t).
const v = t => -1 + 1.5 * t * t;
close(v(2), 5);
close(integrate(t => 6 * t, 0, 2), 2 * (v(2) - v(0)));
close(integrate(t => 6 * t * v(t), 0, 2), energy([2], [5]) - energy([2], [-1]));

const m = [2, 3], u = [5, 0], branches = [[1, 8 / 3], [-1, 4]];
for (const [i, final] of branches.entries()) {
  close(momentum(m, final), momentum(m, u));
  close(Math.abs(2 * final[0]), 2);
  assert(final[1] > final[0], 'Particles separate');
  close(energy(m, u) - energy(m, final), [40 / 3, 0][i]);
}

// Triangular force record: derive the velocity on each segment independently.
const v1 = t => -4 + 3 * t * t;
const v2 = t => -10 + 12 * t - 3 * t * t;
close(v1(1), v2(1)); close(v2(2), 2);
close(integrate(t => 3 * t, 0, 1) + integrate(t => 6 - 3 * t, 1, 2), 3);
close(integrate(t => 3 * t * v1(t), 0, 1) + integrate(t => (6 - 3 * t) * v2(t), 1, 2), -3);
for (const final of [[1, 2], [-1, 4]]) {
  close(momentum([1, 1], final), 3);
  assert(final[1] > final[0]);
}
close(energy([1, 1], [1, 2]), 2.5);
assert(energy([1, 1], [-1, 4]) > 4.5, 'Reject energy release under passive model');
close(momentum([0.5], [-2]) - momentum([0.5], [3]), -2.5);
close(energy([0.5], [3]) - energy([0.5], [-2]), 1.25);

// New retries: allow contact motion together, reject both energy gain and
// continued approach, and distinguish internal energy release from impulse.
for (const final of [[2,2],[10,-2]]) close(momentum([1,2],final),momentum([1,2],[4,1]));
close(energy([1,2],[4,1]),9); close(energy([1,2],[2,2]),6);
close(energy([1,2],[10,-2]),54); assert(-2<10,'Rejected branch still approaches');
close(momentum([2,3],[-3,2]),0); close(energy([2,3],[-3,2]),15);
assert.notEqual(momentum([2],[-3]),0,'A alone receives an external impulse');
close((-3+1)+3,1); // internal pair cancels, motor impulse remains
const retryV1=t=>-1-t, retryV2=t=>-2+0.375*(t-1)**2;
close(retryV1(1),retryV2(1)); close(retryV2(3),-.5);
close(integrate(()=>-2,0,1)+integrate(t=>1.5*(t-1),1,3),1);
close(integrate(t=>-2*retryV1(t),0,1)+integrate(t=>1.5*(t-1)*retryV2(t),1,3),-.75);
close(energy([2],[-.5])-energy([2],[-1]),-.75);

// Personally reread Jan 2025 Q8: recover both signed momentum branches.
for(const [index, pX] of [2.4,-2.4].entries()) {
  const pY=19.2+7.5-pX;
  close(pY,[24.3,29.1][index]);
  close(energy([2,5],[19.2/2,7.5/5]),97.785);
  close(97.785-energy([2,5],[pX/2,pY/5]),[37.296,11.664][index]);
}

const root=path.join(__dirname,'..'), base='alevel/a2-mathematics/mechanics/momentum-bridge.md';
const en=fs.readFileSync(path.join(root,base),'utf8'), zh=fs.readFileSync(path.join(root,'zh',base),'utf8');
const math=text=>text.match(/\$\$[\s\S]*?\$\$|\$[^$\r\n]+\$/g)||[];
assert.deepEqual(math(en),math(zh),'Momentum: identical bilingual TeX sequence');
for(const prompt of en.match(/^(?:\*\*Question:\*\*|\*\*Self-written task\.\*\*).*$/gm)||[]) assert(zh.includes(prompt),'English Question preserved');
for(const source of [en,zh]) {
  assert(source.includes('reading_layout: true'));
  assert(!/<details[^>]*\bopen\b/.test(source));
  assert(source.includes('/mechanics/#mixed-problems')&&source.includes('/mechanics/#later-review'));
  const tasks=[...source.matchAll(/<div class="lesson-check" markdown="1">([\s\S]*?)<\/div>/g)];
  assert(tasks.length>0);
  for(const [,task] of tasks) {
    assert.equal((task.match(/^### /gm)||[]).length,1,'One question in each task boundary');
    assert.equal((task.match(/<details\b/g)||[]).length,2,'Separate closed hint and solution');
  }
  assert.equal((source.match(/<div\b/g)||[]).length,(source.match(/<\/div>/g)||[]).length);
  for(const anchor of ['check-your-starting-point','retry--change-the-system-boundary','system-check','system-retry','impulse-retry','collision-retry','later-check']) assert(source.includes(`#${anchor}`),`Momentum: ${anchor}`);
}

// Retained bisection interval must follow all five trial values, not a solver.
const f = x => x ** 3 - x - 1;
let a = 1, b = 2;
for (const expected of [1.5, 1.25, 1.375, 1.3125, 1.34375]) {
  const c = (a + b) / 2;
  close(c, expected);
  if (f(a) * f(c) < 0) b = c; else a = c;
}
assert.deepEqual([a, b], [1.3125, 1.34375]);
close((a + b) / 2, 1.328125); close((b - a) / 2, 0.015625);
require('../assets/vendor/mathjax/3.2.2/es5/node-main.js').init({loader:{load:['input/tex','output/svg']},tex:{packages:['base','ams']}}).then(mj=>{
  for(const formula of new Set(math(en))) {
    const display=formula.startsWith('$$'), n=display?2:1;
    const svg=mj.startup.adaptor.outerHTML(mj.tex2svg(formula.slice(n,-n),{display}));
    assert(!svg.includes('data-mml-node="merror"')&&!svg.includes('data-mjx-error'),formula);
  }
  console.log('Momentum: retained/new impulse-work calculations, signed branches, external impulse, spring release, Jan 2025 Q8, bilingual sources, closed task roles, TeX and retained bisection passed.');
}).catch(error=>{console.error(error);process.exitCode=1;});
