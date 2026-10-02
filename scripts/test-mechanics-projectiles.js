// Run after bundle exec jekyll build. Check motion, level crossings and boundaries.
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const close=(a,b)=>assert(Math.abs(a-b)<1e-8,`${a} != ${b}`);
const motion=(ux,uy,g=9.8)=>({r:t=>[ux*t,uy*t-g*t*t/2],v:t=>[ux,uy-g*t]});
const round=(a,d)=>assert.equal(a.toPrecision(3),d);
const cases=[[20,15,9.8],[14,9.8,9.8],[10,9.8,9.8],[20,0,10],[10*Math.sqrt(3),-10,10],[15,19.6,9.8],[12,16,9.8],[12,14.7,9.8],[8,14.7,9.8],[6,0,10],[8,-6,10],[10,14.7,9.8]];
for(const [ux,uy,g] of cases){
 const p=motion(ux,uy,g);
 for(const t of [0,.5,1,2,3]){
  const [x,y]=p.r(t),[vx,vy]=p.v(t),h=1e-5;
  close((p.r(t+h)[0]-p.r(t-h)[0])/(2*h),vx);
  close((p.r(t+h)[1]-p.r(t-h)[1])/(2*h),vy);
  close((p.v(t+h)[1]-p.v(t-h)[1])/(2*h),-g);
  close(vx*vx+vy*vy+2*g*y,ux*ux+uy*uy);
  close(y,(uy/ux)*x-g*x*x/(2*ux*ux));
 }
}
const p=motion(20,15);close(p.r(1)[0],20);close(p.r(1)[1],10.1);
round(Math.hypot(...p.v(1)),'20.7');round(Math.hypot(...p.r(1)),'22.4');round(Math.atan2(p.v(1)[1],20)*180/Math.PI,'14.6');
for(const [ux,uy,T,H,R] of [[14,9.8,2,4.9,28],[12,14.7,3,11.025,36]]){
 const m=motion(ux,uy);close(m.r(T)[1],0);close(m.r(T)[0],R);close(m.r(T/2)[1],H);close(m.v(T/2)[1],0);assert(ux>0);
}
for(const [ux,uy,g,T,level,x] of [[10,9.8,9.8,3,-14.7,30],[20,0,10,Math.sqrt(3),-15,20*Math.sqrt(3)],[10*Math.sqrt(3),-10,10,1,-15,10*Math.sqrt(3)],[8,14.7,9.8,4,-19.6,32],[6,0,10,1,-5,6],[8,-6,10,.8,-8,6.4]]){
 const m=motion(ux,uy,g);close(m.r(T)[1],level);close(m.r(T)[0],x);assert(m.v(T)[1]<0);
 // No earlier landing: a concave-down height has its minimum on the endpoints.
 for(const t of [.01*T,.25*T,.5*T,.75*T,.99*T])assert(m.r(t)[1]>level);
}
round(Math.hypot(...motion(10,9.8).v(3)),'22.0');round(Math.atan(19.6/10)*180/Math.PI,'63.0');
round(Math.hypot(...motion(12,16).v(1)),'13.5');round(Math.atan(6.2/12)*180/Math.PI,'27.3');round(Math.hypot(...motion(8,14.7).v(4)),'25.8');
for(const [ux,uy,height,t1,t2] of [[15,19.6,14.7,1,3],[10,14.7,9.8,1,2]]){
 const m=motion(ux,uy);close(m.r(t1)[1],height);close(m.r(t2)[1],height);
 assert(m.v(t1)[1]>0&&m.v(t2)[1]<0);
 for(const t of [t1-.1,(t1+t2)/2,t2+.1])assert.equal(m.r(t)[1]>=height,t>=t1&&t<=t2);
 close(m.r(t2)[0]-m.r(t1)[0],ux*(t2-t1));
}
close(motion(20,15).r(1)[1]-9,1.1);close(motion(10,14.7).r(2)[1]-10,-.2);
assert(motion(10,14.7).r(1.5)[1]>10); // High enough at the top still fails the wall check.
for(const [height,qs,angles] of [[5,[1,3],['45.0','71.6']],[2.5,[2-Math.sqrt(2),2+Math.sqrt(2)],['30.4','73.7']]]){
 qs.forEach((q,i)=>{
  const ux=14/Math.sqrt(1+q*q),uy=q*ux,T=10/ux,m=motion(ux,uy);
  close(m.r(T)[0],10);close(m.r(T)[1],height);assert(T>0);assert(uy>0);
  assert.equal((Math.atan(q)*180/Math.PI).toFixed(1),angles[i]);
 });
}
for(const [V,g,ceiling,R] of [[14,9.8,2.5,10*Math.sqrt(3)],[20,10,5,20*Math.sqrt(3)]]){
 const angle=Math.PI/6,ux=V*Math.cos(angle),uy=V*Math.sin(angle),m=motion(ux,uy,g);
 close(m.r(uy/g)[1],ceiling);close(m.r(2*uy/g)[0],R);
 for(const theta of [.1,angle-.01,angle+.01]){
  const peak=(V*Math.sin(theta))**2/(2*g);
  assert.equal(peak<ceiling,theta<angle);
 }
}
const root=path.join(__dirname,'..');
const source=fs.readFileSync(path.join(root,'alevel/a2-mathematics/mechanics/projectiles.md'),'utf8').replace(/\r\n?/g,'\n');
const html=fs.readFileSync(path.join(root,'_site/alevel/a2-mathematics/mechanics/projectiles/index.html'),'utf8').replace(/\r\n?/g,'\n');
assert.equal((source.match(/^### Example \d+/gm)||[]).length,8);
assert.equal((html.match(/<table\b/g)||[]).length,1);
for(const [,formula] of source.matchAll(/\$\$([\s\S]*?)\$\$/g))assert(html.includes(formula.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;')),`Damaged formula: ${formula}`);
for(const name of ['projectile-components','projectile-raised-launch','projectile-two-paths']){
 const svg=fs.readFileSync(path.join(root,'assets/img/a2-math-mech',name+'.svg'),'utf8');assert(svg.includes('<title')&&svg.includes('<desc'));
}
console.log('Projectiles passed: 8 examples, 8 practice answers, derivatives, energy checks, landing roots, height intervals, targets, wall collision, ceiling boundaries and formula preservation.');
