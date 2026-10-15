---
title: 积分：三角积分与应用
layout: subjects
mathjax: true
grade: a2
subject: a2-mathematics
lang: zh-CN
translation_of: /alevel/a2-mathematics/integration-applications/
permalink: /zh/alevel/a2-mathematics/integration-applications/
toc_headings: h2
study_page: true
---

[纯数学](/zh/alevel/a2-mathematics/) · P2.7 积分

使用三角恒等式（trigonometric identity）简化积分，再用定积分（definite integral）求面积和体积。本页例题与练习的题干保留英文，讲解、提示与解答使用中文。

- **学习：**先学习[三角积分](#trigonometric-integrals)，再学习[面积](#area)和[旋转体体积（volume of revolution）](#volume-of-revolution)。
- **作业帮助：**对照例题检查方法。计算前确认所用恒等式、积分限（limits of integration）和旋转轴。
- **复习：**先在不看解答的情况下尝试[练习](#practice)，再查看[快速参考](#quick-reference)。

教材：第 6 章第 6.5–6.6 节（印刷版第 95–100 页）。面积部分复习较早学过的定积分，并为体积题作准备。积分常数记作 $C$。

**开始前：**你应当掌握标准积分、换元积分法（integration by substitution）和三角恒等式。如有需要，请复习[积分：方法选择](/zh/alevel/a2-mathematics/integration/)。

本页所有例题和练习题均为自拟题，并非官方真题；题目没有官方分值。

## 三角积分 {#trigonometric-integrals}

**全程使用弧度制（radians）。**三角函数的标准导数和积分公式均以弧度为单位。

| 观察到的形式 | 第一步 | 这样做的原因 |
|---|---|---|
| $\sin x$ 的奇次幂 | 保留一个因子 $\sin x$；其余部分使用 $\sin^2x=1-\cos^2x$ | 尝试令 $u=\cos x$，此时 $du=-\sin x\,dx$ |
| $\cos x$ 的奇次幂 | 保留一个因子 $\cos x$；其余部分使用 $\cos^2x=1-\sin^2x$ | 尝试令 $u=\sin x$，此时 $du=\cos x\,dx$ |
| 只有 $\sin x$ 和 $\cos x$ 的偶次幂 | 使用二倍角恒等式（double angle identity） | 把平方项改写为常数项和余弦项 |
| $\tan x$ 的幂 | 使用 $\tan^2x=\sec^2x-1$ 降低幂次 | 含 $\sec^2x$ 的项可能适合令 $u=\tan x$ |

若角的表达式是 $2x$ 或 $3x$ 等形式，对整个角使用相同恒等式。积分时要补上内层函数导数所对应的倒数系数。

### 例题 1 — 保留一个正弦因子 {#example-1--keep-one-sine-factor}

**Question:** Find $\displaystyle\int\sin^3(2x)\,dx$.

**方法选择：**幂次是奇数。改写为

$$\sin^3(2x)=[1-\cos^2(2x)]\sin(2x).$$

令 $u=\cos(2x)$。则 $du=-2\sin(2x)\,dx$，所以

$$\int\sin^3(2x)\,dx=-\frac12\int(1-u^2)\,du.$$

$$\boxed{-\frac12\cos(2x)+\frac16\cos^3(2x)+C}.$$

**检查：**求导得到 $\sin(2x)-\cos^2(2x)\sin(2x)=\sin^3(2x)$。

**常见错误：**漏掉负号或系数 $\frac12$；这个系数来自用 $du$ 替换原微分项。

### 例题 2 — 使用二倍角恒等式 {#example-2--use-a-double-angle-identity}

**Question:** Find $\displaystyle\int\cos^2(3x)\,dx$.

使用 $\cos^2\theta=\frac{1+\cos(2\theta)}2$，其中 $\theta=3x$：

$$\int\cos^2(3x)\,dx=\frac12\int[1+\cos(6x)]\,dx.$$

$$\boxed{\frac{x}{2}+\frac{\sin(6x)}{12}+C}.$$

**检查：**求导得到 $\frac12+\frac12\cos(6x)=\cos^2(3x)$。

**常见错误：**把 $\cos^2(3x)$ 写成 $\frac{1+\cos(3x)}2$。恒等式中的角要整体加倍。

### 例题 3 — 化简四次幂 {#example-3--reduce-a-fourth-power}

**Question:** Find $\displaystyle\int\cos^4(2x)\,dx$.

连续两次使用二倍角恒等式：

$$\cos^4(2x)=\frac14[1+2\cos(4x)+\cos^2(4x)]$$

$$=\frac38+\frac12\cos(4x)+\frac18\cos(8x).$$

现在逐项积分：

$$\boxed{\frac{3x}{8}+\frac{\sin(4x)}8+\frac{\sin(8x)}{64}+C}.$$

**检查：**求导得到 $\frac38+\frac12\cos(4x)+\frac18\cos(8x)$，正是上面的表达式。

对于偶次幂的乘积，也可以留意 $\sin(2x)=2\sin x\cos x$。例如，$\sin^2x\cos^2x=\frac18[1-\cos(4x)]$。

### 例题 4 — 化简正切函数的幂 {#example-4--reduce-a-tangent-power}

**Question:** Find $\displaystyle\int\tan^3x\,dx$.

使用 $\tan^2x=\sec^2x-1$：

$$\int\tan^3x\,dx=\int\tan x\sec^2x\,dx-\int\tan x\,dx.$$

对于第一个积分，令 $u=\tan x$。对于第二个积分，使用 $\int\tan x\,dx=-\ln\lvert\cos x\rvert+C$。

$$\boxed{\frac12\tan^2x+\ln\lvert\cos x\rvert+C}.$$

**检查：**求导得到 $\tan x\sec^2x-\tan x=\tan^3x$。

此结果适用于 $\cos x\ne0$ 的区间。不要跨过 $\tan x$ 无定义的点积分。

## 面积 {#area}

**定积分给出带符号的面积（signed area）。**曲线在 $x$ 轴上方的部分贡献正值，在下方的部分贡献负值。总面积则是所有部分面积大小之和。

1. 画出曲线草图并标明所求区间。
2. 找出区间内部曲线与 $x$ 轴的交点。
3. 在这些交点处分段积分。曲线在轴下方的部分要改变符号。
4. 把各段正面积相加，并用平方单位表示答案。

![Example 5: the curve x squared minus one crosses the x-axis at minus one and one, with shaded areas above and below. Example 6: the shaded region lies between the line y equals two x and the curve y equals x squared, from zero to two.](/assets/img/integration-area.svg)

### 例题 5 — 在曲线穿过坐标轴处拆分 {#example-5--split-where-the-curve-crosses-the-axis}

**Question:** Find the total area between $y=x^2-1$ and the $x$-axis for $-2\le x\le2$.

曲线与轴的交点为 $x=-1$ 和 $x=1$。曲线在两交点之间位于轴下方，在两侧的外部区间位于轴上方。

$$\begin{aligned}A&=\int_{-2}^{-1}(x^2-1)\,dx\\&\quad-\int_{-1}^{1}(x^2-1)\,dx\\&\quad+\int_1^2(x^2-1)\,dx.\end{aligned}$$

取 $F(x)=\frac{x^3}{3}-x$，两个外侧积分的值都是 $\frac43$。中间的积分为 $-\frac43$。

$$A=\frac43+\frac43+\frac43=\boxed{4\text{ square units}}.$$

**检查：**$\int_{-2}^{2}(x^2-1)\,dx=\frac43$ 是带符号的积分值，不是总面积。即使对这个单一结果取绝对值，仍然得不到正确总面积。

### 例题 6 — 上方曲线减去下方曲线 {#example-6--upper-curve-minus-lower-curve}

**Question:** Find the area enclosed by $y=2x$ and $y=x^2$.

先求交点：$2x=x^2$ 得到 $x=0$ 和 $x=2$。在这两个值之间，$2x\ge x^2$。

$$A=\int_0^2(2x-x^2)\,dx=\left[x^2-\frac{x^3}{3}\right]_0^2.$$

$$\boxed{\frac43\text{ square units}}.$$

**检查：**被积函数在 $[0,2]$ 上非负。如果给定区间内上下两条曲线的顺序发生变化，就应在交点处拆分积分。

## 旋转体体积（volume of revolution） {#volume-of-revolution}

一个区域绕某条轴完整旋转后，会形成旋转体（solid of revolution）。如果区域从旋转轴延伸到曲线，垂直于旋转轴的截面是一个圆，其面积为 $\pi\times(\text{radius})^2$。

| 旋转轴 | 半径 | 轴与曲线之间区域的体积公式 |
|---|---|---|
| $x$ 轴 | 距离 $\lvert y\rvert$（到 $x$ 轴） | $\displaystyle V=\pi\int_a^b y^2\,dx$ |
| $y$ 轴 | 距离 $\lvert x\rvert$（到 $y$ 轴） | $\displaystyle V=\pi\int_c^d x^2\,dy$ |

**开始积分前：**确定旋转轴，把半径平方，用积分变量表示它，并选择该变量对应的上下限。答案用立方单位表示。

这些公式描述的是没有空洞的圆形截面。如果所给区域没有延伸到旋转轴，先确定外半径和内半径；不要未经检查就把某一条曲线到轴的距离当作半径。

### 例题 7 — 平方整个表达式 {#example-7--square-the-whole-expression}

**Question:** The region between $y=x+1$, the $x$-axis and the lines $x=0$ and $x=2$ is rotated completely about the $x$-axis. Find its volume.

半径为 $y=x+1$。它的平方为 $(x+1)^2=x^2+2x+1$。

$$V=\pi\int_0^2(x+1)^2\,dx.$$

$$=\pi\left[\frac{x^3}{3}+x^2+x\right]_0^2=\boxed{\frac{26\pi}{3}\text{ cubic units}}.$$

**常见错误：**用 $x^2+1$ 代替 $(x+1)^2$，或者积分 $y$ 而不是 $y^2$。

**检查：**半径从 $1$ 增加到 $3$，所对应的区间长度为 $2$。体积应介于以最小半径和最大半径构成的圆柱体体积 $2\pi$ 与 $18\pi$ 之间。

### 例题 8 — 绕 y 轴旋转时更换变量 {#example-8--change-the-variable-for-the-y-axis}

**Question:** The region in $x\ge0$ enclosed by $y=x^2+2$, the line $y=6$ and the $y$-axis is rotated completely about the $y$-axis. Find its volume.

$y$ 的积分范围为 $2$ 到 $6$。把曲线改写为 $x^2=y-2$。

$$V=\pi\int_2^6(y-2)\,dy=\pi\left[\frac{(y-2)^2}{2}\right]_2^6.$$

$$\boxed{8\pi\text{ cubic units}}.$$

**常见错误：**使用 $x$ 的积分限 $0$ 和 $2$，却对 $y$ 积分。

**检查：**半径从 $0$ 增加到 $2$。该立体位于半径为 $2$、高为 $4$ 的圆柱体内部，而此圆柱体的体积为 $16\pi$。

**面积与体积使用不同的被积函数。**对于曲线 $y=\sin x$ 在 $0\le x\le\frac\pi2$ 上的部分，求面积时积分 $\sin x$；绕 $x$ 轴旋转时则积分 $\pi\sin^2x$。因此，体积题可能需要先使用三角恒等式。

## 练习 {#practice}

**独立练习 · 30–40 分钟**

时间仅供参考。每道三角积分题都写出所用恒等式；每道面积或体积题都先画出区域草图，并列出积分式，再开始计算。遇到困难时再打开提示。

### Q1 — 余弦的奇次幂 {#q1--an-odd-cosine-power}

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

### Q2 — 三角函数幂的乘积 {#q2--a-product-of-powers}

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

### Q3 — 带积分限的偶次幂 {#q3--an-even-power-with-limits}

Evaluate $\displaystyle\int_0^{\frac\pi4}\sin^2(2x)\,dx$ exactly.

<details markdown="1">
<summary>提示</summary>

使用 $\sin^2(2x)=\frac{1-\cos(4x)}2$。积分限保持弧度制。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$\left[\frac{x}{2}-\frac{\sin(4x)}8\right]_0^{\frac\pi4}=\boxed{\frac\pi8}.$$

被积函数的值在 $0$ 和 $1$ 之间，所以答案应在 $0$ 与 $\frac\pi4$ 之间。

</details>

### Q4 — 正切的平方 {#q4--a-tangent-square}

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

### Q5 — 两条曲线之间的面积 {#q5--area-between-two-curves}

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

### Q6 — 带符号积分还是总面积？ {#q6--signed-integral-or-total-area}

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

### Q7 — 选择旋转轴和积分变量 {#q7--choose-the-axis-and-the-variable}

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

**如果答案看起来不对：**对不定积分结果求导；检查面积计算中的符号，以及体积计算中的半径、积分限和单位。像 $\pi$ 这样的精确值应尽量保留到最后。

**练习后：**不看解答，解释一次恒等式的选择，并写出一道面积题或体积题的积分式。重新完成那些方法或积分限选错的题目。

返回[积分：方法选择](/zh/alevel/a2-mathematics/integration/)或查看[积分公式参考](/zh/alevel/a2-mathematics/quick-reference/#p27-integration)。

**学习路径：**[上一节：积分：方法选择](/zh/alevel/a2-mathematics/integration/) · [下一节：微分方程](/zh/alevel/a2-mathematics/differential-equations/)。
