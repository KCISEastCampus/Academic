---
layout: subjects
title: "Trigonometry"
mathjax: true
grade: as
subject: as-mathematics
permalink: /alevel/as-mathematics/trigonometry/
toc_headings: h2, h3
study_page: true
---

[AS Mathematics learning route](/alevel/as-mathematics/#learning-route) · PP1.2 · OxfordAQA 9660 v5.2

Attempt each task on paper before opening its hint. Use the separate solution to check method, conditions and result. All questions are **self-written**, with no official marks. The paired Chinese page keeps the same English prompts, formulae and numerical answers.

- [L15 Triangles, radians, arcs and sectors](#l15)
- [L16 Periodic graphs, identities and all interval solutions](#l16)

## L15 · Triangles, radians, arcs and sectors {#l15}

Goal: choose a triangle relationship and distinguish arc, chord and area. Prerequisites: basic geometry and L01.

In a triangle, pair each side with its opposite angle. Use

$$\frac a{\sin A}=\frac b{\sin B}=\frac c{\sin C},\qquad a^2=b^2+c^2-2bc\cos A,\qquad A_\triangle=\frac12bc\sin A.$$

The sine rule can give two possible angles with the same sine; test the angle sum and all given conditions. One radian subtends an arc equal to the radius, so $180^\circ=\pi$ radians. For radius $r$ and angle $\theta$ in radians, arc length is $r\theta$ and sector area is $r^2\theta/2$. A segment is a sector with the appropriate triangle removed, not an arc length.

### Worked reasoning {#l15-worked}

**Question:** A sector has radius 6 cm and angle $\pi/3$ radians. Find its arc length, sector area and minor-segment area.

The arc is $2\pi\,\mathrm{cm}$ and the sector area is $6\pi\,\mathrm{cm^2}$. The triangle has area $\frac12(6)(6)\sin(\pi/3)=9\sqrt3\,\mathrm{cm^2}$. Thus the minor-segment area is $(6\pi-9\sqrt3)\,\mathrm{cm^2}$, positive and smaller than the sector.

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

### Diagnose and repair {#l15-diagnosis}

Putting a degree value directly into the radian arc formula changes the scale. Label arc versus straight chord before calculating; subtract areas only from areas.

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

## L16 · Periodic graphs, identities and all interval solutions {#l16}

Goal: use graph structure to find every solution and preserve restrictions during algebra. Prerequisites: L02, L05 and L15.

Sine has zeros at $0,\pi,2\pi$ and extrema at $\pi/2,3\pi/2$ in one cycle; cosine starts at 1 and has period $2\pi$. Tangent has period $\pi$ and vertical asymptotes at $\pi/2+k\pi$ for integer $k$. Use

$$\sin^2\theta+\cos^2\theta=1,\qquad \tan\theta=\frac{\sin\theta}{\cos\theta}\quad(\cos\theta\ne0).$$

Reduce an equation to one trigonometric quantity when possible. Write the interval for the full angle first, find all candidates and test the original denominators. A sketch should label axes, cycle points and any asymptotes; it is not merely a calculator trace. Double-angle and compound-angle formulae are not prerequisites here.

![Sine over 0 to 2π has zeros 0,π,2π, maximum 1 at π/2 and minimum -1 at 3π/2.](/alevel/as-mathematics/assets/sine.svg)

### Worked reasoning {#l16-worked}

**Question:** Solve $2\sin^2 x+3\cos x=3$ for $0\le x\le2\pi$.

Writing $c=\cos x$ gives $2(1-c^2)+3c=3$, or $(2c-1)(c-1)=0$. Thus $\cos x=1/2$ or $1$. All solutions are $x=0,\pi/3,5\pi/3,2\pi$. The two endpoints are distinct allowed values and must both be retained.

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

### Diagnose and repair {#l16-diagnosis}

An inverse trigonometric key returns a principal value, not all interval solutions. Dividing by a trigonometric factor may discard solutions; cancelling a denominator may hide excluded values. Check both.

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

## Sources and scope {#sources}

Organised against the [current official 9660 specification](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf). Paired marking material informs the expected reasoning; every task here is separately self-written and is not an official question or official mark scheme.

Specification §3.2 PP1.2; MA02 January 2025 Q4, QP pp8–9, MS pp9–10.

[MA01 January 2025 QP](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-question-paper.pdf) · [paired MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-mark-scheme.pdf) · [MA02 January 2025 QP](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-question-paper.pdf) · [paired MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-mark-scheme.pdf)

Success means independently explaining the method and checking its conditions, not just reading a solution. Student learning outcomes have not been trialled.
