// Run after bundle exec jekyll build. Checks series coefficients and approximation claims.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const close = (a,b) => assert(Math.abs(a-b)<1e-12, `${a} != ${b}`);
function coefficients(n,k,scale=1) {
  const c=[scale];
  for(let j=1;j<=3;j++) c.push(c[j-1]*(n-j+1)*k/j);
  return c;
}
function same(a,b) { a.forEach((v,i)=>close(v,b[i])); }
function product(a,b) {
  return Array.from({length:4},(_,i)=>a.reduce((s,v,j)=>s+(j<=i?v*(b[i-j]||0):0),0));
}
same(coefficients(.5,4), [1,2,-2,4]);
same(coefficients(-.5,-1/3,1/3), [1/3,1/18,1/72,5/1296]);
same(coefficients(-2,-2), [1,4,12,32]);
same(coefficients(-1,-1).map((v,i)=>v+coefficients(-1,2,2)[i]),[3,-3,9,-15]);
same(product([1,1],coefficients(.5,-2)),[1,0,-1.5,-1]);
same(coefficients(-1,-3),[1,3,9,27]);
same(coefficients(.5,1/4,2),[2,1/4,-1/64,1/512]);
same(coefficients(-2,1),[1,-2,3,-4]);
same(coefficients(-1,-2,8/3).map((v,i)=>v+coefficients(-1,1,4/3)[i]),[4,4,12,20]);
same(product([1,2],coefficients(-.5,-1)),[1,2.5,11/8,17/16]);
for(const [a,d] of [[[3,-3,9,-15],[1,1,-2]],[[4,4,12,20],[1,-1,-2]],[[1,-2,3,-4],[1,2,1]]])
 same(product(a,d),[a[0],0,0,0]);
same(product([2,1/4,-1/64,1/512],[2,1/4,-1/64,1/512]),[4,1,0,0]);
const poly=(c,x)=>c.reduce((s,v,i)=>s+v*x**i,0);
const estimate=2*poly(coefficients(.5,1),.02);
close(estimate,2.019901);
assert.equal(estimate.toFixed(5),Math.sqrt(4.08).toFixed(5));
close(2*(-5/128)*.02**4,-.0000000125);
const other=3*poly(coefficients(.5,1),-.01);
close(other,2.9849623125);
assert.equal(other.toFixed(5),Math.sqrt(8.91).toFixed(5));
close(poly(coefficients(.5,4),.24),1.420096);
assert(Math.abs(poly(coefficients(.5,4),.24)-Math.sqrt(1.96))>.02);
// Range is determined by the substituted expression, not by the outside factor.
for(const [k,r] of [[4,.25],[-1/3,3],[-2,.5],[-3,1/3],[1/4,4],[1,1]]) close(Math.abs(k*r),1);
const source=fs.readFileSync('alevel/a2-mathematics/binomial-series.md','utf8');
assert(!/[\u3400-\u9fff]/u.test(source));
assert.equal((source.match(/### Example /g)||[]).length,6);
assert.equal((source.match(/### Question /g)||[]).length,6);
const html=fs.readFileSync('_site/alevel/a2-mathematics/binomial-series/index.html','utf8');
assert.equal((html.match(/<details\b/g)||[]).length,12);
assert(!html.includes('<p>$$'));
assert.equal((html.match(/<table\b/g)||[]).length,1, 'Only the quick reference should be a table.');
console.log('Binomial series passed: coefficients, products, ranges, rounding and 12 practice disclosures.');
