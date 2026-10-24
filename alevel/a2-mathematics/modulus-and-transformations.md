---
title: Modulus Functions and Transformations
layout: subjects
mathjax: true
grade: a2
subject: a2-mathematics
permalink: /alevel/a2-mathematics/modulus-and-transformations/
toc_headings: h2, h3
reading_layout: true
study_page: true
---

[Pure Mathematics](/alevel/a2-mathematics/) · P2.1 Algebra and Functions
{: .lesson-meta}

Learn to sketch modulus graphs, combine transformations and solve modulus equations and inequalities. Use a point on the original graph to check each transformation.

Textbook: Chapter 1, Sections 1.4–1.5 (pp. 8–13). Example 7 uses an illustrative example from the specification; the other examples and all practice questions below are self-written teaching exercises.

- **Learning:** start with [modulus graphs](#modulus-graphs), then follow the worked examples.
- **Homework help:** use [combinations of transformations](#combinations-of-transformations) or [equations and inequalities](#equations-and-inequalities).
- **Revision:** try the [practice questions](#practice) before opening the solutions.
{: .lesson-routes}

<div class="lesson-notes" markdown="1">

**Before you start:** sketch lines and quadratics and solve linear equations ([AS Algebra L02](/alevel/as-mathematics/algebra/#l02)); track a point through a transformation ([L05](/alevel/as-mathematics/algebra/#l05)). Recover [domain and range](/alevel/a2-mathematics/functions/#domain-and-range) when inputs are restricted. Begin by distinguishing input from output changes, then use coordinates to test transformations and graph order to solve equations and inequalities. For revision, use [independent practice](#practice), [repair and retry](#repair-and-retry) and [the later review](#later-review).

</div>

## Modulus Graphs

The **modulus** of a real number is its distance from zero. It is always non-negative: $\lvert-3\rvert=3$ and $\lvert0\rvert=0$.

$$\lvert x\rvert=\begin{cases}x,&x\geq0,\\-x,&x<0.\end{cases}$$

### Decide what is inside the modulus

| Graph | What to keep | What to reflect |
|---|---|---|
| $y=\lvert f(x)\rvert$ | Parts on or above the $x$-axis | Reflect parts below the $x$-axis in the $x$-axis |
| $y=f(\lvert x\rvert)$ | The part with $x\geq0$ | Reflect that part in the $y$-axis to form the part with $x<0$ |
{: .wide-table}

For $y=\lvert f(x)\rvert$, the domain stays the same. For $y=f(\lvert x\rvert)$, an input $x$ is allowed only when $\lvert x\rvert$ belongs to the domain of $f$. The graph rule in the table applies to the allowed non-negative inputs.

<section class="worked-example" markdown="1">

### Example 1 — The two modulus graphs are different

**Question:** For $f(x)=x-1$, defined for all real $x$, sketch $y=\lvert f(x)\rvert$ and $y=f(\lvert x\rvert)$. State their ranges.

![Two graphs comparing y equals modulus of x minus one and y equals modulus of x, minus one. Dashed lines show the original graph y equals x minus one.](/assets/img/modulus-graphs.svg)

**Modulus outside:** $y=\lvert x-1\rvert$. The original graph is below the $x$-axis when $x<1$, so reflect that part in the $x$-axis.

$$y=\begin{cases}x-1,&x\geq1,\\1-x,&x<1.\end{cases}$$

The minimum point is $(1,0)$ and the range is $y\geq0$.

**Modulus inside:** $y=\lvert x\rvert-1$. Keep the original graph for $x\geq0$, then reflect it in the $y$-axis.

$$y=\begin{cases}x-1,&x\geq0,\\-x-1,&x<0.\end{cases}$$

The minimum point is $(0,-1)$ and the range is $y\geq-1$.

**Check:** At $x=-2$, the first graph gives $3$ and the second gives $1$. A modulus inside the function does not make every output non-negative.

</section>

<section class="worked-example" markdown="1">

### Example 2 — Reflect only part of a quadratic

**Question:** Sketch $y=\lvert x^2-4\rvert$.

First sketch $y=x^2-4$. It crosses the $x$-axis at $(-2,0)$ and $(2,0)$, and is below the axis for $-2<x<2$.

Reflect only this middle part in the $x$-axis. Leave the two outer parts unchanged:

$$y=\begin{cases}x^2-4,&x\leq-2\text{ or }x\geq2,\\4-x^2,&-2<x<2.\end{cases}$$

The new graph passes through $(-2,0)$, $(0,4)$ and $(2,0)$. It has range $y\geq0$.

**Common mistake:** reflecting the whole parabola. For example, $(3,5)$ stays at $(3,5)$ because its output is already positive.

</section>

## Combinations of Transformations

Start from $y=f(x)$. Describe each transformation using the axis, direction and scale factor or translation vector.

| New graph | Transformation | A point $(p,q)$ moves to |
|---|---|---|
| $y=f(x-a)+b$ | Translation by the vector $\binom{a}{b}$ | $(p+a,q+b)$ |
| $y=af(x)$, $a>0$ | One-way stretch parallel to the $y$-axis, scale factor $a$ | $(p,aq)$ |
| $y=f(ax)$, $a>0$ | One-way stretch parallel to the $x$-axis, scale factor $\displaystyle\frac1a$ | $(\displaystyle\frac pa,q)$ |
| $y=-f(x)$ | Reflection in the $x$-axis | $(p,-q)$ |
| $y=f(-x)$ | Reflection in the $y$-axis | $(-p,q)$ |
{: .wide-table}

**Inside the function:** change the input coordinates. **Outside the function:** change the output coordinates. A scale factor between $0$ and $1$ makes the graph narrower or shorter in the stated direction.

Why is the horizontal scale factor reciprocal? For an original point $(p,q)$, $f(ax)$ must still receive input $p$ as the argument of $f$. Solve $ax=p$ to obtain $x=p/a$; the height stays $q$. For $Af(Bx+C)+D$, where $B\ne0$, match the input before changing the output:

$$Bx+C=p,\qquad x=\frac{p-C}{B},\qquad y=Aq+D.$$

This checks any proposed sequence of transformations directly.

<section class="worked-example" markdown="1">

### Example 3 — Factorise the input before choosing the order

**Question:** Describe a sequence of transformations from $y=f(x)$ to $y=2f(2x-4)-1$.

Write $2x-4=2(x-2)$. One correct sequence is:

| Step | Transformation | Resulting graph |
|---|---|---|
| 1 | One-way stretch parallel to the $x$-axis, scale factor $\displaystyle\frac12$ | $y=f(2x)$ |
| 2 | Translation by $\binom{2}{0}$ | $y=f(2(x-2))$ |
| 3 | One-way stretch parallel to the $y$-axis, scale factor $2$ | $y=2f(2(x-2))$ |
| 4 | Translation by $\binom{0}{-1}$ | $y=2f(2x-4)-1$ |
{: .wide-table}

**Check with a point:** If $(p,q)$ lies on the original graph, the new input must satisfy $2x-4=p$. Thus,

$$x=\frac p2+2,\qquad y=2q-1.$$

For $f(x)=\lvert x\rvert$, the points $(0,0)$, $(1,1)$ and $(-1,1)$ move to $(2,-1)$, $(\frac52,1)$ and $(\frac32,1)$.

**Common mistake:** translating right by $4$ after the horizontal stretch. The translation in this sequence is right by $2$, as the factorised input shows. Translating right by $4$ **before** the horizontal stretch is a different, correct sequence.

</section>

<section class="worked-example" markdown="1">

### Example 4 — Reflection followed by translation

**Question:** Describe how to obtain $y=3-x^2$ from $y=x^2$.

1. Reflect in the $x$-axis to obtain $y=-x^2$.
2. Translate by $\binom{0}{3}$ to obtain $y=-x^2+3$.

The minimum point $(0,0)$ becomes a maximum point $(0,3)$. The point $(2,4)$ becomes $(2,-1)$.

**Check the order:** Translating up by $3$ first and then reflecting would give $y=-(x^2+3)=-x^2-3$, which is a different graph.

</section>

<section class="lesson-check" markdown="1">

### Pause and try {#check-point}

<!-- task:check-point -->
A point $(6,-2)$ lies on $y=f(x)$. For $y=-2f(3x)+1$, complete the input-matching equation and find the new point.
<!-- /task:check-point -->

<details markdown="1">
<summary>Hint</summary>

Make the input sent to $f$ equal $6$, then transform the old output $-2$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$3x=6\Rightarrow x=2,\qquad y=-2(-2)+1=5.$$

The new point is $(2,5)$. The answer $(18,5)$ multiplies the coordinate instead of matching the input; return to the input equation.

</details>

</section>

## Equations and Inequalities

### Solve a modulus equation in cases

1. Find where the expression inside the modulus is zero. This separates the cases.
2. Write the equation for each case, together with its condition.
3. Solve each equation and check the condition.
4. Substitute each accepted answer into the original equation.

A sketch helps you see how many intersections to expect. If the equation is $\lvert u(x)\rvert=v(x)$, every solution must also have $v(x)\geq0$.

<section class="worked-example" markdown="1">

### Example 5 — Check both solutions

**Question:** Solve $\lvert2x-3\rvert=x+1$.

The expression $2x-3$ is zero at $x=\frac32$.

**Case 1: $x\geq\frac32$.** Then $2x-3=x+1$, giving $x=4$. This satisfies the case condition.

**Case 2: $x<\frac32$.** Then $3-2x=x+1$, giving $x=\frac23$. This also satisfies the case condition.

$$\boxed{x=\frac23\text{ or }x=4}.$$

**Check:** At $x=4$, both sides equal $5$. At $x=\frac23$, both sides equal $\frac53$.

</section>

<section class="worked-example" markdown="1">

### Example 6 — A modulus inequality

**Question:** Solve $\lvert x-1\rvert<2$.

The distance from $x$ to $1$ must be less than $2$, so $x$ lies between $-1$ and $3$.

Algebraically,

$$-2<x-1<2\quad\Longrightarrow\quad\boxed{-1<x<3}.$$

The ends are excluded because the inequality is strict. For $\lvert x-1\rvert\leq2$, the answer would be $-1\leq x\leq3$.

**Useful rules:** For $a>0$,

$$\lvert u\rvert<a\iff-a<u<a,$$

$$\lvert u\rvert>a\iff u<-a\text{ or }u>a.$$

Do not use these rules with a negative bound. A modulus is never negative, so $\lvert u\rvert<-2$ has no solutions.

</section>

<section class="worked-example" markdown="1">

### Example 7 — Modulus on both sides

**Question:** Solve $\lvert x+2\rvert<3\lvert x\rvert$.

**Source:** Illustrative example in [OxfordAQA Mathematics (9660) specification, P2.1, printed p. 21](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf). The solution is written for this site.

First find where the graphs $y=\lvert x+2\rvert$ and $y=3\lvert x\rvert$ meet. Both sides are non-negative, so squaring preserves the equality:

$$(x+2)^2=9x^2\quad\Rightarrow\quad(2x+1)(x-1)=0.$$

On the same axes, draw the V shapes with vertices $(-2,0)$ for $y=\lvert x+2\rvert$ and $(0,0)$ for $y=3\lvert x\rvert$. Label intersections $(-\frac12,\frac32)$ and $(1,3)$. The required inputs put the first graph strictly below the second; use the sketch and interval tests to check each other.

The boundary values are $x=-\frac12$ and $x=1$. The two V-shaped graphs change order at these intersections. Test one point in each of the three intervals:

| Interval | Test input | Comparison | Include? |
|---|---|---|---|
| $x<-\frac12$ | $-1$ | $1<3$ | Yes |
| $-\frac12<x<1$ | $0$ | $2<0$ is false | No |
| $x>1$ | $2$ | $4<6$ | Yes |

Therefore $\boxed{x<-\frac12\text{ or }x>1}$. Exclude the boundary values because the inequality is strict.

**Algebraic check:** since both sides are non-negative, the inequality is equivalent to $(x+2)^2<9x^2$, or $(2x+1)(x-1)>0$. This gives the same two intervals.

**Common mistake:** using a rule for $\lvert u\rvert<a$ as if $3\lvert x\rvert$ were a fixed constant.

</section>

## Practice

Sketch graphs on paper and label important points. Try each question before opening the hint or solution.

<section class="lesson-check" markdown="1">

### Question 1 {#question-1--inside-or-outside}

For $f(x)=x+2$, defined for all real $x$, sketch $y=\lvert f(x)\rvert$ and $y=f(\lvert x\rvert)$. State the minimum point and range of each graph.

<details markdown="1">
<summary>Hint</summary>

Write the two expressions as $\lvert x+2\rvert$ and $\lvert x\rvert+2$. Find where the expression inside each modulus is zero.

</details>

<details markdown="1">
<summary>Solution and check</summary>

For $y=\lvert x+2\rvert$, the minimum point is $(-2,0)$ and the range is $y\geq0$.

For $y=\lvert x\rvert+2$, the minimum point is $(0,2)$ and the range is $y\geq2$.

**Check:** At $x=-3$, the outputs are $1$ and $5$ respectively.

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 2 {#question-2--a-quadratic-modulus-graph}

Sketch $y=\lvert x^2-9\rvert$. State its intercepts and range, and give a formula for each part.

<details markdown="1">
<summary>Hint</summary>

Find the zeros of $x^2-9$. Reflect only the part where $x^2-9<0$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$y=\begin{cases}x^2-9,&x\leq-3\text{ or }x\geq3,\\9-x^2,&-3<x<3.\end{cases}$$

The $x$-intercepts are $(-3,0)$ and $(3,0)$, the $y$-intercept is $(0,9)$, and the range is $y\geq0$.

**Check:** At $x=2$, $y=5$. At $x=4$, $y=7$. Both agree with the original modulus expression.

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 3 {#question-3--a-combination-of-transformations}

Describe a sequence of transformations from $y=f(x)$ to $y=-3f(2x+6)+4$. Find the new coordinates of the point $(2,5)$.

<details markdown="1">
<summary>Hint</summary>

Write $2x+6=2(x+3)$. For the point, solve $2x+6=2$ and apply the outside operations to $5$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

1. One-way stretch parallel to the $x$-axis, scale factor $\frac12$.
2. Translation by $\binom{-3}{0}$.
3. One-way stretch parallel to the $y$-axis, scale factor $3$.
4. Reflection in the $x$-axis.
5. Translation by $\binom{0}{4}$.

The point becomes $(-2,-11)$: $2(-2)+6=2$ and $-3(5)+4=-11$.

**Check:** In general, $(p,q)$ becomes $(\frac p2-3,4-3q)$.

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 4 {#question-4--reject-an-answer-from-the-wrong-case}

Solve $\lvert2x-3\rvert=3x+1$.

<details markdown="1">
<summary>Hint</summary>

Split at $x=\frac32$. An answer must satisfy the condition of the case that produced it.

</details>

<details markdown="1">
<summary>Solution and check</summary>

For $x\geq\frac32$, the equation $2x-3=3x+1$ gives $x=-4$. Reject it because $-4<\frac32$.

For $x<\frac32$, the equation $3-2x=3x+1$ gives $x=\frac25$, which satisfies the condition.

$$\boxed{x=\frac25}.$$

**Check:** Both sides of the original equation equal $\frac{11}{5}$. At $x=-4$, the left side is $11$ and the right side is $-11$, so it is not a solution.

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 5 {#question-5--an-inequality-with-two-intervals}

Solve $\lvert2x+1\rvert\geq5$.

<details markdown="1">
<summary>Hint</summary>

The expression inside the modulus must be at least $5$ or at most $-5$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$2x+1\geq5\quad\text{or}\quad2x+1\leq-5.$$

Therefore,

$$\boxed{x\leq-3\text{ or }x\geq2}.$$

**Check:** Both ends give modulus $5$ and are included. The value $x=0$ gives $1$, so it does not belong to either interval.

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 6 {#question-6--compare-two-modulus-graphs}

Solve $\lvert x-1\rvert\leq2\lvert x\rvert$. Find the intersection points of the two graphs and explain which intervals satisfy the inequality.

<details markdown="1">
<summary>Hint</summary>

Both sides are non-negative. Find the boundary values by squaring the equality, then test the intervals.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The equality $(x-1)^2=4x^2$ gives $(3x-1)(x+1)=0$. The graphs meet at $(-1,2)$ and $(\frac13,\frac23)$.

The inequality is equivalent to $(3x-1)(x+1)\geq0$, so $\boxed{x\leq-1\text{ or }x\geq\frac13}$.

The inputs $-2$, $0$ and $1$ give comparisons $3\leq4$, $1\leq0$ and $0\leq2$. These confirm the graph order in the three intervals. Both intersection inputs are included.

</details>

</section>

## Repair and try again {#repair-and-retry}

Choose the reasoning linked to your error, close the old solution, then attempt a new task.

| Error | Recovery action | New task |
| --- | --- | --- |
| Confused inside/outside modulus or lost a domain | Review [the two graphs](#example-1--the-two-modulus-graphs-are-different) and write the allowed inputs first | [R1](#retry-graphs) |
| Wrong translation, scale factor or order | Review [combined transformations](#combinations-of-transformations); solve the input-matching equation | [R2](#retry-transform) |
| Accepted an answer from the wrong case | Review [the case steps](#solve-a-modulus-equation-in-cases) and keep each case interval | [R3](#retry-equation) |
| Gave intersection inputs only, or chose wrong intervals | Review [graph comparison](#example-7--modulus-on-both-sides); test graph order between intersections | [Later review](#later-review) |

<section class="lesson-check" markdown="1">

### R1 {#retry-graphs}

<!-- task:retry-graphs -->
Let $f(x)=x-2$ for $1\leq x\leq4$. Sketch $y=\lvert f(x)\rvert$ and $y=f(\lvert x\rvert)$. State both domains and ranges and label their endpoints.
<!-- /task:retry-graphs -->

<details markdown="1">
<summary>Hint</summary>

The original function only accepts $[1,4]$. Check its input condition when the input is $x$ and when it is $\lvert x\rvert$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

For $y=\lvert x-2\rvert$, the domain is $[1,4]$ and range $[0,2]$. Draw segments $(1,1)\to(2,0)\to(4,2)$.

For $y=\lvert x\rvert-2$, require $1\leq\lvert x\rvert\leq4$, giving domain $[-4,-1]\cup[1,4]$ and range $[-1,2]$. Draw the two segments $(-4,2)\to(-1,-1)$ and $(1,-1)\to(4,2)$ with filled endpoints. Do not join across the excluded inputs $-1<x<1$.

</details>

</section>

<section class="lesson-check" markdown="1">

### R2 {#retry-transform}

<!-- task:retry-transform -->
The domain of $f$ is $0\leq x\leq4$, and $(1,3)$ lies on its graph. Describe a sequence from $y=f(x)$ to $y=-2f(4-x)+1$, find the image of $(1,3)$ and state the new domain.
<!-- /task:retry-transform -->

<details markdown="1">
<summary>Hint</summary>

Solve $4-x=1$ to check the sequence. The domain must satisfy $0\leq4-x\leq4$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

One sequence: reflect in the $y$-axis, translate right by $4$, stretch parallel to the $y$-axis by factor $2$, reflect in the $x$-axis, then translate up by $1$.

$$4-x=1\Rightarrow x=3,\qquad y=-2(3)+1=-5.$$

The point is $(3,-5)$ and domain $[0,4]$. Translating right by $4$ before the reflection in the $y$-axis gives input $-x-4$, so that sequence does not give the required graph.

</details>

</section>

<section class="lesson-check" markdown="1">

### R3 {#retry-equation}

<!-- task:retry-equation -->
Solve $\lvert x+1\rvert=2x-1$, showing why each candidate is accepted or rejected.
<!-- /task:retry-equation -->

<details markdown="1">
<summary>Hint</summary>

The cases meet at $x+1=0$; a solution also requires a non-negative right-hand side.

</details>

<details markdown="1">
<summary>Solution and check</summary>

For $x\geq-1$, $x+1=2x-1$ gives $x=2$, which is allowed. For $x<-1$, $-x-1=2x-1$ gives $x=0$, outside that case, so reject it. The only solution is $\boxed{x=2}$; both original sides equal $3$. At candidate $0$, the right side is $-1$, which cannot equal a modulus.

</details>

</section>

## Return later {#review}

After another topic, attempt this before opening the reference. Check the sketch against algebra and record any help used.

<section class="lesson-check" markdown="1">

### Review task {#later-review}

<!-- task:later-review -->
Sketch $y=\lvert x-2\rvert$ and $y=2\lvert x+1\rvert$ on the same axes. Label their vertices and intersections, then solve $\lvert x-2\rvert\geq2\lvert x+1\rvert$, explaining the graph order. Separately, $(4,-1)$ lies on $y=f(x)$; find its image on $y=f(2-3x)+4$.
<!-- /task:later-review -->

<details markdown="1">
<summary>Hint</summary>

Equality gives the interval boundaries. Justify the signs before squaring; match the input for the point transformation.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The vertices are $(2,0)$ and $(-1,0)$. Both sides are non-negative, so squaring preserves equality and the inequality:

$$(x-2)^2\geq4(x+1)^2\iff -3x(x+4)\geq0.$$

The intersections are $(-4,6)$ and $(0,2)$. The first graph is on or above the second for $-4\leq x\leq0$ and below outside. Thus the solution is $\boxed{[-4,0]}$, including both intersection inputs. For example $x=-1$ gives $3\geq0$, while $x=1$ gives $1\not\geq4$.

The point transformation satisfies $2-3x=4$, giving $(-\frac23,3)$. If the intervals were wrong, return to Example 7; if the input coordinate was wrong, review input matching and attempt R2.

</details>

</section>

## Quick Reference

| Task | First step | Check |
|---|---|---|
| Sketch $y=\lvert f(x)\rvert$ | Find where $f(x)<0$ and reflect those parts in the $x$-axis | Every output is non-negative |
| Sketch $y=f(\lvert x\rvert)$ | Keep the allowed part for $x\geq0$ and reflect in the $y$-axis | The new graph is symmetric about the $y$-axis |
| Combine transformations | Factorise the expression inside $f$ | Track a known point through the steps |
| Solve a modulus equation | Split where the expression inside the modulus is zero | Check each case condition and the original equation |
| Solve a modulus inequality | Find equality boundaries and compare the graphs or test intervals | Check whether the ends are included; square only when both sides are non-negative |

**Can you explain it?** Why are $\lvert x-1\rvert$ and $\lvert x\rvert-1$ different? Why does $f(2x)$ have horizontal scale factor $\frac12$? Why must an answer from a case be checked?

[Back to the topic index](/alevel/a2-mathematics/) · [All reference notes](/alevel/a2-mathematics/quick-reference/#modulus-function)

<details markdown="1">
<summary>Scope and sources</summary>

[OxfordAQA 9660 specification v5.2, P2.1](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf).

Official questions and paired marking material consulted (mirrors of the published papers): January 2025 Q6(c), QP p13 / MS p11; January 2024 Q2, QP p3 / MS p5. [January 2025 QP](https://aqamat.alevelclouds.com/25_01_QP_P2.pdf) · [MS](https://aqamat.alevelclouds.com/25_01_MS_P2.pdf) · [January 2024 QP](https://aqamat.alevelclouds.com/24_01_QP_P2.pdf) · [MS](https://aqamat.alevelclouds.com/24_01_MS_P2.pdf).

The classroom examples, practice, retries and review are self-written teaching material, with no official marks. Modulus Example 7 remains a specification illustration with a site-written solution.

</details>

**Learning path:** [Previous: Functions](/alevel/a2-mathematics/functions/) · [Next: Algebraic Fractions and Division](/alevel/a2-mathematics/algebraic-fractions-and-division/).
