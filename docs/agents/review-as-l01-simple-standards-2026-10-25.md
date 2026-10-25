# L01 simplified sample: Standards review, 2026-10-25

**Result: Standards content pass; zero blocking or actionable findings in the reviewed snapshot.** This independently reviews the final simplified text, rather than inheriting the earlier reviews. Spec, other AS topics and release acceptance are outside this assignment.

Baseline: `origin/main = HEAD = e9cd88a8730dda83bc6aaa855d1863c2d7837d1c`; uncommitted comparison: `git diff origin/main --` the four files below. No commits above baseline. Read-only Git inspection; no fetch or Git mutation.

References: **E** = `alevel/as-mathematics/algebra.md`; **Z** = `zh/alevel/as-mathematics/algebra.md`. Rules: `AGENTS.md:42–48,90–94`; `docs/agents/course-content-standard.md` v1.1 §§1–7; `docs/MATH_FORMULA_GUIDELINES.md`.

## Independent mathematical reconstruction

All eight prompts were solved independently, including unchanged questions whose explanations changed:

| Prompt, source lines E/Z | Independently obtained result |
| --- | --- |
| Exponent example, 68/70 | $a^{-1/3}$; at $a=8$, $1/2$ |
| Supported attempt, 86/88 | $x^{-3/2}$; at $x=4$, $1/8$ |
| Surd example, 127/129 | $3\sqrt2$; $\sqrt5-\sqrt2$; multiplying back gives 3 |
| Independent A, 159/161 | $k=5/6-2/3=1/6$; $x=64$; original ratio $32/16=2$ |
| Independent B, 185/187 | First value $(\sqrt3+1)/4$; second minus first $(\sqrt3+1)/12>0$ |
| Retry A, 224/226 | $t^{-1/2}$; $t=9$; original ratio $1/3$ |
| Retry B, 249/251 | Claimed equality false: squared difference $2\sqrt{21}>0$; fraction $(\sqrt7+\sqrt3)/4$, multiplying back gives 2 |
| Mixed review, 513/515 | Domain $x>0$; solutions require $x>2$; squared candidates 1,4; only 4 satisfies the original; substitution independently agrees |

Positive domains, nonzero conjugates and root branches are consistent (AGENTS:42,48).

## Standards evidence

- **Beginner continuity:** E:26–147/Z:28–149 supplies the stated prerequisite recap, root meanings, operation choices and conjugate justification in sequence; no essential new concept is hidden (§3).
- **Independent evidence and leakage:** E:151–208/Z:153–210 tests exponent rewriting/inversion and exact surd comparison separately. Neutral headings and separately closed hints/solutions preserve the attempt (§§1,4,6).
- **Recovery and return:** E:212–281,359,505–537/Z:214–283,361,507–539 links errors to explanations and matching retries, then places the mixed equation after quadratics (§§2,5).
- **Bilingual help:** manually compared explanations, hints, solutions, conditions and method choices throughout these ranges; equivalent support in both languages (§6:119; AGENTS:90). Self-written/source identities remain explicit at E:547–553/Z:549–555.
- **Smells:** no actionable heuristic finding; parallel bilingual prose warrants no artificial abstraction.

Both assigned scripts passed: 104 matched prompts, 157 closed disclosures per language; 173 numerical comparisons plus assertions. These supplement the reasoning above.

Not checked: build/browser, live official-source refresh, or real student work. Ease of learning and delayed retention remain untested; this pass covers L01 content only (§7:134–152).

## Reviewed SHA-256 snapshot

Hashes were unchanged across review and script execution.

```text
alevel/as-mathematics/algebra.md
33a4320373e3496f3c6f222731319eeb6c29a2efa1be04b33ee6b8e15bb3ef0f
zh/alevel/as-mathematics/algebra.md
a075951b2af7eb328c57159f2fbf2a9f55f22cb01694f2a7972695e795feaaea
scripts/test-as-mathematics-content.js
bfe6d9abeb9b1a592954cf128150fd9fee2a0430765c216d0d37e08ca2022e57
scripts/test-as-mathematics-calculations.js
209145c12fa1286521c7436d30b2575e8ed6625b6b52a7628c541ae4f6acff7c
```
