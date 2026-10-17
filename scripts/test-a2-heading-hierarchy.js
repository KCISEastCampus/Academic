// Run after bundle exec jekyll build. Check the published outline, not just heading counts.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = path.join(__dirname, '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8').replace(/\r\n/g, '\n');
const subjects = ['mathematics', 'further-mathematics', 'physics', 'chemistry'];
const trees = new Map();
for (const subject of subjects) {
  const directory = `alevel/a2-${subject}`;
  for (const name of fs.readdirSync(path.join(root, directory)).filter(name => name.endsWith('.md'))) {
    // The upgraded mathematics course is Pure; Statistics and Mechanics have separate scopes.
    if (subject === 'mathematics' && ['mechanics.md', 'statistics.md'].includes(name)) continue;
    for (const prefix of ['', 'zh/']) {
      const file = prefix + directory + '/' + name;
      const source = read(file), url = source.match(/^permalink: (.+)$/m)?.[1];
      assert(url, file + ': permalink');
      assert(source.includes('toc_headings: h2, h3, h4\n'), file + ': nested TOC');
      const html = read('_site' + url + 'index.html');
      const body = html.split('id="content-container"')[1]?.split('<div id="toc"')[0];
      assert(body, file + ': content');
      const tree = [...body.matchAll(/<h([1-6])\b[^>]*id="([^"]+)"/g)].map(([, level, id]) => [Number(level), id]);
      const sourceHeadings = [...source.matchAll(/^(#{1,6}) ([^\n]+)$/gm)];
      assert.deepEqual(tree.map(([level]) => level), sourceHeadings.map(([, marks]) => marks.length), file + ': source/HTML levels');
      sourceHeadings.forEach(([, , label], i) => {
        const id = label.match(/\{#([^}]+)\}$/)?.[1];
        if (id) assert.equal(tree[i][1], id, file + ': explicit heading ID');
        if (i) assert(tree[i][0] <= tree[i - 1][0] + 1, file + ': skipped heading level');
      });
      const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(([, id]) => id);
      assert.equal(new Set(ids).size, ids.length, file + ': duplicate IDs');
      for (const [, hash] of body.matchAll(/href="#([^"\s]+)"/g)) {
        assert(ids.includes(decodeURIComponent(hash)), file + ': broken fragment #' + hash);
      }
      trees.set(file, tree);
    }
    assert.deepEqual(trees.get('zh/' + directory + '/' + name), trees.get(directory + '/' + name), directory + '/' + name + ': bilingual outline');
  }
}
const expectedParents = {
  'mathematics/integration': {
    'example-3--rewrite-everything-in-the-new-variable': 'substitution',
    'example-4--a-product-that-becomes-simpler': 'integration-by-parts',
    'integrating-a-logarithm': 'integration-by-parts'
  },
  'mathematics/algebraic-fractions-and-division': {'the-same-example-by-long-division': 'example-5--remainder-theorem-and-comparison-of-coefficients'},
  'further-mathematics/de-moivres-theorem': {
    'example-7--triple-angle-formulae': 'multiple-angles-in-terms-of-powers',
    'example-8--express-a-fifth-power-using-multiple-angles': 'powers-in-terms-of-multiple-angles',
    'example-9--integrate-a-trigonometric-power': 'integrate-multiple-angle-terms',
    'example-10--use-exponential-form-in-an-integral': 'integrate-complex-exponentials'
  },
  'further-mathematics/series-and-limits': {
    'example-3--two-logarithms-and-a-shared-range': 'combine-logarithmic-series',
    'example-4--multiply-two-series': 'multiply-series',
    'example-5--a-function-inside-an-exponential': 'compose-series'
  },
  'further-mathematics/polar-coordinates': {'example-9--the-bounding-curve-changes': 'common-regions'},
  'physics/simple-harmonic-motion': {
    'example-4-a-vertical-spring': 'a-vertical-spring-find-equilibrium-first',
    'example-5-period-and-speed-of-a-pendulum': 'derive-the-period-of-a-simple-pendulum'
  },
  'physics/capacitor-charge-and-discharge': {'example-4-charge-lost-and-charge-remaining': 'areas', 'example-6-a-fitted-line-and-uncertainty': 'log-linear-analysis'},
  'physics/thermal-physics': {'pressure-and-momentum': 'kinetic-theory', 'molecular-energy': 'kinetic-theory', 'example-molecular-speed': 'molecular-energy'},
  'physics/quick-reference': {'example-coulomb-force': '32-coulombs-law', 'example-rc-discharge': '41-capacitor-charging-and-discharging', 'example-induced-emf': '57-faradays-law-of-electromagnetic-induction'},
  'chemistry/period-3': {'example-1': 'structure-and-phase-changes', q1: 'reaction-equations', 'example-2': 'oxide-acid-base-character', q2: 'oxide-acid-base-character', q3: 'oxide-acid-base-character', 'example-3': 'oxoacid-structures'},
  'chemistry/thermodynamics': {'absolute-entropy': 'entropy-calculations', 'example-4': 'gibbs-temperature', q6: 'gibbs-temperature'}
};
for (const [lesson, expected] of Object.entries(expectedParents)) {
  for (const prefix of ['', 'zh/']) {
    const file = `${prefix}alevel/a2-${lesson}.md`, parents = {}, stack = [];
    for (const [level, id] of trees.get(file)) {
      while (stack.length && stack.at(-1)[0] >= level) stack.pop();
      parents[id] = stack.at(-1)?.[1];
      stack.push([level, id]);
    }
    for (const [child, parent] of Object.entries(expected)) assert.equal(parents[child], parent, file + ': ownership of ' + child);
  }
}
console.log(`A2 heading hierarchy passed: ${trees.size} pages, bilingual outlines, source/HTML levels, unique IDs, local fragments and 11 repaired lesson pairs.`);
