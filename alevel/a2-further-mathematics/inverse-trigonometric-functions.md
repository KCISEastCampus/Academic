---
title: Calculus of Inverse Trigonometric Functions
layout: subjects
mathjax: true
grade: a2
subject: a2-further-mathematics
permalink: /alevel/a2-further-mathematics/inverse-trigonometric-functions/
toc_headings: h2
study_page: true
---

[Further Pure Mathematics](/alevel/a2-further-mathematics/) · FP2.7 The calculus of inverse trigonometrical functions

Choose the correct value of an inverse trigonometric function. Differentiate related functions and use standard integrals after scaling or completing the square.

- **Learning:** start with the [method](#method), then work through the examples.
- **Homework help:** choose [values and graphs](#values-and-graphs), [differentiation](#differentiation), [standard integrals](#standard-integrals), [completing the square](#completing-the-square), [definite integrals](#definite-integrals) or [integration by parts](#integration-by-parts).
- **Revision:** try [practice](#practice) before opening the solutions, then use the [quick reference](#quick-reference).

Textbook: Chapter 22, Sections 22.1–22.2, printed pp. 270–279; review and practice on pp. 280–281, in *International A Level Further Mathematics*.

**Before you start:** review [trigonometric functions](/alevel/a2-mathematics/trigonometric-functions-and-formulae/), [differentiation](/alevel/a2-mathematics/differentiation/) and [integration](/alevel/a2-mathematics/integration/). You should know the chain rule, completing the square, substitution and integration by parts. For an undefined endpoint, review [improper integrals](/alevel/a2-further-mathematics/series-and-limits/#improper-integrals). Use **radians** throughout.

## Method

**Learning goal:** state domains and ranges, sketch inverse trigonometric graphs, differentiate composite functions and find exact integrals using inverse sine or inverse tangent.

- **An inverse function value?** Use the stated range to choose one angle. A calculator gives the principal value, not every solution of a trigonometric equation.
- **A derivative?** Identify the inner function $u$, use the inverse-function derivative and multiply by $\frac{\mathrm du}{\mathrm dx}$.
- **A reciprocal quadratic?** Check whether the denominator has real roots. Use partial fractions for distinct real roots; use inverse tangent when completing the square gives a sum of squares.
- **A square root in the denominator?** Complete the square, then look for $\sqrt{a^2-u^2}$. Keep all factors outside the integral and check where the square root is positive.
- **A definite integral?** Change the limits when you substitute, or return to $x$ before using the original limits. Show a limit if the integrand is undefined at an endpoint.
- **The inverse function itself?** Try integration by parts with $u$ equal to that function and $\mathrm dv=\mathrm dx$.

**Check your working:** show the completed square, the substitution and its derivative, the standard integral, and the substitution of limits. For a “show that” question, obtain the stated result from your working. Keep $+C$ in an indefinite integral.

## Values and Graphs

Here $\sin^{-1}x$, $\cos^{-1}x$ and $\tan^{-1}x$ mean **inverse functions**. They are also written $\operatorname{arcsin}x$, $\operatorname{arccos}x$ and $\operatorname{arctan}x$.

For example, $y=\sin^{-1}x$ means $\sin y=x$, with $-\frac\pi2\le y\le\frac\pi2$. It does **not** mean $\frac1{\sin x}$; that reciprocal is $\operatorname{cosec}x$.

| Function | Domain: allowed $x$ | Range: returned angle $y$ |
|---|---|---|
| $y=\sin^{-1}x$ | $-1\le x\le1$ | $-\frac\pi2\le y\le\frac\pi2$ |
| $y=\cos^{-1}x$ | $-1\le x\le1$ | $0\le y\le\pi$ |
| $y=\tan^{-1}x$ | All real $x$ | $-\frac\pi2<y<\frac\pi2$ |

Restrict the original trigonometric function to an interval where it is one-to-one, then reflect its graph in $y=x$:

- For inverse sine, use $y=\sin x$ on $-\frac\pi2\le x\le\frac\pi2$.
- For inverse cosine, use $y=\cos x$ on $0\le x\le\pi$.
- For inverse tangent, use $y=\tan x$ on $-\frac\pi2<x<\frac\pi2$.

![Three inverse trigonometric graphs: inverse sine through minus one, minus pi over two and one, pi over two; inverse cosine from minus one, pi to one, zero; inverse tangent through the origin with horizontal asymptotes y equals plus and minus pi over two](/assets/img/further-inverse-trig-graphs.svg)

Inverse sine and inverse tangent are increasing and pass through $(0,0)$ with gradient $1$. Inverse cosine is decreasing, passes through $(0,\frac\pi2)$ with gradient $-1$, and has endpoints $(-1,\pi)$ and $(1,0)$.

The inverse tangent graph has horizontal asymptotes $y=\pm\frac\pi2$; it never reaches them. Inverse sine and inverse cosine include $x=\pm1$, but do not have a finite derivative there.

### Example 1 — Choose the angle in the correct range

**Question:** find $\sin^{-1}(-\frac12)$, $\cos^{-1}(-\frac{\sqrt3}{2})$ and $\tan^{-1}(-1)$. If $\sin^{-1}x=\frac{2\pi}{5}$, find $\cos^{-1}x$.

Use the ranges in the table:

$$\boxed{\begin{aligned}
\sin^{-1}\left(-\frac12\right)&=-\frac\pi6,\\
\cos^{-1}\left(-\frac{\sqrt3}{2}\right)&=\frac{5\pi}{6},\\
\tan^{-1}(-1)&=-\frac\pi4.
\end{aligned}}$$

For $-1\le x\le1$,

$$\sin^{-1}x+\cos^{-1}x=\frac\pi2.$$

Thus

$$\boxed{\cos^{-1}x=\frac\pi2-\frac{2\pi}{5}=\frac\pi{10}.}$$

**Check:** substitute each angle into the corresponding trigonometric function and check its range. For instance, $\frac{7\pi}{6}$ also has sine $-\frac12$, but is outside the range of inverse sine.

**Common mistake:** assuming $\sin^{-1}(\sin\theta)=\theta$ for every angle. It holds when $\theta$ is in the range of inverse sine; otherwise choose the angle in that range with the same sine.

## Differentiation

The standard derivatives are

$$\boxed{\begin{aligned}
\frac{\mathrm d}{\mathrm dx}\sin^{-1}x
&=\frac1{\sqrt{1-x^2}},\\
\frac{\mathrm d}{\mathrm dx}\cos^{-1}x
&=-\frac1{\sqrt{1-x^2}},\\
\frac{\mathrm d}{\mathrm dx}\tan^{-1}x
&=\frac1{1+x^2}.
\end{aligned}}$$

The inverse sine and inverse cosine derivatives apply for $-1<x<1$. The inverse tangent derivative applies for every real $x$.

<details markdown="1">
<summary>Why these derivatives have these signs</summary>

If $y=\sin^{-1}x$, then $\sin y=x$. Differentiate implicitly:

$$\cos y\frac{\mathrm dy}{\mathrm dx}=1.$$

For $-1<x<1$, $-\frac\pi2<y<\frac\pi2$, so $\cos y>0$. Hence

$$\begin{aligned}
\frac{\mathrm dy}{\mathrm dx}
&=\frac1{\cos y}\\
&=\frac1{\sqrt{1-\sin^2y}}\\
&=\frac1{\sqrt{1-x^2}}.
\end{aligned}$$

If $y=\cos^{-1}x$, then $\cos y=x$ and

$$-\sin y\frac{\mathrm dy}{\mathrm dx}=1.$$

Now $0<y<\pi$, so $\sin y>0$, giving $\frac{\mathrm dy}{\mathrm dx}=-\frac1{\sqrt{1-x^2}}$.

If $y=\tan^{-1}x$, then $\tan y=x$. Therefore

$$\sec^2y\frac{\mathrm dy}{\mathrm dx}=1.$$

Therefore

$$\begin{aligned}
\frac{\mathrm dy}{\mathrm dx}
&=\frac1{1+\tan^2y}\\
&=\frac1{1+x^2}.
\end{aligned}$$

</details>

For a differentiable inner function $u=u(x)$, the chain rule gives

$$\boxed{\begin{aligned}
\frac{\mathrm d}{\mathrm dx}\sin^{-1}u
&=\frac{u'}{\sqrt{1-u^2}},\\
\frac{\mathrm d}{\mathrm dx}\cos^{-1}u
&=-\frac{u'}{\sqrt{1-u^2}},\\
\frac{\mathrm d}{\mathrm dx}\tan^{-1}u
&=\frac{u'}{1+u^2}.
\end{aligned}}$$

The first two formulae apply where $-1<u<1$. The third applies wherever $u$ is defined and differentiable.

### Example 2 — An inverse cosine and its tangent

**Question:** differentiate $y=\cos^{-1}(2x-1)$. Find the tangent at $x=\frac12$.

The function is defined when $-1\le2x-1\le1$, so $0\le x\le1$. For $0<x<1$,

$$\begin{aligned}
\frac{\mathrm dy}{\mathrm dx}
&=-\frac2{\sqrt{1-(2x-1)^2}}\\
&=-\frac2{\sqrt{4x-4x^2}}\\
&=\boxed{-\frac1{\sqrt{x(1-x)}}}.
\end{aligned}$$

At $x=\frac12$, $y=\cos^{-1}0=\frac\pi2$ and the gradient is $-2$. Thus the tangent is

$$\boxed{y-\frac\pi2=-2\left(x-\frac12\right).}$$

**Check:** the derivative is negative throughout $0<x<1$, so the graph is decreasing. The endpoints belong to the function's domain, but not to the domain of this derivative formula.

### Example 3 — More than one chain-rule step

**Question:** differentiate $y=(\sin^{-1}2x)^3$ and $z=\tan^{-1}(\frac{x}{1+x^2})$.

For $y$, differentiate the cube, then the inverse sine, then $2x$:

$$\begin{aligned}
\frac{\mathrm dy}{\mathrm dx}
&=3(\sin^{-1}2x)^2\frac2{\sqrt{1-4x^2}}\\
&=\boxed{\frac{6(\sin^{-1}2x)^2}{\sqrt{1-4x^2}}}.
\end{aligned}$$

This derivative formula applies for $-\frac12<x<\frac12$.

For $z$, put $u=\frac{x}{1+x^2}$. The quotient rule gives

$$u'=\frac{1+x^2-2x^2}{(1+x^2)^2}
=\frac{1-x^2}{(1+x^2)^2}.$$

Therefore

$$\begin{aligned}
\frac{\mathrm dz}{\mathrm dx}
&=\frac{\frac{1-x^2}{(1+x^2)^2}}
{1+\frac{x^2}{(1+x^2)^2}}\\
&=\frac{1-x^2}{(1+x^2)^2+x^2}\\
&=\boxed{\frac{1-x^2}{x^4+3x^2+1}}.
\end{aligned}$$

This derivative is defined for every real $x$, since its denominator is positive.

**Check:** $z'(0)=1$, and $z'$ is zero at $x=\pm1$. For $y$, omitting the derivative of $2x$ would halve the answer.

## Standard Integrals

For $a>0$,

$$\boxed{\int\frac{\mathrm dx}{\sqrt{a^2-x^2}}
=\sin^{-1}\left(\frac xa\right)+C.}$$

The first integrand is real and defined for $-a<x<a$.

$$\boxed{\int\frac{\mathrm dx}{a^2+x^2}
=\frac1a\tan^{-1}\left(\frac xa\right)+C.}$$

The first result can also be written $-\cos^{-1}(\frac xa)+C$. The two forms differ by a constant.

**Notice the coefficient:** the inverse tangent integral has $\frac1a$ outside; the inverse sine integral does not. Differentiate the result if you are unsure.

### Example 4 — Keep the scale factor

**Question:** find $\displaystyle\int\frac{\mathrm dx}{16+25x^2}$ and $\displaystyle\int\frac{\mathrm dx}{\sqrt{25-4x^2}}$.

In the first integral, put $u=5x$, so $\mathrm du=5\,\mathrm dx$:

$$\begin{aligned}
&\int\frac{\mathrm dx}{16+25x^2}\\
&=\frac15\int\frac{\mathrm du}{4^2+u^2}\\
&=\frac15\cdot\frac14\tan^{-1}\left(\frac u4\right)+C\\
&=\boxed{\frac1{20}\tan^{-1}\left(\frac{5x}{4}\right)+C}.
\end{aligned}$$

In the second integral, put $u=2x$, so $\mathrm du=2\,\mathrm dx$:

$$\begin{aligned}
&\int\frac{\mathrm dx}{\sqrt{25-4x^2}}\\
&=\frac12\int\frac{\mathrm du}{\sqrt{5^2-u^2}}\\
&=\boxed{\frac12\sin^{-1}\left(\frac{2x}{5}\right)+C}.
\end{aligned}$$

The second integrand is real and defined for $-\frac52<x<\frac52$.

**Check:** the derivatives of the answers are

$$\frac1{20}\frac{5/4}{1+(5x/4)^2}
=\frac1{16+25x^2},$$

$$\frac12\frac{2/5}{\sqrt{1-(2x/5)^2}}
=\frac1{\sqrt{25-4x^2}}.$$

**Common mistake:** taking $25$ outside a square root without taking its square root. For instance, $\sqrt{25-4x^2}=5\sqrt{1-(2x/5)^2}$.

## Completing the Square

For a reciprocal quadratic $\frac1{ax^2+bx+c}$ with $a\ne0$, the discriminant helps you choose a method:

| Discriminant $b^2-4ac$ | Denominator | Method |
|---|---|---|
| Positive | Two distinct real linear factors | Partial fractions, usually giving logarithms |
| Zero | A repeated real linear factor | Rewrite as a negative power and integrate |
| Negative | No real linear factors | Complete the square and use inverse tangent |

For a square root, aim for $\sqrt{a^2-u^2}$ with $a>0$. A square root of a **sum** of squares uses a different method, covered in the hyperbolic functions lesson.

### Example 5 — A reciprocal quadratic with no real roots

**Question:** find $\displaystyle\int\frac{\mathrm dx}{x^2+6x+25}$.

Complete the square:

$$x^2+6x+25=(x+3)^2+16.$$

Put $u=x+3$, so $\mathrm du=\mathrm dx$. Then

$$\begin{aligned}
&\int\frac{\mathrm dx}{x^2+6x+25}\\
&=\int\frac{\mathrm du}{u^2+4^2}\\
&=\boxed{\frac14\tan^{-1}\left(\frac{x+3}{4}\right)+C}.
\end{aligned}$$

**Check:** differentiating gives

$$\frac14\frac{1/4}{1+((x+3)/4)^2}
=\frac1{(x+3)^2+16}.$$

The denominator is positive for every real $x$.

**Check the numerator too.** If it is the derivative of the denominator, use a logarithm instead. For example,

$$\begin{aligned}
&\int\frac{2x+6}{x^2+6x+25}\,\mathrm dx\\
&=\ln(x^2+6x+25)+C.
\end{aligned}$$

### Example 6 — A quadratic inside a square root

**Question:** find $\displaystyle\int\frac{\mathrm dx}{\sqrt{11-8x-4x^2}}$ and state where the integrand is real and defined.

Complete the square:

$$11-8x-4x^2=15-4(x+1)^2.$$

Put $u=2(x+1)$, so $\mathrm du=2\,\mathrm dx$:

$$\begin{aligned}
&\int\frac{\mathrm dx}{\sqrt{11-8x-4x^2}}\\
&=\frac12\int\frac{\mathrm du}{\sqrt{15-u^2}}\\
&=\boxed{\frac12\sin^{-1}\left(\frac{2(x+1)}{\sqrt{15}}\right)+C}.
\end{aligned}$$

The denominator must be positive, so $4(x+1)^2<15$. Hence

$$\boxed{-1-\frac{\sqrt{15}}2<x<-1+\frac{\sqrt{15}}2.}$$

**Check:** differentiating the answer gives $\frac1{\sqrt{15-4(x+1)^2}}$. The bounds are strict because the denominator is zero at either endpoint.

## Definite Integrals

For a substitution $u=g(x)$, write the new limits explicitly. Do not use an $x$-limit in an antiderivative written in $u$.

### Example 7 — An undefined endpoint with a finite integral

**Question:** evaluate $\displaystyle\int_0^2\frac{\mathrm dx}{\sqrt{4-x^2}}$.

The integrand is undefined at $x=2$, so this is an improper integral. Replace the upper bound by $b<2$, then take a limit:

$$\begin{aligned}
I
&=\lim_{b\to2^-}\int_0^b\frac{\mathrm dx}{\sqrt{4-x^2}}\\
&=\lim_{b\to2^-}\left[\sin^{-1}\left(\frac x2\right)\right]_0^b\\
&=\lim_{b\to2^-}\sin^{-1}\left(\frac b2\right)\\
&=\boxed{\frac\pi2}.
\end{aligned}$$

**Check:** the inverse sine is continuous at $1$, and $\sin^{-1}1=\frac\pi2$. An undefined integrand at an endpoint does not automatically make an integral divergent.

For a regular integral with a scale factor,

$$\begin{aligned}
&\int_0^1\frac{\mathrm dx}{\sqrt{4-3x^2}}\\
&=\frac1{\sqrt3}\left[\sin^{-1}\left(\frac{\sqrt3\,x}{2}\right)\right]_0^1\\
&=\frac1{\sqrt3}\left(\frac\pi3-0\right)
=\boxed{\frac\pi{3\sqrt3}}.
\end{aligned}$$

## Integration by Parts

When the integrand is $\sin^{-1}x$ or $\tan^{-1}x$ itself, the standard reciprocal integrals do not apply directly. Use

$$\int u\,\mathrm dv=uv-\int v\,\mathrm du.$$

Choose the inverse trigonometric function as $u$ and $\mathrm dv=\mathrm dx$, so $v=x$.

### Example 8 — Integrate inverse tangent itself

**Question:** find $\displaystyle\int\tan^{-1}x\,\mathrm dx$.

Put $u=\tan^{-1}x$ and $\mathrm dv=\mathrm dx$. Then $\mathrm du=\frac{\mathrm dx}{1+x^2}$ and $v=x$:

$$\begin{aligned}
&\int\tan^{-1}x\,\mathrm dx\\
&=x\tan^{-1}x-\int\frac{x}{1+x^2}\,\mathrm dx\\
&=\boxed{x\tan^{-1}x-\frac12\ln(1+x^2)+C}.
\end{aligned}$$

The last integral uses the substitution $w=1+x^2$, with $\mathrm dw=2x\,\mathrm dx$.

**Check:** by the product rule,

$$\begin{aligned}
&\frac{\mathrm d}{\mathrm dx}
\left(x\tan^{-1}x-\frac12\ln(1+x^2)\right)\\
&=\tan^{-1}x+\frac{x}{1+x^2}-\frac{x}{1+x^2}\\
&=\tan^{-1}x.
\end{aligned}$$

## Practice

Try each question before opening the hint or solution. Questions 1–5 are **original practice written for this lesson**. Questions 6–8 retain the AQA wording and marks reproduced in the supplied textbook. Their solutions have been independently checked and compared with official mark schemes.

### Question 1 — Principal values and a graph

Find $\sin^{-1}(\sin\frac{5\pi}{6})$, $\cos^{-1}(\cos\frac{7\pi}{6})$ and $\tan^{-1}(\tan\frac{3\pi}{4})$. Sketch $y=\tan^{-1}x$, marking its intercept and asymptotes.

<details markdown="1">
<summary>Hint</summary>

First evaluate the inner trigonometric function. Then choose the angle in the inverse function's range.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\boxed{\begin{aligned}
\sin^{-1}\left(\sin\frac{5\pi}{6}\right)&=\frac\pi6,\\
\cos^{-1}\left(\cos\frac{7\pi}{6}\right)&=\frac{5\pi}{6},\\
\tan^{-1}\left(\tan\frac{3\pi}{4}\right)&=-\frac\pi4.
\end{aligned}}$$

The inverse tangent graph is increasing through $(0,0)$, with gradient $1$ there. Its horizontal asymptotes are $y=\frac\pi2$ and $y=-\frac\pi2$. Its domain is all real $x$, and its range is $-\frac\pi2<y<\frac\pi2$. Use the third graph in [Values and Graphs](#values-and-graphs) to check the shape.

**Check:** all three answers lie in the required ranges; the original angles do not.

</details>

### Question 2 — Chain rule and the derivative's domain

Differentiate $y=\sin^{-1}\sqrt{2x}$ and $z=\tan^{-1}(\frac{3x}{2})$. State the range of $x$ where each derivative formula applies.

<details markdown="1">
<summary>Hint</summary>

For $y$, first find where $0\le\sqrt{2x}\le1$. Differentiate both the square root and the inverse sine.

</details>

<details markdown="1">
<summary>Solution and check</summary>

For $y$, the function's domain is $0\le x\le\frac12$. For $0<x<\frac12$,

$$\begin{aligned}
\frac{\mathrm dy}{\mathrm dx}
&=\frac1{\sqrt{1-2x}}\cdot\frac1{\sqrt{2x}}\\
&=\boxed{\frac1{\sqrt{2x(1-2x)}}}.
\end{aligned}$$

For $z$,

$$\begin{aligned}
\frac{\mathrm dz}{\mathrm dx}
&=\frac{3/2}{1+(3x/2)^2}\\
&=\boxed{\frac6{4+9x^2}}.
\end{aligned}$$

This derivative applies for every real $x$.

**Check:** both derivatives are positive. The derivative of $y$ is undefined at both endpoints even though $y$ itself has a value there.

</details>

### Question 3 — A sum of squares or a square root?

Find $\displaystyle\int\frac{\mathrm dx}{9+25x^2}$ and $\displaystyle\int\frac{\mathrm dx}{\sqrt{9-25x^2}}$.

<details markdown="1">
<summary>Hint</summary>

Use $u=5x$ in each integral. The first uses inverse tangent; the second uses inverse sine.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Since $\mathrm du=5\,\mathrm dx$,

$$\begin{aligned}
&\int\frac{\mathrm dx}{9+25x^2}\\
&=\frac15\int\frac{\mathrm du}{3^2+u^2}\\
&=\boxed{\frac1{15}\tan^{-1}\left(\frac{5x}{3}\right)+C},
\end{aligned}$$

$$\begin{aligned}
&\int\frac{\mathrm dx}{\sqrt{9-25x^2}}\\
&=\frac15\int\frac{\mathrm du}{\sqrt{3^2-u^2}}\\
&=\boxed{\frac15\sin^{-1}\left(\frac{5x}{3}\right)+C}.
\end{aligned}$$

The second integrand requires $-\frac35<x<\frac35$. The first is defined for every real $x$.

**Check:** differentiation gives the two original integrands. The factors $\frac1{15}$ and $\frac15$ are different because the standard inverse tangent integral contains an extra $\frac13$.

</details>

### Question 4 — Complete two squares

Find $\displaystyle\int\frac{\mathrm dx}{2x^2+8x+13}$ and $\displaystyle\int\frac{\mathrm dx}{\sqrt{17+8x-2x^2}}$. State where the second integrand is real and defined.

<details markdown="1">
<summary>Hint</summary>

The completed squares are $2(x+2)^2+5$ and $25-2(x-2)^2$. Include the factor from $\mathrm dx$ when substituting.

</details>

<details markdown="1">
<summary>Solution and check</summary>

For the first integral, put $u=\sqrt2(x+2)$, so $\mathrm dx=\frac1{\sqrt2}\,\mathrm du$:

$$\begin{aligned}
&\int\frac{\mathrm dx}{2x^2+8x+13}\\
&=\frac1{\sqrt2}\int\frac{\mathrm du}{u^2+5}\\
&=\boxed{\frac1{\sqrt{10}}\tan^{-1}\left(\frac{2x+4}{\sqrt{10}}\right)+C}.
\end{aligned}$$

For the second, put $v=\sqrt2(x-2)$, so $\mathrm dx=\frac1{\sqrt2}\,\mathrm dv$:

$$\begin{aligned}
&\int\frac{\mathrm dx}{\sqrt{17+8x-2x^2}}\\
&=\frac1{\sqrt2}\int\frac{\mathrm dv}{\sqrt{25-v^2}}\\
&=\boxed{\frac1{\sqrt2}\sin^{-1}\left(\frac{\sqrt2(x-2)}5\right)+C}.
\end{aligned}$$

The second integrand requires $25-2(x-2)^2>0$, giving

$$\boxed{2-\frac5{\sqrt2}<x<2+\frac5{\sqrt2}.}$$

**Check:** expand both completed squares to recover the original quadratics, then differentiate the answers. In the second answer, the derivative simplifies to $\frac1{\sqrt{25-2(x-2)^2}}$.

</details>

### Question 5 — A missing condition in an inverse tangent identity

For which real values of $x$ is

$$\tan^{-1}\left(\frac{1+x}{1-x}\right)
=\frac\pi4+\tan^{-1}x$$

true? Justify your answer using the range of inverse tangent.

<details markdown="1">
<summary>Hint</summary>

Put $\theta=\tan^{-1}x$. The tangent addition formula shows the two angles have the same tangent; you must also check which angle is in the principal range.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Put $\theta=\tan^{-1}x$, so $-\frac\pi2<\theta<\frac\pi2$. For $x\ne1$,

$$\tan\left(\frac\pi4+\theta\right)
=\frac{1+\tan\theta}{1-\tan\theta}
=\frac{1+x}{1-x}.$$

The proposed angle satisfies $-\frac\pi4<\frac\pi4+\theta<\frac{3\pi}{4}$. It is in the range of inverse tangent exactly when $\theta<\frac\pi4$, or $\boxed{x<1}$.

For $x>1$, subtract $\pi$ to obtain the principal value:

$$\tan^{-1}\left(\frac{1+x}{1-x}\right)
=\frac\pi4+\tan^{-1}x-\pi.$$

At $x=1$, the left side is undefined.

**Check:** $x=0$ gives $\frac\pi4$ on both sides. For $x=2$, the left side is negative while the proposed right side exceeds $\frac\pi2$, so the original identity cannot hold there.

</details>

### Question 6 — AQA: complete the square and find an exact integral

**Original AQA question.** AQA MFP2, January 2012; textbook Chapter 22, practice examination Question 1, printed p. 281. The same question appears as Question 9 of the OxfordAQA FM03 Specimen 2018 paper. **8 marks: 2 + 6.**

**(a)** Express $7+4x-2x^2$ in the form $a-b(x-c)^2$, where $a$, $b$ and $c$ are integers. **(2 marks)**

**(b)** By means of a suitable substitution, or otherwise, find the exact value of

$$\int_1^{5/2}\frac{\mathrm dx}{\sqrt{7+4x-2x^2}}.$$

**(6 marks)**

<details markdown="1">
<summary>Hint</summary>

Use $7+4x-2x^2=9-2(x-1)^2$. Choose $u=\sqrt2(x-1)$ and write the new limits.

</details>

<details markdown="1">
<summary>Worked solution and check</summary>

**(a)**

$$7+4x-2x^2=\boxed{9-2(x-1)^2},$$

so $a=9$, $b=2$ and $c=1$.

**(b)** Put $u=\sqrt2(x-1)$, so $\mathrm du=\sqrt2\,\mathrm dx$. The limits are $u=0$ at $x=1$ and $u=\frac{3\sqrt2}{2}$ at $x=\frac52$:

$$\begin{aligned}
I
&=\frac1{\sqrt2}\int_0^{3\sqrt2/2}\frac{\mathrm du}{\sqrt{9-u^2}}\\
&=\frac1{\sqrt2}\left[\sin^{-1}\left(\frac u3\right)\right]_0^{3\sqrt2/2}\\
&=\frac1{\sqrt2}\left(\sin^{-1}\frac{\sqrt2}{2}-0\right)\\
&=\boxed{\frac\pi{4\sqrt2}}.
\end{aligned}$$

**Check:** the radicand stays positive throughout the stated interval. The answer is also $\frac{\pi\sqrt2}{8}$.

The [official OxfordAQA mark scheme, Question 9](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9665-FM03-international-a-level-further-mathematics-mark-scheme-2016-v1.pdf) checks the completed square, substitution, coefficient, inverse sine and use of limits. This is our worked solution.

</details>

### Question 7 — AQA: integrate inverse sine by parts

**Original AQA question.** AQA MFP2, January 2011, Question 5; textbook Chapter 22, practice examination Question 3, printed p. 281. **8 marks: 2 + 6.**

**(a)** Given that $u=\sqrt{1-x^2}$, find $\frac{\mathrm du}{\mathrm dx}$. **(2 marks)**

**(b)** Use integration by parts to show that

$$\int_0^{\sqrt3/2}\sin^{-1}x\,\mathrm dx=a\sqrt3\pi+b$$

where $a$ and $b$ are rational numbers. **(6 marks)**

<details markdown="1">
<summary>Hint</summary>

For part (b), differentiate $\sin^{-1}x$ and integrate $1$. Part (a) gives an antiderivative of $\frac{x}{\sqrt{1-x^2}}$ after changing the sign.

</details>

<details markdown="1">
<summary>Worked solution and check</summary>

**(a)** By the chain rule,

$$\begin{aligned}
\frac{\mathrm du}{\mathrm dx}
&=\frac{-2x}{2\sqrt{1-x^2}}\\
&=\boxed{-\frac{x}{\sqrt{1-x^2}}}.
\end{aligned}$$

**(b)** Integration by parts gives

$$\begin{aligned}
&\int\sin^{-1}x\,\mathrm dx\\
&=x\sin^{-1}x-\int\frac{x}{\sqrt{1-x^2}}\,\mathrm dx.
\end{aligned}$$

From part (a),

$$\int\frac{x}{\sqrt{1-x^2}}\,\mathrm dx
=-\sqrt{1-x^2}+C.$$

Therefore

$$\begin{aligned}
I
&=\left[x\sin^{-1}x+\sqrt{1-x^2}\right]_0^{\sqrt3/2}\\
&=\frac{\sqrt3}{2}\cdot\frac\pi3+\frac12-1\\
&=\boxed{\frac{\sqrt3\pi}{6}-\frac12}.
\end{aligned}$$

Thus $\boxed{a=\frac16,\ b=-\frac12}$.

**Check:** differentiating $x\sin^{-1}x+\sqrt{1-x^2}$ gives $\sin^{-1}x$; the other two terms cancel. Keep the minus sign in the antiderivative of $\frac{x}{\sqrt{1-x^2}}$.

This is our worked solution, checked against the [AQA mark scheme, Question 5](https://colmanweb.co.uk/pastpapers/Papers/A%20Level/AQA%206360/AQA-6360-MFP2/AQA-MFP2-W-MS-JAN11.PDF).

</details>

### Question 8 — AQA: use a derivative to find an integral

**Original AQA question.** AQA MFP2, June 2007, Question 4; textbook Chapter 22, practice examination Question 4, printed p. 281. **7 marks: 2 + 5.**

**(a)** Differentiate $x\tan^{-1}x$ with respect to $x$. **(2 marks)**

**(b)** Show that

$$\int_0^1\tan^{-1}x\,\mathrm dx
=\frac\pi4-\ln\sqrt2.$$

**(5 marks)**

<details markdown="1">
<summary>Hint</summary>

Use the product rule in part (a). Rearrange the resulting identity and integrate, or use integration by parts.

</details>

<details markdown="1">
<summary>Worked solution and check</summary>

**(a)**

$$\begin{aligned}
&\frac{\mathrm d}{\mathrm dx}(x\tan^{-1}x)\\
&=\boxed{\tan^{-1}x+\frac{x}{1+x^2}}.
\end{aligned}$$

**(b)** Rearranging part (a) and integrating gives

$$\begin{aligned}
&\int_0^1\tan^{-1}x\,\mathrm dx\\
&=[x\tan^{-1}x]_0^1-\int_0^1\frac{x}{1+x^2}\,\mathrm dx\\
&=\frac\pi4-\left[\frac12\ln(1+x^2)\right]_0^1\\
&=\frac\pi4-\frac12\ln2\\
&=\boxed{\frac\pi4-\ln\sqrt2}.
\end{aligned}$$

**Check:** the value is positive and less than $\frac\pi4$, since $0\le\tan^{-1}x\le\frac\pi4$ on this interval.

This is our worked solution, checked against the [AQA mark scheme, Question 4](https://colmanweb.co.uk/pastpapers/Papers/A%20Level/AQA%206360/AQA-6360-MFP2/AQA-MFP2-W-MS-JUN07.PDF).

</details>

## Quick Reference

| Task | Result or first step | Check |
|---|---|---|
| Inverse sine | $-\frac\pi2\le\sin^{-1}x\le\frac\pi2$ | $-1\le x\le1$ |
| Inverse cosine | $0\le\cos^{-1}x\le\pi$ | $-1\le x\le1$ |
| Inverse tangent | $-\frac\pi2<\tan^{-1}x<\frac\pi2$ | All real inputs; neither endpoint is reached |
| Differentiate $\sin^{-1}u$ | $\frac{u'}{\sqrt{1-u^2}}$ | Include the inner derivative; $-1<u<1$ |
| Differentiate $\cos^{-1}u$ | $-\frac{u'}{\sqrt{1-u^2}}$ | Keep the minus sign; $-1<u<1$ |
| Differentiate $\tan^{-1}u$ | $\frac{u'}{1+u^2}$ | Check where $u$ is defined and differentiable |
| $\displaystyle\int\frac{\mathrm dx}{\sqrt{a^2-x^2}}$ | $\sin^{-1}(\frac xa)+C$ | $a>0$ and $-a<x<a$ |
| $\displaystyle\int\frac{\mathrm dx}{a^2+x^2}$ | $\frac1a\tan^{-1}(\frac xa)+C$ | $a>0$; do not lose the factor $\frac1a$ |
| Shifted or scaled quadratic | Complete the square, then substitute | Include the factor from $\mathrm dx$ |
| An inverse function as the integrand | Integration by parts, with $\mathrm dv=\mathrm dx$ | Differentiate the answer to check the signs |
| Definite integral | Change limits or return to $x$ | If an endpoint is undefined, show the limit |

**After practice:** if an angle was outside the range, repeat Question 1. If a chain-rule factor or domain was wrong, repeat Question 2. If an integral's coefficient was wrong, repeat Question 3. If completing the square was difficult, repeat Questions 4 and 6. If an inverse tangent identity gave the wrong angle, repeat Question 5. If integration by parts had a sign error, repeat Questions 7–8.

**You should be able to:** sketch the three inverse graphs, state their domains and ranges, use their derivatives, recognise the two standard integrals and show full working after scaling, shifting or integration by parts.

The lesson follows FP2.7 of the [OxfordAQA Further Mathematics 9665 specification](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf). Worked examples are teaching material. Questions 6–8 retain the AQA questions and marks from the supplied textbook; our solutions use $+C$ for indefinite integrals.

**Learning path:** [Previous: Polar Coordinates](/alevel/a2-further-mathematics/polar-coordinates/) · [Back to the course](/alevel/a2-further-mathematics/). The next topic is **Arc Length and Area of Surface of Revolution**, textbook Chapter 23.
