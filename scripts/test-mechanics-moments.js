// Run after bundle exec jekyll build. Check forces and moments in world coordinates.
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
const source=fs.readFileSync(path.join(root,'alevel/a2-mathematics/mechanics/moments-and-rigid-objects.md'),'utf8');
const html=fs.readFileSync(path.join(root,'_site/alevel/a2-mathematics/mechanics/moments-and-rigid-objects/index.html'),'utf8');
assert.equal((source.match(/^### Example \d/gm)||[]).length,8);
assert.equal((source.match(/^### Q\d/gm)||[]).length,8);
assert.equal((html.match(/<summary>Hint<\/summary>/g)||[]).length,8);
assert.equal((html.match(/<summary>Solution and check<\/summary>/g)||[]).length,8);
assert.equal((html.match(/<table\b/g)||[]).length,2);
for(const [,formula] of source.matchAll(/\$\$([\s\S]*?)\$\$/g))
  assert(html.includes(formula.replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]))),'A display formula was damaged during Markdown rendering');
for(const [,url] of source.matchAll(/!\[[^\]]+\]\(([^)]+)\)/g)) {
  assert(fs.existsSync(path.join(root,url)),`Missing diagram: ${url}`);
  const svg=fs.readFileSync(path.join(root,url),'utf8');
  // marker-end marks the last endpoint of a path, not each disconnected force.
  for(const [,arrows] of svg.matchAll(/<g[^>]*marker-end="[^"]+"[^>]*>([\s\S]*?)<\/g>/g))
    for(const [,d] of arrows.matchAll(/<path\b[^>]*d="([^"]+)"/g))
      assert.equal((d.match(/M/g)||[]).length,1,`A force arrow lost its head: ${url}`);
}
console.log('Moments lesson passed: force and moment balance about multiple points, tipping/contact limits, ladder friction, climber range, hinge directions and 8 practice solutions.');
