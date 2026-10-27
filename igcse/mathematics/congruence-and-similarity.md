---
layout: subjects
title: "Congruence and similarity"
mathjax: true
grade: igcse
subject: igcse-mathematics
permalink: /igcse/mathematics/congruence-and-similarity/
reading_layout: true
study_page: true
toc_headings: "h2"
---

## Same shape, same size? {#start}

A photo can be turned without changing its size, or enlarged without changing its shape. Those are different claims. You will decide what matches, calculate missing lengths and prove a match from enough conditions.

You need [angle facts and triangle names](/igcse/mathematics/angles-and-polygons/#triangles) and [ratios](/igcse/mathematics/ratio-and-proportion/#start). Start with congruence, similarity and corresponding lengths, then use triangle congruence conditions in proofs and scale areas and volumes. All examples and tasks are **self-written, with no official marks**.

## Match vertices before numbers {#matching}

Two shapes are **congruent** if one fits exactly on the other after a move, turn or reflection: shape and size match. They are **similar** if one is a scaled copy of the other, allowing a turn or reflection. Corresponding angles are equal, and all corresponding lengths have one common positive scale factor. Congruent figures are similar with scale factor 1.

Writing $\triangle ABC\sim\triangle PQR$ states the order: A matches P, B matches Q, C matches R. Thus AB matches PQ, BC matches QR and AC matches PR, even if one diagram is rotated. A single pair of equal angles or a single equal length does not establish similarity.

![Two triangles with corresponding vertices ABC and PQR, the second rotated. The first has sides AB 3, BC 4 and CA 5; the second has PQ 6 and QR 8, with PR unlabelled.](/assets/img/igcse-geometry-reasoning-similarity.svg)

For triangles, two equal corresponding angles (**AA**) determine the third and establish similarity. Alternatively, three proportional corresponding sides (**SSS similarity**), or two proportional sides with the equal **included** angle (**SAS similarity**), establish it. These are similarity statements; SSS congruence below requires equal lengths, not merely proportional ones.

To find a missing length, write the scale factor with its direction: $\text{new length}/\text{old length}$. Use that same direction throughout. A scale factor below 1 makes a smaller copy; an enlargement need not increase the size.

<div class="worked-example" markdown="1">

### A complete length calculation {#example-scale}

**Question:** Triangles ABC and PQR are similar in the stated order. AB = 3 cm, BC = 4 cm, AC = 5 cm, PQ = 6 cm. Find QR and PR.

Write the matching pair first: AB corresponds to PQ. The factor from ABC to PQR is $6/3=2$. Therefore:

$$QR=4\times2=8\text{ cm},\qquad PR=5\times2=10\text{ cm}.$$

Check all three ratios: $6/3=8/4=10/5=2$. Adding 3 cm to every side would not keep their ratios equal. The triangles are similar but not congruent because the factor is not 1.

</div>

## Enough information to prove a fit {#congruence}

For triangles, the following conditions determine the same shape and size:

- **SSS:** all three corresponding sides are equal.
- **SAS:** two corresponding sides and the angle **between** them are equal.
- **ASA / AAS:** two corresponding angles and one corresponding side are equal. The third angle is then fixed by the triangle sum.
- **RHS:** both triangles are right-angled, with equal hypotenuses and one equal corresponding shorter side.

**AAA** gives similarity only; it does not fix size. **SSA** (two sides and a non-included angle) is not generally sufficient: draw a ray making an acute angle at A with AB, then a circle centred at B with the given distance to C. It can meet the ray twice, giving two different triangles. RHS is a special right-angle condition, not a licence to use arbitrary SSA.

Write the three matching facts with reasons, name the valid condition, then use corresponding parts of congruent triangles. A diagram that looks symmetric cannot supply a missing fact.

<div class="worked-example" markdown="1">

### A complete congruence proof {#example-proof}

**Question:** Triangle ABC has AB = AC. M is the midpoint of BC. Prove that AM bisects angle BAC.

The midpoint gives a second equal pair, so compare the triangles on either side of AM:

$$AB=AC,\qquad BM=CM,\qquad AM=AM.$$

The reasons are: given equal sides; M is the midpoint; common side. Hence $\triangle ABM\cong\triangle ACM$ by SSS. Corresponding angles give $\angle BAM=\angle MAC$, so AM bisects angle BAC.

We did not assume that AM is perpendicular to BC or that it bisects the angle. Those are possible conclusions, not given conditions. Check the correspondence: B matches C and M matches M.

</div>

## Length, area and volume {#area-volume}

If all lengths are multiplied by k, a rectangle's length and width each acquire a factor k, so its area acquires $k^2$. The same holds for any similar plane figures: subdividing into matching triangles gives two length factors in every area. A similar solid has three independent length directions, so its volume acquires $k^3$. Surface areas also acquire $k^2$.

Thus a length factor of 2 gives area factor 4 and volume factor 8. To work backwards from an area factor, take its positive square root; from a volume factor, take its positive cube root. These relations require **similar** shapes. Two boxes of equal volume need not have the same shape or surface area.

<div class="worked-example" markdown="1">

### Choose the dimension first {#example-volume}

**Question:** A closed cuboid measures 4 cm by 2 cm by 1 cm. A similar larger cuboid has the corresponding longest edge 10 cm. Find the larger total surface area and volume.

First check the actual smaller model: its six faces give $S=2(4\times2+4\times1+2\times1)=28\text{ cm}^2$, and $V=4\times2\times1=8\text{ cm}^3$. The factor from smaller to larger is $k=10/4=2.5$. Surface area has two length factors; volume has three:

$$S=28(2.5)^2=175\text{ cm}^2,\qquad V=8(2.5)^3=125\text{ cm}^3.$$

Check the dimensions directly: the larger cuboid is 10 cm by 5 cm by 2.5 cm. Its six faces have total area $2(10\times5+10\times2.5+5\times2.5)=175\text{ cm}^2$, and its volume is $10\times5\times2.5=125\text{ cm}^3$. Also $175/28=6.25=k^2$ and $125/8=15.625=k^3$. Multiplying both quantities only by 2.5 would treat them as lengths.

</div>

## Decide what the conditions actually guarantee {#practice}

<div class="lesson-check" markdown="1">

### Match a rotated triangle {#practice-lengths}

**Question:** Triangle XYZ has XY = 9 cm, YZ = 12 cm, XZ = 15 cm and angle Y = 90°. Triangle UVW has angle U = 90°, angle W equal to angle X, and UW = 6 cm. Show they are similar, write a correct ordered similarity statement, and find UV. Are the triangles congruent? Is a reflected copy of XYZ with unchanged lengths congruent to XYZ?

<details markdown="1">
<summary>Hint</summary>

Match the given equal angles and the two right angles before comparing sides.

</details>

<details markdown="1">
<summary>Solution and feedback</summary>

$\angle X=\angle W$ is given and $\angle Y=\angle U=90^\circ$. Therefore the remaining angles Z and V are equal too. X matches W, Y matches U, Z matches V, so $\triangle XYZ\sim\triangle WUV$ by AA. XY matches WU, giving factor $6/9=2/3$ and $UV=12(2/3)=8\text{ cm}$. The remaining side is $WV=15(2/3)=10\text{ cm}$: both are actual right triangles, with sides 9,12,15 and 6,8,10. Do not compare UW with YZ; they have different matching endpoints. Return to [vertex matching](#matching) if you matched by screen position. The triangles are not congruent because their matching lengths differ. A reflected copy of XYZ with unchanged lengths is congruent to XYZ: reflection preserves size.

</details>

</div>

<div class="lesson-check" markdown="1">

### Sort sufficient from insufficient {#practice-conditions}

**Question:** For each pair of non-degenerate triangles, decide whether congruence is guaranteed and justify: (i) sides 4, 5, 6 cm in both; (ii) sides 4 and 6 cm with included angle 50° in both; (iii) angles 40°, 65° and the side between them 7 cm in both; (iv) right angles, hypotenuse 13 cm and one leg 5 cm in both; (v) angles 40°, 65°, 75° only; (vi) AB = 8 cm, AC along a ray at 30° to AB, and BC = 5 cm. For (vi), construct the possible C positions to test uniqueness.

<details markdown="1">
<summary>Hint</summary>

Which listed angle is between the equal sides? For (vi), intersect the ray with a radius-5 circle centred at B.

</details>

<details markdown="1">
<summary>Solution and feedback</summary>

(i) SSS; (ii) SAS; (iii) ASA; (iv) RHS guarantee congruence. (v) AAA fixes shape but allows all lengths to double, so not congruence. (vi) gives two intersections: B is 4 cm from the ray and 5 cm exceeds that distance; the perpendicular foot is in front of A, and both intersections are on the ray. The two values of AC differ, so SSA is not unique. Keep the compass arcs as evidence. If you accepted SSA, revisit [included angles](#congruence).

</details>

</div>

<div class="lesson-check" markdown="1">

### A diagonal in a parallelogram {#practice-proof}

**Question:** ABCD is a parallelogram with vertices in order. Draw diagonal AC. Prove triangles ABC and CDA are congruent, writing the corresponding order and a reason for every condition. Deduce angle BCA = angle DAC.

<details markdown="1">
<summary>Hint</summary>

Look for the common side and equal angles from the parallel sides.

</details>

<details markdown="1">
<summary>Solution and feedback</summary>

$AB=CD$ (opposite sides of a parallelogram), $AC=CA$ (common side), and $\angle BAC=\angle DCA$ (alternate interior angles, AB parallel CD). Thus $\triangle ABC\cong\triangle CDA$ by SAS. Corresponding angles give $\angle BCA=\angle DAC$. Alternatively both pairs of opposite sides and AC give SSS. Do not call an arbitrary quadrilateral a parallelogram just because the drawing resembles one; revisit [proof conditions](#example-proof).

</details>

</div>

<div class="lesson-check" markdown="1">

### Start from a volume ratio {#practice-scale}

**Question:** Two similar closed cuboids A and B have volumes 8 cm³ and 216 cm³. A measures 4 cm by 2 cm by 1 cm and has total surface area 28 cm². Find B's longest edge and total surface area. Explain why a volume ratio alone would be insufficient without similarity.

<details markdown="1">
<summary>Hint</summary>

Recover the length factor first.

</details>

<details markdown="1">
<summary>Solution and feedback</summary>

$k^3=216/8=27$, so $k=3$. The longest edge is $4\times3=12\text{ cm}$ and the surface area is $28\times3^2=252\text{ cm}^2$. Check the complete model: B measures 12 cm by 6 cm by 3 cm, so $12\times6\times3=216\text{ cm}^3$ and $2(12\times6+12\times3+6\times3)=252\text{ cm}^2$. Without similarity, the dimensions can change by different factors, so there is no single k. If you multiplied the edge by 27, return to [dimensions](#area-volume).

</details>

</div>

## Retry the decision you missed {#retry}

<div class="lesson-check" markdown="1">

### Work from large to small {#retry-lengths}

**Question:** Triangles ABC and DEF are similar in that order. DE = 15 cm, EF = 21 cm and AB = 5 cm. Find BC. Decide whether the perimeter scale factor is the same as the length scale factor.

<details markdown="1">
<summary>Hint</summary>

Write a factor from DEF to ABC.

</details>

<details markdown="1">
<summary>Solution and feedback</summary>

The factor is $5/15=1/3$, so $BC=21/3=7\text{ cm}$. Every side has the same factor, so their sum, the perimeter, does too. Return to [Match vertices before numbers](#matching) if EF was paired with AB.

</details>

</div>

<div class="lesson-check" markdown="1">

### Choose a different congruence condition {#retry-proof}

**Question:** In triangles ABC and DEF, angle A = angle D = 50°, angle B = angle E = 60°, and BC = EF = 7 cm. Prove the triangles congruent and deduce AC = DF. Explain why the equal side need not lie between the two initially given angles.

<details markdown="1">
<summary>Hint</summary>

Recover the third pair of angles or use AAS.

</details>

<details markdown="1">
<summary>Solution and feedback</summary>

$\angle C=\angle F=180^\circ-50^\circ-60^\circ=70^\circ$. With BC = EF, use ASA at B,C and E,F, or AAS using the originally given angles. Hence $\triangle ABC\cong\triangle DEF$, and corresponding sides give $AC=DF$. The third angle is fixed, so an equal corresponding non-included side is enough with two angle pairs. Return to [Enough information to prove a fit](#congruence) if you confused AAS with SSA.

</details>

</div>

<div class="lesson-check" markdown="1">

### Change from volume to area {#retry-scale}

**Question:** A closed cuboid measures 9 cm by 6 cm by 3 cm, with total surface area 198 cm² and volume 162 cm³. A similar smaller closed cuboid has total surface area 88 cm². Find the smaller volume.

<details markdown="1">
<summary>Hint</summary>

Area reveals the square of the length factor, not its cube.

</details>

<details markdown="1">
<summary>Solution and feedback</summary>

From large to small, $k^2=88/198=4/9$, so $k=2/3$. The smaller volume is $162(2/3)^3=48\text{ cm}^3$. Check with a real smaller model: its dimensions are 6 cm by 4 cm by 2 cm, giving $2(6\times4+6\times2+4\times2)=88\text{ cm}^2$ and $6\times4\times2=48\text{ cm}^3$. Return to [Length, area and volume](#area-volume) if you used the area ratio directly on the volume.

</details>

</div>

<div class="lesson-check" markdown="1">

### Test a new claim {#retry-conditions}

**Question:** One triangle has sides 4, 6 and 8 cm and another 6, 9 and 12 cm. Are they similar or congruent? A student says that equal pairs of 50° angles and one pair of 6 cm sides prove two triangles congruent. Give a counterexample by drawing two different triangles with AB = 6 cm and angle A = 50°.

<details markdown="1">
<summary>Hint</summary>

All three side ratios help the first claim. In the second, how much freedom remains for AC?

</details>

<details markdown="1">
<summary>Solution and feedback</summary>

All corresponding side ratios are $6/4=9/6=12/8=1.5$, so the triangles are similar by SSS similarity, but not congruent. For the second claim draw AB = 6 cm and a ray at 50° from A; put C first 4 cm and then 7 cm along the ray. Both triangles satisfy the given side and angle but differ in AC, so they are not congruent. One side and one angle are insufficient. Return to [sufficient conditions](#congruence) if you treated a partial list as SAS.

</details>

</div>

## From triangles to circle proofs {#next-step}

Use [circles and proof](/igcse/mathematics/circles-and-proof/#start) next. Area and volume calculations continue in [units, area and volume](/igcse/mathematics/units-area-and-volume/#start). After [algebra review](/igcse/mathematics/mixed-review/#algebra-review), return to [Sort sufficient from insufficient](#practice-conditions) and [Change from volume to area](#retry-scale) with help closed; then try [mixed geometry](/igcse/mathematics/mixed-review/#geometry-review).

## Scope and references {#sources}

<details markdown="1">
<summary>OxfordAQA sources and task identity</summary>

9260 v5.1 G7, G9, G17: [specification PDF p.19](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-gcse-mathematics-specification.pdf#page=19) and [PDF p.21](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-gcse-mathematics-specification.pdf#page=21). G17 covers similar area/volume relations; G18 concerns arcs and sectors, not similarity. Design reading: Specimen 2018 2C Q3 [QP p.3](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92602C-international-gcse-mathematics-specimen-paper-2016-v1.pdf#page=3), [MS PDF p.4](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92602C-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=4); 2E Q25–26 [QP pp.22–23](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92602E-international-gcse-mathematics-specimen-paper-2016-v1.pdf#page=22), [MS PDF pp.14–15](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92602E-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=14). Read for corresponding conditions and scaling; all teaching tasks here are self-written and carry no official marks.

</details>
