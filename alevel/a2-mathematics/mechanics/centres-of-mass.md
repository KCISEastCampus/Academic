---
title: Centres of Mass
layout: subjects
mathjax: true
grade: a2
subject: m2
permalink: /alevel/a2-mathematics/mechanics/centres-of-mass/
toc_headings: h2
study_page: true
---

[A2 Mechanics](/alevel/a2-mathematics/mechanics/) · M2.3 Statics and forces

Find a body's centre of mass and use it as the point through which its weight acts in a uniform gravitational field. Work with particles, uniform laminae and composite bodies, then find a suspended body's position or the forces supporting it.

- **Learning:** start with [particle systems](#a-system-of-particles), then study [uniform bodies](#uniform-bodies-and-symmetry), [composite laminae](#composite-laminae) and [suspended bodies](#suspended-bodies).
- **Homework help:** choose an origin, list each part's mass and centre, and use the same coordinates for every part.
- **Revision:** try [practice](#practice) with the solutions closed. Check the mass, coordinates and final position.

Textbook: Chapter 12, Sections 12.1–12.4 (printed pp. 184–197). This lesson uses the textbook terms *centre of mass*, *centre of gravity*, *uniform lamina*, *line of symmetry* and *suspended body*.

**Before you start:** review [Moments and Rigid Objects in Equilibrium](/alevel/a2-mathematics/mechanics/moments-and-rigid-objects/). Use $g=9.8\,\mathrm{m\,s^{-2}}$ unless given another value. Keep exact values during calculations and give final numerical answers to three significant figures, or one decimal place for angles, unless asked otherwise.

All worked examples and practice questions are self-written, not official past-paper questions. No official marks are assigned. Diagram lengths and force arrows are not drawn to a common scale.

## Centre of Mass and Centre of Gravity

The **centre of gravity** is the point through which the resultant weight acts. Its weight gives the same moment as the weights of all the parts. When $g$ is constant throughout a body, its centre of gravity and **centre of mass** are at the same point, $G$. This is the model used here.

For a rigid body, use the total weight acting at $G$ when finding support forces and moments. The centre of mass need not lie in the material itself: a ring's centre is in its hole.

## A System of Particles

For masses $m_1,m_2,\ldots$ at coordinates $(x_1,y_1), (x_2,y_2),\ldots$, let the total mass be $M$ and the centre of mass be $(\bar x,\bar y)$.

$$M=\sum m_i,\qquad M\bar x=\sum m_ix_i,\qquad M\bar y=\sum m_iy_i.$$

Thus each coordinate is a **mass-weighted average**. For particles on a line, only one coordinate is needed. In three dimensions, calculate $\bar z$ in the same way. In position-vector form:

$$\bar{\mathbf r}=\frac{\sum m_i\mathbf r_i}{\sum m_i}.$$

Use signed coordinates. A distance from an axis is non-negative; calculate the coordinate first, then take its magnitude if a distance is asked for. A light rod or framework has negligible mass and contributes nothing to the sums.

### Example 1: particles on a line and in space

**Question:** particles of masses $3$, $2$ and $5\,\mathrm{kg}$ lie on a light straight rod at $x=0$, $5$ and $8\,\mathrm m$. Find their centre of mass.

$$\bar x=\frac{3(0)+2(5)+5(8)}{3+2+5}=\boxed{5\,\mathrm m}.$$

For a separate system, two particles of masses $2m$ and $3m$, where $m>0$, have position vectors $(1,0,2)$ and $(4,5,-1)$ metres. Their centre of mass has position vector:

$$\bar{\mathbf r}=\frac{2m(1,0,2)+3m(4,5,-1)}{5m}
=\boxed{\left(\frac{14}{5},3,\frac15\right)\mathrm m}.$$

**Check:** moments of mass about $x=5$ in the rod problem add to zero: $3(-5)+2(0)+5(3)=0$. Each coordinate of the vector answer lies between the corresponding particle coordinates.

**Common mistake:** taking the ordinary average of the positions when the masses are unequal.

## Uniform Bodies and Symmetry

A **uniform lamina** is a thin flat body with constant mass per unit area. Its centre of mass lies on every line of symmetry. If two such lines meet, their intersection gives $G$.

| Uniform body | Centre of mass |
|---|---|
| Straight rod | Midpoint |
| Rectangular or square lamina | Intersection of the diagonals |
| Circular lamina | Centre of the circle |
| Triangular lamina | Intersection of the medians |
| Sphere, cuboid or right circular cylinder | Geometrical centre |

For a uniform solid, use planes of symmetry in the same way. Symmetry of shape alone is not enough when the mass is unevenly distributed.

For **any uniform triangular lamina**, $G$ is one third of the way from a side's midpoint towards the opposite vertex, or two thirds of the way from that vertex towards the midpoint. Its coordinates are the averages of the three vertex coordinates. A triangle does not need a line of symmetry for this rule to hold.

### Example 2: a triangular lamina

**Question:** a uniform triangular lamina has vertices $A=(0,0)$, $B=(6,0)$ and $C=(0,9)$, in centimetres. Find $G$ and its distance from $AB$.

$$G=\left(\frac{0+6+0}{3},\frac{0+0+9}{3}\right)=\boxed{(2,3)\,\mathrm{cm}}.$$

Since $AB$ is the $x$-axis, the distance from $G$ to $AB$ is $\boxed{3\,\mathrm{cm}}$.

**Check:** the midpoint of $AB$ is $(3,0)$. One third of the way from $(3,0)$ to $C$ gives $(3,0)+\frac13(-3,9)=(2,3)$.

**Common mistake:** placing $G$ halfway along a median. That rule is for a uniform straight rod, not a triangular lamina.

## Composite Laminae

Divide the body into parts whose centres are known. Avoid counting an overlapping region twice. For a uniform lamina of mass per unit area $\rho$, each part has mass $m_i=\rho A_i$.

When all parts have the **same mass per unit area**, $\rho$ cancels:

$$\bar x=\frac{\sum A_ix_i}{\sum A_i},\qquad
\bar y=\frac{\sum A_iy_i}{\sum A_i}.$$

For a hole, subtract its area and its area moments from those of the complete lamina. A negative entry records removed material; it is not a physical negative mass. The remaining total area must be positive.

### Example 3: a rectangle and a triangle

**Question:** a uniform lamina consists of a $4\,\mathrm{cm}$ by $2\,\mathrm{cm}$ rectangle and a triangle above it. The rectangle has opposite corners $(0,0)$ and $(4,2)$; the triangle has vertices $(0,2)$, $(4,2)$ and $(2,5)$. Find $G$.

![A rectangle and triangular top with the centre of each part and the combined centre G marked](/assets/img/a2-math-mech/composite-lamina.svg)

| Part | Area ($\mathrm{cm^2}$) | Centre ($\mathrm{cm}$) |
|---|---|---|
| Rectangle | $8$ | $(2,1)$ |
| Triangle | $6$ | $(2,3)$ |

The line $x=2$ is a line of symmetry, so $\bar x=2$.

$$\bar y=\frac{8(1)+6(3)}{8+6}=\frac{13}{7}.$$

$$\boxed{G=\left(2,\frac{13}{7}\right)\mathrm{cm}}.$$

**Check:** $\bar y$ lies between $1$ and $3$, and is closer to $1$ because the rectangle has the greater mass. The two parts share only an edge, so no area is counted twice.

### Example 4: removing a rectangular corner

**Question:** a uniform $8\,\mathrm{cm}$ by $6\,\mathrm{cm}$ rectangular lamina has a $4\,\mathrm{cm}$ by $2\,\mathrm{cm}$ corner removed. Use the bottom-left corner as the origin; the removed rectangle has opposite corners $(4,4)$ and $(8,6)$. Find the remaining lamina's centre of mass.

![An eight by six rectangular lamina with the top-right four by two corner removed; centres of the original rectangle, removed corner and remaining lamina are marked](/assets/img/a2-math-mech/lamina-cutout.svg)

| Part | Signed area ($\mathrm{cm^2}$) | Centre ($\mathrm{cm}$) |
|---|---|---|
| Complete rectangle | $48$ | $(4,3)$ |
| Removed corner | $-8$ | $(6,5)$ |

$$\bar x=\frac{48(4)-8(6)}{48-8}=\frac{18}{5},\qquad
\bar y=\frac{48(3)-8(5)}{48-8}=\frac{13}{5}.$$

$$\boxed{G=(3.6,2.6)\,\mathrm{cm}}.$$

**Check:** removing material from the top-right moves $G$ left and down from $(4,3)$. Alternatively, use a bottom $8\times4$ rectangle and a top-left $4\times2$ rectangle; their positive area moments give the same answer.

**Common mistake:** subtracting the hole's area in the denominator but adding its area moments in the numerator.

## Attached Masses and Different Materials

Use **actual masses** when parts have different mass per unit area, or when particles or rods are attached. Do not add a mass in kilograms to an area in square metres. For a uniform wire or framework, mass is proportional to length only when its mass per unit length is the same throughout.

### Example 5: a particle attached to a lamina

**Question:** a uniform rectangular lamina has opposite corners $(0,0)$ and $(4,2)$ metres and mass per unit area $2\,\mathrm{kg\,m^{-2}}$. A particle of mass $4\,\mathrm{kg}$ is fixed at $(4,2)$. Find the centre of mass of the combined body.

The lamina has mass $2(4\times2)=16\,\mathrm{kg}$ and centre $(2,1)$. Therefore:

$$\bar x=\frac{16(2)+4(4)}{20}=\frac{12}{5},\qquad
\bar y=\frac{16(1)+4(2)}{20}=\frac65.$$

$$\boxed{G=(2.4,1.2)\,\mathrm m}.$$

**Check:** $G$ is one fifth of the way from the lamina's centre towards the particle, since the particle is one fifth of the total mass.

**Common mistake:** using $8$ as the lamina's mass. It is its area; the mass is $16\,\mathrm{kg}$.

## Suspended Bodies

When a rigid body is **freely suspended from one point** $P$, its weight acts downwards at $G$ and the support force acts at $P$. In stable equilibrium, $G$ is **vertically below** $P$. Weight then has zero moment about $P$.

Find $G$ using convenient coordinates on the body before it turns. Draw $PG$. The angle between $PG$ and a chosen edge is that edge's angle to the vertical after suspension. These coordinates turn with the body; their original $y$-axis is not necessarily vertical afterwards. If $G=P$, the weight gives no turning effect in any orientation, so this rule does not select a position.

### Example 6: a suspended rectangular lamina

**Question:** a uniform rectangular lamina has vertices $A=(0,0)$, $B=(4,0)$, $C=(4,2)$ and $P=(0,2)$ centimetres. It is freely suspended from $P$. Find the acute angle $\theta$ between edge $PA$ and the vertical.

![The rectangle in its original coordinates and after suspension, with G vertically below P and the angle between PA and the vertical marked](/assets/img/a2-math-mech/suspended-lamina.svg)

Its centre is $G=(2,1)$. From $P$ to $G$, the horizontal change is $2$ and the downward change is $1$. The angle between $PA$ and $PG$ satisfies:

$$\tan\theta=\frac{2}{1},\qquad \boxed{\theta=63.4^\circ}.$$

**Check:** after the body turns through this angle, the horizontal component of $\overrightarrow{PG}$ is $2\cos\theta-\sin\theta=0$. Choose the orientation with $G$ below $P$, not above it.

### Example 7: a solid with an attached particle

**Question:** a uniform solid cylinder has radius $1\,\mathrm{cm}$, height $6\,\mathrm{cm}$ and mass $3\,\mathrm{kg}$. A particle of mass $1\,\mathrm{kg}$ is fixed at a point $A$ on the lower rim. The body is freely suspended from the point $B$ directly above $A$ on the upper rim. Find the acute angle between $AB$ and the vertical.

Use the plane containing $A$, $B$ and the cylinder's axis. Take $A=(0,0)$ and $B=(0,6)$; the cylinder's centre is $(1,3)$. Symmetry puts the combined centre in this plane.

$$\bar x=\frac{3(1)+1(0)}4=\frac34,\qquad
\bar y=\frac{3(3)+1(0)}4=\frac94.$$

At rest, $BG$ is vertical. Its change across the body is $3/4$. Its downward change is:

$$6-\frac94=\frac{15}{4}\,\mathrm{cm}.$$

$$\tan\theta=\frac{3/4}{15/4}=\frac15,\qquad
\boxed{\theta=11.3^\circ}.$$

**Check:** $G$ moves towards the attached particle from $(1,3)$ to $(3/4,9/4)$. Use the distance from the suspension point $B$ to $G$, not from $A$ to $G$.

## Support by Two Strings

With two vertical strings, $G$ need not be below either attachment point. Use total weight at $G$, vertical force balance, and moments about one attachment point. A string can pull but cannot push: a negative calculated tension means the assumed taut-string equilibrium is impossible.

### Example 8: a lamina supported at both ends

**Question:** the combined body from Example 5 is supported by two vertical strings attached at $P=(0,2)$ and $Q=(4,2)$ metres. Edge $PQ$ is horizontal. Find the tensions.

The total mass is $20\,\mathrm{kg}$ and $\bar x=2.4\,\mathrm m$. Taking moments about $P$:

$$4T_Q=20g(2.4),\qquad \boxed{T_Q=117.6\,\mathrm N\approx118\,\mathrm N}.$$

Vertical force balance gives:

$$T_P+T_Q=20g,\qquad \boxed{T_P=78.4\,\mathrm N}.$$

**Check:** both tensions are positive. Taking moments about $Q$ gives $4T_P=20g(4-2.4)=313.6\,\mathrm{N\,m}$. The heavier side has the larger support tension.

## Practice

Use exact coordinates where possible. Each question is self-written. Try it before opening the hint or solution.

### Q1: signed coordinates

Particles of masses $2$, $3$ and $5\,\mathrm{kg}$ are fixed to a light framework at $(-4,1)$, $(2,-3)$ and $(4,2)$ metres. Find $G$ and its distance from the $y$-axis.

<details markdown="1">
<summary>Hint</summary>

Use the signed coordinates in each mass moment. The distance from the $y$-axis is $\lvert\bar x\rvert$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\bar x=\frac{-8+6+20}{10}=\frac95,\qquad
\bar y=\frac{2-9+10}{10}=\frac3{10}.$$

Thus $\boxed{G=(1.8,0.3)\,\mathrm m}$ and the distance is $\boxed{1.8\,\mathrm m}$.

**Check:** the signed mass moments about $G$ are zero in both directions: $18-10(1.8)=0$ and $3-10(0.3)=0$.

</details>

### Q2: a triangle and its median

A uniform triangular lamina has vertices $(0,0)$, $(9,0)$ and $(3,6)$ centimetres. Find $G$. Explain why its $x$-coordinate is not $4.5$.

<details markdown="1">
<summary>Hint</summary>

Average the three vertex coordinates, or move one third of the way from the base midpoint towards the opposite vertex.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\boxed{G=(4,2)\,\mathrm{cm}}.$$

The base midpoint is $(4.5,0)$, but the median slopes towards $(3,6)$. There is no vertical line of symmetry through that midpoint.

**Check:** $(4.5,0)+\frac13(-1.5,6)=(4,2)$.

</details>

### Q3: an L-shaped lamina

A uniform lamina is the union of two rectangles with opposite corners $(0,0)$ and $(6,2)$, and $(0,2)$ and $(2,6)$ centimetres. Find $G$.

<details markdown="1">
<summary>Hint</summary>

The areas are $12$ and $8$. Their centres are $(3,1)$ and $(1,4)$. These rectangles do not overlap in area.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\bar x=\frac{12(3)+8(1)}{20}=\frac{11}{5},\qquad
\bar y=\frac{12(1)+8(4)}{20}=\frac{11}{5}.$$

$$\boxed{G=(2.2,2.2)\,\mathrm{cm}}.$$

**Check:** alternatively subtract the $4\times4$ top-right square, centred at $(4,4)$, from the $6\times6$ square centred at $(3,3)$. Each coordinate is $(36(3)-16(4))/20=2.2$. Here $G$ lies outside the material, which is possible.

</details>

### Q4: a circular hole

A uniform square lamina has opposite corners $(0,0)$ and $(6,6)$ centimetres. A circular hole of radius $1\,\mathrm{cm}$ and centre $(4,3)$ is cut out. Find $G$.

<details markdown="1">
<summary>Hint</summary>

Subtract the hole's area $\pi$ and area moments. The line $y=3$ remains a line of symmetry.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\bar x=\frac{108-4\pi}{36-\pi},\qquad \bar y=3.$$

$$\boxed{G\approx(2.90,3.00)\,\mathrm{cm}}.$$

**Check:** $\bar x=3-\pi/(36-\pi)<3$. Removing material to the right moves $G$ left; $\bar y$ stays at $3$.

</details>

### Q5: two materials and an attached rod

Two rectangular laminae are joined along an edge. The first has opposite corners $(0,0)$ and $(2,2)$ metres and mass per unit area $3\,\mathrm{kg\,m^{-2}}$. The second has opposite corners $(2,0)$ and $(4,2)$ metres and mass per unit area $1\,\mathrm{kg\,m^{-2}}$. A uniform rod of mass $4\,\mathrm{kg}$ is fixed along the edge from $(0,2)$ to $(4,2)$. Find the combined centre of mass.

<details markdown="1">
<summary>Hint</summary>

Use masses $12$, $4$ and $4\,\mathrm{kg}$, with centres $(1,1)$, $(3,1)$ and $(2,2)$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\bar x=\frac{12(1)+4(3)+4(2)}{20}=\frac85,\qquad
\bar y=\frac{12(1)+4(1)+4(2)}{20}=\frac65.$$

$$\boxed{G=(1.6,1.2)\,\mathrm m}.$$

**Check:** before attaching the rod, the centre is $(1.5,1)$. The rod moves it one fifth of the way towards $(2,2)$, giving $(1.6,1.2)$.

</details>

### Q6: free suspension

The triangular lamina in Q2 is freely suspended from its vertex $C=(3,6)$. Find the acute angle between the line through $C$ perpendicular to the base and the vertical when it hangs in stable equilibrium.

<details markdown="1">
<summary>Hint</summary>

Use $G=(4,2)$. The perpendicular line is fixed relative to the lamina; the vertical at rest is $CG$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

From $C$ to $G$, the changes are $1$ across and $4$ down in the original coordinates.

$$\tan\theta=\frac14,\qquad \boxed{\theta=14.0^\circ}.$$

**Check:** $\cos\theta-4\sin\theta=0$, so after rotation $CG$ has no horizontal component. Its downward component is positive.

</details>

### Q7: a suspended solid

A uniform solid cylinder of radius $2\,\mathrm{cm}$, height $8\,\mathrm{cm}$ and mass $6\,\mathrm{kg}$ has a $2\,\mathrm{kg}$ particle fixed at a point $A$ on its lower rim. It is suspended from the point $B$ directly above $A$ on the upper rim. Find the acute angle between $AB$ and the vertical.

<details markdown="1">
<summary>Hint</summary>

In the plane through $AB$ and the cylinder's axis, take $A=(0,0)$ and $B=(0,8)$. The cylinder's centre is $(2,4)$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$G=\left(\frac{6(2)}8,\frac{6(4)}8\right)=(1.5,3)\,\mathrm{cm}.$$

$$\tan\theta=\frac{1.5}{8-3}=\frac3{10},\qquad
\boxed{\theta=16.7^\circ}.$$

**Check:** $1.5\cos\theta-5\sin\theta=0$; this makes $BG$ vertical. The distance $BG$ is $\sqrt{1.5^2+5^2}$, not the cylinder's height.

</details>

### Q8: tensions and an unknown mass

A uniform horizontal rod of length $6\,\mathrm m$ and mass $4\,\mathrm{kg}$ carries a particle of mass $m\,\mathrm{kg}$ at its right-hand end. Two vertical strings support the rod at its ends. The right-hand tension is twice the left-hand tension. Find $m$, the centre of mass measured from the left-hand end, and both tensions.

<details markdown="1">
<summary>Hint</summary>

Let the left-hand tension be $T$. Use $3T=(4+m)g$ and take moments about the left-hand end.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$6(2T)=4g(3)+mg(6),\qquad 3T=(4+m)g.$$

Substitution gives $4(4+m)=12+6m$, so $\boxed{m=2\,\mathrm{kg}}$.

$$\bar x=\frac{4(3)+2(6)}6=\boxed{4\,\mathrm m}.$$

$$\boxed{T_{\text{left}}=19.6\,\mathrm N},\qquad
\boxed{T_{\text{right}}=39.2\,\mathrm N}.$$

**Check:** the tensions sum to $58.8\,\mathrm N=6g$. Moments about the right-hand end give $19.6(6)=4g(3)=117.6\,\mathrm{N\,m}$.

</details>

## Quick Reference

| Model | Method and condition |
|---|---|
| Particles or parts of known mass | $M\bar x=\sum m_ix_i$, and similarly for $y$ and $z$ |
| Uniform triangle | Average the three vertex coordinates |
| Composite lamina with one mass per unit area | Replace mass by area in the weighted sums |
| A hole in a uniform lamina | Subtract its area and its area moments |
| Different materials, attached particles or rods | Calculate actual masses before combining parts |
| Free suspension from one point | In stable equilibrium, $G$ is vertically below the point |
| Two vertical support strings | Balance vertical forces and take moments; check both tensions |

Before finishing, check the total mass is positive, coordinates use one origin, and the result moves towards added mass or away from removed mass. For positive masses, each coordinate lies between the smallest and largest coordinates of the component centres.

**Learning path:** [Previous: Moments and Rigid Objects in Equilibrium](/alevel/a2-mathematics/mechanics/moments-and-rigid-objects/) · [Mechanics topic index](/alevel/a2-mathematics/mechanics/) · [Next: Newton's Laws of Motion](/alevel/a2-mathematics/mechanics/newtons-laws-of-motion/).
