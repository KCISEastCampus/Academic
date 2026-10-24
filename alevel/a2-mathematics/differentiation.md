---
title: Differentiation
layout: subjects
mathjax: true
grade: a2
subject: a2-mathematics
permalink: /alevel/a2-mathematics/differentiation/
toc_headings: h2, h3
reading_layout: true
study_page: true
---

[Pure Mathematics](/alevel/a2-mathematics/) · P2.6 Differentiation

<div class="lesson-lead" markdown="1">

How steep is a curve at one point? How does its output change when its input changes a little? A derivative describes this rate of change. Learn how to choose a rule, then use the gradient to find tangents, perpendicular normals and points with horizontal tangents.

</div>

- **Learning:** start with [standard derivatives](#standard-derivatives), then study [products and quotients](#products-and-quotients), [composite functions](#composite-functions) and [implicit functions](#implicit-functions).
- **Homework help:** ask whether the final step adds, multiplies, divides, or feeds one result into another function. Keep the inputs allowed by the original function and use radians for trigonometric derivatives.
- **Revision:** try [practice](#practice) with solutions closed, then check the [quick reference](#quick-reference).

<div class="lesson-notes" markdown="1">

Textbook: Chapter 5, Sections 5.1–5.5 (printed pp. 58–71), with applications from the chapter review. Sections 5.6–5.7 cover parametric equations and their differentiation; see the [Parametric Equations lesson](/alevel/a2-mathematics/parametric-equations/).

**Start here:** read standard derivatives, then products and quotients. Example 3 explains its chain-rule step before the composite-functions section develops it further. Recover [power derivatives and point–gradient lines](/alevel/as-mathematics/differentiation/#l06), [derivative signs and stationary points](/alevel/as-mathematics/differentiation/#l07), [natural logarithms](/alevel/a2-mathematics/exponential-and-logarithmic-functions/#natural-logarithms) and [principal inverse-trigonometric ranges](/alevel/a2-mathematics/trigonometric-functions-and-formulae/#inverse-trigonometric-functions) if needed. For revision try the [independent mixed task](#check-mixed), recording any help used; return to [later review](#later-review) after studying parametric equations.

All examples, data scenarios and tasks are self-written, not official questions or measured data; no official marks are assigned. Hints and solutions open separately.

</div>

## Standard Derivatives {#standard-derivatives}

The slope between two points gives an average rate of change. The tangent's slope at one point gives the rate there: the **derivative**. It measures output change per unit of input near that point, rather than the height of the point. A positive derivative means the curve rises as the input increases; a negative derivative means it falls.

Use **radians** for the trigonometric formulae below. Check that the original function accepts the input and has a finite derivative there; this is what **differentiable** means. The domain column states the allowed inputs for these formulae.

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

When quantities are added, their rates of change add, so differentiate a sum term by term. A constant does not change, so its derivative is zero. Multiplying a quantity by a fixed number multiplies its rate by that same number.

The derivative of $e^x$ is itself. Since $y=\ln x$ means $x=e^y$, we have $\frac{dx}{dy}=e^y=x$, giving $\frac{dy}{dx}=\frac1x$ for $x>0$.

<section class="worked-example" markdown="1">

### Example 1 — A gradient at a given point {#example-1--a-gradient-at-a-given-point}

**Question:** Find the gradient of $y=2e^x+\ln x-3\cos x$ at $x=1$.

$$\frac{dy}{dx}=2e^x+\frac1x+3\sin x.$$

The three terms are added, so differentiate them separately. Keep the constant multipliers 2 and −3; the minus sign from differentiating cosine turns −3 into +3. To find the gradient, substitute the given input into the **derivative**. Substitution into the original function would give the point's height:

$$\boxed{m=2e+1+3\sin1=8.9610\ldots}.$$

**Check:** the point is in the domain $x>0$. The cosine derivative has a minus sign, so differentiating $-3\cos x$ gives $+3\sin x$.

</section>

## Products and Quotients {#products-and-quotients}

In a product, changing either factor affects the result. The instantaneous rate has two contributions: keep one factor's value and multiply by the other's rate, then swap their roles and add. For $y=uv$, where both $u$ and $v$ depend on $x$,

$$\frac{dy}{dx}=u\frac{dv}{dx}+v\frac{du}{dx}.$$

The derivative of a product is **not** the product of the two derivatives.

In a quotient, changes in either the numerator or denominator affect the result. An increasing denominator, for example, can make the quotient smaller. For $y=\frac uv$, with $v\ne0$, the **quotient rule** combines these effects:

$$\frac{dy}{dx}=\frac{v\frac{du}{dx}-u\frac{dv}{dx}}{v^2}.$$

Keep the numerator order: denominator times derivative of numerator, minus numerator times derivative of denominator.

<section class="worked-example" markdown="1">

### Example 2 — Derive the tangent derivative {#example-2--derive-the-tangent-derivative}

**Question:** Use the quotient rule to differentiate $\tan x$.

Use the known sine and cosine functions to write a quotient: $\tan x=\frac{\sin x}{\cos x}$. The numerator differentiates to cosine, and the denominator to negative sine. Put these into the quotient rule in order:

$$\begin{aligned}
\frac{d}{dx}(\tan x)
&=\frac{\cos x\cos x-\sin x(-\sin x)}{\cos^2 x}\\
&=\frac{\cos^2 x+\sin^2 x}{\cos^2 x}=\boxed{\sec^2 x}.
\end{aligned}$$

This holds for $\cos x\ne0$. The same quotient rule or chain rule can derive the other reciprocal derivatives in the table.

</section>

<section class="worked-example" markdown="1">

### Example 3 — Differentiate a product {#example-3--differentiate-a-product}

**Question:** Differentiate $y=x^2e^{3x}$.

Calculate the square and the exponential, then multiply them. Both factors change with the input, so use the product rule. The exponential itself takes two steps: multiply the input by 3, then raise e to that power. Write $v=e^w$, $w=3x$. The middle quantity changes at rate 3, so multiply the exponential's rate with respect to that quantity by 3. This is the **chain rule**: the rate with respect to $x$ equals the rate with respect to $w$ times the rate of $w$ with respect to $x$.

$$\frac{dv}{dx}=\frac{dv}{dw}\frac{dw}{dx}=e^w\times3=3e^{3x}.$$

Now set $u=x^2$, so $u^{\prime}=2x$. The first term comes from the square changing, with the exponential kept; the second comes from the exponential changing, with the square kept. Add, then factorise:

$$\boxed{\frac{dy}{dx}=2xe^{3x}+3x^2e^{3x}=xe^{3x}(2+3x)}.$$

**Check:** both terms are needed. At $x=0$, the derivative is zero; this does not mean the function is constant.

</section>

<section class="worked-example" markdown="1">

### Example 4 — Differentiate a quotient {#example-4--differentiate-a-quotient}

**Question:** Differentiate $y=\frac{\ln x}{x}$.

The logarithm accepts only positive inputs, so the domain is $x>0$. Two changing quantities are divided, so choose the quotient rule. With $u=\ln x$, $v=x$, the numerator's derivative is the reciprocal of its input, and the denominator's derivative is 1. Start with denominator times numerator's derivative, then subtract the other term:

$$\frac{dy}{dx}=\frac{x(\frac1x)-\ln x(1)}{x^2}=\boxed{\frac{1-\ln x}{x^2}}.$$

**Check:** writing $y=x^{-1}\ln x$ and applying the product rule gives the same answer. At $x=1$, the gradient is $1$.

**Choose before calculating:** simplifying a fraction or writing it as a product can be easier than using the quotient rule. For $y=\frac{x^2+1}{x}=x+\frac1x$, differentiation gives $1-\frac1{x^2}$ for $x\ne0$.

</section>

## Composite Functions {#composite-functions}

Some calculations first produce a result, then feed it into another function: square and add one, for example, then take a logarithm. This makes a **composite function**. The first calculation is called the inner function; the function receiving its result is the outer function. For $y=f(u)$ and $u=g(x)$, the **chain rule** gives

$$\frac{dy}{dx}=\frac{dy}{du}\frac{du}{dx}.$$

Multiply the output's rate with respect to the middle quantity by the middle quantity's rate with respect to the original input. In practice, differentiate the function receiving the result while keeping its whole input in place, then multiply by that input's derivative. Missing this factor treats the middle quantity as if it always changed at rate one.

Useful forms are

$$\frac{d}{dx}e^{g(x)}=e^{g(x)}g^{\prime}(x),$$

$$\frac{d}{dx}\ln g(x)=\frac{g^{\prime}(x)}{g(x)},\qquad g(x)>0,$$

$$\frac{d}{dx}[g(x)]^n=n[g(x)]^{n-1}g^{\prime}(x),$$

where the original power and the derivative are defined. For trigonometric functions, multiply by the inner derivative too: $\frac{d}{dx}\sin g(x)=\cos g(x)g^{\prime}(x)$.

<section class="worked-example" markdown="1">

### Example 5 — Two layers of differentiation {#example-5--two-layers-of-differentiation}

**Question:** Differentiate (a) $\ln(1+x^2)$ and (b) $\cos^3(2x)$.

**(a)** First calculate $1+x^2$, then take the natural logarithm of that result. The logarithm's derivative is the reciprocal of its input. Multiply by the input's derivative, 2x:

$$\boxed{\frac{d}{dx}\ln(1+x^2)=\frac{2x}{1+x^2}}.$$

The logarithm is defined for every real $x$ because $1+x^2>0$.

**(b)** Write $\cos^3(2x)=[\cos(2x)]^3$. The calculation is: double the input → take cosine → cube. Differentiate in reverse order: cubing gives 3 times the cosine squared, cosine gives negative sine, and doubling the input gives the factor 2:

$$\begin{aligned}
\frac{d}{dx}[\cos(2x)]^3
&=3\cos^2(2x)\big(-2\sin(2x)\big)\\
&=\boxed{-6\cos^2(2x)\sin(2x)}.
\end{aligned}$$

**Common mistake:** missing the factor $2$ from the inner angle. Also, $\cos^3(2x)$ is not $\cos(6x)$.

</section>

<section class="worked-example" markdown="1">

### Example 6 — When x is given in terms of y {#example-6--when-x-is-given-in-terms-of-y}

**Question:** Given $x=y^3+y$, find $\frac{dy}{dx}$ at $y=1$.

The equation directly gives the horizontal coordinate from the vertical one, so first differentiate with respect to $y$. This measures horizontal change per unit of vertical change:

$$\frac{dx}{dy}=3y^2+1.$$

The required gradient is vertical change divided by horizontal change, the reverse of the rate just found. Since that rate is non-zero, take its reciprocal:

$$\frac{dy}{dx}=\frac1{3y^2+1},\qquad \boxed{\left.\frac{dy}{dx}\right\vert _{y=1}=\frac14}.$$

**Check:** $y=1$ gives $x=2$, so the gradient belongs to the point $(2,1)$, not $(1,2)$. If $\frac{dx}{dy}=0$, this reciprocal formula cannot give a finite gradient; examine the curve before deciding the tangent's direction.

</section>

## Tangents, Normals and Stationary Points {#tangents-normals-and-stationary-points}

First consider a smooth part of a curve with one tangent direction at the point; corners and crossings need separate checks. At $(a,b)$, if the tangent gradient $m$ is finite, the point–gradient form gives

$$y-b=m(x-a).$$

For $m\ne0$, the normal has gradient $-\frac1m$. If the tangent is horizontal ($m=0$), the normal is the vertical line $x=a$. On a smooth curve, a vertical tangent has a horizontal normal.

A **stationary point** has a horizontal tangent, so $\frac{dy}{dx}=0$. Find both coordinates, not just its $x$ value. Moving left to right, a positive derivative means rising and a negative derivative means falling. Changes in the sign of $\frac{dy}{dx}$ therefore identify a peak or a trough. Alternatively, use the **second derivative**, which measures how the gradient changes:

- Positive to negative: local maximum.
- Negative to positive: local minimum.
- If $y^{\prime\prime}(a)>0$, a local minimum; if $y^{\prime\prime}(a)<0$, a local maximum.
- If $y^{\prime\prime}(a)=0$, the second derivative test is inconclusive. Use another method.

<section class="worked-example" markdown="1">

### Example 7 — Tangent, normal and a stationary point {#example-7--tangent-normal-and-a-stationary-point}

**Question:** For $y=xe^{-x}$, find the tangent and normal at $x=0$, then find and classify its stationary point.

The two factors are multiplied, so use the product rule. The first factor has derivative 1; the exponential first negates the input, so its derivative is the same exponential times −1. Combine the two terms for the first derivative. Differentiate again: apply the product rule to the exponential times one minus the input. Both factors now have negative derivatives; collect the terms for the second derivative:

$$y^{\prime}=e^{-x}(1-x),\qquad y^{\prime\prime}=e^{-x}(x-2).$$

At $x=0$, $y=0$ and $m=1$. Thus the tangent is $\boxed{y=x}$ and the normal is $\boxed{y=-x}$.

Since $e^{-x}>0$, $y^{\prime}=0$ only at $x=1$. The stationary point is $\boxed{(1,e^{-1})}$. Since $y^{\prime\prime}(1)=-e^{-1}<0$, it is a local maximum.

**Check:** $y^{\prime}>0$ for $x<1$ and $y^{\prime}<0$ for $x>1$, confirming the maximum. At this stationary point, the tangent is $y=e^{-1}$ and the normal is $x=1$.

</section>

## Implicit Functions {#implicit-functions}

Sometimes an equation mixes the horizontal coordinate $x$ and vertical coordinate $y$ without giving $y$ directly in terms of $x$. This is an **implicit relation**. As the horizontal coordinate changes along the curve, the vertical coordinate usually changes too. Wherever $y$ can locally be treated as a differentiable function of $x$, its rate must be included:

$$\frac{d}{dx}(y^2)=2y\frac{dy}{dx},\qquad\frac{d}{dx}(e^y)=e^y\frac{dy}{dx}.$$

After differentiating the square or exponential with respect to the vertical coordinate, multiply by that coordinate's rate of change: the chain rule. When the coordinates are multiplied, both change, so use the product rule. For example,

$$\frac{d}{dx}(xy)=y+x\frac{dy}{dx}.$$

Differentiate both sides, collect every $\frac{dy}{dx}$ term, then solve for the derivative. If its denominator is zero, check the original differentiated relation rather than treating the quotient as a finite gradient.

<section class="worked-example" markdown="1">

### Example 8 — An implicit tangent and normal {#example-8--an-implicit-tangent-and-normal}

**Question:** For $x^2+xy+y^2=7$, find $\frac{dy}{dx}$ and the tangent and normal at $(1,2)$.

Differentiate both sides term by term. Use the power rule for the horizontal coordinate squared, keep both product-rule terms for the mixed product, and multiply the derivative of the vertical coordinate squared by that coordinate's derivative. The constant on the right has derivative zero:

$$2x+y+x\frac{dy}{dx}+2y\frac{dy}{dx}=0.$$

Collect the two derivative terms and move the remaining terms to the other side:

$$(x+2y)\frac{dy}{dx}=-(2x+y).$$

$$\boxed{\frac{dy}{dx}=-\frac{2x+y}{x+2y}},\qquad x+2y\ne0.$$

At $(1,2)$, $m=-\frac45$. The tangent and normal are

$$\boxed{y-2=-\frac45(x-1)},\qquad\boxed{y-2=\frac54(x-1)}.$$

**Check:** $1+2+4=7$, so the point lies on the curve. The two gradients multiply to $-1$, and both lines pass through $(1,2)$.

**At a general point:** if $(a,b)$ lies on this curve, replace $x,y$ by $a,b$ in the gradient and use the point $(a,b)$. The tangent and normal can be written without division:

$$(2a+b)(x-a)+(a+2b)(y-b)=0\qquad\text{(tangent)},$$

$$(a+2b)(x-a)-(2a+b)(y-b)=0\qquad\text{(normal)}.$$

These forms also cover horizontal and vertical lines. Here $a^2+ab+b^2=7$, so the two coefficients cannot both be zero. Setting $a=1$, $b=2$ recovers the lines above.

</section>

<section class="worked-example" markdown="1">

### Example 9 — Derive an inverse trigonometric derivative {#example-9--derive-an-inverse-trigonometric-derivative}

**Question:** Given $y=\sin^{-1}x$, show that $\frac{dy}{dx}=\frac1{\sqrt{1-x^2}}$ for $-1<x<1$.

Write $\sin y=x$ and differentiate implicitly:

$$\cos y\frac{dy}{dx}=1.$$

Inverse sine returns an angle in the chosen range $-\frac\pi2\le y\le\frac\pi2$. Away from its endpoints, cosine is positive. Therefore take the positive square root when recovering cosine from its square:

$$\cos y=\sqrt{1-\sin^2 y}=\sqrt{1-x^2},$$

$$\boxed{\frac{dy}{dx}=\frac1{\sqrt{1-x^2}}},\qquad -1<x<1.$$

**Check:** the inverse function is defined at $x=\pm1$, but its derivative is not finite there. The function's domain and the derivative's domain can differ.

For $y=\cos^{-1}x$, write $\cos y=x$, giving $-\sin y\,y^{\prime}=1$. In the interior of the principal range, $0<y<\pi$ gives $\sin y=+\sqrt{1-x^2}$, so the derivative is negative. For $y=\tan^{-1}x$, write $\tan y=x$ to obtain $\sec^2 y\,y^{\prime}=1$; now $\sec^2 y=1+x^2>0$ determines the derivative. Thus

$$\frac{d}{dx}\cos^{-1}x=-\frac1{\sqrt{1-x^2}},\qquad -1<x<1,$$

$$\frac{d}{dx}\tan^{-1}x=\frac1{1+x^2},\qquad x\in\mathbb R.$$

Use the chain rule for a composite inverse function too.

Here inverse derivatives connect principal ranges with implicit differentiation; P2.6 does not separately list them as a derivative memorisation checklist.

</section>

## Practice {#practice}

Allow about **35–45 minutes**. Show the rule used, keep domains, and give exact gradients and line equations.

<section class="lesson-check" markdown="1">

### Question 1 {#q1--standard-and-reciprocal-derivatives}

Differentiate $3e^x-2\ln x+4\sin x$. Also differentiate $\sec(3x)$ and $\cot(2x)$, stating their domains.

<details markdown="1">
<summary>Hint</summary>

Differentiate the sum term by term. The other functions first multiply the input, then apply a trigonometric function; include the rate at which the angle changes.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The first derivative is $\boxed{3e^x-\frac2x+4\cos x}$ for $x>0$.

$$\boxed{\frac{d}{dx}\sec(3x)=3\sec(3x)\tan(3x)},\qquad\cos(3x)\ne0,$$

$$\boxed{\frac{d}{dx}\cot(2x)=-2\cosec^2(2x)},\qquad\sin(2x)\ne0.$$

The factors $3$ and $2$ are the rates at which the angles change. Differentiating $1/\cos(3x)$ and $\cos(2x)/\sin(2x)$ provides independent checks.

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 2 {#q2--product-and-tangent}

For $y=x\ln x$, find $\frac{dy}{dx}$ and the tangent at $x=1$.

<details markdown="1">
<summary>Hint</summary>

Use the product rule and find the point's $y$ coordinate before writing the line.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\boxed{y^{\prime}=\ln x+1},\qquad x>0.$$

At $x=1$, $y=0$ and $m=1$, so the tangent is $\boxed{y=x-1}$. It passes through $(1,0)$ with the required gradient.

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 3 {#q3--quotient}

Differentiate $y=\frac{e^x}{x+1}$ and state the domain.

<details markdown="1">
<summary>Hint</summary>

Use the quotient rule with denominator $x+1$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\boxed{y^{\prime}=\frac{(x+1)e^x-e^x}{(x+1)^2}=\frac{xe^x}{(x+1)^2}},\qquad x\ne-1.$$

The product form $e^x(x+1)^{-1}$ gives the same derivative.

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 4 {#q4--composite-functions}

Differentiate $e^{\sin x}$, $\ln(4-x^2)$ and $\sin^2(3x)$. State the logarithm's domain.

<details markdown="1">
<summary>Hint</summary>

Read each expression in calculation order, then differentiate starting with its last step. The last expression takes the sine of a triple angle, then squares the result.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\boxed{\frac{d}{dx}e^{\sin x}=e^{\sin x}\cos x},$$

$$\boxed{\frac{d}{dx}\ln(4-x^2)=-\frac{2x}{4-x^2}},\qquad -2<x<2,$$

$$\boxed{\frac{d}{dx}\sin^2(3x)=6\sin(3x)\cos(3x)=3\sin6x}.$$

The last equality uses the double angle formula. Although the rational expression in the second derivative exists outside $[-2,2]$, the original logarithm does not; retain $-2<x<2$.

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 5 {#q5--stationary-point-and-a-vertical-normal}

Find and classify the stationary point of $y=\ln x-x$, then give the normal there.

<details markdown="1">
<summary>Hint</summary>

Use $x>0$, solve $y^{\prime}=0$ and find $y^{\prime\prime}$. A zero tangent gradient needs a vertical normal.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$y^{\prime}=\frac1x-1=0$ gives $x=1$, and $y=-1$. Since $y^{\prime\prime}=-\frac1{x^2}<0$, $\boxed{(1,-1)}$ is a local maximum. The normal is $\boxed{x=1}$.

The derivative changes from positive to negative at $1$, confirming the classification. Do not try to calculate $-1/0$ as a finite normal gradient.

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 6 {#q6--reciprocal-derivative}

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

</section>

<section class="lesson-check" markdown="1">

### Question 7 {#q7--implicit-differentiation}

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

</section>

<section class="lesson-check" markdown="1">

### Question 8 {#q8--inverse-derivative-and-the-chain-rule}

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

</section>

<section class="lesson-check" markdown="1">

### Connect the ideas {#check-mixed}

<!-- task:check-mixed -->

**(a)** Differentiate the following function, state its domain and explain your first method choice.

$$f(x)=\frac{e^{x^2}}{x}.$$

**(b)** A curve has equation $x^2+2xy+3y^2=6$. At a general point $(a,b)$ on the curve, find equations of the tangent and normal that also work when the tangent is vertical. Justify that these equations determine lines.

<!-- /task:check-mixed -->

<details markdown="1">
<summary>Hint</summary>

In (a), look at how the final step combines the numerator and denominator; the numerator itself takes more than one step. In (b), collect the derivative terms before dividing by a number that might be zero.

</details>

<details markdown="1">
<summary>Solution and check</summary>

**(a)** The original domain is $x\ne0$. The quotient rule is suitable; its numerator also needs the chain rule, giving $(e^{x^2})^{\prime}=2xe^{x^2}$. Therefore

$$f^{\prime}(x)=\frac{x(2xe^{x^2})-e^{x^2}}{x^2}=\frac{e^{x^2}(2x^2-1)}{x^2}.$$

Differentiating $x^{-1}e^{x^2}$ as a product gives the same result.

**(b)** Termwise differentiation gives $2x+2y+2xy^{\prime}+6yy^{\prime}=0$, so $(a+b)+(a+3b)m=0$. Hence

$$(a+b)(x-a)+(a+3b)(y-b)=0\quad\text{(tangent)},$$

$$(a+3b)(x-a)-(a+b)(y-b)=0\quad\text{(normal)}.$$

Both pass through $(a,b)$ and their directions are perpendicular. If both coefficients vanished, $a=b=0$, contradicting the curve equation. When $a+3b=0$, the tangent is $x=a$ and the normal is $y=b$; no division by zero is needed.

</details>

</section>

## Repair and retry {#repair-and-retry}

Identify your error and revisit the linked reasoning. Close the previous answer before using the new task to check the repair; record whether you needed a hint.

**If you multiplied the derivatives or missed an inner factor:** revisit the two terms in [Example 3](#example-3--differentiate-a-product) and the layers in [composite functions](#composite-functions).

<section class="lesson-check" markdown="1">

### Try another pair {#retry-rules}

<!-- task:retry-rules -->

Differentiate $x^2\sin(1/x)$ and $(\ln x)/x^2$. State the original domains and show how you combine the rules.

<!-- /task:retry-rules -->

<details markdown="1">
<summary>Hint</summary>

Both contain more than one changing quantity. The first calculates $1/x$ before taking sine; the second can be rewritten as a product or differentiated as a quotient.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The product terms and inner derivative in the first give

$$\frac{d}{dx}[x^2\sin(1/x)]=2x\sin(1/x)+x^2\cos(1/x)(-x^{-2})=2x\sin(1/x)-\cos(1/x),\quad x\ne0.$$

Write the second as $x^{-2}\ln x$. Then

$$\frac{d}{dx}[x^{-2}\ln x]=-2x^{-3}\ln x+x^{-2}/x=\frac{1-2\ln x}{x^3},\quad x>0.$$

The quotient rule checks the second result. Simplification cannot enlarge the original logarithm domain.

</details>

</section>

**If you treated a zero denominator as a stationary point, or a zero second derivative as a classification:** revisit the undivided relation in [implicit functions](#implicit-functions) and the [stationary-point tests](#tangents-normals-and-stationary-points).

<section class="lesson-check" markdown="1">

### Check the lines at a point {#retry-geometry}

<!-- task:retry-geometry -->

**(a)** Find the tangent and normal to $x^2+y^2=9$ at $(3,0)$, explaining your reasoning.

**(b)** Find and classify the stationary point of $y=x^3$ and give its normal.

<!-- /task:retry-geometry -->

<details markdown="1">
<summary>Hint</summary>

In (a), use circle geometry or regard $x$ locally as a function of $y$; a formula assuming finite $dy/dx$ cannot be substituted at a vertical tangent. In (b), compare first-derivative signs on either side, then check whether the gradient switches between increasing and decreasing: a change in concavity.

</details>

<details markdown="1">
<summary>Solution and check</summary>

**(a)** Near $(3,0)$, use $x=\sqrt{9-y^2}$. Differentiating with respect to $y$ gives

$$\frac{dx}{dy}=-\frac{y}{\sqrt{9-y^2}},$$

which is zero at $y=0$. The curve moves in the $y$ direction there: the tangent is $x=3$ and the normal is $y=0$. The horizontal radius confirms the vertical tangent. The expression $-x/y$ is not finite here; a zero denominator is not a zero derivative.

**(b)** $y^{\prime}=3x^2=0$ gives $(0,0)$, but $y^{\prime\prime}(0)=0$ is inconclusive. On both sides $y^{\prime}>0$, so there is no change from increasing to decreasing or conversely. Also $y^{\prime\prime}=6x$ changes sign at $0$, confirming a stationary point of inflection; its normal is $x=0$.

</details>

</section>

**If an inverse derivative has the wrong sign or interval:** revisit the principal-range decision in [Example 9](#example-9--derive-an-inverse-trigonometric-derivative), distinguishing the function domain from its finite-derivative interval.

<section class="lesson-check" markdown="1">

### Change the input {#retry-inverse}

<!-- task:retry-inverse -->

Let $y=\cos^{-1}(2x-1)$. Derive $dy/dx$ from an implicit relation and state both the domain of $y$ and the interval where its derivative is finite.

<!-- /task:retry-inverse -->

<details markdown="1">
<summary>Hint</summary>

Write $\cos y=2x-1$. Inverse cosine returns an angle from 0 to π; use this range to choose the sign of $\sin y$, then use the Pythagorean identity.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The domain satisfies $-1\le2x-1\le1$, so $0\le x\le1$. In the interior $0<y<\pi$, hence $\sin y>0$. Implicit differentiation gives $-\sin y\,y^{\prime}=2$, so

$$y^{\prime}=-\frac{2}{\sqrt{1-(2x-1)^2}}=-\frac1{\sqrt{x(1-x)}},\qquad 0<x<1.$$

The function is defined at the endpoints, but its derivative is not finite there.

</details>

</section>

## Later review {#later-review-section}

After parametric equations, attempt this away from the demonstrations; compare your first attempt, help used and error causes.

<section class="lesson-check" markdown="1">

### Choose again {#later-review}

<!-- task:later-review -->

**(a)** For $y=x^2e^{-x}$, find all stationary points, classify them and give their normals.

**(b)** Differentiate $\ln(\sin x)$ and $\sin^{-1}(x/2)$, keeping the relevant domain restrictions.

<!-- /task:later-review -->

<details markdown="1">
<summary>Hint</summary>

Decide for yourself which calculation comes last in each expression. First-derivative signs classify (a); in (b), first check which inputs the original functions accept.

</details>

<details markdown="1">
<summary>Solution and check</summary>

**(a)** Product and chain rules give $y^{\prime}=xe^{-x}(2-x)$. Since $e^{-x}>0$, the signs are negative, positive, negative. Hence $(0,0)$ is a local minimum and $(2,4e^{-2})$ a local maximum. Their normals are $x=0$ and $x=2$ respectively.

**(b)**

$$\frac{d}{dx}\ln(\sin x)=\frac{\cos x}{\sin x}=\cot x,\qquad \sin x>0,$$

$$\frac{d}{dx}\sin^{-1}(x/2)=\frac1{\sqrt{4-x^2}},\qquad -2<x<2.$$

The latter function itself has domain $-2\le x\le2$. If an error returns, use the [rule retry](#retry-rules), [line retry](#retry-geometry) or [inverse retry](#retry-inverse), then record a fresh attempt without help.

</details>

</section>

## Quick Reference {#quick-reference}

| Task | Method | Check |
|---|---|---|
| Sum or constant multiple | Differentiate each term | Constants have derivative zero |
| Product | $u v^{\prime}+v u^{\prime}$ | Keep both terms |
| Quotient | $\frac{v u^{\prime}-u v^{\prime}}{v^2}$ | Keep numerator order and square the denominator |
| Composite function | Differentiate the receiving function, then multiply by its input's derivative | Keep the whole input in place in the first step |
| $x$ given in terms of $y$ | Find $dx/dy$, then take its reciprocal | $dx/dy$ must be non-zero for a finite result |
| Implicit function | Differentiate every term, then collect $dy/dx$ | $y$ terms need the chain rule; $xy$ needs the product rule |
| Tangent or normal | Find the point and gradient first | Treat horizontal and vertical lines separately |
| Stationary point | Solve $y^{\prime}=0$ and classify | Give both coordinates; $y^{\prime\prime}=0$ is inconclusive |

**If your answer looks wrong:** check the calculation order and whether you included each intermediate input's derivative, then check signs, radians, allowed inputs and point coordinates. A numerical difference check can reveal an error, but it does not replace a derivation.

**You should be able to:** select and combine differentiation rules, find line equations, classify stationary points and differentiate implicit and inverse functions.

**Learning path:** [Previous: Exponential and Logarithmic Functions](/alevel/a2-mathematics/exponential-and-logarithmic-functions/) · [Next: Parametric Equations](/alevel/a2-mathematics/parametric-equations/) · [Return to the Pure Mathematics topic index](/alevel/a2-mathematics/).


**Next step:** when you can complete the mixed task independently, continue to [parametric equations](/alevel/a2-mathematics/parametric-equations/), using the chain relationship for two parameter rates. Sources and scope: [9660 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf), P2.6; process requirements checked against January 2025 MA03 [QP](https://aqamat.alevelclouds.com/25_01_QP_P2.pdf) Q3, Q11 and the matching [MS](https://aqamat.alevelclouds.com/25_01_MS_P2.pdf). This page’s tasks remain self-written.
