// Run with --source-only before the shared build, or without it afterwards.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const close = (a, b) => assert(Math.abs(a-b) < 1e-6, `${a} != ${b}`);
const derivative = (f, t) => (f(t+1e-5)-f(t-1e-5))/2e-5;
// Compare gradients with numerical parameter differences.
for (const [x, y, m] of [
  [t => t*t, t => t-2, t => 1/(2*t)],
  [t => t*t, t => 2*t, t => 1/t],
  [t => 3*Math.cos(t), t => 2*Math.sin(t), t => -2*Math.cos(t)/(3*Math.sin(t))],
  [t => t**3, t => (t+2)**2, t => 2*(t+2)/(3*t*t)],
  [t => t*t+1, t => t**3, t => 1.5*t],
  [t => t, t => t**3-3*t, t => 3*t*t-3],
  [t => t*t, t => 4*t, t => 2/t],
]) for (const t of [-2, -0.5, 0.7, 2]) close(derivative(y,t)/derivative(x,t), m(t));
assert(2*(-2.1+2)/(3*2.1**2)<0 && 2*(-1.9+2)/(3*1.9**2)>0);
// Elimination identities, restricted branches, and the general ellipse tangent.
for (const t of [-2, -0.5, 0, 0.5, 2]) {
  close(((2*t+1)-1)**2/4, t*t);
  close(((3*t-1)+1)**2*2/9, 2*t*t);
  close((t-2+2)**2, t*t);
  const x = t/(1-t), y = t*t/(1-t);
  close(y, x*x/(1+x));
  close(x/(1+x), t);
  close((3*Math.cos(t))**2/9+(2*Math.sin(t))**2/4, 1);
  close(3*Math.cos(t)*Math.cos(t)/3+2*Math.sin(t)*Math.sin(t)/2, 1);
}
close(1/(2*0.25), 2); close(0.25-2, -7/4);
for (const t of [1,-3]) close(2*t, 3-t*t);
for (const t of [1,-9]) close(4*t-4, -(t*t-1)/2);
close(3*(-1)**2-3,0); close(3*1**2-3,0);
assert(3*(-1.1)**2-3>0 && 3*(-0.9)**2-3<0);
assert(3*0.9**2-3<0 && 3*1.1**2-3>0);

// New trace and exact two-way parametrisation.
for (const [t,x,y] of [[-1,4,0],[0,1,1],[1,0,2],[2,1,3]]) {
  close((t-1)**2,x);close(t+1,y);close(x,(y-2)**2);assert(y>=0&&y<=3);
}
for (const u of [0,.3,1,2]) {
  const x=u*u,y=2*u;close(y*y,4*x);close(y/2,u);assert(y>=0&&y<=4);
}
// Tangent and normal equations accept the same point; their directions are perpendicular.
for (const a of [0,.4,Math.PI/2,2.3,Math.PI]) {
  const x=2*Math.cos(a),y=3*Math.sin(a);
  const dx=-2*Math.sin(a),dy=3*Math.cos(a);
  close(3*x*Math.cos(a)+2*y*Math.sin(a),6);
  close(3*Math.cos(a)*dx+2*Math.sin(a)*dy,0);
  const nx=3*Math.cos(a),ny=2*Math.sin(a);
  close(dx*nx+dy*ny,0);
  close(2*Math.sin(a)*nx-3*Math.cos(a)*ny,0);
  assert(dx*dx+dy*dy>0);
}
for (const [s,x,y] of [[Math.PI/2,0,3],[Math.PI,-4,0],[3*Math.PI/2,0,-3]]) {
  close(4*Math.cos(s),x);close(3*Math.sin(s),y);close(x*x/16+y*y/9,1);assert(x<=0);
}
// Reversed parameter: classify by increasing x, not increasing t.
for (const [x,left,right] of [[-1,-1,1],[1,1,-1]]) {
  close(3-3*x*x,0);assert.equal(Math.sign(3-3*(x-.1)**2),left);assert.equal(Math.sign(3-3*(x+.1)**2),right);
}
for (const t of [-.1,0,.1]) close(2*t**3,2*(t**3)); // zero parameter derivatives still give y=2x
// Both parameter rates can vanish at a horizontal tangent: x=t^3, y=t^6 gives y=x^2.
for (const t of [-1,-.1,0,.1,1]) {
  const x=t**3, y=t**6, dx=3*t*t, dy=6*t**5;
  close(y,x*x);
  if (t===0) {close(dx,0);close(dy,0);assert(Number.isNaN(dy/dx));}
  else close(dy/dx,2*x);
}
for (const [t,x,y] of [[-2,4,-2],[-1,1,2],[0,0,0],[1,1,-2],[2,4,2]]) {
  close(t*t,x);close(t**3-3*t,y);close(y*y,x*(x-3)**2);
  if (t===0) {close(2*t,0);assert(3*t*t-3!==0);}
  if (Math.abs(t)===1) {close(3*t*t-3,0);assert(2*t!==0);}
}
for (const t of [-Math.sqrt(3),Math.sqrt(3)]) {close(t*t,3);close(t**3-3*t,0);}
const slug='parametric-equations';

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
