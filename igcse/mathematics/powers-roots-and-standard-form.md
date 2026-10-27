---
layout: subjects
title: "Powers, roots and standard form"
mathjax: true
grade: igcse
subject: igcse-mathematics
permalink: /igcse/mathematics/powers-roots-and-standard-form/
reading_layout: true
study_page: true
toc_headings: "h2"
---

[IGCSE Mathematics](/igcse/mathematics/#learning-start)
{:.lesson-meta}

## Repeated multiplication, written briefly {#start}

A square with side 5 has area 5 times 5; a cube with side 5 has volume 5 times 5 times 5. Powers count repeated factors, and roots undo them. You need [multiplication, signs and reciprocals](/igcse/mathematics/number-operations/#operation-order). All examples and tasks are self-written, with no official marks. Start with powers and integer indices, then connect roots to fractional indices and exact surds.

## What is the repeated factor? {#powers-and-roots}

In $3^4=3\times3\times3\times3=81$, 3 is the base and 4 is the index. The index is not a multiplier. Useful power chains are:

$$2,4,8,16,32,64;\quad3,9,27,81;\quad4,16,64,256;\quad5,25,125,625.$$

A square root asks which non-negative number squares to the input: $\sqrt{49}=7$. The equation $x^2=49$ has two solutions, 7 and -7, but the symbol for the square root selects 7. Cube roots can be negative: $\sqrt[3]{-125}=-5$. Higher roots undo higher powers, for example $\sqrt[4]{81}=3$.

Brackets show whether a negative sign is part of the repeated factor:

$$(-3)^2=9,\qquad-3^2=-(3^2)=-9.$$

## Count factors to explain the laws {#index-laws}

<div class="worked-example" markdown="1">

### Build a law rather than memorise a sign {#example-indices}

**Question:** Simplify $2^3\times2^4$, $2^5\div2^2$, $(2^3)^2$, $2^0$ and $2^{-3}$.

Multiplication joins three factors of 2 to four factors of 2; division cancels two of five. A power of a power repeats the whole group:

$$2^3\times2^4=2^7=128,\quad
2^5\div2^2=2^3=8,\quad
(2^3)^2=2^6=64.$$

Keep the division law consistent as the difference reaches zero and becomes negative:

$$2^3\div2^3=1=2^0,\qquad
2^2\div2^5=\frac1{2^3}=2^{-3}=\frac18.$$

Thus, for non-zero $a$ and integer indices,

$$a^m a^n=a^{m+n},\qquad \frac{a^m}{a^n}=a^{m-n},\qquad(a^m)^n=a^{mn}.$$

A negative index means reciprocal, not a negative answer. Do not apply the multiplication law to a sum: $2^3+2^4=8+16=24$, not 128. The restriction on the base prevents division by zero; $0^0$ is not defined in these rules.

</div>

## Keep the scale visible {#standard-form}

A positive number in standard form is $A\times10^n$, where $1\le A<10$ and $n$ is an integer. The coefficient records the digits; the power of 10 records their size:

$$5800000=5.8\times10^6,\qquad0.00072=7.2\times10^{-4}.$$

A display such as 7.2E-4 means $7.2\times10^{-4}$, not 7.2 minus 4. A negative number can be written with a minus sign outside its positive standard form. Zero is treated separately.

<div class="worked-example" markdown="1">

### Operate on digits and scale {#example-standard-form}

**Question:** Calculate $(3\times10^5)(4\times10^{-3})$, $(6\times10^7)/(2\times10^3)$ and $3.2\times10^5+4.7\times10^4$.

For multiplication/division, work on coefficients and powers separately, then restore the coefficient range:

$$12\times10^2=1.2\times10^3,\qquad
\frac{6\times10^7}{2\times10^3}=3\times10^4.$$

For addition, make both terms count the same power of ten first:

$$3.2\times10^5+0.47\times10^5=3.67\times10^5.$$

Check in ordinary numbers: 320000+47000=367000. Adding exponents for addition would change the quantity.

</div>

## Independent checks {#practice}

<div class="lesson-check" markdown="1">

### Read the power carefully {#practice-powers}

**Question:** Find $(-4)^3$, $-4^2$, $\sqrt{144}$, $\sqrt[3]{-64}$ and $\sqrt[4]{625}$. Write 64 as a power of 2 and as a power of 4, and write 81 as a power of 3. Explain why $\sqrt{144}$ is not -12.

<details markdown="1">
<summary>Hint</summary>

Identify the whole base and distinguish a root symbol from solving a squared equation.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$(-4)^3=-64,\quad-4^2=-16,\quad\sqrt{144}=12,\quad
\sqrt[3]{-64}=-4,\quad\sqrt[4]{625}=5.$$

$$64=2^6=4^3,\qquad81=3^4.$$

The square root symbol selects the non-negative root. -12 is a solution of the squared equation, not the value of the principal square root.

</details>

</div>

<div class="lesson-check" markdown="1">

### Use and test the laws {#practice-indices}

**Question:** Simplify $(x^4x^{-7})/x^{-1}$ for $x\ne0$. Evaluate $5^0$ and $3^{-2}$. A learner claims $(2^3)^4=2^7$. Explain the mistake using factors.

<details markdown="1">
<summary>Hint</summary>

Combine the numerator first; dividing subtracts the whole denominator index.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\frac{x^4x^{-7}}{x^{-1}}=x^{-3-(-1)}=x^{-2}=\frac1{x^2},\qquad
5^0=1,\quad3^{-2}=\frac19.$$

Four groups of three factors contain 12 factors, so $(2^3)^4=2^{12}$. Adding 3 and 4 describes multiplication of two powers, not a power of a power.

</details>

</div>

<div class="lesson-check" markdown="1">

### Compare and combine sizes {#practice-standard-form}

**Question:** A display reads 6.4E-5. Write this as an ordinary decimal. Calculate $(8\times10^{-3})(5\times10^6)$ and $(9\times10^7)/(3\times10^{-2})$ in standard form. Find the difference between $4.1\times10^6$ and $7\times10^5$.

<details markdown="1">
<summary>Hint</summary>

For the difference, write both numbers using the same power of ten.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$6.4\times10^{-5}=0.000064.$$

$$40\times10^3=4\times10^4,\qquad
\frac{9\times10^7}{3\times10^{-2}}=3\times10^9.$$

$$4.1\times10^6-0.7\times10^6=3.4\times10^6.$$

The division exponent is 7-(-2), not 7-2. Each final coefficient lies between 1 inclusive and 10 exclusive.

</details>

</div>

## an index can describe a root {#fractional-powers}

For positive $a$, define $a^{1/n}$ as its positive $n$th root. Repeating it $n$ times gives $a$, matching the index law. Then $a^{m/n}$ means take the root and raise it to the integer power $m$; a negative sign on the index takes a reciprocal.

$$16^{3/4}=(\sqrt[4]{16})^3=2^3=8,\qquad
27^{-2/3}=\frac1{(\sqrt[3]{27})^2}=\frac19.$$

We use positive bases here so even roots and different fractional representations do not create real-domain ambiguities. This does not assert every fractional power of a negative number is real.

<div class="lesson-check" markdown="1">

### Change the representation {#practice-fractional-powers}

**Question:** Evaluate $81^{3/4}$ and $32^{-2/5}$ exactly. Rewrite $a^{5/2}$ using a root for $a>0$, and simplify $a^{1/2}a^{3/2}$.

<details markdown="1">
<summary>Hint</summary>

Read the denominator as the root and the numerator as the power.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$81^{3/4}=3^3=27,\qquad32^{-2/5}=\frac1{2^2}=\frac14.$$

$$a^{5/2}=(\sqrt a)^5,\qquad a^{1/2}a^{3/2}=a^2.$$

The negative index changes 4 into its reciprocal, not into -4.

</details>

</div>

## keep an irrational answer exact {#surds}

A surd keeps an irrational root exact. For non-negative inputs, roots multiply and divide in the expected way, but a root does not distribute over addition. Extract square factors, then combine only matching roots:

$$\sqrt{72}=\sqrt{36\times2}=6\sqrt2,\qquad
\sqrt{18}+2\sqrt8=3\sqrt2+4\sqrt2=7\sqrt2.$$

$$\sqrt3\,\sqrt{12}=\sqrt{36}=6,\qquad
\sqrt{9+16}=5\ne3+4.$$

To remove a single root from a denominator, multiply top and bottom by that root. This multiplies by 1:

$$\frac3{\sqrt5}=\frac{3\sqrt5}{5}.$$

For a two-term denominator, use a conjugate: the same terms with the middle sign changed. The cross terms cancel, using the difference of squares.

<div class="worked-example" markdown="1">

### Choose a multiplier that cancels the root {#example-surds}

**Question:** Rationalise $\frac4{3-\sqrt2}$.

The denominator is non-zero because 3 is not $\sqrt2$. Multiply by the conjugate over itself:

$$\frac4{3-\sqrt2}
=\frac{4(3+\sqrt2)}{(3-\sqrt2)(3+\sqrt2)}
=\frac{12+4\sqrt2}{9-2}
=\frac{12+4\sqrt2}{7}.$$

The denominator expansion is $9+3\sqrt2-3\sqrt2-2=7$. A numerical check gives about 2.5224 for both forms; this check supports the algebra but does not replace it.

</div>

<div class="lesson-check" markdown="1">

### Keep the exact form {#practice-surds}

**Question:** Simplify $\sqrt{50}-\sqrt8$ and $\sqrt6\,\sqrt{24}$. Rationalise $\frac5{\sqrt3}$ and $\frac3{2+\sqrt3}$. Explain why $\sqrt{4+9}\ne\sqrt4+\sqrt9$.

<details markdown="1">
<summary>Hint</summary>

Extract square factors; choose the conjugate only for the two-term denominator.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\sqrt{50}-\sqrt8=5\sqrt2-2\sqrt2=3\sqrt2,\qquad
\sqrt6\,\sqrt{24}=\sqrt{144}=12.$$

$$\frac5{\sqrt3}=\frac{5\sqrt3}{3},\qquad
\frac3{2+\sqrt3}=\frac{3(2-\sqrt3)}{4-3}=6-3\sqrt3.$$

The last denominator is non-zero because 2 is not $\sqrt3$. The claimed root identity would give $\sqrt{13}=5$, but squaring would give 13=25, a contradiction.

</details>

</div>

## Return to the law behind the error {#retry}

Use [root meaning](#powers-and-roots) for sign errors, [factor counting](#index-laws) for index errors, [scale](#standard-form) for standard form, or [fractional indices](#fractional-powers) and [exact roots](#surds) for those calculations. Close the old answer before attempting the relevant retry.

<div class="lesson-check" markdown="1">

### Retry powers and roots {#retry-powers}

**Question:** Find $(-5)^2$, $-5^2$, $\sqrt[3]{-216}$ and $\sqrt[4]{256}$. Write 125 as a power of 5.

<details markdown="1">
<summary>Hint</summary>

Check each root by raising it back to the stated power.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$(-5)^2=25,\quad-5^2=-25,\quad\sqrt[3]{-216}=-6,\quad\sqrt[4]{256}=4,\quad125=5^3.$$

Only the bracketed negative base is squared.

</details>

</div>

<div class="lesson-check" markdown="1">

### Retry indices {#retry-indices}

**Question:** Simplify $(y^3)^2y^{-8}$ for $y\ne0$, and explain why $y^3+y^2$ does not simplify to $y^5$.

<details markdown="1">
<summary>Hint</summary>

First count six factors in the bracketed power.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$(y^3)^2y^{-8}=y^{6-8}=y^{-2}=\frac1{y^2}.$$

The law joins factors in a product, not terms in a sum. For example, at $y=2$ the sum is 12, whereas $y^5=32$.

</details>

</div>

<div class="lesson-check" markdown="1">

### Retry scale {#retry-standard-form}

**Question:** Write 0.0000081 in standard form. Calculate $(1.2\times10^4)+(8\times10^3)$ and $(6\times10^{-4})/(2\times10^2)$ in standard form.

<details markdown="1">
<summary>Hint</summary>

Use a common exponent for addition and subtract exponents for division.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$0.0000081=8.1\times10^{-6},\qquad
1.2\times10^4+0.8\times10^4=2\times10^4,\qquad
\frac{6\times10^{-4}}{2\times10^2}=3\times10^{-6}.$$

Check the sum as 12000+8000=20000.

</details>

</div>

<div class="lesson-check" markdown="1">

### Retry fractional powers {#retry-fractional-powers}

**Question:** Calculate $64^{-2/3}$ and $16^{5/4}$, and simplify $b^{3/4}/b^{1/4}$ for $b>0$.

<details markdown="1">
<summary>Hint</summary>

Take the root first, then the power; the minus sign takes a reciprocal.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$64^{-2/3}=\frac1{4^2}=\frac1{16},\quad
16^{5/4}=2^5=32,\quad
\frac{b^{3/4}}{b^{1/4}}=b^{1/2}=\sqrt b.$$

Dividing subtracts the fractional indices, just as for integer indices.

</details>

</div>

<div class="lesson-check" markdown="1">

### Retry exact roots {#retry-surds}

**Question:** Simplify $\sqrt{75}+2\sqrt{12}$, and rationalise $\frac2{\sqrt7}$ and $\frac5{3+\sqrt2}$.

<details markdown="1">
<summary>Hint</summary>

Rewrite both roots as multiples of the same root; expand the conjugate product.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\sqrt{75}+2\sqrt{12}=5\sqrt3+4\sqrt3=9\sqrt3.$$

$$\frac2{\sqrt7}=\frac{2\sqrt7}{7},\qquad
\frac5{3+\sqrt2}=\frac{5(3-\sqrt2)}{9-2}=\frac{15-5\sqrt2}{7}.$$

Both transformations multiply by 1; neither denominator is zero.

</details>

</div>

## Use exact and approximate answers appropriately {#next-step}

Continue to [accuracy and bounds](/igcse/mathematics/accuracy-and-bounds/#start). Return through [mixed number review](/igcse/mathematics/mixed-review/#number-review) after another topic; also use these index laws in [algebra review](/igcse/mathematics/mixed-review/#algebra-review).

## Scope and sources {#sources}

<details markdown="1">
<summary>Scope, tier and reference reading</summary>

N5–N8 and A6; standard-form display interpretation supports N10. The sequence includes fractional powers and exact surds, including rationalisation. No calculator model or CAS permission is implied.

[OxfordAQA 9260 specification v5.1, PDF pp.11,14](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-gcse-mathematics-specification.pdf).

9260/2C, **Specimen 2018**, Q4: [QP PDF p.4](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92602C-international-gcse-mathematics-specimen-paper-2016-v1.pdf#page=4), [MS PDF p.4](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92602C-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=4).

9260/2C, **Specimen 2018**, Q21: [QP PDF p.19](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92602C-international-gcse-mathematics-specimen-paper-2016-v1.pdf#page=19), [MS PDF p.9](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92602C-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=9).

9260/1E, **Specimen 2018**, Q14: [QP PDF p.12](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92601E-international-gcse-mathematics-specimen-paper-2016-v1.pdf#page=12), [MS PDF p.7](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92601E-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=7).

9260/1E, **Specimen 2018**, Q26: [QP PDF p.25](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92601E-international-gcse-mathematics-specimen-paper-2016-v1.pdf#page=25), [MS PDF p.13](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92601E-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=13).

The paired pages above informed the teaching; no official question is reproduced here. All examples and tasks are self-written, with no official marks. Contexts and diagram data are constructed for learning.

</details>
