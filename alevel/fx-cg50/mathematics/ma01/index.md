---
layout: subjects
title: fx-CG50 · MA01：纯数 P1
description: 用 2025 年 1 月 MA01 例题学习精确距离、数列、二项展开、交点与面积，并补充梯形法操作。
lang: zh-CN
author: Eric Shi
study_page: true
cg50_stage: advanced
cg50_unit: ma01
toc_headings: h2, h3
permalink: /alevel/fx-cg50/mathematics/ma01/
---

<link rel="stylesheet" href="{{ '/assets/css/fx-cg50.css' | relative_url }}?v=20261010-routes">

<div class="cg50-guide" markdown="1">

{% include fx-cg50-navigation.html %}

P1 的计算器重点是核对代数、数列和积分。先看[联立方程]({{ '/alevel/fx-cg50/advanced/' | relative_url }}#task-16)、[二次方程]({{ '/alevel/fx-cg50/advanced/' | relative_url }}#task-15)、[定积分与面积]({{ '/alevel/fx-cg50/advanced/' | relative_url }}#task-23)。

本页真题英文题意为改写，出处为 [MA01 January 2025 QP]({{ '/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-question-paper.pdf' | relative_url }}) 与[配套 MS]({{ '/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-mark-scheme.pdf' | relative_url }})。原题要求的精确形式和推导优先于屏幕小数。

## 联立方程后保留精确距离 {#ma01-distance}

**Q2(b)，英文题意改写：Find the intersection of $8x-5y=14$ and $7x+2y=-26$, then find its exact distance from $A=(8,10)$.** MS p6。

1. 进入 **方程 → 联立方程 → 二元**。按通用教程输入第一行 $8,-5,14$，第二行 $7,2,-26$。负系数用独立 `(−)` 键。
2. 执行得到 $B=(-2,-6)$。把两个坐标代回两条直线核验。
3. 在 **计算·矩阵** 的根号模板内输入 $(8-(-2))^2+(10-(-6))^2$，用右方向键离开模板后 `EXE`。
4. 结果为 $\sqrt{356}=2\sqrt{89}$，小数约 $18.868$。

**答卷保留：** 联立的消元或代入过程、$B$ 的坐标、距离公式及 $2\sqrt{89}$。不能把近似值当作 exact answer。

## 等差数列：第几个月与累计多少 {#ma01-arithmetic}

**Q3(b)–(d)，英文题意改写：George saves 240 dollars initially and increases this by 8 dollars each month. Mabel starts at 264 dollars and increases this by 4 dollars each month. Find George's term and total, and the number of months for Mabel to save 15 400 dollars.** MS pp8–9。

纸上先写

$$u_n=240+8(n-1),\qquad S_n=\frac n2[480+8(n-1)].$$

1. 在 **计算·矩阵** 输入 `240 + 8 × (22 − 1) → EXE`，得到第 22 个月 $408$。
2. 下一行输入 `36 ÷ 2 × (480 + 8 × (36 − 1)) → EXE`，得到累计 $13\,680$。
3. Q3(d) 换成 Mabel 的数据。先写 $\frac n2[528+4(n-1)]=15\,400$，化为 $n^2+131n-7700=0$。
4. 在 **方程 → 多项式 → 二次** 输入 $1,131,-7700$，得到 $n=44,-175$；取 $44$ 个月。
5. 回到 **计算·矩阵** 输入 `44 ÷ 2 × (528 + 4 × (44 − 1)) → EXE`，得到 $15\,400$。

**答卷保留：** 首项、公差、求和模型、方程及舍弃负根的理由。英文结论可写：**The negative root is not a valid number of months, so $n=44$.**

## 二项展开：组合数核对系数 {#ma01-binomial-expansion}

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

## 等比级数：有穷和与收敛条件 {#ma01-geometric}

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

## 交点、负积分与几何面积 {#ma01-area}

**Q8(b)、Q8(d)，英文题意改写：Use the intersections of $C:y=\frac34x^2-12x+21$ and $l:y=\frac32x-33$ to find the shaded area in the diagram.** MS pp19–20。先查看原卷的阴影，明确边界。

令两个函数相等并化简，得到 $x^2-18x+72=0$。

1. 二次方程输入 $1,-18,72$，得到 $x=6,12$。
2. 用直线方程代入 $x=12$，得到 $Q=(12,-15)$。
3. 按[定积分模板]({{ '/alevel/fx-cg50/advanced/' | relative_url }}#task-23)，输入被积函数 $3X^2/4-12X+21$、下限 $12$、上限 $14$，执行得到 $-16$。
4. 在下一行算图中三角形的面积：`(22 − 12) × 15 ÷ 2 → EXE`，得到 $75$。
5. 原图阴影为三角形面积扣除曲线与横轴间的小块，故 $A=75-16=59$。

这里 $-16$ 是有符号积分，小块的几何面积为 $16$。不能写成 $75-(-16)=91$；也不能不看原图就把两曲线之间的面积当作所求区域。

**答卷保留：** 交点方程、积分原函数 $\frac14x^3-6x^2+21x$、上下限代入、三角形面积与最终相减。

## 梯形法：先数小区间，再加权 {#ma01-trapezium}

**自拟操作练习：Use four equal strips in the trapezium rule to estimate $\int_0^2x^2\,dx$.**

四个小区间需要**五个端点**，$h=(2-0)/4=0.5$。

1. 进入 **表格**，采用 Y=，在空的 Y 行输入 $X^2$，仅选中该函数。
2. 按 `F5（设定）`，开始 $0$、终止 $2$、步长 $0.5$；按 `F6（表）`。
3. 记录端点与函数值：$0,0.5,1,1.5,2$ 对应 $0,0.25,1,2.25,4$。
4. 在 **计算·矩阵** 输入 `0.5 ÷ 2 × (0 + 4 + 2 × (0.25 + 1 + 2.25)) → EXE`，得到 $2.75$。

$$T=\frac h2[y_0+y_4+2(y_1+y_2+y_3)]=2.75.$$

独立定积分为 $8/3\approx2.6667$，可检查量级。由于 $x^2$ 在此区间向上凸，梯形估计偏大。

**答卷保留：** 步长、端点表格、两端权重 $1$、内部权重 $2$ 和估计值。若真题只给离散表格，就用给定数据，不自行换成另一函数。

## 单元完成检查 {#ma01-check}

- 能解释为何舍弃不满足实际条件或收敛条件的根。
- exact distance 写成根式；数列保留通项与求和式。
- 先看面积边界，再决定积分的正负及相加、相减。
- 梯形法用端点，不能套用 MA03 中矩形法的中点。

[下一单元：MA02 混合卷]({{ '/alevel/fx-cg50/mathematics/ma02/' | relative_url }}) · [返回考试应用路线]({{ '/alevel/fx-cg50/mathematics/' | relative_url }})。

</div>
