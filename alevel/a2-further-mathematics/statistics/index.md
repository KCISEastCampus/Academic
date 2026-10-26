---
title: "A2 Further Statistics: course route"
layout: subjects
mathjax: true
grade: a2
subject: a2-further-mathematics
lang: en
permalink: /alevel/a2-further-mathematics/statistics/
reading_layout: true
study_page: true
toc_headings: h2
---

[All A2 Further Mathematics units](/alevel/a2-further-mathematics-overview/)
{:.lesson-meta}

## Choose a starting point {#start}

OxfordAQA 9665 · FM04 / Further Statistics 2. Start with a probability table, then learn how random samples support estimates and decisions. This route covers FS2.1–4. Examples and tasks here are self-written teaching data, not observations or official mark allocations.

New to MGFs? Start at [the first lesson](moment-generating-functions/). Ready for inference? Begin with [estimators](estimators/) after checking expectation, variance and [ordinary mean tests](/alevel/a2-mathematics/statistics/mean-tests/). Keep solutions closed until you have a written attempt.

## What each lesson helps you do {#route}

- [MGFs: mean and spread](moment-generating-functions/) — Build a function from probabilities; distinguish independent copies from repeated use of one variable.

- [Continuous and standard MGFs](standard-mgfs/) — Derive Poisson, exponential and normal functions, check existence ranges, and identify sums.

- [Compare estimation rules](estimators/) — Separate bias, consistency and efficiency; justify a combined estimator.

- [Put uncertainty around a mean](confidence-intervals/) — Choose z or t from the information, interpret the interval, and plan sample size.

- [Will a test detect a change?](test-power/) — Fix the rejection rule, then calculate misses under a specified alternative.

- [Compare independent groups](comparing-means/) — Choose a standard error and justify z or pooled t.

- [Keep natural pairs together](paired-tests/) — Use each pair to form one difference and test its mean.

- [Compare variation](variance-tests/) — Distinguish one variance from a ratio; align tails, numerator and degrees of freedom.

- [Does a probability model fit?](goodness-of-fit/) — Turn discrete or continuous probabilities into expected counts, pool and account for fitted parameters.

- [Are categories associated?](association-tests/) — Calculate a contingency-table test, including Yates correction for a 2×2 table.

## Mix the methods after studying {#review}

These tasks deliberately do not name the method. State the random units and conditions before calculating. If you need help, record that separately from an independent answer.

<section class="lesson-check" markdown="1">

### A measurement study {#mixed-a}

**Question:** Eight independent randomly selected devices are measured before and after an adjustment. Define $D=$ before minus after; assume the differences are normally distributed. The summaries are $\sum d=16$, $\sum d^2=60$. At 5%, is there evidence of a reduction? Use $P(T_7>1.895)=0.05$. Give a 95% interval for the mean reduction using $t_{0.975,7}=2.365$. Does this alone establish that the adjustment caused a reduction?

<details markdown="1"><summary>Hint</summary>

There are eight independent pairs, not sixteen independent measurements.

</details>

<details markdown="1"><summary>Solution</summary>

Use paired differences. $H_0:\mu_D=0$, $H_1:\mu_D>0$.
$$
\bar d=2,\quad s_D^2=\frac{60-16^2/8}{7}=4,\quad
t=\frac{2}{2/\sqrt8}=2.828>1.895.
$$
Reject $H_0$: evidence of a positive mean reduction. The interval is
$$
2\pm2.365\frac2{\sqrt8}=(0.328,3.672)\quad\text{approximately}.
$$
Zero is outside this two-sided 95% interval. Pairing controls device-to-device differences, but without a suitable control/randomised design a time effect or other change could explain the result; this alone does not establish causality.

</details>

</section>

<section class="lesson-check" markdown="1">

### Four intervals {#mixed-b}

**Question:** Eighty independent observations are recorded in the fixed intervals $[0,0.5)$, $[0.5,1)$, $[1,1.5)$, $[1.5,2]$. The counts are $20,20,30,10$. Test the fully specified uniform model on $[0,2]$ at 5%; the upper 5% chi-square critical value with 3 degrees of freedom is 7.815. Explain why this is not a test of association.

<details markdown="1"><summary>Hint</summary>

Integrate the proposed density over each interval; no parameter has been fitted.

</details>

<details markdown="1"><summary>Solution</summary>

Under $H_0$, each interval has probability $1/4$, so each expected count is $20>5$.
$$
Q=\frac{0^2+0^2+10^2+(-10)^2}{20}=10>7.815.
$$
There are four counts with one fixed total and no fitted parameter: $df=4-1=3$. Reject the uniform model at 5%; this does not identify a replacement distribution. The table groups one numerical variable, not two categorical variables, so it is goodness of fit rather than association.

</details>

</section>

<section class="lesson-check" markdown="1">

### The estimate and its precision {#mixed-c}

**Question:** Independent $X_1,\ldots,X_n$ are exponential with unknown mean $\theta>0$. Derive the MGF of $\bar X$, and show that it is unbiased and consistent for $\theta$. For a large sample with $n=100$, $\bar x=5$ and unbiased sample variance $s^2=25$, give an approximate 95% interval for $\theta$ using $z_{0.975}=1.96$. Is it an exact small-sample normal interval?

<details markdown="1"><summary>Hint</summary>

An exponential rate is $1/	heta$. Keep the sampling calculation separate from the large-sample approximation.

</details>

<details markdown="1"><summary>Solution</summary>

$$
M_X(t)=\frac1{1-\theta t},\qquad
M_{\bar X}(t)=\left(1-\frac{\theta t}{n}\right)^{-n},\quad t<n/\theta.
$$
$E(\bar X)=\theta$, $\operatorname{Var}(\bar X)=\theta^2/n$, hence unbiased and consistent (the mean-square error tends to zero).
$$
5\pm1.96\frac5{\sqrt{100}}=(4.02,5.98).
$$
This uses a large-sample normal approximation and an estimated standard error. The exponential population is not normal, so it is not an exact small-sample normal interval.

</details>

</section>

## Come back on a later visit {#later-review}

<section class="lesson-check" markdown="1">

### A changed rejection rule {#later-a}

**Question:** A test rejects $H_0:\mu=10$ when $\bar X>10.8$. Independent normal observations have known standard deviation 2 and sample size 25. Find the actual significance level and the power at $\mu=11$. If the threshold is increased while everything else stays fixed, describe both changes. You may use $\Phi(2)=0.97725$ and $\Phi(-0.5)=0.30854$.

<details markdown="1"><summary>Hint</summary>

Keep the event fixed, but calculate its probability under two different means.

</details>

<details markdown="1"><summary>Solution</summary>

The standard error is $2/\sqrt{25}=0.4$. Under $H_0$ the cutoff standardises to $2$, so the actual size is $1-\Phi(2)=0.02275$. Under $\mu=11$ it standardises to $-0.5$, so power is $1-\Phi(-0.5)=0.69146$; $\beta=0.30854$. Increasing the threshold reduces both size and power against this fixed upper alternative.

</details>

</section>

<section class="lesson-check" markdown="1">

### Choosing what to compare {#later-b}

**Question:** For each study, name an appropriate FM04 procedure and its key assumptions: (i) two independent normal samples with unknown but equal variances, comparing means; (ii) two independent normal samples comparing standard deviations; (iii) one random sample cross-classified by two binary categories. Can the same denominator and reference distribution be used for all three?

<details markdown="1"><summary>Hint</summary>

Identify whether the target is a mean difference, a variance ratio, or expected counts.

</details>

<details markdown="1"><summary>Solution</summary>

(i) A pooled two-sample t test, with $df=n_1+n_2-2$, requires independent samples, normal populations and equal variances. (ii) An F test uses $s_1^2/s_2^2$ and $df=(n_1-1,n_2-1)$; normality and independence are essential, and SD hypotheses must be squared. (iii) A chi-square association test with $df=1$, Yates correction for the $2\times2$ table, and every expected count strictly above 5; observations must be independently classified in mutually exclusive categories. The denominators and reference distributions differ. If expected counts are inadequate, this course's approximation is not justified.

</details>

</section>

<section class="lesson-check" markdown="1">

### Two fresh investigations {#later-c}

**Question:** At 5%, assess whether the population mean measurements differ in each independent random-sampling study; units are seconds. (i) Normal populations have unknown but equal variances. A: $n=6,\bar x=20,s_A^2=9$; B: $m=8,\bar y=17,s_B^2=4$, where sample variances are unbiased. (ii) Populations have finite unknown variances, not assumed equal, and the samples are sufficiently large for a mean-difference normal approximation. A: $(n,\sum x,\sum x^2)=(100,1000,10891)$; B: $(m,\sum y,\sum y^2)=(144,1296,13952)$. Use $t_{0.975,12}\approx2.178813$ or $z_{0.975}\approx1.959964$ as justified. State why the two uncertainty calculations differ.

<details markdown="1"><summary>Hint</summary>

Determine the model from each population and variance statement before calculating a denominator.

</details>

<details markdown="1"><summary>Solution</summary>

Both tests use $H_0:\mu_A-\mu_B=0$, $H_1:\mu_A-\mu_B\ne0$.
For (i), small normal samples and the common unknown variance justify pooled t:
$$
s_p^2=\frac{5(9)+7(4)}{12}=\frac{73}{12},\quad
SE=\sqrt{\frac{73}{12}\left(\frac16+\frac18\right)}
=\sqrt{\frac{511}{288}},\quad
t=\frac3{SE}\approx2.252200,\quad df=12.
$$
Reject since $\lvert t\rvert>2.178813$: evidence of different population means.
For (ii), recover separate estimates and use the justified large-sample approximation:
$$
\bar x=10,\quad\bar y=9,\quad
s_A^2=\frac{10891-1000^2/100}{99}=9,\quad
s_B^2=\frac{13952-1296^2/144}{143}=16,
$$
$$
SE=\sqrt{9/100+16/144},\qquad z=\frac1{SE}\approx2.229882.
$$
Reject since $\lvert z\rvert>1.959964$: approximate evidence of differing population means. Part (ii) does not assume equal variances and uses separate variance estimates; pooling them is not justified by the information. Large samples concern the means' sampling distribution, not individual normality.

</details>

</section>

## Scope and sources {#sources}

<details markdown="1"><summary>Qualification and reading</summary>

[OxfordAQA 9665](https://www.oxfordaqa.com/qualification/international-as-and-a-level-further-mathematics-9665/), specification v5.2 FS2.1–4; Oxford 2017 Further Mathematics with Statistics, chapters 29–33. Teaching was checked against paired January and June 2025 FM04 papers and mark schemes. Source identities and the limits of that checking are recorded in the author/review notes; self-written exercises carry no official marks.

</details>
