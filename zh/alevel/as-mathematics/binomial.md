---
layout: subjects
title: "伯努利与二项分布"
mathjax: true
grade: as
subject: as-mathematics
lang: zh-CN
translation_of: /alevel/as-mathematics/binomial/
permalink: /zh/alevel/as-mathematics/binomial/
toc_headings: h2
reading_layout: true
study_page: true
---

[AS 数学学习路线](/zh/alevel/as-mathematics/#learning-route) · S1.3 · OxfordAQA 9660 v5.2
{:.lesson-meta}

先读懂解释和完整示范，再拿纸笔做题。提示与解答分别展开。所有题目均为**自拟题**，没有官方分值；保留英文题干，中文帮助你理解和逐步独立表达。

- [用二项模型数成功次数](#l21)

## 用二项模型数成功次数 {#l21}

目标：解释二项分布的均值方差，判断模型，并读懂整数范围。先修：[二项式系数](/zh/alevel/as-mathematics/sequences/#l13)、[概率](/zh/alevel/as-mathematics/probability/#l18)与[独立和](/zh/alevel/as-mathematics/random-variables/#l20)。

### 数固定次数里成功了几次 {#l21-concept}

把一种结果叫“成功”，不一定表示它是好事。伯努利变量 $B$ 用 1 记成功、0 记失败，成功概率是 $p$。按概率求平均得到：

$$\begin{aligned}
E(B)&=0(1-p)+1p=p,\\
E(B^2)&=p,\\
\operatorname{Var}(B)&=p-p^2=p(1-p).
\end{aligned}$$

现在做 $n$ 次独立尝试，每次成功概率都是 $p$。把每次的零或一相加，成功次数就是 $X=\sum_{i=1}^n B_i$。由独立相加规则得到：

$$\begin{aligned}
E(X)&=\sum_{i=1}^n p=np,\\
\operatorname{Var}(X)&=\sum_{i=1}^n p(1-p)\\
&=np(1-p).
\end{aligned}$$

恰好成功 $r$ 次时，每一种指定顺序的概率是 $p^r(1-p)^{n-r}$；这样的顺序有 $\binom nr$ 种，所以 $P(X=r)=\binom nr p^r(1-p)^{n-r}$，标准差是 $\sqrt{np(1-p)}$。

用 $X\sim\mathrm{Bin}(n,p)$ 表示 X 服从这个成功次数模型，括号里的两个数是次数和成功概率。四个条件都要检查：每次只有两类结果、次数固定、各次独立、成功概率不变。不放回抽取可能破坏后两个条件。算尾部概率前，先列包含的整数：“超过一次”从二开始，“至少一次”从一开始。

<div class="worked-example" markdown="1">

### 完整示范 {#l21-worked}

**Question:** A constructed model has $X\sim\mathrm{Bin}(5,0.2)$. Find $P(X=2)$, $P(X>1)$, the mean and SD.

恰好两次成功，要先选择五次中的哪两次成功，共有 $\binom52=10$ 种选法，每一种次序的概率相同：

$$P(X=2)=10(0.2)^2(0.8)^3=0.2048.$$

“多于 1 次”包括 2、3、4、5。用总概率减去不要的 0 次和 1 次更短：

$$\begin{aligned}
P(X>1)&=1-P(X=0)-P(X=1)\\
&=1-(0.8)^5-5(0.2)(0.8)^4\\
&=0.26272.
\end{aligned}$$

平均值为 $np=5(0.2)=1$，方差为 $np(1-p)=0.8$，所以标准差为 $\sqrt{0.8}$。累积概率 $F(1)=P(X\le1)=0.73728$ 也能通过 $1-F(1)$ 得到同一答案。如果用 $F(2)$，就把题目需要保留的 2 次也减掉了。

</div>

<div class="lesson-check" markdown="1">

### 带支架尝试 {#l21-scaffold}

**Question:** For this X, find $P(1\le X\le3)$ using cumulative notation, and evaluate it.

可以使用下表。它由题目模型计算，是本题自拟数据表，并非抄录某版官方表册。每一项表示 $F(r)=P(X\le r)$。

| r | 0 | 1 | 2 | 3 | 4 | 5 |
| --- | --- | --- | --- | --- | --- | --- |
| F(r) | 0.32768 | 0.73728 | 0.94208 | 0.99328 | 0.99968 | 1 |

<details markdown="1">
<summary>提示</summary>

减去下端点以下的值，保留端点本身。

</details>

<details markdown="1">
<summary>解答与核验</summary>

$P(1\le X\le3)=F(3)-F(0)=0.99328-0.32768=0.6656$。这里累计值由给定分布计算，并非声称实际查阅了某一版公式册表格。

</details>

</div>

<div class="lesson-check" markdown="1">

### 独立任务 {#l21-independent}

**Question:** A binomial variable has mean 3 and variance 2.4. Find n and p, derive its variance from independent Bernoulli indicators, and find $P(X\ge1)$. Would the same model automatically apply to 15 draws without replacement from 75 objects of which 15 are successes?

<details markdown="1">
<summary>提示</summary>

先用方差除以均值，再求次数，并检查抽样方案是否独立。

</details>

<details markdown="1">
<summary>解答与核验</summary>

$1-p=2.4/3=0.8$，得 $p=0.2,n=15$。每个指标变量方差为 $p-p^2=0.16$，由独立性相加得 $15(0.16)=2.4$。尾概率为 $1-(0.8)^{15}\approx0.964816$。无放回时成功概率会随先前结果改变，不能自动使用二项模型。

</details>

</div>

### 诊断与修正 {#l21-diagnosis}

先列事件包含哪些整数，再取补集。仅凭均值不能同时确定 n 与 p；还需方差关系与模型条件。本组不需要正态、泊松近似或假设检验。

尾部边界出错时，回看[哪些整数被排除](#l21-worked)，再做[尾部重试](#l21-retry)。模型条件出错时，回看[试验条件](#l21-concept)，再比较[两种抽样办法](#l21-retry-model)。

<div class="lesson-check" markdown="1">

### 再尝试 {#l21-retry}

**Question:** For $Y\sim\mathrm{Bin}(4,1/2)$, find $P(Y\ge3)$ and the variance. State the excluded integers in the complementary event.

<details markdown="1">
<summary>提示</summary>

至少三次包括三与四。

</details>

<details markdown="1">
<summary>解答与核验</summary>

$P(Y\ge3)=(4+1)/16=5/16$。补事件包含 $0,1,2$，方差为 $4(1/2)(1/2)=1$。

</details>

</div>

<div class="lesson-check" markdown="1">

### 再试一题 {#l21-retry-model}

**Question:** A bag contains 3 red and 2 blue counters. Three counters are drawn without replacement, and X counts the red counters. Assess the claim that X has a binomial distribution with 3 trials and success probability 3/5. If each counter is instead replaced and the bag mixed before an independent next draw, specify the model and find the probability of exactly two reds.

<details markdown="1">
<summary>提示</summary>

比较第一次抽到红色的概率与已经拿走一个红色后再抽到红色的概率。

</details>

<details markdown="1">
<summary>解答与检查</summary>

不放回时，第一次抽红色的概率是 $3/5$，但若已经抽走一个红色，下次就是 $2/4=1/2$。各次抽取相互影响，成功概率也改变，因此不能用题目提出的二项模型。

改为放回且各次独立后，$X\sim\mathrm{Bin}(3,3/5)$。所以 $P(X=2)=\binom32(3/5)^2(2/5)=54/125$。放回保证每次概率相同，改变后的题目还明确给出独立条件。

</details>

</div>

## 学完之后 {#next-step}

收起解答，检查自己能否独立完成本课各组的再尝试，并解释方法与适用条件。仍有困难时回看对应示范；完成后继续下一课。

[上一课：离散随机变量](/zh/alevel/as-mathematics/random-variables/) · [课程目录](/zh/alevel/as-mathematics/#learning-route) · [下一课：匀加速直线运动](/zh/alevel/as-mathematics/constant-acceleration/)

学完这条路线后，做[综合题](/zh/alevel/as-mathematics/#mixed-statistics)。在之后一次学习中，关掉解答完成[回顾题](/zh/alevel/as-mathematics/#later-statistics)。

## 来源与范围 {#sources}

<details class="lesson-notes" markdown="1">
<summary>查看范围与评分材料</summary>

按[当前 9660 官方大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf)组织。配套评分材料用于核对作答证据；本页题目全部另行自拟，不能称为官方原题或官方评分标准。

Specification §3.2 S1.3; MA02 January 2025 Q6, QP pp12–13, MS p13.

[MA01 2025 年 1 月原卷](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-question-paper.pdf) · [配套 MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-mark-scheme.pdf) · [MA02 2025 年 1 月原卷](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-question-paper.pdf) · [配套 MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-mark-scheme.pdf)

完成标准是能独立解释方法与检查条件，不是看完解答。未经过学生试用，不据此宣称学习效果已验证。

</details>

{% include exam_topic_practice.html %}
