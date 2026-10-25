// Run after bundle exec jekyll build; checks the worked/practice equilibrium answers.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const close = (a,b) => assert(Math.abs(a-b)<1e-9, `${a} != ${b}`);
const radians = degrees => degrees*Math.PI/180;
const sum = forces => forces.reduce(([x,y],[u,v])=>[x+u,y+v],[0,0]);
const vector = (magnitude,degrees) => [magnitude*Math.cos(radians(degrees)),magnitude*Math.sin(radians(degrees))];
const equilibrium = forces => sum(forces).forEach(component=>close(component,0));

// Sum original vectors and angle-defined forces, including quadrant information.
assert.deepEqual(sum([[4,3],[-12,7],[2,-2]]),[-6,8]);
close(Math.hypot(-6,8),10);
close(Math.atan2(8,-6)*180/Math.PI,126.86989764584402);
equilibrium([[4,3],[-12,7],[2,-2],[6,-8]]);
const resultant = sum([vector(10,30),vector(8,150),[0,-4]]);
close(resultant[0],Math.sqrt(3)); close(resultant[1],5);
close(Math.hypot(...resultant),2*Math.sqrt(7));
close(Math.atan2(resultant[1],resultant[0])*180/Math.PI,70.89339464913091);
assert.deepEqual(sum([[3,-2],[-7,5],[1,-7]]),[-3,-4]);
close(Math.hypot(-3,-4),5);
equilibrium([[3,-2],[-7,5],[1,-7],[3,4]]);
equilibrium([[3,2],[-4,5],[1,-7]]);

// Strings: check the original horizontal/vertical equations and length geometry.
equilibrium([vector(30,150),vector(30*Math.sqrt(3),60),[0,-60]]);
equilibrium([[-.6*25,.8*25],[15,0],[0,-20]]);
close(Math.hypot(.6,.8),1);
const left=[-.64,.48], right=[.36,.48];
close(Math.hypot(...left),.8); close(Math.hypot(...right),.6);
close(left[0]*right[0]+left[1]*right[1],0);
equilibrium([left.map(x=>30*x/.8),right.map(x=>40*x/.6),[0,-50]]);

// Smooth planes: check forces in world coordinates, not the chosen slope axes.
equilibrium([vector(20*Math.sqrt(3),60),vector(20*Math.sqrt(3),120),[0,-60]]);
equilibrium([vector(20*Math.sqrt(2),75),vector(20*(Math.sqrt(3)-1),120),[0,-40]]);
equilibrium([[12,0],[-12,0],[0,50],[0,-50]]);
assert(12<.4*50); assert(12<.3*60); assert(24>.3*60);
close(40*Math.cos(radians(30)),(Math.sqrt(3)/4)*80);
equilibrium([vector(40,30),[-20*Math.sqrt(3),0],[0,80],[0,-100]]);
for(const [P,R,sign] of [[300/19,960/19,1],[300/13,960/13,-1]]) {
  equilibrium([[.8*P,sign*.6*P],[-.25*R,0],[0,R],[0,-60]]);
  assert(R>0);
}

// Test both endpoints, interior, friction reversal and outside the feasible range.
for(const {W,mu,lower,upper,zero} of [
  {W:50,mu:.5,lower:100/11,upper:100,zero:37.5},
  {W:100,mu:.25,lower:800/19,upper:1600/13,zero:75},
]) {
  const contact=P=>({R:.8*W+.6*P,f:.6*W-.8*P});
  close(contact(lower).f,mu*contact(lower).R);
  close(contact(upper).f,-mu*contact(upper).R);
  close(contact(zero).f,0);
  for(const P of [lower,(lower+zero)/2,zero,(zero+upper)/2,upper]) {
    const {R,f}=contact(P);
    assert(R>0); assert(Math.abs(f)<=mu*R+1e-9);
    equilibrium([[P,0],[-.6*R,.8*R],[.8*f,.6*f],[0,-W]]);
  }
  for(const P of [lower-1,upper+1]) {
    const {R,f}=contact(P); assert(Math.abs(f)>mu*R);
  }
}
close(100*.6-.8*60,12); close(100*.6-.8*100,-20);
close((80+.6*60)/4,29); close((80+.6*100)/4,35);
close(25*.8,20); close(25*.6,15); close(15/20,.75);

// New retries and the wall transfer: check original force balances and both signs.
assert.deepEqual(sum([[2,5],[-6,-2]]),[-4,3]);
equilibrium([[2,5],[-6,-2],[4,-3]]);
close(Math.hypot(-4,3),5);
close(Math.atan2(3,-4)*180/Math.PI,143.13010235415598);
const retryReaction=80+.6*60, retryFriction=60-.8*60;
close(retryReaction,116); close(retryFriction,12);
assert(retryFriction<retryReaction/8);
const oldEndpoint=800/19, oldReaction=80+.6*oldEndpoint;
close(60-.8*oldEndpoint,oldReaction/4);
assert(60-.8*oldEndpoint>oldReaction/8);
for(const [P,U,f] of [[100,0,40],[100,60,-20],[50,60,-20],[100,40,0]]) {
  equilibrium([[P,0],[-P,0],[0,-40],[0,U],[0,f]]);
  assert(P>0 && Math.abs(f)<=.5*P);
}
assert(40>.5*50, 'The smaller press cannot support the original no-lift case');

const root=path.join(__dirname,'..');
const source=fs.readFileSync(path.join(root,'alevel/a2-mathematics/mechanics/forces-equilibrium-and-friction.md'),'utf8');
const html=fs.readFileSync(path.join(root,'_site/alevel/a2-mathematics/mechanics/forces-equilibrium-and-friction/index.html'),'utf8');
assert.equal((source.match(/^### Example \d/gm)||[]).length,8);
assert.equal((source.match(/^### Q\d/gm)||[]).length,8);
for(const label of ['Hint','Solution and check'])
  assert.equal((html.match(new RegExp('<summary>'+label+'</summary>','g'))||[]).length,
    source.split('<summary>'+label+'</summary>').length-1, 'All authored help survives rendering');
assert(source.includes('reading_layout: true'));
assert.equal((html.match(/class="worked-example"/g)||[]).length,8);
const tasks=[...source.matchAll(/<div class="lesson-check" markdown="1">([\s\S]*?)<\/div>/g)].map(m=>m[1]);
assert(tasks.length>8, 'Original practice plus targeted checks and retries');
for(const task of tasks) {
  assert.equal((task.match(/<details\b/g)||[]).length,2, 'Each task has separate hint and solution');
  assert(!/<details[^>]*\bopen\b/.test(task));
  assert(!task.includes('class="lesson-check"'), 'No nested tasks');
}
for(const id of ['first-check','components-retry','friction-retry','zero-friction-check','later-check','wall-check'])
  assert(html.includes('id="'+id+'"'), 'Task and recovery target: '+id);
const wallTask=tasks.find(t=>t.includes('{#wall-check}'));
assert(wallTask.indexOf('wall-friction-feedback.svg')>wallTask.indexOf('<summary>Solution and check</summary>'),
  'The graphical answer stays in the wall task solution');
assert(source.includes('self-written'));
// Literal absolute-value bars can turn a Markdown maths paragraph into a table.
assert.equal((html.match(/<table\b/g)||[]).length,3,'Unexpected table: check absolute-value notation');
for(const [,formula] of source.matchAll(/\$\$([\s\S]*?)\$\$/g))
  assert(html.includes(formula),'A display formula was damaged during Markdown rendering');
for(const [,url] of source.matchAll(/!\[[^\]]+\]\(([^)]+)\)/g))
  assert(fs.existsSync(path.join(root,url)),`Missing diagram: ${url}`);
console.log('Forces lesson passed: resultants, string geometry, world-coordinate force balance, contact, both friction limits and 8 practice solutions.');
