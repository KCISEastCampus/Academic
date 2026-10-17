const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');

class Element extends EventTarget {
  constructor() {
    super();
    this.dataset = {};
    this.style = {};
    this.attributes = {};
    this.isConnected = true;
    const classes = new Set();
    this.classList = { add: value => classes.add(value), remove: value => classes.delete(value),
      toggle(value, enabled) { if (enabled) classes.add(value); else classes.delete(value); },
      contains: value => classes.has(value) };
  }
  setAttribute(name, value) { this.attributes[name] = value; }
  removeAttribute(name) { delete this[name]; }
  closest(selector) { return this.parents?.[selector] || null; }
  before(element) { this.wrapper = element; }
  appendChild(element) { this.child = element; }
  focus() { document.activeElement = this; }
  getBoundingClientRect() { return { width: 300 }; }
  showModal() { this.open = true; }
  close() { this.open = false; this.dispatchEvent(new Event('close')); }
}

const image = new Element();
image.alt = 'Diagram with unknown X';
image.src = 'placeholder.svg';
image.dataset = { lazyPending: 'true', src: 'question.png' };
const linked = new Element();
linked.parents = { 'a, button': new Element() };
const modal = new Element();
const enlarged = new Element();
const close = new Element();
const zoom = new Element();
const document = new EventTarget();
document.documentElement = { lang: 'zh-CN' };
document.body = new Element();
document.body.insertAdjacentHTML = (position, source) => {
  assert(source.includes('<dialog'));
  assert(source.includes('autofocus'));
  document.created = true;
};
document.getElementById = id => ({
  imageModalOverlay: document.created ? modal : null,
  imageModalImg: enlarged,
  imageModalClose: close,
  imageModalZoom: zoom,
  'content-container': { querySelectorAll: () => [image, linked] }
})[id];
document.createElement = () => new Element();
const source = fs.readFileSync(require('node:path').join(__dirname, '../assets/js/image_modal.js'), 'utf8');
vm.runInNewContext(source, { document, setTimeout: fn => fn() });
document.dispatchEvent(new Event('DOMContentLoaded'));
const trigger = image.wrapper;
assert(trigger.attributes['aria-label'].includes(image.alt));
assert.equal(trigger.attributes['aria-haspopup'], 'dialog');
assert.equal(linked.wrapper, undefined, 'Existing image links remain intact');
for (const overflow of ['', 'clip', 'hidden']) {
  document.body.style.overflow = overflow;
  trigger.dispatchEvent(new Event('click'));
  assert.equal(modal.open, true);
  assert.equal(enlarged.src, 'question.png', 'Pending lazy images enlarge the original, not the placeholder');
  assert.equal(enlarged.alt, image.alt);
  assert.equal(document.activeElement, close);
  assert.equal(document.body.style.overflow, 'hidden');
  zoom.dispatchEvent(new Event('click'));
  assert.equal(zoom.attributes['aria-pressed'], 'true');
  assert.equal(enlarged.style.width, '1200px');
  assert.equal(modal.classList.contains('is-zoomed'), true);
  assert.equal(zoom.textContent, '适合屏幕');
  zoom.dispatchEvent(new Event('click'));
  assert.equal(zoom.attributes['aria-pressed'], 'false');
  assert.equal(enlarged.style.width, '');
  assert.equal(modal.classList.contains('is-zoomed'), false);
  zoom.dispatchEvent(new Event('click'));
  close.dispatchEvent(new Event('click'));
  assert.equal(modal.open, false);
  assert.equal(document.activeElement, trigger);
  assert.equal(document.body.style.overflow, overflow, 'Closing preserves another component’s previous scroll lock');
  assert.equal(enlarged.src, undefined);
  assert.equal(enlarged.style.width, '');
  assert.equal(modal.classList.contains('is-zoomed'), false);
  assert.equal(zoom.attributes['aria-pressed'], 'false');
}
document.dispatchEvent(new Event('DOMContentLoaded'));
assert.equal(image.wrapper, trigger, 'Repeated initialization does not duplicate triggers');
console.log('Image modal passed: named native dialog, original image, link preservation, focus restoration and scroll ownership. Browser checks cover native keyboard behaviour.');
