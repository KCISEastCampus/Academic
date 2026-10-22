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
---

[AS Further Mathematics](/alevel/as-further-mathematics/) · S2 · FS1.2

All demonstrations, scaffolded attempts, independent tasks and retries here are **self-written**, with no official marks. Write your method and reasons before opening hints and solutions separately.

## What does equally likely mean here? {#model}

**Start:** list the integers strictly between 2.5 and 6.2. **Goal:** specify a discrete support, handle endpoints and derive moments. This is a discrete model on consecutive integers, not a continuous density. Let integers $a\le b$, $N=b-a+1$. Each of the N points has mass $1/N$.

$$P(X=x)=1/N\quad(x\in\{a,a+1,\ldots,b\});\qquad P(X=x)=0\quad\text{otherwise}.$$

Count admissible integers inside both the requested interval and the support. The CDF has jumps: at a support point it includes that point's mass.

$$F(x)=\begin{cases}0&x<a\\(\lfloor x\rfloor-a+1)/N&a\le x<b\\1&x\ge b.\end{cases}$$

![Discrete uniform distribution on 1,2,3,4: four equal probability bars of height 1/4 and a step CDF with closed right-continuous values and open left limits.](/alevel/as-further-mathematics/diagrams/uniform.svg)

## Derivation: moments before memorisation {#demonstration}

Let U be uniform on $1,\ldots,N$, with integer $N\ge1$. Use the sum and square-sum formulas, then subtract the square of the mean.

$$E(U)=\frac1N\sum_{r=1}^Nr=\frac{N+1}2;\qquad E(U^2)=\frac1N\sum_{r=1}^Nr^2=\frac{(N+1)(2N+1)}6.$$

$$\operatorname{Var}(U)=\frac{(N+1)(2N+1)}6-\frac{(N+1)^2}4=\frac{N^2-1}{12}.$$

Since $X=U+a-1$, translation shifts the mean but leaves variance unchanged. These formulas also work for $N=1$ (variance zero).

$$E(X)=\frac{a+b}2;\qquad\operatorname{Var}(X)=\frac{N^2-1}{12}.$$

**Demonstration (self-written):** X is uniform on $\{-2,-1,0,1,2,3,4\}$. Find $P(X>1.5)$ and its moments.

$$N=7,\quad P(X>1.5)=3/7,\quad E(X)=1,\quad\operatorname{Var}(X)=4.$$

## Scaffold and independent choice {#practice}

**Scaffold (self-written):** With X as above, compare $P(X<2)$ and $P(X\le2)$.

<details markdown="1"><summary>Scaffold check</summary>

$$P(X<2)=4/7;\qquad P(X\le2)=5/7.$$

</details>

**Independent task (self-written):** U is uniform on $\{1,\ldots,n\}$ with variance 4. Find integer n and $P(2.5<U\le6.2)$. Another student reports variance 3 for such a model: is any positive integer n possible? Justify.

<details markdown="1"><summary>Hint</summary>

Invert the variance formula but enforce integer n. Count integer outcomes, not interval length.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$n^2-1=48\Rightarrow n=7;\qquad U=3,4,5,6\Rightarrow P=4/7.$$

$$\operatorname{Var}(U)=3\Rightarrow n^2=37.$$

No positive integer n has square 37, so the second report is incompatible with the stated model.

</details>

## Diagnose and retry {#retry}

Using interval length treats a discrete model as continuous. A non-integer support size is a failed model check, not a quantity to round.

**Retry (self-written):** Y is uniform on $\{-3,-2,-1,0,1,2,3\}$. Find $P(\lvert Y\rvert<2)$, mean and variance.

<details markdown="1"><summary>Retry check</summary>

$$P(\lvert Y\rvert<2)=3/7,\qquad E(Y)=0,\qquad\operatorname{Var}(Y)=4.$$

</details>

## Sources and scope {#sources}

Scope follows 9665 v5.2. The paired questions and mark schemes below informed the required evidence; these exercises do not reproduce their questions or award official marks.

- [OxfordAQA 9665 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf), FS1.2.
- FM02 June 2024 Q8(b)(i); QP p.17, MS pp.14–15. [FM02 June 2024 QP](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-question-paper.pdf) · [Final MS](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-mark-scheme.pdf).

[Previous](/alevel/as-further-mathematics/bayes/) · [Course route](/alevel/as-further-mathematics/#learning-route) · [Next](/alevel/as-further-mathematics/geometric-distribution/)
