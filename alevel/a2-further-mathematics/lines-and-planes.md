---
title: Lines and Planes
layout: subjects
mathjax: true
grade: a2
subject: a2-further-mathematics
permalink: /alevel/a2-further-mathematics/lines-and-planes/
toc_headings: "#directions-and-lines, #planes, #intersections, #angles, #distances-and-reflections, #official-problems, #practice, #common-pitfalls, #sources"
study_page: true
reading_layout: true
---

[Further Pure Mathematics](/alevel/a2-further-mathematics/) · FP2.12 Vectors and three-dimensional coordinate geometry

How do equations describe the same line or plane, and how can geometry check a calculation? Learn to move between representations, select directions and normals, and use perpendicular projections for distances and reflections.

- **Learning:** follow [directions and lines](#directions-and-lines), [planes](#planes), [intersections](#intersections), then [angles](#angles) and [distances](#distances-and-reflections).
- **Homework help:** compare the [June 2024 geometry problem](#example-june-2024) and [January 2025 representation problem](#example-january-2025).
- **Revision:** try [mixed independent tasks](#practice), then inspect the [quick reference](#quick-reference).

**Goals:** normalise direction ratios; write three line forms, including a cross-product equation; connect two plane forms; solve intersections and distinguish parallel/contained cases; find line–plane and plane–plane angles; derive point–line and point–plane distances and reflection images.

**Before you start:** revise [MA03 Vectors](/alevel/a2-mathematics/vectors/) and [vector products and coplanarity](/alevel/a2-further-mathematics/vector-products-and-coplanarity/). You need scalar and vector products, simultaneous equations and nonzero direction vectors. All new examples are constructed mathematical data.

Labels **Original example** and **Original task** identify author-written material. Official questions have separate qualification, session, question and mark-scheme references.

If a symmetric equation does not yield a direction, recover [MA03 straight lines](/alevel/a2-mathematics/vectors/#straight-lines) by setting the common expression equal to a parameter. If normal or perpendicularity checks fail, recover the [cross-product demonstration](/alevel/a2-further-mathematics/vector-products-and-coplanarity/#example-cross-product) and [scalar product](/alevel/a2-mathematics/vectors/#scalar-product), then attempt [Question 1](#practice-1) independently.

## Directions and Line Equations {#directions-and-lines}

### Direction ratios and direction cosines {#direction-cosines}

A nonzero vector $\mathbf b=(b_1,b_2,b_3)$ gives **direction ratios** $b_1:b_2:b_3$. Any nonzero scalar multiple describes the same unoriented line. The **direction cosines** are the cosines of the angles of an oriented direction with the positive coordinate axes:

$$l=\frac{b_1}{\lVert\mathbf b\rVert},\qquad m=\frac{b_2}{\lVert\mathbf b\rVert},\qquad n=\frac{b_3}{\lVert\mathbf b\rVert}.$$

They are the components of a unit vector, so

$$\boxed{l^2+m^2+n^2=\frac{b_1^2+b_2^2+b_3^2}{\lVert\mathbf b\rVert^2}=1.}$$

For $\mathbf b=(2,-1,2)$ the magnitude is 3 and the direction cosines are $(2/3,-1/3,2/3)$. The negative second component gives an obtuse angle with the positive second axis. Reversing orientation negates all three cosines; negating just one usually changes the line's direction.

In two dimensions the same reasoning uses two components: a direction $(3,4)$ has direction cosines $(3/5,4/5)$. For example, the line through $(1,2)$ in that direction is

$$\mathbf r=(1,2)+t(3,4),\qquad 4(x-1)-3(y-2)=0.$$

The coordinate equation eliminates the parameter; its normal is perpendicular to the direction. The same connection extends to three dimensions, where a single linear coordinate equation describes a plane.

### Three forms of a spatial line {#line-forms}

Let $\mathbf a=(a_1,a_2,a_3)$ be the position of one point and let $\mathbf b\ne\mathbf0$ be a direction. A line has vector/parametric form

$$\boxed{\mathbf r=\mathbf a+t\mathbf b,\qquad t\in\mathbb R.}$$

Eliminating the parameter gives its Cartesian symmetric form, when all denominators are nonzero:

$$\boxed{\frac{x-a_1}{b_1}=\frac{y-a_2}{b_2}=\frac{z-a_3}{b_3}.}$$

Alternatively, displacement along the line is parallel to its direction, so

$$\boxed{(\mathbf r-\mathbf a)\times\mathbf b=\mathbf0.}$$

This last equation also includes the base point, where displacement is zero. It represents a line only when the direction is nonzero; a zero direction would make it true for every position.

<section class="worked-example" markdown="1">

### Example: a zero direction component {#example-zero-component}

> **Original example.** Write the line through $A=(1,2,3)$ with direction $(0,2,-1)$ in parametric, Cartesian and cross-product forms. Explain which coordinate stays fixed.

A zero component means a constant coordinate. Do not create a fraction with zero denominator.


$$\begin{aligned}
\mathbf r&=(1,2,3)+t(0,2,-1),\\
x&=1,\qquad \frac{y-2}{2}=\frac{z-3}{-1},\\
\big(\mathbf r-(1,2,3)\big)\times(0,2,-1)&=\mathbf0.
\end{aligned}$$

The first coordinate is fixed. Expanding the last form also gives that fixed-coordinate condition and the relation between the other two coordinates. If two direction components are zero, write two fixed coordinates and let the third vary freely.

</section>

## Two Forms of a Plane {#planes}

A point $\mathbf a$ and two **nonparallel** directions $\mathbf b,\mathbf c$ determine a plane:

$$\boxed{\mathbf r=\mathbf a+\lambda\mathbf b+\mu\mathbf c,\qquad \lambda,\mu\in\mathbb R,\qquad \mathbf b\times\mathbf c\ne\mathbf0.}$$

The two parameters are independent. Parallel directions would describe only a line (or a point if both vanish), not a plane.

A nonzero normal is $\mathbf n=\mathbf b\times\mathbf c$. Every in-plane displacement is perpendicular to it, so the other vector form is

$$\boxed{(\mathbf r-\mathbf a)\cdot\mathbf n=0\quad\Longleftrightarrow\quad\mathbf r\cdot\mathbf n=d,\qquad d=\mathbf a\cdot\mathbf n.}$$

Writing the normal in components gives the Cartesian form:

$$n_1x+n_2y+n_3z=d,\qquad \mathbf n=(n_1,n_2,n_3)\ne\mathbf0.$$

Multiplying the normal **and the constant** by the same nonzero scalar leaves the plane unchanged. The constant is not itself the distance from the origin unless the normal has unit magnitude (and its sign is treated appropriately).

<section class="worked-example" markdown="1">

### Example: connect the representations {#example-plane}

> **Original example.** A plane passes through $A=(1,0,2)$ with directions $\mathbf b=(1,1,0)$ and $\mathbf c=(0,1,1)$. Obtain both vector forms and a Cartesian equation. Explain why the directions determine a plane.

Use the cross product for the normal and substitute the given point to find the constant.


$$\mathbf n=(1,1,0)\times(0,1,1)=(1,-1,1),\qquad d=(1,0,2)\cdot(1,-1,1)=3.$$

The normal is nonzero, so the directions are independent:

$$\boxed{\mathbf r=(1,0,2)+\lambda(1,1,0)+\mu(0,1,1),\qquad\mathbf r\cdot(1,-1,1)=3,\qquad x-y+z=3.}$$

Substitution of a general parametric point gives $1+\lambda-(\lambda+\mu)+2+\mu=3$, checking that the full family lies in the plane.

</section>

## Intersections and Exceptional Cases {#intersections}

For a line and a plane, substitute the general line point into the plane:

$$\mathbf r=\mathbf a+t\mathbf b,\quad\mathbf r\cdot\mathbf n=d
\quad\Longrightarrow\quad t(\mathbf b\cdot\mathbf n)=d-\mathbf a\cdot\mathbf n.$$

- A nonzero coefficient of the parameter gives exactly one intersection.
- If the coefficient is zero but the right side is nonzero, the line is parallel to the plane and does not meet it.
- If both sides are zero, every point on the line lies in the plane.

For example, $\mathbf r=(1,0,0)+t(1,1,1)$ meets $x+y+z=4$ when $1+3t=4$, giving $t=1$ and intersection $(2,1,1)$. Substitution in both equations checks the result.

For two lines, use **different parameters**, equate coordinates and check all three. Solving two coordinate equations supplies a candidate; it does not prove the third equation agrees. Nonparallel lines in space can be skew and have no common point.

### Two planes: direction plus one common point {#plane-intersection}

For two nonparallel planes, their intersection direction is perpendicular to both normals:

$$\mathbf b=\mathbf n_1\times\mathbf n_2\ne\mathbf0.$$

Find one common point by solving the two coordinate equations (choose a convenient coordinate only if the resulting equations are consistent). Then give the line in the requested form and check the point in **both** planes, and its direction against **both** normals. A direction alone is not a line equation.

If the normals are parallel, compare the complete equations. Proportional normals with the same proportion in their constants give coincident planes; otherwise they give distinct parallel planes. A zero cross product cannot provide an intersection direction in either case.

## Angles: Choose the Correct Vectors {#angles}

For the smaller angle between two lines, use their direction vectors. For the smaller dihedral angle between two planes, use their normals:

$$\cos\alpha=\frac{\lvert\mathbf b_1\cdot\mathbf b_2\rvert}{\lVert\mathbf b_1\rVert\lVert\mathbf b_2\rVert},\qquad
\cos\phi=\frac{\lvert\mathbf n_1\cdot\mathbf n_2\rvert}{\lVert\mathbf n_1\rVert\lVert\mathbf n_2\rVert},\qquad 0\leq\alpha,\phi\leq90^\circ.$$

For a line and a plane the smaller angle to the normal is **complementary** to the angle to the plane. Hence

$$\boxed{\sin\theta=\frac{\lvert\mathbf b\cdot\mathbf n\rvert}{\lVert\mathbf b\rVert\lVert\mathbf n\rVert},\qquad0\leq\theta\leq90^\circ.}$$

A line parallel to a plane gives a zero numerator and angle zero; a normal line gives angle ninety degrees. These limiting cases are a quick way to catch a mistaken cosine. If an oriented or obtuse angle is specifically requested, use its stated orientation rather than automatically selecting the smaller angle.

![Two schematic panels: a line crossing a plane, with its angle theta measured to its projection and a dashed normal; and a perpendicular section showing P and its reflection Q on opposite sides of a plane, with midpoint H on the plane.](/assets/img/further-lines-planes.svg)

This schematic explains angle and reflection definitions; it contains no coordinates or results for the independent tasks.

## Distances and Reflections by Projection {#distances-and-reflections}

### Point to line {#point-line-distance}

Let $\mathbf p$ locate the point and let the line be $\mathbf r=\mathbf a+t\mathbf b$. Its nearest point $H$ satisfies perpendicularity:

$$\mathbf h=\mathbf a+t\mathbf b,\qquad (\mathbf p-\mathbf h)\cdot\mathbf b=0
\quad\Longrightarrow\quad (\mathbf p-\mathbf a)\cdot\mathbf b-t(\mathbf b\cdot\mathbf b)=0.$$

$$t(\mathbf b\cdot\mathbf b)=(\mathbf p-\mathbf a)\cdot\mathbf b
\quad\Longrightarrow\quad t=\frac{(\mathbf p-\mathbf a)\cdot\mathbf b}{\mathbf b\cdot\mathbf b},\qquad \mathbf b\cdot\mathbf b>0.$$

The distance is the magnitude of the displacement from the foot. Alternatively, use the parallelogram with base along the line and height equal to the required distance:

$$\boxed{D_{\mathrm{point,line}}=\lVert\mathbf p-\mathbf h\rVert=\frac{\lVert(\mathbf p-\mathbf a)\times\mathbf b\rVert}{\lVert\mathbf b\rVert}.}$$

These methods agree; a random point on the line generally does not give the shortest distance.

### Point to plane and reflection {#point-plane-reflection}

For the plane $\mathbf r\cdot\mathbf n=d$, follow the normal from the point to its foot:

$$\mathbf h=\mathbf p+s\mathbf n,\qquad
(\mathbf p+s\mathbf n)\cdot\mathbf n=d.$$

$$\mathbf p\cdot\mathbf n+s(\mathbf n\cdot\mathbf n)=d
\quad\Longrightarrow\quad s(\mathbf n\cdot\mathbf n)=d-\mathbf p\cdot\mathbf n
\quad\Longrightarrow\quad s=\frac{d-\mathbf p\cdot\mathbf n}{\mathbf n\cdot\mathbf n},\qquad\mathbf n\cdot\mathbf n>0.$$

Thus

$$\boxed{D_{\mathrm{point,plane}}=\lvert s\rvert\lVert\mathbf n\rVert=\frac{\lvert\mathbf p\cdot\mathbf n-d\rvert}{\lVert\mathbf n\rVert}.}$$

For a reflection, the perpendicular foot is the **midpoint**, not the image. Continue the same displacement once more:

$$\boxed{\mathbf q=2\mathbf h-\mathbf p=\mathbf p+2s\mathbf n.}$$

Check that the midpoint lies in the plane and that the displacement from the point to its image is parallel to the normal. A point already on the plane is fixed. This reasoning is used in January 2025 Q11; it does not expand FP2.13's list of specified reflection matrices.

<section class="lesson-check" markdown="1">

### Complete and check a projection {#repair-projection}

> **Original task.** For $P=(1,2,3)$ and the plane $x-y+z=0$, a student proposes $H=(1,0,3)$ because its second coordinate has been removed. Check this claim, find the actual foot, and find the reflection of $P$.

<details markdown="1">
<summary>Hint</summary>

Test whether the proposed foot is in the plane. Follow the plane's normal, not an arbitrarily chosen coordinate axis.

</details>

<details markdown="1">
<summary>Solution</summary>

The proposed foot gives $1-0+3=4$, so it is not in the plane. With normal $(1,-1,1)$,

$$s=\frac{0-(1-2+3)}3=-\frac23,\qquad \mathbf h=(1,2,3)-\frac23(1,-1,1)=\left(\frac13,\frac83,\frac73\right).$$

$$\mathbf q=2\mathbf h-\mathbf p=\left(-\frac13,\frac{10}3,\frac53\right).$$

The foot satisfies $1/3-8/3+7/3=0$. The image is twice as far from the original point as the foot is. A perpendicular displacement and a midpoint check establish the reflection.

</details>

</section>

## Complete Official Demonstrations {#official-problems}

<section class="worked-example" markdown="1">

### June 2024: choose the object and answer form {#example-june-2024}

**Original OxfordAQA question:** 9665/FM03, June 2024, Q10, QP pp. 16–17; paired MS pp. 14–15. The final form is part of the task.

> The plane $\Pi_1$ has vector equation
>
> $$\mathbf r\cdot\begin{pmatrix}1\\1\\3\end{pmatrix}=2.$$
>
> The line $L$ has Cartesian equation
>
> $$\frac{x-7}{2}=1-y=\frac{z-3}{4}.$$
>
> (a) Find the acute angle between the line $L$ and the plane $\Pi_1$. Give your answer to the nearest $0.1^\circ$. **[4 marks]**
>
> (b) The point $P$ has coordinates $(4,1,15)$. Find the shortest distance from $P$ to the line $L$. Give your answer in an exact form. **[4 marks]**
>
> (c) The plane $\Pi_2$ has Cartesian equation $x-3y+2z=1$. Find a vector equation for the line of intersection of the planes $\Pi_1$ and $\Pi_2$. Give your answer in the form $(\mathbf r-\mathbf a)\times\mathbf b=\mathbf0$. **[5 marks]**

This demonstration explains the choice of direction and normal, then checks every constraint for the distance and intersection.

Setting the common expression equal to a parameter gives direction $(2,-1,4)$. Use a complementary angle in (a). In (c), cross the two normals; setting the second coordinate to zero is one convenient way to find a common point.


The line has base point $(7,1,3)$ and direction $(2,-1,4)$; the first plane has normal $(1,1,3)$. Therefore

$$\sin\theta=\frac{\lvert2-1+12\rvert}{\sqrt{21}\sqrt{11}}=\frac{13}{\sqrt{231}},\qquad\boxed{\theta=58.8^\circ\text{ to the nearest }0.1^\circ.}$$

For the distance, the displacement from the base point to the given point is $(-3,0,12)$. Its perpendicular component can be measured by a cross product:

$$(-3,0,12)\times(2,-1,4)=(12,36,3),\qquad D=\frac{\sqrt{144+1296+9}}{\sqrt{21}}=\boxed{\sqrt{69}}.$$

As a separate check, perpendicular projection gives parameter $t=42/21=2$, foot $(11,-1,11)$, and displacement $(-7,2,4)$ whose scalar product with the line direction is $-14-2+16=0$. Its squared magnitude is $49+4+16=69$.

For the intersection,

$$\mathbf b=(1,1,3)\times(1,-3,2)=(11,1,-4).$$

Setting the second coordinate to zero in the plane equations gives $x+3z=2$ and $x+2z=1$, so a common point is $(-1,0,1)$. In the required form,

$$\boxed{\big(\mathbf r-(-1,0,1)\big)\times(11,1,-4)=\mathbf0.}$$

Check the point: $-1+0+3=2$ and $-1-0+2=1$. Check the direction: $11+1-12=0$ and $11-3-8=0$. A correct parametric line represents the same set, but on its own does not satisfy this question's specified final form.

</section>

<section class="worked-example" markdown="1">

### January 2025: intersections, a plane and a reflection {#example-january-2025}

**Original OxfordAQA question:** 9665/FM03, January 2025, Q11, QP pp. 20–23; paired MS pp. 17–18. Retain different parameters for the two lines.

> The line $L_1$ has Cartesian equation
>
> $$2x-12=\frac{y-7}{2}=5-z.$$
>
> The line $L_2$ has equation
>
> $$\left(\mathbf r-\begin{pmatrix}8\\w\\6\end{pmatrix}\right)\times\begin{pmatrix}-3\\2\\1\end{pmatrix}=\mathbf0\qquad\text{where }w\text{ is a constant.}$$
>
> (a) It is given that $L_1$ and $L_2$ intersect at a point. Find the value of $w$. **[5 marks]**
>
> (b) It is given that $L_1$ and $L_2$ lie in the plane $\Pi$. Find an equation of the plane $\Pi$. Give your answer in the form $\mathbf r\cdot\mathbf n=d$. **[3 marks]**
>
> (c) The point $P$ has position vector
>
> $$\begin{pmatrix}5\\-3\\1\end{pmatrix}.$$
>
> (i) The point $Q$ is the image of $P$ in a reflection in the plane $\Pi$. Find the position vector of $Q$. **[4 marks]**
>
> (ii) Find the exact distance of $P$ from $\Pi$. **[2 marks]**

Parameterise each line; the first component of the first direction is one half, not 2. Equate the first and third coordinates to find the two parameters, then use the second coordinate. In (c), first reach the perpendicular foot, then continue the same displacement.


$$\mathbf r_1=(6,7,5)+\lambda(1/2,2,-1),\qquad\mathbf r_2=(8,w,6)+\mu(-3,2,1).$$

The first and third coordinates give

$$\frac12\lambda+3\mu=2,\qquad\lambda+\mu=-1\quad\Longrightarrow\quad\lambda=-2,\quad\mu=1.$$

The common point is $(5,3,7)$. The remaining coordinate gives $7+2(-2)=w+2(1)$, hence $w=1$.

For the plane, the direction cross product can be scaled to an integer normal:

$$ (1/2,2,-1)\times(-3,2,1)=(4,5/2,7),\qquad \mathbf n=(8,5,14).$$

Using the base point of the first line,

$$d=(6,7,5)\cdot(8,5,14)=48+35+70=153,\qquad\boxed{\mathbf r\cdot(8,5,14)=153.}$$

Both directions have zero scalar product with this normal; the common point satisfies $40+15+98=153$.

For the reflection, take the normal line through the given point:

$$\mathbf h=(5,-3,1)+s(8,5,14),\qquad (5,-3,1)\cdot(8,5,14)=39,\qquad \mathbf n\cdot\mathbf n=285.$$

$$39+285s=153\quad\Longrightarrow\quad s=\frac25,\qquad \mathbf h=\left(\frac{41}5,-1,\frac{33}5\right).$$

$$\boxed{\mathbf q=(5,-3,1)+\frac45(8,5,14)=\left(\frac{57}5,1,\frac{61}5\right)},\qquad\boxed{D=\frac{2\sqrt{285}}5}.$$

The midpoint of the original point and its image is the foot. Substitution of that midpoint in the plane gives $(328+462)/5-5=153$. The point and image have equal and opposite signed residuals, −114 and 114, in the plane equation. These checks distinguish reflection from projection.

</section>

## Mixed Independent Practice {#practice}

The following are **original tasks**, with no official marks. Work without the examples open. State which geometric objects your vectors describe and check the final result in the original equations.

<section class="lesson-check" markdown="1">

### Question 1: change the plane {#practice-1}

> A line is given by $\mathbf r=(0,1,2)+t(2,0,-1)$. Write its Cartesian and cross-product forms. Determine its relationship to each plane: $\Pi:x-y+z=4$ and $\Sigma:x+2z=5$. Find any intersection and the smaller angle with $\Pi$. Then find the distance of $P=(1,2,3)$ from $\Pi$ and the reflection of $P$ in $\Pi$.
>
> **Original extension / 自拟补问.** Then also classify the same line relative to $\Omega:x+2z=4$, justifying the result for every parameter.

<details markdown="1">
<summary>Hint</summary>

One coordinate is fixed. Substitute a general line point into each plane before dividing by any parameter coefficient. A point-to-plane distance uses a different displacement from a line-to-plane angle.

</details>

<details markdown="1">
<summary>Solution</summary>

$$y=1,\qquad\frac{x}{2}=\frac{z-2}{-1},\qquad\big(\mathbf r-(0,1,2)\big)\times(2,0,-1)=\mathbf0.$$

In the first plane, $2t-1+2-t=4$ gives $t=3$ and intersection $(6,1,-1)$. In the second, $2t+2(2-t)=4\ne5$ for every parameter, so the line is parallel to that plane and has no intersection.

$$\sin\theta=\frac{\lvert(2,0,-1)\cdot(1,-1,1)\rvert}{\sqrt5\sqrt3}=\frac1{\sqrt{15}},\qquad\theta\approx15.0^\circ.$$

For the given point and the first plane,

$$D=\frac{\lvert1-2+3-4\rvert}{\sqrt3}=\frac2{\sqrt3},\qquad s=\frac{4-2}{3}=\frac23.$$

$$\mathbf h=(1,2,3)+\frac23(1,-1,1)=\left(\frac53,\frac43,\frac{11}3\right),\qquad\mathbf q=\left(\frac73,\frac23,\frac{13}3\right).$$

The midpoint lies in the plane: $5/3-4/3+11/3=4$. The displacement to the image is parallel to the normal.

For the extension, every parameter gives $x+2z=4$, so the whole line is contained in $\Omega$. The intersection is the entire line, not one point.

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 2: two planes and an angle {#practice-2}

> Let $\Pi_1:x+z=2$ and $\Pi_2:y+z=3$. Find their smaller dihedral angle and their intersection in cross-product form. Write a parametric form of $\Pi_1$ using two nonparallel directions. Explain why the planes $x+z=2$ and $2x+2z=5$ have no intersection.
>
> **Original extension / 自拟补问.** Compare also $x+z=2$ with $2x+2z=4$: identify their complete intersection set and explain why a zero normal cross product does not select a line.

<details markdown="1">
<summary>Hint</summary>

The intersection direction must lie in both planes. For the last pair, compare constants as well as normals.

</details>

<details markdown="1">
<summary>Solution</summary>

$$\mathbf n_1=(1,0,1),\quad\mathbf n_2=(0,1,1),\quad\cos\phi=\frac1{\sqrt2\sqrt2}=\frac12,\quad\phi=60^\circ.$$

$$\mathbf n_1\times\mathbf n_2=(-1,-1,1),\qquad\boxed{\big(\mathbf r-(2,3,0)\big)\times(-1,-1,1)=\mathbf0.}$$

The point satisfies both planes and the direction has zero scalar product with both normals. One plane representation is

$$\mathbf r=(2,0,0)+\lambda(0,1,0)+\mu(-1,0,1).$$

The two directions are nonparallel and every point has the required first-plus-third-coordinate sum. The final plane pair is distinct and parallel: doubling the first equation gives $2x+2z=4$, inconsistent with the other constant.

In the extension, the second complete equation is twice the first. The planes coincide and their intersection is the whole plane. A zero cross product alone cannot distinguish this from distinct parallel planes.

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 3: a false intersection and a new retry {#practice-3}

> A student claims that $\mathbf r=(0,0,0)+t(1,1,1)$ and $\mathbf r=(1,0,0)+s(0,1,2)$ meet at $(1,1,1)$ after solving the first two coordinates. Test the claim. Independently, find the nearest point on $\mathbf r=(1,0,0)+u(0,1,1)$ to $P=(3,2,0)$, and find that distance. Finally, describe how the reflection of $P$ in $x=1$ differs from its nearest point on this line.

<details markdown="1">
<summary>Hint</summary>

Check the unused coordinate of the proposed intersection. In the new task, the shortest displacement must be perpendicular to the line's direction; a plane reflection instead uses the plane's normal.

</details>

<details markdown="1">
<summary>Solution</summary>

The first coordinate forces $t=1$, and the second forces $s=1$, but then the third coordinates are 1 and 2. The directions are nonparallel, so the lines are skew, not intersecting.

For the independent distance task,

$$\mathbf h=(1,u,u),\quad (\mathbf p-\mathbf h)\cdot(0,1,1)=(3-1,2-u,-u)\cdot(0,1,1)=2-2u=0.$$

Thus $u=1$, the foot is $(1,1,1)$ and

$$D=\sqrt{2^2+1^2+(-1)^2}=\sqrt6.$$

The image in the plane is $(-1,2,0)$: only the displacement normal to that plane is reversed. Its midpoint with the original point is $(1,2,0)$, which is on the plane but not on the given line. A nearest point and a reflection image are different objects.

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 4: direction and unit length {#practice-4}

> **Original task / 自拟题.** For the oriented direction $\mathbf b=(1,-2,2)$, find the direction cosines and check their squared sum. Give the cosines for the reversed orientation. A student proposes $(2/3,-1/3,2/3)$ for the original direction because its squared sum is one. Decide whether that is sufficient.

<details markdown="1">
<summary>Hint</summary>

Find the magnitude, retain the component signs, and test the candidate with a common multiplier.

</details>

<details markdown="1">
<summary>Solution</summary>

$$\lVert\mathbf b\rVert=\sqrt{1+4+4}=3,\qquad(l,m,n)=\left(\frac13,-\frac23,\frac23\right).$$

$$\frac19+\frac49+\frac49=1,\qquad(-l,-m,-n)=\left(-\frac13,\frac23,-\frac23\right).$$

The candidate has squared norm one, but matching its first component to the given unit direction requires multiplier 2, whereas matching the second requires $1/2$. It is not parallel. Unit length is necessary but does not identify the requested direction. If this failed, close the help and try the next task.

</details>

</section>

<section class="lesson-check" markdown="1">

### Retry the direction {#direction-retry}

> **Original task / 自拟题.** The line is $(x-1)/2=(y+1)/3=(1-z)/6=t$. Find the direction cosines in the direction of increasing $t$. Explain the sign of the last one.

<details markdown="1">
<summary>Hint</summary>

Solve separately for the coordinates before reading the direction.

</details>

<details markdown="1">
<summary>Solution</summary>

$$x=1+2t,\quad y=-1+3t,\quad z=1-6t,\quad\mathbf b=(2,3,-6),\quad\lVert\mathbf b\rVert=7.$$

$$(l,m,n)=\left(\frac27,\frac37,-\frac67\right),\qquad\frac{4+9+36}{49}=1.$$

The third coordinate decreases as the parameter increases, so its angle with the positive third axis is obtuse and its cosine is negative.

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 5: rebuild from constraints {#practice-5}

> **Original task / 自拟题.** Without quoting a distance formula, derive the nearest-point parameter and squared distance from $\mathbf p$ to $\mathbf a+t\mathbf b$, where $\mathbf b\ne\mathbf0$. Explain why the foot is nearest. Separately derive the distance and reflection image for $\mathbf r\cdot\mathbf n=d$, where $\mathbf n\ne\mathbf0$. Explain why scaling a direction, or scaling both a plane normal and its constant, cannot change the geometric answers.

<details markdown="1">
<summary>Hint</summary>

For a line, impose membership and perpendicularity; for a plane, impose a normal displacement and membership; use the midpoint for reflection.

</details>

<details markdown="1">
<summary>Solution</summary>

$$\mathbf w=\mathbf p-\mathbf a,\quad (\mathbf w-t\mathbf b)\cdot\mathbf b=0
\iff t=\frac{\mathbf w\cdot\mathbf b}{\mathbf b\cdot\mathbf b}.$$

$$\begin{aligned}
D^2&=(\mathbf w-t\mathbf b)\cdot(\mathbf w-t\mathbf b)\\
&=\mathbf w\cdot\mathbf w-2t(\mathbf w\cdot\mathbf b)+t^2(\mathbf b\cdot\mathbf b)\\
&=\mathbf w\cdot\mathbf w-\frac{2(\mathbf w\cdot\mathbf b)^2}{\mathbf b\cdot\mathbf b}+\frac{(\mathbf w\cdot\mathbf b)^2}{\mathbf b\cdot\mathbf b}\\
&=\mathbf w\cdot\mathbf w-\frac{(\mathbf w\cdot\mathbf b)^2}{\mathbf b\cdot\mathbf b}.
\end{aligned}$$

For any other line point $\mathbf h+u\mathbf b$, the squared distance is $D^2+u^2\lVert\mathbf b\rVert^2\ge D^2$; the cross term vanishes by perpendicularity. This proves minimality. For the plane:

$$\mathbf h=\mathbf p+s\mathbf n,\quad \mathbf h\cdot\mathbf n=d
\iff\mathbf p\cdot\mathbf n+s(\mathbf n\cdot\mathbf n)=d
\iff s=\frac{d-\mathbf p\cdot\mathbf n}{\mathbf n\cdot\mathbf n}.$$

$$D=\lvert s\rvert\lVert\mathbf n\rVert
=\frac{\lvert d-\mathbf p\cdot\mathbf n\rvert}{\lVert\mathbf n\rVert},\qquad\mathbf q-\mathbf h=\mathbf h-\mathbf p
\iff\mathbf q=\mathbf p+2s\mathbf n.$$

Any in-plane displacement from the foot is perpendicular to $\mathbf p-\mathbf h$, so Pythagoras again proves minimality. Scaling the direction by nonzero $k$ changes its foot parameter to $t/k$ and leaves the foot unchanged. Scaling the normal and constant together by nonzero $m$ changes the normal parameter to $s/m$; foot, distance and image stay unchanged.

</details>

</section>

<section class="lesson-check" markdown="1">

### Retry all three coordinates {#coordinate-retry}

> **Original task / 自拟题.** Consider $L_1:\mathbf r=(1,0,2)+t(1,2,-1)$ and $L_2:\mathbf r=(0,1,c)+s(2,1,1)$. Find all $c$ for which they intersect and give the common point. Classify the lines when $c=1$. Show what each of the three coordinate equations contributes.

<details markdown="1">
<summary>Hint</summary>

Use independent parameters. Two coordinates give a candidate; the remaining coordinate restricts the constant.

</details>

<details markdown="1">
<summary>Solution</summary>

$$1+t=2s,\qquad2t=1+s\quad\Longrightarrow\quad t-2s=-1,\quad2t-s=1.$$

$$t=2s-1\quad\Longrightarrow\quad4s-2-s=1\quad\Longrightarrow\quad s=1,\quad t=1.$$

$$2-t=c+s\quad\Longrightarrow\quad1=c+1\quad\Longrightarrow\quad c=0.$$

Then both lines give $(2,2,1)$. If $c=1$, the same candidate parameters give third coordinates 1 and 2, so there is no intersection. The directions are not proportional, so the lines are skew. If the third equation was missed again, recover the counterexample in Question 3, then cover this answer and reconstruct all three equations.

</details>

</section>

<section class="lesson-check" markdown="1">

### Retry containment and coincidence {#branch-retry}

> **Original task / 自拟题.** For $L:\mathbf r=(1,0,1)+t(1,1,0)$ and $\Pi:x-y=1$, describe $L\cap\Pi$. Compare $\Pi$ with $2x-2y=2$ and with $2x-2y=3$, giving each intersection set. Do not divide by a zero coefficient.

<details markdown="1">
<summary>Hint</summary>

Substitute a general point. Compare constants using the same factor as the normals.

</details>

<details markdown="1">
<summary>Solution</summary>

$$x-y=(1+t)-t=1,\qquad 2(x-y)=2.$$

The first identity holds for every parameter, so $L\cap\Pi=L$. The second complete plane equation is twice that of $\Pi$, so their intersection is the whole plane. A constant of 3 contradicts $2(x-y)=2$: those planes are distinct and parallel, with empty intersection.

</details>

</section>

## Quick Reference {#quick-reference}

| Task | Vectors to select | Required check |
| --- | --- | --- |
| Direction cosines | Normalised nonzero direction | Sum of component squares is one |
| Line equation | One point and a nonzero direction | Fixed coordinates for zero components |
| Plane equation | Point and normal, or two independent in-plane directions | Point satisfies the equation |
| Line–plane intersection | General line point in the plane | Test the zero-coefficient cases |
| Two-plane intersection | Cross product of normals and one common point | Point and direction meet both constraints |
| Line–plane angle | Line direction and plane normal | Use the complementary angle |
| Plane–plane angle | The two normals | Select the requested angle |
| Point–line distance | Foot on line; displacement perpendicular to direction | Foot lies on the line |
| Point–plane distance | Foot along the normal | Foot lies in the plane |
| Plane reflection | Perpendicular foot as midpoint | Double the displacement to the foot |
{: .wide-table}

## Common Pitfalls and Next Attempt {#common-pitfalls}

- Reading a coefficient multiplying a coordinate as its direction component: introduce a parameter and solve for the coordinate first.
- A zero denominator in symmetric form: replace it with a fixed-coordinate condition.
- Two parallel plane directions: their cross product is zero; they cannot define a plane.
- Solving only two coordinates of two lines: always test the third.
- Using a normal as the plane-intersection direction: the direction must be perpendicular to both normals.
- Returning the angle with the normal when asked for the angle with the plane: check the parallel and perpendicular limiting cases.
- Dividing by a zero scalar product: decide whether the line is contained or disjoint before solving.
- Returning the foot as the reflection: use the midpoint condition and repeat the displacement.

**Next output:** use the [direction retry](#direction-retry) after a cosine error, the [coordinate retry](#coordinate-retry) after an unchecked coordinate, and the [branch retry](#branch-retry) after missing containment or coincidence. If you only quoted distance formulas, recover their derivation and attempt [Question 5](#practice-5), with help closed. Then do the course [mixed review](/alevel/a2-further-mathematics/#mixed-review) and, after intervening study, its [later review](/alevel/a2-further-mathematics/#later-review), justifying a reflecting plane using its normal.

**Learning route:** [Previous: vector products and coplanarity](/alevel/a2-further-mathematics/vector-products-and-coplanarity/) · [Next: matrix algebra](/alevel/a2-further-mathematics/matrix-algebra/) · [Further Pure Mathematics](/alevel/a2-further-mathematics/).

## Sources and Scope {#sources}

The specification and listed official QP/MS passages were reread on **23 October 2026**.

- OxfordAQA International A-level Further Mathematics **9665**, Unit FP2/FM03, specification **Version 5.2**, [FP2.12, PDF p. 19 / printed p. 20](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf#page=19): direction ratios/cosines, Cartesian geometry, both plane forms, cross-product line form, intersections and angles.
- [June 2024 FM03 QP Q10, pp. 16–17](/assets/pdf/fx-cg50/references/oxfordaqa-fm03-2024-june-question-paper.pdf#page=16) and [paired MS pp. 14–15](/assets/pdf/fx-cg50/references/oxfordaqa-fm03-2024-june-mark-scheme.pdf#page=14): line–plane angle, exact point–line distance and an intersection in the stipulated cross-product form.
- [January 2025 FM03 QP Q11, pp. 20–23](/assets/pdf/fx-cg50/references/oxfordaqa-fm03-2025-january-question-paper.pdf#page=20) and [paired MS pp. 17–18](/assets/pdf/fx-cg50/references/oxfordaqa-fm03-2025-january-mark-scheme.pdf#page=17): line intersection, plane equation, reflection and exact point–plane distance.

The official questions retain their English wording, data, method/form requirements and source marks; the worked explanations and other tasks are author-written. Distances and reflection are taught by projection, with direct formal-paper evidence. The formula booklet has not been checked for individual entries, so these derived relations are not labelled additional memorisation requirements. No new calculator button sequence, skew-line distance syllabus item or classroom learning outcome is claimed.
