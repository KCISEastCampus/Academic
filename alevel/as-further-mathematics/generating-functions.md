---
title: "Probability generating functions"
layout: subjects
mathjax: true
grade: as
subject: as-further-mathematics
lang: en
permalink: /alevel/as-further-mathematics/generating-functions/
toc_headings: h2, h3
study_page: true
reading_layout: true
---

[AS Further Mathematics](/alevel/as-further-mathematics/) · S4 · FS1.4

All demonstrations, scaffolded attempts, independent tasks and retries here are **self-written**, with no official marks. Write your method and reasons before opening hints and solutions separately.

## Encode a probability table as coefficients {#model}

You will derive the PGFs of Bernoulli, binomial, discrete uniform and geometric variables from their probability masses, recover probabilities and moments, and decide when sums permit products. X must take nonnegative integer values. The placeholder t is neither time nor a possible outcome. At t=0, use the polynomial convention t^0=1 for the k=0 term; that term contributes P(X=0), not necessarily one.

$$
\begin{aligned}
&G_X(t)=E(t^X)\\
&\quad=\sum_{k=0}^{\infty}P(X=k)t^k,\\
&G_X(1)=1,\\
&G_X(0)=P(X=0),\\
&P(X=k)=\frac{G_X^{(k)}(0)}{k!}.
\end{aligned}
$$

A valid PGF has nonnegative coefficients summing to one; merely passing the value-at-one test is insufficient. The probability series converges absolutely for the following range. Within its radius of convergence it may be differentiated term by term.

$$
\lvert t\rvert\le1.
$$

## Why derivatives give factorial moments {#moments}

Differentiate the definition: powers of k appear because each probability remains a coefficient. At one, the second derivative weights by k(k−1), not by k squared. When the first two moments are finite, take limits to one from below if necessary.

$$
\begin{aligned}
&G_X'(t)=\sum_{k=1}^{\infty}kP(X=k)t^{k-1},\\
&G_X''(t)\\
&\quad=\sum_{k=2}^{\infty}k(k-1)P(X=k)t^{k-2},\\
&G_X'(1)=E(X),\\
&G_X''(1)=E[X(X-1)],\\
&X^2=X(X-1)+X,\\
&E(X^2)=G_X''(1)+G_X'(1),\\
&\operatorname{Var}(X)\\
&\quad=G_X''(1)+G_X'(1)-[G_X'(1)]^2.
\end{aligned}
$$

All four models below have finite moments. For a general infinite distribution, convergence of G at one alone does not guarantee finite derivatives there. If probability weights or raw moments are unfamiliar, revisit [discrete uniform](/alevel/as-further-mathematics/discrete-uniform/#demonstration); for infinite sums, revisit [geometric moments](/alevel/as-further-mathematics/geometric-distribution/#moment-foundation).

## Four continuous derivations {#demonstration}

### Bernoulli: two masses {#bernoulli}

<section class="worked-example" markdown="1">

Let X be zero with probability q and one with probability p. Multiply each mass by its corresponding power of t; there are only two terms.

$$
\begin{aligned}
&0\le p\le1,\\
&q=1-p,\\
&G_X(t)=qt^0+pt^1=q+pt,\\
&G_X'(1)=p,\\
&G_X''(1)=0,\\
&\operatorname{Var}(X)=0+p-p^2=pq.
\end{aligned}
$$

Check: the constant and linear coefficients recover q and p. At p=0 the PGF is 1 (constant zero variable); at p=1 it is t (constant one variable). Both have zero variance.

</section>

### Binomial: recognise a finite expansion {#binomial}

<section class="worked-example" markdown="1">

For n independent Bernoulli trials with common success probability p, insert the binomial masses into the definition. The binomial theorem combines the finite sum; it is not an assumed PGF formula.

$$
\begin{aligned}
&n\ge1\text{ integer},\\
&0\le p\le1,\\
&G_X(t)\\
&\quad=\sum_{k=0}^{n}\binom nk q^{n-k}p^kt^k\\
&\quad=(q+pt)^n,\\
&G_X'(1)=np,\\
&G_X''(1)=n(n-1)p^2,\\
&\operatorname{Var}(X)\\
&\quad=n(n-1)p^2+np-n^2p^2\\
&\quad=np(1-p)=npq.
\end{aligned}
$$

For n=1 the second derivative is zero directly; do not introduce an unnecessary negative power by mechanically writing a general derivative. At p=0 and p=1 the polynomial is 1 and t to the n respectively. Read coefficients from the polynomial when endpoint PMF notation would involve a zero power of zero.

</section>

### Discrete uniform: sum equal coefficients {#uniform}

<section class="worked-example" markdown="1">

For uniform X on 1 through n, write the n masses. The polynomial is defined for every real t. Only its quotient representation needs t different from one.

$$
\begin{aligned}
&G_X(t)=\frac1n\sum_{k=1}^{n}t^k\\
&\quad=\frac{t+t^2+\cdots+t^n}{n},\\
&G_X(t)=\frac{t(1-t^n)}{n(1-t)}\quad(t\ne1),\\
&G_X(1)=1,\\
&n\ge1\text{ integer},\\
&G_X'(1)=\frac1n\sum_{k=1}^{n}k=\frac{n+1}2,\\
&G_X''(1)=\frac1n\sum_{k=1}^{n}(k^2-k)\\
&\quad=\frac{(n+1)(2n+1)}6-\frac{n+1}2\\
&\quad=\frac{n^2-1}3,\\
&\operatorname{Var}(X)\\
&\quad=\frac{n^2-1}3+\frac{n+1}2-\frac{(n+1)^2}4\\
&\quad=\frac{n^2-1}{12}.
\end{aligned}
$$

Use the polynomial to evaluate at one; a zero-over-zero quotient is a removable singularity, not a failed probability model. At n=1 the PGF is t and variance zero.

</section>

### Geometric: account for the first power {#geometric}

<section class="worked-example" markdown="1">

X counts trials through the first success, so the support starts at one. Re-indexing leaves a factor pt outside a geometric series.

$$
\begin{aligned}
&0<p\le1,\\
&q=1-p,\\
&G_X(t)\\
&\quad=\sum_{k=1}^{\infty}pq^{k-1}t^k\\
&\quad=pt\sum_{j=0}^{\infty}(qt)^j\\
&\quad=\frac{pt}{1-qt}\quad(\lvert qt\rvert<1),\\
&G_X'(t)=\frac{p}{(1-qt)^2},\\
&G_X''(t)=\frac{2pq}{(1-qt)^3},\\
&G_X'(1)=\frac1p,\\
&G_X''(1)=\frac{2q}{p^2},\\
&\operatorname{Var}(X)=\frac{2q}{p^2}+\frac1p-\frac1{p^2}\\
&\quad=\frac q{p^2}.
\end{aligned}
$$

For p<1 the radius exceeds one, so these derivative evaluations are justified. For p=1 use X=1 directly: G=t, mean one, variance zero. A failure-count variable starts at zero and has a different PGF, despite having the same variance.

</section>

## When a sum becomes a product {#sums}

For independent nonnegative integer X and Y, expand the joint expectation. Independence replaces every joint probability by a product. For t between zero and one these sums converge, and give the PGF identity; coefficient comparison determines the distribution.

$$
\begin{aligned}
&G_{X+Y}(t)\\
&\quad=\sum_{i,j}P(X=i,Y=j)t^{i+j}\\
&\quad=\left(\sum_iP(X=i)t^i\right)\\
&\qquad\cdot\left(\sum_jP(Y=j)t^j\right)\\
&\quad=G_X(t)G_Y(t).
\end{aligned}
$$

If Y is the same random variable as X, use the PGF of 2X by substituting t squared into G. Squaring G would describe two independent copies instead. The four distributions above are the required foundation; the old reference notes’ Poisson example is supplementary.

$$
G_{2X}(t)=G_X(t^2).
$$

## Read coefficients, then derive without a formula table {#practice}

<section class="lesson-check" id="scaffold" markdown="1">

**Scaffold (self-written):** For $G(t)=(1+2t+t^2)/4$, read the probability table and use derivatives to find the mean and variance.

<details markdown="1"><summary>Hint</summary>

Write each coefficient beside its power, then distinguish the two second moments.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$
\begin{aligned}
&P(X=0)=\frac14,\\
&P(X=1)=\frac12,\\
&P(X=2)=\frac14,\\
&G'(t)=\frac{2+2t}4,\\
&G''(t)=\frac12,\\
&G'(1)=1,\\
&G''(1)=\frac12,\\
&\operatorname{Var}(X)=\frac12+1-1=\frac12.
\end{aligned}
$$

</details>

</section>

<section class="lesson-check" id="practice-1" markdown="1">

**Independent task (self-written):** A count Z has PGF $(0.2+0.8t)^2(t+t^2)/2$. Give an interpretation as a sum of independent variables, find $P(Z=2)$, $E(Z)$ and $\operatorname{Var}(Z)$. Is $H(t)=0.2-0.1t+0.9t^2$ a PGF just because $H(1)=1$?

<details markdown="1"><summary>Hint</summary>

Match powers in the two factors. Check coefficient signs as well as normalisation.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$
\begin{aligned}
&Z=X+Y,\\
&X\sim\operatorname{Bin}(2,0.8),\\
&Y\text{ uniform on }\{1,2\},\\
&X,Y\text{ independent},\\
&P(Z=2)\\
&\quad=0.5(2\cdot0.2\cdot0.8)+0.5(0.2^2)\\
&\quad=0.18,\\
&E(Z)=1.6+1.5=3.1,\\
&\operatorname{Var}(Z)=0.32+0.25=0.57.
\end{aligned}
$$

H is invalid: its linear coefficient is −0.1, which cannot be a probability. A product interpretation constructs independent variables with the displayed marginal PGFs; it does not prove any particular physical variables are independent.

</details>

</section>

### Independent derivation of each required distribution {#practice-2}

<section class="lesson-check" id="practice-2-bernoulli" markdown="1">

**Independent derivation A (self-written):** B records success as 1 and failure as 0, with success probability p. From the two probability masses, derive its PGF, mean and variance for 0≤p≤1. Independently check normalisation, the coefficient of t, and both constant-variable boundaries. Do not quote a PGF formula.

<details markdown="1"><summary>Hint</summary>

Start with probability times t to the observed value.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$
\begin{aligned}
&G_B(t)=(1-p)t^0+pt^1=1-p+pt,\\
&G_B'(1)=p,\\
&G_B''(1)=0,\\
&\operatorname{Var}(B)=p-p^2=p(1-p),\\
&G_B(1)=1,\\
&[t^1]G_B=p,\\
&p=0:\ G_B=1,\\
&p=1:\ G_B=t.
\end{aligned}
$$

The two coefficient checks return the original probability table.

</details>

</section>

<section class="lesson-check" id="practice-2-binomial" markdown="1">

**Independent derivation B (self-written):** C counts successes in n independent trials with common probability p, where n≥1. Derive its PGF directly from its probability masses and the binomial theorem, then derive both moments. Test G(1), the coefficient of t² when n=3,p=1/4, and the n=1 and p=0,1 boundaries.

<details markdown="1"><summary>Hint</summary>

Keep p times t together in the binomial expansion.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$
\begin{aligned}
&G_C(t)\\
&\quad=\sum_{k=0}^{n}\binom nk(1-p)^{n-k}(pt)^k\\
&\quad=(1-p+pt)^n,\\
&G_C'(1)=np,\\
&G_C''(1)=n(n-1)p^2,\\
&\operatorname{Var}(C)=np(1-p),\\
&G_C(1)=1,\\
&n=3,\ p=\frac14:\\
&[t^2]G_C=3\left(\frac14\right)^2\frac34=\frac9{64},\\
&E(C)=\frac34,\quad\operatorname{Var}(C)=\frac9{16}.
\end{aligned}
$$

At n=1 the PGF becomes the Bernoulli polynomial and the second derivative is zero. At p=0 and 1 it is 1 and t to the n; both variances vanish.

</details>

</section>

<section class="lesson-check" id="practice-2-uniform" markdown="1">

**Independent derivation C (self-written):** U is equally likely on 1,...,n. Derive its polynomial PGF and geometric-sum quotient from the definition. Derive both moments, explain the value at t=1, and test the coefficient of t² for n=4 and the boundary n=1.

<details markdown="1"><summary>Hint</summary>

Differentiate the finite sum at one rather than substituting into a zero-over-zero quotient.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$
\begin{aligned}
&G_U(t)=\frac1n\sum_{k=1}^{n}t^k,\\
&G_U(t)=\frac{t(1-t^n)}{n(1-t)}\quad(t\ne1),\\
&G_U(1)=1,\\
&G_U'(1)=\frac{n+1}2,\\
&G_U''(1)=\frac1n\sum_{k=1}^{n}(k^2-k)\\
&\quad=\frac{n^2-1}3,\\
&\operatorname{Var}(U)=\frac{n^2-1}{12},\\
&n=4:\quad [t^2]G_U=\frac14,\\
&E(U)=\frac52,\quad\operatorname{Var}(U)=\frac54.
\end{aligned}
$$

At n=1 the polynomial is t: mean one, variance zero. At one the finite polynomial sums n copies of 1/n.

</details>

</section>

<section class="lesson-check" id="practice-2-geometric" markdown="1">

**Independent derivation D (self-written):** T counts trials through first success in independent trials with probability 0<p≤1. Derive its PGF from the PMF, state the series condition, and derive mean and variance. Test G(0), G(1), the coefficient of t³ for p=1/4, and p=1. Explain why a PGF with a nonzero constant coefficient would be wrong for this T.

<details markdown="1"><summary>Hint</summary>

The smallest power is one. Re-index after factoring out pt.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$
\begin{aligned}
&G_T(t)\\
&\quad=\sum_{k=1}^{\infty}pq^{k-1}t^k\\
&\quad=pt\sum_{j=0}^{\infty}(qt)^j\\
&\quad=\frac{pt}{1-qt},\\
&\lvert qt\rvert<1,\\
&G_T(1)=1,\\
&G_T'(1)=1/p,\\
&G_T''(1)=2q/p^2,\\
&\operatorname{Var}(T)\\
&\quad=q/p^2,\\
&p=\frac14:\quad [t^3]G_T=\frac9{64},\\
&E(T)=4,\quad\operatorname{Var}(T)=12.
\end{aligned}
$$

G(0)=0 because no trial count is zero. At p=1, G=t and the moments are one and zero. Do not exclude this valid boundary when explaining convergence.

</details>

</section>

<section class="lesson-check" id="practice-3" markdown="1">

**Independent task 3 (self-written):** B is equally likely to be 0 or 1. A student claims the PGF of B+B is the square of its PGF. Derive the actual PGF from the outcomes, find the probability of a sum of 1 and its variance, and explain what experiment the claimed square would describe.

<details markdown="1"><summary>Hint</summary>

The two appearances of B are the same outcome.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$
\begin{aligned}
&G_{B+B}(t)=\frac12+\frac12t^2,\\
&P(B+B=1)=0,\\
&E(B+B)=1,\\
&\operatorname{Var}(B+B)=1,\\
&[G_B(t)]^2=\frac14+\frac12t+\frac14t^2.
\end{aligned}
$$

The claimed square describes two independent Bernoulli copies; its sum variance would be 1/2.

</details>

</section>

## Repair moments, derivations or independence {#retry}

If the raw second moment is missing, do retry 1. If any of the four derivations was recalled as a formula, redo its matching derivation below from the stated masses. If a product was used without independence, do retry 3.

<section class="lesson-check" id="retry-1" markdown="1">

**Retry (self-written):** For $G(t)=(1+t+t^2)/3$, find $P(X=0)$, $E(X^2)$ and variance.

<details markdown="1"><summary>Hint</summary>

Write the factorial-to-raw moment identity first.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$
\begin{aligned}
&P(X=0)=1/3,\\
&G'(1)=1,\\
&G''(1)=2/3,\\
&E(X^2)\\
&\quad=2/3+1\\
&\quad=5/3,\\
&\operatorname{Var}(X)\\
&\quad=5/3-1\\
&\quad=2/3.
\end{aligned}
$$

</details>

</section>

### Rebuild each distribution with changed coding or data {#retry-2}

<section class="lesson-check" id="retry-2-bernoulli" markdown="1">

**Derivation retry A (self-written):** A trial succeeds with probability p, but F records a failure as 1 and a success as 0. Derive the PGF from the masses and obtain both moments. Check its coefficients and p=0,1.

<details markdown="1"><summary>Hint</summary>

The coefficient follows the recorded value, not the word success.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$
\begin{aligned}
&G_F(t)=pt^0+qt^1=p+qt,\\
&G_F(1)=1,\\
&[t^1]G_F=q,\\
&E(F)=q,\\
&\operatorname{Var}(F)=q-q^2=pq,\\
&p=0:\ G_F=t,\\
&p=1:\ G_F=1.
\end{aligned}
$$

</details>

</section>

<section class="lesson-check" id="retry-2-binomial" markdown="1">

**Derivation retry B (self-written):** N counts successes in three independent trials, each with success probability 0.4. Derive its PGF by summing its masses, check the coefficient of t² and normalisation, and obtain its mean and variance by differentiation.

<details markdown="1"><summary>Hint</summary>

Use all four possible success counts, including zero.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$
\begin{aligned}
&G_N(t)\\
&\quad=\sum_{k=0}^{3}\binom3k0.6^{3-k}(0.4t)^k\\
&\quad=(0.6+0.4t)^3,\\
&G_N(1)=1,\\
&[t^2]G_N=0.288,\\
&G_N'(1)=1.2,\\
&G_N''(1)=0.96,\\
&\operatorname{Var}(N)=0.96+1.2-1.44=0.72.
\end{aligned}
$$

</details>

</section>

<section class="lesson-check" id="retry-2-uniform" markdown="1">

**Derivation retry C (self-written):** V is uniform on 0,...,m−1. Derive the PGF and its first two factorial moments directly from the finite sum, hence its variance. Check the constant coefficient, G(1) and m=1.

<details markdown="1"><summary>Hint</summary>

There is now a constant term and no compulsory factor t.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$
\begin{aligned}
&G_V(t)=\frac1m\sum_{k=0}^{m-1}t^k,\\
&G_V(t)=\frac{1-t^m}{m(1-t)}\quad(t\ne1),\\
&G_V(1)=1,\\
&[t^0]G_V=1/m,\\
&G_V'(1)=\frac{m-1}2,\\
&G_V''(1)=\frac{(m-1)(m-2)}3,\\
&\operatorname{Var}(V)=\frac{m^2-1}{12}.
\end{aligned}
$$

At m=1, V=0 and G=1; both derivatives and variance are zero.

</details>

</section>

<section class="lesson-check" id="retry-2-geometric" markdown="1">

**Derivation retry D (self-written):** Y counts failures before the first success with probability 0<p≤1 per independent trial. Derive its PGF from the masses and its mean and variance from derivatives. Check G(0), G(1), the coefficient of t² for p=0.4, and p=1.

<details markdown="1"><summary>Hint</summary>

Start at k=0 and keep the series condition.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$
\begin{aligned}
&G_Y(t)\\
&\quad=\sum_{k=0}^{\infty}pq^kt^k\\
&\quad=\frac{p}{1-qt},\\
&\lvert qt\rvert<1,\\
&G_Y'(1)=q/p,\\
&G_Y''(1)=2q^2/p^2,\\
&\operatorname{Var}(Y)\\
&\quad=2q^2/p^2+q/p-q^2/p^2\\
&\quad=q/p^2,\\
&G_Y(0)=p,\\
&G_Y(1)=1,\\
&p=0.4:\quad [t^2]G_Y=0.144.
\end{aligned}
$$

At p=1, Y=0 and G=1. The mean changes from trial count by one, while the variance is unchanged.

</details>

</section>

<section class="lesson-check" id="retry-3" markdown="1">

**Retry 3 (self-written):** X is uniform on 0,1,2 and Y=2−X. Derive the PGF of their sum from the outcomes. Compare it with the product of their marginal PGFs and explain why the two differ.

<details markdown="1"><summary>Hint</summary>

Determine the sum before any differentiation.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$
\begin{aligned}
&X+Y=2,\\
&G_{X+Y}(t)=t^2,\\
&G_X(t)=G_Y(t)=\frac{1+t+t^2}3,\\
&G_X(t)G_Y(t)\\
&\quad=\frac{1+2t+3t^2+2t^3+t^4}9,\\
&\operatorname{Var}(X+Y)=0.
\end{aligned}
$$

The product describes independent copies and has variance 4/3. Here one variable determines the other; they are dependent.

</details>

</section>

## Return after linear combinations {#later-review}

<section class="lesson-check" id="later-task" markdown="1">

**Later review (self-written):** K counts successes in two fair independent trials. Separately, T counts trials through first success in a fresh sequence of fair independent trials; the sequences are independent. Derive each PGF from its defining probability sum, form the PGF of K+T, and find P(K+T=2), its mean and variance. Check the probability without expanding the whole product.

<details markdown="1"><summary>Hint</summary>

Use outcome counts to find which pairs can sum to two.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$
\begin{aligned}
&G_K(t)\\
&\quad=\sum_{k=0}^{2}\binom2k\frac{t^k}4,\\
&G_T(t)\\
&\quad=\sum_{r=1}^{\infty}\frac{t^r}{2^r}
\quad(\lvert t\rvert<2).
\end{aligned}
$$

$$
\begin{aligned}
&G_K(t)=\left(\frac{1+t}2\right)^2,\\
&G_T(t)=\frac{t}{2-t},\\
&G_{K+T}(t)\\
&\quad=\left(\frac{1+t}2\right)^2\frac{t}{2-t},\\
&P(K+T=2)\\
&\quad=P(K=0)P(T=2)\\
&\qquad+P(K=1)P(T=1)\\
&\quad=\frac14\frac14+\frac12\frac12\\
&\quad=\frac5{16},\\
&E(K+T)=1+2=3,\\
&\operatorname{Var}(K+T)=\frac12+2=\frac52.
\end{aligned}
$$

</details>

</section>

## Decide your next step {#next-step}

Continue to linear combinations when you can rebuild all four PGFs and verify a coefficient and both moments for each. If only one family fails, redo its matching derivation retry, not a formula-copying exercise. If factorial moments fail, revisit the derivative argument and retry 1. After linear combinations, do the mixed later review and return to the [geometric delayed review](/alevel/as-further-mathematics/geometric-distribution/#later-review) to connect the failure-count model.

## Sources and scope {#sources}

Scope follows 9665 v5.2. The paired questions and mark schemes below informed the required evidence; these exercises do not reproduce their questions or award official marks.

- [OxfordAQA 9665 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf), FS1.4.
- FM02 June 2024 Q7; QP pp.14–15, MS p.13. [FM02 June 2024 QP](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-question-paper.pdf) · [Final MS](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-mark-scheme.pdf).

[Previous](/alevel/as-further-mathematics/geometric-distribution/) · [Course route](/alevel/as-further-mathematics/#learning-route) · [Next](/alevel/as-further-mathematics/linear-combinations/)
