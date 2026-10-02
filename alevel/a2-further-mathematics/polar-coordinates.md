---
title: Polar Coordinates
layout: subjects
mathjax: true
grade: a2
subject: a2-further-mathematics
permalink: /alevel/a2-further-mathematics/polar-coordinates/
toc_headings: h2
study_page: true
---

[Further Pure Mathematics](/alevel/a2-further-mathematics/) · FP2.3 Polar coordinates

Describe a point using a distance and an angle. Convert equations, sketch polar curves and find areas using the correct angular limits.

- **Learning:** start with the [method](#method), then work through the examples.
- **Homework help:** choose [coordinates](#coordinates), [equations](#equations), [sketching](#sketching), [intersections](#intersections) or [areas](#areas).
- **Revision:** try [practice](#practice) before opening the solutions, then use the [quick reference](#quick-reference).

Textbook: Chapter 21, Sections 21.1–21.3, printed pp. 256–266; review and practice on pp. 267–269, in *International A Level Further Mathematics*.

**Before you start:** review [modulus and argument](/alevel/a2-further-mathematics/de-moivres-theorem/#powers-and-proof), [trigonometry](/alevel/a2-mathematics/trigonometric-functions-and-formulae/) and [integration](/alevel/a2-mathematics/integration/). You should know the area of a circular sector, the double-angle identities and how to find an angle in the correct quadrant. Use **radians** throughout.

## Method

**Learning goal:** move between polar and Cartesian coordinates, sketch curves using positive radii, find intersections and calculate the area of a specified region.

- **A point?** Use $x=r\cos\theta$ and $y=r\sin\theta$, or find $r=\sqrt{x^2+y^2}$ and check the quadrant for $\theta$.
- **An equation?** Replace $r^2$ by $x^2+y^2$, $r\cos\theta$ by $x$ and $r\sin\theta$ by $y$. Multiplying by $r$ often helps.
- **A sketch?** Check the angular domain, symmetry, zeros of $r$ and some simple points. Draw only the parts with $r>0$.
- **An area?** Sketch the region first. Find the angles that bound it, then use $\frac12\int r^2\,\mathrm d\theta$. Split the integral if the bounding curve changes.

**Course convention:** $r>0$ for points away from the pole. A value $r=0$ locates the pole as a boundary point or a point where the curve meets it. Do not plot negative values of $r$ as an extra loop.

## Coordinates

The **pole** is the fixed point $O$. The **initial line** is the fixed ray from which angles are measured, usually the positive $x$-axis.

A point has polar coordinates $(r,\theta)$:

- $r$ is its distance from the pole.
- $\theta$ is the angle measured anticlockwise from the initial line. A negative angle is measured clockwise.

The relations are

$$\boxed{\begin{aligned}
x&=r\cos\theta,\qquad y=r\sin\theta,\\
r^2&=x^2+y^2.
\end{aligned}}$$

For a non-zero point, $r=\sqrt{x^2+y^2}>0$. If $x\ne0$, $\tan\theta=\frac yx$, but the inverse tangent alone may give the wrong quadrant. On the $y$-axis, use $\theta=\frac\pi2$ or $-\frac\pi2$ directly.

Angles that differ by an integer multiple of $2\pi$ locate the same point. When a principal value is requested, use $-\pi<\theta\le\pi$. At the pole, the angle is not unique.

### Example 1 — Convert points in both directions

**Question:** convert $P=(4,\frac\pi6)$ from polar to Cartesian coordinates. Convert $Q=(-1,-\sqrt3)$ from Cartesian to polar coordinates, using a principal angle.

For $P$,

$$\begin{aligned}
x&=4\cos\frac\pi6=2\sqrt3,\\
y&=4\sin\frac\pi6=2.
\end{aligned}$$

Thus $P$ has Cartesian coordinates $\boxed{(2\sqrt3,2)}$.

For $Q$,

$$r=\sqrt{(-1)^2+(-\sqrt3)^2}=2.$$

The reference angle is $\frac\pi3$, but both coordinates are negative. The point is in the third quadrant, so the principal angle is $-\frac{2\pi}{3}$:

$$\boxed{Q=\left(2,-\frac{2\pi}{3}\right)
\quad\text{in polar coordinates}.}$$

**Check:** $2\cos(-\frac{2\pi}{3})=-1$ and $2\sin(-\frac{2\pi}{3})=-\sqrt3$. The angle $\frac\pi3$ would give both coordinates positive.

## Equations

Keep the allowed range of $\theta$ when converting an equation. A Cartesian equation may describe more of a curve than a restricted polar domain does.

### Example 2 — A circle through the pole

**Question:** find a polar equation for $x^2+y^2=4x$. State the centre and radius of the circle.

Substitute the coordinate relations:

$$r^2=4r\cos\theta.$$

For $r>0$, divide by $r$:

$$\boxed{r=4\cos\theta.}$$

The positive-radius part is $-\frac\pi2<\theta<\frac\pi2$. At the endpoints, $r=0$ gives the pole.

In Cartesian form,

$$x^2-4x+y^2=0
\quad\Rightarrow\quad
(x-2)^2+y^2=4.$$

The circle has centre $(2,0)$ and radius $2$.

**Check:** the furthest point on the initial line has $r=4$. The circle touches the $y$-axis at the pole.

**Common mistake:** dividing by $r$ and forgetting to check the pole separately.

### Example 3 — A straight line

**Question:** find the Cartesian equation of

$$r=2\sec\left(\frac\pi3-\theta\right).$$

Multiply by $\cos(\frac\pi3-\theta)$, then expand:

$$\begin{aligned}
2
&=r\cos\left(\frac\pi3-\theta\right)\\
&=r\cos\frac\pi3\cos\theta
+r\sin\frac\pi3\sin\theta\\
&=\frac12x+\frac{\sqrt3}{2}y.
\end{aligned}$$

Hence

$$\boxed{x+\sqrt3\,y=4.}$$

For positive $r$, the denominator must be positive. One interval that covers the line is $-\frac\pi6<\theta<\frac{5\pi}{6}$. At its endpoints the secant is undefined, rather than zero.

**Check:** the intercepts are $(4,0)$ and $(0,\frac4{\sqrt3})$. Every point on the line has $\frac12x+\frac{\sqrt3}{2}y=2>0$, as required.

## Sketching

Start with the specified angular domain. Find where $r>0$ before making a table.

- $r=k$, $k>0$, is a circle centred at the pole.
- $r=a\cos\theta$, $a>0$, gives a circle centred at $(\frac a2,0)$ with radius $\frac a2$.
- $r=a\sin\theta$, $a>0$, gives a circle centred at $(0,\frac a2)$ with radius $\frac a2$.
- If replacing $\theta$ by $-\theta$ leaves both the equation and domain unchanged, the curve is symmetric about the initial line.
- If replacing $\theta$ by $\pi-\theta$ leaves the equation and domain unchanged, the curve is symmetric about the line $\theta=\frac\pi2$.

Check the zeros and largest values of $r$. Plot points at simple angles, then join them smoothly. A **loop** starts and ends at the pole. Do not join two parts through an interval where $r<0$ or the function is undefined.

### Example 4 — Three loops

**Question:** sketch $r=2\cos3\theta$ for $-\pi\le\theta\le\pi$, using positive radii.

The zeros satisfy $\cos3\theta=0$. For the loop around the initial line,

$$-\frac\pi6<\theta<\frac\pi6,$$

with $r=0$ at its two ends. Useful points are:

| Angle $\theta$ | Radius $r$ | Position |
|---|---|---|
| $-\frac\pi6$ | $0$ | Pole |
| $-\frac\pi{12}$ | $\sqrt2$ | Below the initial line |
| $0$ | $2$ | Tip of the loop |
| $\frac\pi{12}$ | $\sqrt2$ | Above the initial line |
| $\frac\pi6$ | $0$ | Pole |

The other two positive-radius intervals are

$$\left(-\frac{5\pi}{6},-\frac\pi2\right)
\quad\text{and}\quad
\left(\frac\pi2,\frac{5\pi}{6}\right).$$

Their middle angles are $-\frac{2\pi}{3}$ and $\frac{2\pi}{3}$. There are three congruent loops, each reaching radius $2$.

**Check:** increasing $\theta$ by $\frac{2\pi}{3}$ leaves $\cos3\theta$ unchanged, so the three loops repeat by rotation.

### Example 5 — Exclude a negative-radius part

**Question:** sketch $r=1+2\cos\theta$ for $-\pi\le\theta\le\pi$.

The curve is symmetric about the initial line. Solve $r=0$:

$$1+2\cos\theta=0
\quad\Rightarrow\quad
\theta=\pm\frac{2\pi}{3}.$$

Thus $r>0$ only for

$$\boxed{-\frac{2\pi}{3}<\theta<\frac{2\pi}{3}.}$$

The endpoints both locate the pole. Important points are:

| Angle $\theta$ | Radius $r$ | Cartesian position |
|---|---|---|
| $0$ | $3$ | $(3,0)$ |
| $\frac\pi3$ | $2$ | $(1,\sqrt3)$ |
| $\frac\pi2$ | $1$ | $(0,1)$ |
| $\frac{2\pi}{3}$ | $0$ | Pole |

Reflect the upper part in the initial line to obtain the lower part.

![Three separate polar sketches: the circle r equals 4 cos theta, three positive-radius loops of r equals 2 cos 3 theta, and the positive-radius part of r equals 1 plus 2 cos theta without an inner loop](/assets/img/further-polar-curves.svg)

**Check:** at $\theta=\pi$, the formula gives $r=-1$. That point must not appear on this course's sketch. Some graphing tools draw an extra inner loop from negative radii; exclude it.

## Intersections

For two curves $r=f(\theta)$ and $r=g(\theta)$ with positive radii, non-pole intersections on the same ray satisfy $f(\theta)=g(\theta)$. Keep only solutions in both domains with $r>0$.

**Check the pole separately.** Two curves may pass through it at different angles, so equating their radii at the same angle can miss that intersection.

### Example 6 — Intersections and a chord

**Question:** the curve $r=4(1-\cos\theta)$, $0\le\theta<2\pi$, meets the circle $x^2+y^2=4$ at $A$ and $B$. Find their polar coordinates and the length of $AB$.

The circle is $r=2$. Equate the positive radii:

$$\begin{aligned}
4(1-\cos\theta)&=2,\\
\cos\theta&=\frac12.
\end{aligned}$$

Within the given domain, $\theta=\frac\pi3$ or $\frac{5\pi}{3}$. Therefore

$$\boxed{A=\left(2,\frac\pi3\right),
\qquad B=\left(2,\frac{5\pi}{3}\right).}$$

Their Cartesian coordinates are $(1,\sqrt3)$ and $(1,-\sqrt3)$, so

$$\boxed{AB=2\sqrt3.}$$

**Check:** the chord is vertical and has length $2(2\sin\frac\pi3)$. The pole lies on the first curve but not on the circle, so it is not another intersection.

## Areas

If $r=f(\theta)$ bounds a region swept from $\theta=\alpha$ to $\theta=\beta$, its area is

$$\boxed{A=\frac12\int_\alpha^\beta r^2\,\mathrm d\theta.}$$

A small angular slice is approximately a circular sector of area $\frac12r^2\,\mathrm d\theta$. Adding the slices gives the integral.

Use an interval on which the curve has non-negative radius and the required region is swept **once**. For a full loop, find its two ends at the pole. Squaring $r$ does not make a negative-radius interval valid.

### Example 7 — Area of one loop

**Question:** find the area of one loop of $r=2\cos3\theta$.

Use the loop around the initial line from Example 4. Its limits are $-\frac\pi6$ and $\frac\pi6$:

$$\begin{aligned}
A
&=\frac12\int_{-\pi/6}^{\pi/6}4\cos^23\theta\,\mathrm d\theta\\
&=\int_{-\pi/6}^{\pi/6}(1+\cos6\theta)\,\mathrm d\theta\\
&=\left[\theta+\frac16\sin6\theta\right]_{-\pi/6}^{\pi/6}\\
&=\boxed{\frac\pi3}.
\end{aligned}$$

**Check:** symmetry gives the same answer from twice the area between $0$ and $\frac\pi6$. All three loops together have area $\pi$.

**Common mistake:** using a full revolution to find one loop, or integrating over intervals with negative $r$.

### Example 8 — A spiral sector

**Question:** find the area bounded by $r=2\theta$ and the two radii $\theta=\frac\pi2$ and $\theta=\pi$.

The radius increases from $\pi$ to $2\pi$ over this interval. The region lies between the two rays and the spiral segment:

$$\begin{aligned}
A
&=\frac12\int_{\pi/2}^{\pi}(2\theta)^2\,\mathrm d\theta\\
&=2\left[\frac{\theta^3}{3}\right]_{\pi/2}^{\pi}\\
&=\frac23\left(\pi^3-\frac{\pi^3}{8}\right)\\
&=\boxed{\frac{7\pi^3}{12}}.
\end{aligned}$$

**Check:** the region is in the second quadrant. The integral does not start at zero because the specified first radius is $\theta=\frac\pi2$.

### Example 9 — The bounding curve changes

**Question:** find the area inside both $r=1+\cos\theta$ and $r=\sqrt3\sin\theta$.

The first curve is a cardioid. The second is a circle above the initial line, with centre $(0,\frac{\sqrt3}{2})$ and radius $\frac{\sqrt3}{2}$. Only the upper half of the cardioid can contribute to the common region, so work with $0\le\theta\le\pi$.

Find where the radii are equal:

$$1+\cos\theta=\sqrt3\sin\theta.$$

Using half-angle identities,

$$\begin{aligned}
2\cos^2\frac\theta2
&=2\sqrt3\sin\frac\theta2\cos\frac\theta2,\\
\cos\frac\theta2
\left(\cos\frac\theta2-\sqrt3\sin\frac\theta2\right)
&=0.
\end{aligned}$$

The solutions are $\theta=\pi$ at the pole, and $\theta=\frac\pi3$ with $r=\frac32$. Denote the non-pole intersection by $P$.

![The common region inside the cardioid r equals 1 plus cos theta and the circle r equals square root of 3 sin theta, with the bounding curve changing at P with polar coordinates 3 over 2 and pi over 3](/assets/img/further-polar-overlap.svg)

For $0<\theta<\frac\pi3$, the circle has the smaller radius. For $\frac\pi3<\theta<\pi$, the cardioid has the smaller radius. Thus

$$\begin{aligned}
A
&=\frac12\int_0^{\pi/3}3\sin^2\theta\,\mathrm d\theta\\
&\quad+\frac12\int_{\pi/3}^{\pi}(1+\cos\theta)^2\,\mathrm d\theta.
\end{aligned}$$

For the first part, use $\sin^2\theta=\frac12(1-\cos2\theta)$:

$$\begin{aligned}
A_1
&=\frac34\left[\theta-\frac12\sin2\theta\right]_0^{\pi/3}\\
&=\frac\pi4-\frac{3\sqrt3}{16}.
\end{aligned}$$

For the second part, expand the square and use $\cos^2\theta=\frac12(1+\cos2\theta)$:

$$\begin{aligned}
A_2
&=\frac12\left[\frac32\theta+2\sin\theta
+\frac14\sin2\theta\right]_{\pi/3}^{\pi}\\
&=\frac\pi2-\frac{9\sqrt3}{16}.
\end{aligned}$$

Therefore

$$\boxed{A=A_1+A_2=\frac{3\pi}{4}-\frac{3\sqrt3}{4}.}$$

**Check:** the common region has area less than the whole circle, whose area is $\frac{3\pi}{4}$. It uses the **smaller radius** on each ray.

For a region between an outer and an inner curve on the same angular interval, use

$$A=\frac12\int_\alpha^\beta
\left(r_{\text{outer}}^2-r_{\text{inner}}^2\right)\,\mathrm d\theta.$$

Do not use $\frac12\int(r_{\text{outer}}-r_{\text{inner}})^2\,\mathrm d\theta$. Sketch first to decide whether the required region calls for a difference or a change of bounding curve.

## Practice

Try each question before opening the hint or solution. Questions 1–5 are **original practice written for this lesson**. Questions 6–8 retain the AQA wording and marks reproduced in the supplied textbook.

### Question 1 — Coordinates and a quadrant

Convert the Cartesian point $(2,-2\sqrt3)$ to polar coordinates using a principal angle. Convert the polar point $(3,\frac{5\pi}{6})$ to Cartesian coordinates.

<details markdown="1">
<summary>Hint</summary>

Find the distance from the pole first. The Cartesian point is in the fourth quadrant.

</details>

<details markdown="1">
<summary>Solution and check</summary>

For $(2,-2\sqrt3)$,

$$r=\sqrt{4+12}=4,\qquad\theta=-\frac\pi3.$$

Its polar coordinates are $\boxed{(4,-\frac\pi3)}$.

For $(3,\frac{5\pi}{6})$,

$$\begin{aligned}
x&=3\cos\frac{5\pi}{6}=-\frac{3\sqrt3}{2},\\
y&=3\sin\frac{5\pi}{6}=\frac32.
\end{aligned}$$

The Cartesian coordinates are $\boxed{(-\frac{3\sqrt3}{2},\frac32)}$.

**Check:** the first point has $x>0,y<0$, and the second has $x<0,y>0$. Both coordinate pairs give the required distance from the pole.

</details>

### Question 2 — Convert and keep the domain

Find a polar equation for $xy=2$. State where positive radii are possible in $-\pi<\theta\le\pi$.

<details markdown="1">
<summary>Hint</summary>

Use $xy=r^2\cos\theta\sin\theta$ and $\sin2\theta=2\sin\theta\cos\theta$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$r^2\cos\theta\sin\theta=2
\quad\Rightarrow\quad
\boxed{r^2\sin2\theta=4.}$$

For positive $r$, this can also be written as

$$r=\frac2{\sqrt{\sin2\theta}}.$$

The denominator must be real and non-zero, so $\sin2\theta>0$. In the specified domain,

$$\boxed{-\pi<\theta<-\frac\pi2
\quad\text{or}\quad
0<\theta<\frac\pi2.}$$

**Check:** these are the first and third quadrants, where $x$ and $y$ have the same sign. The pole and the axes are not on $xy=2$.

</details>

### Question 3 — Positive-radius loops

Sketch $r=2\sin2\theta$ for $0\le\theta\le2\pi$, using this course's radius convention. State the number of loops and find the area of one loop.

<details markdown="1">
<summary>Hint</summary>

Find where $\sin2\theta>0$. One loop runs from $\theta=0$ to $\theta=\frac\pi2$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Positive radii occur in

$$0<\theta<\frac\pi2
\quad\text{and}\quad
\pi<\theta<\frac{3\pi}{2}.$$

The endpoints give the pole. There are **two loops**, in the first and third quadrants. Their tips have radius $2$ at $\theta=\frac\pi4$ and $\frac{5\pi}{4}$.

For one loop,

$$\begin{aligned}
A
&=\frac12\int_0^{\pi/2}4\sin^22\theta\,\mathrm d\theta\\
&=\int_0^{\pi/2}(1-\cos4\theta)\,\mathrm d\theta\\
&=\left[\theta-\frac14\sin4\theta\right]_0^{\pi/2}\\
&=\boxed{\frac\pi2}.
\end{aligned}$$

**Check:** the two loops are related by a rotation of $\pi$, so their combined area is $\pi$. A four-loop plot would include negative radii and does not follow the convention used here.

</details>

### Question 4 — Part of a circle

Find the area swept by $r=4\cos\theta$ between $\theta=0$ and $\theta=\frac\pi4$.

<details markdown="1">
<summary>Hint</summary>

Use the stated angular limits, rather than the limits of the whole circle. Apply the double-angle identity to $\cos^2\theta$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\begin{aligned}
A
&=\frac12\int_0^{\pi/4}16\cos^2\theta\,\mathrm d\theta\\
&=4\left[\theta+\frac12\sin2\theta\right]_0^{\pi/4}\\
&=\boxed{\pi+2}.
\end{aligned}$$

**Check:** the whole circle has area $4\pi$, and the upper half has area $2\pi$. The specified region has smaller area than either. Its angle is measured at the pole, not at the circle's centre.

</details>

### Question 5 — A pole intersection at different angles

The circles $r=2\cos\theta$ and $r=2\sin\theta$ meet at the pole and at one other point. Find that point and the area inside both circles.

<details markdown="1">
<summary>Hint</summary>

The common region is in the first quadrant. Find where $\sin\theta=\cos\theta$, then use the smaller radius on each side of that angle.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The first circle passes through the pole at $\theta=\pm\frac\pi2$. The second does so at $\theta=0$ or $\pi$. These locate the same point despite the different angles.

For the non-pole intersection in the first quadrant,

$$\begin{aligned}
2\cos\theta&=2\sin\theta,\\
\theta&=\frac\pi4,\qquad r=\sqrt2.
\end{aligned}$$

Thus the other point is $\boxed{(\sqrt2,\frac\pi4)}$, or $(1,1)$ in Cartesian coordinates.

For $0<\theta<\frac\pi4$, $2\sin\theta$ is smaller. For $\frac\pi4<\theta<\frac\pi2$, $2\cos\theta$ is smaller. Therefore

$$\begin{aligned}
A
&=\frac12\int_0^{\pi/4}4\sin^2\theta\,\mathrm d\theta\\
&\quad+\frac12\int_{\pi/4}^{\pi/2}4\cos^2\theta\,\mathrm d\theta\\
&=\left[\theta-\frac12\sin2\theta\right]_0^{\pi/4}\\
&\quad+\left[\theta+\frac12\sin2\theta\right]_{\pi/4}^{\pi/2}\\
&=\boxed{\frac\pi2-1}.
\end{aligned}$$

**Check:** each circle has radius $1$, so the common area must be less than $\pi$. The two integral pieces are equal by reflection in the line $y=x$.

</details>

### Question 6 — AQA: a Cartesian equation

**Original AQA question.** AQA MFP3, June 2014; textbook Chapter 21, practice examination Question 2, printed p. 267. **4 marks.**

A curve has polar equation $r(4-3\cos\theta)=4$. Find its Cartesian equation in the form $y^2=f(x)$.

<details markdown="1">
<summary>Hint</summary>

Expand the equation and use $r\cos\theta=x$. Isolate $r$ before squaring.

</details>

<details markdown="1">
<summary>Worked solution and check</summary>

$$4r-3x=4
\quad\Rightarrow\quad
r=1+\frac34x.$$

Square and use $r^2=x^2+y^2$:

$$\begin{aligned}
x^2+y^2
&=\left(1+\frac34x\right)^2\\
&=1+\frac32x+\frac9{16}x^2.
\end{aligned}$$

Hence

$$\boxed{y^2=1+\frac32x-\frac7{16}x^2.}$$

**Check:** at $\theta=0$, $r=4$ and the point $(4,0)$ satisfies the equation. The Cartesian curve has $-\frac47\le x\le4$, so $1+\frac34x$ is positive throughout; squaring has not added a negative-radius branch.

This is our worked solution, not an official mark scheme.

</details>

### Question 7 — AQA: a circle using the origin as pole

**Original AQA question.** AQA MFP3, June 2013; textbook Chapter 21, practice examination Question 3, printed p. 267. **4 marks.**

The Cartesian equation of a circle is $(x+8)^2+(y-6)^2=100$.

Using the origin $O$ as the pole and the positive $x$-axis as the initial line, find the polar equation of this circle, giving your answer in the form

$$r=p\sin\theta+q\cos\theta.$$

<details markdown="1">
<summary>Hint</summary>

Expand the squares first. The constant terms cancel, since the circle passes through the origin.

</details>

<details markdown="1">
<summary>Worked solution and check</summary>

Expanding gives

$$x^2+y^2+16x-12y=0.$$

Substitute the polar relations:

$$r^2+16r\cos\theta-12r\sin\theta=0.$$

For $r>0$, divide by $r$:

$$\boxed{r=12\sin\theta-16\cos\theta.}$$

Thus $p=12$ and $q=-16$.

**Check:** the Cartesian centre is $(-8,6)$ and the radius is $10$. Its distance from the origin is also $10$, so the circle passes through the pole. The zeros of the polar equation retain that boundary point.

This is our worked solution, not an official mark scheme.

</details>

### Question 8 — AQA: area of a loop

**Original AQA question.** AQA MFP3, January 2009; textbook Chapter 21, practice examination Question 1, printed p. 267. **6 marks.** The diagram is redrawn for this lesson.

The diagram shows a sketch of a loop, the pole $O$ and the initial line.

![Redrawn sketch of the AQA loop above the initial line, starting and ending at the pole O](/assets/img/further-polar-practice-loop.svg)

The polar equation of the loop is

$$r=(2+\cos\theta)\sqrt{\sin\theta},
\qquad0\le\theta\le\pi.$$

Find the area enclosed by the loop.

<details markdown="1">
<summary>Hint</summary>

The loop starts and ends where $\sin\theta=0$. Squaring $r$ removes the square root. Use $u=2+\cos\theta$ in the integral.

</details>

<details markdown="1">
<summary>Worked solution and check</summary>

The radius is positive for $0<\theta<\pi$ and zero at both ends. Thus

$$A=\frac12\int_0^\pi(2+\cos\theta)^2\sin\theta\,\mathrm d\theta.$$

Use $u=2+\cos\theta$ and $\mathrm du=-\sin\theta\,\mathrm d\theta$. The limits are $u=3$ at $\theta=0$ and $u=1$ at $\theta=\pi$:

$$\begin{aligned}
A
&=-\frac12\int_3^1u^2\,\mathrm du\\
&=\frac12\left[\frac{u^3}{3}\right]_1^3\\
&=\frac{27-1}{6}\\
&=\boxed{\frac{13}{3}}.
\end{aligned}$$

**Check:** reversing the limits removes the minus sign. The area is positive, and there is no symmetry about the $y$-axis to justify doubling half of this loop.

This is our worked solution, not an official mark scheme.

</details>

## Quick Reference

| Task | Method | Check |
|---|---|---|
| Polar to Cartesian | $x=r\cos\theta$, $y=r\sin\theta$ | Match the signs to the quadrant |
| Cartesian to polar | $r=\sqrt{x^2+y^2}$; find the angle from the position | Inverse tangent alone can give the wrong quadrant |
| Convert an equation | Use $r^2=x^2+y^2$, $r\cos\theta=x$, $r\sin\theta=y$ | Keep the original domain and check the pole |
| Sketch a curve | Positive-radius intervals, zeros, symmetry and simple points | Exclude negative radii and undefined intervals |
| Intersections | Equate positive radii on the same ray | Check the pole separately, even at different angles |
| One loop | $\displaystyle A=\frac12\int_\alpha^\beta r^2\,\mathrm d\theta$ between its ends | Sweep the required loop once |
| Common region | Use the smaller radius on each ray | Split where the bounding curve changes |
| Outer minus inner | Integrate $\frac12(r_{\text{outer}}^2-r_{\text{inner}}^2)$ | Subtract the squares, not the radii before squaring |

**After practice:** if the quadrant was wrong, repeat Question 1. If a converted equation had an invalid domain, repeat Question 2. If the sketch included negative radii, repeat Question 3. If an area used the whole curve instead of the given sector, repeat Question 4. If the pole or a change of boundary was missed, repeat Question 5. If conversion was difficult, repeat Questions 6–7. If the substitution gave a negative area, repeat Question 8.

**You should be able to:** convert points and equations, sketch positive-radius curves, identify every intersection and use a sketch to set up the area integral for the required region.

The lesson follows FP2.3 of the [OxfordAQA Further Mathematics 9665 specification](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf). Worked examples are teaching material. Questions 6–8 retain the AQA questions and marks from the supplied textbook.

**Learning path:** [Previous: De Moivre's Theorem](/alevel/a2-further-mathematics/de-moivres-theorem/) · [Next: Calculus of Inverse Trigonometric Functions](/alevel/a2-further-mathematics/inverse-trigonometric-functions/) · [Back to the course](/alevel/a2-further-mathematics/).
