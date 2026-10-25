---
layout: subjects
title: "Forces and Newton’s laws"
mathjax: true
grade: as
subject: as-mathematics
permalink: /alevel/as-mathematics/forces/
toc_headings: h2
reading_layout: true
study_page: true
---

[AS Mathematics learning route](/alevel/as-mathematics/#learning-route) · M1.3 · OxfordAQA 9660 v5.2
{:.lesson-meta}

Read the explanation and complete example, then try the questions on paper. Hints and solutions open separately. All questions are **self-written**, with no official marks.

- [Forces on one body and connected bodies](#l24)

## Forces on one body and connected bodies {#l24}

Goal: draw each body's forces and explain the assumptions behind connected motion. Prerequisites: [equations](/alevel/as-mathematics/algebra/#l02) and [acceleration](../constant-acceleration/#l22).

### Draw forces on one body at a time {#l24-concept}

Choose the body and positive direction before writing an equation. With zero resultant force its velocity is constant, including possible rest. For constant mass in an inertial frame, Newton's second law is $\sum F=ma$: add the signed forces on that body, not on its neighbours.

Weight $mg$ acts downwards; the surface reaction is perpendicular to the surface. A string pulls along itself. A rigid rod can pull or push. Resistance opposes motion. During sliding, dynamic friction can be modelled by $F=\mu R$; static friction need not always equal that value.

On a horizontal surface with no other vertical force and no vertical acceleration, the reaction balances weight. Friction opposes the sliding velocity; it can point in the same direction as acceleration when the block is slowing down.

Newton's third-law forces are an equal and opposite pair acting on different bodies. They do not cancel on a single body's diagram. They cancel internally only when we treat both bodies as one system.

The ideal string is light, so tension does not change along a free straight part. A smooth light pulley or smooth fixed peg supports equal tensions on its two sides. A taut inextensible connection keeps the total length fixed, giving equal acceleration magnitudes in the simple two-sided model. If it becomes slack, that shared-motion constraint no longer follows; a negative tension is a warning that a pulling-string model fails. M1 connected models here use horizontal or vertical motion, without inclined-force resolution.

![A 3 kg mass has tension T upward and weight 3g downward; a 2 kg mass has tension T upward and weight 2g downward. Chosen accelerations are downward on the heavier side and upward on the lighter side.](/alevel/as-mathematics/assets/forces.svg)

<div class="worked-example" markdown="1">

### A complete example {#l24-worked}

**Question:** Masses 3 kg and 2 kg hang on opposite sides of a smooth light pulley, joined by a light taut inextensible string. Starting from rest, find the acceleration and tension while both move freely. Use $g=9.8\,\mathrm{m\,s^{-2}}$.

Choose downward positive for the 3 kg body and upward positive for the 2 kg body. The taut inextensible string gives one acceleration magnitude a; the light string and smooth light pulley give one tension T. Weight and tension oppose one another on each body:

$$3g-T=3a,\qquad T-2g=2a.$$

Adding the equations removes the internal tension: $g=5a$, so $a=9.8/5=1.96\,\mathrm{m\,s^{-2}}$. Use the lighter body's equation for the remaining unknown:

$$T=2g+2a=2(9.8+1.96)=23.52\,\mathrm N.$$

This tension is greater than the lighter body's weight, so it accelerates upward. For the heavier body the weight is greater than T, so it accelerates downward. Positive tension agrees with a pulling string. The result applies only while both bodies move freely and the string stays taut.

</div>

<div class="lesson-check" markdown="1">

### Complete a supported attempt {#l24-scaffold}

**Question:** A 2 kg block slides right on a horizontal surface. A horizontal 10 N force pulls right and $\mu=0.2$. Find the reaction, dynamic friction and acceleration, using $g=9.8\,\mathrm{m\,s^{-2}}$.

<details markdown="1">
<summary>Hint</summary>

There is no vertical acceleration; friction opposes the stated motion.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$R=19.6$ N, friction $0.2R=3.92$ N leftwards, and $a=(10-3.92)/2=3.04\,\mathrm{m\,s^{-2}}$ rightwards.

</details>

</div>

<div class="lesson-check" markdown="1">

### Independent task {#l24-independent}

**Question:** A 600 kg car tows a 400 kg trailer along a horizontal road using a light rigid towbar. The engine drives forward with 1800 N; resistances are 400 N on the car and 200 N on the trailer. Draw separate force diagrams, find the acceleration and towbar force, and state whether the bar is in tension or thrust.

<details markdown="1">
<summary>Hint</summary>

Use the whole system for acceleration, then the trailer alone for the internal connection force.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Each body has weight down and an equal road reaction up. Horizontally the car has 1800 N forward, 400 N resistance and towbar force backwards; the trailer has the opposite towbar force forward and 200 N resistance backwards. For the system, $1800-400-200=1000a$, so $a=1.2\,\mathrm{m\,s^{-2}}$. For the trailer, $T-200=400(1.2)$ gives $T=680$ N. The bar pulls the trailer and is in tension. Its opposite force acts on the car, in accord with the third law.

![Check diagrams: the car has drive right, resistance and towbar force left; the trailer has towbar force right and resistance left. Each has weight down and road reaction up. Forward is positive.](/alevel/as-mathematics/assets/car-trailer-check.svg)

</details>

</div>

<div class="lesson-check" markdown="1">

### Another independent task {#l24-independent-assumptions}

**Question:** Two hanging particles are connected over a smooth light pulley by a light taut inextensible string. A student says: “inextensible gives equal tension, and light gives equal acceleration magnitudes.” Assess the explanation. State what must be reconsidered if the string has significant mass or becomes slack.

<details markdown="1">
<summary>Hint</summary>

Connect each assumption to the particular conclusion it supports.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The explanation swaps the roles. A light string with a smooth light pulley supports the same tension on the two sides. A taut inextensible string has fixed length, so when one side shortens the other lengthens by the same amount; the acceleration magnitudes agree in this fixed-pulley arrangement.

With significant string mass, do not assume one common tension: accelerating the string can require different tensions. If it becomes slack, the shared-motion constraint no longer follows and the particles may move differently. A string can pull but cannot provide thrust.

</details>

</div>

<div class="lesson-check" markdown="1">

### Another independent task {#l24-independent-friction}

**Question:** A 4 kg block is sliding right on a horizontal rough surface. A horizontal 3 N force acts left. The coefficient of dynamic friction is 0.25. Draw its forces, find the normal reaction, friction and acceleration, and explain how its speed changes while it still slides right. Use $g=9.8\,\mathrm{m\,s^{-2}}$.

<details markdown="1">
<summary>Hint</summary>

Work vertically first. Choose friction from the motion, not from the acceleration.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Draw weight down, reaction up, and both the applied force and sliding friction left. There is no vertical acceleration, so $R=4g=39.2\,\mathrm N$. Friction has magnitude $F=0.25R=9.8\,\mathrm N$, acting left against the rightward sliding.

Taking right positive, $-3-9.8=4a$ gives $a=-3.2\,\mathrm{m\,s^{-2}}$. The block is moving right but accelerating left, so it slows down. This sliding-friction result applies until it stops; it does not decide the friction after stopping.

</details>

</div>

### Diagnose and repair {#l24-diagnosis}

Adding weights is not the driving force in a hanging system: they oppose each other along the constraint. Do not place both members of a third-law pair on one body. Resistive directions follow actual motion, not the sign you hope to obtain.

For a force-direction error, follow [one body at a time](#l24-worked), then [the braking retry](#l24-retry). For a model-assumption error, revisit [the string and pulley explanation](#l24-concept), then [the changed model](#l24-retry-assumptions). For sliding friction, compare [the supported calculation](#l24-scaffold), then [try reversed motion](#l24-retry-friction).

<div class="lesson-check" markdown="1">

### Try again {#l24-retry}

**Question:** A 500 kg trailer moving on a horizontal road is decelerated at $2\,\mathrm{m\,s^{-2}}$. Its resistance is 300 N backwards. Find the towbar force on it and say whether the bar pushes or pulls the trailer.

<details markdown="1">
<summary>Hint</summary>

Take forward positive and retain the negative acceleration.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$F-300=500(-2)$ gives $F=-700$ N, so the bar pushes backwards with 700 N and is in compression (thrust), not tension.

</details>

</div>

<div class="lesson-check" markdown="1">

### Check a changed model {#l24-retry-assumptions}

**Question:** In the same fixed-pulley arrangement, the string remains light, taut and inextensible but the pulley is rough. Which of “one common tension” and “equal acceleration magnitudes” can still be used without further information? Explain.

<details markdown="1">
<summary>Hint</summary>

Separate the fixed-length connection from resistance at the pulley.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The taut inextensible string still gives equal acceleration magnitudes. Rough contact can support different tensions on the two sides, so one common tension is not justified. The force equations need separate tensions and extra information about the pulley interaction before a numerical acceleration can be determined.

</details>

</div>

<div class="lesson-check" markdown="1">

### Another retry {#l24-retry-friction}

**Question:** A 5 kg block is sliding left on a horizontal rough surface while a horizontal 8 N force acts right. Its coefficient of dynamic friction is 0.2. Find the normal reaction, friction and acceleration, then explain whether it speeds up or slows down while still sliding left. Use $g=9.8\,\mathrm{m\,s^{-2}}$.

<details markdown="1">
<summary>Hint</summary>

Keep the stated velocity direction separate from the chosen positive direction.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Vertical balance gives $R=5g=49\,\mathrm N$. Friction is $F=0.2R=9.8\,\mathrm N$ rightwards because the block slides left. Taking right positive, $8+9.8=5a$ gives $a=3.56\,\mathrm{m\,s^{-2}}$ rightwards. This opposes its leftward velocity, so it slows down. At rest, the sliding model must be reconsidered.

</details>

</div>

## After this lesson {#next-step}

Close the solutions and check that you can complete each group’s retry independently and explain the method and its conditions. Revisit the relevant example if needed, then continue to the next lesson.

[Previous lesson: Variable acceleration](/alevel/as-mathematics/variable-acceleration/) · [Course route](/alevel/as-mathematics/#learning-route) · [Next lesson: Momentum and impulse](/alevel/as-mathematics/momentum/)

After completing this route, try [the mixed task](/alevel/as-mathematics/#mixed-mechanics). In a later study session, return to [the recall task](/alevel/as-mathematics/#later-mechanics) with solutions closed.

## Sources and scope {#sources}

<details class="lesson-notes" markdown="1">
<summary>View scope and marking sources</summary>

Organised against the [current official 9660 specification](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf). Paired marking material informs the expected reasoning; every task here is separately self-written and is not an official question or official mark scheme.

Specification §3.2 M1.3; MA02 January 2025 Q9, QP p19, MS p16.

[MA01 January 2025 QP](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-question-paper.pdf) · [paired MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-mark-scheme.pdf) · [MA02 January 2025 QP](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-question-paper.pdf) · [paired MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-mark-scheme.pdf)

Success means independently explaining the method and checking its conditions, not just reading a solution. Student learning outcomes have not been trialled.

</details>
