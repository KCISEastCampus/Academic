// Run after Jekyll build. Check bilingual tasks, rendered navigation and the plotted evidence.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const read = file => fs.readFileSync(path.join(__dirname, '..', file), 'utf8').replace(/\r\n/g, '\n');
const built = url => read('_site' + url + (url.endsWith('/') ? 'index.html' : ''));
const ids = html => [...html.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]);
const math = source => source.match(/\$\$[\s\S]*?\$\$|(?<!\$)\$(?!\$)[^\n$]+\$(?!\$)/g) || [];
const tasks = source => [...source.matchAll(/<!-- task:([^ ]+) -->([\s\S]*?)<!-- \/task:\1 -->/g)].map(m => [m[1], m[2]]);
const close = (actual, expected, tolerance = 1e-6) => assert(Math.abs(actual - expected) < tolerance, `${actual} != ${expected}`);

for (const [subject, slug, scheme, taskCount, label, helpCount, record, imageCount] of [
  ['igcse/physics', 'motion-and-graphs', 'scheme-igcse', 8, 'IGCSE 物理', 14, 'position-record', 2],
  ['alevel/as-physics', 'measurements-and-uncertainties', 'scheme-alevel', 8, 'AS 物理', 14, 'calibration-record', 1],
  ['igcse/physics', 'forces-and-motion', 'scheme-igcse', 8, 'IGCSE 物理', 16, 'braking-record', 2],
  ['alevel/as-physics', 'vectors-and-moments', 'scheme-alevel', 8, 'AS 物理', 16, null, 2],
  ['igcse/physics', 'springs-and-hookes-law', 'scheme-igcse', 7, 'IGCSE 物理', 14, 'spring-record', 1],
  ['alevel/as-physics', 'straight-line-motion', 'scheme-alevel', 8, 'AS 物理', 16, 'freefall-record', 2],
  ['igcse/physics', 'centre-of-mass-and-moments', 'scheme-igcse', 8, 'IGCSE 物理', 16, 'stability-record', 3],
  ['alevel/as-physics', 'projectile-motion', 'scheme-alevel', 8, 'AS 物理', 16, 'projectile-record', 2]
]) {
  const url = `/${subject}/${slug}/`;
  const en = read(`${subject}/${slug}.md`), zh = read(`zh/${subject}/${slug}.md`);
  assert(zh.includes(`translation_of: ${url}\n`));
  assert.deepEqual(math(zh), math(en), slug + ': bilingual formulas');
  assert(tasks(en).length >= taskCount, 'Keep the original independent tasks when extending a lesson');
  assert.deepEqual(tasks(zh), tasks(en), slug + ': English tasks and supplied records');
  assert.deepEqual(ids(zh), ids(en), slug + ': stable language-switch anchors');
  for (const [source, prefix, language] of [[en, '', 'en'], [zh, '/zh', 'zh-CN']]) {
    const pageUrl = prefix + url, html = built(pageUrl);
    const body = html.split('id="content-container"')[1].split('<div id="toc"')[0];
    assert(html.includes(`<html lang="${language}">`));
    assert(html.includes(`<body class="${scheme} study-page">`));
    assert(html.match(/<a[^>]*id="languageSwitch"[^>]*>/)[0].includes(`href="${prefix ? '' : '/zh'}${url}"`));
    assert.equal(new Set(ids(body)).size, ids(body).length, 'unique content IDs');
    assert((body.match(/<details\b/g) || []).length >= helpCount, 'retain separate hints and solutions');
    assert.equal((body.match(/<details\b/g) || []).length, (source.match(/<details\b/g) || []).length, 'all authored help renders');
    assert(!/<details\b[^>]*\bopen(?:\s|=|>)/.test(body), 'answers initially closed');
    assert(!body.includes('markdown="1"') && !body.includes('$$'), 'Markdown and display equations rendered');
    assert(!/<h1\b/.test(body), 'single page title in header');
    assert(body.includes('<thead>') && body.includes('<th'), 'semantic record tables');
    if (record) assert(new RegExp(`<!-- (?:task|record):${record} -->\\s*<table[\\s\\S]*?</table>\\s*<!-- /(?:task|record):${record} -->`).test(body), 'raw records render as a table');
    assert((body.match(/<img\b/g) || []).length >= imageCount, 'keep the original evidence figures');
    for (const formula of math(source)) assert(!formula.includes('|'), 'TeX must not create Markdown cells');
    for (const [, tag, src, alt] of body.matchAll(/(<img\b[^>]*src="([^"]+)"[^>]*alt="([^"]*)"[^>]*>)/g)) {
      assert(alt.length > 35 && /width="[1-9]\d*"/.test(tag) && /height="[1-9]\d*"/.test(tag), 'figures have descriptions and stable dimensions');
      assert(built(src).includes('<svg'), 'plotted asset exists');
    }
    for (const [, href] of body.matchAll(/href="([/#][^"]*)"/g)) {
      const [target, fragment] = href.split('#');
      if (fragment) assert(ids(target ? built(target) : html).includes(decodeURI(fragment)), 'link target: ' + href);
      else if (target) built(target);
    }
    assert(built(`${prefix}/${subject}/`).includes(`href="${pageUrl}"`), 'index links to pilot');
    assert(body.includes(`href="${prefix}/${subject}/"`), 'pilot links to index');
    if (prefix) assert(html.includes(`href="/zh/${subject}/">${label}</a>`), 'localized breadcrumb');
    assert(!/href="[^"]*(?:drive\.google|question-paper|mark-scheme)/i.test(body), 'no raw-paper links');
  }
}

// Verify the SVG's actual vertices against axis geometry, not a duplicate data label.
function svgGraph(file) {
  const svg = read('assets/img/' + file);
  const [, x, y, width, height] = svg.match(/<clipPath[^>]*>\s*<rect x="([\d.]+)" y="([\d.]+)" width="([\d.]+)" height="([\d.]+)"/);
  return { svg, x: +x, y: +y, width: +width, height: +height };
}
const vertices = text => [...text.matchAll(/[ML]\s+(-?[\d.]+)\s+(-?[\d.]+)/g)].map(m => [+m[1], +m[2]]);
for (const [file, points, xlim, ylim] of [
  ['physics-ig-position.svg', [[0,0],[2,6],[5,6],[9,-2]], [-.3,9.5], [-3,7]],
  ['physics-ig-velocity.svg', [[0,4],[4,0],[8,-4]], [-.3,8.5], [-5,5]],
  ['physics-ig-braking.svg', [[0,12],[.5,12],[3.5,0]], [-.1,3.8], [-1,14]],
  ['physics-ig-spring.svg', [[0,0],[4,1],[8,2],[12,3],[17,4],[24,5]], [-1,26], [-.2,5.6]],
  ['physics-as-kinematics.svg', [[0,0],[4,3],[10,3],[12,0]], [-.3,13], [-.2,3.6]]
]) {
  const g = svgGraph(file);
  const rendered = vertices(g.svg.match(/id="(?:motion|braking|lesson)-record">\s*<path d="([^"]+)"/)[1]);
  assert.equal(rendered.length, points.length);
  points.forEach(([x,y], i) => {
    close(rendered[i][0], g.x + (x-xlim[0])/(xlim[1]-xlim[0])*g.width);
    close(rendered[i][1], g.y + (ylim[1]-y)/(ylim[1]-ylim[0])*g.height);
  });
}
const calibration = svgGraph('physics-as-error-bars.svg');
const intervals = [...calibration.svg.match(/id="calibration-intervals">([\s\S]*?)<\/g>/)[1].matchAll(/<path d="([^"]+)"/g)];
assert.equal(intervals.length, 5);
intervals.forEach((m, i) => {
  const [lower, upper] = vertices(m[1]);
  close(lower[0], calibration.x + (i+.3)/4.8*calibration.width);
  close(upper[0], lower[0]);
  close(lower[1], calibration.y + (5-(i+.3))/5*calibration.height);
  close(upper[1], calibration.y + (5-(i+.7))/5*calibration.height);
});

// Independently calculate worked and transfer results.
const times = [0,2,5,9], positions = [0,6,6,-2];
const changes = positions.slice(1).map((x,i) => x-positions[i]);
assert.deepEqual(changes.map((x,i) => x/(times[i+1]-times[i])), [3,0,-2]);
close(changes.reduce((s,x) => s+Math.abs(x),0), 14);
close(positions.at(-1)-positions[0], -2);
close((60+40)/25, 4); close((60-40)/25, .8);
close(.5*3*6+2*6+.5*3*6, 30);
close(2.38-.04, 2.34); close((.01+.01)/2.34*100, .8547008547);
const volume = Math.PI*1.5**2*40, volumeFraction = 2*.02/1.5+.5/40;
close(volume, 282.7433388231); close(volume*volumeFraction, 11.0741141043);
const density = .0085/(Math.PI*.0006**2*1), fraction = .05/8.5+2*.01/.6+.01;
close(density, 7515.6500904506); close(density*fraction, 369.9, .05);
for (const [m,b] of [[.95,.6],[1.1,.3],[.9,.7]]) {
  for (let f=0; f<=4; f++) assert(Math.abs(m*f+b-(f+.5)) <= .2+1e-9);
}
close(((4.5+.2)-(.5-.2))/4, 1.1);
close(((4.5-.2)-(.5+.2))/4, .9);
close(.2/20, .01); close((.2/20)/2*100, .5);
close((25-.5)-(15-.5), 10);

// Verify schematic geometry in the actual SVG coordinate system.
const plottedLine = (svg, id) => vertices(svg.match(new RegExp(`id="${id}">\\s*<path d="([^"]+)"`))[1]);
const components = plottedLine(read('assets/img/physics-as-components.svg'), 'component-vector');
close((components[1][1]-components[0][1])/(components[1][0]-components[0][0]), -Math.tan(Math.PI/6));
const momentSvg = read('assets/img/physics-as-moment-arm.svg');
const rod = plottedLine(momentSvg, 'moment-rod');
const perpendicular = plottedLine(momentSvg, 'moment-perpendicular');
const action = plottedLine(momentSvg, 'force-action-line');
const delta = points => [points[1][0]-points[0][0], points[1][1]-points[0][1]];
const [rx,ry] = delta(rod), [px,py] = delta(perpendicular), [ax,ay] = delta(action);
close(Math.hypot(px,py)/Math.hypot(rx,ry), .5);
close((px*ax+py*ay)/(Math.hypot(px,py)*Math.hypot(ax,ay)), 0);
const foot = perpendicular[1];
close(((foot[0]-action[0][0])*ay-(foot[1]-action[0][1])*ax)/Math.hypot(ax,ay), 0);

// Model checks: force direction, system momentum, braking stages and unilateral contact.
close((40-10)/5, 6); close(8-10/5*3, 2); close(8/(10/5), 4);
close(2*3/(2+1), 2); close((2*2-2*3)/.1, -20);
close(-1.5*(-.4)/.5, 1.2);
close(12*.5 + .5*12*3, 24); close(24*.5+.5*24*6, 84);
close(784/9.8, 80); close((784-1200)/80, -5.2);
close(-.2*10/.01, -200); close(-.2*10/.05, -40);
const rad = degrees => degrees*Math.PI/180;
close(15*Math.sin(rad(38)), 9.2, .05);
close(15*Math.cos(rad(38)), 11.82, .005);
close(40/Math.sin(rad(30)), 80);
close(60/Math.cos(rad(40)), 78.3, .05);
close(60*Math.tan(rad(40)), 50.3, .05);
close(20*.4*Math.sin(rad(30)), 4);
close((360+4.8*9.81)/2, 203.544);
const reactions = x => { const b=(60*2+120*x)/3; return [180-b,b]; };
assert.deepEqual(reactions(2.5), [40,140]);
assert.deepEqual(reactions(3.8), [-12,192]);
assert.deepEqual(reactions(3.5), [0,180]);
close(12*.3, 3.6);
for (const [subject,slug,previous] of [['igcse/physics','forces-and-motion','motion-and-graphs'], ['alevel/as-physics','vectors-and-moments','measurements-and-uncertainties'], ['igcse/physics','springs-and-hookes-law','forces-and-motion'], ['alevel/as-physics','straight-line-motion','vectors-and-moments'], ['igcse/physics','centre-of-mass-and-moments','springs-and-hookes-law'], ['alevel/as-physics','projectile-motion','straight-line-motion']]) {
  for (const prefix of ['', '/zh/']) {
    const base=prefix ? prefix+subject : subject;
    const lesson=read(`${base}/${slug}.md`), before=read(`${base}/${previous}.md`);
    assert(before.includes(`/${slug}/)`), 'previous lesson links forwards');
    assert(lesson.includes(`/${previous}/)`), 'new lesson links backwards');
    assert(!/MS\s*(?:Version|版本)|Version:\s*\d/i.test(lesson), 'no MS version labels');
  }
}
assert(read('igcse/physics/forces-and-motion.md').includes('Q01.3–01.6'));
assert(read('alevel/as-physics/vectors-and-moments.md').includes('Q06.1'));
assert(read('alevel/as-physics/straight-line-motion.md').includes('Q04.1'));

// Check unit conversion, signed areas, the turning point and timing-bias direction.
close(2/.008, 250); close((.05+.15)*10/.008, 250);
close(80+(.3*10/400)*1000, 87.5); close(2/.010, 200); close(72-1/200*1000, 67);
close((2+8)/2*2 + (8-2)/2*5, 25); close(10+16+1, 27);
close(2*160/(12+20)+15, 25); close(160+20*15, 460);
close(14.7**2/(2*9.8), 11.025);
for (const t of [1,2]) close(14.7*t-4.9*t*t, 9.8);
close((.5*4*3+6*3+.5*2*3)*1e-3/.012, 2.25);
close(3/.004, 750); close(-3/.002, -1500);
close(2*(.784-.196)/(.16-.04), 9.8);
assert(2*.196/(.2-.02)**2 > 9.8);
close(2*18/3-9, 3); close(-6*5+5**2, -5); close(.5*3*6+.5*2*4, 13);
const freefall = svgGraph('physics-as-freefall.svg');
const line = vertices(freefall.svg.match(/id="freefall-model">\s*<path d="([^"]+)"/)[1]);
close((line[0][1]-line[1][1])/freefall.height*.9 / ((line[1][0]-line[0][0])/freefall.width*.18), 4.9, 1e-5);

// Check the actual plotted trajectory against the equations and the supplied record.
const trajectory = svgGraph('physics-as-projectile-path.svg');
const trajectoryPoints = vertices(trajectory.svg.match(/id="projectile-trajectory">\s*<path d="([^"]+)"/)[1]);
assert(trajectoryPoints.length > 15);
for (const [px,py] of trajectoryPoints) {
  const x = (px-trajectory.x)/trajectory.width*10.8-.6;
  const y = 2.25-(py-trajectory.y)/trajectory.height*2.45;
  const t = x/8;
  close(y, 6*t-5*t*t, 1e-6);
}
const projectileComponents = svgGraph('physics-as-projectile-components.svg');
for (const [id, points] of [['horizontal-component',[[0,8],[1.2,8]]],['vertical-component',[[0,6],[1.2,-6]]]]) {
  const rendered = vertices(projectileComponents.svg.match(new RegExp(`id="${id}">\\s*<path d="([^"]+)"`))[1]);
  points.forEach(([x,y],i) => {
    close(rendered[i][0],projectileComponents.x+(x+.05)/1.3*projectileComponents.width);
    close(rendered[i][1],projectileComponents.y+(11-y)/18*projectileComponents.height);
  });
}
const projectileSource = read('alevel/as-physics/projectile-motion.md');
const answerFigure = projectileSource.indexOf('<img src="/assets/img/physics-as-projectile-components.svg"');
const answerDetails = projectileSource.lastIndexOf('<details markdown="1">',answerFigure);
assert(answerDetails > projectileSource.lastIndexOf('</details>',answerFigure), 'answer graph stays in closed solution');
assert(projectileSource.slice(answerDetails,answerFigure).includes('<summary>Solution and check</summary>'));
assert(projectileSource.includes('Q08.1–08.6'));
assert(read('igcse/physics/centre-of-mass-and-moments.md').includes('Q02.4–02.6'));

// Pixel geometry must agree with gravity and the retained contact edge, not just the labels.
const tiltSvg = read('assets/img/physics-ig-tilting.svg');
for (const [label,height] of [['A',.3],['B',.9]]) {
  const floor = vertices(tiltSvg.match(new RegExp(`id="floor-${label}">\\s*<path d="([^"]+)"`))[1]);
  const weight = vertices(tiltSvg.match(new RegExp(`id="weight-line-${label}">\\s*<path d="([^"]+)"`))[1]);
  close(weight[0][0],weight[1][0]);
  const pixelScale=(floor[1][0]-floor[0][0])/1.5;
  const edge=floor[0][0]+.65*pixelScale;
  const offset=-.3*Math.cos(rad(25))+height*Math.sin(rad(25));
  close((weight[0][0]-edge)/pixelScale,offset,1e-6);
  assert(label==='A' ? weight[0][0]<edge : weight[0][0]>edge);
}
close(560*1.7,952); close(420*2.4,1008); close(420*2.4/560,1.8);
close(560+420+100,1080); close(300*.4/1.2,100); close(300*.6/1.2,150);
close((80*.5+40*1.5)/1.5,200/3); close(120-200/3,160/3);
const launchX=15*Math.cos(rad(38)), launchY=15*Math.sin(rad(38));
const targetSpeed=Math.sqrt(launchY**2-2*9.81*2.56);
const targetTimes=[(launchY-targetSpeed)/9.81,(launchY+targetSpeed)/9.81];
for (const t of targetTimes) close(launchY*t-9.81*t*t/2,2.56);
assert(launchY-9.81*targetTimes[0]>0 && launchY-9.81*targetTimes[1]<0);
close(launchX*targetTimes[1],18.261344859,1e-8);
close(launchY**2/(2*9.81),4.346778122,1e-8);
const ledgeTime=(6+Math.sqrt(136))/10;
close(6*ledgeTime-5*ledgeTime**2,-5); assert(ledgeTime>1.2);
for (const [angle,time,height] of [[30,2,5],[60,Math.sqrt(12),15]]) {
  const vertical=20*Math.sin(rad(angle)), horizontal=20*Math.cos(rad(angle));
  close(2*vertical/10,time); close(vertical**2/20,height); close(horizontal*time,20*Math.sqrt(3));
}

// Legacy bookmark IDs from the notes before adding the learning routes.
for (const id of ["-unit-1-forces-and-their-effects", "-11-forces-and-their-interactions", "-12-motion", "-13-resultant-forces", "-14-momentum", "-15-safety-in-public-transport", "-16-forces-and-terminal-velocity", "\ufe0f-17-centre-of-mass--18-moments", "-unit-1-quick-check", "-unit-2-energy", "-21-forces-and-energy", "\ufe0f-22-energy-transfers-conservation-and-dissipation", "-23-energy-resources", "-unit-2-quick-check", "-unit-3-waves", "-31-general-properties-of-waves", "-32-the-electromagnetic-spectrum", "-33-sound-and-ultrasound", "-34-reflection--35-refraction", "\ufe0f-36-lenses-and-the-eye", "-unit-3-quick-check", "-unit-4-particle-model-of-matter", "-41-kinetic-theory", "-42-energy-transfers-and-particle-motion", "-unit-4-quick-check", "-unit-5-electricity-and-magnetism", "-51-electrical-circuits", "-52-magnetism-and-electromagnetism", "-unit-5-quick-check", "-unit-6-generating-and-distributing-electricity--household-use", "-61-generating-electricity", "-62-electricity-transmission", "-63-using-electricity-in-the-home", "-64-the-motor-effect--65-energy-transfer", "-unit-6-quick-check", "\ufe0f-unit-7-nuclear-physics", "\ufe0f-71-atomic-structure", "\ufe0f-72-ionising-radiation", "\ufe0f-73-nuclear-fission--74-nuclear-fusion", "-unit-7-quick-check", "-unit-8-space-physics", "-81-life-cycle-of-a-star", "-82-solar-system-and-orbital-motion", "-83-red-shift-and-the-expanding-universe", "-unit-8-quick-check", "key-equations-summary", "revision-resources", "unit-1-force--motion", "unit-2-energy", "unit-3-waves"]) {
  for (const prefix of ['', '/zh']) assert(built(prefix + '/igcse/physics/').includes(`id="${id}"`), 'legacy bookmark: ' + id);
}
for (const id of ["-unit-1-mechanics-materials-and-atoms", "1--measurements--errors-31", "11-si-units-and-prefixes", "12-errors-and-uncertainties", "2--mechanics-321--328", "21-vectors-and-moments", "22-kinematics-suvat", "23-projectile-motion", "24-newtons-laws--momentum", "25-work-energy-and-power", "3-\ufe0f-materials-329--3210", "31-bulk-properties", "32-the-young-modulus", "4-\ufe0f-particles-radiation--radioactivity-33", "41-constituents-of-the-atom", "42-particles-and-antiparticles", "43-radioactivity", "-key-required-practicals-unit-1", "-unit-2-electricity-waves-and-particles", "5--electricity-34", "51-basics-of-electricity", "52-currentvoltage-characteristics", "53-resistivity", "54-circuits", "55-potential-divider", "56-electromotive-force-and-internal-resistance", "6--oscillations-and-waves-35", "61-oscillating-systems", "62-forced-vibrations-and-resonance", "63-progressive-waves", "64-longitudinal-and-transverse-waves", "65-principle-of-superposition-and-stationary-waves", "66-interference", "67-diffraction", "68-refraction-at-a-plane-surface", "69-collisions-of-electrons-with-atoms", "610-photoelectric-effect", "611-waveparticle-duality", "-key-required-practicals-unit-2"]) {
  for (const prefix of ['', '/zh']) assert(built(prefix + '/alevel/as-physics/').includes(`id="${id}"`), 'legacy bookmark: ' + id);
}
console.log('PASS: IG/AS learning pilots, bilingual tasks, navigation, closed help, SVG geometry, numerical models and 89 legacy anchors');
