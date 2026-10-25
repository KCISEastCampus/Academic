// Run directly with node; source and mathematics checks only. Check motion derivatives, actual forces and limits.
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

// New independent tasks and matched retries, including both sides of each feasibility limit.
close(.2*2**2/.5,1.6);close(2*Math.PI/.8,2.5*Math.PI);close(60/.8,75);
close((.3*2.5*Math.PI)*.8,2*Math.PI*.3);close((.6*2.5*Math.PI)*.8,2*Math.PI*.6);
close((.6*(2.5*Math.PI)**2)/(.3*(2.5*Math.PI)**2),2);
for(const t of [0,.2,.8,1.5]){
 const h=1e-5,pos=t=>[2+.5*Math.cos(4*t),-1+.5*Math.sin(4*t)];
 const v=[-2*Math.sin(4*t),2*Math.cos(4*t)],a=[-8*Math.cos(4*t),-8*Math.sin(4*t)],r=pos(t);
 for(let i=0;i<2;i++){close((pos(t+h)[i]-pos(t-h)[i])/(2*h),v[i],1e-7);close(a[i],-16*(r[i]-[2,-1][i]));}
 close(Math.hypot(r[0]-2,r[1]+1),.5);close(Math.hypot(...v),2);close(Math.hypot(...a),8);close(.4*Math.hypot(...a),3.2);close(v[0]*a[0]+v[1]*a[1],0);
}
close(.3*3.2**2/.6,5.12);assert(5.12>4.5);close(.3*3**2/.6,4.5);
const maxRadius=.25*g/16;close(maxRadius,.153125);
for(const r of [maxRadius-.001,maxRadius+.001])assert.equal(.2*r*16<=.25*.2*g,r<maxRadius);
close(.2*.12*16,.384);close(.2*.2*16,.64);assert(.384<.49&&.64>.49);
const depth=g/(49/3),pendT=.2*.8*(49/3);close(depth,.6);close(pendT*(depth/.8),.2*g);
assert(.8>depth&&.5<depth);close(.8**2-depth**2,.28);round(Math.sqrt(.28),'0.529');
const coneR=.2*g/Math.sin(Math.PI/3),coneW2=coneR*Math.cos(Math.PI/3)/(.2*.4);
close(coneR,3.92/Math.sqrt(3));close(coneW2,24.5/Math.sqrt(3));round(Math.sqrt(coneW2),'3.76');
close(.4/Math.tan(Math.PI/3),.4/Math.sqrt(3));round(.4/Math.sqrt(3),'0.231');
close(2*g*(.3/.6),g);assert(2*g*Math.sin(Math.PI/4)>g);close(.6**2-.3**2,.27);
const reverseOrbitRadius=6000**2/4;close(reverseOrbitRadius,9e6);close(reverseOrbitRadius-6e6,3e6);
close(reverseOrbitRadius*(1/1500)**2,4);close(2*Math.PI*reverseOrbitRadius/6000,3000*Math.PI);
// January 2025 Q3: friction capacity, vector acceleration and its actual force.
const officialLimit=Math.sqrt(.45*g/.3);assert(Math.abs(officialLimit-3.834057903)<1e-8);
for(const w of [officialLimit-.01,officialLimit+.01])assert.equal(20*.3*w*w<=.45*20*g,w<officialLimit);
for(const t of [0,.2,.7]){
 const a=[-2.7*Math.cos(3*t),-2.7*Math.sin(3*t)],force=a.map(x=>20*x);
 close(Math.hypot(...a),2.7);close(Math.hypot(...force),54);assert(Math.hypot(...force)<88.2);
}

// Source-only checks: this authoring group does not build or consume stale _site HTML.
const root=path.join(__dirname,'..');
const course='alevel/a2-mathematics/mechanics';
const topic="uniform-circular-motion";
const read=file=>fs.readFileSync(path.join(root,file),'utf8').replace(/\r\n?/g,'\n');
const english=read(`${course}/${topic}.md`),chinese=read(`zh/${course}/${topic}.md`);
const math=text=>text.match(/\$\$[\s\S]*?\$\$|\$[^$\r\n]+\$/g)||[];
const legacyAnchors=["sources-and-scope", "angular-speed-and-angular-velocity", "radial-acceleration", "example-1-revolutions-speed-and-acceleration", "example-2-showing-a-path-is-a-circle", "forces-in-a-horizontal-circle", "example-3-tension-and-a-breaking-limit", "friction-and-road-bends", "example-4-a-block-on-a-rotating-disc", "connected-particles-and-different-radii", "example-5-a-string-through-a-hole", "the-conical-pendulum", "example-6-angle-given-from-the-vertical", "motion-inside-a-smooth-bowl", "example-7-radius-of-the-bowl-and-radius-of-the-circle", "contact-and-lifting-off-a-plane", "example-8-a-raised-attachment-point", "motion-inside-a-smooth-cone", "example-9-the-normal-reaction-on-a-cone", "circular-orbits", "practice", "q1-clockwise-rotation", "q2-integrating-to-find-a-circle", "q3-a-smooth-vertical-rim", "q4-a-phone-on-a-train-table", "q5-a-hanging-particle-in-equilibrium", "q6-is-a-conical-pendulum-possible", "q7-a-horizontal-circle-in-a-bowl", "q8-check-the-contact-model", "q9-two-particles-at-different-radii", "q10-a-smooth-banked-road", "q11-a-satellites-orbital-radius", "independent-method-choice", "retry-change-the-structure", "method-summary"];
const recoveryAnchors=["turning-check", "rotation-retry", "vector-retry", "radial-retry", "friction-retry", "pendulum-retry", "cone-check", "surface-retry", "orbit-retry", "contact-retry", "later-check"];
assert.deepEqual(math(chinese),math(english),'English and Chinese TeX sequences, including help, must match');
assert(chinese.includes(`lang: zh-CN\ntranslation_of: /${course}/${topic}/\npermalink: /zh/${course}/${topic}/`));
for(const prompt of english.match(/^\*\*Question:\*\*.*$/gm)||[])assert(chinese.includes(prompt),`English question changed: ${prompt}`);
for(const q of (english.split('## Practice')[1]||'').split(/^### Q[^\n]*\n\n/m).slice(1))assert(chinese.includes(q.split('<details')[0].trim()),'Full practice prompt retained');
for(const q of english.matchAll(/\*\*Question:\*\*[^\n]*(?:position|velocity)\n\n\$\$[\s\S]*?\$\$\n\n([^\n]+)/g))assert(chinese.includes(q[1]),'Multipart English instruction retained');
const images=text=>[...text.matchAll(/!\[[^\]]*\]\(([^)]+)\)/g)].map(m=>m[1]);
assert.deepEqual(images(chinese),images(english),'Equivalent image data in both languages');
for(const source of [english,chinese]){
 assert(source.includes('reading_layout: true'));
 assert(!/<details[^>]*\bopen\b/.test(source),'Hints and solutions start closed');
 const ids=[...source.matchAll(/\{#([^}]+)\}|\bid="([^"]+)"/g)].map(m=>m[1]||m[2]);
 assert.equal(new Set(ids).size,ids.length,'Unique explicit anchors');
 for(const id of [...legacyAnchors,...recoveryAnchors])assert(ids.includes(id),`Missing retained or recovery anchor: ${id}`);
 for(const [,id] of source.matchAll(/\]\(#([^)]+)\)/g))assert(ids.includes(id),`Missing local recovery destination: ${id}`);
 const checks=[...source.matchAll(/<div class="lesson-check" markdown="1">([\s\S]*?)<\/div>/g)].map(m=>m[1]);
 const examples=[...source.matchAll(/<div class="worked-example" markdown="1">([\s\S]*?)<\/div>/g)].map(m=>m[1]);
 assert.equal(examples.length,9,'Keep every original worked example');
 assert.equal(checks.length,(source.match(/class="lesson-check"/g)||[]).length,'Every task has a complete boundary');
 for(const example of examples){
  assert(example.includes('**Question:**')&&example.includes('$$'),'Public complete worked example');
  assert(!example.includes('<details')&&!example.includes('<div'),'No hidden or nested worked solutions');
 }
 for(const check of checks){
  assert(!check.includes('<div'),'Tasks cannot contain the next task');
  assert(check.indexOf('**Question:**')>=0&&check.indexOf('**Question:**')<check.indexOf('<details'),'Question before help');
  const panels=[...check.matchAll(/<details markdown="1">\s*<summary>([^<]+)<\/summary>([\s\S]*?)<\/details>/g)];
  assert.equal(panels.length,2,'Separate complete hint and solution for each task');
  assert(/^(Hint|提示)$/.test(panels[0][1]));assert(/^(Solution and check|解答与检查)$/.test(panels[1][1]));
  assert(panels.every(p=>p[2].trim().length>0),'Help panels contain feedback');
  assert(!panels.some(p=>p[2].includes('<details')),'No nested disclosures');
 }
 assert.equal((source.match(/<details\b/g)||[]).length,2*checks.length,'Every disclosure belongs to its own task');
 assert.equal((source.match(/^### Q\d+\b/gm)||[]).length,11,'Original practice questions retained');
 assert(source.includes('/mechanics/#mixed-problems')&&source.includes('/mechanics/#later-review'),'Concrete mixed and delayed route');
 assert(source.includes('Version 1.0 Final')&&source.includes('9660')&&source.includes('#page='),'Traceable official scope and paired paper references');
 for(const [,formula] of source.matchAll(/\$\$([\s\S]*?)\$\$/g))assert(!formula.includes('|'),'Use TeX delimiters, not Markdown table pipes');
 for(const asset of images(source))assert(fs.existsSync(path.join(root,asset)),'Retained teaching image exists');
}
for(const name of ["circular-velocity-acceleration", "conical-pendulum-forces", "circular-motion-bowl", "circular-motion-contact", "circular-motion-cone"]){
 const svg=read(`assets/img/a2-math-mech/${name}.svg`);assert(svg.includes('<title')&&svg.includes('<desc'),'Accessible teaching diagrams retained');
}
const {init}=require('../assets/vendor/mathjax/3.2.2/es5/node-main.js');
init({loader:{load:['input/tex','output/svg']},tex:{packages:['base','ams']}}).then(mj=>{
 const formulas=new Set(math(english));
 for(const formula of formulas){
  const display=formula.startsWith('$$'),n=display?2:1;
  const svg=mj.startup.adaptor.outerHTML(mj.tex2svg(formula.slice(n,-n),{display}));
  assert(!svg.includes('data-mml-node="merror"')&&!svg.includes('data-mjx-error'),`Invalid TeX: ${formula}`);
 }
 console.log(`${topic}: original and new numerical/model checks; bilingual ${math(english).length} TeX fragments, ${formulas.size} unique TeX renders, retained anchors, 22 task boundaries and source-only structure passed. No build/browser claim.`);
}).catch(error=>{console.error(error);process.exitCode=1;});
