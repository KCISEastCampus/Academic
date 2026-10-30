---
title: "Euler updates and their limits"
layout: subjects
mathjax: true
grade: as
subject: as-further-mathematics
lang: en
permalink: /alevel/as-further-mathematics/euler-method/
toc_headings: "#start, #model, #demonstration, #accuracy, #practice, #retry, #later-review, #next-step, #sources"
study_page: true
reading_layout: true
---

[AS Further Mathematics](/alevel/as-further-mathematics/)

A differential equation gives a slope, not the next y-value. Euler’s method uses that slope to make a short straight step, then recalculates at the new approximate point. Learn to keep x and y synchronised, travel in either direction and separate a numerical output from an error guarantee.

## Before you start {#start}

You need substitution, signed increments and [local tangent approximation](/alevel/as-further-mathematics/rates-and-approximations/). Distinguish solving an equation f(x)=0 from following a slope field y′=f(x,y): the first seeks an axis crossing, while the second needs an initial point. All exercises here are **self-written**, without official marks. Write each old point and slope before revealing help.

## Turn a local slope into a step {#model}

For a small signed change h, the tangent approximation to the true solution gives

$$y(x+h)\approx y(x)+h\,y'(x).$$

Because y′=f(x,y), use the slope at the current approximate point to define the next numerical value. The recurrence defines the sequence exactly; the sequence approximates the true solution:

$$\begin{aligned}
s_n&=f(x_n,y_n),\\
x_{n+1}&=x_n+h,\\
y_{n+1}&=y_n+h s_n.
\end{aligned}$$

Both inputs of f belong to the same old row. Replacing x by the new value while keeping old y changes the method. Choose the sign of h from the direction of travel: positive h increases x, negative h decreases it. Backward stepping here means a negative h in this same explicit recurrence.

Count steps before calculating, check the formula’s domain at each row, and make sure the final x is the requested endpoint. Do not round each slope unnecessarily. If a fixed given step cannot land on the endpoint, state that and check the instructions before changing the last step.

## Keep the whole update together {#demonstration}

<section class="worked-example" markdown="1">

### Two forward steps

**Demonstration (self-written):** For $y'=x-y$, $y(0)=1$, use $h=0.2$ to estimate $y(0.4)$.

The total x-change is 0.4, so two steps of 0.2 are needed. At (0,1) the slope is −1; the first segment has horizontal change 0.2 and vertical change −0.2:

$$\begin{aligned}
s_0&=0-1=-1,\\
y_1&=1+0.2(-1)=0.8,\\
x_1&=0.2.
\end{aligned}$$

Now restart at the approximate point (0.2,0.8). Its slope is −0.6, not the initial slope and not a slope using x=0.4:

$$\begin{aligned}
s_1&=0.2-0.8=-0.6,\\
y_2&=0.8+0.2(-0.6)=0.68,\\
x_2&=0.4.
\end{aligned}$$

Thus $y(0.4)\approx0.68$. The table records the same two steps; it is not a different calculation.

| Old x | Old y | Old-point slope | New y |
| --- | --- | --- | --- |
| 0 | 1 | −1 | 0.8 |
| 0.2 | 0.8 | −0.6 | 0.68 |

![Euler polygon for y′=x−y from (0,1) with h=0.2; points (0.2,0.8) and (0.4,0.68), slopes and a distinct exact curve are labelled.](/alevel/as-further-mathematics/diagrams/euler.svg){: width="560" height="500" }

Each line segment follows a slope at its old approximate point. The exact curve changes its slope continuously, while Euler holds a single slope throughout each segment. That difference produces discretisation error even with exact arithmetic.

</section>

## What changing the step tells you {#accuracy}

For checking this example, the supplied exact comparison function is below. Deriving an analytic solution is not a prerequisite: differentiate this given function and substitute it in the differential equation and initial value.

$$\begin{aligned}
y(x)&=x-1+2e^{-x},\\
y'(x)&=1-2e^{-x}=x-y(x),\\
y(0)&=1.
\end{aligned}$$

Its value at 0.4 is about 0.740640092. Repeating from the same initial point with h=0.1 gives the sequence

$$\begin{aligned}
y_0&=1,\\
y_1&=0.9,\\
y_2&=0.82,\\
y_3&=0.758,\\
y_4&=0.7122.
\end{aligned}$$

The smaller step is closer here: absolute errors are about 0.060640092 and 0.028440092. That observed comparison is not a general error bound. On a finite interval, appropriate smoothness of the solution and regularity of f, with stable sufficiently small steps, support convergence as the step tends to zero. Rounding and instability can affect finite runs; each smaller step does not automatically improve every rounded answer. Two close numerical answers do not certify a stated accuracy.

<section class="lesson-check" markdown="1">

#### Pause 1 {#scaffold}

**Scaffold (self-written):** For $y'=2x-y$, $y(0)=2$, $h=0.1$, fill two old-point updates to reach $x=0.2$.

<details markdown="1"><summary>Hint</summary>

In each slope evaluation, use both values from the same old row.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$\begin{aligned}
y_1&=2+0.1(0-2)=1.8,\\
y_2&=1.8+0.1(0.2-1.8)=1.64.
\end{aligned}$$

The old x for the second step is 0.1, so 2x=0.2. Using 0.2 as the old x instead would double that contribution incorrectly. Return to [the synchronised recurrence](#model) if the row labels caused trouble.

</details>

</section>

## Work independently {#practice}

<section class="lesson-check" markdown="1">

#### Question 1 {#practice-1}

**Independent task (self-written):** For $y'=x+y$, $y(0)=1$, estimate $y(-0.2)$ using steps of magnitude 0.1 and show all updates. A student uses $y_1=1-0.1(-0.1+1)=0.91$. Identify the first error. Do your final displayed digits certify the true error?

<details markdown="1"><summary>Hint</summary>

Choose the sign of h from the target endpoint; keep the old x in the slope even while travelling backwards.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$\begin{aligned}
h&=-0.1,\\
(x_0,y_0)&=(0,1),\\
y_1&=1-0.1(0+1)=0.9,\\
x_1&=-0.1,\\
y_2&=0.9-0.1(-0.1+0.9)\\&=0.82,\\
x_2&=-0.2.
\end{aligned}$$

The student’s first row already uses new x with old y. Keep the initial point, repair that first update and recompute subsequent rows. The estimate 0.82 has no certified true error from displayed digits alone. For a sign or mixed-row error, revisit [signed steps](#model), then [retry 2](#retry-backward).

</details>

</section>

<section class="lesson-check" markdown="1">

#### Question 2 {#practice-2}

**Independent task (self-written):** A curve satisfies $y'=x-y$ but now has $y(0)=2$. Estimate y(0.4) first with steps of 0.2 and then with steps of 0.1. Show every old-point slope. Locate the first error in the proposed sequence

$$\begin{aligned}y_1&=1.6,\\y_2&=1.6+0.2(0.4-1.6)\\&=1.36.\end{aligned}$$

The exact comparison function is $y=x-1+3e^{-x}$: verify it and decide which of your two estimates is closer. Does their difference prove a general error bound?

<details markdown="1"><summary>Hint</summary>

Restart both runs from the changed initial value. In the second row the old x is the first updated x, not the endpoint.

</details>

<details markdown="1"><summary>Solution and check</summary>

| h | Old x | Old y | Slope |
| --- | --- | --- | --- |
| 0.2 | 0 | 2 | −2 |
| 0.2 | 0.2 | 1.6 | −1.4 |
| 0.1 | 0 | 2 | −2 |
| 0.1 | 0.1 | 1.8 | −1.7 |
| 0.1 | 0.2 | 1.63 | −1.43 |
| 0.1 | 0.3 | 1.487 | −1.187 |

$$\begin{aligned}
h=0.2:&\quad 2,\ 1.6,\ 1.32,\\
h=0.1:&\quad 2,\ 1.8,\ 1.63,\\
&\quad 1.487,\ 1.3683.
\end{aligned}$$

The first proposed value is correct; the second uses new x=0.4 instead of old x=0.2. All rows after it must be recomputed.

$$\begin{aligned}
y'(x)&=1-3e^{-x}=x-y(x),\\
y(0)&=2,\\
y(0.4)&\approx1.410960138.
\end{aligned}$$

The absolute errors are about 0.090960138 and 0.042660138; h=0.1 is closer here. The difference between runs is 0.0483, which by itself certifies neither true error. For a wrong initial value or mixed old/new rows, revisit [the forward demonstration](#demonstration), then [retry 2](#retry-backward), whose slope depends on both coordinates. For wrong step counts or displayed precision use [retry 1](#retry-forward); for an overclaim return to [accuracy](#accuracy).

</details>

</section>

## Repair from the first wrong row {#retry}

Keep all correct earlier rows. Recompute every later slope from its corrected old point; adjusting only the final answer does not repair the trajectory. Choose the retry matching the direction of your difficulty.

<section class="lesson-check" markdown="1">

#### Retry 1 {#retry-forward}

**Retry (self-written):** For $y'=-2y$, $y(0)=1$, use $h=0.25$ to reach $x=0.5$. Would printing ten decimals prove ten-decimal accuracy?

<details markdown="1"><summary>Hint</summary>

Write the multiplicative factor for one step, but still track how many steps reach the endpoint.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$\begin{aligned}
y_1&=1+0.25(-2)=0.5,\\
y_2&=0.5+0.25(-1)=0.25.
\end{aligned}$$

No: extra printed digits do not reduce discretisation error. Two steps are needed to reach x=0.5. An answer reached after one step belongs to the wrong endpoint.

</details>

</section>

<section class="lesson-check" markdown="1">

#### Retry 2 {#retry-backward}

**Retry (self-written):** For $y'=2x-y$, $y(0)=2$, estimate y(-0.2) with steps of magnitude 0.1. Show both old-point slopes. Is the step $2-0.1(-0.2-2)=2.22$ a correct first update? Explain.

<details markdown="1"><summary>Hint</summary>

The increment is negative, but the initial x for the first slope is still zero.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$\begin{aligned}
h&=-0.1,\\
s_0&=2(0)-2=-2,\\
y_1&=2+(-0.1)(-2)=2.2,\\
s_1&=2(-0.1)-2.2=-2.4,\\
y_2&=2.2+(-0.1)(-2.4)=2.44.
\end{aligned}$$

The proposed update uses the new x=−0.1 in 2x, so its first slope is wrong. Negative h does not mean the slope must be negative or y must decrease; the product hs controls the change.

</details>

</section>

## Mixed review after the next lesson {#later-review}

<section class="lesson-check" markdown="1">

#### Review 1 {#review-1}

**Later review (self-written):** Choose suitable numerical procedures for these two requests and explain the different evidence they produce. (a) A curve has $y'=x+y$, y(0)=1. Use increments of 0.2 to estimate y(0.4). (b) For $z^2-2=0$ on [1,2], obtain an estimate with guaranteed error at most 1/8. State whether a negative increment from the final approximate point of (a) must recover its earlier values exactly.

<details markdown="1"><summary>Hint</summary>

One request supplies a slope and an initial value; the other supplies a sign-changing interval and an error target.

</details>

<details markdown="1"><summary>Solution and check</summary>

For (a), old-point slopes are 1 and 1.4:

$$\begin{aligned}
y_1&=1+0.2(1)=1.2,\\
y_2&=1.2+0.2(0.2+1.2)=1.48.
\end{aligned}$$

This is an Euler estimate without a certified true error. For (b), bisection tests 1.5 (value 0.25) and 1.25 (value −0.4375), retaining [1.25,1.5]. Its midpoint is 1.375 with error at most 1/8, using continuity.

Reversing the Euler step from (0.4,1.48) gives

$$\begin{aligned}y_{\text{back}}&=1.48-0.2(0.4+1.48)\\&=1.104.\end{aligned}$$

This is not 1.2: the backward step uses a different old-point slope. Signed stepping is not an exact inverse of the forward numerical step. For algorithm confusion revisit [the starting distinction](#start); for signs revisit [the recurrence](#model).

</details>

</section>

## Where to go next {#next-step}

When you can keep rows synchronised in both directions and explain the accuracy limits, continue to [Bayes’ theorem](/alevel/as-further-mathematics/bayes/). Complete [the numerical-root review](/alevel/as-further-mathematics/numerical-roots/#later-review) now; after the next lesson return here for [the mixed review](#later-review). If help was needed, close it and repeat the matching retry first.

## Sources and scope {#sources}

Scope follows 9665 v5.2. The paired questions and mark schemes below informed the required evidence; these exercises do not reproduce their questions or award official marks.

<details markdown="1"><summary>Official references</summary>

- [OxfordAQA 9665 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf), FPP1.3.
- FM02 June 2024 Q1; QP p.3, MS p.4. [FM02 June 2024 QP](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-question-paper.pdf) · [Final MS](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-mark-scheme.pdf).

</details>

[Previous](/alevel/as-further-mathematics/numerical-roots/) · [Course route](/alevel/as-further-mathematics/#learning-route) · [Next](/alevel/as-further-mathematics/bayes/)

{% include exam_topic_practice.html %}
