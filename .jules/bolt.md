## 2026-09-05 - Pagefind search speed up
**Learning:** Pagefind returns a list of results where each result data must be fetched using `await result.data()`. Sequential awaiting blocks the main thread longer than necessary when typing.
**Action:** Always fetch search result contents concurrently using `Promise.all` in Pagefind integrations to dramatically reduce result latency.
