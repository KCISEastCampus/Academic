---
title: Binomial Series
layout: subjects
mathjax: true
grade: a2
subject: a2-mathematics
permalink: /alevel/a2-mathematics/binomial-series/
toc_headings: h2
study_page: true
---

[Pure Mathematics](/alevel/a2-mathematics/) · P2.2 Binomial Series

Expand in ascending powers of $x$, state the range of validity and use the series to find approximations.

- **Learning:** start with [the binomial series](#the-binomial-series), then study [partial fractions and products](#partial-fractions-and-products) and [approximations](#approximations).
- **Homework help:** identify the power $n$ and the whole expression that replaces $x$ in the formula. Check the constant factor and signs.
- **Revision:** try [practice](#practice) with solutions closed, then use the [quick reference](#quick-reference).

Textbook: Chapter 2, Sections 2.1–2.2 (printed pp. 24–30). The main topics are the binomial series for any value of $n$, series expansions of rational functions and approximations.

**Before you start:** you should know the binomial expansion for positive integer powers, factorials, geometric series and [partial fractions](/alevel/a2-mathematics/partial-fractions/).

All worked examples and practice questions are self-written, not official past-paper questions. The suggested practice time is a guide; no official marks are assigned.

## The Binomial Series

For $\lvert u\rvert<1$,

$$\begin{aligned}
(1+u)^n={}&1+nu+\frac{n(n-1)}{2!}u^2\\
&+\frac{n(n-1)(n-2)}{3!}u^3+\cdots.
\end{aligned}$$

Here $2!=2$ and $3!=6$. Each new coefficient has one more factor in the numerator and one more factor in the factorial.

For a positive integer $n$, the expansion terminates and is valid for all real $u$. For $n=0$, it is simply $1$ where the original expression is defined. For a negative integer or a non-integer power, use the infinite series and state $\lvert u\rvert<1$. We do not include the endpoints in this lesson's stated range; behaviour there depends on $n$.

**Method:**

1. Write the expression as a constant times $(1+u)^n$.
2. Identify $n$ and $u$. Substitute the whole of $u$, including its sign.
3. Calculate each coefficient and write terms in ascending powers of $x$.
4. Multiply by the outside constant. State the range from $\lvert u\rvert<1$.

“Up to and including the term in $x^3$” means keep the constant, $x$, $x^2$ and $x^3$ terms. A finite list of terms is an **approximation**; an equality to the full series needs the remaining terms, shown by $+\cdots$.

### Example 1 — A fractional power

**Question:** Expand $(1+4x)^{\frac12}$ up to and including the term in $x^3$. State the range of validity.

Use $n=\frac12$ and $u=4x$:

$$\begin{aligned}
(1+4x)^{\frac12}={}&1+\frac12(4x)\\
&+\frac{\frac12(-\frac12)}{2}(4x)^2\\
&+\frac{\frac12(-\frac12)(-\frac32)}{6}(4x)^3+\cdots\\
={}&\boxed{1+2x-2x^2+4x^3+\cdots}.
\end{aligned}$$

The range is $\lvert4x\rvert<1$, so $\boxed{-\frac14<x<\frac14}$.

**Check:** at $x=0$, both the original expression and the series give $1$. The $x^2$ coefficient is negative, but the $x^3$ coefficient is positive: count the negative factors.

### Example 2 — Take out the constant first

**Question:** Expand $(9-3x)^{-\frac12}$ up to and including the term in $x^3$. State the range of validity.

First write

$$(9-3x)^{-\frac12}=\frac13\left(1-\frac{x}{3}\right)^{-\frac12}.$$

Using $n=-\frac12$ and $u=-\frac{x}{3}$ gives

$$\left(1-\frac{x}{3}\right)^{-\frac12}=1+\frac{x}{6}+\frac{x^2}{24}+\frac{5x^3}{432}+\cdots.$$

Multiply **every** term by $\frac13$:

$$(9-3x)^{-\frac12}=\boxed{\frac13+\frac{x}{18}+\frac{x^2}{72}+\frac{5x^3}{1296}+\cdots}.$$

Since $\left\lvert\frac{x}{3}\right\rvert<1$, the range is $\boxed{-3<x<3}$.

**Common mistake:** taking out $9$ instead of $9^{-\frac12}$. Check the constant term against the original expression at $x=0$.

### Example 3 — A negative integer power

**Question:** Expand $\frac{1}{(1-2x)^2}$ up to and including the term in $x^3$.

Write it as $(1-2x)^{-2}$. With $n=-2$ and $u=-2x$,

$$\begin{aligned}
(1-2x)^{-2}={}&1+(-2)(-2x)\\
&+\frac{(-2)(-3)}{2}(-2x)^2\\
&+\frac{(-2)(-3)(-4)}{6}(-2x)^3+\cdots\\
={}&\boxed{1+4x+12x^2+32x^3+\cdots}.
\end{aligned}$$

It is valid for $\boxed{-\frac12<x<\frac12}$.

**Check:** the coefficients do not stop. A negative integer power does not give a finite polynomial.

## Partial Fractions and Products

Useful geometric series are

$$\frac1{1-u}=1+u+u^2+u^3+\cdots,$$

$$\frac1{1+u}=1-u+u^2-u^3+\cdots,$$

both for $\lvert u\rvert<1$.

For a rational function, use partial fractions and expand each part. The final range must satisfy **all** the ranges used.

For a product, multiply the expansions and collect powers. To find the coefficient of $x^3$, include every product whose powers add to $3$. A missing $x$ term does not mean there is no $x^2$ term.

### Example 4 — Expand a rational function

**Question:** Use partial fractions to expand $\frac{3}{(1-x)(1+2x)}$ up to and including the term in $x^3$.

Write

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

### Example 5 — Multiply and collect powers

**Question:** Expand $(1+x)\sqrt{1-2x}$ up to and including the term in $x^3$.

First,

$$\sqrt{1-2x}=1-x-\frac12x^2-\frac12x^3+\cdots.$$

Now multiply by $1+x$:

$$\begin{aligned}
(1+x)\sqrt{1-2x}
&=1+(-1+1)x+\left(-\frac12-1\right)x^2\\
&\quad+\left(-\frac12-\frac12\right)x^3+\cdots\\
&=\boxed{1-\frac32x^2-x^3+\cdots}.
\end{aligned}$$

The range remains $\boxed{-\frac12<x<\frac12}$. The finite factor $1+x$ adds no extra restriction.

**Check:** the $x$ terms cancel. To find $x^3$, include both $1\times(-\frac12x^3)$ and $x\times(-\frac12x^2)$.

## Approximations

A **linear approximation** keeps the constant and $x$ terms. A **quadratic approximation** also keeps the $x^2$ term. Use $\approx$ when higher powers have been neglected.

Choose a form with $u$ close to zero. The series condition $\lvert u\rvert<1$ allows the infinite expansion; it does **not** promise that a few terms give the required accuracy.

For example, Example 1 at $x=0.24$ is within its range, but its cubic approximation gives $1.420096$, while $\sqrt{1.96}=1.4$. Do not use “within the range” alone to claim accuracy to several decimal places.

### Example 6 — Approximate a square root

**Question:** Use a binomial expansion to estimate $\sqrt{4.08}$ to five decimal places. Check the estimate with a calculator.

Write $\sqrt{4.08}=2\sqrt{1+0.02}$, so $u=0.02$. Using

$$(1+u)^{\frac12}\approx1+\frac{u}{2}-\frac{u^2}{8}+\frac{u^3}{16},$$

we obtain

$$\sqrt{4.08}\approx2(1+0.01-0.00005+0.0000005)=2.019901.$$

The estimate is $\boxed{2.01990}$ to five decimal places.

**Check:** the calculator gives $2.019900987\ldots$, which rounds to the same answer. The first omitted term in the estimate is $2\left(-\frac5{128}\right)(0.02)^4=-0.0000000125$. It helps explain the small error here; in general, the first omitted term alone is not a bound for the whole remaining series.

**Common mistake:** expanding $(1+3.08)^{\frac12}$ directly. That would use $u=3.08$, outside $\lvert u\rvert<1$.

## Practice

Allow about **25–35 minutes**. State the range of validity for each expansion. Keep solutions closed until you have tried the question.

### Question 1 — Reciprocal

Expand $\frac1{1-3x}$ up to and including the term in $x^3$.

<details markdown="1">
<summary>Hint</summary>

Use $n=-1$ and $u=-3x$, or the geometric series for $\frac1{1-u}$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\boxed{\frac1{1-3x}=1+3x+9x^2+27x^3+\cdots},\qquad \boxed{-\frac13<x<\frac13}.$$

Multiplying the displayed polynomial by $1-3x$ gives $1-81x^4$. The unwanted terms through $x^3$ cancel.

</details>

### Question 2 — Outside factor

Expand $\sqrt{4+x}$ up to and including the term in $x^3$.

<details markdown="1">
<summary>Hint</summary>

Write $\sqrt{4+x}=2\left(1+\frac{x}{4}\right)^{\frac12}$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\boxed{\sqrt{4+x}=2+\frac{x}{4}-\frac{x^2}{64}+\frac{x^3}{512}+\cdots}.$$

The range is $\boxed{-4<x<4}$. At $x=0$, the constant must be $2$. Squaring the polynomial gives $4+x$ with zero coefficients for $x^2$ and $x^3$; higher powers remain.

</details>

### Question 3 — Signs

Expand $(1+x)^{-2}$ up to and including the term in $x^3$. Explain why $1-2x+x^2$ is not the correct expansion.

<details markdown="1">
<summary>Hint</summary>

Use $n=-2$. Do not treat the expression as $(1-x)^2$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\boxed{(1+x)^{-2}=1-2x+3x^2-4x^3+\cdots},\qquad \boxed{-1<x<1}.$$

The coefficient of $x^2$ is $\frac{(-2)(-3)}2=3$, not $1$. This series does not terminate. Multiplying by $(1+x)^2$ cancels the terms through $x^3$.

</details>

### Question 4 — Two ranges

Express $\frac4{(1-2x)(1+x)}$ in partial fractions. Hence expand up to and including the term in $x^3$.

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

### Question 5 — A product

Expand $(1+2x)(1-x)^{-\frac12}$ up to and including the term in $x^3$.

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

### Question 6 — Choose a useful form

Use a binomial expansion to estimate $\sqrt{8.91}$ to five decimal places. Check with a calculator. Explain why using $(1+7.91)^{\frac12}$ is unsuitable.

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

## Quick Reference

| Task | Method | Check |
|---|---|---|
| Expand $(1+u)^n$ | Use the binomial series | Substitute the whole $u$, including its sign |
| Expand $(a+bx)^n$, $a>0$ | Write $a^n\left(1+\frac{b}{a}x\right)^n$ | Multiply every term by $a^n$ |
| State the range | Use $\lvert u\rvert<1$ for the infinite series here | Apply all ranges if you combine series |
| Expand a rational function | Use partial fractions first | Recombine the coefficients |
| Expand a product | Collect terms of the same power | Include every product needed for the requested power |
| Find an approximation | Choose small $\lvert u\rvert$ and neglect higher powers | Use $\approx$ and check the requested accuracy |

**If your answer looks wrong:** check the outside factor, signs, factorials, missing products and range. A function may be defined at a value where this expansion is not valid.

**You should be able to:** expand negative and fractional powers, combine series, state their range of validity and choose an effective form for an approximation.

**Learning path:** [Previous: Partial Fractions](/alevel/a2-mathematics/partial-fractions/) · [Next: Trigonometric Functions and Formulae](/alevel/a2-mathematics/trigonometric-functions-and-formulae/) · [Return to the Pure Mathematics topic index](/alevel/a2-mathematics/).
