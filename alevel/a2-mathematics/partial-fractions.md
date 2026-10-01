---
title: Partial Fractions
layout: subjects
mathjax: true
grade: a2
subject: a2-mathematics
permalink: /alevel/a2-mathematics/partial-fractions/
toc_headings: h2
study_page: true
---

[Pure Mathematics](/alevel/a2-mathematics/) · P2.1 Algebra and P2.7 Integration

Learn to express algebraic fractions in partial fractions, integrate each term and check your answer.

- **Learning:** start with the [method](#method), then work through the examples.
- **Homework help:** review [worked examples](#worked-examples) or [integration](#integration).
- **Revision:** try [practice](#practice) first; use the [quick reference](#quick-reference) afterwards.

Textbook: Sections 1.7–1.8 (pp. 14–19) and 6.4 (pp. 91–95). We write the constant of integration as $C$.

**Before you start:** you should know how to factorise, use algebraic division, compare coefficients and integrate basic functions. Review [Algebraic Fractions and Algebraic Division](/alevel/a2-mathematics/algebraic-fractions-and-division/) if needed.

## Method

**Learning goal:** Decide whether an algebraic fraction needs division. Write its partial fractions, find the constants and check their signs.

Try first: write the form of each decomposition without finding the constants.

$$\frac{5x+1}{(x-1)(x+2)},\qquad \frac{x^2+1}{(x-1)(x+2)}.$$

If you used the same form for both expressions, check the degrees of the numerator and denominator.

**Choose the first step**

| Structure | First step | Reason |
|---|---|---|
| Degree of numerator ≥ degree of denominator | Use algebraic division first | Express the proper fraction in partial fractions. Keep the quotient. |
| Distinct linear factors | Use a constant numerator for each factor | For example, $\displaystyle \frac{A}{x-1}+\frac{B}{x+2}$ |
| A repeated factor $(x-a)^2$ | Include both $\displaystyle \frac{A}{x-a}+\frac{B}{(x-a)^2}$ | Include every power up to the highest one |

The first expression is a proper fraction. Rewrite the second as $1+\frac{-x+3}{(x-1)(x+2)}$ before decomposing the remainder.

**Cancel common factors first.** Keep the restrictions on the original domain: values that make the original denominator zero are still excluded.


**Spot the error: why check the constants?**

Are the signs in this decomposition correct?

$$\frac{-5}{(4x-1)(3x-2)}\overset{?}{=}-\frac{4}{4x-1}+\frac{3}{3x-2}.$$

<details markdown="1">
<summary>Show the check</summary>

Writing the right-hand side as a single fraction gives the numerator $-4(3x-2)+3(4x-1)=5$, the opposite of the original $-5$.

The correct decomposition is

$$\frac{-5}{(4x-1)(3x-2)}=\frac{4}{4x-1}-\frac{3}{3x-2}.$$

For a quick check, substitute $x=0$: the original expression gives $-\frac{5}{2}$, but the incorrect decomposition gives $\frac{5}{2}$. One substitution may show an error. To check the identity fully, add the fractions and simplify.

</details>


## Worked Examples

### Worked example 1 — Different linear factors

Express $\displaystyle\frac{5x+1}{(x-1)(x+2)}$ in partial fractions.

**1. Choose the form.** The numerator has a lower degree and the two factors are distinct, so

$$\frac{5x+1}{(x-1)(x+2)}=\frac{A}{x-1}+\frac{B}{x+2},\qquad x\ne1,-2.$$

**2. Multiply by the denominator.** The resulting polynomial identity is true for all $x$:

$$5x+1\equiv A(x+2)+B(x-1).$$

**3. Choose values that make one term zero.** Setting $x=1$ gives $6=3A$, so $A=2$. Setting $x=-2$ gives $-9=-3B$, so $B=3$.

Use these values in the polynomial identity. The original fraction is undefined at $x=1$ and $x=-2$.

$$\boxed{\frac{5x+1}{(x-1)(x+2)}=\frac{2}{x-1}+\frac{3}{x+2}}$$

**4. Add the fractions to check.** $2(x+2)+3(x-1)=5x+1$, giving the original numerator.

**Repeated linear factors**

For $(x-a)^2$, using only $\frac{B}{(x-a)^2}$ does not give the full form: include the term with denominator $x-a$ too. A coefficient may turn out to be zero, but do not omit its term before calculating it.

### Worked example 2 — A repeated factor

Express $\displaystyle\frac{2x^2+2x-18}{x(x-3)^2}$ in partial fractions.

$$\frac{2x^2+2x-18}{x(x-3)^2}=\frac{A}{x}+\frac{B}{x-3}+\frac{C}{(x-3)^2},\qquad x\ne0,3.$$

Multiply by the denominator:

$$2x^2+2x-18\equiv A(x-3)^2+Bx(x-3)+Cx.$$

- Set $x=0$: $-18=9A$, so $A=-2$.
- Set $x=3$: $6=3C$, so $C=2$.
- The two roots determine only two constants. Compare coefficients of $x^2$: $2=A+B$, so $B=4$.

$$\boxed{\frac{2x^2+2x-18}{x(x-3)^2}=-\frac{2}{x}+\frac{4}{x-3}+\frac{2}{(x-3)^2}}$$

**Check:** Recombining gives the original numerator:

$$\begin{aligned}&-2(x-3)^2+4x(x-3)+2x\\&\qquad=2x^2+2x-18.\end{aligned}$$

Next, apply these decompositions in [integration](#integration), then try [practice](#practice).


## Integration

Unsure which method fits your integral? Start with [Integration — Choosing a Method](/alevel/a2-mathematics/integration/#choose-a-method).

**Choose the method first:** Try partial fractions when the integrand is an algebraic fraction with linear factors in the denominator. First check whether the numerator is a constant multiple of the derivative of the denominator. If it is, use the standard form $\int \frac{f'(x)}{f(x)}\,dx$. For example, $\int\frac{2x+2}{x^2+2x-15}\,dx=\ln\lvert x^2+2x-15\rvert+C$.

**Integrate the separate terms**

| Term | Integral | What should you check? |
|---|---|---|
| $\displaystyle \frac{A}{ax+b}$ | $\displaystyle \frac{A}{a}\ln\lvert ax+b\rvert$ | Divide by $a$, the derivative of $ax+b$. Use modulus signs. |
| $\displaystyle \frac{B}{(ax+b)^2}$ | $\displaystyle -\frac{B}{a(ax+b)}$ | Use the power rule, not a logarithm |
| Polynomial quotient | Integrate term by term | Include the quotient from division |

Here $a\ne0$. Add $C$ for an indefinite integral. Use each result on an interval where the denominator is never zero.

### Worked example 3 — Division, partial fractions and integration {#worked-example-3--division-decomposition-integration}

Find $\displaystyle\int\frac{x^2}{(x+5)(x-3)}\,dx$.

**1. Why divide first?** Both numerator and denominator are quadratic, so use algebraic division and keep the quotient $1$:

$$\frac{x^2}{(x+5)(x-3)}=1+\frac{-2x+15}{(x+5)(x-3)}.$$

**2. Express the proper fraction in partial fractions.** Write $-2x+15\equiv A(x-3)+B(x+5)$.

- $x=-5$: $25=-8A$, so $A=-\frac{25}{8}$.
- $x=3$: $9=8B$, so $B=\frac{9}{8}$.

$$\frac{x^2}{(x+5)(x-3)}=1-\frac{25}{8(x+5)}+\frac{9}{8(x-3)}.$$

**3. Integrate term by term.**

$$\boxed{\int\frac{x^2}{(x+5)(x-3)}\,dx=x-\frac{25}{8}\ln\lvert x+5\rvert+\frac{9}{8}\ln\lvert x-3\rvert+C}$$

**4. Differentiate to check.** Differentiation recovers $1-\frac{25}{8(x+5)}+\frac{9}{8(x-3)}$. Recombining gives the numerator

$$(x+5)(x-3)-\frac{25}{8}(x-3)+\frac{9}{8}(x+5)=x^2.$$

### Repeated factors — return to example 2

Integrate the three terms obtained earlier separately:

$$\int\frac{2x^2+2x-18}{x(x-3)^2}\,dx=-2\ln\lvert x\rvert+4\ln\lvert x-3\rvert-\frac{2}{x-3}+C.$$

The final term comes from $\int2(x-3)^{-2}\,dx=-2(x-3)^{-1}$. Use a logarithm only for a linear factor raised to the power $-1$.


## Practice

**Independent practice · 15–20 minutes**

Work on paper first. Open a hint only if you get stuck, then reveal the solution to check your work.

These are self-written exercises, not official past-paper questions. The time is only a guide for practice. These questions have no official marks.

### Q1 — Basic decomposition

Express $\displaystyle\frac{7x+1}{(x-1)(x+2)}$ in partial fractions. Check your answer by adding the fractions.

<details markdown="1">
<summary>Hint: how can you find the constants?</summary>

Write $\frac{A}{x-1}+\frac{B}{x+2}$, multiply by the denominator, then substitute $x=1$ and $x=-2$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$7x+1\equiv A(x+2)+B(x-1)$. Hence $8=3A$ and $-13=-3B$.

$$\boxed{\frac{7x+1}{(x-1)(x+2)}=\frac{8}{3(x-1)}+\frac{13}{3(x+2)}}$$

Recombining gives the numerator $\frac{8(x+2)+13(x-1)}{3}=7x+1$. The original expression requires $x\ne1,-2$.

</details>

### Q2 — A repeated factor

Express $\displaystyle\frac{3x+5}{(x+1)^2}$ in partial fractions. Hence find $\displaystyle\int\frac{3x+5}{(x+1)^2}\,dx$.

<details markdown="1">
<summary>Hint: which term must you include?</summary>

Include both $\frac{A}{x+1}$ and $\frac{B}{(x+1)^2}$. Multiply by the denominator, then compare coefficients of $x$ and the constant terms.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$3x+5\equiv A(x+1)+B$, giving $A=3$ and $B=2$.

$$\frac{3x+5}{(x+1)^2}=\frac{3}{x+1}+\frac{2}{(x+1)^2}.$$

$$\boxed{3\ln\lvert x+1\rvert-\frac{2}{x+1}+C}$$

Differentiation gives $\frac{3}{x+1}+\frac{2}{(x+1)^2}$; adding the fractions gives the original expression. Note that $x\ne-1$.

</details>

### Q3 — Choose the method

Find $\displaystyle\int\frac{2x^2+3x+4}{(x+1)(x+2)}\,dx$. Check your result by differentiation.

<details markdown="1">
<summary>Hint: check the degrees first</summary>

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

### Q4 — Definite integral

Evaluate $\displaystyle\int_0^1\frac{5}{(2x+1)(x+2)}\,dx$, giving your answer in an exact logarithmic form.

<details markdown="1">
<summary>Hint: how does the linear coefficient affect integration?</summary>

After clearing the denominator, use $x=-\frac{1}{2}$ and $x=-2$ to find the constants. Divide by $2$ when integrating $\frac{A}{2x+1}$. Both factors are positive from $x=0$ to $x=1$, so the denominator is never zero.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$5\equiv A(x+2)+B(2x+1)$, giving $A=\frac{10}{3}$ and $B=-\frac{5}{3}$.

$$\int_0^1\frac{5}{(2x+1)(x+2)}\,dx=\left[\frac{5}{3}\ln(2x+1)-\frac{5}{3}\ln(x+2)\right]_0^1=\boxed{\frac{5}{3}\ln2}.$$

The expression in brackets is $0$ at the upper limit and $-\frac{5}{3}\ln2$ at the lower limit. Subtracting gives a positive result, as expected because the integrand is positive throughout the interval. Differentiating $\frac{5}{3}\ln(2x+1)$ gives $\frac{10}{3(2x+1)}$, including the factor $2$ from the chain rule.

</details>


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
| Incorrect signs in the constants | [Sign-error example](#method) | Recombine to recover the original numerator |
| Incorrect logarithm coefficient | [Integration rules](#integration) | Differentiate to check the coefficient from the chain rule |
| Correct result but incomplete working | Example 3 and Q4 | Show the identity, integration and substitution of limits |

Note the question number and the step you found difficult. Try it again without the solution after two days. After a week, try a similar question with different coefficients.

**You should be able to:** write the partial fractions, find the constants, integrate and check your answer by adding fractions and differentiating.

This topic follows P2.1 and P2.7 of the [OxfordAQA Mathematics 9660 specification](https://www.oxfordaqa.com/wp-content/uploads/2023/10/oxfordaqa-a-level-mathematics-specification.pdf). The worked examples are teaching examples; Q1–Q4 are self-written exercises. For official past-paper practice, use an MA03 Question Paper with its corresponding Mark Scheme.

**Learning path:** [Previous: Algebraic Fractions and Division](/alevel/a2-mathematics/algebraic-fractions-and-division/) · [Next: Binomial Series](/alevel/a2-mathematics/binomial-series/).
