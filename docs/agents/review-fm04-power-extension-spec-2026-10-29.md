# FM04 power extension — independent Spec review

2026-10-29. **No actionable Spec findings.** Scoped content review passes; this is not whole-course acceptance.

**Scope.** Reviewed `git diff 59c15fb --` and current contents of the three files hashed below. Read AGENTS, the long-term course standard, the supplied user requirements, [research checklist](research-fm04-ms-alignment-2026-10-29.md#4-三项首要局部建议) and [pre-production design/target cards](implementation-fm04-power-extension-2026-10-29.md). Other surface drafts were excluded. Previous reports supplied locations, not correctness evidence.

**Original-source boundary.** Independently inspected OUP 2017 §32.1, printed 415–418, through cached `design-textbook-p419..422.png`; checked the original 506-page scan hash. Independently extracted cached [9665 Specification v5.2](C:/Users/mi/.codex/visualizations/2026/10/22/01a1618d-79b0-7581-ba24-4e304590d78c/fm03-textbook-review/spec9665-v52.pdf), PDF 1/22, printed 23: simple alternatives, supplied significance, no power-function derivation. Live retrieval failed. Read original QP/MS covers and specified pages: June 2026 Q10, QP 20–21/MS 16–17; June 2025 Q5, QP 10–11/MS 9; both MS Version 1.0 Final. Inspected cached question/marking images in the [source cache](C:/Users/mi/.codex/visualizations/2026/10/22/01a1618d-79b0-7581-ba24-4e304590d78c/power-upgrade-2026-10-29/), without regenerating them.

**Independent solutions.** NormalDist quantiles and rational binomial enumeration, independently of the JS implementation:

| Task | Rebuilt result |
| --- | --- |
| D1 | c=48.355146; power=1/4; m=49.029636; lower power means larger m |
| T1 | c=101.644854; β=2/3; μ=101.214126; lower power means smaller μ |
| D2 | Reject X=0 or X≥9; A=1…8; size=.021511001367; β=.959911560531; power=.040088439469 |
| T2 | Reject X=0 or X≥7; A=1…6; size=.052442130259; β=2509/4096; power=1587/4096 |
| R1 | c=−2.771807671; δ=−1.817935118; moving-rule probability≈.025, not .25 |
| R2 | Reject X≤1 or X≥8; A=2…7; size=.0586519552; β=.8310325248; power=.1689674752 |
| Later | Var(D)=9/9+16/16=2; μA=41.135942; lowering μB increases power |

Checked all twelve adjacent null-tail probabilities against explicit per-tail budgets and both alternative rejection tails. Size uses H0; β/power use the alternative. MS actions survive: null cutoff, fixed-event standardisation, inverse equation, direction mechanism, both integer endpoints, complete alternative event and complement. Exact counts are distinguished from textbook approximation; budgets are question-specific. Normal/independence/variance conditions remain sufficient; no full power function is introduced.

Both languages retain six original questions and eleven original anchors; seven additions provide 2 demonstrations/2 independent/2 retries/1 delayed task, identical English stems, aligned mathematics, separately closed help and recovery links. Final frozen-source recheck confirms stepwise formula breaks, explicit power-symbol explanations, separate variance chain and translated Chinese table headers preserve the reviewed mathematics. Existing JS checks passed again. Browser review belongs to the main task; student trial was not performed. Only this report was written; no build, `_site` change or commit.

## Final source SHA256

```text
alevel/a2-further-mathematics/statistics/test-power.md
94c3116996e7b20287571f6b3df30ad668f6598a3e640c1a77f13322fa67632b
zh/alevel/a2-further-mathematics/statistics/test-power.md
9b242e516e291b5d092dbd735c828662a91d14a94262f9452f9f49005f3b408d
scripts/test-fm04-calculations.js
74a5311b31f81f097766149b46498ce41ee3af81fa9ed6cc4a59863577db85a8
```
