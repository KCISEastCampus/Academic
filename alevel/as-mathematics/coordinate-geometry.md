---
layout: subjects
title: "Coordinate geometry"
mathjax: true
grade: as
subject: as-mathematics
permalink: /alevel/as-mathematics/coordinate-geometry/
toc_headings: h2, h3
study_page: true
---

[AS Mathematics learning route](/alevel/as-mathematics/#learning-route) · P1.2 · OxfordAQA 9660 v5.2

Attempt each task on paper before opening its hint. Use the separate solution to check method, conditions and result. All questions are **self-written**, with no official marks. The paired Chinese page keeps the same English prompts, formulae and numerical answers.

- [L04 Turning geometric constraints into equations](#l04)

## L04 · Turning geometric constraints into equations {#l04}

Goal: determine lines and exact lengths, handling vertical lines separately. Prerequisites: L02 and coordinates.

For $A=(x_1,y_1)$ and $B=(x_2,y_2)$, midpoint and length are

$$M=\left(\frac{x_1+x_2}2,\frac{y_1+y_2}2\right),\qquad AB=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}.$$

If $x_1\ne x_2$, the gradient is $(y_2-y_1)/(x_2-x_1)$ and a line through $A$ is $y-y_1=m(x-x_1)$. Rearrange into $y=mx+c$ or $ax+by+c=0$ when useful. Parallel finite gradients are equal; perpendicular finite gradients have product −1. A vertical line $x=c$ has no finite gradient and is perpendicular to a horizontal line.

![A(1,2) and B(5,4) have midpoint M(3,3). The dashed perpendicular bisector has equation 2x+y−9=0 and passes through M.](/alevel/as-mathematics/assets/bisector.svg)

### Worked reasoning {#l04-worked}

**Question:** Find the perpendicular bisector of the segment joining $A=(1,2)$ and $B=(5,4)$, and its intersection with $y=x$.

The midpoint is $(3,3)$, length $2\sqrt5$, and segment gradient $1/2$. A perpendicular gradient is $-2$, so $y-3=-2(x-3)$, or $2x+y-9=0$. Substituting $y=x$ gives $(3,3)$. Equal distances from this point to the two endpoints check the bisector interpretation.

### Complete a supported attempt {#l04-scaffold}

**Question:** Find the line through $(2,-1)$ parallel to $3x-y+4=0$.

<details markdown="1">
<summary>Hint</summary>

Rearrange the given equation to identify its gradient.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The gradient is $3$, hence $y+1=3(x-2)$ or $y=3x-7$.

</details>

### Independent task {#l04-independent}

**Question:** Find all values of $c$ for which $y=2x+c$ meets $y=x^2$ twice. Describe the case at the boundary of your answer.

<details markdown="1">
<summary>Hint</summary>

Count algebraic intersections using the quadratic discriminant.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$x^2-2x-c=0$ has two distinct roots if $4+4c>0$, so $c>-1$. At $c=-1$ there is one repeated intersection $(1,1)$; the line is tangent.

</details>

### Diagnose and repair {#l04-diagnosis}

Keep coordinate differences in the same order. A vertical line does not have gradient zero; sketch its direction before choosing a line formula.

### Try again {#l04-retry}

**Question:** Find the perpendicular bisector of the segment from $(2,1)$ to $(2,7)$.

<details markdown="1">
<summary>Hint</summary>

This segment is vertical.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Its midpoint is $(2,4)$ and the required horizontal line is $y=4$.

</details>

## After this lesson {#next-step}

Close the solutions and check that you can complete each group’s retry independently and explain the method and its conditions. Revisit the relevant example if needed, then continue to the next lesson.

[Previous lesson: Algebra](/alevel/as-mathematics/algebra/) · [Course route](/alevel/as-mathematics/#learning-route) · [Next lesson: Differentiation](/alevel/as-mathematics/differentiation/)

## Sources and scope {#sources}

Organised against the [current official 9660 specification](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf). Paired marking material informs the expected reasoning; every task here is separately self-written and is not an official question or official mark scheme.

Specification §3.1 P1.2; line/curve and repeated-root reasoning.

[MA01 January 2025 QP](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-question-paper.pdf) · [paired MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-mark-scheme.pdf) · [MA02 January 2025 QP](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-question-paper.pdf) · [paired MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-mark-scheme.pdf)

Success means independently explaining the method and checking its conditions, not just reading a solution. Student learning outcomes have not been trialled.
