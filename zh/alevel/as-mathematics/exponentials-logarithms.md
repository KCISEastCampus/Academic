---
layout: subjects
title: "指数与对数"
mathjax: true
grade: as
subject: as-mathematics
lang: zh-CN
translation_of: /alevel/as-mathematics/exponentials-logarithms/
permalink: /zh/alevel/as-mathematics/exponentials-logarithms/
toc_headings: h2, h3
study_page: true
---

[AS 数学学习路线](/zh/alevel/as-mathematics/#learning-route) · PP1.3 · OxfordAQA 9660 v5.2

先用纸笔尝试题目，再按需打开提示；完成后用解答核对方法、条件与结果。所有题目均为**自拟题**，没有官方分值。英文题干、公式、数值与英文页一致；中文解释帮助你逐步独立用英文作答。

- [L17 指数变化与对数方程](#l17)

## L17 · 指数变化与对数方程 {#l17}

目标：解释增长、衰减，并在检查对数条件后求未知指数。先修：L01、L05。

当 $a>0$ 时，$y=a^x$ 过 $(0,1)$ 且始终为正；$a>1$ 时递增，$0<a<1$ 时递减，$a=1$ 时为常数。对数底还须不等于 1，真数须为正：

$$a^x=b\ \Longleftrightarrow\ x=\log_a b=\frac{\log b}{\log a}\quad(a>0,\ a\ne1,\ b>0).$$

对正数 $u,v$，$\log_a(uv)=\log_a u+\log_a v$、$\log_a(u/v)=\log_a u-\log_a v$、$\log_a(u^k)=k\log_a u$。不存在把和直接拆开的对应法则。使用时须保持同底；本组不要求指数、对数微积分。

### 示范与推理 {#l17-worked}

**Question:** Solve $3\cdot2^t=15$ and give $t$ to 3 decimal places. Interpret the solution as a point on a graph.

$2^t=5$ 得 $t=\log5/\log2=2.322$（3dp）。递增图像 $y=3\cdot2^t$ 与水平线 $y=15$ 只有一个交点。代入未舍入的对数比值恰得 15，代入舍入值则得到接近 15 的数。

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

### 诊断与修正 {#l17-diagnosis}

比较 $\log_2(1+1)$ 与 $\log_2 1+\log_2 1$ 即可否定错误的拆和法则。乘积为正还不够，原来各个对数的真数必须分别为正。

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

## 学完之后 {#next-step}

收起解答，检查自己能否独立完成本课各组的再尝试，并解释方法与适用条件。仍有困难时回看对应示范；完成后继续下一课。

[上一课：三角函数](/zh/alevel/as-mathematics/trigonometry/) · [课程目录](/zh/alevel/as-mathematics/#learning-route) · [下一课：概率](/zh/alevel/as-mathematics/probability/)

## 来源与范围 {#sources}

按[当前 9660 官方大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf)组织。配套评分材料用于核对作答证据；本页题目全部另行自拟，不能称为官方原题或官方评分标准。

Specification §3.2 PP1.3; algebraic evidence principles from paired MA01/MA02 January 2025 marking material.

[MA01 2025 年 1 月原卷](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-question-paper.pdf) · [配套 MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-mark-scheme.pdf) · [MA02 2025 年 1 月原卷](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-question-paper.pdf) · [配套 MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-mark-scheme.pdf)

完成标准是能独立解释方法与检查条件，不是看完解答。未经过学生试用，不据此宣称学习效果已验证。
