---
layout: subjects
title: "Data and averages"
mathjax: true
grade: igcse
subject: igcse-mathematics
permalink: /igcse/mathematics/data-and-averages/
reading_layout: true
study_page: true
toc_headings: "h2"
---

## What does a typical value hide? {#start}

Five people can have the same average journey time as another group, yet have very different experiences. We will organise individual records, find useful summaries, and explain what each summary leaves out.

You need ordering, addition, division and [fractions and percentages](/igcse/mathematics/fractions-decimals-and-percentages/#find-share). The examples, tasks and data are **self-written, with no official marks**; all data are constructed for learning. Use paper before opening help. Compare the centre first, then study the middle half and percentiles.

## What was recorded? {#data-types}

A favourite sport is a **qualitative** value: a category, not an amount. A number of books is **discrete** numerical data: it is counted, usually in whole numbers. A journey time is **continuous** numerical data: it is measured and can, in principle, take any value within an interval. A time recorded as 12 minutes is still a measurement; rounding does not turn the underlying variable into a count.

Before calculating, read the title, unit, population (the whole group of interest), and sample (the people actually recorded). A sample of morning bus passengers need not represent all travellers. A larger sample generally reduces chance variation if selected appropriately; it does not cure a biased selection.

## A frequency counts how often {#frequency}

Suppose eight people report these numbers of library visits:

0, 2, 1, 0, 3, 1, 2, 1.

A **frequency** is how many records have a value. The list becomes:

| Visits $x$ | Frequency $f$ | Total visits $xf$ |
| --- | ---: | ---: |
| 0 | 2 | 0 |
| 1 | 3 | 3 |
| 2 | 2 | 4 |
| 3 | 1 | 3 |
| Total | 8 | 10 |

There are eight people but ten visits. Keep these totals separate. **Ungrouped** data retain individual values; **grouped** data place them in intervals, losing some detail. For continuous times, $0\le t<10$ and $10\le t<20$ put 10 into the second group, never both.

<div class="lesson-check" markdown="1">

### Read before calculating {#practice-data}

**Question:** A list records favourite colour, number of siblings, and height rounded to the nearest cm. Classify each variable. For visits 0, 2, 1, 0, 3, 1, 2, 1, find the frequency of at least two visits and the proportion of people with no visits. Explain why the total number of visits is not the denominator.



<details markdown="1">
<summary>Hint</summary>

A rounded measurement is still a measurement. Count people meeting the condition.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Colour is qualitative; siblings discrete; height continuous. At least two visits: $2+1=3$ people. No visits: $2/8=1/4$. The denominator is eight people, not ten visits: the requested share is a share of people.

</details>

</div>

## Two questions about each person {#two-way}

A **two-way table** keeps two characteristics connected. Rows might show travel mode and columns might show time group. Each person goes into exactly one body cell, not into a total cell as well. Add rows and columns afterwards.

For six records Walk–8, Bus–12, Walk–9, Bus–18, Walk–15, Bus–7 (times in minutes), the first person belongs in Walk and under 10:

| Mode | $t<10$ min | $t\ge10$ min | Total |
| --- | ---: | ---: | ---: |
| Walk | 2 | 1 | 3 |
| Bus | 1 | 2 | 3 |
| Total | 3 | 3 | 6 |

To use ungrouped categories instead, rows could be class A/B and columns Walk/Bus. Nothing needs an interval when the recorded feature is a category. Totals must still agree.

<div class="lesson-check" markdown="1">

### Design the table {#practice-table}

**Question:** Design a two-way table, including totals, for these eight (mode, time in min) records: (Walk,6), (Bus,14), (Walk,12), (Bus,8), (Walk,9), (Bus,16), (Walk,7), (Bus,10). Use time groups below 10 and at least 10. What fraction of walkers take at least 10 minutes?



<details markdown="1">
<summary>Hint</summary>

Make rows for mode and columns for the two time groups. The final question refers only to walkers.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The completed table is below. Of four walkers, one takes at least 10 min, so $1/4$. Using all eight would answer a different question.

| Mode | $t<10$ | $t\ge10$ | Total |
| --- | ---: | ---: | ---: |
| Walk | 3 | 1 | 4 |
| Bus | 1 | 3 | 4 |
| Total | 4 | 4 | 8 |

</details>

</div>

## Three meanings of “typical” {#averages}

The **mean** shares the total equally: sum of values divided by their number. The **median** is the middle of the ordered list; with an even number, average the two middle values. The **mode** is the most frequent value; a list may have more than one mode or none. The **range** is maximum minus minimum, a measure of spread, not an average.

Choose a summary to fit the question. A mode works for favourite colours, but a mean colour has no meaning. A very large value pulls a numerical mean upwards; it may leave the median almost unchanged. Neither mean nor median alone tells us how variable the values are.

<div class="worked-example" markdown="1">

### A complete example: the same list, different messages {#example-averages}

**Question:** For delivery times 2, 2, 3, 5, 18 minutes, find the mean, median, mode and range. Which average better describes a usual delivery?



The values are ordered. The total is $2+2+3+5+18=30$, shared among five deliveries:

$$\text{mean}=30\div5=6\text{ min}.$$

The third value is the median, 3 min. The mode is 2 min, occurring twice. The range is $18-2=16$ min. A usual delivery is better represented here by the median 3 min because the one long delivery pulls the mean to 6 min. The mean remains useful for total delivery time: $5\times6=30$ min. We cannot simply delete 18 because it is inconvenient.

</div>

<div class="lesson-check" markdown="1">

### Compare two groups {#practice-averages}

**Question:** Times in minutes are A: 4, 5, 5, 6, 10, 12 and B: 6, 7, 7, 7, 7, 8. Find each mean, median, mode and range. Use centre and spread to advise someone who values both short and predictable times.



<details markdown="1">
<summary>Hint</summary>

Sort each list and locate both middle positions. Different summaries may support different priorities.

</details>

<details markdown="1">
<summary>Solution and check</summary>

A totals 42, so mean $42/6=7$ min, median $(5+6)/2=5.5$ min, mode 5 min, range $12-4=8$ min. B also totals 42: mean 7 min, median $(7+7)/2=7$ min, mode 7 min, range $8-6=2$ min. A has the lower median but much wider range; B is more predictable in this sample, with the same mean. State the trade-off: there is no single winner for every priority, and these six records do not establish a population fact.

</details>

</div>

## When a table replaces the individual values {#grouped}

For an exact frequency table, multiply each value by its frequency before adding: one person reporting 3 visits contributes 3 visits, not 1. Divide the total by the **sum of frequencies**, not the number of rows.

$$\text{mean}=\frac{\sum fx}{\sum f}.$$

Here $\sum$ means “add all of these”. For the visits table above, the mean is $10/8=1.25$ visits. For the median, expand positions mentally: values at positions 4 and 5 are both 1, so median 1. Mode 1, range 3.

For an interval table, exact values are lost. Represent each interval by its midpoint, halfway between its boundaries. The **estimated mean** is $\sum fm/\sum f$, where $m$ is the midpoint. This assumes each midpoint reasonably represents its group. The most frequent interval is the **modal class**; its midpoint is not an established exact mode.

<div class="worked-example" markdown="1">

### A complete example: estimate without inventing precision {#example-grouped}

**Question:** Times lie in 0 ≤ t < 10, 10 ≤ t < 20 and 20 ≤ t < 40 minutes, with frequencies 4, 8 and 8. Estimate the mean and state the modal classes.



Midpoints are $(0+10)/2=5$, $(10+20)/2=15$, $(20+40)/2=30$ min. We weight by people, not by rows:

$$\text{estimated mean}=\frac{4\times5+8\times15+8\times30}{20}=\frac{380}{20}=19\text{ min}.$$

Both 10–20 and 20–40 are modal classes by frequency: both contain 8 people. Exact mean, exact median and exact range cannot be recovered from these grouped records. For unequal widths, the tallest **histogram density** bar instead identifies greatest concentration per minute; see [areas and heights](/igcse/mathematics/statistical-diagrams/#unequal-histograms).

</div>

<div class="lesson-check" markdown="1">

### Use the information that remains {#practice-grouped}

**Question:** A frequency table has values x = 1, 2, 4 and frequencies 2, 5, 3. Find the exact mean and median. A second table gives times 0 ≤ t < 5, 5 ≤ t < 15, 15 ≤ t < 25 minutes with frequencies 2, 6, 2. Estimate its mean, identify its modal class and explain why the second mean is not exact.



<details markdown="1">
<summary>Hint</summary>

Use cumulative positions for the exact median. Use interval midpoints only for the grouped table.

</details>

<details markdown="1">
<summary>Solution and check</summary>

First total frequency is 10 and total value is $1\times2+2\times5+4\times3=24$. Mean $24/10=2.4$; positions 5 and 6 both contain 2, so median 2. Second midpoints are 2.5, 10, 20:

$$\text{estimated mean}=\frac{2\times2.5+6\times10+2\times20}{10}=10.5\text{ min}.$$

Modal class is $5\le t<15$. The actual times within each interval are unknown; replacing them by midpoints introduces estimation. A mean of the three midpoints would ignore the six people in the middle group.

</details>

</div>

## The middle half {#quartiles}

A median splits an ordered distribution in half. The **lower quartile** $Q_1$ marks about one quarter of the way through; the **upper quartile** $Q_3$ marks about three quarters. The **interquartile range** $IQR=Q_3-Q_1$ describes the width of the middle half and is less affected by extreme values than the full range.

For the small raw lists here, use medians of the lower and upper halves; omit the overall median from both halves when the list length is odd. Quartile conventions differ for small lists, so follow an instruction supplied in a question. For grouped data, use cumulative frequency estimates as taught on the [diagram page](/igcse/mathematics/statistical-diagrams/#cumulative).

The $p$th **percentile** is a value below which about $p\%$ of the data lie. On a cumulative graph of $n$ observations, read it at cumulative frequency $pn/100$. This is a position in the distribution, not a percentage score.

<div class="worked-example" markdown="1">

### A complete example: locate before subtracting {#example-quartiles}

**Question:** For ordered times 2, 4, 5, 7, 8, 10, 12, 16 minutes, find the median, quartiles and IQR using medians of halves.



Middle values are 7 and 8, so median $(7+8)/2=7.5$ min. Lower half is 2, 4, 5, 7 and upper half is 8, 10, 12, 16:

$$Q_1=(4+5)/2=4.5,\qquad Q_3=(10+12)/2=11,\qquad IQR=11-4.5=6.5\text{ min}.$$

The quartiles are measured in minutes, like the data. Their difference is a spread; it is not the fraction 1/2.

</div>

<div class="lesson-check" markdown="1">

### Explain a comparison {#practice-quartiles}

**Question:** Ordered times A are 1, 3, 4, 6, 8, 10, 11, 17 minutes. Find the median, Q1, Q3 and IQR using medians of halves. Group B has median 8 minutes and IQR 3 minutes. Compare typical time and middle-half spread. Can you conclude that every A time is shorter than every B time?



<details markdown="1">
<summary>Hint</summary>

Compare centres separately from spreads. A percentile comparison does not compare every pair of observations.

</details>

<details markdown="1">
<summary>Solution and check</summary>

A median $(6+8)/2=7$, $Q_1=(3+4)/2=3.5$, $Q_3=(10+11)/2=10.5$ and $IQR=10.5-3.5=7$ min. A has a slightly lower median, 7 versus 8 min, but a wider middle-half spread, 7 versus 3 min. No conclusion about every individual pair follows: summaries do not supply all B values.

</details>

</div>

## Check independently {#practice}

Use the tasks above without help: [types and extraction](#practice-data), [two-way tables](#practice-table), [averages and comparison](#practice-averages), [frequency calculations](#practice-grouped), and [quartiles](#practice-quartiles). Explain a choice as well as calculating.

## Repair the specific difficulty {#retry}

If types or counts were confused, return to [what was recorded](#data-types) and [frequency](#frequency), then retry A. If totals or the reference group were wrong, return to [two-way tables](#two-way), then B. If an average was unweighted, unsorted or over-interpreted, return to [averages](#averages) or [grouped estimates](#grouped), then C/D. For quartiles, return to [the middle half](#quartiles), then E. Close the original solution first.

<div class="lesson-check" markdown="1">

### Retry A {#retry-data}

**Question:** A survey records bus route number, travel time to the nearest minute and number of changes. Classify each. In the list of changes 0, 1, 1, 2, 0, 1, how many passengers make fewer than two changes?



<details markdown="1">
<summary>Hint</summary>

A numeral can be a label rather than a measured quantity.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Route number is qualitative (a label), time continuous, changes discrete. Five passengers make fewer than two changes; include both zero and one.

</details>

</div>

<div class="lesson-check" markdown="1">

### Retry B {#retry-table}

**Question:** Design an ungrouped two-way table for (class, drink): (A,Water), (B,Tea), (A,Tea), (B,Water), (A,Water), (B,Tea). Add totals and find the fraction of class B choosing water.



<details markdown="1">
<summary>Hint</summary>

Each record is one cell. Use class B as the comparison group.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Rows A/B, columns Water/Tea/Total: A is 2/1/3; B is 1/2/3; totals 3/3/6. Class B water share is $1/3$, not $1/6$.

</details>

</div>

<div class="lesson-check" markdown="1">

### Retry C {#retry-averages}

**Question:** Times are 3, 3, 4, 4, 6, 22 minutes. Find all three averages and the range. Which average would you quote for a usual journey, and what extra information would you include?



<details markdown="1">
<summary>Hint</summary>

Sort and find positions 3 and 4. Keep a measure of spread.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Sum 42 gives mean $42/6=7$ min. Median $(4+4)/2=4$ min; modes 3 and 4 min; range $22-3=19$ min. Quote median 4 min for usual time and range 19 min to reveal variability; the long journey pulls the mean up.

</details>

</div>

<div class="lesson-check" markdown="1">

### Retry D {#retry-grouped}

**Question:** Lengths in cm lie in 0 ≤ l < 4, 4 ≤ l < 8, 8 ≤ l < 12 with frequencies 1, 6, 3. Estimate the mean. Would knowing only these intervals allow an exact range?



<details markdown="1">
<summary>Hint</summary>

Weight the midpoints 2, 6, 10 by frequency.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Estimated mean $(1\times2+6\times6+3\times10)/10=6.8$ cm. Exact range is unknown: endpoints of the first and last intervals need not be actual measurements. Taking $12-0$ as the exact range invents data.

</details>

</div>

<div class="lesson-check" markdown="1">

### Retry E {#retry-quartiles}

**Question:** Using medians of halves, find Q1, median, Q3 and IQR for 2, 3, 5, 6, 9, 10, 14, 20. Explain how the range and IQR react if 20 is replaced by 50.



<details markdown="1">
<summary>Hint</summary>

Locate the four middle positions of the two halves before changing the last value.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$Q_1=4$, median 7.5, $Q_3=12$, $IQR=8$. Range rises from 18 to 48; quartiles and IQR stay unchanged because none of their defining middle values changes. This illustrates resistance to this extreme change, not immunity to every data change.

</details>

</div>

## Use a picture, then come back {#next-step}

Continue to [statistical diagrams](/igcse/mathematics/statistical-diagrams/#start). After another topic, return to the task below and then [mixed data review](/igcse/mathematics/mixed-review/#data-review). Record what you could do without help.

<div class="lesson-check" markdown="1">

### Return later {#later-check}

**Question:** A club reports a mean attendance of 18 over five meetings. The first four attendances are 12, 18, 20 and 16. Find the fifth attendance, median and range. Explain why a different club with mean 18 need not have the same range.



<details markdown="1">
<summary>Hint</summary>

Recover the required total before finding the missing value.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Total $5\times18=90$; first four total 66, so fifth is 24. Ordered list 12, 16, 18, 20, 24 gives median 18 and range 12. A second list 18, 18, 18, 18, 18 has the same mean but range 0. A mean does not determine spread.

</details>

</div>

## Scope and sources {#sources}

<details markdown="1">
<summary>Qualification, reading and limits</summary>

OxfordAQA International GCSE Mathematics **9260**, specification **v5.1**, printed pp.24–26 (PDF pp.23–25): S1–3, S5–7, with S13 on sampling limitations. The page builds from recording and averages to quartiles, IQR and percentiles. [Official specification](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-gcse-mathematics-specification.pdf#page=23).

Before authoring, the paired examples and mark schemes actually read included Specimen 2018 **9260/2E Q10**, [QP PDF p.9](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92602E-international-gcse-mathematics-specimen-paper-2016-v1.pdf#page=9), [MS PDF p.7](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92602E-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=7), on weighted midpoint estimates; and **9260/2C Q23**, QP p.21 / MS p.9, on table interpretation. The file name “2016” is not the paper session. Every task here is self-written, not an official question or marking scheme. No standard deviation, formal statistical test or calculator-specific process is required here.

</details>
