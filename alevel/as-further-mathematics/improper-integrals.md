---
title: "Improper integrals: convergence or divergence"
layout: subjects
mathjax: true
grade: as
subject: as-further-mathematics
lang: en
permalink: /alevel/as-further-mathematics/improper-integrals/
toc_headings: "#start, #model, #demonstration, #finite-endpoints, #power-test, #separate-limits, #practice, #retry, #later-review, #next-step, #sources"
study_page: true
reading_layout: true
---

[AS Further Mathematics](/alevel/as-further-mathematics/)

A region can extend forever yet have finite area; a bounded interval can contain infinite area. The decision comes from a finite cutoff followed by a limit. Learn to identify every bad endpoint before attempting the [independent questions](#practice).

## Before you start {#start}

You need definite integration, powers and simple limits, including logarithms for exponent $-1$. Revisit [AS integration](/alevel/as-mathematics/integration/) if antiderivative signs are uncertain. You should finish able to identify the improper part, write the correct one-sided limits, evaluate convergent cases and justify divergence. Complicated integration techniques are not needed.

<section class="lesson-check" markdown="1">

### Entry check {#entry}

**Entry check (self-written):** Evaluate $\int_1^R x^{-2}\,dx$ for finite $R>1$. Differentiate your antiderivative to check it. What happens to $1/R$ as $R$ grows without bound?

<details markdown="1"><summary>Hint</summary>

Apply the power rule, then subtract the lower-end value.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$\begin{aligned}
&\int_1^R x^{-2}\,dx=[-x^{-1}]_1^R\\
&=1-1/R.
\end{aligned}$$

The derivative of $-x^{-1}$ is $x^{-2}$, and $1/R\to0$. If you obtained a negative integral, check the minus sign and upper-minus-lower order before proceeding.

</details>

</section>

## Replace the bad endpoint with a finite one {#model}

An ordinary definite integral needs a suitable integrand throughout a finite interval. An infinite bound, an unbounded integrand at an endpoint, or a singularity inside the interval requires additional limit definitions. Infinity is not a number to substitute into an antiderivative.

$$\begin{aligned}
&\int_1^\infty f(x)\,dx
=\lim_{R\to\infty}\int_1^R f(x)\,dx,\\
&\int_0^1 f(x)\,dx
=\lim_{\varepsilon\to0^+}\int_\varepsilon^1 f(x)\,dx.
\end{aligned}$$

The second expression is needed when zero is a singular endpoint. In each case, integrate on a finite interval where the integrand is defined, then examine the limit. Convergence means that limit is a finite real number. An infinite or nonexistent limit means divergence, not a finite answer written with an infinity sign.

## An infinite interval: compare two tails {#demonstration}

<section class="worked-example" markdown="1">

### Derive a limit, not just a large cutoff

**Demonstration (self-written):** Decide whether $\int_1^\infty x^{-2}\,dx$ and $\int_1^\infty x^{-1/2}\,dx$ converge.

$$\begin{aligned}
&\int_1^R x^{-2}\,dx=1-1/R,\\
&\lim_{R\to\infty}(1-1/R)=1.
\end{aligned}$$

The first integral converges to 1. Every finite cutoff omits a positive tail. Its area equals the remaining reciprocal, so the omission tends to zero, which supplies the proof.

![Area under y=1/x² from x=1 to a finite cutoff R=4; dashed boundary at R and the remaining positive tail are labelled.](/alevel/as-further-mathematics/diagrams/improper.svg){: width="560" height="475" }

$$\begin{aligned}
&\int_1^R x^{-1/2}\,dx
=[2\sqrt x]_1^R\\
&=2(\sqrt R-1),\\
&\lim_{R\to\infty}2(\sqrt R-1)=+\infty.
\end{aligned}$$

The second diverges. Both integrands tend to zero, but tending to zero is insufficient: the accumulated areas behave differently. A graph or a numerical cutoff can suggest this difference; the limits establish it.

</section>

## A finite interval with an unbounded integrand {#finite-endpoints}

<section class="worked-example" markdown="1">

### Approach zero from inside the interval

**Demonstration (self-written):** Compare $\int_0^1 x^{-1/2}\,dx$ with $\int_0^1 x^{-2}\,dx$.

$$\begin{aligned}
&\int_\varepsilon^1 x^{-1/2}\,dx
=2(1-\sqrt\varepsilon),\\
&\lim_{\varepsilon\to0^+}2(1-\sqrt\varepsilon)=2.\\[2pt]
&\int_\varepsilon^1 x^{-2}\,dx
=\varepsilon^{-1}-1,\\
&\lim_{\varepsilon\to0^+}(\varepsilon^{-1}-1)=+\infty.
\end{aligned}$$

The first converges to 2 despite an unbounded integrand; the second diverges. The cutoff approaches from the positive side because that is inside the integration interval. Convergence depends on the endpoint behaviour, not just the interval length or whether the function itself becomes unbounded.

</section>

## Prove the power conditions {#power-test}

For real $p\ne1$, the power rule gives two different finite-cutoff formulas:

$$\begin{aligned}
&\int_1^R x^{-p}\,dx
=\frac{R^{1-p}-1}{1-p},\\
&\int_\varepsilon^1 x^{-p}\,dx
=\frac{1-\varepsilon^{1-p}}{1-p}.
\end{aligned}$$

At infinity, $p>1$ makes $1-p<0$, so $R^{1-p}\to0$ and the value is $1/(p-1)$. If $p<1$, the positive power of the upper cutoff grows without bound and so does the integral. At zero, $p<1$ makes $\varepsilon^{1-p}\to0$, giving $1/(1-p)$; if $p>1$, the reciprocal power grows without bound and the positive integral diverges.

At the excluded parameter $p=1$, use logarithms instead:

$$\begin{aligned}
&\int_1^R\frac{dx}{x}=\ln R\longrightarrow+\infty,\\
&\int_\varepsilon^1\frac{dx}{x}
=-\ln\varepsilon\longrightarrow+\infty.
\end{aligned}$$

Thus the infinite tail and the zero endpoint have opposite strict conditions. The argument treats every real exponent, including the logarithmic boundary, rather than inferring a rule from a few examples.

## Separate every singularity before adding {#separate-limits}

If $c$ is an interior singularity of an integral from $a$ to $b$, choose independent cutoffs on its two sides:

$$\begin{aligned}
&L_-=\lim_{u\to c^-}\int_a^u f(x)\,dx,\\
&L_+=\lim_{v\to c^+}\int_v^b f(x)\,dx.
\end{aligned}$$

The ordinary improper integral exists only when both $L_-$ and $L_+$ are finite, and then equals their sum. For two infinite endpoints or several singularities, split into regular pieces and check each bad endpoint independently. You may not choose linked cutoffs to make divergent pieces cancel.

<section class="worked-example" markdown="1">

### Why a symmetric cancellation is not convergence

**Demonstration (self-written):** Assess the claim that $\int_{-1}^1 1/x\,dx=0$ because the integrand is odd.

$$\begin{aligned}
&\int_{-1}^{-\varepsilon}\frac{dx}{x}
=\ln\varepsilon\longrightarrow-\infty,\\
&\int_\delta^1\frac{dx}{x}
=-\ln\delta\longrightarrow+\infty.
\end{aligned}$$

Both one-sided integrals diverge. Taking the same positive cutoff $\varepsilon=\delta$ makes the sum zero each time, but this is a different, linked-cutoff procedure; it is not the ordinary improper integral. Nor may the fundamental theorem be applied across an undefined point. Odd symmetry does not repair that domain break.

</section>

<section class="lesson-check" markdown="1">

### Complete a cutoff calculation {#scaffold}

**Scaffold (self-written):** Evaluate $\int_4^\infty x^{-3/2}\,dx$ with a finite upper bound first.

<details markdown="1"><summary>Hint</summary>

Integrate on a finite interval, then inspect its upper-end term.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$\begin{aligned}
&\int_4^R x^{-3/2}\,dx=[-2x^{-1/2}]_4^R\\
&=1-2/\sqrt R,\\
&\lim_{R\to\infty}(1-2/\sqrt R)=1.
\end{aligned}$$

The limit is finite, so the integral converges to this value.

</details>

</section>

## Work independently {#practice}

Locate singularities before calculating. Use separate cutoffs where necessary and explain why the resulting limits settle the question.

<section class="lesson-check" markdown="1">

### Question 1 {#practice-1}

**Independent task (self-written):** Decide whether each integral converges and evaluate those that do: $\int_0^4x^{-1/2}\,dx$, $\int_0^1x^{-3/2}\,dx$, and $\int_{-1}^1x^{-2}\,dx$. A calculator returns a finite value after cutting out a small interval around zero: does that settle the last case?

<details markdown="1"><summary>Hint</summary>

Locate endpoint and interior singularities before choosing cutoffs.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$\begin{aligned}
&\int_\varepsilon^4x^{-1/2}\,dx\\
&=4-2\sqrt\varepsilon\to4,\\
&\int_\varepsilon^1x^{-3/2}\,dx
=2/\sqrt\varepsilon-2\to+\infty.\\[2pt]
&\int_{-1}^{-\varepsilon}x^{-2}\,dx
=\varepsilon^{-1}-1\to+\infty,\\
&\int_\delta^1x^{-2}\,dx
=\delta^{-1}-1\to+\infty.
\end{aligned}$$

Here $\varepsilon,\delta\to0^+$ independently. Only the first converges, to 4. Both sides of the last integral diverge, so it diverges; a finite value at each finite cutoff does not establish a finite limit. If you crossed zero in one calculation, revisit [separate limits](#separate-limits), then retry 1.

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 2 {#practice-2}

**Independent task (self-written):** A student writes $\int_0^2 1/(x-1)\,dx=[\ln\lvert x-1\rvert]_0^2=0$. Determine whether this conclusion is valid and give the required independent one-sided limits.

<details markdown="1"><summary>Hint</summary>

Find every input where the integrand is undefined before using the endpoint subtraction.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$\begin{aligned}
&\int_0^{1-\varepsilon}\frac{dx}{x-1}
=\ln\varepsilon\to-\infty,\\
&\int_{1+\delta}^2\frac{dx}{x-1}
=-\ln\delta\to+\infty.
\end{aligned}$$

Take $\varepsilon,\delta\to0^+$ separately. Neither limit is finite, so the integral diverges. The proposed antiderivative calculation crosses a singularity. Equal cutoffs hide, rather than remove, the two divergences.

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 3 {#practice-3}

**Independent task (self-written):** For real $p$, determine when $\int_1^\infty4x^{-p}\,dx$ has a finite value. Find $p$ if that value is 2. For your resulting exponent, does $\int_0^1 4x^{-p}\,dx$ converge? Justify the boundary case as well.

<details markdown="1"><summary>Hint</summary>

Keep the exceptional exponent out of the power-rule formula and check it separately.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$\begin{aligned}
&\int_1^R4x^{-p}\,dx\\
&=\frac{4(R^{1-p}-1)}{1-p},\\
&p\ne1.
\end{aligned}$$

The infinite integral converges exactly for $p>1$, with value $4/(p-1)$. Equating it to 2 gives $p=3$, which satisfies the condition. At $p=1$, $4\ln R\to+\infty$. The zero-end integral for exponent 3 diverges since its finite cutoff is $2\varepsilon^{-2}-2\to+\infty$. If you applied the tail condition at zero, revisit [the two power limits](#power-test), then retry 2.

</details>

</section>

## Diagnose and retry {#retry}

A finite cutoff is not proof of convergence: return to [the limit definition](#model). If an antiderivative crosses a singularity, return to [separate limits](#separate-limits), then retry 1. If a power condition is reversed or its boundary is omitted, return to [the proof by cases](#power-test), then retry 2.

<section class="lesson-check" markdown="1">

### Retry 1 {#retry-1}

**Retry (self-written):** Determine whether $\int_0^4 (x-2)^{-2}\,dx$ converges. Write both one-sided cutoff integrals.

<details markdown="1"><summary>Hint</summary>

The singularity is inside the interval, not at its endpoints.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$\begin{aligned}
&\int_0^{2-\varepsilon}(x-2)^{-2}\,dx\\
&=\varepsilon^{-1}-1/2,\\
&\int_{2+\delta}^4(x-2)^{-2}\,dx\\
&=\delta^{-1}-1/2.
\end{aligned}$$

As $\varepsilon,\delta\to0^+$ separately, both tend to $+\infty$. The integral diverges. Moving the singularity does not change the need to split it.

</details>

</section>

<section class="lesson-check" markdown="1">

### Retry 2 {#retry-2}

**Retry (self-written):** For which p do both $\int_0^1x^{-p}\,dx$ and $\int_1^\infty x^{-p}\,dx$ converge?

<details markdown="1"><summary>Hint</summary>

Write both strict conditions and test their boundary.

</details>

<details markdown="1"><summary>Solution and check</summary>

No real $p$ works: the first requires $p<1$, the second $p>1$. At $p=1$ both logarithmic integrals diverge. Thus $\int_0^\infty x^{-p}\,dx$ never converges for any real exponent; one finite endpoint result cannot compensate for the other divergence.

</details>

</section>

## Return after the next lesson {#later-review}

<section class="lesson-check" markdown="1">

### Mixed review {#review}

**Later review (self-written):** Evaluate $\int_0^1 x^2\,dx$ and decide whether $\int_0^\infty f(x)\,dx$ converges for the function below. Also assess $\int_{-2}^2 1/x\,dx$. Justify the type of calculation each requires.

$$f(x)=\begin{cases}
x^{-1/2},&0<x\le1,\\
x^{-2},&x>1.
\end{cases}$$

<details markdown="1"><summary>Hint</summary>

Inspect the domain and the endpoints, not just whether the interval is bounded.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$\begin{aligned}
&\int_0^1x^2\,dx=1/3,\\
&\int_\varepsilon^1x^{-1/2}\,dx\\
&=2(1-\sqrt\varepsilon)\to2,\\
&\int_1^R x^{-2}\,dx=1-1/R\to1.
\end{aligned}$$

The first is ordinary; the piecewise integral has two independently convergent parts and equals 3. The last has an interior singularity: the left cutoff is $\ln\varepsilon-\ln2\to-\infty$ and the right cutoff is $\ln2-\ln\delta\to+\infty$, so it diverges. Symmetry does not define the ordinary integral. Return to [the appropriate cutoff](#model) or [separate limits](#separate-limits) if you linked the two divergent parts.

</details>

</section>

## Where to go next {#next-step}

After an unaided matching retry, continue to [matrix algebra](/alevel/as-further-mathematics/matrix-algebra/). Complete the [rates review](/alevel/as-further-mathematics/rates-and-approximations/#later-review) now, then return for this page's mixed review after the next lesson.

## Sources and scope {#sources}

All demonstrations and exercises here are **self-written**, without official marks. FP1.7 covers simple improper integrals. Power limits and separated singularities explain convergence; numerical cutoffs alone do not establish it.

<details markdown="1"><summary>Official references and specimen identity</summary>

Scope follows 9665 v5.2. The paired questions and mark schemes below informed the required evidence; these exercises do not reproduce their questions or award official marks.

FM01 specimen identity: the QP body says **Specimen 2018 Morning**; its filename contains 2019/v3 and footer versions vary. The officially paired MS is a specimen with copyright 2017, not a live-exam Final MS.

- [OxfordAQA 9665 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf), FP1.7.
- FM01 specimen Q3; QP pp.4–5, MS p.5. [FM01 specimen QP](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9665-FM01-international-as-further-mathematics-specimen-paper-2019-v3-1.pdf) · [Specimen MS](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9665-FM01-international-as-further-mathematics-mark-scheme-2017-v2-1.pdf).

</details>

[Previous](/alevel/as-further-mathematics/rates-and-approximations/) · [Course route](/alevel/as-further-mathematics/#learning-route) · [Next](/alevel/as-further-mathematics/matrix-algebra/)

{% include exam_topic_practice.html %}
