---
title: Vectors and Kinematics
layout: subjects
mathjax: true
grade: a2
subject: m2
permalink: /alevel/a2-mathematics/mechanics/vectors-and-kinematics/
toc_headings: h2
study_page: true
reading_layout: true
---

[A2 Mechanics](/alevel/a2-mathematics/mechanics/) · MA05 · M2.2
{:.lesson-meta}

You walk away from a doorway, turn round and come back. Your final position is the same, but you have travelled a distance. **How can a motion description keep both direction and distance clear?**

You will distinguish the quantities a question asks for, find velocity and acceleration in up to three dimensions, recover position from given conditions, and decide whether two moving particles actually meet.

Start with [position](#position-and-displacement), [changes in position](#velocity-and-acceleration) and [distance travelled](#distance-travelled), then [integration](#integrating-with-given-conditions) and [paths](#the-path-of-a-particle). Revising? Go to [practice](#practice) with the help closed.

**Before you start:** review [vectors and position vectors](/alevel/a2-mathematics/vectors/#vectors-and-position-vectors), [differentiation](/alevel/a2-mathematics/differentiation/) and [integration](/alevel/a2-mathematics/integration/). Use radians when differentiating or integrating trigonometric functions. Unless stated otherwise below, time is in seconds and position coordinates are in metres. Give numerical angles to one decimal place unless asked otherwise.

All worked examples and tasks are **Self-written**, not official past-paper questions, and have no official marks. Numerical answers use three significant figures unless specified otherwise; keep exact working. [Source notes](#sources-and-scope) give the assessment connection.
{:.lesson-meta}

## Position and Displacement

The Cartesian unit vectors $\mathbf i$, $\mathbf j$ and $\mathbf k$ point along the positive coordinate axes. They have magnitude $1$.

Choose one fixed origin and fixed perpendicular axes. In $\mathbf r=3\mathbf i-2\mathbf j$, the coefficients mean three units along the positive $x$ direction and two along the negative $y$ direction. A position is an arrow from the origin to the particle; displacement is an arrow from the starting point to the finishing point. A negative component records direction, not a negative distance.

The **position vector** $\mathbf r$ gives a particle's position relative to a fixed origin $O$. The **displacement** between two positions is final position minus initial position:

$$\Delta\mathbf r=\mathbf r(t_2)-\mathbf r(t_1).$$

For $\mathbf q=q_x\mathbf i+q_y\mathbf j+q_z\mathbf k$, its magnitude is

$$\lvert\mathbf q\rvert=\sqrt{q_x^2+q_y^2+q_z^2}.$$

The distance from $O$ is $\lvert\mathbf r\rvert$. The magnitude of a displacement is the straight-line distance between the two positions. **Neither is generally the total distance travelled along a curved path.**

<div class="worked-example" markdown="1">

### Example 1 — Find the displacement between two points

**Question:** A particle moves from $A=(-1,2,3)$ to $B=(3,-1,5)$. Find its displacement, the straight-line distance $AB$ and a unit vector in the displacement direction.

Subtract the starting position from the finishing position:

$$\overrightarrow{AB}=(3-(-1))\mathbf i+(-1-2)\mathbf j+(5-3)\mathbf k.$$

$$\boxed{\overrightarrow{AB}=4\mathbf i-3\mathbf j+2\mathbf k\ \mathrm m},\qquad\boxed{AB=\sqrt{29}\,\mathrm m}.$$

Divide by the magnitude to get a unit vector:

$$\boxed{\frac{4\mathbf i-3\mathbf j+2\mathbf k}{\sqrt{29}}}.$$

**Check:** Adding the displacement to $\overrightarrow{OA}$ gives $\overrightarrow{OB}$. The unit vector has squared magnitude $(16+9+4)/29=1$.

</div>

## Velocity and Acceleration

Over a short interval, the displacement divided by elapsed time gives average velocity. Taking the interval towards zero gives instantaneous velocity: how quickly each position coordinate changes. Acceleration similarly describes change in each velocity component. Differentiate each component separately with respect to time:

$$\mathbf v=\frac{\mathrm d\mathbf r}{\mathrm dt},\qquad\mathbf a=\frac{\mathrm d\mathbf v}{\mathrm dt}=\frac{\mathrm d^2\mathbf r}{\mathrm dt^2}.$$

| Quantity | Meaning | Unit |
|---|---|---|
| Position $\mathbf r$ | Position relative to the origin | $\mathrm m$ |
| Velocity $\mathbf v$ | Rate of change of position, including direction | $\mathrm{m\,s^{-1}}$ |
| Speed $\lvert\mathbf v\rvert$ | Magnitude of velocity | $\mathrm{m\,s^{-1}}$ |
| Acceleration $\mathbf a$ | Rate of change of velocity | $\mathrm{m\,s^{-2}}$ |

The unit vectors are fixed, so differentiate the scalar coefficients only. Find $\mathbf v$ first, then its magnitude: **differentiating $\lvert\mathbf r\rvert$ does not generally give speed**.

For example, walking around a circular track centred at $O$ keeps your distance from $O$ constant, but your position keeps changing. The derivative of distance from $O$ measures motion towards or away from $O$, not all motion along the path. A velocity can also change direction while its magnitude stays constant, so nonzero acceleration need not mean increasing speed.

<div class="worked-example" markdown="1">

### Example 2 — Differentiate in three dimensions

**Question:** For $t\geq0$, a particle has position

$$\mathbf r=(t^2+1)\mathbf i+(t^3-2t)\mathbf j+3t\mathbf k.$$

Find velocity, acceleration and speed at $t=1$. Find the angle between the velocity and the positive $x$-axis at this time.

The derivative of $t^2+1$ is $2t$: the initial offset $1$ does not contribute to motion. Apply that reasoning separately in all three fixed directions:

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

</div>

## Distance Travelled {#distance-travelled}

Distance travelled counts the length of every part of the motion. A small interval contributes approximately speed multiplied by its duration. Adding these contributions gives

$$\text{distance travelled}=\int_{t_1}^{t_2}\lvert\mathbf v(t)\rvert\,\mathrm dt.$$

Integrating the velocity vector instead gives displacement. In one dimension, find zeros of the signed velocity and check its sign on either side. Split at each reversal before adding distances; a zero without a sign change is not a reversal. In several dimensions, one zero component does not make the entire velocity zero.

<div class="worked-example" markdown="1">

### Example — Returning to the same point {#distance-example}

**Question:** A particle has coordinate $x=(t-1)^2$ for $0\leq t\leq2$. Find displacement and distance travelled.

Both endpoint coordinates are $1$, so displacement is zero. But $v=2t-2$ is negative before $t=1$ and positive afterwards. The particle moves from $x=1$ to $x=0$ and back to $x=1$:

$$\text{distance}=\lvert0-1\rvert+\lvert1-0\rvert=2\,\mathrm m.$$

Equivalently, integrate speed with the correct signs:

$$\int_0^1(2-2t)\,\mathrm dt+\int_1^2(2t-2)\,\mathrm dt
=[2t-t^2]_0^1+[t^2-2t]_1^2=1+1=2.$$

**Check:** the same final position does not imply no motion. Try [Q7](#q7--distinguish-position-displacement-and-distance-travelled) before checking the answer.

</div>

## Integrating with Given Conditions

Integrate components separately. A vector integral needs a **constant vector**:

$$\mathbf v=\int\mathbf a\,\mathrm dt+\mathbf C,\qquad\mathbf r=\int\mathbf v\,\mathrm dt+\mathbf D.$$

Here each integral represents one chosen antiderivative. $\mathbf C=C_x\mathbf i+C_y\mathbf j+C_z\mathbf k$ and $\mathbf D$ are separate constant vectors. For a scalar component, write $+C$; after a second integration, use a different constant.

**Use the time actually given.** "Initially" means $t=0$, but a condition such as $\mathbf v(1)=\mathbf i$ must be substituted at $t=1$. Being at rest means $\mathbf v=\mathbf0$, not $\mathbf r=\mathbf0$.

A constant remains after integration because many position functions can have the same velocity: shifting the whole path does not change motion. A position condition chooses the correct shift. Starting from acceleration needs two integrations, so a velocity condition and a position condition determine different constants. If the question gives a resultant force for constant mass, first use $\mathbf a=\mathbf F/m$; integrating force directly would give momentum change, not velocity.

<div class="worked-example" markdown="1">

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

</div>

<div class="worked-example" markdown="1">

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

</div>

<div class="worked-example" markdown="1">

### Example 5 — Exponential and trigonometric components

**Question:** For $t\geq0$, a particle has velocity

$$\mathbf v=2e^{-t}\mathbf i+\cos t\,\mathbf j-2t\mathbf k,$$

and initial position $3\mathbf i-\mathbf j+\mathbf k$. Find its position and acceleration at time $t$, and its initial speed.

Integrate in radians:

$$\int 2e^{-t}\,\mathrm dt=-2e^{-t},\qquad
\int\cos t\,\mathrm dt=\sin t,\qquad
\int-2t\,\mathrm dt=-t^2,$$

where these are chosen antiderivatives before adding the constant vector. The negative sign in the exponential term is needed because differentiating $e^{-t}$ contributes a factor of $-1$.

$$\mathbf r=-2e^{-t}\mathbf i+\sin t\,\mathbf j-t^2\mathbf k+\mathbf C.$$

At $t=0$, $-2\mathbf i+\mathbf C=3\mathbf i-\mathbf j+\mathbf k$, giving $\mathbf C=5\mathbf i-\mathbf j+\mathbf k$:

$$\boxed{\mathbf r=(5-2e^{-t})\mathbf i+(\sin t-1)\mathbf j+(1-t^2)\mathbf k}.$$

Differentiate velocity to get

$$\boxed{\mathbf a=-2e^{-t}\mathbf i-\sin t\,\mathbf j-2\mathbf k}.$$

Initially, $\mathbf v(0)=2\mathbf i+\mathbf j$, so the speed is $\boxed{\sqrt5\,\mathrm{m\,s^{-1}}}$.

**Check:** $\frac{\mathrm d}{\mathrm dt}(-2e^{-t})=2e^{-t}$. The $k$ component of position is $1-t^2$, whose derivative is $-2t$.

</div>

## The Path of a Particle

The component equations of $\mathbf r(t)$ give **parametric equations** of the path. Eliminate $t$ to find a Cartesian equation, and keep any restriction that follows from the time interval.

At an instant with non-zero velocity, the velocity points along the tangent to the path. Acceleration need not point in the same direction. For two non-zero vectors, use $\mathbf v\cdot\mathbf a=0$ to test whether they are perpendicular.

![Path y equals x squared over four minus two x, with the particle at (4, minus 4), velocity to the right and acceleration upwards](/assets/img/a2-math-mech/kinematics-path.svg)

<div class="worked-example" markdown="1">

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

</div>

### Meeting or crossing a path? {#meeting-or-crossing}

A path intersection allows each particle to reach a point at its own time. A meeting requires equal positions at one common time in the same reference frame. Equalise all components and check the time interval. A time from one component is only a candidate until the other components agree.

## Practice

Allow about 35–45 minutes. Include units for numerical vectors and magnitudes. Keep exact answers unless rounding is requested.

<div class="lesson-check" markdown="1">

### Q1 — A recorded position {#q1--differentiate-and-find-speed}

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

</div>

<div class="lesson-check" markdown="1">

### Q2 — A velocity record {#q2--use-an-initial-position}

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

</div>

<div class="lesson-check" markdown="1">

### Q3 — Two measurements {#q3--use-two-conditions-at-t--2}

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

</div>

<div class="lesson-check" markdown="1">

### Q4 — A claim about motion {#q4--a-zero-component-is-not-rest}

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

</div>

<div class="lesson-check" markdown="1">

### Q5 — A moving point {#q5--find-a-path-and-perpendicular-vectors}

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

</div>

<div class="lesson-check" markdown="1">

### Q6 — Three coordinates {#q6--three-dimensional-motion-with-sine-and-an-exponential}

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

</div>

<div class="lesson-check" markdown="1">

### Q7 — A journey on a line {#q7--distinguish-position-displacement-and-distance-travelled}

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

</div>

## Independent Check

These tasks are also self-written. Try with help closed; after an error use the specific recovery link and a new retry. Meeting and speed are different skills and are checked separately.

For constants, revisit [given conditions](#integrating-with-given-conditions), then the [three-dimensional retry](#conditions-retry). For directions, revisit [velocity](#velocity-and-acceleration), then the [direction retry](#direction-retry). For distance, revisit [the returning journey](#distance-example), then the [journey retry](#distance-retry). For a one-component rest error, try [another velocity record](#rest-retry).

<div class="lesson-check" markdown="1">

### Two moving points {#meeting-check}

**Question:** For $0\leq t\leq2$, particles A and B have positions $\mathbf r_A=t\mathbf i+t^2\mathbf j$ and $\mathbf r_B=(3-t)\mathbf i+\mathbf j$, in metres with time in seconds. Sketch their paths, including their directions of motion. Their paths pass through a common point. Decide whether they collide during the interval and justify your decision. No method is specified.

<details markdown="1">
<summary>Hint</summary>

A path intersection allows a different parameter value for each particle. A collision requires one common time satisfying both component equations.

</details>

<details markdown="1">
<summary>Solution and check</summary>

A follows the part of the parabola with increasing horizontal coordinate; B moves left along a horizontal segment:

$$y_A=x_A^2,\quad 0\leq x_A\leq2;\qquad y_B=1,\quad1\leq x_B\leq3.$$

Their common point is $(1,1)$, reached by A at $t=1$ and B at $t=2$. These are different times. Alternatively, equal horizontal positions require $t=3-t$, giving $t=\frac32$, when their vertical coordinates are $\frac94$ and $1$. They do not collide. Finding the common point alone does not establish a collision.

For a path-intersection error, revisit [the common-time condition](#meeting-or-crossing), then try the next task.

</details>

</div>

<span id="path-retry"></span>

<div class="lesson-check" markdown="1">

### New motion records {#meeting-retry}

**Question:** For $0\leq t\leq2$, A starts at the origin with velocity $\mathbf v_A=\mathbf i+2t\mathbf j$. B starts at $2\mathbf i+\mathbf j$ with velocity $\mathbf v_B=-\mathbf i$. Find their path segments, decide whether they meet, and determine whether A's velocity and acceleration are perpendicular at any meeting.

<details markdown="1">
<summary>Hint</summary>

Integrate using each initial position, then check a common time.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\mathbf r_A=t\mathbf i+t^2\mathbf j,\qquad\mathbf r_B=(2-t)\mathbf i+\mathbf j.$$

$$y_A=x_A^2,\quad0\leq x_A\leq2;\qquad y_B=1,\quad0\leq x_B\leq2.$$

$$t=2-t,\qquad t^2=1\quad\Rightarrow\quad t=1,\quad(x,y)=(1,1).$$

$$\mathbf v_A(1)=\mathbf i+2\mathbf j,\qquad\mathbf a_A(1)=2\mathbf j,\qquad\mathbf v_A(1)\cdot\mathbf a_A(1)=4.$$

Both components agree at the same time, so they meet. The nonzero scalar product means the nonzero vectors are not perpendicular. Check each condition separately; the previous conclusion cannot be carried over.

</details>

</div>

<div class="lesson-check" markdown="1">

### A direction from a record {#direction-check}

**Question:** A particle has position $\mathbf r=(t^2-3t+2)\mathbf i+(4t+1)\mathbf j$. At $t=1$, find its speed and direction of motion anticlockwise from the positive $x$-axis. Explain why the direction of its position vector is not the answer.

<details markdown="1">
<summary>Hint</summary>

Find the rate of change of position, then sketch the velocity signs.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\mathbf v=(2t-3)\mathbf i+4\mathbf j,\qquad\mathbf v(1)=-\mathbf i+4\mathbf j.$$

$$\lvert\mathbf v(1)\rvert=\sqrt{17}\,\mathrm{m\,s^{-1}},\qquad\theta=180^\circ-\tan^{-1}(4)=104.0^\circ.$$

$$\mathbf r(1)=5\mathbf j.$$

Velocity points left and up, whereas position points vertically up from the origin. Revisit [velocity and Example 2](#velocity-and-acceleration), then close this answer and try the next task.

</details>

</div>

<div class="lesson-check" markdown="1">

### Another record {#direction-retry}

**Question:** A particle has constant velocity. In every two-second interval its displacement is $(-6\mathbf i-8\mathbf j)\,\mathrm m$. Find its velocity, speed and direction anticlockwise from the positive $x$-axis.

<details markdown="1">
<summary>Hint</summary>

Divide displacement by elapsed time, then check direction.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\mathbf v=(-3\mathbf i-4\mathbf j)\,\mathrm{m\,s^{-1}},\qquad\lvert\mathbf v\rvert=5\,\mathrm{m\,s^{-1}}.$$

$$\theta=180^\circ+\tan^{-1}(4/3)=233.1^\circ.$$

Velocity points left and down; the acute reference angle alone is not the requested direction.

</details>

</div>

<div class="lesson-check" markdown="1">

### Another velocity record {#rest-retry}

**Question:** For $t\geq0$, a particle has velocity $\mathbf v=(t-1)\mathbf i+(t^2-1)\mathbf j$. Can it be at rest? Find its least speed and explain whether a direction of motion can be assigned at that instant.

<details markdown="1">
<summary>Hint</summary>

Both components must be zero at the same time. Can speed be less than zero?

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$t-1=0,\quad t^2-1=0\quad\Rightarrow\quad t=1.$$

$$\lvert\mathbf v\rvert\geq0,\qquad\lvert\mathbf v(1)\rvert=0.$$

Here both components vanish at the same time and the minimum speed is zero. The zero velocity vector has no direction. For a one-component test, revisit [the velocity definition](#velocity-and-acceleration).

</details>

</div>

<span id="conditions-retry"></span>

<div class="lesson-check" markdown="1">

### A three-dimensional record {#calculus-retry}

**Question:** A body of constant mass $2\,\mathrm{kg}$ starts from rest at the origin. Its resultant force is $\mathbf F=4t\mathbf i+4\cos(2t)\mathbf j+2e^{-t}\mathbf k$ newtons, with $t$ in seconds. Find its position at $t=1$ and its distance from the origin then. Show how both initial conditions enter. Is this distance necessarily its distance travelled?

<details markdown="1">
<summary>Hint</summary>

Divide by mass, then integrate twice. $\int2\cos(2t)\,\mathrm dt=\sin(2t)$; use separate constant vectors.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\mathbf a=2t\mathbf i+2\cos(2t)\mathbf j+e^{-t}\mathbf k.$$

$$\mathbf v=t^2\mathbf i+\sin(2t)\mathbf j-e^{-t}\mathbf k+\mathbf C.$$

$$\mathbf v(0)=\mathbf0\quad\Rightarrow\quad\mathbf C=\mathbf k.$$

$$\mathbf r=\frac{t^3}{3}\mathbf i-\frac12\cos(2t)\mathbf j+(t+e^{-t})\mathbf k+\mathbf D.$$

$$\mathbf r(0)=\mathbf0\quad\Rightarrow\quad\mathbf D=\frac12\mathbf j-\mathbf k.$$

$$\mathbf r(1)=\frac13\mathbf i+\frac{1-\cos2}{2}\mathbf j+e^{-1}\mathbf k\ \mathrm m.$$

$$\lvert\mathbf r(1)\rvert=\sqrt{\frac19+\frac{(1-\cos2)^2}{4}+e^{-2}}\ \mathrm m\approx0.865\,\mathrm m.$$

Divide force by mass first. Rest and origin determine different constants. The final magnitude is straight-line separation; distance along the curve requires integrating speed and is not automatically the same. Differentiate back twice and recover both conditions; revisit [how conditions work](#integrating-with-given-conditions) if necessary.

</details>

</div>

<div class="lesson-check" markdown="1">

### Another journey {#distance-retry}

**Question:** For $0\leq t\leq3$, a particle has velocity $\mathbf v=(2t-2)\mathbf i$ and initial position $3\mathbf i$. Find its final position, displacement, final distance from the origin and total distance travelled.

<details markdown="1">
<summary>Hint</summary>

Recover position and locate the velocity sign change; distinguish all four quantities.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\mathbf r=(t^2-2t+3)\mathbf i,\quad\mathbf r(3)=6\mathbf i\,\mathrm m,\quad\Delta\mathbf r=3\mathbf i\,\mathrm m.$$

$$\lvert\mathbf r(3)\rvert=6\,\mathrm m,\quad\mathbf v(1)=\mathbf0,\quad\mathbf r(1)=2\mathbf i\,\mathrm m.$$

$$\text{distance travelled}=\lvert2-3\rvert+\lvert6-2\rvert=5\,\mathrm m.$$

Use initial position for the constant and split at the reversal. For an endpoint-only answer, revisit [the returning journey](#distance-example).

</details>

</div>

<div class="lesson-check" markdown="1">

### A claim about a moving point {#radial-check}

**Question:** A different particle has position $\mathbf r=\cos t\,\mathbf i+\sin t\,\mathbf j$ for $0\leq t\leq\frac\pi2$. A student differentiates its distance from the origin and concludes that it is at rest. Assess the reasoning. Find its speed and total distance travelled over the interval.

<details markdown="1">
<summary>Hint</summary>

Compare changes in components with changes in their magnitude.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\lvert\mathbf r\rvert=1,\qquad\mathbf v=-\sin t\,\mathbf i+\cos t\,\mathbf j,\qquad\lvert\mathbf v\rvert=1.$$

The particle remains a constant distance from the origin while its position changes. Its speed is $1\,\mathrm{m\,s^{-1}}$ and its total distance travelled is $\frac\pi2\,\mathrm m$. Differentiating distance from the origin measures radial motion; it is not generally speed along a path.

Revisit [the meaning of velocity](#velocity-and-acceleration), then try the next task. This is separate from the meeting retry.

</details>

</div>

<div class="lesson-check" markdown="1">

### A line away from the origin {#radial-retry}

**Question:** A particle has position $\mathbf r=(3+t)\mathbf i+4\mathbf j$ for $0\leq t\leq2$. At $t=0$, compare its speed with the rate of change of its distance from the origin. Find its distance travelled during the interval.

<details markdown="1">
<summary>Hint</summary>

Differentiate the position vector and its magnitude separately.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\mathbf v=\mathbf i\,\mathrm{m\,s^{-1}},\quad\lvert\mathbf v\rvert=1\,\mathrm{m\,s^{-1}},\quad\lvert\mathbf r\rvert=\sqrt{(3+t)^2+16}.$$

$$\frac{\mathrm d\lvert\mathbf r\rvert}{\mathrm dt}=\frac{3+t}{\sqrt{(3+t)^2+16}},\qquad\left.\frac{\mathrm d\lvert\mathbf r\rvert}{\mathrm dt}\right\rvert_{t=0}=\frac35\,\mathrm{m\,s^{-1}}.$$

$$\text{distance travelled}=\int_0^2 1\,\mathrm dt=2\,\mathrm m.$$

Even on this straight path with changing distance from the origin, the two rates differ.

</details>

</div>

## Retrieve after another topic {#later-check}

Continue to [Forces, Equilibrium and Friction](/alevel/a2-mathematics/mechanics/forces-equilibrium-and-friction/). After [Uniform Circular Motion](/alevel/a2-mathematics/mechanics/uniform-circular-motion/), close the text, repeat [the radial check](#radial-check), add acceleration and explain how constant speed can accompany acceleration. Then use the course [mixed problems](/alevel/a2-mathematics/mechanics/#mixed-problems) and [later review](/alevel/a2-mathematics/mechanics/#later-review).

## Sources and Scope

Scope: [OxfordAQA 9660 v5.2, M2.2, connecting to M2.4](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf). M2 occupies printed27–30 / PDF26–29 (1-based); M2.2 is on printed28 / PDF27. **MA05 January 2025 Q3(b)(i–ii)** (QP p7, MS p8) and **Q9** (QP pp18–19, MS p17) were read with the [question paper](/assets/pdf/fx-cg50/references/oxfordaqa-ma05-2025-january-question-paper.pdf#page=7) and [Final v1.0 mark scheme](/assets/pdf/fx-cg50/references/oxfordaqa-ma05-2025-january-mark-scheme.pdf#page=8). The former requires chain-rule differentiation and use of mass and acceleration. The latter separates rest from origin conditions, integrates twice and asks for the position magnitude, not distance along the journey. This page's tasks remain self-written with no official marks. Textbook alignment: Chapter 10 Section 10.2 and review, printed pp.151–157.

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
