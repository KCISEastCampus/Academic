// Run after bundle exec jekyll build. Check the lesson's maths and rendering.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const close = (a, b) => assert(Math.abs(a-b) < 1e-6, `${a} != ${b}`);
const derivative = (f, t) => (f(t+1e-5)-f(t-1e-5))/2e-5;
// Compare gradients with numerical parameter differences.
for (const [x, y, m] of [
  [t => t*t, t => t-2, t => 1/(2*t)],
  [t => t*t, t => 2*t, t => 1/t],
  [t => 3*Math.cos(t), t => 2*Math.sin(t), t => -2*Math.cos(t)/(3*Math.sin(t))],
  [t => t**3, t => (t+2)**2, t => 2*(t+2)/(3*t*t)],
  [t => t*t+1, t => t**3, t => 1.5*t],
  [t => t, t => t**3-3*t, t => 3*t*t-3],
  [t => t*t, t => 4*t, t => 2/t],
]) for (const t of [-2, -0.5, 0.7, 2]) close(derivative(y,t)/derivative(x,t), m(t));
assert(2*(-2.1+2)/(3*2.1**2)<0 && 2*(-1.9+2)/(3*1.9**2)>0);
// Elimination identities, restricted branches, and the general ellipse tangent.
for (const t of [-2, -0.5, 0, 0.5, 2]) {
  close(((2*t+1)-1)**2/4, t*t);
  close(((3*t-1)+1)**2*2/9, 2*t*t);
  close((t-2+2)**2, t*t);
  const x = t/(1-t), y = t*t/(1-t);
  close(y, x*x/(1+x));
  close(x/(1+x), t);
  close((3*Math.cos(t))**2/9+(2*Math.sin(t))**2/4, 1);
  close(3*Math.cos(t)*Math.cos(t)/3+2*Math.sin(t)*Math.sin(t)/2, 1);
}
close(1/(2*0.25), 2); close(0.25-2, -7/4);
for (const t of [1,-3]) close(2*t, 3-t*t);
for (const t of [1,-9]) close(4*t-4, -(t*t-1)/2);
close(3*(-1)**2-3,0); close(3*1**2-3,0);
assert(3*(-1.1)**2-3>0 && 3*(-0.9)**2-3<0);
assert(3*0.9**2-3<0 && 3*1.1**2-3>0);
const source = fs.readFileSync('alevel/a2-mathematics/parametric-equations.md','utf8');
const html = fs.readFileSync('_site/alevel/a2-mathematics/parametric-equations/index.html','utf8');
assert.equal((source.match(/### Example \d/g)||[]).length,8);
assert.equal((source.match(/### Question \d/g)||[]).length,6);
assert.equal((html.match(/<details/g)||[]).length,12);
assert.equal((html.match(/<table/g)||[]).length,2);
assert(!/[\u4e00-\u9fff]/.test(source));
assert(!html.includes('<p>$$'));
console.log('Parametric equations: gradients, restrictions, intersections and rendering passed.');
