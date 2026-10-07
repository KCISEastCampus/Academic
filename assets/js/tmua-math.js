let notesMathQueue = Promise.resolve();
let notesMathObserver;
const pendingNotesMath = new Set();
let notesMathScheduled = false;
function fitNotesMath(wrapper) {
  const formula = wrapper.querySelector('mjx-container, math');
  wrapper.classList.toggle('notes-math-overflow', Boolean(formula && formula.getBoundingClientRect().width > wrapper.clientWidth));
}
function fitNotesMathRoot(root) {
  if (root.matches('.notes-inline-math')) fitNotesMath(root);
  else root.querySelectorAll('.notes-inline-math').forEach(fitNotesMath);
}
const notesMathResizeObserver = typeof ResizeObserver === 'function'
  ? new ResizeObserver(entries => entries.forEach(entry => fitNotesMathRoot(entry.target))) : null;
function watchNotesMath(root) {
  fitNotesMathRoot(root);
  notesMathResizeObserver?.observe(root);
}

function scheduleNotesMath() {
  if (notesMathScheduled || !pendingNotesMath.size) return;
  notesMathScheduled = true;
  requestAnimationFrame(() => {
    const batch = [...pendingNotesMath].slice(0, 12);
    batch.forEach(root => pendingNotesMath.delete(root));
    notesMathQueue = notesMathQueue.then(async () => {
      const visible = batch.filter(root => root.getClientRects().length);
      if (visible.length) {
        await MathJax.typesetPromise(visible);
        visible.forEach(root => {
          notesMathObserver.unobserve(root);
          watchNotesMath(root);
        });
      }
    }).catch(error => console.error('Notes MathJax rendering failed', error)).finally(() => {
      notesMathScheduled = false;
      scheduleNotesMath();
    });
  });
}
function renderNotesMath(update) {
  if (!window.MathJax?.typesetPromise) {
    if (update) update();
    return notesMathQueue;
  }
  if (update) {
    notesMathQueue = notesMathQueue.then(async () => {
      update();
      const roots = [...document.querySelectorAll('#panel.open #panel-body')];
      await MathJax.typesetPromise(roots);
      roots.forEach(watchNotesMath);
    }).catch(error => console.error('Notes MathJax rendering failed', error));
    return notesMathQueue;
  }
  if (!notesMathObserver) {
    notesMathObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) pendingNotesMath.add(entry.target);
        else pendingNotesMath.delete(entry.target);
      });
      scheduleNotesMath();
    }, {rootMargin: '300px 0px'});
    document.querySelectorAll('main .notes-inline-math, main .notes-block-math')
      .forEach(root => notesMathObserver.observe(root));
  }
  return notesMathQueue;
}
document.addEventListener('mathjaxLoaded', () => {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => renderNotesMath(), {once: true});
  } else {
    renderNotesMath();
  }
});
