# MA03 release review — Standards

2026-10-24. Baseline: `ab20c95c8ccb76d5dd30c899a130924af61273d3`. Scope: 34 bilingual MA03 pages and the three specified scripts; uncommitted changes only.

**Verdict: bounded content Standards pass; no new actionable findings.** Based on fresh inspection and unchanged inherited examination; release approval remains pending.

**Fresh identity.** All 37 SHA-256 hashes match both prior review tables; 34 pages also match the final manifest. Baseline `19db6ca1640fb47fd541b3f8fb3d45d510d41b09` → supplied baseline changes FM03 content/tests and records; MA03, standards and shared presentation/runtime files are unchanged. No scoped MA03 commits follow the supplied baseline. Read AGENTS.md, course-content-standard.md v1.1 and MATH_FORMULA_GUIDELINES.md; no applicable CONTRIBUTING/CODING_STANDARDS found.

**Fresh reasoning.** EN/ZH denote the two scoped course directories.

- EN `parametric-equations.md:249`, ZH `:251`: the nonzero horizontal derivative restricts the ratio method, not horizontal tangency itself. Independently, `x=t³,y=t⁶` covers `y=x²`, including its horizontal tangent at zero despite both parameter derivatives vanishing. Both languages retain this exception and classification by increasing x.
- ZH `differential-equations.md:57–95,127–153`: the concrete reverse-chain-rule example precedes the defined G notation. Reconstructing separation gives `y=Ae^(x²)` including separately checked zero; the nonlinear example gives `2/(1+e^(2x))`, whose derivative and original product agree. Division restrictions and logarithm sign selection survive.
- EN/ZH `integration.md:157–207/159–209`: substitution rewrites every factor and differential; integration by parts explains both factors of one-half. ZH `:251–259` changes limits consistently, giving `15/4`. Examination reasoning remains explicit.
- EN/ZH `numerical-methods.md:51–82/53–84,168–178/170–180`: continuity plus positive derivative establishes the unique root; the full trial chain and rounding-boundary signs justify `1.325`, rather than stable digits alone.
- EN/ZH `index.md:73–162/72–161`: mixed tasks preserve English conditions, separate closed help, and recovery routes. Independently recovered inverse domain `x>2`, vertical normal `x=1`, and positive area `(12√3−8)/5`. ZH `mathematical-proof.md:121–131` retains exhaustive integer cases before the divisibility contradiction.

Applied standard §§3–6 and AGENTS mathematical/bilingual requirements. Static reading confirms all three smartPrime helpers include dollar, bracket and parenthesis TeX delimiters; no probes executed. No actionable code smells found.

**Inherited evidence and limits.** The prior plain-language Standards/Spec reports and implementation record supply unchanged all-page examination, routes, source provenance and historical technical results. They were not rerun. Official PDFs, all historical answers, current build/tests/browser/preview and student learning were not revalidated here. Under standard §7, main must verify the isolated preview before human approval; student trial remains untested. Only this report was written; AS L01 drafts, courses, tests and Git state were preserved. No messages, push or publication.
