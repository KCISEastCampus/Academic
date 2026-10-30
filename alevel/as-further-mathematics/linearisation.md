---
title: "Linearisation, plotting and fitting"
layout: subjects
mathjax: true
grade: as
subject: as-further-mathematics
lang: en
permalink: /alevel/as-further-mathematics/linearisation/
toc_headings: "#start, #model, #demonstration, #practice, #retry, #later-review, #next-step, #sources"
study_page: true
reading_layout: true
---

[AS Further Mathematics](/alevel/as-further-mathematics/)

A straight line is useful only when you know what its axes mean. Learn to choose transformed variables, plot every data point, fit the trend and return to the original constants. Your evidence includes your own labelled graph, not just calculated constants.

## Before you start {#start}

You need gradient and intercept in $Y=mX+c$, powers and common logarithms. For logarithm rules revisit [AS logarithms](/alevel/as-mathematics/exponentials-logarithms/). All tasks and data here are **self-written / constructed**, not measurements; no official marks apply. Attempt questions before opening help.

## Choose quantities that obey a linear law {#model}

Begin with the proposed relationship, rearrange it and name the horizontal quantity X and vertical quantity Y. “Y against X” means Y on the vertical axis. A logarithm requires a positive argument. For dimensional readings, take logs of their numerical values in the stated units, not of an unspecified dimensional quantity.

For a positive power model, the logarithm rules turn the exponent into a gradient and the multiplicative constant into a logarithmic intercept:

$$\begin{aligned}
y&=kx^n\quad(x,y,k>0),\\
Y&=\log_{10}y,\quad X=\log_{10}x,\\
Y&=nX+\log_{10}k.
\end{aligned}$$

For an exponential model only y needs a logarithm. Its gradient is a logarithm of a, not a itself:

$$\begin{aligned}
y&=ka^x\quad(y,k,a>0),\\
Y&=\log_{10}y,\quad X=x,\\
Y&=X\log_{10}a+\log_{10}k.
\end{aligned}$$

Logarithms are not always the useful change. Choose the pair which already appears linearly in the equation:

$$\begin{aligned}
\frac1y&=a+\frac bx\quad(xy\ne0),\\
X&=1/x,\quad Y=1/y,\\
Y&=a+bX.
\end{aligned}$$

$$\begin{aligned}
y^2&=ax^3+b,\\
X&=x^3,\quad Y=y^2,\\
Y&=aX+b.
\end{aligned}$$

A transformation can lose restrictions or signs. Taking reciprocals excludes zero; undoing a square can have two real branches or none. Keep these conditions when returning to the original variables.

## Plot before estimating constants {#demonstration}

<section class="worked-example" markdown="1">

### A complete power-law fit

These dimensionless data were **constructed** to satisfy a power law exactly. They are not measurements or experimental validation.

| x | 1 | 2 | 3 | 4 | 5 |
| --- | --- | --- | --- | --- | --- |
| y | 2.5 | 10 | 22.5 | 40 | 62.5 |
| $X=\log_{10}x$ | 0 | 0.30103 | 0.47712 | 0.60206 | 0.69897 |
| $Y=\log_{10}y$ | 0.39794 | 1 | 1.35218 | 1.60206 | 1.79588 |

All original values are positive, so the logs exist. Use linear scales on these transformed axes. Plot all five pairs, then draw one line through the pattern, extending it to X=0 to read the intercept.

![All five constructed log10 x, log10 y points plotted on labelled axes with the fitted line Y=2X+0.39794 and grid scales.](/alevel/as-further-mathematics/diagrams/linearisation.svg){: width="560" height="472" }

Choose two widely separated positions on the fitted line, not necessarily two original data points. Here (0,0.39794) and (0.6,1.59794) give

$$m=\frac{1.59794-0.39794}{0.6-0}=2.$$

The gradient is n, but the intercept is a logarithm:

$$n=2,\qquad k=10^{0.39794}\approx2.5.$$

Thus $y=2.5x^2$. At x=3 this predicts 22.5, and all five original pairs agree. Small differences in the printed transformed table come from rounded logs, not measured scatter.

</section>

### Read and check a fitted line {#reading-a-fit}

For scattered points, draw a balanced line through the overall trend, with points on both sides where possible; do not join consecutive dots or force the line through the origin unless the model requires it. A large gradient triangle reduces the effect of reading uncertainty. State estimates to a precision justified by the grid and compare predictions in the original variables. A good fit supports a relationship for those data, not a causal or universal physical law.

<section class="lesson-check" markdown="1">

#### Pause 1 {#scaffold}

**Scaffold (self-written):** A plot of $\log_{10}y$ against x is $Y=0.3x+0.7$. Express y in the form $ka^x$ and state the necessary positivity conditions.

<details markdown="1"><summary>Hint</summary>

Undo the logarithm of the whole right side and split its sum into a product.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$y=10^{0.7}(10^{0.3})^x.$$

$$k=10^{0.7},\qquad a=10^{0.3},\qquad y>0.$$

The constants k and a are positive because they are powers of ten. The gradient 0.3 is not a; the intercept 0.7 is not k. If either was copied directly, return to [the exponential law](#model).

</details>

</section>

## Make and keep your own graphs {#practice}

For every plotting task, hand in your transformed table, labelled axes and scales, every plotted point, one fitted line, and a wide gradient triangle with its two line coordinates. Then show the return to the original model and one substitution check. Constants alone do not count as plot evidence. If you use a hint, record that help.

Use a separate copy of this blank grid for each graph: print this grid with the page, or reproduce it on squared paper. It has 24 horizontal divisions and 20 vertical divisions; choose and label sensible linear scales so your points fill most of it. It contains no plotted answers.

<svg xmlns="http://www.w3.org/2000/svg" width="560" height="470" style="display:block;max-width:100%;height:auto" viewBox="0 0 560 470" role="img" aria-labelledby="blank-grid-title blank-grid-desc">
<title id="blank-grid-title">Blank plotting grid</title>
<desc id="blank-grid-desc">Twenty-four horizontal divisions and twenty vertical divisions, with empty margins for student-selected axis labels and scales. No data or fitted line is shown.</desc>
<defs><pattern id="blank-grid-pattern" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M20 0H0V20" fill="none" stroke="#b7c4d4" stroke-width="1"/></pattern></defs>
<rect width="560" height="470" fill="white"/>
<rect x="60" y="20" width="480" height="400" fill="url(#blank-grid-pattern)" stroke="#344054"/>
<path d="M60 20V420H540" fill="none" stroke="#172b4d" stroke-width="2"/>
<text x="300" y="462" text-anchor="middle" fill="#172b4d" font-size="18">Horizontal quantity and scale: __________</text>
<text x="20" y="220" text-anchor="middle" transform="rotate(-90 20 220)" fill="#172b4d" font-size="18">Vertical quantity and scale: __________</text>
</svg>

On a small screen, use the printed grid or squared paper and keep the data table beside it.

<section class="lesson-check" markdown="1">

#### Question 1 {#practice-1}

**Independent task (self-written):** The following dimensionless data are constructed: $(x,y)=(1,1/5),(2,2/7),(3,1/3),(6,2/5)$. Test a model $1/y=a+b/x$ by choosing axes and plotting all four points; read off a and b, then predict y at $x=4$. State a value of x at which the model is undefined and explain why a numerical fit does not prove a physical law.

<details markdown="1"><summary>Hint</summary>

Make a transformed table with axis labels. Return to y after reading the line; check both the reciprocal restrictions and the recovered denominator.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$\begin{aligned}
X=1/x:&\quad1,\ 1/2,\ 1/3,\ 1/6,\\
Y=1/y:&\quad5,\ 7/2,\ 3,\ 5/2.
\end{aligned}$$

A useful scale is X from 0 to 1.2, Y from 0 to 6. Plot the four pairs, not the original (x,y) pairs. They lie on Y=2+3X; a triangle between (0,2) and (1,5) gives gradient 3. Thus a=2, b=3.

$$\begin{aligned}y&=\frac{x}{2x+3},\\y(4)&=\frac4{11}.\end{aligned}$$

The original reciprocal law requires $x\ne0,y\ne0$; the recovered denominator also excludes $x=-3/2$. Do not silently extend the original law to x=0. Check (2,2/7) in the original relation. Your own graph must show all four points close to this line at your chosen scale; algebra alone is not that evidence. Agreement with constructed data is not evidence from nature. Wrong axes or points: revisit [choosing quantities](#model), then [retry 1](#retry-plot).

</details>

</section>

<section class="lesson-check" markdown="1">

#### Question 2 {#practice-2}

**Independent task (self-written):** The constructed dimensionless pairs are $(1,3),(4,6),(9,9),(16,12)$. Investigate the proposed model $y=kx^n$ by choosing axes, plotting every transformed pair and fitting a line. Estimate k and n from your graph, predict y at x=25 and state the domain used. Keep your table, graph and gradient triangle.

<details markdown="1"><summary>Hint</summary>

Derive the linear law before deciding what the slope and intercept mean.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$\begin{array}{rrr}
x&X&Y\\
1&0&0.47712\\
4&0.60206&0.77815\\
9&0.95424&0.95424\\
16&1.20412&1.07918
\end{array}$$

Here X and Y are common logs of x and y. On your graph, the fitted line should be close to

$$Y=0.5X+0.47712.$$

For example, line positions (0,0.47712) and (1.2,1.07712) give gradient 0.5. Hence n≈0.5 and k≈3; at x=25, y≈15, on the positive domain. Check x=9 gives y=9. For a hand graph, n between 0.48 and 0.52 and k between 2.9 and 3.1 are useful self-check ranges, not official tolerances: justify different estimates from your actual line. If k was 0.47712, revisit [undoing the logarithm](#demonstration), then [retry 2](#retry-exponential).

</details>

</section>

## Repair and draw again {#retry}

A swapped axis changes gradient meaning. A logarithmic intercept must be exponentiated. A lost sign after squaring needs a branch check. Choose the matching retry and close previous answers.

<section class="lesson-check" markdown="1">

#### Retry 1 {#retry-plot}

**Retry (self-written):** For the constructed pairs $(x,y)=(1,1/6),(2,1/4),(4,1/3)$, test $1/y=a+b/x$ using a new labelled graph and a wide gradient triangle. Find a, b and y at x=8, and state excluded x-values.

<details markdown="1"><summary>Hint</summary>

Transform every pair before plotting; keep the original reciprocal restriction after rearranging.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$\begin{aligned}X:&\quad1,\ 1/2,\ 1/4,\\Y:&\quad6,\ 4,\ 3.\end{aligned}$$

A line through (0,2) and (1,6) gives a=2, b=4.

$$y=\frac{x}{2x+4},\qquad y(8)=\frac25.$$

Exclude x=0 and x=−2. Check all three points on your new graph. If you get slope 1/4, you probably exchanged the axes; derive the equation for those axes before interpreting it.

</details>

</section>

<section class="lesson-check" markdown="1">

#### Retry 2 {#retry-exponential}

**Retry (self-written):** Constructed data with deliberate scatter are $(x,y)=(0,2),(1,4.1),(2,7.9),(3,16.2)$. Investigate $y=ka^x$ by plotting suitable transformed values. Estimate k and a from a balanced line and predict y at x=4. Explain why neither exact agreement nor a physical law has been established.

<details markdown="1"><summary>Hint</summary>

Only one axis needs a logarithm. Draw one trend line; do not join the dots.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$\begin{aligned}X:&\quad0,\ 1,\ 2,\ 3,\\Y:&\quad0.30103,\ 0.61278,\\&\quad0.89763,\ 1.20952.\end{aligned}$$

A balanced line is approximately Y=0.302X+0.302, giving k≈2.00, a≈2.00 and y(4)≈32.4. The convenient reference line Y=0.30103X+0.30103 gives k=a=2 and y(4)=32; both are reasonable graphical estimates. Compare your line, gradient triangle and original predictions rather than demanding an exact intercept. Values k in 1.9–2.1 and a in 1.95–2.05 are self-check guides, not official limits. The deliberate scatter prevents exact agreement, and constructed data cannot validate a physical law.

</details>

</section>

<section class="lesson-check" markdown="1">

#### Retry 3 {#retry-branches}

**Retry (self-written):** A straight plot of $y^2$ against $x^3$ has gradient 4 and intercept 9. Give the original relation. Is positive y the only possible branch?

<details markdown="1"><summary>Hint</summary>

Undo the square only after checking that its right side is nonnegative.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$\begin{aligned}y^2&=4x^3+9,\\y&=\pm\sqrt{4x^3+9}\\&\quad(4x^3+9\ge0).\end{aligned}$$

A positive branch requires an extra contextual condition. The two signs coincide at zero; where the radicand is negative there is no real y.

</details>

</section>

## Review after numerical roots {#later-review}

<section class="lesson-check" markdown="1">

#### Review 1 {#review-1}

**Later review (self-written):** For the constructed pairs $(1,3),(2,12),(3,27),(4,48)$, investigate which of $y=kx^n$ and $y=ka^x$ is consistent with the data. Choose and draw a suitable linear plot, estimate its constants and justify your choice using the original variables. Separately, if $1/y=2+3/x$, find x when y=3/10 and check the domain.

<details markdown="1"><summary>Hint</summary>

Test how each proposed model treats changes in x. Keep a graph even if you can spot the relationship algebraically.

</details>

<details markdown="1"><summary>Solution and check</summary>

The power plot gives Y=2X+0.47712, so k=3 and n=2. With X values 0, 0.30103, 0.47712, 0.60206, the Y values are 0.47712, 1.07918, 1.43136, 1.68124. Plot these four pairs. The original y ratios for consecutive unit x steps are 4, 9/4, 16/9, so no single constant exponential factor a fits all four exactly.

$$\begin{aligned}\frac{10}3&=2+\frac3x,\\x&=\frac94.\end{aligned}$$

It is nonzero and not −3/2, so it is allowed. If you returned an estimate for y instead of x, revisit [returning to original variables](#reading-a-fit).

</details>

</section>

## Where to go next {#next-step}

Continue to [numerical roots](/alevel/as-further-mathematics/numerical-roots/) when your own plots support your constants and you can restore the original domain. Complete [the transformation review](/alevel/as-further-mathematics/transformations/#later-review) now, then return for this page’s mixed review after the next lesson.

## Sources and scope {#sources}

Scope follows 9665 v5.2. The paired questions and mark schemes below informed the required evidence; these exercises do not reproduce their questions or award official marks.

<details markdown="1"><summary>Official references</summary>

- [OxfordAQA 9665 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf), FPP1.2.
- FM02 June 2024 Q4; QP pp.7–9, MS pp.7–9. [FM02 June 2024 QP](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-question-paper.pdf) · [Final MS](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-mark-scheme.pdf).

</details>

[Previous](/alevel/as-further-mathematics/transformations/) · [Course route](/alevel/as-further-mathematics/#learning-route) · [Next](/alevel/as-further-mathematics/numerical-roots/)

{% include exam_topic_practice.html %}
