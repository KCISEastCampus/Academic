---
title: "几何分布与矩的推导"
layout: subjects
mathjax: true
grade: as
subject: as-further-mathematics
lang: zh-CN
translation_of: /alevel/as-further-mathematics/geometric-distribution/
permalink: /zh/alevel/as-further-mathematics/geometric-distribution/
toc_headings: h2, h3
study_page: true
---

[AS 高数课程](/zh/alevel/as-further-mathematics/) · S3 · FS1.3

本页示范、补步骤、独立任务及再尝试均为**自拟题（self-written）**，没有官方分值。先写方法与理由，再分别展开提示和解答。题干保留英文，中文说明帮助建立推理。

## k 计数的究竟是什么？ {#model}

**开始：**描述“失败、失败、成功”序列。**目标：**判断几何模型是否适用，处理尾概率并推导均值、方差。要求试验独立且每次成功概率相同，$0<p\le1$。设 $q=1-p$，X 计**直到首次成功且包括该次的试验次数**，从 1 开始。

$$P(X=k)=q^{k-1}p\quad(k=1,2,\ldots);\qquad P(X>k)=q^k,\quad P(X\le k)=1-q^k\quad(k\ge0\text{ integer}).$$

指数数的是失败次数。若 Y 数成功前失败次数，则 $Y=X-1$ 从 0 开始，$P(Y=j)=q^jp$。不放回抽样一般会改变概率，不符合本模型。$p=1$ 时首次立即成功，$X=1$。

## 推导：均值与方差 {#demonstration}

当 $0<p<1$ 时，$0<q<1$。在收敛半径内对等比级数求导：

$$\sum_{k=0}^\infty q^k=\frac1{1-q},\quad\sum_{k=1}^\infty kq^{k-1}=\frac1{(1-q)^2},\quad\sum_{k=2}^\infty k(k-1)q^{k-2}=\frac2{(1-q)^3}.$$

$$E(X)=p\sum_{k=1}^\infty kq^{k-1}=\frac1p;\qquad E[X(X-1)]=pq\sum_{k=2}^\infty k(k-1)q^{k-2}=\frac{2q}{p^2}.$$

$$\operatorname{Var}(X)=E[X(X-1)]+E(X)-[E(X)]^2=\frac{2q}{p^2}+\frac1p-\frac1{p^2}=\frac{q}{p^2}.$$

$p=1$ 时直接由常量 X 得均值 1、方差 0，与公式一致。Y 均值为 $q/p$，方差不变；几何衰减保证这些矩有限。

**Demonstration (self-written):** For $p=0.25$, find $P(X=3)$, $P(X>4)$ and the moments.

$$P(X=3)=0.75^2(0.25)=0.140625,\quad P(X>4)=0.75^4=0.31640625;\qquad E(X)=4,\ \operatorname{Var}(X)=12.$$

## 补步骤与独立选法 {#practice}

**Scaffold (self-written):** Explain why $P(X=1)=p$, and fill the missing exponent in $P(X=5)=q^{\square}p$.

<details markdown="1"><summary>补步骤核对</summary>

第 1 次成功前没有失败；第 5 次首次成功前有四次失败，指数为 4。

</details>

**Independent task (self-written):** A geometric X satisfies $P(X>2)=0.36$. Find p, $P(X=4\mid X>2)$, $E(X)$ and $\operatorname{Var}(X)$. Would the same model apply to drawing cards without replacement until a red card appears? Explain.

<details markdown="1"><summary>提示</summary>

q 取非负平方根；先明确条件事件再除概率。抽牌情境要检查独立性和概率是否固定。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$q^2=0.36\Rightarrow q=0.6,\ p=0.4;\qquad P(X=4\mid X>2)=\frac{q^3p}{q^2}=qp=0.24.$$

$$E(X)=2.5,\qquad\operatorname{Var}(X)=3.75.$$

不放回抽牌既非独立试验，也非固定概率；若要用几何分布，需要放回或另有明确独立试验假设。

</details>

## 诊断与再尝试 {#retry}

差一位通常来自混淆试验次数与失败次数；先写最短可能序列，再决定指数。

**Retry (self-written):** For independent trials with $p=0.4$, let Y count failures before success. Find $P(Y=0)$, $E(Y)$ and $\operatorname{Var}(Y)$.

<details markdown="1"><summary>再尝试核对</summary>

$$P(Y=0)=0.4,\qquad E(Y)=1.5,\qquad\operatorname{Var}(Y)=3.75.$$

</details>

## 来源与范围 {#sources}

本课范围按 9665 v5.2；以下已读原题及配套评分材料用于设计作答证据，本页练习不是原题复制或官方评分标准。

- [OxfordAQA 9665 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf), FS1.3.
- FM02 June 2024 Q8(a); QP p.16, MS p.14. [FM02 June 2024 QP](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-question-paper.pdf) · [Final MS](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-mark-scheme.pdf).

[上一课](/zh/alevel/as-further-mathematics/discrete-uniform/) · [课程路线](/zh/alevel/as-further-mathematics/#learning-route) · [下一课](/zh/alevel/as-further-mathematics/generating-functions/)
