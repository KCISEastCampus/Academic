const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const root = path.join(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'admissions/tmua-esat/index.html'), 'utf8');
assert(html.indexOf('typesetClear?.([panelBody])') < html.indexOf('panelBody.innerHTML ='));
const listeners = {};
const frames = [];
const calls = [];
const formulas = Array.from({length: 30}, (_, id) => ({id, getClientRects: () => [1], matches: () => false, querySelectorAll: () => []}));
const panel = {matches: () => false, querySelectorAll: () => []};
let observer;
const context = vm.createContext({
  window: {}, console,
  requestAnimationFrame: callback => frames.push(callback),
  IntersectionObserver: class {
    constructor(callback) { this.callback = callback; this.observed = new Set(); observer = this; }
    observe(root) { this.observed.add(root); }
    unobserve(root) { this.observed.delete(root); }
  },
  document: {
    readyState: 'complete',
    addEventListener: (name, callback) => { listeners[name] = callback; },
    querySelectorAll: selector => selector.startsWith('main') ? formulas : [panel]
  }
});
vm.runInContext(fs.readFileSync(path.join(root, 'assets/js/tmua-math.js'), 'utf8'), context);
(async () => {
  let updates = 0;
  await context.renderNotesMath(() => updates++);
  assert.equal(updates, 1, 'Native MathML works before engine loads');
  let active = 0;
  context.MathJax = context.window.MathJax = {
    async typesetPromise(roots) {
      assert.equal(++active, 1, 'Serialize rendering');
      calls.push(roots);
      await Promise.resolve();
      active--;
    }
  };
  listeners.mathjaxLoaded();
  assert.equal(calls.length, 0, 'Startup must not typeset entire versions');
  observer.callback(formulas.map(target => ({target, isIntersecting: true})));
  while (frames.length) {
    frames.shift()();
    await context.renderNotesMath();
    await Promise.resolve();
  }
  assert.deepEqual(calls.map(batch => batch.length), [12, 12, 6]);
  assert.equal(observer.observed.size, 0, 'Reuse rendered formulas on later switches');
  const hidden = {getClientRects: () => []};
  observer.observe(hidden);
  observer.callback([{target: hidden, isIntersecting: true}]);
  frames.shift()();
  await context.renderNotesMath();
  await Promise.resolve();
  assert.equal(calls.length, 3, 'Discard formulas hidden by a mode switch');
  await Promise.all([context.renderNotesMath(() => updates++), context.renderNotesMath(() => updates++)]);
  assert.equal(updates, 3);
  assert.equal(calls.at(-1)[0], panel);
  let scrollable;
  const wrapper = {
    clientWidth: 27,
    querySelector: () => ({getBoundingClientRect: () => ({width: 23})}),
    classList: {toggle: (_, value) => { scrollable = value; }}
  };
  context.fitNotesMath(wrapper);
  assert.equal(scrollable, false, 'Short superscripts must not become scroll containers');
  wrapper.querySelector = () => ({getBoundingClientRect: () => ({width: 500})});
  context.fitNotesMath(wrapper);
  assert.equal(scrollable, true, 'Long formulas retain horizontal scrolling');
  assert(!listeners.click, 'Mode switch must not scan thousands of formulas');
  for (const readyState of ['complete', 'loading']) {
    let observers = 0;
    const startupListeners = {};
    const readyMathJax = {...context.MathJax, startup: {promise: Promise.resolve()}};
    const early = vm.createContext({
      ...context,
      window: {MathJax: readyMathJax}, MathJax: readyMathJax,
      document: {...context.document, readyState, addEventListener: (name, callback) => { startupListeners[name] = callback; }},
      IntersectionObserver: class {
        constructor() { observers++; }
        observe() {}
      }
    });
    vm.runInContext(fs.readFileSync(path.join(root, 'assets/js/tmua-math.js'), 'utf8'), early);
    await Promise.resolve();
    if (readyState === 'loading') {
      assert.equal(observers, 0, 'Wait for formulas to exist in the DOM');
      early.document.readyState = 'complete';
      startupListeners.DOMContentLoaded();
    }
    assert.equal(observers, 1, 'Initialize even if mathjaxLoaded was missed');
    startupListeners.mathjaxLoaded();
    assert.equal(observers, 1, 'Late events must not initialize twice');
  }
  console.log('Passed: viewport batches, cached rendering, serial panels and early/late MathJax startup.');
})().catch(error => { console.error(error); process.exitCode = 1; });
