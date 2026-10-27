---
layout: subjects
title: "Transformations"
mathjax: true
grade: igcse
subject: igcse-mathematics
permalink: /igcse/mathematics/transformations/
reading_layout: true
study_page: true
toc_headings: "h2"
---

[IGCSE Mathematics](/igcse/mathematics/#learning-start)
{:.lesson-meta}

## Give a shape clear instructions {#start}

“Turn the triangle” is not enough: where is the centre, and which way should it turn? You will draw images, describe each move fully, and explain what stays unchanged.

You need coordinates and negative numbers. In $(3,-2)$ go 3 right and 2 down; revisit [coordinates](/igcse/mathematics/coordinates-and-lines/#start) if needed. Use squared paper. Begin with single moves, then combine them and use fractional or negative enlargements.

All tasks and examples are self-written, without official marks. Diagrams are teaching constructions.
{:.lesson-meta}

## Slide, fold or turn {#moves}

A **translation** slides every point by the same movement. The column $\binom{3}{-2}$ means 3 right and 2 down: $(x,y)\to(x+3,y-2)$. It is a displacement, not a destination.

A **reflection** places an image on the opposite side of a mirror line, the same perpendicular distance away. Points on the line stay fixed. Across $x=0$ change the sign of x; across $y=0$ change the sign of y. Across $y=x$ swap the coordinates; across $y=-x$ swap and change both signs. Across $x=c$, the original and image x-coordinates average to c.

A **rotation** turns every point through the same angle about a fixed centre, keeping its distance from that centre. About O, 90° anticlockwise sends $(x,y)$ to $(-y,x)$: $(1,0)$ turns to $(0,1)$. Clockwise 90° gives $(y,-x)$; 180° gives $(-x,-y)$. About another centre, turn each point's displacement from that centre, then put it back.

To recover a translation, subtract original coordinates from image coordinates for every pair: the same displacement must work throughout. To recover a rotation centre, draw perpendicular bisectors of two original–image joining segments, choosing two that are not parallel or coincident. Their intersection is equally far from each point and its image. Measure the turn there, state its direction, and test the remaining vertex. Equal side lengths alone do not locate a centre.

![Unit coordinate grid with A(1,1), B(3,1), C(1,2) and mirror line x=0.](/assets/img/igcse-geometry-calculation-transformations.svg)

<div class="worked-example" markdown="1">

### A centre away from O {#example-turn}

**Question:** Rotate $A(1,1),B(3,1),C(1,2)$ through 90° anticlockwise about $K(1,0)$.

The displacements from K are $(0,1),(2,1),(0,2)$. Turn those to $(-1,0),(-1,2),(-2,0)$, then add K back:

$$A'(0,0),\qquad B'(0,2),\qquad C'(-1,0).$$

A was one unit above K and is now one unit left. AB = 2 becomes a vertical side of length 2. Applying the origin rule to the original coordinates would turn about the wrong centre.

</div>

## Draw and describe {#practice}

<div class="lesson-check" markdown="1">

### Use the grid {#check-single}

**Question:** Using the triangle shown, draw and label its images under (a) translation $\binom{-2}{3}$, (b) reflection in $x=0$, and (c) rotation 180° about O. Give the nine image coordinates.

<details markdown="1">
<summary>Hint</summary>

Move all three vertices, then join them in their original order.

</details>

<details markdown="1">
<summary>Solution and check</summary>

(a) $(-1,4),(1,4),(-1,5)$; (b) $(-1,1),(-3,1),(-1,2)$; (c) $(-1,-1),(-3,-1),(-1,-2)$, each listed in A,B,C order. All images keep AB = 2 and AC = 1. Reflection reverses clockwise/anticlockwise vertex order; translation and rotation preserve it. In (b), each pair is equally far from $x=0$.

</details>

</div>

<div class="lesson-check" markdown="1">

### Make the instruction complete {#check-description}

**Question:** $P(2,1),Q(4,1),R(2,3)$ map to $P'(0,1),Q'(-2,1),R'(0,3)$. Describe a single transformation fully. What happens to lengths, angles and area? Separately, a translation maps (1,1),(3,1),(1,2) to (-2,3),(0,3),(-2,4), in order; find its vector. A rotation maps (3,1),(4,1),(3,3) to (1,3),(1,4),(-1,3), in order; find its centre, angle and direction. Plot and check every correspondence.

<details markdown="1">
<summary>Hint</summary>

Test the perpendicular bisector of PP' on the other pairs. For the other two maps, compare displacements and construct the rotation centre before measuring the turn.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Reflection in $x=1$: pair midpoints lie on this line and the joining segments are perpendicular to it. All lengths, angles and area are preserved. “Reflection” alone omits the mirror line. To describe a translation give its vector; a rotation needs centre, angle and direction (180° needs no direction); an enlargement needs centre and factor.

The translation vector is $\binom{-3}{2}$: each image is 3 left and 2 up. For the rotation, the first pair has perpendicular bisector $y=x$; the third pair has perpendicular bisector $x=1$. They meet at $(1,1)$. Relative to this centre, $(2,0),(3,0),(2,2)$ turn to $(0,2),(0,3),(-2,2)$: 90° anticlockwise. Checking all three pairs rejects a centre that fits just one pair.

</details>

</div>

## Change size from a centre {#enlargements}

An **enlargement** with centre K multiplies every displacement from K by the scale factor k. Angles remain equal and corresponding lengths are multiplied by $\lvert k\rvert$. Begin with positive whole-number factors.

For example, centre $(1,1)$, factor 2 sends $(3,2)$ to $(5,3)$: displacement $(2,1)$ becomes $(4,2)$. To find an unknown centre, extend at least two lines joining corresponding vertices; for a non-identity enlargement they meet at the centre. Compare directed distances from that centre to find k.

<div class="lesson-check" markdown="1">

### Enlarge the whole triangle {#check-positive-enlarge}

**Question:** Draw the enlargement of $A(2,1),B(3,1),C(2,3)$ with centre $K(1,-1)$ and scale factor 2. Label every image vertex and give its coordinates. Check one length and one centre-to-point distance.

<details markdown="1">
<summary>Hint</summary>

Draw three rays from K. Double each displacement, then join the image vertices.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The original displacements are $(1,2),(2,2),(1,4)$; doubling and adding K gives $A'(3,3),B'(5,3),C'(3,7)$. Join these three points in order. AB is 1 and A'B' is 2; KA' is twice KA, along the same ray. Doubling the original coordinates would incorrectly use O as centre.

</details>

</div>

<div class="lesson-check" markdown="1">

### Recover the enlargement instruction {#check-enlarge-description}

**Question:** An enlargement maps (2,1),(4,1),(2,2) to (3,1),(7,1),(3,3), in order. Find its centre and scale factor. Draw corresponding joining lines and verify the description on all three vertices.

<details markdown="1">
<summary>Hint</summary>

Compare corresponding side lengths, then extend two distinct lines joining corresponding vertices.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The first side grows from 2 to 4. The first joining line is $y=1$; the third is $y=x$. They meet at $K(1,1)$. From K, $(1,0),(3,0),(1,1)$ become $(2,0),(6,0),(2,2)$, so the directed scale factor is 2. The centre and factor together reproduce the full image; a side ratio alone omits the centre.

</details>

</div>

For $0<k<1$, the image is nearer on the same ray. A negative k puts it on the opposite ray. It does not create a negative length or a line reflection. Area is multiplied by $k^2$. Nonzero enlargements preserve angles and parallelism; generally they change lengths and area. Translations, rotations and reflections preserve lengths, angles, perimeter and area. A reflection reverses orientation. A negative enlargement reverses every centre-to-point direction but preserves clockwise vertex order in the plane.

<div class="worked-example" markdown="1">

### A negative fraction {#example-enlarge}

**Question:** Enlarge $A(2,0),B(4,0),C(2,2)$ by $-\frac12$ about O.

Coordinates already measure displacements from O, so multiply both by $-\frac12$:

$$A'(-1,0),\quad B'(-2,0),\quad C'(-1,-1).$$

Plot and join these points. A and A' are on opposite sides of O; OA' is half OA. The original area is 2, the new area is $2\times\frac14=\frac12$ square unit. Both coordinates change sign, not just one.

</div>

<div class="lesson-check" markdown="1">

### Two images from one centre {#check-enlarge}

**Question:** Enlarge $A(3,1),B(5,1),C(3,3)$ about $K(1,1)$, first with $k=\frac12$ and then with $k=-2$. Draw both images; state the area factors and explain why K stays fixed.

<details markdown="1">
<summary>Hint</summary>

Subtract K, multiply, then add K back.

</details>

<details markdown="1">
<summary>Solution and check</summary>

For $\frac12$: $(2,1),(3,1),(2,2)$, area factor $\frac14$. For $-2$: $(-3,1),(-7,1),(-3,-3)$, area factor 4. K's displacement from itself is zero, which stays zero. If A becomes $(1.5,0.5)$ in the first image, you used O as centre.

</details>

</div>

## Two moves in order {#order}

Apply the first move to every point, then the second to that image. Keep intermediate labels. For $P(2,1)$, translation $\binom{3}{0}$ then reflection in $x=0$ gives $(2,1)\to(5,1)\to(-5,1)$. Reversing the instructions gives $(2,1)\to(-2,1)\to(1,1)$. This counterexample disproves that these two moves commute; it does not claim that no pair ever commutes.

<div class="lesson-check" markdown="1">

### Test both orders {#check-order}

**Question:** For $P(1,2)$ and $Q(3,1)$ compare reflection in $y=0$ followed by rotation 90° anticlockwise about O with the reverse order.

<details markdown="1">
<summary>Hint</summary>

Write two arrows per point and per order.

</details>

<details markdown="1">
<summary>Solution and check</summary>

P: $(1,2)\to(1,-2)\to(2,1)$; reverse $(1,2)\to(-2,1)\to(-2,-1)$. Q: $(3,1)\to(3,-1)\to(1,3)$; reverse $(3,1)\to(-1,3)\to(-1,-3)$. The endpoints differ. Both orders preserve all lengths: a changed side length is an error, not an effect of order.

</details>

</div>

## Close the old solutions and retry {#retry}

Missing a centre or line? Revisit [single moves](#moves). Wrong sign or size? Use [displacements](#enlargements). Starting the second move at the original? Revisit [two arrows](#order).

For whole-shape enlargement or an unknown centre, use [the positive-factor construction](#check-positive-enlarge) and [recovering the instruction](#check-enlarge-description), then close those answers and attempt [the new whole-shape retry](#retry-positive-enlarge).

<div class="lesson-check" markdown="1">

### Repair a single move {#retry-single}

**Question:** $P(4,2),Q(4,5)$ reflect to $(0,2),(0,5)$. Describe the reflection. Rotate the original P 90° clockwise about $(2,2)$. Separately, a translation maps (0,1),(2,1),(0,2) to (4,-2),(6,-2),(4,-1), in order; find its vector. A rotation maps (2,2),(3,2),(2,4) to (1,1),(1,0),(3,1), in order; give its full description and check all three vertices.

<details markdown="1">
<summary>Hint</summary>

Use midpoints, then a centre-to-point displacement.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Reflection in $x=2$. For the rotation, relative displacement $(2,0)\to(0,-2)$, giving $P'=(2,0)$. Its distance to the centre is still 2.

The new translation vector is $\binom4{-3}$. For the final rotation, the first and third joining segments have perpendicular bisectors $y=-x+3$ and $y=\frac13x+\frac53$. They meet at $(1,2)$. Relative displacements $(1,0),(2,0),(1,2)$ become $(0,-1),(0,-2),(2,-1)$, so the turn is 90° clockwise about $(1,2)$. All three image coordinates follow after adding the centre back.

</details>

</div>

<div class="lesson-check" markdown="1">

### Retry a whole enlargement and its description {#retry-positive-enlarge}

**Question:** Enlarge (-1,2),(1,2),(-1,3) by factor 3 about (-2,1); draw and label the complete triangle. Separately, an enlargement maps (1,1),(2,1),(1,3) to (5,3),(8,3),(5,9), in order. Recover its centre and scale factor, using all three pairs to check.

<details markdown="1">
<summary>Hint</summary>

For the drawing, multiply centre-to-point displacements. For the unknown instruction, intersect corresponding joining lines, then compare directed distances.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The first displacements $(1,1),(3,1),(1,2)$ give image vertices $(1,4),(7,4),(1,7)$. Join all three: the horizontal side grows from 2 to 6 and the vertical side from 1 to 3. For the second map, joining lines $y=\frac12x+\frac12$ and $y=\frac13x+\frac13$ meet at $(-1,0)$. Relative displacements $(2,1),(3,1),(2,3)$ become $(6,3),(9,3),(6,9)$, so the factor is 3 about $(-1,0)$.

</details>

</div>

<div class="lesson-check" markdown="1">

### Recover the factor {#retry-enlarge}

**Question:** Centre $(2,0)$ sends $P(6,2)$ to $P'(0,-1)$. Find k and the image of $Q(2,4)$.

<details markdown="1">
<summary>Hint</summary>

Compare directed displacements from that centre.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$(4,2)\to(-2,-1)$ gives $k=-\frac12$. Q has displacement $(0,4)$, giving $(0,-2)$ relative to K, hence image $(2,-2)$.

</details>

</div>

<div class="lesson-check" markdown="1">

### A fresh order check {#retry-order}

**Question:** Translate $P(-1,3)$ by $\binom{0}{2}$ then rotate 180° about O. Compare with the reverse order.

<details markdown="1">
<summary>Hint</summary>

Keep the intermediate point.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$(-1,3)\to(-1,5)\to(1,-5)$; reverse $(-1,3)\to(1,-3)\to(1,-1)$. Keep the translation vector fixed in the coordinate plane.

</details>

</div>

## Come back after another topic {#next-step}

Study [vectors and matrices](/igcse/mathematics/vectors-and-matrices/#start) to connect these moves with column calculations. Then close the rules and attempt the following later check. Continue to [mixed geometry review](/igcse/mathematics/mixed-review/#geometry-review).

<div class="lesson-check" markdown="1">

### A later check {#later-check}

**Question:** Draw the reflection of $(1,1),(3,1),(1,2)$ in $y=x$. State its area and orientation. An enlargement about O sends $(1,1)$ to $(3,3)$: does it give the same whole-shape image?

<details markdown="1">
<summary>Hint</summary>

Test more than one vertex.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Reflection gives $(1,1),(1,3),(2,1)$, area 1 square unit, reversed orientation. The enlargement has factor 3 and gives $(3,3),(9,3),(3,6)$, area 9. It is different. One matching point cannot identify a whole-shape transformation.

</details>

</div>

## Scope and sources {#sources}

<details markdown="1">
<summary>Qualification and actual reading</summary>

OxfordAQA International GCSE Mathematics 9260 v5.1, G21; [specification PDF 22 (printed 23)](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-gcse-mathematics-specification.pdf#page=22). This lesson includes single and combined moves, and positive, fractional and negative enlargement factors.

Read for drawing evidence: Specimen 2018 1C Q11, [QP PDF 11](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9260-92601C-international-gcse-mathematics-specimen-paper-2016-v1.pdf#page=11), [MS PDF 6–7](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9260-92601C-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=6); 1E Q16, QP PDF 14–15 and MS PDF 8. All tasks here are self-written with no official marks. The covers say Specimen 2018; 2016 in filenames is not the examination session.

</details>
