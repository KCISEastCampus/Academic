const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const close = (actual, expected, tolerance=1e-7) => assert(Math.abs(actual-expected)<tolerance, `${actual} != ${expected}`);
const f = x => x**3-x-1;
const q = x => x**3+x-1;
for (const [fn,a,b] of [[f,1,2],[f,1.32,1.33],[f,1.3245,1.3255],[q,0.6815,0.6825],[x=>Math.log(x)+x-2,1.55,1.56]]) assert(fn(a)*fn(b)<0);
close(f(1.32),-0.020032);
close(f(1.33),0.022637);
close(q(0.6815),-0.001982607);
close(q(0.6825),0.000412766);
const root = path.join(__dirname,'..');
const source = fs.readFileSync(path.join(root,'alevel/a2-mathematics/numerical-methods.md'),'utf8');
let iterate = 1;
const record = source.match(/<summary>Continue: full iteration record<\/summary>([\s\S]*?)<\/details>/)[1];
const rows = [...record.matchAll(/^\| (\d+) \| ([\d.]+) \|$/gm)];
assert.equal(rows.length,9);
for (const [i,row] of rows.entries()) {
  assert.equal(Number(row[1]),i);
  assert.equal(iterate.toFixed(8),row[2]);
  iterate=Math.cbrt(iterate+1);
}
assert.equal(iterate.toFixed(3),'1.325');
let bad=1;
for (const expected of [0,-1,-2,-9]) { bad=bad**3-1; assert.equal(bad,expected); }
let x=0.5;
for (const expected of ['0.800000','0.609756','0.728968']) { x=1/(1+x*x); assert.equal(x.toFixed(6),expected); }
for (let i=0;i<60;i++) x=1/(1+x*x);
assert.equal(x.toFixed(3),'0.682');
assert(Math.abs(-2*x/(1+x*x)**2)<1);
assert(Math.abs(-3*x*x)>1);
function midpoint(fn,a,b,n) {
  const h=(b-a)/n;
  let sum=0;
  for (let i=0;i<n;i++) sum+=fn(a+(i+0.5)*h);
  return h*sum;
}
function simpson(ys,h) {
  const n=ys.length-1;
  assert(n>0 && n%2===0,'Simpson needs an even number of strips');
  return h/3*ys.reduce((sum,y,i)=>sum+y*(i===0||i===n?1:i%2?4:2),0);
}
close(midpoint(x=>x*x,0,2,4),2.625);
close(midpoint(Math.log,1,3,4),1.3026452335722205);
close(simpson([0,.5,1,1.5,2].map(Math.exp),.5),6.391210186666918);
close(simpson([1,1.4,2.1,3.5,5.2],.5),5);
close(simpson([0,.5,1,1.5,2].map(x=>x**3),.5),4);
assert.throws(()=>simpson([0,1,4,9],1));
for (const [estimate,exact,expected] of [
  [n=>midpoint(x=>x*x,0,2,n),8/3,2.65625],
  [n=>midpoint(Math.log,1,3,n),3*Math.log(3)-2,1.2975640130337196],
  [n=>simpson(Array.from({length:n+1},(_,i)=>Math.exp(2*i/n)),2/n),Math.exp(2)-1,6.389193725416423]
]) {
  close(estimate(8),expected);
  assert(Math.abs(estimate(8)-exact)<Math.abs(estimate(4)-exact),'Finer strips should reduce the error in this example');
}
// Recompute the later task's rounding certificate and data estimate.
const laterF = x => Math.log(x)+x-2;
assert(laterF(1.555)<0 && laterF(1.565)>0);
close(laterF(1.555),-0.00352445,5e-9);
close(laterF(1.565),0.01288582,5e-9);
close(simpson([1,2,3,2,1],.5),4);
close(midpoint(x=>2-x,0,1,2),1.5);
assert(q(.68225)<0 && q(.68235)>0);
close(q(.68225),-.000186461,5e-10);
close(q(.68235),.000053199,5e-10);
close(1*(2+2),4);
let staircase=0;
for (const expected of [1,1.5,1.75]) { staircase=.5*staircase+1; close(staircase,expected); }
const choice=source.match(/<!-- task:choose-data -->([\s\S]*?)<!-- \/task:choose-data -->/)[1];
assert(!/Simpson|mid-ordinate/.test(choice),'Q7 must not reveal which rule to accept or reject');
for (const key of ['retry-evidence','retry-graph','retry-geometry','retry-data','later-review']) {
  const start=source.indexOf('{#'+key+'}');
  assert(start>0 && source.lastIndexOf('</details>',start)>source.lastIndexOf('<details',start),'Retry prompt is outside earlier answers');
}
assert(!/[\u3400-\u9fff]/u.test(source));
assert.equal((source.match(/^#{3,4} Example /gm)||[]).length,6);
assert.equal((source.match(/^### Q\d/gm)||[]).length,7);

// Check the trial records against their functions, including the choices between brackets.
const trials = source.slice(source.indexOf('**First pass:**'), source.indexOf('{#iteration}'));
for (const [,x,y] of trials.matchAll(/^\| ([\d.]+) \| (-?[\d.]+) \|$/gm)) close(f(+x),+y,1e-8);
const q1 = source.slice(source.indexOf('### Q1'),source.indexOf('### Q2'));
for (const [,x,y] of q1.matchAll(/^\| ([\d.]+) \| (-?[\d.]+) \|$/gm)) close(Math.log(+x)+ +x-2,+y,5.1e-7);
close(1.325-.0005,1.3245);
close(1.325+.0005,1.3255);
close(midpoint(Math.exp,0,2,4),6.322985533383994);
close(midpoint(Math.exp,0,2,8),6.372448212108288);
close(.4*[.8,1.1,1.4,1.2,.9].reduce((a,b)=>a+b),2.16);
for (const [n,m,me,s,se] of [...source.matchAll(/^\| ([48]) \| ([\d.]+) \| ([\d.]+) \| ([\d.]+) \| ([\d.]+) \|$/gm)].map(m=>m.slice(1).map(Number))) {
  const exact=Math.expm1(2);
  close(midpoint(Math.exp,0,2,n),m,1e-9);
  close(simpson(Array.from({length:n+1},(_,i)=>Math.exp(2*i/n)),2/n),s,1e-9);
  close(Math.abs(m-exact),me,1e-9); close(Math.abs(s-exact),se,1e-9);
}

const zhSource=fs.readFileSync(path.join(root,'zh/alevel/a2-mathematics/numerical-methods.md'),'utf8');
const math = s => s.match(/\$\$[\s\S]*?\$\$|\$[^$\n]+\$/g);
assert.deepEqual(math(source),math(zhSource),'All English/Chinese formulas align in order');
for (const key of ['refine-bracket','next-iteration','shared-weight','choose-data','retry-evidence','retry-graph','retry-geometry','retry-data','later-review']) {
  const task = text => text.match(new RegExp(`<!-- task:${key} -->([\\s\\S]*?)<!-- /task:${key} -->`))[1];
  assert.equal(task(source),task(zhSource),`${key}: same English task and data`);
}

// Read the actual SVG vertices back into graph coordinates to catch mismatched diagrams.
function graph(file,id,xlim,ylim) {
  const svg=fs.readFileSync(path.join(root,'assets/img',file),'utf8');
  const pathData=svg.match(new RegExp(`id="${id}">\\s*<path d="([^"]+)"[^>]*clip-path="url\\(#([^\\)]+)\\)"`));
  assert(pathData,`${file}: plotted path ${id}`);
  const clip=svg.match(new RegExp(`<clipPath id="${pathData[2]}">\\s*<rect x="([\\d.]+)" y="([\\d.]+)" width="([\\d.]+)" height="([\\d.]+)"`));
  const [x,y,w,h]=clip.slice(1).map(Number);
  return [...pathData[1].matchAll(/[ML]\s+(-?[\d.]+)\s+(-?[\d.]+)/g)].map(m=>[
    xlim[0]+(+m[1]-x)/w*(xlim[1]-xlim[0]),
    ylim[1]-(+m[2]-y)/h*(ylim[1]-ylim[0])
  ]);
}
function checkSteps(file,id,xlim,ylim,g,x0,n,starty) {
  const points=graph(file,id,xlim,ylim),expected=[[x0,starty]];
  let x=x0;
  for(let i=0;i<n;i++) { const next=g(x); expected.push([x,next],[next,next]); x=next; }
  assert.equal(points.length,expected.length);
  expected.forEach((p,i)=>p.forEach((v,j)=>close(points[i][j],v,1e-7)));
}
checkSteps('numerical-iteration-steps.svg','first-two-iterations',[.95,1.37],[.95,1.37],x=>Math.cbrt(x+1),1,2,.95);
checkSteps('numerical-practice-cobweb.svg','practice-three-iterations',[.655,.71],[.655,.71],x=>1/(1+x*x),.7,3,.655);
for(const q of [.2,.8,-1.2]) checkSteps('numerical-iteration-behaviour.svg',`behaviour-${q}`,[0,2],[0,2],x=>1+q*(x-1),.6,3,0);
const parabola=graph('numerical-simpson-pair.svg','simpson-parabola',[-.1,2.15],[0,8.3]);
const a=(Math.exp(2)-2*Math.E+1)/2, b=Math.E-1-a;
assert(parabola.length>15);
for (const [x,y] of parabola) close(y,a*x*x+b*x+1,1e-7);
for(const x of [0,1,2]) close(a*x*x+b*x+1,Math.exp(x));

for (const language of ['', 'zh/']) {
  const html=fs.readFileSync(path.join(root,`_site/${language}alevel/a2-mathematics/numerical-methods/index.html`),'utf8');
  const body=html.split('id="content-container"')[1].split('<div id="toc"')[0];
  assert(html.includes('class="reading-layout"') && html.includes('data-toc-compact="true"'),'Use the existing focused reading layout');
  const examples=[...body.matchAll(/<section class="worked-example">([\s\S]*?)<\/section>/g)];
  assert.equal(examples.length,6,'Give each worked solution a complete boundary');
  for (const [,example] of examples) {
    assert.match(example, /<h[34] id="example-/);
    assert.match(example, /Question:/);
    assert(!example.includes('class="lesson-check"') && !example.includes('<h2'),'Keep student attempts and new concepts outside worked solutions');
  }
  assert.equal((body.match(/<section class="lesson-check">/g)||[]).length,15,'Separate local attempts, independent questions, retries and later review');
  for (const [,check] of body.matchAll(/<section class="lesson-check">([\s\S]*?)<\/section>/g)) {
    assert(!check.includes('<section'),'Each practice question is a sibling, not a nested question');
    assert.equal((check.match(/<h[34]\b/g)||[]).length,1,'Each question has its own heading');
    assert.equal((check.match(/<details\b/g)||[]).length,2,'Each question owns its hint and solution');
  }
  assert(body.indexOf('1.3245') < body.indexOf('numerical-iteration-steps.svg'),'Finish the numerical accuracy argument before graphical iteration');
  assert.equal((body.match(/<details\b/g)||[]).length,34);
  assert(!/<details\b[^>]*\bopen(?:\s|=|>)/.test(body),'Hints and solutions start closed');
  assert.equal((body.match(/<img\b/g)||[]).length,6);
  for (const tag of body.match(/<img\b[^>]*>/g)) {
    assert(/width="\d+"/.test(tag) && /height="\d+"/.test(tag) && /aspect-ratio:/.test(tag),'Reserve diagram size while lazy images load');
  }
  assert(!/<p>\s*\|/.test(body),'No record table rendered as raw pipes');
  assert(body.includes('1.3245') && body.includes('6.322985533'));
  assert(body.indexOf('id="staircase-and-cobweb-diagrams"') < body.indexOf('id="convergence-and-divergence"'),'Explain graphical iteration before the derivative test');
  for (const id of ['iteration-extension','integration-comparison','lesson-sources']) {
    assert(new RegExp(`<details id="${id}"`).test(body),`${id}: supplementary material is separately disclosed`);
  }
  assert(/<details[^>]*>[\s\S]*?numerical-practice-cobweb/.test(body));
  const solution=body.slice(0,body.indexOf('numerical-practice-cobweb'));
  assert(solution.lastIndexOf('<details')>solution.lastIndexOf('</details>'),'Q3 answer image remains inside its solution');
  const oldIds=['locating-roots','example-1--show-a-root-lies-in-an-interval','iteration','example-2--iterate-and-check-the-reported-accuracy','convergence-and-divergence','example-3--a-valid-rearrangement-can-fail','staircase-and-cobweb-diagrams','numerical-integration','the-mid-ordinate-rule','example-4--choose-the-midpoints-not-the-endpoints','simpsons-rule','example-5--apply-the-weights','example-6--work-from-a-table','practice','q1--locate-a-root','q2--iterate-without-rounding-the-next-input','q3--compare-two-rearrangements','q4--mid-ordinate-positions','q5--simpsons-rule-and-an-exact-check','q6--decide-whether-the-data-is-suitable','quick-reference'];
  for (const id of oldIds) assert(body.includes(`id="${id}"`),`Preserve anchor ${id}`);
}
console.log('Numerical methods passed: trial chains, iterations, integration comparisons, bilingual tasks/formulas, SVG geometry, legacy anchors, concept order, rendered tables and 34 closed disclosures per language.');
