---
layout: subjects
title: "Differentiation"
mathjax: true
grade: as
subject: as-mathematics
permalink: /alevel/as-mathematics/differentiation/
toc_headings: h2
reading_layout: true
study_page: true
---

[AS Mathematics learning route](/alevel/as-mathematics/#learning-route) · P1.3 · OxfordAQA 9660 v5.2
{:.lesson-meta}

Read the explanation and complete example, then try the questions on paper. Hints and solutions open separately. All questions are **self-written**, with no official marks.

- [Gradients, derivatives and normals](#l06)
- [Where is the greatest or least value?](#l07)

## Gradients, derivatives and normals {#l06}

Goal: find local gradients, differentiate powers and construct tangents and normals. Prerequisites: [fractional powers](/alevel/as-mathematics/algebra/#l01-indices) and [straight lines](/alevel/as-mathematics/coordinate-geometry/#l04).

### How steep is a curve at one point? {#l06-concept}

A straight line has one gradient. On a curve it can change from point to point. Start on $y=x^2$ at $(1,1)$: nearby points at $x=1.1,1.01,1.001$ give secant gradients $2.1,2.01,2.001$. As the second point approaches the first, the gradients approach 2. That is the tangent gradient here.

The derivative gives this local gradient as a rule. The symbols $f'(x)$ and $dy/dx$ both name it. You need the idea of the limiting gradient, not a first-principles derivation in this AS unit. For a power, multiply by the old exponent and reduce that exponent by one:

$$\frac{d}{dx}(ax^n)=anx^{n-1}.$$

Here $n$ can be rational where the expression and derivative are defined. Rewrite roots or quotients as powers, then treat each term separately. A constant has derivative zero because it does not change.

At $x=c$ the point is $(c,f(c))$, while the tangent gradient is $f'(c)$: height and gradient are different numbers. Use the line formula with both. The normal is perpendicular to the tangent; when $f'(c)\ne0$, its gradient is $-1/f'(c)$. A horizontal tangent has vertical normal $x=c$. Gradient units are output units per input unit.

![On y=x², the secant from P(1,1) to Q(2,4) is steeper than the tangent at P. Axes x and y are labelled.](/alevel/as-mathematics/assets/secant.svg)

<div class="worked-example" markdown="1">

### A complete example {#l06-worked}

**Question:** For $f(x)=x^2+4\sqrt x$, find the tangent and normal at $x=1$.

We need both the point's height and the curve's gradient there. Rewrite $f(x)=x^2+4x^{1/2}$. For $x>0$ the power rule gives

$$f'(x)=2x+4\left(\frac12\right)x^{-1/2}=2x+2x^{-1/2}.$$

At $x=1$, the height is $f(1)=5$ and the gradient is $f'(1)=4$. Use the point $(1,5)$ with gradient 4 for the tangent:

$$y-5=4(x-1).$$

The normal is perpendicular, so its gradient is −1/4 and its equation is

$$y-5=-\frac14(x-1).$$

Both lines pass through the point and their gradients multiply to −1. This checks location and direction separately.

</div>

<div class="lesson-check" markdown="1">

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

</div>

<div class="lesson-check" markdown="1">

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

</div>

<div class="lesson-check" markdown="1">

### Another independent task {#l06-independent-powers}

**Question:** For $x>0$, a curve is $y=6/x+3\sqrt x$. Find $dy/dx$ and the gradient at $x=4$. Show how you handled the two different forms of x.

<details markdown="1">
<summary>Hint</summary>

Put each term into a power form before differentiating.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Write $y=6x^{-1}+3x^{1/2}$. The power rule gives

$$\frac{dy}{dx}=-6x^{-2}+\frac32x^{-1/2}.$$

At $x=4$, the gradient is $-6/16+(3/2)/2=3/8$. Both powers and their derivatives are defined because $x>0$.

</details>

</div>

### Diagnose and repair {#l06-diagnosis}

The height $f(c)$ is not the slope $f'(c)$. The negative reciprocal rule fails at zero slope because division by zero is undefined; draw a vertical normal instead.

If rewriting caused the error, refresh [fractional and negative powers](/alevel/as-mathematics/algebra/#l01-indices), then try [a different quotient](#l06-retry-powers). If height and gradient were mixed up, revisit [the tangent/normal example](#l06-worked), then [the zero-gradient retry](#l06-retry).

<div class="lesson-check" markdown="1">

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

</div>

<div class="lesson-check" markdown="1">

### Try a different form {#l06-retry-powers}

**Question:** For $x>0$, find the derivative of $y=(2x^2+3)/\sqrt x$ and its value at $x=1$.

<details markdown="1">
<summary>Hint</summary>

Divide each numerator term by the denominator before using the power rule.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Rewrite as $y=2x^{3/2}+3x^{-1/2}$. Then $dy/dx=3x^{1/2}-\frac32x^{-3/2}$; at $x=1$, this is $3/2$. The original denominator is positive on the stated range.

</details>

</div>

## Where is the greatest or least value? {#l07}

Goal: explain increasing/decreasing behaviour and find a greatest or least feasible value. Prerequisites: [quadratics](/alevel/as-mathematics/algebra/#l02) and [derivatives](#l06).

### Candidates must still fit the problem {#l07-concept}

A positive derivative means the graph rises as we move right; a negative derivative means it falls. A stationary point has derivative zero. If the derivative changes from positive to negative, the graph reaches a local maximum; the reverse gives a local minimum.

The second derivative is the derivative of the first derivative. At a stationary point, a positive second derivative gives a minimum, a negative one a maximum. If it is zero, that test does not decide: return to the derivative signs.

In a practical problem first choose a variable and its allowed range. Write the quantity to optimise in that one variable, using the constraint. Then find candidates and check the whole allowed range, including any included endpoints. A formula can give a stationary point outside the allowed range; it cannot be the answer. An excluded endpoint is not an attained maximum or minimum.

<div class="worked-example" markdown="1">

### A complete example {#l07-worked}

**Question:** A rectangle has perimeter 20 m. Find its greatest area, justifying the result.

Let the sides be $x$ and $10-x$ metres, with $0<x<10$. Then $A=10x-x^2$, $A'=10-2x$, and $A''=-2$. The derivative is positive before $x=5$ and negative after it. Thus the global maximum on this interval is $25\,\mathrm{m^2}$, attained by a square. The limiting endpoint areas are zero, so they do not improve it.

</div>

<div class="lesson-check" markdown="1">

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

</div>

<div class="lesson-check" markdown="1">

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

</div>

### Diagnose and repair {#l07-diagnosis}

Solving the derivative equation supplies candidates, not permission to ignore constraints. A zero second derivative is inconclusive; it is not a declaration of a maximum or minimum.

For an inadmissible candidate, revisit [the feasible rectangle](#l07-worked), then [the bounded-interval retry](#l07-retry).

<div class="lesson-check" markdown="1">

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

</div>

## After this lesson {#next-step}

Close the solutions and check that you can complete each group’s retry independently and explain the method and its conditions. Revisit the relevant example if needed, then continue to the next lesson.

[Previous lesson: Coordinate geometry](/alevel/as-mathematics/coordinate-geometry/) · [Course route](/alevel/as-mathematics/#learning-route) · [Next lesson: Integration and approximation](/alevel/as-mathematics/integration/)

After completing this route, try [the mixed task](/alevel/as-mathematics/#mixed-foundations). In a later study session, return to [the recall task](/alevel/as-mathematics/#later-foundations) with solutions closed.

## Sources and scope {#sources}

<details class="lesson-notes" markdown="1">
<summary>View scope and marking sources</summary>

Organised against the [current official 9660 specification](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf). Paired marking material informs the expected reasoning; every task here is separately self-written and is not an official question or official mark scheme.

Specification §3.1 P1.3. The paired MA01 January 2025 material informs method-evidence conventions; these derivative examples are independently self-written.

[MA01 January 2025 QP](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-question-paper.pdf) · [paired MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-mark-scheme.pdf) · [MA02 January 2025 QP](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-question-paper.pdf) · [paired MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-mark-scheme.pdf)

Success means independently explaining the method and checking its conditions, not just reading a solution. Student learning outcomes have not been trialled.

</details>
