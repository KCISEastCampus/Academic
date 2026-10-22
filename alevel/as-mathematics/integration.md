---
layout: subjects
title: "Integration"
mathjax: true
grade: as
subject: as-mathematics
permalink: /alevel/as-mathematics/integration/
toc_headings: h2, h3
study_page: true
---

[AS Mathematics learning route](/alevel/as-mathematics/#learning-route) · P1.4 · OxfordAQA 9660 v5.2

Attempt each task on paper before opening its hint. Use the separate solution to check method, conditions and result. All questions are **self-written**, with no official marks. The paired Chinese page keeps the same English prompts, formulae and numerical answers.

- [L08 Antiderivatives and the region being measured](#l08)
- [L09 Trapezia, ordinates and approximation](#l09)

## L08 · Antiderivatives and the region being measured {#l08}

Goal: reverse differentiation, fix constants and choose correct area bounds. Prerequisites: L02, L04 and L06.

An indefinite integral is a family of antiderivatives; the constant disappears on differentiation. For rational $n\ne-1$:

$$\int ax^n\,dx=\frac{a}{n+1}x^{n+1}+C,\qquad \int_a^b f(x)\,dx=F(b)-F(a).$$

For example, on $x>0$ an antiderivative of $6\sqrt x-4x^{-2}$ is $4x^{3/2}+4x^{-1}$. Differentiate to check. For area, identify the actual boundary and use upper curve minus lower curve. Entirely below the x-axis, geometric area is the negative of the integral. Core P1 regions here do not cross the x-axis. Splitting a crossing-axis region is a useful extension, not an added core demand; logarithmic integration is also outside this P1 group.

![The shaded region lies between y=2x above and y=x² below, from x=0 to x=2. Both curves are above the x-axis.](/alevel/as-mathematics/assets/area.svg)

### Worked reasoning {#l08-worked}

**Question:** Find the area enclosed by $y=2x$ and $y=x^2$.

The intersections satisfy $x(x-2)=0$. Between 0 and 2 the line is above the parabola, both nonnegative. Thus

$$A=\int_0^2(2x-x^2)\,dx=\left[x^2-\frac{x^3}3\right]_0^2=\frac43.$$

The integrand vanishes at both boundaries and is positive inside; this checks that the region and sign agree.

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

### Diagnose and repair {#l08-diagnosis}

A numerical integral can be negative; geometric area cannot. Label the boundary points and test a height before integrating. Do not omit the constant when reconstructing a curve.

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

## L09 · Trapezia, ordinates and approximation {#l09}

Goal: construct a trapezium estimate and explain its direction from a graph. Prerequisites: L08 and reading a table.

An ordinate is a vertical height at a given x-value. With $n$ equal strips there are $n+1$ ordinates, spacing $h=(b-a)/n$. Adding the trapezia gives

$$T=\frac h2\left[y_0+y_n+2(y_1+\cdots+y_{n-1})\right].$$

Interior heights belong to two strips, explaining their weight 2. Chords above a nonnegative curve produce an overestimate; chords below produce an underestimate. For a suitably smooth curve, narrower strips improve the approximation, but a data table alone does not establish curvature or a universal error bound. Nonuniform spacing needs separate trapezium widths. All tables here are constructed teaching data.

![Two equal-width trapezia approximate y=x²+1 on 0 to 2. Heights 1,2,5 are labelled, and the chords are above the curve.](/alevel/as-mathematics/assets/trapezia.svg)

### Worked reasoning {#l09-worked}

**Question:** Use ordinates at $x=0,1,2$ for $y=x^2+1$ to estimate the area from 0 to 2. Explain the error direction.

The heights are $1,2,5$, with $h=1$. Thus $T=\frac12(1+5+2\times2)=5$. The chords lie above this upward-curving graph, so it overestimates. The exact integral is $[x^3/3+x]_0^2=14/3$, consistent with that prediction. Exact integration checks the estimate but does not replace the requested trapezium working.

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

### Diagnose and repair {#l09-diagnosis}

If every height received weight 2, draw the strips: outer edges occur only once. If you inferred error direction from a short table alone, separate the given shape assumption from the measurements.

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

## Sources and scope {#sources}

Organised against the [current official 9660 specification](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf). Paired marking material informs the expected reasoning; every task here is separately self-written and is not an official question or official mark scheme.

Specification §3.1 P1.4; MA01 January 2025 Q8(d), QP p19 and MS p20.

[MA01 January 2025 QP](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-question-paper.pdf) · [paired MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-mark-scheme.pdf) · [MA02 January 2025 QP](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-question-paper.pdf) · [paired MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-mark-scheme.pdf)

Success means independently explaining the method and checking its conditions, not just reading a solution. Student learning outcomes have not been trialled.
