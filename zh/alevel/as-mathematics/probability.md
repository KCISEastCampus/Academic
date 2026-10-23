---
layout: subjects
title: "概率与条件"
mathjax: true
grade: as
subject: as-mathematics
lang: zh-CN
translation_of: /alevel/as-mathematics/probability/
permalink: /zh/alevel/as-mathematics/probability/
toc_headings: h2, h3
study_page: true
---

[AS 数学学习路线](/zh/alevel/as-mathematics/#learning-route) · S1.1 · OxfordAQA 9660 v5.2

先用纸笔尝试题目，再按需打开提示；完成后用解答核对方法、条件与结果。所有题目均为**自拟题**，没有官方分值。英文题干、公式、数值与英文页一致；中文解释帮助你逐步独立用英文作答。

- [L18 事件、表格与改变的分母](#l18)

## L18 · 事件、表格与改变的分母 {#l18}

目标：定义随机试验，使用条件概率，并区分独立与互斥。先修：分数与比例。

样本空间（sample space）列出可能结果，事件是结果的子集。等可能时用有利结果数除以总数；观测的相对频率用于估计概率，不必恰等于理论概率。加法与条件概率法则为

$$P(A\cup B)=P(A)+P(B)-P(A\cap B),\qquad P(A\mid B)=\frac{P(A\cap B)}{P(B)}\quad(P(B)>0).$$

补事件有 $P(A')=1-P(A)$。互斥指 $P(A\cap B)=0$，独立指 $P(A\cap B)=P(A)P(B)$。条件概率乘条件事件概率可恢复交集。交集不能大于任一边缘概率，并集不能超过 1。二向表有助于看清分母；树图、Venn 图允许使用但非强制。

### 示范与推理 {#l18-worked}

**Question:** In a constructed group of 100 equally likely records, 20 belong to both A and B, 20 to A only, 30 to B only, and 30 to neither. Find $P(A\mid B)$ and decide whether A and B are independent or mutually exclusive.

二向表为

| | B | Not B | Total |
| --- | --- | --- | --- |
| A | 20 | 20 | 40 |
| Not A | 30 | 30 | 60 |
| Total | 50 | 50 | 100 |

因此 $P(A\mid B)=20/50=0.4$。又 $P(A\cap B)=0.2=0.4(0.5)=P(A)P(B)$，所以独立。交集有 20 条记录，故不互斥。并集为 $0.4+0.5-0.2=0.7$。

### 带支架尝试 {#l18-scaffold}

**Question:** Given $P(A)=0.3$, $P(B\mid A)=0.6$ and $P(B)=0.4$, find the intersection and union probabilities.

<details markdown="1">
<summary>提示</summary>

这里条件概率表示在 A 中占的比例。

</details>

<details markdown="1">
<summary>解答与核验</summary>

$P(A\cap B)=0.3(0.6)=0.18$，$P(A\cup B)=0.3+0.4-0.18=0.52$。

</details>

### 独立任务 {#l18-independent}

**Question:** Suppose $P(A)=0.4$, $P(B)=0.7$, and $P(A\mid B)=0.5$. Find the probability of neither event and decide whether the events are independent. A second report gives the same marginal probabilities but intersection 0.45. Can the second report describe a probability model?

<details markdown="1">
<summary>提示</summary>

先恢复交集，同时检查概率边界，而不仅仅代公式。

</details>

<details markdown="1">
<summary>解答与核验</summary>

第一种情况交集为 $0.5(0.7)=0.35$，故并集 $0.75$、两者皆非的概率 $0.25$。由于 $0.35\ne0.4(0.7)=0.28$，不独立。第二份报告不可能，因为 $0.45>P(A)=0.4$。

</details>

### 诊断与修正 {#l18-diagnosis}

条件概率仍用全组当分母，等于忽略已知条件。独立应检验乘积，不是没有重叠。仓库存储的 MA02 2025 年 1 月 Q7(b) 边缘与交集数据不相容；本课使用另行自拟的自洽数据，不悄悄修改官方题目身份。

### 再尝试 {#l18-retry}

**Question:** Events C and D are mutually exclusive with probabilities 0.2 and 0.3. Find $P(C\mid D)$ and decide whether they are independent.

<details markdown="1">
<summary>提示</summary>

把零交集与两个正边缘概率的乘积比较。

</details>

<details markdown="1">
<summary>解答与核验</summary>

$P(C\mid D)=0/0.3=0$。由于 $0\ne0.2(0.3)=0.06$，二者不独立。

</details>

## 学完之后 {#next-step}

收起解答，检查自己能否独立完成本课各组的再尝试，并解释方法与适用条件。仍有困难时回看对应示范；完成后继续下一课。

[上一课：指数与对数](/zh/alevel/as-mathematics/exponentials-logarithms/) · [课程目录](/zh/alevel/as-mathematics/#learning-route) · [下一课：离散随机变量](/zh/alevel/as-mathematics/random-variables/)

## 来源与范围 {#sources}

按[当前 9660 官方大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf)组织。配套评分材料用于核对作答证据；本页题目全部另行自拟，不能称为官方原题或官方评分标准。

Specification §3.2 S1.1; MA02 January 2025 Q7, QP pp14–15, MS p14. Its inconsistent part (b) data are not reused as a model.

[MA01 2025 年 1 月原卷](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-question-paper.pdf) · [配套 MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-mark-scheme.pdf) · [MA02 2025 年 1 月原卷](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-question-paper.pdf) · [配套 MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-mark-scheme.pdf)

完成标准是能独立解释方法与检查条件，不是看完解答。未经过学生试用，不据此宣称学习效果已验证。
