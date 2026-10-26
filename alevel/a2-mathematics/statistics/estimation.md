---
title: "Estimation: what can one sample tell us?"
layout: subjects
mathjax: true
grade: a2
subject: s2
permalink: /alevel/a2-mathematics/statistics/estimation/
reading_layout: true
study_page: true
toc_headings: "#population, #unbiased, #estimates, #sampling, #standard-error, #clt, #practice, #retry, #later-review, #next-step"
---

[A2 Statistics](/alevel/a2-mathematics/statistics/)
{:.lesson-meta}

A factory produces thousands of bags. We weigh a few: can their average describe the whole run? Another sample would give another answer. This lesson separates the value calculated this time from the behaviour of the method across repeated samples.

You will identify the target, calculate estimates and choose a model for a sample mean. Review [normal distributions](/alevel/a2-mathematics/statistics/normal-distribution/) if standardisation or variance notation is unfamiliar. We use means, squared deviations and independent sums. All examples and tasks are constructed except those labelled adapted; no official marks are assigned.

## Which quantities describe the whole group? {#population}

The **population** is the entire collection we want to describe; a **sample** is the part observed. Define the population carefully: one production run is not every bag the factory will ever make.

A **parameter** describes a population or its probability model, such as mean $\mu$ or variance $\sigma^2$. A **statistic** is calculated from sample observations without unknown population parameters. Sample means and variances are statistics. An **estimator** is a rule used to estimate a parameter; an **estimate** is the numerical result for one sample.

A **simple random sample** of size $n$ from a finite population gives every possible subset of $n$ members the same chance. Equal individual chances alone are insufficient: selecting fixed pairs may exclude possible samples. Sampling methods are not directly tested in S2.5, but this meaning is required.

The sampling-distribution formulae below use independent observations from the same population model, with the same finite mean and variance. Sampling a substantial fraction without replacement from a small finite population is not independent: do not apply independent formulae automatically. No finite-population correction calculation is required here.

<div class="worked-example" markdown="1">

### Worked example: defining the target {#example-population}

**Question:** A factory wants to describe the masses of all bags produced on Monday. It weighs a simple random sample of 12 bags and obtains a mean of 501 g. Identify the population, sample, parameter of interest and statistic.

The population is all Monday bags; the sample is the 12 weighed bags. The parameter is the unknown mean mass of all Monday bags. The statistic is the mean of the 12 measurements; its observed value, 501 g, estimates that parameter. It does not establish the mean for Tuesday.

</div>

## Does unbiased mean correct every time? {#unbiased}

Before sampling, observations are random variables $X_1,\ldots,X_n$. Their average $\bar X$ is random too. After measuring, the numbers are $x_1,\ldots,x_n$ and their mean is $\bar x$. Capitals describe what could happen; lower-case letters describe this observed sample.

$$\bar X=\frac1n\sum_{i=1}^nX_i.$$

An estimator $T$ is **unbiased** for $\theta$ when its expected value equals that parameter. Imagine repeatedly taking samples of the same size by the same rule: the long-run centre of estimates is the true parameter.

$$E(T)=\theta.$$

Unbiasedness guarantees neither an exact nor a close estimate every time. It concerns the centre of repeated estimates, not one sample. A biased method can also happen to be correct once.

<div class="worked-example" markdown="1">

### Worked example: unbiased but never exact {#example-unbiased}

**Question:** A population gives X = 0 or X = 10 with equal probabilities. Use one observation X to estimate its mean. Is the estimator unbiased, and will any one estimate equal the true mean?

$$\mu=0\times\frac12+10\times\frac12=5.$$

The estimator $T=X$ has $E(T)=5=\mu$, so it is unbiased. Yet its only estimates are 0 and 10, never 5. The errors balance in expectation. A correct long-run centre differs from accuracy once.

</div>

## Estimating mean and variance {#estimates}

Use the sample mean to estimate $\mu$. If each observation has mean $\mu$, linearity of expectation explains unbiasedness:

$$\begin{aligned}E(\bar X)&=\frac1n\sum_{i=1}^nE(X_i)\\&=\frac{n\mu}{n}=\mu.\end{aligned}$$

For $n>1$, the usual unbiased estimator of population variance is $S^2$; its observed value is $s^2$:

$$S^2=\frac{\sum_{i=1}^n(X_i-\bar X)^2}{n-1}.$$

$$s^2=\frac{\sum_{i=1}^n(x_i-\bar x)^2}{n-1}.$$

Why $n-1$? The sample mean has already been fitted to the data, so deviations from it tend to be smaller than deviations from the true mean. Deviations sum to zero: once $n-1$ are known, the last is fixed. Division by $n-1$ corrects the downward bias. For independent identically distributed observations, $E(S^2)=\sigma^2$; normality is not required.

The square root $s$ estimates population standard deviation, but square roots do not preserve unbiasedness: unbiasedness of $S^2$ does not imply unbiasedness of $S$. Variance has squared units; standard deviation has the original units.

For summary data, expanding squared deviations gives the corrected sum of squares $Q$:

$$\begin{aligned}Q&=\sum(x_i-\bar x)^2\\&=\sum x_i^2-2\bar x\sum x_i+n\bar x^2\\&=\sum x_i^2-n\bar x^2,\\s^2&=\frac{Q}{n-1}.\end{aligned}$$

<div class="worked-example" markdown="1">

### Worked example: sauce packets (adapted) {#example-estimates}

**Question:** A random sample of 8 sauce packets from a normal population has masses, in grams, 8.99, 8.96, 8.99, 9.02, 8.95, 8.98, 8.97, 9.01. Estimate the population mean and variance without rounding intermediate values.

Adapted from OxfordAQA MA04 January 2025 Q7(a)(i)(ii): original data, rewritten teaching question. Use the sample mean and $n-1$ variance because the targets are population parameters.

$$\begin{aligned}n&=8,\\\sum x_i&=71.87,\\\sum x_i^2&=645.6661,\\\bar x&=\frac{71.87}{8}=8.98375\ \mathrm{g}.\end{aligned}$$

$$\begin{aligned}Q&=645.6661\\&\quad-8(8.98375)^2\\&=0.0039875,\\s^2&=\frac{0.0039875}{7}\\&=\frac{319}{560000}\ \mathrm{g}^2\\&\approx0.000569643\ \mathrm{g}^2.\end{aligned}$$

The squared deviations sum to a non-negative number; a small variance fits the close masses. Both results agree with the paired mark scheme. Preserve the exact mean: rounding before squaring can badly affect a small difference between large numbers.

</div>

## One observation, total or average? {#sampling}

A **sampling distribution** describes a statistic across possible samples of fixed size, not readings within one sample. For independent observations of common variance $\sigma^2$, form total $T$ and then divide by $n$:

$$T=\sum_{i=1}^nX_i,\qquad\bar X=\frac{T}{n}.$$

$$\begin{aligned}E(T)&=n\mu,\\\operatorname{Var}(T)&=n\sigma^2,\\E(\bar X)&=\mu,\\\operatorname{Var}(\bar X)&=\frac1{n^2}\operatorname{Var}(T)\\&=\frac{\sigma^2}{n}.\end{aligned}$$

Scaling a variable squares the factor in its variance: add independent variances, then divide by $n^2$. These moments do not require normality. An exact normal shape does require a normal population. If each $X_i$ is normal and observations are independent,

$$\begin{aligned}X_i&\sim N(\mu,\sigma^2),\\T&\sim N(n\mu,n\sigma^2),\\\bar X&\sim N\left(\mu,\frac{\sigma^2}{n}\right).\end{aligned}$$

These are exact model results even for small samples. The second entry in $N(\mu,\sigma^2)$ is variance. An average retains the same centre but fluctuates less than one observation.

<div class="worked-example" markdown="1">

### Worked example: a stable average {#example-sampling}

**Question:** Independent bag masses follow N(500, 16), in grams. A sample contains 16 bags. Find the probability that its mean exceeds 502 g. Compare the mean and standard deviation of one bag, the total and the sample mean.

The population is normal; no large-sample argument is needed. One bag has mean 500 g and standard deviation 4 g. The total has mean 8000 g and standard deviation 16 g. The average has mean 500 g and standard deviation 1 g.

$$\begin{aligned}\bar X&\sim N(500,1),\\Z&=\frac{\bar X-500}{1},\\P(\bar X>502)&=P(Z>2)\\&=1-\Phi(2)\approx0.0228.\end{aligned}$$

Here $\Phi(z)=P(Z\le z)$ is standard normal cumulative probability. Subtract from 1 for the right tail. Using denominator 4 g would answer a question about one bag, not the average.

</div>

## How uncertain is the sample mean? {#standard-error}

The **standard error (SE)** is the standard deviation of the sample mean’s sampling distribution. It describes averages across repeated samples, not individual readings or the actual error in this estimate.

$$\operatorname{SE}(\bar X)=\frac{\sigma}{\sqrt n}.$$

If $\sigma$ is unknown, estimate SE using $s$. Before observing data the estimator uses $S$; after observing data use $s$.

$$\widehat{\operatorname{SE}}=\frac{s}{\sqrt n}.$$

An estimate does not make an unknown parameter known. Even for a normal population, the exact sampling distribution contains true $\sigma^2/n$. Substituting $s^2/n$ does not create an exact numerical normal model. Later mean tests handle that extra uncertainty.

<div class="worked-example" markdown="1">

### Worked example: estimating uncertainty {#example-se}

**Question:** For the eight sauce packets above, estimate the population standard deviation and the standard error of the sample mean. Explain the difference.

$$\begin{aligned}s&=\sqrt{\frac{319}{560000}}\\&\approx0.0238672\ \mathrm{g},\\\widehat{\operatorname{SE}}&=\frac{s}{\sqrt8}\\&\approx0.00843833\ \mathrm{g}.\end{aligned}$$

The first estimates variation between packets; the second estimates variation between eight-packet averages. Neither gives the distance of 8.98375 g from the unknown mean. Quadrupling $n$ for the same population halves true SE, rather than dividing it by four.

</div>

## What if the population is not normal? {#clt}

Waiting times may be strongly right-skewed, yet averages of many independent times can be close to normal. The **Central Limit Theorem (CLT)** states that for independent identically distributed observations with finite mean and finite positive variance, the standardised mean tends to standard normal as $n$ grows:

$$Z_n=\frac{\bar X-\mu}{\sigma/\sqrt n}.$$

For a sufficiently large sample use the approximation

$$\bar X\approx N\left(\mu,\frac{\sigma^2}{n}\right).$$

This approximates the **mean**, not the population or each $X_i$. There is no universal threshold at 30. Mild skewness may need fewer observations than extreme skewness or heavy tails. Extreme tail probabilities demand care. More dependent readings do not establish independence. Qualify the approximation if shape or independence is uncertain.

For large-sample work, unknown variance can be estimated by $s^2$, but this adds estimation uncertainty, not exactness. A small sample from a strongly skewed population has no automatic normal justification.

<div class="worked-example" markdown="1">

### Worked example: average waiting time {#example-clt}

**Question:** Independent waiting times have an exponential distribution with mean 6 minutes. Use a normal approximation for 100 times to estimate the probability that their mean is less than 6.6 minutes. Explain what is approximate.

For an exponential variable, standard deviation equals mean, so $\sigma=6$ minutes. With 100 independent observations from this finite-variance model, approximate the mean distribution; individual times remain skewed.

$$\begin{aligned}\operatorname{SE}(\bar X)&=\frac6{\sqrt{100}}=0.6,\\\bar X&\approx N(6,0.36),\\P(\bar X<6.6)&\approx\Phi\left(\frac{6.6-6}{0.6}\right)\\&=\Phi(1)\approx0.841.\end{aligned}$$

Mean 6 and variance 0.36 are exact under the sampling model. The normal shape and resulting probability are approximate. CLT supplies neither an exact finite-sample probability nor a universal accuracy guarantee.

</div>

## Close the examples and try {#practice}

Write reasoning before opening help. An attempt using a hint is supported learning, not independent evidence.

<section class="lesson-check" markdown="1">

### Task 1 {#task-population}

**Question:** A school wants the mean journey time of all 240 students in one year group. It records 18 students and calculates 24.5 minutes. Identify the population, sample, target parameter and statistic. A rule gives each student the same chance but only allows preassigned groups of 18 to be selected. Is this necessarily a simple random sample? Explain.

<details markdown="1"><summary>Hint</summary>

Consider every possible set of 18, not just individual chances.

</details>

<details markdown="1"><summary>Answer and recovery</summary>

The population is the 240 students’ journey times; the sample is the 18 observed times. The parameter is the population mean journey time; the statistic is the sample mean, observed as 24.5 minutes. The rule need not give a simple random sample: many sets of 18 cannot occur. Equal individual probabilities are insufficient. Revisit [population](#population), then try [new task A](#retry-population).

</details>

</section>

<section class="lesson-check" markdown="1">

### Task 2 {#task-unbiased}

**Question:** An estimator T for a population mean of 20 takes values 18 and 22 with equal probabilities. Another estimator U always equals 21. Decide which, if either, is unbiased. A single sample gave T = 18. Does this disprove your decision? Explain in English.

<details markdown="1"><summary>Hint</summary>

Calculate each rule’s expected value; consider what one result tells you.

</details>

<details markdown="1"><summary>Answer and recovery</summary>

$E(T)=20$ and $E(U)=21$, so $T$ is unbiased and $U$ is biased upwards. “The estimate 18 has an error of −2, but unbiasedness concerns the expected value over repeated samples, not exact agreement in every sample.” If you judged only one error, revisit [unbiasedness](#unbiased), then try [new task B](#retry-unbiased).

</details>

</section>

<section class="lesson-check" markdown="1">

### Task 3 {#task-estimates}

**Question:** Six independent measurements from one population have sum 48 cm and sum of squares 394 square centimetres. Estimate the population mean and variance. A student reports variance 10/6 square centimetres. Explain whether that is the required estimate.

<details markdown="1"><summary>Hint</summary>

Find the mean, then decide which divisor answers the population question.

</details>

<details markdown="1"><summary>Answer and recovery</summary>

$$\begin{aligned}\bar x&=\frac{48}{6}=8\ \mathrm{cm},\\Q&=394-6(8)^2=10,\\s^2&=\frac{10}{5}=2\ \mathrm{cm}^2.\end{aligned}$$

Dividing $Q$ by 6 describes the sample’s mean squared deviation but is downward-biased for population variance. Use $n-1$. If subtraction or divisor went wrong, revisit [variance calculation](#estimates), then try [new task C](#retry-estimates).

</details>

</section>

<section class="lesson-check" markdown="1">

### Task 4 {#task-sampling}

**Question:** Ten independent lap times follow a normal population model with mean 205 seconds and standard deviation 30 seconds. Find the distributions of the sample mean and total. Find the probability that the sample mean is at least 220.5 seconds, to three significant figures. Is a large-sample argument needed?

<details markdown="1"><summary>Hint</summary>

Identify which random quantity is asked about and what supplies its shape.

</details>

<details markdown="1"><summary>Answer and recovery</summary>

Adapted from OxfordAQA MA04 January 2025 Q3: a sampling-distribution task replaces the hypothesis test.

$$\begin{aligned}\bar X&\sim N(205,90),\\\operatorname{SD}(\bar X)&=\frac{30}{\sqrt{10}},\\T&\sim N(2050,9000),\\z&=\frac{15.5\sqrt{10}}{30}\\&=1.633843\ldots,\\P(\bar X\ge220.5)&=1-\Phi(z)\\&\approx0.0511.\end{aligned}$$

No CLT is needed: independent normal observations give an exact normal mean even for 10 observations. The probability is rounded; tables using $z=1.63$ give about 0.0516. Variance 900 would describe one observation. Revisit [sampling](#sampling), then try [new task D](#retry-sampling).

</details>

</section>

<section class="lesson-check" markdown="1">

### Task 5 {#task-se}

**Question:** A sample of 25 independent lengths has mean 40 mm and unbiased variance estimate 25 square millimetres. Estimate the standard error of the mean. Can you claim that the mean has the exact distribution N(40, 1)? If sample size increases to 100 from the same population, what happens to the true standard error?

<details markdown="1"><summary>Hint</summary>

Which numbers are estimates, and which true parameters are known?

</details>

<details markdown="1"><summary>Answer and recovery</summary>

$$\begin{aligned}\widehat{\operatorname{SE}}&=\frac{\sqrt{25}}{\sqrt{25}}=1\ \mathrm{mm},\\\frac{\operatorname{SE}_{\mathrm{new}}}{\operatorname{SE}_{\mathrm{old}}}&=\sqrt{\frac{25}{100}}=\frac12.\end{aligned}$$

True mean and variance are unknown; population normality is not supplied. The exact normal claim is unjustified. True SE halves; a new estimated SE need not halve exactly because the new $s$ may differ. Revisit [SE](#standard-error), then try [new task E](#retry-se).

</details>

</section>

<section class="lesson-check" markdown="1">

### Task 6 {#task-clt}

**Question:** For each case, decide whether a normal model for the sample mean is exact, potentially a reasonable approximation, or not justified by the information. Explain. (a) Four independent observations from a normal population. (b) Four independent observations from a strongly right-skewed population. (c) Four hundred independent observations from a mildly skewed population with finite variance. (d) Thirty consecutive sensor readings with strongly correlated errors. Does the number 30 settle any doubtful case? (e) In case (c), the population mean is 10 and standard deviation is 4. Estimate $P(9.6<\bar X<10.2)$, choosing and explaining your method. Give three significant figures.

<details markdown="1"><summary>Hint</summary>

Check shape, independence and size separately.

</details>

<details markdown="1"><summary>Answer and recovery</summary>

(a) Exact. (b) Not justified: a small mean from this population need not be normal. (c) Potentially reasonable by CLT; tail behaviour and the probability sought affect accuracy. (d) Not justified by the independent-sampling CLT because of correlation. Thirty is not universal. Individual observations in (c) stay non-normal. Revisit [CLT](#clt), then try [new task F](#retry-clt).

For (e), the large independent sample from a mildly skewed population supports a normal approximation for the mean. The population itself stays skewed.

$$\begin{aligned}
\operatorname{SE}(\bar X)&=4/\sqrt{400}=0.2,\\
\bar X&\overset{\mathrm{approx}}{\sim}N(10,0.04),\\
P(9.6<\bar X<10.2)
&\approx\Phi(1)-\Phi(-2)\\
&\approx0.8413-0.0228\\
&\approx0.819.
\end{aligned}$$

For standard-error or tail errors, revisit [sampling](#sampling) and [CLT](#clt), then attempt [the new retry](#retry-clt). For reverse cut-offs consult [normal inverse probabilities](/alevel/a2-mathematics/statistics/normal-distribution/#inverse).

</details>

</section>

## Recover, then try a new problem {#retry}

Choose the task matching your error and close the earlier answer. These change the representation or direction, rather than merely replacing numbers.

<section class="lesson-check" markdown="1">

### Task A {#retry-population}

**Question:** A library has books A, B, C and D. To estimate their mean mass, a rule chooses either AB or CD with equal probabilities. Every book has selection probability one half. Is this a simple random sample of two? Identify a parameter and a possible statistic.

<details markdown="1"><summary>Hint</summary>

Find a pair that cannot occur.

</details>

<details markdown="1"><summary>Answer and recovery</summary>

No: AC, AD, BC and BD never occur. Simple random sampling gives all six pairs equal chances. The mean mass of all four books is a parameter; the selected pair’s mean is a statistic. Revisit [sampling meaning](#population) if you used individual chances alone.

</details>

</section>

<section class="lesson-check" markdown="1">

### Task B {#retry-unbiased}

**Question:** An estimator T equals mu − 2 with probability p and mu + 1 with probability 1 − p. Find p so that T is unbiased for mu. Must the possible errors have equal size or equal probability?

<details markdown="1"><summary>Hint</summary>

Balance probability-weighted errors.

</details>

<details markdown="1"><summary>Answer and recovery</summary>

$$\begin{aligned}E(T)&=p(\mu-2)\\&\quad+(1-p)(\mu+1)\\&=\mu+1-3p,\\E(T)=\mu&\ \Longrightarrow\ p=\frac13.\end{aligned}$$

Neither equal errors nor equal probabilities are required: weighted errors cancel. Both probabilities are valid. If you assumed $p=1/2$, revisit [unbiasedness](#unbiased).

</details>

</section>

<section class="lesson-check" markdown="1">

### Task C {#retry-estimates}

**Question:** Five measurements have mean 8 cm. Their squared deviations from their sample mean average 3.2 square centimetres. Estimate the population variance. If 10 cm is added to every measurement, what are the new estimates of mean and variance? Explain without inventing raw data.

<details markdown="1"><summary>Hint</summary>

Recover the sum of squared deviations. Readings and mean shift together.

</details>

<details markdown="1"><summary>Answer and recovery</summary>

$$\begin{aligned}s^2&=\frac{5\times3.2}{4}=4\ \mathrm{cm}^2,\\\bar y&=\bar x+10=18\ \mathrm{cm},\\s_y^2&=s_x^2=4\ \mathrm{cm}^2.\end{aligned}$$

The original average used 5: multiply by 5, then divide by 4. A shift leaves deviations unchanged. If you added 10 to variance, revisit [variance](#estimates).

</details>

</section>

<section class="lesson-check" markdown="1">

### Task D {#retry-sampling}

**Question:** Nine independent measurements come from a normal population with mean 12. Their total T has standard deviation 6. Find the population variance, the distribution of their sample mean, and the probability that their mean is less than 11, to three significant figures.

<details markdown="1"><summary>Hint</summary>

The given standard deviation belongs to the total.

</details>

<details markdown="1"><summary>Answer and recovery</summary>

$$\begin{aligned}E(T)&=9\times12=108,\\\operatorname{Var}(T)&=36,\\9\sigma^2&=36\ \Longrightarrow\ \sigma^2=4,\\\bar X&\sim N\left(12,\frac49\right),\\P(\bar X<11)&=\Phi\left(\frac{11-12}{2/3}\right)\\&=\Phi(-1.5)\approx0.0668.\end{aligned}$$

The average has standard deviation $2/3$, not 6 or 2. Reconstruct [total then average](#sampling) if scaling went wrong.

</details>

</section>

<section class="lesson-check" markdown="1">

### Task E {#retry-se}

**Question:** A researcher wants the true standard error to be one third of its value for samples of size 16 from the same population. What sample size is required? In an actual sample of size 16, s = 12. Estimate its standard error and explain why this does not reveal the true estimation error.

<details markdown="1"><summary>Hint</summary>

SE uses the square root of sample size. The true mean remains unknown.

</details>

<details markdown="1"><summary>Answer and recovery</summary>

$$\begin{aligned}n_{\mathrm{new}}&=9n_{\mathrm{old}},\\n_{\mathrm{new}}&=9\times16=144,\\\widehat{\operatorname{SE}}&=\frac{12}{\sqrt{16}}=3.\end{aligned}$$

Estimated SE is 3 in the measurement units. It estimates the spread of repeated means, not this mean’s difference from $\mu$. If you chose 48, revisit [scaling](#standard-error).

</details>

</section>

<section class="lesson-check" markdown="1">

### Task F {#retry-clt}

**Question:** A report says: “We averaged 100 independent observations from a strongly skewed population with finite mean and variance, so the population is now normal and every tail probability is exact.” Correct the report. Would 100 readings of one object with a shared random calibration error justify the independent-sampling formula? (b) A separate mildly skewed population has mean 50 and standard deviation 6. For 100 independent observations, estimate a cut-off $c$ such that $P(\bar X>c)=0.05$. Explain why your result is not exact; the normal-distribution lesson provides statistical reference values.

<details markdown="1"><summary>Hint</summary>

Separate population shape, averages and exactness.

</details>

<details markdown="1"><summary>Answer and recovery</summary>

Only the mean’s sampling distribution may be approximately normal; the population stays skewed. One hundred observations do not guarantee exact normal tails. A shared random calibration error creates dependence and is not removed by averaging, so the independent formula is not justified. Revisit [CLT limits](#clt).

For (b), use a large-sample approximation for the average, not an exact model for a single observation.

$$\begin{aligned}
\operatorname{SE}(\bar X)&=6/\sqrt{100}=0.6,\\
\frac{c-50}{0.6}&\approx1.6449,\\
c&\approx50+0.6(1.6449)\\
&=50.98694\approx51.0.
\end{aligned}$$

This is approximate: sample size does not guarantee exact tail probabilities. For SE errors revisit [standard error](#standard-error), then check again with [delayed part (d)](#review-mixed).

</details>

</section>

## Return after another topic {#later-review}

Without examples, identify the random quantity and choose your reasoning. Try explaining in English, then use feedback to select recovery tasks.

<section class="lesson-check" markdown="1">

### Task Review {#review-mixed}

**Question:** (a) Thirty-six independent waiting times from a right-skewed population have sum 360 minutes and sum of squares 3740 square minutes. Estimate the population mean, variance and standard error of the mean. Can you assert an exact numerical normal distribution for that mean? Explain. (b) In a different model, independent measurements V follow N(10, 4). Find the probability that the total of 36 measurements exceeds 372, to three significant figures. (c) A friend says an unbiased rule must give the true mean for the next sample. Respond with a counterexample. (d) For 100 independent observations from a mildly skewed population of mean 8 and standard deviation 3, estimate $P(\bar X<8.3)$. State the model conditions and whether the probability is exact.

<details markdown="1"><summary>Hint</summary>

Separate estimates from parameters; translate a total into a mean if useful.

</details>

<details markdown="1"><summary>Answer and recovery</summary>

$$\begin{aligned}\bar w&=\frac{360}{36}=10,\\s^2&=\frac{3740-36(10)^2}{35}=4,\\\widehat{\operatorname{SE}}&=\frac2{\sqrt{36}}=\frac13.\end{aligned}$$

(a) No exact numerical normal model: the population is skewed and parameters are estimated. CLT needs a sufficiently large independent sample for the shape and probability sought; 36 is not automatic assurance. Units are minutes, square minutes and minutes respectively.

$$\begin{aligned}T&=\sum_{i=1}^{36}V_i,\\\bar V&\sim N\left(10,\frac19\right),\\P(T>372)&=P\left(\bar V>\frac{31}{3}\right)\\&=1-\Phi(1)\approx0.159.\end{aligned}$$

(b) Exact model calculation before rounding. (c) For an equal-probability 0-or-10 population, one observation is unbiased for 5 but never equals 5. Calculation errors: [estimates](#estimates) → [retry C](#retry-estimates). Scaling: [sampling](#sampling) → [retry D](#retry-sampling). Uncertainty: [SE](#standard-error) → [retry E](#retry-se). Models: [CLT](#clt) → [retry F](#retry-clt). Unbiasedness: [meaning](#unbiased) → [retry B](#retry-unbiased).

For (d), independent observations from the same mildly skewed finite-variance population and a large sample support CLT. This is an approximate probability, not an exact normal population calculation.

$$\begin{aligned}
\operatorname{SE}(\bar X)&=3/\sqrt{100}=0.3,\\
P(\bar X<8.3)&\approx\Phi\left(\frac{8.3-8}{0.3}\right)\\
&=\Phi(1)\approx0.841.
\end{aligned}$$

For standard-error or tail errors, revisit [sampling](#sampling) and [CLT](#clt), then attempt [the new retry](#retry-clt). For reverse cut-offs consult [normal inverse probabilities](/alevel/a2-mathematics/statistics/normal-distribution/#inverse).

</details>

</section>

## What comes next? {#next-step}

A sample mean estimates a population mean; SE describes its fluctuation across samples. Next, [hypothesis testing](/alevel/a2-mathematics/statistics/hypothesis-testing/) asks whether an observation is sufficiently unusual under a claim. This lesson covers S2.5, not confidence intervals or later mean tests.

<details markdown="1"><summary>Sources and scope</summary>

OxfordAQA 9660 v5.2, S2.5, printed p.26 / PDF p.25: [qualification](https://www.oxfordaqa.com/qualification/international-as-and-a-level-mathematics-9660/) and [specification](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf#page=25). Sampling methods are not directly assessed.

The sauce example is adapted from [January 2025 Q7(a), QP p.20](/assets/pdf/fx-cg50/references/oxfordaqa-ma04-2025-january-question-paper.pdf#page=20), checked against [final MS p.15](/assets/pdf/fx-cg50/references/oxfordaqa-ma04-2025-january-mark-scheme.pdf#page=15). Task 4 adapts [Q3, QP p.10](/assets/pdf/fx-cg50/references/oxfordaqa-ma04-2025-january-question-paper.pdf#page=10), checked against [MS p.9](/assets/pdf/fx-cg50/references/oxfordaqa-ma04-2025-january-mark-scheme.pdf#page=9). Rewritten tasks are adapted questions, not verbatim originals. Other tasks are constructed without official marks. Numerical checks do not verify calculator keystrokes or student learning.

</details>
