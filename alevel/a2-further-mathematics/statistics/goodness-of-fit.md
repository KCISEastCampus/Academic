---
title: "Goodness of fit: compare counts with a model"
layout: subjects
mathjax: true
grade: a2
subject: a2-further-mathematics
lang: en
permalink: /alevel/a2-further-mathematics/statistics/goodness-of-fit/
reading_layout: true
study_page: true
toc_headings: h2
---

A model predicts probabilities; a sample supplies counts. We will check whether those counts are consistent with a proposed distribution. All examples and tasks are self-written and use constructed data, with no official marks.

Before starting, revisit [Poisson probabilities](/alevel/a2-mathematics/statistics/poisson-distribution/#probability), [density areas](/alevel/a2-mathematics/statistics/continuous-random-variables/#density) and [the exponential mean](/alevel/a2-mathematics/statistics/exponential-distribution/#moments) as needed.

## From probabilities to expected counts {#expected}

A goodness-of-fit test concerns one random variable and a distributional model. Each independently sampled observation enters exactly one category. The categories must be mutually exclusive and cover all possible outcomes, including a model tail with no observed values.

$$
E_i=np_i,\qquad \sum_i p_i=1,\qquad \sum_i E_i=\sum_i O_i=n.
$$

$$
p_i=\sum_{x\in C_i}P(X=x)\quad\text{(discrete)},\qquad
p_i=\int_{a_i}^{b_i}f(x)\,dx\quad\text{(continuous)}.
$$

For a continuous variable, integrate the density over each interval; density height alone is not a probability. Use limits at infinite endpoints. A normal model needs both unbounded tails; an exponential model needs its upper tail.

## Pool categories before counting freedom {#pooling}

Every final expected frequency must be strictly greater than 5 for this qualification. Exactly 5 fails. This checks expected, not observed, counts. Combine adjacent, meaningful categories when necessary, adding both observed and expected counts; check again. Ordered values should remain in contiguous groups. Choose grouping from meaningful categories and the expected table, not to obtain a preferred decision.

$$
Q=\sum_{i=1}^{K}\frac{(O_i-E_i)^2}{E_i},\qquad
\nu=K-1-p,\qquad P(\chi^2_\nu\le c_\nu(u))=u.
$$

Here K is the number of categories after pooling, and p counts independent population parameters fitted from these data. The total-frequency constraint removes one degree of freedom. A supplied sample mean is still fitted information. A genuinely pre-specified parameter removes no additional freedom. Fitting both a normal mean and variance removes two. At least one degree of freedom must remain.

State the null as the distribution for the named variable and the alternative as failure of that model. With a fitted parameter, state the family first and then estimate the parameter; do not pretend that its fitted value was known in advance. Large discrepancy opposes fit, so use an upper-tail comparison. Non-rejection is not proof that the model or its underlying mechanism is true.

## Two complete examples {#examples}

<section class="worked-example" markdown="1">

### A complete example {#example-a}

**Question:** Counts $X$ in 100 independent equal observation periods have frequencies $(40,32,18,8,2,0)$ for $(0,1,2,3,4,\ge5)$. Estimate a Poisson parameter and assess the Poisson family at 5%, using $c_2(0.95)=5.991465$.

$$
H_0:X\sim\operatorname{Poisson}(\lambda)\text{ for some }\lambda>0,
\qquad H_1:X\text{ does not follow a Poisson distribution}.
$$

$$
\hat\lambda=\bar x=\frac{32+2(18)+3(8)+4(2)}{100}=1,\qquad
P(X=x)=\frac{e^{-1}}{x!}.
$$

| Class | O | E before pooling |
| --- | --- | --- |
| 0 | 40 | 36.787944 |
| 1 | 32 | 36.787944 |
| 2 | 18 | 18.393972 |
| 3 | 8 | 6.131324 |
| 4 | 2 | 1.532831 |
| $\ge5$ | 0 | 0.365985 |

$$
E_{\ge5}=100\left[1-e^{-1}\left(1+1+\frac12+\frac16+\frac1{24}\right)\right],
\quad E_{\ge4}=1.898816<5,
\quad E_{\ge3}=100\left[1-e^{-1}\left(1+1+\frac12\right)\right]=8.030140.
$$

| Final class | O | E | Contribution |
| --- | --- | --- | --- |
| 0 | 40 | 36.787944 | 0.280453 |
| 1 | 32 | 36.787944 | 0.623150 |
| 2 | 18 | 18.393972 | 0.008438 |
| $\ge3$ | 10 | 8.030140 | 0.483223 |

$$
\sum O=\sum E=100,\quad Q=1.395265,\quad\nu=4-1-1=2,\quad1.395265<5.991465.
$$

Combining 4 with the upper tail is still insufficient, so include adjacent 3. All four final expected counts exceed 5. Do not reject: insufficient evidence against a Poisson model for these counts. One parameter was estimated. The empty observed upper tail does not have zero model probability. Its zero count makes the exact sample mean recoverable here; a nonempty open-ended group would need its actual observations or a separate raw total.

</section>

<section class="worked-example" markdown="1">

### A complete example {#example-b}

**Question:** The pre-specified waiting-time density is $f(t)=e^{-t}$ for $t\ge0$, zero otherwise. For 80 independent observations, the counts in $[0,\ln2)$, $[\ln2,\ln4)$, $[\ln4,\ln8)$ and $[\ln8,\infty)$ are $(36,18,14,12)$. Derive class probabilities and test at 5%, using $c_3(0.95)=7.814728$.

$$
H_0:T\text{ has the specified density},\qquad H_1:T\text{ does not have it}.
$$

$$
\begin{aligned}
p_1&=\int_0^{\ln2}e^{-t}\,dt=[-e^{-t}]_0^{\ln2}=1-\tfrac12=\tfrac12,\\
p_2&=[-e^{-t}]_{\ln2}^{\ln4}=\tfrac12-\tfrac14=\tfrac14,\\
p_3&=[-e^{-t}]_{\ln4}^{\ln8}=\tfrac14-\tfrac18=\tfrac18,\\
p_4&=\lim_{b\to\infty}[-e^{-t}]_{\ln8}^b=\tfrac18.
\end{aligned}
$$

$$
E=(40,20,10,10),\quad
Q=\frac{16}{40}+\frac4{20}+\frac{16}{10}+\frac4{10}=2.6,
\quad\nu=4-1-0=3,\quad2.6<7.814728.
$$

The probabilities sum to one; integrating the density from zero to infinity also gives one. All expected counts exceed 5. Do not reject: insufficient evidence against the specified waiting-time model. No parameter was fitted. Infinite interval length does not make the final probability zero: the upper-limit exponential term tends to zero.

</section>

## Choose, calculate and diagnose {#practice}

<section class="lesson-check" markdown="1">

### Try it {#task-a}

**Question:** Independent observations of the number of successes in two trials have frequencies $(32,36,12)$ for $X=(0,1,2)$. At 5%, assess a Binomial$(2,p)$ family with estimated $p$, then the pre-specified Binomial$(2,0.5)$ model. Explain the different questions. Use $c_1(0.95)=3.841459$ and $c_2(0.95)=5.991465$.

<details markdown="1">

<summary>Hint</summary>

Use the binomial mean to estimate the parameter, then rebuild the expected table for the fixed model.

</details>

<details markdown="1">

<summary>Solution</summary>

$$
H_0:X\sim\operatorname{Bin}(2,p)\text{ for some }p,\quad H_1:X\text{ is not in this family}.
$$

$$
\bar x=\frac{36+2(12)}{80}=0.75,\quad\hat p=0.375,\quad
E=(31.25,37.5,11.25).
$$

$$
Q=\frac{0.75^2}{31.25}+\frac{(-1.5)^2}{37.5}+\frac{0.75^2}{11.25}
=0.018+0.060+0.050=0.128,
\quad\nu=3-1-1=1,\quad0.128<3.841459.
$$

$$
H_0:X\sim\operatorname{Bin}(2,0.5),\quad H_1:X\text{ does not follow this specified model};
\quad E=(20,40,20),\quad Q=\frac{144}{20}+\frac{16}{40}+\frac{64}{20}=10.8,
\quad\nu=2,\quad10.8>5.991465.
$$

All expected counts exceed 5 in both tests. Do not reject the fitted family, but reject the specified equal-success-probability model. The data can be compatible with some binomial model while opposing this particular one. Both the expected table and degrees of freedom change; it is not enough to change only a cutoff.

</details>

</section>

<section class="lesson-check" markdown="1">

### Try it {#task-b}

**Question:** One hundred independent positive waiting times have raw total 100 minutes and counts $(45,27,15,13)$ in the four intervals of Example B. Test an exponential family at 5%, estimating its rate from $E(T)=1/\lambda$ and deriving interval probabilities by integration. Use $c_2(0.95)=5.991465$.

<details markdown="1">

<summary>Hint</summary>

The raw total supplies the mean; grouped midpoints would not give its exact value.

</details>

<details markdown="1">

<summary>Solution</summary>

$$
H_0:T\sim\operatorname{Exp}(\lambda)\text{ for some }\lambda>0,\quad H_1:T\text{ is not exponential};
\quad\bar t=1,\quad\hat\lambda=1\ \mathrm{min}^{-1}.
$$

$$
P(a\le T<b)=\int_a^b\hat\lambda e^{-\hat\lambda t}\,dt
=[-e^{-\hat\lambda t}]_a^b=e^{-\hat\lambda a}-e^{-\hat\lambda b}.
$$

$$
(p_1,p_2,p_3,p_4)=(1/2,1/4,1/8,1/8),\quad
E=(50,25,12.5,12.5),\quad
Q=\frac{25}{50}+\frac4{25}+\frac{6.25}{12.5}+\frac{0.25}{12.5}=1.18,
\quad\nu=4-1-1=2,\quad1.18<5.991465.
$$

For the final interval let the upper endpoint tend to infinity: its exponential term tends to zero. The four endpoint evaluations give the probabilities shown. All expected counts exceed 5. Do not reject: insufficient evidence against the exponential family. Subtract a fitted parameter even though its estimate happens to equal the rate in Example B.

</details>

</section>

<section class="lesson-check" markdown="1">

### Try it {#task-c}

**Question:** A fixed geometric model has $P(X=x)=2^{-(x+1)}$ for $x=0,1,\ldots$. Eighty independent observations give counts $(40,18,12,4,6)$ for $(0,1,2,3,\ge4)$. One student accepts expected counts of exactly 5; another pools 0 with $\ge4$ but leaves 3 separate. Diagnose both and complete a valid 5% test, using $c_3(0.95)=7.814728$.

<details markdown="1">

<summary>Hint</summary>

Inspect expected counts and keep ordered groups contiguous.

</details>

<details markdown="1">

<summary>Solution</summary>

$$
H_0:X\text{ follows the specified geometric model},\quad H_1:X\text{ does not};
\quad P(X\ge4)=1-(1/2+1/4+1/8+1/16)=1/16.
$$

$$
E_{\rm initial}=(40,20,10,5,5),\quad
O_{\rm final}=(40,18,12,10),\quad E_{\rm final}=(40,20,10,10),\quad C_{\rm final}=(0,1,2,\ge3).
$$

$$
Q=0+\frac4{20}+\frac4{10}+0=0.6,\quad\nu=4-1=3,\quad0.6<7.814728.
$$

Exactly 5 fails. Pooling zero with the far tail breaks the ordered groups and still leaves an expected count of 5 at three. Merge the two adjacent tail categories instead. Do not reject: insufficient evidence against the specified geometric model. No parameter was estimated.

</details>

</section>

## Repair, then close the old answers {#retry}

For a parameter or df error, return to [pooling and degrees of freedom](#pooling) and identify where each parameter value came from. For a probability error, return to [expected counts](#expected) and [continuous areas](/alevel/a2-mathematics/statistics/continuous-random-variables/#area); evaluate both endpoints. For pooling, inspect expected counts and recount final groups.

<section class="lesson-check" markdown="1">

### Try it {#retry-a}

**Question:** Sixty-four independent observations on $X=(0,1,2)$ have frequencies $(26,30,8)$. Estimate $p$ for a Binomial$(2,p)$ family, calculate expected counts and test at 5%, using $c_1(0.95)=3.841459$.

<details markdown="1">

<summary>Hint</summary>

Re-estimate the parameter from this sample.

</details>

<details markdown="1">

<summary>Solution</summary>

$$
H_0:X\sim\operatorname{Bin}(2,p)\text{ for some }p,\quad H_1:X\text{ is not in this family};
\quad\bar x=\frac{30+16}{64}=\frac{23}{32},\quad\hat p=\frac{23}{64}.
$$

$$
E=\left(\frac{1681}{64},\frac{1886}{64},\frac{529}{64}\right)
=(26.265625,29.46875,8.265625),\quad\nu=1.
$$

$$
Q=\frac{(-17/64)^2}{1681/64}+\frac{(34/64)^2}{1886/64}+\frac{(-17/64)^2}{529/64}
=0.0207996<3.841459.
$$

All expected counts exceed 5; do not reject. There is insufficient evidence against the binomial family. Using a probability of one half would test a different, specified model.

</details>

</section>

<section class="lesson-check" markdown="1">

### Try it {#retry-b}

**Question:** A specified density is $f(x)=2x$ for $0\le x\le1$, zero elsewhere. Eighty independent observations have counts $(12,18,22,28)$ in $[0,1/2)$, $[1/2,1/\sqrt2)$, $[1/\sqrt2,\sqrt3/2)$ and $[\sqrt3/2,1]$. Derive probabilities and test at 5%, using $c_3(0.95)=7.814728$.

<details markdown="1">

<summary>Hint</summary>

Square the interval endpoints after integrating.

</details>

<details markdown="1">

<summary>Solution</summary>

$$
H_0:X\text{ has the specified density},\quad H_1:X\text{ does not};
\quad\int_0^1 2x\,dx=1,\qquad
P(a\le X<b)=[x^2]_a^b=b^2-a^2.
$$

$$
(0,1/2,1/\sqrt2,\sqrt3/2,1)^2=(0,1/4,1/2,3/4,1),\quad
p_i=1/4,\quad E_i=20.
$$

$$
Q=\frac{64+4+4+64}{20}=6.8<7.814728,\quad\nu=4-1=3.
$$

All expected counts exceed 5; do not reject. Insufficient evidence against the specified density. The probabilities are equal because the areas are equal, not because the intervals have equal width. The squared-endpoint list means square each endpoint separately.

</details>

</section>

<section class="lesson-check" markdown="1">

### Try it {#retry-c}

**Question:** A fixed model gives probabilities $(0.2,0.3,0.25,0.25)$ to ordered categories $(0,1,2,3)$. Twenty independent observations have counts $(3,7,4,6)$. Form valid contiguous pooled categories and test at 5%, using $c_1(0.95)=3.841459$.

<details markdown="1">

<summary>Hint</summary>

An expected frequency of 5 must also be repaired.

</details>

<details markdown="1">

<summary>Solution</summary>

$$
H_0:X\text{ follows the specified model},\quad H_1:X\text{ does not};
\quad E_{\rm initial}=(4,6,5,5).
$$

$$
C_{\rm final}=(\{0,1\},\{2,3\}),\quad
O=(10,10),\quad E=(10,10),\quad Q=0<3.841459,\quad\nu=2-1=1.
$$

Do not reject. Both pooled expected counts exceed 5. Pooling loses sensitivity to differences inside each group, so zero discrepancy between the two pooled groups does not prove the four original probabilities correct.

</details>

</section>

## Return without the method labels {#later-review}

<section class="lesson-check" markdown="1">

### Try it {#later-a}

**Question:** A pre-specified model assigns probabilities $(1/4,1/2,1/4)$ to $(0,1,2)$. Sixty-four independent observations have frequencies $(26,30,8)$. Assess the model at 5%, using $c_2(0.95)=5.991465$. Explain why an estimate made in a different task does not reduce the degrees of freedom here.

<details markdown="1">

<summary>Hint</summary>

Ask whether any parameter is estimated in this test.

</details>

<details markdown="1">

<summary>Solution</summary>

$$
H_0:X\text{ has the stated probabilities},\quad H_1:X\text{ does not};
\quad E=(16,32,16),\quad\nu=3-1=2.
$$

$$
Q=\frac{100}{16}+\frac4{32}+\frac{64}{16}=10.375>5.991465.
$$

Reject: sufficient evidence against these fixed probabilities. No parameter is estimated in this task. Compatibility with an estimated family in the retry does not establish compatibility with these fixed probabilities.

</details>

</section>

<section class="lesson-check" markdown="1">

### Try it {#later-b}

**Question:** A team tests the specified density $e^{-t}$ for $t\ge0$ using classes $[0,1)$, $[1,2)$, $[2,3)$, deleting 7 of 50 observations above 3 and renormalising by $1-e^{-3}$. Explain what changed. Restore valid classes and expected counts for the original question, and state whether the supplied information permits a numerical test.

<details markdown="1">

<summary>Hint</summary>

Retain the omitted tail before checking expected counts.

</details>

<details markdown="1">

<summary>Solution</summary>

$$
p=(1-e^{-1},e^{-1}-e^{-2},e^{-2}-e^{-3},e^{-3}),\quad
E=(31.606028,11.627208,4.277411,2.489353).
$$

$$
C_{\rm final}=([0,1),[1,2),[2,\infty)),\quad
E_{\rm final}=(31.606028,11.627208,6.766764),\quad\nu=3-1=2.
$$

Deleting and renormalising changes the target to a conditional distribution below 3. The original question keeps all 50 observations. Combine the last two adjacent intervals to make all expected counts exceed 5. The final observed tail count is 7 plus the unspecified count between 2 and 3; the other observed counts are also missing. A numerical statistic and decision cannot be calculated without those counts.

</details>

</section>

## Connect the questions {#next-step}

A distributional fit compares one variable with model probabilities. Next compare this with two categorical variables, where the expected table comes from row and column totals instead.

[Association tests](/alevel/a2-further-mathematics/statistics/association-tests/) · [Course route](/alevel/a2-further-mathematics/statistics/)
