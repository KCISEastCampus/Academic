# FM03 hyperbolic sample — Spec review

Date: 2026-10-24. Base HEAD: `19db6ca1640fb47fd541b3f8fb3d45d510d41b09`.

Scope: two hyperbolic pages, `scripts/test-further-retry.js`, author record; MA03/AS work excluded.

Spec: user approval “好，开始优化” for this sample; [author design card](implementation-fm03-hyperbolic-plain-2026-10-24.md#制作前设计卡); [readability audit](audit-fm03-readability-2026-10-24.md), findings #1 and #5. Read AGENTS.md, course-content-standard.md v1.1 and MATH_FORMULA_GUIDELINES.md.

**Findings:** missing/partial requirements: none identified; scope creep: none identified within the scoped diff; wrong implementation: none identified. This is sample-level source/content acceptance only.

- **Simplification:** audit #1 requests “相减／相加后除以 2”; #5 requests “初学入口直接到最基本的问题和解释”. [EN](../../alevel/a2-further-mathematics/hyperbolic-functions.md#definitions) and [ZH](../../zh/alevel/a2-further-mathematics/hyperbolic-functions.md#definitions) now expose reciprocal → two separate definitions → visible zero demonstration → student attempt before introducing ratios/reciprocals. This reduces unfamiliar notation before the first calculation, rather than merely adding length. Textbook/long preparation notes move into optional reference material; the Chinese inverse-cosh label is readable.
- **Independent solutions:** at zero, both exponentials equal 1, giving sinh 0=0 and cosh 0=1. For e^a=2, e^−a=1/2, so sinh a=3/4 and cosh a=5/4; cosh is larger and sinh is positive. For sinh b=−3/4, t=e^b>0 gives 2t²+3t−2=(2t−1)(t+2)=0. Reject −2; e^b=1/2, cosh b=5/4 and b=−ln 2<0. Substitution restores −3/4.
- **Conditions:** sinh/cosh/tanh/sech accept every real input; cosh>0. Coth/cosech exclude zero. Inverse domains remain ℝ, [1,∞), (−1,1), respectively, with the nonnegative acosh branch and derivative restriction x>1 retained. The expanded identity proof is valid for all real x.
- **Practice/help:** design “新任务不只重复零输入” is met by comparison/sign reasoning and the reversed-input retry. English prompts match across languages; hints/solutions are separate and closed in source. Feedback repairs reciprocal, swapped-definition, negative-root and quadratic errors; the retry links back into learning.
- **Preservation:** design “原 Example 1、题干、数据与稳定锚点保留” holds: each language retains all 39 old anchors and 22 complete old task blocks verbatim, including identity labels/data/help. Original source-identification text, graph/domain tables, equations, branches, calculus and practice remain unchanged.

**Incremental rechecks:** earlier routing corrections remain accepted: beginners return to `ratio-and-reciprocals`; later tasks require inverse functions/calculus; prerequisite links target AS Algebra `#l01`. Latest recheck covers only the bilingual three-row `aligned` result: e^b=1/2, e^−b=2, cosh b=5/4. Both blocks match exactly; arithmetic, order and surrounding conditions are preserved. Portable report links remain unchanged. No additional tests/PDF checks; author-record technical updates remain separate.

Checks: previous independent derivation, source comparisons and hyperbolic test block passed; these scoped rechecks did not rerun mathematics/tests. No course edits, builds, commits or publication performed.

Limits: no browser/rendering, prerequisite-target, original-PDF or student-trial verification; author technical checks remain separate. No whole-course or learning-effectiveness claim.

## SHA256 — current course/test bytes; author record at original content review

| File | SHA256 |
| --- | --- |
| `alevel/a2-further-mathematics/hyperbolic-functions.md` | `123a3fbbfcca38b6a42f6c53e8d9620791394886c80b2a49e5a3253f386410f6` |
| `zh/alevel/a2-further-mathematics/hyperbolic-functions.md` | `e5af82205d81291a8680ea8ad362621f8cd4e9f930b5f1bebbd0f2ff0525c149` |
| `scripts/test-further-retry.js` | `5822c1ebe741b1449943664422b6c2e57c4f6f35a107f1d02419e2a14c1ba1ec` |
| `docs/agents/implementation-fm03-hyperbolic-plain-2026-10-24.md` | `aebc25dfa1446d81fba06562ecc0e9e3809802e0cd6c2981a89ad605abac0983` |
