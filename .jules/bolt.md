## 2026-09-06 - DOM Querying in Scroll Events
**Learning:** Found an anti-pattern in `assets/js/interactive_effects.js` where `querySelector` was being called inside scroll event handlers (`scrollProgress.update` and `backToTop.updatePosition`). Even with a 16ms throttle, running DOM queries on every scroll tick causes layout thrashing and wastes CPU cycles, as querying the DOM is a synchronous O(N) operation.
**Action:** Always cache DOM elements that don't change during initialization rather than querying them repeatedly inside high-frequency event handlers (like scroll, resize, or mousemove).

## 2026-09-06 - Fallback Search Performance
**Learning:** Precomputing lowercase variants of object properties (e.g., `title`, `content`) during the data fetch/load phase significantly improves the performance of client-side filtering (e.g., `Array.prototype.filter`). It eliminates repeated string allocations inside the filter loop. Benchmark showed ~42-47% faster execution time for 1000 iterations over 10,000 mock items.
**Action:** Precompute lowercase variants once at data-load time instead of calling `toLowerCase()` per item per keystroke in the filter loop.

## 2026-09-05 - Pagefind search speed up
**Learning:** Pagefind returns a list of results where each result data must be fetched using `await result.data()`. Sequential awaiting creates an unnecessary performance bottleneck that increases search results latency when typing. Also, async operations can resolve out-of-order, leading to stale UI updates.
**Action:** Always fetch search result contents concurrently using `Promise.all` in Pagefind integrations to dramatically reduce result latency, and use a `currentSearchId` to ensure stale responses are ignored.

## 2026-09-04 - JS Hover State Optimization
**Learning:** Found redundant event listeners in `assets/js/interactive_effects.js` that were implementing hover states for tables (`mouseover`/`mouseout`) and subject buttons (`mouseenter`/`mouseleave`). The table class being toggled wasn't even utilized in CSS, as the codebase naturally used `tr:hover`. For buttons, adding the base class once allows CSS `:hover` selectors to manage the animation smoothly. JS-based hover states using event listeners represent a major performance anti-pattern due to main thread blocking and unnecessary recalculations, especially when native CSS handles this more efficiently.
**Action:** Always favor native CSS pseudo-classes (`:hover`, `:focus-visible`, etc.) over JavaScript event listeners for interactive styling and simple animations.
