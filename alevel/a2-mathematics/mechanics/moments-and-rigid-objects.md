---
title: Moments and Rigid Objects in Equilibrium
layout: subjects
mathjax: true
grade: a2
subject: m2
permalink: /alevel/a2-mathematics/mechanics/moments-and-rigid-objects/
toc_headings: h2
study_page: true
---

[A2 Mechanics](/alevel/a2-mathematics/mechanics/) · M2.3 Statics and forces

Find the turning effect of a force. Use force equations and a moment equation to solve problems involving beams, ladders and hinged rods. Check whether the calculated forces are possible in the model.

- **Learning:** start with [moments](#the-moment-of-a-force), then study [parallel forces](#equilibrium-under-parallel-forces), [tipping](#a-beam-about-to-tip) and [rigid-object equilibrium](#equilibrium-of-a-rigid-object-in-a-plane).
- **Homework help:** choose a point through which several unknown forces act. Their moments about that point are zero.
- **Revision:** try [practice](#practice) with the solutions closed. Check the perpendicular distances, rotation signs and contact conditions.

Textbook: Chapter 11, Section 11.4 (printed pp. 170–179). This lesson uses the textbook terms *moment*, *line of action*, *sense of rotation*, *normal reaction* and *limiting equilibrium*.

**Before you start:** review [Forces, Equilibrium and Friction](/alevel/a2-mathematics/mechanics/forces-equilibrium-and-friction/). A uniform rod's weight acts at its midpoint; a light rod has negligible weight. Use $g=9.8\,\mathrm{m\,s^{-2}}$ unless another value is given. Keep exact values during calculations and give final numerical answers to three significant figures, or one decimal place for angles, unless asked otherwise.

All worked examples and practice questions are self-written, not official past-paper questions. No official marks are assigned. The diagrams show directions and points of action; arrow lengths are not drawn to a common force scale.

## The Moment of a Force

The **moment** of a force measures its turning effect about a point. In a plane diagram, the axis of rotation passes through that point and is perpendicular to the diagram.

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

### Example 1: perpendicular distance and signs

**Question:** a horizontal rod extends $3\,\mathrm m$ to the right of $A$. A $10\,\mathrm N$ downward force acts $1\,\mathrm m$ from $A$, an $8\,\mathrm N$ upward force acts $2\,\mathrm m$ from $A$, and a $12\,\mathrm N$ force acts at the far end, directed downwards and to the right at $30^\circ$ to the rod. Find their resultant moment about $A$.

![A horizontal rod with downward 10 N, upward 8 N and an angled 12 N force; the perpendicular distance from A to the angled force's line of action is shown](/assets/img/a2-math-mech/moment-perpendicular-distance.svg)

Taking anticlockwise as positive:

$$M_A=-10(1)+8(2)-12(3)\sin30^\circ.$$

$$M_A=-10+16-18=-12\,\mathrm{N\,m}.$$

The resultant moment is $\boxed{12\,\mathrm{N\,m}\text{ clockwise}}$.

**Check:** the perpendicular distance for the $12\,\mathrm N$ force is $3\sin30^\circ=1.5\,\mathrm m$. Using its vertical component gives the same moment: $-(12\sin30^\circ)(3)=-18\,\mathrm{N\,m}$. Its horizontal component acts along the rod and has zero moment about $A$.

**Common mistake:** using $12\times3$. The force is not perpendicular to the rod.

## Equilibrium Under Parallel Forces

For a rigid object in equilibrium under parallel coplanar forces, use:

$$\sum F=0,\qquad\sum M_A=0.$$

The first equation is in the direction of the forces. The second takes signed moments about a chosen point $A$.

Draw each force at its correct point of action. For a horizontal beam with vertical loads, the perpendicular distances are horizontal distances. Choose a support as the moment point to remove its unknown reaction from that equation.

Taking moments about the other support gives a useful check. You can also use the two moment equations to find the reactions, then check the total vertical force.

### Example 2: a beam with an overhang

**Question:** a uniform horizontal beam $AB$ has length $6\,\mathrm m$ and weight $120\,\mathrm N$. It rests on small supports at $A$ and at $C$, where $AC=4\,\mathrm m$. A $40\,\mathrm N$ load acts at $B$. Find the upward reactions $R_A$ and $R_C$.

The beam's weight acts $3\,\mathrm m$ from $A$. Take anticlockwise moments about $A$:

$$4R_C-120(3)-40(6)=0.$$

$$R_C=150\,\mathrm N.$$

Resolve vertically:

$$R_A+R_C=120+40,$$

$$\boxed{R_A=10\,\mathrm N,\qquad R_C=150\,\mathrm N}.$$

**Check:** moments about $C$ give $-10(4)+120(1)-40(2)=0$. Both reactions are positive, so both supports can push upwards on the beam.

**Common mistake:** using the midpoint of the support spacing for the beam's weight. A uniform beam's weight acts at the midpoint of the whole beam.

### Example 3: where the weight of a non-uniform rod acts

**Question:** a non-uniform horizontal rod $AB$ has length $4\,\mathrm m$. It is supported by vertical forces of $35\,\mathrm N$ at $A$ and $15\,\mathrm N$ at $B$, with no other forces except its weight. Find its weight and the distance of its centre of mass from $A$.

Resolve vertically to find the weight:

$$W=35+15=50\,\mathrm N.$$

Let the weight act at distance $x$ from $A$. Take moments about $A$:

$$15(4)-50x=0,$$

$$\boxed{x=1.2\,\mathrm m\text{ from }A}.$$

**Check:** anticlockwise moments about $B$ give $-35(4)+50(4-1.2)=0$. The centre of mass is closer to the end with the larger upward supporting force.

**Common mistake:** assuming the weight acts at the midpoint when the rod is non-uniform.

## A Beam About to Tip

A support underneath a beam can push upwards; it cannot pull downwards. If your equations give a negative upward reaction, that contact cannot maintain the assumed equilibrium.

When a beam is **about to tip** about one support, the reaction at the other support becomes zero. Take moments about the support which remains in contact. For a plank on a roof, the remaining contact is at the roof edge.

This condition concerns loss of contact. It does not mean that friction is limiting. If both tipping and sliding are possible, check each separately.

### Example 4: the greatest load before tipping

**Question:** a uniform horizontal beam $AB$ has length $4\,\mathrm m$ and weight $80\,\mathrm N$. Small supports are at $A$ and at $C$, where $AC=3\,\mathrm m$. A downward load of weight $P$ acts at $B$. Find the greatest $P$ for equilibrium and the reactions at that value.

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

### Example 5: a ladder against a smooth wall

**Question:** a uniform ladder of length $5\,\mathrm m$ and weight $200\,\mathrm N$ rests at $60^\circ$ to the horizontal. Its foot $A$ is on rough horizontal ground and its top $B$ touches a smooth vertical wall to the left. Find the ground reaction $R$, wall reaction $S$, friction magnitude $F$ and least coefficient of friction needed.

![A ladder at 60 degrees to horizontal ground, with ground reaction upwards and friction towards the wall at A, wall reaction to the right at B and weight at the midpoint](/assets/img/a2-math-mech/ladder-smooth-wall.svg)

The wall is smooth, so its reaction is horizontal. The foot tends to move away from the wall; friction at $A$ acts towards the wall.

Resolve vertically and horizontally:

$$R=200,\qquad F=S.$$

Take anticlockwise moments about $A$. The forces $R$ and $F$ both pass through $A$:

$$200(2.5\cos60^\circ)-S(5\sin60^\circ)=0.$$

$$\boxed{S=F=\frac{100}{\sqrt3}\,\mathrm N\approx57.7\,\mathrm N}.$$

For equilibrium, $F\leq\mu R$. Therefore

$$\boxed{\mu_{\min}=\frac{F}{R}=\frac{1}{2\sqrt3}\approx0.289}.$$

**Check:** taking moments about $B$ gives

$$-F(5\sin60^\circ)-200(2.5\cos60^\circ)+R(5\cos60^\circ)=0.$$

If the actual coefficient is $0.4$, then $F<0.4R=80\,\mathrm N$: the ladder is in equilibrium, but friction is not limiting.

**Common mistake:** using an angle measured from the wall as if it were measured from the ground. These angles add to $90^\circ$.

### Example 6: a hinged rod and a string

**Question:** a uniform horizontal rod $AB$ of length $4\,\mathrm m$ and weight $60\,\mathrm N$ is smoothly hinged to a wall at $A$. A $40\,\mathrm N$ load acts at $B$. A light string from the midpoint $C$ to a point on the wall above $A$ makes $30^\circ$ with the horizontal. Find its tension and the magnitude and direction of the hinge force on the rod.

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

### Example 7: a rod resting on a smooth peg

**Question:** a uniform rod $AB$ of length $6\,\mathrm m$ and weight $80\,\mathrm N$ rests at $30^\circ$ to the horizontal. Its foot $A$ is on rough horizontal ground. A small smooth peg underneath the rod touches it at $C$, where $AC=4\,\mathrm m$. Find the contact forces and decide whether equilibrium is possible if the ground coefficient of friction is $0.8$.

![A rod at 30 degrees to the horizontal resting on a smooth peg at C; the peg reaction is perpendicular to the rod, with ground reaction up, friction right and weight down](/assets/img/a2-math-mech/rod-smooth-peg.svg)

The peg is modelled as a point contact. Its reaction $S$ is perpendicular to the rod, directed upwards and to the left. There is no friction at the peg. The ground friction acts to the right.

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

### Example 8: friction at both ends of a ladder

**Question:** a uniform ladder of length $4\,\mathrm m$ and weight $100\,\mathrm N$ rests with its top against a rough wall to the left and its foot on rough horizontal ground. It is just about to slip, with the top moving down and the foot moving away from the wall. Friction is limiting at both contacts. The ground coefficient is $\frac14$ and the wall coefficient is $\frac13$. Find the contact forces and the angle $\alpha$ to the horizontal.

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

## Practice

Try each question before opening the hint. In every solution, check a different moment point or the physical conditions as well as the algebra.

### Q1: an inclined rod

A rod $OB$ of length $2\,\mathrm m$ extends upwards and to the right at $30^\circ$ to the horizontal. A $12\,\mathrm N$ downward force acts at $B$, a $10\,\mathrm N$ horizontal force to the right acts at the midpoint, and a $20\,\mathrm N$ force acts along the rod at $B$, away from $O$. Find the resultant moment about $O$.

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

</details>

### Q2: a light beam

A light horizontal beam of length $5\,\mathrm m$ rests on supports at its ends $A$ and $B$. Downward loads of $30\,\mathrm N$ and $20\,\mathrm N$ act $1\,\mathrm m$ and $4\,\mathrm m$ from $A$. Find both reactions.

<details markdown="1">
<summary>Hint</summary>

Light means the beam's own weight is negligible. Take moments about $A$, then resolve vertically.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$5R_B=30(1)+20(4)\quad\Rightarrow\quad R_B=22\,\mathrm N.$$

$$\boxed{R_A=28\,\mathrm N,\qquad R_B=22\,\mathrm N}.$$

**Check:** the reactions sum to $50\,\mathrm N$. Moments about $B$ give $-28(5)+30(4)+20(1)=0$. Both contacts can push upwards.

</details>

### Q3: tipping at the other end

A uniform horizontal plank $AB$ of length $6\,\mathrm m$ and weight $90\,\mathrm N$ rests on small supports $C$ and $D$, where $AC=1\,\mathrm m$ and $AD=5\,\mathrm m$. A downward load of weight $P$ is placed at $A$. Find both reactions when $P=100\,\mathrm N$, then find the greatest possible $P$ before tipping. State the pivot at the tipping limit.

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

</details>

### Q4: the least ladder angle for equilibrium

A uniform ladder of length $4\,\mathrm m$ and weight $120\,\mathrm N$ has its top against a smooth vertical wall to the left. Its foot rests on rough horizontal ground with coefficient of friction $\frac14$. Find the least angle $\alpha$ to the horizontal for equilibrium, and all contact forces at this limiting angle. Also give the angle to the wall.

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

</details>

### Q5: a person climbing a ladder

A uniform ladder of length $5\,\mathrm m$ and weight $100\,\mathrm N$ rests at $60^\circ$ to the horizontal, against a smooth wall to the left. The coefficient of friction at the ground is $0.3$. A person of weight $500\,\mathrm N$ stands at distance $x$ along the ladder from its foot. Model the person as a particle and assume the ladder remains rigid. Find the greatest $x$ for equilibrium. Decide whether equilibrium is possible at $x=2\,\mathrm m$ and $x=3\,\mathrm m$.

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

</details>

### Q6: the resultant hinge force

A uniform horizontal rod $AB$ of length $3\,\mathrm m$ and weight $40\,\mathrm N$ is smoothly hinged at $A$. A $20\,\mathrm N$ load acts $2\,\mathrm m$ from $A$. A light string at $B$ pulls upwards and towards a point on the wall above $A$, making angle $\theta$ with the horizontal, where $\tan\theta=\frac34$. Find the tension and the magnitude and direction of the hinge force on the rod.

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

</details>

### Q7: checking a smooth peg model

A uniform rod of length $6\,\mathrm m$ and weight $80\,\mathrm N$ rests with its foot on rough horizontal ground and a small smooth peg underneath the rod at distance $4\,\mathrm m$ from its foot. The ground coefficient of friction is $0.5$. Find the required contact forces when the rod is at $10^\circ$ and at $30^\circ$ to the horizontal. Decide whether equilibrium is possible in each case.

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

</details>

### Q8: two limiting contacts

A uniform ladder of weight $156\,\mathrm N$ touches a rough vertical wall to the left and rough horizontal ground. It is just about to slip with its top moving down and its foot moving away from the wall. Friction is limiting at both contacts. The ground coefficient is $\frac13$ and the wall coefficient is $\frac14$. Find both normal reactions, both friction forces and the angle to the horizontal.

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

</details>

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

**Learning path:** [Previous: Forces, Equilibrium and Friction](/alevel/a2-mathematics/mechanics/forces-equilibrium-and-friction/) · [Mechanics topic index](/alevel/a2-mathematics/mechanics/) · [Next: Centres of Mass](/alevel/a2-mathematics/mechanics/centres-of-mass/).
