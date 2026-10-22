---
title: Vector Products and Coplanarity
layout: subjects
mathjax: true
grade: a2
subject: a2-further-mathematics
permalink: /alevel/a2-further-mathematics/vector-products-and-coplanarity/
toc_headings: h2, h3, h4
study_page: true
---

[Further Pure Mathematics](/alevel/a2-further-mathematics/) · FP2.12 Vectors and three-dimensional coordinate geometry

How can a perpendicular direction measure area, volume and whether points share a plane? This lesson connects the **vector product** (cross product) to the **scalar triple product**. The [next lesson](/alevel/a2-further-mathematics/lines-and-planes/) uses these ideas to describe lines and planes.

- **Learning:** start with [the cross product](#cross-product), then connect [area](#area) and [volume](#triple-product).
- **Homework help:** compare [coplanar and parallel conditions](#example-coplanar-or-parallel) and [a volume with a parameter](#example-volume).
- **Revision:** close the solutions in [independent practice](#practice); use the [quick reference](#quick-reference) after attempting it.

**Goals:** calculate a cross product and check its direction; obtain triangle and parallelogram areas; calculate a scalar triple product; test coplanarity of vectors or four points; retain every parameter value allowed by a volume condition.

**Before you start:** revise components, magnitudes, displacement vectors and the scalar product in [MA03 Vectors](/alevel/a2-mathematics/vectors/). You need a right-handed orthonormal coordinate system. All coordinates below are mathematical examples, not measured data.

Labels **Original diagnostic**, **Original example** and **Original task** identify author-written material. Official questions and adaptations have separate source labels.

## Prerequisite Check {#prerequisite-check}

> **Original diagnostic.** Points $A=(1,0,1)$ and $B=(2,2,1)$ are given. Find $\overrightarrow{AB}$ and decide whether it is perpendicular to $\mathbf v=(2,-1,3)$.

<details markdown="1">
<summary>Check</summary>

Subtract the starting position from the ending position:

$$\overrightarrow{AB}=(2,2,1)-(1,0,1)=(1,2,0),\qquad (1,2,0)\cdot(2,-1,3)=0.$$

Both vectors are nonzero, so the zero scalar product proves perpendicularity. A position vector locates a point relative to the origin; an edge vector joins two vertices. They are not interchangeable.

</details>

## The Cross Product {#cross-product}

For two nonzero, nonparallel vectors, $\mathbf a\times\mathbf b$ is perpendicular to both. If their angle is $\theta$, its magnitude is

$$\boxed{\lVert\mathbf a\times\mathbf b\rVert=\lVert\mathbf a\rVert\lVert\mathbf b\rVert\sin\theta},\qquad 0\leq\theta\leq\pi.$$

Its direction follows the **right-hand rule**: curl the fingers of your right hand from the first vector towards the second through the smaller angle; the thumb gives the cross-product direction. Parallel vectors, or a zero input vector, give the zero vector, which has no direction.

The basis directions satisfy

$$\mathbf i\times\mathbf j=\mathbf k,\qquad \mathbf j\times\mathbf k=\mathbf i,\qquad \mathbf k\times\mathbf i=\mathbf j.$$

Reversing either pair changes the sign. Expanding by distributivity gives the component rule:

$$\boxed{(a_1,a_2,a_3)\times(b_1,b_2,b_3)
=(a_2b_3-a_3b_2,\ a_3b_1-a_1b_3,\ a_1b_2-a_2b_1).}$$

The determinant mnemonic encodes the same rule; notice the minus sign in the middle expansion:

$$\mathbf a\times\mathbf b=
\begin{vmatrix}\mathbf i&\mathbf j&\mathbf k\\a_1&a_2&a_3\\b_1&b_2&b_3\end{vmatrix}
=(a_2b_3-a_3b_2)\mathbf i-(a_1b_3-a_3b_1)\mathbf j+(a_1b_2-a_2b_1)\mathbf k.$$

### Properties and checks {#properties}

For real scalars $s,t$:

$$\begin{aligned}
\mathbf b\times\mathbf a&=-\mathbf a\times\mathbf b,\\
\mathbf a\times(\mathbf b+\mathbf c)&=\mathbf a\times\mathbf b+\mathbf a\times\mathbf c,\\
(s\mathbf a)\times(t\mathbf b)&=st(\mathbf a\times\mathbf b),\\
\mathbf a\times\mathbf a&=\mathbf0.
\end{aligned}$$

The cross product is a **vector**; the scalar product is a **scalar**. Cross products are not associative: brackets matter. For example,

$$\mathbf i\times(\mathbf i\times\mathbf j)=-\mathbf j,\qquad (\mathbf i\times\mathbf i)\times\mathbf j=\mathbf0.$$

Check a calculated cross product by taking its scalar product with each input. Both results must be zero, although this check alone does not establish its magnitude or sign.

### Example: compute and check {#example-cross-product}

> **Original example.** For $\mathbf a=(1,2,0)$ and $\mathbf b=(0,1,2)$, find $\mathbf a\times\mathbf b$ and check perpendicularity.

<details markdown="1">
<summary>Hint</summary>

Compute the three components separately. The middle component is $a_3b_1-a_1b_3$.

</details>

<details markdown="1">
<summary>Solution</summary>

$$\mathbf a\times\mathbf b=(2\cdot2-0\cdot1,\ 0\cdot0-1\cdot2,\ 1\cdot1-2\cdot0)=(4,-2,1).$$

$$\begin{aligned}
(4,-2,1)\cdot(1,2,0)&=4-4=0,\\
(4,-2,1)\cdot(0,1,2)&=-2+2=0.
\end{aligned}$$

Both perpendicularity checks pass. Reversing the inputs would give the negative vector, with the same magnitude.

</details>

## Area from Two Edges {#area}

A parallelogram with adjacent edges $\mathbf a,\mathbf b$ has base length times perpendicular height as its area. The height relative to the first edge is the length of the second edge times the sine of their angle. Therefore

$$\boxed{A_{\mathrm{parallelogram}}=\lVert\mathbf a\times\mathbf b\rVert,\qquad A_{\mathrm{triangle}}=\frac12\lVert\mathbf a\times\mathbf b\rVert.}$$

For a triangle with vertices $A,B,C$, first form the two edges from the **same vertex**:

$$A_{ABC}=\frac12\lVert(\mathbf b-\mathbf a)\times(\mathbf c-\mathbf a)\rVert.$$

For the previous example the parallelogram area is $\sqrt{21}$ and the triangle area is $\frac12\sqrt{21}$ square units. Swapping the edges reverses the normal direction, but leaves either area unchanged.

![Schematic parallelepiped with adjacent edges u and v from A, a third edge w, a normal N perpendicular to the base, and a dashed perpendicular height h; not to scale.](/assets/img/further-vector-products.svg)

The diagram connects the base area to the height used below. It is a conceptual schematic, not a diagram for an independent question.

### Complete a step and repair an error {#repair-area}

> **Original task.** A student uses the vectors in the previous example and writes “triangle area $=\sqrt{4^2+(-2)^2+1^2}$”. Correct the statement. Another student says a zero cross product supplies a normal direction: explain the problem.

<details markdown="1">
<summary>Hint</summary>

Identify which shape the magnitude measures. Then distinguish a zero vector from a direction.

</details>

<details markdown="1">
<summary>Solution</summary>

$$A_{\mathrm{triangle}}=\frac12\sqrt{4^2+(-2)^2+1^2}=\frac{\sqrt{21}}2.$$

The first expression measures the parallelogram. A zero cross product means the inputs are dependent (parallel when both are nonzero); it cannot define a normal direction. Two parallel directions do not determine a unique plane.

</details>

## Scalar Triple Product and Volume {#triple-product}

Take three edges $\mathbf u,\mathbf v,\mathbf w$ from one vertex of a parallelepiped. For a nondegenerate base, $\mathbf u\times\mathbf v$ is a normal with magnitude equal to the base area. Projecting the third edge onto the unit normal gives a **signed height**:

$$h_{\mathrm{signed}}=\frac{\mathbf w\cdot(\mathbf u\times\mathbf v)}{\lVert\mathbf u\times\mathbf v\rVert}.$$

Base area times the absolute height gives

$$\boxed{V=\lvert\mathbf w\cdot(\mathbf u\times\mathbf v)\rvert.}$$

The scalar inside the absolute value is a **scalar triple product**. A cyclic rearrangement leaves it unchanged; interchanging two vectors reverses its sign:

$$\mathbf u\cdot(\mathbf v\times\mathbf w)=\mathbf v\cdot(\mathbf w\times\mathbf u)=\mathbf w\cdot(\mathbf u\times\mathbf v).$$

$$\mathbf u\cdot(\mathbf v\times\mathbf w)=-\mathbf u\cdot(\mathbf w\times\mathbf v).$$

The sign describes orientation; it is not a negative physical volume. If the base is degenerate, both the triple product and volume are zero; do not divide by the zero base area.

### When does zero mean coplanar? {#coplanarity}

If the first two vectors are independent, their cross product is a nonzero normal. The third vector lies in their plane precisely when its component along that normal is zero. If the first two are dependent, three vectors span at most a plane anyway. Thus, including degenerate cases,

$$\boxed{\mathbf u,\mathbf v,\mathbf w\text{ are coplanar}\iff\mathbf u\cdot(\mathbf v\times\mathbf w)=0.}$$

These are free vectors translated to a common starting point. For **four points**, test three displacements from a common vertex:

$$A,B,C,D\text{ are coplanar}\iff(\mathbf b-\mathbf a)\cdot\big((\mathbf c-\mathbf a)\times(\mathbf d-\mathbf a)\big)=0.$$

Three position vectors being coplanar tests a plane through the origin. It does not in general test whether four given points lie in one plane. Three collinear points also do not specify a unique plane, even though the four-point triple product is zero for any fourth point.

### Example: coplanar or parallel? {#example-coplanar-or-parallel}

**Original OxfordAQA question:** 9665/FM03, June 2024, Q2, QP p. 4; paired MS p. 5. The parts describe separate cases.

> The vectors $\mathbf a$, $\mathbf b$ and $\mathbf c$ are given by
>
> $$\mathbf a=\mathbf i+2\mathbf j+3\mathbf k,\qquad \mathbf b=3\mathbf i+3\mathbf j+5\mathbf k,\qquad \mathbf c=-3\mathbf i+t\mathbf j+9\mathbf k$$
>
> where $t$ is a real number.
>
> (a) Find $\mathbf a\times\mathbf b$. **[1 mark]**
>
> (b) In the case when $\mathbf a$, $\mathbf b$ and $\mathbf c$ are coplanar, use a scalar triple product to find the value of $t$. **[3 marks]**
>
> (c) In the case when $\mathbf c$ is parallel to $\mathbf a\times\mathbf b$ find the value of $t$. **[2 marks]**

Try (a). In (b), complete the scalar equation before reading the solution; in (c), decide whether the required result should be a zero scalar product or a multiple of a vector.

<details markdown="1">
<summary>Hint</summary>

For (b), the triple product is $(\mathbf a\times\mathbf b)\cdot\mathbf c$. For (c), write $\mathbf c=\lambda(\mathbf a\times\mathbf b)$ and check all three components.

</details>

<details markdown="1">
<summary>Solution</summary>

$$\mathbf a\times\mathbf b=(10-9,\ 9-5,\ 3-6)=(1,4,-3).$$

It is perpendicular to both inputs: $1+8-9=0$ and $3+12-15=0$. Coplanarity gives

$$-3+4t-27=0\quad\Longrightarrow\quad\boxed{t=\frac{15}2}.$$

For the separate parallel case,

$$(-3,t,9)=\lambda(1,4,-3)\quad\Longrightarrow\quad\lambda=-3,\qquad\boxed{t=-12}.$$

The third component agrees: $9=(-3)(-3)$. In the first case the third vector lies in the plane; in the second it points along the plane's normal. These are different geometric requirements.

</details>

### Example: a volume with two possible parameters {#example-volume}

**Adapted from OxfordAQA 9665/FM03, January 2025, Q1**, QP pp. 2–3; paired MS p. 4. The original diagram is replaced here by an explicit statement of the adjacent edges; the coordinates and volume are retained. No official marks are assigned to this adaptation.

> A parallelepiped has adjacent edges $AB$, $AC$ and $AD$ from $A$. Its vertices have position vectors
>
> $$\mathbf a=(3,4,2),\quad\mathbf b=(k+4,6,3),\quad\mathbf c=(6,7,3),\quad\mathbf d=(k+5,3,5),\qquad k\in\mathbb R.$$
>
> Its volume is 4 cubic units. Find all possible values of $k$.

<details markdown="1">
<summary>Hint</summary>

Form edge vectors before taking products. An absolute value equal to a positive number leads to two signed equations.

</details>

<details markdown="1">
<summary>Solution</summary>

$$\overrightarrow{AB}=(k+1,2,1),\quad\overrightarrow{AC}=(3,3,1),\quad\overrightarrow{AD}=(k+2,-1,3).$$

$$\overrightarrow{AB}\times\overrightarrow{AC}=(-1,\ 2-k,\ 3k-3).$$

$$\begin{aligned}
(\overrightarrow{AB}\times\overrightarrow{AC})\cdot\overrightarrow{AD}
&=-(k+2)-(2-k)+3(3k-3)\\
&=9k-13.
\end{aligned}$$

Hence

$$\lvert9k-13\rvert=4\quad\Longrightarrow\quad 9k-13=4\ \text{or}\ 9k-13=-4\quad\Longrightarrow\quad\boxed{k=\frac{17}9\ \text{or}\ k=1}.$$

Substitution gives signed products 4 and −4, so both produce the required nonzero volume. Keeping only the positive signed product loses a valid configuration.

</details>

## Independent Practice {#practice}

All questions in this section are **original tasks**, with no official marks. Choose methods yourself; keep the solutions closed until you have written a complete attempt.

### Question 1: four points, not three positions {#practice-1}

> Points $A=(1,0,1)$, $B=(2,2,1)$, $C=(1,1,3)$ and $D=(2,3,k)$ are given. Find $k$ so that all four points lie in one plane. Find the area of triangle $ABC$. Explain why using $\mathbf a\cdot(\mathbf b\times\mathbf c)$ alone would answer a different question.

<details markdown="1">
<summary>Hint</summary>

Select one common vertex. Use the two edges of the triangle for both parts of the calculation.

</details>

<details markdown="1">
<summary>Solution</summary>

$$\overrightarrow{AB}=(1,2,0),\quad\overrightarrow{AC}=(0,1,2),\quad\overrightarrow{AD}=(1,3,k-1).$$

$$\overrightarrow{AB}\times\overrightarrow{AC}=(4,-2,1),\qquad (4,-2,1)\cdot(1,3,k-1)=k-3.$$

Thus $k=3$ and

$$A_{ABC}=\frac12\sqrt{16+4+1}=\frac{\sqrt{21}}2.$$

The proposed position-vector calculation tests whether the origin and the first three points share a plane; it never uses the fourth point. A further check is the plane through the triangle: $4x-2y+z=5$, which contains the fourth point precisely at the parameter found.

</details>

### Question 2: reverse the normal condition {#practice-2}

> Let $\mathbf u=(1,1,0)$ and $\mathbf v=(2,s,1)$. Find $s$ so that $\mathbf u\times\mathbf v$ is parallel to $(1,-1,2)$. Is it possible for these two inputs to be parallel for any $s$? Justify both answers.

<details markdown="1">
<summary>Hint</summary>

Find the cross product symbolically, then compare components with a scalar multiple. Check whether the cross product can ever be zero.

</details>

<details markdown="1">
<summary>Solution</summary>

$$\mathbf u\times\mathbf v=(1,-1,s-2)=\lambda(1,-1,2)\quad\Longrightarrow\quad\lambda=1,\qquad s=4.$$

The cross product has first component 1 for every parameter value; it cannot be zero. Thus the two input vectors cannot be parallel. A nonzero multiple condition and a zero-product condition must not be interchanged.

</details>

### Question 3: independent retry {#practice-3}

> Without reopening Question 1, use $A=(2,1,0)$, $B=(3,1,1)$, $C=(2,3,1)$ and $D=(4,3,h)$. Determine when these four points are coplanar. Check your result using a plane equation and find the area of triangle $ABC$.

<details markdown="1">
<summary>Hint</summary>

A nonzero cross product supplies a normal. A plane through the common vertex has a constant scalar product with this normal.

</details>

<details markdown="1">
<summary>Solution</summary>

$$\overrightarrow{AB}=(1,0,1),\quad\overrightarrow{AC}=(0,2,1),\quad\overrightarrow{AD}=(2,2,h).$$

$$\overrightarrow{AB}\times\overrightarrow{AC}=(-2,-1,2),\qquad (-2,-1,2)\cdot(2,2,h)=2h-6.$$

Hence $h=3$. The plane through the first three points is $-2x-y+2z=-5$; substituting the fourth point gives $-8-3+2h=-5$, again giving $h=3$.

$$A_{ABC}=\frac12\sqrt{4+1+4}=\frac32.$$

</details>

### Question 4: a volume under a changed edge {#practice-4}

> Adjacent edges of a parallelepiped are $\mathbf u=(2,1,0)$, $\mathbf v=(1,0,2)$ and $\mathbf w=(0,k,1)$. Its volume is 3 cubic units. Find every possible value of $k$. Without repeating all the component arithmetic, explain what happens to the volume if the third edge is replaced by $\mathbf w+\mathbf u$, or by $2\mathbf w$.

<details markdown="1">
<summary>Hint</summary>

Use an absolute value for the volume. The base normal is perpendicular to either base edge, and the scalar product distributes over addition.

</details>

<details markdown="1">
<summary>Solution</summary>

$$\mathbf u\times\mathbf v=(2,-4,-1),\qquad (\mathbf u\times\mathbf v)\cdot\mathbf w=-4k-1.$$

$$\lvert-4k-1\rvert=3\quad\Longrightarrow\quad\boxed{k=-1\ \text{or}\ k=\frac12}.$$

Adding a base edge does not change the signed perpendicular height:

$$\begin{aligned}
(\mathbf u\times\mathbf v)\cdot(\mathbf w+\mathbf u)
&=(\mathbf u\times\mathbf v)\cdot\mathbf w+(\mathbf u\times\mathbf v)\cdot\mathbf u\\
&=(\mathbf u\times\mathbf v)\cdot\mathbf w.
\end{aligned}$$

So that volume is still 3 cubic units. Doubling the third edge doubles the signed height and therefore gives 6 cubic units. These conclusions use the product properties, not just a new set of numerical substitutions.

</details>

## Quick Reference {#quick-reference}

| Task | Method | Condition or check |
| --- | --- | --- |
| Perpendicular vector | Cross product | Nonzero only when inputs are independent |
| Parallelogram area | Magnitude of the cross product | Adjacent edges from one vertex |
| Triangle area | Half that magnitude | Use two edges, not arbitrary positions |
| Parallelepiped volume | Absolute scalar triple product | Three adjacent edges; nonnegative |
| Coplanar vectors | Scalar triple product is zero | Includes dependent or zero inputs |
| Coplanar points | Three displacements from one vertex | Distinguish from a plane through the origin |
{: .wide-table}

## Common Pitfalls and Next Attempt {#common-pitfalls}

- A wrong middle-component sign: expand that component separately, then test perpendicularity with **both** inputs.
- A scalar answer to a cross-product question: retain all three components; take its magnitude only when the question asks for area or distance.
- A negative area or volume: distinguish the oriented product from its nonnegative geometric magnitude.
- A claimed normal of zero: the directions are dependent; choose another independent direction before describing a plane.
- Only one parameter solution from a volume: write both signed equations before simplifying.
- Position vectors used as edges: subtract one common starting vertex first.

**Before moving on:** in English, explain why exchanging two edges changes the triple-product sign but not the volume. Then redo one task without its hint. Check a coplanarity answer by substituting the points into one plane, rather than repeating the same triple product.

**Learning route:** [Previous: second-order differential equations](/alevel/a2-further-mathematics/second-order-differential-equations/) · [Next: lines and planes](/alevel/a2-further-mathematics/lines-and-planes/) · [Further Pure Mathematics](/alevel/a2-further-mathematics/).

## Sources and Scope {#sources}

- OxfordAQA International A-level Further Mathematics **9665**, Unit FP2/FM03, specification **Version 5.2**, [FP2.12, PDF p. 19 / printed p. 20](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf#page=19). This lesson covers vector products, areas, scalar triple products, volumes and coplanarity; the next lesson completes the line/plane geometry.
- [June 2024 FM03 QP, Q2 p. 4](/assets/pdf/fx-cg50/references/oxfordaqa-fm03-2024-june-question-paper.pdf#page=4) and [paired MS p. 5](/assets/pdf/fx-cg50/references/oxfordaqa-fm03-2024-june-mark-scheme.pdf#page=5): original question above, including its specified scalar-triple-product method.
- [January 2025 FM03 QP, Q1 pp. 2–3](/assets/pdf/fx-cg50/references/oxfordaqa-fm03-2025-january-question-paper.pdf#page=2) and [paired MS p. 4](/assets/pdf/fx-cg50/references/oxfordaqa-fm03-2025-january-mark-scheme.pdf#page=4): adapted diagram-to-edge example above. Both signed parameter cases were independently recalculated.

The formula booklet has not been checked for the inclusion of individual formulas, so this lesson explains their derivation rather than adding a list of formulas to memorise. Worked answers and original tasks are author-written; source marks apply only to the unchanged official question. No calculator button sequence or classroom learning outcome is claimed as verified.
