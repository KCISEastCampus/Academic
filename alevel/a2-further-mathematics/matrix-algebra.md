---
title: Matrix Algebra and Three-dimensional Transformations
layout: subjects
mathjax: true
grade: a2
subject: a2-further-mathematics
permalink: /alevel/a2-further-mathematics/matrix-algebra/
toc_headings: h2, h3, h4
study_page: true
---

[Further Pure Mathematics](/alevel/a2-further-mathematics/) · FP2.13 Matrix algebra

How can one matrix describe both an operation on coordinates and a reversible transformation of space? Learn to calculate a three-dimensional transformation, explain its geometry and check whether it loses information.

- **Learning:** revisit [dimensions](#dimensions-and-order), connect [determinants and volume](#determinants-and-volume), then construct an [inverse](#cofactors-and-inverses).
- **Homework help:** compare [rotations](#rotations), [reflections](#reflections), [compositions](#compositions) and [invariant points and lines](#invariant-points-and-lines).
- **Revision:** attempt the [practice](#practice) and [independent retry](#independent-retry) before opening their solutions.

**Goals:** justify a product's dimensions; find a third-order determinant and inverse; describe the specified spatial transformations completely; distinguish a fixed point, a line mapped onto itself and a collapsed line.

**Before you start:** revise AS matrix addition, scalar multiplication, multiplication, transpose and second-order inverses in [AS Further Mathematics](/alevel/as-further-mathematics/), and coordinate vectors in [lines and planes](/alevel/a2-further-mathematics/lines-and-planes/). Matrices act on **column vectors** throughout. All entries and parameters here are real unless stated otherwise.

## Dimensions and order {#dimensions-and-order}

An order describes rows first, columns second. An entry in a product is the dot product of a row of the first matrix with a column of the second:

$$A\text{ is }m\times n,\quad B\text{ is }n\times p
\quad\Longrightarrow\quad AB\text{ is }m\times p,\qquad
(AB)_{ij}=\sum_{k=1}^{n}a_{ik}b_{kj}.$$

The inner dimensions must agree. Addition requires the same dimensions, and scalar multiplication multiplies every entry. Transposition exchanges rows and columns; it does not invert a general matrix.

$$ (A+B)_{ij}=a_{ij}+b_{ij},\qquad (qA)_{ij}=qa_{ij},\qquad
(A^{\mathsf T})_{ij}=a_{ji},\qquad
(AB)^{\mathsf T}=B^{\mathsf T}A^{\mathsf T}.$$

**Original diagnostic.** Let P have order 2 by 3 and Q have order 3 by 2. State the orders of PQ and QP. Can P have a two-sided inverse? If S acts first and R second, which product represents the composition?

<details markdown="1">
<summary>Solution and feedback</summary>

The products have orders 2 by 2 and 3 by 3 respectively, so they cannot be equal. A non-square matrix has no two-sided inverse; the inverse method below is for square matrices. Acting successively on a column vector gives

$$\mathbf x\longmapsto S\mathbf x\longmapsto R(S\mathbf x)=(RS)\mathbf x.$$

If you wrote SR, follow one input vector through both transformations before multiplying.

</details>

### A non-square example {#non-square-example}

**Original example.** Calculate both products for

$$P=\begin{pmatrix}1&0&2\\0&1&-1\end{pmatrix},\qquad
Q=\begin{pmatrix}1&2\\0&1\\1&0\end{pmatrix}.$$

The first entry of PQ is a row–column calculation:

$$ (PQ)_{11}=1(1)+0(0)+2(1)=3.$$

Continuing in the same way gives

$$PQ=\begin{pmatrix}3&2\\-1&1\end{pmatrix},\qquad
QP=\begin{pmatrix}1&2&0\\0&1&-1\\1&0&2\end{pmatrix}.$$

The products exist in both orders, but are different objects. Even when both matrices are square, multiplication is generally not commutative.

## Determinants and volume {#determinants-and-volume}

For a third-order square matrix, expansion along the first row gives

$$A=\begin{pmatrix}a&b&c\\d&e&f\\g&h&i\end{pmatrix},\qquad
\det A=a(ei-fh)-b(di-fg)+c(dh-eg).$$

The signs alternate. Each bracket is a second-order determinant obtained by deleting the selected entry's row and column. Choose a row or column with zeros when possible, while retaining its cofactor signs.

**Original example.** For

$$N=\begin{pmatrix}1&2&0\\0&1&1\\2&0&1\end{pmatrix},\qquad
\det N=1(1)-2(0-2)=5.$$

### Why a determinant measures volume {#volume-meaning}

The columns of a transformation matrix are the images of the three unit basis vectors. They form the edges of the image of a unit cube. Their scalar triple product is the determinant, so its absolute value is the volume of that parallelepiped. A negative determinant records reversed orientation, not a negative volume.

$$\boxed{V_{\mathrm{image}}=\lvert\det A\rvert V_{\mathrm{original}}.}$$

A zero determinant means that space is compressed into a plane, a line or a point; the matrix is **singular**. A nonzero determinant means the transformation is invertible. Volume being preserved does not by itself prove that lengths or angles are preserved.

For square matrices of the same order,

$$\boxed{\det(AB)=\det A\det B},\qquad
\det I=1,\qquad \det(A^{-1})=\frac1{\det A}.$$

Use the inverse identity only when the inverse exists. For a third-order matrix,

$$\det(qA)=q^3\det A.$$

Multiplying every entry scales each of three image edges. It does not merely multiply the determinant by q.

**Original check.** Apply N, then a reflection, then an enlargement of scale factor 2 centred at the origin. Find the signed determinant and the volume scale factor of the whole transformation.

<details markdown="1">
<summary>Solution</summary>

A reflection has determinant −1 and the enlargement has determinant 8. Writing F for the reflection matrix gives

$$\det((2I)FN)=8(-1)(5)=-40,\qquad
\text{volume scale factor}=40.$$

The sign distinguishes orientation; the volume multiplier is nonnegative.

</details>

## Cofactors and inverses {#cofactors-and-inverses}

The **minor** of an entry is the determinant left after deleting its row and column. The **cofactor** includes the sign in the following pattern:

$$C_{ij}=(-1)^{i+j}\det A_{(i\mid j)},\qquad
\text{signs}=\begin{pmatrix}+&-&+\\-&+&-\\+&-&+\end{pmatrix}.$$

The matrix C contains the cofactors in their original positions. Its transpose is the **adjugate**. Multiplying A by this transpose gives determinant expansions on the diagonal; off the diagonal, the same expansion has a repeated row and is zero. Thus

$$AC^{\mathsf T}=C^{\mathsf T}A=(\det A)I,\qquad
\boxed{A^{-1}=\frac1{\det A}C^{\mathsf T}},\quad \det A\ne0.$$

### Worked inverse and a missing step {#worked-inverse}

For N above, deleting row 1 and column 2 gives

$$C_{12}=-\det\begin{pmatrix}0&1\\2&1\end{pmatrix}=2.$$

**Original completion task.** Calculate the cofactor in row 2, column 3, then transpose the completed cofactor matrix and check one off-diagonal entry of the product with N.

<details markdown="1">
<summary>Hint</summary>

Delete the indicated row and column before applying the minus sign. In the product with the proposed inverse, use a row of N and a column of the inverse, not two rows.

</details>

<details markdown="1">
<summary>Solution</summary>

$$C_{23}=-\det\begin{pmatrix}1&2\\2&0\end{pmatrix}=4,\qquad
C=\begin{pmatrix}1&2&-2\\-2&1&4\\2&-1&1\end{pmatrix}.$$

Transpose before dividing:

$$N^{-1}=\frac15\begin{pmatrix}1&-2&2\\2&1&-1\\-2&4&1\end{pmatrix}.$$

For example, row 1 times column 2 is zero, and the full check is

$$ (NN^{-1})_{12}=\frac{-2+2}{5}=0,\qquad NN^{-1}=N^{-1}N=I.$$

If you used C without transposing, a nonzero off-diagonal entry exposes the error. Multiplying back checks the inverse more reliably than rereading nine cofactors.

</details>

### Adapted example: preserve a parameter restriction {#parameter-inverse}

**Adapted example — OxfordAQA 9665/FM03 January 2025 Q13(a), MS p.20.** The matrix and parameter have been changed. Find when the following matrix is nonsingular, then find its inverse in terms of t.

$$N_t=\begin{pmatrix}1&2&0\\0&1&1\\t&0&1\end{pmatrix}.$$

<details markdown="1">
<summary>Hint</summary>

Find the determinant before dividing. The cofactor calculation above can be repeated with a variable in the bottom-left position.

</details>

<details markdown="1">
<summary>Solution</summary>

$$\det N_t=1+2t,\qquad t\ne-\frac12,\qquad
N_t^{-1}=\frac1{1+2t}\begin{pmatrix}1&-2&2\\t&1&-1\\-t&2t&1\end{pmatrix}.$$

The restriction belongs to the final answer. Multiplying N_t by the displayed numerator gives

$$N_t\begin{pmatrix}1&-2&2\\t&1&-1\\-t&2t&1\end{pmatrix}=(1+2t)I.$$

At the excluded value this identity still holds, but division is impossible. A singular matrix cannot be repaired by cancelling factors in a proposed inverse.

</details>

## Building a transformation from its columns {#basis-images}

Write the standard basis vectors as

$$\mathbf e_x=\begin{pmatrix}1\\0\\0\end{pmatrix},\quad
\mathbf e_y=\begin{pmatrix}0\\1\\0\end{pmatrix},\quad
\mathbf e_z=\begin{pmatrix}0\\0\\1\end{pmatrix}.$$

Linearity means that transforming a combination of these vectors transforms each part:

$$A(x\mathbf e_x+y\mathbf e_y+z\mathbf e_z)
=xA\mathbf e_x+yA\mathbf e_y+zA\mathbf e_z,\qquad
A=\begin{pmatrix}\vert&\vert&\vert\\A\mathbf e_x&A\mathbf e_y&A\mathbf e_z\\\vert&\vert&\vert\end{pmatrix}.$$

Thus **the images go in the columns**. This also explains why every matrix transformation here fixes the origin. A translation requires an additional constant vector and is not represented by one of these third-order matrices alone.

## Rotations {#rotations}

Use right-handed axes and active rotations of vectors, with axes held fixed. A **positive** rotation is anticlockwise when viewed **from the positive end of its rotation axis towards the origin**. For a positive quarter-turn, the basis directions follow the cyclic order

$$R_x(\tfrac\pi2):\mathbf e_y\mapsto\mathbf e_z,\qquad
R_y(\tfrac\pi2):\mathbf e_z\mapsto\mathbf e_x,\qquad
R_z(\tfrac\pi2):\mathbf e_x\mapsto\mathbf e_y.$$

![Schematic views from the positive x, y and z axes towards the origin. In each perpendicular plane a positive quarter-turn takes the horizontal basis arrow to the vertical basis arrow; the rotation axis points towards the viewer.](/assets/img/further-matrix-transformations.svg)

The diagram fixes the viewing convention; it is not a perspective measurement. Set

$$c=\cos\theta,\qquad s=\sin\theta.$$

For a rotation about the x-axis, the x basis vector stays fixed. The other two images are

$$R_x\mathbf e_x=\mathbf e_x,\qquad R_x\mathbf e_y=c\mathbf e_y+s\mathbf e_z,\qquad
R_x\mathbf e_z=-s\mathbf e_y+c\mathbf e_z.$$

Putting these images into columns gives the first matrix below. Cycling the axes gives the other two:

$$R_x(\theta)=\begin{pmatrix}1&0&0\\0&c&-s\\0&s&c\end{pmatrix}.$$

$$R_y(\theta)=\begin{pmatrix}c&0&s\\0&1&0\\-s&0&c\end{pmatrix}.$$

$$R_z(\theta)=\begin{pmatrix}c&-s&0\\s&c&0\\0&0&1\end{pmatrix}.$$

For example, the y-axis matrix sends the z basis vector towards the x basis vector, as required. Each rotation has determinant 1 and inverse obtained by negating its angle. Describe a rotation by **type, axis, angle and an unambiguous direction**; “90 degrees” alone is incomplete.

## Reflections and enlargements {#reflections}

A reflection in a coordinate plane changes the sign of the perpendicular coordinate. A reflection in one of the three specified diagonal planes swaps two coordinates and leaves the third unchanged. The six FP2.13 planes and their matrices are:

$$S_{x=0}=\begin{pmatrix}-1&0&0\\0&1&0\\0&0&1\end{pmatrix},\qquad
S_{y=0}=\begin{pmatrix}1&0&0\\0&-1&0\\0&0&1\end{pmatrix}.$$

$$S_{z=0}=\begin{pmatrix}1&0&0\\0&1&0\\0&0&-1\end{pmatrix},\qquad
S_{x=y}=\begin{pmatrix}0&1&0\\1&0&0\\0&0&1\end{pmatrix}.$$

$$S_{x=z}=\begin{pmatrix}0&0&1\\0&1&0\\1&0&0\end{pmatrix},\qquad
S_{y=z}=\begin{pmatrix}1&0&0\\0&0&1\\0&1&0\end{pmatrix}.$$

Each has determinant −1 and is its own inverse. To check the diagonal-plane case, take a general point and compare its displacement from the plane with its image: swapping x and y fixes points in the plane x=y and reverses its normal direction.

An enlargement **centred at the origin**, with scale factor k, has matrix

$$E_k=kI=\begin{pmatrix}k&0&0\\0&k&0\\0&0&k\end{pmatrix},\qquad
\det E_k=k^3,\qquad \text{volume scale factor}=\lvert k\rvert^3.$$

A negative factor reverses each radial direction; a zero factor collapses all space to the origin. Stretching just one coordinate is not a uniform enlargement.

## Compositions and reverse problems {#compositions}

### Adapted example: describe, combine, check {#composition-example}

**Adapted example — OxfordAQA 9665/FM03 June 2024 Q1, MS p.4.** The rotation angle has been reversed. Let

$$R=R_y(-\tfrac\pi2)=\begin{pmatrix}0&0&-1\\0&1&0\\1&0&0\end{pmatrix},\qquad
S=S_{x=0}=\begin{pmatrix}-1&0&0\\0&1&0\\0&0&1\end{pmatrix}.$$

> Describe each transformation fully. Find the matrix for S followed by R, and check whether reversing the order gives the same transformation.

<details markdown="1">
<summary>Hint</summary>

Apply the rightmost matrix first. One basis vector suffices to disprove equality of the two products.

</details>

<details markdown="1">
<summary>Solution</summary>

R is a rotation about the y-axis through a right angle, clockwise viewed from the positive y-axis towards the origin. S is reflection in the plane x=0. The products are

$$RS=\begin{pmatrix}0&0&-1\\0&1&0\\-1&0&0\end{pmatrix},\qquad
SR=\begin{pmatrix}0&0&1\\0&1&0\\1&0&0\end{pmatrix}.$$

They send the x basis vector to opposite z directions. The composite RS swaps and negates the x and z coordinates while retaining y; this explains its action without confusing it with a rotation.

</details>

### Adapted example: undo the transformation on the correct side {#reverse-transformation}

**Adapted example — OxfordAQA 9665/FM03 January 2025 Q3, MS p.6.** The rotation axis and the given matrix have been changed. Three nonsingular matrices satisfy

$$AR=B,\qquad R=R_z(\theta),\qquad
B=\begin{pmatrix}0&0&1\\s&c&0\\c&-s&0\end{pmatrix}.$$

> Show that A is independent of the rotation angle, and describe the single transformation represented by A.

<details markdown="1">
<summary>Hint</summary>

Right-multiply the relation by the inverse of R. Use the sine–cosine identity to simplify the product for every angle; one numerical angle does not prove independence.

</details>

<details markdown="1">
<summary>Solution</summary>

$$\begin{aligned}
A&=BR^{-1}\\
&=\begin{pmatrix}0&0&1\\s&c&0\\c&-s&0\end{pmatrix}
\begin{pmatrix}c&s&0\\-s&c&0\\0&0&1\end{pmatrix}\\
&=\begin{pmatrix}0&0&1\\0&s^2+c^2&0\\c^2+s^2&0&0\end{pmatrix}\\
&=\begin{pmatrix}0&0&1\\0&1&0\\1&0&0\end{pmatrix}.
\end{aligned}$$

No angle remains, so A is independent of it. The matrix swaps x and z, hence it represents reflection in the plane x=z. Left-multiplying by the inverse would not isolate A.

</details>

## Invariant points and lines {#invariant-points-and-lines}

A **fixed (invariant) point** has the same coordinates after transformation. Find all such points by solving

$$A\mathbf r=\mathbf r\quad\Longleftrightarrow\quad(A-I)\mathbf r=\mathbf0.$$

An **invariant line**, in the sense used here, is mapped **onto the same entire line**; individual points may move. Do not test only a point or only a direction. For a general line,

$$L:\mathbf r=\mathbf a+t\mathbf d,\qquad t\in\mathbb R,\quad\mathbf d\ne\mathbf0,$$

linearity gives the following test:

$$A\mathbf d=\mu\mathbf d,\qquad
A\mathbf a-\mathbf a=\nu\mathbf d,\qquad
A(\mathbf a+t\mathbf d)=\mathbf a+(\nu+\mu t)\mathbf d.$$

The direction must remain parallel and the image of one base point must lie on the original line. If the two conditions hold and the multiplier is nonzero, the new parameter ranges over every real number and the image is the whole line. If it is zero, the image is only one point on the line, a **collapse**, not equality of the two sets.

For every point of the line to be fixed, stronger conditions are needed:

$$\boxed{A\mathbf a=\mathbf a,\qquad A\mathbf d=\mathbf d.}$$

### A line away from the origin {#offset-line}

**Original example.** Consider

$$D=\begin{pmatrix}2&0&0\\0&1&0\\0&0&1\end{pmatrix},\qquad
L:\mathbf r=\begin{pmatrix}0\\1\\0\end{pmatrix}+t\begin{pmatrix}1\\0\\0\end{pmatrix}.$$

The fixed-point equations and the image of a general line point are

$$D\begin{pmatrix}x\\y\\z\end{pmatrix}=\begin{pmatrix}2x\\y\\z\end{pmatrix},\qquad
\text{fixed points: }x=0,\qquad
D\begin{pmatrix}t\\1\\0\end{pmatrix}=\begin{pmatrix}2t\\1\\0\end{pmatrix}.$$

The fixed points form a plane. The line L does not pass through the origin, but it is mapped onto itself because twice a real parameter still ranges over all real numbers. Only its point with parameter zero is fixed; the whole line is not fixed pointwise.

**Original correction task.** Replace the first diagonal entry of D by zero. A student says, “The direction still lies on L, so L is invariant.” Explain the missing check.

<details markdown="1">
<summary>Solution and feedback</summary>

The changed matrix sends every point of L to the same point:

$$D_0=\begin{pmatrix}0&0&0\\0&1&0\\0&0&1\end{pmatrix},\qquad
D_0\begin{pmatrix}t\\1\\0\end{pmatrix}=\begin{pmatrix}0\\1\\0\end{pmatrix}.$$

The image is contained in L but is not the entire line. When a question uses “mapped into” rather than “onto”, state which property you have proved. The zero image of a direction must not be described as a nonzero line direction.

</details>

## Practice {#practice}

The following tasks are original. Keep the hints and solutions closed for your first attempt. Give reasons, not only matrix entries.

### Question 1: a reversed condition {#practice-1}

> A transformation T is followed by reflection in the plane y=z. The combined matrix is the identity. Find T and explain why your answer is unique.

<details markdown="1">
<summary>Hint</summary>

Write the product in its acting order, then isolate the unknown matrix using the inverse of the reflection.

</details>

<details markdown="1">
<summary>Solution</summary>

$$S_{y=z}T=I\quad\Longrightarrow\quad T=S_{y=z}^{-1}=S_{y=z}
=\begin{pmatrix}1&0&0\\0&0&1\\0&1&0\end{pmatrix}.$$

The reflection is invertible, so multiplying by its inverse determines one matrix. Reflecting twice returns every point to its original position.

</details>

### Question 2: find and repair an inverse {#practice-2}

> A student proposes one fifth of the cofactor matrix C in the worked inverse as the inverse of N. Use one product entry to disprove this, then give the corrected matrix. Explain what would happen to the inverse problem if two rows of N were identical.

<details markdown="1">
<summary>Hint</summary>

Test an off-diagonal entry. The cofactor matrix still needs a transpose. Identical rows give a zero determinant.

</details>

<details markdown="1">
<summary>Solution</summary>

$$\left(N\frac C5\right)_{12}=\frac{1(2)+2(1)+0(-1)}5=\frac45\ne0,\qquad
N^{-1}=\frac15\begin{pmatrix}1&-2&2\\2&1&-1\\-2&4&1\end{pmatrix}.$$

Identical rows give a singular matrix, so no inverse exists. This is not a cofactor sign error that another transpose can fix.

</details>

### Question 3: choose a representation {#practice-3}

> A map sends each point $(x,y,z)$ to $(y,x,-z)$. Construct its matrix from basis images. Describe it as a composition of two specified reflections, find its volume scale factor, and find all fixed points.

<details markdown="1">
<summary>Hint</summary>

Use one swap and one sign change. Then solve the fixed-point equations; do not assume that volume preservation makes all points fixed.

</details>

<details markdown="1">
<summary>Solution</summary>

$$T=\begin{pmatrix}0&1&0\\1&0&0\\0&0&-1\end{pmatrix}
=S_{z=0}S_{x=y},\qquad \det T=(-1)(-1)=1.$$

The volume scale factor is 1. Solving the point equations gives

$$y=x,\quad x=y,\quad -z=z\quad\Longrightarrow\quad
\mathbf r=t\begin{pmatrix}1\\1\\0\end{pmatrix},\quad t\in\mathbb R.$$

All and only the points of this line are fixed. The two reflections can be performed in either order in this particular case; this does not establish a general commutative rule.

</details>

### Question 4: test an offset line {#practice-4}

> For D in the offset-line example, decide whether each line is mapped onto itself: (i) $(t,2,3)$; (ii) $(1,t,0)$, with t real. For any invariant line, decide whether it is fixed pointwise. Justify each conclusion with a general point.

<details markdown="1">
<summary>Hint</summary>

Check the constant coordinates as well as the direction. A parallel image line need not be the same line.

</details>

<details markdown="1">
<summary>Solution</summary>

$$D\begin{pmatrix}t\\2\\3\end{pmatrix}=\begin{pmatrix}2t\\2\\3\end{pmatrix},\qquad
D\begin{pmatrix}1\\t\\0\end{pmatrix}=\begin{pmatrix}2\\t\\0\end{pmatrix}.$$

The first line maps onto itself, but its nonzero-parameter points move. The second maps to the parallel line with x-coordinate 2, so is not invariant. Checking the direction alone would miss this failure.

</details>

## Independent retry {#independent-retry}

**Original task.** A map sends $(x,y,z)$ to $(-x,z,y)$. Without copying a previous matrix, find its matrix and determinant, all fixed points, and the image of the line $(t,1,1)$. Is that line invariant, fixed pointwise or collapsed? Finally decide whether the plane x=1 is mapped to itself. Choose your methods and justify the claims.

<details markdown="1">
<summary>Solution — open after an independent attempt</summary>

$$H=\begin{pmatrix}-1&0&0\\0&0&1\\0&1&0\end{pmatrix},\qquad \det H=1,\qquad
\text{fixed points: }x=0,\ y=z.$$

$$H\begin{pmatrix}t\\1\\1\end{pmatrix}=\begin{pmatrix}-t\\1\\1\end{pmatrix}.$$

Every real parameter is attained, so the line is invariant; only the point with parameter zero is fixed. It is not collapsed. The plane with x-coordinate 1 maps to the different plane with x-coordinate −1. The determinant alone could not answer either set-invariance question.

</details>

## Quick reference {#quick-reference}

| Task | Check to make |
| --- | --- |
| Product | Inner dimensions agree; the rightmost transformation acts first. |
| Third-order determinant | Alternate cofactor signs and retain every parameter restriction. |
| Inverse | Cofactors, transpose, divide by nonzero determinant, multiply back. |
| Volume | Absolute determinant; multiply determinants for a composition. |
| Rotation | Axis, angle, viewing direction; check a basis vector. |
| Reflection | Name the plane; use sign reversal or coordinate swap. |
| Enlargement | State origin as centre and the signed scale factor. |
| Fixed point | Image equals the original vector. |
| Invariant line | Check direction, a base point and non-collapse; points may move. |

## Common pitfalls and next steps {#common-pitfalls}

- **Wrong order:** trace one column vector through the maps, then retry Practice 1.
- **Untransposed cofactors:** test an off-diagonal product entry, then reconstruct the inverse without looking.
- **Wrong determinant factor:** scaling three edges by the same factor scales volume by its cube.
- **Incomplete rotation:** “clockwise” needs a viewing direction. Use the stated basis-image convention.
- **Confusing invariance with fixation:** substitute a general point on the line; then check whether every target parameter is reached.
- **Assuming a parallel image is the same line:** test one base point, as in Practice 4.

**Calculator check / written evidence:** numerical products, determinants and inverses can check an answer. The written solution must still establish dimensions, cofactor construction when requested, parameter restrictions, composition order and geometric descriptions. Symbolic identities require reasoning for all allowed parameters; a few numerical trials do not prove them. No new calculator button sequence is required here.

**Learning path:** [Previous: lines and planes](/alevel/a2-further-mathematics/lines-and-planes/) · [Next: linear equations](/alevel/a2-further-mathematics/linear-equations/) · [Further Pure Mathematics](/alevel/a2-further-mathematics/).

## Sources {#sources}

Scope: OxfordAQA International A-level Further Mathematics **9665**, [specification Version 5.2, FP2.13, printed p.21 / PDF p.20](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf#page=20), with FPP1.1 matrix operations as prerequisites. Coordinate-axis rotations, the six listed reflection planes, enlargements, compositions, third-order determinants/inverses, volume factors and invariant points/lines are covered here; eigenvalues follow after linear equations.

Adaptations were made after reading [June 2024 QP Q1 p.3 and Q11(a) p.18](/assets/pdf/fx-cg50/references/oxfordaqa-fm03-2024-june-question-paper.pdf) with [MS pp.4,16](/assets/pdf/fx-cg50/references/oxfordaqa-fm03-2024-june-mark-scheme.pdf), and [January 2025 QP Q3 pp.6–7 and Q13 pp.26–27](/assets/pdf/fx-cg50/references/oxfordaqa-fm03-2025-january-question-paper.pdf) with [MS pp.6,20–21](/assets/pdf/fx-cg50/references/oxfordaqa-fm03-2025-january-mark-scheme.pdf). The displayed adaptations change matrices, angles or parameters; all other tasks are original. No official marks are assigned to these tasks. A correct numerical answer does not replace a proof requested by “show” or a specified use of a preceding inverse.
