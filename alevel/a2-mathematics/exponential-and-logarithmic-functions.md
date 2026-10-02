---
title: Exponential and Logarithmic Functions
layout: subjects
mathjax: true
grade: a2
subject: a2-mathematics
permalink: /alevel/a2-mathematics/exponential-and-logarithmic-functions/
toc_headings: h2
study_page: true
---

[Pure Mathematics](/alevel/a2-mathematics/) · P2.5 Exponential and Logarithmic Functions

Model growth and decay, use natural logarithms, solve equations and sketch exponential and logarithmic curves.

- **Learning:** start with [growth and decay](#exponential-growth-and-decay), then study [the exponential function](#the-exponential-function) and [natural logarithms](#natural-logarithms).
- **Homework help:** check the multiplier, time unit, inequality sign and domain before calculating.
- **Revision:** try [practice](#practice) with solutions closed. Use the [quick reference](#quick-reference) to check your method.

Textbook: Chapter 4, Sections 4.1–4.4 and review (printed pp. 50–57). The topics are exponential growth and decay, the exponential function, natural logarithms and the logarithmic function.

**Before you start:** you should know indices, logarithms to a general base, inequalities, [inverse functions](/alevel/a2-mathematics/functions/) and [transformations](/alevel/a2-mathematics/modulus-and-transformations/).

All worked examples and practice questions are self-written, not official past-paper questions. The suggested practice time is a guide; no official marks are assigned.

## Exponential Growth and Decay

A quantity has exponential growth or decay when it changes by a **constant factor over equal time intervals**. If the initial quantity is $A>0$ and the factor per interval is $q>0$, then after $n$ intervals,

$$N=Aq^n.$$

- An increase of $p\%$ gives $q=1+\frac{p}{100}$.
- A decrease of $p\%$ gives $q=1-\frac{p}{100}$, for $0<p<100$.
- Growth has $q>1$; decay has $0<q<1$; $q=1$ gives no change.

At $n=0$, $N=A$. The percentage applies to the **current** amount each interval. A constant amount added each time gives a linear model, not an exponential one.

If you know two quantities separated by $m$ intervals, use $q^m=\frac{N_m}{N_0}$ to find the factor. Keep the time unit consistent: a monthly factor needs time measured in months.

For a threshold, take logarithms and solve the inequality. Since $\ln q<0$ for decay, dividing by $\ln q$ **reverses the inequality sign**. If the question asks for whole intervals, check the first integer that satisfies the original strict inequality; do not round to the nearest integer.

### Example 1 — Growth and the first whole year

**Question:** A model starts at $2000$ units and increases by $6\%$ each year. Find the first whole year when the quantity exceeds $3000$.

The model is $N=2000(1.06)^n$. Thus

$$2000(1.06)^n>3000\quad\Rightarrow\quad n\ln1.06>\ln1.5,$$

$$n>\frac{\ln1.5}{\ln1.06}=6.9585\ldots.$$

The first whole year is $\boxed{n=7}$.

**Check:** $N_6=2837.04\ldots<3000$, while $N_7=3007.26\ldots>3000$. The strict inequality and these two neighbouring years confirm the answer.

### Example 2 — Decay and a negative logarithm

**Question:** A model starts at $5000$ units and decreases by $15\%$ each year. Find the first whole year when the quantity is below $2000$.

The factor is $0.85$, so

$$5000(0.85)^n<2000\quad\Rightarrow\quad n\ln0.85<\ln0.4.$$

Since $\ln0.85<0$, division gives

$$n>\frac{\ln0.4}{\ln0.85}=5.6381\ldots.$$

Hence $\boxed{n=6}$. Checking gives $N_5=2218.53\ldots>2000$ and $N_6=1885.75\ldots<2000$.

**Common mistake:** using $0.15$ as the factor. A $15\%$ decrease leaves $85\%$ of the current amount.

### Check whether the model is reasonable

Compare ratios over equal time intervals, not just differences. For values $10,20,40,80$, the ratios are all $2$, so $N=10(2)^n$ fits the listed values.

Real data may have only approximately constant ratios. State the assumptions: the factor stays fixed, and no extra quantities are added or removed. A model that fits a short period may fail later because conditions or available resources change.

## The Exponential Function

The number $e$ is irrational, with $e\approx2.71828$. One definition is

$$e=1+\frac1{1!}+\frac1{2!}+\frac1{3!}+\cdots.$$

The **exponential function** is $f(x)=e^x$.

- Domain: all real $x$; range: $y>0$.
- It is increasing and passes through $(0,1)$.
- It has no $x$-intercept and has horizontal asymptote $y=0$.
- $e^{a+b}=e^ae^b$ and $e^{-a}=\frac1{e^a}$.

For a base $a>0$, $a\ne1$, the function $a^x$ is an exponential function. The base $e$ will be especially useful in [differentiation](/alevel/a2-mathematics/differentiation/).

### Example 3 — Sketch a transformed exponential curve

**Question:** Sketch $y=2-e^{-x}$. State its domain, range, intercepts and asymptote.

Start with $e^x$: reflect in the $y$-axis to get $e^{-x}$, reflect in the $x$-axis to get $-e^{-x}$, then translate upwards by $2$.

Since $e^{-x}>0$, the range is $\boxed{y<2}$ and the domain is all real $x$. The curve is increasing and has horizontal asymptote $\boxed{y=2}$.

At $x=0$, $y=1$, so the $y$-intercept is $(0,1)$. For the $x$-intercept,

$$e^{-x}=2\quad\Rightarrow\quad\boxed{x=-\ln2}.$$

**Check:** as $x$ increases, $e^{-x}$ tends to zero, so the curve approaches $2$ from below. It never reaches the asymptote.

## Natural Logarithms

The logarithm to base $e$ is the **natural logarithm**, written $\ln x$. The basic relationship is

$$\ln a=b\quad\Longleftrightarrow\quad a=e^b,\qquad a>0.$$

In particular, $\ln1=0$, $\ln e=1$, $\ln(e^x)=x$ for real $x$, and $e^{\ln x}=x$ for $x>0$.

The textbook uses $\log x$ for the common logarithm, to base $10$. Either common or natural logarithms can solve an exponential equation, provided you use the same base consistently.

### Laws of logarithms

For $a>0$, $b>0$ and real $k$,

$$\ln(ab)=\ln a+\ln b,$$

$$\ln\left(\frac ab\right)=\ln a-\ln b,\qquad\ln(a^k)=k\ln a.$$

**Check each original logarithm's argument before using a law.** A combined expression can be defined at values excluded by the original expression. For example, $\ln(x^2)$ is defined for $x\ne0$, but $2\ln x$ requires $x>0$. For $x\ne0$, the form covering both signs is $\ln(x^2)=2\ln\lvert x\rvert$.

There is no law $\ln(a+b)=\ln a+\ln b$.

### Example 4 — Combine logarithms and retain the domain

**Question:** Express $2\ln(x-1)-\ln(x+2)$ as a single logarithm and state its domain.

The original arguments require $x-1>0$ and $x+2>0$. Together these give $x>1$.

$$\boxed{2\ln(x-1)-\ln(x+2)=\ln\left(\frac{(x-1)^2}{x+2}\right)},\qquad x>1.$$

**Check:** at $x=2$, both forms give $-\ln4$. Although the combined fraction is positive at $x=0$, the original $\ln(x-1)$ is not defined there. Do not enlarge the domain.

## Solving Equations

1. State any logarithm domain restrictions.
2. Isolate the exponential or logarithmic expression.
3. Use logarithm laws, exponentiate, or substitute $u=e^x$ for a quadratic.
4. Check candidates in the original equation. In a substitution $u=e^x$, remember $u>0$.

### Example 5 — Reject an invalid logarithmic root

**Question:** Solve $\ln(x-1)+\ln(x+1)=\ln8$.

The domain is $x>1$. Combine the logarithms:

$$\ln\big((x-1)(x+1)\big)=\ln8\quad\Rightarrow\quad x^2-1=8.$$

Thus $x=3$ or $-3$. Only $\boxed{x=3}$ is in the original domain.

**Check:** at $3$, the left-hand side is $\ln2+\ln4=\ln8$. At $-3$, both original arguments are negative, so it is not a real solution.

### Example 6 — A quadratic in an exponential

**Question:** Solve $e^{2x}-3e^x-4=0$ exactly.

Let $u=e^x>0$. Since $e^{2x}=(e^x)^2$,

$$u^2-3u-4=0\quad\Rightarrow\quad(u-4)(u+1)=0.$$

Reject $u=-1$ because $e^x>0$. From $u=4$, $\boxed{x=\ln4}$.

**Check:** $e^x=4$ and $e^{2x}=16$, so $16-12-4=0$. Do not confuse $e^{2x}$ with $2e^x$.

For an equation such as $e^{3x-1}=5$, taking logarithms gives $3x-1=\ln5$, so $x=\frac{1+\ln5}{3}$.

## The Logarithmic Function

The function $y=\ln x$ is the inverse of $y=e^x$. Its graph is the reflection of the exponential curve in $y=x$.

- Domain: $x>0$; range: all real $y$.
- It is increasing and passes through $(1,0)$.
- It has no $y$-intercept and has vertical asymptote $x=0$.
- As $x$ approaches zero from the positive side, $\ln x$ decreases without bound.

![Exponential and natural logarithm graphs reflected in the dashed line y equals x, with the points zero comma one and one comma zero marked.](/assets/img/exponential-logarithm-inverses.svg)

### Example 7 — Domain and asymptote of a logarithmic curve

**Question:** Sketch $y=\ln(2x-4)$ and state its domain, range, intercepts and asymptote.

The argument must be positive: $2x-4>0$, so $\boxed{x>2}$. The range is all real $y$, and the vertical asymptote is $\boxed{x=2}$.

At $y=0$, $2x-4=e^0=1$, giving the $x$-intercept $\boxed{(\frac52,0)}$. There is no $y$-intercept because $x=0$ is outside the domain.

The curve is increasing. It is $y=\ln x$ stretched by factor $\frac12$ parallel to the $x$-axis, then translated by $2$ in the positive $x$ direction.

**Check:** $x=3$ gives $y=\ln2$. As $x$ approaches $2$ from above, the argument tends to zero from above, so $y$ decreases without bound.

### Example 8 — Find an inverse and its domain

**Question:** Let $f(x)=3-e^{2x}$ for real $x$. Find its range and inverse. Solve $f^{-1}(x)=0$.

Since $e^{2x}>0$, the range of $f$ is $\boxed{y<3}$. It is strictly decreasing, so it has an inverse.

From $y=3-e^{2x}$,

$$e^{2x}=3-y\quad\Rightarrow\quad x=\frac12\ln(3-y).$$

Interchange the variables:

$$\boxed{f^{-1}(x)=\frac12\ln(3-x)},\qquad x<3.$$

The inverse range is all real numbers. Setting $f^{-1}(x)=0$ gives $\ln(3-x)=0$, so $\boxed{x=2}$.

**Check:** $f(0)=2$, so $f^{-1}(2)=0$. The original horizontal asymptote $y=3$ becomes the inverse's vertical asymptote $x=3$.

## Connecting the Models

Since $q=e^{\ln q}$, the expression $Aq^t$ can also be written as $Ae^{kt}$ with $k=\ln q$, when $q$ is the factor for one unit of $t$. An $8\%$ increase per unit has $q=1.08$ and $k=\ln1.08$, not $k=0.08$.

An exponential curve can extend a model to non-integer times. Use that extension only when it fits the situation; if the quantity changes only at the end of each year, use integer years for the actual updates.

For models derived from a rate of change, doubling time and half-life, continue to [Differential Equations](/alevel/a2-mathematics/differential-equations/#natural-growth-and-decay).

## Practice

Allow about **30–40 minutes**. Keep full calculator values until the final answer. Check the year before a claimed first whole year.

### Q1 — Growth and comparing models

A model has $N=500(1.08)^n$. Find the first whole year when $N>1000$.

Two further models are $A_n=1200(1.04)^n$ and $B_n=1000(1.07)^n$. Find the first whole year when $B_n>A_n$.

<details markdown="1">
<summary>Hint</summary>

For the comparison, divide by the positive factor $1000(1.04)^n$ before taking logarithms.

</details>

<details markdown="1">
<summary>Solution and check</summary>

For the first model, $n>\frac{\ln2}{\ln1.08}=9.0064\ldots$, so $\boxed{n=10}$. At year $9$, $N=999.50\ldots<1000$; at year $10$, $N=1079.46\ldots>1000$. Rounding $9.0064\ldots$ to $9$ gives the wrong first year.

For the comparison,

$$\left(\frac{1.07}{1.04}\right)^n>1.2\quad\Rightarrow\quad n>\frac{\ln1.2}{\ln(1.07/1.04)}=6.4112\ldots.$$

Thus $\boxed{n=7}$. The ratio $B_n/A_n$ is below $1$ at $n=6$ and above $1$ at $n=7$.

</details>

### Q2 — Decay and model assumptions

A quantity starts at $800$ and decreases by $10\%$ each year. Find the first whole year when it is below $200$. State one assumption and one reason the model may fail later.

<details markdown="1">
<summary>Hint</summary>

Use $800(0.9)^n<200$ and reverse the sign when dividing by $\ln0.9$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$n>\frac{\ln0.25}{\ln0.9}=13.1576\ldots\quad\Rightarrow\quad\boxed{n=14}.$$

The values at years $13$ and $14$ are $203.35\ldots$ and $183.01\ldots$, confirming the crossing.

The model assumes a fixed factor of $0.9$ with no extra amount added or removed. It may fail if conditions change or if the quantity reaches a practical minimum below which the same rule no longer applies.

</details>

### Q3 — Two transformed graphs

State the domain, range, intercepts and asymptote for (a) $y=1-e^{2x}$ and (b) $y=\ln(3-x)$. Describe whether each curve increases or decreases.

<details markdown="1">
<summary>Hint</summary>

The exponential is always positive. For the logarithm, solve $3-x>0$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

**(a)** Domain: all real $x$; range: $y<1$; both intercepts: $(0,0)$; horizontal asymptote: $y=1$. The curve decreases. It approaches $1$ from below as $x$ decreases without bound.

**(b)** Domain: $x<3$; range: all real $y$; $x$-intercept: $(2,0)$; $y$-intercept: $(0,\ln3)$; vertical asymptote: $x=3$. The curve decreases. As $x$ approaches $3$ from below, $y$ decreases without bound.

Substitute each listed intercept into its original equation to check it.

</details>

### Q4 — Logarithm laws and domains

Express $3\ln(x+1)-\frac12\ln x$ as a single logarithm. State its domain. Also express $\ln(x^2)$ using a logarithm of $\lvert x\rvert$, and explain why $2\ln x$ is insufficient for all its real inputs.

<details markdown="1">
<summary>Hint</summary>

Move coefficients to powers, then use the quotient law. Check the original arguments separately.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\boxed{\ln\left(\frac{(x+1)^3}{\sqrt x}\right)},\qquad \boxed{x>0}.$$

At $x=1$, both expressions give $3\ln2=\ln8$.

For $x\ne0$, $\boxed{\ln(x^2)=2\ln\lvert x\rvert}$. At $x=-2$, the original is $\ln4$, while $2\ln x$ is not defined as a real expression.

</details>

### Q5 — Check the original logarithms

Solve $\ln(x-2)+\ln x=\ln3$. Also show that $2\ln(x+1)-\ln x=0$ has no real solution.

<details markdown="1">
<summary>Hint</summary>

The first domain is $x>2$; the second is $x>0$. Combine each expression before exponentiating.

</details>

<details markdown="1">
<summary>Solution and check</summary>

For the first equation, $x(x-2)=3$, so $(x-3)(x+1)=0$. Reject $-1$ and keep $\boxed{x=3}$, which gives $\ln1+\ln3=\ln3$.

For the second equation, $\frac{(x+1)^2}{x}=1$, so $x^2+x+1=0$. Its discriminant is $1-4=-3<0$, so there is no real solution. Also, for $x>0$, the fraction equals $x+2+\frac1x\ge4$, and its logarithm cannot be zero.

</details>

### Q6 — Exponential equations

Solve (a) $e^{2x}-5e^x+6=0$ and (b) $e^{2x-1}=7$ exactly.

<details markdown="1">
<summary>Hint</summary>

For (a), let $u=e^x>0$. For (b), take the natural logarithm of each side.

</details>

<details markdown="1">
<summary>Solution and check</summary>

**(a)** $(u-2)(u-3)=0$, so both positive values are allowed. Hence $\boxed{x=\ln2,\ln3}$. Substituting $e^x=2$ or $3$ into the original quadratic gives zero.

**(b)** $2x-1=\ln7$, so $\boxed{x=\frac{1+\ln7}{2}}$. The exponent is then $\ln7$ and the original exponential is $7$.

</details>

### Q7 — Inverse and a composite function

Let $f(x)=\ln(2x-1)$ for $x>\frac12$ and $g(x)=e^x+1$ for real $x$. Find $f^{-1}(x)$, its domain and range. Find $f(g(x))$ and solve $f(g(x))=\ln5$ exactly.

<details markdown="1">
<summary>Hint</summary>

For the inverse, write $e^y=2x-1$. For the composite function, substitute the whole of $g(x)$ into $f$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\boxed{f^{-1}(x)=\frac{e^x+1}{2}}.$$

Its domain is all real $x$ and its range is $y>\frac12$. The check $f(f^{-1}(x))=\ln(e^x)=x$ holds for every real $x$.

$$\boxed{f(g(x))=\ln(2e^x+1)}$$

is defined for all real $x$, since $2e^x+1>0$ and $g(x)>1$ lies in the domain of $f$.

From $2e^x+1=5$, $e^x=2$ and $\boxed{x=\ln2}$. Substitution gives $\ln(2(2)+1)=\ln5$.

</details>

## Quick Reference

| Task | Method | Check |
|---|---|---|
| Percentage growth or decay | $Aq^n$, with $q=1\pm\frac{p}{100}$ | Apply the factor to the current amount |
| Threshold | Take logarithms and solve the inequality | Reverse the sign when dividing by a negative logarithm |
| First whole interval | Choose the first integer satisfying the inequality | Check that interval and the one before it |
| Natural logarithm | $\ln a=b$ means $a=e^b$ | The logarithm argument must be positive |
| Combine logarithms | Product, quotient and power laws | Retain the original domain |
| Quadratic in $e^x$ | Substitute $u=e^x$ | Reject $u\le0$ |
| Sketch a curve | State domain, range, intercepts and asymptote | Check which side of the asymptote the curve occupies |
| Find an inverse | Rearrange, then interchange variables | Swap the original domain and range |

**If your answer looks wrong:** check the percentage factor, time unit, strict inequality, positive arguments and the difference between $e^{2x}$ and $2e^x$.

**You should be able to:** model a constant factor, find threshold times, use logarithm laws with the correct domain, and sketch or invert exponential and logarithmic functions.

**Learning path:** [Previous: Trigonometric Functions and Formulae](/alevel/a2-mathematics/trigonometric-functions-and-formulae/) · [Next: Differentiation](/alevel/a2-mathematics/differentiation/) · [Return to the Pure Mathematics topic index](/alevel/a2-mathematics/).
