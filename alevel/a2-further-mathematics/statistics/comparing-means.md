---
title: "Comparing independent means: choose the right uncertainty"
layout: subjects
mathjax: true
grade: a2
subject: a2-further-mathematics
lang: en
permalink: /alevel/a2-further-mathematics/statistics/comparing-means/
reading_layout: true
study_page: true
toc_headings: h2
---

## A difference needs a scale {#meaning}

Two sample averages rarely match exactly, even if the population means are equal. Compare their difference with how much it would fluctuate across samples. First check the sampling design: two columns of measurements are not automatically two independent samples. All examples and tasks below are self-written.

Use [linear combinations](/alevel/as-further-mathematics/linear-combinations/) and [single-mean tests](/alevel/a2-mathematics/statistics/mean-tests/) as prerequisites. If the same objects are measured twice, go to [paired tests](../paired-tests/). For independent random samples within and between groups:

$$
D=\bar X-\bar Y,\quad \delta=\mu_X-\mu_Y,\qquad
E(D)=\delta,\quad \operatorname{Var}(D)=\frac{\sigma_X^2}{n}+\frac{\sigma_Y^2}{m}.
$$

The minus sign is squared in a variance, so the two terms add. The standard error is the square root. Compare with the null difference $\delta_0$, which need not be zero.

## Let the information choose the method {#conditions}

| Information | Reference and standard error |
| --- | --- |
| Normal populations, known variances | Exact $z$; $\sqrt{\sigma_X^2/n+\sigma_Y^2/m}$ |
| Large independent samples, finite variances | Approximate $z$; use known variances, or $\sqrt{s_X^2/n+s_Y^2/m}$ if unknown |
| Small normal samples, unknown equal population variances | Pooled $t$, $df=n+m-2$ |

Here $s^2=[\sum x_i^2-(\sum x_i)^2/n]/(n-1)$ is unbiased sample variance. In the last row, pool the sums of squares with their degrees of freedom:

$$
s_p^2=\frac{(n-1)s_X^2+(m-1)s_Y^2}{n+m-2},\qquad
T=\frac{\bar X-\bar Y-\delta_0}{s_p\sqrt{1/n+1/m}}\sim t_{n+m-2}\quad(H_0).
$$

Equal population variances do not force the two observed sample variances to be equal. Conversely, similar sample variances do not prove that the populations have equal variances. Large samples justify a sampling approximation, not independence or unbiased sampling. For small, skewed, unequal-variance populations, none of these three routes is automatically justified.

## Two complete choices {#example}

<section class="worked-example" markdown="1">

### Known population variability

**Question:** Independent random samples from normal processes A and B give $n=9,\bar x=24$ g and $m=16,\bar y=21$ g. Known population standard deviations are 3 g and 4 g. Test for different population means at 5%, using $z_{0.975}=1.959964$.

$$
H_0:\mu_A-\mu_B=0,\quad H_1:\mu_A-\mu_B\ne0,\qquad
SE=\sqrt{3^2/9+4^2/16}=\sqrt2,\quad z=\frac3{\sqrt2}=2.121.
$$

Known variances and normal populations justify exact $z$, despite the small samples. The claim uses two tails. Since $\lvert z\rvert>1.959964$, reject: evidence at 5% that the population mean masses differ. Check: each sample mean has variance 1, so the difference has variance 2, not zero.

</section>

<section class="worked-example" markdown="1">

### An estimated common variance

**Question:** Independent random samples of size 6 come from normal populations with the same unknown variance. A has mean 18 s and unbiased variance 4; B has mean 15 s and unbiased variance 5. Test the pre-specified claim $\mu_A>\mu_B$ at 5%, using $t_{0.95,10}=1.812461$.

$$
H_0:\mu_A=\mu_B,\quad H_1:\mu_A>\mu_B,\qquad
s_p^2=\frac{5(4)+5(5)}{10}=4.5,\quad
SE=\sqrt{4.5(1/6+1/6)}=\sqrt{1.5},
$$
$$
t=\frac{18-15}{\sqrt{1.5}}=2.449,\qquad df=10.
$$

Normality and the stated equal-variance assumption justify pooled $t$. The upper-tail statistic exceeds 1.812461, so reject: evidence that A has the larger population mean time. Check the denominator: $s_p$ measures individual spread; multiplying by $\sqrt{1/6+1/6}$ gives mean-difference spread.

</section>

## Choose and explain {#practice}

<section class="lesson-check" markdown="1">

### Service times {#task-a}

**Question:** Independent random samples from finite-variance service-time populations give A: $n=64,\sum x=640,\sum x^2=6652$; B: $m=100,\sum y=950,\sum y^2=9916$ (minutes and squared minutes). Variances are unknown and not assumed equal. The samples are sufficiently large for the mean-difference normal approximation. Test $\mu_A>\mu_B$ at 5%, using $z_{0.95}=1.644854$. State what sample size does not guarantee.

<details markdown="1"><summary>Hint</summary>

Recover the separate unbiased variances before forming the standard error.

</details>

<details markdown="1"><summary>Solution</summary>

$$
\bar x=10,\quad\bar y=9.5,\quad
s_A^2=\frac{6652-640^2/64}{63}=4,\quad
s_B^2=\frac{9916-950^2/100}{99}=9.
$$
Use approximate z with separate estimates; do not pool.
$$
H_0:\mu_A=\mu_B,\quad H_1:\mu_A>\mu_B,\quad
SE=\sqrt{4/64+9/100}=0.390512,\quad z=\frac{0.5}{SE}=1.28037.
$$
Do not reject: insufficient evidence of a larger A population mean at 5%. Large samples do not establish independence, remove selection bias, or make individual times normal.

</details>

</section>

<section class="lesson-check" markdown="1">

### A claimed gap {#task-b}

**Question:** Independent normal processes have known population standard deviations 4 and 3. Samples give $n=16,\bar x=31$ and $m=9,\bar y=28$. Test the pre-specified claim $\mu_X-\mu_Y>2$ at 5%, using $z_{0.95}=1.644854$. Explain the null difference.

<details markdown="1"><summary>Hint</summary>

Standardise the departure from the boundary of the claim.

</details>

<details markdown="1"><summary>Solution</summary>

$H_0:\delta=2$ is the boundary of $\delta\le2$; $H_1:\delta>2$.
$$
SE=\sqrt{16/16+9/9}=\sqrt2,\qquad
z=\frac{31-28-2}{\sqrt2}=0.707107<1.644854.
$$
Insufficient evidence that the gap exceeds 2. Omitting the 2 would test a gap greater than zero, a different claim.

</details>

</section>

<section class="lesson-check" markdown="1">

### Two delivery companies {#task-c}

**Question:** Delivery times from two companies are skewed with finite variances. Independent random samples of 100 deliveries from each are sufficiently large for a mean-difference normal approximation. Known population standard deviations are 10 and 8 minutes; sample means are 81 and 78 minutes. At 2%, test whether the population means differ, using $z_{0.99}=2.326348$. Explain why skewness does not by itself invalidate this test.

<details markdown="1"><summary>Hint</summary>

Check whether the approximation concerns individual deliveries or sample means. Use the known population variances.

</details>

<details markdown="1"><summary>Solution</summary>

The samples are independent and sufficiently large; use an approximate normal comparison with the known variances.
$$
H_0:\mu_A=\mu_B,\quad H_1:\mu_A\ne\mu_B,\qquad
SE=\sqrt{10^2/100+8^2/100}=\sqrt{1.64},\qquad
z=\frac{81-78}{\sqrt{1.64}}\approx2.342606.
$$
Two-sided 2% leaves 1% in each tail. Reject since $\lvert z\rvert>2.326348$: sufficient evidence that the population mean delivery times differ. The approximation concerns the sampling distribution of the means, not the distribution of individual deliveries. It is approximate rather than exact; no t degrees of freedom are used.

</details>

</section>

## Repair the denominator {#retry}

If you subtracted variances, return to [the variance of a difference](#meaning). If you pooled automatically, return to [the conditions](#conditions). A different sample size needs degrees-of-freedom weighting, not an unweighted average.

<section class="lesson-check" markdown="1">

### Unequal sample sizes {#retry-a}

**Question:** Independent normal samples have the same unknown population variance. A: $n=5,\bar x=12,s_A^2=9$; B: $m=7,\bar y=8,s_B^2=4$. Test for different population means at 5%, using $t_{0.975,10}=2.228139$. Explain whether 9 and 4 contradict the stated population model.

<details markdown="1"><summary>Hint</summary>

Weight each sample variance by its own degrees of freedom.

</details>

<details markdown="1"><summary>Solution</summary>

$$
s_p^2=\frac{4(9)+6(4)}{10}=6,\quad
SE=\sqrt{6(1/5+1/7)}=\sqrt{72/35},\quad
t=\frac4{SE}=2.78887,\quad df=10.
$$
For $H_0:\mu_A=\mu_B$ against $\mu_A\ne\mu_B$, reject since $\lvert t\rvert>2.228139$. Evidence supports differing population means. Random sample variances can differ under one common population variance; their observed inequality does not itself contradict that assumption.

</details>

</section>

<section class="lesson-check" markdown="1">

### A new pair of delivery samples {#retry-b}

**Question:** Two independent random samples of delivery times come from skewed populations with known SDs 6 and 8 minutes. Sample sizes are 100 and 144 and sample means are 12 and 10 minutes. A normal approximation for the mean difference is justified. Test for different population means at 5%, using $z_{0.975}=1.959964$, and explain why pooling an estimated variance is unnecessary.

<details markdown="1"><summary>Hint</summary>

Use the two known variances divided by their sample sizes; this is a two-tailed claim.

</details>

<details markdown="1"><summary>Solution</summary>

$$
H_0:\mu_A=\mu_B,\quad H_1:\mu_A\ne\mu_B,\qquad
SE=\sqrt{6^2/100+8^2/144},\qquad
z=\frac{12-10}{SE}\approx2.229882.
$$
Reject since $\lvert z\rvert>1.959964$: approximate evidence of differing population mean delivery times. Population variances are known, so there is no common unknown variance to estimate. Large samples justify the stated approximation despite skewness; they do not create independence.

</details>

</section>

If skewness led you to reject the method, revisit [what is approximated](#conditions), then close the old solution and attempt [this new delivery study](#retry-b).

## Mix this with another chapter {#later-review}

On a later visit, try [the fresh investigations](../#later-c) and [the method-selection task](../#later-b) with this page closed. The data collection, not the number of columns, should decide your starting model.

## Next step {#next-step}

[Paired observations](/alevel/a2-further-mathematics/statistics/paired-tests/) · [Course route](/alevel/a2-further-mathematics/statistics/)

{% include exam_topic_practice.html %}
