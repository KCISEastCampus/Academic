---
layout: subjects
title: "Statistical diagrams: choose, draw and question"
mathjax: true
grade: igcse
subject: igcse-mathematics
permalink: /igcse/mathematics/statistical-diagrams/
reading_layout: true
study_page: true
toc_headings: "h2"
---

## What should the picture show? {#start}

A useful diagram helps answer a question: compare categories, follow change, or see how numerical values are spread. A neat picture with the wrong scale can give the wrong impression.

You need fractions, angles in a full turn ($360^\circ$), coordinates and [frequency tables](/igcse/mathematics/data-and-averages/#frequency). Work on paper. All examples, data and tasks here are **self-written, with no official marks**. They are constructed data, not observations of real students.

Begin with records, categories, time and paired data. Then use areas to handle unequal intervals, followed by cumulative frequency and box plots. Each step builds on the earlier reading and drawing skills.

## Keep the records visible {#recording}

A **tally chart** records one stroke per observation, collecting strokes in fives so counting is easy. A **pictogram** replaces a stated number of observations by one symbol. Its key matters: one full dot might mean 2 people, so half a dot means 1, not half a person.

Here are three views of the same constructed choices:

| Choice | Tally (a group of five shown as 5 strokes) | Frequency | Pictogram: ● = 2 people |
| --- | --- | ---: | --- |
| Walk | &#124;&#124;&#124;&#124;╱ &#124; | 6 | ●●● |
| Bus | &#124;&#124;&#124;&#124; | 4 | ●● |
| Cycle | &#124;&#124; | 2 | ● |

When drawing tallies, cross the fifth stroke through the previous four. Do not enlarge icons to represent a larger number: count equal-sized icons using the key.

A **stem-and-leaf diagram** keeps the original numerical values while organising them. For 12, 15, 18, 20, 20, 27, 31 cm:

| Stem | Ordered leaves |
| --- | --- |
| 1 | 2 5 8 |
| 2 | 0 0 7 |
| 3 | 1 |

Key: $2\mid0=20$ cm. The stem is the tens and the leaf the units. Repeated leaves are separate observations, not errors. Include a key and order leaves within each stem. Empty stems should be retained if needed to show a gap.

<div class="lesson-check" markdown="1">

### Make records readable {#practice-recording}

**Question:** Draw a tally chart and a pictogram for Red 7, Blue 4, Green 3, using one full symbol for 2 votes. Then make an ordered stem-and-leaf diagram for lengths 12, 15, 15, 21, 24, 28, 30, 31 cm, with a key. Read the median from it.



<details markdown="1">
<summary>Hint</summary>

Use groups of five tallies. Half a pictogram symbol represents one vote. Count the middle positions in the ordered lengths.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Tallies: Red one group of five plus two; Blue four strokes; Green three strokes. Frequencies total 14. A valid pictogram with key ● = 2 votes is Red ●●●◐, Blue ●●, Green ●◐; explicitly define ◐ as one vote. Stem 1 has leaves 2 5 5; stem 2 has 1 4 8; stem 3 has 0 1. Key $1\mid2=12$ cm. Median is $(21+24)/2=22.5$ cm. Keeping the repeated 15 gives eight leaves; dropping it would change the median.

</details>

</div>

## Compare categories {#categories}

A **bar chart** compares category frequencies. Use equal-width bars, gaps between categories, a frequency axis starting at zero, and a label for each category. Reordering categories is usually possible because the gaps do not represent numerical intervals.

![Bar chart for constructed choices: Walk 6, Bus 4, Cycle 2 people.](/assets/img/igcse-statistics-bar.svg)

A **dual bar chart** puts two series next to each other; a **composite (stacked) bar chart** puts them on top of each other. A key identifies both groups. In a composite chart, the upper segment's value is its **height difference**, not its top coordinate.

![Dual bars: A attendance 4, 6, 5; B attendance 6, 3, 7 on Monday, Tuesday, Wednesday.](/assets/img/igcse-statistics-dual.svg)

![The same attendance shown as stacked bars. Daily totals are 10, 9 and 12.](/assets/img/igcse-statistics-composite.svg)

For Tuesday, the stacked bar rises from 6 to 9 for B, so B has $9-6=3$ people, not 9. Dual bars make A/B comparisons easy; stacking makes daily totals easy. A percentage composite chart has every full bar at 100%: it compares shares, not absolute total sizes.

<div class="worked-example" markdown="1">

### A complete example: divide one circle {#example-pie}

**Question:** Construct a pie chart for Walk 6, Bus 4 and Cycle 2 out of 12 people.

A **pie chart** shows parts of one whole. A full turn is $360^\circ$, so multiply each fraction by 360:

$$\text{sector angle}=\frac{\text{frequency}}{\text{total frequency}}\times360^\circ.$$

For the travel choices, total 12: Walk $6/12\times360^\circ=180^\circ$, Bus $4/12\times360^\circ=120^\circ$, Cycle $2/12\times360^\circ=60^\circ$. Draw a circle, a starting radius and each angle at the centre using a protractor; label sectors and give the total.

![Constructed travel pie chart: Walk 180 degrees, Bus 120 degrees, Cycle 60 degrees; total 12 people.](/assets/img/igcse-statistics-pie.svg)

Check that the angles total $360^\circ$. Equal-looking sectors from different pies need not mean equal numbers when the pies represent different totals.

</div>

<div class="lesson-check" markdown="1">

### Choose and construct {#practice-categories}

**Question:** For Monday, Tuesday and Wednesday, attendance is A: 5, 3, 7 and B: 2, 6, 5. Draw a dual and a composite bar chart. Identify the day with the greatest total and every day when A exceeds B. Separately draw a pie chart for Walk 9, Bus 7, Cycle 4 out of 20 people. Which display would you choose for A/B comparison, and which for travel shares?

<details markdown="1">
<summary>Hint</summary>

Use a common scale and calculate all sector angles before drawing.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Use equal-width bars, zero baseline, common scale and a key. A bar heights are 5,3,7; B 2,6,5. Composite totals are 7,9,12; the B segments must have heights 2,6,5, not be read as their top coordinates.

![Solution dual chart for the new attendance data.](/assets/img/igcse-statistics-dual-check.svg)

![Solution composite chart for the same new data.](/assets/img/igcse-statistics-composite-check.svg)

Wednesday has the greatest total, 12. A exceeds B on Monday and Wednesday. Pie angles are $9/20\times360^\circ=162^\circ$, $7/20\times360^\circ=126^\circ$, $4/20\times360^\circ=72^\circ$:

![Solution pie chart: 20 people, sectors 162,126,72 degrees.](/assets/img/igcse-statistics-pie-check.svg)

The angles total $360^\circ$. Dual bars make A/B comparisons easier; a pie displays shares of one whole. A pie combining all days would lose the daily comparison.

</details>

</div>

## Follow a change over time {#time}

A **line graph** connects observations in time order. Plot time on a correctly spaced horizontal axis, the measured quantity vertically, and join successive points. Here club attendance was 8, 12, 10 and 16 in weeks 1, 2, 3, 4:

![Constructed attendance line graph: weeks 1 to 4 have 8,12,10,16 people.](/assets/img/igcse-statistics-line.svg)

The fall from week 2 to 3 is $12-10=2$ people. The joining segment shows a trend between recorded times; it does not prove that attendance changed at a constant rate during the whole week.

<div class="lesson-check" markdown="1">

### Account for the missing interval {#practice-time}

**Question:** Temperatures at 08:00, 09:00, 11:00 and 12:00 are 12, 15, 14 and 18 °C. Draw an appropriate graph and describe the change from 09:00 to 11:00. Explain why equally spacing all four times would mislead.



<details markdown="1">
<summary>Hint</summary>

The gap from 09:00 to 11:00 is twice the other gaps.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Use a line graph with points (8,12), (9,15), (11,14), (12,18), with time in hours and temperature in °C. Join successive points; the horizontal 9–11 gap must be twice 8–9 or 11–12. Temperature falls by 1 °C over two hours. Equal gaps would distort rates of change. Values between the records remain unknown.

</details>

</div>

## Show grouped numerical values {#grouped-graphs}

A bar chart's gaps separate categories. A **histogram** instead places intervals along a numerical scale: touching rectangles represent neighbouring intervals. With equal widths, bar height can be frequency because all widths have the same factor.

| Time $t$ (min) | Frequency |
| --- | ---: |
| $0\le t<10$ | 4 |
| $10\le t<20$ | 8 |
| $20\le t<30$ | 6 |
| $30\le t<40$ | 2 |

![Equal-width histogram of constructed times with interval boundaries 0,10,20,30,40 and heights 4,8,6,2.](/assets/img/igcse-statistics-equal-histogram.svg)

Use the **boundaries** for a histogram. For a **frequency polygon**, use the **midpoints**: (5,4), (15,8), (25,6), (35,2), and join successive points with straight lines. This represents the same grouped frequencies in another way. Do not use cumulative totals here. Add zero-frequency end groups only if the question's convention calls for them; do not invent extra observations.

![Frequency polygon through midpoints 5,15,25,35 min with frequencies 4,8,6,2.](/assets/img/igcse-statistics-polygon.svg)

A polygon makes comparing frequency patterns convenient, but groups with different totals may need proportions before comparisons are fair.

<div class="lesson-check" markdown="1">

### Draw the same data two ways {#practice-grouped}

**Question:** Lengths 0 ≤ l < 5, 5 ≤ l < 10, 10 ≤ l < 15, 15 ≤ l < 20 cm have frequencies 2, 6, 8, 4. Draw an equal-width histogram and a frequency polygon. Find the number with l < 10 and explain why connecting the upper-right corners of the histogram is not the required polygon.



<details markdown="1">
<summary>Hint</summary>

A histogram uses interval boundaries; a polygon pairs each midpoint with that class frequency.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Histogram: four touching rectangles with boundaries 0,5,10,15,20 cm and frequency heights 2,6,8,4; equal widths 5. Polygon: (2.5,2), (7.5,6), (12.5,8), (17.5,4), joined with straight segments. Both axes need linear scales, units and labels. There are $2+6=8$ lengths below 10 cm. Upper-right corners use upper boundaries rather than midpoints, shifting the entire pattern right. Total frequency is 20.

</details>

</div>

## Are two variables related? {#scatter}

A **scatter graph** uses one point for each pair of measurements. It does not show a time sequence unless time actually is one variable. Do not join points one after another.

Points tending upwards show **positive correlation**; downwards, **negative correlation**. **Strong** means points lie close to a common trend; **weak** means a looser trend, not a shallow slope. **No correlation** means no clear association in this plot. A curved relationship can exist even without a straight-line trend.

For constructed practice hours and scores, the pairs are (1,3), (2,4), (3,4), (4,6), (5,7), (6,8). Draw axes and plot all six pairs. The trend is positive and fairly strong.

![Constructed scatter graph of six practice-hour/score pairs with an illustrative dashed eye-fit line.](/assets/img/igcse-statistics-scatter.svg)

A **line of best fit by eye** follows the centre of the cloud, with points roughly balanced above and below. Do not force it through the origin or merely join the first and last point. The illustrated line follows about $y=x+2$; at 3.5 hours it estimates about 5.5 out of 12. Other sensible eye-fits can differ a little.

An estimate **within** the observed horizontal range is interpolation. Extending the trend **outside** it is extrapolation and is less dependable: scores cannot increase without limit. Correlation does not prove practice caused the score difference; prior knowledge or other factors may affect both.

<div class="lesson-check" markdown="1">

### Plot, estimate and qualify {#practice-scatter}

**Question:** Distance x (km) and time remaining y (min) give pairs (1,9), (2,8), (3,8), (4,6), (5,5), (6,4). Draw the scatter graph and a line of best fit by eye. Describe direction and strength; estimate y at x = 3.5. Comment on predicting y at x = 20 and on claiming that changing x alone causes the change in y.



<details markdown="1">
<summary>Hint</summary>

Plot paired observations, not two separate lists. Keep the line near the centre of the cloud.

</details>

<details markdown="1">
<summary>Solution and check</summary>

One suitable construction is:

![Solution scatter graph: six downward-trending pairs and one reasonable dashed best-fit line.](/assets/img/igcse-statistics-scatter-check.svg)

The correlation is strong negative. The illustrated line is about $y=10.5-x$, giving about 7 min at 3.5 km; about 6.5–7.5 min is reasonable for a sensible eye-fit. At 20 km this line would give a negative remaining time, so the extrapolation fails; 20 lies far beyond 1–6 km. An association alone does not prove causation. Axes, all six points and a balanced straight line are part of the answer, not just the estimate.

</details>

</div>

<div class="lesson-check" markdown="1">

### Compare different point patterns {#practice-patterns}

**Question:** On separate axes plot datasets P: (1,1),(2,2),(3,3),(4,4); Q: (1,4),(2,3),(3,2),(4,1); R: (1,2),(2,4),(3,1),(4,3); S: (1,2),(2,8),(3,1),(4,6),(5,5). Describe the direction and strength of each linear pattern. Is a steeper line necessarily stronger correlation?

<details markdown="1">
<summary>Hint</summary>

Look at overall direction and how closely the points follow it, not just slope.

</details>

<details markdown="1">
<summary>Solution and check</summary>

P has perfect positive linear correlation; Q perfect negative. R has no clear linear correlation. S has a weak positive overall tendency with wide scatter. Plot each set accurately and justify “weak” by the scatter. A steep line is not automatically a strong relationship; P and Q have equally strong patterns with opposite directions. These small constructed examples illustrate vocabulary, not a population claim.

</details>

</div>

## When interval widths differ {#unequal-histograms}

Imagine drawing 4 people in a ten-minute interval and 8 in a twenty-minute interval. The second rectangle is twice as wide. If it is also twice as high, it looks four times as large, although there are only twice as many people.

In a **histogram**, rectangle **area represents frequency**. The horizontal axis uses the actual numerical interval boundaries, and neighbouring intervals touch. To make area equal frequency, divide by the interval width:

$$\text{frequency density}=\frac{\text{frequency}}{\text{class width}}.$$

$$\text{frequency}=\text{class width}\times\text{density}.$$

<div class="worked-example" markdown="1">

### A complete example: build areas, not just heights {#example-density}

**Question:** Construct a histogram for these illustrative journey times. Explain why the widest bar is not the tallest.

| Journey time $t$ (min) | Frequency |
| --- | ---: |
| $0\le t<10$ | 4 |
| $10\le t<20$ | 8 |
| $20\le t<40$ | 8 |

The widths are 10, 10 and 20 minutes. We choose density because frequency alone would ignore the different widths:

$$4\div10=0.4,\qquad8\div10=0.8,\qquad8\div20=0.4.$$

![Constructed journey-time histogram. Horizontal boundaries 0, 10, 20 and 40 minutes; frequency-density heights 0.4, 0.8 and 0.4 people per minute.](/assets/img/igcse-statistics-density.svg)

Use a linear horizontal scale and a vertical scale labelled frequency density. Draw rectangles across the actual intervals at the calculated heights. The last two bars have equal areas, $10\times0.8=8$ and $20\times0.4=8$, so they represent the same number of people. The wider interval needs only half the height.

Check the total from the areas: $4+8+8=20$ people. The tallest bar means greatest concentration per minute, not automatically greatest frequency.

</div>

<div class="lesson-check" markdown="1">

### Make and explain a diagram {#practice-density}

**Question:** Waiting times $w$ (min) have frequencies 6, 12 and 12 in $0\le w<5$, $5\le w<15$ and $15\le w<30$. Draw a histogram. A learner draws heights 6, 12 and 12. Explain the error and compare the numbers waiting in the last two intervals.

<details markdown="1">
<summary>Hint</summary>

Find each width from its two boundaries. Check what the area of each rectangle would represent.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$6\div5=1.2,\qquad12\div10=1.2,\qquad12\div15=0.8.$$

Draw touching rectangles across 0–5, 5–15 and 15–30, with heights 1.2, 1.2 and 0.8 on a frequency-density axis (people/min). Label the horizontal axis waiting time (min), with a linear scale. Areas are 6, 12 and 12, totalling 30. The last two intervals contain equal numbers, despite different heights. Heights 6, 12, 12 would make area proportional to frequency times width, so the picture would exaggerate wider groups.

</details>

</div>


## Add up to each boundary {#cumulative}

A **cumulative frequency** tells how many observations are below a boundary. For the journey groups in the density example, frequencies 4, 8, 8 become running totals 4, 12, 20. Plot the **upper boundaries** with those totals, starting with zero at the lower boundary:

$$(0,0),\ (10,4),\ (20,12),\ (40,20).$$

![Cumulative graph of constructed times, joining (0,0),(10,4),(20,12),(40,20) with straight segments.](/assets/img/igcse-statistics-cumulative.svg)

This example uses straight segments for linear estimates within groups. A smooth increasing curve is also used where appropriate; follow any plotting instruction. A cumulative graph never falls. Midpoints belong to frequency polygons, not to these upper-boundary totals.

There are 20 people. Read the median at $20/2=10$ on the **vertical** axis, go across to the graph and down to time. On the segment from (10,4) to (20,12), this is six eighths of a ten-minute width:

$$\text{median estimate}=10+\frac{10-4}{12-4}\times10=17.5\text{ min}.$$

Read $Q_1$ at cumulative frequency 5, $Q_3$ at 15, and the 90th percentile at 18. Linear estimates give 11.25, 27.5 and 35 min respectively; $IQR\approx16.25$ min. These are estimates, not recovered individual times.

<div class="lesson-check" markdown="1">

### Construct and read {#practice-cumulative}

**Question:** Times in consecutive intervals 0 ≤ t < 10, 10 ≤ t < 20, 20 ≤ t < 30, 30 ≤ t < 40, 40 ≤ t < 50 minutes have frequencies 4, 8, 12, 8, 8. Draw a cumulative frequency graph using straight segments. Estimate the median, quartiles, IQR, 80th percentile and number with t ≥ 35. Explain why plotting (5,4) as the first cumulative point would be wrong.



<details markdown="1">
<summary>Hint</summary>

Calculate running totals. Use 10, 20, 30 and 32 on the cumulative axis for the requested quantiles.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Running totals are 4,12,24,32,40, so plot (0,0),(10,4),(20,12),(30,24),(40,32),(50,40):

![Solution cumulative graph for the five groups, ending at (50,40).](/assets/img/igcse-statistics-cumulative-check.svg)

$$Q_1\approx10+\frac{10-4}{12-4}\times10=17.5,\quad \text{median}\approx20+\frac{20-12}{24-12}\times10\approx26.7.$$

$$Q_3\approx30+\frac{30-24}{32-24}\times10=37.5,\qquad IQR\approx20\text{ min}.$$

The 80th percentile is at $0.8\times40=32$, giving 40 min. At 35 min the cumulative estimate is 28, leaving $40-28=12$ people at least 35 min. The point (5,4) falsely says all four observations in 0–10 are below 5; use the upper boundary 10. Units are minutes for percentiles but people for the final count.

</details>

</div>

## Compare centre and spread {#box-plots}

A **box plot** shows five values: minimum, $Q_1$, median, $Q_3$, maximum. On one linear scale, draw a box from $Q_1$ to $Q_3$, a median line inside it, and whiskers to the two extremes. This lesson uses whiskers to minimum and maximum; no separate outlier rule is required.

For times 2, 4, 5, 7, 8, 10, 12, 16 min, the five-number summary is 2, 4.5, 7.5, 11, 16 using medians of halves. The box width is $11-4.5=6.5$ min; the full range is $16-2=14$ min. A box is not a bar of frequency: its width shows the spread of the middle half. Use the median to compare centres and IQR to compare middle-half spreads. Neither proves every member of one group exceeds every member of another.

<div class="lesson-check" markdown="1">

### Build the comparison {#practice-box}

**Question:** Five-number time summaries (min) are A: 2,4,6,10,20 and B: 0,6,8,10,14, listed as minimum, Q1, median, Q3, maximum. Draw comparative box plots on one scale. Compare typical time, IQR and full range. Does the longer A box mean more observations in A?



<details markdown="1">
<summary>Hint</summary>

Use the same horizontal scale. Each box represents the middle half, regardless of sample size.

</details>

<details markdown="1">
<summary>Solution and check</summary>

A suitable pair is:

![Solution comparative box plots on a common 0 to 20 minute scale, with A median 6 and B median 8.](/assets/img/igcse-statistics-box-check.svg)

A has a lower median, 6 versus 8 min. A IQR $10-4=6$ exceeds B IQR $10-6=4$ min; A full range $20-2=18$ exceeds B range $14-0=14$ min. A has a lower typical time but greater spread by both measures. Box width gives no total sample size, so it does not show more observations.

</details>

</div>

## Check without copying a model {#practice}

Choose the representation before looking back: [records and stems](#practice-recording), [category comparisons and shares](#practice-categories), [time](#practice-time), [grouped data](#practice-grouped), [paired data](#practice-scatter) and [different correlation patterns](#practice-patterns); then [density](#practice-density), [cumulative graph](#practice-cumulative), [box plots](#practice-box). A completed answer includes a labelled, correctly scaled drawing and an interpretation, not just arithmetic.

## Diagnose, then redraw {#retry}

Return to [recording](#recording) for lost leaves/keys, [categories](#categories) for stacked-height or sector errors, [time](#time) for unequal time gaps, [grouped graphs](#grouped-graphs) for boundaries versus midpoints, or [scatter](#scatter) for correlation and fitting. Then retry [A](#retry-core), [boundaries and comparisons](#retry-grouped) or [B](#retry-scatter). Area or percentile errors go back to [density](#unequal-histograms), [cumulative totals](#cumulative) or [box plots](#box-plots), then the [new histogram](#retry-density) or [C](#retry-extension). Close the original answer first.

<div class="lesson-check" markdown="1">

### Retry A: select and represent {#retry-core}

**Question:** A survey has 20 responses: Music 10, Art 6, Sport 4. Draw a tally chart, a bar chart, a pictogram with one symbol for 2 responses, and a pie chart. Separately make a stem-and-leaf diagram for 11, 13, 13, 20, 25, 32. Choose a graph for counts recorded at days 1, 2 and 5 as 4, 7, 6, and a graph for lengths grouped into equal-width intervals. Explain your choices.



<details markdown="1">
<summary>Hint</summary>

First identify category, time, or numerical interval. Each representation must keep its key or axis.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Tallies are Music two groups of five, Art a group of five plus one, Sport four strokes. Category bars have equal widths and heights 10,6,4 with gaps, frequency scale starting at zero. Pictogram Music ●●●●●, Art ●●●, Sport ●● with key ● = 2 responses. Pie angles are $10/20\times360=180^\circ$, $6/20\times360=108^\circ$, $4/20\times360=72^\circ$, total 360°. Stem 1: 1 3 3; 2: 0 5; 3: 2; key $1\mid1=11$. For time, draw a line graph through (1,4),(2,7),(5,6), with the last horizontal gap three times the first. For equal-width measured groups, draw touching histogram bars across the actual intervals; a frequency polygon would instead join midpoint/frequency pairs. Choose categories for gaps and intervals for touching widths; do not draw a time line through unrelated categories.

</details>

</div>

<div class="lesson-check" markdown="1">

### Retry B: test a claim {#retry-scatter}

**Question:** Draw a scatter graph for pairs (1,2),(2,4),(3,3),(4,6),(5,5). Describe its correlation and draw an eye-fit line. A learner says a steep line always means strong correlation and predicts 20 at x = 20. Explain what is unsupported.



<details markdown="1">
<summary>Hint</summary>

Direction comes from the trend; strength comes from closeness to that trend.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Plot all five points on labelled axes. There is positive correlation with some scatter; an eye-fit near y = x + 1 follows the centre of the cloud, giving roughly 4 at x = 3. Steepness does not measure strength. x = 20 is far outside the observed 1–5, so neither the chosen trend nor a value of 20 there is supported by this sample. Do not connect successive points.

</details>

</div>

<div class="lesson-check" markdown="1">

### Retry C {#retry-extension}

**Question:** A histogram has a bar over 10 ≤ t < 25 with density 0.6 people/min. Recover its frequency. For a separate grouped sample, cumulative points are (0,0),(10,6),(20,18),(40,24). Draw straight segments and estimate the median, Q1, Q3 and the 60th percentile, then draw an approximate box plot using interval endpoints 0 and 40 as approximate extremes. State the limitation.



<details markdown="1">
<summary>Hint</summary>

Multiply density by width. For a percentile, first find that proportion of the total cumulative frequency, then read across to the graph and down to time. Distinguish assumed endpoints from observed extremes.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Histogram frequency $(25-10)\times0.6=9$ people. Cumulative median at 12 lies halfway from (10,6) to (20,18), giving 15 min; $Q_1\approx10$, $Q_3\approx20$, $IQR\approx10$ min. Plot the four cumulative points on labelled axes. The approximate box has ends of box 10 and 20, median at 15, and whiskers to assumed 0 and 40. The actual minimum and maximum are unknown within their first/last occupied intervals, so this is not an exact raw-data box plot. State that limitation rather than inventing precise extrema.

For the 60th percentile, the total is 24, so use cumulative level $0.60\times24=14.4$, between (10,6) and (20,18). Reading across and down gives:

$$P_{60}\approx10+\frac{14.4-6}{18-6}(20-10)=17\text{ min}.$$

14.4 is a cumulative position, not a time or an observed fraction of a person. The result 17 min estimates a time below which 60% of the grouped sample lies. Straight segments assume a uniform spread within each interval; the raw observations are unknown.

</details>

</div>

<div class="lesson-check" markdown="1">

### Retry: a new histogram {#retry-density}

**Question:** Constructed journey times have frequencies 6, 9 and 10 in the intervals 0 ≤ t < 4, 4 ≤ t < 10 and 10 ≤ t < 20 minutes. Draw a histogram with labelled axes and explain how its areas recover the frequencies. A learner instead uses heights 6, 9 and 10 on a frequency-density axis. Explain the error.

<details markdown="1">
<summary>Hint</summary>

Mark the actual interval boundaries on one linear time scale. Decide which height makes width × height equal the number of people in each interval.

</details>

<details markdown="1">
<summary>Solution and check</summary>

| Interval (min) | Width (min) | Frequency | Frequency density (people/min) |
| --- | --- | --- | --- |
| $0\le t<4$ | 4 | 6 | 1.5 |
| $4\le t<10$ | 6 | 9 | 1.5 |
| $10\le t<20$ | 10 | 10 | 1 |

![Solution histogram with touching bars over 0–4, 4–10 and 10–20 minutes, with density heights 1.5, 1.5 and 1 people per minute. Their areas represent 6, 9 and 10 people.](/assets/img/igcse-statistics-density-retry-check.svg)

Draw touching rectangles with boundaries 0,4,10,20 on a time axis; their widths must be in the ratio 4:6:10. Start the frequency-density axis at zero and mark 1 and 1.5 clearly. Check areas $4\times1.5=6$, $6\times1.5=9$, $10\times1=10$, totalling 25 people. The first two bars have equal heights but different frequencies because their widths differ. Using heights 6,9,10 would give areas 24,54,100: the widths would distort the original counts. Check the width and area as well as the three heights.

</details>

</div>

<div class="lesson-check" markdown="1">

### Retry: boundaries, midpoints and stacked totals {#retry-grouped}

**Question:** Lengths in 0 ≤ l < 4, 4 ≤ l < 8, 8 ≤ l < 12 cm have frequencies 1,5,2. Draw a histogram and a frequency polygon. Separately, X attendance on days 1,2 is 3,7 and Y is 5,2. Draw dual and composite bars and state which day has the larger combined attendance.

<details markdown="1">
<summary>Hint</summary>

Use boundaries for rectangle widths and midpoints for polygon points. Stacking adds each separate height.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Draw touching histogram rectangles over 0–4,4–8,8–12, with frequency heights 1,5,2 and a labelled length axis. Polygon points are (2,1),(6,5),(10,2), joined by straight segments, not at 4,8,12. For dual bars use X heights 3,7 beside Y heights 5,2; give a key and zero baseline. For composite bars X lower segments are 3,7 and Y adds 5,2 above them; tops are 8,9. Day 2 has the larger total, even though Y alone is smaller that day. In both constructions the segment heights must preserve the original counts.

</details>

</div>

## A later decision {#next-step}

Continue to [sets and probability](/igcse/mathematics/sets-and-probability/#start). After studying another topic, return below and try [mixed data review](/igcse/mathematics/mixed-review/#data-review). If an interpretation is difficult, revisit the matching graph, not just a formula list.

<div class="lesson-check" markdown="1">

### Come back without a graph name {#later-check}

**Question:** A club wants to show (a) members choosing each of four activities, (b) attendance over six months, (c) paired height and arm span, and (d) grouped journey times. Choose suitable displays and justify the choice. A second club has twice as many members but the same activity percentages. What would stay the same and what would change in its activity charts?



<details markdown="1">
<summary>Hint</summary>

Match the structure of each dataset to the purpose of the display.

</details>

<details markdown="1">
<summary>Solution and check</summary>

(a) Bar chart for category counts, or pie for shares of a whole; (b) line graph in time order; (c) scatter graph with one point per person; (d) histogram for numerical intervals, or a frequency polygon to compare grouped patterns. With twice the total and the same percentages, pie angles and percentage-bar shares stay the same, while count-bar heights double on the same count scale. Thus identical pies cannot establish identical group sizes.

</details>

</div>

## Scope and sources {#sources}

<details markdown="1">
<summary>Official scope and examples actually read</summary>

OxfordAQA International GCSE Mathematics **9260 v5.1**, printed pp.24–26 (PDF pp.23–25), S4–8, with S5 percentile work. [Official specification](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-gcse-mathematics-specification.pdf#page=23). The page moves from basic records and displays to unequal-width histograms, cumulative frequency, box plots and percentile readings.

Actual paired reading before authoring: Specimen 2018 **9260/1C Q5**, QP p.4 / MS p.4 (dual bars); **9260/2C Q14**, [QP pp.13–14](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92602C-international-gcse-mathematics-specimen-paper-2016-v1.pdf#page=13) / [MS p.7](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92602C-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=7) (scatter, fitting, extrapolation); **9260/1E Q20**, QP pp.20–21 / MS p.11 (cumulative totals at upper boundaries); **9260/2E Q20**, [QP p.17](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92602E-international-gcse-mathematics-specimen-paper-2016-v1.pdf#page=17) / [MS p.12](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92602E-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=12) (density). Paper covers say Specimen 2018; “2016” in filenames is not the session. Every question, dataset and diagram on this page is self-written with no official marks. Eye-fit and grouped quantile readings are estimates; no regression calculation or correlation coefficient is required.

</details>
