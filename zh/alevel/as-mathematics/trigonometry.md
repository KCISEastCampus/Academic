---
layout: subjects
title: "三角"
mathjax: true
grade: as
subject: as-mathematics
lang: zh-CN
translation_of: /alevel/as-mathematics/trigonometry/
permalink: /zh/alevel/as-mathematics/trigonometry/
toc_headings: h2
reading_layout: true
study_page: true
---

[AS 数学学习路线](/zh/alevel/as-mathematics/#learning-route) · PP1.2 · OxfordAQA 9660 v5.2
{:.lesson-meta}

先读懂解释和完整示范，再拿纸笔做题。提示与解答分别展开。所有题目均为**自拟题**，没有官方分值；保留英文题干，中文帮助你理解和逐步独立表达。

- [三角形、弧与扇形](#l15)
- [三角图像与全部解](#l16)

## 三角形、弧与扇形 {#l15}

目标：选择三角形公式，分清弧长与面积。先修：三角形几何与[精确根式](/zh/alevel/as-mathematics/algebra/#l01-surds)。

### 先认清图形和要求的量 {#l15-concept}

把边 $a$ 标在角 $A$ 的对面，其余同样配对。正弦定理连接“边和它的对角”。给两边及夹角时，余弦定理能求第三边；面积公式也使用这两条边：

$$\begin{aligned}
\frac a{\sin A}&=\frac b{\sin B}=\frac c{\sin C},\\
a^2&=b^2+c^2-2bc\cos A,\\
A_\triangle&=\frac12bc\sin A.
\end{aligned}$$

两个不同角可能有相同正弦值。按反正弦键后，还要检查另一个角是否可能，以及三角形内角和；不能只留下计算器给的第一个值。

弧度（radian）用“弧长是半径的几倍”量角：一弧度对应的弧长恰好等于半径，因此 $180^\circ=\pi$ 弧度。当 $\theta$ 用弧度时，弧长是 $r\theta$，扇形面积是 $r^2\theta/2$。弦是直的，弧是弯的；小弓形是扇形减去里面的三角形。先标明求长度还是面积，单位就不容易混淆。

<div class="worked-example" markdown="1">

### 完整示范 {#l15-worked}

**Question:** A sector has radius 6 cm and angle $\pi/3$ radians. Find its arc length, sector area and minor-segment area.

角已经是弧度，可以直接用弧长公式。注意弧长和扇形面积是两种量：

$$\begin{aligned}
l&=r\theta=6\left(\frac\pi3\right)=2\pi\,\mathrm{cm},\\
A_{\text{sector}}&=\frac12r^2\theta=6\pi\,\mathrm{cm^2}.
\end{aligned}$$

小弓形是弧与直弦之间的那一块。用扇形减去两条半径围成的三角形：

$$A_{\triangle}=\frac12(6)(6)\sin(\pi/3)=9\sqrt3\,\mathrm{cm^2}.$$

所以弓形面积为 $(6\pi-9\sqrt3)\,\mathrm{cm^2}$，大于零、小于扇形。这里相减的都是面积，不能拿弧长去减面积。

</div>

<div class="lesson-check" markdown="1">

### 带支架尝试 {#l15-scaffold}

**Question:** Two sides of a triangle are 5 cm and 7 cm with included angle $60^\circ$. Find the third side and area exactly.

<details markdown="1">
<summary>提示</summary>

两边与夹角已知，优先考虑余弦定理。

</details>

<details markdown="1">
<summary>解答与核验</summary>

第三边为 $\sqrt{25+49-70\cos60^\circ}=\sqrt{39}\,\mathrm{cm}$，面积为 $35\sqrt3/4\,\mathrm{cm^2}$。

</details>

</div>

<div class="lesson-check" markdown="1">

### 独立任务 {#l15-independent}

**Question:** In a triangle, $a=5$ cm, $b=8$ cm and $A=30^\circ$. Determine all possible values of $B$ to 2 decimal places, justifying whether each can belong to a triangle.

<details markdown="1">
<summary>提示</summary>

反正弦给主值，另一个角可能有相同的正弦。

</details>

<details markdown="1">
<summary>解答与核验</summary>

正弦定理给 $\sin B=8\sin30^\circ/5=0.8$，所以 $B=53.13^\circ$ 或 $126.87^\circ$。两者加上 $30^\circ$ 后均仍留正的第三角，分别为 $96.87^\circ$ 与 $23.13^\circ$，所以两解皆可。

</details>

</div>

### 诊断与修正 {#l15-diagnosis}

把度数直接代入弧度弧长公式会造成比例错误。先标清弧与直弦；相减的量必须都是面积。

角度单位或弧长／面积混淆时，回看[扇形示范](#l15-worked)，再做[周长重试](#l15-retry)。若遗漏另一种角或留下不可能的角，回看[边角关系](#l15-concept)，再判断[新三角形](#l15-retry-triangle)。

<div class="lesson-check" markdown="1">

### 再尝试 {#l15-retry}

**Question:** A sector has radius 4 cm and perimeter 14 cm. Find its angle in radians and area.

<details markdown="1">
<summary>提示</summary>

周长包括两条半径与弧。

</details>

<details markdown="1">
<summary>解答与核验</summary>

弧长为 $14-8=6$ 厘米，故 $\theta=6/4=1.5$ 弧度，面积为 $\frac12(4^2)(1.5)=12\,\mathrm{cm^2}$。

</details>

</div>

<div class="lesson-check" markdown="1">

### 再试一题 {#l15-retry-triangle}

**Question:** In a triangle, $a=9$ cm, $b=6$ cm and $A=40^\circ$. Find every possible value of B to 2 decimal places. Explain which angle candidates are valid.

<details markdown="1">
<summary>提示</summary>

算出一个角后，还要检查它的补角能不能与已知角组成三角形。

</details>

<details markdown="1">
<summary>解答与检查</summary>

由正弦定理，$\sin B=6\sin40^\circ/9$。候选角约为 $25.37^\circ$ 和 $154.63^\circ$。第二个角会使 $40^\circ+154.63^\circ>180^\circ$，不可能组成三角形。只有 $B=25.37^\circ$ 可取，第三个角约为 $114.63^\circ>0$。

</details>

</div>

## 三角图像与全部解 {#l16}

目标：找全区间内的解，并保留恒等变形的条件。先修：[二次式](/zh/alevel/as-mathematics/algebra/#l02)、[图像变换](/zh/alevel/as-mathematics/algebra/#l05)与[角](#l15)。

### 计算器的一个答案不是整个周期 {#l16-concept}

周期图像水平走固定距离后会重复，这个距离叫周期。正弦一个周期的零点在 $0,\pi,2\pi$，最高、最低点在 $\pi/2,3\pi/2$。余弦从 1 开始，周期也是 $2\pi$。正切每隔 $\pi$ 重复，在 $\pi/2+k\pi$ 处有竖直渐近线，其中 $k$ 为整数；不同分支不能跨渐近线连起来。

两个常用恒等式可以帮助我们把方程改成只含一种量：

$$\sin^2\theta+\cos^2\theta=1,\qquad \tan\theta=\frac{\sin\theta}{\cos\theta}\quad(\cos\theta\ne0).$$

例如把正弦平方换成“一减余弦平方”，就可能得到熟悉的二次方程。解出后，还要回图像找全允许的角。先写完整角度的区间，包括里面的倍数；分母因式约掉后，原来的非零条件仍然保留。草图要有坐标轴、周期关键点和渐近线；只给屏幕曲线不能说明理由。这里不用倍角或和差角公式。

![正弦在 0 至 2π 的一个周期中，零点为 0、π、2π，在 π/2 取最大值 1，在 3π/2 取最小值 −1。](/alevel/as-mathematics/assets/sine.svg)

<div class="worked-example" markdown="1">

### 完整示范 {#l16-worked}

**Question:** Solve $2\sin^2 x+3\cos x=3$ for $0\le x\le2\pi$.

题目同时有正弦平方和余弦。先把 $\sin^2x$ 换成 $1-\cos^2x$，再暂时用 c 表示 $\cos x$：

$$2(1-c^2)+3c=3,\qquad 2c^2-3c+1=0,\qquad (2c-1)(c-1)=0.$$

所以 $\cos x=1/2$ 或 $1$。现在要从 c 回到角度：在题目的完整周期里，余弦在 $\pi/3,5\pi/3$ 等于 $1/2$，在 $0,2\pi$ 等于 1。因此所有解为 $x=0,\pi/3,5\pi/3,2\pi$。

两个端点都在允许区间内；虽然余弦值相同，它们仍是两个不同的 x 值。逐个代入，原式左边都会等于 3。

</div>

<div class="lesson-check" markdown="1">

### 带支架尝试 {#l16-scaffold}

**Question:** Sketch $y=\cos x$ on $0\le x\le2\pi$, labelling its zeros and maximum/minimum values. Solve $\cos x=-1/2$ on the same interval.

<details markdown="1">
<summary>提示</summary>

使用完整周期，并考虑周期中间两侧的位置。

</details>

<details markdown="1">
<summary>解答与核验</summary>

图像经过 $(0,1),(\pi/2,0),(\pi,-1),(3\pi/2,0),(2\pi,1)$；方程解为 $x=2\pi/3,4\pi/3$。

![用于核对草图的余弦图：0、2π 处取最大值，π/2、3π/2 处为零，π 处取最小值。](/alevel/as-mathematics/assets/cosine-check.svg)

</details>

</div>

<div class="lesson-check" markdown="1">

### 独立任务 {#l16-independent}

**Question:** Show that $(1-\sin^2 y)/\cos y=\cos y$ wherever the left side is defined. Hence solve $(1-\sin^2 y)/\cos y=1/2$ for $0\le y<2\pi$, stating the excluded values.

<details markdown="1">
<summary>提示</summary>

先用恒等式，记录约束后才能约分，再解化简后的方程。

</details>

<details markdown="1">
<summary>解答与核验</summary>

在 $\cos y\ne0$ 时，分子为 $\cos^2 y$，相除得 $\cos y$。排除值为 $y=\pi/2,3\pi/2$。使用前面结论，解得 $y=\pi/3,5\pi/3$，两者均符合原约束；这里明确展示了 hence 的连接。

</details>

</div>

### 诊断与修正 {#l16-diagnosis}

反三角按键只给主值，不给区间全解。除以某三角因子可能丢解，约掉分母可能掩盖排除值，两类问题都要检查。

若遗漏区间内的角，回看[周期](#l16-concept)，再做[周期重试](#l16-retry)。若约分后丢掉条件，回看[恒等式题](#l16-independent)，再检查[新题的原分母](#l16-retry-restrictions)。

<div class="lesson-check" markdown="1">

### 再尝试 {#l16-retry}

**Question:** Solve $\sin(2x)=1/2$ for $0\le x\le\pi$. State the period and two neighbouring asymptotes of $y=\tan x$.

<details markdown="1">
<summary>提示</summary>

先把整个区间加倍，作为角 2x 的范围。

</details>

<details markdown="1">
<summary>解答与核验</summary>

$0\le2x\le2\pi$ 得 $2x=\pi/6,5\pi/6$，因此 $x=\pi/12,5\pi/12$。正切周期为 $\pi$，相邻渐近线可取 $x=-\pi/2,\pi/2$。

![正切核对图：零点为 0、π，虚线渐近线为 −π/2、π/2、3π/2；分支每隔 π 重复，不能跨渐近线连起来。](/alevel/as-mathematics/assets/tangent-check.svg)

</details>

</div>

<div class="lesson-check" markdown="1">

### 再试一题 {#l16-retry-restrictions}

**Question:** Solve $(1-\cos^2t)/\sin t=0$ for $0\le t\le2\pi$. State the restrictions from the original expression and check every candidate.

<details markdown="1">
<summary>提示</summary>

先记下分母为零的位置，再化简。

</details>

<details markdown="1">
<summary>解答与检查</summary>

原式要求 $\sin t\ne0$，所以排除 $t=0,\pi,2\pi$。在原式有定义的位置，

$$\frac{1-\cos^2t}{\sin t}=\frac{\sin^2t}{\sin t}=\sin t.$$

化简后的方程给出 $t=0,\pi,2\pi$，但三个候选值都会使原分母为零。因此原方程无解。约掉一个因式，不会让原来不能代入的值变得可用。

</details>

</div>

## 学完之后 {#next-step}

收起解答，检查自己能否独立完成本课各组的再尝试，并解释方法与适用条件。仍有困难时回看对应示范；完成后继续下一课。

[上一课：圆](/zh/alevel/as-mathematics/circles/) · [课程目录](/zh/alevel/as-mathematics/#learning-route) · [下一课：指数与对数](/zh/alevel/as-mathematics/exponentials-logarithms/)

学完这条路线后，做[综合题](/zh/alevel/as-mathematics/#mixed-further)。在之后一次学习中，关掉解答完成[回顾题](/zh/alevel/as-mathematics/#later-further)。

## 来源与范围 {#sources}

<details class="lesson-notes" markdown="1">
<summary>查看范围与评分材料</summary>

按[当前 9660 官方大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf)组织。配套评分材料用于核对作答证据；本页题目全部另行自拟，不能称为官方原题或官方评分标准。

Specification §3.2 PP1.2; MA02 January 2025 Q4, QP pp8–9, MS pp9–10.

[MA01 2025 年 1 月原卷](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-question-paper.pdf) · [配套 MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-mark-scheme.pdf) · [MA02 2025 年 1 月原卷](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-question-paper.pdf) · [配套 MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-mark-scheme.pdf)

完成标准是能独立解释方法与检查条件，不是看完解答。未经过学生试用，不据此宣称学习效果已验证。

</details>

{% include exam_topic_practice.html %}
