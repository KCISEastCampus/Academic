---
title: Binomial Series
layout: subjects
mathjax: true
grade: a2
subject: a2-mathematics
permalink: /alevel/a2-mathematics/binomial-series/
toc_headings: h2, h3
reading_layout: true
study_page: true
---

[Pure Mathematics](/alevel/a2-mathematics/) · P2.2 Binomial Series
{: .lesson-meta}

<div class="lesson-lead" markdown="1">

How can powers of $x$ help us calculate a square root or a reciprocal? Learn what an infinite expansion means, how to find its terms and when a few terms give a useful approximation.

</div>

1. [Build a series](#the-binomial-series): identify the power, what is added to one and the constant multiplying the result.
2. [Combine expansions](#partial-fractions-and-products): retain the required powers and all range conditions.
3. [Use an approximation](#approximations), then try [independent practice](#practice) and return for [later review](#later-review).
{: .lesson-routes}

<div class="lesson-notes" markdown="1">

**Before you start:** recover [indices and exact values](/alevel/as-mathematics/algebra/#l01), polynomial multiplication, and [partial fractions](/alevel/a2-mathematics/partial-fractions/#method) for rational functions. The short recovery below supplies integer expansions and factorials; you need not already know the infinite formula.

<details id="prerequisite-repair" markdown="1">
<summary>Recover the algebra used here</summary>

Multiplying three factors gives $(1+t)^3=1+3t+3t^2+t^3$. Here $2!=2\times1=2$ and $3!=3\times2\times1=6$. Taking a power applies to the outside constant too: $(4+4t)^{1/2}=2(1+t)^{1/2}$. In a product, a term in $x^3$ can come from powers $0+3$, $1+2$, $2+1$ or $3+0$.

</details>

All examples and tasks are self-written, with no official marks. Open hints and solutions separately; record whether you used help. [Sources and scope](#lesson-sources) are available after the lesson.

</div>

## The Binomial Series {#the-binomial-series}

In the integer expansion above, multiplying out gives a finite list of terms. For a square root or a reciprocal, the corresponding expansion usually continues without stopping. Adding its terms in order gives successive totals. Within the stated range, those totals approach the original function's value. This infinite sum is a **series**.

In the formula below, n is the power. The letter u stands for the whole expression added to one; it may include a multiple of x, a minus sign or a higher power of x. The condition tells us when the infinite sum approaches the value on the left.

For $\lvert u\rvert<1$,

$$\begin{aligned}
(1+u)^n={}&1+nu+\frac{n(n-1)}{2!}u^2\\
&+\frac{n(n-1)(n-2)}{3!}u^3+\cdots.
\end{aligned}$$

Here $2!=2$ and $3!=6$. To get each new coefficient, keep the previous factors and multiply by the next number down from n, then divide by the next factorial. The successive powers belong to the whole expression u.

For a positive integer $n$, the expansion terminates and is valid for all real $u$. For $n=0$, it is simply $1$ where the original expression is defined. For a negative integer or a non-integer power, use the infinite series and state $\lvert u\rvert<1$. We do not include the endpoints in this lesson's stated range; behaviour there depends on $n$.

**Method:**

1. Write the expression as a constant times $(1+u)^n$.
2. Identify $n$ and $u$. Substitute the whole of $u$, including its sign.
3. Calculate each coefficient and write terms in ascending powers of $x$.
4. Multiply every term by the constant in front of the brackets. State the range from $\lvert u\rvert<1$.

“Up to and including the term in $x^3$” means keep the constant, $x$, $x^2$ and $x^3$ terms. A finite list of terms is an **approximation**; an equality to the full series needs the remaining terms, shown by $+\cdots$.

<section class="worked-example" markdown="1">

### Example 1 — A fractional power {#example-1--a-fractional-power}

**Question:** Expand $(1+4x)^{\frac12}$ up to and including the term in $x^3$. State the range of validity.

The square root means $n=\frac12$. The expression added to one is $u=4x$. In every term of the formula, replace u by that whole expression: square both the 4 and x in the second-power term, and cube both in the third-power term.

$$\begin{aligned}
(1+4x)^{\frac12}={}&1+\frac12(4x)\\
&+\frac{\frac12(-\frac12)}{2}(4x)^2\\
&+\frac{\frac12(-\frac12)(-\frac32)}{6}(4x)^3+\cdots\\
={}&\boxed{1+2x-2x^2+4x^3+\cdots}.
\end{aligned}$$

The range is $\lvert4x\rvert<1$: the distance of 4x from zero must be less than one. Dividing both bounds by four gives $\boxed{-\frac14<x<\frac14}$.

**Check:** at $x=0$, both the original expression and the series give $1$. The $x^2$ coefficient is negative, but the $x^3$ coefficient is positive: count the negative factors.

</section>

<section class="worked-example" markdown="1">

### Example 2 — Take out the constant first {#example-2--take-out-the-constant-first}

**Question:** Expand $(9-3x)^{-\frac12}$ up to and including the term in $x^3$. State the range of validity.

The formula needs $1$ as the constant inside the brackets, but here it is $9$. Take nine out of the whole bracket; the remaining x coefficient is divided by nine. The negative half-power also applies to that nine: its square root is three, then the negative power takes the reciprocal. That is why the constant in front is one third.

First write

$$(9-3x)^{-\frac12}=\frac13\left(1-\frac{x}{3}\right)^{-\frac12}.$$

Using $n=-\frac12$ and $u=-\frac{x}{3}$ gives the series below. In the linear term, the two minus signs cancel. For each later term, keep the minus sign when raising the whole u expression to its power.

$$\left(1-\frac{x}{3}\right)^{-\frac12}=1+\frac{x}{6}+\frac{x^2}{24}+\frac{5x^3}{432}+\cdots.$$

Multiply **every** term by $\frac13$:

$$(9-3x)^{-\frac12}=\boxed{\frac13+\frac{x}{18}+\frac{x^2}{72}+\frac{5x^3}{1296}+\cdots}.$$

Since $\left\lvert\frac{x}{3}\right\rvert<1$, the range is $\boxed{-3<x<3}$.

**Common mistake:** taking out $9$ instead of $9^{-\frac12}$. Check the constant term against the original expression at $x=0$.

</section>

<section class="lesson-check" markdown="1">

### Pause and complete {#check-normalise}

<!-- task:check-normalise -->

For $(4-2x)^{-1/2}$, write the outside factor, $n$ and $u$. Complete the expansion through $x^2$ and state its range.

<!-- /task:check-normalise -->

<details markdown="1">
<summary>Hint</summary>

Take the power of $4$ as well as factoring it. Substitute the whole $-x/2$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The outside factor is $1/2$, $n=-1/2$ and $u=-x/2$:

$$(4-2x)^{-1/2}=\frac12+\frac{x}{8}+\frac{3x^2}{64}+\cdots,\qquad -2<x<2.$$

The constant agrees with the original at $x=0$.

</details>

</section>

<section class="worked-example" markdown="1">

### Example 3 — A negative integer power {#example-3--a-negative-integer-power}

**Question:** Expand $\frac{1}{(1-2x)^2}$ up to and including the term in $x^3$.

Write it as $(1-2x)^{-2}$. With $n=-2$ and $u=-2x$,

$$\begin{aligned}
(1-2x)^{-2}={}&1+(-2)(-2x)\\
&+\frac{(-2)(-3)}{2}(-2x)^2\\
&+\frac{(-2)(-3)(-4)}{6}(-2x)^3+\cdots\\
={}&\boxed{1+4x+12x^2+32x^3+\cdots}.
\end{aligned}$$

It is valid for $\boxed{-\frac12<x<\frac12}$.

**Check:** the coefficients do not stop: stepping down from a negative integer never produces a zero factor. A negative integer power does not give a finite polynomial.

</section>

## Partial Fractions and Products {#partial-fractions-and-products}

When every term is the previous term multiplied by the same expression, we call the result a **geometric series**. Two useful forms are

$$\frac1{1-u}=1+u+u^2+u^3+\cdots,$$

$$\frac1{1+u}=1-u+u^2-u^3+\cdots,$$

both for $\lvert u\rvert<1$.

For a fraction of polynomials, partial fractions can give pieces that fit these simple forms. Expand each piece, then add terms with the same power. An input used in the final expansion must be allowed by **every** series used: meeting only one of their range conditions is insufficient.

For a product, multiply the expansions and collect powers. To find the coefficient of $x^3$, include every product whose powers add to $3$. A missing $x$ term does not mean there is no $x^2$ term.

<section class="worked-example" markdown="1">

### Example 4 — Expand a rational function {#example-4--expand-a-rational-function}

**Question:** Use partial fractions to expand $\frac{3}{(1-x)(1+2x)}$ up to and including the term in $x^3$.

The two different linear factors suggest one fraction for each. This will let us use the two geometric forms separately. Write

$$\frac{3}{(1-x)(1+2x)}=\frac{A}{1-x}+\frac{B}{1+2x}.$$

Then $3=A(1+2x)+B(1-x)$. Substituting $x=1$ gives $A=1$; substituting $x=-\frac12$ gives $B=2$. These substitutions find the constants in the polynomial identity; the original fraction is undefined at those two values.

$$\begin{aligned}
\frac{3}{(1-x)(1+2x)}
&=(1+x+x^2+x^3+\cdots)\\
&\quad+2(1-2x+4x^2-8x^3+\cdots)\\
&=\boxed{3-3x+9x^2-15x^3+\cdots}.
\end{aligned}$$

The first series needs $\lvert x\rvert<1$; the second needs $\lvert2x\rvert<1$. Together they give $\boxed{-\frac12<x<\frac12}$.

**Check:** multiply $3-3x+9x^2-15x^3$ by $(1-x)(1+2x)=1+x-2x^2$. The constant is $3$ and the coefficients of $x$, $x^2$ and $x^3$ are all zero. Higher powers remain because we stopped at $x^3$.

</section>

<section class="worked-example" markdown="1">

### Example 4b — A repeated factor {#example-repeated-factor}

**Question:** Expand the following function through $x^3$ and state the range:

$$F(x)=\frac{3-x}{(1-x)^2(1+x)}.$$

One factor occurs twice in the denominator. As on the partial-fractions page, include fractions with both its first and second powers, as well as the other factor:

$$F(x)=\frac{A}{1-x}+\frac{B}{(1-x)^2}+\frac{C}{1+x}.$$

Multiplying both sides by the original denominator gives $3-x=A(1-x)(1+x)+B(1+x)+C(1-x)^2$. Match the constant, linear and quadratic terms respectively: $A+B+C=3$, $B-2C=-1$ and $-A+C=0$, hence $A=B=C=1$.

The middle term has power $-2$, so its coefficients differ from the geometric series:

$$\begin{aligned}
F(x)&=(1+x+x^2+x^3+\cdots)\\
&\quad+(1+2x+3x^2+4x^3+\cdots)\\
&\quad+(1-x+x^2-x^3+\cdots)\\
&=3+2x+5x^2+4x^3+\cdots,\qquad -1<x<1.
\end{aligned}$$

**Check:** multiplication by $(1-x)^2(1+x)=1-x-x^2+x^3$ gives $3-x$ through degree 3. If we had omitted the squared-denominator term, every term in the numerator identity would contain the factor one minus x. At input one they would all be zero, but the required numerator would be two. That omission cannot give the original numerator.

</section>

<section class="worked-example" markdown="1">

### Example 5 — Multiply and collect powers {#example-5--multiply-and-collect-powers}

**Question:** Expand $(1+x)\sqrt{1-2x}$ up to and including the term in $x^3$.

First expand the square-root factor using the half-power formula with the whole expression minus two x added to one:

$$\sqrt{1-2x}=1-x-\frac12x^2-\frac12x^3+\cdots.$$

Now multiply by $1+x$. Multiplying the series by one keeps each power; multiplying it by x raises each power by one. Add the two results at each power:

$$\begin{aligned}
(1+x)\sqrt{1-2x}
&=1+(-1+1)x+\left(-\frac12-1\right)x^2\\
&\quad+\left(-\frac12-\frac12\right)x^3+\cdots\\
&=\boxed{1-\frac32x^2-x^3+\cdots}.
\end{aligned}$$

The range remains $\boxed{-\frac12<x<\frac12}$. The finite factor $1+x$ adds no extra restriction.

**Check:** the $x$ terms cancel. To find $x^3$, include both $1\times(-\frac12x^3)$ and $x\times(-\frac12x^2)$.

</section>

## Approximations {#approximations}

A **linear approximation** keeps the constant and $x$ terms. A **quadratic approximation** also keeps the $x^2$ term. Use $\approx$ when higher powers have been neglected.

Choose a form with $u$ close to zero: its successive powers then shrink quickly, which helps when we keep only the first few terms. The series condition $\lvert u\rvert<1$ allows the infinite expansion; it does **not** promise that a few terms give the required accuracy. Check the accuracy of the particular approximation as well as the range.

For example, Example 1 at $x=0.24$ is within its range, but its cubic approximation gives $1.420096$, while $\sqrt{1.96}=1.4$. Do not use “within the range” alone to claim accuracy to several decimal places.

<section class="worked-example" markdown="1">

### Example 6 — Approximate a square root {#example-6--approximate-a-square-root}

**Question:** Use a binomial expansion to estimate $\sqrt{4.08}$ to five decimal places. Check the estimate with a calculator.

Choose a nearby number whose square root is exact: four is close to 4.08, and 4.08 is four times 1.02. This leaves a small change from one inside the square root. Write $\sqrt{4.08}=2\sqrt{1+0.02}$, so $u=0.02$. Using

$$(1+u)^{\frac12}\approx1+\frac{u}{2}-\frac{u^2}{8}+\frac{u^3}{16},$$

we obtain

$$\sqrt{4.08}\approx2(1+0.01-0.00005+0.0000005)=2.019901.$$

The estimate is $\boxed{2.01990}$ to five decimal places.

**Check:** the calculator gives $2.019900987\ldots$, which rounds to the same answer. The first omitted term in the estimate is $2\left(-\frac5{128}\right)(0.02)^4=-0.0000000125$. It helps explain the small error here; in general, the first omitted term alone is not a bound for the whole remaining series.

**Common mistake:** expanding $(1+3.08)^{\frac12}$ directly. That would use $u=3.08$, outside $\lvert u\rvert<1$.

</section>

## Practice {#practice}

Allow about **25–35 minutes**. State the range of validity for each expansion. Keep solutions closed until you have tried the question.

<section class="lesson-check" markdown="1">

### Question 1 {#question-1--reciprocal}

<!-- task:question-1--reciprocal -->

Expand $\frac1{1-3x}$ up to and including the term in $x^3$.

<!-- /task:question-1--reciprocal -->

<details markdown="1">
<summary>Hint</summary>

Use $n=-1$ and $u=-3x$, or the geometric series for $\frac1{1-u}$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\boxed{\frac1{1-3x}=1+3x+9x^2+27x^3+\cdots},\qquad \boxed{-\frac13<x<\frac13}.$$

Multiplying the displayed polynomial by $1-3x$ gives $1-81x^4$. The unwanted terms through $x^3$ cancel.

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 2 {#question-2--outside-factor}

<!-- task:question-2--outside-factor -->

Expand $\sqrt{4+x}$ up to and including the term in $x^3$.

<!-- /task:question-2--outside-factor -->

<details markdown="1">
<summary>Hint</summary>

Write $\sqrt{4+x}=2\left(1+\frac{x}{4}\right)^{\frac12}$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\boxed{\sqrt{4+x}=2+\frac{x}{4}-\frac{x^2}{64}+\frac{x^3}{512}+\cdots}.$$

The range is $\boxed{-4<x<4}$. At $x=0$, the constant must be $2$. Squaring the polynomial gives $4+x$ with zero coefficients for $x^2$ and $x^3$; higher powers remain.

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 3 {#question-3--signs}

<!-- task:question-3--signs -->

Expand $(1+x)^{-2}$ up to and including the term in $x^3$. Explain why $1-2x+x^2$ is not the correct expansion.

<!-- /task:question-3--signs -->

<details markdown="1">
<summary>Hint</summary>

Use $n=-2$. Do not treat the expression as $(1-x)^2$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\boxed{(1+x)^{-2}=1-2x+3x^2-4x^3+\cdots},\qquad \boxed{-1<x<1}.$$

The coefficient of $x^2$ is $\frac{(-2)(-3)}2=3$, not $1$. This series does not terminate. Multiplying by $(1+x)^2$ cancels the terms through $x^3$.

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 4 {#question-4--two-ranges}

<!-- task:question-4--two-ranges -->

Express $\frac4{(1-2x)(1+x)}$ in partial fractions. Hence expand up to and including the term in $x^3$.

<!-- /task:question-4--two-ranges -->

<details markdown="1">
<summary>Hint</summary>

Solve $4=A(1+x)+B(1-2x)$. Use the overlap of the two ranges.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\frac4{(1-2x)(1+x)}=\frac{\frac83}{1-2x}+\frac{\frac43}{1+x}.$$

Thus

$$\boxed{\frac4{(1-2x)(1+x)}=4+4x+12x^2+20x^3+\cdots}.$$

The two conditions are $\lvert2x\rvert<1$ and $\lvert x\rvert<1$, so the range is $\boxed{-\frac12<x<\frac12}$. Multiply by $1-x-2x^2$ to check that the coefficients through $x^3$ cancel and the constant is $4$.

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 5 {#question-5--a-product}

<!-- task:question-5--a-product -->

Expand $(1+2x)(1-x)^{-\frac12}$ up to and including the term in $x^3$.

<!-- /task:question-5--a-product -->

<details markdown="1">
<summary>Hint</summary>

First expand $(1-x)^{-\frac12}$, then include all products contributing to each power.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$(1-x)^{-\frac12}=1+\frac12x+\frac38x^2+\frac5{16}x^3+\cdots.$$

Hence

$$\boxed{(1+2x)(1-x)^{-\frac12}=1+\frac52x+\frac{11}{8}x^2+\frac{17}{16}x^3+\cdots}.$$

The range is $\boxed{-1<x<1}$. The cubic coefficient is $\frac5{16}+2\left(\frac38\right)=\frac{17}{16}$.

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 6 {#question-6--choose-a-useful-form}

<!-- task:question-6--choose-a-useful-form -->

Use a binomial expansion to estimate $\sqrt{8.91}$ to five decimal places. Check with a calculator. Explain why using $(1+7.91)^{\frac12}$ is unsuitable.

<!-- /task:question-6--choose-a-useful-form -->

<details markdown="1">
<summary>Hint</summary>

Write $\sqrt{8.91}=3\sqrt{1-0.01}$. Keep terms through $u^3$ before rounding.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\begin{aligned}
\sqrt{8.91}&=3\sqrt{1-0.01}\\
&\approx3(1-0.005-0.0000125-0.0000000625)\\
&=2.9849623125.
\end{aligned}$$

So the estimate is $\boxed{2.98496}$ to five decimal places. The calculator gives $2.984962311\ldots$, confirming the rounded value. Here $u=-0.01$ satisfies $\lvert u\rvert<1$; $u=7.91$ does not.

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 7 {#question-7}

<!-- task:question-7 -->

Expand the following function through $x^3$ and state its range of validity. Show how you obtain the coefficients.

$$G(x)=\frac{2+x}{(1-x)^2(1+x)}.$$

<!-- /task:question-7 -->

<details markdown="1">
<summary>Hint</summary>

For a repeated linear factor, keep fractions with both the first and second denominator powers. You may instead multiply series within their allowed ranges, keeping every product needed for each power.

</details>

<details markdown="1">
<summary>Solution and check</summary>

One decomposition is

$$G(x)=\frac{1}{4(1-x)}+\frac{3}{2(1-x)^2}+\frac{1}{4(1+x)}.$$

Thus $G(x)=2+3x+5x^2+6x^3+\cdots$ for $-1<x<1$. Multiplication by $1-x-x^2+x^3$ gives $2+x$ through degree 3. A correct direct series product is equally valid.

</details>

</section>

## Repair and try again {#repair}

Use the row matching your error. Return to the linked explanation, close the previous answer, then attempt the new task. A correct retry should include the condition or decision that was missing.

| Evidence from your work | Recover here | New attempt |
| --- | --- | --- |
| Wrong constant, signs or input range in Questions 1–3 | [Example 2](#example-2--take-out-the-constant-first) | [Retry A](#retry-normalise) |
| Missing coefficients, denominator powers or a condition needed by both series in Questions 4–5 or 7 | [Rational functions](#example-4--expand-a-rational-function), [repeated factor](#example-repeated-factor), [product](#example-5--multiply-and-collect-powers) | [Retry B](#retry-combine) |
| Claiming that being in range guarantees enough decimal places in Question 6 | [Approximation choice and check](#approximations) | [Retry C](#retry-approximation) |

<section class="lesson-check" markdown="1">

### Retry A {#retry-normalise}

<!-- task:retry-normalise -->

Expand $(4-2x^2)^{-1/2}$ through $x^4$ and state the range in $x$.

<!-- /task:retry-normalise -->

<details markdown="1">
<summary>Hint</summary>

Apply the condition to $u=-x^2/2$, not to $x$ alone.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$n=-1/2$ with outside factor $1/2$ gives

$$(4-2x^2)^{-1/2}=\frac12+\frac{x^2}{8}+\frac{3x^4}{64}+\cdots.$$

The condition $x^2/2<1$ gives $-\sqrt2<x<\sqrt2$. There are no odd powers because every input factor contains $x^2$.

</details>

</section>

<section class="lesson-check" markdown="1">

### Retry B {#retry-combine}

<!-- task:retry-combine -->

Find the expansion through $x^3$ and range of (a) $(1+x)/(1-2x)$ , (b) $(1+2x)/(1-x)^2$ and (c) $(2-x)/((1-2x)(1+x))$. Explain how you check the coefficient of $x^3$ in each and combine the range conditions.

<!-- /task:retry-combine -->

<details markdown="1">
<summary>Hint</summary>

In each product, collect all powers adding to $3$; the denominator determines which infinite series is needed.

</details>

<details markdown="1">
<summary>Solution and check</summary>

(a) $1+3x+6x^2+12x^3+\cdots$, with $-1/2<x<1/2$; the cubic coefficient is $8+4=12$.

(b) $1+4x+7x^2+10x^3+\cdots$, with $-1<x<1$; the cubic coefficient is $4+2(3)=10$.

(c) The decomposition is $1/(1-2x)+1/(1+x)$, giving $2+x+5x^2+7x^3+\cdots$. Both $\lvert2x\rvert<1$ and $\lvert x\rvert<1$ are needed, so $-1/2<x<1/2$; the cubic coefficient is $8-1=7$.

Multiplying each result by its original denominator recovers the numerator through degree 3.

</details>

</section>

<section class="lesson-check" markdown="1">

### Retry C {#retry-approximation}

<!-- task:retry-approximation -->

Estimate $\sqrt{15.84}$ using an expansion through the cubic term in a suitable small input. Give five decimal places and check with a calculator.

<!-- /task:retry-approximation -->

<details markdown="1">
<summary>Hint</summary>

Use $4\sqrt{1-0.01}$. Distinguish the estimate from the full infinite series.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The cubic estimate is $4(1-0.005-0.0000125-0.0000000625)=3.97994975$. Both this and the calculator value round to $3.97995$ at five decimal places. The numerical comparison checks the requested rounding here; the range condition alone would not.

</details>

</section>

## Return later {#review}

After studying another topic, return here without the examples open. Record the method you chose, help used and any changed decision.

<section class="lesson-check" markdown="1">

### Review task {#later-review}

<!-- task:later-review -->

Let $H(x)=(1+x)/\sqrt{1-2x}$. Find its expansion through $x^3$ and the range. Use it to estimate $H(0.01)$ to four decimal places, checking the rounding. A student says that the same four-term expression must be accurate to four decimal places at $x=0.49$ because it is in range. Assess the claim.

<!-- /task:later-review -->

<details markdown="1">
<summary>Hint</summary>

Keep the constant and all products contributing to each power. Compare a truncated value with the original when assessing accuracy.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$H(x)=1+2x+\frac52x^2+4x^3+\cdots$ for $-1/2<x<1/2$. The cubic estimate at $0.01$ is $1.020254$, and the original value is approximately $1.0202540700$; both round to $1.0203$.

At $0.49$ the cubic gives $3.050846$, whereas the original is approximately $10.536$. The series is valid there, but these four terms are insufficient. Return to [products](#example-5--multiply-and-collect-powers) for a coefficient error or [approximations](#approximations) for the accuracy claim.

</details>

</section>

## Quick Reference {#quick-reference}

| Task | Method | Check |
|---|---|---|
| Expand $(1+u)^n$ | Use the binomial series | Substitute the whole $u$, including its sign |
| Expand $(a+bx)^n$, $a>0$ | Write $a^n\left(1+\frac{b}{a}x\right)^n$ | Multiply every term by $a^n$ |
| State the range | Use $\lvert u\rvert<1$ for the infinite series here | Apply all ranges if you combine series |
| Expand a rational function | Use partial fractions first | Recombine the coefficients |
| Expand a product | Collect terms of the same power | Include every product needed for the requested power |
| Find an approximation | Choose small $\lvert u\rvert$ and neglect higher powers | Use $\approx$ and check the requested accuracy |
{: .wide-table}

**If your answer looks wrong:** check the outside factor, signs, factorials, missing products and range. A function may be defined at a value where this expansion is not valid.

**You should be able to:** expand negative and fractional powers, combine series, state their range of validity and choose an effective form for an approximation.

**Learning path:** [Previous: Partial Fractions](/alevel/a2-mathematics/partial-fractions/) · [Next: Trigonometric Functions and Formulae](/alevel/a2-mathematics/trigonometric-functions-and-formulae/) · [Return to the Pure Mathematics topic index](/alevel/a2-mathematics/).

## Next step {#next-step}

If you can choose the input, combine coefficients and justify the range without help, continue to [Trigonometric Functions and Formulae](/alevel/a2-mathematics/trigonometric-functions-and-formulae/). If a check fails, use [the matching recovery route](#repair), then return to [the review task](#later-review) after a gap.

<details id="lesson-sources" markdown="1">
<summary>Sources and scope</summary>

Scope: OxfordAQA 9660 MA03, P2.2, [specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf), printed p21. Preparation checked January 2025 MA03 Q14(a)–(c), [QP pp26–27](https://aqamat.alevelclouds.com/25_01_QP_P2.pdf) and [MS pp21–22](https://aqamat.alevelclouds.com/25_01_MS_P2.pdf), for normalisation, expansion and combining coefficients. The questions on this page remain self-written. Original textbook locator: Chapter 2, Sections 2.1–2.2, printed pp24–30; not rechecked against the book in this revision. Endpoint convergence and formal remainder bounds are outside this lesson.

</details>

{% include exam_topic_practice.html %}
