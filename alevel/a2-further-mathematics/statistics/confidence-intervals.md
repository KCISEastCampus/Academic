---
title: "Confidence intervals: put uncertainty around a mean"
layout: subjects
mathjax: true
grade: a2
subject: a2-further-mathematics
lang: en
permalink: /alevel/a2-further-mathematics/statistics/confidence-intervals/
reading_layout: true
study_page: true
toc_headings: h2
---

A point estimate gives one number. How much uncertainty should accompany it? Learn to choose and calculate an interval for one population mean, explain its coverage, and work backwards from a width requirement.

You need the sample mean, variance and normal probabilities. Revisit [variance estimation](/alevel/a2-mathematics/statistics/estimation/#estimates), [standard error](/alevel/a2-mathematics/statistics/estimation/#standard-error), [large-sample approximation](/alevel/a2-mathematics/statistics/estimation/#clt) or [inverse normal probabilities](/alevel/a2-mathematics/statistics/normal-distribution/#inverse) as needed. All examples and tasks are self-written with constructed data; no official marks are assigned.

## The mean stays fixed; the interval varies {#meaning}

A sample mean is a point estimate. A confidence interval adds a range produced by a specified repeated-sampling procedure. In this lesson, all intervals estimate one population mean and are symmetric about the sample mean. They do not describe the middle 95% of individual population values.

A 95% procedure covers the fixed true μ in 95% of repeated samples under its assumptions, or approximately 95% for an approximate method. After one sample has produced a numerical interval, μ is either inside or outside. We do not assign a 95% frequentist probability to that fixed μ lying in this already observed interval. In ordinary reporting, “we are 95% confident that μ lies between…” refers to the procedure's coverage.

## Build an interval from the sampling distribution {#normal-model}

Begin with independent observations from N(μ,σ²), where σ² is known. Then X̄ is exactly normal with variance σ²/n. Its standard deviation, σ/√n, is the standard error (SE) of the mean, not the spread σ of individual observations. Let q satisfy P(Z≤q)=1−α/2 for Z∼N(0,1), where the required confidence is 100(1−α)%.

$$
P\left(-q\leq\frac{\bar X-\mu}{\sigma/\sqrt n}\leq q\right)=1-\alpha
\quad\Longrightarrow\quad
P\left(\bar X-q\frac{\sigma}{\sqrt n}\leq\mu\leq\bar X+q\frac{\sigma}{\sqrt n}\right)=1-\alpha.
$$

After observing x̄, calculate h=qσ/√n. The interval is [x̄−h,x̄+h]. Its half width, or margin of error, is h; its full width is 2h. For example, with known σ=8, n=16, x̄=50 and supplied q=1.960 for 95%, SE=2, h=3.92, giving [46.08,53.92] with full width 7.84. Normality makes this exact even though the sample is small.

## Choose a justified model {#choose-model}

| Information | Distribution used for the standardised mean | Interval and status |
| --- | --- | --- |
| Independent normal observations, σ² known | Standard normal Z, any sample size | x̄±qσ/√n; exact under the model |
| Independent large iid sample, finite positive variance; normal approximation justified | Approximately standard normal, using CLT | Known σ: x̄±qσ/√n; unknown σ: x̄±qs/√n; approximate |
| Independent normal observations, σ² unknown; especially small n | T=(X̄−μ)/(S/√n)∼tₙ₋₁ | x̄±tₙ₋₁,₁₋α/₂s/√n; exact under normality |

“Large” is a justification about the sampling distribution, not a universal magic cutoff. Severe skew, outliers, dependence or infinite variance can defeat a casual normal approximation. The tasks explicitly identify suitable large-sample settings. A small nonnormal sample with unknown variance does not become valid for t merely because σ is unknown. For a normal population with unknown variance, the t result is valid at any n≥2; large-n z is an approximation to it, not a reason t becomes wrong.

When variance is unknown, use the sample variance with denominator n−1. The subtraction of n x̄² accounts for centring on the estimated mean. Keep variance, standard deviation and standard error distinct.

$$
S^2=\frac{\sum_{i=1}^n(X_i-\bar X)^2}{n-1},
\qquad
s^2=\frac{\sum x_i^2-(\sum x_i)^2/n}{n-1},
\qquad
\widehat{\operatorname{SE}}(\bar X)=\frac{s}{\sqrt n}.
$$

For iid data with finite variance, E(S²)=σ². One way to see the correction is E[Σ(Xᵢ−X̄)²]=E[ΣXᵢ²−nX̄²]=n(σ²+μ²)−n(σ²/n+μ²)=(n−1)σ². Taking a square root does not preserve unbiasedness: do not call S an unbiased estimator of σ. For normal samples, estimating the spread changes the pivot to t with n−1 degrees of freedom.

## A complete interval calculation {#example}

<section class="worked-example" markdown="1">

### Example {#example-a}

**Question:** Five independent readings, in mg, are 8,9,10,11,12. They are a random sample from a normal population with unknown mean μ and unknown variance. Construct a 95% confidence interval for μ and give its full width. Use t₄,₀.₉₇₅=2.776, meaning P(T₄≤2.776)≈0.975. Does the interval support μ=12 mg? Explain why observing a reading of 12 mg is not a contradiction.

The population is normal, the sample is small and the variance is unknown, so use t with 5−1=4 degrees of freedom. Calculate the centre and spread from the data before choosing the margin.

$$
\begin{aligned}
\bar x&=\frac{8+9+10+11+12}{5}=10\text{ mg},\\
\sum(x_i-\bar x)^2&=4+1+0+1+4=10\text{ mg}^2,\\
s^2&=\frac{10}{4}=2.5\text{ mg}^2,\\
\frac{s}{\sqrt5}&=\sqrt{\frac{2.5}{5}}=\frac1{\sqrt2}\text{ mg},\\
h&=\frac{2.776}{\sqrt2}=1.962928\ldots\text{ mg},\\
\text{CI}&=\left[10-\frac{2.776}{\sqrt2},10+\frac{2.776}{\sqrt2}\right]
\approx[8.037,11.963]\text{ mg},\\
\text{full width}&=2h=3.925857\ldots\text{ mg}\approx3.926\text{ mg}.
\end{aligned}
$$

The interval is centred at 10, and the endpoints are equally far from 10: a useful arithmetic check. The value 12 is outside, so this interval does not support the hypothesised population mean 12 mg at the corresponding two-sided 5% level. It is an interval for the population mean, not a bound on individual readings; a reading of 12 is entirely compatible with this calculation. The conclusion is not proof that the parameter cannot equal 12.

</section>

## Work backwards from a width or a claim {#width}

If a claim μ₀ is compatible with a symmetric interval of known half width h, the unknown sample mean must place that value between its endpoints. Rearranging both inequalities gives a range for the centre.

$$
\bar x-h\leq\mu_0\leq\bar x+h
\quad\Longleftrightarrow\quad
\mu_0-h\leq\bar x\leq\mu_0+h.
$$

For planning with known σ and a fixed normal critical value q, full width W=2qσ/√n. If the requested full width is at most w, solve an inequality and take the smallest integer that satisfies it. A requirement on half width e instead gives a different expression.

$$
W\leq w\quad\Longleftrightarrow\quad
n\geq\left(\frac{2q\sigma}{w}\right)^2;
\qquad
h\leq e\quad\Longleftrightarrow\quad
n\geq\left(\frac{q\sigma}{e}\right)^2.
$$

Verify the selected integer and, when proving minimality, the preceding one. If σ is estimated from a pilot, the plan is approximate: the future sample spread may differ. For a small-sample t plan, the critical value itself depends on n, so test integer candidates with the relevant degrees of freedom rather than freeze an arbitrary t. “Strictly less than” also differs from “at most” when the boundary is an integer.

## Try before opening help {#practice}

Keep hints and solutions closed first. Note any help you use.

<section class="lesson-check" markdown="1">

### Task A {#task-a}

**Question:** Select and justify an interval procedure and calculate the interval in each applicable case. All samples are independent random samples. (i) A normal population has known variance 36 mg²; n=9 and x̄=40 mg; use 90% confidence. (ii) A nonnormal population has finite known variance 25 mg²; n=100 and x̄=20 mg; use 95% confidence. A normal approximation for the sample mean is justified. (iii) As in (ii), except the variance is unknown and Σ(xᵢ−x̄)²=2475 mg². (iv) Only six observations from a strongly skewed nonnormal population are available and the variance is unknown. Is a standard small-sample t interval justified from this information? Use z₀.₉₅=1.645 and z₀.₉₇₅=1.960, where P(Z≤zₚ)≈p.

<details markdown="1"><summary>Hint</summary>

First identify population shape, known or estimated variance, and the justification for the sampling distribution. Sample size alone is not the complete decision.

</details>

<details markdown="1"><summary>Solution</summary>

$$
\begin{aligned}
\text{(i)}&\quad40\pm1.645\frac6{\sqrt9}=40\pm3.29
&&\Longrightarrow[36.71,43.29]\text{ mg},\\
\text{(ii)}&\quad20\pm1.960\frac5{\sqrt{100}}=20\pm0.98
&&\Longrightarrow[19.02,20.98]\text{ mg},\\
\text{(iii)}&\quad s^2=\frac{2475}{99}=25,\quad20\pm1.960\frac5{10}
&&\Longrightarrow[19.02,20.98]\text{ mg}.
\end{aligned}
$$

(i) is exact z because normality and known variance are stated; n=9 does not force t. (ii) is approximate z by the given large-sample justification. (iii) is approximate z using the estimated variance; identical numerical endpoints do not make its assumptions identical to (ii). In (iv), neither normality nor a justified large-sample approximation is available, so the stated information does not justify the standard t procedure. More data or a separately justified method/model is needed.

</details>

</section>

<section class="lesson-check" markdown="1">

### Task B {#task-b}

**Question:** Six independent observations from a normal population with unknown mean and variance give Σxᵢ=60 s and Σxᵢ²=630 s². Construct a 95% confidence interval for μ. Use t₅,₀.₉₇₅=2.571, meaning P(T₅≤2.571)≈0.975. Assess separately the claims μ=12 s and μ=14 s. State a correct repeated-sampling interpretation.

<details markdown="1"><summary>Hint</summary>

Recover the centred sum of squares before dividing by n−1.

</details>

<details markdown="1"><summary>Solution</summary>

$$
\bar x=10\text{ s},\quad
\sum(x_i-\bar x)^2=630-\frac{60^2}{6}=30\text{ s}^2,\quad
s^2=\frac{30}{5}=6\text{ s}^2,
\quad\operatorname{SE}=\sqrt{\frac66}=1\text{ s}.
$$

$$
\text{CI}=10\pm2.571=[7.429,12.571]\text{ s}.
$$

Use t₅ because the population is normal, variance unknown, and n=6. The interval includes 12, so that mean is compatible with it; it excludes 14, so it does not support that mean at the corresponding two-sided 5% level. Inclusion does not prove equality. Repeating this sampling and interval procedure would produce intervals containing the same fixed μ in 95% of samples under the normal model, apart from the supplied quantile's rounding.

</details>

</section>

<section class="lesson-check" markdown="1">

### Task C {#task-c}

**Question:** A random sample of 16 from a normal population with known standard deviation 4 cm is used to form a 90% confidence interval for μ. The interval includes 20 cm. Find the full range of possible values of x̄ and its smallest possible value. Use z₀.₉₅=1.645, meaning P(Z≤1.645)≈0.95. Give the interval's full width.

<details markdown="1"><summary>Hint</summary>

Write the two inequalities expressing that 20 lies between x̄−h and x̄+h.

</details>

<details markdown="1"><summary>Solution</summary>

$$
h=1.645\frac4{\sqrt{16}}=1.645\text{ cm},\quad
\bar x-1.645\leq20\leq\bar x+1.645
\Longleftrightarrow18.355\leq\bar x\leq21.645\text{ cm}.
$$

The smallest centre is 18.355 cm: it places 20 exactly at the upper endpoint. Full width is 3.290 cm. The endpoints are included because the question says “includes”; 20 need not equal the centre.

</details>

</section>

<section class="lesson-check" markdown="1">

### Task D {#task-d}

**Question:** Plan independent sampling from a normal population with known standard deviation 6 g. Find the smallest sample size for a 95% confidence interval whose full width is at most 5 g. Then find the answer if the requirement instead refers to a half width of at most 5 g. Use z₀.₉₇₅=1.960, meaning P(Z≤1.960)≈0.975. Verify minimality for the full-width requirement.

<details markdown="1"><summary>Hint</summary>

Write width=2×critical value×SE before solving for n.

</details>

<details markdown="1"><summary>Solution</summary>

$$
\frac{2(1.960)(6)}{\sqrt n}\leq5
\Longleftrightarrow n\geq\left(\frac{23.52}{5}\right)^2=22.127616,
\qquad n_{\min}=23.
$$

At n=22 the full width is about 5.01448 g, too wide; at n=23 it is about 4.90426 g, acceptable. Width decreases with n, so this proves minimality. For the half-width requirement, n≥(11.76/5)²=5.531904, giving n=6. The large difference comes from the factor 2 before squaring, not a change in confidence.

</details>

</section>

<section class="lesson-check" markdown="1">

### Task E {#task-e}

**Question:** Independent observations from a normal population with known standard deviation 4 units give n=64 and x̄=10 units. Construct 95% and 99% confidence intervals using z₀.₉₇₅=1.960 and z₀.₉₉₅=2.576, where P(Z≤zₚ)≈p. Explain why the widths differ. Assess the statements: “95% of individual observations lie in the 95% interval”; “the interval proves μ=10.5”; and “after observing the interval, the fixed μ has a 95% probability of lying in it.” If a new sample of size 256 is used with the same known σ, what is its 95% half width? Is its centre determined?

<details markdown="1"><summary>Hint</summary>

Separate the target μ, individual observations, and the randomness of the endpoints.

</details>

<details markdown="1"><summary>Solution</summary>

$$
\begin{aligned}
\operatorname{SE}&=\frac48=0.5,\\
95\%:&\quad10\pm0.980=[9.020,10.980],\\
99\%:&\quad10\pm1.288=[8.712,11.288],\\
n=256:&\quad h=1.960\frac4{16}=0.490.
\end{aligned}
$$

Higher coverage requires a larger critical value and a wider interval when other information is fixed. All three statements are invalid: the target is the mean, not 95% of individual observations; inclusion makes 10.5 compatible but does not prove equality; and 95% describes coverage of the procedure before sampling, not a probability assigned to the already fixed parameter after observing these endpoints. Quadrupling sample size halves half width. The new centre depends on new data and is not given.

</details>

</section>

## Repair the gap and try again {#retry}

<section class="lesson-check" markdown="1">

### Task R1 {#retry-a}

**Question:** Four independent observations from a normal population with unknown mean and variance are 4,6,8,10 mm. Find a 90% confidence interval for μ and its full width. Use t₃,₀.₉₅=2.353, meaning P(T₃≤2.353)≈0.95. Show the centred sum of squares, variance estimate, degrees of freedom and standard error.

<details markdown="1"><summary>Hint</summary>

Do not divide the centred sum by 4 to estimate the variance; do divide s² by 4 inside the SE square root.

</details>

<details markdown="1"><summary>Solution</summary>

$$
\bar x=7,\quad\mathrm{SS}=9+1+1+9=20,\quad s^2=\frac{20}{3},\quad\mathrm{df}=3,
\quad\operatorname{SE}=\sqrt{\frac{20/3}{4}}=\sqrt{\frac53}.
$$

$$
h=2.353\sqrt{\frac53}=3.0377099\ldots,\quad
\text{CI}=7\pm h\approx[3.9623,10.0377]\text{ mm},\quad
W=2h\approx6.0754\text{ mm}.
$$

Normality and unknown variance justify t₃. The t quantile uses cumulative probability 0.95 for a two-sided 90% interval. The interval estimates a mean; neither its half width nor its full width is s.

</details>

</section>

<section class="lesson-check" markdown="1">

### Task R2 {#retry-b}

**Question:** For independent sampling from a normal population with known σ=5 cm, find the smallest n giving a 95% interval with full width at most 4 cm. Use z₀.₉₇₅=1.960, where P(Z≤1.960)≈0.975. A student rounds the calculated bound to 24. Explain the error by checking both 24 and your chosen n.

<details markdown="1"><summary>Hint</summary>

Write an inequality for full width before deciding how to round.

</details>

<details markdown="1"><summary>Solution</summary>

$$
n\geq\left(\frac{2(1.960)(5)}4\right)^2=24.01
\quad\Longrightarrow\quad n_{\min}=25.
$$

At n=24, width=19.6/√24≈4.000833 cm, which exceeds 4; at n=25 width=3.92 cm. Ordinary nearest-integer rounding violates the required inequality. Retain enough digits to detect the small failure at 24.

</details>

</section>

If A uses the wrong method, revisit [the conditions](#choose-model). If B has a wrong denominator or square root, reconstruct SS, s² and SE and use [Retry 1](#retry-a). If C has the wrong centre range, write both [inclusion inequalities](#width). If D rounds the wrong way, use [Retry 2](#retry-b). If E misinterprets confidence, identify [what varies before sampling](#meaning).

## Return after another topic {#later-review}

Do this later, with the earlier solutions closed.

<section class="lesson-check" markdown="1">

### Later task {#later-task}

**Question:** Two independent random samples from the same normal population with unknown mean μ and unknown variance have summaries (n,Σx,Σx²)=(4,40,420) and (5,60,730), with readings in seconds. Use all observations to estimate μ and construct a 95% confidence interval. Use t₈,₀.₉₇₅=2.306, meaning P(T₈≤2.306)≈0.975. Does the interval support μ=13 s? Explain why simply taking the unweighted average of the two sample means is not the combined sample mean. Show how you recover the combined spread; do not average the two variance estimates.

<details markdown="1"><summary>Hint</summary>

Combine counts, sums and sums of squares first, then centre the combined data about their combined mean.

</details>

<details markdown="1"><summary>Solution</summary>

$$
\begin{aligned}
n&=9,\quad\sum x_i=100,\quad\sum x_i^2=1150,\quad\bar x=\frac{100}{9},\\
\mathrm{SS}&=1150-\frac{100^2}{9}=\frac{350}{9},\\
s^2&=\frac{350/9}{8}=\frac{175}{36}\text{ s}^2,\\
\operatorname{SE}&=\sqrt{\frac{175/36}{9}}=\frac{5\sqrt7}{18}\text{ s},\\
h&=2.306\frac{5\sqrt7}{18}=1.6947507\ldots\text{ s},\\
\text{CI}&=\frac{100}{9}\pm h\approx[9.41636,12.80586]\text{ s}.
\end{aligned}
$$

All nine observations are independent and share the same normal population, so t₈ is justified. The point estimator is the mean of the nine random observations and its estimate is 100/9 s. The interval excludes 13, so does not support that hypothesised mean at the corresponding two-sided 5% level. The two means are 10 and 12, but their equal average is 11, whereas the combined mean weights them by counts: (4×10+5×12)/9=100/9. Combining raw sums of squares accounts for both within-group spread and the different group means.

</details>

</section>

## Next step {#next-step}

A confidence interval compares one population mean with a proposed value. The subsequent inference lessons extend the model and target; do not automatically reuse this one-sample standard error for two independent populations or paired observations.

[Test power](/alevel/a2-further-mathematics/statistics/test-power/) · [Course route](/alevel/a2-further-mathematics/statistics/)
