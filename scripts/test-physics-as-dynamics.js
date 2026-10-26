// Run after the Jekyll build: independent numerical checks and bilingual reading routes.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = path.join(__dirname, '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8').replace(/\r\n/g, '\n');
const close = (actual, expected) => assert(Math.abs(actual - expected) <= (expected === 0 ? 1e-12 : Math.abs(expected) * 1e-9), `${actual} != ${expected}`);

// Independently balance each object, including gravity and the connection constraint.
close(60 * (10 + (0 - (-4)) / 2), 720);
close((400 - 50 * 10) / 50, -2);
close(6 - 6, 0); close(-6 / 2, -3);
close(-120 / 40, -3); close(120 / 60, 2);
const tension = 3 * .8 + 1, pull = (2 + 3) * .8 + 1;
close(pull, 5); close(tension, 3.4); close(pull - tension, 2 * .8);
close(4 * (10 - 1.5), 34);
close((9 - 1) / (3 + 1), 2); close(1 * 2 + 1, 3); close(9 - 3, 3 * 2);
close(4 * (10 + 0), 40);
assert(4 * (10 - 11) < 0, 'A negative normal must invalidate floor contact');

// Check both system momentum and kinetic energy, retaining signed velocities.
const kinetic = (mass, velocity) => .5 * mass * velocity ** 2;
const stick = (.4 * 3 + .6 * (-1)) / (.4 + .6);
close(stick, .6);
close(kinetic(.4, 3) + kinetic(.6, -1) - kinetic(1, stick), 1.92);
const other = (.5 * 2 - .5 * (-.4)) / 1;
close(other, 1.2); close(kinetic(.5, -.4) + kinetic(1, other), .76);
close(.5 * (-2 / 3) + 1 * (4 / 3), 1);
close(kinetic(.5, -2 / 3) + kinetic(1, 4 / 3), 1);
close(.3 * (-2) + .6 * 1, 0); close(kinetic(.3, -2) + kinetic(.6, 1), .9);

// Integrate the graph from its stated coordinates, rather than using the peak.
const trace = [[0, 0], [20, 12], [40, 0], [60, -6], [80, 0]];
const impulse = trace.slice(1).reduce((area, [t, f], i) =>
  area + (t - trace[i][0]) / 1000 * (f + trace[i][1]) / 2, 0);
close(impulse, .12); close(-.4 + impulse / .1, .8); close(impulse / .080, 1.5);
const ballChange = .2 * (3 - (-5)), normal = ballChange / .040 + .2 * 10;
close(ballChange, 1.6); close(normal, 42); close(normal * .040 - .2 * 10 * .040, ballChange);
close(1 + (-.5 * .1 * 8) / .2, -1); close(.1 * (0 - (-2)) / .020 + .1 * 10, 11);
const overlapLow = Math.max(-.84 - .03, -.90 - .04);
const overlapHigh = Math.min(-.84 + .03, -.90 + .04);
close(overlapLow, -.87); close(overlapHigh, -.86); assert(overlapLow <= overlapHigh);
close(-.90 - (-.84), -.06);
assert(-.58 + .02 < -.50 - .01, 'The retry intervals must not overlap');
assert(-.58 - (-.50) < 0, 'The discrepancy is consistent in sign with additional leftward impulse');
close(3 / (2 / 2), 3); close(3 ** 2 / (2 * (2 / 2)), 4.5); close(2 * (0 - 3) / .1, -60);

const tasks = source => [...source.matchAll(/<!-- task:([^ ]+) -->([\s\S]*?)<!-- \/task:\1 -->/g)]
  .map(([, id, body]) => [id, body.trim()]);
const headings = source => [...source.matchAll(/<h[23] id="([^"]+)"/g)].map(m => m[1]);
for (const slug of ["measurements-and-uncertainties","vectors-and-moments","straight-line-motion","projectile-motion","newtons-laws","momentum-and-impulse","work-energy-power","materials-and-young-modulus","atoms-and-particles","radiation-and-safety","unit-1-review","charge-current-and-potential","resistance-and-resistivity","dc-circuits-and-potential-dividers","emf-and-internal-resistance","oscillations-and-resonance","progressive-and-stationary-waves","interference-and-diffraction","refraction-and-optical-fibres","photons-and-wave-particle-duality","unit-2-review"]) {
  const en = read(`alevel/as-physics/${slug}.md`), zh = read(`zh/alevel/as-physics/${slug}.md`);
  for (const source of [en, zh]) assert(!/\$\$\n\$\$/.test(source), 'Separate adjacent display math blocks with a blank line');
  assert.deepEqual(tasks(en), tasks(zh), `${slug}: English question conditions must match`);
  assert.deepEqual(headings(en), headings(zh), `${slug}: language switch must preserve anchors`);
  assert(zh.includes(`translation_of: /alevel/as-physics/${slug}/`));
  for (const prefix of ['', '/zh']) {
    const url = `${prefix}/alevel/as-physics/${slug}/`;
    const html = read(`_site${url}index.html`);
    assert(html.includes('class="reading-layout"'));
    assert(!/<details\b[^>]*\bopen(?:\s|>|=)/.test(html), 'Answers must start closed');
    assert(!html.includes('<p>$$'), 'Display math must be rendered as math blocks');
    assert(!/<(?:div|details)[^>]+markdown=/.test(html), 'Kramdown containers must be processed');
    const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]);
    assert.equal(new Set(ids).size, ids.length, `${url}: duplicate anchors`);
    for (const [, href] of html.matchAll(/(?:href|src)="([^"<>]+)"/g)) {
      if (!/^(?:\/(?!\/)|#)/.test(href)) continue;
      const targetUrl = new URL(href, `https://local.test${url}`);
      let target = `_site${decodeURIComponent(targetUrl.pathname)}`;
      if (target.endsWith('/')) target += 'index.html';
      assert(fs.existsSync(path.join(root, target)), `${url}: missing ${href}`);
      if (targetUrl.hash) assert(read(target).includes(`id="${decodeURIComponent(targetUrl.hash.slice(1))}"`), `${url}: missing anchor ${href}`);
    }
    const index = read(`_site${prefix}/alevel/as-physics/index.html`);
    assert(index.includes(`href="${url}"`), 'The course index must discover each lesson');
  }
}

// Reconstruct representative new models, including loaded circuits and experiment bounds.
close(10 * Math.cos(Math.PI / 3) * 4 - 1 * 4, 16);
close(.5 * 1 * 2 ** 2 + .5 * 8 * 3 - 1 * 3, 11);
close(20 * 10 * .5 / 160, .625);
const wireArea = Math.PI * (.4e-3 / 2) ** 2;
assert(Math.abs(10 * 2 / (wireArea * .8e-3) / 1e11 - 1.98943678865) < 1e-10);
close(.5 * (20 + 30) * .001 + .5 * 20 * .001, .035);
close(.5 * 30 * .0015, .0225);
close((.0012 - .0004) / (15 - 5), .00008);
close((1.5 - 1.022), .478);
close((840 - 40) / 2 ** 4 + 40, 90);
for (const [r, net] of [[.1,1000],[.2,250],[.4,63]])
  assert(Math.abs(net * r ** 2 - 10) <= .081);
close(48 / 8, 6); close(8 / 4, 2); close(6 / 2, 3);
close((1 / (1 / 6000 + 1 / 6000)), 3000);
close(9 * 3000 / (3000 + 3000), 4.5);
close(12 / (4 + 1 / (1 / 6 + 1 / 3)), 2);
const loadedLower = 1 / (1 / 4000 + 1 / 8000);
close(8 * loadedLower / (4000 + loadedLower), 3.2);
close(3.2 / 8000, .0004); close(3.2 / 4000, .0008); close((8 - 3.2) / 4000, .0012);
close(1.5 * 1.2 - .5 * 4, -.2);
close(.15 * (2 - (-6)) / .030 + .15 * 10, 41.5);
close(20 * Math.cos(Math.PI / 3) * 2, 20);
close(12 * 10 * .25 / 60, .5); close(12 * 10 * .50 / .5, 120);
for (const [a,b] of [[1.515,-.35],[1.485,-.25]]) {
  for(const [i,v] of [[.1,1.47],[.2,1.44],[.3,1.40],[.4,1.38],[.5,1.35]])
    assert(Math.abs(a+b*i-v) <= .010000001, 'RP3 extreme line must meet every interval');
}
close(.5 * 50 * .04 ** 2, .04);
const period = (m,k) => 2 * Math.PI * Math.sqrt(m/k);
assert(Math.abs(period(.5,50) - .628318530718) < 1e-10);
const springSlope = ((17.8/20)**2-(8.9/20)**2)/(.4-.1);
assert(Math.abs(4*Math.PI**2/springSlope-19.9)<.05);
close(2 * .445 * .005, .00445);
close(1540 * 160e-6 / 2, .1232);
close(2 * 1.2 / 3, .8); close(90 * .8, 72);
close(.032 / 10 * .250e-3 / 1.5, 5.333333333333333e-7);
const gratingD = 1 / (600e3), lambda = gratingD * Math.sin(22*Math.PI/180);
assert(Math.floor(gratingD/lambda)===2);
assert(Math.abs(Math.asin(2*lambda/gratingD)*180/Math.PI-48.52)<.01);
assert(85 > Math.asin(1.46/1.48)*180/Math.PI);
assert(60 < Math.asin(1.4/1.6)*180/Math.PI);
close(2.5e3*1.602e-19, 4.005e-16);
close((.99-.17)/(2e14)*1.602e-19, 6.5682e-34);
close(6.63e-34/2e-24, 3.315e-10);
close(.64*(2/1.6)**2, 1);
close((Math.sqrt(40)+2)/10 * 6, 4.994733192202055);
for (const [m,b] of [[.9,.75],[13/12,.35]]) {
  [.55,1.45,2.60,3.40,4.55].forEach((u,f)=>assert(Math.abs(m*f+b-u)<=.200000001));
}

// Check that SVG coordinates and scale encode the same graph as the accessible question.
const svg = read('assets/img/physics-as-impulse-task.svg');
const points = [...svg.match(/d="M70 150L[^\"]+"/)[0].matchAll(/(?:M|L)(\d+) (\d+)/g)]
  .map(([, x, y]) => [(Number(x) - 70) / 4.5, (150 - Number(y)) / 7.5]);
assert.deepEqual(points, trace);
const energySvg = read('assets/images/physics-as-oscillation-energy.svg');
const traceFor = colour => {
  const d = energySvg.match(new RegExp('<path d="([^"]+)" fill="none" stroke="' + colour + '"'))[1];
  return [...d.matchAll(/[ML]([0-9.]+) ([0-9.]+)/g)].map(([,x,y])=>[+x,+y]);
};
const displacement = traceFor('#0369a1'), potential = traceFor('#b45309'), kineticEnergy = traceFor('#047857');
displacement.forEach(([x,y],i)=>{
  const phase = 2*Math.PI*(x-65)/660, normalX = (110-y)/60;
  assert(Math.abs(normalX-Math.cos(phase))<.0002, 'Displacement must follow the same oscillator');
  assert(Math.abs((335-potential[i][1])/100-normalX**2)<.0003, 'Potential must be proportional to displacement squared');
  assert(Math.abs((335-potential[i][1])/100+(335-kineticEnergy[i][1])/100-1)<.0002, 'Total energy must be conserved');
});

console.log('AS course: numerical balances, graph geometry, bilingual tasks and rendered routes passed.');
