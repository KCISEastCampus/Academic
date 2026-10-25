---
title: A2 Mechanics
layout: subjects
mathjax: true
grade: a2
subject: m2
permalink: /alevel/a2-mathematics/mechanics/
toc_headings: h2
study_page: true
reading_layout: true
---

Mechanics asks why an object stays balanced or changes its motion. This MA05 course starts by choosing an object and identifying the forces on it, then connects the diagram, directions and equations.

**New to the topic?** Start with [Mathematical Modelling](mathematical-modelling/) and follow the route below. If you already know a topic, try its practice first and use your errors to choose what to revisit.

**After studying:** try the [mixed problems](#mixed-problems). After completing the unit, leave a gap before the [later review](#later-review). Attempt each question before opening its hint or solution.

**Looking up a formula?** Use [Quick Reference](quick-reference/) and follow its links back to the lessons.

<span id="study-a-topic"></span>

## Modelling and Kinematics

First learn what a model leaves out, then describe how position changes with time.

1. <span id="m21-mathematical-modelling"></span><span id="mathematical-modelling"></span>**[Mathematical Modelling](/alevel/a2-mathematics/mechanics/mathematical-modelling/)** — Assumptions, force diagrams and the limits of a model.
2. <span id="m22-kinematics"></span><span id="vectors-and-kinematics"></span>**[Vectors and Kinematics](/alevel/a2-mathematics/mechanics/vectors-and-kinematics/)** — Position, velocity, acceleration and paths.

## Forces and Equilibrium

Learn to resolve forces before working with moments and centres of mass.

1. <span id="m23-statics-and-forces"></span><span id="forces-equilibrium-and-friction"></span>**[Forces, Equilibrium and Friction](/alevel/a2-mathematics/mechanics/forces-equilibrium-and-friction/)** — Resultants, equilibrium and limiting friction.
2. <span id="moments-and-rigid-objects-in-equilibrium"></span>**[Moments and Rigid Objects in Equilibrium](/alevel/a2-mathematics/mechanics/moments-and-rigid-objects/)** — Beams, tipping, ladders and hinged rods.
3. <span id="centres-of-mass"></span>**[Centres of Mass](/alevel/a2-mathematics/mechanics/centres-of-mass/)** — Particles, composite bodies and suspension.

## Motion and Energy

Use force equations to find acceleration, and energy equations to find speeds and distances.

Before collision-energy problems, try the [AS Momentum Bridge](/alevel/a2-mathematics/mechanics/momentum-bridge/): diagnose signed momentum, external impulse, direction branches and kinetic-energy changes. No coefficient of restitution is required.

1. <span id="m24-newtons-laws-of-motion"></span><span id="newtons-laws-of-motion"></span>**[Newton's Laws of Motion](/alevel/a2-mathematics/mechanics/newtons-laws-of-motion/)** — Motion on planes, connected particles and variable forces.
2. <span id="m25-projectiles"></span><span id="projectiles"></span>**[Projectiles](/alevel/a2-mathematics/mechanics/projectiles/)** — Flight time, greatest height, range and trajectories.
3. <span id="m26-work-and-energy"></span><span id="work-and-energy"></span>**[Work and Energy](/alevel/a2-mathematics/mechanics/work-and-energy/)** — Work done, power and conservation of mechanical energy.
4. <span id="m27-uniform-circular-motion"></span><span id="uniform-circular-motion"></span>**[Uniform Circular Motion](/alevel/a2-mathematics/mechanics/uniform-circular-motion/)** — Angular speed, radial acceleration and conical pendulums.

## Mixed problems {#mixed-problems}

Attempt these after the relevant lessons. Choose a method and identify any stages or constraints. All tasks below are self-written.

<div class="lesson-check" markdown="1">

### A beam and a parcel {#mixed-a}

**Self-written task.** A uniform horizontal beam AB has length $4\,\mathrm m$ and mass $8\,\mathrm{kg}$. It rests on two small supports: one at A and one $3\,\mathrm m$ from A. A parcel of mass $4\,\mathrm{kg}$ is placed at B. Each support can push upwards but cannot pull downwards. Find the centre of mass of the beam and parcel, and both support forces. The parcel mass is then increased. Find its greatest mass for which equilibrium is possible with both supports available.

<details markdown="1">

<summary>Hint</summary>

Choose A as the coordinate origin. Use the beam midpoint for its weight. After finding the reactions, check what a support is able to do.

</details>

<details markdown="1">

<summary>Solution and check</summary>

The centre of mass is a mass-weighted position, measured from A:

$$\bar x=\frac{8(2)+4(4)}{8+4}=\frac83\,\mathrm m.$$

Let the upward support forces at A and at the other support be S and R. Turning effects about A give:

$$3R=8g(2)+4g(4),\qquad R=\frac{32g}{3}\,\mathrm N.$$

The upward forces must also balance the total weight:

$$S+R=12g,\qquad S=\frac{4g}{3}\,\mathrm N.$$

For a parcel of mass m, redo the same two balances. The support at A is the one that loses contact first:

$$R=\frac{(16+4m)g}{3},\qquad S=\frac{(8-m)g}{3}.$$

$$S\geq0\quad\Longrightarrow\quad m\leq8\,\mathrm{kg}.$$

At the limit the combined centre of mass is over the support 3 m from A. A larger parcel would require a downward pull at A, which that support cannot provide.

If the turning balance was difficult, return to [moments](/alevel/a2-mathematics/mechanics/moments-and-rigid-objects/#equilibrium-under-parallel-forces). For weighted positions, return to [centres of mass](centres-of-mass/#a-system-of-particles).

</details>

</div>

<div class="lesson-check" markdown="1">

### At the edge of a platform {#mixed-b}

**Self-written task.** A particle of mass $2\,\mathrm{kg}$ starts from rest on a horizontal platform. A constant horizontal pulling force of $10\,\mathrm N$ acts for $4\,\mathrm m$, while a constant resistance of $2\,\mathrm N$ opposes the motion. At the edge both horizontal forces cease. The particle leaves horizontally from height $4.9\,\mathrm m$ above level ground. Neglect air resistance during flight and use $g=9.8\,\mathrm{m\,s^{-2}}$. Find its speed at the edge, horizontal distance travelled during flight, and velocity just before impact. Explain why a single constant-acceleration vector cannot describe both stages.

<details markdown="1">

<summary>Hint</summary>

Treat motion on the platform and motion in the air separately. What changes at the edge? Keep the launch velocity when starting the second stage.

</details>

<details markdown="1">

<summary>Solution and check</summary>

On the platform, weight and reaction do no work along the horizontal displacement. The two horizontal forces do total work:

$$W=(10-2)(4)=32\,\mathrm J,\qquad \frac12(2)u^2=32,\qquad u=4\sqrt2\,\mathrm{m\,s^{-1}}.$$

Alternatively, the horizontal acceleration is 4 and the constant-acceleration equation gives the same speed. For the flight, start a new clock at the edge, take rightwards and upwards as positive:

$$x=4\sqrt2\,t,\qquad y=-4.9t^2.$$

$$-4.9=-4.9t^2\quad\Longrightarrow\quad t=1\,\mathrm s,\qquad x=4\sqrt2\,\mathrm m.$$

$$\mathbf v=4\sqrt2\,\mathbf i-9.8\,\mathbf j\quad\mathrm{m\,s^{-1}}.$$

The velocity includes both direction and magnitude. Its speed is about 11.3 and its direction about 60.0 degrees below the horizontal. The acceleration changes at the edge:

$$\mathbf a_{\mathrm{platform}}=4\mathbf i,\qquad \mathbf a_{\mathrm{flight}}=-9.8\mathbf j\quad\mathrm{m\,s^{-2}}.$$

As a check, the kinetic energy at impact equals the 32 J gained on the platform plus the gravitational potential energy lost in flight.

Return to [work and energy](work-and-energy/#the-work-energy-principle) if forces were counted twice, or [projectiles](projectiles/#projection-from-a-height) if the flight directions or landing height were confused.

</details>

</div>

<div class="lesson-check" markdown="1">

### Disc data {#mixed-c}

**Self-written task.** A particle of mass $0.5\,\mathrm{kg}$ rests on a rough horizontal disc. While it moves with the disc its position relative to the centre is $\mathbf r=(0.8\cos2t)\mathbf i+(0.8\sin2t)\mathbf j$ metres, where $t$ is in seconds. The coefficient of friction is $0.4$. Show that the path is circular and find its speed and acceleration. Decide whether this motion is possible without slipping. The disc is then set to rotate steadily at $3\,\mathrm{rad\,s^{-1}}$. Can the particle remain at the same radius? Find the limiting angular speed for this radius. Use $g=9.8\,\mathrm{m\,s^{-2}}$.

<details markdown="1">

<summary>Hint</summary>

First find the distance from the centre, then differentiate. Compare the horizontal force actually needed with the friction available.

</details>

<details markdown="1">

<summary>Solution and check</summary>

$$\lvert\mathbf r\rvert^2=0.8^2(\cos^22t+\sin^22t)=0.64.$$

The radius stays 0.8 m. Differentiating twice gives:

$$\mathbf v=-1.6\sin2t\,\mathbf i+1.6\cos2t\,\mathbf j,\qquad \lvert\mathbf v\rvert=1.6\,\mathrm{m\,s^{-1}}.$$

$$\mathbf a=-3.2\cos2t\,\mathbf i-3.2\sin2t\,\mathbf j=-4\mathbf r.$$

Acceleration has magnitude 3.2 and points inwards. Friction supplies the inward resultant; there is no extra force to add. Vertically the reaction balances weight:

$$R=0.5g=4.9\,\mathrm N,\qquad F_{\max}=0.4R=1.96\,\mathrm N.$$

$$F_{\mathrm{needed}}=0.5(3.2)=1.6\,\mathrm N<1.96\,\mathrm N.$$

The first motion is possible. At the proposed higher angular speed:

$$F_{\mathrm{needed}}=0.5(0.8)(3^2)=3.6\,\mathrm N>1.96\,\mathrm N.$$

The particle cannot keep that circular motion at this radius. The 3.6 N is a required force, not a friction force that the surface actually supplies. At the limiting speed:

$$0.5(0.8)\omega^2=1.96,\qquad \omega=\sqrt{4.9}\approx2.21\,\mathrm{rad\,s^{-1}}.$$

Return to [vector motion](vectors-and-kinematics/#velocity-and-acceleration) for differentiation, or [circular motion](uniform-circular-motion/#forces-in-a-horizontal-circle) for the direction and contact check.

</details>

</div>

## Later review {#later-review}

Return after completing the lessons and studying something else. Close your notes first; record any uncertainty and hints used. An immediate success alone does not show lasting mastery.

<div class="lesson-check" markdown="1">

### Two objects, one string {#later-a}

**Self-written task.** A $2\,\mathrm{kg}$ particle on a smooth horizontal table is connected to a hanging $1\,\mathrm{kg}$ particle by a light inextensible string over a fixed smooth pulley. The straight string segments are horizontal and vertical. Both particles are released from rest; the hanging particle is initially $2\,\mathrm m$ above the floor. Find the acceleration and string tension before it reaches the floor, and the time of its first contact with the floor. Explain why those same equations cannot simply be continued after contact. Use $g=9.8\,\mathrm{m\,s^{-2}}$.

<details markdown="1">

<summary>Hint</summary>

Choose a positive direction along each particle's motion. The string connects acceleration magnitudes, not their vector directions.

</details>

<details markdown="1">

<summary>Solution and check</summary>

Use a separate force equation for each particle while the string is taut:

$$T=2a,\qquad g-T=a.$$

$$a=\frac g3,\qquad T=\frac{2g}{3}\,\mathrm N.$$

The displacement to the floor is 2 m, starting from rest:

$$2=\frac12\left(\frac g3\right)t^2,\qquad t=\sqrt{\frac{12}{g}}\approx1.11\,\mathrm s.$$

Both answers satisfy the separate equations and the tension is positive. On first contact the floor supplies a new force and the hanging particle can no longer follow that downward acceleration. What happens next depends on the impact and whether the string stays taut; the old two-particle equations must be replaced.

If the equations do not match the chosen body, revisit [modelling](mathematical-modelling/#connected-bodies) and [Newton's laws](newtons-laws-of-motion/#connected-particles).

</details>

</div>

<div class="lesson-check" markdown="1">

### Before and after contact {#later-b}

**Self-written task.** A $1\,\mathrm{kg}$ trolley moving at $6\,\mathrm{m\,s^{-1}}$ meets a stationary $2\,\mathrm{kg}$ trolley on a smooth horizontal track. They stick together. External horizontal impulse during the collision is negligible. The joined trolleys then move up a smooth ramp, with no further driving force. Find their speed just after the collision, the kinetic energy lost in the collision, and their greatest vertical rise up the ramp. Explain which conservation statement is justified in each stage. Use $g=9.8\,\mathrm{m\,s^{-2}}$.

<details markdown="1">

<summary>Hint</summary>

Choose both trolleys as the collision system. Does sticking together preserve kinetic energy? Start the ramp stage with the speed after impact.

</details>

<details markdown="1">

<summary>Solution and check</summary>

$$1(6)+2(0)=(1+2)v,\qquad v=2\,\mathrm{m\,s^{-1}}.$$

Momentum is conserved during the short collision under the stated impulse assumption. Kinetic energy is not:

$$KE_{\mathrm{before}}=\frac12(1)(6^2)=18\,\mathrm J,\qquad KE_{\mathrm{after}}=\frac12(3)(2^2)=6\,\mathrm J.$$

$$\text{kinetic energy lost}=18-6=12\,\mathrm J.$$

For the smooth ramp stage, the normal reaction does no work. The remaining kinetic energy becomes gravitational potential energy:

$$6=3gh,\qquad h=\frac2g\approx0.204\,\mathrm m.$$

Using the original 18 J here would wrongly recover the energy already transferred in the collision. Return to the [momentum bridge](momentum-bridge/#choose-the-system-before-conserving-momentum) for the system and signs, or [work and energy](work-and-energy/#the-work-energy-principle) for the ramp.

</details>

</div>

<div class="lesson-check" markdown="1">

### Held by a string {#later-c}

**Self-written task.** A particle of mass $0.4\,\mathrm{kg}$ is attached to a light string of length $1.25\,\mathrm m$. The other end is fixed. The particle describes a horizontal circle with constant angular speed $\sqrt{9.8}\,\mathrm{rad\,s^{-1}}$, with the string taut. Find the angle the string makes with the vertical, the circle radius, tension and period. A student says that constant speed means the forces balance. Explain the error. Use $g=9.8\,\mathrm{m\,s^{-2}}$.

<details markdown="1">

<summary>Hint</summary>

The circle radius is the horizontal part of the string length. One component of tension balances weight; another changes the velocity direction.

</details>

<details markdown="1">

<summary>Solution and check</summary>

$$r=1.25\sin\theta,\qquad T\cos\theta=0.4g,\qquad T\sin\theta=0.4r\omega^2.$$

This is a non-zero circle, so the sine factor can be cancelled after substituting the radius:

$$T=0.4(1.25)\omega^2=4.9\,\mathrm N.$$

$$\cos\theta=\frac{0.4g}{4.9}=0.8,\qquad \theta\approx36.9^\circ,\qquad r=1.25(0.6)=0.75\,\mathrm m.$$

$$\tau=\frac{2\pi}{\omega}=\frac{2\pi}{\sqrt{9.8}}\approx2.01\,\mathrm s.$$

Only the vertical forces balance. The inward horizontal resultant is non-zero because the velocity keeps changing direction even though speed is constant. Check that the tension components reproduce both the weight and the inward force.

If the radius or force direction was wrong, return to [the conical pendulum](/alevel/a2-mathematics/mechanics/uniform-circular-motion/#the-conical-pendulum).

</details>

</div>

## Quick Reference

<span id="key-formulae-summary"></span><span id="exam-style-question"></span>

[Open the formula and method notes](/alevel/a2-mathematics/mechanics/quick-reference/#key-formulae-summary) for a quick reminder. For revision, choose a lesson above and try its **Practice** section before opening the solutions. The reference page also has [further questions](/alevel/a2-mathematics/mechanics/quick-reference/#further-questions) that combine topics.

<details markdown="1">
<summary>Find a topic in the textbook or syllabus</summary>

The syllabus groups the nine lessons under M2.1–M2.7. Moments and centres of mass are both part of M2.3.

| Syllabus topic | Textbook section | Lesson |
|---|---|---|
| M2.1 Mathematical modelling | 10.1 | [Mathematical Modelling](/alevel/a2-mathematics/mechanics/mathematical-modelling/) |
| M2.2 Kinematics | 10.2 | [Vectors and Kinematics](/alevel/a2-mathematics/mechanics/vectors-and-kinematics/) |
| M2.3 Statics and forces | 11.1–11.3 | [Forces, Equilibrium and Friction](/alevel/a2-mathematics/mechanics/forces-equilibrium-and-friction/) |
| M2.3 Statics and forces | 11.4 | [Moments and Rigid Objects in Equilibrium](/alevel/a2-mathematics/mechanics/moments-and-rigid-objects/) |
| M2.3 Statics and forces | 12.1–12.4 | [Centres of Mass](/alevel/a2-mathematics/mechanics/centres-of-mass/) |
| M2.4 Newton's Law of Motion | 13.1–13.2 | [Newton's Laws of Motion](/alevel/a2-mathematics/mechanics/newtons-laws-of-motion/) |
| M2.5 Projectiles | 13.3 | [Projectiles](/alevel/a2-mathematics/mechanics/projectiles/) |
| M2.6 Work and energy | 14.1–14.3 | [Work and Energy](/alevel/a2-mathematics/mechanics/work-and-energy/) |
| M2.7 Uniform circular motion | 15.1–15.3 | [Uniform Circular Motion](/alevel/a2-mathematics/mechanics/uniform-circular-motion/) |

Sources: *AQA A2 Maths: Pure and Mechanics*, Chapters 10–15 (printed pp. 148–253), and the [OxfordAQA Mathematics specification, Section 3.5](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf).

</details>

**Before you start:** review [AS Mathematics](/alevel/as-mathematics/) and the Pure lessons on [vectors](/alevel/a2-mathematics/vectors/), [differentiation](/alevel/a2-mathematics/differentiation/) and [integration](/alevel/a2-mathematics/integration/) as needed.

**Precision:** self-written tasks follow each lesson's stated convention. Authentic papers follow their cover and question instructions. For example, January 2025 MA05 defaults to two significant figures for calculator final answers, with question-specific overrides; do not automatically apply the lessons' three-significant-figure convention to that paper.

Other A2 mathematics units: [Pure Mathematics (MA03)](/alevel/a2-mathematics/) · [Statistics (MA04)](/alevel/a2-mathematics/statistics/).
