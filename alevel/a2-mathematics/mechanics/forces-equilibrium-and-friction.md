---
title: Forces, Equilibrium and Friction
layout: subjects
mathjax: true
grade: a2
subject: m2
permalink: /alevel/a2-mathematics/mechanics/forces-equilibrium-and-friction/
toc_headings: h2
study_page: true
reading_layout: true
---

[A2 Mechanics](/alevel/a2-mathematics/mechanics/) · MA05 · M2.3
{:.lesson-meta}

A book can stay on a table even though gravity pulls it down. The table pushes it up, so the two forces balance. This lesson starts with that idea: **which forces act on the object, and do they balance?**

You will learn to draw the forces, deal with forces at angles, and decide whether friction can keep an object at rest.

Start with [one object's forces](#force-diagrams), then [components](#the-resultant-of-coplanar-forces), [equilibrium](#concurrent-forces-in-equilibrium) and [friction](#friction-and-limiting-equilibrium). If you are revising, go to [practice](#practice).

You need simple equations and right-angled triangles. Need a reminder? Review [AS force diagrams](/alevel/as-mathematics/forces/#l24-concept) or the [right-triangle ratios below](#triangle-reminder).
{:.lesson-meta}

All examples and tasks below are self-written. The [source notes](#sources-and-scope) explain their scope and rounding convention.
{:.lesson-meta}

## Force Diagrams

Choose the object before drawing anything. For a book on a table, we are drawing **forces on the book**:

- The Earth pulls the book down. This is its **weight**.
- The table pushes the book away from its surface. This is the **normal reaction**.

The word *normal* means perpendicular. On a horizontal table the reaction is upwards; on a vertical wall it is horizontal. It does not always point upwards.

The book also pushes down on the table, but that force acts on the table. Leave it off the book's diagram. The book's weight and the table's reaction can balance, but they are not a Newton's-third-law pair.

For a small object whose turning does not matter, use the **particle model**: draw the forces through one point. For a rod or ladder, keep the actual points where forces act; their turning effect matters in the [next lesson](/alevel/a2-mathematics/mechanics/moments-and-rigid-objects/).

| Force | How to choose its direction |
| --- | --- |
| Weight | Vertically downwards |
| Normal reaction | Perpendicular to the contact, pushing away from the surface |
| Tension | Along a taut string, pulling towards its other end |
| Thrust | Along a rod which is pushing the object |
| Friction | Along the contact, opposing sliding or the tendency to slide |
| Applied force | Follow the direction given in the question |
| Hinge force | Use two perpendicular components if its direction is unknown |

A **smooth** contact supplies no friction. A **rough** contact can supply friction, but the actual friction may be zero. We will work out its size [later](#friction-and-limiting-equilibrium).

The **resultant** is the single force with the same combined effect as the forces on a particle. Do not add it to the diagram as one more force. Velocity and acceleration are not forces either.

The diagrams below show directions; arrow lengths are not to a common force scale.

<div class="lesson-check" markdown="1">

### Try one object {#first-check}

**Question:** A book is at rest on a rough horizontal table. There is no horizontal applied force. Draw the forces acting on the book. A student adds a downward arrow labelled "the book pushes on the table" and says there must be nonzero friction because the table is rough. Assess both suggestions.

<details markdown="1">
<summary>Hint</summary>

For each arrow, ask who applies the force and which object receives it. Is any horizontal force needed to balance another?

</details>

<details markdown="1">
<summary>Solution and check</summary>

Draw weight downwards and the normal reaction upwards, with equal magnitudes. The force exerted by the book on the table belongs on the table's diagram. No horizontal force is needed here, so friction is zero even though the contact is rough.

If you included a force on the table, return to the first two paragraphs above and label each force “force **on the book** by …”.

</details>

</div>

## The Resultant of Coplanar Forces

Suppose you pull a handle diagonally. The pull has a rightwards effect and an upwards effect. We describe those two effects using **components**. We have not added two new physical forces: the components are another way to represent the same pull.

In the diagram, the force has magnitude $P$ and makes angle $\theta$ with the positive horizontal direction. Its two components make a right-angled triangle.

![A diagonal force P at angle theta above the horizontal, with a right-angled triangle showing horizontal component P cos theta and vertical component P sin theta. Dashed lines are projections.](/assets/img/a2-math-mech/force-components-sample.svg)

<span id="triangle-reminder"></span>

In a right-angled triangle, cosine is the adjacent side divided by the hypotenuse; sine is the opposite side divided by the hypotenuse. Here the hypotenuse is $P$, so

$$\cos\theta=\frac{F_x}{P},\qquad\sin\theta=\frac{F_y}{P}.$$

Multiplying by the hypotenuse gives the components:

$$F_x=P\cos\theta,\qquad F_y=P\sin\theta.$$

If the angle is measured from the vertical instead, the vertical component is beside the angle and uses cosine. Locate the angle on a sketch before choosing a formula.

**Coplanar** means the forces lie in one plane. Choose the same two perpendicular directions for all of them. Here take right and up as positive; a leftwards or downwards component is negative.

Add the horizontal components to get $X$, and the vertical components to get $Y$. With unit vectors $\mathbf i$ to the right and $\mathbf j$ upwards, the resultant is

$$\mathbf S=X\mathbf i+Y\mathbf j,\qquad \lvert\mathbf S\rvert=\sqrt{X^2+Y^2}.$$

The square root comes from Pythagoras. For the direction, sketch the signs first, then find the acute reference angle from the component magnitudes. This avoids choosing the wrong quadrant. If $X=0$, the nonzero resultant is vertical; if both components are zero, the resultant has no direction.

<div class="worked-example" markdown="1">

### Example 1 — Add components and check the quadrant

**Question:** Forces $(4\mathbf i+3\mathbf j)\,\mathrm N$, $(-12\mathbf i+7\mathbf j)\,\mathrm N$ and $(2\mathbf i-2\mathbf j)\,\mathrm N$ act on a particle. Find the resultant, its magnitude and its direction. Find the extra force needed for equilibrium.

Add the components separately:

$$X=4-12+2=-6,\qquad Y=3+7-2=8.$$

$$\mathbf S=(-6\mathbf i+8\mathbf j)\,\mathrm N,\qquad \lvert\mathbf S\rvert=10\,\mathrm N.$$

The resultant points left and up. Its angle above the negative horizontal direction is

$$\alpha=\tan^{-1}\left(\frac{8}{6}\right)=53.1^\circ.$$

So its direction is $126.9^\circ$ anticlockwise from the positive horizontal direction, to the nearest tenth of a degree. An extra force must cancel both components:

$$\boxed{\mathbf P=(6\mathbf i-8\mathbf j)\,\mathrm N}.$$

**Check:** $\mathbf S+\mathbf P=\mathbf0$. The extra force has the same magnitude and the opposite direction.

**Common mistake:** reporting a negative angle from $\tan^{-1}(Y/X)$ without checking the quadrant.

</div>

<div class="worked-example" markdown="1">

### Example 2 — Resolve forces given by angles

**Question:** Three coplanar forces act on a particle: $10\,\mathrm N$ at $30^\circ$ above the positive horizontal direction, $8\,\mathrm N$ at $150^\circ$ anticlockwise from that direction, and $4\,\mathrm N$ vertically downwards. Find their resultant.

Take right and up as positive:

$$X=10\cos30^\circ+8\cos150^\circ=\sqrt3,$$

$$Y=10\sin30^\circ+8\sin150^\circ-4=5.$$

Hence

$$\mathbf S=(\sqrt3\mathbf i+5\mathbf j)\,\mathrm N,$$

$$\lvert\mathbf S\rvert=\sqrt{3+25}=2\sqrt7\,\mathrm N\approx5.29\,\mathrm N.$$

Both components are positive. The direction is

$$\theta=\tan^{-1}\left(\frac{5}{\sqrt3}\right)=70.9^\circ$$

above the positive horizontal direction, to the nearest tenth of a degree.

**Check:** the second force points left, so its horizontal component must be negative. Adding $10+8+4$ would ignore all directions.

</div>

Try [Q2 and Q3](#q2--a-resultant-below-the-negative-horizontal-direction) with their help closed, then return to [equilibrium](#concurrent-forces-in-equilibrium).

## Concurrent Forces in Equilibrium

Forces balance when they have no combined accelerating effect. In equilibrium the acceleration is zero, so the total force is zero in **each** direction:

$$\sum F_x=0,\qquad\sum F_y=0.$$

The symbol $\sum$ means “add all of these”. After choosing right as positive, for example, add rightwards components and subtract leftwards ones. “Total equals zero” is the same statement as “rightwards total equals leftwards total”.

Equilibrium can mean rest or motion at a constant velocity. Constant speed alone is not enough: travelling round a circle changes the direction of velocity and requires a resultant force.

**Concurrent forces** have lines of action passing through one point. The examples here concern particles. For an extended rigid body, balanced forces can still cause turning; the next lesson checks moments as well.

With a taut light string, tension pulls along the string; it cannot push. A negative calculated tension would tell you that the assumed arrangement is not possible.

<div class="worked-example" markdown="1">

### Example 3 — A load supported by two strings

**Question:** A particle of weight $60\,\mathrm N$ is held in equilibrium by two light taut strings. The left string makes $30^\circ$ with the horizontal; the right string makes $60^\circ$. Find their tensions $T_A$ and $T_B$.

![Force diagram of a particle supported by a left string at 30 degrees and a right string at 60 degrees, with both tensions upwards and weight downwards](/assets/img/a2-math-mech/two-string-equilibrium.svg)

Each tension pulls away from the particle along its string. Resolve horizontally:

$$T_B\cos60^\circ-T_A\cos30^\circ=0,$$

$$T_B=\sqrt3T_A.$$

Resolve vertically, then substitute:

$$T_A\sin30^\circ+T_B\sin60^\circ=60,$$

$$\frac{T_A}{2}+\frac{3T_A}{2}=60.$$

Therefore

$$\boxed{T_A=30\,\mathrm N},\qquad\boxed{T_B=30\sqrt3\,\mathrm N\approx52.0\,\mathrm N}.$$

**Check:** the upward components are $15\,\mathrm N$ and $45\,\mathrm N$, which add to the weight. Both tensions are positive.

**Common mistake:** setting $T_A+T_B=60$. It is their vertical components that balance the weight.

</div>

<div class="worked-example" markdown="1">

### Example 4 — Find the angle from the geometry

**Question:** A particle $B$ of weight $20\,\mathrm N$ hangs from a fixed point $A$ on a vertical wall by a light taut string of length $1\,\mathrm m$. A horizontal force pulls $B$ away from the wall and holds it at rest $0.6\,\mathrm m$ from the wall, below $A$. Find the tension and horizontal force.

The horizontal distance is $0.6\,\mathrm m$. The vertical distance below $A$ is

$$h=\sqrt{1^2-0.6^2}=0.8\,\mathrm m.$$

The tension acts towards $A$, so its components are $0.6T$ towards the wall and $0.8T$ upwards. Resolve vertically and horizontally:

$$0.8T=20\quad\Rightarrow\quad\boxed{T=25\,\mathrm N},$$

$$P=0.6T\quad\Rightarrow\quad\boxed{P=15\,\mathrm N}.$$

**Check:** the horizontal distance is not the string length. The component fractions satisfy $0.6^2+0.8^2=1$.

</div>

### Choosing axes on a slope {#slope-components}

On a slope, use one axis along the surface and the other perpendicular to it. This puts the reaction entirely on the perpendicular axis, so it disappears from the equation along the slope.

For a slope at angle $\alpha$ to the horizontal, with $0<\alpha<90^\circ$, its perpendicular is tilted by the same angle from the vertical. The angle between the downward weight and the direction into the plane is therefore $\alpha$.

In a right-angled triangle with weight $W$ as the hypotenuse, the component into the plane is beside that angle, so it is $W\cos\alpha$. The component down the slope is opposite the angle, so it is $W\sin\alpha$. The weight itself still points vertically down; these are its two components in the chosen axes.

<div class="worked-example" markdown="1">

### Example 5 — A string inclined to a smooth plane

**Question:** A particle of weight $60\,\mathrm N$ rests on a smooth plane inclined at $30^\circ$ to the horizontal. A light taut string pulls up the slope at $30^\circ$ above the plane, holding the particle in equilibrium. Find its tension and the normal reaction.

Use axes up the plane and normally away from it. There is no friction. The weight has components $60\sin30^\circ$ down the plane and $60\cos30^\circ$ into it.

The string angle is measured **from the plane**, so resolve its tension as $T\cos30^\circ$ up the plane and $T\sin30^\circ$ away from it.

Parallel to the plane:

$$T\cos30^\circ=60\sin30^\circ,$$

$$\boxed{T=20\sqrt3\,\mathrm N\approx34.6\,\mathrm N}.$$

Perpendicular to the plane:

$$R+T\sin30^\circ=60\cos30^\circ,$$

$$\boxed{R=20\sqrt3\,\mathrm N\approx34.6\,\mathrm N}.$$

**Check:** $R>0$, so contact is possible. The string partly supports the weight, reducing the normal reaction.

**Common mistake:** using $R=60\cos30^\circ$. This misses the string's normal component. A negative $R$ would mean that this contact model is impossible: the plane cannot pull the particle towards it.

</div>

Try [Q4](#q4--two-strings-with-given-lengths) and [Q5](#q5--contact-with-a-smooth-plane), then return to [friction](#friction-and-limiting-equilibrium).

## Friction and Limiting Equilibrium

Think of gently pushing a box that stays at rest. Friction balances your push. Push a little harder, and friction can become larger too. It does not automatically start at its largest value.

Call the **magnitude** of friction $F$, and the normal reaction $R$. The **coefficient of friction** $\mu$ tells us the limit in this contact model:

$$0\leq F\leq\mu R.$$

Read this as “the friction needed must be between zero and the maximum available”. The coefficient has no units. A rougher contact may allow a larger maximum without needing a larger actual friction.

At **limiting equilibrium**, the object is still at rest but is on the point of slipping. Only at this boundary do we set

$$F=\mu R.$$

To solve a rest problem, first find the reaction from the forces perpendicular to the surface. Then find the friction needed along it. Finally compare the needed friction with the maximum. If the need exceeds the maximum, the assumed rest is impossible.

Which way does friction act? Imagine the contact supplying no friction while the other forces stay the same. Which way would they tend to make the object slide? Friction acts the other way. Changing an applied force can reverse that tendency.

| Wording in the question | What it tells you |
| --- | --- |
| At rest or in equilibrium | Find the required friction and test $F\leq\mu R$ |
| Just about to move or on the point of slipping | The needed friction has reached $F=\mu R$ |
| Least coefficient for equilibrium | If $R>0$, the threshold is $\mu_{\min}=\frac{F}{R}$ |
| Range of applied forces | Too little and too much force may cause slipping in different directions; check both |

For an object already sliding, the usual sliding-friction model also uses $F=\mu R$, opposite the relative motion. The rest problems below ask whether sliding can start.

<div class="worked-example" markdown="1">

### Example 6 — Friction need not be limiting

**Question:** A particle of weight $50\,\mathrm N$ is at rest on a rough horizontal plane. The coefficient of friction is $0.4$. A horizontal force of $12\,\mathrm N$ acts to the right. Find the friction and decide whether equilibrium is possible.

Vertically, $R=50\,\mathrm N$. Horizontally, equilibrium requires $F=12\,\mathrm N$ to the left. The maximum available friction is

$$\mu R=0.4(50)=20\,\mathrm N.$$

Since $12<20$, equilibrium is possible and friction is **not** limiting. If the applied force rises gradually, limiting equilibrium occurs at $20\,\mathrm N$.

**Check:** with no horizontal applied force, no friction would be needed. The same rough surface does not produce $20\,\mathrm N$ of friction in every case.

</div>

<div class="worked-example" markdown="1">

### Example 7 — An angled pull reduces the reaction

**Question:** A particle of weight $100\,\mathrm N$ rests on a rough horizontal plane. A light taut string pulls to the right at $30^\circ$ above the horizontal. The particle is just about to move when the tension is $40\,\mathrm N$. Find the coefficient of friction.

![Force diagram of a particle on a rough horizontal plane with a 40 newton pull at 30 degrees, normal reaction upwards, 100 newton weight downwards and friction left](/assets/img/a2-math-mech/angled-pull-forces.svg)

The upward component of tension reduces the reaction:

$$R+40\sin30^\circ=100\quad\Rightarrow\quad R=80\,\mathrm N.$$

Friction acts to the left and is limiting. Resolve horizontally:

$$F=40\cos30^\circ=20\sqrt3\,\mathrm N.$$

$$\boxed{\mu=\frac{F}{R}=\frac{\sqrt3}{4}\approx0.433}.$$

**Check:** $80+20=100$ balances the vertical forces. Using $R=100$ would give the wrong coefficient.

If a force pushes down at an angle instead, its downward component **increases** $R$. Always use the actual vertical equation.

</div>

<div class="worked-example" markdown="1">

### Example 8 — A horizontal push on an inclined plane

**Question:** A particle of weight $50\,\mathrm N$ rests on a rough plane rising to the right at angle $\alpha$, where $\tan\alpha=\frac34$. The coefficient of friction is $\frac12$. A horizontal force $P\,\mathrm N$ pushes it to the right, with $P\geq0$. Find the range of $P$ for equilibrium and describe the friction direction.

![Two force diagrams for a particle on an inclined plane pushed horizontally right: friction up the plane when about to slip down, and friction down the plane when about to slip up](/assets/img/a2-math-mech/inclined-plane-friction.svg)

From the right-angled triangle, $\sin\alpha=\frac35$ and $\cos\alpha=\frac45$. The push acts partly up the plane and partly into it. Resolve perpendicular to the plane:

$$R=50\cos\alpha+P\sin\alpha=40+\frac35P.$$

Let $f$ be the **signed** friction component up the plane. Unlike the magnitude $F$, $f$ can be negative. Parallel equilibrium gives

$$P\cos\alpha+f=50\sin\alpha,$$

$$f=30-\frac45P.$$

The body remains at rest when $\lvert f\rvert\leq\mu R$. Check both endpoints.

**About to slip down:** friction is up the plane, so $f=\mu R$:

$$30-\frac45P=\frac12\left(40+\frac35P\right),$$

$$P=\frac{100}{11}\,\mathrm N\approx9.09\,\mathrm N.$$

**About to slip up:** friction is down the plane, so $f=-\mu R$:

$$\frac45P-30=\frac12\left(40+\frac35P\right),$$

$$P=100\,\mathrm N.$$

To check the whole interval, use both sides of the friction inequality:

$$30-\frac45P\leq\frac12\left(40+\frac35P\right)
\quad\Rightarrow\quad P\geq\frac{100}{11},$$

$$30-\frac45P\geq-\frac12\left(40+\frac35P\right)
\quad\Rightarrow\quad P\leq100.$$

Both conditions must hold at once, so

$$\boxed{\frac{100}{11}\leq P\leq100}.$$

Here $P$ is measured in newtons. Within the range, friction acts up the plane for $P<37.5$, is zero at $P=37.5$ and acts down the plane for $P>37.5$.

**Check:** $R>0$ throughout. At $P=100$, $R=100\,\mathrm N$ and $f=-50\,\mathrm N$, which is the correct limiting magnitude and direction.

**Common mistake:** keeping friction up the plane for both endpoints, or using $R=50\cos\alpha$ and ignoring the push's normal component.

</div>

## Practice

These are self-written tasks. Try them with both panels closed, and mark any hint you use. Draw a force diagram for each contact or string problem. Use degree mode where angles are in degrees. If a vector direction goes wrong, repair it with the [components retry](#components-retry). For the difference between actual and maximum friction, use the [friction retry](#friction-retry).

<div class="lesson-check" markdown="1">

### Q1 — Draw forces on a rough plane

A particle of weight $25\,\mathrm N$ rests on a rough plane inclined at angle $\alpha$, where $\tan\alpha=\frac34$. There are no strings or other applied forces. Describe the force diagram, find the normal reaction and friction, and find the least coefficient of friction for equilibrium.

<details markdown="1">
<summary>Hint</summary>

Without friction the particle would slide down. Resolve parallel and perpendicular to the plane. Use the $3$–$4$–$5$ triangle.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Draw weight vertically down, reaction perpendicular away from the plane and friction up the plane.

$$R=25\cos\alpha=20\,\mathrm N,$$

$$F=25\sin\alpha=15\,\mathrm N.$$

$$\boxed{\mu_{\min}=\frac{15}{20}=\frac34}.$$

**Check:** this is $\tan\alpha$, as expected when weight and contact forces are the only forces. A larger coefficient would still allow equilibrium with the same $15\,\mathrm N$ friction.

</details>

</div>

<div class="lesson-check" markdown="1">

### Q2 — Three forces {#q2--a-resultant-below-the-negative-horizontal-direction}

Forces $(3\mathbf i-2\mathbf j)\,\mathrm N$, $(-7\mathbf i+5\mathbf j)\,\mathrm N$ and $(\mathbf i-7\mathbf j)\,\mathrm N$ act on a particle. Find the resultant, its magnitude and its direction relative to the negative horizontal direction. Give the extra force needed for equilibrium.

<details markdown="1">
<summary>Hint</summary>

Add the coefficients of $\mathbf i$ and $\mathbf j$ separately. Use both signs to choose the direction.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\mathbf S=(-3\mathbf i-4\mathbf j)\,\mathrm N,\qquad \lvert\mathbf S\rvert=5\,\mathrm N.$$

It points left and down, at

$$\tan^{-1}\left(\frac43\right)=53.1^\circ$$

below the negative horizontal direction, to the nearest tenth of a degree. The extra force is

$$\boxed{(3\mathbf i+4\mathbf j)\,\mathrm N}.$$

**Check:** adding the extra force makes both resultant components zero.

</details>

</div>

<div class="lesson-check" markdown="1">

### Q3 — Unknown force components

Forces $(P\mathbf i+2\mathbf j)\,\mathrm N$, $(-4\mathbf i+Q\mathbf j)\,\mathrm N$ and $(\mathbf i-7\mathbf j)\,\mathrm N$ act on a particle in equilibrium. Find $P$ and $Q$.

<details markdown="1">
<summary>Hint</summary>

The total component in each direction is zero. Make one equation for $P$ and one for $Q$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$P-4+1=0,\qquad 2+Q-7=0.$$

$$\boxed{P=3,\qquad Q=5}.$$

**Check:** $(3,2)+(-4,5)+(1,-7)=(0,0)$. These are component coefficients, not the magnitudes of the original forces.

</details>

</div>

<div class="lesson-check" markdown="1">

### Q4 — Two strings with given lengths

Points $A$ and $C$ are at the same height and $1\,\mathrm m$ apart. A particle $B$ of weight $50\,\mathrm N$ hangs below them in equilibrium from two light taut strings, with $AB=0.8\,\mathrm m$ and $BC=0.6\,\mathrm m$. Find the angle between the strings and their tensions.

<details markdown="1">
<summary>Hint</summary>

The lengths form a $0.6$–$0.8$–$1$ right-angled triangle. Let $A$ be on the left. Find the horizontal and vertical distances from $A$ to $B$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Since $0.8^2+0.6^2=1^2$, the angle $ABC$ is $90^\circ$. Put $A=(0,0)$ and $C=(1,0)$. If $B=(x,-h)$, the string lengths give

$$x^2+h^2=0.64,\qquad(1-x)^2+h^2=0.36.$$

Subtracting gives $x=0.64$, then $h=0.48$. The tension towards $A$ has component fractions $(-0.8,0.6)$, and the tension towards $C$ has fractions $(0.6,0.8)$.

$$0.8T_A=0.6T_C,\qquad0.6T_A+0.8T_C=50.$$

$$\boxed{T_A=30\,\mathrm N,\qquad T_C=40\,\mathrm N}.$$

**Check:** the horizontal components both have magnitude $24\,\mathrm N$. The upward components are $18\,\mathrm N$ and $32\,\mathrm N$, which add to $50\,\mathrm N$.

</details>

</div>

<div class="lesson-check" markdown="1">

### Q5 — Contact with a smooth plane

A particle of weight $40\,\mathrm N$ is held in equilibrium on a smooth plane inclined at $30^\circ$ to the horizontal. A light taut string pulls up the slope at $45^\circ$ above the plane. Find the tension and normal reaction, and check that contact is possible.

<details markdown="1">
<summary>Hint</summary>

The string has a component away from the plane. Start with equilibrium parallel to the plane, then use perpendicular equilibrium.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$T\cos45^\circ=40\sin30^\circ,$$

$$\boxed{T=20\sqrt2\,\mathrm N\approx28.3\,\mathrm N}.$$

$$R+T\sin45^\circ=40\cos30^\circ,$$

$$\boxed{R=20(\sqrt3-1)\,\mathrm N\approx14.6\,\mathrm N}.$$

**Check:** $R>0$, so the contact model is possible. The tension has parallel and normal components of $20\,\mathrm N$ each. There is no friction.

</details>

</div>

<div class="lesson-check" markdown="1">

### Q6 — Test whether rest is possible

A particle of weight $60\,\mathrm N$ lies on a rough horizontal plane with coefficient of friction $0.3$. A horizontal force of $12\,\mathrm N$ is applied. Find the friction if it stays at rest. Could it stay at rest if the force were increased to $24\,\mathrm N$? Explain.

<details markdown="1">
<summary>Hint</summary>

Find the friction required for equilibrium and compare it with the maximum available value.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$R=60\,\mathrm N,\qquad\mu R=18\,\mathrm N.$$

With the $12\,\mathrm N$ force, friction is $12\,\mathrm N$ in the opposite direction. Since $12<18$, this is possible and is not limiting.

With the $24\,\mathrm N$ force, equilibrium would require $24\,\mathrm N$ friction. That exceeds $18\,\mathrm N$, so rest is impossible under this model.

**Check:** $18\,\mathrm N$ is the maximum friction, not the friction in the first case.

</details>

</div>

<div class="lesson-check" markdown="1">

### Q7 — Compare an angled pull and an angled push

A particle of weight $60\,\mathrm N$ rests on a rough horizontal plane with $\mu=\frac14$. A force of magnitude $P$ acts to the right at an angle $\beta$ to the horizontal, where $\tan\beta=\frac34$ and $0<\beta<90^\circ$. Find $P$ when the particle is just about to move right in each case: (a) the force acts above the horizontal; (b) it acts below the horizontal. Explain the difference.

<details markdown="1">
<summary>Hint</summary>

Use $\sin\beta=\frac35$ and $\cos\beta=\frac45$. In (a), $R=60-P\sin\beta$; in (b), the sign changes. Friction is limiting and acts left.

</details>

<details markdown="1">
<summary>Solution and check</summary>

In (a), resolve horizontally with the reduced reaction:

$$\frac45P=\frac14\left(60-\frac35P\right).$$

$$\boxed{P=\frac{300}{19}\,\mathrm N\approx15.8\,\mathrm N}.$$

In (b), the push increases the reaction:

$$\frac45P=\frac14\left(60+\frac35P\right).$$

$$\boxed{P=\frac{300}{13}\,\mathrm N\approx23.1\,\mathrm N}.$$

The downward push gives a larger normal reaction and a larger maximum friction, so a larger force is needed.

**Check:** the reactions are $\frac{960}{19}\,\mathrm N$ and $\frac{960}{13}\,\mathrm N$, both positive. Their quarters match the horizontal force components in the two cases.

</details>

</div>

<div class="lesson-check" markdown="1">

### Q8 — A horizontal force on a slope {#q8--find-both-limiting-cases}

A particle of weight $100\,\mathrm N$ rests on a rough plane rising to the right at angle $\alpha$, where $\tan\alpha=\frac34$. The coefficient of friction is $\frac14$. A horizontal force of magnitude $P\,\mathrm N$ acts to the right. Find the range of $P\geq0$ for equilibrium. State the friction direction at $P=60$ and $P=100$, and find the value of $P$ for which friction is zero.

<details markdown="1">
<summary>Hint</summary>

The push has a component into the plane. Use signed friction up the plane and check $\lvert f\rvert\leq\mu R$ at both endpoints.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$R=80+\frac35P,\qquad f=60-\frac45P.$$

At the lower endpoint, friction acts up the plane:

$$60-\frac45P=\frac14\left(80+\frac35P\right),$$

$$P=\frac{800}{19}\,\mathrm N\approx42.1\,\mathrm N.$$

At the upper endpoint, friction acts down the plane:

$$\frac45P-60=\frac14\left(80+\frac35P\right),$$

$$P=\frac{1600}{13}\,\mathrm N\approx123\,\mathrm N.$$

Both equilibrium inequalities hold when

$$\boxed{\frac{800}{19}\leq P\leq\frac{1600}{13}}.$$

At $P=60$, $f=12\,\mathrm N$, so friction acts up the plane. At $P=100$, $f=-20\,\mathrm N$, so friction acts down the plane. Friction is zero at $P=75$.

**Check:** for $P=60$ and $P=100$, the limiting friction magnitudes are $29\,\mathrm N$ and $35\,\mathrm N$. The required magnitudes are smaller, so neither case is limiting. The reaction is positive throughout the range.

</details>

</div>

## Independent Check {#independent-check}

Choose a retry after you have repaired the reason for an error. Close earlier answers before starting. The claims below need an explanation, not just a number.

If you missed a component in the reaction equation, revisit [the slope axes](#slope-components) and [the angled-pull equation](#example-7--an-angled-pull-reduces-the-reaction). Then close the examples and do [Q7(b)](#q7--compare-an-angled-pull-and-an-angled-push): the force now pushes into the surface. Check that your reaction changes in the right direction.

<div class="lesson-check" markdown="1">

### Components retry {#components-retry}

**Question:** Forces $(2\mathbf i+5\mathbf j)\,\mathrm N$ and $(-6\mathbf i-2\mathbf j)\,\mathrm N$ act on a particle. Find the resultant, its magnitude and its direction anticlockwise from the positive horizontal direction. Find an additional force that would produce equilibrium.

<details markdown="1">
<summary>Hint</summary>

Choose the signs of the two resultant components before using an inverse tangent.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The components add to

$$\mathbf S=(-4\mathbf i+3\mathbf j)\,\mathrm N,\qquad\lvert\mathbf S\rvert=5\,\mathrm N.$$

It points left and up. The acute reference angle is

$$\alpha=\tan^{-1}\left(\frac34\right)=36.9^\circ.$$

Hence the requested direction is $180^\circ-\alpha=143.1^\circ$, and the extra force is $(4\mathbf i-3\mathbf j)\,\mathrm N$. Adding that force cancels both components. A negative inverse-tangent output alone is not a quadrant decision.

If this was difficult, revisit the [component triangle and signs](#the-resultant-of-coplanar-forces), then try again without these panels.

</details>

</div>

<div class="lesson-check" markdown="1">

### A claim about friction {#friction-claim}

**Self-written task.** In Q8 the coefficient of friction is increased, with all other conditions unchanged. A student claims that both endpoints of the equilibrium range must increase. Assess this claim without recalculating the endpoints. Explain what happens if the coefficient is reduced to zero instead.

<details markdown="1">
<summary>Hint</summary>

Fix one value of the applied force. Does changing the coefficient change the force needed for balance, or only the maximum available?

</details>

<details markdown="1">
<summary>Solution and check</summary>

For a fixed value of the applied force, the reaction and the friction needed for balance are unchanged. Increasing the coefficient raises the available maximum. Every previously possible value of the applied force is still possible, so the lower endpoint cannot rise. The claim that both endpoints must increase is false.

With zero coefficient, the friction needed must be zero. In Q8 this gives $P=75\,\mathrm N$, with a positive reaction. Maximum available friction and actual friction are different quantities.

If you changed the actual friction simply because the coefficient changed, return to the [box explanation](#friction-and-limiting-equilibrium), close this panel and do the next task.

</details>

</div>

<div class="lesson-check" markdown="1">

### Try a changed condition {#friction-retry}

**Question:** Use the situation in Q8 with $P=60$. The coefficient of friction is now reduced from $\frac14$ to $\frac18$. Can the particle remain at rest? A student says that halving the coefficient must halve the actual friction. Assess this statement. Does your result prove that every value in the old equilibrium range is still possible?

<details markdown="1">
<summary>Hint</summary>

Redraw the same forces. Work out the required friction before calculating the new maximum.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The applied forces and the assumed rest have not changed. Perpendicular and parallel balance give

$$R=80+\frac35(60)=116\,\mathrm N,$$

$$f=60-\frac45(60)=12\,\mathrm N.$$

Here positive signed friction means up the plane. The new maximum is

$$\mu R=\frac18(116)=14.5\,\mathrm N.$$

The required friction is below that maximum, so rest is possible with the same actual friction, not half of it.

This one successful value does not prove that the entire old range still works. At an old limiting endpoint, the required friction equalled the old maximum; halving the coefficient makes that same requirement too large. Recheck each condition rather than treating one successful case as a proof of the range.

</details>

</div>

<div class="lesson-check" markdown="1">

### A zero-friction check {#zero-friction-check}

**Question:** A particle rests on a rough surface with zero friction acting. Does this prove the surface is smooth? Explain using the distinction between an actual force and an upper bound.

<details markdown="1">
<summary>Hint</summary>

Could the other forces already balance without any force along the surface?

</details>

<details markdown="1">
<summary>Solution and check</summary>

No. A rough surface can have zero actual friction when no tangential force is needed for equilibrium. Smooth means that the contact model cannot supply friction even when a nonzero tangential force would be needed.

</details>

</div>

## Return after the next lesson {#later-check}

After [Moments and Rigid Objects](/alevel/a2-mathematics/mechanics/moments-and-rigid-objects/), return for this self-written task without looking at the friction examples. The object is a particle, so no moment equation is needed.

<div class="lesson-check" markdown="1">

### A different contact surface {#wall-check}

**Question:** A particle of weight $40\,\mathrm N$ is pressed against a rough vertical wall by a horizontal force of $100\,\mathrm N$. The coefficient of friction is $0.5$. (a) Draw the forces and decide whether it can remain at rest. (b) An additional force of $60\,\mathrm N$ now acts vertically upwards on the particle. Draw a new force diagram and decide whether rest is still possible. (c) In case (b), the horizontal pressing force is reduced to $50\,\mathrm N$. Recheck your conclusion. Explain the direction of friction in English.

<details markdown="1">
<summary>Hint</summary>

The wall pushes perpendicular to itself. Compare the weight with the additional upward force before choosing a friction direction.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The wall is vertical, so its normal reaction is horizontal. Let the horizontal pressing force have magnitude $P$, and the extra upward force have magnitude $U$. Horizontal balance gives $R=P$.

Let $f$ be signed friction, positive upwards. Vertical balance is

$$U+f-40=0,\qquad f=40-U.$$

In (a), the reaction is $100\,\mathrm N$, the required friction is $40\,\mathrm N$ upwards and the maximum is $0.5(100)=50\,\mathrm N$. Rest is possible.

In (b), the reaction is unchanged, but $f=40-60=-20\,\mathrm N$: friction is $20\,\mathrm N$ downwards. It is still below the maximum, so rest is possible.

![Feedback diagrams: without an extra upward force, a 100 N push and 100 N wall reaction balance horizontally, while 40 N upward friction balances 40 N weight. With an extra 60 N upward force, friction is 20 N downwards; the horizontal forces stay unchanged.](/assets/img/a2-math-mech/wall-friction-feedback.svg)

In (c), the reaction becomes $50\,\mathrm N$ and the maximum is $0.5(50)=25\,\mathrm N$. The required downward friction is still $20\,\mathrm N$, so rest remains possible.

An English explanation: **“Friction acts upwards in (a), opposing the tendency to slide down. In (b) and (c), it acts downwards because the other vertical forces would tend to move the particle upwards.”**

The arrows are not to a force scale. If your reaction was vertical, revisit [normal reaction](#force-diagrams). If you used maximum friction automatically, revisit [actual and limiting friction](#friction-and-limiting-equilibrium).

</details>

</div>

## Sources and Scope

All examples and tasks are **self-written**, not official past-paper questions, and have no official marks. This lesson covers particle forces, equilibrium and friction within [OxfordAQA 9660 specification v5.2, M2.3](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf). Moments and centres of mass are separate lessons; this page alone is not the whole of M2.3.

MA05 January 2025 Q2(a)–(c) was reread with its [question paper](/assets/pdf/fx-cg50/references/oxfordaqa-ma05-2025-january-question-paper.pdf#page=4) and [Version 1.0 Final mark scheme](/assets/pdf/fx-cg50/references/oxfordaqa-ma05-2025-january-mark-scheme.pdf#page=6) to check perpendicular/parallel equilibrium, limiting friction and the required working. Q3(a) was also checked to distinguish circular motion, which needs a resultant force, from this lesson's equilibrium model.

Textbook alignment: Chapter 11, Sections 11.1–11.3 (printed pp.158–170, before Section 11.4). In this lesson's self-written tasks use three significant figures for final numerical values and one decimal place for angles, unless asked otherwise. Keep exact values during working. Use $g=9.8\,\mathrm{m\,s^{-2}}$ if needed. Authentic papers follow their own cover and question instructions; the January 2025 paper normally asks for two significant figures for calculator answers.

## Quick Reference

| Task | Method | Check |
|---|---|---|
| Draw forces | Name one body; show all forces acting on it | Reaction is normal; friction is along the contact |
| Find a resultant | Add signed components in two common perpendicular directions | Use the quadrant for its direction |
| Particle in equilibrium | Set both resultant components to zero | Equilibrium means zero acceleration |
| Strings | Tension pulls along each string; use geometry for angles | Both tensions must be non-negative |
| Contact with a plane | Resolve perpendicular to the plane | Include every normal component; check $R\geq0$ |
| Static friction | Find the required $F$, then check $F\leq\mu R$ | Rough does not automatically mean limiting |
| Limiting equilibrium | Use $F=\mu R$ | Friction opposes the stated tendency to slide |
| Range of forces | Check slipping in both directions | Friction may reverse within the range |

**After practice:** record whether an error came from the force diagram, an angle, a sign, the reaction or the limiting condition. Redraw the diagram before trying the question again.

**You should be able to:** find resultants, solve concurrent-force equilibrium problems, distinguish actual friction from its limiting value and check both possible slipping directions.

**Learning path:** [Previous: Vectors and Kinematics](/alevel/a2-mathematics/mechanics/vectors-and-kinematics/) · [Next: Moments and Rigid Objects in Equilibrium](/alevel/a2-mathematics/mechanics/moments-and-rigid-objects/) · [Mechanics topic index](/alevel/a2-mathematics/mechanics/).

{% include exam_topic_practice.html %}
