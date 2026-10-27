---
layout: subjects
title: "Gradients, differentiation and motion"
mathjax: true
grade: igcse
subject: igcse-mathematics
permalink: /igcse/mathematics/differentiation-and-motion/
reading_layout: true
study_page: true
toc_headings: "h2"
---

[IGCSE Mathematics](/igcse/mathematics/#learning-start)

{:.lesson-meta}

## Start here {#start}

How much has changed, and how fast is it changing? We will connect graph steepness to a rate, then find a gradient rule for polynomial curves.

You need [line gradients](/igcse/mathematics/coordinates-and-lines/#gradient), [expansion](/igcse/mathematics/expressions-and-formulae/#expansion) and [quadratic equations](/igcse/mathematics/quadratics-and-simultaneous-equations/#roots). Begin with motion interpretation, then use differentiation and estimates from curved graphs.

All examples, tasks and data on this page are self-written, with no official marks; data are illustrative. Try on paper before opening help.

{:.lesson-meta}

## Read a journey {#motion}

On a distance–time graph, height is total distance travelled. Gradient is distance change divided by time: the average speed over that interval. A horizontal segment means rest. Total distance cannot decrease; a position or displacement graph can go down when direction reverses.

<div class="worked-example" markdown="1">

### Use each interval {#example-motion}

**Question:** A distance–time graph joins (0,0), (4,12), (7,12), (9,20) by straight segments. Time is in seconds and distance in metres. Describe the journey and find overall average speed.

Draw time horizontally, distance vertically. Each segment has its own duration.

$$\frac{12-0}{4-0}=3\text{ m/s},\quad \frac{12-12}{7-4}=0,\quad \frac{20-12}{9-7}=4\text{ m/s}.$$

The object moves at 3 m/s, rests for 3 s, then moves at 4 m/s. For the whole journey:

$$\text{average speed}=\frac{20}{9}\text{ m/s}\approx2.22\text{ m/s}.$$

Averaging 3, 0, 4 would give equal weight to unequal intervals. Check total distance: 12 + 0 + 8 = 20 m.

</div>

## Try the ideas {#practice}

<div class="lesson-check" markdown="1">

### A new journey {#practice-motion}

**Question:** Plot a distance–time graph through (0,0), (3,15), (5,15), (8,21). Use seconds and metres. Describe each segment and find overall average speed.

<details markdown="1">

<summary>Hint</summary>

Use consecutive points. Include the rest in total time.

</details>

<details markdown="1">

<summary>Solution and check</summary>

$$15/3=5,\quad 0/2=0,\quad (21-15)/(8-5)=2,\quad 21/8=2.625.$$

Draw rise–horizontal–gentler rise. Speeds are 5, 0, 2 m/s; rest is from 3 to 5 s. Overall average speed is 2.625 m/s. If you averaged the three speeds, return to the distinction between segment duration and whole time.

</details>

</div>

## A gradient at every point {#gradient-function}

A curve has no single fixed slope. Joining two nearby points gives an average gradient. As the second point approaches the first, the joining line approaches the tangent: its slope is the instantaneous gradient. Differentiation gives a new function whose output is that slope.

For constant k and positive whole number n, multiply by the old power and reduce the power by one. A constant term has derivative zero because it does not change.

$$y=kx^n\quad\Longrightarrow\quad \frac{dy}{dx}=knx^{n-1}\quad(n=1,2,3,\ldots).$$

Apply the rule to each polynomial term. Before differentiation this lesson uses only non-negative integer powers. It does not require negative/fractional powers, product/chain rules or trigonometric differentiation. Expand and simplify first.

<div class="worked-example" markdown="1">

### Height and slope differ {#example-derivative}

**Question:** For $y=x(x+2)+3$, find the gradient function and gradient at $x=2$.

The product hides the polynomial terms. Expand first; the derivative describes slope, not height.

$$y=x^2+2x+3,\qquad \frac{dy}{dx}=2x+2,\qquad y^{\prime}(2)=6.$$

At x = 2 the height is 11, but gradient is 6. From x = 2 to 2.1 the chord gradient is (11.61 − 11)/0.1 = 6.1, close to 6; it is not an exact tangent calculation.

</div>

<div class="lesson-check" markdown="1">

### Find and use a rule {#practice-derivative}

**Question:** For $y=2x(x^2-3)+5$, find $dy/dx$, the height at $x=-1$ and the gradient there. Explain the difference.

<details markdown="1">

<summary>Hint</summary>

Expand. Use the original for height and derivative for slope.

</details>

<details markdown="1">

<summary>Solution and check</summary>

$$y=2x^3-6x+5,\quad \frac{dy}{dx}=6x^2-6,\quad y(-1)=9,\quad y^{\prime}(-1)=0.$$

The point (−1,9) has a horizontal tangent. Zero gradient does not mean zero height. The derivative of 5 is zero.

</details>

</div>

## Build the tangent {#tangent}

Use the curve for the point and derivative for the slope. With both known, use the straight-line equation through a point.

<div class="worked-example" markdown="1">

### From curve to line {#example-tangent}

**Question:** Find the tangent to $y=x^2+2x+3$ at $x=2$.

$y(2)=11,\quad y^{\prime}(2)=6,\quad y-11=6(x-2),\quad y=6x-1.$

![A polynomial curve, its tangent at (2,11), and a rise of 12 over a run of 2 between tangent points (1,5) and (3,17).](/assets/img/igcse-algebra-tangent.svg)

Check: at x = 2 the line gives 11 and has gradient 6. Just writing y = 6x would miss the point.

</div>

<div class="lesson-check" markdown="1">

### A different point {#practice-tangent}

**Question:** Find the tangent to $y=x^3-2x+1$ at $x=-1$.

<details markdown="1">

<summary>Hint</summary>

Find the point, then the slope.

</details>

<details markdown="1">

<summary>Solution and check</summary>

$$y(-1)=2,\quad y^{\prime}=3x^2-2,\quad y^{\prime}(-1)=1,\quad y-2=x+1,\quad y=x+3.$$

The line passes through (−1,2). A slope of 2 confuses height with gradient.

</details>

</div>

## Where does the curve level out? {#stationary}

At a stationary point the derivative is zero. Solve for x, then find y using the original function. Zero slope alone does not classify it: a gradient changing from positive to negative gives a local maximum; negative to positive gives a local minimum.

<div class="worked-example" markdown="1">

### Signs determine the shape {#example-stationary}

**Question:** Find and classify the stationary points of $y=x^3-3x$. Sketch it, marking stationary points and intercepts.

$$y^{\prime}=3x^2-3=3(x-1)(x+1)=0\quad\Longrightarrow\quad x=-1,\ 1.$$

The heights are 2 and −2. Test x = −2, 0, 2 in the derivative: signs are +, −, +.

$$(-1,2):\ +\to-\ \text{local maximum};\qquad (1,-2):\ -\to+\ \text{local minimum}.$$

For roots, x(x²−3)=0 gives −√3, 0, √3. Draw a smooth cubic rising from bottom left to the maximum, falling through the origin to the minimum, then rising to top right. Label coordinates rather than drawing an unmarked S-shape.

</div>

A stationary inflection flattens without turning, but its bending changes. For y=x³, derivative 3x² is positive on both sides of 0 and zero at 0. Slopes decrease towards 0 from the left and increase after 0. So (0,0) is a stationary point of inflection; draw the curve crossing its horizontal tangent.

<div class="lesson-check" markdown="1">

### Compare two curves {#practice-stationary}

**Question:** Find and classify all stationary points of $p(x)=x^3-12x$ and $q(x)=x^3+4$. Sketch both with stationary points and intercepts, giving evidence for each classification.

<details markdown="1">

<summary>Hint</summary>

Use signs in intervals. For q, also consider how slope changes as x passes through 0.

</details>

<details markdown="1">

<summary>Solution and check</summary>

$$p^{\prime}=3(x-2)(x+2),\quad p(-2)=16,\quad p(2)=-16,\quad q^{\prime}=3x^2.$$

For p the signs +,−,+ give maximum (−2,16), minimum (2,−16); roots are −√12,0,√12. For q, positive slope both sides decreases to zero then increases: stationary inflection (0,4). Its x-intercept is −∛4 and y-intercept 4. Draw p with two turns, and q rising through a horizontal tangent at height 4. Calling every stationary point a minimum misclassifies q.

</details>

</div>

## Motion graphs and numerical estimates {#estimates}

On a velocity–time graph, height is velocity, gradient is acceleration. Area below a non-negative velocity graph gives distance: velocity v for time Δt gives a rectangle of area vΔt metres. Triangles and trapezia combine pieces. If velocity is negative, signed area gives displacement; distance adds the magnitudes. This uses graph areas, not AS integration.

<div class="worked-example" markdown="1">

### Estimate from readings {#example-estimates}

**Question:** A smooth non-negative velocity curve has t (s) = 0,1,2,3 and v (m/s) = 0,1,4,9. Estimate distance with trapezia of width 1 s.

Plot the points. Replace each curved interval by its straight chord. Each trapezium has two parallel vertical sides.

$$d\approx\frac{0+1}{2}(1)+\frac{1+4}{2}(1)+\frac{4+9}{2}(1)=9.5\text{ m}.$$

The estimate is not exact because between-reading velocities are unspecified. If the curve bends upwards throughout each interval, chords lie above it, so this overestimates. Without bending information the table alone proves no error direction.

</div>

To estimate a curved graph’s slope, draw the tangent at the point, then use two well-separated points on that tangent for rise/run. Do not join distant points on the curve: that estimates average gradient.

<div class="lesson-check" markdown="1">

### Draw and estimate {#practice-estimates}

**Question:** Plot v=t²+1 for 0≤t≤3 using t=0,0.5,1,1.5,2,2.5,3 (seconds; v in m/s). Draw a tangent at t=1. Choose two well-separated points on your tangent and estimate acceleration there and distance over 0–3 s with trapezia of width 1 s. Explain a limitation.

<details markdown="1">

<summary>Hint</summary>

Draw a tangent through (1,2), matching the local direction of the curve, then choose separated points on it. Use integer-time curve heights for trapezia.

</details>

<details markdown="1">

<summary>Solution and check</summary>

$$v:\ 1,\ 1.25,\ 2,\ 3.25,\ 5,\ 7.25,\ 10;\qquad a\approx(4-0)/(2-0)=2\text{ m/s}^2.$$

$$d\approx\frac{1+2}{2}+\frac{2+5}{2}+\frac{5+10}{2}=12.5\text{ m}.$$

Solution reference: an accurate tangent passes through (0,0),(2,4), giving about 2 m/s². For a hand drawing, 1.6–2.4 m/s² is a reasonable self-check range, provided the tangent matches the local curve direction and your chosen readings lie on it; this is not an official marking tolerance. Its height at t=0 is not the initial velocity. Trapezia are above this curve, so distance is overestimated; smaller steps reduce the gap.

</details>

</div>

<div class="lesson-check" markdown="1">

### A different graph {#practice-area}

**Question:** Plot the velocity–time graph joining (0,0),(4,6),(7,6),(9,0) with straight lines (seconds and m/s). Find acceleration on each segment and total distance.

<details markdown="1">

<summary>Hint</summary>

Acceleration uses gradient; distance uses area.

</details>

<details markdown="1">

<summary>Solution and check</summary>

$$a:\ 6/4=1.5,\quad 0,\quad (0-6)/(9-7)=-3\text{ m/s}^2.$$

$$d=\tfrac12(4)(6)+(3)(6)+\tfrac12(2)(6)=36\text{ m}.$$

Draw rise–horizontal–fall. Negative acceleration here is slowing down, while velocity stays non-negative, so area is distance.

</details>

</div>

## Repair and try again {#retry}

Confused axes: [motion](#motion). Confused height/slope: [gradient function](#gradient-function). Wrong tangent intercept: [tangent](#tangent). Wrong classification: [stationary](#stationary). Confused slope/area: [estimates](#estimates). Close old solutions before retrying.

<div class="lesson-check" markdown="1">

### Retry a journey {#retry-motion}

**Question:** A distance–time graph joins (0,0),(2,8),(6,8),(10,20). Plot it; find each speed and overall average.

<details markdown="1">

<summary>Hint</summary>

Keep rest in total time.

</details>

<details markdown="1">

<summary>Solution and check</summary>

Three slopes are 4,0,3 m/s; draw rise–horizontal–rise. Overall average is 20/10=2 m/s, including four seconds at rest.

</details>

</div>

<div class="lesson-check" markdown="1">

### Retry a rule {#retry-derivative}

**Question:** Find the derivative of $y=(x+1)(x^2-x+1)+7$ and its gradient at $x=-2$.

<details markdown="1">

<summary>Hint</summary>

Multiply out before differentiating.

</details>

<details markdown="1">

<summary>Solution and check</summary>

$$y=x^3+8,\qquad y^{\prime}=3x^2,\qquad y^{\prime}(-2)=12.$$

The constant changes height but has zero derivative.

</details>

</div>

<div class="lesson-check" markdown="1">

### Retry a tangent {#retry-tangent}

**Question:** Find the tangent to $y=2x^2-x$ at $x=1$.

<details markdown="1">

<summary>Hint</summary>

Find height and gradient separately.

</details>

<details markdown="1">

<summary>Solution and check</summary>

$$y(1)=1,\quad y^{\prime}=4x-1,\quad y^{\prime}(1)=3,\quad y-1=3(x-1),\quad y=3x-2.$$

</details>

</div>

<div class="lesson-check" markdown="1">

### Retry classification {#retry-stationary}

**Question:** Classify stationary points of $y=-x^3+3x$ and $z=-x^3$. Sketch both, marking stationary points and intercepts.

<details markdown="1">

<summary>Hint</summary>

Check both sides of each zero gradient.

</details>

<details markdown="1">

<summary>Solution and check</summary>

$$y^{\prime}=3-3x^2,\qquad z^{\prime}=-3x^2.$$

For y, signs −,+,− give minimum (−1,−2), maximum (1,2). For z, slopes stay negative, becoming zero then negative again; bending changes, so (0,0) is a stationary inflection descending through its horizontal tangent. The y curve has x-intercepts −√3,0,√3, while z crosses both axes only at the origin; mark these on the sketches.

</details>

</div>

<div class="lesson-check" markdown="1">

### Retry an estimate {#retry-estimates}

**Question:** Plot v=0.5t²+1 for 0≤t≤4, using steps of 0.5 s (velocity in m/s). Draw a tangent at t=1, choose your own two tangent points and estimate acceleration. Estimate distance over 0–4 s using two trapezia of width 2 s. Could the readings at just t=0,2,4 alone determine the distance error direction?

<details markdown="1">

<summary>Hint</summary>

Calculate and plot a smooth curve first. Use velocities at 0,2,4 s for trapezia; use your own tangent for acceleration.

</details>

<details markdown="1">

<summary>Solution and check</summary>

$$d\approx\tfrac12(1+3)(2)+\tfrac12(3+9)(2)=16\text{ m},\quad a\approx(4.5-0.5)/(4-0)=1\text{ m/s}^2.$$

Plot velocities 1,1.125,1.5,2.125,3,4.125,5.5,7.125,9. Reference: the accurate tangent at t=1 passes through (0,0.5),(4,4.5), giving about 1 m/s²; use 0.8–1.2 m/s² as a drawing self-check alongside direction and point selection, not an official tolerance. Three readings alone leave the intervening curve unknown; the additional quadratic rule here supplies upward bending and supports an overestimate.

</details>

</div>

## Next step and later review {#next-step}

After another topic, redo [the two-curve task](#practice-stationary) with solutions closed. Compare your sketches with [graph families](/igcse/mathematics/functions-and-graphs/#families).

[Try the mixed algebra review after another topic.](/igcse/mathematics/mixed-review/#algebra-review) Close solutions and record what you can do without help.

## Scope and sources {#sources}

<details markdown="1">

<summary>Qualification and sources used</summary>

A13–15 and A17: differentiation, motion interpretation and estimates of curved gradients/areas. Specification PDF 15–16 (printed 16–17).

[1E MS PDF 11 Q23](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9260-92601E-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=11), PDF 16 Q31, with QP PDF 22–23 and 30; [2E MS PDF 9–10 Q17](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92602E-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=9) with QP PDF 14 were read.

OxfordAQA International GCSE Mathematics **9260**, specification **v5.1**. [Qualification](https://www.oxfordaqa.com/qualification/international-gcse-mathematics-9260/); [specification](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-gcse-mathematics-specification.pdf). Assessment references below are **Specimen 2018** even where the URL says 2016. They calibrate scope and reasoning; no task here is an official examination question.

</details>
