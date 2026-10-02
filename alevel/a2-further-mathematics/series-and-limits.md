---
title: Series and Limits
layout: subjects
mathjax: true
grade: a2
subject: a2-further-mathematics
permalink: /alevel/a2-further-mathematics/series-and-limits/
toc_headings: h2
study_page: true
---

[Further Pure Mathematics](/alevel/a2-further-mathematics/) · FP2.6 Series and limits

Use power series to expand functions and find limits. Decide when a series converges, and evaluate improper integrals by showing a limiting process.

- **Learning:** start with the [method](#method), then study each part in order.
- **Homework help:** choose [convergence](#convergence), [Maclaurin series](#maclaurin-series), [related functions](#related-functions), [limits](#limits) or [improper integrals](#improper-integrals).
- **Revision:** try [practice](#practice) before opening the solutions, then use the [quick reference](#quick-reference).

Textbook: Chapter 19, Sections 19.1–19.4, printed pp. 220–230; review and practice examination questions on pp. 231–232, in *International A Level Further Mathematics*.

**Before you start:** review [Finite Series](/alevel/a2-further-mathematics/finite-series/), [Binomial Series](/alevel/a2-mathematics/binomial-series/) and [Integration](/alevel/a2-mathematics/integration/). You should know factorials, geometric series, differentiation and integration by parts. Use radians in trigonometric series.

## Method

**Learning goal:** find and use a Maclaurin expansion, state its range of validity, find a limit after cancellation and show whether an improper integral has a finite value.

Choose your first step:

- **An infinite sum:** examine its partial sums. For convergence, the terms must tend to zero, but this condition alone is not enough.
- **An expansion:** use a standard series or calculate derivatives at $x=0$. Substitute the whole expression that replaces $x$.
- **A product or a function inside another function:** work out which terms can contribute to the requested power.
- **A limit giving $\frac00$ on substitution:** expand far enough to find the first terms that do not cancel, then divide by a common power of $x$.
- **An improper integral:** replace the problematic bound by a finite bound, integrate, then take a limit.

**Keep the notation clear:** $=\cdots+\cdots$ denotes a full series with further terms. Use $\approx$ when using a finite number of terms to estimate a value. A valid infinite expansion does not mean that a short approximation is accurate far from $x=0$.

## Convergence

For an infinite series $\sum_{r=1}^{\infty}u_r$, define the **partial sum**

$$S_n=\sum_{r=1}^{n}u_r.$$

The series **converges** if $S_n$ tends to a finite limit as $n\to\infty$. That limit is the sum of the series. If no finite limit exists, the series **diverges**.

A divergent series need not tend to $+\infty$: its partial sums may also tend to $-\infty$ or keep changing without approaching one value.

For a geometric series,

$$\sum_{r=0}^{n-1}aq^r=\frac{a(1-q^n)}{1-q},\qquad q\ne1.$$

When $\lvert q\rvert<1$, $q^n\to0$ and

$$\boxed{\sum_{r=0}^{\infty}aq^r=\frac{a}{1-q}.}$$

For example, $1+\frac12+\frac14+\cdots=2$. When $q=1$ and $a\ne0$, the partial sum is $na$ and there is no finite sum.

**Common mistake:** saying that a series converges because $u_n\to0$. This is a necessary condition, but it does not prove convergence.

### Example 1 — Terms tend to zero, but the sum diverges

**Question:** show that the harmonic series $\sum_{r=1}^{\infty}\frac1r$ diverges.

Group the terms after the first term in blocks of $1,2,4,8,\ldots$ terms:

$$\begin{aligned}
1+\frac12
&+\left(\frac13+\frac14\right)\\
&+\left(\frac15+\frac16+\frac17+\frac18\right)+\cdots.
\end{aligned}$$

For any integer $j\ge1$, the block from $r=2^{j-1}+1$ to $r=2^j$ has $2^{j-1}$ terms. Every term is at least $\frac1{2^j}$, so the block contributes at least

$$2^{j-1}\cdot\frac1{2^j}=\frac12.$$

Thus

$$S_{2^m}\ge1+\frac{m}{2}.$$

This grows without bound as $m\to\infty$. The partial sums cannot tend to a finite number, so the series diverges, even though $\frac1r\to0$.

**Check:** each extra block adds at least $\frac12$; smaller individual terms do not guarantee a finite total.

<details markdown="1">
<summary>A useful check: the ratio test</summary>

This helps with the convergence exercises in the textbook. For non-zero terms, find

$$L=\lim_{n\to\infty}\left\lvert\frac{u_{n+1}}{u_n}\right\rvert,$$

if this limit exists.

- If $L<1$, the series converges absolutely: the sum of $\lvert u_n\rvert$ is finite.
- If $L>1$, the series diverges.
- If $L=1$, this test gives no answer. Use another argument.

For $u_n=\frac{3^n}{n!}$, the ratio is $\frac3{n+1}\to0$, so the series converges. For the harmonic series the ratio tends to $1$, so the test does not settle the question; use the block argument above.

</details>

## Maclaurin Series

A **power series** is a series in ascending non-negative integer powers of $x$. A **Maclaurin series** is a power series about $x=0$.

For functions that can be represented this way, Maclaurin's theorem gives

$$\begin{aligned}
f(x)={}&f(0)+xf'(0)+\frac{x^2}{2!}f^{(2)}(0)\\
&+\frac{x^3}{3!}f^{(3)}(0)+\cdots.
\end{aligned}$$

Here $f^{(r)}(0)$ is the $r$th derivative evaluated at zero, so the coefficient of $x^r$ is $\frac{f^{(r)}(0)}{r!}$. The derivative values must exist and be finite. Use the expansion only in its range of validity.

**Common mistake:** using $f^{(r)}(0)$ as the coefficient without dividing by $r!$.

### Example 2 — Find coefficients from derivatives

**Question:** use Maclaurin's theorem to expand $f(x)=e^{2x}$ up to and including the term in $x^3$.

The derivative values are

$$\begin{aligned}
f(0)&=1,& f'(0)&=2,\\
f^{(2)}(0)&=4,& f^{(3)}(0)&=8.
\end{aligned}$$

Substitute them into the formula:

$$\begin{aligned}
e^{2x}
&=1+2x+\frac4{2!}x^2+\frac8{3!}x^3+\cdots\\
&=\boxed{1+2x+2x^2+\frac43x^3+\cdots}.
\end{aligned}$$

The full expansion is valid for every real $x$. A short approximation is most useful when $x$ is close to zero.

**Check:** replacing $x$ by $2x$ in the standard expansion of $e^x$ gives the same coefficients.

### Standard expansions and ranges

Use these formulae directly unless a question asks you to derive them.

**Exponential (valid for all real $x$):**

$$e^x=1+x+\frac{x^2}{2!}+\frac{x^3}{3!}+\cdots.$$

**Sine (valid for all real $x$):**

$$\sin x=x-\frac{x^3}{3!}+\frac{x^5}{5!}-\cdots.$$

**Cosine (valid for all real $x$):**

$$\cos x=1-\frac{x^2}{2!}+\frac{x^4}{4!}-\cdots.$$

**Logarithm:**

$$\ln(1+x)=x-\frac{x^2}{2}+\frac{x^3}{3}-\frac{x^4}{4}+\cdots,$$

valid for $\boxed{-1<x\le1}$. Replacing $x$ by $-x$ gives

$$\ln(1-x)=-x-\frac{x^2}{2}-\frac{x^3}{3}-\frac{x^4}{4}-\cdots,$$

valid for $\boxed{-1\le x<1}$. Notice which endpoint is included.

**Binomial, for rational powers $p$:**

$$\begin{aligned}
(1+x)^p={}&1+px+\frac{p(p-1)}{2!}x^2\\
&+\frac{p(p-1)(p-2)}{3!}x^3+\cdots.
\end{aligned}$$

For negative or non-integer rational $p$, use $\lvert x\rvert<1$ as the standard range. If $p$ is a positive integer, the expansion is a finite polynomial, valid for all real $x$. For $p=0$, it is $1$ where the original expression is defined.

**Range of validity is not the same as domain.** For example, $\ln(1+x)$ is defined for every $x>-1$, but this Maclaurin series is valid only for $-1<x\le1$.

## Related Functions

### Example 3 — Two logarithms and a shared range

**Question:** expand

$$\ln\left(\frac{1+2x}{1-2x}\right)$$

up to and including the term in $x^3$, and state the range of validity.

Near zero, both $1+2x$ and $1-2x$ are positive, so write the function as $\ln(1+2x)-\ln(1-2x)$.

$$\begin{aligned}
\ln(1+2x)&=2x-2x^2+\frac83x^3+\cdots,\\
\ln(1-2x)&=-2x-2x^2-\frac83x^3-\cdots.
\end{aligned}$$

Subtracting gives

$$\boxed{\ln\left(\frac{1+2x}{1-2x}\right)
=4x+\frac{16}{3}x^3+\cdots.}$$

The first series requires $-\frac12<x\le\frac12$. The second requires $-\frac12\le x<\frac12$. Both must be valid, so

$$\boxed{-\frac12<x<\frac12.}$$

**Check:** the even powers cancel. At $x=\frac12$ the denominator is zero; at $x=-\frac12$ the logarithm's argument is zero. Neither endpoint is allowed.

### Example 4 — Multiply two series

**Question:** expand $e^{2x}\sin x$ up to and including the term in $x^4$.

Since $\sin x$ starts with $x$, only terms up to $x^3$ in $e^{2x}$ can contribute through $x^4$:

$$\begin{aligned}
e^{2x}&=1+2x+2x^2+\frac43x^3+\cdots,\\
\sin x&=x-\frac16x^3+\cdots.
\end{aligned}$$

Collect terms by total power:

$$\begin{aligned}
e^{2x}\sin x={}&x+2x^2\\
&+\left(2-\frac16\right)x^3\\
&+\left(\frac43-\frac13\right)x^4+\cdots\\
={}&\boxed{x+2x^2+\frac{11}{6}x^3+x^4+\cdots}.
\end{aligned}$$

The full series is valid for every real $x$.

**Check:** the coefficient of $x^4$ includes the product $(2x)(-\frac16x^3)$. Do not miss cross terms just because one factor has no $x^4$ term.

### Example 5 — A function inside an exponential

**Question:** expand $e^{\sin x}$ up to and including the term in $x^4$.

Put $u=\sin x=x-\frac16x^3+\cdots$. Then

$$e^u=1+u+\frac{u^2}{2}+\frac{u^3}{6}+\frac{u^4}{24}+\cdots.$$

For terms through $x^4$,

$$\begin{aligned}
u&=x-\frac16x^3+\cdots,\\
u^2&=x^2-\frac13x^4+\cdots,\\
u^3&=x^3+\cdots,\qquad u^4=x^4+\cdots.
\end{aligned}$$

So

$$\begin{aligned}
e^{\sin x}={}&1+x+\frac12x^2\\
&+\left(-\frac16+\frac16\right)x^3\\
&+\left(-\frac16+\frac1{24}\right)x^4+\cdots\\
={}&\boxed{1+x+\frac12x^2-\frac18x^4+\cdots}.
\end{aligned}$$

The $x^3$ coefficient is zero. The full expansion is valid for every real $x$.

**Common mistake:** keeping only the $x$ term of $\sin x$. Its $x^3$ term affects both the $x^3$ and $x^4$ coefficients in the answer.

## Limits

The value of a function at a point and its limit at that point are different questions. A function may be undefined at $x=0$ but still have a limit as $x\to0$.

The form $\frac00$ does not determine the limit. Expand the numerator and denominator far enough to get their first non-zero terms after cancellation. Cancel a power of $x$ for $x\ne0$, then let $x$ tend to zero.

### Example 6 — Cancellation in an exponential

**Question:** find

$$\lim_{x\to0}\frac{e^{2x}-1-2x}{x^2}.$$

Since $e^{2x}=1+2x+2x^2+\frac43x^3+\cdots$,

$$\begin{aligned}
\frac{e^{2x}-1-2x}{x^2}
&=\frac{2x^2+\frac43x^3+\cdots}{x^2}\\
&=2+\frac43x+\cdots.
\end{aligned}$$

As $x\to0$, the remaining positive powers of $x$ tend to zero, so the limit is $\boxed{2}$.

**Common mistake:** stopping the expansion after $1+2x$. Those terms cancel, so they cannot give the limit.

### Example 7 — Expand numerator and denominator

**Question:** find

$$\lim_{x\to0}\frac{x-\sin x}{x^2(e^{2x}-1)}.$$

The first non-zero term in the numerator is $\frac16x^3$. The denominator also starts with $x^3$:

$$\begin{aligned}
x-\sin x&=\frac16x^3-\frac1{120}x^5+\cdots,\\
x^2(e^{2x}-1)&=2x^3+2x^4+\cdots.
\end{aligned}$$

For $x\ne0$, divide both by $x^3$:

$$\frac{x-\sin x}{x^2(e^{2x}-1)}
=\frac{\frac16-\frac1{120}x^2+\cdots}{2+2x+\cdots}.$$

Therefore the limit is

$$\boxed{\frac{1/6}{2}=\frac1{12}.}$$

**Check:** both numerator and denominator start with the same power, $x^3$. Dividing by $x^2$ would leave a zero in both places and would not finish the calculation.

### Two standard limits

For any real $k>0$,

$$\begin{aligned}
&\boxed{\lim_{x\to\infty}x^ke^{-x}=0},\\
&\boxed{\lim_{x\to0^+}x^k\ln x=0}.
\end{aligned}$$

As $x\to\infty$, exponential growth is faster than any fixed positive power of $x$. As $x\to0^+$, the factor $x^k$ makes $x^k\ln x$ tend to zero, even though $\ln x\to-\infty$.

Replacing $x$ by $ax$, with $a>0$, also gives $\lim_{x\to\infty}x^ke^{-ax}=0$.

**Check the direction:** $\ln x$ is defined only for $x>0$, so the second limit is from the right.

## Improper Integrals

An integral is **improper** if a bound is infinite, or the integrand is undefined or unbounded at an endpoint or inside the interval.

To evaluate one, first use ordinary finite bounds, then take a limit:

$$\int_a^\infty f(x)\,\mathrm dx
=\lim_{R\to\infty}\int_a^R f(x)\,\mathrm dx,$$

and, for a problem at the lower endpoint $a$,

$$\int_a^b f(x)\,\mathrm dx
=\lim_{\varepsilon\to0^+}\int_{a+\varepsilon}^b f(x)\,\mathrm dx.$$

The integral **converges** only if the limit is finite. If the limiting process has no finite result, the integral **diverges**.

If there is a problem inside the interval, split the integral there and check both sides separately. Both must converge. Equal and opposite divergences cannot be cancelled to give an ordinary improper integral.

### Example 8 — An infinite upper bound

**Question:** evaluate $\int_1^\infty\frac1{x^2}\,\mathrm dx$, showing the limiting process.

For $R>1$,

$$\begin{aligned}
\int_1^R x^{-2}\,\mathrm dx
&=\left[-\frac1x\right]_1^R\\
&=1-\frac1R.
\end{aligned}$$

Therefore

$$\int_1^\infty\frac1{x^2}\,\mathrm dx
=\lim_{R\to\infty}\left(1-\frac1R\right)
=\boxed{1}.$$

**Compare:** $\int_1^R\frac1x\,\mathrm dx=\ln R\to+\infty$, so $\int_1^\infty\frac1x\,\mathrm dx$ diverges. In both cases the integrand tends to zero; that alone does not decide convergence.

### Example 9 — A logarithm at zero

**Question:** evaluate $\int_0^1 x\ln x\,\mathrm dx$, showing the limiting process.

The expression $\ln x$ is undefined at $x=0$. Replace the lower bound by $\varepsilon>0$.

Integration by parts gives

$$\int x\ln x\,\mathrm dx
=\frac{x^2}{2}\ln x-\frac{x^2}{4}+C.$$

Hence

$$\begin{aligned}
\int_\varepsilon^1 x\ln x\,\mathrm dx
&=\left[\frac{x^2}{2}\ln x-\frac{x^2}{4}\right]_\varepsilon^1\\
&=-\frac14-\frac{\varepsilon^2}{2}\ln\varepsilon
+\frac{\varepsilon^2}{4}.
\end{aligned}$$

As $\varepsilon\to0^+$, both $\varepsilon^2\ln\varepsilon$ and $\varepsilon^2$ tend to zero. Thus the integral converges and

$$\boxed{\int_0^1 x\ln x\,\mathrm dx=-\frac14.}$$

**Check:** $x\ln x<0$ for $0<x<1$, so the integral must be negative. Do not write $\ln0$ in the evaluation.

### Example 10 — Integration by parts at infinity

**Question:** evaluate $\int_0^\infty xe^{-2x}\,\mathrm dx$, showing the limiting process.

Integration by parts, with $u=x$ and $\mathrm dv=e^{-2x}\mathrm dx$, gives

$$\int xe^{-2x}\,\mathrm dx
=-\left(\frac{x}{2}+\frac14\right)e^{-2x}+C.$$

For a finite $R>0$,

$$\begin{aligned}
\int_0^R xe^{-2x}\,\mathrm dx
&=\frac14-\left(\frac{R}{2}+\frac14\right)e^{-2R}.
\end{aligned}$$

Both $Re^{-2R}$ and $e^{-2R}$ tend to zero as $R\to\infty$. Therefore

$$\boxed{\int_0^\infty xe^{-2x}\,\mathrm dx=\frac14.}$$

**Common mistake:** treating $\infty$ as a number to substitute into the antiderivative. Use the finite bound $R$ and show its limit.

## Practice

State the range for expansions. For limits, show the first terms that do not cancel. For improper integrals, show the limiting process.

Questions 1–6 are self-written exercises. Questions 7–8 are original AQA questions reproduced in the supplied textbook.

### Question 1 — A range of convergence

For which real values of $x$ does

$$\sum_{n=1}^{\infty}n^2\left(\frac{x}{2}\right)^n$$

converge?

<details markdown="1">
<summary>Hint</summary>

For $x\ne0$, find $\left\lvert\frac{u_{n+1}}{u_n}\right\rvert$ and its limit. Check $x=0$ and the two endpoints separately.

</details>

<details markdown="1">
<summary>Solution and check</summary>

For $x\ne0$,

$$\left\lvert\frac{u_{n+1}}{u_n}\right\rvert
=\left(\frac{n+1}{n}\right)^2\frac{\lvert x\rvert}{2}
\longrightarrow\frac{\lvert x\rvert}{2}.$$

The ratio test gives convergence for $\lvert x\rvert<2$ and divergence for $\lvert x\rvert>2$. At $x=0$, all terms are zero, so the series converges.

At $x=2$, the terms are $n^2$. At $x=-2$, they are $(-1)^nn^2$. Neither tends to zero, so both endpoint series diverge.

$$\boxed{-2<x<2.}$$

**Check:** a ratio limit of $1$ does not settle either endpoint; the term check does.

</details>

### Question 2 — A negative substitution

Expand $\ln(1-3x)$ up to and including the term in $x^3$. State the range of validity, including any allowed endpoint.

<details markdown="1">
<summary>Hint</summary>

Substitute $-3x$ into $\ln(1+u)$. Solve $-1<-3x\le1$ carefully.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\begin{aligned}
&\ln(1-3x)\\
&\quad=(-3x)-\frac{(-3x)^2}{2}+\frac{(-3x)^3}{3}+\cdots\\
&\quad=\boxed{-3x-\frac92x^2-9x^3-\cdots}.
\end{aligned}$$

From $-1<-3x\le1$,

$$\boxed{-\frac13\le x<\frac13.}$$

**Check:** at $x=-\frac13$, the logarithm is $\ln2$ and its series converges. At $x=\frac13$, the argument is zero and the function is undefined.

</details>

### Question 3 — Factor out the constant

Expand $(4-x)^{-1/2}$ up to and including the term in $x^3$. State the standard range of validity.

<details markdown="1">
<summary>Hint</summary>

Write $(4-x)^{-1/2}=\frac12(1-\frac{x}{4})^{-1/2}$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Use $p=-\frac12$ and $u=-\frac{x}{4}$ in the binomial series:

$$\begin{aligned}
&\left(1-\frac{x}{4}\right)^{-1/2}\\
&\quad=1+\frac{x}{8}+\frac{3x^2}{128}+\frac{5x^3}{1024}+\cdots.
\end{aligned}$$

Multiplying every term by $\frac12$ gives

$$\boxed{\begin{aligned}
&(4-x)^{-1/2}\\
&\quad=\frac12+\frac{x}{16}+\frac{3x^2}{256}+\frac{5x^3}{2048}+\cdots.
\end{aligned}}$$

The standard range is $\left\lvert\frac{x}{4}\right\rvert<1$, so $\boxed{-4<x<4}$.

**Check:** at $x=0$, the original expression is $\frac12$, so the constant term must also be $\frac12$.

</details>

### Question 4 — The inner function has a constant term

Expand $e^{\cos x}$ up to and including the term in $x^4$.

<details markdown="1">
<summary>Hint</summary>

Write $e^{\cos x}=e\,e^{\cos x-1}$. The new exponent starts with $x^2$, so its square can contribute to $x^4$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Put $v=\cos x-1=-\frac12x^2+\frac1{24}x^4+\cdots$. Then

$$e^{\cos x}=e\left(1+v+\frac{v^2}{2}+\cdots\right).$$

Since $v^2=\frac14x^4+\cdots$,

$$\begin{aligned}
&e^{\cos x}\\
&\quad=e\left[1-\frac12x^2+\left(\frac1{24}+\frac18\right)x^4+\cdots\right]\\
&\quad=\boxed{e\left(1-\frac12x^2+\frac16x^4+\cdots\right)}.
\end{aligned}$$

The full expansion is valid for every real $x$.

**Check:** at zero the value is $e$, not $1$. Since $\cos(-x)=\cos x$, only even powers occur.

</details>

### Question 5 — Two limits

Find

$$\text{a}\quad
\lim_{x\to0}\frac{e^x\cos2x-1-x}{x^2},$$

and

$$\text{b}\quad
\lim_{x\to0}\frac{\sqrt{4+x}-2}{x}.$$

<details markdown="1">
<summary>Hint</summary>

For a, keep terms through $x^2$ in the product. For b, write $\sqrt{4+x}=2(1+\frac{x}{4})^{1/2}$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

**a** Use $e^x=1+x+\frac12x^2+\cdots$ and $\cos2x=1-2x^2+\cdots$. Their product is

$$e^x\cos2x=1+x-\frac32x^2+\cdots.$$

The constant and linear terms cancel. Dividing by $x^2$ and letting $x\to0$ gives $\boxed{-\frac32}$.

**b** The binomial expansion gives

$$\sqrt{4+x}=2+\frac{x}{4}-\frac{x^2}{64}+\cdots.$$

Subtract $2$, divide by $x$ and let $x\to0$. The limit is $\boxed{\frac14}$.

**Check:** rationalising part b gives $\frac1{\sqrt{4+x}+2}$ for $x\ne0$, which has the same limit.

</details>

### Question 6 — Convergent or divergent integrals

Show whether each integral converges. Give its value if it does.

$$\text{a}\quad\int_0^1\frac1x\,\mathrm dx,$$

and

$$\text{b}\quad\int_0^\infty xe^{-3x}\,\mathrm dx.$$

<details markdown="1">
<summary>Hint</summary>

For a, replace zero by $\varepsilon>0$. For b, use integration by parts with a finite upper bound $R$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

**a**

$$\int_\varepsilon^1\frac1x\,\mathrm dx=-\ln\varepsilon.$$

As $\varepsilon\to0^+$, this tends to $+\infty$, so the integral diverges.

**b**

$$\int xe^{-3x}\,\mathrm dx
=-\left(\frac{x}{3}+\frac19\right)e^{-3x}+C.$$

Thus

$$\int_0^R xe^{-3x}\,\mathrm dx
=\frac19-\left(\frac{R}{3}+\frac19\right)e^{-3R}.$$

Since $Re^{-3R}\to0$ and $e^{-3R}\to0$, the improper integral converges to $\boxed{\frac19}$.

**Check:** the second integrand is non-negative, and the integral's value is positive.

</details>

### Question 7 — Original AQA series practice

**Source:** AQA MFP3, January 2013, as reproduced in Chapter 19, practice examination question 2, printed p. 231. Original wording and marks are retained.

**a** Write down the expansion of $e^{3x}$ in ascending powers of $x$ up to and including the term in $x^2$. **(1 mark)**

**b** Hence, or otherwise, find the term in $x^2$ in the expansion, in ascending powers of $x$, of

$$e^{3x}(1+2x)^{-3/2}.$$

**(4 marks)**

<details markdown="1">
<summary>Hint</summary>

Use the binomial series for the second factor. The $x^2$ term in the product has three contributions.

</details>

<details markdown="1">
<summary>Worked solution and check</summary>

**a**

$$e^{3x}=1+3x+\frac92x^2+\cdots.$$

**b** The binomial series gives

$$(1+2x)^{-3/2}=1-3x+\frac{15}{2}x^2+\cdots.$$

The coefficient of $x^2$ in the product is

$$\frac92+(3)(-3)+\frac{15}{2}=3.$$

The required **term** is $\boxed{3x^2}$.

**Check:** the linear terms cancel, so the product begins $1+3x^2+\cdots$. The binomial series has the standard range $-\frac12<x<\frac12$, which is also the standard range used for the product.

This is our worked solution, not an official mark scheme.

</details>

### Question 8 — Original AQA integral practice

**Source:** AQA MFP3, January 2011, as reproduced in Chapter 19, practice examination question 5, printed p. 232. Original wording and marks are retained.

**a** Find $\int x^2\ln x\,\mathrm dx$. **(3 marks)**

**b** Explain why $\int_0^e x^2\ln x\,\mathrm dx$ is an improper integral. **(1 mark)**

**c** Evaluate $\int_0^e x^2\ln x\,\mathrm dx$, showing the limiting process used. **(3 marks)**

<details markdown="1">
<summary>Hint</summary>

Use integration by parts. Replace the lower bound by $\varepsilon>0$, and use $\varepsilon^3\ln\varepsilon\to0$.

</details>

<details markdown="1">
<summary>Worked solution and check</summary>

**a** Take $u=\ln x$ and $\mathrm dv=x^2\mathrm dx$:

$$\begin{aligned}
\int x^2\ln x\,\mathrm dx
&=\frac{x^3}{3}\ln x-\frac13\int x^2\,\mathrm dx\\
&=\boxed{\frac{x^3}{3}\ln x-\frac{x^3}{9}+C}.
\end{aligned}$$

**b** The integrand contains $\ln x$, which is undefined at the lower bound $x=0$.

**c** For $\varepsilon>0$,

$$\begin{aligned}
\int_\varepsilon^e x^2\ln x\,\mathrm dx
&=\left[\frac{x^3}{3}\ln x-\frac{x^3}{9}\right]_\varepsilon^e\\
&=\frac{2e^3}{9}
-\frac{\varepsilon^3}{3}\ln\varepsilon+\frac{\varepsilon^3}{9}.
\end{aligned}$$

Both terms involving $\varepsilon$ tend to zero as $\varepsilon\to0^+$. Hence

$$\boxed{\int_0^e x^2\ln x\,\mathrm dx=\frac{2e^3}{9}.}$$

**Check:** differentiating the answer in part a gives $x^2\ln x$; the extra $\frac13x^2$ terms cancel.

This is our worked solution, not an official mark scheme.

</details>

## Quick Reference

| Task | Method | Check |
|---|---|---|
| Infinite series | Find the limit of partial sums, or use a suitable convergence test | $u_n\to0$ is necessary but not sufficient |
| Maclaurin coefficient of $x^r$ | $\displaystyle \frac{f^{(r)}(0)}{r!}$ | Include the factorial |
| Standard logarithm | $\ln(1+x)$: $-1<x\le1$ | Reverse the inequalities correctly for a negative substitution |
| Binomial series | Substitute into $(1+u)^p$; use $\lvert u\rvert<1$ for the standard non-terminating range | Take out any constant factor first |
| Products and compositions | Keep every term that can contribute to the requested power | Include cross terms and zero coefficients |
| Limit at zero | Expand, cancel, divide by the lowest common power | Work with $x\ne0$ before taking the limit |
| Infinite bound | Use a finite bound $R$, then let $R\to\infty$ | Show that the remaining boundary terms tend to zero |
| Logarithm at zero | Use $\varepsilon>0$, then let $\varepsilon\to0^+$ | For $k>0$, $\varepsilon^k\ln\varepsilon\to0$ |

**After practice:** if you inferred convergence from small terms, repeat Question 1. If an endpoint was wrong, repeat Question 2. If you lost a constant factor, repeat Question 3. If you missed a term in a composition, repeat Question 4. If everything cancelled in a limit, review Examples 6–7. If you substituted zero or infinity directly into an antiderivative, repeat Questions 6 and 8.

**You should be able to:** use all five standard expansions, state the range for a related function, find a limit after cancellation and evaluate or reject an improper integral using a limiting process.

The lesson follows FP2.6 of the [OxfordAQA Further Mathematics 9665 specification](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf). Worked examples are teaching material. Questions 7–8 retain the AQA questions and marks from the supplied textbook.

**Learning path:** [Previous: Finite Series](/alevel/a2-further-mathematics/finite-series/) · [Next: De Moivre's Theorem](/alevel/a2-further-mathematics/de-moivres-theorem/) · [Back to the course](/alevel/a2-further-mathematics/).
