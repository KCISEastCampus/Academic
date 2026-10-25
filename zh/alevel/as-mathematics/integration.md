---
layout: subjects
title: "积分与梯形近似"
mathjax: true
grade: as
subject: as-mathematics
lang: zh-CN
translation_of: /alevel/as-mathematics/integration/
permalink: /zh/alevel/as-mathematics/integration/
toc_headings: h2
reading_layout: true
study_page: true
---

[AS 数学学习路线](/zh/alevel/as-mathematics/#learning-route) · P1.4 · OxfordAQA 9660 v5.2
{:.lesson-meta}

先读懂解释和完整示范，再拿纸笔做题。提示与解答分别展开。所有题目均为**自拟题**，没有官方分值；保留英文题干，中文帮助你理解和逐步独立表达。

- [找回函数，计算面积](#l08)
- [用梯形估计面积](#l09)

## 找回函数，计算面积 {#l08}

目标：由导数找回函数与常数，并认清要求的面积。先修：[指数](/zh/alevel/as-mathematics/algebra/#l01-indices)、[导数](/zh/alevel/as-mathematics/differentiation/#l06)和交点。

### 已知导数，找回原来的函数 {#l08-concept}

求导是从函数找斜率，积分可以倒着找回去。例如 $x^2$ 和 $x^2+5$ 求导都得到 $2x$；只知道斜率，还不能知道那个常数。因此写上 $+C$，把这些可能都包括进去；题目给出的已知点用来确定 $C$。

要把幂函数的求导倒过来，就把指数加一，再除以加一后的指数。对有理数 $n\ne-1$：

$$\int ax^n\,dx=\frac{a}{n+1}x^{n+1}+C.$$

算完可以求导检查。当 $x>0$ 时，$6\sqrt x-4x^{-2}$ 的积分是 $4x^{3/2}+4x^{-1}+C$。根式和负指数的限制要保留；指数为 −1 时不能用这条公式，要在后面学另一种方法。

定积分多了两个上下限。如果 $F$ 求导得到 $f$，那么：

$$\int_a^b f(x)\,dx=F(b)-F(a).$$

这是带正负号的累计量。求两曲线间面积，要用“上方高度减下方高度”，并先找真正的交点。区域全在横轴下方时，几何面积是积分的相反数。这里 P1 核心区域不跨横轴；跨轴分段和对数积分属于后续补充。

![阴影位于上方 y=2x 与下方 y=x² 之间，从 x=0 至 x=2，两曲线均不低于横轴。](/alevel/as-mathematics/assets/area.svg)

<div class="worked-example" markdown="1">

### 完整示范 {#l08-worked}

**Question:** Find the area enclosed by $y=2x$ and $y=x^2$.

先找围成区域的左右边界。在交点 $2x=x^2$，即 $x(x-2)=0$，得到边界 0 和 2。在中间试 $x=1$，直线比抛物线高；这里两条曲线也都不低于横轴。

把区域切成很窄的竖条，每条高度为 $2x-x^2$。积分就是把这些高度累加起来：

$$\begin{aligned}
A&=\int_0^2(2x-x^2)\,dx\\
&=\left[x^2-\frac{x^3}3\right]_0^2\\
&=\left(4-\frac83\right)-0=\frac43.
\end{aligned}$$

竖条在两端高度为零、中间为正，所以计算结果的正号与面积一致。

</div>

<div class="lesson-check" markdown="1">

### 带支架尝试 {#l08-scaffold}

**Question:** A curve has gradient $3x^2-2x+1$ and passes through $(0,4)$. Find its equation and its definite integral from 0 to 1.

<details markdown="1">
<summary>提示</summary>

先利用已知点确定常数，再积分曲线本身。

</details>

<details markdown="1">
<summary>解答与核验</summary>

曲线为 $y=x^3-x^2+x+4$。其定积分为 $[x^4/4-x^3/3+x^2/2+4x]_0^1=53/12$。

</details>

</div>

<div class="lesson-check" markdown="1">

### 独立任务 {#l08-independent}

**Question:** Find the area enclosed by $y=x+2$ and $y=x^2$. Include enough reasoning to identify the region.

<details markdown="1">
<summary>提示</summary>

代数求两个边界，并测试上下关系。

</details>

<details markdown="1">
<summary>解答与核验</summary>

由 $x^2=x+2$ 得 $x=-1,2$，中间直线在上。因此 $A=[x^2/2+2x-x^3/3]_{-1}^2=9/2$。区域的两条边界曲线都不低于横轴。

</details>

</div>

<div class="lesson-check" markdown="1">

### 再做一道独立题 {#l08-independent-function}

**Question:** For $x>0$, a curve has gradient $3\sqrt x+2/x^2$ and passes through $(1,4)$. Find its equation. Check both the gradient and the given point.

<details markdown="1">
<summary>提示</summary>

相同导数可以对应一组曲线；已知点用来选出其中一条。

</details>

<details markdown="1">
<summary>解答与检查</summary>

先把导数写成 $3x^{1/2}+2x^{-2}$，再积分：

$$y=\frac{3}{3/2}x^{3/2}+\frac{2}{-1}x^{-1}+C=2x^{3/2}-\frac2x+C.$$

代入 $(1,4)$：$4=2-2+C$，所以 $C=4$。曲线为 $y=2x^{3/2}-2/x+4$。求导会回到题目给的梯度，代入 1 也确实得到 4。

</details>

</div>

### 诊断与修正 {#l08-diagnosis}

积分可为负，几何面积不能为负。先标边界点并测试高度，再计算；由导数恢复曲线时不能漏常数。

积分常数或幂次出错，回看[从导数找回函数](#l08-concept)，再[找回新曲线](#l08-retry-function)。面积符号出错，回看[区域示范](#l08-worked)，再做[横轴下方重试题](#l08-retry)。

<div class="lesson-check" markdown="1">

### 再尝试 {#l08-retry}

**Question:** Find the area between $y=x^2-4$, the x-axis and the lines $x=0$, $x=2$.

<details markdown="1">
<summary>提示</summary>

整个区域都在横轴下。

</details>

<details markdown="1">
<summary>解答与核验</summary>

积分为 $[x^3/3-4x]_0^2=-16/3$，因此面积为 $16/3$。

</details>

</div>

<div class="lesson-check" markdown="1">

### 再找回一条曲线 {#l08-retry-function}

**Question:** For $x>0$, a curve has gradient $6\sqrt x-4/x^2$ and passes through $(4,35)$. Find its equation and check your result.

<details markdown="1">
<summary>提示</summary>

先保留未知常数，用过已知点以后才能确定它。

</details>

<details markdown="1">
<summary>解答与检查</summary>

对 $6x^{1/2}-4x^{-2}$ 积分得 $y=4x^{3/2}+4x^{-1}+C$。已知点给出 $35=32+1+C$，所以 $C=2$。因此 $y=4x^{3/2}+4/x+2$。求导回到原梯度，代入 $x=4$ 得到 35。

</details>

</div>

## 用梯形估计面积 {#l09}

目标：组成梯形近似，并说明能判断哪些误差信息。先修：[面积积分](#l08)与读表。

### 用一小段直线代替弯曲的边 {#l09-concept}

有时只知道几个位置的高度。把相邻高度的顶端用直线连起来，下方就形成一个梯形：把两条平行边的高度相加，再乘宽度的一半，最后加总。ordinate 只是这里“竖直高度”的名称。

$n$ 个等宽小条需要 $n+1$ 个高度，间距为 $h=(b-a)/n$。逐个梯形相加后得到：

$$T=\frac h2\left[y_0+y_n+2(y_1+\cdots+y_{n-1})\right].$$

内部高度同时属于左右两个梯形，所以数两次；最外面两个高度各数一次。忘了系数时，先画出小条就能重新判断。

非负曲线上方的直线给偏大面积，下方给偏小面积。已知光滑曲线的形状，可以解释缩窄小条为什么有帮助；只有几个表值，不能知道两点间怎样弯曲，也不能保证误差范围。间距不等时，各梯形分别使用自己的宽度。本页数据均为构造数据。

![用两个等宽梯形近似 0 至 2 上的 y=x²+1。标出高度 1、2、5；弦在曲线上方。](/alevel/as-mathematics/assets/trapezia.svg)

<div class="worked-example" markdown="1">

### 完整示范 {#l09-worked}

**Question:** Use ordinates at $x=0,1,2$ for $y=x^2+1$ to estimate the area from 0 to 2. Explain the error direction.

高度为 $1,2,5$，$h=1$，故 $T=\frac12(1+5+2\times2)=5$。图像向上弯，弦在曲线上方，故为高估。精确积分为 $[x^3/3+x]_0^2=14/3$，与预测一致。精确积分是核验，不能替代题目要求的梯形过程。

</div>

<div class="lesson-check" markdown="1">

### 带支架尝试 {#l09-scaffold}

**Question:** A table has $x=0,0.5,1,1.5$ and $y=2,3,4,6$. Form and evaluate a trapezium estimate.

<details markdown="1">
<summary>提示</summary>

数间隔而非数表项，只把内部纵坐标乘二。

</details>

<details markdown="1">
<summary>解答与核验</summary>

三条带，$h=0.5$，估计为 $0.25[2+6+2(3+4)]=5.5$。

</details>

</div>

<div class="lesson-check" markdown="1">

### 独立任务 {#l09-independent}

**Question:** A nonnegative curve bends downward throughout $0\le x\le4$. At $x=0,2,4$ its heights are $0,3,4$. Estimate the area, state whether the estimate is high or low, and explain how extra readings could help.

<details markdown="1">
<summary>提示</summary>

比较弦与题目所述曲线的位置，而非仅看三个数。

</details>

<details markdown="1">
<summary>解答与核验</summary>

$T=1[0+4+2(3)]=10$。向下弯曲时弦在曲线下方，故为低估。增加 $x=1,3$ 的读数可形成四条较窄的等宽条带，对这种光滑形状能给更好的近似；三个读数本身不提供数值误差界。

</details>

</div>

### 诊断与修正 {#l09-diagnosis}

若每个高度都乘二，画条带检查：两端外边只出现一次。若仅凭短表判断误差方向，应分清题设的形状条件与数据读数。

重新理解[梯形与权重](#l09-concept)，关掉旧解答后做[新表格题](#l09-retry)。

<div class="lesson-check" markdown="1">

### 再尝试 {#l09-retry}

**Question:** Estimate the area from a table with $x=1,2,3$ and heights $4,5,8$. Can the sign of the error be known from only these data?

<details markdown="1">
<summary>提示</summary>

用两条带，并想想是否有其他曲线穿过相同点。

</details>

<details markdown="1">
<summary>解答与核验</summary>

估计为 $\frac12(4+8+2\times5)=11$。点间曲线未指定，单凭这些数据不能确定误差方向。

</details>

</div>

## 学完之后 {#next-step}

收起解答，检查自己能否独立完成本课各组的再尝试，并解释方法与适用条件。仍有困难时回看对应示范；完成后继续下一课。

[上一课：微分](/zh/alevel/as-mathematics/differentiation/) · [课程目录](/zh/alevel/as-mathematics/#learning-route) · [下一课：数列与级数](/zh/alevel/as-mathematics/sequences/)

学完这条路线后，做[综合题](/zh/alevel/as-mathematics/#mixed-foundations)。在之后一次学习中，关掉解答完成[回顾题](/zh/alevel/as-mathematics/#later-foundations)。

## 来源与范围 {#sources}

<details class="lesson-notes" markdown="1">
<summary>查看范围与评分材料</summary>

按[当前 9660 官方大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf)组织。配套评分材料用于核对作答证据；本页题目全部另行自拟，不能称为官方原题或官方评分标准。

Specification §3.1 P1.4; MA01 January 2025 Q8(d), QP p19 and MS p20.

[MA01 2025 年 1 月原卷](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-question-paper.pdf) · [配套 MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-mark-scheme.pdf) · [MA02 2025 年 1 月原卷](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-question-paper.pdf) · [配套 MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-mark-scheme.pdf)

完成标准是能独立解释方法与检查条件，不是看完解答。未经过学生试用，不据此宣称学习效果已验证。

</details>
