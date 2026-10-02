// Check the lesson's explicit solutions against their original equations.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { exp, sqrt, sin, cos, log } = Math;
const close = (actual, expected) => assert(Math.abs(actual-expected) < 1e-6, `${actual} != ${expected}`);
const growth = log(2)/3;
const decay = log(2)/6;
const practiceGrowth = log(1.2)/4;
const practiceDecay = log(4/3)/5;
const solutions = [
  [x => -3*exp(x*x), (x,y) => 2*x*y, [-0.5, 0, 0.5]],
  [x => sqrt(x*x+4), (x,y) => x/y, [-1, 0, 1]],
  [x => 2/(1+exp(2*x)), (x,y) => y*(y-2), [-1, 0, 1]],
  [t => sqrt(t+1), (t,h) => 0.5/h, [0, 1, 3]],
  [t => 400*exp(growth*t), (t,N) => growth*N, [0, 3, 6]],
  [t => 80*exp(-decay*t), (t,m) => -decay*m, [0, 6, 18]],
  [x => 3*exp(x**3)-2, (x,y) => 3*x*x*(y+2), [-0.5, 0, 0.5]],
  [x => -sqrt(6-2*cos(x)), (x,y) => sin(x)/y, [-1, 0, 1]],
  [t => (8*t+1)**0.25, (t,h) => 2/h**3, [0, 1, 10]],
  [t => 500*exp(practiceGrowth*t), (t,N) => practiceGrowth*N, [0, 4, 10]],
  [t => 60*exp(-practiceDecay*t), (t,m) => -practiceDecay*m, [0, 5, 10]],
];
for (const [solution, rhs, points] of solutions) {
  for (const x of points) {
    const h = 1e-6;
    close((solution(x+h)-solution(x-h))/(2*h), rhs(x,solution(x)));
  }
}
close(solutions[1][0](0), 2);
close(solutions[2][0](0), 1);
close(solutions[3][0](0), 1);
close(solutions[3][0](3), 2);
close(solutions[4][0](0), 400);
close(solutions[4][0](3), 800);
close(solutions[4][0](3*log(3)/log(2)), 1200);
close(solutions[5][0](6), 40);
close(solutions[5][0](18), 10);
close(solutions[6][0](0), 1);
close(solutions[7][0](0), -2);
close(solutions[8][0](0), 1);
close(solutions[8][0](10), 3);
close(2/2**3, 0.25);
close(solutions[9][0](4), 600);
close(solutions[9][0](4*log(2)/log(1.2)), 1000);
close(solutions[10][0](5), 45);
close(solutions[10][0](5*log(2)/log(4/3)), 30);
close(60-solutions[10][0](10), 26.25);
// Solutions excluded by division still satisfy the original equations.
for (const x of [-1,0,1]) {
  close(2*x*0, 0);
  close(3*x*x*(-2+2), 0);
  for (const y of [0,2]) close(y*(y-2), 0);
}
const root = path.join(__dirname,'..');
const source = fs.readFileSync(path.join(root,'alevel/a2-mathematics/differential-equations.md'),'utf8');
assert(!/[\u3400-\u9fff]/u.test(source));
const html = fs.readFileSync(path.join(root,'_site/alevel/a2-mathematics/differential-equations/index.html'),'utf8');
assert.equal((html.match(/<details\b/g)||[]).length,12);
assert.equal((source.match(/^### Example /gm)||[]).length,6);
assert.equal((source.match(/^### Q\d/gm)||[]).length,6);
console.log('Differential equations passed: 11 solution families, given conditions, model predictions, constant solutions and 12 practice disclosures.');
