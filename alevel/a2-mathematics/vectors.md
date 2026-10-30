---
title: Vectors
layout: subjects
mathjax: true
grade: a2
subject: a2-mathematics
permalink: /alevel/a2-mathematics/vectors/
toc_headings: h2, h3
reading_layout: true
study_page: true
---

[Pure Mathematics](/alevel/a2-mathematics/) · P2.10 Vectors

A move needs both a distance and a direction. Vectors record that move using arrows and coordinate changes. We then use them to describe points and lines, find where lines meet, and calculate angles and shortest distances.

- **Learning:** start with [vectors and position vectors](#vectors-and-position-vectors), then study [straight lines](#straight-lines), [pairs of lines](#pairs-of-lines) and the [scalar product](#scalar-product).
- **Homework help:** choose the required vector carefully. A position vector, a direction vector and a vector joining two points have different roles.
- **Revision:** try [practice](#practice) before opening the hints and solutions.

Textbook: Chapter 9, Sections 9.1–9.9 (printed pp. 124–147). This lesson covers the chapter's point and line methods. Plane equations are outside this chapter.
{: .lesson-meta}

<div class="lesson-notes" markdown="1">

**Starting point:** subtract coordinates to find a change, use Pythagoras for length, solve two linear equations and use cosine for an angle; recover [AS coordinate geometry](/alevel/as-mathematics/coordinate-geometry/#l04) and [algebra](/alevel/as-mathematics/algebra/#l02) if needed. Start with plane arrows, then add a third component. Use degree mode for inverse cosine answers in degrees. Your goal is to choose vectors, satisfy every required component and justify the geometric constraint. Revising? Try [practice](#practice), [repair](#repair), then [later review](#review-later).

</div>

All worked examples and practice questions are self-written, not official past-paper questions. The suggested practice time is a guide; no official marks are assigned.

## Vectors and Position Vectors {#vectors-and-position-vectors}

Moving five units to the right differs from moving five units upwards. A **vector** records both how far and in which direction; its length is called its **magnitude**. A **scalar** records size without direction. To locate a point $A$, start at the origin and draw $\overrightarrow{OA}$, where $O$ is the origin. This arrow is the point’s **position vector**.

### Start with arrows in a plane {#plane-vectors}

In a plane, record the horizontal change first and the vertical change second. These are the $x,y$ **components** of a two-dimensional vector. A negative component means moving in the negative direction of that axis. Following one arrow and then another adds their changes; Pythagoras gives the length of the resulting arrow. In the same plane coordinate system,

$$\begin{pmatrix}a_1\\a_2\end{pmatrix}+\begin{pmatrix}b_1\\b_2\end{pmatrix}=\begin{pmatrix}a_1+b_1\\a_2+b_2\end{pmatrix},\qquad \lvert\mathbf a\rvert=\sqrt{a_1^2+a_2^2}.$$

Multiplying a vector by a scalar stretches or reverses the arrow; apply the multiplier to every component. Respect brackets: $2(\mathbf a-\mathbf b)=2\mathbf a-2\mathbf b$. Add matching components using the same axes and the same number of coordinates. To place a plane diagram in the three-dimensional $xy$-plane, explicitly add $z=0$; a third component cannot simply be dropped. Multiplication by zero gives the zero vector, with no direction. Two non-zero vectors are parallel when one is a non-zero multiple of the other.

<section class="worked-example" markdown="1">

#### A plane-arrow demonstration {#plane-worked}

**Question:** For $A=(1,1)$ and $B=(4,5)$, draw $\overrightarrow{OA}$, $\overrightarrow{AB}$ and $\overrightarrow{OB}$; find $AB$.

Mark all three points on paper. Follow the arrows head to tail, $O\to A\to B$: this reaches the same endpoint as the direct arrow. To find the move from $A$ to $B$, subtract each starting coordinate from its finishing coordinate. The horizontal change is $3$ and the vertical change is $4$, so

$$\overrightarrow{AB}=\begin{pmatrix}3\\4\end{pmatrix},\qquad \overrightarrow{OA}+\overrightarrow{AB}=\begin{pmatrix}1\\1\end{pmatrix}+\begin{pmatrix}3\\4\end{pmatrix}=\begin{pmatrix}4\\5\end{pmatrix}=\overrightarrow{OB}.$$

Pythagoras gives $AB=5$. Translating the arrow $\overrightarrow{AB}$ to the origin does not change the vector; it does not become the position vector $\overrightarrow{OB}$. Reversing the $AB$ arrow in your diagram gives $(-3,-4)$.

</section>

### Add a third component {#three-dimensional-vectors}

In space, a third coordinate records the move along a third axis. The arrows $\mathbf i$, $\mathbf j$ and $\mathbf k$ each have length one and point along the positive $x$-, $y$- and $z$-axes. They are called **Cartesian unit vectors**. For example,

$$\mathbf a=2\mathbf i-\mathbf j+3\mathbf k=\begin{pmatrix}2\\-1\\3\end{pmatrix}.$$

Add, subtract and multiply by a scalar component by component. A positive scalar keeps the direction; a negative scalar reverses it. The magnitude is

$$\lvert\mathbf a\rvert=\sqrt{a_1^2+a_2^2+a_3^2}.$$

Sometimes we need the direction without the original length. For $\mathbf a\ne\mathbf0$, divide every component by the length: $\frac{\mathbf a}{\lvert\mathbf a\rvert}$. The result has the direction of $\mathbf a$ and length $1$, so it is a **unit vector**.

To find a move between points, subtract the starting location from the finishing location. To find the halfway location, average corresponding coordinates. If $A$ and $B$ have position vectors $\mathbf a$ and $\mathbf b$, then

$$\overrightarrow{AB}=\mathbf b-\mathbf a,\qquad \overrightarrow{OM}=\frac{\mathbf a+\mathbf b}{2},$$

where $M$ is the midpoint of $AB$. The triangle law gives $\overrightarrow{AB}+\overrightarrow{BC}=\overrightarrow{AC}$.



<section class="worked-example" markdown="1">

#### Example 1 — Join two points and find their midpoint {#example-1--join-two-points-and-find-their-midpoint}

**Question:** $A=(1,-2,3)$ and $B=(5,0,4)$. Find $\overrightarrow{AB}$, the length $AB$, a unit vector in its direction and the midpoint $M$.

The question asks for the move from the first point to the second, so subtract starting coordinates from finishing coordinates. Do this separately for all three coordinates:

$$\overrightarrow{AB}=\begin{pmatrix}5-1\\0-(-2)\\4-3\end{pmatrix}=\begin{pmatrix}4\\2\\1\end{pmatrix}.$$

$$AB=\sqrt{4^2+2^2+1^2}=\boxed{\sqrt{21}}.$$

The length comes from Pythagoras in three dimensions. To keep this direction but make the length one, divide all three components by that length. The required unit vector is

$$\boxed{\frac1{\sqrt{21}}\begin{pmatrix}4\\2\\1\end{pmatrix}}.$$

Average the coordinates for the midpoint:

$$\boxed{M=\left(3,-1,\frac72\right)}.$$

**Check:** The unit vector has squared magnitude $\frac{16+4+1}{21}=1$, and $\overrightarrow{AM}=\frac12\overrightarrow{AB}$.

**Common mistake:** using $\mathbf a-\mathbf b$ for $\overrightarrow{AB}$. That gives $\overrightarrow{BA}$, the opposite direction.

</section>

## Straight Lines {#straight-lines}

To reach points on a line, start at one fixed point and move forwards or backwards along the line. The starting location has position vector $\mathbf a$. A non-zero **direction vector** $\mathbf b$ gives one move along it:

$$\boxed{\mathbf r=\mathbf a+\lambda\mathbf b,\quad\lambda\in\mathbb R}.$$

$\mathbf r$ records the location reached. The multiplier in the equation can be zero, negative or a fraction, as well as positive; allowing every real value covers the whole line. This changing multiplier is called a **parameter**. For the line through distinct points $A$ and $B$, use $\mathbf b=\overrightarrow{AB}$.

The same line can have different equations. Start from another point on it, or take a longer, shorter or reversed non-zero direction vector: the multiplier changes, but the set of points reached is the same.

<section class="worked-example" markdown="1">

### Example 2 — Find an equation and check a point {#example-2--find-an-equation-and-check-a-point}

**Question:** Find a vector equation of the line through $A=(1,2,-1)$ and $B=(3,1,3)$. Check whether $P=(5,0,7)$ lies on it, and find where it meets the $xy$-plane.

First subtract the coordinates to find a move along the line: $\overrightarrow{AB}=(2,-1,4)$. Choose the first given point as the starting location, so one equation is

$$\boxed{\mathbf r=\begin{pmatrix}1\\2\\-1\end{pmatrix}+\lambda\begin{pmatrix}2\\-1\\4\end{pmatrix}}.$$

Read the vector equation one coordinate at a time: $x=1+2\lambda$, $y=2-\lambda$, $z=-1+4\lambda$. The same multiplier controls the whole move, so all three coordinates must use one value.

For $P$, the $x$ equation gives $\lambda=2$. This same value gives $y=0$ and $z=7$, so $P$ lies on the line.

At the $xy$-plane, $z=0$. Thus $-1+4\lambda=0$ gives $\lambda=\frac14$, and the intersection is

$$\boxed{\left(\frac32,\frac74,0\right)}.$$

**Check:** At $\lambda=0$ the line contains $A$, and at $\lambda=1$ it contains $B$.

**Common mistake:** using a different parameter value for each coordinate. A point on the line must satisfy all three equations with one value.

</section>

<section class="lesson-check" markdown="1">

### A plane configuration {#check-plane}

$A=(-1,2)$ and $B=(3,0)$. Draw $\overrightarrow{OA}$, $\overrightarrow{OB}$ and $\overrightarrow{AB}$. Find $\overrightarrow{AB}$, its magnitude and a unit vector in its direction. Find the intersection of the line through $A,B$ with $\mathbf r=(1,-3)+s(0,1)$.

<details markdown="1">
<summary>Hint</summary>

Write the line through A and B, then equate both components using separate parameters.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\overrightarrow{AB}=(4,-2),\qquad AB=2\sqrt5,\qquad\text{unit vector}=\frac1{\sqrt5}(2,-1).$$

$$\mathbf r=(-1,2)+t(4,-2),\quad -1+4t=1,\quad2-2t=-3+s.$$

Thus $t=\frac12$, $s=4$, and the intersection is $(1,1)$. Substitute each parameter into its own line; your arrows should satisfy $\overrightarrow{OA}+\overrightarrow{AB}=\overrightarrow{OB}$.

</details>

</section>

## Pairs of Lines {#pairs-of-lines}

For $\mathbf r=\mathbf a+\lambda\mathbf b$ and $\mathbf r=\mathbf c+\mu\mathbf d$, first compare $\mathbf b$ and $\mathbf d$.

| Direction vectors | Next check | Relationship |
|---|---|---|
| Scalar multiples | Is a point from one line also on the other? | Same line if yes; distinct parallel lines if no |
| Not scalar multiples | Can one pair $(\lambda,\mu)$ satisfy all three component equations? | Intersecting if yes; skew if no |
{: .wide-table}

The “skew” outcome in the table is possible only in three dimensions. In one plane, non-parallel lines must meet, so solve the two coordinate equations. In space, lines that appear to cross in a flat drawing may pass above or below each other: the third coordinates must agree too.

**Skew lines** are lines in three dimensions which are neither parallel nor intersecting. Use separate parameters for the two lines: they need not have the same value at an intersection.

<section class="worked-example" markdown="1">

### Example 3 — Check the third coordinate {#example-3--check-the-third-coordinate}

**Question:** Find the intersection of

$$L:\quad\mathbf r=\begin{pmatrix}1\\0\\2\end{pmatrix}+\lambda\begin{pmatrix}1\\2\\-1\end{pmatrix},$$

$$M:\quad\mathbf r=\begin{pmatrix}3\\3\\-1\end{pmatrix}+\mu\begin{pmatrix}0\\1\\1\end{pmatrix}.$$

The directions are not scalar multiples. Equating the $x$ coordinates gives $1+\lambda=3$, so $\lambda=2$. The $y$ coordinates give $2\lambda=3+\mu$, so $\mu=1$.

Now check $z$: $2-\lambda=0$ and $-1+\mu=0$. They agree. The intersection is

$$\boxed{(3,4,0)}.$$

**Check:** Substituting $\lambda=2$ into $L$ and $\mu=1$ into $M$ gives the same three coordinates.

</section>

<section class="worked-example" markdown="1">

### Example 4 — Similar equations, different relationships {#example-4--similar-equations-different-relationships}

Keep line $L$ from Example 3. Compare it with each line below.

**(a)** $N$ has equation

$$\mathbf r=\begin{pmatrix}3\\3\\0\end{pmatrix}+\mu\begin{pmatrix}0\\1\\1\end{pmatrix}.$$

The $x$ and $y$ equations still give $\lambda=2$, $\mu=1$. But the $z$ coordinates are now $0$ on $L$ and $1$ on $N$. They cannot intersect, and their directions are not parallel. They are **skew**.

**(b)** $R$ has equation

$$\mathbf r=\begin{pmatrix}2\\2\\1\end{pmatrix}+s\begin{pmatrix}2\\4\\-2\end{pmatrix}.$$

Its direction is twice the direction of $L$. Its starting point is on $L$ at $\lambda=1$, so $R$ and $L$ are the **same line**. Their parameters are related by $\lambda=1+2s$.

**(c)** Replace the starting point of $R$ by $(2,2,2)$. The direction is unchanged, but this point is not on $L$: its first two coordinates require $\lambda=1$, which gives $z=1$, not $2$. The new line is **parallel and distinct**.

**Common mistake:** concluding that directions which are scalar multiples always give distinct parallel lines. Check for the same line too.

</section>

## Scalar Product {#scalar-product}

To find an angle, we need a calculation that compares two directions. Multiply each component of one vector by the matching component of the other, then add. The resulting number is called the **scalar product**, also called the **dot product**:

$$\mathbf a\cdot\mathbf b=a_1b_1+a_2b_2+a_3b_3.$$

In two dimensions, use only the two matching products: $\mathbf a\cdot\mathbf b=a_1b_1+a_2b_2$. First subtract to form the required directions, then take their scalar product. The result is a scalar, not a new direction vector.

For non-zero vectors, it also equals $\lvert\mathbf a\rvert\lvert\mathbf b\rvert\cos\theta$, where $0\le\theta\le180^\circ$ is the angle between their directions. Hence

$$\cos\theta=\frac{\mathbf a\cdot\mathbf b}{\lvert\mathbf a\rvert\lvert\mathbf b\rvert}.$$

For non-zero vectors, a right angle makes the cosine zero, so their scalar product is zero. Conversely, a zero scalar product means a right angle. This gives us a test for perpendicular directions. A zero vector has no direction, so the angle formula cannot be used with it.

**For an angle in a triangle:** use two vectors starting at the vertex. To find angle $ABC$, use $\overrightarrow{BA}$ and $\overrightarrow{BC}$. Using $\overrightarrow{AB}$ instead reverses one direction and gives the other angle that adds to it to make a straight angle, called the **supplementary angle**.

<section class="worked-example" markdown="1">

### Example 5 — Angle between two vectors {#example-5--angle-between-two-vectors}

**Question:** Find the angle between $\mathbf a=(1,2,2)$ and $\mathbf b=(2,-1,2)$, to $1$ decimal place.

The directions are already given, so no subtraction of points is needed. Find the scalar product by multiplying matching components and adding; find each length using Pythagoras:

$$\mathbf a\cdot\mathbf b=2-2+4=4,\qquad \lvert\mathbf a\rvert=\lvert\mathbf b\rvert=3.$$

Divide the scalar product by the product of the two lengths. This gives the cosine; inverse cosine gives the angle:

$$\cos\theta=\frac49,\qquad \boxed{\theta\approx63.6^\circ}.$$

**Check:** The scalar product is positive, so the vector angle is acute. Use inverse cosine in degree mode; do not round $\frac49$ before calculating.

</section>

<section class="worked-example" markdown="1">

### Example 6 — Acute angle between lines {#example-6--acute-angle-between-lines}

**Question:** Two lines have direction vectors $\mathbf b=(1,1,1)$ and $\mathbf d=(1,-1,-1)$. Find the acute angle between the lines.

Their scalar product is $-1$ and both magnitudes are $\sqrt3$. The angle between the stated vectors has cosine $-\frac13$, so it is obtuse.

A line extends in both directions. Reversing one direction vector changes the sign of the cosine and selects the other angle. For the acute angle $\phi$ between the lines, use the positive size of the scalar product, written with modulus signs:

$$\cos\phi=\frac{\lvert\mathbf b\cdot\mathbf d\rvert}{\lvert\mathbf b\rvert\lvert\mathbf d\rvert}=\frac13.$$

$$\boxed{\phi\approx70.5^\circ}.$$

**Check:** Reversing either direction vector gives the same acute line angle. Do not use the modulus automatically when a question asks for the angle between two directed vectors.

</section>

<section class="worked-example" markdown="1">

### Start at the angle's vertex {#vertex-angle}

**Question:** $A=(0,0)$, $B=(2,0)$ and $C=(3,1)$. Find angle $ABC$.

Draw the triangle and mark the angle at $B$. Its two rays are $BA$ and $BC$, so

$$\overrightarrow{BA}=(-2,0),\qquad\overrightarrow{BC}=(1,1),\qquad\cos\angle ABC=\frac{-2}{2\sqrt2}=-\frac1{\sqrt2}.$$

Thus $\angle ABC=135^\circ$. Your sketch should show an obtuse angle. Using $AB$ would give $45^\circ$: this is a supplementary angle caused by reversing one direction, not a rounding error.

</section>

## Foot of the Perpendicular and Distance {#foot-of-the-perpendicular-and-distance}

Imagine joining $P$ to a point that can move along the line. We want the point $H$ where the joining segment $PH$ meets the line at a right angle. It is called the **foot of the perpendicular**. The length $PH$ is the perpendicular distance. We must satisfy two conditions together: the endpoint lies on the line, and the joining segment is perpendicular to its direction.

1. Write a general point $H$ on the line: $\mathbf h=\mathbf a+\lambda\mathbf b$.
2. Form $\overrightarrow{PH}=\mathbf h-\mathbf p$.
3. Use $\overrightarrow{PH}\cdot\mathbf b=0$ to find $\lambda$.
4. Find the coordinates of $H$, then calculate $\lvert\overrightarrow{PH}\rvert$.

Why is this distance shortest? For any other point $X$ on the line, $HX$ follows its direction and $PH\perp HX$. Pythagoras gives $PX^2=PH^2+HX^2\ge PH^2$. For a triangle with base $AB$, the corresponding height is the third vertex's distance to the line $AB$, so area is $\frac12 AB\times PH$, even when the foot lies on the extended base.

![Schematic: A and H lie on a straight line. The segment from P to H meets the line at a right angle, showing the perpendicular distance.](/assets/img/vectors-perpendicular.svg)

<section class="worked-example" markdown="1">

### Example 7 — Find the foot, then the distance {#example-7--find-the-foot-then-the-distance}

**Question:** Find the foot of the perpendicular from $P=(5,3,5)$ to the line

$$\mathbf r=\begin{pmatrix}1\\0\\1\end{pmatrix}+\lambda\begin{pmatrix}1\\2\\2\end{pmatrix},$$

and hence find the perpendicular distance.

First let the candidate point move along the given line: $H=(1+\lambda,2\lambda,1+2\lambda)$. This ensures it is on the line. Subtract the coordinates of the given point to find the joining vector:

$$\overrightarrow{PH}=\begin{pmatrix}\lambda-4\\2\lambda-3\\2\lambda-4\end{pmatrix}.$$

Now choose the multiplier that makes this joining vector perpendicular to the line. Take its scalar product with the line’s direction vector and set the result to zero:

$$\begin{aligned}0&=(\lambda-4)+2(2\lambda-3)\\&\quad+2(2\lambda-4)=9\lambda-18.\end{aligned}$$

Thus $\lambda=2$, giving $\boxed{H=(3,4,5)}$.

$$\overrightarrow{PH}=\begin{pmatrix}-2\\1\\0\end{pmatrix},\qquad \boxed{PH=\sqrt5}.$$

**Check:** $H$ lies on the line, and $(-2)(1)+(1)(2)+(0)(2)=0$. Both facts are needed: a vector perpendicular to the direction alone does not locate the foot.

**Common mistake:** calculating the distance from $P$ to the starting point of the line. That is not usually the shortest distance.

</section>

## Practice {#practice}

**Independent practice · 30–40 minutes**

Show the vector you use, not just the numerical result. For intersections, check every component. For distance, check both that the foot lies on the line and that the joining vector is perpendicular.

<section class="lesson-check" markdown="1">

### Q1 {#q1--position-direction-and-midpoint}

$A=(2,-1,0)$ and $B=(-2,3,4)$. Find $\overrightarrow{AB}$, $AB$, a unit vector in the direction $AB$, and the midpoint of $AB$.

<details markdown="1">
<summary>Hint</summary>

Use finishing position minus starting position. Divide that vector by its magnitude for a unit vector.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\overrightarrow{AB}=\begin{pmatrix}-4\\4\\4\end{pmatrix},\qquad AB=\sqrt{48}=4\sqrt3.$$

The unit vector is $\frac1{\sqrt3}(-1,1,1)$ and the midpoint is $\boxed{(0,1,2)}$.

The unit vector has squared magnitude $\frac13(1+1+1)=1$. The midpoint is $A+\frac12\overrightarrow{AB}$.

</details>

</section>

<section class="lesson-check" markdown="1">

### Q2 {#q2--a-line-through-two-points}

Find an equation of the line through $A=(0,1,2)$ and $B=(2,2,-2)$. Does $P=(4,3,-6)$ lie on it? Where does it meet the $xy$-plane?

<details markdown="1">
<summary>Hint</summary>

The direction can be $(2,1,-4)$. The $xy$-plane has $z=0$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\boxed{\mathbf r=\begin{pmatrix}0\\1\\2\end{pmatrix}+\lambda\begin{pmatrix}2\\1\\-4\end{pmatrix}}.$$

At $\lambda=2$, the point is $(4,3,-6)$, so $P$ is on the line. Setting $2-4\lambda=0$ gives $\lambda=\frac12$, so the plane intersection is $\boxed{(1,\frac32,0)}$.

Check all three coordinates with the same value of $\lambda$.

</details>

</section>

<section class="lesson-check" markdown="1">

### Q3 {#q3--intersecting-or-skew}

Investigate the lines

$$L:\quad\mathbf r=\begin{pmatrix}0\\0\\1\end{pmatrix}+\lambda\begin{pmatrix}1\\1\\1\end{pmatrix},$$

$$M:\quad\mathbf r=\begin{pmatrix}2\\0\\1\end{pmatrix}+\mu\begin{pmatrix}0\\1\\1\end{pmatrix}.$$

Find their intersection if one exists. Then describe the relationship if the starting point of $M$ is changed to $(2,0,2)$.

<details markdown="1">
<summary>Hint</summary>

First check that the direction vectors are not scalar multiples. Use the $x$ and $y$ equations, then check $z$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The $x$ equation gives $\lambda=2$, and $y$ gives $\mu=2$. Both lines then give $z=3$, so the intersection is $\boxed{(2,2,3)}$.

With the changed starting point, the same parameter values give $z=3$ on $L$ and $z=4$ on $M$. There is no intersection; the directions are not parallel, so these lines are skew.

</details>

</section>

<section class="lesson-check" markdown="1">

### Q4 {#q4--parallel-or-the-same-line}

The line $L$ is $\mathbf r=(1,2,3)+\lambda(2,-1,1)$. Compare it with **(a)** $\mathbf r=(3,1,4)+s(4,-2,2)$ and **(b)** $\mathbf r=(3,1,5)+s(4,-2,2)$.

<details markdown="1">
<summary>Hint</summary>

Both direction vectors are twice that of $L$. Test each starting point on $L$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

**(a)** The starting point is on $L$ at $\lambda=1$, so it is the same line. The parameter relation is $\lambda=1+2s$.

**(b)** The first two coordinates require $\lambda=1$, but $L$ then has $z=4$, not $5$. This line is parallel and distinct.

</details>

</section>

<section class="lesson-check" markdown="1">

### Q5 {#q5--perpendicularity-and-angles}

**(a)** Find $k$ if $(2,k,1)$ is perpendicular to $(1,-1,3)$.

**(b)** Find the angle between the vectors $(1,0,1)$ and $(-1,1,-1)$, to $1$ decimal place. Then find the acute angle between lines with these directions.

<details markdown="1">
<summary>Hint</summary>

Use zero scalar product in (a). In (b), keep the sign for the vector angle and use the modulus for the acute line angle.

</details>

<details markdown="1">
<summary>Solution and check</summary>

**(a)** $2-k+3=0$, so $\boxed{k=5}$.

**(b)** The scalar product is $-2$, with magnitudes $\sqrt2$ and $\sqrt3$:

$$\cos\theta=-\frac2{\sqrt6},\qquad \boxed{\theta\approx144.7^\circ}.$$

The acute line angle is $180^\circ-\theta$, giving $\boxed{35.3^\circ}$.

The negative scalar product agrees with an obtuse vector angle. Reversing one direction leaves the acute line angle unchanged.

</details>

</section>

<section class="lesson-check" markdown="1">

### Q6 {#q6--a-perpendicular-distance}

Find the foot of the perpendicular from $P=(3,2,0)$ to $\mathbf r=(1,0,0)+\lambda(1,1,0)$. Hence find the distance from $P$ to the line.

<details markdown="1">
<summary>Hint</summary>

Write $H=(1+\lambda,\lambda,0)$ and impose $\overrightarrow{PH}\cdot(1,1,0)=0$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$\overrightarrow{PH}=(\lambda-2,\lambda-2,0)$. Its scalar product with the direction is $2\lambda-4$, giving $\lambda=2$ and $H=(3,2,0)=P$.

Thus $\boxed{PH=0}$. The point already lies on the line. A point-to-line distance need not be positive; zero is correct in this case.

</details>

</section>

<section class="lesson-check" markdown="1">

### Q7 {#q7--find-the-foot-before-measuring}

Find the foot of the perpendicular from $P=(4,0,2)$ to $\mathbf r=(0,1,0)+\lambda(1,0,1)$, and find the perpendicular distance.

<details markdown="1">
<summary>Hint</summary>

$H=(\lambda,1,\lambda)$. Use the scalar product to find $\lambda$ before taking a magnitude.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$\overrightarrow{PH}=(\lambda-4,1,\lambda-2)$. Perpendicularity gives $2\lambda-6=0$, so $\lambda=3$ and $\boxed{H=(3,1,3)}$.

$$\overrightarrow{PH}=(-1,1,1),\qquad \boxed{PH=\sqrt3}.$$

The point $H$ lies on the line, and $(-1)(1)+(1)(0)+(1)(1)=0$. The distance to the starting point would be $\sqrt{21}$, which is longer.

</details>

</section>

<section class="lesson-check" markdown="1">

### A triangle {#mixed-geometry}

$A=(0,0)$, $B=(4,2)$ and $C=(0,5)$. Draw triangle $ABC$. Find angle $BAC$ to $1$ decimal place, the distance from $C$ to the line $AB$, and the area of the triangle. Show your geometric choices.

<details markdown="1">
<summary>Hint</summary>

Choose vectors from the angle vertex, then select a base and find its corresponding height.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\cos\angle BAC=\frac{(4,2)\cdot(0,5)}{\sqrt{20}\times5}=\frac1{\sqrt5},\qquad\angle BAC\approx63.4^\circ.$$

$$H=(4t,2t),\quad\overrightarrow{CH}=(4t,2t-5),\quad\overrightarrow{CH}\cdot(4,2)=20t-10=0.$$

$$t=\frac12,\quad H=(2,1),\quad CH=\sqrt{2^2+(-4)^2}=2\sqrt5.$$

$$\text{Area}=\frac12(2\sqrt5)(2\sqrt5)=10\text{ square units}.$$

Add $CH$ and the right-angle mark to your drawing. Independent check: base $AC=5$ and the distance from $B$ to the $y$-axis is $4$, again giving area $10$.

</details>

</section>

## Repair the cause {#repair}

Close the original answer, revisit the indicated explanation, then do its fresh task.

| Error | Recovery action | Retry |
| --- | --- | --- |
| AB reversed or a component lost | Mark start and finish; revisit [plane vectors](#plane-vectors) | [Direction](#repair-direction) |
| Only two coordinates checked or parameters shared | Use separate parameters and every component; revisit [pairs of lines](#pairs-of-lines) | [Lines](#repair-lines) |
| Triangle angle replaced by its supplement | Redraw both arrows from the vertex; revisit [vertex angle](#vertex-angle) | [Angle](#repair-angle) |
| Distance measured to an arbitrary point | Check both that the endpoint is on the line and that the joining segment is perpendicular; revisit [the foot](#foot-of-the-perpendicular-and-distance) | [Distance](#repair-foot) |

<section class="lesson-check" markdown="1">

### Direction {#repair-direction}

$P=(2,-1)$ and $Q=(-1,3)$. Draw $\overrightarrow{PQ}$ and $-2\overrightarrow{PQ}$. Find a unit vector in the direction $PQ$ and the magnitude of $-2\overrightarrow{PQ}$.

<details markdown="1">
<summary>Hint</summary>

Multiplying by a negative number reverses the arrow. Multiply its length by the positive size of that number.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\overrightarrow{PQ}=(-3,4),\quad\text{unit vector}=(-3/5,4/5),\quad-2\overrightarrow{PQ}=(6,-8),\quad\lvert-2\overrightarrow{PQ}\rvert=10.$$

</details>

</section>

<section class="lesson-check" markdown="1">

### Two lines {#repair-lines}

Determine the relationship between $L:\mathbf r=(0,1,2)+t(1,2,1)$ and $M:\mathbf r=(2,0,2)+s(0,1,1)$. Justify your answer.

<details markdown="1">
<summary>Hint</summary>

Compare directions, then check every coordinate.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$t=2,\qquad1+2t=s\Rightarrow s=5.$$

Then $L$ has $z=4$ and $M$ has $z=7$, so they do not meet. The directions are not multiples, so the lines are skew. Two coordinates give a candidate pair; the third rejects it.

</details>

</section>

<section class="lesson-check" markdown="1">

### An angle {#repair-angle}

$A=(0,0)$, $B=(1,0)$, $C=(2,1)$. Find angle $ABC$ and the acute angle between the lines $AB$ and $BC$.

<details markdown="1">
<summary>Hint</summary>

The triangle angle has a specified vertex; an acute line angle allows a direction to reverse.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\overrightarrow{BA}=(-1,0),\quad\overrightarrow{BC}=(1,1),\quad\angle ABC=135^\circ,\quad\text{acute line angle}=45^\circ.$$

</details>

</section>

<section class="lesson-check" markdown="1">

### A distance {#repair-foot}

Find the distance from $P=(1,3)$ to $\mathbf r=t(1,1)$. Give and check the nearest point.

<details markdown="1">
<summary>Hint</summary>

Let the endpoint move along the line, then find where the joining vector has zero scalar product with the line’s direction.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$H=(t,t),\quad\overrightarrow{PH}=(t-1,t-3),\quad2t-4=0.$$

$$H=(2,2),\quad PH=\sqrt2,\quad(1,-1)\cdot(1,1)=0.$$

H satisfies the line equation and the joining vector is perpendicular; both conditions hold.

</details>

</section>

## Later review {#review-later}

After studying proof, attempt this without this page's method table and compare it with your first attempt.

<section class="lesson-check" markdown="1">

### A moving point {#review-point}

$A=(1,0,2)$ and $B=(3,2,0)$. Show that $P=(1+4u,4u,2-4u)$ lies on the line $AB$ for every real $u$. Find the value of $u$ for which $OP$ is perpendicular to $AB$.

<details markdown="1">
<summary>Hint</summary>

Show how the multiplier on the line depends on u, using the same relation for every coordinate. Then write a separate condition for perpendicularity.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\overrightarrow{AB}=(2,2,-2),\qquad P=A+(2u)\overrightarrow{AB}.$$

$$\overrightarrow{OP}\cdot\overrightarrow{AB}=2(1+4u)+8u-2(2-4u)=24u-2=0,\quad u=\frac1{12}.$$

The parameter relation $t=2u$ works for every real u; checking a few u values would not prove the claim.

</details>

</section>

## Quick Reference {#quick-reference}

| Task | Method | Check |
|---|---|---|
| Join $A$ to $B$ | $\overrightarrow{AB}=\mathbf b-\mathbf a$ | Finishing point minus starting point |
| Length or unit vector | $\lvert\mathbf v\rvert$ or $\frac{\mathbf v}{\lvert\mathbf v\rvert}$ | A unit direction requires $\mathbf v\ne\mathbf0$ |
| Midpoint | $\frac12(\mathbf a+\mathbf b)$ | Average each coordinate |
| Line | $\mathbf r=\mathbf a+\lambda\mathbf b$ | Use a point on the line and a non-zero direction |
| Point on a line | Substitute into the component equations | One parameter value must satisfy every component |
| Two lines | Compare directions, then solve components | Check every component and distinguish the same line |
| Vector angle | $\frac{\mathbf a\cdot\mathbf b}{\lvert\mathbf a\rvert\lvert\mathbf b\rvert}$ gives its cosine | Keep the sign; neither vector can be zero |
| Acute line angle | Use the modulus of the scalar product | Use direction vectors, not position vectors |
| Perpendicular distance | Find $H$ on the line with $\overrightarrow{PH}\cdot\mathbf b=0$ | Check the line equation and take $\lvert\overrightarrow{PH}\rvert$ |
{: .wide-table}

**If your answer looks wrong:** check vector direction, component signs, parameter values and angle mode. Keep exact magnitudes until the final calculation.

**You should be able to:** describe a line, check how two lines meet, calculate angles, and find a perpendicular distance with a justified foot.

**Learning path:** [Previous: Numerical Methods](/alevel/a2-mathematics/numerical-methods/) · [Next: Mathematical Proof](/alevel/a2-mathematics/mathematical-proof/) · [Return to the Pure Mathematics topic index](/alevel/a2-mathematics/).

**Next step:** connect the general argument in [the moving-point task](#review-point) to [mathematical proof](/alevel/a2-mathematics/mathematical-proof/), then return to check it.
{: #next-step}

<details markdown="1">
<summary>Sources and verification scope</summary>

Scope: 9660 MA03 P2.10. January 2025 MA03 Q4 (QP pp8–9, MS pp8–9) was read for direction, magnitude, angles and consistent parameters. January 2024 Q12 (QP pp26–27, MS pp21–22) was read for a general parameter, perpendicular foot, base-height area and angle. All tasks here remain self-written.

[9660 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf) · [January 2024 QP](https://aqamat.alevelclouds.com/24_01_QP_P2.pdf) / [MS](https://aqamat.alevelclouds.com/24_01_MS_P2.pdf) · [January 2025 QP](https://aqamat.alevelclouds.com/25_01_QP_P2.pdf) / [MS](https://aqamat.alevelclouds.com/25_01_MS_P2.pdf)

</details>

{% include exam_topic_practice.html %}
