---
title: AS Momentum Bridge — Direction and Energy
layout: subjects
mathjax: true
grade: a2
subject: m2
permalink: /alevel/a2-mathematics/mechanics/momentum-bridge/
toc_headings: h2
study_page: true
reading_layout: true
---

[A2 Mechanics](/alevel/a2-mathematics/mechanics/) · MA02 M1.4 prerequisite for MA05

Can you decide what is conserved before calculating a collision? Use this short bridge before [Work and Energy](/alevel/a2-mathematics/mechanics/work-and-energy/). It revisits AS momentum and impulse, then connects them to A2 energy. It does not require a coefficient of restitution.

**Before you start:** signed one-dimensional velocity, Newton's second law, areas of triangles and kinetic energy. Work in a single inertial frame. The self-written tasks below have no official marks; use exact values where possible and three significant figures otherwise. Authentic examination questions follow their own precision instructions.

## From Force to Impulse

Two trolleys with different masses moving at the same velocity require different impulses to change their motion. Momentum records this directed motion as mass times velocity. Choose one positive direction for every initial and final velocity. Negative momentum means motion in the negative direction, not negative mass.

Momentum is a signed quantity in one dimension:

$$p=mv,\qquad [p]=\mathrm{kg\,m\,s^{-1}}.$$

For constant mass, Newton's second law connects resultant force and change of momentum. Over a time interval, the resultant **impulse** is

$$J=\Delta p=m(v-u)=\int_{t_0}^{t_1}F(t)\,dt.$$

On a force–time graph this is signed area: below the time axis contributes negative impulse. A constant force gives impulse equal to force times duration. The unit newton second is equivalent to the momentum unit. Impulse is not work: work depends on displacement, not elapsed time.

Here the force must be the resultant on the chosen body. For constant mass, accumulating Newton's second law over time gives

$$F=m\frac{\mathrm dv}{\mathrm dt},\qquad\int_{t_0}^{t_1}F\,\mathrm dt=m\int_u^v\mathrm dv=m(v-u).$$

Force times duration and area under the graph are particular forms of this relation.

<div class="worked-example" markdown="1">

### Example — A Velocity Reversal

**Question:** A particle of mass $2\,\mathrm{kg}$ has initial velocity $-1\,\mathrm{m\,s^{-1}}$. A resultant force $F(t)=6t\,\mathrm N$ acts in the positive direction for $0\leq t\leq2\,\mathrm s$. Find its velocity at the end of the interval.

The force–time graph is a straight line from zero to twelve newtons, so its triangular area is twelve newton seconds. Integration gives the same signed impulse:

$$J=\int_0^2 6t\,dt=[3t^2]_0^2=12\,\mathrm{N\,s}.$$

Use the signed initial velocity:

$$12=2(v-(-1))\quad\Rightarrow\quad v=5\,\mathrm{m\,s^{-1}}.$$

**Check:** the momentum changes from minus two to plus ten kilogram metres per second, a change of plus twelve. Replacing the initial velocity by its speed would give the wrong final velocity. The particle first slows, stops and reverses; a positive force does not require a positive initial velocity.

</div>

## Choose the System Before Conserving Momentum

For a system of two particles, their mutual collision forces are internal. The impulses of that pair cancel in the system total. Total momentum is conserved **only if the resultant external impulse is zero or negligible** over the collision:

$$m_Au_A+m_Bu_B=m_Av_A+m_Bv_B.$$

Use one positive direction for both particles. A smooth horizontal surface removes horizontal friction, but a wall can still exert a horizontal external impulse on a particle. Do not conserve the particle's momentum in a wall rebound.

Internal collision forces may be large; they cancel in the system total, not on either particle separately. More generally,

$$p_{\mathrm{after}}-p_{\mathrm{before}}=J_{\mathrm{external}}.$$

Kinetic energy is a scalar:

$$E_{\mathrm{before}}=\frac12m_Au_A^2+\frac12m_Bu_B^2,\qquad E_{\mathrm{after}}=\frac12m_Av_A^2+\frac12m_Bv_B^2.$$

Momentum conservation alone does not make these equal. The decrease in kinetic energy is the initial value minus the final value. In a passive collision model with no release of stored energy it cannot be negative. Other collision models need their energy source stated explicitly.

Kinetic energy uses squared speed, so opposite velocities can have the same energy. A kinetic-energy decrease can transfer energy into deformation, internal energy or sound; total energy has not disappeared. Momentum conservation depends on external impulse, while kinetic-energy conservation is a separate model condition.

If A is on the left and B on the right, the rate of change of their separation after impact is

$$\frac{\mathrm d(\text{separation})}{\mathrm dt}=v_B-v_A.$$

A greater velocity on the right gives separation. Equal velocities allow motion together in contact. A smaller velocity on the right means continued approach, which is inconsistent with velocities after the contact collision has ended.

<div class="worked-example" markdown="1">

### Example — A Magnitude Can Hide Two Directions

**Question:** Particles $A$ and $B$ of masses $2\,\mathrm{kg}$ and $3\,\mathrm{kg}$ move on a smooth horizontal line. Initially $A$, to the left of $B$, moves right at $5\,\mathrm{m\,s^{-1}}$ and $B$ is at rest. After their collision the magnitude of the momentum of $A$ is $2\,\mathrm{kg\,m\,s^{-1}}$. Neglect external horizontal impulse. Find the possible velocities and decreases in total kinetic energy. Check that the particles can separate.

Take right as positive. The initial total momentum is ten and the kinetic energy is twenty-five joules. The given final momentum is a **magnitude**, so

$$2v_A=\pm2\quad\Rightarrow\quad v_A=1\text{ or }-1\,\mathrm{m\,s^{-1}}.$$

Use total momentum separately for each branch:

$$10=2v_A+3v_B.$$

| Branch | Final velocity of A | Final velocity of B | Final kinetic energy | Decrease |
| --- | --- | --- | --- | --- |
| A continues right | $1$ | $\frac83$ | $\frac{35}{3}\,\mathrm J$ | $\frac{40}{3}\,\mathrm J$ |
| A reverses | $-1$ | $4$ | $25\,\mathrm J$ | $0\,\mathrm J$ |

Velocities in the table are in metres per second, positive to the right. For example, in the first branch

$$E_{\mathrm{after}}=\frac12(2)(1)^2+\frac12(3)\left(\frac83\right)^2=\frac{35}{3}\,\mathrm J.$$

Both branches conserve momentum and have nonnegative energy decreases. In each, the particle on the right has a greater velocity, so their separation increases immediately afterwards. The given data allow both branches; assuming that A must keep moving right would discard a valid possibility. A claim of no kinetic-energy loss would select the second branch.

</div>

## Check the quantities {#quantity-check}

<div class="lesson-check" markdown="1">

### What do the quantities mean? {#check-your-starting-point}

**Question:** (a) A particle of mass $2\,\mathrm{kg}$ has velocity $-3\,\mathrm{m\,s^{-1}}$. State its momentum, including direction. (b) Does constant nonzero velocity imply zero momentum? (c) Two particles have equal nonzero momentum magnitudes but different masses. Must their kinetic energies be equal?

<details markdown="1">
<summary>Hint</summary>

Separate directed momentum, change of momentum and energy from squared speed.

</details>

<details markdown="1">
<summary>Solution and check</summary>

(a) $p=-6\,\mathrm{kg\,m\,s^{-1}}$, in the negative direction. (b) No: momentum is constant, not necessarily zero. (c) No. Substitution of speed into kinetic energy gives

$$E_k=\frac{p^2}{2m}.$$

For the same nonzero momentum magnitude, the smaller mass has greater kinetic energy. If you used speed in (a), write an arrow for the chosen positive direction and try again. If you answered yes to (b), distinguish a quantity from its rate of change.

</details>

</div>

## Independent Practice

<div class="lesson-check" markdown="1">

### Q1 — A trolley record {#q1--read-a-forcetime-record}

**Self-written task.** A trolley of mass $0.5\,\mathrm{kg}$ has initial velocity $-4\,\mathrm{m\,s^{-1}}$. Its resultant force varies linearly from zero at time zero to $3\,\mathrm N$ at $t=1\,\mathrm s$, then linearly to zero at $t=2\,\mathrm s$. The force is nonnegative throughout. Find its final velocity and the change in kinetic energy. Explain why the sign of impulse alone does not determine the sign of the energy change.

![Constructed force–time graph: straight segments from (0 seconds, 0 newtons) to (1 second, 3 newtons) to (2 seconds, 0 newtons); both axes and units are labelled](/assets/img/a2-math-mech/momentum-force-time.svg)

<details markdown="1">
<summary>Hint</summary>

Use signed area for impulse. Find the final velocity before squaring velocities for energy.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$J=\frac12(2)(3)=3\,\mathrm{N\,s},\qquad 3=0.5(v+4),\qquad v=2\,\mathrm{m\,s^{-1}}.$$

$$\Delta E_k=\frac12(0.5)(2^2-(-4)^2)=-3\,\mathrm J.$$

The trolley reverses direction and ends with a smaller speed. Impulse measures the signed momentum change; it is not energy transferred. Positive force does negative work while velocity is negative and positive work after reversal. If you found a positive energy change by using impulse as work, check their units and the variable on the horizontal axis.

</details>

</div>

<div class="lesson-check" markdown="1">

### Q2 — Two moving particles {#q2--test-a-proposed-collision}

**Self-written task.** Two particles each have mass $1\,\mathrm{kg}$. Initially A is to the left of B, moving right at $3\,\mathrm{m\,s^{-1}}$, and B is at rest. They collide on a smooth horizontal line with negligible external impulse and no release of stored energy. The final momentum magnitude of A is $1\,\mathrm{kg\,m\,s^{-1}}$. Find all algebraic velocity branches and decide which fit this model. State the kinetic-energy decrease for every admissible branch. No method is specified.

<details markdown="1">
<summary>Hint</summary>

Keep both signs of the given magnitude. Test conservation, separation and the energy restriction separately.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$v_A=\pm1,\qquad v_A+v_B=3.$$

The branches are $(v_A,v_B)=(1,2)$ and $(-1,4)$, with velocities in metres per second. The initial energy is $4.5\,\mathrm J$. The final energies are $2.5\,\mathrm J$ and $8.5\,\mathrm J$ respectively. Both pairs separate, but the second gains energy and violates the stated passive model. Only the first is admissible, with decrease $2\,\mathrm J$.

**Feedback:** momentum conservation is necessary here, but is not the only model check. Do not erase a branch just because a velocity is negative; test the actual restrictions.

</details>

</div>

<div class="lesson-check" markdown="1">

### A particle near a wall {#retry--change-the-system-boundary}

**Question:** A particle of mass $0.5\,\mathrm{kg}$ approaches a fixed wall with velocity $3\,\mathrm{m\,s^{-1}}$ and rebounds with velocity $-2\,\mathrm{m\,s^{-1}}$. A student says its momentum is conserved because the floor is smooth. Assess the statement and find the impulse exerted by the wall and the decrease in kinetic energy. Neglect other impulses during impact.

<details markdown="1">
<summary>Hint</summary>

Choose the particle as system. Which side of the boundary is the wall?

</details>

<details markdown="1">
<summary>Solution and check</summary>

The wall is outside the particle system and exerts an external impulse:

$$J=0.5(-2-3)=-2.5\,\mathrm{N\,s}.$$

The impulse acts away from the wall. The energy decrease is

$$\frac12(0.5)(3^2-(-2)^2)=1.25\,\mathrm J.$$

The smooth floor does not remove the wall's force. Choose the system first, then identify its external impulses.

For a smooth-floor conservation error, revisit [system and external impulse](#choose-the-system-before-conserving-momentum), then try the system retry below.

</details>

</div>

<div class="lesson-check" markdown="1">

### Which system? {#system-check}

**Question:** Two trolleys collide on a smooth horizontal track. During impact a motor provides a non-negligible rightwards impulse to trolley A. For the system A alone and for the system A+B, identify external horizontal impulses. Is smoothness sufficient to conserve total horizontal momentum?

<details markdown="1">
<summary>Hint</summary>

The contact force is external to one trolley but internal to the pair. Is the motor inside the system?

</details>

<details markdown="1">
<summary>Solution and check</summary>

For A alone, the impulse from B and the motor impulse are external. For A+B, the collision impulses cancel internally but the motor impulse remains, so total momentum increases. Smoothness removes track friction, not every external impulse. Revisit [the general momentum relation](#choose-the-system-before-conserving-momentum), then try the next task.

</details>

</div>

<div class="lesson-check" markdown="1">

### After a spring is released {#system-retry}

**Question:** Trolleys A and B of masses $2\,\mathrm{kg}$ and $3\,\mathrm{kg}$ are initially at rest on a smooth horizontal track. A light compressed spring between them is released and drops clear without a horizontal impulse. Neglect external horizontal impulses. A moves with velocity $-3\,\mathrm{m\,s^{-1}}$. Find B's velocity and the increase in total kinetic energy. Explain momentum conservation for the pair and for A alone.

<details markdown="1">
<summary>Hint</summary>

Stored energy is released internally; compare the pair with A alone.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$0=2(-3)+3v_B\quad\Rightarrow\quad v_B=2\,\mathrm{m\,s^{-1}}.$$

$$E_{\mathrm{before}}=0,\qquad E_{\mathrm{after}}=\frac12(2)(3^2)+\frac12(3)(2^2)=15\,\mathrm J.$$

The pair keeps zero total momentum. A alone changes momentum because of the impulse from the other trolley/spring. The kinetic-energy increase comes from stored spring energy, so the no-release passive-collision restriction does not apply. Zero total momentum does not imply zero total kinetic energy.

</details>

</div>

<div class="lesson-check" markdown="1">

### Another force record {#impulse-retry}

**Question:** A $2\,\mathrm{kg}$ particle initially has velocity $-1\,\mathrm{m\,s^{-1}}$. Its resultant force is $-2\,\mathrm N$ for the first second. Over the next two seconds the force increases linearly from zero to $3\,\mathrm N$. Find the final velocity and change in kinetic energy. Explain why a positive net impulse need not mean an energy gain.

<details markdown="1">
<summary>Hint</summary>

Area below the time axis is negative. Find final velocity before energy.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$J=-2(1)+\frac12(2)(3)=1\,\mathrm{N\,s}.$$

$$1=2(v-(-1))\quad\Rightarrow\quad v=-0.5\,\mathrm{m\,s^{-1}}.$$

$$\Delta E_k=\frac12(2)\bigl((-0.5)^2-(-1)^2\bigr)=-0.75\,\mathrm J.$$

Net impulse is positive but final speed is smaller, so energy decreases. For area or unit errors, revisit [impulse and its example](#from-force-to-impulse).

</details>

</div>

<div class="lesson-check" markdown="1">

### Another collision record {#collision-retry}

**Question:** A of mass $1\,\mathrm{kg}$ is initially to the left of B of mass $2\,\mathrm{kg}$. They move right at $4\,\mathrm{m\,s^{-1}}$ and $1\,\mathrm{m\,s^{-1}}$ respectively. After collision, the magnitude of B's momentum is $4\,\mathrm{kg\,m\,s^{-1}}$. External horizontal impulse is negligible and no stored energy is released. Find all algebraic velocity branches and decide which can fit the model. Find the energy decrease and discuss their relative motion for an admissible branch.

<details markdown="1">
<summary>Hint</summary>

The given magnitude now belongs to the particle on the right. Keep both signs, then check energy and relative motion.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$p_{\mathrm{before}}=1(4)+2(1)=6,\qquad E_{\mathrm{before}}=\frac12(1)(4^2)+\frac12(2)(1^2)=9\,\mathrm J.$$

$$v_B=\pm2,\qquad v_A+2v_B=6.$$

$$ (v_A,v_B)=(2,2)\quad\text{or}\quad(10,-2)\quad\mathrm{m\,s^{-1}}.$$

$$E_{\mathrm{after}}=6\,\mathrm J\quad\text{or}\quad54\,\mathrm J.$$

The first branch fits, with an energy decrease of 3 J. Equal velocities allow contact motion together; separation is not compulsory. The second gains energy and has continuing approach, so it fails as post-collision velocities. For a missing branch or rejection based only on a minus sign, revisit [the two-direction example](#example--a-magnitude-can-hide-two-directions).

</details>

</div>

## Return after Work and Energy {#later-check}

After [Work and Energy](/alevel/a2-mathematics/mechanics/work-and-energy/), close the answers and repeat [the spring record](#system-retry), explaining the different conclusions about momentum and kinetic energy. Then use the course [mixed problems](/alevel/a2-mathematics/mechanics/#mixed-problems) and [later review](/alevel/a2-mathematics/mechanics/#later-review), naming the system and external-impulse condition first.

## Examination Connection and Next Step

The reference for assessment is **OxfordAQA 9660/MA05, January 2025, Q8(a–c)** (QP pp16–17; Final v1.0 MS pp15–16), read with its corresponding final mark scheme: [question paper](/assets/pdf/fx-cg50/references/oxfordaqa-ma05-2025-january-question-paper.pdf) · [mark scheme](/assets/pdf/fx-cg50/references/oxfordaqa-ma05-2025-january-mark-scheme.pdf). It connects AS momentum, direction branches and energy. The tasks on this page are newly written, not reproductions or official marked questions.

Scope: [9660 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf), M1.4 and M2.6 with AS prerequisites. The January 2025 paper defaults to two significant figures for calculator final answers unless a question says otherwise; this does not replace the self-written convention stated above.

Continue to [Work and Energy](/alevel/a2-mathematics/mechanics/work-and-energy/) or return to [AS Mathematics](/alevel/as-mathematics/). Before moving on, explain in English: **“Momentum is conserved because …; kinetic energy …; the negative sign means …”**, supplying reasons from the chosen system and model.
