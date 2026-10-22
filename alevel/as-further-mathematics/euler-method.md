---
title: "Euler updates and their limits"
layout: subjects
mathjax: true
grade: as
subject: as-further-mathematics
lang: en
permalink: /alevel/as-further-mathematics/euler-method/
toc_headings: h2, h3
study_page: true
---

[AS Further Mathematics](/alevel/as-further-mathematics/) · B5 · FPP1.3

All demonstrations, scaffolded attempts, independent tasks and retries here are **self-written**, with no official marks. Write your method and reasons before opening hints and solutions separately.

## Why use the old point's slope? {#model}

**Start:** find the tangent slope at $(0,1)$ when $y'=x-y$: it is $-1$. **Goal:** synchronise Euler updates, diagnose the first wrong row and explain accuracy limits. You need substitution, derivatives and local straight-line approximation. Given an initial value and signed step h, explicit Euler defines approximate values by:

$$x_{n+1}=x_n+h,\qquad y_{n+1}=y_n+h f(x_n,y_n).$$

The recurrence is an exact definition of the numerical sequence; the sequence approximates the true solution. Evaluate both arguments of f at the old point. Check the domain at every step, use enough working precision and land on the requested endpoint. Negative h steps backwards.

## Demonstration: update and compare {#demonstration}

**Demonstration (self-written):** For $y'=x-y$, $y(0)=1$, use $h=0.2$ to estimate $y(0.4)$.

| n | $x_n$ | $y_n$ | $f(x_n,y_n)$ | $y_{n+1}$ |
| --- | --- | --- | --- | --- |
| 0 | 0 | 1 | −1 | 0.8 |
| 1 | 0.2 | 0.8 | −0.6 | 0.68 |

Thus $y(0.4)\approx0.68$. The first segment follows slope −1, the next slope −0.6; neither uses the new x in an old-point slope.

![Euler polygon for y′=x−y from (0,1) with h=0.2; points (0.2,0.8) and (0.4,0.68), slopes and a distinct exact curve are labelled.](/alevel/as-further-mathematics/diagrams/euler.svg)

For checking this demonstration only, the supplied exact comparison function is $y=x-1+2e^{-x}$; substitution verifies both derivative and initial value. Its endpoint is about $0.740640092$. With $h=0.1$, Euler instead produces $1,0.9,0.82,0.758,0.7122$. The smaller step is closer here; deriving the exact solution is not required to execute Euler.

On a finite interval, suitable smoothness and stability conditions give convergence as h tends to zero. This does not guarantee that each smaller step improves every rounded answer; two close results do not prove a particular error bound. Accumulated rounding and unstable steps can matter.

## Scaffold and independent choice {#practice}

**Scaffold (self-written):** For $y'=2x-y$, $y(0)=2$, $h=0.1$, fill two old-point updates to reach $x=0.2$.

<details markdown="1"><summary>Scaffold check</summary>

$$y_1=2+0.1(0-2)=1.8;\qquad y_2=1.8+0.1(0.2-1.8)=1.64.$$

</details>

**Independent task (self-written):** For $y'=x+y$, $y(0)=1$, estimate $y(-0.2)$ using steps of magnitude 0.1 and show all updates. A student uses $y_1=1-0.1(-0.1+1)=0.91$. Identify the first error. Do your final displayed digits certify the true error?

<details markdown="1"><summary>Hint</summary>

Choose a negative h but keep the old x in each slope. A decimal output and an error estimate are different claims.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$h=-0.1;\quad(x_0,y_0)=(0,1);\quad y_1=1-0.1(0+1)=0.9;\quad x_1=-0.1;$$

$$y_2=0.9-0.1(-0.1+0.9)=0.82;\qquad x_2=-0.2.$$

The student's first row uses new x with old y, so it is not explicit Euler. The estimate $0.82$ has no certified true error from the displayed digits alone.

</details>

## Diagnose and retry {#retry}

Preserve correct rows before the first mistake. Recompute every later row from the corrected point, not by adjusting only the final answer.

**Retry (self-written):** For $y'=-2y$, $y(0)=1$, use $h=0.25$ to reach $x=0.5$. Would printing ten decimals prove ten-decimal accuracy?

<details markdown="1"><summary>Retry check</summary>

$$y_1=1+0.25(-2)=0.5;\qquad y_2=0.5+0.25(-1)=0.25.$$

No. More display digits do not reduce discretisation error.

</details>

## Sources and scope {#sources}

Scope follows 9665 v5.2. The paired questions and mark schemes below informed the required evidence; these exercises do not reproduce their questions or award official marks.

- [OxfordAQA 9665 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf), FPP1.3.
- FM02 June 2024 Q1; QP p.3, MS p.4. [FM02 June 2024 QP](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-question-paper.pdf) · [Final MS](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-mark-scheme.pdf).

[Previous](/alevel/as-further-mathematics/numerical-roots/) · [Course route](/alevel/as-further-mathematics/#learning-route) · [Next](/alevel/as-further-mathematics/bayes/)
