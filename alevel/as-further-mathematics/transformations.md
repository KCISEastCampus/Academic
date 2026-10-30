---
title: "Transformations and affine invariant lines"
layout: subjects
mathjax: true
grade: as
subject: as-further-mathematics
lang: en
permalink: /alevel/as-further-mathematics/transformations/
toc_headings: "#start, #model, #shear, #demonstration, #invariant-lines, #practice, #retry, #later-review, #next-step, #sources"
study_page: true
reading_layout: true
---

[AS Further Mathematics](/alevel/as-further-mathematics/)

A whole line can stay in place while its points move. First connect a matrix to two basis images; then track points, area and complete lines. You should be able to construct and recognise maps, order combinations and justify every unchanged object.

## Before you start {#start}

You need [matrix multiplication and inverses](/alevel/as-further-mathematics/matrix-algebra/), coordinate lines and sine/cosine in radians. If order is uncertain, apply both actions to one vector. All tasks are **self-written**, without official marks. Attempt each before opening help.

## Read the basis images {#model}

The first column is the image of (1,0), and the second the image of (0,1). Every vector is their linear combination, so these determine every image. A 2×2 matrix fixes the origin and cannot represent a nonzero translation.

$$\begin{pmatrix}a&b\\c&d\end{pmatrix}\begin{pmatrix}x\\y\end{pmatrix}=\begin{pmatrix}ax+by\\cx+dy\end{pmatrix}.$$

A rotation turns both basis vectors through θ anticlockwise. For reflection in a line through the origin at angle φ, first rotate the mirror onto the x-axis, reflect and rotate back:

$$R_\theta=\begin{pmatrix}\cos\theta&-\sin\theta\\\sin\theta&\cos\theta\end{pmatrix}.$$

$$\begin{aligned}S_\phi&=R_\phi\begin{pmatrix}1&0\\0&-1\end{pmatrix}R_{-\phi}\\&=\begin{pmatrix}\cos2\phi&\sin2\phi\\\sin2\phi&-\cos2\phi\end{pmatrix}.\end{aligned}$$

A stretch changes one coordinate; enlargement changes both by the same factor. Read their basis images:

$$\begin{aligned}\text{x-stretch: }&\begin{pmatrix}s&0\\0&1\end{pmatrix},\\\text{y-stretch: }&\begin{pmatrix}1&0\\0&s\end{pmatrix},\\\text{enlargement: }&sI_2.\end{aligned}$$

A usual stretch has positive s. A zero factor collapses a direction; a negative factor also reverses it. Negative enlargement scale reverses each position vector.

## Shear and area {#shear}

$$\begin{aligned}
H_x&=\begin{pmatrix}1&k\\0&1\end{pmatrix},\\
(x,y)&\mapsto(x+ky,y),\\
H_y&=\begin{pmatrix}1&0\\k&1\end{pmatrix},\\
(x,y)&\mapsto(x,y+kx).
\end{aligned}$$

A nonzero x-parallel shear keeps height unchanged, with horizontal displacement proportional to height; exactly the points on the x-axis are fixed. A y-parallel shear exchanges those roles. At k=0 the map is the identity. The diagram shows k=1; the unchanged base and height explain equal areas.

![Unit basis triangle and its image under shear x′=x+y, y′=y, with labelled corresponding vertices and unchanged base; both areas are 1/2.](/alevel/as-further-mathematics/diagrams/shear.svg){: width="560" height="440" }

In general the two image columns span a parallelogram of signed area ad−bc. Thus unsigned area scales by the absolute determinant. A negative determinant reverses orientation, while zero collapses area.

$$\text{area factor}=\lvert\det M\rvert.$$

## Follow the action order {#demonstration}

<section class="worked-example" markdown="1">

### Rotate, then reflect

**Demonstration (self-written):** Apply $R_{\pi/2}$ then reflection in the x-axis.

The successive actions are

$$\mathbf r\mapsto R_{\pi/2}\mathbf r\mapsto S_0(R_{\pi/2}\mathbf r).$$

The first matrix acts closest to the vector, so

$$S_0R_{\pi/2}=\begin{pmatrix}0&-1\\-1&0\end{pmatrix}.$$

Check (1,0): it becomes (0,1), then (0,−1), agreeing with the first column. Reversing the actions gives (0,1) instead. The composite reflects in y=−x, with determinant −1: area stays unchanged and orientation reverses.

</section>

## A line is not one point {#invariant-lines}

A fixed point satisfies Mr=r. An invariant line maps onto itself as a set, even when points move along it. A line of fixed points means every point stays put. Here an affine line simply allows a nonzero intercept; the plane map is still linear.

$$M\mathbf r=\mathbf r.$$

For invertible M, substitute an arbitrary point of a nonvertical line and require its image to satisfy the same equation for every x:

$$\begin{aligned}M&=\begin{pmatrix}a&b\\c&d\end{pmatrix},\\y&=mx+k.\end{aligned}$$

$$\begin{aligned}x'&=(a+bm)x+bk,\\y'&=(c+dm)x+dk,\\mx'+k&=m(a+bm)x+mbk+k.\end{aligned}$$

$$\begin{aligned}c+dm&=m(a+bm),\\(d-mb-1)k&=0.\end{aligned}$$

The first equation gives directions; the second decides intercepts. Invertibility ensures these conditions map onto the full line. Vertical lines are omitted by y=mx+k: for x=h, vary y and require x′=h for every y. This gives

$$b=0,\qquad (a-1)h=0.$$

For singular maps, also check that the line has not collapsed to a point; diag(1,0), for example, collapses every vertical line.

<section class="worked-example" markdown="1">

### Keep the intercept family

**Demonstration (self-written):** For $M=\operatorname{diag}(2,1)$, all horizontal lines $y=k$ and the vertical line $x=0$ are invariant; only the points on $x=0$ are individually fixed.

For completeness, the nonvertical coefficient condition gives m=2m, so m=0. The constant condition allows every k. The vertical condition gives h=0. Finally (2x,y)=(x,y) forces x=0 with y free. The point (1,k) moves to (2,k): the horizontal line survives, but this point moves.

</section>

<section class="lesson-check" markdown="1">

#### Pause 1 {#scaffold}

**Scaffold (self-written):** Identify the transformation represented by H below, state its area factor and find its fixed points.

$$H=\begin{pmatrix}1&0\\2&1\end{pmatrix}.$$

<details markdown="1"><summary>Hint</summary>

Apply the matrix to an arbitrary point; set both components of its displacement to zero.

</details>

<details markdown="1"><summary>Solution and check</summary>

It is a y-parallel shear of factor 2, with area factor 1. Fixed points satisfy $2x=0$, giving all points on $x=0$ and no others.

</details>

</section>

## Work independently {#practice}

<section class="lesson-check" markdown="1">

#### Question 2 {#practice-2}

**Independent task (self-written):** For the matrices below, find every invariant line of M, distinguishing lines of fixed points. Identify S and the image area of a triangle of area 6 under MS, with S applied first.

$$M=\begin{pmatrix}2&1\\0&1\end{pmatrix},\qquad S=\begin{pmatrix}1/2&\sqrt3/2\\\sqrt3/2&-1/2\end{pmatrix}.$$

<details markdown="1"><summary>Hint</summary>

Retain both coefficient conditions and check vertical lines. Compare S with the reflection formula; then use the determinant.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$\begin{aligned}m&=m(2+m),\\m(m+1)&=0,\\-mk&=0.\end{aligned}$$

For m=0 every y=k works. For m=−1 only k=0 works, giving y=−x. Since b=1, no vertical line works. Fixed points satisfy x+y=0, so y=−x is pointwise fixed and the horizontal lines are not.

$$2\phi=\pi/3\Rightarrow\phi=\pi/6.$$

S reflects in $y=x/\sqrt3$; its determinant is −1.

$$\begin{aligned}\lvert\det(MS)\rvert&=\lvert2(-1)\rvert=2,\\A'&=2(6)=12.\end{aligned}$$

The composite reverses orientation. A missing intercept family calls for [the two conditions](#invariant-lines), then [retry 1](#retry-lines).

</details>

</section>

<section class="lesson-check" markdown="1">

#### Question 3 {#practice-3}

**Independent task (self-written):** A map sends $(1,0)^T$ to $(0,2)^T$ and $(0,1)^T$ to $(-1,0)^T$. Construct its matrix T and describe it as a stretch followed by a rotation. E enlarges about the origin with scale factor 3. Find the matrix for E followed by T, and the image area of a triangle of area 5. What happens to the area if $\operatorname{diag}(1,0)$ acts afterwards?

<details markdown="1"><summary>Hint</summary>

Put images in columns and factor out a quarter-turn. Use both coordinate directions when scaling area.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$\begin{aligned}T&=\begin{pmatrix}0&-1\\2&0\end{pmatrix}\\&=R_{\pi/2}\begin{pmatrix}2&0\\0&1\end{pmatrix}.\end{aligned}$$

It is an x-stretch of factor 2 followed by an anticlockwise quarter-turn.

$$TE=3T=\begin{pmatrix}0&-3\\6&0\end{pmatrix}.$$

Determinant 18 gives area 90. The subsequent singular map collapses area to zero. For column errors return to [basis images](#model); for order or area errors attempt [retry 2](#retry-maps).

</details>

</section>

<section class="lesson-check" markdown="1">

#### Question 4 {#practice-4}

**Independent task (self-written):** You are told that F below is a shear. Find its fixed points and all invariant lines. Show that each displacement is parallel to its fixed line and explain why area is unchanged.

$$F=\begin{pmatrix}2&-1\\1&0\end{pmatrix}.$$

<details markdown="1"><summary>Hint</summary>

Find the displacement of (x,y), then use the full line test; the fixed line is not a coordinate axis.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$F\begin{pmatrix}x\\y\end{pmatrix}-\begin{pmatrix}x\\y\end{pmatrix}
=(x-y)\begin{pmatrix}1\\1\end{pmatrix}.$$

The displacement is parallel to y=x and vanishes exactly there.

$$\begin{aligned}1&=m(2-m),\\(m-1)^2&=0,\\(m-1)k&=0.\end{aligned}$$

Every y=x+k is invariant, but only k=0 is pointwise fixed. Since b=−1, none is vertical. Determinant one preserves area and orientation. If you found only the fixed line, revisit [sets and points](#invariant-lines).

</details>

</section>

## Diagnose and retry {#retry}

For a missing family, restore the constant or vertical-line condition. For wrong order, track one vector through both actions. Close the old solution before retrying.

<section class="lesson-check" markdown="1">

#### Retry 1 {#retry-lines}

**Retry (self-written):** Find all invariant lines and fixed points of $\operatorname{diag}(1,3)$.

<details markdown="1"><summary>Hint</summary>

Keep the intercept arbitrary until the constant equation restricts it.

</details>

<details markdown="1"><summary>Solution and check</summary>

All vertical lines $x=h$ and horizontal $y=0$ are invariant. All points on $y=0$ are fixed. The nonvertical equation $3m=m$ forces m=0, then $2k=0$. The vertical test allows every h.

</details>

</section>

<section class="lesson-check" markdown="1">

#### Retry 2 {#retry-maps}

**Retry (self-written):** Construct the matrix for a y-stretch of factor 2 followed by reflection in y=x. Apply it to $(1,2)^T$ and find the image area and orientation of a triangle of area 3.

<details markdown="1"><summary>Hint</summary>

Find each basis image or multiply in action order.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$\begin{aligned}N&=\begin{pmatrix}0&1\\1&0\end{pmatrix}\begin{pmatrix}1&0\\0&2\end{pmatrix}\\&=\begin{pmatrix}0&2\\1&0\end{pmatrix}.\end{aligned}$$

The vector maps to (4,1). Determinant −2 gives area 6 and reversed orientation. Check in two stages: (1,2) becomes (1,4), then (4,1).

</details>

</section>

## Review after linearisation {#later-review}

<section class="lesson-check" markdown="1">

#### Review 1 {#review-1}

**Later review (self-written):** A map sends $(x,y)$ to $(x+2y,y)$. Find its matrix, every invariant line and its fixed points. Reflection in the y-axis then follows. Find the composite matrix, area factor and image of $(1,1)^T$. Find a matrix that restores every original point.

<details markdown="1"><summary>Hint</summary>

Use coordinates for unchanged objects and action order for composition.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$H=\begin{pmatrix}1&2\\0&1\end{pmatrix}.$$

The invariant lines are all y=k, and fixed points are exactly y=0. The coefficient equation $m=m(1+2m)$ gives m=0, with k arbitrary. Since b=2, no vertical line works.

$$\begin{aligned}J&=\begin{pmatrix}-1&-2\\0&1\end{pmatrix},\\J^{-1}&=J.\end{aligned}$$

The area factor is one, orientation reverses, and (1,1) maps to (−3,1). Applying J again restores it; $J^2=I_2$ verifies this for every point. An incomplete line list calls for [the general test](#invariant-lines).

</details>

</section>

## Where to go next {#next-step}

Continue to [linearisation](/alevel/as-further-mathematics/linearisation/) when you can distinguish the three unchanged objects and justify your maps. Complete [the matrix review](/alevel/as-further-mathematics/matrix-algebra/#later-review) now; return to this page’s review after the next lesson.

## Sources and scope {#sources}

Scope follows 9665 v5.2. The paired questions and mark schemes below informed the required evidence; these exercises do not reproduce their questions or award official marks.

<details markdown="1"><summary>Official references</summary>

- [OxfordAQA 9665 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf), FPP1.1.
- FM02 June 2024 Q2, Q5; QP pp.4–5,10–11, MS pp.5,10–11. [FM02 June 2024 QP](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-question-paper.pdf) · [Final MS](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-mark-scheme.pdf).

</details>

[Previous](/alevel/as-further-mathematics/matrix-algebra/) · [Course route](/alevel/as-further-mathematics/#learning-route) · [Next](/alevel/as-further-mathematics/linearisation/)

{% include exam_topic_practice.html %}
