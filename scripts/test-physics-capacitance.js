// Run after a Jekyll build. Check charge transfer and energy independently.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const close = (a,b) => assert(Math.abs(a-b) <= 1e-8*Math.max(Math.abs(a),Math.abs(b),1e-300), `${a} != ${b}`);
const round = (x,s) => assert.equal(x.toPrecision(2),s);
// Integrate the changing voltage as charge is moved, rather than assume final V throughout.
function stored(C,Q) {
  const steps=2000, dq=Q/steps;
  let work=0;
  for(let i=0;i<steps;i++) work+=((i+.5)*dq/C)*dq;
  return work;
}
for(const [C,V] of [[220e-6,9],[470e-6,12],[22e-6,12],[3e-6,8]]) {
  const Q=C*V, energy=stored(C,Q);
  close(energy,.5*Q*V); close(energy,Q*Q/(2*C));
  close(V*Q-energy,energy); // Resistive charging from a constant supply dissipates the other half.
}
round(220e-6*9,'0.0020'); round(220e-6*9/1.6e-19,'1.2e+16');
const C=20e-6/.05, dt=(8-2)/.05;
close(C,400e-6); close(dt,120); close(20e-6*dt,.0024);
close(C*2+20e-6*dt,C*8);
const plateC=8.85e-12*3*.012/.0005;
round(plateC,'6.4e-10'); round(plateC*12,'7.6e-9'); close(12/.0005,24000);
close(8.85e-12*3*.024/.00025,4*plateC);
round(stored(470e-6,470e-6*12),'0.034');
round(stored(470e-6,470e-6*5),'0.0059');
round(stored(470e-6,470e-6*12)-stored(470e-6,470e-6*5),'0.028');
// Test changes for several dielectric constants, including the vacuum limit.
for(const r of [1,2.5,3,4]) {
  const C0=22e-6,V0=12,Q0=C0*V0, E0=stored(C0,Q0), C1=r*C0;
  close(stored(C1,C1*V0),r*E0);
  close(stored(C1,Q0),E0/r); close(Q0/C1,V0/r);
  close((Q0/C1)/.001,(V0/.001)/r);
  close(C1*V0-Q0,(r-1)*Q0);
}
close(22e-6*12,264e-6); round(stored(88e-6,88e-6*12),'0.0063');
round(stored(88e-6,264e-6),'0.00040'); close(264e-6/88e-6,3);
close(60e-6/12,5e-6); close(5e-6*18,90e-6);
// Changing separation at fixed Q keeps field constant, while energy rises by mechanical work.
const C0=5e-6,V0=12,Q0=C0*V0,d0=.001;
close((Q0/(C0/2))/(2*d0),V0/d0);
close(stored(C0/2,Q0),2*stored(C0,Q0));
close(stored(C0/2,(C0/2)*V0),stored(C0,Q0)/2);
close(24e-6/8,3e-6); close(stored(3e-6,24e-6),96e-6);
close(8/24e-6,1/3e-6); close(8/24,(1/3e-6)*1e-6);
close(stored(.001,.001*10)-stored(.001,.001*6),.032);
close(.75*.032,.024); close(stored(.001,.001*6),.018);
close(.180*(9-3)/36,.030); // Jan 2020 Q23: mF, not μF.
const source=fs.readFileSync('alevel/a2-physics/capacitance.md','utf8');
const html=fs.readFileSync('_site/alevel/a2-physics/capacitance/index.html','utf8');
assert(!/[\u3400-\u9fff]/u.test(source));
assert.equal((source.match(/### Example /g)||[]).length,5);
assert.equal((source.match(/### Question /g)||[]).length,8);
assert.equal((html.match(/<details\b/g)||[]).length,18);
assert.equal((html.match(/<img[^>]*data-lazy-ignore="true"/g)||[]).length,2);
for(const id of ['charge-and-capacitance','graphs-and-constant-current','parallel-plate-capacitors','energy-stored','dielectrics-and-polar-molecules','connected-or-isolated','practice','quick-reference']) assert(html.includes(`id="${id}"`),id);
assert(html.includes('A2 Physics</a>'));
console.log('Capacitance passed: charge transfer, energy integration, connection conditions, geometry, graph units, all numerical answers and rendered structure.');
