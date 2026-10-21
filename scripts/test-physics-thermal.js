// Independently recalculate teaching results from energy, particle and unit balances.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const near = (actual, expected, tol = 1e-10) => assert(Math.abs(actual - expected) <= tol * Math.max(1e-300, Math.abs(expected)), `${actual} != ${expected}`);
const sig = (number, figures, expected) => assert.equal(number.toPrecision(figures), expected);
near(20 - 350, -330); near(-60 + 200, 140);
sig(24 / (.5 * .053), 2, '9.1e+2');
const time = 5 * 60, backgroundMass = .016 / (10 * 60) * time;
near(backgroundMass, .008); near(.0416 - backgroundMass, .0336);
sig(32 * time / (.0416 - backgroundMass), 3, '2.86e+5');
assert(32 * time / .0416 < 32 * time / (.0416 - backgroundMass));
const conduction = .12 * .0175 * 5.5 / .0017;
sig(conduction, 2, '6.8'); sig(32 / conduction, 2, '4.7'); near(.0336 / .008, 4.2);
sig(120 * (7 + 273.15) / (27 + 273.15), 3, '112');
const gasMass = 6.3e-4, speedSquared = 2.53e5, pressure = 102e3, count = 1.3e22;
const volume = gasMass * speedSquared / (3 * pressure), radius = Math.cbrt(3 * volume / (4 * Math.PI));
sig(volume, 3, '0.000521'); sig(radius, 2, '0.050');
sig(.5 * gasMass / count * speedSquared, 2, '6.1e-21');
near(pressure * volume, count * (2 / 3) * (.5 * gasMass / count * speedSquared));
near(.02 * (3.34e5 + 4200 * 20), 8360);
const c = (90 - 50) / ((.002 - .001) * 10), loss = 50 - .001 * c * 10;
near(c, 4000); near(loss, 10); near(.002 * c * 10 + loss, 90);
const exampleFlowC = (140 - 80) / ((.002 - .001) * (35 - 20));
near(exampleFlowC, 4000);
const exampleFlowLoss = 80 - .001 * exampleFlowC * 15;
near(exampleFlowLoss, 20); near(.002 * exampleFlowC * 15 + exampleFlowLoss, 140);
near((.1 + .1) / (22 - 20) * 100, 10);
const compressionWork = -150e3 * (.002 - .004), compressionChange = -750 + compressionWork;
near(compressionWork, 300); near(compressionChange, -450); near(compressionWork - compressionChange, 750);
near(compressionChange, 1.5 * 150e3 * (.002 - .004)); // Consistent with a monatomic ideal gas at constant pressure.
near(.04 / .08, .5); near(.5 * 12 * 20, 120); near(120 * 2 * 3600, 864000);
const moles = 1e5 * 250e-6 / (8.31 * 300);
sig(moles, 3, '0.0100'); sig(moles * 6.02e23, 3, '6.04e+21'); sig(moles * .028, 3, '0.000281');
near(1e5 * (.005 - .002), 300); near(750 - 300, 450); near(750 - 300, 1.5 * 1e5 * (.005 - .002));
const speed = Math.sqrt(3 * 8.31 * 300 / .028);
sig(speed, 3, '517'); sig(speed * Math.sqrt(2), 3, '731'); near(1.5 * 1.38e-23 * 300, 6.21e-21);
// Heating doubles T: compare fixed volume with constant external pressure.
const particleMass=.028/6.02e23,kB=1.38e-23,numberDensity=1e5/(kB*300);
const kineticPressure=(density,T)=>density*particleMass*(3*kB*T/particleMass)/3;
near(kineticPressure(numberDensity,600),2e5);
near(kineticPressure(numberDensity/2,600),1e5);
near(Math.sqrt(600/300),Math.sqrt(2));
const source = fs.readFileSync('alevel/a2-physics/thermal-physics.md', 'utf8');
for (const id of ['internal-energy', 'conduction', 'ideal-gases', 'kinetic-theory', 'required-practical-8', 'required-practical-9', 'continuous-flow']) assert(source.includes(`{#${id}}`));
assert.deepEqual([...source.matchAll(/^#{3,4} Example (\d+):/gm)].map(m => Number(m[1])), [1, 2, 3, 4, 5, 6, 7, 8]);
assert.equal((source.match(/^### Question \d+:/gm) || []).length, 10);
assert.equal((source.match(/<details/g) || []).length, 32);
assert(!/^\$(?!\$)[^\n]+\$$/m.test(source), 'standalone calculations must use display math');
assert(source.indexOf('{#required-practical-8}') < source.indexOf('{#latent-heat-measurement}'));
assert(source.indexOf('{#latent-heat-measurement}') < source.indexOf('{#example-latent-heat}'));

// Fit the published raw records, rather than supplying gradients to the exercise.
const rows = id => {
  const section = source.split(`{#${id}}`)[1].split('<details')[0];
  return [...section.matchAll(/^\| ([\d.]+) \| ([\d.]+) \|$/gm)].map(m => [Number(m[1]), Number(m[2])]);
};
const fit = data => {
  const x = data.reduce((s, p) => s + p[0], 0) / data.length;
  const y = data.reduce((s, p) => s + p[1], 0) / data.length;
  const slope = data.reduce((s, p) => s + (p[0] - x) * (p[1] - y), 0) / data.reduce((s, p) => s + (p[0] - x) ** 2, 0);
  return { slope, intercept: y - slope * x };
};
const heatRows = rows('data-specific-heat');
assert.equal(heatRows.length, 10);
const early = fit(heatRows.filter(([t]) => t >= 60 && t <= 150)).slope;
const late = fit(heatRows.filter(([t]) => t >= 180)).slope;
near(early, .0456666666666667); near(late, .0338333333333333);
sig(24 / (.5 * early), 3, '1.05e+3'); sig(24 / (.5 * late), 3, '1.42e+3');
assert(early > late);
// Reconstruct the independently stated heat balance plus sensor lag within rounding.
for (const [t, temperature] of heatRows) {
  const model = 20 + 30 * (1 - (562.5 * Math.exp(-t / 562.5) - 15 * Math.exp(-t / 15)) / 547.5);
  assert(Math.abs(model - temperature) <= .05001);
}
const boyleRows = rows('data-boyle');
assert.equal(boyleRows.length, 6);
const boyleFit = fit(boyleRows.map(([v, p]) => [1 / (v + 2), p]));
near(boyleFit.slope, 4200.754476101794); assert(Math.abs(boyleFit.intercept) < .5);
for (const [v, p] of boyleRows) assert(Math.abs((v + 2) * p - 4200) < 2);
sig(boyleFit.slope * 1e-3 / (8.31 * 296), 3, '0.00171');
assert(205 > boyleRows.find(([v]) => v === 20)[1]);
const charlesRows = rows('data-charles');
assert.equal(charlesRows.length, 8);
const charlesFit = fit(charlesRows.filter(([temperature]) => temperature <= 70));
near(charlesFit.slope, .2); near(-charlesFit.intercept / charlesFit.slope, -273.214285714286);
assert(Math.abs(68.7 - (charlesFit.slope * 80 + charlesFit.intercept)) > 1.5);
console.log('PASS: thermal calculations, raw-record fits and physical construction, uncertainty, energy balances, display equations, 8 examples and 10 practice questions');
