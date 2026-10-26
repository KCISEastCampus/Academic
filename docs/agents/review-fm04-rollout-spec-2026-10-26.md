# FM04 rollout — independent Spec review, 2026-10-26

Baseline/HEAD: `c7214ff9e522e531abdf19ad10bd4fcbf0db20cf`; no subsequent commits. Reviewed tracked working-tree edits and scoped untracked files using:

```text
git diff c7214ff -- alevel/a2-further-mathematics/statistics zh/alevel/a2-further-mathematics/statistics scripts/test-fm04-*.js
```

## Finding summary

**No unresolved Spec findings.** All 18 FS2 subitems now have verified mathematical teaching and independent task coverage. The original coverage gaps, intermediate bilingual mismatch and final duplicate-anchor issue are closed on the source hashes below. Every new numerical answer and supplied critical value was independently recomputed; no remaining numerical, derivation, condition or substantive bilingual error was identified.

The four final tasks and their recovery links were reread in both languages. New variance IDs are uniquely `#task-ratio` and `#retry-ratio`; old `#task-c` and `#retry-c` remain intact. The recovery sentence now targets the new ratio retry ([EN](../../alevel/a2-further-mathematics/statistics/variance-tests.md#retry-ratio), [ZH](../../zh/alevel/a2-further-mathematics/statistics/variance-tests.md#retry-ratio)). Source-content Spec acceptance is complete; browser/build acceptance and student mastery are separate states.

## Closure record

| Earlier concern | Final source evidence | Status |
| --- | --- | --- |
| Exponential MGF derivation not independently assessed | standard-mgfs `#task-e` reconstructs a shifted unbounded density; `#retry-a` reconstructs the rate-4 MGF and limit | Closed, both languages |
| FS2.4b known-variance/non-normal large-sample route missing | comparing-means `#task-c` and `#retry-b`, with approximation/known-variance feedback | Closed |
| Independent-means delayed calculation missing | index `#later-c`; comparing-means later route now links there | Closed; pooled t=2.252200, df12; approximate z=2.229882 |
| FS2.4e nonunit SD-ratio application missing | New variance calculations use ratios 2 and 1.5 and divide by their squares | Closed; task-ratio/retry-ratio |
| Intermediate ZH exponential retry/parts mismatch | Current standard-mgfs English questions and display formulas match exactly; Chinese explanation/limits reread | Closed |
| Duplicate variance anchors / recovery locator F4 | New task-ratio/retry-ratio unique in EN/ZH; old task-c/retry-c retained; recovery links updated | Closed |
| Other concurrent additions | estimators `#task-e/#retry-b` and test-power `#retry-b`, including targeted recovery sentences | Verified: sampling variances 1/12 and 1/9; two-tailed beta=0.676972, power=0.323028 |

## Independent verification

Read all 22 sources and source proofs; checked 9665 v5.2 printed pp.22–23, January/June 2025 paired QP/MS texts and research packs. Independently recomputed every new numerical answer and supplied cutoff, including MGF convergence/domains/intersections, efficiency direction/consistency, CI widths/rounding, power/discrete actual size, pooled/paired t, chi-square/F tails/df, fitted parameters/pooling with strict E>5, Yates and noncausality. Translated conditions, English questions and displayed mathematics were compared; final EN/ZH questions/displays agree. No question-count or author-script result was used as independent mathematical evidence.

Final four tasks were solved directly from their stated data; normal cutoffs came from the inverse normal distribution. The F CDF/quantile was recomputed using the integer-parameter beta polynomial and independently cross-checked by numerical integration of the F density.

| Final task | Independent calculation | Decision |
| --- | --- | --- |
| Known-SD delivery task, 2% two-sided | SE=sqrt(1.64)=1.280624847; z=2.342606428; z(0.99)=2.326347874; p=0.019149572 | Reject: evidence of differing population means |
| Known-SD delivery retry, 5% two-sided | SE=sqrt(36/100+64/144)=0.896908270; z=2.229882439; z(0.975)=1.959963985; p=0.025755249 | Reject; separate known variances, approximate reference |
| SD ratio 2, variances 48/6 | F=(48/6)/4=2; df=(10,20); upper 5% cutoff=2.347877567; p=0.089782715 | Do not reject; does not prove ratio 2 |
| SD ratio 1.5, variances 40.5/6 | F=(40.5/6)/2.25=3; df=(10,20); same cutoff; p=0.017509541 | Reject: evidence that SD ratio exceeds 1.5 |

Known-variance mean tests correctly use independent large samples with finite variance and an explicitly justified mean-difference approximation, without assuming normal individual deliveries or estimating a pooled variance. F tests correctly require independent random samples from normal populations, square the null SD ratio and retain A/B degrees-of-freedom order and the upper tail.

## All 18 subitems

“Verified” means mathematical teaching and independent task coverage, not observed student mastery. Source names below occur under both language roots listed with the hashes.

| Subitem | Reviewed target/task evidence | Final state |
| --- | --- | --- |
| FS2.1a | Discrete sum and continuous integral; MGF task-a, standard task-a | Verified |
| FS2.1b | Zero-point moments and affine rules; MGF task-a/b | Verified |
| FS2.1c | Poisson/normal rebuilding task-d; exponential task-e/retry-a; bounded density task-a | Verified; original gap closed |
| FS2.1d | Independent products, domain intersections, identifying sums; standard task-b/c | Verified |
| FS2.2a | Parameters/statistics/estimates and enumerated sampling distributions; estimators task-e/retry-b | Verified |
| FS2.2b | Unbiasedness, consistency, efficiency and counterexample; estimators task-a/b/c | Verified |
| FS2.2c | Combining estimators, squared weights, shared observations; estimators task-b/d/later-task | Verified |
| FS2.3a | Symmetric mean intervals and repeated-sampling interpretation; confidence-intervals practice | Verified |
| FS2.3b | Known-variance normal, large-sample known/unknown, small-sample t conditions and calculations | Verified |
| FS2.3c | Candidate means/non-rejection reasoning; confidence-intervals practice | Verified |
| FS2.3d | Width/half-width planning, integer rounding and previous-n checks; confidence-intervals task-d/e, retry | Verified |
| FS2.4a | Simple-alternative beta/power, both tails, discrete actual size; test-power practice/retry-b | Verified |
| FS2.4b | Known/unknown large-sample, exact known normal, pooled small normal; comparing-means practice/retry, index later-c | Verified; original gap closed |
| FS2.4c | Paired differences, normality, null offset and noncausal conclusions; paired-tests and index mixed-a | Verified |
| FS2.4d | Single normal variance/SD, tails and inversion; variance-tests task-a/retry-a | Verified |
| FS2.4e | Independent normal variance/SD ratio, nonunit scaling, tails/df; variance-tests task-ratio/retry-ratio | Verified; gap and locator issue closed |
| FS2.4f | Contingency/fit chi-square, strict expected counts >5, 2x2 Yates; association-tests practice/retry | Verified |
| FS2.4g | Discrete/continuous fit, integration, fitted-parameter df and pooling; goodness-of-fit practice/retry | Verified |

## Navigation second pass and limits

Source and generated HTML/search JSON (13:40 build) verified bilingual home/A-Level → subject → parallel pure/statistics/mechanics units; FM04 is discoverable and classified statistics; FM05 is explicitly unavailable without a fictitious course/link. Eight pre-existing unit bodies/front matter remained unchanged except hub returns; old FM04 index anchors are retained. AS/physics/calculator breadcrumb spot-checks found no regression. This generated navigation evidence predates the final mathematical content fixes; the final lesson-anchor repair was separately checked in the current source.

No independent rebuild, browser interaction, scanned-textbook visual re-audit or student trial was performed. Author self-check is not student evidence; delayed retention/mastery remains untested. Only this report was written; no production edits, commits or publication.

## Reviewed source hashes and untracked inventory

SHA256 below records exact reviewed source bytes. EN base: `alevel/a2-further-mathematics/statistics/`; ZH base: `zh/alevel/a2-further-mathematics/statistics/`. Each row identifies both complete paths. **N** = new/untracked in both languages; **M** = tracked/modified in both. The nine N rows enumerate all 18 new production files. Additional scoped untracked files: `scripts/test-fm04-calculations.js` and `scripts/test-fm04-content.js` (read, not used as independent mathematical evidence). No postbaseline commits.

| File | State | EN SHA256 | ZH SHA256 |
| --- | --- | --- | --- |
| association-tests.md | N | A38B55DF4AF7DEC72BB401DD09881CBC31E9B9B737A8B2DFC45AA84638BC5BD4 | EBD29CD8FFDE4CC16885C85CF5267625D82BE0394E490C13E277DABF5A444C71 |
| comparing-means.md | N | 270EC25D6B7FD020B4406D896E76D2476B6B133B151A4291283C8B58A0B50EFA | BD7F300CC6F10C074983A5E728CE822F5C90DF4F26E5135D070D8164BE979C2C |
| confidence-intervals.md | N | EBBBEC9E001FB747ECAE1474B37523D2447550ED639E16D8DE41BF1F27FF8544 | EBB8932C21D8465F990209811E1FE0C4B925ECFF01D3889B45D876CF1D287ECF |
| estimators.md | N | 9230AA1E72A33CCF26812C85D67D123616BD680752D2F185728493226B416762 | D8545513CAE3F3BBEA6944ADC6627AB7329C81AB1579E18755F66A0C28220591 |
| goodness-of-fit.md | N | 9ADBA1A85DACEBA2E69466C9B8B07372247D8BF42DE7DD9141163F800C703995 | 418800FAD51A0A89303D7F789ED3B804E2BE42FB9100D31F17D6E4920DCFA501 |
| index.md | M | 35D7ECFAD5A1443FAEE5A6D3AC1F51E094D418F577DAD4728360D8F3C5785737 | A8FE9C27BCAD31C72CAC0088404C722E30EED0CDB298A8DE429E0F16E3216867 |
| moment-generating-functions.md | M | D0980CA099A2C124FD5A94263C6382659261B0DFA002370ADBC50CC1EEFC196B | 41BCE9C63C1BAF44BF8C27D302FFEEF1DB6312F36F7DAC328E333A23B2B3783C |
| paired-tests.md | N | 4836C24BB937A717E0EA91847401D9CB74CD6B41DB631104AFE053EF7C985EAD | 1AFDBEE0E1242D275810BE469FAF44CF32E34681B2352E994153909CA8F03DF1 |
| standard-mgfs.md | N | 6DF5201B42B66DDF7BF3AE31648E1617F8E55789E6B15293E5887B8A0ED7E7FE | 270AAC6450F481522CA9215C51A1EE647A433B54FDCFC04469D6C3A718D439A3 |
| test-power.md | N | 6F386FA8C3EBDB45AD5C8ADF1FFBC86C3C067DDF324BEDCF575B733D1A397D77 | D6DFC51ED478A03FDDE3AC725582555BE7C7677E52C4AC99C2F534C261BBBB8C |
| variance-tests.md | N | F0B1FA24A99F7B3764F24D4925AFBC9BF8BAB8B4217F474B8F5FD2066F3D0E32 | 19CC6194E738C83292351E185F8EDF754DA0E660CCF7C0D18D314861E8392855 |
