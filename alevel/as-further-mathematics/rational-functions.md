---
title: "Rational functions: graphs and range"
layout: subjects
mathjax: true
grade: as
subject: as-further-mathematics
lang: en
permalink: /alevel/as-further-mathematics/rational-functions/
toc_headings: "#start, #model, #demonstration, #signs, #range, #quadratic-range, #practice, #retry, #later-review, #next-step, #sources"
study_page: true
reading_layout: true
---

[AS Further Mathematics](/alevel/as-further-mathematics/)

How can a quotient describe disconnected branches and an exact range? Connect factors to the graph, then ask which horizontal lines actually meet it. After the three forms, close the examples for the [independent check](#practice).

## Before you start {#start}

You need factorisation, quadratic equations, discriminants and signs. If needed, revisit [AS quadratics](/alevel/as-mathematics/algebra/#l02). You should finish able to justify sketches, intersections, inequalities and ranges without calculus.

<section class="lesson-check" markdown="1">

### Entry check {#entry}

**Entry check (self-written):** Factor $x^2-x-2$. State where $(x-2)(x+1)$ is positive, zero or negative.

<details markdown="1"><summary>Hint</summary>

Find both zeros; test a point per interval.

</details>

<details markdown="1"><summary>Solution and check</summary>

The factors are $(x-2)(x+1)$, zeros $-1,2$. Signs from left to right are $+,-,+$; endpoints give zero. Expand to check $x^2-x-2$.

</details>

</section>

## Factors, exclusions and asymptotes {#model}

A rational function is a quotient of polynomials. Here the forms are linear/linear, linear/quadratic and monic quadratic/monic quadratic. Record original denominator exclusions first: cancellation never restores a forbidden input.

After cancellation, a denominator zero with nonzero numerator gives a vertical asymptote. A finite limit at an excluded input instead leaves a hole. For large input magnitude compare leading terms: lower numerator degree gives horizontal asymptote zero, equal degrees give the leading-coefficient ratio. This describes end behaviour, so crossing a horizontal asymptote is possible.

A numerator zero gives an axis intercept only if the original denominator is nonzero. Substitute input zero for the other intercept only when the domain allows it.

<section class="worked-example" markdown="1">

### One graph, several checks {#demonstration}

**Demonstration (self-written):** Sketch $f(x)=(x+1)/(x-2)$ and find its intersections with $y=x$.

$$\begin{aligned}
&f(x)=\frac{x+1}{x-2}\\
&=1+\frac3{x-2},\\
&x\ne2.
\end{aligned}$$

The rewrite separates a fixed height and a changing fraction. Asymptotes are $x=2,y=1$; intercepts $(-1,0),(0,-1/2)$. Left of 2 the graph is below 1; right of 2 it is above 1. Approaching the pole makes the fraction unbounded. These facts determine the branches.

![Graph of y=(x+1)/(x−2), labelled intercepts and dashed asymptotes x=2, y=1.](/alevel/as-further-mathematics/diagrams/rational.svg){: width="560" height="440" }

A common point satisfies both equations. Multiplication by the denominator is reversible on this domain:

$$\begin{aligned}
&\frac{x+1}{x-2}=x\\
&\iff x+1=x(x-2)\\
&\iff x^2-3x-1=0,\\
&x=\frac{3\pm\sqrt{13}}2.
\end{aligned}$$

Neither root is 2, so both are legal, with $y=x$. Check the quadratic and the original denominator; eliminated roots are only candidates until then.

</section>

## Inequalities need signs {#signs}

Zeros and poles divide the domain into intervals of constant sign. Mark both. Multiplying by a denominator of unknown sign may reverse the inequality; use a single fraction or explicitly split cases.

<section class="lesson-check" markdown="1">

### Complete the signs {#scaffold}

**Scaffold (self-written):** Solve $f(x)>0$ by marking signs in the intervals cut by $-1,2$.

<details markdown="1"><summary>Hint</summary>

Use $f(x)=(x+1)/(x-2)$.

</details>

<details markdown="1"><summary>Solution and check</summary>

Signs are $+,-,+$, hence $x<-1$ or $x>2$. The strict inequality excludes the zero; 2 is forbidden.

</details>

</section>

## A height needs an admissible input {#range}

Set the output to a real height $k$, clear the denominator on its domain and ask whether a legal real input exists. A discriminant applies only while the equation is quadratic. If the leading coefficient vanishes, solve the reduced equation separately; retain denominator exclusions throughout.

For the first graph, $(k-1)x=2k+1$. At $k=1$ this requires $0=3$, impossible. Every other height gives a legal candidate since

$$\begin{aligned}
&x=\frac{2k+1}{k-1},\\
&x-2=\frac3{k-1}\ne0.
\end{aligned}$$

Thus all real heights except 1 occur. The missing asymptote height is a result proved here, not a general asymptote rule.

<section class="worked-example" markdown="1">

### Linear over quadratic

**Demonstration (self-written):** Sketch $q(x)=x/(x^2-1)$ and determine its range without calculus.

The poles are $x=\pm1$, with nonzero numerators. The only axis intersection is $(0,0)$. The odd graph crosses horizontal asymptote $y=0$. The four intervals from left to right have signs negative, positive, negative, positive. Factor signs also determine which way each branch becomes unbounded at a pole.

$$\begin{aligned}
&q(x)=k\iff kx^2-x-k=0,\\
&x\ne\pm1.\\
&k\ne0:\quad D=1+4k^2>0.\\
&k=0:\quad -x=0.
\end{aligned}$$

Inputs $1,-1$ give polynomial values $-1,1$, so neither can be a root for any height. Nonzero heights have legal real roots, and height zero has legal input zero. The range is all real numbers; there is no global finite maximum or minimum.

</section>

## Quadratic theory and attained extrema {#quadratic-range}

<section class="worked-example" markdown="1">

### Keep the reduced case

**Demonstration (self-written):** Find the range and extremum points of $g(x)=(x^2+2)/(x^2-4x)$ without calculus.

$$\begin{aligned}
&g(x)=k\\
&\iff(1-k)x^2+4kx+2=0,\\
&x\ne0,4.\\
&k\ne1:\quad D=16k^2+8k-8\\
&=8(2k-1)(k+1)\ge0.
\end{aligned}$$

This gives $k\le-1$ or $k\ge1/2$. Inputs 0 and 4 give polynomial values 2 and 18, so resulting roots are never forbidden. At $k=1$ the equation reduces to $4x+2=0$, with legal input $x=-1/2$. Include it; the same range intervals hold.

$$\begin{aligned}
&k=-1:\quad2(x-1)^2=0\\
&\Rightarrow(1,-1),\\
&k=\tfrac12:\quad\tfrac12(x+2)^2=0\\
&\Rightarrow(-2,1/2).
\end{aligned}$$

Both boundaries are attained: $(1,-1)$ is a maximum on the negative middle branch; $(-2,1/2)$ is a minimum on its outer branch. The unbounded function has no global extrema. For a sketch add poles $x=0,4$, no axis intercepts and asymptote $y=1$, crossed at $x=-1/2$. The argument supplies legal inputs for all allowed heights and excludes every gap height.

</section>

## Work independently {#practice}

Draw your own labelled sketches with examples closed; record any help used.

<section class="lesson-check" markdown="1">

### Question 1 {#practice-1}

**Independent task (self-written):** For $h(x)=(x^2-1)/(x^2-x-2)$, find domain and range, sketch missing points and asymptotes, and solve $h(x)>2$. Justify excluded heights.

<details markdown="1"><summary>Hint</summary>

Factor but retain exclusions. Is the missing height reached elsewhere? Examine $h(x)-2$.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$\begin{aligned}
&h(x)=\frac{x-1}{x-2},\\
&x\ne-1,2,\\
&h(x)-2=\frac{3-x}{x-2}.
\end{aligned}$$

Hole $(-1,2/3)$; asymptotes $x=2,y=1$; intercepts $(1,0),(0,1/2)$. Each height other than 1 has one candidate input, but $2/3$ gives only forbidden $-1$. Range excludes $1,2/3$; inequality gives $2<x<3$. For a restored exclusion return to [domain](#model), then [retry 3](#retry-3); for a sign error use [retry 1](#retry-1).

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 2 {#practice-2}

**Independent task (self-written):** For $u(x)=x/(x^2+1)$, sketch the graph with its intercepts, asymptotes and extrema, and prove its exact range without calculus. Explain what happens when the equation for an input loses its quadratic term.

<details markdown="1"><summary>Hint</summary>

Use height $k$; can the denominator vanish?

</details>

<details markdown="1"><summary>Solution and check</summary>

$$\begin{aligned}
&\frac{x}{x^2+1}=k\\
&\iff kx^2-x+k=0.\\
&k\ne0:\quad1-4k^2\ge0.\\
&k=0:\quad x=0.\\
&k=\pm\tfrac12:\quad x=\pm1.
\end{aligned}$$

Domain all real numbers; range $[-1/2,1/2]$. The odd graph passes $(0,0)$, has no vertical asymptote and approaches $y=0$ at both ends. Extrema $(-1,-1/2),(1,1/2)$ are attained. Height $k=0$ is legal. Independently, $(x-1)^2\ge0$ and $(x+1)^2\ge0$ give both bounds after division by the positive denominator. A lost zero calls for [degree reduction](#range).

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 3 {#practice-3}

**Independent task (self-written):** Determine the domain and range of $v(x)=(x^2+1)/(x^2-1)$ without calculus. Sketch its branches and identify any attained extremum. Is the horizontal-asymptote height attained?

<details markdown="1"><summary>Hint</summary>

Check squared-input nonnegativity and $k=1$ separately.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$\begin{aligned}
&v(x)=k\\
&\iff(1-k)x^2+(1+k)=0.\\
&k=1:\quad2=0.\\
&k\ne1:\quad x^2=\frac{k+1}{k-1}\ge0.
\end{aligned}$$

Range $k\le-1$ or $k>1$. The candidate square cannot equal 1, which would require $1=-1$. Exclude inputs $\pm1$. The even graph has poles $x=\pm1$, asymptote $y=1$, no horizontal-axis intercept and intercept $(0,-1)$. The middle branch has maximum $-1$ at zero; outer branches exceed 1. Height 1 is unattained. Compare this reduced equation with [the legal example](#quadratic-range).

</details>

</section>

## Diagnose and retry {#retry}

For holes or lost heights revisit [factors](#model) and [admissible heights](#range), then retry 3. For wrong intervals revisit [signs](#signs), then retry 1. For missing or invented heights revisit [the input equation](#range), then retry 2. Close old solutions first.

<section class="lesson-check" markdown="1">

### Retry 1 {#retry-1}

**Retry (self-written):** Solve $x/(x^2-1)\ge0$, explaining endpoints.

<details markdown="1"><summary>Hint</summary>

Mark numerator and denominator zeros separately.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$x\in(-1,0]\cup(1,\infty).$$

Exclude both poles; include the numerator zero. This linear/quadratic form has horizontal asymptote $y=0$.

</details>

</section>

<section class="lesson-check" markdown="1">

### Retry 2 {#retry-2}

**Retry (self-written):** Find the exact range and any extremum of $w(x)=x^2/(x^2+1)$ without calculus. Decide whether its horizontal-asymptote height occurs.

<details markdown="1"><summary>Hint</summary>

Check the exceptional height before dividing by $1-k$.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$\begin{aligned}
&\frac{x^2}{x^2+1}=k\\
&\iff(1-k)x^2=k.\\
&k=1:\quad0=1.\\
&k\ne1:\quad x^2=\frac{k}{1-k}\ge0.
\end{aligned}$$

Range $[0,1)$, minimum $(0,0)$, height 1 unattained. Denominator has no real zeros. Check using $w(x)=1-1/(x^2+1)$.

</details>

</section>

<section class="lesson-check" markdown="1">

### Retry 3 {#retry-3}

**Retry (self-written):** Simplify $H(x)=(x^2-3x+2)/(x^2-1)$ without changing its domain. Find its exact range and the coordinates of any hole. Prove whether the missing-point height is attained at another input.

<details markdown="1"><summary>Hint</summary>

Keep the original denominator exclusions. Solve for a candidate input at a general height, then test both exclusions.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$\begin{aligned}
&H(x)=\frac{x-2}{x+1},\\
&x\ne1,-1,\\
&H(x)=k\iff(k-1)x=-k-2.\\
&k=1:\quad0=-3,\\
&k\ne1:\quad x=\frac{-k-2}{k-1}.
\end{aligned}$$

The domain excludes $1,-1$. There is a hole at $(1,-1/2)$ and a pole at $x=-1$. Height 1 is impossible. For every other height there is exactly one candidate input. It never equals $-1$ (that would require $-2=1$), and equals 1 exactly when $k=-1/2$. Thus the range is $\mathbb R\setminus\{1,-1/2\}$; no other input restores the hole height. If you kept the hole but not the missing height, revisit [the admissible-input argument](#range).

</details>

</section>

## Return after the next lesson {#later-review}

<section class="lesson-check" markdown="1">

### Mixed review {#review}

**Later review (self-written):** Find every point where $f(x)=(x+1)/(x-2)$ meets $y=x$, and solve $f(x)<x$. Separately, determine whether $u(x)=x/(x^2+1)$ can equal $3/5$ or zero. Explain how your evidence differs between the two questions.

<details markdown="1"><summary>Hint</summary>

Intersections do not completely partition the domain. A height needs an existence argument.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$\begin{aligned}
&\frac{x+1}{x-2}=x\\
&\iff x^2-3x-1=0,\\
&a=\frac{3-\sqrt{13}}2,\\
&b=\frac{3+\sqrt{13}}2,\\
&f(x)-x=\frac{-x^2+3x+1}{x-2}.
\end{aligned}$$

Points $(a,a),(b,b)$ with $a<2<b$. Inequality: $a<x<2$ or $x>b$. Height $3/5$ requires $3x^2-5x+3=0$ with discriminant $-11$, so it is impossible; zero occurs at input zero. Wrong intervals call for [signs](#signs), missing existence reasoning for [range](#range).

</details>

</section>

## Where to go next {#next-step}

When you can justify sketches and reduced equations and pass the matching retry without help, continue to [conics and loci](/alevel/as-further-mathematics/conics-and-loci/). Return for the review after that lesson.

## Sources and scope {#sources}

All demonstrations and exercises here are **self-written**, without official marks. FP1.1 covers the three rational forms, axis-parallel asymptotes, intersections, inequalities and quadratic theory for range and extrema.

<details markdown="1"><summary>Official references and specimen identity</summary>

Scope follows 9665 v5.2. The paired questions and mark schemes below informed the required evidence; these exercises do not reproduce their questions or award official marks.

FM01 specimen identity: the QP body says **Specimen 2018 Morning**; its filename contains 2019/v3 and footer versions vary. The officially paired MS is a specimen with copyright 2017, not a live-exam Final MS.

- [OxfordAQA 9665 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf), FP1.1.
- FM01 specimen Q9; QP pp.12–13, MS p.9. [FM01 specimen QP](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9665-FM01-international-as-further-mathematics-specimen-paper-2019-v3-1.pdf) · [Specimen MS](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9665-FM01-international-as-further-mathematics-mark-scheme-2017-v2-1.pdf).

</details>

[Course route](/alevel/as-further-mathematics/#learning-route) · [Next](/alevel/as-further-mathematics/conics-and-loci/)
