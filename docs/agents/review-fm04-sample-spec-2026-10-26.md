# Independent FM04 sample: Spec and mathematics review

Date: 2026-10-26. Baseline and observed HEAD: `8b58901dd56bd3e5aa0e56e4a3b8b3616d095fd0`.

Final-version recheck, 2026-10-26: this decision and the fingerprints below include the subsequent bilingual Task B repair. Both prompts now explicitly require justification starting from the definition, and both solutions show the complete expectation chain. Reversing only that prompt insertion and the two added display lines reproduces each originally reviewed lesson's SHA-256 exactly; the other six fingerprinted Markdown sources are unchanged. All eight prompts, twenty display blocks and fifteen anchors were compared again and remain identical between languages. The repair is mathematically correct and strengthens the evidence for deriving the affine property; the pass and the evidence limits below remain applicable.

## Decision and boundaries

**Pass for the stated finite-distribution sample, with no actionable mathematical correctness or bilingual-answer findings.** All eight question blocks and every incidental example were independently solved, not merely compared between translations. Exact rational enumeration independently confirms all means, second moments, variances and distribution comparisons. This is a Spec/math decision, not a release, rendering or student-mastery decision.

Reviewed the four new untracked files under `alevel/a2-further-mathematics/statistics/` and `zh/alevel/a2-further-mathematics/statistics/`: each directory's `index.md` and `moment-generating-functions.md`. Their contents are not represented by an empty baseline-to-HEAD diff; the actual untracked sources were read. No course files, Git state, dependencies or network resources were changed. This report is the only file written by this review.

Design authority: [textbook/papers design card](research-fm04-textbook-papers-2026-10-26.md) and [independent scope/route research](research-fm04-scope-route-2026-10-26.md). Applied the relevant content requirements in [course-content-standard.md](course-content-standard.md), AGENTS.md and [formula guidelines](../MATH_FORMULA_GUIDELINES.md). This deliberately scoped review does not claim a separate Standards/code review.

Official qualification/syllabus identity is inherited from the supplied independent scope report (identified as Tesla's report in the request): 9665 v5.2, FS2 / FM04. I did not revisit the qualification website or independently reauthenticate that specification. The author's source record identifies January 2025 Q8 and MS pp.17–18, including a visual correction to the extracted QP domain. I did not read those PDF pages independently; the available local QP/MS bytes were hashed only. Thus this review confirms the lesson's mathematics, not a fresh official-source transcription or full-paper review. No official question is reproduced in the sample.

## Findings and qualification of the pass

No actual wrong answer, invalid MGF manipulation, missing essential prerequisite that blocks the stated finite lesson, bilingual condition mismatch, or claim of completed FM04 coverage was found.

Two evidence limits should remain visible in the author's acceptance record:

1. **Restricted existence domains are explained, not independently assessed.** EN lesson lines 139 and 159 / ZH lines 140 and 160 state the transformed-input and common-domain rules correctly, but every assessed distribution has finite support and hence domain all real numbers. The scope-route design table asks for an affine application that explains restrictions. These tasks establish the finite affine property; they do not establish the ability to solve a nontrivial domain inequality or intersect domains for a difference. This is not a wrong sample answer or a demand to add continuous examples now. Retain that assessment as pending for the planned continuous/standard-distribution lesson; do not later count this sample as evidence of that ability.
2. **Prerequisite declarations are abbreviated, but recovery exists.** The entrances name weighted averages and exponential differentiation. The actual work also uses second moments/variance and independent-sum versus scaling rules. The linked discrete-uniform `#demonstration` explicitly supplies the moment and variance definitions; the linked linear-combinations `#model` supplies mean/variance rules and continues into covariance/independence. The lesson itself explains joint-probability factorisation before using the product. Consequently there is no unsupported compulsory PGF prerequisite or unresolved essential gap here. Making variance and independence explicit in the opening would improve signposting, rather than repair a false theorem.

These limits do not justify marking all FS2.1, all continuous MGFs, or statistical inference as reviewed. Nor does an independent task being present establish that students can solve it.

## Independent solutions: all question blocks

All variables in the following calculations have finite support. Every MGF below therefore exists for every real input. In each probability list, the probabilities correspond to the listed values in order.

### Complete worked example, EN 87 / ZH 88

For values 0 and 2 with probabilities 1/2 each,

$$
M_X(t)=\frac12+\frac12e^{2t},\qquad M_X'(t)=e^{2t},\qquad M_X''(t)=2e^{2t}.
$$

At zero the derivatives are 1 and 2. Independently, direct weighting gives mean 1 and second moment 2, so variance is 1. The weighting table and the explanation that setting the input to zero before differentiating loses the needed information are correct.

### Task A, EN 182 / ZH 183

From the three probability masses,

$$
\begin{aligned}
M_W(t)&=\tfrac14e^{-t}+\tfrac12+\tfrac14e^{2t},\\
M_W'(t)&=-\tfrac14e^{-t}+\tfrac12e^{2t},\\
M_W''(t)&=\tfrac14e^{-t}+e^{2t}.
\end{aligned}
$$

Thus the mean is 1/4 and the second moment is 5/4. Directly these are respectively the sums of the masses weighted by the values and their squares: negative 1/4 plus 2/4; and 1/4 plus 4/4. Subtracting the squared mean gives variance 19/16. All derivative coefficients, signs and the second-moment/variance feedback agree.

### Task B, EN 216 / ZH 217

The final prompt explicitly asks for a derivation from the definition. Its expanded solution correctly uses the exponent identity and factors a deterministic constant out of expectation:

$$
\begin{aligned}
M_Y(t)&=E(e^{t(3-2W)})\\
&=e^{3t}E(e^{(-2t)W})\\
&=e^{3t}M_W(-2t).
\end{aligned}
$$

No independence assumption is needed for this single-variable transformation. Mapping each original value gives values 5, 3, negative 1 with probabilities 1/4, 1/2, 1/4. Consequently,

$$
\begin{aligned}
M_Y(t)&=e^{3t}M_W(-2t)=\tfrac14e^{5t}+\tfrac12e^{3t}+\tfrac14e^{-t},\\
M_Y'(t)&=\tfrac54e^{5t}+\tfrac32e^{3t}-\tfrac14e^{-t},\\
M_Y''(t)&=\tfrac{25}4e^{5t}+\tfrac92e^{3t}+\tfrac14e^{-t}.
\end{aligned}
$$

The zero-point derivatives are 5/2 and 11. Variance is 19/4. Direct weighting of the transformed support gives the same values, and scaling the old variance by 4 also gives 19/4. The solution correctly handles the negative coefficient.

### Task C, EN 247 / ZH 248

Convolving the probability table independently gives this distribution for the sum:

| Sum value | -2 | -1 | 0 | 1 | 2 | 4 |
| --- | --- | --- | --- | --- | --- | --- |
| Probability | 1/16 | 1/4 | 1/4 | 1/8 | 1/4 | 1/16 |

Therefore,

$$
M_S(t)=\tfrac1{16}e^{-2t}+\tfrac14e^{-t}+\tfrac14+\tfrac18e^t+\tfrac14e^{2t}+\tfrac1{16}e^{4t}=[M_W(t)]^2.
$$

Direct first and second moments are 1/2 and 21/8, giving variance 19/8. Equivalently the derivative of the square at zero gives twice the old first moment, while the second derivative gives twice the old second moment plus twice the square of the old first moment.

Doubling one draw instead gives values negative 2, 0, 4 with probabilities 1/4, 1/2, 1/4:

$$
M_T(t)=M_W(2t)=\tfrac14e^{-2t}+\tfrac12+\tfrac14e^{4t}.
$$

Its first two moments are 1/2 and 5, hence variance 19/4. The unequal variances disprove equal distributions. The lesson's support counterexample is also valid: the sum has value negative 1 with probability 1/4, while the doubled draw cannot take it.

### Retry A, EN 278 / ZH 279

The exponential weights recover values negative 2 and 1 with probabilities 2/3 and 1/3. Differentiating gives

$$
M_R'(t)=\frac{-4e^{-2t}+e^t}{3},\qquad M_R''(t)=\frac{8e^{-2t}+e^t}{3}.
$$

Thus the mean is negative 1, second moment 3, variance 2. Direct sums give negative 4/3 plus 1/3 for the mean, and 8/3 plus 1/3 for the second moment. Both requested methods agree. Recovering masses from this finite exponential form does not require students to prove a general MGF uniqueness theorem.

### Retry B, EN 305 / ZH 306

Transforming the recovered support gives values 4 and 1 with probabilities 2/3 and 1/3:

$$
\begin{aligned}
M_V(t)&=e^{2t}M_R(-t)=\tfrac23e^{4t}+\tfrac13e^t,\\
M_V'(t)&=\tfrac83e^{4t}+\tfrac13e^t,\\
M_V''(t)&=\tfrac{32}3e^{4t}+\tfrac13e^t.
\end{aligned}
$$

The mean is 3 and second moment 11; variance is 2. These also follow by direct weighting of the two values, independently of the affine formula.

### Retry C, EN 329 / ZH 330

One draw has mean and second moment 1/3, hence variance 2/9. Its MGF is two thirds plus one third of the exponential of the input. Independent addition gives values 0, 1, 2 with probabilities 4/9, 4/9, 1/9:

$$
M_{B_1+B_2}(t)=\tfrac49+\tfrac49e^t+\tfrac19e^{2t}.
$$

The first two moments are 2/3 and 8/9; variance is 4/9. Doubling one draw gives values 0, 2 with probabilities 2/3, 1/3:

$$
M_{2B_1}(t)=\tfrac23+\tfrac13e^{2t}.
$$

Its first two moments are 2/3 and 4/3; variance is 8/9. The lesson's functions, variance ordering and value-1 counterexample are all correct.

### Mixed later task, EN 360 / ZH 361

The original values are 1 and 3, equally likely. Mean 2, second moment 5, variance 1. Enumerating the four ordered pairs for the independent difference gives values negative 2, 0, 2 with probabilities 1/4, 1/2, 1/4:

$$
\begin{aligned}
M_P(t)&=M_A(t)M_A(-t)=\tfrac14e^{-2t}+\tfrac12+\tfrac14e^{2t},\\
M_P'(t)&=-\tfrac12e^{-2t}+\tfrac12e^{2t},\\
M_P''(t)&=e^{-2t}+e^{2t}.
\end{aligned}
$$

Mean zero, second moment and variance 2. For the shifted variable the values are negative 1 and 1 with equal probabilities:

$$
\begin{aligned}
M_Q(t)&=e^{-2t}M_A(t)=\tfrac12e^{-t}+\tfrac12e^t,\\
M_Q'(t)&=-\tfrac12e^{-t}+\tfrac12e^t,\\
M_Q''(t)&=\tfrac12e^{-t}+\tfrac12e^t.
\end{aligned}
$$

Mean zero, second moment and variance 1. Equal means do not imply equal distributions; both the variance and support arguments in the provided answer work. Independence is needed between the original draw and the independent copy; the two constructed variables need not be independent of one another, and the solution does not assume they are.

## Incidental examples and theorem checks

- **Affine example in the exposition:** subtracting the original 0-or-2 draw from 1 produces values 1 and negative 1 with equal weights. The MGF is half the sum of the positive- and negative-input exponentials. Its derivatives at zero give mean zero, second moment 1, variance 1.
- **Independent-copy example in the exposition:** the sum of two 0-or-2 draws has masses 1/4, 1/2, 1/4 at 0, 2, 4. Mean 2, second moment 6, variance 2. Twice one draw has masses 1/2 at 0 and 4; mean 2, second moment 8, variance 4. Both displayed MGFs and the support distinction are correct.
- **Existence:** finite support guarantees a finite MGF for every real input. Finiteness at zero alone is not enough; every random variable has expectation of the zero-input exponential equal to 1. The lesson explicitly requires finiteness on an open interval containing zero before applying its general moment rules, and does not claim all distributions have such an interval.
- **Derivative logic:** differentiating finite sums term by term is valid. For a general distribution, finiteness on a zero-neighbourhood is a sufficient condition for differentiating under expectation in a smaller neighbourhood and obtaining all ordinary moments. One justification is to dominate polynomial factors times the exponential by exponentials at two slightly more distant inputs still within the finite interval. The sample need not teach dominated convergence to use this correct condition. There is no unjustified differentiation at an isolated endpoint.
- **Affine property:** constants factor out of expectation, giving the outside shift exponential and the rescaled input. The domain is exactly the inputs whose rescaled input belongs to the original finiteness domain. For zero scale the result is a constant random variable with an everywhere-finite MGF; the stated rule also covers that case without division by zero. For negative scale the inequality reversal advice is correct. Differentiation also gives mean equal to shift plus scale times the original mean, and variance equal to squared scale times the original variance.
- **Independence:** the double finite sum is correctly factored using joint-probability factorisation. For different variables use the intersection of their domains; for a difference also reflect the subtracted variable's input. In the later task this intersection is all real inputs. The text does not infer independence from writing two symbols, matching means, zero covariance or the product formula alone. The example contrasting a repeated variable with independent copies is nondegenerate and valid; it does not assert those constructions can never agree for a constant variable.
- **PGF connection:** the zero/one evaluation points and ordinary/factorial second moments are correctly distinguished. This paragraph is explicitly conditional on prior PGF study and is not a compulsory starting point. It should not be interpreted as a new assertion that PGFs apply without support or finiteness conditions; the linked PGF course supplies its setting.

## Bilingual, TeX, route and learning-evidence checks

- All **eight English Question paragraphs are byte-for-byte identical** between language versions, retaining values, probabilities, instructions and independence conditions.
- All **20 display-math blocks are identical**, as are the **15 explicit lesson anchors**. All numerical answers and the surrounding Chinese explanations were read semantically against the English. Inline-math counts differ (157 EN, 163 ZH), because natural Chinese prose separately delimits symbols and separates the two original outcomes; this is not a formula or task mismatch. The only inline-token multiset differences are those extra/separated elementary symbols, not changed answer formulas.
- Source-level TeX checks found no malformed mathematical expression or ASCII vertical bar inside mathematics. The only raw vertical bars in the four sources are table separators. Aligned derivative rows have valid alignment markers. Negative signs, subscripts, primes for the independent copy, integration support notation and variance squares are consistent. This does not certify the actual MathJax output.
- Each lesson has eight balanced sections and fifteen balanced details blocks: seven separate hint/solution pairs and one source record. The complete example is open; task hints and answers are separate and have no source-level `open` attribute. Task titles do not reveal their numerical answers. The presence of a hint is not counted as unaided performance.
- All local Markdown navigation/prerequisite targets and explicitly linked fragment IDs in the four files resolve in the current checkout. Chinese links point to the corresponding Chinese routes. Translation metadata targets the matching English route. Browser behaviour of the shared language switch was not tested.
- The core design goals have identifiable evidence: Task A tests construction and ordinary moments; B explicitly requires deriving the negative-coefficient affine transformation from the definition; C tests independent addition versus scaling; Retry A reverses the representation; Retry B tests a reflected/shifted variable; Retry C revisits independence on new data; the delayed task combines reconstruction, subtraction and shifting without naming the required properties. Feedback routes to the actual definitions and a fresh retry. These are credible opportunities for assessment, not observed student outcomes.
- The two indexes accurately call this one starting sample. Continuous derivations, Poisson/exponential/normal, estimators, intervals and tests are marked planned. The lesson only introduces the continuous definition, explicitly defers the derivations and states that it is not all FM04. The initial scope report's statements that there were no assets are a historical pre-authoring audit, not a current claim overriding the new sample. No overclaimed completed coverage was found.

## Source fingerprints

SHA-256 of the exact reviewed bytes; paths below are relative to the repository root unless stated otherwise. The four sample hashes must match before reusing this decision after concurrent work.

| Source | SHA-256 |
| --- | --- |
| `alevel/a2-further-mathematics/statistics/index.md` | `4e839d36396842459e22347e6299cee620198859a42ea5dbf37aded397072363` |
| `alevel/a2-further-mathematics/statistics/moment-generating-functions.md` | `b4d155ffacd3d87609eee2a63cb41a8bc9f93b82e881e2fafe995836aaa96284` |
| `zh/alevel/a2-further-mathematics/statistics/index.md` | `1a0ffd6e3cd05c23fdb48e7fdc312045c6918eb058260d7c5c8671165b87931f` |
| `zh/alevel/a2-further-mathematics/statistics/moment-generating-functions.md` | `67ce6cb6085f4f5bf976269738d1a840bf239cc8cad3db7aa66fb667072c6bc9` |
| `docs/agents/research-fm04-textbook-papers-2026-10-26.md` | `0d0f6fa1ff24ac32421b99d1068f5a766956f21c374c64a0e2f95d3324ff1cf0` |
| `docs/agents/research-fm04-scope-route-2026-10-26.md` | `e0256193f2a79590e88b243b49e549f00bba535d1b0458c042f0850246be2c84` |
| `docs/agents/course-content-standard.md` | `887c470bccb0dc7789688557b69667d0955923cc619a5133a6deab34351b5ec7` |
| `docs/MATH_FORMULA_GUIDELINES.md` | `d83bbd9523b70d833dfbe511e0be966baca36b0ee4bdd04040222620bc7843d1` |

The two supplied PDF files are under `C:/Users/mi/.codex/visualizations/2026/10/22/01a1618d-79b0-7581-ba24-4e304590d78c/`. These are provenance fingerprints only, not evidence that their content was independently read here:

| Available local file | SHA-256 |
| --- | --- |
| `fm04-jan2025-qp.pdf` | `6a76fa756d16c1ad5afc4d395f75265539c00de6d7b259d76b083c76c925b52f` |
| `fm04-jan2025-ms.pdf` | `8e68080338bde42e771348d1684b7b065baa756d32c52aae28a40320d2a352f1` |

## Checks not performed

No network access, new official-source reading, textbook scan reading, Jekyll build, generated-HTML inspection, MathJax execution, desktop/mobile browser reading, keyboard test or student trial. No stored review/test scripts were added: the exact-rational enumeration, prompt/formula/anchor comparison and local-link assertions ran in memory using the installed Node runtime. This mathematical/content pass must remain separate from those unperformed checks and from publication authorization.
