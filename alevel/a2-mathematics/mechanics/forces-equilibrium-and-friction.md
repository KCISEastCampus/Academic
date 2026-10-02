---
title: Forces, Equilibrium and Friction
layout: subjects
mathjax: true
grade: a2
subject: m2
permalink: /alevel/a2-mathematics/mechanics/forces-equilibrium-and-friction/
toc_headings: h2
study_page: true
---

[A2 Mechanics](/alevel/a2-mathematics/mechanics/) · M2.3 Statics and forces

Draw the forces acting on one body, resolve them in two perpendicular directions and use the conditions for equilibrium. Decide whether friction is at its limiting value before using $F=\mu R$.

- **Learning:** start with [force diagrams](#force-diagrams), then study [resultants](#the-resultant-of-coplanar-forces), [equilibrium](#concurrent-forces-in-equilibrium) and [friction](#friction-and-limiting-equilibrium).
- **Homework help:** for an inclined plane, try axes parallel and perpendicular to the plane. Mark the positive directions.
- **Revision:** try [practice](#practice) with the solutions closed. Check the friction direction and whether contact is possible.

Textbook: Chapter 11, Sections 11.1–11.3 (printed pp. 158–170, up to the start of Section 11.4). Moments and rigid objects in equilibrium are covered separately.

**Before you start:** know weight, tension, normal reaction, basic trigonometry and vector components. Review [Mathematical Modelling](/alevel/a2-mathematics/mechanics/mathematical-modelling/) if needed. Use $g=9.8\,\mathrm{m\,s^{-2}}$ unless another value is given. Keep exact values during calculations; round final numerical answers to three significant figures, or one decimal place for angles, unless asked otherwise.

All worked examples and practice questions are self-written, not official past-paper questions. No official marks are assigned.

## Force Diagrams

Name the body first. Draw only forces **acting on that body**. A force it exerts on another body belongs on the other body's diagram.

| Force | Direction and point of action |
|---|---|
| Weight | Vertically downwards, through the centre of mass |
| Normal reaction | Perpendicular to the surface, pushing the body away from it |
| Tension | Along a taut string, pulling towards its other end |
| Thrust | Along a rod which is pushing the body |
| Friction | Along the contact surface, opposing relative sliding or the tendency to slide |
| Applied force | In the direction stated in the question |
| Hinge force | Usually unknown; use two perpendicular components |

A smooth contact has no friction. A rough contact **may** have friction: rough does not mean that friction must be non-zero or limiting.

The diagrams show force directions; arrow lengths are not drawn to a common force scale.

For a particle, draw the forces through one point. For a rod or ladder, keep the points of action: moving a force to another point may change its turning effect. A uniform rod's weight acts at its midpoint.

**Do not add the resultant as an extra force.** It replaces the original forces when describing their combined effect on a particle. Do not draw velocity or acceleration as forces either.

## The Resultant of Coplanar Forces

**Coplanar forces** lie in one plane. Resolve all forces in the same two perpendicular directions, then add their signed components.

With $\mathbf i$ to the right and $\mathbf j$ upwards, write the resultant as

$$\mathbf S=X\mathbf i+Y\mathbf j,\qquad \lvert\mathbf S\rvert=\sqrt{X^2+Y^2}.$$

For a force $P$ at angle $\theta$ measured anticlockwise from the positive horizontal direction:

$$F_x=P\cos\theta,\qquad F_y=P\sin\theta.$$

If the angle is given from the vertical, the vertical component uses cosine. Sketch the direction instead of memorising which component uses sine.

For direction, first check the signs of $X$ and $Y$. Find a reference angle from the component magnitudes, then state the correct quadrant. If $X=0$, the resultant is vertical; if both components are zero, it has no direction.

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

## Concurrent Forces in Equilibrium

**Concurrent forces** have lines of action passing through one point. For a particle in equilibrium, acceleration is zero, so

$$\sum F_x=0,\qquad\sum F_y=0.$$

Equilibrium can mean rest or constant velocity. **Constant speed alone is not enough:** a changing direction means changing velocity.

For a rigid body, zero resultant force alone does not ensure equilibrium. Forces acting along different lines can cause turning. The next lesson adds the condition on moments.

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

### Example 4 — Find the angle from the geometry

**Question:** A particle $B$ of weight $20\,\mathrm N$ hangs from a fixed point $A$ on a vertical wall by a light taut string of length $1\,\mathrm m$. A horizontal force pulls $B$ away from the wall and holds it at rest $0.6\,\mathrm m$ from the wall, below $A$. Find the tension and horizontal force.

The horizontal distance is $0.6\,\mathrm m$. The vertical distance below $A$ is

$$h=\sqrt{1^2-0.6^2}=0.8\,\mathrm m.$$

The tension acts towards $A$, so its components are $0.6T$ towards the wall and $0.8T$ upwards. Resolve vertically and horizontally:

$$0.8T=20\quad\Rightarrow\quad\boxed{T=25\,\mathrm N},$$

$$P=0.6T\quad\Rightarrow\quad\boxed{P=15\,\mathrm N}.$$

**Check:** the horizontal distance is not the string length. The component fractions satisfy $0.6^2+0.8^2=1$.

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

## Friction and Limiting Equilibrium

For a rough contact, $\mu$ is the **coefficient of friction**, and $R$ is the normal reaction. While the body remains at rest, the friction magnitude satisfies

$$0\leq F\leq\mu R.$$

Friction takes the value needed for equilibrium, up to its maximum $\mu R$. It can be zero. At **limiting equilibrium**, the body is just about to slide:

$$F=\mu R.$$

First decide which way the body would tend to slide. Friction acts in the opposite direction. If an applied force changes, the tendency to slide may reverse.

| Wording in the question | What to do |
|---|---|
| At rest or in equilibrium | Find the required friction, then check $F\leq\mu R$ |
| Just about to move or on the point of slipping | Use $F=\mu R$ in the direction opposing the stated tendency |
| Find the least coefficient for equilibrium | Find $F$ and $R$, then use $\mu_{\min}=\frac{F}{R}$ when $R>0$ |
| Find a range of applied forces | Check both possible slipping directions |

The usual sliding-friction model also uses $F=\mu R$ during sliding, with friction opposing the relative motion. The problems below concern equilibrium and the point at which sliding starts.

### Example 6 — Friction need not be limiting

**Question:** A particle of weight $50\,\mathrm N$ is at rest on a rough horizontal plane. The coefficient of friction is $0.4$. A horizontal force of $12\,\mathrm N$ acts to the right. Find the friction and decide whether equilibrium is possible.

Vertically, $R=50\,\mathrm N$. Horizontally, equilibrium requires $F=12\,\mathrm N$ to the left. The maximum available friction is

$$\mu R=0.4(50)=20\,\mathrm N.$$

Since $12<20$, equilibrium is possible and friction is **not** limiting. If the applied force rises gradually, limiting equilibrium occurs at $20\,\mathrm N$.

**Check:** with no horizontal applied force, no friction would be needed. The same rough surface does not produce $20\,\mathrm N$ of friction in every case.

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

Both inequalities hold between these endpoints, giving

$$\boxed{\frac{100}{11}\leq P\leq100}.$$

Here $P$ is measured in newtons. Within the range, friction acts up the plane for $P<37.5$, is zero at $P=37.5$ and acts down the plane for $P>37.5$.

**Check:** $R>0$ throughout. At $P=100$, $R=100\,\mathrm N$ and $f=-50\,\mathrm N$, which is the correct limiting magnitude and direction.

**Common mistake:** keeping friction up the plane for both endpoints, or using $R=50\cos\alpha$ and ignoring the push's normal component.

## Practice

Allow about 40–50 minutes. Draw a force diagram for each contact or string problem. Use a calculator in degree mode where angles are given in degrees.

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

### Q2 — A resultant below the negative horizontal direction

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

### Q8 — Find both limiting cases

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
