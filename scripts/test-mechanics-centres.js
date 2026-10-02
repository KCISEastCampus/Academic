// Run after bundle exec jekyll build. Check original geometry and mass moments.
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
const source=fs.readFileSync(path.join(root,'alevel/a2-mathematics/mechanics/centres-of-mass.md'),'utf8').replace(/\r\n?/g,'\n');
const html=fs.readFileSync(path.join(root,'_site/alevel/a2-mathematics/mechanics/centres-of-mass/index.html'),'utf8').replace(/\r\n?/g,'\n');
assert.equal((source.match(/^### Example \d+/gm)||[]).length,8);
assert.equal((html.match(/<table\b/g)||[]).length,4);
for(const [,formula] of source.matchAll(/\$\$([\s\S]*?)\$\$/g)) {
  const escaped=formula.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');
  assert(html.includes(escaped),`Damaged formula: ${formula}`);
}
for(const name of ['composite-lamina','lamina-cutout','suspended-lamina']) {
  const svg=fs.readFileSync(path.join(root,'assets/img/a2-math-mech',name+'.svg'),'utf8');
  assert(svg.includes('<title')&&svg.includes('<desc'));
}
console.log('Centres of Mass passed: 8 examples, 8 practice answers, polygon geometry, mass moments, stable suspension, support equilibrium and formula preservation.');
