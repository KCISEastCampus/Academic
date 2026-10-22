---
layout: subjects
title: "Bernoulli and binomial distributions"
mathjax: true
grade: as
subject: as-mathematics
permalink: /alevel/as-mathematics/binomial/
toc_headings: h2, h3
study_page: true
---

[AS Mathematics learning route](/alevel/as-mathematics/#learning-route) · S1.3 · OxfordAQA 9660 v5.2

Attempt each task on paper before opening its hint. Use the separate solution to check method, conditions and result. All questions are **self-written**, with no official marks. The paired Chinese page keeps the same English prompts, formulae and numerical answers.

- [L21 From Bernoulli trials to binomial moments and tails](#l21)

## L21 · From Bernoulli trials to binomial moments and tails {#l21}

Goal: derive moments, select a model and translate strict probability bounds. Prerequisites: L13 and L18–L20.

A Bernoulli variable $B$ equals 1 for success and 0 for failure, with success probability $p$:

$$E(B)=0(1-p)+1p=p,\quad E(B^2)=p,\quad\operatorname{Var}(B)=p-p^2=p(1-p).$$

If $B_1,\ldots,B_n$ are independent with the same $p$, then $X=\sum_{i=1}^n B_i$ counts successes in a fixed number of trials. Independence and L20 give

$$E(X)=\sum_{i=1}^n p=np,\qquad\operatorname{Var}(X)=\sum_{i=1}^n p(1-p)=np(1-p).$$

$r$ successes have $\binom nr$ placements, each with probability $p^r(1-p)^{n-r}$, so $P(X=r)=\binom nr p^r(1-p)^{n-r}$. All four conditions matter: success/failure, fixed count, independent trials, constant success probability. Sampling without replacement is not automatically binomial. SD is $\sqrt{np(1-p)}$.

### Worked reasoning {#l21-worked}

**Question:** A constructed model has $X\sim\mathrm{Bin}(5,0.2)$. Find $P(X=2)$, $P(X>1)$, the mean and SD.

$P(X=2)=10(0.2)^2(0.8)^3=0.2048$. Also $P(X>1)=1-(0.8)^5-5(0.2)(0.8)^4=0.26272$. The mean is $1$ and variance $0.8$, so SD is $\sqrt{0.8}$. A cumulative table entry $F(1)=P(X\le1)=0.73728$ would give the same tail by $1-F(1)$. It would not give the strict tail by using $F(2)$.

### Complete a supported attempt {#l21-scaffold}

**Question:** For this X, find $P(1\le X\le3)$ using cumulative notation, and evaluate it.

<details markdown="1">
<summary>Hint</summary>

Retain the lower endpoint by subtracting only values below it.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$P(1\le X\le3)=F(3)-F(0)=0.99328-0.32768=0.6656$. These cumulative values are computed from the stated distribution, not claimed as a reading from a particular edition of tables.

</details>

### Independent task {#l21-independent}

**Question:** A binomial variable has mean 3 and variance 2.4. Find n and p, derive its variance from independent Bernoulli indicators, and find $P(X\ge1)$. Would the same model automatically apply to 15 draws without replacement from 75 objects of which 15 are successes?

<details markdown="1">
<summary>Hint</summary>

Divide variance by mean, then recover the number of trials. Check independence in the sampling proposal.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$1-p=2.4/3=0.8$, so $p=0.2,n=15$. Each indicator has variance $p-p^2=0.16$; independence gives $15(0.16)=2.4$. The tail is $1-(0.8)^{15}\approx0.964816$. Without replacement the success probability changes with earlier outcomes, so binomial modelling does not apply automatically.

</details>

### Diagnose and repair {#l21-diagnosis}

Write the allowed integers before forming a complement. Mean alone does not identify n and p; the variance relation and model conditions add information. No normal/Poisson approximation or hypothesis test is needed in this AS group.

### Try again {#l21-retry}

**Question:** For $Y\sim\mathrm{Bin}(4,1/2)$, find $P(Y\ge3)$ and the variance. State the excluded integers in the complementary event.

<details markdown="1">
<summary>Hint</summary>

At least three includes three and four.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$P(Y\ge3)=(4+1)/16=5/16$. The complementary event contains $0,1,2$, and variance is $4(1/2)(1/2)=1$.

</details>

## Sources and scope {#sources}

Organised against the [current official 9660 specification](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf). Paired marking material informs the expected reasoning; every task here is separately self-written and is not an official question or official mark scheme.

Specification §3.2 S1.3; MA02 January 2025 Q6, QP pp12–13, MS p13.

[MA01 January 2025 QP](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-question-paper.pdf) · [paired MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-mark-scheme.pdf) · [MA02 January 2025 QP](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-question-paper.pdf) · [paired MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-mark-scheme.pdf)

Success means independently explaining the method and checking its conditions, not just reading a solution. Student learning outcomes have not been trialled.
