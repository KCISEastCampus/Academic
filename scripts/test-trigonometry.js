// Verify source/math with --source-only; default also checks built HTML.
const assert=require('node:assert/strict');
const fs=require('node:fs');
const {sin,cos,tan,PI,sqrt}=Math;
const close=(a,b)=>assert(Math.abs(a-b)<1e-9,`${a} != ${b}`);
const deg=x=>x*PI/180;
// Check all listed roots against the original equations.
const cases=[
 [x=>1/cos(2*x-PI/3)+2,[PI/2,5*PI/6],0,PI],
 [x=>cos(x)+sqrt(3)*sin(x)-1,[0,2*PI/3,2*PI],0,2*PI],
 [x=>sin(2*x)-sin(x),[0,PI/3,PI,5*PI/3,2*PI],0,2*PI],
 [x=>1/sin(x)+2,[deg(210),deg(330)],0,2*PI],
 [x=>sin(x+PI/6)-cos(x),[PI/6,7*PI/6],0,2*PI],
 [x=>cos(2*x)-sin(x),[PI/6,5*PI/6,3*PI/2],0,2*PI],
];
for(const [f,roots,a,b] of cases){
 for(const x of roots){assert(x>=a&&x<=b);close(f(x),0);}
 // Supplemental scan only; analytic branches below check touching roots and completeness.
 const step=(b-a)/12000;
 for(let i=0;i<12000;i++){
  const l=a+i*step,r=l+step;
  if(f(l)*f(r)<0&&Math.abs(f(l)-f(r))<.1)
   assert(roots.some(x=>x>=l-1e-9&&x<=r+1e-9),`Missing root near ${l}`);
 }
}
close(Math.acos(3*(5/6)-2),PI/3);
close(Math.asin(-.5),-PI/6);close(Math.atan(-sqrt(3)),-PI/3);
close(sin(deg(15)),(sqrt(6)-sqrt(2))/4);
close(cos(deg(15)),(sqrt(6)+sqrt(2))/4);
close(sin(3*PI/4-PI/4),1);
const alpha=Math.atan(3/4), beta=Math.atan(4/3);
assert.equal((90+alpha*180/PI).toFixed(1),'126.9');
assert.equal((270+alpha*180/PI).toFixed(1),'306.9');
assert.equal((360-beta*180/PI).toFixed(1),'306.9');
assert.equal((180-beta*180/PI).toFixed(1),'126.9');
close(2+4*sin(PI/2+alpha)-3*cos(PI/2+alpha),7);
close(2+4*sin(3*PI/2+alpha)-3*cos(3*PI/2+alpha),-3);
close(1+3*cos(2*PI-beta)-4*sin(2*PI-beta),6);
close(1+3*cos(PI-beta)-4*sin(PI-beta),-4);
close(tan(2*Math.atan(.5)),4/3);
for(const x of [-2.1,-.8,.3,1.2,2.5]){
 close(1/cos(x)-cos(x),sin(x)*tan(x));
 close(tan(x)+cos(x)/sin(x),1/(sin(x)*cos(x)));
 close((3/cos(x))**2/9-(2*tan(x))**2/4,1);
 close((2/sin(x))**2/4-(3*cos(x)/sin(x))**2/9,1);
 close(4*sin(x)-3*cos(x),5*sin(x-alpha));
 close(3*cos(x)-4*sin(x),5*cos(x+beta));
 close(cos(3*x),4*cos(x)**3-3*cos(x));
 close(6*sin(x)**2-2,1-3*cos(2*x));
}

// Enumerate the analytic cosine branches, including touching roots and endpoints.
function cosineAngles(c,a,b,upper=true) {
 const angle=Math.acos(c),out=[];
 for(const sign of [-1,1]) {
  const start=Math.ceil((a-sign*angle)/(2*PI)-1e-12),end=Math.floor((b-sign*angle)/(2*PI)+1e-12);
  for(let k=start;k<=end;k++) {
   const x=sign*angle+2*k*PI;
   if(x>=a-1e-12 && (upper?x<=b+1e-12:x<b-1e-12) && !out.some(y=>Math.abs(y-x)<1e-12)) out.push(x);
  }
 }
 return out.sort((a,b)=>a-b);
}
const sameRoots=(a,b)=>{assert.equal(a.length,b.length);a.forEach((x,i)=>close(x,b[i]));};
sameRoots(cosineAngles(.5,-PI/3,5*PI/3).map(p=>(p+PI/3)/2),[0,PI/3,PI]);
const phase=Math.acos(2/3),shift=PI/6;
const q9=[...cosineAngles(2/3,-shift,11*PI/6,false),...cosineAngles(-1,-shift,11*PI/6,false)].map(p=>p+shift).sort((a,b)=>a-b);
sameRoots(q9,[shift+phase,7*PI/6,13*PI/6-phase]);
const original=x=>2*tan(x-shift)**2-1/cos(x-shift)-1;
for(const x of q9){assert(x>=0&&x<2*PI && Math.abs(cos(x-shift))>1e-9);close(original(x),0);}
for(const p of [.2,1,2,PI,5]) close(2*tan(p)**2-1/cos(p)-1,(2/cos(p)-3)*(1/cos(p)+1));
assert(original(7*PI/6-.001)>0&&original(7*PI/6+.001)>0,'The sec=-1 root touches zero: sign scanning alone misses it');
// Domain boundaries are poles, never extra solutions created by clearing denominators.
for(const x of [2*PI/3,5*PI/3]) close(cos(x-shift),0);
for(const x of [0,.5,1]) close(Math.acos(1-2*x),PI*x);
assert(Math.acos(-1)<3*PI/2);
for(const x of [-.8,.3,1.2]) close((1/cos(x)**2-1)*cos(x)**2,sin(x)**2);
for(const t of [0,.3,1.2]){const u=2/cos(t),v=tan(t);close(u*u/4-v*v,1);assert(u>=2&&v>=0);}
close(2+sin(PI/4)+cos(PI/4),2+sqrt(2));
close(2+sin(5*PI/4)+cos(5*PI/4),2-sqrt(2));
for(const x of [3*PI/4,7*PI/4]) close(sin(x)+cos(x),0);
const retryRoots=[-PI/2,PI/6,PI/2,5*PI/6,3*PI/2];
const cosineZeros=cosineAngles(0,-PI/2,3*PI/2);
const sineHalves=cosineAngles(.5,-PI,PI).map(p=>p+PI/2).filter(x=>x>=-PI/2&&x<=3*PI/2);
sameRoots([...cosineZeros,...sineHalves].sort((a,b)=>a-b),retryRoots);
for(const x of retryRoots) close(sin(2*x)-cos(x),0);
sameRoots([...cosineAngles(1,0,2*PI),...cosineAngles(-.5,0,2*PI)].sort((a,b)=>a-b),[0,2*PI/3,4*PI/3,2*PI]);
for(const x of [0,2*PI/3,4*PI/3,2*PI])close(cos(2*x),cos(x));
for(const t of [PI/4,3*PI/4])close(cos(2*t),0);
for(const [t,y] of [[0,2],[PI/2,-2],[PI,2]])close(2/cos(2*t),y);
for(const t of [0,PI/2,PI])close(sin(2*t),0);
close(1/sin(2*PI/4),1);close(1/sin(2*3*PI/4),-1);

const slug="trigonometric-functions-and-formulae";
const legacyIds=["choose-a-method", "inverse-trigonometric-functions", "example-1--domain-range-and-a-transformed-inverse-graph", "reciprocal-trigonometric-functions", "example-2--transform-the-interval-as-well-as-the-angle", "trigonometric-identities", "example-3--prove-an-identity", "example-4--eliminate-a-parameter", "compound-angle-formulae", "example-5--exact-value-and-recognising-a-formula", "sine-and-cosine-forms", "example-6--a-sine-form-maximum-and-minimum", "example-7--solve-using-a-cosine-form", "double-angle-formulae", "example-8--keep-solutions-when-factorising", "example-9--derive-a-further-identity", "practice", "q1--inverse-values-and-graph", "q2--reciprocal-equation", "q3--an-identity-and-its-domain", "q4--eliminate-the-parameter", "q5--exact-values-and-a-compound-angle-equation", "q6--coefficients-signs-and-extrema", "q7--a-quadratic-equation", "q8--double-angle-and-powers", "quick-reference"];
const asset="trigonometric-reciprocals.svg";

// --source-only is for author checks; the default also requires a fresh Jekyll build.
const path=require('node:path');
const root=path.resolve(__dirname,'..');
const sourceOnly=process.argv.includes('--source-only');
const source=fs.readFileSync(path.join(root,`alevel/a2-mathematics/${slug}.md`),'utf8');
const zhSource=fs.readFileSync(path.join(root,`zh/alevel/a2-mathematics/${slug}.md`),'utf8');
const math=s=>s.match(/\$\$[\s\S]*?\$\$|\$[^$\n]+\$/g);
assert.deepEqual(math(source),math(zhSource),'English/Chinese mathematics aligns in sequence');
const outline=s=>[...s.matchAll(/^(#{2,6}) .+ \{#([^}]+)\}$/gm)].map(m=>[m[1].length,m[2]]);
assert.deepEqual(outline(source),outline(zhSource),'Bilingual heading levels and IDs align');
const tasks=s=>[...s.matchAll(/<!-- task:([^ ]+) -->([\s\S]*?)<!-- \/task:\1 -->/g)].map(m=>[m[1],m[2]]);
assert.deepEqual(tasks(source),tasks(zhSource),'Same English task, conditions and data in both languages');
assert(tasks(source).length>0);
assert(!/[\u3400-\u9fff]/u.test(source),'English page has no Chinese prose');
for(const [lang,md] of [['',source],['zh/',zhSource]]) {
  assert(/^reading_layout: true$/m.test(md) && /^toc_headings: h2, h3$/m.test(md));
  assert(md.includes('id="lesson-sources"') && md.includes('{#next-step}') && md.includes('{#later-review}'));
  const ids=[...md.matchAll(/\{#([^}]+)\}|\bid="([^"]+)"/g)].map(m=>m[1]||m[2]);
  assert.equal(new Set(ids).size,ids.length,'No duplicate page anchors');
  for(const id of legacyIds) assert(ids.includes(id),`Preserve ${id}`);
  for(const [,id] of md.matchAll(/\]\(#([^\)]+)\)/g)) assert(ids.includes(id),`Local fragment ${id}`);
  let level=1;
  for(const [,marks] of md.matchAll(/^(#{2,6}) /gm)) {
    assert(marks.length<=level+1,'Headings must not skip a level');level=marks.length;
  }
  const stack=[];
  for(const [,closing,tag] of md.matchAll(/<(\/?)(section|details)\b[^>]*>/g)) {
    if(closing) assert.equal(stack.pop(),tag,'Close each section/disclosure in order');
    else {if(tag==='section') assert(!stack.includes('section'),'Questions are siblings');stack.push(tag);}
  }
  assert.equal(stack.length,0);
  assert(!/<details\b[^>]*\bopen(?:\s|=|>)/.test(md),'Help starts closed');
  const examples=[...md.matchAll(/<section class="worked-example" markdown="1">([\s\S]*?)<\/section>/g)];
  const checks=[...md.matchAll(/<section class="lesson-check" markdown="1">([\s\S]*?)<\/section>/g)];
  for(const [,example] of examples) {
    assert(/^### (?:Example|例题) /m.test(example) && /\*\*(?:Question|题目)[：:]/.test(example));
    assert(!/^## /m.test(example) && !example.includes('<section'));
  }
  for(const [,check] of checks) {
    assert.equal((check.match(/^### /gm)||[]).length,1,'Each question owns one H3 title');
    assert.equal((check.match(/<details\b/g)||[]).length,2,'Separate hint and solution');
    assert.equal((check.match(/<!-- task:/g)||[]).length,1);
    assert(check.indexOf('<!-- /task:')<check.indexOf('<details'),'Task precedes its help');
    assert(!check.includes('<section'));
  }
  assert.equal(checks.length,tasks(md).length,'Every task has its own question boundary');
  if(!sourceOnly) {
    const html=fs.readFileSync(path.join(root,`_site/${lang}alevel/a2-mathematics/${slug}/index.html`),'utf8');
    assert(html.includes('class="reading-layout"') && html.includes('data-toc-compact="true"'));
    assert(html.includes('id="content-container"'),'Rendered lesson body exists');
    const body=html.split('id="content-container"')[1].split('<div id="toc"')[0];
    for(const id of ids) assert(body.includes(`id="${id}"`),`Rendered anchor ${id}`);
    assert.equal((body.match(/<section class="worked-example">/g)||[]).length,examples.length);
    assert.equal((body.match(/<section class="lesson-check">/g)||[]).length,checks.length);
    assert.equal((body.match(/<details\b/g)||[]).length,(md.match(/<details\b/g)||[]).length);
    assert(!/<details\b[^>]*\bopen(?:\s|=|>)/.test(body));
    assert(!/<p>\s*(?:\$\$|\|)/.test(body),'No raw display maths or pipe tables');
    for(const [,block] of body.matchAll(/<section class="lesson-check">([\s\S]*?)<\/section>/g)) {
      assert(!block.includes('<section'));
      assert.equal((block.match(/<h3\b/g)||[]).length,1);
      assert.equal((block.match(/<details\b/g)||[]).length,2);
    }
    if(asset) assert(fs.existsSync(path.join(root,'_site/assets/img',asset)));
  }
}
if(asset) {
  assert(source.includes(`/assets/img/${asset}`) && zhSource.includes(`/assets/img/${asset}`));
  assert(fs.existsSync(path.join(root,'assets/img',asset)));
}

// Check the rendered graph geometry, not just the presence of an asset.
const svg=fs.readFileSync(path.join(root,'assets/img',asset),'utf8');
const plots=[...svg.matchAll(/<g data-plot="([^"]+)" data-top="(\d+)">([\s\S]*?)<\/g>/g)];
assert.equal(plots.length,3);
const graphFunctions={cosec:x=>1/sin(x),sec:x=>1/cos(x),cot:x=>cos(x)/sin(x)};
const poles={cosec:[0,PI,2*PI],sec:[PI/2,3*PI/2],cot:[0,PI,2*PI]};
const branches={cosec:2,sec:3,cot:2};
const bounds=svg.match(/viewBox="0 0 ([\d.]+) ([\d.]+)"/).slice(1).map(Number);
for(const [,name,topText,body] of plots) {
  const top=Number(topText), f=graphFunctions[name];
  assert(f,`Known graph ${name}`);
  const asymptotes=[...body.matchAll(/class="asymptote" data-theta="([^"]+)" x1="([^"]+)"/g)];
  assert.equal(asymptotes.length,poles[name].length);
  asymptotes.forEach((m,i)=>{
    assert(Math.abs(Number(m[1])-poles[name][i])<1e-9);
    assert(Math.abs(Number(m[2])-(58+334*poles[name][i]/(2*PI)))<.001);
  });
  const paths=[...body.matchAll(/<path class="curve"[^>]* d="([^"]+)"/g)];
  assert.equal(paths.length,branches[name],`Separate continuous branches of ${name}`);
  for(const [,d] of paths) {
    const points=[...d.matchAll(/[ML](-?[\d.]+),(-?[\d.]+)/g)].map(m=>[Number(m[1]),Number(m[2])]);
    let visible=0;
    for(const [cx,cy] of points) {
      const x=(cx-58)*2*PI/334, y=(top+73-cy)/(146/6.5);
      assert(x>=-1e-10 && x<=2*PI+1e-10,`Graph domain ${name}: ${x}`);
      if(Math.abs(y)<=3.25) {
        assert(Math.abs(y-f(x))<.002,`${name} curve at ${x}`);
        visible++;
      }
    }
    assert(visible>30,`Visible sampled branch of ${name}`);
    const start=(points[0][0]-58)*2*PI/334,end=(points.at(-1)[0]-58)*2*PI/334;
    assert(!poles[name].some(p=>p>start && p<end),'No curve crosses an asymptote');
  }
  for(const [,x,y] of body.matchAll(/<text[^>]* x="([\d.]+)" y="([\d.]+)"/g)) {
    assert(Number(x)>=0 && Number(x)<=bounds[0] && Number(y)>0 && Number(y)+5<bounds[1],'Labels fit inside the image');
  }
}
assert(svg.includes('font-size:18px') && svg.includes('aria-labelledby="title desc"'));

assert(source.includes('(2\\sec\\phi-3)(\\sec\\phi+1)=0'));
assert(source.includes('13\\pi}6-\\beta') && source.includes('Use any valid exact method.'));

console.log(`trigonometric-functions-and-formulae: mathematics, bilingual tasks/formulas, source structure and legacy anchors passed${sourceOnly?'; rendered HTML NOT checked':'; rendered HTML also passed'}.`);
