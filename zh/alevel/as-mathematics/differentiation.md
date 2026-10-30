---
layout: subjects
title: "微分"
mathjax: true
grade: as
subject: as-mathematics
lang: zh-CN
translation_of: /alevel/as-mathematics/differentiation/
permalink: /zh/alevel/as-mathematics/differentiation/
toc_headings: h2
reading_layout: true
study_page: true
---

[AS 数学学习路线](/zh/alevel/as-mathematics/#learning-route) · P1.3 · OxfordAQA 9660 v5.2
{:.lesson-meta}

先读懂解释和完整示范，再拿纸笔做题。提示与解答分别展开。所有题目均为**自拟题**，没有官方分值；保留英文题干，中文帮助你理解和逐步独立表达。

- [斜率、导数与法线](#l06)
- [哪里取得最大或最小值？](#l07)

## 斜率、导数与法线 {#l06}

目标：求局部斜率、幂函数的导数及切线、法线。先修：[分数指数](/zh/alevel/as-mathematics/algebra/#l01-indices)与[直线](/zh/alevel/as-mathematics/coordinate-geometry/#l04)。

### 曲线在一个点有多陡？ {#l06-concept}

直线的斜率固定，曲线的斜率却可能一路改变。先看 $y=x^2$ 上的 $(1,1)$：另取横坐标 $x=1.1,1.01,1.001$ 的点，连线斜率依次为 $2.1,2.01,2.001$。第二个点越来越近，斜率越来越接近 2；这就是这里切线的斜率。

导数（derivative）把每个位置的局部斜率写成一个规则，记作 $f'(x)$ 或 $dy/dx$。这门 AS 单元需要理解“斜率趋近”的意思，不要求从定义推导。对幂函数，先乘原指数，再把指数减一：

$$\frac{d}{dx}(ax^n)=anx^{n-1}.$$

这里 $n$ 可以是有理数，但原式和导数必须有定义。先把根式、分式改写成幂，再一项一项求导。常数不变，所以导数是零。

当 $x=c$ 时，点是 $(c,f(c))$，切线斜率是 $f'(c)$；“高度”和“有多陡”是两个不同的数。把点和斜率一起代入直线公式。法线（normal）垂直于切线；当 $f'(c)\ne0$ 时，法线斜率为 $-1/f'(c)$。水平切线对应竖直法线 $x=c$。斜率的单位是输出单位除以输入单位。

![在 y=x² 上，P(1,1) 至 Q(2,4) 的割线比 P 处切线更陡。图中标有 x、y 轴。](/alevel/as-mathematics/assets/secant.svg)

<div class="worked-example" markdown="1">

### 完整示范 {#l06-worked}

**Question:** For $f(x)=x^2+4\sqrt x$, find the tangent and normal at $x=1$.

这里需要两个不同的信息：这个点有多高，以及曲线在这里有多陡。先写成 $f(x)=x^2+4x^{1/2}$。在 $x>0$，用幂函数求导法则：

$$f'(x)=2x+4\left(\frac12\right)x^{-1/2}=2x+2x^{-1/2}.$$

当 $x=1$，高度为 $f(1)=5$，斜率为 $f'(1)=4$。切线通过点 $(1,5)$、斜率为 4，因此：

$$y-5=4(x-1).$$

法线与切线垂直，斜率为 −1/4，所以：

$$y-5=-\frac14(x-1).$$

两线都经过所求点，斜率乘积为 −1。这样分别核对了位置与方向。

</div>

<div class="lesson-check" markdown="1">

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

</div>

<div class="lesson-check" markdown="1">

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

</div>

<div class="lesson-check" markdown="1">

### 再做一道独立题 {#l06-independent-powers}

**Question:** For $x>0$, a curve is $y=6/x+3\sqrt x$. Find $dy/dx$ and the gradient at $x=4$. Show how you handled the two different forms of x.

<details markdown="1">
<summary>提示</summary>

先把每一项写成幂的形式，再求导。

</details>

<details markdown="1">
<summary>解答与检查</summary>

先写成 $y=6x^{-1}+3x^{1/2}$，然后逐项使用幂函数求导法则：

$$\frac{dy}{dx}=-6x^{-2}+\frac32x^{-1/2}.$$

在 $x=4$，斜率为 $-6/16+(3/2)/2=3/8$。题目给定 $x>0$，这些幂及其导数都有意义。

</details>

</div>

### 诊断与修正 {#l06-diagnosis}

高度 $f(c)$ 不等于斜率 $f'(c)$。零斜率不能取负倒数，因为不能除以零；此时应画竖直法线。

如果错在幂的改写，回补[分数与负指数](/zh/alevel/as-mathematics/algebra/#l01-indices)，再试[另一种商式](#l06-retry-powers)。如果混淆高度和斜率，回看[切法线示范](#l06-worked)，再做[零斜率重试题](#l06-retry)。

<div class="lesson-check" markdown="1">

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

</div>

<div class="lesson-check" markdown="1">

### 换一种写法再试 {#l06-retry-powers}

**Question:** For $x>0$, find the derivative of $y=(2x^2+3)/\sqrt x$ and its value at $x=1$.

<details markdown="1">
<summary>提示</summary>

先让分子中的每一项分别除以分母，再用幂函数求导法则。

</details>

<details markdown="1">
<summary>解答与检查</summary>

改写为 $y=2x^{3/2}+3x^{-1/2}$，得到 $dy/dx=3x^{1/2}-\frac32x^{-3/2}$，在 $x=1$ 时为 $3/2$。在给定范围内，原式的分母为正。

</details>

</div>

## 哪里取得最大或最小值？ {#l07}

目标：解释增减变化，并在题目允许范围内找最大或最小值。先修：[二次式](/zh/alevel/as-mathematics/algebra/#l02)与[导数](#l06)。

### 算出的候选点还要符合题意 {#l07-concept}

导数为正，表示向右走时图像上升；导数为负，表示图像下降。驻点（stationary point）的导数为零。如果导数由正变负，图像先升后降，出现局部最大值；由负变正，则出现局部最小值。

把导数再求一次导数，得到二阶导数。在驻点处，它为正可判最小值，为负可判最大值。如果等于零，这个检验不能决定，要回头检查导数的正负变化。

实际问题先设变量，写出它允许的范围。利用约束，把要优化的量写成只含这个变量的式子，再找候选点并检查整个允许范围，包括允许取到的端点。算出的驻点如果不在范围内，就不能作答案；不包含的端点也不能说已经取得最大或最小值。

<div class="worked-example" markdown="1">

### 完整示范 {#l07-worked}

**Question:** A rectangle has perimeter 20 m. Find its greatest area, justifying the result.

设两边为 $x$ 与 $10-x$ 米，$0<x<10$。则 $A=10x-x^2$、$A'=10-2x$、$A''=-2$。导数在 $x=5$ 之前为正、之后为负，因此全区间最大面积为 $25\,\mathrm{m^2}$，由正方形取得。两端极限面积为零，不会给更大的结果。

</div>

<div class="lesson-check" markdown="1">

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

</div>

<div class="lesson-check" markdown="1">

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

</div>

### 诊断与修正 {#l07-diagnosis}

解导数方程只得到候选点，不能忽略约束。二阶导数为零只是判别无结论，并不自动表示极大或极小。

如果选了不允许的候选值，回看[矩形的可行范围](#l07-worked)，再做[有限区间重试题](#l07-retry)。

<div class="lesson-check" markdown="1">

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

</div>

## 学完之后 {#next-step}

收起解答，检查自己能否独立完成本课各组的再尝试，并解释方法与适用条件。仍有困难时回看对应示范；完成后继续下一课。

[上一课：坐标几何](/zh/alevel/as-mathematics/coordinate-geometry/) · [课程目录](/zh/alevel/as-mathematics/#learning-route) · [下一课：积分与近似](/zh/alevel/as-mathematics/integration/)

学完这条路线后，做[综合题](/zh/alevel/as-mathematics/#mixed-foundations)。在之后一次学习中，关掉解答完成[回顾题](/zh/alevel/as-mathematics/#later-foundations)。

## 来源与范围 {#sources}

<details class="lesson-notes" markdown="1">
<summary>查看范围与评分材料</summary>

按[当前 9660 官方大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf)组织。配套评分材料用于核对作答证据；本页题目全部另行自拟，不能称为官方原题或官方评分标准。

Specification §3.1 P1.3. The paired MA01 January 2025 material informs method-evidence conventions; these derivative examples are independently self-written.

[MA01 2025 年 1 月原卷](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-question-paper.pdf) · [配套 MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-mark-scheme.pdf) · [MA02 2025 年 1 月原卷](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-question-paper.pdf) · [配套 MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-mark-scheme.pdf)

完成标准是能独立解释方法与检查条件，不是看完解答。未经过学生试用，不据此宣称学习效果已验证。

</details>

{% include exam_topic_practice.html %}
