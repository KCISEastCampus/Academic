// Run after bundle exec jekyll build. Compare energy answers with force/kinematics checks.
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const g=9.8, close=(a,b)=>assert(Math.abs(a-b)<1e-8,`${a} != ${b}`);
const round=(v,s)=>assert.equal(v.toPrecision(3),s);
// E1, Q1: signed work and the work of the resultant agree.
for(const [F,s,f,W,net] of [[40,3,12,60,24],[30,4,10,60,20]]){
 const forward=F*Math.cos(Math.PI/3);
 close(forward*s,W);close((forward-f)*s,net);close(W-f*s,net);
}
// E2, E3: average power also equals force times the steady speed.
close(20*g*2,392);close(392/4,20*g*.5);
close(54*5/18,15);close(2400*15,36000);close(2400*(15*40),1.44e6);
// E4, Q4: distinguish driving power from the rate of increase of KE.
for(const [m,f,sin,P,v,a] of [[1000,980,.05,29400,10,1.47],[800,400,0,16000,20,.5]]){
 const D=P/v;close(D-f-m*g*sin,m*a);
 close(P-f*v-m*g*sin*v,m*a*v);
}
for(const [sin,v] of [[.05,20],[0,30],[-.05,60]])close(29400/v-980-1000*g*sin,0);
close(24000/60,400);close(72*5/18,20);
// There is no powered downhill steady speed with resistance <= weight component.
for(const f of [490,400])assert(f-1000*g*.05<=0);
// E5: vector speed, KE and PE zero-level shifts.
close(Math.hypot(3,4),5);close(.5*2*5**2,25);close(2*g*2.5,49);
close(25+2*g*2.5,74);close(2*g*(2.5-3),-9.8);close(25-9.8,15.2);
for(const [hi,hf] of [[2.5,4],[2.5,-1]])close(2*g*(hf-hi),2*g*((hf-3)-(hi-3)));
// E6, E7 and Q2, Q3, Q5, Q6: independently use F=ma and v^2=u^2+2as.
for(const [m,u,s,D,f,sin,v2,work] of [
 [4,8,5,12,7.84,0,74.4,60],
 [5,2,4,52.5,8,.5,36,210],
 [10,0,3,374/3,0,1,16,374],
 [5,0,5,20,6.8,0,26.4,100],
 [3,2,4,0,21.525,-1,25,0],
 [2,0,4,0,2,-.25,11.6,0]
]){
 const a=(D-f-m*g*sin)/m;
 close(u*u+2*a*s,v2);close(D*s,work);
 const dKE=.5*m*(v2-u*u),dPE=m*g*s*sin;
 close(work-f*s,dKE+dPE);close(work-f*s-dPE,dKE);
 assert(v2>=0);
}
round(Math.sqrt(74.4),'8.63');round(148.8/7.84,'19.0');
close(74.4-2*(7.84/4)*(148.8/7.84),0); // E6 stopping after the pull ends.
close(5*g-25*3/5,34);close(.2*34,6.8);round(Math.sqrt(26.4),'5.14');round(374/3,'125');
close(3*g*4,117.6);close(.5*3*(25-4),31.5);close(21.525*4,86.1);round(21.525,'21.5');
round(Math.sqrt(11.6),'3.41');round(25/2.9,'8.62');close(2*(2.9/2)*(25/2.9),25);
// E8, Q8: smooth fixed wire, energy, height bounds and normal-force direction.
close(4.9**2/(2*g),1.225);round(1.225,'1.23');close(1.225-1,.225);
assert(1.225>0&&1.225<2);
// At the stationary point above the centre, weight has an inward component:
// the wire must exert an outward reaction, possible because the bead is threaded.
const inward=[-Math.sqrt(1-.225**2),.225];
assert(g*inward[1]>0);close(inward[0]**2+inward[1]**2,1);
round(Math.sqrt(2*g*.8),'3.96');close(Math.sqrt(2*g*1.6),5.6);
// Q7: compare the energy result with vertical motion at the top and at landing.
const u=14.7,top=u/g,T=(u+Math.sqrt(u*u+2*g))/g;
close(1+u*top-g*top*top/2,12.025);close(u-g*top,0);
close(1+u*T-g*T*T/2,0);close((u-g*T)**2,235.69);assert(u-g*T<0);
round(12.025,'12.0');round(Math.sqrt(235.69),'15.4');
const root=path.join(__dirname,'..');
const source=fs.readFileSync(path.join(root,'alevel/a2-mathematics/mechanics/work-and-energy.md'),'utf8').replace(/\r\n?/g,'\n');
const html=fs.readFileSync(path.join(root,'_site/alevel/a2-mathematics/mechanics/work-and-energy/index.html'),'utf8').replace(/\r\n?/g,'\n');
assert.equal((source.match(/^### Example \d+/gm)||[]).length,8);
assert.equal((html.match(/<table\b/g)||[]).length,1);
for(const [,formula] of source.matchAll(/\$\$([\s\S]*?)\$\$/g))assert(html.includes(formula.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;')),`Damaged formula: ${formula}`);
for(const name of ['work-force-components','work-energy-slope','energy-smooth-wire']){
 const svg=fs.readFileSync(path.join(root,'assets/img/a2-math-mech',name+'.svg'),'utf8');assert(svg.includes('<title')&&svg.includes('<desc'));
}
console.log('Work and Energy passed: 8 examples, 8 practice answers, signed work, vehicle power, force/kinematics cross-checks, zero levels, friction, smooth-wire constraints and formula preservation.');
