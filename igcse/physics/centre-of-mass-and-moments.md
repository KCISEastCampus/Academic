---
title: Centre of Mass, Stability and Moments
layout: subjects
mathjax: true
grade: igcse
subject: igcse-physics
permalink: /igcse/physics/centre-of-mass-and-moments/
toc_headings: h2, h3
study_page: true
---

<h2 id="start-here">Why can a small change make an object topple?</h2>

A force can change motion without turning an object, or produce a turning effect about a chosen pivot. To explain balance we need the mass distribution, the force’s line of action and the support geometry.

1. Locate the [centre of mass](#centre-of-mass) and plan a [suspension investigation](#suspension-method).
2. Choose the [perpendicular moment arm](#moments), then test [lever balance](#levers).
3. Explain [stability and toppling](#stability).
4. Attempt [independent practice](#independent-practice), then [diagnose and retry](#diagnose-and-retry).

**Before you start:** use forces and weight from [Forces and Motion](/igcse/physics/forces-and-motion/). The previous [spring lesson](/igcse/physics/springs-and-hookes-law/) practised checking a model’s range. Here assume rigid bodies and a uniform gravitational field. Diagrams and records are constructed teaching material. Tasks are self-written except the labelled specimen adaptation.

<h3 id="first-judgement">Try first: must it be the middle?</h3>

*Self-written task.*

<!-- task:first-judgement -->

A uniform rectangular card has a small metal washer attached near its right edge. A student says its centre of mass must still be the geometric centre because the outline is a rectangle. Evaluate the claim without calculating a new position.

<!-- /task:first-judgement -->

<details markdown="1">
<summary>Hint</summary>

Has the outline changed, or the distribution of mass?

</details>

<details markdown="1">
<summary>Solution and check</summary>

The washer shifts the centre of mass towards the right. The symmetry shortcut needs a symmetric mass distribution, not just a symmetric outline. The new position depends on the washer and card masses and their positions.

</details>

<h2 id="centre-of-mass">Replace a distributed weight with one line of action</h2>

The **centre of mass** is the point at which an object’s mass may be treated as concentrated when describing its overall motion. In a uniform gravitational field the resultant weight acts vertically downwards through this point.

For a uniform rectangle it lies at the intersection of the diagonals; for a uniform disc at its centre. A symmetry axis constrains its position only when the mass distribution has that symmetry. A centre of mass can lie in empty space, as at the centre of a uniform ring.

For a freely suspended object at rest, the centre of mass lies **directly below the suspension point**. If its weight’s line of action misses that point, weight produces a turning effect. The object can settle with the centre of mass below the support, where a small displacement produces a restoring tendency.

<h2 id="suspension-method">Find an irregular lamina’s centre of mass</h2>

A **lamina** is a thin sheet. Suspend it from a small hole near an edge using a low-friction pin; hang a plumb line from the same support. Wait until both stop moving, then mark the vertical line on the sheet. Repeat from a well-separated hole. The marked lines intersect at the centre of mass; use a third suspension as a consistency check.

The sheet changes orientation between suspensions. Trace each vertical **while suspended**, then compare those traces on the same sheet. Drawing two parallel verticals through different holes on a stationary outline is not this method. Avoid rubbing on the stand, view square-on and use thin lines. Poorly separated lines magnify the uncertainty of their intersection.

Keep the stand stable, cover sharp pin ends and keep the hanging mass clear of feet. This planning task does not certify that the physical investigation has been performed.

<img src="/assets/img/physics-ig-lamina.svg" alt="Plan view of an irregular thin sheet before suspension, with two marked holes P and Q near different edges. No centre of mass or measured plumb-line traces have been marked; the outline is a schematic, not an experimental result." width="760" height="430">

<h3 id="plan-suspension">Explain the evidence, not just the equipment</h3>

*Self-written task.*

<!-- task:plan-suspension -->

Use the lamina sketch to describe how you would locate its centre of mass. Explain why two suspension positions are needed and how a third helps. A student clamps the sheet so that it cannot rotate and draws a vertical below the clamp. Explain why this does not provide the required evidence.

<!-- /task:plan-suspension -->

<details markdown="1">
<summary>Hint</summary>

What must be free to happen before the “directly below” argument is justified?

</details>

<details markdown="1">
<summary>Solution and check</summary>

Mark the plumb-line direction after free suspension from P, repeat after free suspension from Q, and locate the traces’ intersection. One trace only gives a line of possible positions; a third checks whether the finite-width traces meet consistently. Clamping prevents rotation and can provide a moment, so the centre of mass need not settle directly below the clamp. Releasing that constraint is essential.

</details>

<h2 id="moments">Choose the pivot and perpendicular distance</h2>

The **moment of a force** about a pivot measures its turning effect:

$$M=Fd$$

F is the force magnitude in N; d is the **shortest perpendicular distance from the pivot to the force’s line of action**, in m. The moment unit is N m. State clockwise or anticlockwise separately. A force along a line through the pivot has zero moment even if applied far from it.

**Worked model:** a 25 N downward force acts 0.40 m horizontally to the right of a pivot. Its vertical line of action is 0.40 m from the pivot:

$$M=25\times0.40=10\,\mathrm{N\,m}$$

The turning sense is clockwise. The pivot force has zero moment about that pivot, but it may be necessary for force equilibrium.

<img src="/assets/img/physics-ig-moment-distance.svg" alt="A sloping rod goes from pivot O to an endpoint 0.80 m horizontally right and 0.60 m above O; rod length is 1.00 m. A 30 N force acts vertically down at the endpoint, with its vertical line of action shown. The dimensions are supplied data." width="760" height="430">

<h3 id="choose-distance">Which of the three lengths belongs in the moment?</h3>

*Self-written task.*

<!-- task:choose-distance -->

For the sloping rod diagram, calculate the moment of the 30 N force about O and state its turning sense. Explain why using either 1.00 m or 0.60 m as the moment arm would be incorrect. No trigonometry is required.

<!-- /task:choose-distance -->

<details markdown="1">
<summary>Hint</summary>

Extend the vertical force line and draw a perpendicular from O.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$M=30\times0.80=24\,\mathrm{N\,m}$$

The moment is clockwise. The perpendicular to a vertical line is horizontal, so the distance is 0.80 m. The 1.00 m rod length is diagonal, and 0.60 m is parallel to the force line rather than perpendicular to it.

</details>

<h2 id="levers">Balance moments, then check the forces</h2>

For a stationary rigid body, clockwise and anticlockwise moments about the same pivot balance. The resultant force must also be zero:

$$\sum M_{\mathrm{clockwise}}=\sum M_{\mathrm{anticlockwise}}$$

A simple lever can multiply force when the effort has the longer moment arm:

$$F_{\mathrm{effort}}d_{\mathrm{effort}}=F_{\mathrm{load}}d_{\mathrm{load}}$$

A larger output force is not free energy. In an ideal slow rotation the longer effort arm moves through a larger distance. Include the lever’s own weight if its line of action misses the pivot; do not omit it merely because the lever looks thin.

**Adaptation source:** OxfordAQA International GCSE Physics 9203/1, Paper 1 Specimen material Q02.4–02.6; original diagrams and paired mark scheme checked. The task below states the model assumptions explicitly and adds a support-force check. Use weights and sides to identify each child.

<h3 id="specimen-seesaw">Compare moments before predicting rotation</h3>

*Adapted task; source identified in this section.*

<!-- task:specimen-seesaw -->

A horizontal see-saw has a 560 N child 1.7 m to the left of its pivot and a 420 N child 2.4 m to the right. Its own weight acts through the pivot; ignore pivot friction. Calculate the two moments and predict the initial turning direction when released from rest. With the 420 N child fixed, where must the 560 N child sit to balance it? If the board weighs 100 N, find the upward pivot force in the balanced state.

<!-- /task:specimen-seesaw -->

<details markdown="1">
<summary>Hint</summary>

Compare unrounded moments; a larger weight need not give the larger moment.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$M_{\mathrm{left}}=560\times1.7=952\,\mathrm{N\,m},\qquad M_{\mathrm{right}}=420\times2.4=1008\,\mathrm{N\,m}$$

The right side initially turns downwards: clockwise. The heavier child’s shorter arm gives the smaller moment. For balance:

$$560d=420\times2.4,\qquad d=1.8\,\mathrm{m}$$

The 560 N child must move to 1.8 m left of the pivot. The upward force is 1080 N, balancing both children and the board. The board contributes no moment here because its weight acts through the pivot. The checked scheme rounds 952 N m to 950 N m; compare the unrounded values before judging the turning sense.

</details>

<h2 id="stability">Follow the weight line as the object tilts</h2>

For a rigid object supported on a horizontal surface, the vertical line through its centre of mass must fall inside the support base for static equilibrium under weight and support alone. As it tilts without slipping about an edge:

- Inside the base, weight tends to turn it back towards its original position.
- Directly over the edge, weight’s moment about that edge is zero: a limiting balance, easily disturbed.
- Beyond the edge, weight tends to turn it farther over: it topples if released under the stated model.

A wider base or a lower centre of mass generally allows a larger tilt before the weight line passes the edge, when other conditions are comparable. This explains low, wide balancing toys and why a tall load can reduce a vehicle’s resistance to toppling. An accelerating vehicle in a turn needs a fuller force model; the static rule alone does not calculate a safe cornering speed.

<img src="/assets/img/physics-ig-tilting.svg" alt="Two schematic blocks A and B with equal 0.60 m base widths, each tilted 25 degrees clockwise about its right lower edge on a horizontal floor without slipping. The centre of mass is marked at height 0.30 m for A and 0.90 m for B before tilt. Vertical weight lines are drawn through the marked centres; no stability verdicts are labelled." width="760" height="430">

<h3 id="tilt-judgement">Same base, same tilt: why different outcomes?</h3>

*Self-written task.*

<!-- task:tilt-judgement -->

The two blocks in the diagram are held at the same tilt and then gently released, with no initial rotation. The right edge does not slip. Use the weight lines to predict which block returns and which topples. Explain how moving mass down inside block B would affect its resistance to toppling. Do not calculate an angle.

<!-- /task:tilt-judgement -->

<details markdown="1">
<summary>Hint</summary>

Take moments about the contact edge, not about the centre of mass.

</details>

<details markdown="1">
<summary>Solution and check</summary>

A’s weight line is left of the right contact edge and produces an anticlockwise restoring moment. B’s line is to the right and produces a clockwise toppling moment. Moving B’s mass lower reduces the horizontal shift of its centre of mass for the same tilt, so a greater tilt is generally needed to pass the edge. This assumes its base and mass distribution otherwise remain fixed and it does not slide.

</details>

<h2 id="independent-practice">Decide which conditions matter</h2>

<h3 id="practice-lever">Choose the effort and check the support</h3>

*Self-written task.*

<!-- task:practice-lever -->

An ideal horizontal wheelbarrow is supported at its wheel axle. Its 300 N load acts 0.40 m behind the axle, and an upward effort at the handles acts 1.20 m behind the axle. Neglect the barrow’s own weight. Find the effort and the upward ground force at the wheel. Explain how the effort changes if the load is moved to 0.60 m behind the axle. State the turning senses about the axle.

<!-- /task:practice-lever -->

<details markdown="1">
<summary>Hint</summary>

Both forces act on the same side of the axle, but one points up and one down.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$F_{\mathrm{effort}}\times1.20=300\times0.40,\qquad F_{\mathrm{effort}}=100\,\mathrm{N}$$

With the handles to the right in a side-view sketch, load acts clockwise and effort anticlockwise. The ground force is 200 N upward, so total upward force equals 300 N. At the new load position the effort is 150 N and ground force 150 N. The load’s moment increases although its weight stays the same; the effort must increase if its arm is unchanged.

</details>

**Constructed geometry record:** for four separate held positions of the same rigid object, the table gives the horizontal projection of its centre of mass onto the floor. The retained contact edge is at x = 0.60 m and the original base spans 0 to 0.60 m. Values are supplied model geometry, not experimental readings.

<!-- record:stability-record -->

| Held position | Centre-of-mass projection x / m |
| --- | --- |
| P | 0.30 |
| Q | 0.59 |
| R | 0.60 |
| S | 0.63 |

<!-- /record:stability-record -->

<h3 id="practice-projection">Distinguish a small margin from no margin</h3>

*Self-written task.*

<!-- task:practice-projection -->

For each supplied position, judge whether weight gives a restoring moment, zero moment or a toppling moment about the retained right edge. Compare P and Q. Explain why an actual measurement of 0.60 m with uncertainty would not prove exact limiting balance.

<!-- /task:practice-projection -->

<details markdown="1">
<summary>Hint</summary>

Use the side of the pivot occupied by the vertical weight line.

</details>

<details markdown="1">
<summary>Solution and check</summary>

P and Q give restoring moments, R zero moment and S a toppling moment. P’s horizontal restoring arm is 0.30 m; Q’s is only 0.01 m, so for the same weight its restoring moment is smaller. R is a limiting configuration, not a generous stability margin. A real interval around 0.60 m could lie partly on either side of the edge; inspect uncertainty and the support position before claiming an exact boundary.

</details>

<h2 id="diagnose-and-retry">Check the line of action and the whole object</h2>

| Error | Repair |
| --- | --- |
| Symmetric outline proves central mass | Check the mass distribution. |
| Rod length is always the moment arm | Draw the perpendicular to the force line. |
| The heavier child always turns down | Compare force × perpendicular distance. |
| Balanced moments prove full equilibrium | Check resultant force too. |
| Same base means same stability | Locate the centre of mass and weight line. |

<h3 id="retry-own-weight">Retry with the board’s own weight</h3>

*Self-written task.*

<!-- task:retry-own-weight -->

A uniform 2.0 m board weighing 80 N is held horizontally on a pivot 0.50 m from its left end. A 40 N load acts at the right end. An upward force is applied at the right end to keep the board stationary. Find that force and the upward pivot force. Explain why omitting the board’s weight gives an incorrect answer.

<!-- /task:retry-own-weight -->

<details markdown="1">
<summary>Hint</summary>

Locate the board’s centre before taking moments about the pivot.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$F\times1.50=80\times0.50+40\times1.50,\qquad F=66.7\,\mathrm{N}$$

The uniform board’s centre is 1.00 m from the left end, so its weight acts 0.50 m right of the pivot. The upward pivot force is 53.3 N; together the upward forces balance 120 N. Omitting the board’s moment would give only 40 N at the end, leaving an unbalanced clockwise moment. Retain intermediate precision; answers are about 67 N and 53 N to two significant figures.

</details>

<h2 id="sources-and-next">Scope and next step</h2>

Scope: OxfordAQA International GCSE Physics 9203 Sections 3.1.7–3.1.8, including locating a lamina’s centre of mass, stability, moments and force multiplication. The see-saw task adapts Paper 1 Specimen material Q02.4–02.6 with the paired mark scheme checked. Other tasks and geometry records are self-written. No official marks are assigned to the adaptations. Scope follows the [official specification](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-international-gcse-physics-specification.pdf).

[Previous: Springs and Hooke’s Law](/igcse/physics/springs-and-hookes-law/) · [Back to IGCSE Physics](/igcse/physics/). Energy is still available as [reference notes](/igcse/physics/#-unit-2-energy); this route does not claim a complete IGCSE course or physical practical completion.
