# FM04 rollout — Standards review

2026-10-26. Independent source-content review; no production edits or publication. **S1–S5 closed after targeted rechecks: no open Standards findings in the reviewed content or navigation scope.** Both formerly pending Spec task types have mathematically valid independent work, retries and recovery routes. This is not full-spec acceptance or student-performance evidence.

## Snapshot and scope

Workspace: `D:/GitHub/Academic`. Baseline and HEAD: `c7214ff9e522e531abdf19ad10bd4fcbf0db20cf`; no postbaseline commits. Used the requested working-tree comparison:

```powershell
git diff c7214ff -- alevel/a2-further-mathematics/statistics zh/alevel/a2-further-mathematics/statistics scripts/test-fm04-*.js
```

Also enumerated `git ls-files --others --exclude-standard` under those explicit paths: the 18 lesson files marked NEW below, plus **NEW `scripts/test-fm04-calculations.js` and `scripts/test-fm04-content.js`**. Read both scripts, without adopting their assertions or counts as learning evidence.

Standards: [AGENTS](../../AGENTS.md), [course-content standard §§1–7](course-content-standard.md), [formula guidelines](../MATH_FORMULA_GUIDELINES.md). Read the [implementation record](implementation-fm04-rollout-2026-10-26.md), scope-route/textbook-papers records and all three estimation/mean-tests/variance-fit source packs. Checked supplied January/June QP/MS identities against their text covers and January Q8(b)(i)/MS18 against the derivation requirement. No new textbook-image or full-paper verification is claimed.

## Content — finding summary

Locations below are relative to **both** `alevel/a2-further-mathematics/statistics/` and `zh/alevel/a2-further-mathematics/statistics/`; IDs are stable source anchors.

1. **S1 · CLOSED (previously P1/blocking).** Both `standard-mgfs.md#task-e` versions now require derivation from a shifted exponential density. The written solution changes limits, introduces a finite bound, evaluates the antiderivative, proves convergence only for `t<2`, explains divergence at/above 2 and checks zero. `#retry-a(ii)` independently requires an integral and limiting condition before the transformed product. This closes the missing FS2.1c independent-output/retry evidence (standard §§1,4).

2. **S2 · CLOSED (previously P2/blocking).** Both `estimators.md#retry-b` versions require statistic identification and a new sampling-distribution enumeration at `p=1/3`; probabilities `4/9,4/9,1/9`, expectation `1/3` and variance `1/9` agree. Explicit feedback links the original error through `#meaning` to this fresh task. Both `test-power.md#retry-b` versions retain two boundaries under the alternative, obtain beta `0.676972` and power `0.323028`, and name both rejection events. The new error-specific route closes standard §5.

3. **S3 · CLOSED (previously P2/blocking).** Both `index.md#later-c` versions give fresh independent-group investigations without naming the method in the title. Students must select and calculate pooled t versus separate-estimate large-sample z. Reconstructed values `t=2.252200`, df12, and `z=2.229882` justify both displayed 5% decisions. `comparing-means.md#later-review` now links directly there. Standard §§4–5's later application and method-choice evidence is present.

4. **S4 · CLOSED (previously P3/nonblocking).** Both standard-MGF pages link the existing language-matched integration-by-parts prerequisite. `#task-a` now states the differentiated/integrated factors, the remaining integral and the second integration before substituting endpoints; the `t≠0` restriction remains explicit. This repairs the standard §3 reasoning gap.

5. **S5 · CLOSED (previously P2/blocking).** Both `variance-tests.md` sources now give the new ratio tasks unique `#task-ratio` and `#retry-ratio` anchors (EN194/373; ZH195/374), preserving the original design tasks at `#task-c`/`#retry-c`. The feedback (EN395/ZH396) now links to `#retry-ratio`, so an unsquared-SD-ratio error returns to the matching numerical retry. Independently traced both destinations and confirmed uniqueness; the recovery-path requirement under standard §§5–7 is closed.

### Trace and acceptance boundary

Manually read all 22 sources, following goals through explanations, student work, closed help, repair and later work. Positive traces include finite MGF `#task-a/b/c → #retry-a/b/c → #later-review`; estimators `#meaning/#consistency/#combinations → #task-a–e`; CI `#choose-model/#width → #task-a–e → #retry-a/b → #later-task`; paired `#conditions → #task-a/b → #retry-a → #later-a`; variance, fit and association `#practice → #retry → #later-review`. The initial pass identified the four gaps above; targeted repairs now close those findings. Headings or task totals were not used as substitutes.

Both languages preserve question conditions, target skills and substantive assistance. No additional material bilingual inconsistency or severe answer leakage was found; association `#task-b` reuses its worked table and counts as diagnosis, while `#retry-b` supplies fresh corrected-test evidence. Source identities and self-written/constructed-data labels are honest. Closing S1–S4 confirms the identified Standards repairs, without establishing independent student mastery or full Spec coverage.

### Targeted recheck snapshot

Re-read the affected bilingual derivation, retry, feedback, prerequisite and later-task sections and reconstructed their reasoning and displayed arithmetic. Ten source files changed since the preceding 22-file manifest; the other twelve retained identical SHA256 values. This was an independent content recheck, not reliance on the author's test counts.

### Final additions — independent recheck

Read the four affected bilingual sources through teaching conditions, task boundaries, closed hints/solutions, feedback and later-review links. Four sources changed since the S1–S4 manifest; the other eighteen match. Re-enumerated untracked scoped files and confirmed HEAD remains the stated baseline.

- **FS2.4b content gap closed:** `comparing-means.md#conditions → #task-c → #retry-b` now uses known population variances with skewed, sufficiently large independent random samples. Independently reconstructed `SE²=1.64`, `z=2.3426064283`, rejecting at two-sided 2%; retry `SE²=181/225`, `z=2.2298824387`, rejecting at 5%. Explanations correctly distinguish approximate sampling normality from individual normality, and known variance from pooling. Neutral titles leave the method judgment to the student; the skewness feedback returns through conditions to fresh data. Existing `#later-review` links retain the mixed-method follow-up.
- **FS2.4e content gap and recovery route closed:** `variance-tests.md#f-ratio` teaches normalization by the squared null SD ratio. New `#task-ratio` gives `(48/6)/2²=2`, ordered df `(10,20)`, upper-tail non-rejection. New `#retry-ratio` gives `(40.5/6)/1.5²=3`, upper-tail rejection. Both compare with `2.347878`; conditions, hypotheses and contextual conclusions agree across languages. Hints and answers are separate and closed, with each new task outside the preceding task. The feedback identifies the unsquared-ratio error and now uniquely reaches this numerical retry after the S5 repair. Existing delayed work remains available; no delayed student retention is claimed.

**S5 final recheck:** Only the two bilingual variance sources changed since the final-additions manifest; the other twenty source hashes match. Rechecked preserved design-task anchors, new ratio-task anchors and the error → `#f-ratio` → `#retry-ratio` route. Read the new `scripts/test-fm04-content.js:24` assertion in its enclosing 22-page loop: it checks unique explicit Markdown/HTML IDs per source, including the index. This is a useful regression guard, not independent learning evidence; the suite was not rerun by this reviewer. Also corrected the preceding report's malformed hash-table row endings and verified the complete table after writing.

These are independent Standards checks of the two named additions, not a fresh whole-spec sign-off. No production source was edited by this reviewer.

## Navigation — second-stage Standards check

Read [hierarchy research](research-math-hierarchy-2026-10-26.md), `_data/math_families.yml`, changed subject records, breadcrumb/group/search includes, index/level layout callers, four bilingual hub sources and five bilingual unit-index return links. New navigation files were read directly, including untracked files; this was not limited to the tracked diff.

**No blocking or nonblocking navigation finding.** The four real hubs preserve old course URLs and expose parallel units; FM05 is explicitly unavailable without a course link. Longest unit-path matching separates MA04/FM04 from pure mathematics, including Chinese labels and links. One shared grouping include reuses the house card; AS/IGCSE loops, nonmath fallback, CG50 priority and TMUA skip-parent remain intact. No abstraction/code-smell finding is justified; parallel bilingual authored mathematics is intentional.

Read the freshly generated HTML (13:40 local build output) for EN/ZH FM04 lessons, MA04, Chinese MA05, FM03 and the Chinese Further hub; observed the correct subject → unit → topic chains. Physics EN/ZH, AS, TMUA and CG50 samples retained their expected branches. Other-subject source paths, subjects layout and house card have no baseline diff. This is source/HTML evidence only, not browser acceptance or an independently rerun build/regression suite.

## Final reviewed source hashes

SHA256 of exact file bytes at the S5 closure snapshot, including the hub-return links, targeted repairs, four new tasks and unique ratio anchors. All 22 were refreshed; unchanged-file evidence is inherited only where hashes match. NEW rows also enumerate every untracked production file in the requested content paths.

| Reviewed file | Baseline status | SHA256 |
| --- | --- | --- |
| [alevel/a2-further-mathematics/statistics/association-tests.md](../../alevel/a2-further-mathematics/statistics/association-tests.md) | NEW | `a38b55df4af7dec72bb401dd09881cbc31e9b9b737a8b2dfc45aa84638bc5bd4` |
| [alevel/a2-further-mathematics/statistics/comparing-means.md](../../alevel/a2-further-mathematics/statistics/comparing-means.md) | NEW | `270ec25d6b7fd020b4406d896e76d2476b6b133b151a4291283c8b58a0b50efa` |
| [alevel/a2-further-mathematics/statistics/confidence-intervals.md](../../alevel/a2-further-mathematics/statistics/confidence-intervals.md) | NEW | `ebbbec9e001fb747ecae1474b37523d2447550ed639e16d8de41bf1f27ff8544` |
| [alevel/a2-further-mathematics/statistics/estimators.md](../../alevel/a2-further-mathematics/statistics/estimators.md) | NEW | `9230aa1e72a33ccf26812c85d67d123616bd680752d2f185728493226b416762` |
| [alevel/a2-further-mathematics/statistics/goodness-of-fit.md](../../alevel/a2-further-mathematics/statistics/goodness-of-fit.md) | NEW | `9adba1a85daceba2e69466c9b8b07372247d8bf42de7dd9141163f800c703995` |
| [alevel/a2-further-mathematics/statistics/index.md](../../alevel/a2-further-mathematics/statistics/index.md) | tracked edit | `35d7ecfad5a1443faee5a6d3ac1f51e094d418f577dad4728360d8f3c5785737` |
| [alevel/a2-further-mathematics/statistics/moment-generating-functions.md](../../alevel/a2-further-mathematics/statistics/moment-generating-functions.md) | tracked edit | `d0980ca099a2c124fd5a94263c6382659261b0dfa002370adbc50cc1eefc196b` |
| [alevel/a2-further-mathematics/statistics/paired-tests.md](../../alevel/a2-further-mathematics/statistics/paired-tests.md) | NEW | `4836c24bb937a717e0ea91847401d9cb74cd6b41db631104afe053ef7c985ead` |
| [alevel/a2-further-mathematics/statistics/standard-mgfs.md](../../alevel/a2-further-mathematics/statistics/standard-mgfs.md) | NEW | `6df5201b42b66ddf7bf3ae31648e1617f8e55789e6b15293e5887b8a0ed7e7fe` |
| [alevel/a2-further-mathematics/statistics/test-power.md](../../alevel/a2-further-mathematics/statistics/test-power.md) | NEW | `6f386fa8c3ebdb45ad5c8adf1ffbc86c3c067ddf324bedcf575b733d1a397d77` |
| [alevel/a2-further-mathematics/statistics/variance-tests.md](../../alevel/a2-further-mathematics/statistics/variance-tests.md) | NEW | `f0b1fa24a99f7b3764f24d4925afbc9bf8bab8b4217f474b8f5fd2066f3d0e32` |
| [zh/alevel/a2-further-mathematics/statistics/association-tests.md](../../zh/alevel/a2-further-mathematics/statistics/association-tests.md) | NEW | `ebd29cd8ffde4cc16885c85cf5267625d82be0394e490c13e277dabf5a444c71` |
| [zh/alevel/a2-further-mathematics/statistics/comparing-means.md](../../zh/alevel/a2-further-mathematics/statistics/comparing-means.md) | NEW | `bd7f300cc6f10c074983a5e728ce822f5c90df4f26e5135d070d8164be979c2c` |
| [zh/alevel/a2-further-mathematics/statistics/confidence-intervals.md](../../zh/alevel/a2-further-mathematics/statistics/confidence-intervals.md) | NEW | `ebb8932c21d8465f990209811e1fe0c4b925ecff01d3889b45d876cf1d287ecf` |
| [zh/alevel/a2-further-mathematics/statistics/estimators.md](../../zh/alevel/a2-further-mathematics/statistics/estimators.md) | NEW | `d8545513cae3f3bbea6944adc6627ab7329c81ab1579e18755f66a0c28220591` |
| [zh/alevel/a2-further-mathematics/statistics/goodness-of-fit.md](../../zh/alevel/a2-further-mathematics/statistics/goodness-of-fit.md) | NEW | `418800fad51a0a89303d7f789ed3b804e2be42fb9100d31f17d6e4920dcfa501` |
| [zh/alevel/a2-further-mathematics/statistics/index.md](../../zh/alevel/a2-further-mathematics/statistics/index.md) | tracked edit | `a8fe9c27bcad31c72cac0088404c722e30eed0cdb298a8de429e0f16e3216867` |
| [zh/alevel/a2-further-mathematics/statistics/moment-generating-functions.md](../../zh/alevel/a2-further-mathematics/statistics/moment-generating-functions.md) | tracked edit | `41bce9c63c1baf44bf8c27d302ffeef1db6312f36f7dac328e333a23b2b3783c` |
| [zh/alevel/a2-further-mathematics/statistics/paired-tests.md](../../zh/alevel/a2-further-mathematics/statistics/paired-tests.md) | NEW | `1afdbee0e1242d275810be469faf44cf32e34681b2352e994153909ca8f03df1` |
| [zh/alevel/a2-further-mathematics/statistics/standard-mgfs.md](../../zh/alevel/a2-further-mathematics/statistics/standard-mgfs.md) | NEW | `270aac6450f481522ca9215c51a1ee647a433b54fdcfc04469d6c3a718d439a3` |
| [zh/alevel/a2-further-mathematics/statistics/test-power.md](../../zh/alevel/a2-further-mathematics/statistics/test-power.md) | NEW | `d6dfc51ed478a03fdde3ac725582555be7c7677e52c4ac99c2f534c261bbbb8c` |
| [zh/alevel/a2-further-mathematics/statistics/variance-tests.md](../../zh/alevel/a2-further-mathematics/statistics/variance-tests.md) | NEW | `19cc6194e738c83292351e185f8edf754da0e660ccf7c0d18d314861e8392855` |

Skipped: publication, production fixes, browser checks, build and calculation-suite reruns. Targeted arithmetic above was independently reconstructed. Main owns technical regression/acceptance. Student trials and delayed retention remain unperformed; author self-checks do not replace them.
