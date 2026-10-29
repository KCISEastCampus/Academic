# FM04 power extension: Standards review

2026-10-29. **No actionable findings:** 0 documented-standard breaches; 0 Fowler smell findings.

Scope: working-tree `git diff 59c15fb --` the three files below, including the final frozen formatting revision. Other surface drafts and previous review conclusions were excluded.

Rules applied: [AGENTS.md](../../AGENTS.md), [long-term standard §§1,3–7](course-content-standard.md), [formula guide](../MATH_FORMULA_GUIDELINES.md). The [pre-production design](implementation-fm04-power-extension-2026-10-29.md) supplied intent, not correctness evidence.

Independently checked textbook cover/copyright and §32.1 printed pp.415–418 (cached PDF-page images 419–422); original June 2026 Q10 QP pp.20–21/MS pp.16–17 and June 2025 Q5 QP pp.10–11/MS p.9, including cover identities. Read [official 9665 v5.2 FS2.4](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf#page=22), PDF p.22/printed p.23, as text; its screenshot failed.

Content stays within specified alternatives and given significance levels, without deriving a power function. Exact small-binomial work is distinguished from the textbook approximation. Every new discrete question supplies its own tail budget; no universal two-sided convention is asserted.

At [EN](../../alevel/a2-further-mathematics/statistics/test-power.md)/[ZH](../../zh/alevel/a2-further-mathematics/statistics/test-power.md), the two demonstrations, two independent tasks, two diagnostic retries and delayed task cover probability ratios, fixed-rule inversion, integer boundaries and transfer to mean differences. Neutral task titles, separately closed help, specific recovery links and delayed prerequisites support independent attempts. All six old questions and eleven old anchors remain. Bilingual questions, events, conditions, explanations and help agree.

Normal answers explicitly define local p as power (EN 65/110/362/468; ZH one line later); binomial p remains success probability. Final equation splitting, separate Var(D)=2 chain and translated table headers preserve meaning.

Independent NormalDist/Fraction reconstruction confirmed inverse answers 49.029636, 101.214126, −1.817935 and 41.135942; fixed-boundary directions are correct. All adjacent null-tail comparisons and complete alternative events checked:

| n; null p; true p | Non-rejection integers | Actual size | Beta | Power |
| --- | --- | --- | --- | --- |
| 20; .2; .15 | 1–8 | .021511001367 | .959911560531 | .040088439469 |
| 12; .3; .5 | 1–6 | .052442130259 | .612548828125 | .387451171875 |
| 10; .4; .6 | 2–7 | .0586519552 | .8310325248 | .1689674752 |

The unchanged calculation script passes. All twelve requested Fowler heuristics were judgement-only; repository overrides apply, tool-enforced matters skipped. Required bilingual prose warrants no abstraction.

Only this report was written. No course/test/shared _site edits, build or commit. Browser/rendered-page checks belong to the main task; student trial remains unperformed.

## Final source SHA256

| Source | SHA256 |
| --- | --- |
| `alevel/a2-further-mathematics/statistics/test-power.md` | `94c3116996e7b20287571f6b3df30ad668f6598a3e640c1a77f13322fa67632b` |
| `zh/alevel/a2-further-mathematics/statistics/test-power.md` | `9b242e516e291b5d092dbd735c828662a91d14a94262f9452f9f49005f3b408d` |
| `scripts/test-fm04-calculations.js` | `74a5311b31f81f097766149b46498ce41ee3af81fa9ed6cc4a59863577db85a8` |
