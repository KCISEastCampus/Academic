---
layout: subjects
title: "指数与对数"
mathjax: true
grade: as
subject: as-mathematics
lang: zh-CN
translation_of: /alevel/as-mathematics/exponentials-logarithms/
permalink: /zh/alevel/as-mathematics/exponentials-logarithms/
toc_headings: h2
reading_layout: true
study_page: true
---

[AS 数学学习路线](/zh/alevel/as-mathematics/#learning-route) · PP1.3 · OxfordAQA 9660 v5.2
{:.lesson-meta}

先读懂解释和完整示范，再拿纸笔做题。提示与解答分别展开。所有题目均为**自拟题**，没有官方分值；保留英文题干，中文帮助你理解和逐步独立表达。

- [指数变化与对数](#l17)

## 指数变化与对数 {#l17}

目标：理解重复乘同一倍数，并在对数有意义时求未知指数。先修：[指数](/zh/alevel/as-mathematics/algebra/#l01-indices)与[图像](/zh/alevel/as-mathematics/algebra/#l05)。

### 对数是在问“要几次方？” {#l17-concept}

每一步都乘同一个倍数，就是指数变化。当 $a>0$ 时，$y=a^x$ 始终为正，经过 $(0,1)$。倍数大于 1 就增长，介于 0 和 1 之间就衰减，等于 1 就不变。

要找未知指数，可以反过来问：底数的几次方得到这个输出？这个答案就是对数。例如 $2^3=8$，也就是 $\log_2 8=3$。一般写成：

$$\begin{gathered}
a^x=b\ \Longleftrightarrow\ x=\log_a b=\frac{\log b}{\log a},\\
a>0,\quad a\ne1,\quad b>0.
\end{gathered}$$

对数里面的数叫真数（argument），必须为正。对正数 $u,v$，运算律为 $\log_a(uv)=\log_a u+\log_a v$、$\log_a(u/v)=\log_a u-\log_a v$、$\log_a(u^k)=k\log_a u$。乘积对应指数相加，但加法没有类似拆分规则。合并对数前，先记录原来每个真数的正数条件；计算全程用相同底数。这里不要求指数或对数的微积分。

<div class="worked-example" markdown="1">

### 完整示范 {#l17-worked}

**Question:** Solve $3\cdot2^t=15$ and give $t$ to 3 decimal places. Interpret the solution as a point on a graph.

先除去前面的 3，得到 $2^t=5$。因为 $2^2=4$、$2^3=8$，t 应在 2 与 3 之间。对数用来找出这个指数的精确值：

$$t=\frac{\log5}{\log2}\approx2.322\quad\text{(3 decimal places)}.$$

图像 $y=3\cdot2^t$ 一直上升，与 $y=15$ 只相交一次。代入未舍入的对数比会精确得到 15；代入舍入值只会得到附近的数，所以小数前应写近似号。

</div>

<div class="lesson-check" markdown="1">

### 带支架尝试 {#l17-scaffold}

**Question:** Solve $\log_2(x-1)=3$ and explain the admissible values of $x$ before solving.

<details markdown="1">
<summary>提示</summary>

先记录真数为正，再转为指数式。

</details>

<details markdown="1">
<summary>解答与核验</summary>

条件为 $x>1$。由 $x-1=2^3=8$ 得 $x=9$，符合条件。

</details>

</div>

<div class="lesson-check" markdown="1">

### 独立任务 {#l17-independent}

**Question:** Find all real solutions of $\log_2(x-1)+\log_2(x-3)=3$. Show why any rejected algebraic value is not a solution.

<details markdown="1">
<summary>提示</summary>

合并为乘积求解后，返回原来两个真数逐一检查。

</details>

<details markdown="1">
<summary>解答与核验</summary>

原条件要求 $x>3$。合并得 $(x-1)(x-3)=8$，所以 $x^2-4x-5=0$，候选 $5,-1$。只有 $x=5$ 允许；−1 使原来两个真数均为负。核验：$\log_2 4+\log_2 2=2+1=3$。

</details>

</div>

### 诊断与修正 {#l17-diagnosis}

比较 $\log_2(1+1)$ 与 $\log_2 1+\log_2 1$ 即可否定错误的拆和法则。乘积为正还不够，原来各个对数的真数必须分别为正。

错误保留候选值时，回看[对数真数为正的条件](#l17-concept)，再做[新条件检查题](#l17-retry-domain)。指数变化出错，回看[求指数示范](#l17-worked)，再做[衰减题](#l17-retry)。

<div class="lesson-check" markdown="1">

### 再尝试 {#l17-retry}

**Question:** A constructed decay model is $N=80(1/2)^t$. Find the time at which $N=10$ and describe the graph’s behaviour as $t$ increases.

<details markdown="1">
<summary>提示</summary>

先除以初始量，再比较幂。

</details>

<details markdown="1">
<summary>解答与核验</summary>

$(1/2)^t=1/8=(1/2)^3$，故 $t=3$。图像递减、始终为正，随时间增长趋于零。

</details>

</div>

<div class="lesson-check" markdown="1">

### 检查刚修正的想法 {#l17-retry-domain}

**Question:** Find all real solutions of $\log_3(x+1)+\log_3(x-1)=1$. Explain any rejection.

<details markdown="1">
<summary>提示</summary>

合并对数之前，先分别写出原来两个条件。

</details>

<details markdown="1">
<summary>解答与检查</summary>

原来的真数要求 $x+1>0$ 且 $x-1>0$，合起来是 $x>1$。合并后得 $(x+1)(x-1)=3$，即 $x^2=4$。候选值为 $2,-2$，只有 $x=2$ 合法。代入 2，得到 $\log_3 3+\log_3 1=1+0=1$；代入 −2，原来的对数在实数范围内没有定义。

</details>

</div>

## 学完之后 {#next-step}

收起解答，检查自己能否独立完成本课各组的再尝试，并解释方法与适用条件。仍有困难时回看对应示范；完成后继续下一课。

[上一课：三角函数](/zh/alevel/as-mathematics/trigonometry/) · [课程目录](/zh/alevel/as-mathematics/#learning-route) · [下一课：概率](/zh/alevel/as-mathematics/probability/)

学完这条路线后，做[综合题](/zh/alevel/as-mathematics/#mixed-further)。在之后一次学习中，关掉解答完成[回顾题](/zh/alevel/as-mathematics/#later-further)。

## 来源与范围 {#sources}

<details class="lesson-notes" markdown="1">
<summary>查看范围与评分材料</summary>

按[当前 9660 官方大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf)组织。配套评分材料用于核对作答证据；本页题目全部另行自拟，不能称为官方原题或官方评分标准。

Specification §3.2 PP1.3; algebraic evidence principles from paired MA01/MA02 January 2025 marking material.

[MA01 2025 年 1 月原卷](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-question-paper.pdf) · [配套 MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-mark-scheme.pdf) · [MA02 2025 年 1 月原卷](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-question-paper.pdf) · [配套 MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-mark-scheme.pdf)

完成标准是能独立解释方法与检查条件，不是看完解答。未经过学生试用，不据此宣称学习效果已验证。

</details>

{% include exam_topic_practice.html %}
