---
title: "Estimators: compare rules before choosing"
layout: subjects
mathjax: true
grade: a2
subject: a2-further-mathematics
lang: en
permalink: /alevel/a2-further-mathematics/statistics/estimators/
reading_layout: true
study_page: true
toc_headings: h2
---

How can a rule based on a random sample estimate a fixed population mean, and how can we choose between rules? Here you will calculate bias, compare precision, and justify what happens as the sample grows.

You need expectation, variance, independence and elementary limits. Revisit [squared coefficients and linear combinations](/alevel/as-further-mathematics/linear-combinations/#model) or [probability-weighted moments](/alevel/as-further-mathematics/discrete-uniform/#demonstration) if needed. All examples and tasks are self-written with constructed data; no official marks are assigned.

## A rule before data, a number after data {#meaning}

The population mean μ is a fixed feature of the population, even when we do not know it. A random sample X₁,…,Xₙ has not yet produced its values. A statistic is a rule calculated from that sample and known quantities, with no unknown parameter needed as an input. When we use such a rule to estimate μ, it is an estimator. Once the data arrive, the calculated number is an estimate.

$$
\bar X=\frac1n\sum_{i=1}^nX_i,
\qquad
\bar x=\frac1n\sum_{i=1}^nx_i.
$$

With observed values 2,4,6,8, the estimator is still the rule X̄; its observed estimate is 5. X̄−μ is a random variable useful in theory, but it is not a statistic when μ is unknown: the sample alone cannot calculate it. A sampling distribution describes how a statistic varies over repeated samples of the same size from the same population.

To see that distribution rather than just name it, take two independent Bernoulli observations with success probability 1/4. Each is 0 or 1. The sample mean can take three values. The middle value comes from two different ordered samples.

| Sample | Sample mean | Probability |
| --- | --- | --- |
| (0,0) | 0 | 9/16 |
| (0,1) or (1,0) | 1/2 | 6/16 |
| (1,1) | 1 | 1/16 |

$$
E(\bar X)=0+\frac12\frac6{16}+\frac1{16}=\frac14,
\qquad
\operatorname{Var}(\bar X)=\left(\frac14\frac6{16}+\frac1{16}\right)-\left(\frac14\right)^2=\frac3{32}.
$$

This distribution is about sample means, not the distribution of individual observations. For an iid sample with finite mean μ and variance σ², linearity of expectation and independence give E(X̄)=μ and Var(X̄)=σ²/n. Normality is unnecessary for these two moment statements.

## Target and spread answer different questions {#bias-efficiency}

Bias compares the average of a rule over repeated sampling with the target parameter. Unbiased does not mean every estimate is correct, or even that this particular estimate is close.

$$
\operatorname{Bias}_\theta(T)=E_\theta(T)-\theta.
\qquad
T\text{ is unbiased for }\theta\text{ if }E_\theta(T)=\theta\text{ for every admissible }\theta.
$$

To compare unbiased estimators of the same parameter, smaller variance means less sampling spread. Define the direction before calculating relative efficiency. Here A relative to B has B's variance in the numerator. A value above 1 favours A. Require positive finite variances for this ratio.

$$
\operatorname{Eff}(A\text{ relative to }B)
=\frac{1/\operatorname{Var}(A)}{1/\operatorname{Var}(B)}
=\frac{\operatorname{Var}(B)}{\operatorname{Var}(A)}.
$$

Call a rule “lowest variance among these unbiased candidates” only after specifying the candidates. Comparing two rules does not establish that one is best among every possible estimator. Variance alone also cannot rank a biased rule against an unbiased one without another criterion.

## A complete comparison {#example}

<section class="worked-example" markdown="1">

### Example {#example-a}

**Question:** Let X₁,X₂,X₃,X₄ be independent observations from a population with unknown mean μ and finite variance σ²>0. Define A=(X₁+X₂+X₃+X₄)/4 and C=(X₁+X₂+2X₃+2X₄)/4. Find a constant k such that B=kC is unbiased for μ. Compare A and B using their variances and the efficiency of A relative to B. For observed values 2,4,6,8, find both estimates.

Both rules target μ, so first check their expectations. C has total coefficient 6/4, not 1. Rescale its entire expression before comparing variances.

$$
\begin{aligned}
E(A)&=\frac{4\mu}{4}=\mu,\\
E(C)&=\frac{6\mu}{4}=\frac32\mu,\\
E(kC)&=\frac32k\mu=\mu\quad\text{for every }\mu
\quad\Longrightarrow\quad k=\frac23,\\
B&=\frac{X_1+X_2+2X_3+2X_4}{6}.
\end{aligned}
$$

Independence removes covariance terms. Each coefficient is squared in a variance; the denominator is squared too.

$$
\begin{aligned}
\operatorname{Var}(A)&=\frac{1+1+1+1}{16}\sigma^2=\frac14\sigma^2,\\
\operatorname{Var}(B)&=\frac{1+1+4+4}{36}\sigma^2=\frac5{18}\sigma^2,\\
\operatorname{Var}(B)-\operatorname{Var}(A)&=\frac1{36}\sigma^2>0,\\
\operatorname{Eff}(A\text{ relative to }B)&=\frac{5/18}{1/4}=\frac{10}{9},\\
a&=5,\qquad b=\frac{2+4+12+16}{6}=\frac{17}{3}.
\end{aligned}
$$

A has the smaller variance among these two unbiased candidates. We do not know μ, so the observed estimates do not tell us which happened to be closer this time. The efficiency ratio agrees with the direct variance comparison.

</section>

## What changes as the sample grows? {#consistency}

Consistency is a property of a sequence of rules Tₙ, not a label attached to one observed number. For every fixed allowable θ and every ε>0, the probability of an error exceeding ε must tend to zero.

$$
T_n\xrightarrow{P}\theta
\quad\Longleftrightarrow\quad
P_\theta(\lvert T_n-\theta\rvert>\varepsilon)\longrightarrow0.
$$

A useful sufficient route is bias→0 and variance→0. The following inequality shows why: the expected squared error controls the chance of a large error. This is a justification, not an additional memorisation task.

$$
P_\theta(\lvert T_n-\theta\rvert>\varepsilon)
\leq\frac{E_\theta[(T_n-\theta)^2]}{\varepsilon^2}
=\frac{\operatorname{Var}_\theta(T_n)+[E_\theta(T_n)-\theta]^2}{\varepsilon^2}.
$$

For X̄, the bias is zero and σ²/n→0, so X̄ is consistent for μ. In contrast, X̄+1 has the same shrinking variance but concentrates on μ+1. It is not consistent for μ. An estimator may be biased at each finite n and still be consistent if its bias disappears.

## Combining estimators {#combinations}

Suppose U and V are independent unbiased estimators of the same mean, with variances vᵤ and vᵥ. A weighted combination stays unbiased when its coefficients add to 1. Independence is needed for the simple variance formula, not for the expectation formula.

$$
\begin{aligned}
W&=aU+(1-a)V,\qquad E(W)=\mu,\\
\operatorname{Var}(W)&=a^2v_u+(1-a)^2v_v\\
&=(v_u+v_v)\left(a-\frac{v_v}{v_u+v_v}\right)^2
+\frac{v_uv_v}{v_u+v_v}.
\end{aligned}
$$

For positive variances, this family has minimum variance when a=vᵥ/(vᵤ+vᵥ). The more precise rule receives more weight. If U and V are sample means of independent samples from the same population, their variances are σ²/nᵤ and σ²/nᵥ, so their weights become nᵤ/(nᵤ+nᵥ) and nᵥ/(nᵤ+nᵥ). This pooling result concerns means; it is not a licence to average sample variances with the same weights.

If two statistics share observations, inspect the overlap. In general the variance above also contains 2a(1−a)Cov(U,V). Rewriting the combination in terms of the original independent observations often makes the calculation clearer.

## Try before opening help {#practice}

Keep hints and solutions closed first. Note any help you use.

<section class="lesson-check" markdown="1">

### Task A {#task-a}

**Question:** Independent observations U₁,…,Uₙ have mean θ/3 and variance θ²/18, where θ>0. Let R=ΣUᵢ. Show that R is biased for θ unless n=3. Find cₙ such that cₙR is unbiased for θ, and determine whether this sequence is consistent. For the observations 1,2,4, state the estimator and its estimate. Explain why an estimate is not a sampling distribution.

<details markdown="1"><summary>Hint</summary>

Begin with E(R). Once corrected, square cₙ in the variance calculation.

</details>

<details markdown="1"><summary>Solution</summary>

$$
E(R)=\frac{n\theta}{3},\quad
\operatorname{Bias}_\theta(R)=\left(\frac n3-1\right)\theta,
\quad c_n=\frac3n,\quad
\operatorname{Var}(c_nR)=\frac9{n^2}\frac{n\theta^2}{18}=\frac{\theta^2}{2n}\to0.
$$

For θ>0 the bias vanishes exactly when n=3. The corrected estimator is unbiased for every n and has variance tending to zero for fixed θ, hence is consistent. For n=3 it is (3/3)ΣUᵢ, and its estimate is 7. A single calculated number is one realisation; the sampling distribution assigns probabilities to all possible values over repeated samples. Here θ is the target, not the mean θ/3 of one observation.

</details>

</section>

<section class="lesson-check" markdown="1">

### Task B {#task-b}

**Question:** U and V are means of independent samples of sizes 4 and 12 from the same population, whose mean is μ and variance is σ²>0. Consider Wₐ=aU+(1−a)V for real a. Find its mean and variance and determine the value of a giving the smallest variance within this family. Compare that choice with (U+V)/2 by relative efficiency, stating the direction. If u=10 and v=14, find the chosen estimate.

<details markdown="1"><summary>Hint</summary>

Substitute the variances of the sample means and complete a square in a.

</details>

<details markdown="1"><summary>Solution</summary>

$$
\begin{aligned}
E(W_a)&=\mu,\\
\operatorname{Var}(W_a)&=\sigma^2\left(\frac{a^2}{4}+\frac{(1-a)^2}{12}\right)
=\sigma^2\left[\frac13\left(a-\frac14\right)^2+\frac1{16}\right].
\end{aligned}
$$

Thus a=1/4 and the minimum is σ²/16. The equal-weight rule has variance σ²/12. Efficiency of the chosen rule relative to the equal-weight rule is (1/12)/(1/16)=4/3. The estimate is (1/4)10+(3/4)14=13. The minimum is proved only within the stated family; equal averaging wastes the additional precision in the larger sample.

</details>

</section>

<section class="lesson-check" markdown="1">

### Task C {#task-c}

**Question:** For iid observations with mean μ and finite variance σ²>0, consider Pₙ=X̄+1/n and Qₙ=X̄+1. Determine the bias of each and whether each is consistent for μ. A student says, “Any unbiased estimator is consistent.” Disprove this using Hₙ=X₁ and the concrete case Xᵢ∼Bernoulli(1/2). Give a probability that does not tend to zero.

<details markdown="1"><summary>Hint</summary>

For Pₙ and Qₙ inspect both target and spread. For Hₙ choose ε=1/4.

</details>

<details markdown="1"><summary>Solution</summary>

$$
\operatorname{Bias}(P_n)=\frac1n,\quad
\operatorname{Bias}(Q_n)=1,\quad
\operatorname{Var}(P_n)=\operatorname{Var}(Q_n)=\frac{\sigma^2}{n}.
$$

Pₙ is consistent: bias and variance both tend to zero. Qₙ tends in probability to μ+1, so is not consistent for μ. More explicitly, for n sufficiently large, Chebyshev gives P(|X̄−μ|<1/2)→1; on that event |Qₙ−μ|>1/2. Hₙ is unbiased but ignores all new data. At μ=1/2, P(|Hₙ−1/2|>1/4)=1 for every n. That disproves the claim; unbiasedness alone is a statement about expectation, not improvement with n.

</details>

</section>

<section class="lesson-check" markdown="1">

### Task D {#task-d}

**Question:** X₁,X₂,X₃ are independent with mean μ and variance 8. Let U=(X₁+X₂)/2, V=(X₂+X₃)/2 and W=(U+V)/2. A student calculates Var(W)=2 by treating U and V as independent. Find the correct mean and variance of W. Compare W with Z=(X₁+X₂+X₃)/3 as estimators of μ. For observed values 1,2,9, calculate w and z and explain why their difference does not identify the better estimate on this occasion.

<details markdown="1"><summary>Hint</summary>

Rewrite W in terms of X₁,X₂,X₃ before calculating its variance.

</details>

<details markdown="1"><summary>Solution</summary>

$$
W=\frac{X_1+2X_2+X_3}{4},\quad E(W)=\mu,\quad
\operatorname{Var}(W)=\frac{8(1+4+1)}{16}=3;
\qquad E(Z)=\mu,\quad\operatorname{Var}(Z)=\frac83.
$$

U and V share X₂, so Cov(U,V)=8/4=2, which gives the missing variance term. Z has smaller variance among these two unbiased candidates. The observed values give w=14/4=3.5 and z=12/3=4. Since μ is unknown, these two numbers cannot determine which is nearer μ this time.

</details>

</section>

<section class="lesson-check" markdown="1">

### Task E {#task-e}

**Question:** X₁,X₂,X₃ are independent Bernoulli observations with unknown success probability p, where $0<p<1$. Which of X̄, X̄−p and p are statistics, and why? To inspect one sampling distribution, consider the fixed case p=1/2. List every possible value of X̄ and its probability, then find its expectation and variance. For the observed sample (0,1,1), give the estimate of p using X̄. Explain why that estimate need not equal the parameter.

<details markdown="1"><summary>Hint</summary>

Count how many of the three observations are 1; more than one ordered sample can give the same mean.

</details>

<details markdown="1"><summary>Solution</summary>

X̄ is a statistic because the observations determine it. X̄−p is random but is not a statistic when p is unknown, since evaluating it requires p. The population parameter p is fixed, not a sample statistic. At p=1/2, all eight ordered samples are equally likely; grouping by the number of 1s gives this sampling distribution.

| Value of X̄ | 0 | 1/3 | 2/3 | 1 |
| --- | --- | --- | --- | --- |
| Probability | 1/8 | 3/8 | 3/8 | 1/8 |

$$
E(\bar X)=\frac13\frac38+\frac23\frac38+\frac18=\frac12,
\qquad
E(\bar X^2)=\frac19\frac38+\frac49\frac38+\frac18=\frac13,
\qquad
\operatorname{Var}(\bar X)=\frac13-\frac14=\frac1{12}.
$$

For (0,1,1), the estimate is 2/3. That is one realisation, not the whole sampling distribution. At p=1/2 this estimate is not exact, although the estimator is unbiased. The probabilities sum to 1; Var(X̄)=p(1−p)/3=1/12 checks the result.

</details>

</section>

## Repair the gap and try again {#retry}

<section class="lesson-check" markdown="1">

### Task R {#retry-a}

**Question:** For n≥2 iid observations with mean μ and finite variance σ²>0, define Tₙ=(3X₁+X₂+⋯+Xₙ)/(n+2). Determine whether Tₙ is unbiased and consistent for μ. Compare its variance with that of X̄ for each n≥2. Explain both the squared coefficient and the scope of your comparison.

<details markdown="1"><summary>Hint</summary>

There are n−1 coefficients equal to 1 and one coefficient equal to 3.

</details>

<details markdown="1"><summary>Solution</summary>

$$
E(T_n)=\frac{(3+n-1)\mu}{n+2}=\mu,\quad
\operatorname{Var}(T_n)=\frac{n+8}{(n+2)^2}\sigma^2\longrightarrow0,
$$

$$
\operatorname{Var}(T_n)-\operatorname{Var}(\bar X)
=\frac{4(n-1)\sigma^2}{n(n+2)^2}>0\qquad(n\geq2).
$$

Tₙ is unbiased and consistent, but has larger variance than X̄ for every allowed n. The coefficient 3 multiplies X₁, so it becomes 9 in the variance. This comparison concerns these two rules; consistency does not imply the smallest finite-sample variance.

</details>

</section>

If A uses the wrong target, revisit [the rule and the parameter](#meaning). If B/D has unsquared weights, revisit [the complete calculation](#example). If C uses variance→0 alone, revisit [consistency](#consistency). For a reversed efficiency ratio, check [the numerator](#bias-efficiency). If E misses a probability, reconstruct the ordered samples and group equal means. Close the answers before [trying again](#retry-a).

<section class="lesson-check" markdown="1">

### A new sampling rule {#retry-b}

**Question:** Two independent Bernoulli observations have unknown success probability $p$, with $0<p<1$. Let $S=X_1+X_2$. Decide whether $S/2$ and $S-2p$ are statistics. At the fixed case $p=1/3$, construct the sampling distribution of $S/2$ and calculate its expectation and variance. For the sample $(1,0)$, give the estimate using $S/2$ and distinguish it from the parameter.

<details markdown="1"><summary>Hint</summary>

List the four ordered samples, then group samples with the same mean.

</details>

<details markdown="1"><summary>Solution</summary>

$S/2$ is a statistic: the data alone determine it. $S-2p$ cannot be calculated without the unknown $p$. At $p=1/3$:

| Value of $S/2$ | $0$ | $1/2$ | $1$ |
| --- | --- | --- | --- |
| Probability | $4/9$ | $4/9$ | $1/9$ |

The two middle ordered samples have probabilities $2/9$ each.
$$
E(S/2)=\frac12\frac49+\frac19=\frac13,\qquad
E[(S/2)^2]=\frac14\frac49+\frac19=\frac29,\qquad
\operatorname{Var}(S/2)=\frac19.
$$
The realised estimate is $1/2$, while $p$ is the fixed population probability. One estimate need not equal the parameter even when the rule is unbiased.

</details>

</section>

For a sampling-distribution error, return to [the small enumeration](#meaning), then construct the new distribution in [retry B](#retry-b).

## Return after another topic {#later-review}

Do this later, with the earlier solutions closed.

<section class="lesson-check" markdown="1">

### Later task {#later-task}

**Question:** Two independent random samples from the same population have sizes 5 and 15 and sample means 8 and 12. The population mean is θ and its finite variance is σ²>0. Construct the mean of all 20 observations as an estimator, find its expectation, variance and realised estimate, and compare its relative efficiency with the equal average of the two sample means. Identify a parameter, an estimator and an estimate in your answer. State what independence allows you to do.

<details markdown="1"><summary>Hint</summary>

Recover the two sample totals before combining them.

</details>

<details markdown="1"><summary>Solution</summary>

$$
T=\frac{5\bar X_5+15\bar Y_{15}}{20},\quad E(T)=\theta,
\quad\operatorname{Var}(T)=\frac{25(\sigma^2/5)+225(\sigma^2/15)}{400}=\frac{\sigma^2}{20},
\quad t=\frac{40+180}{20}=11.
$$

R=(X̄₅+Ȳ₁₅)/2 is unbiased with Var(R)=σ²/15, so efficiency of T relative to R is (1/15)/(1/20)=4/3. θ is the parameter, T is the estimator, and 11 is its realised estimate. Independence removes covariance from the variance calculation; expectation is linear without it. No claim is made that 11 is definitely closer to θ than the equal-average estimate 10.

</details>

</section>

## Next step {#next-step}

A good point estimator still gives only one number. Next ask how sampling variation determines an interval for μ.

[Confidence intervals](/alevel/a2-further-mathematics/statistics/confidence-intervals/) · [Course route](/alevel/a2-further-mathematics/statistics/)
