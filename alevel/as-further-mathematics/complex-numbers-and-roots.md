---
title: "Complex numbers, Argand diagrams and roots"
layout: subjects
mathjax: true
grade: as
subject: as-further-mathematics
lang: en
permalink: /alevel/as-further-mathematics/complex-numbers-and-roots/
toc_headings: h2, h3
study_page: true
---

[AS Further Mathematics](/alevel/as-further-mathematics/) · A4 · FP1.3 FP1.4

All demonstrations, scaffolded attempts, independent tasks and retries here are **self-written**, with no official marks. Write your method and reasons before opening hints and solutions separately.

## One object, algebra and geometry {#model}

**Start:** expand $(x+iy)(x-iy)$ using $i^2=-1$. **Goal:** solve complex equations, interpret Argand loci and transform quadratic roots. You need quadratics, coordinates and trigonometry. Here $z=x+iy$, $\Re z=x$, $\Im z=y$, $\bar z=x-iy$; real and imaginary parts are real numbers.

$$z\bar z=x^2+y^2;\qquad \lvert z\rvert=\sqrt{x^2+y^2};\qquad
z=r(\cos\theta+i\sin\theta).$$

For $z\ne0$, choose the correct quadrant, with principal argument $-\pi<\theta\le\pi$ here. Zero has no argument. Add/subtract components; multiply with $i^2=-1$; divide by a nonzero complex number using its conjugate. For example:

$$\frac{3+2i}{1-i}=\frac{(3+2i)(1+i)}2=\frac12+\frac52i;\qquad -1+i=\sqrt2(\cos(3\pi/4)+i\sin(3\pi/4)).$$

## Demonstration: compare parts, then interpret {#demonstration}

**Demonstration (self-written):** Solve $z+2\bar z=6-i$.

$$z=x+iy\Rightarrow3x-iy=6-i\Rightarrow x=2,\ y=1,\ z=2+i.$$

Equality requires both parts to agree. Check $(2+i)+2(2-i)=6-i$. For $z^2-2z+5=0$, the quadratic formula gives $1\pm2i$. Nonreal roots occur in conjugate pairs because the coefficients are real; that assertion need not hold for complex coefficients.

On an Argand diagram x is the real axis and y the imaginary axis. $\lvert z-a\rvert=r$ is a circle; $\arg(z-a)=\theta$ is a ray excluding its endpoint; equal distances to two points give their perpendicular bisector. Intersecting conditions means satisfying both, not taking their union.

![Argand diagram showing the circle centred at 1 of radius 2, a ray at π/4 starting at an excluded endpoint 1, and real and imaginary axes. The independent intersection is not labelled.](/alevel/as-further-mathematics/diagrams/argand.svg)

If roots $\alpha,\beta$ solve $az^2+bz+c=0$ with $a\ne0$, write $S=-b/a$, $P=c/a$. A new quadratic is determined by its new sum and product, without finding the roots separately. Reciprocals require $P\ne0$. For roots of $z^2-3z+4=0$, transformed roots $1/\alpha,1/\beta$ have sum $3/4$, product $1/4$, so their equation is $4w^2-3w+1=0$. General polynomial root theory and De Moivre belong to FM03.

## Scaffold and independent choice {#practice}

**Scaffold (self-written):** For roots of $z^2-3z+4=0$, complete $\alpha^2+\beta^2=S^2-2P$ and form the quadratic with roots $\alpha^2,\beta^2$.

<details markdown="1"><summary>Scaffold check</summary>

$$S^2-2P=1,\qquad P^2=16\Rightarrow w^2-w+16=0.$$

</details>

**Independent task (self-written):** (a) Solve $(1+i)z+\bar z=4+2i$. (b) Find every z satisfying $\lvert z-1\rvert=2$ and $\arg(z-1)=\pi/4$. (c) If $\alpha,\beta$ solve $z^2-3z+4=0$, form the equation whose roots are $\alpha+1/\alpha$ and $\beta+1/\beta$.

<details markdown="1"><summary>Hint</summary>

Use two real equations in (a); a distance and direction in (b); symmetric sum and product in (c). Derive $\alpha/\beta+\beta/\alpha$ from $S,P$.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$(1+i)(x+iy)+x-iy=(2x-y)+ix;\quad x=2,\ y=0\Rightarrow z=2.$$

$$z=1+2(\cos(\pi/4)+i\sin(\pi/4))=1+\sqrt2+i\sqrt2.$$

$$S_{\rm new}=S+S/P=15/4;\quad P_{\rm new}=P+\frac{S^2-2P}{P}+\frac1P=\frac92;\quad4w^2-15w+18=0.$$

The ray endpoint is excluded by its undefined argument. The positive radius places the intersection on the ray, not on the opposite half-line.

</details>

## Diagnose and retry {#retry}

A wrong quadrant can keep the tangent ratio but change z. If your new equation has the wrong sign, expand $(w-u)(w-v)$: the sum enters with a minus sign.

**Retry (self-written):** Describe $\lvert z-2\rvert=\lvert z+2\rvert$. Does $z=0$ have a principal argument? Solve $z^2+4=0$.

<details markdown="1"><summary>Retry check</summary>

The locus is the imaginary axis $x=0$; zero has no argument; the roots are $\pm2i$.

</details>

## Sources and scope {#sources}

Scope follows 9665 v5.2. The paired questions and mark schemes below informed the required evidence; these exercises do not reproduce their questions or award official marks.

FM01 specimen identity: the QP body says **Specimen 2018 Morning**; its filename contains 2019/v3 and footer versions vary. The officially paired MS is a specimen with copyright 2017, not a live-exam Final MS.

- [OxfordAQA 9665 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf), FP1.3 FP1.4.
- FM01 specimen Q2, Q4, Q7; QP pp.3–6,10–11, MS pp.4–5,8. [FM01 specimen QP](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9665-FM01-international-as-further-mathematics-specimen-paper-2019-v3-1.pdf) · [Specimen MS](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9665-FM01-international-as-further-mathematics-mark-scheme-2017-v2-1.pdf).

[Previous](/alevel/as-further-mathematics/trigonometric-solutions/) · [Course route](/alevel/as-further-mathematics/#learning-route) · [Next](/alevel/as-further-mathematics/series/)
