// Run directly with node; source and mathematics checks only. Compare energy answers with force/kinematics checks.
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const g=9.8, close=(a,b)=>assert(Math.abs(a-b)<1e-8,`${a} != ${b}`);
const round=(v,s)=>assert.equal(v.toPrecision(3),s);
// E1, Q1: signed work and the work of the resultant agree.
for(const [F,s,f,W,net] of [[40,3,12,60,24],[30,4,10,60,20]]){
 const forward=F*Math.cos(Math.PI/3);
 close(forward*s,W);close((forward-f)*s,net);close(W-f*s,net);
}
// E2, E3: average power also equals force times the steady speed.
close(20*g*2,392);close(392/4,20*g*.5);
close(54*5/18,15);close(2400*15,36000);close(2400*(15*40),1.44e6);
// E4, Q4: distinguish driving power from the rate of increase of KE.
for(const [m,f,sin,P,v,a] of [[1000,980,.05,29400,10,1.47],[800,400,0,16000,20,.5]]){
 const D=P/v;close(D-f-m*g*sin,m*a);
 close(P-f*v-m*g*sin*v,m*a*v);
}
for(const [sin,v] of [[.05,20],[0,30],[-.05,60]])close(29400/v-980-1000*g*sin,0);
close(24000/60,400);close(72*5/18,20);
// There is no powered downhill steady speed with resistance <= weight component.
for(const f of [490,400])assert(f-1000*g*.05<=0);
// E5: vector speed, KE and PE zero-level shifts.
close(Math.hypot(3,4),5);close(.5*2*5**2,25);close(2*g*2.5,49);
close(25+2*g*2.5,74);close(2*g*(2.5-3),-9.8);close(25-9.8,15.2);
for(const [hi,hf] of [[2.5,4],[2.5,-1]])close(2*g*(hf-hi),2*g*((hf-3)-(hi-3)));
// E6, E7 and Q2, Q3, Q5, Q6: independently use F=ma and v^2=u^2+2as.
for(const [m,u,s,D,f,sin,v2,work] of [
 [4,8,5,12,7.84,0,74.4,60],
 [5,2,4,52.5,8,.5,36,210],
 [10,0,3,374/3,0,1,16,374],
 [5,0,5,20,6.8,0,26.4,100],
 [3,2,4,0,21.525,-1,25,0],
 [2,0,4,0,2,-.25,11.6,0]
]){
 const a=(D-f-m*g*sin)/m;
 close(u*u+2*a*s,v2);close(D*s,work);
 const dKE=.5*m*(v2-u*u),dPE=m*g*s*sin;
 close(work-f*s,dKE+dPE);close(work-f*s-dPE,dKE);
 assert(v2>=0);
}
round(Math.sqrt(74.4),'8.63');round(148.8/7.84,'19.0');
close(74.4-2*(7.84/4)*(148.8/7.84),0); // E6 stopping after the pull ends.
close(5*g-25*3/5,34);close(.2*34,6.8);round(Math.sqrt(26.4),'5.14');round(374/3,'125');
close(3*g*4,117.6);close(.5*3*(25-4),31.5);close(21.525*4,86.1);round(21.525,'21.5');
round(Math.sqrt(11.6),'3.41');round(25/2.9,'8.62');close(2*(2.9/2)*(25/2.9),25);
// E8, Q8: smooth fixed wire, energy, height bounds and normal-force direction.
close(4.9**2/(2*g),1.225);round(1.225,'1.23');close(1.225-1,.225);
assert(1.225>0&&1.225<2);
// At the stationary point above the centre, weight has an inward component:
// the wire must exert an outward reaction, possible because the bead is threaded.
const inward=[-Math.sqrt(1-.225**2),.225];
assert(g*inward[1]>0);close(inward[0]**2+inward[1]**2,1);
round(Math.sqrt(2*g*.8),'3.96');close(Math.sqrt(2*g*1.6),5.6);
// Q7: compare the energy result with vertical motion at the top and at landing.
const u=14.7,top=u/g,T=(u+Math.sqrt(u*u+2*g))/g;
close(1+u*top-g*top*top/2,12.025);close(u-g*top,0);
close(1+u*T-g*T*T/2,0);close((u-g*T)**2,235.69);assert(u-g*T<0);
round(12.025,'12.0');round(Math.sqrt(235.69),'15.4');

// New checks: reverse displacement, arbitrary zero levels, changing resistance and delayed transfer.
const reversePull=15*2*Math.cos(5*Math.PI/6);
close(reversePull,-15*Math.sqrt(3));close(reversePull-8,(-15*Math.cos(Math.PI/6)-4)*2);
assert(2*g-15*Math.sin(Math.PI/6)>0);round(reversePull,'-26.0');round(reversePull-8,'-34.0');
close(Math.hypot(-3,4),5);close(Math.hypot(3,-4),5);
close((25+2*g*3)-(25+2*g),39.2);close((25+2*g*(-2))-(25+2*g*(-4)),39.2);
close(25+2*g*(-4),-53.4);close(25+2*g*(-2),-14.2);
close(.5*(6**2+8**2),50);close((50-4*g)-(50-2*g),-19.6);
close(36-5.9*5,6.5);assert(36-5.9*8<0);close(36-5.9*(360/59),0);close(2*g-4,15.6);
const kVehicle=(16000/10-400)/100,steadyVehicle=Math.cbrt(16000/kVehicle);
close(kVehicle,12);close(16000/steadyVehicle,kVehicle*steadyVehicle**2);round(steadyVehicle,'11.0');
for(const speed of [steadyVehicle-.01,steadyVehicle+.01])assert.equal(16000/speed-kVehicle*speed**2>0,speed<steadyVehicle);
close(kVehicle*8**2*(8*20),122880);close(122880/20,6144);assert(6144<16000);
close(24000*5,120000);close(400*60*5,120000);
close(Math.hypot(5,12),13);close((13**2-5**2)/(2*g),360/49);close(12**2-2*g*(360/49),0);round(360/49,'7.35');
// Independently recompute the personally read January 2025 QP/MS method references.
const officialK=(345000/12-18000*1.5)/12**2.25;
assert(Math.abs(officialK-6.5295)<.0001);round(officialK,'6.53');
assert(Math.abs(officialK*18**2.25*(18*30)-2353082.432)<1e-3);
const officialSteady=(345000/officialK)**(4/13);
assert(Math.abs(officialSteady-28.39304389)<1e-7);
const roofDrop=2.5*Math.sin(40*Math.PI/180),roofSpeed=Math.sqrt(2*g*roofDrop);
assert(Math.abs(roofSpeed-5.612182541)<1e-8);assert(Math.abs(Math.sqrt(roofSpeed**2+2*g*6)-12.21051157)<1e-8);
const beforeCollision=19.2**2/(2*2)+7.5**2/(2*5);close(beforeCollision,97.785);
for(const [px,py,after,loss] of [[2.4,24.3,60.489,37.296],[-2.4,29.1,86.121,11.664]]){
 close(px+py,19.2+7.5);close(px**2/4+py**2/10,after);close(beforeCollision-after,loss);assert(loss>0);
}

// Source-only checks: this authoring group does not build or consume stale _site HTML.
const root=path.join(__dirname,'..');
const course='alevel/a2-mathematics/mechanics';
const topic="work-and-energy";
const read=file=>fs.readFileSync(path.join(root,file),'utf8').replace(/\r\n?/g,'\n');
const english=read(`${course}/${topic}.md`),chinese=read(`zh/${course}/${topic}.md`);
const math=text=>text.match(/\$\$[\s\S]*?\$\$|\$[^$\r\n]+\$/g)||[];
const legacyAnchors=["sources-and-scope", "work-done-by-a-force", "example-1-which-forces-do-work", "work-against-gravity", "example-2-lifting-at-constant-speed", "power", "example-3-work-and-power-of-a-vehicle", "vehicles-on-inclined-roads", "example-4-steady-speed-and-acceleration-uphill", "kinetic-and-potential-energy", "example-5-vector-velocity-and-a-zero-level", "the-work-energy-principle", "example-6-driving-friction-and-stopping", "example-7-work-up-a-rough-plane", "conservation-of-mechanical-energy", "example-8-a-bead-on-a-fixed-smooth-wire", "practice", "q1-signed-work", "q2-a-lift-that-speeds-up", "q3-an-angled-pull-on-a-rough-plane", "q4-engine-power-at-an-instant", "q5-falling-with-resistance", "q6-sliding-down-a-rough-plane", "q7-vertical-projection-from-above-the-ground", "q8-two-motions-on-a-smooth-wire", "independent-method-choice", "retry-change-the-structure", "method-summary"];
const recoveryAnchors=["energy-level-check", "work-retry", "energy-level-retry", "power-retry", "conservation-retry", "stage-retry", "later-check"];
assert.deepEqual(math(chinese),math(english),'English and Chinese TeX sequences, including help, must match');
assert(chinese.includes(`lang: zh-CN\ntranslation_of: /${course}/${topic}/\npermalink: /zh/${course}/${topic}/`));
for(const prompt of english.match(/^\*\*Question:\*\*.*$/gm)||[])assert(chinese.includes(prompt),`English question changed: ${prompt}`);
for(const q of (english.split('## Practice')[1]||'').split(/^### Q[^\n]*\n\n/m).slice(1))assert(chinese.includes(q.split('<details')[0].trim()),'Full practice prompt retained');
for(const q of english.matchAll(/\*\*Question:\*\*[^\n]*(?:position|velocity)\n\n\$\$[\s\S]*?\$\$\n\n([^\n]+)/g))assert(chinese.includes(q[1]),'Multipart English instruction retained');
const images=text=>[...text.matchAll(/!\[[^\]]*\]\(([^)]+)\)/g)].map(m=>m[1]);
assert.deepEqual(images(chinese),images(english),'Equivalent image data in both languages');
for(const source of [english,chinese]){
 assert(source.includes('reading_layout: true'));
 assert(!/<details[^>]*\bopen\b/.test(source),'Hints and solutions start closed');
 const ids=[...source.matchAll(/\{#([^}]+)\}|\bid="([^"]+)"/g)].map(m=>m[1]||m[2]);
 assert.equal(new Set(ids).size,ids.length,'Unique explicit anchors');
 for(const id of [...legacyAnchors,...recoveryAnchors])assert(ids.includes(id),`Missing retained or recovery anchor: ${id}`);
 for(const [,id] of source.matchAll(/\]\(#([^)]+)\)/g))assert(ids.includes(id),`Missing local recovery destination: ${id}`);
 const checks=[...source.matchAll(/<div class="lesson-check" markdown="1">([\s\S]*?)<\/div>/g)].map(m=>m[1]);
 const examples=[...source.matchAll(/<div class="worked-example" markdown="1">([\s\S]*?)<\/div>/g)].map(m=>m[1]);
 assert.equal(examples.length,8,'Keep every original worked example');
 assert.equal(checks.length,(source.match(/class="lesson-check"/g)||[]).length,'Every task has a complete boundary');
 for(const example of examples){
  assert(example.includes('**Question:**')&&example.includes('$$'),'Public complete worked example');
  assert(!example.includes('<details')&&!example.includes('<div'),'No hidden or nested worked solutions');
 }
 for(const check of checks){
  assert(!check.includes('<div'),'Tasks cannot contain the next task');
  assert(check.indexOf('**Question:**')>=0&&check.indexOf('**Question:**')<check.indexOf('<details'),'Question before help');
  const panels=[...check.matchAll(/<details markdown="1">\s*<summary>([^<]+)<\/summary>([\s\S]*?)<\/details>/g)];
  assert.equal(panels.length,2,'Separate complete hint and solution for each task');
  assert(/^(Hint|提示)$/.test(panels[0][1]));assert(/^(Solution and check|解答与检查)$/.test(panels[1][1]));
  assert(panels.every(p=>p[2].trim().length>0),'Help panels contain feedback');
  assert(!panels.some(p=>p[2].includes('<details')),'No nested disclosures');
 }
 assert.equal((source.match(/<details\b/g)||[]).length,2*checks.length,'Every disclosure belongs to its own task');
 assert.equal((source.match(/^### Q\d+\b/gm)||[]).length,8,'Original practice questions retained');
 assert(source.includes('/mechanics/#mixed-problems')&&source.includes('/mechanics/#later-review'),'Concrete mixed and delayed route');
 assert(source.includes('Version 1.0 Final')&&source.includes('9660')&&source.includes('#page='),'Traceable official scope and paired paper references');
 for(const [,formula] of source.matchAll(/\$\$([\s\S]*?)\$\$/g))assert(!formula.includes('|'),'Use TeX delimiters, not Markdown table pipes');
 for(const asset of images(source))assert(fs.existsSync(path.join(root,asset)),'Retained teaching image exists');
}
for(const name of ["work-force-components", "work-energy-slope", "energy-smooth-wire"]){
 const svg=read(`assets/img/a2-math-mech/${name}.svg`);assert(svg.includes('<title')&&svg.includes('<desc'),'Accessible teaching diagrams retained');
}
const {init}=require('../assets/vendor/mathjax/3.2.2/es5/node-main.js');
init({loader:{load:['input/tex','output/svg']},tex:{packages:['base','ams']}}).then(mj=>{
 const formulas=new Set(math(english));
 for(const formula of formulas){
  const display=formula.startsWith('$$'),n=display?2:1;
  const svg=mj.startup.adaptor.outerHTML(mj.tex2svg(formula.slice(n,-n),{display}));
  assert(!svg.includes('data-mml-node="merror"')&&!svg.includes('data-mjx-error'),`Invalid TeX: ${formula}`);
 }
 console.log(`${topic}: original and new numerical/model checks; bilingual ${math(english).length} TeX fragments, ${formulas.size} unique TeX renders, retained anchors, 15 task boundaries and source-only structure passed. No build/browser claim.`);
}).catch(error=>{console.error(error);process.exitCode=1;});
