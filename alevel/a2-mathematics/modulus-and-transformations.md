---
title: Modulus Functions and Transformations
layout: subjects
mathjax: true
grade: a2
subject: a2-mathematics
permalink: /alevel/a2-mathematics/modulus-and-transformations/
toc_headings: h2
study_page: true
---

[Pure Mathematics](/alevel/a2-mathematics/) · P2.1 Algebra and Functions

Learn to sketch modulus graphs, combine transformations and solve modulus equations. Use a point on the original graph to check each transformation.

Textbook: Chapter 1, Sections 1.4–1.5 (pp. 8–13). Example 7 uses an illustrative example from the specification; the other examples and all practice questions below are self-written teaching exercises.

- **Learning:** start with [modulus graphs](#modulus-graphs), then follow the worked examples.
- **Homework help:** use [combinations of transformations](#combinations-of-transformations) or [equations and inequalities](#equations-and-inequalities).
- **Revision:** try the [practice questions](#practice) before opening the solutions.

**Before you start:** you should know how to sketch straight lines and quadratics, solve linear equations and find a domain and range. Review [Functions](/alevel/a2-mathematics/functions/) if needed.

## Modulus Graphs

The **modulus** of a real number is its distance from zero. It is always non-negative: $\lvert-3\rvert=3$ and $\lvert0\rvert=0$.

$$\lvert x\rvert=\begin{cases}x,&x\geq0,\\-x,&x<0.\end{cases}$$

### Decide what is inside the modulus

| Graph | What to keep | What to reflect |
|---|---|---|
| $y=\lvert f(x)\rvert$ | Parts on or above the $x$-axis | Reflect parts below the $x$-axis in the $x$-axis |
| $y=f(\lvert x\rvert)$ | The part with $x\geq0$ | Reflect that part in the $y$-axis to form the part with $x<0$ |

For $y=\lvert f(x)\rvert$, the domain stays the same. For $y=f(\lvert x\rvert)$, an input $x$ is allowed only when $\lvert x\rvert$ belongs to the domain of $f$. The graph rule in the table applies to the allowed non-negative inputs.

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

### Example 2 — Reflect only part of a quadratic

**Question:** Sketch $y=\lvert x^2-4\rvert$.

First sketch $y=x^2-4$. It crosses the $x$-axis at $(-2,0)$ and $(2,0)$, and is below the axis for $-2<x<2$.

Reflect only this middle part in the $x$-axis. Leave the two outer parts unchanged:

$$y=\begin{cases}x^2-4,&x\leq-2\text{ or }x\geq2,\\4-x^2,&-2<x<2.\end{cases}$$

The new graph passes through $(-2,0)$, $(0,4)$ and $(2,0)$. It has range $y\geq0$.

**Common mistake:** reflecting the whole parabola. For example, $(3,5)$ stays at $(3,5)$ because its output is already positive.

## Combinations of Transformations

Start from $y=f(x)$. Describe each transformation using the axis, direction and scale factor or translation vector.

| New graph | Transformation | A point $(p,q)$ moves to |
|---|---|---|
| $y=f(x-a)+b$ | Translation by the vector $\begin{pmatrix}a\\\\b\end{pmatrix}$ | $(p+a,q+b)$ |
| $y=af(x)$, $a>0$ | One-way stretch parallel to the $y$-axis, scale factor $a$ | $(p,aq)$ |
| $y=f(ax)$, $a>0$ | One-way stretch parallel to the $x$-axis, scale factor $\displaystyle\frac1a$ | $(\displaystyle\frac pa,q)$ |
| $y=-f(x)$ | Reflection in the $x$-axis | $(p,-q)$ |
| $y=f(-x)$ | Reflection in the $y$-axis | $(-p,q)$ |

**Inside the function:** change the input coordinates. **Outside the function:** change the output coordinates. A scale factor between $0$ and $1$ makes the graph narrower or shorter in the stated direction.

### Example 3 — Factorise the input before choosing the order

**Question:** Describe a sequence of transformations from $y=f(x)$ to $y=2f(2x-4)-1$.

Write $2x-4=2(x-2)$. One correct sequence is:

| Step | Transformation | Resulting graph |
|---|---|---|
| 1 | One-way stretch parallel to the $x$-axis, scale factor $\displaystyle\frac12$ | $y=f(2x)$ |
| 2 | Translation by $\begin{pmatrix}2\\\\0\end{pmatrix}$ | $y=f(2(x-2))$ |
| 3 | One-way stretch parallel to the $y$-axis, scale factor $2$ | $y=2f(2(x-2))$ |
| 4 | Translation by $\begin{pmatrix}0\\\\-1\end{pmatrix}$ | $y=2f(2x-4)-1$ |

**Check with a point:** If $(p,q)$ lies on the original graph, the new input must satisfy $2x-4=p$. Thus,

$$x=\frac p2+2,\qquad y=2q-1.$$

For $f(x)=\lvert x\rvert$, the points $(0,0)$, $(1,1)$ and $(-1,1)$ move to $(2,-1)$, $(\frac52,1)$ and $(\frac32,1)$.

**Common mistake:** translating right by $4$ after the horizontal stretch. The translation in this sequence is right by $2$, as the factorised input shows. Translating right by $4$ **before** the horizontal stretch is a different, correct sequence.

### Example 4 — Reflection followed by translation

**Question:** Describe how to obtain $y=3-x^2$ from $y=x^2$.

1. Reflect in the $x$-axis to obtain $y=-x^2$.
2. Translate by $\begin{pmatrix}0\\\\3\end{pmatrix}$ to obtain $y=-x^2+3$.

The minimum point $(0,0)$ becomes a maximum point $(0,3)$. The point $(2,4)$ becomes $(2,-1)$.

**Check the order:** Translating up by $3$ first and then reflecting would give $y=-(x^2+3)=-x^2-3$, which is a different graph.

## Equations and Inequalities

### Solve a modulus equation in cases

1. Find where the expression inside the modulus is zero. This separates the cases.
2. Write the equation for each case, together with its condition.
3. Solve each equation and check the condition.
4. Substitute each accepted answer into the original equation.

A sketch helps you see how many intersections to expect. If the equation is $\lvert u(x)\rvert=v(x)$, every solution must also have $v(x)\geq0$.

### Example 5 — Check both solutions

**Question:** Solve $\lvert2x-3\rvert=x+1$.

The expression $2x-3$ is zero at $x=\frac32$.

**Case 1: $x\geq\frac32$.** Then $2x-3=x+1$, giving $x=4$. This satisfies the case condition.

**Case 2: $x<\frac32$.** Then $3-2x=x+1$, giving $x=\frac23$. This also satisfies the case condition.

$$\boxed{x=\frac23\text{ or }x=4}.$$

**Check:** At $x=4$, both sides equal $5$. At $x=\frac23$, both sides equal $\frac53$.

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

### Example 7 — Modulus on both sides

**Question:** Solve $\lvert x+2\rvert<3\lvert x\rvert$.

**Source:** Illustrative example in [OxfordAQA Mathematics (9660) specification, P2.1, printed p. 21](https://www.oxfordaqa.com/wp-content/uploads/2023/10/oxfordaqa-a-level-mathematics-specification.pdf). The solution is written for this site.

First find where the graphs $y=\lvert x+2\rvert$ and $y=3\lvert x\rvert$ meet. Both sides are non-negative, so squaring preserves the equality:

$$(x+2)^2=9x^2\quad\Rightarrow\quad(2x+1)(x-1)=0.$$

The boundary values are $x=-\frac12$ and $x=1$. The two V-shaped graphs change order at these intersections. Test one point in each of the three intervals:

| Interval | Test input | Comparison | Include? |
|---|---|---|---|
| $x<-\frac12$ | $-1$ | $1<3$ | Yes |
| $-\frac12<x<1$ | $0$ | $2<0$ is false | No |
| $x>1$ | $2$ | $4<6$ | Yes |

Therefore $\boxed{x<-\frac12\text{ or }x>1}$. Exclude the boundary values because the inequality is strict.

**Algebraic check:** since both sides are non-negative, the inequality is equivalent to $(x+2)^2<9x^2$, or $(2x+1)(x-1)>0$. This gives the same two intervals.

**Common mistake:** using a rule for $\lvert u\rvert<a$ as if $3\lvert x\rvert$ were a fixed constant.

## Practice

Sketch graphs on paper and label important points. Try each question before opening the hint or solution.

### Question 1 — Inside or outside?

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

### Question 2 — A quadratic modulus graph

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

### Question 3 — A combination of transformations

Describe a sequence of transformations from $y=f(x)$ to $y=-3f(2x+6)+4$. Find the new coordinates of the point $(2,5)$.

<details markdown="1">
<summary>Hint</summary>

Write $2x+6=2(x+3)$. For the point, solve $2x+6=2$ and apply the outside operations to $5$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

1. One-way stretch parallel to the $x$-axis, scale factor $\frac12$.
2. Translation by $\begin{pmatrix}-3\\\\0\end{pmatrix}$.
3. One-way stretch parallel to the $y$-axis, scale factor $3$.
4. Reflection in the $x$-axis.
5. Translation by $\begin{pmatrix}0\\\\4\end{pmatrix}$.

The point becomes $(-2,-11)$: $2(-2)+6=2$ and $-3(5)+4=-11$.

**Check:** In general, $(p,q)$ becomes $(\frac p2-3,4-3q)$.

</details>

### Question 4 — Reject an answer from the wrong case

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

### Question 5 — An inequality with two intervals

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

### Question 6 — Compare two modulus graphs

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

**Learning path:** [Previous: Functions](/alevel/a2-mathematics/functions/) · [Next: Algebraic Fractions and Division](/alevel/a2-mathematics/algebraic-fractions-and-division/).
