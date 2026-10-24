// Verify source/math with --source-only; default also checks built HTML.
const assert=require('node:assert/strict');
const fs=require('node:fs');
const {exp,log}=Math;
const close=(a,b)=>assert(Math.abs(a-b)<1e-9,`${a} != ${b}`);
function firstWhole(A,q,target,below,expected){
 const n=log(target/A)/log(q);
 const boundary=Math.abs(n-Math.round(n))<1e-10?Math.round(n):n;
 assert.equal(Math.floor(boundary)+1,expected);
 const satisfies=t=>below?A*q**t<target:A*q**t>target;
 assert(!satisfies(expected-1));assert(satisfies(expected));
}
firstWhole(2000,1.06,3000,false,7);
firstWhole(5000,.85,2000,true,6);
firstWhole(500,1.08,1000,false,10);
firstWhole(800,.9,200,true,14);
// Strict integer-boundary case: equality is not enough.
firstWhole(100,2,400,false,3);
firstWhole(400,.5,100,true,3);
assert(1000*1.07**6<1200*1.04**6);
assert(1000*1.07**7>1200*1.04**7);
for(const [value,expected] of [[2000*1.06**6,'2837.04'],[2000*1.06**7,'3007.26'],[5000*.85**5,'2218.53'],[5000*.85**6,'1885.75'],[500*1.08**9,'999.50'],[500*1.08**10,'1079.46'],[800*.9**13,'203.35'],[800*.9**14,'183.01']]) assert.equal(value.toFixed(2),expected);
close(2-exp(-(-log(2))),0);close(2-exp(0),1);
close(log(2*2.5-4),0);
close(log(3-2),0);close(log(3),log(3-0));
close(log(3-1)+log(3+1),log(8));
assert(-3-1<=0&&-3+1<=0);
close(exp(2*log(4))-3*exp(log(4))-4,0);
close(exp(3*((1+log(5))/3)-1),5);
close(log(3-2)+log(3),log(3));
for(const x of [log(2),log(3)]) close(exp(2*x)-5*exp(x)+6,0);
close(exp(2*((1+log(7))/2)-1),7);
for(const x of [1.2,2,4,10]) close(2*log(x-1)-log(x+2),log((x-1)**2/(x+2)));
for(const x of [.2,1,3,10]){
 close(3*log(x+1)-.5*log(x),log((x+1)**3/Math.sqrt(x)));
 assert((x+1)**2/x>=4);
}
for(const x of [-3,-.5,.5,3]) close(log(x*x),2*log(Math.abs(x)));
// Original combined logarithm can exist beyond the original separate arguments.
assert((0-1)**2/(0+2)>0);assert(0-1<=0);
const f=x=>3-exp(2*x),inv=x=>.5*log(3-x);
for(const x of [-2,0,.6]) close(inv(f(x)),x);
for(const x of [-5,0,2]) close(f(inv(x)),x);
close(inv(2),0);
const F=x=>log(2*x-1),G=x=>exp(x)+1,Finv=x=>(exp(x)+1)/2;
for(const x of [-2,0,2]){close(F(Finv(x)),x);close(F(G(x)),log(2*exp(x)+1));}
close(F(G(log(2))),log(5));
for(const t of [-1,0,1,5]) close(1.08**t,exp(log(1.08)*t));

firstWhole(500,.8,200,true,5);
firstWhole(240,.75,100,true,4);
firstWhole(100,.9,81,true,3);
close(log(100/240)/log(.75),3.0431814186149513);
close(135/240,75.9375/135);close(Math.sqrt(135/240),.75);
close(240*.75**3,101.25);close(240*.75**4,75.9375);
close(100*.9**2,81);close(100*.9**3,72.9);
for(const [A,q] of [[240,.75],[100,.9]])for(const t of [0,1,2,4])close(A*q**t,A*exp(log(q)*t));
assert(log(.9)!==-.1);
for(const x of [2.1,3,10])close(2*log(x-2)-log(x),log((x-2)**2/x));
assert((1-2)**2/1>0 && 1-2<0);
close(log(4-3)+log(4+1),log(5));assert(-2-3<0&&-2+1<0);
close(exp(2*log(2))+exp(log(2))-6,0);assert(-3<0);
const retryF=x=>2+exp(-x),retryInv=x=>-log(x-2);
for(const x of [-3,0,2]){assert(retryF(x)>2);close(retryInv(retryF(x)),x);}
for(const x of [2.1,3,10])close(retryF(retryInv(x)),x);
close(retryF(0),3);close(retryInv(3),0);
for(const x of [.1,1,10])close(retryF(log(x)),2+1/x);
assert(Number.isNaN(log(-1)) && Number.isFinite(2+1/(-1)),'Simplification must retain the composite domain');
const intersectionX=log(2.5);assert(intersectionX<log(5));close(log(5-exp(intersectionX)),intersectionX);
// The remaining equation 2u=5 has one positive u; exp and log are injective.
close(2*exp(intersectionX),5);
const halfLife=t=>640*.5**(t/3);close(halfLife(9),80);assert(halfLife(10)<80);
assert.equal(halfLife(10).toFixed(2),'63.50');

const slug="exponential-and-logarithmic-functions";
const legacyIds=["exponential-growth-and-decay", "example-1--growth-and-the-first-whole-year", "example-2--decay-and-a-negative-logarithm", "check-whether-the-model-is-reasonable", "the-exponential-function", "example-3--sketch-a-transformed-exponential-curve", "natural-logarithms", "laws-of-logarithms", "example-4--combine-logarithms-and-retain-the-domain", "solving-equations", "example-5--reject-an-invalid-logarithmic-root", "example-6--a-quadratic-in-an-exponential", "the-logarithmic-function", "example-7--domain-and-asymptote-of-a-logarithmic-curve", "example-8--find-an-inverse-and-its-domain", "connecting-the-models", "practice", "q1--growth-and-comparing-models", "q2--decay-and-model-assumptions", "q3--two-transformed-graphs", "q4--logarithm-laws-and-domains", "q5--check-the-original-logarithms", "q6--exponential-equations", "q7--inverse-and-a-composite-function", "quick-reference"];
const asset="exponential-logarithm-inverses.svg";

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

assert(source.includes('3.04318\\ldots'));
assert(source.includes('2+e^{-\\ln x}=2+1/x'));

console.log(`exponential-and-logarithmic-functions: mathematics, bilingual tasks/formulas, source structure and legacy anchors passed${sourceOnly?'; rendered HTML NOT checked':'; rendered HTML also passed'}.`);
