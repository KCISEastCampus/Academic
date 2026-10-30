---
title: "Discrete uniform probabilities and moments"
layout: subjects
mathjax: true
grade: as
subject: as-further-mathematics
lang: en
permalink: /alevel/as-further-mathematics/discrete-uniform/
toc_headings: h2, h3
study_page: true
reading_layout: true
---

[AS Further Mathematics](/alevel/as-further-mathematics/) · S2 · FS1.2

All demonstrations, scaffolded attempts, independent tasks and retries here are **self-written**, with no official marks. Write your method and reasons before opening hints and solutions separately.

## Count outcomes before measuring intervals {#model}

Your goals are to specify an equally likely integer support, handle strict and inclusive boundaries, derive both mean and variance, and reconstruct a model from moments. First list the integers strictly between 1.2 and 4.8: they are 2, 3, 4. Interval length is not the number of possible outcomes.

For integer endpoints a and b, let N be the number of consecutive integers. Equal probability is a model assumption, not a consequence of the endpoints alone. The mass outside the support is zero.

$$
\begin{aligned}
&a\le b,\\
&N=b-a+1,\\
&P(X=x)=\frac1N,\\
&x\in\{a,a+1,\ldots,b\},\\
&P(X=x)=0\quad\text{otherwise}.
\end{aligned}
$$

Count only admissible integers inside both the requested interval and the support. The CDF includes a support point at its jump, so it is right-continuous. The floor gives the greatest integer at most x.

$$
F(x)=\begin{cases}
0&x<a,\\
\dfrac{\lfloor x\rfloor-a+1}{N}&a\le x<b,\\
1&x\ge b.
\end{cases}
$$

![Discrete uniform distribution on 1,2,3,4: four equal probability bars of height 1/4 and a step CDF with closed right-continuous values and open left limits.](/alevel/as-further-mathematics/diagrams/uniform.svg){: width="560" height="670" }

The bars show probability mass, not a continuous density. A flat row of bars does not make values between the bars possible.

## Derivation: two moments from equal masses {#demonstration}

<section class="worked-example" markdown="1">

Recall the definitions of the raw moments and variance. A finite distribution needs no convergence argument. For U uniform on 1 through N, the probability weight in each sum is 1/N. Use these finite-sum identities:

$$
\begin{aligned}
&E(U)=\sum_r rP(U=r),\\
&E(U^2)=\sum_r r^2P(U=r),\\
&\operatorname{Var}(U)=E(U^2)-[E(U)]^2,\\
&\sum_{r=1}^{N}r=\frac{N(N+1)}2,\\
&\sum_{r=1}^{N}r^2=\frac{N(N+1)(2N+1)}6.
\end{aligned}
$$

The mean averages the values, whereas the second raw moment averages their squares. Their difference below must be formed after the two averages, not by squaring the probabilities.

$$
\begin{aligned}
&E(U)=\frac1N\sum_{r=1}^{N}r\\
&\quad=\frac{N+1}2,\\
&E(U^2)=\frac1N\sum_{r=1}^{N}r^2\\
&\quad=\frac{(N+1)(2N+1)}6,\\
&\operatorname{Var}(U)\\
&\quad=\frac{(N+1)(2N+1)}6\\
&\qquad-\frac{(N+1)^2}4\\
&\quad=\frac{(N+1)(4N+2-3N-3)}{12}\\
&\quad=\frac{N^2-1}{12}.
\end{aligned}
$$

Now shift to X. Adding a constant shifts every value and its mean equally; each deviation from the mean is unchanged. This proves the variance statement rather than assuming it.

$$
\begin{aligned}
&X=U+a-1,\\
&E(X)=\frac{N+1}2+a-1=\frac{a+b}2,\\
&X-E(X)=U-E(U),\\
&\operatorname{Var}(X)=\frac{N^2-1}{12}.
\end{aligned}
$$

For N=1 the support is a single constant a=b: the mean is a and variance zero, as both formulas require. These derivations apply to every positive integer N; numerical checks alone would not prove that.

</section>

<section class="worked-example" markdown="1">

**Demonstration (self-written):** X is uniform on $\{-2,-1,0,1,2,3,4\}$. Find $P(X>1.5)$ and its moments.

The admissible values above 1.5 are 2, 3, 4. There are seven support points, including both endpoints.

$$
\begin{aligned}
&N=4-(-2)+1=7,\\
&P(X>1.5)=\frac37,\\
&E(X)=\frac{-2+4}2=1,\\
&\operatorname{Var}(X)=\frac{49-1}{12}=4.
\end{aligned}
$$

Check directly: deviations from 1 are −3 through 3; their squared values sum to 28, giving variance 28/7=4. Symmetry also checks the mean.

</section>

## Equal spacing is a transformation {#spaced}

A support with gaps can still be equally likely, but the consecutive-integer variance formula cannot use its endpoint span as N. Start with K uniform on 0 through N−1 and transform it. For nonzero d the N values remain distinct; deviations are multiplied by d.

$$
\begin{aligned}
&T=c+dK,\\
&d\ne0,\\
&E(T)=c+d\frac{N-1}2,\\
&T-E(T)=d[K-E(K)],\\
&\operatorname{Var}(T)=d^2\frac{N^2-1}{12}.
\end{aligned}
$$

A negative d reverses order but its square still determines variance. If d=0, T is the single constant c; only when N>1 does the transformation cease to give N distinct values.

## Count, derive, and change representation {#practice}

<section class="lesson-check" id="scaffold" markdown="1">

**Scaffold (self-written):** With X as above, compare $P(X<2)$ and $P(X\le2)$.

<details markdown="1"><summary>Hint</summary>

List the outcomes before counting them.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$
\begin{aligned}
&X<2:\quad -2,-1,0,1,\\
&X\le2:\quad -2,-1,0,1,2,\\
&P(X<2)=\frac47,\\
&P(X\le2)=\frac57.
\end{aligned}
$$

The difference is exactly the mass at 2.

</details>

</section>

<section class="lesson-check" id="practice-1" markdown="1">

**Independent task (self-written):** U is uniform on $\{1,\ldots,n\}$ with variance 4. Find integer n and $P(2.5<U\le6.2)$. Another student reports variance 3 for such a model: is any positive integer n possible? Justify.

<details markdown="1"><summary>Hint</summary>

Enforce a positive integer support size; never round it.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$
\begin{aligned}
&n^2-1=48,\\
&n=7,\\
&2.5<U\le6.2:\quad U=3,4,5,6,\\
&P(2.5<U\le6.2)=\frac47,\\
&\operatorname{Var}(U)=3\ \Rightarrow\ n^2=37.
\end{aligned}
$$

No positive integer has square 37. The second variance report is incompatible with the model.

</details>

</section>

<section class="lesson-check" id="practice-2" markdown="1">

**Independent task 2 (self-written):** For integers a≤b, X is equally likely on every integer from a to b. Starting from the probability masses and the finite-sum identities above, derive its mean and variance for every such a,b. Show the second raw moment and the cancellation of the shift. Treat the single-point case. Quoting the final formulas alone does not answer this task.

<details markdown="1"><summary>Hint</summary>

Re-index by a variable starting at 1. Expand the square before subtracting the squared mean.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$
\begin{aligned}
&N=b-a+1,\\
&X=U+a-1,\\
&P(U=r)=1/N\quad(1\le r\le N),\\
&E(U)=\frac1N\sum_{r=1}^{N}r=\frac{N+1}2,\\
&E(U^2)=\frac1N\sum_{r=1}^{N}r^2\\
&\quad=\frac{(N+1)(2N+1)}6,\\
&E(X)=a-1+\frac{N+1}2=\frac{a+b}2,\\
&E(X^2)=E(U^2)+2(a-1)E(U)\\
&\qquad +(a-1)^2,\\
&\operatorname{Var}(X)=E(X^2)-[E(X)]^2\\
&\quad=E(U^2)-[E(U)]^2\\
&\quad=\frac{(N+1)(2N+1)}6\\
&\qquad-\frac{(N+1)^2}4\\
&\quad=\frac{N^2-1}{12}.
\end{aligned}
$$

For N=1, X=a with probability one, so its mean is a and its variance is zero. A complete derivation shows both weighted sums and the shift cancellation.

</details>

</section>

<section class="lesson-check" id="practice-3" markdown="1">

**Independent task 3 (self-written):** A device displays 2, 5, 8, 11 with equal probabilities. Find its mean, variance and probability of a display at least 7. Explain why treating it as uniform on every integer from 2 to 11 fails. If it always displays 2 instead, give its mean and variance.

<details markdown="1"><summary>Hint</summary>

Use four equally likely labels. The gaps affect deviations, not the number of labels.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$
\begin{aligned}
&T=2+3K,\\
&K\in\{0,1,2,3\},\\
&E(K)=\frac32,\\
&\operatorname{Var}(K)=\frac54,\\
&E(T)=2+3\left(\frac32\right)=\frac{13}2,\\
&\operatorname{Var}(T)=9\left(\frac54\right)=\frac{45}4,\\
&P(T\ge7)=P(T\in\{8,11\})=\frac12.
\end{aligned}
$$

The ten-integer model assigns mass to impossible values such as 3. In the constant case the mean is 2 and variance zero.

</details>

</section>

## Repair the specific gap {#retry}

If endpoints caused the error, list values in retry 1. If a formula was quoted without a derivation, redo both moments in retry 2. If gaps were mistaken for extra outcomes, re-index retry 3 before calculating.

<section class="lesson-check" id="retry-1" markdown="1">

**Retry (self-written):** Y is uniform on $\{-3,-2,-1,0,1,2,3\}$. Find $P(\lvert Y\rvert<2)$, mean and variance.

<details markdown="1"><summary>Hint</summary>

Intersect the strict inequality with the support.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$
\begin{aligned}
&\lvert Y\rvert<2:\quad Y=-1,0,1,\\
&P(\lvert Y\rvert<2)=\frac37,\\
&E(Y)=0,\qquad\operatorname{Var}(Y)=4.
\end{aligned}
$$

Seven equally likely points, not a continuous interval.

</details>

</section>

<section class="lesson-check" id="retry-2" markdown="1">

**Retry 2 (self-written):** V is uniform on 0,1,...,m−1 for a positive integer m. Derive both its mean and variance directly from its probability masses and finite sums, including m=1. Explain why shifting the support down by one changes only the mean.

<details markdown="1"><summary>Hint</summary>

Replace N by m−1 in the sum identities, keeping the probability weight 1/m.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$
\begin{aligned}
&P(V=k)=1/m\quad(0\le k\le m-1),\\
&\sum_{k=0}^{m-1}k=\frac{m(m-1)}2,\\
&\sum_{k=0}^{m-1}k^2=\frac{m(m-1)(2m-1)}6,\\
&E(V)=\frac{m-1}2,\\
&E(V^2)=\frac{(m-1)(2m-1)}6,\\
&\operatorname{Var}(V)\\
&\quad=\frac{(m-1)(2m-1)}6\\
&\qquad-\frac{(m-1)^2}4\\
&\quad=\frac{m^2-1}{12}.
\end{aligned}
$$

For m=1, V=0. A shift changes every value and its mean equally, leaving all centred deviations unchanged.

</details>

</section>

<section class="lesson-check" id="retry-3" markdown="1">

**Retry 3 (self-written):** Five equally likely labels are −4, −2, 0, 2, 4. Find the mean, variance and probability that the label is greater than −3 and at most 2. Explain your count and your variance scaling.

<details markdown="1"><summary>Hint</summary>

Use a step of two, so squared deviations scale by four.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$
\begin{aligned}
&V=-4+2K,\\
&K\in\{0,1,2,3,4\},\\
&E(V)=-4+2(2)=0,\\
&\operatorname{Var}(V)=4(2)=8,\\
&-3<V\le2:\quad V=-2,0,2,\\
&P(-3<V\le2)=\frac35.
\end{aligned}
$$

The denominator is five. Using all nine integers between the endpoints changes the model.

</details>

</section>

## Return after geometric distributions {#later-review}

<section class="lesson-check" id="later-task" markdown="1">

**Later review (self-written):** An equally likely consecutive-integer variable has mean 3 and variance 10. Recover its support, justify the integer endpoints, and verify both moments from weighted finite sums rather than only substituting into final formulas. Find the probability it is at least 7.

<details markdown="1"><summary>Hint</summary>

The variance determines support size; the mean determines its midpoint.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$
\begin{aligned}
&10=\frac{N^2-1}{12}\ \Rightarrow\ N=11,\\
&a+b=6,\\
&b-a=10,\\
&a=-2,\\
&b=8,\\
&X=U-3,\\
&P(U=r)=1/11,\\
&E(U)=\frac1{11}\sum_{r=1}^{11}r=6,\\
&E(U^2)=\frac1{11}\sum_{r=1}^{11}r^2=46,\\
&E(X)=6-3=3,\\
&\operatorname{Var}(X)=46-6^2=10,\\
&P(X\ge7)=\frac2{11}.
\end{aligned}
$$

Both endpoints are integers and the eleven masses sum to one; the tail contains 7 and 8.

</details>

</section>

## Decide your next step {#next-step}

If both derivations and the shifted-support retry are complete, continue to geometric distributions. If counting fails, return to the CDF and list values explicitly; if variance fails, reconstruct the raw second moment before subtracting the squared mean. After the geometric chapter, do the later review without notes. These moment sums will reappear when you derive a uniform PGF.

## Sources and scope {#sources}

Scope follows 9665 v5.2. The paired questions and mark schemes below informed the required evidence; these exercises do not reproduce their questions or award official marks.

- [OxfordAQA 9665 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf), FS1.2.
- FM02 June 2024 Q8(b)(i); QP pp.16–17, MS p.14. [FM02 June 2024 QP](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-question-paper.pdf) · [Final MS](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-mark-scheme.pdf).

[Previous](/alevel/as-further-mathematics/bayes/) · [Course route](/alevel/as-further-mathematics/#learning-route) · [Next](/alevel/as-further-mathematics/geometric-distribution/)

{% include exam_topic_practice.html %}
