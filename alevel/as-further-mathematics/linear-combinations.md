---
title: "Linear combinations and covariance"
layout: subjects
mathjax: true
grade: as
subject: as-further-mathematics
lang: en
permalink: /alevel/as-further-mathematics/linear-combinations/
toc_headings: h2, h3
study_page: true
---

[AS Further Mathematics](/alevel/as-further-mathematics/) · S5 · FS1.5

All demonstrations, scaffolded attempts, independent tasks and retries here are **self-written**, with no official marks. Write your method and reasons before opening hints and solutions separately.

## Why do coefficients get squared? {#model}

**Start:** compare repeating the same random value with drawing a new independent value. **Goal:** derive a linear-combination variance, retain covariance signs, recover correlation and test consistency. Assume finite second moments; correlation requires both variances positive. Expectation is linear without independence.

$$E(aX+bY+c)=aE(X)+bE(Y)+c.$$

Write $X_c=X-E(X)$ and $Y_c=Y-E(Y)$, expand the square and take expectations. This identifies the cross term instead of discarding it.

$$E[(aX_c+bY_c)^2]=a^2E(X_c^2)+b^2E(Y_c^2)+2abE(X_cY_c).$$

$$\operatorname{Var}(aX+bY+c)=a^2\operatorname{Var}(X)+b^2\operatorname{Var}(Y)+2ab\operatorname{Cov}(X,Y).$$

$$\operatorname{Cov}(X,Y)=E(XY)-E(X)E(Y),\qquad
\rho=\frac{\operatorname{Cov}(X,Y)}{\sqrt{\operatorname{Var}(X)\operatorname{Var}(Y)}},\quad -1\le\rho\le1.$$

Independence gives covariance zero; zero covariance does not generally imply independence. A constant changes the mean but not variance. For several independent variables the variances add with squared coefficients.

## Demonstration: a dependent joint table {#demonstration}

This table is a constructed joint distribution. Rows are X and columns Y. The large diagonal probabilities make agreement more likely.

| $P(X=x,Y=y)$ | $y=0$ | $y=1$ |
| --- | --- | --- |
| $x=0$ | 0.4 | 0.1 |
| $x=1$ | 0.1 | 0.4 |

$$E(X)=E(Y)=0.5,\quad\operatorname{Var}(X)=\operatorname{Var}(Y)=0.25;\quad E(XY)=0.4\Rightarrow\operatorname{Cov}(X,Y)=0.15,\ \rho=0.6.$$

$$\operatorname{Var}(X-Y)=0.25+0.25-2(0.15)=0.2;\qquad E(2X-Y+3)=3.5,\quad\operatorname{Var}(2X-Y+3)=1+0.25-0.6=0.65.$$

The negative coefficient reverses the covariance contribution. Treating the table's variables as independent would incorrectly give 0.5 for the variance of the difference.

## Scaffold and independent choice {#practice}

**Scaffold (self-written):** If $\operatorname{Var}(U)=v$ and $U_1,U_2$ are independent copies of U, compare $\operatorname{Var}(2U)$ with $\operatorname{Var}(U_1+U_2)$.

<details markdown="1"><summary>Scaffold check</summary>

$$\operatorname{Var}(2U)=4v;\qquad\operatorname{Var}(U_1+U_2)=2v.$$

In $U+U$, the covariance equals v; independent copies have covariance zero.

</details>

**Independent task (self-written):** Discrete X,Y have means 2, −1, variances 4, 9 and $\operatorname{Var}(X-Y)=7$. Find their covariance, correlation, and the mean and variance of $Z=3X-2Y+5$. Could the difference variance instead be 30 with the same individual variances? Also find $\operatorname{Var}(2U-V+W)$ for independent U,V,W with variances 1,4,9.

<details markdown="1"><summary>Hint</summary>

Recover the covariance from the difference before forming Z. Test the alternative against $\lvert\rho\rvert\le1$, not just nonnegative variance.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$7=4+9-2C\Rightarrow C=3,\quad\rho=3/6=1/2.$$

$$E(Z)=3(2)-2(-1)+5=13;\qquad\operatorname{Var}(Z)=9(4)+4(9)-12(3)=36.$$

$$30=13-2C\Rightarrow C=-8.5,\quad\rho=-8.5/6<-1\quad\text{(impossible)}.$$

$$\operatorname{Var}(2U-V+W)=4(1)+4+9=17.$$

</details>

## Diagnose and retry {#retry}

A missing minus sign usually comes from substituting before identifying a and b. First write $2abC$ symbolically; then substitute signed coefficients.

**Retry (self-written):** With variances 4 and 9 but covariance −2, find $\operatorname{Var}(X+Y)$ and correlation. Can correlation be computed if X is constant?

<details markdown="1"><summary>Retry check</summary>

$$\operatorname{Var}(X+Y)=4+9-4=9,\qquad\rho=-2/6=-1/3.$$

A constant X has variance zero, so correlation is undefined.

</details>

## Sources and scope {#sources}

Scope follows 9665 v5.2. The paired questions and mark schemes below informed the required evidence; these exercises do not reproduce their questions or award official marks.

- [OxfordAQA 9665 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf), FS1.5.
- FM02 June 2024 Q8(b)(ii); QP p.17, MS pp.14–15. [FM02 June 2024 QP](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-question-paper.pdf) · [Final MS](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-mark-scheme.pdf).

[Previous](/alevel/as-further-mathematics/generating-functions/) · [Course route](/alevel/as-further-mathematics/#learning-route) · [Next](/alevel/as-further-mathematics/relative-motion/)
