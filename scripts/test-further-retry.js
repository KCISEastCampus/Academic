// Run with: node scripts/test-further-retry.js
// These are mathematical checks of the 11 self-written diagnosis/retry pairs.
// Coefficient identities are exact; numerical samples below are secondary checks.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = path.join(__dirname, '..');

const gcd = (a, b) => b ? gcd(b, a % b) : (a < 0n ? -a : a);
const q = (n, d = 1n) => {
  n = BigInt(n); d = BigInt(d);
  assert.notEqual(d, 0n);
  if (d < 0n) { n = -n; d = -d; }
  const g = gcd(n, d);
  return [n / g, d / g];
};
const add = (a, b) => q(a[0] * b[1] + b[0] * a[1], a[1] * b[1]);
const neg = a => [-a[0], a[1]];
const sub = (a, b) => add(a, neg(b));
const mul = (a, b) => q(a[0] * b[0], a[1] * b[1]);
const div = (a, b) => q(a[0] * b[1], a[1] * b[0]);
const eq = (a, b, label) => assert.deepEqual(a, b, label);
const ZERO = q(0), ONE = q(1);

// Sparse Laurent polynomials with rational coefficients: also handles x^-1.
const clean = p => Object.fromEntries(Object.entries(p).filter(([, c]) => c[0]));
const poly = terms => clean(Object.fromEntries(Object.entries(terms).map(([k, c]) => [k, Array.isArray(c) ? c : q(c)])));
const plus = (a, b) => {
  const p = { ...a };
  for (const [k, c] of Object.entries(b)) p[k] = add(p[k] || ZERO, c);
  return clean(p);
};
const scale = (p, c) => clean(Object.fromEntries(Object.entries(p).map(([k, v]) => [k, mul(v, c)])));
const times = (a, b) => {
  let p = {};
  for (const [k, c] of Object.entries(a))
    for (const [l, d] of Object.entries(b)) p = plus(p, { [+k + +l]: mul(c, d) });
  return p;
};
const derivative = p => clean(Object.fromEntries(Object.entries(p).filter(([k]) => +k !== 0).map(([k, c]) => [+k - 1, mul(c, q(k))])));
const value = (p, x) => Object.entries(p).reduce((s, [k, c]) => {
  let power = ONE;
  for (let i = 0; i < Math.abs(+k); i++) power = mul(power, x);
  if (+k < 0) power = div(ONE, power);
  return add(s, mul(c, power));
}, ZERO);
const integral01 = p => Object.entries(p).reduce((s, [k, c]) => {
  assert(+k >= 0); return add(s, div(c, q(+k + 1)));
}, ZERO);
const peq = (a, b, label) => eq(clean(a), clean(b), label);
const X = poly({ 1: 1 });
const C = n => poly({ 0: n });
const cp = (r, i = 0) => [q(r), q(i)];
const cadd = (a, b) => [add(a[0], b[0]), add(a[1], b[1])];
const cmul = (a, b) => [sub(mul(a[0], b[0]), mul(a[1], b[1])), add(mul(a[0], b[1]), mul(a[1], b[0]))];
const cvalue = (p, z) => {
  let s = cp(0);
  for (const [k, c] of Object.entries(p)) {
    assert(+k >= 0); let power = cp(1);
    for (let i = 0; i < +k; i++) power = cmul(power, z);
    s = cadd(s, cmul([c, ZERO], power));
  }
  return s;
};

let passed = 0;
function check(slug, bindings, run) {
  // Bind the independently calculated result to the current lesson, so changing
  // a question or its answer requires updating and reviewing this check too.
  for (const prefix of ['', 'zh/']) {
    const file = path.join(root, prefix, 'alevel/a2-further-mathematics', `${slug}.md`);
    // Earlier valid tasks may now sit in the later-review section after a new retry.
    const source = fs.readFileSync(file, 'utf8').split('{#diagnose-and-retry}')[1];
    assert(source, `${slug}: diagnosis/retry section exists`);
    const compact = source.replace(/\s|\$/g, '');
    for (const binding of bindings) assert(compact.includes(binding.replace(/\s|\$/g, '')), `${slug}: source binding ${binding}`);
  }
  run();
  passed++;
  console.log(`Retry maths passed: ${slug}`);
}

check('roots-and-polynomials', ['z^2-(2+i)z+1+i=0', 'z^2-(3+2i)z+2+4i=0',
  'z^3-6z^2+13z-10=0', '2\\pm i'], () => {
  // Diagnosis: (z-1)(z-1-i), so the second root is 1, not 1-i.
  eq(cadd(cp(1, 1), cp(1)), cp(2, 1));
  eq(cmul(cp(1, 1), cp(1)), cp(1, 1));
  // The new retry must challenge the same complex-coefficient inference.
  eq(cadd(cp(1, 2), cp(2)), cp(3, 2));
  eq(cmul(cp(1, 2), cp(2)), cp(2, 4));
  const cubic = times(poly({ 1: 1, 0: -2 }), poly({ 2: 1, 1: -4, 0: 5 }));
  peq(cubic, poly({ 3: 1, 2: -6, 1: 13, 0: -10 }));
  for (const z of [cp(2), cp(2, 1), cp(2, -1)]) eq(cvalue(cubic, z), cp(0));
  eq(cadd(cadd(cp(2), cp(2, 1)), cp(2, -1)), cp(6));
  eq(cmul(cmul(cp(2), cp(2, 1)), cp(2, -1)), cp(10));
  eq(cubic[3], ONE, 'monic with real coefficients');
});

check('proof-by-induction', ['\\sum_{r=1}^n r2^{r-1}=(n-1)2^n+1', 'k\\ge1'], () => {
  // After factoring out 2^k, the induction step is a polynomial identity in k.
  peq(plus(poly({ 1: 1, 0: -1 }), poly({ 1: 1, 0: 1 })), poly({ 1: 2 }));
  eq(add(mul(q(0), q(2)), ONE), ONE, 'n=1 initial case');
  for (let n = 1; n <= 25; n++) {
    let s = 0n;
    for (let r = 1; r <= n; r++) s += BigInt(r) * 2n ** BigInt(r - 1);
    assert.equal(s, BigInt(n - 1) * 2n ** BigInt(n) + 1n);
  }
  // Samples corroborate the exact induction identity; they are not the proof.
});

check('finite-series', ['S_0=0', '\\frac1{n(n+1)}', 'n\\ge1'], () => {
  // S_n-S_(n-1), over the common denominator n(n+1), has numerator 1.
  peq(plus(times(X, X), scale(times(poly({ 1: 1, 0: -1 }), poly({ 1: 1, 0: 1 })), q(-1))), C(1));
  eq(div(ONE, q(2)), q(1, 2), 'first term agrees with S1-S0');
  for (let n = 1; n <= 25; n++) {
    let s = ZERO;
    for (let r = 1; r <= n; r++) s = add(s, q(1, r * (r + 1)));
    eq(s, q(n, n + 1));
  }
  // Diagnosis for the shift of two: the omitted pair is nonzero in general.
  eq(mul(q(1, 2), sub(q(1, 2), q(1, 3))), q(1, 12));
});

check('series-and-limits', ['e^{ax}-1-2x', 'a=2', 'a^2/2=2'], () => {
  const linearCoefficient = poly({ 1: 1, 0: -2 }); // polynomial in parameter a
  eq(value(linearCoefficient, q(2)), ZERO);
  eq(linearCoefficient[1], ONE, 'unique zero a=2');
  // Taylor coefficients are f^(r)(0)/r!: at a=2, x^2 coefficient is 4/2.
  eq(div(mul(q(2), q(2)), q(2)), q(2));
  // A surviving linear term divided by x^2 is c/x: opposite one-sided signs.
  eq(div(ONE, q(1, 10)), q(10));
  eq(div(ONE, q(-1, 10)), q(-10));
  assert.notDeepEqual(ZERO, q(2), 'the linear truncation cannot give the limit');
});

check('de-moivres-theorem', ['(z-1)^4=16', 'z^4-4z^3+6z^2-4z-15=0', '3,1+2i,-1,1-2i'], () => {
  const shifted = poly({ 1: 1, 0: -1 });
  const square = times(shifted, shifted);
  const quartic = plus(times(square, square), C(-16));
  peq(quartic, poly({ 4: 1, 3: -4, 2: 6, 1: -4, 0: -15 }));
  const roots = [cp(3), cp(-1), cp(1, 2), cp(1, -2)];
  for (const z of roots) {
    eq(cvalue(quartic, z), cp(0));
    eq(add(mul(sub(z[0], ONE), sub(z[0], ONE)), mul(z[1], z[1])), q(4));
  }
  assert.equal(new Set(roots.map(z => z.map(v => v.join('/')).join(','))).size, 4);
  // The four offsets 2,-2,2i,-2i have angular spacing pi/2 and radius 2.
  eq(cmul(cp(0, 1), cp(2)), cp(0, 2));
  eq(cmul(cp(0, 1), cp(0, 2)), cp(-2));
});

check('polar-coordinates', ['r=2', 'r=1+\\cos\\theta', '\\frac{5\\pi}{2}'], () => {
  // Exact Fourier coefficients: cos(theta)=(e^it+e^-it)/2.
  const cardioid = poly({ '-1': q(1, 2), 0: 1, 1: q(1, 2) });
  const squared = times(cardioid, cardioid);
  eq(squared[0], q(3, 2));
  // All nonconstant Fourier terms integrate to zero over [-pi,pi].
  eq(sub(q(4), squared[0]), q(5, 2), 'area coefficient of pi');
  // |cos(theta)|<=1 proves 0<=1+cos(theta)<=2: no radial switch.
  eq(sub(ONE, ONE), ZERO); eq(add(ONE, ONE), q(2));
  // Diagnosis: (R-r)^2 differs from R^2-r^2 at the admissible R=2,r=1.
  assert.notDeepEqual(mul(sub(q(2), ONE), sub(q(2), ONE)), sub(q(4), ONE));
});

check('inverse-trigonometric-functions', ['y^{\\prime}=3/(1+9x^2)', 'y(0)=\\pi/6', '(-\\pi/3,2\\pi/3)'], () => {
  // d(arctan(g))/dx = g'/(1+g^2), with g=3x.
  const g = scale(X, q(3));
  peq(derivative(g), C(3));
  peq(plus(C(1), times(g, g)), poly({ 0: 1, 2: 9 }));
  eq(add(q(-1, 2), q(1, 6)), q(-1, 3));
  eq(add(q(1, 2), q(1, 6)), q(2, 3));
  eq(add(ZERO, q(1, 6)), q(1, 6), 'initial value / pi');
  assert(Math.PI / 4 <= Math.PI / 2 && 3 * Math.PI / 4 > Math.PI / 2);
  assert(Math.abs(Math.sin(3 * Math.PI / 4) - Math.sin(Math.PI / 4)) < 1e-14);
});

check('arc-length-and-surface-area', ['(0,1)', '(3,5)', 'L=5', '30\\pi'], () => {
  const x = scale(X, q(3)), y = poly({ 0: 1, 1: 4 });
  eq(value(x, ZERO), ZERO); eq(value(y, ZERO), ONE);
  eq(value(x, ONE), q(3)); eq(value(y, ONE), q(5));
  const speedSquared = plus(times(derivative(x), derivative(x)), times(derivative(y), derivative(y)));
  peq(speedSquared, C(25));
  eq(integral01(C(5)), q(5), 'length');
  eq(mul(q(2), integral01(scale(y, q(5)))), q(30), 'curved area / pi; no caps');
  eq(value(y, ZERO), ONE); // positive, increasing radius on the full interval
  eq(value(derivative(y), ZERO), q(4));
  eq(mul(q(2), integral01(scale(X, q(3)))), q(3), 'diagnostic area / (pi sqrt(10))');
});

check('hyperbolic-functions', ['\\sinh^{-1}(kx)', 'k>0', 'k=2', 'x=2/3',
  '{#definition-retry}', '(2t-1)(t+2)'], () => {
  const sinh = scale(poly({ 1: 1, '-1': -1 }), q(1, 2));
  const cosh = scale(poly({ 1: 1, '-1': 1 }), q(1, 2));
  peq(plus(times(cosh, cosh), scale(times(sinh, sinh), q(-1))), C(1),
    'the identity holds as a Laurent polynomial in the nonzero exponential');
  for (const [exponential, s, c] of [[ONE, ZERO, ONE],
    [q(2), q(3, 4), q(5, 4)], [q(1, 2), q(-3, 4), q(5, 4)]]) {
    eq(value(sinh, exponential), s); eq(value(cosh, exponential), c);
  }
  const retryEquation = poly({ 2: 2, 1: 3, 0: -2 });
  peq(times(poly({ 1: 2, 0: -1 }), poly({ 1: 1, 0: 2 })), retryEquation);
  eq(value(retryEquation, q(1, 2)), ZERO); eq(value(retryEquation, q(-2)), ZERO);
  assert(q(-2)[0] < 0n, 'the second candidate cannot equal a real exponential');
  // sinh(y)=kx: implicit differentiation gives y'=k/cosh(y), hence y'(0)=k.
  eq(div(q(2), ONE), q(2));
  const expY = q(3), expMinusY = div(ONE, expY);
  const sinhY = div(sub(expY, expMinusY), q(2));
  const coshY = div(add(expY, expMinusY), q(2));
  eq(sinhY, q(4, 3)); eq(div(sinhY, q(2)), q(2, 3));
  eq(sub(mul(coshY, coshY), mul(sinhY, sinhY)), ONE);
  // y'=2/sqrt(1+4x^2)>0; its denominator increases strictly with |x|.
  const denominatorSquared = poly({ 0: 1, 2: 4 });
  peq(derivative(denominatorSquared), poly({ 1: 8 }));
  for (const x of [0, 1, 2, 10]) assert(Number(value(denominatorSquared, q(x))[0]) > 0);
  // y=ln(3) checked exactly above; unbounded log growth precludes an asymptote.
  assert(Math.asinh(2000) > Math.asinh(200));
  assert.equal(Math.asinh(-2), -Math.asinh(2));
  assert(Number.isNaN(Math.acosh(-2)), 'real acosh requires input >=1');
});

check('first-order-differential-equations', ['y=x^2+C/x', 'x>0', 'P(x)=1/x', 'Q(x)=3x', 'y=x^2-1/x'], () => {
  const homogeneous = poly({ '-1': 1 }), P = poly({ '-1': 1 });
  peq(plus(derivative(homogeneous), times(P, homogeneous)), {}, 'arbitrary C cancels identically');
  const base = poly({ 2: 1 });
  peq(plus(derivative(base), times(P, base)), scale(X, q(3)));
  const y = poly({ 2: 1, '-1': -1 });
  peq(plus(derivative(y), times(P, y)), scale(X, q(3)));
  eq(value(y, ONE), ZERO);
  eq(div(q(4), q(2)), q(2), 'normalise before integrating: mu=e^(2x)');
});

check('second-order-differential-equations', ['(A+Bx)e^{-x}', 'y^{\\prime\\prime}+2y^{\\prime}+y=0', '(1+x+3x^2)e^{-x}'], () => {
  // D(P e^-x) = (P'-P)e^-x; all calculations remain polynomial identities.
  const dExp = p => plus(derivative(p), scale(p, q(-1)));
  const operator = p => plus(plus(dExp(dExp(p)), scale(dExp(p), q(2))), p);
  peq(operator(C(1)), {}); peq(operator(X), {}, 'both independent CF terms');
  // For a monic D^2+aD+b, the coefficients force -2+a=0, 1-a+b=0.
  eq(add(q(-2), q(2)), ZERO); eq(add(sub(ONE, q(2)), ONE), ZERO);
  const full = poly({ 0: 1, 1: 1, 2: 3 });
  peq(operator(full), C(6));
  eq(value(full, ZERO), ONE); eq(value(dExp(full), ZERO), ZERO);
  peq(operator(scale(X, q(4))), {}, 'diagnosis: multiplying once still gives a CF term');
});

assert.equal(passed, 11);
console.log(`Further retry passed: ${passed} bilingual diagnosis/retry pairs; exact coefficient, substitution, differentiation and integral checks; no new dependencies.`);
