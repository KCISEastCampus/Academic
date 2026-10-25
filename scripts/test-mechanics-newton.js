// Source and mathematical checks; no Jekyll build required. Check world-coordinate forces and motion.
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

// New tasks retain physical stage and initial-condition checks.
slope(2,3.55,4.9,12);slope(2,0,-2.2,12);
close(-2+3.55*(40/71),0);close(-2*(40/71)+.5*3.55*(40/71)**2,-40/71);
close(11.76,3*3.92);close(2*g-11.76,2*3.92);close(Math.sqrt(2*3.92*.5),Math.sqrt(3.92));
close(39-5*g,5*(-2));assert(3-2*1>0);
const extra=[
 {m:3,r:t=>[t**3/3,(1-Math.cos(2*t))/2,t+Math.exp(-t)-1],v:t=>[t*t,Math.sin(2*t),1-Math.exp(-t)],f:t=>[6*t,6*Math.cos(2*t),3*Math.exp(-t)],r0:[0,0,0],v0:[0,0,0]},
 {m:2,r:t=>[t**3/3-t+8/3,3*t-t*t+1,t**3-t+1],v:t=>[t*t-1,3-2*t,3*t*t-1],f:t=>[4*t,-4,12*t],time:1,r0:[2,3,1],v0:[0,1,2]},
 {m:2,r:t=>[1+2*t,2+t*t,-1+t-t*t/2],v:t=>[2,2*t,1-t],f:t=>[0,4,-2],r0:[1,2,-1],v0:[2,0,1]}
];
for(const e of extra){
 for(const t of [0,.5,1,2,3]){vector(derivative(e.r,t),e.v(t),1e-7);vector(derivative(e.v,t).map(a=>e.m*a),e.f(t),1e-7);}
 vector(e.r(e.time||0),e.r0);vector(e.v(e.time||0),e.v0);
}
vector(extra[1].v(2),[3,-1,11]);vector(extra[1].r(2),[10/3,3,7]);close(Math.hypot(4/3,6),2*Math.sqrt(85)/3);
vector(extra[2].r(1),[3,3,-.5]);vector(extra[2].v(1),[2,2,0]);
for(const t of [0,.5,1,2,3])vector(derivative(t=>[t*t,Math.exp(-t),2*Math.sin(t)],t).map(a=>2*a),[4*t,-2*Math.exp(-t),4*Math.cos(t)],1e-7);
// Personally read official Q1/Q9: check the method references independently.
const officialK=(345000/12-18000*1.5)/12**2.25;
assert.equal(officialK.toPrecision(3),'6.53');close(345000/12-officialK*12**2.25,27000);
const officialR=t=>[t**4-t**3,-2*Math.cos(t)+2*Math.sin(2*t)-4*t+2,3*t+9*Math.exp(-t/3)-9];
close(Math.hypot(...officialR(2)),10.54830625,1e-8);

const root=path.join(__dirname,'..');
const slug='newtons-laws-of-motion';
const read=prefix=>fs.readFileSync(path.join(root,prefix+'alevel/a2-mathematics/mechanics/'+slug+'.md'),'utf8').replace(/\r\n?/g,'\n');
const en=read(''),zh=read('zh/');
const math=s=>s.match(/\$\$[\s\S]*?\$\$|\$[^$\r\n]+\$/g)||[];
assert.deepEqual(math(en),math(zh),'Bilingual TeX must match in exact sequence');
const headings=s=>[...s.matchAll(/^#{2,3} .*?\{#([^}]+)\}/gm)].map(m=>m[1]);
assert.deepEqual(headings(en),headings(zh),'Bilingual learning/legacy anchors must match');
const prompts=s=>[...s.matchAll(/Question:\*\* ([^\n]+)/g)].map(m=>m[1]);
assert.deepEqual(prompts(en),prompts(zh),'English questions and conditions must match');
for(const source of [en,zh]){
 assert(source.includes('reading_layout: true'));
 assert(!/[\t\x00-\x08\x0b\x0c\x0e-\x1f]/.test(source),'No control characters in TeX or prose');
 assert(!/<details[^>]*\bopen\b/.test(source),'Help must start closed');
 const blocks=[...source.matchAll(/<div class="(worked-example|lesson-check)" markdown="1">([\s\S]*?)\n<\/div>/g)];
 assert.equal(blocks.length,(source.match(/<div class=/g)||[]).length,'All learning blocks have separate boundaries');
 assert.equal(blocks.length,(source.match(/<\/div>/g)||[]).length,'No unmatched learning boundary');
 for(const [,kind,body] of blocks){
  assert(!body.includes('<div'),'Learning blocks cannot be nested');
  assert(body.includes('Question:**'),'Each block retains its question');
  const disclosures=[...body.matchAll(/<details markdown="1">([\s\S]*?)<\/details>/g)];
  assert.equal(disclosures.length,kind==='lesson-check'?2:0,'Two separate help panels per task; public worked solutions');
  assert.equal((body.match(/<details/g)||[]).length,disclosures.length,'Help panels cannot be nested or unclosed');
  if(kind==='lesson-check'){
   assert(/<summary>(Hint|Reasoning hint|Retry hint|提示|推理提示|再尝试提示)<\/summary>/.test(disclosures[0][1]));
   assert(/<summary>[^<]*(Solution|Feedback|check|解答|反馈|核对|检查)/.test(disclosures[1][1]));
   assert(/\]\(#[^)]+\)/.test(disclosures[1][1]),'Each answer has a concrete repair or retry link');
  }
 }
 for(const match of source.matchAll(/^### (?:Example \d+|例(?:题)? \d+).*$/gm)){
  assert(blocks.some(([,kind,body])=>kind==='worked-example'&&body.includes(match[0])),'Every worked example is public and bounded');
 }
 const ids=headings(source);assert.equal(new Set(ids).size,ids.length,'Unique source anchors');
 for(const [,id] of source.matchAll(/\]\(#([^)]*)\)/g))assert(ids.includes(id)||source.includes('id="'+id+'"'),'Missing local recovery anchor '+id);
 for(const id of ['newtons-laws-and-the-resultant-force', 'linear-motion-with-constant-acceleration', 'connected-particles', 'motion-in-two-or-three-dimensions', 'motion-with-variable-acceleration', 'finding-force-from-position', 'independent-task-motion-direction-or-force-direction', 'retry-use-a-force-record-in-space', 'body-check', 'stages-retry', 'connection-retry', 'vector-retry', 'record-retry', 'later-dynamics-check'])assert(ids.includes(id),'Legacy or learning anchor missing: '+id);
 assert(source.includes('/mechanics/#mixed-problems')&&source.includes('/mechanics/#later-review'));
 for(const formula of math(source))assert(!formula.includes('|'),'Use TeX delimiters rather than ASCII table pipes');
}
const {init}=require('../assets/vendor/mathjax/3.2.2/es5/node-main.js');
init({loader:{load:['input/tex','output/svg']},tex:{packages:['base','ams']}}).then(mj=>{
 for(const formula of new Set(math(en))){
  const n=formula.startsWith('$$')?2:1;
  const svg=mj.startup.adaptor.outerHTML(mj.tex2svg(formula.slice(n,-n),{display:n===2}));
  assert(!svg.includes('data-mml-node="merror"')&&!svg.includes('data-mjx-error'),'Invalid TeX: '+formula);
 }
 console.log('Newton: original force/derivative protections, new stage/3D/condition checks, exact bilingual TeX, questions, legacy anchors, public examples and per-task help passed.');
}).catch(error=>{console.error(error);process.exitCode=1;});
