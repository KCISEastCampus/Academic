---
layout: subjects
title: "Integration"
mathjax: true
grade: as
subject: as-mathematics
permalink: /alevel/as-mathematics/integration/
toc_headings: h2
reading_layout: true
study_page: true
---

[AS Mathematics learning route](/alevel/as-mathematics/#learning-route) · P1.4 · OxfordAQA 9660 v5.2
{:.lesson-meta}

Read the explanation and complete example, then try the questions on paper. Hints and solutions open separately. All questions are **self-written**, with no official marks.

- [Recover a function and measure area](#l08)
- [Estimate area with trapezia](#l09)

## Recover a function and measure area {#l08}

Goal: recover functions and constants, and identify the area being measured. Prerequisites: [powers](/alevel/as-mathematics/algebra/#l01-indices), [derivatives](/alevel/as-mathematics/differentiation/#l06) and intersections.

### Find the function whose derivative you know {#l08-concept}

Differentiation goes from a function to its gradient. Integration can go back. For example, both $x^2$ and $x^2+5$ differentiate to $2x$: the gradient alone cannot tell us the constant. We write $+C$ to include all these possibilities. A known point selects the value of $C$.

To reverse a power derivative, increase the exponent by one and divide by that new exponent. For rational $n\ne-1$,

$$\int ax^n\,dx=\frac{a}{n+1}x^{n+1}+C.$$

Check by differentiating. On $x>0$, integrating $6\sqrt x-4x^{-2}$ gives $4x^{3/2}+4x^{-1}+C$. The restriction matters for roots and negative powers; the case with exponent −1 uses a later method, not this power rule.

A definite integral uses two bounds. If $F$ is an antiderivative of $f$, then

$$\int_a^b f(x)\,dx=F(b)-F(a).$$

This is a signed accumulation. For area between curves, use upper height minus lower height and find the actual intersections. Below the x-axis, geometric area is the negative of the integral. Core P1 regions here do not cross that axis; splitting crossing regions and logarithmic integration are later extensions.

![The shaded region lies between y=2x above and y=x² below, from x=0 to x=2. Both curves are above the x-axis.](/alevel/as-mathematics/assets/area.svg)

<div class="worked-example" markdown="1">

### A complete example {#l08-worked}

**Question:** Find the area enclosed by $y=2x$ and $y=x^2$.

First find the left and right edges of the enclosed region. At an intersection $2x=x^2$, giving $x(x-2)=0$, so the bounds are 0 and 2. Inside them, testing $x=1$ shows the line is above the parabola. Both curves are nonnegative here.

Each thin vertical strip has height $2x-x^2$, so add those heights by integrating:

$$\begin{aligned}
A&=\int_0^2(2x-x^2)\,dx\\
&=\left[x^2-\frac{x^3}3\right]_0^2\\
&=\left(4-\frac83\right)-0=\frac43.
\end{aligned}$$

The strip height is zero at both edges and positive between them, so the sign agrees with a positive area.

</div>

<div class="lesson-check" markdown="1">

### Complete a supported attempt {#l08-scaffold}

**Question:** A curve has gradient $3x^2-2x+1$ and passes through $(0,4)$. Find its equation and its definite integral from 0 to 1.

<details markdown="1">
<summary>Hint</summary>

Determine the constant before integrating the curve itself.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The curve is $y=x^3-x^2+x+4$. Its integral is $[x^4/4-x^3/3+x^2/2+4x]_0^1=53/12$.

</details>

</div>

<div class="lesson-check" markdown="1">

### Independent task {#l08-independent}

**Question:** Find the area enclosed by $y=x+2$ and $y=x^2$. Include enough reasoning to identify the region.

<details markdown="1">
<summary>Hint</summary>

Obtain both bounds algebraically and test which curve is upper.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$x^2=x+2$ gives $x=-1,2$. The line is upper between them. Hence $A=[x^2/2+2x-x^3/3]_{-1}^2=9/2$. Both boundary curves are nonnegative on the region.

</details>

</div>

<div class="lesson-check" markdown="1">

### Another independent task {#l08-independent-function}

**Question:** For $x>0$, a curve has gradient $3\sqrt x+2/x^2$ and passes through $(1,4)$. Find its equation. Check both the gradient and the given point.

<details markdown="1">
<summary>Hint</summary>

The gradient gives a family of curves; the point selects one member.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Rewrite the gradient as $3x^{1/2}+2x^{-2}$. Integration gives

$$y=\frac{3}{3/2}x^{3/2}+\frac{2}{-1}x^{-1}+C=2x^{3/2}-\frac2x+C.$$

Use $(1,4)$: $4=2-2+C$, so $C=4$. Thus $y=2x^{3/2}-2/x+4$. Its derivative is the given gradient and its value at 1 is 4.

</details>

</div>

### Diagnose and repair {#l08-diagnosis}

A numerical integral can be negative; geometric area cannot. Label the boundary points and test a height before integrating. Do not omit the constant when reconstructing a curve.

For a missing constant or power error, return to [reversing a derivative](#l08-concept), then [recover a new curve](#l08-retry-function). For an area sign error, revisit [the labelled region](#l08-worked), then [the below-axis retry](#l08-retry).

<div class="lesson-check" markdown="1">

### Try again {#l08-retry}

**Question:** Find the area between $y=x^2-4$, the x-axis and the lines $x=0$, $x=2$.

<details markdown="1">
<summary>Hint</summary>

The whole region is below the axis.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The integral is $[x^3/3-4x]_0^2=-16/3$, so the area is $16/3$.

</details>

</div>

<div class="lesson-check" markdown="1">

### Recover another curve {#l08-retry-function}

**Question:** For $x>0$, a curve has gradient $6\sqrt x-4/x^2$ and passes through $(4,35)$. Find its equation and check your result.

<details markdown="1">
<summary>Hint</summary>

Keep the unknown constant until you have used the point.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Integrating $6x^{1/2}-4x^{-2}$ gives $y=4x^{3/2}+4x^{-1}+C$. The point gives $35=32+1+C$, hence $C=2$. So $y=4x^{3/2}+4/x+2$. Differentiation recovers the gradient, and substituting $x=4$ gives 35.

</details>

</div>

## Estimate area with trapezia {#l09}

Goal: build a trapezium estimate and explain what is known about its error. Prerequisites: [area integrals](#l08) and tables.

### Replace a curved edge by short straight edges {#l09-concept}

We may know heights at only a few positions. Join neighbouring tops with a straight line; the region beneath each join is a trapezium. Add its parallel heights and multiply by half the width. An ordinate is just one of these vertical heights.

For $n$ equal strips there are $n+1$ heights and spacing $h=(b-a)/n$. Adding the strips gives

$$T=\frac h2\left[y_0+y_n+2(y_1+\cdots+y_{n-1})\right].$$

Each inside height borders two strips, so it is counted twice. The two outside heights occur once. Draw the strips if you forget the weights.

Straight joins above a nonnegative curve overestimate area; joins below it underestimate. A stated smooth shape can explain why narrower strips help. A short table alone does not tell us the shape between readings or guarantee an error bound. For unequal spacing, calculate each trapezium using its own width. All data here are constructed.

![Two equal-width trapezia approximate y=x²+1 on 0 to 2. Heights 1,2,5 are labelled, and the chords are above the curve.](/alevel/as-mathematics/assets/trapezia.svg)

<div class="worked-example" markdown="1">

### A complete example {#l09-worked}

**Question:** Use ordinates at $x=0,1,2$ for $y=x^2+1$ to estimate the area from 0 to 2. Explain the error direction.

The heights are $1,2,5$, with $h=1$. Thus $T=\frac12(1+5+2\times2)=5$. The chords lie above this upward-curving graph, so it overestimates. The exact integral is $[x^3/3+x]_0^2=14/3$, consistent with that prediction. Exact integration checks the estimate but does not replace the requested trapezium working.

</div>

<div class="lesson-check" markdown="1">

### Complete a supported attempt {#l09-scaffold}

**Question:** A table has $x=0,0.5,1,1.5$ and $y=2,3,4,6$. Form and evaluate a trapezium estimate.

<details markdown="1">
<summary>Hint</summary>

Count gaps, not entries; then weight only the interior ordinates twice.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Three strips have $h=0.5$. The estimate is $0.25[2+6+2(3+4)]=5.5$.

</details>

</div>

<div class="lesson-check" markdown="1">

### Independent task {#l09-independent}

**Question:** A nonnegative curve bends downward throughout $0\le x\le4$. At $x=0,2,4$ its heights are $0,3,4$. Estimate the area, state whether the estimate is high or low, and explain how extra readings could help.

<details markdown="1">
<summary>Hint</summary>

Compare each joining chord with the stated curve, not just with the listed values.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$T=1[0+4+2(3)]=10$. The chords lie below a downward-bending curve, so it is an underestimate. Extra readings at $x=1,3$ would allow four narrower equal strips, giving a closer approximation for this smooth shape. No numerical error bound follows from the three readings.

</details>

</div>

### Diagnose and repair {#l09-diagnosis}

If every height received weight 2, draw the strips: outer edges occur only once. If you inferred error direction from a short table alone, separate the given shape assumption from the measurements.

Rebuild [the strips and weights](#l09-concept), then use [the new table](#l09-retry) without the old solution open.

<div class="lesson-check" markdown="1">

### Try again {#l09-retry}

**Question:** Estimate the area from a table with $x=1,2,3$ and heights $4,5,8$. Can the sign of the error be known from only these data?

<details markdown="1">
<summary>Hint</summary>

Use two strips; then consider other curves through the same points.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The estimate is $\frac12(4+8+2\times5)=11$. Error direction is not determined by these data alone because the curve between the points is unspecified.

</details>

</div>

## After this lesson {#next-step}

Close the solutions and check that you can complete each group’s retry independently and explain the method and its conditions. Revisit the relevant example if needed, then continue to the next lesson.

[Previous lesson: Differentiation](/alevel/as-mathematics/differentiation/) · [Course route](/alevel/as-mathematics/#learning-route) · [Next lesson: Sequences and series](/alevel/as-mathematics/sequences/)

After completing this route, try [the mixed task](/alevel/as-mathematics/#mixed-foundations). In a later study session, return to [the recall task](/alevel/as-mathematics/#later-foundations) with solutions closed.

## Sources and scope {#sources}

<details class="lesson-notes" markdown="1">
<summary>View scope and marking sources</summary>

Organised against the [current official 9660 specification](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf). Paired marking material informs the expected reasoning; every task here is separately self-written and is not an official question or official mark scheme.

Specification §3.1 P1.4; MA01 January 2025 Q8(d), QP p19 and MS p20.

[MA01 January 2025 QP](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-question-paper.pdf) · [paired MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-mark-scheme.pdf) · [MA02 January 2025 QP](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-question-paper.pdf) · [paired MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-mark-scheme.pdf)

Success means independently explaining the method and checking its conditions, not just reading a solution. Student learning outcomes have not been trialled.

</details>

{% include exam_topic_practice.html %}
