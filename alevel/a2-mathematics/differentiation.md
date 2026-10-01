---
title: Differentiation
layout: subjects
mathjax: true
grade: a2
subject: a2-mathematics
permalink: /alevel/a2-mathematics/differentiation/
toc_headings: h2
study_page: true
---

[Pure Mathematics](/alevel/a2-mathematics/) · P2.6 Differentiation

Choose a differentiation rule, find gradients and use them for tangents, normals and stationary points.

- **Learning:** start with [standard derivatives](#standard-derivatives), then study [products and quotients](#products-and-quotients), [composite functions](#composite-functions) and [implicit functions](#implicit-functions).
- **Homework help:** identify the outer operation before choosing a rule. Keep the original domain and use radians for trigonometric derivatives.
- **Revision:** try [practice](#practice) with solutions closed, then check the [quick reference](#quick-reference).

Textbook: Chapter 5, Sections 5.1–5.5 (printed pp. 58–71), with applications from the chapter review. Sections 5.6–5.7 cover parametric equations and their differentiation; see the [Parametric Equations lesson](/alevel/a2-mathematics/parametric-equations/).

**Before you start:** you should know polynomial differentiation, gradients, straight-line equations, [exponential and logarithmic functions](/alevel/a2-mathematics/exponential-and-logarithmic-functions/) and [trigonometric functions and formulae](/alevel/a2-mathematics/trigonometric-functions-and-formulae/).

All worked examples and practice questions are self-written, not official past-paper questions. The suggested practice time is a guide; no official marks are assigned.

## Standard Derivatives

Use **radians** for the trigonometric formulae below. Each derivative applies where the original function is defined and differentiable.

| $y$ | $\frac{dy}{dx}$ | Domain restriction |
|---|---|---|
| $e^x$ | $e^x$ | All real $x$ |
| $\ln x$ | $\frac1x$ | $x>0$ |
| $\sin x$ | $\cos x$ | All real $x$ |
| $\cos x$ | $-\sin x$ | All real $x$ |
| $\tan x$ | $\sec^2 x$ | $\cos x\ne0$ |
| $\sec x$ | $\sec x\tan x$ | $\cos x\ne0$ |
| $\cosec x$ | $-\cosec x\cot x$ | $\sin x\ne0$ |
| $\cot x$ | $-\cosec^2 x$ | $\sin x\ne0$ |

Differentiate sums term by term. Constants have derivative zero; constant multiples stay outside the derivative.

The derivative of $e^x$ is itself. Since $y=\ln x$ means $x=e^y$, we have $\frac{dx}{dy}=e^y=x$, giving $\frac{dy}{dx}=\frac1x$ for $x>0$.

### Example 1 — A gradient at a given point

**Question:** Find the gradient of $y=2e^x+\ln x-3\cos x$ at $x=1$.

$$\frac{dy}{dx}=2e^x+\frac1x+3\sin x.$$

Substitute into the **derivative**, not the original function:

$$\boxed{m=2e+1+3\sin1=8.9610\ldots}.$$

**Check:** the point is in the domain $x>0$. The cosine derivative has a minus sign, so differentiating $-3\cos x$ gives $+3\sin x$.

## Products and Quotients

For $y=uv$, where both $u$ and $v$ are functions of $x$,

$$\frac{dy}{dx}=u\frac{dv}{dx}+v\frac{du}{dx}.$$

The derivative of a product is **not** the product of the two derivatives.

For $y=\frac uv$, with $v\ne0$,

$$\frac{dy}{dx}=\frac{v\frac{du}{dx}-u\frac{dv}{dx}}{v^2}.$$

Keep the numerator order: denominator times derivative of numerator, minus numerator times derivative of denominator.

### Example 2 — Derive the tangent derivative

**Question:** Use the quotient rule to differentiate $\tan x$.

Write $\tan x=\frac{\sin x}{\cos x}$. Then

$$\begin{aligned}
\frac{d}{dx}(\tan x)
&=\frac{\cos x\cos x-\sin x(-\sin x)}{\cos^2 x}\\
&=\frac{\cos^2 x+\sin^2 x}{\cos^2 x}=\boxed{\sec^2 x}.
\end{aligned}$$

This holds for $\cos x\ne0$. The same quotient rule or chain rule can derive the other reciprocal derivatives in the table.

### Example 3 — Differentiate a product

**Question:** Differentiate $y=x^2e^{3x}$.

Set $u=x^2$, $v=e^{3x}$. Their derivatives are $2x$ and $3e^{3x}$ respectively; the second uses the chain rule.

$$\boxed{\frac{dy}{dx}=2xe^{3x}+3x^2e^{3x}=xe^{3x}(2+3x)}.$$

**Check:** both terms are needed. At $x=0$, the derivative is zero; this does not mean the function is constant.

### Example 4 — Differentiate a quotient

**Question:** Differentiate $y=\frac{\ln x}{x}$.

The domain is $x>0$. With $u=\ln x$, $v=x$,

$$\frac{dy}{dx}=\frac{x(\frac1x)-\ln x(1)}{x^2}=\boxed{\frac{1-\ln x}{x^2}}.$$

**Check:** writing $y=x^{-1}\ln x$ and applying the product rule gives the same answer. At $x=1$, the gradient is $1$.

**Choose before calculating:** simplifying a fraction or writing it as a product can be easier than using the quotient rule. For $y=\frac{x^2+1}{x}=x+\frac1x$, differentiation gives $1-\frac1{x^2}$ for $x\ne0$.

## Composite Functions

For $y=f(u)$ and $u=g(x)$, the **chain rule** gives

$$\frac{dy}{dx}=\frac{dy}{du}\frac{du}{dx}.$$

Differentiate the outer function, keep its input unchanged, then multiply by the derivative of the inner function.

Useful forms are

$$\frac{d}{dx}e^{g(x)}=e^{g(x)}g'(x),$$

$$\frac{d}{dx}\ln g(x)=\frac{g'(x)}{g(x)},\qquad g(x)>0,$$

$$\frac{d}{dx}[g(x)]^n=n[g(x)]^{n-1}g'(x),$$

where the original power and the derivative are defined. For trigonometric functions, multiply by the inner derivative too: $\frac{d}{dx}\sin g(x)=\cos g(x)g'(x)$.

### Example 5 — Two layers of differentiation

**Question:** Differentiate (a) $\ln(1+x^2)$ and (b) $\cos^3(2x)$.

**(a)** The outer function is a logarithm and the inner function is $1+x^2$:

$$\boxed{\frac{d}{dx}\ln(1+x^2)=\frac{2x}{1+x^2}}.$$

The logarithm is defined for every real $x$ because $1+x^2>0$.

**(b)** Write $\cos^3(2x)=[\cos(2x)]^3$:

$$\begin{aligned}
\frac{d}{dx}[\cos(2x)]^3
&=3\cos^2(2x)\big(-2\sin(2x)\big)\\
&=\boxed{-6\cos^2(2x)\sin(2x)}.
\end{aligned}$$

**Common mistake:** missing the factor $2$ from the inner angle. Also, $\cos^3(2x)$ is not $\cos(6x)$.

### Example 6 — When x is given in terms of y

**Question:** Given $x=y^3+y$, find $\frac{dy}{dx}$ at $y=1$.

Differentiate with respect to $y$:

$$\frac{dx}{dy}=3y^2+1.$$

Since this is non-zero,

$$\frac{dy}{dx}=\frac1{3y^2+1},\qquad \boxed{\left.\frac{dy}{dx}\right|_{y=1}=\frac14}.$$

**Check:** $y=1$ gives $x=2$, so the gradient belongs to the point $(2,1)$, not $(1,2)$. If $\frac{dx}{dy}=0$, this reciprocal formula cannot give a finite gradient; examine the curve before deciding the tangent's direction.

## Tangents, Normals and Stationary Points

At a regular point $(a,b)$ with finite tangent gradient $m$, the tangent is

$$y-b=m(x-a).$$

For $m\ne0$, the normal has gradient $-\frac1m$. If the tangent is horizontal ($m=0$), the normal is the vertical line $x=a$. At a regular point with a vertical tangent, the normal is horizontal.

A **stationary point** has $\frac{dy}{dx}=0$. Find its coordinates, not just its $x$ value. Use a sign change in $\frac{dy}{dx}$ or the second derivative to classify it:

- Positive to negative: local maximum.
- Negative to positive: local minimum.
- If $y^{\prime\prime}(a)>0$, a local minimum; if $y^{\prime\prime}(a)<0$, a local maximum.
- If $y^{\prime\prime}(a)=0$, the second derivative test is inconclusive. Use another method.

### Example 7 — Tangent, normal and a stationary point

**Question:** For $y=xe^{-x}$, find the tangent and normal at $x=0$, then find and classify its stationary point.

The product and chain rules give

$$y'=e^{-x}(1-x),\qquad y^{\prime\prime}=e^{-x}(x-2).$$

At $x=0$, $y=0$ and $m=1$. Thus the tangent is $\boxed{y=x}$ and the normal is $\boxed{y=-x}$.

Since $e^{-x}>0$, $y'=0$ only at $x=1$. The stationary point is $\boxed{(1,e^{-1})}$. Since $y^{\prime\prime}(1)=-e^{-1}<0$, it is a local maximum.

**Check:** $y'>0$ for $x<1$ and $y'<0$ for $x>1$, confirming the maximum. At this stationary point, the tangent is $y=e^{-1}$ and the normal is $x=1$.

## Implicit Functions

An equation may relate $x$ and $y$ without giving $y$ explicitly in terms of $x$. Treat $y$ as a function of $x$ when differentiating locally:

$$\frac{d}{dx}(y^2)=2y\frac{dy}{dx},\qquad\frac{d}{dx}(e^y)=e^y\frac{dy}{dx}.$$

For a mixed product, use the product rule. For example,

$$\frac{d}{dx}(xy)=y+x\frac{dy}{dx}.$$

Differentiate both sides, collect every $\frac{dy}{dx}$ term, then solve for the derivative. If its denominator is zero, check the original differentiated relation rather than treating the quotient as a finite gradient.

### Example 8 — An implicit tangent and normal

**Question:** For $x^2+xy+y^2=7$, find $\frac{dy}{dx}$ and the tangent and normal at $(1,2)$.

Differentiate term by term:

$$2x+y+x\frac{dy}{dx}+2y\frac{dy}{dx}=0.$$

Hence

$$\boxed{\frac{dy}{dx}=-\frac{2x+y}{x+2y}},\qquad x+2y\ne0.$$

At $(1,2)$, $m=-\frac45$. The tangent and normal are

$$\boxed{y-2=-\frac45(x-1)},\qquad\boxed{y-2=\frac54(x-1)}.$$

**Check:** $1+2+4=7$, so the point lies on the curve. The two gradients multiply to $-1$, and both lines pass through $(1,2)$.

**At a general point:** if $(a,b)$ lies on this curve, replace $x,y$ by $a,b$ in the gradient and use the point $(a,b)$. The tangent and normal can be written without division:

$$(2a+b)(x-a)+(a+2b)(y-b)=0\qquad\text{(tangent)},$$

$$(a+2b)(x-a)-(2a+b)(y-b)=0\qquad\text{(normal)}.$$

These forms also cover horizontal and vertical lines. Here $a^2+ab+b^2=7$, so the two coefficients cannot both be zero. Setting $a=1$, $b=2$ recovers the lines above.

### Example 9 — Derive an inverse trigonometric derivative

**Question:** Given $y=\sin^{-1}x$, show that $\frac{dy}{dx}=\frac1{\sqrt{1-x^2}}$ for $-1<x<1$.

Write $\sin y=x$ and differentiate implicitly:

$$\cos y\frac{dy}{dx}=1.$$

Because the inverse range is $-\frac\pi2\le y\le\frac\pi2$, cosine is positive in the interior. Thus

$$\cos y=\sqrt{1-\sin^2 y}=\sqrt{1-x^2},$$

$$\boxed{\frac{dy}{dx}=\frac1{\sqrt{1-x^2}}},\qquad -1<x<1.$$

**Check:** the inverse function is defined at $x=\pm1$, but its derivative is not finite there. The function's domain and the derivative's domain can differ.

Similarly, the basic inverse derivatives are

$$\frac{d}{dx}\cos^{-1}x=-\frac1{\sqrt{1-x^2}},\qquad -1<x<1,$$

$$\frac{d}{dx}\tan^{-1}x=\frac1{1+x^2},\qquad x\in\mathbb R.$$

Use the chain rule for a composite inverse function too.

## Practice

Allow about **35–45 minutes**. Show the rule used, keep domains, and give exact gradients and line equations.

### Q1 — Standard and reciprocal derivatives

Differentiate $3e^x-2\ln x+4\sin x$. Also differentiate $\sec(3x)$ and $\cot(2x)$, stating their domains.

<details markdown="1">
<summary>Hint</summary>

Differentiate the sum term by term. The reciprocal functions need an inner-angle factor.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The first derivative is $\boxed{3e^x-\frac2x+4\cos x}$ for $x>0$.

$$\boxed{\frac{d}{dx}\sec(3x)=3\sec(3x)\tan(3x)},\qquad\cos(3x)\ne0,$$

$$\boxed{\frac{d}{dx}\cot(2x)=-2\cosec^2(2x)},\qquad\sin(2x)\ne0.$$

The factors $3$ and $2$ come from the inner angles. Differentiating $1/\cos(3x)$ and $\cos(2x)/\sin(2x)$ provides independent checks.

</details>

### Q2 — Product and tangent

For $y=x\ln x$, find $\frac{dy}{dx}$ and the tangent at $x=1$.

<details markdown="1">
<summary>Hint</summary>

Use the product rule and find the point's $y$ coordinate before writing the line.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\boxed{y'=\ln x+1},\qquad x>0.$$

At $x=1$, $y=0$ and $m=1$, so the tangent is $\boxed{y=x-1}$. It passes through $(1,0)$ with the required gradient.

</details>

### Q3 — Quotient

Differentiate $y=\frac{e^x}{x+1}$ and state the domain.

<details markdown="1">
<summary>Hint</summary>

Use the quotient rule with denominator $x+1$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\boxed{y'=\frac{(x+1)e^x-e^x}{(x+1)^2}=\frac{xe^x}{(x+1)^2}},\qquad x\ne-1.$$

The product form $e^x(x+1)^{-1}$ gives the same derivative.

</details>

### Q4 — Composite functions

Differentiate $e^{\sin x}$, $\ln(4-x^2)$ and $\sin^2(3x)$. State the logarithm's domain.

<details markdown="1">
<summary>Hint</summary>

Identify each outer function. For the last expression, the square is outside the sine.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\boxed{\frac{d}{dx}e^{\sin x}=e^{\sin x}\cos x},$$

$$\boxed{\frac{d}{dx}\ln(4-x^2)=-\frac{2x}{4-x^2}},\qquad -2<x<2,$$

$$\boxed{\frac{d}{dx}\sin^2(3x)=6\sin(3x)\cos(3x)=3\sin6x}.$$

The last equality uses the double angle formula. Although the rational expression in the second derivative exists outside $[-2,2]$, the original logarithm does not; retain $-2<x<2$.

</details>

### Q5 — Stationary point and a vertical normal

Find and classify the stationary point of $y=\ln x-x$, then give the normal there.

<details markdown="1">
<summary>Hint</summary>

Use $x>0$, solve $y'=0$ and find $y^{\prime\prime}$. A zero tangent gradient needs a vertical normal.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$y'=\frac1x-1=0$ gives $x=1$, and $y=-1$. Since $y^{\prime\prime}=-\frac1{x^2}<0$, $\boxed{(1,-1)}$ is a local maximum. The normal is $\boxed{x=1}$.

The derivative changes from positive to negative at $1$, confirming the classification. Do not try to calculate $-1/0$ as a finite normal gradient.

</details>

### Q6 — Reciprocal derivative

For $x=y^2+2y$, find $\frac{dy}{dx}$ at $y=1$ and the tangent there.

<details markdown="1">
<summary>Hint</summary>

Find $dx/dy$ first. The given value is a $y$ coordinate.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$\frac{dx}{dy}=2y+2$, so $\frac{dy}{dx}=\frac1{2y+2}$ for $y\ne-1$. At $y=1$, the point is $(3,1)$ and the gradient is $\frac14$.

The tangent is $\boxed{y-1=\frac14(x-3)}$. It passes through $(3,1)$. At $y=-1$, the original curve has a vertical tangent at $(-1,-1)$, so the reciprocal expression cannot be used as a finite gradient there.

</details>

### Q7 — Implicit differentiation

For $x^2+xy+y^2=3$, find the tangent and normal at $(1,1)$.

<details markdown="1">
<summary>Hint</summary>

Apply the product rule to $xy$, then collect all $dy/dx$ terms.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\frac{dy}{dx}=-\frac{2x+y}{x+2y}.$$

At $(1,1)$, the gradient is $-1$. The tangent is $\boxed{y-1=-(x-1)}$ and the normal is $\boxed{y=x}$.

The point satisfies $1+1+1=3$; both lines pass through it and their gradients multiply to $-1$.

</details>

### Q8 — Inverse derivative and the chain rule

Use implicit differentiation to derive the derivative of $y=\tan^{-1}x$. Hence differentiate $\tan^{-1}(2x)$. Also differentiate $\sin^{-1}(3x)$ and state where its derivative is finite.

<details markdown="1">
<summary>Hint</summary>

Write $\tan y=x$, differentiate, and use $\sec^2 y=1+\tan^2 y$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$\sec^2 y\frac{dy}{dx}=1$, so $\boxed{\frac{dy}{dx}=\frac1{1+x^2}}$ for real $x$.

$$\boxed{\frac{d}{dx}\tan^{-1}(2x)=\frac2{1+4x^2}},$$

$$\boxed{\frac{d}{dx}\sin^{-1}(3x)=\frac3{\sqrt{1-9x^2}}},\qquad -\frac13<x<\frac13.$$

The sine inverse itself is defined at $x=\pm\frac13$, but its derivative is not finite there. At $x=0$, the two composite derivatives are $2$ and $3$, matching the inner factors.

</details>

## Quick Reference

| Task | Method | Check |
|---|---|---|
| Sum or constant multiple | Differentiate each term | Constants have derivative zero |
| Product | $u v'+v u'$ | Keep both terms |
| Quotient | $\frac{v u'-u v'}{v^2}$ | Keep numerator order and square the denominator |
| Composite function | Outer derivative times inner derivative | Keep the input unchanged in the outer derivative |
| $x$ given in terms of $y$ | Find $dx/dy$, then take its reciprocal | $dx/dy$ must be non-zero for a finite result |
| Implicit function | Differentiate every term, then collect $dy/dx$ | $y$ terms need the chain rule; $xy$ needs the product rule |
| Tangent or normal | Find the point and gradient first | Treat horizontal and vertical lines separately |
| Stationary point | Solve $y'=0$ and classify | Give both coordinates; $y^{\prime\prime}=0$ is inconclusive |

**If your answer looks wrong:** check the outer operation, inner derivative, signs, radians, original domain and point coordinates. A numerical difference check can reveal an error, but it does not replace a derivation.

**You should be able to:** select and combine differentiation rules, find line equations, classify stationary points and differentiate implicit and inverse functions.

**Learning path:** [Previous: Exponential and Logarithmic Functions](/alevel/a2-mathematics/exponential-and-logarithmic-functions/) · [Next: Parametric Equations](/alevel/a2-mathematics/parametric-equations/) · [Return to the Pure Mathematics topic index](/alevel/a2-mathematics/).
