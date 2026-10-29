---
title: 弧长与旋转曲面面积
layout: subjects
mathjax: true
grade: a2
subject: a2-further-mathematics
lang: zh-CN
translation_of: /alevel/a2-further-mathematics/arc-length-and-surface-area/
permalink: /zh/alevel/a2-further-mathematics/arc-length-and-surface-area/
toc_headings: "#method, #cartesian-arc-length, #parametric-arc-length, #surface-area-about-the-x-axis, #worked-examples, #practice, #diagnose-and-retry, #nonlinear-surfaces, #quick-reference, #sources"
study_page: true
reading_layout: true
---

[高等纯数学](/zh/alevel/a2-further-mathematics/) · FP2.8 弧长与绕 x 轴的旋转曲面面积

根据曲线的直角坐标形式（Cartesian form）或参数形式（parametric form）计算弧长（arc length），再利用弧长微元（arc-length element）求绕 x 轴生成的旋转曲面面积（surface area of revolution）。

- **学习：**从[方法](#method)开始，再按顺序学习各例题。
- **作业帮助：**查阅[直角坐标弧长](#cartesian-arc-length)、[参数形式下的弧长](#parametric-arc-length)或[绕 x 轴的旋转曲面面积](#surface-area-about-the-x-axis)。
- **复习：**先完成[练习](#practice)，再查看[快速参考](#quick-reference)。

- **学过双曲函数后：**回来完成[曲面面积：从列式到精确答案](#nonlinear-surfaces)。

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

把曲线的一小段看作短直线。它绕x轴转一周，会扫出一条很窄的曲面带；带的宽度沿着曲线量，也就是小弧长，而不是水平宽度。小段足够短时，半径几乎不变，所以小带的面积约为“周长×小弧长”。把小带不断分细再相加，就得到下面的积分。

本节的生成曲线均满足 $y\ge0$，所以半径就是 $y$，周长就是 $2\pi y$。再乘上前面用过的小弧长 $\mathrm ds$：

$$r=y,\qquad S=\int 2\pi y\,\mathrm ds.$$

**直角坐标形式:**

$$S=2\pi\int_a^b y\sqrt{1+\left(\frac{\mathrm dy}{\mathrm dx}\right)^2}\,\mathrm dx,\qquad y\ge0.$$

**参数形式:**

$$S=2\pi\int_\alpha^\beta y(t)\frac{\mathrm ds}{\mathrm dt}\,\mathrm dt,\qquad y(t)\ge0.$$

直角坐标式代入直角坐标的小弧长，参数式则要包含两个坐标的导数。两种公式都表示绕x轴完整旋转一周的曲面面积。

**列好积分后，检查三件事。**

- 在整个区间核对 $y\ge0$；本节直接使用这个非负高度作半径。
- 直角坐标用递增的x积分限，参数式用递增的t积分限；平方根因子是非负速率。
- 所选区间只生成目标曲面一次；不要反复描同一段，也不要额外乘一次旋转。

公式只算弯曲的表面，不自动加两端圆盘。只有题目要求整个立体的完整外表面时，才另算端盖。

## 例题 {#worked-examples}

<section class="worked-example" markdown="1">

### 例题 2 — 按题目区间化简根式 {#example-2--keep-the-absolute-value}

**Question:** Find the length of $y=\frac{x^2}{4}-\frac12\ln x$ for $1\le x\le2$.

先求斜率。平方根中的表达式可以写成完全平方：

$$\frac{\mathrm dy}{\mathrm dx}=\frac{x^2-1}{2x},\qquad
1+\left(\frac{\mathrm dy}{\mathrm dx}\right)^2=\frac{(x^2+1)^2}{4x^2}.$$

因此

$$\sqrt{1+\left(\frac{\mathrm dy}{\mathrm dx}\right)^2}
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

### 例题 5 — 参数曲线生成圆台 {#example-5--radius-absolute-value}

**Question:** Find the curved surface area generated when $x=t$, $y=t+1$, $0\le t\le2$, is revolved once about the x-axis. Exclude end caps.

区间上 $y=t+1\ge0$，所以半径就是 $t+1$。两个坐标的导数给出速率：

$$\frac{\mathrm dx}{\mathrm dt}=1,\qquad
\frac{\mathrm dy}{\mathrm dt}=1,\qquad
\frac{\mathrm ds}{\mathrm dt}=\sqrt2.$$

$$\begin{aligned}
S&=2\pi\sqrt2\int_0^2(t+1)\,\mathrm dt\\
&=2\pi\sqrt2\left[\frac{t^2}{2}+t\right]_0^2\\
&=2\pi\sqrt2[(2+2)-0]\\
&=\boxed{8\pi\sqrt2}.
\end{aligned}$$

这是一只圆台的侧面。两端圆盘没有计入。

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

每题先写出公式和积分限，再开始计算。先核对曲线高度非负，再检查速率与积分限。以下是自拟练习题，并非官方考试题；没有官方分值。

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

### Q5 — 从轴上起点到圆周 {#q5--surface-crosses-the-axis}

**Question:** Find the curved surface area generated when $y=x-2$, $2\le x\le4$, is revolved once about the x-axis. Exclude end caps.

<details markdown="1"><summary>提示</summary>

先核对曲线高度，再把半径与弧长因子相乘。

</details>

<details markdown="1"><summary>解答与检查</summary>

本区间有 $y=x-2\ge0$，半径是 $x-2$；斜率为1，弧长因子为 $\sqrt2$。

$$\begin{aligned}
S&=2\pi\sqrt2\int_2^4(x-2)\,\mathrm dx\\
&=2\pi\sqrt2\left[\frac{(x-2)^2}{2}\right]_2^4\\
&=2\pi\sqrt2(2-0)\\
&=\boxed{4\pi\sqrt2}.
\end{aligned}$$

</details>

</section>

<section class="lesson-check" markdown="1">

### Q6 — 半圆及其生成的曲面 {#q6--avoid-counting-the-same-surface-twice}

**Question:** The upper semicircle $x=\cos t$, $y=\sin t$, $0\le t\le\pi$, is revolved once about the x-axis. Find its arc length and the surface area generated. Identify the surface and explain whether any end disks are needed.

<details markdown="1"><summary>提示</summary>

参数覆盖的是上半圆；先分别写出弧长与面积积分。

</details>

<details markdown="1"><summary>解答与检查</summary>

这里 $\sin t\ge0$。先算半圆的弧长，再用曲线高度作为旋转半径：

$$\frac{\mathrm ds}{\mathrm dt}=\sqrt{\sin^2t+\cos^2t}=1,\qquad
L=\int_0^\pi1\,\mathrm dt=\pi.$$

$$\begin{aligned}
S&=2\pi\int_0^\pi\sin t\,\mathrm dt\\
&=2\pi[-\cos t]_0^\pi\\
&=2\pi(1+1)=\boxed{4\pi}.
\end{aligned}$$

上半圆完整生成一个单位球面。两个端点都在轴上，没有还需添加的圆盘；弧长与球面面积量的是不同对象。

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

## 曲面面积：把计算做完整 {#nonlinear-surfaces}

这一段放在学过[反双曲 cosh 及其分支](/zh/alevel/a2-further-mathematics/hyperbolic-functions/#inverse-cosh)和[它的导数](/zh/alevel/a2-further-mathematics/hyperbolic-functions/#inverse-derivatives)之后学习，还会用到[分部积分](/zh/alevel/a2-mathematics/integration/#integration-by-parts)。前面的弧长基础题不需要先学这些内容。

### 先分清每个因子在量什么 {#surface-plan}

曲线弯了以后，高度和斜率都可能变化。先别急着积分，先找三样东西：曲线到旋转轴的距离、**沿曲线走的一小段长度**，以及积分限用的是哪个变量。水平挪动的一小步，只是这一小段长度的一部分。

下面的示范把这三件事与积分连起来。看完后，再用参数形式自己完成一题，题目不会指定积分方法。

<section class="worked-example" markdown="1">

### 一道曲面面积题，从头做到尾 {#nonlinear-surface-example}

**Question (adapted):** The curve $C$ has equation $y=\cosh^{-1}x$, $1\le x\le2$. Find the exact curved surface area generated by one complete revolution about the x-axis. Exclude end caps.

这是根据 January 2026 FM03 Q5 制作的教学改编，把上端点从 3 改成了 2，不分配官方分值。这里的 $\cosh^{-1}x$ 表示反函数，不是 $\cosh x$ 的倒数。

**先找半径和小弧长。**所选的反 cosh 分支满足 $y\ge0$，所以半径就是 $y$。图中竖直的双向箭头量的是这个半径；加粗的曲线段是 $\mathrm ds$，水平虚线只是它的水平投影 $\mathrm dx$。

![生成曲线在x轴上方，从x=1到x=2；竖直箭头标出半径y，加粗曲线段标为ds，其较短的水平虚线投影标为dx。](/assets/img/further-nonlinear-surface-elements.svg){: width="420" height="300" }

在 $x>1$ 时，

$$\frac{\mathrm dy}{\mathrm dx}=\frac1{\sqrt{x^2-1}}.$$

因此，弧长因子为

$$\begin{aligned}
\sqrt{1+\left(\frac{\mathrm dy}{\mathrm dx}\right)^2}
&=\sqrt{1+\frac1{x^2-1}}\\
&=\sqrt{\frac{x^2}{x^2-1}}\\
&=\frac{x}{\sqrt{x^2-1}},\qquad x>1.
\end{aligned}$$

最后一步用到了 $x>0$：这里 $x^2$ 的正平方根就是正的 x。把圆周长乘上这个弧长因子：

$$S=2\pi\int_1^2\cosh^{-1}x\,\frac{x}{\sqrt{x^2-1}}\,\mathrm dx.$$

在 $x=1$ 处，导数没有定义。积分下端按 $x>1$ 一侧的极限理解；先找出原函数，最后再处理这个端点。

**接下来，选积分方法。**这里有两个能配合起来的部分。把 $\cosh^{-1}x$ 求导，会在分母出现一个根式；另一部分积分后，恰好得到相同的根式：

$$\frac{\mathrm d}{\mathrm dx}\sqrt{x^2-1}
=\frac{x}{\sqrt{x^2-1}}.$$

这样配对，剩下的积分会变简单，所以选择分部积分：

$$\begin{aligned}
u&=\cosh^{-1}x,\\
\mathrm dv&=\frac{x}{\sqrt{x^2-1}}\,\mathrm dx,\\
\mathrm du&=\frac1{\sqrt{x^2-1}}\,\mathrm dx,\\
v&=\sqrt{x^2-1}.
\end{aligned}$$

代入分部积分公式。剩下的积分中，上下两个根式正好约去：

$$\begin{aligned}
\int\cosh^{-1}x\,\frac{x}{\sqrt{x^2-1}}\,\mathrm dx
&=\sqrt{x^2-1}\cosh^{-1}x\\
&\quad-\int\frac{\sqrt{x^2-1}}{\sqrt{x^2-1}}\,\mathrm dx\\
&=\sqrt{x^2-1}\cosh^{-1}x-x+C.
\end{aligned}$$

**最后，分别计算上下端。**把不带任意常数的原函数记为

$$F(x)=\sqrt{x^2-1}\cosh^{-1}x-x.$$

上端用反 cosh 的对数形式。下端则看极限：乘积中的两个因子都趋于零。

$$\begin{aligned}
F(2)&=\sqrt3\ln(2+\sqrt3)-2,\\
\lim_{x\to1^+}F(x)&=0-1=-1.
\end{aligned}$$

所以

$$\begin{aligned}
S&=2\pi\left[\sqrt3\ln(2+\sqrt3)-2-(-1)\right]\\
&=\boxed{2\pi\left[\sqrt3\ln(2+\sqrt3)-1\right]}.
\end{aligned}$$

回头检查整条推理：把 $F$ 求导，会回到被积函数；半径和面积都非负。每个 x 只对应一个半径，因此这一支不会把同一块曲面生成两次。我们也没有加上两端圆盘。

</section>

<section class="lesson-check" markdown="1">

### 换一种表示，自己来 {#nonlinear-surface-task}

**Question:** A curve is given by $x=\cosh t$, $y=t$, $0\le t\le\ln2$. Find its exact arc length and the exact curved surface area generated by one complete revolution about the x-axis. Exclude end caps. Explain why $t=0$ is allowed even though $\mathrm dy/\mathrm dx$ has no finite value there.

这是自拟题。先写好自己的列式和积分方法，再打开帮助。

<details markdown="1">
<summary>提示</summary>

两个坐标都要求导。用双曲恒等式化简正平方根，再判断求面积时还需要乘什么。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$\begin{aligned}
\frac{\mathrm dx}{\mathrm dt}&=\sinh t,\qquad
\frac{\mathrm dy}{\mathrm dt}=1,\\
\frac{\mathrm ds}{\mathrm dt}&=\sqrt{\sinh^2t+1}=\cosh t.
\end{aligned}$$

最后一步用到了 cosh 恒为正。因此

$$L=\int_0^{\ln2}\cosh t\,\mathrm dt
=[\sinh t]_0^{\ln2}=\frac34.$$

半径为 $t\ge0$，所以面积还需要另一个因子：

$$S=2\pi\int_0^{\ln2}t\cosh t\,\mathrm dt.$$

取 $u=t$、$\mathrm dv=\cosh t\,\mathrm dt$ 做分部积分，则 $\mathrm du=\mathrm dt$、$v=\sinh t$：

$$\int t\cosh t\,\mathrm dt
=t\sinh t-\int\sinh t\,\mathrm dt
=t\sinh t-\cosh t+C.$$

由指数定义可得

$$\sinh(\ln2)=\frac34,\qquad\cosh(\ln2)=\frac54.$$

所以

$$\begin{aligned}
S&=2\pi\left[t\sinh t-\cosh t\right]_0^{\ln2}\\
&=2\pi\left[\frac34\ln2-\frac54-(0-1)\right]\\
&=\boxed{\frac\pi2(3\ln2-1)}.
\end{aligned}$$

在 $t=0$ 时，两个坐标的导数分别为 $0$ 和 $1$，所以速率是 $1$，既不是零，也不是无穷大，参数形式的弧长微元可以正常使用。商 $\mathrm dy/\mathrm dx=1/\sinh t$ 在这里没有有限值，只说明不能在这个端点使用该直角坐标导数，并不表示曲线不能包含这个点。

若弧长和面积用了同一个被积函数，回看[半径与小弧长](#surface-plan)。若几何列式正确，却停在积分处，回看[为什么选分部积分](#nonlinear-surface-example)。然后收起解答，独立做下面的新题。

</details>

</section>

<section class="lesson-check" markdown="1">

### 换个参数，再试一次 {#nonlinear-surface-retry}

**Question:** A curve is given by $x=\cosh(2t)$, $y=2t$, $0\le t\le\frac12\ln3$. Find the exact curved surface area generated by one complete revolution about the x-axis. State the radius and explain why the chosen interval generates the surface once. Exclude end caps.

<details markdown="1"><summary>提示</summary>

这是自拟重试题。先自己写两个坐标的导数，检查它们是否都出现了，再考虑积分。

</details>

<details markdown="1"><summary>解答与检查</summary>

半径为 $2t\ge0$。两个坐标都要对t求导：

$$\frac{\mathrm dx}{\mathrm dt}=2\sinh(2t),\qquad
\frac{\mathrm dy}{\mathrm dt}=2,\qquad
\frac{\mathrm ds}{\mathrm dt}
=\sqrt{4\sinh^2(2t)+4}=2\cosh(2t).$$

$$S=2\pi\int_0^{\frac12\ln3}(2t)(2\cosh(2t))\,\mathrm dt.$$

取 $u=2t$，则 $\mathrm du=2\,\mathrm dt$，新限是0与 $\ln3$：

$$\begin{aligned}
S&=2\pi\int_0^{\ln3}u\cosh u\,\mathrm du\\
&=2\pi[u\sinh u-\cosh u]_0^{\ln3}\\
&=2\pi\left[\frac43\ln3-\frac53-(0-1)\right]\\
&=\boxed{\frac{4\pi}{3}(2\ln3-1)}.
\end{aligned}$$

在 $t>0$ 时，x持续增大，各圆形截面只生成一次。端点速率仍为2，曲线可包含该端点。若漏掉导数中的2，先回看[参数弧长](#parametric-arc-length)；若积分选法卡住，回看[完整示范](#nonlinear-surface-example)，然后收起答案重新列式。

</details>

</section>

### 学过另一个主题后，再回来 {#nonlinear-surface-later-review}

下面是自拟题。稍后回来时，关闭前面的例题和解答，根据这一次的被积函数选择方法。

<section class="lesson-check" markdown="1">

#### 一道新问题 {#nonlinear-surface-later}

**Question:** Find the exact curved surface area generated when $y=x^3/3$, $0\le x\le1$, is revolved once about the x-axis. Exclude end caps and explain your integration choice.

<details markdown="1">
<summary>提示</summary>

先建立半径和弧长因子，再观察根式里面的式子及其导数。

</details>

<details markdown="1">
<summary>解答与回补</summary>

这里半径为 $x^3/3\ge0$，斜率为 $x^2$。所以

$$S=\frac{2\pi}{3}\int_0^1x^3\sqrt{1+x^4}\,\mathrm dx.$$

取 $u=1+x^4$，则 $\mathrm du=4x^3\,\mathrm dx$，积分限变为 $1$ 和 $2$：

$$\begin{aligned}
S&=\frac\pi6\int_1^2u^{1/2}\,\mathrm du\\
&=\frac\pi6\left[\frac23u^{3/2}\right]_1^2\\
&=\boxed{\frac\pi9(2\sqrt2-1)}.
\end{aligned}$$

这个换元把外面剩余的 x 的幂一起换掉了。前面的例题适合分部积分，这一次的被积函数则提供了另一种有用的结构。换元卡住时，回补[变量与积分限的转换](/zh/alevel/a2-mathematics/integration/#substitution)，再关上本题解答解释自己的列式。

</details>

</section>

## 快速参考 {#quick-reference}

| 任务 | 公式或第一步 | 检查 |
|---|---|---|
| 直角坐标弧长 | $\displaystyle L=\int_a^b\sqrt{1+\left(\frac{\mathrm dy}{\mathrm dx}\right)^2}\,\mathrm dx$ | 积分限是 x 值；使用 $a\le b$ |
| 参数弧长 | $\displaystyle L=\int_\alpha^\beta\sqrt{\left(\frac{\mathrm dx}{\mathrm dt}\right)^2+\left(\frac{\mathrm dy}{\mathrm dt}\right)^2}\,\mathrm dt$ | 包含两个导数并使用递增的 t 积分限 |
| 直角坐标曲线绕 x 轴旋转 | $\displaystyle S=2\pi\int_a^b y\sqrt{1+\left(\frac{\mathrm dy}{\mathrm dx}\right)^2}\,\mathrm dx$ | 本节 $y\ge0$，半径是 $y$ |
| 参数曲线绕 x 轴旋转 | $\displaystyle S=2\pi\int_\alpha^\beta y\sqrt{\left(\frac{\mathrm dx}{\mathrm dt}\right)^2+\left(\frac{\mathrm dy}{\mathrm dt}\right)^2}\,\mathrm dt$ | 本节 $y\ge0$；速率非负 |
| 化简平方根 | 若 $g\ge0$，则 $\sqrt{g^2}=g$ | 先用题目区间确认符号 |
| 参数或曲面部分重复 | 选择只覆盖目标对象一次的积分区间 | 区分重复描曲线与旋转后曲面重叠 |
{: .wide-table}

**练习后：**如果弧长公式用错，重做第1–3题。如果把半径和弧长因子混淆，重做第4–5题。球面与弧长分不清时，复习第6题；组合两个公式时，再做第7题。

**你应当能够：**计算直角坐标与参数形式下的弧长；在 $y\ge0$ 的本节曲线中用 $y$ 作半径，区分曲面与端盖。

## 来源与范围 {#sources}

本轮范围核对：2026-10-23，从当前 9665 资格页打开大纲，核对正文 v5.2 及本课条目；没有迁移至 9765。下列试卷／评分材料仅重新读取所注明题目与配套评分部分的 PDF 文本，未完成原卷图像的视觉核验。官方题身份与分值保留，改编与自拟任务不称官方题。

本课依据 [OxfordAQA Further Mathematics 9665 课程大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf)中 FP2.8（印刷页码第 18 页）的要求：掌握直角坐标或参数形式下的弧长与旋转曲面面积。例题 3 改编自官方样题；练习题为自拟题，没有官方分值。

[OxfordAQA Specimen 2018, Q11, QP PDF p. 18](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9665-FM03-international-a-level-further-mathematics-specimen-paper-2019-v3.pdf#page=18); [MS Q11, PDF p. 14](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9665-FM03-international-a-level-further-mathematics-mark-scheme-2016-v1.pdf#page=14). 本轮重新读取对应题干及评分材料（2026-10-23，PDF 文本）；只借用已注明的方法，不把改编题或新增自拟任务称为原题。

非线性曲面样段改编自 [January 2026 FM03 Q5，QP 第 8–9 页](https://drive.google.com/file/d/1-_yFvduaO6Eg5a_kKpJvC63OdJMDvvQp/view)，并对照[配套 MS 第 8–9 页，Version 1.0 Final](https://drive.google.com/file/d/1wp5xXrzRjW3q3TgYkzf3FkbHhNDUsO0D/view)。2026-10-29 重新阅读这些部分，并目视核对 QP 第 8 页、MS 第 9 页。改编题改变了上端点；后面的题目和图均为自拟，不分配官方分值。

教材对照：Oxford University Press（2017），International A Level Further Mathematics with Mechanics，23.2节，印刷页285–287（所提供PDF页289–291）。本节按该处的公式和练习条件使用 $y\ge0$ 的生成曲线；新增例题仍标为改编或自拟。

**学习路径：**[上一节：反三角函数的微积分](/zh/alevel/a2-further-mathematics/inverse-trigonometric-functions/) · [下一节：双曲函数](/zh/alevel/a2-further-mathematics/hyperbolic-functions/) · [返回高等纯数学课程](/zh/alevel/a2-further-mathematics/)
