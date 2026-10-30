---
title: Series and Limits
layout: subjects
mathjax: true
grade: a2
subject: a2-further-mathematics
permalink: /alevel/a2-further-mathematics/series-and-limits/
toc_headings: "#method, #convergence, #maclaurin-series, #related-functions, #limits, #improper-integrals, #practice, #diagnose-and-retry, #later-review, #quick-reference"
study_page: true
reading_layout: true
---

[Further Pure Mathematics](/alevel/a2-further-mathematics/) · FP2.6 Series and limits

Use power series to expand functions and find limits. Decide when a series converges, and evaluate improper integrals by showing a limiting process.

- **Learning:** start with the [method](#method), then study each part in order.
- **Homework help:** choose [convergence](#convergence), [Maclaurin series](#maclaurin-series), [related functions](#related-functions), [limits](#limits) or [improper integrals](#improper-integrals).
- **Revision:** try [practice](#practice) before opening the solutions, then use the [quick reference](#quick-reference).

**Before you start:** repair the particular step you need and return with one line of working:

- [Differencing in finite series](/alevel/a2-further-mathematics/finite-series/#differencing): obtain partial sums from a term; here we then test their limit.
- [Binomial series](/alevel/a2-mathematics/binomial-series/#the-binomial-series): substitute the whole inner expression and state the standard range.
- [Standard derivatives](/alevel/a2-mathematics/differentiation/#standard-derivatives) and [chain rule](/alevel/a2-mathematics/differentiation/#composite-functions): calculate the successive derivatives in Question 2 independently. The later product review also needs the [product rule](/alevel/a2-mathematics/differentiation/#products-and-quotients).
- [Power integrals](/alevel/a2-mathematics/integration/#power-integrals), [exponential and logarithmic integrals](/alevel/a2-mathematics/integration/#exponential-logarithmic-integrals), [integration by parts](/alevel/a2-mathematics/integration/#integration-by-parts) and [finite-bound evaluation](/alevel/a2-mathematics/integration/#definite-integrals): calculate a finite integral before treating its improper endpoint.

A factorial multiplies successive positive integers; $0!=1$ and $3!=3\cdot2\cdot1=6$. Use radians for trigonometric functions.

**Task status:** Unless an official question or teaching adaptation is explicitly identified, the worked examples and exercises are self-written teaching tasks with no official marks.

## Method {#method}

**Learning goal:** find and use a Maclaurin expansion, state its range of validity, find a limit after cancellation and show whether an improper integral has a finite value.

Adding more and more terms raises one question: do the running totals approach a finite number? Approximating a function near zero raises another: which polynomial matches its value and derivatives there? These are the starting points below; the [quick reference](#quick-reference) collects the methods for revision.

## Convergence {#convergence}

In $1+\frac12+\frac14+\cdots$, the running totals are $1$, $\frac32$, $\frac74$, and so on. These totals approach $2$ as we include more terms. Each total is a **partial sum**: it adds only a finite number of terms.

For an infinite series $\sum_{r=1}^{\infty}u_r$, write

$$S_n=\sum_{r=1}^{n}u_r.$$

The series **converges** if $S_n$ tends to a finite limit as $n\to\infty$. That limit is the sum of the series. If no finite limit exists, the series **diverges**.

A divergent series need not tend to $+\infty$: its partial sums may also tend to $-\infty$ or keep changing without approaching one value.

For a geometric series,

$$\sum_{r=0}^{n-1}aq^r=\frac{a(1-q^n)}{1-q},\qquad q\ne1.$$

When $\lvert q\rvert<1$, $q^n\to0$ and

$$\boxed{\sum_{r=0}^{\infty}aq^r=\frac{a}{1-q}.}$$

For example, $1+\frac12+\frac14+\cdots=2$. When $q=1$ and $a\ne0$, the partial sum is $na$ and there is no finite sum.

**Common mistake:** saying that a series converges because $u_n\to0$. This is a necessary condition, but it does not prove convergence.

<section class="worked-example" markdown="1">

### Example 1 — Terms tend to zero, but the sum diverges {#example-1--terms-tend-to-zero-but-the-sum-diverges}

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

</section>

### The ratio test {#ratio-test}

This helps with the convergence exercises in the textbook. For non-zero terms, find

$$L=\lim_{n\to\infty}\left\lvert\frac{u_{n+1}}{u_n}\right\rvert,$$

if this limit exists.

- If $L<1$, the series converges absolutely: the sum of $\lvert u_n\rvert$ is finite.
- If $L>1$, the series diverges.
- If $L=1$, this test gives no answer. Use another argument.

For example, let $u_n=\frac{3^n}{n!}$. Cancel the powers and the factorial factors:

$$\left\lvert\frac{u_{n+1}}{u_n}\right\rvert
=\frac{3^{n+1}}{(n+1)!}\frac{n!}{3^n}
=\frac3{n+1}\longrightarrow0<1.$$

The series therefore converges. For the harmonic series the ratio tends to $1$, so use the block argument above instead.


## Maclaurin Series {#maclaurin-series}

Start with a quadratic polynomial $P(x)=a+bx+cx^2$. We want it to have the same value, first derivative and second derivative as $f$ at zero. Differentiating shows what each coefficient controls:

$$\begin{aligned}
P(x)&=a+bx+cx^2,& P(0)&=a,\\
P^{\prime}(x)&=b+2cx,& P^{\prime}(0)&=b,\\
P^{(2)}(x)&=2c,& P^{(2)}(0)&=2c.
\end{aligned}$$

So matching the value, slope and rate of change of slope at zero requires

$$a=f(0),\qquad b=f^{\prime}(0),\qquad c=\frac{f^{(2)}(0)}{2}.$$

The division by $2$ comes from differentiating $cx^2$ twice to get $2c$. More generally, differentiating $x^r$ exactly $r$ times gives $r!$; lower powers have vanished, and higher powers still contain $x$ and vanish at zero. For a function represented by a power series near zero, this gives the coefficient $f^{(r)}(0)/r!$ for $x^r$.

A **power series** continues the polynomial pattern in ascending non-negative integer powers of $x$. The series formed for $f$ from its derivatives at $x=0$ is its **Maclaurin series**.

For functions that can be represented this way, Maclaurin's theorem gives

$$\begin{aligned}
f(x)={}&f(0)+xf^{\prime}(0)+\frac{x^2}{2!}f^{(2)}(0)\\
&+\frac{x^3}{3!}f^{(3)}(0)+\cdots.
\end{aligned}$$

Here $f^{(r)}(0)$ is the $r$th derivative evaluated at zero. These values must exist and be finite. Having derivatives of every order does not by itself guarantee that a function equals its Maclaurin series. Use the equality only where the series represents the function, within its range of validity.

**Keep the notation clear:** $=\cdots+\cdots$ denotes a full series with further terms. Use $\approx$ when using a finite number of terms to estimate a value. A valid infinite expansion does not mean that a short approximation is accurate far from $x=0$.

**Common mistake:** using $f^{(r)}(0)$ as the coefficient without dividing by $r!$.

<section class="worked-example" markdown="1">

### Example 2 — Find coefficients from derivatives {#example-2--find-coefficients-from-derivatives}

**Question:** use Maclaurin's theorem to expand $f(x)=e^{2x}$ up to and including the term in $x^3$.

First differentiate successively using the chain rule:

$$f(x)=e^{2x},\quad f^{\prime}(x)=2e^{2x},\quad
f^{(2)}(x)=4e^{2x},\quad f^{(3)}(x)=8e^{2x}.$$

Now evaluate at zero:

$$\begin{aligned}
f(0)&=1,& f^{\prime}(0)&=2,\\
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

</section>

### Standard expansions and ranges {#standard-expansions-and-ranges}

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

## Substitution, Products and Composite Expansions {#related-functions}

### Combine logarithmic series and their ranges {#combine-logarithmic-series}

Check that logarithm laws apply before splitting the expression. Expand each part, then intersect the ranges in which all the series are valid.

<section class="worked-example" markdown="1">

#### Example 3 — Two logarithms and a shared range {#example-3--two-logarithms-and-a-shared-range}

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

</section>

### Truncate products by total degree {#multiply-series}

Choose the highest required power first. Degrees add when terms multiply: retain every cross term that can contribute through that power, then collect like terms.

<section class="worked-example" markdown="1">

#### Example 4 — Multiply two series {#example-4--multiply-two-series}

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

</section>

### Track orders in a composite expansion {#compose-series}

Use a temporary variable for the inner function and substitute into the outer standard expansion. Check how each inner term contributes to the required powers before truncating.

<section class="worked-example" markdown="1">

#### Example 5 — A function inside an exponential {#example-5--a-function-inside-an-exponential}

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

</section>

## Limits {#limits}

The value of a function at a point and its limit at that point are different questions. A function may be undefined at $x=0$ but still have a limit as $x\to0$.

The form $\frac00$ does not determine the limit. Expand the numerator and denominator far enough to get their first non-zero terms after cancellation. Cancel a power of $x$ for $x\ne0$, then let $x$ tend to zero.

<section class="worked-example" markdown="1">

### Example 6 — Cancellation in an exponential {#example-6--cancellation-in-an-exponential}

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

</section>

<section class="worked-example" markdown="1">

### Example 7 — Expand numerator and denominator {#example-7--expand-numerator-and-denominator}

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

</section>

### Two standard limits {#two-standard-limits}

For any real $k>0$,

$$\begin{aligned}
&\boxed{\lim_{x\to\infty}x^ke^{-x}=0},\\
&\boxed{\lim_{x\to0^+}x^k\ln x=0}.
\end{aligned}$$

As $x\to\infty$, exponential growth is faster than any fixed positive power of $x$. As $x\to0^+$, the factor $x^k$ makes $x^k\ln x$ tend to zero, even though $\ln x\to-\infty$.

Replacing $x$ by $ax$, with $a>0$, also gives $\lim_{x\to\infty}x^ke^{-ax}=0$.

**Check the direction:** $\ln x$ is defined only for $x>0$, so the second limit is from the right.

## Improper Integrals {#improper-integrals}

An integral is **improper** if a bound is infinite, or the integrand is undefined or unbounded at an endpoint or inside the interval.

To evaluate one, first use ordinary finite bounds, then take a limit:

$$\int_a^\infty f(x)\,\mathrm dx
=\lim_{R\to\infty}\int_a^R f(x)\,\mathrm dx,$$

and, for a problem at the lower endpoint $a$,

$$\int_a^b f(x)\,\mathrm dx
=\lim_{\varepsilon\to0^+}\int_{a+\varepsilon}^b f(x)\,\mathrm dx.$$

The integral **converges** only if the limit is finite. If the limiting process has no finite result, the integral **diverges**.

If there is a problem inside the interval, split the integral there and check both sides separately. Both must converge. Equal and opposite divergences cannot be cancelled to give an ordinary improper integral.

<section class="worked-example" markdown="1">

### Example 8 — An infinite upper bound {#example-8--an-infinite-upper-bound}

**Question:** evaluate $\int_1^\infty\frac1{x^2}\,\mathrm dx$, showing the limiting process.

By the power rule,

$$\int x^{-2}\,\mathrm dx=\frac{x^{-1}}{-1}+C=-\frac1x+C.$$

For $R>1$,

$$\begin{aligned}
\int_1^R x^{-2}\,\mathrm dx
&=\left[-\frac1x\right]_1^R\\
&=-\frac1R-(-1)=1-\frac1R.
\end{aligned}$$

Therefore

$$\int_1^\infty\frac1{x^2}\,\mathrm dx
=\lim_{R\to\infty}\left(1-\frac1R\right)
=\boxed{1}.$$

**Compare:** for $x>0$, use the logarithmic primitive and substitute both bounds:

$$\int\frac1x\,\mathrm dx=\ln x+C,\qquad
\int_1^R\frac1x\,\mathrm dx=[\ln x]_1^R=\ln R-\ln1=\ln R.$$

As $R\to\infty$, $\ln R\to+\infty$, so $\int_1^\infty\frac1x\,\mathrm dx$ diverges. Both integrands tend to zero; that alone cannot decide convergence.

</section>

<section class="worked-example" markdown="1">

### Example 9 — A logarithm at zero {#example-9--a-logarithm-at-zero}

**Question:** evaluate $\int_0^1 x\ln x\,\mathrm dx$, showing the limiting process.

The expression $\ln x$ is undefined at $x=0$. Replace the lower bound by $\varepsilon>0$.

Differentiate the logarithmic factor because its derivative removes the logarithm:

$$\begin{aligned}
u&=\ln x,\quad \mathrm du=\frac1x\,\mathrm dx,\\
\mathrm dv&=x\,\mathrm dx,\quad v=\int x\,\mathrm dx=\frac{x^2}{2}.
\end{aligned}$$

$$\begin{aligned}
\int x\ln x\,\mathrm dx
&=uv-\int v\,\mathrm du\\
&=\frac{x^2}{2}\ln x-\int\frac{x^2}{2}\frac1x\,\mathrm dx\\
&=\frac{x^2}{2}\ln x-\frac12\int x\,\mathrm dx\\
&=\frac{x^2}{2}\ln x-\frac12\frac{x^2}{2}+C\\
&=\frac{x^2}{2}\ln x-\frac{x^2}{4}+C.
\end{aligned}$$

Hence

$$\begin{aligned}
\int_\varepsilon^1 x\ln x\,\mathrm dx
&=\left[\frac{x^2}{2}\ln x-\frac{x^2}{4}\right]_\varepsilon^1\\
&=\left(\frac{1^2}{2}\ln1-\frac{1^2}{4}\right)\\
&\quad-\left(\frac{\varepsilon^2}{2}\ln\varepsilon-\frac{\varepsilon^2}{4}\right)\\
&=-\frac14-\frac{\varepsilon^2}{2}\ln\varepsilon
+\frac{\varepsilon^2}{4}.
\end{aligned}$$

As $\varepsilon\to0^+$, both $\varepsilon^2\ln\varepsilon$ and $\varepsilon^2$ tend to zero. Thus the integral converges and

$$\boxed{\int_0^1 x\ln x\,\mathrm dx=-\frac14.}$$

**Check:** $x\ln x<0$ for $0<x<1$, so the integral must be negative. Do not write $\ln0$ in the evaluation.

</section>

<section class="worked-example" markdown="1">

### Example 10 — Integration by parts at infinity {#example-10--integration-by-parts-at-infinity}

**Question:** evaluate $\int_0^\infty xe^{-2x}\,\mathrm dx$, showing the limiting process.

Differentiate the polynomial factor. First integrate the exponential, dividing by its inner derivative $-2$:

$$\begin{aligned}
u&=x,\quad \mathrm du=\mathrm dx,\\
\mathrm dv&=e^{-2x}\,\mathrm dx,\\
v&=\int e^{-2x}\,\mathrm dx=-\frac12e^{-2x}.
\end{aligned}$$

$$\begin{aligned}
\int xe^{-2x}\,\mathrm dx
&=-\frac x2e^{-2x}+\frac12\int e^{-2x}\,\mathrm dx\\
&=-\frac x2e^{-2x}+\frac12\left(-\frac12e^{-2x}\right)+C\\
&=-\left(\frac x2+\frac14\right)e^{-2x}+C.
\end{aligned}$$

For a finite $R>0$,

$$\begin{aligned}
\int_0^R xe^{-2x}\,\mathrm dx
&=\left[-\left(\frac x2+\frac14\right)e^{-2x}\right]_0^R\\
&=-\left(\frac R2+\frac14\right)e^{-2R}-\left[-\left(0+\frac14\right)e^0\right]\\
&=\frac14-\left(\frac{R}{2}+\frac14\right)e^{-2R}.
\end{aligned}$$

Both $Re^{-2R}$ and $e^{-2R}$ tend to zero as $R\to\infty$. Therefore

$$\int_0^\infty xe^{-2x}\,\mathrm dx
=\lim_{R\to\infty}\left[\frac14-\left(\frac R2+\frac14\right)e^{-2R}\right]
=\boxed{\frac14}.$$

**Common mistake:** treating $\infty$ as a number to substitute into the antiderivative. Use the finite bound $R$ and show its limit.

</section>

## Practice {#practice}

State the range for expansions. For limits, show the first terms that do not cancel. For improper integrals, show the limiting process.

Questions 1–6 are self-written exercises. Question 7 is an original AQA question reproduced in the supplied textbook. Question 8 is textbook-derived teaching practice traced to the original exam below; no official marks are assigned to the adaptation.

<section class="lesson-check" markdown="1">

### Question 1 — A range of convergence {#question-1--a-range-of-convergence}

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

</section>

<section class="lesson-check" markdown="1">

### Question 2 — Two expansions {#question-2--a-negative-substitution}

**a** Expand $\ln(1-3x)$ up to and including the term in $x^3$. State the range of validity, including any allowed endpoint.

**b — Self-written task:** Let $f(x)=\ln(2+x)$. Calculate $f(0)$, $f^{\prime}(0)$, $f^{(2)}(0)$ and $f^{(3)}(0)$ from actual derivatives. Use them to form the Maclaurin expansion through $x^3$. State its range of validity, including any allowed endpoint. Show the derivatives before checking with a standard series.

<details markdown="1">
<summary>Hint</summary>

Substitute $-3x$ into $\ln(1+u)$. Solve $-1<-3x\le1$ carefully.

For b, differentiate the logarithm three times. After forming the coefficients, split the logarithm to check the range.

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

**b**

$$\begin{aligned}
f(x)&=\ln(2+x),& f(0)&=\ln2,\\
f^{\prime}(x)&=\frac1{2+x},& f^{\prime}(0)&=\frac12,\\
f^{(2)}(x)&=-\frac1{(2+x)^2},& f^{(2)}(0)&=-\frac14,\\
f^{(3)}(x)&=\frac2{(2+x)^3},& f^{(3)}(0)&=\frac14.
\end{aligned}$$

$$\begin{aligned}
\ln(2+x)&=\ln2+\frac12x+\frac{-1/4}{2!}x^2+\frac{1/4}{3!}x^3+\cdots\\
&=\ln2+\frac x2-\frac{x^2}{8}+\frac{x^3}{24}+\cdots.
\end{aligned}$$

After forming the coefficients, check the range:

$$\ln(2+x)=\ln2+\ln\left(1+\frac x2\right),\qquad
-1<\frac x2\le1\quad\Longrightarrow\quad -2<x\le2.$$

The constant term agrees with the value $\ln2$. The third derivative $\frac14$ must be divided by $3!=6$ to give the cubic coefficient $\frac1{24}$.

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 3 — Factor out the constant {#question-3--factor-out-the-constant}

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

</section>

<section class="lesson-check" markdown="1">

### Question 4 — The inner function has a constant term {#question-4--the-inner-function-has-a-constant-term}

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

</section>

<section class="lesson-check" markdown="1">

### Question 5 — Two limits {#question-5--two-limits}

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

</section>

<section class="lesson-check" markdown="1">

### Question 6 — Convergent or divergent integrals {#question-6--convergent-or-divergent-integrals}

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

$$\int\frac1x\,\mathrm dx=\ln x+C\quad(x>0),$$

$$\int_\varepsilon^1\frac1x\,\mathrm dx
=[\ln x]_\varepsilon^1=\ln1-\ln\varepsilon=-\ln\varepsilon.$$

$$\int_0^1\frac1x\,\mathrm dx
=\lim_{\varepsilon\to0^+}(-\ln\varepsilon)=+\infty.$$

As $\varepsilon\to0^+$, this tends to $+\infty$, so the integral diverges.

**b**

Use the integration-by-parts choice from Example 10: $u=x$, $\mathrm dv=e^{-3x}\,\mathrm dx$, $v=-\frac13e^{-3x}$.

$$\begin{aligned}
\int xe^{-3x}\,\mathrm dx
&=-\frac x3e^{-3x}+\frac13\int e^{-3x}\,\mathrm dx\\
&=-\left(\frac x3+\frac19\right)e^{-3x}+C.
\end{aligned}$$

Thus

$$\begin{aligned}
\int_0^R xe^{-3x}\,\mathrm dx
&=\left[-\left(\frac x3+\frac19\right)e^{-3x}\right]_0^R\\
&=-\left(\frac R3+\frac19\right)e^{-3R}-\left[-\left(0+\frac19\right)e^0\right]\\
&=\frac19-\left(\frac R3+\frac19\right)e^{-3R}.
\end{aligned}$$

$$\int_0^\infty xe^{-3x}\,\mathrm dx
=\lim_{R\to\infty}\left[\frac19-\left(\frac R3+\frac19\right)e^{-3R}\right]=\frac19.$$

Since $Re^{-3R}\to0$ and $e^{-3R}\to0$, the improper integral converges to $\boxed{\frac19}$.

**Check:** the second integrand is non-negative, and the integral's value is positive.

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 7 — Original AQA series practice {#question-7--original-aqa-series-practice}

**Source:** AQA Mathematics 6360, MFP3, January 2013, Question 2. **1 + 4 marks**. Textbook cross-reference: Chapter 19, practice examination question 2, printed p. 231. [Question paper, Q2 (PDF p. 2)](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP3/Papers-AQA/January%202013%20QP%20-%20FP3%20AQA.pdf#page=2); [AQA mark scheme, Q2 (PDF p. 4)](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP3/Papers-AQA/January%202013%20MS%20-%20FP3%20AQA.PDF#page=4). Question and matching mark scheme re-read on 2026-10-23; these are AQA-authored documents hosted by PMT, with some question papers in condensed layout.

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

**Mark-scheme comparison:** Expand each factor through the quadratic term before multiplying; the linear terms cancel and the quadratic coefficient is 3. Our working has been checked against the linked AQA mark scheme; these explanations are our own, not an official mark scheme.

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 8 — Textbook-derived integral practice {#question-8--textbook-derived-integral-practice}

**Source:** teaching practice adapted from the supplied textbook, Chapter 19, practice examination question 5, printed p. 232. The original is AQA Mathematics 6360, MFP3, June 2011, Question 3. [Original QP, Q3 (PDF p. 2)](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP3/Papers-AQA/June%202011%20QP%20-%20FP3%20AQA.pdf#page=2); [matching AQA MS, Q3 (PDF p. 6)](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP3/Papers-AQA/June%202011%20MS%20-%20FP3%20AQA.PDF#page=6). Both were re-read on 2026-10-23; these AQA-authored documents are hosted by PMT. This teaching adaptation carries no new official mark allocation.

**a** Find $\int x^2\ln x\,\mathrm dx$.

**b** Explain why $\int_0^e x^2\ln x\,\mathrm dx$ is an improper integral.

**c** Evaluate $\int_0^e x^2\ln x\,\mathrm dx$, showing the limiting process used.

<details markdown="1">
<summary>Hint</summary>

Use integration by parts. Replace the lower bound by $\varepsilon>0$, and use $\varepsilon^3\ln\varepsilon\to0$.

</details>

<details markdown="1">
<summary>Worked solution and check</summary>

**a** Take $u=\ln x$ and $\mathrm dv=x^2\mathrm dx$:

$$\begin{aligned}
u&=\ln x,\quad\mathrm du=\frac1x\,\mathrm dx,\\
\mathrm dv&=x^2\,\mathrm dx,\quad v=\int x^2\,\mathrm dx=\frac{x^3}{3}.
\end{aligned}$$

$$\begin{aligned}
\int x^2\ln x\,\mathrm dx
&=\frac{x^3}{3}\ln x-\int\frac{x^3}{3}\frac1x\,\mathrm dx\\
&=\frac{x^3}{3}\ln x-\frac13\int x^2\,\mathrm dx\\
&=\frac{x^3}{3}\ln x-\frac13\frac{x^3}{3}+C\\
&=\boxed{\frac{x^3}{3}\ln x-\frac{x^3}{9}+C}.
\end{aligned}$$

**b** The integrand contains $\ln x$, which is undefined at the lower bound $x=0$.

**c** For $\varepsilon>0$,

$$\begin{aligned}
\int_\varepsilon^e x^2\ln x\,\mathrm dx
&=\left[\frac{x^3}{3}\ln x-\frac{x^3}{9}\right]_\varepsilon^e\\
&=\left(\frac{e^3}{3}\ln e-\frac{e^3}{9}\right)\\
&\quad-\left(\frac{\varepsilon^3}{3}\ln\varepsilon-\frac{\varepsilon^3}{9}\right)\\
&=\frac{2e^3}{9}
-\frac{\varepsilon^3}{3}\ln\varepsilon+\frac{\varepsilon^3}{9}.
\end{aligned}$$

Both terms involving $\varepsilon$ tend to zero as $\varepsilon\to0^+$. Hence

$$\int_0^e x^2\ln x\,\mathrm dx
=\lim_{\varepsilon\to0^+}\left(\frac{2e^3}{9}-\frac{\varepsilon^3}{3}\ln\varepsilon+\frac{\varepsilon^3}{9}\right)
=\boxed{\frac{2e^3}{9}}.$$

**Check:** differentiating the answer in part a gives $x^2\ln x$; the extra $\frac13x^2$ terms cancel.

This teaching solution was checked against the original AQA Q3 mark scheme: integration by parts, the undefined endpoint, an explicit lower-bound limit and its vanishing logarithmic term.

</details>

</section>

## Diagnose and Retry {#diagnose-and-retry}

Both tasks are self-written and have no official marks. Explain the error before opening feedback; then close every solution and attempt the new task independently. If you need a hint, return later for another independent attempt.

<section class="lesson-check" markdown="1">

**Diagnose:** A learner truncates $e^{2x}$ after $1+2x$ and concludes that

$$\lim_{x\to0}(e^{2x}-1-2x)/x^2=0$$

. Explain why that truncation cannot decide the limit.

<details markdown="1">
<summary>Feedback</summary>

The retained terms all cancel. The first surviving numerator term is $2x^2$, so the limit is $2$. A discarded term matters when division brings it to constant order.

</details>

</section>

<section class="lesson-check" markdown="1">

**Independent retry:** Find the real constant $a$ for which

$$\lim_{x\to0}(e^{ax}-1-2x)/x^2$$

 is finite, and evaluate that limit.

<details markdown="1">
<summary>Hint</summary>

Inspect the linear coefficient before calculating the quadratic coefficient.

</details>

<details markdown="1">
<summary>Retry solution and check</summary>

The numerator is

$$(a-2)x+\frac{a^2}{2}x^2+\cdots$$

. A finite two-sided limit requires $a=2$, eliminating the term proportional to $1/x$ after division. The limit is then $a^2/2=2$.

</details>

</section>

### Coefficient diagnosis and a new retry {#coefficient-retry}

These self-written tasks have no official marks. Diagnose first, then close the feedback and expand the new function independently.

<section class="lesson-check" markdown="1">

**Diagnose:** A learner finds $f^{(3)}(0)=12$ and writes $12x^3$ as the cubic term. Explain and correct the error.

<details markdown="1">
<summary>Feedback</summary>

A derivative value is not its coefficient; the cubic term is $\frac{12}{3!}x^3=2x^3$. Revisit the [Maclaurin definition](#maclaurin-series) and record derivative values separately from coefficients.

</details>

</section>

<section class="lesson-check" markdown="1">

**Independent retry — self-written:** For $h(x)=\sqrt{1+2x}$, calculate the first three derivatives and their values at zero. Use these derivatives to form the Maclaurin expansion through $x^3$, showing the factorial divisors. State the standard range. Use the binomial series only afterwards as a check.

<details markdown="1">
<summary>Hint</summary>

Write the square root as a power and include the inner derivative each time. Keep the third derivative separate from the cubic coefficient.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\begin{aligned}
h^{\prime}(x)&=\tfrac12(1+2x)^{-1/2}\cdot2\\
&=(1+2x)^{-1/2},\\
h^{(2)}(x)&=-\tfrac12(1+2x)^{-3/2}\cdot2\\
&=-(1+2x)^{-3/2},\\
h^{(3)}(x)&=-(-\tfrac32)(1+2x)^{-5/2}\cdot2\\
&=3(1+2x)^{-5/2}.
\end{aligned}$$

$$h(0)=1,\quad h^{\prime}(0)=1,\quad h^{(2)}(0)=-1,\quad h^{(3)}(0)=3.$$

$$h(x)=1+x+\frac{-1}{2!}x^2+\frac3{3!}x^3+\cdots
=1+x-\frac{x^2}{2}+\frac{x^3}{2}+\cdots.$$

The standard binomial range is $\lvert2x\rvert<1$, $-\frac12<x<\frac12$. If you still missed a factorial, separate derivative values and coefficients into two columns, then close the solution and retry. The new square-root representation tests the same coefficient objective.

</details>

</section>

## Subsequent mixed application {#later-review}

After the [next chapter practice](/alevel/a2-further-mathematics/de-moivres-theorem/#practice), attempt this self-written connection with this chapter's solutions closed. The course entrance supplies the broader mixed and later reviews linked below.

<section class="lesson-check" markdown="1">

**a** For $F(x)=(1+x)e^{-x}$, obtain its Maclaurin expansion through $x^3$ from actual derivatives. Hence find $\lim_{x\to0}(F(x)-1)/x^2$.

**b** Evaluate $\int_0^{\infty}F(x)\,\mathrm dx$, showing the integration and limiting process.

<details markdown="1">
<summary>Hint</summary>

For a, apply the product rule first. For b, split the integrand and integrate its linear factor by parts.

</details>

<details markdown="1">
<summary>Solution and check</summary>

**a**

$$\begin{aligned}
F^{\prime}(x)&=e^{-x}-(1+x)e^{-x}=-xe^{-x},\\
F^{(2)}(x)&=-e^{-x}+xe^{-x}=(x-1)e^{-x},\\
F^{(3)}(x)&=e^{-x}-(x-1)e^{-x}=(2-x)e^{-x}.
\end{aligned}$$

$$F(0)=1,\quad F^{\prime}(0)=0,\quad F^{(2)}(0)=-1,\quad F^{(3)}(0)=2.$$

$$F(x)=1+0x-\frac{x^2}{2!}+\frac{2x^3}{3!}+\cdots
=1-\frac{x^2}{2}+\frac{x^3}{3}+\cdots.$$

$$\frac{F(x)-1}{x^2}=-\frac12+\frac x3+\cdots\quad(x\ne0),\qquad
\lim_{x\to0}\frac{F(x)-1}{x^2}=-\frac12.$$

**b**

Split the integral and integrate the linear factor by parts as in Example 10: $u=x$, $\mathrm dv=e^{-x}\,\mathrm dx$, $v=-e^{-x}$.

$$\begin{aligned}
\int(1+x)e^{-x}\,\mathrm dx
&=\int e^{-x}\,\mathrm dx-xe^{-x}+\int e^{-x}\,\mathrm dx\\
&=-e^{-x}-xe^{-x}-e^{-x}+C\\
&=-(x+2)e^{-x}+C.
\end{aligned}$$

$$\begin{aligned}
\int_0^R F(x)\,\mathrm dx
&=[-(x+2)e^{-x}]_0^R\\
&=-(R+2)e^{-R}-[-(0+2)e^0]\\
&=2-(R+2)e^{-R},\\
\int_0^{\infty}F(x)\,\mathrm dx
&=\lim_{R\to\infty}[2-(R+2)e^{-R}]=2.
\end{aligned}$$

The last step uses $Re^{-R}\to0$ and $e^{-R}\to0$. For a missed factorial, return to the coefficient retry. For a lower-bound sign error, return to Example 10's two-bound substitution, then close the answer and rewrite that step independently.

</details>

</section>

## Quick Reference {#quick-reference}

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
{: .wide-table}

**After practice:** if you inferred convergence from small terms, repeat Question 1. If an endpoint was wrong, repeat Question 2. If you lost a constant factor, repeat Question 3. If you missed a term in a composition, repeat Question 4. If everything cancelled in a limit, review Examples 6–7. If you substituted zero or infinity directly into an antiderivative, repeat Questions 6 and 8.

**You should be able to:** use all five standard expansions, state the range for a related function, find a limit after cancellation and evaluate or reject an improper integral using a limiting process.

Textbook: Chapter 19, Sections 19.1–19.4, printed pp. 220–230; review and practice examination questions on pp. 231–232, in *International A Level Further Mathematics*.
{: .lesson-meta}

The lesson follows FP2.6 of the [OxfordAQA Further Mathematics 9665 specification](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf). Worked examples are teaching material. Question 7 retains the AQA wording and marks from the supplied textbook. Question 8 is textbook-derived teaching practice traced to AQA MFP3 June 2011 Q3 and checked against its matching MS; no official marks are assigned to the adaptation.

**After this lesson:** close the chapter solutions and attempt the course [mixed review](/alevel/a2-further-mathematics/#mixed-review). Return at the interval specified there for the [later review](/alevel/a2-further-mathematics/#later-review). Keep your independent work and check it by objective; revisit the linked prerequisite and retry any objective that required a hint.

**Learning path:** [Previous: Finite Series](/alevel/a2-further-mathematics/finite-series/) · [Next: De Moivre's Theorem](/alevel/a2-further-mathematics/de-moivres-theorem/) · [Back to the course](/alevel/a2-further-mathematics/).

{% include exam_topic_practice.html %}
