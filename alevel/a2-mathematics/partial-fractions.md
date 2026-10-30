---
title: Partial Fractions
layout: subjects
mathjax: true
grade: a2
subject: a2-mathematics
permalink: /alevel/a2-mathematics/partial-fractions/
toc_headings: h2, h3
reading_layout: true
study_page: true
---

[Pure Mathematics](/alevel/a2-mathematics/) · P2.1 Algebra and P2.7 Integration
{: .lesson-meta}

Learn why splitting one algebraic fraction into simpler fractions can make it easier to work with. Find the numbers that make the split correct, then use it to integrate and check the result.

- **Learning:** start with the [method](#method), then work through the examples.
- **Homework help:** review [worked examples](#worked-examples) or [integration](#integration).
- **Revision:** try [practice](#practice) first; use the [quick reference](#quick-reference) afterwards.
{: .lesson-routes}

Textbook: Sections 1.7–1.8 (pp. 14–19) and 6.4 (pp. 91–95). We write the constant of integration as $C$.

<div class="lesson-notes" markdown="1">

**Before you start:** use [algebraic division](/alevel/a2-mathematics/algebraic-fractions-and-division/#algebraic-division) and compare coefficients. The decomposition section needs algebra only. Before integration, recover [standard integrals](/alevel/a2-mathematics/integration/#standard-integrals) and [logarithmic integration](/alevel/a2-mathematics/integration/#logarithmic-form). First learn how to split a fraction while preserving equality, then integrate the terms with valid conditions. For revision, start at [practice](#practice), use [repair and retry](#repair-and-retry), then complete [the later review](#later-review).

</div>

## Method

**Learning goal:** Decide whether an algebraic fraction needs division. Write its partial fractions, find the constants and check their signs.

Adding fractions turns several terms into one. Here we work backwards: split one fraction into simpler fractions that add back to it. The simpler pieces are often easier to expand as series or to integrate separately. This way of writing the same expression is called **partial fractions**.

The equality must hold for every input allowed in the original fraction. Such an equality is an **identity**. Finding a match at just one input does not establish it. The letters A and B below stand for fixed numbers we must find, not numbers we can choose differently at each input.

Use the degree comparison you already know to choose a starting point; the decomposition forms are taught below.

<section class="lesson-check" markdown="1">

### Prerequisite check {#check-degrees}

<!-- task:check-degrees -->
Which expression needs algebraic division before it can be written as a sum of proper fractions? Explain using degrees.

$$\frac{5x+1}{(x-1)(x+2)},\qquad \frac{x^2+1}{(x-1)(x+2)}.$$
<!-- /task:check-degrees -->

<details markdown="1">
<summary>Hint</summary>

Compare numerator and denominator degrees; what happens when they are equal?

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\frac{x^2+1}{(x-1)(x+2)}=1+\frac{-x+3}{(x-1)(x+2)}.$$

The first is proper. The second has equal degrees, so divide first and keep the quotient $1$. Recover the division identity on the previous page if needed.

</details>

</section>

**Choose the first step**

| Structure | First step | Reason |
|---|---|---|
| Degree of numerator ≥ degree of denominator | Use algebraic division first | Express the proper fraction in partial fractions. Keep the quotient. |
| Distinct linear factors | Use a constant numerator for each factor | For example, $\displaystyle \frac{A}{x-1}+\frac{B}{x+2}$ |
| A repeated factor $(x-a)^2$ | Include both $\displaystyle \frac{A}{x-a}+\frac{B}{(x-a)^2}$ | Include every power up to the highest one |
{: .wide-table}

This unit’s denominator scope extends to repeated linear factors; decomposition forms for irreducible quadratics are not required.

**Cancel common factors first.** Keep a note of inputs that make the original denominator zero. They remain excluded even if a factor later cancels.


<section class="lesson-check" markdown="1">

### Check a decomposition {#check-signs}

Are the signs in this decomposition correct?

$$\frac{-5}{(4x-1)(3x-2)}\overset{?}{=}-\frac{4}{4x-1}+\frac{3}{3x-2}.$$

<details markdown="1">
<summary>Hint</summary>

Recombine the right-hand side, keeping the sign of each numerator.

</details>

<details markdown="1">
<summary>Show the check</summary>

Writing the right-hand side as a single fraction gives the numerator $-4(3x-2)+3(4x-1)=5$, the opposite of the original $-5$.

The correct decomposition is

$$\frac{-5}{(4x-1)(3x-2)}=\frac{4}{4x-1}-\frac{3}{3x-2}.$$

For a quick check, substitute $x=0$: the original expression gives $-\frac{5}{2}$, but the incorrect decomposition gives $\frac{5}{2}$. One substitution may show an error. To check the identity fully, add the fractions and simplify.

</details>

</section>

## Worked Examples

<section class="worked-example" markdown="1">

### Worked example 1 — Different linear factors

Express $\displaystyle\frac{5x+1}{(x-1)(x+2)}$ in partial fractions.

**1. Choose the form.** The numerator has a lower degree, so no division is needed. There are two different linear factors in the denominator. Use one fraction for each, with a number to find on top:

$$\frac{5x+1}{(x-1)(x+2)}=\frac{A}{x-1}+\frac{B}{x+2},\qquad x\ne1,-2.$$

**2. Multiply both sides by the original denominator.** In each smaller fraction, its own denominator cancels, leaving the other factor multiplying its numerator. We require the resulting polynomial identity to hold for all $x$:

$$5x+1\equiv A(x+2)+B(x-1).$$

**3. Choose values that leave only one unknown number.** Setting $x=1$ makes the factor multiplying B zero. This gives $6=3A$, so $A=2$. Setting $x=-2$ makes the factor multiplying A zero, giving $-9=-3B$, so $B=3$.

These substitutions are made in the polynomial identity, where there is no division. They do not make the original fraction usable at $x=1$ or $x=-2$.

$$\boxed{\frac{5x+1}{(x-1)(x+2)}=\frac{2}{x-1}+\frac{3}{x+2}}$$

**4. Add the fractions to check.** $2(x+2)+3(x-1)=5x+1$, giving the original numerator for every input. With the same denominator and the original exclusions, this checks the whole identity.

</section>

**Repeated linear factors**

For $(x-a)^2$, using only $\frac{B}{(x-a)^2}$ does not give the full form: include the term with denominator $x-a$ too. A coefficient may turn out to be zero, but do not omit its term before calculating it.

Why both terms? Consider the part with this repeated factor. Multiplying by its squared denominator would turn a single squared-denominator term into just a constant. A first-power term leaves a linear factor as well. Together they can reproduce a linear numerator; the squared-denominator term alone cannot do that. Multiplying to remove the denominators is often called **clearing the denominators**.



<section class="worked-example" markdown="1">

### Worked example 2 — A repeated factor

Express $\displaystyle\frac{2x^2+2x-18}{x(x-3)^2}$ in partial fractions.

No division is needed because the numerator has lower degree. The factor x occurs once, while the other factor occurs twice. Include a term for each power of that repeated factor, so there are three numbers to find:

$$\frac{2x^2+2x-18}{x(x-3)^2}=\frac{A}{x}+\frac{B}{x-3}+\frac{C}{(x-3)^2},\qquad x\ne0,3.$$

Multiply by the denominator:

$$2x^2+2x-18\equiv A(x-3)^2+Bx(x-3)+Cx.$$

- Set $x=0$: $-18=9A$, so $A=-2$.
- Set $x=3$: $6=3C$, so $C=2$.
- Those two substitutions have found A and C, but B is still unknown. Compare coefficients of $x^2$: the first two terms on the right supply this power and the last supplies none. Thus $2=A+B$, so $B=4$.

$$\boxed{\frac{2x^2+2x-18}{x(x-3)^2}=-\frac{2}{x}+\frac{4}{x-3}+\frac{2}{(x-3)^2}}$$

**Check:** Recombining gives the original numerator:

$$\begin{aligned}&-2(x-3)^2+4x(x-3)+2x\\&\qquad=2x^2+2x-18.\end{aligned}$$

Next, apply these decompositions in [integration](#integration), then try [practice](#practice).

</section>

## Integration

Unsure which method fits your integral? Start with [Integration — Choosing a Method](/alevel/a2-mathematics/integration/#choose-a-method).

**Choose the method first:** Before splitting the fraction, differentiate its denominator and compare the result with the numerator. If they differ only by a constant multiplier, the logarithmic form $\int \frac{f'(x)}{f(x)}\,dx$ gives a direct route. For example, $\int\frac{2x+2}{x^2+2x-15}\,dx=\ln\lvert x^2+2x-15\rvert+C$. Otherwise, linear factors in the denominator suggest splitting into partial fractions, so that each term has a familiar integral.

Why divide by the linear coefficient? The chain rule gives

$$\frac{d}{dx}\ln\lvert ax+b\rvert=\frac{a}{ax+b},\qquad \frac{d}{dx}(ax+b)^{-1}=-a(ax+b)^{-2}.$$

The first derivative has an extra multiplier a; the second has an extra multiplier −a. To undo those multipliers, integration needs the factors $1/a$ and $-1/a$, respectively. The squared-denominator term has exponent $-2$: increasing that power by one gives the reciprocal of a linear expression. It uses the power rule, not a logarithm.

**Integrate the separate terms**

| Term | Integral | What should you check? |
|---|---|---|
| $\displaystyle \frac{A}{ax+b}$ | $\displaystyle \frac{A}{a}\ln\lvert ax+b\rvert$ | Divide by $a$, the derivative of $ax+b$. Use modulus signs. |
| $\displaystyle \frac{B}{(ax+b)^2}$ | $\displaystyle -\frac{B}{a(ax+b)}$ | Use the power rule, not a logarithm |
| Polynomial quotient | Integrate term by term | Include the quotient from division |
{: .wide-table}

Here $a\ne0$. Add $C$ for an indefinite integral. Use each result on a stretch of the number line where the denominator is never zero. A definite integral using these rules must not pass through a zero of the denominator; checking only its two ends is insufficient.

<section class="worked-example" markdown="1">

### Worked example 3 — Division, partial fractions and integration {#worked-example-3--division-decomposition-integration}

Find $\displaystyle\int\frac{x^2}{(x+5)(x-3)}\,dx$.

**1. Why divide first?** Both numerator and denominator are quadratic. Their highest-power terms have the same coefficient, giving the quotient $1$. Subtract the expanded denominator from the numerator: the quadratic terms cancel, leaving a linear remainder. Keep both the quotient and this remaining fraction:

$$\frac{x^2}{(x+5)(x-3)}=1+\frac{-2x+15}{(x+5)(x-3)}.$$

**2. Split only the remaining fraction.** Its two different linear factors each need a constant numerator. Multiplying by their common denominator gives $-2x+15\equiv A(x-3)+B(x+5)$.

- $x=-5$: $25=-8A$, so $A=-\frac{25}{8}$.
- $x=3$: $9=8B$, so $B=\frac{9}{8}$.

$$\frac{x^2}{(x+5)(x-3)}=1-\frac{25}{8(x+5)}+\frac{9}{8(x-3)}.$$

**3. Integrate term by term.** The constant integrates to x. Each remaining denominator is linear with derivative one, so each fraction gives a logarithm with its coefficient unchanged. Keep the modulus signs and add the constant of integration:

$$\boxed{\int\frac{x^2}{(x+5)(x-3)}\,dx=x-\frac{25}{8}\ln\lvert x+5\rvert+\frac{9}{8}\ln\lvert x-3\rvert+C}$$

**4. Differentiate to check.** Differentiation recovers $1-\frac{25}{8(x+5)}+\frac{9}{8(x-3)}$. Recombining gives the numerator

$$(x+5)(x-3)-\frac{25}{8}(x-3)+\frac{9}{8}(x+5)=x^2.$$

</section>

### Repeated factors — return to example 2

Integrate the three terms obtained earlier separately:

$$\int\frac{2x^2+2x-18}{x(x-3)^2}\,dx=-2\ln\lvert x\rvert+4\ln\lvert x-3\rvert-\frac{2}{x-3}+C.$$

The final term comes from $\int2(x-3)^{-2}\,dx=-2(x-3)^{-1}$. Use a logarithm only for a linear factor raised to the power $-1$.


## Practice

**Independent practice · 15–20 minutes**

Work on paper first. Open a hint only if you get stuck, then reveal the solution to check your work.

These are self-written exercises, not official past-paper questions. The time is only a guide for practice. These questions have no official marks.

<section class="lesson-check" markdown="1">

### Question 1 {#q1--basic-decomposition}

Express $\displaystyle\frac{7x+1}{(x-1)(x+2)}$ in partial fractions. Check your answer by adding the fractions.

<details markdown="1">
<summary>Hint</summary>

Write $\frac{A}{x-1}+\frac{B}{x+2}$, multiply by the denominator, then substitute $x=1$ and $x=-2$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$7x+1\equiv A(x+2)+B(x-1)$. Hence $8=3A$ and $-13=-3B$.

$$\boxed{\frac{7x+1}{(x-1)(x+2)}=\frac{8}{3(x-1)}+\frac{13}{3(x+2)}}$$

Recombining gives the numerator $\frac{8(x+2)+13(x-1)}{3}=7x+1$. The original expression requires $x\ne1,-2$.

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 2 {#q2--a-repeated-factor}

Express $\displaystyle\frac{3x+5}{(x+1)^2}$ in partial fractions. Hence find $\displaystyle\int\frac{3x+5}{(x+1)^2}\,dx$.

<details markdown="1">
<summary>Hint</summary>

Include both $\frac{A}{x+1}$ and $\frac{B}{(x+1)^2}$. Multiply by the denominator, then compare coefficients of $x$ and the constant terms.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$3x+5\equiv A(x+1)+B$, giving $A=3$ and $B=2$.

$$\frac{3x+5}{(x+1)^2}=\frac{3}{x+1}+\frac{2}{(x+1)^2}.$$

$$\boxed{3\ln\lvert x+1\rvert-\frac{2}{x+1}+C}$$

Differentiation gives $\frac{3}{x+1}+\frac{2}{(x+1)^2}$; adding the fractions gives the original expression. Note that $x\ne-1$.

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 3 {#q3--choose-the-method}

Find $\displaystyle\int\frac{2x^2+3x+4}{(x+1)(x+2)}\,dx$. Check your result by differentiation.

<details markdown="1">
<summary>Hint</summary>

Divide first to obtain $2+\frac{-3x}{(x+1)(x+2)}$, then decompose the remainder.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$-3x\equiv A(x+2)+B(x+1)$, so $A=3$ and $B=-6$.

$$\boxed{2x+3\ln\lvert x+1\rvert-6\ln\lvert x+2\rvert+C}$$

Differentiation gives $2+\frac{3}{x+1}-\frac{6}{x+2}$. Recombining gives the numerator

$$\begin{aligned}&2(x+1)(x+2)+3(x+2)-6(x+1)\\&\qquad=2x^2+3x+4.\end{aligned}$$

The original expression requires $x\ne-1,-2$.

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 4 {#q4--definite-integral}

Evaluate $\displaystyle\int_0^1\frac{5}{(2x+1)(x+2)}\,dx$, giving your answer in an exact logarithmic form.

<details markdown="1">
<summary>Hint</summary>

After clearing the denominator, use $x=-\frac{1}{2}$ and $x=-2$ to find the constants. Divide by $2$ when integrating $\frac{A}{2x+1}$. Both factors are positive from $x=0$ to $x=1$, so the denominator is never zero.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$5\equiv A(x+2)+B(2x+1)$, giving $A=\frac{10}{3}$ and $B=-\frac{5}{3}$.

$$\int_0^1\frac{5}{(2x+1)(x+2)}\,dx=\left[\frac{5}{3}\ln(2x+1)-\frac{5}{3}\ln(x+2)\right]_0^1=\boxed{\frac{5}{3}\ln2}.$$

The expression in brackets is $0$ at the upper limit and $-\frac{5}{3}\ln2$ at the lower limit. Subtracting gives a positive result, as expected because the integrand is positive throughout the interval. Differentiating $\frac{5}{3}\ln(2x+1)$ gives $\frac{10}{3(2x+1)}$, including the factor $2$ from the chain rule.

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 5 {#check-three-factors}

<!-- task:check-three-factors -->
Express $\displaystyle\frac{5x^2+7x}{(x-1)(x+1)(2x+1)}$ in partial fractions, stating the restrictions. Hence find an indefinite integral and verify it.
<!-- /task:check-three-factors -->

<details markdown="1">
<summary>Hint</summary>

Use a constant numerator for each distinct linear factor. Multiply both sides by the original denominator, then choose inputs that make two of the three terms zero.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$5x^2+7x\equiv A(x+1)(2x+1)+B(x-1)(2x+1)+D(x-1)(x+1).$$

Set $x=1,-1,-\frac12$ to obtain $12=6A$, $-2=2B$ and $-\frac94=-\frac34D$, hence $A=2,B=-1,D=3$.

$$\frac{5x^2+7x}{(x-1)(x+1)(2x+1)}=\frac2{x-1}-\frac1{x+1}+\frac3{2x+1},\qquad x\ne1,-1,-\frac12.$$

$$\int\frac{5x^2+7x}{(x-1)(x+1)(2x+1)}\,dx=2\ln\lvert x-1\rvert-\ln\lvert x+1\rvert+\frac32\ln\lvert2x+1\rvert+C.$$

Differentiate to recover the three fractions. Their numerator is $2(x+1)(2x+1)-(x-1)(2x+1)+3(x^2-1)=5x^2+7x$. Use the antiderivative on intervals not crossing any excluded input.

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 6 {#check-methods}

<!-- task:check-methods -->
Find each integral and explain your choice of first step. Verify both results.

$$I=\int\frac{2x+3}{(x+1)(x+2)}\,dx,\qquad J=\int\frac{x+3}{(x+1)(x+2)}\,dx.$$
<!-- /task:check-methods -->

<details markdown="1">
<summary>Hint</summary>

Expand and differentiate the denominator; compare the two numerators. Correct partial-fraction methods are also valid.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$I=\ln\lvert(x+1)(x+2)\rvert+C.$$

The derivative of the denominator is $2x+3$, so the logarithmic form applies directly to $I$. For $J$, the numerator is not a constant multiple of that derivative. The identity $x+3\equiv A(x+2)+B(x+1)$ gives $A=2,B=-1$.

$$J=2\ln\lvert x+1\rvert-\ln\lvert x+2\rvert+C.$$

Differentiating recovers each original integrand. Both results apply on intervals not crossing $-2,-1$. Correct partial fractions for both are valid; explain why the first also has a more direct starting point.

</details>

</section>

## Repair and try again {#repair-and-retry}

| Error | Recovery action | New task |
| --- | --- | --- |
| Missing term or wrong constant sign | Review [repeated factors](#worked-example-2--a-repeated-factor) and [recombination](#check-signs); rebuild the numerator identity | [R1](#retry-form) |
| Wrong logarithm coefficient or squared-denominator integral | Review [the derivative checks](#integration); differentiate your proposed antiderivative | [R1](#retry-form) |
| Lost quotient or skipped degree comparison | Review [Example 3](#worked-example-3--division-decomposition-integration) and keep the division identity | [R2](#retry-integral) |
| Skipped definite-integral conditions | Review [integration intervals](#integration); locate denominator zeros inside the limits | [Later review](#later-review) |

Close the old answer before attempting a new task. If you need a hint, check the skill again in a later lesson.

<section class="lesson-check" markdown="1">

### R1 {#retry-form}

<!-- task:retry-form -->
Express $\displaystyle\frac{6x+1}{(2x-1)^2}$ in partial fractions. Hence find an indefinite integral, stating its interval restriction and verifying your result.
<!-- /task:retry-form -->

<details markdown="1">
<summary>Hint</summary>

Include terms with both the first and second powers in the denominator. Multiply by the original denominator, then compare coefficients to find the two numbers on top.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$6x+1\equiv A(2x-1)+B\quad\Rightarrow\quad A=3,\quad B=4.$$

$$\frac{6x+1}{(2x-1)^2}=\frac3{2x-1}+\frac4{(2x-1)^2}.$$

$$\int\frac{6x+1}{(2x-1)^2}\,dx=\frac32\ln\lvert2x-1\rvert-\frac2{2x-1}+C.$$

Use an interval not crossing $x=\frac12$. The two derivatives are $3/(2x-1)$ and $4/(2x-1)^2$, whose numerator recombines to $6x+1$. A logarithm for the second term gives the wrong denominator power.

</details>

</section>

<section class="lesson-check" markdown="1">

### R2 {#retry-integral}

<!-- task:retry-integral -->
Find $\displaystyle\int\frac{x^2+4x+1}{x(x+1)}\,dx$ and verify the result on its allowed intervals.
<!-- /task:retry-integral -->

<details markdown="1">
<summary>Hint</summary>

Compare degrees first, then inspect the factors of the remaining proper fraction.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$x^2+4x+1=x(x+1)+(3x+1),\qquad 3x+1\equiv1(x+1)+2x.$$

$$\frac{x^2+4x+1}{x(x+1)}=1+\frac1x+\frac2{x+1}.$$

$$\int\frac{x^2+4x+1}{x(x+1)}\,dx=x+\ln\lvert x\rvert+2\ln\lvert x+1\rvert+C.$$

Use intervals not crossing $x=-1,0$. Differentiate and recombine: $x(x+1)+(x+1)+2x=x^2+4x+1$. Missing the $x$ term means the polynomial quotient was lost.

</details>

</section>

## Return later {#review}

After another topic, decide the conditions and method yourself before opening help.

<section class="lesson-check" markdown="1">

### Review task {#later-review}

<!-- task:later-review -->
A student applies an antiderivative at the endpoints to report a finite value for $\displaystyle\int_0^2\frac1{(x-1)(x+1)}\,dx$. Is this a valid ordinary definite-integral calculation? Explain. Then evaluate $\displaystyle\int_2^3\frac1{(x-1)(x+1)}\,dx$ exactly and check its sign.
<!-- /task:later-review -->

<details markdown="1">
<summary>Hint</summary>

Check the whole interval of each integral before evaluating endpoints.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The first calculation is invalid: the integrand is undefined at $x=1$ inside the interval, so endpoint subtraction does not give an ordinary definite integral. This task identifies the failed condition; a theory of improper-integral limits is not required.

The second interval $[2,3]$ contains no denominator zero, and the integrand is positive. Clearing denominators gives $1\equiv A(x+1)+B(x-1)$, so $A=\frac12,B=-\frac12$.

$$\int_2^3\frac1{(x-1)(x+1)}\,dx=\left[\frac12\ln\lvert x-1\rvert-\frac12\ln\lvert x+1\rvert\right]_2^3=\boxed{\frac12\ln\frac32}.$$

The positive answer agrees with the graph lying above the $x$-axis; differentiation recovers the integrand. If you checked only endpoints, return to the interval condition and explain why it does hold for the second interval.

</details>

</section>

## Quick Reference

- **Before finding partial fractions:** cancel common factors and keep the original domain restrictions. Use algebraic division if the degree of the numerator is at least the degree of the denominator.
- **Repeated factors:** include every power, for example $\frac{A}{x-a}+\frac{B}{(x-a)^2}$.
- **Integration:** $\int \frac{A}{ax+b}\,dx=\frac{A}{a}\ln\lvert ax+b\rvert+C$; $\int \frac{B}{(ax+b)^2}\,dx=-\frac{B}{a(ax+b)}+C$, where $a\ne0$.
- **Check:** add the partial fractions; differentiate the result of integration; check that the denominator is never zero between the limits.

**After practice: choose your next step**

| Where you got stuck | Review | Reminder for your next attempt |
|---|---|---|
| Unsure how to start | [Choosing the method](#method) | Compare degrees, then inspect the factors |
| Missing a repeated-factor term | [Example 2](#worked-example-2--a-repeated-factor) | Include every power up to the highest one |
| Incorrect signs in the constants | [Sign-error example](#check-signs) | Recombine to recover the original numerator |
| Incorrect logarithm coefficient | [Integration rules](#integration) | Differentiate to check the coefficient from the chain rule |
| Correct result but incomplete working | Example 3 and Q4 | Show the identity, integration and substitution of limits |

Record the question, help used and the step you found difficult. Choose a new task above, then use [the later review](#later-review) after studying another topic.

**You should be able to:** write the partial fractions, find the constants, integrate and check your answer by adding fractions and differentiating.

This topic follows P2.1 and P2.7 of the [OxfordAQA Mathematics 9660 specification](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf). The worked examples are teaching examples; Q1–Q6 are self-written exercises. For official past-paper practice, use an MA03 Question Paper with its corresponding Mark Scheme.

<details markdown="1">
<summary>Scope and sources</summary>

[OxfordAQA 9660 specification v5.2, P2.1](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf); integration applications also use P2.7.

Official questions and paired marking material consulted (mirrors of the published papers): January 2025 Q14(a), QP p26 / MS p21; January 2024 Q10(a), QP p22 / MS p18. [January 2025 QP](https://aqamat.alevelclouds.com/25_01_QP_P2.pdf) · [MS](https://aqamat.alevelclouds.com/25_01_MS_P2.pdf) · [January 2024 QP](https://aqamat.alevelclouds.com/24_01_QP_P2.pdf) · [MS](https://aqamat.alevelclouds.com/24_01_MS_P2.pdf).

The classroom examples, practice, retries and review are self-written teaching material, with no official marks.

</details>

**Learning path:** [Previous: Algebraic Fractions and Division](/alevel/a2-mathematics/algebraic-fractions-and-division/) · [Next: Binomial Series](/alevel/a2-mathematics/binomial-series/).

{% include exam_topic_practice.html %}
