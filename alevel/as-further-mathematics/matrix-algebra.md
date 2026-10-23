---
title: "Matrix algebra and inverse order"
layout: subjects
mathjax: true
grade: as
subject: as-further-mathematics
lang: en
permalink: /alevel/as-further-mathematics/matrix-algebra/
toc_headings: "#start, #model, #demonstration, #transpose, #inverse, #practice, #retry, #later-review, #next-step, #sources"
study_page: true
reading_layout: true
---

[AS Further Mathematics](/alevel/as-further-mathematics/)

Why can changing the order change both the answer and the shape of a calculation? Begin with rows and columns, then use that structure to explain transpose and inverse order. By the end, you should be able to choose valid operations, calculate with rectangular and 3×3 matrices, and justify a 2×2 inverse.

## Before you start {#start}

You need arithmetic with signs, bracket expansion and simultaneous linear equations. If a row–column product goes wrong, write every pair of factors before adding. For equation rearrangement, revisit [AS algebra](/alevel/as-mathematics/algebra/). All tasks are **self-written**, without official marks. Write an attempt before opening either help panel; record any hint used.

## Shape determines the operation {#model}

A matrix is an array with an ordered number of rows and columns. Its shape is rows × columns. Addition and subtraction compare corresponding entries, so the shapes must agree; multiplying by a scalar multiplies every entry. The identity matrix has diagonal ones and other entries zero. It leaves a compatible matrix unchanged.

$$\begin{aligned}I_2&=\begin{pmatrix}1&0\\0&1\end{pmatrix},\\I_3&=\begin{pmatrix}1&0&0\\0&1&0\\0&0&1\end{pmatrix}.\end{aligned}$$

In a product, each row of the first matrix must have as many entries as each column of the second. The matched entries are multiplied and added. The outer dimensions give the answer shape:

$$\begin{aligned}A_{m\times n}B_{n\times p}&=(AB)_{m\times p},\\(AB)_{ij}&=\sum_{k=1}^n A_{ik}B_{kj}.\end{aligned}$$

For a rectangular matrix, the two identity sizes differ:

$$I_mA=A=AI_n.$$

## Follow one row and one column {#demonstration}

<section class="worked-example" markdown="1">

### Rectangular products in both orders

**Demonstration (self-written):** Calculate both products for

$$\begin{aligned}A&=\begin{pmatrix}1&2&0\\-1&0&3\end{pmatrix},\\B&=\begin{pmatrix}1&0\\0&1\\2&-1\end{pmatrix}.\end{aligned}$$

Here A is 2×3 and B is 3×2. Both orders exist, but AB is 2×2 while BA is 3×3. To find the lower-left entry of AB, use row two of A and column one of B:

$$(AB)_{21}=(-1)(1)+0(0)+3(2)=5.$$

The third row of BA uses row three of B, so it is twice row one of A minus row two of A. Continuing the same rule gives

$$AB=\begin{pmatrix}1&2\\5&-3\end{pmatrix}.$$

$$BA=\begin{pmatrix}1&2&0\\-1&0&3\\3&4&-3\end{pmatrix}.$$

Check the last entry of BA: $2(0)+(-1)(3)=-3$. The differing shapes already prove that these products cannot be equal; matrix multiplication is not generally commutative.

</section>

## Why transpose reverses order {#transpose}

Transpose interchanges rows and columns. Transposing a product also exchanges the roles of the row and column, so its order reverses. For every valid pair of compatible matrices, the entry argument is

$$\begin{aligned}((AB)^T)_{ij}&=(AB)_{ji}\\&=\sum_k A_{jk}B_{ki}\\&=\sum_k (B^T)_{ik}(A^T)_{kj}\\&=(B^TA^T)_{ij}.\end{aligned}$$

$$(AB)^T=B^TA^T.$$

The equality of the scalar products in the middle uses commutativity of numbers, not commutativity of matrices. This argument covers rectangular matrices as well.

## An inverse undoes a calculation {#inverse}

For a square matrix, an inverse must undo multiplication on both sides. For a 2×2 matrix, direct multiplication shows why the determinant is the condition:

$$\begin{aligned}C&=\begin{pmatrix}a&b\\c&d\end{pmatrix},\\E&=\begin{pmatrix}d&-b\\-c&a\end{pmatrix}.\end{aligned}$$

$$CE=EC=(ad-bc)I_2.$$

$$\begin{aligned}C^{-1}&=\frac1{ad-bc}\begin{pmatrix}d&-b\\-c&a\end{pmatrix}\end{aligned}$$

$$ad-bc\ne0.$$

If the determinant is zero, the matrix is singular. Its rows are dependent (or zero), so distinct inputs cannot all be recovered; no two-sided inverse exists. A rectangular matrix cannot have a two-sided inverse either. If it has more columns than rows, some distinct inputs have the same output; if it has more rows than columns, some possible outputs cannot be reached. Either obstruction prevents an inverse in both directions. Our arithmetic includes 3×3 matrices; hand calculation of inverses here is limited to 2×2.

<section class="worked-example" markdown="1">

### Check the inverse and its order

For the matrix below, the determinant is $2(1)-1(1)=1$, so the inverse exists:

$$\begin{aligned}C&=\begin{pmatrix}2&1\\1&1\end{pmatrix},\\C^{-1}&=\begin{pmatrix}1&-1\\-1&2\end{pmatrix}.\end{aligned}$$

Multiplying gives $CC^{-1}=C^{-1}C=I_2$. The product CD applies D first, then C. To reverse that action, apply the inverse of C first, then the inverse of D:

$$\begin{aligned}
(CD)(D^{-1}C^{-1})&=C(DD^{-1})C^{-1}\\&=I,\\
(D^{-1}C^{-1})(CD)&=D^{-1}(C^{-1}C)D\\&=I.
\end{aligned}$$

Thus $(CD)^{-1}=D^{-1}C^{-1}$. Associativity permits regrouping; no factors have been swapped. The proof holds for every invertible pair, not just this example.

</section>

<section class="lesson-check" markdown="1">

#### Pause 1 {#scaffold}

**Scaffold (self-written):** For the matrix M below, find $M^T$, $M(1,2,-1)^T$ and $2M-I_3$.

$$M=\begin{pmatrix}1&2&0\\0&-1&3\\4&0&2\end{pmatrix}.$$

<details markdown="1"><summary>Hint</summary>

Write the shape of each answer; transpose swaps indices, whereas a scalar acts on every entry.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$M^T=\begin{pmatrix}1&0&4\\2&-1&0\\0&3&2\end{pmatrix}.$$

$$M\begin{pmatrix}1\\2\\-1\end{pmatrix}=\begin{pmatrix}5\\-5\\2\end{pmatrix}.$$

$$2M-I_3=\begin{pmatrix}1&4&0\\0&-3&6\\8&0&3\end{pmatrix}.$$

For example the middle component is $0(1)+(-1)(2)+3(-1)=-5$. Only diagonal entries lose one in the last operation. If these rules were mixed, revisit [shape and operations](#model), then retry with the solution closed.

</details>

</section>

## Work independently {#practice}

Keep the worked results out of view. Explain both valid and invalid operations; an unsupported final array does not show why it exists.

<section class="lesson-check" markdown="1">

#### Question 1 {#practice-1}

**Independent task (self-written):** Using A, B and C from the demonstration, decide which of $A+B^T$, $A+B$, $A^TB^T$ are defined, and evaluate those that are. For D below, find $(CD)^{-1}$ and verify its order by multiplication. For which k is K singular?

$$D=\begin{pmatrix}1&1\\0&2\end{pmatrix},\qquad K=\begin{pmatrix}k&2\\3&1\end{pmatrix}.$$

<details markdown="1"><summary>Hint</summary>

Write every shape first. For the inverse, either invert CD directly or reverse the individual inverse order; verify the result by obtaining the identity.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$A+B^T=\begin{pmatrix}2&2&2\\-1&1&2\end{pmatrix}.$$

A+B is undefined because its shapes differ. For the transpose product, first match its dimensions:

$$A^TB^T=(BA)^T=\begin{pmatrix}1&-1&3\\2&0&4\\0&3&-3\end{pmatrix}.$$

$$\begin{aligned}CD&=\begin{pmatrix}2&4\\1&3\end{pmatrix},\\D^{-1}&=\begin{pmatrix}1&-1/2\\0&1/2\end{pmatrix}.\end{aligned}$$

$$\begin{aligned}
(CD)^{-1}&=D^{-1}C^{-1}\\
&=\begin{pmatrix}3/2&-2\\-1/2&1\end{pmatrix}.
\end{aligned}$$

Both orders of multiplication with CD give $I_2$, confirming the inverse. For the parameter matrix,

$$\det\begin{pmatrix}k&2\\3&1\end{pmatrix}=k-6=0\Rightarrow k=6.$$

A shape error calls for [retry 1](#retry-shapes); wrong inverse order calls for [retry 2](#retry-order). For a missed singular parameter, revisit [the determinant condition](#inverse), then attempt only the parameter question in [review 1](#review-1) now; leave its composition questions for later.

</details>

</section>

<section class="lesson-check" markdown="1">

#### Question 2 {#practice-2}

**Independent task (self-written):** Using M from the scaffold, calculate $M^2$ and $M^2-2M+I_3$. Explain whether squaring every individual entry would give $M^2$. Check one diagonal and one off-diagonal entry independently.

<details markdown="1"><summary>Hint</summary>

Use row–column products, then ordinary entrywise subtraction for the polynomial in M.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$M^2=\begin{pmatrix}1&0&6\\12&1&3\\12&8&4\end{pmatrix}.$$

$$M^2-2M+I_3=\begin{pmatrix}0&-4&6\\12&4&-3\\4&8&1\end{pmatrix}.$$

The first diagonal entry is $1(1)+2(0)+0(4)=1$; entry (2,1) is $0(1)+(-1)(0)+3(4)=12$. Entrywise squaring would give zero at (2,1), so it is not matrix squaring. If you squared entries, revisit [the row–column demonstration](#demonstration), then use [retry 1](#retry-shapes).

</details>

</section>

## Repair the rule, then retry {#retry}

A failed identity check diagnoses an inverse error; a wrong answer shape diagnoses an earlier dimension error. Return to the linked explanation and close the old answer before retrying.

<section class="lesson-check" markdown="1">

#### Retry 1 {#retry-shapes}

**Retry (self-written):** For U and V below, decide which of UV, VU and U+V exist and calculate the valid results. Verify $(UV)^T=V^TU^T$.

$$U=\begin{pmatrix}1&0&2\end{pmatrix},\qquad V=\begin{pmatrix}2\\-1\\3\end{pmatrix}.$$

<details markdown="1"><summary>Hint</summary>

The first product has one row and one column; the reverse order has three of each.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$\begin{aligned}UV&=\begin{pmatrix}8\end{pmatrix},\\VU&=\begin{pmatrix}2&0&4\\-1&0&-2\\3&0&6\end{pmatrix}.\end{aligned}$$

U+V is undefined. The transpose of the 1×1 matrix stays unchanged, and $V^TU^T=(8)$. If you wrote UV as a bare scalar, retain its 1×1 matrix shape when checking dimensions.

</details>

</section>

<section class="lesson-check" markdown="1">

#### Retry 2 {#retry-order}

**Retry (self-written):** Solve $CX=(1,0)^T$ for X. Is $C^{-1}D^{-1}$ necessarily $(CD)^{-1}$?

<details markdown="1"><summary>Hint</summary>

Left-multiply by the inverse. To disprove a general order claim, one counterexample suffices.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$X=C^{-1}\begin{pmatrix}1\\0\end{pmatrix}=\begin{pmatrix}1\\-1\end{pmatrix}.$$

Check $CX=(1,0)^T$. No: in general the required order is $D^{-1}C^{-1}$.

$$C^{-1}D^{-1}=\begin{pmatrix}1&-1\\-1&3/2\end{pmatrix}.$$

This differs from the inverse found in question 1. Some commuting pairs agree, but cannot establish the general identity.

</details>

</section>

## Return after studying transformations {#later-review}

<section class="lesson-check" markdown="1">

#### Review 1 {#review-1}

**Later review (self-written):** For P and Q below, a vector is multiplied first by P and then by Q. Find the combined matrix and a matrix which restores every original vector. Verify your result for $(1,1)^T$. For which t is $P-tI_2$ singular?

$$P=\begin{pmatrix}1&2\\0&1\end{pmatrix},\qquad Q=\begin{pmatrix}0&-1\\1&0\end{pmatrix}.$$

<details markdown="1"><summary>Hint</summary>

Write the actual action on a vector before choosing the product order.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$\begin{aligned}QP&=\begin{pmatrix}0&-1\\1&2\end{pmatrix},\\(QP)^{-1}&=P^{-1}Q^{-1}\\&=\begin{pmatrix}2&1\\-1&0\end{pmatrix}.\end{aligned}$$

The test vector maps to $(-1,3)^T$ and then returns to $(1,1)^T$. In general both matrix products give $I_2$.

$$\det(P-tI_2)=(1-t)^2=0\Longleftrightarrow t=1.$$

For an order error return to [undoing a product](#inverse); for a missed parameter return to the determinant condition there.

</details>

</section>

## Where to go next {#next-step}

Continue to [transformations](/alevel/as-further-mathematics/transformations/) when you can justify shapes and verify inverse order without help. Then return for [the mixed review](#later-review). If 3×3 arithmetic still fails, redo question 2 after a row–column check; do not replace it with a 2×2 example.

## Sources and scope {#sources}

Scope follows 9665 v5.2. The paired questions and mark schemes below informed the required evidence; these exercises do not reproduce their questions or award official marks.

<details markdown="1"><summary>Official references</summary>

- [OxfordAQA 9665 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf), FPP1.1.
- FM02 June 2024 Q2, Q5(b); QP pp.4–5,11, MS pp.5,11. [FM02 June 2024 QP](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-question-paper.pdf) · [Final MS](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-mark-scheme.pdf).

</details>

[Previous](/alevel/as-further-mathematics/improper-integrals/) · [Course route](/alevel/as-further-mathematics/#learning-route) · [Next](/alevel/as-further-mathematics/transformations/)
