---
layout: subjects
title: "Differentiation"
mathjax: true
grade: as
subject: as-mathematics
permalink: /alevel/as-mathematics/differentiation/
toc_headings: h2, h3
study_page: true
---

[AS Mathematics learning route](/alevel/as-mathematics/#learning-route) · P1.3 · OxfordAQA 9660 v5.2

Attempt each task on paper before opening its hint. Use the separate solution to check method, conditions and result. All questions are **self-written**, with no official marks. The paired Chinese page keeps the same English prompts, formulae and numerical answers.

- [L06 From secants to derivatives and normals](#l06)
- [L07 Monotonicity, stationary points and feasible maxima](#l07)

## L06 · From secants to derivatives and normals {#l06}

Goal: interpret local gradient, differentiate rational powers and construct tangents/normals. Prerequisites: L01 and L04.

For $y=x^2$, secant gradients from $(1,1)$ to nearby points at $x=1.1,1.01,1.001$ are $2.1,2.01,2.001$. Their approach to 2 motivates the tangent gradient. This is slope-limit intuition, not a required differentiation-from-first-principles method. Use the power rule and differentiate sums/differences term by term:

$$\frac{d}{dx}(ax^n)=anx^{n-1}.$$

Rewrite roots and quotients into powers first. A tangent at $x=c$ uses the point $(c,f(c))$ and slope $f'(c)$. A normal has slope $-1/f'(c)$ when that slope is nonzero; at a horizontal tangent the normal is $x=c$. If the axes have units, derivative units are output units per input unit.

![On y=x², the secant from P(1,1) to Q(2,4) is steeper than the tangent at P. Axes x and y are labelled.](/alevel/as-mathematics/assets/secant.svg)

### Worked reasoning {#l06-worked}

**Question:** For $f(x)=x^2+4\sqrt x$, find the tangent and normal at $x=1$.

For $x>0$, $f'(x)=2x+2x^{-1/2}$. The point is $(1,5)$ and slope is $4$. The tangent is $y-5=4(x-1)$; the normal is $y-5=-\frac14(x-1)$. Their gradients have product −1 and both pass through the point, checking direction and location.

### Complete a supported attempt {#l06-scaffold}

**Question:** Rewrite and differentiate $3/x^2-2\sqrt x$ for $x>0$.

<details markdown="1">
<summary>Hint</summary>

Use powers −2 and 1/2.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$3x^{-2}-2x^{1/2}$ differentiates to $-6x^{-3}-x^{-1/2}$.

</details>

### Independent task {#l06-independent}

**Question:** A tangent to $y=x^2$ is parallel to $y=6x-1$. Find its point of contact and the normal there.

<details markdown="1">
<summary>Hint</summary>

Convert the parallel condition into a gradient equation.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$2x=6$ gives $(3,9)$. The normal is $y-9=-\frac16(x-3)$.

</details>

### Diagnose and repair {#l06-diagnosis}

The height $f(c)$ is not the slope $f'(c)$. The negative reciprocal rule fails at zero slope because division by zero is undefined; draw a vertical normal instead.

### Try again {#l06-retry}

**Question:** Find the normal to $y=x^2-4x+1$ at its stationary point.

<details markdown="1">
<summary>Hint</summary>

Find where the derivative vanishes, then identify the normal direction.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$2x-4=0$ gives $x=2$, so the normal is $x=2$ (the point is $(2,-3)$).

</details>

## L07 · Monotonicity, stationary points and feasible maxima {#l07}

Goal: justify increase/decrease and optimise within an actual constraint. Prerequisites: L02 and L06.

On an interval, positive derivative means increasing and negative derivative means decreasing. A stationary point satisfies $f'(c)=0$. A change from + to − gives a local maximum; − to + gives a local minimum. At a stationary point $f''(c)>0$ gives a minimum and $f''(c)<0$ a maximum. If $f''(c)=0$, use derivative signs instead of guessing. In optimisation, define the quantity, eliminate other variables using constraints, then compare feasible stationary points and included endpoints. An open endpoint cannot be claimed as an attained value.

### Worked reasoning {#l07-worked}

**Question:** A rectangle has perimeter 20 m. Find its greatest area, justifying the result.

Let the sides be $x$ and $10-x$ metres, with $0<x<10$. Then $A=10x-x^2$, $A'=10-2x$, and $A''=-2$. The derivative is positive before $x=5$ and negative after it. Thus the global maximum on this interval is $25\,\mathrm{m^2}$, attained by a square. The limiting endpoint areas are zero, so they do not improve it.

### Complete a supported attempt {#l07-scaffold}

**Question:** For $f(x)=x^3-3x$, find and classify the stationary points and give its increasing intervals.

<details markdown="1">
<summary>Hint</summary>

Factor the derivative and make a sign chart.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$f'=3(x-1)(x+1)$, with signs +, −, + across $-1,1$. There is a maximum $(-1,2)$ and minimum $(1,-2)$. It increases on $x<-1$ and $x>1$. Also $f''=6x$ confirms both classifications.

</details>

### Independent task {#l07-independent}

**Question:** The same 20 m perimeter rectangle must have width $x\le3$ m. Can an area of $24\,\mathrm{m^2}$ be attained? Give a reason without merely solving an unconstrained stationary-point equation.

<details markdown="1">
<summary>Hint</summary>

Restrict the feasible interval before looking for its greatest area.

</details>

<details markdown="1">
<summary>Solution and check</summary>

On $0<x\le3$, $10-2x>0$, so area increases throughout. Its maximum is $A(3)=21\,\mathrm{m^2}$. Therefore $24\,\mathrm{m^2}$ cannot be attained under this width constraint.

</details>

### Diagnose and repair {#l07-diagnosis}

Solving the derivative equation supplies candidates, not permission to ignore constraints. A zero second derivative is inconclusive; it is not a declaration of a maximum or minimum.

### Try again {#l07-retry}

**Question:** Find the least value of $x^2-6x+12$ on $0\le x\le2$, with a reason.

<details markdown="1">
<summary>Hint</summary>

Check the derivative sign on the stated interval.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$2x-6<0$ throughout, so the function decreases. Its least value is $4$ at the included endpoint $x=2$.

</details>

## Sources and scope {#sources}

Organised against the [current official 9660 specification](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf). Paired marking material informs the expected reasoning; every task here is separately self-written and is not an official question or official mark scheme.

Specification §3.1 P1.3. The paired MA01 January 2025 material informs method-evidence conventions; these derivative examples are independently self-written.

[MA01 January 2025 QP](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-question-paper.pdf) · [paired MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-mark-scheme.pdf) · [MA02 January 2025 QP](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-question-paper.pdf) · [paired MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-mark-scheme.pdf)

Success means independently explaining the method and checking its conditions, not just reading a solution. Student learning outcomes have not been trialled.
