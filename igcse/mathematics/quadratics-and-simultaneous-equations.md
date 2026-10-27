---
layout: subjects
title: "Quadratics and simultaneous equations"
mathjax: true
grade: igcse
subject: igcse-mathematics
permalink: /igcse/mathematics/quadratics-and-simultaneous-equations/
reading_layout: true
study_page: true
toc_headings: "h2"
---

[IGCSE Mathematics](/igcse/mathematics/#learning-start)

{:.lesson-meta}

## Start here {#start}

A straight-line equation may have one solution; a quadratic can have two, one or no real solutions. Two equations ask for values satisfying both at once. We will connect algebraic roots with actual graph intersections.

You need [factorising](/igcse/mathematics/expressions-and-formulae/#factorising), [linear equations](/igcse/mathematics/equations-and-inequalities/#balance) and [coordinate plotting](/igcse/mathematics/coordinates-and-lines/#start). Build from factors and graphs to completing the square, the quadratic formula and line–quadratic systems.

All examples, tasks and data on this page are self-written, with no official marks; data are illustrative. Try on paper before opening help.

{:.lesson-meta}

## Why factors reveal roots {#roots}

A root is an x-value where y=0. A product is zero only if at least one factor is zero. So put the whole equation equal to zero, factorise, then solve each factor equation. Do not divide by x if x=0 might be a solution.

<div class="worked-example" markdown="1">

### Keep both factors {#example-roots}

**Question:** Solve $x^2-x-6=0$.

$$x^2-x-6=(x-3)(x+2)=0,$$

$$x-3=0\quad\text{or}\quad x+2=0,\qquad x=3\quad\text{or}\quad x=-2.$$

Check both in the original: 9−3−6=0 and 4+2−6=0. Writing only a factorised expression does not yet give the requested values.

</div>

## Solve, draw and interpret {#practice}

<div class="lesson-check" markdown="1">

### Keep all solutions {#practice-roots}

**Question:** Solve $x^2-7x+12=0$, $x(x-4)=0$ and $2x^2+x-3=0$. Check each solution.

<details markdown="1">

<summary>Hint</summary>

For the last, split the middle coefficient into 3 and −2.

</details>

<details markdown="1">

<summary>Solution and check</summary>

$$(x-3)(x-4)=0\Rightarrow x=3,4;\qquad x(x-4)=0\Rightarrow x=0,4;$$

$$(2x+3)(x-1)=0\Rightarrow x=-\tfrac32,1.$$

Substitution makes a factor zero in every case. Dividing the second by x would wrongly remove x=0. For the last root −3/2, 2(9/4)−3/2−3=0.

</details>

</div>

## Roots, intercepts and a turning point {#sketch}

For y=ax²+bx+c with a≠0, the graph is a parabola. It opens up if a>0, down if a<0. The y-intercept is (0,c). The turning point is the lowest or highest point, and a vertical symmetry line passes through it. Plot points either side to show the curve, not a zigzag between them.

<div class="worked-example" markdown="1">

### Build a parabola from data {#example-sketch}

**Question:** Plot $y=x^2-2x-3$ for −2≤x≤4. Mark roots, y-intercept, turning point and symmetry axis.

| x | −2 | −1 | 0 | 1 | 2 | 3 | 4 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| y | 5 | 0 | −3 | −4 | −3 | 0 | 5 |

Draw these points on axes from x=−2 to 4, y=−5 to 6, and join smoothly. The curve opens up, crosses the x-axis at (−1,0),(3,0) and the y-axis at (0,−3). Its minimum is (1,−4); points equally far from x=1 have equal heights.

$$x^2-2x-3=(x+1)(x-3),\qquad x_{\text{symmetry}}=1.$$

The factorised roots agree with the drawing. The roots are x-values, whereas the minimum is a coordinate pair.

</div>

<div class="lesson-check" markdown="1">

### Use a graph for approximate roots {#practice-graph}

**Question:** Plot $y=x^2+x-4$ for −3≤x≤2, using integer x-values. Read both roots to 1 decimal place, estimate the turning point and state the symmetry line.

<details markdown="1">

<summary>Hint</summary>

Include points above and below zero, and draw a smooth curve between them.

</details>

<details markdown="1">

<summary>Solution and check</summary>

| x | −3 | −2 | −1 | 0 | 1 | 2 |
| --- | --- | --- | --- | --- | --- | --- |
| y | 2 | −2 | −4 | −4 | −2 | 2 |

The curve crosses near x=−2.6,1.6; minimum near (−0.5,−4.25), symmetry x=−0.5. Refine near the crossings if the integer grid is too coarse. A root is not −4: −4 is a plotted height. Later, the formula checks exact roots (−1±√17)/2.

</details>

</div>

## Make the turning point visible {#square}

A square cannot be negative. Writing y=a(x−h)²+k makes the turning point (h,k) visible. For x²+bx, half b goes inside the bracket; subtract its square so the value does not change.

<div class="worked-example" markdown="1">

### Why the correction is necessary {#example-square}

**Question:** Write $x^2+6x+5$ in completed-square form; find its turning point and solve $x^2+6x+5=0$.

$$(x+3)^2=x^2+6x+9,\quad x^2+6x+5=(x+3)^2-9+5=(x+3)^2-4.$$

The square is smallest at x=−3, so the minimum is (−3,−4). To solve for roots:

$$(x+3)^2=4,\quad x+3=\pm2,\quad x=-1,-5.$$

Both signs are needed because 2²=(−2)². The roots lie two units either side of x=−3, checking symmetry.

</div>

<div class="lesson-check" markdown="1">

### Change the representation {#practice-square}

**Question:** Complete the square for $y=x^2-4x-1$. State the turning point, symmetry line and exact roots. Check the heights at x=1,3.

<details markdown="1">

<summary>Hint</summary>

Start with (x−2)², then correct its extra constant.

</details>

<details markdown="1">

<summary>Solution and check</summary>

$$y=(x-2)^2-5,\quad (x-2)^2=5,\quad x=2\pm\sqrt5.$$

Minimum (2,−5), symmetry x=2. At x=1 and 3, y=−4, checking equal heights either side. The minimum is not (−2,−5): the bracket becomes zero at x=2.

</details>

</div>

If a≠1, factor a out of the x² and x terms first. For example:

$$2x^2+8x+3=2(x^2+4x)+3=2[(x+2)^2-4]+3=2(x+2)^2-5.$$

## When factors are not easy {#formula}

For ax²+bx+c=0, a≠0, the quadratic formula gives the same result as completing the square. Identify signed coefficients and divide the entire numerator by 2a.

$$x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}.$$

The square-root quantity Δ=b²−4ac determines real roots: Δ>0 two, Δ=0 one repeated, Δ<0 none. The square root of a negative number is not real, so Δ<0 gives no real roots; do not force a decimal answer. A negative branch such as −√4=−2 is a real number.

<div class="worked-example" markdown="1">

### Keep an exact root {#example-formula}

**Question:** Solve $x^2+4x+1=0$ exactly.

$$a=1,\ b=4,\ c=1,\quad x=\frac{-4\pm\sqrt{16-4}}2=\frac{-4\pm2\sqrt3}{2}=-2\pm\sqrt3.$$

Check by completing the square: x²+4x+1=(x+2)²−3, so either root makes the expression zero.

</div>

<div class="lesson-check" markdown="1">

### Select and check exact solutions {#practice-formula}

**Question:** Solve $2x^2+3x-1=0$ exactly and to 3 significant figures. Decide how many real roots $x^2+2x+5=0$ has. Also complete the square for $2x^2+8x+3$.

<details markdown="1">

<summary>Hint</summary>

Use a=2,b=3,c=−1 in the first. For the last factor 2 from the first two terms.

</details>

<details markdown="1">

<summary>Solution and check</summary>

$$x=\frac{-3\pm\sqrt{9+8}}4=\frac{-3\pm\sqrt{17}}4\approx0.281,\ -1.78.$$

$$\Delta=2^2-4(1)(5)=-16<0;\qquad 2x^2+8x+3=2(x+2)^2-5.$$

The second has no real roots; its completed square (x+1)²+4 is always positive. The last curve has minimum (−2,−5). A positive leading coefficient alone does not guarantee roots.

</details>

</div>

## One pair must satisfy both equations {#simultaneous}

Simultaneous equations use the same unknown quantities in two conditions. Elimination adds/subtracts equations to remove a variable; substitution replaces one variable by an equal expression. A graph intersection has both properties at once.

<div class="worked-example" markdown="1">

### Eliminate and check both {#example-simultaneous}

**Question:** Solve $2x+y=11$ and $x-y=1$. Also show the solution on a graph.

$$(2x+y)+(x-y)=11+1,\quad 3x=12,\quad x=4,\quad y=3.$$

The y terms cancel, so adding is efficient. Check 2(4)+3=11 and 4−3=1. For a graph draw y=11−2x through (0,11),(5,1) and y=x−1 through (0,−1),(5,4). They meet at (4,3).

</div>

<div class="lesson-check" markdown="1">

### Find two prices {#practice-simultaneous}

**Question:** Two pens and three notebooks cost 19 dollars. Three pens and one notebook cost 18 dollars. Form two equations, solve for each price, then draw the two lines in price coordinates to check their intersection.

<details markdown="1">

<summary>Hint</summary>

Let p be one pen price, q one notebook price. Multiply an equation if needed to match a coefficient.

</details>

<details markdown="1">

<summary>Solution and check</summary>

$$2p+3q=19,\quad 3p+q=18,\quad q=18-3p,$$

$$2p+3(18-3p)=19,\quad -7p=-35,\quad p=5,\ q=3.$$

Pen 5 dollars, notebook 3. Draw q=(19−2p)/3 using (2,5),(5,3),(8,1) and q=18−3p using (4,6),(5,3),(6,0); they meet at (5,3). Both prices are positive and both original costs check. Assigning p=3,q=5 swaps the products and fails.

</details>

</div>

## A line meets a curve {#line-curve}

<div class="worked-example" markdown="1">

### Substitute a whole expression {#example-line-curve}

**Question:** Solve $y=x+1$ and $y=x^2-3x+3$.

$$x+1=x^2-3x+3,\quad x^2-4x+2=0,$$

$$x=2\pm\sqrt2,\qquad y=3\pm\sqrt2.$$

The pairs are (2+√2,3+√2) and (2−√2,3−√2): keep corresponding signs together. They are the two intersections. Replacing y by x+1 is valid because both equations use the same y.

</div>

<div class="lesson-check" markdown="1">

### Find every pair {#practice-line-curve}

**Question:** Solve $y=2x+3$ and $y=x^2-x-1$. Check both solution pairs in both equations.

<details markdown="1">

<summary>Hint</summary>

Equate the two expressions for y and solve the resulting quadratic.

</details>

<details markdown="1">

<summary>Solution and check</summary>

$$2x+3=x^2-x-1,\quad x^2-3x-4=(x-4)(x+1)=0,$$

$$x=4,-1;\qquad (x,y)=(4,11),\ (-1,1).$$

At x=4 the curve gives 16−4−1=11; at x=−1 it gives 1+1−1=1. The line agrees in both cases. Reporting x alone leaves the system unsolved for y.

</details>

</div>

## Some algebraic roots do not fit a situation {#modelling}

<div class="worked-example" markdown="1">

### Use a length restriction {#example-model}

**Question:** A rectangle has sides x cm and (x+2) cm, x>0, and area 15 cm². Find its dimensions.

$$x(x+2)=15,\quad x^2+2x-15=(x+5)(x-3)=0,\quad x=-5,3.$$

Reject −5 because a length cannot be negative. The rectangle is 3 cm by 5 cm; its area is 15 cm². Rejecting a context-invalid root is different from losing a valid root through division.

</div>

<div class="lesson-check" markdown="1">

### Derive rather than recognise {#practice-model}

**Question:** A positive number is 3 less than another number. Their product is 40. Find both numbers, forming and solving an equation. Explain which algebraic possibility is rejected.

<details markdown="1">

<summary>Hint</summary>

Let x be the smaller number; the other is x+3.

</details>

<details markdown="1">

<summary>Solution and check</summary>

$$x(x+3)=40,\quad x^2+3x-40=(x+8)(x-5)=0,\quad x=-8,5.$$

Only x=5 is positive, giving 5 and 8. The algebraic pair −8,−5 has product 40 but fails the positive-number requirement. Check difference 3 and product 40.

</details>

</div>

## Repair and retry the same skill {#retry}

Lost roots: [zero product](#roots). Poor sketch: [graph features](#sketch). Wrong vertex sign: [completed square](#square). Wrong signs or rounding: [formula](#formula). Unpaired answers: [systems](#simultaneous), [line–curve](#line-curve). Invalid length: [context](#modelling).

<div class="lesson-check" markdown="1">

### Retry roots and a drawing {#retry-graph}

**Question:** Plot $y=x^2-4$ using x=−3,−2,−1,0,1,2,3. Solve y=0 and mark the turning point and symmetry line.

<details markdown="1">

<summary>Hint</summary>

Use equal-height pairs.

</details>

<details markdown="1">

<summary>Solution and check</summary>

$$y:\ 5,0,-3,-4,-3,0,5;\quad x^2-4=(x-2)(x+2).$$

Roots −2,2; minimum (0,−4), symmetry x=0. Draw a smooth upward parabola through the table, not straight joins.

</details>

</div>

<div class="lesson-check" markdown="1">

### Retry exact roots and vertex {#retry-square}

**Question:** Complete the square for $x^2+2x-2$, then find its roots and turning point. Solve $3x^2+2x-2=0$ exactly using the formula.

<details markdown="1">

<summary>Hint</summary>

Half the linear coefficient in the first. Identify a,b,c in the second.

</details>

<details markdown="1">

<summary>Solution and check</summary>

$$x^2+2x-2=(x+1)^2-3,\quad x=-1\pm\sqrt3,$$

$$x=\frac{-2\pm\sqrt{4+24}}6=\frac{-1\pm\sqrt7}{3}.$$

The first has minimum (−1,−3). Re-expansion checks its form; the second has a=3, b=2, c=−2 and both signs are retained.

</details>

</div>

<div class="lesson-check" markdown="1">

### Retry two conditions {#retry-simultaneous}

**Question:** Solve $2x+y=8$, $x-y=1$ algebraically and by plotting both lines.

<details markdown="1">

<summary>Hint</summary>

Adding eliminates y.

</details>

<details markdown="1">

<summary>Solution and check</summary>

$$3x=9,\quad x=3,\quad y=2.$$

Plot y=8−2x through (0,8),(4,0) and y=x−1 through (0,−1),(4,3). They meet at (3,2), which satisfies both equations.

</details>

</div>

<div class="lesson-check" markdown="1">

### Retry pairing roots {#retry-line-curve}

**Question:** Solve $y=x+2$ and $y=x^2-2$.

<details markdown="1">

<summary>Hint</summary>

Set the two y-expressions equal.

</details>

<details markdown="1">

<summary>Solution and check</summary>

$$x^2-x-4=0,\quad x=\frac{1\pm\sqrt{17}}2,\qquad y=\frac{5\pm\sqrt{17}}2.$$

Pair the plus values together and the minus values together. Substituting y=x+2 checks the pairing; x²=x+4 from the quadratic checks the other curve.

</details>

</div>

<div class="lesson-check" markdown="1">

### Retry a length model {#retry-model}

**Question:** A rectangle has width w cm and length (w+1) cm. Its area is 20 cm². Find the dimensions.

<details markdown="1">

<summary>Hint</summary>

Area is a product; require w>0.

</details>

<details markdown="1">

<summary>Solution and check</summary>

$$w(w+1)=20,\quad (w+5)(w-4)=0,\quad w=-5,4.$$

Reject −5. Width 4 cm, length 5 cm; product 20 cm².

</details>

</div>

## Next step and later review {#next-step}

Continue to [functions and graphs](/igcse/mathematics/functions-and-graphs/#start), or return to [quadratic inequalities](/igcse/mathematics/equations-and-inequalities/#quadratic-inequalities). Later redo the price problem and graph roots without their method headings.

[Try the mixed algebra review after another topic.](/igcse/mathematics/mixed-review/#algebra-review) Close solutions and record what you can do without help.

## Scope and sources {#sources}

<details markdown="1">

<summary>Qualification and sources used</summary>

A16, A20–22; specification PDF 16–17 (printed 17–18).

Read 2C QP PDF 22 Q24, 24 Q27 with [MS PDF 10–11](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92602C-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=10); 1E QP PDF 24 Q24 with [MS PDF 12](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9260-92601E-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=12); 2E QP PDF 25 Q28 with [MS PDF 16–17](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92602E-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=16); 1C QP PDF 18 Q22 with [MS PDF 9](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9260-92601C-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=9).

OxfordAQA International GCSE Mathematics **9260**, specification **v5.1**. [Qualification](https://www.oxfordaqa.com/qualification/international-gcse-mathematics-9260/); [specification](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-gcse-mathematics-specification.pdf). Assessment references below are **Specimen 2018** even where the URL says 2016. They calibrate scope and reasoning; no task here is an official examination question.

</details>
