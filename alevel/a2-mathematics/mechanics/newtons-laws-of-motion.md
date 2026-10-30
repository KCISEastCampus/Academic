---
title: Newton's Laws of Motion
layout: subjects
mathjax: true
grade: a2
subject: m2
permalink: /alevel/a2-mathematics/mechanics/newtons-laws-of-motion/
toc_headings: h2
study_page: true
reading_layout: true
---

[A2 Mechanics](/alevel/a2-mathematics/mechanics/) · M2.4 Newton's laws of motion

A trolley can move forwards while a backward force slows it down. **What matters is the combined force on the trolley, not just the direction it is travelling.** We will use that idea to predict motion, decide what changes at a stop, and reconstruct motion from a force record.

- **Learning:** start with [Newton's laws](#newtons-laws-and-the-resultant-force), then study [straight-line motion](#linear-motion-with-constant-acceleration), [connected particles](#connected-particles) and [variable acceleration](#motion-with-variable-acceleration).
- **Homework help:** name the body, draw its forces, choose positive directions and apply $\mathbf F=m\mathbf a$ to the resultant.
- **Revision:** try [practice](#practice) with the solutions closed. Check force directions, contact and the given velocity and position conditions.

You need equations, right-triangle components, signed velocity and basic differentiation/integration. Repair [one body's forces](/alevel/a2-mathematics/mechanics/forces-equilibrium-and-friction/#force-diagrams), [slope components](/alevel/a2-mathematics/mechanics/forces-equilibrium-and-friction/#slope-components), [velocity and acceleration](/alevel/a2-mathematics/mechanics/vectors-and-kinematics/#velocity-and-acceleration) or [integration with conditions](/alevel/a2-mathematics/mechanics/vectors-and-kinematics/#integrating-with-given-conditions) before the section that uses them.
{:.lesson-meta}

**Before you start:** review [Forces, Equilibrium and Friction](/alevel/a2-mathematics/mechanics/forces-equilibrium-and-friction/), [Mathematical Modelling](/alevel/a2-mathematics/mechanics/mathematical-modelling/) and [Vectors and Kinematics](/alevel/a2-mathematics/mechanics/vectors-and-kinematics/). Use $g=9.8\,\mathrm{m\,s^{-2}}$ unless another value is given. Keep exact values until the final answer, then give numerical answers to three significant figures, or one decimal place for angles, unless asked otherwise.

All worked examples and practice questions are self-written, not official past-paper questions. No official marks are assigned. Diagrams show directions; arrow lengths are not a common force scale.

Use an inertial reference frame and constant mass throughout this lesson. Before collision or impulse problems, use the [AS momentum bridge: direction and energy](/alevel/a2-mathematics/mechanics/momentum-bridge/) to check the external impulse and distinguish momentum conservation from kinetic-energy conservation. That bridge revises MA02 prerequisites; coefficient of restitution is not needed here.

Here an **inertial frame** means axes which do not accelerate or rotate relative to a suitable fixed frame; we approximate the ground as one. A particle model follows the body's position without modelling its turning or deformation.

## Newton's Laws and the Resultant Force {#newtons-laws-and-the-resultant-force}

Imagine a $3\,\mathrm{kg}$ trolley pulled right by $10\,\mathrm N$, with $4\,\mathrm N$ resistance left. Its resultant is $10-4=6\,\mathrm N$ right, so its rightward velocity increases by $2\,\mathrm{m\,s^{-1}}$ each second. That rate of change is its **acceleration**, $6/3=2\,\mathrm{m\,s^{-2}}$. If it was moving left, this rightward acceleration would initially reduce its speed. Force changes velocity; it does not tell you the current velocity.

1. With zero resultant force, a body stays at rest or moves with constant velocity.
2. For a body of constant mass, the resultant force equals mass times acceleration: $\mathbf F=m\mathbf a$.
3. If one body exerts a force on another, the second exerts an equal and opposite force on the first. These forces act on **different bodies**.

The force in Newton's second law is the **resultant of all external forces on the chosen body**. Add signed components first. Weight and normal reaction act on the same body, so they are not a third-law pair.

$$\sum F_x=ma_x,\qquad \sum F_y=ma_y,\qquad \sum F_z=ma_z.$$

Acceleration has the direction of the resultant force. It need not have the direction of velocity: a body moving upwards can have downward acceleration. Use mass in kilograms, force in newtons and acceleration in $\mathrm{m\,s^{-2}}$.

Choosing a **system** means deciding what is inside your boundary. A hand's pull belongs on the trolley's diagram; the trolley's equal opposite pull on the hand belongs on the hand's diagram. They cannot cancel on a diagram of the trolley alone. If several bodies are inside the boundary, their mutual forces are internal; only forces from outside go into the whole system's resultant. The bodies may still need separate equations to find an internal tension.

<div class="lesson-check" markdown="1">

### A trolley record {#body-check}

**Self-written. Question:** A $2\,\mathrm{kg}$ trolley moves left at $3\,\mathrm{m\,s^{-1}}$ on a smooth horizontal floor. A hand pulls it right with force $8\,\mathrm N$. Draw the forces on the trolley and state its acceleration and whether it initially speeds up. Identify the third-law partner of the hand's pull. A student adds the trolley's pull on the hand to the trolley diagram and obtains zero resultant. Explain the error.

<details markdown="1">
<summary>Hint</summary>

Name the body receiving each force. A sign for acceleration describes a change in velocity, not the velocity itself.

</details>

<details markdown="1">
<summary>Solution and check</summary>

On the trolley: weight $19.6\,\mathrm N$ down, reaction $19.6\,\mathrm N$ up and hand force $8\,\mathrm N$ right. Right positive gives $a=8/2=4\,\mathrm{m\,s^{-2}}$. Its leftward speed initially decreases. The third-law partner is the trolley's $8\,\mathrm N$ pull left on the hand; it acts on a different body.

Check that the trolley's vertical forces balance and that its horizontal velocity changes towards the right. For a system error, return to [the system boundary](#newtons-laws-and-the-resultant-force); then close this answer and try [Q3](#q3-moving-forwards-while-slowing-down), where motion data determine an unknown force.

</details>

</div>

## Linear Motion with Constant Acceleration {#linear-motion-with-constant-acceleration}

Choose an axis along the straight line of motion and a perpendicular axis. For motion along a fixed plane, acceleration perpendicular to the plane is zero while contact is maintained. Resolve in that direction to find the normal reaction $R$; do not assume $R=mg$.

Along the line of motion, use the resultant force to find the signed acceleration. If it is constant, use:

$$v=u+at,\qquad s=ut+\frac12at^2,\qquad v^2=u^2+2as.$$

Here $s$ is displacement along the chosen axis. These equations apply only while the acceleration stays constant. If the body stops or a string becomes slack, check the forces again before continuing.

Constant mass does not by itself make acceleration constant: **the resultant vector must remain constant too**. A fixed pull, a fixed slope and unchanged sliding direction can give one such interval. A speed-dependent resistance generally cannot. At one instant Newton's law still gives the instantaneous acceleration, but that value cannot describe the entire journey.

On a slope, gravity still acts vertically down. Its down-slope component is $mg\sin\alpha$ and its component into the plane is $mg\cos\alpha$; revisit the [component triangle](/alevel/a2-mathematics/mechanics/forces-equilibrium-and-friction/#slope-components) if needed. A plane can push but cannot pull: a calculated $R<0$ invalidates the assumed contact. Sliding friction opposes **relative sliding**, not necessarily acceleration. At a stop, first calculate the static friction needed for rest and compare it with its limit. We use the same coefficient for sliding and the maximum static friction where a stopping question specifies one coefficient for both.

<div class="worked-example" markdown="1">

### Example 1: an angled pull on a rough horizontal plane {#example-1-an-angled-pull-on-a-rough-horizontal-plane}

**Question:** a $20\,\mathrm{kg}$ block is sliding to the right on a rough horizontal plane. A rope pulls at $30^\circ$ above the horizontal. The coefficient of friction is $0.2$ and the friction magnitude during sliding is modelled as $0.2R$. Find the constant tension needed for acceleration $0.5\,\mathrm{m\,s^{-2}}$ to the right.

![A block sliding right, with weight down, reaction up, sliding friction left and tension at thirty degrees above horizontal](/assets/img/a2-math-mech/sliding-angled-pull.svg)

There is no vertical acceleration:

$$R+T\sin30^\circ-20g=0,\qquad R=196-\frac T2.$$

Sliding friction acts left. Along the plane:

$$T\cos30^\circ-0.2R=20(0.5).$$

$$T\left(\frac{\sqrt3}{2}+0.1\right)=49.2.$$

$$\boxed{T\approx50.9\,\mathrm N},\qquad \boxed{R\approx171\,\mathrm N}.$$

**Check:** the tension's upward component reduces $R$. Using unrounded values, the horizontal resultant is $10\,\mathrm N$ and the vertical resultant is zero. The positive reaction confirms contact.

**Common mistake:** using $R=20g$. This ignores the rope's vertical component and gives too much friction.

</div>

<div class="worked-example" markdown="1">

### Example 2: motion down a smooth inclined plane {#example-2-motion-down-a-smooth-inclined-plane}

**Question:** a $4\,\mathrm{kg}$ block starts from rest on a smooth plane inclined at $30^\circ$ to the horizontal. Find its acceleration, normal reaction and distance travelled in the first $3\,\mathrm s$. The plane is long enough for this motion.

Choose down the plane as positive. The only forces are weight and normal reaction. Weight has component $4g\sin30^\circ$ down the plane and $4g\cos30^\circ$ into it.

$$4g\sin30^\circ=4a,\qquad \boxed{a=4.9\,\mathrm{m\,s^{-2}}}.$$

$$\boxed{R=4g\cos30^\circ=19.6\sqrt3\,\mathrm N\approx33.9\,\mathrm N}.$$

$$s=\frac12(4.9)(3^2)=22.05\,\mathrm m\approx\boxed{22.1\,\mathrm m}.$$

**Check:** $v=14.7\,\mathrm{m\,s^{-1}}$. The average speed is $7.35\,\mathrm{m\,s^{-1}}$, giving the same distance in $3\,\mathrm s$. Mass cancels in the acceleration calculation, but not in $R$.

</div>

<div class="worked-example" markdown="1">

### Example 3: sliding up a rough inclined plane {#example-3-sliding-up-a-rough-inclined-plane}

**Question:** a $5\,\mathrm{kg}$ block moves up a plane inclined at $30^\circ$ with initial speed $6\,\mathrm{m\,s^{-1}}$. No driving force acts. The coefficient of friction is $0.2$, with friction magnitude $0.2R$ during sliding. Use the same coefficient for maximum static friction. Find the time and distance to its first stop. Decide whether it can remain at rest.

![Two stages on an inclined plane: friction down the plane during upward sliding and friction up the plane during downward sliding](/assets/img/a2-math-mech/sliding-incline-stages.svg)

Choose up the plane as positive. The reaction is $R=5g\cos30^\circ$. Both gravity's component and sliding friction act down the plane:

$$-5g\sin30^\circ-0.2(5g\cos30^\circ)=5a.$$

$$a=-g\left(\frac12+\frac{\sqrt3}{10}\right)\approx-6.60\,\mathrm{m\,s^{-2}}.$$

Use this unrounded acceleration until the first stop:

$$t=\frac{-6}{a}\approx\boxed{0.909\,\mathrm s},\qquad
s=\frac{-36}{2a}\approx\boxed{2.73\,\mathrm m}.$$

At rest, friction would need to act up the plane with magnitude $5g\sin30^\circ=24.5\,\mathrm N$. Its maximum is $0.2R\approx8.49\,\mathrm N$, so it cannot hold the block. The block starts sliding down; friction then reverses. Its acceleration down the plane becomes:

$$g\left(\frac12-\frac{\sqrt3}{10}\right)\approx\boxed{3.20\,\mathrm{m\,s^{-2}}}.$$

**Check:** during the upward motion, speed falls by $6\,\mathrm{m\,s^{-1}}$ in about $0.909\,\mathrm s$. After the stop, do not continue with the old acceleration: friction acts in the opposite direction.

</div>

## Connected Particles {#connected-particles}

For a **taut, light, inextensible string over a fixed smooth pulley**, the tension is the same on both sides and the two particles have equal acceleration magnitudes along the string. Their acceleration vectors may point in different directions.

Each assumption does a job. **Light** means the string's mass is neglected; **smooth** means the pulley supplies no frictional change of tension. An **inextensible** string has fixed length, so with this fixed pulley one straight part lengthens by exactly the amount the other shortens. Their speeds and acceleration magnitudes are linked while it stays taut. This does not say that a vertical acceleration vector equals an inclined one.

Write one force equation for each particle. Choose positive directions that match the same movement of the string. Add the scalar equations to eliminate tension, then substitute back. Check that $T\geq0$ and that any normal reaction is non-negative. The equations stop applying if the string becomes slack or a particle reaches the pulley or ground.

Adding these **scalar equations in their stated local directions** is an algebraic way to remove $T$. It is not adding a vertical force to an up-slope force as though they were parallel vectors. The pulley is another body: draw the forces **on the pulley** separately if its load is required.

<div class="worked-example" markdown="1">

### Example 4: a rough plane and a hanging particle {#example-4-a-rough-plane-and-a-hanging-particle}

**Question:** a $4\,\mathrm{kg}$ particle $A$ on a rough $30^\circ$ inclined plane is connected to a hanging $3\,\mathrm{kg}$ particle $B$ by a light inextensible string over a fixed smooth pulley. The string is taut and $B$ is already moving downwards. Sliding friction on $A$ has magnitude $0.25R$. Find the acceleration, tension and resultant force exerted on the pulley by the string. Treat each side of the string as straight, with the inclined side parallel to the plane.

![Particle A on a thirty-degree slope connected over a pulley to hanging particle B, with separate force arrows for each particle and the two tension forces on the pulley](/assets/img/a2-math-mech/incline-connected-particles.svg)

For $A$, choose up the plane as positive. There is no perpendicular acceleration:

$$R=4g\cos30^\circ=19.6\sqrt3\,\mathrm N.$$

$$T-4g\sin30^\circ-0.25R=4a.$$

For $B$, choose vertically down as positive:

$$3g-T=3a.$$

Adding gives:

$$a=\frac{29.4-19.6-4.9\sqrt3}{7}
=\frac{9.8-4.9\sqrt3}{7}\approx\boxed{0.188\,\mathrm{m\,s^{-2}}}.$$

The positive result means $B$ speeds up downwards. From $B$'s equation:

$$T=3g-3a\approx\boxed{28.8\,\mathrm N}.$$

On the pulley, one tension pulls down the plane and the other vertically down. Their angle is $60^\circ$. In horizontal-right and vertical-up coordinates, the resultant is:

$$\mathbf P=-T\cos30^\circ\mathbf i-T(1+\sin30^\circ)\mathbf j.$$

$$\lvert\mathbf P\rvert=T\sqrt3\approx\boxed{49.9\,\mathrm N}.$$

It acts $30^\circ$ to the left of vertically downwards. This is the string's force on the pulley; a support must also balance the pulley's own weight if it is not negligible.

**Check:** both particle equations give the same acceleration. The pulley force is less than $2T$, because its two tension forces are not parallel.

</div>

## Motion in Two or Three Dimensions {#motion-in-two-or-three-dimensions}

Use fixed perpendicular unit vectors $\mathbf i$, $\mathbf j$ and, in space, $\mathbf k$. Add all force vectors and divide by mass. In a horizontal plane, weight and vertical support may balance; the listed horizontal forces then give the horizontal resultant.

For constant acceleration:

$$\mathbf v=\mathbf u+t\mathbf a,\qquad
\mathbf r=\mathbf r_0+t\mathbf u+\frac12t^2\mathbf a.$$

Speed is $\lvert\mathbf v\rvert$, not a velocity component. Distance from the origin is $\lvert\mathbf r\rvert$; displacement from the starting point is $\mathbf r-\mathbf r_0$.

<div class="worked-example" markdown="1">

### Example 5: a constant resultant and the path {#example-5-a-constant-resultant-and-the-path}

**Question:** a particle of mass $2\,\mathrm{kg}$ moves in a horizontal plane. Two horizontal forces are $(4\mathbf i+2\mathbf j)\,\mathrm N$ and $(-4\mathbf i+4\mathbf j)\,\mathrm N$. The vertical forces balance. At $t=0$ it is at the origin with velocity $2\mathbf i\,\mathrm{m\,s^{-1}}$. Find its acceleration, velocity, position and Cartesian path for $t\geq0$.

The horizontal resultant is $6\mathbf j\,\mathrm N$, so:

$$\boxed{\mathbf a=3\mathbf j\,\mathrm{m\,s^{-2}}}.$$

$$\boxed{\mathbf v=2\mathbf i+3t\mathbf j},\qquad
\boxed{\mathbf r=2t\mathbf i+\frac32t^2\mathbf j}.$$

Velocity is in $\mathrm{m\,s^{-1}}$ and position is in metres. Since $x=2t$ and $y=\frac32t^2$, eliminate $t$:

$$\boxed{y=\frac38x^2,\quad x\geq0}.$$

**Check:** differentiating $\mathbf r$ twice gives $3\mathbf j$, and multiplying by mass recovers the resultant $6\mathbf j$. At $t=0$, the position and velocity satisfy both given conditions. The restriction $x\geq0$ keeps only the part travelled after the initial time.

</div>

## Motion with Variable Acceleration {#motion-with-variable-acceleration}

When the resultant force is a function of time, divide by mass, then integrate **each component**:

$$\mathbf a=\frac{\mathbf F(t)}m,\qquad
\mathbf v=\int\mathbf a\,dt+\mathbf C,\qquad
\mathbf r=\int\mathbf v\,dt+\mathbf D.$$

The integrals here mean chosen antiderivatives before the constants are added. $\mathbf C$ and $\mathbf D$ are independent constant vectors. For a scalar component, write its integration constant as $+C$ and use a new constant for the next integration. Use the given velocity to find the first constants and the given position to find the second. These conditions may be given at any time, not just $t=0$.

Integration adds the small changes in velocity accumulated over time. For example, if $a_x=2t$, then $v_x=t^2+C$, not $2t^2$: differentiating $t^2$ returns $2t$. A value of $a_x$ at the end of an interval cannot replace all the earlier values. After the second integration, check both the derivatives and the original position/velocity conditions; neither check replaces the other.

Do not use constant-acceleration equations when $\mathbf a$ varies. For a resultant expressed in terms of displacement or velocity, a different differential equation may be needed; the examples here follow the textbook's force-as-a-function-of-time model.

<div class="worked-example" markdown="1">

### Example 6: a time-dependent force {#example-6-a-time-dependent-force}

**Question:** a $2\,\mathrm{kg}$ particle moves in a horizontal plane under resultant horizontal force $(4\mathbf i+12t\mathbf j)\,\mathrm N$. Vertical forces balance. It is initially at rest at position $(1,2)$ metres. Find its velocity, position and Cartesian path for $t\geq0$.

$$\mathbf a=2\mathbf i+6t\mathbf j.$$

Integrate and use $\mathbf v(0)=\mathbf0$:

$$\mathbf v=2t\mathbf i+3t^2\mathbf j+\mathbf C,\qquad \mathbf C=\mathbf0.$$

Integrate again and use $\mathbf r(0)=\mathbf i+2\mathbf j$:

$$\boxed{\mathbf r=(1+t^2)\mathbf i+(2+t^3)\mathbf j}.$$

For $t\geq0$, $t=\sqrt{x-1}$. Thus:

$$\boxed{y=2+(x-1)^{3/2},\quad x\geq1}.$$

**Check:** $\mathbf r'(t)=2t\mathbf i+3t^2\mathbf j$ and $2\mathbf r''(t)=4\mathbf i+12t\mathbf j$. At $t=0$, both conditions hold. Choosing the positive square root is justified by $t\geq0$.

</div>

<div class="worked-example" markdown="1">

### Example 7: conditions at a later time {#example-7-conditions-at-a-later-time}

**Question:** a $3\,\mathrm{kg}$ particle moves in a horizontal plane under resultant horizontal force $(6t\mathbf i-6\mathbf j)\,\mathrm N$, with balanced vertical forces. At $t=1\,\mathrm s$, its velocity is $(2\mathbf i+\mathbf j)\,\mathrm{m\,s^{-1}}$ and its position is $(4\mathbf i+2\mathbf j)\,\mathrm m$. Find its velocity and position at $t=2\,\mathrm s$.

$$\mathbf a=2t\mathbf i-2\mathbf j.$$

$$\mathbf v=(t^2+C_1)\mathbf i+(-2t+C_2)\mathbf j.$$

At $t=1$, $1+C_1=2$ and $-2+C_2=1$. Hence:

$$\mathbf v=(t^2+1)\mathbf i+(3-2t)\mathbf j.$$

$$\mathbf r=\left(\frac{t^3}{3}+t+D_1\right)\mathbf i
+(-t^2+3t+D_2)\mathbf j.$$

Using the position at $t=1$ gives $D_1=8/3$ and $D_2=0$. At $t=2$:

$$\boxed{\mathbf v=5\mathbf i-\mathbf j\,\mathrm{m\,s^{-1}}}.$$

$$\boxed{\mathbf r=\frac{22}{3}\mathbf i+2\mathbf j\,\mathrm m}.$$

**Check:** substituting $t=1$ recovers both given vectors. The speed at $t=2$ is $\sqrt{26}\,\mathrm{m\,s^{-1}}$; the negative $y$-component means motion in the negative $y$-direction in the chosen horizontal plane, not a negative speed.

</div>

<div class="worked-example" markdown="1">

### Further example — A record with different kinds of change {#example-9-a-mixed-force-record}

**Self-written. Question:** A particle of mass $3\,\mathrm{kg}$ starts from rest at the origin. Its resultant force is $(6t\mathbf i+6\cos(2t)\mathbf j+3e^{-t}\mathbf k)\,\mathrm N$. Find its position at time $t\geq0$. Time is in seconds and angles are in radians.

Divide the **whole resultant** by mass:

$$\mathbf a=2t\mathbf i+2\cos(2t)\mathbf j+e^{-t}\mathbf k.$$

The chain rule tells us which antiderivatives to choose: the derivative of $\sin(2t)$ is $2\cos(2t)$, and the derivative of $-e^{-t}$ is $e^{-t}$. Therefore

$$\mathbf v=(t^2+C_1)\mathbf i+(\sin(2t)+C_2)\mathbf j+(-e^{-t}+C_3)\mathbf k.$$

At $t=0$, rest gives $C_1=0$, $C_2=0$ and $-1+C_3=0$. The last constant is **1**, not zero. Integrate this velocity:

$$\mathbf r=\left(\frac{t^3}{3}+D_1\right)\mathbf i+
\left(-\frac12\cos(2t)+D_2\right)\mathbf j+(t+e^{-t}+D_3)\mathbf k.$$

The origin condition gives $D_1=0$, $D_2=1/2$ and $D_3=-1$. Hence

$$\boxed{\mathbf r=\frac{t^3}{3}\mathbf i+\frac{1-\cos(2t)}{2}\mathbf j+(t+e^{-t}-1)\mathbf k}.$$

**Check:** $\mathbf r(0)=\mathbf0$, $\mathbf r'(0)=\mathbf0$ and $3\mathbf r''=\mathbf F$. A zero initial position or velocity specifies the value of the whole expression, not necessarily a zero integration constant. Try [Q6–Q7](#q6-integrate-a-variable-force), then the [space record](#retry-use-a-force-record-in-space) with its help closed.

</div>

## Finding Force from Position {#finding-force-from-position}

If position is given, differentiate twice to find acceleration and multiply by mass:

$$\mathbf F=m\frac{d^2\mathbf r}{dt^2}.$$

This gives the **resultant force**. It equals one particular force only if that force is the only force acting, or if the other forces have zero resultant.

<div class="worked-example" markdown="1">

### Example 8: force in three dimensions {#example-8-force-in-three-dimensions}

**Question:** a $2\,\mathrm{kg}$ particle has position vector, in metres,

$$\mathbf r=t^2\mathbf i+\sin t\mathbf j+e^{-t}\mathbf k.$$

Find the resultant force at time $t$ and its magnitude at $t=0$. Time is in seconds and the trigonometric argument is in radians.

$$\mathbf v=2t\mathbf i+\cos t\mathbf j-e^{-t}\mathbf k.$$

$$\mathbf a=2\mathbf i-\sin t\mathbf j+e^{-t}\mathbf k.$$

$$\boxed{\mathbf F=4\mathbf i-2\sin t\mathbf j+2e^{-t}\mathbf k\,\mathrm N}.$$

At $t=0$, $\mathbf F=4\mathbf i+2\mathbf k\,\mathrm N$, so:

$$\boxed{\lvert\mathbf F(0)\rvert=\sqrt{20}\,\mathrm N\approx4.47\,\mathrm N}.$$

**Check:** the $\mathbf k$-component of velocity is negative but its acceleration is positive. Differentiating $-e^{-t}$ gives $+e^{-t}$.

</div>

## Practice {#practice}

These questions are self-written. Use $g=9.8\,\mathrm{m\,s^{-2}}$. For horizontal-plane questions, take $\mathbf i$ and $\mathbf j$ in that plane and assume vertical weight and support forces balance.

<div class="lesson-check" markdown="1">

### Q1 — A pull {#q1-a-smooth-horizontal-plane}

**Question:** A $4\,\mathrm{kg}$ block is pulled along a smooth horizontal plane by tension $20\,\mathrm N$ at $30^\circ$ above horizontal. Find its horizontal acceleration and normal reaction.

<details markdown="1">
<summary>Hint</summary>

Resolve vertically first, with zero vertical acceleration. Only the horizontal tension component accelerates the block.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$R+20\sin30^\circ=4g,\qquad \boxed{R=29.2\,\mathrm N}.$$

$$4a=20\cos30^\circ,\qquad
\boxed{a=\frac{5\sqrt3}{2}\,\mathrm{m\,s^{-2}}\approx4.33\,\mathrm{m\,s^{-2}}}.$$

**Check:** the reaction is positive and less than the weight. The vertical resultant is $29.2+10-39.2=0$.

If your model, signs or check failed, return to [the explanation](#linear-motion-with-constant-acceleration), close the answer, then try [a new task](#stages-retry).

</details>

</div>

<div class="lesson-check" markdown="1">

### Q2 — A descent {#q2-sliding-down-a-rough-plane}

**Question:** A $6\,\mathrm{kg}$ block slides down a $30^\circ$ inclined plane. Sliding friction has magnitude $\mu R$, where $\mu=1/(2\sqrt3)$. Find its acceleration and distance travelled in $2\,\mathrm s$ if its initial downward speed is $1\,\mathrm{m\,s^{-1}}$. It stays on the plane throughout.

<details markdown="1">
<summary>Hint</summary>

Friction acts up the plane. Use $R=6g\cos30^\circ$ and choose down the plane as positive.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$R=3g\sqrt3,\qquad \mu R=\frac32g.$$

$$6a=3g-\frac32g,\qquad \boxed{a=2.45\,\mathrm{m\,s^{-2}}}.$$

$$s=1(2)+\frac12(2.45)(2^2)=\boxed{6.90\,\mathrm m}.$$

**Check:** the final speed is $5.90\,\mathrm{m\,s^{-1}}$. Average speed times time gives $(1+5.9)\times2/2=6.9\,\mathrm m$.

If your model, signs or check failed, return to [the explanation](#linear-motion-with-constant-acceleration), close the answer, then try [a new task](#stages-retry).

</details>

</div>

<div class="lesson-check" markdown="1">

### Q3 — A vehicle {#q3-moving-forwards-while-slowing-down}

**Question:** An $800\,\mathrm{kg}$ vehicle moves along a horizontal road. Its speed falls from $12$ to $8\,\mathrm{m\,s^{-1}}$ in $10\,\mathrm s$ with constant acceleration. A constant resistance of $600\,\mathrm N$ acts backwards. Find the constant forward driving force.

<details markdown="1">
<summary>Hint</summary>

Choose forwards as positive. Find the signed acceleration before using Newton's second law.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$a=\frac{8-12}{10}=-0.4\,\mathrm{m\,s^{-2}}.$$

$$D-600=800(-0.4),\qquad \boxed{D=280\,\mathrm N}.$$

**Check:** the backward resultant is $320\,\mathrm N$. A forward driving force can act while the vehicle slows down, because resistance is greater.

If your model, signs or check failed, return to [the explanation](#newtons-laws-and-the-resultant-force), close the answer, then try [a new task](#later-dynamics-check).

</details>

</div>

<div class="lesson-check" markdown="1">

### Q4 — Two masses {#q4-a-smooth-plane-and-a-pulley}

**Question:** A $4\,\mathrm{kg}$ particle on a smooth $30^\circ$ plane is joined to a hanging $3\,\mathrm{kg}$ particle by a taut light inextensible string over a fixed smooth pulley. The particles are released from rest. Find their acceleration, tension and magnitude of the string's force on the pulley. The inclined side of the string is parallel to the plane.

<details markdown="1">
<summary>Hint</summary>

Choose the hanging particle's downward direction and the other particle's up-plane direction as positive. The two tensions on the pulley have angle $60^\circ$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$T-4g\sin30^\circ=4a,\qquad 3g-T=3a.$$

$$\boxed{a=1.4\,\mathrm{m\,s^{-2}}},\qquad \boxed{T=25.2\,\mathrm N}.$$

The hanging particle accelerates downwards. The pulley-force magnitude is:

$$\boxed{T\sqrt3=25.2\sqrt3\,\mathrm N\approx43.6\,\mathrm N}.$$

**Check:** $25.2-19.6=4(1.4)$ and $29.4-25.2=3(1.4)$. The inclined particle has reaction $4g\cos30^\circ>0$ and the tension is positive.

If your model, signs or check failed, return to [the explanation](#connected-particles), close the answer, then try [a new task](#connection-retry).

</details>

</div>

<div class="lesson-check" markdown="1">

### Q5 — Two forces {#q5-add-forces-before-finding-acceleration}

**Question:** A $3\,\mathrm{kg}$ particle in a horizontal plane experiences horizontal forces $(8\mathbf i-4\mathbf j)\,\mathrm N$ and $(-2\mathbf i+10\mathbf j)\,\mathrm N$. Initially it is at the origin with velocity $(\mathbf i-\mathbf j)\,\mathrm{m\,s^{-1}}$. Find its velocity, speed and position after $2\,\mathrm s$.

<details markdown="1">
<summary>Hint</summary>

The resultant is $6\mathbf i+6\mathbf j$. Divide by mass, then use constant-acceleration vector equations.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\mathbf a=2\mathbf i+2\mathbf j.$$

$$\mathbf v=(1+2t)\mathbf i+(-1+2t)\mathbf j.$$

$$\mathbf r=(t+t^2)\mathbf i+(-t+t^2)\mathbf j.$$

At $t=2$:

$$\boxed{\mathbf v=5\mathbf i+3\mathbf j\,\mathrm{m\,s^{-1}}}.$$

$$\boxed{\text{speed}=\sqrt{34}\,\mathrm{m\,s^{-1}}\approx5.83\,\mathrm{m\,s^{-1}}}.$$

$$\boxed{\mathbf r=6\mathbf i+2\mathbf j\,\mathrm m}.$$

**Check:** differentiating position gives velocity, and multiplying acceleration by $3$ recovers the sum of both force vectors.

If your model, signs or check failed, return to [the explanation](#motion-in-two-or-three-dimensions), close the answer, then try [a new task](#vector-retry).

</details>

</div>

<div class="lesson-check" markdown="1">

### Q6 — A force record {#q6-integrate-a-variable-force}

**Question:** A $3\,\mathrm{kg}$ particle in a horizontal plane has resultant horizontal force $(6\mathbf i+12t\mathbf j)\,\mathrm N$. Initially it is at the origin with velocity $2\mathbf i\,\mathrm{m\,s^{-1}}$. Find its velocity and position at time $t$, then its position at $t=3\,\mathrm s$.

<details markdown="1">
<summary>Hint</summary>

Acceleration is $2\mathbf i+4t\mathbf j$. Use the velocity condition after the first integration and the position condition after the second.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\boxed{\mathbf v=(2+2t)\mathbf i+2t^2\mathbf j}.$$

$$\boxed{\mathbf r=(2t+t^2)\mathbf i+\frac23t^3\mathbf j}.$$

$$\boxed{\mathbf r(3)=15\mathbf i+18\mathbf j\,\mathrm m}.$$

**Check:** $3\mathbf r''=6\mathbf i+12t\mathbf j$, $\mathbf r(0)=\mathbf0$ and $\mathbf v(0)=2\mathbf i$. Acceleration varies, so the constant-acceleration formula cannot be used with its final value.

If your model, signs or check failed, return to [the explanation](#motion-with-variable-acceleration), close the answer, then try [a new task](#retry-use-a-force-record-in-space).

</details>

</div>

<div class="lesson-check" markdown="1">

### Q7 — Measurements at one second {#q7-conditions-at-one-second}

**Question:** A $2\,\mathrm{kg}$ particle in a horizontal plane has resultant horizontal force $(4t\mathbf i+4\mathbf j)\,\mathrm N$. At $t=1\,\mathrm s$, its velocity is $4\mathbf j\,\mathrm{m\,s^{-1}}$ and its position is $(2\mathbf i+3\mathbf j)\,\mathrm m$. Find its velocity and position at $t=2\,\mathrm s$.

<details markdown="1">
<summary>Hint</summary>

Integrate $2t\mathbf i+2\mathbf j$. The $\mathbf i$-component of velocity at $t=1$ is zero, not the integration constant.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\mathbf v=(t^2-1)\mathbf i+(2t+2)\mathbf j.$$

$$\mathbf r=\left(\frac{t^3}{3}-t+\frac83\right)\mathbf i
+(t^2+2t)\mathbf j.$$

At $t=2$:

$$\boxed{\mathbf v=3\mathbf i+6\mathbf j\,\mathrm{m\,s^{-1}}}.$$

$$\boxed{\mathbf r=\frac{10}{3}\mathbf i+8\mathbf j\,\mathrm m}.$$

**Check:** at $t=1$, position is $(2,3)$ and velocity is $(0,4)$. Differentiating velocity and multiplying by $2$ gives the stated force.

If your model, signs or check failed, return to [the explanation](#motion-with-variable-acceleration), close the answer, then try [a new task](#retry-use-a-force-record-in-space).

</details>

</div>

<div class="lesson-check" markdown="1">

### Q8 — A position record {#q8-a-resultant-force-in-space}

**Question:** A $3\,\mathrm{kg}$ particle has position vector, in metres,

$$\mathbf r=t^3\mathbf i+\cos t\mathbf j+2e^t\mathbf k.$$

Find the resultant force at time $t$ and its magnitude at $t=0$. Time is in seconds and trigonometric arguments are in radians.

<details markdown="1">
<summary>Hint</summary>

Differentiate each component twice, multiply by mass, then use the square root of the sum of squared force components.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\mathbf a=6t\mathbf i-\cos t\mathbf j+2e^t\mathbf k.$$

$$\boxed{\mathbf F=18t\mathbf i-3\cos t\mathbf j+6e^t\mathbf k\,\mathrm N}.$$

$$\mathbf F(0)=-3\mathbf j+6\mathbf k\,\mathrm N.$$

$$\boxed{\lvert\mathbf F(0)\rvert=3\sqrt5\,\mathrm N\approx6.71\,\mathrm N}.$$

**Check:** velocity is $3t^2\mathbf i-\sin t\mathbf j+2e^t\mathbf k$. Differentiating it gives the stated acceleration; force magnitude is positive even though one component is negative.

If your model, signs or check failed, return to [the explanation](#finding-force-from-position), close the answer, then try [a new task](#record-retry).

</details>

</div>

## Independent check {#independent-task-motion-direction-or-force-direction}

<div class="lesson-check" markdown="1">

**Self-written task.**

**Question:** A $2\,\mathrm{kg}$ block is moving up a long rough plane inclined at $30^\circ$ with speed $3\,\mathrm{m\,s^{-1}}$. A constant applied force of $6\,\mathrm N$ acts up the plane, parallel to it. The coefficient of friction is $1/(2\sqrt3)$; use this coefficient for both sliding friction and the maximum static friction. A student says: “The force is up the slope and the block is going up, so it must speed up.” Assess the claim. Find its signed acceleration, the time and distance to its first stop, and whether it can then remain at rest. Assume it stays on the plane. Choose your method without assuming the acceleration direction.

<details markdown="1">
<summary>Reasoning hint</summary>

Draw all forces and choose a positive direction. During upward sliding, which way does friction act? At zero speed, replace sliding friction by the static friction needed for equilibrium and check its limit.

</details>

<details markdown="1">
<summary>Feedback and check</summary>

Take up the plane as positive. The perpendicular equation gives the positive reaction

$$R=2g\cos30^\circ=9.8\sqrt3\,\mathrm N,\qquad \mu R=4.9\,\mathrm N.$$

During upward sliding, both friction and the weight component act down the plane. The $6\,\mathrm N$ is an applied force, not the resultant:

$$6-2g\sin30^\circ-4.9=2a,\qquad \boxed{a=-4.35\,\mathrm{m\,s^{-2}}}.$$

The acceleration is constant until the first stop, so

$$0=3-4.35t,\qquad \boxed{t=\frac{20}{29}\,\mathrm s\approx0.690\,\mathrm s},$$

$$0=3^2+2(-4.35)s,\qquad \boxed{s=\frac{30}{29}\,\mathrm m\approx1.03\,\mathrm m}.$$

At rest, the friction needed to balance the other forces is $9.8-6=3.8\,\mathrm N$ **up** the plane. Since $3.8<4.9$, the block can remain at rest. Friction changes from $4.9\,\mathrm N$ down the plane while sliding to $3.8\,\mathrm N$ up the plane in equilibrium; it is not automatically limiting at rest.

**Check:** the mean speed before stopping is $1.5\,\mathrm{m\,s^{-1}}$, so multiplying by $20/29$ gives $30/29\,\mathrm m$. At rest, $6+3.8-9.8=0$. If you used $a=3$, you treated the applied force as the resultant; if you continued with $a=-4.35$ after stopping, you retained an obsolete friction model.

**English explanation to complete:** “Although the velocity is …, the resultant is …; after stopping …”.

Repair the [stage model](#linear-motion-with-constant-acceleration), then close this answer and do the [new slope task](#stages-retry). The space record below checks variable forces; it is not the retry for this stopping problem.

</details>

</div>

<div class="lesson-check" markdown="1">

### Another motion record {#retry-use-a-force-record-in-space}

**Self-written task.**

**Question:** A particle of mass $2\,\mathrm{kg}$ experiences resultant force

$$\mathbf F=(4t\mathbf i-4\mathbf j+12t\mathbf k)\,\mathrm N,\qquad 0\leq t\leq3.$$

Time $t$ is in seconds and $\mathbf i$, $\mathbf j$, $\mathbf k$ are fixed perpendicular unit vectors. At $t=1$, its velocity is $(\mathbf j+2\mathbf k)\,\mathrm{m\,s^{-1}}$ and its position is $(2\mathbf i+3\mathbf j+\mathbf k)\,\mathrm m$. Find its velocity and position at $t=2$ and its distance from its position at $t=1$. Explain why neither a constant-acceleration formula using the final force nor the magnitude of the final position vector answers the whole question.

<details markdown="1">
<summary>Retry hint</summary>

The force already includes all external forces. Divide by mass and integrate each component twice. Apply both conditions at one second, then form a displacement vector between the two positions.

</details>

<details markdown="1">
<summary>Retry check</summary>

The acceleration is $2t\mathbf i-2\mathbf j+6t\mathbf k$. Integrating and using the velocity at $t=1$ gives

$$\mathbf v=(t^2-1)\mathbf i+(3-2t)\mathbf j+(3t^2-1)\mathbf k.$$

Integrating again and using the position at $t=1$ gives

$$\mathbf r=\left(\frac{t^3}{3}-t+\frac83\right)\mathbf i+(3t-t^2+1)\mathbf j+(t^3-t+1)\mathbf k.$$

Thus

$$\boxed{\mathbf v(2)=3\mathbf i-\mathbf j+11\mathbf k\,\mathrm{m\,s^{-1}}},\qquad \boxed{\mathbf r(2)=\frac{10}{3}\mathbf i+3\mathbf j+7\mathbf k\,\mathrm m}.$$

The displacement from the one-second position is

$$\mathbf r(2)-\mathbf r(1)=\frac43\mathbf i+6\mathbf k,\qquad \boxed{\text{distance}=\frac{2\sqrt{85}}{3}\,\mathrm m\approx6.15\,\mathrm m}.$$

Differentiate twice and multiply by $2$ to recover the given force; at $t=1$, both given conditions hold. Acceleration varies with time, and $\lvert\mathbf r(2)\rvert$ measures distance from the origin, not from the one-second position. The distance between the two positions is also distinct from total distance travelled along the curved path. If you omitted constants because “initially at rest”, reread the conditions: no such initial condition was given.

If constants or displacement were confused, repair [integration with conditions](#motion-with-variable-acceleration) and [position versus displacement](#motion-in-two-or-three-dimensions), then close this answer and retry [Q7](#q7-conditions-at-one-second).

</details>

</div>

## Try Again, Then Return Later {#recovery-and-return}

Choose the task linked by your feedback. All are **Self-written**. Close the previous solution before starting; a correct calculation needs the model and condition checks too.

<div class="lesson-check" markdown="1">

### A different slope record {#stages-retry}

**Question:** A $2\,\mathrm{kg}$ block initially slides **down** a long $30^\circ$ rough plane at $2\,\mathrm{m\,s^{-1}}$. A constant force $12\,\mathrm N$ pulls up the plane, parallel to it. Use $\mu=1/(2\sqrt3)$ for sliding friction and maximum static friction. Find the time and distance to its first stop and decide what happens next. Assume contact is maintained.

<details markdown="1">
<summary>Hint</summary>

During the initial sliding, friction points up the plane. At rest, ask what friction the other forces require, rather than retaining the sliding value.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Up-slope positive gives $u=-2$, $R=9.8\sqrt3\,\mathrm N$ and $\mu R=4.9\,\mathrm N$:

$$12+4.9-9.8=2a,\qquad a=3.55\,\mathrm{m\,s^{-2}}.$$

$$0=-2+3.55t,\qquad t=\frac{40}{71}\,\mathrm s\approx0.563\,\mathrm s.$$

$$0=(-2)^2+2(3.55)s,\qquad s=-\frac{40}{71}\,\mathrm m.$$

The distance is $0.563\,\mathrm m$ **down** the plane. At rest, the other forces have a $12-9.8=2.2\,\mathrm N$ up-slope resultant, so friction must be $2.2\,\mathrm N$ down the plane. It is within the $4.9\,\mathrm N$ limit, so the block can remain at rest. The sliding and static directions differ. Check $12-2.2-9.8=0$. If the sign or stage failed, rebuild [the stage model](#linear-motion-with-constant-acceleration) before doing the [independent check](#independent-task-motion-direction-or-force-direction) again without help.

</details>

</div>

<div class="lesson-check" markdown="1">

### A change during the journey {#connection-retry}

**Question:** A $3\,\mathrm{kg}$ particle $A$ on a smooth horizontal table is connected to a hanging $2\,\mathrm{kg}$ particle $B$ by a taut light inextensible string over a fixed smooth pulley at the table edge. Released from rest, $B$ falls $0.5\,\mathrm m$ before reaching the ground. Find the acceleration and tension before contact and their speed just before contact. $B$ then stays on the ground without rebounding and the string becomes slack. Describe $A$'s subsequent motion while it remains on the table, before it reaches the pulley.

<details markdown="1">
<summary>Hint</summary>

The table particle has no weight component along its motion. After the ground stops $B$, check which horizontal forces remain on $A$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Towards the pulley for $A$ and down for $B$:

$$T=3a,\qquad 2g-T=2a,\qquad a=3.92\,\mathrm{m\,s^{-2}},\qquad T=11.76\,\mathrm N.$$

$$v^2=2(3.92)(0.5)=3.92,\qquad v\approx1.98\,\mathrm{m\,s^{-1}}.$$

After contact the slack string supplies no tension. Weight and reaction on $A$ balance, so $A$ continues towards the pulley at constant speed $1.98\,\mathrm{m\,s^{-1}}$ until another event changes the model. Its acceleration is zero; $B$ no longer shares its motion. Check $R_A=3g>0$ and $T>0$ before contact. If you continued with the common acceleration afterwards, return to [the string assumptions](#connected-particles), then retry [Q4](#q4-a-smooth-plane-and-a-pulley) with new force diagrams.

</details>

</div>

<div class="lesson-check" markdown="1">

### A second spatial record {#vector-retry}

**Question:** A $2\,\mathrm{kg}$ particle has constant resultant force $(4\mathbf j-2\mathbf k)\,\mathrm N$. Initially its position is $(\mathbf i+2\mathbf j-\mathbf k)\,\mathrm m$ and its velocity is $(2\mathbf i+\mathbf k)\,\mathrm{m\,s^{-1}}$. Find its velocity, speed, position and displacement from its starting point after $1\,\mathrm s$. Is zero $\mathbf k$-velocity then evidence of zero $\mathbf k$-acceleration?

<details markdown="1">
<summary>Hint</summary>

Apply the constant-acceleration equations to each component. Subtract the initial position only when finding displacement.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\mathbf a=2\mathbf j-\mathbf k,\qquad \mathbf v=2\mathbf i+2t\mathbf j+(1-t)\mathbf k.$$

$$\mathbf r=(1+2t)\mathbf i+(2+t^2)\mathbf j+\left(-1+t-\frac12t^2\right)\mathbf k.$$

At one second the velocity is $(2\mathbf i+2\mathbf j)\,\mathrm{m\,s^{-1}}$, speed $\sqrt8\approx2.83\,\mathrm{m\,s^{-1}}$, position $(3\mathbf i+3\mathbf j-\tfrac12\mathbf k)\,\mathrm m$ and displacement $(2\mathbf i+\mathbf j+\tfrac12\mathbf k)\,\mathrm m$. The $\mathbf k$-acceleration is still $-1\,\mathrm{m\,s^{-2}}$ even when that velocity component is zero. Check $2\mathbf r''=\mathbf F$ and both starting vectors. Repair [vector quantities](#motion-in-two-or-three-dimensions), then try [Q5](#q5-add-forces-before-finding-acceleration) without help.

</details>

</div>

<div class="lesson-check" markdown="1">

### Another measured quantity {#record-retry}

**Question:** A $2\,\mathrm{kg}$ particle's **velocity**, in $\mathrm{m\,s^{-1}}$, is $\mathbf v=t^2\mathbf i+e^{-t}\mathbf j+2\sin t\mathbf k$ for $0\leq t\leq\pi$. Time is in seconds and angles in radians. Find its resultant force and its force magnitude at $t=0$. Explain how many differentiations are needed and whether this force necessarily equals the particle's weight.

<details markdown="1">
<summary>Hint</summary>

Identify the recorded quantity before differentiating. Newton's law uses acceleration, the rate of change of velocity.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\mathbf a=2t\mathbf i-e^{-t}\mathbf j+2\cos t\mathbf k,\qquad
\mathbf F=4t\mathbf i-2e^{-t}\mathbf j+4\cos t\mathbf k\,\mathrm N.$$

$$\lvert\mathbf F(0)\rvert=\sqrt{(-2)^2+4^2}=\sqrt{20}\,\mathrm N\approx4.47\,\mathrm N.$$

Differentiate velocity once; position would need two differentiations. This is the resultant of all external forces. It is not necessarily weight, since no individual forces have been specified. Check by dividing by mass to recover $\mathbf v'$. Repair [the inverse route](#finding-force-from-position), then retry [Q8](#q8-a-resultant-force-in-space).

</details>

</div>

After the next lesson, [Projectiles](/alevel/a2-mathematics/mechanics/projectiles/), return to the following task without looking at the examples. Then use the unit's [mixed problems](/alevel/a2-mathematics/mechanics/#mixed-problems) and [later review](/alevel/a2-mathematics/mechanics/#later-review). Record whether you needed a hint, rather than counting a revealed answer as independent work.

<div class="lesson-check" markdown="1">

### Return to a motion record {#later-dynamics-check}

**Question:** A $5\,\mathrm{kg}$ load rises vertically on a taut cable. Its upward velocity is $v=3-2t$ in $\mathrm{m\,s^{-1}}$ for $0\leq t\leq1$. The only forces on it are cable tension and weight. Find the tension. Is the load stationary or in equilibrium at $t=1$? Can the given record determine what happens after $t=1$? Explain in English without a sentence starter.

<details markdown="1">
<summary>Hint</summary>

Use the rate of change of the recorded velocity, and separate the value of velocity from its rate of change. Respect the stated interval.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Up positive: $a=-2\,\mathrm{m\,s^{-2}}$ and $T-49=5(-2)$, so $T=39\,\mathrm N$. At one second $v=1\,\mathrm{m\,s^{-1}}$ upwards and the resultant remains $10\,\mathrm N$ downwards. It is neither stationary nor in equilibrium. The record gives no subsequent force or velocity, so its continuation cannot be assumed. Check that tension is positive and below weight. Repair [resultant and acceleration](#newtons-laws-and-the-resultant-force), then close this answer and redo the [slope record](#stages-retry), checking its different stopping condition.

</details>

</div>

## Quick Reference {#quick-reference}

| Given or asked for | Method and condition |
|---|---|
| Forces on a body | Add signed components, then use the resultant in $\mathbf F=m\mathbf a$ |
| Motion along a fixed plane | Resolve normally with zero normal acceleration while contact remains |
| Rough surface | Find $R$ first; friction opposes sliding or the tendency to slide |
| Constant acceleration | Use scalar or vector constant-acceleration equations |
| Connected particles | Write one equation per body; equal tension requires the stated string and pulley model |
| Resultant force as a function of time | Divide by mass, integrate twice, and use both given conditions |
| Position as a function of time | Differentiate twice and multiply by mass |
| Speed or force magnitude | Take the magnitude of the corresponding vector |

Check the answer in the original force equations. For integrated motion, differentiate to recover the force and substitute the given times to recover position and velocity. When eliminating time, keep the part of the path allowed by the time interval.

## Sources and Scope {#sources-and-scope}

Scope: [OxfordAQA Mathematics 9660 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf#page=28), §3.5 M2.4, printed p.29 / PDF p.28 (1-based); the full M2 section is printed pp.27–30 / PDF pp.26–29. Textbook correspondence: Chapter 13, §§13.1–13.2, printed pp.202–207.

Paired assessment references actually read: **9660/MA05 Unit M2, January 2025, Q1(a)** ([QP p.2](/assets/pdf/fx-cg50/references/oxfordaqa-ma05-2025-january-question-paper.pdf#page=2), [MS p.4](/assets/pdf/fx-cg50/references/oxfordaqa-ma05-2025-january-mark-scheme.pdf#page=4)) for driving force versus resultant and instantaneous acceleration; **Q9** ([QP p.18](/assets/pdf/fx-cg50/references/oxfordaqa-ma05-2025-january-question-paper.pdf#page=18), [MS p.17, Version 1.0 Final](/assets/pdf/fx-cg50/references/oxfordaqa-ma05-2025-january-mark-scheme.pdf#page=17)) for a three-dimensional resultant, two integrations with separate conditions, and vector magnitude. Q7's roof-to-flight transition connects to the next lesson; its part (a) specifically requests energy. All tasks here remain **Self-written**, without official marks.

The rounding convention at the start applies to this page's self-written tasks. The January 2025 paper defaults to two significant figures for calculator final answers unless stated otherwise; Q9 specifically asks for three significant figures. Follow the original paper and question when using official work.

**Learning path:** [Previous: Centres of Mass](/alevel/a2-mathematics/mechanics/centres-of-mass/) · [Mechanics topic index](/alevel/a2-mathematics/mechanics/) · [Next: Projectiles](/alevel/a2-mathematics/mechanics/projectiles/).

{% include exam_topic_practice.html %}
