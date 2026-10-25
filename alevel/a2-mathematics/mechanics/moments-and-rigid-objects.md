---
title: Moments and Rigid Objects in Equilibrium
layout: subjects
mathjax: true
grade: a2
subject: m2
permalink: /alevel/a2-mathematics/mechanics/moments-and-rigid-objects/
toc_headings: h2
study_page: true
reading_layout: true
---

[A2 Mechanics](/alevel/a2-mathematics/mechanics/) · M2.3 Statics and forces

Push a door close to its hinges, then imagine the same push near the handle. The second push turns it more easily. The force has not changed; where its line acts has. This lesson asks **how to balance both forces and their turning effects**.

- **Learning:** start with [moments](#the-moment-of-a-force), then study [parallel forces](#equilibrium-under-parallel-forces), [tipping](#a-beam-about-to-tip) and [rigid-object equilibrium](#equilibrium-of-a-rigid-object-in-a-plane).
- **By the end:** calculate signed moments, choose a useful moment point, find support forces and decide whether contact, friction or a string makes the answer possible.
- **Revision:** try [practice](#practice) with the solutions closed. Check the perpendicular distances, rotation signs and contact conditions.

Textbook: Chapter 11, Section 11.4 (printed pp. 170–179). This lesson uses the textbook terms *moment*, *line of action*, *sense of rotation*, *normal reaction* and *limiting equilibrium*.

You need force diagrams, simple equations and right-triangle components. Repair a gap at [forces on one object](/alevel/a2-mathematics/mechanics/forces-equilibrium-and-friction/#force-diagrams), [components](/alevel/a2-mathematics/mechanics/forces-equilibrium-and-friction/#the-resultant-of-coplanar-forces) or [actual and limiting friction](/alevel/a2-mathematics/mechanics/forces-equilibrium-and-friction/#friction-and-limiting-equilibrium).
{:.lesson-meta}

We model each beam or ladder as a **rigid body**: it keeps its shape, so the distances between its points do not change. This allows one force diagram with definite distances. A **uniform rod** has constant mass per unit length, so its weight acts at the midpoint of the whole rod. **Light** means negligible mass, so omit its own weight. A non-uniform rod needs a stated or calculated weight position. These models do not predict bending, a broken support or the motion after a ladder has slipped.

Use $g=9.8\,\mathrm{m\,s^{-2}}$ unless another value is given. Keep exact values during calculations and give final numerical answers to three significant figures, or one decimal place for angles, unless asked otherwise.
{:.lesson-meta}

All worked examples and practice questions are self-written, not official past-paper questions. No official marks are assigned. The diagrams show directions and points of action; arrow lengths are not drawn to a common force scale.

## The Moment of a Force

The **moment** of a force measures its turning effect about a point. In a plane diagram, the axis of rotation passes through that point and is perpendicular to the diagram.

The chosen point is a **moment point**. It can be a real hinge, a support or simply a convenient point on your diagram; taking moments there does not assert that the body is actually turning about it. First imagine that point fixed and decide which way the force would turn the body.

$$\text{magnitude of moment}=Fd.$$

Here $F$ is the force magnitude and $d$ is the **perpendicular distance from the point to the line of action of the force**. The line of action is the straight line along which the force acts; extend it if needed. Moment is measured in **newton metres**, $\mathrm{N\,m}$.

Give both the magnitude and the **sense of rotation**: clockwise or anticlockwise. For signed calculations, choose one as positive and use it throughout. We use anticlockwise as positive unless stated otherwise.

| Situation | Moment about the chosen point |
|---|---|
| The force's line of action passes through the point | Zero, even when the force is non-zero |
| Force perpendicular to a rod, applied a distance $r$ from the point | Magnitude $Fr$ |
| Force at angle $\theta$ to the rod, applied a distance $r$ from the point | Magnitude $Fr\sin\theta$ |
| Several forces | Add their signed moments |

For an angled force, either use the full force with the perpendicular distance $r\sin\theta$, or use the perpendicular component $F\sin\theta$ with distance $r$. **Do not use both sine factors.**

To see the distance, draw a line from the moment point to the force's line of action **at a right angle**. This makes a triangle with hypotenuse $r$ and side $d$ opposite angle $\theta$, so $d=r\sin\theta$. For a vertical force on an inclined rod, this perpendicular is horizontal. If the rod makes angle $\alpha$ with the horizontal, the force applied a distance $r$ along the rod has lever arm $r\cos\alpha$. For a horizontal force the lever arm is the vertical height, $r\sin\alpha$. The direction of the force, rather than the appearance of the rod, decides which distance you need.

<div class="worked-example" markdown="1">

### Example 1: perpendicular distance and signs {#example-1-perpendicular-distance-and-signs}

**Question:** a horizontal rod extends $3\,\mathrm m$ to the right of $A$. A $10\,\mathrm N$ downward force acts $1\,\mathrm m$ from $A$, an $8\,\mathrm N$ upward force acts $2\,\mathrm m$ from $A$, and a $12\,\mathrm N$ force acts at the far end, directed downwards and to the right at $30^\circ$ to the rod. Find their resultant moment about $A$. **Self-written.**

![A horizontal rod with downward 10 N, upward 8 N and an angled 12 N force; the perpendicular distance from A to the angled force's line of action is shown](/assets/img/a2-math-mech/moment-perpendicular-distance.svg)

Taking anticlockwise as positive:

$$M_A=-10(1)+8(2)-12(3)\sin30^\circ.$$

$$M_A=-10+16-18=-12\,\mathrm{N\,m}.$$

The resultant moment is $\boxed{12\,\mathrm{N\,m}\text{ clockwise}}$.

**Check:** the perpendicular distance for the $12\,\mathrm N$ force is $3\sin30^\circ=1.5\,\mathrm m$. Using its vertical component gives the same moment: $-(12\sin30^\circ)(3)=-18\,\mathrm{N\,m}$. Its horizontal component acts along the rod and has zero moment about $A$.

**Common mistake:** using $12\times3$. The force is not perpendicular to the rod.

</div>

## Equilibrium Under Parallel Forces

For a rigid object in equilibrium under parallel coplanar forces, use:

$$\sum F=0,\qquad\sum M_A=0.$$

The first equation is in the direction of the forces. The second takes signed moments about a chosen point $A$.

Draw each force at its correct point of action. For a horizontal beam with vertical loads, the perpendicular distances are horizontal distances. Choose a support as the moment point to remove its unknown reaction from that equation.

This is a choice to simplify the algebra, not an extra physical assumption. The removed force still acts: its distance from that point is zero, so it makes no moment there. Put it back in the force equation. Keep the beam and any loads fixed to it as the named system, or show a load's downward force on the beam; do not count that same load twice.

Taking moments about the other support gives a useful check. You can also use the two moment equations to find the reactions, then check the total vertical force.

<div class="worked-example" markdown="1">

### Example 2: a beam with an overhang {#example-2-a-beam-with-an-overhang}

**Question:** a uniform horizontal beam $AB$ has length $6\,\mathrm m$ and weight $120\,\mathrm N$. It rests on small supports at $A$ and at $C$, where $AC=4\,\mathrm m$. A $40\,\mathrm N$ load acts at $B$. Find the upward reactions $R_A$ and $R_C$. **Self-written.**

The beam's weight acts $3\,\mathrm m$ from $A$. Take anticlockwise moments about $A$:

$$4R_C-120(3)-40(6)=0.$$

$$R_C=150\,\mathrm N.$$

Resolve vertically:

$$R_A+R_C=120+40,$$

$$\boxed{R_A=10\,\mathrm N,\qquad R_C=150\,\mathrm N}.$$

**Check:** moments about $C$ give $-10(4)+120(1)-40(2)=0$. Both reactions are positive, so both supports can push upwards on the beam.

**Common mistake:** using the midpoint of the support spacing for the beam's weight. A uniform beam's weight acts at the midpoint of the whole beam.

</div>

<div class="worked-example" markdown="1">

### Example 3: where the weight of a non-uniform rod acts {#example-3-where-the-weight-of-a-non-uniform-rod-acts}

**Question:** a non-uniform horizontal rod $AB$ has length $4\,\mathrm m$. It is supported by vertical forces of $35\,\mathrm N$ at $A$ and $15\,\mathrm N$ at $B$, with no other forces except its weight. Find its weight and the distance of its centre of mass from $A$. **Self-written.**

Resolve vertically to find the weight:

$$W=35+15=50\,\mathrm N.$$

Let the weight act at distance $x$ from $A$. Take moments about $A$:

$$15(4)-50x=0,$$

$$\boxed{x=1.2\,\mathrm m\text{ from }A}.$$

**Check:** anticlockwise moments about $B$ give $-35(4)+50(4-1.2)=0$. The centre of mass is closer to the end with the larger upward supporting force.

**Common mistake:** assuming the weight acts at the midpoint when the rod is non-uniform.

</div>

## A Beam About to Tip

A support underneath a beam can push upwards; it cannot pull downwards. If your equations give a negative upward reaction, that contact cannot maintain the assumed equilibrium.

When a beam is **about to tip** about one support, the reaction at the other support becomes zero. Take moments about the support which remains in contact. For a plank on a roof, the remaining contact is at the roof edge.

This condition concerns loss of contact. It does not mean that friction is limiting. If both tipping and sliding are possible, check each separately.

As an overhanging load grows, its turning effect transfers more of the required upward support towards the nearer edge. The remote support carries less until it carries nothing. At the boundary the beam is still in equilibrium; beyond it, a downward pull from that ordinary support would be needed. This is why **the disappearing contact has zero reaction**, while the remaining pivot usually carries the full weight.

<div class="worked-example" markdown="1">

### Example 4: the greatest load before tipping {#example-4-the-greatest-load-before-tipping}

**Question:** a uniform horizontal beam $AB$ has length $4\,\mathrm m$ and weight $80\,\mathrm N$. Small supports are at $A$ and at $C$, where $AC=3\,\mathrm m$. A downward load of weight $P$ acts at $B$. Find the greatest $P$ for equilibrium and the reactions at that value. **Self-written.**

![A uniform beam of length 4 m supported at A and C, with its 80 N weight at 2 m and a load P at the overhanging end B at 4 m](/assets/img/a2-math-mech/beam-tipping.svg)

Moments about $A$ and vertical force balance give

$$3R_C=80(2)+4P,$$

$$R_A+R_C=80+P.$$

Hence

$$R_C=\frac{160+4P}{3},\qquad R_A=\frac{80-P}{3}.$$

As $P$ increases, $R_A$ decreases. At the tipping limit, $R_A=0$:

$$\boxed{P_{\max}=80\,\mathrm N}.$$

The beam is about to turn clockwise about $C$, with

$$\boxed{R_A=0,\qquad R_C=160\,\mathrm N}.$$

**Check:** at the limit, moments about $C$ give $80(1)-80(1)=0$. For $0\leq P\leq80$, both reactions are non-negative. For $P>80$, the assumed reaction at $A$ would be negative, so the beam loses contact there.

</div>

## Equilibrium of a Rigid Object in a Plane

For general coplanar forces, use three conditions:

$$\sum F_x=0,\qquad\sum F_y=0,\qquad\sum M_A=0.$$

The first two balance the forces. The third balances their turning effects. Zero resultant force alone is not enough: two equal opposite forces on different parallel lines can still turn an object.

1. Draw all forces on the named object, at their correct points of action.
2. Choose perpendicular axes and a positive sense of rotation.
3. Take moments about a point which removes useful unknowns.
4. Resolve forces to find the remaining unknowns.
5. Check moments about a different point and check contact, tension and friction conditions.

Moment equations about different points are not always independent. Do not replace the two force equations by several moment equations about points on the same straight line and assume that this proves equilibrium.

### What each contact can do {#contact-forces}

Choose the force direction from the local surface or connection before using equations. These are **forces on the rod**. Equal and opposite forces on the wall or ground belong to another object's diagram.

| Connection | Force on the body and restriction |
| --- | --- |
| Smooth horizontal ground | Upward normal reaction; no horizontal friction |
| Smooth vertical wall | Horizontal reaction away from the wall; no wall friction |
| Rough surface | Normal reaction plus tangential friction; use this contact's own $R$ to test $F\leq\mu R$ |
| Small smooth peg beneath a straight rod | Force normal to the rod at contact, pushing it away from the peg |
| Light taut string | Tension along the string towards its other end; it can only pull |
| Smooth hinge | Two signed force components; no resisting moment, so the body is free to rotate there |

A normal reaction must push away from the surface. A negative value for its assumed outward magnitude means that this contact arrangement cannot hold the body. A negative **hinge component** simply reverses your chosen direction. For rough contacts, determine the required friction before testing its limit. Neither roughness nor the presence of another limiting contact makes every contact limiting.

<div class="worked-example" markdown="1">

### Example 5: a ladder against a smooth wall {#example-5-a-ladder-against-a-smooth-wall}

**Question:** a uniform ladder of length $5\,\mathrm m$ and weight $200\,\mathrm N$ rests at $60^\circ$ to the horizontal. Its foot $A$ is on rough horizontal ground and its top $B$ touches a smooth vertical wall to the left. Find the ground reaction $R$, wall reaction $S$, friction magnitude $F$ and least coefficient of friction needed. **Self-written.**

![A ladder at 60 degrees to horizontal ground, with ground reaction upwards and friction towards the wall at A, wall reaction to the right at B and weight at the midpoint](/assets/img/a2-math-mech/ladder-smooth-wall.svg)

The wall is smooth, so its reaction is horizontal. The foot tends to move away from the wall; friction at $A$ acts towards the wall.

Resolve vertically and horizontally:

$$R=200,\qquad F=S.$$

Take anticlockwise moments about $A$. This choice removes two unknown forces, $R$ and $F$, because both pass through $A$. The vertical weight needs its horizontal distance $2.5\cos60^\circ$; the horizontal wall force needs its vertical distance $5\sin60^\circ$:

$$200(2.5\cos60^\circ)-S(5\sin60^\circ)=0.$$

$$\boxed{S=F=\frac{100}{\sqrt3}\,\mathrm N\approx57.7\,\mathrm N}.$$

For equilibrium, $F\leq\mu R$. Therefore

$$\boxed{\mu_{\min}=\frac{F}{R}=\frac{1}{2\sqrt3}\approx0.289}.$$

**Check:** taking moments about $B$ gives

$$-F(5\sin60^\circ)-200(2.5\cos60^\circ)+R(5\cos60^\circ)=0.$$

If the actual coefficient is $0.4$, then $F<0.4R=80\,\mathrm N$: the ladder is in equilibrium, but friction is not limiting.

**Common mistake:** using an angle measured from the wall as if it were measured from the ground. These angles add to $90^\circ$.

</div>

<div class="worked-example" markdown="1">

### Example 6: a hinged rod and a string {#example-6-a-hinged-rod-and-a-string}

**Question:** a uniform horizontal rod $AB$ of length $4\,\mathrm m$ and weight $60\,\mathrm N$ is smoothly hinged to a wall at $A$. A $40\,\mathrm N$ load acts at $B$. A light string from the midpoint $C$ to a point on the wall above $A$ makes $30^\circ$ with the horizontal. Find its tension and the magnitude and direction of the hinge force on the rod. **Self-written.**

![A horizontal rod hinged at A, with a string pulling up and left at midpoint C, a 60 N weight at C, a 40 N load at B and assumed hinge components X right and Y up](/assets/img/a2-math-mech/hinged-rod-forces.svg)

A smooth hinge exerts a force but no resisting moment in this model. Let its components be $X$ to the right and $Y$ upwards. These are assumed positive directions, not restrictions on the hinge force.

Take moments about $A$ to remove both hinge components:

$$2T\sin30^\circ-60(2)-40(4)=0.$$

$$\boxed{T=280\,\mathrm N}.$$

Resolve horizontally and vertically:

$$X=T\cos30^\circ=140\sqrt3,$$

$$Y+T\sin30^\circ=60+40\quad\Rightarrow\quad Y=-40.$$

The hinge force acts to the right and **downwards**. Its magnitude is

$$\boxed{\sqrt{(140\sqrt3)^2+40^2}=20\sqrt{151}\,\mathrm N\approx246\,\mathrm N}.$$

Its angle below the positive horizontal is

$$\boxed{\tan^{-1}\left(\frac{40}{140\sqrt3}\right)\approx9.4^\circ}.$$

**Check:** the string has vertical component $140\,\mathrm N$. The downward hinge component $40\,\mathrm N$ and total weight $100\,\mathrm N$ balance it. Moments about $C$ give

$$(-2)(-40)+2(-40)=0.$$

**Common mistake:** rejecting a negative hinge component as loss of contact. A hinge can exert a force in either direction. A support which only pushes cannot.

</div>

<div class="worked-example" markdown="1">

### Example 7: a rod resting on a smooth peg {#example-7-a-rod-resting-on-a-smooth-peg}

**Question:** a uniform rod $AB$ of length $6\,\mathrm m$ and weight $80\,\mathrm N$ rests at $30^\circ$ to the horizontal. Its foot $A$ is on rough horizontal ground. A small smooth peg underneath the rod touches it at $C$, where $AC=4\,\mathrm m$. Find the contact forces and decide whether equilibrium is possible if the ground coefficient of friction is $0.8$. **Self-written.**

![A rod at 30 degrees to the horizontal resting on a smooth peg at C; the peg reaction is perpendicular to the rod, with ground reaction up, friction right and weight down](/assets/img/a2-math-mech/rod-smooth-peg.svg)

The peg is modelled as a point contact. Its reaction $S$ is perpendicular to the rod, directed upwards and to the left. There is no friction at the peg. The ground friction acts to the right.

Here normal means normal to the **rod touching the peg**, not vertical. The rod is at $30^\circ$ to horizontal, so this upward normal is at $30^\circ$ to vertical: its upward component is $S\cos30^\circ$ and its leftward component is $S\sin30^\circ$.

Take moments about $A$. The peg reaction is perpendicular to $AC$:

$$4S-80(3\cos30^\circ)=0,$$

$$\boxed{S=30\sqrt3\,\mathrm N\approx52.0\,\mathrm N}.$$

Resolve vertically and horizontally:

$$R+S\cos30^\circ=80\quad\Rightarrow\quad\boxed{R=35\,\mathrm N},$$

$$\boxed{F=S\sin30^\circ=15\sqrt3\,\mathrm N\approx26.0\,\mathrm N}.$$

The contacts have positive normal reactions. Also,

$$F=15\sqrt3<0.8(35)=28\,\mathrm N.$$

Equilibrium is possible, and ground friction is not limiting. The least coefficient would be $\frac{3\sqrt3}{7}\approx0.742$.

**Check:** moments about $C$ give

$$-4R\cos30^\circ+4F\sin30^\circ+80\cos30^\circ=0.$$

**Common mistake:** treating the peg reaction as vertical, or multiplying it by $4\cos30^\circ$. It is already perpendicular to the rod, so its moment about $A$ is $4S$.

</div>

<div class="worked-example" markdown="1">

### Example 8: friction at both ends of a ladder {#example-8-friction-at-both-ends-of-a-ladder}

**Question:** a uniform ladder of length $4\,\mathrm m$ and weight $100\,\mathrm N$ rests with its top against a rough wall to the left and its foot on rough horizontal ground. It is just about to slip, with the top moving down and the foot moving away from the wall. Friction is limiting at both contacts. The ground coefficient is $\frac14$ and the wall coefficient is $\frac13$. Find the contact forces and the angle $\alpha$ to the horizontal. **Self-written.**

At the ground, let the reaction be $R$ upwards and friction $F$ towards the wall. At the wall, let the reaction be $S$ to the right and friction $G$ upwards. The two limiting conditions use **different normal reactions**:

$$F=\frac14R,\qquad G=\frac13S.$$

Resolve horizontally and vertically:

$$S=F=\frac14R,\qquad R+G=100.$$

Therefore

$$\boxed{R=\frac{1200}{13}\,\mathrm N\approx92.3\,\mathrm N},$$

$$\boxed{S=F=\frac{300}{13}\,\mathrm N\approx23.1\,\mathrm N},$$

$$\boxed{G=\frac{100}{13}\,\mathrm N\approx7.69\,\mathrm N}.$$

Take moments about the foot. Both wall forces have clockwise moments:

$$100(2\cos\alpha)-S(4\sin\alpha)-G(4\cos\alpha)=0.$$

Divide by $4\cos\alpha$ and rearrange:

$$\tan\alpha=\frac{50-G}{S}=\frac{11}{6}.$$

$$\boxed{\alpha\approx61.4^\circ}.$$

**Check:** $R+G=100$, $F=S$, and both normal reactions are positive. The angle to the wall is $90^\circ-\alpha\approx28.6^\circ$. Substitution in the moment equation gives zero resultant moment.

**Common mistake:** setting $R=100$ when the wall is rough. Upward wall friction supports part of the weight. Use both limiting equalities here because both contacts are explicitly stated to be limiting; rough contact alone is not enough.

</div>

## Practice

Try each question before opening the hint. In every solution, check a different moment point or the physical conditions as well as the algebra.

<div class="lesson-check" markdown="1">

### Q1: Forces on a rod {#q1-an-inclined-rod}

**Question:** A rod $OB$ of length $2\,\mathrm m$ extends upwards and to the right at $30^\circ$ to the horizontal. A $12\,\mathrm N$ downward force acts at $B$, a $10\,\mathrm N$ horizontal force to the right acts at the midpoint, and a $20\,\mathrm N$ force acts along the rod at $B$, away from $O$. Find the resultant moment about $O$. **Self-written.**

<details markdown="1">
<summary>Hint</summary>

For a vertical force, use the horizontal distance. For a horizontal force, use the vertical distance. Which force's line of action passes through $O$?

</details>

<details markdown="1">
<summary>Solution and check</summary>

Taking anticlockwise as positive,

$$M_O=-12(2\cos30^\circ)-10(1\sin30^\circ)+0.$$

The resultant moment has magnitude

$$\boxed{(12\sqrt3+5)\,\mathrm{N\,m}}.$$

This is about $25.8\,\mathrm{N\,m}$, clockwise.

**Check:** both the downward force at $B$ and the rightward force above $O$ turn the rod clockwise. The $20\,\mathrm N$ force acts along a line through $O$ and has zero moment.

**Repair and retry:** return to [the relevant explanation](#the-moment-of-a-force) and correct the point of action, direction or component mass responsible for the error. Close this solution, then attempt [a different task on the same goal](#moment-retry); include the reasoning and condition checks.

</details>

</div>

<div class="lesson-check" markdown="1">

### Q2: A light beam {#q2-a-light-beam}

**Question:** A light horizontal beam of length $5\,\mathrm m$ rests on supports at its ends $A$ and $B$. Downward loads of $30\,\mathrm N$ and $20\,\mathrm N$ act $1\,\mathrm m$ and $4\,\mathrm m$ from $A$. Find both reactions. **Self-written.**

<details markdown="1">
<summary>Hint</summary>

Light means the beam's own weight is negligible. Take moments about $A$, then resolve vertically.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$5R_B=30(1)+20(4)\quad\Rightarrow\quad R_B=22\,\mathrm N.$$

$$\boxed{R_A=28\,\mathrm N,\qquad R_B=22\,\mathrm N}.$$

**Check:** the reactions sum to $50\,\mathrm N$. Moments about $B$ give $-28(5)+30(4)+20(1)=0$. Both contacts can push upwards.

**Repair and retry:** return to [the relevant explanation](#equilibrium-under-parallel-forces) and correct the point of action, direction or component mass responsible for the error. Close this solution, then attempt [a different task on the same goal](#support-retry); include the reasoning and condition checks.

</details>

</div>

<div class="lesson-check" markdown="1">

### Q3: A load at A {#q3-tipping-at-the-other-end}

**Question:** A uniform horizontal plank $AB$ of length $6\,\mathrm m$ and weight $90\,\mathrm N$ rests on small supports $C$ and $D$, where $AC=1\,\mathrm m$ and $AD=5\,\mathrm m$. A downward load of weight $P$ is placed at $A$. Find both reactions when $P=100\,\mathrm N$, then find the greatest possible $P$ before tipping. State the pivot at the tipping limit. **Self-written.**

<details markdown="1">
<summary>Hint</summary>

Take moments about $C$. The load at $A$ has the opposite turning effect to the plank's weight. Which reaction decreases as $P$ increases?

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$4R_D+P(1)-90(2)=0,$$

$$R_D=45-\frac P4,\qquad R_C=90+P-R_D=45+\frac{5P}{4}.$$

At $P=100\,\mathrm N$,

$$\boxed{R_C=170\,\mathrm N,\qquad R_D=20\,\mathrm N}.$$

At the tipping limit, $R_D=0$, so $\boxed{P_{\max}=180\,\mathrm N}$. The plank is about to turn anticlockwise about $C$, with $R_C=270\,\mathrm N$.

**Check:** moments about $D$ give $-4R_C+2(90)+5P=0$. Both reactions are non-negative for $0\leq P\leq180$.

**Repair and retry:** return to [the relevant explanation](#a-beam-about-to-tip) and correct the point of action, direction or component mass responsible for the error. Close this solution, then attempt [a different task on the same goal](#retry-change-the-pull-and-the-contact); include the reasoning and condition checks.

</details>

</div>

<div class="lesson-check" markdown="1">

### Q4: A ladder at an unknown angle {#q4-the-least-ladder-angle-for-equilibrium}

**Question:** A uniform ladder of length $4\,\mathrm m$ and weight $120\,\mathrm N$ has its top against a smooth vertical wall to the left. Its foot rests on rough horizontal ground with coefficient of friction $\frac14$. Find the least angle $\alpha$ to the horizontal for equilibrium, and all contact forces at this limiting angle. Also give the angle to the wall. **Self-written.**

<details markdown="1">
<summary>Hint</summary>

Use $R=120$, $F=S$ and moments about the foot. Apply $F\leq\frac14R$ before finding the limiting angle.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$120(2\cos\alpha)=S(4\sin\alpha),$$

$$S=F=60\cot\alpha.$$

Since $F\leq30$ and $0<\alpha<90^\circ$,

$$\tan\alpha\geq2.$$

$$\boxed{\alpha_{\min}=\tan^{-1}2\approx63.4^\circ}.$$

The angle to the wall is $\boxed{26.6^\circ}$. At the limiting angle, $\boxed{R=120\,\mathrm N,\quad F=S=30\,\mathrm N}$.

**Check:** at a larger angle to the ground, $\cot\alpha$ is smaller, so less friction is required. The limiting friction remains $\frac14(120)=30\,\mathrm N$.

**Repair and retry:** return to [the relevant explanation](#example-5-a-ladder-against-a-smooth-wall) and correct the point of action, direction or component mass responsible for the error. Close this solution, then attempt [a different task on the same goal](#q9-wall-and-string); include the reasoning and condition checks.

</details>

</div>

<div class="lesson-check" markdown="1">

### Q5: A person on a ladder {#q5-a-person-climbing-a-ladder}

**Question:** A uniform ladder of length $5\,\mathrm m$ and weight $100\,\mathrm N$ rests at $60^\circ$ to the horizontal, against a smooth wall to the left. The coefficient of friction at the ground is $0.3$. A person of weight $500\,\mathrm N$ stands at distance $x$ along the ladder from its foot. Model the person as a particle and assume the ladder remains rigid. Find the greatest $x$ for equilibrium. Decide whether equilibrium is possible at $x=2\,\mathrm m$ and $x=3\,\mathrm m$. **Self-written.**

<details markdown="1">
<summary>Hint</summary>

The ground reaction supports both weights. In the moment equation, the person's weight has perpendicular distance $x\cos60^\circ$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$R=600,\qquad F=S.$$

Moments about the foot give

$$100(2.5\cos60^\circ)+500x\cos60^\circ=S(5\sin60^\circ).$$

$$S=\frac{250+500x}{5\sqrt3}.$$

The friction limit is $0.3(600)=180\,\mathrm N$. At the greatest distance,

$$\frac{250+500x}{5\sqrt3}=180.$$

$$\boxed{x_{\max}=1.8\sqrt3-0.5\approx2.62\,\mathrm m}.$$

At $x=2$, $F=\frac{250}{\sqrt3}\approx144\,\mathrm N<180\,\mathrm N$, so equilibrium is possible. At $x=3$, $F=\frac{350}{\sqrt3}\approx202\,\mathrm N>180\,\mathrm N$, so equilibrium is impossible with the stated contacts.

**Check:** $0<x_{\max}<5$, so the limit occurs before the person reaches the top. Increasing $x$ increases the moment of the person's weight and the friction required.

**Repair and retry:** return to [the relevant explanation](#example-5-a-ladder-against-a-smooth-wall) and correct the point of action, direction or component mass responsible for the error. Close this solution, then attempt [a different task on the same goal](#retry-change-the-pull-and-the-contact); include the reasoning and condition checks.

</details>

</div>

<div class="lesson-check" markdown="1">

### Q6: A hinged rod {#q6-the-resultant-hinge-force}

**Question:** A uniform horizontal rod $AB$ of length $3\,\mathrm m$ and weight $40\,\mathrm N$ is smoothly hinged at $A$. A $20\,\mathrm N$ load acts $2\,\mathrm m$ from $A$. A light string at $B$ pulls upwards and towards a point on the wall above $A$, making angle $\theta$ with the horizontal, where $\tan\theta=\frac34$. Find the tension and the magnitude and direction of the hinge force on the rod. **Self-written.**

<details markdown="1">
<summary>Hint</summary>

Use $\sin\theta=\frac35$ and $\cos\theta=\frac45$. Take moments about the hinge, then find its horizontal and vertical components.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$3T\left(\frac35\right)=40(1.5)+20(2),$$

$$\boxed{T=\frac{500}{9}\,\mathrm N\approx55.6\,\mathrm N}.$$

With $X$ to the right and $Y$ upwards,

$$X=\frac45T=\frac{400}{9},\qquad Y=60-\frac35T=\frac{80}{3}.$$

The hinge force has magnitude

$$\boxed{\sqrt{X^2+Y^2}=\frac{80\sqrt{34}}{9}\,\mathrm N\approx51.8\,\mathrm N}$$

and acts at angle $\boxed{\tan^{-1}\left(\frac35\right)\approx31.0^\circ}$ above the horizontal to the right.

**Check:** horizontal forces cancel, and $\frac{80}{3}+\frac{100}{3}=60$ vertically. Moments about $B$ give $-3\left(\frac{80}{3}\right)+40(1.5)+20(1)=0$.

**Repair and retry:** return to [the relevant explanation](#example-6-a-hinged-rod-and-a-string) and correct the point of action, direction or component mass responsible for the error. Close this solution, then attempt [a different task on the same goal](#contact-retry); include the reasoning and condition checks.

</details>

</div>

<div class="lesson-check" markdown="1">

### Q7: A rod and two contacts {#q7-checking-a-smooth-peg-model}

**Question:** A uniform rod of length $6\,\mathrm m$ and weight $80\,\mathrm N$ rests with its foot on rough horizontal ground and a small smooth peg underneath the rod at distance $4\,\mathrm m$ from its foot. The ground coefficient of friction is $0.5$. Find the required contact forces when the rod is at $10^\circ$ and at $30^\circ$ to the horizontal. Decide whether equilibrium is possible in each case. **Self-written.**

<details markdown="1">
<summary>Hint</summary>

For angle $\alpha$, the peg reaction is perpendicular to the rod. First find it using moments about the foot, then check $R\geq0$ and $F\leq0.5R$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$4S=80(3\cos\alpha),\qquad S=60\cos\alpha.$$

$$R=80-60\cos^2\alpha,\qquad F=60\sin\alpha\cos\alpha.$$

At $10^\circ$,

$$\boxed{\begin{aligned}S&\approx59.1\,\mathrm N,\\ R&\approx21.8\,\mathrm N,\\ F&\approx10.3\,\mathrm N.\end{aligned}}$$

Using unrounded values, the required friction is about $10.2606\,\mathrm N$ and its limit is about $10.9046\,\mathrm N$. The required force is smaller, so equilibrium is possible.

At $30^\circ$,

$$\boxed{\begin{aligned}S&=30\sqrt3\,\mathrm N,\\ R&=35\,\mathrm N,\\ F&=15\sqrt3\,\mathrm N.\end{aligned}}$$

The required friction is about $26.0\,\mathrm N$, greater than its limit of $0.5R=17.5\,\mathrm N$, so equilibrium is impossible.

**Check:** both cases have positive normal reactions. Failure in the second case comes from insufficient friction, not loss of normal contact. The expressions satisfy $R+S\cos\alpha=80$ and $F=S\sin\alpha$.

**Repair and retry:** return to [the relevant explanation](#example-7-a-rod-resting-on-a-smooth-peg) and correct the point of action, direction or component mass responsible for the error. Close this solution, then attempt [a different task on the same goal](#q9-wall-and-string); include the reasoning and condition checks.

</details>

</div>

<div class="lesson-check" markdown="1">

### Q8: A ladder at two surfaces {#q8-two-limiting-contacts}

**Question:** A uniform ladder of weight $156\,\mathrm N$ touches a rough vertical wall to the left and rough horizontal ground. It is just about to slip with its top moving down and its foot moving away from the wall. Friction is limiting at both contacts. The ground coefficient is $\frac13$ and the wall coefficient is $\frac14$. Find both normal reactions, both friction forces and the angle to the horizontal. **Self-written.**

<details markdown="1">
<summary>Hint</summary>

Use ground friction $F=\frac13R$, wall friction $G=\frac14S$, horizontal balance $F=S$ and vertical balance $R+G=156$. The ladder length cancels in the moment equation.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$S=\frac13R,\qquad G=\frac14S=\frac{R}{12}.$$

$$R+\frac{R}{12}=156\quad\Rightarrow\quad\boxed{R=144\,\mathrm N}.$$

$$\boxed{S=48\,\mathrm N,\quad F=48\,\mathrm N,\quad G=12\,\mathrm N}.$$

For ladder length $L$, take moments about the foot and divide by $L\cos\alpha$:

$$78=S\tan\alpha+G.$$

$$\boxed{\tan\alpha=\frac{11}{8},\qquad\alpha\approx54.0^\circ}.$$

**Check:** $144+12=156$ vertically and $F=S=48$ horizontally. The moment condition gives $48\left(\frac{11}{8}\right)+12=78$. Friction acts towards the wall at the ground and upwards at the wall, opposing the stated slipping directions.

**Repair and retry:** return to [the relevant explanation](#example-8-friction-at-both-ends-of-a-ladder) and correct the point of action, direction or component mass responsible for the error. Close this solution, then attempt [a different task on the same goal](#q9-wall-and-string); include the reasoning and condition checks.

</details>

</div>

<div class="lesson-check" markdown="1">

### Q9: A rod held by a string {#q9-wall-and-string}

**Question:** A non-uniform rod of length $5\,\mathrm m$ and weight $100\,\mathrm N$ has its foot $A$ on smooth horizontal ground and its top $B$ against a rough vertical wall to the left. The rod makes an acute angle $\alpha$ with the ground, where $\sin\alpha=\frac45$ and $\cos\alpha=\frac35$. A horizontal string pulls the rod towards the wall with tension $20\,\mathrm N$, at a point $2\,\mathrm m$ vertically above the ground. Wall friction acts upwards and is limiting, with coefficient $\frac12$. Draw the forces, give the wall's normal reaction with a reason, and find the distance $d$ of the centre of mass along the rod from $A$. Find the ground reaction and check the model. Why can you not put the weight at the midpoint? **Self-written.**

<details markdown="1">
<summary>Hint</summary>

The ground is smooth, so it supplies no horizontal force. Preserve both wall forces in the moment equation. The string's lever arm about $A$ is its vertical height.

</details>

<details markdown="1">
<summary>Solution and check</summary>

On the rod, draw ground reaction $R$ up, weight $100\,\mathrm N$ down at the unknown point, string tension left, wall normal $S$ right and wall friction $H$ up. Horizontal balance gives $S=20\,\mathrm N$, because the wall normal and string are the only horizontal forces. Then

$$H=\frac12S=10\,\mathrm N,\qquad R+H=100,\qquad R=90\,\mathrm N.$$

About $A$, the weight and leftward string turn anticlockwise, whereas both wall forces turn clockwise:

$$100d\left(\frac35\right)+20(2)=20\left(5\cdot\frac45\right)+10\left(5\cdot\frac35\right).$$

$$60d+40=110,\qquad \boxed{d=\frac76\,\mathrm m\approx1.17\,\mathrm m}.$$

The weight's position is within the rod: $0<d<5$. Both normals are positive and the wall friction has exactly the stated limit. For another moment check about $B$, the ground force gives $90(3)=270$ anticlockwise, the string gives $20(4-2)=40$ clockwise and the weight gives $100(5-d)(3/5)=230$ clockwise. They balance. Non-uniform means that the midpoint rule is unavailable; here $d\neq2.5$.

If you added ground friction or forgot wall friction, revisit [contact forces](#contact-forces) and [the two-contact example](#example-8-friction-at-both-ends-of-a-ladder). Then use [the connection task](#contact-retry) with earlier answers closed. For an incorrect $d$, return to [moment distances](#the-moment-of-a-force) and try [the new support task](#support-retry).

</details>

</div>

## Independent Check {#independent-task-which-condition-fails-first}

<div class="lesson-check" markdown="1">

### A box on the ground {#box-check}

**Self-written task.** A uniform rigid box has weight $200\,\mathrm N$, a horizontal base of width $1.2\,\mathrm m$ and height $2\,\mathrm m$. It stands on rough horizontal ground with coefficient of friction $0.3$. A horizontal force $P$ to the right is applied at height $1.5\,\mathrm m$. It is increased slowly from zero. A student claims that the box remains in equilibrium at $P=70\,\mathrm N$ because the turning effect is too small to tip it. Assess the claim and determine the first loss of equilibrium. Model the ground contact by a resultant upward normal force acting somewhere within the base and a horizontal friction force at ground level. No other forces act. Choose and justify your method.

<details markdown="1">
<summary>Reasoning hint</summary>

Find the friction needed for force balance and the location of the normal resultant needed for moment balance. Both must be possible. At a tipping boundary, the normal resultant reaches an edge of the base.

</details>

<details markdown="1">
<summary>Feedback and check</summary>

Take the bottom-left corner as origin, with $x$ to the right. Let the normal resultant $N$ act at $(x,0)$, and let $F$ be the leftward friction magnitude. Force balance gives $N=200$ and $F=P$. Moments about the origin give

$$200x=200(0.6)+1.5P,\qquad x=0.6+\frac{1.5P}{200}.$$

Static contact requires both

$$0\leq x\leq1.2,\qquad F\leq0.3N.$$

The candidate tipping boundary is $P=80\,\mathrm N$, but the sliding boundary is $P=60\,\mathrm N$. Thus the first loss of equilibrium is **sliding**, with limiting equilibrium at $P=60\,\mathrm N$. At that point $x=1.05\,\mathrm m$, still within the base. The tipping value is a hypothetical boundary if sliding could be prevented; the stated box has already reached its sliding limit.

At $P=70\,\mathrm N$, the required normal position is $x=1.125\,\mathrm m$, but the required friction $70\,\mathrm N$ exceeds $60\,\mathrm N$. The student's moment check alone cannot establish equilibrium. If you set $F=0.3N$ at every value of $P$, revisit the distinction between required static friction and its maximum.

**English explanation to complete:** “The box cannot remain at rest because …, even though …”.

**Repair and retry:** return to [the relevant explanation](#a-beam-about-to-tip) and correct the point of action, direction or component mass responsible for the error. Close this solution, then attempt [a different task on the same goal](#retry-change-the-pull-and-the-contact); include the reasoning and condition checks.

</details>

</div>

<div class="lesson-check" markdown="1">

### Retry: Change the Pull and the Contact {#retry-change-the-pull-and-the-contact}

**Self-written task.** Use a box with the same dimensions and weight, but coefficient of friction $0.6$. A rope attached at its top-left corner pulls upwards and to the right at $30^\circ$ to the horizontal. Its tension $T$ is increased slowly from zero. Determine whether sliding or tipping occurs first, and check that contact is maintained up to that boundary. Treat the rope as light and the box as rigid. Use the same ground-contact model as above.

<details markdown="1">
<summary>Retry hint</summary>

The normal force is no longer the full weight. Resolve vertically, then compare a friction boundary with the moment condition about the bottom-right edge.

</details>

<details markdown="1">
<summary>Retry check</summary>

With the bottom-left corner as origin, the rope acts at $(0,2)$. Its upward component has zero moment about that corner. Force and moment balance require

$$N=200-\frac T2,\qquad F=\frac{\sqrt3}{2}T,\qquad xN=120+\sqrt3 T.$$

At the tipping boundary, $x=1.2$:

$$1.2\left(200-\frac T2\right)=120+\sqrt3 T,\qquad T_{\mathrm{tip}}=\frac{120}{\sqrt3+0.6}\approx51.5\,\mathrm N.$$

The candidate sliding boundary is

$$\frac{\sqrt3}{2}T=0.6\left(200-\frac T2\right),\qquad T_{\mathrm{slide}}=\frac{120}{\sqrt3/2+0.3}\approx103\,\mathrm N.$$

Tipping therefore occurs first. At its boundary, $N\approx174\,\mathrm N>0$ and $F\approx44.6\,\mathrm N<0.6N\approx105\,\mathrm N$. Before it, $x$ increases from $0.6$ to $1.2$ and $N$ remains positive. A calculation using $N=200$ would miss the rope's upward component. Comparing the two candidate limits is essential; the later one does not describe the subsequent motion.

**Repair and retry:** return to [the relevant explanation](#contact-forces) and correct the point of action, direction or component mass responsible for the error. Close this solution, then attempt [a different task on the same goal](#later-beam-check); include the reasoning and condition checks.

</details>

</div>

## Repair and Try Again {#repair-and-retry}

Use the task linked from your feedback, with earlier solutions closed. Record whether you needed a hint; an assisted answer is useful practice but is not evidence of independent mastery.

<div class="lesson-check" markdown="1">

### A moved force {#moment-retry}

**Question:** In a plane, a force $(0,10)\,\mathrm N$ acts at $(2,0)\,\mathrm m$. It is moved to $(2,3)\,\mathrm m$, keeping the same direction and magnitude on a rigid body. Find its moment about $O=(0,0)$ before and after the move. A student uses the new distance $\sqrt{13}\,\mathrm m$ as the lever arm. Assess this. A second force $(0,-10)\,\mathrm N$ now acts at $O$. Do the two forces establish equilibrium? Explain. **Self-written.**

<details markdown="1">
<summary>Hint</summary>

Extend the force's line in each position. The shortest distance from $O$ must be perpendicular to that line. Test both the resultant force and the resultant moment.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Both positions put the upward force on $x=2$, so the perpendicular distance remains $2\,\mathrm m$. Its moment is $20\,\mathrm{N\,m}$ anticlockwise in both positions. The student's distance joins the origin to the point of application; it is not perpendicular to the force. Moving a force along its line preserves its external force and moment effect on a rigid body, though it need not preserve internal stresses in a real body.

The downward force at $O$ has zero moment about $O$. The two forces add to zero but their total moment is still $20\,\mathrm{N\,m}$, so this is not equilibrium. Revisit [the perpendicular-distance triangle](#the-moment-of-a-force) or [the two equilibrium requirements](#equilibrium-of-a-rigid-object-in-a-plane) according to the error, then close this solution and redraw the two lines.

</details>

</div>

<div class="lesson-check" markdown="1">

### What the supports tell you {#support-retry}

**Question:** A non-uniform horizontal beam of length $4\,\mathrm m$ rests on small supports at its ends $A$ and $B$. A $20\,\mathrm N$ load is fixed at $B$. Measured upward support forces are $70\,\mathrm N$ at $A$ and $50\,\mathrm N$ at $B$. Find the beam's own weight and its centre of mass measured from $A$. Explain your choice of moment point and check a second point. **Self-written.**

<details markdown="1">
<summary>Hint</summary>

The beam and fixed load form the system. Their total weight is not the beam's own weight. One end is a useful moment point.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Vertical balance gives $W+20=70+50$, so the beam weighs $100\,\mathrm N$. Choose $A$ so that its reaction has zero lever arm, leaving one unknown position in the moment equation. With the beam's own centre at $x$,

$$50(4)-20(4)-100x=0,\qquad \boxed{x=1.2\,\mathrm m}.$$

About $B$, the load there also drops out and $100(4-1.2)-70(4)=0$. The contacts push upwards and $0<x<4$. If you used $120\,\mathrm N$ for the beam, you counted the attached load as part of its own mass. Return to [systems and support equations](#equilibrium-under-parallel-forces), then compare with [Q9](#q9-wall-and-string), where the weight position is also unknown but the contacts have changed.

</details>

</div>

<div class="lesson-check" markdown="1">

### A changed connection {#contact-retry}

**Question:** A uniform horizontal rod $AB$ has length $4\,\mathrm m$ and weight $60\,\mathrm N$. It is smoothly hinged at $A$ and has a $20\,\mathrm N$ load at $B$. A light string from its midpoint to a wall above $A$ pulls up and left at $30^\circ$ to the horizontal. Find the tension and signed hinge components, positive right and up. Could a smooth shelf underneath $A$, together with a smooth vertical stop to its left, supply the same support force? Explain using force directions. **Self-written.**

<details markdown="1">
<summary>Hint</summary>

Take moments about $A$, then use both force equations. Test the direction of each required component against the proposed contact.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$2T\sin30^\circ=60(2)+20(4),\qquad \boxed{T=200\,\mathrm N}.$$

$$\boxed{X=100\sqrt3\,\mathrm N},\qquad Y+100=80,\qquad\boxed{Y=-20\,\mathrm N}.$$

The hinge force is rightwards and downwards. This is allowed for a hinge. The shelf can only push upwards, while the stop can only push rightwards, so they cannot supply the required downward component. The original hinge equilibrium is possible; the substituted contact arrangement is not. Vertical balance checks as $100-20-60-20=0$, and moments about the midpoint give $(-2)(-20)+2(-20)=0$.

If you rejected the original hinge or accepted the shelf, return to [the contact restrictions](#contact-forces) and [Example 6](#example-6-a-hinged-rod-and-a-string). Next use [Q9](#q9-wall-and-string) to test directions without a hinge.

</details>

</div>

## Return after Centres of Mass {#later-check}

Go next to [Centres of Mass](/alevel/a2-mathematics/mechanics/centres-of-mass/). After that lesson, return here and attempt this task from a blank force diagram. Also complete the forces lesson's [wall check](/alevel/a2-mathematics/mechanics/forces-equilibrium-and-friction/#wall-check), then the mechanics index's [mixed problems](/alevel/a2-mathematics/mechanics/#mixed-problems) and [later review](/alevel/a2-mathematics/mechanics/#later-review).

<div class="lesson-check" markdown="1">

### A different load position {#later-beam-check}

**Question:** A light horizontal beam extends from $x=0$ to $x=6\,\mathrm m$ and rests on small supports at $x=1$ and $x=5\,\mathrm m$. A body of weight $80\,\mathrm N$ is fixed to it with its centre of mass at $x=2\,\mathrm m$. A variable downward load $P\geq0$ acts at $x=6\,\mathrm m$. Determine the full range of $P$ for rest, identify what happens at the boundary and explain why replacing the fixed body by a particle at its centre works here. **Self-written.**

<details markdown="1">
<summary>Hint</summary>

Keep the fixed body's weight and the variable load as separate forces. Every ordinary support must push rather than pull.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Let the upward reactions at $x=1$ and $x=5$ be $R_1$ and $R_5$. About $x=1$,

$$4R_5=80(1)+5P,\qquad R_5=20+\frac54P.$$

$$R_1=80+P-R_5=60-\frac14P.$$

Both can push when $\boxed{0\leq P\leq240\,\mathrm N}$. At $P=240\,\mathrm N$, $R_1=0$ and $R_5=320\,\mathrm N$; the beam is about to tip clockwise about $x=5$. Above this load the first support would have to pull down. About $x=5$, the check is $-4R_1+80(3)-P=0$.

In a uniform gravitational field, the body's total weight at its centre gives the same force and moment as its distributed weight. It does not mean the body is physically a particle. If you retained both the distributed weights and the replacement, remove the double count. For support or tipping errors, return to [parallel forces](#equilibrium-under-parallel-forces) or [loss of contact](#a-beam-about-to-tip), then do [the new support task](#support-retry) before revisiting this one later.

</details>

</div>

## Quick Reference

| Task | Method | Check |
|---|---|---|
| Moment of a force | Force magnitude × perpendicular distance to its line of action | Include clockwise or anticlockwise sense; use $\mathrm{N\,m}$ |
| Angled force on a rod | $Fr\sin\theta$, where $\theta$ is the angle between rod and force | Use one sine factor |
| Parallel forces in equilibrium | Resolve along the forces and take moments | Check moments about another point |
| General coplanar equilibrium | Two perpendicular force equations and one moment equation | Zero resultant force alone is not enough |
| Beam about to tip | Set the reaction at the contact being lost to zero | Take moments about the remaining support |
| Smooth wall | Reaction normal to the wall; no wall friction | For a vertical wall, reaction is horizontal |
| Smooth peg under a rod | Reaction perpendicular to the rod at the contact | Preserve its point of action |
| Smooth hinge | Two force components, no resisting moment | A negative component reverses its assumed direction |
| Static friction | Required $F\leq\mu R$ at each contact | Use equality only when that contact is limiting |

**After practice:** record whether an error came from the point of action, perpendicular distance, rotation sign or contact condition. Redraw the diagram and check the angle before repeating the question.

**You should be able to:** calculate signed moments, find supporting and hinge forces, identify a tipping limit, and check equilibrium of ladders and rods with friction.

## Sources and Scope {#sources-and-scope}

Scope: [OxfordAQA Mathematics 9660 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf), §3.5 M2.3. Assessment reference actually read: **9660/MA05 Unit M2, January 2025, Q5**, [Question Paper, pp.10–11](/assets/pdf/fx-cg50/references/oxfordaqa-ma05-2025-january-question-paper.pdf#page=10) and [Mark Scheme, Version 1.0 Final, p.11](/assets/pdf/fx-cg50/references/oxfordaqa-ma05-2025-january-mark-scheme.pdf#page=11). It connects a reason for the wall reaction with moments of a non-uniform rod. The stored paper and its paired scheme informed the explanation requirements; the tasks on this page remain self-written, without official marks.

The rounding convention at the start applies to this page's self-written tasks. In the January 2025 paper, calculator final answers default to two significant figures unless a question states otherwise. Follow the actual paper and question when attempting official work.

**Learning path:** [Previous: Forces, Equilibrium and Friction](/alevel/a2-mathematics/mechanics/forces-equilibrium-and-friction/) · [Mechanics topic index](/alevel/a2-mathematics/mechanics/) · [Next: Centres of Mass](/alevel/a2-mathematics/mechanics/centres-of-mass/).
