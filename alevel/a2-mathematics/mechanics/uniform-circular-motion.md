---
title: Uniform Circular Motion
layout: subjects
mathjax: true
grade: a2
subject: m2
permalink: /alevel/a2-mathematics/mechanics/uniform-circular-motion/
toc_headings: h2
study_page: true
---

[A2 Mechanics](/alevel/a2-mathematics/mechanics/) · M2.7 Uniform Circular Motion

Connect angular speed to linear speed, find acceleration towards the centre, and use actual forces to solve motion in horizontal circles.

- **Learning:** start with [angular speed](#angular-speed-and-angular-velocity), then study [radial acceleration](#radial-acceleration) and [force equations](#forces-in-a-horizontal-circle).
- **Homework help:** mark the centre and the horizontal radius. Resolve forces vertically and towards the centre before substituting numbers.
- **Revision:** try [practice](#practice) with the solutions closed. Check friction, tension and contact conditions as well as the force equation.

Textbook: Chapter 15, *Uniform Circular Motion*, Sections 15.1–15.3 (printed pp. 240–251). This lesson uses the textbook terms *angular speed*, *angular velocity*, *radial acceleration*, *horizontal circle* and *conical pendulum*. The smooth cone application also appears in the chapter assessment; the banked-road practice question extends the same force method.

**Before you start:** review [Vectors and Kinematics](/alevel/a2-mathematics/mechanics/vectors-and-kinematics/), [Forces, Equilibrium and Friction](/alevel/a2-mathematics/mechanics/forces-equilibrium-and-friction/) and [Newton's Laws of Motion](/alevel/a2-mathematics/mechanics/newtons-laws-of-motion/). Use $g=9.8\,\mathrm{m\,s^{-2}}$ unless stated otherwise. Keep exact values until the final answer; give numerical answers to three significant figures, or one decimal place for angles, unless asked otherwise.

Model bodies as particles unless stated otherwise. All worked examples and practice questions are self-written, not official past-paper questions. No official marks are assigned. Diagrams show the model and are not drawn to scale.

## Angular Speed and Angular Velocity

**Angular speed** is the rate at which a particle turns about the centre of its circle. Write it as $\omega$ and measure it in **radians per second**. One complete revolution is $2\pi$ radians.

$$\boxed{\omega=\frac{\text{angle turned through}}{\text{time taken}}}.$$

This gives the angular speed for uniform motion. For a changing rate, use the rate at an instant. **Angular velocity** also states the direction of rotation. Taking anticlockwise as positive, clockwise angular velocity is negative. If $\theta$ is measured anticlockwise, signed angular velocity is $\mathrm d\theta/\mathrm dt$ and angular speed is its magnitude.

In the speed and force formulae below, $\omega$ means the **non-negative angular speed**. State clockwise or anticlockwise separately when asked for angular velocity.

To convert $n$ revolutions per minute:

$$\boxed{\omega=\frac{2\pi n}{60}\,\mathrm{rad\,s^{-1}}}.$$

For radius $r$, an angle $\theta$ in radians corresponds to arc length $s=r\theta$. Dividing by time gives **linear speed**:

$$\boxed{v=r\omega}.$$

The time for one revolution is the **period**. Use $\tau$ for this time here, reserving $T$ for tension:

$$\boxed{\tau=\frac{2\pi}{\omega}=\frac{2\pi r}{v}}.$$

Points on one rotating disc have the same angular speed, but a point farther from the axis has a greater linear speed. The radius is distance from the **axis of rotation**, not always the full radius of the object.

## Radial Acceleration

In **uniform circular motion**, speed is constant but velocity changes direction. The particle therefore has acceleration. Its velocity is tangent to the circle; its **radial acceleration**, also called centripetal acceleration, points towards the centre.

$$\boxed{a=\frac{v^2}{r}=r\omega^2}.$$

This is the acceleration magnitude. The acceleration vector changes direction as the particle moves, so do not describe it as constant vector acceleration.

![A particle moving anticlockwise around a circle; velocity is tangent at P and acceleration points from P towards the centre O](/assets/img/a2-math-mech/circular-velocity-acceleration.svg)

For a small positive angle change $\Delta\theta$, the two velocity vectors have equal magnitude $v$ and differ in direction by $\Delta\theta$. Their difference has magnitude:

$$\lvert\Delta\mathbf v\rvert=2v\sin\left(\frac{\Delta\theta}{2}\right)\approx v\Delta\theta.$$

As the time interval tends to zero, divide by $\Delta t$ to obtain $a=v\omega$. Substituting $v=r\omega$ gives both formulae above. This uses $\sin x\approx x$ for small $x$ in radians, as in textbook Section 15.1.

### Example 1: revolutions, speed and acceleration

**Question:** a point on the rim of a disc of radius $0.4\,\mathrm m$ completes $90$ revolutions per minute anticlockwise. Find its angular velocity, linear speed, period and acceleration.

$$\omega=\frac{90(2\pi)}{60}=3\pi\,\mathrm{rad\,s^{-1}}.$$

The angular velocity is $\boxed{3\pi\,\mathrm{rad\,s^{-1}}\text{ anticlockwise}}$.

$$\boxed{v=0.4(3\pi)=1.2\pi\approx3.77\,\mathrm{m\,s^{-1}}}.$$

$$\boxed{\tau=\frac{2\pi}{3\pi}=\frac23\,\mathrm s}.$$

$$\boxed{a=0.4(3\pi)^2\approx35.5\,\mathrm{m\,s^{-2}}\text{ towards the centre}}.$$

**Check:** one minute contains $60/(2/3)=90$ periods. A point halfway from the centre has the same angular speed but half the linear speed and half the acceleration magnitude.

### Example 2: showing a path is a circle

**Question:** a particle has velocity:

$$\mathbf v=(6\cos2t)\mathbf i-(6\sin2t)\mathbf j.$$

At $t=0$, its position vector is $\mathbf r=\mathbf i+5\mathbf j$. Positions are in metres and time is in seconds. Find its position, show that it moves in a circle at constant speed, and find its acceleration.

Integrate each component and use the initial position:

$$x=3\sin2t+C_x,\qquad y=3\cos2t+C_y.$$

At $t=0$, $C_x=1$ and $3+C_y=5$, so:

$$\boxed{\mathbf r=(1+3\sin2t)\mathbf i+(2+3\cos2t)\mathbf j}.$$

$$\boxed{(x-1)^2+(y-2)^2=9}.$$

The circle has centre $(1,2)$ and radius $3\,\mathrm m$. Its speed is:

$$\boxed{\lvert\mathbf v\rvert=\sqrt{36\cos^22t+36\sin^22t}=6\,\mathrm{m\,s^{-1}}}.$$

Differentiating velocity gives:

$$\boxed{\mathbf a=-(12\sin2t)\mathbf i-(12\cos2t)\mathbf j}.$$

Its magnitude is $12\,\mathrm{m\,s^{-2}}$, matching $v^2/r=36/3$. If $\mathbf c=\mathbf i+2\mathbf j$ is the centre's position vector:

$$\mathbf a=-4(\mathbf r-\mathbf c).$$

Thus acceleration points towards the centre. The angular speed is $v/r=2\,\mathrm{rad\,s^{-1}}$; at the top of the circle the velocity points right, so rotation is **clockwise**.

**Check:** the position at $t=0$ is $(1,5)$. Also $\mathbf a\cdot\mathbf v=0$, so acceleration is perpendicular to velocity. For a circle away from the origin, use position **relative to the centre**.

## Forces in a Horizontal Circle

Draw only the **actual forces**: for example weight, tension, normal reaction and friction. The term **centripetal force** describes their resultant towards the centre. It is not an extra force to add to the diagram.

For uniform motion in a horizontal circle:

$$\boxed{\text{resultant force towards the centre}=\frac{mv^2}{r}=mr\omega^2}.$$

There is no vertical acceleration and no acceleration along the tangent. The corresponding resultant force components are zero. Individual tangential forces can still be present if they balance each other.

Choose the radial direction **towards the centre as positive**. Resolve forces in that direction, even if the particle's velocity points in another direction. Do not set all forces to zero just because speed is constant.

### Example 3: tension and a breaking limit

**Question:** a particle of mass $0.25\,\mathrm{kg}$ moves in a horizontal circle on a smooth fixed table. It is attached to a fixed point on the table by a light inextensible string of length $0.8\,\mathrm m$. At speed $4\,\mathrm{m\,s^{-1}}$, find the tension and normal reaction. The string breaks if tension exceeds $8\,\mathrm N$; find the greatest angular speed before it breaks.

Vertically, weight and normal reaction balance. Horizontally, tension supplies the radial resultant:

$$\boxed{R=0.25g=2.45\,\mathrm N}.$$

$$\boxed{T=\frac{0.25(4^2)}{0.8}=5\,\mathrm N}.$$

At the breaking limit:

$$0.25(0.8)\omega^2=8.$$

$$\boxed{\omega_{\text{max}}=\sqrt{40}\approx6.32\,\mathrm{rad\,s^{-1}}}.$$

**Check:** this gives maximum linear speed $0.8\sqrt{40}\approx5.06\,\mathrm{m\,s^{-1}}$. The $4\,\mathrm{m\,s^{-1}}$ motion is below the breaking limit. Use the string length as radius only because the string is horizontal and taut.

If the string breaks, the particle initially moves along the tangent, not outwards along the radius. On this smooth horizontal table it then continues in a straight line, until another force or boundary changes the motion.

## Friction and Road Bends

A block rotating with a rough horizontal disc is at rest **relative to the disc**, but moves in a circle relative to the ground. Static friction acts towards the centre to provide the radial force.

$$f=mr\omega^2,\qquad R=mg,\qquad f\leq\mu R.$$

Do not use $f=\mu R$ for every speed. Equality applies only at the limiting condition for slipping. Combining the equations gives:

$$\boxed{\omega^2\leq\frac{\mu g}{r}},\qquad \boxed{v^2\leq\mu gr}.$$

For a particle model of a car or a phone on a level horizontal bend, the same limit applies if friction provides the horizontal force. This checks slipping; a rigid-body model would need a separate toppling check.

For a **smooth banked road**, with the outer edge raised at angle $\alpha$ to horizontal, the normal reaction points upwards and towards the centre. With no friction:

$$R\cos\alpha=mg,\qquad R\sin\alpha=\frac{mv^2}{r}.$$

$$\boxed{\tan\alpha=\frac{v^2}{rg}}.$$

This gives one speed for steady motion at the stated radius and bank angle. It is not a maximum-speed formula for a rough road.

### Example 4: a block on a rotating disc

**Question:** a block of mass $0.5\,\mathrm{kg}$ stays at a fixed position $0.4\,\mathrm m$ from the axis of a horizontal disc rotating at $3\,\mathrm{rad\,s^{-1}}$. Find the frictional force and the least coefficient of friction. If the coefficient is $0.4$, find the greatest angular speed without slipping.

$$\boxed{f=0.5(0.4)(3^2)=1.8\,\mathrm N\text{ towards the centre}}.$$

$$R=0.5g=4.9\,\mathrm N.$$

The least coefficient occurs when the required friction reaches its limit:

$$\boxed{\mu_{\text{min}}=\frac{1.8}{4.9}\approx0.367}.$$

With $\mu=0.4$:

$$\boxed{\omega_{\text{max}}=\sqrt{\frac{0.4g}{0.4}}\approx3.13\,\mathrm{rad\,s^{-1}}}.$$

**Check:** at $\omega=3$, friction is $1.8\,\mathrm N$, below the available $0.4(4.9)=1.96\,\mathrm N$. The mass cancels in the angular-speed limit.

## Connected Particles and Different Radii

If a string passes through a smooth hole in a table, its tension is the same on both sides when the string is light. Write a separate force equation for each particle.

If the hanging particle is in equilibrium, its tension equals its weight. The particle on the table is **not** in equilibrium: that tension produces radial acceleration.

For particles rotating with the same angular speed at different radii, use $v=r\omega$ for each particle. Their speeds and required radial forces need not be equal. A tension pulling an inner particle outwards enters its radial equation with a minus sign.

### Example 5: a string through a hole

**Question:** particles $P$ and $Q$, of masses $0.6\,\mathrm{kg}$ and $0.9\,\mathrm{kg}$, are connected by a light inextensible string passing through a smooth hole $O$ in a smooth horizontal table. $P$ moves in a horizontal circle of radius $0.8\,\mathrm m$ about $O$. $Q$ hangs at rest below the hole. Find the tension, speed and angular speed of $P$.

For $Q$, vertical equilibrium gives:

$$\boxed{T=0.9g=8.82\,\mathrm N}.$$

For $P$, the table balances its weight, while tension acts towards $O$:

$$8.82=\frac{0.6v^2}{0.8}.$$

$$\boxed{v=\sqrt{11.76}\approx3.43\,\mathrm{m\,s^{-1}}}.$$

$$\boxed{\omega=\frac{\sqrt{11.76}}{0.8}\approx4.29\,\mathrm{rad\,s^{-1}}}.$$

**Check:** $0.6(0.8)\omega^2=8.82$ and $Q$ has zero resultant force. The table's normal reaction on $P$ is $0.6g=5.88\,\mathrm N$. A different speed at this radius would not keep $Q$ at rest under these assumptions.

## The Conical Pendulum

A **conical pendulum** has a particle suspended by a light inextensible string from a fixed point $A$. The particle moves at constant speed in a horizontal circle below $A$. The string sweeps out a cone.

Let the string length be $l$ and its angle to the **vertical** be $\theta$. The horizontal radius and the depth of the circle's centre below $A$ are:

$$\boxed{r=l\sin\theta},\qquad \boxed{h=l\cos\theta}.$$

The only forces on the particle are tension $T$ along the string and weight $mg$ vertically downwards. Resolve vertically and horizontally towards the centre:

$$\boxed{T\cos\theta=mg},\qquad \boxed{T\sin\theta=mr\omega^2}.$$

![A conical pendulum in vertical section; tension points up the string, weight points down, the string angle is measured from vertical, and the circle radius is l sin theta](/assets/img/a2-math-mech/conical-pendulum-forces.svg)

Dividing the two equations gives:

$$\tan\theta=\frac{r\omega^2}{g}=\frac{v^2}{rg}.$$

For a genuine circle, $r>0$ and $\sin\theta>0$. Substituting $r=l\sin\theta$ in the horizontal equation gives:

$$\boxed{T=ml\omega^2},\qquad \boxed{\cos\theta=\frac{g}{l\omega^2}},\qquad \boxed{h=\frac{g}{\omega^2}}.$$

The tension exceeds the weight, since $0<\theta<90^\circ$. A non-zero-radius conical motion is possible only when $l\omega^2>g$. Equality gives $\theta=0$ and $r=0$, so it is not a circular orbit. At a fixed angular speed, $h$ is independent of mass and string length, but the chosen length must exceed $h$.

### Example 6: angle given from the vertical

**Question:** a particle of mass $0.4\,\mathrm{kg}$ forms a conical pendulum with string length $1.25\,\mathrm m$. Its acute angle to vertical satisfies $\cos\theta=4/5$. Find the radius, tension, angular speed, linear speed and period.

Since $\sin\theta=3/5$:

$$\boxed{r=1.25\left(\frac35\right)=0.75\,\mathrm m}.$$

$$\boxed{T=\frac{0.4g}{4/5}=4.9\,\mathrm N}.$$

$$\omega^2=\frac{g}{1.25(4/5)}=9.8.$$

$$\boxed{\omega\approx3.13\,\mathrm{rad\,s^{-1}}},\qquad \boxed{v=0.75\sqrt{9.8}\approx2.35\,\mathrm{m\,s^{-1}}}.$$

$$\boxed{\tau=\frac{2\pi}{\sqrt{9.8}}\approx2.01\,\mathrm s}.$$

**Check:** substitute in both force equations:

$$T\cos\theta=4.9\left(\frac45\right)=3.92=mg.$$

$$T\sin\theta=4.9\left(\frac35\right)=2.94=mr\omega^2.$$

The radius is $0.75\,\mathrm m$, not the full string length.

## Motion Inside a Smooth Bowl

A particle moving on the inner surface of a fixed smooth hemispherical bowl can describe a horizontal circle. Weight acts downwards; the normal reaction points towards the **centre of the sphere**, above the centre of the horizontal circle.

Let the bowl radius be $a$, the circle radius be $r$, and the depth of the circle's centre $C$ below the bowl centre $O$ be $d$:

$$\boxed{r^2+d^2=a^2}.$$

![Vertical section of a smooth hemispherical bowl; the particle circles below O, the normal reaction points towards O, r is the horizontal circle radius and d is its centre's depth](/assets/img/a2-math-mech/circular-motion-bowl.svg)

The upward fraction of the normal reaction is $d/a$ and the inward horizontal fraction is $r/a$. Hence:

$$R\frac da=mg,\qquad R\frac ra=mr\omega^2.$$

For $r>0$, cancel $r$ in the second equation:

$$\boxed{R=ma\omega^2},\qquad \boxed{d=\frac{g}{\omega^2}}.$$

Require $0<d<a$ for a non-zero horizontal circle inside the lower hemisphere. If $d=a$, the particle is at the bottom and $r=0$; if $d>a$, the proposed circle is outside the bowl geometry.

### Example 7: radius of the bowl and radius of the circle

**Question:** a particle of mass $0.2\,\mathrm{kg}$ moves in a horizontal circle inside a fixed smooth hemispherical bowl of radius $0.5\,\mathrm m$. The circle's centre is $0.3\,\mathrm m$ below the bowl centre. Find the circle radius, normal reaction, angular speed and linear speed.

$$\boxed{r=\sqrt{0.5^2-0.3^2}=0.4\,\mathrm m}.$$

$$R\left(\frac{0.3}{0.5}\right)=0.2g,\qquad \boxed{R\approx3.27\,\mathrm N}.$$

$$\boxed{\omega=\sqrt{\frac{g}{0.3}}\approx5.72\,\mathrm{rad\,s^{-1}}}.$$

$$\boxed{v=0.4\sqrt{\frac{g}{0.3}}\approx2.29\,\mathrm{m\,s^{-1}}}.$$

**Check:** the upward component of $R$ is $1.96\,\mathrm N=mg$. Its inward component is about $2.61\,\mathrm N$, equal to $mr\omega^2$. The normal reaction is not horizontal, and $a$ is not the orbit radius.

## Contact and Lifting Off a Plane

A particle can move on a smooth horizontal plane while attached to a string fixed **above** the plane. The upward tension component reduces the normal reaction.

Let the string length be $l$ and the fixed point be height $h$ above the plane. While the string is taut and the particle remains on the plane:

$$r=\sqrt{l^2-h^2}.$$

![A particle on a horizontal plane attached to a raised fixed point; tension acts upwards and towards the axis, the normal reaction is upwards, and weight is downwards](/assets/img/a2-math-mech/circular-motion-contact.svg)

The horizontal tension component is $Tr/l$, and its vertical component is $Th/l$. Thus:

$$T\frac rl=mr\omega^2,\qquad R+T\frac hl=mg.$$

For $r>0$, this gives:

$$\boxed{T=ml\omega^2},\qquad \boxed{R=m(g-h\omega^2)}.$$

A plane can push the particle upwards but cannot pull it downwards. Contact requires $R\geq0$. At the point of lifting off, set **$R=0$**, not $T=0$:

$$\boxed{\omega^2=\frac gh},\qquad \boxed{v=r\sqrt{\frac gh}}.$$

Above this angular-speed limit, the fixed-height contact model would give $R<0$ and is no longer valid. The particle's motion and string angle must change.

### Example 8: a raised attachment point

**Question:** a particle of mass $0.5\,\mathrm{kg}$ moves in a horizontal circle on a smooth fixed plane. It is attached to a fixed point $0.6\,\mathrm m$ above the plane by a light inextensible string of length $1\,\mathrm m$. Find tension and normal reaction at angular speed $3\,\mathrm{rad\,s^{-1}}$. Find the angular and linear speeds at lifting off.

$$r=\sqrt{1^2-0.6^2}=0.8\,\mathrm m.$$

$$\boxed{T=0.5(1)(3^2)=4.5\,\mathrm N}.$$

$$\boxed{R=0.5g-4.5\left(\frac{0.6}{1}\right)=2.2\,\mathrm N}.$$

At lifting off:

$$\boxed{\omega=\sqrt{\frac{g}{0.6}}\approx4.04\,\mathrm{rad\,s^{-1}}}.$$

$$\boxed{v=0.8\sqrt{\frac{g}{0.6}}\approx3.23\,\mathrm{m\,s^{-1}}}.$$

**Check:** at $\omega=3$, the horizontal tension component is $4.5(0.8)=3.6\,\mathrm N=mr\omega^2$. At lifting off, the vertical tension component equals weight while tension remains positive.

## Motion Inside a Smooth Cone

The **semi-vertical angle** $\alpha$ of a cone is the angle between its side and the vertical axis. A particle on the inner surface has a normal reaction perpendicular to the side, directed upwards and towards the axis.

![Vertical section of a smooth cone; alpha is the angle between its side and vertical axis, and the normal reaction is perpendicular to the side](/assets/img/a2-math-mech/circular-motion-cone.svg)

The angle of the normal reaction to vertical is $90^\circ-\alpha$. Its vertical component is therefore $R\sin\alpha$ and its inward horizontal component is $R\cos\alpha$:

$$R\sin\alpha=mg,\qquad R\cos\alpha=mr\omega^2.$$

$$\boxed{r=\frac{g\cot\alpha}{\omega^2}}.$$

Do not use the conical-pendulum components without checking the angle. There the force is **along the string**; here it is **perpendicular to the cone's side**.

### Example 9: the normal reaction on a cone

**Question:** a particle of mass $0.3\,\mathrm{kg}$ moves at angular speed $7\,\mathrm{rad\,s^{-1}}$ in a horizontal circle inside a fixed smooth cone. Its axis is vertical and its semi-vertical angle is $30^\circ$. Find the normal reaction, circle radius and height above the vertex. Assume the cone is large enough for this circle.

$$\boxed{R=\frac{0.3g}{\sin30^\circ}=5.88\,\mathrm N}.$$

$$\boxed{r=\frac{g\cot30^\circ}{7^2}=0.2\sqrt3\approx0.346\,\mathrm m}.$$

If $z$ is height above the vertex, the cone geometry gives $r=z\tan30^\circ$:

$$\boxed{z=\frac{0.2\sqrt3}{\tan30^\circ}=0.6\,\mathrm m}.$$

**Check:** $R\sin30^\circ=2.94\,\mathrm N=mg$. Also $R\cos30^\circ=0.3(0.2\sqrt3)(49)$, matching the required inward force.

## Circular Orbits

The same radial force equation can also model a satellite in a circular orbit. The orbital radius is the Earth's radius **plus** the height above its surface. Gravity provides the inward resultant; use the gravitational acceleration at that orbit, not automatically the surface value $9.8$. Such an orbit need not be a horizontal circle near the Earth's surface, so do not add the vertical equilibrium equation used for a table or pendulum.

## Practice

Try each question before opening the hint. Name the actual forces and mark the radius. For horizontal circles, use separate equations vertically and towards the centre.

### Q1: clockwise rotation

A point on a disc is $0.2\,\mathrm m$ from the axis and completes $60$ revolutions per minute clockwise. Find its angular speed, signed angular velocity, linear speed, period and acceleration. Take anticlockwise angular velocity as positive. State the directions of velocity and acceleration when the point is directly to the right of the centre.

<details markdown="1">
<summary>Hint</summary>

Convert revolutions per minute to radians per second. Use the positive angular speed in $v=r\omega$, and state the rotation direction separately.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\boxed{\omega=2\pi\,\mathrm{rad\,s^{-1}}},\qquad \boxed{\text{signed angular velocity}=-2\pi\,\mathrm{rad\,s^{-1}}}.$$

$$\boxed{v=0.4\pi\approx1.26\,\mathrm{m\,s^{-1}}},\qquad \boxed{\tau=1\,\mathrm s}.$$

$$\boxed{a=0.8\pi^2\approx7.90\,\mathrm{m\,s^{-2}}}.$$

At the right-hand point, velocity points **downwards** along the tangent and acceleration points **left** towards the centre.

**Check:** the disc makes one revolution per second, consistent with the period. Clockwise motion does not make speed or acceleration magnitude negative.

</details>

### Q2: integrating to find a circle

A particle has acceleration:

$$\mathbf a=-(8\cos2t)\mathbf i-(8\sin2t)\mathbf j.$$

At $t=0$, its position is $3\mathbf i-\mathbf j$ and its velocity is $4\mathbf j$. Positions are in metres and time is in seconds. Find velocity and position, identify the circle and find the speed. Its mass is $0.5\,\mathrm{kg}$; find the magnitude and direction of the resultant force.

<details markdown="1">
<summary>Hint</summary>

Integrate twice, using the given velocity first and the given position second. The circle need not be centred at the origin.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Integrating acceleration and applying the initial velocity gives:

$$\boxed{\mathbf v=-(4\sin2t)\mathbf i+(4\cos2t)\mathbf j}.$$

Integrating again, with a constant for each component:

$$x=2\cos2t+C_x,\qquad y=2\sin2t+C_y.$$

The initial position gives $C_x=1$ and $C_y=-1$:

$$\boxed{\mathbf r=(1+2\cos2t)\mathbf i+(-1+2\sin2t)\mathbf j}.$$

$$\boxed{(x-1)^2+(y+1)^2=4}.$$

The centre is $(1,-1)$, radius is $2\,\mathrm m$ and speed is $\boxed{4\,\mathrm{m\,s^{-1}}}$. Acceleration has magnitude $8\,\mathrm{m\,s^{-2}}$, so the resultant is $\boxed{4\,\mathrm N\text{ towards the centre}}$.

**Check:** differentiation recovers both the given acceleration and the initial velocity. Also $v^2/r=16/2=8$.

</details>

### Q3: a smooth vertical rim

A particle of mass $0.2\,\mathrm{kg}$ moves at $3\,\mathrm{m\,s^{-1}}$ around the inside of a smooth vertical rim on a smooth horizontal table. The circle radius is $0.4\,\mathrm m$. Find the acceleration, the force from the rim and the normal reaction from the table. Ignore air resistance.

<details markdown="1">
<summary>Hint</summary>

The rim supplies a horizontal force towards the centre. The table supplies a separate vertical force balancing weight.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\boxed{a=\frac{3^2}{0.4}=22.5\,\mathrm{m\,s^{-2}}\text{ towards the centre}}.$$

$$\boxed{R_{\text{rim}}=0.2(22.5)=4.5\,\mathrm N\text{ towards the centre}}.$$

$$\boxed{R_{\text{table}}=0.2g=1.96\,\mathrm N}.$$

**Check:** the vertical forces balance, but the horizontal resultant is non-zero. The two reactions act at different contacts and should not be combined into a single horizontal force diagram label.

</details>

### Q4: a phone on a train table

A train follows a horizontal circular bend at a steady $12\,\mathrm{m\,s^{-1}}$. A phone stays at rest relative to a rough horizontal table in the train. The coefficient of friction is $0.3$. Model the phone as a particle and find the least possible radius of its circular path without slipping.

<details markdown="1">
<summary>Hint</summary>

Static friction supplies the radial force. Use $mv^2/r\leq\mu mg$ and solve for $r$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\frac{m(12^2)}{r}\leq0.3mg.$$

$$r\geq\frac{144}{0.3g},\qquad \boxed{r_{\text{min}}\approx49.0\,\mathrm m}.$$

**Check:** at this radius, friction is limiting. A larger radius needs less friction for the same speed. The phone's mass cancels. Its circular-path radius is measured from the bend's centre to the phone.

</details>

### Q5: a hanging particle in equilibrium

Particles $P$ and $Q$, of masses $0.4\,\mathrm{kg}$ and $0.8\,\mathrm{kg}$, are joined by a light inextensible string through a smooth hole in a smooth fixed horizontal table. $Q$ hangs at rest and $P$ moves in a horizontal circle of radius $0.5\,\mathrm m$ about the hole. Find the tension, speed and angular speed of $P$.

<details markdown="1">
<summary>Hint</summary>

Use equilibrium for $Q$ and the radial force equation for $P$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\boxed{T=0.8g=7.84\,\mathrm N}.$$

$$7.84=\frac{0.4v^2}{0.5},\qquad \boxed{v=\sqrt{9.8}\approx3.13\,\mathrm{m\,s^{-1}}}.$$

$$\boxed{\omega=\frac{\sqrt{9.8}}{0.5}\approx6.26\,\mathrm{rad\,s^{-1}}}.$$

**Check:** $0.4(0.5)\omega^2=7.84$. The forces on $Q$ balance; those on $P$ have an inward horizontal resultant.

</details>

### Q6: is a conical pendulum possible?

A particle of mass $0.5\,\mathrm{kg}$ hangs from a light inextensible string of length $1\,\mathrm m$ with a fixed upper end. It forms a conical pendulum with angular speed $4\,\mathrm{rad\,s^{-1}}$. Find tension, angle to vertical, circle radius, linear speed and period. Explain why a non-zero-radius conical motion with angular speed $2\,\mathrm{rad\,s^{-1}}$ is impossible for the same string length.

<details markdown="1">
<summary>Hint</summary>

Use:

$$T=ml\omega^2,\qquad \cos\theta=\frac{g}{l\omega^2}.$$

Check that the resulting cosine lies strictly between zero and one for a circle.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\boxed{T=0.5(1)(4^2)=8\,\mathrm N}.$$

$$\cos\theta=\frac{9.8}{16}=0.6125,\qquad \boxed{\theta\approx52.2^\circ}.$$

$$\boxed{r=\sqrt{1-0.6125^2}\approx0.790\,\mathrm m}.$$

$$\boxed{v=4r\approx3.16\,\mathrm{m\,s^{-1}}},\qquad \boxed{\tau=\frac{2\pi}{4}\approx1.57\,\mathrm s}.$$

At $\omega=2$, the same circular-motion equations would require $\cos\theta=9.8/4=2.45$, which is impossible. The required depth $g/\omega^2$ would exceed the string length.

**Check:** $8(0.6125)=4.9\,\mathrm N=mg$. Use the unrounded radius for the speed calculation.

</details>

### Q7: a horizontal circle in a bowl

A particle of mass $0.3\,\mathrm{kg}$ moves in a horizontal circle inside a fixed smooth hemispherical bowl of radius $0.6\,\mathrm m$. The circle's centre is $0.36\,\mathrm m$ below the bowl centre. Find the circle radius, normal reaction, angular speed and linear speed.

<details markdown="1">
<summary>Hint</summary>

Use $r^2+d^2=a^2$, then resolve the normal reaction vertically and horizontally towards the circle's centre.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\boxed{r=\sqrt{0.6^2-0.36^2}=0.48\,\mathrm m}.$$

$$R\left(\frac{0.36}{0.6}\right)=0.3g,\qquad \boxed{R=4.9\,\mathrm N}.$$

$$\boxed{\omega=\sqrt{\frac{g}{0.36}}\approx5.22\,\mathrm{rad\,s^{-1}}}.$$

$$\boxed{v=0.48\sqrt{\frac{g}{0.36}}\approx2.50\,\mathrm{m\,s^{-1}}}.$$

**Check:** the upward force is $4.9(0.6)=2.94\,\mathrm N=mg$. The inward force is $4.9(0.8)=3.92\,\mathrm N=mr\omega^2$. Both use the same normal reaction.

</details>

### Q8: check the contact model

A particle of mass $0.4\,\mathrm{kg}$ moves on a smooth fixed horizontal plane. A light inextensible string of length $1.25\,\mathrm m$ connects it to a fixed point $0.75\,\mathrm m$ above the plane. The string is taut. Find tension and normal reaction at angular speed $3\,\mathrm{rad\,s^{-1}}$, and find the angular speed at lifting off. Can the same contact model describe motion at $4\,\mathrm{rad\,s^{-1}}$?

<details markdown="1">
<summary>Hint</summary>

Find the horizontal radius from the right triangle. Contact requires $R\geq0$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$r=\sqrt{1.25^2-0.75^2}=1\,\mathrm m.$$

At $\omega=3$:

$$\boxed{T=0.4(1.25)(9)=4.5\,\mathrm N}.$$

$$\boxed{R=0.4g-4.5\left(\frac{0.75}{1.25}\right)=1.22\,\mathrm N}.$$

At lifting off:

$$\boxed{\omega=\sqrt{\frac{g}{0.75}}\approx3.61\,\mathrm{rad\,s^{-1}}}.$$

At $\omega=4$, the fixed-height model gives $T=8\,\mathrm N$ and $R=3.92-8(0.6)=-0.88\,\mathrm N$. This is impossible for a supporting plane, so **the contact model is invalid at this speed**.

**Check:** at $\omega=3$, the inward force is $4.5(1/1.25)=3.6\,\mathrm N=mr\omega^2$. At the lifting threshold the vertical tension component equals the weight.

</details>

### Q9: two particles at different radii

Particles $P$ and $Q$ of masses $0.3\,\mathrm{kg}$ and $0.2\,\mathrm{kg}$ rotate together on a smooth fixed horizontal table at $4\,\mathrm{rad\,s^{-1}}$. They lie on one radius in the order $O,P,Q$, with $O$ fixed. Light inextensible strings $OP$ and $PQ$ each have length $0.5\,\mathrm m$ and remain taut. Find both linear speeds and both tensions.

<details markdown="1">
<summary>Hint</summary>

The radius of $Q$ is the sum of both string lengths. Tension in $PQ$ pulls $Q$ inward but pulls $P$ outward.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The radii are $r_P=0.5$ and $r_Q=1$, in metres:

$$\boxed{v_P=2\,\mathrm{m\,s^{-1}}},\qquad \boxed{v_Q=4\,\mathrm{m\,s^{-1}}}.$$

For $Q$:

$$\boxed{T_{PQ}=0.2(1)(4^2)=3.2\,\mathrm N}.$$

For $P$, take inward as positive:

$$T_{OP}-3.2=0.3(0.5)(4^2),\qquad \boxed{T_{OP}=5.6\,\mathrm N}.$$

**Check:** $T_{OP}-T_{PQ}=2.4\,\mathrm N$, the required radial force on $P$. Equal angular speeds do not imply equal linear speeds or equal string tensions.

</details>

### Q10: a smooth banked road

A car of mass $900\,\mathrm{kg}$ follows a horizontal circle of radius $80\,\mathrm m$ on a smooth banked road. The outer edge is raised, and the acute bank angle $\alpha$ satisfies $\tan\alpha=1/4$. Ignore air resistance and model the car as a particle. Find the speed for steady circular motion and the normal reaction. Explain why this speed is not a maximum-speed result for a rough road.

<details markdown="1">
<summary>Hint</summary>

The only forces in this model are weight and normal reaction. Use $R\cos\alpha=mg$ and $R\sin\alpha=mv^2/r$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$v^2=80g\left(\frac14\right)=196,\qquad \boxed{v=14\,\mathrm{m\,s^{-1}}}.$$

The angle has $\cos\alpha=4/\sqrt{17}$, so:

$$\boxed{R=\frac{900g\sqrt{17}}4\approx9.09\,\mathrm{kN}}.$$

On a rough road, friction can also act along the surface. Its direction and limiting value must be included to find any speed range; this smooth-road calculation gives only the speed requiring no friction.

**Check:** the upward component is $900g=8820\,\mathrm N$ and the inward component is one quarter of that, $2205\,\mathrm N$. This equals $900(14^2)/80$.

</details>

### Q11: a satellite's orbital radius

Model the Earth as a sphere of radius $6400\,\mathrm{km}$. A satellite of mass $400\,\mathrm{kg}$ moves at constant speed in a circular orbit $200\,\mathrm{km}$ above the surface. Gravitational acceleration at this height is $9\,\mathrm{m\,s^{-2}}$. Assume gravity is the only force on the satellite. Find the inward force, orbital speed, angular speed and orbital period.

<details markdown="1">
<summary>Hint</summary>

Measure radius from the Earth's centre and convert kilometres to metres. Use $mv^2/r=mg_{\text{orbit}}$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$r=(6400+200)(1000)=6.6\times10^6\,\mathrm m.$$

$$\boxed{F=400(9)=3600\,\mathrm N\text{ towards the Earth's centre}}.$$

$$\frac{v^2}{r}=9,\qquad \boxed{v=\sqrt{9(6.6\times10^6)}\approx7.71\times10^3\,\mathrm{m\,s^{-1}}}.$$

$$\boxed{\omega=\frac vr\approx1.17\times10^{-3}\,\mathrm{rad\,s^{-1}}}.$$

$$\boxed{\tau=\frac{2\pi}{\omega}\approx5.38\times10^3\,\mathrm s}.$$

**Check:** use unrounded values to find $r\omega^2=9\,\mathrm{m\,s^{-2}}$ and $v\tau=2\pi r$. There is no supporting reaction or tension to add to gravity.

</details>

## Method Summary

- **Convert first:** use radians per second, metres and metres per second. Give the rotation direction when asked for angular velocity.
- **Mark the radius:** measure horizontally to the circle's centre. String length, bowl radius and orbit radius can differ.
- **Draw actual forces:** centripetal force is their inward resultant, not an additional force.
- **Resolve:** vertical resultant is zero for a horizontal circle; the inward resultant is $mv^2/r$ or $mr\omega^2$.
- **Check the model:** friction must satisfy $f\leq\mu R$, tension must remain positive and below any breaking limit, and contact requires $R\geq0$.
- **Check angles:** tension acts along a string; a normal reaction acts perpendicular to a surface. Label whether an angle is measured from horizontal or vertical.
- **Check speed and direction:** constant speed still allows acceleration. Energy alone cannot supply the force or contact condition for circular motion.

**Learning path:** [Previous: Work and Energy](/alevel/a2-mathematics/mechanics/work-and-energy/) · [Mechanics topic index](/alevel/a2-mathematics/mechanics/) · [Mechanics quick reference](/alevel/a2-mathematics/mechanics/quick-reference/). This completes the textbook learning sequence for A2 Mechanics. Revisit [practice](#practice) and use the topic index to review any earlier method you needed.
