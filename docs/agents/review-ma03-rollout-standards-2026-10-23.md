# MA03 rollout: Standards review

Reviewed 2026-10-23 20:06:44 +08:00. Standards axis only; repository rules override programming heuristics. Scope: frozen EN/ZH integration.md and index.md, against bb18c70. **Both original P2 findings are closed; the subsequently reported remaining-factor gap is also closed. No open substantive Standards finding remains in this four-page source review.** This is not whole-rollout acceptance.

1. **Closed — substitution and limits need independent evidence.** Q5 now explicitly requires the entire transformed integral, differential and both endpoints (EN:393–414; ZH:395–416). It also requires rewriting the remaining numerator factor. Independently, x³ dx = (u−1)du/2, limits 1→2, so the value is (1−ln2)/2. Retry C changes the denominator power and interval: 2x³ dx = (u−1)du, limits 1→4, giving ln4−3/4 (EN:499–523; ZH:501–525). Both integrands are continuous on their stated intervals; differentiation confirms independent primitives. Thus these tasks test remaining-factor rewriting, the differential and endpoint conversion, rather than merely a correct numerical value. The design mapping at implementation record:20 is now supported. This satisfies course-content-standard.md:19–21,61,71.

   Recovery also matches the error: the diagnostic row points to substitution/definite integrals and Retry C (EN:428; ZH:430); Retry C sends leftover-factor errors to Example 3 and old-limit errors to Example 6, then requires closing the example before reconstruction. Specifying u tests execution of substitution; method selection remains separately exercised by the unlabelled later/mixed tasks. Hints and solutions remain separately closed in source.

2. **Closed — specification examples mislabelled as self-written.** Both introductions identify Examples 3–4 and Q3’s second integral as specification examples, with site-written solutions (EN:30; ZH:32). Example 4’s local source and the Practice introduction give 9660 v5.2, P2.7, printed p.23 (EN:187,261–263; ZH:189,263–265). Moving Q3’s source note preserved its English questions and conditions. Later A remains explicitly adapted from January 2025 MA03 Q8, without reused official marks (EN:537,621; ZH:539,623). Implementation record:11 agrees. AGENTS.md:40–43 is satisfied for these attribution repairs.

**Evidence limits:** prior reasoning checks of the entry tasks and unchanged integration additions stand; this follow-up independently checked affected content and bilingual equivalence. No new mathematical error or separate judgment-based code smell was found. Scripts below establish versions/whitespace only. Other lessons, external recovery destination content, builds/generated HTML, browser/keyboard/mobile behavior, calculator hardware and student trials remain unexamined by this reviewer. Only this report was changed; no build, commit or push.

## Version appendix

Workspace: D:/GitHub/Academic-ma03-numerical.

Baseline and HEAD: bb18c70fb93942ffe0f00f2795e9e1d7f89c3ebe. No commits exist in bb18c70..HEAD. The fixed comparison includes uncommitted changes:

```text
git diff bb18c70 -- alevel/a2-mathematics/integration.md alevel/a2-mathematics/index.md zh/alevel/a2-mathematics/integration.md zh/alevel/a2-mathematics/index.md
```

Four pages: 932 insertions, 80 deletions. Final reviewed SHA256 values:

| Source | SHA256 |
| --- | --- |
| alevel/a2-mathematics/integration.md | 1BF8B35A75649E9D82F8AE60EE5846FD387E60BDB5DDAEBC6B76E22805E6DE8D |
| zh/alevel/a2-mathematics/integration.md | B610C5D28EE023534F2A233B5781D82A51B0D6129E095F7808C9D75308B3A2D8 |
| alevel/a2-mathematics/index.md | 10CE49453175663448AF1B7C2284DE0E4E0844EEB5F2A50333A7C686BACD8897 |
| zh/alevel/a2-mathematics/index.md | 71B716FEB528B0AB5254F64D8AA3A0A170D8066D60DB86BB0AF4872DAE83C1C2 |
| docs/agents/implementation-ma03-rollout-2026-10-23.md | 76F6599C9999C75567AF7808E440073FAFCBFC92689ABC38B0D9AC21D55E7461 |

The index hashes are unchanged from the initial review. The implementation record is supporting evidence, not a fifth course page in the fixed diff. git diff --check passed for the four paths; no correctness claim is inferred from it.

Read standards: root AGENTS.md, course-content-standard.md v1.1, docs/MATH_FORMULA_GUIDELINES.md, codex-collaboration.md; no more specific AGENTS/CONTRIBUTING/CODING_STANDARDS files were found under the relevant source directories in the initial review. RTK instructions and the code-review Standards workflow were followed; no Spec-axis review is claimed. Programming abstractions/Fowler heuristics were not imposed on course prose.

## Independent reconstruction evidence

These are reviewer reasoning checks, not automated correctness tests or student performance evidence. Q5 and Retry C were reconstructed again for this final patch; the other rows record the preceding independent review of content unchanged by this patch.

| Location in both languages | Independently reconstructed check |
| --- | --- |
| Integration #q5--keep-the-variable-and-limits-consistent | $x^2=u-1$, $x\,dx=du/2$; $\frac12\int_1^2(1-u^{-1})\,du=(1-\ln2)/2$. Independent primitive $\frac12[x^2-\ln(x^2+1)]$ differentiates to the original integrand, including at $x=0$. |
| Integration #retry-a | Derivative of $\frac13\sin(3x^2)$ is $2x\cos(3x^2)$. |
| Integration #retry-b | Coefficients $1,2$; value $\ln(9/2)$; poles $-2,-1$ invalidate endpoint subtraction on $[-3,0]$. |
| Integration #retry-c | $x^2=u-1$, $du=2x\,dx$; $\int_1^4(u^{-1}-u^{-2})\,du=\ln4-3/4$. Independent primitive $\ln(x^2+1)+(x^2+1)^{-1}$ differentiates to $2x^3/(x^2+1)^2$. |
| Integration #later-a | Value $(4\ln4-3)/3$; lower transformed endpoint contributes $-1$. |
| Integration #later-b | Primitive $\frac23\sqrt{x^3+1}+C$ on $x>-1$; differentiates correctly also at $x=0$. |
| Entry #mixed-a | Range $(2,\infty)$; inverse $(x+1)/(x-2)$ on $x>2$; composite domain $x>1$; solution $5/2$. |
| Entry #mixed-b | $y=\sqrt{x}(x-3)$, $x>0$; tangent $y=-2$, normal $x=1$; area $(12\sqrt3-8)/5$. |
| Entry #mixed-c | $k=1$, $y=10-8e^{-t}$ satisfies both observations and the differential equation. |
| Entry #later-a | $5/12$ exceeds $\ln(3/2)$; exact difference of integrands is $-x^3/(1+x)$. |
| Entry #later-b | Intersection $(2,2,1)$; acute angle $\arccos(4/\sqrt{30})\approx43.1^\circ$. |
| Entry #later-c | Exclude $\pi/2+n\pi$; identity holds there; permitted solutions $\pi/3,4\pi/3$ satisfy the original expression. |

## Attribution evidence

The initial review independently read and rendered these source pages; the final check compared the repaired labels with that evidence:

- [9660 specification v5.2, P2.7, printed p.23](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf): illustrative integrals used in Examples 3–4 and Q3’s second integral.
- [January 2025 9660/MA03 QP, Q8, printed p.16](https://aqamat.alevelclouds.com/25_01_QP_P2.pdf) and [MS, printed p.13](https://aqamat.alevelclouds.com/25_01_MS_P2.pdf): original logarithm argument is 2x+1; Later A uses 3x+1 and is an adaptation. These official-authored documents are hosted on a third-party mirror.

Any later source change invalidates the affected version entry and requires a focused recheck.