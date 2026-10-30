---
layout: subjects
title: "Coordinate geometry"
mathjax: true
grade: as
subject: as-mathematics
permalink: /alevel/as-mathematics/coordinate-geometry/
toc_headings: h2
reading_layout: true
study_page: true
---

[AS Mathematics learning route](/alevel/as-mathematics/#learning-route) · P1.2 · OxfordAQA 9660 v5.2
{:.lesson-meta}

Read the explanation and complete example, then try the questions on paper. Hints and solutions open separately. All questions are **self-written**, with no official marks.

- [Find a line from its geometry](#l04)

## Find a line from its geometry {#l04}

Goal: choose line equations and calculate exact lengths. Prerequisites: [quadratics](/alevel/as-mathematics/algebra/#l02) and coordinates.

### From a picture to a line equation {#l04-concept}

The midpoint is halfway across and halfway up. For length, the horizontal and vertical changes form a right triangle, so Pythagoras gives

$$M=\left(\frac{x_1+x_2}2,\frac{y_1+y_2}2\right),\qquad AB=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}.$$

Gradient means vertical change divided by horizontal change. When $x_1\ne x_2$, it is $(y_2-y_1)/(x_2-x_1)$. Keep the point order the same in both differences. A line through $(x_1,y_1)$ with gradient $m$ has

$$y-y_1=m(x-x_1).$$

Both changes are zero at the given point, and elsewhere their ratio is the required gradient. Rearranging gives the other useful forms $y=mx+c$ and $ax+by+c=0$.

Parallel lines have equal finite gradients; perpendicular lines have gradient product −1 when both gradients are finite. A vertical line has equation $x=c$, no finite gradient, and is perpendicular to a horizontal line. A perpendicular bisector passes through the midpoint at right angles to the segment: we need both facts, not just one.

![A(1,2) and B(5,4) have midpoint M(3,3). The dashed perpendicular bisector has equation 2x+y−9=0 and passes through M.](/alevel/as-mathematics/assets/bisector.svg)

<div class="worked-example" markdown="1">

### A complete example {#l04-worked}

**Question:** Find the perpendicular bisector of the segment joining $A=(1,2)$ and $B=(5,4)$, and its intersection with $y=x$.

The bisector must pass halfway between A and B, so start with the midpoint $M=((1+5)/2,(2+4)/2)=(3,3)$. The changes along AB are 4 across and 2 up: its length is $\sqrt{4^2+2^2}=2\sqrt5$ and its gradient is $2/4=1/2$.

We need a perpendicular direction, so choose gradient −2. Through M this gives

$$y-3=-2(x-3),\qquad 2x+y-9=0.$$

At its intersection with $y=x$, replace y by x: $3x=9$. Thus the intersection is $(3,3)$. Its distances from A and B are both $\sqrt5$, checking the bisector meaning.

</div>

<div class="lesson-check" markdown="1">

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

</div>

<div class="lesson-check" markdown="1">

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

</div>

<div class="lesson-check" markdown="1">

### Another independent task {#l04-independent-geometry}

**Question:** Points $A=(-2,1)$ and $B=(4,5)$ are endpoints of a segment. Find its exact length and the equation of its perpendicular bisector. Check that your line passes through the midpoint.

<details markdown="1">
<summary>Hint</summary>

Find the changes in both coordinates. The required line has a different direction from AB.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The changes are 6 and 4, so $AB=\sqrt{6^2+4^2}=2\sqrt{13}$. The midpoint is $(1,3)$ and the segment gradient is $4/6=2/3$. The perpendicular gradient is $-3/2$, giving

$$y-3=-\frac32(x-1),\qquad 3x+2y=9.$$

At $(1,3)$ the left side is $3+6=9$. The gradient product is $(2/3)(-3/2)=-1$, so both location and direction are correct.

</details>

</div>

### Diagnose and repair {#l04-diagnosis}

Keep coordinate differences in the same order. A vertical line does not have gradient zero; sketch its direction before choosing a line formula.

For midpoint or direction errors, use [the line explanation](#l04-concept) and [worked bisector](#l04-worked), then [retry the geometry](#l04-retry-geometry). If the intersection count was wrong, revisit [quadratics](/alevel/as-mathematics/algebra/#l02-concept), then do [the intersection retry](#l04-retry-intersections).

<div class="lesson-check" markdown="1">

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

</div>

<div class="lesson-check" markdown="1">

### Check the repaired idea {#l04-retry-intersections}

**Question:** For which values of $c$ does $y=3x+c$ meet $y=x^2$ at two distinct points? Find the contact point in the boundary case.

<details markdown="1">
<summary>Hint</summary>

The two equations must agree at an intersection.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Equating gives $x^2-3x-c=0$. Two distinct real intersections require $9+4c>0$, so $c>-9/4$. At $c=-9/4$ the repeated root is $x=3/2$, giving $y=9/4$. The line is tangent at $(3/2,9/4)$.

</details>

</div>

<div class="lesson-check" markdown="1">

### Try a new segment {#l04-retry-geometry}

**Question:** Find the exact length and perpendicular bisector of the segment from $(0,-1)$ to $(3,5)$.

<details markdown="1">
<summary>Hint</summary>

Find its midpoint and direction separately.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The coordinate changes are 3 and 6, giving length $\sqrt{3^2+6^2}=3\sqrt5$. The midpoint is $(3/2,2)$ and segment gradient is 2, so the bisector has gradient −1/2. Hence $y-2=-\frac12(x-3/2)$, or $2x+4y=11$. Substitution checks the midpoint, and the gradient product is −1.

</details>

</div>

## After this lesson {#next-step}

Close the solutions and check that you can complete each group’s retry independently and explain the method and its conditions. Revisit the relevant example if needed, then continue to the next lesson.

[Previous lesson: Algebra](/alevel/as-mathematics/algebra/) · [Course route](/alevel/as-mathematics/#learning-route) · [Next lesson: Differentiation](/alevel/as-mathematics/differentiation/)

After completing this route, try [the mixed task](/alevel/as-mathematics/#mixed-foundations). In a later study session, return to [the recall task](/alevel/as-mathematics/#later-foundations) with solutions closed.

## Sources and scope {#sources}

<details class="lesson-notes" markdown="1">
<summary>View scope and marking sources</summary>

Organised against the [current official 9660 specification](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf). Paired marking material informs the expected reasoning; every task here is separately self-written and is not an official question or official mark scheme.

Specification §3.1 P1.2; line/curve and repeated-root reasoning.

[MA01 January 2025 QP](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-question-paper.pdf) · [paired MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-mark-scheme.pdf) · [MA02 January 2025 QP](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-question-paper.pdf) · [paired MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-mark-scheme.pdf)

Success means independently explaining the method and checking its conditions, not just reading a solution. Student learning outcomes have not been trialled.

</details>

{% include exam_topic_practice.html %}
