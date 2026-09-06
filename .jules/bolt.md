## 2026-09-05 - Pagefind search speed up
**Learning:** Pagefind returns a list of results where each result data must be fetched using `await result.data()`. Sequential awaiting creates an unnecessary performance bottleneck that increases search results latency when typing. Also, async operations can resolve out-of-order, leading to stale UI updates.
**Action:** Always fetch search result contents concurrently using `Promise.all` in Pagefind integrations to dramatically reduce result latency, and use a `currentSearchId` to ensure stale responses are ignored.
