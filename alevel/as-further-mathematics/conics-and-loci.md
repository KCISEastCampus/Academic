---
title: "Conics, loci and tangencies"
layout: subjects
mathjax: true
grade: as
subject: as-further-mathematics
lang: en
permalink: /alevel/as-further-mathematics/conics-and-loci/
toc_headings: "#start, #model, #transformations, #loci, #demonstration, #practice, #retry, #later-review, #next-step, #sources"
study_page: true
reading_layout: true
---

[AS Further Mathematics](/alevel/as-further-mathematics/)

How do an equation, a distance condition and a sketch describe the same set of points? Build the four shapes, transform coordinates, then use intersections to decide tangency. The [independent questions](#practice) ask you to connect these representations.

## Before you start {#start}

You need Pythagoras, completing the square and quadratic discriminants. Revisit [rational-function input equations](/alevel/as-further-mathematics/rational-functions/#range) if you confuse a quadratic with a reduced equation. Your final work should justify four sketches, single transformations, simple distance loci and complete intersection arguments.

<section class="lesson-check" markdown="1">

### Entry check {#entry}

**Entry check (self-written):** Write the distance from $(x,y)$ to $(0,2)$ and to $y=-2$. State what a zero discriminant means for a genuine quadratic.

<details markdown="1"><summary>Hint</summary>

A distance to a horizontal line measures vertical separation.

</details>

<details markdown="1"><summary>Solution and check</summary>

The distances are $\sqrt{x^2+(y-2)^2}$ and $\lvert y+2\rvert$. A zero discriminant means one repeated real root, provided the quadratic coefficient is nonzero. If either condition was missed, draw the perpendicular distance and write the quadratic coefficient explicitly.

</details>

</section>

## Read the four equations as shapes {#model}

For $a,b,c>0$, the standard forms are

$$\begin{aligned}
&y^2=4ax,\\
&\frac{x^2}{a^2}+\frac{y^2}{b^2}=1,\\
&\frac{x^2}{a^2}-\frac{y^2}{b^2}=1,\\
&xy=c^2.
\end{aligned}$$

The parabola has vertex $(0,0)$ and opens right because $x\ge0$; opposite signs of $y$ give its two symmetric halves. The ellipse has intercepts $(\pm a,0),(0,\pm b)$, is bounded in both coordinates and is symmetric in both axes. Equal denominators give a circle as a special ellipse.

The ordinary hyperbola has vertices $(\pm a,0)$ and no vertical-axis intersection. Dividing by $x^2$ for large magnitude shows its asymptote slopes tend to $\pm b/a$, giving $y=\pm(b/a)x$. Its two branches open horizontally. For $xy=c^2$, rewrite $y=c^2/x$: there are no axis intersections, the axes are asymptotes, and the branches lie in quadrants I and III.

![Four labelled conic sketches: y²=4x, x²/9+y²/4=1, x²/4−y²=1 with asymptotes, and xy=1 with axis asymptotes.](/alevel/as-further-mathematics/diagrams/conics.svg){: width="560" height="1270" }

Use the diagram to connect each intercept and asymptote to its own equation. A sketch needs labelled axes and these defining features, not many plotted points. Focus formula lists are not needed to replace these arguments.

## Transform points, then reverse the map {#transformations}

Let the original equation be $F(u,v)=0$, and the image point be $(x,y)$. To write the image equation, express the old coordinates in terms of the new. For a single translation $(h,k)$, $u=x-h,v=y-k$. For an x-stretch of factor $s>0$, $u=x/s,v=y$. For a y-stretch of factor $t>0$, $u=x,v=y/t$. Reflection in $y=x$ uses $u=y,v=x$. These rules apply to all four conics.

<section class="worked-example" markdown="1">

### Check coordinates, not memorised signs

**Demonstration (self-written):** Apply each transformation separately to $y^2=4x$: translate by $(2,-1)$, stretch parallel to x by factor 2, stretch parallel to y by factor 2, and reflect in $y=x$.

$$\begin{aligned}
&\text{translation:}\\
&(y+1)^2=4(x-2),\\
&\text{x-stretch:}\quad y^2=2x,\\
&\text{y-stretch:}\quad y^2=16x,\\
&\text{reflection:}\quad x^2=4y.
\end{aligned}$$

The old point $(1,2)$ maps to $(3,1),(2,2),(1,4),(2,1)$ respectively. Each satisfies its image equation. The translation moves the vertex to $(2,-1)$; the stretches keep the vertex fixed but widen or narrow the parabola. These are separate images, not successive operations.

</section>

Transform asymptotes with the same point map. A translation moves the centre and its asymptotes together; an axis stretch changes their slopes. Swapping coordinates also swaps horizontal and vertical roles.

<section class="lesson-check" markdown="1">

### Complete one transformation {#scaffold}

**Scaffold (self-written):** Translate $xy=1$ by $(3,-2)$. Name its asymptotes before expanding.

<details markdown="1"><summary>Hint</summary>

Reverse the point translation before substituting.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$\begin{aligned}
&(x-3)(y+2)=1,\\
&x=3,\\
&y=-2.
\end{aligned}$$

The point $(1,1)$ maps to $(4,-1)$, which checks the equation. The centre is $(3,-2)$.

</details>

</section>

## Build a locus from distances {#loci}

A locus is the full set of points satisfying a condition. Distance to $x=a$ is $\lvert x-a\rvert$; distance to $y=b$ is $\lvert y-b\rvert$. Equating two nonnegative distances and then squaring is reversible, so the resulting equation describes every required point and introduces none.

<section class="worked-example" markdown="1">

### A horizontal directrix

**Demonstration (self-written):** Find the locus equidistant from $(0,2)$ and $y=-2$.

$$\begin{aligned}
&\sqrt{x^2+(y-2)^2}\\
&=\lvert y+2\rvert\\
&x^2+(y-2)^2\\
&=(y+2)^2\\
&\iff x^2=8y.
\end{aligned}$$

The vertex is halfway between the point and line, at $(0,0)$. The equation forces $y\ge0$ and opens towards the point. Reversing the algebra and taking nonnegative square roots restores the distance equality. A vertical directrix is handled by swapping which coordinate measures perpendicular separation.

</section>

## Intersections and repeated roots {#demonstration}

Substitute a line into a conic to get an input equation. If it is genuinely quadratic, two distinct real roots mean two intersections, no real roots mean none, and a repeated root means tangency for these nondegenerate conics. A reduced linear equation with one root is not automatically tangency; lines parallel to a hyperbola asymptote can do that. Check vertical lines separately when using a slope parameter.

<section class="worked-example" markdown="1">

### All tangents from a fixed point

**Demonstration (self-written):** Find all tangents from $(-1,0)$ to $y^2=4x$.

Every nonvertical candidate is $y=m(x+1)$. Substitute and collect powers of the input:

$$\begin{aligned}
&m^2(x+1)^2=4x,\\
&m^2x^2+(2m^2-4)x+m^2=0.\\
&m\ne0:\quad D=(2m^2-4)^2-4m^4\\
&=16(1-m^2).
\end{aligned}$$

Require $D=0$, so $m=\pm1$. Substitution gives $(x-1)^2=0$ and contact points $(1,\pm2)$, hence tangents $y=\pm(x+1)$. For $m=0$, the equation reduces to $x=0$: the horizontal axis crosses at the vertex and is not tangent. The omitted vertical line through the external point is $x=-1$, with no real intersection because the curve needs $x\ge0$. Thus the two listed lines are complete.

![Parabola tangents from (−1,0) touch (1,±2); a separate panel shows translation by (2,−1), with original and image vertices labelled.](/alevel/as-further-mathematics/diagrams/conic-tangents.svg){: width="560" height="850" }

</section>

## Work independently {#practice}

Keep the demonstrations closed. Label your sketches and explain why your equations describe all, rather than just some, required points.

<section class="lesson-check" markdown="1">

### Question 1 {#practice-1}

**Independent task (self-written):** Find the locus equidistant from $(2,0)$ and $x=-2$. Reflect it in $y=x$. Find all lines through $(-4,0)$ tangent to the original locus. Explain why your list is complete.

<details markdown="1"><summary>Hint</summary>

Write distances before squaring; check nonvertical, reduced and vertical cases.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$\begin{aligned}
&\sqrt{(x-2)^2+y^2}\\
&=\lvert x+2\rvert\\
&\iff y^2=8x,\\
&\text{reflection:}\quad x^2=8y.\\
&y=m(x+4),\\
&m^2x^2+(8m^2-8)x\\
&\quad+16m^2=0,\\
&D=64(1-2m^2),\\
&m=\pm\frac1{\sqrt2},\\
&y=\pm\frac{x+4}{\sqrt2}.
\end{aligned}$$

Contact points are $(4,\pm4\sqrt2)$. For $m=0$ the line crosses the vertex; $x=-4$ cannot meet a curve with $x\ge0$. Nonnegative distances make the locus equivalence reversible. If you missed a line type return to [the full tangent argument](#demonstration), then [retry 4](#retry-4).

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 2 {#practice-2}

**Independent task (self-written):** Sketch $y^2=12x$, $x^2/16+y^2/9=1$, $x^2/9-y^2/4=1$ and $xy=4$. Label intercepts and asymptotes where present. Separately translate the parabola by $(-1,2)$, stretch the ellipse parallel to x by factor 2, stretch the ordinary hyperbola parallel to y by factor 2, and reflect the rectangular hyperbola in $y=x$. Give each image equation and use a corresponding point to check it.

<details markdown="1"><summary>Hint</summary>

Write old coordinates in terms of new ones; each transformation acts on its own original curve.

</details>

<details markdown="1"><summary>Solution and check</summary>

Original features: parabola vertex $(0,0)$ opening right; ellipse intercepts $(\pm4,0),(0,\pm3)$; hyperbola vertices $(\pm3,0)$, asymptotes $y=\pm2x/3$; rectangular hyperbola has no axis intersections and asymptotes $x=0,y=0$.

$$\begin{aligned}
&\text{parabola image:}\\
&(y-2)^2=12(x+1),\\
&\text{ellipse image:}\\
&\frac{x^2}{64}+\frac{y^2}{9}=1,\\
&\text{hyperbola image:}\\
&\frac{x^2}{9}-\frac{y^2}{16}=1,\\
&\text{rectangular image:}\\
&xy=4.
\end{aligned}$$

Check points: $(3,6)\mapsto(2,8)$, $(4,0)\mapsto(8,0)$, $(3\sqrt2,2)\mapsto(3\sqrt2,4)$, $(1,4)\mapsto(4,1)$. The ordinary image asymptotes are $y=\pm4x/3$. If the stretch multiplier is inverted, revisit [the reverse coordinate map](#transformations), then retry 2.

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 3 {#practice-3}

**Independent task (self-written):** Find the intersections of $y=x$ with $x^2/4-y^2=1$, and of $y=x+1$ with $xy=1$. Interpret the number of real roots in each case.

<details markdown="1"><summary>Hint</summary>

Substitute the line first; do not infer intersections just from branch positions.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$\begin{aligned}
&x^2/4-x^2=1,\\
&x(x+1)=1,\\
&x=\frac{-1\pm\sqrt5}{2},\\
&y=\frac{1\pm\sqrt5}{2}.
\end{aligned}$$

The first gives none because its left side is nonpositive. The second quadratic has discriminant 5, giving two distinct points with matching signs in the displayed coordinates. Substitution checks both products equal 1.

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 4 {#practice-4}

**Independent task (self-written):** Find the full locus equidistant from $(1,3)$ and $y=-1$. Sketch it and show why squaring has not introduced extra points.

<details markdown="1"><summary>Hint</summary>

Use perpendicular separation from the horizontal line.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$\begin{aligned}
&\sqrt{(x-1)^2+(y-3)^2}\\
&=\lvert y+1\rvert\\
&\iff(x-1)^2=8(y-1).
\end{aligned}$$

Vertex $(1,1)$, opening upwards, with $y\ge1$. Both distances are nonnegative, so reversing the squared equation recovers the original equality for every point. If you used horizontal separation, return to [distances](#loci), then retry 3.

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 5 {#practice-5}

**Independent task (self-written):** Find the locus equidistant from $(-1,2)$ and $(5,2)$. Decide whether $(2,-10)$ belongs to it.

<details markdown="1"><summary>Hint</summary>

Write both point distances or find the perpendicular bisector.

</details>

<details markdown="1"><summary>Solution and check</summary>

Equate the squared nonnegative distances:

$$\begin{aligned}&(x+1)^2+(y-2)^2\\&=(x-5)^2+(y-2)^2.\end{aligned}$$

Simplifying gives $12x=24$, hence the full line $x=2$. The point $(2,-10)$ belongs; each distance is $\sqrt{153}$. There is no restriction on the vertical coordinate.

</details>

</section>

## Diagnose and retry {#retry}

For lost intersections revisit [root geometry](#demonstration), then retry 1. For a mistaken tangent or an omitted line type revisit [the full tangent argument](#demonstration), then retry 4. For a reversed translation or stretch revisit [coordinates](#transformations), then retry 2. For the wrong distance direction or an unjustified squaring step revisit [loci](#loci), then retry 3.

<section class="lesson-check" markdown="1">

### Retry 1 {#retry-1}

**Retry (self-written):** Find intersections of $y=x$ with $x^2/9+y^2/4=1$, then reflect $x^2/4-y^2=1$ in $y=x$.

<details markdown="1"><summary>Hint</summary>

Substitute before solving; exchange coordinates for the separate reflection.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$\begin{aligned}
&(x,y)=\left(\frac6{\sqrt{13}},\frac6{\sqrt{13}}\right)\\
&\text{or }\left(-\frac6{\sqrt{13}},-\frac6{\sqrt{13}}\right),\\
&\text{reflection:}\quad\frac{y^2}{4}-x^2=1.
\end{aligned}$$

There are two distinct intersections, not a tangent.

</details>

</section>

<section class="lesson-check" markdown="1">

### Retry 2 {#retry-2}

**Retry (self-written):** Apply these transformations separately to $xy=2$: translate by $(-2,1)$, stretch parallel to x by factor 3, and stretch parallel to y by factor 4. Give equations and asymptotes.

<details markdown="1"><summary>Hint</summary>

Check an original point in each image.

</details>

<details markdown="1"><summary>Solution and check</summary>

The equations are $(x+2)(y-1)=2$, $xy=6$, $xy=8$. The translated asymptotes are $x=-2,y=1$; both stretches keep the axes as asymptotes. The original point $(1,2)$ maps respectively to $(-1,3),(3,2),(1,8)$.

</details>

</section>

<section class="lesson-check" markdown="1">

### Retry 3 {#retry-3}

**Retry (self-written):** Find the locus equidistant from $(3,-1)$ and $x=-1$. Also find the locus equidistant from $(0,0)$ and $(0,4)$. Justify both as full sets.

<details markdown="1"><summary>Hint</summary>

Use nonnegative distances; distinguish a line directrix from two fixed points.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$\begin{aligned}
&(y+1)^2=8(x-1);\\
&y=2.
\end{aligned}$$

For the first locus, equate the squared distances:

$$\begin{aligned}&(x-3)^2+(y+1)^2\\&=(x+1)^2.\end{aligned}$$

For the second locus, use the two point distances:

$$\begin{aligned}&x^2+y^2\\&=x^2+(y-4)^2.\end{aligned}$$

Reversible squaring gives the full sets.

</details>

</section>

<section class="lesson-check" markdown="1">

### Retry 4 {#retry-4}

**Retry (self-written):** Find all tangents from $(0,2)$ to $y^2=4x$. Justify that every possible line type has been considered, including any case where substitution loses degree.

<details markdown="1"><summary>Hint</summary>

Separate the vertical line before introducing a slope. Do not apply the quadratic discriminant when its leading coefficient is zero.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$\begin{aligned}
&y=mx+2,\\
&m^2x^2+(4m-4)x+4=0.\\
&m\ne0:\\
&D=(4m-4)^2-16m^2\\
&=16(1-2m),\\
&D=0\iff m=1/2,\\
&(x,y)=(4,4).
\end{aligned}$$

The nonvertical tangent is $y=x/2+2$, touching at $(4,4)$. At $m=0$ the equation reduces to $-4x+4=0$, giving $(1,2)$ on the horizontal line; this is not tangency, since inputs on either side of 2 in the curve parameter $y$ give points on opposite sides of that line. The omitted vertical line through $(0,2)$ is $x=0$. Substituting into the original curve gives $y^2=0$, a repeated root: it is the vertex tangent, touching at $(0,0)$. Thus there are exactly two tangents, one vertical. A rule that discards all vertical candidates would miss a real answer.

</details>

</section>

## Return after the next lesson {#later-review}

<section class="lesson-check" markdown="1">

### Mixed review {#review}

**Later review (self-written):** For $x^2/9-y^2/4=1$, find every intersection with $y=2x/3+1$ and decide whether this line is tangent. Separately reflect the hyperbola in $y=x$ and give its asymptotes. Finally find the locus equidistant from $(1,-2)$ and $y=2$.

<details markdown="1"><summary>Hint</summary>

Check whether substitution remains quadratic; one intersection alone is not enough.

</details>

<details markdown="1"><summary>Solution and check</summary>

Substitution gives $-x/3-1/4=1$, so the single intersection is $(-15/4,-3/2)$. It is not tangent: the line is parallel to asymptote $y=2x/3$ and the intersection equation is linear, not a repeated quadratic root. Along the line, the conic expression minus 1 is $-x/3-5/4$, which changes sign at the intersection: the line crosses the curve there. The reflected equation is $y^2/9-x^2/4=1$ with asymptotes $y=\pm3x/2$. The locus is $(x-1)^2=-8y$, vertex $(1,0)$, opening down. Revisit [root geometry](#demonstration) or [distance direction](#loci) for the corresponding error.

</details>

</section>

## Where to go next {#next-step}

After an unaided matching retry, continue to [complete trigonometric solutions](/alevel/as-further-mathematics/trigonometric-solutions/). Complete the previous page's [mixed review](/alevel/as-further-mathematics/rational-functions/#later-review) now, and return here after the next lesson.

## Sources and scope {#sources}

All demonstrations and exercises here are **self-written**, without official marks. FP1.1/FP1.2 cover the four conics, single transformations, intersections and simple distance loci. General rotations and a full focus/eccentricity theory are not assumed.

<details markdown="1"><summary>Official references and specimen identity</summary>

Scope follows 9665 v5.2. The paired questions and mark schemes below informed the required evidence; these exercises do not reproduce their questions or award official marks.

FM01 specimen identity: the QP body says **Specimen 2018 Morning**; its filename contains 2019/v3 and footer versions vary. The officially paired MS is a specimen with copyright 2017, not a live-exam Final MS.

- [OxfordAQA 9665 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf), FP1.1 FP1.2.
- FM01 specimen Q10; QP pp.14–15, MS p.10. [FM01 specimen QP](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9665-FM01-international-as-further-mathematics-specimen-paper-2019-v3-1.pdf) · [Specimen MS](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9665-FM01-international-as-further-mathematics-mark-scheme-2017-v2-1.pdf).

</details>

[Previous](/alevel/as-further-mathematics/rational-functions/) · [Course route](/alevel/as-further-mathematics/#learning-route) · [Next](/alevel/as-further-mathematics/trigonometric-solutions/)
