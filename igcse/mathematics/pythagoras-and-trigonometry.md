---
layout: subjects
title: "Pythagoras and trigonometry"
mathjax: true
grade: igcse
subject: igcse-mathematics
permalink: /igcse/mathematics/pythagoras-and-trigonometry/
reading_layout: true
study_page: true
toc_headings: "h2"
---

[IGCSE Mathematics](/igcse/mathematics/#learning-start)
{:.lesson-meta}

## Which triangle contains the unknown? {#start}

A ladder's length is not its vertical height. A sloping roof line is not its horizontal projection. We will identify the right lengths and angles before choosing a calculation.

You need squares, square roots, simple equations and [angle facts](/igcse/mathematics/angles-and-polygons/#start). Begin with right-angled triangles in 2D, then build triangles inside solids and choose rules for non-right triangles. Use degree mode for numerical trigonometry; no particular calculator model or examination permission is implied.

All examples and tasks are self-written, without official marks. Sketches are not measurement instructions.
{:.lesson-meta}

## Two short sides and one hypotenuse {#right-triangles}

In a right-angled triangle the **hypotenuse** is opposite the right angle. It is the longest side, even if the diagram is rotated. If its length is c and the other sides are a and b, Pythagoras' theorem says

$$a^2+b^2=c^2.$$

This compares the **areas of squares on the sides**, not the lengths added directly. To find a short side, subtract the other square from $c^2$, then take the positive square root because a length is positive. The theorem needs a right angle.

![Right triangle ABC with AB horizontal 8 units, BC vertical 6 units, AC 10 units, right angle at B and angle theta at A.](/assets/img/igcse-geometry-calculation-triangle.svg)

For the triangle above, $8^2+6^2=64+36=100=10^2$. The squared lengths fit; $8+6=10$ does not.

<div class="worked-example" markdown="1">

### A ladder against a wall {#example-right}

**Question:** A 5 m ladder rests against a vertical wall on horizontal ground. Its foot is 3 m from the wall. Find the height reached.

The wall and ground are perpendicular. The ladder is opposite their right angle, so it is the hypotenuse. We know one short side and the hypotenuse, not both short sides:

$$h^2+3^2=5^2,\qquad h^2=25-9=16,\qquad h=4\text{ m}.$$

Check: $3^2+4^2=5^2$, and the vertical height is less than the ladder length. Taking $\sqrt{25+9}$ would produce a length longer than the hypotenuse.

</div>

## Ratios connect sides to an angle {#ratios}

Focus on the marked acute angle $\theta$. The **opposite** side is across from it. The **adjacent** side touches it and is not the hypotenuse. These two names swap when you use the other acute angle.

Similar right triangles with the same angle have the same side ratios. These ratios are called sine, cosine and tangent:

$$
\sin\theta=\frac{\text{opposite}}{\text{hypotenuse}},
\quad \cos\theta=\frac{\text{adjacent}}{\text{hypotenuse}},
\quad \tan\theta=\frac{\text{opposite}}{\text{adjacent}}.
$$

In our drawn triangle, $\sin\theta=6/10$, $\cos\theta=8/10$ and $\tan\theta=6/8$. Choose the ratio containing the known side and the requested side. You do not need to find a third side first.

To recover an angle, use the inverse function, for example $\theta=\tan^{-1}(6/8)\approx36.9^\circ$. Here $\tan^{-1}$ means “which angle has this tangent?”, not $1/\tan$. Keep full intermediate values and round at the end.

<div class="worked-example" markdown="1">

### Choose the two sides you actually need {#example-ratios}

**Question:** A right triangle has hypotenuse 12 cm and angle 35°. Find the side opposite 35°, then the side adjacent to 35°.

The first unknown uses opposite and hypotenuse, hence sine. The second uses adjacent and hypotenuse, hence cosine:

$$
\sin35^\circ=\frac{x}{12},\quad x=12\sin35^\circ\approx6.88\text{ cm}.
$$

$$
\cos35^\circ=\frac{y}{12},\quad y=12\cos35^\circ\approx9.83\text{ cm}.
$$

Both are shorter than 12. Using unrounded values, $x^2+y^2=144$. This check also helps detect an incorrect calculator angle mode.

</div>

## Choose your own method {#practice}

<div class="lesson-check" markdown="1">

### A different unknown {#check-right}

**Question:** A 13 m cable joins the top of a 12 m vertical pole to a point on horizontal ground. Draw a labelled triangle and find how far the ground point is from the foot of the pole.

<details markdown="1">
<summary>Hint</summary>

Where is the right angle? Which side is opposite it?

</details>

<details markdown="1">
<summary>Solution and check</summary>

Let the horizontal distance be d. The cable is the hypotenuse: $d^2+12^2=13^2$, so $d^2=25$ and $d=5\text{ m}$. Your drawing should place 13 on the sloping cable and mark the ground-pole right angle. Adding the squares finds the wrong unknown.

</details>

</div>

<div class="lesson-check" markdown="1">

### Lengths and an angle {#check-ratios}

**Question:** A right triangle has hypotenuse 15 cm and acute angle 32°. Find its opposite and adjacent sides to 3 significant figures. In another right triangle, the opposite side to angle t is 5 cm and the adjacent side is 12 cm. Find t to 1 decimal place. Explain both ratio choices.

<details markdown="1">
<summary>Hint</summary>

Name the pair of sides before writing a trigonometric function.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Opposite $=15\sin32^\circ=7.95\text{ cm}$; adjacent $=15\cos32^\circ=12.7\text{ cm}$. For the second triangle, $\tan t=5/12$ and $t=\tan^{-1}(5/12)=22.6^\circ$. It uses tangent because no hypotenuse is needed. If you swap opposite and adjacent you obtain the complementary angle, not t.

</details>

</div>

## First draw a flat triangle inside the solid {#space}

A line's angle to a plane is the angle between the line and its perpendicular projection **onto that plane**. It is not usually the angle to any convenient edge.

<div class="worked-example" markdown="1">

### A diagonal through a box {#example-space}

**Question:** A cuboid has horizontal base edges 6 cm and 8 cm and vertical height 12 cm. Find the space diagonal from one bottom corner to the opposite top corner and its angle to the base plane.

Sketch the box. Call the starting bottom corner A, the opposite bottom corner B and the top corner directly above B, T. The base diagonal AB is the projection of AT. Two triangles are needed:

$$AB^2=6^2+8^2=100,\qquad AB=10.$$

BT is perpendicular to the base, hence triangle ABT is right-angled at B:

$$AT^2=10^2+12^2=244,\qquad AT=\sqrt{244}\approx15.6\text{ cm}.$$

The required angle is TAB, so

$$\tan\theta=\frac{12}{10},\qquad \theta\approx50.2^\circ.$$

Using 6 or 8 in the denominator gives an angle in a different triangle. Check that the space diagonal is longer than the base diagonal and the vertical height.

</div>

<div class="lesson-check" markdown="1">

### Find the projection {#check-space}

**Question:** A right square-based pyramid has base side 10 m. Its apex E is 12 m vertically above the centre X. B is a base vertex. Draw the two triangles needed to find EB and the angle EB makes with the base plane. Give answers to 3 significant figures.

<details markdown="1">
<summary>Hint</summary>

Join X to B; X is the centre, not a corner. Then use the vertical EX.

</details>

<details markdown="1">
<summary>Solution and check</summary>

In the base, XB has perpendicular components 5 and 5, so $XB=\sqrt{50}$. Triangle EXB is right-angled at X. Therefore $EB=\sqrt{12^2+50}=\sqrt{194}=13.9\text{ m}$. The required angle is EBX, with $\tan\angle EBX=12/\sqrt{50}$, giving $59.5^\circ$. A correct drawing labels the half-side lengths in the base and marks EX perpendicular to XB.

</details>

</div>

## When there is no right angle {#any-triangle}

Do not apply the three right-triangle ratios to a whole non-right triangle. Use opposite pairs: side a is opposite angle A, b opposite B, and c opposite C.

The **sine rule** connects an opposite side-angle pair to another:

$$\frac{a}{\sin A}=\frac{b}{\sin B}=\frac{c}{\sin C}.$$

For instance, if $A=40^\circ$, $a=8$ and $B=65^\circ$, use the known pair $(8,40^\circ)$:

$$b=\frac{8\sin65^\circ}{\sin40^\circ}\approx11.3.$$

B is larger than A, so b should be longer than a. When finding an unknown angle from sine, check the supplementary angle too: $\sin B=\sin(180^\circ-B)$. For $A=30^\circ,a=5,b=8$, sine gives $B=53.1^\circ$ **or** $126.9^\circ$; both leave a positive third angle. A sketch is not enough to choose between them; stated conditions must decide.

The **cosine rule** works when two sides and their included angle are known (SAS), or when all three sides are known (SSS):

$$a^2=b^2+c^2-2bc\cos A.$$

For SSS, rearrange before taking an inverse:

$$\cos A=\frac{b^2+c^2-a^2}{2bc}.$$

<div class="worked-example" markdown="1">

### The angle is between the two given sides {#example-any}

**Question:** Two sides of a triangle are 5 cm and 7 cm and their included angle is 60°. Find the third side.

There is no known opposite pair, so use the cosine rule with 60° opposite the unknown c:

$$c^2=5^2+7^2-2(5)(7)\cos60^\circ=25+49-35=39.$$

$$c=\sqrt{39}\approx6.24\text{ cm}.$$

The triangle inequality checks $7-5<c<7+5$. For comparison, an angle calculation with sides 7,8,9 and A opposite 9 gives

$$\cos A=\frac{7^2+8^2-9^2}{2(7)(8)}=\frac27,\qquad A\approx73.4^\circ.$$

The cosine rule becomes Pythagoras when the included angle is 90°, because its cosine is zero.

</div>

<div class="lesson-check" markdown="1">

### Three sets of information {#check-any}

**Question:** Choose a method for each triangle, explain the choice and calculate to 3 significant figures. (a) Two sides 6 cm and 9 cm include 60°: find the third side. (b) Sides are 9 cm, 10 cm and 14 cm: find the angle opposite 14 cm. (c) $A=35^\circ,a=7\text{ cm},B=75^\circ$: find b and C.

<details markdown="1">
<summary>Hint</summary>

Mark opposite pairs. Do not infer a right angle from the picture you draw.

</details>

<details markdown="1">
<summary>Solution and check</summary>

(a) SAS: $c^2=6^2+9^2-2(6)(9)\cos60^\circ=63$, so $c=7.94\text{ cm}$. (b) SSS: $\cos C=(9^2+10^2-14^2)/(2(9)(10))=-1/12$, so $C=94.8^\circ$. The negative cosine fits an obtuse angle. (c) A known opposite pair allows $b=7\sin75^\circ/\sin35^\circ=11.8\text{ cm}$; $C=180^\circ-35^\circ-75^\circ=70^\circ$. Retain unrounded trigonometric values.

</details>

</div>

## Area without a perpendicular height {#area}

A triangle still has area $\frac12\times\text{base}\times\text{perpendicular height}$. If sides a and b meet at angle C, the height onto side a is $b\sin C$, including when C is obtuse (drop the perpendicular onto the extended base). Therefore

$$\text{Area}=\tfrac12 ab\sin C.$$

The angle must be **between** the two sides used. For the 5 cm, 7 cm, 60° example, area $=\frac12(5)(7)\sin60^\circ\approx15.2\text{ cm}^2$. To recover a side, divide the area by half the other side times sine of the included angle. To recover the angle, isolate its sine and check whether the question specifies acute or obtuse.

<div class="lesson-check" markdown="1">

### Reverse the area question {#check-area}

**Question:** (a) Sides 10 cm and 8 cm include 120°: find the area to 3 significant figures. (b) Sides 10 cm and 8 cm enclose area 20 cm²: find both possible included angles. (c) Area is 12 cm², one side is 6 cm and its included angle with side b is 30°: find b.

<details markdown="1">
<summary>Hint</summary>

The angle in the formula sits between the sides. Two angles can have the same sine.

</details>

<details markdown="1">
<summary>Solution and check</summary>

(a) Area $=\frac12(10)(8)\sin120^\circ=34.6\text{ cm}^2$. (b) $\sin C=20/40=1/2$, giving $30^\circ$ and $150^\circ$. Both are valid triangle angles. (c) $12=\frac12(6)b\sin30^\circ=1.5b$, so $b=8\text{ cm}$. Area has square units but the recovered side has length units.

</details>

</div>

## Repair the triangle or the choice {#retry}

Wrong longest side: [Pythagoras](#right-triangles). Opposite/adjacent swapped: [ratios](#ratios). Wrong solid angle: [projection](#space). A non-right triangle treated as right: [opposite pairs and cosine rule](#any-triangle). Wrong included angle or units: [area](#area). Close the earlier solutions before retrying.

<div class="lesson-check" markdown="1">

### A new right triangle {#retry-right}

**Question:** A rectangular screen is 24 cm wide and 10 cm high. Find its diagonal and explain why the positive root is used.

<details markdown="1">
<summary>Hint</summary>

The rectangle supplies a right angle.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$d^2=24^2+10^2=676$, so $d=26\text{ cm}$. A diagonal length is positive; -26 is an algebraic solution to the squared equation but not a length.

</details>

</div>

<div class="lesson-check" markdown="1">

### The unknown is now the hypotenuse {#retry-ratios}

**Question:** A right triangle has opposite side 6 cm to an angle of 35°. Find the hypotenuse to 3 significant figures. Another has hypotenuse 13 cm and opposite side 12 cm: find the acute angle to 1 decimal place.

<details markdown="1">
<summary>Hint</summary>

Write the ratio before rearranging.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$\sin35^\circ=6/h$, hence $h=6/\sin35^\circ=10.5\text{ cm}$. For the second, $\theta=\sin^{-1}(12/13)=67.4^\circ$. Multiplying 6 by sine would make the hypotenuse shorter than a short side.

</details>

</div>

<div class="lesson-check" markdown="1">

### Recover the height {#retry-space}

**Question:** A cuboid has a horizontal 3 cm by 4 cm base and space diagonal 13 cm. Find its height and the diagonal's angle to the base plane.

<details markdown="1">
<summary>Hint</summary>

Find the projection first.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Base diagonal $=\sqrt{3^2+4^2}=5\text{ cm}$. Height $=\sqrt{13^2-5^2}=12\text{ cm}$. The angle has $\tan\theta=12/5$, giving $67.4^\circ$ to 1 decimal place. Use the 5 cm projection, not a single base edge.

</details>

</div>

<div class="lesson-check" markdown="1">

### Two different ways back {#retry-any}

**Question:** (a) Sides 4 cm and 6 cm include 120°: find the third side to 3 significant figures. (b) $A=30^\circ,a=6\text{ cm},b=6\text{ cm}$: find B and C, rejecting any impossible angle.

<details markdown="1">
<summary>Hint</summary>

Use SAS for (a); a known opposite pair for (b). Check the angle sum.

</details>

<details markdown="1">
<summary>Solution and check</summary>

(a) $c^2=4^2+6^2-2(4)(6)\cos120^\circ=76$, so $c=8.72\text{ cm}$. (b) $\sin B=6\sin30^\circ/6=1/2$. The candidate 150° leaves $C=0^\circ$, so reject it. $B=30^\circ,C=120^\circ$. Not every supplementary candidate is valid.

</details>

</div>

<div class="lesson-check" markdown="1">

### A new area condition {#retry-area}

**Question:** Two sides are 6 cm and 8 cm and their triangle has area 12 cm². Find the obtuse included angle. If instead the included angle is 90°, find the area.

<details markdown="1">
<summary>Hint</summary>

First isolate sine, then use the word obtuse.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$\sin C=12/24=1/2$; the obtuse angle is $150^\circ$, not 30°. At 90°, area is $24\text{ cm}^2$, the largest possible with these two fixed side lengths.

</details>

</div>

## Return after mensuration {#next-step}

Use [area and volume](/igcse/mathematics/units-area-and-volume/#solids-extension), then attempt the task below with the formulas covered. Continue to [mixed geometry](/igcse/mathematics/mixed-review/#geometry-review).

<div class="lesson-check" markdown="1">

### An unlabelled method choice {#later-check}

**Question:** A triangular panel has sides 7 cm and 10 cm meeting at 120°. Find the third side to 3 significant figures and the area to 3 significant figures. Explain why treating the two given sides as perpendicular would be wrong.

<details markdown="1">
<summary>Hint</summary>

Use the angle that is actually stated.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$c^2=7^2+10^2-2(7)(10)\cos120^\circ=219$, so $c=14.8\text{ cm}$. Area $=\frac12(7)(10)\sin120^\circ=30.3\text{ cm}^2$. The included angle is 120°, not 90°; its cosine term cannot be dropped, and 10 is not the perpendicular height.

</details>

</div>

## Scope and sources {#sources}

<details markdown="1">
<summary>Qualification and read pages</summary>

OxfordAQA International GCSE Mathematics 9260 v5.1: [specification PDF 21, printed 22, G19–20](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-gcse-mathematics-specification.pdf#page=21). G19 covers 2D and 3D right triangles; G20 covers the sine rule, cosine rule and triangle area, including reverse questions.

Actual reading: Specimen 2018 2C Q28, [QP PDF 25](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9260-92602C-international-gcse-mathematics-specimen-paper-2016-v1.pdf#page=25)/[MS PDF 11](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9260-92602C-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=11), including the QP diagram; 2E Q11, QP PDF 10/MS PDF 7; 1E Q28, [QP PDF 27](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9260-92601E-international-gcse-mathematics-specimen-paper-2016-v1.pdf#page=27)/[MS PDF 14](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9260-92601E-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=14), for a line-plane angle; 2E Q19, QP PDF 16/MS PDF 12, for a cosine-rule obtuse angle. These inform method and evidence; the teaching problems here are self-written, without official marks.

</details>
