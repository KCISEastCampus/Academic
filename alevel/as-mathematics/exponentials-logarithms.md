---
layout: subjects
title: "Exponentials and logarithms"
mathjax: true
grade: as
subject: as-mathematics
permalink: /alevel/as-mathematics/exponentials-logarithms/
toc_headings: h2
reading_layout: true
study_page: true
---

[AS Mathematics learning route](/alevel/as-mathematics/#learning-route) · PP1.3 · OxfordAQA 9660 v5.2
{:.lesson-meta}

Read the explanation and complete example, then try the questions on paper. Hints and solutions open separately. All questions are **self-written**, with no official marks.

- [Exponential change and logarithms](#l17)

## Exponential change and logarithms {#l17}

Goal: interpret repeated multiplication and solve for an exponent with valid logarithms. Prerequisites: [indices](/alevel/as-mathematics/algebra/#l01-indices) and [graphs](/alevel/as-mathematics/algebra/#l05).

### A logarithm asks which exponent we need {#l17-concept}

Multiplying by the same factor each step gives exponential change. For $a>0$, $y=a^x$ is positive and passes through $(0,1)$. A factor above 1 gives growth; a factor between 0 and 1 gives decay; a factor of 1 gives no change.

To find an unknown exponent, ask the reverse question: which power of the base produces the output? That answer is a logarithm. For example $2^3=8$ means $\log_2 8=3$. In general,

$$\begin{gathered}
a^x=b\ \Longleftrightarrow\ x=\log_a b=\frac{\log b}{\log a},\\
a>0,\quad a\ne1,\quad b>0.
\end{gathered}$$

The argument, the number inside a logarithm, must be positive. For positive $u,v$, the laws are $\log_a(uv)=\log_a u+\log_a v$, $\log_a(u/v)=\log_a u-\log_a v$ and $\log_a(u^k)=k\log_a u$. Products correspond to adding exponents; there is no similar rule for splitting a sum. Record each original positive argument before combining. Use the same base throughout; exponential/logarithmic calculus is not required here.

<div class="worked-example" markdown="1">

### A complete example {#l17-worked}

**Question:** Solve $3\cdot2^t=15$ and give $t$ to 3 decimal places. Interpret the solution as a point on a graph.

First remove the multiplier 3: $2^t=5$. We know $2^2=4$ and $2^3=8$, so t should lie between 2 and 3. A logarithm finds the exact exponent:

$$t=\frac{\log5}{\log2}\approx2.322\quad\text{(3 decimal places)}.$$

The increasing graph $y=3\cdot2^t$ meets $y=15$ once. The unrounded logarithm ratio gives exactly 15 on substitution; the rounded value gives a nearby value, which is why the displayed decimal uses an approximation sign.

</div>

<div class="lesson-check" markdown="1">

### Complete a supported attempt {#l17-scaffold}

**Question:** Solve $\log_2(x-1)=3$ and explain the admissible values of $x$ before solving.

<details markdown="1">
<summary>Hint</summary>

Translate to an exponential only after recording a positive argument.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The condition is $x>1$. Then $x-1=2^3=8$, so $x=9$, which is admissible.

</details>

</div>

<div class="lesson-check" markdown="1">

### Independent task {#l17-independent}

**Question:** Find all real solutions of $\log_2(x-1)+\log_2(x-3)=3$. Show why any rejected algebraic value is not a solution.

<details markdown="1">
<summary>Hint</summary>

Combine a product, solve it, then return to the separate original arguments.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The original conditions require $x>3$. Combining gives $(x-1)(x-3)=8$, so $x^2-4x-5=0$ and candidates $5,-1$. Only $x=5$ is allowed; at −1 both original arguments are negative. Check: $\log_2 4+\log_2 2=2+1=3$.

</details>

</div>

### Diagnose and repair {#l17-diagnosis}

Testing $\log_2(1+1)$ against $\log_2 1+\log_2 1$ disproves a false sum rule. A positive product is insufficient if the original logarithms require both separate factors to be positive.

For a rejected-value error, revisit [positive logarithm arguments](#l17-concept), then [the new domain check](#l17-retry-domain). For exponential change, return to [the worked exponent](#l17-worked), then [the decay task](#l17-retry).

<div class="lesson-check" markdown="1">

### Try again {#l17-retry}

**Question:** A constructed decay model is $N=80(1/2)^t$. Find the time at which $N=10$ and describe the graph’s behaviour as $t$ increases.

<details markdown="1">
<summary>Hint</summary>

Divide by the initial value and compare powers.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$(1/2)^t=1/8=(1/2)^3$, so $t=3$. The graph decreases, remains positive and approaches zero as time increases.

</details>

</div>

<div class="lesson-check" markdown="1">

### Check the repaired idea {#l17-retry-domain}

**Question:** Find all real solutions of $\log_3(x+1)+\log_3(x-1)=1$. Explain any rejection.

<details markdown="1">
<summary>Hint</summary>

Record the two original conditions before combining logarithms.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The original arguments require $x+1>0$ and $x-1>0$, hence $x>1$. Combining gives $(x+1)(x-1)=3$, or $x^2=4$. The candidates are $2,-2$; only $x=2$ is valid. At 2 the sum is $\log_3 3+\log_3 1=1+0=1$. At −2 the original logarithms are undefined over the reals.

</details>

</div>

## After this lesson {#next-step}

Close the solutions and check that you can complete each group’s retry independently and explain the method and its conditions. Revisit the relevant example if needed, then continue to the next lesson.

[Previous lesson: Trigonometry](/alevel/as-mathematics/trigonometry/) · [Course route](/alevel/as-mathematics/#learning-route) · [Next lesson: Probability](/alevel/as-mathematics/probability/)

After completing this route, try [the mixed task](/alevel/as-mathematics/#mixed-further). In a later study session, return to [the recall task](/alevel/as-mathematics/#later-further) with solutions closed.

## Sources and scope {#sources}

<details class="lesson-notes" markdown="1">
<summary>View scope and marking sources</summary>

Organised against the [current official 9660 specification](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf). Paired marking material informs the expected reasoning; every task here is separately self-written and is not an official question or official mark scheme.

Specification §3.2 PP1.3; algebraic evidence principles from paired MA01/MA02 January 2025 marking material.

[MA01 January 2025 QP](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-question-paper.pdf) · [paired MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-mark-scheme.pdf) · [MA02 January 2025 QP](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-question-paper.pdf) · [paired MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-mark-scheme.pdf)

Success means independently explaining the method and checking its conditions, not just reading a solution. Student learning outcomes have not been trialled.

</details>

{% include exam_topic_practice.html %}
