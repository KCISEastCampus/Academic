---
layout: subjects
title: "微分"
mathjax: true
grade: as
subject: as-mathematics
lang: zh-CN
translation_of: /alevel/as-mathematics/differentiation/
permalink: /zh/alevel/as-mathematics/differentiation/
toc_headings: h2, h3
study_page: true
---

[AS 数学学习路线](/zh/alevel/as-mathematics/#learning-route) · P1.3 · OxfordAQA 9660 v5.2

先用纸笔尝试题目，再按需打开提示；完成后用解答核对方法、条件与结果。所有题目均为**自拟题**，没有官方分值。英文题干、公式、数值与英文页一致；中文解释帮助你逐步独立用英文作答。

- [L06 从割线到导数与法线](#l06)
- [L07 单调性、驻点与可行最值](#l07)

## L06 · 从割线到导数与法线 {#l06}

目标：理解局部斜率，求有理幂导数，并写切线、法线。先修：L01、L04。

对 $y=x^2$，从 $(1,1)$ 连到横坐标 $x=1.1,1.01,1.001$ 的邻点，割线斜率分别为 $2.1,2.01,2.001$，趋向 2。这建立切线斜率的极限直觉，不要求用第一原理求导。使用幂法则，并逐项处理和差：

$$\frac{d}{dx}(ax^n)=anx^{n-1}.$$

先把根式、分式改写成幂。横坐标 $x=c$ 处切线经过 $(c,f(c))$，斜率为 $f'(c)$。该斜率非零时法线斜率为 $-1/f'(c)$；切线水平时法线是 $x=c$。坐标有单位时，导数单位为输出单位除以输入单位。

![在 y=x² 上，P(1,1) 至 Q(2,4) 的割线比 P 处切线更陡。图中标有 x、y 轴。](/alevel/as-mathematics/assets/secant.svg)

### 示范与推理 {#l06-worked}

**Question:** For $f(x)=x^2+4\sqrt x$, find the tangent and normal at $x=1$.

在 $x>0$ 时，$f'(x)=2x+2x^{-1/2}$。点为 $(1,5)$，斜率为 $4$。切线为 $y-5=4(x-1)$；法线为 $y-5=-\frac14(x-1)$。斜率乘积为 −1，且均经过指定点，分别检查了方向与位置。

### 带支架尝试 {#l06-scaffold}

**Question:** Rewrite and differentiate $3/x^2-2\sqrt x$ for $x>0$.

<details markdown="1">
<summary>提示</summary>

使用指数 −2 与 1/2。

</details>

<details markdown="1">
<summary>解答与核验</summary>

$3x^{-2}-2x^{1/2}$ 的导数为 $-6x^{-3}-x^{-1/2}$。

</details>

### 独立任务 {#l06-independent}

**Question:** A tangent to $y=x^2$ is parallel to $y=6x-1$. Find its point of contact and the normal there.

<details markdown="1">
<summary>提示</summary>

把平行条件转化为梯度方程。

</details>

<details markdown="1">
<summary>解答与核验</summary>

$2x=6$ 得切点 $(3,9)$。法线为 $y-9=-\frac16(x-3)$。

</details>

### 诊断与修正 {#l06-diagnosis}

高度 $f(c)$ 不等于斜率 $f'(c)$。零斜率不能取负倒数，因为不能除以零；此时应画竖直法线。

### 再尝试 {#l06-retry}

**Question:** Find the normal to $y=x^2-4x+1$ at its stationary point.

<details markdown="1">
<summary>提示</summary>

先找导数为零处，再判断法线方向。

</details>

<details markdown="1">
<summary>解答与核验</summary>

$2x-4=0$ 得 $x=2$，故法线为 $x=2$（该点是 $(2,-3)$）。

</details>

## L07 · 单调性、驻点与可行最值 {#l07}

目标：论证增减区间，并在实际约束内求最值。先修：L02、L06。

在一个区间内，导数为正表示递增，为负表示递减。驻点满足 $f'(c)=0$。导数由正变负给极大，由负变正给极小。驻点处 $f''(c)>0$ 给极小，$f''(c)<0$ 给极大；若 $f''(c)=0$，应回到导数符号，不能猜。优化先定义所求量，再利用约束消元，最后比较可行驻点与包含的端点。不包含的端点不能当作实际取得的最值。

### 示范与推理 {#l07-worked}

**Question:** A rectangle has perimeter 20 m. Find its greatest area, justifying the result.

设两边为 $x$ 与 $10-x$ 米，$0<x<10$。则 $A=10x-x^2$、$A'=10-2x$、$A''=-2$。导数在 $x=5$ 之前为正、之后为负，因此全区间最大面积为 $25\,\mathrm{m^2}$，由正方形取得。两端极限面积为零，不会给更大的结果。

### 带支架尝试 {#l07-scaffold}

**Question:** For $f(x)=x^3-3x$, find and classify the stationary points and give its increasing intervals.

<details markdown="1">
<summary>提示</summary>

把导数因式分解并列符号表。

</details>

<details markdown="1">
<summary>解答与核验</summary>

$f'=3(x-1)(x+1)$ 在 $-1,1$ 分隔的三区间符号依次为正、负、正。极大点为 $(-1,2)$，极小点为 $(1,-2)$；在 $x<-1$ 与 $x>1$ 递增。$f''=6x$ 也可核对分类。

</details>

### 独立任务 {#l07-independent}

**Question:** The same 20 m perimeter rectangle must have width $x\le3$ m. Can an area of $24\,\mathrm{m^2}$ be attained? Give a reason without merely solving an unconstrained stationary-point equation.

<details markdown="1">
<summary>提示</summary>

先限制可行区间，再判断它的最大面积。

</details>

<details markdown="1">
<summary>解答与核验</summary>

在 $0<x\le3$ 内，$10-2x>0$，面积一直递增。最大为 $A(3)=21\,\mathrm{m^2}$，所以在此宽度约束下不能达到 $24\,\mathrm{m^2}$。

</details>

### 诊断与修正 {#l07-diagnosis}

解导数方程只得到候选点，不能忽略约束。二阶导数为零只是判别无结论，并不自动表示极大或极小。

### 再尝试 {#l07-retry}

**Question:** Find the least value of $x^2-6x+12$ on $0\le x\le2$, with a reason.

<details markdown="1">
<summary>提示</summary>

检查给定区间内导数的符号。

</details>

<details markdown="1">
<summary>解答与核验</summary>

全区间 $2x-6<0$，函数递减。最小值为 $4$，在包含的端点 $x=2$ 取得。

</details>

## 学完之后 {#next-step}

收起解答，检查自己能否独立完成本课各组的再尝试，并解释方法与适用条件。仍有困难时回看对应示范；完成后继续下一课。

[上一课：坐标几何](/zh/alevel/as-mathematics/coordinate-geometry/) · [课程目录](/zh/alevel/as-mathematics/#learning-route) · [下一课：积分与近似](/zh/alevel/as-mathematics/integration/)

## 来源与范围 {#sources}

按[当前 9660 官方大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf)组织。配套评分材料用于核对作答证据；本页题目全部另行自拟，不能称为官方原题或官方评分标准。

Specification §3.1 P1.3. The paired MA01 January 2025 material informs method-evidence conventions; these derivative examples are independently self-written.

[MA01 2025 年 1 月原卷](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-question-paper.pdf) · [配套 MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-mark-scheme.pdf) · [MA02 2025 年 1 月原卷](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-question-paper.pdf) · [配套 MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-mark-scheme.pdf)

完成标准是能独立解释方法与检查条件，不是看完解答。未经过学生试用，不据此宣称学习效果已验证。
