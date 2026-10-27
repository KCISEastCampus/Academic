---
layout: subjects
title: "Equations and inequalities"
mathjax: true
grade: igcse
subject: igcse-mathematics
permalink: /igcse/mathematics/equations-and-inequalities/
reading_layout: true
study_page: true
toc_headings: "h2"
---

[IGCSE Mathematics](/igcse/mathematics/#learning-start)

{:.lesson-meta}

## Start here {#start}

An equation asks which values make two expressions equal. An inequality asks for every value making one expression larger or smaller. We will form these statements from situations and represent their solutions, not just move symbols.

You need [expressions and substitution](/igcse/mathematics/expressions-and-formulae/#start). For graph tasks use [coordinates and lines](/igcse/mathematics/coordinates-and-lines/#start). The later sections use two-variable regions and quadratic inequalities; study [quadratics](/igcse/mathematics/quadratics-and-simultaneous-equations/#roots) before the last section.

All examples, tasks and data on this page are self-written, with no official marks; data are illustrative. Try on paper before opening help.

{:.lesson-meta}

## Keep both sides equal {#balance}

Equality acts like a balanced scale. Add/subtract the same amount on both sides, or multiply/divide both by the same nonzero amount. Expand brackets first if they hide x terms. “Move and change sign” is shorthand for these operations, not an extra rule.

<div class="worked-example" markdown="1">

### Unknowns on both sides {#example-balance}

**Question:** Solve $3(x+2)=2x+11$.

$$3x+6=2x+11,\quad x+6=11,\quad x=5.$$

Subtract 2x on both sides, then subtract 6. Check the original: 3(5+2)=21 and 2(5)+11=21.

</div>

Sometimes x cancels. x+2=x+2 is true for every real x, while x+2=x+3 has no solution, since it would imply 2=3. Do not divide by a quantity that may be zero without discussing it.

## Find and interpret solutions {#practice}

<div class="lesson-check" markdown="1">

### A new equation {#practice-equations}

**Question:** Solve $4(2x-1)=3(x+2)+5$. Also decide how many solutions $2(x+1)=2x+2$ and $2(x+1)=2x+3$ have.

<details markdown="1">

<summary>Hint</summary>

Distribute each multiplier. If x cancels, read the remaining statement.

</details>

<details markdown="1">

<summary>Solution and check</summary>

$$8x-4=3x+11,\quad 5x=15,\quad x=3.$$

Check: both sides equal 20. The second equation reduces to 2=2, so every real x works. The third reduces to 2=3, so none works.

</details>

</div>

## Choose an unknown from the story {#model}

<div class="worked-example" markdown="1">

### A rectangle gives an equation {#example-model}

**Question:** A rectangle has width w cm and length (w+3) cm. Its perimeter is 26 cm. Find its dimensions.

Perimeter adds two widths and two lengths; area would multiply. Define w>0.

$$2w+2(w+3)=26,\quad 4w+6=26,\quad w=5.$$

Width is 5 cm, length 8 cm. Check 2×5+2×8=26 cm and both lengths are positive.

</div>

<div class="lesson-check" markdown="1">

### A cost decision {#practice-model}

**Question:** Plan A costs 8 dollars plus 3 dollars per lesson. Plan B costs 20 dollars plus 1 dollar per lesson. For how many lessons do the costs match? Which plan is cheaper for 10 lessons?

<details markdown="1">

<summary>Hint</summary>

Let n count lessons and equate the two total-cost expressions.

</details>

<details markdown="1">

<summary>Solution and check</summary>

$$8+3n=20+n,\quad 2n=12,\quad n=6.$$

$$C_A(10)=38,\qquad C_B(10)=30.$$

The plans match at 6 lessons, a valid whole-number count. For 10 lessons B is 8 dollars cheaper. The cheaper variable rate does not automatically win for every number of lessons: fixed fees matter.

</details>

</div>

## Equality is a meeting point {#graph-solutions}

To solve f(x)=g(x) graphically, draw y=f(x) and y=g(x). At an intersection both use the same x and the same y. The x-coordinate solves the equation. Graph reading normally gives an approximation; state the scale and accuracy.

<div class="worked-example" markdown="1">

### Two straight-line graphs {#example-graph}

**Question:** Use graphs to estimate the solution of $2x+1=6-x$ to 1 decimal place.

Plot both lines on axes with x from 0 to 3 and y from 0 to 7, using at least ten small divisions per x unit. Data to plot:

| x | 0 | 1 | 2 | 3 |
| --- | --- | --- | --- | --- |
| 2x+1 | 1 | 3 | 5 | 7 |
| 6−x | 6 | 5 | 4 | 3 |

Join each row by a straight line. They meet near (1.67,4.33), so x≈1.7 to 1 d.p. Algebra checks this: 3x=5 gives x=5/3. The vertical coordinate is not the requested solution.

</div>

<div class="lesson-check" markdown="1">

### Draw your own comparison {#practice-graph}

**Question:** Use graphs to solve $1.5x+0.4=4.1-0.7x$ to 1 decimal place, for 0≤x≤3. Construct a table at x=0,1,2,3 and draw both straight lines. Check algebraically.

<details markdown="1">

<summary>Hint</summary>

Use vertical range 0–5 and a horizontal scale allowing tenths.

</details>

<details markdown="1">

<summary>Solution and check</summary>

| x | 0 | 1 | 2 | 3 |
| --- | --- | --- | --- | --- |
| 1.5x+0.4 | 0.4 | 1.9 | 3.4 | 4.9 |
| 4.1−0.7x | 4.1 | 3.4 | 2.7 | 2.0 |

$$2.2x=3.7,\quad x=\frac{37}{22}\approx1.6818,\quad x\approx1.7\text{ (1 d.p.)}.$$

The lines meet near (1.68,2.92). A rough drawing can support about 1.7, not many decimal places. If you read 2.9 as x, swap back to the horizontal coordinate.

</details>

</div>

## A whole set of values {#inequalities}

For x<3 the endpoint 3 is excluded; use an open circle. For x≤3 use a filled circle. Add/subtract as in equations, but multiplying or dividing by a negative reverses order: 2<5 becomes −2>−5. Mark the entire set, not just the boundary.

<div class="worked-example" markdown="1">

### Reverse order when dividing {#example-inequality}

**Question:** Solve $4-3x\ge10$ and represent it on a number line.

$$-3x\ge6,\qquad x\le-2.$$

Subtract 4, then divide by −3 and reverse ≥. Draw a filled circle at −2 and shade left with an arrow. Check x=−3 gives 13≥10; x=0 fails.

</div>

<div class="lesson-check" markdown="1">

### Keep the endpoints {#practice-inequality}

**Question:** Solve $-1<2x+3\le7$ and draw the solution set on a number line. Solve $5-2x<11$ and list its integer solutions from −5 to 2.

<details markdown="1">

<summary>Hint</summary>

Perform each operation on all parts of the compound inequality.

</details>

<details markdown="1">

<summary>Solution and check</summary>

$$-4<2x\le4,\quad -2<x\le2;\qquad -2x<6,\quad x>-3.$$

First: open circle at −2, filled at 2, shade between. Second: open at −3, shade right; integers in the stated window are −2,−1,0,1,2. Reversing only one of the two compound boundaries would lose values.

</details>

</div>

## Two-variable regions {#regions}

An inequality such as y≤x+1 selects a half-plane. Draw its boundary y=x+1. Use a solid line if equality is included and a dashed line if strict. Test a point not on the boundary to choose a side. Several inequalities require their intersection: points satisfying every condition.

<div class="worked-example" markdown="1">

### Shade the common part {#example-region}

**Question:** On axes from 0 to 5, represent $x\ge0$, $y\ge0$, $x+y\le4$.

The first two keep the first quadrant, including axes. The last boundary joins (0,4) and (4,0). Testing (0,0) gives 0≤4, so keep the side containing the origin.

Draw the filled triangle with vertices (0,0),(4,0),(0,4); all three boundaries are solid and included. A point such as (3,3) is outside because its coordinates sum to 6.

</div>

<div class="lesson-check" markdown="1">

### A different feasible region {#practice-region}

**Question:** Draw and shade the region satisfying $x\ge0$, $y\ge1$, $x+y<5$. State which boundaries are included and decide whether (1,2), (4,1) and (0,1) belong.

<details markdown="1">

<summary>Hint</summary>

Plot y=1 and the line through (0,5),(5,0). Use dashed style for a strict inequality.

</details>

<details markdown="1">

<summary>Solution and check</summary>

Shade above y=1, right of x=0 and below x+y=5. The x=0 and y=1 edges are solid; the sloping edge is dashed. The geometric corners are (0,1),(0,5),(4,1), but the latter two are excluded. (1,2) and (0,1) belong; (4,1) fails the strict sum condition. Do not mark every corner included just because it is an intersection.

</details>

</div>

## Use signs between roots {#quadratic-inequalities}

A quadratic inequality asks where the graph is above or below the axis. Find the roots, split the number line there, and test each interval. Roots alone are boundaries, not the complete answer.

<div class="worked-example" markdown="1">

### Choose intervals {#example-quadratic}

**Question:** Solve $x^2-x-6>0$.

$$x^2-x-6=(x-3)(x+2).$$

The roots are −2,3. Test x=−3,0,4: products are positive, negative, positive. Thus x<−2 or x>3. Draw open circles at −2 and 3 with outward rays. Exclude both roots because the inequality is strict.

</div>

<div class="lesson-check" markdown="1">

### Find a different sign set {#practice-quadratic}

**Question:** Solve $2x^2-5x-3\le0$ and $-x^2+x+6<0$. Show interval reasoning and number lines.

<details markdown="1">

<summary>Hint</summary>

Factor the first. For the second you can multiply by −1, reversing the inequality.

</details>

<details markdown="1">

<summary>Solution and check</summary>

$$2x^2-5x-3=(2x+1)(x-3),\qquad -\tfrac12\le x\le3.$$

$$-x^2+x+6<0\quad\Longleftrightarrow\quad (x-3)(x+2)>0,$$

$$x<-2\quad\text{or}\quad x>3.$$

First product is positive outside and negative between the roots, so shade between filled endpoints −½,3. Second uses the exterior intervals with open endpoints −2,3. Checking x=0 distinguishes the answers: it satisfies the first but not the second.

</details>

</div>

## Go back to the failed idea {#retry}

Unbalanced equations: [balance](#balance). Wrong cost formula: [modelling](#model). Wrong graph coordinate: [intersection](#graph-solutions). Wrong sign or endpoint: [inequalities](#inequalities). Wrong side: [regions](#regions). Only roots reported: [quadratic intervals](#quadratic-inequalities).

<div class="lesson-check" markdown="1">

### Retry a model and equation {#retry-equations}

**Question:** Solve $5(x-2)=2x+8$. Then a rectangle has length (w+2) cm, width w cm and perimeter 20 cm: form an equation and find both lengths.

<details markdown="1">

<summary>Hint</summary>

In the rectangle, each dimension is counted twice.

</details>

<details markdown="1">

<summary>Solution and check</summary>

$$5x-10=2x+8,\quad x=6;\qquad 2w+2(w+2)=20,\quad w=4.$$

The rectangle is 4 cm by 6 cm. Check perimeter 8+12=20 cm; in the equation both sides are 20 at x=6.

</details>

</div>

<div class="lesson-check" markdown="1">

### Retry graph equality {#retry-graph}

**Question:** Plot $y=0.8x+1$ and $y=4-0.3x$ for 0≤x≤4. Read the solution of their equality to 1 decimal place and check.

<details markdown="1">

<summary>Hint</summary>

Find the x-coordinate of the intersection.

</details>

<details markdown="1">

<summary>Solution and check</summary>

$$1.1x=3,\quad x=30/11\approx2.7\text{ (1 d.p.)}.$$

Use endpoints (0,1),(4,4.2) and (0,4),(4,2.8) to draw the lines. They cross near (2.73,3.18).

</details>

</div>

<div class="lesson-check" markdown="1">

### Retry order and endpoints {#retry-inequality}

**Question:** Solve $7-3x\le13$ and $0\le2x+4<10$. Draw each on a number line.

<details markdown="1">

<summary>Hint</summary>

Dividing by −3 reverses order; divide every part of the second by positive 2.

</details>

<details markdown="1">

<summary>Solution and check</summary>

$$x\ge-2;\qquad -2\le x<3.$$

First: filled at −2, ray right. Second: filled at −2, open at 3, shade between.

</details>

</div>

<div class="lesson-check" markdown="1">

### Retry a region {#retry-region}

**Question:** Represent $x\ge1$, $y>0$, $x+y\le4$. Does (1,3) belong? Does (2,0)?

<details markdown="1">

<summary>Hint</summary>

Draw each boundary separately, then keep points meeting all three.

</details>

<details markdown="1">

<summary>Solution and check</summary>

Shade right of solid x=1, above dashed y=0, below solid x+y=4. (1,3) belongs; (2,0) does not. The lower edge and its corners are excluded even when another boundary is solid.

</details>

</div>

<div class="lesson-check" markdown="1">

### Retry intervals {#retry-quadratic}

**Question:** Solve $x^2-4x-5\ge0$ and explain why giving x=−1,5 is incomplete.

<details markdown="1">

<summary>Hint</summary>

Use the factors and test one value between the roots.

</details>

<details markdown="1">

<summary>Solution and check</summary>

$$(x-5)(x+1)\ge0,\qquad x\le-1\quad\text{or}\quad x\ge5.$$

x=0 gives −5, so the middle interval fails. The roots alone miss every value outside them that also satisfies the inequality. Use filled endpoints and outward rays.

</details>

</div>

## Next step and later review {#next-step}

Proceed to [coordinates and lines](/igcse/mathematics/coordinates-and-lines/#start) or [quadratic equations](/igcse/mathematics/quadratics-and-simultaneous-equations/#start). Later, revisit the two lesson plans and determine for which whole-number n each is cheaper.

[Try the mixed algebra review after another topic.](/igcse/mathematics/mixed-review/#algebra-review) Close solutions and record what you can do without help.

## Scope and sources {#sources}

<details markdown="1">

<summary>Qualification and sources used</summary>

A19, A22–23; specification PDF 16–17 (printed 17–18). Quadratic solving is taught on the next linked page.

Read 1C QP PDF 16 Q20 with [MS PDF 9](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9260-92601C-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=9); 2C QP PDF 18 Q17 with [MS PDF 8](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92602C-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=8).

OxfordAQA International GCSE Mathematics **9260**, specification **v5.1**. [Qualification](https://www.oxfordaqa.com/qualification/international-gcse-mathematics-9260/); [specification](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-gcse-mathematics-specification.pdf). Assessment references below are **Specimen 2018** even where the URL says 2016. They calibrate scope and reasoning; no task here is an official examination question.

</details>
