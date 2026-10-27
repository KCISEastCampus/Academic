---
layout: subjects
title: "Sequences and nth terms"
mathjax: true
grade: igcse
subject: igcse-mathematics
permalink: /igcse/mathematics/sequences/
reading_layout: true
study_page: true
toc_headings: "h2"
---

[IGCSE Mathematics](/igcse/mathematics/#learning-start)

{:.lesson-meta}

## Start here {#start}

A sequence lists numbers in order. Knowing the next number and knowing the number in position 100 are different jobs. We will distinguish a rule that moves one step from a rule that jumps straight to a position.

You need whole-number operations, [powers](/igcse/mathematics/powers-roots-and-standard-form/#start), [linear equations](/igcse/mathematics/equations-and-inequalities/#balance) and [expansion](/igcse/mathematics/expressions-and-formulae/#expansion). Build from number patterns and linear sequences to quadratic nth terms.

All examples, tasks and data on this page are self-written, with no official marks; data are illustrative. Try on paper before opening help.

{:.lesson-meta}

## A step rule or a position rule? {#rules}

A term is one number in the sequence. The position n starts at 1 unless stated otherwise. A term-to-term rule needs a starting term and tells how to get the next; a position-to-term rule gives a term from n without computing the earlier terms. A few initial numbers alone do not mathematically force a unique continuation: use the stated rule or family.

<div class="worked-example" markdown="1">

### Same beginning, different work {#example-rules}

**Question:** A sequence starts at 4 and adds 3 each time. Write the first five terms, then give a direct rule for term n.

$$4,7,10,13,16;\qquad t_n=4+3(n-1)=3n+1.$$

To reach position n from position 1 takes n−1 steps, not n. Check n=1 gives 4 and n=5 gives 16. A rule “multiply n by 3” misses the starting offset.

</div>

## Use and build rules {#practice}

<div class="lesson-check" markdown="1">

### Work in two ways {#practice-rules}

**Question:** (a) Start at 7 and subtract 3 each time: write the first five terms and a direct rule. (b) A different sequence has nth term n²−1: write terms 1,2,3,4 and term 10. Explain why n²−1 is not the instruction “square the previous term, then subtract 1”.

<details markdown="1">

<summary>Hint</summary>

In (b), replace n by each position; do not use the preceding output as input.

</details>

<details markdown="1">

<summary>Solution and check</summary>

$$\text{(a)}\quad 7,4,1,-2,-5;\qquad t_n=7-3(n-1)=10-3n;$$

$$\text{(b)}\quad 0,3,8,15;\qquad t_{10}=10^2-1=99.$$

In the position rule n is an index, not the term’s value. Applying “square previous term” to the initial 0 would give −1, which is not the second term 3.

</details>

</div>

## Numbers that make familiar shapes {#families}

Triangular numbers count rows of 1,2,3,… dots. Square numbers count n rows of n dots; cube numbers count n layers of n×n small cubes. These meanings help recognise and generate the sequences.

| n | 1 | 2 | 3 | 4 | 5 |
| --- | --- | --- | --- | --- | --- |
| Triangular | 1 | 3 | 6 | 10 | 15 |
| Square n² | 1 | 4 | 9 | 16 | 25 |
| Cube n³ | 1 | 8 | 27 | 64 | 125 |

For triangular numbers, add the next row: 1, then +2, +3, +4,… . Two matching n-row triangles fit into a rectangle with n rows and n+1 columns, so each has n(n+1)/2 dots. For n=3: 1+2+3=6, twice that is 3×4=12.

$$T_n=\frac{n(n+1)}2,\qquad S_n=n^2,\qquad C_n=n^3.$$

<div class="worked-example" markdown="1">

### Find a position, not just a value {#example-families}

**Question:** Find the sixth triangular, square and cube numbers. Is 36 a square number, and if so which one?

$$T_6=6(7)/2=21,\quad S_6=6^2=36,\quad C_6=6^3=216.$$

36 is the sixth square because 6²=36. To extend triangular numbers term by term, add 6 to T₅=15. The nth triangular number is not simply n²/2: its rectangle needs n+1 columns.

</div>

<div class="lesson-check" markdown="1">

### Use the number families {#practice-families}

**Question:** The lists 1,3,6,10,…; 1,4,9,16,…; 1,8,27,64,… follow the named triangular, square and cube families. Find each next term and each eighth term. Explain why 64 belongs to both square and cube families, giving its position in each.

<details markdown="1">

<summary>Hint</summary>

For triangular terms, the next added row has the next position number.

</details>

<details markdown="1">

<summary>Solution and check</summary>

$$\text{next}:\ 15,25,125;\qquad T_8=36,\quad S_8=64,\quad C_8=512;$$

$$64=8^2=4^3.$$

64 is eighth in the square sequence and fourth in the cube sequence. Families may overlap; a value’s position depends on which sequence you mean.

</details>

</div>

## A constant step gives a linear rule {#linear}

An arithmetic progression has constant difference d. Starting at a, the nth term is a+d(n−1). A quick way is dn plus an offset chosen to give the first term. Check more than the first term to catch an incorrect difference.

<div class="worked-example" markdown="1">

### From a table to a distant term {#example-linear}

**Question:** A linear sequence is 5,9,13,17,… . Find its nth term and decide whether 101 belongs.

$$d=4,\qquad t_n=5+4(n-1)=4n+1.$$

$$4n+1=101\Rightarrow4n=100\Rightarrow n=25.$$

101 is the 25th term. A term belongs only if n is a positive integer. A numerical solution such as n=2.5 would not be a position in this sequence.

</div>

<div class="lesson-check" markdown="1">

### Find a rule and membership {#practice-linear}

**Question:** A linear sequence begins 8,11,14,17,… . Find its nth term and 50th term. Decide whether 152 and 153 belong, showing your reasoning. A second linear sequence has first term 20 and difference −4: give its nth term.

<details markdown="1">

<summary>Hint</summary>

Solve tₙ=value for a candidate term; test whether the position is a positive integer.

</details>

<details markdown="1">

<summary>Solution and check</summary>

$$t_n=3n+5,\quad t_{50}=155;\quad 3n+5=152\Rightarrow n=49,$$

$$3n+5=153\Rightarrow n=148/3;\qquad u_n=20-4(n-1)=24-4n.$$

152 belongs at position 49; 153 does not, since 148/3 is not an integer. The decreasing sequence starts 20,16,12,…, checking its negative difference.

</details>

</div>

## Changing steps at a steady rate {#quadratic}

A quadratic sequence has nth term an²+bn+c with a≠0. Its first differences need not be constant; its second differences are constant 2a. Why? The difference between consecutive terms is a[(n+1)²−n²]+b=2an+a+b, which increases by 2a each step. So half the second difference gives a. Subtract an² from the original terms; the remainder is linear.

<div class="worked-example" markdown="1">

### Remove the squared part {#example-quadratic}

**Question:** Find the nth term of the quadratic sequence 4,9,16,25,36,… .

| n | 1 | 2 | 3 | 4 | 5 |
| --- | --- | --- | --- | --- | --- |
| tₙ | 4 | 9 | 16 | 25 | 36 |
| subtract n² | 3 | 5 | 7 | 9 | 11 |

First differences are 5,7,9,11; second differences are 2,2,2, so a=1. The remainder has nth term 2n+1. Put both parts together:

$$t_n=n^2+2n+1=(n+1)^2.$$

Check n=1 gives 4, n=3 gives 16 and n=5 gives 36. The factor form recognises these as square numbers starting at 2². This recognition checks the difference method rather than replacing its explanation.

</div>

<div class="lesson-check" markdown="1">

### Build and use a quadratic rule {#practice-quadratic}

**Question:** A quadratic sequence begins 6,13,24,39,58,… . Find its nth term and sixth term. Decide whether 82 can be a term, explaining the position argument.

<details markdown="1">

<summary>Hint</summary>

Compute first and second differences, remove an², then find the remaining linear rule.

</details>

<details markdown="1">

<summary>Solution and check</summary>

$$\text{first differences}:\ 7,11,15,19;\quad \text{second}:\ 4,4,4;\quad a=2.$$

| n | 1 | 2 | 3 | 4 | 5 |
| --- | --- | --- | --- | --- | --- |
| tₙ−2n² | 4 | 5 | 6 | 7 | 8 |

$$t_n=2n^2+n+3,\quad t_6=81,\quad t_7=108.$$

The difference tₙ₊₁−tₙ=4n+3 is positive for every positive n, so the terms strictly increase. 82 lies between consecutive terms 81 and 108; it has no integer position. Finding a decimal solution of the quadratic would not establish membership.

</details>

</div>

<div class="lesson-check" markdown="1">

### Decide what kind of rule fits {#practice-choice}

**Question:** One sequence is declared linear or quadratic and begins 3,7,13,21,31,… . Decide which type, derive an nth term and explain whether the instruction “add 4 each time” remains valid after the first step.

<details markdown="1">

<summary>Hint</summary>

Compare all the first differences rather than only the first gap.

</details>

<details markdown="1">

<summary>Solution and check</summary>

$$\text{differences}:\ 4,6,8,10;\quad \text{second}:\ 2,2,2,$$

$$t_n-n^2:\ 2,3,4,5,6;\qquad t_n=n^2+n+1.$$

It is quadratic under the stated family assumption. “Add 4” only works for the first step; adding 4 to 7 would give 11, not 13. A finite list alone, without a family condition, permits other continuations.

</details>

</div>

## Repair the rule, then start fresh {#retry}

Used an output as an index: [two kinds of rule](#rules). Confused a family or position: [number shapes](#families). Off by one: [linear](#linear). Used first differences as the nth term: [quadratic](#quadratic). Close earlier solutions.

<div class="lesson-check" markdown="1">

### Retry step and position {#retry-rules}

**Question:** Start at 2 and double each term: list five terms. A different sequence has tₙ=3n−2: give its first five terms and term 20. Explain the different meanings of “double” and “3n”.

<details markdown="1">

<summary>Hint</summary>

One acts on the last output; the other acts on the position.

</details>

<details markdown="1">

<summary>Solution and check</summary>

$$2,4,8,16,32;\qquad 1,4,7,10,13;\quad t_{20}=58.$$

Doubling is a term-to-term action. 3n multiplies the position by 3 before subtracting 2. Repeated doubling is not a constant difference.

</details>

</div>

<div class="lesson-check" markdown="1">

### Retry the families {#retry-families}

**Question:** Find the seventh triangular, square and cube numbers. Is 125 square, cube, or both? State the position if it belongs.

<details markdown="1">

<summary>Hint</summary>

Use n(n+1)/2, n² and n³.

</details>

<details markdown="1">

<summary>Solution and check</summary>

$$T_7=28,\quad S_7=49,\quad C_7=343;\qquad 125=5^3.$$

125 is the fifth cube, not a square: 11²=121 and 12²=144 enclose it, with no whole-number square between.

</details>

</div>

<div class="lesson-check" markdown="1">

### Retry membership {#retry-linear}

**Question:** A linear sequence is 14,9,4,−1,… . Find its nth term, term 8, and decide whether −36 belongs.

<details markdown="1">

<summary>Hint</summary>

The difference is negative; position is still positive.

</details>

<details markdown="1">

<summary>Solution and check</summary>

$$t_n=14-5(n-1)=19-5n,\quad t_8=-21,$$

$$19-5n=-36\Rightarrow n=11.$$

−36 belongs at position 11. A negative term does not mean a negative position.

</details>

</div>

<div class="lesson-check" markdown="1">

### Retry a changing difference {#retry-quadratic}

**Question:** A quadratic sequence begins 1,6,15,28,45,… . Find its nth term and decide whether 66 belongs.

<details markdown="1">

<summary>Hint</summary>

Second difference is 4; subtract 2n².

</details>

<details markdown="1">

<summary>Solution and check</summary>

$$t_n-2n^2:\ -1,-2,-3,-4,-5;\quad t_n=2n^2-n,$$

$$2n^2-n=66\Rightarrow(2n+11)(n-6)=0\Rightarrow n=6\text{ or }-\tfrac{11}{2}.$$

Only n=6 is a positive integer, so 66 is the sixth term. Check 2(36)−6=66. Discard the other algebraic position because it is not an index.

</details>

</div>

## Next step and later review {#next-step}

Next study [differentiation and motion](/igcse/mathematics/differentiation-and-motion/#start), then mix [number and algebra](/igcse/mathematics/mixed-review/#number-review). After another topic, return to practice-choice and justify a rule without looking at the difference method.

[Try the mixed algebra review after another topic.](/igcse/mathematics/mixed-review/#algebra-review) Close solutions and record what you can do without help.

## Scope and sources {#sources}

<details markdown="1">

<summary>Qualification and sources used</summary>

A24–26, specification PDF 17 (printed 18). A finite list is used together with an explicit family assumption. No arithmetic/geometric series sums are imposed as a new requirement.

Read 2E QP PDF 15 Q18 with paired [MS PDF 11](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92602E-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=11); the MS explicitly develops second differences and subtraction of an². Tasks here use different self-written sequences.

OxfordAQA International GCSE Mathematics **9260**, specification **v5.1**. [Qualification](https://www.oxfordaqa.com/qualification/international-gcse-mathematics-9260/); [specification](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-gcse-mathematics-specification.pdf). Assessment references below are **Specimen 2018** even where the URL says 2016. They calibrate scope and reasoning; no task here is an official examination question.

</details>
