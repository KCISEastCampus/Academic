// Run after Jekyll build: verify Faraday/energy, actual scope geometry and RP7 raw records.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const read = file => fs.readFileSync(file, 'utf8');
const close = (a, b, tol = 1e-8) => assert(Math.abs(a - b) <= tol * Math.max(Math.abs(a), Math.abs(b), 1e-300), `${a} != ${b}`);
const rounded = (a, expected, digits = 2) => assert.equal(a.toPrecision(digits), expected);
const ac = read('alevel/a2-physics/alternating-current.md');
const transformer = read('alevel/a2-physics/transformers-and-power-transmission.md');

const N = 2.4e-3 / (.042 * 7.5e-4 * Math.cos(51 * Math.PI / 180));
assert.equal(Math.round(N), 121); close(-120 * (.001 - .003) / .040, 6);
const frequency = .24 / (40 * .20 * .0015 * 2 * Math.PI);
rounded(frequency, '3.2');
for (const f of [frequency, 50]) {
  const w = 2 * Math.PI * f, psi = t => .012 * Math.cos(w * t), emf = t => .012 * w * Math.sin(w * t);
  const h = 1 / f * 1e-5, time = .13 / f;
  close(-(psi(time + h) - psi(time - h)) / (2 * h), emf(time));
  const end = .37 / f, dt = end / 20000;
  let area = 0;
  for (let i = 0; i < 20000; i++) area += emf((i + .5) * dt) * dt;
  close(area, psi(0) - psi(end));
}
const points = [[0, 0], [.20, .060], [.50, .060], [.60, 0]];
let signedArea = 0;
for (let i = 1; i < points.length; i++) {
  const [t0, p0] = points[i - 1], [t1, p1] = points[i];
  const emf = -(p1 - p0) / (t1 - t0);
  close(emf, [-.30, 0, .60][i - 1]); signedArea += emf * (t1 - t0);
}
assert(Math.abs(signedArea) < 1e-15);
for (const R of [2, 4]) for (const v of [3, 6]) {
  const B = .5, L = .2, emf = B * L * v, I = emf / R, F = B * I * L;
  close(F * v, I * I * R); close(emf / L, v * B);
  if (R === 2 && v === 3) { rounded(emf, '0.30'); rounded(I, '0.15'); rounded(F, '0.015'); rounded(F * v, '0.045'); }
}

// Numerically average a full cycle rather than assuming the rms result.
let mean = 0, square = 0, resistorPower = 0, realInput = 0, inputSquare = 0;
for (let i = 0; i < 12000; i++) {
  const phase = 2 * Math.PI * (i + .5) / 12000, v = 12 * Math.sin(phase), current = 2 * Math.sin(phase - .5);
  mean += v / 12000; square += v * v / 12000; resistorPower += v * v / 24 / 12000;
  realInput += v * current / 12000; inputSquare += current * current / 12000;
}
assert(Math.abs(mean) < 1e-12); close(Math.sqrt(square), 12 / Math.sqrt(2)); close(resistorPower, 3); close(resistorPower * 60, 180);
assert(realInput < Math.sqrt(square * inputSquare), 'AC meter product is not universally true input power');
close(.8 ** 2 * 50 / 2, 16); rounded(1.27 * Math.sqrt(2), '1.8');
close(20 / 5, 4); rounded(1.27 * Math.sqrt(2) / 3.6, '0.5', 1);
rounded(5 * 51 / 360, '0.71'); rounded(Math.sin(51 * Math.PI / 180), '0.777', 3);

// Read the plotted path and grid, so changing the drawing must also preserve the task answers.
const scope = read('assets/img/physics-ac-scope-task.svg');
const paths = [...scope.matchAll(/<path\b[^>]*\bd="([^"]+)"/g)].map(path => [...path[1].matchAll(/[ML]\s*([-\d.]+)[,\s]+([-\d.]+)/g)].map(m => [Number(m[1]), Number(m[2])]));
const curves = paths.filter(points => points.length > 100);
assert.equal(curves.length, 1);
const samples = curves[0];
const verticals = paths.filter(p => p.length === 2 && p[0][0] === p[1][0] && p[0][1] !== p[1][1]);
const xgrid = [...new Set(verticals.map(p => p[0][0]))].sort((a, b) => a - b), division = xgrid[1] - xgrid[0];
assert.equal(xgrid.length, 9);
const peaks = samples.filter((p, i) => i > 0 && i < samples.length - 1 && p[1] > samples[i - 1][1] && p[1] > samples[i + 1][1]);
assert.equal(peaks.length, 2);
const amplitudeDivisions = (Math.max(...samples.map(p => p[1])) - Math.min(...samples.map(p => p[1]))) / (2 * division);
const periodDivisions = (peaks[1][0] - peaks[0][0]) / division;
close(amplitudeDivisions, 2.5); close(periodDivisions, 4);
close(amplitudeDivisions * 2, 5); close(1 / (periodDivisions * .0005), 500);
close((8 - .2) * .0005 / 2, .00195); close((8 + .2) * .0005 / 2, .00205);
assert(ac.includes('488 to 513 Hz'));

// Recalculate the seven published handbook rows, including rounding and uncertainty bounds.
const raw = transformer.split('{#data-transformer-efficiency}')[1].split('<details')[0];
const rows = [...raw.matchAll(/^\| ([\d.]+) \| ([\d.]+) \| ([\d.]+) \| ([\d.]+) \|$/gm)].map(m => m.slice(1).map(Number));
assert.equal(rows.length, 7);
const percentages = rows.map(([vp, ip, vs, is]) => {
  const input = vp * ip, output = vs * is;
  assert(input > output && output > 0); close(input - output + output, input);
  return (100 * output / input).toFixed(1);
});
assert.deepEqual(percentages, ['75.5', '77.8', '80.8', '80.1', '79.4', '76.2', '74.7']);
const [vp, ip, vs, is] = rows[2], eta = vs * is / (vp * ip);
close(vp * ip, 25.252); close(vp * ip - vs * is, 4.852);
const fractional = .1 / vs + .01 / is + .1 / vp + .01 / ip;
rounded(fractional, '0.028'); rounded(100 * eta * fractional, '2.3');
const high = (vs + .1) * (is + .01) / ((vp - .1) * (ip - .01));
const low = (vs - .1) * (is - .01) / ((vp + .1) * (ip + .01));
assert(high > eta && low < eta); assert(high - eta < .024 && eta - low < .024);
close(10 * 600 / 300, 20); close(12 * 2 / 30, .8);
// A 1:1 ideal core with primary winding resistance can lose power while retaining equal currents.
const windingResistance = 1.5, windingCurrent = 2, secondaryVoltage = 12;
const primaryVoltage = secondaryVoltage + windingCurrent * windingResistance;
const inputPower = primaryVoltage * windingCurrent, outputPower = secondaryVoltage * windingCurrent;
close(inputPower, 30); close(outputPower, 24);
close(inputPower - outputPower, windingCurrent ** 2 * windingResistance); close(outputPower / inputPower, .8);
close((12 / Math.sqrt(2)) ** 2 / 6, 12); rounded(12 / (24 / Math.sqrt(2)), '0.71');
for (const sendV of [10000, 20000]) {
  const I = 100000 / sendV, loss = I * I * 10, receiveV = sendV - I * 10, received = 100000 - loss;
  close(receiveV * I, received); assert(receiveV > 0);
  close(loss, sendV === 10000 ? 1000 : 250);
}
for (const receiveV of [2000, 4000]) {
  const I = 40000 / receiveV, loss = I * I * 4, sendV = receiveV + I * 4;
  close(sendV * I, 40000 + loss); close(loss, receiveV === 2000 ? 1600 : 400);
}

const chapters = ['electromagnetic-induction', 'alternating-current', 'transformers-and-power-transmission'];
for (const prefix of ['', 'zh/']) {
  const index = read(`${prefix}alevel/a2-physics/index.md`);
  assert.equal((index.match(/<span id=/g) || []).length, 56);
  for (const [i, slug] of chapters.entries()) {
    const html = read(`_site/${prefix}alevel/a2-physics/${slug}/index.html`);
    assert(index.includes(`](/${prefix}alevel/a2-physics/${slug}/)`));
    assert.equal((html.match(/<details\b/g) || []).length, [14, 12, 14][i]);
    assert(!/<details\b[^>]*\bopen\b/.test(html));
    assert.equal((html.match(/<img[^>]*data-lazy-ignore="true"/g) || []).length, [3, 1, 2][i]);
    assert(!/<\/?em>[^<]*\\(?:varepsilon|eta)/.test(html));
    if (i !== 1) {
      const quickReference = html.split('id="quick-reference"')[1].split('<h2')[0];
      assert.match(quickReference, /<thead>\s*<tr>\s*<th[^>]*>[^]*?<\/th>\s*<th[^>]*>[^]*?<\/th>\s*<\/tr>\s*<\/thead>/, slug + ': semantic quick-reference headers');
    }
    if (i < 2) assert(html.includes(`href="/${prefix}alevel/a2-physics/${chapters[i + 1]}/"`));
  }
}
console.log('PH03 electromagnetism passed: Faraday differentiation/integration, rod energy, rms heating, SVG scope readings, RP7 raw data/uncertainty, transformer/line balances, course chain and closed solutions.');
