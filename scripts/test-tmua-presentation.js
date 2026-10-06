const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { execFileSync } = require('node:child_process');

const root = path.join(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'admissions/tmua-esat/index.html'), 'utf8').replace(/\r\n/g, '\n');
const original = execFileSync('git', ['show', 'e4641cdb9528adab65c37b1a019792192b8236ce:admissions/tmua-esat/index.html'], { cwd: root, encoding: 'utf8', maxBuffer: 8 * 1024 * 1024 }).replace(/\r\n/g, '\n');
for (const pattern of [/<main[^>]*>([\s\S]*?)<\/main>/, /const PROBLEMS = (.*);/, /<footer class="notes-credit">([\s\S]*?)<\/footer>/]) {
  assert(html.match(pattern)[1] === original.match(pattern)[1], 'Protected content must not change');
}
const map = JSON.parse(html.match(/const IMGMAP = (.*);/)[1]);
const sizes = JSON.parse(fs.readFileSync(path.join(root, '_data/tmua_figure_sizes.json'), 'utf8').replace(/^\uFEFF/, ''));
assert.equal(Object.keys(sizes).length, Object.keys(map).length);
const context = vm.createContext({ IMGMAP: map, FIGURE_SIZES: sizes });
vm.runInContext(html.slice(html.indexOf('function hydrateImgs('), html.indexOf('function wrapInlineMath(')), context);
for (const [key, size] of Object.entries(sizes)) {
  assert(fs.existsSync(path.join(root, map[key])));
  for (const question of [false, true]) {
    const image = {
      dataset: { fig: key },
      classList: { contains: () => question },
      removeAttribute(name) { assert.equal(name, 'data-fig'); delete this.dataset.fig; },
      set src(value) {
        assert(this.width > 0 && this.height > 0, 'Reserve space before requesting the image');
        assert.equal(this.loading, 'lazy');
        assert.equal(this.decoding, 'async');
        assert.equal(value, map[key]);
      }
    };
    context.images = { querySelectorAll: () => [image] };
    vm.runInContext('hydrateImgs(images)', context);
    assert(image.height <= (question ? 380 : 420));
    assert(Math.abs(image.width - image.height * size[0] / size[1]) <= 1 + size[0] / size[1]);
  }
}

const content = { dataset: {} };
let concise = false;
let refreshes = 0;
context.document = {
  body: { classList: { contains: () => concise } },
  getElementById: (id) => id === 'content-container' ? content : { dispatchEvent() {} }
};
context.generateTOC = () => refreshes++;
context.Event = Event;
vm.runInContext(html.slice(html.indexOf('function refreshNotesTOC('), html.indexOf("modeBtn.addEventListener('click', refreshNotesTOC)")), context);
for (const mode of [false, true]) {
  concise = mode;
  vm.runInContext('refreshNotesTOC()', context);
  const selectors = content.dataset.tocHeadings.split(', ');
  for (const tag of ['h2', 'h3']) {
    assert(selectors.includes('.ver-both ' + tag));
    assert(selectors.includes((mode ? '.ver-concise ' : '.ver-full ') + tag));
    assert(!selectors.includes((mode ? '.ver-full ' : '.ver-concise ') + tag));
  }
}
assert.equal(refreshes, 2);
assert.match(fs.readFileSync(path.join(root, 'assets/css/tmua-notes.css'), 'utf8'), /figure\.fig img, \.tmua-notes img\.qfig \{ height: auto; \}/);
console.log('Passed: protected content unchanged, 431 figure sizes, lazy loading and shared headings in both modes.');
