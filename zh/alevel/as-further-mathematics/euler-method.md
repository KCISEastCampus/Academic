---
title: "Euler 更新及其局限"
layout: subjects
mathjax: true
grade: as
subject: as-further-mathematics
lang: zh-CN
translation_of: /alevel/as-further-mathematics/euler-method/
permalink: /zh/alevel/as-further-mathematics/euler-method/
toc_headings: h2, h3
study_page: true
---

[AS 高数课程](/zh/alevel/as-further-mathematics/) · B5 · FPP1.3

本页示范、补步骤、独立任务及再尝试均为**自拟题（self-written）**，没有官方分值。先写方法与理由，再分别展开提示和解答。题干保留英文，中文说明帮助建立推理。

## 为什么用旧点斜率？ {#model}

**开始：**求 $(0,1)$ 处斜率，已知 $y'=x-y$，结果为 $-1$。**目标：**同步更新 Euler 表，定位首个错误行并解释精度限制。先修为代入、导数、局部直线近似。给定初值与带符号步长 h，显式 Euler 用下式定义近似值：

$$x_{n+1}=x_n+h,\qquad y_{n+1}=y_n+h f(x_n,y_n).$$

递推等式精确定义数值序列，但该序列只是微分方程真解的近似。f 的两个输入都取旧点；每步查定义域，保留中间精度，并到达指定终点。负 h 表示向后推进。

## 示范：更新与比较 {#demonstration}

**Demonstration (self-written):** For $y'=x-y$, $y(0)=1$, use $h=0.2$ to estimate $y(0.4)$.

| n | $x_n$ | $y_n$ | $f(x_n,y_n)$ | $y_{n+1}$ |
| --- | --- | --- | --- | --- |
| 0 | 0 | 1 | −1 | 0.8 |
| 1 | 0.2 | 0.8 | −0.6 | 0.68 |

所以 $y(0.4)\approx0.68$。第一段斜率 −1，第二段 −0.6；都没有把新 x 混进旧点斜率。

![Euler polygon for y′=x−y from (0,1) with h=0.2; points (0.2,0.8) and (0.4,0.68), slopes and a distinct exact curve are labelled.](/alevel/as-further-mathematics/diagrams/euler.svg)

仅为核对本示范，给定精确比较函数 $y=x-1+2e^{-x}$，可代入检查导数与初值。其终值约 $0.740640092$。改用 $h=0.1$ 时 Euler 序列为 $1,0.9,0.82,0.758,0.7122$，本例确实更接近；执行 Euler 不要求先解出解析式。

在有限区间及适当光滑、稳定条件下，h 趋零时可收敛。但这不保证每次缩小步长都改善舍入结果；两个结果相近不能证明特定误差界，累计舍入与不稳定步长也会影响结果。

## 补步骤与独立选法 {#practice}

**Scaffold (self-written):** For $y'=2x-y$, $y(0)=2$, $h=0.1$, fill two old-point updates to reach $x=0.2$.

<details markdown="1"><summary>补步骤核对</summary>

$$y_1=2+0.1(0-2)=1.8;\qquad y_2=1.8+0.1(0.2-1.8)=1.64.$$

</details>

**Independent task (self-written):** For $y'=x+y$, $y(0)=1$, estimate $y(-0.2)$ using steps of magnitude 0.1 and show all updates. A student uses $y_1=1-0.1(-0.1+1)=0.91$. Identify the first error. Do your final displayed digits certify the true error?

<details markdown="1"><summary>提示</summary>

步长取负，但每次斜率仍用旧 x。小数显示与误差估计是两种不同声明。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$h=-0.1;\quad(x_0,y_0)=(0,1);\quad y_1=1-0.1(0+1)=0.9;\quad x_1=-0.1;$$

$$y_2=0.9-0.1(-0.1+0.9)=0.82;\qquad x_2=-0.2.$$

学生首行把新 x 与旧 y 混用，不是显式 Euler。显示为 $0.82$ 本身并不能认证真误差。

</details>

## 诊断与再尝试 {#retry}

首个错误前的正确行应保留；从修正点重算后续各行，不能只改最终数值。

**Retry (self-written):** For $y'=-2y$, $y(0)=1$, use $h=0.25$ to reach $x=0.5$. Would printing ten decimals prove ten-decimal accuracy?

<details markdown="1"><summary>再尝试核对</summary>

$$y_1=1+0.25(-2)=0.5;\qquad y_2=0.5+0.25(-1)=0.25.$$

不能；增加显示位数不会减小离散化误差。

</details>

## 来源与范围 {#sources}

本课范围按 9665 v5.2；以下已读原题及配套评分材料用于设计作答证据，本页练习不是原题复制或官方评分标准。

- [OxfordAQA 9665 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf), FPP1.3.
- FM02 June 2024 Q1; QP p.3, MS p.4. [FM02 June 2024 QP](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-question-paper.pdf) · [Final MS](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-mark-scheme.pdf).

[上一课](/zh/alevel/as-further-mathematics/numerical-roots/) · [课程路线](/zh/alevel/as-further-mathematics/#learning-route) · [下一课](/zh/alevel/as-further-mathematics/bayes/)
