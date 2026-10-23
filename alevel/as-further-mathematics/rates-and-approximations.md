---
title: "From secants to rates and approximations"
layout: subjects
mathjax: true
grade: as
subject: as-further-mathematics
lang: en
permalink: /alevel/as-further-mathematics/rates-and-approximations/
toc_headings: "#start, #model, #demonstration, #connected-rates, #small-changes, #practice, #retry, #later-review, #next-step, #sources"
study_page: true
reading_layout: true
---

[AS Further Mathematics](/alevel/as-further-mathematics/)

A derivative describes a limiting slope, not a finite jump. Rebuild it from two points, then use that local information to connect rates and estimate changes. The [independent tasks](#practice) ask for both the calculation and the conditions making it meaningful.

## Before you start {#start}

You need bracket expansion, straight-line gradients, ordinary AS differentiation and basic geometry. Revisit [AS quadratics](/alevel/as-mathematics/algebra/#l02) for expansion errors. You should finish able to derive a polynomial derivative from its difference quotient, model connected rates with units, and distinguish approximate from exact changes.

<section class="lesson-check" markdown="1">

### Entry check {#entry}

**Entry check (self-written):** Expand $(x+h)^2-x^2$. Give the gradient between $(1,1)$ and $(2,4)$. If a length decreases at 2 cm per second, write its signed rate.

<details markdown="1"><summary>Hint</summary>

A gradient is the change in output divided by the change in input.

</details>

<details markdown="1"><summary>Solution and check</summary>

The expansion is $2xh+h^2$; the gradient is $(4-1)/(2-1)=3$; the rate is $-2\ \mathrm{cm\,s^{-1}}$. If the middle term was lost, multiply the brackets term by term; if the rate is positive, distinguish decrease from speed magnitude.

</details>

</section>

## From a secant to a tangent {#model}

For a curve $y=f(x)$, fix the point $(x,f(x))$ and a second point $(x+h,f(x+h))$. The horizontal separation is $h$, which may be positive or negative but must initially be nonzero. The secant slope is

$$m_h=\frac{f(x+h)-f(x)}h,\qquad h\ne0.$$

If these slopes tend to the same finite value as $h$ approaches zero from either side, that value is the derivative $f\prime(x)$. Simplify while the points are distinct, then take the limit. Setting $h=0$ before cancelling gives an undefined quotient, not the tangent gradient.

<section class="worked-example" markdown="1">

### Rebuild the simplest derivative

**Demonstration (self-written):** Find the derivative of $f(x)=x^2$ from the secant gradient.

$$\begin{aligned}
&f(x+h)-f(x)=(x+h)^2-x^2\\
&=2xh+h^2,\\
&m_h=2x+h\quad(h\ne0),\\
&f\prime(x)=\lim_{h\to0}(2x+h)=2x.
\end{aligned}$$

At $x=1$ the secant with $h=1$ has slope 3, while the tangent slope is 2. A finite chord is not already the tangent; allowing smaller separations makes its slope approach 2. The diagram shows the two different lines.

![Parabola y=x² with a secant joining x=1 and x=2 and the tangent at x=1; points and different slopes are labelled.](/alevel/as-further-mathematics/diagrams/secant.svg){: width="560" height="460" }

</section>

## Expand the actual function before cancelling {#demonstration}

<section class="worked-example" markdown="1">

### A polynomial with several terms

**Demonstration (self-written):** For $f(x)=2x^3-3x+1$, find the secant gradient at input $x$, then use it to find the tangent at input 2. Do not start with a derivative rule.

The subtraction must remove the entire old output. Expand the shifted cubic and the shifted linear term, then collect:

$$\begin{aligned}
&f(x+h)-f(x)
=2[(x+h)^3-x^3]-3h\\
&=2(3x^2h+3xh^2+h^3)-3h,\\
&m_h=6x^2+6xh+2h^2-3,\\
&f\prime(x)=6x^2-3.
\end{aligned}$$

All removed terms were multiples of nonzero $h$; the last line is obtained only after taking its limit. At input 2, the secant slope is $21+12h+2h^2$, which tends to 21; the point is $(2,11)$. Thus the tangent is $y-11=21(x-2)$. It passes through the old point and has the derived gradient. A derivative-rule calculation may check this answer after the limit argument, but cannot replace that argument.

</section>

<section class="lesson-check" markdown="1">

### Complete a new quotient {#scaffold}

**Scaffold (self-written):** For $f(x)=x^3$, expand the difference quotient and then take its limit. Do not start with a derivative rule.

<details markdown="1"><summary>Hint</summary>

Expand $(x+h)^3$ before subtracting $x^3$.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$\begin{aligned}
&\frac{(x+h)^3-x^3}{h}\\
&=3x^2+3xh+h^2,\\
&f\prime(x)\\
&=\lim_{h\to0}(3x^2+3xh+h^2)\\
&=3x^2.
\end{aligned}$$

The first equality requires $h\ne0$; the limit exists for every real input.

</details>

</section>

## Connected rates: choose the changing quantities {#connected-rates}

If $y=f(x)$ and $x$ changes with time, a small time change first changes the input and then the output. When these functions are differentiable, the chain rule connects the instantaneous rates:

$$\frac{dy}{dt}=\frac{dy}{dx}\frac{dx}{dt}.$$

Choose a geometric or given functional relation before differentiating; do not substitute the current size as if it were constant. Name each rate, preserve increase/decrease signs and check units.

<section class="worked-example" markdown="1">

### Recover a radius rate

**Demonstration (self-written):** A spherical balloon is modelled by $V=4\pi r^3/3$. At $r=2$ cm its volume increases at $12\pi$ cm³ s⁻¹. Find the radius rate.

Assume the balloon remains spherical and its radius is differentiable. Differentiate the relation before using the instant-specific radius:

$$\begin{aligned}
&\frac{dV}{dr}=4\pi r^2,\\
&\frac{dV}{dt}=4\pi r^2\frac{dr}{dt},\\
&\frac{dr}{dt}=\frac{12\pi}{16\pi}\\
&=\frac34\ \mathrm{cm\,s^{-1}}.
\end{aligned}$$

Volume per time divided by area gives length per time, and increasing volume gives increasing radius. These checks confirm the interpretation, not only the arithmetic.

</section>

## Small changes use the old local slope {#small-changes}

Differentiability means that for small $\Delta x$ the exact output change equals a linear part plus a remainder whose ratio to $\Delta x$ tends to zero. We use the linear part as an estimate:

$$\begin{aligned}
&\Delta y\approx f\prime(x)\Delta x,\\
&f(x+\Delta x)\\
&\approx f(x)+f\prime(x)\Delta x.
\end{aligned}$$

The first is a change; the second is the new value. The derivative is evaluated at the initial input. There is no universal percentage-change threshold guaranteeing a requested accuracy; compare with an exact change when available and respect the function domain.

<section class="worked-example" markdown="1">

### Compare the estimate with the exact change

**Demonstration (self-written):** For $y=20x^{-2}$, estimate the change from $x=5$ to $5.1$ and compare with the exact change.

$$\begin{aligned}
&f\prime(x)=-40x^{-3},\\
&f\prime(5)=-0.32,\quad\Delta x=0.1,\\
&\Delta y_{\rm lin}=-0.032,\\
&\Delta y_{\rm exact}=\frac{20}{5.1^2}-\frac{20}{5^2}\\
&=-0.031064975\ldots,\\
&\Delta y_{\rm lin}-\Delta y_{\rm exact}
=-0.000935025\ldots.
\end{aligned}$$

The derivative is negative, so a positive input change decreases the output. As the positive input grows, the slope becomes less negative, whereas the estimate keeps the old slope. It therefore predicts too large a decrease. The estimated new value is $0.768$, not $-0.032$. Here $\Delta y_{\rm lin}$ names the computed linear term exactly; it is the approximation to the actual change.

</section>

## Work independently {#practice}

Write the relation and reasoning before using a formula. Keep hints closed for an independent attempt.

<section class="lesson-check" markdown="1">

### Question 1 {#practice-1}

**Independent task (self-written):** For $f(x)=x^3-2x^2+4$, derive its derivative from the difference quotient for a general input. Use that quotient to obtain the tangent at input 2. Explain why setting the increment to zero at the start is invalid.

<details markdown="1"><summary>Hint</summary>

Subtract the whole original polynomial and collect powers of the nonzero increment.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$\begin{aligned}
&f(x+h)-f(x)
=3x^2h+3xh^2+h^3\\
&\quad-4xh-2h^2,\\
&\frac{f(x+h)-f(x)}h
=3x^2-4x\\
&\quad+(3x-2)h+h^2,\\
&f\prime(x)=3x^2-4x,\\
&f(2)=4,\\
&f\prime(2)=4,\\
&y-4=4(x-2).
\end{aligned}$$

The quotient is valid only for $h\ne0$. Taking its limit gives the stated derivative for every real input. Direct substitution of zero into the original quotient gives $0/0$, not a slope. If the square term is mishandled, return to [expansion](#demonstration), then retry 1.

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 2 {#practice-2}

**Independent task (self-written):** A square of side s cm has area decreasing at 6 cm² s⁻¹ when $s=3$ cm. Find its perimeter rate. Separately estimate the change in $\sqrt{x}$ from $x=9$ to $9.06$ and compare with the exact change. Explain the sign and approximation.

<details markdown="1"><summary>Hint</summary>

Connect area to side and side to perimeter. Use the initial slope for the other change.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$\begin{aligned}
&A=s^2,\\
&P=4s,\\
&-6=2(3)\frac{ds}{dt},\\
&\frac{ds}{dt}=-1\ \mathrm{cm\,s^{-1}},\\
&\frac{dP}{dt}=4\frac{ds}{dt}\\
&=-4\ \mathrm{cm\,s^{-1}}.\\[2pt]
&\Delta y_{\rm lin}=\frac{0.06}{2\sqrt9}\\
&=0.01,\\
&\Delta y_{\rm exact}=\sqrt{9.06}-3\\
&=0.009983388\ldots.
\end{aligned}$$

The perimeter decreases. The square-root estimate is positive and slightly too large because its slope decreases as the input increases. The new value is estimated as $3.01$. If units or variables are confused, revisit [connected rates](#connected-rates), then retry 2.

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 3 {#practice-3}

**Independent task (self-written):** A cone remains similar to itself with $h=2r$ and $V=\pi r^2h/3$. At $r=3$ cm the radius decreases at $0.05$ cm s⁻¹. Find the height and volume rates and estimate the volume change over the next 2 s. State whether the data determine the exact change. If the radius rate remains constant over those 2 s, calculate the exact change and compare.

<details markdown="1"><summary>Hint</summary>

Eliminate a geometric variable before differentiating; distinguish an instantaneous rate from a constant rate.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$\begin{aligned}
&h=2r,\\
&V=\frac23\pi r^3,\\
&\frac{dh}{dt}=2(-0.05)\\
&=-0.1\ \mathrm{cm\,s^{-1}},\\
&\frac{dV}{dt}=2\pi(3)^2(-0.05)\\
&=-0.9\pi\ \mathrm{cm^3\,s^{-1}},\\
&\Delta V_{\rm lin}=(-0.9\pi)(2)\\
&=-1.8\pi\ \mathrm{cm^3}.
\end{aligned}$$

The instantaneous data do not determine the exact future volume. With the extra constant-rate assumption, the new radius is $2.9$ cm. Its exact volume change is:

$$\begin{aligned}
&\Delta V_{\rm exact}\\
&=\frac{2\pi}{3}(2.9^3-3^3)\\
&=-\frac{2611}{1500}\pi\ \mathrm{cm^3}\\
&\approx-1.740667\pi\ \mathrm{cm^3}.
\end{aligned}$$

The estimate predicts a larger decrease. If you treated height as constant, revisit [model selection](#connected-rates).

</details>

</section>

## Diagnose and retry {#retry}

For an undefined quotient revisit [the nonzero separation](#model), then retry 1. For a missing chain factor or wrong units revisit [connected rates](#connected-rates), then retry 2. For an exact-equality claim about a finite change revisit [local approximation](#small-changes), then compare exact and estimated changes in either retry.

<section class="lesson-check" markdown="1">

### Retry 1 {#retry-1}

**Retry (self-written):** Use the difference quotient for $f(x)=3x^2-2x$. Estimate its change from $x=1$ to $0.99$.

<details markdown="1"><summary>Hint</summary>

Keep $h\ne0$ until simplification; the input change is negative.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$\begin{aligned}
&\frac{f(x+h)-f(x)}h\\
&=6x+3h-2,\\
&f\prime(x)=6x-2,\\
&\Delta y_{\rm lin}=4(-0.01)=-0.04.
\end{aligned}$$

The derivative follows by taking the limit. The exact change is $-0.0397$, so the linear term is an approximation, not equality with the true change.

</details>

</section>

<section class="lesson-check" markdown="1">

### Retry 2 {#retry-2}

**Retry (self-written):** A circle has circumference increasing at $2\pi$ cm s⁻¹ when its radius is 4 cm. Find its area rate and estimate the area increase over 0.1 s. Would a constant circumference rate make this estimate exact?

<details markdown="1"><summary>Hint</summary>

Relate circumference to radius, then area to radius.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$\begin{aligned}
&C=2\pi r,\\
&A=\pi r^2,\\
&\frac{dr}{dt}=1\ \mathrm{cm\,s^{-1}},\\
&\frac{dA}{dt}=8\pi\ \mathrm{cm^2\,s^{-1}},\\
&\Delta A_{\rm lin}=0.8\pi\ \mathrm{cm^2}.
\end{aligned}$$

If the circumference rate stays constant, the radius becomes $4.1$ cm and the exact change is $0.81\pi\ \mathrm{cm^2}$. A constant radius rate does not make the quadratic area change linear.

</details>

</section>

## Return after the next lesson {#later-review}

<section class="lesson-check" markdown="1">

### Mixed review {#review}

**Later review (self-written):** For $f(x)=x^2-3x$, obtain the tangent gradient at input 2 using two points separated by a nonzero increment. Estimate the change in the output when the input falls from 2 to 1.98, and compare with the exact change. If instead the input is increasing at $0.4$ units per second at input 2, find the instantaneous output rate.

<details markdown="1"><summary>Hint</summary>

Decide which question needs a limit, which needs a finite-change estimate and which needs time.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$\begin{aligned}
&\frac{f(2+h)-f(2)}h\\
&=1+h\longrightarrow1,\\
&\Delta y_{\rm lin}=1(-0.02)=-0.02,\\
&\Delta y_{\rm exact}=-0.0196,\\
&\frac{dy}{dt}=1(0.4)=0.4.
\end{aligned}$$

The last rate has output units per second. The exact change differs by a squared-increment term. Return to the corresponding concept above before retrying if you mixed a rate and a change.

</details>

</section>

## Where to go next {#next-step}

After an unaided matching retry, continue to [improper integrals](/alevel/as-further-mathematics/improper-integrals/). Complete the [series review](/alevel/as-further-mathematics/series/#later-review) now; return here after the next lesson.

## Sources and scope {#sources}

All demonstrations and exercises here are **self-written**, without official marks. FP1.7 covers chord-to-tangent limits for simple polynomials, connected rates and small changes. All geometric scenarios state their model assumptions.

<details markdown="1"><summary>Official references and specimen identity</summary>

Scope follows 9665 v5.2. The paired questions and mark schemes below informed the required evidence; these exercises do not reproduce their questions or award official marks.

FM01 specimen identity: the QP body says **Specimen 2018 Morning**; its filename contains 2019/v3 and footer versions vary. The officially paired MS is a specimen with copyright 2017, not a live-exam Final MS.

- [OxfordAQA 9665 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf), FP1.7.
- FM01 specimen Q5; QP pp.7–8, MS p.6. [FM01 specimen QP](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9665-FM01-international-as-further-mathematics-specimen-paper-2019-v3-1.pdf) · [Specimen MS](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9665-FM01-international-as-further-mathematics-mark-scheme-2017-v2-1.pdf).

</details>

[Previous](/alevel/as-further-mathematics/series/) · [Course route](/alevel/as-further-mathematics/#learning-route) · [Next](/alevel/as-further-mathematics/improper-integrals/)
