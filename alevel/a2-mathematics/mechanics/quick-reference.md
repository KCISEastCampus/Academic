---
layout: subjects
title: Mechanics — Quick Reference
mathjax: true
grade: a2
subject: m2
permalink: /alevel/a2-mathematics/mechanics/quick-reference/
toc_headings: h2
study_page: true
---

[A2 Mechanics](/alevel/a2-mathematics/mechanics/) · MA05 Unit M2

Use this page to look up a method and its conditions. For explanations, worked examples and practice, choose a lesson from the [topic index](/alevel/a2-mathematics/mechanics/). The lessons cover M2.1–M2.7.

## M2.1: Mathematical Modelling

A model simplifies a real situation. Explain what each assumption changes and whether it is reasonable for the question.

| Assumption | Meaning and conditions |
|---|---|
| Particle | Ignore size and shape when describing the motion; this does not remove air resistance |
| Light string or rod | Ignore its mass; a rod can pull or push, but a string can only pull |
| Inextensible string | Its length is fixed; use the arrangement to relate the bodies' motions |
| Taut string over one fixed smooth pulley | In the usual light-string model, tension is the same on both sides and the end particles have equal acceleration magnitudes while both hang freely |
| Smooth surface | No friction at the contact; reaction is normal to the surface |
| Rough surface | Static friction adjusts within $0\leq F\leq\mu R$; at limiting equilibrium $F=\mu R$ |
| Negligible air resistance | Leave that force out; this is a separate assumption from particle |
| Motion under gravity alone | Weight is the only force, so acceleration is vertically downwards with magnitude $g$; near the Earth's surface, use $g=9.8\,\mathrm{m\,s^{-2}}$ unless another value is given |

Open [Mathematical Modelling](/alevel/a2-mathematics/mechanics/mathematical-modelling/) for worked models and practice.

## M2.2: Kinematics

Differentiate or integrate each component separately:

$$\mathbf v=\frac{\mathrm d\mathbf r}{\mathrm dt},\qquad\mathbf a=\frac{\mathrm d\mathbf v}{\mathrm dt}.$$

When integrating, add a constant vector and substitute the conditions at the time stated. A second integration needs a new constant vector.

| Asked for | Method |
|---|---|
| Speed | $\lvert\mathbf v\rvert$ |
| Distance from the origin | $\lvert\mathbf r\rvert$ |
| Displacement | $\mathbf r(t_2)-\mathbf r(t_1)$ |
| At rest | Every velocity component is zero at the same time |
| Cartesian path | Eliminate time between coordinate equations and keep the time restriction |

Open [Vectors and Kinematics](/alevel/a2-mathematics/mechanics/vectors-and-kinematics/) for worked examples and practice.

## M2.3: Statics and Forces

Open [Forces, Equilibrium and Friction](/alevel/a2-mathematics/mechanics/forces-equilibrium-and-friction/) for force diagrams, resultants, concurrent-force equilibrium and friction practice. Use [Moments and Rigid Objects in Equilibrium](/alevel/a2-mathematics/mechanics/moments-and-rigid-objects/) for beams, tipping, ladders, hinges and pegs, and [Centres of Mass](/alevel/a2-mathematics/mechanics/centres-of-mass/) for particle systems, composite laminae and suspension.

### Force Diagrams
- Identify all forces: weight ($mg$), tension ($T$), thrust, normal reaction ($R$), friction ($F$), applied forces.
- Label clearly.

### Equilibrium Conditions
For a particle, or a system of concurrent forces, equilibrium requires zero resultant: $\sum F_x=0$ and $\sum F_y=0$ in two perpendicular directions. For a rigid body, also require zero resultant moment about any point. Equilibrium means zero acceleration; constant speed alone does not guarantee this.

### Resultant of Coplanar Forces
Add signed components in two common perpendicular directions. If the resultant is $X\mathbf i+Y\mathbf j$, its magnitude is $\sqrt{X^2+Y^2}$. Check both component signs before giving its direction. A force that balances it is $-X\mathbf i-Y\mathbf j$.

### Friction
- **Limiting friction**: $F_{\text{max}} = \mu R$
- For static friction, $0\leq F\leq\mu R$. Use equality only at limiting equilibrium. Friction opposes the tendency to slide at the contact.
- Resolve perpendicular to the surface to find $R$: an angled pull or push may change it. Check $R\geq0$. For a range of applied forces, check both slipping directions; friction can reverse.

### Moments
- **Moment of a force about a point**: its magnitude is $Fd$, where $d$ is the perpendicular distance from the point to the line of action.
- Sign convention: clockwise / anticlockwise.
- An angled force on a rod has moment magnitude $Fr\sin\theta$, where $r$ is the distance along the rod and $\theta$ is the angle between rod and force. Use either the perpendicular force component or the perpendicular distance, not both.

### Rigid Bodies in Equilibrium
- For a rigid body: $\sum F_x = 0$, $\sum F_y = 0$, $\sum M = 0$.
- Take moments about a point through which useful unknown forces act, then resolve forces. Check moments about a different point.
- At a tipping limit, the reaction at the contact being lost is zero. A support which only pushes cannot give a negative normal reaction; a hinge force can have a negative component in an assumed direction.
- A smooth wall's reaction is normal to the wall; a smooth peg's reaction is perpendicular to the rod at the contact. At each rough contact, check its own $F\leq\mu R$.

### Centres of Mass

| Shape | Centre of Mass |
|-------|----------------|
| Uniform rod | Midpoint |
| Uniform rectangular lamina | Intersection of diagonals |
| Uniform circular lamina | Centre of circle |
| Uniform triangular lamina | Intersection of the medians; one third of the way from a side's midpoint to the opposite vertex |

**System of particles:**
$$\bar{x} = \frac{\sum m_i x_i}{\sum m_i}, \quad \bar{y} = \frac{\sum m_i y_i}{\sum m_i}$$

**Composite bodies:** combine the masses and their mass moments; subtract removed material. Use areas in place of masses only when the parts have the same mass per unit area. Attached particles and rods require actual masses.

**Free suspension:** in stable equilibrium under weight and a single support force, the centre of mass is vertically below the suspension point. With two vertical strings, use force balance and moments to find the tensions instead.

## M2.4: Newton’s Laws of Motion

Open [Newton's Laws of Motion](/alevel/a2-mathematics/mechanics/newtons-laws-of-motion/) for full worked examples, force diagrams and practice.

### Newton’s Second Law
$$\mathbf{F} = m\mathbf{a}$$

Here $\mathbf F$ is the resultant force on the chosen body. Resolve normally to find the reaction while contact is maintained; an angled pull can change it. Use constant-acceleration equations only while acceleration is constant. Recheck friction if sliding stops or reverses.

### Applications

**1. Linear motion with constant acceleration (inclined planes):**
- Resolve parallel and perpendicular to plane.
- Weight has component $mg\sin\theta$ down the plane. $R=mg\cos\theta$ only if no other force has a normal component and there is no acceleration normal to the plane. For sliding in the usual friction model, $F=\mu R$; choose its direction from the relative motion at the contact.

**2. Variable acceleration:**
- For a resultant force given as a function of time, use $\mathbf a=\mathbf F(t)/m$, integrate each component twice, and apply the given velocity and position conditions separately.
- For straight-line motion where velocity is treated as a differentiable function of displacement, $F=m\frac{dv}{dt}=mv\frac{dv}{ds}$ may be useful.

**3. Motion in 2D/3D:**
- Apply $\mathbf{F} = m\mathbf{a}$ component-wise.

### Example
A particle of mass $2\,\mathrm{kg}$ has resultant force $\mathbf F=(4t\mathbf i+6\mathbf j)\,\mathrm N$, where time is in seconds. Find its acceleration at $t=2\,\mathrm s$.

**Solution:**
$$\mathbf{a} = \frac{\mathbf{F}}{m} = \frac{4t}{2}\mathbf{i} + \frac{6}{2}\mathbf{j} = 2t\mathbf{i} + 3\mathbf{j}$$

At $t=2\,\mathrm s$:

$$\boxed{\mathbf a=(4\mathbf i+3\mathbf j)\,\mathrm{m\,s^{-2}}}.$$

---

## M2.5: Projectiles

Open [Projectiles](/alevel/a2-mathematics/mechanics/projectiles/) for derivations, worked examples and practice involving different landing levels, targets, walls and ceiling restrictions.

### Assumptions
- Particle moves under constant gravity $g$ downwards.
- Air resistance ignored.
- Motion in vertical plane.

### Equations of Motion (from $t=0$)
Choose the projection point as the origin, with $x$ horizontal and $y$ upwards. Initial speed $V$ at angle $\alpha$ above horizontal:
$$u_x = V\cos\alpha,\quad u_y = V\sin\alpha$$

| Component | Equation |
|-----------|----------|
| Horizontal | $x = (V\cos\alpha)t$ |
| Vertical | $y = (V\sin\alpha)t - \frac{1}{2}gt^2$ |

### Key Quantities

Start from the horizontal and vertical equations, rather than quoting special-case formulae in an exam.

| Asked for | Method and condition |
|---|---|
| Time of flight | Substitute the landing height into the vertical equation and take the positive flight time |
| Greatest height | Put vertical velocity $V\sin\alpha-gt=0$ for an upward launch; distinguish height above the projection point from height above the ground |
| Horizontal range | Find the flight time, then substitute it into $x=(V\cos\alpha)t$ |

For equal launch and landing heights and $0<\alpha<90^\circ$, solving these equations gives $T=\frac{2V\sin\alpha}{g}$ and $R=\frac{V^2\sin2\alpha}{g}$. These are special-case results to derive, not general formulae to apply to a cliff launch.

### Equation of Trajectory
For $V\cos\alpha\ne0$, eliminate $t$ from the component equations:
$$y = x\tan\alpha - \frac{gx^2}{2V^2\cos^2\alpha}$$

### Example
A particle is projected at $20\,\mathrm{m\,s^{-1}}$ at $30^\circ$ above the horizontal and lands at its launch height. Neglect air resistance and take $g=9.8\,\mathrm{m\,s^{-2}}$. Find its range.

At landing, $y=0$:

$$0=20\sin30^\circ\,t-4.9t^2=t(10-4.9t).$$

The positive flight time is $t=10/4.9\,\mathrm s$. Therefore

$$x=20\cos30^\circ\left(\frac{10}{4.9}\right)=\frac{200\sqrt3}{9.8}\approx35.3\,\mathrm m.$$

The root $t=0$ describes launch, not landing.

---

## M2.6: Work and Energy

For explanations, diagrams, eight worked examples and eight practice questions, open the [Work and Energy lesson](/alevel/a2-mathematics/mechanics/work-and-energy/).

### Work Done
- By constant force $\mathbf{F}$ over displacement $\mathbf{d}$:
  $$W = \mathbf{F} \cdot \mathbf{d} = Fd\cos\theta$$
- Units: Joules (J)

### Kinetic Energy
$$KE = \frac{1}{2}mv^2$$

### Gravitational Potential Energy (near Earth’s surface)
Write gravitational potential energy as $PE$, as in the textbook. Some resources use $GPE$ for the same quantity.

$$PE=mgh.$$

Measure $h$ vertically upwards from a fixed zero level. Potential energy can be negative below that level; changes in PE do not depend on which fixed zero level is chosen.

### Work-Energy Principle
$$W_{\text{total}} = \Delta KE = KE_{\text{final}} - KE_{\text{initial}}$$

Here total work includes weight. Equivalently, work by forces other than weight equals $\Delta(KE+PE)$. Count gravity once: use its work or the change in potential energy.

### Conservation of Mechanical Energy
If no energy is supplied or lost through work by other forces, such as driving force or friction:

$$KE_{\text{initial}}+PE_{\text{initial}}=KE_{\text{final}}+PE_{\text{final}}.$$

### Power
Average power over an interval is $P_{\mathrm{average}}=\frac{W}{\Delta t}$. Instantaneous power is $P=\frac{\mathrm dW}{\mathrm dt}=Fv$, where $F$ is the force component in the direction of motion and $v$ is speed. Power is measured in watts. Do not equate average and instantaneous power unless the power is constant.

For engine power, use the driving force $D$, so $P=Dv$. At steady speed uphill, $D=f+mg\sin\alpha$; downhill, $D=f-mg\sin\alpha$. The latter requires $f>mg\sin\alpha$ for a positive forward driving force. Use $D=P/v$ only when $v>0$.

---

## M2.7: Uniform Circular Motion

For explanations, diagrams, nine worked examples and eleven practice questions, open the [Uniform Circular Motion lesson](/alevel/a2-mathematics/mechanics/uniform-circular-motion/).

### Key Relationships
For a particle moving in a circle of radius $r$ with constant angular speed $\omega$:

| Quantity | Formula |
|----------|---------|
| Linear speed | $v = r\omega$ |
| Centripetal acceleration | $a = r\omega^2 = \frac{v^2}{r}$ |
| Centripetal force | $F = m a = m r\omega^2 = \frac{mv^2}{r}$ |

### Direction
- Centripetal acceleration always points towards centre of circle.
- Centripetal force is provided by tension, friction, gravity, normal reaction, etc.

Draw the actual forces; centripetal force is their inward resultant, not an additional force. For a horizontal circle, the vertical resultant is zero. Acceleration has constant magnitude but changes direction.

Use $\omega$ as angular speed in $v=r\omega$. Give clockwise or anticlockwise direction separately for angular velocity. The period is $\tau=2\pi/\omega$; use $T$ for tension.

### Conical Pendulum
![Conical pendulum with tension along the string, weight downwards and angle measured from the vertical](/assets/img/a2-math-mech/conical-pendulum-forces.svg)
A particle of mass $m$ on a string of length $L$, moving in horizontal circle with angle $\theta$ to vertical.

**Vertical equilibrium:** $T\cos\theta = mg$

**Horizontal circular motion:** $T\sin\theta = m r \omega^2$ where $r = L\sin\theta$

Eliminating $T$:
$$\tan\theta = \frac{r\omega^2}{g} \quad \text{or} \quad \omega = \sqrt{\frac{g}{L\cos\theta}}$$

Here $\theta$ is measured from vertical and $r=L\sin\theta$, not $L$. A non-zero circle requires $L\omega^2>g$.

### Limits and Contact

- On a rough horizontal disc or level bend, $mv^2/r\leq\mu mg$. Use equality only at the slipping limit.
- Inside a smooth hemispherical bowl of radius $a$, let $d$ be the depth below its centre. Then $r^2+d^2=a^2$ and $d=g/\omega^2$, with $0<d<a$ for a non-zero circle.
- For a taut string fixed at height $h$ above a smooth horizontal plane, $R=m(g-h\omega^2)$. Contact requires $R\geq0$; at lifting off, $R=0$.
- Inside a smooth cone with semi-vertical angle $\alpha$, resolve $R\sin\alpha=mg$ and $R\cos\alpha=mr\omega^2$. The normal reaction is perpendicular to the cone's side.

### Example
A particle moves in a horizontal circle of radius $0.5\,\mathrm m$ at $4\,\mathrm{m\,s^{-1}}$. Find its radial acceleration and the time for one revolution.

$$a=\frac{v^2}{r}=\frac{4^2}{0.5}=32\,\mathrm{m\,s^{-2}}.$$

$$\omega=\frac{v}{r}=\frac{4}{0.5}=8\,\mathrm{rad\,s^{-1}}.$$

$$\tau=\frac{2\pi}{\omega}=\frac\pi4\,\mathrm s.$$

---

## Key Formulae Summary

| Topic | Formula and conditions |
|-------|---------|
| Kinematics (vector) | $\mathbf{v} = \frac{d\mathbf{r}}{dt}$, $\mathbf{a} = \frac{d\mathbf{v}}{dt}$ |
| Friction (limiting) | $F_{\text{max}} = \mu R$ |
| Moment | Magnitude $Fd$; $d$ is the perpendicular distance to the line of action. State clockwise or anticlockwise. |
| Centre of mass (particles) | $\bar{x} = \frac{\sum m_i x_i}{\sum m_i}$ |
| Projectile flight time and range | Solve the component equations using the landing height |
| Projectile greatest height | For an upward launch, use vertical velocity $=0$ and find $y$, before any collision |
| Work | $W=Fd\cos\theta$ for a constant force over displacement of magnitude $d$ |
| Kinetic energy | $KE = \frac{1}{2}mv^2$ |
| Power | $P=F_{\parallel}v$ at an instant; for a forward driving force, $P=Dv$ |
| Uniform circular motion | $a=\frac{v^2}{r}=r\omega^2$ towards the centre, with $r>0$ |

## Further Questions

These questions were retained from the earlier notes. Their original paper references have not yet been verified, so they are not presented as confirmed official past-paper questions. They combine methods from the reference sections above.

### Equilibrium
![Statics Example](/assets/img/a2-math-mech/MA05_example_q1.png)
A uniform rod $AB$, of length $2a$, is resting with its end $A$ on rough horizontal ground and a point $T$ on the rod in contact with a rough fixed prism of semicircular cross-section, of radius $a$. The rod lies in a vertical plane which is perpendicular to the axis of the prism, as shown in the figure above.

The coefficient of friction between the rod and the ground at $A$ and between the rod and the prism at $T$ is $\mu$, where $0 < \mu < 1$.

When the rod is inclined at an angle $\theta$ to the horizontal, where $\tan \theta = \frac{3}{4}$, the rod is at the point of slipping.

Determine the value of $\mu$.

<details markdown="1">
<summary>Hint</summary>

The radius $OT$ is perpendicular to the rod. Find $AT$ from triangle $AOT$, then take moments about $A$. At the slipping limit, friction acts right at $A$ and up the rod at $T$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Let the rod's weight be $W$, the ground reaction be $R_A$ and the prism's normal reaction be $R_T$. The given angle has $\sin\theta=3/5$ and $\cos\theta=4/5$. From the right-angled triangle $AOT$:

$$AT=a\cot\theta=\frac{4a}{3}.$$

As the rod starts to slip, its foot moves left and the rod slides down past $T$. Friction acts right at the ground and up the rod at the prism. Both contacts are limiting, with friction magnitudes $\mu R_A$ and $\mu R_T$.

Take moments about $A$. Friction at $T$ acts along the rod and has zero moment about $A$:

$$R_T\left(\frac{4a}{3}\right)=W(a\cos\theta),\qquad R_T=\frac35W.$$

Resolve vertically:

$$R_A+R_T\cos\theta+\mu R_T\sin\theta=W,$$

$$R_A=\frac{13-9\mu}{25}W.$$

Resolve horizontally:

$$\mu R_A+\mu R_T\cos\theta=R_T\sin\theta.$$

Substitution gives $\mu(13-9\mu)+12\mu=9$, so:

$$9\mu^2-25\mu+9=0.$$

Only one root lies between zero and one:

$$\boxed{\mu=\frac{25-\sqrt{301}}{18}\approx0.425}.$$

**Check:** both normal reactions are positive. Substituting the unrounded value gives zero horizontal and vertical resultant and zero moment about $A$. The other root exceeds one and does not satisfy the question.

</details>

<span id="centre-of-mass"></span>

For the retained lamina question and its solution, see [Centres of Mass](#centres-of-mass-1).

### Circular Motion
![Question](/assets/img/a2-math-mech/MA05-circular-motion.png)
A car travels at constant speed $v$ in a horizontal circle of radius $r$ on a road banked at angle $\theta$ above the horizontal. In the cross-section shown, its centre of mass $G$ is midway between $A$ and $B$, with $AB=2d$. Its perpendicular distance from the road is $h$. Model the car as a rigid body with contact points directly below $A$ and $B$. Assume there is enough friction to prevent sliding.

At the limit of toppling towards the outside of the bend, the inner contact loses its reaction. The car is about to topple about the **outer contact below $B$**, not about $G$. Show that

$$v^2=\frac{rg(d+h\tan\theta)}{h-d\tan\theta},$$

provided $h\cos\theta>d\sin\theta$.

<details markdown="1">
<summary>Hint</summary>

At the toppling limit only the outer contact supplies a force. Its vertical component balances weight and its horizontal component produces the inward acceleration. Take moments about $G$, keeping both components of the contact force.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Let the resultant contact force at the outer contact have horizontal component $Q_x$ towards the circle's centre and vertical component $Q_y$ upwards. This force includes both normal reaction and friction; it is not generally normal to the road.

There is no vertical acceleration, while the horizontal acceleration is towards the centre:

$$Q_y=mg,\qquad Q_x=\frac{mv^2}{r}.$$

Relative to $G$, the outer contact is a horizontal distance $d\cos\theta+h\sin\theta$ to the right and a vertical distance $h\cos\theta-d\sin\theta$ below it. Before toppling, the resultant moment about $G$ in this cross-section is zero. Weight acts through $G$, so the two components of the contact force give

$$Q_y(d\cos\theta+h\sin\theta)=Q_x(h\cos\theta-d\sin\theta).$$

Substitute the components, cancel $m$ and rearrange:

$$v^2=rg\frac{d\cos\theta+h\sin\theta}{h\cos\theta-d\sin\theta}=\frac{rg(d+h\tan\theta)}{h-d\tan\theta}.$$

**Check:** On a level road, $\theta=0$ gives $v^2=rgd/h$. A higher centre of mass lowers this toppling threshold. The positive denominator is required for this finite threshold; if friction is insufficient, sliding can occur before toppling and this result is not the limiting speed.

</details>

### Projectile Motion
A particle is projected at an angle $\alpha$ above the horizontal, from a vertical cliff face of height $H$ above level horizontal ground. It first hits the ground at a horizontal distance $D$, from the bottom of the cliff edge.

Assuming that air resistance can be ignored, show that the greatest height achieved by the particle from the level horizontal ground is
$$H + \frac{D^2 \tan^2 \alpha}{4(H + D \tan \alpha)}.$$

<details markdown="1">
<summary>Hint</summary>

At landing, $x=D$ and $y=-H$ relative to launch. Eliminate time to find the initial speed, then put the vertical velocity equal to zero to find the greatest height.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Let the speed of projection be $u$, with $0<\alpha<90^\circ$. Use the projection point as the origin and take upwards as positive. At landing:

$$D=u\cos\alpha\,t,\qquad -H=u\sin\alpha\,t-\frac12gt^2.$$

Substitute $t=D/(u\cos\alpha)$ into the vertical equation:

$$-H=D\tan\alpha-\frac{gD^2}{2u^2\cos^2\alpha}.$$

Hence:

$$u^2=\frac{gD^2}{2(H+D\tan\alpha)\cos^2\alpha}.$$

At the top, the vertical velocity is zero, so $t_{\text{top}}=u\sin\alpha/g$. Substitution into the height equation gives:

$$h_{\text{max}}=H+\frac{u^2\sin^2\alpha}{2g}.$$

Using the expression for $u^2$:

$$\boxed{h_{\text{max}}=H+\frac{D^2\tan^2\alpha}{4(H+D\tan\alpha)}}.$$

**Check:** the height is greater than $H$ for this upward launch. As $\alpha$ tends to zero, the extra height tends to zero. Use the ground as the height reference; the term $H$ must be included.

</details>

### Centres of Mass

![Composite circular lamina with a circular hole, suspension point X and attached particle at Q](/assets/img/a2-math-mech/MA05-centre-of-mass.png)

A composite uniform lamina is modelled by the finite region bounded by two circular discs, shown shaded in the figure above. The details, of the sizes and relative positions of these discs, are as follows.

The straight line $POQ$ is a diameter of the larger circular disc, of radius $12a$, whose centre is at the point $O$. The smaller circular disc, of radius $6a$, has its centre at $O'$, so that $O'$ lies on $OQ$ with $\lVert O'Q\rVert=9a$.

A heavy particle is attached to the lamina at $Q$.

The straight line $XOY$ is perpendicular to $POQ$.

When the lamina is freely suspended from $X$ and hangs in equilibrium, with $P$ higher than $Q$, $POQ$ is inclined at $\arctan\frac{5}{12}$ to the horizontal.

Determine the ratio of the mass of the particle to the mass of the lamina.

<details markdown="1">
<summary>Hint</summary>

Subtract the hole's area moments to find the lamina's centre of mass. After adding the particle, the combined centre must lie vertically below $X$. Use the angle to find its original $x$-coordinate.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Use $O$ as the origin, $OQ$ as the positive $x$-axis and $OX$ as the positive $y$-axis. Then $Q=(12a,0)$, $X=(0,12a)$ and $O'=(3a,0)$.

Let the lamina's mass per unit area be $\rho$. Subtract the hole from the complete disc:

$$M=\rho\pi a^2(144-36)=108\rho\pi a^2.$$

The lamina's centre of mass is:

$$x_L=\frac{144(0)-36(3a)}{144-36}=-a,\qquad y_L=0.$$

Let the attached particle have mass $m$. The combined centre $G$ has coordinates:

$$\bar x=\frac{-Ma+12am}{M+m},\qquad \bar y=0.$$

Since $P$ is higher than $Q$, the body turns clockwise through angle $\theta$. For $G$ to lie below $X$, the horizontal component of $\overrightarrow{XG}$ after rotation must be zero:

$$\bar x\cos\theta-12a\sin\theta=0.$$

Thus $\bar x=12a\tan\theta=5a$. Substituting into the mass equation gives:

$$-M+12m=5(M+m),\qquad 7m=6M.$$

$$\boxed{\frac mM=\frac67}.$$

**Check:** this ratio gives $\bar x=5a$, between the lamina's centre at $-a$ and the particle at $12a$. With $\sin\theta=5/13$ and $\cos\theta=12/13$, the downward separation of $X$ and $G$ is $5a\sin\theta+12a\cos\theta=13a>0$. The centre is below the support.

</details>

---
