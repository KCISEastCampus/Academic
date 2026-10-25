---
title: Centres of Mass
layout: subjects
mathjax: true
grade: a2
subject: m2
permalink: /alevel/a2-mathematics/mechanics/centres-of-mass/
toc_headings: h2
study_page: true
reading_layout: true
---

[A2 Mechanics](/alevel/a2-mathematics/mechanics/) · M2.3 Statics and forces

Put a small mass near one end of a ruler: its balance point moves towards that mass. Cutting material away moves the balance point away from what was removed. This lesson asks **where to place the total weight so that its turning effect is right**, and uses that point to predict how a body hangs or is supported.

- **Learning:** start with [particle systems](#a-system-of-particles), then study [uniform bodies](#uniform-bodies-and-symmetry), [composite laminae](#composite-laminae) and [suspended bodies](#suspended-bodies).
- **By the end:** use signed mass moments, justify symmetry, handle joined parts or holes, and connect the resulting centre to suspension or support forces.
- **Revision:** try [practice](#practice) with the solutions closed. Check the mass, coordinates and final position.

Textbook: Chapter 12, Sections 12.1–12.4 (printed pp. 184–197). This lesson uses the textbook terms *centre of mass*, *centre of gravity*, *uniform lamina*, *line of symmetry* and *suspended body*.

You need coordinates, simple equations, right triangles and the previous lesson's [perpendicular distances](/alevel/a2-mathematics/mechanics/moments-and-rigid-objects/#the-moment-of-a-force) and [support equations](/alevel/a2-mathematics/mechanics/moments-and-rigid-objects/#equilibrium-under-parallel-forces). Before starting, return to the forces lesson's [wall task](/alevel/a2-mathematics/mechanics/forces-equilibrium-and-friction/#wall-check) if you have not yet done its later check.
{:.lesson-meta}

Treat joined parts as rigidly fixed, so their relative positions do not change. A particle contributes its stated mass at one point; a light framework contributes negligible mass. A lamina is thin enough to model as flat. Use $g=9.8\,\mathrm{m\,s^{-2}}$ unless given another value. Keep exact values during calculations and give final numerical answers to three significant figures, or one decimal place for angles, unless asked otherwise.
{:.lesson-meta}

All worked examples and practice questions are self-written, not official past-paper questions. No official marks are assigned. Diagram lengths and force arrows are not drawn to a common scale.

## Centre of Mass and Centre of Gravity

The **centre of gravity** is the point through which the resultant weight acts. Its weight gives the same moment as the weights of all the parts. When $g$ is constant throughout a body, its centre of gravity and **centre of mass** are at the same point, $G$. This is the model used here.

For a rigid body, use the total weight acting at $G$ when finding support forces and moments. The centre of mass need not lie in the material itself: a ring's centre is in its hole.

Replacing the separate weights by a total weight at $G$ is a **replacement**, not an extra force. You can use the component weights or the replacement, but never both in the same equation. We assume gravity has the same magnitude and direction throughout the body. Without that assumption the mass centre need not be the point of action of the resultant weight.

## A System of Particles

For masses $m_1,m_2,\ldots$ at coordinates $(x_1,y_1), (x_2,y_2),\ldots$, let the total mass be $M$ and the centre of mass be $(\bar x,\bar y)$. Choose one origin and use it for every part. The bar above a coordinate means the coordinate of the combined centre, not a distance travelled.

Why multiply position by mass? Consider masses $m_1$ and $m_2$ on a horizontal line. Their downward weights give signed moments $-m_1gx_1-m_2gx_2$ about the origin, taking anticlockwise as positive. The single downward weight $(m_1+m_2)g$ at $\bar x$ must give the same moment. Cancelling the common factor $-g$ gives

$$(m_1+m_2)\bar x=m_1x_1+m_2x_2.$$

The product $mx$ is a **mass moment**, measured in $\mathrm{kg\,m}$ when using kilograms and metres. It is not a force moment in $\mathrm{N\,m}$. A mass left of the origin has negative $x$ and hence a negative entry $mx$; the mass itself is still positive. The same weighted-coordinate rule applies to each perpendicular coordinate:

$$M=\sum m_i,\qquad M\bar x=\sum m_ix_i,\qquad M\bar y=\sum m_iy_i.$$

Thus each coordinate is a **mass-weighted average**. For particles on a line, only one coordinate is needed. In three dimensions, calculate $\bar z$ in the same way. In position-vector form:

$$\bar{\mathbf r}=\frac{\sum m_i\mathbf r_i}{\sum m_i}.$$

Use signed coordinates. A distance from an axis is non-negative; calculate the coordinate first, then take its magnitude if a distance is asked for. A light rod or framework has negligible mass and contributes nothing to the sums.

<div class="worked-example" markdown="1">

### Example 1: particles on a line and in space {#example-1-particles-on-a-line-and-in-space}

**Question:** particles of masses $3$, $2$ and $5\,\mathrm{kg}$ lie on a light straight rod at $x=0$, $5$ and $8\,\mathrm m$. Find their centre of mass. **Self-written.**

$$\bar x=\frac{3(0)+2(5)+5(8)}{3+2+5}=\boxed{5\,\mathrm m}.$$

For a separate system, two particles of masses $2m$ and $3m$, where $m>0$, have position vectors $(1,0,2)$ and $(4,5,-1)$ metres. Their centre of mass has position vector:

$$\bar{\mathbf r}=\frac{2m(1,0,2)+3m(4,5,-1)}{5m}
=\boxed{\left(\frac{14}{5},3,\frac15\right)\mathrm m}.$$

**Check:** moments of mass about $x=5$ in the rod problem add to zero: $3(-5)+2(0)+5(3)=0$. Each coordinate of the vector answer lies between the corresponding particle coordinates.

**Common mistake:** taking the ordinary average of the positions when the masses are unequal.

</div>

## Uniform Bodies and Symmetry

A **uniform lamina** is a thin flat body with constant mass per unit area. Its centre of mass lies on every line of symmetry. If two such lines meet, their intersection gives $G$.

For example, two equal-area patches of a uniform sheet have equal mass, wherever they are cut from. Reflection in a symmetry line then pairs equal masses on opposite sides, so their crosswise mass moments cancel. A symmetric outline made heavier on one side loses this **mass symmetry**. For a uniform rod the relevant quantity is mass per unit length; for a uniform solid it is mass per unit volume.

| Uniform body | Centre of mass |
|---|---|
| Straight rod | Midpoint |
| Rectangular or square lamina | Intersection of the diagonals |
| Circular lamina | Centre of the circle |
| Triangular lamina | Intersection of the medians |
| Sphere, cuboid or right circular cylinder | Geometrical centre |

For a uniform solid, use planes of symmetry in the same way. Symmetry of shape alone is not enough when the mass is unevenly distributed.

For **any uniform triangular lamina**, $G$ is one third of the way from a side's midpoint towards the opposite vertex, or two thirds of the way from that vertex towards the midpoint. Its coordinates are the averages of the three vertex coordinates. A triangle does not need a line of symmetry for this rule to hold.

A **median** joins a vertex to the opposite side's midpoint. This triangle-centroid result is a geometry fact used here without calculus. The lamina is spread over the whole area; it is not three equal particles at the vertices, even though those two systems happen to have the same centre. Adding unequal vertex particles requires new mass moments.

<div class="worked-example" markdown="1">

### Example 2: a triangular lamina {#example-2-a-triangular-lamina}

**Question:** a uniform triangular lamina has vertices $A=(0,0)$, $B=(6,0)$ and $C=(0,9)$, in centimetres. Find $G$ and its distance from $AB$. **Self-written.**

$$G=\left(\frac{0+6+0}{3},\frac{0+0+9}{3}\right)=\boxed{(2,3)\,\mathrm{cm}}.$$

Since $AB$ is the $x$-axis, the distance from $G$ to $AB$ is $\boxed{3\,\mathrm{cm}}$.

**Check:** the midpoint of $AB$ is $(3,0)$. One third of the way from $(3,0)$ to $C$ gives $(3,0)+\frac13(-3,9)=(2,3)$.

**Common mistake:** placing $G$ halfway along a median. That rule is for a uniform straight rod, not a triangular lamina.

</div>

## Composite Laminae

Divide the body into parts whose centres are known. Avoid counting an overlapping region twice. For a uniform lamina of mass per unit area $\rho$, each part has mass $m_i=\rho A_i$.

When all parts have the **same mass per unit area**, $\rho$ cancels:

$$\bar x=\frac{\sum A_ix_i}{\sum A_i},\qquad
\bar y=\frac{\sum A_iy_i}{\sum A_i}.$$

For a hole, subtract its area and its area moments from those of the complete lamina. A negative entry records removed material; it is not a physical negative mass. The remaining total area must be positive.

This follows by rebuilding the full sheet: the remaining part's mass moment **plus the removed part's** must equal the original mass moment. Subtracting the hole from both sides gives the subtraction rule. Keep the hole's centre in the original coordinates; do not move the origin to the hole. Either use non-overlapping positive parts or use the full sheet minus holes consistently.

<div class="worked-example" markdown="1">

### Example 3: a rectangle and a triangle {#example-3-a-rectangle-and-a-triangle}

**Question:** a uniform lamina consists of a $4\,\mathrm{cm}$ by $2\,\mathrm{cm}$ rectangle and a triangle above it. The rectangle has opposite corners $(0,0)$ and $(4,2)$; the triangle has vertices $(0,2)$, $(4,2)$ and $(2,5)$. Find $G$. **Self-written.**

![A rectangle and triangular top with the centre of each part and the combined centre G marked](/assets/img/a2-math-mech/composite-lamina.svg)

| Part | Area ($\mathrm{cm^2}$) | Centre ($\mathrm{cm}$) |
|---|---|---|
| Rectangle | $8$ | $(2,1)$ |
| Triangle | $6$ | $(2,3)$ |

The rectangle's area is $4(2)=8$. The triangle's base is $4$ and its height is $5-2=3$, so its area is $\frac12(4)(3)=6$. Its centre is one third of the way up from $y=2$, giving $y=3$. The common surface density cancels, so these areas can be the weights in the average.

The line $x=2$ is a line of symmetry, so $\bar x=2$.

$$\bar y=\frac{8(1)+6(3)}{8+6}=\frac{13}{7}.$$

$$\boxed{G=\left(2,\frac{13}{7}\right)\mathrm{cm}}.$$

**Check:** $\bar y$ lies between $1$ and $3$, and is closer to $1$ because the rectangle has the greater mass. The two parts share only an edge, so no area is counted twice.

</div>

<div class="worked-example" markdown="1">

### Example 4: removing a rectangular corner {#example-4-removing-a-rectangular-corner}

**Question:** a uniform $8\,\mathrm{cm}$ by $6\,\mathrm{cm}$ rectangular lamina has a $4\,\mathrm{cm}$ by $2\,\mathrm{cm}$ corner removed. Use the bottom-left corner as the origin; the removed rectangle has opposite corners $(4,4)$ and $(8,6)$. Find the remaining lamina's centre of mass. **Self-written.**

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

</div>

## Attached Masses and Different Materials

Use **actual masses** when parts have different mass per unit area, or when particles or rods are attached. Do not add a mass in kilograms to an area in square metres. For a uniform wire or framework, mass is proportional to length only when its mass per unit length is the same throughout.

First make each entry a mass: surface density times area for a lamina, line density times length for a rod, or the stated particle mass. A rod attached along an edge is additional material, so it is a separate entry even though its position lies on the lamina's boundary. Equal areas of different materials need not have equal masses.

<div class="worked-example" markdown="1">

### Example 5: a particle attached to a lamina {#example-5-a-particle-attached-to-a-lamina}

**Question:** a uniform rectangular lamina has opposite corners $(0,0)$ and $(4,2)$ metres and mass per unit area $2\,\mathrm{kg\,m^{-2}}$. A particle of mass $4\,\mathrm{kg}$ is fixed at $(4,2)$. Find the centre of mass of the combined body. **Self-written.**

The lamina has mass $2(4\times2)=16\,\mathrm{kg}$ and centre $(2,1)$. Therefore:

$$\bar x=\frac{16(2)+4(4)}{20}=\frac{12}{5},\qquad
\bar y=\frac{16(1)+4(2)}{20}=\frac65.$$

$$\boxed{G=(2.4,1.2)\,\mathrm m}.$$

**Check:** $G$ is one fifth of the way from the lamina's centre towards the particle, since the particle is one fifth of the total mass.

**Common mistake:** using $8$ as the lamina's mass. It is its area; the mass is $16\,\mathrm{kg}$.

</div>

## Suspended Bodies

When a rigid body is **freely suspended from one point** $P$, its weight acts downwards at $G$ and the support force acts at $P$. In stable equilibrium, $G$ is **vertically below** $P$. Weight then has zero moment about $P$.

The support force has zero moment about $P$ because it acts there. If $G$ were to one side of the vertical through $P$, the weight would have a nonzero perpendicular distance and would turn the body. A position with $G$ directly above $P$ also gives zero moment, but a small displacement makes it turn farther away: it is unstable. With $G$ below $P$, a small displacement produces a restoring turn. No other contact or applied force is included in this single-suspension model.

Find $G$ using convenient coordinates on the body before it turns. Draw $PG$. The angle between $PG$ and a chosen edge is that edge's angle to the vertical after suspension. These coordinates turn with the body; their original $y$-axis is not necessarily vertical afterwards. If $G=P$, the weight gives no turning effect in any orientation, so this rule does not select a position.

<div class="worked-example" markdown="1">

### Example 6: a suspended rectangular lamina {#example-6-a-suspended-rectangular-lamina}

**Question:** a uniform rectangular lamina has vertices $A=(0,0)$, $B=(4,0)$, $C=(4,2)$ and $P=(0,2)$ centimetres. It is freely suspended from $P$. Find the acute angle $\theta$ between edge $PA$ and the vertical. **Self-written.**

![The rectangle in its original coordinates and after suspension, with G vertically below P and the angle between PA and the vertical marked](/assets/img/a2-math-mech/suspended-lamina.svg)

Its centre is $G=(2,1)$. From $P$ to $G$, the horizontal change is $2$ and the downward change is $1$. The angle between $PA$ and $PG$ satisfies:

Edge $PA$ points straight down in the original body drawing, so the right triangle beside it has opposite side $2$ and adjacent side $2-1=1$. That triangle stays fixed in the body as it turns; its angle becomes the angle between the edge and the vertical $PG$.

$$\tan\theta=\frac{2}{1},\qquad \boxed{\theta=63.4^\circ}.$$

**Check:** after the body turns through this angle, the horizontal component of $\overrightarrow{PG}$ is $2\cos\theta-\sin\theta=0$. Choose the orientation with $G$ below $P$, not above it.

</div>

<div class="worked-example" markdown="1">

### Example 7: a solid with an attached particle {#example-7-a-solid-with-an-attached-particle}

**Question:** a uniform solid cylinder has radius $1\,\mathrm{cm}$, height $6\,\mathrm{cm}$ and mass $3\,\mathrm{kg}$. A particle of mass $1\,\mathrm{kg}$ is fixed at a point $A$ on the lower rim. The body is freely suspended from the point $B$ directly above $A$ on the upper rim. Find the acute angle between $AB$ and the vertical. **Self-written.**

Use the plane containing $A$, $B$ and the cylinder's axis. Take $A=(0,0)$ and $B=(0,6)$; the cylinder's centre is $(1,3)$. Symmetry puts the combined centre in this plane.

$$\bar x=\frac{3(1)+1(0)}4=\frac34,\qquad
\bar y=\frac{3(3)+1(0)}4=\frac94.$$

At rest, $BG$ is vertical. Its change across the body is $3/4$. Its downward change is:

$$6-\frac94=\frac{15}{4}\,\mathrm{cm}.$$

$$\tan\theta=\frac{3/4}{15/4}=\frac15,\qquad
\boxed{\theta=11.3^\circ}.$$

**Check:** $G$ moves towards the attached particle from $(1,3)$ to $(3/4,9/4)$. Use the distance from the suspension point $B$ to $G$, not from $A$ to $G$.

</div>

## Support by Two Strings

With two vertical strings, $G$ need not be below either attachment point. Use total weight at $G$, vertical force balance, and moments about one attachment point. A string can pull but cannot push: a negative calculated tension means the assumed taut-string equilibrium is impossible.

For attachments separated horizontally by $L$, and $G$ at horizontal distance $a$ from the left one, moments give $LT_{\mathrm{right}}=Mga$. Thus both upward tensions can be non-negative only if $0\leq a\leq L$. At an endpoint one tension is zero, so that string is at the boundary of becoming slack. An attachment height does not enter the moment of a vertical force; its **horizontal** distance does.

<div class="worked-example" markdown="1">

### Example 8: a lamina supported at both ends {#example-8-a-lamina-supported-at-both-ends}

**Question:** the combined body from Example 5 is supported by two vertical strings attached at $P=(0,2)$ and $Q=(4,2)$ metres. Edge $PQ$ is horizontal. Find the tensions. **Self-written.**

The total mass is $20\,\mathrm{kg}$ and $\bar x=2.4\,\mathrm m$. Taking moments about $P$:

$$4T_Q=20g(2.4),\qquad \boxed{T_Q=117.6\,\mathrm N\approx118\,\mathrm N}.$$

Vertical force balance gives:

$$T_P+T_Q=20g,\qquad \boxed{T_P=78.4\,\mathrm N}.$$

**Check:** both tensions are positive. Taking moments about $Q$ gives $4T_P=20g(4-2.4)=313.6\,\mathrm{N\,m}$. The heavier side has the larger support tension.

</div>

## Practice

Use exact coordinates where possible. Each question is self-written. Try it before opening the hint or solution.

<div class="lesson-check" markdown="1">

### Q1: Particles on a frame {#q1-signed-coordinates}

**Question:** Particles of masses $2$, $3$ and $5\,\mathrm{kg}$ are fixed to a light framework at $(-4,1)$, $(2,-3)$ and $(4,2)$ metres. Find $G$ and its distance from the $y$-axis. **Self-written.**

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

**Repair and retry:** return to [the relevant explanation](#a-system-of-particles) and correct the point of action, direction or component mass responsible for the error. Close this solution, then attempt [a different task on the same goal](#particles-retry); include the reasoning and condition checks.

</details>

</div>

<div class="lesson-check" markdown="1">

### Q2: Three vertices {#q2-a-triangle-and-its-median}

**Question:** A uniform triangular lamina has vertices $(0,0)$, $(9,0)$ and $(3,6)$ centimetres. Find $G$. Explain why its $x$-coordinate is not $4.5$. **Self-written.**

<details markdown="1">
<summary>Hint</summary>

Average the three vertex coordinates, or move one third of the way from the base midpoint towards the opposite vertex.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\boxed{G=(4,2)\,\mathrm{cm}}.$$

The base midpoint is $(4.5,0)$, but the median slopes towards $(3,6)$. There is no vertical line of symmetry through that midpoint.

**Check:** $(4.5,0)+\frac13(-1.5,6)=(4,2)$.

**Repair and retry:** return to [the relevant explanation](#uniform-bodies-and-symmetry) and correct the point of action, direction or component mass responsible for the error. Close this solution, then attempt [a different task on the same goal](#triangle-retry); include the reasoning and condition checks.

</details>

</div>

<div class="lesson-check" markdown="1">

### Q3: An L-shaped lamina {#q3-an-l-shaped-lamina}

**Question:** A uniform lamina is the union of two rectangles with opposite corners $(0,0)$ and $(6,2)$, and $(0,2)$ and $(2,6)$ centimetres. Find $G$. **Self-written.**

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

**Repair and retry:** return to [the relevant explanation](#composite-laminae) and correct the point of action, direction or component mass responsible for the error. Close this solution, then attempt [a different task on the same goal](#cutout-retry); include the reasoning and condition checks.

</details>

</div>

<div class="lesson-check" markdown="1">

### Q4: A square with an opening {#q4-a-circular-hole}

**Question:** A uniform square lamina has opposite corners $(0,0)$ and $(6,6)$ centimetres. A circular hole of radius $1\,\mathrm{cm}$ and centre $(4,3)$ is cut out. Find $G$. **Self-written.**

<details markdown="1">
<summary>Hint</summary>

Subtract the hole's area $\pi$ and area moments. The line $y=3$ remains a line of symmetry.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\bar x=\frac{108-4\pi}{36-\pi},\qquad \bar y=3.$$

$$\boxed{G\approx(2.90,3.00)\,\mathrm{cm}}.$$

**Check:** $\bar x=3-\pi/(36-\pi)<3$. Removing material to the right moves $G$ left; $\bar y$ stays at $3$.

**Repair and retry:** return to [the relevant explanation](#example-4-removing-a-rectangular-corner) and correct the point of action, direction or component mass responsible for the error. Close this solution, then attempt [a different task on the same goal](#cutout-retry); include the reasoning and condition checks.

</details>

</div>

<div class="lesson-check" markdown="1">

### Q5: A joined body {#q5-two-materials-and-an-attached-rod}

**Question:** Two rectangular laminae are joined along an edge. The first has opposite corners $(0,0)$ and $(2,2)$ metres and mass per unit area $3\,\mathrm{kg\,m^{-2}}$. The second has opposite corners $(2,0)$ and $(4,2)$ metres and mass per unit area $1\,\mathrm{kg\,m^{-2}}$. A uniform rod of mass $4\,\mathrm{kg}$ is fixed along the edge from $(0,2)$ to $(4,2)$. Find the combined centre of mass. **Self-written.**

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

**Repair and retry:** return to [the relevant explanation](#attached-masses-and-different-materials) and correct the point of action, direction or component mass responsible for the error. Close this solution, then attempt [a different task on the same goal](#retry-replace-suspension-by-two-supports); include the reasoning and condition checks.

</details>

</div>

<div class="lesson-check" markdown="1">

### Q6: A hanging triangle {#q6-free-suspension}

**Question:** The triangular lamina in Q2 is freely suspended from its vertex $C=(3,6)$. Find the acute angle between the line through $C$ perpendicular to the base and the vertical when it hangs in stable equilibrium. **Self-written.**

<details markdown="1">
<summary>Hint</summary>

Use $G=(4,2)$. The perpendicular line is fixed relative to the lamina; the vertical at rest is $CG$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

From $C$ to $G$, the changes are $1$ across and $4$ down in the original coordinates.

$$\tan\theta=\frac14,\qquad \boxed{\theta=14.0^\circ}.$$

**Check:** $\cos\theta-4\sin\theta=0$, so after rotation $CG$ has no horizontal component. Its downward component is positive.

**Repair and retry:** return to [the relevant explanation](#suspended-bodies) and correct the point of action, direction or component mass responsible for the error. Close this solution, then attempt [a different task on the same goal](#cutout-retry); include the reasoning and condition checks.

</details>

</div>

<div class="lesson-check" markdown="1">

### Q7: A cylinder and a particle {#q7-a-suspended-solid}

**Question:** A uniform solid cylinder of radius $2\,\mathrm{cm}$, height $8\,\mathrm{cm}$ and mass $6\,\mathrm{kg}$ has a $2\,\mathrm{kg}$ particle fixed at a point $A$ on its lower rim. It is suspended from the point $B$ directly above $A$ on the upper rim. Find the acute angle between $AB$ and the vertical. **Self-written.**

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

**Repair and retry:** return to [the relevant explanation](#example-7-a-solid-with-an-attached-particle) and correct the point of action, direction or component mass responsible for the error. Close this solution, then attempt [a different task on the same goal](#cutout-retry); include the reasoning and condition checks.

</details>

</div>

<div class="lesson-check" markdown="1">

### Q8: A supported rod {#q8-tensions-and-an-unknown-mass}

**Question:** A uniform horizontal rod of length $6\,\mathrm m$ and mass $4\,\mathrm{kg}$ carries a particle of mass $m\,\mathrm{kg}$ at its right-hand end. Two vertical strings support the rod at its ends. The right-hand tension is twice the left-hand tension. Find $m$, the centre of mass measured from the left-hand end, and both tensions. **Self-written.**

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

**Repair and retry:** return to [the relevant explanation](#support-by-two-strings) and correct the point of action, direction or component mass responsible for the error. Close this solution, then attempt [a different task on the same goal](#retry-replace-suspension-by-two-supports); include the reasoning and condition checks.

</details>

</div>

## Independent Check {#independent-task-infer-the-mass-distribution}

<div class="lesson-check" markdown="1">

### A hanging joined body {#joined-body-check}

**Self-written task.** Two rectangular laminae are rigidly joined along an edge. In body coordinates measured in metres, the left rectangle has opposite corners $(0,0)$ and $(2,2)$ and constant mass per unit area $\rho\,\mathrm{kg\,m^{-2}}$, where $\rho>0$. The right rectangle has opposite corners $(2,0)$ and $(4,2)$ and constant mass per unit area $1\,\mathrm{kg\,m^{-2}}$. A $4\,\mathrm{kg}$ particle is fixed at $(4,2)$. The body is freely suspended from $P=(0,2)$ in stable equilibrium. The acute angle $\theta$ between the edge from $P$ to $(0,0)$ and the vertical satisfies $\tan\theta=2$. Find $\rho$. Assess the claim: “The rectangles have equal area, so their masses cancel and only the particle can break the symmetry.” Choose and explain your method.

<details markdown="1">
<summary>Reasoning hint</summary>

Find the two actual lamina masses before including the particle. Calculate $G$ in body coordinates; after suspension, $PG$ is vertical. Which ratio gives the angle from the downward edge at $P$?

</details>

<details markdown="1">
<summary>Feedback and check</summary>

The component masses are $4\rho$, $4$ and $4\,\mathrm{kg}$, with centres $(1,1)$, $(3,1)$ and $(4,2)$. Their total mass is $4\rho+8\,\mathrm{kg}$, so

$$\bar x=\frac{4\rho+12+16}{4\rho+8}=\frac{\rho+7}{\rho+2},\qquad \bar y=\frac{4\rho+4+8}{4\rho+8}=\frac{\rho+3}{\rho+2}.$$

From $P$ to $G$, the changes are $\bar x$ across and $2-\bar y$ down. For $\rho>0$, both are positive. Hence

$$\tan\theta=\frac{\bar x}{2-\bar y}=\frac{\rho+7}{\rho+1}=2,\qquad \boxed{\rho=5}.$$

The left surface density is therefore $5\,\mathrm{kg\,m^{-2}}$. At this value, the masses are $20$, $4$ and $4\,\mathrm{kg}$, giving

$$G=\left(\frac{12}{7},\frac87\right)\mathrm m,\qquad \frac{12/7}{2-8/7}=2.$$

Rotating towards the stable position makes the horizontal component of $PG$ zero and leaves $G$ below $P$. Equal areas do not imply equal masses when surface densities differ. The left lamina already breaks the mass symmetry. If you averaged the three centres equally, restore the mass column; if you used $\bar y$ in the angle denominator, measure from $P$, not the origin.

**English explanation to complete:** “Area weighting is valid only when …; the vertical passes through …”.

**Repair and retry:** return to [the relevant explanation](#attached-masses-and-different-materials) and correct the point of action, direction or component mass responsible for the error. Close this solution, then attempt [a different task on the same goal](#retry-replace-suspension-by-two-supports); include the reasoning and condition checks.

</details>

</div>

<div class="lesson-check" markdown="1">

### Retry: Replace Suspension by Two Supports {#retry-replace-suspension-by-two-supports}

**Self-written task.** Remove the particle. Use the same two rectangles, but treat the left surface density $\rho\,\mathrm{kg\,m^{-2}}$ as unknown again; the right density remains $1\,\mathrm{kg\,m^{-2}}$. Two vertical strings attached at $P=(0,2)$ and $Q=(4,2)$ support the rigid body with $PQ$ horizontal. The tension at $P$ is twice that at $Q$. Find $\rho$, the combined centre of mass and both tensions. Explain why the centre of mass need not lie directly below either attachment point.

<details markdown="1">
<summary>Retry hint</summary>

Use the tension ratio with vertical force balance and moments. The single-suspension angle condition no longer applies.

</details>

<details markdown="1">
<summary>Retry check</summary>

Set $T_Q=T$ and $T_P=2T$. With total mass $M=4\rho+4$, vertical balance gives $3T=Mg$. Moments about $P$ give $4T=Mg\bar x$, so $\bar x=4/3$.

$$\frac{4\rho(1)+4(3)}{4\rho+4}=\frac43,\qquad 3(\rho+3)=4(\rho+1),\qquad \boxed{\rho=5}.$$

The two component centres both have $y=1$, hence

$$\boxed{G=\left(\frac43,1\right)\mathrm m},\qquad \boxed{T_P=156.8\,\mathrm N\approx157\,\mathrm N,\quad T_Q=78.4\,\mathrm N}.$$

The tensions are positive and sum to $24g=235.2\,\mathrm N$. About $Q$, the check is $4T_P=24g(4-4/3)=627.2\,\mathrm{N\,m}$. The two upward forces together balance the weight and its moment; neither individual support must lie directly above $G$. Do not carry over the removed particle or the previous total mass of $28\,\mathrm{kg}$.

**Repair and retry:** return to [the relevant explanation](#support-by-two-strings) and correct the point of action, direction or component mass responsible for the error. Close this solution, then attempt [a different task on the same goal](#later-body-check); include the reasoning and condition checks.

</details>

</div>

## Repair and Try Again {#repair-and-retry}

Close previous solutions before trying the linked task. After repairing the reason for an error, a new answer without help is the check; copying the original correction is not. Use the next lesson and the later-review route below to check retention as well.

<div class="lesson-check" markdown="1">

### A frame in space {#particles-retry}

**Question:** Particles of masses $2\,\mathrm{kg}$ and $3\,\mathrm{kg}$ are fixed on a light rigid frame at $(-2,1,4)$ and $(1,-2,-1)$ metres. Find the centre of mass and its distance from the plane $x=0$. A student replaces every negative coordinate by its magnitude before averaging. Explain why this changes the system. **Self-written.**

<details markdown="1">
<summary>Hint</summary>

Calculate each coordinate with the original signs. A distance from a plane is a separate, non-negative result.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\bar x=\frac{2(-2)+3(1)}5=-\frac15,\qquad
\bar y=\frac{2(1)+3(-2)}5=-\frac45,\qquad
\bar z=\frac{2(4)+3(-1)}5=1.$$

$$\boxed{G=\left(-\frac15,-\frac45,1\right)\mathrm m},\qquad
\boxed{\text{distance from }x=0=\frac15\,\mathrm m}.$$

Each coordinate is between the two corresponding particle coordinates. Signed mass moments about $G$ vanish; for example $2(-2+1/5)+3(1+1/5)=0$. Taking coordinate magnitudes first would reflect particles into different positions; it does not merely change a sign convention. If that happened, return to [the mass-moment explanation](#a-system-of-particles), then close this solution and label the negative positions before recalculating.

</details>

</div>

<div class="lesson-check" markdown="1">

### An unknown vertex {#triangle-retry}

**Question:** A uniform triangular lamina has vertices $A=(0,0)$, $B=(6,0)$ and $C=(u,v)$ centimetres. Its centre of mass is $(1,2)\,\mathrm{cm}$. Find $C$ and check the median ratio. Explain what uniform means here. A student says the same vertex-average rule always finds the centre of three unequal particles placed at these vertices. Assess the claim. **Self-written.**

<details markdown="1">
<summary>Hint</summary>

Use the triangular-lamina result in reverse. Distinguish a sheet spread over an area from three stated particle masses.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\frac{0+6+u}{3}=1,\qquad\frac{0+0+v}{3}=2,\qquad \boxed{C=(-3,6)\,\mathrm{cm}}.$$

The midpoint of $AB$ is $(3,0)$. One third of the way towards $C$ gives $(3,0)+\frac13(-6,6)=(1,2)$, as required. The sheet is uniform because its mass per unit area is constant throughout, not because its outline has a symmetry line.

The particle claim is false: use actual particle masses. For a counterexample, masses $1$, $1$ and $2$ at $A$, $B$ and $C$ have centre $(0,3)\,\mathrm{cm}$, not $(1,2)$. Return to [the triangle rule and its meaning](#uniform-bodies-and-symmetry) if you used a median midpoint, or to [mass weighting](#a-system-of-particles) if you treated unequal particles equally; then compare with [Q5](#q5-two-materials-and-an-attached-rod), which also changes the mass model.

</details>

</div>

<div class="lesson-check" markdown="1">

### A changed sheet {#cutout-retry}

**Question:** A uniform rectangular lamina has opposite corners $(0,0)$ and $(8,4)$ centimetres. A square hole of side $2\,\mathrm{cm}$ is cut out with centre $(a,2)$, entirely within the rectangle. The remaining centre of mass is $(3.8,2)\,\mathrm{cm}$. Find $a$ and check that the hole fits. The remaining lamina is then freely suspended in stable equilibrium from $P=(0,4)$. Find the acute angle between the edge from $P$ to $(0,0)$ and the vertical. Explain the orientation chosen. **Self-written.**

<details markdown="1">
<summary>Hint</summary>

Reconstruct the original area moment from the remaining part and the removed square. For the angle, measure from the suspension point, not the coordinate origin.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The full area is $32\,\mathrm{cm^2}$, the removed area is $4\,\mathrm{cm^2}$ and the remaining area is $28\,\mathrm{cm^2}$.

$$28(3.8)=32(4)-4a,\qquad\boxed{a=5.4\,\mathrm{cm}}.$$

The hole extends from $x=4.4$ to $6.4$ and from $y=1$ to $3$, entirely inside the rectangle. Removing material on the right moves the centre left from $x=4$ to $3.8$. The symmetry line $y=2$ survives the cut.

From $P$ to $G=(3.8,2)$ the changes are $3.8$ across and $4-2=2$ down. Hence

$$\tan\theta=\frac{3.8}{2}=1.9,\qquad\boxed{\theta=62.2^\circ}.$$

The stable position has $PG$ vertical with $G$ below $P$. Using $3.8/2$ succeeds here because the downward change happens to equal $\bar y$; always form the difference $4-\bar y$ rather than assuming this equality. Check $3.8\cos\theta-2\sin\theta=0$ using the unrounded angle. For sign errors return to [the subtraction explanation](#composite-laminae); for angle errors return to [the suspension triangle](#example-6-a-suspended-rectangular-lamina), then try [Q7](#q7-a-suspended-solid) with the help closed.

</details>

</div>

## Return after Newton's Laws {#later-check}

Next study [Newton's Laws of Motion](/alevel/a2-mathematics/mechanics/newtons-laws-of-motion/). Afterwards, return here without looking at the centre-of-mass examples. Also revisit the previous lesson's [beam check](/alevel/a2-mathematics/mechanics/moments-and-rigid-objects/#later-beam-check), then the index's [mixed problems](/alevel/a2-mathematics/mechanics/#mixed-problems) and [later review](/alevel/a2-mathematics/mechanics/#later-review).

<div class="lesson-check" markdown="1">

### One body, two arrangements {#later-body-check}

**Question:** A uniform rectangular lamina of mass $4\,\mathrm{kg}$ has opposite corners $(-2,0)$ and $(2,2)$ metres. A $2\,\mathrm{kg}$ particle is fixed at $(2,0)$. Find the combined centre of mass and assess the claim that it must remain at $(0,1)$ because the lamina is uniform. (a) Suspend the body freely from $P=(-2,2)$ in stable equilibrium. Find the acute angle between its left edge and the vertical. (b) Instead support it with two vertical strings at $P$ and $Q=(2,2)$, with $PQ$ horizontal. Find both tensions. Explain why the single-suspension condition cannot be imposed on either string separately in (b). **Self-written.**

<details markdown="1">
<summary>Hint</summary>

Include both the lamina and the particle. After finding $G$, identify which forces act in each arrangement before choosing equations.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\bar x=\frac{4(0)+2(2)}6=\frac23,\qquad
\bar y=\frac{4(1)+2(0)}6=\frac23.$$

The claim applies the lamina's centre to the whole body. The particle moves the combined centre towards $(2,0)$. In (a), the body-coordinate changes from $P$ to $G$ are $8/3$ across and $4/3$ down, so

$$\tan\theta=2,\qquad\boxed{\theta=63.4^\circ}.$$

Choose $G$ below $P$. In (b), use the weight $6g$ at $G$:

$$4T_Q=6g\left(\frac83\right),\qquad\boxed{T_Q=39.2\,\mathrm N},\qquad\boxed{T_P=19.6\,\mathrm N}.$$

Both tensions are positive and sum to $58.8\,\mathrm N$. About $Q$, $4T_P=6g(2-2/3)=78.4\,\mathrm{N\,m}$. Two separate upward forces jointly balance the weight and its moment; neither force has to share the weight's line of action. If you used the one-point rule in (b), return to [two strings](#support-by-two-strings), then do [the support retry](#retry-replace-suspension-by-two-supports). For omitted mass or a wrong angle, return to [attached masses](#attached-masses-and-different-materials) or [suspension](#suspended-bodies), then do [the changed sheet](#cutout-retry).

</details>

</div>

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

## Sources and Scope {#sources-and-scope}

Scope: [OxfordAQA Mathematics 9660 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf), §3.5 M2.3. Integration methods for centres of mass are not required. Assessment reference actually read: **9660/MA05 Unit M2, January 2025, Q6**, [Question Paper, pp.12–13](/assets/pdf/fx-cg50/references/oxfordaqa-ma05-2025-january-question-paper.pdf#page=12) and [Mark Scheme, Version 1.0 Final, p.12](/assets/pdf/fx-cg50/references/oxfordaqa-ma05-2025-january-mark-scheme.pdf#page=12). It requires the meaning of uniform surface density, inclusion of both particles and lamina, exact coordinates, and suspension geometry. These stored paired documents informed the teaching checks; all tasks here remain self-written, without official marks.

The rounding convention at the start applies to this page's self-written tasks. The January 2025 paper defaults to two significant figures for calculator final answers unless stated otherwise; Q6(b) explicitly asks for exact coordinates. Follow each original instruction when attempting official questions.

**Learning path:** [Previous: Moments and Rigid Objects in Equilibrium](/alevel/a2-mathematics/mechanics/moments-and-rigid-objects/) · [Mechanics topic index](/alevel/a2-mathematics/mechanics/) · [Next: Newton's Laws of Motion](/alevel/a2-mathematics/mechanics/newtons-laws-of-motion/).
