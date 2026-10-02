// Run after bundle exec jekyll build. Check motion derivatives, actual forces and limits.
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const g=9.8,close=(a,b,tol=1e-8)=>assert(Math.abs(a-b)<tol,`${a} != ${b}`);
const round=(v,s)=>assert.equal(v.toPrecision(3),s);
// E1, Q1: conversion, period, speed and acceleration.
for(const [r,rpm,w,v,a,period] of [[.4,90,3*Math.PI,1.2*Math.PI,3.6*Math.PI**2,2/3],[.2,60,2*Math.PI,.4*Math.PI,.8*Math.PI**2,1]]){
 close(rpm*2*Math.PI/60,w);close(r*w,v);close(v*v/r,a);close(2*Math.PI/w,period);close(v*period,2*Math.PI*r);
}
round(1.2*Math.PI,'3.77');round(3.6*Math.PI**2,'35.5');round(.4*Math.PI,'1.26');round(.8*Math.PI**2,'7.90');
// E2, Q2: derivatives, displaced centres, direction and constant speed.
const motions=[
 {r:t=>[1+3*Math.sin(2*t),2+3*Math.cos(2*t)],v:t=>[6*Math.cos(2*t),-6*Math.sin(2*t)],a:t=>[-12*Math.sin(2*t),-12*Math.cos(2*t)],c:[1,2],radius:3,speed:6,forceMass:null,initial:[1,5]},
 {r:t=>[1+2*Math.cos(2*t),-1+2*Math.sin(2*t)],v:t=>[-4*Math.sin(2*t),4*Math.cos(2*t)],a:t=>[-8*Math.cos(2*t),-8*Math.sin(2*t)],c:[1,-1],radius:2,speed:4,forceMass:.5,initial:[3,-1]}
];
for(const p of motions){
 assert.deepEqual(p.r(0),p.initial);
 for(const t of [0,.2,.8,1.5,3]){
  const h=1e-5,r=p.r(t),v=p.v(t),a=p.a(t),relative=r.map((x,i)=>x-p.c[i]);
  for(let i=0;i<2;i++){
   close((p.r(t+h)[i]-p.r(t-h)[i])/(2*h),v[i],1e-7);
   close((p.v(t+h)[i]-p.v(t-h)[i])/(2*h),a[i],1e-7);
   close(a[i],-4*relative[i]);
  }
  close(Math.hypot(...relative),p.radius);close(Math.hypot(...v),p.speed);
  close(Math.hypot(...a),p.speed**2/p.radius);close(a[0]*v[0]+a[1]*v[1],0);
  if(p.forceMass)close(p.forceMass*Math.hypot(...a),4);
 }
}
// E3, Q3: distinct radial and vertical reactions; string breaking threshold.
close(.25*4**2/.8,5);close(.25*g,2.45);close(.25*.8*40,8);round(Math.sqrt(40),'6.32');
for(const w of [Math.sqrt(40)-.01,Math.sqrt(40)+.01])assert.equal(.25*.8*w*w<=8,w<Math.sqrt(40));
close(3**2/.4,22.5);close(.2*22.5,4.5);close(.2*g,1.96);
// E4, Q4: required static friction, feasibility on both sides of the limit.
close(.5*.4*3**2,1.8);round(1.8/(.5*g),'0.367');round(Math.sqrt(.4*g/.4),'3.13');
assert(1.8<.4*.5*g);
const minRadius=12**2/(.3*g);round(minRadius,'49.0');
for(const r of [minRadius-1,minRadius+1])assert.equal(12**2/r<=.3*g,r>minRadius);
// E5, Q5: hanging-body equilibrium AND table-body radial equation.
for(const [mp,mq,r,v2,T] of [[.6,.9,.8,11.76,8.82],[.4,.8,.5,9.8,7.84]]){
 close(T,mq*g);close(mp*v2/r,T);close(mp*r*(Math.sqrt(v2)/r)**2,T);
}
round(Math.sqrt(11.76),'3.43');round(Math.sqrt(11.76)/.8,'4.29');round(Math.sqrt(9.8),'3.13');round(Math.sqrt(9.8)/.5,'6.26');
// E6, Q6: conical pendulum, full Cartesian force balance and geometry.
for(const [m,l,cos,w2,T] of [[.4,1.25,.8,9.8,4.9],[.5,1,9.8/16,16,8]]){
 const sin=Math.sqrt(1-cos*cos),r=l*sin,h=l*cos,v=r*Math.sqrt(w2);
 close(T*cos,m*g);close(T*sin,m*r*w2);close(T,m*l*w2);close(h,g/w2);close(r*r+h*h,l*l);
 close(v*v/r,r*w2);assert(T>m*g);assert(r>0&&h<l);
}
round(.75*Math.sqrt(9.8),'2.35');round(2*Math.PI/Math.sqrt(9.8),'2.01');
round(Math.acos(9.8/16)*180/Math.PI,'52.2');round(Math.sqrt(1-(9.8/16)**2),'0.790');round(4*Math.sqrt(1-(9.8/16)**2),'3.16');round(Math.PI/2,'1.57');
assert(g/(1*2**2)>1);close(g/(1*(Math.sqrt(g))**2),1); // impossible motion and zero-radius boundary
// E7, Q7: bowl geometry and force components independent of the conical formula.
for(const [m,a,d,r,R] of [[.2,.5,.3,.4,49/15],[.3,.6,.36,.48,4.9]]){
 const w2=g/d;
 close(r*r+d*d,a*a);close(R*d/a,m*g);close(R*r/a,m*r*w2);close(R,m*a*w2);assert(d>0&&d<a);
}
round(49/15,'3.27');round(Math.sqrt(g/.3),'5.72');round(.4*Math.sqrt(g/.3),'2.29');round(Math.sqrt(g/.36),'5.22');round(.48*Math.sqrt(g/.36),'2.50');
// E8, Q8: reaction and tension, including lift-off and an invalid negative reaction.
for(const [m,l,h,r,T,R] of [[.5,1,.6,.8,4.5,2.2],[.4,1.25,.75,1,4.5,1.22]]){
 close(r*r+h*h,l*l);close(T*r/l,m*r*9);close(R+T*h/l,m*g);
 const limit=g/h,limitT=m*l*limit;
 close(limitT*h/l,m*g);assert(limitT>0);
 for(const w2 of [limit-.1,limit+.1])assert.equal(m*(g-h*w2)>0,w2<limit);
}
round(Math.sqrt(g/.6),'4.04');round(.8*Math.sqrt(g/.6),'3.23');round(Math.sqrt(g/.75),'3.61');close(.4*(g-.75*16),-.88);
// E9: cone normal is perpendicular to the side, with complementary components.
const alpha=Math.PI/6,Rcone=5.88,rCone=.2*Math.sqrt(3),z=.6;
close(Rcone*Math.sin(alpha),.3*g);close(Rcone*Math.cos(alpha),.3*rCone*49);close(rCone,z*Math.tan(alpha));
close(-Math.cos(alpha)*Math.sin(alpha)+Math.sin(alpha)*Math.cos(alpha),0);round(rCone,'0.346');
// Q9: outer tension acts outwards on the inner particle.
close(3.2,.2*1*16);close(5.6-3.2,.3*.5*16);close(5.6,.2*1*16+.3*.5*16);
// Q10: resolve a smooth bank's reaction in world coordinates.
const bank=Math.atan(.25),Rb=900*g/Math.cos(bank);
close(Rb*Math.cos(bank),900*g);close(Rb*Math.sin(bank),900*14**2/80);round(Rb/1000,'9.09');
// Q11: orbital radius includes altitude; gravity here is supplied at the orbit.
const rOrbit=(6400+200)*1000,vOrbit=Math.sqrt(9*rOrbit),wOrbit=vOrbit/rOrbit,tOrbit=2*Math.PI/wOrbit;
close(400*vOrbit*vOrbit/rOrbit,3600,1e-6);close(rOrbit*wOrbit*wOrbit,9);close(vOrbit*tOrbit,2*Math.PI*rOrbit,1e-6);
assert(rOrbit>6400*1000);round(vOrbit,'7.71e+3');round(wOrbit,'0.00117');round(tOrbit,'5.38e+3');
const root=path.join(__dirname,'..');
const source=fs.readFileSync(path.join(root,'alevel/a2-mathematics/mechanics/uniform-circular-motion.md'),'utf8').replace(/\r\n?/g,'\n');
const html=fs.readFileSync(path.join(root,'_site/alevel/a2-mathematics/mechanics/uniform-circular-motion/index.html'),'utf8').replace(/\r\n?/g,'\n');
assert.equal((source.match(/^### Example \d+/gm)||[]).length,9);
assert.equal((source.match(/^### Q\d+/gm)||[]).length,11);
assert.equal((html.match(/<table\b/g)||[]).length,0);
for(const [,formula] of source.matchAll(/\$\$([\s\S]*?)\$\$/g))assert(html.includes(formula.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;')),`Damaged formula: ${formula}`);
for(const name of ['circular-velocity-acceleration','conical-pendulum-forces','circular-motion-bowl','circular-motion-contact','circular-motion-cone']){
 const svg=fs.readFileSync(path.join(root,'assets/img/a2-math-mech',name+'.svg'),'utf8');assert(svg.includes('<title')&&svg.includes('<desc'));
}
console.log('Uniform Circular Motion passed: 9 examples, 11 practice answers, derivatives, displaced centres, force components, friction/breaking/contact limits, pendulum feasibility, bowl/cone geometry and orbital radius.');
