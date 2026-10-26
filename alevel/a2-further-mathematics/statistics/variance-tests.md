---
title: "Variance tests: compare population spread"
layout: subjects
mathjax: true
grade: a2
subject: a2-further-mathematics
lang: en
permalink: /alevel/a2-further-mathematics/statistics/variance-tests/
reading_layout: true
study_page: true
toc_headings: h2
---

A sample can be more variable even when its population is not. We will test claims about population spread, keeping variance and standard deviation distinct. All examples and tasks are self-written; the data are constructed and carry no official marks.

You need unbiased sample variance and the logic of hypotheses and rejection regions. Revisit [conditions for comparing populations](/alevel/a2-further-mathematics/statistics/comparing-means/#conditions) if needed.

## One population: choose the tail {#chi-square}

For independent random observations from a normal population, the following result connects sample variance to population variance. The sample mean has been estimated, so the deviations sum to zero and only one fewer deviation can vary freely.

$$
S^2=\frac{\sum_{i=1}^n(X_i-\bar X)^2}{n-1},\qquad
Q=\frac{(n-1)S^2}{\sigma_0^2}\sim\chi^2_{n-1}\quad(H_0:\sigma^2=\sigma_0^2).
$$

A claim about SD must be squared in this denominator. For example, an SD of 2 mm means a variance of 4 square millimetres. Normality is a condition of this result: large samples from arbitrary non-normal populations do not automatically justify this exact test.

Define the left cumulative quantile by:

$$
P(\chi^2_{\nu}\le c_{\nu}(p))=p.
$$

| Alternative | Rejection region at level $\alpha$ |
| --- | --- |
| $\sigma^2>\sigma_0^2$ | $Q>c_{n-1}(1-\alpha)$ |
| $\sigma^2<\sigma_0^2$ | $Q<c_{n-1}(\alpha)$ |
| $\sigma^2\ne\sigma_0^2$ | $Q<c_{n-1}(\alpha/2)$ or $Q>c_{n-1}(1-\alpha/2)$ |

The quantiles above use left cumulative probabilities. A larger sample variance increases the statistic, so an increase claim uses the upper tail. A two-sided 5% test leaves 2.5% in each tail. Do not treat non-rejection as proof that the population variance equals the proposed value.

<section class="worked-example" markdown="1">

### A complete example {#example-a}

**Question:** Eleven independent rod lengths are sampled randomly from a normal population. The unbiased sample variance is $9\ \mathrm{mm}^2$. Test at 5% whether the population SD exceeds $2\ \mathrm{mm}$, using $c_{10}(0.95)=18.307$.

$$
H_0:\sigma=2,\quad H_1:\sigma>2,\qquad
Q=\frac{10\times9}{2^2}=22.5>18.307,\quad\nu=10.
$$

Reject the null hypothesis. There is sufficient evidence at 5% that the population SD of rod lengths exceeds 2 mm. Both variance units cancel, so the statistic is dimensionless; its large value agrees with the upper-tail alternative.

</section>

## Two populations: keep the ratio and direction together {#f-ratio}

For independent random samples from two normal populations, form a ratio of unbiased sample variances. Under equal population variances it has the F distribution below. Put the numerator sample degrees of freedom first.

$$
H_0:\sigma_A^2=\sigma_B^2,\qquad
F=\frac{S_A^2}{S_B^2}\sim F_{n_A-1,n_B-1}.
$$

$$
P(F_{a,b}\le f_{a,b}(p))=p,\qquad
f_{a,b}(p)=\frac{1}{f_{b,a}(1-p)}.
$$

If the alternative says A has greater variance, large A/B supports it: use the upper tail. If A has smaller variance, use the lower tail. Taking the reciprocal swaps the degrees of freedom and the tail. A table labelled by upper-tail probability uses an upper 5% entry where this notation uses 0.95. Do not move the larger observed variance to the top without tracking the original alternative.

$$
H_1:\sigma_A^2\ne\sigma_B^2:\quad
F<f_{a,b}(\alpha/2)\ \text{or}\ F>f_{a,b}(1-\alpha/2).
$$

$$
H_0:\frac{\sigma_A}{\sigma_B}=k\ (k>0):\quad
F=\frac{S_A^2/S_B^2}{k^2}\sim F_{n_A-1,n_B-1}.
$$

The second formula handles a stated SD ratio by squaring it; a stated variance ratio would be used directly. The exact F test requires independent samples and normal populations. Repeated observations of the same subjects do not automatically form independent samples.

<section class="worked-example" markdown="1">

### A complete example {#example-b}

**Question:** Independent normal samples from processes A and B have $n_A=11,s_A^2=18$ and $n_B=21,s_B^2=6$, with variances in square millimetres. At 5%, test whether A has greater population variance. Use $f_{10,20}(0.95)=2.347878$.

$$
H_0:\sigma_A^2=\sigma_B^2,\quad H_1:\sigma_A^2>\sigma_B^2,\qquad
F=\frac{18}{6}=3>2.347878,\quad(\nu_1,\nu_2)=(10,20).
$$

$$
F'=\frac13<\frac{1}{2.347878}=0.425917,\quad(\nu_1',\nu_2')=(20,10).
$$

Reject: sufficient evidence that A has greater population variance. The reciprocal calculation is a lower-tail check of exactly the same claim, not a new upper-tail test.

</section>

## Make your own decisions {#practice}

<section class="lesson-check" markdown="1">

### Try it {#task-a}

**Question:** A normal random sample of 11 independent observations has $s^2=9\ \mathrm{mm}^2$. A two-sided 5% test of $H_0:\sigma=k$ is not rejected. Find the possible positive $k$, using $c_{10}(0.025)=3.246973$ and $c_{10}(0.975)=20.483177$. Explain why two 5% tail cutoffs would be wrong.

<details markdown="1">

<summary>Hint</summary>

Write the non-rejection event before inverting.

</details>

<details markdown="1">

<summary>Solution</summary>

$$
3.246973\le\frac{90}{k^2}\le20.483177
\ \Longrightarrow\ \frac{90}{20.483177}\le k^2\le\frac{90}{3.246973}
\ \Longrightarrow\ 2.09615\le k\le5.26480\ \mathrm{mm}.
$$

The positive reciprocal reverses each inequality; take square roots only at the end. Using 5% in both tails gives a total 10% test. Here boundary values are included under the stated strict rejection convention; continuous exact equality has probability zero. Do not decide a boundary from rounded values.

</details>

</section>

<section class="lesson-check" markdown="1">

### Try it {#task-b}

**Question:** Independent normal samples give $n_A=11,s_A^2=4$ and $n_B=21,s_B^2=9$. The claim is $\sigma_A^2>\sigma_B^2$. A student uses $9/4$ and an upper tail because the larger observed variance is on top. Diagnose and complete the 5% test, given $f_{10,20}(0.95)=2.347878$ and $f_{20,10}(0.05)=0.425917$.

<details markdown="1">

<summary>Hint</summary>

Describe which ratio would be large under the claim.

</details>

<details markdown="1">

<summary>Solution</summary>

$$
H_0:\sigma_A^2=\sigma_B^2,\quad H_1:\sigma_A^2>\sigma_B^2,\qquad
F=\frac49=0.444444<2.347878,\quad(\nu_1,\nu_2)=(10,20).
$$

$$
F'=\frac94=2.25>0.425917,\quad(\nu_1',\nu_2')=(20,10).
$$

Do not reject: insufficient evidence that A has greater population variance. The reciprocal must be compared with the lower-tail cutoff, and it is not below that cutoff. Choosing the numerator by sample size of the variance can change the direction; non-rejection does not prove equality.

</details>

</section>

<section class="lesson-check" markdown="1">

### Try it {#task-c}

**Question:** The same 15 instruments are measured under two settings, with normal marginal distributions. Can the independent F test compare their variances? Would two independent samples of 200 from strongly skewed populations automatically justify the exact F test? Explain separately.

<details markdown="1">

<summary>Hint</summary>

Check between-sample independence and normality separately.

</details>

<details markdown="1">

<summary>Solution</summary>



Neither description justifies this exact test. Shared instruments can make sample variances dependent. Large independent samples repair neither an unspecified normality condition nor strong non-normality. State that the required model or design is missing, rather than calculating an unsupported statistic.

</details>

</section>

<section class="lesson-check" markdown="1">

### A claim about relative spread {#task-ratio}

**Question:** Independent random samples from normal processes A and B have $n_A=11,n_B=21$, with unbiased variances $s_A^2=48,s_B^2=6$ in square millimetres. At 5%, test the pre-specified claim that the population SD ratio $\sigma_A/\sigma_B$ exceeds 2. Use $f_{10,20}(0.95)=2.347878$. State the ordered degrees of freedom and explain why comparing $48/6$ directly with this cutoff is wrong.

<details markdown="1"><summary>Hint</summary>

The null concerns an SD ratio. Convert it into a variance ratio before normalizing the sample ratio.

</details>

<details markdown="1"><summary>Solution</summary>

$$
H_0:\sigma_A/\sigma_B=2,\quad H_1:\sigma_A/\sigma_B>2,\qquad
F=\frac{48/6}{2^2}=2,\qquad(\nu_1,\nu_2)=(10,20).
$$
The claim uses the upper tail. Since $2<2.347878$, do not reject: insufficient evidence that A's population SD exceeds twice B's. This does not prove the ratio is 2. The null variance ratio is 4, not 1; using the raw ratio 8 would test the wrong null. Normality and independent random sampling justify the F reference.

</details>

</section>

## Repair the specific difficulty {#retry}

For a tail or inversion error, return to [one-population tails](#chi-square); for a ratio error, label numerator and direction in [two-population ratios](#f-ratio). For a condition error, identify the independent sampling units. Close the solutions before trying these new questions.

<section class="lesson-check" markdown="1">

### Try it {#retry-a}

**Question:** A normal sample of 21 independent observations has $\sum(x_i-\bar x)^2=160\ \mathrm{mm}^2$. Find positive SD values not rejected by a two-sided 5% test. Use $c_{20}(0.025)=9.590777$ and $c_{20}(0.975)=34.169607$.

<details markdown="1">

<summary>Hint</summary>

The sum of squared deviations is already the numerator.

</details>

<details markdown="1">

<summary>Solution</summary>

$$
s^2=\frac{160}{20}=8,\qquad
9.590777\le\frac{160}{k^2}\le34.169607,\qquad
2.16391\le k\le4.08445\ \mathrm{mm}.
$$

The numerator is 160, not 20 times 160. Invert the positive bounds and take square roots.

</details>

</section>

<section class="lesson-check" markdown="1">

### Try it {#retry-b}

**Question:** Independent normal samples have $n_A=11,s_A^2=3$ and $n_B=21,s_B^2=12$. Test $\sigma_A<\sigma_B$ at 5%, using $f_{10,20}(0.05)=0.360488$. Check with $f_{20,10}(0.95)=2.774016$.

<details markdown="1">

<summary>Hint</summary>

An SD ordering gives the same variance ordering.

</details>

<details markdown="1">

<summary>Solution</summary>

$$
H_0:\sigma_A^2=\sigma_B^2,\quad H_1:\sigma_A^2<\sigma_B^2,\quad
F=\frac3{12}=0.25<0.360488,\quad(\nu_1,\nu_2)=(10,20).
$$

$$
F'=4>2.774016,\quad(\nu_1',\nu_2')=(20,10).
$$

Reject: sufficient evidence that A has smaller population SD. The reciprocal gives the same conclusion with the opposite tail and swapped degrees of freedom.

</details>

</section>

<section class="lesson-check" markdown="1">

### Try it {#retry-c}

**Question:** Choose the design that can support an independent F test: (a) 40 independent units randomly assigned to two disjoint groups of 20, with normal outcomes within each population; (b) 20 units each measured twice, with normal margins. State what still needs checking.

<details markdown="1">

<summary>Hint</summary>

Draw one line per sampled unit.

</details>

<details markdown="1">

<summary>Solution</summary>



Choose (a), checking within-group independence, the normal population models and whether the sampled units represent the populations being compared. Design (b) does not supply independent samples.

</details>

</section>

## Return after another topic {#later-review}

Attempt these after learning another topic, without looking at the examples. Record whether you needed a hint; immediate correction is not evidence of later retention.

<section class="lesson-check" markdown="1">

### Try it {#later-a}

**Question:** A laboratory claims its normally distributed measurement error has SD below 2 units. Eleven independent errors have unbiased sample variance 1. Assess the claim at 5%, using $c_{10}(0.05)=3.940299$.

<details markdown="1">

<summary>Hint</summary>

Decide the alternative direction from the claim.

</details>

<details markdown="1">

<summary>Solution</summary>

$$
H_0:\sigma=2,\quad H_1:\sigma<2,\qquad
Q=\frac{10\times1}{4}=2.5<3.940299,\quad\nu=10.
$$

Reject: sufficient evidence that the population error SD is below 2 units.

</details>

</section>

<section class="lesson-check" markdown="1">

### Try it {#later-b}

**Question:** Two independent normal samples each contain 11 observations and have variances 16 and 4. At 5%, assess whether their population variances differ. Use $f_{10,10}(0.025)=0.269049$ and $f_{10,10}(0.975)=3.716792$. Explain why the one-sided cutoff 2.978237 is unsuitable.

<details markdown="1">

<summary>Hint</summary>

A difference claim needs two tails.

</details>

<details markdown="1">

<summary>Solution</summary>

$$
H_0:\sigma_A^2=\sigma_B^2,\quad H_1:\sigma_A^2\ne\sigma_B^2,\qquad
F=4>3.716792,\quad(\nu_1,\nu_2)=(10,10).
$$

Reject: sufficient evidence of different population variances. Two-sided 5% puts 2.5% in each tail; a 5% upper-tail cutoff allocates too much to that tail.

</details>

</section>

<section class="lesson-check" markdown="1">

### A different ratio claim {#retry-ratio}

**Question:** Independent random samples from normal processes A and B have $n_A=11,n_B=21$, with unbiased variances $s_A^2=40.5,s_B^2=6$ in square millimetres. At 5%, test whether $\sigma_A/\sigma_B>1.5$, using $f_{10,20}(0.95)=2.347878$. State the null, normalization, tail and ordered degrees of freedom.

<details markdown="1"><summary>Hint</summary>

Keep A on top, square the proposed SD ratio, and match the tail to the alternative.

</details>

<details markdown="1"><summary>Solution</summary>

$$
H_0:\sigma_A/\sigma_B=1.5,\quad H_1:\sigma_A/\sigma_B>1.5,\qquad
F=\frac{40.5/6}{1.5^2}=3,\qquad(\nu_1,\nu_2)=(10,20).
$$
Reject in the upper tail since $3>2.347878$: sufficient evidence at 5% that A's population SD exceeds 1.5 times B's. The sample ratio alone is 6.75; it must be scaled by the null variance ratio 2.25.

</details>

</section>

If you used the raw variance ratio for an SD claim, revisit [the nonunit ratio](#f-ratio), close the old answer and attempt [the new ratio claim](#retry-ratio).

## What comes next? {#next-step}

Next distinguish a claim about population spread from a claim about a whole distribution or two categorical variables. Keep the sampled units, assumptions and contextual conclusion explicit.

[Goodness of fit](/alevel/a2-further-mathematics/statistics/goodness-of-fit/) · [Course route](/alevel/a2-further-mathematics/statistics/)
