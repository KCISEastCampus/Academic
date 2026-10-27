---
layout: subjects
title: "Vectors and matrices"
mathjax: true
grade: igcse
subject: igcse-mathematics
permalink: /igcse/mathematics/vectors-and-matrices/
reading_layout: true
study_page: true
toc_headings: "h2"
---

[IGCSE Mathematics](/igcse/mathematics/#learning-start)
{:.lesson-meta}

## A calculation can describe a movement {#start}

A pair of numbers can mean “go right, then up”. A square array can tell us how to change that pair. We will first learn the array calculation, then use directed movements to explain geometry.

You need multiplication of signed numbers, [coordinates](/igcse/mathematics/coordinates-and-lines/#start) and [single transformations](/igcse/mathematics/transformations/#moves). Connect vector geometry, matrix multiplication, identity, unit-square transformations and matrix combinations step by step.

All questions and diagrams are self-written teaching constructions, with no official marks.
{:.lesson-meta}

## Multiply a row by a column {#matrix-products}

A **matrix** is a rectangular array of numbers. Its size is rows × columns. A $2\times1$ column contains two entries; a $2\times2$ matrix has two rows and two columns. Order matters.

For each entry in a product, multiply the entries along one row of the left matrix by the corresponding entries down one column of the right matrix, then add. This is not entry-by-entry multiplication.

<div class="worked-example" markdown="1">

### Keep track of the two outputs {#example-products}

**Question:** Find $M\binom{3}{4}$ and $MN$ for the matrices below.

$$
M=\begin{pmatrix}1&2\\0&1\end{pmatrix},
\qquad N=\begin{pmatrix}2&0\\3&1\end{pmatrix}.
$$

The first output uses the first row, and the second uses the second row:

$$
M\binom34
=\binom{1(3)+2(4)}{0(3)+1(4)}
=\binom{11}{4}.
$$

For MN, work out all four row-column products:

$$
MN=\begin{pmatrix}
1(2)+2(3)&1(0)+2(1)\\
0(2)+1(3)&0(0)+1(1)
\end{pmatrix}
=\begin{pmatrix}8&2\\3&1\end{pmatrix}.
$$

Check the first column separately: it is $M\binom23=\binom83$. Reversing the order gives a different product:

$$
NM=\begin{pmatrix}2&4\\3&7\end{pmatrix}.
$$

A scalar, such as 3, multiplies **every** entry:

$$
3M=\begin{pmatrix}3&6\\0&3\end{pmatrix}.
$$

</div>

## A matrix that changes nothing {#identity}

$$
I=\begin{pmatrix}1&0\\0&1\end{pmatrix},
\qquad I\binom xy=\binom xy.
$$

The first row keeps x and the second keeps y. For any $2\times2$ matrix M, $MI=IM=M$. This is the **identity matrix**, playing the role of 1 in multiplication; a matrix of four ones is not the identity.

## Check the calculation independently {#practice}

<div class="lesson-check" markdown="1">

### Four entries, two orders {#check-products}

**Question:** Let
$$
A=\begin{pmatrix}2&-1\\1&3\end{pmatrix},
\quad B=\begin{pmatrix}0&1\\2&-1\end{pmatrix}.
$$
Find $A\binom{-1}{2}$, $AB$, $BA$, $-2A$ and $AI$. Explain why $AB$ cannot be replaced by $BA$.

<details markdown="1">
<summary>Hint</summary>

Name the row and column used for each output. Check the two products separately.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$
A\binom{-1}{2}=\binom{-4}{5},\quad
AB=\begin{pmatrix}-2&3\\6&-2\end{pmatrix},
\quad BA=\begin{pmatrix}1&3\\3&-5\end{pmatrix}.
$$

$$
-2A=\begin{pmatrix}-4&2\\-2&-6\end{pmatrix},
\qquad AI=A.
$$

For example, AB's top right is $2(1)+(-1)(-1)=3$. BA's top left is $0(2)+1(1)=1$, whereas AB's is -2. A concrete unequal entry disproves equality. If only the diagonal entries were multiplied by -2, the scalar rule was not applied to every entry.

</details>

</div>

## Join directed movements {#vectors}

A **vector** has both size and direction. $\overrightarrow{AB}$ means the movement from A to B; reversing it gives $\overrightarrow{BA}=-\overrightarrow{AB}$. Equal vectors need not start at the same place, but must have equal length and the same direction.

If $A(1,2)$ and $B(4,1)$, then $\overrightarrow{AB}=\binom3{-1}$: subtract start from finish. A scalar stretches a vector and a negative scalar reverses its direction. For $\mathbf a=\binom31$ and $\mathbf b=\binom{-1}2$,

$$
\mathbf a+\mathbf b=\binom23,\quad
\mathbf a-\mathbf b=\binom4{-1},\quad
-2\mathbf a=\binom{-6}{-2}.
$$

To draw a sum, put b's tail at a's head. The arrow from the first tail to the last head is the sum. To draw a difference, add the reversed second arrow.

![Arrows O to A to B show a head-to-tail sum. Direct arrow O to B is the resultant. Coordinates are O(0,0), A(3,1), B(2,3).](/assets/img/igcse-geometry-calculation-vectors.svg)

Adding component numbers explains the **commutative** rule $\mathbf a+\mathbf b=\mathbf b+\mathbf a$ and the **associative** rule $(\mathbf a+\mathbf b)+\mathbf c=\mathbf a+(\mathbf b+\mathbf c)$. Different routes with the same start and finish give the same resultant. Subtraction is not commutative.

<div class="lesson-check" markdown="1">

### Draw the calculation {#check-vectors}

**Question:** Let $\mathbf u=\binom2{-1}$ and $\mathbf v=\binom13$. On a unit grid draw u followed by v from O, and draw the resultant. Calculate $\mathbf u+\mathbf v$, $\mathbf u-\mathbf v$ and $2\mathbf v-\mathbf u$. From O draw separate head-to-tail routes and resultants for $\mathbf u-\mathbf v$ and $2\mathbf v-\mathbf u$, and draw the single arrow $-2\mathbf v$. Label starts and endpoints; explain the direction and length of the negative multiple. Explain graphically why $\mathbf v+\mathbf u$ has the same endpoint as $\mathbf u+\mathbf v$.

<details markdown="1">
<summary>Hint</summary>

Track the endpoint after each arrow; use subtraction component by component.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The path is $(0,0)\to(2,-1)\to(3,2)$; resultant $\binom32$. The difference is $\binom1{-4}$ and $2\mathbf v-\mathbf u=\binom07$. In reverse order, $(0,0)\to(1,3)\to(3,2)$. The paths form two sides of the same parallelogram and end at the same opposite corner.

For the difference, draw $(0,0)\to(2,-1)\to(1,-4)$: the second arrow is the reverse of v. For the other route, draw $(0,0)\to(2,6)\to(0,7)$; the second arrow is $-\mathbf u=\binom{-2}1$. Draw each resultant directly from O to its final endpoint. The arrow $-2\mathbf v=\binom{-2}{-6}$ goes from O to $(-2,-6)$, opposite to v and twice its length. Multiplying by -2 changes both components, not only the downward/upward one.

</details>

</div>

## Grouping does not reorder arrows {#grouping}

Grouping three consecutive arrows does not change their total movement: this is associativity. It keeps their order; commutativity swaps their order. A subtraction reverses the whole vector being subtracted, so removing brackets after a minus requires reversing every term inside.

<div class="lesson-check" markdown="1">

### Group three arrows {#check-associativity}

**Question:** Use the u and v above and let $\mathbf w=\binom{-2}2$. Calculate $(\mathbf u+\mathbf v)+\mathbf w$ and $\mathbf u+(\mathbf v+\mathbf w)$. Draw the two grouped head-to-tail routes from O, label the intermediate endpoints, and explain which law they demonstrate. Has the order u,v,w changed?

<details markdown="1">
<summary>Hint</summary>

First draw all three consecutive arrows; each pair of brackets replaces two consecutive arrows by their resultant.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$
\mathbf u+\mathbf v=\binom32,\quad\mathbf v+\mathbf w=\binom{-1}5,\quad
(\mathbf u+\mathbf v)+\mathbf w=\binom14=\mathbf u+(\mathbf v+\mathbf w).
$$

The first grouped route is $(0,0)\to(3,2)\to(1,4)$; the second is $(0,0)\to(2,-1)\to(1,4)$. Both condense the same route $(0,0)\to(2,-1)\to(3,2)\to(1,4)$. They demonstrate associativity, not an exchange of u and v: only the grouping changed.

</details>

</div>

## A vector calculation becomes a proof {#proof}

A numerical sketch can suggest parallel lines, but a proof must hold for every shape satisfying the conditions.

<div class="worked-example" markdown="1">

### Why the midpoint line is parallel {#example-proof}

**Question:** In a non-degenerate triangle OAB, M and N are the midpoints of OA and OB. Prove that MN is parallel to AB and half its length.

Write $\overrightarrow{OA}=\mathbf a$, $\overrightarrow{OB}=\mathbf b$. Midpoints give $\overrightarrow{OM}=\frac12\mathbf a$ and $\overrightarrow{ON}=\frac12\mathbf b$. Choose paths with the required start and finish:

$$
\overrightarrow{MN}=\overrightarrow{MO}+\overrightarrow{ON}
=-\tfrac12\mathbf a+\tfrac12\mathbf b
=\tfrac12(\mathbf b-\mathbf a)
=\tfrac12\overrightarrow{AB}.
$$

AB is nonzero because the triangle is non-degenerate. MN is a positive scalar multiple of AB, so it has the same direction and half its length. Therefore MN is parallel to AB. The minus sign comes from MO, not OM. Quoting a midpoint theorem alone would not show the requested vector argument.

</div>

To prove collinearity, use vectors from a common point and show one is a scalar multiple of the other. Parallel direction alone does not show that two separate lines coincide.

<div class="lesson-check" markdown="1">

### A different ratio {#check-proof}

**Question:** OAB is non-degenerate. $\overrightarrow{OA}=\mathbf a$, $\overrightarrow{OB}=\mathbf b$. P lies on OA with $OP:PA=2:1$ and Q lies on OB with $OQ:QB=2:1$. Prove by vectors that PQ is parallel to AB. If R has $\overrightarrow{OR}=2\mathbf b-\mathbf a$, prove that A,B,R are collinear.

<details markdown="1">
<summary>Hint</summary>

Convert part-to-part ratios into fractions of the whole. For the second proof, start both vectors at A.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$\overrightarrow{OP}=\frac23\mathbf a$, $\overrightarrow{OQ}=\frac23\mathbf b$, so $\overrightarrow{PQ}=\frac23(\mathbf b-\mathbf a)=\frac23\overrightarrow{AB}$. Since AB is nonzero, PQ is parallel to AB. Also $\overrightarrow{AR}=\overrightarrow{OR}-\overrightarrow{OA}=2\mathbf b-2\mathbf a=2\overrightarrow{AB}$. Both start at A, so R lies on line AB, beyond B. Using $\frac21$ instead of $\frac23$ places P outside the stated segment.

</details>

</div>

## Build a matrix from a unit square {#unit-square}

Draw O(0,0), A(1,0), B(1,1), C(0,1). This is a unit square. A transformation matrix records the image of A in its **first column** and the image of C in its **second column**, because these are one step along x and one along y.

For a 90° anticlockwise rotation about O, A goes to (0,1), C to (-1,0). Hence

$$
R=\begin{pmatrix}0&-1\\1&0\end{pmatrix},
\quad R\binom xy=\binom{-y}{x}.
$$

B goes to (-1,1), the sum of the two column vectors. Draw all four image vertices and join in order. The following matrices can be reconstructed by testing A and C:

$$
R_{180}=\begin{pmatrix}-1&0\\0&-1\end{pmatrix},
\qquad R_{270}=\begin{pmatrix}0&1\\-1&0\end{pmatrix}.
$$

Here angles are anticlockwise. The four required reflection lines give

$$
F_{x=0}=\begin{pmatrix}-1&0\\0&1\end{pmatrix},
\qquad F_{y=0}=\begin{pmatrix}1&0\\0&-1\end{pmatrix}.
$$

$$
F_{y=x}=\begin{pmatrix}0&1\\1&0\end{pmatrix},
\qquad F_{y=-x}=\begin{pmatrix}0&-1\\-1&0\end{pmatrix}.
$$

An enlargement about O has matrix $kI$. All these matrices fix O. A nonzero translation does not fix O, so it cannot be represented by a $2\times2$ matrix acting on position columns in this way. These are the specified transformation types; arbitrary shears are not an extra required transformation here.

<div class="lesson-check" markdown="1">

### Read and draw a unit square image {#check-square}

**Question:** A transformation sends A(1,0) to (0,-1) and C(0,1) to (-1,0). Find its matrix, describe it fully, and draw the image of OABC. Then draw the image of the original square under enlargement factor $-\frac12$ about O.

<details markdown="1">
<summary>Hint</summary>

Put the given images in columns. Check B separately.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$
F=\begin{pmatrix}0&-1\\-1&0\end{pmatrix}.
$$

It is reflection in $y=-x$. The image vertices O,A',B',C' are $(0,0),(0,-1),(-1,-1),(-1,0)$. For $-\frac12 I$, they are $(0,0),(-\frac12,0),(-\frac12,-\frac12),(0,-\frac12)$. Join each set in order. Transposing the two columns changes the transformation; labels A and C matter.

</details>

</div>

## Which matrix acts first? {#composition}

If F acts first and R acts next, the output is $R(F\mathbf x)=(RF)\mathbf x$. **The matrix on the right acts first.** Matrix multiplication is associative, which lets us remove the grouping; it is generally not commutative.

<div class="worked-example" markdown="1">

### Rotation after reflection {#example-composition}

**Question:** Reflect in $y=0$, then rotate 90° anticlockwise about O. Find one matrix for the combination.

$$
RF=\begin{pmatrix}0&-1\\1&0\end{pmatrix}
\begin{pmatrix}1&0\\0&-1\end{pmatrix}
=\begin{pmatrix}0&1\\1&0\end{pmatrix}.
$$

This is reflection in $y=x$. Check a non-symmetric point: $(2,1)\to(2,-1)\to(1,2)$, which agrees with $RF\binom21=\binom12$. Testing O alone would reveal nothing because every matrix here fixes it.

</div>

<div class="lesson-check" markdown="1">

### Compare the products {#check-composition}

**Question:** F reflects in $x=0$ and R rotates 90° anticlockwise about O. Find the matrix for F then R, and for R then F. Describe each combined transformation. Use (2,3) to check the order.

<details markdown="1">
<summary>Hint</summary>

Write RF for F then R, and calculate both products.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$
RF=\begin{pmatrix}0&-1\\-1&0\end{pmatrix},
\qquad FR=\begin{pmatrix}0&1\\1&0\end{pmatrix}.
$$

RF reflects in $y=-x$, giving $(-3,-2)$; FR reflects in $y=x$, giving $(3,2)$. Direct paths: $(2,3)\to(-2,3)\to(-3,-2)$ and $(2,3)\to(-3,2)\to(3,2)$.

</details>

</div>

## Fix the step that failed {#retry}

Wrong entries: return to [row × column](#matrix-products). Wrong direction: revisit [start and finish](#vectors). An unsupported parallel/collinear claim: revisit [the proof](#proof). Wrong matrix columns or order: return to [the unit square](#unit-square) or [composition](#composition). Close all old solutions first.

If the difference or negative multiple was drawn incorrectly, reverse the appropriate arrow in [the vector construction](#vectors), then do [the new route](#retry-vectors). If grouping was confused with swapping or subtraction, reread [grouping](#grouping), then try [the three-arrow retry](#retry-associativity).

<div class="lesson-check" markdown="1">

### Retry multiplication {#retry-products}

**Question:** For $A$ and $B$ below find $AB$, $3B$ and $IB$.
$$
A=\begin{pmatrix}1&-2\\0&1\end{pmatrix},\quad
B=\begin{pmatrix}2&1\\-1&0\end{pmatrix}.
$$

<details markdown="1">
<summary>Hint</summary>

Check the upper left by $1(2)+(-2)(-1)$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$
AB=\begin{pmatrix}4&1\\-1&0\end{pmatrix},
\quad 3B=\begin{pmatrix}6&3\\-3&0\end{pmatrix},\quad IB=B.
$$
The upper left is 4, not 2: both terms contribute.

</details>

</div>

<div class="lesson-check" markdown="1">

### Retry a directed route {#retry-vectors}

**Question:** A(1,-1), B(4,2), C(0,3). Draw AB then BC. Find AB, BC and AC as columns and verify the route identity. Now let s=AB and t=BC as directed vectors. On separate unit grids starting at O, draw the head-to-tail route and resultant for s-t and for 2t-s, and the single arrow -2t. Give all intermediate endpoints and explain each reversed arrow.

<details markdown="1">
<summary>Hint</summary>

Finish minus start for each arrow.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$\overrightarrow{AB}=\binom33$, $\overrightarrow{BC}=\binom{-4}1$, $\overrightarrow{AC}=\binom{-1}4$. Their sum verifies $\overrightarrow{AB}+\overrightarrow{BC}=\overrightarrow{AC}$. Draw the resultant from A, not from O.

For the separate grids, translate these vectors to O. The difference route is $(0,0)\to(3,3)\to(7,2)$, adding $-\mathbf t=\binom4{-1}$; resultant $\binom72$. The second route is $(0,0)\to(-8,2)\to(-11,-1)$, adding $-\mathbf s=\binom{-3}{-3}$; resultant $\binom{-11}{-1}$. The arrow $-2\mathbf t=\binom8{-2}$ ends at $(8,-2)$, opposite to t and twice its length. The original A-to-C resultant and these O-based drawings have different specified starting points.

</details>

</div>

<div class="lesson-check" markdown="1">

### Retry grouping rather than swapping {#retry-associativity}

**Question:** Let $\mathbf r=\binom1{-2}$, $\mathbf s=\binom{-3}1$, $\mathbf t=\binom24$. Calculate and draw both $(\mathbf r+\mathbf s)+\mathbf t$ and $\mathbf r+(\mathbf s+\mathbf t)$ from O, labelling intermediate endpoints. A learner uses associativity to claim $\mathbf r-(\mathbf s+\mathbf t)=(\mathbf r-\mathbf s)+\mathbf t$. Calculate both sides and correct the claim.

<details markdown="1">
<summary>Hint</summary>

Grouping a sum keeps all three directed movements. A minus before a bracket reverses the complete sum.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$
\mathbf r+\mathbf s=\binom{-2}{-1},\quad\mathbf s+\mathbf t=\binom{-1}5,\quad
(\mathbf r+\mathbf s)+\mathbf t=\binom03=\mathbf r+(\mathbf s+\mathbf t).
$$

Draw $(0,0)\to(-2,-1)\to(0,3)$ and $(0,0)\to(1,-2)\to(0,3)$. Both group the route $(0,0)\to(1,-2)\to(-2,-1)\to(0,3)$ without reordering it.

$$
\mathbf r-(\mathbf s+\mathbf t)=\binom2{-7},\qquad
(\mathbf r-\mathbf s)+\mathbf t=\binom61.
$$

They differ. The corrected identity is $\mathbf r-(\mathbf s+\mathbf t)=\mathbf r-\mathbf s-\mathbf t$: both s and t must reverse. Associativity of addition does not justify changing a subtraction sign.

</details>

</div>

<div class="lesson-check" markdown="1">

### Retry the argument {#retry-proof}

**Question:** In non-degenerate triangle OAB, P and Q lie one quarter of the way from O to A and B. Prove PQ is parallel to AB. If $\overrightarrow{OS}=3\mathbf b-2\mathbf a$, prove A,B,S are collinear.

<details markdown="1">
<summary>Hint</summary>

Use a common start for collinearity.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$\overrightarrow{PQ}=\frac14(\mathbf b-\mathbf a)=\frac14\overrightarrow{AB}$; AB is nonzero, so the lines are parallel. $\overrightarrow{AS}=3\mathbf b-3\mathbf a=3\overrightarrow{AB}$, so A,B,S lie on one line. The argument works for arbitrary non-degenerate triangles, not only one plotted example.

</details>

</div>

<div class="lesson-check" markdown="1">

### Retry the columns {#retry-square}

**Question:** A unit-square transformation sends (1,0) to (0,1) and (0,1) to (1,0). Find its matrix, name the transformation and draw all image vertices.

<details markdown="1">
<summary>Hint</summary>

Write the images as columns in the given order.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$
M=\begin{pmatrix}0&1\\1&0\end{pmatrix}.
$$
Reflection in $y=x$; O,A',B',C' are $(0,0),(0,1),(1,1),(1,0)$. B remains fixed; it lies on the mirror line.

</details>

</div>

<div class="lesson-check" markdown="1">

### Retry a combination {#retry-composition}

**Question:** S is reflection in y=x and R is a 90° clockwise rotation about O. Find the matrix for S then R and the matrix for R then S. Describe each combination. Check both orders on (2,1), keeping the intermediate point.

<details markdown="1">
<summary>Hint</summary>

The first operation acts on the column first, so its matrix is on the right. Use two distinct products.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$
S=\begin{pmatrix}0&1\\1&0\end{pmatrix},\quad
R=\begin{pmatrix}0&1\\-1&0\end{pmatrix},
$$

$$
RS=\begin{pmatrix}1&0\\0&-1\end{pmatrix},\qquad
SR=\begin{pmatrix}-1&0\\0&1\end{pmatrix}.
$$
S then R gives reflection in $y=0$: $(2,1)\to(1,2)\to(2,-1)$. R then S gives reflection in $x=0$: $(2,1)\to(1,-2)\to(-2,1)$. The unequal products and endpoints expose an order reversal; checking only O would not.

</details>

</div>

## A later connection {#next-step}

After another topic, return to the problem below. Use [mixed geometry review](/igcse/mathematics/mixed-review/#geometry-review) and [transformations](/igcse/mathematics/transformations/#retry) to revisit the same ideas without relying on memorised matrix entries.

<div class="lesson-check" markdown="1">

### Rebuild, don't recall {#later-check}

**Question:** A transformation sends each point (x,y) to (-y,-x). Rebuild its matrix from the unit square. Find the image of the movement $\binom{3}{-2}$. Does applying the transformation twice return every point to its original position? Show why.

<details markdown="1">
<summary>Hint</summary>

Compute the square of the matrix, not just one point's return.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$
M=\begin{pmatrix}0&-1\\-1&0\end{pmatrix},\quad
M\binom3{-2}=\binom2{-3},\quad
M^2=I.
$$
Therefore $M^2\binom xy=\binom xy$ for every point. This proves the return generally; one test point would only be a check.

</details>

</div>

## Scope and sources {#sources}

<details markdown="1">
<summary>Scope and actual reading</summary>

OxfordAQA International GCSE Mathematics 9260 v5.1, [G22–26, specification PDF 22, printed 23](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-gcse-mathematics-specification.pdf#page=22). This includes vector geometry, G23 multiplication (2×2 by 2×2 or 2×1, and scalar multiplication) and G24 identity. Required transformation matrices are the stated 90°/180°/270° rotations about O, four mirror lines through O, and enlargements about O. Determinants, inverses, dot products and i/j notation are not added requirements.

Read: Specimen 2018 1E Q4, QP PDF 3/MS PDF 4; Q16, [QP PDF 14–15](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9260-92601E-international-gcse-mathematics-specimen-paper-2016-v1.pdf#page=14)/[MS PDF 8](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9260-92601E-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=8). For complete vector parallelism evidence: 2E Q27, [QP PDF 24](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9260-92602E-international-gcse-mathematics-specimen-paper-2016-v1.pdf#page=24)/[MS PDF 15](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9260-92602E-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=15). All tasks here are self-written, with no official marks. Covers identify Specimen 2018.

</details>
