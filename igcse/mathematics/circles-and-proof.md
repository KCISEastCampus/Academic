---
layout: subjects
title: "Circles and proof"
mathjax: true
grade: igcse
subject: igcse-mathematics
permalink: /igcse/mathematics/circles-and-proof/
reading_layout: true
study_page: true
toc_headings: "h2"
---

## Which facts come from the circle? {#start}

A circular lid has a centre and a rim. A straight line across it need not pass through the centre. First name what is actually given; then decide which circle fact applies. Start with circle vocabulary, then use the angle theorems to calculate angles and build complete proofs.

You need [triangle angles](/igcse/mathematics/angles-and-polygons/#triangles) and [triangle congruence](/igcse/mathematics/congruence-and-similarity/#congruence). Work on paper before opening help. All examples and tasks are **self-written, with no official marks**.

## Lines, arcs and regions {#circle-language}

![Circle with centre O, diameter AB, radius OC, chord DE, a shaded segment and a shaded sector; line t touches at B.](/assets/img/igcse-geometry-reasoning-circle-language.svg)

A **radius** joins the centre to the circumference (the boundary); all radii of one circle are equal. A **chord** joins two points on the circumference. A **diameter** is a chord through the centre, with length twice the radius. An **arc** is part of the circumference. A **sector** is bounded by two radii and an arc; a **segment** by a chord and an arc. A **tangent** touches the circle at just one point. A line crossing the circle twice is not a tangent.

An angle at $C$ formed by $CA$ and $CB$ is $\angle ACB$: the middle letter is its vertex. It **subtends** the arc $AB$ which does not contain $C$. There are two arcs between $A$ and $B$; choosing the correct one matters.

<div class="lesson-check" markdown="1">

### Draw and name {#practice-labels}

**Question:** Draw a circle of radius 3 cm with centre O. Draw a diameter AB, a chord CD that is not a diameter, and a radius OE. Shade one sector and use hatching for one segment. Label an arc and a tangent at A. Explain the difference between the shaded regions.

<details markdown="1">
<summary>Hint</summary>

Use the boundaries of each region to decide its name.

</details>

<details markdown="1">
<summary>Solution and feedback</summary>

The diameter is 6 cm and passes through O. The other chord has both ends on the circle but does not pass through O. The sector has two straight radius boundaries; the segment has one straight chord boundary. The tangent touches only at A. If your segment has two radii as boundaries, revisit [the definitions](#circle-language).

</details>

</div>

## Follow the same arc {#angle-theorems}

![Three circles from top to bottom: a centre and circumference angle on chord AB; a diameter with a third point; a cyclic quadrilateral ABCD. No unknown answers are labelled.](/assets/img/igcse-geometry-reasoning-circle-angles.svg)

The **angle at the centre is twice the angle at the circumference** on the same arc. The centre angle must follow the arc not containing the circumference vertex; it may be reflex. If the circumference angle is $110^\circ$, its centre angle is $220^\circ$, not the smaller $140^\circ$ angle.

A diameter subtends $180^\circ$ at the centre, so the **angle in a semicircle is $90^\circ$**. Two angles standing on the same chord, with vertices in the **same segment** (same side of the chord), subtend the same arc, so they are equal. With vertices on opposite sides, the angles generally are not equal.

A quadrilateral is **cyclic** when all four vertices lie on one circle. Opposite angles add to $180^\circ$: the two arcs they subtend make a complete $360^\circ$ turn at the centre, and each circumference angle is half its arc's centre angle. This gives a reason, rather than a rule based on appearance.

<div class="worked-example" markdown="1">

### A complete angle chain {#example-circle}

**Question:** A, B, C and D lie in that order on a circle. AC is a diameter and angle BAC is 34°. Find angle ABC, angle BCA and angle BDC. Give reasons.

Start with the strongest condition: AC is a diameter, not merely a long chord.

$$\angle ABC=90^\circ,\qquad \angle BCA=180^\circ-90^\circ-34^\circ=56^\circ.$$

The first reason is the angle in a semicircle; the second is the triangle angle sum. A and D are on the same side of chord BC, so the angles they subtend on BC are in the same segment:

$$\angle BDC=\angle BAC=34^\circ.$$

Check: the triangle angles sum to $180^\circ$. The equal angles use chord BC, not diameter AC.

</div>

## Tangents and chords {#tangents-chords}

The radius to a point of contact is **perpendicular to the tangent**. Tangents from the **same external point** have equal lengths. A perpendicular from the centre to a chord **bisects the chord**. These facts depend on a centre, a genuine tangent or a perpendicular; a nearly right angle on a sketch is not enough.

The **alternate segment theorem** says that the angle between a tangent and a chord equals the angle subtended by that chord in the alternate segment. Choose a point on the circle on the opposite side of the chord from the tangent ray making the chosen angle. The two tangent rays make supplementary angles with the chord, so the choice of ray matters.

![Upper panel: circle centre O with tangents PA and PB from external P. Lower panel: tangent ray AT, chord AB and circumference point C on the opposite side of AB from T.](/assets/img/igcse-geometry-reasoning-circle-tangent.svg)

<div class="worked-example" markdown="1">

### A complete proof: equal tangents {#example-proof}

**Question:** PA and PB are tangents from an external point P to a circle with centre O. A and B are distinct points of contact. Prove that PA = PB.

There is no given length to calculate. Join OA, OB and OP to make two triangles with known equal lengths.

$$\angle OAP=\angle OBP=90^\circ.$$

Each radius is perpendicular to its tangent at the point of contact. Also $OA=OB$ (radii of the same circle), and $OP=OP$ (common side). OP is the hypotenuse in each right-angled triangle. Therefore:

$$\triangle OAP\cong\triangle OBP\quad\text{(RHS)},\qquad PA=PB.$$

The final equality follows from corresponding sides of congruent triangles. We did not assume the tangent lengths in order to prove them. The conclusion concerns the segments from P to the contact points, not whole infinite lines.

</div>

<div class="worked-example" markdown="1">

### Choose the tangent ray {#example-tangents}

**Question:** In the lower tangent diagram, angle TAB is 58°. C is on the circle on the opposite side of AB from T. Find angle ACB. Explain why choosing the opposite tangent ray would change the angle.

The tangent and chord meet at A; the circumference angle must stand on chord AB in the alternate segment.

$$\angle ACB=\angle TAB=58^\circ.$$

This is the alternate segment theorem. Reversing AT makes the angle $180^\circ-58^\circ=122^\circ$, which corresponds to a circumference vertex in the other segment. Copying any angle next to a tangent without choosing a ray can select the supplementary answer.

</div>

## Try without a named method {#practice}

<div class="lesson-check" markdown="1">

### Connect the angles {#practice-angles}

**Question:** A, B, C and D lie in that order on a circle with centre O. The minor arc AB subtends angle ACB = 38°. Find the minor angle AOB, angle ADB, and angle BCD if angle BAD = 112°. Sketch and give a reason for each answer.

<details markdown="1">
<summary>Hint</summary>

Identify the arc for each angle; then look for opposite angles.

</details>

<details markdown="1">
<summary>Solution and feedback</summary>

$\angle AOB=76^\circ$ (centre twice circumference on the same minor arc AB); $\angle ADB=38^\circ$ (same segment on chord AB). $\angle BCD=180^\circ-112^\circ=68^\circ$ (opposite angles in a cyclic quadrilateral). A number without its matching chord/arc or cyclic condition does not explain the result. Return to [the angle facts](#angle-theorems) if you used an angle simply because it looked nearby.

For an error in choosing same-segment angles, revisit [the same-chord, same-side conditions](#angle-theorems), then try [a new vertex arrangement](#retry-same-segment).

</details>

</div>

<div class="lesson-check" markdown="1">

### From angle to proof {#practice-tangents}

**Question:** PA and PB touch a circle at A and B. O is the centre, and angle APB = 64°. Find the non-reflex angle AOB and explain why triangle PAB is isosceles.

<details markdown="1">
<summary>Hint</summary>

Draw the two radii. What are the angles at the contact points?

</details>

<details markdown="1">
<summary>Solution and feedback</summary>

The angles at A and B in quadrilateral OAPB are right angles, so $\angle AOB=360^\circ-90^\circ-90^\circ-64^\circ=116^\circ$. PA = PB because they are tangents from the same external point P, so triangle PAB is isosceles. Its base angles are $(180^\circ-64^\circ)/2=58^\circ$, an additional check. Equal radii alone do not say PA = PB; use the [tangent proof](#example-proof).

</details>

</div>

<div class="lesson-check" markdown="1">

### Use the whole chord {#practice-chord}

**Question:** A chord AB has length 18 cm. OM is perpendicular to AB, where O is the centre and M lies on AB. Find AM and MB with a reason. Would an arbitrary perpendicular to AB bisect it?

<details markdown="1">
<summary>Hint</summary>

Which point must the perpendicular pass through?

</details>

<details markdown="1">
<summary>Solution and feedback</summary>

AM = MB = 9 cm: the perpendicular from the centre to a chord bisects it. An arbitrary perpendicular need not pass through the midpoint. If you wrote 18 cm for AM, you used the whole chord rather than half. Return to [tangents and chords](#tangents-chords).

</details>

</div>

<div class="lesson-check" markdown="1">

### Which angle matches? {#practice-alternate}

**Question:** Use the lower tangent diagram. Angle ACB is 47°. Find angle TAB and the angle between AB and the ray opposite AT. Give reasons.

<details markdown="1">
<summary>Hint</summary>

Choose the ray before using an angle theorem.

</details>

<details markdown="1">
<summary>Solution and feedback</summary>

$\angle TAB=47^\circ$ by the alternate segment theorem, since C and T lie on opposite sides of AB. The other tangent ray gives $180^\circ-47^\circ=133^\circ$ because angles on a straight line sum to $180^\circ$. If both answers were 47°, return to [the ray choice](#example-tangents).

</details>

</div>

<div class="lesson-check" markdown="1">

### Write a complete proof {#practice-proof}

**Question:** AB is a chord of a circle with centre O. O is not on AB. M lies on AB and OM is perpendicular to AB. Prove that AM = MB. Do not use the chord-bisector theorem as your reason.

<details markdown="1">
<summary>Hint</summary>

Can you form two right-angled triangles whose hypotenuses you know?

</details>

<details markdown="1">
<summary>Solution and feedback</summary>

Join OA and OB. $\angle OMA=\angle OMB=90^\circ$ since OM is perpendicular to AB. $OA=OB$ (radii), and $OM=OM$ (common side). OA and OB are the hypotenuses, so $\triangle OMA\cong\triangle OMB$ by RHS. Thus $AM=MB$ as corresponding sides. Every equality has a reason; quoting the result to be proved would be circular. If you omitted the equal side or right angles, revisit [the complete proof structure](#example-proof).

</details>

</div>

<div class="lesson-check" markdown="1">

### Check the diameter condition {#practice-semicircle}

**Question:** EF is a diameter of a circle. G is another point on the circle, and angle EFG = 27°. Find angle EGF and angle GEF, giving reasons. Would the same reasoning work if EF were only known to be a chord?

<details markdown="1">
<summary>Hint</summary>

The centre must lie on a diameter, not on every chord.

</details>

<details markdown="1">
<summary>Solution and feedback</summary>

$\angle EGF=90^\circ$ because EF is a diameter (angle in a semicircle). Then $\angle GEF=180^\circ-90^\circ-27^\circ=63^\circ$ by the triangle angle sum. An arbitrary chord would not guarantee the 90° angle, so the same calculation would be unjustified. Return to [diameters and arcs](#angle-theorems) if you used the theorem without its diameter condition.

</details>

</div>

## Close the old answer and retry {#retry}

<div class="lesson-check" markdown="1">

### Change the boundary {#retry-labels}

**Question:** Draw two regions with the same arc PQ: one bounded by chord PQ and one by radii OP and OQ. Name both and explain why PQ is not necessarily a diameter.

<details markdown="1">
<summary>Hint</summary>

Does PQ pass through O?

</details>

<details markdown="1">
<summary>Solution and feedback</summary>

The first region is a segment, the second a sector. PQ is a diameter only if it passes through O. Revisit [Lines, arcs and regions](#circle-language) if you named by area rather than boundaries.

</details>

</div>

<div class="lesson-check" markdown="1">

### Use a different arc {#retry-angles}

**Question:** An angle at the circumference is 104°. Find the centre angle on the arc it subtends. A cyclic quadrilateral has an angle of 104°; find its opposite angle. Explain why these are different operations.

<details markdown="1">
<summary>Hint</summary>

One asks for the same arc; the other asks for opposite angles.

</details>

<details markdown="1">
<summary>Solution and feedback</summary>

The centre angle is $2\times104^\circ=208^\circ$, a reflex angle. The opposite cyclic angle is $180^\circ-104^\circ=76^\circ$. The first doubles an angle on the same arc; the second uses supplementary opposite angles. Return to [arc conditions](#angle-theorems) if you obtained 52° or 152°.

</details>

</div>

<div class="lesson-check" markdown="1">

### Move the vertex, then choose the angle {#retry-same-segment}

**Question:** P, Q, T, R and S lie in that order on a circle, and angle QPR = 42°. Draw a possible diagram with chord QR. Find angles QSR and QTR, giving a reason for each. Explain whether every angle with endpoints Q and R must equal angle QPR.

<details markdown="1">
<summary>Hint</summary>

Draw chord QR first. Compare which side contains each vertex and which arc each angle intercepts.

</details>

<details markdown="1">
<summary>Solution and feedback</summary>

$\angle QSR=\angle QPR=42^\circ$ because P and S are on the same side of chord QR and intercept the same arc QTR, which contains neither vertex. T lies on the other side of QR and intercepts the other arc, through P and S. In cyclic quadrilateral QTRP, $\angle QTR=180^\circ-42^\circ=138^\circ$. Mark P and S on one side, T on the other, and identify both arcs on your sketch. Common endpoints alone do not make every angle equal: check the vertex side. If you gave three 42° angles, return to [the same-segment conditions](#angle-theorems), then redraw with the answer closed.

</details>

</div>

<div class="lesson-check" markdown="1">

### Work backwards {#retry-tangents}

**Question:** PA and PB are tangents at A and B to a circle with centre O. The non-reflex angle AOB is 138°. Find angle APB and both base angles of triangle PAB.

<details markdown="1">
<summary>Hint</summary>

Use the right angles before the isosceles triangle.

</details>

<details markdown="1">
<summary>Solution and feedback</summary>

$\angle APB=360^\circ-90^\circ-90^\circ-138^\circ=42^\circ$. The tangent lengths are equal, so the base angles are $(180^\circ-42^\circ)/2=69^\circ$. Return to [tangent conditions](#tangents-chords) if you treated OA and PA as equal.

</details>

</div>

<div class="lesson-check" markdown="1">

### Restore the whole length {#retry-chord}

**Question:** The perpendicular from the centre O meets chord CD at M, and CM = 7.5 cm. Find CD and state the essential condition.

<details markdown="1">
<summary>Hint</summary>

What guarantees that M is the midpoint?

</details>

<details markdown="1">
<summary>Solution and feedback</summary>

CD = 15 cm because the perpendicular comes from the centre and therefore CM = MD. Perpendicularity alone is insufficient; return to [Use the whole chord](#practice-chord).

</details>

</div>

<div class="lesson-check" markdown="1">

### Choose the supplement {#retry-alternate}

**Question:** In the tangent diagram, the angle between AB and the ray opposite AT is 119°. Find angle ACB.

<details markdown="1">
<summary>Hint</summary>

First recover angle TAB.

</details>

<details markdown="1">
<summary>Solution and feedback</summary>

$\angle TAB=180^\circ-119^\circ=61^\circ$, so $\angle ACB=61^\circ$ by the alternate segment theorem. The 119° angle uses the other ray. Revisit [Choose the tangent ray](#example-tangents) if you copied 119°.

</details>

</div>

<div class="lesson-check" markdown="1">

### A different conclusion {#retry-proof}

**Question:** PA and PB are distinct tangents from external P to a circle with centre O. Prove that OP bisects angle APB, without assuming that it is a line of symmetry.

<details markdown="1">
<summary>Hint</summary>

What corresponding angles follow after proving congruence?

</details>

<details markdown="1">
<summary>Solution and feedback</summary>

Join OA and OB. Radii give $OA=OB$, OP is common, and $\angle OAP=\angle OBP=90^\circ$ by the tangent-radius theorem. Thus $\triangle OAP\cong\triangle OBP$ by RHS, so $\angle APO=\angle OPB$. OP therefore bisects angle APB. A drawing that looks symmetric is not the proof; revisit [A complete proof: equal tangents](#example-proof) for the required conditions.

</details>

</div>

<div class="lesson-check" markdown="1">

### Recognise a new diameter {#retry-semicircle}

**Question:** JK is a diameter. L is a third point on the circle and angle LJK = 41°. Find the other two triangle angles and explain why it is important that L is on the circumference.

<details markdown="1">
<summary>Hint</summary>

Where is the angle standing on JK?

</details>

<details markdown="1">
<summary>Solution and feedback</summary>

$\angle JLK=90^\circ$ (angle in a semicircle), and $\angle JKL=180^\circ-90^\circ-41^\circ=49^\circ$ (triangle sum). L must lie on the circle for the semicircle theorem to apply; a point merely inside the circle need not form a right angle. Return to [the diameter task](#practice-semicircle) if you used the theorem for an interior point.

</details>

</div>

## Use the ideas later {#next-step}

Continue to [constructions, loci and bearings](/igcse/mathematics/constructions-loci-and-bearings/#start). After studying a different branch, return to [A different conclusion](#retry-proof) with all answers closed and then try [mixed geometry](/igcse/mathematics/mixed-review/#geometry-review). If the proof fails, return to [A complete proof: equal tangents](#example-proof); if the angle choice fails, return to [Follow the same arc](#angle-theorems).

## Scope and references {#sources}

<details markdown="1">
<summary>OxfordAQA sources and task identity</summary>

OxfordAQA 9260 v5.1, G8–G9: [specification PDF p.19 (printed p.20)](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-gcse-mathematics-specification.pdf#page=19). Read for task design: Specimen 2018 1E Q19(a)(b), [QP PDF pp.18–19](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92601E-international-gcse-mathematics-specimen-paper-2016-v1.pdf#page=18), [MS PDF p.10](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92601E-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=10). These tasks are newly written, not reproductions or official mark schemes. The file-name year 2016 is not the session. Diagrams are teaching constructions, not measurements.

</details>
