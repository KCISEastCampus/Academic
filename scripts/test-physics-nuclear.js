// Run after Jekyll build: independently check the published nuclear models, data and diagrams.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const read = file => fs.readFileSync(file, 'utf8');
const close = (actual, expected, tolerance = 1e-8) => assert(Math.abs(actual - expected) <= tolerance * Math.max(Math.abs(actual), Math.abs(expected), 1e-300), actual + ' != ' + expected);
const rounded = (value, expected, digits = 2) => assert.equal(value.toPrecision(digits), expected);
const radius = read('alevel/a2-physics/nuclear-radius.md');
const binding = read('alevel/a2-physics/mass-and-binding-energy.md');
const k = 8.99e9, e = 1.60e-19, c = 3e8, mu = 1.66e-27;
const coulomb = z => k * 2 * z * e ** 2;
rounded(coulomb(79) / (5 * 1.6e-13) / 1e-15, '45');
const remainingK = 2.1e-12 - coulomb(82) / 4.5e-14;
rounded(remainingK, '1.3e-12'); assert(remainingK > 0);
rounded(coulomb(82) / 2.1e-12 / 1e-15, '18');
rounded(1.68 * Math.cbrt(197 / 4), '6.16', 3);
close(64 * 1.5 ** 3, 216);
const wavelength = 6.63e-34 / 3e-19, theta = 20 * Math.PI / 180;
rounded(wavelength / 1e-15, '2.21', 3);
rounded(.61 * wavelength / Math.sin(theta) / 1e-15, '3.9');
rounded(Math.asin(Math.sin(theta) / 2) * 180 / Math.PI, '9.8');

// Fit the actual source records; compare free and forced intercepts after a fixed offset.
const data = radius.split('{#data-radius-records}')[1].split('<details')[0];
const rows = [...data.matchAll(/^\| (\d+) \| ([\d.]+) \|$/gm)].map(m => [Math.cbrt(Number(m[1])), Number(m[2])]);
assert.equal(rows.length, 5);
const fit = records => {
  const xbar = records.reduce((s, [x]) => s + x, 0) / records.length;
  const ybar = records.reduce((s, [, y]) => s + y, 0) / records.length;
  const slope = records.reduce((s, [x, y]) => s + (x - xbar) * (y - ybar), 0) / records.reduce((s, [x]) => s + (x - xbar) ** 2, 0);
  return [slope, ybar - slope * xbar];
};
const [slope, intercept] = fit(rows);
close(slope, 1.2); close(intercept, .006);
assert(rows.every(([x, y]) => Math.abs(y - slope * x - intercept) < .05));
const shifted = rows.map(([x, y]) => [x, y + .20]);
close(fit(shifted)[0], slope); close(fit(shifted)[1], intercept + .20);
const forcedSlope = records => records.reduce((s, [x, y]) => s + x * y, 0) / records.reduce((s, [x]) => s + x ** 2, 0);
assert(forcedSlope(shifted) > forcedSlope(rows));
const density = r0 => 3 * mu / (4 * Math.PI * r0 ** 3);
rounded(density(slope * 1e-15), '2.3e+17');
assert(density(forcedSlope(shifted) * 1e-15) < density(slope * 1e-15));
close(1.2 * Math.cbrt(216), 7.2);
close(216 * mu / (4 * Math.PI / 3 * (7.2e-15) ** 3), density(1.2e-15));

// Check mass accounts in both directions, with electron counts balanced for atomic masses.
rounded(1.661e-27 * c ** 2 / 1.6e-13, '9.3e+2');
const heDefect = 2 * 1.00728 + 2 * 1.00867 - 4.00150;
close(heDefect, .03040); rounded(heDefect * 931.5, '28.3', 3);
rounded(heDefect * 931.5 / 4, '7.08', 3);
const carbonDefect = 6 * 1.007825 + 6 * 1.008665 - 12;
close(carbonDefect, .098940); rounded(carbonDefect * 931.5, '92.2', 3);
rounded(carbonDefect * 931.5 / 12, '7.68', 3);
const oxygenMass = 8 * (1.00728 + 1.00867) - 127.6 / 931.5;
rounded(oxygenMass, '15.99062', 7);
close((8 * (1.00728 + 1.00867) - oxygenMass) * 931.5, 127.6);
assert.equal(2 * 2, 2 + 2 * 1, 'He-3 fusion has equal atomic electron counts');
assert.equal(2 * 3, 4 + 2 * 1, 'He-3 fusion conserves nucleon number');
const fusionDefect = 2 * 3.016029 - 4.002603 - 2 * 1.007823;
close(fusionDefect, .013809); rounded(fusionDefect * 931.5, '12.9', 3);
rounded(-2 * 1.6e-13 / c ** 2, '-3.6e-30');

const bindingData = binding.split('{#data-binding-records}')[1].split('<details')[0];
const energies = [...bindingData.matchAll(/^\| (?:Deuterium nucleus|Proton|Helium-3 nucleus) \| ([\d.]+) \|$/gm)].map(m => Number(m[1]));
assert.equal(energies.length, 3);
const eventEnergy = energies[2] - energies[0] - energies[1];
close(eventEnergy, .87896); close(2 * eventEnergy * 1e-12, 1.75792e-12);
rounded(3 * eventEnergy, '2.64', 3);

// Read the marked SVG coordinates, rather than reusing the solution's graph heights.
const graph = read('assets/img/physics-nuclear-binding-curve.svg');
const points = [...graph.matchAll(/<circle id="binding-point-(\d+)" cx="([\d.]+)" cy="([\d.]+)"/g)].map(m => {
  const a = (Number(m[2]) - 80) / 1.84, b = (300 - Number(m[3])) / 30;
  close(a, Number(m[1]));
  return [a, b];
});
assert.equal(points.length, 2);
close(2 * points[0][0] * points[0][1] - points[1][0] * points[1][1], 140);

// Guard escaped TeX as well as bilingual equality: matching corrupt formulas is not enough.
const commands = new Set('approx circ frac infty lambda left mathrm min pi propto qquad rho right sin theta times varepsilon Delta delta gamma quad rightarrow sum text'.split(' '));
for (const [slug, source] of [['nuclear-radius', radius], ['mass-and-binding-energy', binding]]) {
  for (const formula of source.match(/\$\$[\s\S]*?\$\$|\$[^$\n]+\$/g)) {
    for (const [, command] of formula.matchAll(/\\([A-Za-z]+)/g)) assert(commands.has(command), slug + ': unexpected command ' + command);
    assert(!/(?<!\\)\b(?:left|right|mathrm|propto|qquad|approx)\b/.test(formula), slug + ': unescaped TeX');
    assert(!/[\x00-\x08\x0b\x0c\x0e-\x1f]/.test(formula));
  }
  for (const prefix of ['', 'zh/']) {
    const html = read('_site/' + prefix + 'alevel/a2-physics/' + slug + '/index.html');
    for (const formula of html.match(/\$[^$\n]+\$/g) || []) assert(!/<\/?(?:em|strong)>/.test(formula), slug + ': Markdown must not split a formula');
    if (slug === 'mass-and-binding-energy') {
      assert.equal((html.match(/\\\[[^\n]+\\rightarrow[^\n]+\\\]/g) || []).length, 2, 'both reaction equations must survive Markdown');
    }
    assert.equal((html.match(/<details\b/g) || []).length, 15);
    assert(!/<details\b[^>]*\bopen\b/.test(html));
    assert.equal((html.match(/<h3\b[^>]*id="question-/g) || []).length, 6);
    assert.equal((html.match(/<img[^>]*data-lazy-ignore="true"/g) || []).length, 2);
    for (const image of html.matchAll(/<img[^>]*src="(\/assets\/img\/physics-nuclear-[^"]+)"[^>]*alt="([^"]+)"/g)) assert(image[2].length > 40);
    const index = read('_site/' + prefix + 'alevel/a2-physics/index.html');
    assert(index.includes('href="/' + prefix + 'alevel/a2-physics/' + slug + '/"'));
    assert(index.includes('id="ph04-thermal-physics"'), 'preserve PH04 links');
    assert.equal((index.match(/<span id=/g) || []).length, 56, 'preserve legacy PH03 anchors');
  }
}
console.log('Physics nuclear passed: Coulomb bounds, diffraction, radius-record fit and bias, density, mass and electron accounts, reaction counts, SVG graph readout, escaped TeX and closed bilingual tasks.');
