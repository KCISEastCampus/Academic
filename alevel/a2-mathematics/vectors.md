---
title: Vectors
layout: subjects
mathjax: true
grade: a2
subject: a2-mathematics
permalink: /alevel/a2-mathematics/vectors/
toc_headings: h2
study_page: true
---

[Pure Mathematics](/alevel/a2-mathematics/) · P2.10 Vectors

Use vectors to describe points and lines in three dimensions. Check intersections, find angles and calculate perpendicular distances.

- **Learning:** start with [vectors and position vectors](#vectors-and-position-vectors), then study [straight lines](#straight-lines), [pairs of lines](#pairs-of-lines) and the [scalar product](#scalar-product).
- **Homework help:** choose the required vector carefully. A position vector, a direction vector and a vector joining two points have different roles.
- **Revision:** try [practice](#practice) before opening the hints and solutions.

Textbook: Chapter 9, Sections 9.1–9.9 (printed pp. 124–147). This lesson covers the chapter's point and line methods. Plane equations are outside this chapter.

**Before you start:** you should know coordinate geometry, simultaneous equations, Pythagoras' theorem and cosine. For answers in degrees, use degree mode when finding an inverse cosine.

All worked examples and practice questions are self-written, not official past-paper questions. The suggested practice time is a guide; no official marks are assigned.

## Vectors and Position Vectors

A **vector** has magnitude and direction. A **scalar** has magnitude only. The **position vector** of $A$ is $\overrightarrow{OA}$, where $O$ is the origin.

The Cartesian unit vectors $\mathbf i$, $\mathbf j$ and $\mathbf k$ point along the positive $x$-, $y$- and $z$-axes. For example,

$$\mathbf a=2\mathbf i-\mathbf j+3\mathbf k=\begin{pmatrix}2\\-1\\3\end{pmatrix}.$$

Add, subtract and multiply by a scalar component by component. A positive scalar keeps the direction; a negative scalar reverses it. The magnitude is

$$\lvert\mathbf a\rvert=\sqrt{a_1^2+a_2^2+a_3^2}.$$

For $\mathbf a\ne\mathbf0$, $\frac{\mathbf a}{\lvert\mathbf a\rvert}$ is a **unit vector** in the direction of $\mathbf a$: its magnitude is $1$.

If $A$ and $B$ have position vectors $\mathbf a$ and $\mathbf b$, then

$$\overrightarrow{AB}=\mathbf b-\mathbf a,\qquad \overrightarrow{OM}=\frac{\mathbf a+\mathbf b}{2},$$

where $M$ is the midpoint of $AB$. The triangle law gives $\overrightarrow{AB}+\overrightarrow{BC}=\overrightarrow{AC}$.

### Example 1 — Join two points and find their midpoint

**Question:** $A=(1,-2,3)$ and $B=(5,0,4)$. Find $\overrightarrow{AB}$, the length $AB$, a unit vector in its direction and the midpoint $M$.

Subtract the starting point from the finishing point:

$$\overrightarrow{AB}=\begin{pmatrix}5-1\\0-(-2)\\4-3\end{pmatrix}=\begin{pmatrix}4\\2\\1\end{pmatrix}.$$

$$AB=\sqrt{4^2+2^2+1^2}=\boxed{\sqrt{21}}.$$

The required unit vector is

$$\boxed{\frac1{\sqrt{21}}\begin{pmatrix}4\\2\\1\end{pmatrix}}.$$

Average the coordinates for the midpoint:

$$\boxed{M=\left(3,-1,\frac72\right)}.$$

**Check:** The unit vector has squared magnitude $\frac{16+4+1}{21}=1$, and $\overrightarrow{AM}=\frac12\overrightarrow{AB}$.

**Common mistake:** using $\mathbf a-\mathbf b$ for $\overrightarrow{AB}$. That gives $\overrightarrow{BA}$, the opposite direction.

## Straight Lines

A line is described by a fixed point with position vector $\mathbf a$ and a non-zero **direction vector** $\mathbf b$:

$$\boxed{\mathbf r=\mathbf a+\lambda\mathbf b,\quad\lambda\in\mathbb R}.$$

$\mathbf r$ is the position vector of a general point on the line. For the line through distinct points $A$ and $B$, use $\mathbf b=\overrightarrow{AB}$.

The equation is not unique: a different point on the line or a non-zero scalar multiple of the direction vector describes the same line after changing the parameter.

### Example 2 — Find an equation and check a point

**Question:** Find a vector equation of the line through $A=(1,2,-1)$ and $B=(3,1,3)$. Check whether $P=(5,0,7)$ lies on it, and find where it meets the $xy$-plane.

The direction vector is $\overrightarrow{AB}=(2,-1,4)$, so one equation is

$$\boxed{\mathbf r=\begin{pmatrix}1\\2\\-1\end{pmatrix}+\lambda\begin{pmatrix}2\\-1\\4\end{pmatrix}}.$$

Its component equations are $x=1+2\lambda$, $y=2-\lambda$, $z=-1+4\lambda$.

For $P$, the $x$ equation gives $\lambda=2$. This same value gives $y=0$ and $z=7$, so $P$ lies on the line.

At the $xy$-plane, $z=0$. Thus $-1+4\lambda=0$ gives $\lambda=\frac14$, and the intersection is

$$\boxed{\left(\frac32,\frac74,0\right)}.$$

**Check:** At $\lambda=0$ the line contains $A$, and at $\lambda=1$ it contains $B$.

**Common mistake:** using a different parameter value for each coordinate. A point on the line must satisfy all three equations with one value.

## Pairs of Lines

For $\mathbf r=\mathbf a+\lambda\mathbf b$ and $\mathbf r=\mathbf c+\mu\mathbf d$, first compare $\mathbf b$ and $\mathbf d$.

| Direction vectors | Next check | Relationship |
|---|---|---|
| Scalar multiples | Is a point from one line also on the other? | Same line if yes; distinct parallel lines if no |
| Not scalar multiples | Can one pair $(\lambda,\mu)$ satisfy all three component equations? | Intersecting if yes; skew if no |

**Skew lines** are lines in three dimensions which are neither parallel nor intersecting. Use separate parameters for the two lines: they need not have the same value at an intersection.

### Example 3 — Check the third coordinate

**Question:** Find the intersection of

$$L:\quad\mathbf r=\begin{pmatrix}1\\0\\2\end{pmatrix}+\lambda\begin{pmatrix}1\\2\\-1\end{pmatrix},$$

$$M:\quad\mathbf r=\begin{pmatrix}3\\3\\-1\end{pmatrix}+\mu\begin{pmatrix}0\\1\\1\end{pmatrix}.$$

The directions are not scalar multiples. Equating the $x$ coordinates gives $1+\lambda=3$, so $\lambda=2$. The $y$ coordinates give $2\lambda=3+\mu$, so $\mu=1$.

Now check $z$: $2-\lambda=0$ and $-1+\mu=0$. They agree. The intersection is

$$\boxed{(3,4,0)}.$$

**Check:** Substituting $\lambda=2$ into $L$ and $\mu=1$ into $M$ gives the same three coordinates.

### Example 4 — Similar equations, different relationships

Keep line $L$ from Example 3. Compare it with each line below.

**(a)** $N$ has equation

$$\mathbf r=\begin{pmatrix}3\\3\\0\end{pmatrix}+\mu\begin{pmatrix}0\\1\\1\end{pmatrix}.$$

The $x$ and $y$ equations still give $\lambda=2$, $\mu=1$. But the $z$ coordinates are now $0$ on $L$ and $1$ on $N$. They cannot intersect, and their directions are not parallel. They are **skew**.

**(b)** $R$ has equation

$$\mathbf r=\begin{pmatrix}2\\2\\1\end{pmatrix}+s\begin{pmatrix}2\\4\\-2\end{pmatrix}.$$

Its direction is twice the direction of $L$. Its starting point is on $L$ at $\lambda=1$, so $R$ and $L$ are the **same line**. Their parameters are related by $\lambda=1+2s$.

**(c)** Replace the starting point of $R$ by $(2,2,2)$. The direction is unchanged, but this point is not on $L$: its first two coordinates require $\lambda=1$, which gives $z=1$, not $2$. The new line is **parallel and distinct**.

**Common mistake:** concluding that directions which are scalar multiples always give distinct parallel lines. Check for the same line too.

## Scalar Product

The **scalar product** is a number:

$$\mathbf a\cdot\mathbf b=a_1b_1+a_2b_2+a_3b_3.$$

For non-zero vectors, it also equals $\lvert\mathbf a\rvert\lvert\mathbf b\rvert\cos\theta$, where $0\le\theta\le180^\circ$ is the angle between their directions. Hence

$$\cos\theta=\frac{\mathbf a\cdot\mathbf b}{\lvert\mathbf a\rvert\lvert\mathbf b\rvert}.$$

Non-zero vectors are perpendicular when their scalar product is zero. A zero vector has no direction, so the angle formula cannot be used with it.

**For an angle in a triangle:** use two vectors starting at the vertex. To find angle $ABC$, use $\overrightarrow{BA}$ and $\overrightarrow{BC}$. Using $\overrightarrow{AB}$ instead reverses one direction and gives the supplementary angle.

### Example 5 — Angle between two vectors

**Question:** Find the angle between $\mathbf a=(1,2,2)$ and $\mathbf b=(2,-1,2)$, to $1$ decimal place.

$$\mathbf a\cdot\mathbf b=2-2+4=4,\qquad \lvert\mathbf a\rvert=\lvert\mathbf b\rvert=3.$$

$$\cos\theta=\frac49,\qquad \boxed{\theta\approx63.6^\circ}.$$

**Check:** The scalar product is positive, so the vector angle is acute. Use inverse cosine in degree mode; do not round $\frac49$ before calculating.

### Example 6 — Acute angle between lines

**Question:** Two lines have direction vectors $\mathbf b=(1,1,1)$ and $\mathbf d=(1,-1,-1)$. Find the acute angle between the lines.

Their scalar product is $-1$ and both magnitudes are $\sqrt3$. The angle between the stated vectors has cosine $-\frac13$, so it is obtuse.

A line can be described using either direction. For the acute angle $\phi$ between the lines, use the modulus of the scalar product:

$$\cos\phi=\frac{\lvert\mathbf b\cdot\mathbf d\rvert}{\lvert\mathbf b\rvert\lvert\mathbf d\rvert}=\frac13.$$

$$\boxed{\phi\approx70.5^\circ}.$$

**Check:** Reversing either direction vector gives the same acute line angle. Do not use the modulus automatically when a question asks for the angle between two directed vectors.

## Foot of the Perpendicular and Distance

The **foot of the perpendicular** from $P$ to a line is the point $H$ on the line where $PH$ meets the line at a right angle. The length $PH$ is the perpendicular distance from the point to the line.

1. Write a general point $H$ on the line: $\mathbf h=\mathbf a+\lambda\mathbf b$.
2. Form $\overrightarrow{PH}=\mathbf h-\mathbf p$.
3. Use $\overrightarrow{PH}\cdot\mathbf b=0$ to find $\lambda$.
4. Find the coordinates of $H$, then calculate $\lvert\overrightarrow{PH}\rvert$.

![Schematic: A and H lie on a straight line. The segment from P to H meets the line at a right angle, showing the perpendicular distance.](/assets/img/vectors-perpendicular.svg)

### Example 7 — Find the foot, then the distance

**Question:** Find the foot of the perpendicular from $P=(5,3,5)$ to the line

$$\mathbf r=\begin{pmatrix}1\\0\\1\end{pmatrix}+\lambda\begin{pmatrix}1\\2\\2\end{pmatrix},$$

and hence find the perpendicular distance.

A general point is $H=(1+\lambda,2\lambda,1+2\lambda)$, so

$$\overrightarrow{PH}=\begin{pmatrix}\lambda-4\\2\lambda-3\\2\lambda-4\end{pmatrix}.$$

For perpendicularity,

$$\begin{aligned}0&=(\lambda-4)+2(2\lambda-3)\\&\quad+2(2\lambda-4)=9\lambda-18.\end{aligned}$$

Thus $\lambda=2$, giving $\boxed{H=(3,4,5)}$.

$$\overrightarrow{PH}=\begin{pmatrix}-2\\1\\0\end{pmatrix},\qquad \boxed{PH=\sqrt5}.$$

**Check:** $H$ lies on the line, and $(-2)(1)+(1)(2)+(0)(2)=0$. Both facts are needed: a vector perpendicular to the direction alone does not locate the foot.

**Common mistake:** calculating the distance from $P$ to the starting point of the line. That is not usually the shortest distance.

## Practice

**Independent practice · 30–40 minutes**

Show the vector you use, not just the numerical result. For intersections, check all three coordinates. For distance, check both that the foot lies on the line and that the joining vector is perpendicular.

### Q1 — Position, direction and midpoint

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

### Q2 — A line through two points

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

### Q3 — Intersecting or skew?

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

### Q4 — Parallel or the same line?

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

### Q5 — Perpendicularity and angles

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

### Q6 — A perpendicular distance

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

### Q7 — Find the foot before measuring

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

## Quick Reference

| Task | Method | Check |
|---|---|---|
| Join $A$ to $B$ | $\overrightarrow{AB}=\mathbf b-\mathbf a$ | Finishing point minus starting point |
| Length or unit vector | $\lvert\mathbf v\rvert$ or $\frac{\mathbf v}{\lvert\mathbf v\rvert}$ | A unit direction requires $\mathbf v\ne\mathbf0$ |
| Midpoint | $\frac12(\mathbf a+\mathbf b)$ | Average each coordinate |
| Line | $\mathbf r=\mathbf a+\lambda\mathbf b$ | Use a point on the line and a non-zero direction |
| Point on a line | Substitute into the component equations | One parameter value must satisfy all three |
| Two lines | Compare directions, then solve components | Check the third coordinate and distinguish the same line |
| Vector angle | $\frac{\mathbf a\cdot\mathbf b}{\lvert\mathbf a\rvert\lvert\mathbf b\rvert}$ gives its cosine | Keep the sign; neither vector can be zero |
| Acute line angle | Use the modulus of the scalar product | Use direction vectors, not position vectors |
| Perpendicular distance | Find $H$ on the line with $\overrightarrow{PH}\cdot\mathbf b=0$ | Check the line equation and take $\lvert\overrightarrow{PH}\rvert$ |

**If your answer looks wrong:** check vector direction, component signs, parameter values and angle mode. Keep exact magnitudes until the final calculation.

**You should be able to:** describe a line, check how two lines meet, calculate angles, and find a perpendicular distance with a justified foot.

**Learning path:** [Previous: Numerical Methods](/alevel/a2-mathematics/numerical-methods/) · [Next: Mathematical Proof](/alevel/a2-mathematics/mathematical-proof/) · [Return to the Pure Mathematics topic index](/alevel/a2-mathematics/).
