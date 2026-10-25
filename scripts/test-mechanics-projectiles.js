// Source and mathematical checks; no Jekyll build required. Check motion, level crossings and boundaries.
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const close=(a,b,tol=1e-8)=>assert(Math.abs(a-b)<tol,`${a} != ${b}`);
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

// Shared-time releases, inverse flight, unreachable target and distinct obstacles.
for(const ux of [9,18]){const q=motion(ux,0);close(q.r(2)[1],-19.6);close(q.r(2)[0],2*ux);}
const inverse=motion(8,19.6);close(inverse.r(4)[0],32);close(inverse.r(4)[1],0);close(inverse.r(2)[1],19.6);
assert(16-20<0);for(const q of [.1,1,2,3,10])close(10*q-2.5*(1+q*q),7.5-2.5*(q-2)**2);
const structures=motion(8,9.8);close(structures.r(1)[1],4.9);close(structures.r(1.5)[1],3.675);assert(4.9<5&&3.675<4);
const roof=motion(5*Math.sqrt(3),-5,10);close(roof.r(1)[1],-10);close(roof.r(1)[0],5*Math.sqrt(3));
close(Math.hypot(...roof.v(1)),10*Math.sqrt(3));close(Math.atan((5*Math.sqrt(3))/15)*180/Math.PI,30);
for(const t of [0,.1,.5,.9]){assert(roof.r(t)[1]>-10);assert(roof.v(t)[1]<0);}
close(10*10,2*10*Math.sin(Math.PI/6)*10);close(Math.hypot(...roof.v(1))**2,2*10*(10*Math.sin(Math.PI/6)+10));
const beforeContact=(3+Math.sqrt(13))/2;close(motion(8,14.7).r(beforeContact)[1],-4.9);assert(beforeContact>2);
// Personally read official Q4 and Q7, independently reconstructed from components.
const officialUy=15*Math.sin(Math.PI/3),disc=officialUy**2-4*4.9*7;
const crossings=[(officialUy-Math.sqrt(disc))/9.8,(officialUy+Math.sqrt(disc))/9.8];
close(crossings[1]-crossings[0],1.1463,1e-4);
crossings.forEach(t=>close(motion(7.5,officialUy).r(t)[1],7));
const roofU=Math.sqrt(2*9.8*2.5*Math.sin(40*Math.PI/180)),roofUx=roofU*Math.cos(40*Math.PI/180),roofUy=-roofU*Math.sin(40*Math.PI/180);
const groundT=(roofUy+Math.sqrt(roofUy**2+2*9.8*6))/9.8,officialRoof=motion(roofUx,roofUy);
close(officialRoof.r(groundT)[1],-6);assert.equal(Math.hypot(...officialRoof.v(groundT)).toPrecision(3),'12.2');
assert.equal((Math.atan(roofUx/-officialRoof.v(groundT)[1])*180/Math.PI).toPrecision(3),'20.6');

const root=path.join(__dirname,'..');
const slug='projectiles';
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
 for(const id of ['the-projectile-model', 'position-speed-and-direction', 'greatest-height-and-range', 'projection-from-a-height', 'passing-through-a-given-height', 'the-equation-of-the-path', 'finding-an-unknown-projection-angle', 'height-restrictions', 'independent-method-choice', 'retry-change-the-structure', 'release-check', 'leaving-a-surface', 'flight-retry', 'target-retry', 'obstacle-retry', 'later-projectile-check'])assert(ids.includes(id),'Legacy or learning anchor missing: '+id);
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
 console.log('Projectiles: original trajectory/energy/root/boundary protections, new inverse/roof/obstacle checks, exact bilingual TeX, questions, legacy anchors and per-task help passed.');
}).catch(error=>{console.error(error);process.exitCode=1;});
