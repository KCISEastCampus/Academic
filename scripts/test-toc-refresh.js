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
const toc = {};
const document = new EventTarget();
document.getElementById = (id) => ({
  tocSearch: input, tocSearchClear: clear, 'content-container': content
})[id];
document.querySelector = () => toc;
const context = vm.createContext({ document, AbortController, Event });
vm.runInContext(fs.readFileSync(path.join(__dirname, '../assets/js/toc_generator.js'), 'utf8'), context);
context.links = links;
vm.runInContext('initTOCSearch(links);', context);
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
console.log('TOC passed: nested search, clear and refresh cleanup.');
