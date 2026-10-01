// Run after bundle exec jekyll build: models, domains, equations and rendered practice.
const assert=require('node:assert/strict');
const fs=require('node:fs');
const {exp,log}=Math;
const close=(a,b)=>assert(Math.abs(a-b)<1e-9,`${a} != ${b}`);
function firstWhole(A,q,target,below,expected){
 const n=log(target/A)/log(q);
 assert.equal(Math.floor(n)+1,expected);
 const satisfies=t=>below?A*q**t<target:A*q**t>target;
 assert(!satisfies(expected-1));assert(satisfies(expected));
}
firstWhole(2000,1.06,3000,false,7);
firstWhole(5000,.85,2000,true,6);
firstWhole(500,1.08,1000,false,10);
firstWhole(800,.9,200,true,14);
// Strict integer-boundary case: equality is not enough.
firstWhole(100,2,400,false,3);
firstWhole(400,.5,100,true,3);
assert(1000*1.07**6<1200*1.04**6);
assert(1000*1.07**7>1200*1.04**7);
for(const [value,expected] of [[2000*1.06**6,'2837.04'],[2000*1.06**7,'3007.26'],[5000*.85**5,'2218.53'],[5000*.85**6,'1885.75'],[500*1.08**9,'999.50'],[500*1.08**10,'1079.46'],[800*.9**13,'203.35'],[800*.9**14,'183.01']]) assert.equal(value.toFixed(2),expected);
close(2-exp(-(-log(2))),0);close(2-exp(0),1);
close(log(2*2.5-4),0);
close(log(3-2),0);close(log(3),log(3-0));
close(log(3-1)+log(3+1),log(8));
assert(-3-1<=0&&-3+1<=0);
close(exp(2*log(4))-3*exp(log(4))-4,0);
close(exp(3*((1+log(5))/3)-1),5);
close(log(3-2)+log(3),log(3));
for(const x of [log(2),log(3)]) close(exp(2*x)-5*exp(x)+6,0);
close(exp(2*((1+log(7))/2)-1),7);
for(const x of [1.2,2,4,10]) close(2*log(x-1)-log(x+2),log((x-1)**2/(x+2)));
for(const x of [.2,1,3,10]){
 close(3*log(x+1)-.5*log(x),log((x+1)**3/Math.sqrt(x)));
 assert((x+1)**2/x>=4);
}
for(const x of [-3,-.5,.5,3]) close(log(x*x),2*log(Math.abs(x)));
// Original combined logarithm can exist beyond the original separate arguments.
assert((0-1)**2/(0+2)>0);assert(0-1<=0);
const f=x=>3-exp(2*x),inv=x=>.5*log(3-x);
for(const x of [-2,0,.6]) close(inv(f(x)),x);
for(const x of [-5,0,2]) close(f(inv(x)),x);
close(inv(2),0);
const F=x=>log(2*x-1),G=x=>exp(x)+1,Finv=x=>(exp(x)+1)/2;
for(const x of [-2,0,2]){close(F(Finv(x)),x);close(F(G(x)),log(2*exp(x)+1));}
close(F(G(log(2))),log(5));
for(const t of [-1,0,1,5]) close(1.08**t,exp(log(1.08)*t));
const slug='exponential-and-logarithmic-functions';
const md=fs.readFileSync(`alevel/a2-mathematics/${slug}.md`,'utf8');
const html=fs.readFileSync(`_site/alevel/a2-mathematics/${slug}/index.html`,'utf8');
assert(!/[\u3400-\u9fff]/u.test(md));
assert.equal((md.match(/^### Example /gm)||[]).length,8);
assert.equal((md.match(/^### Q\d/gm)||[]).length,7);
assert.equal((html.match(/<details\b/g)||[]).length,14);
assert.equal((html.match(/<table\b/g)||[]).length,1);
assert(!html.includes('<p>$$'));
assert(fs.existsSync('_site/assets/img/exponential-logarithm-inverses.svg'));
console.log('Exponential and logarithmic functions passed: thresholds, signs, domains, equations, inverses, model conversion and 14 disclosures.');
