---
title: "From secants to rates and approximations"
layout: subjects
mathjax: true
grade: as
subject: as-further-mathematics
lang: en
permalink: /alevel/as-further-mathematics/rates-and-approximations/
toc_headings: h2, h3
study_page: true
---

[AS Further Mathematics](/alevel/as-further-mathematics/) · A6 · FP1.7

All demonstrations, scaffolded attempts, independent tasks and retries here are **self-written**, with no official marks. Write your method and reasons before opening hints and solutions separately.

## How does a secant become a local model? {#model}

**Start:** expand $(x+h)^2$ and cancel $x^2$. **Goal:** derive a polynomial derivative from a slope limit, relate rates with units and distinguish a small-change estimate from an exact change. You need AS differentiation and geometry. Keep $h\ne0$ while forming the quotient; take the limit afterwards.

$$\frac{(x+h)^2-x^2}{h}=2x+h\quad(h\ne0);\qquad f'(x)=\lim_{h\to0}(2x+h)=2x.$$

![Parabola y=x² with a secant joining x=1 and x=2 and the tangent at x=1; points and different slopes are labelled.](/alevel/as-further-mathematics/diagrams/secant.svg)

The tangent gives a local linear approximation, not the whole curve. If y depends on x and x on time, the chain rule connects the two rates. The sign and units matter.

$$\frac{dy}{dt}=\frac{dy}{dx}\frac{dx}{dt};\qquad \Delta y\approx f'(x)\Delta x.$$

## Demonstration: model before substitution {#demonstration}

**Demonstration (self-written):** A spherical balloon is modelled by $V=4\pi r^3/3$. At $r=2$ cm its volume increases at $12\pi$ cm³ s⁻¹. Find the radius rate.

$$\frac{dV}{dt}=4\pi r^2\frac{dr}{dt}\Rightarrow \frac{dr}{dt}=\frac{12\pi}{16\pi}=\frac34\ \mathrm{cm\,s^{-1}}.$$

The sphere model and differentiable radius are assumptions. Volume rate divided by area has the required length/time unit; a positive volume rate gives a positive radius rate. For $y=20x^{-2}$ from $x=5$ to $5.1$:

$$f'(5)=-0.32,\quad\Delta y\approx-0.032;\qquad \Delta y_{\rm exact}=\frac{20}{5.1^2}-\frac{20}{5^2}=-0.031064975\ldots$$

The estimate uses the old tangent slope across the interval. Its difference from the exact change is about $-0.000935025$; writing an exact equality would hide the approximation.

## Scaffold and independent choice {#practice}

**Scaffold (self-written):** For $f(x)=x^3$, expand the difference quotient and then take its limit. Do not start with a derivative rule.

<details markdown="1"><summary>Scaffold check</summary>

$$\frac{(x+h)^3-x^3}{h}=3x^2+3xh+h^2\longrightarrow3x^2.$$

</details>

**Independent task (self-written):** A square of side s cm has area decreasing at 6 cm² s⁻¹ when $s=3$ cm. Find its perimeter rate. Separately estimate the change in $\sqrt{x}$ from $x=9$ to $9.06$ and compare with the exact change. Explain the sign and approximation.

<details markdown="1"><summary>Hint</summary>

Connect area to side, then side to perimeter. For the square root, use the derivative at the initial x and calculate a separate exact difference.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$A=s^2,\quad \dot A=2s\dot s=-6\Rightarrow\dot s=-1\ \mathrm{cm\,s^{-1}};\qquad P=4s\Rightarrow\dot P=-4\ \mathrm{cm\,s^{-1}}.$$

$$\Delta\sqrt{x}\approx\frac1{2\sqrt9}(0.06)=0.01;\qquad \sqrt{9.06}-3=0.009983388\ldots$$

The perimeter decreases. The positive square-root estimate is slightly too large because its tangent slope decreases as x increases.

</details>

## Diagnose and retry {#retry}

A rate without its variable or units may confuse area with length. A zero denominator obtained by setting $h=0$ too early is not a derivative.

**Retry (self-written):** Use the difference quotient for $f(x)=3x^2-2x$. Estimate its change from $x=1$ to $0.99$.

<details markdown="1"><summary>Retry check</summary>

$$\frac{f(x+h)-f(x)}h=6x+3h-2\longrightarrow6x-2;\qquad\Delta y\approx4(-0.01)=-0.04.$$

</details>

## Sources and scope {#sources}

Scope follows 9665 v5.2. The paired questions and mark schemes below informed the required evidence; these exercises do not reproduce their questions or award official marks.

FM01 specimen identity: the QP body says **Specimen 2018 Morning**; its filename contains 2019/v3 and footer versions vary. The officially paired MS is a specimen with copyright 2017, not a live-exam Final MS.

- [OxfordAQA 9665 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf), FP1.7.
- FM01 specimen Q5; QP pp.7–8, MS p.6. [FM01 specimen QP](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9665-FM01-international-as-further-mathematics-specimen-paper-2019-v3-1.pdf) · [Specimen MS](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9665-FM01-international-as-further-mathematics-mark-scheme-2017-v2-1.pdf).

[Previous](/alevel/as-further-mathematics/series/) · [Course route](/alevel/as-further-mathematics/#learning-route) · [Next](/alevel/as-further-mathematics/improper-integrals/)
