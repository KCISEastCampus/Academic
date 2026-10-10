---
title: Roots and Polynomials
layout: subjects
mathjax: true
grade: a2
subject: a2-further-mathematics
permalink: /alevel/a2-further-mathematics/roots-and-polynomials/
toc_headings: h2
study_page: true
---

[Further Pure Mathematics](/alevel/a2-further-mathematics/) · FP2.1 Roots and polynomials

Use the coefficients of a polynomial to find information about its roots. Find missing roots, including non-real roots, and check your answers.

- **Learning:** start with the [method](#method), then work through the examples.
- **Homework help:** choose an example on [roots and coefficients](#roots-and-coefficients), [complex roots](#complex-roots) or [real roots](#real-roots).
- **Revision:** try [practice](#practice) first, then use the [quick reference](#quick-reference).

Textbook: Chapter 17, Sections 17.1–17.2, printed pp. 198–206, in *International A Level Further Mathematics*.

**Before you start:** review [AS Further Mathematics](/alevel/as-further-mathematics/#3-complex-numbers-fp13) for complex numbers. You should know the factor theorem, algebraic division, the quadratic formula and differentiation. Remember that $i^2=-1$.

## Method

**Learning goal:** use the relations between roots and coefficients, form an equation with given roots and find all roots when one complex root is given.

A root of $f(x)=0$ is a value of $x$ that makes $f(x)$ zero. By the factor theorem, if $f(\alpha)=0$, then $x-\alpha$ is a factor.

A polynomial of degree $n$ has $n$ complex roots **counting repeated roots**. Some or all of these roots may be real. For example, $(x-1)^2(x+2)=0$ has roots $1,1,-2$; the root $1$ occurs twice.

**Choose your first step:**

- **Asked for a sum or product of roots?** Write the equation in descending powers and compare coefficients. You usually do not need to solve it.
- **Asked for an equation with new roots?** Find their sum and products, or express the old variable in terms of the new one and substitute.
- **Given a non-real root?** Check whether every coefficient is real before using its complex conjugate.
- **Asked how many roots are real?** Use differentiation and the values at stationary points. A change of sign on its own only shows that there is at least one real root in an interval.

## Roots and Coefficients

### Cubic equations

Suppose $ax^3+bx^2+cx+d=0$, where $a\ne0$, has roots $\alpha,\beta,\gamma$. Then

$$ax^3+bx^2+cx+d=a(x-\alpha)(x-\beta)(x-\gamma).$$

Expand the factors:

$$\begin{aligned}
&a(x-\alpha)(x-\beta)(x-\gamma)\\
&\quad=ax^3-a(\alpha+\beta+\gamma)x^2\\
&\qquad+a(\alpha\beta+\beta\gamma+\gamma\alpha)x\\
&\qquad-a\alpha\beta\gamma.
\end{aligned}$$

Equating coefficients gives

$$\boxed{\begin{aligned}
\alpha+\beta+\gamma&=-\frac{b}{a},\\
\alpha\beta+\beta\gamma+\gamma\alpha&=\frac{c}{a},\\
\alpha\beta\gamma&=-\frac{d}{a}.
\end{aligned}}$$

These relations hold for real and non-real roots. Include a repeated root each time it occurs.

**Common mistake:** $\alpha\beta+\beta\gamma+\gamma\alpha$ is the sum of the products of pairs of roots. It is not $\alpha\beta\gamma$.

### Polynomials of degree n

For $a_nx^n+a_{n-1}x^{n-1}+\cdots+a_1x+a_0=0$, where $a_n\ne0$,

$$\boxed{\begin{aligned}
\text{sum of roots}&=-\frac{a_{n-1}}{a_n},\\
\text{product of roots}&=(-1)^n\frac{a_0}{a_n}.
\end{aligned}}$$

For $n\ge2$, the sum of the products of all pairs of roots is $\frac{a_{n-2}}{a_n}$. The signs alternate as you take roots one, two, three, then four at a time. The product of all roots is $\frac{a_0}{a_n}$ for even $n$ and $-\frac{a_0}{a_n}$ for odd $n$.

**Check the missing terms:** in $2x^4-3x+5=0$, the coefficients of $x^3$ and $x^2$ are zero. The sum of the roots and the sum of their pairwise products are both zero; the product of all four roots is $\frac{5}{2}$.

### Example 1 — Find information without solving

The roots of $2x^3-3x^2-8x+12=0$ are $\alpha,\beta,\gamma$. Find their sum, their product and $\alpha^2+\beta^2+\gamma^2$.

Here $a=2$, $b=-3$, $c=-8$, $d=12$. Hence

$$\alpha+\beta+\gamma=\frac{3}{2},\qquad
\alpha\beta+\beta\gamma+\gamma\alpha=-4,\qquad
\alpha\beta\gamma=-6.$$

Expand the square of the sum:

$$\alpha^2+\beta^2+\gamma^2
=(\alpha+\beta+\gamma)^2-2(\alpha\beta+\beta\gamma+\gamma\alpha).$$

Therefore

$$\boxed{\alpha^2+\beta^2+\gamma^2=\left(\frac{3}{2}\right)^2-2(-4)=\frac{41}{4}.}$$

**Check:** the polynomial factorises as $(2x-3)(x-2)(x+2)$. Its roots are $\frac{3}{2},2,-2$, which give the same sum, product and sum of squares. Factorisation checks the results; it was not needed to find them.

### Example 2 — Form an equation with new roots

Using the roots in Example 1, find a cubic equation with roots $\alpha\beta,\beta\gamma,\gamma\alpha$.

Let the new roots be $u,v,w$. Their sum is

$$u+v+w=\alpha\beta+\beta\gamma+\gamma\alpha=-4.$$

Their pairwise products have sum

$$\begin{aligned}
uv+vw+wu
&=\alpha\beta^2\gamma+\alpha\beta\gamma^2+\alpha^2\beta\gamma\\
&=\alpha\beta\gamma(\alpha+\beta+\gamma)=-6\times\frac{3}{2}=-9.
\end{aligned}$$

Their product is

$$uvw=(\alpha\beta\gamma)^2=36.$$

The equation is $t^3-(u+v+w)t^2+(uv+vw+wu)t-uvw=0$, so

$$\boxed{t^3+4t^2-9t-36=0.}$$

**Check:** the new roots are $3,-4,-3$. Multiplying $(t-3)(t+4)(t+3)$ gives the same cubic. Use a new variable, such as $t$, so you can distinguish the new equation from the old one.

## Complex Roots

### Complex conjugate pairs

If a polynomial has **real coefficients** and $p+qi$ is a non-real root, then $p-qi$ is also a root. Here $p,q$ are real and $q\ne0$. These roots form a **complex conjugate pair**.

Why? For a polynomial with real coefficients, taking the complex conjugate of $f(z)$ gives $f(\overline z)$. If $f(z)=0$, then $f(\overline z)=\overline0=0$ too.

The corresponding two linear factors give a quadratic with real coefficients:

$$\begin{aligned}
&[z-(p+qi)][z-(p-qi)]\\
&\quad=[(z-p)-qi][(z-p)+qi]\\
&\quad=(z-p)^2+q^2\\
&\quad=z^2-2pz+p^2+q^2.
\end{aligned}$$

**Common mistake:** the constant is $p^2+q^2$, not $p^2-q^2$, because $i^2=-1$.

### Example 3 — Find the other roots of a cubic

Show that $1+2i$ is a root of $f(z)=z^3-5z^2+11z-15$. Hence solve $f(z)=0$.

First calculate

$$(1+2i)^2=-3+4i,\qquad (1+2i)^3=-11-2i.$$

Substitution gives

$$f(1+2i)=(-11-2i)-5(-3+4i)+11(1+2i)-15=0.$$

All coefficients are real, so $1-2i$ is also a root. The two roots give the factor

$$[z-(1+2i)][z-(1-2i)]=(z-1)^2+4=z^2-2z+5.$$

Divide the cubic by this quadratic, or compare coefficients:

$$z^3-5z^2+11z-15=(z^2-2z+5)(z-3).$$

Therefore

$$\boxed{z=1+2i,\quad 1-2i,\quad 3.}$$

**Check:** the sum is $5$, the pairwise products have sum $11$ and the product is $15$. State all three roots, not just the real one.

### Example 4 — A quartic with an unknown coefficient

The polynomial $f(z)=z^4-6z^3+kz^2-18z+10$, where $k$ is real, has a root $1+i$. Find $k$ and all the other roots.

Since $(1+i)^2=2i$, $(1+i)^3=-2+2i$ and $(1+i)^4=-4$,

$$\begin{aligned}
f(1+i)&=-4-6(-2+2i)+2ki-18(1+i)+10\\
&=(2k-30)i=0.
\end{aligned}$$

Thus $k=15$. The coefficients are real, so $1-i$ is also a root. The pair gives the factor $z^2-2z+2$, and division gives

$$z^4-6z^3+15z^2-18z+10=(z^2-2z+2)(z^2-4z+5).$$

Solve the remaining quadratic:

$$z=\frac{4\pm\sqrt{16-20}}{2}=2\pm i.$$

All four roots are

$$\boxed{1+i,\quad 1-i,\quad 2+i,\quad 2-i.}$$

**Check:** their sum is $6$. Their product is $(1^2+1^2)(2^2+1^2)=10$. Expanding the two quadratics checks every coefficient, including $k$.

### Example 5 — When the coefficients are not all real

The equation $z^2-(3+i)z+2+2i=0$ has a root $1+i$. Find the other root.

The coefficient of $z$ is not real, so you cannot assume that $1-i$ is a root. The sum of the two roots is $3+i$. If the other root is $\beta$, then

$$(1+i)+\beta=3+i,\qquad \boxed{\beta=2.}$$

**Check:** $(1+i)\times2=2+2i$, matching the constant term. The roots are not a complex conjugate pair.

## Real Roots

For a cubic with real coefficients, there is at least one real root. The remaining two roots may both be real or may form a non-real complex conjugate pair.

To decide how many real roots there are, differentiate:

- If $f'(x)$ is always positive or always negative, the cubic is strictly increasing or decreasing and has exactly one real root.
- If there are two stationary points and their function values have opposite signs, there are three distinct real roots.
- If both stationary values are positive, or both are negative, there is exactly one real root.
- If there are two stationary points and one stationary value is zero, there is a double root. Count it twice when using roots and coefficients.

If there is just one stationary point, check its type. For example, $f(x)=x^3$ has a stationary point of inflection and a triple root at zero.

### Example 6 — Bound a real root and the real parts of two complex roots

Let $f(x)=x^3-3x^2+4x-5$.

**1. Show that there is exactly one real root.**

$$f'(x)=3x^2-6x+4=3(x-1)^2+1>0$$

for every real $x$. Thus the cubic is strictly increasing. Its values tend to opposite infinities at the two ends, so it crosses the $x$-axis exactly once.

**2. Find an interval containing the real root $\alpha$.**

$$f(2)=-1,\qquad f(3)=7.$$

The polynomial is continuous and changes sign, so $2<\alpha<3$.

**3. Bound the real parts of the non-real roots.**

Write the other roots as $p+qi$ and $p-qi$, where $p,q$ are real and $q\ne0$. The sum of all three roots is $3$, so

$$\alpha+(p+qi)+(p-qi)=3,\qquad p=\frac{3-\alpha}{2}.$$

Using $2<\alpha<3$ gives

$$\boxed{0<p<\frac{1}{2}.}$$

**Check your reasoning:** the sign change locates a root. The derivative shows it is the only real root. You need both steps before concluding that the other two roots are non-real.

## Practice

Work on paper first. Open a hint only if needed, then use the solution to check each step.

Questions 1–6 are self-written exercises with no official marks. Question 7 is an original AQA question reproduced in the supplied textbook; it is from a different qualification, not an OxfordAQA FM03 paper.

### Question 1 — Coefficients and sums of squares

The roots of $3x^3+6x^2-9x-12=0$ are $\alpha,\beta,\gamma$. Find their sum, their product and $\alpha^2+\beta^2+\gamma^2$.

<details markdown="1">
<summary>Hint</summary>

Keep the leading coefficient $3$ in each denominator. Expand $(\alpha+\beta+\gamma)^2$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The sum is $-2$, the pairwise products have sum $-3$ and the product is $4$.

$$\boxed{\alpha^2+\beta^2+\gamma^2=(-2)^2-2(-3)=10.}$$

Dividing the equation by $3$ gives $x^3+2x^2-3x-4=0$, confirming the same three coefficient ratios.

</details>

### Question 2 — A polynomial of degree five

Let $f(x)=2x^5-3x^4+4x^3-x+8$. Show that $-1$ is a root. Find the sum and product of the other four roots, counting repeated roots.

<details markdown="1">
<summary>Hint</summary>

Find the sum and product of all five roots first. Subtract the known root from the sum and divide the product by the known root.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$f(-1)=-2-3-4+1+8=0.$$

The sum of all roots is $\frac{3}{2}$ and their product is $(-1)^5\frac{8}{2}=-4$. Hence the other four roots have

$$\boxed{\text{sum}=\frac{5}{2},\qquad \text{product}=4.}$$

Division gives $f(x)=(x+1)(2x^4-5x^3+9x^2-9x+8)$. The quartic has sum $\frac{5}{2}$ and product $\frac{8}{2}=4$, confirming both answers.

</details>

### Question 3 — Shift each root

The roots of $x^3-2x^2-x+2=0$ are $\alpha,\beta,\gamma$. Find a cubic equation with roots $\alpha+1,\beta+1,\gamma+1$.

<details markdown="1">
<summary>Hint</summary>

Let $t=x+1$. Substitute $x=t-1$ into the old equation.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$(t-1)^3-2(t-1)^2-(t-1)+2=0$$

gives

$$\boxed{t^3-5t^2+6t=0.}$$

The old equation factorises as $(x-2)(x-1)(x+1)=0$. Adding $1$ to the roots gives $3,2,0$, matching $t(t-2)(t-3)=0$.

</details>

### Question 4 — Find all roots of a quartic

Given that $1+i$ is a root of $z^4-8z^3+31z^2-46z+34=0$, find the other roots.

<details markdown="1">
<summary>Hint</summary>

The coefficients are real. Use the conjugate root to form the factor $z^2-2z+2$, then divide.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The root $1-i$ also occurs. Division gives

$$z^4-8z^3+31z^2-46z+34=(z^2-2z+2)(z^2-6z+17).$$

The second quadratic is $(z-3)^2+8=0$, so its roots are $3\pm2\sqrt{2}i$. The other three roots are

$$\boxed{1-i,\quad 3+2\sqrt{2}i,\quad 3-2\sqrt{2}i.}$$

Substituting $z=3\pm2\sqrt{2}i$ gives $(z-3)^2+8=-8+8=0$, so both values make the original polynomial zero. Their sum together with the given root is $8$, and their product is $2(9+8)=34$. Expanding the factors also checks the coefficients $31$ and $-46$.

</details>

### Question 5 — A complex coefficient

The equation $z^2-(4-i)z+k=0$ has a root $1+i$. Find the other root and the complex constant $k$.

<details markdown="1">
<summary>Hint</summary>

Use the sum of the roots to find the other root. Then use their product to find $k$. The conjugate-pair rule does not apply here.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The sum is $4-i$, so the other root is $(4-i)-(1+i)=3-2i$.

$$\boxed{k=(1+i)(3-2i)=5+i.}$$

Expanding $[z-(1+i)][z-(3-2i)]$ gives $z^2-(4-i)z+5+i$, as required.

</details>

### Question 6 — Exactly one real root

Show that $x^3+3x+2=0$ has exactly one real root $\alpha$ and that $-1<\alpha<0$. Find an interval containing the real part of each non-real root.

<details markdown="1">
<summary>Hint</summary>

Differentiate to establish the number of real roots. Then use the sign change and the sum of all three roots.

</details>

<details markdown="1">
<summary>Solution and check</summary>

For $f(x)=x^3+3x+2$, $f'(x)=3x^2+3>0$ for every real $x$. The cubic is strictly increasing and therefore has exactly one real root.

Since $f(-1)=-2$ and $f(0)=2$, continuity gives $-1<\alpha<0$.

The non-real roots are $p\pm qi$. Their sum with $\alpha$ is zero, so $p=-\frac{\alpha}{2}$ and

$$\boxed{0<p<\frac{1}{2}.}$$

The interval is positive because $\alpha$ is negative. The imaginary parts cancel in the sum of the conjugate roots.

</details>

### Question 7 — Original AQA practice

**Source:** AQA MFP2, January 2006, as reproduced in the textbook's Chapter 17, practice examination question 4, printed p. 206. Original marks are shown below.

The cubic equation

$$x^3+px^2+qx+r=0$$

where $p$, $q$ and $r$ are real, has roots $\alpha$, $\beta$ and $\gamma$.

**a** Given that

$$\alpha+\beta+\gamma=4\quad\text{and}\quad\alpha^2+\beta^2+\gamma^2=20$$

find the values of $p$ and $q$. **(5 marks)**

**b** Given further that one root is $3+i$, find the value of $r$. **(5 marks)**

<details markdown="1">
<summary>Hint</summary>

Use the sum for $p$, then expand its square to find the sum of pairwise products. For part b, use the conjugate root and find the real root from the sum.

</details>

<details markdown="1">
<summary>Worked solution and check</summary>

**a** Since $\alpha+\beta+\gamma=-p=4$, $p=-4$. Also

$$20=4^2-2(\alpha\beta+\beta\gamma+\gamma\alpha),$$

so $\alpha\beta+\beta\gamma+\gamma\alpha=-2$ and $q=-2$.

**b** All coefficients are real, so $3-i$ is another root. The third root is $4-(3+i)-(3-i)=-2$.

$$\alpha\beta\gamma=(3+i)(3-i)(-2)=10(-2)=-20.$$

For a cubic, $\alpha\beta\gamma=-r$, hence

$$\boxed{p=-4,\quad q=-2,\quad r=20.}$$

**Check:** $(x+2)(x^2-6x+10)=x^3-4x^2-2x+20$. The sum of the squares is $(3+i)^2+(3-i)^2+(-2)^2=20$.

This is our worked solution, not an official mark scheme. Show the coefficient relations, the square identity, the reason for the conjugate root and the product calculation.

</details>

## Quick Reference

| Task | Method | Check |
|---|---|---|
| Cubic: sum, pairs and product | $\displaystyle -\frac{b}{a},\ \frac{c}{a},\ -\frac{d}{a}$ for $ax^3+bx^2+cx+d=0$ | Keep the leading coefficient and its signs |
| Sum of squares | Square the sum and subtract twice the sum of pairwise products | Include all cross terms |
| Degree $n$: product of all roots | $\displaystyle (-1)^n\frac{a_0}{a_n}$ | Count repeated roots; check whether $n$ is odd or even |
| Given a root $p+qi$ | For real coefficients, use the root $p-qi$ | Form $(z-p)^2+q^2$, then divide |
| Complex coefficients | Use substitution and roots-and-coefficients relations | Do not assume conjugate roots |
| Number of real roots | Differentiate and examine stationary values | A sign change locates at least one root, not necessarily the only one |

**After practice:** if signs caused a problem, repeat Question 1. If you missed a root, repeat Question 4. If you used conjugates with complex coefficients, compare Example 5 and Question 5. If you found a root interval but did not prove uniqueness, review Example 6.

**You should be able to:** read sums and products from coefficients, form equations with new roots, find every root from a given complex root and explain when conjugate roots must occur.

The lesson follows FP2.1 of the [OxfordAQA Further Mathematics 9665 specification](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf). Examples 1–6 are teaching examples; Questions 1–6 are self-written exercises. Question 7 retains the AQA question and marks from the supplied textbook.

**Learning path:** [Back to the course](/alevel/a2-further-mathematics/) · [Next: Proof by Induction](/alevel/a2-further-mathematics/proof-by-induction/).
