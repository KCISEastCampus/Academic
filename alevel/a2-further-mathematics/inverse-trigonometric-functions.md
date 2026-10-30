---
title: Calculus of Inverse Trigonometric Functions
layout: subjects
mathjax: true
grade: a2
subject: a2-further-mathematics
permalink: /alevel/a2-further-mathematics/inverse-trigonometric-functions/
toc_headings: "#values-and-graphs, #differentiation, #standard-integrals, #completing-the-square, #definite-integrals, #integration-by-parts, #practice, #diagnose-and-retry, #method, #quick-reference, #sources"
study_page: true
reading_layout: true
---

[Further Pure Mathematics](/alevel/a2-further-mathematics/) · FP2.7 The calculus of inverse trigonometrical functions

Choose the correct value of an inverse trigonometric function. Differentiate related functions and use standard integrals after scaling or completing the square.

- **Learning:** start with [which angle an inverse function returns](#values-and-graphs), then move to derivatives and integrals.
- **Homework help:** choose [values and graphs](#values-and-graphs), [differentiation](#differentiation), [standard integrals](#standard-integrals), [completing the square](#completing-the-square), [definite integrals](#definite-integrals) or [integration by parts](#integration-by-parts).
- **Revision:** try [practice](#practice) before opening the solutions, then use the [quick reference](#quick-reference).

Textbook: Chapter 22, Sections 22.1–22.2, printed pp. 270–279; review and practice on pp. 280–281, in *International A Level Further Mathematics*.

**Before you start:** repair [inverse-function restrictions](/alevel/a2-mathematics/functions/#inverse-functions), the [chain rule](/alevel/a2-mathematics/differentiation/#composite-functions), [implicit differentiation](/alevel/a2-mathematics/differentiation/#implicit-functions), [substitution](/alevel/a2-mathematics/integration/#substitution) or [integration by parts](/alevel/a2-mathematics/integration/#integration-by-parts). Return to Example 1 to justify a principal range, Example 4 to retain the substitution coefficient, or Example 8 to complete the parts integral. For an undefined endpoint, repair [improper integrals](/alevel/a2-further-mathematics/series-and-limits/#improper-integrals). Use radians.

**Task status:** Unless an official question or teaching adaptation is explicitly identified, the worked examples and exercises are self-written teaching tasks with no official marks.

**Learning goal:** state domains and ranges, sketch inverse trigonometric graphs, differentiate composite functions and find exact integrals using inverse sine or inverse tangent.

## Values and Graphs {#values-and-graphs}

Sine takes an angle and returns a number. Now reverse the question: given that number, which angle should be returned? Different angles can have the same sine, so we must first agree which one to choose.

Consider a self-written illustration (no official marks):

$$\sin\frac\pi3=\frac{\sqrt3}{2},
\qquad \sin\frac{2\pi}{3}=\frac{\sqrt3}{2}.$$

Both angles answer “which angle has sine $\frac{\sqrt3}{2}$?” The **inverse sine** function returns only the angle in $[-\pi/2,\pi/2]$, called the **principal value**. Thus

$$\sin^{-1}\left(\frac{\sqrt3}{2}\right)=\frac\pi3.$$

The input here is a sine value; the output is an angle in radians. The notation $y=\sin^{-1}x$ means $\sin y=x$, with $-\frac\pi2\le y\le\frac\pi2$. It does not mean the reciprocal $\frac1{\sin x}$, which is $\operatorname{cosec}x$.

Similarly, $\cos^{-1}x$ and $\tan^{-1}x$ each return one angle in a specified range, but their ranges differ. The three inverse functions are also written $\operatorname{arcsin}x$, $\operatorname{arccos}x$ and $\operatorname{arctan}x$:

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

<section class="worked-example" markdown="1">

### Example 1 — Choose the angle in the correct range {#example-1--choose-the-angle-in-the-correct-range}

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

</section>

## Differentiation {#differentiation}

Now write $y$ for the returned angle and $x$ for the input value. Differentiation asks how quickly that angle changes as the input changes. The inverse sine and inverse tangent graphs rise, while inverse cosine falls, matching the signs of their derivatives below.

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
&=\frac{u^{\prime}}{\sqrt{1-u^2}},\\
\frac{\mathrm d}{\mathrm dx}\cos^{-1}u
&=-\frac{u^{\prime}}{\sqrt{1-u^2}},\\
\frac{\mathrm d}{\mathrm dx}\tan^{-1}u
&=\frac{u^{\prime}}{1+u^2}.
\end{aligned}}$$

The first two formulae apply where $-1<u<1$. The third applies wherever $u$ is defined and differentiable.

<section class="worked-example" markdown="1">

### Example 2 — An inverse cosine and its tangent {#example-2--an-inverse-cosine-and-its-tangent}

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

</section>

<section class="worked-example" markdown="1">

### Example 3 — More than one chain-rule step {#example-3--more-than-one-chain-rule-step}

**Question:** differentiate $y=(\sin^{-1}2x)^3$ and $z=\tan^{-1}(\frac{x}{1+x^2})$.

For $y$, differentiate the cube, then the inverse sine, then $2x$:

$$\begin{aligned}
\frac{\mathrm dy}{\mathrm dx}
&=3(\sin^{-1}2x)^2\frac2{\sqrt{1-4x^2}}\\
&=\boxed{\frac{6(\sin^{-1}2x)^2}{\sqrt{1-4x^2}}}.
\end{aligned}$$

This derivative formula applies for $-\frac12<x<\frac12$.

For $z$, put $u=\frac{x}{1+x^2}$. The quotient rule gives

$$u^{\prime}=\frac{1+x^2-2x^2}{(1+x^2)^2}
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

**Check:** $z^{\prime}(0)=1$, and $z^{\prime}$ is zero at $x=\pm1$. For $y$, omitting the derivative of $2x$ would halve the answer.

</section>

## Standard Integrals {#standard-integrals}

For $a>0$,

$$\boxed{\int\frac{\mathrm dx}{\sqrt{a^2-x^2}}
=\sin^{-1}\left(\frac xa\right)+C.}$$

The first integrand is real and defined for $-a<x<a$.

$$\boxed{\int\frac{\mathrm dx}{a^2+x^2}
=\frac1a\tan^{-1}\left(\frac xa\right)+C.}$$

The first result can also be written $-\cos^{-1}(\frac xa)+C$. The two forms differ by a constant.

**Notice the coefficient:** the inverse tangent integral has $\frac1a$ outside; the inverse sine integral does not. Differentiate the result if you are unsure.

<section class="worked-example" markdown="1">

### Example 4 — Keep the scale factor {#example-4--keep-the-scale-factor}

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

</section>

## Completing the Square {#completing-the-square}

For a reciprocal quadratic $\frac1{ax^2+bx+c}$ with $a\ne0$, the discriminant helps you choose a method:

| Discriminant $b^2-4ac$ | Denominator | Method |
|---|---|---|
| Positive | Two distinct real linear factors | Partial fractions, usually giving logarithms |
| Zero | A repeated real linear factor | Rewrite as a negative power and integrate |
| Negative | No real linear factors | Complete the square and use inverse tangent |

For a square root, aim for $\sqrt{a^2-u^2}$ with $a>0$. A square root of a **sum** of squares uses a different method, covered in the hyperbolic functions lesson.

<section class="worked-example" markdown="1">

### Example 5 — A reciprocal quadratic with no real roots {#example-5--a-reciprocal-quadratic-with-no-real-roots}

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
&=\int\frac{\mathrm dw}{w}\quad(w=x^2+6x+25,\ \mathrm dw=(2x+6)\,\mathrm dx)\\
&=\ln w+C=\ln(x^2+6x+25)+C.
\end{aligned}$$

</section>

<section class="worked-example" markdown="1">

### Example 6 — A quadratic inside a square root {#example-6--a-quadratic-inside-a-square-root}

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

</section>

## Definite Integrals {#definite-integrals}

For a substitution $u=g(x)$, write the new limits explicitly. Do not use an $x$-limit in an antiderivative written in $u$.

<section class="worked-example" markdown="1">

### Example 7 — An undefined endpoint with a finite integral {#example-7--an-undefined-endpoint-with-a-finite-integral}

**Question:** evaluate $\displaystyle\int_0^2\frac{\mathrm dx}{\sqrt{4-x^2}}$.

The integrand is undefined at $x=2$, so this is an improper integral. Replace the upper bound by $b<2$, then take a limit:

$$\begin{aligned}
I
&=\lim_{b\to2^-}\int_0^b\frac{\mathrm dx}{\sqrt{4-x^2}}\\
&=\lim_{b\to2^-}\int_0^{b/2}\frac{\mathrm du}{\sqrt{1-u^2}}
\quad(u=x/2,\ \mathrm dx=2\,\mathrm du)\\
&=\lim_{b\to2^-}[\sin^{-1}u]_0^{b/2}\\
&=\lim_{b\to2^-}\left(\sin^{-1}\frac b2-\sin^{-1}0\right)\\
&=\boxed{\frac\pi2}.
\end{aligned}$$

**Check:** the inverse sine is continuous at $1$, and $\sin^{-1}1=\frac\pi2$. An undefined integrand at an endpoint does not automatically make an integral divergent.

For a regular integral with a scale factor,

$$\begin{aligned}
&\int_0^1\frac{\mathrm dx}{\sqrt{4-3x^2}}\\
&=\frac1{\sqrt3}\int_0^{\sqrt3/2}\frac{\mathrm du}{\sqrt{1-u^2}}
\quad(u=\sqrt3 x/2,\ \mathrm dx=2\,\mathrm du/\sqrt3)\\
&=\frac1{\sqrt3}[\sin^{-1}u]_0^{\sqrt3/2}\\
&=\frac1{\sqrt3}\left(\frac\pi3-0\right)
=\boxed{\frac\pi{3\sqrt3}}.
\end{aligned}$$

</section>

## Integration by Parts {#integration-by-parts}

When the integrand is $\sin^{-1}x$ or $\tan^{-1}x$ itself, the standard reciprocal integrals do not apply directly. Use

$$\int u\,\mathrm dv=uv-\int v\,\mathrm du.$$

Choose the inverse trigonometric function as $u$ and $\mathrm dv=\mathrm dx$, so $v=x$.

<section class="worked-example" markdown="1">

### Example 8 — Integrate inverse tangent itself {#example-8--integrate-inverse-tangent-itself}

**Question:** find $\displaystyle\int\tan^{-1}x\,\mathrm dx$.

Put $u=\tan^{-1}x$ and $\mathrm dv=\mathrm dx$. Then $\mathrm du=\frac{\mathrm dx}{1+x^2}$ and $v=x$:

$$\begin{aligned}
&\int\tan^{-1}x\,\mathrm dx\\
&=x\tan^{-1}x-\int\frac{x}{1+x^2}\,\mathrm dx\\
&=x\tan^{-1}x-\frac12\int\frac{\mathrm dw}{w}
\quad(w=1+x^2,\ \mathrm dw=2x\,\mathrm dx)\\
&=x\tan^{-1}x-\frac12\ln w+C\\
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

</section>

## Practice {#practice}

Try each question before opening the hint or solution. Questions 1–5 are **original practice written for this lesson**. Questions 6–8 retain the AQA wording and marks reproduced in the supplied textbook. Their solutions have been independently checked and compared with official mark schemes.

<section class="lesson-check" markdown="1">

### Question 1 — Principal values and a graph {#question-1--principal-values-and-a-graph}

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

</section>

<section class="lesson-check" markdown="1">

### Independent graph construction {#three-graph-task}

**Self-written task — three graphs and an error.** Close or cover the reference figure. On separate labelled axes, sketch $y=\sin^{-1}x$, $y=\cos^{-1}x$ and $y=\tan^{-1}x$. Mark domains, ranges, endpoints or asymptotes, and the direction of change. A learner draws inverse cosine increasing from $(-1,0)$ to $(1,\pi)$. Correct the graph and explain the restriction on cosine that justifies your correction.

This is self-written, with no official marks. Produce three sketches and a written correction before revealing either control.

<details markdown="1">
<summary>Hint</summary>

First restrict each original function to a one-to-one interval, then exchange coordinates.

</details>

<details markdown="1">
<summary>Answer and sketch criteria</summary>

Inverse sine increases from $(-1,-\pi/2)$ through $(0,0)$ to $(1,\pi/2)$. Its domain is $[-1,1]$ and range $[-\pi/2,\pi/2]$. Inverse cosine **decreases** from $(-1,\pi)$ through $(0,\pi/2)$ to $(1,0)$, with domain $[-1,1]$ and range $[0,\pi]$. Cosine decreases on $[0,\pi]$; reflection in $y=x$ preserves that direction. The proposed endpoints are reversed. Inverse tangent increases through $(0,0)$ for every real input, with range $(-\pi/2,\pi/2)$ and horizontal asymptotes $y=\pm\pi/2$. Neither asymptote is reached. Compare your own three sketches with the earlier figure only after marking these features.

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 2 — Chain rule and the derivative's domain {#question-2--chain-rule-and-the-derivatives-domain}

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

</section>

<section class="lesson-check" markdown="1">

### Question 3 — A sum of squares or a square root? {#question-3--a-sum-of-squares-or-a-square-root}

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
&=\frac15\cdot\frac13\tan^{-1}\left(\frac u3\right)+C\\
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

</section>

<section class="lesson-check" markdown="1">

### Question 4 — Complete two squares {#question-4--complete-two-squares}

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
&=\frac1{\sqrt2}\cdot\frac1{\sqrt5}\tan^{-1}\left(\frac u{\sqrt5}\right)+C\\
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

</section>

<section class="lesson-check" markdown="1">

### Question 5 — A missing condition in an inverse tangent identity {#question-5--a-missing-condition-in-an-inverse-tangent-identity}

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

</section>

<section class="lesson-check" markdown="1">

### Question 6 — AQA: complete the square and find an exact integral {#question-6--aqa-complete-the-square-and-find-an-exact-integral}

**Original AQA question.** AQA Mathematics 6360, MFP2, January 2012, Question 6; textbook Chapter 22, practice examination Question 1, printed p. 281. The same question appears as Question 9 of the OxfordAQA FM03 Specimen 2018 paper. **8 marks: 2 + 6.** [Question paper, Q6 (PDF p. 3)](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-AQA/January%202012%20QP%20-%20FP2%20AQA.pdf#page=3); [AQA mark scheme, Q6 (PDF p. 7)](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-AQA/January%202012%20MS%20-%20FP2%20AQA.PDF#page=7). Question and matching MS reread on 2026-10-23 (PDF text); AQA-authored documents hosted by PMT, with some QPs in condensed layout.

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

[OxfordAQA Specimen 2018 Q9, QP PDF pp. 15–16](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9665-FM03-international-a-level-further-mathematics-specimen-paper-2019-v3.pdf#page=15); [MS Q9, PDF p. 12](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9665-FM03-international-a-level-further-mathematics-mark-scheme-2016-v1.pdf#page=12). The official OxfordAQA mark scheme, Question 9 checks the completed square, substitution, coefficient, inverse sine and use of limits. This is our worked solution.

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 7 — AQA: integrate inverse sine by parts {#question-7--aqa-integrate-inverse-sine-by-parts}

**Original AQA question.** AQA MFP2, January 2011, Question 5; textbook Chapter 22, practice examination Question 3, printed p. 281. **8 marks: 2 + 6.** [Question paper, Q5 (PDF p. 3)](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-AQA/January%202011%20QP%20-%20FP2%20AQA.pdf#page=3); [AQA mark scheme, Q5 (PDF p. 5)](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-AQA/January%202011%20MS%20-%20FP2%20AQA.PDF#page=5). Question and matching MS reread on 2026-10-23 (PDF text); AQA-authored documents hosted by PMT, with some QPs in condensed layout.

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

$$\begin{aligned}
w&=1-x^2,\qquad \mathrm dw=-2x\,\mathrm dx,\\
\int\frac{x}{\sqrt{1-x^2}}\,\mathrm dx
&=-\frac12\int w^{-1/2}\,\mathrm dw\\
&=-\frac12(2w^{1/2})+C=-\sqrt{1-x^2}+C.
\end{aligned}$$

Therefore

$$\begin{aligned}
I
&=\left[x\sin^{-1}x+\sqrt{1-x^2}\right]_0^{\sqrt3/2}\\
&=\left(\frac{\sqrt3}{2}\cdot\frac\pi3+\frac12\right)-\left(0\cdot0+1\right)\\
&=\boxed{\frac{\sqrt3\pi}{6}-\frac12}.
\end{aligned}$$

Thus $\boxed{a=\frac16,\ b=-\frac12}$.

**Check:** differentiating $x\sin^{-1}x+\sqrt{1-x^2}$ gives $\sin^{-1}x$; the other two terms cancel. Keep the minus sign in the antiderivative of $\frac{x}{\sqrt{1-x^2}}$.

This is our worked solution, checked against the AQA mark scheme, Question 5.

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 8 — AQA: use a derivative to find an integral {#question-8--aqa-use-a-derivative-to-find-an-integral}

**Original AQA question.** AQA MFP2, June 2007, Question 4; textbook Chapter 22, practice examination Question 4, printed p. 281. **7 marks: 2 + 5.** Question paper, Question 4. [Question paper, Q4 (PDF p. 3)](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-AQA/June%202007%20QP%20-%20FP2%20AQA.PDF#page=3); [AQA mark scheme, Q4 (PDF p. 5)](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-AQA/June%202007%20MS%20-%20FP2%20AQA.PDF#page=5). Question and matching MS reread on 2026-10-23 (PDF text); AQA-authored documents hosted by PMT, with some QPs in condensed layout.

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
&=\left(1\cdot\frac\pi4-0\cdot0\right)-\frac12\int_1^2\frac{\mathrm dw}{w}
\quad(w=1+x^2,\ \mathrm dw=2x\,\mathrm dx)\\
&=\frac\pi4-\frac12[\ln w]_1^2\\
&=\frac\pi4-\frac12(\ln2-\ln1)\\
&=\boxed{\frac\pi4-\ln\sqrt2}.
\end{aligned}$$

**Check:** the value is positive and less than $\frac\pi4$, since $0\le\tan^{-1}x\le\frac\pi4$ on this interval.

This is our worked solution, checked against the AQA mark scheme, Question 4.

</details>

</section>

## Diagnose and Retry {#diagnose-and-retry}

These tasks are self-written and have no official marks. Explain the error before opening feedback; then close every solution and attempt the new task independently. If you need a hint, return later for another independent attempt.

<section class="lesson-check" markdown="1">

**Diagnose:** A learner writes $\sin^{-1}(\sin(3\pi/4))=3\pi/4$. Correct the value and identify the failed condition.

<details markdown="1">
<summary>Feedback</summary>

The proposed angle is outside $[-\pi/2,\pi/2]$. The principal value is $\pi/4$, which has the same sine and is inside that interval.

</details>

</section>

<section class="lesson-check" markdown="1">

### Retry the principal-value decision {#principal-value-retry}

**Principal-value retry (self-written).** For $\pi/2\le\theta\le3\pi/2$, express $\sin^{-1}(\sin\theta)$ in terms of $\theta$. Check both endpoints and $\theta=\pi$. Explain why simply returning $\theta$ usually fails.

Close the preceding feedback. Write an equal-sine relation and check its range before testing the three points.

<details markdown="1">
<summary>Hint</summary>

Try the supplementary angle and test its position over the whole interval.

</details>

<details markdown="1">
<summary>Retry answer</summary>

$$\sin(\pi-\theta)=\sin\theta,\qquad
-\frac\pi2\le\pi-\theta\le\frac\pi2,$$

$$\boxed{\sin^{-1}(\sin\theta)=\pi-\theta\quad(\pi/2\le\theta\le3\pi/2).}$$

The three checkpoints give $\pi/2,0,-\pi/2$. Except at the left endpoint, the original angle is outside the inverse-sine range; the supplementary angle stays inside throughout. If you still return the input angle, revisit Example 1 and state both the equal-sine and principal-range conditions before retrying.

</details>

</section>

The retained task below separately tests integration and the range after a translation.

<section class="lesson-check" markdown="1">

**Independent retry:** A function has $y^{\prime}=3/(1+9x^2)$ for every real $x$, and $y(0)=\pi/6$. Find the function. Must its values all lie in the principal range of inverse tangent?

<details markdown="1">
<summary>Hint</summary>

Recognise a scaled inverse-tangent derivative, then keep the additive constant.

</details>

<details markdown="1">
<summary>Retry solution and check</summary>

$$\begin{aligned}
y&=\int\frac3{1+9x^2}\,\mathrm dx
=\int\frac{\mathrm du}{1+u^2}\quad(u=3x,\ \mathrm du=3\,\mathrm dx)\\
&=\tan^{-1}u+C=\tan^{-1}(3x)+C,\\
y(0)&=\tan^{-1}0+C=\pi/6\quad\Longrightarrow\quad C=\pi/6.
\end{aligned}$$

Thus $y=\tan^{-1}(3x)+\pi/6$. Its range is $(-\pi/3,2\pi/3)$, so it need not lie in the principal inverse-tangent range: the function includes a vertical translation. Differentiation recovers the specified derivative.

</details>

</section>

**Next after practice:** close this chapter and attempt the course [mixed review](/alevel/a2-further-mathematics/#mixed-review). After subsequent learning, attempt the [later retrieval tasks](/alevel/a2-further-mathematics/#later-review). Record whether the first attempt was independent, any hint used, the error and the retry result. If a method or condition was wrong, use this chapter’s after-practice route to repair that skill, then retry with solutions closed.

## Method for revision {#method}

- **An inverse function value?** Use the stated range to choose one angle. A calculator gives the principal value, not every solution of a trigonometric equation.
- **A derivative?** Identify the inner function $u$, use the inverse-function derivative and multiply by $\frac{\mathrm du}{\mathrm dx}$.
- **A reciprocal quadratic?** Check whether the denominator has real roots. Use partial fractions for distinct real roots; use inverse tangent when completing the square gives a sum of squares.
- **A square root in the denominator?** Complete the square, then look for $\sqrt{a^2-u^2}$. Keep all factors outside the integral and check where the square root is positive.
- **A definite integral?** Change the limits when you substitute, or return to $x$ before using the original limits. Show a limit if the integrand is undefined at an endpoint.
- **The inverse function itself?** Try integration by parts with $u$ equal to that function and $\mathrm dv=\mathrm dx$.

**Check your working:** show the completed square, the substitution and its derivative, the standard integral, and the substitution of limits. For a “show that” question, obtain the stated result from your working. Keep $+C$ in an indefinite integral.

## Quick Reference {#quick-reference}

| Task | Result or first step | Check |
|---|---|---|
| Inverse sine | $-\frac\pi2\le\sin^{-1}x\le\frac\pi2$ | $-1\le x\le1$ |
| Inverse cosine | $0\le\cos^{-1}x\le\pi$ | $-1\le x\le1$ |
| Inverse tangent | $-\frac\pi2<\tan^{-1}x<\frac\pi2$ | All real inputs; neither endpoint is reached |
| Differentiate $\sin^{-1}u$ | $\frac{u^{\prime}}{\sqrt{1-u^2}}$ | Include the inner derivative; $-1<u<1$ |
| Differentiate $\cos^{-1}u$ | $-\frac{u^{\prime}}{\sqrt{1-u^2}}$ | Keep the minus sign; $-1<u<1$ |
| Differentiate $\tan^{-1}u$ | $\frac{u^{\prime}}{1+u^2}$ | Check where $u$ is defined and differentiable |
| $\displaystyle\int\frac{\mathrm dx}{\sqrt{a^2-x^2}}$ | $\sin^{-1}(\frac xa)+C$ | $a>0$ and $-a<x<a$ |
| $\displaystyle\int\frac{\mathrm dx}{a^2+x^2}$ | $\frac1a\tan^{-1}(\frac xa)+C$ | $a>0$; do not lose the factor $\frac1a$ |
| Shifted or scaled quadratic | Complete the square, then substitute | Include the factor from $\mathrm dx$ |
| An inverse function as the integrand | Integration by parts, with $\mathrm dv=\mathrm dx$ | Differentiate the answer to check the signs |
| Definite integral | Change limits or return to $x$ | If an endpoint is undefined, show the limit |
{: .wide-table}

**After practice:** if an angle was outside the range, repeat Question 1. If a chain-rule factor or domain was wrong, repeat Question 2. If an integral's coefficient was wrong, repeat Question 3. If completing the square was difficult, repeat Questions 4 and 6. If an inverse tangent identity gave the wrong angle, repeat Question 5. If integration by parts had a sign error, repeat Questions 7–8.

**You should be able to:** sketch the three inverse graphs, state their domains and ranges, use their derivatives, recognise the two standard integrals and show full working after scaling, shifting or integration by parts.

## Sources and scope {#sources}

Scope check on 2026-10-23: the current 9665 qualification page led to specification v5.2; the relevant FP2 section was checked without migrating to 9765. For the papers and schemes below, only the identified questions and matching marking sections were reread as PDF text; visual verification of the original PDF pages was not completed. Official identities and marks are retained; adaptations and self-written tasks are labelled separately.

The lesson follows FP2.7 of the [OxfordAQA Further Mathematics 9665 specification](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf). Worked examples are teaching material. Questions 6–8 retain the AQA questions and marks from the supplied textbook; our solutions use $+C$ for indefinite integrals.

**Learning path:** [Previous: Polar Coordinates](/alevel/a2-further-mathematics/polar-coordinates/) · [Next: Arc Length and Surface Area](/alevel/a2-further-mathematics/arc-length-and-surface-area/) · [Back to the course](/alevel/a2-further-mathematics/).

{% include exam_topic_practice.html %}
