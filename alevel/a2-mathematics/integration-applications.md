---
title: Integration — Trigonometric Integrals and Applications
layout: subjects
mathjax: true
grade: a2
subject: a2-mathematics
permalink: /alevel/a2-mathematics/integration-applications/
toc_headings: h2, h3
reading_layout: true
study_page: true
---

[Pure Mathematics](/alevel/a2-mathematics/) · P2.7 Integration

The same curve can help you find the area of a flat region, or the volume made by turning that region around an axis. These questions add up different things, so look at the region and axis before writing an integral. You will also practise rewriting trigonometric functions into forms you can integrate.

- **Learning:** start with [trigonometric integrals](#trigonometric-integrals), then study [area](#area) and [volume of revolution](#volume-of-revolution).
- **Homework help:** compare your question with an example. Check the identity, the limits and the axis of rotation before calculating.
- **Revision:** try [practice](#practice) with the solutions closed, then check the [quick reference](#quick-reference).

Textbook: Chapter 6, Sections 6.5–6.6 (printed pp. 95–100). The area section revises earlier definite integration and prepares you for volume questions. We write the constant of integration as $C$.
{: .lesson-meta}

<div class="lesson-notes" markdown="1">

**Starting point:** integrate powers term by term, substitute upper and lower limits, and find curve intersections; recover [AS quadratics and intersections](/alevel/as-mathematics/algebra/#l02) if needed. Trigonometric work also needs radians, double angles and the differential relation in substitution: recover [double angles](/alevel/a2-mathematics/trigonometric-functions-and-formulae/#double-angle-formulae), [standard integrals](/alevel/a2-mathematics/integration/#standard-integrals) and [substitution](/alevel/a2-mathematics/integration/#substitution). Your goal is to choose an identity, draw the region, and justify area signs or a rotating slice's radius. Revising? Start at [practice](#practice), use [repair tasks](#repair), then try [later review](#review-later) after the next lesson.

</div>

All worked examples and practice questions on this page are self-written, not official past-paper questions. No official marks are assigned.

## Trigonometric Integrals {#trigonometric-integrals}

**Use radians throughout.** The standard derivatives and integrals of trigonometric functions use radians.

| What you see | First step | Why it helps |
|---|---|---|
| An odd power of $\sin x$ | Keep one factor $\sin x$; use $\sin^2x=1-\cos^2x$ for the rest | Try $u=\cos x$, with $du=-\sin x\,dx$ |
| An odd power of $\cos x$ | Keep one factor $\cos x$; use $\cos^2x=1-\sin^2x$ for the rest | Try $u=\sin x$, with $du=\cos x\,dx$ |
| Only even powers of $\sin x$ and $\cos x$ | Use double angle identities | Replace squares by constants and cosines |
| A power of $\tan x$ | Use $\tan^2x=\sec^2x-1$ to reduce the power | Terms containing $\sec^2x$ may allow $u=\tan x$ |
{: .wide-table}

If the angle inside the brackets is $2x$ or $3x$, put that whole angle into the identity. Also account for how quickly the angle changes: differentiating multiplies by that coefficient, so integrating in reverse divides by it.

The aim of choosing an identity is to reach a form you already know how to integrate. To replace a sine or cosine by a new letter, check whether its derivative matches the factor left over; that is why the table keeps one factor aside. With only even powers, double angle identities remove squares and give a sum you can integrate term by term. The power rule for $x^n$ does not directly integrate $\sin^n x$: differentiating a power of sine introduces a cosine factor. Check that the rewrite is equal to the original before integrating.

<section class="worked-example" markdown="1">

### Example 1 — Keep one sine factor {#example-1--keep-one-sine-factor}

**Question:** Find $\displaystyle\int\sin^3(2x)\,dx$.

**Choice:** There are three matching sine factors. Keep one aside and replace the square formed by the other two with one minus cosine squared. A new letter can then stand for the cosine, while the sine left over appears in its derivative:

$$\sin^3(2x)=[1-\cos^2(2x)]\sin(2x).$$

Let $u=\cos(2x)$. Differentiating gives $du=-2\sin(2x)\,dx$. The sine factor and small change left in the original are therefore minus one half of this new differential, so

$$\int\sin^3(2x)\,dx=-\frac12\int(1-u^2)\,du.$$

The brackets now contain only the zeroth and second powers of the new letter. Integrate using the power rule, then replace the letter by the cosine again:

$$\boxed{-\frac12\cos(2x)+\frac16\cos^3(2x)+C}.$$

**Check:** Differentiation gives $\sin(2x)-\cos^2(2x)\sin(2x)=\sin^3(2x)$.

**Common mistake:** missing the minus sign or the factor $\frac12$ in $du$.

</section>

<section class="worked-example" markdown="1">

### Example 2 — Use a double angle identity {#example-2--use-a-double-angle-identity}

**Question:** Find $\displaystyle\int\cos^2(3x)\,dx$.

The square is not easy to integrate directly. A double angle identity turns it into a constant plus a cosine: use $\cos^2\theta=\frac{1+\cos(2\theta)}2$ with $\theta=3x$, doubling the whole angle:

$$\int\cos^2(3x)\,dx=\frac12\int[1+\cos(6x)]\,dx.$$

$$\boxed{\frac{x}{2}+\frac{\sin(6x)}{12}+C}.$$

**Check:** The derivative is $\frac12+\frac12\cos(6x)=\cos^2(3x)$.

**Common mistake:** replacing $\cos^2(3x)$ by $\frac{1+\cos(3x)}2$. The identity doubles the whole argument.

</section>

<section class="worked-example" markdown="1">

### Example 3 — Reduce a fourth power {#example-3--reduce-a-fourth-power}

**Question:** Find $\displaystyle\int\cos^4(2x)\,dx$.

The fourth power is a square squared. Apply a double angle identity once and expand; a cosine square remains, so apply the identity again:

$$\cos^4(2x)=\frac14[1+2\cos(4x)+\cos^2(4x)]$$

$$=\frac38+\frac12\cos(4x)+\frac18\cos(8x).$$

Now integrate each term:

$$\boxed{\frac{3x}{8}+\frac{\sin(4x)}8+\frac{\sin(8x)}{64}+C}.$$

**Check:** Differentiating gives $\frac38+\frac12\cos(4x)+\frac18\cos(8x)$, the expression above.

For a product of even powers, also look for $\sin(2x)=2\sin x\cos x$. For example, $\sin^2x\cos^2x=\frac18[1-\cos(4x)]$.

</section>

<section class="worked-example" markdown="1">

### Example 4 — Reduce a tangent power {#example-4--reduce-a-tangent-power}

**Question:** Find $\displaystyle\int\tan^3x\,dx$.

Keep one tangent factor and replace the square formed by the other two using $\tan^2x=\sec^2x-1$. The first term then contains the derivative of tangent, allowing a substitution:

$$\int\tan^3x\,dx=\int\tan x\sec^2x\,dx-\int\tan x\,dx.$$

For the first integral, let $u=\tan x$. For the second, use $\int\tan x\,dx=-\ln\lvert\cos x\rvert+C$.

$$\boxed{\frac12\tan^2x+\ln\lvert\cos x\rvert+C}.$$

**Check:** Differentiation gives $\tan x\sec^2x-\tan x=\tan^3x$.

Use this result on an interval where $\cos x\ne0$. Do not integrate across a point where $\tan x$ is undefined.

</section>

## Area {#area}

Imagine cutting the region into many narrow vertical strips. A definite integral adds function value times small width. The function value is positive above the $x$-axis and negative below it, so contributions from opposite sides can cancel. This is **signed area**.

To find how much space the region actually occupies on the page, count the part below the axis positively too. Separate the parts first, find the size of each, then add them. Taking an absolute value after cancellation cannot recover the lost area.

1. Sketch the curve and mark the required interval.
2. Find any crossings of the $x$-axis inside the interval.
3. Split the integral at those crossings. Change the sign of each part below the axis.
4. Add the positive areas. Give the answer in square units.

![Example 5: the curve x squared minus one crosses the x-axis at minus one and one, with shaded areas above and below. Example 6: the shaded region lies between the line y equals two x and the curve y equals x squared, from zero to two.](/assets/img/integration-area.svg)

<section class="worked-example" markdown="1">

### Example 5 — Split where the curve crosses the axis {#example-5--split-where-the-curve-crosses-the-axis}

**Question:** Find the total area between $y=x^2-1$ and the $x$-axis for $-2\le x\le2$.

Set the curve's height equal to zero to find $x=-1$ and $x=1$. Between them the square is less than one, so the curve is below the axis; on the two outer parts the square is greater than one, so the curve is above it. Split into three parts. The middle integral is negative, so the minus sign in front turns it into a positive area:

$$\begin{aligned}A&=\int_{-2}^{-1}(x^2-1)\,dx\\&\quad-\int_{-1}^{1}(x^2-1)\,dx\\&\quad+\int_1^2(x^2-1)\,dx.\end{aligned}$$

First find a function whose derivative is the original expression: $F(x)=\frac{x^3}{3}-x$. On each part, subtract its value at the left endpoint from its value at the right endpoint. The outer integrals each give $\frac43$ and the middle gives $-\frac43$. Our area expression reverses the middle sign, so all three areas are added:

$$A=\frac43+\frac43+\frac43=\boxed{4\text{ square units}}.$$

**Check:** $\int_{-2}^{2}(x^2-1)\,dx=\frac43$ is the signed area, not the total area. Taking the absolute value of that one answer would still be wrong.

</section>

<section class="worked-example" markdown="1">

### Example 6 — Upper curve minus lower curve {#example-6--upper-curve-minus-lower-curve}

**Question:** Find the area enclosed by $y=2x$ and $y=x^2$.

Find the left and right ends of the region, where the curves meet: $2x=x^2$ gives $x=0$ and $x=2$. Between these values, $2x\ge x^2$, because upper minus lower factors into two non-negative factors. Each vertical strip has height equal to the difference between the curves, so subtract the lower curve from the upper one:

$$A=\int_0^2(2x-x^2)\,dx=\left[x^2-\frac{x^3}{3}\right]_0^2.$$

$$\boxed{\frac43\text{ square units}}.$$

**Check:** The strip height used inside the integral is non-negative on $[0,2]$. If the upper and lower curves change places within a given interval, split the integral at the intersections.

</section>

## Volume of Revolution {#volume-of-revolution}

Turning a region fully around an axis makes a **solid of revolution**. Look at one narrow strip reaching from the axis to the curve: turning it sweeps out a thin disc. The strip's length becomes the radius. Cutting across the solid shows a circular cross-section, with area $\pi\times(\text{radius})^2$.

A thin disc has volume approximately equal to its circular area times its thickness. Make the discs thinner and add their volumes to obtain the volume integral. About the horizontal axis, stack discs from left to right; about the vertical axis, stack them from bottom to top. This tells you which variable and limits to use.

| Axis of rotation | Radius | Formula for a region between the axis and the curve |
|---|---|---|
| $x$-axis | Distance $\lvert y\rvert$ from the $x$-axis | $\displaystyle V=\pi\int_a^b y^2\,dx$ |
| $y$-axis | Distance $\lvert x\rvert$ from the $y$-axis | $\displaystyle V=\pi\int_c^d x^2\,dy$ |

**Before integrating:** draw the axis and one strip, and identify the length that becomes a radius. Square the whole radius. Then use the direction in which the discs are stacked to choose the integration variable and its start and end values. Give the result in cubic units.

These formulas describe circular slices with no hole. If the stated region does not extend to the axis, first identify the outer and inner radii; do not use one curve's radius without checking the region.

<section class="worked-example" markdown="1">

### Example 7 — Square the whole expression {#example-7--square-the-whole-expression}

**Question:** The region between $y=x+1$, the $x$-axis and the lines $x=0$ and $x=2$ is rotated completely about the $x$-axis. Find its volume.

The region turns about the horizontal axis, so use a vertical strip from the $x$-axis to the curve, of width $dx$. Turning it makes a thin disc; stack these from left to right. The whole strip length is the radius, $y=x+1$, so square the whole length: $(x+1)^2=x^2+2x+1$.

$$V=\pi\int_0^2(x+1)^2\,dx.$$

$$=\pi\left[\frac{x^3}{3}+x^2+x\right]_0^2=\boxed{\frac{26\pi}{3}\text{ cubic units}}.$$

**Common mistake:** using $x^2+1$ for $(x+1)^2$, or integrating $y$ instead of $y^2$.

**Check:** The radius increases from $1$ to $3$ over a length of $2$. The volume must lie between the cylinder volumes $2\pi$ and $18\pi$.

</section>

<section class="worked-example" markdown="1">

### Example 8 — Change the variable for the y-axis {#example-8--change-the-variable-for-the-y-axis}

**Question:** The region in $x\ge0$ enclosed by $y=x^2+2$, the line $y=6$ and the $y$-axis is rotated completely about the $y$-axis. Find its volume.

The region turns about the vertical axis, so use a horizontal strip from the $y$-axis to the curve, of thickness $dy$. The radius is the horizontal length $x$, not the vertical height $y$. Stack discs upwards: the bottom comes from $x=0$, giving $y=2$, and the top is $y=6$. Use these heights as the integration limits and rewrite the squared radius as $x^2=y-2$ to integrate with respect to height:

$$V=\pi\int_2^6(y-2)\,dy=\pi\left[\frac{(y-2)^2}{2}\right]_2^6.$$

$$\boxed{8\pi\text{ cubic units}}.$$

**Common mistake:** using the $x$-limits $0$ and $2$ in an integral with respect to $y$.

**Check:** The radius grows from $0$ to $2$. The solid fits inside a cylinder of radius $2$ and height $4$, whose volume is $16\pi$.

</section>

**Decide what you are adding before choosing the integrand, the expression after the integral sign.** For the region under $y=\sin x$ on $0\le x\le\frac\pi2$, area adds strip areas, so use the height $\sin x$; after rotation about the $x$-axis, volume adds thin discs, so use the circular area $\pi\sin^2x$. This explains the square and why a trigonometric identity may be needed first.

## Practice {#practice}

**Independent practice · 30–40 minutes**

The time is a guide. For each trigonometric integral, write the identity you use. For each area or volume, sketch the region and write the integral before calculating. Open a hint only if you need it.

Draw each application region yourself before opening help. For a volume, label the axis, one slice and its radius. The teaching diagram belongs to the examples; construct your own practice diagrams. Record your first answer, help, error and retry.

<section class="lesson-check" markdown="1">

### Q1 {#q1--an-odd-cosine-power}

Find $\displaystyle\int\cos^3x\,dx$.

<details markdown="1">
<summary>Hint</summary>

Keep one factor $\cos x$. Write $\cos^2x=1-\sin^2x$, then use $u=\sin x$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

With $u=\sin x$,

$$\int(1-u^2)\,du=u-\frac{u^3}{3}+C.$$

Substitute back:

$$\boxed{\sin x-\frac{\sin^3x}{3}+C}.$$

Differentiation gives $(1-\sin^2x)\cos x=\cos^3x$.

</details>

</section>

<section class="lesson-check" markdown="1">

### Q2 {#q2--a-product-of-powers}

Find $\displaystyle\int\sin^2x\cos^3x\,dx$.

<details markdown="1">
<summary>Hint</summary>

The cosine power is odd. Keep one factor $\cos x$ and replace the remaining $\cos^2x$ by $1-\sin^2x$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Let $u=\sin x$. Then

$$\int(u^2-u^4)\,du=\frac{u^3}{3}-\frac{u^5}{5}+C.$$

Substitute back:

$$\boxed{\frac{\sin^3x}{3}-\frac{\sin^5x}{5}+C}.$$

Differentiation gives $\sin^2x(1-\sin^2x)\cos x=\sin^2x\cos^3x$.

</details>

</section>

<section class="lesson-check" markdown="1">

### Q3 {#q3--an-even-power-with-limits}

Evaluate $\displaystyle\int_0^{\frac\pi4}\sin^2(2x)\,dx$ exactly.

<details markdown="1">
<summary>Hint</summary>

Use $\sin^2(2x)=\frac{1-\cos(4x)}2$. Keep the limits in radians.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\left[\frac{x}{2}-\frac{\sin(4x)}8\right]_0^{\frac\pi4}=\boxed{\frac\pi8}.$$

The expression being integrated is between $0$ and $1$, so the answer must be between $0$ and $\frac\pi4$.

</details>

</section>

<section class="lesson-check" markdown="1">

### Q4 {#q4--a-tangent-square}

Find $\displaystyle\int\tan^2(2x)\,dx$ on an interval where $\cos(2x)\ne0$.

<details markdown="1">
<summary>Hint</summary>

Use $\tan^2(2x)=\sec^2(2x)-1$. Remember the derivative of $2x$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\int[\sec^2(2x)-1]\,dx=\boxed{\frac12\tan(2x)-x+C}.$$

Differentiation gives $\sec^2(2x)-1=\tan^2(2x)$.

</details>

</section>

<section class="lesson-check" markdown="1">

### Q5 {#q5--area-between-two-curves}

Find the area enclosed by $y=4x-x^2$ and $y=x$.

<details markdown="1">
<summary>Hint</summary>

Find the intersections. Test a value between them to decide which curve is above the other.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$4x-x^2=x$ gives $x=0$ and $x=3$. The parabola is above the line on this interval, since their difference is $x(3-x)\ge0$.

$$A=\int_0^3(3x-x^2)\,dx=\left[\frac{3x^2}{2}-\frac{x^3}{3}\right]_0^3.$$

$$\boxed{\frac92\text{ square units}}.$$

</details>

</section>

<section class="lesson-check" markdown="1">

### Q6 {#q6--signed-integral-or-total-area}

For $y=x^2-4$ on $-3\le x\le3$, find **(a)** the definite integral and **(b)** the total area between the curve and the $x$-axis.

<details markdown="1">
<summary>Hint</summary>

The curve crosses the axis at $x=-2$ and $x=2$. Only the area calculation needs you to change the sign of the middle part.

</details>

<details markdown="1">
<summary>Solution and check</summary>

**(a)** With $F(x)=\frac{x^3}{3}-4x$,

$$\int_{-3}^3(x^2-4)\,dx=F(3)-F(-3)=\boxed{-6}.$$

**(b)** Each outer integral is $\frac73$. The middle integral is $-\frac{32}{3}$. Thus

$$A=\frac73+\frac{32}{3}+\frac73=\boxed{\frac{46}{3}\text{ square units}}.$$

The signed integral is $\frac73-\frac{32}{3}+\frac73=-6$, which checks part (a). Area is positive.

</details>

</section>

<section class="lesson-check" markdown="1">

### Q7 {#q7--choose-the-axis-and-the-variable}

**(a)** The region between $y=\cos(2x)$, the $x$-axis and the lines $x=0$ and $x=\frac\pi4$ is rotated completely about the $x$-axis. Find the volume exactly.

**(b)** The region in $x\ge0$ enclosed by $y=x^2+1$, the line $y=4$ and the $y$-axis is rotated completely about the $y$-axis. Find the volume exactly.

<details markdown="1">
<summary>Hint</summary>

For (a), use $\pi\int y^2\,dx$ and a double angle identity. For (b), use $\pi\int x^2\,dy$ and find the $y$-limits from the region.

</details>

<details markdown="1">
<summary>Solution and check</summary>

**(a)** The radius is $\cos(2x)$, so

$$V=\pi\int_0^{\frac\pi4}\cos^2(2x)\,dx.$$

$$=\pi\left[\frac{x}{2}+\frac{\sin(4x)}8\right]_0^{\frac\pi4}.$$

$$\boxed{\frac{\pi^2}{8}\text{ cubic units}}.$$

The radius is at most $1$, and the length is $\frac\pi4$. The result is smaller than the cylinder volume $\frac{\pi^2}{4}$.

**(b)** Here $x^2=y-1$ and $1\le y\le4$:

$$V=\pi\int_1^4(y-1)\,dy=\pi\left[\frac{(y-1)^2}{2}\right]_1^4.$$

$$\boxed{\frac{9\pi}{2}\text{ cubic units}}.$$

At $y=4$, the radius is $\sqrt3$. The solid fits inside a cylinder of height $3$ and volume $9\pi$.

</details>

</section>

## Repair the cause {#repair}

Close the original answer and attempt the matching fresh task.

| Error | Cause and return point | Retry |
| --- | --- | --- |
| Wrong argument or coefficient | Check the identity, then the reverse chain rule; [trigonometric integrals](#trigonometric-integrals), Examples 1–4 | [A](#repair-trig) |
| Absolute value of one signed integral used as total area | Cancellation cannot be repaired at the end; [area](#area), Examples 5–6 | [B](#repair-area) |
| Radius, variable and limits disagree | Redraw the slice with radius and thickness; [volume](#volume-of-revolution), Examples 7–8 | [C](#repair-volume) |

<section class="lesson-check" markdown="1">

### Expression A {#repair-trig}

Find $\displaystyle\int\sin^2x\cos^2x\,dx$. Explain your first rewrite.

<details markdown="1">
<summary>Hint</summary>

Combine the two factors before treating the square.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\sin^2x\cos^2x=\frac14\sin^2(2x)=\frac18[1-\cos(4x)],$$

$$\int\sin^2x\cos^2x\,dx=\frac{x}{8}-\frac{\sin(4x)}{32}+C.$$

Differentiate to recover the integrand and check the whole argument and coefficient.

</details>

</section>

<section class="lesson-check" markdown="1">

### Region B {#repair-area}

Sketch $y=x(x-1)$ for $0\le x\le2$. Find the definite integral and the total area with the $x$-axis.

<details markdown="1">
<summary>Hint</summary>

Mark the zeros and check the sign on both parts.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$F(x)=\frac{x^3}{3}-\frac{x^2}{2},\qquad \int_0^2x(x-1)\,dx=\frac23.$$

$$A=-\int_0^1x(x-1)\,dx+\int_1^2x(x-1)\,dx=\frac16+\frac56=1.$$

The sketch is below the axis for $0<x<1$ and above it for $1<x\le2$; area is in square units.

</details>

</section>

<section class="lesson-check" markdown="1">

### Solid C {#repair-volume}

The region bounded by $x=y^2$, the $y$-axis and $y=2$, with $y\ge0$, is rotated completely about the $y$-axis. Draw a slice and find the volume.

<details markdown="1">
<summary>Hint</summary>

The radius is $x$, already expressed in terms of $y$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$V=\pi\int_0^2(y^2)^2\,dy=\pi\left[\frac{y^5}{5}\right]_0^2=\frac{32\pi}{5}\text{ cubic units}.$$

The maximum radius is $4$ and height is $2$; the result is below the enclosing cylinder volume $32\pi$.

</details>

</section>

## Later review {#review-later}

After studying differential equations, hide the method table and solutions and attempt this task. Record delayed method choice separately from your immediate retry.

<section class="lesson-check" markdown="1">

### A region revisited {#review-region}

The region $R$ is bounded by $y=\sin x\cos x$, the $x$-axis, $x=0$ and $x=\frac\pi2$. Sketch $R$. Find (a) its area and (b) the volume when $R$ rotates completely about the $x$-axis. Explain why the two integrands differ.

<details markdown="1">
<summary>Hint</summary>

Label the strip height, then identify the quantity being added.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$A=\int_0^{\pi/2}\sin x\cos x\,dx=\left[\frac12\sin^2x\right]_0^{\pi/2}=\frac12.$$

$$V=\pi\int_0^{\pi/2}\sin^2x\cos^2x\,dx=\pi\left[\frac{x}{8}-\frac{\sin(4x)}{32}\right]_0^{\pi/2}=\frac{\pi^2}{16}.$$

The curve is non-negative. Area uses height; volume uses $\pi$ times radius squared. Their units are square and cubic units: directly comparing their sizes does not check quantities of different dimensions.

</details>

</section>

## Quick Reference {#quick-reference}

| Task | Rule or first step | Check |
|---|---|---|
| Odd sine or cosine power | Keep one factor; use $\sin^2x+\cos^2x=1$ | Include the sign and coefficient in the substitution |
| Even powers | $\displaystyle\sin^2x=\frac{1-\cos(2x)}2$, $\displaystyle\cos^2x=\frac{1+\cos(2x)}2$ | Double the whole argument; repeat if a square remains |
| Tangent powers | $\tan^2x=\sec^2x-1$ | Work on an interval where the function is defined |
| Total area with the $x$-axis | Split at crossings; add positive areas | Do not just take the absolute value of one definite integral |
| Area between curves | Integrate upper curve minus lower curve | Find intersections; split if their order changes |
| Volume about the $x$-axis | $\displaystyle V=\pi\int_a^b y^2\,dx$ | Square the whole radius; use $x$-limits |
| Volume about the $y$-axis | $\displaystyle V=\pi\int_c^d x^2\,dy$ | Express $x^2$ in terms of $y$; use $y$-limits |
{: .wide-table}

**If your answer looks wrong:** differentiate an indefinite result; check signs for area; check the radius, limits and units for volume. Keep exact values such as $\pi$ until the end.

**Next step:** use [repair tasks](#repair), keep your first attempt, then study differential equations and return to [the review region](#review-region).
{: #next-step}

Return to [Integration — Choosing a Method](/alevel/a2-mathematics/integration/) or the [Integration formula reference](/alevel/a2-mathematics/quick-reference/#p27-integration).

**Learning path:** [Previous: Integration — Choosing a Method](/alevel/a2-mathematics/integration/) · [Next: Differential Equations](/alevel/a2-mathematics/differential-equations/).

<details markdown="1">
<summary>Sources and verification scope</summary>

Scope: 9660 MA03 P2.4 identities and P2.7 applications; area is prerequisite review. January 2025 MA03 Q5 (QP p11, MS p10) was read to check the sequence of squaring the full radius, rewriting, integrating and evaluating limits. This page uses self-written tasks, without official marks.

[9660 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf) · [January 2025 QP](https://aqamat.alevelclouds.com/25_01_QP_P2.pdf) / [MS](https://aqamat.alevelclouds.com/25_01_MS_P2.pdf)

</details>
