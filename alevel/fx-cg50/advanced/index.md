---
layout: subjects
title: fx-CG50 进阶指南
description: 第 4–10 章、任务 15–31：方程、图像、表格、微积分、统计与概率的操作。
lang: zh-CN
author: Eric Shi
study_page: true
cg50_stage: advanced
toc_headings: h2, h3
permalink: /alevel/fx-cg50/advanced/
---

<link rel="stylesheet" href="{{ '/assets/css/fx-cg50.css' | relative_url }}?v=20261010-routes">

<div class="cg50-guide" markdown="1">

{% include fx-cg50-navigation.html %}

本阶段是第 4–10 章、任务 15–31：把基本输入用到方程、图像、表格、微积分、统计与概率题中。按章节顺序学习，也可以用本页目录直接查需要的操作。

**开始前：** 完成[初学]({{ '/alevel/fx-cg50/beginner/' | relative_url }})；至少熟悉[按键读法]({{ '/alevel/fx-cg50/beginner/' | relative_url }}#reading-keys)、[角度与显示设置]({{ '/alevel/fx-cg50/beginner/' | relative_url }}#chapter-2)和[输入模板]({{ '/alevel/fx-cg50/beginner/' | relative_url }}#chapter-3)。

第 4–9 章已在 03.81.0202 中文固件逐项核对并配图，尚未在这台中文版实机验收。考试模式与全书核对进度见[指南总览]({{ '/alevel/fx-cg50/' | relative_url }}#next-chapters)。

以下题目均为**自拟操作练习**，用于学会按键，并非 AQA 或 OxfordAQA 真题。可配合 [A2 三角函数](/alevel/a2-mathematics/trigonometric-functions-and-formulae/)、[指数与对数](/alevel/a2-mathematics/exponential-and-logarithmic-functions/) 和 [数值方法](/alevel/a2-mathematics/numerical-methods/) 的课程内容学习。

## 第 4 章 解方程与验证答案 {#chapter-4}

**第 4–9 章已在 03.81.0202 中文固件逐项核对并配图。** 本节起的例题仍为自拟操作练习。先保留已有函数与列表数据；练习需要覆盖原内容时，先记录下来。

进入 **解方程（组）** 时会保留上次的页面。若看到结果或系数表，先按 `EXIT`，直到出现“选择类型”页：`F1（方程组）`、`F2（多项式）`、`F3（解）`，再选择本次模式。

### 任务 15 解二次方程 {#task-15}

**Solve $x^2-3x-4=0$.**

1. 按 `MENU`，用方向键选择 **解方程（组）**，按 `EXE`。
2. 按 `F2（多项式）`，选择二次，即 `F1（2）`。
3. 系数按降幂排列。依次输入 `1 → EXE → (−) → 3 → EXE → (−) → 4 → EXE`。
4. 核对屏幕上的系数为 $1,-3,-4$，按 `F1（求解）`。
5. 应得到两个根 $-1$ 和 $4$；显示顺序不影响答案。

<div class="cg50-screens">
<figure><img src="{{ '/assets/img/fx-cg50/S13-quadratic-coefficients.png' | relative_url }}" width="384" height="216" loading="lazy" data-lazy-ignore alt="二次方程系数为 1、−3、−4"><figcaption>核对降幂排列的系数 1、−3、−4，再按 F1（求解）。</figcaption></figure>

<figure><img src="{{ '/assets/img/fx-cg50/S14-quadratic-roots.png' | relative_url }}" width="384" height="216" loading="lazy" data-lazy-ignore alt="二次方程求解显示 x1 等于 4、x2 等于 −1"><figcaption>两个根为 4 和 −1；结果页按 EXIT 返回系数表。</figcaption></figure>
</div>

多项式模式输入的是系数，不是整条方程。先把方程整理成右边为零的形式：例如 $x^2=3x+4$ 也应输入 $1,-3,-4$。缺项的系数输入零，例如 $x^3-8=0$ 的系数是 $1,0,0,-8$。

<details><summary>怎样验证，而不是只抄两个数字？</summary>

因式分解得 $(x-4)(x+1)=0$，所以 $x=4$ 或 $x=-1$。分别代入原式都应得到零。若题目要求代数过程，把因式分解写在答题纸上。

</details>

### 任务 16 解二元一次方程组 {#task-16}

**Solve simultaneously:**

$$\begin{cases}2x+y=7,\\x-y=2.\end{cases}$$

1. 在 **解方程（组）** 的“选择类型”页按 `F1（方程组）→ F1（2）`，选择两个未知数。
2. 屏幕采用 $ax+by=c$。第一行输入 $2,1,7$，第二行输入 $1,-1,2$；每个数后按 `EXE` 保存。
3. 检查两行，按 `F1（求解）`，读出 $x=3,\ y=1$。
4. 验证 $2(3)+1=7$、$3-1=2$。

<div class="cg50-screens">
<figure><img src="{{ '/assets/img/fx-cg50/S15-simultaneous-coefficients.png' | relative_url }}" width="384" height="216" loading="lazy" data-lazy-ignore alt="二元方程组系数两行为 2、1、7 和 1、−1、2"><figcaption>每一行均按 ax＋by＝c 输入，最后一列是等号右边的常数。</figcaption></figure>

<figure><img src="{{ '/assets/img/fx-cg50/S16-simultaneous-solution.png' | relative_url }}" width="384" height="216" loading="lazy" data-lazy-ignore alt="二元方程组解为 x 等于 3、y 等于 1"><figcaption>读取 X＝3、Y＝1，并代回两条原方程检查。</figcaption></figure>
</div>

**常见错误：** 第二个方程若写成 $x=y+2$，要先改写为 $x-y=2$。这里 $y$ 的系数是 $-1$。不要把常数也移到左边后，仍按照 $ax+by=c$ 输入。

### 任务 17 求一个非多项式方程的数值解 {#task-17}

**Find the root of $e^{-x}=x$ in $0<x<1$. Give your answer to three decimal places.**

1. 进入 **解方程（组）**，按 `F3（解）`。
2. 输入 $e^{-x}-x$，按 `EXE`。先按 `SHIFT → ln → (−) → X,θ,T` 输入指数；按右方向键离开指数，再按 `− → X,θ,T → EXE`。省略等号时，求解器把整个表达式看作等于零。注意指数里的负号用 `(−)`，指数外的减法用 `−`。
3. 在变量表中把 $X$ 的起始值设为 $0.5$，下限设为 $0$，上限设为 $1$。
4. 把光标移回 $X$，按 `F6（求解）`。结果应接近 $0.5671432904$，按题目要求写成 $0.567$。
5. 检查结果屏幕的左、右值是否接近，并把结果代回原方程检查。

<div class="cg50-screens">
<figure><img src="{{ '/assets/img/fx-cg50/S17-numerical-solver-settings.png' | relative_url }}" width="384" height="216" loading="lazy" data-lazy-ignore alt="数值求解初始值 x 等于 0.5，下界 0，上界 1"><figcaption>输入初始值与上下界后，移回 x 行，按 F6（求解）。</figcaption></figure>

<figure><img src="{{ '/assets/img/fx-cg50/S18-numerical-solver-root.png' | relative_url }}" width="384" height="216" loading="lazy" data-lazy-ignore alt="数值求解结果 x 等于 0.5671432904，左值右值均为 0"><figcaption>本例输入的是 e^(−x)−x＝0，所以左、右值都应接近 0。</figcaption></figure>
</div>

“解”使用数值方法，一次给出一个解。更换起始值可能找到另一个解，也可能不收敛；一次求解不能证明已经找齐所有根。本例中 $e^{-x}$ 递减而 $x$ 递增，结合端点的大小关系可判断区间内只有一个交点。

**本章完成检查：** 能选择合适的模式、按正确顺序输入系数、验证所得解，并区别近似解与精确解。参考手册第 4-1 至 4-5 页。

## 第 5 章 绘制与分析函数图像 {#chapter-5}

进入应用后若仍显示上次的图像，先按 `EXIT` 回到函数列表，再输入新函数。

### 任务 18 画图并设置窗口 {#task-18}

**Sketch $y=x^2-3x-4$.**

1. 按 `MENU`，进入 **图形**。检查函数类型为 `Y=`；需要更改时在函数列表按 `F3（类型）→ F1（Y=）`。
2. 在一个可用的 $Y$ 行输入 $x^2-3x-4$，按 `EXE`。屏幕已有 `Y1=` 时，只输入右边的表达式。
3. 按 `SHIFT → F3（V-Window）` 打开查看视窗，按行名设置下表参数。每次输入后按 `EXE`；X 刻度下方另有“点距”行，跳过它再设置 Y 范围，不改点距与 Tθ 参数。
4. 按 `EXIT` 回到函数列表。确认本次函数已选中，其他暂时不用的函数取消选择；按 `F1（选择）` 切换当前行的选择状态。
5. 按 `F6（绘图）`。

| 参数 | 建议值 | 表示什么 |
| --- | --- | --- |
| X 最小值、最大值 | $-3,7$ | 横轴显示范围 |
| X 刻度 | $1$ | 横轴刻度间距 |
| Y 最小值、最大值 | $-8,10$ | 纵轴显示范围 |
| Y 刻度 | $2$ | 纵轴刻度间距 |

窗口只改变你看到的范围，不改变函数本身。图像出界或看起来像直线时，先检查窗口；不要马上改函数。输入负数参数时用 `(−)` 键。

<div class="cg50-screens">
<figure><img src="{{ '/assets/img/fx-cg50/S23-graph-function.png' | relative_url }}" width="384" height="216" loading="lazy" data-lazy-ignore alt="函数列表的 Y1 为 x²−3x−4"><figcaption>输入函数右边的表达式；本例存放在 Y1。</figcaption></figure>
<figure><img src="{{ '/assets/img/fx-cg50/S24-graph-window-top.png' | relative_url }}" width="384" height="216" loading="lazy" data-lazy-ignore alt="X 最小值 −3、X 最大值 7、X 刻度 1"><figcaption>先设置横轴范围与刻度；“点距”行不需要改。</figcaption></figure>
<figure><img src="{{ '/assets/img/fx-cg50/S25-graph-window.png' | relative_url }}" width="384" height="216" loading="lazy" data-lazy-ignore alt="Y 最小值 −8、Y 最大值 10、Y 刻度 2"><figcaption>向下查看纵轴设置；本例 Y 刻度为 $2$。</figcaption></figure>
<figure><img src="{{ '/assets/img/fx-cg50/S26-graph-parabola.png' | relative_url }}" width="384" height="216" loading="lazy" data-lazy-ignore alt="抛物线 y 等于 x²−3x−4 的图像"><figcaption>图像应显示两个零点和位于横轴下方的顶点。</figcaption></figure>
</div>

### 任务 19 找零点、极小值与交点 {#task-19}

1. 保持上题图像，按 `SHIFT → F5（G-Solv，图解）→ F1（零点）`。若有多个图像闪烁，用上下方向键选中目标，按 `EXE`。
2. 应找到 $x=-1$；用右方向键查看下一个零点 $x=4$，左方向键返回。
3. 重新打开 **图解**，按 `F3（极小值）`。应得到 $(1.5,-6.25)$，即顶点。
4. 按 `EXIT` 返回函数列表，在另一行输入 $x+2$，选中这两条函数并重新绘图。
5. 按 `SHIFT → F5（图解）→ F5（交点）`；若提示选择图像，依次选中这两条。
6. 应找到两个交点，横坐标约为 $-1.16228$ 和 $5.16228$；用左右方向键切换结果。

<div class="cg50-screens">
<figure><img src="{{ '/assets/img/fx-cg50/S27-graph-root-left.png' | relative_url }}" width="384" height="216" loading="lazy" data-lazy-ignore alt="左侧零点 x 等于 −1，y 等于 0"><figcaption>第一个零点：$x=-1$。</figcaption></figure>
<figure><img src="{{ '/assets/img/fx-cg50/S28-graph-root-right.png' | relative_url }}" width="384" height="216" loading="lazy" data-lazy-ignore alt="右侧零点 x 等于 4，y 等于 0"><figcaption>按右方向键查看下一个零点：$x=4$。</figcaption></figure>
<figure><img src="{{ '/assets/img/fx-cg50/S29-graph-minimum.png' | relative_url }}" width="384" height="216" loading="lazy" data-lazy-ignore alt="极小值点 x 等于 1.5，y 等于 −6.25"><figcaption>F3（极小值）返回坐标 $(1.5,-6.25)$。</figcaption></figure>
<figure><img src="{{ '/assets/img/fx-cg50/S30-graph-two-functions.png' | relative_url }}" width="384" height="216" loading="lazy" data-lazy-ignore alt="函数列表选中 Y1 等于 x²−3x−4 和 Y2 等于 x+2"><figcaption>找交点前，确认这两条函数都已选中。</figcaption></figure>
<figure><img src="{{ '/assets/img/fx-cg50/S31-graph-intersection-left.png' | relative_url }}" width="384" height="216" loading="lazy" data-lazy-ignore alt="左侧交点 x 约为 −1.16227766，y 约为 0.8377223398"><figcaption>读取左侧交点的完整坐标。</figcaption></figure>
<figure><img src="{{ '/assets/img/fx-cg50/S32-graph-intersection-right.png' | relative_url }}" width="384" height="216" loading="lazy" data-lazy-ignore alt="右侧交点 x 约为 5.16227766，y 约为 7.16227766"><figcaption>按右方向键，等待计算完成，再读另一个交点。</figcaption></figure>
</div>

<details><summary>交点的精确答案和坐标</summary>

联立 $x^2-3x-4=x+2$，得到 $x^2-4x-6=0$，所以 $x=2\pm\sqrt{10}$。代入 $y=x+2$，交点为 $(2-\sqrt{10},4-\sqrt{10})$ 和 $(2+\sqrt{10},4+\sqrt{10})$。

</details>

图解结果受窗口和数值精度影响。窗口外的根不会凭空出现在屏幕上；与横轴相切的根也可能难以检出。屏幕上的连线不能代替对渐近线、定义域和不连续点的分析。

**本章完成检查：** 会选择函数、调整窗口、读取完整坐标，并逐个检查多个结果。参考手册第 5-2、5-5、5-56 至 5-58 页。

## 第 6 章 使用数值表 {#chapter-6}

进入应用后若仍显示上次的数值表，先按 `EXIT` 回到函数列表。

### 任务 20 用表格找根所在的区间 {#task-20}

**Locate a root of $x^3-x-1=0$ between $1$ and $1.5$.**

1. 按 `MENU`，进入 **表格**，在可用的 $Y$ 行输入 $x^3-x-1$，按 `EXE`。图形与表格共用函数列表；沿用上章时可放在 Y3，保留 Y1、Y2。
2. 按 `F5（设定）`，把开始值设为 $1$，终止值设为 $1.5$，步长设为 $0.1$。每个数后按 `EXE`，再按 `EXIT`。
3. 用 `F1（选择）` 确保本次函数已选中，取消其他暂时不用的函数，再按 `F6（表）`。
4. 找到 $f(1.3)=-0.103$ 与 $f(1.4)=0.344$。本例函数连续，所以这两个值异号说明区间 $(1.3,1.4)$ 内至少有一个根。
5. 返回函数列表，再把范围改为 $1.3$ 至 $1.4$、步长改为 $0.01$。应看到根位于 $(1.32,1.33)$。

<div class="cg50-screens">
<figure><img src="{{ '/assets/img/fx-cg50/S33-table-function.png' | relative_url }}" width="384" height="216" loading="lazy" data-lazy-ignore alt="表格函数列表只选中 Y3 等于 x³−x−1"><figcaption>本例保留 Y1、Y2，只选中 Y3 来生成数值表。</figcaption></figure>
<figure><img src="{{ '/assets/img/fx-cg50/S34-table-settings-coarse.png' | relative_url }}" width="384" height="216" loading="lazy" data-lazy-ignore alt="表格开始值 1、终止值 1.5、步长 0.1"><figcaption>F5（设定）：每个数输入后按 EXE。</figcaption></figure>
<figure><img src="{{ '/assets/img/fx-cg50/S35-table-coarse.png' | relative_url }}" width="384" height="216" loading="lazy" data-lazy-ignore alt="数值表中 x 为 1.3 时值为 −0.103，x 为 1.4 时值为 0.344"><figcaption>粗步长显示 $f(1.3)<0$、$f(1.4)>0$。</figcaption></figure>
<figure><img src="{{ '/assets/img/fx-cg50/S36-table-fine.png' | relative_url }}" width="384" height="216" loading="lazy" data-lazy-ignore alt="步长 0.01 的表格在 x 等于 1.32 和 1.33 之间变号"><figcaption>缩小步长后，根位于 $(1.32,1.33)$；列宽可能截短小数。</figcaption></figure>
</div>

步长是相邻 $x$ 值的间距，不是显示小数位数。如果输出的 $x$ 值不按设定变化，检查 `SHIFT → MENU` 中的“变量”是否采用表格范围，而非某个列表。

**异号判断需要连续性。** $1/x$ 在 $-1$ 和 $1$ 的函数值异号，但中间没有零点；$x=0$ 是不连续点。反过来，$(x-1)^2$ 在根的两侧不变号，表格也可能漏掉它。

### 任务 21 求指定自变量的函数值 {#task-21}

**Find $f(1.25)$ for $f(x)=x^3-x-1$.**

在 **表格** 中把开始值设为 $1.25$、终止值设为 $1.35$、步长设为 $0.1$，生成表格后选中第一行对应的 $Y$ 结果单元，读取屏幕底部的完整数值 $-0.296875$；可用右方向键从 $x$ 列移到结果列。表格单元受列宽限制，可能只显示截短的小数。使用表格能避免把长函数反复重打；每次读值都要同时核对左侧 $x$ 列与正确的 $Y$ 列。

<div class="cg50-screens">
<figure><img src="{{ '/assets/img/fx-cg50/S37-table-point-value.png' | relative_url }}" width="384" height="216" loading="lazy" data-lazy-ignore alt="选中 x 等于 1.25 的 Y3 结果单元，屏幕底部显示 −0.296875"><figcaption>选中结果单元后，底部显示完整值 $-0.296875$。</figcaption></figure>
</div>

**本章完成检查：** 会设置范围与步长、识别对应列，并能解释异号判断的条件。参考手册第 5-32 至 5-34 页。

## 第 7 章 微积分中的计算器辅助 {#chapter-7}

### 任务 22 求指定点的导数值 {#task-22}

**For $f(x)=x^3-3x$, find $f'(2)$.**

1. 进入 **计算·矩阵**，采用数学输入/输出。
2. 按 `OPTN → F4（计算）→ F2（d/dx）` 调出导数模板。
3. 在函数区域输入 $x^3-3x$，按右方向键移到求值点的格子，输入 $2$。输入 $x^3$ 后也要先按右方向键离开指数，再输入 $-3x$。
4. 核对显示的是在 $x=2$ 处求导，按 `EXE`。结果应为 $9$。

<div class="cg50-screens">
<figure><img src="{{ '/assets/img/fx-cg50/S38-derivative-input.png' | relative_url }}" width="384" height="216" loading="lazy" data-lazy-ignore alt="导数模板中函数为 x³−3x，求值点 x 为 2"><figcaption>执行前确认求值点在 $x=2$ 的格子。</figcaption></figure>
<figure><img src="{{ '/assets/img/fx-cg50/S39-derivative-result.png' | relative_url }}" width="384" height="216" loading="lazy" data-lazy-ignore alt="在 x 等于 2 处的导数值为 9"><figcaption>导数值为 $9$，下一行可直接输入新算式。</figcaption></figure>
</div>

导数模板返回一个点的数值，不是完整的导函数。纸笔计算为 $f'(x)=3x^2-3$，再代入 $2$ 得到 $9$。求三角函数导数前要检查角度单位为**弧度**；不可微点附近的数值结果不能用来证明可微。

### 任务 23 求定积分并区分面积 {#task-23}

**Evaluate $\displaystyle\int_0^2(x^2-1)\,dx$.**

1. 在 **计算·矩阵** 按 `OPTN → F4（计算）→ F4（∫dx）` 调出积分模板。
2. 函数区域输入 $x^2-1$；按右方向键移到下限格子输入 $0$，再按右方向键移到上限格子输入 $2$。
3. 检查上、下限的位置，再按 `EXE`。本例显示 $\frac{2}{3}$；按 `S↔D` 可查看小数 $0.6666666667$。

<div class="cg50-screens">
<figure><img src="{{ '/assets/img/fx-cg50/S40-integral-input.png' | relative_url }}" width="384" height="216" loading="lazy" data-lazy-ignore alt="定积分模板的下限为 0，上限为 2，被积函数为 x²−1"><figcaption>执行前检查上下限；上方的 $9$ 属于上一道导数练习。</figcaption></figure>
<figure><img src="{{ '/assets/img/fx-cg50/S41-integral-result.png' | relative_url }}" width="384" height="216" loading="lazy" data-lazy-ignore alt="定积分 0 到 2 的 x²−1 的结果为 2/3"><figcaption>本例结果显示为 $\frac23$；仍需区分定积分与总面积。</figcaption></figure>
</div>

数值积分的显示形式不保证是精确分数。若题目要求 exact answer，用解析过程：

$$\int_0^2(x^2-1)\,dx=\left[\frac{x^3}{3}-x\right]_0^2=\frac23.$$

<details><summary>这条曲线与横轴围成的总面积也等于 2/3 吗？</summary>

不是。曲线在 $(0,1)$ 位于横轴下方，在 $(1,2)$ 位于横轴上方。总面积应分别计算后取正值：

$$A=-\int_0^1(x^2-1)\,dx+\int_1^2(x^2-1)\,dx=\frac23+\frac43=2.$$

定积分保留符号，面积相加要按正值处理。一个跨越正负区域的积分，可能因为抵消而很小。

</details>

**本章完成检查：** 不颠倒积分上下限，不把导数值当成导函数，不把带符号积分直接当成总面积。参考手册第 2-28 至 2-33 页。

## 第 8 章 统计数据处理 {#chapter-8}

### 任务 24 输入数据并读取均值、标准差 {#task-24}

**For the data $2,4,4,6$, find the mean and population standard deviation.**

1. 按 `MENU`，进入 **统计**。选择一个没有需要保留数据的列表，本例采用 `List 1`。确认该列表没有额外旧数据。
2. 在 `List 1` 逐行输入 $2,4,4,6$，每个数后按 `EXE`。
3. 按 `F2（计算）→ F6（设定）`。把“单变量X列表”指定为 `List 1`，把“单变量频数”设为 **1**，表示每一行出现一次。
4. 按 `EXIT` 回到“计算”菜单，直接按 `F1（单变量）`；若已返回最外层列表菜单，才先按 `F2（计算）`。
5. 上下滚动结果，核对 $n=4$、$\bar{x}=4$。总体标准差约为 $1.41421356$，样本标准差约为 $1.63299316$。

<div class="cg50-screens">
<figure><img src="{{ '/assets/img/fx-cg50/S42-statistics-data.png' | relative_url }}" width="384" height="216" loading="lazy" data-lazy-ignore alt="List 1 逐行输入 2、4、4、6"><figcaption>每个数占一行；本例共有 $4$ 个数据。</figcaption></figure>
<figure><img src="{{ '/assets/img/fx-cg50/S43-statistics-settings.png' | relative_url }}" width="384" height="216" loading="lazy" data-lazy-ignore alt="单变量 X 列表为列表 1，单变量频数为 1"><figcaption>逐个输入原始数据时，单变量频数设为 $1$。</figcaption></figure>
<figure><img src="{{ '/assets/img/fx-cg50/S44-statistics-results.png' | relative_url }}" width="384" height="216" loading="lazy" data-lazy-ignore alt="单变量结果为均值 4、总体标准差 1.41421356、样本标准差 1.63299316、n 为 4"><figcaption>先核对 $n=4$，再按题目要求读取 $\sigma_x$ 或 $s_x$。</figcaption></figure>
</div>

| 统计量 | 意义 | 本例 |
| --- | --- | --- |
| $n$ | 数据总个数，使用频数时为频数总和 | $4$ |
| $\bar{x}$ | 均值 | $4$ |
| $\sigma_x$ | 总体标准差，平方离差之和除以 $n$ 后开方 | $\sqrt2$ |
| $s_x$ | 样本标准差，平方离差之和除以 $n-1$ 后开方 | $\sqrt{8/3}$ |

本版结果页用 `σx` 表示总体标准差，用 `sx` 表示样本标准差；不能只凭它显示在第几行。题目要求哪一种，就读哪一种。已知总体标准差与从样本估计标准差，也不是同一个概念。

### 任务 25 使用频数表 {#task-25}

**Use the frequency table below to find the mean.**

| 数据值 $x$ | 频数 $f$ |
| --- | --- |
| $2$ | $1$ |
| $4$ | $2$ |
| $6$ | $1$ |

1. 按 `EXIT` 返回数据列表；若底部仍是“单变量”“双变量”，再按一次 `EXIT`，使底部显示“图形”“计算”。在可用的两列分别输入：`List 1` 为 $2,4,6$，`List 2` 为 $1,2,1$。保证两列长度相同，也没有额外旧行。若沿用任务 24 的 `List 1`，重写前三行后，选中多余的第四行，按 `F6（下一页）→ F3（删除）` 删除这个单元；删除后下方数据会向上移动，先确认该行确实不需要保留。
2. 在 `F2（计算）→ F6（设定）` 中，把“单变量X列表”设为 `List 1`。选中“单变量频数”后，按 `F2（列表）→ 2 → EXE`，使该行显示“列表2”。
3. 按 `EXIT → F1（单变量）`。应得到 $n=4$、$\bar{x}=4$，与任务 24 相同。
4. 以后改用原始逐个数据时，记得把“单变量频数”改回 **1**，否则会沿用旧频数列表。

<div class="cg50-screens">
<figure><img src="{{ '/assets/img/fx-cg50/S45-statistics-frequency-data.png' | relative_url }}" width="384" height="216" loading="lazy" data-lazy-ignore alt="List 1 为 2、4、6，List 2 为 1、2、1"><figcaption>数据与频数按行对应，两个列表都只有 $3$ 行。</figcaption></figure>
<figure><img src="{{ '/assets/img/fx-cg50/S46-statistics-frequency-settings.png' | relative_url }}" width="384" height="216" loading="lazy" data-lazy-ignore alt="单变量 X 列表为列表 1，单变量频数为列表 2"><figcaption>频数改为“列表2”；以后计算原始数据时，要改回 $1$。</figcaption></figure>
<figure><img src="{{ '/assets/img/fx-cg50/S47-statistics-frequency-results.png' | relative_url }}" width="384" height="216" loading="lazy" data-lazy-ignore alt="频数表单变量结果的均值为 4，n 为 4"><figcaption>这里的 $n=4$ 是频数之和，结果与任务 24 相同。</figcaption></figure>
</div>

不要把频数列表当作第二组测量值。本例的手算检查是 $\bar{x}=\frac{2\times1+4\times2+6\times1}{1+2+1}=4$。对组距数据使用组中值计算时，所得均值通常是估计值。

**本章完成检查：** 每次先检查数据列表、频数设置与 $n$，再读均值或标准差。参考手册第 6-11、6-23 页。

## 第 9 章 概率分布 {#chapter-9}

本章优先使用主菜单的 **分布** 应用。它以“尾部”图示选择概率区域，与“统计”中的分布菜单是另一条操作路径；不要在两个界面间套用同一组 F 键编号。若仍停在上次的结果或参数页，按 `EXIT` 逐层返回“选择分布类型”页，再选择本题分布。

### 任务 26 二项分布的单点与累积概率 {#task-26}

**Let $X\sim\operatorname{Bin}(10,0.3)$. Find $P(X=3)$ and $P(X\le3)$.**

1. 按 `MENU`，进入 **分布**，选中 **二项分布**，按 `EXE`。
2. 光标移到“尾部”，按 `F4` 选择**单点**区域，即 $X=x$。
3. 设置 $x=3$、试验次数 $n=10$、成功概率 $p=0.3$。中文版手册把试验次数这个字段标为“分布”；若不确定字段含义，按 `F6（详细）` 查看。
4. 移到“执行”，按 `F1（执行）`。图上默认显示四位小数；用左右方向键选中结果概率，按 `OPTN → F1（查看）` 查看完整值 $P(X=3)\approx0.266827932$。单点概率只能查看，不能反向编辑。
5. 按 `EXIT` 逐层返回，直到参数界面，将“尾部”改为 `F1` 的**左尾**，保持参数不变，再执行。应得到 $P(X\le3)\approx0.6496107184$。

<div class="cg50-screens">
<figure><img src="{{ '/assets/img/fx-cg50/S48-binomial-point-settings.png' | relative_url }}" width="384" height="216" loading="lazy" data-lazy-ignore alt="二项分布单点 X 等于 3，分布为 10，p 为 0.3"><figcaption>单点区域对应 $X=3$；“分布”字段填写试验次数 $10$。</figcaption></figure>
<figure><img src="{{ '/assets/img/fx-cg50/S49-binomial-point-full.png' | relative_url }}" width="384" height="216" loading="lazy" data-lazy-ignore alt="选中单点概率后查看完整值 0.266827932"><figcaption>选中概率并按 OPTN → F1，查看完整值。</figcaption></figure>
<figure><img src="{{ '/assets/img/fx-cg50/S50-binomial-left-result.png' | relative_url }}" width="384" height="216" loading="lazy" data-lazy-ignore alt="二项分布左尾事件 X 小于等于 3 的概率约为 0.6496"><figcaption>改为左尾后，事件变为 $X\le3$；蓝色柱包含 $0,1,2,3$。</figcaption></figure>
</div>

单点概率只算一次成功次数；左尾累积概率把从 $0$ 到指定次数的概率相加。先写出所求事件，再选择图示。

### 任务 27 看清严格不等号与区间 {#task-27}

仍使用 $X\sim\operatorname{Bin}(10,0.3)$。

| 题目事件 | 可以输入的事件 | 参考结果 |
| --- | --- | --- |
| $P(X<3)$ | 左尾，$x=2$ | $0.3827827864$ |
| $P(X>3)$ | 右尾，$x=4$；或 $1-P(X\le3)$ | $0.3503892816$ |
| $P(2\le X\le5)$ | 区间，下限 $2$、上限 $5$ | $0.8033426667$ |

参数界面的“尾部”中，`F2` 是包含两端的区间，`F3` 是包含指定值的右尾。二项分布取整数值，所以把 $X>3$ 输入成右尾 $x=3$ 会多算 $P(X=3)$。

<div class="cg50-screens">
<figure><img src="{{ '/assets/img/fx-cg50/S51-binomial-interval-settings.png' | relative_url }}" width="384" height="216" loading="lazy" data-lazy-ignore alt="二项分布区间下限 2，上限 5，试验次数 10，p 为 0.3"><figcaption>区间包含两个端点：$2\le X\le5$。</figcaption></figure>
<figure><img src="{{ '/assets/img/fx-cg50/S52-binomial-interval-result.png' | relative_url }}" width="384" height="216" loading="lazy" data-lazy-ignore alt="二项分布 2 小于等于 X 小于等于 5 的概率约为 0.8033"><figcaption>先核对图上事件，再查看完整值 $0.8033426667$。</figcaption></figure>
</div>

### 任务 28 正态分布的区间概率 {#task-28}

**Let $Y\sim N(70,10^2)$. Find $P(60\le Y\le85)$.**

1. 进入 **分布**，选择 **正态分布**。
2. 在“尾部”选择 `F2` 的区间区域。
3. 依次输入下限 $60$、上限 $85$、标准差 $\sigma=10$、均值 $\mu=70$，每个数后按 `EXE`。移到“执行”，按 `F1（执行）`。
4. 应得到约 $0.7745375448$。若要求三位有效数字，写 $0.775$。

<div class="cg50-screens">
<figure><img src="{{ '/assets/img/fx-cg50/S53-normal-interval-settings.png' | relative_url }}" width="384" height="216" loading="lazy" data-lazy-ignore alt="正态分布下限 60，上限 85，标准差 10，均值 70"><figcaption>本页先输入标准差 $10$，再输入均值 $70$。</figcaption></figure>
<figure><img src="{{ '/assets/img/fx-cg50/S54-normal-interval-result.png' | relative_url }}" width="384" height="216" loading="lazy" data-lazy-ignore alt="正态分布 60 到 85 的区间阴影，概率约为 0.7745"><figcaption>阴影范围应为 $60$ 到 $85$；完整概率约为 $0.7745375448$。</figcaption></figure>
</div>

记号 $N(\mu,\sigma^2)$ 中第二个数是**方差**，计算器的 $\sigma$ 字段要输入标准差。本题输入 $10$，不是 $100$。正态分布是连续分布，单个点的概率为零，严格或非严格区间边界不改变概率。

### 任务 29 由概率反求分位数 {#task-29}

**For $Y\sim N(70,10^2)$, find $k$ such that $P(Y\le k)=0.9$.**

1. 在 **正态分布** 参数界面选择左尾，保持 $\mu=70$、$\sigma=10$。先用 $x=70$ 执行一次，应得到概率 $0.5$。
2. 在结果图形屏幕按右方向键，把突出显示位置从 $x$ 移到**结果概率** $0.5$。这里改的是累积概率，不是分布的均值或标准差。
3. 输入 $0.9$，按 `EXE`。计算器会反向计算 $x$。图上显示约 $82.815$；按左方向键选中 $x$，再按 `OPTN → F1（编辑）`，查看完整值 $82.81551566$。
4. 在显示完整 $x$ 的“输入数值”框直接按 `EXE`，用这个 $x$ 再计算一次左尾概率，确认接近 $0.9$。

<div class="cg50-screens">
<figure><img src="{{ '/assets/img/fx-cg50/S55-normal-inverse-input.png' | relative_url }}" width="384" height="216" loading="lazy" data-lazy-ignore alt="选中左尾概率 0.5 后在输入数值框输入 0.9"><figcaption>先选中结果概率，再输入 $0.9$；这里没有修改均值或标准差。</figcaption></figure>
<figure><img src="{{ '/assets/img/fx-cg50/S56-normal-inverse-full.png' | relative_url }}" width="384" height="216" loading="lazy" data-lazy-ignore alt="正态分布反求的 x 完整值为 82.81551566"><figcaption>反求后选中 $x$，查看完整分位数 $82.81551566$。</figcaption></figure>
</div>

“最高的 10%”对应左侧累计 $90\%$，不是左侧累计 $10\%$。先画出所求区域或写出 $P(Y\le k)$，再输入概率。查看完整数值时要先看哪个量被选中，避免把 $x$ 与概率填反。

**本章完成检查：** 分清单点、左尾、右尾、区间；输入标准差而非方差；概率必须在 $0$ 至 $1$ 之间。参考手册第 18-1 至 18-7 页。

## 第 10 章 常见错误与考前检查 {#chapter-10}

### 任务 30 按现象排查 {#task-30}

| 现象 | 先检查什么 | 接下来做什么 |
| --- | --- | --- |
| 三角函数答案差很多 | 度数或弧度、手动括号 | 对照题目单位，检查完整输入式 |
| 出现语法错误 | 括号是否成对、模板是否填全 | 返回出错位置，修正后重新执行 |
| 出现数学错误 | 除以零、对数或根号的定义域 | 先检查数学表达式是否有定义 |
| 图像空白或关键点看不到 | 函数是否选中、窗口是否合适 | 调整窗口，重新绘图 |
| 只找到一个根 | 采用的模式、起始值、窗口 | 用代数、图像或不同区间交叉检查 |
| 表格不按步长变化 | “变量”是否指定成列表 | 改回表格范围，再核对开始值与终止值 |
| 统计结果的 $n$ 不对 | 旧数据、频数列表、列表长度 | 修正数据来源，再重新计算 |
| 概率非常不合理 | 事件方向、整数边界、$\sigma$ 字段 | 写出事件并估计结果大小后重算 |
| 小数与精确答案不一致 | 舍入、结果形式、内部精度 | 用未舍入结果继续算，纸笔求精确形式 |

修正输入时优先用方向键、`DEL` 和 `EXIT`。一次计算执行完后可以直接输入下一式，不需要例行按 `AC/ON`。不要为一个输入错误重置整台计算器。

### 任务 31 交卷前的答案检查 {#task-31}

- **题目问什么？** 根、坐标、导数值、面积、概率和标准差不能混写。
- **过程够不够？** 要求 show、prove 或解析推导时，计算器结果只用于核对。
- **格式对不对？** exact answer 保留分数、根式或 $\pi$；近似值按题目指定精度写，运算途中保留完整结果。
- **范围和单位对不对？** 不接受定义域外的根；长度、面积、时间等写相应单位；概率应在 $[0,1]$。
- **漏掉结果了吗？** 检查所有根、所有交点以及题目对正值、整数或区间的限制。
- **设置对不对？** 核对角度单位、数据与频数、考试模式要求和电量。

---

## 进阶完成后 {#advanced-next}

先确认你能用不同方法检查方程的根，区分定积分与面积，检查统计数据与频数，并把概率题写成正确的事件。

**下一步：** [高数进阶：复数、矩阵与向量]({{ '/alevel/fx-cg50/further-mathematics/' | relative_url }})。已经在学 Further Mathematics 的同学，可在[高数专题路线]({{ '/alevel/fx-cg50/' | relative_url }}#further-topics)中直接选择数值方法或力学扩展。

[回顾初学：设置与输入]({{ '/alevel/fx-cg50/beginner/' | relative_url }}) · [返回学习路线总览]({{ '/alevel/fx-cg50/' | relative_url }}) · [考前准备]({{ '/alevel/fx-cg50/' | relative_url }}#exam-mode)

编写与组织：**Eric Shi**。GPT 辅助整理、操作核对与网页制作。[署名与资料来源]({{ '/alevel/fx-cg50/' | relative_url }}#credits)。

</div>
