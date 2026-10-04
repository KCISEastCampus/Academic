// Run after Jekyll build. Integrate circuit evolution and check graph/energy interpretations.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const close = (a,b,tol=1e-8) => assert(Math.abs(a-b)<=tol*Math.max(Math.abs(a),Math.abs(b),1e-300),`${a} != ${b}`);
const round = (x,s) => assert.equal(x.toPrecision(2),s);
// Numerical circuit model: resistor voltage sets current, independent of exponential formula.
for(const [R,C,Vs] of [[1e5,1e-4,8],[47e3,220e-6,6],[10e3,470e-6,12]]) {
  for(const charging of [false,true]) {
    const duration=5*R*C, n=20000, dt=duration/n;
    let V=charging?0:Vs, moved=0, heat=0;
    const rate=v=>(charging?Vs-v:-v)/(R*C);
    for(let j=0;j<n;j++) {
      const k1=rate(V),k2=rate(V+k1*dt/2),k3=rate(V+k2*dt/2),k4=rate(V+k3*dt);
      const next=V+dt*(k1+2*k2+2*k3+k4)/6;
      const mid=(V+next)/2, I=(charging?Vs-mid:mid)/R;
      moved+=Math.abs(C*(next-V)); heat+=I*I*R*dt; V=next;
    }
    const target=Vs*(charging?1-Math.exp(-5):Math.exp(-5));
    close(V,target); close(moved,C*Vs*(1-Math.exp(-5)));
    const stored=.5*C*V*V;
    close(charging?Vs*moved:.5*C*Vs*Vs,stored+heat,1e-7);
  }
  const tau=R*C, half=tau*Math.log(2);
  close(Math.exp(-half/tau),.5); close(Math.exp(-2*half/tau),.25);
  close(Math.exp(-2*(half/2)/tau),.5);
  const h=tau*1e-5;
  close((Vs*Math.exp(-h/tau)-Vs*Math.exp(h/tau))/(2*h),-Vs/tau,1e-7);
}
const discharge=(V,t,tau)=>V*Math.exp(-t/tau);
round(discharge(8,15,10),'1.8'); round(1e-4*discharge(8,15,10)*1e6,'1.8e+2');
round(discharge(8,15,10)/1e5*1e6,'18');
round(6*(1-Math.exp(-1)),'3.8');round(6*Math.exp(-1),'2.2');round(6*Math.exp(-1)/47e3*1e6,'47');
round(10*Math.log(4),'14');close(1-Math.exp(-Math.log(4)),.75);
round(800*Math.exp(-1),'2.9e+2');round(800*(1-Math.exp(-1)),'5.1e+2');
round(3.2*Math.exp(-3),'0.16');round(3.2*(1-Math.exp(-3)),'3.0');
close(-1/-.1,10);close(10/1e5,100e-6);close((.105-.095)/2/.1+.02,.07);
close(10e3*470e-6,4.7);round(12*(1-Math.exp(-1)),'7.6');round(1.2*Math.exp(-1),'0.44');
round(20e3*68e-6*Math.log(2),'0.94');round(20e3*68e-6*Math.log(4),'1.9');close((2.25/9)**2,1/16);
close(200e-6*.3,60e-6);close(.001-.0004,.0006);
round(2.2*Math.log(10),'5.1');round((5-4.5)/2200*1e3,'0.23');close(.001*4.5,.0045);
const Reff=1/(1/1e6+1/1e7);close(Reff/1e6,10/11);close(1-Reff/1e6,1/11);
// Supplied log data replace the original graph: propagate unrounded values.
const Q0=Math.exp(-7.4),C=Q0/5,tau=1/.0127,R=tau/C,R2=1/(1/R-1/3.2e6);
round(Q0,'0.00061');round(C*1e6,'1.2e+2');round(tau,'79');round(R2/1e6,'0.81');
assert(R2>R);assert(5/3.2e6<5/R);
const I0=28.5e-6,Rj=220e3,V0=I0*Rj,tauj=1.83/Math.log(2),Cj=tauj/Rj;
round(V0,'6.3');round(Cj*1e6,'12');round(Cj*V0*Math.exp(-6/tauj)*1e6,'7.8');
// A voltage sensor's constant fractional loading changes slope; a timing offset changes intercept only.
const logSlope=(dt,offset,tau)=>(Math.log(8*Math.exp(-(dt+offset)/tau))-Math.log(8*Math.exp(-offset/tau)))/dt;
close(logSlope(20,3,10),-.1);close(-1/(10*Math.LN10),Math.log10(Math.exp(-2))/20);
const source=fs.readFileSync('alevel/a2-physics/capacitor-charge-and-discharge.md','utf8');
const html=fs.readFileSync('_site/alevel/a2-physics/capacitor-charge-and-discharge/index.html','utf8');
assert(!/[\u3400-\u9fff]/u.test(source));
assert.equal((source.match(/### Example /g)||[]).length,6);
assert.equal((source.match(/### Question /g)||[]).length,8);
assert.equal((html.match(/<details\b/g)||[]).length,18);
assert.equal((html.match(/<img[^>]*data-lazy-ignore="true"/g)||[]).length,3);
for(const id of ['the-circuit','discharging','charging','time-constant-and-time-to-halve','reading-graphs','energy-during-discharge','required-practical-6','practice','quick-reference']) assert(html.includes(`id="${id}"`),id);
console.log('Capacitor charge/discharge passed: numerical circuit integration, charge and energy conservation, graph units, log fitting, meter loading, adapted answers and lesson structure.');
