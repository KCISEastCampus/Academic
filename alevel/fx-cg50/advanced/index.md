---
layout: subjects
title: fx-CG50 进阶指南
description: 把方程、图像、表格、微积分、统计与概率操作用于 MA01–MA04 真题，学习数列、向量和假设检验。
lang: zh-CN
author: Eric Shi
study_page: true
cg50_stage: advanced
cg50_part: mathematics
toc_headings: h2, h3
permalink: /alevel/fx-cg50/advanced/
---

<link rel="stylesheet" href="{{ '/assets/css/fx-cg50.css' | relative_url }}?v=20261010-routes">

<div class="cg50-guide" markdown="1">

{% include fx-cg50-navigation.html %}

本页按解题方法学习：先用短练习掌握方程、图像、表格、微积分、统计与概率操作，再接着做相应的 MA01–MA04 应用。力学题见同一阶段的[力学篇]({{ '/alevel/fx-cg50/advanced/mechanics/' | relative_url }})。

**开始前：** 完成[初学]({{ '/alevel/fx-cg50/beginner/' | relative_url }})；至少熟悉[按键读法]({{ '/alevel/fx-cg50/beginner/' | relative_url }}#reading-keys)、[角度与显示设置]({{ '/alevel/fx-cg50/beginner/' | relative_url }}#chapter-2)和[输入模板]({{ '/alevel/fx-cg50/beginner/' | relative_url }}#chapter-3)。

考试前先阅读[考试模式与考前检查]({{ '/alevel/fx-cg50/' | relative_url }}#exam-mode)，按老师要求设置计算器。[适用版本与阅读说明]({{ '/alevel/fx-cg50/' | relative_url }}#next-chapters)。

任务 15–31 为**自拟操作练习**；标有 MA01–MA04 的例题采用 **2025 年 1 月**原卷，英文题意为改写，补充练习另标“自拟”。每题的 Q 编号和 MS 页码对应[页末原卷与评分细则](#mathematics-units)。可配合 [A2 三角函数](/alevel/a2-mathematics/trigonometric-functions-and-formulae/)、[指数与对数](/alevel/a2-mathematics/exponential-and-logarithmic-functions/) 和 [数值方法](/alevel/a2-mathematics/numerical-methods/) 的课程内容学习。

## 第 4 章 解方程与验证答案 {#chapter-4}

练习需要覆盖函数或列表数据时，先记录需要保留的内容。每题先列数学模型，再输入、检查结果，并在答卷上保留要求的过程。

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

### MA01：联立方程后保留精确距离 {#ma01-distance}

**Q2(b)，英文题意改写：Find the intersection of $8x-5y=14$ and $7x+2y=-26$, then find its exact distance from $A=(8,10)$.** MS p6。

1. 进入 **方程 → 联立方程 → 二元**。按通用教程输入第一行 $8,-5,14$，第二行 $7,2,-26$。负系数用独立 `(−)` 键。
2. 执行得到 $B=(-2,-6)$。把两个坐标代回两条直线核验。
3. 在 **计算·矩阵** 的根号模板内输入 $(8-(-2))^2+(10-(-6))^2$，用右方向键离开模板后 `EXE`。
4. 结果为 $\sqrt{356}=2\sqrt{89}$，小数约 $18.868$。

**答卷保留：** 联立的消元或代入过程、$B$ 的坐标、距离公式及 $2\sqrt{89}$。不能把近似值当作 exact answer。

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

## 代数与数列：把公式转成输入式 {#algebra-sequences}

求出数值后，仍须检查项数、实际条件与收敛范围。下面分别使用二次方程、求和公式和组合数。

### MA01：等差数列：第几个月与累计多少 {#ma01-arithmetic}

**Q3(b)–(d)，英文题意改写：George saves 240 dollars initially and increases this by 8 dollars each month. Mabel starts at 264 dollars and increases this by 4 dollars each month. Find George's term and total, and the number of months for Mabel to save 15 400 dollars.** MS pp8–9。

纸上先写

$$u_n=240+8(n-1),\qquad S_n=\frac n2[480+8(n-1)].$$

1. 在 **计算·矩阵** 输入 `240 + 8 × (22 − 1) → EXE`，得到第 22 个月 $408$。
2. 下一行输入 `36 ÷ 2 × (480 + 8 × (36 − 1)) → EXE`，得到累计 $13\,680$。
3. Q3(d) 换成 Mabel 的数据。先写 $\frac n2[528+4(n-1)]=15\,400$，化为 $n^2+131n-7700=0$。
4. 在 **方程 → 多项式 → 二次** 输入 $1,131,-7700$，得到 $n=44,-175$；取 $44$ 个月。
5. 回到 **计算·矩阵** 输入 `44 ÷ 2 × (528 + 4 × (44 − 1)) → EXE`，得到 $15\,400$。

**答卷保留：** 首项、公差、求和模型、方程及舍弃负根的理由。英文结论可写：**The negative root is not a valid number of months, so $n=44$.**

### MA01：等比级数：有穷和与收敛条件 {#ma01-geometric}

**Q9(a)，英文题意改写：A geometric series has second term $-48$ and sum to infinity 200. Find its first term and common ratio.** MS pp21–22。

先写 $ar=-48$ 和 $a/(1-r)=200$，且无穷和存在需要 $\lvert r\rvert<1$。消去 $a$：

$$25r^2-25r-6=0.$$

1. 二次方程输入 $25,-25,-6$，得到 $r=1.2$ 和 $r=-0.2$。
2. 依收敛条件舍弃 $1.2$；保留 $r=-1/5$。
3. 在 **计算·矩阵** 输入 `(-48) ÷ (-1 ÷ 5) → EXE`，得到 $a=240$。
4. 输入 `240 ÷ (1 − (-1 ÷ 5)) → EXE`，核验无穷和为 $200$。

有穷和核对仍用

$$S_N=\frac{240[1-(-1/5)^N]}{1-(-1/5)}.$$

例如 $N=2$ 时得到 $192$，与 $240-48$ 一致。带负号的公比整体加括号；不能先写成 $-1/5^N$。

**答卷保留：** 两个模型方程、两个候选公比、$\lvert r\rvert<1$ 及 $a=240,r=-1/5$。屏幕找出两个根后仍须判断哪一个满足无穷和条件。

### MA01：二项展开：组合数核对系数 {#ma01-binomial-expansion}

**Q6(a)–(c)，英文题意改写：Find $a,b$ in $(1+3x)^9=1+27x+ax^2+bx^3+\cdots$. Use the expansion to show that $(17/20)^9\approx353/2000$, then estimate $(17/10)^9$.** MS pp14–15。

$$a=\binom92\,3^2,\qquad b=\binom93\,3^3.$$

1. **计算·矩阵** 的组合数按 `OPTN → F6 → F3（概率）→ F3（nCr）` 输入，写在 $n$ 和 $r$ 之间。例如先输入 $9$，选 nCr，再输入 $2$；屏幕显示 `9C2`，执行得到 $36$。
2. 输入 $(9\operatorname{nCr}2)\times3^2$，得 **$a=324$**；把 $2$ 改为 $3$，相应幂也改为 $3$，得 **$b=2268$**。
3. 为使用展开式，先解 $1+3x=17/20$，得 $x=-1/20$。输入 $1+27(-1/20)+324(-1/20)^2+2268(-1/20)^3$，得 $353/2000=0.1765$。
4. 直接计算 $(17/20)^9\approx0.2316$ 可检查近似的误差；这不是相等式。原题要求使用前三次幂项证明**给定近似式**，不能用直接乘方代替展开步骤。
5. 最后一问先写 $(17/10)^9=2^9(17/20)^9$，所以近似为 $512\times353/2000=90.368$。

<div class="cg50-screens">
<figure><img src="{{ '/assets/img/fx-cg50/ma/ma01-binomial-coefficients.png' | relative_url }}" width="384" height="216" loading="lazy" data-lazy-ignore alt="9C2 乘 3 的平方为 324，9C3 乘 3 的立方为 2268"><figcaption>组合数后还要乘上 3 的对应次幂。</figcaption></figure>
</div>

**答卷保留：** 二项系数和 $3^r$、代入的 $x$、各项化简与放大因子 $2^9$。这是 show that，须展示如何得到 $353/2000$；不要把截断近似标成精确值。

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

### MA02：三角方程：主值之后找全解 {#ma02-trig}

**Q4(b)(ii)，英文题意改写：Solve $\tan y=-4/7$ for $0\le y\le2\pi$.** MS pp9–10。

1. 在 **计算·矩阵 → SHIFT → MENU** 把角度设为 **弧度**。
2. 按 `SHIFT → tan → ( → (−) → 4 → ÷ → 7 → ) → EXE`，读取主值约 $-0.519146114$。左括号手动输入。
3. 此主值不在给定区间。用未舍入的主值加 $\pi$，得到 $2.622446539\ldots$；再加 $\pi$，得到 $5.764039193\ldots$。
4. 按三位有效数字写 $y=2.62,5.76$。分别代回 $\tan y$，应接近 $-4/7$。

**答卷保留：** 周期为 $\pi$，一般解 $y=\arctan(-4/7)+k\pi$，以及区间内两个解。单独抄反三角主值会漏解；若方程的角为 $2x+\alpha$，还须先把 $x$ 的范围转换成角的范围，最后解回 $x$。

**本章完成检查：** 会选择函数、调整窗口、读取完整坐标，并逐个检查多个结果。参考手册第 5-2、5-5、5-56 至 5-58 页。

## 向量：从分量到长度与夹角 {#vectors}

先在纸上求分量和点积，再用根号与反三角函数计算长度、夹角；直线交点可复用前面的联立方程。

### MA03：向量：分清方向、模长与锐角 {#ma03-vectors}

**Q4，英文题意改写：For $A=(2,-3,-1)$ and $B=(-2,-1,4)$, find $\overrightarrow{AB}$, its length and its acute angle to a line with direction $(1,-2,3)$.** MS pp8–9。

$$\mathbf u=\overrightarrow{AB}=B-A=(-4,2,5),\qquad \mathbf d=(1,-2,3).$$

1. **计算·矩阵** 逐项核对 $-2-2=-4,\ -1-(-3)=2,\ 4-(-1)=5$。
2. 根号模板输入 $(-4)^2+2^2+5^2$，得 $\sqrt{45}=3\sqrt5$。
3. 输入 `(-4) × 1 + 2 × (-2) + 5 × 3 → EXE`，得点积 $7$。
4. 设角度为 **度数**。按 `SHIFT → cos`，手动左括号，再输入 $7/(\sqrt{45}\sqrt{14})$，右括号后 `EXE`。
5. 得 $\theta=73.80623073\ldots^\circ$，按原题取最近 $0.1^\circ$：$73.8^\circ$。

求直线间**锐角**用

$$\cos\theta=\frac{\lvert\mathbf u\cdot\mathbf d\rvert}{\lVert\mathbf u\rVert\lVert\mathbf d\rVert}.$$

若计算出钝角，用其补角，或先对点积取绝对值。向量方向仍应正确，不能因为锐角不变就把 $\overrightarrow{AB}$ 和 $\overrightarrow{BA}$ 混写。需要向量模板时可参考[通用向量操作]({{ '/alevel/fx-cg50/further-mathematics/' | relative_url }}#fm-vectors)。

Q4(c)(ii) 的相交模型可选两分量联立：

$$3+\lambda=2-4\mu,\qquad -15+3\lambda=-1+5\mu.$$

化为 $\lambda+4\mu=-1,\ 3\lambda-5\mu=14$。二元联立输入 $1,4,-1$ 与 $3,-5,14$，得 $\lambda=3,\mu=-1$；再用 $b-2\lambda=-3+2\mu$ 得 $b=1$，检查三个分量全都一致。

**答卷保留：** 坐标相减、点积公式、夹角计算；交点题还须写出分量方程并核验剩余分量。

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

### MA03：指定迭代：每一步保留内部精度 {#ma03-iteration}

**Q2(b)，英文题意改写：Show that the intersection of $y=5^{1-x}$ and $y=2x-3$ lies between 1.6 and 1.7. Then use $x_{n+1}=\frac12(3+5^{1-x_n})$, with $x_1=1.6$, to find $x_2,x_3$.** MS pp5–6。

先设 $g(x)=5^{1-x}-2x+3$。

1. 用 **计算·矩阵** 分别代入 $1.6$ 和 $1.7$，得 $g(1.6)\approx0.180730788$、$g(1.7)\approx-0.075868681$。
2. $g$ 在区间连续，且两端异号，因此区间内有根。连续性与符号变化要写在纸上。
3. 输入 `1.6 → EXE`，建立初始 `Ans`。
4. 下一行输入 $0.5(3+5^{1-\mathrm{Ans}})$，Ans 用 `SHIFT → (−)`。执行得 $x_2=1.690365394\ldots$。
5. 从空白输入行按上方向键两次，选中历史中的**递推式**；按 `EXE` 进入编辑，核对式中仍为 Ans，再按 `EXE` 执行，得 $x_3=1.664598284\ldots$。两步之间不要执行其他计算，以免覆盖 Ans。
6. 只在答卷舍入：$x_2=1.690,\ x_3=1.665$。

<div class="cg50-screens">
<figure><img src="{{ '/assets/img/fx-cg50/ma/ma03-iteration.png' | relative_url }}" width="384" height="216" loading="lazy" data-lazy-ignore alt="同一 Ans 递推式连续算出 1.690365394 和 1.664598284"><figcaption>两次执行同一递推式，中间值保留完整精度。</figcaption></figure>
</div>

**答卷保留：** 异号值、连续性结论、题目给定的递推式与每一步值。若先把 $x_2$ 舍入为 $1.690$ 再输入，就不再使用同样的内部精度。

方程求解器可以在完成后检查最终交点约 $1.670$，但不能用该根代替题目要求的两次迭代。给定两次迭代不等同于要求迭代到收敛。

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

### MA03：参数曲线：分别求导，再相除 {#ma03-parametric}

**自拟操作练习：For $x=t^2+1,\ y=t^3-t$, find the tangent at $t=2$.**

$$\frac{dy}{dx}=\frac{dy/dt}{dx/dt}=\frac{3t^2-1}{2t}.$$

1. **计算·矩阵** 代入 $t=2$，得点 $(5,6)$。
2. 输入 `(3 × 2² − 1) ÷ (2 × 2) → EXE`，得斜率 $11/4=2.75$。
3. 若用数值导数复核，在模板中以 X 暂代参数 $t$，分别计算 $X^3-X$ 和 $X^2+1$ 在 $X=2$ 的导数，得 $11,4$；再相除。
4. 答案为 $y-6=\frac{11}{4}(x-5)$。

数值模板的变量名不会自动区分参数与横坐标；本步 X 代表 $t$。若 $dx/dt=0$，不能直接除以零，应另判断垂直切线或驻点的情况。

**答卷保留：** $dx/dt,dy/dt$、斜率公式、点坐标与切线方程。

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

### MA01：交点、负积分与几何面积 {#ma01-area}

**Q8(b)、Q8(d)，英文题意改写：Use the intersections of $C:y=\frac34x^2-12x+21$ and $l:y=\frac32x-33$ to find the shaded area in the diagram.** MS pp19–20。先查看原卷的阴影，明确边界。

令两个函数相等并化简，得到 $x^2-18x+72=0$。

1. 二次方程输入 $1,-18,72$，得到 $x=6,12$。
2. 用直线方程代入 $x=12$，得到 $Q=(12,-15)$。
3. 按[定积分模板]({{ '/alevel/fx-cg50/advanced/' | relative_url }}#task-23)，输入被积函数 $3X^2/4-12X+21$、下限 $12$、上限 $14$，执行得到 $-16$。
4. 在下一行算图中三角形的面积：`(22 − 12) × 15 ÷ 2 → EXE`，得到 $75$。
5. 原图阴影为三角形面积扣除曲线与横轴间的小块，故 $A=75-16=59$。

这里 $-16$ 是有符号积分，小块的几何面积为 $16$。不能写成 $75-(-16)=91$；也不能不看原图就把两曲线之间的面积当作所求区域。

**答卷保留：** 交点方程、积分原函数 $\frac14x^3-6x^2+21x$、上下限代入、三角形面积与最终相减。

### MA03：旋转体：平方整个函数，答案保留 exact {#ma03-volume}

**Q5，英文题意改写：The region under $y=1+\sin x$ from $x=0$ to $x=\pi/3$ is rotated about the x-axis. Find the exact volume.** MS p10。

$$V=\pi\int_0^{\pi/3}(1+\sin x)^2\,dx.$$

1. 角度改回 **弧度**。
2. 按[积分模板]({{ '/alevel/fx-cg50/advanced/' | relative_url }}#task-23)，被积函数输入 $(1+\sin(X))^2$；`sin` 后的左括号手动输入，外面的平方作用于整个和。
3. 下限 $0$、上限 $\pi/3$。执行后在下一行输入 $\pi\times\mathrm{Ans}$，得 $7.396220093\ldots$。
4. 另输入 $\pi(\pi/2+1-\sqrt3/8)$，核对同值。

纸上用 $\sin^2x=(1-\cos2x)/2$ 展开：

$$\begin{aligned}
V&=\pi\left[\frac32x-2\cos x-\frac14\sin2x\right]_0^{\pi/3}\\
&=\pi\left(\frac\pi2+1-\frac{\sqrt3}{8}\right).
\end{aligned}$$

**答卷保留：** 旋转体体积公式、恒等式、积分与上下限代入，最后写精确表达式。数值积分不会替你生成 exact answer。

**本章完成检查：** 不颠倒积分上下限，不把导数值当成导函数，不把带符号积分直接当成总面积。参考手册第 2-28 至 2-33 页。

## 数值积分：按指定取值与权重 {#numerical-integration}

先用第 6 章的表格取值，再按题目指定的方法加权。梯形法与 Simpson 法取端点，中矩形法取中点；第 7 章的定积分模板只用于独立检查量级。

### MA01：梯形法：先数小区间，再加权 {#ma01-trapezium}

**自拟操作练习：Use four equal strips in the trapezium rule to estimate $\int_0^2x^2\,dx$.**

四个小区间需要**五个端点**，$h=(2-0)/4=0.5$。

1. 进入 **表格**，采用 Y=，在空的 Y 行输入 $X^2$，仅选中该函数。
2. 按 `F5（设定）`，开始 $0$、终止 $2$、步长 $0.5$；按 `F6（表）`。
3. 记录端点与函数值：$0,0.5,1,1.5,2$ 对应 $0,0.25,1,2.25,4$。
4. 在 **计算·矩阵** 输入 `0.5 ÷ 2 × (0 + 4 + 2 × (0.25 + 1 + 2.25)) → EXE`，得到 $2.75$。

$$T=\frac h2[y_0+y_4+2(y_1+y_2+y_3)]=2.75.$$

独立定积分为 $8/3\approx2.6667$，可检查量级。由于 $x^2$ 在此区间向上凸，梯形估计偏大。

**答卷保留：** 步长、端点表格、两端权重 $1$、内部权重 $2$ 和估计值。若真题只给离散表格，就用给定数据，不自行换成另一函数。

### MA03：中矩形法：五个小区间对应五个中点 {#ma03-midordinate}

**Q2(a)，英文题意改写：Use the mid-ordinate rule with five equal strips to estimate $\int_0^3 5^{1-x}\,dx$, to three decimal places.** MS p5。

$$h=\frac{3-0}{5}=0.6,\qquad x_{\text{mid}}=0.3,0.9,1.5,2.1,2.7.$$

1. 在 **表格** 采用 Y=，在空的 Y 行输入 $5^{1-X}$。整个 $1-X$ 放在指数模板内，输入完用右方向键离开。
2. 按 `F5（设定）`，开始 $0.3$、终止 $2.7$、步长 $0.6$；只选中这一函数，按 `F6（表）`。
3. 选中 Y 的数值格，可读屏幕底部的完整值。不要只使用表格列内较短的小数。

| 中点 $x$ | $5^{1-x}$，供核对 |
| --- | --- |
| $0.3$ | $3.085169314\ldots$ |
| $0.9$ | $1.174618943\ldots$ |
| $1.5$ | $0.4472135955\ldots$ |
| $2.1$ | $0.1702679845\ldots$ |
| $2.7$ | $0.06482626387\ldots$ |

4. 在 **计算·矩阵** 输入 $0.6(5^{0.7}+5^{0.1}+5^{-0.5}+5^{-1.1}+5^{-1.7})$，用原表达式避免抄回舍入数值。
5. 执行得 $2.965257660\ldots$，按题意写 **$2.965$**。

**答卷保留：** 中点、函数值、步长和加权算式。中矩形不取端点，也不使用梯形法的内部权重 $2$。直接定积分约为 $3.081821275$，可作独立量级检查，不能替代题目指定的估计。

### MA03：Simpson 法：偶数小区间与交替权重 {#ma03-simpson}

**自拟操作练习：Use Simpson's rule with four equal strips to estimate $\int_0^2x^4\,dx$.**

1. **表格** 输入 $X^4$，开始 $0$、终止 $2$、步长 $0.5$。
2. 得五个端点值 $0,\frac1{16},1,\frac{81}{16},16$。
3. 在 **计算·矩阵** 输入 `0.5 ÷ 3 × (0 + 16 + 4 × (1 ÷ 16 + 81 ÷ 16) + 2 × 1) → EXE`。
4. 得 $77/12=6.416666667\ldots$；独立定积分为 $32/5=6.4$。

$$S=\frac h3[y_0+y_4+4(y_1+y_3)+2y_2].$$

**答卷保留：** $h=0.5$、表格、权重 $1,4,2,4,1$。标准复合 Simpson 法要求小区间数为偶数；奇数个小区间不能直接套这一公式。梯形、中矩形和 Simpson 的差别在于取值位置与权重，而不只是最后的乘数。

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

### MA02：离散期望：把概率权重输入成频数 {#ma02-expectation}

**Q8(a)，英文题意改写：$A$ takes values $1,5,9,14$ with probabilities $k,5k,9k,14k$. Show that $E(A)=303/29$.** MS p15。

先由概率和为 $1$ 得 $29k=1$，所以 $k=1/29$。

1. 进入 **统计**，在可用的列表输入数据值 $1,5,9,14$。
2. 在另一可用列表输入权重 $1,5,9,14$。这列用于频数；它不是第二组测量值。
3. 按[频数设置教程]({{ '/alevel/fx-cg50/advanced/' | relative_url }}#task-25)，把“单变量X列表”设为数据值列表，“单变量频数”设为权重列表。
4. 单变量计算显示 $n=29$、$\bar x=10.44827586\ldots$。这里 $n=29$ 是人为选择的权重总和，不是题目给出的样本量。
5. 在 **计算·矩阵** 输入 `(1 × 1 + 5 × 5 + 9 × 9 + 14 × 14) ÷ 29 → EXE`，核对精确结果 $303/29$。

$$\begin{aligned}
E(A)&=\sum aP(A=a)\\
&=\frac{1+25+81+196}{29}=\frac{303}{29}.
\end{aligned}$$

**答卷保留：** 归一化方程、$k$、期望的加权算式。这是 show that，统计屏幕上的平均数不能代替推导。

若继续核对该分布的方差，须使用**总体标准差**的平方，或 $E(A^2)-E(A)^2$；不要使用样本标准差 $s_x$。一般概率不一定能方便地转换为整数权重，可直接按概率作加权计算。

### MA04：分段密度：积分给出概率和矩 {#ma04-density}

**Q2，英文题意改写：For the piecewise density below, find its normalising constant, mean and variance, and investigate $4-5T$.** MS pp6–8。

$$f(t)=\begin{cases}
ct^3,&2\le t\le4,\\
\frac1{10},&4<t\le6,\\
0,&\text{otherwise}.
\end{cases}$$

#### 先归一化，再求两个矩

$$\int_2^4ct^3\,dt+\int_4^6\frac1{10}\,dt=60c+\frac15=1,
\qquad c=\frac1{75}.$$

1. **计算·矩阵** 用定积分模板分别算两段；先以 $c=1/75$ 检查总面积为 $1$。
2. 均值输入两个积分相加：$\int_2^4X^4/75\,dX+\int_4^6X/10\,dX$，得 $3.645333333\ldots$。
3. 二阶矩输入 $\int_2^4X^5/75\,dX+\int_4^6X^2/10\,dX$，得 $14.02666667\ldots$。
4. 方差用**未舍入的**二阶矩减均值平方，得 $0.7382115556\ldots$，三位有效数字为 $0.738$。

纸上保留精确值：

$$E(T)=\frac{1367}{375},\qquad E(T^2)=\frac{1052}{75}.$$

$$\operatorname{Var}(T)=\frac{1052}{75}-\left(\frac{1367}{375}\right)^2.$$

#### 线性变换与 CDF

$$E(4-5T)=4-5E(T)=-\frac{1067}{75}.$$

$$\operatorname{Var}(4-5T)=25\operatorname{Var}(T)\approx18.5.$$

方差乘系数的**平方**，常数平移不改变方差。不能把 $4$ 也加到方差上。

自拟补充检查：由同一密度求 CDF：

$$F(t)=\begin{cases}
0,&t<2,\\
\frac{t^4-16}{300},&2\le t\le4,\\
0.8+\frac{t-4}{10},&4<t\le6,\\
1,&t>6.
\end{cases}$$

用 **计算·矩阵** 代入 $t=2,4,6$，核对 $F(t)=0,0.8,1$；各接点连续，且全程不下降。求概率可用 $F(b)-F(a)$，密度值 $f(t)$ 本身不是点概率。

**答卷保留：** 分段区间、归一化、$tf(t)$ 与 $t^2f(t)$ 的积分、方差公式。题目要求 exact 时，数值积分不能代替原函数与分数答案。

**本章完成检查：** 每次先检查数据列表、频数设置与 $n$，再读均值或标准差。参考手册第 6-11、6-23 页。

## 第 9 章 概率分布与假设检验 {#chapter-9}

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

### MA02：二项概率：单点与严格右尾 {#ma02-binomial}

**Q6(a)–(b)，英文题意改写：For $X\sim\operatorname{Bin}(40,0.09)$, find $P(X=6)$ and $P(X>4)$.** MS p13。

按[二项分布通用教程]({{ '/alevel/fx-cg50/advanced/' | relative_url }}#task-26)进入主菜单 **分布 → 二项分布**。

1. “尾部”选单点 `F4`；$x=6$，试验次数 $n=40$，成功概率 $p=0.09$。
2. 执行，选中概率后按 `OPTN → F1（查看）` 读完整值 $0.0826057661\ldots$，四位小数为 $0.0826$。
3. 返回参数页。$X>4$ 对整数变量等价于 $X\ge5$；选右尾 `F3`，边界填 $5$，其余参数不变。
4. 得到 $0.2897108319\ldots$，四位小数为 $0.2897$。
5. 也可改成左尾 $x=4$，读 $P(X\le4)=0.7102891681\ldots$，再取补事件检查。

**答卷保留：** $X$ 的分布和所求事件；右尾边界为 $5$，不是 $4$。若需要展示方法，写 $1-P(X\le4)$，不要只写无标签的小数。

本题单日均值 $np=3.6$、方差 $np(1-p)=3.276$，可在 **计算·矩阵** 核对。不同独立日期的总人数方差可以相加，但成功概率不同时，不能直接把所有天数合并成一个同参数二项分布。

### MA04：二项临界区：检查边界及相邻值 {#ma04-binomial-test}

**Q1(b)，英文题意改写：Find and justify the critical region for $H_0:p=0.2$ against $H_1:p\ne0.2$, using $X\sim\operatorname{Bin}(50,0.2)$ at the 10% significance level.** MS pp4–5。

此题双尾检验按每尾 $5\%$ 寻找边界。

1. **分布 → 二项分布**：$n=50,p=0.2$。
2. 左尾依次输入 $x=5,6$，读取完整概率。
3. 右尾依次输入 $x=16,15$。右尾包含输入的整数边界，不需再加 $1$。

| 事件 | 概率 | 与每尾 $0.05$ 比较 |
| --- | --- | --- |
| $X\le5$ | $0.04802721937\ldots$ | 不超过 |
| $X\le6$ | $0.1033982275\ldots$ | 超过 |
| $X\ge16$ | $0.03080342278\ldots$ | 不超过 |
| $X\ge15$ | $0.06072207963\ldots$ | 超过 |

所以临界区为 **$X\le5$ 或 $X\ge16$**。两端概率总和约 $0.07883$，小于名义 $10\%$；离散变量通常不能使实际显著性水平恰好等于指定值。

原题观测 $X=17$，在临界区内，故拒绝 $H_0$。**答卷保留：** 假设、显著性水平、四个边界概率、临界区与判断；只给边界而不展示相邻概率，未充分完成 justify。

### MA04：泊松概率：换算时间，处理严格区间 {#ma04-poisson}

**Q4(b)，英文题意改写：The number of advertisements is Poisson with mean 2.5 per 7.5 minutes. Find the probability of fewer than 5 in 30 minutes, and of more than 7 but fewer than 13 in 15 minutes.** MS p10。

先统一时间尺度：每分钟率 $r=2.5/7.5=1/3$；30 分钟 $\lambda=10$，15 分钟 $\lambda=5$。

$$P(X=k)=e^{-\lambda}\frac{\lambda^k}{k!}.$$

下面用有限求和输入泊松概率，便于直接检查事件的上下限：

1. 在 **计算·矩阵** 按 `OPTN → F4（计算）→ F6 → F3（Σ(）`，调出[求和模板]({{ '/alevel/fx-cg50/further-mathematics/numerical-calculus/' | relative_url }}#fm-task-21)。
2. 被加项输入 $e^{-10}10^X/(X!)$，求和变量 X、下限 $0$、上限 $4$。$e^{(\ )}$ 用 `SHIFT → ln`；在 X 后按 `OPTN → F6 → F3（概率）→ F1（x!）` 输入阶乘。核对阶乘作用于 X，而不是整个分母。
3. 从被加项按上方向键到上限，输入 $4$；按下方向键，再按左方向键到等号左边输入 X；按右方向键到等号右边输入下限 $0$。核对屏幕上限为 $4$、下方为 X=0。
4. 执行得 $P(X<5)=P(X\le4)=0.02925268808\ldots$，三位有效数字为 $0.0293$。
5. 第二问把参数改为 $5$，被加项 $e^{-5}5^X/(X!)$，下限 $8$、上限 $12$。
6. 得 $P(7<X<13)=0.1313528224\ldots$，三位有效数字为 $0.131$。

<div class="cg50-screens">
<figure><img src="{{ '/assets/img/fx-cg50/ma/ma04-poisson.png' | relative_url }}" width="384" height="216" loading="lazy" data-lazy-ignore alt="对均值 10 的泊松概率从 X=0 到 4 求和，结果为 0.02925268808"><figcaption>有限求和的上下限直接对应整数事件 X≤4。</figcaption></figure>
</div>

若使用泊松累积分布菜单，第二问应等价于 $P(X\le12)-P(X\le7)$；核对菜单结果与上面的有限和相同。不要把边界写成 $7,13$。

**答卷保留：** 按时间换算的 $\lambda$、整数事件与概率。泊松过程模型还需要恒定平均率、独立发生和短时间内多次发生的概率可忽略等条件；计算器不会判断这些假设是否合理。

### MA04：指数等待时间与泊松近似 {#ma04-exponential}

**Q4(c)，英文题意改写：Using the same advertisement rate, find the probability that the waiting time exceeds 5 minutes.** MS p11。

等待时间 $T$ 是连续变量，率为每分钟 $r=1/3$：

$$P(T>t)=e^{-rt}.$$

1. **计算·矩阵** 按 `SHIFT → ln` 调出指数模板，输入 $-5/3$，右方向键离开后 `EXE`。
2. 得 $0.1888756028\ldots$，三位有效数字为 $0.189$。
3. 用泊松视角复核：5 分钟内零次发生的概率 $P(N=0)=e^{-5/3}$ 相同。

自拟补充检查：指数左尾为 $1-e^{-rt}$；分位数由 $1-e^{-rt}=q$ 得 $t=-\ln(1-q)/r$。平均等待时间是 $1/r=3$ 分钟，不能把每分钟率 $1/3$ 当作平均分钟数。

**Q1(c)–(d)，英文题意改写：Approximate $\operatorname{Bin}(80,0.05)$ by a Poisson distribution, then find a 5% lower-tail critical region under mean 4.** MS pp4–5。

当 $n$ 大、$p$ 小时，泊松近似的均值 $\lambda=np=4$。对检验 $H_0:\lambda=4,\ H_1:\lambda<4$：

1. 计算 $P(W=0)=e^{-4}=0.01831563889\ldots$。
2. 计算 $P(W\le1)=e^{-4}(1+4)=0.09157819444\ldots$。
3. $0.0183<0.05<0.0916$，临界区只有 **$W=0$**。原题观测 $W=1$，不在临界区，故不拒绝 $H_0$。

**答卷保留：** 近似条件、参数、两个边界概率。Binomial 的真实概率与其 Poisson 近似应明确区分。

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

### MA04：z 检验：标准误不是单个数据的标准差 {#ma04-z-test}

**Q3，英文题意改写：Lap times are normal with known $\sigma=30$ s. A sample of 10 has total 2205 s. Test whether the mean has increased from 205 s at the 5% level.** MS p9。

$$H_0:\mu=205,\qquad H_1:\mu>205.$$

$$\bar x=220.5,\qquad z=\frac{220.5-205}{30/\sqrt{10}}.$$

1. **计算·矩阵** 输入 $(2205/10-205)/(30/\sqrt{10})$，得 $z=1.633843458\ldots$。
2. **分布 → 正态分布** 选右尾，$x=z,\sigma=1,\mu=0$；使用完整 z 值，得 $p\approx0.0511$。
3. 因 $p>0.05$，不拒绝 $H_0$。也可用右尾 $5\%$ 临界值 $1.644853627\ldots$ 比较，结论相同。

**答卷保留：** 两个假设、已知总体标准差的条件、$\sigma/\sqrt n$、统计量、尾概率与情境结论：**There is insufficient evidence at the 5% level that the mean lap time has increased.**

$\sigma/\sqrt n$ 是样本均值的标准误（standard error），不是样本数据的标准差。此题统计量接近边界，不要把它先舍入到 $1.6$。

### MA04：t 检验：使用样本标准差和自由度 {#ma04-t-test}

**Q7，英文题意改写：Use the eight recorded masses to estimate the variance and test whether the normal population mean is below 9 g at the 5% level.** MS pp15–16。

数据：$8.99,\ 8.96,\ 8.99,\ 9.02,\ 8.95,\ 8.98,\ 8.97,\ 9.01$。

1. 按[单变量统计教程]({{ '/alevel/fx-cg50/advanced/' | relative_url }}#task-24)，使用一列完整输入八个值。先检查没有混入旧值；频数设为 **1**，不要沿用 MA02 的权重列表。
2. 执行单变量计算，核对 $n=8,\bar x=8.98375$，读取**样本**标准差 $s_x$，约 $0.02386719207$。
3. 在 **计算·矩阵** 计算 $s_x^2$，与 $319/560000\approx0.0005696428571\ \mathrm{g^2}$ 核对。
4. 使用完整的 $\bar x,s_x$，计算 $t=(\bar x-9)/(s_x/\sqrt8)$，得 $-1.925737248\ldots$。
5. 自由度 $8-1=7$。按考试提供的 t 表读取单尾 $5\%$ 临界值 $-1.895$。
6. $-1.9257<-1.895$，拒绝 $H_0$。

$$H_0:\mu=9,\qquad H_1:\mu<9.$$

**答卷保留：** 样本均值、无偏方差估计、总体正态假设、t 统计量、自由度和比较。英文结论：**There is sufficient evidence at the 5% level that the mean mass is less than 9 g.**

总体方差未知，不能把 $s_x$ 当作已知 $\sigma$ 后改用标准正态检验；也不能从计算器读取总体标准差 $\sigma_x$ 来替代 $s_x$。使用 t 表时核对它标的是单尾面积还是双尾面积。

### MA04：反求分位数，再决定整数样本量 {#ma04-sample-size}

**Q5(b)，英文题意改写：Find the least $n$ such that a sample mean from $N(0.80,0.25^2)$ is below 0.82 with probability greater than 0.74.** MS p12。

由

$$P(\bar X<0.82)=\Phi\left(\frac{0.02\sqrt n}{0.25}\right)>0.74$$

得 $\frac{0.02\sqrt n}{0.25}>\Phi^{-1}(0.74)$。

1. 按[反求分位数教程]({{ '/alevel/fx-cg50/advanced/' | relative_url }}#task-29)，在标准正态左尾输入概率 $0.74$，得 $z_{0.74}=0.6433454054\ldots$。
2. 用未舍入值计算 $(z_{0.74}\times0.25/0.02)^2$，得 $64.67082979\ldots$。
3. $n$ 是正整数且不等式严格，最小取 **$65$**。代回检查 $n=64$ 的概率约 $0.7389<0.74$，$n=65$ 的概率约 $0.7405>0.74$。

**答卷保留：** 样本均值分布、标准化、分位数不等式与整数取值。这里要求向上取满足条件的整数，不能四舍五入样本量。

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
- **方法符合题目吗？** 指定梯形、中矩形、Simpson 或递推式时，写出取值、权重或每次迭代；直接求出的积分或根只作检查。
- **检验结论合理吗？** 先写假设、显著性水平与分布模型；“不拒绝”不等于证明原假设为真，结论须回到题目情境。
- **设置对不对？** 核对角度单位、数据与频数、考试模式要求和电量。

## 按考试单元复习与查阅原卷 {#mathematics-units}

各单元的例题已按方法放在上面的章节及进阶力学篇中。复习时可按正在学的单元直接跳到题目；QP 为原卷，MS 为官方评分细则，均可直接打开或下载。

课程范围参考 [OxfordAQA Mathematics 9660 Specification](https://www.oxfordaqa.com/wp-content/uploads/2023/10/oxfordaqa-a-level-mathematics-specification.pdf)。英文题意是改写，完整题干、图和评分要求以 QP、MS 为准；假设检验还须使用试卷所附统计表。

{% for unit in site.data.fx_cg50.mathematics_units %}
### {{ unit.title }} {#{{ unit.id }}}

[2025 年 1 月 QP]({{ '/assets/pdf/fx-cg50/references/oxfordaqa-' | append: unit.id | append: '-2025-january-question-paper.pdf' | relative_url }}) · [配套 MS]({{ '/assets/pdf/fx-cg50/references/oxfordaqa-' | append: unit.id | append: '-2025-january-mark-scheme.pdf' | relative_url }})

{% for topic in unit.topics %}
- [{{ topic.title }}]({{ topic.url | relative_url }}#{{ topic.anchor }})
{% endfor %}
{% endfor %}

---

## 进阶完成后 {#advanced-next}

先确认你能用不同方法检查方程的根，区分定积分与面积，检查统计数据与频数，并把概率题写成正确的事件。

正在学习力学的同学，继续[进阶力学篇]({{ '/alevel/fx-cg50/advanced/mechanics/' | relative_url }})，把方程、三角函数、积分和变量存储用于受力、运动、能量与动量题。

**下一步：** [高数进阶：复数、矩阵与向量]({{ '/alevel/fx-cg50/further-mathematics/' | relative_url }})。已经在学 Further Mathematics 的同学，可在[高数专题路线]({{ '/alevel/fx-cg50/' | relative_url }}#further-topics)中直接选择数值方法或力学扩展。

[回顾初学：设置与输入]({{ '/alevel/fx-cg50/beginner/' | relative_url }}) · [返回学习路线总览]({{ '/alevel/fx-cg50/' | relative_url }}) · [考前准备]({{ '/alevel/fx-cg50/' | relative_url }}#exam-mode)

编写与组织：**Eric Shi**。GPT 辅助整理、操作核对与网页制作。[署名与资料来源]({{ '/alevel/fx-cg50/' | relative_url }}#credits)。

</div>
