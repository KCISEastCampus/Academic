---
title: Numerical Methods
layout: subjects
mathjax: true
grade: a2
subject: a2-mathematics
permalink: /alevel/a2-mathematics/numerical-methods/
toc_headings: h2
study_page: true
---

[Pure Mathematics](/alevel/a2-mathematics/) · P2.9 Numerical Methods

Locate a root, improve an approximation by iteration, and estimate a definite integral using the correct ordinates.

- **Learning:** start with [locating roots](#locating-roots), then study [iteration](#iteration) and [numerical integration](#numerical-integration).
- **Homework help:** check continuity, your rearrangement, the strip width and which function values the rule needs.
- **Revision:** try [practice](#practice) with solutions closed. Use the [quick reference](#quick-reference) to check your setup.

Textbook: Chapter 8, Sections 8.1–8.3 (printed pp. 114–123). This lesson follows the textbook's iteration, mid-ordinate rule and Simpson's rule. The trapezium rule is earlier knowledge, not the main method here.

**Before you start:** you should know graphs, differentiation, calculator use and [definite integration](/alevel/a2-mathematics/integration-applications/). Use radians for trigonometric functions.

All worked examples and practice questions are self-written, not official past-paper questions. The suggested practice time is a guide; no official marks are assigned.

## Locating Roots

Write the equation as $f(x)=0$. If $f$ is **continuous** on $[a,b]$ and $f(a)$ and $f(b)$ have opposite signs, there is at least one root between $a$ and $b$.

For an answer that shows a root exists, give the two function values, state continuity, and explain the change of sign. To show there is exactly one root, you need more information, such as the function being strictly increasing throughout the interval.

### Example 1 — Show a root lies in an interval

**Question:** Show that $x^3-x-1=0$ has a root between $1$ and $2$, then locate it in an interval of width $0.01$.

Let $f(x)=x^3-x-1$. It is a polynomial, so it is continuous. Since

$$f(1)=-1,\qquad f(2)=5,$$

the signs are opposite and there is a root in $(1,2)$.

Trying values within that interval gives

$$f(1.32)=-0.020032,\qquad f(1.33)=0.022637.$$

Thus the root lies in $\boxed{(1.32,1.33)}$, an interval of width $0.01$.

**Check:** $f'(x)=3x^2-1>0$ on $[1,2]$. Hence $f$ is strictly increasing there, so the root in this interval is unique.

**Common mistake:** treating opposite signs alone as proof when the function is not continuous. For $f(x)=\frac1x$, the values at $-1$ and $1$ have opposite signs, but $f$ is undefined at $0$ and has no root.

No change of sign does not prove that there is no root. For example, $x^2$ has a root at $0$ but is positive on both sides of it.

## Iteration

Rearrange $f(x)=0$ as $x=g(x)$. Starting from an approximation $x_0$, calculate

$$x_{n+1}=g(x_n).$$

Each output becomes the next input. **Keep the full calculator value for the next step.** Round only the values you report, unless the question asks you to round at each step.

The textbook often starts its sequence at $x_1$. Here we start at $x_0$; follow the index used in the question.

### Example 2 — Iterate and check the reported accuracy

**Question:** Use $x_{n+1}=\sqrt[3]{x_n+1}$ with $x_0=1$ to find the root of $x^3-x-1=0$ to $3$ decimal places.

The rearrangement is valid because $x^3=x+1$ gives $x=\sqrt[3]{x+1}$.

| $n$ | $x_n$, displayed to 8 decimal places |
|---|---|
| 0 | 1.00000000 |
| 1 | 1.25992105 |
| 2 | 1.31229384 |
| 3 | 1.32235382 |
| 4 | 1.32426874 |
| 5 | 1.32463263 |
| 6 | 1.32470175 |
| 7 | 1.32471488 |
| 8 | 1.32471737 |

The values suggest $x=1.325$ to $3$ decimal places. Check the rounding interval using the original function:

$$f(1.3245)\approx-0.000929319,$$

$$f(1.3255)\approx0.003337556.$$

The unique root lies between these values. Every value strictly within this interval rounds to $\boxed{1.325}$ to $3$ decimal places.

**Common mistake:** assuming that two successive values which round the same way prove the accuracy. They suggest an answer; a suitable sign-change interval verifies it.

### Convergence and divergence

Iteration **converges** when the successive approximations approach the root. It **diverges** when they move away. Different rearrangements of the same equation can behave differently.

Near a root $\alpha$, $\lvert g'(x)\rvert<1$ is a useful local convergence condition. Start sufficiently near the root and keep the iteration within a suitable domain. Checking the derivative at one unrelated point is not enough.

- If $g'$ is positive near the root, the values may approach it from one side.
- If $g'$ is negative near the root, the values may alternate about it and still converge.
- If $\lvert g'(\alpha)\rvert>1$, nearby starting values generally move away from the root.
- If $\lvert g'(\alpha)\rvert=1$, this test does not decide the behaviour.

For Example 2,

$$g'(x)=\frac{1}{3(x+1)^{2/3}}.$$

On $[1,2]$, this derivative is positive and less than $1$, and $g$ maps that interval into itself. The starting value $1$ is therefore suitable.

### Example 3 — A valid rearrangement can fail

**Question:** Investigate $x_{n+1}=x_n^3-1$ with $x_0=1$ for the same equation $x^3-x-1=0$.

The rearrangement $x=x^3-1$ is algebraically valid. But near the root $\alpha\approx1.325$,

$$g'(x)=3x^2,\qquad g'(\alpha)\approx5.27>1.$$

The first values are

$$x_0=1,\quad x_1=0,\quad x_2=-1,\quad x_3=-2,\quad x_4=-9.$$

They move away from the required root. **Change the rearrangement**, rather than simply calculating more terms of this sequence.

### Staircase and cobweb diagrams

Draw $y=g(x)$ and $y=x$ on the same axes. Their intersections satisfy $g(x)=x$, so they are the fixed points of the iteration.

1. Start at $x_0$ on the $x$-axis. Move vertically to $y=g(x)$; the height is $x_1=g(x_0)$.
2. Move horizontally to $y=x$. Both coordinates are now $x_1$.
3. Move vertically to the curve again to find $x_2$, then horizontally to the line.
4. Repeat and show the direction. Steps towards the intersection show convergence; steps away show divergence.

![Staircase and cobweb diagrams with iteration steps approaching the intersection of y equals g of x and y equals x](/assets/img/numerical-iteration.svg)

The upper diagram uses Example 2, $g(x)=\sqrt[3]{x+1}$, starting at $x_0=1$. Its steps form a **staircase** towards the fixed point $\alpha\approx1.325$.

The lower diagram uses $g(x)=\frac2{x+1}$, starting at $x_0=0.4$. The successive values are approximately $1.429$, $0.824$, $1.097$ and $0.954$. They alternate about the fixed point $1$ and form a shrinking **cobweb**. This iteration solves $x^2+x-2=0$ near its positive root.

**Check:** a diagram illustrates the behaviour. It does not by itself prove a stated number of decimal places; use the original equation to check the rounding interval.

## Numerical Integration

Divide $[a,b]$ into $n$ equal **strips**, each of width

$$h=\frac{b-a}{n}.$$

An **ordinate** is a vertical height $y=f(x)$. The two rules use heights at different positions. They estimate a definite integral; if the curve crosses the axis, finding total area requires splitting at the crossings and treating the signs separately.

### The mid-ordinate rule

Use the height at the centre of each strip. If the strip boundaries are $x_i=a+ih$, the midpoint is $x_{i+1/2}=a+(i+\frac12)h$ and its height is $y_{i+1/2}=f(x_{i+1/2})$.

$$\int_a^b f(x)\,dx\approx h\left(y_{1/2}+y_{3/2}+\cdots+y_{n-1/2}\right).$$

There are $n$ midpoint heights for $n$ strips. Add those heights, then multiply by $h$.

![Four rectangles approximate the area under y equals x squared from zero to two. Each rectangle has width 0.5 and its height is taken at the midpoint of the strip.](/assets/img/numerical-mid-ordinate.svg)

### Example 4 — Choose the midpoints, not the endpoints

**Question:** Estimate $\displaystyle\int_0^2x^2\,dx$ using the mid-ordinate rule with $4$ strips.

The width is $h=\frac{2-0}{4}=0.5$. The midpoints are $0.25$, $0.75$, $1.25$ and $1.75$.

| Midpoint $x$ | Height $y=x^2$ |
|---|---|
| 0.25 | 0.0625 |
| 0.75 | 0.5625 |
| 1.25 | 1.5625 |
| 1.75 | 3.0625 |

$$\begin{aligned}I&\approx0.5(0.0625+0.5625\\&\qquad+1.5625+3.0625).\end{aligned}$$

$$\boxed{I\approx2.625}.$$

**Check:** The exact integral is $\frac83\approx2.66667$. Here the mid-ordinate result is an underestimate. This is not a rule that every mid-ordinate estimate is too small.

**Common mistake:** using $0$, $0.5$, $1$ and $1.5$. Those are left endpoints, not midpoint positions.

**Improve the estimate:** increase the number of strips from $4$ to $8$, so $h=0.25$. Recalculate the heights at $0.125$, $0.375$, $\ldots$, $1.875$. This gives $I\approx2.65625$, improving on $2.625$ as an estimate of $\frac83$: the absolute error falls from about $0.04167$ to $0.01042$.

For sufficiently smooth functions, smaller strip widths usually improve the estimate. Compare results using finer strips and, when available, the exact integral; improvement is not guaranteed for every function or every subdivision. [OxfordAQA P2.9, printed p. 24](https://www.oxfordaqa.com/wp-content/uploads/2023/10/oxfordaqa-a-level-mathematics-specification.pdf) includes improving an estimate by increasing the number of steps.

### Simpson's rule

Use ordinates at the strip boundaries, including both endpoints. There are $n+1$ ordinates for $n$ strips. Simpson's rule uses pairs of strips, so **$n$ must be even** and **the number of ordinates must be odd**.

For equally spaced ordinates $y_i=f(a+ih)$,

$$\begin{aligned}
I\approx\frac h3\big[&(y_0+y_n)\\
&+4(y_1+y_3+\cdots+y_{n-1})\\
&+2(y_2+y_4+\cdots+y_{n-2})\big].
\end{aligned}$$

The endpoint weights are $1$. The inside weights alternate $4,2,4,2,\ldots,4$.

### Example 5 — Apply the weights

**Question:** Estimate $\displaystyle\int_0^2e^x\,dx$ using Simpson's rule with $4$ strips. Give the estimate to $4$ decimal places.

Here $h=0.5$ and there are $5$ ordinates. The table displays rounded values; use full calculator values in the calculation.

| $i$ | $x_i$ | $y_i=e^{x_i}$ | Weight |
|---|---|---|---|
| 0 | 0 | 1.000000 | 1 |
| 1 | 0.5 | 1.648721 | 4 |
| 2 | 1 | 2.718282 | 2 |
| 3 | 1.5 | 4.481689 | 4 |
| 4 | 2 | 7.389056 | 1 |

$$I\approx\frac{0.5}{3}\big[(1+e^2)+4(e^{0.5}+e^{1.5})+2e\big].$$

$$\boxed{I\approx6.3912}.$$

**Check:** The exact integral is $e^2-1\approx6.38906$. Simpson's rule gives an approximation here, not the exact answer.

**Improve the estimate:** use $8$ strips with $h=0.25$ and $9$ boundary ordinates, retaining the alternating weights. This gives $I\approx6.389193725$. Compared with $e^2-1$, the absolute error falls from about $0.00215409$ to $0.00013763$. Keep the number of strips even when refining Simpson's rule.

### Example 6 — Work from a table

**Question:** Use Simpson's rule to estimate the integral from $0$ to $2$ for a function with the following ordinates.

| $x$ | 0 | 0.5 | 1 | 1.5 | 2 |
|---|---|---|---|---|---|
| $y$ | 1 | 1.4 | 2.1 | 3.5 | 5.2 |

Five ordinates give four strips, so $h=0.5$:

$$\begin{aligned}I\approx\frac{0.5}{3}\big[&(1+5.2)\\&+4(1.4+3.5)+2(2.1)\big].\end{aligned}$$

$$\boxed{I\approx5}.$$

**Check:** The listed positions are equally spaced and the number of strips is even. Without the function or midpoint values, this table does not supply the heights needed for a mid-ordinate estimate using the same four strips.

**Common mistake:** dividing the interval length by the number of ordinates. Five boundary ordinates make four strips, not five.

## Practice

**Independent practice · 25–35 minutes**

Show function values for a root interval. For iteration, record the given starting index and retain full calculator values. For integration, write $h$, list the positions and show the weights before calculating.

### Q1 — Locate a root

Show that $\ln x+x-2=0$ has a root between $1.55$ and $1.56$. Explain why the root in this interval is unique.

<details markdown="1">
<summary>Hint</summary>

Use $f(x)=\ln x+x-2$. Check the domain and the sign of $f'(x)$ on the interval.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$f(1.55)\approx-0.0117451,\qquad f(1.56)\approx0.0046858.$$

The function is continuous for $x>0$, so the change of sign gives a root in $(1.55,1.56)$. Also $f'(x)=\frac1x+1>0$ on this interval, so the root there is unique.

</details>

### Q2 — Iterate without rounding the next input

For $x^3+x-1=0$, use $x_{n+1}=\frac{1}{1+x_n^2}$ with $x_0=0.5$.

**(a)** Show that the rearrangement is valid. **(b)** Give $x_1$, $x_2$ and $x_3$ to $6$ decimal places. **(c)** Continue to estimate the root to $3$ decimal places, and verify the reported accuracy by a sign change.

<details markdown="1">
<summary>Hint</summary>

Factor $x^3+x=x(1+x^2)$. For (c), test the two boundaries of the rounding interval using the original polynomial.

</details>

<details markdown="1">
<summary>Solution and check</summary>

**(a)** $x(1+x^2)=1$ gives $x=\frac1{1+x^2}$. The denominator is positive for real $x$.

**(b)** Keeping full values between steps gives

$$x_1=0.800000,\quad x_2=0.609756,\quad x_3=0.728968.$$

**(c)** Continuing the iteration suggests $\boxed{x\approx0.682}$ to $3$ decimal places. With $f(x)=x^3+x-1$,

$$f(0.6815)\approx-0.001982607,$$

$$f(0.6825)\approx0.000412766.$$

The polynomial is continuous, and $f'(x)=3x^2+1>0$ for all real $x$. Thus its unique root lies within this rounding interval, verifying $0.682$ to $3$ decimal places.

</details>

### Q3 — Compare two rearrangements

For the root $\alpha\approx0.6823$ of $x^3+x-1=0$, compare the local convergence of

$$g_1(x)=\frac1{1+x^2},\qquad g_2(x)=1-x^3.$$

Sketch a cobweb diagram for $g_1$ starting at $x_0=0.7$. Use at least three iterations to show how the values approach the intersection with $y=x$.

<details markdown="1">
<summary>Hint</summary>

Differentiate each function and evaluate the magnitude of its derivative near $\alpha$. A negative derivative can still give convergence.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$g_1'(x)=-\frac{2x}{(1+x^2)^2},\qquad g_2'(x)=-3x^2.$$

At $x=0.6823$, $\lvert g_1'\rvert\approx0.635<1$ but $\lvert g_2'\rvert\approx1.397>1$.

The first iteration converges from a sufficiently close starting value. Its negative derivative explains why values can alternate about the root. For the second iteration, nearby starting values generally move away from the root.

For the diagram, $x_1\approx0.6711$, $x_2\approx0.6895$ and $x_3\approx0.6778$. Draw vertical steps to $y=g_1(x)$ and horizontal steps to $y=x$. They alternate about $\alpha$ and move closer to it.

</details>

### Q4 — Mid-ordinate positions

Use the mid-ordinate rule with $4$ strips to estimate $\displaystyle\int_1^3\ln x\,dx$, giving your estimate to $4$ decimal places.

Repeat with $8$ strips. Compare both estimates with the exact integral and explain whether increasing the number of strips improved the estimate.

<details markdown="1">
<summary>Hint</summary>

The width is $0.5$. Start with the midpoint $1.25$, not the boundary $1$.

For $8$ strips, $h=0.25$; start at $1.125$ and use $8$ midpoint heights. Compare absolute errors using unrounded estimates.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The midpoints are $1.25$, $1.75$, $2.25$ and $2.75$.

$$I\approx0.5[\ln1.25+\ln1.75+\ln2.25+\ln2.75].$$

$$\boxed{I\approx1.3026}.$$

The exact result is $[x\ln x-x]_1^3=3\ln3-2\approx1.29584$. Here the mid-ordinate estimate is greater than the exact integral.

With $8$ strips, the midpoints are $1.125$, $1.375$, $\ldots$, $2.875$, giving $I\approx1.297564013$. To $4$ decimal places, this is $\boxed{1.2976}$. The absolute error falls from about $0.00680837$ to $0.00172715$, so the finer subdivision improves this estimate.

</details>

### Q5 — Simpson's rule and an exact check

Use Simpson's rule with $4$ strips to estimate $\displaystyle\int_0^2x^3\,dx$. Compare your result with the exact integral.

<details markdown="1">
<summary>Hint</summary>

Use five boundary ordinates at $0$, $0.5$, $1$, $1.5$ and $2$, with weights $1,4,2,4,1$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

With $h=0.5$, the heights are $0$, $0.125$, $1$, $3.375$ and $8$.

$$\begin{aligned}I\approx\frac{0.5}{3}\big[&(0+8)\\&+4(0.125+3.375)+2(1)\big].\end{aligned}$$

$$\boxed{I\approx4}.$$

The exact integral is $[\frac{x^4}{4}]_0^2=4$. They agree: Simpson's rule is exact for cubic polynomials with equally spaced ordinates. Do not assume it is exact for every function.

</details>

### Q6 — Decide whether the data is suitable

**(a)** Four boundary ordinates are given at $x=0$, $1$, $2$, $3$. Can you use the standard Simpson's rule with all four?

**(b)** Five boundary ordinates are given at $x=0$, $0.4$, $1$, $1.5$, $2$. Is their count enough to justify using the standard rule?

**(c)** Five equally spaced boundary ordinates cover $0\le x\le2$. How many strips are there, and what is $h$? Does the table also give a mid-ordinate estimate with those same strips?

<details markdown="1">
<summary>Hint</summary>

Check both the number of strips and their widths. Boundary heights are not midpoint heights.

</details>

<details markdown="1">
<summary>Solution and check</summary>

**(a)** No. Four boundary ordinates give three strips, an odd number. The standard Simpson's rule needs pairs of strips.

**(b)** No. Although five ordinates give an even number of strips, the widths are unequal. The standard formula assumes equally spaced ordinates.

**(c)** Four strips, with $h=\frac{2}{4}=0.5$. A mid-ordinate estimate with these strips needs the heights at $0.25$, $0.75$, $1.25$ and $1.75$, which this boundary table does not provide.

</details>

## Quick Reference

| Task | First step | Essential check |
|---|---|---|
| Locate a root | Write $f(x)=0$; calculate values at the interval endpoints | Continuity and opposite signs give at least one root |
| Show uniqueness in an interval | Examine the graph or the derivative | Strict increase or decrease can establish uniqueness |
| Iterate | Rearrange as $x=g(x)$; use $x_{n+1}=g(x_n)$ | Keep full values; start in a suitable domain |
| Check local convergence | Find $g'(x)$ near the root | $\lvert g'\rvert<1$ is useful locally; equality needs more analysis |
| Verify decimal places | Test the original function at rounding boundaries | Use a sign-change interval inside the required rounding range |
| Mid-ordinate rule | Find $h$ and the $n$ midpoint heights | Use strip centres, not boundaries |
| Simpson's rule | Find $h$ and the $n+1$ boundary ordinates | Equal spacing, even strips, weights $1,4,2,\ldots,4,1$ |

**If your answer looks wrong:** check the original equation, starting index, calculator angle mode, strip count, positions and weights. Keep extra digits in intermediate values and round the final answer as requested.

**You should be able to:** justify a root interval, use and assess an iteration, verify an approximation's accuracy, apply the two integration rules with the correct data, and compare estimates after increasing the number of strips.

**Learning path:** [Previous: Differential Equations](/alevel/a2-mathematics/differential-equations/) · [Next: Vectors](/alevel/a2-mathematics/vectors/).
