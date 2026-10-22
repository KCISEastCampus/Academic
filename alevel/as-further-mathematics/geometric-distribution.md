---
title: "Geometric trials and moment derivations"
layout: subjects
mathjax: true
grade: as
subject: as-further-mathematics
lang: en
permalink: /alevel/as-further-mathematics/geometric-distribution/
toc_headings: h2, h3
study_page: true
---

[AS Further Mathematics](/alevel/as-further-mathematics/) · S3 · FS1.3

All demonstrations, scaffolded attempts, independent tasks and retries here are **self-written**, with no official marks. Write your method and reasons before opening hints and solutions separately.

## Which event does k count? {#model}

**Start:** describe the sequence “failure, failure, success”. **Goal:** justify a geometric model, handle tails and derive both moments. Independent trials with the same success probability $0<p\le1$ are required. Let $q=1-p$, and X count **trials up to and including the first success**, starting at 1.

$$P(X=k)=q^{k-1}p\quad(k=1,2,\ldots);\qquad P(X>k)=q^k,\quad P(X\le k)=1-q^k\quad(k\ge0\text{ integer}).$$

The exponent counts failures. If instead Y counts failures before success, then $Y=X-1$ starts at 0 and $P(Y=j)=q^jp$. Sampling without replacement generally changes probabilities and is not this model. At $p=1$, success is certain immediately and $X=1$.

## Derivation: mean and variance {#demonstration}

For $0<p<1$, we have $0<q<1$. Differentiate the convergent geometric series inside its radius of convergence:

$$\sum_{k=0}^\infty q^k=\frac1{1-q},\quad\sum_{k=1}^\infty kq^{k-1}=\frac1{(1-q)^2},\quad\sum_{k=2}^\infty k(k-1)q^{k-2}=\frac2{(1-q)^3}.$$

$$E(X)=p\sum_{k=1}^\infty kq^{k-1}=\frac1p;\qquad E[X(X-1)]=pq\sum_{k=2}^\infty k(k-1)q^{k-2}=\frac{2q}{p^2}.$$

$$\operatorname{Var}(X)=E[X(X-1)]+E(X)-[E(X)]^2=\frac{2q}{p^2}+\frac1p-\frac1{p^2}=\frac{q}{p^2}.$$

For $p=1$, the direct constant-X calculation gives the same mean 1 and variance 0. Y has mean $q/p$ and the same variance. The finite moments are justified by geometric decay.

**Demonstration (self-written):** For $p=0.25$, find $P(X=3)$, $P(X>4)$ and the moments.

$$P(X=3)=0.75^2(0.25)=0.140625,\quad P(X>4)=0.75^4=0.31640625;\qquad E(X)=4,\ \operatorname{Var}(X)=12.$$

## Scaffold and independent choice {#practice}

**Scaffold (self-written):** Explain why $P(X=1)=p$, and fill the missing exponent in $P(X=5)=q^{\square}p$.

<details markdown="1"><summary>Scaffold check</summary>

No failures precede success on trial 1; four failures precede success on trial 5, so the exponent is 4.

</details>

**Independent task (self-written):** A geometric X satisfies $P(X>2)=0.36$. Find p, $P(X=4\mid X>2)$, $E(X)$ and $\operatorname{Var}(X)$. Would the same model apply to drawing cards without replacement until a red card appears? Explain.

<details markdown="1"><summary>Hint</summary>

Use the nonnegative square root for q and define the conditioning event before dividing probabilities. Check independence and constant probability in the card setting.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$q^2=0.36\Rightarrow q=0.6,\ p=0.4;\qquad P(X=4\mid X>2)=\frac{q^3p}{q^2}=qp=0.24.$$

$$E(X)=2.5,\qquad\operatorname{Var}(X)=3.75.$$

Cards without replacement do not have independent, constant-probability trials. The geometric model therefore needs replacement or another explicit independent-trial assumption.

</details>

## Diagnose and retry {#retry}

An off-by-one result often comes from mixing trials with failures. Write the shortest possible outcome before choosing an exponent.

**Retry (self-written):** For independent trials with $p=0.4$, let Y count failures before success. Find $P(Y=0)$, $E(Y)$ and $\operatorname{Var}(Y)$.

<details markdown="1"><summary>Retry check</summary>

$$P(Y=0)=0.4,\qquad E(Y)=1.5,\qquad\operatorname{Var}(Y)=3.75.$$

</details>

## Sources and scope {#sources}

Scope follows 9665 v5.2. The paired questions and mark schemes below informed the required evidence; these exercises do not reproduce their questions or award official marks.

- [OxfordAQA 9665 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf), FS1.3.
- FM02 June 2024 Q8(a); QP p.16, MS p.14. [FM02 June 2024 QP](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-question-paper.pdf) · [Final MS](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-mark-scheme.pdf).

[Previous](/alevel/as-further-mathematics/discrete-uniform/) · [Course route](/alevel/as-further-mathematics/#learning-route) · [Next](/alevel/as-further-mathematics/generating-functions/)
