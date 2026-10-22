---
layout: subjects
title: "Exponentials and logarithms"
mathjax: true
grade: as
subject: as-mathematics
permalink: /alevel/as-mathematics/exponentials-logarithms/
toc_headings: h2, h3
study_page: true
---

[AS Mathematics learning route](/alevel/as-mathematics/#learning-route) · PP1.3 · OxfordAQA 9660 v5.2

Attempt each task on paper before opening its hint. Use the separate solution to check method, conditions and result. All questions are **self-written**, with no official marks. The paired Chinese page keeps the same English prompts, formulae and numerical answers.

- [L17 Exponential change and logarithmic equations](#l17)

## L17 · Exponential change and logarithmic equations {#l17}

Goal: interpret growth/decay and recover an unknown exponent while checking logarithm conditions. Prerequisites: L01 and L05.

For $a>0$, the graph $y=a^x$ passes through $(0,1)$ and stays positive. It increases for $a>1$, decreases for $0<a<1$ and is constant for $a=1$. For a logarithm the base must also differ from 1, and its argument must be positive:

$$a^x=b\ \Longleftrightarrow\ x=\log_a b=\frac{\log b}{\log a}\quad(a>0,\ a\ne1,\ b>0).$$

For positive $u,v$, $\log_a(uv)=\log_a u+\log_a v$, $\log_a(u/v)=\log_a u-\log_a v$, and $\log_a(u^k)=k\log_a u$. There is no corresponding rule splitting a sum. Match the base in each use; no exponential/logarithmic calculus is required here.

### Worked reasoning {#l17-worked}

**Question:** Solve $3\cdot2^t=15$ and give $t$ to 3 decimal places. Interpret the solution as a point on a graph.

$2^t=5$ gives $t=\log5/\log2=2.322$ to 3dp. The increasing graph $y=3\cdot2^t$ meets the horizontal line $y=15$ once. Substitution of the unrounded logarithm ratio gives exactly 15, while substitution of the rounded value gives a nearby value.

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

### Diagnose and repair {#l17-diagnosis}

Testing $\log_2(1+1)$ against $\log_2 1+\log_2 1$ disproves a false sum rule. A positive product is insufficient if the original logarithms require both separate factors to be positive.

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

## Sources and scope {#sources}

Organised against the [current official 9660 specification](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf). Paired marking material informs the expected reasoning; every task here is separately self-written and is not an official question or official mark scheme.

Specification §3.2 PP1.3; algebraic evidence principles from paired MA01/MA02 January 2025 marking material.

[MA01 January 2025 QP](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-question-paper.pdf) · [paired MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-mark-scheme.pdf) · [MA02 January 2025 QP](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-question-paper.pdf) · [paired MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-mark-scheme.pdf)

Success means independently explaining the method and checking its conditions, not just reading a solution. Student learning outcomes have not been trialled.
