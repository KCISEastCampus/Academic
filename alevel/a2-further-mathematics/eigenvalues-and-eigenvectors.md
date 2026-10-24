---
title: Eigenvalues and Eigenvectors
layout: subjects
mathjax: true
grade: a2
subject: a2-further-mathematics
permalink: /alevel/a2-further-mathematics/eigenvalues-and-eigenvectors/
toc_headings: "#definition, #characteristic-equation, #two-by-two, #three-by-three, #repeated-eigenvalues, #invariant-directions, #practice, #repeated-retry, #common-pitfalls, #sources"
study_page: true
reading_layout: true
---

[Further Pure Mathematics](/alevel/a2-further-mathematics/) · FP2.13 Eigenvalues and eigenvectors

A matrix usually changes a vector's length and direction. Some vectors are only stretched, shortened or reversed along their original line. How can we find these special vectors?

- **Learning:** start with the [definition](#definition), derive the [characteristic equation](#characteristic-equation), then compare [second-order](#two-by-two) and [third-order](#three-by-three) examples.
- **Homework help:** see [a parameter and roots](#parameter-example), [repeated eigenvalues](#repeated-eigenvalues) and [the link to invariant lines](#invariant-directions).
- **Revision:** attempt the [mixed practice](#practice), then the [independent retry](#independent-retry) with the explanations closed.

**Goals:** form and expand second- and third-order characteristic equations; find real eigenvalues and their nonzero eigenvectors; explain zero, negative and repeated eigenvalues; verify the number of independent directions from equations rather than root multiplicity.

**Before you start:** complete [matrix algebra](/alevel/a2-further-mathematics/matrix-algebra/), [linear equations](/alevel/a2-further-mathematics/linear-equations/) and [roots and polynomials](/alevel/a2-further-mathematics/roots-and-polynomials/). You need determinants, homogeneous equations, factorisation and roots–coefficients relationships. FP2.13 considers **real eigenvalues**, including repeated values; diagonalisation is not needed for this lesson.

A general real matrix can also have non-real eigenvalues; this lesson stays within the real-eigenvalue cases specified for FP2.13. All free parameters below are real.

If matrix–vector multiplication is insecure, recover [row–column multiplication](/alevel/as-further-mathematics/matrix-algebra/#demonstration), then retry the [image check](#image-check). If free parameters or the nonzero restriction are unclear, complete [homogeneous-system Question 6](/alevel/a2-further-mathematics/linear-equations/#question-6). If coefficient comparison fails, recover [roots and coefficients](/alevel/a2-further-mathematics/roots-and-polynomials/#roots-and-coefficients), then reconstruct the parameter example.

## Definition and first checks {#definition}

Start by comparing two vectors under the same transformation. The **image** of a vector means its output after multiplication by the matrix.

<section class="worked-example" markdown="1">

### Compare two outputs {#direction-start}

**Self-written illustration.** Compare the images of the two vectors under

$$D_0=\begin{pmatrix}2&0\\0&3\end{pmatrix}.$$

$$\mathbf p=\begin{pmatrix}1\\0\end{pmatrix},\qquad
\mathbf q=\begin{pmatrix}1\\1\end{pmatrix}.$$

Multiply one row at a time:

$$\begin{aligned}
D_0\mathbf p&=\begin{pmatrix}2(1)+0(0)\\0(1)+3(0)\end{pmatrix}\\
&=\begin{pmatrix}2\\0\end{pmatrix}=2\mathbf p.
\end{aligned}$$

The first vector stays on the horizontal axis and becomes twice as long.

$$\begin{aligned}
D_0\mathbf q&=\begin{pmatrix}2(1)+0(1)\\0(1)+3(1)\end{pmatrix}\\
&=\begin{pmatrix}2\\3\end{pmatrix}.
\end{aligned}$$

The second vector starts with equal components, but its output has unequal components. No single number multiplies both input components to give that output. Its direction has changed.

</section>

The first vector is called an **eigenvector**, and its multiplier 2 is the corresponding **eigenvalue**. More generally, for a real square matrix A:

$$\boxed{A\mathbf v=\lambda\mathbf v,\qquad\mathbf v\ne\mathbf0.}$$

Read this as “multiplying the vector by A gives the same result as multiplying it by the number lambda”. That number is also called a scalar.

The vector itself must not be zero: the zero vector satisfies the equation for every number, so it tells us no special direction. The **eigenvalue** may be zero: a nonzero vector can be sent to zero. Such a matrix cannot undo the transformation and is called singular.

- A positive eigenvalue scales along the same ray.
- A negative eigenvalue reverses the ray but retains its supporting line through the origin.
- Eigenvalue 1 fixes every point along that direction.
- Eigenvalue 0 collapses that direction to the origin.

<section class="lesson-check" markdown="1">

### Check an image {#image-check}

**Original diagnostic.** For the following matrix, calculate the images of both given vectors. Which is an eigenvector, and what is its eigenvalue?

$$A=\begin{pmatrix}2&1\\1&2\end{pmatrix},\qquad
\mathbf u=\begin{pmatrix}1\\1\end{pmatrix},\qquad
\mathbf w=\begin{pmatrix}1\\0\end{pmatrix}.$$

<details markdown="1">
<summary>Solution and feedback</summary>

$$A\mathbf u=\begin{pmatrix}3\\3\end{pmatrix}=3\mathbf u,\qquad
A\mathbf w=\begin{pmatrix}2\\1\end{pmatrix}.$$

The first vector is an eigenvector with eigenvalue 3. The second image is not a multiple of the second input vector, so that input is not an eigenvector. A ratio test must include zero components; dividing only the nonzero first components would miss the contradiction in the second component.

</details>

</section>

## Deriving the characteristic equation {#characteristic-equation}

Checking a given vector is straightforward. To find all possible eigenvalues, we need an equation for the unknown multiplier. Move everything to the left; I is the identity matrix, so multiplying by it leaves a vector unchanged:

$$A\mathbf v=\lambda\mathbf v
\quad\Longleftrightarrow\quad(A-\lambda I)\mathbf v=\mathbf0.$$

This is a set of simultaneous equations with zero on the right, called a **homogeneous system**. If its coefficient matrix had an inverse, multiplying by that inverse would give only the zero vector. We need a **nonzero** vector, so the coefficient matrix must have no inverse: its determinant must be zero. Conversely, a square matrix with determinant zero does give a nonzero solution to this homogeneous system. This gives the **characteristic equation**:

$$\boxed{\det(A-\lambda I)=0.}$$

Subtract the scalar only from diagonal entries. The alternative determinant convention is equally valid:

$$\det(\lambda I-A)=(-1)^n\det(A-\lambda I),\qquad A\text{ of order }n.$$

For a third-order matrix the polynomials have opposite signs, but the same roots. Keep one convention throughout a roots–coefficients argument.

### Solving after finding a root {#finding-vectors}

For each eigenvalue, substitute it into the homogeneous equations, express all solutions using free parameters, exclude the all-zero choice, and verify by multiplication. Never invert the coefficient matrix at an eigenvalue: it is deliberately singular.

$$A\mathbf v=\lambda\mathbf v\quad\Longrightarrow\quad
A(q\mathbf v)=\lambda(q\mathbf v),\qquad q\ne0.$$

Every nonzero scalar multiple is another eigenvector for the same eigenvalue. Unit length is required only if the question requests it. Choose integer components when convenient.

<section class="worked-example" markdown="1">

## Second-order example {#two-by-two}

For the diagnostic matrix, expand the determinant:

$$\det(A-\lambda I)
=\det\begin{pmatrix}2-\lambda&1\\1&2-\lambda\end{pmatrix}
=(2-\lambda)^2-1=(\lambda-3)(\lambda-1).$$

At the first root, solve the system:

$$\lambda=3:\quad -x+y=0,\quad x-y=0
\quad\Longrightarrow\quad\mathbf v=t\begin{pmatrix}1\\1\end{pmatrix},\quad t\ne0.$$

Set the determinant equal to zero to obtain roots 1 and 3. The equations above give every nonzero vector for root 3; choose t=1 for a direct check:

$$A\begin{pmatrix}1\\1\end{pmatrix}=\begin{pmatrix}3\\3\end{pmatrix}=3\begin{pmatrix}1\\1\end{pmatrix}.$$

</section>

<section class="lesson-check" markdown="1">

### Pause: solve the other root {#other-root-task}

**Original completion task.** Find all eigenvectors for the other root and check one directly.

<details markdown="1">
<summary>Hint</summary>

Write the two homogeneous equations. They express the same constraint, so one free parameter remains.

</details>

<details markdown="1">
<summary>Solution</summary>

$$\lambda=1:\quad x+y=0,\quad
\mathbf v=t\begin{pmatrix}1\\-1\end{pmatrix},\quad t\ne0,\qquad
A\begin{pmatrix}1\\-1\end{pmatrix}=\begin{pmatrix}1\\-1\end{pmatrix}.$$

The supporting line is fixed pointwise. The eigenvectors for eigenvalue 3 lie on a line mapped onto itself, with its nonzero points moving.

</details>

</section>

## Third-order matrices and a parameter {#three-by-three}

<section class="worked-example" markdown="1">

### Adapted example: characteristic equation to a geometric direction {#parameter-example}

**Adapted example — OxfordAQA 9665/FM03 June 2024 Q11(b), MS pp.16–17.** The matrix and roots condition have been changed. Let

$$M_c=\begin{pmatrix}c&0&0\\0&2&1\\0&1&2\end{pmatrix}.$$

> The three distinct eigenvalues have pairwise-product sum 11. Show that $c=2$, find the three eigenvalues, and find an eigenvector corresponding to the least eigenvalue. Establish the characteristic equation before using the roots condition.

Expand along the first row. For a monic cubic, the coefficient of the linear term is the sum of the three pairwise products. After finding the least root, solve all three component equations.


Use the monic convention for a direct coefficient comparison:

$$\begin{aligned}
\det(\lambda I-M_c)
&=(\lambda-c)\big((\lambda-2)^2-1\big)\\
&=(\lambda-c)(\lambda-1)(\lambda-3)\\
&=\lambda^3-(c+4)\lambda^2+(4c+3)\lambda-3c.
\end{aligned}$$

The stated condition gives

$$\lambda_1\lambda_2+\lambda_1\lambda_3+\lambda_2\lambda_3=4c+3=11
\quad\Longrightarrow\quad c=2.$$

The factorisation now gives distinct eigenvalues

$$\lambda=1,\ 2,\ 3.$$

For the least eigenvalue, the component equations are

$$\lambda=1:\quad x=0,\quad y+z=0,\quad y+z=0.$$

Hence all its eigenvectors and one multiplication check are

$$\mathbf v=t\begin{pmatrix}0\\1\\-1\end{pmatrix},\quad t\ne0,\qquad
M_2\begin{pmatrix}0\\1\\-1\end{pmatrix}=\begin{pmatrix}0\\1\\-1\end{pmatrix}.$$

The zero first component causes no problem; the complete vector is nonzero. The characteristic equation and coefficient comparison establish the parameter for all possibilities, whereas testing a guessed parameter would not prove “show that”.

</section>

### A check using trace and determinant {#coefficient-checks}

For second-order and third-order matrices, expanding the monic characteristic polynomial shows that the eigenvalue sum equals the sum of diagonal entries (the **trace**), and the product equals the determinant. Count repeated roots with their multiplicities:

$$\lambda_1+\lambda_2=\operatorname{tr}A,\qquad
\lambda_1\lambda_2=\det A\qquad(n=2).$$

$$\lambda_1+\lambda_2+\lambda_3=\operatorname{tr}A,\qquad
\lambda_1\lambda_2\lambda_3=\det A\qquad(n=3).$$

In the example the sum is 6 and the product is 6. These checks can expose an expansion sign error; they do not supply eigenvectors or replace a requested characteristic-equation derivation.

## Repeated eigenvalues {#repeated-eigenvalues}

A root's **algebraic multiplicity** is the number of times its factor occurs in the characteristic polynomial. It does **not** tell you how many independent eigenvectors exist. Vectors are independent if none in the chosen collection is a combination of the others; scalar multiples provide only one independent direction.

<section class="worked-example" markdown="1">

### The same repeated root, different solution families {#repeated-comparison}

**Original comparison.** Consider

$$B=\begin{pmatrix}2&1\\0&2\end{pmatrix},\qquad
C=\begin{pmatrix}2&0\\0&2\end{pmatrix}.$$

Both have the same characteristic equation:

$$\det(B-\lambda I)=\det(C-\lambda I)=(2-\lambda)^2=0.$$

For B at eigenvalue 2, the equations give

$$\begin{pmatrix}0&1\\0&0\end{pmatrix}\begin{pmatrix}x\\y\end{pmatrix}=\mathbf0
\quad\Longrightarrow\quad y=0,\qquad
\mathbf v=t\begin{pmatrix}1\\0\end{pmatrix},\quad t\ne0.$$

There is only one independent direction. For C, the homogeneous equations impose no restrictions:

$$C\mathbf v=2\mathbf v\quad\text{for every }\mathbf v\ne\mathbf0.$$

Two independent examples are the two coordinate unit vectors. There are infinitely many eigenvectors in both examples, but the numbers of independent directions are different. Repeating a vector or multiplying it by another number does not create independence.

</section>

<section class="lesson-check" markdown="1">

### Third-order repeated-root task {#repeated-three-by-three}

**Original task.** Find all eigenvectors of the following matrix. State the maximum number of independent eigenvectors associated with each eigenvalue.

$$F=\begin{pmatrix}2&0&0\\0&2&0\\0&0&3\end{pmatrix}.$$

<details markdown="1">
<summary>Hint</summary>

The determinant factors immediately, but finish the homogeneous systems. The repeated root permits two free components in this particular matrix.

</details>

<details markdown="1">
<summary>Solution</summary>

$$\det(\lambda I-F)=(\lambda-2)^2(\lambda-3)=0.$$

$$\lambda=2:\quad z=0,\quad
\mathbf v=\begin{pmatrix}a\\b\\0\end{pmatrix},\quad(a,b)\ne(0,0).$$

At most two vectors in that plane are independent; the x and y coordinate unit vectors are an example. For the other eigenvalue,

$$\lambda=3:\quad x=y=0,\quad
\mathbf v=t\begin{pmatrix}0\\0\\1\end{pmatrix},\quad t\ne0.$$

There is one independent direction. This follows from the component equations; it is not inferred from multiplicity alone. No diagonalisation theorem is required.

</details>

</section>

## Eigenvectors and invariant directions {#invariant-directions}

For a line through the origin with direction vector an eigenvector, a general point is transformed as follows:

$$L:\mathbf r=t\mathbf v,\qquad A(t\mathbf v)=\lambda t\mathbf v.$$

If the eigenvalue is nonzero, all real line parameters are attained, so the line maps **onto itself**. A negative eigenvalue reverses its parameter direction. A zero eigenvalue collapses it to the origin. Eigenvalue 1 gives pointwise fixation.

For a line away from the origin, a parallel image direction alone is insufficient. Reuse both conditions from matrix algebra:

$$L:\mathbf r=\mathbf a+t\mathbf v,\qquad
A\mathbf v=\lambda\mathbf v,\qquad
A\mathbf a-\mathbf a=\nu\mathbf v.$$

The additional base-point condition keeps the image on the same line; a nonzero eigenvalue then makes the image the whole line. Thus eigenvectors describe directions through the origin, not every invariant offset line by themselves.

## Mixed practice {#practice}

All tasks below are original and have no official marks. Attempt each before opening a hint. Where asked to “show”, display the calculation that establishes the statement.

<section class="lesson-check" markdown="1">

### Question 1: diagnose three proposed eigenvectors {#practice-1}

> For A in the second-order example, a student lists the zero vector, $(1,-1)$ with eigenvalue 3, and $(2,2)$ with eigenvalue 3. Identify every error and justify your decision by multiplication or by the definition.

<details markdown="1">
<summary>Hint</summary>

The zero vector is excluded. A correct eigenvector can still be paired with the wrong eigenvalue.

</details>

<details markdown="1">
<summary>Solution</summary>

The zero vector is never an eigenvector. The other checks are

$$A\begin{pmatrix}1\\-1\end{pmatrix}=\begin{pmatrix}1\\-1\end{pmatrix}
\ne3\begin{pmatrix}1\\-1\end{pmatrix},\qquad
A\begin{pmatrix}2\\2\end{pmatrix}=\begin{pmatrix}6\\6\end{pmatrix}=3\begin{pmatrix}2\\2\end{pmatrix}.$$

The second candidate is an eigenvector for eigenvalue 1, not 3; the third is correct. A non-unit vector is allowed.

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 2: zero and negative values {#practice-2}

> Find all real eigenvalues and eigenvectors of G below. Explain the effect on each corresponding line through the origin and find all fixed points.

$$G=\begin{pmatrix}0&0&0\\0&-2&0\\0&0&1\end{pmatrix}.$$

<details markdown="1">
<summary>Hint</summary>

Keep the zero root. For fixed points, solve the equation with multiplier 1, also including the zero vector as a point.

</details>

<details markdown="1">
<summary>Solution</summary>

$$\det(\lambda I-G)=\lambda(\lambda+2)(\lambda-1)=0.$$

$$\begin{aligned}
\lambda=0&:\quad\mathbf v=t\begin{pmatrix}1\\0\\0\end{pmatrix},\quad t\ne0,\\
\lambda=-2&:\quad\mathbf v=t\begin{pmatrix}0\\1\\0\end{pmatrix},\quad t\ne0,\\
\lambda=1&:\quad\mathbf v=t\begin{pmatrix}0\\0\\1\end{pmatrix},\quad t\ne0.
\end{aligned}$$

The x-axis collapses to the origin. The y-axis maps onto itself with reversed direction and doubled lengths. The z-axis is fixed pointwise. All fixed points are

$$\mathbf r=t\begin{pmatrix}0\\0\\1\end{pmatrix},\qquad t\in\mathbb R.$$

The origin is a fixed point even though it is not an eigenvector.

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 3: do not count repeated factors as vectors {#practice-3}

> Show that J below has a repeated real eigenvalue. Find all eigenvectors for each eigenvalue and state how many independent directions belong to the repeated one. Check an eigenvector directly.

$$J=\begin{pmatrix}2&1&0\\0&2&0\\0&0&3\end{pmatrix}.$$

<details markdown="1">
<summary>Hint</summary>

At the repeated root, retain the first row's constraint; it does not disappear just because the diagonal entry becomes zero.

</details>

<details markdown="1">
<summary>Solution</summary>

$$\det(\lambda I-J)=(\lambda-2)^2(\lambda-3)=0.$$

For the repeated eigenvalue the equations force both the second and third components to be zero:

$$\lambda=2:\quad y=z=0,\quad
\mathbf v=t\begin{pmatrix}1\\0\\0\end{pmatrix},\quad t\ne0.$$

There is only one independent direction, despite multiplicity 2. For the other eigenvalue,

$$\lambda=3:\quad -x+y=0,\quad -y=0,\quad
\mathbf v=t\begin{pmatrix}0\\0\\1\end{pmatrix},\quad t\ne0.$$

For example,

$$J\begin{pmatrix}1\\0\\0\end{pmatrix}=2\begin{pmatrix}1\\0\\0\end{pmatrix}.$$

Compare this matrix with F: the characteristic polynomials agree, but their eigenvector families for the repeated root do not.

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 4: recover a parameter without trial values {#practice-4}

> For M_c in the adapted example, the product of all three eigenvalues, counted with multiplicity, is 9. Determine c. Then find all eigenvectors for every distinct eigenvalue, including any repeated eigenvalue. Do not assume that the earlier distinct-root condition still holds.

<details markdown="1">
<summary>Hint</summary>

Use the constant term of the monic polynomial or the determinant. Re-solve the homogeneous equations at the new parameter value.

</details>

<details markdown="1">
<summary>Solution</summary>

$$3c=9\quad\Longrightarrow\quad c=3,\qquad
\det(\lambda I-M_3)=(\lambda-3)^2(\lambda-1).$$

$$\lambda=3:\quad z=y,\quad
\mathbf v=\begin{pmatrix}a\\b\\b\end{pmatrix},\quad(a,b)\ne(0,0).$$

There are two independent directions here. At the remaining root,

$$\lambda=1:\quad x=0,\ z=-y,\quad
\mathbf v=t\begin{pmatrix}0\\1\\-1\end{pmatrix},\quad t\ne0.$$

Changing the condition changes both the parameter and the multiplicities. The preceding example's distinct-root assumption cannot be carried over.

</details>

</section>

<section class="lesson-check" markdown="1">

## Retry the repeated-root target {#repeated-retry}

If multiplicity was used to count independent vectors, recover the [repeated-root comparison](#repeated-comparison), then use an unseen [Question 3](#practice-3) or [Question 4](#practice-4). If both answers have been seen, attempt this fresh task with help closed. The distinct-root mixed retry does not test this repair.

> **Original task / 自拟题.** For the matrix

$$
T=\begin{pmatrix}4&0&1\\0&4&0\\0&0&4\end{pmatrix},
$$

> derive the characteristic equation and find all eigenvectors. Give a largest independent collection and prove that no larger collection is possible. Compare with $T_0=4I$: the characteristic equations agree, but do the maximum independent collections have the same size? Check representative vectors by multiplication; multiplicity alone is not a justification.

<details markdown="1">
<summary>Hint</summary>

Keep the off-diagonal entry after substituting the root. Find the full family, then prove your chosen vectors are independent and span every solution.

</details>

<details markdown="1">
<summary>Solution</summary>

$$\det(\lambda I-T)=\det\begin{pmatrix}\lambda-4&0&-1\\0&\lambda-4&0\\0&0&\lambda-4\end{pmatrix}=(\lambda-4)^3=0.$$

$$(T-4I)\begin{pmatrix}x\\y\\z\end{pmatrix}=\begin{pmatrix}z\\0\\0\end{pmatrix}=\mathbf0
\iff z=0,\qquad\mathbf v=\begin{pmatrix}a\\b\\0\end{pmatrix},\quad(a,b)\ne(0,0).$$

$$T\mathbf e_x=4\mathbf e_x,\qquad T\mathbf e_y=4\mathbf e_y,\qquad
\mathbf v=a\mathbf e_x+b\mathbf e_y.$$

The two unit vectors are independent: a zero combination forces both coefficients to vanish. Every solution is in their span, so at most two are independent. Multiplicity 3 does not supply a third vector. For the other matrix:

$$\det(\lambda I-T_0)=(\lambda-4)^3=0,\qquad
(T_0-4I)\mathbf v=\mathbf0\quad\text{for every }\mathbf v,\qquad T_0\mathbf e_i=4\mathbf e_i\ (i=x,y,z).$$

Every nonzero vector is now an eigenvector. The three coordinate unit vectors are independent and span space, so the maximum is 3. The same characteristic polynomial gives maxima 2 and 3 because the homogeneous constraints differ.

</details>

</section>

<section class="lesson-check" markdown="1">

## Independent retry {#independent-retry}

**Original task.** A map sends $(x,y,z)$ to $(y,x,2z)$. Construct its matrix and characteristic equation, find all eigenvectors, and identify the lines through the origin that are fixed pointwise. Decide whether the line $(t,t,1)$, with t real, maps onto itself. Choose and explain your own checks.

<details markdown="1">
<summary>Solution — open after an independent attempt</summary>

$$K=\begin{pmatrix}0&1&0\\1&0&0\\0&0&2\end{pmatrix},\qquad
\det(\lambda I-K)=(\lambda^2-1)(\lambda-2).$$

$$\begin{aligned}
\lambda=1&:\quad\mathbf v=t\begin{pmatrix}1\\1\\0\end{pmatrix},\quad t\ne0,\\
\lambda=-1&:\quad\mathbf v=t\begin{pmatrix}1\\-1\\0\end{pmatrix},\quad t\ne0,\\
\lambda=2&:\quad\mathbf v=t\begin{pmatrix}0\\0\\1\end{pmatrix},\quad t\ne0.
\end{aligned}$$

Only the line in the eigenvalue-1 direction is fixed pointwise. For the offset line,

$$K\begin{pmatrix}t\\t\\1\end{pmatrix}=\begin{pmatrix}t\\t\\2\end{pmatrix}.$$

It maps to a different parallel line. Its direction is an eigenvector, but its base point fails the same-line test. The eigenvalue sum is 2 and their product is −2, agreeing with the trace and determinant.

</details>

</section>

## Quick reference {#quick-reference}

| Question | Required evidence |
| --- | --- |
| Is this an eigenvector? | The vector is nonzero and its image is the claimed scalar multiple. |
| Find eigenvalues | Form the characteristic determinant and solve its equation. |
| Find eigenvectors | Solve the singular homogeneous system for each root; exclude the zero choice. |
| Repeated root | Solve its equations; multiplicity does not count independent directions. |
| Check roots | Use trace and determinant, counting multiplicity. |
| Fixed points | Eigenvalue-1 solutions together with the origin. |
| Invariant offset line | Direction condition, base-point condition and no collapse. |

## Common pitfalls and next steps {#common-pitfalls}

- **Subtracting from every entry:** only diagonal entries change in the characteristic matrix.
- **Mixing determinant conventions:** write the monic cubic before comparing roots and coefficients.
- **Accepting the zero vector:** choose a nonzero free parameter, or a parameter pair that is not jointly zero.
- **Rejecting a zero or negative eigenvalue:** inspect the geometry in Practice 2, then check by multiplication.
- **Inventing vectors from multiplicity:** compare B with C, and F with J; solve the actual equations.
- **Checking only one component:** all components must satisfy the same scalar multiplier.

**Next output:** repair a repeated-root error with the [same-target retry](#repeated-retry); use the [mixed independent retry](#independent-retry) for confusion between a direction and an offset line. Write one English explanation distinguishing a repeated root from independent directions. Then complete the course [mixed review](/alevel/a2-further-mathematics/#mixed-review) and, after intervening study, its [later review](/alevel/a2-further-mathematics/#later-review), combining solution sets, eigen-directions and the geometry of a reflection.

**Calculator check / written evidence:** a calculator can check numerical roots and matrix–vector products. It cannot replace a requested determinant expansion, a roots–coefficients proof for a parameter, the nonzero-vector condition or an explanation of repeated roots. This lesson does not add a calculator key sequence or require a diagonalisation theorem.

**Learning path:** [Previous: linear equations](/alevel/a2-further-mathematics/linear-equations/) · [Matrix algebra](/alevel/a2-further-mathematics/matrix-algebra/) · [Further Pure Mathematics](/alevel/a2-further-mathematics/).

## Sources {#sources}

The 9665 specification and June 2024 Q11(b) QP/MS passages listed below were reread on **23 October 2026**. New repeated-root tasks follow the specification and comparable characteristic/homogeneous-system methods; they carry no official marks.

Scope: OxfordAQA International A-level Further Mathematics **9665**, [specification Version 5.2, FP2.13, printed p.21 / PDF p.20](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf#page=20): characteristic equations, eigenvalues and eigenvectors of second- and third-order matrices, real eigenvalues only, including repeated values.

The parameter example adapts the task structure of [June 2024 FM03 Q11(b), QP pp.20–21](/assets/pdf/fx-cg50/references/oxfordaqa-fm03-2024-june-question-paper.pdf), checked against [MS pp.16–17](/assets/pdf/fx-cg50/references/oxfordaqa-fm03-2024-june-mark-scheme.pdf): derive the characteristic equation, connect root coefficients to a condition, find the eigenvalues, then solve for an eigenvector associated with the least value. Its matrix and root condition have been changed; it is not an official question and has no official marks. All other examples and exercises are original. Repeated-root tasks follow the specification's stated scope, rather than assuming that this particular official question tests every case.
