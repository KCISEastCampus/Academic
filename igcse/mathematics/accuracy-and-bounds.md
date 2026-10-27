---
layout: subjects
title: "Accuracy and bounds"
mathjax: true
grade: igcse
subject: igcse-mathematics
permalink: /igcse/mathematics/accuracy-and-bounds/
reading_layout: true
study_page: true
toc_headings: "h2"
---

[IGCSE Mathematics](/igcse/mathematics/#learning-start)
{:.lesson-meta}

## How much does a rounded number tell us? {#start}

A label saying 2.4 kg does not always mean exactly 2.4000 kg. First find what has been rounded, then decide what conclusions the reading supports. You need [place value](/igcse/mathematics/number-operations/#place-value) and division. All tasks are self-written, with no official marks.

## Choose the place you are keeping {#rounding}

Decimal places count positions after the decimal point. Significant figures count from the first non-zero digit: they describe how many meaningful digits you retain. Leading zeros locate a value; they are not significant figures. A final zero can be significant: 2.40 has three significant figures and two decimal places.

<div class="worked-example" markdown="1">

### A small measurement {#example-rounding}

**Question:** Round 0.004786 to 2 significant figures and to 4 decimal places.

For 2 significant figures, start at 4. Keep 4 and 7; the next digit is 8, so increase the 7:

$$0.004786\approx0.0048\quad(2\text{ s.f.}).$$

For 4 decimal places, the fourth place is the 7. The next digit is 8 again:

$$0.004786\approx0.0048\quad(4\text{ d.p.}).$$

These answers coincide here, but the instructions count from different starting points. For 23.746, the corresponding answers are 24 and 23.7460. To round 9.96 to 2 s.f., the carry gives 10; write $1.0\times10^1$ to make the two significant figures clear.

</div>

## Make a sensible estimate first {#estimation}

An estimate replaces numbers by nearby convenient values. It can catch a misplaced decimal point, but is not automatically a guaranteed upper or lower bound.

$$\frac{19.8\times0.51}{4.97}\approx\frac{20\times0.5}{5}=2.$$

Keep the unrounded inputs for the final calculation, about 2.03179. Enter the whole numerator and denominator with brackets. Checking against 2 makes a display of 203.179 suspicious. Round the final result once, to the requested accuracy; do not round every intermediate step.

## Try without the examples {#practice}

<div class="lesson-check" markdown="1">

### Two kinds of accuracy {#practice-rounding}

**Question:** Round 0.030496 to 3 significant figures and to 3 decimal places. Explain why the number of digits after the decimal point differs.

<details markdown="1">
<summary>Hint</summary>

Locate the first non-zero digit for significant figures; locate the third decimal place separately.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$0.030496\approx0.0305\quad(3\text{ s.f.}),\qquad0.030496\approx0.030\quad(3\text{ d.p.}).$$

For 3 s.f., keep 3, 0, 4 and use the next digit 9. For 3 d.p., keep the zero in the thousandths place and use the next digit 4. Writing 0.03 loses the stated three-decimal-place precision.

</details>

</div>

<div class="lesson-check" markdown="1">

### Check a display {#practice-estimation}

**Question:** A learner obtains 398.7 for $(39.6\times2.04)/20.3$. Estimate the answer and decide whether the display is plausible. Then use a calculator, record your grouped input, and calculate the answer to 3 significant figures.

<details markdown="1">
<summary>Hint</summary>

Choose nearby numbers that divide easily. Re-enter with a bracket around the numerator.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\frac{40\times2}{20}=4,\qquad \frac{39.6\times2.04}{20.3}=3.979507\ldots\approx3.98.$$

One suitable grouped input is (39.6 × 2.04) ÷ 20.3. 398.7 is implausible: it is about a hundred times the estimate. The estimate diagnoses the scale, not the exact key-entry error.

</details>

</div>

## The readings hidden behind a label {#limits}

Use ordinary rounding of positive measurements: a halfway value rounds up. A mass recorded as 2.4 kg to the nearest 0.1 kg could be 2.35 kg, but not 2.45 kg. Those are the halfway points to the neighbouring labels:

$$2.35\le m<2.45.$$

The lower endpoint is included; the upper endpoint is excluded. The half-width is 0.05 kg, half of the rounding unit, not half of 2.4. This interval describes the limit from rounding alone; it does not prove an instrument has no calibration error.

![Number line from 2.30 to 2.50 kg, with a filled endpoint at 2.35 and an open endpoint at 2.45 joined by a highlighted segment. The recorded label 2.4 is at the centre.](/assets/img/igcse-number-rounding-interval.svg)

<div class="lesson-check" markdown="1">

### Read the interval {#practice-limits}

**Question:** A length is recorded as 8.2 cm to the nearest 0.1 cm. Write its error interval. Can the actual length be 8.25 cm? Explain.

<details markdown="1">
<summary>Hint</summary>

Find the halfway points to the two neighbouring labels.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$8.15\le L<8.25\text{ cm}.$$

8.25 cm rounds to 8.3 cm, so is excluded. Giving only 8.1 to 8.3 uses a whole rounding unit instead of half.

</details>

</div>

## combine uncertain measurements {#calculated-bounds}

For positive $a,b$ with $a_L\le a<a_U$ and $b_L\le b<b_U$, ask how the result changes when one input increases. A sum increases with either input; a difference decreases when the subtracted input increases. A product increases with either positive factor. For a quotient, a larger positive denominator makes the result smaller:

$$a_L+b_L\le a+b<a_U+b_U,$$

$$a_L-b_U<a-b<a_U-b_L,$$

$$a_Lb_L\le ab<a_Ub_U,$$

$$\frac{a_L}{b_U}<\frac ab<\frac{a_U}{b_L}\quad\text{provided }b_L>0.$$

These endpoint rules assume the stated positive, lower-included/upper-excluded intervals. A bound may be a limiting value that is never attained. If a denominator can approach zero, this quotient rule does not give finite bounds; if signs change, examine the possible products instead of applying the positive rule blindly.

<div class="worked-example" markdown="1">

### A capacity that must be safe {#example-bounds}

**Question:** A shelf supports a load recorded as 50 kg to the nearest kilogram. Each identical box has mass recorded as 3 kg to the nearest kilogram. Using only these rounding intervals, find the largest number of boxes guaranteed to stay within the load limit.

The capacity could be as low as 49.5 kg; each box could be almost 3.5 kg. A guarantee must cope with that combination, not the favourable combination of a stronger shelf and lighter boxes.

$$49.5\le C<50.5,\qquad2.5\le m<3.5.$$

$$\frac{49.5}{3.5}=14.142857\ldots.$$

Try whole numbers on either side:

$$14\times3.5=49<49.5,\qquad15\times3.5=52.5>49.5.$$

**14 boxes** are guaranteed by this model. To show that 15 cannot be guaranteed, choose allowed values: 15 boxes of 3.4 kg total 51 kg, which exceeds a capacity of 49.5 kg. This is a mathematical rounding model, not a substitute for an actual engineering safety rating.

</div>

<div class="lesson-check" markdown="1">

### Use both measurements {#practice-bounds}

**Question:** A rectangle has length 12 cm and width 5 cm, each rounded to the nearest centimetre. Find lower and upper bounds for its area, for length plus width and for length minus width. Find lower and upper bounds for length divided by width, and state whether each bound is attained.

<details markdown="1">
<summary>Hint</summary>

Draw each input interval. For a quotient, change the denominator in the opposite direction to the numerator.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$11.5\le L<12.5,\qquad4.5\le W<5.5.$$

$$51.75\le A<68.75\text{ cm}^2.$$

$$16\le L+W<18\text{ cm},\qquad6<L-W<8\text{ cm}.$$

The area and sum lower bounds are attained when both dimensions are at their included lower endpoints; their upper bounds are not. Neither difference bound is attained: the minimum difference needs the excluded upper width, and the maximum needs the excluded upper length.

$$\frac{23}{11}<\frac LW<\frac{25}{9}.$$

The quotient bounds are about 2.0909 and 2.7778. Neither is attained: each needs one excluded upper endpoint. Using 12/5 alone ignores the rounding intervals; using 12.5/5.5 for the upper bound makes both inputs larger, which does not maximise the quotient.

</details>

</div>

## Repair the particular mistake {#retry}

If decimal places and significant figures became mixed, reread [rounding](#rounding). If endpoints were wrong, return to [the interval](#limits). If a quotient or capacity went wrong, explain which input should increase in [the bounds example](#calculated-bounds). Close the old solution before retrying.

<div class="lesson-check" markdown="1">

### Retry the digits {#retry-rounding}

**Question:** Round 0.006057 to 2 significant figures and to 4 decimal places. Estimate 59.8 divided by 0.203, then give its value to 3 significant figures.

<details markdown="1">
<summary>Hint</summary>

Do not count leading zeros as significant figures; use 60 and 0.2 for the estimate.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$0.006057\approx0.0061\quad(2\text{ s.f.}),\qquad0.006057\approx0.0061\quad(4\text{ d.p.}).$$

$$59.8\div0.203\approx60\div0.2=300,\qquad59.8\div0.203=294.581\ldots\approx295.$$

Dividing by a number below 1 increases the result; an answer near 3 fails the scale check.

</details>

</div>

<div class="lesson-check" markdown="1">

### Retry the interval {#retry-limits}

**Question:** A positive mass is recorded as 0.060 kg to the nearest 0.001 kg. Write the interval and explain whether 0.0605 kg belongs.

<details markdown="1">
<summary>Hint</summary>

Half the rounding unit is 0.0005 kg.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$0.0595\le m<0.0605\text{ kg}.$$

0.0605 kg would round to 0.061 kg, so is excluded. The final zero in the recorded value indicates the thousandths place.

</details>

</div>

<div class="lesson-check" markdown="1">

### Retry the guarantee {#retry-bounds}

**Question:** A tank capacity is 20 litres to the nearest litre. Every bottle holds 0.8 litres to the nearest 0.1 litre. What is the largest number of full bottles whose total contents are guaranteed to fit? Also give bounds for the sum and difference of two positive lengths recorded as 8 cm and 3 cm, each to the nearest centimetre. If these are the sides of a rectangle, give bounds for its area and explain whether each endpoint can be attained.

<details markdown="1">
<summary>Hint</summary>

Use the smallest tank and largest bottle. For a difference, the second length is subtracted. For area, decide how increasing either positive side changes the product.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$19.5\le C<20.5,\qquad0.75\le b<0.85,\qquad19.5\div0.85=22.941176\ldots.$$

22 bottles fit; 23 cannot be guaranteed. For example, 23 bottles of 0.849 litres exceed 19.5 litres.

$$7.5\le x<8.5,\quad2.5\le y<3.5,\quad10\le x+y<12,\quad4<x-y<6.$$

The sum can attain 10. Neither difference endpoint is attained, because each needs an excluded upper endpoint.

For the rectangle, both sides are positive, so increasing either increases the area:

$$7.5\times2.5\le A<8.5\times3.5,\qquad18.75\le A<29.75\text{ cm}^2.$$

The lower area 18.75 is attained when both sides are at their included lower endpoints. The upper value 29.75 is a bound, not an attainable maximum: both upper side endpoints are excluded. Multiplying the recorded lengths gives only one possible area, not its full interval.

</details>

</div>

## Use accuracy inside another topic {#next-step}

Continue to [percentage change](/igcse/mathematics/percentage-change/#start). After that topic, return to [mixed number review](/igcse/mathematics/mixed-review/#number-review) and explain when an approximate answer is enough and when a guarantee needs bounds.

## Scope and sources {#sources}

<details markdown="1">
<summary>Scope, tier and reference reading</summary>

N11: rounding, estimation, interpreting limits, and calculating and using upper and lower bounds. N10: numerical input and checking, not model-specific calculator instructions.

[OxfordAQA 9260 specification v5.1, PDF pp.12–13](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-gcse-mathematics-specification.pdf).

9260/2C, **Specimen 2018**, Q9: [QP PDF p.8](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92602C-international-gcse-mathematics-specimen-paper-2016-v1.pdf#page=8), [MS PDF p.5](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92602C-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=5).

9260/2E, **Specimen 2018**, Q24: [QP PDF p.21](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92602E-international-gcse-mathematics-specimen-paper-2016-v1.pdf#page=21), [MS PDF p.14](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92602E-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=14).

The paired pages above informed the teaching; no official question is reproduced here. All examples and tasks are self-written, with no official marks. Contexts and diagram data are constructed for learning.

</details>
