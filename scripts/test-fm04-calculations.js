// Independent quadrature/enumeration complements written proofs; it does not prove assumptions.
const assert = require('node:assert/strict');
const near = (a, b, tolerance = 1e-9) => assert(Math.abs(a - b) < tolerance, `${a} != ${b}`);
function integral(f, a, b, n = 12000) {
  const h = (b - a) / n; let sum = f(a) + f(b);
  for (let i = 1; i < n; i++) sum += (i % 2 ? 4 : 2) * f(a + i * h);
  return sum * h / 3;
}
const phi = z => 0.5 + integral(x => Math.exp(-x*x/2) / Math.sqrt(2*Math.PI), 0, z);
function binomial(n, p, k) {
  let c = 1;
  for (let j = 1; j <= k; j++) c *= (n-j+1)/j;
  return c * p**k * (1-p)**(n-k);
}
const tail = (n,p,k) => Array.from({length:n-k+1},(_,i)=>binomial(n,p,k+i)).reduce((a,b)=>a+b,0);
for (const t of [-1.2, -0.3, 0.2, 1]) {
  near(integral(v => 2*v*Math.exp(t*v), 0, 1), 2*((t-1)*Math.exp(t)+1)/t**2);
  near(integral(x => Math.exp(t*x)*2*Math.exp(-2*x), 0, 45), 2/(2-t), 1e-8);
  near(integral(x => Math.exp(t*x-(x-1)**2/8)/Math.sqrt(8*Math.PI), -30, 40), Math.exp(t+2*t*t), 1e-8);
  let mass = Math.exp(-3), sum = mass;
  for (let k = 1; k <= 100; k++) { mass *= 3/k; sum += mass*Math.exp(t*k); }
  near(sum, Math.exp(3*(Math.exp(t)-1)), 1e-8);
}
near(integral(v=>2*v*v,0,1),2/3);
near(integral(v=>2*v**3,0,1)-(2/3)**2,1/18);
near(1/4+1/9,13/36);
near(2*2+1,5); near(4*3+4,16);
// Fixed rejection rules under normal and binomial alternatives.
near(phi(1.6448536269514722-2),0.3612399687,1e-9);
const c=0.5*1.959963984540054;
near(phi((c-.6)/.5)-phi((-c-.6)/.5),.7755730001,1e-9);
near(tail(10,.2,4),.1208738816);
near(tail(10,.2,5),.0327934976);
near(tail(10,.5,5),319/512);
near(phi(3-2.3263478740408408),.7497337471,1e-9);
near(1-phi(2),.0227501319,1e-9);
near(1-phi(-.5),.6914624613,1e-9);
// Separate versus pooled uncertainty and course mixed tasks.
near((6652-640**2/64)/63,4); near((9916-950**2/100)/99,9);
near(.5/Math.sqrt(4/64+9/100),1.2803687993,1e-9);
near((4*9+6*4)/10,6);
near(4/Math.sqrt(6*(1/5+1/7)),2.7888667551,1e-9);
near((60-16**2/8)/7,4);
near(2-2.365*2/Math.sqrt(8),.3276924625,1e-9);
near((10**2+(-10)**2)/20,10);
// Independent review repairs: shifted density, two tails and fresh sampling rules.
for (const t of [-1, 0, .5]) {
  near(integral(x => Math.exp(t*x)*2*Math.exp(-2*(x-1)), 1, 45), 2*Math.exp(t)/(2-t), 1e-8);
}
near(phi(.46)-phi(-3.46), .6769718021, 1e-9);
const means = [0, .5, 1], probabilities = [4/9, 4/9, 1/9];
near(probabilities.reduce((a,b)=>a+b),1);
const mean = means.reduce((a,x,i)=>a+x*probabilities[i],0);
near(mean,1/3);
near(means.reduce((a,x,i)=>a+(x-mean)**2*probabilities[i],0),1/9);
near(3/Math.sqrt((73/12)*(1/6+1/8)),2.2522004891,1e-9);
near(1/Math.sqrt(9/100+16/144),2.2298824387,1e-9);
near(3/Math.sqrt(100/100+64/100),2.3426064283,1e-9);
near(2/Math.sqrt(36/100+64/144),2.2298824387,1e-9);
near((48/6)/2**2,2); near((40.5/6)/1.5**2,3);
console.log('FM04 independent MGF quadrature, discrete tails, inference and mixed-task arithmetic passed.');
