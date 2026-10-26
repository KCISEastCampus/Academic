// Run after Jekyll build. Protect the accepted Poisson sample and its expanded S2.1 lesson.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = path.join(__dirname, '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const lesson = 'alevel/a2-mathematics/statistics/poisson-distribution';
const en = read(`${lesson}.md`), zh = read(`zh/${lesson}.md`);
const prompts = s => s.match(/^\*\*Question:\*\* .+$/gm);
assert.deepEqual(prompts(zh), prompts(en), 'English prompts and conditions agree');
const tex = s => [...s.matchAll(/\$\$([\s\S]*?)\$\$|(?<!\$)\$([^$\n]+)\$(?!\$)/g)].map(m => m[1] ?? m[2]);
const formulas = s => [...new Set(tex(s).filter(t => !/^[a-zA-Z]$/.test(t)))].sort();
assert.deepEqual(formulas(zh), formulas(en), 'mathematical expressions agree, allowing repeated explanatory symbols');
const anchors = s => [...s.matchAll(/\{#([^}]+)\}/g)].map(m => m[1]);
assert.deepEqual(anchors(zh), anchors(en), 'paired learning anchors');
assert.equal(new Set(anchors(en)).size, anchors(en).length, 'no duplicate explicit IDs');
for (const prefix of ['', 'zh/']) {
  const html = read(`_site/${prefix}${lesson}/index.html`);
  assert(!/<details\b[^>]*\bopen(?:[\s=>])/.test(html), 'answers start closed');
  const tasks = [...html.matchAll(/<section class="lesson-check"[^>]*>([\s\S]*?)<\/section>/g)];
  assert(tasks.length >= 8, 'independent, targeted retries and delayed task exist');
  for (const [, task] of tasks) {
    assert(!task.includes('class="lesson-check"'), 'each question has its own boundary');
    assert.equal((task.match(/<details\b/g) || []).length, 2, 'hint and solution separately available');
  }
  for (const id of anchors(en)) assert(html.includes(`id="${id}"`), `rendered anchor ${id}`);
  for (const match of html.matchAll(/href="([^"?#]+)(?:\?[^"#]*)?(?:#([^"]+))?"/g)) {
    const [href, url, hash] = match;
    if (!url.startsWith('/') || url.startsWith('//')) continue;
    const target = path.join(root, '_site', decodeURIComponent(url), url.endsWith('/') ? 'index.html' : '');
    assert(fs.existsSync(target), `local destination: ${href}`);
    if (hash && target.endsWith('.html')) assert(read(path.relative(root, target)).includes(`id="${decodeURIComponent(hash)}"`), `destination fragment: ${href}`);
  }
}
// Independent numerical checks use the recurrence p(k+1)=p(k)*lambda/(k+1).
const mass = (lambda, k) => {
  let p = Math.exp(-lambda);
  for (let n = 1; n <= k; n++) p *= lambda / n;
  return p;
};
const cdf = (lambda, k) => Array.from({length: k + 1}, (_, i) => mass(lambda, i)).reduce((a, b) => a + b, 0);
const near = (a, b) => assert(Math.abs(a - b) < 1e-12, `${a} != ${b}`);
near(mass(6, 5), 0.16062314104798003);
near(1 - cdf(3, 1), 0.8008517265285442);
near(mass(2, 0), 0.1353352832366127);
near(1 - cdf(2, 2), 0.3233235838169365);
near(cdf(10, 4), 0.029252688076961072); // January 2025 Q4(b)(i)
near(cdf(5, 12) - cdf(5, 7), 0.13135282244257027); // Q4(b)(ii)
near(cdf(3, 1), 0.19914827347145578);
near(1 - cdf(1, 1), 0.26424111765711533);
near(1 - 0.8 ** 5, 0.67232);
near(Math.sqrt(2.25), 1.5);
// Guard against changing a strict boundary into a different event.
assert(cdf(10, 5) > cdf(10, 4));
assert(1 - cdf(2, 1) > 1 - cdf(2, 2));
for (const lambda of [0.5, 2, 3, 6, 10]) {
  let total = 0, mean = 0, second = 0;
  for (let k = 0; k < 150; k++) {
    const p = mass(lambda, k); total += p; mean += k * p; second += k * k * p;
  }
  near(total, 1); near(mean, lambda); near(second - mean * mean, lambda);
}
console.log('MA04 Poisson: bilingual prompts/math, task boundaries, closed help, local destinations and independent probability/moment checks passed.');
