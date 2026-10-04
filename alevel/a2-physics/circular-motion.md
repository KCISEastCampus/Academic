---
title: Circular Motion
layout: subjects
mathjax: true
grade: a2
subject: a2-physics
permalink: /alevel/a2-physics/circular-motion/
toc_headings: h2
study_page: true
---

[A2 Physics](/alevel/a2-physics/) · PH03 · 3.6.1 Circular motion

Explain why an object accelerates at constant speed, connect angular speed to linear speed, and use actual forces to solve circular motion problems.

- **Learning:** start with [speed and acceleration](#speed-and-acceleration), then work through [force equations](#force-equations).
- **Homework help:** draw the forces, mark the centre, and take the direction towards the centre as positive.
- **Revision:** try [practice](#practice) before opening the hints and solutions.

**Before you start:** review forces, vectors and Newton's second law in [AS Physics](/alevel/as-physics/). Use $g=9.81\,\mathrm{m\,s^{-2}}$ unless stated otherwise. Keep extra digits during calculations and round the final answer to a suitable number of significant figures.

The worked examples and Questions 1–4 are self-written. Questions 5–6 are adapted from OxfordAQA PH03 papers; the wording and diagrams have been simplified. They are not verbatim exam questions and have no official marks assigned. Diagrams are not to scale.

## Speed and Acceleration

**Think first:** a car travels around a circle at constant speed. Is its acceleration zero?

<details markdown="1">
<summary>Check your explanation</summary>

No. Speed is constant, but the direction of velocity changes. A change in velocity means there is acceleration. The resultant force is directed towards the centre.

</details>

In **uniform circular motion**, an object moves around a circle at constant speed. Its velocity is tangent to the circle. Its **centripetal acceleration** is directed towards the centre.

<img src="/assets/img/a2-math-mech/circular-velocity-acceleration.svg" width="400" height="320" data-lazy-ignore="true" alt="Velocity is tangent to a circular path and acceleration points towards its centre">

The acceleration has constant magnitude, but its direction changes. It is therefore not a constant acceleration vector.

**Angular speed** $\omega$ is the angle turned through per unit time. Measure angles in **radians**. One revolution is $2\pi$ radians.

The **period** $T$ is the time for one revolution. The **frequency** $f$ is the number of revolutions per second, measured in hertz.

$$f=\frac{1}{T},\qquad \omega=2\pi f=\frac{2\pi}{T}.$$

For a circular path of radius $r$:

$$\boxed{v=r\omega},\qquad \boxed{a=\frac{v^2}{r}=r\omega^2}.$$

Use metres for $r$, seconds for $T$, $\mathrm{rad\,s^{-1}}$ for $\omega$, $\mathrm{m\,s^{-1}}$ for $v$ and $\mathrm{m\,s^{-2}}$ for $a$. The radius is the distance from the axis to the moving object, not the diameter.

For $n$ revolutions per minute, divide by $60$ to find $f$ in hertz, then multiply by $2\pi$ to find $\omega$. Set your calculator to radians when using angles in radians.

### Example 1: a rotating disc

A point $0.15\,\mathrm m$ from the axis of a disc completes $120$ revolutions per minute. Find its frequency, angular speed, linear speed and acceleration.

$$f=\frac{120}{60}=2.0\,\mathrm{Hz}.$$

$$\omega=2\pi(2.0)=4\pi\approx13\,\mathrm{rad\,s^{-1}}.$$

Use the unrounded value of $\omega$:

$$v=0.15(4\pi)\approx\boxed{1.9\,\mathrm{m\,s^{-1}}}.$$

$$a=0.15(4\pi)^2\approx\boxed{24\,\mathrm{m\,s^{-2}}}.$$

The acceleration is towards the axis. The period is $T=1/f=0.50\,\mathrm s$.

**Check:** $vT=2\pi r$. In one period the point travels one circumference.

### What changes when the radius changes?

State what stays constant before comparing two circles.

| Quantity held constant | Relationship | If the radius doubles |
|---|---|---|
| Linear speed $v$ | $a=\dfrac{v^2}{r}$ | Acceleration halves |
| Angular speed $\omega$ | $a=r\omega^2$ | Acceleration doubles |

Points on the same rigid rotating disc have the same angular speed. A point farther from the axis has greater linear speed and greater acceleration.

## Force Equations

Newton's second law gives the resultant force towards the centre:

$$\boxed{F=ma=\frac{mv^2}{r}=mr\omega^2}.$$

**Centripetal force** describes the inward resultant force. It is supplied by actual forces such as tension, friction, gravity or a normal reaction. Do not add an extra force labelled "centripetal force" to a diagram that already shows all the actual forces.

1. Draw and label the actual forces on the object.
2. Mark the centre of its circular path.
3. Resolve forces towards the centre and write $\text{inward resultant}=mv^2/r$.
4. Use a separate equation for any direction with no acceleration.
5. Check whether the string can stay taut or the surfaces can stay in contact.

For uniform circular motion, the inward resultant is perpendicular to velocity. It does no work, so it changes the direction of motion without changing speed. Individual forces can do work if their effects cancel; the statement about no work here refers to the resultant.

### Example 2: tension in a horizontal string

A $0.20\,\mathrm{kg}$ particle moves in a horizontal circle on a smooth table. A horizontal string joins it to a fixed point. The radius is $0.50\,\mathrm m$ and the speed is $3.0\,\mathrm{m\,s^{-1}}$. Find the tension.

The weight acts downwards and the normal reaction acts upwards. They balance because there is no vertical acceleration. Tension $F_T$ acts horizontally towards the centre:

$$F_T=\frac{0.20(3.0)^2}{0.50}=\boxed{3.6\,\mathrm N}.$$

Here $F_T$ denotes tension; $T$ denotes the period. The vertical reaction is $mg\approx2.0\,\mathrm N$, not $3.6\,\mathrm N$.

If the string can withstand at most $5.0\,\mathrm N$:

$$v_{\max}=\sqrt{\frac{F_{T,\max}r}{m}}\approx\boxed{3.5\,\mathrm{m\,s^{-1}}}.$$

**Check:** doubling the speed would require four times the tension.

### Example 3: a car on a level bend

A $750\,\mathrm{kg}$ car follows a level circular bend of radius $40\,\mathrm m$ at $12\,\mathrm{m\,s^{-1}}$. Friction supplies the horizontal inward force. Ignore air resistance. Find the required friction force.

$$F=\frac{750(12)^2}{40}=\boxed{2.7\times10^3\,\mathrm N}.$$

If the maximum available friction force is $4.0\times10^3\,\mathrm N$, the greatest speed for this radius is:

$$v_{\max}=\sqrt{\frac{(4.0\times10^3)(40)}{750}}\approx\boxed{15\,\mathrm{m\,s^{-1}}}.$$

At a greater speed, the available friction cannot provide the required inward force. The car cannot follow the stated circular path. It does not gain a new outward force.

## At the Top and Bottom of a Curve

At the crest of a rounded hill, the centre of curvature is below the car. At the bottom of a dip, it is above the car. Use the **local radius of curvature** $r$ at the point considered.

<img src="/assets/img/physics-circular-contact.svg" width="400" height="620" data-lazy-ignore="true" alt="Force diagrams at a hill crest and at the bottom of a dip; weight acts downwards and reaction upwards, while the centre is below the crest and above the dip">

The diagrams show only the actual forces. The dashed line marks the direction to the centre; it is not an extra force.

At a **hill crest**, downwards is towards the centre:

$$mg-N=\frac{mv^2}{r}.$$

The reaction $N$ decreases as speed increases. At the point of losing contact, $N=0$:

$$\boxed{v_{\max}=\sqrt{gr}}.$$

This is the **maximum speed for maintaining contact at a hill crest**. If the equation gives $N<0$, the road would have to pull the car downwards. Ordinary contact cannot do this: the car has already lost contact.

At the **bottom of a dip**, upwards is towards the centre:

$$N-mg=\frac{mv^2}{r}.$$

The reaction is greater than the weight. This explains the greater contact force felt at the bottom.

### Example 4: contact at a hill crest

A $1000\,\mathrm{kg}$ car passes over a hill crest of radius $50\,\mathrm m$ at $15\,\mathrm{m\,s^{-1}}$. Find the reaction and the greatest speed for maintaining contact.

$$N=mg-\frac{mv^2}{r}.$$

$$N=9810-4500=5310\,\mathrm N.$$

$$\boxed{N=5.3\times10^3\,\mathrm N\text{ upwards}}.$$

$$v_{\max}=\sqrt{9.81(50)}\approx\boxed{22\,\mathrm{m\,s^{-1}}}.$$

**Check:** $N$ is positive and less than $mg$. The stated speed is below the contact limit.

### Why is a vertical loop different?

At the top of a vertical circle, a particle attached to a string has both tension and weight towards the centre:

$$F_T+mg=\frac{mv^2}{r}.$$

For the string to remain taut, $F_T\geq0$, so $v\geq\sqrt{gr}$. Here $\sqrt{gr}$ is a **minimum**, because tension pulls inwards. At a hill crest, the reaction pushes outwards from the road, so the same expression gives a **maximum**. Draw the forces before choosing a condition.

Speed in a vertical circle need not be constant. These radial equations still apply at the top and bottom; energy conservation can connect the speeds when friction and air resistance are negligible.

## Inclined Forces

A force need not point directly towards the centre. Use its components.

For an aircraft turning in a horizontal circle at constant height, lift $L$ is inclined at angle $\theta$ to the vertical. In the model used here, weight is $mg$ and the horizontal components of thrust and drag along the motion cancel.

<img src="/assets/img/physics-circular-lift.svg" width="400" height="330" data-lazy-ignore="true" alt="Lift inclined to the vertical with a vertical component balancing weight and a horizontal component pointing towards the centre">

There is no vertical acceleration, so:

$$L\cos\theta=mg.$$

The horizontal component of lift supplies the inward resultant:

$$L\sin\theta=\frac{mv^2}{r}.$$

Dividing the equations gives:

$$\boxed{\tan\theta=\frac{v^2}{rg}}.$$

This relation assumes a horizontal circle at constant height. If the aircraft accelerates downwards, the vertical balance equation no longer applies.

The same component method works for a car on a banked road **when friction is negligible**: replace lift with the normal reaction and use the banking angle to the horizontal. With friction present, include friction in the force equations.

## Measurements and Graphs

To measure the period of steady circular motion, time several complete revolutions past a fixed marker. Divide the total time by the number of revolutions. Repeat and take a mean. This reduces the percentage uncertainty caused by reaction time. Check that the speed stays steady.

Measure the radius from the axis to the centre of the moving object. Measuring the diameter and using it as the radius gives incorrect results.

For an investigation of the inward resultant force:

| Graph | Keep constant | Expected shape and gradient |
|---|---|---|
| $F$ against $v^2$ | Mass $m$ and radius $r$ | Straight line through the origin; gradient $m/r$ |
| $F$ against $r$ | Mass $m$ and angular speed $\omega$ | Straight line through the origin; gradient $m\omega^2$ |

The second graph is not a test of $F\propto1/r$ at fixed linear speed. State which speed you control. A graph of $F$ against $v$ at fixed $m,r$ is a curve, not a straight line.

These are circular motion investigation skills. Circular motion is not a separate named required practical in this specification.

## Practice

Use the model stated in each question. Give a direction when asked for acceleration or force. Try each question before opening its hint.

### Question 1: speed and velocity

Explain why a particle moving in a circle at constant speed has acceleration. State the directions of velocity and acceleration. If the inward force is removed and no other force acts, describe its subsequent motion.

<details markdown="1">
<summary>Hint</summary>

Velocity includes direction. Use Newton's first law after the force is removed.

</details>

<details markdown="1">
<summary>Solution</summary>

The direction of velocity changes, so the particle accelerates. Velocity is tangent to the circle and acceleration is towards the centre. With no resultant force, the particle continues in a straight line along the tangent at constant velocity.

"It accelerates because it moves" does not explain the change in velocity. "It flies outwards" does not state the tangent direction.

</details>

### Question 2: rotations and radius

A disc rotates at $90$ revolutions per minute. Point A is $0.20\,\mathrm m$ from its axis and point B is $0.40\,\mathrm m$ from its axis. Find the angular speed, the speed and acceleration of A, and the speed and acceleration of B.

<details markdown="1">
<summary>Hint</summary>

Both points have the same angular speed. Use $v=r\omega$ and $a=r\omega^2$.

</details>

<details markdown="1">
<summary>Solution</summary>

$$\omega=2\pi\left(\frac{90}{60}\right)=3\pi\approx9.4\,\mathrm{rad\,s^{-1}}.$$

$$v_A=0.20(3\pi)\approx1.9\,\mathrm{m\,s^{-1}}.$$

$$a_A=0.20(3\pi)^2\approx18\,\mathrm{m\,s^{-2}}.$$

$$v_B=2v_A\approx3.8\,\mathrm{m\,s^{-1}}.$$

$$a_B=2a_A\approx36\,\mathrm{m\,s^{-2}}.$$

Both accelerations point towards the axis. The period is $2/3\,\mathrm s$. Doubling the radius doubles acceleration here because angular speed is fixed.

</details>

### Question 3: a force limit

A $0.30\,\mathrm{kg}$ particle moves on a smooth horizontal table in a circle of radius $0.80\,\mathrm m$. A horizontal string supplies the inward force. Its maximum tension is $6.0\,\mathrm N$.

Find the maximum speed and angular speed. At the same speed, would a radius of $0.40\,\mathrm m$ be possible with this string?

<details markdown="1">
<summary>Hint</summary>

Use the maximum tension in $F_T=mv^2/r$. Then check the force required at the smaller radius.

</details>

<details markdown="1">
<summary>Solution</summary>

$$v_{\max}=\sqrt{\frac{6.0(0.80)}{0.30}}=\boxed{4.0\,\mathrm{m\,s^{-1}}}.$$

$$\omega_{\max}=\frac{4.0}{0.80}=\boxed{5.0\,\mathrm{rad\,s^{-1}}}.$$

At the smaller radius:

$$F_T=\frac{0.30(4.0)^2}{0.40}=12\,\mathrm N.$$

This exceeds $6.0\,\mathrm N$, so the string cannot sustain that motion. At fixed speed, halving the radius doubles the required force.

</details>

### Question 4: crest or dip?

A $600\,\mathrm{kg}$ car moves at $10\,\mathrm{m\,s^{-1}}$. Find the normal reaction (a) at a hill crest of radius $25\,\mathrm m$ and (b) at the bottom of a dip of the same radius. Find the maximum speed at the crest. What would happen at the crest at $18\,\mathrm{m\,s^{-1}}$?

<details markdown="1">
<summary>Hint</summary>

The centre is below the crest and above the dip. Check the sign of the calculated reaction at $18\,\mathrm{m\,s^{-1}}$.

</details>

<details markdown="1">
<summary>Solution</summary>

The weight is $5886\,\mathrm N$ and the required radial resultant at $10\,\mathrm{m\,s^{-1}}$ is $2400\,\mathrm N$.

At the crest, $N=5886-2400=3486\,\mathrm N\approx\boxed{3.5\times10^3\,\mathrm N}$.

At the dip, $N=5886+2400=8286\,\mathrm N\approx\boxed{8.3\times10^3\,\mathrm N}$.

Both reactions act upwards. The crest contact limit is:

$$v_{\max}=\sqrt{9.81(25)}\approx\boxed{16\,\mathrm{m\,s^{-1}}}.$$

At $18\,\mathrm{m\,s^{-1}}$, the circular-path equation would give $N=5886-7776=-1890\,\mathrm N$. A negative reaction is not possible for this contact. The car loses contact, and the assumed circular path no longer applies.

</details>

### Question 5: an aircraft turning

**Adapted from OxfordAQA PH03, January 2020, Question 3.**

An aircraft of mass $1100\,\mathrm{kg}$ turns in a horizontal circle at constant height. Its wings make an angle of $25^\circ$ to the horizontal, so its lift is $25^\circ$ to the vertical. The radius is $900\,\mathrm m$.

1. Find the lift and the horizontal resultant force.
2. Calculate the speed.
3. The angle is increased while the speed and magnitude of lift remain unchanged. State and explain the initial changes in the motion.

<details markdown="1">
<summary>Hint</summary>

Use vertical balance first. For part 3, compare both components of the unchanged lift with their original values.

</details>

<details markdown="1">
<summary>Solution</summary>

The vertical component of lift balances the weight:

$$L\cos25^\circ=1100(9.81).$$

$$L=\frac{10791}{\cos25^\circ}\approx\boxed{1.2\times10^4\,\mathrm N}.$$

The horizontal component supplies the centripetal force:

$$F=L\sin25^\circ\approx\boxed{5.0\times10^3\,\mathrm N}.$$

Using unrounded values:

$$v=\sqrt{\frac{Fr}{m}}=\sqrt{rg\tan25^\circ}.$$

$$v\approx\boxed{64\,\mathrm{m\,s^{-1}}}.$$

For the increased angle, $L\cos\theta$ decreases and is now less than the weight. The aircraft accelerates downwards and begins to lose height. Meanwhile, $L\sin\theta$ increases. At the same speed, the greater horizontal inward force gives a smaller horizontal turning radius.

Do not say that lift increases: its magnitude is held constant in this change. Do not use vertical balance to describe the motion after the angle changes.

**Check:** lift is greater than the weight, so it is about $12\,\mathrm{kN}$, not $1.2\,\mathrm{kN}$. This agrees with the approximate value stated in the original question.

</details>

### Question 6: a rotating space station

**Adapted from OxfordAQA PH03, June 2024, Question 1.**

A person stands against the outer wall inside a rotating space station. The radius of the person's circular path is taken as $150\,\mathrm m$ and the centripetal acceleration is $9.81\,\mathrm{m\,s^{-2}}$. The person's linear momentum is $2500\,\mathrm{kg\,m\,s^{-1}}$. Ignore gravitational forces from other bodies.

1. State which force supplies the centripetal force and explain how the station simulates gravity.
2. Calculate the person's speed and mass.
3. The person releases a ball. Describe and explain its motion relative to an observer outside the station in an inertial frame, before it hits anything.

<details markdown="1">
<summary>Hint</summary>

The wall exerts a contact force. Use $a=v^2/r$ before $p=mv$. After release, does the wall still exert a force on the ball?

</details>

<details markdown="1">
<summary>Solution</summary>

The wall exerts a normal reaction towards the station's centre. This reaction supplies the centripetal force. The person feels the contact force from the wall, as a person standing on Earth feels the reaction from the ground. The rotation does not create a gravitational field.

$$v=\sqrt{ar}=\sqrt{9.81(150)}.$$

$$v\approx38.4\,\mathrm{m\,s^{-1}}.$$

$$m=\frac{p}{v}=\frac{2500}{\sqrt{9.81(150)}}\approx\boxed{65\,\mathrm{kg}}.$$

After release, the ball has no resultant force in the stated model. By Newton's first law, it moves in a straight line at constant velocity, along the tangent at release, relative to the outside observer. It does not keep moving in a circle because there is no longer an inward force.

The description is for the outside inertial observer. A person rotating with the station can see a different path relative to the station.

</details>

## Quick Reference

| Use | Equation and condition |
|---|---|
| Period and frequency | $f=\dfrac1T$; one full revolution |
| Angular speed | $\omega=2\pi f=\dfrac{2\pi}{T}$; radians per second |
| Linear speed | $v=r\omega$; radius from the axis |
| Inward acceleration | $a=\dfrac{v^2}{r}=r\omega^2$ |
| Radial force equation | $\text{inward resultant}=\dfrac{mv^2}{r}$ |
| Hill crest | $mg-N=\dfrac{mv^2}{r}$; $N\geq0$ for contact |
| Bottom of a dip | $N-mg=\dfrac{mv^2}{r}$ |
| Level aircraft turn | $L\cos\theta=mg$, $L\sin\theta=\dfrac{mv^2}{r}$ |

Before moving on, check that you can explain changing velocity, convert revolutions per minute, identify the actual inward force and distinguish the crest contact limit from the taut-string limit.

[Next lesson: Simple Harmonic Motion](/alevel/a2-physics/simple-harmonic-motion/) · [PH03 course index](/alevel/a2-physics/) · [PH03 reference notes](/alevel/a2-physics/quick-reference/)

<details markdown="1">
<summary>Sources and exam wording</summary>

This lesson follows Section 3.6.1 of the [OxfordAQA Physics specification](https://www.oxfordaqa.com/wp-content/uploads/2022/08/oxfordaqa-a-level-physics-specification.pdf). The derivation of $a=v^2/r$ is not examined. Force-component and contact problems apply this section together with AS forces and Newton's laws.

Textbook support: Jim Breithaupt, *Oxford International AQA Examinations: International A Level Physics*, Chapter 15, printed pp. 273–284. The teacher's AS handouts inform the use of short explanations, diagrams, checkpoints and graph skills.

The aircraft and space station practice is adapted from OxfordAQA PH03 January 2020 Question 3 and June 2024 Question 1. Explanations were checked against their official mark schemes. Calculations were independently verified; they are not copied from textbook answer lists.

</details>
