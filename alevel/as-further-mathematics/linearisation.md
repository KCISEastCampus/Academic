---
title: "Linearisation, plotting and fitting"
layout: subjects
mathjax: true
grade: as
subject: as-further-mathematics
lang: en
permalink: /alevel/as-further-mathematics/linearisation/
toc_headings: h2, h3
study_page: true
---

[AS Further Mathematics](/alevel/as-further-mathematics/) · B3 · FPP1.2

All demonstrations, scaffolded attempts, independent tasks and retries here are **self-written**, with no official marks. Write your method and reasons before opening hints and solutions separately.

## Which axes make a straight line? {#model}

**Start:** identify gradient and intercept in $Y=mX+c$. **Goal:** transform variables, plot all points, fit a line and recover original constants. You need straight lines and logarithms. The axis labels are transformed quantities, not merely the original variable names. Logarithms require positive arguments; logarithms of dimensional measurements refer to their numerical values in the stated units.

$$y=kx^n\Rightarrow Y=\log_{10}y=nX+\log_{10}k,\quad X=\log_{10}x\quad(x,y,k>0).$$

$$y=ka^x\Rightarrow\log_{10}y=x\log_{10}a+\log_{10}k\quad(y,k,a>0).$$

$$\frac1y=a+\frac bx\Rightarrow Y=a+bX,\quad X=1/x,\ Y=1/y\quad(xy\ne0);\qquad y^2=ax^3+b\Rightarrow Y=y^2,\ X=x^3.$$

Choose the transformed pair from the relationship. A power-law gradient is n, but an exponential-law gradient is a logarithm of a. Recover an original logarithmic intercept by exponentiation.

## Demonstration: plot and fit constructed data {#demonstration}

These dimensionless data were **constructed** to satisfy a power law exactly. They are not measurements and supply no experimental validation. Plot every transformed point before drawing a line through the pattern.

| x | 1 | 2 | 3 | 4 | 5 |
| --- | --- | --- | --- | --- | --- |
| y | 2.5 | 10 | 22.5 | 40 | 62.5 |
| $X=\log_{10}x$ | 0 | 0.30103 | 0.47712 | 0.60206 | 0.69897 |
| $Y=\log_{10}y$ | 0.39794 | 1 | 1.35218 | 1.60206 | 1.79588 |

![All five constructed log10 x, log10 y points plotted on labelled axes with the fitted line Y=2X+0.39794 and grid scales.](/alevel/as-further-mathematics/diagrams/linearisation.svg)

The line gradient from a wide triangle is about 2 and its intercept about $0.39794$. Thus $n=2$, $k=10^{0.39794}\approx2.5$. Substitution checks all original data, giving $y=2.5x^2$. Small departures in the printed table come from rounded logs. For scattered data draw a balanced line through the trend rather than joining points; constants are estimates and do not establish a causal law.

## Scaffold and independent choice {#practice}

**Scaffold (self-written):** A plot of $\log_{10}y$ against x is $Y=0.3x+0.7$. Express y in the form $ka^x$ and state the necessary positivity conditions.

<details markdown="1"><summary>Scaffold check</summary>

$$y=10^{0.7}(10^{0.3})^x;\qquad k=10^{0.7},\ a=10^{0.3},\ y>0.$$

</details>

**Independent task (self-written):** The following dimensionless data are constructed: $(x,y)=(1,1/5),(2,2/7),(3,1/3),(6,2/5)$. Test a model $1/y=a+b/x$ by choosing axes and plotting all four points; read off a and b, then predict y at $x=4$. State a value of x at which the model is undefined and explain why a numerical fit does not prove a physical law.

<details markdown="1"><summary>Hint</summary>

Make a transformed table with axis labels. Return to y after reading the line; identify both the original reciprocal restriction and any zero denominator in the recovered formula.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$X=1/x:\ 1,1/2,1/3,1/6;\qquad Y=1/y:\ 5,7/2,3,5/2.$$

$$Y=2+3X\Rightarrow a=2,\ b=3;\quad y=\frac{x}{2x+3}\Rightarrow y(4)=\frac4{11}.$$

The reciprocal model requires $x\ne0,y\ne0$; the recovered denominator also excludes $x=-3/2$. Do not silently extend the original model to $x=0$. Matching constructed values shows internal agreement, not evidence from nature.

</details>

## Diagnose and retry {#retry}

If your k equals the intercept itself, undo the logarithm. If you swapped axes, derive the new gradient rather than reusing its old interpretation.

**Retry (self-written):** A straight plot of $y^2$ against $x^3$ has gradient 4 and intercept 9. Give the original relation. Is positive y the only possible branch?

<details markdown="1"><summary>Retry check</summary>

$$y^2=4x^3+9;\qquad y=\pm\sqrt{4x^3+9}\quad(4x^3+9\ge0).$$

A positive branch needs an additional contextual condition.

</details>

## Sources and scope {#sources}

Scope follows 9665 v5.2. The paired questions and mark schemes below informed the required evidence; these exercises do not reproduce their questions or award official marks.

- [OxfordAQA 9665 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf), FPP1.2.
- FM02 June 2024 Q4; QP pp.7–9, MS pp.7–9. [FM02 June 2024 QP](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-question-paper.pdf) · [Final MS](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-mark-scheme.pdf).

[Previous](/alevel/as-further-mathematics/transformations/) · [Course route](/alevel/as-further-mathematics/#learning-route) · [Next](/alevel/as-further-mathematics/numerical-roots/)
