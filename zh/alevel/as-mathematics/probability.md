---
layout: subjects
title: "概率与条件"
mathjax: true
grade: as
subject: as-mathematics
lang: zh-CN
translation_of: /alevel/as-mathematics/probability/
permalink: /zh/alevel/as-mathematics/probability/
toc_headings: h2
reading_layout: true
study_page: true
---

[AS 数学学习路线](/zh/alevel/as-mathematics/#learning-route) · S1.1 · OxfordAQA 9660 v5.2
{:.lesson-meta}

先读懂解释和完整示范，再拿纸笔做题。提示与解答分别展开。所有题目均为**自拟题**，没有官方分值；保留英文题干，中文帮助你理解和逐步独立表达。

- [事件与条件概率](#l18)

## 事件与条件概率 {#l18}

目标：计算条件概率，并分清独立与互斥。先修：分数和比例。

### “已知 B”会改变我们数的群体 {#l18-concept}

一次随机试验有一组可能结果，叫样本空间（sample space）；事件是其中的一部分结果。结果等可能时，用符合条件的个数除以总个数。实际观察到的频率只是估计，不一定恰好等于理论概率。

“已知 B 时 A 的概率”表示现在只看 B 里面的结果，再问其中多少比例也属于 A：

$$P(A\cup B)=P(A)+P(B)-P(A\cap B),\qquad P(A\mid B)=\frac{P(A\cap B)}{P(B)}\quad(P(B)>0).$$

并集表示至少一个事件发生，也包括重叠；两部分相加会把交集数两遍，所以减回一次。补事件满足 $P(A')=1-P(A)$。

互斥是“不能同时发生”：$P(A\cap B)=0$。独立是“知道一个发生，不改变另一个的概率”：$P(A\cap B)=P(A)P(B)$。这不是同一个问题。重叠不能比任何一个事件还大，并集不能大于 1。表格、树图或韦恩图都可以帮助判断，分母到底应当看哪个群体。

<div class="worked-example" markdown="1">

### 完整示范 {#l18-worked}

**Question:** In a constructed group of 100 equally likely records, 20 belong to both A and B, 20 to A only, 30 to B only, and 30 to neither. Find $P(A\mid B)$ and decide whether A and B are independent or mutually exclusive.

二向表为

| | B | Not B | Total |
| --- | --- | --- | --- |
| A | 20 | 20 | 40 |
| Not A | 30 | 30 | 60 |
| Total | 50 | 50 | 100 |

因此 $P(A\mid B)=20/50=0.4$。又 $P(A\cap B)=0.2=0.4(0.5)=P(A)P(B)$，所以独立。交集有 20 条记录，故不互斥。并集为 $0.4+0.5-0.2=0.7$。

</div>

<div class="lesson-check" markdown="1">

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

</div>

<div class="lesson-check" markdown="1">

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

</div>

### 诊断与修正 {#l18-diagnosis}

条件概率仍用全组当分母，等于忽略已知条件。独立应检验乘积，不是没有重叠。仓库存储的 MA02 2025 年 1 月 Q7(b) 边缘与交集数据不相容；本课使用另行自拟的自洽数据，不悄悄修改官方题目身份。

条件概率分母出错时，重建[双向表](#l18-worked)，再做[交集非零的新题](#l18-retry-conditional)。若混淆互斥与独立，做[事件比较重试](#l18-retry)。

<div class="lesson-check" markdown="1">

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

</div>

<div class="lesson-check" markdown="1">

### 再试一题 {#l18-retry-conditional}

**Question:** In a constructed group of 50 equally likely records, 22 belong to A, 20 belong to B and 8 belong to both. Find the probability of A given B and of B given A. Decide whether A and B are independent.

<details markdown="1">
<summary>提示</summary>

每次先圈定“已经知道属于”的那一组，再选分母。

</details>

<details markdown="1">
<summary>解答与检查</summary>

已知属于 B，就只看 B 中的 20 条记录，因此 $P(A\mid B)=8/20=2/5$。已知属于 A 时，参照群体改成 A 中的 22 条，因此 $P(B\mid A)=8/22=4/11$。

两事件不独立，因为 $P(A\mid B)=2/5\ne22/50=P(A)$。数据也自洽：仅 A 有 14 条，仅 B 有 12 条，两者都有 8 条，两者都没有 16 条，合计 50 条。若两次都用 50 作分母，算的就不是题目要的条件概率。

</details>

</div>

## 学完之后 {#next-step}

收起解答，检查自己能否独立完成本课各组的再尝试，并解释方法与适用条件。仍有困难时回看对应示范；完成后继续下一课。

[上一课：指数与对数](/zh/alevel/as-mathematics/exponentials-logarithms/) · [课程目录](/zh/alevel/as-mathematics/#learning-route) · [下一课：离散随机变量](/zh/alevel/as-mathematics/random-variables/)

学完这条路线后，做[综合题](/zh/alevel/as-mathematics/#mixed-statistics)。在之后一次学习中，关掉解答完成[回顾题](/zh/alevel/as-mathematics/#later-statistics)。

## 来源与范围 {#sources}

<details class="lesson-notes" markdown="1">
<summary>查看范围与评分材料</summary>

按[当前 9660 官方大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf)组织。配套评分材料用于核对作答证据；本页题目全部另行自拟，不能称为官方原题或官方评分标准。

Specification §3.2 S1.1; MA02 January 2025 Q7, QP pp14–15, MS p14. Its inconsistent part (b) data are not reused as a model.

[MA01 2025 年 1 月原卷](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-question-paper.pdf) · [配套 MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-mark-scheme.pdf) · [MA02 2025 年 1 月原卷](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-question-paper.pdf) · [配套 MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-mark-scheme.pdf)

完成标准是能独立解释方法与检查条件，不是看完解答。未经过学生试用，不据此宣称学习效果已验证。

</details>
