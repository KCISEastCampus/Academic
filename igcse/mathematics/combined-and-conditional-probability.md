---
layout: subjects
title: "Combined and conditional probability"
mathjax: true
grade: igcse
subject: igcse-mathematics
permalink: /igcse/mathematics/combined-and-conditional-probability/
reading_layout: true
study_page: true
toc_headings: "h2"
---

## Does the first result change the next chance? {#start}

A coin toss does not remove any faces from a die. Taking a counter out of a bag does change what remains. The difference decides which probabilities belong on the second branches.

This page moves from combining independent events to probabilities with given conditions. You need [sample spaces](/igcse/mathematics/sets-and-probability/#sample-spaces), [complements](/igcse/mathematics/sets-and-probability/#probability-scale), fractions and [two-way tables](/igcse/mathematics/data-and-averages/#two-way). All questions, examples and datasets are **self-written with no official marks**, using constructed situations, not real experimental measurements.

## Independence is a condition, not a shortcut {#independence}

Events A and B are **independent** when knowing whether one occurs does not change the probability of the other. A repeated procedure is not automatically independent: it depends on how it is carried out.

For a fair coin and an independent fair die, there are 12 equally likely pairs. Let A = heads and B = even die result. Three pairs are both heads and even, so:

$$P(A\cap B)=\frac3{12}=\frac14=\frac12\times\frac36=P(A)P(B).$$

Knowing heads occurred still leaves three even faces out of six. For independent events:

$$P(A\cap B)=P(A)\times P(B).$$

The left side is **intersection: both occur**, not union. Here the union includes all six head pairs plus the three even tail pairs, giving $9/12=3/4$, not 1/4. Listing the outcomes checks which symbol the product belongs to.

Independence differs from mutual exclusivity. If A and B have positive probabilities but cannot happen together, $P(A\cap B)=0$ while $P(A)P(B)>0$, so they cannot be independent. The positive-probability condition matters: a zero-probability event is an exception to that argument.

<div class="lesson-check" markdown="1">

### Check an independence claim {#practice-independent}

**Question:** A fair die is rolled once. A = even and B = odd. Compute P(A), P(B), P(A ∩ B) and P(A)P(B). Are these events independent or mutually exclusive? Then consider A = heads on a biased coin with P(H) = 2/5 and B = a multiple of 3 on an independent fair die: find P(A ∩ B) and P(A ∪ B).



<details markdown="1">
<summary>Hint</summary>

For the single die, can both conditions hold on one outcome? For the second model, use the independent intersection product, then count the overlap only once in the union.

</details>

<details markdown="1">
<summary>Solution and check</summary>

For one die, $P(A)=P(B)=1/2$ but $P(A\cap B)=0$ and $P(A)P(B)=1/4$: mutually exclusive and not independent. For the independent biased coin and die, intersection is $(2/5)(2/6)=2/15$ and union $2/5+1/3-2/15=3/5$. “Two events” alone never justifies multiplying their original probabilities.

</details>

</div>

## A tree keeps the stages in order {#tree}

A **tree diagram** starts with first-stage branches. From each first result, draw the possible second-stage branches. Each set of branches leaving one point is exhaustive and mutually exclusive, so its probabilities sum to 1.

An endpoint represents a complete path. Multiply **along** a path because each branch probability describes the chance among outcomes already at that point. Add the probabilities of different complete paths when their outcomes cannot occur together. For independent stages the second probabilities are unchanged on each first branch; otherwise use the probabilities for that branch's situation.

<div class="worked-example" markdown="1">

### A complete example: paths first, then the event {#example-tree}

**Question:** A fair coin is tossed and an independent spinner lands R with probability 1/3 or G with probability 2/3. Draw a tree and find P(H and G) and P(exactly one of H and R).



First branches are H,T, each 1/2. From both, draw R with 1/3 and G with 2/3 because independence keeps the spinner chances unchanged.

![Independent probability tree: HR 1/6, HG 1/3, TR 1/6, TG 1/3, with all branch probabilities labelled.](/assets/img/igcse-statistics-tree.svg)

$$P(HG)=\frac12\times\frac23=\frac13.$$

“Exactly one of H and R” means HG or TR: HH is not a path here, and HR has both conditions, not exactly one.

$$P(\text{exactly one})=P(HG)+P(TR)=\frac13+\frac16=\frac12.$$

Check every branch pair sums to 1; endpoint probabilities $1/6+1/3+1/6+1/3=1$. Do not add the original chances 1/2 and 1/3: that would also double-count the HR overlap.

</div>

<div class="lesson-check" markdown="1">

### Draw and distinguish events {#practice-tree}

**Question:** A coin has P(H) = 0.6. It is tossed twice independently with the same probability. Draw a fully labelled tree. Find P(exactly one H), P(at least one H), and the expected number of “at least one H” results in 100 repetitions of this two-toss experiment.



<details markdown="1">
<summary>Hint</summary>

Write both two-stage outcomes for exactly one. For at least one, consider the complement.

</details>

<details markdown="1">
<summary>Solution and check</summary>

From the start, H 0.6 and T 0.4; from both nodes again H 0.6 and T 0.4. Endpoints HH,HT,TH,TT have probabilities 0.36,0.24,0.24,0.16. Thus exactly one H is $0.24+0.24=0.48$. At least one H is $1-0.16=0.84$ (or sum HH,HT,TH). Expected count is $100\times0.84=84$, not a guarantee. All four endpoints total 1; exactly one must omit HH.

</details>

</div>

## Without replacement changes the bag {#without-replacement}

**With replacement** means return the selected object and mix before the next draw. **Without replacement** means keep it out. Independent draws from a fixed bag can be modelled with replacement and adequate mixing; without replacement, the remaining composition depends on the first draw.

A branch marked $P(B\mid A)$ means “probability of B **given** A”. The vertical symbol $\mid$ means the A condition is already known. If $P(A)>0$:

$$P(B\mid A)=\frac{P(A\cap B)}{P(A)},\qquad P(A\cap B)=P(A)P(B\mid A).$$

The denominator restricts attention to A. It is not always the original whole sample. Independence is the special case $P(B\mid A)=P(B)$. Do not multiply by an unchanged probability before checking this condition.

<div class="worked-example" markdown="1">

### A complete example: update each branch {#example-dependent}

**Question:** A bag has 3 red and 2 blue counters. Draw two at random without replacement. Draw the tree and find the probabilities of exactly one red and at least one red.



First R has probability 3/5, B 2/5. After R, 2R and 2B remain among four counters. After B, 3R and 1B remain. The second denominators are both 4, but the numerators differ.

![Without-replacement tree for 3R and 2B: after R, R 2/4 and B 2/4; after B, R 3/4 and B 1/4. Paths RR,RB,BR,BB have probabilities 3/10,3/10,3/10,1/10.](/assets/img/igcse-statistics-tree-dependent.svg)

$$P(RB)=\frac35\times\frac24=\frac3{10},\qquad P(BR)=\frac25\times\frac34=\frac3{10}.$$

Exactly one red uses the disjoint paths RB and BR, giving $3/10+3/10=3/5$. At least one red excludes only BB:

$$P(\text{at least one R})=1-\frac25\times\frac14=\frac9{10}.$$

Check by adding RR,RB,BR: $3/10+3/10+3/10=9/10$. Using 3/5 or 2/5 again at the second draw would model a different process.

</div>

<div class="lesson-check" markdown="1">

### Compare known and unknown first results {#practice-dependent}

**Question:** A bag has 4 red and 3 blue counters. Two are drawn randomly without replacement. Draw a tree. Find P(exactly one blue), P(second blue given first red), and P(second blue) before knowing the first result. Explain whether the two colour events are independent.



<details markdown="1">
<summary>Hint</summary>

For the unconditional second-blue event, include both RB and BB.

</details>

<details markdown="1">
<summary>Solution and check</summary>

First branches R 4/7, B 3/7. After R: R 3/6, B 3/6. After B: R 4/6, B 2/6. Endpoints RR,RB,BR,BB have probabilities $2/7,2/7,2/7,1/7$, totalling 1.

$$P(\text{exactly one B})=\frac47\times\frac36+\frac37\times\frac46=\frac47.$$

$$P(B_2\mid R_1)=\frac36=\frac12,\qquad P(B_2)=\frac27+\frac17=\frac37.$$

Knowing the first result changes the chance of second blue (1/2 differs from 3/7), so these events are not independent. “Unchanged overall probability of the second colour” does not mean “unchanged on each first branch”.

</details>

</div>

## Read the condition in a table {#conditional-table}

A two-way table describes two events without assuming independence. For these constructed records:

| Travel mode | Late | On time | Total |
| --- | ---: | ---: | ---: |
| Bus | 12 | 8 | 20 |
| Walk | 6 | 24 | 30 |
| Total | 18 | 32 | 50 |

“Late given bus” restricts us to the 20 bus users, so $P(\text{late}\mid\text{bus})=12/20=3/5$. “Bus given late” restricts us to the 18 late people, giving $P(\text{bus}\mid\text{late})=12/18=2/3$. “Bus and late” uses all 50, giving $12/50=6/25$. Same numerator, different reference groups.

Overall late probability is $18/50=9/25$, different from 3/5. Thus late and bus are not independent in this finite-group model. A table can also show independence when a conditional proportion equals the corresponding overall proportion; verify it rather than assuming it from the labels.

<div class="lesson-check" markdown="1">

### Build the reference groups {#practice-conditional}

**Question:** Of 60 people, 24 cycle and 28 bring water; 16 do both. Build a complete two-way table. Find P(cycle given water), P(water given cycle) and P(cycle and water). Test whether cycling and bringing water are independent in this group.



<details markdown="1">
<summary>Hint</summary>

Start with the intersection, then complete row and column totals.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The table is:

| | Water | No water | Total |
| --- | ---: | ---: | ---: |
| Cycle | 16 | 8 | 24 |
| Do not cycle | 12 | 24 | 36 |
| Total | 28 | 32 | 60 |

$$P(C\mid W)=\frac{16}{28}=\frac47,\quad P(W\mid C)=\frac{16}{24}=\frac23,\quad P(C\cap W)=\frac{16}{60}=\frac4{15}.$$

But $P(W)=28/60=7/15$ differs from 2/3, so not independent. Alternatively the product $(24/60)(28/60)=14/75$ differs from the intersection $4/15=20/75$. A conditional question must not automatically use 60 as denominator.

</details>

</div>

<div class="lesson-check" markdown="1">

### A table with a different conclusion {#practice-independent-table}

**Question:** Thirty equally likely cards have these counts: red-even 6, red-odd 4, blue-even 12, blue-odd 8. Build a two-way table with totals and decide whether “red” and “even” are independent. Explain whether independent means mutually exclusive.



<details markdown="1">
<summary>Hint</summary>

Compare the even proportion among red cards with the even proportion among all cards.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Rows red/blue have counts 6,4,total10 and 12,8,total20; columns even/odd total18,12,grand total30. $P(E\mid R)=6/10=3/5=P(E)=18/30$, so independent. Also $P(R\cap E)=6/30=1/5=(1/3)(3/5)$. They are not mutually exclusive: six cards satisfy both.

</details>

</div>

## Choose the model independently {#practice}

Try [independence versus exclusivity](#practice-independent), [an independent tree](#practice-tree), [a changing bag](#practice-dependent), [a conditional table](#practice-conditional), and [testing independence from counts](#practice-independent-table). Explain the second-branch probabilities and every denominator, not just the final fraction.

## Fix the model, then retry {#retry}

If you multiplied without a reason, return to [independence](#independence), then A. If you added branches before completing paths, return to [trees](#tree), then A. If you kept the original bag composition or reversed a condition, return to [without replacement](#without-replacement) and [table reference groups](#conditional-table), then B. Close the original answers before retrying.

<div class="lesson-check" markdown="1">

### Retry A {#retry-independent}

**Question:** Independent machines pass an item with probabilities 0.9 and 0.8. Draw the two-stage pass/fail tree. Find the probability that exactly one machine fails, and that at least one fails. State the assumption needed to use 0.8 on both second-stage branches.



<details markdown="1">
<summary>Hint</summary>

Exactly one failure has two distinct paths; at least one also includes two failures.

</details>

<details markdown="1">
<summary>Solution and check</summary>

First P/F probabilities 0.9/0.1; second P/F 0.8/0.2 from both nodes. Endpoints PP,PF,FP,FF have 0.72,0.18,0.08,0.02. Exactly one fails $0.18+0.08=0.26$; at least one $1-0.72=0.28$. The second-machine pass chance must be unaffected by the first result: independence. If failures share a common cause, that assumption needs rechecking.

</details>

</div>

<div class="lesson-check" markdown="1">

### Retry B {#retry-conditional}

**Question:** A box has 2 green and 3 yellow counters. Two are drawn without replacement. Draw a tree, find P(at least one green), P(second green given first yellow) and P(first yellow given second green).



<details markdown="1">
<summary>Hint</summary>

The last condition is about the observed second colour. Use the YG path divided by all paths ending in G.

</details>

<details markdown="1">
<summary>Solution and check</summary>

First G/Y 2/5,3/5. After G, G/Y 1/4,3/4; after Y, G/Y 2/4,2/4. Endpoints GG,GY,YG,YY have 1/10,3/10,3/10,3/10. At least one green $1-3/10=7/10$. $P(G_2\mid Y_1)=2/4=1/2$; $P(Y_1\mid G_2)=(3/10)/(1/10+3/10)=3/4$. Reversing the condition changes the reference group. The endpoint sum is 1.

</details>

</div>

## Connect back to data {#next-step}

Go to [mixed data review](/igcse/mathematics/mixed-review/#data-review); later combine it with [number](/igcse/mathematics/mixed-review/#number-review), [algebra](/igcse/mathematics/mixed-review/#algebra-review) and [geometry](/igcse/mathematics/mixed-review/#geometry-review). After a different topic, try the following without a method label or old answers.

<div class="lesson-check" markdown="1">

### A later problem {#later-check}

**Question:** Bag A contains 2 red and 1 blue counter; bag B contains 1 red and 2 blue. Choose a bag with equal chance, then draw one counter randomly. Find P(red) and P(bag A given red). Are choosing A and drawing red independent? If the experiment is repeated 100 times with the bags restored each time, predict the expected red count.



<details markdown="1">
<summary>Hint</summary>

Use a tree with bag choice first. For “given red”, restrict to red endpoints.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Branches A/B each 1/2. From A, R/B are 2/3,1/3; from B, R/B are 1/3,2/3. Red path probabilities are $1/2\times2/3=1/3$ and $1/2\times1/3=1/6$. Thus $P(R)=1/3+1/6=1/2$ and $P(A\mid R)=(1/3)/(1/2)=2/3$. Since $P(R\mid A)=2/3$ differs from $P(R)=1/2$, the events are not independent. Expected red count is $100\times1/2=50$; it is not guaranteed.

</details>

</div>

## Scope and sources {#sources}

<details markdown="1">
<summary>Qualification, source reading and notation</summary>

OxfordAQA International GCSE Mathematics **9260 v5.1**, S17–18, printed p.26 (PDF p.25). [Official specification](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-gcse-mathematics-specification.pdf#page=25). The original PDF image shows the intersection symbol in the independent-product rule; plain text extraction can misread it as union. The twelve-outcome check above independently confirms the mathematics.

Actually read: Specimen 2018 **9260/2E Q4**, [QP p.3](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92602E-international-gcse-mathematics-specimen-paper-2016-v1.pdf#page=3) / [MS p.4](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92602E-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=4), independent biased-coin repetitions; **9260/1E Q27**, [QP p.26](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92601E-international-gcse-mathematics-specimen-paper-2016-v1.pdf#page=26) / [MS p.13](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92601E-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=13), no replacement and at least one; and **9260/2C Q23**, QP p.21 / MS p.9 for interpreting table probabilities. These source questions informed checking; every question here is new and self-written with no official marks. No separate Bayes theorem or formal statistical test is required.

</details>
