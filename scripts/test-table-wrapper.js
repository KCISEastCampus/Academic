const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const source = fs.readFileSync(path.join(__dirname, '../assets/js/table_wrapper.js'), 'utf8');

function harness({ resizeObserver = true, language = 'en', loading = false } = {}) {
  const timers = new Map();
  let timerId = 0;
  class Element {
    constructor(tag, attributes = {}) {
      this.tagName = tag.toUpperCase();
      this.attributes = { ...attributes };
      this.children = [];
      this.parentElement = null;
      this.listeners = {};
      this.style = {};
      this.clientWidth = 300;
      this.scrollWidth = 450;
      this.visible = true;
      this.textContent = '';
      this.classes = new Set();
      this.classList = { contains: key => this.classes.has(key), add: key => this.classes.add(key), remove: key => this.classes.delete(key) };
    }
    set className(value) { this.classes = new Set(value.split(' ')); }
    get parentNode() { return this.parentElement; }
    get id() { return this.getAttribute('id') || ''; }
    set id(value) { this.setAttribute('id', value); }
    get lang() { return this.getAttribute('lang') || ''; }
    setAttribute(key, value) { this.attributes[key] = value; }
    getAttribute(key) { return this.attributes[key] ?? null; }
    hasAttribute(key) { return Object.hasOwn(this.attributes, key); }
    removeAttribute(key) {
      delete this.attributes[key];
      // Model Chromium dropping focus when the active element loses tabindex.
      if (key === 'tabindex' && document.activeElement === this) document.activeElement = null;
    }
    insertBefore(node, reference) {
      if (node.parentElement) node.parentElement.children.splice(node.parentElement.children.indexOf(node), 1);
      this.children.splice(reference ? this.children.indexOf(reference) : this.children.length, 0, node);
      node.parentElement = this;
    }
    appendChild(node) { this.insertBefore(node, null); return node; }
    contains(node) { return node === this || this.children.some(child => child.contains(node)); }
    querySelectorAll(selector) {
      const tags = selector.toUpperCase().split(',').map(value => value.trim());
      return this.children.flatMap(child => [...(tags.includes(child.tagName) ? [child] : []), ...child.querySelectorAll(selector)]);
    }
    closest(selector) { return selector === '[lang]' && this.hasAttribute('lang') ? this : this.parentElement?.closest(selector); }
    get caption() { return this.children.find(child => child.tagName === 'CAPTION') || null; }
    getClientRects() { return this.visible && (!this.parentElement || this.parentElement.getClientRects().length) ? [{}] : []; }
    addEventListener(type, callback) { (this.listeners[type] ||= []).push(callback); }
    fire(type) { for (const callback of this.listeners[type] || []) callback.call(this, { target: this }); }
  }
  const html = new Element('html', { lang: language });
  const content = html.appendChild(new Element('main', { id: 'content-container' }));
  const document = new Element('document');
  document.documentElement = html;
  document.readyState = loading ? 'loading' : 'complete';
  document.getElementById = id => [html, ...html.querySelectorAll('main, table, caption, div, h2')].find(node => node.id === id) || null;
  document.createElement = tag => new Element(tag);
  document.fonts = new Element('fonts');
  document.fonts.ready = { then(callback) { document.fonts.finish = callback; } };
  const window = new Element('window');
  const observers = [];
  class Observer {
    constructor(callback) { this.callback = callback; this.observed = new Set(); observers.push(this); }
    observe(element, options) { this.observed.add(element); this.options = options; }
    unobserve(element) { this.observed.delete(element); }
    fire() { this.callback([]); }
  }
  const context = vm.createContext({
    document, window, MutationObserver: Observer, ...(resizeObserver ? { ResizeObserver: Observer } : {}),
    setTimeout(callback) { const id = ++timerId; timers.set(id, callback); return id; },
    clearTimeout(id) { timers.delete(id); }
  });
  function flush() {
    for (let turn = 0; timers.size; turn++) {
      assert.ok(turn < 10, 'Refresh must settle without polling');
      const callbacks = [...timers.values()]; timers.clear(); callbacks.forEach(callback => callback());
    }
  }
  function table({ caption, captionId, attributes, wrapperAttributes, width = 450, visible = true } = {}) {
    const parent = wrapperAttributes ? content.appendChild(new Element('div', wrapperAttributes)) : content;
    if (wrapperAttributes) { parent.className = 'table-wrapper'; parent.scrollWidth = width; parent.visible = visible; }
    const node = parent.appendChild(new Element('table', attributes));
    if (caption) { const c = node.appendChild(new Element('caption')); c.textContent = caption; if (captionId) c.id = captionId; }
    return node;
  }
  return {
    Element, content, document, window, observers, table, flush,
    start() { vm.runInContext(source, context); if (loading) document.fire('DOMContentLoaded'); },
    init() { vm.runInContext('initTableWrapper()', context); flush(); }
  };
}
function generated(wrapper) {
  return ['tabindex', 'role', 'aria-label', 'aria-labelledby'].map(name => wrapper.getAttribute(name));
}

const h = harness({ loading: true });
const heading = h.content.appendChild(new h.Element('h2')); heading.textContent = 'Comparing structures';
const captioned = h.table({ caption: 'Bond strength', captionId: 'existing-caption' });
const fallback = h.table();
const narrow = h.table({ wrapperAttributes: {}, width: 301 });
const author = h.table({ wrapperAttributes: { tabindex: '-1', role: 'group', 'aria-label': 'Author name' } });
const labelled = h.table({ attributes: { 'aria-labelledby': 'existing-heading' } });
const titled = h.table({ attributes: { 'aria-label': 'Existing table name' } });
const hidden = h.table({ wrapperAttributes: {}, visible: false });
h.start();
assert.deepEqual(generated(captioned.parentElement), ['0', 'region', null, 'existing-caption']);
assert.equal(fallback.parentElement.getAttribute('aria-label'), 'Table 2 — Comparing structures');
assert.deepEqual(generated(narrow.parentElement), [null, null, null, null], 'One pixel difference is not overflow');
assert.deepEqual(generated(author.parentElement), ['-1', 'group', 'Author name', null], 'Author attributes survive enhancement');
assert.equal(labelled.parentElement.getAttribute('aria-labelledby'), 'existing-heading');
assert.equal(titled.parentElement.getAttribute('aria-label'), 'Existing table name');
assert.deepEqual(generated(hidden.parentElement), [null, null, null, null], 'Hidden details must not create focus stops');
assert.equal(h.observers.length, 2);
const ro = h.observers[0];
assert.ok(ro.observed.has(captioned) && ro.observed.has(captioned.parentElement), 'Observe both table and container');
assert.equal(h.window.listeners.resize.length, 1);
for (let index = 0; index < 3; index++) h.init();
assert.equal(h.observers.length, 2, 'Repeated initialization shares observers');
assert.equal(captioned.parentElement.listeners.scroll.length, 1);
assert.equal(captioned.parentElement.parentElement, h.content, 'No duplicate wrapper');

// Resize/MathJax, details visibility, and ownership changes.
narrow.parentElement.scrollWidth = 302;
ro.fire(); h.flush();
assert.equal(narrow.parentElement.getAttribute('tabindex'), '0');
hidden.parentElement.visible = true;
h.content.fire('toggle'); h.flush();
assert.equal(hidden.parentElement.getAttribute('tabindex'), '0');
const wrapper = fallback.parentElement;
h.document.activeElement = wrapper;
wrapper.setAttribute('role', 'group'); // An author edits a script-owned attribute.
wrapper.setAttribute('aria-label', 'Replacement name');
wrapper.scrollWidth = 300;
ro.fire(); h.flush();
assert.deepEqual(generated(wrapper), ['-1', 'group', 'Replacement name', null]);
assert.equal(h.document.activeElement, wrapper, 'Fitting a focused wrapper retains focus without a sequential Tab stop');
h.document.activeElement = null;
wrapper.fire('blur'); h.flush();
assert.equal(wrapper.hasAttribute('tabindex'), false, 'Blur cleans the generated -1 tabindex');
wrapper.scrollWidth = 450;
ro.fire(); h.flush();
assert.equal(wrapper.getAttribute('role'), 'group');
assert.equal(wrapper.getAttribute('aria-label'), 'Replacement name');
author.parentElement.scrollWidth = 300;
h.window.fire('resize'); h.flush();
assert.deepEqual(generated(author.parentElement), ['-1', 'group', 'Author name', null]);

// Dynamic insertion and changing caption text keep names linked to visible content.
const added = h.table({ caption: 'Dynamic caption' });
h.observers[1].fire(); h.flush();
assert.ok(added.caption.id);
assert.notEqual(added.caption.id, captioned.caption.id);
assert.equal(added.parentElement.getAttribute('aria-labelledby'), added.caption.id);
added.caption.textContent = 'Updated caption';
h.observers[1].fire(); h.flush();
assert.equal(added.parentElement.getAttribute('aria-labelledby'), added.caption.id);
const removedCaption = added.caption;
added.children.splice(added.children.indexOf(removedCaption), 1);
h.observers[1].fire(); h.flush();
assert.equal(added.parentElement.getAttribute('aria-labelledby'), null, 'Removed captions leave no broken naming reference');
assert.match(added.parentElement.getAttribute('aria-label'), /^Table \d+ — Comparing structures$/);
const detachedWrapper = added.parentElement;
h.content.children.splice(h.content.children.indexOf(detachedWrapper), 1);
detachedWrapper.parentElement = null;
h.observers[1].fire(); h.flush();
assert.equal(ro.observed.has(added), false, 'Removed tables release resize observation');
assert.equal(ro.observed.has(detachedWrapper), false);
assert.deepEqual(generated(detachedWrapper), [null, null, null, null]);
h.content.appendChild(detachedWrapper);
h.observers[1].fire(); h.flush();
assert.equal(ro.observed.has(added), true);
assert.equal(detachedWrapper.listeners.scroll.length, 1, 'Reinserted containers do not duplicate scroll handlers');
const idCollision = h.table({ caption: 'Reserved ID', captionId: 'table-caption-2' });
const nextCaption = h.table({ caption: 'Another caption' });
h.observers[1].fire(); h.flush();
assert.notEqual(nextCaption.caption.id, idCollision.caption.id);
assert.ok(!h.observers[1].options.attributeFilter.includes('tabindex'), 'Generated wrapper attributes cannot self-trigger the observer');
assert.ok(!h.observers[1].options.attributeFilter.includes('id'));
wrapper.fire('touchstart'); assert.equal(wrapper.style.webkitOverflowScrolling, 'touch');
wrapper.scrollLeft = 20; wrapper.fire('scroll'); h.flush(); assert.equal(wrapper.classList.contains('scrolled'), true);
wrapper.scrollLeft = 0; wrapper.fire('scroll'); h.flush(); assert.equal(wrapper.classList.contains('scrolled'), false);

const fallbackHarness = harness({ resizeObserver: false, language: 'zh-CN' });
const chinese = fallbackHarness.table();
const chineseSecond = fallbackHarness.table();
fallbackHarness.start();
assert.equal(chinese.parentElement.getAttribute('aria-label'), '表格 1');
assert.equal(chineseSecond.parentElement.getAttribute('aria-label'), '表格 2');
chinese.parentElement.scrollWidth = 300;
fallbackHarness.window.fire('resize'); fallbackHarness.flush();
assert.equal(chinese.parentElement.hasAttribute('tabindex'), false);
chinese.parentElement.scrollWidth = 450;
fallbackHarness.document.fonts.finish(); fallbackHarness.flush();
assert.equal(chinese.parentElement.getAttribute('tabindex'), '0');
chinese.parentElement.scrollWidth = 300;
fallbackHarness.document.fonts.fire('loadingdone'); fallbackHarness.flush();
assert.equal(chinese.parentElement.hasAttribute('tabindex'), false);
// Focus survives fitting, returning overflow restores the Tab stop, and author
// overrides made during the deferred tabindex cleanup remain untouched.
const focusHarness = harness();
const focusTable = focusHarness.table();
focusHarness.start();
const focusWrapper = focusTable.parentElement;
focusHarness.document.activeElement = focusWrapper;
focusWrapper.scrollWidth = 300;
focusHarness.window.fire('resize'); focusHarness.flush();
assert.deepEqual(generated(focusWrapper), ['-1', null, null, null]);
assert.equal(focusHarness.document.activeElement, focusWrapper);
focusWrapper.scrollWidth = 450;
focusHarness.window.fire('resize'); focusHarness.flush();
assert.equal(focusWrapper.getAttribute('tabindex'), '0', 'Overflow returning before blur restores normal entry');
focusWrapper.scrollWidth = 300;
focusHarness.window.fire('resize'); focusHarness.flush();
focusWrapper.setAttribute('tabindex', '3');
focusHarness.document.activeElement = null;
focusWrapper.fire('blur'); focusHarness.flush();
assert.equal(focusWrapper.getAttribute('tabindex'), '3', 'Blur cleanup preserves author replacement');
assert.equal(focusWrapper.listeners.blur.length, 1);

// Chromium can report nonempty rectangles for closed details descendants.
const detailsHarness = harness();
const details = detailsHarness.content.appendChild(new detailsHarness.Element('details'));
const summary = details.appendChild(new detailsHarness.Element('summary'));
const bodyTable = detailsHarness.table({ wrapperAttributes: {} });
details.appendChild(bodyTable.parentElement);
const summaryTable = detailsHarness.table({ wrapperAttributes: {} });
summary.appendChild(summaryTable.parentElement);
const secondSummary = details.appendChild(new detailsHarness.Element('summary'));
const secondSummaryTable = detailsHarness.table({ wrapperAttributes: {} });
secondSummary.appendChild(secondSummaryTable.parentElement);
const nestedDetails = details.appendChild(new detailsHarness.Element('details', { open: '' }));
const nestedTable = detailsHarness.table({ wrapperAttributes: {} });
nestedDetails.appendChild(nestedTable.parentElement);
detailsHarness.start();
assert.equal(bodyTable.parentElement.getClientRects().length, 1, 'Reproduce retained layout rectangles');
assert.deepEqual(generated(bodyTable.parentElement), [null, null, null, null], 'Closed details body stays unenhanced despite its rectangles');
assert.equal(summaryTable.parentElement.getAttribute('tabindex'), '0', 'First summary content remains visible');
assert.equal(secondSummaryTable.parentElement.hasAttribute('tabindex'), false, 'Only the first direct summary is exempt');
assert.equal(nestedTable.parentElement.hasAttribute('tabindex'), false, 'An open nested disclosure cannot bypass a closed ancestor');
details.setAttribute('open', '');
detailsHarness.content.fire('toggle'); detailsHarness.flush();
assert.equal(bodyTable.parentElement.getAttribute('tabindex'), '0', 'Opening details enables an overflowing body table');
assert.equal(nestedTable.parentElement.getAttribute('tabindex'), '0');
details.removeAttribute('open');
detailsHarness.content.fire('toggle'); detailsHarness.flush();
assert.deepEqual(generated(bodyTable.parentElement), [null, null, null, null], 'Closing details removes only generated accessibility attributes');
assert.equal(summaryTable.parentElement.getAttribute('tabindex'), '0');
console.log('Table wrappers passed: measured overflow, naming/localization, author ownership, idempotency, resize/observers, details, dynamic captions, font fallback and native touch/scroll hooks.');
