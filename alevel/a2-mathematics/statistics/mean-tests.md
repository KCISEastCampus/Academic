---
title: "Mean tests: how far is far enough?"
layout: subjects
mathjax: true
grade: a2
subject: s2
permalink: /alevel/a2-mathematics/statistics/mean-tests/
reading_layout: true
study_page: true
toc_headings: "#standard-error, #critical-values, #known-normal, #unknown-normal, #large-samples, #practice, #retry, #later-review, #next-step"
---

[A2 statistics course](/alevel/a2-mathematics/statistics/)
{:.lesson-meta}

A sample average is rarely exactly the advertised average. A difference of one gram might be ordinary noise in one investigation and strong evidence in another. We need to compare the difference with **how much sample averages fluctuate**, not just with how much individual objects vary.

Start after [hypothesis testing](/alevel/a2-mathematics/statistics/hypothesis-testing/). For sampling distributions and variance estimates return to [estimation](/alevel/a2-mathematics/statistics/estimation/); for areas and standardisation use [normal distributions](/alevel/a2-mathematics/statistics/normal-distribution/). All samples below are independent random observations unless a task asks you to question that assumption. Examples from January 2025 are labelled adapted; all other data are original constructed teaching data, not measurements and without official marks.

## Why the standard error is smaller {#standard-error}

Let X be one observation, with population mean μ and population standard deviation σ. Imagine taking many independent samples, each of size n, and finding their averages. These averages form a new distribution: the **sampling distribution of the mean**. Its standard deviation is called the **standard error**, SE. It measures sample-to-sample variation of the average, not an error made by the measuring instrument.

$$\begin{aligned}
\bar X&=\frac{X_1+\cdots+X_n}{n},\\
E(\bar X)&=\mu,\\
\operatorname{Var}(\bar X)&=\frac{n\sigma^2}{n^2}
=\frac{\sigma^2}{n},\\
\operatorname{SE}(\bar X)&=\frac{\sigma}{\sqrt n}.
\end{aligned}$$

Independence lets variances add; dividing the sum by n divides its variance by n squared. Taking the square root gives SE. Quadrupling n halves SE; it does not halve the spread of individual observations. If the population variance is unknown, estimate SE with the sample standard deviation s:

$$\begin{aligned}
s^2&=\frac{\sum_{i=1}^n(x_i-\bar x)^2}{n-1},\\
\widehat{\operatorname{SE}}(\bar X)&=\frac{s}{\sqrt n}.
\end{aligned}$$

The n−1 formula makes s squared an unbiased estimator of population variance. The hat means “estimated”, not “known exactly”. A test statistic expresses the difference between the observed sample mean and the null mean in these SE units. A positive value means above the null mean; a negative value means below it. Which reference distribution to use depends on the population and on whether σ is known.

## Critical values you can use {#critical-values}

Each table entry c is a **positive upper-tail cutoff**: the probability to its right is q. For a lower-tail test use −c. A two-sided 5% test uses q = 0.025 in each tail and rejects outside −c to c. These are rounded quantiles, not exact decimal identities. Keep unrounded statistics until the comparison.

$$P(Z>c)=q,\qquad Z\sim N(0,1).$$

| q | c |
| --- | --- |
| 0.10 | 1.281552 |
| 0.05 | 1.644854 |
| 0.025 | 1.959964 |
| 0.01 | 2.326348 |
| 0.005 | 2.575829 |

$$P(T_\nu>c)=q.$$

| df $\nu$ | q = 0.05 | q = 0.025 |
| --- | --- | --- |
| 5 | 2.015048 | 2.570582 |
| 7 | 1.894579 | 2.364624 |
| 9 | 1.833113 | 2.262157 |

For a continuous symmetric reference distribution, the one-sided p-value is the appropriate tail area beyond the observed statistic; the two-sided p-value is twice the area beyond its absolute value. You may instead compare with the corresponding critical value. This page supplies all cutoffs needed for its tasks, so you need not calculate a t tail on an unfamiliar device.

## Normal population, known variance {#known-normal}

If the population itself is normal and σ squared is known, independent sample means are exactly normal for every positive sample size. Small n does not force a t test. Under a null value μ0:

$$\begin{aligned}
\bar X&\sim N\left(\mu_0,\frac{\sigma^2}{n}\right),\\
Z&=\frac{\bar X-\mu_0}{\sigma/\sqrt n}
\sim N(0,1).
\end{aligned}$$

The second parameter in N is the variance. Set H0 for the population mean, choose the tail from the claim, standardise with SE, compare with the appropriate cutoff, then state what the evidence says in context.

<div class="worked-example" markdown="1">

### Worked example: just short of the boundary {#known-example}

**Question:** Lap times are normally distributed. Before a tyre change the mean was 205 seconds and the population standard deviation was 30 seconds. Assume that standard deviation is unchanged. Ten independent randomly selected new lap times have total 2205 seconds. Test the claim that the population mean lap time has increased, at the 5% level.

Adapted from MA04 January 2025 Q3, with independence stated explicitly. The normal population and known unchanged standard deviation justify an exact z test even though there are only ten observations.

$$\begin{aligned}
H_0&:\mu=205,\\
H_1&:\mu>205,\\
\bar x&=\frac{2205}{10}=220.5,\\
\operatorname{SE}&=\frac{30}{\sqrt{10}}
\approx9.48683,\\
z&=\frac{220.5-205}{30/\sqrt{10}}\\
&=1.633843\ldots.
\end{aligned}$$

“Increased” requires the upper tail. Its 5% cutoff is 1.644854. Since 1.633843 is smaller, do not reject H0. Equivalently, the right-tail p-value is about 0.05115, just above 0.05. Do not round both numbers to 1.6 and call them equal.

**Conclusion:** At the 5% significance level, there is insufficient evidence that the population mean lap time has increased. This does not establish that the tyres have no effect.

</div>

## Normal population, unknown variance {#unknown-normal}

When σ is unknown, substituting s adds uncertainty because s changes from sample to sample. For independent samples from a normal population, the resulting statistic follows a **Student t distribution**, not an exact standard normal distribution:

$$T=\frac{\bar X-\mu_0}{S/\sqrt n}
\sim t_{n-1}\quad\text{under }H_0.$$

The **degrees of freedom**, df = n−1, reflect that deviations from the fitted sample mean sum to zero: after n−1 deviations are chosen, the last is fixed. A t distribution is symmetric with heavier tails than N(0,1), especially for small df. Its larger cutoffs allow for estimating σ. A bell-shaped population must be an assumption supported by the situation; the t formula does not make a small, strongly skewed sample valid.

<div class="worked-example" markdown="1">

### Worked example: estimating the spread {#t-example}

**Question:** Packet masses are normally distributed with unknown population variance. An independent random sample has masses, in grams, 8.99, 8.96, 8.99, 9.02, 8.95, 8.98, 8.97, 9.01. The advertised population mean is 9 grams. Find the sample mean and unbiased variance estimate, then test at 5% whether the population mean is less than advertised.

Adapted and combined from MA04 January 2025 Q7(a)(b), not Q6 or Q8. Here the population variance is not supplied, so calculate s squared and use t with 7 df. The subtraction below is sensitive to rounding: retain the given data until the variance is formed.

$$\begin{aligned}
n&=8,\\
\sum x_i&=71.87,\\
\sum x_i^2&=645.6661,\\
\bar x&=71.87/8=8.98375,\\
s^2&=\frac{645.6661-71.87^2/8}{7}\\
&=\frac{0.0039875}{7}\\
&=\frac{319}{560000}\\
&=0.000569642857\ldots.
\end{aligned}$$

This variance has units of grams squared; SE has units of grams. Now set the population hypotheses and standardise:

$$\begin{aligned}
H_0&:\mu=9,\\
H_1&:\mu<9,\\
s&=\sqrt{319/560000},\\
\widehat{\operatorname{SE}}&=\frac{s}{\sqrt8}\\
&\approx0.00843833,\\
t&=\frac{8.98375-9}{s/\sqrt8}\\
&=-1.925737\ldots.
\end{aligned}$$

Use the lower 5% cutoff for 7 df: −1.894579. Since −1.925737 < −1.894579, the result is in the lower critical region, so reject H0. The table often rounds the cutoff to −1.895; that gives the same decision.

**Conclusion:** At the 5% significance level, there is sufficient evidence that the population mean packet mass is less than 9 grams. The conclusion concerns the mean, not every packet.

</div>

## Large samples from a population that is not normal {#large-samples}

For independent identically distributed observations with finite population variance, the **Central Limit Theorem** makes the sampling distribution of the mean approximately normal when n is sufficiently large. The original observations need not become normal. Large n does not repair selection bias, dependence or a population without finite variance.

There is no universal n = 30 guarantee. Strong skewness, rare extreme values or heavy tails may require much more data. In these teaching tasks a moderately skewed finite-variance population and a stated sufficiently large sample justify the approximation. With only a small non-normal sample, neither an exact normal test nor an exact t test is justified just by quoting a formula.

For a large sample, use a **z approximation**. Known population variance uses σ; unknown population variance uses s to estimate SE. Both statements below are approximate in this non-normal setting:

$$\begin{aligned}
Z&=\frac{\bar X-\mu_0}{\sigma/\sqrt n}
\ \dot\sim\ N(0,1),\\
Z&=\frac{\bar X-\mu_0}{S/\sqrt n}
\ \dot\sim\ N(0,1).
\end{aligned}$$

The dotted symbol means “approximately distributed as”. Using s does not by itself justify an exact t reference: exact t requires a normal population. Conversely, for a genuinely normal population with unknown variance the t result remains valid even at large n, and its cutoffs approach z cutoffs.

<div class="worked-example" markdown="1">

### Worked example: the same idea, two sources of spread {#large-example}

**Question:** (a) Waiting times have a moderately skewed distribution with known finite variance 4 minutes squared. An independent random sample of 100, stipulated sufficiently large for the mean approximation, has mean 4.4 minutes. Test whether the population mean differs from 4 minutes at 5%. (b) A different moderately skewed finite-variance population has unknown variance. A sufficiently large independent random sample of 64 gives mean 12.75 and unbiased sample variance 9. Test whether its population mean exceeds 12 at 5%.

Both are constructed examples. Neither population is assumed normal. In (a) the known variance gives σ = 2 and a two-sided z approximation:

$$\begin{aligned}
H_0&:\mu=4,\quad H_1:\mu\ne4,\\
\operatorname{SE}&=2/\sqrt{100}=0.2,\\
z&=(4.4-4)/0.2=2.
\end{aligned}$$

The two-sided 5% cutoff is ±1.959964. Since 2 > 1.959964, reject H0: sufficient evidence that the population mean waiting time differs from 4 minutes, using the large-sample approximation. In (b), estimate rather than assume the spread:

$$\begin{aligned}
H_0&:\mu=12,\quad H_1:\mu>12,\\
s&=\sqrt9=3,\\
\widehat{\operatorname{SE}}&=3/\sqrt{64}=0.375,\\
z&=(12.75-12)/0.375=2.
\end{aligned}$$

Here the upper 5% cutoff is 1.644854. Reject H0: sufficient evidence that this population mean exceeds 12, using a large-sample approximation. The same statistic value 2 can require different cutoffs because the alternatives differ. Do not describe either result as exact.

</div>

## Close the demonstrations {#practice}

<section class="lesson-check" markdown="1">

### Your turn {#task-se}

**Question:** Individual masses X are normally distributed with population mean 40 grams and standard deviation 10 grams. Independent random samples contain 25 items each. State the distribution of the sample mean and interpret its standard error. A student uses 10 grams as the standard error. Explain the mistake. What changes, and what does not, if the sample size is multiplied by four?

<details markdown="1"><summary>Hint</summary>

Track variance before taking its square root.

</details>

<details markdown="1"><summary>Answer and recovery</summary>

$$\begin{aligned}
\bar X&\sim N(40,4),\\
\operatorname{SE}&=10/\sqrt{25}=2\text{ g}.
\end{aligned}$$

The sample means fluctuate with SD 2 grams across repeated samples; individuals have SD 10 grams. Multiplying n by four gives SE 1 gram; individual SD and the mean 40 do not change. Normality makes the sampling distribution exact here. If you confused the two spreads, revisit [SE](#standard-error), then [retry](#retry-se).

</details>

</section>

<section class="lesson-check" markdown="1">

### Your turn {#task-known}

**Question:** Fill volumes are normally distributed with known population variance 16 millilitres squared. An independent random sample of 16 has mean 48.8 millilitres. At 5%, investigate whether the population mean is less than the advertised 50 millilitres. Choose and justify a method, give hypotheses, calculate a statistic, use the supplied critical values and write an English conclusion.

<details markdown="1"><summary>Hint</summary>

Is the population spread known or estimated?

</details>

<details markdown="1"><summary>Answer and recovery</summary>

$$\begin{aligned}
H_0&:\mu=50,\quad H_1:\mu<50,\\
\sigma&=4,\\
\operatorname{SE}&=4/4=1,\\
z&=(48.8-50)/1=-1.2.
\end{aligned}$$

Exact z: normal population, known variance, independent random sample. Since −1.2 > −1.644854, do not reject. At the 5% significance level, there is insufficient evidence that the population mean fill volume is less than 50 millilitres. If you chose t just because n is small, revisit [known variance](#known-normal); if you compared with +1.645, revisit [tail cutoffs](#critical-values). Then [retry](#retry-known).

</details>

</section>

<section class="lesson-check" markdown="1">

### Your turn {#task-unknown}

**Question:** A normal population of component lengths has unknown variance. An independent random sample of 10 gives mean 102 millimetres and unbiased sample variance 9 millimetres squared. At 5%, investigate whether the population mean differs from 100 millimetres. Choose a method, justify its reference distribution and degrees of freedom, calculate the statistic and write an English conclusion.

<details markdown="1"><summary>Hint</summary>

The sample variance is not a known population variance.

</details>

<details markdown="1"><summary>Answer and recovery</summary>

$$\begin{aligned}
H_0&:\mu=100,\quad H_1:\mu\ne100,\\
s&=3,\quad\mathrm{df}=9,\\
t&=\frac{102-100}{3/\sqrt{10}}\\
&=2.108185\ldots.
\end{aligned}$$

Use exact t for normal data with estimated spread. The two-sided 5% cutoffs for 9 df are ±2.262157; 2.108185 lies between them, so do not reject. At the 5% significance level, there is insufficient evidence that the population mean length differs from 100 millimetres. Using z would incorrectly reject here. Repair at [unknown variance](#unknown-normal) or [critical values](#critical-values), then [retry](#retry-unknown).

</details>

</section>

<section class="lesson-check" markdown="1">

### Your turn {#task-large-known}

**Question:** A moderately skewed population of delivery times has known finite variance 36 minutes squared. An independent random sample of 144, sufficiently large for the mean approximation, has mean 21 minutes. Investigate whether the population mean exceeds 20 minutes at 5%. Select and justify a method, calculate the statistic, and conclude in English. Would knowing the variance alone justify the same reference distribution for a sample of 9 from a strongly skewed population?

<details markdown="1"><summary>Hint</summary>

Which distribution needs to be approximately normal?

</details>

<details markdown="1"><summary>Answer and recovery</summary>

$$\begin{aligned}
H_0&:\mu=20,\quad H_1:\mu>20,\\
\operatorname{SE}&=6/\sqrt{144}=0.5,\\
z&=(21-20)/0.5=2.
\end{aligned}$$

Use approximate z by the CLT, given independence, common finite-variance population and sufficient n. Since 2 > 1.644854, reject. At the 5% significance level, there is sufficient evidence that the population mean delivery time exceeds 20 minutes, using a large-sample approximation. Known variance does not make a non-normal small-sample mean normal; nine strongly skewed observations do not give this justification. Revisit [large samples](#large-samples), then [retry](#retry-large-known).

</details>

</section>

<section class="lesson-check" markdown="1">

### Your turn {#task-large-unknown}

**Question:** A moderately skewed finite-variance population of service times has unknown variance. A sufficiently large independent random sample of 100 has mean 7.6 minutes and unbiased sample variance 4 minutes squared. Investigate whether the population mean is less than 8 minutes at 5%. Choose and justify a method, calculate a statistic and conclude in English. Explain why replacing this sample by only 6 highly skewed observations would not justify an exact t test.

<details markdown="1"><summary>Hint</summary>

Estimating SE and choosing an exact reference distribution are different decisions.

</details>

<details markdown="1"><summary>Answer and recovery</summary>

$$\begin{aligned}
H_0&:\mu=8,\quad H_1:\mu<8,\\
s&=2,\\
\widehat{\operatorname{SE}}&=2/10=0.2,\\
z&=(7.6-8)/0.2=-2.
\end{aligned}$$

Use approximate z with estimated SE, justified by sufficient independent finite-variance data, not exact t. Since −2 < −1.644854, reject. At the 5% significance level, there is sufficient evidence that the population mean service time is less than 8 minutes, using a large-sample approximation. Six highly skewed observations provide neither the normal-population condition for exact t nor a sufficient CLT sample. Revisit [large-sample conditions](#large-samples), then [retry](#retry-large-unknown).

</details>

</section>

## Repair the error, then try again {#retry}

<section class="lesson-check" markdown="1">

### Fresh attempt {#retry-se}

**Question:** An individual observation has population standard deviation σ. Independent samples of size 36 have sample-mean standard error 1.5 units. Find σ and the sample-mean variance. A student says the individual observations must be normally distributed because their means are approximately normal. Assess this claim.

<details markdown="1"><summary>Hint</summary>

Undo the square-root-of-n scaling.

</details>

<details markdown="1"><summary>Answer and recovery</summary>

$$\begin{aligned}
\sigma&=1.5\sqrt{36}=9,\\
\operatorname{Var}(\bar X)&=1.5^2=2.25.
\end{aligned}$$

The mean can be approximately normal by the CLT even if individual observations are not. Approximate normality of the means does not establish a normal population. Review [SE](#standard-error) or [CLT](#large-samples).

</details>

</section>

<section class="lesson-check" markdown="1">

### Fresh attempt {#retry-known}

**Question:** A normal population has known standard deviation 3 units. An independent random sample of 9 has mean 103 units. Test at 5% whether the population mean differs from 100 units. Justify your method and write the conclusion in English. Explain why a table with 8 degrees of freedom is unnecessary.

<details markdown="1"><summary>Hint</summary>

Which spread was supplied?

</details>

<details markdown="1"><summary>Answer and recovery</summary>

$$\begin{aligned}
H_0&:\mu=100,\quad H_1:\mu\ne100,\\
\operatorname{SE}&=3/\sqrt9=1,\\
z&=(103-100)/1=3.
\end{aligned}$$

Exact z is justified by the normal population and known σ. Since 3 > 1.959964, reject. At the 5% significance level, there is sufficient evidence that the population mean differs from 100 units. No t degrees of freedom are needed because σ was not estimated. Review [known normal variance](#known-normal).

</details>

</section>

<section class="lesson-check" markdown="1">

### Fresh attempt {#retry-unknown}

**Question:** An independent random sample of 6 from a normal population with unknown variance has mean 19 and unbiased sample variance 1. Investigate at 5% whether the population mean has fallen below 20. Choose a method and degrees of freedom, calculate the statistic and conclude in English.

<details markdown="1"><summary>Hint</summary>

A small sample is usable here because a population condition is stated.

</details>

<details markdown="1"><summary>Answer and recovery</summary>

$$\begin{aligned}
H_0&:\mu=20,\quad H_1:\mu<20,\\
s&=1,\quad\mathrm{df}=5,\\
t&=\frac{19-20}{1/\sqrt6}\\
&=-2.449490\ldots.
\end{aligned}$$

Normal population plus unknown variance gives exact t. The lower 5% cutoff for 5 df is −2.015048. Reject. At the 5% significance level, there is sufficient evidence that the population mean is below 20. Review [unknown variance](#unknown-normal) if you used 6 df or z.

</details>

</section>

<section class="lesson-check" markdown="1">

### Fresh attempt {#retry-large-known}

**Question:** A moderately skewed finite-variance population has known standard deviation 5 units. A sufficiently large independent random sample of 100 gives mean 49. Test whether the population mean is below 50 at 5% and conclude in English. A second researcher instead records 100 almost identical readings from one object; explain why the sample size alone does not justify the same standard error.

<details markdown="1"><summary>Hint</summary>

Independence is part of the formula, not a bonus.

</details>

<details markdown="1"><summary>Answer and recovery</summary>

$$\begin{aligned}
H_0&:\mu=50,\quad H_1:\mu<50,\\
\operatorname{SE}&=5/10=0.5,\\
z&=(49-50)/0.5=-2.
\end{aligned}$$

Use approximate z, by the CLT. Since −2 < −1.644854, reject. At the 5% significance level, there is sufficient evidence that the population mean is below 50 units, using a large-sample approximation. Repeated correlated readings from one object are not 100 independent population observations; the variance-of-mean formula cannot simply divide by 100. Review [SE independence](#standard-error) and [large samples](#large-samples).

</details>

</section>

<section class="lesson-check" markdown="1">

### Fresh attempt {#retry-large-unknown}

**Question:** A sufficiently large independent random sample of 64 from a moderately skewed finite-variance population gives mean 30.8 and unbiased sample variance 10.24. The population variance is unknown. Investigate whether the population mean differs from 30 at 5%, and conclude in English. State what must be checked before treating 64 as sufficient in another population.

<details markdown="1"><summary>Hint</summary>

The question asks about either direction.

</details>

<details markdown="1"><summary>Answer and recovery</summary>

$$\begin{aligned}
H_0&:\mu=30,\quad H_1:\mu\ne30,\\
s&=3.2,\\
\widehat{\operatorname{SE}}&=3.2/8=0.4,\\
z&=(30.8-30)/0.4=2.
\end{aligned}$$

Use approximate z with estimated SE; 2 > 1.959964, so reject. At the 5% significance level, there is sufficient evidence that the population mean differs from 30, using a large-sample approximation. For another population check independence, representative sampling, finite variance, skewness and influential extreme values; 64 alone is not a universal guarantee. Revisit [large samples](#large-samples).

</details>

</section>

## Come back after another topic {#later-review}

<section class="lesson-check" markdown="1">

### Your turn {#review-methods}

**Question:** For each investigation, decide whether an exact or approximate mean test is justified and explain why. Do not calculate a statistic. (a) Nine independent random observations from a normal population, unknown variance. (b) Nine independent random observations from a strongly skewed population, known variance. (c) An independent random sample of 200 from a moderately skewed finite-variance population, unknown variance, with the sample stipulated sufficiently large. A student says, “All three are z tests because sample means are normal.” Correct the statement.

<details markdown="1"><summary>Hint</summary>

Check the population shape, variance information and sample size separately.

</details>

<details markdown="1"><summary>Answer and recovery</summary>

In (a) use exact t with 8 df: normal population, unknown variance. In (b) neither exact z nor exact t is justified by the stated information; known variance does not repair the small skewed sample. In (c) use a large-sample z approximation with estimated SE. Sample means are exactly normal for normal populations; CLT normality is approximate and requires adequate conditions. Revisit [normal unknown variance](#unknown-normal) or [large-sample limits](#large-samples), then redo the matching fresh task without help.

</details>

</section>

## Connect the whole course {#next-step}

Return to the [mixed review](/alevel/a2-mathematics/statistics/#mixed-review). Choose models and methods without lesson headings giving them away. Later return to the [delayed review](/alevel/a2-mathematics/statistics/#later-review). Record whether you worked independently, used a hint, or needed to revisit an idea.

<details markdown="1"><summary>Sources and scope</summary>

OxfordAQA Mathematics 9660 v5.2, S2.6, printed page 27 (PDF page 26): [qualification](https://www.oxfordaqa.com/qualification/international-as-and-a-level-mathematics-9660/) and [specification](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf). This lesson covers the three mean-test families, including known and unknown variance for a large-sample z approximation. Statistical language and exact count tests are in the previous lesson. The lap-time example adapts [January 2025 Q3, QP page 10](/assets/pdf/fx-cg50/references/oxfordaqa-ma04-2025-january-question-paper.pdf#page=10) and [paired MS page 9](/assets/pdf/fx-cg50/references/oxfordaqa-ma04-2025-january-mark-scheme.pdf#page=9). The packet example adapts [Q7(a)(b), QP pages 20–21](/assets/pdf/fx-cg50/references/oxfordaqa-ma04-2025-january-question-paper.pdf#page=20) and [paired MS pages 15–16](/assets/pdf/fx-cg50/references/oxfordaqa-ma04-2025-january-mark-scheme.pdf#page=15). Critical-value fragments are rounded mathematical quantiles supplied for learning, not reproductions of an official table. All other tasks are original. No calculator key sequence or learning effect is claimed verified.

</details>
