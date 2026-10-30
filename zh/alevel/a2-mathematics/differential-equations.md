---
title: 微分方程
layout: subjects
mathjax: true
grade: a2
subject: a2-mathematics
lang: zh-CN
translation_of: /alevel/a2-mathematics/differential-equations/
permalink: /zh/alevel/a2-mathematics/differential-equations/
toc_headings: h2, h3
reading_layout: true
study_page: true
---

[纯数学](/zh/alevel/a2-mathematics/) · P2.8 微分方程（differential equations）

<div class="lesson-lead" markdown="1">

知道水深增加得多快，还不能直接知道过一段时间后的水深。微分方程给出变化快慢的规律；我们要从这个规律求出描述水深等量的函数，再用已知数值选出符合题意的函数。本页保留英文题干，用中文解释推理。

</div>

- **学习：**先学习[从变化规律求函数](#separable-variables)，再学习[利用已知条件](#using-a-given-condition)和[建立模型](#forming-a-model)。
- **作业帮助：**确认哪个变量在变化、变化率与什么成正比，以及该量是在增加还是减少。
- **复习：**先尝试[练习](#practice)，再打开提示和解答。

<div class="lesson-notes" markdown="1">

教材：第 7 章第 7.1–7.2 节（印刷版第 104–112 页）。积分常数记作 $C$，也称任意常数（arbitrary constant）。整理结果后，也可以用 $A$ 表示新的任意常数。

**从这里开始：**先学习如何将两个变量分到两个积分中，再用条件选择一条解；建模从变化率的含义开始。需要会[幂函数积分](/zh/alevel/a2-mathematics/integration/#power-integrals)、[指数与对数积分](/zh/alevel/a2-mathematics/integration/#exponential-logarithmic-integrals)及[链式求导检查](/zh/alevel/a2-mathematics/differentiation/#composite-functions)。例题 3 需会[部分分式分解](/zh/alevel/a2-mathematics/partial-fractions/#method)。复习可先做[练习](#practice)；在学完数值方法后，回到[稍后回顾](#later-review)，记录是否使用了帮助。

本页所有例题、数据情境与练习均为自拟，并非官方真题或实测数据；题目没有官方分值。提示与解答分别默认关闭。

</div>

## 从变化规律求函数 {#separable-variables}

$y$ 表示某个量有多少，$\frac{dy}{dx}$ 表示它随 $x$ 变化得多快。把两者联系起来的方程叫微分方程（differential equation）。本页只出现一阶导数，没有二阶或更高阶导数，因此称为一阶（first order）。

先看例题 1：变化率是 $2xy$。右边是含 $x$ 的部分乘以 $y$。除以 $y$ 后，就能把两个变量分别整理到两边，再积分。这种做法叫分离变量（separation of variables）。只有 $y\ne0$ 才能这样除，因此还要单独检查 $y=0$ 是否是原方程的解。

接着求两个积分。**只需要一个积分常数：**即使两边各有一个常数，也可以相减后统一记作 $C$。

1. 检查能否分离变量。
2. 除以关于 $y$ 的函数之前，先检查令该函数为零是否会得到常数解（constant solution）。
3. 分离变量并积分，在一侧加上 $+C$。
4. 使用题目给出的条件求出常数。
5. 把结果代回原微分方程，并检查给定条件。

还不知道曲线上某个点时，常数可以取不同数值，得到不同的解；这些解合起来叫通解（general solution）。知道一个点后，就可以求出常数，选出特解（particular solution）。如果给的是起始数值，常常是时间 $t=0$ 时的数值，就称为初始条件（initial condition）。

<section class="worked-example" markdown="1">

### 例题 1 — 含对数的通解 {#example-1--a-general-solution-with-a-logarithm}

**Question:** Solve $\displaystyle\frac{dy}{dx}=2xy$.

右边是含 $x$ 的部分乘以 $y$。要把含 $y$ 的部分放在左边，先除以 $y$；这样暂时排除了零，稍后必须单独检查。当 $y\ne0$ 时：

$$\frac1y\frac{dy}{dx}=2x.$$

为什么左边可以改成对 $y$ 积分？回想换元积分：$\frac{dy}{dx}$ 这个因子说明 $y$ 怎样随 $x$ 变化。也可以用链式法则检查：左边正是 $\ln\lvert y\rvert$ 对 $x$ 的导数。因此，两边积分可以写成

$$\int\frac1y\,dy=\int2x\,dx.$$

$$\ln\lvert y\rvert=x^2+C.$$

左边积分得到对数，右边用幂函数积分。要还原 $y$，两边取以 $e$ 为底的指数，得到 $\lvert y\rvert=e^Ce^{x^2}$。指数中的加法变成了乘法。常数 $e^C$ 为正，再允许 $y$ 取正或负，把符号和大小合并记作新的常数 $A$：

$$\boxed{y=Ae^{x^2}}.$$

通过除法得到的解中，$A\ne0$。还要在原方程中单独检查 $y=0$：它也是一个解。因此，只要允许 $A$ 取任意实数（包括零），上面的解族就包含所有这些解。

**检查：**$\frac{dy}{dx}=2xAe^{x^2}=2xy$。

**常见错误：**写成 $y=e^{x^2}+C$。对数中的常数在取指数后会变成乘法常数。

</section>

### 把同一方法用于其他方程 {#separation-why-it-works}

看懂例题后，再把方法写成一般形式。如果右边是 $f(x)g(y)$，前一个因子只随 $x$ 变化，后一个只随 $y$ 变化：

$$\frac{dy}{dx}=f(x)g(y).$$

当 $g(y)\ne0$ 时，除以它，再把两个积分分开：

$$\int\frac{1}{g(y)}\,dy=\int f(x)\,dx.$$

依据仍是例题 1 中倒过来使用的链式法则。把 $1/g(y)$ 的一个原函数叫作 $G(y)$，也就是说 $G^{\prime}(y)=1/g(y)$。由于 $y$ 随 $x$ 变化，链式法则给出

$$\frac{d}{dx}G(y(x))=\frac1{g(y)}\frac{dy}{dx}=f(x).$$

两边对 $x$ 积分，就得到分开的两个积分和一个常数。在例题 1 中，$g(y)=y$，而 $G(y)=\ln\lvert y\rvert$。除法前，始终要把令 $g(y)$ 为零的数值代回原方程检查：它们可能给出常数解，直接除掉会漏解。

## 利用已知条件 {#using-a-given-condition}

已知一个点，就同时知道一个 $x$ 值和一个 $y$ 值。把两个数都代入积分后的等式，求出 $C$。如果解出 $y$ 时有正、负两种选择，就用已知的 $y$ 值判断。还要检查原方程允许哪些取值：分母不能为零，实数对数里的数必须为正。

<section class="worked-example" markdown="1">

### 例题 2 — 选择正确的平方根 {#example-2--choose-the-correct-square-root}

**Question:** Solve $\displaystyle\frac{dy}{dx}=\frac{x}{y}$, given $y=2$ when $x=0$.

这里 $y$ 在分母上，所以不能为零。两边乘以 $y$，使左边积分只含 $y$，右边只含 $x$：

$$\int y\,dy=\int x\,dx,$$

$$\frac{y^2}{2}=\frac{x^2}{2}+C.$$

把 $(0,2)$ 的两个坐标都代入：左边为 $2$，含 $x$ 的项为零，所以 $2=C$。因此 $y^2=x^2+4$。起始时 $y$ 为正，选正平方根。解不能中途改选负平方根，因为那需要先经过零，而原方程不允许 $y$ 为零：

$$\boxed{y=\sqrt{x^2+4}}.$$

**检查：**$\frac{dy}{dx}=\frac{x}{\sqrt{x^2+4}}=\frac{x}{y}$，且 $y(0)=2$。此解永远不会取到零，对所有实数 $x$ 都有定义。

**常见错误：**仍然保留正、负两种答案。把起始值分别代入检查，只有正平方根符合题意。

</section>

<section class="worked-example" markdown="1">

### 例题 3 — 除法前检查常数解 {#example-3--check-constant-solutions-before-dividing}

**Question:** Solve $\displaystyle\frac{dy}{dx}=y(y-2)$, given $y=1$ when $x=0$.

除以 $y(y-2)$ 前，先问哪些数会使这个除数为零。若 $y$ 始终为零或始终为二，导数为零，右边也为零，所以两者都是原微分方程的解；但它们都不经过题目给定的点。

对所需的非恒定解，

$$\int\frac{1}{y(y-2)}\,dy=\int1\,dx.$$

分母是两个因子的乘积，不能直接当成一个对数积分。先拆成两个较简单、可以积分的分式：

$$\frac{1}{y(y-2)}=-\frac{1}{2y}+\frac{1}{2(y-2)}.$$

$$-\frac12\ln\lvert y\rvert+\frac12\ln\lvert y-2\rvert=x+C.$$

在 $(0,1)$ 处，两个对数都为零，所以 $C=0$。因此

$$\ln\left\lvert\frac{y-2}{y}\right\rvert=2x.$$

取指数后只知道这个比值的大小，还需要判断正负。起始点处比值为负；在包含该点、且分离后的等式成立的一段范围内，比值不能经过零，也不能出现分母为零，所以保持负号。于是取

$$\frac{y-2}{y}=-e^{2x},\qquad \boxed{y=\frac{2}{1+e^{2x}}}.$$

**检查：**令 $E=e^{2x}$，导数为 $-\frac{4E}{(1+E)^2}$。同时，

$$y(y-2)=\frac{2}{1+E}\left(\frac{2}{1+E}-2\right)=-\frac{4E}{(1+E)^2}.$$

给定条件得到 $y(0)=1$。对所有实数 $x$，都有 $0<y<2$，所以刚才除掉的两个因子都不为零。

**常见错误：**没有检查符号，就把 $e^{2x}$ 当成该比值。两边取以 $e$ 为底的指数后，得到的是这个比值的绝对值。

</section>

## 建立模型 {#forming-a-model}

先问三个问题：什么量在变？它随什么变化？它在增加还是减少？正在变化的量叫因变量，用来追踪变化的变量叫自变量。

“变化率与某个量成正比”是说，变化率除以那个量，得到一个固定的数；它叫比例常数（constant of proportion）。后来积分时出现的常数有另一个作用：让求出的函数符合已知数值。

下表中 $Q>0$ 且 $k>0$。符号已明确写出。

| 描述 | 微分方程 |
|---|---|
| $Q$ 以与 $Q$ 成正比的速率增加 | $\displaystyle\frac{dQ}{dt}=kQ$ |
| $Q$ 以与 $Q$ 成正比的速率减少 | $\displaystyle\frac{dQ}{dt}=-kQ$ |
| $Q$ 以与 $Q$ 成反比的速率增加 | $\displaystyle\frac{dQ}{dt}=\frac{k}{Q}$ |
| $Q$ 以与 $Q^2$ 成正比的速率减少 | $\displaystyle\frac{dQ}{dt}=-kQ^2$ |

自变量不一定是时间。例如，长度 $l$ 随温度 $\theta$ 变化时，使用 $\frac{dl}{d\theta}$。

有时变化快慢取决于这个量离某个固定数值还有多远，而不是这个量本身。使变化率为零的数值叫平衡值（equilibrium）。若变化率与 $Q-Q_e$ 成正比，设 $U=Q-Q_e$（$Q_e$ 为常数），于是 $dU/dt=dQ/dt$，便可对 $U$ 分离变量并积分。选择正负号时，问 $Q$ 是靠近这个固定数值，还是远离它。

**按顺序使用给定信息。**已知某一数值处的变化率，可以直接求出 $k$。起始值用于求积分常数。之后再用另一个时刻的数值求 $k$。

<section class="worked-example" markdown="1">

### 例题 4 — 反比例关系 {#example-4--inverse-proportion}

**Question:** The depth $h$ metres of water increases at a rate inversely proportional to $h$. At time $t=0$, $h=1$. After $3$ minutes, $h=2$. Form and solve a differential equation for $h$.

“与水深成反比”表示把 $h$ 放在分母：水越深，增加得越慢。水深在增加，变化率为正，因此取 $k>0$。两边乘以 $h$，分开变量再积分：

$$\frac{dh}{dt}=\frac{k}{h},\qquad \int h\,dh=\int k\,dt.$$

$$\frac{h^2}{2}=kt+C.$$

起始水深先确定积分常数：$t=0$、$h=1$ 给出 $C=\frac12$。再用后来的水深确定速率中的常数：$t=3$、$h=2$ 给出 $2=3k+\frac12$，因此 $k=\frac12$。

$$\boxed{h=\sqrt{t+1}\text{ metres},\quad t\ge0}.$$

**检查：**$\frac{dh}{dt}=\frac{1}{2\sqrt{t+1}}=\frac{k}{h}$，并且 $h(0)=1$、$h(3)=2$。水深为正，因此选正平方根。

水深在增加，但随着 $h$ 增大，增加速率会变小。不能因为某个量在增加，就认为它的变化率恒定。

这里 $k$ 的单位是 $\mathrm{m^2\,min^{-1}}$。$t\ge0$ 是所给初值以后的数学范围；物理预测还要求水深为正、注水规律不变且未溢出。题目没有给水箱边缘高度，因此不能声称模型可无限期描述真实水箱。

</section>

<section class="worked-example" markdown="1">

### 用一次速率确定常数 {#example-rate}

**Question:** A controlled drain removes water from a tank with no inflow. The rate of decrease of the positive volume $V$ litres is proportional to $V^2$. When $V=3$, the outflow is $3$ litres per minute. Initially $V=6$. Form and solve a model for $t\ge0$, where $t$ is in minutes. Explain whether the model reaches zero in finite time.

“减少”先决定负号。出流量是正的 $3$，但体积变化率为 $-3$：

$$\frac{dV}{dt}=-kV^2,\qquad k>0,\qquad -3=-k(3)^2\ \Longrightarrow\ k=\frac13.$$

比例常数单位为 $\mathrm{L^{-1}\,min^{-1}}$。初始体积不是速率，不能把 $V(0)=6$ 直接当 $k$。先求积分结果：

$$\int V^{-2}\,dV=\int-\frac13\,dt,\qquad -\frac1V=-\frac t3+C.$$

初值给出 $C=-1/6$，于是

$$\frac1V=\frac t3+\frac16,\qquad V=\frac6{2t+1}\ \mathrm{litres},\quad t\ge0.$$

求导得 $V^{\prime}=-12/(2t+1)^2=-V^2/3$。当 $V=3$ 时 $t=1/2$，速率确为 $-3$；$V(0)=6$ 也成立。对于 $t\ge0$，$0<V\le6$ 且不断减小，所以量与方向可实现；模型只在受控排水规律持续成立时适用。它只趋向零，不在有限时间达到零。$V=0$ 也是原模型的平衡解，但不满足给定初值。

</section>

## 指数增长与衰减（exponential growth and decay） {#natural-growth-and-decay}

对于初始值为 $Q_0$ 的正量，与自身成正比的增长可表示为

$$\frac{dQ}{dt}=kQ\quad\Longrightarrow\quad Q=Q_0e^{kt},\quad k>0.$$

与自身成正比的衰减可表示为

$$\frac{dQ}{dt}=-kQ\quad\Longrightarrow\quad Q=Q_0e^{-kt},\quad k>0.$$

这两个公式都来自例题 1 的步骤：先分离变量，对 $\frac1Q$ 积分得到 $\ln Q$。这里 $Q$ 为正，因此对数不需要绝对值符号。起始值决定前面的乘数，指数中的正负决定增长还是衰减。

<section class="worked-example" markdown="1">

### 例题 5 — 根据后续数值求增长常数 {#example-5--find-the-growth-constant-from-a-later-value}

**Question:** A culture initially contains $400$ cells. Its rate of increase is proportional to the number $N$ present. The number doubles in $3$ hours. Find $N$ at time $t$ hours, and find when it first reaches $1200$.

变化率取决于现在有多少细胞，所以右边用 $N$。数量在增长，变化率为正：$\frac{dN}{dt}=kN$，其中 $k>0$。除以 $N$ 分开变量，再积分：

$$\int\frac1N\,dN=\int k\,dt,\qquad \ln N=kt+C.$$

使用 $N(0)=400$：得到 $C=\ln400$。所以 $N=400e^{kt}$。

由于 $N(3)=800$，$e^{3k}=2$，因此 $k=\frac{\ln2}{3}$，单位为每小时。

$$\boxed{N=400e^{(\ln2)t/3}}.$$

当 $N=1200$ 时，$e^{kt}=3$，所以

$$\boxed{t=\frac{3\ln3}{\ln2}\approx4.75\text{ hours}}.$$

**检查：**数量为 $800$ 对应 $3$ 小时后，为 $1600$ 对应 $6$ 小时后。在这两个时刻之间达到 $1200$，符合预期。

该模型假设相同比例增长规律持续成立，没有考虑营养或空间不足；$t\ge0$，$k$ 的单位为 $\mathrm{h^{-1}}$。连续模型把较大的细胞数量视为连续量，不描述每个细胞的离散分裂。

</section>

<section class="worked-example" markdown="1">

### 例题 6 — 半衰期（half-life）与剩余质量 {#example-6--half-life-and-mass-remaining}

**Question:** A sample has mass $80$ g initially and decays at a rate proportional to its remaining mass $m$. Its half-life is $6$ hours. Find $m$ at time $t$ hours and the mass remaining after $18$ hours.

变化率取决于还剩多少质量，不是已经减少了多少。剩余质量在减少，导数为负：$\frac{dm}{dt}=-km$，其中 $k>0$。除以 $m$ 分开变量，再积分：

$$\int\frac1m\,dm=\int-k\,dt,\qquad \ln m=-kt+C.$$

初始条件给出 $C=\ln80$，所以 $m=80e^{-kt}$。半衰期意味着 $m(6)=40$：

$$e^{-6k}=\frac12,\qquad k=\frac{\ln2}{6}.$$

$$\boxed{m=80e^{-(\ln2)t/6}\text{ g}}.$$

经过 $18$ 小时，已经经历了三个半衰期：

$$m(18)=80\left(\frac12\right)^3=\boxed{10\text{ g}}.$$

**检查：**$\frac{dm}{dt}=-km<0$（当 $m>0$ 时）。质量每经过 $6$ 小时就减半。 此处 $t\ge0$、$m>0$，$k$ 的单位为 $\mathrm{h^{-1}}$；模型假定相同衰减规律持续成立。

若指数衰减模型写成 $Q=Q_0e^{-kt}$ 且 $k>0$，则半衰期为

$$\boxed{T=\frac{\ln2}{k}}.$$

**常见错误：**把剩余质量和减少的质量混淆。这里 $18$ 小时后减少的质量为 $80-10=70$ g。

</section>

## 练习 {#practice}

**独立练习 · 25–35 分钟**

写出分离变量后的积分式；使用条件前先保留任意常数；最后把答案代回原方程检查。建立模型时，要说明每个变量的含义，并保持单位一致。

<section class="lesson-check" markdown="1">

### 题目 1 {#q1--general-and-particular-solutions}

Solve $\displaystyle\frac{dy}{dx}=3x^2(y+2)$, then find the solution satisfying $y=1$ when $x=0$. Check any constant solution lost by division.

<details markdown="1">
<summary>提示</summary>

对 $\frac{1}{y+2}$ 关于 $y$ 积分。除法前先检查 $y=-2$。

</details>

<details markdown="1">
<summary>解答与检查</summary>

当 $y\ne-2$ 时，

$$\int\frac1{y+2}\,dy=\int3x^2\,dx,$$

$$\ln\lvert y+2\rvert=x^3+C.$$

因此，$y=Ae^{x^3}-2$，其中 $A$ 非零。常数解 $y=-2$ 满足原方程；允许 $A=0$ 就能把它包含在这个解族中。

给定条件得到 $A=3$：

$$\boxed{y=3e^{x^3}-2}.$$

它的导数为 $9x^2e^{x^3}=3x^2(y+2)$，并且 $y(0)=1$。

</details>

</section>

<section class="lesson-check" markdown="1">

### 题目 2 {#q2--choose-the-branch}

Solve $\displaystyle\frac{dy}{dx}=\frac{\sin x}{y}$, given $y=-2$ when $x=0$.

<details markdown="1">
<summary>提示</summary>

左侧对 $y$ 积分。由于起始值为负，要选负的平方根。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$\int y\,dy=\int\sin x\,dx,\qquad \frac{y^2}{2}=-\cos x+C.$$

给定条件得到 $2=-1+C$，所以 $C=3$，因此

$$\boxed{y=-\sqrt{6-2\cos x}}.$$

根号内的表达式至少为 $4$，所以 $y$ 不会取到零。求导得到 $-\frac{\sin x}{\sqrt{6-2\cos x}}=\frac{\sin x}{y}$，且 $y(0)=-2$。

</details>

</section>

<section class="lesson-check" markdown="1">

### 题目 3 {#q3--form-equations-from-words}

Form, but do not solve, a differential equation for each statement. Use a positive constant $k$ and assume the quantities are positive.

**(a)** The mass $m$ decreases at a rate proportional to $m^2$, with respect to time $t$.

**(b)** The height $h$ increases at a rate inversely proportional to $h^3$, with respect to time $t$.

**(c)** The length $l$ increases at a rate proportional to $l$, with respect to temperature $\theta$.

<details markdown="1">
<summary>提示</summary>

根据题目指定的自变量写出导数。反比例表示该量出现在分母中；减少则需要负号。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$\text{(a)}\quad\frac{dm}{dt}=-km^2.$$

$$\text{(b)}\quad\frac{dh}{dt}=\frac{k}{h^3}.$$

$$\text{(c)}\quad\frac{dl}{d\theta}=kl.$$

符号与变化方向一致。各小题使用各自的比例常数；都写作同一个字母，不代表它们的数值或单位相同。

</details>

</section>

<section class="lesson-check" markdown="1">

### 题目 4 {#q4--a-rate-determines-the-model-constant}

The positive height $h$ metres of a pile increases at a rate inversely proportional to $h^3$. When $h=2$, the rate is $\frac14$ metres per minute. Initially $h=1$. Find $h$ at time $t$ minutes and when it reaches $3$ metres. State the units of the model constant and explain one limitation on extrapolating the model.

<details markdown="1">
<summary>提示</summary>

先用 $\frac14=\frac{k}{2^3}$ 求出 $k$。然后对 $h^3$ 积分，并使用起始高度。

</details>

<details markdown="1">
<summary>解答与检查</summary>

模型为 $\frac{dh}{dt}=\frac{k}{h^3}$；给定变化率给出 $k=2$。

$$\int h^3\,dh=\int2\,dt,\qquad \frac{h^4}{4}=2t+C.$$

当 $t=0$ 时，$C=\frac14$。因此

$$\boxed{h=(8t+1)^{1/4}\text{ metres},\quad t\ge0}.$$

当 $h=3$ 时，$81=8t+1$，所以 $\boxed{t=10\text{ minutes}}$。

求导得到 $2(8t+1)^{-3/4}=\frac{2}{h^3}$。该解还满足 $h(0)=1$，并且在 $h=2$ 时给出题目所述的变化率。

$k$ 的单位为 $\mathrm{m^4\,min^{-1}}$。在 $t\ge0$ 上高度为正、递增，而速率递减；继续预测还要求材料供应和堆积几何不破坏给定比例规律。

</details>

</section>

<section class="lesson-check" markdown="1">

### 题目 5 {#q5--percentage-growth}

A culture grows at a rate proportional to the number $N$ present. Initially $N=500$. After $4$ hours, the number has increased by $20\%$. Find $N$ at time $t$ hours and the doubling time.

<details markdown="1">
<summary>提示</summary>

增加 $20\%$ 表示 $N(4)=600$，不是 $100$。使用初始条件后，再代入这个数值。

</details>

<details markdown="1">
<summary>解答与检查</summary>

由 $\frac{dN}{dt}=kN$ 和 $N(0)=500$，分离变量得 $N=500e^{kt}$。现在 $600=500e^{4k}$，所以 $k=\frac{\ln1.2}{4}$。

$$\boxed{N=500e^{(\ln1.2)t/4}}.$$

数量翻倍时 $e^{kt}=2$：

$$\boxed{t=\frac{4\ln2}{\ln1.2}\approx15.2\text{ hours}}.$$

代入可得 $N(4)=600$。增长 $20\%$ 需要 $4$ 小时，因此翻倍所需时间应当大于 $4$ 小时。

</details>

</section>

<section class="lesson-check" markdown="1">

### 题目 6 {#q6--decay-half-life-and-the-amount-lost}

A substance decays at a rate proportional to its remaining mass. Initially the mass is $60$ g. After $5$ hours, $45$ g remains. Find **(a)** a model for the remaining mass, **(b)** its half-life and **(c)** the mass lost after $10$ hours.

<details markdown="1">
<summary>提示</summary>

使用 $m=60e^{-kt}$，其中 $k>0$。$5$ 小时后剩余比例为 $\frac34$。(c) 中要用 $60$ 减去剩余质量。

</details>

<details markdown="1">
<summary>解答与检查</summary>

**(a)** 由 $45=60e^{-5k}$，

$$k=\frac{\ln(4/3)}5,\qquad \boxed{m=60e^{-[\ln(4/3)]t/5}\text{ g}}.$$

**(b)** 半衰期为

$$\boxed{T=\frac{5\ln2}{\ln(4/3)}\approx12.0\text{ hours}}.$$

**(c)** 经过两个 $5$ 小时区间后，剩余质量为 $60(\frac34)^2=33.75$ g。减少的质量为

$$\boxed{60-33.75=26.25\text{ g}}.$$

模型给出 $m(0)=60$ 和 $m(5)=45$。由于 $5$ 小时后剩余质量超过一半，半衰期应长于 $5$ 小时。

</details>

</section>

## 修复后再试 {#repair-and-retry}

先对照错误类型回看关键推理，再收起旧解答，完成这里的新问题。把首次作答、用过的提示与重试结果分别记下。

**若除法丢掉了始终不变的解，或用了起始值后仍保留正负两个答案：**回看[分离变量](#separable-variables)与[怎样选择正负](#using-a-given-condition)。平方后的等式可能允许零，但原方程的分母仍不能为零，必须回到原方程检查。

<section class="lesson-check" markdown="1">

### 重新选择一条解 {#retry-solution}

<!-- task:retry-solution -->

**(a)** Solve $dy/dx=-x/y$ with $y(0)=-3$. State the largest interval containing $0$ on which your solution satisfies the original equation.

**(b)** Find the solution of $dy/dx=x(y-1)$ satisfying $y(0)=1$. Explain any division you choose to use.

<!-- /task:retry-solution -->

<details markdown="1">
<summary>提示</summary>

先看原方程允许哪些取值，积分后再用起始值选正负。(b) 在除以 $y-1$ 前直接检查初值对应的常数函数。

</details>

<details markdown="1">
<summary>解答与检查</summary>

**(a)** 分离得 $\int y\,dy=\int-x\,dx$，所以 $y^2=9-x^2$。初值为负，故

$$y=-\sqrt{9-x^2},\qquad -3<x<3.$$

该区间内 $y^{\prime}=x/\sqrt{9-x^2}=-x/y$，且 $y(0)=-3$。在 $x=\pm3$，$y=0$ 使原方程无定义，不能包含端点；区间外根号不是实数。

**(b)** $y=1$ 的导数为零，右侧也为零，且满足初值，因此它就是所需解。对 $y\ne1$ 分离只能得到 $y=1+Ae^{x^2/2}$、$A\ne0$，这些解不满足初值。单独检查常数解后，才知道可以把 $A=0$ 包括进来；这不能使除以零变成合法运算。

</details>

</section>

**若混淆速率与初值、比例常数与积分常数，或给衰减漏负号：**回看[速率定常数的示范](#example-rate)。指数模型 $Q^{\prime}=-kQ$ 有恒定半衰期；不能直接把这个结论移用到另一种速率规律。

<section class="lesson-check" markdown="1">

### 读一组新的条件 {#retry-model}

<!-- task:retry-model -->

A positive mass $m$ grams decreases at a rate proportional to $m^2$. Initially $m=18$. When $m=6$, its rate of change is $-2$ grams per hour. Form and solve the model for $t\ge0$, state the units of its constant and determine the times when $m=9$ and $m=4.5$. Does it have a constant half-life?

<!-- /task:retry-model -->

<details markdown="1">
<summary>提示</summary>

一次速率对应一次质量，先求比例常数。使用初值定积分常数；再比较两段减半所需的时间。

</details>

<details markdown="1">
<summary>解答与检查</summary>

模型为 $m^{\prime}=-km^2$，$k>0$。由 $-2=-36k$ 得 $k=1/18$，单位 $\mathrm{g^{-1}\,h^{-1}}$。分离积分：

$$-\frac1m=-\frac t{18}+C,\qquad C=-\frac1{18},\qquad m=\frac{18}{t+1}\ \mathrm{g},\quad t\ge0.$$

当 $m=9$ 时 $t=1$；当 $m=4.5$ 时 $t=3$。两次减半分别用 $1$ 小时与 $2$ 小时，故没有恒定半衰期。求导得 $m^{\prime}=-18/(t+1)^2=-m^2/18$；当 $m=6$、$t=2$ 时速率为 $-2$。质量始终为正并趋向零；模型有效性限于给定速率规律仍成立的时期。

</details>

</section>

## 稍后回顾 {#later-review-section}

学完数值方法后，先离开本页解答完成任务；用检查结果判断是否需要回到分离或建模的重试。

<section class="lesson-check" markdown="1">

### 建立并判断模型 {#later-review}

<!-- task:later-review -->

An object cools in a room held at $20^\circ\mathrm C$. While its temperature $T$ exceeds room temperature, its rate of decrease is proportional to the temperature excess above the room. Initially $T=80$; after $2$ minutes $T=50$. Find $T$ at time $t\ge0$, determine when $T=35$, and assess a prediction that it reaches $10^\circ\mathrm C$. State one physical assumption.

<!-- /task:later-review -->

<details markdown="1">
<summary>提示</summary>

先写出与变化率成正比的量及正负号。可令 $U=T-20$，用两个温度条件确定常数。检查所求温度是否在解的取值范围内。

</details>

<details markdown="1">
<summary>解答与检查</summary>

比室温高多少，决定了降温有多快。这个温差为正时，要用负号使温度下降：$T^{\prime}=-k(T-20)$，$k>0$。把温差记作 $U=T-20>0$，分离积分得 $\ln U=-kt+C$。初值给出 $U=60e^{-kt}$；$T(2)=50$ 给出 $30=60e^{-2k}$，故 $k=\ln2/2$，单位 $\mathrm{min^{-1}}$。

$$T=20+60e^{-(\ln2)t/2}.$$

$T=35$ 时指数因子为 $1/4$，因此 $t=4$ 分钟。对所有 $t\ge0$，$20<T\le80$ 且不断降低，所以 $T=10$ 不可能；解趋近 $20$，不会越过它。检查 $T^{\prime}=-k(T-20)$、$T(0)=80$、$T(2)=50$ 均成立。物理假设包括室温保持不变、物体内部可近似为同一温度、传热规律在这些温度下保持不变。若用了 $-kT$，回到[建立模型](#forming-a-model)；若常数或区间出错，回到[解的重试](#retry-solution)或[模型重试](#retry-model)。

</details>

</section>

## 快速参考 {#quick-reference}

| 步骤 | 做法 | 检查 |
|---|---|---|
| 分离变量 | $\displaystyle\int\frac{1}{g(y)}\,dy=\int f(x)\,dx$ | 除以 $g(y)$ 前检查是否有常数解 |
| 积分 | 在一侧加上 $+C$ | 除非已知函数为正，否则保留对数的绝对值 |
| 使用已知条件 | 代入给定数值 | 选择符合已知数值的正或负答案 |
| 建立模型 | 把变化率和比例关系翻译为方程 | 使用正确的自变量和符号 |
| 求常数 | 区分模型常数 $k$ 和任意常数 | 使用所有已知信息，并统一单位 |
| 增长或衰减 | $Q_0e^{kt}$ 或 $Q_0e^{-kt}$，其中 $k>0$ | 最后计算时再把精确对数值换成近似值 |
| 半衰期 | $\displaystyle T=\frac{\ln2}{k}$，适用于写成 $Q_0e^{-kt}$ 的衰减模型 | 区分剩余量和减少量 |
{: .wide-table}

**如果答案看起来不对：**对答案求导并代回原方程。然后检查给定条件、排除值和变化方向是否符合预期。

**你应当能够：**分离变量、求特解、检查常数解、建立模型，并结合实际情境解释结果。

**学习路径：**[上一节：积分：三角积分与应用](/zh/alevel/a2-mathematics/integration-applications/) · [下一节：数值方法](/zh/alevel/a2-mathematics/numerical-methods/)。


**下一步：**能从文字独立列式、用条件求解并检查范围后，进入[数值方法](/zh/alevel/a2-mathematics/numerical-methods/)，比较解析结果与带精度证据的近似。之后回到[本页回顾](#later-review)。范围依据：[9660 大纲 v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf)，P2.8（及增长衰减 P2.5）；实读 January 2025 MA03 [QP](https://aqamat.alevelclouds.com/25_01_QP_P2.pdf) Q12(b) 和配套 [MS](https://aqamat.alevelclouds.com/25_01_MS_P2.pdf)，保留分离、两个积分、条件及解出变量的过程要求。所有情境数据与题目均为自拟。

{% include exam_topic_practice.html %}
