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
## 2026-09-16 - TOC DOM Querying in Scroll Event\n**Learning:** Discovered an $O(N)$ DOM query (`querySelector`) inside a scroll event listener in `assets/js/toc_generator.js`. Querying the DOM is expensive and doing it on scroll ticks causes layout thrashing and slows down scrolling performance.\n**Action:** Replaced the $O(N)$ DOM query with an $O(1)$ Hash Map lookup by caching the Table of Contents `a[data-toc-link]` elements based on their heading IDs upon initialization.

## 2026-09-17 - RegExp Compilation in Loops
**Learning:** Found an $O(N)$ regex compilation inside the loop for the Table of Contents search (`assets/js/toc_generator.js`). On every keystroke, the exact same regex was compiled for every heading being filtered. Regex compilation is expensive and doing it repeatedly for the same pattern wastes CPU cycles, increasing latency when typing.
**Action:** Always hoist invariant object creations, especially `new RegExp()`, out of iterations. Compile the search pattern once per keystroke instead of inside the filter loop.

## 2026-09-18 - Scroll Event Layout Thrashing
**Learning:** Found an $O(1)$ performance bug where DOM layout properties (`offsetTop`, `offsetHeight`, `innerHeight`) were repeatedly queried inside scroll event listeners (`window.addEventListener("scroll", ...)` in `assets/js/toc_generator.js`). Querying layout properties dynamically triggers forced synchronous layouts (layout thrashing) because the browser must recalculate styles and reflow the page. This is heavily magnified when done on every scroll tick.
**Action:** Always pre-calculate and cache static or semi-static layout properties (like offsets and heights) upon initialization. Use `ResizeObserver` or window `resize` events (debounced) to update the cached values, completely removing DOM layout queries from high-frequency event handlers.
