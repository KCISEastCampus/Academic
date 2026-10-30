---
title: Numerical Methods
layout: subjects
mathjax: true
grade: a2
subject: a2-mathematics
permalink: /alevel/a2-mathematics/numerical-methods/
toc_headings: h2, h3
reading_layout: true
study_page: true
---

[Pure Mathematics](/alevel/a2-mathematics/) · P2.9 Numerical Methods
{: .lesson-meta}

<div class="lesson-lead" markdown="1">

Some equations are hard to solve directly, and some integrals are hard to evaluate. We can instead work towards a number close enough for the task. Here we learn to locate roots and to estimate integrals with simple pieces. The aim is to explain why an approximation is reliable, rather than just quote many calculator digits.

</div>

Follow the route below. In each part, study the demonstration, then complete a short step yourself:

1. [Locate a root](#locating-roots): keep opposite-sign endpoints and narrow the bracket.
2. [Iterate](#iteration): feed each output back in, then judge whether the values approach the root.
3. [Estimate an integral](#numerical-integration): use the right sample positions to approximate a curve with rectangles or parabolas.
{: .lesson-routes}

<div class="lesson-notes" markdown="1">

**Before you start:** read function graphs and substitute values (recover [substitution and roots](/alevel/as-mathematics/algebra/#l03)); recover [derivative signs and monotonicity](/alevel/as-mathematics/differentiation/#l07) or [signed integrals versus total area](/alevel/a2-mathematics/integration-applications/#area) if needed. For Q3, recover [the chain rule](/alevel/a2-mathematics/differentiation/#composite-functions); for Q4, recover [integrating a logarithm](/alevel/a2-mathematics/integration/#integrating-a-logarithm). Use radians for trigonometric functions. For revision, go straight to [independent practice](#practice), using the [quick reference](#quick-reference) when needed.

*All examples and tasks are self-written. Hints and solutions open separately.*

</div>

## 1. Locate a root: narrow the bracket {#locating-roots}

First, what is a root? It is an input that makes the equation true. After rearranging the equation so that the function equals zero, a root makes the output zero. On the graph, it is where the curve touches or crosses the horizontal axis.

Imagine walking along an unbroken stretch of the curve. To go from below the axis to above it, you must pass through the axis. Below it the function is negative; above it the function is positive. That is why a change of sign can locate a root. It tells us which two numbers contain the root, not its exact value yet.

In symbols, write the equation as $f(x)=0$. If $f$ is **continuous** on $[a,b]$, meaning this whole stretch has no break, and $f(a)$ and $f(b)$ have opposite signs (one positive and one negative), there is at least one root between $a$ and $b$.

For an answer that shows a root exists, give the two function values, state continuity, and explain the change of sign. To show there is exactly one root, you need more information, such as the function being strictly increasing throughout the interval.

<section class="worked-example" markdown="1">

### Example 1 — Show a root lies in an interval

**Question:** Show that $x^3-x-1=0$ has a root between $1$ and $2$, then locate it in an interval of width $0.01$.

Let $f(x)=x^3-x-1$. It is a polynomial, so it is continuous. Since

$$f(1)=-1,\qquad f(2)=5,$$

the signs are opposite and there is a root in $(1,2)$.

**Which number should we try next?** Move from left to right in tenths until the sign changes. Then search that smaller stretch in hundredths. The tables show the actual trials, so you can continue the search yourself without guessing $1.32$ and $1.33$ first. This is one possible search method.

**First pass:** the root is in $(1,2)$. Start at $1.1$ and increase by $0.1$ until opposite-sign endpoints are found:

| $x$ | $f(x)=x^3-x-1$ |
|---|---|
| 1.1 | -0.769 |
| 1.2 | -0.472 |
| 1.3 | -0.103 |
| 1.4 | 0.344 |

The values remain negative from $1.1$ through $1.3$ and become positive at $1.4$. Keep $(1.3,1.4)$ and discard the rest.

**Second pass:** move right from the new lower endpoint in steps of $0.01$:

| $x$ | $f(x)$ |
|---|---|
| 1.31 | -0.061909 |
| 1.32 | -0.020032 |
| 1.33 | 0.022637 |

Now $f(1.32)<0<f(1.33)$. By continuity, the root is in $\boxed{(1.32,1.33)}$, an interval of width $0.01$. Keep opposite-sign endpoints at every pass; if a trial gives $f(x)=0$, the exact root has already been found.

**Check:** $f'(x)=3x^2-1>0$ on $[1,2]$. Hence $f$ is strictly increasing there, so the root in this interval is unique.

</section>

**Common mistake:** treating opposite signs alone as proof when the function is not continuous. For $f(x)=\frac1x$, the values at $-1$ and $1$ have opposite signs, but $f$ is undefined at $0$ and has no root.

No change of sign does not prove that there is no root. For example, $x^2$ has a root at $0$ but is positive on both sides of it.

<section class="lesson-check" markdown="1">

#### Pause: refine one more decimal place {#check-refine-bracket}


<!-- task:refine-bracket -->

For $f(x)=x^3-x-1$, start from $(1.32,1.33)$ and locate the root in an interval of width $0.001$. Show the trial values you use and state why the interval contains a root.

<!-- /task:refine-bracket -->

<details markdown="1">
<summary>Hint</summary>

Start at $1.321$ and increase by $0.001$ until the sign differs from the lower endpoint. Interval width alone does not verify a stated number of decimal places.

</details>

<details markdown="1">
<summary>Solution and check</summary>

| $x$ | $f(x)$ |
|---|---|
| 1.321 | -0.015800839 |
| 1.322 | -0.011561752 |
| 1.323 | -0.007314733 |
| 1.324 | -0.003059776 |
| 1.325 | 0.001203125 |

The polynomial is continuous and strictly increasing on the original interval. Opposite signs place its unique root in $(1.324,1.325)$. This crosses the 3 d.p. rounding boundary $1.3245$, so it does not yet verify a 3 d.p. answer.

</details>

</section>

## 2. Iterate: feed the output back in {#iteration}

**Iteration means using the same calculation rule repeatedly.** Put in a starting number, calculate the result, then put that result back into the rule. We want a number that the rule returns unchanged; such a number is a fixed point. Not every rule makes the results approach a fixed point, so we will check that later. To use it to solve the original equation, first rewrite the equation as “input = output of the rule”, keeping the same solutions.

Rearrange $f(x)=0$ as $x=g(x)$. Starting from an approximation $x_0$, calculate

$$x_{n+1}=g(x_n).$$

Each output becomes the next input. **Keep the full calculator value for the next step.** Round only the values you report, unless the question asks you to round at each step.

The textbook often starts its sequence at $x_1$. Here we start at $x_0$; follow the index used in the question.

<section class="worked-example" markdown="1">

### Example 2 — Iterate and check the reported accuracy

**Question:** Use $x_{n+1}=\sqrt[3]{x_n+1}$ with $x_0=1$ to find the root of $x^3-x-1=0$ to $3$ decimal places.

The rearrangement is valid because $x^3=x+1$ gives $x=\sqrt[3]{x+1}$.

**First, produce the first two outputs.** The starting value is not the first output:

$$x_0=1,\qquad x_1=g(x_0)=\sqrt[3]{1+1}=\sqrt[3]{2}\approx1.25992105.$$

$$x_2=g(x_1)=\sqrt[3]{\sqrt[3]{2}+1}\approx1.31229384.$$

<details markdown="1">
<summary>Continue: full iteration record</summary>

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

</details>

The values suggest $1.325$ to 3 d.p., but we must verify it independently. One unit in the last reported place is $0.001$, so half a unit is $0.0005$. The rounding boundaries are

$$1.325-0.0005=1.3245,\qquad1.325+0.0005=1.3255.$$

Test the original function at these boundaries, rather than relying only on a stable-looking iteration table:

$$f(1.3245)\approx-0.000929319,$$

$$f(1.3255)\approx0.003337556.$$

The unique root lies between these values. Every value strictly within this interval rounds to $\boxed{1.325}$ to $3$ decimal places.

</section>

**Common mistake:** assuming that two successive values which round the same way prove the accuracy. They suggest an answer; a suitable sign-change interval verifies it.

### From iteration to a graph {#staircase-and-cobweb-diagrams}

Draw $y=g(x)$ and $y=x$ on the same axes. Their intersections satisfy $g(x)=x$, so they are the fixed points of the iteration.

1. Start at $x_0$ on the $x$-axis. Move vertically to $y=g(x)$; the height is $x_1=g(x_0)$.
2. Move horizontally to $y=x$. Both coordinates are now $x_1$.
3. Move vertically to the curve again to find $x_2$, then horizontally to the line.
4. Repeat and show the direction. Steps towards the intersection show convergence; steps away show divergence.

The diagram is enlarged: the starting point $(x_0,0)$ is below the frame and its first vertical step enters from below.

The second input is the full value of $x_1$, not $1$ again or $x_1$ rounded to $1.26$. The diagram turns these two calculations into steps; match its lettered points to the coordinate table below.

![First two iterations of Example 2: A and C are on the curve, B and D on y equals x. Vertical steps calculate outputs; horizontal steps turn outputs into the next inputs.](/assets/img/numerical-iteration-steps.svg){: width="653" height="499" style="aspect-ratio: 653 / 499"}

Why draw the diagonal as well? The height of point A is the output just calculated. Moving horizontally to B keeps that height. Since B is on the diagonal, its horizontal coordinate equals the output too: it is now the next input. The diagonal transfers an output into an input; it is not another iteration rule to substitute into.

| Point | Coordinates | Meaning |
|---|---|---|
| A | $(x_0,x_1)$ | Move vertically to read $x_1=g(x_0)$ on the curve |
| B | $(x_1,x_1)$ | Move horizontally to $y=x$; the new input is $x_1$ |
| C | $(x_1,x_2)$ | Move to the curve to read $x_2=g(x_1)$ |
| D | $(x_2,x_2)$ | Move to the line; the next input is $x_2$ |

<section class="lesson-check" markdown="1">

#### Pause: complete the third step {#check-next-iteration}


<!-- task:next-iteration -->

Using the unrounded $x_2$, calculate $x_3=\sqrt[3]{x_2+1}$ to $8$ decimal places. On the step diagram, give the coordinates of the next point on the curve and the next point on $y=x$ after $D=(x_2,x_2)$.

<!-- /task:next-iteration -->

<details markdown="1">
<summary>Hint</summary>

Put the previous full output inside the cube root. A vertical step keeps the input coordinate; a horizontal step keeps the output coordinate.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$x_3=\sqrt[3]{\sqrt[3]{\sqrt[3]{2}+1}+1}\approx1.32235382.$$

$$E=(x_2,x_3),\qquad F=(x_3,x_3).$$
E is on the curve and F is on the line. The displayed $1.31229384$ is rounded; retain the internal value of $x_2$ for the next calculation.

</details>

</section>

The diagram above turns [Example 2's numerical iteration](#example-2--iterate-and-check-the-reported-accuracy) into a staircase approaching from one side. Now use a decreasing function to see why crossing to the other side does not necessarily mean divergence.

![Cobweb for g of x equals 2 divided by x plus 1, starting at x0 equals 0.4: four early iterations alternate about the fixed point 1 and shrink.](/assets/img/numerical-cobweb-steps.svg){: width="624" height="461" style="aspect-ratio: 624 / 461"}

Here $g(x)=\frac2{x+1}$ with $x_0=0.4$ gives approximately $1.429$, $0.824$, $1.097$, $0.954$. It solves the positive root of $x^2+x-2=0$, not the earlier cubic. Solid arrows show the first iteration, with later steps dashed; each still goes vertically to the curve and horizontally to the line.

**Check:** a diagram illustrates the behaviour. It does not by itself prove a stated number of decimal places; use the original equation to check the rounding interval.

### Convergence and divergence

Look at the numbers in order. If they get closer to the root, the iteration **converges**. If they move farther away, it **diverges**. Rewriting the same equation into a different calculation rule can change what happens.

On the graph, first see whether the steps approach the intersection or move away. Why look at the derivative too? It gives the slope nearby. That helps judge whether a small difference in the input becomes smaller or larger at the next step. Its sign also affects whether the values switch sides of the root.

Near a root $\alpha$, $\lvert g'(x)\rvert<1$ is a useful local convergence condition. Start sufficiently near the root and keep the iteration within a suitable domain. Checking the derivative at one unrelated point is not enough.

- If $g'$ is positive near the root, the values may approach it from one side.
- If $g'$ is negative near the root, the values may alternate about it and still converge.
- If $\lvert g'(\alpha)\rvert>1$, nearby starting values generally move away from the root.
- If $\lvert g'(\alpha)\rvert=1$, this test does not decide the behaviour.

For Example 2,

$$g'(x)=\frac{1}{3(x+1)^{2/3}}.$$

On $[1,2]$, this derivative is positive and less than $1$. Also, putting any number from this interval into $g$ gives another number in the same interval: the calculation cannot leave it. The starting value $1$ is therefore suitable.

<details id="iteration-extension" markdown="1">
<summary>Further comparison: slope, error and iteration speed</summary>

**Why does slope matter?** Write the small input error as $e_n=x_n-\alpha$. Where a local straight-line approximation is suitable, the next error is approximately

$$e_{n+1}\approx g'(\alpha)e_n.$$

A slope magnitude below 1 shrinks small errors; above 1 it magnifies them. A negative sign changes the side of the error. This explains the local test, not a guarantee for arbitrary starting values.

**Compare speed and divergence at the same fixed point.** These three self-written linear models all have fixed point $1$ and start at $x_0=0.6$. Each panel shows three iterations on identical scales, so only the slope changes.

![Three iteration plots on identical scales: slope 0.2 approaches 1 quickly, slope 0.8 slowly, and slope minus 1.2 alternates away from 1.](/assets/img/numerical-iteration-behaviour.svg){: width="1008" height="365" style="aspect-ratio: 1008 / 365"}

| $g(x)$ | $x_0$ | $x_1$ | $x_2$ | $x_3$ |
|---|---|---|---|---|
| $1+0.2(x-1)$ | 0.6 | 0.92 | 0.984 | 0.9968 |
| $1+0.8(x-1)$ | 0.6 | 0.68 | 0.744 | 0.7952 |
| $1-1.2(x-1)$ | 0.6 | 1.48 | 0.424 | 1.6912 |

A negative slope does not imply divergence: the earlier cobweb shrinks, while this negative-slope model expands. Consider both sign and magnitude; for nonlinear functions also check the behaviour near the root and the interval actually visited.

</details>

<section class="worked-example" markdown="1">

### Example 3 — A valid rearrangement can fail

**Question:** Investigate $x_{n+1}=x_n^3-1$ with $x_0=1$ for the same equation $x^3-x-1=0$.

The rearrangement $x=x^3-1$ is algebraically valid. But near the root $\alpha\approx1.325$,

$$g'(x)=3x^2,\qquad g'(\alpha)\approx5.27>1.$$

The first values are

$$x_0=1,\quad x_1=0,\quad x_2=-1,\quad x_3=-2,\quad x_4=-9.$$

They move away from the required root. **Change the rearrangement**, rather than simply calculating more terms of this sequence.

</section>

## 3. Numerical integration: add simple pieces {#numerical-integration}

Think “add small pieces”. A curved shape may be hard to calculate directly. Split the horizontal stretch into small parts and replace each piece with a shape that is easy to calculate. Parts below the axis count negatively, so we are estimating a definite integral.

We use two methods: the mid-ordinate rule uses a row of rectangles; Simpson’s rule uses pieces of parabolas to follow the curve. Look at each diagram before its formula, and notice where the heights are taken.

Divide $[a,b]$ into $n$ equal **strips**, each of width

$$h=\frac{b-a}{n}.$$

An **ordinate** is a vertical height $y=f(x)$. The two rules use heights at different positions. They estimate a definite integral; if the curve crosses the axis, finding total area requires splitting at the crossings and treating the signs separately.

### The mid-ordinate rule

Each rectangle contributes “width × height”. All widths are equal, so add the heights and multiply by the width once. Take the height at the centre of each strip, rather than its left or right edge. A half in a subscript marks that halfway position; it does not mean halve the height.

Use the height at the centre of each strip. If the strip boundaries are $x_i=a+ih$, the midpoint is $x_{i+1/2}=a+(i+\frac12)h$ and its height is $y_{i+1/2}=f(x_{i+1/2})$.

$$\int_a^b f(x)\,dx\approx h\left(y_{1/2}+y_{3/2}+\cdots+y_{n-1/2}\right).$$

There are $n$ midpoint heights for $n$ strips. Add those heights, then multiply by $h$.

![Four rectangles approximate the area under y equals x squared from zero to two. Each rectangle has width 0.5 and its height is taken at the midpoint of the strip.](/assets/img/numerical-mid-ordinate.svg){: width="672" height="480" style="aspect-ratio: 672 / 480"}

<section class="worked-example" markdown="1">

#### Example 4 — Choose the midpoints, not the endpoints

**Question:** Estimate $\displaystyle\int_0^2x^2\,dx$ using the mid-ordinate rule with $4$ strips.

**Locate the rectangles first.** A total width of 2 split into four parts gives width $h=\frac{2-0}{4}=0.5$. The first part goes from 0 to 0.5, so its centre is 0.25. Move right by 0.5 each time. The four midpoints are $0.25$, $0.75$, $1.25$ and $1.75$.

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

Refinement reduces the error in this example. In general, compare estimates before and after refinement and, when the exact integral is known, compare absolute errors too. Not every function improves under every subdivision.

</section>

### Simpson's rule

Use ordinates at the strip boundaries, including both endpoints. There are $n+1$ ordinates for $n$ strips. Simpson's rule uses pairs of strips, so **$n$ must be even** and **the number of ordinates must be odd**.

**Why pairs of strips?** The mid-ordinate rule uses rectangles. Simpson's rule approximates the curve with a parabola through three equally spaced points and integrates that parabola. Three points span two strips, each of width $h$.

![A parabola through three points of e to the x at 0, 1 and 2: adjacent points are h apart, spanning two strips. The approximating parabola need not coincide with the original curve between the points.](/assets/img/numerical-simpson-pair.svg){: width="634" height="432" style="aspect-ratio: 634 / 432"}

The diagram uses $h=1$ for one pair; Example 5 below uses $h=0.5$ for two pairs.

For one pair, the estimate is

$$I_{\mathrm{pair}}\approx\frac h3(y_0+4y_1+y_2).$$

<section class="lesson-check" markdown="1">

#### Pause: count the shared endpoint {#check-shared-weight}


<!-- task:shared-weight -->

The first pair of strips contributes $\frac h3(y_0+4y_1+y_2)$ and the next pair contributes $\frac h3(y_2+4y_3+y_4)$. Add them and give the five weights in order. Explain the weight of $y_2$.

<!-- /task:shared-weight -->

<details markdown="1">
<summary>Hint</summary>

The inner points differ, but $y_2$ is both the right endpoint of the first pair and the left endpoint of the second. The intervals share a boundary, not overlapping areas.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\begin{aligned}
I&\approx\frac h3[(y_0+4y_1+y_2)+(y_2+4y_3+y_4)]\\
&=\frac h3(y_0+4y_1+2y_2+4y_3+y_4).
\end{aligned}$$
The weights are $1,4,2,4,1$. Each pair contributes one copy of the shared endpoint $y_2$, giving weight 2 when the formulas are added. No area is counted twice; further pairs join in the same way.

</details>

</section>

**Join the pairs.** The two outer endpoints occur once. Between them, each pair contributes weight 4 at its centre, while a boundary shared by two pairs contributes weight 2. This gives the general formula:

For equally spaced ordinates $y_i=f(a+ih)$,

$$\begin{aligned}
I\approx\frac h3\big[&(y_0+y_n)\\
&+4(y_1+y_3+\cdots+y_{n-1})\\
&+2(y_2+y_4+\cdots+y_{n-2})\big].
\end{aligned}$$

The endpoint weights are $1$. The inside weights alternate $4,2,4,2,\ldots,4$.

<section class="worked-example" markdown="1">

#### Example 5 — Apply the weights

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

</section>

<details id="integration-comparison" markdown="1">
<summary>Compare and refine: two rules for the same integral</summary>

**Improve the estimate:** use $8$ strips with $h=0.25$ and $9$ boundary ordinates, retaining the alternating weights. This gives $I\approx6.389193725$. Compared with $e^2-1$, the absolute error falls from about $0.00215409$ to $0.00013763$. Keep the number of strips even when refining Simpson's rule.

**Same integral, two methods.** Keep Example 5's $e^x$, interval and four strips. For the mid-ordinate rule use the strip centres, not the boundary heights.

$$\begin{aligned}
M_4&=0.5(e^{0.25}+e^{0.75}+e^{1.25}+e^{1.75})\\
&\approx6.322985533.
\end{aligned}$$

| Strips | Mid-ordinate estimate | Absolute error | Simpson estimate | Absolute error |
|---|---|---|---|---|
| 4 | 6.322985533 | 0.066070566 | 6.391210187 | 0.002154088 |
| 8 | 6.372448212 | 0.016607887 | 6.389193725 | 0.000137626 |

The exact value is $e^2-1$. Refinement improves both estimates here, and Simpson has the smaller error; this is not a proof for every function. With the same strip count the rules use different positions and numbers of heights, so this is not an equal-cost comparison. Q4 uses $\ln x$ to check that mid-ordinate estimates are not always too small.

</details>

<section class="worked-example" markdown="1">

#### Example 6 — Work from a table

**Question:** Use Simpson's rule to estimate the integral from $0$ to $2$ for a function with the following ordinates.

| $x$ | 0 | 0.5 | 1 | 1.5 | 2 |
|---|---|---|---|---|---|
| $y$ | 1 | 1.4 | 2.1 | 3.5 | 5.2 |

Five ordinates give four strips, so $h=0.5$:

$$\begin{aligned}I\approx\frac{0.5}{3}\big[&(1+5.2)\\&+4(1.4+3.5)+2(2.1)\big].\end{aligned}$$

$$\boxed{I\approx5}.$$

**Check:** The listed positions are equally spaced and the number of strips is even. Without the function or midpoint values, this table does not supply the heights needed for a mid-ordinate estimate using the same four strips.

**Common mistake:** dividing the interval length by the number of ordinates. Five boundary ordinates make four strips, not five.

</section>

## Practice

**Independent practice · 30–45 minutes**

Show function values for a root interval. For iteration, record the given starting index and retain full calculator values. For integration, write $h$, list the positions and show the weights before calculating.

<section class="lesson-check" markdown="1">

### Q1 — Locate a root

Starting from $[1,2]$, locate a root of $\ln x+x-2=0$ in an interval of width $0.01$. Show how you choose your trial values. Explain why the root in this interval is unique.

<details markdown="1">
<summary>Hint</summary>

Use $f(x)=\ln x+x-2$. Check the domain and the sign of $f'(x)$ on the interval.

</details>

<details markdown="1">
<summary>Solution and check</summary>

One choice is to increase trials by $0.1$, keep $(1.5,1.6)$ after the first sign change, then increase by $0.01$:

| $x$ | $\ln x+x-2$ (rounded) |
|---|---|
| 1 | -1 |
| 2 | 0.693147 |
| 1.1 | -0.804690 |
| 1.2 | -0.617678 |
| 1.3 | -0.437636 |
| 1.4 | -0.263528 |
| 1.5 | -0.094535 |
| 1.6 | 0.070004 |
| 1.51 | -0.077890 |
| 1.52 | -0.061290 |
| 1.53 | -0.044732 |
| 1.54 | -0.028218 |
| 1.55 | -0.011745 |
| 1.56 | 0.004686 |

Keep $(1.55,1.56)$. Other searches giving a valid opposite-sign interval are also acceptable.

$$f(1.55)\approx-0.0117451,\qquad f(1.56)\approx0.0046858.$$

The function is continuous for $x>0$, so the change of sign gives a root in $(1.55,1.56)$. Also $f'(x)=\frac1x+1>0$ on this interval, so the root there is unique.

</details>

</section>

<section class="lesson-check" markdown="1">

### Q2 — Values and accuracy {#q2--iterate-without-rounding-the-next-input}

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

</section>

<section class="lesson-check" markdown="1">

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

![Q3 solution check: three cobweb iterations of g1 equals 1 divided by 1 plus x squared, starting at 0.7 and alternating about approximately 0.6823.](/assets/img/numerical-practice-cobweb.svg){: width="605" height="442" style="aspect-ratio: 605 / 442"}

</details>

</section>

<section class="lesson-check" markdown="1">

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

</section>

<section class="lesson-check" markdown="1">

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

</section>

<section class="lesson-check" markdown="1">

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

</section>

<section class="lesson-check" markdown="1">

### Q7 — Read the data {#q7--choose-from-the-data}

<!-- task:choose-data -->

A function is sampled at the positions below. The values are constructed teaching data.

| $x$ | 0.2 | 0.6 | 1.0 | 1.4 | 1.8 |
|---|---|---|---|---|---|
| $f(x)$ | 0.8 | 1.1 | 1.4 | 1.2 | 0.9 |

Estimate $\displaystyle\int_0^2 f(x)\,dx$ using a rule justified by these data. State your sample positions, strip boundaries and width, show your working, and explain what the table does and does not justify.

<!-- /task:choose-data -->

<details markdown="1">
<summary>Hint</summary>

Mark the interval and the sample positions. Are these the centres of five equal strips, or boundaries covering the whole interval? Check positions before counting.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The boundaries of the five strips are $0,0.4,0.8,1.2,1.6,2$. The samples are exactly their midpoints, so choose the mid-ordinate rule:

$$h=0.4,\qquad I\approx0.4(0.8+1.1+1.4+1.2+0.9)=\boxed{2.16}.$$
Five equally spaced values are not enough: standard Simpson needs boundary heights spanning the whole integration interval. The values at $0$ and $2$ are absent. Treating these five samples as boundaries would cover only $[0.2,1.8]$, not the requested interval. Do not invent missing endpoints without extra assumptions.



</details>

</section>

## Repair and retry {#repair-and-retry}

Complete Q1–Q7 first. Choose the task matching your error and close the earlier solution before trying again. Using a hint means supported work.

<section class="lesson-check" markdown="1">

### Check the evidence {#retry-evidence}

<!-- task:retry-evidence -->

For each claim, decide whether the evidence is sufficient and justify your decision.

**(a)** $f(x)=1/x$ has opposite signs at $-1$ and $1$, so it has a zero between them.

**(b)** $p(x)=x(x^2-1)$ changes sign between $-2$ and $2$, so it has exactly one zero there.

**(c)** An iteration for $q(x)=x^3+x-1=0$ prints $0.6823$ on two successive lines. Does that alone prove the root is $0.6823$ to four decimal places? Supply a justified rounding bracket.

<!-- /task:retry-evidence -->

<details markdown="1">
<summary>Hint</summary>

Separate existence, uniqueness and rounding. Check continuity before applying a sign-change argument.

</details>

<details markdown="1">
<summary>Solution and check</summary>

**(a)** No: $f$ is undefined at $0$, so it is not continuous across the interval; it has no zero. Return to [the sign-change conditions](#locating-roots).

**(b)** No: continuity gives at least one zero, not uniqueness. Here $p(x)=0$ at $-1,0,1$. Return to [Q1's uniqueness argument](#q1--locate-a-root).

**(c)** No: repeated displayed digits do not bound the true root. The required rounding interval is $[0.68225,0.68235)$.

$$q(0.68225)\approx-0.000186461,\qquad q(0.68235)\approx0.000053199.$$

Continuity and opposite signs place a zero strictly between the two bounds; $q'(x)=3x^2+1>0$ makes it unique. Thus it rounds to $0.6823$. Return to [the accuracy check](#example-2--iterate-and-check-the-reported-accuracy) if you used only the iteration display.

</details>

</section>

<section class="lesson-check" markdown="1">

### Build the diagram {#retry-graph}

<!-- task:retry-graph -->

Sketch $y=g(x)=\frac12x+1$ and $y=x$. Starting at $x_0=0$, draw three complete graphical iterations. Label each point on the curve and each point on the diagonal with its coordinates. Explain how a horizontal step supplies the next input and describe the approach to the intersection.

<!-- /task:retry-graph -->

<details markdown="1">
<summary>Hint</summary>

Calculate the three outputs, then distinguish $(x_n,x_{n+1})$ from $(x_{n+1},x_{n+1})$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$x_1=1,\qquad x_2=1.5,\qquad x_3=1.75.$$

From $(0,0)$ draw vertical then horizontal segments through

$$ (0,1)\to(1,1)\to(1,1.5)\to(1.5,1.5)\to(1.5,1.75)\to(1.75,1.75). $$

The first, third and fifth points lie on the curve; the others lie on the diagonal. A horizontal move preserves the output as the height; on the diagonal that same number is also the next input. The steps form a staircase below the fixed point $(2,2)$ and approach it from the left. Indeed $x_{n+1}-2=\frac12(x_n-2)$, so each error halves. A list of numbers without the two graphs and connecting segments is not a completed sketch. If the coordinates were swapped, return to [the coordinate explanation](#staircase-and-cobweb-diagrams).

</details>

</section>

<section class="lesson-check" markdown="1">

### Explain the approximation {#retry-geometry}

<!-- task:retry-geometry -->

**(a)** For $\displaystyle\int_0^1(2-x)\,dx$, sketch the curve and the two rectangles used by the mid-ordinate rule with two equal strips. Label each width and height, then evaluate the estimate. Explain why adding heights alone is not an integral estimate.

**(b)** For Simpson's rule on six equal strips, write the contributions of the three adjacent pairs of strips before collecting terms. Explain the weight of each shared boundary ordinate.

<!-- /task:retry-geometry -->

<details markdown="1">
<summary>Hint</summary>

Use strip centres in (a). In (b), each pair has weights $1,4,1$; decide which endpoints are shared.

</details>

<details markdown="1">
<summary>Solution and check</summary>

**(a)** The boundaries are $0,0.5,1$, so the rectangle widths are $0.5$ and their heights are $f(0.25)=1.75$, $f(0.75)=1.25$. Draw them over their respective strips, with the top edges meeting the line at the centres.

$$I\approx0.5(1.75+1.25)=1.5.$$

Width times height approximates each signed area; heights alone omit the horizontal scale. The line makes the excess triangle and missing triangle cancel in each strip, so here the estimate is exact. This cancellation is not guaranteed for a curved graph. Recover the model at [the mid-ordinate explanation](#the-mid-ordinate-rule).

**(b)** With boundary heights $y_0,\ldots,y_6$,

$$\frac h3[(y_0+4y_1+y_2)+(y_2+4y_3+y_4)+(y_4+4y_5+y_6)]
=\frac h3[y_0+4y_1+2y_2+4y_3+2y_4+4y_5+y_6].$$

The internal pair boundaries $y_2,y_4$ each occur twice with weight $1$, giving weight $2$. The outer endpoints occur only once. Return to [the paired-strip explanation](#simpsons-rule) if you assigned weight $4$ to every internal ordinate.

</details>

</section>

<section class="lesson-check" markdown="1">

### Read a new table {#retry-data}

<!-- task:retry-data -->

Heights are now supplied at $0,0.5,1,1.5,2$ for an integral over $[0,2]$. Without calculating, choose a rule that uses these values directly, state its strip width and weights, and identify the extra sample positions needed to use the other rule on the same four strips.

<!-- /task:retry-data -->

<details markdown="1">
<summary>Hint</summary>

Decide whether the given positions are strip boundaries or centres.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Choose Simpson's rule: four equal strips span the requested interval, with $h=0.5$ and weights $1,4,2,4,1$. The mid-ordinate rule on those same strips needs values at $0.25,0.75,1.25,1.75$. If you chose by the number of entries alone, return to [Q7's position check](#q7--choose-from-the-data).

</details>

</section>

## Later review {#later-review-section}

<section class="lesson-check" markdown="1">

### Later review: choose and justify {#later-review}

<!-- task:later-review -->

Return after studying the next topic, with notes and previous answers closed. Record your first attempt before opening help.

**(a)** Solve $\ln x+x-2=0$ numerically on $[1,2]$ to two decimal places. Choose and explain your numerical procedure; justify existence, uniqueness and the final rounding.

**(b)** Constructed measurements of a function are $f(0)=1$, $f(0.5)=2$, $f(1)=3$, $f(1.5)=2$, $f(2)=1$. Estimate $\displaystyle\int_0^2 f(x)\,dx$ using a rule justified by these data. Show the positions, width and weights, and explain whether this table alone proves your estimate is accurate to two decimal places.

<!-- /task:later-review -->

<details markdown="1">
<summary>Hint</summary>

In (a), a sign-change search is sufficient; an iteration is optional. In (b), separate the validity of a rule from an error guarantee.

</details>

<details markdown="1">
<summary>Solution and check</summary>

**(a)** Put $F(x)=\ln x+x-2$. It is continuous on $[1,2]$; $F(1)=-1$, $F(2)=\ln2>0$. Also $F'(x)=1/x+1>0$, so the root is unique. One valid search tests $1.5$ (negative), $1.6$ (positive), then $1.55$ (negative) and $1.56$ (positive). To certify two decimal places test the rounding boundaries:

$$F(1.555)\approx-0.00352445,\qquad F(1.565)\approx0.01288582.$$

The unique root lies strictly between them and therefore rounds to $1.56$. Merely stopping in the interval from $1.55$ to $1.56$ would not prove that rounding. An iteration is also acceptable if you justify the same final accuracy. Return to [the rounding argument](#example-2--iterate-and-check-the-reported-accuracy) if needed.

**(b)** Four equally spaced strips cover the whole interval; choose Simpson's rule.

$$h=0.5,\qquad I\approx\frac{0.5}{3}[1+1+4(2+2)+2(3)]=4.$$

A second valid choice is the mid-ordinate rule with two strips: boundaries $0,1,2$, width $1$, centres $0.5,1.5$, so the estimate is $1(2+2)=4$. State which partition you use; not every listed value must be used. The positions in the Simpson calculation are boundaries, not the centres of those four strips. The table alone supplies no bound on what happens between samples, so it cannot guarantee two decimal places. Extra information about the function or its error is needed. Return to [the data checks](#q6--decide-whether-the-data-is-suitable) for an incorrect choice; compare [the refinement example](#integration-comparison) if you confused a changed estimate with a proof of accuracy.

</details>

</section>

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
{: .wide-table}

**If your answer looks wrong:** check the original equation, starting index, calculator angle mode, strip count, positions and weights. Keep extra digits in intermediate values and round the final answer as requested.

**You should be able to:** justify a root interval, use and assess an iteration, verify an approximation's accuracy, apply the two integration rules with the correct data, and compare estimates after increasing the number of strips.

<details id="lesson-sources" markdown="1">
<summary>Textbook, scope and question sources</summary>

Textbook: Chapter 8, Sections 8.1–8.3 (printed pp. 114–123). This lesson follows the textbook's iteration, mid-ordinate rule and Simpson's rule. The trapezium rule is earlier knowledge, not the main method here.

All worked examples and practice questions are self-written, not official past-paper questions. The suggested practice time is a guide; no official marks are assigned.

Scope: OxfordAQA 9660 / MA03 P2.9. Working has been checked against January 2025 MA03 Q2(a), Q2(b)(i–ii) and the paired mark scheme; those official questions are not reproduced here.

[OxfordAQA 9660 specification, P2.9, printed p. 24](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf).

</details>

**Next step:** after the next topic, return to [later review](#later-review) and attempt the mixed tasks with notes closed.

**Learning path:** [Previous: Differential Equations](/alevel/a2-mathematics/differential-equations/) · [Next: Vectors](/alevel/a2-mathematics/vectors/).

{% include exam_topic_practice.html %}
