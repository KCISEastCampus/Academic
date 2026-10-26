# FM04 sample — independent Standards review

Date: 2026-10-26. Reviewer: independent Codex review in this chat, based on direct source reading and independent reconstruction, not the author's content-check conclusion.

**Final verdict after targeted re-review: S1 resolved; no outstanding Standards content blockers in the reviewed finite-distribution sample.** The revised bilingual Task B now independently requires definition-based justification and provides a correct closed derivation. This is a content-review pass within the stated sample scope, not technical acceptance, full-FM04 coverage or evidence of student learning. Course files were not changed by the reviewer.

## Scope and evidence

Reviewed the English and Chinese statistics entry pages and MGF lessons listed in the hash table below. Baseline `HEAD 8b58901` and “four new untracked files” are user-supplied context, not independently verified Git facts. No Git commands or network requests were made. This is a review of the supplied working-file snapshots, not a verified commit diff.

Standards: [AGENTS.md](../../AGENTS.md), [course-content-standard.md](course-content-standard.md), and the mathematical notation guidance. Design context: [textbook/papers and sample design](research-fm04-textbook-papers-2026-10-26.md) and [scope/route research](research-fm04-scope-route-2026-10-26.md). Relevant course recovery destinations were read and their explicit anchors checked. No layout, configuration, generated site or unrelated implementation was inspected.

The code-review skill's Standards heuristics were applied only where meaningful; the user's requested single-axis, read-only review overrides that skill's default Git/two-axis workflow. Repository teaching and bilingual requirements take precedence over generic duplication heuristics.

## Initial finding history

The following finding and proposed fix describe the initial snapshots, whose lesson hashes are retained below. S1's current status is **resolved**; its original wording is preserved for traceability.

### S1 · P2 · Independently assess the declared derivation goal — resolved on re-review

**Locations:** both MGF lessons, `#transform`, `#task-b`, `#retry-b`; English lines 117–139, 214–235 and 301–317; Chinese lines 118–140, 215–236 and 302–318. The design's objective table explicitly states **“推出并使用仿射性质”** and identifies Task B as its independent evidence.

The lesson teaches the general derivation

$$M_{a+bX}(t)=E(e^{t(a+bX)})=e^{at}E(e^{btX})=e^{at}M_X(bt).$$

However, Task B only asks for the MGF and moments of a particular transformed variable; Retry B and the later review likewise ask for applications. A learner can answer every required part by recalling the displayed formula and reading the transformed support, without independently reconstructing why the outside exponential and the changed input appear. Such answers establish **use**, but do not establish the separately declared **derive** capability. A worked derivation is teaching evidence, not independent production evidence.

**Standard:** course-content-standard §§1 and 4 require the independent task to call on the stated capability; §7 prevents claiming completion when a core declared objective lacks valid independent evidence. This is a documented alignment issue, not a code-smell judgement or a demand to reproduce every proof in every lesson.

**Minimal fix:** add one explicit part to Task B in both languages, retaining its English question: “Starting from the definition of an MGF, derive the relation between the MGFs of $a+bW$ and $W$, where $a,b$ are real constants, before applying it to $Y=3-2W$.” Add the three-line expectation argument to its closed solution. Extend Retry B with a short requirement to justify its MGF from $E(e^{tV})$, with the previous answer closed. This repairs both assessment and recovery without adding a separate task or changing the lesson structure. The finite $W$ avoids introducing new convergence requirements. Recheck the affected bilingual question, solution and retry after editing.

The current applications remain valid evidence for using the property. Do not remove an intended capability merely to make the evidence table appear complete; if the intended goal was only application, that narrower project decision must be explicit before the alignment claim changes.

## Targeted re-review of S1 · 2026-10-26

**Final locations:** English `#task-b`, lines 216–237; Chinese `#task-b`, lines 217–238. Both questions now explicitly require: “Starting from the definition, justify the MGF transformation you use.” The two English question stems match exactly. The solutions in their separate, default-closed disclosures now show

$$
\begin{aligned}
M_Y(t)&=E(e^{t(3-2W)})\\
&=e^{3t}E(e^{(-2t)W})\\
&=e^{3t}M_W(-2t)\\
&=\frac14e^{5t}+\frac12e^{3t}+\frac14e^{-t}.
\end{aligned}
$$

Independently reconstructed the argument: $t(3-2W)=3t+(-2t)W$, the exponential of a sum factors, and the deterministic $e^{3t}$ can be taken outside the expectation. Recognising the remaining expectation as $M_W(-2t)$ then gives the stated expansion. The transformed support $5,3,-1$ with weights $1/4,1/2,1/4$ yields $E(Y)=(5+6-1)/4=5/2$, $E(Y^2)=(25+18+1)/4=11$ and variance $11-25/4=19/4$. Since $W$ has finite support, every displayed expectation is finite for all real $t$; no extra domain or independence assumption is needed.

The revised question makes mere formula recall insufficient for full completion. Reconstructing this nontrivial affine case from the definition provides the missing independent derivation opportunity alongside application; requiring a fully symbolic $a,b$ proof was a suggested fix, not an additional acceptance condition. The result remains inside a closed solution, so the added reasoning does not leak the answer into the question or hint.

**Recovery check:** `#retry` still sends scaling/input errors to `#transform` and Retry B. Retry B is unchanged: it asks for the MGF and a support-based moment check for $V=2-R$, with a separate closed hint directing substitution into $e^{tV}$. This remains a usable recovery task. The earlier suggestion to add an explicit derivation requirement to Retry B would strengthen repeated assessment, but is not necessary to close the original absence of independent derivation evidence now repaired in Task B. No claim is made that the unchanged retry independently requires a full derivation.

**Change boundary and inherited evidence:** without Git, removed just the new question sentence and the two added derivation steps in memory and recomputed each lesson's SHA-256. Both reconstructed byte streams exactly matched their initial hashes. Thus the only lesson changes since the initial review are the Task B question and solution in both languages. Both entry-page hashes and all four recorded standard/design hashes are unchanged. All eight bilingual English question stems still match; section/disclosure structure and recovery links were not altered. The original review evidence for unaffected content is inherited, rather than claiming a second full review or rerunning unrelated checks.

**Disposition:** S1 closed. No new blocker found in the targeted changes. Technical and student-trial limitations below remain in force.

## What the source supports

| Capability | Teaching and independent evidence | Recovery and review judgement |
| --- | --- | --- |
| Build an MGF from probabilities | `#meaning` gives a value/probability/exponential contribution table; `#example` completes the calculation; Task A introduces negative support and three weighted terms. | `#retry` points to `#meaning`; Retry A reverses representation, recovering support and probabilities from a new MGF. This is meaningful variation rather than just changing numbers. |
| Recover ordinary moments and variance | `#moments` explains differentiation with respect to $t$, holding $x$ fixed, and evaluation at zero; Task A asks for both moments and variance plus direct checking. | The variance/second-moment distinction is diagnosed in Task A's solution; `#retry` names wrong evaluation points and directs the learner to `#moments` and Retry A. |
| Derive and use affine transformations | `#transform` teaches a complete definition-based argument; revised Task B independently requires definition-based justification, application with a negative coefficient and a direct support check. | Retry B checks changed inputs and moments with a closed definition-based hint. **S1 resolved; see targeted re-review.** |
| Distinguish independent addition from repeated use of one variable | `#sums` factors the joint probabilities and gives an explicit counterexample; Task C asks for functions, moments and a distribution comparison. | `#retry` directs unjustified multiplication to `#sums`; Retry C uses a new unequal-probability distribution. This is a targeted correction, not proof of general mastery. |
| Reconstruct and combine properties later | `#later-review` supplies an MGF rather than a probability table and combines an independent difference with centring. | Separate hint and answer; sign/input and independence errors return to named sections and corresponding retries. Actual delayed performance has not been observed. |

**Beginner reconstruction.** The probability-weighted exponential table explains where each term comes from; $t$ is explicitly distinguished from time and random outcomes. The derivative argument explains the chain-rule factors, ordinary rather than factorial moments, and why differentiation precedes substitution. The worked example continues from question through calculation to direct probability checks inside one section. The transformation and independent-sum arguments expose their key choices. The prerequisite link contains the definitions of the first two moments and variance; the linear-combinations recovery contains the relevant mean/variance and independence discussion. These are usable source-level recovery routes. No need to learn PGFs is imposed; that comparison is optional.

**Exact conditions.** The text distinguishes finite support (all real $t$) from general distributions requiring finiteness on an open interval containing zero for the moment rules. $M(0)=1$ is correctly described as necessary but insufficient. The continuous formula is introduced without pretending that a continuous worked derivation is present. Affine substitution requires $bt$ in the original existence range, including reversal of inequalities for negative $b$; when $b=0$, the formula reduces to the constant-variable MGF without division by zero. The sum proof explicitly uses independent joint probabilities and a common domain. It does not equate equal means with equal distributions or assume two occurrences of one variable are independent. Existence-range manipulation is explained but not independently assessed; this finite-support sample does not establish mastery of restricted-domain problems.

**Task boundaries and leakage.** Source checks found one complete worked-example section, seven separate task/retry/review sections, balanced and properly nested section/details tags, and separate closed hints and solutions. The task titles are neutral. Task B/C references to Task A require its stated distribution, not opening its solution; Retry B can use the MGF given in Retry A without opening its answer. The later-review question explicitly asks learners to explain unequal distributions despite equal means: it assesses the explanation and computations, not an unprompted decision about whether they are equal. Do not count that supplied comparison outcome as independent discovery. No serious source-level answer leakage was found. Rendered boundaries and accessibility remain unverified.

**Bilingual help.** All eight English question stems, including the worked example, match exactly between the two lessons. Data, signs, moment results, definitions, conditions, hints, diagnostic explanations and named recovery destinations align on direct reading. Chinese prose explains rather than replacing the English tasks. Both pages provide the same opportunity to use or decline help; a hinted completion is explicitly distinguished from unassisted work. This checks opportunity for English mathematical production, not observed language competence.

**Scope and naming.** Entry pages distinguish FS2/FM04 from FM03 and ordinary MA04, offer one sample, and mark the remaining sequence as planned. The lesson acknowledges that continuous and standard-distribution derivations are unfinished; the improper-integrals link is labelled prerequisite recovery. Sources are placed in a closed reference area. The research record's textbook and QP/MS reading claims are attributable preparation records, not primary materials independently checked in this review. No full FM04 coverage, publication readiness or student-learning claim is justified by this sample alone.

**Smell heuristics.** No actionable naming, duplication or unnecessary-abstraction smell was found within scope. $M$, $t$, $X$ and other random-variable names are conventional and defined in context. Parallel bilingual content is required; extracting it into an abstraction would not repair a demonstrated problem. Repeating a probability example as a full worked solution and direct check has a clear teaching purpose. Existing section and disclosure patterns are reused; no novel abstraction appears in the four sources.

## Independent mathematical checks

Reconstructed each finite probability distribution and calculated $E(Z)=\sum zp_z$, $E(Z^2)=\sum z^2p_z$ and variance independently of the displayed solutions. Independent sums/differences were enumerated with joint weights $p_i p_j$; affine transformations mapped the support directly. Exact rational arithmetic assertions then confirmed the following values. Coefficients and exponents of the shown MGFs were compared with those reconstructed supports and probabilities; the displayed first/second derivatives were also checked by differentiation.

| Construction | Mean | Second moment | Variance |
| --- | --- | --- | --- |
| Worked example $X$ | $1$ | $2$ | $1$ |
| Task A: $W$ | $1/4$ | $5/4$ | $19/16$ |
| Task B: $3-2W$ | $5/2$ | $11$ | $19/4$ |
| Task C: $W_1+W_2$ | $1/2$ | $21/8$ | $19/8$ |
| Task C: $2W_1$ | $1/2$ | $5$ | $19/4$ |
| Retry A: $R$ | $-1$ | $3$ | $2$ |
| Retry B: $2-R$ | $3$ | $11$ | $2$ |
| Retry C: $B_1+B_2$ | $2/3$ | $8/9$ | $4/9$ |
| Retry C: $2B_1$ | $2/3$ | $4/3$ | $8/9$ |
| Later review: $A-A'$ | $0$ | $2$ | $2$ |
| Later review: $A-2$ | $0$ | $1$ | $1$ |

For example, convolution gives Task C's $S$ support $-2,-1,0,1,2,4$ with weights $1/16,1/4,1/4,1/8,1/4,1/16$. Thus $P(S=-1)=1/4$, while $2W_1$ cannot equal $-1$. The mixed-review difference has weights $1/4,1/2,1/4$ on $-2,0,2$; the centred variable has weights $1/2,1/2$ on $-1,1$. These directly verify both distribution distinctions without relying on an MGF uniqueness theorem or on the author's answers. All checked task computations agree.

## Version fingerprints and limits

SHA-256 hashes of raw file bytes. The table below records the final targeted re-review snapshots; the initial review hashes were checked before and after that review. Later content changes require checking the affected findings and evidence again.

| Reviewed course source | SHA-256 |
| --- | --- |
| `alevel/a2-further-mathematics/statistics/index.md` | `4E839D36396842459E22347E6299CEE620198859A42EA5DBF37ADED397072363` |
| `alevel/a2-further-mathematics/statistics/moment-generating-functions.md` | `B4D155FFACD3D87609EEE2A63CB41A8BC9F93B82E881E2FAFE995836AAA96284` |
| `zh/alevel/a2-further-mathematics/statistics/index.md` | `1A0FFD6E3CD05C23FDB48E7FDC312045C6918EB058260D7C5C8671165B87931F` |
| `zh/alevel/a2-further-mathematics/statistics/moment-generating-functions.md` | `67CE6CB6085F4F5BF976269738D1A840BF239CC8CAD3DB7AA66FB667072C6BC9` |

Initial lesson snapshots supporting S1's history (entry pages unchanged):

| Initial reviewed lesson | SHA-256 |
| --- | --- |
| English MGF lesson | `75AAC4EB39F4585AF7BD495C58392D2AAED9E3342E66648F44A4FC4855A7658A` |
| Chinese MGF lesson | `BD92BD3629D2C47709D7EA7A8D9B61B577904327EA035BFC2F52DF11CAE9A4DC` |

| Standard / design reference | SHA-256 |
| --- | --- |
| `AGENTS.md` | `F35107A5E62CD5AB79CE0D2AFFA0E52A77A19A65E225E9B4279AE492D9650653` |
| `docs/agents/course-content-standard.md` | `887C470BCCB0DC7789688557B69667D0955923CC619A5133A6DEAB34351B5EC7` |
| `docs/agents/research-fm04-textbook-papers-2026-10-26.md` | `0D0F6FA1FF24AC32421B99D1068F5A766956F21C374C64A0E2F95D3324FF1CF0` |
| `docs/agents/research-fm04-scope-route-2026-10-26.md` | `E0256193F2A79590E88B243B49E549F00BBA535D1B0458C042F0850246BE2C84` |

Local course links and their explicit destination anchors passed source checks, as did bilingual English-question matching and section/disclosure nesting. These are source checks, not Jekyll or browser results. A Python check could not start because `python` was not on PATH; the rational arithmetic checks were completed in JavaScript instead, without creating a helper file.

No build, generated-HTML inspection, desktop/mobile reading, keyboard operation, language-switch behaviour, live external-source verification or student trial was performed. No Git state or baseline comparison was independently verified. No course, layout, source research, configuration or other file was edited by the reviewer; only this report was created and subsequently updated. S1's targeted content re-review is complete; technical acceptance and student learning remain separate outstanding evidence.
