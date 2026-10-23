---
title: "Numerical roots with traceable updates"
layout: subjects
mathjax: true
grade: as
subject: as-further-mathematics
lang: en
permalink: /alevel/as-further-mathematics/numerical-roots/
toc_headings: "#start, #model, #demonstration, #chord, #tangent, #practice, #retry, #later-review, #next-step, #sources"
study_page: true
reading_layout: true
---

[AS Further Mathematics](/alevel/as-further-mathematics/)

A decimal estimate and a guaranteed interval answer different questions. Start from the given interval, record each decision, then compare midpoint, chord and tangent updates. You should be able to choose a method and explain exactly what its result certifies.

## Before you start {#start}

You need function substitution, straight-line equations and polynomial derivatives. For tangent gradients revisit [rates and approximations](/alevel/as-further-mathematics/rates-and-approximations/). All tasks are **self-written**, without official marks. Show the updates before opening help; solver output cannot replace a requested method.

## What a sign change establishes {#model}

If f is continuous on a closed interval and its endpoint values have opposite signs, it must cross zero inside. If an endpoint is exactly zero, the root is already found. A sign change alone does not prove uniqueness; equal endpoint signs do not rule out roots. For the running example, evaluate the original endpoints first:

$$\begin{aligned}f(x)&=x^3-x-1,\\f(1)&=-1,\qquad f(2)=5.\end{aligned}$$

A polynomial is continuous everywhere. Here its derivative is positive throughout [1,2], so it is strictly increasing and the bracket contains exactly one root. This is a separate uniqueness argument:

$$f'(x)=3x^2-1\ge2>0\quad(1\le x\le2).$$

## Build every retained interval {#demonstration}

<section class="worked-example" markdown="1">

### Bisection from the stated endpoints

At each step test c=(a+b)/2. If f(c)=0, stop; otherwise retain the half with opposite endpoint signs. The next midpoint must come from that retained half, not from an unrelated decimal estimate.

| Step | Tested c | f(c) | Retained bracket |
| --- | --- | --- | --- |
| 1 | 1.5 | 0.875 | [1,1.5] |
| 2 | 1.25 | −0.296875 | [1.25,1.5] |
| 3 | 1.375 | 0.224609375 | [1.25,1.375] |
| 4 | 1.3125 | −0.051513671875 | [1.3125,1.375] |
| 5 | 1.34375 | 0.082611083984375 | [1.3125,1.34375] |

The first midpoint has positive f, matching the original right endpoint, so replace the right endpoint by 1.5. The second has negative f, so replace the left endpoint by 1.25. Continue these same decisions through the table; the signs at the retained endpoints stay opposite.

After five halvings the bracket midpoint is 1.328125, not the last tested value 1.34375. The midpoint can be used as an estimate without evaluating f there; the containing interval already gives its error bound.

</section>

### Derive the error guarantee {#error-bound}

Each halving divides the width by two. After n halvings from width W, a root remains in an interval of width W/2ⁿ. Its distance from that interval’s midpoint is at most half the width:

$$\begin{aligned}
b_n-a_n&=\frac{W}{2^n},\\
\hat x_n&=\frac{a_n+b_n}{2},\\
\lvert\hat x_n-x_*\rvert&\le\frac{W}{2^{n+1}}.
\end{aligned}$$

Here W=1, so five halvings give midpoint error at most 0.015625. For error at most 0.001, eight halvings give 1/512≈0.001953125, which is too large; nine give 1/1024≈0.0009765625. The bound refers to the retained-interval midpoint. If you instead report an endpoint or round the estimate, account for that extra distance. Reliable signs and working precision matter.

## Replace the curve locally by a chord {#chord}

The straight chord through the two endpoint values has a known slope. Set its height equal to zero to find its axis crossing:

$$\begin{aligned}
s&=\frac{f(b)-f(a)}{b-a},\\
0&=f(a)+s(c-a),\\
c&=a-\frac{f(a)(b-a)}{f(b)-f(a)}.
\end{aligned}$$

This is linear interpolation, requiring distinct endpoints and a nonzero difference of endpoint function values. With opposite signs the chord crossing lies between the endpoints; evaluate f(c) before retaining a new bracket. It need not cut the width in half.

<section class="worked-example" markdown="1">

### An interpolation step and its successor

For the same original bracket [1,2],

$$c=1-\frac{(-1)(2-1)}{5-(-1)}=\frac76.$$

Evaluate, rather than assume, the sign:

$$f(7/6)=-125/216<0.$$

The new bracket is [7/6,2]. A second chord using these updated endpoints gives

$$c_2=\frac{302}{241}\approx1.253112033.$$

It is neither a midpoint nor the exact root. The first negative endpoint moved right, but much less than a halving; the bisection bound does not apply.

</section>

## Use a tangent when a derivative is available {#tangent}

At a current guess xₙ, the tangent uses the derivative at that same point. Set its height to zero; unlike a chord this needs one point and a derivative:

$$\begin{aligned}
0&=f(x_n)+f'(x_n)(x_{n+1}-x_n),\\
x_{n+1}&=x_n-\frac{f(x_n)}{f'(x_n)}.
\end{aligned}$$

<section class="worked-example" markdown="1">

### Two Newton updates

With x₀=1.5, the current height is 0.875 and slope 5.75:

$$x_1=1.5-\frac{0.875}{5.75}=\frac{31}{23}.$$

Use x₁, not x₀, in both parts of the next correction:

$$\begin{aligned}
x_1&\approx1.34782608695652,\\
x_2&=x_1-\frac{x_1^3-x_1-1}{3x_1^2-1}\\
&=\frac{71749}{54142}\\
&\approx1.32520039895091.
\end{aligned}$$

The derivative must be nonzero at each step. Newton can leave the original interval, fail at a horizontal tangent or cycle. Close successive guesses do not by themselves bound the true root error; neither displayed digits nor this calculation inherits the bisection guarantee.

</section>

![For f(x)=x³−x−1, the endpoint chord crosses at 7/6 and the tangent at x=1.5 crosses near 1.348; axes and bracket endpoints are labelled.](/alevel/as-further-mathematics/diagrams/numerical.svg){: width="560" height="490" }

Read the two intersections as the output of two different straight lines, not as points on the curve. Bisection instead chooses a vertical test position halfway between the current endpoints.

<section class="lesson-check" markdown="1">

#### Pause 1 {#scaffold}

**Scaffold (self-written):** For $x^2-2$ on $[1,2]$, test the midpoint and retain a bracket. Calculate one Newton update from $x_0=1.5$.

<details markdown="1"><summary>Hint</summary>

Keep the sign-changing half; the Newton correction uses the derivative at the same old point.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$f(1.5)=0.25,\qquad [1,1.5].$$

$$x_1=1.5-\frac{0.25}{3}=\frac{17}{12}.$$

The bracket is certified by signs and continuity; the tangent estimate needs a separate error justification. If these outputs were confused, compare [interval width](#error-bound) with [the tangent construction](#tangent).

</details>

</section>

## Work independently {#practice}

<section class="lesson-check" markdown="1">

#### Question 1 {#practice-1}

**Independent task (self-written):** Assess “$1/x$ changes sign on $[-1,1]$, so it has a root there.” For $x^2-3$ on $[1,2]$, find an estimate with guaranteed absolute error no greater than $1/16$, showing every retained interval. Also find the chord estimate from the original endpoints.

<details markdown="1"><summary>Hint</summary>

Check continuity first. Choose a method with a width guarantee, and show every endpoint update.

</details>

<details markdown="1"><summary>Solution and check</summary>

The first claim fails: 1/x is undefined at zero and has no zero. For the second function, continuity and its positive derivative on [1,2] establish a unique root.

| Tested c | f(c) | Retained bracket |
| --- | --- | --- |
| 1.5 | −0.75 | [1.5,2] |
| 1.75 | 0.0625 | [1.5,1.75] |
| 1.625 | −0.359375 | [1.625,1.75] |

$$\begin{aligned}\hat x&=1.6875,\\\lvert\hat x-x_*\rvert&\le\frac1{16}.\end{aligned}$$

The chord from the original endpoints gives

$$c_{\text{chord}}=1-\frac{(-2)(1)}{1-(-2)}=\frac53.$$

It has no such midpoint guarantee. If you jumped directly to the last interval, rebuild its preceding signs using [retry 1](#retry-bracket).

</details>

</section>

<section class="lesson-check" markdown="1">

#### Question 2 {#practice-2}

**Independent task (self-written):** For $g(x)=x^3-2$ on [1,2], calculate a chord estimate from the endpoints and two Newton updates starting at 1. Sketch the curve with the chord and first tangent, labelling their axis crossings. Retain a valid bracket after the chord step and explain whether either procedure has halved it. Would Newton be defined at a starting value of zero?

<details markdown="1"><summary>Hint</summary>

Derive each line from the points or slope it actually uses, then evaluate the sign of g at the chord crossing.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$\begin{aligned}c&=1-\frac{(-1)(1)}{6-(-1)}=\frac87,\\g(c)&=-\frac{174}{343}<0.\end{aligned}$$

The chord bracket is [8/7,2], of width 6/7, not half the original width.

$$\begin{aligned}x_1&=1-\frac{-1}{3}=\frac43,\\x_2&=\frac43-\frac{10/27}{16/3}\\&=\frac{91}{72}.\end{aligned}$$

Your sketch must show the chord through (1,−1),(2,6), crossing at 8/7, and the tangent through (1,−1) of slope 3, crossing at 4/3. Newton updates alone retain no sign-changing bracket. At zero its derivative vanishes, so the update is undefined. Wrong line or a mixed chord/derivative denominator: return to [chord](#chord) or [tangent](#tangent), then [retry 3](#retry-chord). For a missed zero derivative, use [retry 2](#retry-tangent).

</details>

</section>

<section class="lesson-check" markdown="1">

#### Question 3 {#practice-3}

**Independent task (self-written):** For $p(x)=x^2-2$ on [1,2], produce an estimate guaranteed within 1/8 of a root. Show your chosen method and complete update chain. Does $q(x)=x^2-1$ have no roots on [-2,2] because its endpoint values have the same sign?

<details markdown="1"><summary>Hint</summary>

Choose the method from the requested evidence, not from which formula is shortest.

</details>

<details markdown="1"><summary>Solution and check</summary>

The first midpoint 1.5 has value 1/4, retaining [1,1.5]. The next midpoint 1.25 has value −7/16, retaining [1.25,1.5]. Its midpoint 1.375 has error at most 1/8 by continuity and half-width.

The second claim is false: q has roots −1 and 1 although both endpoint values are 3. Opposite signs are sufficient under continuity, not necessary. If you treated a sufficient test as necessary, revisit [the existence statement](#model).

</details>

</section>

## Diagnose and retry {#retry}

Missing signs: rebuild from the original endpoints. Wrong bound: distinguish the last tested c from the retained-interval midpoint. Zero Newton denominator: check the derivative before adding digits.

<section class="lesson-check" markdown="1">

#### Retry 1 {#retry-bracket}

**Retry (self-written):** For $x^2-5$ on [2,3], perform three halvings and report the retained interval, its midpoint and a guaranteed midpoint error. Show every sign and endpoint update.

<details markdown="1"><summary>Hint</summary>

Start with the actual endpoint values and halve only the bracket you just retained.

</details>

<details markdown="1"><summary>Solution and check</summary>

The endpoint values are −1 and 4.

| Tested c | f(c) | Retained bracket |
| --- | --- | --- |
| 2.5 | 1.25 | [2,2.5] |
| 2.25 | 0.0625 | [2,2.25] |
| 2.125 | −0.484375 | [2.125,2.25] |

The midpoint is 2.1875 and its guaranteed error is at most 0.0625. The last tested value is the lower endpoint, so it cannot be substituted into the midpoint bound.

</details>

</section>

<section class="lesson-check" markdown="1">

#### Retry 2 {#retry-tangent}

**Retry (self-written):** Is Newton defined for $f(x)=x^3-1$ at $x_0=0$? Give a valid initial bracket instead.

<details markdown="1"><summary>Hint</summary>

Check the derivative first, then evaluate the proposed bracket endpoints.

</details>

<details markdown="1"><summary>Solution and check</summary>

No: $f'(0)=0$. The polynomial is continuous and f(0)=−1, f(2)=7, so [0,2] is a valid bracket. Its midpoint is exactly the root 1. A different valid bracket also counts if you justify continuity and its endpoint signs.

</details>

</section>

<section class="lesson-check" markdown="1">

#### Retry 3 {#retry-chord}

**Retry (self-written):** For $x^2-2$ on [1,2], find the chord axis crossing, use its sign to update the bracket, and compare it with one tangent update from x=2. Draw both lines on a curve sketch.

<details markdown="1"><summary>Hint</summary>

Use the chord’s two endpoint heights; use only the tangent point for its derivative.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$c=\frac43,\qquad f(c)=-\frac29.$$

The retained bracket is [4/3,2]. Its width is 2/3, not 1/2. The tangent at (2,2), of slope 4, crosses at

$$x_1=2-\frac24=\frac32.$$

Label 4/3 and 3/2 on the sketch. A chord formula using the derivative has mixed the two constructions; revisit [the chord equation](#chord).

</details>

</section>

## Review after Euler {#later-review}

<section class="lesson-check" markdown="1">

#### Review 1 {#review-1}

**Later review (self-written):** For $r(x)=x^2-6$ on [2,3], find an estimate with guaranteed error at most 1/16, recording every retained interval. Then calculate one tangent update from x=3 and explain why its number of displayed decimals does not supply the same guarantee.

<details markdown="1"><summary>Hint</summary>

Choose how to obtain the guarantee; keep the independent tangent calculation separate.

</details>

<details markdown="1"><summary>Solution and check</summary>

| Tested c | r(c) | Retained bracket |
| --- | --- | --- |
| 2.5 | 0.25 | [2,2.5] |
| 2.25 | −0.9375 | [2.25,2.5] |
| 2.375 | −0.359375 | [2.375,2.5] |

Continuity and endpoint signs certify midpoint 2.4375 with error at most 1/16.

$$x_1=3-\frac36=2.5.$$

The tangent output alone supplies no containing interval of certified half-width. It happens to equal the first midpoint, but that coincidence does not transfer later bisection evidence. For a missing guarantee revisit [the width argument](#error-bound).

</details>

</section>

## Where to go next {#next-step}

Continue to [Euler’s method](/alevel/as-further-mathematics/euler-method/) when your chains and guarantees agree. Complete [the linearisation review](/alevel/as-further-mathematics/linearisation/#later-review) now and return here after Euler for [the mixed check](#later-review).

## Sources and scope {#sources}

Scope follows 9665 v5.2. The paired questions and mark schemes below informed the required evidence; these exercises do not reproduce their questions or award official marks.

<details markdown="1"><summary>Official references</summary>

- [OxfordAQA 9665 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf), FPP1.3.
- FM02 June 2024 Q3; QP p.6, MS p.6. [FM02 June 2024 QP](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-question-paper.pdf) · [Final MS](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-mark-scheme.pdf).

</details>

[Previous](/alevel/as-further-mathematics/linearisation/) · [Course route](/alevel/as-further-mathematics/#learning-route) · [Next](/alevel/as-further-mathematics/euler-method/)
