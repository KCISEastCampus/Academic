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
---

[AS Further Mathematics](/alevel/as-further-mathematics/) · S4 · FS1.4

All demonstrations, scaffolded attempts, independent tasks and retries here are **self-written**, with no official marks. Write your method and reasons before opening hints and solutions separately.

## How can a function encode probabilities? {#model}

**Start:** write the polynomial whose constant term is $P(X=0)$ and whose t coefficient is $P(X=1)$. **Goal:** derive four required PGFs, recover probabilities and moments, and combine independent variables. X must take nonnegative integer values. The function variable t is a placeholder, not time or a possible value of X.

$$G_X(t)=E(t^X)=\sum_{k=0}^\infty P(X=k)t^k,\quad G_X(1)=1;\qquad P(X=k)=\frac{G_X^{(k)}(0)}{k!}.$$

The series converges for $\lvert t\rvert\le1$. To use derivatives at 1 as finite moments, the corresponding moments must exist (one-sided limits from inside the radius can be used). Differentiate the probability terms:

$$G_X'(1)=\sum kP(X=k)=E(X),\qquad G_X''(1)=\sum k(k-1)P(X=k)=E[X(X-1)].$$

$$\operatorname{Var}(X)=G_X''(1)+G_X'(1)-[G_X'(1)]^2.$$

## Derive the four models {#demonstration}

**Bernoulli:** X is 0 with probability q and 1 with probability p, with $q=1-p$, $0\le p\le1$. Directly from the definition:

$$G_X(t)=qt^0+pt^1=q+pt;\quad G_X'(1)=p,\quad G_X''(1)=0\Rightarrow\operatorname{Var}(X)=p-p^2=pq.$$

**Binomial:** for integer $n\ge1$ and n independent Bernoulli trials, either sum the probability formula with the binomial theorem or multiply independent Bernoulli PGFs:

$$G_X(t)=\sum_{k=0}^n\binom nk q^{n-k}p^kt^k=(q+pt)^n.$$

$$G_X'(1)=np,\qquad G_X''(1)=n(n-1)p^2\Rightarrow\operatorname{Var}(X)=npq.$$

**Discrete uniform:** on $1,\ldots,n$, integer $n\ge1$, add each equal probability. The polynomial is valid at every t; the fraction has a removable singularity at 1.

$$G_X(t)=\frac{t+t^2+\cdots+t^n}{n}=\frac{t(1-t^n)}{n(1-t)}\quad(t\ne1),\qquad G_X(1)=1.$$

$$G_X'(1)=\frac1n\sum_{k=1}^n k=\frac{n+1}2,\quad
G_X''(1)=\frac1n\sum_{k=1}^n(k^2-k)=\frac{n^2-1}3.$$

Substituting these in the variance identity gives $(n^2-1)/12$, matching the direct-moment derivation.

**Geometric:** X counts trials through first success, $0<p\le1$, $q=1-p$. Factor out pt and sum a geometric series; at $p=1$ the result reduces to t.

$$G_X(t)=\sum_{k=1}^\infty pq^{k-1}t^k=pt\sum_{j=0}^\infty(qt)^j=\frac{pt}{1-qt}\quad(\lvert qt\rvert<1).$$

$$G_X'(t)=\frac{p}{(1-qt)^2},\quad G_X''(t)=\frac{2pq}{(1-qt)^3}\Rightarrow E(X)=\frac1p,\quad\operatorname{Var}(X)=\frac q{p^2}.$$

These four are the required foundation; the old reference notes' Poisson example is additional practice, not a replacement. For independent X,Y, factorisation of expectation proves the product rule. Independence is indispensable.

$$G_{X+Y}(t)=E(t^Xt^Y)=E(t^X)E(t^Y)=G_X(t)G_Y(t).$$

## Scaffold and independent choice {#practice}

**Scaffold (self-written):** For $G(t)=(1+2t+t^2)/4$, read the probability table and use derivatives to find the mean and variance.

<details markdown="1"><summary>Scaffold check</summary>

$$P(X=0,1,2)=(1/4,1/2,1/4);\qquad G'(1)=1,\quad G''(1)=1/2,\quad\operatorname{Var}(X)=1/2.$$

</details>

**Independent task (self-written):** A count Z has PGF $(0.2+0.8t)^2(t+t^2)/2$. Give an interpretation as a sum of independent variables, find $P(Z=2)$, $E(Z)$ and $\operatorname{Var}(Z)$. Is $H(t)=0.2-0.1t+0.9t^2$ a PGF just because $H(1)=1$?

<details markdown="1"><summary>Hint</summary>

Read the two factors as distributions. Obtain one coefficient by matching powers; moments may be checked by derivatives or independent-sum rules. Normalisation is not the only probability condition.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$Z=X+Y,\quad X\sim\operatorname{Bin}(2,0.8),\quad Y\text{ uniform on }\{1,2\},\quad X,Y\text{ independent}.$$

$$P(Z=2)=0.5(2\cdot0.2\cdot0.8)+0.5(0.2^2)=0.18;\quad E(Z)=1.6+1.5=3.1;\quad\operatorname{Var}(Z)=0.32+0.25=0.57.$$

H is not a PGF: its t coefficient would give a negative probability. A valid finite PGF needs nonnegative coefficients summing to 1.

</details>

## Diagnose and retry {#retry}

If variance equals $G''(1)$, you confused a factorial moment with a raw second moment. Expand $X^2=X(X-1)+X$.

**Retry (self-written):** For $G(t)=(1+t+t^2)/3$, find $P(X=0)$, $E(X^2)$ and variance.

<details markdown="1"><summary>Retry check</summary>

$$P(X=0)=1/3,\quad G'(1)=1,\quad G''(1)=2/3,\quad E(X^2)=5/3,\quad\operatorname{Var}(X)=2/3.$$

</details>

## Sources and scope {#sources}

Scope follows 9665 v5.2. The paired questions and mark schemes below informed the required evidence; these exercises do not reproduce their questions or award official marks.

- [OxfordAQA 9665 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf), FS1.4.
- FM02 June 2024 Q7; QP pp.14–15, MS p.13. [FM02 June 2024 QP](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-question-paper.pdf) · [Final MS](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-mark-scheme.pdf).

[Previous](/alevel/as-further-mathematics/geometric-distribution/) · [Course route](/alevel/as-further-mathematics/#learning-route) · [Next](/alevel/as-further-mathematics/linear-combinations/)
