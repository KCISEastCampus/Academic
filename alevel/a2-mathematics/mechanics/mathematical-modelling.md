---
title: Mathematical Modelling
layout: subjects
mathjax: true
grade: a2
subject: m2
permalink: /alevel/a2-mathematics/mechanics/mathematical-modelling/
toc_headings: h2
study_page: true
reading_layout: true
---

[A2 Mechanics](/alevel/a2-mathematics/mechanics/) · MA05 · M2.1
{:.lesson-meta}

A car and its trailer have wheels, springs and many moving parts. We can still predict their straight-line acceleration without describing all of those parts. **What can we leave out, and which equations does that choice allow?**

You will explain assumptions in context, choose a body or system for a force equation, and check whether the result still fits the assumed contact and string constraints.

Start with [assumptions](#modelling-assumptions), then [connected bodies](#connected-bodies), [a lift](#a-lift-and-its-passenger) and [a fixed pulley](#a-fixed-pulley). Revising? Try [practice](#practice) with the help closed.

You need simple equations and AS weight, tension, normal reaction and Newton's second law. Revisit [AS force diagrams](/alevel/as-mathematics/forces/#l24-concept) if identifying forces is difficult; the [system explanation below](#connected-bodies) shows how to choose an equation.
{:.lesson-meta}

All examples and tasks are **Self-written**, with no official marks. Use $g=9.8\,\mathrm{m\,s^{-2}}$ unless specified otherwise; keep exact working and give final numerical answers to three significant figures. [Source notes](#sources-and-scope) distinguish this convention from a paper's instructions.
{:.lesson-meta}

## Modelling Assumptions

A **mathematical model** uses assumptions to simplify a real situation. The model should keep the features needed to answer the question.

For each assumption, ask: **What can I ignore? What does this allow me to write? When might it fail?**

| Term | Meaning in the model | What to check |
|---|---|---|
| Particle | Treat the body's mass as being at one point; ignore its size and shape | Suitable for motion of the whole body, but not for toppling or rotation |
| Light string or rod | Ignore its mass | Its weight and its own inertia are left out of the equations |
| Inextensible string | Its length does not change | The relation between the bodies' motions comes from the string's length and the arrangement |
| Taut string | The string is pulled tight | It can transmit tension; a slack string cannot |
| Smooth surface or pulley | Ignore friction at that contact | A surface still exerts a normal reaction; a pulley can change a string's direction |
| Rough surface | Friction may act along the surface | Find the tendency to slide before choosing the friction direction |
| Uniform body | Constant mass per unit length, area or volume, as appropriate | For a lamina, equal areas have equal mass; symmetry can help locate its centre of mass |
| Negligible air resistance | Leave air resistance out of the force diagram | Often less reasonable for a light object with a large exposed area |
| Motion under gravity alone | Weight is the only force during the motion | The body must not also be in contact with a surface or attached to a taut string |

**Particle does not mean no air resistance.** These are separate assumptions. **Light does not mean inextensible.** One concerns mass; the other concerns length.

A light string passing over a smooth pulley has the same tension on both sides in the usual ideal model. A light rod can transmit tension or **thrust**: it can pull or push. A string can only pull.

These words make different commitments. A light elastic cord can stretch; a heavy inextensible cable can keep its length. Neither description can replace the other. Even a large ship can be a particle for its straight-line motion if its dimensions and turning are irrelevant to the question. The same ship needs an extended-body model to investigate toppling.

For two particles attached to the ends of one taut inextensible string over a fixed pulley, their speeds and acceleration magnitudes are equal while the string remains taut. Their directions may be opposite. Do not apply this conclusion to every arrangement of strings and pulleys.

<div class="worked-example" markdown="1">

### Example 1 — Choose the model for a ball

**Question:** A ball is thrown across a field. We want to predict where it first reaches the ground. State two assumptions and explain their limits. Would the same model predict how the ball spins?

1. **Model the ball as a particle.** We follow one point instead of its whole shape. This may be reasonable if the ball's size is small compared with its flight distance. This model does not describe its spin.
2. **Neglect air resistance.** After release, weight is then the only force. Near the Earth's surface we also take $g$ as constant. Ignoring air resistance is less reasonable for a light ball, a strong wind or a long flight.

**Check:** Each assumption has a stated effect and a limit. Saying only "use a particle" would not explain why air resistance is absent.

</div>

## Connected Bodies

Choose a **system**: the body or collection of bodies whose motion you are describing. A force from outside that boundary is external; a force between two included bodies is internal. The same rope force is external to the trailer alone but internal to the car–trailer system.

Start with a diagram of each body. Weight is downwards, a normal reaction is perpendicular to its contact and tension pulls along the taut rope. Name the body receiving every force. Two opposite rope forces act on different vehicles; they do not cancel on either individual vehicle.

Choose a positive direction and add the signed external forces on that system. Newton's second law says

$$\text{resultant external force}=(\text{total mass})\times(\text{acceleration}).$$

Use a total mass with a common acceleration only when the constraint gives that common acceleration. A negative acceleration $a<0$ means acceleration against the chosen positive direction; it does not by itself mean that the body is moving backwards. An acceleration arrow describes the motion; **it is not an extra force**.

![Separate force diagrams for a car and trailer moving right, showing normal reactions, weights, tension and driving force](/assets/img/a2-math-mech/car-trailer-model.svg)

<div class="worked-example" markdown="1">

### Example 2 — A car pulls a trailer

**Question:** A car of mass $1000\,\mathrm{kg}$ pulls a trailer of mass $500\,\mathrm{kg}$ along a level straight road. The driving force is $3000\,\mathrm N$. Use a light, taut, inextensible horizontal tow rope and neglect resistance to motion. Find the acceleration and tension. Comment on the model.

Treat each vehicle as a particle. The rope keeps their separation fixed, so both have the same acceleration $a$ to the right. Its tension is $T$.

For the trailer, the horizontal resultant is $T$. For the car, it is $3000-T$:

$$T=500a,\qquad 3000-T=1000a.$$

Add the equations. Tension cancels because it is internal to the combined system:

$$3000=1500a\quad\Rightarrow\quad\boxed{a=2\,\mathrm{m\,s^{-2}}}.$$

Now use the trailer equation:

$$\boxed{T=500(2)=1000\,\mathrm N}.$$

The light-rope assumption may be reasonable because the rope has much less mass than the vehicles. The particle model is useful for straight-line motion but cannot describe vehicle rotation. Ignoring resistance is a simplification: with the same driving force and positive resistance, the acceleration would be less than $2\,\mathrm{m\,s^{-2}}$.

**Check:** The car equation gives $3000-1000=1000(2)$. Vertically, each vehicle's normal reaction balances its weight because there is no vertical acceleration and the rope is horizontal.

**Common mistake:** using $T=1500a$. Tension is not the external force accelerating both vehicles. Use $T=500a$ for the trailer alone.

</div>

## A Lift and Its Passenger

Decide which body each equation describes. Cable tension acts on the lift; the floor's normal reaction acts on the passenger.

For the passenger, draw the upward floor reaction and downward weight. For the lift alone, the passenger pushes down on its floor. For the lift and passenger together, the floor-contact pair is internal and cancels, leaving the cable pull and both weights. This is why the two equations below use different masses and different upward forces.

<div class="worked-example" markdown="1">

### Example 3 — Upward motion does not always mean upward acceleration

**Question:** A lift has mass $400\,\mathrm{kg}$ and carries a passenger of mass $60\,\mathrm{kg}$. It moves upwards with acceleration $1.2\,\mathrm{m\,s^{-2}}$. Find the cable tension and the normal reaction on the passenger. Then find both forces when it moves upwards at constant speed.

Model the lift and passenger as particles, neglect resistance and the cable's mass, and assume the passenger stays in contact with the floor and moves with the lift. Take upwards as positive.

For the lift and passenger together, total mass is $460\,\mathrm{kg}$:

$$T-460g=460(1.2)\quad\Rightarrow\quad\boxed{T=5060\,\mathrm N}.$$

For the passenger alone, let the normal reaction be $R$:

$$R-60g=60(1.2)\quad\Rightarrow\quad\boxed{R=660\,\mathrm N}.$$

At constant speed, $a=0$, even though the lift is still moving upwards:

$$T=460g=4508\,\mathrm N\approx\boxed{4510\,\mathrm N},$$

$$\boxed{R=60g=588\,\mathrm N}.$$

**Check:** During upward acceleration, both forces are greater than the weights they support. The force the passenger exerts on the floor has magnitude $R$ and acts downwards; it acts on a different body.

If the lift moves upwards but slows down, its acceleration is downwards. Do not choose the sign of acceleration from the direction of velocity.

Contact also matters: the floor can push the passenger upwards but cannot pull them down. A calculated $R<0$ would mean that the assumption of moving with the floor has failed, so that equation cannot describe the passenger's subsequent motion.

</div>

## A Fixed Pulley

Let the two hanging lengths be $y_1$ and $y_2$, both measured downwards from a fixed pulley. The part around the pulley has fixed length, so a taut inextensible string gives $y_1+y_2=\text{constant}$. If one hanging part lengthens, the other shortens equally. Differentiating twice gives $a_1+a_2=0$: equal acceleration **magnitudes**, opposite directions in a common vertical coordinate. This geometric constraint does not follow from the string being light.

<div class="worked-example" markdown="1">

### Example 4 — Explain equal acceleration magnitudes

**Question:** Particles of masses $3\,\mathrm{kg}$ and $5\,\mathrm{kg}$ are connected by a light inextensible string passing over a fixed smooth pulley. They are released from rest with the string taut. Find the acceleration and tension while both hang freely.

Assume the string stays taut, neglect air resistance and treat the bodies as particles. The fixed string length means that as the $5\,\mathrm{kg}$ particle moves down, the $3\,\mathrm{kg}$ particle moves up by the same distance. Their acceleration magnitudes are equal. The light string and smooth pulley give a common tension $T$.

Choose downwards as positive for the heavier particle and upwards as positive for the lighter one:

$$5g-T=5a,\qquad T-3g=3a.$$

Adding gives $2g=8a$, so

$$\boxed{a=\frac g4=2.45\,\mathrm{m\,s^{-2}}}.$$

$$T=3(g+a)=36.75\,\mathrm N\approx\boxed{36.8\,\mathrm N}.$$

**Check:** $3g<T<5g$, so the lighter particle accelerates up and the heavier one down. The heavier-particle equation also gives $T=5(g-a)=36.75\,\mathrm N$.

**Limit:** If a particle reaches the floor, the string becomes slack, or the pulley arrangement changes, these equations may no longer describe the motion.

</div>

## Practice

Allow about 20–25 minutes. Give a reason for each modelling assumption, not just its name.

<div class="lesson-check" markdown="1">

### Q1 — A claim about a shuttlecock {#q1--separate-two-assumptions}

A student says, "The shuttlecock is a particle, so air resistance is zero." Explain the error and comment on whether ignoring air resistance is reasonable.

<details markdown="1">
<summary>Hint</summary>

Which assumption concerns size and shape? Which concerns a force?

</details>

<details markdown="1">
<summary>Solution and check</summary>

A particle model ignores size and shape when describing motion; it does not remove air resistance. Neglecting air resistance is a separate assumption and is usually poor for a shuttlecock because it is light and has a large exposed area. A better model includes a resisting force.

**Check:** Both the error and the reason for the model's limit have been explained.

</details>

</div>

<div class="lesson-check" markdown="1">

### Q2 — Two hanging particles {#q2--identify-what-each-term-changes}

Two hanging particles are connected over a fixed pulley. Explain separately what is gained by a light string, an inextensible taut string and a smooth pulley. Does "light" alone give equal acceleration magnitudes?

<details markdown="1">
<summary>Hint</summary>

Consider mass, length and friction separately.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The string's mass is ignored because it is light. Its fixed length, while taut over this fixed pulley, makes the two particles' displacement and acceleration magnitudes equal. A smooth pulley introduces no friction; together with the light-string model, this gives the same tension on both sides. "Light" alone says nothing about a change in length and does not give equal acceleration magnitudes.

**Check:** The equality concerns magnitudes: one particle can accelerate upwards while the other accelerates downwards.

</details>

</div>

<div class="lesson-check" markdown="1">

### Q3 — A car and trailer {#q3--change-the-car-model}

A car of mass $900\,\mathrm{kg}$ pulls a trailer of mass $300\,\mathrm{kg}$ with a driving force of $2400\,\mathrm N$. A light horizontal tow rope is taut and inextensible. Resistance is $180\,\mathrm N$ on the car and $60\,\mathrm N$ on the trailer, opposing motion. Find the acceleration and tension. Compare the acceleration with a model that neglects resistance.

<details markdown="1">
<summary>Hint</summary>

For the combined system use the total external horizontal force. Then isolate the trailer.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$2400-180-60=1200a\quad\Rightarrow\quad\boxed{a=1.8\,\mathrm{m\,s^{-2}}}.$$

$$T-60=300(1.8)\quad\Rightarrow\quad\boxed{T=600\,\mathrm N}.$$

Without resistance, $a=2400/1200=2\,\mathrm{m\,s^{-2}}$, which is larger.

**Check:** For the car, the resultant force is

$$2400-180-600=1620\,\mathrm N.$$

This equals $900(1.8)\,\mathrm N$, as required by $F=ma$.

</details>

</div>

<div class="lesson-check" markdown="1">

### Q4 — A passenger in a lift {#q4--a-lift-slows-down}

A lift of mass $500\,\mathrm{kg}$ carries a passenger of mass $70\,\mathrm{kg}$. It moves upwards but slows down at $0.8\,\mathrm{m\,s^{-2}}$. Neglect resistance and cable mass. Find the cable tension and the normal reaction on the passenger, assuming the passenger stays in contact with the floor.

<details markdown="1">
<summary>Hint</summary>

With upwards positive, the acceleration is negative.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Take $a=-0.8\,\mathrm{m\,s^{-2}}$:

$$T-570g=-570(0.8)\quad\Rightarrow\quad\boxed{T=5130\,\mathrm N}.$$

$$R-70g=-70(0.8)\quad\Rightarrow\quad\boxed{R=630\,\mathrm N}.$$

**Check:** $5130<570g$ and $630<70g$. The resultant forces point downwards, as required. The positive reaction is consistent with contact being maintained.

</details>

</div>

<div class="lesson-check" markdown="1">

### Q5 — Three predictions {#q5--decide-whether-a-particle-model-is-enough}

For each task, explain whether a particle model is suitable: (a) finding a car's acceleration along a straight road; (b) finding the angle at which a ladder slips; (c) finding whether a loaded truck topples on a bend.

<details markdown="1">
<summary>Hint</summary>

Does the result depend on the body's dimensions or on where forces act?

</details>

<details markdown="1">
<summary>Solution and check</summary>

**(a)** It may be suitable if only straight-line motion is needed; state any assumptions about resistance separately. **(b)** It is not enough: the ladder's length and the points where forces act determine the moments. Model it as a rigid rod. **(c)** It is not enough: the truck's width, centre of mass and contact points matter. Use a rigid-body model.

**Check:** A model is chosen for the requested calculation, not simply because the object is small or large.

</details>

</div>

## Independent Check

After an error, use the relevant explanation, close its worked answer, and do a new task: assumptions → [model retry](#model-retry); string constraints → [constraint retry](#constraint-retry); system boundaries → [system retry](#system-retry); acceleration signs → [lift retry](#lift-retry).

<div class="lesson-check" markdown="1">

### A rope during braking {#rope-check}

**Self-written task.** A car pulls a trailer along a straight level road with a horizontal rope. A student writes a common acceleration and a common tension because “the rope is light”. Identify the missing assumptions. Explain which conclusion must be reconsidered if the rope stretches, and which must be reconsidered if its mass is not negligible. Describe what can happen to the tension when the car brakes and the trailer closes the gap. Do not calculate a force.

<details markdown="1">
<summary>Reasoning hint</summary>

Separate constraints on length from the force balance on the rope itself. Can a flexible rope push the trailer backwards?

</details>

<details markdown="1">
<summary>Solution and check</summary>

A common acceleration in this straight, fixed arrangement requires the rope to remain taut and inextensible. “Light” concerns mass, so does not supply that constraint. If the rope stretches, separation can change and the accelerations need not be equal. A light rope has negligible resultant force in its own equation, giving equal end tensions here; with significant rope mass, different end forces may be needed to accelerate it. While braking, the trailer can close the gap and the rope can become slack. A flexible rope cannot transmit a compressive push; its tension then becomes zero and the taut-rope equations cease to apply.

If mass and length were mixed up, return to [the separate assumptions](#modelling-assumptions) and [the fixed-length argument](#a-fixed-pulley), then do the next task with this answer closed.

</details>

</div>

<div class="lesson-check" markdown="1">

### A different connection {#constraint-retry}

**Question:** Replace the rope by a light rigid tow bar. Which part of the braking conclusion changes, and which length constraint can still be used? State the body on which each tow-bar force acts.

<details markdown="1">
<summary>Hint</summary>

Compare what a rod can do under compression with what a flexible rope can do.

</details>

<details markdown="1">
<summary>Solution and check</summary>

A rigid tow bar can transmit compression as well as tension, so it can push backwards on the trailer while pushing forwards on the car. Those forces act on different bodies. The fixed-length, straight arrangement still constrains their accelerations to be equal. This does not determine the acceleration without the other external forces.

</details>

</div>

<div class="lesson-check" markdown="1">

### Two falling objects {#model-retry}

**Question:** A compact ball and an open parachute fall vertically in still air. A student models both as particles under gravity alone and predicts the same acceleration. The parachute is observed falling at constant velocity. Which part of the model could still be useful, and which assumption needs revision? Use a force equation to explain why gravity alone cannot describe the observation.

<details markdown="1">
<summary>Hint</summary>

A model of one point can still include a resistive force. What is the acceleration at constant velocity?

</details>

<details markdown="1">
<summary>Solution and check</summary>

Following one point may still describe the parachute's vertical translation without modelling its shape or turning. But constant velocity gives $a=0$, while gravity alone would give $mg=ma$, hence $a=g$ downwards. With downward positive, including upward air resistance $D$ allows $mg-D=0$. The observation challenges neglect of air resistance, not automatically the use of a particle for this particular prediction. It does not tell us a general formula for drag.

If you removed drag simply because the model was a particle, revisit [assumptions and their limits](#modelling-assumptions).

</details>

</div>

<div class="lesson-check" markdown="1">

### A braking vehicle {#system-retry}

**Question:** A tractor of mass $800\,\mathrm{kg}$ and a trailer of mass $200\,\mathrm{kg}$ are joined by a light rigid horizontal tow bar. They move right and slow down at $1\,\mathrm{m\,s^{-2}}$. Resistances of $100\,\mathrm N$ and $50\,\mathrm N$ oppose their motion respectively. A brake force of magnitude $B$ acts left on the tractor; there is no driving force. Find $B$ and the force of the bar on the trailer. Could a flexible rope supply that force? State your systems and positive direction.

<details markdown="1">
<summary>Hint</summary>

The combined system determines the brake force. For the bar force, isolate the trailer and initially allow a signed rightwards component.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Take right as positive, so $a=-1$. For both vehicles together,

$$-B-100-50=1000(-1)\quad\Rightarrow\quad B=850\,\mathrm N.$$

For the trailer, let the bar force be $f$ positive rightwards:

$$f-50=200(-1)\quad\Rightarrow\quad f=-150\,\mathrm N.$$

The bar pushes the trailer left with magnitude $150\,\mathrm N$; its opposite force on the tractor is rightwards. The tractor equation checks: $150-100-850=-800=800a$. A rope with the tractor ahead can only pull the trailer right, so it cannot supply this compressive force. That substitution would invalidate the common-acceleration model.

If the internal bar force was included in the combined equation, revisit [system boundaries](#connected-bodies).

</details>

</div>

<div class="lesson-check" markdown="1">

### A scale reading {#lift-retry}

**Question:** A $50\,\mathrm{kg}$ passenger stands on a scale in a lift moving downwards. The scale reads $540\,\mathrm N$. Neglect other forces on the passenger. Find the acceleration, decide whether the passenger's speed is increasing or decreasing at that instant, and explain why the scale reading is not the cable tension.

<details markdown="1">
<summary>Hint</summary>

The scale measures the floor reaction on the passenger. Choose a direction, then compare acceleration with the stated velocity.

</details>

<details markdown="1">
<summary>Solution and check</summary>

For the passenger alone, upwards positive:

$$540-50(9.8)=50a\quad\Rightarrow\quad a=1\,\mathrm{m\,s^{-2}}\text{ upwards}.$$

The velocity is downwards but the acceleration is upwards, so the speed is decreasing. The cable acts on the lift, while the scale reaction acts on the passenger. The positive reaction is consistent with contact. If you used downward acceleration because the lift moves down, revisit [the lift explanation](#a-lift-and-its-passenger).

</details>

</div>

## Return after another topic {#later-check}

After [Moments and Rigid Objects](/alevel/a2-mathematics/mechanics/moments-and-rigid-objects/), close the earlier answers and try this task.

<div class="lesson-check" markdown="1">

### Two predictions {#later-model-task}

**Question:** Explain why a bus may be treated as a particle to predict its straight-line acceleration, but not to predict toppling. Name the additional geometric information needed for the second task.

<details markdown="1">
<summary>Hint</summary>

Does the question depend on turning? Which dimensions would affect it?

</details>

<details markdown="1">
<summary>Solution and check</summary>

Mass and external resultant may suffice for translation. Toppling also depends on width, centre of mass and contact locations, which the particle model omits. Revisit [Q5](#q5--decide-whether-a-particle-model-is-enough).

</details>

</div>

Then use the course [mixed problems](/alevel/a2-mathematics/mechanics/#mixed-problems) and [later review](/alevel/a2-mathematics/mechanics/#later-review). Record the system, the assumption behind each equation and any help used.

## Sources and Scope

The scope is [OxfordAQA 9660 specification v5.2, M2.1](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf), with AS force equations used to analyse the models. M2 occupies printed27–30 / PDF26–29 (1-based); M2.1 is on printed28 / PDF27. Assessment explanations were checked against **MA05 January 2025 Q5(a)** ([QP p10](/assets/pdf/fx-cg50/references/oxfordaqa-ma05-2025-january-question-paper.pdf#page=10), [Final v1.0 MS p11](/assets/pdf/fx-cg50/references/oxfordaqa-ma05-2025-january-mark-scheme.pdf#page=11): zero horizontal resultant and a reason) and **Q6(a)** (QP p12, MS p12: constant mass per unit area). These are sources for the reasoning expected; this page's questions remain self-written. Textbook alignment: Chapter 10, Section 10.1, printed pp.148–150.

## Quick Reference

| Stage | What to write |
|---|---|
| Choose the bodies | Name the body or combined system for each equation |
| State assumptions | Explain the effect of particle, light, taut, inextensible and smooth |
| Draw forces | Include weight and all contact forces; do not draw acceleration as a force |
| Choose directions | Give the positive direction; distinguish velocity from acceleration |
| Use the model | Apply resultant force $=ma$ to each chosen body |
| Check the result | Check signs, units, contact, tension and agreement between equations |
| Evaluate the model | Say which ignored effect might matter and why |

**After practice:** record whether an error came from the model, the body you chose, a force, a sign or the calculation. Try that question again with the solution closed.

**You should be able to:** explain assumptions in context, use separate force equations and state a useful limitation of a model.

**Learning path:** [Mechanics topic index](/alevel/a2-mathematics/mechanics/) · [Next: Vectors and Kinematics](/alevel/a2-mathematics/mechanics/vectors-and-kinematics/).
