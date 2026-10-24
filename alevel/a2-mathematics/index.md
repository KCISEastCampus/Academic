---
title: A2 Pure Mathematics
layout: subjects
mathjax: true
grade: a2
subject: a2-mathematics
permalink: /alevel/a2-mathematics/
toc_headings: "#start-here, #algebra-and-functions, #trigonometry-exponentials-and-logarithms, #calculus, #numerical-methods-vectors-and-proof, #mixed-review, #later-review, #quick-reference"
study_page: true
reading_layout: true
redirect_from:
  - /alevel/a2mathematics/
  - /alevel/a2mathematics/index.html
---

Pure Mathematics · MA03. Learn to justify a method, carry it out and check its conditions. Start with a topic below; use the mixed tasks once you have studied the connected lessons.
{: .lesson-lead}

## Start Here {#start-here}

New to A2 Pure? Begin with [Functions](/alevel/a2-mathematics/functions/), then follow the lesson order. Each page links to the exact prior skill it uses. If you are revising, attempt that lesson's practice with hints and solutions closed; after repairing an error, do its new retry rather than copying the original solution.

- **Learn:** follow the four groups below.
- **Connect:** attempt the [course tasks](#mixed-review) after the relevant lessons.
- **Return later:** revisit [return tasks](#later-review) after studying other topics.
{: .lesson-routes}

<span id="study-a-topic"></span>
<span id="partial-fractions"></span>
<span id="repeated-linear-factors"></span>
<span id="integration-using-partial-fractions"></span>
<span id="partial-fractions-practice"></span>

## Algebra and Functions

1. <span id="p21-algebra-and-functions"></span>**[Functions](/alevel/a2-mathematics/functions/)** — Determine domains and ranges, compose functions and justify an inverse branch.
2. **[Modulus Functions and Transformations](/alevel/a2-mathematics/modulus-and-transformations/)** — Connect a transformed graph to its equation and solve modulus conditions.
3. **[Algebraic Fractions and Algebraic Division](/alevel/a2-mathematics/algebraic-fractions-and-division/)** — Simplify without losing restrictions; use quotients and remainders.
4. **[Partial Fractions](/alevel/a2-mathematics/partial-fractions/)** — Choose the full decomposition and use it to integrate.
5. <span id="p22-sequences-and-series"></span>**[Binomial Series](/alevel/a2-mathematics/binomial-series/)** — Build an expansion, state its valid range and judge an approximation.

## Trigonometry, Exponentials and Logarithms

Use AS trigonometric graphs and exponential laws first; the pages provide recovery links.

- <span id="p24-trigonometry"></span>**[Trigonometric Functions and Formulae](/alevel/a2-mathematics/trigonometric-functions-and-formulae/)** — Prove identities and find every permitted solution of an equation.
- <span id="p25-exponentials-and-logarithms"></span>**[Exponential and Logarithmic Functions](/alevel/a2-mathematics/exponential-and-logarithmic-functions/)** — Solve with domain checks and explain growth or decay parameters.

## Calculus

Differentiation supports parametric gradients and checks antiderivatives. Study integration before differential equations.

1. <span id="p26-differentiation"></span>**[Differentiation](/alevel/a2-mathematics/differentiation/)** — Select and combine rules, then interpret tangents and stationary points.
2. <span id="p23-coordinate-geometry"></span>**[Parametric Equations](/alevel/a2-mathematics/parametric-equations/)** — Eliminate a parameter with its domain and connect parameter motion to a gradient.
3. <span id="p27-integration"></span>**[Integration — Choosing a Method](/alevel/a2-mathematics/integration/)** — Explain a method choice, integrate consistently and check by differentiation.
4. **[Integration — Trigonometric Integrals and Applications](/alevel/a2-mathematics/integration-applications/)** — Connect identities and geometry to signed integrals, areas and volumes.
5. <span id="p28-differential-equations"></span>**[Differential Equations](/alevel/a2-mathematics/differential-equations/)** — Form and solve separable models, retaining conditions and equilibrium solutions.

## Numerical Methods, Vectors and Proof

- <span id="p29-numerical-methods"></span>**[Numerical Methods](/alevel/a2-mathematics/numerical-methods/)** — Justify root brackets and precision, judge iteration and build a numerical integral.
- <span id="p210-vectors"></span>**[Vectors](/alevel/a2-mathematics/vectors/)** — Use geometric conditions to test intersections, calculate angles and find distances.
- **[Mathematical Proof](/alevel/a2-mathematics/mathematical-proof/)** — Distinguish a general proof from examples and construct valid arguments or counterexamples.

## Connect the Lessons {#mixed-review}

These self-written tasks combine earlier topics without naming the method to use. They are teaching checks, not a full mock paper, and have no official marks. Explain conditions and working in English. A task completed with a hint is supported practice, so try again later without it.

<section class="lesson-check" markdown="1">

### Course task A {#mixed-a}

**Question:** Let $f(x)=\dfrac{2x+1}{x-1}$ for $x>1$, and let $g(x)=\sqrt{x}$ for $x\ge0$. Find the range and inverse of $f$, stating the inverse domain. Find the domain of $g\circ f$ and solve $g(f(x))=2$. Give reasons for any rejected values.

<details markdown="1">
<summary>Hint</summary>

First rewrite $f(x)$ as a constant plus one fraction. For the composite, check that the output of the inner function lies in the domain of the outer function.

</details>

<details markdown="1">
<summary>Solution, check and recovery</summary>

Since $f(x)=2+\dfrac3{x-1}$ and $x>1$, its range is $(2,\infty)$. Every value in that interval is reached.

$$y=\frac{2x+1}{x-1}\ \Longrightarrow\ (y-2)x=y+1
\ \Longrightarrow\ f^{-1}(x)=\frac{x+1}{x-2},\quad x>2.$$

The inverse range is $(1,\infty)$. For the composite, $f(x)>2>0$ throughout the original domain, so its domain remains $x>1$.

$$g(f(x))=2\ \Longrightarrow\ \frac{2x+1}{x-1}=4
\ \Longrightarrow\ x=\boxed{\frac52}.$$

This value belongs to the domain and gives $g(f(5/2))=\sqrt4=2$. There are no further candidates. If the inverse domain was omitted, recover [domain, range and inverse functions](/alevel/a2-mathematics/functions/#inverse-functions); cancelling or rearranging cannot erase the original restriction.

</details>

</section>

<section class="lesson-check" markdown="1">

### Course task B {#mixed-b}

**Question:** A curve is given by $x=t^2,\ y=t^3-3t$ for $t>0$. Find its Cartesian equation with its domain. Find the tangent and normal at $t=1$. Find the total area between the curve and the horizontal axis for $1\le x\le3$.

<details markdown="1">
<summary>Hint</summary>

Eliminating the parameter requires choosing its permitted branch. At the given point, check both coordinate derivatives before taking their ratio. Determine the sign of the curve before calculating area.

</details>

<details markdown="1">
<summary>Solution, check and recovery</summary>

Because $t>0$, $t=\sqrt{x}$ and $x>0$. Thus $y=\sqrt{x}(x-3)$. At $t=1$ the point is $(1,-2)$, and

$$\frac{dy}{dx}=\frac{3t^2-3}{2t}=0.$$

The tangent is $y=-2$; the normal is the vertical line $x=1$. It is not a line with a finite gradient obtained by dividing by zero.

For $1\le x\le3$, the curve is at or below the horizontal axis, so

$$\begin{aligned}
A&=-\int_1^3\sqrt{x}(x-3)\,dx\\
&=\left[2x^{3/2}-\frac25x^{5/2}\right]_1^3
=\boxed{\frac{12\sqrt3-8}{5}}.
\end{aligned}$$

The positive result is consistent with area. If the sign or normal failed, recover [area](/alevel/a2-mathematics/integration-applications/#area) or [parametric differentiation](/alevel/a2-mathematics/parametric-equations/#parametric-differentiation). A correct parameter substitution in the integral is also valid.

</details>

</section>

<section class="lesson-check" markdown="1">

### Course task C {#mixed-c}

**Question:** A quantity $y$ satisfies $\dfrac{dy}{dt}=k(10-y)$ for $t\ge0$, where $k>0$. Initially $y=2$, and $y=6$ when $t=\ln2$. Find $k$ and $y$ in terms of $t$. Explain the long-term behaviour and check the result in the differential equation.

<details markdown="1">
<summary>Hint</summary>

Keep the initial condition when finding the constant of integration. Check the equilibrium before dividing by its factor.

</details>

<details markdown="1">
<summary>Solution, check and recovery</summary>

The equilibrium is $y=10$; it does not satisfy $y(0)=2$. On the initial branch $y<10$, separation gives

$$\int\frac{dy}{10-y}=\int k\,dt,\qquad
-\ln(10-y)=kt+C.$$

Using $y(0)=2$ gives $10-y=8e^{-kt}$. The second observation gives

$$4=8e^{-k\ln2},\qquad e^{-k\ln2}=\frac12,\qquad k=1.$$

Therefore $y=10-8e^{-t}$. Its derivative is $8e^{-t}=10-y$, and both given conditions hold. For all $t\ge0$, it increases from $2$ and approaches $10$ from below without reaching it at a finite time. If the logarithm sign or equilibrium was lost, recover [separation](/alevel/a2-mathematics/differential-equations/#separable-variables) and redo the chapter retry.

</details>

</section>


## Return After Other Learning {#later-review}

After working on other topics, return without reopening earlier answers. Record the first attempt, help used, error and new result; choose the gap from the feedback links. There is no fixed waiting period or universal pass score.

<section class="lesson-check" markdown="1">

### Return task A {#later-a}

**Question:** Use the first three terms of the expansion of $(1+x)^{-1}$ to estimate $\displaystyle\int_0^{1/2}\frac{1}{1+x}\,dx$. State the expansion validity interval. Then show algebraically whether your estimate is above or below the exact integral, and find the exact value.

<details markdown="1">
<summary>Hint</summary>

A few terms of an infinite expansion are not an exact identity. Compare the truncated polynomial with the rational function before integrating.

</details>

<details markdown="1">
<summary>Solution, check and recovery</summary>

The expansion begins $1-x+x^2$ and is valid for $\lvert x\rvert<1$. The entire integration interval lies within that range.

$$I_{\mathrm{est}}=\int_0^{1/2}(1-x+x^2)\,dx
=\left[x-\frac{x^2}2+\frac{x^3}3\right]_0^{1/2}
=\boxed{\frac5{12}}.$$

For the direction of error, use an exact identity rather than the omitted dots:

$$\frac1{1+x}-(1-x+x^2)=-\frac{x^3}{1+x}<0
\quad(0<x\le1/2).$$

Thus the estimate is strictly above the exact integral. The exact value is $[\ln(1+x)]_0^{1/2}=\ln(3/2)$, which agrees with that comparison. If a truncated expansion was treated as exact, recover [validity and approximation](/alevel/a2-mathematics/binomial-series/#the-binomial-series).

</details>

</section>

<section class="lesson-check" markdown="1">

### Return task B {#later-b}

**Question:** Two lines have equations $\mathbf r=(1,0,2)+\lambda(1,2,-1)$ and $\mathbf r=(0,1,1)+\mu(2,1,0)$. Determine whether they intersect and find the acute angle between them. Explain why solving only two coordinate equations is insufficient for the intersection claim.

<details markdown="1">
<summary>Hint</summary>

The two parameters are independent. Check the third coordinate using the same values, then distinguish direction vectors from position vectors when finding an angle.

</details>

<details markdown="1">
<summary>Solution, check and recovery</summary>

From the third coordinate, $2-\lambda=1$, so $\lambda=1$. The first then gives $\mu=1$, and the second confirms $2=1+1$. Thus the intersection is $(2,2,1)$.

For the acute angle, use the direction vectors:

$$\cos\theta=\frac{\lvert(1,2,-1)\cdot(2,1,0)\rvert}{\sqrt6\sqrt5}
=\frac4{\sqrt{30}},\qquad
\theta\approx43.1^\circ.$$

Two equations can produce candidate parameters even for skew lines; the third equation verifies a common point in three dimensions. If the parameters or angle vectors were confused, recover [line intersections](/alevel/a2-mathematics/vectors/#pairs-of-lines) and [scalar product](/alevel/a2-mathematics/vectors/#scalar-product).

</details>

</section>

<section class="lesson-check" markdown="1">

### Return task C {#later-c}

**Question:** A student claims that $\dfrac{\sin2\theta}{1+\cos2\theta}=\tan\theta$ for every real $\theta$. Give the correct domain and prove the equality there. Then solve $\dfrac{\sin2\theta}{1+\cos2\theta}=\sqrt3$ for $0\le\theta<2\pi$, checking the original expression.

<details markdown="1">
<summary>Hint</summary>

Use double-angle identities, but retain the condition needed before cancelling. One successful substitution cannot prove an identity for the whole domain.

</details>

<details markdown="1">
<summary>Solution, check and recovery</summary>

The denominator is $1+\cos2\theta=2\cos^2\theta$, so both sides are defined exactly when $\cos\theta\ne0$; exclude $\theta=\frac\pi2+n\pi$, $n\in\mathbb Z$.

$$\frac{\sin2\theta}{1+\cos2\theta}
=\frac{2\sin\theta\cos\theta}{2\cos^2\theta}
=\frac{\sin\theta}{\cos\theta}
=\tan\theta.$$

Cancellation is valid on the stated domain. In the requested interval, $\tan\theta=\sqrt3$ gives $\theta=\frac\pi3,\frac{4\pi}3$. Neither is excluded; each gives numerator $\sqrt3/2$ and denominator $1/2$. A numerical example alone would not prove the identity. Recover [identities and equations](/alevel/a2-mathematics/trigonometric-functions-and-formulae/#trigonometric-identities) or [proof](/alevel/a2-mathematics/mathematical-proof/#direct-proof) if the domain or argument was missing.

</details>

</section>

## Quick Reference

[Open the formula and method notes](/alevel/a2-mathematics/quick-reference/) for a reminder, then return to the matching lesson for explanation and practice. Completing the course means being able to explain the choices and conditions, not opening every answer.

<details markdown="1">
<summary>Find a topic in the textbook or syllabus</summary>

The P2 labels follow the [OxfordAQA Mathematics specification](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf). The links below open the matching reference notes. Page numbers refer to the printed pages in *AQA A2 Mathematics: Pure and Mechanics*. These lessons assume AS Pure knowledge.

| Topic and reference notes | Textbook chapter or section |
|---|---|
| [P2.1: Algebra and Functions](/alevel/a2-mathematics/quick-reference/#p21-algebra-and-functions) | Chapter 1: Functions, pp. 2–21 |
| [P2.2: Binomial Series](/alevel/a2-mathematics/quick-reference/#p22-sequences-and-series) | Chapter 2: Binomial Series, pp. 24–30 |
| [P2.3: Parametric Equations](/alevel/a2-mathematics/quick-reference/#p23-coordinate-geometry) | Sections 5.6–5.7: Parametric equations and differentiation, pp. 72–77 |
| [P2.4: Trigonometric Functions and Formulae](/alevel/a2-mathematics/quick-reference/#p24-trigonometry) | Chapter 3: Trigonometric Functions and Formulae, pp. 32–49 |
| [P2.5: Exponential and Logarithmic Functions](/alevel/a2-mathematics/quick-reference/#p25-exponentials-and-logarithms) | Chapter 4: Exponential and Logarithmic Functions, pp. 50–57 |
| [P2.6: Differentiation](/alevel/a2-mathematics/quick-reference/#p26-differentiation) | Chapter 5: Differentiation, pp. 58–80 |
| [P2.7: Integration](/alevel/a2-mathematics/quick-reference/#p27-integration) | Chapter 6: Integration, pp. 82–102 |
| [P2.8: Differential Equations](/alevel/a2-mathematics/quick-reference/#p28-differential-equations) | Chapter 7: Differential Equations, pp. 104–112 |
| [P2.9: Numerical Methods](/alevel/a2-mathematics/quick-reference/#p29-numerical-methods) | Chapter 8: Numerical Methods, pp. 114–123 |
| [P2.10: Vectors](/alevel/a2-mathematics/quick-reference/#p210-vectors) | Chapter 9: Vectors, pp. 124–147 |
| [Mathematical arguments](/alevel/a2-mathematics/quick-reference/#proof-by-contradiction) | Syllabus supplement; no separate textbook section |

Mathematical Proof is a syllabus supplement with no separate section in the supplied textbook.

</details>

This route covers the 9660 MA03 P2 topics and mathematical arguments. It is separate from the revised 9760 qualification. The lessons and checks support study; they do not constitute an official complete past-paper collection.

Other A2 mathematics units: [Mechanics (MA05)](/alevel/a2-mathematics/mechanics/) · [Statistics (MA04)](/alevel/a2-mathematics/statistics/).
