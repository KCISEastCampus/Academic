const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { spawnSync } = require('node:child_process');

const root = fs.mkdtempSync(path.join(os.tmpdir(), 'academic-tmua-import-'));
const target = path.join(root, 'admissions/tmua-esat/index.html');
const sourcePath = path.join(root, 'source.html');
const importer = path.join(root, 'scripts/import-tmua-notes.js');
const problems = Object.fromEntries(Array.from({ length: 598 }, (_, id) => [id, { answer: 'source answer' }]));
const main = '<p>source notes</p>' + Object.keys(problems).map(id => `<button data-pid="${id}"></button>`).join('');
const source = `<title>Import test</title><div class="sub">Synthetic data</div><main>${main}</main><aside id="panel">Panel</aside><footer>Credit</footer><script>const PROBLEMS = ${JSON.stringify(problems)};\n</script>`;

function run(check = false) {
  const result = spawnSync(process.execPath, [importer, sourcePath, ...(check ? ['--check'] : [])], { encoding: 'utf8' });
  if (result.error) throw result.error;
  return result;
}

try {
  fs.mkdirSync(path.dirname(importer), { recursive: true });
  fs.copyFileSync(path.join(__dirname, 'import-tmua-notes.js'), importer);
  fs.writeFileSync(sourcePath, source);
  let result = run();
  assert.equal(result.status, 0, result.stderr);
  const imported = fs.readFileSync(target, 'utf8');
  for (const check of [false, true]) {
    result = run(check);
    assert.equal(result.status, 0, result.stderr);
    assert.equal(fs.readFileSync(target, 'utf8'), imported);
  }

  const correctedTargets = [
    ['notes', imported.replace('source notes', 'corrected notes')],
    ['answers', imported.replace('source answer', 'corrected answer')],
  ];
  for (const [field, corrected] of correctedTargets) {
    for (const check of [false, true]) {
      fs.writeFileSync(target, corrected);
      result = run(check);
      assert.notEqual(result.status, 0, `${field}: refuse overwriting corrections`);
      assert.match(result.stderr, /Existing academic (notes|answers) differ/);
      assert.equal(fs.readFileSync(target, 'utf8'), corrected, `${field}: leave target intact`);
    }
  }

  // Line endings and JSON formatting are not changes to the protected content.
  const reformatted = imported.replace(JSON.stringify(problems), JSON.stringify(problems, null, 2)).replace(/\n/g, '\r\n');
  fs.writeFileSync(target, reformatted);
  result = run();
  assert.equal(result.status, 0, result.stderr);
  assert.equal(fs.readFileSync(target, 'utf8'), imported);

  for (const malformed of [imported.replace('<main>', '<section>'), imported.replace('const PROBLEMS = {', 'const PROBLEMS = invalid{')]) {
    fs.writeFileSync(target, malformed);
    result = run();
    assert.notEqual(result.status, 0, 'Refuse an unreadable protected section');
    assert.equal(fs.readFileSync(target, 'utf8'), malformed);
  }
  console.log('Passed: first/repeated import, check mode, protected notes/answers, formatting tolerance, and malformed-target refusal.');
} finally {
  assert.equal(path.dirname(root), path.resolve(os.tmpdir()));
  assert(path.basename(root).startsWith('academic-tmua-import-'));
  fs.rmSync(root, { recursive: true, force: true });
}
