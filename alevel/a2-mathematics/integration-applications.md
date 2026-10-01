---
title: Integration — Trigonometric Integrals and Applications
layout: subjects
mathjax: true
grade: a2
subject: a2-mathematics
permalink: /alevel/a2-mathematics/integration-applications/
toc_headings: h2
study_page: true
---

[Pure Mathematics](/alevel/a2-mathematics/) · P2.7 Integration

Use a trigonometric identity to make an integral simpler. Then use definite integrals to find areas and volumes.

- **Learning:** start with [trigonometric integrals](#trigonometric-integrals), then study [area](#area) and [volume of revolution](#volume-of-revolution).
- **Homework help:** compare your question with an example. Check the identity, the limits and the axis of rotation before calculating.
- **Revision:** try [practice](#practice) with the solutions closed, then check the [quick reference](#quick-reference).

Textbook: Chapter 6, Sections 6.5–6.6 (printed pp. 95–100). The area section revises earlier definite integration and prepares you for volume questions. We write the constant of integration as $C$.

**Before you start:** you should know standard integrals, substitution and trigonometric identities. Review [Integration — Choosing a Method](/alevel/a2-mathematics/integration/) if needed.

All worked examples and practice questions on this page are self-written, not official past-paper questions. No official marks are assigned.

## Trigonometric Integrals

**Use radians throughout.** The standard derivatives and integrals of trigonometric functions use radians.

| What you see | First step | Why it helps |
|---|---|---|
| An odd power of $\sin x$ | Keep one factor $\sin x$; use $\sin^2x=1-\cos^2x$ for the rest | Try $u=\cos x$, with $du=-\sin x\,dx$ |
| An odd power of $\cos x$ | Keep one factor $\cos x$; use $\cos^2x=1-\sin^2x$ for the rest | Try $u=\sin x$, with $du=\cos x\,dx$ |
| Only even powers of $\sin x$ and $\cos x$ | Use double angle identities | Replace squares by constants and cosines |
| A power of $\tan x$ | Use $\tan^2x=\sec^2x-1$ to reduce the power | Terms containing $\sec^2x$ may allow $u=\tan x$ |

For an argument such as $2x$ or $3x$, use the same identities with that argument. Include the coefficient from the chain rule when integrating.

### Example 1 — Keep one sine factor

**Question:** Find $\displaystyle\int\sin^3(2x)\,dx$.

**Choice:** The power is odd. Write

$$\sin^3(2x)=[1-\cos^2(2x)]\sin(2x).$$

Let $u=\cos(2x)$. Then $du=-2\sin(2x)\,dx$, so

$$\int\sin^3(2x)\,dx=-\frac12\int(1-u^2)\,du.$$

$$\boxed{-\frac12\cos(2x)+\frac16\cos^3(2x)+C}.$$

**Check:** Differentiation gives $\sin(2x)-\cos^2(2x)\sin(2x)=\sin^3(2x)$.

**Common mistake:** missing the minus sign or the factor $\frac12$ in $du$.

### Example 2 — Use a double angle identity

**Question:** Find $\displaystyle\int\cos^2(3x)\,dx$.

Use $\cos^2\theta=\frac{1+\cos(2\theta)}2$ with $\theta=3x$:

$$\int\cos^2(3x)\,dx=\frac12\int[1+\cos(6x)]\,dx.$$

$$\boxed{\frac{x}{2}+\frac{\sin(6x)}{12}+C}.$$

**Check:** The derivative is $\frac12+\frac12\cos(6x)=\cos^2(3x)$.

**Common mistake:** replacing $\cos^2(3x)$ by $\frac{1+\cos(3x)}2$. The identity doubles the whole argument.

### Example 3 — Reduce a fourth power

**Question:** Find $\displaystyle\int\cos^4(2x)\,dx$.

Use the double angle identity twice:

$$\cos^4(2x)=\frac14[1+2\cos(4x)+\cos^2(4x)]$$

$$=\frac38+\frac12\cos(4x)+\frac18\cos(8x).$$

Now integrate each term:

$$\boxed{\frac{3x}{8}+\frac{\sin(4x)}8+\frac{\sin(8x)}{64}+C}.$$

**Check:** Differentiating gives $\frac38+\frac12\cos(4x)+\frac18\cos(8x)$, the expression above.

For a product of even powers, also look for $\sin(2x)=2\sin x\cos x$. For example, $\sin^2x\cos^2x=\frac18[1-\cos(4x)]$.

### Example 4 — Reduce a tangent power

**Question:** Find $\displaystyle\int\tan^3x\,dx$.

Use $\tan^2x=\sec^2x-1$:

$$\int\tan^3x\,dx=\int\tan x\sec^2x\,dx-\int\tan x\,dx.$$

For the first integral, let $u=\tan x$. For the second, use $\int\tan x\,dx=-\ln\lvert\cos x\rvert+C$.

$$\boxed{\frac12\tan^2x+\ln\lvert\cos x\rvert+C}.$$

**Check:** Differentiation gives $\tan x\sec^2x-\tan x=\tan^3x$.

Use this result on an interval where $\cos x\ne0$. Do not integrate across a point where $\tan x$ is undefined.

## Area

**A definite integral gives signed area.** Parts above the $x$-axis contribute positively; parts below it contribute negatively. The total area adds the sizes of all parts.

1. Sketch the curve and mark the required interval.
2. Find any crossings of the $x$-axis inside the interval.
3. Split the integral at those crossings. Change the sign of each part below the axis.
4. Add the positive areas. Give the answer in square units.

![Example 5: the curve x squared minus one crosses the x-axis at minus one and one, with shaded areas above and below. Example 6: the shaded region lies between the line y equals two x and the curve y equals x squared, from zero to two.](/assets/img/integration-area.svg)

### Example 5 — Split where the curve crosses the axis

**Question:** Find the total area between $y=x^2-1$ and the $x$-axis for $-2\le x\le2$.

The crossings are $x=-1$ and $x=1$. The curve is below the axis between them and above it on the two outer intervals.

$$\begin{aligned}A&=\int_{-2}^{-1}(x^2-1)\,dx\\&\quad-\int_{-1}^{1}(x^2-1)\,dx\\&\quad+\int_1^2(x^2-1)\,dx.\end{aligned}$$

Using $F(x)=\frac{x^3}{3}-x$, the two outer integrals each give $\frac43$. The middle integral gives $-\frac43$.

$$A=\frac43+\frac43+\frac43=\boxed{4\text{ square units}}.$$

**Check:** $\int_{-2}^{2}(x^2-1)\,dx=\frac43$ is the signed area, not the total area. Taking the absolute value of that one answer would still be wrong.

### Example 6 — Upper curve minus lower curve

**Question:** Find the area enclosed by $y=2x$ and $y=x^2$.

Find the intersections: $2x=x^2$ gives $x=0$ and $x=2$. Between these values, $2x\ge x^2$.

$$A=\int_0^2(2x-x^2)\,dx=\left[x^2-\frac{x^3}{3}\right]_0^2.$$

$$\boxed{\frac43\text{ square units}}.$$

**Check:** The integrand is non-negative on $[0,2]$. If the upper and lower curves change places within a given interval, split the integral at the intersections.

## Volume of Revolution

When a region rotates completely about an axis, it forms a **solid of revolution**. A slice perpendicular to the axis is a circle when the region extends from the axis to the curve. Its area is $\pi\times(\text{radius})^2$.

| Axis of rotation | Radius | Formula for a region between the axis and the curve |
|---|---|---|
| $x$-axis | Distance $\lvert y\rvert$ from the $x$-axis | $\displaystyle V=\pi\int_a^b y^2\,dx$ |
| $y$-axis | Distance $\lvert x\rvert$ from the $y$-axis | $\displaystyle V=\pi\int_c^d x^2\,dy$ |

**Before integrating:** identify the axis, square the radius, express it in the integration variable, and use limits for that variable. Give the result in cubic units.

These formulas describe circular slices with no hole. If the stated region does not extend to the axis, first identify the outer and inner radii; do not use one curve's radius without checking the region.

### Example 7 — Square the whole expression

**Question:** The region between $y=x+1$, the $x$-axis and the lines $x=0$ and $x=2$ is rotated completely about the $x$-axis. Find its volume.

The radius is $y=x+1$. Its square is $(x+1)^2=x^2+2x+1$.

$$V=\pi\int_0^2(x+1)^2\,dx.$$

$$=\pi\left[\frac{x^3}{3}+x^2+x\right]_0^2=\boxed{\frac{26\pi}{3}\text{ cubic units}}.$$

**Common mistake:** using $x^2+1$ for $(x+1)^2$, or integrating $y$ instead of $y^2$.

**Check:** The radius increases from $1$ to $3$ over a length of $2$. The volume must lie between the cylinder volumes $2\pi$ and $18\pi$.

### Example 8 — Change the variable for the y-axis

**Question:** The region in $x\ge0$ enclosed by $y=x^2+2$, the line $y=6$ and the $y$-axis is rotated completely about the $y$-axis. Find its volume.

The $y$-limits are $2$ and $6$. Rearrange the curve to give $x^2=y-2$.

$$V=\pi\int_2^6(y-2)\,dy=\pi\left[\frac{(y-2)^2}{2}\right]_2^6.$$

$$\boxed{8\pi\text{ cubic units}}.$$

**Common mistake:** using the $x$-limits $0$ and $2$ in an integral with respect to $y$.

**Check:** The radius grows from $0$ to $2$. The solid fits inside a cylinder of radius $2$ and height $4$, whose volume is $16\pi$.

**Area and volume use different integrands.** For a region under $y=\sin x$ on $0\le x\le\frac\pi2$, area uses $\sin x$; rotation about the $x$-axis uses $\pi\sin^2x$. A volume question may therefore need a trigonometric identity first.

## Practice

**Independent practice · 30–40 minutes**

The time is a guide. For each trigonometric integral, write the identity you use. For each area or volume, sketch the region and write the integral before calculating. Open a hint only if you need it.

### Q1 — An odd cosine power

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

### Q2 — A product of powers

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

### Q3 — An even power with limits

Evaluate $\displaystyle\int_0^{\frac\pi4}\sin^2(2x)\,dx$ exactly.

<details markdown="1">
<summary>Hint</summary>

Use $\sin^2(2x)=\frac{1-\cos(4x)}2$. Keep the limits in radians.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\left[\frac{x}{2}-\frac{\sin(4x)}8\right]_0^{\frac\pi4}=\boxed{\frac\pi8}.$$

The integrand is between $0$ and $1$, so the answer must be between $0$ and $\frac\pi4$.

</details>

### Q4 — A tangent square

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

### Q5 — Area between two curves

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

### Q6 — Signed integral or total area?

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

### Q7 — Choose the axis and the variable

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

## Quick Reference

| Task | Rule or first step | Check |
|---|---|---|
| Odd sine or cosine power | Keep one factor; use $\sin^2x+\cos^2x=1$ | Include the sign and coefficient in the substitution |
| Even powers | $\displaystyle\sin^2x=\frac{1-\cos(2x)}2$, $\displaystyle\cos^2x=\frac{1+\cos(2x)}2$ | Double the whole argument; repeat if a square remains |
| Tangent powers | $\tan^2x=\sec^2x-1$ | Work on an interval where the function is defined |
| Total area with the $x$-axis | Split at crossings; add positive areas | Do not just take the absolute value of one definite integral |
| Area between curves | Integrate upper curve minus lower curve | Find intersections; split if their order changes |
| Volume about the $x$-axis | $\displaystyle V=\pi\int_a^b y^2\,dx$ | Square the whole radius; use $x$-limits |
| Volume about the $y$-axis | $\displaystyle V=\pi\int_c^d x^2\,dy$ | Express $x^2$ in terms of $y$; use $y$-limits |

**If your answer looks wrong:** differentiate an indefinite result; check signs for area; check the radius, limits and units for volume. Keep exact values such as $\pi$ until the end.

**After practice:** explain one identity choice and one area or volume setup without looking at the solutions. Reattempt any question where you chose the wrong method or limits.

Return to [Integration — Choosing a Method](/alevel/a2-mathematics/integration/) or the [Integration formula reference](/alevel/a2-mathematics/quick-reference/#p27-integration).

**Learning path:** [Previous: Integration — Choosing a Method](/alevel/a2-mathematics/integration/) · [Next: Differential Equations](/alevel/a2-mathematics/differential-equations/).
