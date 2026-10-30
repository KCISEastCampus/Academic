---
layout: subjects
title: "Bernoulli and binomial distributions"
mathjax: true
grade: as
subject: as-mathematics
permalink: /alevel/as-mathematics/binomial/
toc_headings: h2
reading_layout: true
study_page: true
---

[AS Mathematics learning route](/alevel/as-mathematics/#learning-route) · S1.3 · OxfordAQA 9660 v5.2
{:.lesson-meta}

Read the explanation and complete example, then try the questions on paper. Hints and solutions open separately. All questions are **self-written**, with no official marks.

- [Count successes with a binomial model](#l21)

## Count successes with a binomial model {#l21}

Goal: explain binomial moments, check a model and interpret integer tails. Prerequisites: [binomial coefficients](/alevel/as-mathematics/sequences/#l13), [probability](/alevel/as-mathematics/probability/#l18) and [independent sums](/alevel/as-mathematics/random-variables/#l20).

### Count successes in a fixed number of attempts {#l21-concept}

Call one outcome “success”; the name need not mean something desirable. A Bernoulli variable $B$ records 1 for success and 0 for failure, with success chance $p$. Weighted averages give

$$\begin{aligned}
E(B)&=0(1-p)+1p=p,\\
E(B^2)&=p,\\
\operatorname{Var}(B)&=p-p^2=p(1-p).
\end{aligned}$$

Count successes in $n$ independent attempts with the same chance $p$. Adding their zero-or-one records gives $X=\sum_{i=1}^n B_i$, so the independent-sum rule gives

$$\begin{aligned}
E(X)&=\sum_{i=1}^n p=np,\\
\operatorname{Var}(X)&=\sum_{i=1}^n p(1-p)\\
&=np(1-p).
\end{aligned}$$

For exactly $r$ successes, each particular order has probability $p^r(1-p)^{n-r}$; there are $\binom nr$ such orders. Thus $P(X=r)=\binom nr p^r(1-p)^{n-r}$. SD is $\sqrt{np(1-p)}$.

We write $X\sim\mathrm{Bin}(n,p)$ to say that X counts successes in this model; the two numbers are the trial count and success chance. Check all four requirements: two outcomes per attempt, fixed number, independence and constant success chance. Drawing without replacement can break the last two. For tails, list the included integers first; “more than one” begins at two, whereas “at least one” begins at one.

<div class="worked-example" markdown="1">

### A complete example {#l21-worked}

**Question:** A constructed model has $X\sim\mathrm{Bin}(5,0.2)$. Find $P(X=2)$, $P(X>1)$, the mean and SD.

For exactly two successes, choose which two of the five trials succeed. There are $\binom52=10$ choices, each with the same probability:

$$P(X=2)=10(0.2)^2(0.8)^3=0.2048.$$

“More than 1” includes 2, 3, 4 and 5. It is shorter to remove the two excluded values from the whole probability:

$$\begin{aligned}
P(X>1)&=1-P(X=0)-P(X=1)\\
&=1-(0.8)^5-5(0.2)(0.8)^4\\
&=0.26272.
\end{aligned}$$

The mean is $np=5(0.2)=1$, variance is $np(1-p)=0.8$, so SD is $\sqrt{0.8}$. A cumulative entry $F(1)=P(X\le1)=0.73728$ gives the same answer by $1-F(1)$. Using $F(2)$ would also remove 2, which this question needs to retain.

</div>

<div class="lesson-check" markdown="1">

### Complete a supported attempt {#l21-scaffold}

**Question:** For this X, find $P(1\le X\le3)$ using cumulative notation, and evaluate it.

You may use this cumulative table, calculated from the stated model. It is constructed for this task, not copied from an official booklet. Each entry is $F(r)=P(X\le r)$.

| r | 0 | 1 | 2 | 3 | 4 | 5 |
| --- | --- | --- | --- | --- | --- | --- |
| F(r) | 0.32768 | 0.73728 | 0.94208 | 0.99328 | 0.99968 | 1 |

<details markdown="1">
<summary>Hint</summary>

Retain the lower endpoint by subtracting only values below it.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$P(1\le X\le3)=F(3)-F(0)=0.99328-0.32768=0.6656$. These cumulative values are computed from the stated distribution, not claimed as a reading from a particular edition of tables.

</details>

</div>

<div class="lesson-check" markdown="1">

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

</div>

### Diagnose and repair {#l21-diagnosis}

Write the allowed integers before forming a complement. Mean alone does not identify n and p; the variance relation and model conditions add information. No normal/Poisson approximation or hypothesis test is needed in this AS group.

For a tail boundary, revisit [excluded integers](#l21-worked), then [the new tail task](#l21-retry). For model conditions, revisit [the trial explanation](#l21-concept), then [compare two sampling plans](#l21-retry-model).

<div class="lesson-check" markdown="1">

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

</div>

<div class="lesson-check" markdown="1">

### Another retry {#l21-retry-model}

**Question:** A bag contains 3 red and 2 blue counters. Three counters are drawn without replacement, and X counts the red counters. Assess the claim that X has a binomial distribution with 3 trials and success probability 3/5. If each counter is instead replaced and the bag mixed before an independent next draw, specify the model and find the probability of exactly two reds.

<details markdown="1">
<summary>Hint</summary>

Compare the chance of red on the first draw with the chance after a red has been removed.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Without replacement the first red probability is $3/5$, but after a red it is $2/4=1/2$. The draws are dependent and the success probability changes, so the proposed binomial model is invalid.

With replacement and independent mixing, the count has $X\sim\mathrm{Bin}(3,3/5)$. Thus $P(X=2)=\binom32(3/5)^2(2/5)=54/125$. Replacement supplies the same probability each time; independence is also stated in the changed model.

</details>

</div>

## After this lesson {#next-step}

Close the solutions and check that you can complete each group’s retry independently and explain the method and its conditions. Revisit the relevant example if needed, then continue to the next lesson.

[Previous lesson: Discrete random variables](/alevel/as-mathematics/random-variables/) · [Course route](/alevel/as-mathematics/#learning-route) · [Next lesson: Constant acceleration](/alevel/as-mathematics/constant-acceleration/)

After completing this route, try [the mixed task](/alevel/as-mathematics/#mixed-statistics). In a later study session, return to [the recall task](/alevel/as-mathematics/#later-statistics) with solutions closed.

## Sources and scope {#sources}

<details class="lesson-notes" markdown="1">
<summary>View scope and marking sources</summary>

Organised against the [current official 9660 specification](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf). Paired marking material informs the expected reasoning; every task here is separately self-written and is not an official question or official mark scheme.

Specification §3.2 S1.3; MA02 January 2025 Q6, QP pp12–13, MS p13.

[MA01 January 2025 QP](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-question-paper.pdf) · [paired MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-mark-scheme.pdf) · [MA02 January 2025 QP](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-question-paper.pdf) · [paired MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-mark-scheme.pdf)

Success means independently explaining the method and checking its conditions, not just reading a solution. Student learning outcomes have not been trialled.

</details>

{% include exam_topic_practice.html %}
