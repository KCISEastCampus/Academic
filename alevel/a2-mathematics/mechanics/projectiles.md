---
title: Projectiles
layout: subjects
mathjax: true
grade: a2
subject: m2
permalink: /alevel/a2-mathematics/mechanics/projectiles/
toc_headings: h2
study_page: true
---

[A2 Mechanics](/alevel/a2-mathematics/mechanics/) · M2.5 Projectiles

Split a projectile's motion into horizontal and vertical components. Find position, speed, direction, flight time and height, then derive its path and solve problems involving targets and obstacles.

- **Learning:** start with [the model and equations](#the-projectile-model), then study [height and range](#greatest-height-and-range), [launches from a height](#projection-from-a-height) and [the path](#the-equation-of-the-path).
- **Homework help:** draw the origin and landing level. Use the same time in both component equations.
- **Revision:** try [practice](#practice) with the solutions closed. Check signs, time roots and the conditions of any formula.

Textbook: Chapter 13, Section 13.3 (printed pp. 207–215). This lesson uses the textbook terms *projectile*, *velocity of projection*, *time of flight*, *greatest height*, *range* and *trajectory*.

**Before you start:** review [Newton's Laws of Motion](/alevel/a2-mathematics/mechanics/newtons-laws-of-motion/) and [Vectors and Kinematics](/alevel/a2-mathematics/mechanics/vectors-and-kinematics/). Use $g=9.8\,\mathrm{m\,s^{-2}}$ unless stated otherwise. Keep exact values until the final answer; give numerical answers to three significant figures, or one decimal place for angles, unless asked otherwise.

All worked examples and practice questions are self-written, not official past-paper questions. No official marks are assigned. Diagrams show the model and are not drawn to scale.

## The Projectile Model

A **projectile** is a body moving freely after projection under gravity alone. Model it as a particle, ignore air resistance and take $g$ as constant. The force is its weight vertically downwards, so acceleration is $-g\mathbf j$ when $\mathbf j$ points upwards. There is no forward force after release in this model.

Place the origin $O$ at the point of projection, with $x$ horizontal to the right and $y$ vertically upwards. Time $t=0$ is the instant of release. If speed of projection is $V$ at angle $\theta$ above horizontal, the initial components are:

$$u_x=V\cos\theta,\qquad u_y=V\sin\theta.$$

For projection below horizontal, use a negative angle or put the minus sign directly in $u_y$. The horizontal component stays constant. The vertical component changes at rate $-g$:

$$\dot x=u_x,\qquad \dot y=u_y-gt.$$

The dot means differentiation with respect to time. Integrating, and using $x(0)=y(0)=0$, gives:

$$\boxed{x=u_xt},\qquad \boxed{y=u_yt-\frac12gt^2}.$$

Both motions use the **same time**. If the origin is at ground level instead, add the initial height to the vertical position equation. Use the equations only until the first landing or collision.

![A projectile with initial velocity components, a curved path and downward gravity; horizontal and vertical axes start at the point of projection](/assets/img/a2-math-mech/projectile-components.svg)

## Position, Speed and Direction

Position relative to the launch point is $(x,y)$. Its straight-line distance from that point is $\sqrt{x^2+y^2}$, which is not the distance travelled along the curved path.

$$\text{speed}=\sqrt{\dot x^2+\dot y^2}.$$

The direction of motion is the direction of velocity, tangent to the path. For $\dot x>0$, the acute angle $\alpha$ to the horizontal satisfies:

$$\tan\alpha=\frac{\lvert\dot y\rvert}{\dot x}.$$

State whether the motion is above or below horizontal. Do not use $y/x$: that gives the direction of the position vector.

### Example 1: position and velocity after one second

**Question:** a particle is projected from horizontal ground at $25\,\mathrm{m\,s^{-1}}$ at an acute angle $\theta$ where $\tan\theta=3/4$. Find its position, speed, direction of motion and distance from the launch point at $t=1\,\mathrm s$.

The $3$–$4$–$5$ triangle gives $u_x=20$ and $u_y=15$, in $\mathrm{m\,s^{-1}}$.

$$x=20(1)=20,\qquad y=15(1)-4.9(1)^2=10.1.$$

$$\boxed{(x,y)=(20,10.1)\,\mathrm m}.$$

$$\dot x=20,\qquad \dot y=15-9.8=5.2.$$

$$\boxed{\text{speed}=\sqrt{20^2+5.2^2}\approx20.7\,\mathrm{m\,s^{-1}}}.$$

$$\tan\alpha=\frac{5.2}{20},\qquad \boxed{\alpha=14.6^\circ\text{ above horizontal}}.$$

$$\boxed{OP=\sqrt{20^2+10.1^2}\approx22.4\,\mathrm m}.$$

**Check:** $y>0$, so the particle is still above the ground. Its positive vertical velocity means it is still rising. Its speed has decreased, although horizontal velocity is unchanged.

## Greatest Height and Range

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

### Example 2: height and range from the equations

**Question:** a projectile leaves horizontal ground with horizontal velocity $14\,\mathrm{m\,s^{-1}}$ and upward velocity $9.8\,\mathrm{m\,s^{-1}}$. Find its greatest height, time of flight and range.

At the top:

$$0=9.8-9.8t,\qquad t=1\,\mathrm s.$$

$$H=9.8(1)-4.9(1)^2=\boxed{4.9\,\mathrm m}.$$

At landing:

$$0=9.8t-4.9t^2=4.9t(2-t).$$

Discarding release gives $\boxed{T=2\,\mathrm s}$. Therefore:

$$R=14(2)=\boxed{28\,\mathrm m}.$$

**Check:** the top occurs halfway through this same-level flight. Its speed at the top is $14\,\mathrm{m\,s^{-1}}$, not zero.

## Projection from a Height

When the launch point is $h$ above horizontal ground and the origin is at launch, landing occurs at $y=-h$. Solve the vertical equation first and select the first physically valid future landing time. Then use $x=u_xt$. The time is generally not twice the time to the top.

### Example 3: an upward launch from a raised point

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

### Example 4: horizontal and downward launches

**Question:** take $g=10\,\mathrm{m\,s^{-2}}$ in this example. A particle is projected from a point $15\,\mathrm m$ above horizontal ground at $20\,\mathrm{m\,s^{-1}}$. Find its landing time and distance from the foot of the launch point for (a) horizontal projection and (b) projection at $30^\circ$ below horizontal.

**(a)** $u_x=20$ and $u_y=0$. At landing:

$$-15=-5t^2,\qquad \boxed{T=\sqrt3\,\mathrm s\approx1.73\,\mathrm s}.$$

$$\boxed{x=20\sqrt3\,\mathrm m\approx34.6\,\mathrm m}.$$

**(b)** $u_x=10\sqrt3$ and $u_y=-10$:

$$-15=-10t-5t^2,\qquad (t-1)(t+3)=0.$$

$$\boxed{T=1\,\mathrm s},\qquad \boxed{x=10\sqrt3\,\mathrm m\approx17.3\,\mathrm m}.$$

**Check:** the downward launch lands sooner and has a smaller horizontal component. Its impact vertical velocity is $-20\,\mathrm{m\,s^{-1}}$. Do not make gravity positive just because initial vertical velocity is negative: upwards remains the positive direction.

## Passing Through a Given Height

An upward projectile can pass a height twice: once while rising and once while falling. Solve the vertical equation for both times, check they fall within the actual flight, and use the sign of $\dot y$ to identify each stage. If asked for time **at or above** a height, solve an inequality between the roots.

### Example 5: how long is the projectile above a height?

**Question:** a particle leaves horizontal ground with components $u_x=15$ and $u_y=19.6$, in $\mathrm{m\,s^{-1}}$. Find the times when it is $14.7\,\mathrm m$ above ground, the duration for which it is at least that high, and its horizontal displacement during that interval.

$$14.7=19.6t-4.9t^2,\qquad t^2-4t+3=0.$$

$$\boxed{t=1\,\mathrm s\text{ or }3\,\mathrm s}.$$

The downward-opening quadratic gives $y\geq14.7$ for $1\leq t\leq3$. Thus the duration is $\boxed{2\,\mathrm s}$ and horizontal displacement is:

$$\Delta x=15(3-1)=\boxed{30\,\mathrm m}.$$

**Check:** vertical velocities at the two times are $+9.8$ and $-9.8\,\mathrm{m\,s^{-1}}$. Both occur before landing at $t=4\,\mathrm s$.

## The Equation of the Path

The **trajectory** is the path of the projectile. For $u_x\ne0$, eliminate time using $t=x/u_x$:

$$y=u_y\left(\frac{x}{u_x}\right)-\frac12g\left(\frac{x}{u_x}\right)^2.$$

$$\boxed{y=\frac{u_y}{u_x}x-\frac{g}{2u_x^2}x^2}.$$

Substituting $u_x=V\cos\theta$ and $u_y=V\sin\theta$ gives:

$$y=x\tan\theta-\frac{gx^2}{2V^2\cos^2\theta}.$$

Derive this by eliminating $t$ rather than quoting it without working. The path is a parabola with a vertical axis of symmetry when $u_x\ne0$. Purely vertical projection has $x=0$ instead. Keep the portion of the path between release and the first collision.

### Example 6: checking an obstacle

**Question:** a projectile leaves horizontal ground with components $u_x=20$ and $u_y=15$, in $\mathrm{m\,s^{-1}}$. A thin wall is $20\,\mathrm m$ horizontally from launch and $9\,\mathrm m$ high. Derive the path and decide whether the particle clears the wall.

$$x=20t,\qquad y=15t-4.9t^2.$$

Substituting $t=x/20$ gives:

$$\boxed{y=\frac34x-\frac{49}{4000}x^2}.$$

At the wall:

$$y(20)=15-4.9=10.1\,\mathrm m.$$

It clears the wall by $\boxed{1.1\,\mathrm m}$ in the particle model.

**Check:** reaching the wall takes $1\,\mathrm s$, and direct substitution in the time equation gives the same height. The projectile is still rising there. Its greatest height alone would not tell us whether it clears a wall at this particular position.

## Finding an Unknown Projection Angle

For a target $(a,b)$ and given speed $V$, substitute the coordinates into the derived path equation. Write $q=\tan\theta$ and use $1/\cos^2\theta=1+q^2$. This produces a quadratic in $q$. There may be two, one or no real angles. Check the requested angle range, positive travel time and any obstacles for every solution.

### Example 7: two angles to reach one target

**Question:** a projectile is launched at $14\,\mathrm{m\,s^{-1}}$ from $O$. Find the acute angles above horizontal for which it passes through $(10,5)$ metres. There are no intervening obstacles.

![Two projectile paths from O reaching the same raised target, one at a lower projection angle and one at a higher angle](/assets/img/a2-math-mech/projectile-two-paths.svg)

Deriving the path from $x=14t\cos\theta$ and $y=14t\sin\theta-4.9t^2$, then substituting the target, gives:

$$5=10q-\frac{9.8(10)^2}{2(14)^2}(1+q^2).$$

$$2.5q^2-10q+7.5=0,\qquad (q-1)(q-3)=0.$$

$$\boxed{\theta=45^\circ\text{ or }71.6^\circ}.$$

**Check:** use $t=10/(14\cos\theta)$ for each exact value of $q$. The times are approximately $1.01$ and $2.26\,\mathrm s$, both positive. Substitution gives $y=5$ in each case. Use the unrounded angles for the check.

## Height Restrictions

A horizontal ceiling extending over the whole flight restricts the greatest height, not just the height at one horizontal position. Distinguish **touching** the boundary from staying strictly below it. A thin wall requires a height check at the wall instead.

### Example 8: a ceiling and a limiting angle

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

## Practice

All questions are self-written. Ignore air resistance, use the particle model and assume no obstacles except those stated. Use $g=9.8\,\mathrm{m\,s^{-2}}$ unless a question specifies another value.

### Q1: speed and direction

A projectile leaves horizontal ground with components $u_x=12$ and $u_y=16$, in $\mathrm{m\,s^{-1}}$. Find its position, speed and direction after $1\,\mathrm s$.

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

</details>

### Q2: flight at the same level

A particle is projected from horizontal ground with components $u_x=12$ and $u_y=14.7$, in $\mathrm{m\,s^{-1}}$. Derive its time of flight, greatest height and range.

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

</details>

### Q3: landing below the launch point

A projectile leaves a point $19.6\,\mathrm m$ above horizontal ground with horizontal component $8\,\mathrm{m\,s^{-1}}$ and upward component $14.7\,\mathrm{m\,s^{-1}}$. Find landing time, horizontal landing distance and impact speed.

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

</details>

### Q4: horizontal and downward projection

Take $g=10\,\mathrm{m\,s^{-2}}$. (a) A particle is projected horizontally at $6\,\mathrm{m\,s^{-1}}$ from height $5\,\mathrm m$. (b) Another particle is projected from height $8\,\mathrm m$ with velocity components $8\,\mathrm{m\,s^{-1}}$ right and $6\,\mathrm{m\,s^{-1}}$ down. Find the landing time and horizontal distance in each case.

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

</details>

### Q5: two times at one height

A projectile leaves horizontal ground with components $u_x=10$ and $u_y=14.7$, in $\mathrm{m\,s^{-1}}$. Find the times when it is $9.8\,\mathrm m$ high, the duration for which it is at least this high and its horizontal displacement during that interval.

<details markdown="1">
<summary>Hint</summary>

Solve $9.8=14.7t-4.9t^2$ and use the interval between the two roots.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$t^2-3t+2=(t-1)(t-2)=0.$$

The times are $\boxed{1\,\mathrm s\text{ and }2\,\mathrm s}$. The duration is $\boxed{1\,\mathrm s}$ and the horizontal displacement is $\boxed{10\,\mathrm m}$.

**Check:** vertical velocities are $+4.9$ and $-4.9\,\mathrm{m\,s^{-1}}$. Both times occur before landing at $t=3\,\mathrm s$.

</details>

### Q6: does it clear the wall?

A projectile leaves horizontal ground with components $u_x=10$ and $u_y=14.7$, in $\mathrm{m\,s^{-1}}$. A thin wall is $20\,\mathrm m$ away and $10\,\mathrm m$ high. Derive the trajectory and decide whether the projectile clears the wall.

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

</details>

### Q7: find both angles

A projectile is launched at $14\,\mathrm{m\,s^{-1}}$ and passes through $(10,2.5)$ metres relative to launch. Find both acute projection angles. There are no intervening obstacles.

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

</details>

### Q8: a ceiling restriction

Take $g=10\,\mathrm{m\,s^{-2}}$. A projectile leaves horizontal ground at $20\,\mathrm{m\,s^{-1}}$ under a ceiling $5\,\mathrm m$ above ground, extending over the whole flight. Find the limiting acute angle for touching the ceiling, the range of angles avoiding contact and the limiting horizontal range.

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

</details>

## Quick Reference

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

**Learning path:** [Previous: Newton's Laws of Motion](/alevel/a2-mathematics/mechanics/newtons-laws-of-motion/) · [Next: Work and Energy](/alevel/a2-mathematics/mechanics/work-and-energy/) · [Mechanics topic index](/alevel/a2-mathematics/mechanics/).
