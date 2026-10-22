---
title: "Numerical roots with traceable updates"
layout: subjects
mathjax: true
grade: as
subject: as-further-mathematics
lang: en
permalink: /alevel/as-further-mathematics/numerical-roots/
toc_headings: h2, h3
study_page: true
---

[AS Further Mathematics](/alevel/as-further-mathematics/) · B4 · FPP1.3

All demonstrations, scaffolded attempts, independent tasks and retries here are **self-written**, with no official marks. Write your method and reasons before opening hints and solutions separately.

## What does an approximation certify? {#model}

**Start:** for $f(x)=x^3-x-1$, find $f(1),f(2)$: $-1,5$. **Goal:** explain and execute bracket, chord and tangent updates with a complete chain. You need function evaluation, straight lines and polynomial derivatives. A sign change gives a root only with continuity on the entire interval. It does not give uniqueness; here $f'(x)=3x^2-1>0$ on $[1,2]$ supplies that.

## Demonstration: three different updates {#demonstration}

**Bisection:** test the current midpoint, retain the half with opposite endpoint signs, and stop if the midpoint is exactly a root.

| Step | $a$ | $b$ | $c$ | $f(c)$ | Retained bracket |
| --- | --- | --- | --- | --- | --- |
| 1 | 1 | 2 | 1.5 | 0.875 | [1,1.5] |
| 2 | 1 | 1.5 | 1.25 | −0.296875 | [1.25,1.5] |
| 3 | 1.25 | 1.5 | 1.375 | 0.224609375 | [1.25,1.375] |
| 4 | 1.25 | 1.375 | 1.3125 | −0.051513671875 | [1.3125,1.375] |
| 5 | 1.3125 | 1.375 | 1.34375 | 0.082611083984375 | [1.3125,1.34375] |

The retained bracket midpoint is $1.328125$, with absolute error at most $0.015625$; it is not the last midpoint tested. After $n$ halvings the width is $1/2^n$ and midpoint error at most $1/2^{n+1}$. At least nine halvings guarantee error at most $0.001$.

**Linear interpolation:** the endpoint chord meets the axis at $c$. **Newton:** the tangent at the current x meets the axis at the next x; the derivative must be nonzero.

$$c=a-\frac{f(a)(b-a)}{f(b)-f(a)};\qquad x_{n+1}=x_n-\frac{f(x_n)}{f'(x_n)}.$$

$$c=1-\frac{(-1)(2-1)}{5-(-1)}=\frac76;\qquad x_0=1.5,\quad x_1=1.5-\frac{0.875}{5.75}=1.347826086\ldots$$

![For f(x)=x³−x−1, the endpoint chord crosses at 7/6 and the tangent at x=1.5 crosses near 1.348; axes and bracket endpoints are labelled.](/alevel/as-further-mathematics/diagrams/numerical.svg)

Interpolation need not halve a bracket. Newton may leave the interval or fail at a zero derivative. Neither inherits the bisection error bound. Close successive values and displayed decimals alone do not guarantee root error; retain working precision and justify any bound separately.

## Scaffold and independent choice {#practice}

**Scaffold (self-written):** For $x^2-2$ on $[1,2]$, test the midpoint and retain a bracket. Calculate one Newton update from $x_0=1.5$.

<details markdown="1"><summary>Scaffold check</summary>

$$f(1.5)=0.25,\quad [1,1.5];\qquad x_1=1.5-\frac{0.25}{3}=\frac{17}{12}.$$

</details>

**Independent task (self-written):** Assess “$1/x$ changes sign on $[-1,1]$, so it has a root there.” For $x^2-3$ on $[1,2]$, find an estimate with guaranteed absolute error no greater than $1/16$, showing every retained interval. Also find the chord estimate from the original endpoints.

<details markdown="1"><summary>Hint</summary>

Check continuity first. Choose a method with a bracket-width guarantee; count updates rather than decimal places.

</details>

<details markdown="1"><summary>Solution and check</summary>

The first claim fails: $1/x$ is undefined at 0 and has no zero. The second function is continuous and strictly increasing on the interval.

$$[1,2]\xrightarrow{c=1.5,\ f=-0.75}[1.5,2]\xrightarrow{c=1.75,\ f=0.0625}[1.5,1.75]\xrightarrow{c=1.625,\ f=-0.359375}[1.625,1.75].$$

$$\hat x=1.6875,\quad \lvert\hat x-x_*\rvert\le\frac1{16};\qquad c_{\text{chord}}=1-\frac{(-2)(1)}{1-(-2)}=\frac53.$$

The chord estimate has no such midpoint guarantee.

</details>

## Diagnose and retry {#retry}

A missing endpoint update breaks the evidence chain. If you used a solver result, rebuild the intervals from signs. For Newton failure, check the denominator before adding precision.

**Retry (self-written):** Is Newton defined for $f(x)=x^3-1$ at $x_0=0$? Give a valid initial bracket instead.

<details markdown="1"><summary>Retry check</summary>

No: $f'(0)=0$. Continuity and opposite signs give bracket $[0,2]$; its midpoint is exactly the root 1.

</details>

## Sources and scope {#sources}

Scope follows 9665 v5.2. The paired questions and mark schemes below informed the required evidence; these exercises do not reproduce their questions or award official marks.

- [OxfordAQA 9665 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf), FPP1.3.
- FM02 June 2024 Q3; QP p.6, MS p.6. [FM02 June 2024 QP](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-question-paper.pdf) · [Final MS](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-mark-scheme.pdf).

[Previous](/alevel/as-further-mathematics/linearisation/) · [Course route](/alevel/as-further-mathematics/#learning-route) · [Next](/alevel/as-further-mathematics/euler-method/)
