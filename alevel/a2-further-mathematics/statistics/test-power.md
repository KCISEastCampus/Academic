---
title: "Test power: will the rule detect a change?"
layout: subjects
mathjax: true
grade: a2
subject: a2-further-mathematics
lang: en
permalink: /alevel/a2-further-mathematics/statistics/test-power/
reading_layout: true
study_page: true
toc_headings: h2
---

## One rule, two possible realities {#rule}

A test is a rule chosen before seeing the sample. Under a true null hypothesis, rejecting is a Type I error. Under a specified false-null value, failing to reject is a Type II error. We will keep the decision rule fixed and change the distribution used to calculate its probability. All examples and tasks are self-written.

You need [rejection regions](/alevel/a2-mathematics/statistics/hypothesis-testing/) and [normal standardisation](/alevel/a2-mathematics/statistics/normal-distribution/). A non-rejection is insufficient evidence, not proof that the null is true.

$$
\beta=P_{\text{specified alternative}}(\text{do not reject }H_0),
\qquad \text{power}=1-\beta.
$$

Power is the chance of detecting this particular change in repeated samples. It is not $1-\alpha$: significance is calculated under the null, while power is calculated under the specified alternative. Discrete tests may have actual size smaller than their nominal level.

## Set the boundary once {#example}

<section class="worked-example" markdown="1">

### A filling process

**Question:** Independent filling volumes are $N(\mu,16)$ ml, where the second parameter is variance. With $n=16$, test $H_0:\mu=50$ against $H_1:\mu>50$ at 5%. Find the rule, then its Type II error probability and power at $\mu=52$. Use $z_{0.95}=1.644854$ and $\Phi(-0.355146)=0.361240$.

Normal observations give an exact normal sample mean. The standard error is $4/\sqrt{16}=1$ ml. The claim is an increase, so reject for a large sample mean:

$$
\bar X\sim N(50,1)\text{ under }H_0,\qquad
\frac{\bar X-50}{1}>1.644854
\ \Longleftrightarrow\ \bar X>51.644854.
$$

Now keep that boundary. At a true mean of 52, the sample mean is $N(52,1)$. Missing the change means remaining on the left of the same line:

$$
\beta=P_{\mu=52}(\bar X\le51.644854)
=\Phi\left(\frac{51.644854-52}{1}\right)
=0.361240,\qquad \text{power}=0.638760.
$$

Check the meanings: the null rejection chance is 5%; the chance of detecting this specific increase is about 63.9%. Neither is the probability that a hypothesis is true after seeing a result.

</section>

## Keep both endpoints when needed {#practice}

<section class="lesson-check" markdown="1">

### A two-sided rule {#task-a}

**Question:** A statistic $D$ has exact distribution $N(\delta,0.25)$. Test $\delta=0$ against $\delta\ne0$ at 5%, with equal tails. Find the non-rejection interval, then $\beta$ and power at $\delta=0.6$. Use $z_{0.975}=1.959964$, $\Phi(0.759964)=0.776362$ and $\Phi(-3.159964)=0.000789$.

<details markdown="1"><summary>Hint</summary>

Find the interval under the null, then standardise both endpoints under the alternative.

</details>

<details markdown="1"><summary>Solution</summary>

The standard deviation is $0.5$. Non-rejection is $-c\le D\le c$, where $c=0.5(1.959964)=0.979982$.
$$
\beta=\Phi\left(\frac{c-0.6}{0.5}\right)
-\Phi\left(\frac{-c-0.6}{0.5}\right)
=0.776362-0.000789=0.775573,
\qquad \text{power}=0.224427.
$$
Both rejection tails count, even when the specified true difference is positive.

</details>

</section>

<section class="lesson-check" markdown="1">

### An integer decision {#task-b}

**Question:** Ten independent items have common defect probability $p$. Test $p=0.2$ against $p>0.2$ using $X\ge k$, where $X$ counts defects and $k$ is the smallest integer giving null rejection probability at most 0.05. Find the rule, actual size, and exact power at $p=0.5$. Explain why $k$ must not be recalculated at $p=0.5$.

<details markdown="1"><summary>Hint</summary>

Compare adjacent binomial tail cutoffs, then keep the event fixed.

</details>

<details markdown="1"><summary>Solution</summary>

Under the null $X\sim\operatorname{Bin}(10,0.2)$.
$$
P_{0.2}(X\ge4)=0.1208738816,\qquad
P_{0.2}(X\ge5)=0.0327934976.
$$
The upper tail decreases as $k$ increases, so reject for $X\ge5$; actual size is $0.0327934976$, not $0.05$. At $p=0.5$,
$$
\beta=P_{0.5}(X\le4)=\frac{1+10+45+120+210}{1024}
=\frac{193}{512},\qquad
\text{power}=\frac{319}{512}=0.623046875.
$$
Changing $k$ would measure a different test. These are exact binomial probabilities.

</details>

</section>

## Which distribution supplied your probability? {#retry}

If you wrote $1-\alpha$, return to [the two realities](#rule). If you moved the boundary, return to [the worked example](#example) and write the event before its probability. If a two-sided answer used one tail, return to [task A](#task-a).

<section class="lesson-check" markdown="1">

### A different direction {#retry-a}

**Question:** Independent measurements are $N(\mu,36)$ with $n=36$. Test $\mu=100$ against $\mu<100$ at 1%. Find the rule and its power at $\mu=97$. Use $z_{0.01}=-2.326348$ and $\Phi(0.673652)=0.749734$. Which side of the cutoff represents $\beta$?

<details markdown="1"><summary>Hint</summary>

The lower tail rejects; its complement is the missed-change event.

</details>

<details markdown="1"><summary>Solution</summary>

$SE=1$. Reject for $\bar X<97.673652$. Under $\mu=97$, non-rejection is the area to the right:
$$
\beta=1-\Phi(0.673652)=0.250266,\qquad\text{power}=0.749734.
$$
The right-side area uses the 97-centred distribution, not the null distribution.

</details>

</section>

<section class="lesson-check" markdown="1">

### Two boundaries again {#retry-b}

**Question:** A statistic $D$ has exact distribution $N(\delta,1)$. A two-sided 5% test of $\delta=0$ uses equal tails and $z_{0.975}\approx1.96$. Find its non-rejection interval, then $\beta$ and power at $\delta=1.5$. Use $\Phi(0.46)\approx0.677242$ and $\Phi(-3.46)\approx0.000270$. State both rejection events contributing to power.

<details markdown="1"><summary>Hint</summary>

Keep the original lower and upper boundaries when moving to the true distribution.

</details>

<details markdown="1"><summary>Solution</summary>

Non-rejection is $-1.96\le D\le1.96$. At the specified alternative:
$$
\beta=P_{1.5}(-1.96\le D\le1.96)
=\Phi(0.46)-\Phi(-3.46)\approx0.676972,\qquad
\text{power}\approx0.323028.
$$
Power includes $D<-1.96$ and $D>1.96$, both evaluated under $N(1.5,1)$. Keeping only the upper tail misses a small but nonzero part of the rejection probability.

</details>

</section>

If you lost one rejection tail, revisit [both events](#task-a), close the answer, then attempt [the fresh two-boundary retry](#retry-b).

## Return after comparing means {#later-review}

<section class="lesson-check" markdown="1">

### A difference to detect {#later-a}

**Question:** Two independent normal populations have known variances 9 and 16, with sample sizes 9 and 16. A test rejects a null mean difference of zero for a positive difference at 5%. Find the probability of missing a true difference of 3. Use $z_{0.95}=1.644854$ and $\Phi(-0.476467)=0.316871$.

<details markdown="1"><summary>Hint</summary>

First find the standard error of the difference.

</details>

<details markdown="1"><summary>Solution</summary>

$SE=\sqrt{9/9+16/16}=\sqrt2$. The null supplies the cutoff $c=1.644854\sqrt2=2.326175$ approximately. At the true difference,
$$
\beta=\Phi\left(\frac{c-3}{\sqrt2}\right)\approx0.316871,\qquad
\text{power}\approx0.683129.
$$
The null sets the rule; the alternative sets the probability distribution.

</details>

</section>

## Next step {#next-step}

[Compare independent means](/alevel/a2-further-mathematics/statistics/comparing-means/) · [Course route](/alevel/a2-further-mathematics/statistics/)
