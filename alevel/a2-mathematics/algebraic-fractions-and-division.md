---
title: Algebraic Fractions and Algebraic Division
layout: subjects
mathjax: true
grade: a2
subject: a2-mathematics
permalink: /alevel/a2-mathematics/algebraic-fractions-and-division/
toc_headings: h2
study_page: true
---

[Pure Mathematics](/alevel/a2-mathematics/) · P2.1 Algebra and Functions

Learn to simplify algebraic fractions, use the four operations and express an improper fraction as a polynomial plus a proper fraction. Keep the restrictions from the original expression.

Textbook: Chapter 1, Sections 1.6–1.7 (pp. 13–16). The four operations are included as prerequisite revision. The examples and practice questions below are self-written teaching exercises.

- **Learning:** start with [simplification](#simplification), then work through the examples.
- **Homework help:** use [operations with fractions](#operations-with-fractions) or [algebraic division](#algebraic-division).
- **Revision:** try the [practice questions](#practice) before opening the solutions.

**Before you start:** you should know how to factorise quadratics, expand brackets and collect like terms. Review [domains](/alevel/a2-mathematics/functions/#domain-and-range) if needed.

## Simplification

A **rational function** is a fraction whose numerator and denominator are polynomials. For example,

$$f(x)=\frac{x^2-9}{x^2+x-6}.$$

The denominator cannot be zero. Find these restrictions before cancelling any factors.

### Factorise first

1. Factorise the numerator and denominator.
2. State the values excluded by the original denominator.
3. Cancel any common factors.
4. Keep the original restrictions with the simplified answer.

You can cancel a **factor** multiplying the whole numerator and denominator. You cannot cancel a term from a sum. For example,

$$\frac{x(x+2)}{x(x+5)}=\frac{x+2}{x+5},\qquad x\ne0,-5,$$

but $\frac{x+2}{x+5}$ cannot be simplified by cancelling the two occurrences of $x$.

### Example 1 — A cancelled factor still gives a restriction

**Question:** Simplify $\displaystyle\frac{x^2-9}{x^2+x-6}$ and state its domain.

Factorise both polynomials:

$$\frac{x^2-9}{x^2+x-6}=\frac{(x-3)(x+3)}{(x+3)(x-2)}.$$

The original denominator is zero at $x=-3$ and $x=2$. For all other real inputs, cancel the common factor $x+3$:

$$\boxed{\frac{x^2-9}{x^2+x-6}=\frac{x-3}{x-2},\qquad x\ne-3,2}.$$

The domain is all real $x$ except $-3$ and $2$.

**Check:** At $x=0$, both expressions give $\frac32$. At $x=-3$, the simplified formula alone would give $\frac65$, but the original fraction is undefined. The restriction must remain.

### Fractions within a fraction

If the numerator or denominator contains fractional coefficients, multiply **both** by a common multiple of their denominators. For example,

$$\frac{\frac12x+1}{\frac14x-2}=\frac{2x+4}{x-8},\qquad x\ne8.$$

Here both the numerator and denominator were multiplied by $4$. There are no common factors to cancel in the result.

## Operations with Fractions

Use the same rules as for numerical fractions. The letters below represent expressions: every denominator must be non-zero.

| Operation | Rule | What to check |
|---|---|---|
| Addition | $\displaystyle\frac ab+\frac cd=\frac{ad+bc}{bd}$ | Use a common denominator; factorise to avoid unnecessary expansion |
| Subtraction | $\displaystyle\frac ab-\frac cd=\frac{ad-bc}{bd}$ | Subtract the whole second numerator |
| Multiplication | $\displaystyle\frac ab\times\frac cd=\frac{ac}{bd}$ | Cancel common factors before expanding |
| Division | $\displaystyle\frac ab\div\frac cd=\frac ab\times\frac dc$ | The divisor must also be non-zero, so $c\ne0$ |

The product $bd$ is a common denominator. If $b$ and $d$ share a factor, you can use a smaller common denominator.

### Example 2 — Subtract the whole numerator

**Question:** Express $\displaystyle\frac{2}{x-1}-\frac{x}{x+2}$ as a single fraction.

The common denominator is $(x-1)(x+2)$, with $x\ne1,-2$.

$$\frac{2}{x-1}-\frac{x}{x+2}=\frac{2(x+2)-x(x-1)}{(x-1)(x+2)}.$$

Expand the numerator carefully:

$$2x+4-(x^2-x)=-x^2+3x+4.$$

Therefore,

$$\boxed{\frac{2}{x-1}-\frac{x}{x+2}=\frac{-x^2+3x+4}{(x-1)(x+2)},\qquad x\ne1,-2}.$$

The numerator factorises as $-(x-4)(x+1)$, so no factor cancels with the denominator.

**Check:** At $x=0$, both expressions give $-2$.

**Common mistake:** writing $-x(x-1)=-x^2-x$. The correct expansion is $-x^2+x$.

### Example 3 — Division adds a restriction

**Question:** Simplify $\displaystyle\frac{x^2-9}{x^2-1}\div\frac{x-3}{x+1}$ and state all restrictions.

The original denominators require $x\ne1,-1$. The divisor must not be zero, so also exclude $x=3$.

Multiply by the reciprocal of the divisor, then factorise:

$$\frac{x^2-9}{x^2-1}\times\frac{x+1}{x-3}
=\frac{(x-3)(x+3)(x+1)}{(x-1)(x+1)(x-3)}.$$

Cancel common factors, keeping all three restrictions:

$$\boxed{\frac{x+3}{x-1},\qquad x\ne-1,1,3}.$$

**Check:** At $x=0$, the original expression is $9\div(-3)=-3$, which agrees with the answer.

**Common mistake:** keeping only $x\ne1$ because it is the only restriction visible in the final denominator. At $x=3$, the original expression would require division by zero.

## Algebraic Division

The **degree** of a non-zero polynomial is its highest power of $x$. For example, $3x^2-7$ has degree $2$.

| Type of fraction | Degrees | First step |
|---|---|---|
| Proper | Numerator degree is less than denominator degree | Simplify or use partial fractions as needed |
| Improper | Numerator degree is at least denominator degree | Use algebraic division |

For example, $\frac{x+1}{x^2+2}$ is proper, while $\frac{x^2+1}{x^2+2}$ is improper. Equal degrees still require division.

Division gives a **quotient** $Q(x)$ and a **remainder** $R(x)$:

$$F(x)=G(x)Q(x)+R(x).$$

Thus, wherever $G(x)\ne0$,

$$\frac{F(x)}{G(x)}=Q(x)+\frac{R(x)}{G(x)}.$$

If the remainder is non-zero, its degree must be less than the degree of $G$. A zero remainder means the division is exact.

### Example 4 — Rearrange a simple numerator

**Question:** Express $\displaystyle\frac{3x+5}{x-2}$ as a constant plus a proper fraction.

Write the numerator as a multiple of the denominator plus a remainder:

$$3x+5=3(x-2)+11.$$

Therefore,

$$\boxed{\frac{3x+5}{x-2}=3+\frac{11}{x-2},\qquad x\ne2}.$$

**Check:** Multiply the answer by $x-2$: $3(x-2)+11=3x+5$.

### Example 5 — Remainder theorem and comparison of coefficients

**Question:** Express $\displaystyle\frac{2x^3+3x^2-5x+4}{x+2}$ as a quadratic expression plus a proper fraction.

The **remainder theorem** says that the remainder on division of $F(x)$ by $x-a$ is $F(a)$.

Here $x+2=x-(-2)$, so the remainder is

$$F(-2)=2(-2)^3+3(-2)^2-5(-2)+4=10.$$

The quotient is quadratic. Write the polynomial identity

$$2x^3+3x^2-5x+4\equiv(x+2)(Ax^2+Bx+C)+10.$$

Expand the right-hand side and compare coefficients:

$$2x^3+3x^2-5x+4\equiv Ax^3+(2A+B)x^2+(2B+C)x+2C+10.$$

| Coefficient | Equation | Result |
|---|---|---|
| $x^3$ | $A=2$ | $A=2$ |
| $x^2$ | $2A+B=3$ | $B=-1$ |
| $x$ | $2B+C=-5$ | $C=-3$ |

The constant term checks: $2C+10=-6+10=4$.

$$\boxed{\frac{2x^3+3x^2-5x+4}{x+2}=2x^2-x-3+\frac{10}{x+2},\qquad x\ne-2}.$$

Substituting $-2$ into the **polynomial** is allowed. The original fraction is undefined there.

### The same example by long division

Long division gives the same quotient and remainder. Write the powers in descending order and include a zero coefficient for any missing power.

At each step, divide the leading term of the current remainder by the leading term of the divisor. Multiply the divisor by that result, then subtract.

| Current expression | Next quotient term | Subtract | New remainder |
|---|---|---|---|
| $2x^3+3x^2-5x+4$ | $2x^2$ | $2x^2(x+2)$ | $-x^2-5x+4$ |
| $-x^2-5x+4$ | $-x$ | $-x(x+2)$ | $-3x+4$ |
| $-3x+4$ | $-3$ | $-3(x+2)$ | $10$ |

Stop because the constant remainder has lower degree than the linear divisor. The quotient is $2x^2-x-3$.

**Check either method:** Expand $(x+2)(2x^2-x-3)+10$. It gives $2x^3+3x^2-5x+4$.

**A different linear divisor:** For $kx-b$ with $k\ne0$, the constant remainder is $F(\frac bk)$. The quotient coefficients must still account for the leading coefficient $k$.

### Factor theorem

The **factor theorem** says that $ax+b$ is a factor of the polynomial $F(x)$ if and only if $F(-\frac ba)=0$, where $a\ne0$. This is the remainder theorem with a zero remainder.

For example, for $F(x)=2x^3+x^2-8x-4$, the divisor $2x+1$ is zero at $x=-\frac12$. Since

$$F\left(-\frac12\right)=-\frac14+\frac14+4-4=0,$$

$2x+1$ is a factor. Division gives

$$\begin{aligned}F(x)&=(2x+1)(x^2-4)\\&=(2x+1)(x-2)(x+2).\end{aligned}$$

Expanding checks the factorisation.

**Common mistake:** substituting $-b$ instead of $-\frac ba$ for a divisor $ax+b$.

### Example 6 — Divide before using partial fractions

**Question:** Express $\displaystyle\frac{x^2+6x-1}{(x-1)(x+2)}$ as a polynomial plus a proper fraction.

The denominator is $x^2+x-2$. Its degree equals the numerator degree, so the fraction is improper.

Subtract one copy of the denominator from the numerator:

$$x^2+6x-1=(x^2+x-2)+(5x+1).$$

Hence,

$$\boxed{\frac{x^2+6x-1}{(x-1)(x+2)}=1+\frac{5x+1}{(x-1)(x+2)},\qquad x\ne1,-2}.$$

The remainder has degree $1$, which is less than the denominator degree $2$. The fraction after the quotient is now proper.

The [first Partial Fractions example](/alevel/a2-mathematics/partial-fractions/#worked-example-1--different-linear-factors) shows that this remainder fraction is $\frac2{x-1}+\frac3{x+2}$. Therefore the full result is

$$1+\frac2{x-1}+\frac3{x+2},\qquad x\ne1,-2.$$

**Check:** Adding the fractions gives the original numerator:

$$\begin{aligned}&(x-1)(x+2)+2(x+2)+3(x-1)\\&\qquad=x^2+6x-1.\end{aligned}$$

**Common mistake:** giving only the two partial fractions and losing the quotient $1$.

## Practice

Show your factorisation or division steps. State all restrictions, then check your result before opening the solution.

### Question 1 — Keep the original domain

Simplify $\displaystyle\frac{x^2-4}{x^2-5x+6}$ and state its domain.

<details markdown="1">
<summary>Hint</summary>

Factorise both polynomials. Which value becomes invisible after you cancel a factor?

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\frac{(x-2)(x+2)}{(x-2)(x-3)}=\frac{x+2}{x-3},\qquad x\ne2,3.$$

The domain is all real $x$ except $2$ and $3$.

**Check:** At $x=0$, both expressions give $-\frac23$. The simplified formula would give $-4$ at $x=2$, but the original fraction is undefined.

</details>

### Question 2 — A shared denominator factor

Express $\displaystyle\frac1{x-2}-\frac3{(x-2)(x+1)}$ as a single fraction in its simplest form. State the restrictions.

<details markdown="1">
<summary>Hint</summary>

Use $(x-2)(x+1)$ as the common denominator. You only need to multiply the first numerator by $x+1$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\frac{x+1-3}{(x-2)(x+1)}=\frac{x-2}{(x-2)(x+1)}=\frac1{x+1},\qquad x\ne2,-1.$$

**Check:** At $x=0$, the original expression gives $-\frac12+\frac32=1$, as does the result. The cancelled factor does not allow $x=2$.

</details>

### Question 3 — Check the divisor too

Simplify $\displaystyle\frac{x^2-1}{x^2-4}\div\frac{x+1}{x-2}$ and state all restrictions.

<details markdown="1">
<summary>Hint</summary>

Exclude zeros of both original denominators and any value that makes the divisor zero. Then multiply by its reciprocal.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The denominator restrictions are $x\ne-2,2$. The divisor is zero at $x=-1$, so this value is excluded too.

$$\frac{(x-1)(x+1)}{(x-2)(x+2)}\times\frac{x-2}{x+1}=\frac{x-1}{x+2},\qquad x\ne-2,-1,2.$$

**Check:** At $x=0$, the original expression is $\frac14\div(-\frac12)=-\frac12$, matching the answer.

</details>

### Question 4 — Find a quotient and remainder

Express $\displaystyle\frac{x^2+4}{x-2}$ as a polynomial plus a proper fraction. Check the remainder using the remainder theorem.

<details markdown="1">
<summary>Hint</summary>

The quotient is linear. The remainder is $F(2)$ for $F(x)=x^2+4$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The remainder is $F(2)=8$. The identity is

$$x^2+4=(x-2)(x+2)+8.$$

Therefore,

$$\frac{x^2+4}{x-2}=x+2+\frac8{x-2},\qquad x\ne2.$$

**Check:** Expand $(x-2)(x+2)+8=x^2-4+8=x^2+4$.

</details>

**Follow-up:** For $P(x)=2x^3-3x^2-8x+12$, show that $2x-3$ is a factor, then factorise $P(x)$ fully.

<details markdown="1">
<summary>Solution and check</summary>

$P(\frac32)=\frac{27}{4}-\frac{27}{4}-12+12=0$. By the factor theorem, $2x-3$ is a factor. Division gives

$$\boxed{P(x)=(2x-3)(x^2-4)=(2x-3)(x-2)(x+2).}$$

Expand the factors to check the original polynomial.

</details>

### Question 5 — A quadratic divisor

Express $\displaystyle\frac{x^3+2x^2+3x+4}{x^2-1}$ as a polynomial plus a proper fraction. Then express that proper fraction in partial fractions.

<details markdown="1">
<summary>Hint</summary>

Use long division with divisor $x^2-1$. A non-zero remainder may now be linear. Keep the quotient when you form the partial fractions.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Subtract $x(x^2-1)$ from the numerator to leave $2x^2+4x+4$. Subtract $2(x^2-1)$ to leave $4x+6$.

The quotient is $x+2$ and the remainder is $4x+6$:

$$\frac{x^3+2x^2+3x+4}{x^2-1}=x+2+\frac{4x+6}{(x-1)(x+1)},\qquad x\ne1,-1.$$

For the proper fraction, write

$$4x+6\equiv A(x+1)+B(x-1).$$

Setting $x=1$ gives $A=5$. Setting $x=-1$ gives $B=-1$. Hence,

$$\boxed{x+2+\frac5{x-1}-\frac1{x+1},\qquad x\ne1,-1}.$$

**Check:** $5(x+1)-(x-1)=4x+6$. Including the quotient gives the original numerator:

$$\begin{aligned}&(x^2-1)(x+2)+(4x+6)\\&\qquad=x^3+2x^2+3x+4.\end{aligned}$$

</details>

## Quick Reference

| Task | Method | Check |
|---|---|---|
| Simplify | Factorise, then cancel common factors | Keep the original domain restrictions |
| Add or subtract | Use a common denominator | Put brackets around a numerator being subtracted |
| Multiply | Multiply numerators and denominators | Cancel factors before expanding |
| Divide | Multiply by the reciprocal | Exclude values that make the divisor zero |
| Divide polynomials | Find quotient and remainder | Expand divisor times quotient plus remainder |
| Use the remainder theorem | For divisor $ax+b$, calculate $F(-\frac ba)$, where $a\ne0$ | Substitute into the polynomial, not the fraction |
| Use the factor theorem | Check whether that remainder is zero | Expand the resulting factors to check |
| Prepare for partial fractions | Divide if the fraction is improper | Keep the quotient in the final answer |

**Can you explain it?** Why can a cancelled factor still exclude an input? Why does division need one more check than multiplication? When is the remainder a constant, and when can it be linear?

[Next: Partial Fractions](/alevel/a2-mathematics/partial-fractions/) · [Back to the topic index](/alevel/a2-mathematics/) · [All reference notes](/alevel/a2-mathematics/quick-reference/#algebraic-fractions)

**Learning path:** [Previous: Modulus Functions and Transformations](/alevel/a2-mathematics/modulus-and-transformations/) · [Next: Partial Fractions](/alevel/a2-mathematics/partial-fractions/).
