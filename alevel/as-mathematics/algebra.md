---
layout: subjects
title: "Algebra"
mathjax: true
grade: as
subject: as-mathematics
permalink: /alevel/as-mathematics/algebra/
toc_headings: "#l01, #l01-indices, #l01-surds, #l01-independent-start, #l01-diagnosis, #l02, #l03, #l05, #l01-later, #next-step, #sources"
reading_layout: true
study_page: true
---

[AS Mathematics learning route](/alevel/as-mathematics/#learning-route)
{:.lesson-meta}

Start with exact forms, then use them in quadratics, polynomials and graph transformations. Work on paper before opening help. All tasks are **self-written**, with no official marks; [scope and sources](#sources) are below.

- [Equivalent forms and exact values](#l01)
- [Quadratics, roots and inequalities](#l02)
- [Polynomial factors and sketches](#l03)
- [Move and stretch a graph](#l05)

## Equivalent forms and exact values {#l01}

Goal: learn what fractional powers mean and make surds easier to use. Equivalent forms are **different ways to write the same value**. An exact value keeps a fraction or root instead of a rounded decimal.

You will use these forms to compare numbers and find unknowns, explaining each step. Prerequisites: fractions, integer powers and expansion. Use the recap below if needed.

<details id="l01-prerequisite" markdown="1">
<summary>Refresh integer powers and fractions</summary>

For positive $a$, $a^3a^2=a^5$ because there are five factors of $a$. Dividing cancels factors: $a^5/a^2=a^3$. Also $a^2/a^2=1=a^0$, so dividing a smaller power by a larger one leaves a reciprocal: $a^2/a^3=1/a=a^{-1}$.

Use a common denominator before subtracting fractions: $1/2-2=1/2-4/2=-3/2$. Expansion gives $(u+v)(u-v)=u^2-v^2$ because the middle terms cancel. These three ideas will do different jobs below.

</details>

### Why a fractional index means a root {#l01-indices}

Start with a familiar question: which positive number multiplied by itself gives 9? It is 3. Taking a square root finds that number. $9^{1/2}=\sqrt9=3$: these are two ways to say the same thing.

For a fractional index, look at the denominator first. A denominator of 2 means a square root; 3 means a cube root. For example, $\sqrt[3]8=2$ because $2\times2\times2=8$.

The numerator tells you which power to take after finding the root. Here is the general notation, with $a>0$ and positive integers $p,q$. You can read the example first and return to these formulas:

$$\begin{aligned}
a^{1/q}&=\sqrt[q]{a},\\
a^{p/q}&=(\sqrt[q]{a})^p,\\
a^{-p/q}&=\frac1{a^{p/q}}\quad(p>0).
\end{aligned}$$

In the example below, read $2/3$ in two steps: the denominator 3 tells us to take the cube root, giving 2; the numerator 2 tells us to square it, giving 4. A minus sign in the index tells us to take the reciprocal at the end:

$$8^{2/3}=(\sqrt[3]{8})^2=2^2=4,\qquad
8^{-2/3}=\frac14.$$

To combine powers, first identify the operation. **Multiplication adds indices; division subtracts them; raising a power to another power multiplies them.** Here are the three rules, with positive base $a>0$ and integer or fractional indices $m,n$:

$$a^ma^n=a^{m+n},\qquad
\frac{a^m}{a^n}=a^{m-n},\qquad
(a^m)^n=a^{mn}.$$

All these tasks use positive bases, so the roots and divisions are defined. Practise within that range first. Negative bases need separate care; do not assume every rewrite here applies to them.

<div class="worked-example" markdown="1">

### A complete example: change the form before evaluating {#l01-indices-example}

**Question:** For $a>0$, write $\sqrt[3]{a^2}/a$ as a single power of $a$, then find its exact value when $a=8$.

There are three steps. First, write the cube root as a fractional power. Second, the denominator $a$ is $a^1$, so subtract the indices. Third, write the negative power as a reciprocal:

$$\frac{\sqrt[3]{a^2}}a
=\frac{a^{2/3}}{a^1}
=a^{2/3-1}
=a^{-1/3}
=\frac1{\sqrt[3]a}.$$

At $a=8$, this is $1/2$. Check in the original form: $\sqrt[3]{64}/8=4/8=1/2$. The negative index has produced a positive reciprocal, as expected.

</div>

<div class="lesson-check" markdown="1">

### Your turn: connect a root and a power {#l01-scaffold}

**Question:** For $x>0$, rewrite $\sqrt{x}/x^2$ as one power, then evaluate it at $x=4$.

<details markdown="1">
<summary>Hint</summary>

Write the numerator as a half power before subtracting exponents.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\frac{\sqrt{x}}{x^2}=x^{1/2-2}=x^{-3/2},\qquad
4^{-3/2}=\frac1{(\sqrt4)^3}=\frac18.$$

The original expression gives $\sqrt4/4^2=2/16=1/8$. A complete explanation connects the root, the quotient law and the reciprocal; the final number alone does not show that connection.

</details>

</div>

### Keep an exact value useful {#l01-surds}

A surd such as $\sqrt2$ cannot be written as a terminating decimal. Keeping the root keeps its exact value.

To simplify a root, look inside it for a factor whose square root is a whole number. For example, 25 has square root 5. Writing 50 as 25 times 2 lets us bring the 5 outside the root. The rule is: for nonnegative $u,v$, $\sqrt{uv}=\sqrt u\sqrt v$.

This works for a product, not a sum: $\sqrt{1+1}=\sqrt2$, while $\sqrt1+\sqrt1=2$.

The symbol $\sqrt u$ means the **nonnegative** square root. For instance, $\sqrt9=3$; the equation $z^2=9$ instead has two solutions, $z=3$ and $z=-3$.

Rationalising a denominator means removing its roots while keeping the fraction equal to its original value.

For a denominator with two terms, try changing only the sign between them. This partner is called the **conjugate**. Why use it? The identity $(u+v)(u-v)=u^2-v^2$ makes the middle terms cancel.

Multiply the numerator by the same nonzero quantity too. Changing only the denominator would change the value. The example below shows the whole process.

<div class="worked-example" markdown="1">

### A complete example: expose like terms and a rational denominator {#l01-worked}

**Question:** Simplify $\sqrt{50}-\sqrt8$ and rationalise $3/(\sqrt5+\sqrt2)$.

First do the subtraction. The number 50 has square factor 25, and 8 has square factor 4. After simplifying, both terms contain the same root: five of it minus two of it leaves three:

$$\begin{aligned}
\sqrt{50}-\sqrt8
&=\sqrt{25\cdot2}-\sqrt{4\cdot2}\\
&=5\sqrt2-2\sqrt2\\
&=3\sqrt2.
\end{aligned}$$

Next, the fraction. Its denominator has a plus sign, so try the partner $\sqrt5-\sqrt2$ with a minus sign. It is nonzero because $\sqrt5>\sqrt2$. Multiply both numerator and denominator by it; the denominator becomes $5-2$:

$$\begin{aligned}
\frac3{\sqrt5+\sqrt2}
&=\frac{3(\sqrt5-\sqrt2)}{(\sqrt5+\sqrt2)(\sqrt5-\sqrt2)}\\
&=\frac{3(\sqrt5-\sqrt2)}{5-2}\\
&=\sqrt5-\sqrt2.
\end{aligned}$$

Check by reversing the operation: $(\sqrt5-\sqrt2)(\sqrt5+\sqrt2)=5-2=3$, the original numerator.

</div>

### Work independently {#l01-independent-start}

Close the examples and try both tasks before opening help. Record if you used a hint; that distinguishes an independent attempt from a supported one.

<div class="lesson-check" markdown="1">

#### Task A {#l01-independent-indices}

**Question:** For $x>0$, let $F(x)=x^{5/6}/\sqrt[3]{x^2}$. Find a constant $k$ such that $F(x)=x^k$ for every allowed $x$. Then find $x$ when $F(x)=2$, explaining why your value works.

<details markdown="1">
<summary>Hint</summary>

Express the denominator using the same base as the numerator. After finding the index, undo the corresponding root.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$F(x)=\frac{x^{5/6}}{x^{2/3}}=x^{5/6-4/6}=x^{1/6}.$$

Thus $k=1/6$. The equation $x^{1/6}=2$ gives $x=2^6=64$. There is only one positive sixth root for each positive $x$; raising both positive sides to the sixth power is reversible.

Check the original expression: $64^{5/6}/\sqrt[3]{64^2}=32/16=2$. Checkpoints: translate the root correctly, subtract the indices with a common denominator, and justify the positive solution.

</details>

</div>

<div class="lesson-check" markdown="1">

#### Task B {#l01-independent}

**Question:** Without decimal approximations, decide which is larger: $1/(\sqrt{12}-2)$ or $(\sqrt3+1)/3$. Justify your answer.

<details markdown="1">
<summary>Hint</summary>

Put the quantities into a common exact form.

</details>

<details markdown="1">
<summary>Solution and check</summary>

First extract the square factor: $\sqrt{12}=2\sqrt3$. The denominator $2(\sqrt3-1)$ is positive and nonzero. Now rationalise:

$$\begin{aligned}
\frac1{\sqrt{12}-2}
&=\frac1{2(\sqrt3-1)}\\
&=\frac{\sqrt3+1}{2(3-1)}
=\frac{\sqrt3+1}{4}.
\end{aligned}$$

Both quantities now have the same positive numerator. Since $1/3>1/4$, the second is larger. Subtracting the first from the second gives $(\sqrt3+1)/12>0$, another exact check. A comparison needs the sign of the common numerator, not just a rule about smaller denominators.

</details>

</div>

### Repair the reason, then try a new task {#l01-diagnosis}

- If the root or minus sign in an index changed meaning, return to [fractional indices](#l01-indices), then do [retry A](#l01-retry-indices).
- If you multiplied indices in a quotient, compare the three laws and the [complete exponent example](#l01-indices-example). Say which operation is present before doing retry A.
- If a square root was split across a sum, or a conjugate changed the fraction's value, return to the [root and conjugate explanation](#l01-surds) and [worked example](#l01-worked), then do [retry B](#l01-retry).

Close the old answer while retrying. Use the solution to identify the faulty step, not merely to replace the final answer.

<div class="lesson-check" markdown="1">

#### Retry A {#l01-retry-indices}

**Question:** For $t>0$, simplify $\sqrt[4]{t^3}/t^{5/4}$ to one power. Find $t$ when the original expression equals $1/3$, and check your answer in that original expression.

<details markdown="1">
<summary>Hint</summary>

Translate the root first. A negative index means that the resulting root is in the denominator.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\frac{\sqrt[4]{t^3}}{t^{5/4}}
=t^{3/4-5/4}=t^{-1/2}=\frac1{\sqrt t}.$$

As $t>0$, taking reciprocals in $1/\sqrt t=1/3$ gives $\sqrt t=3$, hence $t=9$. In the original expression the fourth root is $9^{3/4}$, so the ratio is $9^{3/4}/9^{5/4}=1/3$. The positive root ensures that no negative candidate is introduced.

</details>

</div>

<div class="lesson-check" markdown="1">

#### Retry B {#l01-retry}

**Question:** A student claims that $\sqrt{7+3}=\sqrt7+\sqrt3$. Decide whether this is correct, giving an exact reason. Then find an exact simplified form of $2/(\sqrt{28}-\sqrt{12})$ and check it by multiplication.

<details markdown="1">
<summary>Hint</summary>

Compare the squares of the two claimed values. For the fraction, extract square factors before choosing a conjugate.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Compare squares first:

$$(\sqrt7+\sqrt3)^2=10+2\sqrt{21}>10=(\sqrt{7+3})^2.$$

Both sides of the claimed equality are positive, so unequal squares mean unequal values. The proposed rule is false. For the fraction:

$$\begin{aligned}
\frac2{\sqrt{28}-\sqrt{12}}
&=\frac2{2\sqrt7-2\sqrt3}\\
&=\frac1{\sqrt7-\sqrt3}\\
&=\frac{\sqrt7+\sqrt3}{7-3}
=\frac{\sqrt7+\sqrt3}{4}.
\end{aligned}$$

The conjugate is nonzero, and multiplying back gives $(\sqrt7+\sqrt3)(2\sqrt7-2\sqrt3)/4=(7-3)/2=2$. This checks the original numerator.

</details>

</div>

[Continue to quadratics](#l02). After that topic, return to the [mixed review task](#l01-later) with these answers closed.

## Quadratics, roots and inequalities {#l02}

Goal: solve quadratic equations and explain their graphs and inequalities. Prerequisites: [exact forms](#l01) and linear equations.

### Reading the same quadratic in different ways {#l02-concept}

A quadratic contains a squared term. Each way of writing it answers a different question. A product shows where it is zero; a square plus a constant shows its smallest or largest value. For example,

$$x^2-2x-3=(x-3)(x+1)=(x-1)^2-4.$$

The product is zero at $x=3,-1$. In the last form the square cannot be negative, so the lowest point is $(1,-4)$ and the line of symmetry is $x=1$.

For $ax^2+bx+c=0$ with $a\ne0$, the quadratic formula is

$$x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}.$$

The expression under the root is the discriminant: positive gives two real roots, zero one repeated root, negative no real roots. Use factorisation when a product is easy to find; use a completed square for the vertex; otherwise the formula is available.

An inequality asks for a whole interval, not just the roots. Mark the roots and test a number in each interval. Include a root only if equality is allowed. Dividing a linear inequality by a negative number reverses it: $-2x<6$ gives $x>-3$. At an intersection two graph rules give the same output: equate them, then find both coordinates.

![The upward parabola y=x²−2x−3 crosses the x-axis at −1 and 3, with vertex (1,−4). A sign strip is positive outside the roots, zero at the roots, and negative between.](/alevel/as-mathematics/assets/quadratic-sign.svg)

<div class="worked-example" markdown="1">

### A complete example {#l02-worked}

**Question:** Solve $x^2-2x-3\le0$. Find the intersections of $y=x^2$ and $y=2x+3$.

First find where the expression is zero. We need two numbers with product −3 and sum −2, giving $x^2-2x-3=(x-3)(x+1)$. The roots are $-1,3$. Between them, testing $x=0$ gives −3, so this is the interval where the expression is nonpositive. Include the endpoints because the question allows equality: $-1\le x\le3$.

At an intersection the two y-values agree. Set $x^2=2x+3$; this gives the same quadratic, now equal to zero. Its x-values are −1 and 3. Substituting into $y=x^2$ gives the points $(-1,1)$ and $(3,9)$.

For a graph check, $x^2-2x-3=(x-1)^2-4$ has lowest point $(1,-4)$. An upward-opening graph is below the axis between its two roots, agreeing with our inequality.

</div>

<div class="lesson-check" markdown="1">

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

</div>

<div class="lesson-check" markdown="1">

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

</div>

### Diagnose and repair {#l02-diagnosis}

Two roots are boundary values, not an inequality solution. Test a point between them and one outside. A zero discriminant identifies repeated contact only after checking that the equation is genuinely quadratic.

If the sign interval was wrong, revisit [the quadratic explanation](#l02-concept), then close it and try [the new inequality](#l02-retry).

<div class="lesson-check" markdown="1">

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

[After quadratics: attempt the mixed review](#l01-later), then [continue to polynomials](#l03).

</div>

## Polynomial factors and sketches {#l03}

Goal: divide polynomials, find factors and explain a cubic sketch. Prerequisites: [quadratics](#l02).

### Division tells us what is left over {#l03-concept}

Integer division leaves a quotient and sometimes a remainder. Polynomial division does the same:

$$f(x)=(x-a)q(x)+r.$$

Here $q(x)$ is the quotient and $r$ the constant remainder. Put $x=a$: the whole product vanishes, leaving $r=f(a)$. If that value is zero, division is exact, so $x-a$ is a factor. This explains both the remainder theorem and factor theorem.

In division, choose the next quotient term so its product cancels the highest remaining power. Multiply back and subtract; repeat until the remainder has lower degree than the divisor. We use quadratic or cubic polynomials divided by integer linear factors.

Factors also explain a graph. A simple factor changes sign through its root, so the graph crosses the axis. A squared factor does not change sign, so the graph touches it. A quadratic factor with negative discriminant has no real root. Use the leading term for the two ends of a cubic, and substitute zero for its vertical intercept.

![The cubic (x−1)²(x+2) crosses at the simple root −2, touches at the double root 1 and passes through (0,2). Its left end is lower and its right end is higher.](/alevel/as-mathematics/assets/cubic-roots.svg)

<div class="worked-example" markdown="1">

### A complete example {#l03-worked}

**Question:** Factorise $f(x)=x^3-3x+2$ and describe its real intercepts and end behaviour.

Testing $x=1$ gives $f(1)=1-3+2=0$, so $x-1$ is a factor. To find what remains, divide $x^3+0x^2-3x+2$ by $x-1$. At each stage choose a quotient term that cancels the leading term:

$$\begin{aligned}
(x^3+0x^2-3x+2)-x^2(x-1)&=x^2-3x+2,\\
(x^2-3x+2)-x(x-1)&=-2x+2,\\
(-2x+2)-(-2)(x-1)&=0.
\end{aligned}$$

The three quotient terms were $x^2$, $x$ and $-2$. Thus the quotient is $x^2+x-2=(x-1)(x+2)$, with zero remainder, and $f(x)=(x-1)^2(x+2)$. Multiplying those factors back gives the original cubic.

At $x=-2$ the factor $x+2$ changes sign, so the curve crosses the axis at $(-2,0)$. Around $x=1$, the square stays nonnegative and $x+2$ is positive, so the curve touches the axis at $(1,0)$ without crossing. Also $f(0)=2$. The leading positive cubic term gives a lower left and upper right end. These features support the sketch; a plotting window alone would not prove all roots.

</div>

<div class="lesson-check" markdown="1">

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

</div>

<div class="lesson-check" markdown="1">

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

</div>

### Diagnose and repair {#l03-diagnosis}

If the divisor is $x+a$, substitute $-a$, not $a$. Touching and crossing are determined by multiplicity, not merely by the number of distinct roots.

For a missing quotient term, return to [the complete division](#l03-worked), then do [the new division](#l03-retry-division). For remainder signs or touching/crossing, use [the expansion and graph retry](#l03-retry).

<div class="lesson-check" markdown="1">

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

</div>

<div class="lesson-check" markdown="1">

### Another retry {#l03-retry-division}

**Question:** Divide $x^3-2x^2-5x+6$ by $x+2$, showing the successive subtractions. State the quotient and remainder, and check by multiplying back.

<details markdown="1">
<summary>Hint</summary>

Choose each quotient term to remove the highest remaining power.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The first term is $x^2$. Subtract its product with the divisor, then repeat:

$$\begin{aligned}
(x^3-2x^2-5x+6)-(x^3+2x^2)&=-4x^2-5x+6,\\
(-4x^2-5x+6)-(-4x^2-8x)&=3x+6,\\
(3x+6)-(3x+6)&=0.
\end{aligned}$$

The three quotient terms are $x^2,-4x,3$. Thus the quotient is $x^2-4x+3$ and the remainder is 0. Multiplying back gives $(x+2)(x^2-4x+3)=x^3-2x^2-5x+6$, the original polynomial.

</details>

</div>

## Move and stretch a graph {#l05}

Goal: connect a changed graph rule to the movement of a point. Prerequisites: [quadratic graphs](#l02) and [polynomial graphs](#l03).

### Keep track of the old input and output {#l05-concept}

Writing $q=f(p)$ simply means the rule takes input $p$ and gives output $q$. To move the point, ask which new input still reaches this old value.

An operation outside the rule changes the output: on $y=af(x)$, $(p,q)$ becomes $(p,aq)$; on $y=f(x)+a$, it becomes $(p,q+a)$.

An operation inside changes the input. For $y=f(x+a)$ we need $x+a=p$, so the point becomes $(p-a,q)$. For $y=f(ax)$ we need $ax=p$; when $a\ne0$, this gives $(p/a,q)$. This is why the horizontal scale factor is the reciprocal of the number inside.

A negative outside multiplier reflects in the x-axis; a negative inside multiplier reflects in the y-axis. Translation by $(h,k)$ moves every point that far and has equation $y=f(x-h)+k$. Use these point checks before naming reflection, translation or stretch. Combined-type descriptions are additional teaching support, not an added P1 examination requirement.

![Solid y=f(x)=x² and dashed y=f(2x)=4x². The point (1,1) moves to (1/2,1), demonstrating horizontal scale factor 1/2.](/alevel/as-mathematics/assets/point-stretch.svg)

<div class="worked-example" markdown="1">

### A complete example {#l05-worked}

**Question:** The graph $y=f(x)$ contains $(2,3)$. Locate its corresponding point on $y=f(2x)$ and on $y=-2f(x)$, describing each transformation.

The given point tells us $f(2)=3$. For $y=f(2x)$, the input reaching f must still be 2, so solve $2x=2$. This gives $x=1$ while the output stays 3: the new point is $(1,3)$. Horizontal distances are halved, a horizontal stretch with scale factor $1/2$.

For $y=-2f(x)$ the input stays $x=2$, but the old output 3 is multiplied by −2. The point becomes $(2,-6)$: double the vertical distance and reflect in the x-axis. Substitution into each new expression checks which input and output changed.

</div>

<div class="lesson-check" markdown="1">

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

</div>

<div class="lesson-check" markdown="1">

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

</div>

### Diagnose and repair {#l05-diagnosis}

An inner factor acts on the input needed to obtain the same output; it does not directly multiply the plotted horizontal coordinate. Check a nonzero point. At scale factor zero the result is a constant graph where defined, not a stretch.

For an inside/outside mix-up, trace [the same input and output](#l05-worked), then do [the new point task](#l05-retry).

<div class="lesson-check" markdown="1">

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

</div>

## Return after quadratics {#l01-later}

After finishing quadratics, close the earlier solutions and use both topics here. Return again after studying graph transformations if you needed help on the first attempt.

<div class="lesson-check" markdown="1">

### Review task {#l01-later-task}

**Question:** Solve $x/\sqrt{x}=x-2$ over the real numbers. State the conditions on $x$ and explain why every retained answer satisfies the original equation.

<details markdown="1">
<summary>Hint</summary>

The square root is in a denominator. First decide which values can occur; then choose a way to turn the equation into a familiar one.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The denominator requires $x>0$, so $x/\sqrt{x}=\sqrt{x}$. The original equation therefore becomes $\sqrt{x}=x-2$. Since the left side is positive, any solution must have $x>2$.

Squaring gives $x=(x-2)^2$, hence $x^2-5x+4=(x-1)(x-4)=0$. The candidates are $x=1$ and $x=4$. Reject $x=1$: it violates $x>2$ and gives $1=-1$ in the original equation. For $x=4$, the original sides are $4/\sqrt4=2$ and $4-2=2$, so the only solution is $x=4$.

An alternative is to set $u=\sqrt{x}>0$. Then $u=u^2-2$, so $(u-2)(u+1)=0$. Retain $u=2$ and reject $u=-1$ because $u>0$; again $x=4$.

If squaring introduced a false answer, revisit [the principal square root](#l01-surds); if the quadratic step was difficult, revisit [the quadratic example](#l02-worked). A correct candidate list without the original-equation check is incomplete here.

</details>

</div>

[Continue to polynomials](#l03), or, after graph transformations, [continue to coordinate geometry](/alevel/as-mathematics/coordinate-geometry/). Later, [the differentiation attempt](/alevel/as-mathematics/differentiation/#l06-scaffold) asks you to use index rewriting in a new operation.

## After this lesson {#next-step}

Close the solutions and check that you can complete each group’s retry independently and explain the method and its conditions. Revisit the relevant example if needed, then continue to the next lesson.

[Course route](/alevel/as-mathematics/#learning-route) · [Next lesson: Coordinate geometry](/alevel/as-mathematics/coordinate-geometry/)

After completing this route, try [the mixed task](/alevel/as-mathematics/#mixed-foundations). In a later study session, return to [the recall task](/alevel/as-mathematics/#later-foundations) with solutions closed.

## Sources and scope {#sources}

<details class="lesson-notes" markdown="1">
<summary>View scope and marking sources</summary>

Organised against the [current official 9660 specification](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf). Paired marking material informs the expected reasoning; every task here is separately self-written and is not an official question or official mark scheme.

OxfordAQA 9660 v5.2, §3.1 P1.1. For exact forms, MA01 January 2025 Q1(a)(b) and its paired mark scheme (QP pp. 2–3; MS pp. 4–5) inform the need to show index rewriting and the governing law. These are method-evidence references, not official marks for our tasks. Other groups retain their existing Q6/Q9 references.

[MA01 January 2025 QP](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-question-paper.pdf) · [paired MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-mark-scheme.pdf) · [MA02 January 2025 QP](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-question-paper.pdf) · [paired MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-mark-scheme.pdf)

Success means independently explaining the method and checking its conditions, not just reading a solution. Student learning outcomes have not been trialled.

</details>
