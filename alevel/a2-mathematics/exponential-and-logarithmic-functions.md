---
title: Exponential and Logarithmic Functions
layout: subjects
mathjax: true
grade: a2
subject: a2-mathematics
permalink: /alevel/a2-mathematics/exponential-and-logarithmic-functions/
toc_headings: h2, h3
reading_layout: true
study_page: true
---

[Pure Mathematics](/alevel/a2-mathematics/) · P2.5 Exponential and Logarithmic Functions
{: .lesson-meta}

<div class="lesson-lead" markdown="1">

A fixed percentage multiplies the current amount. Connect that model to exponential graphs and their logarithmic inverses, then use positivity and the original domain to decide which answers are possible.

</div>

1. [Choose a growth or decay model](#exponential-growth-and-decay), including time units and threshold checks.
2. Connect [the exponential function](#the-exponential-function) to [natural logarithms](#natural-logarithms) and [solve equations](#solving-equations).
3. [Sketch and invert logarithmic functions](#the-logarithmic-function), then try [practice](#practice) and [later review](#later-review).
{: .lesson-routes}

<div class="lesson-notes" markdown="1">

**Before you start:** recover [indices](/alevel/as-mathematics/algebra/#l01), [quadratic factorisation and inequalities](/alevel/as-mathematics/algebra/#l02), [general-base logarithms and constant-factor change](/alevel/as-mathematics/exponentials-logarithms/#l17), [inverse functions](/alevel/a2-mathematics/functions/#inverse-functions) or [transformations](/alevel/a2-mathematics/modulus-and-transformations/) as needed. Natural logarithms and the role of $e$ are introduced here; derivatives are not prerequisites.

All examples, tasks and data are self-written, with no official marks. Hints and solutions open separately; record help used. [Sources and scope](#lesson-sources) follow the lesson.

</div>

## Exponential Growth and Decay {#exponential-growth-and-decay}

A quantity has exponential growth or decay when it changes by a **constant factor over equal time intervals**. If the initial quantity is $A>0$ and the factor per interval is $q>0$, then after $n$ intervals,

$$N=Aq^n.$$

- An increase of $p\%$ gives $q=1+\frac{p}{100}$.
- A decrease of $p\%$ gives $q=1-\frac{p}{100}$, for $0<p<100$.
- Growth has $q>1$; decay has $0<q<1$; $q=1$ gives no change.

At $n=0$, $N=A$. The percentage applies to the **current** amount each interval. A constant amount added each time gives a linear model, not an exponential one.

If you know two quantities separated by $m$ intervals, use $q^m=\frac{N_m}{N_0}$ to find the factor. Keep the time unit consistent: a monthly factor needs time measured in months.

Here $\ln$ means logarithm to base $e$ (approximately $2.71828$); it obeys the same laws as the general-base logarithms in the AS prerequisite. Its inverse relationship is explained in [Natural Logarithms](#natural-logarithms).

For a threshold, take logarithms and solve the inequality. Since $\ln q<0$ for decay, dividing by $\ln q$ **reverses the inequality sign**. If the question asks for whole intervals, check the first integer that satisfies the original strict inequality; do not round to the nearest integer.

<section class="worked-example" markdown="1">

### Example 1 — Growth and the first whole year {#example-1--growth-and-the-first-whole-year}

**Question:** A model starts at $2000$ units and increases by $6\%$ each year. Find the first whole year when the quantity exceeds $3000$.

The model is $N=2000(1.06)^n$. Thus

$$2000(1.06)^n>3000\quad\Rightarrow\quad n\ln1.06>\ln1.5,$$

$$n>\frac{\ln1.5}{\ln1.06}=6.9585\ldots.$$

The first whole year is $\boxed{n=7}$.

**Check:** $N_6=2837.04\ldots<3000$, while $N_7=3007.26\ldots>3000$. The strict inequality and these two neighbouring years confirm the answer.

</section>

<section class="worked-example" markdown="1">

### Example 2 — Decay and a negative logarithm {#example-2--decay-and-a-negative-logarithm}

**Question:** A model starts at $5000$ units and decreases by $15\%$ each year. Find the first whole year when the quantity is below $2000$.

The factor is $0.85$, so

$$5000(0.85)^n<2000\quad\Rightarrow\quad n\ln0.85<\ln0.4.$$

Since $\ln0.85<0$, division gives

$$n>\frac{\ln0.4}{\ln0.85}=5.6381\ldots.$$

Hence $\boxed{n=6}$. Checking gives $N_5=2218.53\ldots>2000$ and $N_6=1885.75\ldots<2000$.

**Common mistake:** using $0.15$ as the factor. A $15\%$ decrease leaves $85\%$ of the current amount.

</section>

<section class="lesson-check" markdown="1">

### Pause and complete {#check-threshold}

<!-- task:check-threshold -->

A model is $N_n=500(0.8)^n$. From $n\ln0.8<\ln0.4$, complete the inequality for $n$ and find the first whole $n$ for which $N_n<200$. Check the neighbouring integers.

<!-- /task:check-threshold -->

<details markdown="1">
<summary>Hint</summary>

Determine the sign of the quantity you divide by. A strict threshold is not a nearest-integer rounding question.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Since $\ln0.8<0$,

$$n>\frac{\ln0.4}{\ln0.8}=4.1062\ldots.$$

The first whole value is $n=5$. At $n=4$ the quantity is $204.8$; at $n=5$ it is $163.84$. This checks both the direction and the first allowed integer.

</details>

</section>

### Check whether the model is reasonable {#check-whether-the-model-is-reasonable}

Compare ratios over equal time intervals, not just differences. For values $10,20,40,80$, the ratios are all $2$, so $N=10(2)^n$ fits the listed values.

Real data may have only approximately constant ratios. State the assumptions: the factor stays fixed, and no extra quantities are added or removed. A model that fits a short period may fail later because conditions or available resources change.

## The Exponential Function {#the-exponential-function}

The number $e$ is irrational, with $e\approx2.71828$. One definition is

$$e=1+\frac1{1!}+\frac1{2!}+\frac1{3!}+\cdots.$$

The **exponential function** is $f(x)=e^x$.

- Domain: all real $x$; range: $y>0$.
- It is increasing and passes through $(0,1)$.
- It has no $x$-intercept and has horizontal asymptote $y=0$.
- $e^{a+b}=e^ae^b$ and $e^{-a}=\frac1{e^a}$.

For a base $a>0$, $a\ne1$, the function $a^x$ is an exponential function. The base $e$ will be especially useful in [differentiation](/alevel/a2-mathematics/differentiation/).

<section class="worked-example" markdown="1">

### Example 3 — Sketch a transformed exponential curve {#example-3--sketch-a-transformed-exponential-curve}

**Question:** Sketch $y=2-e^{-x}$. State its domain, range, intercepts and asymptote.

Start with $e^x$: reflect in the $y$-axis to get $e^{-x}$, reflect in the $x$-axis to get $-e^{-x}$, then translate upwards by $2$.

Since $e^{-x}>0$, the range is $\boxed{y<2}$ and the domain is all real $x$. The curve is increasing and has horizontal asymptote $\boxed{y=2}$.

At $x=0$, $y=1$, so the $y$-intercept is $(0,1)$. For the $x$-intercept,

$$e^{-x}=2\quad\Rightarrow\quad\boxed{x=-\ln2}.$$

**Check:** as $x$ increases, $e^{-x}$ tends to zero, so the curve approaches $2$ from below. It never reaches the asymptote.

</section>

## Natural Logarithms {#natural-logarithms}

The logarithm to base $e$ is the **natural logarithm**, written $\ln x$. The basic relationship is

$$\ln a=b\quad\Longleftrightarrow\quad a=e^b,\qquad a>0.$$

In particular, $\ln1=0$, $\ln e=1$, $\ln(e^x)=x$ for real $x$, and $e^{\ln x}=x$ for $x>0$.

The textbook uses $\log x$ for the common logarithm, to base $10$. Either common or natural logarithms can solve an exponential equation, provided you use the same base consistently.

### Laws of logarithms {#laws-of-logarithms}

For $a>0$, $b>0$ and real $k$,

$$\ln(ab)=\ln a+\ln b,$$

$$\ln\left(\frac ab\right)=\ln a-\ln b,\qquad\ln(a^k)=k\ln a.$$

**Check each original logarithm's argument before using a law.** A combined expression can be defined at values excluded by the original expression. For example, $\ln(x^2)$ is defined for $x\ne0$, but $2\ln x$ requires $x>0$. For $x\ne0$, the form covering both signs is $\ln(x^2)=2\ln\lvert x\rvert$.

There is no law $\ln(a+b)=\ln a+\ln b$.

<section class="worked-example" markdown="1">

### Example 4 — Combine logarithms and retain the domain {#example-4--combine-logarithms-and-retain-the-domain}

**Question:** Express $2\ln(x-1)-\ln(x+2)$ as a single logarithm and state its domain.

The original arguments require $x-1>0$ and $x+2>0$. Together these give $x>1$.

$$\boxed{2\ln(x-1)-\ln(x+2)=\ln\left(\frac{(x-1)^2}{x+2}\right)},\qquad x>1.$$

**Check:** at $x=2$, both forms give $-\ln4$. Although the combined fraction is positive at $x=0$, the original $\ln(x-1)$ is not defined there. Do not enlarge the domain.

</section>

## Solving Equations {#solving-equations}

1. State any logarithm domain restrictions.
2. Isolate the exponential or logarithmic expression.
3. Use logarithm laws, exponentiate, or substitute $u=e^x$ for a quadratic.
4. Check candidates in the original equation. In a substitution $u=e^x$, remember $u>0$.

<section class="worked-example" markdown="1">

### Example 5 — Reject an invalid logarithmic root {#example-5--reject-an-invalid-logarithmic-root}

**Question:** Solve $\ln(x-1)+\ln(x+1)=\ln8$.

The domain is $x>1$. Combine the logarithms:

$$\ln\big((x-1)(x+1)\big)=\ln8\quad\Rightarrow\quad x^2-1=8.$$

Thus $x=3$ or $-3$. Only $\boxed{x=3}$ is in the original domain.

**Check:** at $3$, the left-hand side is $\ln2+\ln4=\ln8$. At $-3$, both original arguments are negative, so it is not a real solution.

</section>

<section class="worked-example" markdown="1">

### Example 6 — A quadratic in an exponential {#example-6--a-quadratic-in-an-exponential}

**Question:** Solve $e^{2x}-3e^x-4=0$ exactly.

Let $u=e^x>0$. Since $e^{2x}=(e^x)^2$,

$$u^2-3u-4=0\quad\Rightarrow\quad(u-4)(u+1)=0.$$

Reject $u=-1$ because $e^x>0$. From $u=4$, $\boxed{x=\ln4}$.

**Check:** $e^x=4$ and $e^{2x}=16$, so $16-12-4=0$. Do not confuse $e^{2x}$ with $2e^x$.

For an equation such as $e^{3x-1}=5$, taking logarithms gives $3x-1=\ln5$, so $x=\frac{1+\ln5}{3}$.

</section>

## The Logarithmic Function {#the-logarithmic-function}

The function $y=\ln x$ is the inverse of $y=e^x$. Its graph is the reflection of the exponential curve in $y=x$.

- Domain: $x>0$; range: all real $y$.
- It is increasing and passes through $(1,0)$.
- It has no $y$-intercept and has vertical asymptote $x=0$.
- As $x$ approaches zero from the positive side, $\ln x$ decreases without bound.

![Exponential and natural logarithm graphs reflected in the dashed line y equals x, with the points zero comma one and one comma zero marked.](/assets/img/exponential-logarithm-inverses.svg)

<section class="worked-example" markdown="1">

### Example 7 — Domain and asymptote of a logarithmic curve {#example-7--domain-and-asymptote-of-a-logarithmic-curve}

**Question:** Sketch $y=\ln(2x-4)$ and state its domain, range, intercepts and asymptote.

The argument must be positive: $2x-4>0$, so $\boxed{x>2}$. The range is all real $y$, and the vertical asymptote is $\boxed{x=2}$.

At $y=0$, $2x-4=e^0=1$, giving the $x$-intercept $\boxed{(\frac52,0)}$. There is no $y$-intercept because $x=0$ is outside the domain.

The curve is increasing. It is $y=\ln x$ stretched by factor $\frac12$ parallel to the $x$-axis, then translated by $2$ in the positive $x$ direction.

**Check:** $x=3$ gives $y=\ln2$. As $x$ approaches $2$ from above, the argument tends to zero from above, so $y$ decreases without bound.

</section>

<section class="worked-example" markdown="1">

### Example 8 — Find an inverse and its domain {#example-8--find-an-inverse-and-its-domain}

**Question:** Let $f(x)=3-e^{2x}$ for real $x$. Find its range and inverse. Solve $f^{-1}(x)=0$.

Since $e^{2x}>0$, the range of $f$ is $\boxed{y<3}$. It is strictly decreasing, so it has an inverse.

From $y=3-e^{2x}$,

$$e^{2x}=3-y\quad\Rightarrow\quad x=\frac12\ln(3-y).$$

Interchange the variables:

$$\boxed{f^{-1}(x)=\frac12\ln(3-x)},\qquad x<3.$$

The inverse range is all real numbers. Setting $f^{-1}(x)=0$ gives $\ln(3-x)=0$, so $\boxed{x=2}$.

**Check:** $f(0)=2$, so $f^{-1}(2)=0$. The original horizontal asymptote $y=3$ becomes the inverse's vertical asymptote $x=3$.

</section>

## Connecting the Models {#connecting-the-models}

Since $q=e^{\ln q}$, the expression $Aq^t$ can also be written as $Ae^{kt}$ with $k=\ln q$, when $q$ is the factor for one unit of $t$. An $8\%$ increase per unit has $q=1.08$ and $k=\ln1.08$, not $k=0.08$.

An exponential curve can extend a model to non-integer times. Use that extension only when it fits the situation; if the quantity changes only at the end of each year, use integer years for the actual updates.

For models derived from a rate of change, doubling time and half-life, continue to [Differential Equations](/alevel/a2-mathematics/differential-equations/#natural-growth-and-decay).

## Practice {#practice}

Allow about **30–40 minutes**. Keep full calculator values until the final answer. Check the year before a claimed first whole year.

<section class="lesson-check" markdown="1">

### Question 1 {#q1--growth-and-comparing-models}

<!-- task:q1--growth-and-comparing-models -->

A model has $N=500(1.08)^n$. Find the first whole year when $N>1000$.

Two further models are $A_n=1200(1.04)^n$ and $B_n=1000(1.07)^n$. Find the first whole year when $B_n>A_n$.

<!-- /task:q1--growth-and-comparing-models -->

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

</section>

<section class="lesson-check" markdown="1">

### Question 2 {#q2--decay-and-model-assumptions}

<!-- task:q2--decay-and-model-assumptions -->

A quantity starts at $800$ and decreases by $10\%$ each year. Find the first whole year when it is below $200$. State one assumption and one reason the model may fail later.

<!-- /task:q2--decay-and-model-assumptions -->

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

</section>

<section class="lesson-check" markdown="1">

### Question 3 {#q3--two-transformed-graphs}

<!-- task:q3--two-transformed-graphs -->

Sketch (a) $y=1-e^{2x}$ and (b) $y=\ln(3-x)$, labelling intercepts and asymptotes. State the domain and range and describe whether each curve increases or decreases.

<!-- /task:q3--two-transformed-graphs -->

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

</section>

<section class="lesson-check" markdown="1">

### Question 4 {#q4--logarithm-laws-and-domains}

<!-- task:q4--logarithm-laws-and-domains -->

Express $3\ln(x+1)-\frac12\ln x$ as a single logarithm. State its domain. Also express $\ln(x^2)$ using a logarithm of $\lvert x\rvert$, and explain why $2\ln x$ is insufficient for all its real inputs.

<!-- /task:q4--logarithm-laws-and-domains -->

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

</section>

<section class="lesson-check" markdown="1">

### Question 5 {#q5--check-the-original-logarithms}

<!-- task:q5--check-the-original-logarithms -->

Solve $\ln(x-2)+\ln x=\ln3$. Also show that $2\ln(x+1)-\ln x=0$ has no real solution.

<!-- /task:q5--check-the-original-logarithms -->

<details markdown="1">
<summary>Hint</summary>

The first domain is $x>2$; the second is $x>0$. Combine each expression before exponentiating.

</details>

<details markdown="1">
<summary>Solution and check</summary>

For the first equation, $x(x-2)=3$, so $(x-3)(x+1)=0$. Reject $-1$ and keep $\boxed{x=3}$, which gives $\ln1+\ln3=\ln3$.

For the second equation, $\frac{(x+1)^2}{x}=1$, so $x^2+x+1=0$. Its discriminant is $1-4=-3<0$, so there is no real solution. Also, for $x>0$, the fraction equals $x+2+\frac1x\ge4$, and its logarithm cannot be zero.

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 6 {#q6--exponential-equations}

<!-- task:q6--exponential-equations -->

Solve (a) $e^{2x}-5e^x+6=0$ and (b) $e^{2x-1}=7$ exactly.

<!-- /task:q6--exponential-equations -->

<details markdown="1">
<summary>Hint</summary>

For (a), let $u=e^x>0$. For (b), take the natural logarithm of each side.

</details>

<details markdown="1">
<summary>Solution and check</summary>

**(a)** $(u-2)(u-3)=0$, so both positive values are allowed. Hence $\boxed{x=\ln2,\ln3}$. Substituting $e^x=2$ or $3$ into the original quadratic gives zero.

**(b)** $2x-1=\ln7$, so $\boxed{x=\frac{1+\ln7}{2}}$. The exponent is then $\ln7$ and the original exponential is $7$.

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 7 {#q7--inverse-and-a-composite-function}

<!-- task:q7--inverse-and-a-composite-function -->

Let $f(x)=\ln(2x-1)$ for $x>\frac12$ and $g(x)=e^x+1$ for real $x$. Find $f^{-1}(x)$, its domain and range. Find $f(g(x))$ and solve $f(g(x))=\ln5$ exactly. Describe how the graphs of $f$ and $f^{-1}$ are related.

<!-- /task:q7--inverse-and-a-composite-function -->

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

The two graphs are reflections in $y=x$: for example, on $f$, $(1,0)$ corresponds to $(0,1)$ on the inverse.

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 8 {#q8}

<!-- task:q8 -->

The following data are constructed, not measured.

| Time $t$ (months) | Quantity $N$ |
| --- | --- |
| 0 | 240 |
| 2 | 135 |
| 4 | 75.9375 |

Suggest a model $N(t)$ supported by these values and justify your choice. Find the first whole month with $N<100$. Write the same model as $Ae^{kt}$ and state one limitation of extending it beyond the data.

<!-- /task:q8 -->

<details markdown="1">
<summary>Hint</summary>

Compare changes over equal two-month intervals. A factor for two months is not a factor for one month.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Both two-month ratios are $0.5625$, so a constant-factor model fits. The positive monthly factor is $q=\sqrt{0.5625}=0.75$; thus $N(t)=240(0.75)^t$.

$$t>\frac{\ln(100/240)}{\ln0.75}=3.04318\ldots.$$

The first whole month is $4$: the quantities at months $3$ and $4$ are $101.25$ and $75.9375$. In the alternative form, $A=240$ and $k=\ln0.75$ per month. Three fitted values do not establish that the factor stays fixed later; changed conditions could invalidate the prediction. Non-integer times require an appropriate continuous interpretation.

</details>

</section>

## Repair and try again {#repair}

Locate your first failed decision, reread its explanation, then close the answer and attempt the linked new task. A correct final number without its domain or threshold check is incomplete evidence.

| Error in your work | Recover here | New attempt |
| --- | --- | --- |
| Wrong factor, time unit, sign or first whole time in Questions 1–2 or 8 | [Growth/decay](#exponential-growth-and-decay), [negative logarithm](#example-2--decay-and-a-negative-logarithm), [model conversion](#connecting-the-models) | [Retry A](#retry-model) |
| Combining logs enlarges the domain in Question 4 | [Original arguments](#example-4--combine-logarithms-and-retain-the-domain) | [Retry B](#retry-laws) |
| Accepting a forbidden candidate or treating an exponent as a coefficient in Questions 5–6 | [Logarithmic roots](#example-5--reject-an-invalid-logarithmic-root), [exponential substitution](#example-6--a-quadratic-in-an-exponential) | [Retry C](#retry-equations) |
| Wrong asymptote side, inverse domain or composite in Questions 3 or 7 | [Logarithmic graph](#example-7--domain-and-asymptote-of-a-logarithmic-curve), [inverse](#example-8--find-an-inverse-and-its-domain), [Question 7](#q7--inverse-and-a-composite-function) | [Retry D](#retry-graphs) |

<section class="lesson-check" markdown="1">

### Retry A {#retry-model}

<!-- task:retry-model -->

A constant-factor model has $N_0=100$ and $N_2=81$, with time in years. Find the positive annual factor, an expression for $N_n$ and the first whole year with $N_n<81$. State the corresponding $k$ if $N=100e^{kt}$.

<!-- /task:retry-model -->

<details markdown="1">
<summary>Hint</summary>

Two years contain two applications of the annual factor. Equality with the threshold is not below it.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$q^2=0.81$ gives $q=0.9$ and $N_n=100(0.9)^n$. The strict inequality gives $n>2$, so the first whole year is $3$: $N_2=81$ and $N_3=72.9$. Here $k=\ln0.9$ per year, not $-0.1$.

</details>

</section>

<section class="lesson-check" markdown="1">

### Retry B {#retry-laws}

<!-- task:retry-laws -->

Express $2\ln(x-2)-\ln x$ as one logarithm, retaining the original domain. Is $x=1$ allowed? Explain.

<!-- /task:retry-laws -->

<details markdown="1">
<summary>Hint</summary>

Check the two original arguments before applying the power and quotient laws.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The original requires $x-2>0$ and $x>0$, hence $x>2$.

$$2\ln(x-2)-\ln x=\ln\left(\frac{(x-2)^2}{x}\right),\qquad x>2.$$

At $x=1$ the combined argument is positive, but the original first logarithm is undefined. It is not an allowed input.

</details>

</section>

<section class="lesson-check" markdown="1">

### Retry C {#retry-equations}

<!-- task:retry-equations -->

Solve (a) $\ln(x-3)+\ln(x+1)=\ln5$ and (b) $e^{2x}+e^x-6=0$ exactly. Explain every rejected candidate.

<!-- /task:retry-equations -->

<details markdown="1">
<summary>Hint</summary>

In (a) retain the original log domain; in (b) retain the positivity of the substitution.

</details>

<details markdown="1">
<summary>Solution and check</summary>

(a) The domain is $x>3$. Then $(x-3)(x+1)=5$, giving $(x-4)(x+2)=0$. Keep $x=4$ and reject $-2$; the surviving arguments are $1$ and $5$.

(b) Let $u=e^x>0$. From $(u+3)(u-2)=0$, reject $u=-3$ and retain $u=2$, hence $x=\ln2$. The check is $4+2-6=0$.

</details>

</section>

<section class="lesson-check" markdown="1">

### Retry D {#retry-graphs}

<!-- task:retry-graphs -->

Let $f(x)=2+e^{-x}$ for real $x$. Sketch $f$, then find and sketch $f^{-1}$. State both domains, ranges, asymptotes and the intercepts that show their reflection relationship. If $g(x)=\ln x$, find $f(g(x))$ and its domain.

<!-- /task:retry-graphs -->

<details markdown="1">
<summary>Hint</summary>

First use $e^{-x}>0$. Rearrange before interchanging the variables; the inverse input must be in the original range.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The graph of $f$ decreases through $(0,3)$; as $x$ increases it approaches $y=2$ from above and has no $x$-intercept. Its domain is all real numbers and range $y>2$.

$$f^{-1}(x)=-\ln(x-2),\qquad x>2.$$

The inverse has all real outputs, decreases through $(3,0)$ and has vertical asymptote $x=2$, approached from the right. Its output tends to positive infinity there and to negative infinity as $x$ increases without bound. It has no $y$-intercept. The two curves reflect in $y=x$, swapping the intercepts and asymptotes. For the composite, $f(g(x))=2+e^{-\ln x}=2+1/x$, inheriting from $g$ the domain $x>0$. The simplified fraction exists for negative $x$, but those values are excluded from the original composite.

</details>

</section>

## Return later {#review}

After studying another topic, return with all help closed. Choose a method from the relationship itself and record the domain or boundary you checked.

<section class="lesson-check" markdown="1">

### Review task A {#later-review}

<!-- task:later-review -->

Find the real intersection of $y=\ln(5-e^x)$ and $y=x$. State the domain of the logarithmic expression and explain why there is exactly one intersection.

<!-- /task:later-review -->

<details markdown="1">
<summary>Hint</summary>

Use the inverse relationship only after finding where the logarithm exists. Monotonicity can establish uniqueness without differentiation.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The domain is $x<\ln5$. Exponentiating the equation gives $5-e^x=e^x$, so the intersection is

$$(x,y)=\big(\ln(5/2),\ln(5/2)\big).$$

It is in the domain and makes the argument $5/2>0$. On this domain the logarithmic curve decreases while the line increases, so they can meet at most once; the value found proves existence. Alternatively the injectivity of $e^x$ and $2e^x=5$ establish uniqueness. If positivity was missed, return to [original arguments](#natural-logarithms).

</details>

</section>

<section class="lesson-check" markdown="1">

### Review task B {#later-model}

<!-- task:later-model -->

A continuous model starts at $640$ units and halves every $3$ hours. Find when it first reaches $80$ units and the first whole hour when it is strictly below $80$. State the model and check the boundary.

<!-- /task:later-model -->

<details markdown="1">
<summary>Hint</summary>

A half-life of three hours fixes the factor for three hours, not one. Distinguish equality from a strict inequality.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$N(t)=640(1/2)^{t/3}$. Equality with $80$ gives $(1/2)^{t/3}=1/8$, so $t=9$ hours. The model is strictly decreasing, hence exactly when $t>9$ it is below $80$. The first whole hour is $10$; at $9$ the value is still exactly $80$, while at $10$ it is about $63.50$. For a time-unit error return to [model factors](#exponential-growth-and-decay); for equality at the boundary use [Retry A](#retry-model).

</details>

</section>

## Quick Reference {#quick-reference}

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

## Next step {#next-step}

If you can choose a model, state its limits and solve on the original domain without help, continue to [Differentiation](/alevel/a2-mathematics/differentiation/). Keep the graph/positivity connections available there. If a check fails, use [the matching recovery task](#repair), then revisit [the two review tasks](#review) after a gap.

<details id="lesson-sources" markdown="1">
<summary>Sources and scope</summary>

Scope: OxfordAQA 9660 MA03 P2.5, with P2.1 inverse/composite/graph connections, [specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf), printed pp21, 23. Preparation checked January 2025 MA03 Q10(b)(i), [QP pp18–19](https://aqamat.alevelclouds.com/25_01_QP_P2.pdf) and [MS p15](https://aqamat.alevelclouds.com/25_01_MS_P2.pdf), for forming an exponential quadratic and explicitly rejecting a negative exponential value. This does not verify every model or logarithm task against that question; these are independently checked self-written tasks. Original textbook locator: Chapter 4, Sections 4.1–4.4 and review, printed pp50–57; not rechecked against the book in this revision. Differential-equation derivations are in the later linked lesson.

</details>
