// Run with --source-only before the shared build, or without it afterwards.
const assert=require('node:assert/strict'),fs=require('node:fs');
const {exp,log,sin,cos,tan,asin,acos,atan,sqrt}=Math;
const close=(a,b,tol=1e-6)=>assert(Math.abs(a-b)<tol,`${a} != ${b}`);
const pairs=[
 [x=>2*exp(x)+log(x)-3*cos(x),x=>2*exp(x)+1/x+3*sin(x),[.5,1,2]],
 [tan,x=>1/cos(x)**2,[-.7,.2,.8]],
 [x=>1/cos(x),x=>sin(x)/cos(x)**2,[-.7,.2,.8]],
 [x=>1/sin(x),x=>-cos(x)/sin(x)**2,[.4,.9,1.7]],
 [x=>cos(x)/sin(x),x=>-1/sin(x)**2,[.4,.9,1.7]],
 [x=>x*x*exp(3*x),x=>x*exp(3*x)*(2+3*x),[-.5,.2,.8]],
 [x=>log(x)/x,x=>(1-log(x))/x**2,[.5,1,2]],
 [x=>log(1+x*x),x=>2*x/(1+x*x),[-1,.3,2]],
 [x=>cos(2*x)**3,x=>-6*cos(2*x)**2*sin(2*x),[-.7,.2,.8]],
 [x=>x*exp(-x),x=>exp(-x)*(1-x),[-.7,.2,1,2]],
 [x=>exp(-x)*(1-x),x=>exp(-x)*(x-2),[-.7,.2,1,2]],
 [asin,x=>1/sqrt(1-x*x),[-.6,0,.6]],
 [acos,x=>-1/sqrt(1-x*x),[-.6,0,.6]],
 [atan,x=>1/(1+x*x),[-2,0,2]],
 [x=>3*exp(x)-2*log(x)+4*sin(x),x=>3*exp(x)-2/x+4*cos(x),[.5,1,2]],
 [x=>1/cos(3*x),x=>3*sin(3*x)/cos(3*x)**2,[-.2,.1,.3]],
 [x=>cos(2*x)/sin(2*x),x=>-2/sin(2*x)**2,[.3,.6,1]],
 [x=>x*log(x),x=>log(x)+1,[.5,1,2]],
 [x=>exp(x)/(x+1),x=>x*exp(x)/(x+1)**2,[-.5,.2,1]],
 [x=>exp(sin(x)),x=>exp(sin(x))*cos(x),[-1,.3,2]],
 [x=>log(4-x*x),x=>-2*x/(4-x*x),[-1,.3,1.5]],
 [x=>sin(3*x)**2,x=>3*sin(6*x),[-1,.3,2]],
 [x=>log(x)-x,x=>1/x-1,[.5,1,2]],
 [x=>atan(2*x),x=>2/(1+4*x*x),[-2,0,2]],
 [x=>asin(3*x),x=>3/sqrt(1-9*x*x),[-.2,0,.2]],
 // Mixed selection, retries and delayed review.
 [x=>exp(x*x)/x,x=>exp(x*x)*(2*x*x-1)/(x*x),[-1,-.3,.7,1.2]],
 [x=>x*x*sin(1/x),x=>2*x*sin(1/x)-cos(1/x),[-1,-.3,.7,2]],
 [x=>log(x)/x**2,x=>(1-2*log(x))/x**3,[.4,1,2]],
 [x=>acos(2*x-1),x=>-1/sqrt(x*(1-x)),[.1,.4,.8]],
 [x=>x*x*exp(-x),x=>x*exp(-x)*(2-x),[-1,0,1,2,3]],
 [x=>log(sin(x)),x=>cos(x)/sin(x),[.2,1,2.8]],
 [x=>asin(x/2),x=>1/sqrt(4-x*x),[-1.5,0,1.5]],
];
for(const [f,df,points] of pairs)for(const x of points){const h=1e-6;close((f(x+h)-f(x-h))/(2*h),df(x));}
assert.equal((2*exp(1)+1+3*sin(1)).toFixed(4),'8.9610');
close(1/(3*1**2+1),.25);close(1/(2*1+2),.25);
// Reciprocal derivatives also satisfy the differentiated original relation.
for(const y of [-.5,0,1,2])close((3*y*y+1)*(1/(3*y*y+1)),1);
for(const [x,y,c,m] of [[1,2,7,-4/5],[1,1,3,-1]]){
 close(x*x+x*y+y*y,c);
 close(2*x+y+(x+2*y)*m,0);
 close(m*(-1/m),-1);
}
close(exp(-1)*(1-1),0);assert(exp(-1)*(1-2)<0);
assert(exp(-.5)*(1-.5)>0&&exp(-1.5)*(1-1.5)<0);
close(log(1)-1,-1);assert(1/.5-1>0&&1/2-1<0);
close(1*log(1),0);close(1-1,0);close(1**2+2*1,3);
close(asin(0),0);assert(!Number.isFinite(1/sqrt(1-1)));

// This parametrisation supplies independent tangent vectors on the implicit ellipse.
for (const t of [0, .4, 1.2, Math.PI/2, 2.4]) {
  const a=sqrt(6)*cos(t)-sqrt(3)*sin(t), b=sqrt(3)*sin(t);
  const dx=-sqrt(6)*sin(t)-sqrt(3)*cos(t), dy=sqrt(3)*cos(t);
  close(a*a+2*a*b+3*b*b,6);
  const A=a+b, B=a+3*b;
  close(A*dx+B*dy,0);
  assert(A*A+B*B>0);
  if (Math.abs(dx)>1e-8) close(dy/dx,-A/B);
}
const b=1,a=-3;close(a*a+2*a*b+3*b*b,6);close(a+3*b,0);assert(a+b!==0);
for (const x of [-.1,.1]) assert(3*x*x>0); // cubic stationary point has no extremum
for (const [x, sign] of [[-1,-1],[1,1],[3,-1]]) assert.equal(Math.sign(x*exp(-x)*(2-x)),sign);
close(2**2*exp(-2),4*exp(-2));
assert(!Number.isFinite(-1/sqrt(0*(1-0))));
assert(Number.isNaN(log(sin(-.5))));
for (const y of [-.5,0,.5]) {
 const h=1e-6, x=z=>sqrt(9-z*z);
 close((x(y+h)-x(y-h))/(2*h),-y/sqrt(9-y*y));
}
assert(6*(-.1)<0 && 6*.1>0);
const slug='differentiation';

// --source-only validates sources without relying on an older _site.
const sourceOnly = process.argv.includes('--source-only');
const lessonRoot = require('node:path').join(__dirname, '..');
const readLesson = prefix => fs.readFileSync(require('node:path').join(lessonRoot, prefix, 'alevel/a2-mathematics', `${slug}.md`), 'utf8');
const sources = [readLesson(''), readLesson('zh')];
const blocks = (text, kind) => [...text.matchAll(new RegExp(`<section class="${kind}" markdown="1">([\\s\\S]*?)<\\/section>`, 'g'))].map(m => m[1]);
const anchors = text => [...text.matchAll(/\{#([^}]+)\}/g)].map(m => m[1]);
const prompt = block => block.split('<details')[0].replace(/^###.*$/gm, '').replace(/<!--[\s\S]*?-->/g, '').replace(/\s+/g, ' ').trim();
assert(!/[\u3400-\u9fff]/u.test(sources[0]), 'English source contains Chinese text');
assert.deepEqual(anchors(sources[0]), anchors(sources[1]), 'Bilingual anchors differ');
const formulae = source => source.match(/\$\$[\s\S]*?\$\$|(?<!\$)\$[^$\n]+\$(?!\$)/g) || [];
const smartPrime = text => [...formulae(text), ...(text.match(/\\\[[\s\S]*?\\\]|\\\([\s\S]*?\\\)/g) || [])].some(tex => /y[\u2018\u2019\u201c\u201d]/u.test(tex));
assert(!smartPrime('A quantity\u2019s rate. $y^{\\prime}=2x$'));
assert(smartPrime('$y\u2019=2x$'));
assert(smartPrime('\\[y\u2019=2x\\]'));
assert(smartPrime('\\(y\u2019=2x\\)'));
assert(!smartPrime('A quantity\u2019s rate. \\[y^{\\prime}=2x\\]'));
assert.deepEqual(formulae(sources[0]), formulae(sources[1]), 'Bilingual formula sequence differs');
const checks = sources.map(text => blocks(text, 'lesson-check'));
assert(checks[0].length > 0);
assert.equal(checks[0].length, checks[1].length);
assert.deepEqual(checks[0].map(prompt), checks[1].map(prompt), 'Independent English stems or conditions differ');
for (const [i, source] of sources.entries()) {
  assert(source.includes('reading_layout: true'));
  assert(!/[\x00-\x08\x0b\x0c\x0e-\x1f\ufffd]/u.test(source), 'Control/replacement character in source');
  assert.equal(new Set(anchors(source)).size, anchors(source).length, 'Duplicate anchor');
  assert.equal((source.match(/<section\b/g) || []).length, (source.match(/<\/section>/g) || []).length);
  assert.equal((source.match(/<section\b/g) || []).length, blocks(source, 'lesson-check').length + blocks(source, 'worked-example').length);
  assert.equal((source.match(/<details\b/g) || []).length, checks[i].length * 2, 'Details outside individual tasks');
  for (const block of checks[i]) {
    assert.equal((block.match(/<details\b/g) || []).length, 2, 'Task needs separate hint and solution');
    assert.equal((block.match(/<\/details>/g) || []).length, 2);
    assert(!/<details\b[^>]*\bopen\b/.test(block));
    let depth = 0;
    for (const match of block.matchAll(/<\/?details\b/g)) {
      depth += match[0].startsWith('</') ? -1 : 1;
      assert(depth >= 0 && depth <= 1, 'Nested or unbalanced disclosure');
    }
    assert.equal(depth, 0);
    assert.equal((block.match(/^### /gm) || []).length, 1, 'Each task has its own boundary');
  }
  for (const id of ['repair-and-retry', 'later-review']) assert(anchors(source).includes(id));
  if (!sourceOnly) {
    const prefix = i === 0 ? '' : 'zh';
    const html = fs.readFileSync(require('node:path').join(lessonRoot, '_site', prefix, 'alevel/a2-mathematics', slug, 'index.html'), 'utf8');
    assert.equal((html.match(/<details\b/g) || []).length, checks[i].length * 2);
    assert.equal((html.match(/<table\b/g) || []).length, (source.match(/^\|[ :|\-]+\|\r?$/gm) || []).length);
    for (const kind of ['lesson-check', 'worked-example']) assert.equal((html.match(new RegExp(`class="[^"\\n]*\\b${kind}\\b`, 'g')) || []).length, blocks(source, kind).length);
    for (const id of anchors(source)) assert(html.includes(`id="${id}"`), `Missing rendered anchor ${id}`);
    assert(!/<details\b[^>]*\bopen\b/.test(html));
    assert(!html.includes('<p>$$'));
    assert(!smartPrime(html), 'Smart punctuation changed a derivative prime');
  }
}
console.log(`${slug}: mathematics and bilingual source checks passed (${checks[0].length} tasks each); ${sourceOnly ? 'generated HTML not checked' : 'generated HTML checked'}.`);
