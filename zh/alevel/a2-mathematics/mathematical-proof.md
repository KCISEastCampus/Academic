---
title: 数学证明
layout: subjects
mathjax: true
grade: a2
subject: a2-mathematics
lang: zh-CN
translation_of: /alevel/a2-mathematics/mathematical-proof/
permalink: /zh/alevel/a2-mathematics/mathematical-proof/
toc_headings: h2
study_page: true
---

[纯数学](/zh/alevel/a2-mathematics/) · MA03 的数学论证

说明一个命题为什么成立，或用反例说明它不成立。

- **学习：**从[命题与符号](#statements-and-symbols)开始，然后比较三种论证方法。
- **作业帮助：**说明假设，论证每一步，最后明确写出你证明的结论。
- **复习：**先完成[练习](#practice)，再打开解答。

来源：[OxfordAQA Mathematics 课程说明，P2 单元，第 19 页（印刷页码）](https://www.oxfordaqa.com/wp-content/uploads/2023/10/oxfordaqa-a-level-mathematics-specification.pdf)。课程要求掌握反证法和用反例否定命题。本页是课程补充内容；配套教材没有单独的证明章节。

**开始前：**你应当掌握因式分解、最简分数以及奇数和偶数的概念。所有例题与练习题均为自编教学题。

## 命题与符号 {#statements-and-symbols}

一个**命题**（statement）必须说明它适用于哪些数值。例如，“$n^2$ 是偶数”并非对每个整数 $n$ 都成立。

| 语言或符号 | 含义 | 例子 |
|---|---|---|
| $=$，等于 | 两个数值相等 | $x^2=4$ 在 $x=2$ 或 $x=-2$ 时成立 |
| $\equiv$，恒等于 | 在所有允许的取值下，两个表达式都相等 | $(x+1)^2\equiv x^2+2x+1$ |
| $P\Rightarrow Q$，推出 | 只要 $P$ 成立，$Q$ 就成立 | $x=2\Rightarrow x^2=4$ |
| $P\Leftarrow Q$，由……推出 | 只要 $Q$ 成立，$P$ 就成立 | $x^2=4\Leftarrow x=2$ |
| $P\Leftrightarrow Q$，当且仅当 | 两个方向都成立 | $x^2=4\Leftrightarrow x=2\text{ or }x=-2$ |

在 $P\Rightarrow Q$ 中，$P$ 是 $Q$ 的**充分条件**（sufficient condition），而 $Q$ 是 $P$ 的**必要条件**（necessary condition）。例如，$x=2$ 是 $x^2=4$ 的充分条件；它不是必要条件，因为 $x=-2$ 也成立。条件 $x^2=4$ 是 $x=2$ 的必要条件，但不是充分条件。

用“因为”“所以”和“因此”等词说明每一步的依据。符号 $\therefore$ 表示“因此”。

## 直接证明（direct proof） {#direct-proof}

从已知假设出发，通过有效的推理得到结论。应使用代数论证涵盖每个允许的取值，而不是只检查几个例子。

### 例题 1 — 奇数的平方 {#example-1--the-square-of-an-odd-integer}

**Question:** Prove that the square of every odd integer is odd.

设 $n=2k+1$，其中 $k$ 是整数。那么

$$n^2=(2k+1)^2=4k^2+4k+1=2(2k^2+2k)+1.$$

由于 $2k^2+2k$ 是整数，该式为奇数，形式是 $2m+1$，其中 $m$ 是整数。因此 $n^2$ 是奇数。

**检查论证：**这个证明涵盖所有奇数，包括负奇数。只计算 $3^2=9$ 并不能证明这个命题。

## 反证法（proof by contradiction） {#proof-by-contradiction}

先假设你要证明的命题不成立。然后证明这个假设会导致**矛盾**（contradiction），也就是两个不可能同时成立的事实。最后说明为什么原命题必然成立。

### 例题 2 — 一个无理数平方根 {#example-2--an-irrational-square-root}

**Question:** Prove that $\sqrt3$ is irrational.

假设 $\sqrt3$ 是有理数（rational number）。那么

$$\sqrt3=\frac pq,$$

其中 $p$ 和 $q$ 是没有大于 $1$ 的公因数的整数，且 $q\ne0$。两边平方得 $p^2=3q^2$，所以 $p^2$ 能被 $3$ 整除。

不能被 $3$ 整除的整数可以写成 $3k+1$ 或 $3k-1$。这样的整数平方的余数为 $1$（除以 $3$ 时）。因此 $p$ 必须能被 $3$ 整除。

令 $p=3r$。那么 $9r^2=3q^2$，所以 $q^2=3r^2$。用同样的论证可知，$q$ 也能被 $3$ 整除。

这样一来，$p$ 和 $q$ 有公因数 $3$，这与我们选择最简分数的假设矛盾。因此 $\sqrt3$ 是无理数（irrational number）。

**常见错误：**只写“$p$ 和 $q$ 都能被 $3$ 整除”，却没有说明这为什么构成矛盾。

## 用反例否定命题 {#disproof-by-counter-example}

**反例**（counter-example）是一个允许取值，它使命题不成立。只要一个反例，就足以否定关于**所有**允许取值的命题。

### 例题 3 — 正乘积 {#example-3--a-positive-product}

**Question:** Disprove: “For all real $a$ and $b$, if $ab>0$, then $a>0$ and $b>0$.”

取 $a=-2$ 和 $b=-3$。那么 $ab=6>0$，但这两个数都是负数。这些允许的取值满足假设，却不满足结论，因此构成反例，否定了该命题。

**常见错误：**使用超出题目范围的数值，或使用不满足假设的数值。几个成立的正数例子不能证明命题对所有实数都成立。

## 练习 {#practice}

建议用时约 **15–20 分钟**。解释每一步；不要只用代入数值检查来作答。

### 第 1 题 — 连续整数 {#question-1--consecutive-integers}

Prove directly that the sum of two consecutive integers is odd.

<details markdown="1">
<summary>提示</summary>

把这两个整数写成 $n$ 和 $n+1$，其中 $n$ 是整数。

</details>

<details markdown="1">
<summary>解答与检查</summary>

两数之和是 $n+(n+1)=2n+1$。对每个整数 $n$，这个数都是奇数。

这个论证包括负整数和零，不需要另外分类讨论。

</details>

### 第 2 题 — 有理数与无理数之和 {#question-2--a-rational-number-plus-an-irrational-number}

Prove by contradiction that $2+\sqrt3$ is irrational. You may use the result of Example 2.

<details markdown="1">
<summary>提示</summary>

假设这个和是有理数。两边减去 $2$ 后能得到什么？

</details>

<details markdown="1">
<summary>解答与检查</summary>

假设 $2+\sqrt3=r$，其中 $r$ 是有理数。那么 $\sqrt3=r-2$ 也是有理数，因为有理数减去整数仍是有理数。这与 $\sqrt3$ 是无理数矛盾。

因此 $2+\sqrt3$ 是无理数。这个矛盾依赖例题 2 关于 $\sqrt3$ 的结论；证明过程并未把待证结论当作前提。

</details>

### 第 3 题 — 判断一个命题 {#question-3--test-a-statement}

Disprove: “For every real $x$, $x^2\geq x$.” Is the statement true if its domain is restricted to integers?

<details markdown="1">
<summary>提示</summary>

试一个介于 $0$ 和 $1$ 之间的数。对于整数输入，考虑 $x(x-1)$。

</details>

<details markdown="1">
<summary>解答与检查</summary>

取 $x=\frac12$，则 $x^2=\frac14<\frac12=x$。因此这是实数范围内的反例。

若 $x$ 是整数，则要么 $x\leq0$，要么 $x\geq1$。两种情况下都有 $x(x-1)\geq0$，因此 $x^2\geq x$。所以把范围限制为整数后，命题成立。

这个实数反例不是整数，因此不能否定整数范围内的命题。

</details>

## 快速参考 {#quick-reference}

| 任务 | 方法 | 检查 |
|---|---|---|
| 直接证明 | 从假设出发，使用代数或已知结论 | 覆盖所有允许的取值 |
| 用反证法证明 | 假设相反命题成立，并推出不可能的结果 | 指明矛盾，并写出结论 |
| 用反例否定命题 | 给出一个不成立的允许情形 | 满足假设，但不满足结论 |
| 使用 $\Leftrightarrow$ | 分别论证两个方向 | 只证明一个推出关系还不能说明等价 |

**你应当能够：**使用数学语言进行说明，完成直接证明和反证法证明，并用反例否定命题。

**学习路径：**[上一节：向量](/zh/alevel/a2-mathematics/vectors/) · [返回纯数学主题索引](/zh/alevel/a2-mathematics/)。
