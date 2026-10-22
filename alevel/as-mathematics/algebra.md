---
layout: subjects
title: "Algebra"
mathjax: true
grade: as
subject: as-mathematics
permalink: /alevel/as-mathematics/algebra/
toc_headings: h2, h3
study_page: true
---

[AS Mathematics learning route](/alevel/as-mathematics/#learning-route) · P1.1 · OxfordAQA 9660 v5.2

Attempt each task on paper before opening its hint. Use the separate solution to check method, conditions and result. All questions are **self-written**, with no official marks. The paired Chinese page keeps the same English prompts, formulae and numerical answers.

- [L01 Equivalent forms and exact values](#l01)
- [L02 Quadratics, intersections and inequalities](#l02)
- [L03 Polynomial structure and cubic sketches](#l03)
- [L05 Tracking points through graph transformations](#l05)

## L01 · Equivalent forms and exact values {#l01}

Goal: choose a useful exact form and justify each change. Prerequisites: fractions, integer powers and expansion.

A surd is an exact irrational value. Extract square factors, but never split a square root across a sum. Rationalising multiplies numerator and denominator by the same nonzero conjugate. For positive base $a$ and rational $m,n$:

$$a^ma^n=a^{m+n},\qquad (a^m)^n=a^{mn},\qquad a^{-n}=\frac1{a^n}.$$

Negative powers require a nonzero base. Even roots use the nonnegative real root; expressions must remain real. These are conditions for calculations, not a separate formal domain/range course.

### Worked reasoning {#l01-worked}

**Question:** Simplify $\sqrt{50}-\sqrt8$ and rationalise $3/(\sqrt5+\sqrt2)$.

The first expression is $5\sqrt2-2\sqrt2=3\sqrt2$. For the second, the conjugate cancels the irrational denominator:

$$\frac3{\sqrt5+\sqrt2}=\frac{3(\sqrt5-\sqrt2)}{5-2}=\sqrt5-\sqrt2.$$

Multiplying the result by the original denominator gives 3, so the check uses the original expression.

### Complete a supported attempt {#l01-scaffold}

**Question:** For $x>0$, rewrite $\sqrt{x}/x^2$ as one power, then evaluate it at $x=4$.

<details markdown="1">
<summary>Hint</summary>

Write the numerator as a half power before subtracting exponents.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$x^{1/2-2}=x^{-3/2}$; at $x=4$ the value is $1/8$.

</details>

### Independent task {#l01-independent}

**Question:** Without decimal approximations, decide which is larger: $1/(\sqrt3-1)$ or $(\sqrt3+1)/3$. Justify your answer.

<details markdown="1">
<summary>Hint</summary>

Put the quantities into a common exact form.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Rationalising the first gives $(\sqrt3+1)/2$. Its positive numerator is the same as in the second, so the first is larger because $1/2>1/3$.

</details>

### Diagnose and repair {#l01-diagnosis}

If you used $\sqrt{a+b}=\sqrt a+\sqrt b$, test $a=b=1$: squaring gives different values. If indices were multiplied in a product, distinguish the product rule from a power of a power.

### Try again {#l01-retry}

**Question:** Find an exact simplified form of $2/(\sqrt7-\sqrt3)$ and check it by multiplication.

<details markdown="1">
<summary>Hint</summary>

Use the other sign in the conjugate.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The result is $(\sqrt7+\sqrt3)/2$; multiplying by $\sqrt7-\sqrt3$ gives $2$.

</details>

## L02 · Quadratics, intersections and inequalities {#l02}

Goal: connect roots, signs and geometry; choose factorisation, completing the square or the quadratic formula. Prerequisites: L01 and linear equations.

For $a\ne0$, the sign of $b^2-4ac$ tells whether $ax^2+bx+c=0$ has two, one repeated, or no real roots. Completing the square locates the vertex; factorisation exposes roots. When neither is convenient use

$$x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}.$$

A linear inequality reverses when divided by a negative number: $-2x<6$ gives $x>-3$. For a quadratic inequality mark the roots and test intervals, including endpoints only when equality is allowed. Solve a line/curve intersection by substitution, then recover both coordinates.

![The upward parabola y=x²−2x−3 crosses the x-axis at −1 and 3, with vertex (1,−4). A sign strip is positive outside the roots, zero at the roots, and negative between.](/alevel/as-mathematics/assets/quadratic-sign.svg)

### Worked reasoning {#l02-worked}

**Question:** Solve $x^2-2x-3\le0$. Find the intersections of $y=x^2$ and $y=2x+3$.

The factorisation is $(x-3)(x+1)$. The upward parabola is nonpositive between its roots, so $-1\le x\le3$. Substitution for the intersections gives that same quadratic equal to zero, hence the points $(-1,1)$ and $(3,9)$. Completing the square gives $x^2-2x-3=(x-1)^2-4$, confirming vertex $(1,-4)$.

### Complete a supported attempt {#l02-scaffold}

**Question:** Complete the square for $x^2+4x+7$ and state its minimum.

<details markdown="1">
<summary>Hint</summary>

Add and subtract the square of half the linear coefficient.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$(x+2)^2+3$, so the minimum is $3$ at $x=-2$.

</details>

### Independent task {#l02-independent}

**Question:** The line $y=4x+k$ touches $y=x^2$. Find $k$ and the point of contact. Then solve $x^2<4x+k+1$.

<details markdown="1">
<summary>Hint</summary>

Touching means a repeated intersection. Then use the resulting value of the parameter.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The intersection equation is $x^2-4x-k=0$. Its discriminant $16+4k=0$ gives $k=-4$ and contact $(2,4)$. The inequality becomes $(x-2)^2<1$, so $1<x<3$.

</details>

### Diagnose and repair {#l02-diagnosis}

Two roots are boundary values, not an inequality solution. Test a point between them and one outside. A zero discriminant identifies repeated contact only after checking that the equation is genuinely quadratic.

### Try again {#l02-retry}

**Question:** Solve $-x^2+5x-6>0$ and $5-3x\ge11$.

<details markdown="1">
<summary>Hint</summary>

For the first, check the opening direction; for the second, check the divisor sign.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$-(x-2)(x-3)>0$ gives $2<x<3$. The linear inequality gives $-3x\ge6$, hence $x\le-2$.

</details>

## L03 · Polynomial structure and cubic sketches {#l03}

Goal: use remainders to find factors and explain how roots control a sketch. Prerequisites: L01–L02.

Division gives $f(x)=(x-a)q(x)+r$, so substitution gives $r=f(a)$. Thus $f(a)=0$ exactly when $x-a$ is a factor. Expand by distribution and collect equal powers; check a division by multiplying back. P1 uses simple quadratic/cubic division by integer linear factors. A repeated factor of even multiplicity touches the axis; a simple root crosses it. A quadratic factor with negative discriminant contributes no real crossing.

![The cubic (x−1)²(x+2) crosses at the simple root −2, touches at the double root 1 and passes through (0,2). Its left end is lower and its right end is higher.](/alevel/as-mathematics/assets/cubic-roots.svg)

### Worked reasoning {#l03-worked}

**Question:** Factorise $f(x)=x^3-3x+2$ and describe its real intercepts and end behaviour.

$f(1)=0$, and division gives $x^2+x-2=(x-1)(x+2)$. Therefore $f(x)=(x-1)^2(x+2)$. The curve crosses at $(-2,0)$, touches at $(1,0)$, and passes through $(0,2)$. Its positive leading cubic term gives a lower left and upper right end. These features justify a sketch without claiming that a plotting window proves all roots.

### Complete a supported attempt {#l03-scaffold}

**Question:** Divide $x^3+2x^2+x+5$ by $x+2$. State the quotient and remainder.

<details markdown="1">
<summary>Hint</summary>

The divisor is zero at −2.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$x^3+2x^2+x+5=(x+2)(x^2+1)+3$. The quotient is $x^2+1$ and remainder $3=f(-2)$.

</details>

### Independent task {#l03-independent}

**Question:** The remainder when $x^3+kx+2$ is divided by $x+1$ is zero. Find $k$, factorise the cubic over the reals, and justify the number of real roots.

<details markdown="1">
<summary>Hint</summary>

Use the remainder condition before trying to sketch.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$-1-k+2=0$ gives $k=1$. The factorisation is $(x+1)(x^2-x+2)$. The quadratic discriminant is $1-8=-7<0$, so only $x=-1$ is a real root. The intercept on the vertical axis is $(0,2)$.

</details>

### Diagnose and repair {#l03-diagnosis}

If the divisor is $x+a$, substitute $-a$, not $a$. Touching and crossing are determined by multiplicity, not merely by the number of distinct roots.

### Try again {#l03-retry}

**Question:** Expand $(x-2)^2(x+1)$. State the remainder on division by $x-1$ and say which root is a touching point.

<details markdown="1">
<summary>Hint</summary>

Evaluate at 1 for the remainder.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The expansion is $x^3-3x^2+4$, the remainder is $2$, and the double root $x=2$ is the touching point.

</details>

## L05 · Tracking points through graph transformations {#l05}

Goal: move between a formula, a point and a precise transformation description. Prerequisites: L02–L03 and function notation.

A known point $(p,q)$ on $y=f(x)$ corresponds on $y=af(x)$ to $(p,aq)$, and on $y=f(x)+a$ to $(p,q+a)$. For $y=f(x+a)$, the input must still equal $p$, so the point becomes $(p-a,q)$. On $y=f(ax)$, for $a\ne0$, the point becomes $(p/a,q)$. Negative scale factors include a reflection: outside gives the x-axis, inside gives the y-axis. A translation by $(h,k)$ has equation $y=f(x-h)+k$. Describe single types of transformations here; combined-type descriptions are not a P1 requirement.

![Solid y=f(x)=x² and dashed y=f(2x)=4x². The point (1,1) moves to (1/2,1), demonstrating horizontal scale factor 1/2.](/alevel/as-mathematics/assets/point-stretch.svg)

### Worked reasoning {#l05-worked}

**Question:** The graph $y=f(x)$ contains $(2,3)$. Locate its corresponding point on $y=f(2x)$ and on $y=-2f(x)$, describing each transformation.

The first point is $(1,3)$: a horizontal stretch of scale factor $1/2$. The second is $(2,-6)$: vertical stretch factor $2$ and reflection in the x-axis. Substituting the new horizontal coordinate into each formula checks that it uses the original value $f(2)=3$.

### Complete a supported attempt {#l05-scaffold}

**Question:** Translate $y=x^2$ by vector $(3,-2)$. State the new equation and vertex.

<details markdown="1">
<summary>Hint</summary>

The old input is recovered by subtracting the horizontal shift.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$y=(x-3)^2-2$, with vertex $(3,-2)$.

</details>

### Independent task {#l05-independent}

**Question:** A horizontal stretch maps $(2,5)$ on $y=f(x)$ to $(6,5)$. Write the transformed equation using $f$ and determine where $( -1,4)$ moves.

<details markdown="1">
<summary>Hint</summary>

Find the scale factor of the coordinate, then invert it inside the function.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The horizontal scale factor is $3$, so the equation is $y=f(x/3)$. The other point moves to $(-3,4)$.

</details>

### Diagnose and repair {#l05-diagnosis}

An inner factor acts on the input needed to obtain the same output; it does not directly multiply the plotted horizontal coordinate. Check a nonzero point. At scale factor zero the result is a constant graph where defined, not a stretch.

### Try again {#l05-retry}

**Question:** Describe $y=f(x+4)$ and give the image of $(1,-2)$.

<details markdown="1">
<summary>Hint</summary>

Find the new input that makes the bracket equal to 1.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Translation by $(-4,0)$, taking the point to $(-3,-2)$.

</details>

## Sources and scope {#sources}

Organised against the [current official 9660 specification](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf). Paired marking material informs the expected reasoning; every task here is separately self-written and is not an official question or official mark scheme.

Specification §3.1 P1.1; marking-evidence principles from MA01 January 2025 Q6 and Q9.

[MA01 January 2025 QP](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-question-paper.pdf) · [paired MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-mark-scheme.pdf) · [MA02 January 2025 QP](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-question-paper.pdf) · [paired MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-mark-scheme.pdf)

Success means independently explaining the method and checking its conditions, not just reading a solution. Student learning outcomes have not been trialled.
