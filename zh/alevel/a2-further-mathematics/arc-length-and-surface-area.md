---
title: 弧长与旋转曲面面积
layout: subjects
mathjax: true
grade: a2
subject: a2-further-mathematics
lang: zh-CN
translation_of: /alevel/a2-further-mathematics/arc-length-and-surface-area/
permalink: /zh/alevel/a2-further-mathematics/arc-length-and-surface-area/
toc_headings: "#method, #cartesian-arc-length, #parametric-arc-length, #surface-area-about-the-x-axis, #worked-examples, #practice, #diagnose-and-retry, #quick-reference, #sources"
study_page: true
reading_layout: true
---

[高等纯数学](/zh/alevel/a2-further-mathematics/) · FP2.8 弧长与绕 x 轴的旋转曲面面积

根据曲线的直角坐标形式（Cartesian form）或参数形式（parametric form）计算弧长（arc length），再利用弧长微元（arc-length element）求绕 x 轴生成的旋转曲面面积（surface area of revolution）。

- **学习：**从[方法](#method)开始，再按顺序学习各例题。
- **作业帮助：**查阅[直角坐标弧长](#cartesian-arc-length)、[参数形式下的弧长](#parametric-arc-length)或[绕 x 轴的旋转曲面面积](#surface-area-about-the-x-axis)。
- **复习：**先完成[练习](#practice)，再查看[快速参考](#quick-reference)。

教材：第 23 章，第 282–287 页，*International A Level Further Mathematics*。

**开始前：**用[链式法则](/zh/alevel/a2-mathematics/differentiation/#composite-functions)和[参数求导](/zh/alevel/a2-mathematics/parametric-equations/#parametric-differentiation)写出两个坐标的导数。积分不熟时，回补[幂函数积分](/zh/alevel/a2-mathematics/integration/#power-integrals)、[换元](/zh/alevel/a2-mathematics/integration/#substitution)、[对数形式](/zh/alevel/a2-mathematics/integration/#logarithmic-form)或[分部积分](/zh/alevel/a2-mathematics/integration/#integration-by-parts)，再回对应示范解释每个系数。Q2 先推导原函数再代限，不要求先学双曲函数。

**题目身份：**除明确标出官方原题或教学改编的题目外，本课例题与练习均为自拟教学题，不分配官方分值。

## 方法 {#method}

**学习目标：**选择正确的弧长公式，设置只覆盖目标弧段一次的积分限，并计算该弧段绕 x 轴旋转所生成的面积。

曲线的一小段弧长记作 $\mathrm ds$。把这些小弧长相加，就得到整段弧长。弧长公式中的平方根因子始终非负。

以下分别建立直角坐标和参数形式的弧长，再由圆周长与弧长微元求旋转曲面面积。

## 直角坐标形式下的弧长 {#cartesian-arc-length}

对于 $y=f(x)$、$a\le x\le b$，先对 x 求导，得到斜率（gradient）；将斜率平方、加 1，再在给定的 x 坐标之间对正平方根积分。

对于光滑曲线，一小段弦的水平变化与竖直变化组成直角三角形，可用勾股定理求弦长。不断细分时，弦长之和趋近弧长；从平方根中提出水平变化量，就得到下面的长度微元。

$$\mathrm ds=\sqrt{1+\left(\frac{\mathrm dy}{\mathrm dx}\right)^2}\,\mathrm dx.$$

$$L=\int_a^b\sqrt{1+\left(\frac{\mathrm dy}{\mathrm dx}\right)^2}\,\mathrm dx.$$

整个计算都使用变量 x，因此积分限也应是 x 值。如果端点处导数或被积函数无定义，就从区间内部取极限。

<section class="worked-example" markdown="1">

### 例题 1 — 用换元法计算直角坐标弧长 {#example-1--cartesian-arc-length-by-substitution}

**Question:** Find the length of the curve $y=\frac23x^{\frac32}$ for $0\le x\le3$.

先求导，然后使用直角坐标弧长公式：

$$\frac{\mathrm dy}{\mathrm dx}=\sqrt{x}.$$

$$\begin{aligned}
L&=\int_0^3\sqrt{1+x}\,\mathrm dx\\
&=\int_1^4 u^{1/2}\,\mathrm du\quad(u=1+x,\ \mathrm du=\mathrm dx)\\
&=\left[\frac23u^{3/2}\right]_1^4\\
&=\frac23(4^{3/2}-1^{3/2})=\frac23(8-1)\\
&=\boxed{\frac{14}{3}}.
\end{aligned}$$

**检查：**整个区间上的被积函数为正，答案也大于水平距离 $3$，符合预期。

</section>

## 参数形式下的弧长 {#parametric-arc-length}

对于 $x=x(t),\ y=y(t)$、$\alpha\le t\le\beta$，分别对两个坐标关于 t 求导。速率（speed）是速度向量（velocity vector）的长度：

$$\frac{\mathrm ds}{\mathrm dt}=\sqrt{\left(\frac{\mathrm dx}{\mathrm dt}\right)^2+\left(\frac{\mathrm dy}{\mathrm dt}\right)^2}.$$

然后对 t 积分：

$$L=\int_\alpha^\beta\frac{\mathrm ds}{\mathrm dt}\,\mathrm dt.$$

不能只使用 $\frac{\mathrm dx}{\mathrm dt}$ 或 $\frac{\mathrm dy}{\mathrm dt}$。曲线运动的两个方向都会影响沿曲线移动的距离。

## 绕 x 轴的旋转曲面面积 {#surface-area-about-the-x-axis}

先用一条很短的直线段近似曲线的一小段。它绕 x 轴旋转一周，会扫出一条窄带；沿窄带表面的宽度是这段线长，不是水平宽度。线段足够短时，半径变化很小，窄带面积就近似等于圆周长乘这段线长。继续细分并相加，极限就是旋转曲面的面积。

曲线上每一点到 x 轴的距离是旋转半径 $\lvert y\rvert$，所以圆周长为 $2\pi\lvert y\rvert$。与它相乘的长度，正是求弧长时使用的同一个弧长微元（arc-length element）$\mathrm ds$：

$$r=\lvert y\rvert,\qquad S=\int 2\pi r\,\mathrm ds.$$

**直角坐标形式：**

$$S=2\pi\int_a^b\lvert y\rvert\sqrt{1+\left(\frac{\mathrm dy}{\mathrm dx}\right)^2}\,\mathrm dx.$$

**参数形式：**

$$S=2\pi\int_\alpha^\beta\lvert y(t)\rvert\frac{\mathrm ds}{\mathrm dt}\,\mathrm dt.$$

这些公式用于绕 x 轴旋转完整一周的情形，曲线须光滑，或按光滑弧段分别处理。直角坐标形式下代入相应的弧长微元，参数形式下代入参数弧长微元。

**列好积分后，检查积分限（limits of integration）与绝对值（absolute value）。**

- 直角坐标形式下使用递增的 x 积分限。参数方程使用递增的 t 积分限。平方根因子表示速率，因此这样选择可确保弧长非负。
- 曲线穿过 x 轴时，半径仍然是 $\lvert y\rvert$。如果分段更便于处理绝对值，可在穿轴点处分段积分。
- 如果平方根可化为 $\sqrt{g^2}$，先写成 $\lvert g\rvert$。检查整个区间后，才去掉绝对值。
- 参数区间必须只描绘目标弧段一次。如果参数重复描过曲线的一部分，积分也会重复计算那一段。
- 计算旋转曲面面积时，还要检查母线（generating curve）的不同部分是否扫过同一片曲面。例如，上半圆和下半圆分别绕直径旋转时，都会扫出同一个球面。这与同一弧段被描绘两遍是两个不同的问题。

公式计算的是曲面本身，不包括圆形端盖（end caps）。只有当题目要求立体完整边界的面积时，才需要将端盖计入。

## 例题 {#worked-examples}

<section class="worked-example" markdown="1">

### 例题 2 — 保留平方根中的绝对值 {#example-2--keep-the-absolute-value}

**Question:** Find the length of $y=\frac{x^2}{4}-\frac12\ln x$ for $1\le x\le2$.

先求斜率。平方根中的表达式可以写成完全平方：

$$\frac{\mathrm dy}{\mathrm dx}=\frac{x^2-1}{2x},\qquad
1+\left(\frac{\mathrm dy}{\mathrm dx}\right)^2=\frac{(x^2+1)^2}{4x^2}.$$

因此

$$\sqrt{1+\left(\frac{\mathrm dy}{\mathrm dx}\right)^2}
=\frac{\lvert x^2+1\rvert}{2\lvert x\rvert}
=\frac{x^2+1}{2x},\qquad 1\le x\le2.$$

最后一个等号利用了 $x>0$ 和整个区间内 $x^2+1>0$。

$$\begin{aligned}
L&=\int_1^2\left(\frac x2+\frac1{2x}\right)\,\mathrm dx\\
&=\left[\frac{x^2}{4}+\frac12\ln x\right]_1^2\\
&=\left(1+\frac12\ln2\right)-\left(\frac14+\frac12\ln1\right)\\
&=\boxed{\frac34+\frac12\ln2}.
\end{aligned}$$

**检查：**把 $\sqrt{g^2}$ 直接写成 $g$，只有当区间上 $g\ge0$ 时才正确。本题符合这一条件，但必须先检查。

</section>

<section class="worked-example" markdown="1">

### 例题 3 — 改编官方样题的参数弧长题 {#example-3--adapted-specimen-question}

**Question (adapted):** A curve is defined by $x=\ln(\sec t+\tan t)-\sin t$ and $y=\cos t$, for $0\le t\le\frac{\pi}{3}$. Find its arc length.

分别对两个坐标求导：

$$\frac{\mathrm dx}{\mathrm dt}=\sec t-\cos t=\frac{1-\cos^2t}{\cos t}=\sin t\tan t,\qquad
\frac{\mathrm dy}{\mathrm dt}=-\sin t.$$

速率为

$$\begin{aligned}
\frac{\mathrm ds}{\mathrm dt}
&=\sqrt{\sin^2t\tan^2t+\sin^2t}\\
&=\sqrt{\sin^2t\sec^2t}\\
&=\lvert \sin t\rvert\,\lvert \sec t\rvert\\
&=\tan t,\qquad 0\le t\le\frac{\pi}{3}.
\end{aligned}$$

在此区间内，正弦非负、正割为正。因此

$$\begin{aligned}
L&=\int_0^{\pi/3}\frac{\sin t}{\cos t}\,\mathrm dt\\
&=-\int_1^{1/2}\frac{\mathrm dw}{w}\quad(w=\cos t,\ \mathrm dw=-\sin t\,\mathrm dt)\\
&=[-\ln w]_1^{1/2}\\
&=-\ln(1/2)-(-\ln1)\\
&=\boxed{\ln2}.
\end{aligned}$$

**检查：**速率非负，而且参数区间只描绘该弧段一次。本例改编自 OxfordAQA FM03 Specimen 2018 官方样题第 11 题；解法可参照官方评分方案。题目文字与本课解答均已改编或重写。

</section>

<section class="worked-example" markdown="1">

### 例题 4 — 将直线绕 x 轴旋转 {#example-4--cartesian-surface-area}

**Question:** Find the area swept out when $y=4-x$, $1\le x\le3$, is revolved about the x-axis.

在此区间上 $y\ge0$，所以半径为 $y=4-x$。此外，$\frac{\mathrm dy}{\mathrm dx}=-1$：

$$\begin{aligned}
S&=2\pi\int_1^3(4-x)\sqrt{1+(-1)^2}\,\mathrm dx\\
&=2\pi\sqrt2\int_1^3(4-x)\,\mathrm dx\\
&=2\pi\sqrt2\left[4x-\frac{x^2}{2}\right]_1^3\\
&=2\pi\sqrt2\left[\left(12-\frac92\right)-\left(4-\frac12\right)\right]\\
&=\boxed{8\pi\sqrt2}.
\end{aligned}$$

**检查：**半径从 3 逐渐减小到 1，结果不包括两端的圆盘。

</section>

<section class="worked-example" markdown="1">

### 例题 5 — 曲线穿过 x 轴时的参数曲面面积 {#example-5--radius-absolute-value}

**Question:** Find the area swept out when $x=t$, $y=t-1$, $0\le t\le2$, is revolved about the x-axis.

旋转半径是 $\lvert t-1\rvert$，而不是 $t-1$。速率为常数：

$$\frac{\mathrm dx}{\mathrm dt}=1,\qquad
\frac{\mathrm dy}{\mathrm dt}=1,\qquad
\frac{\mathrm ds}{\mathrm dt}=\sqrt2.$$

在穿轴点 $t=1$ 处分段：

$$\begin{aligned}
S&=2\pi\sqrt2\int_0^2\lvert t-1\rvert\,\mathrm dt\\
&=2\pi\sqrt2\left(\int_0^1(1-t)\,\mathrm dt+\int_1^2(t-1)\,\mathrm dt\right)\\
&=2\pi\sqrt2\left(\left[t-\frac{t^2}{2}\right]_0^1+\left[\frac{t^2}{2}-t\right]_1^2\right)\\
&=2\pi\sqrt2\left[\left(1-\frac12-0\right)+\left((2-2)-(\tfrac12-1)\right)\right]\\
&=\boxed{2\pi\sqrt2}.
\end{aligned}$$

这条曲线生成两个尖端相接的圆锥曲面。两端的圆形边界属于曲面的边缘，并非端盖。

</section>

<section class="worked-example" markdown="1">

### 例题 6 — 圆弧参数方程所生成的曲面面积 {#example-6--parametric-surface-area}

**Question:** Find the area swept out when $x=2\cos t$, $y=2\sin t$, $0\le t\le\frac{\pi}{2}$, is revolved about the x-axis.

参数速率为常数：

$$\frac{\mathrm ds}{\mathrm dt}
=\sqrt{(-2\sin t)^2+(2\cos t)^2}
=2.$$

在此区间上 $y\ge0$，所以半径为 $2\sin t$：

$$\begin{aligned}
S&=2\pi\int_0^{\frac{\pi}{2}}(2\sin t)(2)\,\mathrm dt\\
&=8\pi\int_0^{\pi/2}\sin t\,\mathrm dt\\
&=8\pi[-\cos t]_0^{\pi/2}\\
&=8\pi\left(-\cos\frac\pi2+\cos0\right)=8\pi(0+1)\\
&=\boxed{8\pi}.
\end{aligned}$$

该弧段生成半球的曲面。弧段并没有扫出平坦的圆形底面，因此答案不含底面。

</section>

## 练习 {#practice}

**独立练习 · 25–30 分钟**

每题先写出公式和积分限，再开始计算。说明如何处理绝对值，并检查速率是否非负。以下是自拟练习题，并非官方考试题；没有官方分值。

<section class="lesson-check" markdown="1">

### Q1 — 直线的长度 {#q1--straight-line-length}

**Question:** Find the length of $y=3x+1$ for $0\le x\le2$.

<details markdown="1">
<summary>提示</summary>

斜率为常数。使用直角坐标弧长公式。

</details>

<details markdown="1">
<summary>解答</summary>

$$\begin{aligned}
L&=\int_0^2\sqrt{10}\,\mathrm dx\\
&=[\sqrt{10}\,x]_0^2=\sqrt{10}(2-0)\\
&=\boxed{2\sqrt{10}}.
\end{aligned}$$

</details>

</section>

<section class="lesson-check" markdown="1">

### Q2 — 对非恒定速率积分 {#q2--non-constant-cartesian-speed}

**Question:** Find the length of $y=\frac{x^2}{2}$ for $0\le x\le2$. Give an exact answer.

<details markdown="1">
<summary>提示</summary>

可以先用 $\frac12\left(x\sqrt{1+x^2}+\ln\left(x+\sqrt{1+x^2}\right)\right)$ 作为原函数（antiderivative），并先求导确认结果为 $\sqrt{1+x^2}$。

</details>

<details markdown="1">
<summary>解答</summary>

先推导所需原函数，避免只引用结果。分部积分取 $u=\sqrt{1+x^2}$、$\mathrm dv=\mathrm dx$，并用 $x^2=(1+x^2)-1$。再对剩下的积分换元：

$$\begin{aligned}
I&=\int\sqrt{1+x^2}\,\mathrm dx\\
&=x\sqrt{1+x^2}-\int\frac{x^2}{\sqrt{1+x^2}}\,\mathrm dx\\
&=x\sqrt{1+x^2}-I+\int\frac{\mathrm dx}{\sqrt{1+x^2}}.
\end{aligned}$$

$$\begin{aligned}
u&=x+\sqrt{1+x^2}>0,\\
\mathrm du&=\left(1+\frac{x}{\sqrt{1+x^2}}\right)\mathrm dx
=\frac{u}{\sqrt{1+x^2}}\,\mathrm dx,\\
\int\frac{\mathrm dx}{\sqrt{1+x^2}}&=\int\frac{\mathrm du}{u}=\ln u+C,\\
2I&=x\sqrt{1+x^2}+\ln\left(x+\sqrt{1+x^2}\right)+C.
\end{aligned}$$

因此 $I=\frac12(x\sqrt{1+x^2}+\ln(x+\sqrt{1+x^2}))+C$。现在代限：

$$\begin{aligned}
L&=\int_0^2\sqrt{1+x^2}\,\mathrm dx\\
&=\left[\frac12\left(x\sqrt{1+x^2}+\ln\left(x+\sqrt{1+x^2}\right)\right)\right]_0^2\\
&=\frac12\left[(2\sqrt5+\ln(2+\sqrt5))-(0+\ln1)\right]\\
&=\boxed{\sqrt5+\frac12\ln(2+\sqrt5)}.
\end{aligned}$$

</details>

</section>

<section class="lesson-check" markdown="1">

### Q3 — 参数方程表示的四分之一圆 {#q3--parametric-quarter-circle}

**Question:** Find the arc length of $x=3\cos t$, $y=3\sin t$, for $0\le t\le\frac{\pi}{2}$.

<details markdown="1">
<summary>提示</summary>

分别求两个导数。速率为常数。

</details>

<details markdown="1">
<summary>解答</summary>

$$\begin{aligned}
\frac{\mathrm ds}{\mathrm dt}
&=\sqrt{(-3\sin t)^2+(3\cos t)^2}\\
&=3,\\
L&=\int_0^{\pi/2}3\,\mathrm dt\\
&=[3t]_0^{\pi/2}=3(\pi/2-0)\\
&=\boxed{\frac{3\pi}{2}}.
\end{aligned}$$

</details>

</section>

<section class="lesson-check" markdown="1">

### Q4 — 直角坐标曲线的旋转曲面面积 {#q4--cartesian-surface-area}

**Question:** Find the area swept out when $y=x$, $0\le x\le2$, is revolved about the x-axis.

<details markdown="1">
<summary>提示</summary>

此处 $y\ge0$，所以半径为 $x$。斜率为 1。

</details>

<details markdown="1">
<summary>解答</summary>

$$\begin{aligned}
S&=2\pi\int_0^2x\sqrt{1+1^2}\,\mathrm dx\\
&=2\pi\sqrt2\int_0^2x\,\mathrm dx\\
&=2\pi\sqrt2\left[\frac{x^2}{2}\right]_0^2\\
&=2\pi\sqrt2\left(\frac{2^2}{2}-\frac{0^2}{2}\right)\\
&=\boxed{4\pi\sqrt2}.
\end{aligned}$$

</details>

</section>

<section class="lesson-check" markdown="1">

### Q5 — 曲线在 x 轴两侧的旋转曲面面积 {#q5--surface-crosses-the-axis}

**Question:** Find the area swept out when $y=x-2$, $0\le x\le4$, is revolved about the x-axis.

<details markdown="1">
<summary>提示</summary>

半径是 $\lvert x-2\rvert$。在 $x=2$ 处分段积分。

</details>

<details markdown="1">
<summary>解答</summary>

斜率为 1，因此速率因子为 $\sqrt2$。所以

$$\begin{aligned}
S&=2\pi\sqrt2\int_0^4\lvert x-2\rvert\,\mathrm dx\\
&=2\pi\sqrt2\left(\int_0^2(2-x)\,\mathrm dx+\int_2^4(x-2)\,\mathrm dx\right)\\
&=2\pi\sqrt2\left(\left[2x-\frac{x^2}{2}\right]_0^2+\left[\frac{x^2}{2}-2x\right]_2^4\right)\\
&=2\pi\sqrt2\left[((4-2)-0)+((8-8)-(2-4))\right]\\
&=\boxed{8\pi\sqrt2}.
\end{aligned}$$

</details>

</section>

<section class="lesson-check" markdown="1">

### Q6 — 两段弧是否会生成两个不同的曲面？ {#q6--avoid-counting-the-same-surface-twice}

**Question:** The full circle $x=\cos t$, $y=\sin t$, $0\le t\le2\pi$, is revolved about the x-axis. Find the length of the circle and the distinct surface area generated. Explain which parameter interval you use for the surface area.

<details markdown="1">
<summary>提示</summary>

参数区间 $0\le t\le2\pi$ 描过圆周一次。旋转后，上半圆和下半圆会扫过同一个球面。

</details>

<details markdown="1">
<summary>解答</summary>

速率为 1，因此整个圆的长度为

$$L=\int_0^{2\pi}1\,\mathrm dt=[t]_0^{2\pi}=2\pi-0=2\pi.$$

求不重复计数的曲面面积时，只取上半圆 $0\le t\le\pi$：

$$\begin{aligned}
S&=2\pi\int_0^\pi\sin t\,\mathrm dt\\
&=2\pi[-\cos t]_0^\pi\\
&=2\pi(-\cos\pi+\cos0)=2\pi(1+1)\\
&=\boxed{4\pi}.
\end{aligned}$$

若计算曲面面积时用 $0\le t\le2\pi$，就把球面计算两次：

$$\begin{aligned}
2\pi\int_0^{2\pi}\lvert\sin t\rvert\,\mathrm dt
&=2\pi\left(\int_0^\pi\sin t\,\mathrm dt-\int_\pi^{2\pi}\sin t\,\mathrm dt\right)\\
&=2\pi\left([ -\cos t]_0^\pi+[\cos t]_\pi^{2\pi}\right)\\
&=2\pi[(1-(-1))+(1-(-1))]=8\pi.
\end{aligned}$$

所以曲面积的参数区间必须另行选择。求弧长时，圆周本身并没有被重复描绘；重复发生在上下两半圆旋转后彼此重叠。

</details>

</section>

<section class="lesson-check" markdown="1">

### Q7 — 用一个参数方程求弧长和曲面面积 {#q7--combined-parametric-problem}

**Question:** For $x=t^2$, $y=1-t^2$, $0\le t\le1$, find (a) the arc length and (b) the area swept out when the curve is revolved about the x-axis.

<details markdown="1">
<summary>提示</summary>

两问都会用到同一个速率。由于 $t\ge0$，可化简为 $2\sqrt2\,t$。

</details>

<details markdown="1">
<summary>解答</summary>

$$\frac{\mathrm dx}{\mathrm dt}=2t,\qquad
\frac{\mathrm dy}{\mathrm dt}=-2t,\qquad
\frac{\mathrm ds}{\mathrm dt}=2\sqrt2\,t.$$

因此

$$\begin{aligned}
L&=\int_0^1 2\sqrt2\,t\,\mathrm dt\\
&=2\sqrt2\left[\frac{t^2}{2}\right]_0^1=2\sqrt2\left(\frac12-0\right)\\
&=\boxed{\sqrt2}.
\end{aligned}$$

在此区间上 $y=1-t^2\ge0$，所以半径为 $1-t^2$：

$$\begin{aligned}
S&=2\pi\int_0^1(1-t^2)(2\sqrt2\,t)\,\mathrm dt\\
&=4\pi\sqrt2\int_0^1(t-t^3)\,\mathrm dt\\
&=4\pi\sqrt2\left[\frac{t^2}{2}-\frac{t^4}{4}\right]_0^1\\
&=4\pi\sqrt2\left[\left(\frac12-\frac14\right)-(0-0)\right]\\
&=\boxed{\pi\sqrt2}.
\end{aligned}$$

</details>

</section>

## 纠错与独立重试 {#diagnose-and-retry}

以下任务均为自拟教学任务，无官方分值。先写下错误原因，再看反馈；随后关闭所有解答，独立完成新任务。需要提示的任务应在稍后重新独立尝试。

<section class="lesson-check" markdown="1">

**Diagnose:** A learner calculates the surface generated by $y=3x$, $0\le x\le1$, using

$$\int_0^1 2\pi y\,\mathrm dx$$

. Identify the missing geometric factor.

<details markdown="1">
<summary>反馈</summary>

窄条的宽度沿倾斜的曲线量取，因此 $\mathrm ds=\sqrt{10}\,\mathrm dx$。曲面面积为

$$\begin{aligned}
S&=6\pi\sqrt{10}\int_0^1x\,\mathrm dx\\
&=6\pi\sqrt{10}\left[\frac{x^2}{2}\right]_0^1
=6\pi\sqrt{10}\left(\frac12-0\right)=3\pi\sqrt{10}.
\end{aligned}$$

；使用水平宽度会低估面积。

</details>

</section>

<section class="lesson-check" markdown="1">

**Independent retry:** A straight segment joins $(0,1)$ to $(3,5)$. Find its length and the curved area generated by revolving it about the x-axis. Exclude end caps.

<details markdown="1">
<summary>提示</summary>

由端点建立直线方程或参数方程，区分旋转半径和速率。

</details>

<details markdown="1">
<summary>重试解答与检验</summary>

可取 $x=3t$、$y=1+4t$、$0\le t\le1$。速率为 $5$，所以 $L=5$。半径始终为正，曲面面积为

$$\begin{aligned}
L&=\int_0^1 5\,\mathrm dt=[5t]_0^1=5-0=5,\\
S&=10\pi\int_0^1(1+4t)\,\mathrm dt\\
&=10\pi[t+2t^2]_0^1=10\pi[(1+2)-(0+0)]=30\pi.
\end{aligned}$$

参数只描过母线一次，不计两端圆盘。

</details>

</section>

**学后下一步：**先关闭本章答案，去课程入口完成[跨主题综合](/zh/alevel/a2-further-mathematics/#mixed-review)；完成后续学习，再做[延后任务](/zh/alevel/a2-further-mathematics/#later-review)。记录首次是否独立、使用了什么提示、错误原因及重试结果；若方法或条件出错，按本章“练习后”返回对应示范，再关闭解答重试。

## 快速参考 {#quick-reference}

| 任务 | 公式或第一步 | 检查 |
|---|---|---|
| 直角坐标弧长 | $\displaystyle L=\int_a^b\sqrt{1+\left(\frac{\mathrm dy}{\mathrm dx}\right)^2}\,\mathrm dx$ | 积分限是 x 值；使用 $a\le b$ |
| 参数弧长 | $\displaystyle L=\int_\alpha^\beta\sqrt{\left(\frac{\mathrm dx}{\mathrm dt}\right)^2+\left(\frac{\mathrm dy}{\mathrm dt}\right)^2}\,\mathrm dt$ | 包含两个导数并使用递增的 t 积分限 |
| 直角坐标曲线绕 x 轴旋转 | $\displaystyle S=2\pi\int_a^b\lvert y\rvert\sqrt{1+\left(\frac{\mathrm dy}{\mathrm dx}\right)^2}\,\mathrm dx$ | 半径是 $\lvert y\rvert$ |
| 参数曲线绕 x 轴旋转 | $\displaystyle S=2\pi\int_\alpha^\beta\lvert y\rvert\sqrt{\left(\frac{\mathrm dx}{\mathrm dt}\right)^2+\left(\frac{\mathrm dy}{\mathrm dt}\right)^2}\,\mathrm dt$ | 半径是 $\lvert y\rvert$；速率非负 |
| 平方根中的完全平方 | $\sqrt{g^2}=\lvert g\rvert$ | 去掉绝对值前先判断 $g$ 的符号 |
| 曲线穿过 x 轴 | 在 $y=0$ 处拆分，或保留 $\lvert y\rvert$ 积分 | 不要使用负半径 |
| 参数或曲面部分重复 | 选择只覆盖目标对象一次的积分区间 | 区分重复描曲线与旋转后曲面重叠 |
{: .wide-table}

**练习后：**如果弧长公式用错，重做第 1–3 题。如果半径符号出错，重做第 4–5 题。如果重复计算了重叠曲面，复习第 6 题。如果需要组合使用两个公式，再做一次第 7 题。

**你应当能够：**计算直角坐标与参数形式下的弧长，使用 $\lvert y\rvert$ 作为绕 x 轴旋转时的半径，并区分曲面本身、端盖和重叠曲面。

## 来源与范围 {#sources}

本轮范围核对：2026-10-23，从当前 9665 资格页打开大纲，核对正文 v5.2 及本课条目；没有迁移至 9765。下列试卷／评分材料仅重新读取所注明题目与配套评分部分的 PDF 文本，未完成原卷图像的视觉核验。官方题身份与分值保留，改编与自拟任务不称官方题。

本课依据 [OxfordAQA Further Mathematics 9665 课程大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf)中 FP2.8（印刷页码第 18 页）的要求：掌握直角坐标或参数形式下的弧长与旋转曲面面积。例题 3 改编自官方样题；练习题为自拟题，没有官方分值。

[OxfordAQA Specimen 2018, Q11, QP PDF p. 18](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9665-FM03-international-a-level-further-mathematics-specimen-paper-2019-v3.pdf#page=18); [MS Q11, PDF p. 14](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9665-FM03-international-a-level-further-mathematics-mark-scheme-2016-v1.pdf#page=14). 本轮重新读取对应题干及评分材料（2026-10-23，PDF 文本）；只借用已注明的方法，不把改编题或新增自拟任务称为原题。

**学习路径：**[上一节：反三角函数的微积分](/zh/alevel/a2-further-mathematics/inverse-trigonometric-functions/) · [下一节：双曲函数](/zh/alevel/a2-further-mathematics/hyperbolic-functions/) · [返回高等纯数学课程](/zh/alevel/a2-further-mathematics/)
