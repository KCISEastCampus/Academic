---
title: Linear Equations and Three Planes
layout: subjects
mathjax: true
grade: a2
subject: a2-further-mathematics
permalink: /alevel/a2-further-mathematics/linear-equations/
toc_headings: "#constraints-and-elimination, #inverse-matrices, #singular-systems, #parameters, #practice, #feedback-and-retry, #continue-learning, #sources"
study_page: true
reading_layout: true
---

[Further Pure Mathematics](/alevel/a2-further-mathematics/) · FP2.14 Solution of linear equations

Decide whether simultaneous linear constraints have one solution, no solution or infinitely many solutions. Connect elimination and inverse matrices to the common points of planes.

- **Learning:** start with [constraints and elimination](#constraints-and-elimination), then compare [inverse matrices](#inverse-matrices), [singular systems](#singular-systems) and [parameters](#parameters).
- **Homework help:** keep exceptional parameter values before dividing; a zero determinant does not decide whether solutions exist.
- **Revision:** attempt [practice](#practice) before opening hints or solutions, then use [feedback and retry](#feedback-and-retry).

**Before you start:** solve two simultaneous equations, interpret [lines and planes](/alevel/a2-further-mathematics/lines-and-planes/), and revise [matrix multiplication and inverses](/alevel/a2-further-mathematics/matrix-algebra/). This lesson covers at most three linear equations in at most three unknowns.

Examples and exercises are self-written unless labelled adapted. No official marks are assigned. The adapted examination example is identified with its question paper and the official mark scheme actually consulted under [sources](#sources).

If two-variable elimination is insecure, begin with the [starting check](#starting-check). If the right side was not transformed, recover [equivalent equations](#equivalent-equations), then retry [Question 2](#question-2). If you can only use a supplied inverse, recover the [third-order inverse demonstration](/alevel/a2-further-mathematics/matrix-algebra/#worked-inverse), then complete the [joint task](#joint-inverse-task) independently. For the geometry, recover [normals and planes](/alevel/a2-further-mathematics/lines-and-planes/#planes).

## Constraints and Elimination {#constraints-and-elimination}

<section class="lesson-check" markdown="1">

### Start with what a solution means {#starting-check}

**Try first.** Find all pairs satisfying $x+y=3$ and $x-y=1$. Explain how you know your answer satisfies both equations.

<details markdown="1">
<summary>Check</summary>

Adding gives $2x=4$, so $x=2$ and $y=1$. Substitution gives $2+1=3$ and $2-1=1$. Neither a point on just one line nor a calculator result without the second check establishes a common solution.

</details>

</section>

A linear equation in three unknowns has the form

$$ax+by+cz=d.$$

When $(a,b,c)\ne(0,0,0)$, its solutions form a plane. A simultaneous solution must satisfy **every** equation: geometrically it belongs to the common intersection, not merely to one pair of planes.

An equation with all three coefficients zero is different. The equation $0=0$ puts no restriction on the unknowns, whereas $0=5$ is impossible. This distinction is central when elimination produces a zero row.

For a system $A\mathbf x=\mathbf b$, each row of $A$ contains the coefficients from one equation, in the same variable order. The right-hand side $\mathbf b$ is part of the problem; identical coefficient matrices can give different solution sets when $\mathbf b$ changes.

### Why elimination preserves solutions {#equivalent-equations}

You may interchange equations, multiply an equation by a **nonzero** number, or replace one equation by itself plus a multiple of another. These operations are reversible, so they preserve the simultaneous solution set. Apply the operation to the right-hand side as well as the coefficients.

Multiplying a row by zero erases a condition. Dividing by an expression containing a parameter is valid only after excluding its zeros and retaining them for separate analysis.

<section class="worked-example" markdown="1">

### Example 1: solve and verify {#example-1}

**Question:** Solve the following system and interpret its solution geometrically.

$$\begin{aligned}
x+y+z&=6 &&(1)\\
2x-y+z&=3 &&(2)\\
x+2y-z&=2 &&(3)
\end{aligned}$$

Subtract twice (1) from (2), and subtract (1) from (3):

$$-3y-z=-9,\qquad y-2z=-4.$$

From the second relation $y=2z-4$. Substitute into the first:

$$-3(2z-4)-z=-9\ \Rightarrow\ -7z=-21\ \Rightarrow\ z=3.$$

Then $y=2$ and $x=1$. Each unknown has been fixed; there is one common point $(1,2,3)$. The three checks are $1+2+3=6$, $2-2+3=3$ and $1+4-3=2$.

</section>

<section class="lesson-check" markdown="1">

### Pause: an equivalent equation {#elimination-pause}

**Complete a step.** If you had obtained $3y+z=9$ instead, would the answer change? Explain before reading on.

<details markdown="1">
<summary>Check</summary>

No: it is the first reduced equation multiplied by $-1$. Replacing $-3y-z=-9$ by $3y+z=-9$ would change the system because the right-hand side was not multiplied too.

</details>

</section>

## Inverse Matrices {#inverse-matrices}

For a square coefficient matrix, $\det A\ne0$ means that $A^{-1}$ exists. Left multiplication gives

$$A\mathbf x=\mathbf b\ \Rightarrow\ A^{-1}A\mathbf x=A^{-1}\mathbf b\ \Rightarrow\ \boxed{\mathbf x=A^{-1}\mathbf b}.$$

The order matters: the unknown is a column vector, and $\mathbf bA^{-1}$ is not a conformable product. Invertibility also proves uniqueness: if $A\mathbf u=A\mathbf v$, multiply by $A^{-1}$ to obtain $\mathbf u=\mathbf v$.

<section class="worked-example" markdown="1">

### Example 2: use a supplied inverse {#example-2}

**Question:** Given the matrices below, verify the supplied inverse and use it to solve $A\mathbf x=\mathbf b$.

$$A=\begin{pmatrix}1&1&0\\0&1&1\\1&0&1\end{pmatrix},\qquad
A^{-1}=\frac12\begin{pmatrix}1&-1&1\\1&1&-1\\-1&1&1\end{pmatrix},\qquad
\mathbf b=\begin{pmatrix}5\\7\\6\end{pmatrix}.$$

Write M for the integer numerator. Row–column multiplication gives:

$$AM=\begin{pmatrix}1+1&-1+1&1-1\\1-1&1+1&-1+1\\1-1&-1+1&1+1\end{pmatrix}=2I,\qquad
MA=\begin{pmatrix}1+1&1-1&-1+1\\1-1&1+1&1-1\\-1+1&-1+1&1+1\end{pmatrix}=2I.$$

Thus the supplied matrix is a two-sided inverse. Left-multiply the right side as requested:

$$\mathbf x=\frac12\begin{pmatrix}5-7+6\\5+7-6\\-5+7+6\end{pmatrix}
=\begin{pmatrix}2\\3\\4\end{pmatrix}.$$

Check $2+3=5$, $3+4=7$ and $2+4=6$. If a question says **use your inverse**, show that multiplication. Although FP2.14 generally permits any solution method, a particular question can require a link to earlier work.

</section>

<section class="lesson-check" markdown="1">

### Joint task: construct the inverse, then use it {#joint-inverse-task}

Complete the matrix lesson's [new-input joint task](/alevel/a2-further-mathematics/matrix-algebra/#inverse-system-task), keeping its hint and solution closed. Construct the inverse from the determinant, all nine cofactors and the transpose, then **use your inverse from (a)** on the right side and classify consistency at the singular parameter. Using a supplied inverse in Example 2 does not complete this output.

Keep your construction from (a) beside the actual matrix multiplication in (b). Substitute into all three original equations and link each parameter case to a unique point, a common line or an empty common set. The question and its separately closed hint and answer have one shared location.

</section>

## Singular Systems and Geometry {#singular-systems}

A square matrix with $\det A=0$ is **singular**. It has no inverse, so the inverse method is unavailable. This does **not** say whether $A\mathbf x=\mathbf b$ is consistent.

<section class="worked-example" markdown="1">

### Example 3: keep the right-hand side {#example-3}

**Question:** Compare the solution sets of the systems below. In system B only the right-hand side of the second equation has changed.

$$\begin{array}{ll}
\text{A:}&x+y+z=1,\quad 2x+2y+2z=2,\quad x-y+z=3,\\
\text{B:}&x+y+z=1,\quad 2x+2y+2z=3,\quad x-y+z=3.
\end{array}$$

In A the second equation repeats twice the first. Subtracting the third equation from the first gives $2y=-2$, hence $y=-1$ and $x+z=2$. All solutions are

$$\boxed{\mathbf x=\begin{pmatrix}2\\-1\\0\end{pmatrix}+t\begin{pmatrix}-1\\0\\1\end{pmatrix},\quad t\in\mathbb R.}$$

There is a common line; two of the listed planes coincide. In B, subtracting twice the first equation from the second gives $0=1$. There are no solutions: those first two planes are distinct and parallel. Both systems have the same singular coefficient matrix.

</section>

### Distinguish common configurations {#plane-configurations}

| Algebraic outcome | Common solution set | Geometric interpretation for three genuine planes |
| --- | --- | --- |
| Every variable fixed | One point | Three independent plane constraints meet at that point. |
| One free parameter | A line | For example, three distinct planes share a line, or a repeated plane meets another. |
| Two free parameters | A plane | All three planes coincide. |
| A contradictory equation | Empty | Distinct parallel planes, or three pairwise-intersecting planes with no common point, are possible. |

![Schematic examples of three planes: a common point, a common line, and pairwise intersections with no common point. Dashed lines distinguish hidden edges; the drawing is not to scale.](/assets/img/further-linear-equations.svg)

The schematic shows possible configurations, not a test by appearance. Derive the common set from equations. “No common point” does not imply “all the planes are parallel”; pairwise intersections can be three parallel lines bounding a triangular prism.

For fewer equations or a zero coefficient row, count the remaining independent restrictions directly. With three unknowns, one genuine plane alone leaves two free parameters. The system of only zero equations has every vector as a solution, provided every right-hand side is also zero.

## Parameters: Separate Exceptional Cases {#parameters}

<section class="worked-example" markdown="1">

### Example 4: one model, three outcomes {#example-4}

**Question:** Discuss all real values of $k$ and $h$ for the following system. Give any infinite family parametrically.

$$\begin{aligned}
x+y+z&=3 &&(1)\\
x+2y+3z&=6 &&(2)\\
2x+3y+(k+4)z&=h &&(3)
\end{aligned}$$

The operation $(3)-(1)-(2)$ gives

$$kz=h-9.$$

Keep the case $k=0$ before dividing.

- If $k\ne0$, the third coordinate is fixed. Subtracting (1) from (2) gives $y+2z=3$, and then (1) gives $x=z$. There is exactly one solution:

$$\boxed{z=\frac{h-9}{k},\quad y=3-\frac{2(h-9)}{k},\quad x=\frac{h-9}{k}.}$$

- If $k=0$ and $h=9$, the reduced equation is $0=0$. The third plane adds no new condition to the first two. The common line is

$$\boxed{\mathbf x=\begin{pmatrix}0\\3\\0\end{pmatrix}+t\begin{pmatrix}1\\-2\\1\end{pmatrix},\quad t\in\mathbb R.}$$

- If $k=0$ and $h\ne9$, the reduced equation is impossible. No point satisfies all three planes. Their normals are pairwise nonparallel, so this is the triangular-prism configuration, not three parallel planes.

Substitute the general family into all three equations when $k=0$, $h=9$: the left sides become $3$, $6$, and $9$, independently of $t$. For $k\ne0$, substitution in (3) gives $9+kz=h$, verifying the remaining constraint.

</section>

<section class="worked-example" markdown="1">

### Example 5: an examination-style justification {#example-5}

**Adapted example:** Based on OxfordAQA 9665/FM03 January 2025 Q8, QP pp.14–15, checked against MS p.13. The task wording is shortened; the equations and parameter are retained. No official mark allocation is implied.

**Question:** The three planes below do not meet at a unique point. Find the possible values of $k$. For $k=3$, justify the number of simultaneous solutions and describe the configuration.

$$\begin{aligned}
2x-y+3z&=1,\\
x+(k-1)y-z&=3,\\
(k-3)x-y+z&=1.
\end{aligned}$$

The coefficient determinant is

$$\begin{aligned}
\det A&=2(k-2)+(1+k-3)+3[-1-(k-1)(k-3)]\\
&=-3k^2+15k-18=-3(k-2)(k-3).
\end{aligned}$$

A nonzero determinant would give a unique solution, contrary to the condition. Hence $k=2$ or $k=3$. This finds the exceptional values; it does not yet classify their consistency.

At $k=3$, subtract twice the second equation from the first to obtain $-5y+5z=-5$. Five times the third gives $-5y+5z=5$. These contradict, so there are **no solutions**. Each pair of normals is nonparallel and the three normals are dependent; the three pairwise intersection lines are parallel, giving the triangular-prism configuration.

</section>

<section class="lesson-check" markdown="1">

### Pause: the other exceptional value {#exceptional-pause}

**Try a further check.** What happens at the other exceptional value, $k=2$?

<details markdown="1">
<summary>Hint</summary>

Compare the second and third equations before doing a long elimination.

</details>

<details markdown="1">
<summary>Solution</summary>

They become $x+y-z=3$ and $-x-y+z=1$. Their left sides sum to zero but their right sides sum to 4. Again there are no solutions. This extra question is self-written; the original paper asks for the detailed classification at $k=3$.

</details>

</section>

## Practice {#practice}

These are self-written tasks. Choose a method unless the question specifies one. For each solution family, substitute it into every original equation; for no solutions, show a contradiction. Keep the answers closed on the first attempt.

<section class="lesson-check" markdown="1">

### Question 1 {#question-1}

Find all solutions of $x+y+z=4$ and $x-y+z=0$. Describe the common set geometrically.

<details markdown="1">
<summary>Hint</summary>

Subtract the equations, then decide whether both remaining unknowns have been fixed.

</details>

<details markdown="1">
<summary>Solution</summary>

Subtracting gives $2y=4$, so $y=2$ and $x+z=2$. Thus

$$\boxed{\mathbf x=\begin{pmatrix}2\\2\\0\end{pmatrix}+t\begin{pmatrix}-1\\0\\1\end{pmatrix},\quad t\in\mathbb R.}$$

Both left sides are respectively 4 and 0 for every real $t$. The two nonparallel planes meet in a line; one point on it is not the complete answer.

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 2 {#question-2}

Solve $x+y+z=1$, $2x-y+z=-4$ and $x+2y-z=3$. Verify the result in all three equations and explain why it is unique.

<details markdown="1">
<summary>Hint</summary>

Eliminate $x$ from the last two equations. Keep the signs on their right-hand sides.

</details>

<details markdown="1">
<summary>Solution</summary>

The reduced equations are $-3y-z=-6$ and $y-2z=2$. Hence $y=2$, $z=0$, $x=-1$. The checks are $-1+2+0=1$, $-2-2+0=-4$, and $-1+4-0=3$. Elimination fixes each variable; equivalently the coefficient determinant is 7, not zero. The unique common point is $(-1,2,0)$.

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 3 {#question-3}

Discuss, for every real $k$, the system $x+y+z=3$, $x+2y+3z=6$, $2x+3y+(k+4)z=9$. A student divides a reduced equation by $k$ and reports one solution for every $k$. Correct the argument.

<details markdown="1">
<summary>Hint</summary>

Form the third equation minus the first two, retaining the case in which division is invalid.

</details>

<details markdown="1">
<summary>Solution</summary>

The reduced equation is $kz=0$. For $k\ne0$, $z=0$, $y=3$, $x=0$, so the common point is $(0,3,0)$. For $k=0$ it gives no restriction: every point $(t,3-2t,t)$ is a solution. The reported point still satisfies the equations at zero, but it omits the rest of the common line. Being a valid solution is different from being the only solution.

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 4 {#question-4}

Three planes have equations $x+y+z=1$, $x+2y+3z=2$, $2x+3y+4z=5$. A student states: “The determinant is zero, so the three planes are parallel.” Evaluate both the algebraic conclusion and the geometric claim.

<details markdown="1">
<summary>Hint</summary>

Compare the third equation with the sum of the first two; compare each pair of normal vectors separately.

</details>

<details markdown="1">
<summary>Solution</summary>

The first two equations imply $2x+3y+4z=3$, contradicting the third. There are no common solutions. The determinant is indeed zero because the third coefficient row is the sum of the first two, but none of the normals $(1,1,1)$, $(1,2,3)$, $(2,3,4)$ is proportional to another. Every pair of planes intersects; their three parallel intersection lines form the triangular-prism configuration. The geometric claim is false.

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 5 {#question-5}

The first two planes are $x+y+z=3$ and $x+2y+3z=6$. Construct a third plane for each outcome: one common point; one common line; no common point while every pair of planes intersects. Justify your choices.

<details markdown="1">
<summary>Hint</summary>

First express their intersection parametrically. Substitute this family into each proposed third plane.

</details>

<details markdown="1">
<summary>Solution</summary>

The intersection is $(t,3-2t,t)$. One possible set of choices is:

- $x=0$: fixes $t=0$, hence the single common point $(0,3,0)$.
- $2x+3y+4z=9$: satisfied by every $t$, hence the entire common line remains.
- $2x+3y+4z=10$: its left side is always 9 on the common line, so there is no common point. Its normal $(2,3,4)$ is parallel to neither original normal, hence every pair still intersects.

Many choices are possible. A proposed answer must establish the common set and any additional pairwise condition, not merely quote a determinant.

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 6 {#question-6}

Solve $B\mathbf v=\mathbf0$ for the matrix below. State precisely how the solution set changes if $\mathbf v$ must be nonzero.

$$B=\begin{pmatrix}0&1&0\\0&0&0\\0&0&1\end{pmatrix}.$$

<details markdown="1">
<summary>Hint</summary>

Write one scalar equation for each row, including the row whose coefficients are all zero.

</details>

<details markdown="1">
<summary>Solution</summary>

The equations are $v_2=0$, $0=0$, $v_3=0$. Hence $\mathbf v=(t,0,0)$ for every real $t$. Requiring a nonzero vector excludes only $t=0$, not the whole line of directions. This distinction will matter when finding eigenvectors.

</details>

</section>

## Feedback and Retry {#feedback-and-retry}

| If your work shows… | Diagnose the cause | What to do next |
| --- | --- | --- |
| “Zero determinant means no solutions” | Singularity was confused with inconsistency. | Compare both systems in Example 3, including their right-hand sides. |
| One point given for an infinite family | A free parameter was arbitrarily fixed. | Parametrise the common set and substitute every parameter value symbolically. |
| A missing exceptional parameter | Division removed a possible case. | Split into zero/nonzero cases before dividing. |
| “No solution means parallel planes” | A common intersection was confused with pairwise intersections. | Compare each pair of normals and then the common set. |
| A solution that fails the original third equation | Only a pair of constraints was used. | Substitute into all original equations, not only reduced ones. |

<section class="lesson-check" markdown="1">

### Retry with a changed right side {#parameter-retry}

**Retry without a method label.** Replace the right-hand side 9 in Question 3 by 10. Classify the system for every real $k$ and justify its geometry when $k=0$.

<details markdown="1">
<summary>Check after retrying</summary>

The reduced equation is $kz=1$. For $k\ne0$ there is one solution $(1/k,3-2/k,1/k)$. For $k=0$ the equation is impossible; the three pairwise nonparallel planes have no common point. Compare this with Question 3: the coefficient matrix has not changed, but consistency at the exceptional parameter has.

</details>

</section>

## Quick Reference {#quick-reference}

| Situation | Decision and evidence |
| --- | --- |
| Square coefficient matrix with nonzero determinant | Unique solution; use elimination or $A^{-1}\mathbf b$, unless a method is specified. |
| Zero determinant | Inverse unavailable; continue elimination and test consistency. |
| Reduced contradiction | No solution; quote the actual contradiction. |
| Consistent reduced system with free variables | Give the complete parametric family and its common geometry. |
| Parameter in a divisor | Separate its zero cases first. |
| Geometrical interpretation | Describe the common set and support any pairwise claim with normals/equations. |

## Continue Learning {#continue-learning}

**Next output:** after a division or singularity error, recover Examples 3–4 and attempt the [changed-right-side retry](#parameter-retry) with help closed. If a nonzero solution is unclear, complete [Question 6](#question-6) before eigenvectors. Complete the course [mixed review](/alevel/a2-further-mathematics/#mixed-review) and, after intervening study, its [later review](/alevel/a2-further-mathematics/#later-review), connecting solution sets with eigenvectors and the geometry of a reflection.

Previous: [Matrix algebra](/alevel/a2-further-mathematics/matrix-algebra/). Next: [Eigenvalues and eigenvectors](/alevel/a2-further-mathematics/eigenvalues-and-eigenvectors/), where a singular homogeneous system must have a **nonzero** solution.

For a numerical check after the argument, use the [fx-CG50 matrix guide](/alevel/fx-cg50/further-mathematics/#fm-matrices). A numerical output or an error message does not prove the classification for all parameter values.

## Sources {#sources}

The 9665 specification and the listed January 2025 Q8 and Q13(b) QP/MS passages were reread on **23 October 2026**.

The scope is [OxfordAQA Further Mathematics 9665, Version 5.2, FP2.14, printed p.21 / PDF p.20](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf#page=20). Example 5 is adapted from [January 2025 FM03 Q8, pp.14–15](/assets/pdf/fx-cg50/references/oxfordaqa-fm03-2025-january-question-paper.pdf#page=14), checked against [its official MS p.13](/assets/pdf/fx-cg50/references/oxfordaqa-fm03-2025-january-mark-scheme.pdf#page=13). The specified-method distinction was also checked in the same paper, Q13(b), QP p.27 / MS p.21. The remaining examples, practice, feedback and solutions are self-written; the explanations are not an official mark scheme. The configuration diagram is a constructed schematic, not measured data.
