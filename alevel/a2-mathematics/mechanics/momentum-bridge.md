---
title: AS Momentum Bridge — Direction and Energy
layout: subjects
mathjax: true
grade: a2
subject: m2
permalink: /alevel/a2-mathematics/mechanics/momentum-bridge/
toc_headings: h2
study_page: true
---

[A2 Mechanics](/alevel/a2-mathematics/mechanics/) · MA02 M1.4 prerequisite for MA05

Can you decide what is conserved before calculating a collision? Use this short bridge before [Work and Energy](/alevel/a2-mathematics/mechanics/work-and-energy/). It revisits AS momentum and impulse, then connects them to A2 energy. It does not require a coefficient of restitution.

**Before you start:** signed one-dimensional velocity, Newton's second law, areas of triangles and kinetic energy. Work in a single inertial frame. The self-written tasks below have no official marks; use exact values where possible and three significant figures otherwise. Authentic examination questions follow their own precision instructions.

## Check Your Starting Point

**Self-written diagnostic.** (a) A particle of mass $2\,\mathrm{kg}$ has velocity $-3\,\mathrm{m\,s^{-1}}$. State its momentum, including direction. (b) Does constant nonzero velocity imply zero momentum? (c) Two particles have equal nonzero momentum magnitudes but different masses. Must their kinetic energies be equal?

<details markdown="1">
<summary>Diagnostic feedback</summary>

(a) $p=-6\,\mathrm{kg\,m\,s^{-1}}$, in the negative direction. (b) No: momentum is constant, not necessarily zero. (c) No. Substitution of speed into kinetic energy gives

$$E_k=\frac{p^2}{2m}.$$

For the same nonzero momentum magnitude, the smaller mass has greater kinetic energy. If you used speed in (a), write an arrow for the chosen positive direction and try again. If you answered yes to (b), distinguish a quantity from its rate of change.

</details>

## From Force to Impulse

Momentum is a signed quantity in one dimension:

$$p=mv,\qquad [p]=\mathrm{kg\,m\,s^{-1}}.$$

For constant mass, Newton's second law connects resultant force and change of momentum. Over a time interval, the resultant **impulse** is

$$J=\Delta p=m(v-u)=\int_{t_0}^{t_1}F(t)\,dt.$$

On a force–time graph this is signed area: below the time axis contributes negative impulse. A constant force gives impulse equal to force times duration. The unit newton second is equivalent to the momentum unit. Impulse is not work: work depends on displacement, not elapsed time.

### Example — A Velocity Reversal

**Question:** A particle of mass $2\,\mathrm{kg}$ has initial velocity $-1\,\mathrm{m\,s^{-1}}$. A resultant force $F(t)=6t\,\mathrm N$ acts in the positive direction for $0\leq t\leq2\,\mathrm s$. Find its velocity at the end of the interval.

The force–time graph is a straight line from zero to twelve newtons, so its triangular area is twelve newton seconds. Integration gives the same signed impulse:

$$J=\int_0^2 6t\,dt=[3t^2]_0^2=12\,\mathrm{N\,s}.$$

Use the signed initial velocity:

$$12=2(v-(-1))\quad\Rightarrow\quad v=5\,\mathrm{m\,s^{-1}}.$$

**Check:** the momentum changes from minus two to plus ten kilogram metres per second, a change of plus twelve. Replacing the initial velocity by its speed would give the wrong final velocity. The particle first slows, stops and reverses; a positive force does not require a positive initial velocity.

## Choose the System Before Conserving Momentum

For a system of two particles, their mutual collision forces are internal. The impulses of that pair cancel in the system total. Total momentum is conserved **only if the resultant external impulse is zero or negligible** over the collision:

$$m_Au_A+m_Bu_B=m_Av_A+m_Bv_B.$$

Use one positive direction for both particles. A smooth horizontal surface removes horizontal friction, but a wall can still exert a horizontal external impulse on a particle. Do not conserve the particle's momentum in a wall rebound.

Kinetic energy is a scalar:

$$E_{\mathrm{before}}=\frac12m_Au_A^2+\frac12m_Bu_B^2,\qquad E_{\mathrm{after}}=\frac12m_Av_A^2+\frac12m_Bv_B^2.$$

Momentum conservation alone does not make these equal. The decrease in kinetic energy is the initial value minus the final value. In a passive collision model with no release of stored energy it cannot be negative. Other collision models need their energy source stated explicitly.

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

## Independent Practice

### Q1 — Read a Force–Time Record

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

### Q2 — Test a Proposed Collision

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

### Retry — Change the System Boundary

**Self-written task.** A particle of mass $0.5\,\mathrm{kg}$ approaches a fixed wall with velocity $3\,\mathrm{m\,s^{-1}}$ and rebounds with velocity $-2\,\mathrm{m\,s^{-1}}$. A student says its momentum is conserved because the floor is smooth. Assess the statement and find the impulse exerted by the wall and the decrease in kinetic energy. Neglect other impulses during impact.

<details markdown="1">
<summary>Retry check</summary>

The wall is outside the particle system and exerts an external impulse:

$$J=0.5(-2-3)=-2.5\,\mathrm{N\,s}.$$

The impulse acts away from the wall. The energy decrease is

$$\frac12(0.5)(3^2-(-2)^2)=1.25\,\mathrm J.$$

The smooth floor does not remove the wall's force. Choose the system first, then identify its external impulses.

</details>

## Examination Connection and Next Step

The reference for assessment is **OxfordAQA 9660/MA05, January 2025, Q8**, read with its corresponding final mark scheme: [question paper](/assets/pdf/fx-cg50/references/oxfordaqa-ma05-2025-january-question-paper.pdf) · [mark scheme](/assets/pdf/fx-cg50/references/oxfordaqa-ma05-2025-january-mark-scheme.pdf). It connects AS momentum, direction branches and energy. The tasks on this page are newly written, not reproductions or official marked questions.

Scope: [9660 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf), M1.4 and M2.6 with AS prerequisites. The January 2025 paper defaults to two significant figures for calculator final answers unless a question says otherwise; this does not replace the self-written convention stated above.

Continue to [Work and Energy](/alevel/a2-mathematics/mechanics/work-and-energy/) or return to [AS Mathematics](/alevel/as-mathematics/). Before moving on, explain in English: **“Momentum is conserved because …; kinetic energy …; the negative sign means …”**, supplying reasons from the chosen system and model.
