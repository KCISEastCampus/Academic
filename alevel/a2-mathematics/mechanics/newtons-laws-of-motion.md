---
title: Newton's Laws of Motion
layout: subjects
mathjax: true
grade: a2
subject: m2
permalink: /alevel/a2-mathematics/mechanics/newtons-laws-of-motion/
toc_headings: h2
study_page: true
---

[A2 Mechanics](/alevel/a2-mathematics/mechanics/) · M2.4 Newton's laws of motion

Use the resultant force to find acceleration. Solve straight-line motion on horizontal and inclined planes, then find velocity and position when the force is a function of time.

- **Learning:** start with [Newton's laws](#newtons-laws-and-the-resultant-force), then study [straight-line motion](#linear-motion-with-constant-acceleration), [connected particles](#connected-particles) and [variable acceleration](#motion-with-variable-acceleration).
- **Homework help:** name the body, draw its forces, choose positive directions and apply $\mathbf F=m\mathbf a$ to the resultant.
- **Revision:** try [practice](#practice) with the solutions closed. Check force directions, contact and the given velocity and position conditions.

Textbook: Chapter 13, Sections 13.1–13.2 (printed pp. 202–207). This lesson uses the textbook terms *resultant force*, *normal reaction*, *linear motion*, *constant acceleration*, *variable acceleration* and *position vector*.

**Before you start:** review [Forces, Equilibrium and Friction](/alevel/a2-mathematics/mechanics/forces-equilibrium-and-friction/), [Mathematical Modelling](/alevel/a2-mathematics/mechanics/mathematical-modelling/) and [Vectors and Kinematics](/alevel/a2-mathematics/mechanics/vectors-and-kinematics/). Use $g=9.8\,\mathrm{m\,s^{-2}}$ unless another value is given. Keep exact values until the final answer, then give numerical answers to three significant figures, or one decimal place for angles, unless asked otherwise.

All worked examples and practice questions are self-written, not official past-paper questions. No official marks are assigned. Diagrams show directions; arrow lengths are not a common force scale.

## Newton's Laws and the Resultant Force

1. With zero resultant force, a body stays at rest or moves with constant velocity.
2. For a body of constant mass, the resultant force equals mass times acceleration: $\mathbf F=m\mathbf a$.
3. If one body exerts a force on another, the second exerts an equal and opposite force on the first. These forces act on **different bodies**.

The force in Newton's second law is the **resultant of all external forces on the chosen body**. Add signed components first. Weight and normal reaction act on the same body, so they are not a third-law pair.

$$\sum F_x=ma_x,\qquad \sum F_y=ma_y,\qquad \sum F_z=ma_z.$$

Acceleration has the direction of the resultant force. It need not have the direction of velocity: a body moving upwards can have downward acceleration. Use mass in kilograms, force in newtons and acceleration in $\mathrm{m\,s^{-2}}$.

## Linear Motion with Constant Acceleration

Choose an axis along the straight line of motion and a perpendicular axis. For motion along a fixed plane, acceleration perpendicular to the plane is zero while contact is maintained. Resolve in that direction to find the normal reaction $R$; do not assume $R=mg$.

Along the line of motion, use the resultant force to find the signed acceleration. If it is constant, use:

$$v=u+at,\qquad s=ut+\frac12at^2,\qquad v^2=u^2+2as.$$

Here $s$ is displacement along the chosen axis. These equations apply only while the acceleration stays constant. If the body stops or a string becomes slack, check the forces again before continuing.

### Example 1: an angled pull on a rough horizontal plane

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

### Example 2: motion down a smooth inclined plane

**Question:** a $4\,\mathrm{kg}$ block starts from rest on a smooth plane inclined at $30^\circ$ to the horizontal. Find its acceleration, normal reaction and distance travelled in the first $3\,\mathrm s$. The plane is long enough for this motion.

Choose down the plane as positive. The only forces are weight and normal reaction. Weight has component $4g\sin30^\circ$ down the plane and $4g\cos30^\circ$ into it.

$$4g\sin30^\circ=4a,\qquad \boxed{a=4.9\,\mathrm{m\,s^{-2}}}.$$

$$\boxed{R=4g\cos30^\circ=19.6\sqrt3\,\mathrm N\approx33.9\,\mathrm N}.$$

$$s=\frac12(4.9)(3^2)=22.05\,\mathrm m\approx\boxed{22.1\,\mathrm m}.$$

**Check:** $v=14.7\,\mathrm{m\,s^{-1}}$. The average speed is $7.35\,\mathrm{m\,s^{-1}}$, giving the same distance in $3\,\mathrm s$. Mass cancels in the acceleration calculation, but not in $R$.

### Example 3: sliding up a rough inclined plane

**Question:** a $5\,\mathrm{kg}$ block moves up a plane inclined at $30^\circ$ with initial speed $6\,\mathrm{m\,s^{-1}}$. No driving force acts. The coefficient of friction is $0.2$, with friction magnitude $0.2R$ during sliding. Find the time and distance to its first stop. Decide whether it can remain at rest.

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

## Connected Particles

For a **taut, light, inextensible string over a fixed smooth pulley**, the tension is the same on both sides and the two particles have equal acceleration magnitudes along the string. Their acceleration vectors may point in different directions.

Write one force equation for each particle. Choose positive directions that match the same movement of the string. Add the scalar equations to eliminate tension, then substitute back. Check that $T\geq0$ and that any normal reaction is non-negative. The equations stop applying if the string becomes slack or a particle reaches the pulley or ground.

### Example 4: a rough plane and a hanging particle

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

## Motion in Two or Three Dimensions

Use fixed perpendicular unit vectors $\mathbf i$, $\mathbf j$ and, in space, $\mathbf k$. Add all force vectors and divide by mass. In a horizontal plane, weight and vertical support may balance; the listed horizontal forces then give the horizontal resultant.

For constant acceleration:

$$\mathbf v=\mathbf u+t\mathbf a,\qquad
\mathbf r=\mathbf r_0+t\mathbf u+\frac12t^2\mathbf a.$$

Speed is $\lvert\mathbf v\rvert$, not a velocity component. Distance from the origin is $\lvert\mathbf r\rvert$; displacement from the starting point is $\mathbf r-\mathbf r_0$.

### Example 5: a constant resultant and the path

**Question:** a particle of mass $2\,\mathrm{kg}$ moves in a horizontal plane. Two horizontal forces are $(4\mathbf i+2\mathbf j)\,\mathrm N$ and $(-4\mathbf i+4\mathbf j)\,\mathrm N$. The vertical forces balance. At $t=0$ it is at the origin with velocity $2\mathbf i\,\mathrm{m\,s^{-1}}$. Find its acceleration, velocity, position and Cartesian path for $t\geq0$.

The horizontal resultant is $6\mathbf j\,\mathrm N$, so:

$$\boxed{\mathbf a=3\mathbf j\,\mathrm{m\,s^{-2}}}.$$

$$\boxed{\mathbf v=2\mathbf i+3t\mathbf j},\qquad
\boxed{\mathbf r=2t\mathbf i+\frac32t^2\mathbf j}.$$

Velocity is in $\mathrm{m\,s^{-1}}$ and position is in metres. Since $x=2t$ and $y=\frac32t^2$, eliminate $t$:

$$\boxed{y=\frac38x^2,\quad x\geq0}.$$

**Check:** differentiating $\mathbf r$ twice gives $3\mathbf j$, and multiplying by mass recovers the resultant $6\mathbf j$. At $t=0$, the position and velocity satisfy both given conditions. The restriction $x\geq0$ keeps only the part travelled after the initial time.

## Motion with Variable Acceleration

When the resultant force is a function of time, divide by mass, then integrate **each component**:

$$\mathbf a=\frac{\mathbf F(t)}m,\qquad
\mathbf v=\int\mathbf a\,dt+\mathbf C,\qquad
\mathbf r=\int\mathbf v\,dt+\mathbf D.$$

The integrals here mean chosen antiderivatives before the constants are added. $\mathbf C$ and $\mathbf D$ are independent constant vectors. For a scalar component, write its integration constant as $+C$ and use a new constant for the next integration. Use the given velocity to find the first constants and the given position to find the second. These conditions may be given at any time, not just $t=0$.

Do not use constant-acceleration equations when $\mathbf a$ varies. For a resultant expressed in terms of displacement or velocity, a different differential equation may be needed; the examples here follow the textbook's force-as-a-function-of-time model.

### Example 6: a time-dependent force

**Question:** a $2\,\mathrm{kg}$ particle moves in a horizontal plane under resultant horizontal force $(4\mathbf i+12t\mathbf j)\,\mathrm N$. Vertical forces balance. It is initially at rest at position $(1,2)$ metres. Find its velocity, position and Cartesian path for $t\geq0$.

$$\mathbf a=2\mathbf i+6t\mathbf j.$$

Integrate and use $\mathbf v(0)=\mathbf0$:

$$\mathbf v=2t\mathbf i+3t^2\mathbf j+\mathbf C,\qquad \mathbf C=\mathbf0.$$

Integrate again and use $\mathbf r(0)=\mathbf i+2\mathbf j$:

$$\boxed{\mathbf r=(1+t^2)\mathbf i+(2+t^3)\mathbf j}.$$

For $t\geq0$, $t=\sqrt{x-1}$. Thus:

$$\boxed{y=2+(x-1)^{3/2},\quad x\geq1}.$$

**Check:** $\mathbf r'(t)=2t\mathbf i+3t^2\mathbf j$ and $2\mathbf r''(t)=4\mathbf i+12t\mathbf j$. At $t=0$, both conditions hold. Choosing the positive square root is justified by $t\geq0$.

### Example 7: conditions at a later time

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

**Check:** substituting $t=1$ recovers both given vectors. The speed at $t=2$ is $\sqrt{26}\,\mathrm{m\,s^{-1}}$; the negative $y$-component means downward motion in the chosen coordinate plane, not a negative speed.

## Finding Force from Position

If position is given, differentiate twice to find acceleration and multiply by mass:

$$\mathbf F=m\frac{d^2\mathbf r}{dt^2}.$$

This gives the **resultant force**. It equals one particular force only if that force is the only force acting, or if the other forces have zero resultant.

### Example 8: force in three dimensions

**Question:** a $2\,\mathrm{kg}$ particle has position vector, in metres,

$$\mathbf r=t^2\mathbf i+\sin t\mathbf j+e^{-t}\mathbf k.$$

Find the resultant force at time $t$ and its magnitude at $t=0$. Time is in seconds and the trigonometric argument is in radians.

$$\mathbf v=2t\mathbf i+\cos t\mathbf j-e^{-t}\mathbf k.$$

$$\mathbf a=2\mathbf i-\sin t\mathbf j+e^{-t}\mathbf k.$$

$$\boxed{\mathbf F=4\mathbf i-2\sin t\mathbf j+2e^{-t}\mathbf k\,\mathrm N}.$$

At $t=0$, $\mathbf F=4\mathbf i+2\mathbf k\,\mathrm N$, so:

$$\boxed{\lvert\mathbf F(0)\rvert=\sqrt{20}\,\mathrm N\approx4.47\,\mathrm N}.$$

**Check:** the $\mathbf k$-component of velocity is negative but its acceleration is positive. Differentiating $-e^{-t}$ gives $+e^{-t}$.

## Practice

These questions are self-written. Use $g=9.8\,\mathrm{m\,s^{-2}}$. For horizontal-plane questions, take $\mathbf i$ and $\mathbf j$ in that plane and assume vertical weight and support forces balance.

### Q1: a smooth horizontal plane

A $4\,\mathrm{kg}$ block is pulled along a smooth horizontal plane by tension $20\,\mathrm N$ at $30^\circ$ above horizontal. Find its horizontal acceleration and normal reaction.

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

</details>

### Q2: sliding down a rough plane

A $6\,\mathrm{kg}$ block slides down a $30^\circ$ inclined plane. Sliding friction has magnitude $\mu R$, where $\mu=1/(2\sqrt3)$. Find its acceleration and distance travelled in $2\,\mathrm s$ if its initial downward speed is $1\,\mathrm{m\,s^{-1}}$. It stays on the plane throughout.

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

</details>

### Q3: moving forwards while slowing down

An $800\,\mathrm{kg}$ vehicle moves along a horizontal road. Its speed falls from $12$ to $8\,\mathrm{m\,s^{-1}}$ in $10\,\mathrm s$ with constant acceleration. A constant resistance of $600\,\mathrm N$ acts backwards. Find the constant forward driving force.

<details markdown="1">
<summary>Hint</summary>

Choose forwards as positive. Find the signed acceleration before using Newton's second law.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$a=\frac{8-12}{10}=-0.4\,\mathrm{m\,s^{-2}}.$$

$$D-600=800(-0.4),\qquad \boxed{D=280\,\mathrm N}.$$

**Check:** the backward resultant is $320\,\mathrm N$. A forward driving force can act while the vehicle slows down, because resistance is greater.

</details>

### Q4: a smooth plane and a pulley

A $4\,\mathrm{kg}$ particle on a smooth $30^\circ$ plane is joined to a hanging $3\,\mathrm{kg}$ particle by a taut light inextensible string over a fixed smooth pulley. The particles are released from rest. Find their acceleration, tension and magnitude of the string's force on the pulley. The inclined side of the string is parallel to the plane.

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

</details>

### Q5: add forces before finding acceleration

A $3\,\mathrm{kg}$ particle in a horizontal plane experiences horizontal forces $(8\mathbf i-4\mathbf j)\,\mathrm N$ and $(-2\mathbf i+10\mathbf j)\,\mathrm N$. Initially it is at the origin with velocity $(\mathbf i-\mathbf j)\,\mathrm{m\,s^{-1}}$. Find its velocity, speed and position after $2\,\mathrm s$.

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

</details>

### Q6: integrate a variable force

A $3\,\mathrm{kg}$ particle in a horizontal plane has resultant horizontal force $(6\mathbf i+12t\mathbf j)\,\mathrm N$. Initially it is at the origin with velocity $2\mathbf i\,\mathrm{m\,s^{-1}}$. Find its velocity and position at time $t$, then its position at $t=3\,\mathrm s$.

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

</details>

### Q7: conditions at one second

A $2\,\mathrm{kg}$ particle in a horizontal plane has resultant horizontal force $(4t\mathbf i+4\mathbf j)\,\mathrm N$. At $t=1\,\mathrm s$, its velocity is $4\mathbf j\,\mathrm{m\,s^{-1}}$ and its position is $(2\mathbf i+3\mathbf j)\,\mathrm m$. Find its velocity and position at $t=2\,\mathrm s$.

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

</details>

### Q8: a resultant force in space

A $3\,\mathrm{kg}$ particle has position vector, in metres,

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

</details>

## Quick Reference

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

**Learning path:** [Previous: Centres of Mass](/alevel/a2-mathematics/mechanics/centres-of-mass/) · [Mechanics topic index](/alevel/a2-mathematics/mechanics/) · [Next: Projectiles](/alevel/a2-mathematics/mechanics/projectiles/).
