---
title: "Finite sums and infinite-series limits"
layout: subjects
mathjax: true
grade: as
subject: as-further-mathematics
lang: en
permalink: /alevel/as-further-mathematics/series/
toc_headings: h2, h3
study_page: true
---

[AS Further Mathematics](/alevel/as-further-mathematics/) · A5 · FP1.5

All demonstrations, scaffolded attempts, independent tasks and retries here are **self-written**, with no official marks. Write your method and reasons before opening hints and solutions separately.

## Why keep the boundary terms? {#model}

**Start:** expand $(2r-1)(2r+1)=4r^2-1$. **Goal:** choose standard sums or cancellation, change lower limits and justify infinite sums by limits. You need Σ notation and algebra; induction is not an FM01 core prerequisite.

A sum is linear, so expand a polynomial before using these results. Know how to use and explain them; this lesson does not assert that the official formula booklet omits them.

$$\sum_{r=1}^n r=\frac{n(n+1)}2,\quad\sum_{r=1}^n r^2=\frac{n(n+1)(2n+1)}6,\quad\sum_{r=1}^n r^3=\frac{n^2(n+1)^2}4.$$

$$\sum_{r=1}^n(2r-1)(2r+1)=4\sum_{r=1}^nr^2-n=\frac{n(4n^2+6n-1)}3.$$

For a lower limit m, subtract the sum ending at $m-1$, not m. For differences, list enough terms to see every uncancelled boundary.

## Demonstration: step-two cancellation and a limit {#demonstration}

$$\frac1{r(r+2)}=\frac12\left(\frac1r-\frac1{r+2}\right).$$

$$S_n=\sum_{r=1}^n\frac1{r(r+2)}=\frac12\left[1+\frac12-\frac1{n+1}-\frac1{n+2}\right].$$

The cancellation band is $1,1/2,1/3,1/4,\ldots$ against $1/3,1/4,\ldots,1/(n+1),1/(n+2)$. There are two terms at each boundary because the shift is two. An infinite series is defined as the limit of partial sums, not by informal cancellation of “infinity terms”.

$$\sum_{r=1}^\infty\frac1{r(r+2)}=\lim_{n\to\infty}S_n=\frac34.$$

By contrast $\sum_{r=1}^n(2r-1)=n^2\to\infty$, so this series diverges. A few numerical partial sums can suggest a trend but do not replace either limit argument.

## Scaffold and independent choice {#practice}

**Scaffold (self-written):** Use the standard sums to evaluate $\sum_{r=3}^n(3r^2+2r)$ for integer $n\ge3$; first find the sum from 1 to n.

<details markdown="1"><summary>Scaffold check</summary>

$$\sum_{r=1}^n(3r^2+2r)=\frac{n(n+1)(2n+3)}2;\qquad \sum_{r=3}^n(3r^2+2r)=\frac{n(n+1)(2n+3)}2-21.$$

</details>

**Independent task (self-written):** For integer $n\ge3$, find a closed form for $\sum_{r=3}^n1/[r(r+1)]$ and its infinite sum. A student claims that $\sum_{r=1}^\infty 1/[r(r+1)]+\sum_{r=1}^\infty1$ is finite “because most terms cancel”. Assess the claim.

<details markdown="1"><summary>Hint</summary>

Seek a difference for the fraction; write the first and last terms. For the claim, inspect finite partial sums before taking a limit.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$\frac1{r(r+1)}=\frac1r-\frac1{r+1}\Rightarrow\sum_{r=3}^n\frac1{r(r+1)}=\frac13-\frac1{n+1}\longrightarrow\frac13.$$

The claimed combined partial sum is $1-1/(n+1)+n$, which diverges to infinity. Cancellation cannot remove the added n.

</details>

## Diagnose and retry {#retry}

If a telescoping result fails at the smallest n, count the boundary terms again. If you gave only a numerical limit, identify the term tending to zero.

**Retry (self-written):** Evaluate $\sum_{r=1}^n[r^3-(r-1)^3]$ and decide whether its infinite series converges.

<details markdown="1"><summary>Retry check</summary>

$$\sum_{r=1}^n[r^3-(r-1)^3]=n^3;\qquad n^3\to\infty\quad\text{(divergent)}.$$

</details>

## Sources and scope {#sources}

Scope follows 9665 v5.2. The paired questions and mark schemes below informed the required evidence; these exercises do not reproduce their questions or award official marks.

FM01 specimen identity: the QP body says **Specimen 2018 Morning**; its filename contains 2019/v3 and footer versions vary. The officially paired MS is a specimen with copyright 2017, not a live-exam Final MS.

- [OxfordAQA 9665 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf), FP1.5.
- FM01 specimen Q1, Q6; QP pp.2,9, MS pp.4,7. [FM01 specimen QP](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9665-FM01-international-as-further-mathematics-specimen-paper-2019-v3-1.pdf) · [Specimen MS](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9665-FM01-international-as-further-mathematics-mark-scheme-2017-v2-1.pdf).

[Previous](/alevel/as-further-mathematics/complex-numbers-and-roots/) · [Course route](/alevel/as-further-mathematics/#learning-route) · [Next](/alevel/as-further-mathematics/rates-and-approximations/)
