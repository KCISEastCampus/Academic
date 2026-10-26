---
title: Momentum and Impulse — What Changes Across a Collision?
layout: subjects
mathjax: true
grade: as
subject: as-physics
permalink: /alevel/as-physics/momentum-and-impulse/
toc_headings: h2, h3
study_page: true
reading_layout: true
---

<h2 id="start-here">Track a change even when the force varies</h2>

In a collision the force usually rises and falls. A constant-acceleration equation cannot describe the whole contact unless that approximation is justified. Momentum lets us connect the motion before and after contact to the force acting during it.

You will choose a system, analyse one-dimensional collisions and separations, read a force–time graph, and judge whether data support a model. Before starting, use [Newton’s laws](/alevel/as-physics/newtons-laws/) for object boundaries and resultants, [motion graphs](/alevel/as-physics/straight-line-motion/#graphs-and-signs) for signed areas, and [uncertainties](/alevel/as-physics/measurements-and-uncertainties/) for the data task. All tasks and numerical records below are self-written or constructed; no physical experiment is claimed.

<div class="lesson-check" markdown="1">
**Recall before reading — self-written task.**
<!-- task:recall -->
A ball moves downwards before hitting a floor and upwards after contact. Choose upwards as positive. State the sign of each velocity and the direction of its velocity change. Which forces act on the ball during contact?
<!-- /task:recall -->
<details markdown="1"><summary>Hint</summary>
Subtract the initial signed velocity from the final signed velocity.
</details>
<details markdown="1"><summary>Solution and check</summary>
The initial velocity is negative and the final velocity positive, so the change is upwards. The floor force acts upwards and weight downwards. Do not include the ball’s force on the floor in the ball’s diagram. Revisit [the previous lesson](/alevel/as-physics/newtons-laws/#force-model) if needed.
</details>
</div>

<h2 id="system">Momentum belongs to a chosen system</h2>

For a particle of mass $m$ and velocity $v$ along a chosen axis, momentum is:

$$p=mv\qquad [p]=\mathrm{kg\,m\,s^{-1}}$$

It is a vector: equal masses moving with equal speeds in opposite directions have opposite momenta. For a system, add the signed momenta of its members. Do not add their speeds.

The second law can be written as resultant external force equals rate of change of momentum. Over a time interval, the system’s momentum change equals its **external impulse**. Internal interaction forces are equal and opposite and their impulses cancel in the system total. Therefore total momentum is conserved along a direction when the net external impulse along that direction is zero, or approximately conserved when it is negligible compared with the momentum changes being studied.

This condition concerns the chosen boundary and direction. Two trolleys together may have approximately conserved horizontal momentum during a brief collision even though each trolley’s momentum changes. Weight and track support may balance vertically; that does not cancel an external horizontal push.

<h2 id="collision-example">Two trolleys stick together</h2>

<div class="worked-example" markdown="1">
**Worked example — self-written.**

<!-- task:worked-collision -->
Trolley A (0.40 kg) moves right at 3.0 m/s and B (0.60 kg) moves left at 1.0 m/s. They collide and stick. The net external horizontal impulse during contact is negligible. Find their common velocity.
<!-- /task:worked-collision -->

Choose both trolleys as the system and right as positive. The contact forces are internal. Sticking supplies the extra condition that their final velocities are the same, $v$:

$$0.40(3.0)+0.60(-1.0)=(0.40+0.60)v$$

$$v=+0.60\,\mathrm{m\,s^{-1}}$$

The final motion is rightwards. Initial and final total momenta are both $+0.60\,\mathrm{kg\,m\,s^{-1}}$. One trolley loses momentum and the other gains it; neither trolley is individually isolated.

For collision classification, kinetic energy is the scalar quantity $E_k=\tfrac12mv^2$. Squaring a negative velocity gives a positive energy. For this example:

$$E_{k,\mathrm{before}}=\tfrac12(0.40)(3.0)^2+\tfrac12(0.60)(-1.0)^2=2.1\,\mathrm{J}$$

$$E_{k,\mathrm{after}}=\tfrac12(1.00)(0.60)^2=0.18\,\mathrm{J}$$

Kinetic energy decreases by 1.92 J, transferred into deformation, internal energy and possibly sound. Total energy is conserved, but the system’s kinetic energy is not. The collision is inelastic.
</div>

<h2 id="collision-types">Separate the momentum test from the energy test</h2>

An **elastic collision** conserves total kinetic energy as well as total momentum for an isolated system. An **inelastic collision** does not conserve kinetic energy; the objects need not stick. Sticking is a completely inelastic case. A bounce alone does not establish elasticity: calculate or compare the total kinetic energies.

In an explosion or spring release, internal stored energy can become kinetic energy while total momentum remains unchanged if external impulse is negligible. A stationary system can separate into two moving parts whose momenta add to zero. Momentum conservation alone supplies one equation; two unknown final velocities require another stated condition or measurement. Do not assume sticking or elasticity when the question has not supplied it.

<h2 id="impulse">Read the signed force–time area</h2>

For a constant resultant force, the second law gives:

$$J=F_{\mathrm{resultant}}\Delta t=\Delta p=m(v-u)$$

For a varying resultant, impulse is the signed area between its force–time graph and the time axis. Break straight-sided regions into rectangles, triangles or trapezia; include negative areas. For a curved trace, estimate the area using sufficiently small strips. $1\,\mathrm{N\,s}=1\,\mathrm{kg\,m\,s^{-1}}$.

The average resultant force over the chosen interval satisfies:

$$\bar F_{\mathrm{resultant}}=\frac{\Delta p}{\Delta t}$$

For the same momentum change, longer contact means a smaller magnitude of average resultant force. It does not by itself specify the peak force; the force–time shape matters. A sensor may measure a contact force, so other forces still need adding before its area equals the total momentum change.

<div class="worked-example" markdown="1">
<h3 id="bounce-example">A floor force includes the weight correction</h3>
**Worked example — self-written.**

<!-- task:worked-bounce -->
A 0.20 kg ball arrives at a horizontal floor with velocity −5.0 m/s and leaves with +3.0 m/s, upwards positive. Contact lasts 0.040 s. Use $g=10\,\mathrm{m\,s^{-2}}$ and neglect air resistance.
<!-- /task:worked-bounce -->

The velocity reverses, so we subtract a negative initial velocity:

$$\Delta p=0.20[3.0-(-5.0)]=+1.6\,\mathrm{kg\,m\,s^{-1}}$$

The average resultant is $1.6/0.040=40\,\mathrm{N}$ upwards. This is not the floor force alone. The ball’s weight is 2.0 N downwards, so:

$$\bar N-mg=40\,\mathrm{N},\qquad \bar N=42\,\mathrm{N}$$

The average force of the ball on the floor is 42 N downwards by the third law. Check impulses: the floor contributes +1.68 N s and gravity −0.080 N s, giving +1.60 N s in total. Ignoring weight is an approximation only when its impulse is small enough for the required accuracy; it is not an identity between contact force and resultant force.
</div>

<h2 id="independent-practice">Change the conditions and choose the method</h2>

Keep hints closed initially. State the axis, system, and any conservation condition before calculating. Give reasoning as well as numbers; the criteria in the solutions are self-written.

<div class="lesson-check" markdown="1">
<h3 id="collision-check">A measured outcome</h3>
<!-- task:collision-check -->
Trolley A (0.50 kg) initially moves right at 2.0 m/s; trolley B (1.0 kg) is stationary. After a one-dimensional collision A moves left at 0.40 m/s. External horizontal impulse is negligible. Find B’s final velocity. Use the total kinetic energies to classify the collision. Do not assume that the trolleys stick. For a different collision with the same initial conditions, a student proposes final velocities −2/3 m/s for A and +4/3 m/s for B. Test whether this proposed outcome conserves total momentum and kinetic energy, and classify it.
<!-- /task:collision-check -->
<details markdown="1"><summary>Hint</summary>
The negative velocity is part of the momentum equation. Energy is a separate check.
</details>
<details markdown="1"><summary>Solution and check</summary>
Right positive: $0.50(2.0)=0.50(-0.40)+1.0v_B$, so $v_B=+1.2\,\mathrm{m\,s^{-1}}$. Initial kinetic energy is 1.0 J; final kinetic energy is $0.040+0.72=0.76\,\mathrm{J}$. It is inelastic despite the rebound. In the second proposed outcome, total momentum is $-1/3+4/3=1.0\,\mathrm{kg\,m\,s^{-1}}$ and total kinetic energy is $1/9+8/9=1.0\,\mathrm{J}$, both equal to their initial values: this outcome is elastic. Both momentum and the energy comparison are needed. If you called every rebound elastic, revisit [collision types](#collision-types).
</details>
</div>

<div class="lesson-check" markdown="1">
<h3 id="separation-check">Release from rest</h3>
<!-- task:separation-check -->
Two trolleys of masses 0.30 kg and 0.60 kg are initially stationary on a level low-friction track. A compressed spring between them is released. External horizontal impulse is negligible during release. The 0.30 kg trolley leaves at 2.0 m/s to the left. Find the other velocity and the increase in total kinetic energy. Explain in English how momentum can be conserved while kinetic energy increases. The spring’s mass is negligible.
<!-- /task:separation-check -->
<details markdown="1"><summary>Hint</summary>
Start with zero total momentum. Identify the source of the kinetic energy.
</details>
<details markdown="1"><summary>Solution and check</summary>
Right positive: $0=0.30(-2.0)+0.60v$, giving $v=+1.0\,\mathrm{m\,s^{-1}}$. Kinetic energy increases from zero to $0.60+0.30=0.90\,\mathrm{J}$. “The spring transfers stored elastic energy to the trolleys. The interaction impulses are internal, so the total horizontal momentum remains zero.” The final velocities differ because the masses differ.
</details>
</div>

<div class="lesson-check" markdown="1">
<h3 id="graph-check">A force that changes sign</h3>
<!-- task:graph-check -->
A 0.10 kg trolley has initial velocity −0.40 m/s. The graph shows its resultant horizontal force, with right positive. Straight lines join the points (time in ms, force in N): (0, 0), (20, 12), (40, 0), (60, −6), (80, 0). Find the impulse over 0–80 ms, the final velocity, and the average resultant force over that interval. Explain why the maximum force cannot be used as a constant force for the whole interval.
<!-- /task:graph-check -->

![Constructed resultant force graph: straight segments through (0 ms, 0 N), (20 ms, 12 N), (40 ms, 0 N), (60 ms, −6 N), (80 ms, 0 N).](/assets/img/physics-as-impulse-task.svg){: width="480" height="320" }

<details markdown="1"><summary>Hint</summary>
Convert milliseconds to seconds before finding the two signed triangular areas.
</details>
<details markdown="1"><summary>Solution and check</summary>
$$J=\tfrac12(0.040)(12)-\tfrac12(0.040)(6)=+0.12\,\mathrm{N\,s}$$

$$v=u+\frac{J}{m}=-0.40+\frac{0.12}{0.10}=+0.80\,\mathrm{m\,s^{-1}}$$
The average resultant is $0.12/0.080=+1.5\,\mathrm{N}$. The 12 N peak acts at one instant, whereas the graph includes smaller and negative forces. If you added both area magnitudes, revisit [signed area](#impulse); if the impulse was 120 N s, correct the time unit and retry below.
</details>
</div>

<h2 id="evidence">Does agreement prove the model?</h2>

A momentum experiment compares independently measured quantities. A force sensor supplies a trace; mass and motion sensors supply $m(v-u)$. Agreement within stated uncertainty supports consistency, but may have more than one explanation. For the next task, use a simple interval criterion: two uncertainty intervals that overlap are **compatible on this check**. These are stated absolute uncertainty bounds, not standard deviations or a statistical significance test.

<div class="lesson-check" markdown="1">
<h3 id="evidence-check">Compare two measurements</h3>
<!-- task:evidence-check -->
In a constructed trolley impact record, the measured impulse of the bumper’s force on the trolley is −0.84 ± 0.03 N s. Independently measured momentum change is −0.90 ± 0.04 kg m/s. Right is positive. Compare the intervals and assess the claim “this proves all other horizontal forces were zero”. A small unmeasured resistance acts left throughout contact: predict the sign of (momentum change − bumper impulse). Suggest a measurement that could distinguish this effect from sensor zero bias. Assume the quoted bounds have already included the stated instrument uncertainties.
<!-- /task:evidence-check -->
<details markdown="1"><summary>Hint</summary>
Write both intervals on the same signed number line. The bumper force is only one external force.
</details>
<details markdown="1"><summary>Solution and check</summary>
The intervals are [−0.87, −0.81] N s and [−0.94, −0.86] N s, overlapping from −0.87 to −0.86 N s. They are compatible on the stated check; this does not prove all other forces vanish. A leftward resistance gives a negative additional impulse, so the difference should be negative, as its central value −0.06 N s is here. Check the force sensor’s zero before and after contact, and independently measure trolley deceleration on the same track without bumper contact to estimate the resistance impulse. Repeated independent impacts can assess scatter; repeating alone cannot remove a persistent zero bias. With real apparatus, use secured sensors, a level track, a catch barrier and low speeds; this paper exercise has not tested a setup.
</details>
</div>

<h2 id="diagnose-and-retry">Close the solutions and test the repair</h2>

For a sign error, return to [momentum](#system); for a conservation claim, name the external impulse; for a force error, distinguish [contact and resultant](#bounce-example). If uncertainty intervals were treated as proof, revisit [what the comparison tests](#evidence).

<div class="lesson-check" markdown="1">
<h3 id="retry-evidence">Another record</h3>
<!-- task:retry-evidence -->
In a new constructed record, bumper impulse is −0.50 ± 0.01 N s and independent momentum change is −0.58 ± 0.02 kg m/s. Right is positive. Are these compatible using the stated interval check? Can repeated impacts alone decide whether sensor zero bias or an unmeasured leftward resistance caused the discrepancy? Give a direction prediction and a separate measurement for each proposed cause.
<!-- /task:retry-evidence -->
<details markdown="1"><summary>Hint</summary>
Compare the interval endpoints, then test a sensor without contact and a trolley without bumper interaction.
</details>
<details markdown="1"><summary>Solution and check</summary>
The intervals [−0.51, −0.49] and [−0.60, −0.56] do not overlap, so the records are not compatible on this check. Repeated impacts alone cannot distinguish persistent causes. A leftward resistance adds negative impulse; measure free-running deceleration on the same track and estimate its impulse over the contact duration. A positive force-sensor zero offset would make a negative measured bumper impulse less negative, also producing a negative (momentum change − measured bumper impulse); record the unloaded sensor baseline before and after the impact. A negative offset alone would predict the opposite discrepancy. Distinguish these hypotheses before changing the uncertainty bounds.
</details>
</div>

<div class="lesson-check" markdown="1">
<h3 id="retry-momentum">A different contact</h3>
<!-- task:retry-momentum -->
A 0.20 kg trolley initially moves right at 1.0 m/s. Its resultant horizontal force varies linearly from 0 to −8.0 N and back to 0 over a total of 0.10 s, making one triangle below the time axis. Find its final velocity and explain whether kinetic energy is conserved over this interaction. Separately, a 0.10 kg ball is brought from −2.0 m/s to rest by a horizontal floor in 0.020 s. With upwards positive and g = 10 m/s², find the average floor force on the ball.
<!-- /task:retry-momentum -->
<details markdown="1"><summary>Hint</summary>
For the trolley, use a signed area and check both speeds. For the ball, include weight after finding the resultant.
</details>
<details markdown="1"><summary>Solution and check</summary>
The trolley impulse is −0.40 N s, so $v=1.0-0.40/0.20=-1.0\,\mathrm{m\,s^{-1}}$. Its kinetic energy is 0.10 J both before and after; this equality alone does not establish that the trolley and an unspecified interacting body form an isolated elastic-collision system. The ball has $\Delta p=+0.20\,\mathrm{kg\,m\,s^{-1}}$, average resultant +10 N and average floor force 11 N upwards. Check the third-law partner: the ball exerts 11 N downwards on the floor on average.
</details>
</div>

<h2 id="later-review">Next study session: a mixed situation</h2>

Leave this task until your next study session, then start with the earlier answers closed. Record your first reasoning, any hint used, the cause of an error and the retry result. This provides evidence of your own recall; merely reading the solution does not.

<div class="lesson-check" markdown="1">
<!-- task:later-review -->
A 2.0 kg trolley moves right at 3.0 m/s. A steady 2.0 N horizontal resistance brings it to rest on a level track. Determine the stopping time and distance. A different bumper arrangement stops the same trolley from the same speed in 0.10 s; all other horizontal forces are negligible during that contact. Determine the bumper’s average force on the trolley and compare the momentum changes in the two stops. Explain in English why equal momentum changes do not require equal average forces. Name the third-law partner of the bumper force. Do not assume the bumper force is constant.
<!-- /task:later-review -->
<details markdown="1"><summary>Hint</summary>
Use the given conditions to decide which quantities are constant, and keep the two stopping processes separate.
</details>
<details markdown="1"><summary>Solution and check</summary>
Right positive: $a=-2.0/2.0=-1.0\,\mathrm{m\,s^{-2}}$, so the steady-resistance stop takes 3.0 s and covers 4.5 m. Both stops have $\Delta p=2.0(0-3.0)=-6.0\,\mathrm{kg\,m\,s^{-1}}$. The bumper’s average force is −60 N. “The same momentum change occurs over a shorter time, so the magnitude of the average resultant force is larger.” The partner is the trolley’s force on the bumper, averaging 60 N rightwards. Check that your distance calculation used constant acceleration only in the first stop; the bumper’s average force does not establish a constant acceleration or a peak force. If boundaries were confused, retry the previous lesson’s [package task](/alevel/as-physics/newtons-laws/#retry-forces); if signs or areas were confused, retry [the different contact](#retry-momentum).
</details>
</div>

<h2 id="sources-and-next">Scope and what remains</h2>

Scope: OxfordAQA International AS Physics 9630, PH01 §3.2.6, one-dimensional momentum, collisions, explosions, impulse and impact time. See the [qualification page](https://www.oxfordaqa.com/qualification/international-as-and-a-level-physics-9630/) and linked [specification, Version 4.4](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-international-as-and-a-level-physics-specification.pdf). The relevant scope agrees with the other official PDF labelled Version 5.1.

The [PH01 specimen paper](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9630-PH01-international-as-physics-specimen-paper-2016-v2.pdf), body labelled Specimen 2018, V1.1, Q06.3–06.5, and its [paired mark scheme](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9630-PH01-international-as-physics-mark-scheme-2016-v2.pdf) were consulted for momentum direction, impact force and contact-time reasoning. These lessons use different, self-written tasks; no official question or mark allocation is reproduced. The bounce example explicitly retains weight when distinguishing contact force from resultant.

[Previous: Newton’s Laws](/alevel/as-physics/newtons-laws/) · [AS Physics](/alevel/as-physics/) · [Next: Work, Energy and Power](/alevel/as-physics/work-energy-power/) · [Unit 1 mixed review](/alevel/as-physics/unit-1-review/)
