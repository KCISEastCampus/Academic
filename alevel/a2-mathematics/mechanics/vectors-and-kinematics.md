---
title: Vectors and Kinematics
layout: subjects
mathjax: true
grade: a2
subject: m2
permalink: /alevel/a2-mathematics/mechanics/vectors-and-kinematics/
toc_headings: h2
study_page: true
---

[A2 Mechanics](/alevel/a2-mathematics/mechanics/) · M2.2 Kinematics

Use vectors to describe motion in one, two or three dimensions. Differentiate to find velocity and acceleration; integrate and use the given conditions to find position.

- **Learning:** start with [position and displacement](#position-and-displacement), then study [differentiation](#velocity-and-acceleration), [integration](#integrating-with-given-conditions) and [the path of a particle](#the-path-of-a-particle).
- **Homework help:** decide whether the question asks for a vector, its magnitude or a direction before you calculate.
- **Revision:** try [practice](#practice) without opening the hints and solutions.

Textbook: Chapter 10, Section 10.2 and the chapter review (printed pp. 151–157). This lesson includes Cartesian unit vectors, variable acceleration, speed, given conditions and Cartesian equations of paths.

**Before you start:** review [vectors and position vectors](/alevel/a2-mathematics/vectors/#vectors-and-position-vectors), [differentiation](/alevel/a2-mathematics/differentiation/) and [integration](/alevel/a2-mathematics/integration/). Use radians when differentiating or integrating trigonometric functions. Unless stated otherwise below, time is in seconds and position coordinates are in metres. Give numerical angles to one decimal place unless asked otherwise.

All worked examples and practice questions are self-written, not official past-paper questions. The suggested practice time is a guide; no official marks are assigned.

## Position and Displacement

The Cartesian unit vectors $\mathbf i$, $\mathbf j$ and $\mathbf k$ point along the positive coordinate axes. They have magnitude $1$.

The **position vector** $\mathbf r$ gives a particle's position relative to a fixed origin $O$. The **displacement** between two positions is final position minus initial position:

$$\Delta\mathbf r=\mathbf r(t_2)-\mathbf r(t_1).$$

For $\mathbf q=q_x\mathbf i+q_y\mathbf j+q_z\mathbf k$, its magnitude is

$$\lvert\mathbf q\rvert=\sqrt{q_x^2+q_y^2+q_z^2}.$$

The distance from $O$ is $\lvert\mathbf r\rvert$. The magnitude of a displacement is the straight-line distance between the two positions. **Neither is generally the total distance travelled along a curved path.**

### Example 1 — Find the displacement between two points

**Question:** A particle moves from $A=(-1,2,3)$ to $B=(3,-1,5)$. Find its displacement, the straight-line distance $AB$ and a unit vector in the displacement direction.

Subtract the starting position from the finishing position:

$$\overrightarrow{AB}=(3-(-1))\mathbf i+(-1-2)\mathbf j+(5-3)\mathbf k.$$

$$\boxed{\overrightarrow{AB}=4\mathbf i-3\mathbf j+2\mathbf k\ \mathrm m},\qquad\boxed{AB=\sqrt{29}\,\mathrm m}.$$

Divide by the magnitude to get a unit vector:

$$\boxed{\frac{4\mathbf i-3\mathbf j+2\mathbf k}{\sqrt{29}}}.$$

**Check:** Adding the displacement to $\overrightarrow{OA}$ gives $\overrightarrow{OB}$. The unit vector has squared magnitude $(16+9+4)/29=1$.

## Velocity and Acceleration

Differentiate each component separately with respect to time:

$$\mathbf v=\frac{\mathrm d\mathbf r}{\mathrm dt},\qquad\mathbf a=\frac{\mathrm d\mathbf v}{\mathrm dt}=\frac{\mathrm d^2\mathbf r}{\mathrm dt^2}.$$

| Quantity | Meaning | Unit |
|---|---|---|
| Position $\mathbf r$ | Position relative to the origin | $\mathrm m$ |
| Velocity $\mathbf v$ | Rate of change of position, including direction | $\mathrm{m\,s^{-1}}$ |
| Speed $\lvert\mathbf v\rvert$ | Magnitude of velocity | $\mathrm{m\,s^{-1}}$ |
| Acceleration $\mathbf a$ | Rate of change of velocity | $\mathrm{m\,s^{-2}}$ |

The unit vectors are fixed, so differentiate the scalar coefficients only. Find $\mathbf v$ first, then its magnitude: **differentiating $\lvert\mathbf r\rvert$ does not generally give speed**.

### Example 2 — Differentiate in three dimensions

**Question:** For $t\geq0$, a particle has position

$$\mathbf r=(t^2+1)\mathbf i+(t^3-2t)\mathbf j+3t\mathbf k.$$

Find velocity, acceleration and speed at $t=1$. Find the angle between the velocity and the positive $x$-axis at this time.

$$\mathbf v=2t\mathbf i+(3t^2-2)\mathbf j+3\mathbf k,$$

$$\mathbf a=2\mathbf i+6t\mathbf j.$$

At $t=1$:

$$\boxed{\mathbf v=2\mathbf i+\mathbf j+3\mathbf k\ \mathrm{m\,s^{-1}}},$$

$$\boxed{\mathbf a=2\mathbf i+6\mathbf j\ \mathrm{m\,s^{-2}}}.$$

The speed is $\boxed{\sqrt{14}\,\mathrm{m\,s^{-1}}}$.

Use the scalar product with $\mathbf i$ for the angle $\theta$:

$$\cos\theta=\frac{\mathbf v\cdot\mathbf i}{\lvert\mathbf v\rvert\lvert\mathbf i\rvert}=\frac2{\sqrt{14}},\qquad\boxed{\theta=57.7^\circ}.$$

**Check:** The $k$ component of velocity is constant, so the $k$ component of acceleration is zero. The positive $x$ component gives an angle less than $90^\circ$ to the positive $x$-axis.

**Common mistake:** adding velocity components to get speed. Here the speed is $\sqrt{2^2+1^2+3^2}$, not $2+1+3$.

## Integrating with Given Conditions

Integrate components separately. A vector integral needs a **constant vector**:

$$\mathbf v=\int\mathbf a\,\mathrm dt+\mathbf C,\qquad\mathbf r=\int\mathbf v\,\mathrm dt+\mathbf D.$$

Here each integral represents one chosen antiderivative. $\mathbf C=C_x\mathbf i+C_y\mathbf j+C_z\mathbf k$ and $\mathbf D$ are separate constant vectors. For a scalar component, write $+C$; after a second integration, use a different constant.

**Use the time actually given.** "Initially" means $t=0$, but a condition such as $\mathbf v(1)=\mathbf i$ must be substituted at $t=1$. Being at rest means $\mathbf v=\mathbf0$, not $\mathbf r=\mathbf0$.

### Example 3 — Position is not initially zero

**Question:** A particle has velocity

$$\mathbf v=4t\mathbf i+(3t^2-2)\mathbf j,$$

and initial position $\mathbf r(0)=2\mathbf i+5\mathbf j$. Find its position at $t=2$, its displacement from its initial position and its speed then.

Integrate:

$$\mathbf r=2t^2\mathbf i+(t^3-2t)\mathbf j+\mathbf C.$$

At $t=0$, the variable terms vanish, so $\mathbf C=2\mathbf i+5\mathbf j$. Thus

$$\boxed{\mathbf r=(2t^2+2)\mathbf i+(t^3-2t+5)\mathbf j}.$$

At $t=2$, $\boxed{\mathbf r(2)=10\mathbf i+9\mathbf j\ \mathrm m}$. The displacement is

$$\mathbf r(2)-\mathbf r(0)=\boxed{8\mathbf i+4\mathbf j\ \mathrm m}.$$

The velocity is $8\mathbf i+10\mathbf j$, so the speed is

$$\boxed{\sqrt{164}=2\sqrt{41}\approx12.8\,\mathrm{m\,s^{-1}}}.$$

The distance from $O$ is $\sqrt{181}\,\mathrm m$, while the displacement magnitude is $\sqrt{80}\,\mathrm m$. They answer different questions.

**Check:** Substitution at $t=0$ gives the stated initial position. Differentiating the position gives the original velocity.

### Example 4 — Integrate twice using conditions at a later time

**Question:** A particle has acceleration $\mathbf a=2\mathbf i+6t\mathbf j$. At $t=1$, its velocity is $3\mathbf i+2\mathbf j$ and its position is $4\mathbf i-\mathbf j$. Find $\mathbf v(t)$ and $\mathbf r(t)$, then its position at $t=2$.

Integrate acceleration:

$$\mathbf v=2t\mathbf i+3t^2\mathbf j+\mathbf C.$$

At $t=1$, $2\mathbf i+3\mathbf j+\mathbf C=3\mathbf i+2\mathbf j$, so $\mathbf C=\mathbf i-\mathbf j$:

$$\boxed{\mathbf v=(2t+1)\mathbf i+(3t^2-1)\mathbf j}.$$

Integrate again, including a new constant vector:

$$\mathbf r=(t^2+t)\mathbf i+(t^3-t)\mathbf j+\mathbf D.$$

At $t=1$, $2\mathbf i+\mathbf D=4\mathbf i-\mathbf j$, so $\mathbf D=2\mathbf i-\mathbf j$:

$$\boxed{\mathbf r=(t^2+t+2)\mathbf i+(t^3-t-1)\mathbf j}.$$

Hence $\boxed{\mathbf r(2)=8\mathbf i+5\mathbf j\ \mathrm m}$.

**Check:** At $t=1$, both given vectors are recovered. Differentiating twice gives $2\mathbf i+6t\mathbf j$.

**Common mistake:** treating the given position and velocity as the constants without substituting $t=1$. The variable terms are not zero at this time.

### Example 5 — Exponential and trigonometric components

**Question:** For $t\geq0$, a particle has velocity

$$\mathbf v=2e^{-t}\mathbf i+\cos t\,\mathbf j-2t\mathbf k,$$

and initial position $3\mathbf i-\mathbf j+\mathbf k$. Find its position and acceleration at time $t$, and its initial speed.

Integrate in radians:

$$\mathbf r=-2e^{-t}\mathbf i+\sin t\,\mathbf j-t^2\mathbf k+\mathbf C.$$

At $t=0$, $-2\mathbf i+\mathbf C=3\mathbf i-\mathbf j+\mathbf k$, giving $\mathbf C=5\mathbf i-\mathbf j+\mathbf k$:

$$\boxed{\mathbf r=(5-2e^{-t})\mathbf i+(\sin t-1)\mathbf j+(1-t^2)\mathbf k}.$$

Differentiate velocity to get

$$\boxed{\mathbf a=-2e^{-t}\mathbf i-\sin t\,\mathbf j-2\mathbf k}.$$

Initially, $\mathbf v(0)=2\mathbf i+\mathbf j$, so the speed is $\boxed{\sqrt5\,\mathrm{m\,s^{-1}}}$.

**Check:** $\frac{\mathrm d}{\mathrm dt}(-2e^{-t})=2e^{-t}$. The $k$ component of position is $1-t^2$, whose derivative is $-2t$.

## The Path of a Particle

The component equations of $\mathbf r(t)$ give **parametric equations** of the path. Eliminate $t$ to find a Cartesian equation, and keep any restriction that follows from the time interval.

At an instant with non-zero velocity, the velocity points along the tangent to the path. Acceleration need not point in the same direction. For two non-zero vectors, use $\mathbf v\cdot\mathbf a=0$ to test whether they are perpendicular.

![Path y equals x squared over four minus two x, with the particle at (4, minus 4), velocity to the right and acceleration upwards](/assets/img/a2-math-mech/kinematics-path.svg)

### Example 6 — Eliminate time and compare directions

**Question:** For $t\geq0$, a particle has position $\mathbf r=2t\mathbf i+(t^2-4t)\mathbf j$. Find the Cartesian equation of its path. Find when velocity and acceleration are perpendicular. Is it at rest then?

The coordinate equations are $x=2t$, $y=t^2-4t$. From $t=x/2$:

$$\boxed{y=\frac{x^2}{4}-2x,\qquad x\geq0}.$$

Differentiate:

$$\mathbf v=2\mathbf i+(2t-4)\mathbf j,\qquad\mathbf a=2\mathbf j.$$

Both vectors are non-zero. Their scalar product is

$$\mathbf v\cdot\mathbf a=2(0)+(2t-4)(2)=4t-8.$$

This is zero at $\boxed{t=2\,\mathrm s}$. At that time, the position is $(4,-4)$ and velocity is $2\mathbf i$. The particle is **not at rest**: its speed is $2\,\mathrm{m\,s^{-1}}$.

**Check:** The path has a horizontal tangent at $(4,-4)$, matching the velocity direction. Acceleration points upwards. At $t=0$, the path passes through $(0,0)$.

**Common mistake:** saying a particle stops when only one velocity component is zero. At rest, every component must be zero at the same time.

## Practice

Allow about 35–45 minutes. Include units for numerical vectors and magnitudes. Keep exact answers unless rounding is requested.

### Q1 — Differentiate and find speed

For $t\geq0$, $\mathbf r=(2t^3-t)\mathbf i+(t^2+3)\mathbf j-4t\mathbf k$. Find $\mathbf v(t)$, $\mathbf a(t)$ and the speed at $t=1$.

<details markdown="1">
<summary>Hint</summary>

Differentiate each coefficient, then find the magnitude of the velocity at $t=1$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\boxed{\mathbf v=(6t^2-1)\mathbf i+2t\mathbf j-4\mathbf k},\qquad\boxed{\mathbf a=12t\mathbf i+2\mathbf j}.$$

At $t=1$, $\mathbf v=5\mathbf i+2\mathbf j-4\mathbf k\ \mathrm{m\,s^{-1}}$, so speed $=\boxed{\sqrt{45}=3\sqrt5\,\mathrm{m\,s^{-1}}}$.

**Check:** The constant velocity component $-4$ gives zero acceleration in the $k$ direction.

</details>

### Q2 — Use an initial position

For $t\geq0$, $\mathbf v=6t\mathbf i+(2t-3)\mathbf j$ and $\mathbf r(0)=-\mathbf i+4\mathbf j$. Find the position at $t=2$ and the displacement over $0\leq t\leq2$.

<details markdown="1">
<summary>Hint</summary>

Add a constant vector after integrating. Displacement is the difference between two position vectors.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\mathbf r=(3t^2-1)\mathbf i+(t^2-3t+4)\mathbf j.$$

$$\boxed{\mathbf r(2)=11\mathbf i+2\mathbf j\ \mathrm m},\qquad\boxed{\Delta\mathbf r=12\mathbf i-2\mathbf j\ \mathrm m}.$$

**Check:** At $t=0$, the position is $-\mathbf i+4\mathbf j$. Its derivative is the stated velocity.

</details>

### Q3 — Use two conditions at t = 2

A particle has acceleration $\mathbf a=4t\mathbf i-2\mathbf j$. At $t=2$, $\mathbf v=3\mathbf i+\mathbf j$ and $\mathbf r=5\mathbf i+2\mathbf j$. Find velocity and position at time $t$.

<details markdown="1">
<summary>Hint</summary>

Use one constant vector for velocity and a new one for position. Substitute $t=2$ each time.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Integrating gives $\mathbf v=2t^2\mathbf i-2t\mathbf j+\mathbf C$. At $t=2$, $\mathbf C=-5\mathbf i+5\mathbf j$, so

$$\boxed{\mathbf v=(2t^2-5)\mathbf i+(5-2t)\mathbf j}.$$

Integrating again and using the given position gives

$$\boxed{\mathbf r=\left(\frac{2t^3}{3}-5t+\frac{29}{3}\right)\mathbf i+(-t^2+5t-4)\mathbf j}.$$

**Check:** At $t=2$, the position components are

$$\frac{16}{3}-10+\frac{29}{3}=5,\qquad -4+10-4=2.$$

Velocity is $(3,1)$ and its derivative is $(4t,-2)$.

</details>

### Q4 — A zero component is not rest

For $t\geq0$, $\mathbf v=(t-1)\mathbf i+(t+1)\mathbf j$. Can the particle be at rest? Find its least speed and the time when it occurs.

<details markdown="1">
<summary>Hint</summary>

At rest both components must be zero. To minimise speed, minimise its square.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The components vanish at $t=1$ and $t=-1$ respectively, never together. The particle cannot be at rest.

$$\lvert\mathbf v\rvert^2=(t-1)^2+(t+1)^2=2t^2+2.$$

For $t\geq0$, this is least at $\boxed{t=0}$, giving least speed $\boxed{\sqrt2\,\mathrm{m\,s^{-1}}}$.

**Check:** At $t=1$, speed is $2\,\mathrm{m\,s^{-1}}$, although the $i$ component is zero.

</details>

### Q5 — Find a path and perpendicular vectors

For $t\geq0$, $\mathbf r=3t\mathbf i+(t^2-2t)\mathbf j$. Find the Cartesian equation of the path, including its restriction. Find when velocity and acceleration are perpendicular, and give the speed then.

<details markdown="1">
<summary>Hint</summary>

Use $t=x/3$ for the path and $\mathbf v\cdot\mathbf a=0$ for perpendicular directions.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\boxed{y=\frac{x^2}{9}-\frac{2x}{3},\quad x\geq0}.$$

$\mathbf v=3\mathbf i+(2t-2)\mathbf j$ and $\mathbf a=2\mathbf j$. Their scalar product is $4t-4$, so they are perpendicular at $\boxed{t=1\,\mathrm s}$. The speed then is $\boxed{3\,\mathrm{m\,s^{-1}}}$.

**Check:** The particle is at $(3,-1)$, where the path has a horizontal tangent. Both vectors are non-zero.

</details>

### Q6 — Three-dimensional motion with sine and an exponential

For $t\geq0$, $\mathbf v=e^t\mathbf i+2\sin t\,\mathbf j+2t\mathbf k$ and $\mathbf r(0)=2\mathbf i+\mathbf k$. Find $\mathbf r(t)$, $\mathbf a(t)$ and the initial speed.

<details markdown="1">
<summary>Hint</summary>

Use $\int\sin t\,\mathrm dt=-\cos t+C$. At $t=0$, $e^t=1$ and $\cos t=1$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\boxed{\mathbf r=(e^t+1)\mathbf i+(2-2\cos t)\mathbf j+(t^2+1)\mathbf k}.$$

$$\boxed{\mathbf a=e^t\mathbf i+2\cos t\,\mathbf j+2\mathbf k}.$$

Initially $\mathbf v=\mathbf i$, so speed $=\boxed{1\,\mathrm{m\,s^{-1}}}$.

**Check:** At $t=0$, position is $(2,0,1)$. Differentiating gives the stated velocity, including the positive $2\sin t$ component.

</details>

### Q7 — Distinguish position, displacement and distance travelled

For $0\leq t\leq3$, a particle moves in a straight line with position $\mathbf r=(t^2-4t+3)\mathbf i$. Find its final position vector, displacement, distance from the origin at $t=3$ and total distance travelled.

<details markdown="1">
<summary>Hint</summary>

Find when the velocity changes sign, then split the motion there.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Initially $\mathbf r(0)=3\mathbf i\ \mathrm m$. Finally $\boxed{\mathbf r(3)=\mathbf0\ \mathrm m}$, so displacement $=\boxed{-3\mathbf i\ \mathrm m}$ and final distance from $O$ is $\boxed{0\,\mathrm m}$.

$\mathbf v=(2t-4)\mathbf i$ changes direction at $t=2$, where the coordinate is $-1$. The particle moves from $3$ to $-1$, then to $0$:

$$\boxed{\text{distance travelled}=\lvert-1-3\rvert+\lvert0-(-1)\rvert=5\,\mathrm m}.$$

**Check:** The total distance $5\,\mathrm m$ exceeds the displacement magnitude $3\,\mathrm m$ because the particle reverses direction.

</details>

## Quick Reference

| Asked for | Method | Check |
|---|---|---|
| Velocity or acceleration | Differentiate components with respect to $t$ | Units; fixed unit vectors are not differentiated |
| Speed | Find $\lvert\mathbf v\rvert$ | Non-negative scalar, not a sum of components |
| Position from velocity | Integrate, add $\mathbf C$, use the given position | Substitute the stated time; differentiate back |
| Position from acceleration | Integrate twice, using separate constants and conditions | Recover both given vectors |
| Displacement | Final position minus initial position | It is a vector; distinguish it from distance travelled |
| Distance from $O$ | Find $\lvert\mathbf r\rvert$ | Depends on the chosen origin |
| At rest | Set every velocity component to zero at the same time | One zero component is not enough |
| Direction | Use components or a scalar product | State the reference axis and check the quadrant |
| Cartesian path | Eliminate $t$ between coordinate equations | Keep the restriction from the time interval |
| Perpendicular velocity and acceleration | Use $\mathbf v\cdot\mathbf a=0$ | Both vectors must be non-zero |

**After practice:** record whether an error came from differentiation, integration, a given condition, magnitude, direction or the requested quantity.

**You should be able to:** work with motion in two and three dimensions, use conditions at any given time, distinguish speed from velocity and find a Cartesian path.

**Learning path:** [Previous: Mathematical Modelling](/alevel/a2-mathematics/mechanics/mathematical-modelling/) · [Mechanics topic index](/alevel/a2-mathematics/mechanics/) · [Next: Forces, Equilibrium and Friction](/alevel/a2-mathematics/mechanics/forces-equilibrium-and-friction/).
