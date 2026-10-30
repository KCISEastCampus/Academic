---
layout: subjects
title: "Circles"
mathjax: true
grade: as
subject: as-mathematics
permalink: /alevel/as-mathematics/circles/
toc_headings: h2
reading_layout: true
study_page: true
---

[AS Mathematics learning route](/alevel/as-mathematics/#learning-route) · PP1.1 · OxfordAQA 9660 v5.2
{:.lesson-meta}

Read the explanation and complete example, then try the questions on paper. Hints and solutions open separately. All questions are **self-written**, with no official marks.

- [Circle equations, tangents and normals](#l14)

## Circle equations, tangents and normals {#l14}

Goal: find circle equations, tangents and normals and check translations. Prerequisites: [completing squares](/alevel/as-mathematics/algebra/#l02), [lines and distance](/alevel/as-mathematics/coordinate-geometry/#l04) and [translations](/alevel/as-mathematics/algebra/#l05).

### Every point is the same distance from the centre {#l14-concept}

A circle consists of points whose distance from centre $(a,b)$ is $r>0$. Squaring the distance formula gives

$$(x-a)^2+(y-b)^2=r^2.$$

The centre comes from making both squared brackets zero; the right side is radius squared, not radius. Complete both squares if the equation is expanded. A negative right side gives no real circle and zero gives just a point.

At a point on the circle, the tangent touches in the direction perpendicular to the radius. The normal is the line through the point perpendicular to that tangent: for a circle it is the line through the centre and the point. Find the radius direction first, then use it for both lines. A horizontal radius gives a horizontal normal and vertical tangent; a vertical radius gives the reverse. This uses straight-line geometry, not implicit differentiation.

The perpendicular from the centre bisects a chord; an angle made by a diameter at another circumference point is a right angle. Translating by $(h,k)$ moves the centre to $(a+h,b+k)$ without changing the radius. Check the new centre directly before writing the equation.

![Circle centre C(2,-1), radius 5, point P(5,3). The tangent is perpendicular to CP; the original x and y axes are labelled.](/alevel/as-mathematics/assets/circle.svg)

<div class="worked-example" markdown="1">

### A complete example {#l14-worked}

**Question:** For $x^2+y^2-4x+2y-20=0$, find the centre, radius and tangent at $(5,3)$. Write the circle equation after translation by $(-3,2)$.

Complete the two squares to make the centre visible:

$$\begin{aligned}
x^2-4x+y^2+2y&=20,\\
(x-2)^2+(y+1)^2&=25.
\end{aligned}$$

The centre is $C=(2,-1)$ and radius is 5. At $P=(5,3)$, the coordinate differences from C are 3 and 4; $3^2+4^2=25$, so P is on the circle. The radius gradient is $4/3$. The tangent is perpendicular to it:

$$y-3=-\frac34(x-5),\qquad 3x+4y=27.$$

The normal at P follows the radius through C. It uses gradient $4/3$ rather than its negative reciprocal:

$$y-3=\frac43(x-5),\qquad 4x-3y=11.$$

Both lines contain P. Only the normal contains C, a useful check. Finally, translation by $(-3,2)$ moves the centre to $(-1,1)$ without changing the radius, giving $(x+1)^2+(y-1)^2=25$.

</div>

<div class="lesson-check" markdown="1">

### Complete a supported attempt {#l14-scaffold}

**Question:** A diameter has endpoints $(-1,0)$ and $(5,4)$. Find the circle equation. Explain why a third point on this circle makes a right angle with the endpoints.

<details markdown="1">
<summary>Hint</summary>

The centre is the diameter midpoint, and the radius is half its length.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The centre is $(2,2)$ and $r^2=13$, giving $(x-2)^2+(y-2)^2=13$. At any other point on the circumference, the angle subtended by that diameter is $90^\circ$.

</details>

</div>

<div class="lesson-check" markdown="1">

### Independent task {#l14-independent}

**Question:** A circle has its centre on the x-axis and passes through $(0,1)$ and $(4,3)$. Find its equation, using a chord property. Then translate it by $(2,-1)$.

<details markdown="1">
<summary>Hint</summary>

The centre lies on the perpendicular bisector of the chord.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The chord midpoint is $(2,2)$ and gradient is $1/2$. Its perpendicular bisector is $y-2=-2(x-2)$. With $y=0$, the centre is $(3,0)$ and $r^2=10$, so $(x-3)^2+y^2=10$. Translation gives $(x-5)^2+(y+1)^2=10$.

</details>

</div>

<div class="lesson-check" markdown="1">

### Another independent task {#l14-independent-lines}

**Question:** A circle has equation $(x+1)^2+(y-2)^2=25$. Verify that $P=(3,5)$ lies on it, then find the tangent and normal at P.

<details markdown="1">
<summary>Hint</summary>

Locate the centre and compare the two line directions with the radius.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The centre is $(-1,2)$. At P, $4^2+3^2=25$, so P is on the circle. The radius gradient is $3/4$. The normal is the line through the centre and P:

$$y-5=\frac34(x-3),\qquad 3x-4y=-11.$$

The tangent has gradient $-4/3$:

$$y-5=-\frac43(x-3),\qquad 4x+3y=27.$$

Both pass through P; only the normal passes through the centre. Their gradients multiply to −1.

</details>

</div>

### Diagnose and repair {#l14-diagnosis}

The number on the right is radius squared. A tangent slope comes from the radius direction, not from treating the circle as a single-valued quadratic graph. Check a translated centre geometrically to catch sign errors.

If tangent and normal were confused, compare [their directions through P](#l14-worked), then [check a new direction](#l14-retry-lines). For a translation sign error, return to [the centre explanation](#l14-concept), then [translate another circle](#l14-retry).

<div class="lesson-check" markdown="1">

### Try again {#l14-retry}

**Question:** Find the tangent to $(x+1)^2+(y-2)^2=9$ at $(2,2)$. Translate the circle so that its centre is the origin.

<details markdown="1">
<summary>Hint</summary>

The radius is horizontal at this point.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The tangent is $x=2$. Translation by $(1,-2)$ gives $x^2+y^2=9$.

</details>

</div>

<div class="lesson-check" markdown="1">

### Check another direction {#l14-retry-lines}

**Question:** Find the tangent and normal to $x^2+(y-1)^2=16$ at $(0,5)$. Explain how you chose each direction.

<details markdown="1">
<summary>Hint</summary>

Draw the radius from the centre to the point.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The centre is $(0,1)$ and the point is on the circle since $0^2+4^2=16$. The radius is vertical. The normal follows it, so $x=0$; the tangent is horizontal, so $y=5$. A vertical line has no finite gradient, so do not attempt a negative reciprocal here.

</details>

</div>

## After this lesson {#next-step}

Close the solutions and check that you can complete each group’s retry independently and explain the method and its conditions. Revisit the relevant example if needed, then continue to the next lesson.

[Previous lesson: Sequences and series](/alevel/as-mathematics/sequences/) · [Course route](/alevel/as-mathematics/#learning-route) · [Next lesson: Trigonometry](/alevel/as-mathematics/trigonometry/)

After completing this route, try [the mixed task](/alevel/as-mathematics/#mixed-further). In a later study session, return to [the recall task](/alevel/as-mathematics/#later-further) with solutions closed.

## Sources and scope {#sources}

<details class="lesson-notes" markdown="1">
<summary>View scope and marking sources</summary>

Organised against the [current official 9660 specification](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf). Paired marking material informs the expected reasoning; every task here is separately self-written and is not an official question or official mark scheme.

Specification §3.2 PP1.1; MA02 January 2025 Q3, QP pp6–7, MS pp7–8.

[MA01 January 2025 QP](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-question-paper.pdf) · [paired MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-mark-scheme.pdf) · [MA02 January 2025 QP](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-question-paper.pdf) · [paired MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-mark-scheme.pdf)

Success means independently explaining the method and checking its conditions, not just reading a solution. Student learning outcomes have not been trialled.

</details>

{% include exam_topic_practice.html %}
