---
title: "Complete trigonometric solutions"
layout: subjects
mathjax: true
grade: as
subject: as-further-mathematics
lang: en
permalink: /alevel/as-further-mathematics/trigonometric-solutions/
toc_headings: "#start, #model, #demonstration, #non-special, #practice, #retry, #later-review, #next-step, #sources"
study_page: true
reading_layout: true
---

[AS Further Mathematics](/alevel/as-further-mathematics/)

An inverse function returns one angle. A periodic equation asks for every angle. Use the unit circle to establish completeness, then undo any frequency and phase change for the whole angle. Finish with the [independent questions](#practice).

## Before you start {#start}

You need the unit circle, radians, special-angle values and factorisation. All integer parameters below lie in $\mathbb Z$; angles are in radians unless a degree symbol is shown. You should finish able to give complete exact or inverse-function solutions, including non-special values, and justify any excluded or repeated cases.

<section class="lesson-check" markdown="1">

### Entry check {#entry}

**Entry check (self-written):** Mark the points where sine equals $1/2$ on a unit circle. Give their angles in $[0,2\pi)$. State the periods of sine, cosine and tangent.

<details markdown="1"><summary>Hint</summary>

Sine is the vertical coordinate.

</details>

<details markdown="1"><summary>Solution and check</summary>

The angles are $\pi/6$ and $5\pi/6$. Sine and cosine repeat after $2\pi$; tangent after $\pi$, wherever defined. If you found only one point, draw the horizontal line of height $1/2$ and find both intersections with the circle.

</details>

</section>

## Why the principal value is insufficient {#model}

Sine is the vertical coordinate on the unit circle, so a typical horizontal line meets it twice. Cosine is the horizontal coordinate, with angles reflected across the horizontal axis. Adding full turns gives all positions with those coordinates. Tangent is the coordinate ratio, so opposite points give the same value after a half-turn. These observations explain both the second branch and the repetition.

![Unit circle marking two distinct points with y=1/2, at angles π/6 and 5π/6, and labelled cosine and sine axes.](/alevel/as-further-mathematics/diagrams/trig.svg){: width="560" height="465" }

For real sine/cosine solutions require $-1\le k\le1$. With principal values $\alpha=\arcsin k$ and $\beta=\arccos k$, the full families are

$$\begin{aligned}
&\sin\theta=k:\quad\theta=\alpha+2n\pi\\
&\text{or }\theta=\pi-\alpha+2n\pi;\\
&\cos\theta=k:\quad\theta=\beta+2n\pi\\
&\text{or }\theta=-\beta+2n\pi.
\end{aligned}$$

For tangent, $\gamma=\arctan k$ exists for every real $k$, and $\theta=\gamma+n\pi$. Tangent is undefined when cosine is zero; none of these solution angles has that problem. At $k=\pm1$, the two sine/cosine families coincide, so one family suffices. At zero, the sine families combine into $\theta=n\pi$, whereas cosine gives $\theta=\pi/2+n\pi$.

## Transform the entire angle {#demonstration}

<section class="worked-example" markdown="1">

### Keep both branches and divide every term

**Demonstration (self-written):** Solve $\sin(2x-\pi/6)=1/2$ for all real x.

Put $\theta=2x-\pi/6$. Solve for this whole angle first, not for just the input variable. The two unit-circle positions give

$$\begin{aligned}
&2x-\pi/6=\pi/6+2n\pi\\
&\text{or }5\pi/6+2n\pi.\\
&2x=\pi/3+2n\pi\\
&\text{or }\pi+2n\pi.\\
&x=\pi/6+n\pi\\
&\text{or }\pi/2+n\pi.
\end{aligned}$$

The period in the input is $\pi$: the integer term must be divided by 2 too. At the first representatives $x=\pi/6,\pi/2$, the whole angles are $\pi/6,5\pi/6$ and both have sine $1/2$. Every real solution must map to one of these two circle positions modulo $2\pi$; the reversible affine transformation therefore loses none.

</section>

## Non-special values and units {#non-special}

<section class="worked-example" markdown="1">

### Retain an exact inverse expression

**Demonstration (self-written):** Solve $\cos(3x+0.2)=0.3$ for all real x.

The value is not a special-angle cosine. Define $\beta=\arccos(0.3)$ in radians rather than rounding it at the start. Both signs are required:

$$\begin{aligned}
&3x+0.2=\beta+2n\pi\\
&\text{or }-\beta+2n\pi,\\
&x=\frac{\beta-0.2}{3}+\frac{2n\pi}{3}\\
&\text{or }\frac{-\beta-0.2}{3}+\frac{2n\pi}{3}.
\end{aligned}$$

The representatives are approximately $0.355368$ and $-0.488701$, with period $2\pi/3$. They are not all positive; negative representatives are valid in a general solution. Substitution recovers whole angles $\pm\beta$, proving the original cosine value. Round only a requested numerical answer, not the period or the defining inverse expression.

</section>

In degrees, replace full and half turns by $360^\circ,180^\circ$. For example, $\tan(2x-30^\circ)=1$ gives $2x-30^\circ=45^\circ+180^\circ n$, hence $x=37.5^\circ+90^\circ n$. A calculator angle mode must agree with the units, but a displayed principal value still does not supply a general solution.

<section class="lesson-check" markdown="1">

### Complete the whole-angle step {#scaffold}

**Scaffold (self-written):** Complete the two branches for $\cos(2x)=1/\sqrt2$, then divide the entire expression by 2.

<details markdown="1"><summary>Hint</summary>

Use both signs of the angle $\pi/4$.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$\begin{aligned}
&2x=\pm\pi/4+2n\pi,\\
&x=\pm\pi/8+n\pi.
\end{aligned}$$

Both the representative and period have been divided.

</details>

</section>

## Work independently {#practice}

Give all real solutions and explain why none are missing. Do not divide by an expression that might be zero: first preserve its zero case.

<section class="lesson-check" markdown="1">

### Question 1 {#practice-1}

**Independent task (self-written):** Solve $2\sin^2x-3\sin x+1=0$ for all real x. Explain why $x=\arcsin(1/2)$ alone is incomplete. Also solve $\tan(3x+\pi/4)=-1$.

<details markdown="1"><summary>Hint</summary>

Treat sine as one algebraic unknown first; tangent has a half-turn period.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$\begin{aligned}
&(2\sin x-1)(\sin x-1)=0,\\
&x=\pi/6+2n\pi,\\
&x=5\pi/6+2n\pi,\\
&x=\pi/2+2n\pi.\\[2pt]
&3x+\pi/4=-\pi/4+n\pi,\\
&x=-\pi/6+n\pi/3.
\end{aligned}$$

The principal value omits the second sine branch, its full-turn repetitions, and the algebraic possibility $\sin x=1$. The endpoint case contributes only one new family. Both tangent angle and period were divided by 3. If a family is missing, revisit [circle positions](#model), then retry 1.

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 2 {#practice-2}

**Independent task (self-written):** Solve $\sin(2x-0.4)=-0.3$ for all real x. Give an exact inverse-function form and decimal representatives to six decimal places. Justify the second branch and the period.

<details markdown="1"><summary>Hint</summary>

The principal inverse sine is negative here; use its actual value in the reflection formula.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$\begin{aligned}
&\alpha=\arcsin(-0.3),\\
&2x-0.4=\alpha+2n\pi\\
&\text{or }\pi-\alpha+2n\pi,\\
&x=\frac{\alpha+0.4}{2}+n\pi\\
&\text{or }\frac{\pi-\alpha+0.4}{2}+n\pi.
\end{aligned}$$

Representatives are $0.047654$ and $1.923143$, each with period $\pi$. The second whole angle has the same vertical coordinate on the circle, so both families are necessary. Every full turn of the whole angle changes the input by half a full turn. If you omitted the second branch, revisit [the unit circle](#model); for the period revisit [the affine step](#demonstration), then retry 2.

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 3 {#practice-3}

**Independent task (self-written):** In degrees, solve $\tan(2x-30^\circ)=\sqrt3$ and $\cos(3x+60^\circ)=-1$ for all real x. Explain why two distinct cosine families are not needed.

<details markdown="1"><summary>Hint</summary>

Use the whole angle and check whether the two cosine signs describe the same family.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$\begin{aligned}
&2x-30^\circ\\
&=60^\circ+180^\circ n,\\
&x=45^\circ+90^\circ n;\\[2pt]
&3x+60^\circ\\
&=180^\circ+360^\circ n,\\
&x=40^\circ+120^\circ n.
\end{aligned}$$

The two cosine representatives $180^\circ$ and $-180^\circ$ differ by a full turn, so their families coincide. Tangent is defined at all its listed angles.

</details>

</section>

## Diagnose and retry {#retry}

For a lost zero factor or impossible sine value, revisit [real-coordinate bounds](#model), then retry 1. For a wrong period or non-special branch, revisit [the whole-angle procedure](#demonstration), then retry 2. Close your corrected answers first.

<section class="lesson-check" markdown="1">

### Retry 1 {#retry-1}

**Retry (self-written):** Solve $\sin x\cos x=0$ and $\sin x=1.2$ over the reals.

<details markdown="1"><summary>Hint</summary>

Keep both zero-factor cases and check the possible sine range.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$\sin x\cos x=0\Rightarrow x=n\pi/2.$$

The families $x=n\pi$ and $x=\pi/2+n\pi$ combine into this one. The equation $\sin x=1.2$ has no real solution since $1.2>1$.

</details>

</section>

<section class="lesson-check" markdown="1">

### Retry 2 {#retry-2}

**Retry (self-written):** Solve $\cos(2x+0.6)=-0.2$ for all real x. Keep an exact inverse-function form and explain its completeness.

<details markdown="1"><summary>Hint</summary>

Use the two reflected whole angles, then divide all terms by 2.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$\begin{aligned}
&\beta=\arccos(-0.2),\\
&x=\frac{\beta-0.6}{2}+n\pi\\
&\text{or }\frac{-\beta-0.6}{2}+n\pi.
\end{aligned}$$

These two positions exhaust a full turn of the whole angle, and the affine map is reversible.

</details>

</section>

## Return after the next lesson {#later-review}

<section class="lesson-check" markdown="1">

### Mixed review {#review}

**Later review (self-written):** Solve $\cos(2x)=\cos x$ and $\tan(x/2)=1$ for all real x. Explain any algebraic roots or undefined values you reject.

<details markdown="1"><summary>Hint</summary>

Choose a representation for the first equation without dividing away a possible zero factor.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$\begin{aligned}
&2\cos^2x-\cos x-1=0,\\
&(2\cos x+1)(\cos x-1)=0,\\
&x=2n\pi\\
&\text{or }2\pi/3+2n\pi\\
&\text{or }-2\pi/3+2n\pi.\\[2pt]
&x/2=\pi/4+n\pi,\\
&x=\pi/2+2n\pi.
\end{aligned}$$

Both algebraic cosine values $-1/2,1$ are allowed. None of the listed tangent angles has zero cosine. For lost families revisit [the circle](#model); for a doubled period revisit [the whole angle](#demonstration).

</details>

</section>

## Where to go next {#next-step}

After an unaided matching retry, continue to [complex numbers and roots](/alevel/as-further-mathematics/complex-numbers-and-roots/). Complete the [conics review](/alevel/as-further-mathematics/conics-and-loci/#later-review) now, and return here after the next lesson.

## Sources and scope {#sources}

All demonstrations and exercises here are **self-written**, without official marks. FP1.6 includes complete trigonometric solutions with special and non-special values. Inverse-trigonometric calculus is not needed here.

<details markdown="1"><summary>Official references and specimen identity</summary>

Scope follows 9665 v5.2. The paired questions and mark schemes below informed the required evidence; these exercises do not reproduce their questions or award official marks.

FM01 specimen identity: the QP body says **Specimen 2018 Morning**; its filename contains 2019/v3 and footer versions vary. The officially paired MS is a specimen with copyright 2017, not a live-exam Final MS.

- [OxfordAQA 9665 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf), FP1.6.
- FM01 specimen Q8; QP p.11, MS p.9. [FM01 specimen QP](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9665-FM01-international-as-further-mathematics-specimen-paper-2019-v3-1.pdf) · [Specimen MS](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9665-FM01-international-as-further-mathematics-mark-scheme-2017-v2-1.pdf).

</details>

[Previous](/alevel/as-further-mathematics/conics-and-loci/) · [Course route](/alevel/as-further-mathematics/#learning-route) · [Next](/alevel/as-further-mathematics/complex-numbers-and-roots/)
