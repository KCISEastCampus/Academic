---
layout: subjects
title: "Trigonometry"
mathjax: true
grade: as
subject: as-mathematics
permalink: /alevel/as-mathematics/trigonometry/
toc_headings: h2
reading_layout: true
study_page: true
---

[AS Mathematics learning route](/alevel/as-mathematics/#learning-route) · PP1.2 · OxfordAQA 9660 v5.2
{:.lesson-meta}

Read the explanation and complete example, then try the questions on paper. Hints and solutions open separately. All questions are **self-written**, with no official marks.

- [Triangles, arcs and sectors](#l15)
- [Trigonometric graphs and all solutions](#l16)

## Triangles, arcs and sectors {#l15}

Goal: select a triangle rule and distinguish arc length from area. Prerequisites: triangle geometry and [exact roots](/alevel/as-mathematics/algebra/#l01-surds).

### Name the shape and the quantity first {#l15-concept}

Label side $a$ opposite angle $A$, and similarly for the other sides. The sine rule connects opposite side-angle pairs. If two sides and their included angle are given, the cosine rule gives the third side; the area rule uses those same two sides:

$$\begin{aligned}
\frac a{\sin A}&=\frac b{\sin B}=\frac c{\sin C},\\
a^2&=b^2+c^2-2bc\cos A,\\
A_\triangle&=\frac12bc\sin A.
\end{aligned}$$

Two angles can share a sine value. After using inverse sine, test the other angle and the triangle angle sum, not just the calculator's first result.

A radian measures arc length compared with radius: one radian cuts off an arc as long as the radius. Thus $180^\circ=\pi$ radians. For angle $\theta$ in radians, arc length is $r\theta$ and sector area is $r^2\theta/2$. A chord is straight; an arc is curved. A minor segment is the sector with its triangle removed. Label length or area before calculating so their units cannot be mixed.

<div class="worked-example" markdown="1">

### A complete example {#l15-worked}

**Question:** A sector has radius 6 cm and angle $\pi/3$ radians. Find its arc length, sector area and minor-segment area.

The angle is already in radians, so the arc formula applies directly. Arc length and sector area are different quantities:

$$\begin{aligned}
l&=r\theta=6\left(\frac\pi3\right)=2\pi\,\mathrm{cm},\\
A_{\text{sector}}&=\frac12r^2\theta=6\pi\,\mathrm{cm^2}.
\end{aligned}$$

The minor segment is the curved piece between the arc and the straight chord. Remove the triangle formed by the two radii:

$$A_{\triangle}=\frac12(6)(6)\sin(\pi/3)=9\sqrt3\,\mathrm{cm^2}.$$

Therefore the segment area is $(6\pi-9\sqrt3)\,\mathrm{cm^2}$. It is positive and smaller than the sector. We subtracted two areas, not an arc length from an area.

</div>

<div class="lesson-check" markdown="1">

### Complete a supported attempt {#l15-scaffold}

**Question:** Two sides of a triangle are 5 cm and 7 cm with included angle $60^\circ$. Find the third side and area exactly.

<details markdown="1">
<summary>Hint</summary>

Two sides and their included angle favour the cosine rule.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The third side is $\sqrt{25+49-70\cos60^\circ}=\sqrt{39}\,\mathrm{cm}$. Area is $35\sqrt3/4\,\mathrm{cm^2}$.

</details>

</div>

<div class="lesson-check" markdown="1">

### Independent task {#l15-independent}

**Question:** In a triangle, $a=5$ cm, $b=8$ cm and $A=30^\circ$. Determine all possible values of $B$ to 2 decimal places, justifying whether each can belong to a triangle.

<details markdown="1">
<summary>Hint</summary>

The inverse sine gives a principal value; another angle may share that sine.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The sine rule gives $\sin B=8\sin30^\circ/5=0.8$. Thus $B=53.13^\circ$ or $126.87^\circ$. Both are possible because adding $30^\circ$ leaves a positive third angle (respectively $96.87^\circ$ and $23.13^\circ$).

</details>

</div>

### Diagnose and repair {#l15-diagnosis}

Putting a degree value directly into the radian arc formula changes the scale. Label arc versus straight chord before calculating; subtract areas only from areas.

For units or arc/area confusion, revisit [the sector example](#l15-worked), then [the perimeter retry](#l15-retry). For missed or impossible triangle angles, revisit [the side-angle explanation](#l15-concept), then [test a new triangle](#l15-retry-triangle).

<div class="lesson-check" markdown="1">

### Try again {#l15-retry}

**Question:** A sector has radius 4 cm and perimeter 14 cm. Find its angle in radians and area.

<details markdown="1">
<summary>Hint</summary>

The perimeter includes two radii as well as the arc.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The arc is $14-8=6$ cm, so $\theta=6/4=1.5$ radians and area $\frac12(4^2)(1.5)=12\,\mathrm{cm^2}$.

</details>

</div>

<div class="lesson-check" markdown="1">

### Another retry {#l15-retry-triangle}

**Question:** In a triangle, $a=9$ cm, $b=6$ cm and $A=40^\circ$. Find every possible value of B to 2 decimal places. Explain which angle candidates are valid.

<details markdown="1">
<summary>Hint</summary>

After finding one angle, test its supplement against the triangle angle sum.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The sine rule gives $\sin B=6\sin40^\circ/9$. The candidates are approximately $25.37^\circ$ and $154.63^\circ$. The second would give $40^\circ+154.63^\circ>180^\circ$, so it is impossible. Only $B=25.37^\circ$ is valid; the remaining angle is approximately $114.63^\circ>0$.

</details>

</div>

## Trigonometric graphs and all solutions {#l16}

Goal: find every interval solution and retain the restrictions in an identity. Prerequisites: [quadratics](/alevel/as-mathematics/algebra/#l02), [graph transformations](/alevel/as-mathematics/algebra/#l05) and [angles](#l15).

### One calculator answer is not the whole cycle {#l16-concept}

A periodic graph repeats after a fixed horizontal distance, called its period. In a sine cycle the zeros are at $0,\pi,2\pi$, and the high and low points at $\pi/2,3\pi/2$. Cosine begins at 1 and also has period $2\pi$. Tangent repeats after $\pi$ and has vertical asymptotes at $\pi/2+k\pi$ for integer $k$; do not join its separate branches.

Two useful identities let us express an equation using one quantity:

$$\sin^2\theta+\cos^2\theta=1,\qquad \tan\theta=\frac{\sin\theta}{\cos\theta}\quad(\cos\theta\ne0).$$

Replacing a sine square by one minus a cosine square can turn a trigonometric equation into a familiar quadratic. After solving that quadratic, return to the graph to find every allowed angle. First write the interval for the whole angle, including any multiplier. Keep original denominator restrictions even if a factor cancels. A sketch needs axes, important cycle points and any asymptotes; a screen trace alone is not an explanation. Double-angle and compound-angle formulae are not needed here.

![Sine over 0 to 2π has zeros 0,π,2π, maximum 1 at π/2 and minimum -1 at 3π/2.](/alevel/as-mathematics/assets/sine.svg)

<div class="worked-example" markdown="1">

### A complete example {#l16-worked}

**Question:** Solve $2\sin^2 x+3\cos x=3$ for $0\le x\le2\pi$.

The equation contains both a sine square and a cosine. Replace $\sin^2x$ by $1-\cos^2x$, then temporarily call $\cos x$ c:

$$2(1-c^2)+3c=3,\qquad 2c^2-3c+1=0,\qquad (2c-1)(c-1)=0.$$

So $\cos x=1/2$ or $1$. Now return from c to angles. In the given full cycle, cosine at $\pi/3,5\pi/3$ is $1/2$, and at $0,2\pi$ it is 1. Thus all solutions are $x=0,\pi/3,5\pi/3,2\pi$.

Both endpoints are allowed and are different x-values even though they have the same cosine. Substitution gives the original right side 3 in each case.

</div>

<div class="lesson-check" markdown="1">

### Complete a supported attempt {#l16-scaffold}

**Question:** Sketch $y=\cos x$ on $0\le x\le2\pi$, labelling its zeros and maximum/minimum values. Solve $\cos x=-1/2$ on the same interval.

<details markdown="1">
<summary>Hint</summary>

Use a full cycle and the reflection across the middle of it.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The graph passes through $(0,1),(\pi/2,0),(\pi,-1),(3\pi/2,0),(2\pi,1)$. The equation gives $x=2\pi/3,4\pi/3$.

![A revealed check graph for y=cos x on 0 to 2π: maxima at endpoints, zeros at π/2 and 3π/2, minimum at π.](/alevel/as-mathematics/assets/cosine-check.svg)

</details>

</div>

<div class="lesson-check" markdown="1">

### Independent task {#l16-independent}

**Question:** Show that $(1-\sin^2 y)/\cos y=\cos y$ wherever the left side is defined. Hence solve $(1-\sin^2 y)/\cos y=1/2$ for $0\le y<2\pi$, stating the excluded values.

<details markdown="1">
<summary>Hint</summary>

Use the identity, cancel only with the restriction recorded, then solve the simplified equation.

</details>

<details markdown="1">
<summary>Solution and check</summary>

For $\cos y\ne0$, the numerator is $\cos^2 y$, so division gives $\cos y$. Excluded values are $y=\pi/2,3\pi/2$. Using that result, the solutions are $y=\pi/3,5\pi/3$, both of which satisfy the original restriction. The working explicitly uses the preceding identity.

</details>

</div>

### Diagnose and repair {#l16-diagnosis}

An inverse trigonometric key returns a principal value, not all interval solutions. Dividing by a trigonometric factor may discard solutions; cancelling a denominator may hide excluded values. Check both.

For missed interval solutions, revisit [cycles](#l16-concept), then [solve the new cycle](#l16-retry). For cancelled restrictions, reread [the identity task](#l16-independent), then [check a new original denominator](#l16-retry-restrictions).

<div class="lesson-check" markdown="1">

### Try again {#l16-retry}

**Question:** Solve $\sin(2x)=1/2$ for $0\le x\le\pi$. State the period and two neighbouring asymptotes of $y=\tan x$.

<details markdown="1">
<summary>Hint</summary>

First double the entire interval for the angle 2x.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$0\le2x\le2\pi$ gives $2x=\pi/6,5\pi/6$, hence $x=\pi/12,5\pi/12$. Tangent has period $\pi$ and neighbouring asymptotes $x=-\pi/2,\pi/2$.

![A revealed tangent check: zeros at 0 and π, dashed vertical asymptotes at −π/2, π/2 and 3π/2. Branches repeat after π and are not joined across asymptotes.](/alevel/as-mathematics/assets/tangent-check.svg)

</details>

</div>

<div class="lesson-check" markdown="1">

### Another retry {#l16-retry-restrictions}

**Question:** Solve $(1-\cos^2t)/\sin t=0$ for $0\le t\le2\pi$. State the restrictions from the original expression and check every candidate.

<details markdown="1">
<summary>Hint</summary>

Record where the denominator is zero before simplifying.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The original expression requires $\sin t\ne0$, excluding $t=0,\pi,2\pi$. Where it is defined,

$$\frac{1-\cos^2t}{\sin t}=\frac{\sin^2t}{\sin t}=\sin t.$$

The simplified equation would give $t=0,\pi,2\pi$. All three are excluded by the original denominator, so the original equation has no solutions. Cancelling a factor never makes its excluded inputs valid.

</details>

</div>

## After this lesson {#next-step}

Close the solutions and check that you can complete each group’s retry independently and explain the method and its conditions. Revisit the relevant example if needed, then continue to the next lesson.

[Previous lesson: Circles](/alevel/as-mathematics/circles/) · [Course route](/alevel/as-mathematics/#learning-route) · [Next lesson: Exponentials and logarithms](/alevel/as-mathematics/exponentials-logarithms/)

After completing this route, try [the mixed task](/alevel/as-mathematics/#mixed-further). In a later study session, return to [the recall task](/alevel/as-mathematics/#later-further) with solutions closed.

## Sources and scope {#sources}

<details class="lesson-notes" markdown="1">
<summary>View scope and marking sources</summary>

Organised against the [current official 9660 specification](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf). Paired marking material informs the expected reasoning; every task here is separately self-written and is not an official question or official mark scheme.

Specification §3.2 PP1.2; MA02 January 2025 Q4, QP pp8–9, MS pp9–10.

[MA01 January 2025 QP](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-question-paper.pdf) · [paired MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-mark-scheme.pdf) · [MA02 January 2025 QP](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-question-paper.pdf) · [paired MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-mark-scheme.pdf)

Success means independently explaining the method and checking its conditions, not just reading a solution. Student learning outcomes have not been trialled.

</details>
