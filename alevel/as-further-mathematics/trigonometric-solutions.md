---
title: "Complete trigonometric solutions"
layout: subjects
mathjax: true
grade: as
subject: as-further-mathematics
lang: en
permalink: /alevel/as-further-mathematics/trigonometric-solutions/
toc_headings: h2, h3
study_page: true
---

[AS Further Mathematics](/alevel/as-further-mathematics/) · A3 · FP1.6

All demonstrations, scaffolded attempts, independent tasks and retries here are **self-written**, with no official marks. Write your method and reasons before opening hints and solutions separately.

## Why is the principal value insufficient? {#model}

**Start:** mark where sine equals $1/2$ on a unit circle. **Goal:** give every solution, including frequency, phase and non-special angles. Assume radians unless a degree symbol is shown; all integer parameters below lie in $\mathbb Z$. You need the unit circle and ordinary AS identities.

An inverse trigonometric function returns one principal angle, while a periodic equation usually has infinitely many. Reflection in the circle gives the second branch; rotation gives the period. For real solutions sine/cosine require $-1\le k\le1$.

$$\sin\theta=k:\quad\theta=\alpha+2n\pi\ \text{or}\ \pi-\alpha+2n\pi,\quad\alpha=\arcsin k.$$

$$\cos\theta=k:\quad\theta=\pm\beta+2n\pi,\quad\beta=\arccos k;\qquad
\tan\theta=k:\quad\theta=\gamma+n\pi,\quad\gamma=\arctan k.$$

At $k=\pm1$ the sine/cosine branches coincide; do not count them twice. In degrees replace $2\pi,\pi$ by $360^\circ,180^\circ$.

![Unit circle marking two distinct points with y=1/2, at angles π/6 and 5π/6, and labelled cosine and sine axes.](/alevel/as-further-mathematics/diagrams/trig.svg)

## Demonstration: transform the whole angle {#demonstration}

**Demonstration (self-written):** Solve $\sin(2x-\pi/6)=1/2$ for all real x.

$$2x-\pi/6=\pi/6+2n\pi\ \text{or}\ 5\pi/6+2n\pi
\Rightarrow x=\pi/6+n\pi\ \text{or}\ x=\pi/2+n\pi.$$

First solve for the entire angle, then undo both shift and multiplier. The x period is $\pi$, not $2\pi$. Substitute one member of each branch to check, and use the circle to justify completeness.

For a non-special value retain an inverse expression until final rounding. If $\cos(3x+0.2)=0.3$, take $\beta=\arccos(0.3)$ and obtain both signs:

$$x=\frac{\pm\arccos(0.3)-0.2+2n\pi}{3}.$$

## Scaffold and independent choice {#practice}

**Scaffold (self-written):** Complete the two branches for $\cos(2x)=1/\sqrt2$, then divide the entire expression by 2.

<details markdown="1"><summary>Scaffold check</summary>

$$2x=\pm\pi/4+2n\pi\Rightarrow x=\pm\pi/8+n\pi.$$

</details>

**Independent task (self-written):** Solve $2\sin^2x-3\sin x+1=0$ for all real x. Explain why $x=\arcsin(1/2)$ alone is incomplete. Also solve $\tan(3x+\pi/4)=-1$.

<details markdown="1"><summary>Hint</summary>

Treat sine as one algebraic unknown first. For tangent, its period is $\pi$ before undoing the coefficient 3.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$(2\sin x-1)(\sin x-1)=0\Rightarrow x=\pi/6+2n\pi,\ 5\pi/6+2n\pi,\ \pi/2+2n\pi.$$

$$3x+\pi/4=-\pi/4+n\pi\Rightarrow x=-\pi/6+n\pi/3.$$

The principal value omits the second sine branch, repeats after full periods, and also misses the root $\sin x=1$.

</details>

## Diagnose and retry {#retry}

If your period stayed $2\pi$ after solving for $2x$, divide the whole right side, including the integer term. If you divide by $\sin x$, check whether zero was lost before division.

**Retry (self-written):** Solve $\sin x\cos x=0$ and $\sin x=1.2$ over the reals.

<details markdown="1"><summary>Retry check</summary>

$$\sin x\cos x=0\Rightarrow x=n\pi/2;\qquad \sin x=1.2:\ \text{no real solution}.$$

</details>

## Sources and scope {#sources}

Scope follows 9665 v5.2. The paired questions and mark schemes below informed the required evidence; these exercises do not reproduce their questions or award official marks.

FM01 specimen identity: the QP body says **Specimen 2018 Morning**; its filename contains 2019/v3 and footer versions vary. The officially paired MS is a specimen with copyright 2017, not a live-exam Final MS.

- [OxfordAQA 9665 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf), FP1.6.
- FM01 specimen Q8; QP p.11, MS p.9. [FM01 specimen QP](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9665-FM01-international-as-further-mathematics-specimen-paper-2019-v3-1.pdf) · [Specimen MS](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9665-FM01-international-as-further-mathematics-mark-scheme-2017-v2-1.pdf).

[Previous](/alevel/as-further-mathematics/conics-and-loci/) · [Course route](/alevel/as-further-mathematics/#learning-route) · [Next](/alevel/as-further-mathematics/complex-numbers-and-roots/)
