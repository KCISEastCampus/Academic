---
title: Projectiles
layout: subjects
mathjax: true
grade: a2
subject: m2
permalink: /alevel/a2-mathematics/mechanics/projectiles/
toc_headings: h2
study_page: true
reading_layout: true
---

[A2 Mechanics](/alevel/a2-mathematics/mechanics/) · M2.5 Projectiles

Throw a ball forwards: it keeps moving forwards while gravity bends its motion downwards. **The two directions belong to one journey, so they share one clock.** We will build that model, find when a flight actually ends, and decide whether a path can reach a target or pass an obstacle.

- **Learning:** start with [the model and equations](#the-projectile-model), then study [height and range](#greatest-height-and-range), [launches from a height](#projection-from-a-height) and [the path](#the-equation-of-the-path).
- **Homework help:** draw the origin and landing level. Use the same time in both component equations.
- **Revision:** try [practice](#practice) with the solutions closed. Check signs, time roots and the conditions of any formula.

You need force components, constant-acceleration equations and quadratics. Repair [components](/alevel/a2-mathematics/mechanics/forces-equilibrium-and-friction/#the-resultant-of-coplanar-forces), [resultant and acceleration](/alevel/a2-mathematics/mechanics/newtons-laws-of-motion/#newtons-laws-and-the-resultant-force) or [velocity versus position](/alevel/a2-mathematics/mechanics/vectors-and-kinematics/#velocity-and-acceleration). The new projectile results are explained below.
{:.lesson-meta}

**Before you start:** review [Newton's Laws of Motion](/alevel/a2-mathematics/mechanics/newtons-laws-of-motion/) and [Vectors and Kinematics](/alevel/a2-mathematics/mechanics/vectors-and-kinematics/). Use $g=9.8\,\mathrm{m\,s^{-2}}$ unless stated otherwise. Keep exact values until the final answer; give numerical answers to three significant figures, or one decimal place for angles, unless asked otherwise.

All worked examples and practice questions are self-written, not official past-paper questions. No official marks are assigned. Diagrams show the model and are not drawn to scale.


## The Projectile Model {#the-projectile-model}

A **projectile** is a body moving freely after projection under gravity alone. Model it as a particle, ignore air resistance and take $g$ as constant. The force is its weight vertically downwards, so acceleration is $-g\mathbf j$ when $\mathbf j$ points upwards. There is no forward force after release in this model.

Choose the **flying particle** as the system. Horizontally, $0=ma_x$ gives $a_x=0$, so horizontal velocity keeps its release value. Vertically, $-mg=ma_y$ gives $a_y=-g$. Mass cancels in this gravity-only model. A horizontal velocity of $10\,\mathrm{m\,s^{-1}}$ is a rate of change of position, not a horizontal acceleration of $10\,\mathrm{m\,s^{-2}}$.

Air resistance supplies another force, generally changing horizontal velocity and vertical acceleration. The equations then need revising. During contact with a roof, wall or ground, contact forces also make the gravity-only model inapplicable.

Place the origin $O$ at the point of projection, with $x$ horizontal to the right and $y$ vertically upwards. Time $t=0$ is the instant of release. If speed of projection is $V$ at angle $\theta$ above horizontal, the initial components are:

$$u_x=V\cos\theta,\qquad u_y=V\sin\theta.$$

For projection below horizontal, use a negative angle or put the minus sign directly in $u_y$. The horizontal component stays constant. The vertical component changes at rate $-g$:

$$\dot x=u_x,\qquad \dot y=u_y-gt.$$

The dot means differentiation with respect to time. Integrating, and using $x(0)=y(0)=0$, gives:

$$\boxed{x=u_xt},\qquad \boxed{y=u_yt-\frac12gt^2}.$$

Both motions use the **same time**. If the origin is at ground level instead, add the initial height to the vertical position equation. Use the equations only until the first landing or collision.

The components $u_x,u_y$ describe **initial velocity**, not acceleration. At a given $t$, both coordinates locate the same particle at the same instant. A time obtained from a height must also be used in the horizontal equation. A value $y<0$ means below the chosen origin, not an impossible position.

![A projectile with initial velocity components, a curved path and downward gravity; horizontal and vertical axes start at the point of projection](/assets/img/a2-math-mech/projectile-components.svg)

<div class="lesson-check" markdown="1">

### Two releases {#release-check}

**Self-written. Question:** Two particles leave the same point $19.6\,\mathrm m$ above horizontal ground at the same instant with horizontal velocities $9$ and $18\,\mathrm{m\,s^{-1}}$, and zero vertical velocity. Ignore air resistance and obstacles. State both acceleration components, decide whether they land together, and find their horizontal landing distances. Would doubling one mass change your prediction in this model? Identify an assumption that could fail for real objects.

<details markdown="1">
<summary>Hint</summary>

The vertical starting data are identical. Horizontal velocity does not enter the vertical equation.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Both have $a_x=0$, $a_y=-9.8\,\mathrm{m\,s^{-2}}$. Relative to launch, $-19.6=-4.9t^2$ gives $T=2\,\mathrm s$ after release. They land together at horizontal distances $18$ and $36\,\mathrm m$. Doubling mass changes neither time because $-mg=ma_y$ cancels mass. Neglecting air resistance or particle dimensions could fail for real objects.

Check the positions at the **same time**. If velocity became acceleration in your equations, repair [the model](#the-projectile-model), then close this answer and try the [inverse launch](#retry-change-the-structure).

</details>

</div>



## Position, Speed and Direction {#position-speed-and-direction}

Position relative to the launch point is $(x,y)$. Its straight-line distance from that point is $\sqrt{x^2+y^2}$, which is not the distance travelled along the curved path.

$$\text{speed}=\sqrt{\dot x^2+\dot y^2}.$$

The direction of motion is the direction of velocity, tangent to the path. For $\dot x>0$, the acute angle $\alpha$ to the horizontal satisfies:

$$\tan\alpha=\frac{\lvert\dot y\rvert}{\dot x}.$$

State whether the motion is above or below horizontal. Do not use $y/x$: that gives the direction of the position vector.

<div class="worked-example" markdown="1">

### Example 1: position and velocity after one second {#example-1-position-and-velocity-after-one-second}

**Question:** a particle is projected from horizontal ground at $25\,\mathrm{m\,s^{-1}}$ at an acute angle $\theta$ where $\tan\theta=3/4$. Find its position, speed, direction of motion and distance from the launch point at $t=1\,\mathrm s$.

The $3$–$4$–$5$ triangle gives $u_x=20$ and $u_y=15$, in $\mathrm{m\,s^{-1}}$.

$$x=20(1)=20,\qquad y=15(1)-4.9(1)^2=10.1.$$

$$\boxed{(x,y)=(20,10.1)\,\mathrm m}.$$

$$\dot x=20,\qquad \dot y=15-9.8=5.2.$$

$$\boxed{\text{speed}=\sqrt{20^2+5.2^2}\approx20.7\,\mathrm{m\,s^{-1}}}.$$

$$\tan\alpha=\frac{5.2}{20},\qquad \boxed{\alpha=14.6^\circ\text{ above horizontal}}.$$

$$\boxed{OP=\sqrt{20^2+10.1^2}\approx22.4\,\mathrm m}.$$

**Check:** $y>0$, so the particle is still above the ground. Its positive vertical velocity means it is still rising. Its speed has decreased, although horizontal velocity is unchanged.

</div>

## Greatest Height and Range {#greatest-height-and-range}

For an upward launch, the greatest height is reached when $\dot y=0$. Horizontal velocity need not be zero, so the projectile is normally **not at rest** at the top.

$$0=u_y-gt,\qquad t_{\text{top}}=\frac{u_y}{g}.$$

Substitution in the vertical position equation gives height above the launch point:

$$H=u_y\left(\frac{u_y}{g}\right)-\frac12g\left(\frac{u_y}{g}\right)^2
=\frac{u_y^2}{2g}.$$

This assumes the projectile reaches its top before a collision. For a horizontal or downward launch, the greatest height for $t\geq0$ before landing is its initial height.

For landing **at the launch level**, put $y=0$. When $u_y>0$:

$$0=t\left(u_y-\frac12gt\right).$$

The root $t=0$ is release. The positive landing time and horizontal range are:

$$T=\frac{2u_y}{g},\qquad R=u_xT=\frac{2u_xu_y}{g}.$$

Substituting the projection components gives:

$$R=\frac{V^2\sin2\theta}{g}.$$

These results are useful checks, but **derive them from the component equations** as the textbook instructs. They do not give flight time or landing distance on a different level. For fixed $V$, equal launch and landing levels, and $0<\theta<90^\circ$, range is greatest at $45^\circ$, because $\sin2\theta\leq1$. A ceiling or obstacle can change the allowed angles.

**9660 M2.5 requires that range, flight-time and maximum-height formulae are not quoted in exams; obtain the required quantities from the component equations.**

<div class="worked-example" markdown="1">

### Example 2: height and range from the equations {#example-2-height-and-range-from-the-equations}

**Question:** a projectile leaves horizontal ground with horizontal velocity $14\,\mathrm{m\,s^{-1}}$ and upward velocity $9.8\,\mathrm{m\,s^{-1}}$. Find its greatest height, time of flight and range.

At the top:

$$0=9.8-9.8t,\qquad t=1\,\mathrm s.$$

$$H=9.8(1)-4.9(1)^2=\boxed{4.9\,\mathrm m}.$$

At landing:

$$0=9.8t-4.9t^2=4.9t(2-t).$$

Discarding release gives $\boxed{T=2\,\mathrm s}$. Therefore:

$$R=14(2)=\boxed{28\,\mathrm m}.$$

**Check:** the top occurs halfway through this same-level flight. Its speed at the top is $14\,\mathrm{m\,s^{-1}}$, not zero.

</div>

## Projection from a Height {#projection-from-a-height}

When the launch point is $h$ above horizontal ground and the origin is at launch, landing occurs at $y=-h$. Solve the vertical equation first and select the first physically valid future landing time. Then use $x=u_xt$. The time is generally not twice the time to the top.

<div class="worked-example" markdown="1">

### Example 3: an upward launch from a raised point {#example-3-an-upward-launch-from-a-raised-point}

**Question:** a particle is projected from a point $14.7\,\mathrm m$ above horizontal ground with horizontal velocity $10\,\mathrm{m\,s^{-1}}$ and upward velocity $9.8\,\mathrm{m\,s^{-1}}$. Find its landing time, horizontal landing distance from the foot of the launch point and impact velocity.

![A projectile launched upwards from a raised point, with the launch level y equals zero and the ground y equals minus h marked](/assets/img/a2-math-mech/projectile-raised-launch.svg)

At ground level:

$$-14.7=9.8t-4.9t^2.$$

$$t^2-2t-3=(t-3)(t+1)=0.$$

The negative root is outside the time interval. Thus $\boxed{T=3\,\mathrm s}$ and $\boxed{x=30\,\mathrm m}$.

$$\dot y=9.8-9.8(3)=-19.6\,\mathrm{m\,s^{-1}}.$$

$$\boxed{\mathbf v=10\mathbf i-19.6\mathbf j\,\mathrm{m\,s^{-1}}}.$$

Its impact speed is $\boxed{22.0\,\mathrm{m\,s^{-1}}}$, directed $\boxed{63.0^\circ}$ below horizontal.

**Check:** $y(3)=-14.7$. The flight lasts longer than the $2\,\mathrm s$ return to launch level. Maximum height above ground is $14.7+4.9=19.6\,\mathrm m$.

</div>

<div class="worked-example" markdown="1">

### Example 4: horizontal and downward launches {#example-4-horizontal-and-downward-launches}

**Question:** take $g=10\,\mathrm{m\,s^{-2}}$ in this example. A particle is projected from a point $15\,\mathrm m$ above horizontal ground at $20\,\mathrm{m\,s^{-1}}$. Find its landing time and distance from the foot of the launch point for (a) horizontal projection and (b) projection at $30^\circ$ below horizontal.

**(a)** $u_x=20$ and $u_y=0$. At landing:

$$-15=-5t^2,\qquad \boxed{T=\sqrt3\,\mathrm s\approx1.73\,\mathrm s}.$$

$$\boxed{x=20\sqrt3\,\mathrm m\approx34.6\,\mathrm m}.$$

**(b)** $u_x=10\sqrt3$ and $u_y=-10$:

$$-15=-10t-5t^2,\qquad (t-1)(t+3)=0.$$

$$\boxed{T=1\,\mathrm s},\qquad \boxed{x=10\sqrt3\,\mathrm m\approx17.3\,\mathrm m}.$$

**Check:** the downward launch lands sooner and has a smaller horizontal component. Its impact vertical velocity is $-20\,\mathrm{m\,s^{-1}}$. Do not make gravity positive just because initial vertical velocity is negative: upwards remains the positive direction.

</div>

### Leaving a surface {#leaving-a-surface}

While a particle slides on a roof, the roof supplies a normal reaction and constrains its acceleration. At a sharp edge it loses that support. Without an impulse at the edge, velocity is continuous: it leaves **tangent to the roof**, not horizontally unless the roof is horizontal. Thereafter acceleration is vertically downwards. A downward initial velocity does not change the chosen sign of gravity.

Use a separate clock from the roof edge if convenient. Find the edge speed by the method requested, resolve it horizontally and vertically, then use the projectile equations to the **horizontal ground**. This is a change of model, not projectile landing on an inclined plane. After the next lesson, try the [roof task](#later-projectile-check).

## Passing Through a Given Height {#passing-through-a-given-height}

An upward projectile can pass a height twice: once while rising and once while falling. Solve the vertical equation for both times, check they fall within the actual flight, and use the sign of $\dot y$ to identify each stage. If asked for time **at or above** a height, solve an inequality between the roots.

<div class="worked-example" markdown="1">

### Example 5: how long is the projectile above a height? {#example-5-how-long-is-the-projectile-above-a-height}

**Question:** a particle leaves horizontal ground with components $u_x=15$ and $u_y=19.6$, in $\mathrm{m\,s^{-1}}$. Find the times when it is $14.7\,\mathrm m$ above ground, the duration for which it is at least that high, and its horizontal displacement during that interval.

$$14.7=19.6t-4.9t^2,\qquad t^2-4t+3=0.$$

$$\boxed{t=1\,\mathrm s\text{ or }3\,\mathrm s}.$$

The downward-opening quadratic gives $y\geq14.7$ for $1\leq t\leq3$. Thus the duration is $\boxed{2\,\mathrm s}$ and horizontal displacement is:

$$\Delta x=15(3-1)=\boxed{30\,\mathrm m}.$$

**Check:** vertical velocities at the two times are $+9.8$ and $-9.8\,\mathrm{m\,s^{-1}}$. Both occur before landing at $t=4\,\mathrm s$.

</div>

## The Equation of the Path {#the-equation-of-the-path}

The **trajectory** is the path of the projectile. For $u_x\ne0$, eliminate time using $t=x/u_x$:

$$y=u_y\left(\frac{x}{u_x}\right)-\frac12g\left(\frac{x}{u_x}\right)^2.$$

$$\boxed{y=\frac{u_y}{u_x}x-\frac{g}{2u_x^2}x^2}.$$

Substituting $u_x=V\cos\theta$ and $u_y=V\sin\theta$ gives:

$$y=x\tan\theta-\frac{gx^2}{2V^2\cos^2\theta}.$$

Derive this by eliminating $t$ rather than quoting it without working. The path is a parabola with a vertical axis of symmetry when $u_x\ne0$. Purely vertical projection has $x=0$ instead. Keep the portion of the path between release and the first collision.

<div class="worked-example" markdown="1">

### Example 6: checking an obstacle {#example-6-checking-an-obstacle}

**Question:** a projectile leaves horizontal ground with components $u_x=20$ and $u_y=15$, in $\mathrm{m\,s^{-1}}$. A thin wall is $20\,\mathrm m$ horizontally from launch and $9\,\mathrm m$ high. Derive the path and decide whether the particle clears the wall.

$$x=20t,\qquad y=15t-4.9t^2.$$

Substituting $t=x/20$ gives:

$$\boxed{y=\frac34x-\frac{49}{4000}x^2}.$$

At the wall:

$$y(20)=15-4.9=10.1\,\mathrm m.$$

It clears the wall by $\boxed{1.1\,\mathrm m}$ in the particle model.

**Check:** reaching the wall takes $1\,\mathrm s$, and direct substitution in the time equation gives the same height. The projectile is still rising there. Its greatest height alone would not tell us whether it clears a wall at this particular position.

</div>

## Finding an Unknown Projection Angle {#finding-an-unknown-projection-angle}

For a target $(a,b)$ and given speed $V$, substitute the coordinates into the derived path equation. Write $q=\tan\theta$ and use $1/\cos^2\theta=1+q^2$. This produces a quadratic in $q$. There may be two, one or no real angles. Check the requested angle range, positive travel time and any obstacles for every solution.

<div class="worked-example" markdown="1">

### Example 7: two angles to reach one target {#example-7-two-angles-to-reach-one-target}

**Question:** a projectile is launched at $14\,\mathrm{m\,s^{-1}}$ from $O$. Find the acute angles above horizontal for which it passes through $(10,5)$ metres. There are no intervening obstacles.

![Two projectile paths from O reaching the same raised target, one at a lower projection angle and one at a higher angle](/assets/img/a2-math-mech/projectile-two-paths.svg)

Deriving the path from $x=14t\cos\theta$ and $y=14t\sin\theta-4.9t^2$, then substituting the target, gives:

$$5=10q-\frac{9.8(10)^2}{2(14)^2}(1+q^2).$$

$$2.5q^2-10q+7.5=0,\qquad (q-1)(q-3)=0.$$

$$\boxed{\theta=45^\circ\text{ or }71.6^\circ}.$$

**Check:** use $t=10/(14\cos\theta)$ for each exact value of $q$. The times are approximately $1.01$ and $2.26\,\mathrm s$, both positive. Substitution gives $y=5$ in each case. Use the unrounded angles for the check.

</div>

## Height Restrictions {#height-restrictions}

A horizontal ceiling extending over the whole flight restricts the greatest height, not just the height at one horizontal position. Distinguish **touching** the boundary from staying strictly below it. A thin wall requires a height check at the wall instead.

<div class="worked-example" markdown="1">

### Example 8: a ceiling and a limiting angle {#example-8-a-ceiling-and-a-limiting-angle}

**Question:** a projectile leaves horizontal ground at $14\,\mathrm{m\,s^{-1}}$. A horizontal ceiling is $2.5\,\mathrm m$ above ground and extends over the whole flight. Find the limiting acute angle at which the path just touches the ceiling. State the angle condition for avoiding contact, and the limiting range.

At the top, $\dot y=0$. Substitution in the vertical equation gives:

$$H=\frac{(14\sin\theta)^2}{2g}.$$

Set $H=2.5$ for the boundary:

$$196\sin^2\theta=49,\qquad \boxed{\theta=30^\circ}.$$

For strictly no contact and an acute launch angle, $\boxed{0<\theta<30^\circ}$. There is no largest permitted angle: $30^\circ$ is a limit, and at that angle contact occurs.

At the boundary, $u_y=7$ and $u_x=7\sqrt3$. The positive root of $0=7t-4.9t^2$ gives $T=10/7\,\mathrm s$. The complete free-flight path would have range:

$$\boxed{R=10\sqrt3\,\mathrm m\approx17.3\,\mathrm m}.$$

This is the limiting range approached by trajectories below the ceiling, not a completed flight through a collision with it.

**Check:** the boundary's top occurs at $t=5/7\,\mathrm s$, where $y=2.5$. Since permitted angles are below $30^\circ$, their ranges increase towards this limit. The unrestricted $45^\circ$ maximum is not allowed by the ceiling.

</div>

## Practice {#practice}

All questions are self-written. Ignore air resistance, use the particle model and assume no obstacles except those stated. Use $g=9.8\,\mathrm{m\,s^{-2}}$ unless a question specifies another value.

<div class="lesson-check" markdown="1">

### Q1 — One second later {#q1-speed-and-direction}

**Question:** A projectile leaves horizontal ground with components $u_x=12$ and $u_y=16$, in $\mathrm{m\,s^{-1}}$. Find its position, speed and direction after $1\,\mathrm s$.

<details markdown="1">
<summary>Hint</summary>

Use position components $(12t,16t-4.9t^2)$ and velocity components $(12,16-9.8t)$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\boxed{(x,y)=(12,11.1)\,\mathrm m}.$$

$$\boxed{\text{speed}=\sqrt{12^2+6.2^2}\approx13.5\,\mathrm{m\,s^{-1}}}.$$

$$\boxed{\alpha=\tan^{-1}(6.2/12)\approx27.3^\circ\text{ above horizontal}}.$$

**Check:** $\dot y=6.2>0$, so it is rising, and $y>0$, so it has not landed. Do not use $11.1/12$ for the velocity direction.

If your model, signs or check failed, return to [the explanation](#position-speed-and-direction), close the answer, then try [a new task](#independent-method-choice).

</details>

</div>

<div class="lesson-check" markdown="1">

### Q2 — A flight record {#q2-flight-at-the-same-level}

**Question:** A particle is projected from horizontal ground with components $u_x=12$ and $u_y=14.7$, in $\mathrm{m\,s^{-1}}$. Derive its time of flight, greatest height and range.

<details markdown="1">
<summary>Hint</summary>

For landing put $y=0$ and discard $t=0$. For the greatest height put $\dot y=0$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$0=14.7t-4.9t^2=4.9t(3-t),\qquad \boxed{T=3\,\mathrm s}.$$

The top occurs at $t=14.7/9.8=1.5\,\mathrm s$:

$$H=14.7(1.5)-4.9(1.5)^2=11.025\,\mathrm m\approx\boxed{11.0\,\mathrm m}.$$

$$\boxed{R=12(3)=36\,\mathrm m}.$$

**Check:** the top is halfway through the flight and has speed $12\,\mathrm{m\,s^{-1}}$.

If your model, signs or check failed, return to [the explanation](#greatest-height-and-range), close the answer, then try [a new task](#flight-retry).

</details>

</div>

<div class="lesson-check" markdown="1">

### Q3 — A raised launch {#q3-landing-below-the-launch-point}

**Question:** A projectile leaves a point $19.6\,\mathrm m$ above horizontal ground with horizontal component $8\,\mathrm{m\,s^{-1}}$ and upward component $14.7\,\mathrm{m\,s^{-1}}$. Find landing time, horizontal landing distance and impact speed.

<details markdown="1">
<summary>Hint</summary>

With the origin at launch, landing means $y=-19.6$. Solve the vertical equation first.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$-19.6=14.7t-4.9t^2,\qquad (t-4)(t+1)=0.$$

$$\boxed{T=4\,\mathrm s},\qquad \boxed{x=32\,\mathrm m}.$$

At impact, $\dot y=14.7-9.8(4)=-24.5\,\mathrm{m\,s^{-1}}$:

$$\boxed{\text{speed}=\sqrt{8^2+24.5^2}\approx25.8\,\mathrm{m\,s^{-1}}}.$$

**Check:** $y(4)=-19.6$; the negative root is not part of the motion after release.

If your model, signs or check failed, return to [the explanation](#projection-from-a-height), close the answer, then try [a new task](#retry-change-the-structure).

</details>

</div>

<div class="lesson-check" markdown="1">

### Q4 — Two launches {#q4-horizontal-and-downward-projection}

**Question:** Take $g=10\,\mathrm{m\,s^{-2}}$. (a) A particle is projected horizontally at $6\,\mathrm{m\,s^{-1}}$ from height $5\,\mathrm m$. (b) Another particle is projected from height $8\,\mathrm m$ with velocity components $8\,\mathrm{m\,s^{-1}}$ right and $6\,\mathrm{m\,s^{-1}}$ down. Find the landing time and horizontal distance in each case.

<details markdown="1">
<summary>Hint</summary>

Use initial vertical components $0$ and $-6$, respectively, with upwards positive.

</details>

<details markdown="1">
<summary>Solution and check</summary>

**(a)** $-5=-5t^2$, so $\boxed{T=1\,\mathrm s}$ and $\boxed{x=6\,\mathrm m}$.

**(b)** $-8=-6t-5t^2$, so $5t^2+6t-8=0$. Its roots are $0.8$ and $-2$:

$$\boxed{T=0.8\,\mathrm s},\qquad \boxed{x=6.4\,\mathrm m}.$$

**Check:** $-6(0.8)-5(0.8)^2=-8$. Using a positive $6$ for the initial vertical component would describe an upward launch.

If your model, signs or check failed, return to [the explanation](#projection-from-a-height), close the answer, then try [a new task](#retry-change-the-structure).

</details>

</div>

<div class="lesson-check" markdown="1">

### Q5 — A height record {#q5-two-times-at-one-height}

**Question:** A projectile leaves horizontal ground with components $u_x=10$ and $u_y=14.7$, in $\mathrm{m\,s^{-1}}$. Find the times when it is $9.8\,\mathrm m$ high, the duration for which it is at least this high and its horizontal displacement during that interval.

<details markdown="1">
<summary>Hint</summary>

Solve $9.8=14.7t-4.9t^2$ and use the interval between the two roots.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$t^2-3t+2=(t-1)(t-2)=0.$$

The times are $\boxed{1\,\mathrm s\text{ and }2\,\mathrm s}$. The duration is $\boxed{1\,\mathrm s}$ and the horizontal displacement is $\boxed{10\,\mathrm m}$.

**Check:** vertical velocities are $+4.9$ and $-4.9\,\mathrm{m\,s^{-1}}$. Both times occur before landing at $t=3\,\mathrm s$.

If your model, signs or check failed, return to [the explanation](#passing-through-a-given-height), close the answer, then try [a new task](#independent-method-choice).

</details>

</div>

<div class="lesson-check" markdown="1">

### Q6 — A wall {#q6-does-it-clear-the-wall}

**Question:** A projectile leaves horizontal ground with components $u_x=10$ and $u_y=14.7$, in $\mathrm{m\,s^{-1}}$. A thin wall is $20\,\mathrm m$ away and $10\,\mathrm m$ high. Derive the trajectory and decide whether the projectile clears the wall.

<details markdown="1">
<summary>Hint</summary>

Eliminate $t$ using $t=x/10$, then check the height at $x=20$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\boxed{y=1.47x-0.049x^2}.$$

$$y(20)=29.4-19.6=9.8\,\mathrm m.$$

It does **not** clear the wall: the calculated height at the wall is $0.2\,\mathrm m$ below its top, so the free-flight model ends at collision.

**Check:** $t=2$ gives the same height. Its greatest height is $11.025\,\mathrm m$, above the wall's top, but the top occurs before reaching the wall. Maximum height alone is not enough.

If your model, signs or check failed, return to [the explanation](#the-equation-of-the-path), close the answer, then try [a new task](#target-retry).

</details>

</div>

<div class="lesson-check" markdown="1">

### Q7 — A target {#q7-find-both-angles}

**Question:** A projectile is launched at $14\,\mathrm{m\,s^{-1}}$ and passes through $(10,2.5)$ metres relative to launch. Find both acute projection angles. There are no intervening obstacles.

<details markdown="1">
<summary>Hint</summary>

Derive the path, put $q=\tan\theta$ and use $1/\cos^2\theta=1+q^2$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$2.5=10q-2.5(1+q^2),\qquad q^2-4q+2=0.$$

$$q=2\pm\sqrt2.$$

$$\boxed{\theta\approx30.4^\circ\text{ or }73.7^\circ}.$$

**Check:** for each exact $q$, use $\cos\theta=1/\sqrt{1+q^2}$ and $t=10/(14\cos\theta)$. Substituting into the original vertical equation gives $y=2.5$ and both times are positive.

If your model, signs or check failed, return to [the explanation](#finding-an-unknown-projection-angle), close the answer, then try [a new task](#target-retry).

</details>

</div>

<div class="lesson-check" markdown="1">

### Q8 — A roof overhead {#q8-a-ceiling-restriction}

**Question:** Take $g=10\,\mathrm{m\,s^{-2}}$. A projectile leaves horizontal ground at $20\,\mathrm{m\,s^{-1}}$ under a ceiling $5\,\mathrm m$ above ground, extending over the whole flight. Find the limiting acute angle for touching the ceiling, the range of angles avoiding contact and the limiting horizontal range.

<details markdown="1">
<summary>Hint</summary>

Find the top using zero vertical velocity and substitute into the height equation. Equality describes touching; strict inequality describes no contact.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$t_{\text{top}}=\frac{20\sin\theta}{10}=2\sin\theta.$$

$$H=20\sin\theta(2\sin\theta)-5(2\sin\theta)^2=20\sin^2\theta.$$

Setting $H=5$ gives $\boxed{\theta=30^\circ}$. Avoiding contact requires $\boxed{0<\theta<30^\circ}$ for an acute launch.

At the boundary, $u_x=10\sqrt3$, $u_y=10$, and $0=10t-5t^2$ gives the positive time $2\,\mathrm s$. The limiting range is:

$$\boxed{R=20\sqrt3\,\mathrm m\approx34.6\,\mathrm m}.$$

**Check:** the boundary reaches height $5$ at $t=1$. A path at this angle touches the ceiling; the range is the limit approached by flights with smaller angles, not a permitted collision-free maximum.

If your model, signs or check failed, return to [the explanation](#height-restrictions), close the answer, then try [a new task](#obstacle-retry).

</details>

</div>

<!-- motion-transfer:start -->

## Independent Method Choice {#independent-method-choice}

<div class="lesson-check" markdown="1">

**Self-written diagnostic task.** Choose your equations and explain why they answer the question before calculating. Keep the hint and feedback closed on the first attempt.

**Question:** A particle is projected from a point $4.9\,\mathrm m$ above horizontal ground with velocity components $8\,\mathrm{m\,s^{-1}}$ horizontally and $14.7\,\mathrm{m\,s^{-1}}$ upwards. Ignore air resistance. Find both horizontal positions where it is $14.7\,\mathrm m$ above the ground and state its velocity at each. A student says, "There is only one position because the velocity is zero at the top." Diagnose this claim and find the speed at the top. Take the origin at launch and stop the model at first ground contact.

<details markdown="1">
<summary>Reasoning hint</summary>

Translate height above ground into displacement above launch. Use the same time in both components and distinguish zero vertical velocity from zero velocity.

</details>

<details markdown="1">
<summary>Feedback and independent check</summary>

Position and direction need the component equations; a same-level range formula does not locate an intermediate height. The requested level is $14.7-4.9=9.8\,\mathrm m$ above launch:

$$9.8=14.7t-4.9t^2,\qquad (t-1)(t-2)=0.$$

$$\boxed{x=8\,\mathrm m\text{ at }t=1\,\mathrm s},\qquad \boxed{x=16\,\mathrm m\text{ at }t=2\,\mathrm s}.$$

$$\boxed{\mathbf v(1)=8\mathbf i+4.9\mathbf j\,\mathrm{m\,s^{-1}}},\qquad \boxed{\mathbf v(2)=8\mathbf i-4.9\mathbf j\,\mathrm{m\,s^{-1}}}.$$

Both times are before first ground contact: the positive root of $-4.9=14.7t-4.9t^2$ is $(3+\sqrt{13})/2\approx3.30\,\mathrm s$. The two velocities have equal speed $\sqrt{88.01}\approx9.38\,\mathrm{m\,s^{-1}}$, with directions $31.5^\circ$ above and below horizontal respectively. At $t=1.5\,\mathrm s$, only the vertical velocity is zero; the speed is $\boxed{8\,\mathrm{m\,s^{-1}}}$. The top is $15.925\,\mathrm m$ above ground, higher than the requested level, so two crossings are consistent.

If you found only one root, substitute both roots into the original height equation. If you set the top speed to zero, write both velocity components there. An independent energy check at either crossing gives $v^2=8^2+14.7^2-2g(9.8)=88.01$; it checks the speed but does not choose the upward or downward branch.

If you lost a crossing or set the top speed to zero, repair [height crossings](#passing-through-a-given-height) and [velocity direction](#position-speed-and-direction); close this answer and retry [Q5](#q5-two-times-at-one-height) and [Q1](#q1-speed-and-direction).

</details>

</div>

<div class="lesson-check" markdown="1">

### Retry: change the structure {#retry-change-the-structure}

**Question:** A different particle is projected horizontally from $19.6\,\mathrm m$ above horizontal ground and first lands $18\,\mathrm m$ from the foot of the launch point. With no air resistance, find its initial speed and impact velocity. Explain which component determines the flight time, state both acceleration components, and explain whether doubling the mass changes the prediction.

<details markdown="1">
<summary>Retry hint</summary>

The initial vertical component is zero. Find a positive landing time before using the measured horizontal distance.

</details>

<details markdown="1">
<summary>Retry feedback and check</summary>

$$-19.6=-4.9t^2,\qquad \boxed{T=2\,\mathrm s},\qquad u_x=\frac{18}{2}=9\,\mathrm{m\,s^{-1}}.$$

$$\boxed{\text{initial speed}=9\,\mathrm{m\,s^{-1}}},\qquad \boxed{\mathbf v=9\mathbf i-19.6\mathbf j\,\mathrm{m\,s^{-1}}}.$$

The vertical component determines landing time. The impact speed is $\sqrt{465.16}\approx21.6\,\mathrm{m\,s^{-1}}$, directed $65.3^\circ$ below horizontal. Check $x(2)=18$, $y(2)=-19.6$ and $v^2=9^2+2g(19.6)$. This is an inverse problem: the landing position determines an unknown launch component.

Acceleration is $(0,-9.8)\,\mathrm{m\,s^{-2}}$, independent of mass because weight and inertia both scale with it. If you assigned $9$ to horizontal acceleration, return to [the model](#the-projectile-model); if the landing level was wrong, repair [the raised launch](#projection-from-a-height), then retry [Q3](#q3-landing-below-the-launch-point) without help.

</details>

</div>
<!-- motion-transfer:end -->

## Try Again, Then Return Later {#recovery-and-return}

All tasks here are Self-written. Close the previous answer and choose the task linked by your feedback.

<div class="lesson-check" markdown="1">

### A measured flight {#flight-retry}

**Self-written. Question:** A particle returns to its launch level after $4\,\mathrm s$, having travelled $32\,\mathrm m$ horizontally. With gravity alone acting, find its initial velocity components and greatest height. Show how the two measured quantities determine your equations, rather than quoting a range or flight-time formula.

<details markdown="1">
<summary>Hint</summary>

Use $y(4)=0$ and $x(4)=32$ before locating the top.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$0=4u_y-4.9(4)^2$ gives $u_y=19.6\,\mathrm{m\,s^{-1}}$, and $32=4u_x$ gives $u_x=8\,\mathrm{m\,s^{-1}}$. At the top, $0=19.6-9.8t$ gives $t=2\,\mathrm s$. Substitution gives $H=19.6(2)-4.9(2)^2=19.6\,\mathrm m$. Check $y=4.9t(4-t)>0$ for $0<t<4$, so there is no earlier ground contact. Repair [height and range](#greatest-height-and-range), then close this answer and retry [Q2](#q2-flight-at-the-same-level).

</details>

</div>

<div class="lesson-check" markdown="1">

### A changed target {#target-retry}

**Self-written. Question:** A particle is projected from horizontal ground at $14\,\mathrm{m\,s^{-1}}$ at an acute angle $\theta$. Can it pass through a point $10\,\mathrm m$ horizontally and $10\,\mathrm m$ vertically above launch? Derive the condition on the angle and decide whether a possible launch exists. Ignore air resistance and obstacles.

<details markdown="1">
<summary>Hint</summary>

Derive the path from the two component equations, then set $q=\tan\theta$. Real angles need real values of $q$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

From $x=14\cos\theta\,t$ and $y=14\sin\theta\,t-4.9t^2$, eliminate the same $t$ in both terms:

$$y=x\tan\theta-\frac{9.8x^2}{2(14)^2\cos^2\theta}.$$

At $(10,10)$, $10=10q-2.5(1+q^2)$, so $q^2-4q+5=0$. Its discriminant is $16-20=-4$: no real angle reaches this target. Do not assume every target has two angles. At $x=10$, the model gives $y=7.5-2.5(q-2)^2\leq7.5$, an independent check. Repair [eliminating time](#the-equation-of-the-path) or [angle conditions](#finding-an-unknown-projection-angle), then retry [Q7](#q7-find-both-angles).

</details>

</div>

<div class="lesson-check" markdown="1">

### Two structures {#obstacle-retry}

**Self-written. Question:** A particle leaves horizontal ground with velocity $(8\mathbf i+9.8\mathbf j)\,\mathrm{m\,s^{-1}}$. A horizontal ceiling is $5\,\mathrm m$ above the ground over the entire flight. A thin vertical wall is $12\,\mathrm m$ from launch and $4\,\mathrm m$ high. Decide whether it avoids both structures. Explain which event ends the free-flight model.

<details markdown="1">
<summary>Hint</summary>

A ceiling over the whole flight and a wall at one horizontal position require different checks.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The unconstrained top occurs at $t=1$ and has height $9.8-4.9=4.9\,\mathrm m<5$, so it avoids the ceiling. At the wall, $t=12/8=1.5$ and $y=9.8(1.5)-4.9(1.5)^2=3.675\,\mathrm m<4$. The wall is hit; the free-flight model ends at that collision, before the ground-return time $2\,\mathrm s$. Passing the ceiling condition alone does not ensure a clear journey. Repair [height restrictions](#height-restrictions), then retry [Q8](#q8-a-ceiling-restriction), keeping touching separate from avoiding contact.

</details>

</div>

After the next lesson, [Work and Energy](/alevel/a2-mathematics/mechanics/work-and-energy/), return without the examples and do this task. Then use the unit [mixed problems](/alevel/a2-mathematics/mechanics/#mixed-problems) and [later review](/alevel/a2-mathematics/mechanics/#later-review). Record any help used; a later independent attempt provides evidence of retention.

<div class="lesson-check" markdown="1">

### From roof to ground {#later-projectile-check}

**Self-written. Question:** Take $g=10\,\mathrm{m\,s^{-2}}$. A particle starts from rest and slides $10\,\mathrm m$ down a smooth straight roof inclined at $30^\circ$ to the horizontal. The sharp edge is $10\,\mathrm m$ above horizontal ground. It leaves the edge without an impulse; ignore air resistance. Find its edge velocity components, time in the air, horizontal landing distance, impact speed and direction measured from the downward vertical. Explain why one constant-acceleration vector cannot describe the whole journey. There are no other obstacles.

<details markdown="1">
<summary>Hint</summary>

Use the constrained roof motion to find the edge speed. Start a new clock at the edge and keep its downward vertical component.

</details>

<details markdown="1">
<summary>Solution and check</summary>

On the roof, down-slope positive: $mg\sin30^\circ=ma$ gives $a=5\,\mathrm{m\,s^{-2}}$. Hence $u^2=2(5)(10)=100$, so the edge speed is $10\,\mathrm{m\,s^{-1}}$. Without an impulse it leaves at $30^\circ$ below horizontal:

$$u_x=5\sqrt3,\qquad u_y=-5.$$

With launch at the edge and up positive, $-10=-5t-5t^2$ gives $(t-1)(t+2)=0$. Only $T=1\,\mathrm s$ is after release. Thus $x=5\sqrt3\approx8.66\,\mathrm m$; $y$ decreases throughout the air stage, so this is first ground contact.

$$\mathbf v=5\sqrt3\mathbf i-15\mathbf j\,\mathrm{m\,s^{-1}},\qquad
\lvert\mathbf v\rvert=10\sqrt3\approx17.3\,\mathrm{m\,s^{-1}}.$$

The angle from downward vertical satisfies $\tan\alpha=(5\sqrt3)/15$, giving $\alpha=30.0^\circ$. On the roof the acceleration points down the slope; in the air it is vertically down. The vectors and forces differ, so one constant vector cannot describe both stages. Energy also checks the speed: the total vertical drop is $10\sin30^\circ+10=15\,\mathrm m$, giving $v^2=2g(15)=300$. Repair [leaving a surface](#leaving-a-surface), then close this answer and retry the [different-level launch](#q4-horizontal-and-downward-projection).

</details>

</div>

## Quick Reference {#quick-reference}

| Asked for | Start here |
|---|---|
| Position at time $t$ | $x=u_xt$, $y=u_yt-\frac12gt^2$ |
| Speed and direction | Velocity components $u_x$ and $u_y-gt$ |
| Greatest height for an upward launch | Put vertical velocity equal to zero, then find height |
| Landing time | Put the actual landing level into the vertical equation |
| Horizontal landing distance | Substitute the landing time into $x=u_xt$ |
| Two times at a height | Solve the vertical quadratic and check both times are in flight |
| Path or a wall | Eliminate $t$; evaluate height at the required horizontal position |
| Unknown angle | Substitute the target and solve a quadratic in $\tan\theta$ |
| A ceiling over the whole flight | Compare the greatest height with the ceiling; check strictness |

For an upward flight returning to launch level, derive $T=2u_y/g$, $H=u_y^2/(2g)$ and $R=2u_xu_y/g$ as checks. If launch and landing heights differ, solve the component equations using the actual level.

## Sources and Scope {#sources-and-scope}

Scope: [OxfordAQA 9660 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf#page=28), M2.5, printed p.29 / PDF p.28 (1-based); full M2: printed pp.27–30 / PDF pp.26–29. Textbook: Chapter13 §13.3, printed pp.207–215. Paired references actually read: MA05 January 2025 **Q4** ([QP pp.8–9](/assets/pdf/fx-cg50/references/oxfordaqa-ma05-2025-january-question-paper.pdf#page=8), [MS pp.9–10](/assets/pdf/fx-cg50/references/oxfordaqa-ma05-2025-january-mark-scheme.pdf#page=9)) and **Q7** ([QP pp.14–15](/assets/pdf/fx-cg50/references/oxfordaqa-ma05-2025-january-question-paper.pdf#page=14), [MS pp.13–14, Version 1.0 Final](/assets/pdf/fx-cg50/references/oxfordaqa-ma05-2025-january-mark-scheme.pdf#page=13)). Q4 requires shared-time elimination and two height crossings; Q7 leaves a smooth roof before flying to horizontal ground, and (a) specifically requires energy. All tasks here remain Self-written, without official marks. Inclined-plane landing and resisted projectiles are outside scope. Official work follows its own precision instructions; January 2025 defaults to 2 s.f. unless otherwise stated.

**Learning path:** [Previous: Newton's Laws of Motion](/alevel/a2-mathematics/mechanics/newtons-laws-of-motion/) · [Next: Work and Energy](/alevel/a2-mathematics/mechanics/work-and-energy/) · [Mechanics topic index](/alevel/a2-mathematics/mechanics/).
