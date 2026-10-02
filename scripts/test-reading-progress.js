const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const source = fs.readFileSync(path.join(__dirname, '../assets/js/toc_generator.js'), 'utf8');

for (const supportsObserver of [true, false]) {
  const state = { top: 300, height: 2000, reads: 0 };
  const events = new Map();
  const frames = [];
  const observed = [];
  let onResize;
  const window = {
    innerHeight: 500,
    pageYOffset: 100,
    addEventListener(type, callback) { events.set(type, callback); },
    requestAnimationFrame(callback) { frames.push(callback); }
  };
  const bar = { style: {} };
  const text = {};
  const body = {};
  const content = {
    offsetTop: 56, // A positioned ancestor makes this differ from document coordinates.
    get offsetHeight() { state.reads++; return state.height; },
    getBoundingClientRect() { state.reads++; return { top: state.top - window.pageYOffset }; }
  };
  const document = {
    body,
    documentElement: { scrollTop: 0 },
    getElementById(id) {
      return { readingProgress: bar, progressText: text, 'content-container': content }[id];
    }
  };
  class ResizeObserver {
    constructor(callback) { onResize = callback; }
    observe(element) { observed.push(element); }
  }
  if (supportsObserver) window.ResizeObserver = ResizeObserver;
  vm.runInNewContext(source + '\ninitReadingProgress();', { window, document, ResizeObserver });
  const progress = () => parseFloat(bar.style.width);
  const scroll = (position) => {
    window.pageYOffset = position;
    events.get('scroll')();
    while (frames.length) frames.shift()();
  };

  assert.equal(progress(), 0, 'The header is outside the reading area');
  scroll(1050);
  assert.equal(progress(), 50);
  assert.equal(text.textContent, '50%');

  if (supportsObserver) {
    assert.deepEqual(observed, [content, body]);
    const previousReads = state.reads;
    scroll(1100);
    scroll(1050);
    assert.equal(state.reads, previousReads, 'Scrolling uses cached geometry');
  }

  state.height = 3000; // MathJax, an image or a solution expands the article.
  if (supportsObserver) onResize();
  else scroll(1050);
  assert.equal(progress(), 30);

  state.top = 400; // A header resize moves the article without resizing it.
  if (supportsObserver) onResize();
  else scroll(1050);
  assert.equal(progress(), 26);

  window.innerHeight = 400;
  events.get('resize')();
  assert.equal(progress(), 25);

  scroll(0);
  assert.equal(progress(), 0);
  scroll(5000);
  assert.equal(progress(), 100);
  state.height = 100;
  if (supportsObserver) onResize();
  scroll(400);
  assert.equal(progress(), 100, 'An article shorter than the viewport is complete');
}

console.log('Reading progress passed: document coordinates, cached scrolling, dynamic content, resize and observer fallback.');
