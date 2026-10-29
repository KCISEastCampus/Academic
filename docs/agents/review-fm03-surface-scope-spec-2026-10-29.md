# FM03 surface-scope: Spec review — 2026-10-29

Working tree versus `59c15fb658e187414f1d09ac7c4620c334942120`; untracked script read directly. Scope: three files below. Read AGENTS.md, course-content-standard v1.1, formula guidelines and [the design](implementation-fm03-surface-scope-2026-10-29.md). Earlier nonlinear reports are historical.

**Result: scoped Spec increment passes; both P2s closed, no new findings. Textbook scope now visually checked.**

1. **[P2 — closed] Upper limit/radius separation.** [English:763](../../alevel/a2-further-mathematics/arc-length-and-surface-area.md#quick-reference), [Chinese:766](../../zh/alevel/a2-further-mathematics/arc-length-and-surface-area.md#quick-reference) originally contained `\int_\alpha^\betay`, merging upper limit and radius into one command, violating “双语主公式…速查”. Both now use `\beta y`; current formulas are valid.

2. **[P2 — closed] Basic-task source binding.** The script originally hard-coded numerical answers without binding Example 5/Q5/Q6; baseline tasks passed the earlier in-memory rollback probe, leaving “绑定这些题目的专题检查” partial. `scripts/test-further-surface-area.js:40–60` now binds actual questions/answers through `required`; visible Example 5 correctly avoids the two-details requirement. Recheck rejected six individual baseline reversions and six incorrect-answer mutations across both languages.

**Independent mathematics** (also checked by polygon/frustum summation, absolute error below 1e-8):

- Example 5: endpoints (0,1)→(2,3), speed √2, slant 2√2. Frustum area π(1+3)(2√2)=8π√2.
- Q5: endpoints (2,0)→(4,2), radius 0→2, slant 2√2. Cone area π·2·2√2=4π√2.
- Q6: endpoints (1,0)→(−1,0), speed 1. Thus

  $$L=\int_0^\pi1\,dt=\pi,\qquad S=2\pi\int_0^\pi\sin t\,dt=4\pi.$$

  Endpoint radii vanish; no end disks.
- Retry: T=(ln3)/2, endpoints (1,0)→(5/3,ln3), radius 2t≥0; derivatives 2sinh(2t),2 give speed 2cosh(2t), including speed 2 at zero. With u=2t,

  $$S=2\pi[u\sinh u-\cosh u]_0^{\ln3}=\frac{4\pi}{3}(2\ln3-1).$$

  Here sinh(ln3)=4/3 and cosh(ln3)=5/3; increasing x for t>0 prevents overlap.

All actual surface tasks now have y≥0; radius-absolute-value/cross-axis cases are removed. The classroom restriction is not presented as the official examination boundary. Existing nonlinear tasks, square-root sign conditions and baseline anchors remain; legacy IDs are compatible. Revised practice/retry hints and solutions start closed in source.

**Textbook/source boundary:** independently rendered and visually inspected §23.2, printed pp.285–287/PDF289–291 of the user-identified OUP2017 *International A Level Further Mathematics with Mechanics* (ISBN978-0-19-837600-2), supplied as `Textbook(1).pdf`. Formulas use y without absolute values; Exercise 2(3) specifies “above the x-axis”; remaining surface tasks specify non-negative-height intervals. Example 3(b), p.286, prints x=rcosθ,y=rsinθ with −π/2…π/2, then incorrectly doubles the half-integral: sinθ is odd. Q6 correctly uses 0…π. Main-task 9665 Specification v5.2 FP2.8 (PDF17/printed18) evidence remains attributed, not independently reopened; neither source establishes a universal examination exclusion.

Final increment: Examples 2/3 retain x>0, sin≥0/sec>0 when taking positive roots; quick reference requires g≥0. Textbook notes match inspected pages. Hash reconstruction confirms only these scoped edits; test unchanged. Earlier isolated checks used unrelated HTML/prerequisite/SVG fixtures. No course/test/FM04 edits, build, browser/student trial or commit; rendered-site checks remain unrun. This does not validate learning.

## Final SHA256 snapshot

| File | SHA256 |
| --- | --- |
| `alevel/a2-further-mathematics/arc-length-and-surface-area.md` | `C2E90019E117EAB64412BF54BC78ED658E80A66BDF3F56C54911661B91A8DA5A` |
| `zh/alevel/a2-further-mathematics/arc-length-and-surface-area.md` | `AB8C6847B59E69527E89B8F0CBA092E018A8A3E15D3C84C71E17BD13C1993624` |
| `scripts/test-further-surface-area.js` | `BF449FF3DC9E3628BDACC949B372CF061BD2663DFEEAD6C4598A61D3E6FB53D2` |
