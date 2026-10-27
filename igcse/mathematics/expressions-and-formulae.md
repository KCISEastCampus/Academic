---
layout: subjects
title: "Expressions and formulae"
mathjax: true
grade: igcse
subject: igcse-mathematics
permalink: /igcse/mathematics/expressions-and-formulae/
reading_layout: true
study_page: true
toc_headings: "h2"
---

[IGCSE Mathematics](/igcse/mathematics/#learning-start)

{:.lesson-meta}

## Start here {#start}

If one ticket costs 4 dollars, three tickets cost 3×4. For an unknown number n of tickets, 4n says the same thing without choosing n first. Algebra keeps a calculation useful when the numbers change.

You need signed-number arithmetic and [fraction operations](/igcse/mathematics/number-operations/#start). Begin with letters, then build up to three brackets, non-monic quadratic factors and more complex rearranging.

All examples, tasks and data on this page are self-written, with no official marks; data are illustrative. Try on paper before opening help.

{:.lesson-meta}

## Let a letter stand for a number {#letters}

A letter represents a number, not an object label. If n counts tickets, n is a non-negative integer. In 4n, multiplication is understood: 4×n. In ab the letters multiply; they do not make a two-digit number. A power counts repeated factors: x²=x×x, whereas 2x=x+x.

<div class="worked-example" markdown="1">

### A cost rule {#example-letters}

**Question:** A shop charges 3 dollars for each notebook and 2 dollars for delivery. Write the cost C for n notebooks.

The notebook charge repeats n times, but delivery is charged once. Define n as a positive whole number.

$$C=3n+2.$$

For n=4, the rule gives 14 dollars: four charges of 3 plus one charge of 2. The expression 5n would charge delivery on every notebook.

</div>

## Name what an expression is doing {#language}

An **expression** such as 3x+2 names a value. An **equation**, 3x+2=14, says two values are equal and may hold only for particular x. A **formula** relates quantities, such as C=3n+2. An **identity**, 3(x+2)≡3x+6, holds for every allowed x. An **inequality**, 3x+2<14, compares values.

Terms are the pieces joined by addition/subtraction, keeping their signs: 5x−2y+7 has terms 5x, −2y, 7. Factors are multiplied pieces: 3 and (x+2) are factors of 3(x+2). A coefficient is the numerical factor, such as −2 in −2y.

## Try each new idea {#practice}

<div class="lesson-check" markdown="1">

### Represent and explain {#practice-language}

**Question:** A taxi charges 5 dollars plus 2 dollars per kilometre. Write a formula for cost C over d kilometres, d≥0. Identify the terms in the cost expression and the factors in 2(d+3). Is 2(d+3)=2d+6 an identity? Is 2d+5=17 an identity? Explain.

<details markdown="1">

<summary>Hint</summary>

Keep a fixed charge separate from a repeated charge. An identity must hold for every allowed input.

</details>

<details markdown="1">

<summary>Solution and check</summary>

$$C=5+2d.$$

Cost terms are 5 and 2d; the factors of 2(d+3) are 2 and (d+3). Expanding 2(d+3) gives 2d+6 for all d: an identity, whose left factors are 2 and (d+3). The equation 2d+5=17 holds only at d=6, so it is not an identity. d=0 is a counterexample.

</details>

</div>

## Put numbers in carefully {#substitution}

Substitution replaces each occurrence of a letter by its given value. Put a negative value in brackets before squaring. Follow powers, multiplication/division, then addition/subtraction.

<div class="worked-example" markdown="1">

### A negative input {#example-substitution}

**Question:** Evaluate $2a^2-3b$ when $a=-2$ and $b=5$.

$$2(-2)^2-3(5)=2(4)-15=-7.$$

The square applies to the entire value −2. Without brackets, −2² means −(2²)=−4, a different operation.

</div>

<div class="lesson-check" markdown="1">

### Check a claim {#practice-substitution}

**Question:** For $a=-3$, $b=2$, evaluate $ab$, $a^2-b^2$ and $2a^2$. A learner says $2a^2=(2a)^2$. Use your values to decide.

<details markdown="1">

<summary>Hint</summary>

ab is multiplication; the exponent in 2a² applies to a only.

</details>

<details markdown="1">

<summary>Solution and check</summary>

$$ab=-6,\qquad a^2-b^2=9-4=5,\qquad 2a^2=18,\qquad (2a)^2=36.$$

The claim fails: doubling after squaring differs from squaring a doubled number. This single counterexample disproves an alleged identity.

</details>

</div>

## Collect and open brackets {#expansion}

Only terms with the same letter powers combine: 3x+5x=8x, but 3x+5x² has two different kinds of term. Expansion distributes a factor to every term. A negative sign outside a bracket multiplies every term by −1.

<div class="worked-example" markdown="1">

### Keep all products {#example-expansion}

**Question:** Expand and simplify $(x+3)(x-2)-2(x-1)$.

Multiply each term of the first bracket by each of the second, then distribute −2.

$$(x+3)(x-2)=x^2-2x+3x-6=x^2+x-6,$$

$$x^2+x-6-2x+2=x^2-x-4.$$

Check x=0: both original and result give −4. This is a useful error check, not proof for every x; the expansion supplies that reasoning.

</div>

<div class="lesson-check" markdown="1">

### Find an area expression {#practice-expansion}

**Question:** A rectangle has sides (x+4) cm and (x−1) cm, where x>1. Write its area in expanded form. Then simplify $3x^2+2x-x^2+5x$.

<details markdown="1">

<summary>Hint</summary>

Area multiplies the side expressions; unlike powers cannot combine.

</details>

<details markdown="1">

<summary>Solution and check</summary>

$$(x+4)(x-1)=x^2+3x-4,\qquad 3x^2+2x-x^2+5x=2x^2+7x.$$

The area is (x²+3x−4) cm². The condition x>1 keeps both lengths positive; x=2 gives 6 cm² in either form.

</details>

</div>

## Three factors {#three-brackets}

<div class="worked-example" markdown="1">

### Work with two brackets first {#example-three}

**Question:** Expand $(x+1)(x-1)(x+2)$.

Doing two brackets first keeps the products manageable. Then multiply the quadratic by each term of the last bracket.

$$(x+1)(x-1)=x^2-1,$$

$$(x^2-1)(x+2)=x^3+2x^2-x-2.$$

Check x=1: the original has a zero factor and the cubic also gives zero.

</div>

<div class="lesson-check" markdown="1">

### Combine three factors {#practice-three}

**Question:** Expand $(x+1)(x+2)(x-3)$ and check your result at x=0 and x=3.

<details markdown="1">

<summary>Hint</summary>

Expand the first two, then distribute the last bracket to all three terms.

</details>

<details markdown="1">

<summary>Solution and check</summary>

$$(x^2+3x+2)(x-3)=x^3-3x^2+3x^2-9x+2x-6=x^3-7x-6.$$

At x=0 both give −6; at x=3 both give 0. Checks can detect missing terms; the distributed expansion explains equality for all x.

</details>

</div>

## Put multiplication back together {#factorising}

Factorising reverses expansion. First look for a factor in every term: 6x²−9x=3x(2x−3). For x²+bx+c, look for two numbers adding to b and multiplying to c. Their values come from expanding (x+r)(x+s)=x²+(r+s)x+rs.

<div class="worked-example" markdown="1">

### Use the middle and constant terms {#example-factors}

**Question:** Factorise $x^2+x-6$ and $x^2-16$.

The pair 3,−2 has sum 1 and product −6. A difference of squares uses (u−v)(u+v)=u²−v².

$$x^2+x-6=(x+3)(x-2),\qquad x^2-16=(x-4)(x+4).$$

Multiplying back checks every coefficient. x²+16 is a sum of squares and does not factor by this real-number pattern.

</div>

If the x² coefficient is not 1, split the middle term so grouping produces a common bracket. For 2x²+7x+3, the split numbers multiply to 2×3=6 and add to 7: they are 6 and 1.

$$2x^2+7x+3=2x^2+6x+x+3=2x(x+3)+(x+3)=(2x+1)(x+3).$$

<div class="lesson-check" markdown="1">

### Choose a factorisation {#practice-factors}

**Question:** Factorise fully: $8x^2-12x$, $x^2-5x+6$, $9x^2-25$, and $6x^2+x-2$. Explain how multiplying back checks your last answer.

<details markdown="1">

<summary>Hint</summary>

Look for a common factor, a sum/product pair, or a difference of squares. For the last one use product −12 and sum 1.

</details>

<details markdown="1">

<summary>Solution and check</summary>

$$8x^2-12x=4x(2x-3),\quad x^2-5x+6=(x-2)(x-3),$$

$$9x^2-25=(3x-5)(3x+5),\quad 6x^2+x-2=(3x+2)(2x-1).$$

For the last, middle products −3x and 4x sum to x; first product is 6x² and constant product −2. Matching just the constant is insufficient.

</details>

</div>

## Change which letter is alone {#rearrange}

The subject of a formula is the isolated letter. Rearranging preserves equality by doing the same operation to both sides. Undo outer operations first, as if unwrapping a parcel.

<div class="worked-example" markdown="1">

### Undo in reverse order {#example-rearrange}

**Question:** Make t the subject of $v=u+at$, where $a\ne0$.

Subtract u from both sides, then divide both sides by a.

$$v-u=at,\qquad t=\frac{v-u}{a}.$$

a≠0 permits division. If a=0, the original only says v=u and cannot determine t.

</div>

<div class="lesson-check" markdown="1">

### Choose the new subject {#practice-rearrange}

**Question:** Make h the subject of $A=\frac12bh$ ($b>0$). Make r the subject of $C=2\pi r$. Then evaluate h when A=30 cm² and b=12 cm.

<details markdown="1">

<summary>Hint</summary>

Remove multiplication factors using the same division on both sides.

</details>

<details markdown="1">

<summary>Solution and check</summary>

$$2A=bh,\qquad h=\frac{2A}{b},\qquad r=\frac{C}{2\pi},\qquad h=\frac{2(30)}{12}=5\text{ cm}.$$

Check ½×12×5=30 cm². Area divided by length gives length, so units agree.

</details>

</div>

## A letter on both sides {#twice}

An unknown occurring twice cannot be isolated by moving just one occurrence. Clear the denominator, gather every subject term on one side, factor it out, then divide. State excluded denominator values.

<div class="worked-example" markdown="1">

### Collect before dividing {#example-twice}

**Question:** Make x the subject of $y=(3x+2)/(x-1)$, with $x\ne1$.

$$y(x-1)=3x+2,\quad yx-y=3x+2,\quad yx-3x=y+2,$$

$$x(y-3)=y+2,\qquad x=\frac{y+2}{y-3},\quad y\ne3.$$

Why y≠3? Putting y=3 into the original would require 3x−3=3x+2, impossible. Check y=8 gives x=2, and the original then gives 8. Do not divide by x: that would lose any permitted x=0.

</div>

<div class="lesson-check" markdown="1">

### Keep every occurrence {#practice-twice}

**Question:** Make x the subject of $y=(4x-1)/(x+2)$, where $x\ne-2$. State the restriction on y. Also make r the subject of $V=\pi r^2h$ for $r>0$, $h>0$.

<details markdown="1">

<summary>Hint</summary>

For x collect the two x terms. For r isolate r², then use the positive square root because r is a radius.

</details>

<details markdown="1">

<summary>Solution and check</summary>

$$yx+2y=4x-1,\quad x(y-4)=-1-2y,\quad x=\frac{1+2y}{4-y},\quad y\ne4.$$

$$r^2=\frac{V}{\pi h},\qquad r=\sqrt{\frac{V}{\pi h}},\quad V>0.$$

At y=4 the x equation would require 8=−1, impossible. A radius cannot take the negative square-root branch.

</details>

</div>

## Connect to powers {#indices}

Multiplying the same base adds exponents because the factors join; dividing subtracts them because factors cancel. These are product/quotient rules, not rules for adding terms. A zero or negative exponent requires a nonzero base. For fractional powers, a^(1/n) means an nth root, subject to real-root conditions.

$$x^3x^2=x^5,\quad \frac{x^5}{x^2}=x^3\ (x\ne0),\quad 16^{3/4}=(\sqrt[4]{16})^3=8.$$

<div class="lesson-check" markdown="1">

### Use and reject a rule {#practice-indices}

**Question:** Simplify $6a^3b^2/(3ab^5)$ for nonzero a,b. Is $x^2+x^3=x^5$ an identity? Evaluate $27^{2/3}$.

<details markdown="1">

<summary>Hint</summary>

Use index subtraction only in division. Test the addition claim at x=1.

</details>

<details markdown="1">

<summary>Solution and check</summary>

$$\frac{6a^3b^2}{3ab^5}=\frac{2a^2}{b^3},\qquad 27^{2/3}=(\sqrt[3]{27})^2=9.$$

The claim is false: at x=1 the left is 2 but right is 1. For the complete integer/fractional-power rules use [powers and roots](/igcse/mathematics/powers-roots-and-standard-form/#start).

</details>

</div>

## Repair the matching idea {#retry}

Return to [letters](#letters) for a fixed/repeated-cost error, [substitution](#substitution) for negative powers, [expansion](#expansion) for missing products, [factorising](#factorising) for mismatched coefficients, [rearranging](#rearrange) or [two occurrences](#twice) for formula errors, and [indices](#indices) for invalid exponent rules. Close the old solution.

<div class="lesson-check" markdown="1">

### Retry notation {#retry-language}

**Question:** A club charges 12 dollars membership plus 3 dollars per visit. Write a formula for n visits. Name the terms and factors in 3(n+4). Explain whether 3(n+4)=3n+12 is an identity.

<details markdown="1">

<summary>Hint</summary>

Ask which cost happens once.

</details>

<details markdown="1">

<summary>Solution and check</summary>

C=12+3n for non-negative integer n. The terms inside the bracket are n and 4; the outer factors are 3 and (n+4). Expansion proves the identity for every n.

</details>

</div>

<div class="lesson-check" markdown="1">

### Retry substitution {#retry-substitution}

**Question:** Evaluate $p^2-2pq$ for $p=-2$, $q=-3$.

<details markdown="1">

<summary>Hint</summary>

Keep each negative value in brackets.

</details>

<details markdown="1">

<summary>Solution and check</summary>

$$(-2)^2-2(-2)(-3)=4-12=-8.$$

</details>

</div>

<div class="lesson-check" markdown="1">

### Retry collecting {#retry-expansion}

**Question:** Simplify $2(x-3)-(x+4)+3x^2-x^2$.

<details markdown="1">

<summary>Hint</summary>

The subtraction changes both signs in the second bracket.

</details>

<details markdown="1">

<summary>Solution and check</summary>

$$2x-6-x-4+3x^2-x^2=2x^2+x-10.$$

</details>

</div>

<div class="lesson-check" markdown="1">

### Retry three factors {#retry-three}

**Question:** Expand $(x-2)(x+2)(x+1)$.

<details markdown="1">

<summary>Hint</summary>

Start with the difference of squares.

</details>

<details markdown="1">

<summary>Solution and check</summary>

$$(x^2-4)(x+1)=x^3+x^2-4x-4.$$

</details>

</div>

<div class="lesson-check" markdown="1">

### Retry factorising {#retry-factors}

**Question:** Factorise fully $5x^2-20$, $x^2-2x-8$, and $3x^2-5x-2$.

<details markdown="1">

<summary>Hint</summary>

For the first, take out 5 before looking at squares.

</details>

<details markdown="1">

<summary>Solution and check</summary>

$$5x^2-20=5(x-2)(x+2),\quad x^2-2x-8=(x-4)(x+2),$$

$$3x^2-5x-2=(3x+1)(x-2).$$

The last middle products −6x+x give −5x.

</details>

</div>

<div class="lesson-check" markdown="1">

### Retry a formula {#retry-rearrange}

**Question:** Make a the subject of $v=u+at$ for $t\ne0$. Then find a if v=14 m/s, u=2 m/s, t=4 s.

<details markdown="1">

<summary>Hint</summary>

Undo addition before multiplication.

</details>

<details markdown="1">

<summary>Solution and check</summary>

$$v-u=at,\qquad a=\frac{v-u}{t}=\frac{14-2}{4}=3\text{ m/s}^2.$$

</details>

</div>

<div class="lesson-check" markdown="1">

### Retry two occurrences {#retry-twice}

**Question:** Make x the subject of $y=(2x+3)/(x-1)$, $x\ne1$. State excluded y.

<details markdown="1">

<summary>Hint</summary>

Multiply through, collect x terms, then factor out x.

</details>

<details markdown="1">

<summary>Solution and check</summary>

$$yx-y=2x+3,\quad x(y-2)=y+3,\quad x=\frac{y+3}{y-2},\quad y\ne2.$$

y=2 would require −2=3, so it is impossible.

</details>

</div>

<div class="lesson-check" markdown="1">

### Retry powers {#retry-indices}

**Question:** Simplify $p^7/p^3$ for $p\ne0$, and evaluate $16^{3/4}$. Explain why you cannot simplify $p^7-p^3$ by subtracting exponents.

<details markdown="1">

<summary>Hint</summary>

Count factors in a quotient, not in a difference.

</details>

<details markdown="1">

<summary>Solution and check</summary>

$$p^7/p^3=p^4,\qquad 16^{3/4}=8.$$

Subtraction does not cancel multiplicative factors across two terms; p⁷−p³ can instead factor as p³(p⁴−1).

</details>

</div>

## Next step and later review {#next-step}

Next study [fractions and proof](/igcse/mathematics/algebraic-fractions-and-proof/#start). After another topic, redo the taxi and two-occurrence formula tasks without the examples.

[Try the mixed algebra review after another topic.](/igcse/mathematics/mixed-review/#algebra-review) Close solutions and record what you can do without help.

## Scope and sources {#sources}

<details markdown="1">

<summary>Qualification and sources used</summary>

A1–6, A22. Specification PDF 14 (printed 15), A22 PDF 17 (printed 18). A6 connects with Number.

Read 2C QP PDF 2 Q1–2, 4 Q5, 12 Q13 with [MS PDF 4](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92602C-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=4) and 7; 1C QP PDF 12 Q13–14 with [MS PDF 7](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9260-92601C-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=7); 2E QP PDF 13 Q16 with [MS PDF 9](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92602E-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=9).

OxfordAQA International GCSE Mathematics **9260**, specification **v5.1**. [Qualification](https://www.oxfordaqa.com/qualification/international-gcse-mathematics-9260/); [specification](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-gcse-mathematics-specification.pdf). Assessment references below are **Specimen 2018** even where the URL says 2016. They calibrate scope and reasoning; no task here is an official examination question.

</details>
