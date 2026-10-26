---
title: "Hypothesis testing: is the result unusual enough?"
layout: subjects
mathjax: true
grade: a2
subject: s2
permalink: /alevel/a2-mathematics/statistics/hypothesis-testing/
reading_layout: true
study_page: true
toc_headings: "#evidence, #hypotheses, #decision, #discrete-choice, #practice, #retry, #later-review, #next-step"
---

[A2 statistics course](/alevel/a2-mathematics/statistics/)
{:.lesson-meta}

A machine used to reject about one item in five. Today it rejects more. Has the process changed, or is this ordinary random variation? A test asks how surprising the data would be **if the original parameter value were still correct**. It does not prove either explanation.

Start after [estimation](/alevel/a2-mathematics/statistics/estimation/). You need independent random samples, the [binomial model](/alevel/as-mathematics/binomial/#l21-concept) and [Poisson probabilities](/alevel/a2-mathematics/statistics/poisson-distribution/). Worked examples are adapted from January 2025 MA04; other tasks are original constructed teaching situations, without official marks. Try on paper before opening help.

## Assume the claim, then inspect the evidence {#evidence}

Even a fair coin can produce many heads. “Unlikely” is not “impossible”. We set a rule beforehand for when the evidence is sufficiently unusual to reject the fair-coin claim. This resembles reasoning by contradiction, but a statistical contradiction is not a logical impossibility: a test can make a mistake.

The **null hypothesis**, H0, gives a specified value of a population parameter. The **alternative hypothesis**, H1, describes the change being investigated. The population parameter is fixed but unknown; a sample result varies. Do not write a hypothesis about the observed sample mean or count.

## Which direction supports the investigation? {#hypotheses}

For a population defective proportion p, the baseline is 0.2. Choose the direction from the investigation **before seeing the result**. Use just one of these alternatives:

$$\begin{aligned}
H_0&:p=0.2.\\
H_1&:p>0.2\quad\text{(upper tail)},\\
H_1&:p<0.2\quad\text{(lower tail)},\\
H_1&:p\ne0.2\quad\text{(two tails)}.
\end{aligned}$$

“Increased” looks for large counts; “decreased” looks for small counts. “Changed” looks in both directions. For Poisson counts, use the population mean λ for the specified interval, rather than a proportion. The same direction rule applies.

## A rule and a measure of surprise {#decision}

A **test statistic** is a quantity calculated from a sample and used to decide: here it may be the number of successes. Its observed value is one number; its **null distribution** describes all values it could take if H0 were true.

The **critical region** is the set of statistic values leading to rejection. A **critical value** is a boundary of that region. Other possible values form the **acceptance region**, or non-rejection region. “Acceptance” is a conventional label: it does not establish that H0 is true.

The significance level α is a probability limit chosen beforehand: under H0, rejection should have probability at most α. A 5% level is **not** a 5% probability that H0 is true or a 95% probability that H1 is true. In discrete models the **actual significance level**, the null probability of the critical region, is often below the nominal level because counts change in whole numbers.

A **p-value** is the probability, under H0, of a result at least as extreme as the observed one in the direction(s) specified by H1. A lower-tail count includes the observation and all smaller counts; an upper-tail count includes it and all larger counts. Usually it is not the probability of that count alone. Reject when p is at most α, using a convention consistent with the test.

Two-sided discrete tests admit different definitions of “as extreme”. This lesson uses **equal-tail allocation**: give each tail at most α/2 and take the largest possible tail region within that allowance. The two attained probabilities need not be equal. A compatible p-value is twice the smaller inclusive tail probability, capped at 1; discreteness may make the rule conservative. Follow a convention specified by the question; do not claim a uniquely correct region without stating the rule.

## Choose the count model {#discrete-choice}

Use **exact binomial** probabilities for a fixed number of independent two-outcome trials with the same success probability. Use **exact Poisson** probabilities for events occurring independently, singly and at a constant mean rate in a fixed interval. A count alone does not identify the model. Insert the hypothesised parameter under H0, not the sample proportion or count.

$$X\sim\operatorname{B}(n,p_0):$$

$$\begin{aligned}
P(X=k)&={n\choose k}p_0^k\\
&\quad\times(1-p_0)^{n-k}.
\end{aligned}$$

$$W\sim\operatorname{Po}(\lambda_0):$$

$$P(W=k)=\frac{e^{-\lambda_0}\lambda_0^k}{k!}.$$

In the first line k runs from 0 to n; in the second it is any non-negative integer. Add terms for cumulative probabilities. For an upper tail starting at c, subtract the cumulative probability through c−1 from 1. Tables below supply the values needed for these tasks; no particular calculator menu is assumed.

<div class="worked-example" markdown="1">

### Worked example: both directions {#binomial-example}

**Question:** In 50 independent trials with the same success probability p, X counts successes. Test H0: p = 0.2 against H1: p ≠ 0.2 at the 10% level, using equal-tail allocation. Find and justify a critical region, its actual significance level, and the decision when X = 17.

Adapted and extended from MA04 January 2025 Q1(b), not a verbatim original. Fixed independent trials give the exact null model. Allocate 0.05 to each tail and check whether adding the next integer exceeds its allowance.

$$X\sim\operatorname{B}(50,0.2)\quad\text{under }H_0.$$

| Event | Null probability |
| --- | --- |
| $X\le5$ | 0.0480272 |
| $X\le6$ | 0.1033982 |
| $X\ge15$ | 0.0607221 |
| $X\ge16$ | 0.0308034 |

The lower tail can include 5 but not 6; the upper tail can include 16 but not 15.

$$\begin{aligned}
\text{CR}&=\{0,\ldots,5\}\\
&\quad\cup\{16,\ldots,50\},\\
P_{H_0}(\text{CR})&=0.0480272+0.0308034\\
&=0.0788306.
\end{aligned}$$

With these inclusive inequalities, the critical values are 5 and 16; the acceptance region is the integers 6–15. The actual level is about 7.88%, within the nominal 10%. Moving 15 into the upper tail would violate the equal-tail allowance even if the total stayed below 10%. Since 17 is in the critical region, reject H0: sufficient evidence that the population success probability differs from 0.2. This is evidence, not certainty.

</div>

<div class="worked-example" markdown="1">

### Worked example: a small count {#poisson-example}

**Question:** W has a Poisson distribution with mean λ for one observation period. Test H0: λ = 4 against H1: λ < 4 at the 5% level. Find and justify a critical region. Make a decision when W = 1, and find the one-sided p-value.

Adapted and extended from MA04 January 2025 Q1(d). Use Po(4) under H0. Smaller counts support H1. Start at zero and check whether 1 can also be included.

$$\begin{aligned}
P(W=0)&=e^{-4}=0.0183156,\\
P(W\le1)&=e^{-4}(1+4)\\
&=0.0915782.
\end{aligned}$$

Only {0} fits within 0.05. Its actual level is about 1.83%, its critical value is 0 and its non-rejection region is all positive integers. The observation 1 is outside the CR. Its p-value includes 0 and 1, so p = 0.0915782 > 0.05. **Do not reject H0:** insufficient evidence that the mean count per period has decreased. This does not prove the mean equals 4.

</div>

## What if the decision is wrong? {#errors}

A **Type I error** rejects H0 when it is true: a false alarm. A **Type II error** fails to reject H0 when it is false: a missed change. In the Poisson example, Type I means suggesting a decrease when the true mean is 4. Type II means missing a decrease when the true mean is below 4. The true mean is unknown in practice, so the observed decision alone does not tell us whether an error occurred.

For the same sample design and a fixed alternative, shrinking the rejection region reduces false alarms but can increase missed changes. The significance level controls Type I risk under H0, not Type II risk. S2.6 requires understanding Type II errors, not calculating their probabilities.

## Close the examples and decide {#practice}

<section class="lesson-check" markdown="1">

### Your turn {#task-language}

**Question:** A supplier claims that 30% of its seeds germinate. A researcher asks whether the proportion has changed. Before collecting data, state a parameter, H0, H1 and the tail choice. A sample later gives 34%. Explain why this does not justify switching to an upper-tail test, and why a non-significant result would not prove the supplier correct.

<details markdown="1"><summary>Hint</summary>

Separate population and sample.

</details>

<details markdown="1"><summary>Answer and recovery</summary>

Let p be the population germination proportion.

$$H_0:p=0.30,\qquad H_1:p\ne0.30.$$

Use two tails: the question was about any change. Choosing direction after seeing 34% alters the planned error control. Non-rejection means insufficient evidence of change, not proof of p = 0.30. A sample hypothesis needs [parameter repair](#evidence); a direction error needs [hypotheses](#hypotheses). Then try [a new investigation](#retry-language).

</details>

</section>

<section class="lesson-check" markdown="1">

### Your turn {#task-regions}

**Question:** A count test rejects H0 for X ≥ 8; all non-negative integer counts are possible. Its nominal level is 5%, and P(X ≥ 8 | H0) = 0.041. For observed X = 7, P(X ≥ 7 | H0) = 0.083 and P(X = 7 | H0) = 0.042. Identify the statistic, critical value, critical region, acceptance region, actual level, upper-tail p-value and decision. Explain why 0.042 is not the p-value.

<details markdown="1"><summary>Hint</summary>

Include values beyond the observation.

</details>

<details markdown="1"><summary>Answer and recovery</summary>

Statistic: X; observed value: 7. Critical value: 8; CR: X ≥ 8; acceptance region: integers 0–7. Actual level 4.1%; p = 0.083, so do not reject at 5%. The value 0.042 counts only exactly 7. Revisit [decision vocabulary](#decision), then [a fresh rule](#retry-regions).

</details>

</section>

<section class="lesson-check" markdown="1">

### Your turn {#task-binomial}

**Question:** Twenty independent items each have the same unknown fault probability p. Investigate whether p differs from 0.25 at the 10% level, using equal-tail allocation. State hypotheses, select a null model, justify both critical boundaries and their adjacent excluded values, give the actual level, and conclude when 9 faults are found. Also find the doubled-tail p-value for this observation. Under the null model, P(X ≤ 1) = 0.0243126, P(X ≤ 2) = 0.0912604, P(X ≥ 9) = 0.0409252, P(X ≥ 8) = 0.1018119.

<details markdown="1"><summary>Hint</summary>

What is fixed? How much probability is allowed per tail?

</details>

<details markdown="1"><summary>Answer and recovery</summary>

$$\begin{aligned}
H_0&:p=0.25,\\
H_1&:p\ne0.25,\\
X&\sim\operatorname{B}(20,0.25)\quad(H_0).
\end{aligned}$$

Binomial conditions hold. Allocate 0.05 per tail: include X ≤ 1 but not 2, and X ≥ 9 but not 8.

$$\begin{aligned}
P_{H_0}(\text{CR})&=0.0243126+0.0409252\\
&=0.0652378.
\end{aligned}$$

For 9, the smaller inclusive tail is P(X ≥ 9) = 0.0409252, so the doubled-tail p-value is 0.0818504. It is below 0.10, consistent with the region decision. Nine is in the CR. Reject: sufficient evidence that the population fault probability differs from 0.25 at 10%. Wrong allocation or missing neighbouring probabilities? Revisit [both tails](#binomial-example), then [the new count task](#retry-binomial).

</details>

</section>

<section class="lesson-check" markdown="1">

### Your turn {#task-poisson}

**Question:** Calls arrive independently, singly and at a constant mean rate r per hour. Investigate an increase from r = 2.5 using a single 2-hour observation, at 5%. State hypotheses and a null model, find and justify the critical region, give its actual level and conclude for 9 calls. Relevant null upper-tail probabilities at counts 8, 9, 10 are 0.1333717, 0.0680936, 0.0318281 respectively.

<details markdown="1"><summary>Hint</summary>

Define the count interval first.

</details>

<details markdown="1"><summary>Answer and recovery</summary>

$$\begin{aligned}
H_0&:r=2.5,\\
H_1&:r>2.5,\\
X&\sim\operatorname{Po}(5)\quad(H_0).
\end{aligned}$$

The assumptions support Poisson; 2 hours gives mean 5. CR is X ≥ 10: 0.0318281 ≤ 0.05, whereas including 9 gives 0.0680936 > 0.05. Actual level ≈ 3.18%. For 9, p = 0.0680936: do not reject; insufficient evidence of an increased mean hourly call rate. Wrong mean: revisit [model choice](#discrete-choice). Wrong cutoff: [Poisson example](#poisson-example). Then [retry](#retry-poisson).

</details>

</section>

<section class="lesson-check" markdown="1">

### Your turn {#task-errors}

**Question:** A quality test has H0: p = 0.10 and H1: p > 0.10, where p is the population fault probability. Explain Type I and Type II errors in context. The test does not reject H0. A manager says, “There has definitely been no deterioration, and no error is possible.” Assess the statement.

<details markdown="1"><summary>Hint</summary>

Give the true state and the decision for each error.

</details>

<details markdown="1"><summary>Answer and recovery</summary>

Type I: p really equals 0.10 but the test rejects, suggesting deterioration. Type II: p exceeds 0.10 but the test does not reject, missing deterioration. The manager is wrong: non-rejection may be Type II and does not prove no deterioration. The decision alone cannot tell whether an error occurred. Revisit [errors](#errors), then [a new context](#retry-errors).

</details>

</section>

## Repair, then try fresh tasks {#retry}

<section class="lesson-check" markdown="1">

### Fresh attempt {#retry-language}

**Question:** A clinic investigates whether the population probability p of a missed appointment has fallen below 0.12. Write hypotheses and choose the tail before seeing data. The sample later shows a higher rate. Should the direction change? What does non-rejection mean?

<details markdown="1"><summary>Hint</summary>

Use the original investigation.

</details>

<details markdown="1"><summary>Answer and recovery</summary>

$$H_0:p=0.12,\qquad H_1:p<0.12.$$

Lower tail; do not change after seeing data. Non-rejection means insufficient evidence of a fall, not proof of 0.12. Revisit [hypotheses](#hypotheses).

</details>

</section>

<section class="lesson-check" markdown="1">

### Fresh attempt {#retry-regions}

**Question:** W can be any non-negative integer. At 5%, a test rejects when W ≤ 1. Under H0, P(W ≤ 1) = 0.017 and P(W ≤ 2) = 0.062. The observed value is 2. Give both regions, the critical value, actual level, lower-tail p-value and decision. Explain why 2 cannot be added to the critical region.

<details markdown="1"><summary>Hint</summary>

Keep the probability budget.

</details>

<details markdown="1"><summary>Answer and recovery</summary>

CR = {0,1}; acceptance region = {2,3,…}; critical value 1; actual level 1.7%. For 2, p = 0.062, so do not reject. Including 2 raises the null rejection probability to 6.2%, above 5%. Revisit [the rule](#decision).

</details>

</section>

<section class="lesson-check" markdown="1">

### Fresh attempt {#retry-binomial}

**Question:** Ten independent trials have the same success probability p. Investigate whether p differs from 0.5 at 10%, using equal-tail allocation. State hypotheses and a null model, justify both boundaries with adjacent probabilities, find the actual level and doubled-tail p-value, and conclude for 8 successes. Under H0, P(X ≤ 1) = P(X ≥ 9) = 0.0107421875 and P(X ≤ 2) = P(X ≥ 8) = 0.0546875. Explain why the actual tails can be equal here but were unequal in the earlier 20-item investigation.

<details markdown="1"><summary>Hint</summary>

Use the symmetry of this null distribution, but still check both allowances.

</details>

<details markdown="1"><summary>Answer and recovery</summary>

$$\begin{aligned}
H_0&:p=0.5,\\
H_1&:p\ne0.5,\\
X&\sim\operatorname{B}(10,0.5)\quad(H_0).
\end{aligned}$$

The fixed independent equal-probability trials justify the exact binomial model. Each tail gets 0.05. Include X ≤ 1 and X ≥ 9; adding 2 or 8 would exceed 0.05 in that tail. Actual level = 2 × 0.0107421875 = 0.021484375. For 8 the doubled-tail p-value is 2 × 0.0546875 = 0.109375, above 0.10. Do not reject: insufficient evidence that the population success probability differs from 0.5. Symmetry at p = 0.5 gives equal attained tails; equal allocation does not guarantee equal attained probabilities in an asymmetric distribution. Revisit [tail allocation](#decision) or [boundaries](#binomial-example).

</details>

</section>

<section class="lesson-check" markdown="1">

### Fresh attempt {#retry-poisson}

**Question:** Faults occur independently, singly and at a constant mean rate r per metre of cable. Investigate a decrease from r = 1.5 using a 4-metre section, at 5%. There are 2 faults. State hypotheses and a null model, justify the critical region, find the p-value and conclude. Under H0, P(X ≤ 1) = 0.0173513 and P(X ≤ 2) = 0.0619688.

<details markdown="1"><summary>Hint</summary>

Match length and rate units.

</details>

<details markdown="1"><summary>Answer and recovery</summary>

$$\begin{aligned}
H_0&:r=1.5,\\
H_1&:r<1.5,\\
X&\sim\operatorname{Po}(6)\quad(H_0).
\end{aligned}$$

The null mean is 1.5 × 4 = 6. CR is X ≤ 1: 0.0173513 ≤ 0.05 but 0.0619688 > 0.05. Observing 2 gives p = 0.0619688; do not reject: insufficient evidence of fewer faults per metre on average. Revisit [the Poisson example](#poisson-example).

</details>

</section>

<section class="lesson-check" markdown="1">

### Fresh attempt {#retry-errors}

**Question:** A test investigates whether the mean number of complaints per day has fallen from 4. Describe a missed improvement and a false claim of improvement using H0, the true situation and the decision. Does a 5% significance level give the probability of a missed improvement?

<details markdown="1"><summary>Hint</summary>

When is H0 true?

</details>

<details markdown="1"><summary>Answer and recovery</summary>

H0 states mean 4; H1 states mean below 4. Missing improvement is Type II: true mean below 4, but no rejection. Falsely claiming improvement is Type I: true mean 4, but rejection. The level controls Type I risk, not missed-improvement probability. Revisit [errors](#errors).

</details>

</section>

## Return after another topic {#later-review}

<section class="lesson-check" markdown="1">

### Your turn {#review-decision}

**Question:** A report states: “We chose H1: λ > 3 after observing a high count. The probability of exactly our observed count was 0.03, so the 5% test proves the mean has increased.” Identify three flaws and the information needed for a valid test. If a valid upper-tail p-value were 0.07, give the conclusion.

<details markdown="1"><summary>Hint</summary>

Check timing, probability event and conclusion.

</details>

<details markdown="1"><summary>Answer and recovery</summary>

Choose the direction before seeing data; include all at-least-as-extreme counts; rejection is evidence, not proof. Specify the interval, constant-rate independent single-event Poisson assumptions, H0: λ = 3, a preplanned H1 and level, and the observed count to calculate the tail. With p = 0.07 do not reject: insufficient evidence of mean count above 3 per specified interval. Repair at [direction](#hypotheses), [p-values](#decision) or [models](#discrete-choice), then redo the relevant retry without help.

</details>

</section>

## Next: testing an average {#next-step}

Continue to [mean tests](/alevel/a2-mathematics/statistics/mean-tests/), where a sample mean is compared with its expected sampling variation.

<details markdown="1"><summary>Sources and scope</summary>

OxfordAQA Mathematics 9660 v5.2, S2.6, printed page 27 (PDF page 26): [qualification](https://www.oxfordaqa.com/qualification/international-as-and-a-level-mathematics-9660/) and [specification](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf). This page covers testing language, errors and exact binomial/Poisson tests; mean tests follow. Examples adapt and extend Q1(b) and Q1(d): [January 2025 QP pages 2–4](/assets/pdf/fx-cg50/references/oxfordaqa-ma04-2025-january-question-paper.pdf#page=2), [paired MS pages 4–5](/assets/pdf/fx-cg50/references/oxfordaqa-ma04-2025-january-mark-scheme.pdf#page=4). Other tasks are original. Numerical checking does not verify calculator key sequences or learning effects.

</details>
