---
title: 积分：三角积分与应用
layout: subjects
mathjax: true
grade: a2
subject: a2-mathematics
lang: zh-CN
translation_of: /alevel/a2-mathematics/integration-applications/
permalink: /zh/alevel/a2-mathematics/integration-applications/
toc_headings: h2, h3
reading_layout: true
study_page: true
---

[纯数学](/zh/alevel/a2-mathematics/) · P2.7 积分

同一条曲线，可以用来求平面区域的面积，也可以让区域绕轴转一圈，求形成的立体有多大。两种问题累加的东西不同，所以要先看区域和旋转轴，再列积分。本页也练习把三角函数改写成容易积分的形式。

- **学习：**先学习[三角积分](#trigonometric-integrals)，再学习[面积](#area)和[旋转体体积（volume of revolution）](#volume-of-revolution)。
- **作业帮助：**对照例题检查方法。计算前确认所用恒等式、积分限（limits of integration）和旋转轴。
- **复习：**先在不看解答的情况下尝试[练习](#practice)，再查看[快速参考](#quick-reference)。

教材：第 6 章第 6.5–6.6 节（印刷版第 95–100 页）。面积部分复习较早学过的定积分，并为体积题作准备。积分常数记作 $C$。
{: .lesson-meta}

<div class="lesson-notes" markdown="1">

**起点与先修：**会逐项积分幂函数、代入上下限并求曲线交点；不会时先回补 [AS 二次函数与交点](/zh/alevel/as-mathematics/algebra/#l02)。三角积分需要弧度、二倍角和换元的微分关系，回补[二倍角](/zh/alevel/a2-mathematics/trigonometric-functions-and-formulae/#double-angle-formulae)、[标准积分](/zh/alevel/a2-mathematics/integration/#standard-integrals)和[换元](/zh/alevel/a2-mathematics/integration/#substitution)。目标是自己选择恒等式、画区域并解释面积符号或旋转截面的半径。复习可从[练习](#practice)开始，错误走[恢复题](#repair)，学过下一节后做[稍后回顾](#review-later)。

</div>

本页所有例题和练习题均为自拟题，并非官方真题；题目没有官方分值。

## 三角积分 {#trigonometric-integrals}

**全程使用弧度制（radians）。**三角函数的标准导数和积分公式均以弧度为单位。

| 观察到的形式 | 第一步 | 这样做的原因 |
|---|---|---|
| $\sin x$ 的奇次幂 | 保留一个因子 $\sin x$；其余部分使用 $\sin^2x=1-\cos^2x$ | 尝试令 $u=\cos x$，此时 $du=-\sin x\,dx$ |
| $\cos x$ 的奇次幂 | 保留一个因子 $\cos x$；其余部分使用 $\cos^2x=1-\sin^2x$ | 尝试令 $u=\sin x$，此时 $du=\cos x\,dx$ |
| 只有 $\sin x$ 和 $\cos x$ 的偶次幂 | 使用二倍角恒等式（double angle identity） | 把平方项改写为常数项和余弦项 |
| $\tan x$ 的幂 | 使用 $\tan^2x=\sec^2x-1$ 降低幂次 | 含 $\sec^2x$ 的项可能适合令 $u=\tan x$ |
{: .wide-table}

若括号里的角是 $2x$ 或 $3x$，就把整个角放进恒等式。积分时还要照顾角的变化快慢：求导会乘上角中那个倍数，倒过来积分便要除以它。

选恒等式的目的，是把式子改成已经会积分的样子。若想用一个新字母替代正弦或余弦，就检查它的导数能否配上剩下的因子；这就是表中保留一个因子的原因。只有偶次幂时，二倍角公式可以去掉平方，得到能逐项积分的和。不能把 $x^n$ 的积分规则直接用于 $\sin^n x$：对正弦的幂求导时，还会多出余弦因子。先确认改写前后相等，再积分。

<section class="worked-example" markdown="1">

### 例题 1 — 保留一个正弦因子 {#example-1--keep-one-sine-factor}

**Question:** Find $\displaystyle\int\sin^3(2x)\,dx$.

**方法选择：**这里有三个相同的正弦相乘。先留一个正弦，把另两个组成的平方换成“一减余弦平方”。这样，余弦可以用一个新字母表示，而留下的正弦正好出现在余弦的导数中：

$$\sin^3(2x)=[1-\cos^2(2x)]\sin(2x).$$

令 $u=\cos(2x)$。求导得到 $du=-2\sin(2x)\,dx$。原式留下的正弦和小量合在一起，只相当于这个新微分的负二分之一，因此

$$\int\sin^3(2x)\,dx=-\frac12\int(1-u^2)\,du.$$

现在括号内只有新字母的零次幂和平方，按幂函数积分，再把新字母换回余弦，得到

$$\boxed{-\frac12\cos(2x)+\frac16\cos^3(2x)+C}.$$

**检查：**求导得到 $\sin(2x)-\cos^2(2x)\sin(2x)=\sin^3(2x)$。

**常见错误：**漏掉负号或系数 $\frac12$；这个系数来自用 $du$ 替换原微分项。

</section>

<section class="worked-example" markdown="1">

### 例题 2 — 使用二倍角恒等式 {#example-2--use-a-double-angle-identity}

**Question:** Find $\displaystyle\int\cos^2(3x)\,dx$.

这里的平方不容易直接积分。先用二倍角公式把它变成常数加一个余弦：使用 $\cos^2\theta=\frac{1+\cos(2\theta)}2$，其中 $\theta=3x$，所以角要整体加倍：

$$\int\cos^2(3x)\,dx=\frac12\int[1+\cos(6x)]\,dx.$$

$$\boxed{\frac{x}{2}+\frac{\sin(6x)}{12}+C}.$$

**检查：**求导得到 $\frac12+\frac12\cos(6x)=\cos^2(3x)$。

**常见错误：**把 $\cos^2(3x)$ 写成 $\frac{1+\cos(3x)}2$。恒等式中的角要整体加倍。

</section>

<section class="worked-example" markdown="1">

### 例题 3 — 化简四次幂 {#example-3--reduce-a-fourth-power}

**Question:** Find $\displaystyle\int\cos^4(2x)\,dx$.

四次幂就是平方以后再平方。先用二倍角公式改写一次并展开；结果仍有余弦平方，所以还要再用一次：

$$\cos^4(2x)=\frac14[1+2\cos(4x)+\cos^2(4x)]$$

$$=\frac38+\frac12\cos(4x)+\frac18\cos(8x).$$

现在逐项积分：

$$\boxed{\frac{3x}{8}+\frac{\sin(4x)}8+\frac{\sin(8x)}{64}+C}.$$

**检查：**求导得到 $\frac38+\frac12\cos(4x)+\frac18\cos(8x)$，正是上面的表达式。

对于偶次幂的乘积，也可以留意 $\sin(2x)=2\sin x\cos x$。例如，$\sin^2x\cos^2x=\frac18[1-\cos(4x)]$。

</section>

<section class="worked-example" markdown="1">

### 例题 4 — 化简正切函数的幂 {#example-4--reduce-a-tangent-power}

**Question:** Find $\displaystyle\int\tan^3x\,dx$.

先留一个正切，把另外两个组成的平方用 $\tan^2x=\sec^2x-1$ 替换。这样拆出的第一项含有正切的导数，可以换元：

$$\int\tan^3x\,dx=\int\tan x\sec^2x\,dx-\int\tan x\,dx.$$

对于第一个积分，令 $u=\tan x$。对于第二个积分，使用 $\int\tan x\,dx=-\ln\lvert\cos x\rvert+C$。

$$\boxed{\frac12\tan^2x+\ln\lvert\cos x\rvert+C}.$$

**检查：**求导得到 $\tan x\sec^2x-\tan x=\tan^3x$。

此结果适用于 $\cos x\ne0$ 的区间。不要跨过 $\tan x$ 无定义的点积分。

</section>

## 面积 {#area}

想象把区域切成很多很窄的竖条。定积分把每条的函数值乘以小宽度，再累加起来。曲线在 $x$ 轴上方时函数值为正，下方时为负，所以两侧的贡献会相抵；这叫**带符号的面积（signed area）**。

如果问纸上这块区域实际占多大，轴下方的部分也要算正面积，不能与上方抵消。这时先把上下方分开，各算出面积大小，再相加。不能先让它们抵消，最后才取绝对值。

1. 画出曲线草图并标明所求区间。
2. 找出区间内部曲线与 $x$ 轴的交点。
3. 在这些交点处分段积分。曲线在轴下方的部分要改变符号。
4. 把各段正面积相加，并用平方单位表示答案。

![Example 5: the curve x squared minus one crosses the x-axis at minus one and one, with shaded areas above and below. Example 6: the shaded region lies between the line y equals two x and the curve y equals x squared, from zero to two.](/assets/img/integration-area.svg)

<section class="worked-example" markdown="1">

### 例题 5 — 在曲线穿过坐标轴处拆分 {#example-5--split-where-the-curve-crosses-the-axis}

**Question:** Find the total area between $y=x^2-1$ and the $x$-axis for $-2\le x\le2$.

先令曲线的高度为零，找到 $x=-1$ 和 $x=1$。两者之间平方小于一，曲线在轴下方；两侧平方大于一，曲线在轴上方。因此要分三段。中间一段的积分本来是负数，在它前面加减号，才把那一块的面积算成正数：

$$\begin{aligned}A&=\int_{-2}^{-1}(x^2-1)\,dx\\&\quad-\int_{-1}^{1}(x^2-1)\,dx\\&\quad+\int_1^2(x^2-1)\,dx.\end{aligned}$$

先求一个导数等于原式的函数：$F(x)=\frac{x^3}{3}-x$。每段都用右端的函数值减左端的函数值，两个外侧积分各为 $\frac43$，中间为 $-\frac43$。列出的面积式已把中间这一项改为相反数，所以最后三个面积都加：

$$A=\frac43+\frac43+\frac43=\boxed{4\text{ square units}}.$$

**检查：**$\int_{-2}^{2}(x^2-1)\,dx=\frac43$ 是带符号的积分值，不是总面积。即使对这个单一结果取绝对值，仍然得不到正确总面积。

</section>

<section class="worked-example" markdown="1">

### 例题 6 — 上方曲线减去下方曲线 {#example-6--upper-curve-minus-lower-curve}

**Question:** Find the area enclosed by $y=2x$ and $y=x^2$.

先找区域左右两端，也就是交点：$2x=x^2$ 得到 $x=0$ 和 $x=2$。在这两个值之间，$2x\ge x^2$，因为上方减下方可写成两个非负因子的乘积。每条竖条的高度是两条曲线的高度差，所以积分式中要用上方减下方：

$$A=\int_0^2(2x-x^2)\,dx=\left[x^2-\frac{x^3}{3}\right]_0^2.$$

$$\boxed{\frac43\text{ square units}}.$$

**检查：**放入积分中的竖条高度在 $[0,2]$ 上非负。如果给定区间内上下两条曲线的顺序发生变化，就应在交点处拆分积分。

</section>

## 旋转体体积（volume of revolution） {#volume-of-revolution}

把一个区域绕轴转满一圈，得到的立体叫**旋转体（solid of revolution）**。先看一小条区域：它从轴一直伸到曲线，转一圈就扫出一个薄圆盘。条的长度变成圆盘半径；切开立体所看到的圆，叫作截面，其面积为 $\pi\times(\text{radius})^2$。

薄圆盘的体积约等于“圆面积乘厚度”。把圆盘取得越来越薄，再把它们的体积累加，就是体积的积分。绕横轴时沿左右方向叠圆盘；绕竖轴时沿上下方向叠圆盘。这决定了要用哪一种字母及对应的上下限。

| 旋转轴 | 半径 | 轴与曲线之间区域的体积公式 |
|---|---|---|
| $x$ 轴 | 距离 $\lvert y\rvert$（到 $x$ 轴） | $\displaystyle V=\pi\int_a^b y^2\,dx$ |
| $y$ 轴 | 距离 $\lvert x\rvert$（到 $y$ 轴） | $\displaystyle V=\pi\int_c^d x^2\,dy$ |

**开始积分前：**先画出轴和一条小条，认清哪一段长度会转成半径。把整个半径平方，再看圆盘沿哪个方向叠放，据此选择积分用的字母及起止数值。答案用立方单位表示。

这些公式描述的是没有空洞的圆形截面。如果所给区域没有延伸到旋转轴，先确定外半径和内半径；不要未经检查就把某一条曲线到轴的距离当作半径。

<section class="worked-example" markdown="1">

### 例题 7 — 平方整个表达式 {#example-7--square-the-whole-expression}

**Question:** The region between $y=x+1$, the $x$-axis and the lines $x=0$ and $x=2$ is rotated completely about the $x$-axis. Find its volume.

这里绕横轴转，所以选竖直小条：它一端在 $x$ 轴，另一端在曲线上，宽度为 $dx$。转一圈就得到薄圆盘，沿左右方向把它们排满。条的整段长度都是半径，即 $y=x+1$，所以要把整个长度平方：$(x+1)^2=x^2+2x+1$。

$$V=\pi\int_0^2(x+1)^2\,dx.$$

$$=\pi\left[\frac{x^3}{3}+x^2+x\right]_0^2=\boxed{\frac{26\pi}{3}\text{ cubic units}}.$$

**常见错误：**用 $x^2+1$ 代替 $(x+1)^2$，或者积分 $y$ 而不是 $y^2$。

**检查：**半径从 $1$ 增加到 $3$，所对应的区间长度为 $2$。体积应介于以最小半径和最大半径构成的圆柱体体积 $2\pi$ 与 $18\pi$ 之间。

</section>

<section class="worked-example" markdown="1">

### 例题 8 — 绕 y 轴旋转时更换变量 {#example-8--change-the-variable-for-the-y-axis}

**Question:** The region in $x\ge0$ enclosed by $y=x^2+2$, the line $y=6$ and the $y$-axis is rotated completely about the $y$-axis. Find its volume.

这里绕竖轴转，所以选从 $y$ 轴伸到曲线的水平小条，厚度为 $dy$。圆盘的半径是横着量的 $x$，不是竖着量的高度 $y$。这些圆盘从下往上叠：底部由 $x=0$ 得到 $y=2$，顶部是 $y=6$。因此用这两个高度作积分的上下限，并把半径平方改写为 $x^2=y-2$，就能对高度积分：

$$V=\pi\int_2^6(y-2)\,dy=\pi\left[\frac{(y-2)^2}{2}\right]_2^6.$$

$$\boxed{8\pi\text{ cubic units}}.$$

**常见错误：**使用 $x$ 的积分限 $0$ 和 $2$，却对 $y$ 积分。

**检查：**半径从 $0$ 增加到 $2$。该立体位于半径为 $2$、高为 $4$ 的圆柱体内部，而此圆柱体的体积为 $16\pi$。

</section>

**先说清在累加什么，再写被积函数，也就是积分号后面的式子。**对于曲线 $y=\sin x$ 在 $0\le x\le\frac\pi2$ 上的区域，面积累加竖条的面积，所以用高度 $\sin x$；绕 $x$ 轴转以后，体积累加薄圆盘，所以用圆面积 $\pi\sin^2x$。平方就是从这里来的，也因此可能需要先用三角恒等式。

## 练习 {#practice}

**独立练习 · 30–40 分钟**

时间仅供参考。每道三角积分题都写出所用恒等式；每道面积或体积题都先画出区域草图，并列出积分式，再开始计算。遇到困难时再打开提示。

先独立画出每道应用题的区域；体积题再标旋转轴、一条截面小条及其半径。教学图只对应例题，练习图由你完成。记录首次答案、帮助、错误和重试。

<section class="lesson-check" markdown="1">

### Q1 {#q1--an-odd-cosine-power}

Find $\displaystyle\int\cos^3x\,dx$.

<details markdown="1">
<summary>提示</summary>

保留一个因子 $\cos x$。使用 $\cos^2x=1-\sin^2x$，再令 $u=\sin x$。

</details>

<details markdown="1">
<summary>解答与检查</summary>

令 $u=\sin x$，则

$$\int(1-u^2)\,du=u-\frac{u^3}{3}+C.$$

代回原变量：

$$\boxed{\sin x-\frac{\sin^3x}{3}+C}.$$

求导得到 $(1-\sin^2x)\cos x=\cos^3x$。

</details>

</section>

<section class="lesson-check" markdown="1">

### Q2 {#q2--a-product-of-powers}

Find $\displaystyle\int\sin^2x\cos^3x\,dx$.

<details markdown="1">
<summary>提示</summary>

余弦的幂次是奇数。保留一个因子 $\cos x$，并把剩余的 $\cos^2x$ 换成 $1-\sin^2x$。

</details>

<details markdown="1">
<summary>解答与检查</summary>

令 $u=\sin x$，则

$$\int(u^2-u^4)\,du=\frac{u^3}{3}-\frac{u^5}{5}+C.$$

代回原变量：

$$\boxed{\frac{\sin^3x}{3}-\frac{\sin^5x}{5}+C}.$$

求导得到 $\sin^2x(1-\sin^2x)\cos x=\sin^2x\cos^3x$。

</details>

</section>

<section class="lesson-check" markdown="1">

### Q3 {#q3--an-even-power-with-limits}

Evaluate $\displaystyle\int_0^{\frac\pi4}\sin^2(2x)\,dx$ exactly.

<details markdown="1">
<summary>提示</summary>

使用 $\sin^2(2x)=\frac{1-\cos(4x)}2$。积分限保持弧度制。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$\left[\frac{x}{2}-\frac{\sin(4x)}8\right]_0^{\frac\pi4}=\boxed{\frac\pi8}.$$

正在积分的式子的值在 $0$ 和 $1$ 之间，所以答案应在 $0$ 与 $\frac\pi4$ 之间。

</details>

</section>

<section class="lesson-check" markdown="1">

### Q4 {#q4--a-tangent-square}

Find $\displaystyle\int\tan^2(2x)\,dx$ on an interval where $\cos(2x)\ne0$.

<details markdown="1">
<summary>提示</summary>

使用 $\tan^2(2x)=\sec^2(2x)-1$。不要漏掉 $2x$ 的导数。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$\int[\sec^2(2x)-1]\,dx=\boxed{\frac12\tan(2x)-x+C}.$$

求导得到 $\sec^2(2x)-1=\tan^2(2x)$。

</details>

</section>

<section class="lesson-check" markdown="1">

### Q5 {#q5--area-between-two-curves}

Find the area enclosed by $y=4x-x^2$ and $y=x$.

<details markdown="1">
<summary>提示</summary>

先求交点。在两个交点之间取一个值，判断哪条曲线在上方。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$4x-x^2=x$ 得 $x=0$ 和 $x=3$。在这个区间内，抛物线位于直线上方，因为两者之差为 $x(3-x)\ge0$。

$$A=\int_0^3(3x-x^2)\,dx=\left[\frac{3x^2}{2}-\frac{x^3}{3}\right]_0^3.$$

$$\boxed{\frac92\text{ square units}}.$$

</details>

</section>

<section class="lesson-check" markdown="1">

### Q6 {#q6--signed-integral-or-total-area}

For $y=x^2-4$ on $-3\le x\le3$, find **(a)** the definite integral and **(b)** the total area between the curve and the $x$-axis.

<details markdown="1">
<summary>提示</summary>

曲线在 $x=-2$ 和 $x=2$ 处穿过坐标轴。只有求面积时，才需要改变中间部分的符号。

</details>

<details markdown="1">
<summary>解答与检查</summary>

**(a)** 取 $F(x)=\frac{x^3}{3}-4x$，

$$\int_{-3}^3(x^2-4)\,dx=F(3)-F(-3)=\boxed{-6}.$$

**(b)** 两侧外部区间的积分各为 $\frac73$。中间区间的积分为 $-\frac{32}{3}$。因此

$$A=\frac73+\frac{32}{3}+\frac73=\boxed{\frac{46}{3}\text{ square units}}.$$

带符号的积分为 $\frac73-\frac{32}{3}+\frac73=-6$，这与 (a) 的结果一致。面积为正。

</details>

</section>

<section class="lesson-check" markdown="1">

### Q7 {#q7--choose-the-axis-and-the-variable}

**(a)** The region between $y=\cos(2x)$, the $x$-axis and the lines $x=0$ and $x=\frac\pi4$ is rotated completely about the $x$-axis. Find the volume exactly.

**(b)** The region in $x\ge0$ enclosed by $y=x^2+1$, the line $y=4$ and the $y$-axis is rotated completely about the $y$-axis. Find the volume exactly.

<details markdown="1">
<summary>提示</summary>

(a) 使用 $\pi\int y^2\,dx$，并运用二倍角恒等式。(b) 使用 $\pi\int x^2\,dy$，并根据区域确定 $y$ 的积分限。

</details>

<details markdown="1">
<summary>解答与检查</summary>

**(a)** 半径为 $\cos(2x)$，所以

$$V=\pi\int_0^{\frac\pi4}\cos^2(2x)\,dx.$$

$$=\pi\left[\frac{x}{2}+\frac{\sin(4x)}8\right]_0^{\frac\pi4}.$$

$$\boxed{\frac{\pi^2}{8}\text{ cubic units}}.$$

半径不超过 $1$，区间长度为 $\frac\pi4$。所得体积小于圆柱体体积 $\frac{\pi^2}{4}$。

**(b)** 这里 $x^2=y-1$，且 $1\le y\le4$：

$$V=\pi\int_1^4(y-1)\,dy=\pi\left[\frac{(y-1)^2}{2}\right]_1^4.$$

$$\boxed{\frac{9\pi}{2}\text{ cubic units}}.$$

当 $y=4$ 时，半径为 $\sqrt3$。该立体位于高为 $3$、体积为 $9\pi$ 的圆柱体内部。

</details>

</section>

## 根据错误恢复 {#repair}

关闭原答案后做相应新题。

| 错误 | 原因与回看 | 重试 |
| --- | --- | --- |
| 角或系数错误 | 先核恒等式，再核反向链式法则；[三角积分](#trigonometric-integrals)例 1–4 | [A](#repair-trig) |
| 直接对总积分取绝对值 | 跨轴抵消不能最后补救；[面积](#area)例 5–6 | [B](#repair-area) |
| 半径、变量、限不一致 | 重画截面，标半径和厚度；[旋转体](#volume-of-revolution)例 7–8 | [C](#repair-volume) |

<section class="lesson-check" markdown="1">

### 表达式 A {#repair-trig}

Find $\displaystyle\int\sin^2x\cos^2x\,dx$. Explain your first rewrite.

<details markdown="1">
<summary>提示</summary>

先合并两个因子，再处理平方。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$\sin^2x\cos^2x=\frac14\sin^2(2x)=\frac18[1-\cos(4x)],$$

$$\int\sin^2x\cos^2x\,dx=\frac{x}{8}-\frac{\sin(4x)}{32}+C.$$

求导回原式，核对整体角和系数。

</details>

</section>

<section class="lesson-check" markdown="1">

### 区域 B {#repair-area}

Sketch $y=x(x-1)$ for $0\le x\le2$. Find the definite integral and the total area with the $x$-axis.

<details markdown="1">
<summary>提示</summary>

标零点并检查两段符号。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$F(x)=\frac{x^3}{3}-\frac{x^2}{2},\qquad \int_0^2x(x-1)\,dx=\frac23.$$

$$A=-\int_0^1x(x-1)\,dx+\int_1^2x(x-1)\,dx=\frac16+\frac56=1.$$

草图在 $0<x<1$ 低于轴，在 $1<x\le2$ 高于轴；面积用平方单位。

</details>

</section>

<section class="lesson-check" markdown="1">

### 立体 C {#repair-volume}

The region bounded by $x=y^2$, the $y$-axis and $y=2$, with $y\ge0$, is rotated completely about the $y$-axis. Draw a slice and find the volume.

<details markdown="1">
<summary>提示</summary>

半径是 $x$，它已由 $y$ 给出。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$V=\pi\int_0^2(y^2)^2\,dy=\pi\left[\frac{y^5}{5}\right]_0^2=\frac{32\pi}{5}\text{ cubic units}.$$

最大半径为 $4$，高为 $2$；结果小于包围圆柱体体积 $32\pi$。

</details>

</section>

## 稍后回顾 {#review-later}

学过微分方程后，遮住方法表与解答再做下题。分别记录即时重试和稍后独立选法。

<section class="lesson-check" markdown="1">

### 再次遇到一个区域 {#review-region}

The region $R$ is bounded by $y=\sin x\cos x$, the $x$-axis, $x=0$ and $x=\frac\pi2$. Sketch $R$. Find (a) its area and (b) the volume when $R$ rotates completely about the $x$-axis. Explain why the two integrands differ.

<details markdown="1">
<summary>提示</summary>

先标小条高度，再确定所累加的量。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$A=\int_0^{\pi/2}\sin x\cos x\,dx=\left[\frac12\sin^2x\right]_0^{\pi/2}=\frac12.$$

$$V=\pi\int_0^{\pi/2}\sin^2x\cos^2x\,dx=\pi\left[\frac{x}{8}-\frac{\sin(4x)}{32}\right]_0^{\pi/2}=\frac{\pi^2}{16}.$$

曲线在轴上方；面积用高度，体积用 $\pi$ 乘半径平方。单位分别为平方和立方单位，不能直接比较两个数的大小检验量纲不同的量。

</details>

</section>

## 快速参考 {#quick-reference}

| 任务 | 法则或第一步 | 检查 |
|---|---|---|
| 正弦或余弦的奇次幂 | 保留一个因子；使用 $\sin^2x+\cos^2x=1$ | 换元时保留正确的符号和系数 |
| 偶次幂 | $\displaystyle\sin^2x=\frac{1-\cos(2x)}2$，$\displaystyle\cos^2x=\frac{1+\cos(2x)}2$ | 整个角都要加倍；若仍有平方项，就继续化简 |
| 正切函数的幂 | $\tan^2x=\sec^2x-1$ | 在函数有定义的区间上计算 |
| 曲线与 $x$ 轴之间的总面积 | 在交点处分段；把各段正面积相加 | 不要只对一个定积分结果取绝对值 |
| 两条曲线之间的面积 | 积分上方曲线减下方曲线 | 求交点；若上下顺序变化则分段 |
| 绕 $x$ 轴旋转的体积 | $\displaystyle V=\pi\int_a^b y^2\,dx$ | 整个半径要平方；使用 $x$ 的积分限 |
| 绕 $y$ 轴旋转的体积 | $\displaystyle V=\pi\int_c^d x^2\,dy$ | 把 $x^2$ 写成关于 $y$ 的表达式；使用 $y$ 的积分限 |
{: .wide-table}

**如果答案看起来不对：**对不定积分结果求导；检查面积计算中的符号，以及体积计算中的半径、积分限和单位。像 $\pi$ 这样的精确值应尽量保留到最后。

**下一步：**用[恢复题](#repair)修复错误，保留首次答案，再学微分方程；稍后回到[区域回顾](#review-region)。
{: #next-step}

返回[积分：方法选择](/zh/alevel/a2-mathematics/integration/)或查看[积分公式参考](/zh/alevel/a2-mathematics/quick-reference/#p27-integration)。

**学习路径：**[上一节：积分：方法选择](/zh/alevel/a2-mathematics/integration/) · [下一节：微分方程](/zh/alevel/a2-mathematics/differential-equations/)。

<details markdown="1">
<summary>来源与核验范围</summary>

范围为 9660 MA03 P2.4 三角恒等式与 P2.7 积分应用；面积为先修回顾。实读 January 2025 MA03 Q5（QP p11、MS p10）：完整半径平方、恒等式化简、积分、代限与精确结果。本页题目仍均为自拟题，不分配官方分值。

[9660 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf) · [January 2025 QP](https://aqamat.alevelclouds.com/25_01_QP_P2.pdf) / [MS](https://aqamat.alevelclouds.com/25_01_MS_P2.pdf)

</details>

{% include exam_topic_practice.html %}
