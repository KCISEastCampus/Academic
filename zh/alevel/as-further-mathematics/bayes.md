---
title: "贝叶斯：改变样本空间"
layout: subjects
mathjax: true
grade: as
subject: as-further-mathematics
lang: zh-CN
translation_of: /alevel/as-further-mathematics/bayes/
permalink: /zh/alevel/as-further-mathematics/bayes/
toc_headings: h2, h3
study_page: true
---

[AS 高数课程](/zh/alevel/as-further-mathematics/) · S1 · FS1.1

本页示范、补步骤、独立任务及再尝试均为**自拟题（self-written）**，没有官方分值。先写方法与理由，再分别展开提示和解答。题干保留英文，中文说明帮助建立推理。

## 观察结果后什么改变了？ {#model}

**开始：**对概率为正的事件 B，解释 $P(A\mid B)=P(A\cap B)/P(B)$。**目标：**构造两或三来源树，分清条件方向并求后验。来源须互斥且穷尽所有可能；不能假定来源与观察结果独立。

$$P(B)=\sum_{i=1}^3P(A_i)P(B\mid A_i),\qquad
P(A_i\mid B)=\frac{P(A_i)P(B\mid A_i)}{P(B)}\quad(P(B)>0).$$

沿路径相乘得联合概率，把所有通向 B 的路径相加得总概率；然后把样本空间缩到 B 内重新归一化。

## 示范：重建相关总体 {#demonstration}

**Demonstration (self-written):** Sources A, B, C supply respectively 0.5, 0.3, 0.2 of items, with defect probabilities 0.02, 0.04, 0.10. An item is selected at random from the combined output. Given it is defective, find its source-C probability.

![Three-source probability tree: A 0.5, B 0.3, C 0.2; each splits to defective and not defective with probabilities 0.02/0.98, 0.04/0.96, 0.10/0.90. Leaf joint probabilities are shown.](/alevel/as-further-mathematics/diagrams/bayes.svg)

$$P(D)=0.5(0.02)+0.3(0.04)+0.2(0.10)=0.042;\qquad P(C\mid D)=\frac{0.02}{0.042}=\frac{10}{21}.$$

C 只占总产量的 20%，却占更大比例的次品。新分母是所有次品，而不是所有 C 产品。若构造 10,000 件总体，三来源次品数为 100、120、200，比例同样为 $200/420$。

## 补步骤与独立选法 {#practice}

**Scaffold (self-written):** Complete the not-defective leaves of the same tree and calculate $P(C\mid D^c)$.

<details markdown="1"><summary>补步骤核对</summary>

$$P(A\cap D^c)=0.49,\quad P(B\cap D^c)=0.288,\quad P(C\cap D^c)=0.18;\qquad P(C\mid D^c)=\frac{0.18}{0.958}=\frac{90}{479}.$$

</details>

**Independent task (self-written):** A randomly selected sample was processed by laboratory A with probability 0.6 or B with probability 0.4. Pass probabilities are 0.9 for A and 0.75 for B. Draw and label a complete probability tree. A sample fails; find the probability B processed it, and explain why 0.25 is not the answer.

<details markdown="1"><summary>提示</summary>

已知 0.25 的条件是 B，问题的条件却是失败；分母要包含所有失败路径。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$P(F\mid A)=0.1,\quad P(F\mid B)=0.25;\quad P(F)=0.6(0.1)+0.4(0.25)=0.16;\qquad P(B\mid F)=\frac{0.10}{0.16}=\frac58.$$

通过路径的联合概率为 0.54、0.30；四个叶子合计为 1。$P(F\mid B)$ 与 $P(B\mid F)$ 分母不同。

</details>

## 诊断与再尝试 {#retry}

后验大于 1 表明分子或分母不一致；分母只有一条路径时，应重新圈出观察事件的整个样本空间。

**Retry (self-written):** In the laboratory task, a sample passes. Find the probability it came from A.

<details markdown="1"><summary>再尝试核对</summary>

$$P(A\mid F^c)=\frac{0.54}{0.54+0.30}=\frac9{14}.$$

</details>

## 来源与范围 {#sources}

本课范围按 9665 v5.2；以下已读原题及配套评分材料用于设计作答证据，本页练习不是原题复制或官方评分标准。

- [OxfordAQA 9665 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf), FS1.1.
- FM02 June 2024 Q6; QP p.13, MS p.12. [FM02 June 2024 QP](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-question-paper.pdf) · [Final MS](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-mark-scheme.pdf).

[上一课](/zh/alevel/as-further-mathematics/euler-method/) · [课程路线](/zh/alevel/as-further-mathematics/#learning-route) · [下一课](/zh/alevel/as-further-mathematics/discrete-uniform/)
