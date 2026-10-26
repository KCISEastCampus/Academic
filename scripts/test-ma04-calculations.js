// Independent arithmetic/model checks; these do not prove teaching quality or assumptions.
const assert = require('node:assert/strict');
const near = (a,b,tol=1e-10) => assert(Math.abs(a-b)<tol, `${a} != ${b}`);
function integrate(f,a,b,n=20000) {
  const h=(b-a)/n; let s=f(a)+f(b);
  for(let i=1;i<n;i++) s+=(i%2?4:2)*f(a+i*h);
  return s*h/3;
}
function binMass(n,p,k) {
  let c=1; for(let j=1;j<=k;j++) c*= (n-j+1)/j;
  return c*p**k*(1-p)**(n-k);
}
const binTail = (n,p,k) => Array.from({length:n-k+1},(_,i)=>binMass(n,p,k+i)).reduce((a,b)=>a+b,0);
const phi = z => 0.5 + integrate(x=>Math.exp(-x*x/2)/Math.sqrt(2*Math.PI),0,z);
// Official Jan2025 Q1(b): both neighbouring boundaries matter for discrete tails.
near(Array.from({length:6},(_,k)=>binMass(50,.2,k)).reduce((a,b)=>a+b,0),.04802721937073364);
assert(binTail(50,.2,15)>.05 && binTail(50,.2,16)<.05);
// Course later B: exact boundaries and actual size.
near(binTail(20,.2,7),.08669251356740035);
near(binTail(20,.2,8),.03214266308087516);
assert(binTail(20,.2,7)>.05 && binTail(20,.2,8)<.05);
// Density/moments and nonlinear versus affine transformation.
const f=x=>2*x/9;
near(integrate(f,0,3),1);
const m=integrate(x=>x*f(x),0,3), second=integrate(x=>x*x*f(x),0,3);
near(m,2); near(second,4.5); near(second-m*m,.5);
near(integrate(x=>(4-2*x)*f(x),0,3),0);
near(integrate(x=>(4-2*x)**2*f(x),0,3),2);
// Waiting-time density, survival, moments and quantiles from independent integration.
const r=.2;
near(integrate(t=>r*Math.exp(-r*t),0,200),1);
near(integrate(t=>t*r*Math.exp(-r*t),0,200),5,1e-9);
near(integrate(t=>t*t*r*Math.exp(-r*t),0,200)-25,25,1e-8);
near(Math.exp(-r*5*Math.log(2)),.5);
near(Math.exp(-2*.75),.22313016014842982);
// Normal area symmetry, reverse bounds and known-sigma sample mean test.
near(phi(0),.5); near(phi(1.6448536269514722),.95);
near(phi(-1.2815515655446004),.1);
near(phi(.8416212335729143),.8);
near((501.5-500)/(4/Math.sqrt(25)),1.875);
assert(1-phi(1.875)<.05);
// Official Jan2025 Q3, close to but outside the rejection region.
const z=(220.5-205)/(30/Math.sqrt(10));
near(z,1.633843457753662);
near(1-phi(z),.051145862305274,1e-10);
assert(z<1.6449);
// CLT independent interval, reverse cut-off and delayed tail (not exact population claims).
near(4/Math.sqrt(400),.2);
near(phi(1)-phi(-2),.8185946141203637);
near(50+.6*1.6449,50.98694);
near(phi((8.3-8)/(.3)),.841344746068543,1e-10);
// Official Q7: unbiased variance and Student statistic, not an exact plug-in normal model.
const values=[8.99,8.96,8.99,9.02,8.95,8.98,8.97,9.01];
const mean=values.reduce((a,b)=>a+b)/values.length;
const s2=values.reduce((a,b)=>a+(b-mean)**2,0)/(values.length-1);
near(mean,8.98375); near(s2,319/560000);
near((mean-9)/Math.sqrt(s2/8),-1.925737248295613,1e-10);
assert((mean-9)/Math.sqrt(s2/8)<-1.895);
// For 7 degrees of freedom, the t-density normalising constant is 16/(5*pi*sqrt(7)).
const t7cdf=t=>.5+integrate(u=>16/(5*Math.PI*Math.sqrt(7))*(1+u*u/7)**(-4),0,t);
near(t7cdf(-1.894578605061305),.05,1e-10);
assert(t7cdf((mean-9)/Math.sqrt(s2/8))<.05);
assert(t7cdf(-1.8)>.05);
// CLT case: SE is estimated and approximation justified by a large independent sample.
near((5.8-5)/(5/Math.sqrt(100)),1.6);
assert(Math.abs(1.6)<1.96);
console.log('MA04 independent checks passed: integrals, moments, normal areas, sample variance and discrete/mean-test decisions.');
