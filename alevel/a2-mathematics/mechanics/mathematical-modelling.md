---
title: Mathematical Modelling
layout: subjects
mathjax: true
grade: a2
subject: m2
permalink: /alevel/a2-mathematics/mechanics/mathematical-modelling/
toc_headings: h2
study_page: true
---

[A2 Mechanics](/alevel/a2-mathematics/mechanics/) · M2.1 Mathematical modelling

Choose a simple model for a real situation. State what each assumption means, use it in your equations and explain when it may be reasonable.

- **Learning:** start with [modelling assumptions](#modelling-assumptions), then study [connected bodies](#connected-bodies), [a lift and its passenger](#a-lift-and-its-passenger) and [a fixed pulley](#a-fixed-pulley).
- **Homework help:** draw each body separately. Put only the forces acting on that body in its force diagram.
- **Revision:** try [practice](#practice) before opening the hints and solutions.

Textbook: Chapter 10, Section 10.1 (printed pp. 148–150). The chapter review also asks you to explain whether assumptions are reasonable. The force calculations below use Newton's second law from AS Mechanics.

**Before you start:** you should know weight, tension, normal reaction and $F=ma$. Use $g=9.8\,\mathrm{m\,s^{-2}}$ unless a question gives another value. Keep exact values during calculations; round final numerical answers to three significant figures unless asked otherwise.

All worked examples and practice questions are self-written, not official past-paper questions. No official marks are assigned.

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
| Uniform body | Mass is spread evenly through the body | Symmetry can help locate its centre of mass |
| Negligible air resistance | Leave air resistance out of the force diagram | Often less reasonable for a light object with a large exposed area |
| Motion under gravity alone | Weight is the only force during the motion | The body must not also be in contact with a surface or attached to a taut string |

**Particle does not mean no air resistance.** These are separate assumptions. **Light does not mean inextensible.** One concerns mass; the other concerns length.

A light string passing over a smooth pulley has the same tension on both sides in the usual ideal model. A light rod can transmit tension or **thrust**: it can pull or push. A string can only pull.

For two particles attached to the ends of one taut inextensible string over a fixed pulley, their speeds and acceleration magnitudes are equal while the string remains taut. Their directions may be opposite. Do not apply this conclusion to every arrangement of strings and pulleys.

### Example 1 — Choose the model for a ball

**Question:** A ball is thrown across a field. We want to predict where it first reaches the ground. State two assumptions and explain their limits. Would the same model predict how the ball spins?

1. **Model the ball as a particle.** We follow one point instead of its whole shape. This may be reasonable if the ball's size is small compared with its flight distance. This model does not describe its spin.
2. **Neglect air resistance.** After release, weight is then the only force. Near the Earth's surface we also take $g$ as constant. Ignoring air resistance is less reasonable for a light ball, a strong wind or a long flight.

**Check:** Each assumption has a stated effect and a limit. Saying only "use a particle" would not explain why air resistance is absent.

## Connected Bodies

Start with a diagram of the separate bodies. Label the forces, then choose a positive direction. An acceleration arrow describes the motion; **it is not an extra force**.

![Separate force diagrams for a car and trailer moving right, showing normal reactions, weights, tension and driving force](/assets/img/a2-math-mech/car-trailer-model.svg)

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

## A Lift and Its Passenger

Decide which body each equation describes. Cable tension acts on the lift; the floor's normal reaction acts on the passenger.

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

## A Fixed Pulley

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

## Practice

Allow about 20–25 minutes. Give a reason for each modelling assumption, not just its name.

### Q1 — Separate two assumptions

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

### Q2 — Identify what each term changes

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

### Q3 — Change the car model

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

### Q4 — A lift slows down

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

### Q5 — Decide whether a particle model is enough

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
