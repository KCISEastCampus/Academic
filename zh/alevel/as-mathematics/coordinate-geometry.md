---
layout: subjects
title: "坐标几何"
mathjax: true
grade: as
subject: as-mathematics
lang: zh-CN
translation_of: /alevel/as-mathematics/coordinate-geometry/
permalink: /zh/alevel/as-mathematics/coordinate-geometry/
toc_headings: h2, h3
study_page: true
---

[AS 数学学习路线](/zh/alevel/as-mathematics/#learning-route) · P1.2 · OxfordAQA 9660 v5.2

先用纸笔尝试题目，再按需打开提示；完成后用解答核对方法、条件与结果。所有题目均为**自拟题**，没有官方分值。英文题干、公式、数值与英文页一致；中文解释帮助你逐步独立用英文作答。

- [L04 把几何条件写成方程](#l04)

## L04 · 把几何条件写成方程 {#l04}

目标：由几何条件求直线与精确长度，单独处理竖直线。先修：L02 与坐标。

对 $A=(x_1,y_1)$、$B=(x_2,y_2)$，中点与距离为

$$M=\left(\frac{x_1+x_2}2,\frac{y_1+y_2}2\right),\qquad AB=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}.$$

若 $x_1\ne x_2$，斜率为 $(y_2-y_1)/(x_2-x_1)$；过 $A$ 的直线写为 $y-y_1=m(x-x_1)$，需要时化为 $y=mx+c$ 或 $ax+by+c=0$。有限斜率相等则平行，乘积为 −1 则垂直。竖直线 $x=c$ 没有有限斜率，并与水平线垂直。

![A(1,2)、B(5,4) 的中点为 M(3,3)。虚线为垂直平分线 2x+y−9=0，经过中点 M。](/alevel/as-mathematics/assets/bisector.svg)

### 示范与推理 {#l04-worked}

**Question:** Find the perpendicular bisector of the segment joining $A=(1,2)$ and $B=(5,4)$, and its intersection with $y=x$.

中点为 $(3,3)$，长度为 $2\sqrt5$，线段斜率为 $1/2$。垂线斜率为 $-2$，所以 $y-3=-2(x-3)$，即 $2x+y-9=0$。代入 $y=x$ 得 $(3,3)$；此点到两端点等距，可检查垂直平分线的几何意义。

### 带支架尝试 {#l04-scaffold}

**Question:** Find the line through $(2,-1)$ parallel to $3x-y+4=0$.

<details markdown="1">
<summary>提示</summary>

先把已知直线改写为斜截式。

</details>

<details markdown="1">
<summary>解答与核验</summary>

斜率为 $3$，因此 $y+1=3(x-2)$，即 $y=3x-7$。

</details>

### 独立任务 {#l04-independent}

**Question:** Find all values of $c$ for which $y=2x+c$ meets $y=x^2$ twice. Describe the case at the boundary of your answer.

<details markdown="1">
<summary>提示</summary>

联立后用判别式数实数交点。

</details>

<details markdown="1">
<summary>解答与核验</summary>

$x^2-2x-c=0$ 有两个不同实根的条件为 $4+4c>0$，故 $c>-1$。当 $c=-1$ 时交点重合为 $(1,1)$，直线与曲线相切。

</details>

### 诊断与修正 {#l04-diagnosis}

坐标差必须采用一致的顺序。竖直线斜率不是零；先画方向再选直线形式。

### 再尝试 {#l04-retry}

**Question:** Find the perpendicular bisector of the segment from $(2,1)$ to $(2,7)$.

<details markdown="1">
<summary>提示</summary>

原线段竖直。

</details>

<details markdown="1">
<summary>解答与核验</summary>

中点为 $(2,4)$，所求水平线为 $y=4$。

</details>

## 来源与范围 {#sources}

按[当前 9660 官方大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf)组织。配套评分材料用于核对作答证据；本页题目全部另行自拟，不能称为官方原题或官方评分标准。

Specification §3.1 P1.2; line/curve and repeated-root reasoning.

[MA01 2025 年 1 月原卷](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-question-paper.pdf) · [配套 MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-mark-scheme.pdf) · [MA02 2025 年 1 月原卷](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-question-paper.pdf) · [配套 MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-mark-scheme.pdf)

完成标准是能独立解释方法与检查条件，不是看完解答。未经过学生试用，不据此宣称学习效果已验证。
