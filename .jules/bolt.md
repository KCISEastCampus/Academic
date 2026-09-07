## 2026-09-05 - Pagefind search speed up
**Learning:** Pagefind returns a list of results where each result data must be fetched using `await result.data()`. Sequential awaiting creates an unnecessary performance bottleneck that increases search results latency when typing. Also, async operations can resolve out-of-order, leading to stale UI updates.
**Action:** Always fetch search result contents concurrently using `Promise.all` in Pagefind integrations to dramatically reduce result latency, and use a `currentSearchId` to ensure stale responses are ignored.

## 2026-09-04 - JS Hover State Optimization
**Learning:** Found redundant event listeners in `assets/js/interactive_effects.js` that were implementing hover states for tables (`mouseover`/`mouseout`) and subject buttons (`mouseenter`/`mouseleave`). The table class being toggled wasn't even utilized in CSS, as the codebase naturally used `tr:hover`. For buttons, adding the base class once allows CSS `:hover` selectors to manage the animation smoothly. JS-based hover states using event listeners represent a major performance anti-pattern due to main thread blocking and unnecessary recalculations, especially when native CSS handles this more efficiently.
**Action:** Always favor native CSS pseudo-classes (`:hover`, `:focus-visible`, etc.) over JavaScript event listeners for interactive styling and simple animations.
