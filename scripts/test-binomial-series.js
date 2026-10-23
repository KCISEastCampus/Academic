// Verify source/math with --source-only; default also checks built HTML.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const close = (a,b) => assert(Math.abs(a-b)<1e-12, `${a} != ${b}`);
function coefficients(n,k,scale=1) {
  const c=[scale];
  for(let j=1;j<=3;j++) c.push(c[j-1]*(n-j+1)*k/j);
  return c;
}
function same(a,b) { a.forEach((v,i)=>close(v,b[i])); }
function product(a,b) {
  return Array.from({length:4},(_,i)=>a.reduce((s,v,j)=>s+(j<=i?v*(b[i-j]||0):0),0));
}
same(coefficients(.5,4), [1,2,-2,4]);
same(coefficients(-.5,-1/3,1/3), [1/3,1/18,1/72,5/1296]);
same(coefficients(-2,-2), [1,4,12,32]);
same(coefficients(-1,-1).map((v,i)=>v+coefficients(-1,2,2)[i]),[3,-3,9,-15]);
same(product([1,1],coefficients(.5,-2)),[1,0,-1.5,-1]);
same(coefficients(-1,-3),[1,3,9,27]);
same(coefficients(.5,1/4,2),[2,1/4,-1/64,1/512]);
same(coefficients(-2,1),[1,-2,3,-4]);
same(coefficients(-1,-2,8/3).map((v,i)=>v+coefficients(-1,1,4/3)[i]),[4,4,12,20]);
same(product([1,2],coefficients(-.5,-1)),[1,2.5,11/8,17/16]);
for(const [a,d] of [[[3,-3,9,-15],[1,1,-2]],[[4,4,12,20],[1,-1,-2]],[[1,-2,3,-4],[1,2,1]]])
 same(product(a,d),[a[0],0,0,0]);
same(product([2,1/4,-1/64,1/512],[2,1/4,-1/64,1/512]),[4,1,0,0]);
const poly=(c,x)=>c.reduce((s,v,i)=>s+v*x**i,0);
const estimate=2*poly(coefficients(.5,1),.02);
close(estimate,2.019901);
assert.equal(estimate.toFixed(5),Math.sqrt(4.08).toFixed(5));
close(2*(-5/128)*.02**4,-.0000000125);
const other=3*poly(coefficients(.5,1),-.01);
close(other,2.9849623125);
assert.equal(other.toFixed(5),Math.sqrt(8.91).toFixed(5));
close(poly(coefficients(.5,4),.24),1.420096);
assert(Math.abs(poly(coefficients(.5,4),.24)-Math.sqrt(1.96))>.02);
// Range is determined by the substituted expression, not by the outside factor.
for(const [k,r] of [[4,.25],[-1/3,3],[-2,.5],[-3,1/3],[1/4,4],[1,1]]) close(Math.abs(k*r),1);

// Independently recombine the new rational expansions with their denominators.
const repeated=coefficients(-1,-1).map((v,i)=>v+coefficients(-2,-1)[i]+coefficients(-1,1)[i]);
same(repeated,[3,2,5,4]);same(product(repeated,[1,-1,-1,1]),[3,-1,0,0]);
const mixed=coefficients(-1,-1,1/4).map((v,i)=>v+coefficients(-2,-1,3/2)[i]+coefficients(-1,1,1/4)[i]);
same(mixed,[2,3,5,6]);same(product(mixed,[1,-1,-1,1]),[2,1,0,0]);
same(coefficients(-.5,-.5,.5).slice(0,3),[.5,1/8,3/64]);
// Replacing x by x^2 doubles all powers; |x^2/2|<1 has two finite boundaries.
for(const x of [-Math.SQRT2,Math.SQRT2]) close(x*x/2,1);
same(product([1,1],coefficients(-1,-2)),[1,3,6,12]);
same(product([1,2],coefficients(-2,-1)),[1,4,7,10]);
const intersection=coefficients(-1,-2).map((v,i)=>v+coefficients(-1,1)[i]);
same(intersection,[2,1,5,7]);same(product(intersection,[1,-1,-2]),[2,-1,0,0]);
for(const x of [-.49,.49]) assert(Math.abs(2*x)<1 && Math.abs(x)<1);
assert(Math.abs(2*.75)>1 && Math.abs(.75)<1,'The smaller range is necessary');
const retry=4*poly(coefficients(.5,1),-.01);
close(retry,3.97994975);assert.equal(retry.toFixed(5),Math.sqrt(15.84).toFixed(5));
const review=product([1,1],coefficients(-.5,-2));
same(review,[1,2,2.5,4]);
const H=x=>(1+x)/Math.sqrt(1-2*x);
close(poly(review,.01),1.020254);
assert.equal(H(.01).toFixed(10),'1.0202540700');
assert.equal(poly(review,.01).toFixed(4),H(.01).toFixed(4));
close(poly(review,.49),3.050846);assert(Math.abs(poly(review,.49)-H(.49))>7);

const slug="binomial-series";
const legacyIds=["the-binomial-series", "example-1--a-fractional-power", "example-2--take-out-the-constant-first", "example-3--a-negative-integer-power", "partial-fractions-and-products", "example-4--expand-a-rational-function", "example-5--multiply-and-collect-powers", "approximations", "example-6--approximate-a-square-root", "practice", "question-1--reciprocal", "question-2--outside-factor", "question-3--signs", "question-4--two-ranges", "question-5--a-product", "question-6--choose-a-useful-form", "quick-reference"];
const asset=null;

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

assert(source.includes('1.0202540700') && source.includes('2+3x+5x^2+6x^3'));
assert(source.includes('2+x+5x^2+7x^3') && source.includes('{#example-repeated-factor}'));

console.log(`binomial-series: mathematics, bilingual tasks/formulas, source structure and legacy anchors passed${sourceOnly?'; rendered HTML NOT checked':'; rendered HTML also passed'}.`);
