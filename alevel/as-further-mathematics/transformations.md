---
title: "Transformations and affine invariant lines"
layout: subjects
mathjax: true
grade: as
subject: as-further-mathematics
lang: en
permalink: /alevel/as-further-mathematics/transformations/
toc_headings: h2, h3
study_page: true
---

[AS Further Mathematics](/alevel/as-further-mathematics/) · B2 · FPP1.1

All demonstrations, scaffolded attempts, independent tasks and retries here are **self-written**, with no official marks. Write your method and reasons before opening hints and solutions separately.

## Which objects remain unchanged? {#model}

**Start:** apply a matrix to $(1,0)^T,(0,1)^T$. **Goal:** construct plane transformations, order compositions and distinguish fixed points from invariant lines. You need matrix products, coordinate lines and trigonometry. A 2×2 matrix fixes the origin; it cannot represent a nonzero translation of the plane. Its columns are the images of the basis vectors.

$$R_\theta=\begin{pmatrix}\cos\theta&-\sin\theta\\\sin\theta&\cos\theta\end{pmatrix},\quad
S_\phi=\begin{pmatrix}\cos2\phi&\sin2\phi\\\sin2\phi&-\cos2\phi\end{pmatrix}.$$

R rotates anticlockwise by θ; S reflects in the line making angle φ with the positive x-axis. This reflection formula follows by rotating the mirror to the x-axis, reflecting, then rotating back.

$$\text{x-stretch: }\begin{pmatrix}s&0\\0&1\end{pmatrix};\quad
\text{y-stretch: }\begin{pmatrix}1&0\\0&s\end{pmatrix};\quad
\text{enlargement: }sI_2;\quad
H=\begin{pmatrix}1&k\\0&1\end{pmatrix}.$$

H is a shear parallel to x: $(x,y)\mapsto(x+ky,y)$. Interchanging off-diagonal roles gives a shear parallel to y. A question may identify a less familiar fixed-line shear for you. Area scale is $\lvert\det M\rvert$; a negative determinant reverses orientation; a zero determinant collapses area.

![Unit basis triangle and its image under shear x′=x+y, y′=y, with labelled corresponding vertices and unchanged base; both areas are 1/2.](/alevel/as-further-mathematics/diagrams/shear.svg)

## Demonstration: order and affine lines {#demonstration}

Apply $R_{\pi/2}$ then reflection in the x-axis: the combined matrix is $S_0R_{\pi/2}$, because the first operation acts closest to the vector.

$$S_0R_{\pi/2}=\begin{pmatrix}0&-1\\-1&0\end{pmatrix}.$$

Fixed points satisfy $M\mathbf r=\mathbf r$. An invariant line is mapped onto itself as a set; its individual points may move. For an invertible $M=\begin{pmatrix}a&b\\c&d\end{pmatrix}$ and $y=mx+k$, substitute $(x,mx+k)$ and compare both coefficients in $y'=mx'+k$:

$$c+dm=m(a+bm),\qquad (d-mb-1)k=0.$$

Check vertical lines separately; for $x=h$ one needs $b=0$ and $(a-1)h=0$. Invertibility ensures the image is the whole line. For a singular matrix also check that the image has not collapsed to one point.

**Demonstration (self-written):** For $M=\operatorname{diag}(2,1)$, all horizontal lines $y=k$ and the vertical line $x=0$ are invariant; only the points on $x=0$ are individually fixed.

The nonzero intercept family is essential: looking only at $y=mx$ misses infinitely many lines.

## Scaffold and independent choice {#practice}

**Scaffold (self-written):** Identify $\begin{pmatrix}1&0\\2&1\end{pmatrix}$, state its area factor and find its fixed points.

<details markdown="1"><summary>Scaffold check</summary>

A y-parallel shear of factor 2; area factor 1; $2x=0$ gives every point on $x=0$ fixed.

</details>

**Independent task (self-written):** Find every invariant line of $M=\begin{pmatrix}2&1\\0&1\end{pmatrix}$, distinguishing lines of fixed points. Identify $S=\begin{pmatrix}1/2&\sqrt3/2\\\sqrt3/2&-1/2\end{pmatrix}$ and the image area of a triangle of area 6 under MS, with S applied first.

<details markdown="1"><summary>Hint</summary>

Use $y=mx+k$ and retain its constant equation; test vertical lines. For S compare its basis images with the reflection formula, then use the determinant of the product.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$m=m(2+m)\Rightarrow m(m+1)=0;\qquad -mk=0.$$

For $m=0$ every $y=k$ works; for $m=-1$ only $k=0$ works, giving $y=-x$. No vertical line works because b is 1. Fixed points satisfy $x+y=0$, so $y=-x$ is pointwise fixed while the horizontal lines are not.

$$2\phi=\pi/3\Rightarrow\phi=\pi/6;\qquad \lvert\det(MS)\rvert=\lvert2(-1)\rvert=2\Rightarrow A'=12.$$

S reflects in $y=x/\sqrt3$; the combined map reverses orientation.

</details>

## Diagnose and retry {#retry}

Missing the intercept condition confuses invariant directions with complete lines. To distinguish a fixed point, test one non-origin point on a proposed line.

**Retry (self-written):** Find all invariant lines and fixed points of $\operatorname{diag}(1,3)$.

<details markdown="1"><summary>Retry check</summary>

All vertical lines $x=h$ and the horizontal $y=0$ are invariant; all points on $y=0$ are fixed.

</details>

## Sources and scope {#sources}

Scope follows 9665 v5.2. The paired questions and mark schemes below informed the required evidence; these exercises do not reproduce their questions or award official marks.

- [OxfordAQA 9665 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf), FPP1.1.
- FM02 June 2024 Q2, Q5; QP pp.4–5,10–11, MS pp.5,10–11. [FM02 June 2024 QP](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-question-paper.pdf) · [Final MS](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-mark-scheme.pdf).

[Previous](/alevel/as-further-mathematics/matrix-algebra/) · [Course route](/alevel/as-further-mathematics/#learning-route) · [Next](/alevel/as-further-mathematics/linearisation/)
