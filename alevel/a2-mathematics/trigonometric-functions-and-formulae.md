---
title: Trigonometric Functions and Formulae
layout: subjects
mathjax: true
grade: a2
subject: a2-mathematics
permalink: /alevel/a2-mathematics/trigonometric-functions-and-formulae/
toc_headings: h2
study_page: true
---

[Pure Mathematics](/alevel/a2-mathematics/) · P2.4 Trigonometric Functions and Formulae

Use inverse and reciprocal functions, prove identities and choose formulae to solve trigonometric equations.

- **Learning:** study each method, then use the worked examples to check signs and intervals.
- **Homework help:** use the [method table](#choose-a-method). Check the angle unit, undefined values and the full interval before calculating.
- **Revision:** try [practice](#practice) with solutions closed, then check the [quick reference](#quick-reference).

Textbook: Chapter 3, Sections 3.1–3.6 (printed pp. 32–49). This lesson follows its inverse functions, reciprocal functions, trigonometric formulae, compound angle formulae, expressions of the form $a\cos\theta+b\sin\theta$, and double angle formulae.

**Before you start:** you should know sine, cosine and tangent graphs, exact values, quadrants, radians, [inverse functions](/alevel/a2-mathematics/functions/) and [transformations](/alevel/a2-mathematics/modulus-and-transformations/).

All worked examples and practice questions are self-written, not official past-paper questions. The suggested practice time is a guide; no official marks are assigned.

## Choose a Method

| Task | First step | Check |
|---|---|---|
| Inverse function | Use its restricted range | One inverse value is not a full set of equation solutions |
| Reciprocal function | Write it in terms of sine or cosine | Keep undefined values excluded |
| Prove an identity | Work on one side using known formulae | Do not assume the identity you are proving |
| Compound angle | Expand, or recognise the expanded form | Cosine uses the opposite sign |
| $a\cos\theta+b\sin\theta$ | Compare coefficients in the requested form | Check the quadrant of $\alpha$ |
| Multiple angles | Use a double angle formula or change the angle variable | Transform the interval too |

Use degrees when a question gives degrees. Otherwise this lesson uses radians. Keep exact values until the final answer; use full calculator values when finding decimal solutions.

## Inverse Trigonometric Functions

Sine, cosine and tangent must be restricted to give one-to-one functions before finding their inverses.

| Inverse function | Domain | Range of the inverse |
|---|---|---|
| $\sin^{-1}x$ | $-1\le x\le1$ | $-\frac\pi2\le y\le\frac\pi2$ |
| $\cos^{-1}x$ | $-1\le x\le1$ | $0\le y\le\pi$ |
| $\tan^{-1}x$ | All real $x$ | $-\frac\pi2<y<\frac\pi2$ |

For example, $\sin^{-1}\left(\frac12\right)=\frac\pi6$. It gives one angle in the stated range. Solving $\sin\theta=\frac12$ on $[0,2\pi]$ gives **two** angles: $\frac\pi6$ and $\frac{5\pi}6$.

**Important:** $\sin^{-1}x$ means the inverse function, not $\frac1{\sin x}$. Also, $\sin^{-1}(\sin\theta)=\theta$ only when $\theta$ is in the restricted range. For example, $\sin^{-1}\left(\sin\frac{5\pi}6\right)=\frac\pi6$.

The inverse graph is the reflection of the restricted original graph in $y=x$.

### Example 1 — Domain, range and a transformed inverse graph

**Question:** Find the domain and range of $y=\cos^{-1}(3x-2)$. Give three points for a sketch and solve $\cos^{-1}(3x-2)=\frac\pi3$.

The input to $\cos^{-1}$ must be between $-1$ and $1$:

$$-1\le3x-2\le1\quad\Rightarrow\quad\boxed{\frac13\le x\le1}.$$

The range is $\boxed{0\le y\le\pi}$. The curve decreases through

$$\left(\frac13,\pi\right),\quad\left(\frac23,\frac\pi2\right),\quad(1,0).$$

It is the graph of $y=\cos^{-1}x$ stretched by factor $\frac13$ parallel to the $x$-axis, then translated $\frac23$ in the positive $x$ direction.

To solve the equation, $3x-2=\cos\frac\pi3=\frac12$, giving $\boxed{x=\frac56}$.

**Check:** $\frac56$ is in the domain, and $\frac\pi3$ is in the inverse range. If the right-hand side had been $\frac{4\pi}3$, there would be no solution: it is outside that range.

## Reciprocal Trigonometric Functions

$$\cosec\theta=\frac1{\sin\theta},\qquad \sec\theta=\frac1{\cos\theta},$$

$$\cot\theta=\frac{\cos\theta}{\sin\theta}.$$

Where $\tan\theta$ is defined and non-zero, $\cot\theta=\frac1{\tan\theta}$. Use $\frac{\cos\theta}{\sin\theta}$ to see the full domain: for example, $\cot\frac\pi2=0$ even though $\tan\frac\pi2$ is undefined.

- **Cosecant:** undefined at $\theta=k\pi$; period $2\pi$; values $y\le-1$ or $y\ge1$.
- **Secant:** undefined at $\theta=\frac\pi2+k\pi$; period $2\pi$; values $y\le-1$ or $y\ge1$.
- **Cotangent:** undefined at $\theta=k\pi$; period $\pi$; takes all real values and decreases between consecutive asymptotes.

Here $k$ is any integer. The undefined values give vertical asymptotes. Cosecant and secant are reciprocals of the graph's **heights**, not reflections of sine and cosine in $y=x$.

![Graphs of cosecant, secant and cotangent from zero to two pi, with dashed vertical asymptotes.](/assets/img/trigonometric-reciprocals.svg)

### Example 2 — Transform the interval as well as the angle

**Question:** Solve $\sec\left(2\theta-\frac\pi3\right)=-2$ for $0\le\theta\le\pi$.

Let $\phi=2\theta-\frac\pi3$. Then $-\frac\pi3\le\phi\le\frac{5\pi}3$. The equation becomes

$$\cos\phi=-\frac12.$$

Within the transformed interval, $\phi=\frac{2\pi}3$ or $\frac{4\pi}3$. Thus

$$\boxed{\theta=\frac\pi2,\ \frac{5\pi}6}.$$

**Check:** both values are in $[0,\pi]$, and their cosine values are non-zero. Taking only $\cos^{-1}(-\frac12)=\frac{2\pi}3$ would miss the second solution.

## Trigonometric Identities

Starting with $\sin^2\theta+\cos^2\theta=1$, divide by $\cos^2\theta$ or $\sin^2\theta$ to get

$$1+\tan^2\theta=\sec^2\theta,\qquad 1+\cot^2\theta=\cosec^2\theta.$$

Each identity holds where its expressions are defined. For a proof, start with one side and use known identities until you reach the other side. Numerical checks can find a mistake, but they do not prove an identity.

### Example 3 — Prove an identity

**Question:** Prove $\sec\theta-\cos\theta=\sin\theta\tan\theta$ where both sides are defined.

Start with the left-hand side:

$$\begin{aligned}
\sec\theta-\cos\theta
&=\frac1{\cos\theta}-\cos\theta\\
&=\frac{1-\cos^2\theta}{\cos\theta}\\
&=\frac{\sin^2\theta}{\cos\theta}\\
&=\sin\theta\tan\theta.
\end{aligned}$$

This is the right-hand side. The restriction is $\cos\theta\ne0$.

**Common mistake:** assuming the required result and rearranging it without explaining that every step is reversible.

### Example 4 — Eliminate a parameter

**Question:** Given $x=3\sec\theta$ and $y=2\tan\theta$, eliminate $\theta$ and state the possible $x$ values.

Use $\sec^2\theta-\tan^2\theta=1$:

$$\boxed{\frac{x^2}{9}-\frac{y^2}{4}=1}.$$

Since $\sec\theta\le-1$ or $\sec\theta\ge1$, $\boxed{x\le-3\text{ or }x\ge3}$. The parameter excludes $\theta=\frac\pi2+k\pi$.

**Check:** at $\theta=0$, $(x,y)=(3,0)$ satisfies both the original equations and the new equation. At $\theta=\pi$, the point is $(-3,0)$; do not discard the negative branch.

When the parameter has a restricted interval, keep any extra restrictions on the resulting curve.

## Compound Angle Formulae

$$\begin{aligned}
\sin(A+B)&=\sin A\cos B+\cos A\sin B,\\
\sin(A-B)&=\sin A\cos B-\cos A\sin B,\\
\cos(A+B)&=\cos A\cos B-\sin A\sin B,\\
\cos(A-B)&=\cos A\cos B+\sin A\sin B.
\end{aligned}$$

$$\tan(A+B)=\frac{\tan A+\tan B}{1-\tan A\tan B},$$

$$\tan(A-B)=\frac{\tan A-\tan B}{1+\tan A\tan B}.$$

Use tangent formulae only where all the terms are defined and the denominator is non-zero. If a tangent on the right is undefined, return to sine and cosine.

To derive the cosine difference formula, take two points on a unit circle at angles $A$ and $B$. The cosine formula gives their squared distance as $2-2\cos(A-B)$. Their coordinates give the same distance as

$$(\cos A-\cos B)^2+(\sin A-\sin B)^2.$$

Expanding and using $\sin^2 A+\cos^2 A=1$ gives $2-2(\cos A\cos B+\sin A\sin B)$. Equating the results gives the cosine difference formula. Replace $B$ by $-B$ to get the sum formula; use complementary angles to derive the sine formulae. Dividing the sine sum formula by the cosine sum formula gives the tangent sum formula where defined.

### Example 5 — Exact value and recognising a formula

**Question:** Find $\sin15^\circ$ exactly. Simplify $\sin\theta\cos\frac\pi4-\cos\theta\sin\frac\pi4$ and find the smallest positive value of $\theta$ at which the maximum occurs.

For the exact value,

$$\begin{aligned}
\sin15^\circ&=\sin(45^\circ-30^\circ)\\
&=\frac{\sqrt2}{2}\frac{\sqrt3}{2}-\frac{\sqrt2}{2}\frac12\\
&=\boxed{\frac{\sqrt6-\sqrt2}{4}}.
\end{aligned}$$

The second expression is $\sin\left(\theta-\frac\pi4\right)$. Its maximum is $1$, when $\theta-\frac\pi4=\frac\pi2+2k\pi$. The smallest positive such angle is $\boxed{\theta=\frac{3\pi}4}$.

**Check:** $\sin15^\circ$ is positive and less than $\sin30^\circ=\frac12$. Do not use $\sin(A-B)=\sin A-\sin B$.

## Sine and Cosine Forms

Choose the requested sine or cosine form and expand it **before** comparing coefficients. For example,

$$r\cos(\theta-\alpha)=r\cos\alpha\cos\theta+r\sin\alpha\sin\theta.$$

For $a\cos\theta+b\sin\theta$, this gives

$$r\cos\alpha=a,\qquad r\sin\alpha=b,\qquad r=\sqrt{a^2+b^2}.$$

Take $r>0$ when at least one of $a,b$ is non-zero. Choose $\alpha$ using **both** coefficient signs. The value of $\tan\alpha$ alone does not determine its quadrant. If $a=b=0$, the expression is zero and no angle is needed.

For $r\sin(\theta+\alpha)$, instead compare $r\sin\alpha=a$ and $r\cos\alpha=b$. The angle is not generally the same as for the cosine form.

### Example 6 — A sine form, maximum and minimum

**Question:** Express $4\sin\theta-3\cos\theta$ as $r\sin(\theta-\alpha)$, with $r>0$ and $0<\alpha<90^\circ$. Find the maximum and minimum of $2+4\sin\theta-3\cos\theta$ and the angles at which they occur in $0\le\theta\le360^\circ$.

Expand and compare:

$$r\cos\alpha=4,\qquad r\sin\alpha=3.$$

So $r=5$, $\alpha=\tan^{-1}\frac34=36.869897\ldots^\circ$, and

$$4\sin\theta-3\cos\theta=5\sin(\theta-\alpha).$$

The maximum is $\boxed{7}$ at $\boxed{\theta=126.9^\circ}$, and the minimum is $\boxed{-3}$ at $\boxed{\theta=306.9^\circ}$, to one decimal place.

**Check:** at $\theta=0$, the original expression is $-3$, and the sine form gives $-5\sin\alpha=-3$. Keep $\alpha$ unrounded until the final angles.

### Example 7 — Solve using a cosine form

**Question:** Solve $\cos\theta+\sqrt3\sin\theta=1$ for $0\le\theta\le2\pi$.

Since $r=2$, $r\cos\alpha=1$ and $r\sin\alpha=\sqrt3$, we have $\alpha=\frac\pi3$. Hence

$$2\cos\left(\theta-\frac\pi3\right)=1.$$

Let $\phi=\theta-\frac\pi3$, so $-\frac\pi3\le\phi\le\frac{5\pi}3$. In this interval, $\cos\phi=\frac12$ at $\phi=-\frac\pi3,\frac\pi3,\frac{5\pi}3$.

Therefore $\boxed{\theta=0,\frac{2\pi}3,2\pi}$.

**Check:** both endpoints are included in the question, so list both $0$ and $2\pi$. Substitution into the original equation confirms all three solutions.

## Double Angle Formulae

Put $B=A$ in the compound angle formulae:

$$\sin2A=2\sin A\cos A,$$

$$\begin{aligned}
\cos2A&=\cos^2 A-\sin^2 A\\
&=1-2\sin^2 A=2\cos^2 A-1,
\end{aligned}$$

$$\tan2A=\frac{2\tan A}{1-\tan^2 A}.$$

The tangent formula needs all terms defined and a non-zero denominator. Choose the cosine form that leaves **one** trigonometric function in an equation. Rearranging also gives

$$\sin^2 A=\frac{1-\cos2A}{2},\qquad\cos^2 A=\frac{1+\cos2A}{2}.$$

These forms are useful in [trigonometric integration](/alevel/a2-mathematics/integration-applications/#trigonometric-integrals).

### Example 8 — Keep solutions when factorising

**Question:** Solve $\sin2x=\sin x$ for $0\le x\le2\pi$.

$$2\sin x\cos x-\sin x=0\quad\Rightarrow\quad\sin x(2\cos x-1)=0.$$

Thus $\sin x=0$ gives $x=0,\pi,2\pi$, while $\cos x=\frac12$ gives $x=\frac\pi3,\frac{5\pi}3$.

$$\boxed{x=0,\frac\pi3,\pi,\frac{5\pi}3,2\pi}.$$

**Common mistake:** dividing by $\sin x$. That would lose $0,\pi,2\pi$. Factor instead, then check all candidates in the original equation.

### Example 9 — Derive a further identity

**Question:** Prove $\cos3A=4\cos^3 A-3\cos A$.

$$\begin{aligned}
\cos3A&=\cos(2A+A)\\
&=\cos2A\cos A-\sin2A\sin A\\
&=(2\cos^2 A-1)\cos A-2\sin^2 A\cos A\\
&=2\cos^3 A-\cos A-2(1-\cos^2 A)\cos A\\
&=4\cos^3 A-3\cos A.
\end{aligned}$$

**Check:** at $A=0$, both sides are $1$. The algebra above proves the identity for all real angles; the single-value check alone would not.

## Practice

Allow about **35–45 minutes**. Give exact answers unless a question asks for decimals. State any restrictions used in a proof or elimination.

### Q1 — Inverse values and graph

Find $\sin^{-1}(-\frac12)$ and $\tan^{-1}(-\sqrt3)$ exactly. Find the domain, range and three sketch points for $y=\sin^{-1}(2x+1)$.

<details markdown="1">
<summary>Hint</summary>

Use the restricted inverse ranges. Solve $-1\le2x+1\le1$ for the graph domain.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The angles are $\boxed{-\frac\pi6}$ and $\boxed{-\frac\pi3}$. The domain is $\boxed{-1\le x\le0}$ and the range is $\boxed{-\frac\pi2\le y\le\frac\pi2}$.

The graph increases through $(-1,-\frac\pi2)$, $(-\frac12,0)$ and $(0,\frac\pi2)$. Substitution makes its inverse inputs $-1,0,1$ respectively.

</details>

### Q2 — Reciprocal equation

Solve $\cosec\theta=-2$ for $0\le\theta\le360^\circ$. Give the asymptotes and period of $y=\cot\theta$ using radians.

<details markdown="1">
<summary>Hint</summary>

Use $\sin\theta=-\frac12$. Distinguish the units in the two parts.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$\boxed{\theta=210^\circ,330^\circ}$. Both sines are $-\frac12$, so the reciprocals are $-2$.

Cotangent has asymptotes $\boxed{\theta=k\pi}$, for integer $k$, and period $\boxed{\pi}$. Its zeros are $\frac\pi2+k\pi$, where cotangent is defined even though tangent is not.

</details>

### Q3 — An identity and its domain

Prove $\tan\theta+\cot\theta=\sec\theta\cosec\theta$ and state the restrictions.

<details markdown="1">
<summary>Hint</summary>

Write the left-hand side in terms of sine and cosine, then use a common denominator.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\begin{aligned}
\tan\theta+\cot\theta
&=\frac{\sin\theta}{\cos\theta}+\frac{\cos\theta}{\sin\theta}\\
&=\frac{\sin^2\theta+\cos^2\theta}{\sin\theta\cos\theta}\\
&=\frac1{\sin\theta\cos\theta}=\sec\theta\cosec\theta.
\end{aligned}$$

Both $\sin\theta\ne0$ and $\cos\theta\ne0$ are required. At $\theta=\frac\pi4$, both sides give $2$, a useful check but not the proof.

</details>

### Q4 — Eliminate the parameter

Eliminate $\theta$ from $x=2\cosec\theta$, $y=3\cot\theta$. State the possible $x$ values.

<details markdown="1">
<summary>Hint</summary>

Use $\cosec^2\theta-\cot^2\theta=1$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\boxed{\frac{x^2}{4}-\frac{y^2}{9}=1},\qquad \boxed{x\le-2\text{ or }x\ge2}.$$

The parameter excludes $\theta=k\pi$. At $\theta=\frac\pi2$ and $\frac{3\pi}2$, the original equations give $(2,0)$ and $(-2,0)$, confirming both branches.

</details>

### Q5 — Exact values and a compound angle equation

Find $\cos15^\circ$ exactly. Solve $\sin(\theta+\frac\pi6)=\cos\theta$ for $0\le\theta\le2\pi$.

<details markdown="1">
<summary>Hint</summary>

Use $45^\circ-30^\circ$ for the exact value. Expand the sine sum, then factor or rearrange without losing zero cases.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\boxed{\cos15^\circ=\frac{\sqrt6+\sqrt2}{4}}.$$

Expanding the equation gives $\frac{\sqrt3}{2}\sin\theta+\frac12\cos\theta=\cos\theta$, so $\sqrt3\sin\theta=\cos\theta$.

If $\cos\theta=0$, this equation is false, so division by $\cos\theta$ loses no solution here. Thus $\tan\theta=\frac1{\sqrt3}$ and $\boxed{\theta=\frac\pi6,\frac{7\pi}6}$. In the original equation both sides are respectively $\frac{\sqrt3}{2}$ or $-\frac{\sqrt3}{2}$.

</details>

### Q6 — Coefficients, signs and extrema

Express $3\cos\theta-4\sin\theta$ as $r\cos(\theta+\alpha)$, with $r>0$ and $0<\alpha<90^\circ$. Find the maximum and minimum of $1+3\cos\theta-4\sin\theta$ and their angles in $0\le\theta\le360^\circ$, to one decimal place.

<details markdown="1">
<summary>Hint</summary>

Expand $r\cos(\theta+\alpha)$. The sine coefficient has a minus sign.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$r\cos\alpha=3$, $r\sin\alpha=4$, so $\boxed{r=5}$ and $\alpha=\tan^{-1}\frac43=53.130102\ldots^\circ$.

The maximum is $\boxed{6}$ at $\boxed{306.9^\circ}$; the minimum is $\boxed{-4}$ at $\boxed{126.9^\circ}$. At $\theta=0$, the cosine form gives $5\cos\alpha=3$, as required.

</details>

### Q7 — A quadratic equation

Solve $\cos2x=\sin x$ for $0\le x\le2\pi$.

<details markdown="1">
<summary>Hint</summary>

Use $\cos2x=1-2\sin^2 x$ and factor the quadratic in $\sin x$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$2\sin^2 x+\sin x-1=0\quad\Rightarrow\quad(2\sin x-1)(\sin x+1)=0.$$

Thus $\sin x=\frac12$ or $-1$, giving $\boxed{x=\frac\pi6,\frac{5\pi}6,\frac{3\pi}2}$. The original cosine double angle is respectively $\frac12,\frac12,-1$, matching the sine values.

</details>

### Q8 — Double angle and powers

Given $\tan A=\frac12$, find $\tan2A$ exactly. Express $6\sin^2 x-2$ in terms of $\cos2x$.

<details markdown="1">
<summary>Hint</summary>

Use the tangent double angle formula and $\sin^2 x=\frac{1-\cos2x}{2}$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\boxed{\tan2A=\frac{2(\frac12)}{1-\frac14}=\frac43},$$

$$\boxed{6\sin^2 x-2=1-3\cos2x}.$$

The tangent denominator is $\frac34\ne0$. For the second result, $x=0$ gives $-2$ on both sides and $x=\frac\pi2$ gives $4$.

</details>

## Quick Reference

| Formula or task | Use | Check |
|---|---|---|
| Inverse functions | One angle in a restricted range | Inverse and reciprocal are different |
| $\sec^2\theta=1+\tan^2\theta$ | Remove secant squared | Cosine must be non-zero |
| $\cosec^2\theta=1+\cot^2\theta$ | Remove cosecant squared | Sine must be non-zero |
| Compound angle | Expand or recognise a sum or difference | Cosine reverses the sign |
| Sine or cosine form | $r=\sqrt{a^2+b^2}$, then compare coefficients | Choose the quadrant and retain full $\alpha$ |
| Double angle | Reduce to one trigonometric function | Factor instead of dividing by a possible zero |
| Equation solutions | List all angles in the stated interval | Transform the interval and include endpoints if allowed |

**If your answer looks wrong:** check radians or degrees, inverse ranges, signs, coefficient order, denominators and missing quadrants. Check every candidate in the original equation.

**You should be able to:** sketch inverse and reciprocal functions, prove identities, eliminate a parameter and solve equations using compound and double angle formulae.

**Learning path:** [Previous: Binomial Series](/alevel/a2-mathematics/binomial-series/) · [Next: Exponential and Logarithmic Functions](/alevel/a2-mathematics/exponential-and-logarithmic-functions/) · [Return to the Pure Mathematics topic index](/alevel/a2-mathematics/).
