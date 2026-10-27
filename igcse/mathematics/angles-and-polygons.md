---
layout: subjects
title: "Angles and polygons"
mathjax: true
grade: igcse
subject: igcse-mathematics
permalink: /igcse/mathematics/angles-and-polygons/
reading_layout: true
study_page: true
toc_headings: "h2"
---

## What can a drawing tell us? {#start}

A door opens through an angle; a rectangular window has corners and parallel edges. Geometry names these features so that we can explain what must be true, even when a sketch is not to scale. You will label diagrams, choose angle reasons and describe shapes and their symmetries.

You need addition, subtraction and simple division. Keep paper, a ruler and a protractor ready. All examples and tasks are **self-written, with no official marks**.

## Name the objects before using them {#notation}

![Triangle ABC with standard side letters a opposite A, b opposite B and c opposite C; separate parallel lines p and q and a perpendicular line r with a right-angle square.](/assets/img/igcse-geometry-reasoning-notation.svg)

A **point** marks a position, such as A. A **line** continues in both directions; the **line segment** AB has endpoints A and B. A **vertex** is a corner (plural: vertices). A **plane** is a flat surface extending in all directions. On a cube, a flat face lies in a plane, two faces meet along an **edge**, and edges meet at vertices. An edge is a segment; a plane is not an edge.

$\angle ABC$ has vertex **B**, between BA and BC. In triangle ABC, side $a=BC$ is opposite angle A; $b=CA$ is opposite B; $c=AB$ is opposite C. Equal-side ticks and matching arrow marks state conditions; appearance alone does not.

Parallel lines, $p\parallel q$, stay the same distance apart and never meet in their plane. Perpendicular lines, $r\perp p$, meet at a $90^\circ$ right angle. A small square marks a right angle. A **polygon** is a closed plane shape with straight sides. A **regular polygon** has all sides equal and all interior angles equal; equal sides alone do not make a polygon regular.

<div class="lesson-check" markdown="1">

### Make the labels meaningful {#practice-notation}

**Question:** Draw triangle PQR. Mark PQ = PR, label angle PQR, and label side p opposite P. Separately draw two parallel lines l and m and a line n perpendicular to l. Add conventional marks. On a sketch of a cube, point out one vertex, one edge and one face lying in a plane.

<details markdown="1">
<summary>Hint</summary>

Read the middle letter of an angle; put the lowercase side opposite the matching uppercase vertex.

</details>

<details markdown="1">
<summary>Solution and feedback</summary>

The angle PQR is at Q; $p=QR$. Matching ticks go on PQ and PR; matching arrows go on l and m; a right-angle square goes between n and l. On the cube choose a corner, a segment where two faces meet, and a flat face. If p was placed on PQ, return to [opposite-side naming](#notation).

</details>

</div>

## Turns and straight lines {#angle-facts}

A full turn is $360^\circ$; a straight angle is $180^\circ$; a right angle is $90^\circ$. Angles around a point sum to $360^\circ$. Adjacent angles along a straight line sum to $180^\circ$. When two lines cross, **vertically opposite angles are equal**: each is supplementary to the same neighbouring angle.

An acute angle is between $0^\circ$ and $90^\circ$; an obtuse angle is between $90^\circ$ and $180^\circ$; a reflex angle is between $180^\circ$ and $360^\circ$. Use the stated rays, rather than automatically taking the smaller angle.

## A transversal meets parallel lines {#parallel}

![Parallel lines p and q cut by a transversal. At the upper intersection angles 1, 2, 3, 4 are numbered clockwise from upper left; at the lower intersection 5, 6, 7, 8 occupy the matching positions.](/assets/img/igcse-geometry-reasoning-parallel.svg)

The crossing line is a **transversal**. Corresponding angles occupy the same relative position at the two intersections, so $\angle1=\angle5$. Alternate interior angles are inside the parallels and on opposite sides of the transversal, so $\angle3=\angle5$ and $\angle4=\angle6$. Co-interior angles lie inside on the same side, so $\angle3+\angle6=180^\circ$.

These equalities require parallel lines. For two arbitrary lines cut by another, the matching positions still exist but need not give equal angles. In an answer write “corresponding angles, parallel lines” or the relevant precise reason, rather than a letter-shape nickname.

## Triangles have both side and angle names {#triangles}

A triangle's interior angles sum to $180^\circ$. To see why, draw a line through one vertex parallel to the opposite side. Alternate angles copy the other two angles beside the vertex angle; all three fill a straight angle. A quadrilateral splits along a diagonal into two triangles, so its interior angles sum to $360^\circ$.

An **isosceles** triangle has at least two equal sides; its base angles opposite those sides are equal. An **equilateral** triangle has all sides equal and all angles $60^\circ$. A **scalene** triangle has no equal sides. A **right-angled**, **acute-angled** or **obtuse-angled** triangle is named from its angles: one right angle, all acute, or one obtuse. These classifications can overlap: a right-angled triangle may also be isosceles.

<div class="worked-example" markdown="1">

### A complete chain of reasons {#example-chain}

**Question:** Triangle ABC has AB = AC and angle BAC = 44°. Through C, draw CD parallel to BA, with ray CD in the direction from B to A. Find angle ABC and the obtuse angle BCD.

AB = AC identifies equal base angles at B and C, rather than at A. The remaining angle total is $180^\circ-44^\circ=136^\circ$, so:

$$\angle ABC=\angle BCA=136^\circ/2=68^\circ.$$

Ray CB points opposite the base direction BC. With BA parallel to CD, the co-interior angles at B and C sum to a straight angle:

$$\angle BCD=180^\circ-68^\circ=112^\circ.$$

Check: $44^\circ+68^\circ+68^\circ=180^\circ$, and the requested angle is obtuse. A sketch may help choose the angle, but the equal-side and parallel conditions justify it.

</div>

## Why the number of sides matters {#polygons}

A convex polygon with n sides can be divided from one vertex into $n-2$ triangles without overlap. Therefore its interior angle sum is $(n-2)180^\circ$. Walking once around its boundary, turning in the same direction at every corner, makes a full turn: the exterior angles sum to $360^\circ$. Each exterior angle here is supplementary to its interior angle.

For a regular n-gon the equal exterior angles are $360^\circ/n$ each; the interior angle is $180^\circ-360^\circ/n$. Joining the centre to every vertex divides a full turn into n equal central angles, also $360^\circ/n$. For a non-regular polygon, the sums still apply to convex polygons, but division by n gives an average, not each angle.

<div class="worked-example" markdown="1">

### Work back to the shape {#example-polygon}

**Question:** A regular polygon has an interior angle of 150°. Find its number of sides and its angle at the centre.

The exterior angle is easier to connect to a whole turn, so find it first:

$$180^\circ-150^\circ=30^\circ,\qquad n=360^\circ/30^\circ=12.$$

The centre angle is $360^\circ/12=30^\circ$. Check with the interior sum: $(12-2)180^\circ=1800^\circ$, and $12\times150^\circ=1800^\circ$. Twelve sides is a whole number at least three, so a regular polygon is possible.

</div>

## Properties, not appearances {#quadrilaterals}

A **parallelogram** has two pairs of opposite parallel sides. Its opposite sides and angles are equal; adjacent angles are supplementary; diagonals bisect each other. A **rectangle** is a parallelogram with four right angles; its diagonals are equal. A **rhombus** is a parallelogram with all four sides equal; its diagonals are perpendicular and bisect the opposite angles. A **square** is both a rectangle and a rhombus, so it has all these properties.

A **trapezium** has a pair of opposite parallel sides; common school classification reserves the name for exactly one pair. State the convention if a boundary case matters. An isosceles trapezium has equal non-parallel sides and equal angles at each base. A **kite** has two pairs of adjacent equal sides; for the ordinary convex kite with unequal pairs, one diagonal is a perpendicular bisector of the other, and one pair of opposite angles is equal. Do not assume both diagonals bisect each other in every kite.

<div class="worked-example" markdown="1">

### Whole diagonal or half? {#example-diagonals}

**Question:** The diagonals of rectangle ABCD meet at O and AC = 14 cm. Find BO with a reason.

First identify the shape. A rectangle is a parallelogram, so its diagonals bisect each other; its diagonals are also equal. Thus $BD=AC=14\text{ cm}$, and then $BO=BD/2=7\text{ cm}$. Draw both diagonals and mark AO = OC and BO = OD. Bisecting means each diagonal is divided into equal halves; it does not by itself make all four pieces equal. Here that extra equality comes from the rectangle's equal diagonals. Do not add a right-angle mark: a non-square rectangle's diagonals are not perpendicular.

</div>

## Fold it, then turn it {#symmetry}

A line of **reflection symmetry** folds the entire shape exactly onto itself. **Rotational symmetry of order k** means k matching positions in a full turn, including the starting position at $360^\circ$; the smallest positive matching turn is $360^\circ/k$.

A non-square rectangle has two reflection axes (through opposite side midpoints) and rotational order 2. Its diagonals are not reflection axes. A non-square rhombus has its two diagonals as reflection axes and rotational order 2. A square has four reflection axes and order 4. A generic parallelogram has no reflection axis and order 2; a generic kite has one axis and order 1. A generic trapezium has no axis and order 1, while an isosceles trapezium has one axis. A regular n-gon has n axes and rotational order n. A circle has infinitely many axes and matches after any rotation about its centre.

## Draw, decide and justify {#practice}

<div class="lesson-check" markdown="1">

### Use the numbered diagram {#practice-angles}

**Question:** In the parallel-line diagram, angle 2 is 63°. Find angles 4, 6, 3, 5 and 8, giving a reason for each. Separately, three angles around a point are 90°, 145° and x. Find x.

<details markdown="1">
<summary>Hint</summary>

Start with the two crossing lines, then move to the other intersection.

</details>

<details markdown="1">
<summary>Solution and feedback</summary>

$\angle4=63^\circ$ (vertically opposite), $\angle6=63^\circ$ (corresponding, p parallel q), $\angle3=117^\circ$ (straight line with 2), $\angle5=117^\circ$ (alternate interior with 3), $\angle8=63^\circ$ (vertically opposite 6). Separately, $x=360^\circ-90^\circ-145^\circ=125^\circ$. If all angles became 63°, return to [straight angles](#angle-facts) and [parallel positions](#parallel).

</details>

</div>

<div class="lesson-check" markdown="1">

### Keep both possibilities {#practice-triangles}

**Question:** An isosceles triangle has an angle of 40°. Draw and label all possible angle triples. Classify each by angles. Also draw one right-angled isosceles triangle and one obtuse scalene triangle, labelling valid angles.

<details markdown="1">
<summary>Hint</summary>

The known angle might be the vertex angle or one of the equal base angles.

</details>

<details markdown="1">
<summary>Solution and feedback</summary>

The triples are $(40^\circ,70^\circ,70^\circ)$ (acute) and $(40^\circ,40^\circ,100^\circ)$ (obtuse). A right isosceles example is $(90^\circ,45^\circ,45^\circ)$; an obtuse scalene example is $(110^\circ,40^\circ,30^\circ)$. Each sums to $180^\circ$; the scalene example has no equal angles and therefore no equal sides. If only one isosceles answer appears, revisit [side and angle classifications](#triangles).

</details>

</div>

<div class="lesson-check" markdown="1">

### Identify an impossible claim {#practice-polygons}

**Question:** A regular polygon has exterior angle 24°. Find its number of sides, interior angle, centre angle and interior angle sum. A second student claims a regular polygon has exterior angle 50°. Decide whether that is possible.

<details markdown="1">
<summary>Hint</summary>

One full turn must contain a whole number of equal exterior turns.

</details>

<details markdown="1">
<summary>Solution and feedback</summary>

$n=360^\circ/24^\circ=15$; interior angle $156^\circ$; centre angle $24^\circ$; sum $(15-2)180^\circ=2340^\circ$. The second claim is impossible because $360/50=7.2$ is not an integer. Rounding the number of sides changes the angle, so return to [whole turns](#polygons) if you rounded to 7.

</details>

</div>

<div class="lesson-check" markdown="1">

### Draw counterexamples and symmetries {#practice-shapes}

**Question:** Draw a non-square rectangle, a non-square rhombus, a square, a generic parallelogram, a generic kite and a trapezium with no reflection symmetry. Mark defining equal/parallel sides. Draw every reflection axis and state each rotational order. Is every rhombus a square? Give a counterexample.

<details markdown="1">
<summary>Hint</summary>

Test a fold of the whole outline, not just a pair of equal sides.

</details>

<details markdown="1">
<summary>Solution and feedback</summary>

In the order listed, reflection-axis counts are 2, 2, 4, 0, 1, 0; rotation orders are 2, 2, 4, 2, 1, 1. Draw a rhombus with angles 60°, 120°, 60°, 120°: all sides may be equal without right angles, so it is not a square. For a generic kite, the axis joins the vertices where each equal pair meets. Revisit [shape conditions](#quadrilaterals) and [folds and turns](#symmetry) if a rectangle's diagonal was called an axis.

</details>

</div>

<div class="lesson-check" markdown="1">

### Use the shape's conditions {#practice-quadrilaterals}

**Question:** ABCD is a parallelogram in that order, and angle A = 68°. Find the other three angles. A convex kite PQRS has PQ = PS and RQ = RS, with angles P = 84° and R = 116°. Find angles Q and S, justifying which are equal.

<details markdown="1">
<summary>Hint</summary>

Use parallel sides for the parallelogram; identify the equal opposite angles of the kite.

</details>

<details markdown="1">
<summary>Solution and feedback</summary>

In the parallelogram, $\angle B=\angle D=180^\circ-68^\circ=112^\circ$ (adjacent/co-interior angles are supplementary), and $\angle C=68^\circ$ (opposite angles equal). In the kite, Q and S are opposite the unequal-side junctions, so $\angle Q=\angle S=(360^\circ-84^\circ-116^\circ)/2=80^\circ$. The quadrilateral sum checks both results. If you made P = R, revisit [which kite angles match](#quadrilaterals).

</details>

</div>

<div class="lesson-check" markdown="1">

### Use the diagonals as evidence {#practice-diagonals}

**Question:** On four separate sketches draw and label the following. (i) ABCD is a parallelogram; its diagonals meet at O, with AO = 6 cm and BO = 4 cm. Find AC and BD. Must AC equal BD? (ii) PQRS is a rectangle; its diagonals meet at O and PR = 18 cm. Find QO. Must the diagonals be perpendicular? (iii) KLMN is a rhombus; its diagonals meet at X and angle LKN = 76°. Find angles LKM and KXN. (iv) EFGH is a convex kite with EF = EH and GF = GH; EG and FH meet at J, with EJ = 7 cm, JG = 3 cm and FJ = 4 cm. Find JH and angle EJF. Does FH bisect EG? Mark each conclusion and justify it.

<details markdown="1">
<summary>Hint</summary>

Identify each shape and distinguish whole diagonals from halves. Use the diagonal through K in the rhombus and the line EG joining the equal-side vertices in the kite.

</details>

<details markdown="1">
<summary>Solution and feedback</summary>

(i) The diagonals bisect each other, so $AC=2(6)=12\text{ cm}$ and $BD=2(4)=8\text{ cm}$. Their lengths are already unequal here; mark AO = OC and BO = OD, without marking all four pieces equal. (ii) A rectangle gives $QS=PR=18\text{ cm}$, and bisection gives $QO=9\text{ cm}$. Perpendicularity is not guaranteed: a 4 by 3 rectangle is a counterexample. (iii) KM bisects angle K, so $\angle LKM=76^\circ/2=38^\circ$; rhombus diagonals are perpendicular, so $\angle KXN=90^\circ$. Mark the two 38° angles and the right angle at X. (iv) EG perpendicularly bisects FH, so $JH=FJ=4\text{ cm}$ and $\angle EJF=90^\circ$. But EJ = 7 and JG = 3 differ, so FH does not bisect EG. Show J nearer G on EG, retaining equal halves of FH. If you confused bisection, equality and perpendicularity, revisit [the whole-or-half example](#example-diagonals), then try [new diagonal data](#retry-diagonals).

</details>

</div>

## Repair the reason, then try again {#retry}

<div class="lesson-check" markdown="1">

### A new label order {#retry-notation}

**Question:** Draw triangle XYZ with XY perpendicular to YZ. Mark the right angle, label angle YXZ and side z opposite Z. Explain whether the triangle is necessarily regular.

<details markdown="1">
<summary>Hint</summary>

A right angle fixes one angle, not all sides.

</details>

<details markdown="1">
<summary>Solution and feedback</summary>

The square is at Y, angle YXZ is at X, and $z=XY$. The triangle is not regular: a regular triangle has three $60^\circ$ angles and cannot have a right angle. Return to [Name the objects before using them](#notation) if the angle vertex or opposite side was misplaced.

</details>

</div>

<div class="lesson-check" markdown="1">

### Remove a condition {#retry-angles}

**Question:** Two lines cross with one angle 128°. Find the other three angles. Can you transfer those values to a second intersection on an unmarked line? Explain. Then find the base angles of an isosceles triangle whose vertex angle is 128°. At a separate point, angles 110°, 135° and y make a full turn; find y.

<details markdown="1">
<summary>Hint</summary>

Separate facts valid at one crossing from those needing parallel lines.

</details>

<details markdown="1">
<summary>Solution and feedback</summary>

The opposite angle is $128^\circ$; the two adjacent angles are each $52^\circ$. No corresponding-angle equality is guaranteed at another intersection without parallelism. The isosceles base angles are $(180^\circ-128^\circ)/2=26^\circ$ each. The separate full-turn answer is $y=360^\circ-110^\circ-135^\circ=115^\circ$. Revisit [A transversal meets parallel lines](#parallel) if you transferred values without a parallel condition, or [Triangles have both side and angle names](#triangles) if you forgot to share the remaining total.

</details>

</div>

<div class="lesson-check" markdown="1">

### Start with the total {#retry-polygons}

**Question:** A convex polygon has interior angle sum 1260°. Find n. If it is regular, find each interior, exterior and centre angle.

<details markdown="1">
<summary>Hint</summary>

Recover the number of triangles before the number of sides.

</details>

<details markdown="1">
<summary>Solution and feedback</summary>

$n-2=1260/180=7$, so $n=9$. Each interior angle is $1260^\circ/9=140^\circ$; each exterior and centre angle is $40^\circ$. If n was 7, revisit [the fan of triangles](#polygons).

</details>

</div>

<div class="lesson-check" markdown="1">

### Work from the symmetry {#retry-shapes}

**Question:** Draw a quadrilateral with exactly one reflection axis and rotational order 1, and another with no reflection axis and rotational order 2. Explain why a square cannot answer either request.

<details markdown="1">
<summary>Hint</summary>

Use the generic shapes rather than special cases.

</details>

<details markdown="1">
<summary>Solution and feedback</summary>

A generic kite or a non-rectangular isosceles trapezium answers the first; a generic oblique parallelogram with unequal adjacent sides answers the second. Mark the first axis and demonstrate the second's half-turn. A square has four reflection axes and order 4. Revisit [Fold it, then turn it](#symmetry) if you counted the starting position as an extra fifth match.

</details>

</div>

<div class="lesson-check" markdown="1">

### Change the given angle {#retry-quadrilaterals}

**Question:** A rhombus ABCD has angle B = 124°. Find A, C and D. An isosceles trapezium PQRS has PQ parallel SR, equal legs PS and QR, and angle P = 72°. Find Q, R and S.

<details markdown="1">
<summary>Hint</summary>

Which parallelogram facts are inherited by a rhombus? Which trapezium angles are on the same base?

</details>

<details markdown="1">
<summary>Solution and feedback</summary>

For the rhombus, $\angle A=\angle C=56^\circ$ and $\angle D=124^\circ$ because opposite angles are equal and adjacent ones supplementary. For the trapezium, $\angle Q=72^\circ$ (same-base angles equal), and $\angle R=\angle S=108^\circ$ (co-interior angles on the parallel bases). Return to [quadrilateral properties](#quadrilaterals) if you assigned every angle of the rhombus 90°.

</details>

</div>

<div class="lesson-check" markdown="1">

### Use a different known angle {#retry-triangles}

**Question:** An isosceles triangle has an angle of 64°. Draw every possible angle triple and classify each triangle by angles. Draw a separate scalene acute triangle and a right-angled isosceles triangle, labelling their angles.

<details markdown="1">
<summary>Hint</summary>

Try the 64° angle once at the vertex and once at a base.

</details>

<details markdown="1">
<summary>Solution and feedback</summary>

If 64° is the vertex angle, the others are $(180^\circ-64^\circ)/2=58^\circ$ each. If it is a base angle, the third is $180^\circ-2(64^\circ)=52^\circ$. Both triangles are acute. A scalene acute example is $(50^\circ,60^\circ,70^\circ)$; a right isosceles example is $(90^\circ,45^\circ,45^\circ)$. Check every sum and the equal-angle pattern; return to [triangle classifications](#triangles) if a right triangle was called acute.

</details>

</div>

<div class="lesson-check" markdown="1">

### Change the given information {#retry-diagonals}

**Question:** Draw new labelled sketches. (i) The diagonals of parallelogram ABCD meet at O, with AO = (2x - 1) cm, OC = (x + 4) cm and BO = 6 cm. Find x, AC and BD. (ii) In rectangle PQRS, the diagonals meet at O and QO = 8 cm. Find PR. A student says equal diagonals make this rectangle a square. Explain whether the conclusion follows, using a non-square example. (iii) In rhombus KLMN, diagonal KM makes angle LKM = 31°. Find angle LKN and the angle between the diagonals. (iv) In convex kite EFGH with EF = EH and GF = GH, EG and FH meet at J, EJ = 6 cm, JG = 2 cm and FJ = 3 cm. Find FH and EG, and decide which diagonal bisects the other. Give reasons rather than trusting the sketches.

<details markdown="1">
<summary>Hint</summary>

Start with an equation for equal half-diagonals. Then use the properties guaranteed by each shape; appearance is not a condition.

</details>

<details markdown="1">
<summary>Solution and feedback</summary>

(i) $2x-1=x+4$, so $x=5$; each half of AC is 9 cm, giving $AC=18\text{ cm}$, while $BD=12\text{ cm}$. Mark 9,9 on one diagonal and 6,6 on the other. (ii) $PR=QS=2(8)=16\text{ cm}$. A square is not forced: a 9.6 cm by 12.8 cm rectangle has unequal adjacent sides but diagonals of length 16 cm. (iii) KM bisects angle K, so $\angle LKN=2(31^\circ)=62^\circ$, and the diagonals meet at $90^\circ$. (iv) EG perpendicularly bisects FH, so $FH=2(3)=6\text{ cm}$; $EG=6+2=8\text{ cm}$. EJ and JG differ, so FH does not bisect EG. Do not reverse the equality marks. If the properties are still mixed up, return to [quadrilateral conditions](#quadrilaterals) and check that each mark on your sketch has a reason.

</details>

</div>

## Keep the reasons when shapes change {#next-step}

Next use [congruence and similarity](/igcse/mathematics/congruence-and-similarity/#start). After studying [data](/igcse/mathematics/mixed-review/#data-review), return to [Remove a condition](#retry-angles) without reopening the example; then try [mixed geometry](/igcse/mathematics/mixed-review/#geometry-review). Record which condition or reason you missed, not just the wrong number.

## Scope and references {#sources}

<details markdown="1">
<summary>OxfordAQA sources and task identity</summary>

9260 v5.1 G1–G6: [specification PDF p.18 (printed p.19)](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-gcse-mathematics-specification.pdf#page=18). Design reading: Specimen 2018 1C Q10, [QP p.10](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9260-92601C-international-gcse-mathematics-specimen-paper-2016-v1.pdf#page=10), [MS PDF p.6](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9260-92601C-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=6); 2C Q20, [QP p.19](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92602C-international-gcse-mathematics-specimen-paper-2016-v1.pdf#page=19), [MS PDF p.8](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92602C-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=8). All page tasks are original teaching tasks, not official questions or marking points. The complete angle chains reflect the requirement to show reasoning. Diagrams state conditions; do not measure a schematic for an exact answer.

</details>
