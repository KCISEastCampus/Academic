// Standalone source/mathematics checks; no Jekyll build or extra dependencies required.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = path.join(__dirname, '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8').replace(/\r\n/g, '\n');
const course = 'alevel/a2-further-mathematics';
const matrixText = read(`${course}/matrix-algebra.md`);
const eigenText = read(`${course}/eigenvalues-and-eigenvectors.md`);
const eye = n => Array.from({ length: n }, (_, i) => Array.from({ length: n }, (_, j) => +(i === j)));
const transpose = a => a[0].map((_, j) => a.map(row => row[j]));
const scale = (k, a) => a.map(row => row.map(x => k * x || 0));
const subtract = (a, b) => a.map((row, i) => row.map((x, j) => x - b[i][j]));
const multiply = (a, b) => a.map(row => transpose(b).map(col => row.reduce((sum, x, i) => sum + x * col[i], 0)));
const minor = (a, i, j) => a.filter((_, row) => row !== i).map(row => row.filter((_, col) => col !== j));
const determinant = a => a.length === 1 ? a[0][0] : a[0].reduce((sum, x, j) => sum + (-1) ** j * x * determinant(minor(a, 0, j)), 0);
const cofactor = a => a.map((row, i) => row.map((_, j) => (-1) ** (i + j) * determinant(minor(a, i, j))));
const column = v => v.map(x => [x || 0]);
const equal = (actual, expected, message) => assert.deepEqual(actual, expected, message);

function matrix(source, label, variables = {}) {
  const start = source.indexOf(`${label}\\begin{pmatrix}`);
  assert(start >= 0, `Missing lesson matrix: ${label}`);
  const body = source.slice(start + label.length + '\\begin{pmatrix}'.length).split('\\end{pmatrix}')[0];
  return body.split('\\\\').map(row => row.split('&').map(cell => {
    const entry = cell.trim();
    if (/^-?\d+$/.test(entry)) return Number(entry);
    assert(Object.hasOwn(variables, entry), `Unsupported matrix entry ${entry}`);
    return variables[entry];
  }));
}

function rank(a) {
  // Fraction-free elimination keeps these small integer fixtures exact.
  a = a.map(row => [...row]);
  let r = 0;
  for (let col = 0; col < a[0].length && r < a.length; col++) {
    const pivot = a.findIndex((row, i) => i >= r && row[col] !== 0);
    if (pivot < 0) continue;
    [a[r], a[pivot]] = [a[pivot], a[r]];
    for (let i = r + 1; i < a.length; i++) {
      const factor = a[i][col], denominator = a[r][col];
      a[i] = a[i].map((x, j) => denominator * x - factor * a[r][j]);
      assert(a[i].every(Number.isSafeInteger));
    }
    r++;
  }
  return r;
}

function eigenFamily(a, value, basis) {
  assert.equal(a.length - rank(subtract(a, scale(value, eye(a.length)))), basis.length, 'Complete eigenspace dimension');
  assert.equal(rank(transpose(basis)), basis.length, 'Independent basis vectors');
  for (const vector of basis) {
    assert(vector.some(x => x !== 0), 'Eigenvectors must be nonzero');
    equal(multiply(a, column(vector)), scale(value, column(vector)), 'Independent substitution into Av = lambda v');
  }
}

// Polynomial coefficients are in increasing powers; compare all coefficients, not trial roots.
const trim = a => { while (a.length > 1 && a.at(-1) === 0) a.pop(); return a; };
const add = (a, b) => trim(Array.from({ length: Math.max(a.length, b.length) }, (_, i) => (a[i] || 0) + (b[i] || 0)));
function product(a, b) {
  const result = Array(a.length + b.length - 1).fill(0);
  a.forEach((x, i) => b.forEach((y, j) => { result[i + j] += x * y; }));
  return trim(result);
}
function polynomialDeterminant(a) {
  if (a.length === 1) return trim([...a[0][0]]);
  return a[0].reduce((sum, entry, j) => add(sum, product(entry, polynomialDeterminant(minor(a, 0, j))).map(x => (-1) ** j * x)), [0]);
}
const characteristic = a => polynomialDeterminant(a.map((row, i) => row.map((x, j) => [-x, +(i === j)])));

equal(characteristic([[2, 1], [1, 2]]), [3, -4, 1], 'Polynomial helper self-check');
assert.equal(rank([[1, 2], [2, 4]]), 1, 'Rank helper self-check');
const I = eye(3), ex = [1, 0, 0], ey = [0, 1, 0], ez = [0, 0, 1];
const N = matrix(matrixText, 'N='), P = matrix(matrixText, 'P='), Q = matrix(matrixText, 'Q=');
equal(multiply(P, Q), matrix(matrixText, 'PQ='));
equal(multiply(Q, P), matrix(matrixText, 'QP='));
assert.equal(determinant(N), 5);
equal(cofactor(N), matrix(matrixText, 'C='));
const inverseNumerator = matrix(matrixText, 'N^{-1}=\\frac15');
equal(multiply(N, inverseNumerator), scale(5, I));
equal(multiply(inverseNumerator, N), scale(5, I));
assert.equal(multiply(N, cofactor(N))[0][1], 4, 'Untransposed cofactor candidate fails off-diagonal check');

// Both products below have degree at most two in t: three exact values prove each identity.
for (const t of [-2, 0, 2]) {
  const nt = matrix(matrixText, 'N_t=', { t });
  const numerator = matrix(matrixText, 'N_t^{-1}=\\frac1{1+2t}', { t, '-t': -t, '2t': 2 * t });
  assert.equal(determinant(nt), 1 + 2 * t);
  equal(multiply(nt, numerator), scale(1 + 2 * t, I));
  equal(multiply(numerator, nt), scale(1 + 2 * t, I));
}
assert.equal(determinant(matrix(matrixText, 'N_t=', { t: -0.5 })), 0, 'Excluded parameter is singular');
assert(matrixText.includes('t\\ne-\\frac12'), 'Retain parameter restriction in answer');

const reflectionNames = ['x=0', 'y=0', 'z=0', 'x=y', 'x=z', 'y=z'];
const normals = [ex, ey, ez, [1, -1, 0], [1, 0, -1], [0, 1, -1]];
const reflections = reflectionNames.map(name => matrix(matrixText, `S_{${name}}=`));
reflections.forEach((a, i) => {
  assert.equal(determinant(a), -1);
  equal(multiply(a, a), I);
  equal(multiply(a, column(normals[i])), scale(-1, column(normals[i])));
  equal(a, subtract(I, scale(2 / normals[i].reduce((sum, x) => sum + x * x, 0), multiply(column(normals[i]), [normals[i]]))));
});

// Integer-scaled Pythagorean pairs exercise non-quarter turns without floating-point trig.
for (const [c, s, d] of [[1, 0, 1], [0, 1, 1], [3, 4, 5], [5, 12, 13]]) {
  for (const [index, axis] of ['x', 'y', 'z'].entries()) {
    const a = matrix(matrixText, `R_${axis}(\\theta)=`, { c, s, '-s': -s });
    a[index][index] = d;
    assert.equal(determinant(a), d ** 3);
    equal(multiply(transpose(a), a), scale(d ** 2, I));
    equal(multiply(a, column([ex, ey, ez][index])), scale(d, column([ex, ey, ez][index])));
    if (c === 0 && s === 1) equal(multiply(a, column([ey, ez, ex][index])), column([ez, ex, ey][index]));
  }
  const rz = [[c, -s, 0], [s, c, 0], [0, 0, d]];
  const b = matrix(matrixText, 'B=', { c, s, '-s': -s });
  b[0][2] = d;
  equal(multiply(b, transpose(rz)), scale(d ** 2, reflections[4]), 'Right-side inverse removes angle');
}
const R = matrix(matrixText, 'R=R_y(-\\tfrac\\pi2)=');
equal(multiply(R, reflections[0]), matrix(matrixText, 'RS='));
equal(multiply(reflections[0], R), matrix(matrixText, 'SR='));
assert.notDeepEqual(multiply(R, reflections[0]), multiply(reflections[0], R), 'Composition order matters');
assert.equal(determinant(multiply(scale(2, I), multiply(reflections[0], N))), -40);
equal(multiply(reflections[5], reflections[5]), I, 'Reverse condition has unique inverse');
const T = matrix(matrixText, 'T=');
equal(T, multiply(reflections[2], reflections[3]));
eigenFamily(T, 1, [[1, 1, 0]]);
const D = matrix(matrixText, 'D='), D0 = matrix(matrixText, 'D_0='), H = matrix(matrixText, 'H=');
eigenFamily(D, 1, [ey, ez]);
eigenFamily(H, 1, [[0, 1, 1]]);
for (const t of [-2, 0, 3]) {
  equal(multiply(D, column([t, 1, 0])), column([2 * t, 1, 0]));
  equal(multiply(D0, column([t, 1, 0])), column([0, 1, 0]), 'Singular map collapses offset line');
  equal(multiply(D, column([t, 2, 3])), column([2 * t, 2, 3]));
  equal(multiply(D, column([1, t, 0])), column([2, t, 0]), 'Parallel image can be a different line');
  equal(multiply(H, column([t, 1, 1])), column([-t, 1, 1]));
}
assert.equal(determinant(H), 1);

const A = matrix(eigenText, 'A=');
equal(characteristic(A), [3, -4, 1]);
eigenFamily(A, 3, [[1, 1]]);
eigenFamily(A, 1, [[1, -1]]);
equal(multiply(A, column([1, 0])), column([2, 1]));
equal(multiply(A, column([2, 2])), column([6, 6]));
assert.notDeepEqual(multiply(A, column([1, -1])), scale(3, column([1, -1])), 'Correct direction, wrong eigenvalue');

// c occurs in one entry only, so the characteristic coefficients are affine in c.
for (const c of [0, 1, 2, 3]) {
  const m = matrix(eigenText, 'M_c=', { c });
  equal(characteristic(m), [-3 * c || 0, 4 * c + 3, -(c + 4), 1]);
  assert.equal(determinant(m), 3 * c);
}
const M2 = matrix(eigenText, 'M_c=', { c: 2 }), M3 = matrix(eigenText, 'M_c=', { c: 3 });
assert.equal(4 * 2 + 3, 11);
equal(characteristic(M2), [-6, 11, -6, 1]);
eigenFamily(M2, 1, [[0, 1, -1]]);
eigenFamily(M3, 3, [ex, [0, 1, 1]]);
eigenFamily(M3, 1, [[0, 1, -1]]);
const B = matrix(eigenText, 'B='), C = matrix(eigenText, 'C=');
equal(characteristic(B), [4, -4, 1]);
equal(characteristic(C), characteristic(B));
eigenFamily(B, 2, [[1, 0]]);
eigenFamily(C, 2, [[1, 0], [0, 1]]);
const F = matrix(eigenText, 'F='), J = matrix(eigenText, 'J=');
equal(characteristic(F), [-12, 16, -7, 1]);
equal(characteristic(J), characteristic(F));
eigenFamily(F, 2, [ex, ey]);
eigenFamily(J, 2, [ex]);
eigenFamily(F, 3, [ez]);
eigenFamily(J, 3, [ez]);
const G = matrix(eigenText, 'G='), K = matrix(eigenText, 'K=');
equal(characteristic(G), [0, -2, 1, 1]);
for (const [value, vector] of [[0, ex], [-2, ey], [1, ez]]) eigenFamily(G, value, [vector]);
equal(characteristic(K), [2, -1, -2, 1]);
for (const [value, vector] of [[1, [1, 1, 0]], [-1, [1, -1, 0]], [2, ez]]) eigenFamily(K, value, [vector]);
equal(multiply(K, column([2, 2, 1])), column([2, 2, 2]), 'Eigenvector direction does not guarantee an invariant offset line');
assert.equal(determinant(K), -2);

// Tie independent calculations above to the displayed results as well as their input matrices.
for (const result of [
  String.raw`\lambda^3-(c+4)\lambda^2+(4c+3)\lambda-3c`,
  String.raw`\lambda_1\lambda_2+\lambda_1\lambda_3+\lambda_2\lambda_3=4c+3=11`,
  String.raw`\lambda=2:\quad z=0,\quad`,
  String.raw`\mathbf v=\begin{pmatrix}a\\b\\0\end{pmatrix},\quad(a,b)\ne(0,0)`,
  String.raw`\lambda=2:\quad y=z=0,\quad`,
  String.raw`\lambda=3:\quad z=y,\quad`,
  String.raw`\mathbf v=\begin{pmatrix}a\\b\\b\end{pmatrix},\quad(a,b)\ne(0,0)`,
  String.raw`\det(\lambda I-K)=(\lambda^2-1)(\lambda-2)`,
]) assert(eigenText.includes(result), `Displayed result diverged from checked fixture: ${result}`);

for (const slug of ['matrix-algebra', 'eigenvalues-and-eigenvectors']) {
  const en = read(`${course}/${slug}.md`), zh = read(`zh/${course}/${slug}.md`);
  const math = text => text.match(/\$\$[\s\S]*?\$\$|\$[^$\r\n]+\$/g) || [];
  equal(math(zh), math(en), `${slug}: all mathematical fixtures also present in Chinese`);
}
console.log('Further matrices passed: source matrices, exact products/inverses, restrictions, rotations/reflections, volume, invariant/fixed/collapsed sets, characteristic coefficients, nonzero eigenvectors and repeated-root dimensions.');
