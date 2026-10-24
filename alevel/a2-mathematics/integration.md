---
title: Integration — Choosing a Method
layout: subjects
mathjax: true
grade: a2
subject: a2-mathematics
permalink: /alevel/a2-mathematics/integration/
toc_headings: h2, h3
study_page: true
reading_layout: true
---

[Pure Mathematics](/alevel/a2-mathematics/) · P2.7 Integration
{: .lesson-meta}

Choose a method, integrate, then check your answer by differentiation. The **integrand** is the function inside the integral sign.
{: .lesson-lead}

- **Learning:** start with [choosing a method](#choose-a-method), then explain the choice in each [worked example](#worked-examples).
- **Homework help:** review [substitution](#substitution), [integration by parts](#integration-by-parts) or [partial fractions](/alevel/a2-mathematics/partial-fractions/#integration).
- **Revision:** attempt [practice](#practice) with solutions closed, then use the [quick reference](#quick-reference).
{: .lesson-routes}

<div class="lesson-notes" markdown="1">

Textbook: Chapter 6, Sections 6.1–6.4 (pp. 82–95). We write the constant of integration as $C$.

**Before you start:** recover [power integrals and signed area](/alevel/as-mathematics/integration/#l08), the [chain rule](/alevel/a2-mathematics/differentiation/#composite-functions), [product rule](/alevel/a2-mathematics/differentiation/#products-and-quotients) or [partial-fraction setup](/alevel/a2-mathematics/partial-fractions/#method) as needed. The [standard forms](#standard-integrals) below are taught here.

Examples 3–4 and the second integral in Q3 are specification examples. Later A is adapted from an examination question; the other examples and tasks are self-written. Solutions are written for this site.

</div>

## Choose a Method

**Simplify first.** Expand brackets, cancel common factors or write roots as powers. Then check whether you can use a standard integral. Keep any restrictions on the original domain.

| What you notice | Useful first move | Example |
|---|---|---|
| A sum of powers or standard functions | Integrate term by term | $\displaystyle x^2+\frac{1}{\sqrt{x}}$ |
| A function of a function, multiplied by the derivative of the inside function | Use the chain rule in reverse | $6x(x^2+1)^2$ |
| The numerator is a multiple of the denominator's derivative | Use the logarithm form | $\displaystyle \frac{2x}{x^2+1}$ |
| A substitution makes every part simpler | Use integration by substitution | $x(x+2)^6$, using $u=x+2$ |
| A product where differentiating one factor simplifies it | Try integration by parts | $xe^{2x}$ |
| A rational function with a factorisable denominator | Check the logarithm form first. If needed, use algebraic division and partial fractions. | $\displaystyle \frac{5}{(x+1)(x+2)}$ |
{: .wide-table}

More than one method may work. Choose a method that makes the integral simpler. If the question gives a substitution, use it.

**Try choosing before calculating:** compare these three integrals.

$$\int xe^{x^2}\,dx,\qquad \int xe^{2x}\,dx,\qquad \int \frac{2x}{x^2+1}\,dx.$$

<details markdown="1">
<summary>Reveal the method choices</summary>

- In $xe^{x^2}$, the derivative of $x^2$ is $2x$: use the chain rule in reverse, or use the substitution $u=x^2$.
- In $xe^{2x}$, differentiating $x$ simplifies it, and $e^{2x}$ is easy to integrate: use integration by parts.
- In $\frac{2x}{x^2+1}$, the numerator is exactly the denominator's derivative: use the logarithm form.

A product does not always need integration by parts.

</details>

## Standard Integrals

These are the standard forms from textbook Section 6.1. Use radians for trigonometric functions. Here $a\ne0$; each result applies on an interval where the integrand and answer are defined. Constants can differ on separate intervals.

### Powers and linear arguments {#power-integrals}

Both formulae require $n\ne-1$. With real powers, also check the original domain.

$$\int x^n\,dx=\frac{x^{n+1}}{n+1}+C.$$

$$\int (ax+b)^n\,dx=\frac{(ax+b)^{n+1}}{a(n+1)}+C.$$

### Exponential and logarithmic forms {#exponential-logarithmic-integrals}

The exponential form applies for all real $x$; the logarithmic form requires $ax+b\ne0$.

$$\int e^{ax+b}\,dx=\frac1a e^{ax+b}+C.$$

$$\int\frac1{ax+b}\,dx=\frac1a\ln\lvert ax+b\rvert+C.$$

### Trigonometric functions {#trigonometric-integrals}

The sine and cosine forms apply for all real $x$; the secant-squared form requires $\cos(ax+b)\ne0$.

$$\int\sin(ax+b)\,dx=-\frac1a\cos(ax+b)+C.$$

$$\int\cos(ax+b)\,dx=\frac1a\sin(ax+b)+C.$$

$$\int\sec^2(ax+b)\,dx=\frac1a\tan(ax+b)+C.$$

**Check the coefficient by differentiation.** For example,

$$\int\sec^2(2x-1)\,dx=\frac12\tan(2x-1)+C.$$

Differentiation multiplies by $2$, cancelling the factor $\frac12$. The same division by the inner coefficient is needed for the other linear arguments.

## Integration Methods and Examples {#worked-examples}

### Simplify and integrate term by term {#simplify-and-integrate}

Expand or cancel first, then use standard integrals. Retain the domain restrictions of the original expression.

<section class="worked-example" markdown="1">

#### Example 1 — Simplify before choosing

**Question:** Find $\displaystyle\int\frac{x^2+3x}{x}\,dx$ for $x\ne0$.

**Choice:** Cancel the common factor, then integrate the polynomial.

$$\frac{x^2+3x}{x}=x+3,\qquad x\ne0.$$

$$\int(x+3)\,dx=\boxed{\frac{x^2}{2}+3x+C}.$$

**Check:** Differentiation gives $x+3$, which equals the original integrand for $x\ne0$. The original expression is still undefined at $x=0$.

</section>

### Reverse the chain rule {#reverse-chain-rule}

Identify the inner function and its derivative. Try an antiderivative, then differentiate to determine the required coefficient.

<section class="worked-example" markdown="1">

#### Example 2 — Reverse the chain rule

**Question:** Find $\displaystyle\int6x(x^2+1)^2\,dx$.

**Choice:** Try $(x^2+1)^3$. Differentiate it to check the coefficient.

$$\frac{d}{dx}(x^2+1)^3=3(x^2+1)^2\cdot2x=6x(x^2+1)^2.$$

So

$$\int6x(x^2+1)^2\,dx=\boxed{(x^2+1)^3+C}.$$

**Check:** The derivative equals the integrand. The chain rule includes the derivative of $x^2+1$, which is $2x$.

</section>

### Integration by substitution {#substitution}

Choose a new variable that simplifies the integrand, find the differential relation and rewrite every factor and the differential in that variable. For an indefinite integral, substitute back afterwards.

<section class="worked-example" markdown="1">

#### Example 3 — Rewrite everything in the new variable

**Question:** Find $\displaystyle\int x(x+2)^6\,dx$.

**Source:** Illustrative example in [OxfordAQA Mathematics (9660) specification, P2.7, printed p. 23](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf). The solution is written for this site.

**Choice:** The derivative of $x+2$ is $1$, so the factor $x$ does not fit the standard form. Use the substitution $u=x+2$ to obtain a polynomial in $u$.

**Working:** $u=x+2$, so $x=u-2$ and $du=dx$.

$$\int x(x+2)^6\,dx=\int(u-2)u^6\,du=\int(u^7-2u^6)\,du.$$

Integrate, then substitute back:

$$\boxed{\frac{(x+2)^8}{8}-\frac{2(x+2)^7}{7}+C}.$$

**Check:** Differentiation gives

$$\begin{aligned}&(x+2)^7-2(x+2)^6\\&\qquad=(x+2)^6[(x+2)-2]\\&\qquad=x(x+2)^6.\end{aligned}$$

**Common mistake:** changing $(x+2)$ to $u$ but leaving the factor $x$ behind. After substitution, write every part in terms of $u$, including $dx$.

</section>

### Integration by parts {#integration-by-parts}

Rearranging the product rule gives the formula below. Choose one factor that becomes simpler on differentiation and another that is easy to integrate; the remaining integral should be easier to handle.

$$\int v\frac{du}{dx}\,dx=uv-\int u\frac{dv}{dx}\,dx.$$

<section class="worked-example" markdown="1">

#### Example 4 — A product that becomes simpler

**Question:** Find $\displaystyle\int xe^{2x}\,dx$.

**Source:** Illustrative example in the 9660 specification v5.2, P2.7, printed p. 23; site-written solution.

**Choice:** Use integration by parts: differentiating $x$ gives $1$, and $e^{2x}$ is easy to integrate.

$$v=x,\qquad \frac{du}{dx}=e^{2x},\qquad \frac{dv}{dx}=1,\qquad u=\frac{e^{2x}}{2}.$$

Substitute these expressions into the formula:

$$\int xe^{2x}\,dx=\frac{xe^{2x}}{2}-\frac12\int e^{2x}\,dx=\boxed{\frac{xe^{2x}}{2}-\frac{e^{2x}}{4}+C}.$$

**Check:** Differentiate both terms:

$$\left(\frac{e^{2x}}2+xe^{2x}\right)-\frac{e^{2x}}2=xe^{2x}.$$

**Common mistake:** using $u=e^{2x}$ instead of $\frac{e^{2x}}2$. Check $u$ by differentiation before using integration by parts.

</section>

#### Application: integrating a logarithm {#integrating-a-logarithm}

A logarithm can be treated as a product too. To find $\int\ln x\,dx$ for $x>0$, write the integrand as $1\times\ln x$. Choose $v=\ln x$ and $du/dx=1$, so $dv/dx=1/x$ and $u=x$:

$$\int\ln x\,dx=x\ln x-\int1\,dx=\boxed{x\ln x-x+C}.$$

Differentiation gives $\ln x+1-1=\ln x$.

### Recognise the logarithmic form {#logarithmic-form}

Compare the numerator with the derivative of the denominator. A constant-multiple relationship allows the logarithmic form. Check that the denominator is non-zero and use the result on a valid interval.

<section class="worked-example" markdown="1">

#### Example 5 — A fraction does not always need partial fractions

**Question:** Find $\displaystyle\int\frac{2x+2}{x^2+2x-15}\,dx$.

**Choice:** The denominator's derivative is $2x+2$, exactly the numerator. Use the standard logarithm form.

$$\boxed{\ln\lvert x^2+2x-15\rvert+C}.$$

**Check:** The derivative of $\ln\lvert f(x)\rvert$ is $\frac{f'(x)}{f(x)}$ where $f(x)\ne0$. Use the result on an interval that does not include $x=-5$ or $x=3$.

If the numerator does not have this structure, [partial fractions](/alevel/a2-mathematics/partial-fractions/#integration) may help. Compare the degrees first. If you use algebraic division, include the quotient.

</section>

## Definite Integrals

**Check the interval first.** Before using $F(b)-F(a)$, check that the integrand is continuous from $a$ to $b$. In particular, check that the denominator is never zero.

<section class="worked-example" markdown="1">

### Example 6 — Change the limits with the variable

**Question:** Evaluate $\displaystyle\int_0^1 2x(x^2+1)^3\,dx$.

**Choice:** Let $u=x^2+1$, so $du=2x\,dx$. Change the limits too: $x=0$ gives $u=1$, and $x=1$ gives $u=2$.

$$\int_0^1 2x(x^2+1)^3\,dx=\int_1^2 u^3\,du=\left[\frac{u^4}{4}\right]_1^2=\boxed{\frac{15}{4}}.$$

**Check:** Integrating in terms of $x$ gives $\frac{(x^2+1)^4}{4}$. Substituting $x=1$ and $x=0$ gives the same result.

You may either use the new variable with new limits, or substitute back and use the original limits. Do not mix the two.

</section>

**Integral or area?** A definite integral gives signed area. To find the total area between a curve and the $x$-axis, split the interval where the curve crosses the axis. Add the positive areas. See the worked examples in [Area](/alevel/a2-mathematics/integration-applications/#area).

## Practice

**Independent practice**

Write your method and a reason before you start. Check indefinite integrals by differentiation. Try each question before opening the hint or solution.

These teaching exercises have no official marks. Q3 includes one specification example, identified here; the other practice questions are self-written.

*The second integral is an illustrative example in the 9660 specification v5.2, P2.7, printed p. 23; the solution is site-written.*

<section class="lesson-check" markdown="1">

### Q1 — Find an antiderivative {#q1--simplify-first}

Find $\displaystyle\int\frac{x^2+4}{\sqrt{x}}\,dx$ for $x>0$.

<details markdown="1">
<summary>Hint</summary>

Rewrite the integrand as $x^{\frac32}+4x^{-\frac12}$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Use the power rule after simplifying:

$$\boxed{\frac25x^{\frac52}+8\sqrt{x}+C}.$$

Differentiation gives $x^{\frac32}+4x^{-\frac12}=\frac{x^2+4}{\sqrt{x}}$.

</details>

</section>

<section class="lesson-check" markdown="1">

### Q2 — Find and check {#q2--recognise-an-inner-derivative}

Find $\displaystyle\int x\cos(x^2)\,dx$.

<details markdown="1">
<summary>Hint</summary>

Differentiate $\sin(x^2)$. Which coefficient gives the required integrand?

</details>

<details markdown="1">
<summary>Solution and check</summary>

Recognition, or $u=x^2$, gives

$$\boxed{\frac12\sin(x^2)+C}.$$

Differentiation gives $\frac12\cos(x^2)\cdot2x=x\cos(x^2)$.

</details>

</section>

<section class="lesson-check" markdown="1">

### Q3 — Two integrals {#q3--choose-how-to-handle-a-product}

Find $\displaystyle\int x\cos(2x)\,dx$.

Also find $\displaystyle\int x\ln x\,dx$ for $x>0$.

<details markdown="1">
<summary>Hint</summary>

Compare this with Q2. The derivative of $2x$ does not supply $x$. Try integration by parts with $v=x$.

For the logarithmic product, choose $v=\ln x$ and $du/dx=x$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Choose $v=x$ and $\frac{du}{dx}=\cos(2x)$, so $\frac{dv}{dx}=1$ and $u=\frac12\sin(2x)$.

$$\begin{aligned}
\int x\cos(2x)\,dx
&=\frac{x\sin(2x)}2-\frac12\int\sin(2x)\,dx\\
&=\boxed{\frac{x\sin(2x)}2+\frac{\cos(2x)}4+C}.
\end{aligned}$$

Differentiation gives

$$\begin{aligned}&\frac12\sin(2x)+x\cos(2x)-\frac12\sin(2x)\\&\qquad=x\cos(2x).\end{aligned}$$

For the second integral, $u=x^2/2$ and $dv/dx=1/x$, so

$$\begin{aligned}
\int x\ln x\,dx
&=\frac{x^2\ln x}{2}-\frac12\int x\,dx\\
&=\boxed{\frac{x^2\ln x}{2}-\frac{x^2}{4}+C}.
\end{aligned}$$

Differentiation gives $x\ln x+\frac x2-\frac x2=x\ln x$.

</details>

</section>

<section class="lesson-check" markdown="1">

### Q4 — A rational integrand {#q4--a-logarithm-or-partial-fractions}

Find $\displaystyle\int\frac{5}{(x+1)(x+2)}\,dx$.

<details markdown="1">
<summary>Hint</summary>

The denominator is $x^2+3x+2$. Is its derivative a constant multiple of $5$? If not, decompose the fraction.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Partial fractions give $\frac{5}{x+1}-\frac{5}{x+2}$, since $5(x+2)-5(x+1)=5$.

$$\boxed{5\ln\lvert x+1\rvert-5\ln\lvert x+2\rvert+C}.$$

Differentiation recovers the decomposition. Use the result on an interval that does not include $x=-1$ or $x=-2$.

</details>

</section>

<section class="lesson-check" markdown="1">

### Q5 — An exact value {#q5--keep-the-variable-and-limits-consistent}

Using $u=x^2+1$, rewrite $\displaystyle\int_0^1\frac{x^3}{x^2+1}\,dx$ entirely in the new variable, giving the differential and both new limits. Then evaluate it exactly.

<details markdown="1">
<summary>Hint</summary>

Differentiate the substitution. Separate the numerator into the differential factor and a remaining factor, then express that remaining factor in the new variable.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The integrand is continuous on $[0,1]$. We have $du=2x\,dx$, $x\,dx=\frac12\,du$ and $x^2=u-1$. At $x=0$, $u=1$; at $x=1$, $u=2$. Thus

$$\begin{aligned}
\int_0^1\frac{x^3}{x^2+1}\,dx
&=\frac12\int_1^2\frac{u-1}{u}\,du\\
&=\frac12[u-\ln u]_1^2\\
&=\boxed{\frac{1-\ln2}{2}}.
\end{aligned}$$

The remaining numerator factor must also change variable; leaving it in the transformed integral would mix variables. For a check, $\frac{x^3}{x^2+1}=x-\frac{x}{x^2+1}$, which gives the same value directly. The result is positive, as required by the integrand.

</details>

</section>

## Diagnose and Try Again {#diagnose-and-retry}

Use the first incorrect step, rather than the final answer alone, to choose a recovery. Then close the worked solution before trying the corresponding new task.

| What went wrong? | Recover the decision | Check it independently |
| --- | --- | --- |
| Differentiation gives an extra inner-function factor | [Reverse the chain rule](#reverse-chain-rule): compare the actual inner derivative, not just the outside power | Retry A |
| A product was integrated by multiplying antiderivatives | [Integration by parts](#integration-by-parts): reverse the product rule and retain the remaining integral | Later A |
| A remaining factor or the original limits were left unchanged | [Substitution](#substitution) and [definite integrals](#definite-integrals): rewrite every factor and both endpoints | Retry C |
| Every fraction was treated as a logarithm, or a pole was crossed | [Logarithmic form](#logarithmic-form) and [partial fractions](/alevel/a2-mathematics/partial-fractions/#method); check the interval before [using limits](#definite-integrals) | Retry B |
{: .wide-table}

<section class="lesson-check" markdown="1">

### Retry A {#retry-a}

**Question:** Find $\displaystyle\int 2x\cos(3x^2)\,dx$. Justify your coefficient by differentiation.

<details markdown="1">
<summary>Hint</summary>

The derivative of $3x^2$ is $6x$. Compare this with the factor actually present.

</details>

<details markdown="1">
<summary>Solution and feedback</summary>

Let $u=3x^2$, so $du=6x\,dx$ and $2x\,dx=\frac13\,du$.

$$\int2x\cos(3x^2)\,dx=\frac13\int\cos u\,du=\boxed{\frac13\sin(3x^2)+C}.$$

Differentiating gives $\frac13\cos(3x^2)\cdot6x=2x\cos(3x^2)$. A coefficient of $1$ would give three times the integrand.

</details>

</section>

<section class="lesson-check" markdown="1">

### Retry B {#retry-b}

**Question:** Evaluate $\displaystyle\int_0^1\frac{3x+4}{(x+1)(x+2)}\,dx$ exactly. Would substituting $-3$ and $0$ into the same antiderivative correctly evaluate the integral over $[-3,0]$? Explain.

<details markdown="1">
<summary>Hint</summary>

Compare $3x+4$ with the derivative of the expanded denominator. If necessary find the two partial-fraction coefficients. Check both intervals separately.

</details>

<details markdown="1">
<summary>Solution and feedback</summary>

The numerator is not a constant multiple of $2x+3$. Instead,

$$\frac{3x+4}{(x+1)(x+2)}=\frac1{x+1}+\frac2{x+2}.$$

The integrand is continuous on $[0,1]$, so

$$\begin{aligned}
\int_0^1\frac{3x+4}{(x+1)(x+2)}\,dx
&=[\ln(x+1)+2\ln(x+2)]_0^1\\
&=\ln2+2\ln3-2\ln2\\
&=\boxed{\ln(9/2)}.
\end{aligned}$$

Over $[-3,0]$ there are undefined points at $x=-2$ and $x=-1$. The ordinary continuous-interval rule cannot be applied across them. Subtracting endpoint values is not a valid evaluation. An antiderivative on each separate interval does not remove the original poles.

If the coefficients are wrong, recombine the fractions before integrating. If only the second part is wrong, recover the interval check rather than repeating the algebra.

</details>

</section>

<section class="lesson-check" markdown="1">

### Retry C {#retry-c}

**Question:** Using $u=x^2+1$, rewrite $\displaystyle\int_0^{\sqrt3}\frac{2x^3}{(x^2+1)^2}\,dx$ entirely in terms of $u$, including the differential and both new limits. Then evaluate it exactly.

<details markdown="1">
<summary>Hint</summary>

After finding the differential, identify the remaining numerator factor. Transform both endpoints separately.

</details>

<details markdown="1">
<summary>Solution and feedback</summary>

$$du=2x\,dx,\qquad x^2=u-1,\qquad x=0\Rightarrow u=1,\qquad x=\sqrt3\Rightarrow u=4.$$

Therefore

$$\begin{aligned}
\int_0^{\sqrt3}\frac{2x^3}{(x^2+1)^2}\,dx
&=\int_1^4\frac{u-1}{u^2}\,du\\
&=\int_1^4(u^{-1}-u^{-2})\,du\\
&=\left[\ln u+\frac1u\right]_1^4\\
&=\boxed{\ln4-\frac34}.
\end{aligned}$$

The differential, every factor and both limits now use the same variable. A remaining numerator factor calls for [Example 3](#example-3--rewrite-everything-in-the-new-variable); old limits call for [Example 6](#example-6--change-the-limits-with-the-variable). Close the example before reconstructing this transformation.

</details>

</section>

## Return to These Later {#later-review}

After studying integration applications or differential equations, return with these solutions closed. Explain your method before calculating; these teaching tasks have no official marks. Use the course [mixed review](/alevel/a2-mathematics/#mixed-review) for choices across chapters.

<section class="lesson-check" markdown="1">

### Later A {#later-a}

*Adapted from January 2025 MA03 Q8: the logarithm argument has been changed. No official marks are assigned to this adaptation.*

**Question:** Find the exact value of $\displaystyle\int_0^1\ln(3x+1)\,dx$.

<details markdown="1">
<summary>Hint</summary>

You can change to the argument of the logarithm first, or apply integration by parts directly. Show how you deal with the remaining integral and the limits.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The logarithm is defined throughout $[0,1]$. With $u=3x+1$, $dx=du/3$ and limits $1,4$,

$$\begin{aligned}
\int_0^1\ln(3x+1)\,dx
&=\frac13\int_1^4\ln u\,du\\
&=\frac13\left([u\ln u]_1^4-\int_1^4 1\,du\right)\\
&=\frac13[u\ln u-u]_1^4\\
&=\boxed{\frac{4\ln4-3}{3}}.
\end{aligned}$$

For integration by parts, the differentiated factor is $\ln u$ and the integrated factor is $1$. At the lower limit, $u\ln u-u$ contributes $-1$, not $0$. Differentiating $(3x+1)\ln(3x+1)/3-(3x+1)/3$ recovers the integrand. A correct direct-parts solution with consistent original limits is equally valid.

</details>

</section>

<section class="lesson-check" markdown="1">

### Later B {#later-b}

**Question:** Find $\displaystyle\int\frac{x^2}{\sqrt{x^3+1}}\,dx$ on $x>-1$. Explain why the power-rule exception for exponent $-1$ does not apply here.

<details markdown="1">
<summary>Hint</summary>

Rewrite the denominator as a power. Can a new variable account for the factor $x^2\,dx$?

</details>

<details markdown="1">
<summary>Solution and check</summary>

Let $u=x^3+1>0$, so $du=3x^2\,dx$:

$$\int\frac{x^2}{\sqrt{x^3+1}}\,dx
=\frac13\int u^{-1/2}\,du
=\boxed{\frac23\sqrt{x^3+1}+C}.$$

The exponent in the new variable is $-\frac12$, not $-1$, so the power rule applies. Differentiation gives $\frac23\cdot\frac12(x^3+1)^{-1/2}\cdot3x^2$, the required integrand. The substitution map is monotone; the zero derivative at $x=0$ does not invalidate this primitive, which the direct derivative check also confirms.

</details>

</section>

## Quick Reference

| Method | Essential rule | Check before using it |
|---|---|---|
| Power rule | $\displaystyle\int x^n\,dx=\frac{x^{n+1}}{n+1}+C$ | $n\ne-1$; work on a domain where the integrand is defined |
| Chain rule in reverse | $\displaystyle\int g'(x)[g(x)]^n\,dx=\frac{[g(x)]^{n+1}}{n+1}+C$ | $n\ne-1$; include the derivative of $g(x)$ |
| Logarithm form | $\displaystyle\int\frac{f'(x)}{f(x)}\,dx=\ln\lvert f(x)\rvert+C$ | $f(x)\ne0$ on the interval |
| Integration by substitution | Write the whole integral in terms of the new variable. Change the limits for a definite integral. | Do not mix the old and new variables |
| Integration by parts | $\displaystyle\int v\frac{du}{dx}\,dx=uv-\int u\frac{dv}{dx}\,dx$ | The remaining integral should be simpler |
| Partial fractions | Divide if needed, decompose, then integrate each term | Include every power of a repeated factor and keep the quotient |
{: .wide-table}

**If the derivative is wrong:** check the coefficient from the chain rule, the signs and any terms lost during substitution or algebraic division.

**After practice:** use [diagnosis and retry](#diagnose-and-retry), then return to the [later tasks](#later-review) after studying another topic.

**You should be able to:** choose a method and explain why, show your working, use the correct limits and check your answer.

Continue with [Trigonometric Integrals and Applications](/alevel/a2-mathematics/integration-applications/) for identities, area and volume of revolution. Open [Partial Fractions](/alevel/a2-mathematics/partial-fractions/) for a full lesson on expressing fractions in partial fractions, or use the [Integration formula reference](/alevel/a2-mathematics/quick-reference/#p27-integration) for standard results and area and volume formulas.


<details markdown="1">
<summary>Sources and scope</summary>

This lesson covers method choices in P2.7 of the [9660 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf), printed p. 23. Trigonometric identities, areas and volumes continue in the next lesson.

The January 2025 MA03 [question paper](https://aqamat.alevelclouds.com/25_01_QP_P2.pdf) Q8 and [mark scheme](https://aqamat.alevelclouds.com/25_01_MS_P2.pdf), p. 13, were consulted for integration-by-parts working, algebra and limits. These are official-authored papers hosted on a third-party mirror. Later A changes the logarithm argument and is labelled as an adapted teaching task. The original Q8 marks have not been assigned to this adaptation.

</details>

**Learning path:** [Previous: Parametric Equations](/alevel/a2-mathematics/parametric-equations/) · [Next: Integration — Trigonometric Integrals and Applications](/alevel/a2-mathematics/integration-applications/).
