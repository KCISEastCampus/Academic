// Use --source-only for authoring; default also checks existing Jekyll output.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const close = (a,b) => assert(Math.abs(a-b)<1e-8, `${a} != ${b}`);
const rad = degrees => degrees*Math.PI/180;
const moment = (forces,[a,b]=[0,0]) => forces.reduce((sum,[x,y,fx,fy])=>sum+(x-a)*fy-(y-b)*fx,0);
const equilibrium = (forces,points) => {
  close(forces.reduce((s,f)=>s+f[2],0),0);
  close(forces.reduce((s,f)=>s+f[3],0),0);
  for(const point of points) close(moment(forces,point),0);
};

// Original point positions and force vectors, rather than the lesson's moment equations.
close(moment([[1,0,0,-10],[2,0,0,8],[3,0,12*Math.cos(rad(30)),-12*Math.sin(rad(30))]]),-12);
equilibrium([[0,0,0,10],[4,0,0,150],[3,0,0,-120],[6,0,0,-40]],[[0,0],[4,0],[6,0]]);
equilibrium([[0,0,0,35],[4,0,0,15],[1.2,0,0,-50]],[[0,0],[4,0]]);
for(const P of [0,20,80,81]) {
  const A=(80-P)/3,C=(160+4*P)/3;
  equilibrium([[0,0,0,A],[3,0,0,C],[2,0,0,-80],[4,0,0,-P]],[[0,0],[3,0]]);
  assert.equal(A>=0,P<=80); assert(C>0);
}

function ladder({L,W,angle,R,S,F,G=0,load=0,x=0}) {
  const c=Math.cos(angle),s=Math.sin(angle);
  const forces=[[0,0,-F,R],[-L*c,L*s,S,G],[-L*c/2,L*s/2,0,-W],[-x*c,x*s,0,-load]];
  equilibrium(forces,[[0,0],[-L*c,L*s],[-L*c/2,L*s/2]]);
  assert(R>0&&S>0);
}
ladder({L:5,W:200,angle:rad(60),R:200,S:100/Math.sqrt(3),F:100/Math.sqrt(3)});
close((100/Math.sqrt(3))/200,1/(2*Math.sqrt(3)));
assert(100/Math.sqrt(3)<.4*200);
equilibrium([[0,0,140*Math.sqrt(3),-40],[2,0,-140*Math.sqrt(3),140],[2,0,0,-60],[4,0,0,-40]],[[0,0],[2,0],[4,0]]);
close(Math.hypot(140*Math.sqrt(3),40),20*Math.sqrt(151));
close(Math.atan2(40,140*Math.sqrt(3))*180/Math.PI,9.366998916677877);

function peg(angle,mu) {
  const c=Math.cos(angle),s=Math.sin(angle),S=60*c,R=80-S*c,F=S*s;
  equilibrium([[0,0,F,R],[4*c,4*s,-S*s,S*c],[3*c,3*s,0,-80]],[[0,0],[4*c,4*s],[6*c,6*s]]);
  assert(R>0&&S>0);
  return {S,R,F,possible:F<=mu*R};
}
const pegExample=peg(rad(30),.8);
close(pegExample.S,30*Math.sqrt(3)); close(pegExample.R,35); close(pegExample.F,15*Math.sqrt(3));
assert(pegExample.possible); assert(peg(rad(10),.5).possible); assert(!peg(rad(30),.5).possible);
for(const [W,R,S,G,muA,muB,tan] of [[100,1200/13,300/13,100/13,1/4,1/3,11/6],[156,144,48,12,1/3,1/4,11/8]]) {
  close(S,muA*R); close(G,muB*S);
  ladder({L:4,W,angle:Math.atan(tan),R,S,F:S,G});
}

// Practice: inclined forces, both beam tipping directions, climber limits and hinge force.
close(moment([[2*Math.cos(rad(30)),2*Math.sin(rad(30)),0,-12],[Math.cos(rad(30)),Math.sin(rad(30)),10,0],[2*Math.cos(rad(30)),2*Math.sin(rad(30)),20*Math.cos(rad(30)),20*Math.sin(rad(30))]]),-12*Math.sqrt(3)-5);
equilibrium([[0,0,0,28],[5,0,0,22],[1,0,0,-30],[4,0,0,-20]],[[0,0],[5,0]]);
for(const P of [0,100,180,181]) {
  const C=45+5*P/4,D=45-P/4;
  equilibrium([[1,0,0,C],[5,0,0,D],[3,0,0,-90],[0,0,0,-P]],[[1,0],[5,0]]);
  assert.equal(D>=0,P<=180); assert(C>0);
}
ladder({L:4,W:120,angle:Math.atan(2),R:120,S:30,F:30});
close(30/120,.25);
const maxX=1.8*Math.sqrt(3)-.5;
for(const x of [0,2,maxX,3,5]) {
  const S=(250+500*x)/(5*Math.sqrt(3));
  ladder({L:5,W:100,angle:rad(60),R:600,S,F:S,load:500,x});
  assert.equal(S<=180+1e-8,x<=maxX);
}
assert(maxX>0&&maxX<5);
equilibrium([[0,0,400/9,80/3],[3,0,-400/9,100/3],[1.5,0,0,-40],[2,0,0,-20]],[[0,0],[3,0]]);
close(Math.hypot(400/9,80/3),80*Math.sqrt(34)/9);

const root=path.join(__dirname,'..');
// New tasks: independent force vectors and alternate moment points.
close(moment([[2,0,0,10]]),20);
close(moment([[2,3,0,10]]),20);
assert.notEqual(moment([[2,3,0,10],[0,0,0,-10]]),0);
equilibrium([[0,0,0,70],[4,0,0,50],[4,0,0,-20],[1.2,0,0,-100]],[[0,0],[4,0],[2,1]]);
equilibrium([[0,0,100*Math.sqrt(3),-20],[2,0,-100*Math.sqrt(3),100],[2,0,0,-60],[4,0,0,-20]],[[0,0],[2,0],[4,0]]);
// Q9: smooth ground, rough wall, horizontal string at a stated height.
equilibrium([[0,0,0,90],[-3,4,20,10],[-1.5,2,-20,0],[-.7,14/15,0,-100]],[[0,0],[-3,4],[-1,2]]);
close(10,.5*20);
close((5-7/6)*.6*100+20*(4-2),270);
// Retained mixed tasks: test both candidate boundaries and the interval before them.
for(const P of [0,60,70,80]) {
  const x=.6+1.5*P/200;
  equilibrium([[x,0,0,200],[0,0,-P,0],[0,1.5,P,0],[.6,1,0,-200]],[[0,0],[1.2,0]]);
  assert.equal(P<=60,P<=.3*200);
  assert.equal(x<=1.2,P<=80);
}
const tip=120/(Math.sqrt(3)+.6),slide=120/(Math.sqrt(3)/2+.3);
assert(tip<slide&&slide<400);
for(const T of [0,tip/2,tip]) {
  const N=200-T/2,F=Math.sqrt(3)*T/2,x=(120+Math.sqrt(3)*T)/N;
  equilibrium([[x,0,0,N],[0,0,-F,0],[0,2,F,T/2],[.6,1,0,-200]],[[0,0],[1.2,0]]);
  assert(N>0&&F<.6*N&&x<=1.2+1e-9);
}
for(const P of [0,100,240,241]) {
  const left=60-P/4,right=20+5*P/4;
  equilibrium([[1,0,0,left],[5,0,0,right],[2,0,0,-80],[6,0,0,-P]],[[1,0],[5,0]]);
  assert.equal(left>=0,P<=240);
}
// January 2025 Q5: all original forces, including wall friction and string height.
const d=(40*11*Math.sin(rad(65))+16*11*Math.cos(rad(65))-120)/(245*Math.cos(rad(65)));
close(d,3.410770837149281);
equilibrium([[0,0,0,229],[-11*Math.cos(rad(65)),11*Math.sin(rad(65)),40,16],[-3/Math.tan(rad(65)),3,-40,0],[-d*Math.cos(rad(65)),d*Math.sin(rad(65)),0,-245]],[[0,0],[-11*Math.cos(rad(65)),11*Math.sin(rad(65))]]);

const sourceOnly=process.argv.includes('--source-only');
const pages=['','zh/'].map(prefix=>{
  const relative=prefix+'alevel/a2-mathematics/mechanics/moments-and-rigid-objects';
  const source=fs.readFileSync(path.join(root,relative+'.md'),'utf8').replace(/\r\n?/g,'\n');
  assert(source.includes('reading_layout: true'));
  const ids=[...source.matchAll(/^#{2,3} (.+)$/gm)].map(([,h])=>h.match(/\{#([^}]+)\}/)?.[1]||h.toLowerCase().replace(/[^\w\s-]/g,'').replace(/\s+/g,'-'));
  assert.equal(new Set(ids).size,ids.length,'Heading IDs must be unique');
  for(const id of ['the-moment-of-a-force','equilibrium-under-parallel-forces','a-beam-about-to-tip','equilibrium-of-a-rigid-object-in-a-plane','practice','independent-task-which-condition-fails-first','retry-change-the-pull-and-the-contact','moment-retry','support-retry','contact-retry','q9-wall-and-string','later-check','later-beam-check']) assert(ids.includes(id),`Missing route: ${id}`);
  for(const [,id] of source.matchAll(/\]\(#([^)]*)\)/g)) assert(ids.includes(id),`Broken local link: ${id}`);
  const examples=[...source.matchAll(/<div class="worked-example" markdown="1">([\s\S]*?)<\/div>/g)];
  const tasks=[...source.matchAll(/<div class="lesson-check" markdown="1">([\s\S]*?)<\/div>/g)];
  assert.equal(examples.length,8,'Keep all eight reliable demonstrations');
  assert.equal((source.match(/<div\b/g)||[]).length,examples.length+tasks.length,'No nested or unclassified question wrappers');
  for(const [,block] of examples) assert(!block.includes('<details')&&block.includes('Self-written'),'Demonstrations stay fully visible');
  for(const [,block] of tasks) {
    assert.equal((block.match(/^### /gm)||[]).length,1,'Each attempt has its own boundary');
    const help=[...block.matchAll(/<details([^>]*)>([\s\S]*?)<\/details>/g)];
    assert.equal(help.length,2,'Separate hint and solution');
    assert(help.every(([,attrs])=>!attrs.includes('open')),'Help defaults closed');
    assert(/Hint|hint|提示/.test(help[0][2])&&/Solution|Feedback|check|解答|反馈|核对/.test(help[1][2]));
    assert(block.slice(0,block.indexOf('<details')).includes('Self-written'),'Every task identifies its provenance');
    assert(/\]\(#[^)]+\)/.test(help[1][2]),'Feedback needs a concrete recovery link');
  }
  assert(source.includes('/#mixed-problems')&&source.includes('/#later-review'));
  assert(!/<!-- stem:/.test(source));
  for(const [,url] of source.matchAll(/!\[[^\]]+\]\(([^)]+)\)/g)) {
    assert(fs.existsSync(path.join(root,url)),`Missing diagram: ${url}`);
    const svg=fs.readFileSync(path.join(root,url),'utf8');
    assert(svg.includes('<title')&&svg.includes('<desc'));
    // marker-end marks only the last endpoint of each path.
    for(const [,arrows] of svg.matchAll(/<g[^>]*marker-end="[^"]+"[^>]*>([\s\S]*?)<\/g>/g))
      for(const [,shape] of arrows.matchAll(/<path\b[^>]*d="([^"]+)"/g)) assert.equal((shape.match(/M/g)||[]).length,1,`A force arrow lost its head: ${url}`);
  }
  const math=source.match(/\$\$[\s\S]*?\$\$|\$[^$\r\n]+\$/g)||[];
  const formulas=[...source.matchAll(/\$\$([\s\S]*?)\$\$/g)].map(m=>m[1]);
  if(!sourceOnly) {
    const html=fs.readFileSync(path.join(root,'_site',relative,'index.html'),'utf8').replace(/\r\n?/g,'\n');
    for(const formula of formulas) assert(html.includes(formula.replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]))),'A display formula was damaged during Markdown rendering');
    for(const [,label] of source.matchAll(/<summary>(.*?)<\/summary>/g)) assert.equal(html.split('<summary>'+label+'</summary>').length-1,source.split('<summary>'+label+'</summary>').length-1,'All help survives rendering');
  }
  const stems=tasks.map(([,b])=>b.split(/\n\n/).find(p=>p.startsWith('**Question:**')||p.startsWith('**Self-written')));
  return {math,formulas,stems,ids};
});
assert.deepEqual(pages[0].math,pages[1].math,'Bilingual inline and display TeX sequence aligns');
assert.deepEqual(pages[0].stems,pages[1].stems,'English questions align in both languages');
assert.deepEqual(pages[0].ids,pages[1].ids,'Stable bilingual anchors align');
console.log(`Moments passed: original and new forces/moments, contact/tipping limits, official Q5 reconstruction, bilingual source structure${sourceOnly?' (source only)':' and rendered formulas/help'}.`);
