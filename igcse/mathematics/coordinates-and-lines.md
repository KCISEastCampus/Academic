---
layout: subjects
title: "Coordinates and straight lines"
mathjax: true
grade: igcse
subject: igcse-mathematics
permalink: /igcse/mathematics/coordinates-and-lines/
reading_layout: true
study_page: true
toc_headings: "h2"
---

[IGCSE Mathematics](/igcse/mathematics/#learning-start)

{:.lesson-meta}

## Start here {#start}

An ordered pair tells you where a point is; a line equation tells you which points belong together. We will move between coordinates, a drawing and a rule, keeping the axis scales visible.

You need signed numbers and [substitution](/igcse/mathematics/expressions-and-formulae/#substitution). Start with plotting, gradients, intercepts and parallel lines, then find equations through points and equations of perpendicular lines.

All examples, tasks and data on this page are self-written, with no official marks; data are illustrative. Try on paper before opening help.

{:.lesson-meta}

## Across first, then up or down {#coordinates}

In (x,y), x measures horizontal position from the origin (0,0), and y vertical position. Positive x is right, negative x left; positive y up, negative y down. On an axis one coordinate is zero. Quadrants I,II,III,IV go anticlockwise from the top right; axis points are not in quadrants.

<div class="worked-example" markdown="1">

### Locate a point {#example-coordinate}

**Question:** Plot A(−3,2), B(2,−3) and C(0,−2). State where each lies.

Draw axes with equal unit spacing from −4 to 4. A means 3 units left, then 2 up. B means 2 right, then 3 down. C stays on the vertical axis and goes 2 down.

A is in quadrant II, B in IV, C on the negative y-axis. Swapping the coordinate order turns A into a different point.

</div>

## Use coordinates and lines {#practice}

<div class="lesson-check" markdown="1">

### Four quadrants {#practice-points}

**Question:** Plot P(2,3), Q(−2,3), R(−2,−3), S(2,−3), T(−4,0). Name the quadrant or axis of each. State which points share an x-coordinate and which share a y-coordinate.

<details markdown="1">

<summary>Hint</summary>

Two points with the same x line up vertically.

</details>

<details markdown="1">

<summary>Solution and check</summary>

P,Q,R,S lie in I,II,III,IV respectively; T is on the negative x-axis. P,S share x=2; Q,R share x=−2; P,Q share y=3; R,S share y=−3. Draw the four corner points as a rectangle and T on the left axis. If your Q lies below the axis, revisit the sign of y.

</details>

</div>

## How much up for each step across? {#gradient}

The gradient m is rise/run, using coordinate differences rather than the apparent angle on the page. A line with positive gradient rises to the right; negative falls. Keep the order of the two points the same in numerator and denominator. Different axis scales can make equal gradients look different.

$$m=\frac{y_2-y_1}{x_2-x_1}\qquad(x_2\ne x_1).$$

<div class="worked-example" markdown="1">

### Use the scale {#example-gradient}

**Question:** A line goes through (10,100) and (30,180). Find its gradient. If x is time in minutes and y is volume in litres, interpret it.

$$m=\frac{180-100}{30-10}=\frac{80}{20}=4\text{ litres per minute}.$$

For each additional minute, volume increases by 4 litres. Counting grid squares without their values could give the wrong rate. Reversing both differences gives the same answer; reversing only one changes the sign incorrectly.

</div>

## Read y=mx+c {#intercepts}

In y=mx+c, m is the gradient and c is the y-intercept: putting x=0 gives y=c. An x-intercept lies on y=0, so set y=0 and solve. It is a coordinate on a different axis, not automatically c. Parallel distinct non-vertical lines have the same m and different c.

<div class="worked-example" markdown="1">

### From rule to graph {#example-line}

**Question:** Plot $y=2x-1$ for −1≤x≤2 and find its intercepts.

| x | −1 | 0 | 1 | 2 |
| --- | --- | --- | --- | --- |
| y | −3 | −1 | 1 | 3 |

Plot the pairs (−1,−3),(0,−1),(1,1),(2,3), then use a ruler to join them. Each extra 1 in x adds 2 in y.

![Axes from x=-2 to 3 and y=-4 to 4, showing y=2x−1 through the four tabulated points.](/assets/img/igcse-algebra-line.svg)

$$x=0\Rightarrow y=-1;\qquad y=0\Rightarrow2x-1=0\Rightarrow x=\tfrac12.$$

The y-intercept point is (0,−1), the x-intercept point (½,0). The line y=2x+3 would be parallel and shifted upwards.

</div>

<div class="lesson-check" markdown="1">

### Read and construct a line {#practice-lines}

**Question:** Plot $y=-3x+6$ for 0≤x≤3, using x=0,1,2,3. State its gradient and both intercepts. Which of $y=-3x-4$, $y=3x+6$, $y=-x+6$ is parallel? A water-volume graph passes through (2,7),(6,19), with hours and litres: find and interpret its gradient.

<details markdown="1">

<summary>Hint</summary>

Use y=0 for the horizontal intercept and compare coefficients for parallel lines.

</details>

<details markdown="1">

<summary>Solution and check</summary>

| x | 0 | 1 | 2 | 3 |
| --- | --- | --- | --- | --- |
| y | 6 | 3 | 0 | −3 |

$$m=-3,\qquad (0,6),\ (2,0);\qquad \frac{19-7}{6-2}=3\text{ litres per hour}.$$

Join the four points with a falling line. y=−3x−4 is parallel because its gradient is −3. The water volume increases 3 litres each hour; confusing the initial volume with the rate gives the wrong units.

</details>

</div>

## Build the equation {#through-points}

For a known point (a,b) and gradient m, any other point (x,y) has vertical change y−b and horizontal change x−a. Thus y−b=m(x−a). This also works at the known point, where both differences are zero.

<div class="worked-example" markdown="1">

### Two points give the slope {#example-points}

**Question:** Find the line through (−2,5) and (4,−7).

$$m=\frac{-7-5}{4-(-2)}=-2,\qquad y-5=-2(x+2),\qquad y=-2x+1.$$

Check both points: −2(−2)+1=5 and −2(4)+1=−7. Finding a slope alone is not a complete equation.

</div>

<div class="lesson-check" markdown="1">

### Choose the needed information {#practice-equation}

**Question:** Find the line through (1,4),(5,−4). Then find the line through (−2,3) parallel to $y=3x-7$. Give both in y=mx+c form.

<details markdown="1">

<summary>Hint</summary>

Use the two points to find one slope. Parallelism supplies the other slope.

</details>

<details markdown="1">

<summary>Solution and check</summary>

$$m=\frac{-4-4}{5-1}=-2,\quad y-4=-2(x-1),\quad y=-2x+6;$$

$$y-3=3(x+2),\quad y=3x+9.$$

Check the first at x=1,5 and the second at x=−2. Reusing −7 as the new intercept would make a parallel line miss the given point.

</details>

</div>

## Right angles and exceptional lines {#perpendicular}

For two perpendicular non-vertical lines with finite gradients, m₁m₂=−1. So the new slope is the negative reciprocal, when the original slope is nonzero. For example 2 and −½. A horizontal line y=b has gradient 0; a vertical line x=a has undefined gradient because its horizontal change is zero. Horizontal and vertical lines are perpendicular, but do not use −1/0.

<div class="worked-example" markdown="1">

### Use a perpendicular gradient {#example-perpendicular}

**Question:** Find the line through (4,1) perpendicular to $y=2x+1$.

$$m=-\tfrac12,\quad y-1=-\tfrac12(x-4),\quad y=-\tfrac12x+3.$$

Check: 2×(−½)=−1 and substituting x=4 gives y=1. Negating 2 without taking its reciprocal would not give a perpendicular line.

</div>

<div class="lesson-check" markdown="1">

### Handle different directions {#practice-perpendicular}

**Question:** Find the line through (2,−1) perpendicular to $y=-2x+5$. Find the lines through (2,−1) perpendicular to (a) y=4 and (b) x=−3.

<details markdown="1">

<summary>Hint</summary>

Use a negative reciprocal only for a nonzero finite gradient.

</details>

<details markdown="1">

<summary>Solution and check</summary>

$$m=\tfrac12,\quad y+1=\tfrac12(x-2),\quad y=\tfrac12x-2.$$

(a) x=2, a vertical line. (b) y=−1, a horizontal line. Their equations describe every point on the line even though x=2 cannot be written y=mx+c.

</details>

</div>

## Repair a specific step {#retry}

Swapped coordinates: [across then up](#coordinates). Grid-square slope: [scale](#gradient). Intercept mix-up: [y=mx+c](#intercepts). Correct slope but wrong point: [point equation](#through-points). Wrong perpendicular: [exceptions](#perpendicular).

<div class="lesson-check" markdown="1">

### Retry locating {#retry-points}

**Question:** Plot A(−1,−4), B(3,2), C(−2,2), D(0,3). Name their quadrants or axes and explain why C and B lie on a horizontal line.

<details markdown="1">

<summary>Hint</summary>

A horizontal line has constant y.

</details>

<details markdown="1">

<summary>Solution and check</summary>

A is in III, B in I, C in II, D on the positive y-axis. B,C both have y=2, so their line is horizontal. Drawing a point on the y-axis does not place it in quadrant I.

</details>

</div>

<div class="lesson-check" markdown="1">

### Retry reading a rule {#retry-lines}

**Question:** Plot $y=2x+4$ for −3≤x≤1. State its gradient, both intercepts and one distinct parallel-line equation. A different line joins (1,8),(4,20), with time in hours and volume in litres: find and interpret its gradient.

<details markdown="1">

<summary>Hint</summary>

Use x=−3,−2,−1,0,1 and calculate y.

</details>

<details markdown="1">

<summary>Solution and check</summary>

$$y:\ -2,0,2,4,6;\qquad m=2,\quad (0,4),\ (-2,0).$$

Join the five points by a straight line. One parallel is y=2x−1: same slope, different intercept. The other line has gradient (20−8)/(4−1)=4 litres per hour: volume increases by 4 litres each hour.

</details>

</div>

<div class="lesson-check" markdown="1">

### Retry building a line {#retry-equation}

**Question:** Find the line through (−1,−1),(3,7). Then find the line through (0,5) perpendicular to it.

<details markdown="1">

<summary>Hint</summary>

Calculate rise/run, then fit each point.

</details>

<details markdown="1">

<summary>Solution and check</summary>

$$m=\frac{7-(-1)}{3-(-1)}=2,\quad y+1=2(x+1),\quad y=2x+1;$$

$$m_{\perp}=-\tfrac12,\qquad y=-\tfrac12x+5.$$

The second point is on the y-axis, so its intercept is directly 5. Check the slope product −1.

</details>

</div>

<div class="lesson-check" markdown="1">

### Retry horizontal and vertical {#retry-directions}

**Question:** Find the line through (−3,2) perpendicular to y=−5, and the line through (−3,2) perpendicular to x=7. State their gradients where defined.

<details markdown="1">
<summary>Hint</summary>

Horizontal and vertical lines are perpendicular.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The first is x=−3, with undefined gradient; the second is y=2, with gradient zero. Both pass through (−3,2). Do not write −1/0 or call a vertical gradient zero.

</details>

</div>

## Next step and later review {#next-step}

Next meet [quadratics and simultaneous equations](/igcse/mathematics/quadratics-and-simultaneous-equations/#start). After that page, redo practice-equation and sketch the two lines without a slope label supplied.

[Try the mixed algebra review after another topic.](/igcse/mathematics/mixed-review/#algebra-review) Close solutions and record what you can do without help.

## Scope and sources {#sources}

<details markdown="1">

<summary>Qualification and sources used</summary>

A10–11, specification PDF 15 (printed 16). All plotted coordinates here are self-written.

Read 1C QP PDF 23 Q27 with [MS PDF 11](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9260-92601C-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=11); 2C QP PDF 17 Q16(c) with [MS PDF 7](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92602C-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=7). These official graph tasks informed the scale/intercept checks; their drawings are not reproduced here.

OxfordAQA International GCSE Mathematics **9260**, specification **v5.1**. [Qualification](https://www.oxfordaqa.com/qualification/international-gcse-mathematics-9260/); [specification](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-gcse-mathematics-specification.pdf). Assessment references below are **Specimen 2018** even where the URL says 2016. They calibrate scope and reasoning; no task here is an official examination question.

</details>
