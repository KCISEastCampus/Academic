// Use --source-only before the main agent builds; default also checks rendered HTML.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const add=(a,b)=>a.map((x,i)=>x+b[i]);
const sub=(a,b)=>a.map((x,i)=>x-b[i]);
const scale=(k,a)=>a.map(x=>k*x);
const dot=(a,b)=>a.reduce((s,x,i)=>s+x*b[i],0);
const norm=a=>Math.sqrt(dot(a,a));
const point=(a,b,t)=>add(a,scale(t,b));
const close=(x,y)=>assert(Math.abs(x-y)<1e-9,`${x} != ${y}`);
const eq=(a,b)=>{assert.equal(a.length,b.length);a.forEach((x,i)=>close(x,b[i]));};
const angle=(a,b)=>Math.acos(dot(a,b)/(norm(a)*norm(b)))*180/Math.PI;

const A=[1,-2,3],B=[5,0,4];
eq(sub(B,A),[4,2,1]); close(norm(sub(B,A)),Math.sqrt(21));
close(norm(scale(1/Math.sqrt(21),sub(B,A))),1);
eq(scale(.5,add(A,B)),[3,-1,3.5]);
eq(point([1,2,-1],[2,-1,4],2),[5,0,7]);
eq(point([1,2,-1],[2,-1,4],.25),[1.5,1.75,0]);
eq(point([1,0,2],[1,2,-1],2),[3,4,0]);
eq(point([3,3,-1],[0,1,1],1),[3,4,0]);
assert.notDeepEqual(point([3,3,0],[0,1,1],1),[3,4,0]);
for(const s of [-2,0,1,3]) eq(point([2,2,1],[2,4,-2],s),point([1,0,2],[1,2,-1],1+2*s));
assert.notDeepEqual(point([1,0,2],[1,2,-1],1),[2,2,2]);
close(dot([1,2,2],[2,-1,2]),4);
assert.equal(angle([1,2,2],[2,-1,2]).toFixed(1),'63.6');
assert.equal((180-angle([1,1,1],[1,-1,-1])).toFixed(1),'70.5');

function checkFoot(P,a,b,t,H,distance){
  eq(point(a,b,t),H);
  close(dot(sub(H,P),b),0);
  close(norm(sub(H,P)),distance);
  for(const offset of [-2,-1,1,2]) assert(norm(sub(point(a,b,t+offset),P))>distance);
}
checkFoot([5,3,5],[1,0,1],[1,2,2],2,[3,4,5],Math.sqrt(5));
eq(sub([-2,3,4],[2,-1,0]),[-4,4,4]);
close(norm([-4,4,4]),4*Math.sqrt(3));
eq(scale(.5,add([2,-1,0],[-2,3,4])),[0,1,2]);
eq(point([0,1,2],[2,1,-4],2),[4,3,-6]);
eq(point([0,1,2],[2,1,-4],.5),[1,1.5,0]);
eq(point([0,0,1],[1,1,1],2),point([2,0,1],[0,1,1],2));
assert.notDeepEqual(point([0,0,1],[1,1,1],2),point([2,0,2],[0,1,1],2));
for(const s of [-1,0,2]) eq(point([3,1,4],[4,-2,2],s),point([1,2,3],[2,-1,1],1+2*s));
assert.notDeepEqual(point([1,2,3],[2,-1,1],1),[3,1,5]);
close(dot([2,5,1],[1,-1,3]),0);
assert.equal(angle([1,0,1],[-1,1,-1]).toFixed(1),'144.7');
assert.equal((180-angle([1,0,1],[-1,1,-1])).toFixed(1),'35.3');
checkFoot([3,2,0],[1,0,0],[1,1,0],2,[3,2,0],0);
checkFoot([4,0,2],[0,1,0],[1,0,1],3,[3,1,3],Math.sqrt(3));
close(norm(sub([0,1,0],[4,0,2])),Math.sqrt(21));

// Two-dimensional and geometric transfer tasks, including orientation checks.
eq(sub([4,5],[1,1]),[3,4]); close(norm([3,4]),5);
eq(sub([3,0],[-1,2]),[4,-2]); close(norm([4,-2]),2*Math.sqrt(5));
close(norm(scale(1/(2*Math.sqrt(5)),[4,-2])),1);
eq(point([-1,2],[4,-2],.5),point([1,-3],[0,1],4));
assert.equal(angle([-2,0],[1,1]),135);
assert.equal(angle([4,2],[0,5]).toFixed(1),'63.4');
checkFoot([0,5],[0,0],[4,2],.5,[2,1],2*Math.sqrt(5));
close(.5*norm([4,2])*norm(sub([2,1],[0,5])),10);
eq(sub([-1,3],[2,-1]),[-3,4]); eq(scale(-2,[-3,4]),[6,-8]);
close(norm([-3/5,4/5]),1); close(norm([6,-8]),10);
assert.notDeepEqual(point([0,1,2],[1,2,1],2),point([2,0,2],[0,1,1],5));
assert.equal(angle([-1,0],[1,1]),135);
assert.equal(180-angle([-1,0],[1,1]),45);
checkFoot([1,3],[0,0],[1,1],2,[2,2],Math.sqrt(2));
for (const u of [-3,0,1/12,2]) eq([1+4*u,4*u,2-4*u],point([1,0,2],[2,2,-2],2*u));
close(dot([1+4/12,4/12,2-4/12],[2,2,-2]),0);

const root=path.join(__dirname,'..');
const source=fs.readFileSync(path.join(root,'alevel/a2-mathematics/vectors.md'),'utf8');
assert(!/[\u3400-\u9fff]/u.test(source));
const chinese=fs.readFileSync(path.join(root,'zh/alevel/a2-mathematics/vectors.md'),'utf8');
const taskBlocks=md=>[...md.matchAll(/<section class="lesson-check" markdown="1">([\s\S]*?)<\/section>/g)].map(m=>m[1]);
for (const md of [source,chinese]) {
  assert(md.includes('reading_layout: true'));
  assert(!/[\x00-\x09\x0B\x0C\x0E-\x1F]/.test(md),'Damaged TeX/control character');
  assert.equal((md.match(/<section\b/g)||[]).length,(md.match(/<\/section>/g)||[]).length);
  assert(!/<details\b[^>]*\bopen\b/.test(md));
  for(const block of taskBlocks(md)) {
    assert(!block.includes('<section'),'Task boundaries must not nest');
    assert.equal((block.match(/<details\b/g)||[]).length,2,'Separate hint and solution required');
    assert.equal((block.match(/<\/details>/g)||[]).length,2);
  }
  for(const id of ['check-plane','mixed-geometry','repair-direction','repair-lines','repair-angle','repair-foot','review-later','next-step']) assert(md.includes(`#${id}`));
}
const prompts=md=>taskBlocks(md).map(b=>b.split('<details')[0].replace(/^\s*### .+\n/m,'').trim().replace(/\s+/g,' '));
assert.deepEqual(prompts(source),prompts(chinese),'Bilingual task conditions must match');
console.log('Vectors maths/source passed: original cases plus 2D operations, vertex angles, geometry, retries, and bilingual task conditions.');
if (!process.argv.includes('--source-only')) {
const html=fs.readFileSync(path.join(root,'_site/alevel/a2-mathematics/vectors/index.html'),'utf8');
assert.equal((html.match(/<details\b/g)||[]).length,(source.match(/<details\b/g)||[]).length);
console.log('Vectors passed: lengths, unit vectors, midpoints, line membership, intersections, line equivalence, angles, perpendicular feet and distances.');

// Markdown must preserve two TeX backslashes for each matrix row break.
for (const lesson of ['vectors', 'quick-reference', 'modulus-and-transformations']) {
  const md=fs.readFileSync(path.join(root,`alevel/a2-mathematics/${lesson}.md`),'utf8');
  const rendered=fs.readFileSync(path.join(root,`_site/alevel/a2-mathematics/${lesson}/index.html`),'utf8');
  for (const [matrix] of md.matchAll(/\\begin\{pmatrix\}[\s\S]*?\\end\{pmatrix\}/g)) {
    // Inline Markdown uses four source backslashes; display maths uses two.
    const expected=matrix.replace(/\\\\\\\\/g, '\\\\');
    assert(rendered.includes(expected), `${lesson}: damaged matrix row separators: ${expected}`);
  }
}
console.log('Rendered column-vector row separators passed in Vectors, Quick Reference and Modulus.');

} else console.log('Rendered HTML checks skipped (--source-only); main-agent build required.');
