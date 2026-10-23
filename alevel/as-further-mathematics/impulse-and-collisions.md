---
title: "Variable-force impulse and collisions"
layout: subjects
mathjax: true
grade: as
subject: as-further-mathematics
lang: en
permalink: /alevel/as-further-mathematics/impulse-and-collisions/
toc_headings: "#start, #model, #demonstration, #signed-area, #collision-model, #wall-model, #practice, #retry, #later-review, #next-step, #sources"
study_page: true
reading_layout: true
---

[AS Further Mathematics](/alevel/as-further-mathematics/)

A short contact can change a velocity sharply. The key decisions are which object or system to study, which direction is positive and which forces contribute impulse during that interval. We will connect a signed force graph to a velocity change, then distinguish two-particle and fixed-wall impacts.

All examples and exercises are **self-written**, with no official marks. Attempt each student task before opening its separate hint and solution.

## Before you start {#start}

You need signed velocity, momentum, definite integration, triangle/trapezium areas and simultaneous equations. Revisit [AS momentum](/alevel/as-mathematics/momentum/) for momentum and kinetic energy, [AS integration](/alevel/as-mathematics/integration/) for integration, and [dimensions](/alevel/as-further-mathematics/dimensions/#units) for N s and kg m s⁻¹.

For the energy checks use $K=\tfrac12mv^2$: kinetic energy is a nonnegative scalar, so square the signed velocity.

<section class="lesson-check" markdown="1">

### Separate speed and velocity {#entry-check}

**Entry check (self-written):** Right is positive. A 2 kg particle has velocity −3 m s⁻¹. State its speed, momentum and kinetic energy. A constant net force of +4 N acts for 0.5 s. Find its impulse and the resulting velocity.

<details markdown="1"><summary>Hint</summary>

Speed is a magnitude; momentum keeps the velocity sign. Use the change in momentum, not the final momentum, for the impulse.

</details>

<details markdown="1"><summary>Solution and repair</summary>

$$\begin{aligned}\text{speed}&=3\ \mathrm{m\,s^{-1}},\\p&=-6\ \mathrm{kg\,m\,s^{-1}},\\K&=\tfrac12(2)(-3)^2=9\ \mathrm J,\\J&=4(0.5)=2\ \mathrm{N\,s},\\v&=-3+2/2=-2\ \mathrm{m\,s^{-1}}.\end{aligned}$$

The positive force makes the negative velocity less negative; it need not reverse the motion. If you found +4 m s⁻¹, reconstruct initial and final momenta separately before continuing.

</details>

</section>

## 1. Choose the system and a signed impulse {#model}

Model each object as a particle of constant positive mass, moving on one straight line. Use one fixed axis and an interval from just before to just after the specified event. State the smoothness and contact assumptions; “smooth” removes tangential friction, not the normal contact force. A short collision permits neglecting other impulses only when they are negligible compared with the contact impulse.

### From a force to a change of momentum {#impulse}

For one particle, F is the signed resultant force along the chosen axis. Newton’s second law gives the rate of momentum change. Integrating over the interval adds all the small signed contributions.

$$\begin{aligned}p&=mv,\qquad F=\frac{dp}{dt},\\J&=\int_{t_1}^{t_2}F(t)\,dt\\&=p(t_2)-p(t_1)=m(v-u).\end{aligned}$$

The impulse unit is N s, equivalent to kg m s⁻¹. For constant F, $J=F\Delta t$; for variable F use the integral or signed graph area. An average force can replace F only if it has the same total impulse: $F_{\rm av}=J/\Delta t$ for a nonzero duration. The peak or final force is generally not that average.

For two particles together, their mutual impulses are equal and opposite and cancel in the total. Total momentum is conserved only if the **external impulse on that system** is zero or negligible. A wall exerts external impulse on a particle considered alone, so that particle’s momentum is not conserved.

## 2. Read a force pulse continuously {#demonstration}

<section class="worked-example" markdown="1">

### A positive impulse without a reversal

**Demonstration (self-written):** A 2 kg particle initially moves at −1 m s⁻¹. Its net force is $F(t)=6t(1-t)$ N for $0\le t\le1$ s. Find its final velocity.

Take the given signs as the fixed positive direction. In numerical force laws here, t is the time value in seconds and the given expression supplies the force value in newtons; dimensional coefficients are implicit. The force varies and is nonnegative throughout the stated interval, so integrate it rather than multiplying its final value by the duration.

$$\begin{aligned}J&=\int_0^1(6t-6t^2)\,dt\\&=[3t^2-2t^3]_0^1\\&=1\ \mathrm{N\,s},\\2(v-(-1))&=1,\\v&=-0.5\ \mathrm{m\,s^{-1}}.\end{aligned}$$

Check: the momentum changes from −2 to −1 kg m s⁻¹, a change of +1. The impulse is positive while the final velocity is still negative. Both endpoint forces are zero, yet the area between them is positive.

</section>

## When the force changes sign {#signed-area}

A force graph above the time axis contributes positive impulse; below it contributes negative impulse. Add these signed contributions, rather than adding all geometrical areas as positive numbers. A powered actuator can pull and push along a rail, so both force signs can occur. The following example uses such an external force, not a wall that would have to pull a particle back.

<section class="worked-example" markdown="1">

### Connect the graph to the velocity

**Demonstration (self-written):** A 2 kg particle on a horizontal rail has initial velocity −1 m s⁻¹. A powered actuator provides net force $F(t)=4-2t$ N for $0\le t\le3$ s. Find the impulse and final velocity, and interpret the force zero at t=2 s.

![Net force against time: a straight line from (0 s,4 N) through (2 s,0 N) to (3 s,−2 N). The region above the axis is marked plus and hatched differently from the minus region below.](/alevel/as-further-mathematics/diagrams/signed-force.svg){: width="560" height="420" }

The line crosses zero at two seconds. The first triangle contributes +4 N s and the second contributes −1 N s; the signed total is +3 N s. Integration gives the same result.

$$\begin{aligned}J&=\int_0^3(4-2t)\,dt\\&=[4t-t^2]_0^3=3\ \mathrm{N\,s},\\v(3)&=-1+3/2=0.5\ \mathrm{m\,s^{-1}},\\v(2)&=-1+4/2=1\ \mathrm{m\,s^{-1}}.\end{aligned}$$

The unsigned area would be 5 N s and would be wrong for impulse. At t=2 the acceleration changes from positive to negative, but velocity is +1 m s⁻¹, so this is not a reversal of motion. The final velocity also agrees with a momentum change of +3 kg m s⁻¹.

</section>

## 3. Model a collision between two particles {#collision-model}

Put A to the left of B and choose right as positive. Before contact they approach if $u_A>u_B$; the approach speed is the difference of these signed velocities. After contact a conventional separating state requires $v_B\ge v_A$. The coefficient of restitution e compares the separation speed with the approach speed.

$$\begin{aligned}v_B-v_A&=e(u_A-u_B),\\0&\le e\le1.\end{aligned}$$

These are one-dimensional, direct impacts with no additional energy released into the relative motion. The conventional range includes e=0 (equal immediate velocities) and e=1 (elastic impact). Equal velocities at e=0 do not establish a permanent bond. An e outside the range signals inconsistent data or a different physical model; do not hide it by taking an absolute value.

If the external impulse on A+B is negligible, also use

$$\begin{aligned}m_Au_A+m_Bu_B\\=m_Av_A+m_Bv_B.\end{aligned}$$

Restitution alone does not determine both velocities. Momentum alone does not determine how much relative motion remains. Together they supply two independent equations, provided the masses are positive and the particles really approach.

<section class="worked-example" markdown="1">

### Follow signs through one impact {#two-particles}

**Demonstration (self-written):** A (2 kg) has initial velocity 3 m s⁻¹; B (1 kg) has velocity −1 m s⁻¹. They collide on a smooth horizontal line with negligible external impulse and $e=1/2$.

![Before impact, A of mass 2 kg is left of B of mass 1 kg; A moves right at 3 m s⁻¹ and B left at 1 m s⁻¹. After impact, A moves right at 1 m s⁻¹ and B right at 3 m s⁻¹. A separate arrow marks right as positive; velocity arrows use a common scale.](/alevel/as-further-mathematics/diagrams/collision-line.svg){: width="560" height="460" }

The approach speed is 4 m s⁻¹, not 2. Select A+B so the contact impulses cancel. Use the signed initial momentum and the restitution relation.

$$\begin{aligned}2v_A+v_B&=2(3)+1(-1)=5,\\v_B-v_A&=\tfrac12(3-(-1))=2,\\v_A&=1\ \mathrm{m\,s^{-1}},\\v_B&=3\ \mathrm{m\,s^{-1}}.\end{aligned}$$

The momentum is still 5 kg m s⁻¹ and B is faster than A, so they separate. Now change the system boundary: for A alone and B alone, the contact impulses are external.

$$\begin{aligned}J_A&=2(1-3)=-4\ \mathrm{N\,s},\\J_B&=1(3-(-1))=4\ \mathrm{N\,s},\\K_{\rm before}&=\tfrac12(2)(3^2)+\tfrac12(1)(1^2)\\&=9.5\ \mathrm J,\\K_{\rm after}&=\tfrac12(2)(1^2)+\tfrac12(1)(3^2)\\&=5.5\ \mathrm J.\end{aligned}$$

The equal opposite impulses check the system calculation. The kinetic-energy loss is 4 J, so energy conservation would have been an incorrect second equation for these particles’ translational kinetic energy. The lost kinetic energy is transferred to other forms, not destroyed.

</section>

A useful general check covers the full conventional range. Let V be the common centre-of-mass velocity and μ the reduced mass. Expanding the kinetic energies using total momentum and the relative speeds gives

$$\begin{aligned}S&=m_A+m_B>0,\\V&=\frac{m_Au_A+m_Bu_B}{S},\\\mu&=\frac{m_Am_B}{S},\quad q=u_A-u_B>0,\\u_A&=V+\tfrac{m_B}{S}q,\\u_B&=V-\tfrac{m_A}{S}q,\\v_A&=V-\tfrac{m_B}{S}eq,\\v_B&=V+\tfrac{m_A}{S}eq.\end{aligned}$$

Substitute these into the mass-weighted squares. The cross terms cancel, giving

$$\begin{aligned}K_{\rm before}&=\tfrac12 SV^2+\tfrac12\mu q^2,\\K_{\rm after}&=\tfrac12 SV^2+\tfrac12\mu e^2q^2,\\K_{\rm loss}&=\tfrac12\mu(1-e^2)q^2\ge0.\end{aligned}$$

This identity follows by expansion, not by assuming kinetic-energy conservation. For positive masses and genuine approach, the loss is zero exactly when e=1. At e=0 all relative translational kinetic energy is removed at that instant, while the common motion can remain.

## 4. Change the boundary: a fixed wall {#wall-model}

Take positive **away from the wall**. An approaching speed u is positive as a speed, but the signed initial velocity is −u. For a fixed smooth wall and a direct normal impact, the wall velocity is zero. With negligible other impulse,

$$\begin{aligned}v&=eu,\qquad u>0,\\J_{\rm wall}&=m(v+u),\\0\le e\le1&\iff 0\le v\le u.\end{aligned}$$

The last equivalence uses u>0: divide by u without reversing inequalities. If rebound must be strictly outward, require v>0 and exclude the no-rebound endpoint. A fixed wall can transfer momentum while doing no macroscopic translational work at its fixed point; inelastic losses belong to deformation and other internal processes. Do not conserve the particle’s momentum or assume all impacts are elastic.

## 5. Choose the equations yourself {#practice}

<section class="lesson-check" markdown="1">

### Keep the wall signs {#scaffold-wall}

**Scaffold (self-written):** A 0.5 kg particle approaches a fixed wall at 4 m s⁻¹. Positive is away from the wall, and $e=0.75$. Find signed velocities and the wall's impulse on the particle.

<details markdown="1"><summary>Hint</summary>

The initial signed velocity is negative. Use restitution to obtain the outward final velocity, then apply impulse to the particle alone.

</details>

<details markdown="1"><summary>Solution and repair</summary>

$$\begin{aligned}u_{\rm signed}&=-4\ \mathrm{m\,s^{-1}},\\v&=0.75(4)=3\ \mathrm{m\,s^{-1}},\\J&=0.5(3-(-4))\\&=3.5\ \mathrm{N\,s}.\end{aligned}$$

The positive impulse points away from the wall. The rebound speed is below 4 m s⁻¹, as required. If you subtracted speeds, revisit [the wall model](#wall-model), then attempt [the wall retry](#retry-wall).

</details>

</section>

<section class="lesson-check" markdown="1">

### Read and construct a graph {#practice-area}

**Independent task (self-written):** A 2 kg particle on a rail initially has velocity +1 m s⁻¹. A powered actuator supplies the net force whose force–time graph joins (0 s,0 N), (1 s,4 N), (3 s,−4 N), (4 s,0 N) by straight segments. Draw and label the graph, find the total impulse and final velocity, and find when the velocity is greatest. Does a change in force sign imply a reversal of motion?

<details markdown="1"><summary>Hint</summary>

Locate all zeros, then separate signed areas. A maximum velocity is controlled by the sign of acceleration; check the velocity there.

</details>

<details markdown="1"><summary>Solution and repair</summary>

$$\begin{aligned}t_{\rm interior\ zero}&=2\ \mathrm s,\\J_+&=2+2=4\ \mathrm{N\,s},\\J_-&=-2-2=-4\ \mathrm{N\,s},\\J&=0,\qquad v(4)=1\ \mathrm{m\,s^{-1}},\\v(2)&=1+4/2=3\ \mathrm{m\,s^{-1}}.\end{aligned}$$

The graph rises to (1,4), crosses at (2,0), reaches (3,−4) and ends at (4,0). Velocity increases to t=2 then decreases, so its maximum is 3 m s⁻¹ at t=2 s. It stays between 1 and 3 m s⁻¹, so no reversal occurs. Zero total impulse means equal initial and final momentum, not constant velocity throughout.

If negative area was added positively, return to [signed area](#signed-area), then do [the area retry](#retry-area). If you equated a force zero with a velocity zero, reconstruct momentum at that time.

</details>

</section>

<section class="lesson-check" markdown="1">

### Two moving objects {#practice-pair}

**Independent task (self-written):** A is to the left of B on a smooth horizontal line. Their masses are 1 kg and 2 kg, and their initial velocities are +4 and −1 m s⁻¹, respectively. They collide with negligible external impulse and $e=1/2$. Choose a system and draw signed before/after arrows. Find both final velocities, each contact impulse and the kinetic-energy loss. Check approach, separation and physical reasonableness.

<details markdown="1"><summary>Hint</summary>

Use one direction throughout. Work with A+B for the final velocities, then with each particle separately for its impulse.

</details>

<details markdown="1"><summary>Solution and repair</summary>

$$\begin{aligned}v_A+2v_B&=4-2=2,\\v_B-v_A&=\tfrac12(4-(-1))=\tfrac52,\\v_A&=-1\ \mathrm{m\,s^{-1}},\\v_B&=\tfrac32\ \mathrm{m\,s^{-1}},\end{aligned}$$

$$\begin{aligned}J_A&=1(-1-4)=-5\ \mathrm{N\,s},\\J_B&=2(\tfrac32+1)=5\ \mathrm{N\,s},\end{aligned}$$

$$\begin{aligned}K_{\rm before}&=9\ \mathrm J,\end{aligned}$$

$$\begin{aligned}K_{\rm after}&=\tfrac12+\tfrac94=\tfrac{11}4\ \mathrm J,\\K_{\rm loss}&=\tfrac{25}4\ \mathrm J.\end{aligned}$$

Draw A’s final arrow left and B’s right. Initial approach speed is 5 m s⁻¹ and final separation speed is 2.5 m s⁻¹. Momentum is 2 kg m s⁻¹ on both sides; impulses cancel and energy does not increase. A reversing is allowed; forcing both final velocities positive would be an unjustified constraint.

For a sign or system error, revisit [the continuous impact example](#two-particles), then attempt [the pair retry](#retry-pair).

</details>

</section>

<section class="lesson-check" markdown="1">

### An impact with an unknown speed {#practice-wall}

**Independent task (self-written):** A 1 kg particle approaches a fixed wall with speed u. Positive is away from the wall. The net contact force is $F(t)=12t(1-t)$ N for $0\le t\le1$ s; other impulse is negligible. Assume a conventional restitution model $0\le e\le1$ and nonnegative outward velocity immediately after contact. Find the impulse, express the final signed velocity and e in terms of u, and find the physically permitted range of u. Explain which boundaries correspond to no rebound and an elastic impact.

<details markdown="1"><summary>Hint</summary>

Initial signed velocity is −u. Integrate first; then impose both nonnegative outward velocity and the restitution range.

</details>

<details markdown="1"><summary>Solution and repair</summary>

$$\begin{aligned}J&=\int_0^1(12t-12t^2)\,dt\\&=[6t^2-4t^3]_0^1=2\ \mathrm{N\,s}.\end{aligned}$$

$$\begin{aligned}v&=2-u,\\e&=\frac{2-u}{u},\quad u>0,\\0\le2-u&\le u,\\1\le u&\le2\ \mathrm{m\,s^{-1}}.\end{aligned}$$

Because u>0, the double inequality is equivalent to the conventional conditions for every allowed u: its left side gives u≤2 and its right side gives u≥1. Conversely every u in that interval satisfies both, so the range is sufficient for this endpoint impulse/restitution model.

At $u=2$, v is zero and $e=0$: no immediate rebound. At $u=1$, $v=u$ and $e=1$: elastic impact. Strictly positive rebound excludes $u=2$. These endpoint conditions alone do not specify a full deformation/contact history. A force pulse without the impact assumptions does not establish this range.

If the range is missing one bound, return to [the wall inequalities](#wall-model), then attempt [the wall retry](#retry-wall).

</details>

</section>

## 6. Repair and retry {#retry}

Choose the retry matching the error. Use a fresh sketch and keep the earlier solution closed.

<section class="lesson-check" markdown="1">

### A different force history {#retry-area}

**Retry (self-written):** A 1 kg particle initially has velocity +2 m s⁻¹. Its net force graph consists of straight segments joining (0 s,−2 N), (2 s,2 N), (3 s,0 N). Draw it, find the signed impulse and final velocity, and explain why the total geometric area is not the impulse.

<details markdown="1"><summary>Hint</summary>

The first line crosses the axis partway through its interval. Split there.

</details>

<details markdown="1"><summary>Solution and repair</summary>

$$\begin{aligned}t_{\rm crossing}&=1\ \mathrm s,\\J_-&=-1\ \mathrm{N\,s},\\J_+&=1+1=2\ \mathrm{N\,s},\\J&=1\ \mathrm{N\,s},\\v&=2+1=3\ \mathrm{m\,s^{-1}}.\end{aligned}$$

The total unsigned area is 3 N s; the part below the axis must subtract. If you still add it, mark a negative acceleration arrow on the first second and revisit [signed area](#signed-area).

</details>

</section>

<section class="lesson-check" markdown="1">

### Check another pair {#retry-pair}

**Retry (self-written):** A of mass 3 kg is left of B of mass 1 kg on a smooth horizontal line. Initial velocities are +2 and 0 m s⁻¹. External impulse is negligible and $e=1/3$. Draw signed before/after arrows and find final velocities, contact impulses and kinetic-energy loss.

<details markdown="1"><summary>Hint</summary>

The initial total momentum is positive. The final separation speed is one third of the initial approach speed.

</details>

<details markdown="1"><summary>Solution and repair</summary>

$$\begin{aligned}3v_A+v_B&=6,\\v_B-v_A&=\tfrac23,\\v_A&=\tfrac43\ \mathrm{m\,s^{-1}},\\v_B&=2\ \mathrm{m\,s^{-1}},\end{aligned}$$

$$\begin{aligned}J_A&=3(\tfrac43-2)=-2\ \mathrm{N\,s},\\J_B&=2\ \mathrm{N\,s},\end{aligned}$$

$$\begin{aligned}K_{\rm after}&=\tfrac83+2=\tfrac{14}3\ \mathrm J,\\K_{\rm loss}&=6-\tfrac{14}3=\tfrac43\ \mathrm J.\end{aligned}$$

Both final arrows point right and B is faster. The momentum sum is 6, and the impulses cancel. A sign failure calls for reconstructing [the restitution relation](#collision-model) from the arrow diagram rather than memorising a formula.

</details>

</section>

<section class="lesson-check" markdown="1">

### Judge two impulse claims {#retry-wall}

**Retry (self-written):** A 2 kg particle approaches a fixed wall at 3 m s⁻¹. Positive is away from the wall and other impulse is negligible. One measurement gives a wall impulse of +9 N s. Find final velocity and e. Would an impulse of +3 N s instead describe a completed conventional impact with nonnegative outward final velocity? Justify both decisions. For the same mass and approach speed, determine the full range of signed wall impulses compatible with a completed conventional impact and nonnegative outward final velocity. Explain both boundary cases.

<details markdown="1"><summary>Hint</summary>

Use the same negative initial velocity in both cases. Do not discard a negative final velocity without interpreting it.

</details>

<details markdown="1"><summary>Solution and repair</summary>

$$\begin{aligned}2(v+3)&=9,\\v&=1.5\ \mathrm{m\,s^{-1}},\\e&=\tfrac12,\\2(v+3)&=3,\\v&=-1.5\ \mathrm{m\,s^{-1}}.\end{aligned}$$

The first claim is compatible with rebound and 0≤e≤1. The second still has motion towards the wall; it cannot be the specified completed, separating impact. It might describe an earlier instant, which would be a different interval. If you accepted it as rebound, revisit [the wall model](#wall-model).

$$\begin{aligned}J&=2(v+3),\\0&\le v\le3\ \mathrm{m\,s^{-1}},\\6\ \mathrm{N\,s}&\le J\le12\ \mathrm{N\,s}.\end{aligned}$$

Both inequalities are needed: nonnegative outward velocity gives the lower bound, while e≤1 gives v≤3 and the upper bound. Since mass is positive, these conditions are equivalent to the whole stated impulse interval. At J=6 N s, v=0 and e=0; at J=12 N s, v=3 m s⁻¹ and e=1. A larger impulse would produce a rebound faster than the approach speed and fail the conventional model.

</details>

</section>

<section class="lesson-check" markdown="1">

### The zero-restitution endpoint {#retry-zero}

**Retry (self-written):** Two equal 1 kg masses collide on a line with initial velocities 2 and 0 m s⁻¹, negligible external impulse and $e=0$. Find final velocities and kinetic-energy loss. Must they stay attached forever?

<details markdown="1"><summary>Hint</summary>

Combine equal final velocities with conservation of total momentum. Permanent attachment would require an additional physical condition.

</details>

<details markdown="1"><summary>Solution and repair</summary>

$$\begin{aligned}v_A&=v_B,\quad v_A+v_B=2,\\v_A&=v_B=1\ \mathrm{m\,s^{-1}},\end{aligned}$$

$$\begin{aligned}K_{\rm before}&=2\ \mathrm J,\quad K_{\rm after}=1\ \mathrm J,\\K_{\rm loss}&=1\ \mathrm J.\end{aligned}$$

They have equal velocities immediately after impact; this alone does not imply permanent attachment. If you used elastic energy conservation, compare e=0 with e=1 in [the collision model](#collision-model).

</details>

</section>

## Later review {#later-review}

Return after completing another study session; keep this page’s examples closed. The two processes below have different system boundaries and direction conventions. Draw both before choosing equations.

<section class="lesson-check" markdown="1">

### Two processes to analyse {#review-task}

**Later review (self-written):** A and B, each of mass 1 kg, move on a smooth horizontal line with A initially left of B. Their initial velocities are +4 and 0 m s⁻¹ and their collision has $e=1/2$ with negligible external impulse. Find their final velocities and the kinetic-energy loss. In a separate subsequent experiment B approaches a fixed smooth wall normally at the speed it had just after this collision. Now take positive away from the wall. The wall force rises linearly from zero at 0 s to peak H at 0.2 s, then falls linearly to zero at 0.4 s; other impulse is negligible. Sketch both processes. Find the range of the positive peak force H for a completed conventional impact with nonnegative outward final velocity, and identify the boundary cases.

<details markdown="1"><summary>Hint</summary>

First obtain B’s speed from the pair collision. Then give its wall-approach velocity the sign required by the new axis. The triangular force history determines impulse; the completed impact adds further constraints.

</details>

<details markdown="1"><summary>Solution and repair</summary>

$$\begin{aligned}v_A+v_B&=4,\quad v_B-v_A=2,\\v_A&=1\ \mathrm{m\,s^{-1}},\\v_B&=3\ \mathrm{m\,s^{-1}},\\K_{\rm loss}&=8-5=3\ \mathrm J.\end{aligned}$$

For the wall experiment write h for H’s numerical value in newtons. B’s new initial signed velocity is −3 m s⁻¹. The force sketch is a triangle with base 0.4 s and height H, so

$$\begin{aligned}J&=\tfrac12(0.4)h=\tfrac h5\ \mathrm{N\,s},\\v&=\tfrac h5-3\ \mathrm{m\,s^{-1}},\\e&=\tfrac h{15}-1,\\0\le\tfrac h5-3&\le3,\\15\le h&\le30.\end{aligned}$$

Thus H is between 15 and 30 N, inclusive. H=15 N gives v=0, e=0; H=30 N gives v=3 m s⁻¹, e=1. Every peak within the interval satisfies the endpoint model, while strict rebound excludes 15 N. The first collision’s positive direction must not turn the second experiment’s incoming speed into a positive signed velocity.

For a system/sign error, retry [the pair](#retry-pair) or [the wall](#retry-wall). For a graph-area error, retry [the area](#retry-area). Then return to [the dimensions review](/alevel/as-further-mathematics/dimensions/#later-review), which asks whether a different impulse shortcut is justified.

</details>

</section>

## Next step {#next-step}

Without looking back, explain when momentum is conserved, why signed area matters and what the restitution range adds to an impulse calculation. Record the system, sign or model condition that caused any error; redo its linked retry, then revisit the mixed problem later. Return to the [course route](/alevel/as-further-mathematics/#learning-route) to choose your next study topic.

## Sources and scope {#sources}

OxfordAQA 9665 v5.2, FM1.3; no migration to 9765. The following questions and their paired mark schemes were actually read. They inform the modelling and evidence expected; this page’s questions and checking points are self-written.

- [Current 9665 qualification page](https://www.oxfordaqa.com/qualification/international-as-and-a-level-further-mathematics-9665/) and [9665 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf), FM1.3.
- FM02 June 2024 Q11(a)(b), Q12(a)(b): [QP pp.21–23](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-question-paper.pdf#page=21), [Final MS pp.18–20](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-mark-scheme.pdf#page=18).

[Previous](/alevel/as-further-mathematics/dimensions/) · [Course route](/alevel/as-further-mathematics/#learning-route)
