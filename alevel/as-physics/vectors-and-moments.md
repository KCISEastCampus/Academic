---
title: Vectors and Moments
layout: subjects
mathjax: true
grade: as
subject: as-physics
permalink: /alevel/as-physics/vectors-and-moments/
toc_headings: h2, h3
study_page: true
reading_layout: true
---

<h2 id="start-here">No resultant force, but still a turning effect?</h2>

Build a force model that checks both translation and rotation. A magnitude alone cannot tell you the effect of a vector or where its line of action lies.

1. [Resolve and combine vectors](#components).
2. Find [equilibrium at a point](#point-equilibrium).
3. Choose [perpendicular moment arms](#moments), then distinguish [couples](#couples).
4. Complete [independent practice](#independent-practice) and [retry](#diagnose-and-retry).

**Before you start:** use signed quantities, right triangles, sine/cosine and units. Revisit [IG force models](/igcse/physics/forces-and-motion/) or [AS measurement judgement](/alevel/as-physics/measurements-and-uncertainties/) if needed. Use g = 9.81 N/kg for AS calculations here.

Tasks are self-written except those explicitly identified as official or adapted. Diagrams are teaching schematics. Hints and solutions begin closed.

<h3 id="first-judgement">Try first: opposite does not mean cancelled everywhere</h3>

*Self-written task.*

<!-- task:first-judgement -->

Two equal parallel forces act in opposite directions on a rigid board, along different lines. A student says: “The forces add to zero, so there can be no effect.” Which part of that claim is established by adding vectors, and what additional information would you examine? You do not need a moment equation yet.

<!-- /task:first-judgement -->

<details markdown="1">
<summary>Hint</summary>

Consider whether pushing opposite sides of a wheel could turn it.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The vector sum is zero, so there is no resultant force. However, their different lines of action can produce a turning effect. Inspect where the forces act and the perpendicular separation of their lines. Zero resultant force alone does not establish rotational equilibrium.

</details>

<h2 id="components">Define axes and the angle before resolving</h2>

Weight is a directed gravitational force; mass is scalar.

Scalars have magnitude only; vectors have magnitude and direction. Speed, distance and mass are scalars; velocity, displacement, acceleration and force are vectors. Components describe the same vector along chosen perpendicular axes; they are not extra interactions.

Choose east as x and north as y. If angle θ is measured anticlockwise from positive x:

$$F_x=F\cos\theta,\qquad F_y=F\sin\theta.$$

The component adjacent to the marked angle uses cosine. If the angle is measured from the vertical, swap which component is adjacent; do not memorise “horizontal always means cosine”. Include signs for the quadrant.

<div class="worked-example" markdown="1">

<img src="/assets/img/physics-as-components.svg" alt="Vector schematic on east and north axes: a 10 N arrow is 30 degrees north of east. A dashed right triangle labels the east component Fx and north component Fy, without numerical component values. Angle is measured from the horizontal axis." width="760" height="430">

**Worked resolution:** for the diagram,

$$F_x=10\cos30^\circ=8.66\,\mathrm{N},\qquad F_y=10\sin30^\circ=5.00\,\mathrm{N}.$$

Check $F_x^2+F_y^2=F^2$. Each component's magnitude must be no greater than the whole vector. Add all x components and all y components separately. A scale drawing gives the same resultant by joining vectors head to tail.

</div>

For perpendicular resultant components,

$$R=\sqrt{R_x^2+R_y^2}.$$

Use a diagram and the component signs to choose the direction; an inverse tangent by itself may give the wrong quadrant. For a zero resultant, no direction is defined.

<h3 id="exam-components">Change the angle reference</h3>

*Adapted from OxfordAQA International AS Physics 9630, PH01 June 2024, Q08.1; paired mark scheme checked. Added horizontal-component and angle-reference tasks.*

<!-- task:exam-components -->

A football is kicked with an initial speed of 15 m/s at 38° above the horizontal. Determine its initial vertical and horizontal velocity components. A student instead uses 38° from the vertical. Explain the error and state the angle that would correctly be measured from the vertical.

<!-- /task:exam-components -->

<details markdown="1">
<summary>Hint</summary>

Identify the side opposite the given angle, and label the reference axis on a sketch.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The components are

$$u_y=15\sin38^\circ=9.23\,\mathrm{m\,s^{-1}},\qquad u_x=15\cos38^\circ=11.82\,\mathrm{m\,s^{-1}}.$$

The vertical component rounds to 9.2 m/s, consistent with the checked mark scheme for Q08.1. The complementary angle is 52° from vertical; $15\cos52^\circ$ gives the same vertical component. Using 38° from vertical describes a different direction, not a different method for the same vector.

</details>

<h2 id="point-equilibrium">Equilibrium of forces at one point</h2>

For two or three coplanar forces acting at a point, equilibrium requires a closed vector polygon:

$$\sum F_x=0,\qquad \sum F_y=0.$$

Two forces must be equal and opposite. Three forces need not be equal, nor 120° apart; their vector sum must vanish. Rest and constant-velocity motion are both compatible with translational equilibrium. Rotation of an extended body needs a separate moment check.

<div class="worked-example" markdown="1">

**Worked joint.** Two ideal light cords support a 40 N downward load at a small stationary joint. One cord is horizontal to the left; the other points 30° above the horizontal to the right. For the joint:

$$T\sin30^\circ=40,\qquad H=T\cos30^\circ.$$

Thus $T=80\,\mathrm{N}$ and $H=69.3\,\mathrm{N}$. A cord pulls along its length; it cannot supply a compressive push. Check the upward component, not the total inclined tension, against the load.

</div>

<h3 id="complete-equilibrium">Use three directions without assuming equal forces</h3>

*Self-written task.*

<!-- task:complete-equilibrium -->

At a stationary ring, one force is 6.0 N east and another is 8.0 N north. Determine the magnitude and direction of the third force needed for equilibrium. Sketch the three vectors head to tail. Explain why a third force of 14 N is not the correct answer.

<!-- /task:complete-equilibrium -->

<details markdown="1">
<summary>Hint</summary>

Find the resultant of the first two, then reverse that resultant.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The first two give a resultant of 10 N at 53.1° north of east. The third force has components −6.0 N east and −8.0 N north, so it is 10 N at 53.1° south of west. The vector triangle closes. The magnitudes 6 and 8 cannot be added directly because the forces are perpendicular.

</details>

<h2 id="moments">Measure to the line of action, not along the rod</h2>

A moment describes the turning effect of a force about a chosen point:

$$M=Fd_{\perp}.$$

The distance is perpendicular from the pivot to the force's line of action. For a rod of length r with a force at angle θ to the rod, the same geometry gives

$$d_{\perp}=r\sin\theta,\qquad M=Fr\sin\theta.$$

<img src="/assets/img/physics-as-moment-arm.svg" alt="Schematic: a horizontal rod extends 0.40 m right from pivot O. A 20 N force at the right end points 30 degrees above the rod. Its extended line of action and the perpendicular from O are shown; the perpendicular distance is labelled d, not given numerically." width="760" height="430">

<div class="worked-example" markdown="1">

**Worked geometry:** the force is applied 0.40 m from O at 30° to the rod.

$$d_{\perp}=0.40\sin30^\circ=0.20\,\mathrm{m},\qquad M=20\times0.20=4.0\,\mathrm{N\,m}.$$

It is anticlockwise. Alternatively, use the 10 N component perpendicular to the rod times 0.40 m. Do not use the full force and the full rod length together unless they are perpendicular. A force whose line passes through O has zero moment about O even if it is large.

For equilibrium of a rigid body, choose a sign convention and require zero net moment as well as zero resultant force. Taking moments about a support removes its unknown force from that equation, because its moment arm is zero.

</div>

<h2 id="couples">A couple can turn without a resultant force</h2>

A **couple** is a pair of equal, opposite, parallel forces in the same plane on distinct lines of action. Its moment is

$$M_{\mathrm{couple}}=Fd,$$

where d is the perpendicular separation of those two lines, not the distance from an arbitrary pivot to one line. The couple's moment is independent of the point about which it is calculated. The forces act on the same body; this is not a third-law pair.

For two vertical 12 N forces, upward on the left and downward on the right, with lines 0.30 m apart, the resultant is zero but the clockwise couple moment is $12\times0.30=3.6\,\mathrm{N\,m}$. With no balancing moment the body is not in rotational equilibrium. This does not by itself state its angular acceleration; its rotational inertia also matters.

<h3 id="exam-equilibrium">State both conditions</h3>

*Official question: OxfordAQA International AS Physics 9630, PH01 June 2024, Q06.1. Paired mark scheme checked.*

<!-- task:exam-equilibrium -->

State the two conditions for a body to be in equilibrium.

<!-- /task:exam-equilibrium -->

<details markdown="1">
<summary>Hint</summary>

One condition concerns the vector sum; the other concerns turning.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The resultant force is zero and the resultant moment about any point is zero. In a plane, the force condition includes both independent component directions. Saying only “clockwise equals anticlockwise” omits the force condition.

</details>

<h2 id="centre-of-mass">Put weight at the appropriate centre of mass</h2>

For a uniform regular solid, the centre of mass is at its geometrical centre. For a non-uniform object do not assume the midpoint; use the supplied location or determine it from a mass model. In a uniform gravitational field, the weight can be represented as acting through the centre of mass for the force and moment calculations here.

**Symmetric support example — adapted from PH01 June 2024 Q06.2.** A uniform skateboard of mass 4.8 kg supports a 360 N child whose centre of mass is above its midpoint. The two supports are equally spaced from the midpoint. The whole system is stationary.

$$R_A+R_B=360+4.8\times9.81=407.088\,\mathrm{N}.$$

Symmetric distances and central loading give equal reactions by the moment condition, so each is 203.544 N, approximately 204 N. Retain the full weight calculation until the end. The checked source accepts 204 N, or 200 N to two significant figures. Equal reactions follow from the geometry and loading, not just from zero acceleration.

<h2 id="independent-practice">Use force and moment checks together</h2>

Keep solutions closed. Define the object, draw its force diagram and state which balance equations apply. Where a support can only push, check the signs of your answers.

<h3 id="practice-cords">A different angle reference</h3>

*Self-written task.*

<!-- task:practice-cords -->

A stationary small joint supports a 60 N downward load. A horizontal cord pulls left; another cord points up and right at 40° to the vertical. Find both tensions. Explain whether moving the inclined cord closer to the vertical reduces or increases its required tension, with the load unchanged.

<!-- /task:practice-cords -->

<details markdown="1">
<summary>Hint</summary>

Draw the angle to the vertical. Its vertical component is adjacent to that angle.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Let T be the inclined tension and H the horizontal tension:

$$T\cos40^\circ=60,\qquad H=T\sin40^\circ.$$

Thus $T=78.3\,\mathrm{N}$ and $H=50.3\,\mathrm{N}$. Closer to vertical, the cosine of the angle from vertical increases, so less inclined tension is required for the same upward component. As that angle tends to zero, T tends to 60 N and H tends to zero.

</details>

<h3 id="practice-beam">A load moves along an overhanging beam</h3>

*Self-written task.*

<!-- task:practice-beam -->

A uniform rigid beam is 4.0 m long and weighs 60 N. It lies horizontally on two supports: A at x = 0 and B at x = 3.0 m, measured from the left end. Each support can push upwards but cannot pull down. A 120 N load is placed at x = 2.5 m.

1. Draw the force diagram, including the beam's own weight, and determine both reactions.
2. The load is moved to x = 3.8 m. Can the same horizontal two-contact equilibrium exist? Explain physically.
3. Find the greatest load position x compatible with both contacts having non-negative reactions.

<!-- /task:practice-beam -->

<details markdown="1">
<summary>Hint</summary>

Take moments about A, then check vertical balance. A negative reaction is a model warning, not a downward pull by an ordinary support.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The beam's weight acts at x = 2.0 m. At the initial position:

$$3.0R_B=60\times2.0+120\times2.5,\qquad R_B=140\,\mathrm{N},\qquad R_A=180-140=40\,\mathrm{N}.$$

At x = 3.8 m the assumed equilibrium would require $R_B=192\,\mathrm{N}$ and $R_A=-12\,\mathrm{N}$. A cannot pull down, so this two-contact model fails. The beam tends to lift off A and turn clockwise about B.

The boundary occurs at $R_A=0$, so $R_B=180\,\mathrm{N}$:

$$3.0\times180=60\times2.0+120x,\qquad x=3.5\,\mathrm{m}.$$

This is the limiting position; beyond it the stated horizontal equilibrium is impossible. The calculation identifies loss of contact, not the subsequent angular motion.

</details>

<h3 id="practice-couple">A zero resultant with a non-zero consequence</h3>

*Self-written task.*

<!-- task:practice-couple -->

Two parallel vertical forces act on one rigid plate. A 12 N force acts upwards at the left and a 12 N force downwards at the right; their lines are separated horizontally by 0.30 m.

Find the resultant force and resultant moment. A student calculates each force's moment about the midpoint as 12 × 0.15, then subtracts them. Correct the reasoning. How could an additional couple bring rotational equilibrium without changing the resultant force?

<!-- /task:practice-couple -->

<details markdown="1">
<summary>Hint</summary>

Determine clockwise or anticlockwise for each force separately before assigning signs.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The resultant force is zero. About the midpoint both moments are clockwise, so they add:

$$M=12\times0.15+12\times0.15=3.6\,\mathrm{N\,m}.$$

Equivalently use one force times the full 0.30 m separation. A 3.6 N m anticlockwise couple balances the moment while adding zero resultant force. The existing pair acts on one plate, so it is not a Newton's third-law pair.

</details>

<h2 id="diagnose-and-retry">Check direction, distance and contact</h2>

| Error | Repair |
| --- | --- |
| Horizontal component always uses cosine | Mark the [actual reference angle](#components). |
| Zero resultant means no possible rotation | Include [the moment condition](#exam-equilibrium). |
| Rod length is always the moment arm | Draw the [perpendicular to the line of action](#moments). |
| Opposite forces make opposite moments | Determine [each turning sense](#couples). |
| A negative support force is acceptable | Check the [contact constraint](#practice-beam). |

<h3 id="retry-moment">Retry without the diagram</h3>

*Self-written task.*

<!-- task:retry-moment -->

A 20 N force acts at the end of a 0.40 m rod pivoted at its other end. Compare the moments when the force acts (a) perpendicular to the rod, (b) at 30° to the rod, and (c) along the rod through the pivot. Give magnitudes and explain which distance must change even though the rod length stays fixed.

<!-- /task:retry-moment -->

<details markdown="1">
<summary>Hint</summary>

Extend the force's line of action in each case and drop a perpendicular from the pivot.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The magnitudes are 8.0 N m, 4.0 N m and zero. The perpendicular distances are 0.40 m, 0.20 m and zero. The force and rod length alone are insufficient: changing the line of action changes the perpendicular distance. The rotational sense in (a) and (b) depends on which side of the rod the force points towards.

</details>

<h2 id="moment-transfer">Compare equal moments with different effects</h2>

<div class="lesson-check" markdown="1">
<!-- task:moment-transfer-check -->
A force of 18 N acts at the end of a 0.50 m rod at 30° to the rod. Take moments about the rod’s other end. Separately, two equal opposite parallel forces of 15 N act on a plate along lines 0.30 m apart. Compare their moment magnitudes. Which arrangement has zero resultant applied force? Explain why equal moments do not establish the same translational effect.
<!-- /task:moment-transfer-check -->
<details markdown="1"><summary>Hint</summary>
Use the perpendicular lever arm for the rod and line separation for the couple.
</details>
<details markdown="1"><summary>Solution and repair</summary>
Single-force moment = 18(0.50)sin30° = 4.5 N m; couple moment = 15(0.30) = 4.5 N m. Only the listed couple has zero resultant; the single applied force has resultant 18 N. Extra support forces must be specified before analysing the entire rod. Equal moments do not imply equal translational effects.
</details>
</div>

<div class="lesson-check" markdown="1">
<!-- task:retry-quadrant-contact -->
Retry: a 10 N vector points 30° north of west. Find east/north components. A 40 N weight is supported at a joint by a cord 60° from the vertical and a horizontal cord: find both tensions. Finally, an ordinary unfastened support calculation gives a reaction of −8 N when upwards was positive. Can that contact state exist?
<!-- /task:retry-quadrant-contact -->
<details markdown="1"><summary>Hint</summary>
Draw the quadrant; the cord angle is measured from the vertical.
</details>
<details markdown="1"><summary>Solution and repair</summary>
East component = −10cos30° = −8.66 N, north = +5.00 N. Inclined cord Tcos60° = 40 gives T = 80 N; horizontal cord tension = Tsin60° = 69.3 N. An ordinary contact cannot pull the object down; −8 N invalidates that assumed contact equilibrium and requires a revised constraint/support model. Mass is scalar; weight is a directed gravitational force vector.
</details>
</div>

{% include exam_topic_practice.html %}

<h2 id="sources-and-next">Scope and next step</h2>

Scope: OxfordAQA International AS Physics 9630, PH01 Sections 3.2.1–3.2.2. The official Q06.1, adapted Q08.1 and symmetric-support example reference PH01 June 2024; the paired mark scheme has been checked. Other tasks are self-written, with no official marks assigned. Schematics and values are constructed teaching material.

Use the [official specification](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-international-as-and-a-level-physics-specification.pdf) for scope. Solving these tasks does not certify physical practical skills or the whole mechanics unit.

[Previous: Measurements and Uncertainties](/alevel/as-physics/measurements-and-uncertainties/) · [Back to AS Physics](/alevel/as-physics/) · [Next: Straight-line Motion and Uniform Acceleration](/alevel/as-physics/straight-line-motion/). Projectiles follow in the next stage of the route.
