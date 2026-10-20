const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const input = new EventTarget();
input.value = 'child';
const clear = new EventTarget();
clear.style = {};
const item = (parent) => ({
  style: {},
  classList: { contains: () => false },
  parentElement: parent ? { closest: () => parent } : null
});
const parent = item();
const child = item(parent);
const sibling = item(parent);
const links = [parent, child, sibling].map((entry, index) => ({
  textContent: ['Parent', 'Child', 'Sibling'][index],
  getAttribute: () => '',
  closest: () => entry
}));
const content = { dataset: {}, querySelectorAll: () => [] };
const toc = { contains: () => false };
const document = new EventTarget();
document.getElementById = (id) => ({
  tocSearch: input, tocSearchClear: clear, 'content-container': content
})[id];
document.querySelector = () => toc;
const context = vm.createContext({ document, AbortController, Event });
vm.runInContext(fs.readFileSync(path.join(__dirname, '../assets/js/toc_generator.js'), 'utf8'), context);
context.links = links;
vm.runInContext('initTOCSearch(links);', context);
const globalSearchShortcut = new Event('keydown', { cancelable: true });
Object.assign(globalSearchShortcut, { key: 'k', ctrlKey: true });
document.dispatchEvent(globalSearchShortcut);
assert.equal(globalSearchShortcut.defaultPrevented, false, 'TOC must not consume the shared global search shortcut');
input.dispatchEvent(new Event('input'));
assert.equal(parent.style.display, '', 'Matched children keep their ancestors visible');
assert.equal(child.style.display, '');
assert.equal(sibling.style.display, 'none');
input.value = '';
input.dispatchEvent(new Event('input'));
assert.equal(sibling.style.display, '');

vm.runInContext('generateTOC();', context);
const firstSignal = vm.runInContext('tocControllers.get(document.getElementById("content-container")).signal', context);
vm.runInContext('generateTOC();', context);
assert.equal(firstSignal.aborted, true, 'Refreshing cancels previous listeners and observers');
function classes() {
  const values = new Set();
  return {
    add: value => values.add(value),
    remove: value => values.delete(value),
    contains: value => values.has(value)
  };
}
let focused;
const drawer = {
  classList: classes(),
  setAttribute(key, value) { this[key] = value; },
  contains: element => element === drawerInput,
  querySelectorAll: () => []
};
const toggle = {
  classList: classes(),
  querySelector: () => null,
  setAttribute(key, value) { this[key] = value; },
  focus() { focused = 'toggle'; document.activeElement = this; }
};
const drawerInput = { focus() { focused = 'search'; document.activeElement = this; } };
const navLinks = { classList: classes() };
navLinks.classList.add('show');
const navToggle = { setAttribute(key, value) { this[key] = value; } };
const background = [{}, {}, {}, {}];
document.body = { style: {}, classList: classes() };
document.querySelectorAll = selector => {
  assert.equal(selector, '.subject-header, #content-container, footer, .back-to-top');
  return background;
};
document.getElementById = id => ({ toc: drawer, tocToggle: toggle, tocSearch: drawerInput, siteNavLinks: navLinks, siteNavToggle: navToggle })[id];
context.window = { innerWidth: 390 };
document.documentElement = { lang: 'zh-CN' };
const tree = [{ id: 'parent', text: 'Parent', level: 2, children: [{ id: 'child', text: 'Child', level: 3, children: [] }] }];
context.tree = tree;
assert.match(vm.runInContext('renderTOCTree(tree, true)', context), /has-children collapsed/);
assert.match(vm.runInContext('renderTOCTree(tree, true)', context), /aria-expanded="false"/);
assert.match(vm.runInContext('renderTOCTree(tree)', context), /has-children expanded/);
vm.runInContext('toggleTOC(true);', context);
assert.equal(drawer.inert, false);
assert.equal(navLinks.classList.contains('show'), false, 'Contents close the overlapping site navigation');
assert.equal(navToggle['aria-expanded'], 'false');
assert(background.every(element => element.inert), 'Opened drawer blocks focus on obscured content');
assert.equal(document.body.classList.contains('toc-open'), true);
assert.equal(document.body.style.overflow, 'hidden');
assert.equal(toggle['aria-expanded'], 'true');
assert.equal(focused, 'search');
vm.runInContext('toggleTOC(false);', context);
assert.equal(drawer.inert, true, 'Closed mobile drawer is outside the keyboard path');
assert(background.every(element => !element.inert));
assert.equal(document.body.classList.contains('toc-open'), false);
assert.equal(document.body.style.overflow, '');
assert.equal(toggle['aria-expanded'], 'false');
assert.equal(focused, 'toggle');
context.window.innerWidth = 1280;
vm.runInContext('toggleTOC(false);', context);
assert.equal(drawer.inert, false, 'Desktop contents remain keyboard-accessible');
console.log('TOC passed: nested search, refresh cleanup, mobile backdrop, background focus exclusion and focus restoration.');
