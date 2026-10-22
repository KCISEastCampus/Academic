---
title: "Conics, loci and tangencies"
layout: subjects
mathjax: true
grade: as
subject: as-further-mathematics
lang: en
permalink: /alevel/as-further-mathematics/conics-and-loci/
toc_headings: h2, h3
study_page: true
---

[AS Further Mathematics](/alevel/as-further-mathematics/) · A2 · FP1.1 FP1.2

All demonstrations, scaffolded attempts, independent tasks and retries here are **self-written**, with no official marks. Write your method and reasons before opening hints and solutions separately.

## Why do repeated roots mean tangency? {#model}

**Start:** write the distance from $(x,y)$ to $(0,2)$ and to $y=-2$. **Goal:** build loci from distances, sketch four conics and connect intersections to quadratic roots. You need distance formula, completing the square and discriminants. Squaring two nonnegative distances is reversible.

$$\sqrt{x^2+(y-2)^2}=\lvert y+2\rvert\iff x^2=8y.$$

A locus is the full set of points satisfying its condition, not just a few points on a sketch. For a vertical line $x=a$ use $\lvert x-a\rvert$; for a horizontal line $y=b$ use $\lvert y-b\rvert$.

With $a,b,c>0$, use these standard forms. Their equations determine axes, vertices and asymptotes; focus formula lists are not a substitute for sketches.

$$y^2=4ax;\qquad \frac{x^2}{a^2}+\frac{y^2}{b^2}=1;\qquad
\frac{x^2}{a^2}-\frac{y^2}{b^2}=1;\qquad xy=c^2.$$

The parabola opens right with vertex at the origin. The ellipse meets the axes at $(\pm a,0),(0,\pm b)$. The hyperbola meets $(\pm a,0)$ and approaches $y=\pm(b/a)x$. The rectangular hyperbola has branches in quadrants I/III and the axes as asymptotes.

![Four labelled conic sketches: y²=4x, x²/9+y²/4=1, x²/4−y²=1 with asymptotes, and xy=1 with axis asymptotes.](/alevel/as-further-mathematics/diagrams/conics.svg)

## Demonstration: equation, transformation, tangent {#demonstration}

For a translation $(h,k)$ substitute $x-h,y-k$ into the original equation. A stretch parallel to x with factor $s>0$ substitutes $x/s$; reflection in $y=x$ interchanges x and y. Applied **separately** to $y^2=4x$:

$$\text{translate }(2,-1):\ (y+1)^2=4(x-2);\quad
\text{x-stretch }2:\ y^2=2x;\quad \text{reflect}:\ x^2=4y.$$

To find tangents from $(-1,0)$, every nonvertical candidate is $y=m(x+1)$. Substitute into $y^2=4x$.

$$m^2x^2+(2m^2-4)x+m^2=0;\qquad D=16(1-m^2).$$

A repeated intersection requires $D=0$, so $m=\pm1$. Tangents are $y=\pm(x+1)$, touching $(1,\pm2)$. The degree-reducing case $m=0$ gives the axis, which crosses the parabola at its vertex and is not tangent. The vertical line through the external point is $x=-1$ and has no intersection. For $m\ne0$, $D>0,=0,<0$ mean two, one repeated, no real intersections respectively.

![Parabola tangents from (−1,0) touch (1,±2); a separate panel shows translation by (2,−1), with original and image vertices labelled.](/alevel/as-further-mathematics/diagrams/conic-tangents.svg)

## Scaffold and independent choice {#practice}

**Scaffold (self-written):** Translate $xy=1$ by $(3,-2)$. Name its asymptotes before expanding.

<details markdown="1"><summary>Scaffold check</summary>

$$(x-3)(y+2)=1;\qquad x=3,\quad y=-2.$$

</details>

**Independent task (self-written):** Find the locus equidistant from $(2,0)$ and $x=-2$. Reflect it in $y=x$. Find all lines through $(-4,0)$ tangent to the original locus. Explain why your list is complete.

<details markdown="1"><summary>Hint</summary>

Write distances before squaring. Use a general line through the point, then check repeated roots, the zero-gradient case and the vertical line separately.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$\sqrt{(x-2)^2+y^2}=\lvert x+2\rvert\iff y^2=8x;\qquad \text{reflection}:\ x^2=8y.$$

$$y=m(x+4)\Rightarrow m^2x^2+(8m^2-8)x+16m^2=0,\quad D=64(1-2m^2).$$

$$m=\pm\frac1{\sqrt2},\qquad y=\pm\frac{x+4}{\sqrt2};\qquad \text{contact }(4,\pm4\sqrt2).$$

For $m=0$ the line crosses at the vertex; $x=-4$ cannot meet a curve with $x\ge0$. Thus no missing vertical or reduced-degree tangent remains.

</details>

## Diagnose and retry {#retry}

A reversed translation sign moves the vertex incorrectly; substitute the proposed vertex. A single algebraic root caused by degree reduction is not automatically tangency.

**Retry (self-written):** Find intersections of $y=x$ with $x^2/9+y^2/4=1$, then reflect $x^2/4-y^2=1$ in $y=x$.

<details markdown="1"><summary>Retry check</summary>

$$(x,y)=\left(\frac6{\sqrt{13}},\frac6{\sqrt{13}}\right),\left(-\frac6{\sqrt{13}},-\frac6{\sqrt{13}}\right);\qquad \frac{y^2}{4}-x^2=1.$$

</details>

## Sources and scope {#sources}

Scope follows 9665 v5.2. The paired questions and mark schemes below informed the required evidence; these exercises do not reproduce their questions or award official marks.

FM01 specimen identity: the QP body says **Specimen 2018 Morning**; its filename contains 2019/v3 and footer versions vary. The officially paired MS is a specimen with copyright 2017, not a live-exam Final MS.

- [OxfordAQA 9665 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf), FP1.1 FP1.2.
- FM01 specimen Q10; QP pp.14–15, MS p.10. [FM01 specimen QP](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9665-FM01-international-as-further-mathematics-specimen-paper-2019-v3-1.pdf) · [Specimen MS](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9665-FM01-international-as-further-mathematics-mark-scheme-2017-v2-1.pdf).

[Previous](/alevel/as-further-mathematics/rational-functions/) · [Course route](/alevel/as-further-mathematics/#learning-route) · [Next](/alevel/as-further-mathematics/trigonometric-solutions/)
