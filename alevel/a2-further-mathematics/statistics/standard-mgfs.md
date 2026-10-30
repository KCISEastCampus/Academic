---
title: "Continuous and standard MGFs: derive and check the range"
layout: subjects
mathjax: true
grade: a2
subject: a2-further-mathematics
lang: en
permalink: /alevel/a2-further-mathematics/statistics/standard-mgfs/
reading_layout: true
study_page: true
toc_headings: h2
---

For integration by parts, revisit [the factor choice and remaining integral](/alevel/a2-mathematics/integration/#integration-by-parts).

## From an average to a continuous model {#start}

In the [first MGF lesson](/alevel/a2-further-mathematics/statistics/moment-generating-functions/#meaning), we added probability-weighted exponentials. For a continuous variable there are infinitely many possible values: the density supplies the weights, and integration does the adding. Here you will derive useful MGFs and decide where they exist. All teaching examples and tasks are self-written; no official marks are assigned.

You need exponential integration and [independent-sum rules](/alevel/a2-further-mathematics/statistics/moment-generating-functions/#sums). For the normal derivation, use [completing the square](/alevel/as-mathematics/algebra/#l02).

## Keep the support and the missing value {#continuous}

If $U$ is uniform on $[0,2]$, its density is $1/2$ there and zero elsewhere. We integrate only where the density is nonzero. For $t\ne0$:

$$
M_U(t)=\int_0^2 e^{tu}\frac12\,du=\left[\frac{e^{tu}}{2t}\right]_0^2=\frac{e^{2t}-1}{2t}.
$$

At $t=0$, return to the definition: the integrand is the density, whose integral is $1$. The quotient has a removable gap, not a failed MGF. The bounded support makes the expectation finite for every real $t$.

## Why an exponential MGF has a boundary {#exponential}

<section class="worked-example" markdown="1">

### Derive before substituting

**Question:** Let $X$ have density $f(x)=\lambda e^{-\lambda x}$ for $x\ge0$, with $\lambda>0$. Derive its MGF, including its range of existence.

Combine the two exponentials. Integrate to a finite upper limit $b$ first, then ask whether a finite limit exists:

$$
\begin{aligned}
M_X(t)&=\lim_{b\to\infty}\lambda\int_0^b e^{-(\lambda-t)x}\,dx\\
&=\lim_{b\to\infty}\frac{\lambda}{\lambda-t}
       \left(1-e^{-(\lambda-t)b}\right)
=\frac{\lambda}{\lambda-t},\qquad t<\lambda.
\end{aligned}
$$

The last exponential tends to zero only when $\lambda-t>0$. At $t=\lambda$ the integrand is the positive constant $\lambda$, so the integral is infinite; above it the integrand grows. Merely checking that the denominator is nonzero would wrongly admit $t>\lambda$. Differentiation gives:

$$
M_X'(0)=\frac1\lambda,\qquad M_X''(0)=\frac2{\lambda^2},
\qquad \operatorname{Var}(X)=\frac1{\lambda^2}.
$$

</section>

## A probability sum becomes an exponential {#poisson}

For $N\sim\operatorname{Poisson}(\lambda)$, with $\lambda>0$, insert the probabilities and collect everything raised to $n$. The exponential series $e^u=\sum_{n=0}^\infty u^n/n!$ finishes the sum:

$$
\begin{aligned}
M_N(t)&=\sum_{n=0}^{\infty}e^{tn}e^{-\lambda}\frac{\lambda^n}{n!}
=e^{-\lambda}\sum_{n=0}^{\infty}\frac{(\lambda e^t)^n}{n!}\\
&=\exp\{\lambda(e^t-1)\},\qquad t\in\mathbb R,\\
M_N'(t)&=\lambda e^t M_N(t),\\
M_N''(t)&=(\lambda e^t+\lambda^2e^{2t})M_N(t).
\end{aligned}
$$

Thus $E(N)=\lambda$ and $E(N^2)=\lambda+\lambda^2$, giving variance $\lambda$. The series is finite for every real input $t$.

## Complete the square to recognise a density {#normal}

For $Z\sim N(0,1)$, the added factor $e^{tz}$ changes the exponent. Complete its square:

$$
tz-\frac{z^2}{2}=-\frac{(z-t)^2}{2}+\frac{t^2}{2},
\qquad
M_Z(t)=e^{t^2/2}\int_{-\infty}^{\infty}
 \frac{e^{-(z-t)^2/2}}{\sqrt{2\pi}}\,dz=e^{t^2/2}.
$$

The remaining integral is $1$: it is the total area of a normal density centred at $t$, still with variance $1$. We have not guessed an elementary antiderivative for a Gaussian. Write $X=\mu+\sigma Z$, with $\sigma>0$, then use the affine rule:

$$
M_X(t)=e^{\mu t}M_Z(\sigma t)
=\exp\left(\mu t+\frac{\sigma^2t^2}{2}\right),\qquad t\in\mathbb R.
$$

## Products need independence and compatible inputs {#domains}

If independent $X,Y$ have MGFs on intervals $I,J$, their sum has the product on $I\cap J$. For $a+bX$, check that $bt$ belongs to $I$. A negative $b$ reverses inequalities. An MGF finite near zero determines the distribution uniquely; this lets us identify a sum by matching a known MGF.

$$
X\sim\operatorname{Poisson}(a),\ Y\sim\operatorname{Poisson}(b),\ X\perp Y
\ \Longrightarrow\
M_{X+Y}(t)=e^{(a+b)(e^t-1)}
\ \Longrightarrow\ X+Y\sim\operatorname{Poisson}(a+b).
$$

Independent normal variables also sum to a normal variable: their means and variances add in the exponent. In contrast, $X+X=2X$ uses $M_X(2t)$, not $M_X(t)^2$.

## Try without the demonstrations open {#practice}

<section class="lesson-check" markdown="1">

### A bounded density {#task-a}

**Question:** A variable $V$ has density $f(v)=2v$ for $0<v<1$, zero otherwise. Derive its MGF, including $t=0$ and its real existence range. Find its mean and variance directly from the density.

<details markdown="1"><summary>Hint</summary>

Use integration by parts for $\int ve^{tv}\,dv$. Return to the definition at zero.

</details>

<details markdown="1"><summary>Solution</summary>

For $t\ne0$,
Choose $u=v$, $dw=e^{tv}\,dv$, so $du=dv$ and $w=e^{tv}/t$.

$$
\int ve^{tv}\,dv=\frac{ve^{tv}}t-\frac1t\int e^{tv}\,dv
=\frac{ve^{tv}}t-\frac{e^{tv}}{t^2}+C.
$$

$$
M_V(t)=2\left[\frac{ve^{tv}}t-\frac{e^{tv}}{t^2}\right]_0^1
=\frac{2((t-1)e^t+1)}{t^2}.
$$
The upper endpoint gives $2(e^t/t-e^t/t^2)$ and the lower endpoint gives $-2/t^2$; subtract the latter. At zero, $M_V(0)=\int_0^1 2v\,dv=1$. Bounded support gives all real $t$.
$$
E(V)=\int_0^1 2v^2\,dv=\frac23,\quad
E(V^2)=\int_0^1 2v^3\,dv=\frac12,\quad
\operatorname{Var}(V)=\frac1{18}.
$$

</details>

</section>

<section class="lesson-check" markdown="1">

### A difference of waiting times {#task-b}

**Question:** Independent variables $A,B$ are exponential with rates $2,3$ respectively. Find the MGF and existence range of $D=A-B$, then its mean and variance.

<details markdown="1"><summary>Hint</summary>

Find the input range for $M_B(-t)$ before taking the intersection.

</details>

<details markdown="1"><summary>Solution</summary>

$$
M_D(t)=\frac2{2-t}\frac3{3+t},\qquad -3<t<2.
$$
The first factor needs $t<2$; the second needs $-t<3$. Independence gives $\operatorname{Var}(A-B)=1/4+1/9=13/36$ and $E(D)=1/2-1/3=1/6$. The variances add even though the means subtract.

</details>

</section>

<section class="lesson-check" markdown="1">

### Identify and justify {#task-c}

**Question:** Independent $X\sim N(2,3)$ and $Y\sim N(-1,4)$ are given; the second parameter denotes variance. Use MGFs to identify the distribution of $2X-Y$. Can the same product argument be used if $Y=X$?

<details markdown="1"><summary>Hint</summary>

Apply affine rules first; collect the linear and quadratic terms in $t$.

</details>

<details markdown="1"><summary>Solution</summary>

$$
M_{2X-Y}(t)=\exp(4t+6t^2)\exp(t+2t^2)
=\exp(5t+8t^2).
$$
This is the MGF of $N(5,16)$ for all real $t$, so uniqueness identifies the distribution. If $Y=X$, the product is unjustified: the variables are not independent, and $2X-Y=X$.

</details>

</section>

<section class="lesson-check" markdown="1">

### Rebuild the functions {#task-d}

**Question:** From the probability mass function, derive the MGF of $N\sim\operatorname{Poisson}(3)$. From the density $f(x)=e^{-(x-1)^2/8}/\sqrt{8\pi}$ on the real line, derive the MGF of $X$. State the existence ranges. Do not begin by quoting the final MGF formulas.

<details markdown="1"><summary>Hint</summary>

For the sum, identify an exponential series. For the integral, leave a normal density whose total area is one.

</details>

<details markdown="1"><summary>Solution</summary>

$$
M_N(t)=\sum_{n=0}^{\infty}e^{tn}e^{-3}\frac{3^n}{n!}
=e^{-3}\sum_{n=0}^{\infty}\frac{(3e^t)^n}{n!}
=e^{3(e^t-1)}.
$$
For the continuous variable,
$$
tx-\frac{(x-1)^2}{8}
=-\frac{(x-1-4t)^2}{8}+t+2t^2,
$$
so
$$
M_X(t)=e^{t+2t^2}\int_{-\infty}^{\infty}
\frac{e^{-(x-1-4t)^2/8}}{\sqrt{8\pi}}\,dx=e^{t+2t^2}.
$$
The last integral is a normal density with mean $1+4t$ and variance $4$. Both MGFs exist for all real $t$.

</details>

</section>

<section class="lesson-check" markdown="1">

### A shifted waiting time {#task-e}

**Question:** A variable $X$ has density $2e^{-2(x-1)}$ for $x\ge1$, zero otherwise. Starting from the continuous definition, derive its MGF and existence range. Show a finite upper integration bound, the limiting argument and what happens at or above the boundary. Check the value at zero.

<details markdown="1"><summary>Hint</summary>

Use $u=x-1$, including the limits. Do not merely quote an exponential MGF.

</details>

<details markdown="1"><summary>Solution</summary>

$$
\begin{aligned}
M_X(t)&=\int_1^\infty e^{tx}2e^{-2(x-1)}\,dx\\
&=2e^t\lim_{B\to\infty}\int_0^B e^{-(2-t)u}\,du\\
&=2e^t\lim_{B\to\infty}
 \left[\frac{-e^{-(2-t)u}}{2-t}\right]_0^B\\
&=\frac{2e^t}{2-t}\lim_{B\to\infty}(1-e^{-(2-t)B})
=\frac{2e^t}{2-t},\quad t<2.
\end{aligned}
$$
The substitution maps $x=1$ to $u=0$ and an upper bound $b$ to $B=b-1$. For $t=2$ the integrand in $u$ is the positive constant $2e^2$, so the integral diverges; for $t>2$ it grows. Thus the exact range is $t<2$, and $M_X(0)=1$. A nonzero denominator alone would not establish convergence.

</details>

</section>

## Repair the reason, then try a new case {#retry}

If zero seems forbidden in task A, return to [the bounded-support example](#continuous). If you admitted inputs above an exponential rate, return to [the tail limit](#exponential). If a difference produced a negative variance, repair [the independent-sum rule](/alevel/a2-further-mathematics/statistics/moment-generating-functions/#sums).

<section class="lesson-check" markdown="1">

### New checks {#retry-a}

**Question:** (i) Derive the MGF of a uniform variable on $[-1,1]$, with its value at zero. (ii) Independent variables $C,D$ each have density $4e^{-4x}$ for $x\ge0$, zero otherwise. First derive $M_C$ by integration, including its limiting condition; then find the MGF and existence range of $C-2D$.

<details markdown="1"><summary>Hint</summary>

The two parts test finite bounds and a reversed, rescaled input separately.

</details>

<details markdown="1"><summary>Solution</summary>

$$
M_U(t)=\left[\frac{e^{tu}}{2t}\right]_{-1}^1
=\frac{e^t-e^{-t}}{2t}\quad(t\ne0),\qquad M_U(0)=1.
$$
Its range is all real $t$.
$$
M_C(t)=\lim_{B\to\infty}4\int_0^B e^{-(4-t)x}\,dx
=\lim_{B\to\infty}\frac4{4-t}(1-e^{-(4-t)B})
=\frac4{4-t},\quad t<4.
$$

$$
M_{C-2D}(t)=\frac4{4-t}\frac4{4+2t},\qquad -2<t<4.
$$
The conditions are $t<4$ and $-2t<4$, not simply nonzero denominators.

</details>

</section>

## Return after estimation {#later-review}

<section class="lesson-check" markdown="1">

### A combined estimate {#later-a}

**Question:** Independent $X_1,\ldots,X_n$ each have MGF $\exp\{\lambda(e^t-1)\}$, with $\lambda>0$. Obtain the MGF of $\bar X$, and decide whether $\bar X$ is unbiased and consistent for $\lambda$. Justify the last claim.

<details markdown="1"><summary>Hint</summary>

Connect the product and scaling rules to derivatives and a sampling variance.

</details>

<details markdown="1"><summary>Solution</summary>

$$
M_{\bar X}(t)=\left[M_X(t/n)\right]^n
=\exp\{n\lambda(e^{t/n}-1)\}.
$$
Thus $E(\bar X)=\lambda$ and $\operatorname{Var}(\bar X)=\lambda/n$. It is unbiased. For each $\varepsilon>0$, Chebyshev gives $P(\lvert\bar X-\lambda\rvert\ge\varepsilon)\le\lambda/(n\varepsilon^2)\to0$, so it is consistent. A vanishing variance alone would not identify the correct target without the mean condition.

</details>

</section>

## Next step {#next-step}

[Estimators: compare rules](/alevel/a2-further-mathematics/statistics/estimators/) 路 [Course route](/alevel/a2-further-mathematics/statistics/)

{% include exam_topic_practice.html %}
