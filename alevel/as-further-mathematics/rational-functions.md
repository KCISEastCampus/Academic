---
title: "Rational functions: graphs and range"
layout: subjects
mathjax: true
grade: as
subject: as-further-mathematics
lang: en
permalink: /alevel/as-further-mathematics/rational-functions/
toc_headings: h2, h3
study_page: true
---

[AS Further Mathematics](/alevel/as-further-mathematics/) · A1 · FP1.1

All demonstrations, scaffolded attempts, independent tasks and retries here are **self-written**, with no official marks. Write your method and reasons before opening hints and solutions separately.

## What does a rational graph tell us? {#model}

**Start:** factor $x^2-x-2$; check $(x-2)(x+1)$. **Goal:** explain branches, intersections, inequalities and attainable heights without calculus. You need quadratic equations, factorisation and sign inequalities.

A rational function is a quotient of polynomials. FP1.1 uses linear/linear, linear/quadratic and monic quadratic/monic quadratic forms. Retain zeros of the original denominator as forbidden values even after cancellation. Remaining denominator zeros give vertical asymptotes; a cancelled zero may leave a hole. Smaller numerator degree gives horizontal asymptote $y=0$; equal degrees give the ratio of leading coefficients. A horizontal asymptote may be crossed.

## Demonstration: connect shape and algebra {#demonstration}

$$f(x)=\frac{x+1}{x-2}=1+\frac3{x-2},\qquad x\ne2.$$

The asymptotes are $x=2,y=1$; intercepts are $(-1,0),(0,-1/2)$. Left of 2 the curve lies below 1, and right of 2 above 1. To intersect $y=x$, solve $x^2-3x-1=0$ with $x\ne2$: both $x=(3\pm\sqrt{13})/2$ are admissible and $y=x$.

![Graph of y=(x+1)/(x−2), labelled intercepts and dashed asymptotes x=2, y=1.](/alevel/as-further-mathematics/diagrams/rational.svg)

For range, a height $k$ must produce an admissible real intersection. Consider a quadratic/quadratic function:

$$g(x)=\frac{x^2+2}{x^2-4x},\quad x\ne0,4;\qquad (1-k)x^2+4kx+2=0.$$

$$k\ne1:\quad D=16k^2+8k-8=8(2k-1)(k+1)\ge0.$$

Neither 0 nor 4 solves this equation. When $k=1$ it reduces to $4x+2=0$, giving the legal $x=-1/2$. Thus the range is $k\le-1$ or $k\ge1/2$. At $D=0$ repeated roots give the attained extrema $(1,-1),(-2,1/2)$. A degree reduction, hole or limiting height needs separate checking; a range boundary need not be stationary.

## Scaffold and independent choice {#practice}

**Scaffold (self-written):** Solve $f(x)>0$ by marking signs in the intervals cut by $-1,2$.

<details markdown="1"><summary>Scaffold check</summary>

Signs are $+,-,+$, so $x<-1$ or $x>2$. The zero is excluded by the strict inequality; 2 is forbidden. Never multiply across an unknown denominator sign.

</details>

**Independent task (self-written):** For $h(x)=(x^2-1)/(x^2-x-2)$, find domain and range, sketch missing points and asymptotes, and solve $h(x)>2$. Justify excluded heights.

<details markdown="1"><summary>Hint</summary>

Factor but retain original exclusions. Does the missing point's height occur elsewhere? Examine the sign of $h(x)-2$.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$h(x)=\frac{x-1}{x-2},\quad x\ne-1,2;\qquad h(x)-2=\frac{3-x}{x-2}.$$

Hole $(-1,2/3)$; asymptotes $x=2,y=1$. Each height except 1 gives a unique candidate x, but height $2/3$ gives only the forbidden $-1$. Range: all real numbers except $1,2/3$. The inequality gives $2<x<3$.

</details>

## Diagnose and retry {#retry}

Including $-1$ means cancellation restored a forbidden input. An interval crossing 2 suggests an unchecked denominator sign. Retry without a supplied method.

**Retry (self-written):** Solve $x/(x^2-1)\ge0$, explaining endpoints.

<details markdown="1"><summary>Retry check</summary>

$$x\in(-1,0]\cup(1,\infty).$$

Exclude both poles; include the numerator zero. This linear/quadratic form has horizontal asymptote $y=0$.

</details>

## Sources and scope {#sources}

Scope follows 9665 v5.2. The paired questions and mark schemes below informed the required evidence; these exercises do not reproduce their questions or award official marks.

FM01 specimen identity: the QP body says **Specimen 2018 Morning**; its filename contains 2019/v3 and footer versions vary. The officially paired MS is a specimen with copyright 2017, not a live-exam Final MS.

- [OxfordAQA 9665 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf), FP1.1.
- FM01 specimen Q9; QP pp.12–13, MS p.9. [FM01 specimen QP](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9665-FM01-international-as-further-mathematics-specimen-paper-2019-v3-1.pdf) · [Specimen MS](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9665-FM01-international-as-further-mathematics-mark-scheme-2017-v2-1.pdf).

[Course route](/alevel/as-further-mathematics/#learning-route) · [Next](/alevel/as-further-mathematics/conics-and-loci/)
