---
layout: subjects
title: "坐标几何"
mathjax: true
grade: as
subject: as-mathematics
lang: zh-CN
translation_of: /alevel/as-mathematics/coordinate-geometry/
permalink: /zh/alevel/as-mathematics/coordinate-geometry/
toc_headings: h2
reading_layout: true
study_page: true
---

[AS 数学学习路线](/zh/alevel/as-mathematics/#learning-route) · P1.2 · OxfordAQA 9660 v5.2
{:.lesson-meta}

先读懂解释和完整示范，再拿纸笔做题。提示与解答分别展开。所有题目均为**自拟题**，没有官方分值；保留英文题干，中文帮助你理解和逐步独立表达。

- [从几何条件找直线](#l04)

## 从几何条件找直线 {#l04}

目标：选择直线方程并求精确长度。先修：[二次式](/zh/alevel/as-mathematics/algebra/#l02)与坐标。

### 把图上的位置关系写成方程 {#l04-concept}

中点就是横着走一半、竖着也走一半。求长度时，横向和竖向的变化组成直角三角形，因此用勾股定理：

$$M=\left(\frac{x_1+x_2}2,\frac{y_1+y_2}2\right),\qquad AB=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}.$$

斜率就是“竖直变化除以水平变化”。当 $x_1\ne x_2$ 时，它是 $(y_2-y_1)/(x_2-x_1)$。上下两处相减的点顺序要一致。经过 $(x_1,y_1)$、斜率为 $m$ 的直线满足：

$$y-y_1=m(x-x_1).$$

在给定点，两个变化量都是零；在别处，两者的比是要求的斜率。整理后还可以写成 $y=mx+c$ 或 $ax+by+c=0$。

平行直线的有限斜率相同；两条垂直直线的斜率都有限时，乘积为 −1。竖直线写成 $x=c$，没有有限斜率，与水平线垂直。中垂线既要经过线段中点，又要垂直于线段，两个条件都要满足。

![A(1,2)、B(5,4) 的中点为 M(3,3)。虚线为垂直平分线 2x+y−9=0，经过中点 M。](/alevel/as-mathematics/assets/bisector.svg)

<div class="worked-example" markdown="1">

### 完整示范 {#l04-worked}

**Question:** Find the perpendicular bisector of the segment joining $A=(1,2)$ and $B=(5,4)$, and its intersection with $y=x$.

垂直平分线必须从 A、B 的正中间经过，所以先求中点：$M=((1+5)/2,(2+4)/2)=(3,3)$。从 A 到 B，横向走 4，纵向走 2，所以长度为 $\sqrt{4^2+2^2}=2\sqrt5$，斜率为 $2/4=1/2$。

所求直线与 AB 垂直，选斜率 −2，再让它经过 M：

$$y-3=-2(x-3),\qquad 2x+y-9=0.$$

与 $y=x$ 联立时，把 y 换成 x，得到 $3x=9$，所以交点是 $(3,3)$。它到 A 和 B 的距离都为 $\sqrt5$，符合“平分”的意思。

</div>

<div class="lesson-check" markdown="1">

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

</div>

<div class="lesson-check" markdown="1">

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

</div>

<div class="lesson-check" markdown="1">

### 再做一道独立题 {#l04-independent-geometry}

**Question:** Points $A=(-2,1)$ and $B=(4,5)$ are endpoints of a segment. Find its exact length and the equation of its perpendicular bisector. Check that your line passes through the midpoint.

<details markdown="1">
<summary>提示</summary>

先求两个坐标各变了多少。所求直线的方向与 AB 不同。

</details>

<details markdown="1">
<summary>解答与检查</summary>

横向变化为 6，纵向变化为 4，所以 $AB=\sqrt{6^2+4^2}=2\sqrt{13}$。中点是 $(1,3)$，线段斜率为 $4/6=2/3$。垂直方向的斜率为 $-3/2$，因此：

$$y-3=-\frac32(x-1),\qquad 3x+2y=9.$$

代入中点 $(1,3)$，左边是 $3+6=9$；斜率乘积为 $(2/3)(-3/2)=-1$。位置和方向都符合要求。

</details>

</div>

### 诊断与修正 {#l04-diagnosis}

坐标差必须采用一致的顺序。竖直线斜率不是零；先画方向再选直线形式。

中点或方向出错，回看[直线解释](#l04-concept)与[平分线示范](#l04-worked)，再[重试几何题](#l04-retry-geometry)。交点个数判断错误，回看[二次式](/zh/alevel/as-mathematics/algebra/#l02-concept)，再做[交点重试题](#l04-retry-intersections)。

<div class="lesson-check" markdown="1">

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

</div>

<div class="lesson-check" markdown="1">

### 检查刚修正的想法 {#l04-retry-intersections}

**Question:** For which values of $c$ does $y=3x+c$ meet $y=x^2$ at two distinct points? Find the contact point in the boundary case.

<details markdown="1">
<summary>提示</summary>

交点必须同时满足两个方程。

</details>

<details markdown="1">
<summary>解答与检查</summary>

令两式相等，得到 $x^2-3x-c=0$。两个不同实交点要求 $9+4c>0$，所以 $c>-9/4$。在边界 $c=-9/4$，重根为 $x=3/2$，对应 $y=9/4$，直线在 $(3/2,9/4)$ 与曲线相切。

</details>

</div>

<div class="lesson-check" markdown="1">

### 换一条线段再试 {#l04-retry-geometry}

**Question:** Find the exact length and perpendicular bisector of the segment from $(0,-1)$ to $(3,5)$.

<details markdown="1">
<summary>提示</summary>

分别求中点和方向。

</details>

<details markdown="1">
<summary>解答与检查</summary>

坐标变化为 3 和 6，所以长度为 $\sqrt{3^2+6^2}=3\sqrt5$。中点为 $(3/2,2)$，线段斜率为 2，平分线斜率为 −1/2。因此 $y-2=-\frac12(x-3/2)$，即 $2x+4y=11$。代入可检查中点，斜率乘积为 −1。

</details>

</div>

## 学完之后 {#next-step}

收起解答，检查自己能否独立完成本课各组的再尝试，并解释方法与适用条件。仍有困难时回看对应示范；完成后继续下一课。

[上一课：代数](/zh/alevel/as-mathematics/algebra/) · [课程目录](/zh/alevel/as-mathematics/#learning-route) · [下一课：微分](/zh/alevel/as-mathematics/differentiation/)

学完这条路线后，做[综合题](/zh/alevel/as-mathematics/#mixed-foundations)。在之后一次学习中，关掉解答完成[回顾题](/zh/alevel/as-mathematics/#later-foundations)。

## 来源与范围 {#sources}

<details class="lesson-notes" markdown="1">
<summary>查看范围与评分材料</summary>

按[当前 9660 官方大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf)组织。配套评分材料用于核对作答证据；本页题目全部另行自拟，不能称为官方原题或官方评分标准。

Specification §3.1 P1.2; line/curve and repeated-root reasoning.

[MA01 2025 年 1 月原卷](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-question-paper.pdf) · [配套 MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-mark-scheme.pdf) · [MA02 2025 年 1 月原卷](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-question-paper.pdf) · [配套 MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-mark-scheme.pdf)

完成标准是能独立解释方法与检查条件，不是看完解答。未经过学生试用，不据此宣称学习效果已验证。

</details>
