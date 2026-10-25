// Use --source-only for authoring; default also checks existing Jekyll output.
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const close=(a,b)=>assert(Math.abs(a-b)<1e-9,`${a} != ${b}`);
function balance(parts,G) {
  for(let j=0;j<G.length;j++) close(parts.reduce((s,[m,...r])=>s+m*(r[j]-G[j]),0),0);
}
// Polygon area moments independently check the composite shapes.
function polygon(vertices,G,area) {
  let twiceArea=0,mx=0,my=0;
  vertices.forEach(([x,y],i)=>{
    const [u,v]=vertices[(i+1)%vertices.length],cross=x*v-u*y;
    twiceArea+=cross; mx+=(x+u)*cross; my+=(y+v)*cross;
  });
  close(twiceArea/2,area); close(mx/(3*twiceArea),G[0]); close(my/(3*twiceArea),G[1]);
}
balance([[3,0],[2,5],[5,8]],[5]);
balance([[2,1,0,2],[3,4,5,-1]],[14/5,3,1/5]);
polygon([[0,0],[6,0],[0,9]],[2,3],27);
polygon([[0,0],[4,0],[4,2],[2,5],[0,2]],[2,13/7],14);
polygon([[0,0],[8,0],[8,4],[4,4],[4,6],[0,6]],[3.6,2.6],40);
balance([[16,2,1],[4,4,2]],[2.4,1.2]);
balance([[3,1,3],[1,0,0]],[.75,2.25]);
balance([[2,-4,1],[3,2,-3],[5,4,2]],[1.8,.3]);
polygon([[0,0],[9,0],[3,6]],[4,2],27);
polygon([[0,0],[6,0],[6,2],[2,2],[2,6],[0,6]],[2.2,2.2],20);
balance([[36,3,3],[-Math.PI,4,3]],[(108-4*Math.PI)/(36-Math.PI),3]);
assert.equal(((108-4*Math.PI)/(36-Math.PI)).toFixed(2),'2.90');
balance([[12,1,1],[4,3,1],[4,2,2]],[1.6,1.2]);
balance([[6,2,4],[2,0,0]],[1.5,3]);
balance([[4,3],[2,6]],[4]);
// Rotate each suspension vector: horizontal component zero, G below the support.
for(const [x,down,angle] of [[2,1,'63.4'],[.75,3.75,'11.3'],[1,4,'14.0'],[1.5,5,'16.7']]) {
  const theta=Math.atan2(x,down);
  close(x*Math.cos(theta)-down*Math.sin(theta),0);
  assert(x*Math.sin(theta)+down*Math.cos(theta)>0);
  assert.equal((theta*180/Math.PI).toFixed(1),angle);
}
// Support equilibrium: independently sum all original component weights.
for(const [parts,L,left,right] of [[[ [16,2],[4,4] ],4,78.4,117.6],[[[4,3],[2,6]],6,19.6,39.2]]) {
  close(left+right,parts.reduce((s,[m])=>s+9.8*m,0));
  for(const pivot of [0,L,1.3]) close(-pivot*left+(L-pivot)*right-parts.reduce((s,[m,x])=>s+(x-pivot)*m*9.8,0),0);
  assert(left>0&&right>0);
}
const root=path.join(__dirname,'..');
// New retries: reverse geometry, signed 3D moments, and a hole checked as positive strips.
balance([[2,-2,1,4],[3,1,-2,-1]],[-1/5,-4/5,1]);
polygon([[0,0],[6,0],[-3,6]],[1,2],18);
balance([[1,0,0],[1,6,0],[2,-3,6]],[0,3]);
balance([[32,4,2],[-4,5.4,2]],[3.8,2]);
balance([[17.6,2.2,2],[6.4,7.2,2],[2,5.4,.5],[2,5.4,3.5]],[3.8,2]);
assert(5.4-1>0&&5.4+1<8);
const holeAngle=Math.atan2(3.8,2);
close(3.8*Math.cos(holeAngle)-2*Math.sin(holeAngle),0);
assert.equal((holeAngle*180/Math.PI).toFixed(1),'62.2');
// Retained mixed task: true masses, density inference, and a change in support model.
balance([[20,1,1],[4,3,1],[4,4,2]],[12/7,8/7]);
close((12/7)/(2-8/7),2);
balance([[20,1,1],[4,3,1]],[4/3,1]);
close(156.8+78.4,24*9.8);
close(78.4*4,24*9.8*(4/3));
balance([[4,0,1],[2,2,0]],[2/3,2/3]);
close((2/3+2)/(2-2/3),2);
close(19.6+39.2,6*9.8);
for(const pivot of [-2,2,0]) close((-2-pivot)*19.6+(2-pivot)*39.2-(0-pivot)*4*9.8-(2-pivot)*2*9.8,0);
// January 2025 Q6: include the lamina; test exact coordinates and stable orientation.
const d=10/(9*Math.tan(5*Math.PI/180));
close(d,12.70005811417927);
balance([[2,-5,0],[4,5,0],[7,0,d],[6,0,d/3]],[10/19,9*d/19]);
close((10/19)/(9*d/19),Math.tan(5*Math.PI/180));
const theta=Math.atan2(10/19,-9*d/19);
close((10/19)*Math.cos(theta)-(-9*d/19)*Math.sin(theta),0);
assert((10/19)*Math.sin(theta)+(-9*d/19)*Math.cos(theta)>0);

const sourceOnly=process.argv.includes('--source-only');
const pages=['','zh/'].map(prefix=>{
  const relative=prefix+'alevel/a2-mathematics/mechanics/centres-of-mass';
  const source=fs.readFileSync(path.join(root,relative+'.md'),'utf8').replace(/\r\n?/g,'\n');
  assert(source.includes('reading_layout: true'));
  const ids=[...source.matchAll(/^#{2,3} (.+)$/gm)].map(([,h])=>h.match(/\{#([^}]+)\}/)?.[1]||h.toLowerCase().replace(/[^\w\s-]/g,'').replace(/\s+/g,'-'));
  assert.equal(new Set(ids).size,ids.length,'Heading IDs must be unique');
  for(const id of ['centre-of-mass-and-centre-of-gravity','a-system-of-particles','uniform-bodies-and-symmetry','composite-laminae','attached-masses-and-different-materials','suspended-bodies','support-by-two-strings','practice','independent-task-infer-the-mass-distribution','retry-replace-suspension-by-two-supports','particles-retry','triangle-retry','cutout-retry','later-check','later-body-check']) assert(ids.includes(id),`Missing route: ${id}`);
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
console.log(`Centres passed: original/new polygon geometry and mass moments, suspension/support checks, official Q6 reconstruction, bilingual source structure${sourceOnly?' (source only)':' and rendered formulas/help'}.`);
