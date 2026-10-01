// Run after bundle exec jekyll build: maths, interval coverage and rendered practice.
const assert=require('node:assert/strict');
const fs=require('node:fs');
const {sin,cos,tan,PI,sqrt}=Math;
const close=(a,b)=>assert(Math.abs(a-b)<1e-9,`${a} != ${b}`);
const deg=x=>x*PI/180;
// Check all listed roots against the original equations.
const cases=[
 [x=>1/cos(2*x-PI/3)+2,[PI/2,5*PI/6],0,PI],
 [x=>cos(x)+sqrt(3)*sin(x)-1,[0,2*PI/3,2*PI],0,2*PI],
 [x=>sin(2*x)-sin(x),[0,PI/3,PI,5*PI/3,2*PI],0,2*PI],
 [x=>1/sin(x)+2,[deg(210),deg(330)],0,2*PI],
 [x=>sin(x+PI/6)-cos(x),[PI/6,7*PI/6],0,2*PI],
 [x=>cos(2*x)-sin(x),[PI/6,5*PI/6,3*PI/2],0,2*PI],
];
for(const [f,roots,a,b] of cases){
 for(const x of roots){assert(x>=a&&x<=b);close(f(x),0);}
 // Each sampled continuous sign change must have a listed root in its bracket.
 const step=(b-a)/12000;
 for(let i=0;i<12000;i++){
  const l=a+i*step,r=l+step;
  if(f(l)*f(r)<0&&Math.abs(f(l)-f(r))<.1)
   assert(roots.some(x=>x>=l-1e-9&&x<=r+1e-9),`Missing root near ${l}`);
 }
}
close(Math.acos(3*(5/6)-2),PI/3);
close(Math.asin(-.5),-PI/6);close(Math.atan(-sqrt(3)),-PI/3);
close(sin(deg(15)),(sqrt(6)-sqrt(2))/4);
close(cos(deg(15)),(sqrt(6)+sqrt(2))/4);
close(sin(3*PI/4-PI/4),1);
const alpha=Math.atan(3/4), beta=Math.atan(4/3);
assert.equal((90+alpha*180/PI).toFixed(1),'126.9');
assert.equal((270+alpha*180/PI).toFixed(1),'306.9');
assert.equal((360-beta*180/PI).toFixed(1),'306.9');
assert.equal((180-beta*180/PI).toFixed(1),'126.9');
close(2+4*sin(PI/2+alpha)-3*cos(PI/2+alpha),7);
close(2+4*sin(3*PI/2+alpha)-3*cos(3*PI/2+alpha),-3);
close(1+3*cos(2*PI-beta)-4*sin(2*PI-beta),6);
close(1+3*cos(PI-beta)-4*sin(PI-beta),-4);
close(tan(2*Math.atan(.5)),4/3);
for(const x of [-2.1,-.8,.3,1.2,2.5]){
 close(1/cos(x)-cos(x),sin(x)*tan(x));
 close(tan(x)+cos(x)/sin(x),1/(sin(x)*cos(x)));
 close((3/cos(x))**2/9-(2*tan(x))**2/4,1);
 close((2/sin(x))**2/4-(3*cos(x)/sin(x))**2/9,1);
 close(4*sin(x)-3*cos(x),5*sin(x-alpha));
 close(3*cos(x)-4*sin(x),5*cos(x+beta));
 close(cos(3*x),4*cos(x)**3-3*cos(x));
 close(6*sin(x)**2-2,1-3*cos(2*x));
}
const slug='trigonometric-functions-and-formulae';
const md=fs.readFileSync(`alevel/a2-mathematics/${slug}.md`,'utf8');
const html=fs.readFileSync(`_site/alevel/a2-mathematics/${slug}/index.html`,'utf8');
assert(!/[\u3400-\u9fff]/u.test(md));
assert.equal((md.match(/^### Example /gm)||[]).length,9);
assert.equal((md.match(/^### Q\d/gm)||[]).length,8);
assert.equal((html.match(/<details\b/g)||[]).length,16);
assert.equal((html.match(/<table\b/g)||[]).length,3);
assert(!html.includes('<p>$$'));
assert(fs.existsSync('_site/assets/img/trigonometric-reciprocals.svg'));
console.log('Trigonometry passed: original equations, interval coverage, identities, forms, extrema and 16 disclosures.');
