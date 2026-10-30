---
layout: subjects
title: "圆"
mathjax: true
grade: as
subject: as-mathematics
lang: zh-CN
translation_of: /alevel/as-mathematics/circles/
permalink: /zh/alevel/as-mathematics/circles/
toc_headings: h2
reading_layout: true
study_page: true
---

[AS 数学学习路线](/zh/alevel/as-mathematics/#learning-route) · PP1.1 · OxfordAQA 9660 v5.2
{:.lesson-meta}

先读懂解释和完整示范，再拿纸笔做题。提示与解答分别展开。所有题目均为**自拟题**，没有官方分值；保留英文题干，中文帮助你理解和逐步独立表达。

- [圆方程、切线与法线](#l14)

## 圆方程、切线与法线 {#l14}

目标：求圆方程、切线与法线，并检查平移。先修：[配方](/zh/alevel/as-mathematics/algebra/#l02)、[直线与距离](/zh/alevel/as-mathematics/coordinate-geometry/#l04)及[平移](/zh/alevel/as-mathematics/algebra/#l05)。

### 圆上的点到圆心一样远 {#l14-concept}

圆是到圆心 $(a,b)$ 的距离都等于 $r>0$ 的点。把距离公式平方，就得到：

$$(x-a)^2+(y-b)^2=r^2.$$

让两个平方括号都为零，就找到圆心。右边是半径的平方，不是半径。方程展开时，要对两项分别配方；右边为负没有实圆，为零只剩一个点。

在圆上一点，切线（tangent）垂直于经过该点的半径。法线（normal）经过这个点并垂直于切线，所以圆的法线就是“圆心和这个点连成的直线”。先确定半径方向，再写两条线。半径水平时，法线水平、切线竖直；半径竖直时反过来。这里用直线几何，不需要隐函数求导。

从圆心向弦作垂线，会平分弦；直径在另一个圆周点所对的角是直角。按 $(h,k)$ 平移，圆心变成 $(a+h,b+k)$，半径不变。先直接检查新圆心，再写方程，能减少符号错误。

![圆心 C(2,-1)、半径 5、切点 P(5,3)。切线垂直于 CP，标出原 x、y 轴。](/alevel/as-mathematics/assets/circle.svg)

<div class="worked-example" markdown="1">

### 完整示范 {#l14-worked}

**Question:** For $x^2+y^2-4x+2y-20=0$, find the centre, radius and tangent at $(5,3)$. Write the circle equation after translation by $(-3,2)$.

先对两组变量分别配方，让圆心看得出来：

$$\begin{aligned}
x^2-4x+y^2+2y&=20,\\
(x-2)^2+(y+1)^2&=25.
\end{aligned}$$

圆心为 $C=(2,-1)$，半径为 5。从 C 到 $P=(5,3)$，横、纵变化分别为 3、4；因为 $3^2+4^2=25$，P 确实在圆上。半径斜率为 $4/3$，切线与它垂直，所以：

$$y-3=-\frac34(x-5),\qquad 3x+4y=27.$$

P 处的法线沿半径通过 C，用的是 $4/3$，而不是负倒数：

$$y-3=\frac43(x-5),\qquad 4x-3y=11.$$

两线都包含 P，只有法线包含 C，可以这样检查。最后，平移 $(-3,2)$ 把圆心移到 $(-1,1)$，半径不变，得到 $(x+1)^2+(y-1)^2=25$。

</div>

<div class="lesson-check" markdown="1">

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

</div>

<div class="lesson-check" markdown="1">

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

</div>

<div class="lesson-check" markdown="1">

### 再做一道独立题 {#l14-independent-lines}

**Question:** A circle has equation $(x+1)^2+(y-2)^2=25$. Verify that $P=(3,5)$ lies on it, then find the tangent and normal at P.

<details markdown="1">
<summary>提示</summary>

先找圆心，再比较两条直线与半径的方向。

</details>

<details markdown="1">
<summary>解答与检查</summary>

圆心为 $(-1,2)$。代入 P，得到 $4^2+3^2=25$，所以 P 在圆上。半径斜率为 $3/4$。法线通过圆心和 P：

$$y-5=\frac34(x-3),\qquad 3x-4y=-11.$$

切线斜率为 $-4/3$：

$$y-5=-\frac43(x-3),\qquad 4x+3y=27.$$

两线都通过 P，只有法线通过圆心；两线斜率乘积为 −1。

</details>

</div>

### 诊断与修正 {#l14-diagnosis}

方程右侧是半径的平方。切线斜率来自半径方向，不能把圆当成单值二次函数直接套用。平移后检查圆心位置，能发现括号符号错误。

如果切线和法线混淆，比较[示范中经过 P 的两条线](#l14-worked)，再[换方向检查](#l14-retry-lines)。平移符号出错，回看[圆心解释](#l14-concept)，再[平移另一个圆](#l14-retry)。

<div class="lesson-check" markdown="1">

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

</div>

<div class="lesson-check" markdown="1">

### 换个方向再检查 {#l14-retry-lines}

**Question:** Find the tangent and normal to $x^2+(y-1)^2=16$ at $(0,5)$. Explain how you chose each direction.

<details markdown="1">
<summary>提示</summary>

画出从圆心到该点的半径。

</details>

<details markdown="1">
<summary>解答与检查</summary>

圆心为 $(0,1)$，且 $0^2+4^2=16$，该点在圆上。半径竖直，法线沿着它，所以 $x=0$；切线水平，所以 $y=5$。竖直线没有有限斜率，这里不能硬套负倒数。

</details>

</div>

## 学完之后 {#next-step}

收起解答，检查自己能否独立完成本课各组的再尝试，并解释方法与适用条件。仍有困难时回看对应示范；完成后继续下一课。

[上一课：数列与级数](/zh/alevel/as-mathematics/sequences/) · [课程目录](/zh/alevel/as-mathematics/#learning-route) · [下一课：三角函数](/zh/alevel/as-mathematics/trigonometry/)

学完这条路线后，做[综合题](/zh/alevel/as-mathematics/#mixed-further)。在之后一次学习中，关掉解答完成[回顾题](/zh/alevel/as-mathematics/#later-further)。

## 来源与范围 {#sources}

<details class="lesson-notes" markdown="1">
<summary>查看范围与评分材料</summary>

按[当前 9660 官方大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf)组织。配套评分材料用于核对作答证据；本页题目全部另行自拟，不能称为官方原题或官方评分标准。

Specification §3.2 PP1.1; MA02 January 2025 Q3, QP pp6–7, MS pp7–8.

[MA01 2025 年 1 月原卷](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-question-paper.pdf) · [配套 MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-mark-scheme.pdf) · [MA02 2025 年 1 月原卷](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-question-paper.pdf) · [配套 MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-mark-scheme.pdf)

完成标准是能独立解释方法与检查条件，不是看完解答。未经过学生试用，不据此宣称学习效果已验证。

</details>

{% include exam_topic_practice.html %}
