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

A test is a rule chosen before seeing the sample. Under a true null hypothesis, rejecting is a Type I error. Under a specified false-null value, failing to reject is a Type II error. We will keep the decision rule fixed and change the distribution used to calculate its probability. Except for the labelled teaching adaptation, examples and tasks are self-written.

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

## Given the power, find the mean {#inverse-problems}

Previously the true mean was given and you found a probability. Now work backwards. The null still sets the rejection line; the unknown is the centre of the distribution used for the probability. Revisit [inverse normal problems](/alevel/a2-mathematics/statistics/normal-distribution/#inverse) if needed.

<section class="worked-example" markdown="1">

### Worked example: where is the mean? {#inverse-example}

**Question:** Independent observations have distribution $N(\mu,16)$, where the second parameter is variance. With a random sample of size 16, test $H_0:\mu=50$ against $H_1:\mu<50$ at 5%. At the true mean $m<50$, the power is one-third of the Type II error probability. Find $m$. Use $z_{0.05}=-1.644854$ and $z_{0.25}=-0.674490$.

This is a self-written demonstration. First convert detecting and missing the change into complementary probabilities. Use p for power, then set the line under the null:

$$p=\text{power},\qquad p=\frac{1-p}{3}.$$

$$p=\frac14,\qquad\beta=\frac34.$$

$$SE=\frac4{\sqrt{16}}=1.$$

$$c=50-1.644854=48.355146.$$

$$\text{Reject }H_0\text{ when }\bar X<c.$$

Keep that line. At the true mean m, change only the sampling distribution. Detecting the change still means landing to the left:

$$\bar X\sim N(m,1),\qquad
P_m(\bar X<c)=\frac14.$$

$$\begin{aligned}
\Phi(c-m)&=0.25,\\
c-m&=-0.674490.
\end{aligned}$$

$$\begin{aligned}
m&=48.355146+0.674490\\
&\approx49.030.
\end{aligned}$$

Check that the answer is in the alternative direction. A lower power would need the centre farther right, leaving less probability to the left of the fixed line. The true mean would therefore be larger; the line would not move.

</section>

<section class="lesson-check" markdown="1">

### A new problem to solve {#task-inverse}

**Question:** Independent observations have distribution $N(\mu,36)$, where the second parameter is variance. A random sample of size 36 tests $H_0:\mu=100$ against $H_1:\mu>100$ at 5%. At the true mean, the Type II error probability is twice the power. Find the true mean, showing the fixed rule and probability equation. If this test has a smaller power at another mean in the alternative, is that mean greater or smaller? Explain. Use $z_{0.95}=1.644854$ and $z_{2/3}=0.430727$.

<details markdown="1"><summary>Hint</summary>

Relate detecting and missing first, then write the two sampling distributions.

</details>

<details markdown="1"><summary>Solution and check</summary>

Use p for power.

$$\beta=2p,\qquad \beta+p=1.$$

$$p=\frac13,\qquad\beta=\frac23.$$

$$SE=\frac6{\sqrt{36}}=1.$$

$$c=100+1.644854=101.644854.$$

$$\begin{aligned}
P_\mu(\bar X\le c)&=\frac23,\\
\Phi(c-\mu)&=\frac23.
\end{aligned}$$

$$c-\mu=0.430727,\qquad\mu\approx101.214.$$

The null gives an upper-tail rule. Under the true mean, the area on the left is non-rejection, so use the quantile for beta. A smaller alternative mean moves the distribution left, reducing its probability to the right of the fixed line and hence its power. Saying only that beta increases does not explain the mechanism. Revisit [the fixed-line demonstration](#inverse-example), close the answer and try [a new inverse problem](#retry-inverse).

</details>

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

## Two integer boundaries {#discrete-boundaries}

First find the integers that reject under the null, then change the true p to calculate power. These small counts use exact binomial probabilities, rather than the normal approximation used in the textbook large-sample example.

<section class="worked-example" markdown="1">

### Worked example: try adjacent integers {#discrete-example}

**Question:** A count $X$ has distribution $\operatorname{Bin}(20,p)$. Test $H_0:p=0.2$ against $H_1:p\ne0.2$ at a nominal 5% level. Each rejection tail must have null probability at most 0.025 and must be as large as that permits. Find the rule and actual size, then the Type II error probability and power at $p=0.15$. Use exact binomial probabilities.

This teaching adaptation of June 2025 FM04 Q5 simplifies the context, specifies the tail budgets and adds actual size. It has no official marks.

Each tail may contain at most 0.025 probability, but the count is an integer. Try a boundary and its adjacent integer to see whether the rejection region can be enlarged:

| Event under $H_0$ | Probability |
| --- | --- |
| $X\le0$ | 0.011529 |
| $X\le1$ | 0.069175 |
| $X\ge9$ | 0.009982 |
| $X\ge8$ | 0.032143 |

$$\begin{aligned}
R&=\{X=0\}\cup\{X\ge9\},\\
A&=\{1\le X\le8\}.
\end{aligned}$$

$$\begin{aligned}
\text{actual size}&=P_{0.2}(R)\\
&\approx0.011529+0.009982\\
&=0.021511.
\end{aligned}$$

On the left, 0 can reject but adding 1 exceeds the budget. On the right, starting at 9 works but starting at 8 does not. Thus 1 and 8 are the non-rejection endpoints. Actual size adds both null rejection probabilities; the nominal 5% need not be used up.

Keep both endpoints and change only the true distribution:

$$\begin{aligned}
\beta&=P_{0.15}(1\le X\le8)\\
&=P_{0.15}(X\le8)-P_{0.15}(X\le0)\\
&\approx0.959912.
\end{aligned}$$

$$\begin{aligned}
\text{power}&=P_{0.15}(X=0)+P_{0.15}(X\ge9)\\
&=1-\beta\approx0.040088.
\end{aligned}$$

Subtract the probability at 0 and below to retain the event beginning at 1. Although the true p is lower, the original test remains two-sided: both rejection tails contribute to power.

</section>

<section class="lesson-check" markdown="1">

### A different rule {#task-discrete}

**Question:** For $X\sim\operatorname{Bin}(12,p)$, test $H_0:p=0.3$ against $H_1:p\ne0.3$ at a nominal 10% level. Each rejection tail must have null probability at most 0.05 and must be as large as that permits. Find the non-rejection region, justify both endpoints, and calculate the actual size. At $p=0.5$, find the Type II error probability and power. State the events used.

<details markdown="1"><summary>Hint</summary>

Compare adjacent integers in each tail before keeping the event fixed.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$\begin{aligned}
P_{0.3}(X\le0)&\approx0.013841,\\
P_{0.3}(X\le1)&\approx0.085025,\\
P_{0.3}(X\ge7)&\approx0.038601,\\
P_{0.3}(X\ge6)&\approx0.117849.
\end{aligned}$$

$$\begin{aligned}
R&=\{X=0\}\cup\{X\ge7\},\\
A&=\{1\le X\le6\}.
\end{aligned}$$

$$\begin{aligned}
\text{actual size}&\approx0.013841+0.038601\\
&=0.052442.
\end{aligned}$$

$$\begin{aligned}
\beta&=P_{0.5}(1\le X\le6)\\
&=\frac{\displaystyle\sum_{j=1}^{6}\binom{12}{j}}{2^{12}}\\
&=\frac{2509}{4096}.
\end{aligned}$$

$$\begin{aligned}
\text{power}&=P_{0.5}(X=0)+P_{0.5}(X\ge7)\\
&=\frac{1587}{4096}\approx0.387451.
\end{aligned}$$

The adjacent comparisons show why neither rejection boundary can be enlarged. Non-rejection includes both 1 and 6; do not lose them when taking a complement. Actual size uses the null, while beta and power use the specified true p. If you treated each tail as exactly 0.05, return to [the integer demonstration](#discrete-example), then assess [a new report](#retry-discrete).

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

<section class="lesson-check" markdown="1">

### Check the original decision {#retry-inverse}

**Question:** A statistic $D$ has exact distribution $N(\delta,2)$, where 2 is variance. A 2.5% test of $H_0:\delta=0$ against $H_1:\delta<0$ rejects when $D/\sqrt2<-1.959964$. At the true value, the Type II error probability is three times the power. Find $\delta$. An analyst instead uses $(D-\delta)/\sqrt2<-1.959964$ as the decision rule when calculating power. Does that evaluate the original test? Explain. Use $z_{0.25}=-0.674490$.

<details markdown="1"><summary>Hint</summary>

Restore the given rule as an inequality in D, then evaluate that event under the true distribution.

</details>

<details markdown="1"><summary>Solution and check</summary>

Use p for power.

$$p=\frac14,\qquad\beta=\frac34.$$

$$c=-1.959964\sqrt2.$$

$$\begin{aligned}
P_\delta(D<c)&=\frac14,\\
\frac{c-\delta}{\sqrt2}&=-0.674490.
\end{aligned}$$

$$\begin{aligned}
\delta&=c+0.674490\sqrt2\\
&\approx-1.818.
\end{aligned}$$

The original rule uses $D<c$. The incorrect version instead uses $D<\delta-1.959964\sqrt2$, moving the line with the true mean; its rejection probability stays about 0.025, describing a different test. You may standardise using the true mean, but must transform the original c at the same time. Revisit [the fixed boundary](#example) and [the inverse demonstration](#inverse-example) if needed.

</details>

</section>

<section class="lesson-check" markdown="1">

### Assess a report {#retry-discrete}

**Question:** For $X\sim\operatorname{Bin}(10,p)$, a nominal 10% test of $H_0:p=0.4$ against $H_1:p\ne0.4$ requires each rejection tail to have null probability at most 0.05 and to be as large as permitted. A report proposes rejection for $X\le1$ or $X\ge7$, claiming that both tails meet the requirement. Assess the claim, give the corrected rule with boundary evidence, and find its actual size and power at $p=0.6$.

<details markdown="1"><summary>Hint</summary>

Check each tail budget and show that the adjacent boundary cannot enlarge it.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$\begin{aligned}
P_{0.4}(X\le1)&=0.0463574016,\\
P_{0.4}(X\le2)&=0.1672897536,\\
P_{0.4}(X\ge7)&=0.0547618816,\\
P_{0.4}(X\ge8)&=0.0122945536.
\end{aligned}$$

$$\begin{aligned}
R&=\{X\le1\}\cup\{X\ge8\},\\
A&=\{2\le X\le7\}.
\end{aligned}$$

$$\begin{aligned}
\text{actual size}&=0.0463574016+0.0122945536\\
&=0.0586519552.
\end{aligned}$$

$$\begin{aligned}
\beta&=P_{0.6}(2\le X\le7)\\
&=0.8310325248,\\
\text{power}&=1-\beta=0.1689674752.
\end{aligned}$$

The proposed upper tail exceeds its budget and must start at 8. The lower tail works and cannot be enlarged. Calculate the corrected, unchanged event at the alternative, rather than continuing with the report’s wrong rule. If a tail is missing, write both rejection events before returning to [the demonstration](#discrete-example).

</details>

</section>

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

<section class="lesson-check" markdown="1">

### Return to two samples {#later-inverse}

**Question:** Independent random samples of sizes 9 and 16 come from independent normal populations $A$ and $B$, with known population variances 9 and 16 respectively. A 5% test examines $H_0:\mu_A=\mu_B$ against $H_1:\mu_A>\mu_B$. When the true value of $\mu_B$ is 40, the probability of missing the difference is four times the probability of detecting it. Find the true value of $\mu_A$, explaining how the rule is set. If $\mu_B$ then decreases by 1 while everything else stays fixed, does the power rise or fall? Explain. Use $z_{0.95}=1.644854$ and $z_{0.8}=0.841621$.

<details markdown="1"><summary>Hint</summary>

Build the distribution of the independent sample-mean difference before choosing the rejection event.

</details>

<details markdown="1"><summary>Solution and check</summary>

Use p for power.

$$D=\bar X_A-\bar X_B,\qquad\delta=\mu_A-\mu_B.$$

$$\operatorname{Var}(D)=\frac99+\frac{16}{16}=2.$$

$$D\sim N(\delta,2),\qquad c=1.644854\sqrt2.$$

$$\text{Reject when }D>c.$$

$$\beta=4p,\qquad p+\beta=1.$$

$$p=\frac15,\qquad\beta=\frac45.$$

$$\Phi\left(\frac{c-\delta}{\sqrt2}\right)=0.8.$$

$$\begin{aligned}
\delta&=c-0.841621\sqrt2\\
&\approx1.136.
\end{aligned}$$

$$\mu_A=40+\delta\approx41.136.$$

Lowering the true B mean while A stays fixed increases the mean difference and moves its distribution right. More probability lies beyond the fixed upper line, so power rises. The test still uses a null difference of zero; it does not move with the true B mean. Revisit [mean-difference conditions](/alevel/a2-further-mathematics/statistics/comparing-means/#conditions) for a model error, or [the earlier new problem](#task-inverse) for an inverse-probability error.

</details>

</section>

## Next step {#next-step}

[Compare independent means](/alevel/a2-further-mathematics/statistics/comparing-means/) · [Course route](/alevel/a2-further-mathematics/statistics/)


<details class="lesson-notes" markdown="1"><summary>Sources and learning scope</summary>

Textbook: Oxford University Press (2017), International A Level Further Mathematics with Statistics, section 32.1, printed pp. 415–418. Scope: the power item of 9665 v5.2 FS2.4, for a specified alternative; no full power function is required. The inverse example is informed by June 2026 FM04 Q10 and its MS pp. 16–17, Version 1.0 Final. The discrete adaptation follows June 2025 Q5 and its MS p. 9, Version 1.0 Final. Tail budgets and model conditions are stated in each new question; this is not a universal convention for all exact two-sided tests.

[9665 Specification](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf) · [June 2026 QP](https://drive.google.com/file/d/1tL6Bbjx9_3rs3oq0CxUetH0DBTvkE43r/view) · [June 2025 QP](https://drive.google.com/file/d/1FTxQ-X2OSM6MRZHAAKbTk8-Gp1Vqx7z4/view) · [June 2025 MS](https://drive.google.com/file/d/1VRTlOTfUIP2agmgWRMxOBJLAUS1AwvQA/view)

</details>

{% include exam_topic_practice.html %}
