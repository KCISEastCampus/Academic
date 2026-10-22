---
layout: subjects
title: "积分与梯形近似"
mathjax: true
grade: as
subject: as-mathematics
lang: zh-CN
translation_of: /alevel/as-mathematics/integration/
permalink: /zh/alevel/as-mathematics/integration/
toc_headings: h2, h3
study_page: true
---

[AS 数学学习路线](/zh/alevel/as-mathematics/#learning-route) · P1.4 · OxfordAQA 9660 v5.2

先用纸笔尝试题目，再按需打开提示；完成后用解答核对方法、条件与结果。所有题目均为**自拟题**，没有官方分值。英文题干、公式、数值与英文页一致；中文解释帮助你逐步独立用英文作答。

- [L08 原函数与所测区域](#l08)
- [L09 梯形、纵坐标值与近似](#l09)

## L08 · 原函数与所测区域 {#l08}

目标：反微分、确定常数，并根据区域正确设限。先修：L02、L04、L06。

不定积分是一族原函数，常数在求导后消失。对有理数 $n\ne-1$：

$$\int ax^n\,dx=\frac{a}{n+1}x^{n+1}+C,\qquad \int_a^b f(x)\,dx=F(b)-F(a).$$

例如在 $x>0$ 上，$6\sqrt x-4x^{-2}$ 的一个原函数为 $4x^{3/2}+4x^{-1}$，可求导检查。面积先识别实际边界，使用上方曲线减下方曲线。全部在横轴下方时，几何面积是积分的相反数。本课核心 P1 区域不跨横轴；跨轴分段是有用扩展，不列为新增核心要求，对数积分也不属此组范围。

![阴影位于上方 y=2x 与下方 y=x² 之间，从 x=0 至 x=2，两曲线均不低于横轴。](/alevel/as-mathematics/assets/area.svg)

### 示范与推理 {#l08-worked}

**Question:** Find the area enclosed by $y=2x$ and $y=x^2$.

交点满足 $x(x-2)=0$。在 0 与 2 之间直线在抛物线上方，二者均不低于横轴。因此

$$A=\int_0^2(2x-x^2)\,dx=\left[x^2-\frac{x^3}3\right]_0^2=\frac43.$$

被积函数在两端为零、内部为正，可检查边界与面积符号一致。

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

### 诊断与修正 {#l08-diagnosis}

积分可为负，几何面积不能为负。先标边界点并测试高度，再计算；由导数恢复曲线时不能漏常数。

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

## L09 · 梯形、纵坐标值与近似 {#l09}

目标：建立梯形估计，并用图像解释高估或低估。先修：L08 与表格阅读。

纵坐标值（ordinate）是指定横坐标处的竖直高度。$n$ 个等宽条带对应 $n+1$ 个纵坐标，步长 $h=(b-a)/n$。各梯形相加为

$$T=\frac h2\left[y_0+y_n+2(y_1+\cdots+y_{n-1})\right].$$

内部高度同时属于两条带，因此权重为 2。非负曲线上方的弦给高估，下方的弦给低估。对足够光滑的曲线，缩小条带可改善近似；仅凭有限数据表不能确定全段弯曲方向或通用误差界。不等距表格要分别使用各梯形宽度。本页表格均为构造的教学数据。

![用两个等宽梯形近似 0 至 2 上的 y=x²+1。标出高度 1、2、5；弦在曲线上方。](/alevel/as-mathematics/assets/trapezia.svg)

### 示范与推理 {#l09-worked}

**Question:** Use ordinates at $x=0,1,2$ for $y=x^2+1$ to estimate the area from 0 to 2. Explain the error direction.

高度为 $1,2,5$，$h=1$，故 $T=\frac12(1+5+2\times2)=5$。图像向上弯，弦在曲线上方，故为高估。精确积分为 $[x^3/3+x]_0^2=14/3$，与预测一致。精确积分是核验，不能替代题目要求的梯形过程。

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

### 诊断与修正 {#l09-diagnosis}

若每个高度都乘二，画条带检查：两端外边只出现一次。若仅凭短表判断误差方向，应分清题设的形状条件与数据读数。

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

## 来源与范围 {#sources}

按[当前 9660 官方大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf)组织。配套评分材料用于核对作答证据；本页题目全部另行自拟，不能称为官方原题或官方评分标准。

Specification §3.1 P1.4; MA01 January 2025 Q8(d), QP p19 and MS p20.

[MA01 2025 年 1 月原卷](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-question-paper.pdf) · [配套 MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-mark-scheme.pdf) · [MA02 2025 年 1 月原卷](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-question-paper.pdf) · [配套 MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-mark-scheme.pdf)

完成标准是能独立解释方法与检查条件，不是看完解答。未经过学生试用，不据此宣称学习效果已验证。
