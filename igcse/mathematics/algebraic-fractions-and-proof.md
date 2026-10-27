---
layout: subjects
title: "Algebraic fractions and proof"
mathjax: true
grade: igcse
subject: igcse-mathematics
permalink: /igcse/mathematics/algebraic-fractions-and-proof/
reading_layout: true
study_page: true
toc_headings: "h2"
---

[IGCSE Mathematics](/igcse/mathematics/#learning-start)

{:.lesson-meta}

## Start here {#start}

A fraction with a letter still obeys fraction arithmetic. The new difficulty is that its denominator may become zero. We will keep track of allowed values, then use algebra to explain statements that hold for every allowed input.

You need [fraction arithmetic](/igcse/mathematics/number-operations/#start) and [expansion/factors](/igcse/mathematics/expressions-and-formulae/#factorising). Start with numerical denominators and equivalence, then use the same reasoning with algebraic denominators and general proofs.

All examples, tasks and data on this page are self-written, with no official marks; data are illustrative. Try on paper before opening help.

{:.lesson-meta}

## Start with ordinary fraction rules {#numeric-denominators}

For addition/subtraction, make the denominators equal: the pieces must have the same size. For multiplication, multiply numerators and denominators. To divide by a nonzero fraction, multiply by its reciprocal. Keep brackets around a whole numerator.

<div class="worked-example" markdown="1">

### Same-sized pieces {#example-numeric}

**Question:** Simplify $(x+1)/3-(x-2)/4$ and $(2x/3)\div(5/6)$.

$$\frac{x+1}{3}-\frac{x-2}{4}=\frac{4(x+1)-3(x-2)}{12}=\frac{4x+4-3x+6}{12}=\frac{x+10}{12}.$$

$$\frac{2x}{3}\div\frac56=\frac{2x}{3}\times\frac65=\frac{4x}{5}.$$

The minus sign affects both terms of (x−2). Check x=2 in the subtraction: 1−0=1 and (2+10)/12=1. No x is excluded by these constant nonzero denominators.

</div>

## Try before opening help {#practice}

<div class="lesson-check" markdown="1">

### Use all four operations {#practice-numeric}

**Question:** Simplify $(x+2)/6+(x-1)/3$, $(x+2)/6-(x-1)/3$, $(3x/4)(2/5)$ and $(3x/4)\div(9/8)$.

<details markdown="1">

<summary>Hint</summary>

Use sixths for the first two. Division changes the second fraction to its reciprocal.

</details>

<details markdown="1">

<summary>Solution and check</summary>

$$\frac{x+2+2(x-1)}6=\frac{x}{2},\qquad \frac{x+2-2(x-1)}6=\frac{4-x}{6},$$

$$\frac{3x}{4}\times\frac25=\frac{3x}{10},\qquad \frac{3x}{4}\times\frac89=\frac{2x}{3}.$$

If the subtraction gave −x/6, the constant terms were lost. Check x=0: its original value is 2/6+1/3=2/3.

</details>

</div>

## What may be cancelled? {#conditions}

Division by zero is undefined. Record exclusions from the original expression before simplifying. Cancellation removes a common nonzero factor, never just matching pieces of a sum.

<div class="worked-example" markdown="1">

### Factor before cancelling {#example-cancel}

**Question:** Simplify $(x^2-9)/(x^2+x-6)$, stating all restrictions.

$$x^2-9=(x-3)(x+3),\qquad x^2+x-6=(x+3)(x-2),$$

$$\frac{x^2-9}{x^2+x-6}=\frac{(x-3)(x+3)}{(x+3)(x-2)}=\frac{x-3}{x-2},\quad x\ne-3,2.$$

The factor x+3 cancels only when it is nonzero. The simplified formula happens to give a number at x=−3, but the original was undefined there: that excluded input stays excluded. At x=3 the numerator is zero and denominator is not, so value 0 is allowed.

</div>

## Combine rational expressions {#operations}

<div class="worked-example" markdown="1">

### Build a common denominator {#example-operations}

**Question:** Write $2/(x-1)+3/(x+2)$ as a single fraction.

$$\frac{2}{x-1}+\frac{3}{x+2}=\frac{2(x+2)+3(x-1)}{(x-1)(x+2)}=\frac{5x+1}{(x-1)(x+2)},\quad x\ne1,-2.$$

The fraction 2/(x−1) was multiplied top and bottom by x+2, which is nonzero on the allowed inputs. Adding denominators would change the sizes of the pieces.

</div>

<div class="worked-example" markdown="1">

### A divisor must not be zero {#example-division}

**Question:** Simplify $(x^2-4)/(x+1)\div((x-2)/(x+3))$.

$$\frac{x^2-4}{x+1}\div\frac{x-2}{x+3}=\frac{(x-2)(x+2)}{x+1}\times\frac{x+3}{x-2}=\frac{(x+2)(x+3)}{x+1}.$$

Original denominators exclude −1 and −3. The divisor itself is zero at x=2, so exclude 2 as well. Thus x≠−1,−3,2 even though factors disappear. Check x=0: original −4÷(−2/3)=6 and simplified gives 6.

</div>

<div class="lesson-check" markdown="1">

### Simplify and keep the conditions {#practice-fractions}

**Question:** Simplify each expression, stating every excluded x: (a) $(x^2-4)/(x^2-x-6)$; (b) $1/(x-1)-2/(x+1)$; (c) $((x+2)/(x-1))((x-1)/(x+3))$; (d) $((x+2)/(x-1))\div((x+2)/(x+3))$.

<details markdown="1">

<summary>Hint</summary>

Factor in (a). Use a common denominator in (b). For (d), check both original denominators and whether the divisor is zero.

</details>

<details markdown="1">

<summary>Solution and check</summary>

$$\text{(a)}\quad \frac{(x-2)(x+2)}{(x-3)(x+2)}=\frac{x-2}{x-3},\quad x\ne3,-2;$$

$$\text{(b)}\quad \frac{x+1-2(x-1)}{(x-1)(x+1)}=\frac{3-x}{(x-1)(x+1)},\quad x\ne1,-1;$$

$$\text{(c)}\quad \frac{x+2}{x+3},\quad x\ne1,-3;\qquad \text{(d)}\quad \frac{x+3}{x-1},\quad x\ne1,-3,-2.$$

In (c), x=−2 is allowed: the product equals zero. In (d), the same input makes the divisor zero, so it is forbidden. The operation, not just the final formula, determines the domain.

</details>

</div>

## Explain equality, or find a counterexample {#equivalence}

To show expressions are equivalent, transform them using rules valid for every stated input. Checking several numbers may discover a mistake but cannot prove an identity. To disprove an “always” statement, one allowed counterexample is enough.

<div class="worked-example" markdown="1">

### Use structure, not samples {#example-equivalence}

**Question:** Show that $4(x-2)+3x$ and $7x-8$ are equivalent for all real x.

$$4(x-2)+3x=4x-8+3x=7x-8.$$

Distribution and collection are valid for every real x; that explains the universal conclusion. The equation 4(x−2)+3x=7x−7 is instead false for every x, since its two sides differ by 1.

</div>

<div class="lesson-check" markdown="1">

### Decide two claims {#practice-argument}

**Question:** Show that $(x+2)^2-x^2=4x+4$ for every real x. A learner claims $(x+2)^2=x^2+4$ for every x. Explain the missing part and give a counterexample.

<details markdown="1">

<summary>Hint</summary>

Expand the square as two brackets, not as separate squares.

</details>

<details markdown="1">

<summary>Solution and check</summary>

$$(x+2)^2-x^2=x^2+4x+4-x^2=4x+4.$$

The learner omitted the two cross-products 2x+2x. At x=1 the left is 9 and claimed right is 5. That disproves the claim; x=0 alone would have hidden the error.

</details>

</div>

## From any integer to a conclusion {#proof}

An even integer has the form 2n; an odd integer has form 2n+1, with n an integer. Consecutive integers differ by 1; consecutive odd or even integers differ by 2. Define n before using it. Finish by connecting your expression to the property being proved.

<div class="worked-example" markdown="1">

### A complete general argument {#example-proof}

**Question:** Prove that the sum of any two consecutive integers is odd.

Let n be any integer. The next integer is n+1.

$$n+(n+1)=2n+1.$$

Since n is an integer, 2n+1 is odd. Therefore the sum of any two consecutive integers is odd. A few numerical pairs would not cover every integer, including negative ones.

</div>

<div class="lesson-check" markdown="1">

### Write a general proof {#practice-proof}

**Question:** (a) Prove that the square of any odd integer is odd. (b) Prove that the larger square minus the smaller square of two consecutive positive even integers is a multiple of 4 but not of 8. State your integer definitions.

<details markdown="1">

<summary>Hint</summary>

Use 2n+1 in (a). For (b) use 2n and 2n+2, with n positive; factor the difference.

</details>

<details markdown="1">

<summary>Solution and check</summary>

$$\text{(a)}\quad (2n+1)^2=4n^2+4n+1=2(2n^2+2n)+1.$$

$$\text{(b)}\quad (2n+2)^2-(2n)^2=8n+4=4(2n+1).$$

(a) Let n be any integer. The bracket 2n²+2n is an integer, so the form 2k+1 is odd. (b) Let n be a positive integer. 4(2n+1) is a multiple of 4, and its quotient by 4 is odd, so it is not divisible by 8. State both conclusions; merely expanding is not the whole proof.

</details>

</div>

## Find the cause, then retry {#retry}

Bad common denominators: [ordinary rules](#numeric-denominators). Lost exclusions or cancelling terms: [conditions](#conditions). Division errors: [operations](#operations). Evidence from examples only: [equivalence](#equivalence). Missing integer or conclusion: [proof](#proof).

<div class="lesson-check" markdown="1">

### Retry fraction operations {#retry-numeric}

**Question:** Simplify $(2x-1)/4+(x+1)/2$, $(2x-1)/4-(x+1)/2$, $(x/3)(9/2)$ and $(x/3)\div(2/9)$.

<details markdown="1">

<summary>Hint</summary>

Use quarters and bracket the whole numerator.

</details>

<details markdown="1">

<summary>Solution and check</summary>

$$\frac{4x+1}{4},\qquad -\frac34,\qquad \frac{3x}{2},\qquad \frac{3x}{2}.$$

</details>

</div>

<div class="lesson-check" markdown="1">

### Retry conditions and cancellation {#retry-fractions}

**Question:** Simplify $(x^2-1)/(x^2-3x+2)$, $1/x+1/(x+1)$, and $((x-1)/(x+2))\div((x-1)/(x+3))$. State restrictions.

<details markdown="1">

<summary>Hint</summary>

Write original restrictions first; the divisor must be nonzero.

</details>

<details markdown="1">

<summary>Solution and check</summary>

$$\frac{x+1}{x-2},\ x\ne1,2;\qquad \frac{2x+1}{x(x+1)},\ x\ne0,-1;$$

$$\frac{x+3}{x+2},\quad x\ne-2,-3,1.$$

The last restriction x≠1 comes from a zero divisor, not a zero denominator.

</details>

</div>

<div class="lesson-check" markdown="1">

### Retry an identity {#retry-argument}

**Question:** Is $(x-1)(x+1)=x^2+1$ an identity? Correct it and justify the correction for every real x.

<details markdown="1">

<summary>Hint</summary>

Keep the cross-products and constant signs.

</details>

<details markdown="1">

<summary>Solution and check</summary>

$$(x-1)(x+1)=x^2+x-x-1=x^2-1.$$

The claim is false; x=0 gives −1 versus 1. Distribution proves the corrected identity for all real x.

</details>

</div>

<div class="lesson-check" markdown="1">

### Retry a general statement {#retry-proof}

**Question:** Prove that the product of two consecutive integers is even. Then prove that the sum of two consecutive odd integers is a multiple of 4.

<details markdown="1">

<summary>Hint</summary>

Among consecutive integers, one is even. Consecutive odd integers can be written 2n+1 and 2n+3.

</details>

<details markdown="1">

<summary>Solution and check</summary>

Let n be any integer. If n is even then n(n+1) has an even factor; if n is odd then n+1 is even. In either case the product is divisible by 2.

$$(2n+1)+(2n+3)=4n+4=4(n+1).$$

Since n+1 is an integer, the sum is a multiple of 4. The conclusion is not just a pattern from small numbers.

</details>

</div>

## Next step and later review {#next-step}

Next use [equations and inequalities](/igcse/mathematics/equations-and-inequalities/#start). After studying graphs, return to the multiplication/division comparison in practice-fractions and explain why their allowed inputs differ.

[Try the mixed algebra review after another topic.](/igcse/mathematics/mixed-review/#algebra-review) Close solutions and record what you can do without help.

## Scope and sources {#sources}

<details markdown="1">

<summary>Qualification and sources used</summary>

A7–8, specification PDF 14 (printed 15). Fraction reasoning starts with numerical denominators and leads to algebraic denominators and general proofs.

Read 1E QP PDF 16 Q17, 25 Q25 with [MS PDF 9–10](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9260-92601E-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=9) and 12; 2E QP PDF 18 Q21 with [MS PDF 12](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92602E-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=12).

OxfordAQA International GCSE Mathematics **9260**, specification **v5.1**. [Qualification](https://www.oxfordaqa.com/qualification/international-gcse-mathematics-9260/); [specification](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-gcse-mathematics-specification.pdf). Assessment references below are **Specimen 2018** even where the URL says 2016. They calibrate scope and reasoning; no task here is an official examination question.

</details>
