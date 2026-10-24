# FM03 hyperbolic concept sample — Standards review

## Findings and checks (under 400 words)

**No open findings. P2 closed after the focused bilingual follow-up; no mathematical or source-evidence blockers found in the reviewed sample.**

**Documented standard — [P2, CLOSED] Qualify the route after the introductory retry.** The previous instruction allowed novices arriving from `definition-check` to continue into untaught inverse-function/calculus tasks. The [English](../../alevel/a2-further-mathematics/hyperbolic-functions.md#definition-retry) and [Chinese](../../zh/alevel/a2-further-mathematics/hyperbolic-functions.md#definition-retry) continuations now explicitly return first-time learners to `ratio-and-reciprocals` and reserve subsequent tasks for after the inverse-function and calculus sections. Both languages resolve the route defect against [course standard v1.1 §4](course-content-standard.md#4-从示范走向独立保持任务与能力一致) (established knowledge before first attempts) and §6 (coherent reading route).

**Prerequisite wording follow-up:** English line 19 and Chinese line 21 now link “negative powers” / “负指数” to the respective AS Algebra `#l01` sections. This matches the stated reciprocal prerequisite more directly than the previous integration link. Destination lessons were not re-audited.

**Format-only increment — PASS:** Both `definition-retry` result displays now use three aligned rows, preserving expressions, values, order and conditions. Reversing only this formatting in memory reproduced both prior reviewed SHA256 values, confirming no other course changes. P2 remains closed; no PDF reread or mobile-render check.

**Heuristic judgements:** no actionable baseline smell in the changed code. The assertions reuse the existing rational/Laurent-polynomial helpers; bilingual parallel explanations are justified and should not be abstracted into shared code.

**Original content checks:** read both complete lesson pages and the scoped diff, author design/target table and readability audit. Independently reconstructed the zero example, first task, retry equation, rejected negative root, input sign and expanded identity; exact-fraction checks corroborated the numerical results. The new task changes representation and reasoning direction; help addresses reciprocals, swapped definitions, positivity and factorisation. Hints and solutions are separately closed in source; no new answer leakage was found. Original English prompts, explicit anchors, Example 1, conditions and downstream depth are retained. The wording follow-up reviewed only the two revised passages in both languages.

Read the local January 2025 QP/MS covers and visually inspected QP p4 / MS p5. The author's Q2 evidence accurately describes the required intermediate identity steps, quadratic, range rejection and complete logarithmic solutions.

**Limits:** source/content review only; no repository tests, build, browser or student trial performed. No live syllabus refresh or review of linked prerequisite lessons; existing downstream mathematics was read for continuity, not fully recertified. Technical acceptance remains the author's separate work. Recheck any subsequent edits against this snapshot.

## Scope and snapshot

- Workspace: `D:/GitHub/Academic`; base and final HEAD: `19db6ca1640fb47fd541b3f8fb3d45d510d41b09`; no commits created.
- Original review: the three paths in the command below, plus `docs/agents/implementation-fm03-hyperbolic-plain-2026-10-24.md` (author design record). Wording follow-up: only the bilingual prerequisite link and post-retry continuation. Latest increment: only the bilingual `definition-retry` result display formatting; no whole-lesson re-review. Author technical-acceptance additions are outside these follow-ups.
- Reference rules read: `AGENTS.md`, `docs/agents/course-content-standard.md` v1.1, `docs/MATH_FORMULA_GUIDELINES.md`; request context: `docs/agents/audit-fm03-readability-2026-10-24.md`.
- MA03/AS dirty work excluded. Only this named report was written; no course edits, builds or publication.

```text
git diff HEAD -- alevel/a2-further-mathematics/hyperbolic-functions.md zh/alevel/a2-further-mathematics/hyperbolic-functions.md scripts/test-further-retry.js
```

Final course/test SHA256 after the aligned-formula increment, 2026-10-24. The test file hash is unchanged; tests were not rerun.

| Reviewed file | SHA256 |
| --- | --- |
| `alevel/a2-further-mathematics/hyperbolic-functions.md` | `123A3FBBFCCA38B6A42F6C53E8D9620791394886C80B2A49E5A3253F386410F6` |
| `zh/alevel/a2-further-mathematics/hyperbolic-functions.md` | `E5AF82205D81291A8680EA8AD362621F8CD4E9F930B5F1BEBBD0F2FF0525C149` |
| `scripts/test-further-retry.js` | `5822C1EBE741B1449943664422B6C2E57C4F6F35A107F1D02419E2A14C1BA1EC` |

Historical author-design snapshot from the original review: `docs/agents/implementation-fm03-hyperbolic-plain-2026-10-24.md`, SHA256 `AEBC25DFA1446D81FBA06562ECC0E9E3809802E0CD6C2981A89AD605ABAC0983`. This is not a hash of later technical-result additions and does not place those additions under pending course review.
