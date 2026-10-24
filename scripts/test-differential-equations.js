// Run with --source-only before the shared build, or without it afterwards.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const { exp, sqrt, sin, cos, log } = Math;
const close = (actual, expected) => assert(Math.abs(actual-expected) < 1e-6, `${actual} != ${expected}`);
const growth = log(2)/3;
const decay = log(2)/6;
const practiceGrowth = log(1.2)/4;
const practiceDecay = log(4/3)/5;
const solutions = [
  [x => -3*exp(x*x), (x,y) => 2*x*y, [-0.5, 0, 0.5]],
  [x => sqrt(x*x+4), (x,y) => x/y, [-1, 0, 1]],
  [x => 2/(1+exp(2*x)), (x,y) => y*(y-2), [-1, 0, 1]],
  [t => sqrt(t+1), (t,h) => 0.5/h, [0, 1, 3]],
  [t => 400*exp(growth*t), (t,N) => growth*N, [0, 3, 6]],
  [t => 80*exp(-decay*t), (t,m) => -decay*m, [0, 6, 18]],
  [x => 3*exp(x**3)-2, (x,y) => 3*x*x*(y+2), [-0.5, 0, 0.5]],
  [x => -sqrt(6-2*cos(x)), (x,y) => sin(x)/y, [-1, 0, 1]],
  [t => (8*t+1)**0.25, (t,h) => 2/h**3, [0, 1, 10]],
  [t => 500*exp(practiceGrowth*t), (t,N) => practiceGrowth*N, [0, 4, 10]],
  [t => 60*exp(-practiceDecay*t), (t,m) => -practiceDecay*m, [0, 5, 10]],
  // Rate demonstration, interval retry, constant solution and model review.
  [t => 6/(2*t+1), (t,V) => -V*V/3, [0,.5,2]],
  [x => -sqrt(9-x*x), (x,y) => -x/y, [-2.8,0,2.8]],
  [x => 1, (x,y) => x*(y-1), [-2,0,2]],
  [t => 18/(t+1), (t,m) => -m*m/18, [0,1,2,3]],
  [t => 20+60*exp(-log(2)*t/2), (t,T) => -log(2)*(T-20)/2, [0,2,4,20]],
];
for (const [solution, rhs, points] of solutions) {
  for (const x of points) {
    const h = 1e-6;
    close((solution(x+h)-solution(x-h))/(2*h), rhs(x,solution(x)));
  }
}
close(solutions[1][0](0), 2);
close(solutions[2][0](0), 1);
close(solutions[3][0](0), 1);
close(solutions[3][0](3), 2);
close(solutions[4][0](0), 400);
close(solutions[4][0](3), 800);
close(solutions[4][0](3*log(3)/log(2)), 1200);
close(solutions[5][0](6), 40);
close(solutions[5][0](18), 10);
close(solutions[6][0](0), 1);
close(solutions[7][0](0), -2);
close(solutions[8][0](0), 1);
close(solutions[8][0](10), 3);
close(2/2**3, 0.25);
close(solutions[9][0](4), 600);
close(solutions[9][0](4*log(2)/log(1.2)), 1000);
close(solutions[10][0](5), 45);
close(solutions[10][0](5*log(2)/log(4/3)), 30);
close(60-solutions[10][0](10), 26.25);
// Solutions excluded by division still satisfy the original equations.
for (const x of [-1,0,1]) {
  close(2*x*0, 0);
  close(3*x*x*(-2+2), 0);
  for (const y of [0,2]) close(y*(y-2), 0);
}

const volume=t=>6/(2*t+1),mass=t=>18/(t+1),temperature=t=>20+60*exp(-log(2)*t/2);
close(volume(0),6);close(volume(.5),3);close(-(volume(.5)**2)/3,-3);
close(mass(0),18);close(mass(1),9);close(mass(3),4.5);close(-(mass(2)**2)/18,-2);
assert.notEqual(1-0,3-1); // successive halves take different durations
for (const t of [0,1,3,20]) {
  assert(volume(t)>0&&volume(t)<=6);assert(mass(t)>0&&mass(t)<=18);
  assert(temperature(t)>20&&temperature(t)<=80);
}
close(temperature(0),80);close(temperature(2),50);close(temperature(4),35);
assert(temperature(20)>10);
for (const x of [-3,3]) {close(9-x*x,0);assert(!Number.isFinite(-x/0));}
assert(Number.isNaN(sqrt(9-3.1**2)));
const slug='differential-equations';

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
