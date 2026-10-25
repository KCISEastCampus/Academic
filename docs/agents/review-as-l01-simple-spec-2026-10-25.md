# L01 plain-language sample: Spec review, 2026-10-25

**PASS: 0 open Spec findings; 0 blockers.** Reviewed the final working-tree sample independently.

Baseline: `origin/main` = `HEAD` = `e9cd88a8730dda83bc6aaa855d1863c2d7837d1c`; no intervening commits. Scope: [EN](../../alevel/as-mathematics/algebra.md), [ZH](../../zh/alevel/as-mathematics/algebra.md), L01/immediate review links, and the two changed AS mathematics scripts.

Basis: [implementation specification](implementation-as-algebra-l01-2026-10-24.md):7–17,72–79; user feedback “初学者看不懂，通俗一点”; [standard v1.1](course-content-standard.md):41–49,55–71,119,134 (“仅凭声明的先修能读通”; “由审查者独立求解或重建解释”).

| Independently solved task (EN/ZH lines) | Result and check |
| --- | --- |
| Index example, 68/70 | $a^{-1/3}$; at 8, $1/2$; original gives $4/8$. |
| Supported attempt, 86/88 | $x^{-3/2}$; at 4, $1/8=2/16$. |
| Surd example, 127/129 | $3\sqrt2$ and $\sqrt5-\sqrt2$; multiplying back gives 3. |
| Independent A, 159/161 | $k=1/6$, $x=64$; original ratio $32/16=2$. |
| Independent B, 185/187 | First equals $(\sqrt3+1)/4$; second exceeds it by $(\sqrt3+1)/12>0$. |
| Retry A, 224/226 | $t^{-1/2}$; $t=9$ satisfies the original. |
| Retry B, 249/251 | Claimed equality false: squared difference $2\sqrt{21}>0$; fraction $(\sqrt7+\sqrt3)/4$, product check 2. |
| Mixed review, 513/515 | Domain $x>0$; equation requires $x>2$. Squaring yields 1,4; only 4 survives. Positive-root substitution independently confirms it. |

Prerequisites and method choices pass: fractions/integer powers/expansion receive a recap; root examples precede notation; operation selects the index law; square factors and cancellation explain conjugates. Independent tasks retain reasoning, inverse operations and exact comparison. No official task was shortened; tasks remain explicitly self-written.

All eight English prompts, conditions and formulas match. Manually compared every bilingual hint, solution and recovery route: equivalent help, including positivity, reversible powers, common-numerator sign and extraneous-root rejection. Neutral independent titles preserve method choice. Links connect L02 → mixed review → L03 and later differentiation.

Changed assertions agree with the derivations. Executed L01 arithmetic assertions plus in-memory pairing, closed-help, source-anchor and preservation checks: passed. Existing L02/L03/L05 content is unchanged apart from the authorised return link. Numerical samples supplement the algebraic reasoning.

Limits: Spec/source acceptance only. No build, browser, full-suite execution or external-source revalidation. Real student work, novice comprehension and retention remain untested; this sample does not validate other learning types.

Reviewed SHA-256 snapshots:

| File | SHA-256 |
| --- | --- |
| EN | `33A4320373E3496F3C6F222731319EEB6C29A2EFA1BE04B33EE6B8E15BB3EF0F` |
| ZH | `A075951B2AF7EB328C57159F2FBF2A9F55F22CB01694F2A7972695E795FEAAEA` |
| test-as-mathematics-content.js | `BFE6D9ABEB9B1A592954CF128150FD9FEE2A0430765C216D0D37E08CA2022E57` |
| test-as-mathematics-calculations.js | `209145C12FA1286521C7436D30B2575E8ED6625B6B52A7628C541AE4F6ACFF7C` |
