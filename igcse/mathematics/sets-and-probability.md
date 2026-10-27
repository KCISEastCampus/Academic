---
layout: subjects
title: "Sets and probability"
mathjax: true
grade: igcse
subject: igcse-mathematics
permalink: /igcse/mathematics/sets-and-probability/
reading_layout: true
study_page: true
toc_headings: "h2"
---

## What counts as a possible outcome? {#start}

If a number is chosen from a bag, “even”, “prime” and “not even” describe different collections of results. We will make these collections precise, then decide when counting them gives a probability.

You need [fractions and shares](/igcse/mathematics/fractions-decimals-and-percentages/#find-share), counting and multiplication. All examples, tasks and datasets are **self-written, with no official marks**. Data are constructed, not real experimental records. Build from sets and single outcomes to event relationships and experiments.

## Start with actual members {#sets}

A **set** is a collection with a clear membership rule. Write its members in braces: $A=\{2,4,6\}$. Order does not matter and repeated members count once. $2\in A$ means 2 belongs to A; $3\notin A$ means it does not. $n(A)=3$ counts the members.

The **universal set** $\xi$ is everything under consideration. A **complement** $A'$ contains the members of $\xi$ that are not in A, so it changes if the universe changes. The **intersection** $A\cap B$ contains members in both; the **union** $A\cup B$ contains members in A or B or both. “Or” includes both unless the question says otherwise.

The **empty set** $\varnothing$ has no members: $n(\varnothing)=0$. It is not $\{0\}$, which has the one member 0. State the universe before taking a complement.

<div class="worked-example" markdown="1">

### A complete example: place the overlap first {#example-venn}

**Question:** Let ξ = {1,2,3,4,5,6,7,8,9,10,11,12}. A is the set of even numbers and B is the set of multiples of 3. Draw a Venn diagram and find P(A ∪ B) when one number is chosen with equal chance.

List $A=\{2,4,6,8,10,12\}$ and $B=\{3,6,9,12\}$. Put shared members 6 and 12 in the overlap first, then fill the A-only and B-only regions. Every leftover member goes outside both circles but inside the universe rectangle.

![Venn diagram for 1 to 12. A only 2,4,8,10; both 6,12; B only 3,9; neither 1,5,7,11.](/assets/img/igcse-statistics-venn.svg)

The four regions contain 4, 2, 2 and 4 members, totalling 12. Union counts everyone inside either circle once:

$$n(A\cup B)=4+2+2=8=6+4-2,\qquad P(A\cup B)=\frac8{12}=\frac23.$$

Adding 6 and 4 without subtracting 2 would count the shared members twice. Also $A'=\{1,3,5,7,9,11\}$ includes the B-only region. Equal selection chances justify dividing member counts.

</div>

<div class="lesson-check" markdown="1">

### Use the notation {#practice-sets}

**Question:** Let ξ = {1,2,3,4,5,6,7,8,9,10}. A contains the even numbers and B the primes. List A ∩ B, A ∪ B, A′ and A ∩ A′. Give n(A ∩ B) and explain why ∅ differs from {0}.

<details markdown="1">
<summary>Hint</summary>

1 is not prime; union counts each member once.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$A\cap B=\{2\}$, $A\cup B=\{2,3,4,5,6,7,8,10\}$, $A'=\{1,3,5,7,9\}$ and $A\cap A'=\varnothing$. Thus $n(A\cap B)=1$. The empty set has no members but $\{0\}$ has one. Being even does not stop 2 being prime.

</details>

</div>

## Venn diagrams can contain counts {#venn}

For groups of people, one **count** per region can replace lists of names. A total for A already includes people in both groups. Put the overlap in first, subtract it to find each “only” region, then subtract all three inner regions from the universe to find neither.

$$n(A\cup B)=n(A)+n(B)-n(A\cap B).$$

Subtracting the overlap removes its extra copy. A two-circle diagram has four regions, including the outside. All four counts must add to the universe total.

<div class="lesson-check" markdown="1">

### Account for everyone {#practice-venn}

**Question:** In a constructed group of 30 people, 18 play chess (A), 14 play badminton (B), and 8 play both. Draw a Venn diagram. For one uniformly random person, find the probabilities of neither, at least one and exactly one activity. Explain why 18 + 14 is not the number doing at least one.

<details markdown="1">
<summary>Hint</summary>

Start with the overlap. Exactly one excludes it.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Only A is $18-8=10$, only B $14-8=6$, and neither $30-10-8-6=6$:

![Solution Venn counts: A only 10, both 8, B only 6, neither 6, total 30.](/assets/img/igcse-statistics-venn-check.svg)

$$P(\text{neither})=\frac6{30}=\frac15,\quad P(A\cup B)=\frac{24}{30}=\frac45,\quad P(\text{exactly one})=\frac{16}{30}=\frac8{15}.$$

18 + 14 counts the eight shared people twice. All four regions total 30; neither plus at least one has probability 1.

</details>

</div>

## From chance words to numbers {#probability-scale}

An **outcome** is one possible result. An **event** collects outcomes, such as “an even result”. Probability runs from 0 to 1: impossible is 0, certain is 1, an even chance is 1/2. Unlikely means between 0 and 1/2; likely means between 1/2 and 1. Always check $0\le P(A)\le1$.

For a finite model with equally likely individual outcomes:

$$P(A)=\frac{\text{number of favourable outcomes}}{\text{total number of equally likely outcomes}}.$$

A fair die has six equally likely faces. Multiples of 3 are 3 and 6, so their probability is $2/6=1/3$. Different labels need not have equal chances: eight equal spinner sectors labelled R,R,R,B,G,G,G,G do not make three equally likely colours.

An event either happens or does not:

$$P(A')=1-P(A).$$

<div class="lesson-check" markdown="1">

### Count sectors, not labels {#practice-model}

**Question:** A fair spinner has eight equal sectors R,R,R,B,G,G,G,G. Find P(R), P(G), P(not B), P(purple) and P(R or B or G), and describe each chance. A learner says P(R) = 1/3 because there are three colours. Explain.

<details markdown="1">
<summary>Hint</summary>

The sectors, not the colour names, have equal chances.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$P(R)=3/8$ (unlikely), $P(G)=4/8=1/2$ (even chance), $P(\text{not B})=7/8$ (likely), $P(\text{purple})=0$ (impossible), $P(R\text{ or }B\text{ or }G)=1$ (certain). Colour events have unequal sector counts, so counting three colours equally is invalid.

</details>

</div>

## List every possibility {#sample-spaces}

A **sample space** lists every possible outcome. For one die roll it is $\{1,2,3,4,5,6\}$. For two successive events keep the order: (first, second). Use a table to pair every first result with every second result.

For a fair coin followed independently by a fair 1,2,3 spinner:

| Coin then spinner | 1 | 2 | 3 |
| --- | --- | --- | --- |
| H | (H,1) | (H,2) | (H,3) |
| T | (T,1) | (T,2) | (T,3) |

There are six equally likely pairs in this model. “H and odd” uses (H,1),(H,3), giving $2/6=1/3$. Odd and even spinner results are not equally likely: two of three numbers are odd. Do not count table cells equally when their outcomes are not equally likely.

<div class="lesson-check" markdown="1">

### Construct a sample space {#practice-space}

**Question:** Two independent fair spinners each have equal sectors 1,2,3. Make an ordered-pair sample-space table. Find P(sum = 5) and P(sum is odd). Why are sums 2,3,4,5,6 not equally likely?

<details markdown="1">
<summary>Hint</summary>

The first spinner determines the row; the second the column.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Rows are (1,1),(1,2),(1,3); (2,1),(2,2),(2,3); (3,1),(3,2),(3,3). Nine pairs are equally likely. Sum 5 uses (2,3),(3,2), giving $2/9$. Odd sums use (1,2),(2,1),(2,3),(3,2), giving $4/9$. Sum 2 has one pair while sum 4 has three, so the sum labels cannot be assigned equal weights.

</details>

</div>

## Together, or covering everything? {#events}

**Mutually exclusive** events cannot happen together on one trial; their intersection is empty. **Exhaustive** events cover all possible outcomes. For one die roll, odd and even are both mutually exclusive and exhaustive.

Mutually exclusive need not mean exhaustive: “1” and “2” omit 3,4,5,6. Exhaustive need not mean mutually exclusive: “at most 4” and “at least 3” cover every face but overlap at 3 and 4.

A complete set of mutually exclusive outcomes has probabilities summing to 1. For mutually exclusive A,B, no overlap needs removing:

$$P(A\cup B)=P(A)+P(B).$$

For overlapping events, count the common part only once as in the Venn example. “Cannot both happen” is not the same as independent; independence is developed in the [combined and conditional probability lesson](/igcse/mathematics/combined-and-conditional-probability/#independence).

<div class="lesson-check" markdown="1">

### Test the properties separately {#practice-events}

**Question:** On one fair die roll, A = even and B = greater than 4. Are A,B mutually exclusive? Exhaustive? Find P(A ∪ B). Then find P(odd or 6), explaining when simple addition is valid.

<details markdown="1">
<summary>Hint</summary>

List the actual faces before choosing a rule.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$A=\{2,4,6\}$ and $B=\{5,6\}$ share 6, so not mutually exclusive. Their union $\{2,4,5,6\}$ omits 1,3, so not exhaustive. $P(A\cup B)=4/6=2/3$. Odd and 6 are mutually exclusive, so $P(\text{odd or 6})=3/6+1/6=2/3$. The identical numerical answers come from different region counts.

</details>

</div>

## What can an experiment establish? {#experiments}

A theoretical probability comes from a model and its assumptions, such as a fair die. An experimental estimate uses **relative frequency**, successes divided by trials. Repeating a random experiment usually gives different counts. A difference from the model does not alone prove it wrong.

In constructed records, a six occurs 5 times in 20 rolls: $5/20=0.25$, versus the fair model's $1/6$. Another 20 rolls give two sixes, so the pooled estimate is $7/40=0.175$. This is closer to $1/6$, but each new batch need not improve the estimate.

Larger, appropriately selected samples generally reduce chance variation in probability and population estimates. They do not guarantee the next result, prove exact fairness or repair biased sampling. More measurements with a faulty method can keep the same bias.

For $n$ trials with event probability $p$:

$$\text{expected frequency}=np.$$

For a fair die, 120 rolls have expected six-count $120\times1/6=20$. This is the long-run average count across repeated batches, not a promise for this batch. Using the experimental model 0.25 instead gives an estimate of 30; state which model you use.

<div class="lesson-check" markdown="1">

### Compare model and evidence {#practice-experiment}

**Question:** Constructed coin records have 12 heads in 20 tosses, then 36 heads in 80 further tosses. Find each relative frequency and the pooled estimate. Predict expected heads in the next 50 tosses using a fair model and using the pooled estimate. Must either happen exactly? Is fairness proved? Would a larger basketball-team-only survey necessarily estimate whole-school height better?

<details markdown="1">
<summary>Hint</summary>

Pool successes and totals, not unweighted percentages. Separate random variation from selection bias.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$12/20=0.6$ and $36/80=0.45$. Pooled estimate $(12+36)/(20+80)=0.48$, not $(0.6+0.45)/2=0.525$. Expected counts are $50\times0.5=25$ under fairness and $50\times0.48=24$ under the estimate. Neither count is guaranteed. These finite data do not prove exact fairness. A basketball-only sample may remain biased for school height however large it is; more observations help chance variation when selection is appropriate.

</details>

</div>

## Independent checks {#practice}

Try [notation](#practice-sets), [Venn counts](#practice-venn), [chance models](#practice-model), [sample spaces](#practice-space), [exclusive and exhaustive events](#practice-events), and [experimental evidence](#practice-experiment). Explain your denominator and any equal-chance assumption.

## Repair and retry {#retry}

For union/intersection/complement, return to [sets](#sets), then A. For missing people or double counting, return to [Venn](#venn), then B. For omitted outcomes or invalid addition, return to [sample spaces](#sample-spaces) and [events](#events), then C. For pooling or treating predictions as promises, return to [experiments](#experiments), then D. Close old answers first.

<div class="lesson-check" markdown="1">

### Retry A {#retry-sets}

**Question:** Let ξ = {0,1,2,3,4,5,6}, A = {0,2,4,6}, B = {1,3,5}. Find A′, A ∩ B, A ∪ B and their sizes. Is {0} empty?

<details markdown="1">
<summary>Hint</summary>

Zero can be a member.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$A'=B$, size 3; $A\cap B=\varnothing$, size 0; $A\cup B=\xi$, size 7. $\{0\}$ is not empty: it has one member.

</details>

</div>

<div class="lesson-check" markdown="1">

### Retry B {#retry-venn}

**Question:** Among 40 people, 22 choose tea, 18 coffee and 7 neither. Draw a Venn diagram and find P(both) for one uniformly random person.

<details markdown="1">
<summary>Hint</summary>

Find the union from total minus neither.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Union $40-7=33$. Both $22+18-33=7$. Fill tea-only 15, both 7, coffee-only 11, neither 7 inside a universe rectangle. Total 40, so $P(\text{both})=7/40$. Adding both set totals directly would count shared people twice.

</details>

</div>

<div class="lesson-check" markdown="1">

### Retry C {#retry-events}

**Question:** Toss a fair coin twice independently. List ordered outcomes and find P(exactly one head). Are “at least one head” and “at least one tail” mutually exclusive? Exhaustive?

<details markdown="1">
<summary>Hint</summary>

HT and TH are distinct ordered results.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Space $\{HH,HT,TH,TT\}$. Exactly one head uses HT,TH, so $2/4=1/2$. Both events contain HT,TH: not mutually exclusive. Their union is the full space: exhaustive.

</details>

</div>

<div class="lesson-check" markdown="1">

### Retry D {#retry-experiment}

**Question:** There are 18 successes in 30 constructed attempts, then 9 in 10 further attempts. Estimate probability using all trials and expected successes in 80 more. Must the next count equal this, and must every new batch improve the estimate?

<details markdown="1">
<summary>Hint</summary>

Combine counts before dividing.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Estimate $(18+9)/(30+10)=27/40=0.675$; expected $80\times0.675=54$. Neither exact agreement nor improvement after every batch is guaranteed. More appropriate trials generally help, but random variation remains and the true chance has not been proved to be 0.675.

</details>

</div>

## Carry the reasoning forward {#next-step}

Continue to [combined and conditional probability](/igcse/mathematics/combined-and-conditional-probability/#start), then use [mixed data review](/igcse/mathematics/mixed-review/#data-review). After another topic, return below without help.

<div class="lesson-check" markdown="1">

### Return later {#later-check}

**Question:** Six equally likely tickets are labelled 1 to 6. A is even and B prime. Draw a Venn diagram and find P(A ∩ B), P(A ∪ B), P(neither). For 60 random selections with replacement, predict the expected intersection count. Would an observed count of 12 alone disprove the model?

<details markdown="1">
<summary>Hint</summary>

Partition all six labels first.

</details>

<details markdown="1">
<summary>Solution and check</summary>

A-only $\{4,6\}$; both $\{2\}$; B-only $\{3,5\}$; neither $\{1\}$. Probabilities are $1/6$, $5/6$, $1/6$. Expected intersection count $60\times1/6=10$. Twelve can occur by chance; a discrepancy alone neither disproves nor proves the model.

</details>

</div>

## Scope and sources {#sources}

<details markdown="1">
<summary>Qualification and actual paired reading</summary>

OxfordAQA International GCSE Mathematics **9260 v5.1**: N9 printed p.13 (PDF p.12), S9–16 printed pp.25–26 (PDF pp.24–25). [Official specification](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-gcse-mathematics-specification.pdf#page=24). The next page builds on these ideas with independent-product and conditional calculations.

Actual paired reading before writing: Specimen 2018 **9260/1C Q6**, QP p.5 / MS p.4 (chance vocabulary); **Q12**, QP p.12 / MS p.7; **Q24**, [QP p.20](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9260-92601C-international-gcse-mathematics-specimen-paper-2016-v1.pdf#page=20) / [MS p.10](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9260-92601C-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=10) (Venn intersection); **9260/2C Q23**, QP p.21 / MS p.9 (table probabilities). “2016” in filenames is not the paper session. Every task here is self-written with no official marks. No formal significance test is being made from the constructed experiments.

</details>
