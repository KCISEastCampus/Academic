---
layout: subjects
title: "Constructions, loci and bearings"
mathjax: true
grade: igcse
subject: igcse-mathematics
permalink: /igcse/mathematics/constructions-loci-and-bearings/
reading_layout: true
study_page: true
toc_headings: "h2"
---

## Make a position satisfy the conditions {#start}

Where should a path cross a river at the shortest distance? Which points are equally far from two gates? A drawing becomes useful when it represents the conditions, not just a plausible picture. You will construct with a straightedge and compasses, draw sets of possible positions, and measure a scaled route.

You need [parallel, perpendicular and angle language](/igcse/mathematics/angles-and-polygons/#notation) and [scale factors](/igcse/mathematics/congruence-and-similarity/#matching). Prepare paper, a ruler, compasses and a protractor. All tasks and diagrams are **self-written, with no official marks**.

## Why the compass arcs matter {#constructions}

A ruler and protractor can measure an approximate midpoint or angle. A **ruler-and-compass construction** builds equality from circles of equal radius; leave the arcs visible so someone can check the method. Use a straightedge for joining points and compasses for transferring distances. Measuring the final result is a check, not a replacement for the construction.

**Copy a segment.** Open the compasses to the distance AB. Without changing the opening, place the point at P and cut the chosen ray from P at Q. Then PQ = AB. This is how to transfer a length without reading a scale.

**Perpendicular bisector.** For segment AB, choose a radius greater than half AB. Draw arcs of that same radius from A and B so that they meet at X and Y on opposite sides of AB. Join XY. Every point on XY is equally far from A and B; XY crosses AB at its midpoint at a right angle. Too small a radius gives no two intersections.

![Perpendicular-bisector demonstration: A and B, equal-radius arcs intersecting at X and Y, and line XY. This is a worked construction, not an independent task answer.](/assets/img/igcse-geometry-reasoning-bisector.svg)

**Perpendicular at a point on a line.** With P on the line, mark A and B on the line at equal distances from P, one on each side. Use equal-radius arcs from A and B to meet at X off the line. Join PX. Since P is the midpoint of AB, PX is the perpendicular bisector of AB.

**Perpendicular from a point off a line.** With P off the line, draw an arc centred at P that crosses the line at A and B. Using equal-radius arcs centred at A and B, find a second point X off the line and different from P. Join PX and extend it to the line. Both P and X are equidistant from A and B, so this is their perpendicular bisector and hence the required perpendicular.

**Bisect an angle.** For angle APB, draw an arc centred at P meeting the arms at C and D. With the same opening at C and D, draw intersecting arcs at X inside the angle. Join PX. The triangles PCX and PDX have PC = PD, CX = DX and common PX, so SSS makes the angles at P equal.

**Copy an angle.** Draw an arc centred at the original vertex meeting its arms at C,D. With the same radius draw an arc at the new vertex P, meeting the new baseline at E. Transfer the chord distance CD with compasses from E onto this new arc at F. Join PF; the two radius sides and the chord give congruent triangles, so the angle is copied.

**Construct 60°.** Draw segment AB. Draw circles centred at A and B, each with radius AB, meeting at C. Join AC and BC. All three sides are AB, so the triangle is equilateral and each angle is 60°. Copying AB also constructs a triangle when its three valid side lengths are given; the sum of the two shorter lengths must exceed the longest.

<div class="worked-example" markdown="1">

### A complete construction: 30° without a protractor {#example-construction}

**Question:** Construct an angle of 30° at A using a straightedge and compasses. Explain why the result has the required angle.

Construct an equilateral triangle ABC using the 60° routine. To bisect angle CAB, draw a circle centred at A cutting AC and AB at D and E. Equal-radius arcs from D and E meet at F inside the angle; join AF. The SSS argument for the angle bisector gives two equal parts of the 60° angle, so angle FAB is 30°. Leave the equilateral arcs and the bisector arcs; a protractor reading of about 30° checks the result but does not establish the construction.

</div>

## A locus is all the positions, not one point {#loci}

A **locus** is the set of all points satisfying a condition. At a fixed distance r from point A: a circle centre A, radius r. Within that distance: the disc, including the boundary for “at most”, excluding it for “less than”. Equidistant from two distinct points A,B: the whole perpendicular bisector of AB. Closer to A than B: the half-plane on A's side of that bisector.

At distance d from an infinite straight line: two parallel lines, one on each side. Distances to a line are measured perpendicularly. Equidistant from two intersecting infinite lines: **both** angle bisectors; inside a specified angle, use its internal bisector. For a finite segment, fixed-distance loci can include circular end parts; do not replace a segment by an infinite line without permission.

“Both conditions” means the intersection of the two sets. A boundary may be included for one condition and excluded for another, so read each inequality.

<div class="worked-example" markdown="1">

### A complete two-condition locus {#example-locus}

**Question:** Draw AB = 6 cm. Construct and mark all points P such that PA = PB and PA = 5 cm.

The first condition asks for the perpendicular bisector of AB, not the segment AB. Construct that line using equal arcs. The second asks for a circle centred at A of radius 5 cm. Its two intersections with the bisector are the two possible points. Check each is 5 cm from A and B. The midpoint is 3 cm from A; a 5 cm circle reaches beyond it, so there are two points, one on each side of AB. If the radius were 3 cm there would be one point; below 3 cm there would be none.

</div>

## Shortest means perpendicular {#shortest}

For P off a line, draw the perpendicular PH meeting the line at H. For any other point Q on the line, PHQ is a right-angled triangle and PQ is its hypotenuse, longer than PH. Hence PH is the shortest distance. If H is outside a restricted segment, it is not an allowed endpoint; the nearest allowed point can instead be a segment endpoint. The line and segment are different sets.

## Draw at a known scale, then measure {#scale-measure}

A scale $1:25\,000$ means 1 unit on the map represents 25 000 of the same units on the ground. Thus 1 cm represents 25 000 cm = 250 m. A 3.6 cm route represents $3.6\times250=900\text{ m}$. Convert units after applying the scale, or write an equivalent “1 cm represents …” statement first.

For a ruler reading, put zero at the endpoint, not the physical edge of the ruler. For an angle, put the protractor centre at the vertex, align its zero line with the first ray, and choose the scale increasing in the direction of the angle. A resized screen image has no reliable centimetre scale: for the tasks below, draw your own paper diagram from the stated dimensions.

## Start at north and turn clockwise {#bearings}

The eight compass directions are N, NE, E, SE, S, SW, W and NW, separated by $45^\circ$. Their three-figure bearings are respectively **000°, 045°, 090°, 135°, 180°, 225°, 270°, 315°**. A bearing is measured clockwise from **north at the starting point**, from $000^\circ$ up to but not including $360^\circ$. Write leading zeros.

“The bearing of B from A” starts at A, uses A's north line and ends along AB. On a local plane map with parallel north lines, reversing the route changes direction by $180^\circ$: add 180 if the bearing is below 180, otherwise subtract 180. This is not the angle inside a triangle unless the geometry makes it so.

![A north line at A and route AB clockwise to its right; a parallel north line at B. The drawing gives direction and no numeric answer.](/assets/img/igcse-geometry-reasoning-bearing.svg)

<div class="worked-example" markdown="1">

### A complete reverse-bearing check {#example-bearing}

**Question:** The bearing of B from A is 064°. Find the bearing of A from B.

The starting point changes from A to B. AB points northeast, so BA must point southwest. Add a half-turn:

$$064^\circ+180^\circ=244^\circ.$$

The answer is a three-figure bearing, 244°. Its southwest direction is sensible. $180^\circ-64^\circ=116^\circ$ would point southeast and is not the reversed direction.

</div>

## Make the drawings yourself {#practice}

<div class="lesson-check" markdown="1">

### A construction portfolio {#practice-tools}

**Question:** On separate paper panels: copy a 5.5 cm segment onto a ray; construct the perpendicular bisector of a 7 cm segment; construct a perpendicular at a marked point on a line; construct a perpendicular from a point 4 cm off a line; bisect a drawn 70° angle; copy that angle onto a new ray; construct 60° and then an equilateral triangle of side 4 cm. Use a protractor only to draw the initial 70° and to check results. Leave all compass arcs and explain the equality behind each construction.

<details markdown="1">
<summary>Hint</summary>

Follow the matching construction routine; compass openings that represent equal distances must stay unchanged.

</details>

<details markdown="1">
<summary>Solution and feedback</summary>

Check your copied segment is 5.5 cm; the bisector crosses the 7 cm segment at 3.5 cm and at right angles; both perpendiculars make 90°; the angle bisector makes two 35° angles; the copied angle is 70°; all sides of the equilateral triangle are 4 cm and its angles 60°. The arcs, not these measurements alone, establish the methods: equal distances identify a bisector; SSS justifies copied/bisected angles; three equal sides give 60°. Redraw any panel made only by measuring from [the construction routines](#constructions). These checks are teaching checks, not official exam tolerances.

</details>

</div>

<div class="lesson-check" markdown="1">

### Combine restrictions {#practice-locus}

**Question:** Draw A and B 8 cm apart on a horizontal line. Construct all P satisfying PA = PB and PA = 5 cm, then retain only points above AB. Separately draw a vertical infinite line l: show all points exactly 2 cm from l and explain why a slant segment is not a shortest distance. Finally draw a 60° angle and construct the locus inside it equidistant from its two sides.

<details markdown="1">
<summary>Hint</summary>

Intersect sets first; only then apply the side restriction. Distance to a line is perpendicular.

</details>

<details markdown="1">
<summary>Solution and feedback</summary>

The perpendicular bisector meets the radius-5 circle in two points, but only the upper point is allowed. Its height above AB is 3 cm (a 3–4–5 right triangle); you need the arcs as well as a marked point. The distance-2 locus consists of two parallel vertical lines, 2 cm horizontally to each side of l. A slant route is a hypotenuse and longer than the perpendicular. The final locus is the internal 30° bisector ray of the 60° angle; for the full intersecting lines there would be both bisectors. Revisit [sets of positions](#loci) if you kept only one parallel or used distances to endpoints instead of sides.

</details>

</div>

<div class="lesson-check" markdown="1">

### Draw and measure a route {#practice-map}

**Question:** On paper use 1 cm to represent 100 m. Put A at your origin, draw B 6 cm east of A, and C 8 cm north of B. Draw AC. Measure AC with a ruler and the bearing of C from A with a protractor. Give the direct ground distance, the distance via B and the bearing of A from C. State the equivalent ratio scale.

<details markdown="1">
<summary>Hint</summary>

Draw north at A and C, parallel to BC. Measure clockwise from north, not from AB.

</details>

<details markdown="1">
<summary>Solution and feedback</summary>

Your paper AC should be about 10 cm, so direct ground distance is 1000 m; via B it is $600+800=1400\text{ m}$. The bearing is approximately 037° and the reverse 217°. The equivalent scale is $1:10\,000$. A protractor reading within about 1° is a useful drawing check here, not an official tolerance. Check the direct path is shorter than the two-leg route. A result near 053° suggests that you measured from east, so return to [north as the starting ray](#bearings).

</details>

</div>

<div class="lesson-check" markdown="1">

### Name and reverse directions {#practice-bearing}

**Question:** Write the bearings for E, SW and NW. The bearing of Q from P is 305°. Find the bearing of P from Q. On paper draw a route from X for 4 cm on bearing 135°, with a north arrow, and name its compass direction.

<details markdown="1">
<summary>Hint</summary>

Make the reverse point into the opposite compass quadrant.

</details>

<details markdown="1">
<summary>Solution and feedback</summary>

E = 090°, SW = 225°, NW = 315°. The reverse is $305^\circ-180^\circ=125^\circ$. The drawn 135° route points SE, sloping down to the right when north is up, and must be 4 cm long. If you wrote 55° for the reverse, return to [the half-turn](#example-bearing).

</details>

</div>

## Repair the drawing, not just the answer {#retry}

<div class="lesson-check" markdown="1">

### Construct a new figure {#retry-tools}

**Question:** Construct triangle ABC with AB = 6 cm, AC = 5 cm and BC = 5 cm. Construct its line through C perpendicular to AB, and bisect angle ACB. Explain why the last two lines coincide. Separately copy a length 4.2 cm, construct a perpendicular at a new point on a line, and construct and copy a 60° angle before bisecting it.

<details markdown="1">
<summary>Hint</summary>

Use the midpoint and equal-distance constructions, not a measured vertical line.

</details>

<details markdown="1">
<summary>Solution and feedback</summary>

Draw radius-5 arcs from A and B to find C. The equal legs make C equidistant from A and B, so C lies on the perpendicular bisector. Its intersections with AB give the midpoint; SSS on the two half-triangles also shows the same line bisects angle ACB. The copied segment is 4.2 cm; the new perpendicular is 90°; the copied 60° bisects into 30° and 30°. Check every new panel retains equal-radius arc evidence. Return to [Why the compass arcs matter](#constructions) for the routine you could not reproduce.

</details>

</div>

<div class="lesson-check" markdown="1">

### Change an equality to a region {#retry-locus}

**Question:** Draw AB = 6 cm. Shade all points closer to A than to B and at most 4 cm from A. State which boundaries are included. A point P is above an infinite line l: construct the shortest route to l and explain why an oblique route is longer. Also draw all points 3 cm from a new infinite line and both loci equidistant from two intersecting lines.

<details markdown="1">
<summary>Hint</summary>

An equality gives a boundary; an inequality often gives a region.

</details>

<details markdown="1">
<summary>Solution and feedback</summary>

Intersect the disc centre A radius 4 cm with the half-plane on A's side of the perpendicular bisector of AB. Include the circular boundary where allowed; exclude the bisector because equal distances do not satisfy “closer”. Construct PH perpendicular to l: any other route PQ is the hypotenuse of right triangle PHQ, so longer. Draw two parallels for the 3 cm locus and both angle bisectors for the final locus. Return to [A locus is all the positions, not one point](#loci) if you shaded a whole circle or omitted a second branch.

</details>

</div>

<div class="lesson-check" markdown="1">

### Reverse the scale calculation {#retry-map}

**Question:** At scale 1:20 000, how long should a 1.4 km path be on paper? Draw it, then measure your segment to check. A drawn 4.5 cm path at the same scale represents what ground distance?

<details markdown="1">
<summary>Hint</summary>

Make kilometres and centimetres compatible before dividing.

</details>

<details markdown="1">
<summary>Solution and feedback</summary>

$1.4\text{ km}=140\,000\text{ cm}$, so paper length is $140\,000/20\,000=7\text{ cm}$. A 4.5 cm path represents $4.5\times20\,000=90\,000\text{ cm}=900\text{ m}$. Keep the actual 7 cm drawing as evidence; return to [Draw at a known scale, then measure](#scale-measure) if your answer mixed kilometres and centimetres.

</details>

</div>

<div class="lesson-check" markdown="1">

### Build the bearing from a description {#retry-bearing}

**Question:** From A, B is 35° east of north. Draw AB with a north arrow. Write its three-figure bearing and the reverse bearing. A second route points due south: write both its outward and return bearings. List the four remaining compass directions N, NE, SE and W with their bearings.

<details markdown="1">
<summary>Hint</summary>

Which side of north is east? What is a half-turn from south?

</details>

<details markdown="1">
<summary>Solution and feedback</summary>

AB lies clockwise to the right of north: 035°. Reverse bearing $035^\circ+180^\circ=215^\circ$. South is 180° and its return north is 000°. N = 000°, NE = 045°, SE = 135°, W = 270°. If you wrote 325°, your ray went west of north; return to [Start at north and turn clockwise](#bearings) and redraw.

</details>

</div>

## Use the conditions in mixed problems {#next-step}

Continue to [geometry calculation](/igcse/mathematics/pythagoras-and-trigonometry/#start) and [mixed geometry](/igcse/mathematics/mixed-review/#geometry-review). After [number review](/igcse/mathematics/mixed-review/#number-review), return to [Change an equality to a region](#retry-locus) and redraw without opening the old solution. Keep the arcs, north arrows, units and reasons as evidence; a correct computed number alone does not demonstrate a construction.

## Scope and references {#sources}

<details markdown="1">
<summary>OxfordAQA sources and task identity</summary>

9260 v5.1 G12–G13: [specification PDF pp.19–20 (printed pp.20–21)](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-gcse-mathematics-specification.pdf#page=19), common content. Copying lengths/angles supports the specified constructions; it is not a separate extra examination requirement. Design reading: Specimen 2018 2C Q19 [QP p.18](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92602C-international-gcse-mathematics-specimen-paper-2016-v1.pdf#page=18), [MS PDF p.8](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92602C-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=8); Q25 [QP p.23](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92602C-international-gcse-mathematics-specimen-paper-2016-v1.pdf#page=23), [MS PDF p.10](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92602C-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=10). These were actually read for north/reverse direction, equal-radius arcs, perpendicular bisectors and combined constraints. All tasks here are self-written, not official marking schemes. Screen diagrams are explanatory; measurement tasks specify paper dimensions.

</details>
