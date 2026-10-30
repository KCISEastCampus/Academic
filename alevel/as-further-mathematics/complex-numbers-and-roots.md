---
title: "Complex numbers, Argand diagrams and roots"
layout: subjects
mathjax: true
grade: as
subject: as-further-mathematics
lang: en
permalink: /alevel/as-further-mathematics/complex-numbers-and-roots/
toc_headings: "#start, #model, #conjugate, #geometry, #loci, #roots, #practice, #retry, #later-review, #next-step, #sources"
study_page: true
reading_layout: true
---

[AS Further Mathematics](/alevel/as-further-mathematics/)

How can one number describe both a calculation and a point on a plane? Start with an equation that has no real solution, then connect algebra to distance and direction.

Work through [complex arithmetic](#model), [geometry](#geometry), then [quadratic roots](#roots). When ready, attempt the [independent check](#practice) with the explanations closed. You should be able to solve equations, justify loci and construct a new quadratic without finding each old root.

## Before you start {#start}

You need bracket expansion, quadratic equations, Pythagoras and angles in radians. Try these using only real-number knowledge.

<section class="lesson-check" markdown="1">

### Prerequisite check

**Entry check (self-written):** Expand $(t-1)^2$. Find the distance of $(-1,1)$ from the origin and its anticlockwise angle from the positive horizontal axis. Explain why $t^2=-4$ has no real solution.

<details markdown="1"><summary>Check and repair the prerequisites</summary>

$(t-1)^2=t^2-2t+1$: the middle term comes from two cross-products. The distance is $\sqrt{(-1)^2+1^2}=\sqrt2$. The reference angle is $\pi/4$, but the point is in quadrant II, so its direction is $3\pi/4$. Every real square is nonnegative, so no real number squares to $-4$.

If you missed a step, draw the right triangle or expand the two brackets before continuing. For a short recheck, expand $(t+2)^2$ and locate $(-1,-1)$ using an angle between $-\pi$ and $\pi$.

</details>

<details markdown="1"><summary>Prerequisite recheck answers</summary>

$(t+2)^2=t^2+4t+4$; the direction of $(-1,-1)$ is $-3\pi/4$. The negative angle means a clockwise turn.

</details>

</section>

## 1. Complex arithmetic {#model}

Introduce $i$ by the rule $i^2=-1$. Then $(2i)^2=4i^2=-4$, and $(-2i)^2=-4$ too. The equation that had no real solution now has two complex solutions.

Write a complex number as $z=x+iy$, with real $x,y$. Its real part is $\Re z=x$ and imaginary part is $\Im z=y$: the imaginary part is the coefficient, not the whole imaginary term. For $3-2i$, the imaginary part is $-2$.

Add or subtract corresponding parts. To multiply, expand every term first and only then replace $i^2$ by $-1$.

$$\begin{aligned}
(3+2i)+(1-i)&=4+i,\\
(3+2i)-(1-i)&=2+3i,\\
(3+2i)(1-i)&=3-3i+2i-2i^2\\
&=5-i.
\end{aligned}$$

### Why use the conjugate? {#conjugate}

The conjugate $\bar z=x-iy$ reverses the imaginary part. Multiplying the pair cancels the imaginary cross-terms:

$$z\bar z=(x+iy)(x-iy)=x^2-i^2y^2=x^2+y^2.$$

This gives a real denominator when dividing. Multiply numerator and denominator by the denominator's conjugate; this multiplies the fraction by one. The denominator must be nonzero.

$$\frac{3+2i}{1-i}=\frac{(3+2i)(1+i)}{(1-i)(1+i)}
=\frac{1+5i}{2}=\frac12+\frac52i.$$

Check by multiplying the result by $1-i$: you recover $3+2i$. In general $x^2+y^2>0$ whenever $x+iy\ne0$, so the division is valid.

<section class="worked-example" markdown="1">

### Turn a complex equation into real equations {#demonstration}

**Demonstration (self-written):** Solve $z+2\bar z=6-i$.

The unknown and its conjugate are linked, so use the same real variables: $z=x+iy$, $\bar z=x-iy$. Collect real terms and imaginary terms separately.

$$z+2\bar z=(x+iy)+2(x-iy)=3x-iy.$$

Two complex numbers are equal only when both parts agree. Hence $3x=6$ and $-y=-1$, giving $z=2+i$. Check in the original equation: $(2+i)+2(2-i)=6-i$.

</section>

For a quadratic, completing the square can expose the new roots directly:

$$\begin{aligned}
&z^2-2z+5=0\\
&\Longleftrightarrow (z-1)^2=-4\\
&\Longleftrightarrow z=1\pm2i.
\end{aligned}$$

For a quadratic with real coefficients, the quadratic formula gives either real roots or a conjugate pair: a negative discriminant contributes opposite imaginary terms. The real-coefficient condition matters; $z-i=0$, for example, does not also have root $-i$.

## 2. Modulus, argument and loci {#geometry}

An Argand diagram places $x+iy$ at $(x,y)$. The horizontal axis is real and the vertical axis imaginary. The modulus is the distance from the origin, so Pythagoras gives $r=\lvert z\rvert=\sqrt{x^2+y^2}$.

For a nonzero point, the argument is its direction from the positive real axis. We use the principal range $-\pi<\theta\le\pi$. Zero has no direction and therefore no argument. Projecting a radius onto the axes gives

$$\begin{aligned}
&x=r\cos\theta,\qquad y=r\sin\theta,\\
&z=r(\cos\theta+i\sin\theta).
\end{aligned}$$

For $-1+i$, the distance is $\sqrt2$ and the point is in quadrant II. The reference angle is $\pi/4$, so the principal argument is $3\pi/4$. Thus

$$-1+i=\sqrt2\left(\cos\frac{3\pi}{4}+i\sin\frac{3\pi}{4}\right).$$

Using only the inverse tangent of the coordinate ratio can give the wrong quadrant. Check the signs of both coordinates before choosing the angle.

### Translate a condition into a locus {#loci}

If $a$ is a fixed complex number, $z-a$ is the displacement from its point to the point for $z$. Therefore $\lvert z-a\rvert$ measures distance from that point, not necessarily from the origin.

For $r>0$, $\lvert z-a\rvert=r$ describes a circle of centre $a$ and radius $r$. A condition $\arg(z-a)=\theta$ describes a ray in that direction; its endpoint is excluded because the displacement there is zero. Equal distances to two distinct fixed points describe their perpendicular bisector.

In the diagram, identify the centre, the excluded ray endpoint and the radius before reading on.

![Argand diagram with real and imaginary axes: a circle centred at 1 with radius 2 and a ray at angle pi/4 from the excluded endpoint 1.](/alevel/as-further-mathematics/diagrams/argand.svg){: width="360" height="310" }

The circle fixes distance; the ray fixes direction. Satisfying both means taking their intersection. Starting at the centre, travel two units along the ray:

$$z=1+2\left(\cos\frac\pi4+i\sin\frac\pi4\right)
=1+\sqrt2+i\sqrt2.$$

The opposite point on the circle has the same distance but the wrong direction. It is not a second solution.

## 3. Transforming quadratic roots {#roots}

Suppose a quadratic has roots $\alpha,\beta$. Expanding its factors explains the signs:

$$(w-\alpha)(w-\beta)=w^2-(\alpha+\beta)w+\alpha\beta.$$

For $az^2+bz+c=0$, with $a\ne0$, divide by the leading coefficient and compare: the root sum is $S=-b/a$ and the product is $P=c/a$. To construct a transformed equation, find its **new** sum and product, then use the same expansion.

<section class="worked-example" markdown="1">

#### Example: replace both roots by reciprocals

For $z^2-3z+4=0$, we know $S=3$ and $P=4$. To replace both roots by reciprocals, first check $P\ne0$: neither root can be zero.

$$\frac1\alpha+\frac1\beta=\frac{\alpha+\beta}{\alpha\beta}=\frac34,
\qquad \frac1\alpha\frac1\beta=\frac14.$$

The equation is $w^2-\frac34w+\frac14=0$, or $4w^2-3w+1=0$. Dividing the final coefficients back gives the new sum and product, providing a quick sign check.

</section>

<section class="lesson-check" markdown="1">

#### Pause and complete the argument

**Scaffold (self-written):** For roots of $z^2-3z+4=0$, derive an expression for $\alpha^2+\beta^2$ in terms of $S=\alpha+\beta$ and $P=\alpha\beta$ and form the quadratic with roots $\alpha^2,\beta^2$.

<details markdown="1"><summary>Hint for the missing steps</summary>

Expand $(\alpha+\beta)^2$. For the product of the new roots, regroup $\alpha^2\beta^2$ as $(\alpha\beta)^2$.

</details>

<details markdown="1"><summary>Worked check</summary>

$S^2=\alpha^2+2\alpha\beta+\beta^2$, so the new sum is $9-8=1$. The new product is $P^2=16$. Hence $w^2-w+16=0$. The product is squared as well as the individual roots.

</details>

</section>

## Work independently {#practice}

Write your reasoning before opening any help. If you use a hint, record the attempt as completed with help rather than independently. These tasks mix the three learning segments; their headings do not tell you which method to select.

<section class="lesson-check" markdown="1">

#### Question 1 {#practice-1}

**Independent task (self-written):** Solve $(1+i)z+\bar z=4+2i$. Show your working and check your answer.

<details markdown="1"><summary>Hint</summary>

Express the unknown and conjugate using the same two real variables.

</details>

<details markdown="1"><summary>Solution and check</summary>

Put $z=x+iy$. Expanding gives

$$\begin{aligned}
&(1+i)(x+iy)+x-iy\\
&=(2x-y)+ix.
\end{aligned}$$

Thus $x=2$ and $2x-y=4$, so $y=0$ and $z=2$. Substitution gives $(1+i)2+2=4+2i$.

</details>

</section>

<section class="lesson-check" markdown="1">

#### Question 2 {#practice-2}

**Independent task (self-written):** Express $\dfrac{2-i}{1+i}$ in the form $x+iy$. Solve $z^2-2z+10=0$ and explain the relation between the roots.

<details markdown="1"><summary>Hint</summary>

Choose a multiplier that makes the denominator real; complete the square for the equation.

</details>

<details markdown="1"><summary>Solution and check</summary>

Multiplying by the conjugate gives

$$\frac{2-i}{1+i}=\frac{(2-i)(1-i)}2=\frac12-\frac32i.$$

For the quadratic, $(z-1)^2=-9$, so $z=1\pm3i$. They are conjugates; the coefficients are real and the roots are nonreal.

</details>

</section>

<section class="lesson-check" markdown="1">

#### Question 3 {#practice-3}

**Independent task (self-written):** Find every $z$ satisfying $\lvert z+1\rvert=2$ and $\arg(z+1)=3\pi/4$. Sketch both loci and mark the solution.

<details markdown="1"><summary>Hint</summary>

Locate the point from which the displacement is measured, then use its length and direction.

</details>

<details markdown="1"><summary>Solution and check</summary>

The centre is $-1$, not $1$. The radius is two; the ray points into quadrant II from that centre, excluding its endpoint.

$$\begin{aligned}
&z=-1+2\left(\cos\frac{3\pi}{4}+i\sin\frac{3\pi}{4}\right)\\
&=-1-\sqrt2+i\sqrt2.
\end{aligned}$$

Your sketch should label both axes, centre, radius, excluded endpoint and the single intersection. Check that $z+1=-\sqrt2+i\sqrt2$: its modulus is two and its principal argument is $3\pi/4$.

</details>

</section>

<section class="lesson-check" markdown="1">

#### Question 4 {#practice-4}

**Independent task (self-written):** Describe $\lvert z-2\rvert=\lvert z+2\rvert$. State whether $z=0$ lies on this locus and whether it has an argument.

<details markdown="1"><summary>Hint</summary>

Translate both distances before deciding about the origin.

</details>

<details markdown="1"><summary>Solution and check</summary>

The points are $2$ and $-2$ on the real axis. Their perpendicular bisector is the imaginary axis, $x=0$. The origin belongs because both distances equal two. It still has no argument; this distance condition does not require one.

</details>

</section>

<section class="lesson-check" markdown="1">

#### Question 5 {#practice-5}

**Independent task (self-written):** The roots of $z^2-3z+4=0$ are $\alpha,\beta$. Form a quadratic with integer coefficients whose roots are $\alpha+1/\alpha$ and $\beta+1/\beta$. Justify any nonzero condition you use.

<details markdown="1"><summary>Hint</summary>

Expand the new product into four terms. Express the two ratios together using the original sum and product.

</details>

<details markdown="1"><summary>Solution and check</summary>

$S=3$, $P=4\ne0$, so both reciprocals exist. The new sum is

$$S_{\rm new}=S+\frac SP=\frac{15}{4}.$$

Expanding the new product, rather than multiplying the two sums, gives

$$\begin{aligned}
P_{\rm new}&=\alpha\beta+\frac\alpha\beta+\frac\beta\alpha+\frac1{\alpha\beta}\\
&=P+\frac{S^2-2P}{P}+\frac1P=\frac92.
\end{aligned}$$

$$4w^2-15w+18=0.$$

The coefficients recover sum $15/4$ and product $18/4=9/2$. If you kept the old product, revisit the four-term expansion.

</details>

</section>

<section class="lesson-check" markdown="1">

#### Question 6 {#practice-6}

**Independent task (self-written):** For $z=-\sqrt3-i$, find its modulus and principal argument, and express it in the form $r(\cos\theta+i\sin\theta)$. Mark its position on an Argand diagram.

<details markdown="1"><summary>Hint</summary>

Check the signs of both coordinates; the reference angle need not be the principal argument.

</details>

<details markdown="1"><summary>Solution and check</summary>

The modulus is $\sqrt{3+1}=2$. The point is in quadrant III with reference angle $\pi/6$; its principal argument is $-5\pi/6$. Thus $z=2(\cos(-5\pi/6)+i\sin(-5\pi/6))$. Mark the point in quadrant III and the clockwise angle on your sketch; substitution recovers both negative components.

</details>

</section>

## Diagnose and retry {#retry}

Use your first attempt to choose a route. For sign or part-comparison errors, return to [complex arithmetic](#demonstration). For a nonreal denominator, revisit [conjugates](#conjugate). For a wrong centre or endpoint, revisit [loci](#loci). For new-root errors, return to [the factor expansion](#roots). For modulus, quadrant or polar-form errors in [question 6](#practice-6), revisit [distance and direction](#geometry), then attempt [retry 5](#retry-5). Close the old solution before retrying the corresponding item.

<section class="lesson-check" markdown="1">

#### Retry 1 {#retry-1}

**Retry (self-written):** Solve $2z+\bar z=9+2i$ and verify your result.

<details markdown="1"><summary>Hint</summary>

Collect real and imaginary coefficients separately.

</details>

<details markdown="1"><summary>Solution and check</summary>

$3x+iy=9+2i$ gives $z=3+2i$; substitution gives $2(3+2i)+(3-2i)=9+2i$.

</details>

</section>

<section class="lesson-check" markdown="1">

#### Retry 2 {#retry-2}

**Retry (self-written):** Express $\dfrac{1+2i}{1-i}$ in rectangular form. Solve $z^2+4z+13=0$.

<details markdown="1"><summary>Hint</summary>

Multiply by the denominator's conjugate; complete the square.

</details>

<details markdown="1"><summary>Solution and check</summary>

The numerator becomes $-1+3i$ and the denominator is two, giving $-\frac12+\frac32i$. Completing the square gives $(z+2)^2=-9$, hence $z=-2\pm3i$.

</details>

</section>

<section class="lesson-check" markdown="1">

#### Retry 3 {#retry-3}

**Retry (self-written):** Find all points satisfying $\lvert z-2\rvert=\sqrt2$ and $\arg(z-2)=-3\pi/4$. Also describe $\lvert z-1\rvert=\lvert z+3\rvert$ and decide whether the origin belongs to it.

<details markdown="1"><summary>Hint</summary>

Start the displacement at the correct centre and check both component signs. For the second locus, locate the midpoint of the two fixed points.

</details>

<details markdown="1"><summary>Solution and check</summary>

The displacement is $-1-i$, so $z=1-i$. The displacement $z-2$ has modulus $\sqrt2$ and argument $-3\pi/4$; this direction is measured from the starting point $2$. The second locus is $x=-1$; the origin is not on it because its distances are one and three.

</details>

</section>

<section class="lesson-check" markdown="1">

#### Retry 4 {#retry-4}

**Retry (self-written):** If $\alpha,\beta$ are the roots of $z^2-2z+2=0$, form the equation with roots $\alpha+1/\alpha,\beta+1/\beta$. Explain why these expressions exist.

<details markdown="1"><summary>Hint</summary>

Use the new-sum and four-term-product argument again with the new coefficients.

</details>

<details markdown="1"><summary>Solution and check</summary>

$S=2$, $P=2\ne0$. The new sum is $3$ and the new product is $5/2$, so $2w^2-6w+5=0$. Check both coefficients, not only the constant term.

</details>

</section>

<section class="lesson-check" markdown="1">

#### Retry 5 {#retry-5}

**Retry (self-written):** For $z=\sqrt3-i$, find its modulus and principal argument, and give its trigonometric form.

<details markdown="1"><summary>Hint</summary>

Return to [the geometric representation](#geometry): determine the quadrant before selecting the principal argument.

</details>

<details markdown="1"><summary>Solution and check</summary>

The modulus is $2$. The point is in quadrant IV, with principal argument $-\pi/6$. Thus $z=2(\cos(-\pi/6)+i\sin(-\pi/6))$. Substitution recovers a positive real part and a negative imaginary part.

</details>

</section>

## Review after the next lesson {#later-review}

After the next lesson, return here without rereading the examples. This task connects coordinates, roots and geometry; record any hint you needed.

<section class="lesson-check" markdown="1">

#### Review task

**Later review (self-written):** Points $A$ and $B$ represent the roots of $z^2+2z+5=0$. Find the roots and sketch the locus of points equidistant from $A$ and $B$. Form a quadratic with integer coefficients whose roots are the reciprocals of the original roots. Explain how the two reciprocal points are related geometrically.

<details markdown="1"><summary>Later review hint</summary>

Find the positions before deciding the equal-distance locus. For the new equation, use the original root sum and product; then check the geometry by writing the reciprocals in rectangular form.

</details>

<details markdown="1"><summary>Later review solution</summary>

The roots are $-1\pm2i$. Their joining segment is vertical and its midpoint is $(-1,0)$, so the perpendicular bisector is the real axis, $y=0$. Label these features on your sketch. The original sum is $-2$ and product is $5\ne0$. The new sum is $-2/5$, the product $1/5$, and the equation $5w^2+2w+1=0$. The reciprocal points are $(-1\mp2i)/5$: they are reflections in the real axis. Conjugation reverses the vertical coordinate; it does not change the horizontal coordinate.

</details>

</section>

## Where to go next {#next-step}

If you can explain your method and pass the matching retry without help, continue to [series](/alevel/as-further-mathematics/series/). Keep this page's [later review](#later-review) as your return task. If a step still fails, follow its recovery link above and retry before moving on.

## Sources and scope {#sources}

All exercises on this page are **self-written**, without official marks. This lesson covers FP1.3 and FP1.4; general polynomial root theory and De Moivre are reserved for FM03.

<details markdown="1"><summary>Official references and specimen identity</summary>

Scope follows 9665 v5.2. The paired questions and mark schemes below informed the required evidence; these exercises do not reproduce their questions or award official marks.

FM01 specimen identity: the QP body says **Specimen 2018 Morning**; its filename contains 2019/v3 and footer versions vary. The officially paired MS is a specimen with copyright 2017, not a live-exam Final MS.

- [OxfordAQA 9665 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf), FP1.3 FP1.4.
- FM01 specimen Q2, Q4, Q7; QP pp.3–6,10–11, MS pp.4–5,8. [FM01 specimen QP](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9665-FM01-international-as-further-mathematics-specimen-paper-2019-v3-1.pdf) · [Specimen MS](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9665-FM01-international-as-further-mathematics-mark-scheme-2017-v2-1.pdf).


</details>

[Previous](/alevel/as-further-mathematics/trigonometric-solutions/) · [Course route](/alevel/as-further-mathematics/#learning-route) · [Next](/alevel/as-further-mathematics/series/)

{% include exam_topic_practice.html %}
