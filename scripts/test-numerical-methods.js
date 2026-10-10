const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const close = (actual, expected, tolerance=1e-7) => assert(Math.abs(actual-expected)<tolerance, `${actual} != ${expected}`);
const f = x => x**3-x-1;
const q = x => x**3+x-1;
for (const [fn,a,b] of [[f,1,2],[f,1.32,1.33],[f,1.3245,1.3255],[q,0.6815,0.6825],[x=>Math.log(x)+x-2,1.55,1.56]]) assert(fn(a)*fn(b)<0);
close(f(1.32),-0.020032);
close(f(1.33),0.022637);
close(q(0.6815),-0.001982607);
close(q(0.6825),0.000412766);
const root = path.join(__dirname,'..');
const source = fs.readFileSync(path.join(root,'alevel/a2-mathematics/numerical-methods.md'),'utf8');
let iterate = 1;
const rows = [...source.matchAll(/^\| (\d+) \| ([\d.]+) \|$/gm)];
assert.equal(rows.length,9);
for (const [i,row] of rows.entries()) {
  assert.equal(Number(row[1]),i);
  assert.equal(iterate.toFixed(8),row[2]);
  iterate=Math.cbrt(iterate+1);
}
assert.equal(iterate.toFixed(3),'1.325');
let bad=1;
for (const expected of [0,-1,-2,-9]) { bad=bad**3-1; assert.equal(bad,expected); }
let x=0.5;
for (const expected of ['0.800000','0.609756','0.728968']) { x=1/(1+x*x); assert.equal(x.toFixed(6),expected); }
for (let i=0;i<60;i++) x=1/(1+x*x);
assert.equal(x.toFixed(3),'0.682');
assert(Math.abs(-2*x/(1+x*x)**2)<1);
assert(Math.abs(-3*x*x)>1);
function midpoint(fn,a,b,n) {
  const h=(b-a)/n;
  let sum=0;
  for (let i=0;i<n;i++) sum+=fn(a+(i+0.5)*h);
  return h*sum;
}
function simpson(ys,h) {
  const n=ys.length-1;
  assert(n>0 && n%2===0,'Simpson needs an even number of strips');
  return h/3*ys.reduce((sum,y,i)=>sum+y*(i===0||i===n?1:i%2?4:2),0);
}
close(midpoint(x=>x*x,0,2,4),2.625);
close(midpoint(Math.log,1,3,4),1.3026452335722205);
close(simpson([0,.5,1,1.5,2].map(Math.exp),.5),6.391210186666918);
close(simpson([1,1.4,2.1,3.5,5.2],.5),5);
close(simpson([0,.5,1,1.5,2].map(x=>x**3),.5),4);
assert.throws(()=>simpson([0,1,4,9],1));
for (const [estimate,exact,expected] of [
  [n=>midpoint(x=>x*x,0,2,n),8/3,2.65625],
  [n=>midpoint(Math.log,1,3,n),3*Math.log(3)-2,1.2975640130337196],
  [n=>simpson(Array.from({length:n+1},(_,i)=>Math.exp(2*i/n)),2/n),Math.exp(2)-1,6.389193725416423]
]) {
  close(estimate(8),expected);
  assert(Math.abs(estimate(8)-exact)<Math.abs(estimate(4)-exact),'Finer strips should reduce the error in this example');
}
assert(!/[\u3400-\u9fff]/u.test(source));
assert.equal((source.match(/^### Example /gm)||[]).length,6);
assert.equal((source.match(/^### Q\d/gm)||[]).length,6);
const html=fs.readFileSync(path.join(root,'_site/alevel/a2-mathematics/numerical-methods/index.html'),'utf8');
assert.equal((html.match(/<details\b/g)||[]).length,12);
console.log('Numerical methods passed: root brackets, displayed iterations, divergence, convergence, midpoint/Simpson estimates, 3 refinement comparisons and 12 practice disclosures.');
