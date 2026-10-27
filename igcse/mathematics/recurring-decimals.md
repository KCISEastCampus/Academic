---
layout: subjects
title: "Recurring decimals"
mathjax: true
grade: igcse
subject: igcse-mathematics
permalink: /igcse/mathematics/recurring-decimals/
reading_layout: true
study_page: true
toc_headings: "h2"
---

[IGCSE Mathematics](/igcse/mathematics/#learning-start)
{:.lesson-meta}

## a decimal that does not stop {#start}

One third is exact, but a screen showing 0.333333 has stopped after finitely many digits. In this lesson you will distinguish a repeating value from its approximation and convert both ways. You need [fraction meaning](/igcse/mathematics/fractions-decimals-and-percentages/#same-amount), [division](/igcse/mathematics/number-operations/#written-methods) and the idea that doing the same operation on both sides keeps an equation true. All tasks are self-written, with no official marks.

## The remainder tells you what happens next {#remainders}

Long division makes one digit at a time. For $\frac38$, divide 3.000 by 8. The first digit is 3 because 30 contains three 8s, with remainder 6. Bring down 0: 60 gives 7 with remainder 4. Bring down 0: 40 gives 5 with remainder 0. So the decimal stops at 0.375.

For a fixed denominator, the same remainder produces the same next digit and next remainder. If a non-zero remainder returns, the cycle repeats. A bar marks exactly the repeating block:

$$0.\overline{27}=0.272727\ldots,\qquad0.1\overline6=0.166666\ldots.$$

The first 1 in the second number does not repeat. An ellipsis must have an explained pattern; a finite calculator display alone does not prove that the digits repeat forever.

<div class="worked-example" markdown="1">

### Watch a remainder return {#example-division}

**Question:** Convert $\frac7{12}$ to a decimal, marking the recurring part.

Divide 7.000... by 12. 70 contains five 12s, leaving 10; 100 contains eight 12s, leaving 4; 40 contains three 12s, leaving 4 again.

$$70=5\times12+10,\quad100=8\times12+4,\quad40=3\times12+4.$$

The remainder 4 has returned, so every later step produces 3 and remainder 4:

$$\frac7{12}=0.58\overline3.$$

Only 3 repeats. Writing a bar over 583 would describe a different number. Check the rough size: 7/12 is slightly more than one half.

</div>

## Move the tails until they match {#align-tails}

Multiplying by 10 moves the decimal one place; multiplying by 100 moves it two. Choose shifts so both expressions have exactly the same repeating tail. Subtract the equal tails, leaving a finite equation. The repeated decimal denotes the exact infinite value, not a rounded display.

<div class="worked-example" markdown="1">

### A two-digit block {#example-pure}

**Question:** Write $0.\overline{27}$ as a fraction in its simplest form.

Let $x=0.272727\ldots$. Shift by the whole two-digit block, not one digit:

$$100x=27.272727\ldots,\qquad x=0.272727\ldots.$$

$$100x-x=27,\qquad99x=27,\qquad x=\frac{27}{99}=\frac3{11}.$$

Dividing 3 by 11 returns 0.272727... . The denominator 99 appears because the two aligned equations differ by 100-1; it is not an unexplained rule.

</div>

<div class="worked-example" markdown="1">

### A non-repeating start {#example-mixed}

**Question:** Write $0.1\overline6$ as a fraction in its simplest form.

Let $x=0.166666\ldots$. Multiplying once moves past the non-repeating 1; multiplying again moves one whole repeating block:

$$10x=1.666666\ldots,\qquad100x=16.666666\ldots.$$

The tails now match:

$$100x-10x=15,\qquad90x=15,\qquad x=\frac{15}{90}=\frac16.$$

Subtracting only $10x-x$ would leave different tails and would not give an integer on the right. The exact value is not 0.16 or 0.17; those are approximations.

</div>

## Convert in both directions {#practice}

<div class="lesson-check" markdown="1">

### Follow the remainders {#practice-division}

**Question:** Use division to write $\frac56$ and $\frac7{11}$ as decimals. Mark the exact repeating blocks and show a repeated remainder. Is 0.6364 exactly equal to $\frac7{11}$?

<details markdown="1">
<summary>Hint</summary>

Record the remainder after each new decimal digit.

</details>

<details markdown="1">
<summary>Solution and check</summary>

For 5/6, 50 gives digit 8, remainder 2; 20 gives digit 3, remainder 2 again.

$$\frac56=0.8\overline3.$$

For 7/11, 70 gives digit 6, remainder 4; 40 gives digit 3, remainder 7. This returns to the starting remainder:

$$\frac7{11}=0.\overline{63}.$$

0.6364 is a rounded value, not the exact fraction. Check: $0.6364\times11=7.0004\ne7$.

</details>

</div>

<div class="lesson-check" markdown="1">

### Choose the shifts yourself {#practice-conversion}

**Question:** Write $0.\overline{36}$ and $0.2\overline{36}$ as fractions in simplest form. Show why your subtraction removes the entire repeating tail.

<details markdown="1">
<summary>Hint</summary>

For the second value, first move past the single non-repeating digit, then move a whole two-digit block.

</details>

<details markdown="1">
<summary>Solution and check</summary>

For the first, let $x=0.363636\ldots$:

$$100x-x=36,\qquad x=\frac{36}{99}=\frac4{11}.$$

For the second, let $y=0.2363636\ldots$:

$$10y=2.363636\ldots,\qquad1000y=236.363636\ldots.$$

$$990y=234,\qquad y=\frac{234}{990}=\frac{13}{55}.$$

Both subtracted tails begin .363636... and continue identically. The non-repeating 2 is accounted for by subtracting 2 from 236; simply writing 236/999 would wrongly repeat all three digits.

</details>

</div>

<div class="lesson-check" markdown="1">

### Is the claimed shortcut valid? {#practice-reasoning}

**Question:** A learner claims $0.1\overline8=\frac{18}{99}$. Decide whether this is true, prove your conclusion by aligned equations, and compare $0.\overline9$ with 1 exactly.

<details markdown="1">
<summary>Hint</summary>

The 1 does not repeat in the first decimal. For the second, set the exact recurring value equal to a letter.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Let $x=0.188888\ldots$:

$$100x-10x=18.888888\ldots-1.888888\ldots=17,\qquad x=\frac{17}{90}.$$

The proposed fraction repeats 18, so is a different value. Let $z=0.999999\ldots$:

$$10z-z=9,\qquad9z=9,\qquad z=1.$$

Thus $0.\overline9=1$, not merely approximately 1. A finite string such as 0.999 is smaller than 1; an infinite recurring decimal is not a final finite string with a last 9.

</details>

</div>

## Repair the pattern, then try again {#retry}

A wrong bar or unjustified calculator claim calls for [remainders](#remainders). A wrong fraction calls for [aligned tails](#align-tails). A numerical check can reject a false answer, but your conversion still needs equations.

<div class="lesson-check" markdown="1">

### Retry from a fraction {#retry-division}

**Question:** Convert $\frac{13}{15}$ to a recurring decimal using remainders. Explain why 0.867 is an approximation.

<details markdown="1">
<summary>Hint</summary>

After the first digit, watch for a remainder that returns immediately.

</details>

<details markdown="1">
<summary>Solution and check</summary>

130 divided by 15 gives 8, remainder 10; 100 divided by 15 gives 6, remainder 10 again.

$$\frac{13}{15}=0.8\overline6,\qquad0.867\times15=13.005\ne13.$$

The repeating part is only 6. The three-decimal-place answer has rounded up the next 6.

</details>

</div>

<div class="lesson-check" markdown="1">

### Retry with two starts {#retry-conversion}

**Question:** Convert $0.\overline{18}$ and $0.3\overline{18}$ to simplest fractions. Explain why their denominators before simplification differ.

<details markdown="1">
<summary>Hint</summary>

Compare shifts of 100 and 1 for the first, 1000 and 10 for the second.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Let $x=0.\overline{18}$ and $y=0.3\overline{18}$.

$$99x=18,\qquad x=\frac{18}{99}=\frac2{11}.$$

$$1000y=318.181818\ldots,\quad10y=3.181818\ldots,$$

$$990y=315,\qquad y=\frac{315}{990}=\frac7{22}.$$

The second needs an extra shift to pass its non-repeating 3. The denominator comes from the difference between the chosen multipliers, not from the number of visible digits alone.

</details>

</div>

## Keep exact values in later calculations {#next-step}

Continue to [percentage change](/igcse/mathematics/percentage-change/#start). After another topic, return through [mixed number review](/igcse/mathematics/mixed-review/#number-review). When two quantities look equal on a short display, check whether exact fractions agree before concluding equality.

## Scope and sources {#sources}

<details markdown="1">
<summary>Scope, tier and reference reading</summary>

N12: convert between fractions and recurring decimals. The paired fraction question below supports exact fraction manipulation only; it is not a specimen recurring-decimal question. No dedicated recurring-decimal question was found in the specimen pages read.

[OxfordAQA 9260 specification v5.1, PDF p.12](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-gcse-mathematics-specification.pdf).

9260/2E, **Specimen 2018**, Q6 (exact-fraction prerequisite): [QP PDF p.5](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92602E-international-gcse-mathematics-specimen-paper-2016-v1.pdf#page=5), [MS PDF p.5](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92602E-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=5).

The paired pages above informed the teaching; no official question is reproduced here. All examples and tasks are self-written, with no official marks. Contexts and diagram data are constructed for learning.

</details>
