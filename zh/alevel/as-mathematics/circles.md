---
layout: subjects
title: "圆"
mathjax: true
grade: as
subject: as-mathematics
lang: zh-CN
translation_of: /alevel/as-mathematics/circles/
permalink: /zh/alevel/as-mathematics/circles/
toc_headings: h2, h3
study_page: true
---

[AS 数学学习路线](/zh/alevel/as-mathematics/#learning-route) · PP1.1 · OxfordAQA 9660 v5.2

先用纸笔尝试题目，再按需打开提示；完成后用解答核对方法、条件与结果。所有题目均为**自拟题**，没有官方分值。英文题干、公式、数值与英文页一致；中文解释帮助你逐步独立用英文作答。

- [L14 圆方程、几何与平移](#l14)

## L14 · 圆方程、几何与平移 {#l14}

目标：从几何约束确定圆，并写平移后的方程。先修：L02、L04–L05。

圆心为 $(a,b)$、半径 $r>0$ 的圆满足 $(x-a)^2+(y-b)^2=r^2$，依据是距离公式。对两变量分别配方可读出圆心；右边为负时没有实圆，为零时退化为一点。圆心向弦作的垂线平分弦；切线垂直于切点处半径，无需隐微分。直径所对的圆周角为直角。平移向量 $(h,k)$ 把圆心移到 $(a+h,b+k)$，半径保持不变。

![圆心 C(2,-1)、半径 5、切点 P(5,3)。切线垂直于 CP，标出原 x、y 轴。](/alevel/as-mathematics/assets/circle.svg)

### 示范与推理 {#l14-worked}

**Question:** For $x^2+y^2-4x+2y-20=0$, find the centre, radius and tangent at $(5,3)$. Write the circle equation after translation by $(-3,2)$.

方程化为 $(x-2)^2+(y+1)^2=25$，圆心 $(2,-1)$、半径 $5$。因 $3^2+4^2=25$，指定点确在圆上。半径斜率为 $4/3$，所以切线为 $y-3=-\frac34(x-5)$，即 $3x+4y=27$。平移后圆心为 $(-1,1)$，新方程为 $(x+1)^2+(y-1)^2=25$。

### 带支架尝试 {#l14-scaffold}

**Question:** A diameter has endpoints $(-1,0)$ and $(5,4)$. Find the circle equation. Explain why a third point on this circle makes a right angle with the endpoints.

<details markdown="1">
<summary>提示</summary>

圆心为直径中点，半径为直径长度的一半。

</details>

<details markdown="1">
<summary>解答与核验</summary>

圆心为 $(2,2)$，$r^2=13$，所以 $(x-2)^2+(y-2)^2=13$。在圆周上其他点处，该直径所对圆周角为 $90^\circ$。

</details>

### 独立任务 {#l14-independent}

**Question:** A circle has its centre on the x-axis and passes through $(0,1)$ and $(4,3)$. Find its equation, using a chord property. Then translate it by $(2,-1)$.

<details markdown="1">
<summary>提示</summary>

圆心位于弦的垂直平分线上。

</details>

<details markdown="1">
<summary>解答与核验</summary>

弦中点为 $(2,2)$，斜率为 $1/2$。垂直平分线为 $y-2=-2(x-2)$。令 $y=0$ 得圆心 $(3,0)$，且 $r^2=10$，因此 $(x-3)^2+y^2=10$。平移后为 $(x-5)^2+(y+1)^2=10$。

</details>

### 诊断与修正 {#l14-diagnosis}

方程右侧是半径的平方。切线斜率来自半径方向，不能把圆当成单值二次函数直接套用。平移后检查圆心位置，能发现括号符号错误。

### 再尝试 {#l14-retry}

**Question:** Find the tangent to $(x+1)^2+(y-2)^2=9$ at $(2,2)$. Translate the circle so that its centre is the origin.

<details markdown="1">
<summary>提示</summary>

此处半径水平。

</details>

<details markdown="1">
<summary>解答与核验</summary>

切线为 $x=2$。平移向量为 $(1,-2)$，新圆为 $x^2+y^2=9$。

</details>

## 学完之后 {#next-step}

收起解答，检查自己能否独立完成本课各组的再尝试，并解释方法与适用条件。仍有困难时回看对应示范；完成后继续下一课。

[上一课：数列与级数](/zh/alevel/as-mathematics/sequences/) · [课程目录](/zh/alevel/as-mathematics/#learning-route) · [下一课：三角函数](/zh/alevel/as-mathematics/trigonometry/)

## 来源与范围 {#sources}

按[当前 9660 官方大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf)组织。配套评分材料用于核对作答证据；本页题目全部另行自拟，不能称为官方原题或官方评分标准。

Specification §3.2 PP1.1; MA02 January 2025 Q3, QP pp6–7, MS pp7–8.

[MA01 2025 年 1 月原卷](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-question-paper.pdf) · [配套 MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-mark-scheme.pdf) · [MA02 2025 年 1 月原卷](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-question-paper.pdf) · [配套 MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-mark-scheme.pdf)

完成标准是能独立解释方法与检查条件，不是看完解答。未经过学生试用，不据此宣称学习效果已验证。
