---
layout: subjects
title: Mixed and later review
mathjax: true
grade: igcse
subject: igcse-mathematics
reading_layout: true
study_page: true
toc_headings: h2
permalink: /igcse/mathematics/mixed-review/
---

[IGCSE Mathematics](/igcse/mathematics/#review-route)
{:.lesson-meta}

## Choose for yourself {#start}

These questions do not name the method in advance. Try a branch after learning its topics, on paper before opening help. Record any hint you use so you know what still needs support. All questions and situations here are self-written, with no official marks. Attempt each branch after studying the matching lessons.

<span id="practice"></span>

## Quantities and decisions {#number-review}

<div class="lesson-check" markdown="1">

### The school garden {#garden}

**Question:** A rectangular garden is 6 cm by 4 cm on a plan with scale 1:200. A pond covers $3/8$ of the real garden. The rest needs turf costing 15 yuan per square metre before a 12% discount. Find the amount paid for the turf. Show how you use the plan.

<details markdown="1">
<summary>Hint</summary>

Start with real lengths, not the area scale. Which area needs turf?

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$6\times200=1200\text{ cm}=12\text{ m},\qquad4\times200=800\text{ cm}=8\text{ m}.$$

$$A=12\times8=96\text{ m}^2,\qquad A_{\text{turf}}=96\left(1-\frac38\right)=60\text{ m}^2.$$

$$\text{Cost}=60\times15\times(1-0.12)=792\text{ yuan}.$$

Scale changes lengths first. The pond is part of the original area, and the discount is part of the original price. A discounted price must be below 900 yuan. Multiplying the plan area by 200 would give the wrong area scale.

If you scaled area as though it were a length, revisit [scale drawings](/igcse/mathematics/constructions-loci-and-bearings/#scale-measure) and try [the length retry](/igcse/mathematics/constructions-loci-and-bearings/#retry-map), then [a new plan task](#retry-map-area) to check how both lengths affect area. If you used the wrong whole, revisit [finding a part](/igcse/mathematics/fractions-decimals-and-percentages/#find-part) and [retry that choice](/igcse/mathematics/fractions-decimals-and-percentages/#retry-part). For a discount error, revisit [multipliers](/igcse/mathematics/percentage-change/#multipliers) and [retry the change](/igcse/mathematics/percentage-change/#retry-change).

</details>

</div>

<div class="lesson-check" markdown="1">

### A delivery decision {#board}

**Question:** A rectangular board is measured as 2.4 m by 1.8 m, each correct to the nearest 0.1 m. A supplier says that 4.4 square metres of covering will definitely cover it without overlap or waste. Is that guarantee justified? Explain using the possible area.

<details markdown="1">
<summary>Hint</summary>

Both lengths are positive. Find the smallest and largest possible products.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$2.35\le l<2.45,\qquad1.75\le w<1.85.$$

$$2.35(1.75)\le A<2.45(1.85),\qquad4.1125\le A<4.5325\text{ m}^2.$$

The guarantee is not justified: some permitted areas exceed 4.4. For example, lengths 2.44 m and 1.84 m both round as stated but give 4.4896 square metres. The nominal product alone cannot establish a guarantee.

For wrong endpoints, revisit [rounding intervals](/igcse/mathematics/accuracy-and-bounds/#limits) and [retry the interval](/igcse/mathematics/accuracy-and-bounds/#retry-limits). If you used the displayed product as a guarantee, revisit [combining bounds](/igcse/mathematics/accuracy-and-bounds/#calculated-bounds) and [retry a guarantee](/igcse/mathematics/accuracy-and-bounds/#retry-bounds).

</details>

</div>

## Relationships and restrictions {#algebra-review}

<div class="lesson-check" markdown="1">

### Tickets for an event {#tickets}

**Question:** An event sells 32 tickets. Adult tickets cost 8 yuan and student tickets cost 5 yuan. The total income is 199 yuan. How many tickets of each type were sold? Define your unknowns and check both totals.

<details markdown="1">
<summary>Hint</summary>

Represent both the number of tickets and the income. The same unknowns appear in both.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$a+s=32,\qquad8a+5s=199.$$

$$s=32-a,\qquad8a+5(32-a)=199,\qquad3a=39.$$

$$a=13,\qquad s=19,\qquad13+19=32,\qquad8(13)+5(19)=199.$$

There are 13 adult and 19 student tickets. Checking only the total number is not enough: the income must also agree. Non-integer or negative answers would not fit counts of tickets.

If the income equation was wrong, revisit [building an equation](/igcse/mathematics/equations-and-inequalities/#model) and [retry the equations](/igcse/mathematics/equations-and-inequalities/#retry-equations). If the pair did not satisfy both conditions, revisit [simultaneous equations](/igcse/mathematics/quadratics-and-simultaneous-equations/#simultaneous) and [retry the pair](/igcse/mathematics/quadratics-and-simultaneous-equations/#retry-simultaneous).

</details>

</div>

<div class="lesson-check" markdown="1">

### A restricted rule {#restricted}

**Question:** For $f(x)=x^2-4x+1$ with domain $x\ge2$, find its range and an expression for $f^{-1}(x)$, stating the inverse domain. Then solve $f(x)=6$ within the stated domain.

<details markdown="1">
<summary>Hint</summary>

Write the quadratic so its lowest value and the side of its vertex are clear. Undo the operations using the allowed side.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$f(x)=(x-2)^2-3,\qquad x\ge2,\qquad f(x)\ge-3.$$

$$y+3=(x-2)^2,\qquad x-2=\sqrt{y+3},\qquad x=2+\sqrt{y+3}.$$

$$f^{-1}(x)=2+\sqrt{x+3},\qquad x\ge-3.$$

$$f(x)=6\ \Longrightarrow\ (x-2)^2=9\ \Longrightarrow\ x=-1\text{ or }5.$$

$$x\ge2\ \Longrightarrow\ x=5,\qquad f(5)=25-20+1=6.$$

The range is all values at least minus 3. The positive square root is required because the original input is at least 2. The inverse takes outputs of the original function as its inputs. The candidate minus 1 is excluded by the original domain.

If you retained both square-root branches, revisit [undoing a restricted function](/igcse/mathematics/functions-and-graphs/#inverse) and [retry the inverse](/igcse/mathematics/functions-and-graphs/#retry-inverse). Check the allowed inputs before accepting a candidate.

</details>

</div>

## Shapes and direction {#geometry-review}

<div class="lesson-check" markdown="1">

### Two solid models {#models}

**Question:** A cuboid is 4 cm long, 3 cm wide and 2 cm high. A similar cuboid has every length multiplied by 1.5. Find the volume and total surface area of each. Explain why the same multiplier cannot be used for all three quantities.

<details markdown="1">
<summary>Hint</summary>

An area combines two lengths; a volume combines three. Account for all six faces.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$V=4\times3\times2=24\text{ cm}^3,\qquad S=2(4\times3+4\times2+3\times2)=52\text{ cm}^2.$$

$$V_{\text{new}}=24(1.5)^3=81\text{ cm}^3,\qquad S_{\text{new}}=52(1.5)^2=117\text{ cm}^2.$$

Length uses one scale factor, area two and volume three. As a check, the new dimensions are 6 cm, 4.5 cm and 3 cm; multiplying those lengths gives the same volume.

If you multiplied area or volume by 1.5 only once, revisit [length, area and volume scaling](/igcse/mathematics/units-area-and-volume/#scaling) and [retry the scale](/igcse/mathematics/units-area-and-volume/#retry-scale). For missing faces, revisit [prisms and surfaces](/igcse/mathematics/units-area-and-volume/#prisms) and [retry the prism](/igcse/mathematics/units-area-and-volume/#retry-prism).

</details>

</div>

<div class="lesson-check" markdown="1">

### The return journey {#journey}

**Question:** A walker travels 4 km due east and then 3 km due north. Draw and label a sketch. Find the straight-line distance back to the starting point and the three-figure bearing of the starting point from the finishing point, to the nearest degree.

<details markdown="1">
<summary>Hint</summary>

Mark north at the finishing point. A bearing starts there and is measured clockwise from north.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$d^2=4^2+3^2=25,\qquad d=5\text{ km}.$$

At finish F, let $\theta$ be the angle from the southward ray towards the southwest return FS. The 4 km horizontal side is opposite this angle; the 3 km vertical side is adjacent. For the bearing, turn clockwise from north to south first, then through this angle.

$$\tan\theta=\frac43,\qquad\theta\approx53.13^\circ,\qquad\text{bearing}=180^\circ+\theta\approx233^\circ.$$

![Return-journey solution: start S is 4 km west and 3 km south of finish F; a north arrow at F and the southwest return are shown.](/assets/img/igcse-review-return-journey.svg)

The return direction is southwest, so the bearing must lie between 180 and 270 degrees. A labelled right triangle should show 4 km horizontally and 3 km vertically. The reverse journey is not on the outward bearing.

If the angle began at the wrong direction, revisit [bearings](/igcse/mathematics/constructions-loci-and-bearings/#bearings) and [retry the bearing](/igcse/mathematics/constructions-loci-and-bearings/#retry-bearing). For a wrong triangle ratio, revisit [opposite and adjacent sides](/igcse/mathematics/pythagoras-and-trigonometry/#ratios) and [retry the ratio](/igcse/mathematics/pythagoras-and-trigonometry/#retry-ratios).

</details>

</div>

## Evidence from data {#data-review}

<div class="lesson-check" markdown="1">

### Comparing waiting times {#times}

**Question:** Two small samples of waiting times in minutes are A: 2, 3, 3, 4, 8 and B: 3, 3, 4, 5, 5. Find each mean, median and range. A student says, “B is always faster because its times vary less.” Assess the statement using the data and state a limitation of the samples.

<details markdown="1">
<summary>Hint</summary>

A statement about spread is different from one about typical time. What does “always” claim?

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\overline{x}_A=\frac{20}{5}=4,\qquad\operatorname{median}_A=3,\qquad\operatorname{range}_A=8-2=6.$$

$$\overline{x}_B=\frac{20}{5}=4,\qquad\operatorname{median}_B=4,\qquad\operatorname{range}_B=5-3=2.$$

B is less variable in these samples, but its median is higher and its mean is the same. Smaller spread does not mean always faster. These are only five observations per group; we do not know whether they represent the usual times or how they were sampled.

If smaller spread became a claim about every individual, revisit [what averages and range say](/igcse/mathematics/data-and-averages/#averages) and [retry the comparison](/igcse/mathematics/data-and-averages/#retry-averages). Keep the sample limitation in your conclusion.

</details>

</div>

<div class="lesson-check" markdown="1">

### Clubs and selection {#clubs}

**Question:** Of 20 students, 8 cycle, 12 swim and 5 do both. Draw a Venn diagram including students who do neither. One student is chosen at random from those who cycle. Find the probability that this student swims. Are cycling and swimming independent for a random student from all 20? Justify your answer.

<details markdown="1">
<summary>Hint</summary>

Fill the overlap first. The first selection is from a smaller group; the independence check uses all students.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$n(C\setminus S)=8-5=3,\quad n(S\setminus C)=12-5=7,\quad n((C\cup S)^{\prime})=20-(3+5+7)=5.$$

$$P(S\mid C)=\frac58,\qquad P(C\cap S)=\frac5{20}=\frac14.$$

$$P(C)P(S)=\frac8{20}\frac{12}{20}=\frac6{25}\ne\frac14.$$

![Solution Venn diagram: cycling only 3, both 5, swimming only 7, neither 5; the cycling group contains 8.](/assets/img/igcse-review-clubs.svg)

The Venn regions are 3 cycle only, 5 both, 7 swim only and 5 neither. The conditional denominator is 8. The events are not independent: the product condition does not hold. The data are constructed for this task, not a school survey.

For a denominator of 20 in the conditional question, revisit [the known group](/igcse/mathematics/combined-and-conditional-probability/#conditional-table) and [retry conditioning](/igcse/mathematics/combined-and-conditional-probability/#retry-conditional). If you assumed independence, revisit [its test](/igcse/mathematics/combined-and-conditional-probability/#independence) and [judge independence from new data](/igcse/mathematics/combined-and-conditional-probability/#practice-independent-table).

</details>

</div>

## Return after other study {#later-review}

<div class="lesson-check" markdown="1">

### Later check A {#later-price}

**Question:** A price rises by 20% and then falls by 20%. The final price is 96 yuan. Find the original price and explain whether the two changes cancel.

<details markdown="1">
<summary>Hint</summary>

Keep track of which price each percentage uses. Work backwards only after describing both changes.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$P\times1.2\times0.8=96,\qquad0.96P=96,\qquad P=100.$$

They do not cancel: the decrease uses the higher intermediate price, so the final price is 4% below the original. The original price is 100 yuan. Check the intermediate price is 120 yuan, then subtract 24 yuan.

If you subtracted a percentage from the final price to reverse the change, revisit [working backwards](/igcse/mathematics/percentage-change/#reverse) and [retry a reverse percentage](/igcse/mathematics/percentage-change/#retry-reverse). Each multiplier refers to the amount before that change.

</details>

</div>

<div class="lesson-check" markdown="1">

### Later check B {#later-extension}

**Question:** The curve $y=x^3-3x$ has stationary points. Find and classify them by checking the sign of the gradient on each side, then state the equation of its tangent at $x=0$. Explain why a zero gradient does not always mean a maximum or minimum, using $y=x^3$.

<details markdown="1">
<summary>Hint</summary>

A stationary point has zero gradient, but its type depends on what the curve does before and after it.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\frac{dy}{dx}=3x^2-3=3(x-1)(x+1),\qquad x=-1,1.$$

$$y(-1)=2,\qquad y(1)=-2.$$

$$x<-1:\ y^{\prime}>0;\quad-1<x<1:\ y^{\prime}<0;\quad x>1:\ y^{\prime}>0.$$

$$y(0)=0,\qquad y^{\prime}(0)=-3,\qquad\text{tangent: }y=-3x.$$

$$y=x^3:\quad y^{\prime}=3x^2,\qquad y^{\prime}(0)=0,\qquad y^{\prime}>0\text{ on both sides of }0.$$

At minus 1 the gradient changes from positive to negative, giving a maximum at (minus 1, 2). At 1 it changes from negative to positive, giving a minimum at (1, minus 2). The cubic example at the origin is a stationary inflection: it keeps increasing across the point, while its bending changes. A sketch should agree with these changes.

If zero gradient automatically became a turning point, revisit [classifying stationary points](/igcse/mathematics/differentiation-and-motion/#stationary) and [retry classification](/igcse/mathematics/differentiation-and-motion/#retry-stationary). For a tangent with the wrong intercept, revisit [point and slope](/igcse/mathematics/differentiation-and-motion/#tangent) and [retry the tangent](/igcse/mathematics/differentiation-and-motion/#retry-tangent).

</details>

</div>

## What to do after a mistake {#retry}

Decide whether the difficulty was the reference amount, a missing condition, method choice, interpreting a diagram or arithmetic. Each solution links to its topic. Revisit the explanation, close the solution and try that lesson’s new retry; copying this answer is not a new attempt.

<div class="lesson-check" markdown="1">

### Retry a plan {#retry-map-area}

**Question:** A rectangular lawn has perimeter 12 cm on a plan, and one side is 4 cm long on the plan. The scale is 1:500. Find the real area of the lawn in square metres and explain how you use the scale.

<details markdown="1">
<summary>Hint</summary>

Use the perimeter to find the other plan length, then convert each length separately.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$2(4+w)=12,\qquad w=2\text{ cm}.$$

$$4\times500=2000\text{ cm}=20\text{ m},\qquad2\times500=1000\text{ cm}=10\text{ m}.$$

$$A=20\times10=200\text{ m}^2.$$

The plan area is 8 square centimetres. The scale acts on both lengths, so multiplying 8 by 500 just once is wrong. Check by dividing 20 m and 10 m separately by 500: they return to 4 cm and 2 cm on the plan. If this still feels unclear, revisit [units and plane area](/igcse/mathematics/units-area-and-volume/#flat-shapes), then redraw and check both lengths.

</details>

</div>

## Your next step {#next-step}

After studying another branch, return to the [later checks](#later-review) without rereading the solutions first. For a systematic recap, return to the [course route](/igcse/mathematics/#learning-start).

## Scope and sources {#sources}

<details markdown="1">
<summary>Scope details</summary>

Based on OxfordAQA 9260 v5.1, connecting N11, N13–N20; A9, A11, A13–A15, A21–A22; G12, G14, G17, G19; and S5, S7, S16–S18 through retrieval across topics. All tasks are self-written; they do not replace an official complete paper. Topic lessons identify the teaching scope and official source materials.

</details>
