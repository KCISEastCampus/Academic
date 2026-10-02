// Run after bundle exec jekyll build. Check world-coordinate forces and motion.
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const close=(a,b,tol=1e-8)=>assert(Math.abs(a-b)<tol,`${a} != ${b}`);
const vector=(a,b,tol=1e-8)=>{assert.equal(a.length,b.length);a.forEach((v,i)=>close(v,b[i],tol));};
const derivative=(f,t)=>f(t+1e-5).map((v,i)=>(v-f(t-1e-5)[i])/2e-5);
const g=9.8,c=Math.sqrt(3)/2,s=.5;
const T=49.2/(c+.1),R=20*g-T*s;
vector([T*c-.2*R,R+T*s-20*g],[20*.5,0]);
assert.equal(T.toPrecision(3),'50.9');assert.equal(R.toPrecision(3),'171');
function slope(m,a,friction,tension=0){
  const normal=m*g*c;
  // Tangent (c,s), outward normal (-s,c); friction signed up-plane.
  const forces=[(tension+friction)*c-normal*s,(tension+friction)*s+normal*c-m*g];
  vector(forces,[m*a*c,m*a*s]);assert(normal>0);
}
slope(4,-4.9,0);close(.5*4.9*9,22.05);
const up=-g*(s+.2*c),down=g*(s-.2*c),stop=-6/up,distance=-18/up;
slope(5,up,-.2*5*g*c);slope(5,-down,.2*5*g*c);
close(6+up*stop,0);close(6*stop+.5*up*stop*stop,distance);
assert(5*g*s>.2*5*g*c);assert.equal(stop.toPrecision(3),'0.909');assert.equal(distance.toPrecision(3),'2.73');
for(const mu of [.25,0]){
  const a=(3*g-4*g*s-mu*4*g*c)/7,tension=3*g-3*a;
  slope(4,a,-mu*4*g*c,tension);close(3*g-tension,3*a);
  close(Math.hypot(-tension*c,-tension*(1+s)),tension*Math.sqrt(3));
  assert(tension>0&&a>0);
  assert.equal((tension*Math.sqrt(3)).toPrecision(3),mu?'49.9':'43.6');
}
vector([20*c,29.2+20*s-4*g],[4*(5*Math.sqrt(3)/2),0]);
slope(6,-2.45,(1/(2*Math.sqrt(3)))*6*g*c);close(2+.5*2.45*4,6.9);
close(280-600,800*((8-12)/10));
const cases=[
 {m:2,r:t=>[2*t,1.5*t*t],v:t=>[2,3*t],f:t=>[0,6],r0:[0,0],v0:[2,0]},
 {m:2,r:t=>[1+t*t,2+t**3],v:t=>[2*t,3*t*t],f:t=>[4,12*t],r0:[1,2],v0:[0,0]},
 {m:3,r:t=>[t**3/3+t+8/3,-t*t+3*t],v:t=>[t*t+1,3-2*t],f:t=>[6*t,-6],time:1,r0:[4,2],v0:[2,1]},
 {m:2,r:t=>[t*t,Math.sin(t),Math.exp(-t)],v:t=>[2*t,Math.cos(t),-Math.exp(-t)],f:t=>[4,-2*Math.sin(t),2*Math.exp(-t)]},
 {m:3,r:t=>[t+t*t,-t+t*t],v:t=>[1+2*t,-1+2*t],f:t=>[6,6],r0:[0,0],v0:[1,-1]},
 {m:3,r:t=>[2*t+t*t,2*t**3/3],v:t=>[2+2*t,2*t*t],f:t=>[6,12*t],r0:[0,0],v0:[2,0]},
 {m:2,r:t=>[t**3/3-t+8/3,t*t+2*t],v:t=>[t*t-1,2*t+2],f:t=>[4*t,4],time:1,r0:[2,3],v0:[0,4]},
 {m:3,r:t=>[t**3,Math.cos(t),2*Math.exp(t)],v:t=>[3*t*t,-Math.sin(t),2*Math.exp(t)],f:t=>[18*t,-3*Math.cos(t),6*Math.exp(t)]},
];
for(const example of cases){
  for(const t of [0,.5,1,2,3]){
    vector(derivative(example.r,t),example.v(t),1e-7);
    vector(derivative(example.v,t).map(a=>example.m*a),example.f(t),1e-7);
  }
  if(example.r0){vector(example.r(example.time||0),example.r0);vector(example.v(example.time||0),example.v0);}
}
for(const t of [0,.1,1,2,3]){
 const [x,y]=cases[0].r(t);close(y,3*x*x/8);assert(x>=0);
 const [u,v]=cases[1].r(t);close(v,2+(u-1)**1.5);assert(u>=1);
}
vector(cases[2].r(2),[22/3,2]);vector(cases[2].v(2),[5,-1]);
vector(cases[4].r(2),[6,2]);close(Math.hypot(...cases[4].v(2)),Math.sqrt(34));
vector(cases[5].r(3),[15,18]);vector(cases[6].r(2),[10/3,8]);vector(cases[6].v(2),[3,6]);
close(Math.hypot(...cases[3].f(0)),Math.sqrt(20));close(Math.hypot(...cases[7].f(0)),3*Math.sqrt(5));
const root=path.join(__dirname,'..');
const source=fs.readFileSync(path.join(root,'alevel/a2-mathematics/mechanics/newtons-laws-of-motion.md'),'utf8').replace(/\r\n?/g,'\n');
const html=fs.readFileSync(path.join(root,'_site/alevel/a2-mathematics/mechanics/newtons-laws-of-motion/index.html'),'utf8').replace(/\r\n?/g,'\n');
assert.equal((source.match(/^### Example \d+/gm)||[]).length,8);
assert.equal((html.match(/<table\b/g)||[]).length,1);
for(const [,formula] of source.matchAll(/\$\$([\s\S]*?)\$\$/g)) assert(html.includes(formula.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;')),`Damaged formula: ${formula}`);
for(const name of ['sliding-angled-pull','sliding-incline-stages','incline-connected-particles']){
 const svg=fs.readFileSync(path.join(root,'assets/img/a2-math-mech',name+'.svg'),'utf8');
 assert(svg.includes('<title')&&svg.includes('<desc'));
 for(const [,group] of svg.matchAll(/<g[^>]*marker-end[^>]*>([\s\S]*?)<\/g>/g))for(const [,d] of group.matchAll(/<path d="([^"]+)"/g))assert.equal((d.match(/M/g)||[]).length,1,'Each arrow needs its own path');
}
console.log('Newton lesson passed: world-coordinate force balance, 8 examples, 8 practice answers, friction reversal, pulley force, derivatives, conditions, paths and formula preservation.');
