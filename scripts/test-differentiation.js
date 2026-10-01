// Run after bundle exec jekyll build: derivatives, line equations and stationary points.
const assert=require('node:assert/strict'),fs=require('node:fs');
const {exp,log,sin,cos,tan,asin,acos,atan,sqrt}=Math;
const close=(a,b,tol=1e-6)=>assert(Math.abs(a-b)<tol,`${a} != ${b}`);
const pairs=[
 [x=>2*exp(x)+log(x)-3*cos(x),x=>2*exp(x)+1/x+3*sin(x),[.5,1,2]],
 [tan,x=>1/cos(x)**2,[-.7,.2,.8]],
 [x=>1/cos(x),x=>sin(x)/cos(x)**2,[-.7,.2,.8]],
 [x=>1/sin(x),x=>-cos(x)/sin(x)**2,[.4,.9,1.7]],
 [x=>cos(x)/sin(x),x=>-1/sin(x)**2,[.4,.9,1.7]],
 [x=>x*x*exp(3*x),x=>x*exp(3*x)*(2+3*x),[-.5,.2,.8]],
 [x=>log(x)/x,x=>(1-log(x))/x**2,[.5,1,2]],
 [x=>log(1+x*x),x=>2*x/(1+x*x),[-1,.3,2]],
 [x=>cos(2*x)**3,x=>-6*cos(2*x)**2*sin(2*x),[-.7,.2,.8]],
 [x=>x*exp(-x),x=>exp(-x)*(1-x),[-.7,.2,1,2]],
 [x=>exp(-x)*(1-x),x=>exp(-x)*(x-2),[-.7,.2,1,2]],
 [asin,x=>1/sqrt(1-x*x),[-.6,0,.6]],
 [acos,x=>-1/sqrt(1-x*x),[-.6,0,.6]],
 [atan,x=>1/(1+x*x),[-2,0,2]],
 [x=>3*exp(x)-2*log(x)+4*sin(x),x=>3*exp(x)-2/x+4*cos(x),[.5,1,2]],
 [x=>1/cos(3*x),x=>3*sin(3*x)/cos(3*x)**2,[-.2,.1,.3]],
 [x=>cos(2*x)/sin(2*x),x=>-2/sin(2*x)**2,[.3,.6,1]],
 [x=>x*log(x),x=>log(x)+1,[.5,1,2]],
 [x=>exp(x)/(x+1),x=>x*exp(x)/(x+1)**2,[-.5,.2,1]],
 [x=>exp(sin(x)),x=>exp(sin(x))*cos(x),[-1,.3,2]],
 [x=>log(4-x*x),x=>-2*x/(4-x*x),[-1,.3,1.5]],
 [x=>sin(3*x)**2,x=>3*sin(6*x),[-1,.3,2]],
 [x=>log(x)-x,x=>1/x-1,[.5,1,2]],
 [x=>atan(2*x),x=>2/(1+4*x*x),[-2,0,2]],
 [x=>asin(3*x),x=>3/sqrt(1-9*x*x),[-.2,0,.2]],
];
for(const [f,df,points] of pairs)for(const x of points){const h=1e-6;close((f(x+h)-f(x-h))/(2*h),df(x));}
assert.equal((2*exp(1)+1+3*sin(1)).toFixed(4),'8.9610');
close(1/(3*1**2+1),.25);close(1/(2*1+2),.25);
// Reciprocal derivatives also satisfy the differentiated original relation.
for(const y of [-.5,0,1,2])close((3*y*y+1)*(1/(3*y*y+1)),1);
for(const [x,y,c,m] of [[1,2,7,-4/5],[1,1,3,-1]]){
 close(x*x+x*y+y*y,c);
 close(2*x+y+(x+2*y)*m,0);
 close(m*(-1/m),-1);
}
close(exp(-1)*(1-1),0);assert(exp(-1)*(1-2)<0);
assert(exp(-.5)*(1-.5)>0&&exp(-1.5)*(1-1.5)<0);
close(log(1)-1,-1);assert(1/.5-1>0&&1/2-1<0);
close(1*log(1),0);close(1-1,0);close(1**2+2*1,3);
close(asin(0),0);assert(!Number.isFinite(1/sqrt(1-1)));
const slug='differentiation';
const md=fs.readFileSync(`alevel/a2-mathematics/${slug}.md`,'utf8');
const html=fs.readFileSync(`_site/alevel/a2-mathematics/${slug}/index.html`,'utf8');
assert(!/[\u3400-\u9fff]/u.test(md));
assert.equal((md.match(/^### Example /gm)||[]).length,9);
assert.equal((md.match(/^### Q\d/gm)||[]).length,8);
assert.equal((html.match(/<details\b/g)||[]).length,16);
assert.equal((html.match(/<table\b/g)||[]).length,2);
assert(!html.includes('<p>$$'));
assert(!/y[¡¯¡®]/u.test(html), 'Smart punctuation must not change derivative primes.');
console.log('Differentiation passed: 25 derivative checks, reciprocal and implicit gradients, stationary points and 16 disclosures.');
