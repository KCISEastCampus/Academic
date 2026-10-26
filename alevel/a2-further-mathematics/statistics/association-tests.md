---
title: "Association tests: compare two classifications"
layout: subjects
mathjax: true
grade: a2
subject: a2-further-mathematics
lang: en
permalink: /alevel/a2-further-mathematics/statistics/association-tests/
reading_layout: true
study_page: true
toc_headings: h2
---

An association test asks whether the proportions of one categorical variable differ across categories of another. All examples and tasks are self-written, using constructed data and no official marks.

You need frequency tables and the logic of hypotheses. For independence, revisit [independence and covariance](/alevel/as-further-mathematics/linear-combinations/#covariance): zero covariance alone does not establish independence.

## Start with independent observations {#model}

Each independently sampled individual enters exactly one cell, classified by two categorical variables. The null says those population variables are independent; the alternative says they are associated. Name both variables. Repeated responses from one person are not automatically independent observations.

## Use the margins to predict counts {#expected}

Under independence every row has the same column proportions. Estimate a column proportion from the whole sample, then multiply by that row total.

$$
E_{ij}=R_i\frac{C_j}{N},\qquad
Q=\sum_{i=1}^r\sum_{j=1}^c\frac{(O_{ij}-E_{ij})^2}{E_{ij}},\qquad
\nu=(r-1)(c-1).
$$

$$
P(\chi^2_\nu\le c_\nu(u))=u.
$$

Expected row and column totals must match the observed margins. Totals are checks, not extra categories. Once the first rows and columns are chosen, fixed margins determine the rest, giving the stated degrees of freedom. Every expected cell count must be strictly greater than 5. Greater discrepancy opposes independence, so compare with an upper chi-square tail.

## The two-by-two correction {#yates}

This qualification requires Yates continuity correction for two-by-two association tables. Take the absolute residual first, subtract one half, square, then divide by the expected count.

$$
Q_Y=\sum_{i=1}^2\sum_{j=1}^2\frac{(\lvert O_{ij}-E_{ij}\rvert-0.5)^2}{E_{ij}},\qquad\nu=1.
$$

Do not subtract one half from signed residuals or observed frequencies. The correction does not change expected counts or degrees of freedom, and does not fix small expected counts or dependence. Do not extend it to general tables or every goodness-of-fit test with few classes. All numerical correction tasks here have absolute residuals greater than one half.

## Two complete examples {#examples}

<section class="worked-example" markdown="1">

### A complete example {#example-a}

**Question:** A random sample of 120 independent customers is classified by membership type A/B and product preference X/Y/Z. The observed rows are $(24,12,24)$ and $(16,28,16)$. Test for association at 5%, using $c_2(0.95)=5.991465$.

$$
H_0:\text{membership type and product preference are independent},\quad H_1:\text{they are associated}.
$$

| Membership | X | Y | Z | Total |
| --- | --- | --- | --- | --- |
| A | 24 | 12 | 24 | 60 |
| B | 16 | 28 | 16 | 60 |
| Total | 40 | 40 | 40 | 120 |

$$
E_{ij}=\frac{60\times40}{120}=20>5,\quad
Q=\frac{4^2+(-8)^2+4^2+(-4)^2+8^2+(-4)^2}{20}=9.6,
\quad\nu=(2-1)(3-1)=2,\quad9.6>5.991465.
$$

Expected rows total 60 and columns total 40, as required. A two-by-three table does not use Yates. Reject: sufficient evidence of association between membership type and product preference. These observational data do not prove that membership causes preference.

</section>

<section class="worked-example" markdown="1">

### A complete example {#example-b}

**Question:** Sixty independently sampled respondents are classified by training access A/B and confidence yes/no. The observed rows are $(18,12)$ and $(8,22)$. Test for association at 5%, using $c_1(0.95)=3.841459$.

$$
H_0:\text{training access and confidence are independent},\quad H_1:\text{they are associated}.
$$

| Access | Yes | No | Total |
| --- | --- | --- | --- |
| A | 18 | 12 | 30 |
| B | 8 | 22 | 30 |
| Total | 26 | 34 | 60 |

$$
E=\begin{pmatrix}13&17\\13&17\end{pmatrix},\quad
O-E=\begin{pmatrix}5&-5\\-5&5\end{pmatrix}.
$$

$$
Q_Y=2\frac{(5-0.5)^2}{13}+2\frac{(5-0.5)^2}{17}=5.497738,
\quad\nu=1,\quad5.497738>3.841459.
$$

All expected counts exceed 5. Reject: sufficient evidence of association between training access and confidence. The uncorrected value 6.787330 does not replace the required calculation. Association does not establish a causal training effect.

</section>

## Choose and explain {#practice}

<section class="lesson-check" markdown="1">

### Try it {#task-a}

**Question:** Ninety independently sampled items are classified by shift (early/middle/late) and status (pass/fail). Each shift has 30 items and observed rows $(18,12)$, $(12,18)$, $(6,?)$. Complete the table and assess association at 5%, using $c_2(0.95)=5.991465$. Does the result prove that shift causes defects?

<details markdown="1">

<summary>Hint</summary>

Recover the margins before expected counts.

</details>

<details markdown="1">

<summary>Solution</summary>

$$
H_0:\text{shift and status are independent},\quad H_1:\text{they are associated};
\quad ?=24,\quad C=(36,54),\quad N=90.
$$

$$
E=\begin{pmatrix}12&18\\12&18\\12&18\end{pmatrix},\quad
Q=\frac{36}{12}+\frac{36}{18}+0+0+\frac{36}{12}+\frac{36}{18}=10,
\quad\nu=(3-1)(2-1)=2,\quad10>5.991465.
$$

All expected counts exceed 5; no Yates applies to a three-by-two table. Reject: sufficient evidence that shift and status are associated. Other conditions may also vary between shifts, so this does not prove that shift causes defects.

</details>

</section>

<section class="lesson-check" markdown="1">

### Try it {#task-b}

**Question:** For the training-access table in Example B, a student uses $\sum(O-E-0.5)^2/E$ with signed residuals. Diagnose the error and give the correct statistic, degrees of freedom and conclusion without changing the table.

<details markdown="1">

<summary>Hint</summary>

Compare equal positive and negative residuals.

</details>

<details markdown="1">

<summary>Solution</summary>

$$
O-E=(5,-5,-5,5),\quad
\lvert O-E\rvert-0.5=(4.5,4.5,4.5,4.5),\quad
Q_Y=5.497738>3.841459,\quad\nu=1.
$$

Subtracting before absolute values turns negative residuals into negative five and a half, but positive residuals into four and a half. That treats equal discrepancies asymmetrically. Use the absolute residuals and reject: sufficient evidence of association between training access and confidence. The original frequencies stay unchanged.

</details>

</section>

<section class="lesson-check" markdown="1">

### Try it {#task-c}

**Question:** Two independent random groups yield observed rows $(9,1)$ and $(3,7)$. A student says Yates makes the chi-square approximation valid. Evaluate that claim. Separately, evaluate a survey that treats answers from each person before and after an event as two independent respondents.

<details markdown="1">

<summary>Hint</summary>

Check expected counts and independent sampling units separately.

</details>

<details markdown="1">

<summary>Solution</summary>

$$
R=(10,10),\quad C=(12,8),\quad N=20,\quad
E=\begin{pmatrix}6&4\\6&4\end{pmatrix}.
$$

Expected counts of 4 fail the strict greater-than-five condition. Yates does not repair that; this approximation is unjustified. In the second survey, repeated responses from the same individual can be dependent and cannot be treated as separate independent people. Neither description supplies the conditions needed for this test.

</details>

</section>

## Repair before retrying {#retry}

For expected counts or df, return to [the margins](#expected). For correction, revisit [absolute residuals](#yates), keeping the observed table unchanged. For conditions, identify [sampling units](#model) first. Close the old answers before these new tasks.

<section class="lesson-check" markdown="1">

### Try it {#retry-a}

**Question:** Independent random respondents are classified by age band A/B and travel preference X/Y/Z. The observed rows are $(12,18,30)$ and $(18,12,30)$. Test for association at 5%, using $c_2(0.95)=5.991465$.

<details markdown="1">

<summary>Hint</summary>

Check both expected margins.

</details>

<details markdown="1">

<summary>Solution</summary>

$$
H_0:\text{age band and travel preference are independent},\quad H_1:\text{they are associated};
\quad R=(60,60),\quad C=(30,30,60),\quad N=120.
$$

$$
E=\begin{pmatrix}15&15&30\\15&15&30\end{pmatrix},\quad
Q=\frac9{15}+\frac9{15}+0+\frac9{15}+\frac9{15}+0=2.4,
\quad\nu=2,\quad2.4<5.991465.
$$

All expected counts exceed 5; no Yates applies. Do not reject: insufficient evidence of association between age band and travel preference. This does not prove independence.

</details>

</section>

<section class="lesson-check" markdown="1">

### Try it {#retry-b}

**Question:** Forty independently sampled people are classified by travel mode (bus/other) and study mode (group/alone), giving rows $(14,6)$ and $(7,13)$. Test for association at 5%, using $c_1(0.95)=3.841459$. A colleague obtains 4.912281; does that supply the required test?

<details markdown="1">

<summary>Hint</summary>

Take absolute residuals before subtracting one half.

</details>

<details markdown="1">

<summary>Solution</summary>

$$
H_0:\text{travel mode and study mode are independent},\quad H_1:\text{they are associated};
\quad R=(20,20),\quad C=(21,19),\quad
E=\begin{pmatrix}10.5&9.5\\10.5&9.5\end{pmatrix}.
$$

$$
\lvert O_{ij}-E_{ij}\rvert=3.5,\quad
Q_Y=2\frac{(3.5-0.5)^2}{10.5}+2\frac{(3.5-0.5)^2}{9.5}=3.609023,
\quad\nu=1,\quad3.609023<3.841459.
$$

All expected counts exceed 5. Do not reject: insufficient evidence that travel mode and study mode are associated. The colleague used the uncorrected statistic, which would exceed the cutoff. Omitting the required correction changes this decision.

</details>

</section>

<section class="lesson-check" markdown="1">

### Try it {#retry-c}

**Question:** An independent random sample classified by route A/B and package size small/medium/large gives rows $(8,1,1)$ and $(2,3,5)$. A grouping of small versus not-small was specified before seeing the table. Does this make expected counts valid under the strict rule? Calculate them and state what follows.

<details markdown="1">

<summary>Hint</summary>

Meaningful pooling still needs an expected-count check.

</details>

<details markdown="1">

<summary>Solution</summary>

$$
O_{\rm pooled}=\begin{pmatrix}8&2\\2&8\end{pmatrix},\quad
R=(10,10),\quad C=(10,10),\quad N=20,\quad E_{ij}=\frac{10\times10}{20}=5.
$$

No: all expected counts are exactly 5 and still fail. No justified chi-square decision follows. Further merging would remove the size comparison; obtain a suitable larger independent sample rather than force a conclusion.

</details>

</section>

## Return later without the examples {#later-review}

<section class="lesson-check" markdown="1">

### Try it {#later-a}

**Question:** Sixty independently sampled people are classified by transport preference A/B and study mode group/alone, giving rows $(16,14)$ and $(9,21)$. Assess association at 5%, using $c_1(0.95)=3.841459$.

<details markdown="1">

<summary>Hint</summary>

Check table dimensions before choosing the statistic.

</details>

<details markdown="1">

<summary>Solution</summary>

$$
H_0:\text{transport preference and study mode are independent},\quad H_1:\text{they are associated};
\quad R=(30,30),\quad C=(25,35),\quad
E=\begin{pmatrix}12.5&17.5\\12.5&17.5\end{pmatrix}.
$$

$$
\lvert O_{ij}-E_{ij}\rvert=3.5,\quad
Q_Y=2\frac{3^2}{12.5}+2\frac{3^2}{17.5}=2.468571,
\quad\nu=1,\quad2.468571<3.841459.
$$

All expected counts exceed 5. Do not reject: insufficient evidence that transport preference and study mode are associated, not proof of independence.

</details>

</section>

<section class="lesson-check" markdown="1">

### Try it {#later-b}

**Question:** Contrast (i) 80 independent die rolls classified by face and compared with six pre-specified face probabilities, and (ii) 80 independent people classified by die-colour preference and age category in a two-by-three table. State expected-count formulas and degrees of freedom. Does Yates apply to (ii)?

<details markdown="1">

<summary>Hint</summary>

Distinguish one variable against a model from two classification variables.

</details>

<details markdown="1">

<summary>Solution</summary>

$$
\text{(i)}\quad E_i=80p_i,\quad\nu=6-1=5\quad\text{before pooling};
\qquad\text{(ii)}\quad E_{ij}=\frac{R_iC_j}{80},\quad\nu=(2-1)(3-1)=2.
$$

The first is goodness of fit with no fitted parameters. The second is association; a two-by-three table does not use Yates. Both require every final expected count to exceed 5; meaningful pooling changes the number of categories and df. The actual counts and probabilities are not supplied, so no numerical statistic can be calculated.

</details>

</section>

[Mixed course review](/alevel/a2-further-mathematics/statistics/#review) · [Course route](/alevel/a2-further-mathematics/statistics/)
