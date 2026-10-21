// Run after Jekyll build: independently check trajectories, energy and published balance records.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const close = (a, b, tolerance = 1e-8) => assert(Math.abs(a - b) <= tolerance * Math.max(Math.abs(a), Math.abs(b), 1e-300), `${a} != ${b}`);
const rounded = (value, expected, digits = 2) => assert.equal(value.toPrecision(digits), expected);
const source = fs.readFileSync('alevel/a2-physics/magnetic-fields-and-moving-charges.md', 'utf8');
const e = 1.60e-19, me = 9.11e-31, mp = 1.67e-27, g = 9.81;
// x is right, y is up, positive z is out of the page. Check signed Lorentz forces.
const force = (q, vx, vy, bz) => [q * vy * bz, -q * vx * bz];
close(force(1, 1, 0, -1)[0], 0); assert.equal(force(1, 1, 0, -1)[1], 1);
assert.equal(force(-1, 1, 0, -1)[1], -1);
assert.equal(force(1, 1, 0, 1)[1], -1);
assert.equal(force(-1, 1, 0, 1)[1], 1);
close(.12 * 2.5 * .060, .018);
rounded(.018 / g * 1000, '1.8');

// Integrate the differential equations, without assuming a circle or an energy equation.
for (const q of [e, -e]) for (const bz of [.0005, -.0005]) {
  const speed = 2e6, period = 2 * Math.PI * me / (Math.abs(bz) * e), dt = period / 4000;
  const derivative = ([, , vx, vy]) => {
    const [fx, fy] = force(q, vx, vy, bz);
    return [vx, vy, fx / me, fy / me];
  };
  const add = (s, k, scale) => s.map((v, i) => v + k[i] * scale);
  let state = [0, 0, speed, 0];
  for (let i = 0; i < 4000; i++) {
    const a = derivative(state), b = derivative(add(state, a, dt / 2));
    const c = derivative(add(state, b, dt / 2)), d = derivative(add(state, c, dt));
    state = state.map((v, j) => v + dt * (a[j] + 2 * b[j] + 2 * c[j] + d[j]) / 6);
    close(Math.hypot(state[2], state[3]), speed);
    if (i === 1999) {
      rounded(Math.abs(state[1]) / 2, '0.023');
      assert.equal(Math.sign(state[1]), -Math.sign(q * bz));
      assert(Math.abs(state[0]) < 1e-10);
    }
  }
  assert(Math.hypot(state[0], state[1]) < 1e-10, 'full orbit must close');
  close(state[2], speed);
  rounded(period, '7.2e-8');
}

// Fit the actual teaching records, including the intercept and gram-to-kilogram conversion.
const records = source.split('{#data-magnetic-balance}')[1].split('<details')[0];
const rows = [...records.matchAll(/^\| (\d+) \| (-?[\d.]+) \|$/gm)].map(m => [Number(m[1]), Number(m[2])]);
assert.equal(rows.length, 6);
const meanI = rows.reduce((s, [i]) => s + i, 0) / rows.length;
const meanMass = rows.reduce((s, [, m]) => s + m, 0) / rows.length;
const slope = rows.reduce((s, [i, m]) => s + (i - meanI) * (m - meanMass), 0) / rows.reduce((s, [i]) => s + (i - meanI) ** 2, 0);
const intercept = meanMass - slope * meanI, field = -slope * .001 * g / .040;
rounded(slope, '-0.3263', 4); rounded(intercept, '-0.00095'); rounded(field, '0.080');
for (const [i, mass] of rows) {
  assert(Math.abs(mass - (slope * i + intercept)) < .004);
  const wireForceDown = field * i * .040, balanceNormalChange = mass * .001 * g;
  assert(Math.abs(balanceNormalChange + wireForceDown) <= .01 * .001 * g);
}
close((-slope * .001 * g / .050) / field, .8);

// Independent-task answers and changes of fixed quantity.
const liftI = 8.9e3 * 1e-6 * g / .20;
rounded(liftI, '0.44'); close(.20 * liftI * .7, 8.9e3 * 1e-6 * .7 * g);
const massChargeRatio = .20 ** 2 * .112 ** 2 / (2 * 1000), ionMass = massChargeRatio * 2 * e;
rounded(massChargeRatio, '2.5e-7'); rounded(ionMass, '8.0e-26');
const ionSpeed = .20 * 2 * e * .112 / ionMass;
close(.5 * ionMass * ionSpeed ** 2, 2 * e * 1000);
rounded(6.64e-27 / (2 * me), '3.6e+3');
const selected = 1.2e4 / .080;
for (const q of [e, -e, 2 * e]) close(force(q, selected, 0, -.080)[1] + q * -1.2e4, 0);
rounded(selected, '1.5e+5');
const v = 2e4 / .14, nickel58 = 58 * 1.7e-27, analyserB = nickel58 * v / (e * .14);
rounded(v, '1.4e+5'); rounded(analyserB, '0.63');
close(e * v * analyserB, nickel58 * v ** 2 / .14);
rounded(2 * (60 * 1.7e-27 * v / (e * analyserB) - .14), '0.0097');
assert.notEqual(analyserB, .14, 'selector and analyser are different regions');

const frequency = .50 * e / (2 * Math.PI * mp), halfTime = 1 / (2 * frequency);
rounded(frequency / 1e6, '7.6');
let energy = 0;
for (let crossing = 0; crossing < 40; crossing++) {
  // The particle crosses in the opposite direction each time; the electric field must reverse.
  const direction = (-1) ** crossing, gapField = direction * 1000 / .001;
  const work = e * gapField * (direction * .001);
  assert(work > 0); energy += work;
  const speed = Math.sqrt(2 * energy / mp), r = mp * speed / (.50 * e);
  close(Math.PI * r / speed, halfTime);
}
rounded(energy, '6.4e-15'); close(energy / e, 40000);
const finalSpeed = Math.sqrt(2 * energy / mp), finalRadius = mp * finalSpeed / (.50 * e);
rounded(finalRadius, '0.058'); assert(finalRadius < .20 && finalSpeed < .01 * 3e8);
const maxSpeed = .50 * e * .20 / mp;
close(.5 * mp * maxSpeed ** 2, (.50 * e * .20) ** 2 / (2 * mp));
const speedB = Math.sqrt(2 * e * 1000 / (2 * mp)), speedA = Math.sqrt(2 * e * 1000 / mp);
close(speedB / speedA, 1 / Math.sqrt(2));
close((2 * mp * speedB) / (mp * speedA), Math.sqrt(2));

// Rendered tasks keep answers closed, and the bilingual course chain reaches this lesson.
for (const prefix of ['', 'zh/']) {
  const html = fs.readFileSync(`_site/${prefix}alevel/a2-physics/magnetic-fields-and-moving-charges/index.html`, 'utf8');
  assert.equal((html.match(/<details\b/g) || []).length, 17);
  assert(!/<details\b[^>]*\bopen\b/.test(html));
  assert.equal((html.match(/<img[^>]*data-lazy-ignore="true"/g) || []).length, 4);
  for (const image of html.matchAll(/<img[^>]*src="(\/assets\/img\/physics-[^"]+)"[^>]*alt="([^"]+)"/g)) assert(image[2].length > 40);
  for (const page of ['index', 'radioactive-decay']) {
    const parent = fs.readFileSync(`${prefix}alevel/a2-physics/${page}.md`, 'utf8');
    assert(parent.includes(`](/${prefix}alevel/a2-physics/magnetic-fields-and-moving-charges/)`));
  }
}
console.log('Physics magnetic fields passed: signed forces, integrated orbits, balance-record fit, selector, isotope separation, cyclotron work and timing, bilingual navigation.');
