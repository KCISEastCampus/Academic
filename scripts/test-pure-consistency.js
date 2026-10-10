// Run after bundle exec jekyll build. Complements the individual chapter checks.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = path.join(__dirname, '..');
const close = (a,b) => assert(Math.abs(a-b)<1e-5, a+' != '+b);
const derivative = (f,x) => (f(x+1e-5)-f(x-1e-5))/2e-5;

// Early chapters: verify the original expressions against the proposed answers.
for (const x of [-4,-0.5,0.5,4]) {
  close((x*x-9)/(x*x+x-6),(x-3)/(x-2));
  close(2/(x-1)-x/(x+2),(-x*x+3*x+4)/((x-1)*(x+2)));
  close(((x*x-9)/(x*x-1))/((x-3)/(x+1)),(x+3)/(x-1));
  close((2*x**3+3*x*x-5*x+4)/(x+2),2*x*x-x-3+10/(x+2));
  close((x*x+6*x-1)/((x-1)*(x+2)),1+2/(x-1)+3/(x+2));
  close((x**3+2*x*x+3*x+4)/(x*x-1),x+2+5/(x-1)-1/(x+1));
  close((2*x+1)*(x-2)*(x+2),2*x**3+x*x-8*x-4);
  close((2*x-3)*(x-2)*(x+2),2*x**3-3*x*x-8*x+12);
  close((5*x+1)/((x-1)*(x+2)),2/(x-1)+3/(x+2));
  close((2*x*x+2*x-18)/(x*(x-3)**2),-2/x+4/(x-3)+2/(x-3)**2);
  close((7*x+1)/((x-1)*(x+2)),8/(3*(x-1))+13/(3*(x+2)));
}
const p = x => x<=0 ? x*x : 2*x+1;
assert.deepEqual([-2,0,2].map(p),[4,0,5]);
const h = x => x<1 ? x+2 : x*x;
assert.deepEqual([-2,0,1,2].map(h),[0,2,1,4]);
for (const x of [1,2,3,5]) close(1+Math.sqrt(((x-1)**2+2)-2),x);
for (const x of [-5,-3,0,1,4]) {
  const f = x => (2*x+1)/(x-3);
  const inverse = x => (3*x+1)/(x-2);
  close(inverse(f(x)),x);
}
for (const x of [-3,-1,-0.5,0,.3,.4,.5,1,2]) {
  assert.equal(Math.abs(x+2)<3*Math.abs(x),x<-.5 || x>1);
  assert.equal(Math.abs(x-1)<=2*Math.abs(x),x<=-1 || x>=1/3);
}
// Integration-method answers, including the new standard/logarithm forms.
for (const [F,f,inputs] of [
  [x=>x*x/2+3*x,x=>(x*x+3*x)/x,[-2,.5,2]],
  [x=>(x*x+1)**3,x=>6*x*(x*x+1)**2,[-.5,.5,1]],
  [x=>(x+2)**8/8-2*(x+2)**7/7,x=>x*(x+2)**6,[-2.5,-1,.2]],
  [x=>Math.exp(2*x)*(x/2-.25),x=>x*Math.exp(2*x),[-.5,.2,1]],
  [x=>Math.log(Math.abs(x*x+2*x-15)),x=>(2*x+2)/(x*x+2*x-15),[-2,.5,1]],
  [x=>x*Math.log(x)-x,Math.log,[.5,1,2]],
  [x=>x*x*Math.log(x)/2-x*x/4,x=>x*Math.log(x),[.5,1,2]],
  [x=>Math.tan(2*x-1)/2,x=>1/Math.cos(2*x-1)**2,[.3,.5,.7]],
  [x=>.4*x**2.5+8*Math.sqrt(x),x=>(x*x+4)/Math.sqrt(x),[.5,1,2]],
  [x=>Math.sin(x*x)/2,x=>x*Math.cos(x*x),[-.5,.2,1]],
  [x=>x*Math.sin(2*x)/2+Math.cos(2*x)/4,x=>x*Math.cos(2*x),[-.5,.2,1]],
  [x=>5*Math.log(Math.abs(x+1))-5*Math.log(Math.abs(x+2)),x=>5/((x+1)*(x+2)),[-.5,.2,1]],
]) for (const x of inputs) close(derivative(F,x),f(x));
close((2**4-1)/4,15/4);
close(Math.log(2)-Math.log(1),Math.log(2));
close((5/3)*(Math.log(3)-Math.log(3)-Math.log(1)+Math.log(2)),(5/3)*Math.log(2));

// New diagram/practice values and the general implicit tangent/normal.
let iterate = .7;
for (const expected of [.6711,.6895,.6778]) {
  iterate = 1/(1+iterate*iterate);
  assert.equal(iterate.toFixed(4),expected.toFixed(4));
}
for (const a of [-2,-1,0,1,2]) {
  const b=(-a+Math.sqrt(28-3*a*a))/2;
  close(a*a+a*b+b*b,7);
  const normal=[2*a+b,a+2*b], tangent=[a+2*b,-(2*a+b)];
  close(normal[0]*tangent[0]+normal[1]*tangent[1],0);
  assert(normal.some(v=>v!==0));
}
for (let n=-20;n<=20;n++) {
  assert.equal(Math.abs((2*n+1)**2%2),1);
  assert(n*n>=n);
  if(n%3!==0) assert.equal(n*n%3,1);
}
assert(.5**2<.5 && (-2)*(-3)>0);

const course=['functions','modulus-and-transformations','algebraic-fractions-and-division','partial-fractions','binomial-series','trigonometric-functions-and-formulae','exponential-and-logarithmic-functions','differentiation','parametric-equations','integration','integration-applications','differential-equations','numerical-methods','vectors','mathematical-proof'];
let examples=0, questions=0;
for (const lesson of ['index',...course,'quick-reference']) {
  const source=fs.readFileSync(path.join(root,'alevel/a2-mathematics',lesson+'.md'),'utf8');
  const html=fs.readFileSync(path.join(root,'_site/alevel/a2-mathematics',lesson==='index'?'':lesson,'index.html'),'utf8');
  assert(!/[\u3400-\u9fff]/u.test(source),lesson+': English content required');
  assert(!/\+\s*K\b/.test(source),lesson+': use +C for integration constants');
  assert.equal((html.match(/<h1\b/g)||[]).length,1,lesson+': duplicate page title');
  const decoded=html.replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>');
  assert.equal((decoded.match(/\\(?:lbrace|rbrace)/g)||[]).length,(source.match(/\\(?:lbrace|rbrace)/g)||[]).length,lesson+': missing set braces');
  for (const [formula] of source.matchAll(/\\begin\{(?:cases|pmatrix)\}[\s\S]*?\\end\{(?:cases|pmatrix)\}/g))
    assert(decoded.includes(formula.replace(/\\\\\\\\/g,'\\\\')),lesson+': damaged TeX row separator');
  for (const [,img] of source.matchAll(/!\[[^\]]*\]\((\/[^)]+)\)/g))
    assert(fs.existsSync(path.join(root,img)),lesson+': missing diagram '+img);
  if (course.includes(lesson)) {
    assert(source.includes('self-written'),lesson+': identify exercise source');
    const next=course[course.indexOf(lesson)+1], prev=course[course.indexOf(lesson)-1];
    const learningPath=source.split('**Learning path:**')[1]||'';
    if(next) assert(learningPath.includes('/'+next+'/'),lesson+': next lesson missing');
    if(prev) assert(learningPath.includes('/'+prev+'/'),lesson+': previous lesson missing');
    examples+=(source.match(/^### (?:Worked example|Example) \d/gmi)||[]).length;
    questions+=(source.match(/^### (?:Question |Q)\d/gm)||[]).length;
  }
}
// Published P2 bookmarks must still lead to their matching lesson on the index.
const legacyTopics={
  'p21-algebra-and-functions':'functions',
  'p22-sequences-and-series':'binomial-series',
  'p23-coordinate-geometry':'parametric-equations',
  'p24-trigonometry':'trigonometric-functions-and-formulae',
  'p25-exponentials-and-logarithms':'exponential-and-logarithmic-functions',
  'p26-differentiation':'differentiation',
  'p27-integration':'integration',
  'p28-differential-equations':'differential-equations',
  'p29-numerical-methods':'numerical-methods',
  'p210-vectors':'vectors'
};
const indexHtml=fs.readFileSync(path.join(root,'_site/alevel/a2-mathematics/index.html'),'utf8');
const indexIds=Array.from(indexHtml.matchAll(/\bid="([^"]+)"/g),m=>m[1]);
const indexItems=indexHtml.match(/<li\b[^>]*>[\s\S]*?<\/li>/g)||[];
for(const [anchor,lesson] of Object.entries(legacyTopics)) {
  assert.equal(indexIds.filter(id=>id===anchor).length,1,`Missing or duplicate legacy bookmark: ${anchor}`);
  const item=indexItems.find(item=>item.includes(`id="${anchor}"`));
  assert(item?.includes(`href="/alevel/a2-mathematics/${lesson}/"`),`Legacy bookmark points to the wrong topic: ${anchor}`);
}
console.log('Pure consistency passed: early algebra, domains, modulus inequalities, 12 antiderivatives, proof cases, iteration values, general tangents, English, course navigation, TeX row separators and legacy topic bookmarks.');
console.log('Content inventory: '+course.length+' lessons, '+examples+' worked examples, '+questions+' numbered practice questions; index and quick reference also checked.');

// Re-align initial anchors only after MathJax and its fonts finish changing layout.
(async () => {
  const vm=require('node:vm');
  const config=indexHtml.match(/<script>\s*(window\.MathJax\s*=[\s\S]*?)<\/script>/)?.[1];
  assert(config,'Built Pure index must contain the rendered MathJax configuration');
  for (const [hash,expectedId,state='complete'] of [['#p29-numerical-methods','p29-numerical-methods'],['#p21-algebra-and-functions','p21-algebra-and-functions','loading'],['#a%20b','a b'],['#bad%escape','bad%escape'],['#missing',null],['',null]]) {
    let releaseFonts, releaseLoad;
    const calls=[], frames=[];
    const document={
      readyState:state,
      fonts:{ready:new Promise(resolve=>{releaseFonts=resolve;})},
      dispatchEvent(){},
      getElementById(id){ return expectedId && id===expectedId ? {scrollIntoView(options){calls.push(options);}} : null; }
    };
    const context={
      window:{location:{hash},addEventListener(name,callback,options){assert.equal(name,'load');assert(options.once);releaseLoad=callback;}},
      document,Event:class {},requestAnimationFrame:callback=>frames.push(callback)
    };
    vm.runInNewContext(config,context);
    context.MathJax=context.window.MathJax;
    Object.assign(context.MathJax.startup,{
      defaultReady(){},
      promise:Promise.resolve(),
      input:[{name:'TeX',preFilters:{add(){}}}]
    });
    context.MathJax.startup.ready();
    await new Promise(setImmediate);
    assert.equal(calls.length,0,'Do not jump before fonts are ready');
    releaseFonts();
    await new Promise(setImmediate);
    if(releaseLoad) {
      assert.equal(calls.length,0,'Wait for page load as well as fonts');
      releaseLoad();
      await new Promise(setImmediate);
    }
    assert.equal(calls.length,0,'Wait for layout frames before aligning');
    if(hash) {
      assert.equal(frames.length,1);
      frames.shift()();
      assert.equal(frames.length,1);
      frames.shift()();
      await new Promise(setImmediate);
    }
    assert.equal(calls.length,expectedId?1:0,'Initial anchor should be aligned once');
    if(expectedId) assert.equal(calls[0].behavior,'instant');
  }
  console.log('MathJax initial-anchor regression passed: page/font/frame timing, encoded IDs, malformed/missing hashes and pages without anchors.');
})().catch(error=>{console.error(error);process.exitCode=1;});
