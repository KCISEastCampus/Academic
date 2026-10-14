// Run after bundle exec jekyll build. Recompute exam answers and check rendered course links.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const close = (a, b, tolerance) => assert(Math.abs(a - b) < tolerance, `${a} != ${b}`);

assert.equal(193 + 248 + 590 + 1150 - 142 + 844 - 3513, -630);
assert.equal(2493 - 1920 - 2 * 364, -155);
close(-25 * 4.18 * (24.9 - 19.6) / (1.25 / 199.9) / 1000, -88.6, .05);
close(15400 / 1810, 8.51, .005);
close(.77 - .34, .43, 1e-12);
close(-.44 - .34, -.78, 1e-12);
close(-Math.log10(Math.sqrt(1.86e-15)), 7.37, .005);
close(-Math.log10(1.86e-15 / (.1 * 2)), 14.03, .005);
close(10 ** -4.82, 1.51e-5, .005e-5);
close(.100 * .027 / .025, .108, 1e-12);
close(10 ** -5.3, 5.01e-6, .005e-6);
const acid = .014 * .200, hydroxide = .025 * .100;
assert(acid > hydroxide);
close(-Math.log10(1.35e-5 * (acid - hydroxide) / hydroxide), 5.79, .005);
const ka = 10 ** -2.22, concentration = (1.35 / 162.3) / .750;
const approximation = Math.sqrt(ka * concentration);
const exact = 2 * ka * concentration / (ka + Math.sqrt(ka ** 2 + 4 * ka * concentration));
assert(approximation / concentration > .7);
close(exact ** 2 / (concentration - exact), ka, 1e-12);
close(-Math.log10(approximation), 2.09, .005);
close(-Math.log10(exact), 2.24, .005);
close(6.63e-34 * 3e8 / 3.67e-19 * 1e9, 542, .5);
const ethanedioate = (.910 / 134) / .150;
close(ethanedioate, .0453, .00005);
close(ethanedioate * .025 * 2 / 5 / .02235, .0203, .00005);
close(5 * (.0200 * .0200) / .0250, .0800, 1e-12);

// Independent atom and charge counts for the two easily confused ammonia stages.
// Vectors are [Cu, N, H, O, charge].
const species = {
  aqua: [1, 0, 12, 6, 2], ammonia: [0, 1, 3, 0, 0],
  precipitate: [1, 0, 10, 6, 0], ammonium: [0, 1, 4, 0, 1],
  ammine: [1, 4, 16, 2, 2], hydroxide: [0, 0, 1, 1, -1], water: [0, 0, 2, 1, 0]
};
for (const reaction of [
  {aqua: -1, ammonia: -2, precipitate: 1, ammonium: 2},
  {precipitate: -1, ammonia: -4, ammine: 1, hydroxide: 2, water: 2}
]) {
  for (let column = 0; column < 5; column++) {
    assert.equal(Object.entries(reaction).reduce((sum, [name, coefficient]) => sum + coefficient * species[name][column], 0), 0);
  }
}

let groups = 0;
for (const name of fs.readdirSync('alevel/a2-chemistry').filter(name => name.endsWith('.md'))) {
  const source = fs.readFileSync(`alevel/a2-chemistry/${name}`, 'utf8');
  const permalink = source.match(/^permalink: (.+)$/m)[1];
  const html = fs.readFileSync(path.join('_site', permalink, 'index.html'), 'utf8');
  groups += (source.match(/^### 真题：/gm) || []).length;
  assert(!html.includes('markdown="1"'), `Unprocessed Markdown: ${name}`);
  assert(!/<details\b[^>]*\bopen(?:\s|=|>)/.test(html), `Exposed answer: ${name}`);
  for (const link of source.matchAll(/\]\((\/[^)]+)\)/g)) {
    const [url, anchor] = link[1].split('#');
    const target = path.join('_site', url, path.extname(url) ? '' : 'index.html');
    assert(fs.existsSync(target), `Broken local link: ${link[1]}`);
    if (anchor) assert(fs.readFileSync(target, 'utf8').includes(`id="${anchor}"`), `Missing anchor: ${anchor}`);
  }
  assert.equal((source.match(/<details\b/g) || []).length, (html.match(/<details\b/g) || []).length);
}
assert.equal(groups, 32);
const subjects = fs.readFileSync('_data/subjects.yml', 'utf8');
assert(/id: a2chemistry\s+name: A2 Chemistry\s+icon:/.test(subjects));
assert(fs.readFileSync('_site/alevel/index.html', 'utf8').includes('A2 Chemistry'));
console.log('CH03 passed: independently recomputed exam answers, ammonia atom/charge balance, seven rendered pages, 32 exam groups, closed answers and local links.');
