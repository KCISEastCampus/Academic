---
title: Hyperbolic Functions
layout: subjects
mathjax: true
grade: a2
subject: a2-further-mathematics
permalink: /alevel/a2-further-mathematics/hyperbolic-functions/
toc_headings: "#definitions, #graphs-and-identities, #linear-combinations, #inverse-hyperbolic-functions, #differentiation, #integration, #practice, #diagnose-and-retry, #quick-reference, #sources"
study_page: true
reading_layout: true
---

[Further Pure Mathematics](/alevel/a2-further-mathematics/) · FP2.9 Hyperbolic functions

Start with two new functions made from exponentials. Once their names make sense, use them to solve equations and work with graphs, derivatives and integrals.

**Start here:** [meet the two functions](#definitions). For homework, go to [an equation example](#example-2-solve-a-linear-combination) or use the contents. For revision, try the [practice questions](#practice), then check the [quick reference](#quick-reference).

**Before you start:** recall that a negative exponent gives a reciprocal. If needed, review [negative powers](/alevel/as-mathematics/algebra/#l01). Other prerequisites are listed in [the preparation notes](#preparation-notes).

## Meet two new functions {#definitions}

You already know how to calculate $e^x$. The expression $e^{-x}$ is its reciprocal:

$$e^{-x}=\frac1{e^x}.$$

Take these two numbers, subtract one from the other, then divide by two. This defines **hyperbolic sine**, written $\sinh x$:

$$\sinh x=\frac{e^x-e^{-x}}2.$$

Add the same two numbers instead, then divide by two. This defines **hyperbolic cosine**, written $\cosh x$:

$$\cosh x=\frac{e^x+e^{-x}}2.$$

The names resemble sine and cosine, but these are different functions. Here $x$ can be any real number; you are calculating with exponentials. The name $\sinh x$ does not mean $\sin(hx)$.

<section class="worked-example" markdown="1">

### A first calculation {#zero-example}

**Question:** Find $\sinh0$ and $\cosh0$ from their definitions.

At $x=0$, both exponentials equal one. Use subtraction for the first function and addition for the second:

$$\begin{aligned}
\sinh0&=\frac{1-1}{2}=0,\\
\cosh0&=\frac{1+1}{2}=1.
\end{aligned}$$

The graph of $\sinh x$ passes through $(0,0)$, and the graph of $\cosh x$ passes through $(0,1)$. The same input need not give the same output for different functions.

</section>

<section class="lesson-check" markdown="1">

### Your turn {#definition-check}

**Question:** Given $e^a=2$, find $\sinh a$ and $\cosh a$ exactly. Which is larger? Explain why $\sinh a$ is positive.

This is a self-written task, with no official marks. Try it before opening the help.

<details markdown="1">
<summary>Hint</summary>

First find the reciprocal $e^{-a}$. Then use the two definitions, keeping subtraction and addition separate.

</details>

<details markdown="1">
<summary>Solution and feedback</summary>

$$\begin{aligned}
e^{-a}&=\frac12,\\
\sinh a&=\frac{2-\frac12}{2}=\frac34,\\
\cosh a&=\frac{2+\frac12}{2}=\frac54.
\end{aligned}$$

So $\cosh a$ is larger. The subtraction in $\sinh a$ gives a positive number because $2>\frac12$; dividing by two keeps it positive. This does not mean that $\sinh x$ is positive for every input.

If you used $-2$ for the negative exponent, return to the reciprocal above. If you swapped the answers, return to the two definitions. Close this solution and try the [new question](#definition-retry).

</details>

</section>

### Combine the two functions {#ratio-and-reciprocals}

The next names describe operations on the two functions you have just met. **Hyperbolic tangent** is their ratio:

$$\tanh x=\frac{\sinh x}{\cosh x}=\frac{e^x-e^{-x}}{e^x+e^{-x}}.$$

Both exponentials are positive, so their sum is positive. Thus $\cosh x>0$ and this division is allowed for every real $x$.

Three more names describe reciprocals: **hyperbolic cotangent**, **hyperbolic secant** and **hyperbolic cosecant**:

$$\begin{aligned}
\operatorname{coth}x&=\frac{\cosh x}{\sinh x},\\
\operatorname{sech}x&=\frac1{\cosh x},\\
\operatorname{cosech}x&=\frac1{\sinh x}.
\end{aligned}$$

For the first and third, exclude $x=0$: that is where $\sinh x=0$. There is no such restriction for $\operatorname{sech}x$.

Adding the original two definitions cancels the negative-exponent terms; subtracting the definitions cancels the positive-exponent terms. Hence

$$e^x=\cosh x+\sinh x,\qquad e^{-x}=\cosh x-\sinh x.$$

The notation $\sinh^{-1}x$ means the inverse function of $\sinh x$; it does not mean $1/\sinh x$. The reciprocal is $\operatorname{cosech}x$. The same distinction applies to $\cosh^{-1}x$ and $\tanh^{-1}x$.

<section class="worked-example" markdown="1">

### Example 1 — Exact values from exponentials {#example-1-exact-values}

**Question:** Find $\sinh(\ln3)$, $\cosh(\ln3)$, $\tanh(\ln3)$ and $\operatorname{sech}(\ln3)$.

Since $e^{\ln3}=3$ and $e^{-\ln3}=\frac13$,

$$\begin{aligned}
\sinh(\ln3)&=\frac{3-\frac13}{2}=\frac43,\\
\cosh(\ln3)&=\frac{3+\frac13}{2}=\frac53,\\
\tanh(\ln3)&=\frac{\frac43}{\frac53}=\frac45,\\
\operatorname{sech}(\ln3)&=\frac1{\cosh(\ln3)}=\frac35.
\end{aligned}$$

**Check:** $\cosh^2(\ln3)-\sinh^2(\ln3)=\frac{25}{9}-\frac{16}{9}=1$, and $1-\tanh^2(\ln3)=\frac9{25}=\operatorname{sech}^2(\ln3)$.

</section>

## Graphs and Identities {#graphs-and-identities}

### The six graphs in FP2.9 {#six-core-graphs}

The inverse $\cosh^{-1}x$ is defined by restricting the original function $y=\cosh x$ to $x\ge0$, where it is one-to-one. Its inverse has range $y\ge0$; reflecting the restricted graph in $y=x$ gives the inverse graph. The other two inverse graphs are also reflections of their basic graphs in $y=x$.

| Function | Domain | Range | Symmetry and shape | Asymptotes |
|---|---|---|---|---|
| $y=\sinh x$ | $\mathbb R$ | $\mathbb R$ | Odd; increasing through $(0,0)$ | None |
| $y=\cosh x$ | $\mathbb R$ | $[1,\infty)$ | Even; minimum at $(0,1)$ | None |
| $y=\tanh x$ | $\mathbb R$ | $(-1,1)$ | Odd; increasing through $(0,0)$ | Horizontal: $y=\pm1$ |
| $y=\sinh^{-1}x$ | $\mathbb R$ | $\mathbb R$ | Odd; increasing through $(0,0)$ | None |
| $y=\cosh^{-1}x$ | $[1,\infty)$ | $[0,\infty)$ | Increasing from $(1,0)$ | None |
| $y=\tanh^{-1}x$ | $(-1,1)$ | $\mathbb R$ | Odd; increasing through $(0,0)$ | Vertical: $x=\pm1$ |
{: .wide-table}

![Six graphs for FP2.9: sinh x, cosh x and tanh x in the top row; sinh inverse x, cosh inverse x and tanh inverse x in the bottom row. The curves show the origin or turning point, the nonnegative cosh inverse branch, horizontal asymptotes y equals plus or minus one for tanh, and vertical asymptotes x equals plus or minus one for inverse tanh.](/assets/img/further-hyperbolic-graphs.svg)

For $\tanh x$, the horizontal lines $y=1$ and $y=-1$ are approached but never reached. For $\tanh^{-1}x$, the vertical lines $x=1$ and $x=-1$ are excluded from the domain. The inverse graphs exchange the domain and range of their chosen branches.

### Reciprocal functions: domains and ranges {#reciprocal-function-domains}

| Function | Domain | Range | Symmetry and asymptotes |
|---|---|---|---|
| $y=\operatorname{coth}x$ | $\mathbb R\setminus\lbrace0\rbrace$ | $(-\infty,-1)\cup(1,\infty)$ | Odd; vertical $x=0$, horizontal $y=\pm1$ |
| $y=\operatorname{sech}x$ | $\mathbb R$ | $(0,1]$ | Even; maximum at $(0,1)$, horizontal $y=0$ |
| $y=\operatorname{cosech}x$ | $\mathbb R\setminus\lbrace0\rbrace$ | $\mathbb R\setminus\lbrace0\rbrace$ | Odd; vertical $x=0$, horizontal $y=0$ |
{: .wide-table}

The reciprocal functions are not among the six graphs specified for familiarity in FP2.9, but their domains matter when differentiating or integrating them.

### Identities from exponentials {#identity-proofs}

Expanding the squares from the definitions gives

$$\begin{aligned}
\cosh^2x-\sinh^2x
&=\frac{(e^x+e^{-x})^2-(e^x-e^{-x})^2}{4}\\
&=\frac{(e^{2x}+2+e^{-2x})-(e^{2x}-2+e^{-2x})}{4}\\
&=\frac{4}{4}\\
&=1.
\end{aligned}$$

Divide by $\cosh^2x$ to obtain the second identity. Divide by $\sinh^2x$ to obtain the third; this requires $x\ne0$.

$$1-\tanh^2x=\operatorname{sech}^2x,\qquad \operatorname{coth}^2x-1=\operatorname{cosech}^2x.$$

For the addition formula, use the exponential definitions and collect the two products:

$$\begin{aligned}
\sinh(x+y)
&=\frac{e^{x+y}-e^{-x-y}}2\\
&=\frac{e^xe^y-e^{-x}e^{-y}}2\\
&=\frac{(e^x-e^{-x})(e^y+e^{-y})+(e^x+e^{-x})(e^y-e^{-y})}{4}\\
&=\sinh x\cosh y+\cosh x\sinh y.
\end{aligned}$$

The same expansion gives the useful difference identity

$$\cosh(x-y)=\cosh x\cosh y-\sinh x\sinh y.$$

## Solving a Linear Combination {#linear-combinations}

To solve $a\sinh x+b\cosh x=c$, set $t=e^x$. Since an exponential is always positive, **keep the condition $t>0$**. Substitute the definitions, clear the denominator, solve the resulting quadratic, discard every root with $t\le0$, then use $x=\ln t$ for each positive root.

$$a\sinh x+b\cosh x=c
\quad\Longleftrightarrow\quad
(a+b)t^2-2ct+(b-a)=0,\qquad t=e^x>0.$$

When $a+b=0$, the quadratic term vanishes; solve the remaining equation in $t$. Do not take logarithms of a zero or negative root.

<section class="worked-example" markdown="1">

### Example 2 — Solve a linear combination and reject a root {#example-2-solve-a-linear-combination}

**Question:** Solve $2\sinh x+\cosh x=2$.

Put $t=e^x$, where $t>0$. Substitution gives

$$\begin{aligned}
2\sinh x+\cosh x=2
&\Longleftrightarrow\frac{2(t-t^{-1})+(t+t^{-1})}{2}=2\\
&\Longleftrightarrow 3t^2-4t-1=0.
\end{aligned}$$

Therefore

$$t=\frac{2\pm\sqrt7}{3}.$$

Since $\frac{2-\sqrt7}{3}<0$, reject it: it cannot equal $e^x$. The positive root gives

$$\boxed{x=\ln\left(\frac{2+\sqrt7}{3}\right)}.$$

**Check:** the retained value has $e^x>0$ and satisfies the quadratic obtained from the original equation.

</section>

<section class="worked-example" markdown="1">

### Example 3 — Use an addition formula (adapted method) {#example-3-use-an-addition-formula}

**Question:** Solve $\cosh(x-\ln3)=2\sinh x$.

This is a teaching adaptation of the method in OxfordAQA Specimen 2018 FM03 Question 2; it is not the official question. Use $\cosh(x-y)=\cosh x\cosh y-\sinh x\sinh y$, together with $\cosh(\ln3)=\frac53$ and $\sinh(\ln3)=\frac43$:

$$\begin{aligned}
\frac53\cosh x-\frac43\sinh x&=2\sinh x,\\
\frac53\cosh x&=\frac{10}{3}\sinh x,\\
\tanh x&=\frac12.
\end{aligned}$$

From $\tanh x=\frac{e^{2x}-1}{e^{2x}+1}$,

$$\frac{e^{2x}-1}{e^{2x}+1}=\frac12
\quad\Longrightarrow\quad e^{2x}=3
\quad\Longrightarrow\quad
\boxed{x=\frac12\ln3}.$$

**Check:** $e^{2x}=3$ gives $\tanh x=\frac{3-1}{3+1}=\frac12$, as required.

</section>

<section class="lesson-check" markdown="1">

### Select admissible solutions independently {#equation-selection-task}

**Self-written independent task.** Solve $3\sinh x+\cosh x=2$ over the real numbers. Show every candidate produced by your substitution, decide which are admissible, and check the retained solution in the original equation.

Self-written, with no official marks. Complete the substitution, all candidates and the admissibility argument before revealing help.

<details markdown="1">
<summary>Hint</summary>

What condition accompanies an exponential substitution? Use it before taking logarithms.

</details>

<details markdown="1">
<summary>Answer and check</summary>

$$\begin{aligned}
t&=e^x>0,\\
\frac{3(t-t^{-1})+(t+t^{-1})}{2}&=2,\\
4t^2-4t-2&=0\quad\Longleftrightarrow\quad2t^2-2t-1=0,\\
t&=\frac{1\pm\sqrt3}{2}.
\end{aligned}$$

$$\boxed{x=\ln\left(\frac{1+\sqrt3}{2}\right)}.$$

$$3\sinh x+\cosh x=2t-\frac1t=2$$

Since $1-\sqrt3<0$, the negative candidate cannot equal an exponential and must be rejected. The last check follows by dividing $2t^2-2t-1=0$ by $t>0$. If you retained the negative candidate, revisit Example 2, state exponential positivity, then retry with answers closed.

</details>

</section>

## Inverse Hyperbolic Functions {#inverse-hyperbolic-functions}

The logarithmic forms follow by solving the definitions for $e^y$ and remembering that $e^y>0$.

### Inverse hyperbolic sine {#inverse-sinh}

Let $y=\sinh^{-1}x$, so $x=\sinh y$. Put $t=e^y>0$:

$$2x=t-\frac1t\quad\Longrightarrow\quad t^2-2xt-1=0.$$

The positive root is $t=x+\sqrt{x^2+1}$: it is positive for every real $x$, since $\sqrt{x^2+1}>\lvert x\rvert$. Therefore

$$\boxed{\sinh^{-1}x=\ln\left(x+\sqrt{x^2+1}\right)},\qquad x\in\mathbb R.$$

### Inverse hyperbolic cosine {#inverse-cosh}

Let $y=\cosh^{-1}x$ on the main branch $y\ge0$, so $x=\cosh y$ and $t=e^y\ge1$:

$$2x=t+\frac1t\quad\Longrightarrow\quad t^2-2xt+1=0.$$

For $x\ge1$, the root $t=x+\sqrt{x^2-1}$ is at least $1$ and gives the chosen branch. Hence

$$\boxed{\cosh^{-1}x=\ln\left(x+\sqrt{x^2-1}\right)},\qquad x\ge1.$$

At $x=1$, the function has value $0$; its derivative formula is defined only for $x>1$.

### Inverse hyperbolic tangent {#inverse-tanh}

Let $y=\tanh^{-1}x$ and put $t=e^{2y}>0$. Then

$$x=\frac{e^{2y}-1}{e^{2y}+1}=\frac{t-1}{t+1}
\quad\Longrightarrow\quad
t=\frac{1+x}{1-x}.$$

The ratio is positive exactly when $-1<x<1$. Thus

$$\boxed{\tanh^{-1}x=\frac12\ln\left(\frac{1+x}{1-x}\right)},\qquad -1<x<1.$$

The domain restriction is essential: the real inverse hyperbolic tangent function does not accept $x=\pm1$.

<section class="worked-example" markdown="1">

### Example 4 — Use the logarithmic forms {#example-4-use-the-logarithmic-forms}

**Question:** Find $\sinh^{-1}3$, $\cosh^{-1}2$ and $\tanh^{-1}\left(\frac13\right)$.

Apply the logarithmic forms, checking each input is in its domain:

$$\begin{aligned}
\sinh^{-1}3&=\ln(3+\sqrt{10}),\\
\cosh^{-1}2&=\ln(2+\sqrt3),\\
\tanh^{-1}\left(\frac13\right)&=\frac12\ln\left(\frac{1+\frac13}{1-\frac13}\right)=\frac12\ln2.
\end{aligned}$$

**Check:** the first two logarithm arguments are positive, $2\ge1$ is in the domain of $\cosh^{-1}$, and $\frac13$ lies between $-1$ and $1$.

</section>

## Differentiation {#differentiation}

Differentiate the exponential definitions. This proves the first two formulae:

$$\begin{aligned}
\frac{\mathrm d}{\mathrm dx}\sinh x
&=\frac{e^x+e^{-x}}2=\cosh x,\\
\frac{\mathrm d}{\mathrm dx}\cosh x
&=\frac{e^x-e^{-x}}2=\sinh x.
\end{aligned}$$

Using the quotient rule and $\cosh^2x-\sinh^2x=1$ proves the derivative of $\tanh x$:

$$\begin{aligned}
\frac{\mathrm d}{\mathrm dx}\tanh x
&=\frac{\cosh^2x-\sinh^2x}{\cosh^2x}\\
&=\operatorname{sech}^2x.
\end{aligned}$$

Differentiate the reciprocal definitions for the other three:

$$\begin{aligned}
\frac{\mathrm d}{\mathrm dx}\operatorname{sech}x
&=-\frac{\sinh x}{\cosh^2x}=-\operatorname{sech}x\tanh x,\\
\frac{\mathrm d}{\mathrm dx}\operatorname{coth}x
&=\frac{\sinh^2x-\cosh^2x}{\sinh^2x}=-\operatorname{cosech}^2x,\\
\frac{\mathrm d}{\mathrm dx}\operatorname{cosech}x
&=-\frac{\cosh x}{\sinh^2x}=-\operatorname{cosech}x\operatorname{coth}x.
\end{aligned}$$

The $\operatorname{coth}$ and $\operatorname{cosech}$ formulae require $x\ne0$.

For a differentiable inner function $u=u(x)$, multiply by $u^{\prime}=\frac{\mathrm du}{\mathrm dx}$:

$$\boxed{\begin{aligned}
\frac{\mathrm d}{\mathrm dx}\sinh u&=u^{\prime}\cosh u,&
\frac{\mathrm d}{\mathrm dx}\cosh u&=u^{\prime}\sinh u,\\
\frac{\mathrm d}{\mathrm dx}\tanh u&=u^{\prime}\operatorname{sech}^2u,&
\frac{\mathrm d}{\mathrm dx}\operatorname{sech}u&=-u^{\prime}\operatorname{sech}u\tanh u,\\
\frac{\mathrm d}{\mathrm dx}\operatorname{coth}u&=-u^{\prime}\operatorname{cosech}^2u,&
\frac{\mathrm d}{\mathrm dx}\operatorname{cosech}u&=-u^{\prime}\operatorname{cosech}u\operatorname{coth}u.
\end{aligned}}$$

Use the same exclusions for reciprocal functions: $\operatorname{coth}u$ and $\operatorname{cosech}u$ require $u\ne0$.

### Derivatives of inverse functions {#inverse-derivatives}

Implicit differentiation gives the inverse derivatives and their domains. For $y=\sinh^{-1}x$, use $x=\sinh y$:

$$1=\cosh y\frac{\mathrm dy}{\mathrm dx},\qquad \cosh y=\sqrt{1+\sinh^2y}=\sqrt{1+x^2},$$

so $\displaystyle\frac{\mathrm d}{\mathrm dx}\sinh^{-1}x=\frac1{\sqrt{1+x^2}}$ for every real $x$.

For $y=\cosh^{-1}x$, the chosen branch has $y>0$ when $x>1$, so $\sinh y>0$:

$$1=\sinh y\frac{\mathrm dy}{\mathrm dx},\qquad \sinh y=\sqrt{\cosh^2y-1}=\sqrt{x^2-1}.$$

Hence $\displaystyle\frac{\mathrm d}{\mathrm dx}\cosh^{-1}x=\frac1{\sqrt{x^2-1}}$ for $x>1$. The function is defined at $x=1$, but its derivative is not finite there.

For $y=\tanh^{-1}x$, use $x=\tanh y$ and $\operatorname{sech}^2y=1-\tanh^2y$:

$$1=\operatorname{sech}^2y\frac{\mathrm dy}{\mathrm dx}=(1-x^2)\frac{\mathrm dy}{\mathrm dx}.$$

Thus $\displaystyle\frac{\mathrm d}{\mathrm dx}\tanh^{-1}x=\frac1{1-x^2}$ for $-1<x<1$.

For a differentiable inner function $u=u(x)$, the chain rule gives

$$\boxed{\begin{aligned}
\frac{\mathrm d}{\mathrm dx}\sinh^{-1}u&=\frac{u^{\prime}}{\sqrt{1+u^2}},\\
\frac{\mathrm d}{\mathrm dx}\cosh^{-1}u&=\frac{u^{\prime}}{\sqrt{u^2-1}},\\
\frac{\mathrm d}{\mathrm dx}\tanh^{-1}u&=\frac{u^{\prime}}{1-u^2}.
\end{aligned}}$$

The first formula applies wherever $u$ is real and differentiable; the second requires $u>1$ for a finite derivative; the third requires $-1<u<1$.

<section class="worked-example" markdown="1">

### Example 5 — Differentiate a direct composite {#example-5-differentiate-a-direct-composite}

**Question:** Differentiate $y=3\sinh(2x)-4\operatorname{coth}x$ and state its domain.

Use the chain rule and the derivative of $\operatorname{coth}x$:

$$\begin{aligned}
\frac{\mathrm dy}{\mathrm dx}
&=3\cdot2\cosh(2x)-4\left(-\operatorname{cosech}^2x\right)\\
&=\boxed{6\cosh(2x)+4\operatorname{cosech}^2x}.
\end{aligned}$$

The function and derivative are defined for $x\ne0$, because $\operatorname{coth}x$ and $\operatorname{cosech}x$ are undefined at zero.

</section>

<section class="worked-example" markdown="1">

### Example 6 — Differentiate a composite inverse function {#example-6-differentiate-a-composite-inverse-function}

**Question:** Differentiate $y=\cosh^{-1}(2x+1)$ and state where the derivative exists.

The function requires $2x+1\ge1$, so $x\ge0$. Its derivative formula requires the stricter condition $2x+1>1$, so $x>0$:

$$\begin{aligned}
\frac{\mathrm dy}{\mathrm dx}
&=\frac2{\sqrt{(2x+1)^2-1}}\\
&=\boxed{\frac1{\sqrt{x(x+1)}}},\qquad x>0.
\end{aligned}$$

**Check:** at $x=0$, the function has value $\cosh^{-1}1=0$, but the denominator in the derivative is zero. The endpoint is in the function's domain, not the derivative's.

</section>

## Integration {#integration}

### Standard integrals {#standard-integrals}

Each formula follows by reversing one of the derivative results. Here $a\ne0$; use an interval on which the integrand and antiderivative are defined.

| Integrand | Antiderivative |
|---|---|
| $\sinh(ax+b)$ | $\displaystyle\frac1a\cosh(ax+b)+C$ |
| $\cosh(ax+b)$ | $\displaystyle\frac1a\sinh(ax+b)+C$ |
| $\operatorname{sech}^2(ax+b)$ | $\displaystyle\frac1a\tanh(ax+b)+C$ |
| $\operatorname{cosech}^2(ax+b)$ | $\displaystyle-\frac1a\operatorname{coth}(ax+b)+C$ |
| $\operatorname{sech}(ax+b)\tanh(ax+b)$ | $\displaystyle-\frac1a\operatorname{sech}(ax+b)+C$ |
| $\operatorname{cosech}(ax+b)\operatorname{coth}(ax+b)$ | $\displaystyle-\frac1a\operatorname{cosech}(ax+b)+C$ |

Three standard inverse-hyperbolic forms are especially useful. Here $a>0$:

$$\boxed{\begin{aligned}
\int\frac{\mathrm dx}{\sqrt{x^2+a^2}}&=\sinh^{-1}\left(\frac xa\right)+C,\\
\int\frac{\mathrm dx}{\sqrt{x^2-a^2}}&=\cosh^{-1}\left(\frac xa\right)+C,\qquad x>a,\\
\int\frac{\mathrm dx}{a^2-x^2}&=\frac1a\tanh^{-1}\left(\frac xa\right)+C,\qquad \lvert x\rvert<a.
\end{aligned}}$$

The first integrand is real for every real $x$. The second formula is stated for $x>a$; its integrand is undefined at $x=a$. The integrand is also real for $x<-a$, but the displayed $\cosh^{-1}(x/a)$ form does not apply on that interval. The third inverse-function form applies on $(-a,a)$; on any interval avoiding $x=\pm a$, it may also be written

$$\int\frac{\mathrm dx}{a^2-x^2}=\frac1{2a}\ln\left\lvert \frac{a+x}{a-x}\right\rvert +C.$$

When substituting $u=g(x)$, replace every $x$ and $\mathrm dx$, and include the factor from $\mathrm du=g^{\prime}(x)\,\mathrm dx$. Keep $+C$ for an indefinite integral. For a definite integral, change the limits with the substitution or return to the original variable before using the original limits.

## Worked Examples {#worked-examples}

<section class="worked-example" markdown="1">

### Example 7 — Substitute into a standard integral {#example-7-substitute-into-a-standard-integral}

**Question:** Find $\displaystyle\int(2x+1)\operatorname{sech}^2(x^2+x)\,\mathrm dx$.

Let $u=x^2+x$, so $\mathrm du=(2x+1)\,\mathrm dx$. Then

$$\begin{aligned}
\int(2x+1)\operatorname{sech}^2(x^2+x)\,\mathrm dx
&=\int\operatorname{sech}^2u\,\mathrm du\\
&=\boxed{\tanh(x^2+x)+C}.
\end{aligned}$$

**Check:** differentiating the answer gives $(2x+1)\operatorname{sech}^2(x^2+x)$.

</section>

<section class="worked-example" markdown="1">

### Example 8 — Scale an inverse-hyperbolic-sine integral {#example-8-scale-an-inverse-hyperbolic-integral}

**Question:** Find $\displaystyle\int\frac{\mathrm dx}{\sqrt{9x^2+4}}$.

Factor the constant inside the square root and use $u=\frac{3x}{2}$, so $\mathrm dx=\frac23\,\mathrm du$:

$$\begin{aligned}
\int\frac{\mathrm dx}{\sqrt{9x^2+4}}
&=\frac{2/3}{2}\int\frac{\mathrm du}{\sqrt{u^2+1}}\\
&=\frac13\sinh^{-1}u+C\\
&=\boxed{\frac13\sinh^{-1}\left(\frac{3x}{2}\right)+C}.
\end{aligned}$$

The integrand is real for every real $x$. **Check:** the derivative of the boxed result is $\frac1{\sqrt{9x^2+4}}$.

</section>

<section class="worked-example" markdown="1">

### Example 9 — Integrate a scaled difference of squares {#example-9-integrate-a-scaled-difference-of-squares}

**Question:** Find $\displaystyle\int\frac{\mathrm dx}{16-4x^2}$ and state where the original integrand is defined.

Factor out $4$ and use $a=2$ in the standard form:

$$\begin{aligned}
\int\frac{\mathrm dx}{16-4x^2}
&=\frac14\int\frac{\mathrm dx}{2^2-x^2}\\
&=\frac14\cdot\frac12\tanh^{-1}\left(\frac x2\right)+C\\
&=\boxed{\frac18\tanh^{-1}\left(\frac x2\right)+C},\qquad \lvert x\rvert<2.
\end{aligned}$$

For the two logarithms, use $u=2+x$, $\mathrm du=\mathrm dx$, and $v=2-x$, $\mathrm dv=-\mathrm dx$; the second substitution supplies the minus sign. Partial fractions give

$$\begin{aligned}
\frac1{16-4x^2}&=\frac1{16}\left(\frac1{2+x}+\frac1{2-x}\right),\\
\int\frac{\mathrm dx}{16-4x^2}
&=\frac1{16}\left(\int\frac{\mathrm dx}{2+x}+\int\frac{\mathrm dx}{2-x}\right)\\
&=\frac1{16}\left(\ln\lvert2+x\rvert-\ln\lvert2-x\rvert\right)+C\\
&=\frac1{16}\ln\left\lvert\frac{2+x}{2-x}\right\rvert+C.
\end{aligned}$$

The original integrand is defined for $x\ne\pm2$; the antiderivative is considered separately on each interval $(-\infty,-2)$, $(-2,2)$ and $(2,\infty)$. The inverse-hyperbolic form shown above applies only on $(-2,2)$.

</section>

## Practice {#practice}

Questions 1–8 are **original practice written for this lesson (not official questions)**. Try each before opening its hint and solution. Question 3 practises the same positive-substitution method used in OxfordAQA specimen work; it is not copied from a paper.

<section class="lesson-check" markdown="1">

### Question 1 — Check the identities {#question-1-check-the-identities}

Show from the exponential definitions that $\cosh^2x-\sinh^2x=1$, then deduce $1-\tanh^2x=\operatorname{sech}^2x$.

<details markdown="1">
<summary>Hint</summary>

Write both squared terms with denominator $4$, expand and subtract. Then divide the first identity by $\cosh^2x$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\begin{aligned}
\cosh^2x-\sinh^2x
&=\frac{(e^x+e^{-x})^2-(e^x-e^{-x})^2}{4}\\
&=1.
\end{aligned}$$

Dividing by $\cosh^2x$ gives

$$1-\tanh^2x=\frac{\cosh^2x-\sinh^2x}{\cosh^2x}=\frac1{\cosh^2x}=\operatorname{sech}^2x.$$

The denominator is non-zero for every real $x$, since $\cosh x>0$.

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 2 — Read domains and asymptotes {#question-2-read-domains-and-asymptotes}

State the domain and range of $\tanh x$, $\tanh^{-1}x$ and $\operatorname{coth}x$. Give each function's asymptotes and parity where applicable.

<details markdown="1">
<summary>Hint</summary>

Use the graph table. The inverse function swaps the domain and range of $\tanh x$; $\operatorname{coth}x$ is undefined when its denominator is zero.

</details>

<details markdown="1">
<summary>Solution and check</summary>

For $\tanh x$, the domain is $\mathbb R$, the range is $(-1,1)$, the function is odd, and its horizontal asymptotes are $y=\pm1$.

For $\tanh^{-1}x$, the domain is $(-1,1)$, the range is $\mathbb R$, the function is odd, and its vertical asymptotes are $x=\pm1$.

For $\operatorname{coth}x$, the domain is $\mathbb R\setminus\lbrace0\rbrace$, the range is $(-\infty,-1)\cup(1,\infty)$, the function is odd, and its asymptotes are $x=0$ and $y=\pm1$.

**Check:** the range bounds $(-1,1)$ of $\tanh x$ become the excluded endpoints of the domain of $\tanh^{-1}x$.

</details>

</section>

<section class="lesson-check" markdown="1">

### Construct the graphs and justify the branch {#graph-and-branch-task}

**Self-written graph and branch task.** With the reference figure covered, sketch the six core graphs on labelled axes. Mark domains, ranges, intercepts or endpoints and asymptotes. Use exponentials to justify the parity of $\sinh x$ and $\cosh x$ and the minimum of $\cosh x$. Starting from $x=\cosh y$, derive the logarithmic formula for $y=\cosh^{-1}x$, explain the rejected branch, and derive its derivative with its domain.

Self-written, with no official marks. Produce six sketches, exponential arguments and a branch derivation; do not copy the reference table.

<details markdown="1">
<summary>Hint</summary>

Compare positive and negative inputs using exponentials. After solving the quadratic in the exponential, distinguish positivity from being at least 1. Reflection swaps the domain and range.

</details>

<details markdown="1">
<summary>Answer and output criteria</summary>

$$\begin{aligned}
\sinh(-x)&=\frac{e^{-x}-e^x}{2}
=-\frac{e^x-e^{-x}}{2}=-\sinh x,\\
\cosh(-x)&=\frac{e^{-x}+e^x}{2}
=\frac{e^x+e^{-x}}{2}=\cosh x.
\end{aligned}$$

Thus sinh is odd and cosh is even. Also, since $e^x>0$,

$$\cosh x-1=\frac{e^{2x}-2e^x+1}{2e^x}
=\frac{(e^x-1)^2}{2e^x}\ge0.$$

Equality holds exactly when $e^x=1$, so $x=0$ and the minimum value of cosh is 1.

$$\begin{aligned}
t&=e^y\ge1,\qquad x=\frac{t+t^{-1}}2\ge1,\\
t^2-2xt+1&=0,\qquad t=x\pm\sqrt{x^2-1},\\
(x+\sqrt{x^2-1})(x-\sqrt{x^2-1})&=1,\\
y&=\boxed{\ln(x+\sqrt{x^2-1})},\qquad x\ge1.
\end{aligned}$$

$$1=\sinh y\frac{\mathrm dy}{\mathrm dx},\qquad
\sinh y=+\sqrt{x^2-1},\qquad
\boxed{\frac{\mathrm dy}{\mathrm dx}=\frac1{\sqrt{x^2-1}}\quad(x>1).}$$

For the inverse, when $x>1$ the plus root exceeds 1 and the minus root is its reciprocal in $(0,1)$, corresponding to negative $y$; at $x=1$ both roots are 1. The nonnegative output branch selects the positive square root in differentiation; the function is defined at 1 but has no finite derivative there.

Sketch check: sinh and asinh are odd and increasing on all real inputs, through the origin, with no asymptotes; cosh is even with minimum $(0,1)$ and range $[1,\infty)$; acosh increases from $(1,0)$ with domain $[1,\infty)$ and range $[0,\infty)$, without asymptotes; tanh has all real inputs, range $(-1,1)$ and horizontal asymptotes $y=\pm1$; atanh has domain $(-1,1)$, all real outputs and vertical asymptotes $x=\pm1$. The last two are odd and increasing through the origin. Compare with the six reference graphs after drawing. If the branch argument is missing, revisit inverse-cosh and reconstruct the graph independently.

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 3 — Keep only positive exponential roots {#question-3-keep-only-positive-roots}

Solve $3\sinh x+4\cosh x=4$ by setting $t=e^x$.

<details markdown="1">
<summary>Hint</summary>

Use $t>0$. After clearing the denominator, factor the quadratic and check the sign of each root before taking a logarithm.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\begin{aligned}
3\sinh x+4\cosh x=4
&\Longleftrightarrow\frac{3(t-t^{-1})+4(t+t^{-1})}{2}=4\\
&\Longleftrightarrow 7t^2-8t+1=0\\
&\Longleftrightarrow (7t-1)(t-1)=0.
\end{aligned}$$

Both roots are positive: $t=\frac17$ or $t=1$. Therefore

$$\boxed{x=-\ln7\quad\text{or}\quad x=0.}$$

Substitution into the original equation gives $3\sinh(-\ln7)+4\cosh(-\ln7)=4$ and $3\sinh0+4\cosh0=4$.

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 4 — Apply the inverse logarithmic forms {#question-4-apply-the-inverse-logarithmic-forms}

Find $\sinh^{-1}(-3)$, $\cosh^{-1}3$ and $\tanh^{-1}\left(\frac13\right)$. State why $\cosh^{-1}(-3)$ is not real.

<details markdown="1">
<summary>Hint</summary>

Use the three logarithmic formulae and check each input against its inverse function's domain before substituting.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\begin{aligned}
\sinh^{-1}(-3)&=\ln\left(\sqrt{10}-3\right),\\
\cosh^{-1}3&=\ln(3+\sqrt8),\\
\tanh^{-1}\left(\frac13\right)&=\frac12\ln2.
\end{aligned}$$

The first logarithm argument is positive because $\sqrt{10}>3$. The input $3$ is in the domain $[1,\infty)$ of $\cosh^{-1}$. The input $\frac13$ is in $(-1,1)$. There is no real $y$ with $\cosh y=-3$, since $\cosh y\ge1$ for every real $y$.

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 5 — Differentiate using direct-function rules {#question-5-differentiate-using-direct-rules}

Differentiate $y=2\cosh(3x)-\operatorname{sech}(x^2)$.

<details markdown="1">
<summary>Hint</summary>

Use the chain rule on both terms. For the second term, $\frac{\mathrm d}{\mathrm du}\operatorname{sech}u=-\operatorname{sech}u\tanh u$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\begin{aligned}
\frac{\mathrm dy}{\mathrm dx}
&=2\cdot3\sinh(3x)-\left[-2x\operatorname{sech}(x^2)\tanh(x^2)\right]\\
&=\boxed{6\sinh(3x)+2x\operatorname{sech}(x^2)\tanh(x^2)}.
\end{aligned}$$

The plus sign in the second term comes from subtracting the negative derivative of $\operatorname{sech}u$.

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 6 — Differentiate an inverse composite {#question-6-differentiate-an-inverse-composite}

Differentiate $y=\tanh^{-1}(\sin x)$ and state where the function and derivative are defined.

<details markdown="1">
<summary>Hint</summary>

The inverse hyperbolic tangent requires $-1<\sin x<1$. Apply the chain rule and use $1-\sin^2x=\cos^2x$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The condition $-1<\sin x<1$ excludes $x=\frac\pi2+k\pi$, where $k\in\mathbb Z$. At every other real $x$,

$$\begin{aligned}
\frac{\mathrm dy}{\mathrm dx}
&=\frac{\cos x}{1-\sin^2x}\\
&=\boxed{\frac1{\cos x}}.
\end{aligned}$$

The function and derivative are defined on each interval between the excluded points. The simplification uses division by $\cos^2x$, so it does not restore the excluded points.

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 7 — Substitute into a hyperbolic integral {#question-7-substitute-into-a-hyperbolic-integral}

Find $\displaystyle\int 2x\cosh(x^2+1)\,\mathrm dx$.

<details markdown="1">
<summary>Hint</summary>

Let $u=x^2+1$, so $\mathrm du=2x\,\mathrm dx$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\begin{aligned}
\int 2x\cosh(x^2+1)\,\mathrm dx
&=\int\cosh u\,\mathrm du\\
&=\boxed{\sinh(x^2+1)+C}.
\end{aligned}$$

Differentiating the answer gives $2x\cosh(x^2+1)$.

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 8 — Scale three standard integrals {#question-8-scale-standard-integrals}

Find $\displaystyle\int\frac{\mathrm dx}{\sqrt{4x^2+9}}$ and $\displaystyle\int\frac{\mathrm dx}{25-4x^2}$, and, for $x>\frac32$, find $\displaystyle\int\frac{\mathrm dx}{\sqrt{4x^2-9}}$. State where each original integrand is defined.

<details markdown="1">
<summary>Hint</summary>

For the first, use $u=\frac{2x}{3}$. For the second, write the denominator as $5^2-(2x)^2$ and keep the factor from $\mathrm du=2\,\mathrm dx$. For the third, use $u=\frac{2x}{3}$ and the condition $u>1$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

For the first integral, $u=\frac{2x}{3}$ gives $\mathrm dx=\frac32\,\mathrm du$:

$$\begin{aligned}
\int\frac{\mathrm dx}{\sqrt{4x^2+9}}
&=\frac{3/2}{3}\int\frac{\mathrm du}{\sqrt{1+u^2}}\\
&=\frac12\sinh^{-1}u+C\\
&=\boxed{\frac12\sinh^{-1}\left(\frac{2x}{3}\right)+C}.
\end{aligned}$$

It is defined for every real $x$.

For the second, let $u=2x$, so $\mathrm dx=\frac12\,\mathrm du$:

$$\begin{aligned}
\int\frac{\mathrm dx}{25-4x^2}
&=\frac12\int\frac{\mathrm du}{25-u^2}\\
&=\frac12\cdot\frac15\tanh^{-1}\left(\frac u5\right)+C\\
&=\boxed{\frac1{10}\tanh^{-1}\left(\frac{2x}{5}\right)+C},\qquad \lvert x\rvert<\frac52.
\end{aligned}$$

The original denominator is non-zero for $x\ne\pm\frac52$. The inverse-hyperbolic form shown applies on $(-\frac52,\frac52)$; on other intervals, use the logarithmic form and a separate constant.

For the third integral, let $u=\frac{2x}{3}$, so $\mathrm dx=\frac32\,\mathrm du$. Since $x>\frac32$, we have $u>1$:

$$\begin{aligned}
\int\frac{\mathrm dx}{\sqrt{4x^2-9}}
&=\frac{3/2}{3}\int\frac{\mathrm du}{\sqrt{u^2-1}}\\
&=\frac12\cosh^{-1}u+C\\
&=\boxed{\frac12\cosh^{-1}\left(\frac{2x}{3}\right)+C},\qquad x>\frac32.
\end{aligned}$$

The original integrand is real for $\lvert x\rvert>\frac32$. This exercise asks for the positive branch $x>\frac32$, where the displayed inverse-cosh form applies. The endpoint $x=\frac32$ is excluded because the original denominator is zero there.

</details>

</section>

## Diagnose and Retry {#diagnose-and-retry}

<section class="lesson-check" markdown="1">

### Try the definitions again {#definition-retry}

**Question:** Given $\sinh b=-\frac34$, find $e^b$ and $\cosh b$ exactly. Is $b$ positive, zero or negative? Justify your answer.

Self-written task, with no official marks. Close the earlier solution before trying this new question. You will also use AS quadratic factorisation.

<details markdown="1">
<summary>Hint</summary>

Call the positive number $e^b$ by a shorter name $t$. Then $e^{-b}=1/t$. Substitute into the definition of $\sinh b$ and solve for $t$.

</details>

<details markdown="1">
<summary>Solution and feedback</summary>

Let $t=e^b>0$. The given function value gives an equation for this number:

$$\begin{aligned}
\frac{t-1/t}{2}&=-\frac34,\\
2t^2+3t-2&=0,\\
(2t-1)(t+2)&=0.
\end{aligned}$$

The candidates are $t=\frac12$ and $t=-2$. An exponential is positive, so reject the second:

$$\begin{aligned}
e^b&=\frac12,\\
e^{-b}&=2,\\
\cosh b&=\frac{\frac12+2}{2}=\frac54.
\end{aligned}$$

Since $e^0=1$ and the exponential function is increasing, $e^b<1$ means $b<0$. Check the given value:

$$\sinh b=\frac{\frac12-2}{2}=-\frac34.$$

If you kept the negative candidate, revisit why $e^b>0$. If you obtained a negative $\cosh b$, return to its definition: it adds two positive numbers. If the quadratic is the difficulty, review [factorisation](/alevel/as-mathematics/algebra/#l02-worked), then close the help and reconstruct the calculation.

</details>

</section>

If this is your first reading, return to [combining the two functions](#ratio-and-reciprocals) and follow the lesson from there. The tasks below are for after you have studied the inverse-function and calculus sections.

These tasks are self-written and have no official marks. Explain the error before opening feedback; then close every solution and attempt the new task independently. If you need a hint, return later for another independent attempt.

<section class="lesson-check" markdown="1">

**Diagnose:** A learner inserts an absolute value into the logarithm for $\cosh^{-1}(-2)$ and claims this creates a real inverse value. Explain why this cannot repair the problem.

<details markdown="1">
<summary>Feedback</summary>

For every real input $y$, $\cosh y\ge1$. Thus no real $y$ can satisfy $\cosh y=-2$. Changing a logarithm cannot change the domain of the inverse function.

</details>

</section>

<section class="lesson-check" markdown="1">

### Retry the inverse-cosh conditions {#acosh-branch-retry}

**Branch retry (self-written).** Solve $\cosh y=2$ for all real $y$, and state $\cosh^{-1}2$. Then decide separately whether $\cosh^{-1}(-2)$ and $\cosh^{-1}1$ are real, and whether the derivative of $\cosh^{-1}x$ is finite at $x=1$. Justify every decision.

Self-written, with no official marks. Close the diagnosis feedback and distinguish equation solutions, the principal inverse, the input domain and the derivative domain.

<details markdown="1">
<summary>Hint</summary>

Cosh is even; acosh also restricts the output to be nonnegative.

</details>

<details markdown="1">
<summary>Retry answer and check</summary>

$$\begin{aligned}
t=e^y>0:\quad t^2-4t+1&=0,\\
t&=2\pm\sqrt3,\\
(2+\sqrt3)(2-\sqrt3)&=1,\\
y&=\pm\ln(2+\sqrt3),\\
\cosh^{-1}2&=\ln(2+\sqrt3).
\end{aligned}$$

Both exponential roots are positive, so the equation has positive and negative solutions; the inverse returns only the nonnegative one. $\cosh^{-1}(-2)$ has no real value because cosh of a real number is at least 1; $\cosh^{-1}1=0$ is defined. However, $1/\sqrt{x^2-1}$ gives no finite value at $x=1$, so there is no finite derivative there. If you still identify the function domain with the derivative domain, revisit Example 6 and retry with answers closed.

</details>

</section>

The retained asinh task below separately combines slope, values and graph shape.

<section class="lesson-check" markdown="1">

**Independent retry:** Let $y=\sinh^{-1}(kx)$, where $k>0$. Its gradient at the origin is $2$. Determine $k$ and find the value of $x$ for which $y=\ln3$. Sketch the resulting function, marking the origin and the point you found; explain how its slope changes.

<details markdown="1">
<summary>Hint</summary>

Use the chain rule to interpret the gradient, then return to the defining direct function.

</details>

<details markdown="1">
<summary>Retry solution and check</summary>

The derivative is $k/\sqrt{1+k^2x^2}$, so at zero $k=2$. The value condition becomes $2x=\sinh(\ln3)=(3-1/3)/2=4/3$, giving $x=2/3$. Substitution gives $\sinh^{-1}(4/3)=\ln3$. The graph is odd and increasing; mark $(0,0)$ and $(2/3,\ln3)$. The derivative gives slope $2$ at the origin, decreasing as $\lvert x\rvert$ increases, but the graph has no horizontal asymptote.

</details>

</section>

**Next after practice:** close this chapter and attempt the course [mixed review](/alevel/a2-further-mathematics/#mixed-review). After subsequent learning, attempt the [later retrieval tasks](/alevel/a2-further-mathematics/#later-review). Record whether the first attempt was independent, any hint used, the error and the retry result. If a method or condition was wrong, use this chapter’s after-practice route to repair that skill, then retry with solutions closed.

## Quick Reference {#quick-reference}

| Topic | Result | Condition to remember |
|---|---|---|
| Definitions | $\sinh x=\frac{e^x-e^{-x}}2$, $\cosh x=\frac{e^x+e^{-x}}2$ | Use $e^x>0$ in substitutions |
| Main identity | $\cosh^2x-\sinh^2x=1$ | All real $x$ |
| Other identities | $1-\tanh^2x=\operatorname{sech}^2x$, $\operatorname{coth}^2x-1=\operatorname{cosech}^2x$ | The second requires $x\ne0$ |
| Addition | $\sinh(x+y)=\sinh x\cosh y+\cosh x\sinh y$ | Prove from exponential definitions |
| Linear equation | $a\sinh x+b\cosh x=c$ becomes $(a+b)t^2-2ct+(b-a)=0$ | $t=e^x>0$; reject non-positive roots |
| Inverse logarithms | $\sinh^{-1}x=\ln(x+\sqrt{x^2+1})$; $\cosh^{-1}x=\ln(x+\sqrt{x^2-1})$; $\tanh^{-1}x=\frac12\ln\frac{1+x}{1-x}$ | Domains: $\mathbb R$, $x\ge1$, $-1<x<1$ |
| Derivatives | $\sinh^{\prime} x=\cosh x$, $\cosh^{\prime} x=\sinh x$, $\tanh^{\prime} x=\operatorname{sech}^2x$ | Chain rule multiplies by $u^{\prime}$ |
| Inverse derivatives | $(\sinh^{-1}x)^{\prime}=\frac1{\sqrt{1+x^2}}$, $(\cosh^{-1}x)^{\prime}=\frac1{\sqrt{x^2-1}}$, $(\tanh^{-1}x)^{\prime}=\frac1{1-x^2}$ | Respect the inverse domains; $\cosh^{-1}$ derivative requires $x>1$ |
| Integration | Reverse the six derivative formulae or use the three standard inverse-hyperbolic forms | Scale by the inner derivative, state domain, and include $+C$ |
{: .wide-table}

**After practice:** repeat any solution you could not complete without its hint. For every equation in $e^x$, check positivity before taking a logarithm; for every inverse function, check its domain before differentiating or integrating.

**Learning path:** [Previous lesson: arc length and surface area](/alevel/a2-further-mathematics/arc-length-and-surface-area/) · [Next lesson: first-order differential equations](/alevel/a2-further-mathematics/first-order-differential-equations/) · [Further Pure Mathematics](/alevel/a2-further-mathematics/).

## Sources {#sources}

<details id="preparation-notes" markdown="1">
<summary>Preparation, scope and textbook</summary>

Textbook: Chapter 24, printed pp. 288–305, in *International A Level Further Mathematics*.

Before working with inverse functions and calculus, review [inverse-function branches](/alevel/a2-mathematics/functions/#inverse-functions), the [chain rule](/alevel/a2-mathematics/differentiation/#composite-functions), [implicit differentiation](/alevel/a2-mathematics/differentiation/#implicit-functions) and [substitution](/alevel/a2-mathematics/integration/#substitution). Return to Example 2 to state why an exponential is positive, or to [the inverse-cosh branch](#inverse-cosh) to justify rejecting the other branch.

The whole lesson covers proofs from exponential definitions, the six core graphs, equations, inverse functions and their calculus. Unless an official question or adaptation is explicitly identified, its worked examples and exercises are self-written teaching tasks with no official marks.

This introductory revision was checked on 2026-10-24 against FP2.9 and January 2025 FM03 Question 2 with its matching official mark scheme: [question paper, p. 4](/assets/pdf/fx-cg50/references/oxfordaqa-fm03-2025-january-question-paper.pdf#page=4) and [mark scheme, p. 5](/assets/pdf/fx-cg50/references/oxfordaqa-fm03-2025-january-mark-scheme.pdf#page=5). These were source checks; the new tasks are self-written.

</details>

Scope check on 2026-10-23: the current 9665 qualification page led to specification v5.2; the relevant FP2 section was checked without migrating to 9765. For the papers and schemes below, only the identified questions and matching marking sections were reread as PDF text; visual verification of the original PDF pages was not completed. Official identities and marks are retained; adaptations and self-written tasks are labelled separately.

The scope follows OxfordAQA's [International A-level Further Mathematics specification, FP2.9, printed p. 19](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf). Example 3 adapts the solution method from OxfordAQA Specimen 2018 FM03, Question 2, checked against its official mark scheme, Question 2. The example changes the equation; it is not an official question and no official mark allocation is implied.

[OxfordAQA Specimen 2018, Q2, QP PDF p. 4](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9665-FM03-international-a-level-further-mathematics-specimen-paper-2019-v3.pdf#page=4); [MS Q2, PDF p. 5](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9665-FM03-international-a-level-further-mathematics-mark-scheme-2016-v1.pdf#page=5). Question and matching mark scheme reread on 2026-10-23 (PDF text). Only the identified method is adapted; the adapted question and additional self-written tasks are not official questions.
