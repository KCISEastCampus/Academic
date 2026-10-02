// Run after bundle exec jekyll build. Check the Chapter 10 answers and rendered pages.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = path.join(__dirname, '..');
const close = (a, b) => assert(Math.abs(a - b) < 1e-5, `${a} != ${b}`);
const vectorClose = (a, b) => { assert.equal(a.length,b.length); a.forEach((v, i) => close(v, b[i])); };
const derivative = (f, t) => f(t + 1e-5).map((v, i) => (v - f(t - 1e-5)[i]) / 2e-5);
const magnitude = v => Math.hypot(...v);

// Recover the original velocities/accelerations and both stated conditions.
const examples = [
  {r:t=>[t*t+1,t**3-2*t,3*t], v:t=>[2*t,3*t*t-2,3], a:t=>[2,6*t,0]},
  {r:t=>[2*t*t+2,t**3-2*t+5], v:t=>[4*t,3*t*t-2], initial:[0,[2,5]]},
  {r:t=>[t*t+t+2,t**3-t-1], v:t=>[2*t+1,3*t*t-1], a:t=>[2,6*t], initial:[1,[4,-1]], velocity:[1,[3,2]]},
  {r:t=>[5-2*Math.exp(-t),Math.sin(t)-1,1-t*t], v:t=>[2*Math.exp(-t),Math.cos(t),-2*t], a:t=>[-2*Math.exp(-t),-Math.sin(t),-2], initial:[0,[3,-1,1]]},
  {r:t=>[2*t,t*t-4*t], v:t=>[2,2*t-4], a:t=>[0,2]},
  {r:t=>[2*t**3-t,t*t+3,-4*t], v:t=>[6*t*t-1,2*t,-4], a:t=>[12*t,2,0]},
  {r:t=>[3*t*t-1,t*t-3*t+4], v:t=>[6*t,2*t-3], initial:[0,[-1,4]]},
  {r:t=>[2*t**3/3-5*t+29/3,-t*t+5*t-4], v:t=>[2*t*t-5,5-2*t], a:t=>[4*t,-2], initial:[2,[5,2]], velocity:[2,[3,1]]},
  {r:t=>[3*t,t*t-2*t], v:t=>[3,2*t-2], a:t=>[0,2]},
  {r:t=>[Math.exp(t)+1,2-2*Math.cos(t),t*t+1], v:t=>[Math.exp(t),2*Math.sin(t),2*t], a:t=>[Math.exp(t),2*Math.cos(t),2], initial:[0,[2,0,1]]},
];
for (const example of examples) {
  for (const t of [0,.5,1,2,3]) {
    vectorClose(derivative(example.r,t), example.v(t));
    if (example.a) vectorClose(derivative(example.v,t), example.a(t));
  }
  if (example.initial) vectorClose(example.r(example.initial[0]), example.initial[1]);
  if (example.velocity) vectorClose(example.v(example.velocity[0]), example.velocity[1]);
}
vectorClose(examples[1].r(2),[10,9]); close(magnitude(examples[1].v(2)),Math.sqrt(164));
vectorClose(examples[2].r(2),[8,5]);
close(Math.acos(2/Math.sqrt(14))*180/Math.PI,57.688466762576155);
close(magnitude(examples[5].v(1)),Math.sqrt(45));
close(magnitude(examples[3].v(0)),Math.sqrt(5));
close(magnitude(examples[9].v(0)),1);
for (const [r,v,a,scale] of [[examples[4].r,examples[4].v,examples[4].a,2],[examples[8].r,examples[8].v,examples[8].a,3]]) {
  for (const t of [0,.5,1,2,3]) { const [x,y]=r(t); close(y,x*x/(scale*scale)- (scale===2?2:2/3)*x); }
  const t=scale===2?2:1; close(v(t).reduce((s,x,i)=>s+x*a(t)[i],0),0); assert(magnitude(v(t))>0);
}
for (const t of [0,.5,1,2,3]) {
  close(magnitude([t-1,t+1])**2,2*t*t+2);
  assert(magnitude([t-1,t+1])>=Math.sqrt(2)-1e-10);
}
close(Math.abs(-1-3)+Math.abs(0-(-1)),5);

// Modelling: check each body's equation, not just the combined result.
const g=9.8;
close(3000-1000,1000*2); close(1000,500*2);
close(5060-460*g,460*1.2); close(660-60*g,60*1.2);
close(4508,460*g); close(588,60*g);
close(5*g-36.75,5*g/4); close(36.75-3*g,3*g/4);
close(2400-180-600,900*1.8); close(600-60,300*1.8);
close(5130-570*g,-570*.8); close(630-70*g,-70*.8);

// Corrected retained reference: component projectile equations and toppling geometry.
const flight=10/4.9; close(10*flight-4.9*flight*flight,0);
close(20*Math.cos(Math.PI/6)*flight,200*Math.sqrt(3)/9.8);
for (const theta of [0,.1,.2,.3]) {
  const d=.7,h=1.2,r=40;
  const speedSquared=r*g*(d+h*Math.tan(theta))/(h-d*Math.tan(theta));
  close(g*(d*Math.cos(theta)+h*Math.sin(theta)),speedSquared/r*(h*Math.cos(theta)-d*Math.sin(theta)));
  const normal=g*Math.cos(theta)+speedSquared/r*Math.sin(theta);
  const friction=g*Math.sin(theta)-speedSquared/r*Math.cos(theta);
  close(normal*Math.cos(theta)+friction*Math.sin(theta),g);
  close(-normal*Math.sin(theta)+friction*Math.cos(theta),-speedSquared/r);
}

// Retained rough-prism question: check both force components and moments at
// different points, including the two limiting friction directions.
const mu=(25-Math.sqrt(301))/18, W=100, radius=1.4;
assert(mu>0 && mu<1); assert((25+Math.sqrt(301))/18>1);
const RT=3*W/5, RA=W*(13-9*mu)/25;
const forces=[
  {p:[0,0],f:[mu*RA,RA]},
  {p:[4*radius/3*4/5,4*radius/3*3/5],f:[-RT*3/5+mu*RT*4/5,RT*4/5+mu*RT*3/5]},
  {p:[radius*4/5,radius*3/5],f:[0,-W]},
];
vectorClose(forces.reduce((sum,{f})=>sum.map((v,i)=>v+f[i]),[0,0]),[0,0]);
assert(RA>0 && RT>0);
for(const origin of [[0,0],[radius*4/5,radius*3/5],[2,1]]) {
  close(forces.reduce((sum,{p,f})=>sum+(p[0]-origin[0])*f[1]-(p[1]-origin[1])*f[0],0),0);
}

// Cliff launch and suspended cut-out: recover the question's original conditions.
for(const [H,D,angle] of [[10,25,.3],[4,20,.6],[18,12,1]]) {
  const u2=g*D*D/(2*(H+D*Math.tan(angle))*Math.cos(angle)**2);
  const ux=Math.sqrt(u2)*Math.cos(angle),uy=Math.sqrt(u2)*Math.sin(angle),t=D/ux;
  close(uy*t-g*t*t/2,-H);
  close(H+uy*uy/(2*g),H+D*D*Math.tan(angle)**2/(4*(H+D*Math.tan(angle))));
  assert(t>uy/g);
}
const massRatio=6/7, xL=(144*0-36*3)/(144-36), xG=(xL+12*massRatio)/(1+massRatio);
close(xG,5); close(xG*12/13-12*5/13,0); close(xG*5/13+12*12/13,13);

const pages=['','mathematical-modelling','vectors-and-kinematics','forces-equilibrium-and-friction','moments-and-rigid-objects','centres-of-mass','newtons-laws-of-motion','projectiles','work-and-energy','uniform-circular-motion','quick-reference'];
for (const name of pages) {
  const source=fs.readFileSync(path.join(root,'alevel/a2-mathematics',name?'mechanics/'+name+'.md':'mechanics.md'),'utf8');
  const html=fs.readFileSync(path.join(root,'_site/alevel/a2-mathematics/mechanics',name,'index.html'),'utf8');
  assert(!/[\u3400-\u9fff]/u.test(source),`${name}: English required`);
  assert.equal((html.match(/<h1\b/g)||[]).length,1,`${name}: duplicate title`);
  const ids=Array.from(html.matchAll(/\bid="([^"]+)"/g),m=>m[1]);
  assert.equal(new Set(ids).size,ids.length,`${name}: duplicate anchor IDs`);
  const breadcrumb=html.match(/<nav aria-label="breadcrumb"[\s\S]*?<\/nav>/)[0];
  assert(!breadcrumb.includes('A2 Pure Mathematics'),`${name}: Mechanics is not a Pure subtopic`);
  if(name) assert(breadcrumb.includes('>A2 Mechanics</a>'),`${name}: missing course breadcrumb`);
  if(['mathematical-modelling','vectors-and-kinematics','forces-equilibrium-and-friction','moments-and-rigid-objects','centres-of-mass','newtons-laws-of-motion','projectiles','work-and-energy','uniform-circular-motion'].includes(name)) {
    assert(source.includes('self-written'));
    const expected={'mathematical-modelling':5,'vectors-and-kinematics':7,'forces-equilibrium-and-friction':8,'moments-and-rigid-objects':8,'centres-of-mass':8,'newtons-laws-of-motion':8,'projectiles':8,'work-and-energy':8,'uniform-circular-motion':11}[name];
    assert.equal((source.match(/^### Q\d+/gm)||[]).length,expected);
    assert.equal((html.match(/<summary>Hint<\/summary>/g)||[]).length,expected);
    assert.equal((html.match(/<summary>Solution and check<\/summary>/g)||[]).length,expected);
  }
  for (const [,url] of html.matchAll(/(?:href|src|data-src)="([/#][^" ]*)"/g)) {
    if(url.startsWith('//')) continue;
    const [pathname,fragment]=url.split('#');
    const target=pathname?path.join(root,'_site',pathname,pathname.endsWith('/')?'index.html':''):path.join(root,'_site/alevel/a2-mathematics/mechanics',name,'index.html');
    const file=fs.existsSync(target)&&fs.statSync(target).isFile()?target:path.join(target,'index.html');
    assert(fs.existsSync(file),`${name}: broken local link ${url}`);
    if(fragment&&file.endsWith('.html')) assert(fs.readFileSync(file,'utf8').includes(`id="${decodeURIComponent(fragment)}"`),`${name}: missing anchor ${url}`);
  }
  if(!name) {
    const content=html.match(/<div id="content-container"[\s\S]*?<\/main>/)?.[0]||html;
    for(const lesson of pages.slice(1,-1)) assert(content.includes(`/mechanics/${lesson}/`));
    for(const anchor of ['study-a-topic','m21-mathematical-modelling','m22-kinematics','m23-statics-and-forces','m24-newtons-laws-of-motion','m25-projectiles','m26-work-and-energy','m27-uniform-circular-motion','key-formulae-summary','exam-style-question']) assert(ids.includes(anchor),`lost index bookmark: ${anchor}`);
  }
}
// A marker at the end of a compound path only gives the final force its arrowhead.
for(const name of fs.readdirSync(path.join(root,'assets/img/a2-math-mech')).filter(n=>n.endsWith('.svg'))) {
  const svg=fs.readFileSync(path.join(root,'assets/img/a2-math-mech',name),'utf8');
  for(const [,group] of svg.matchAll(/<g\b[^>]*marker-end="[^"]+"[^>]*>([\s\S]*?)<\/g>/g)) {
    for(const [,d] of group.matchAll(/<path\b[^>]*\bd="([^"]+)"/g)) assert((d.match(/[Mm]/g)||[]).length<=1,`${name}: missing force arrowheads`);
  }
}
console.log('Mechanics course checks passed: Chapter 10 and retained-question calculations, links, image paths, unique anchors, bookmarks, breadcrumbs, SVG arrowheads and 71 practice questions with hints and solutions.');
