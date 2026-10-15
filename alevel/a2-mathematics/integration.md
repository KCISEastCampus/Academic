---
title: Integration — Choosing a Method
layout: subjects
mathjax: true
grade: a2
subject: a2-mathematics
permalink: /alevel/a2-mathematics/integration/
toc_headings: h2
study_page: true
---

[Pure Mathematics](/alevel/a2-mathematics/) · P2.7 Integration

Choose a method, integrate, then check your answer by differentiation. The **integrand** is the function inside the integral sign.

- **Learning:** start with [choosing a method](#choose-a-method), then explain the choice in each [worked example](#worked-examples).
- **Homework help:** review [substitution](#example-3--rewrite-everything-in-the-new-variable), [integration by parts](#example-4--a-product-that-becomes-simpler) or [partial fractions](/alevel/a2-mathematics/partial-fractions/#integration).
- **Revision:** attempt [practice](#practice) with solutions closed, then use the [quick reference](#quick-reference).

Textbook: Chapter 6, Sections 6.1–6.4 (pp. 82–95). We write the constant of integration as $C$.

**Before you start:** you should know basic derivatives, the chain rule, how to rearrange expressions and standard integrals.

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

The table includes the standard forms from textbook Section 6.1. Use radians for trigonometric functions. Here $a\ne0$; each result applies on an interval where the integrand and answer are defined. Constants can differ on separate intervals.

| Integrand | Integral | Condition |
|---|---|---|
| $x^n$ | $\displaystyle\frac{x^{n+1}}{n+1}+C$ | $n\ne-1$ |
| $(ax+b)^n$ | $\displaystyle\frac{(ax+b)^{n+1}}{a(n+1)}+C$ | $n\ne-1$ |
| $e^{ax+b}$ | $\displaystyle\frac1a e^{ax+b}+C$ | All real $x$ |
| $\displaystyle\frac1{ax+b}$ | $\displaystyle\frac1a\ln\lvert ax+b\rvert+C$ | $ax+b\ne0$ |
| $\sin(ax+b)$ | $\displaystyle-\frac1a\cos(ax+b)+C$ | All real $x$ |
| $\cos(ax+b)$ | $\displaystyle\frac1a\sin(ax+b)+C$ | All real $x$ |
| $\sec^2(ax+b)$ | $\displaystyle\frac1a\tan(ax+b)+C$ | $\cos(ax+b)\ne0$ |

**Check the coefficient by differentiation.** For example,

$$\int\sec^2(2x-1)\,dx=\frac12\tan(2x-1)+C.$$

Differentiation multiplies by $2$, cancelling the factor $\frac12$. The same division by the inner coefficient is needed for the other linear arguments.

## Worked Examples

### Example 1 — Simplify before choosing

**Question:** Find $\displaystyle\int\frac{x^2+3x}{x}\,dx$ for $x\ne0$.

**Choice:** Cancel the common factor, then integrate the polynomial.

$$\frac{x^2+3x}{x}=x+3,\qquad x\ne0.$$

$$\int(x+3)\,dx=\boxed{\frac{x^2}{2}+3x+C}.$$

**Check:** Differentiation gives $x+3$, which equals the original integrand for $x\ne0$. The original expression is still undefined at $x=0$.

### Example 2 — Reverse the chain rule

**Question:** Find $\displaystyle\int6x(x^2+1)^2\,dx$.

**Choice:** Try $(x^2+1)^3$. Differentiate it to check the coefficient.

$$\frac{d}{dx}(x^2+1)^3=3(x^2+1)^2\cdot2x=6x(x^2+1)^2.$$

So

$$\int6x(x^2+1)^2\,dx=\boxed{(x^2+1)^3+C}.$$

**Check:** The derivative equals the integrand. The chain rule includes the derivative of $x^2+1$, which is $2x$.

### Example 3 — Rewrite everything in the new variable

**Question:** Find $\displaystyle\int x(x+2)^6\,dx$.

**Source:** Illustrative example in [OxfordAQA Mathematics (9660) specification, P2.7, printed p. 23](https://www.oxfordaqa.com/wp-content/uploads/2023/10/oxfordaqa-a-level-mathematics-specification.pdf). The solution is written for this site.

**Choice:** The derivative of $x+2$ is $1$, so the factor $x$ does not fit the standard form. Use the substitution $u=x+2$ to obtain a polynomial in $u$.

**Working:** $u=x+2$, so $x=u-2$ and $du=dx$.

$$\int x(x+2)^6\,dx=\int(u-2)u^6\,du=\int(u^7-2u^6)\,du.$$

Integrate, then substitute back:

$$\boxed{\frac{(x+2)^8}{8}-\frac{2(x+2)^7}{7}+C}.$$

**Check:** Differentiation gives

$$\begin{aligned}&(x+2)^7-2(x+2)^6\\&\qquad=(x+2)^6[(x+2)-2]\\&\qquad=x(x+2)^6.\end{aligned}$$

**Common mistake:** changing $(x+2)$ to $u$ but leaving the factor $x$ behind. After substitution, write every part in terms of $u$, including $dx$.

### Example 4 — A product that becomes simpler

**Question:** Find $\displaystyle\int xe^{2x}\,dx$.

**Choice:** Use integration by parts: differentiating $x$ gives $1$, and $e^{2x}$ is easy to integrate.

$$v=x,\qquad \frac{du}{dx}=e^{2x},\qquad \frac{dv}{dx}=1,\qquad u=\frac{e^{2x}}{2}.$$

Using $\displaystyle\int v\frac{du}{dx}\,dx=uv-\int u\frac{dv}{dx}\,dx$,

$$\int xe^{2x}\,dx=\frac{xe^{2x}}{2}-\frac12\int e^{2x}\,dx=\boxed{\frac{xe^{2x}}{2}-\frac{e^{2x}}{4}+C}.$$

**Check:** Differentiate both terms:

$$\left(\frac{e^{2x}}2+xe^{2x}\right)-\frac{e^{2x}}2=xe^{2x}.$$

**Common mistake:** using $u=e^{2x}$ instead of $\frac{e^{2x}}2$. Check $u$ by differentiation before using integration by parts.

**A logarithm can be treated as a product too.** To find $\int\ln x\,dx$ for $x>0$, write the integrand as $1\times\ln x$. Choose $v=\ln x$ and $du/dx=1$, so $dv/dx=1/x$ and $u=x$:

$$\int\ln x\,dx=x\ln x-\int1\,dx=\boxed{x\ln x-x+C}.$$

Differentiation gives $\ln x+1-1=\ln x$.

### Example 5 — A fraction does not always need partial fractions

**Question:** Find $\displaystyle\int\frac{2x+2}{x^2+2x-15}\,dx$.

**Choice:** The denominator's derivative is $2x+2$, exactly the numerator. Use the standard logarithm form.

$$\boxed{\ln\lvert x^2+2x-15\rvert+C}.$$

**Check:** The derivative of $\ln\lvert f(x)\rvert$ is $\frac{f'(x)}{f(x)}$ where $f(x)\ne0$. Use the result on an interval that does not include $x=-5$ or $x=3$.

If the numerator does not have this structure, [partial fractions](/alevel/a2-mathematics/partial-fractions/#integration) may help. Compare the degrees first. If you use algebraic division, include the quotient.

## Definite Integrals

**Check the interval first.** Before using $F(b)-F(a)$, check that the integrand is continuous from $a$ to $b$. In particular, check that the denominator is never zero.

### Example 6 — Change the limits with the variable

**Question:** Evaluate $\displaystyle\int_0^1 2x(x^2+1)^3\,dx$.

**Choice:** Let $u=x^2+1$, so $du=2x\,dx$. Change the limits too: $x=0$ gives $u=1$, and $x=1$ gives $u=2$.

$$\int_0^1 2x(x^2+1)^3\,dx=\int_1^2 u^3\,du=\left[\frac{u^4}{4}\right]_1^2=\boxed{\frac{15}{4}}.$$

**Check:** Integrating in terms of $x$ gives $\frac{(x^2+1)^4}{4}$. Substituting $x=1$ and $x=0$ gives the same result.

You may either use the new variable with new limits, or substitute back and use the original limits. Do not mix the two.

**Integral or area?** A definite integral gives signed area. To find the total area between a curve and the $x$-axis, split the interval where the curve crosses the axis. Add the positive areas. See the worked examples in [Area](/alevel/a2-mathematics/integration-applications/#area).

## Practice

**Independent practice · 20–25 minutes**

Write your method and a reason before you start. Check indefinite integrals by differentiation. Try each question before opening the hint or solution.

These are self-written exercises, not official past-paper questions. The time is only a guide for practice. These questions have no official marks.

### Q1 — Simplify first

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

### Q2 — Use the chain rule in reverse {#q2--recognise-an-inner-derivative}

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

### Q3 — Choose how to handle a product

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

$$\int x\cos(2x)\,dx=\frac{x\sin(2x)}2-\frac12\int\sin(2x)\,dx=\boxed{\frac{x\sin(2x)}2+\frac{\cos(2x)}4+C}.$$

Differentiation gives

$$\begin{aligned}&\frac12\sin(2x)+x\cos(2x)-\frac12\sin(2x)\\&\qquad=x\cos(2x).\end{aligned}$$

For the second integral, $u=x^2/2$ and $dv/dx=1/x$, so

$$\int x\ln x\,dx=\frac{x^2\ln x}{2}-\frac12\int x\,dx=\boxed{\frac{x^2\ln x}{2}-\frac{x^2}{4}+C}.$$

Differentiation gives $x\ln x+\frac x2-\frac x2=x\ln x$.

</details>

### Q4 — A logarithm or partial fractions?

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

### Q5 — Keep the variable and limits consistent

Evaluate $\displaystyle\int_0^1\frac{2x}{x^2+1}\,dx$.

<details markdown="1">
<summary>Hint</summary>

Use $u=x^2+1$, with $u=1$ and $u=2$ at the limits, or use the logarithm form directly.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The integrand is continuous on $[0,1]$. Substitution gives

$$\int_1^2\frac1u\,du=[\ln u]_1^2=\boxed{\ln2}.$$

Alternatively, $[\ln(x^2+1)]_0^1=\ln2$. The answer is positive, as expected because the integrand is non-negative.

</details>

## Quick Reference

| Method | Essential rule | Check before using it |
|---|---|---|
| Power rule | $\displaystyle\int x^n\,dx=\frac{x^{n+1}}{n+1}+C$ | $n\ne-1$; work on a domain where the integrand is defined |
| Chain rule in reverse | $\displaystyle\int g'(x)[g(x)]^n\,dx=\frac{[g(x)]^{n+1}}{n+1}+C$ | $n\ne-1$; include the derivative of $g(x)$ |
| Logarithm form | $\displaystyle\int\frac{f'(x)}{f(x)}\,dx=\ln\lvert f(x)\rvert+C$ | $f(x)\ne0$ on the interval |
| Integration by substitution | Write the whole integral in terms of the new variable. Change the limits for a definite integral. | Do not mix the old and new variables |
| Integration by parts | $\displaystyle\int v\frac{du}{dx}\,dx=uv-\int u\frac{dv}{dx}\,dx$ | The remaining integral should be simpler |
| Partial fractions | Divide if needed, decompose, then integrate each term | Include every power of a repeated factor and keep the quotient |

**If the derivative is wrong:** check the coefficient from the chain rule, the signs and any terms lost during substitution or algebraic division.

**After practice:** note the step you found difficult. Try the question again without the solution, then try a similar question.

**You should be able to:** choose a method and explain why, show your working, use the correct limits and check your answer.

Continue with [Trigonometric Integrals and Applications](/alevel/a2-mathematics/integration-applications/) for identities, area and volume of revolution. Open [Partial Fractions](/alevel/a2-mathematics/partial-fractions/) for a full lesson on expressing fractions in partial fractions, or use the [Integration formula reference](/alevel/a2-mathematics/quick-reference/#p27-integration) for standard results and area and volume formulas.

**Learning path:** [Previous: Parametric Equations](/alevel/a2-mathematics/parametric-equations/) · [Next: Integration — Trigonometric Integrals and Applications](/alevel/a2-mathematics/integration-applications/).
