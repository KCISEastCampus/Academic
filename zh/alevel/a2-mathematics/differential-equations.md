---
title: 微分方程
layout: subjects
mathjax: true
grade: a2
subject: a2-mathematics
lang: zh-CN
translation_of: /alevel/a2-mathematics/differential-equations/
permalink: /zh/alevel/a2-mathematics/differential-equations/
toc_headings: h2
study_page: true
---

[纯数学](/zh/alevel/a2-mathematics/) · P2.8 微分方程（differential equations）

微分方程描述某个量与其变化率（rate of change）之间的关系。解出方程后，就能得到不含导数的关系式。本页例题与练习的题干保留英文，讲解、提示与解答使用中文。

- **学习：**先学习[分离变量](#separable-variables)，再学习[利用已知条件](#using-a-given-condition)和[建立模型](#forming-a-model)。
- **作业帮助：**确认哪个变量在变化、变化率与什么成正比，以及该量是在增加还是减少。
- **复习：**先尝试[练习](#practice)，再打开提示和解答。

教材：第 7 章第 7.1–7.2 节（印刷版第 104–112 页）。积分常数记作 $C$，也称任意常数（arbitrary constant）。整理结果后，也可以用 $A$ 表示新的任意常数。

**开始前：**你应当掌握[积分方法](/zh/alevel/a2-mathematics/integration/)、对数和指数函数。例题 3 还会用到[部分分式](/zh/alevel/a2-mathematics/partial-fractions/)。

本页所有例题和练习题均为自拟题，并非官方真题。建议练习时间仅供参考；题目没有官方分值。

## 分离变量法（separation of variables） {#separable-variables}

一阶微分方程（first order differential equation）含有一阶导数，例如 $\frac{dy}{dx}$，但不含更高阶导数。本课中的方程都可以分离变量，也就是可以写成

$$\frac{dy}{dx}=f(x)g(y).$$

把含 $y$ 的项移到关于 $y$ 的积分一侧，把含 $x$ 的项移到关于 $x$ 的积分一侧。当 $g(y)\ne0$ 时，可写为

$$\int\frac{1}{g(y)}\,dy=\int f(x)\,dx.$$

这是教材采用的积分形式。然后对等式两边积分。**只需要一个积分常数：**等式两边的常数可以合并成一个 $C$。

1. 检查能否分离变量。
2. 除以关于 $y$ 的函数之前，先检查令该函数为零是否会得到常数解（constant solution）。
3. 分离变量并积分，在一侧加上 $+C$。
4. 使用题目给出的条件求出常数。
5. 把结果代回原微分方程，并检查给定条件。

**通解（general solution）：**包含任意常数的一族解。**特解（particular solution）：**利用额外信息（如曲线上的一个点）求得的解。初始条件（initial condition）给出起始值，常见情形是在时间 $t=0$ 时给定数值。

### 例题 1 — 含对数的通解 {#example-1--a-general-solution-with-a-logarithm}

**Question:** Solve $\displaystyle\frac{dy}{dx}=2xy$.

当 $y\ne0$ 时，分离变量并积分：

$$\int\frac1y\,dy=\int2x\,dx.$$

$$\ln\lvert y\rvert=x^2+C.$$

两边取以 $e$ 为底的指数，得到 $\lvert y\rvert=e^Ce^{x^2}$。允许正、负两种取值，可写成

$$\boxed{y=Ae^{x^2}}.$$

通过除法得到的解中，$A\ne0$。还要在原方程中单独检查 $y=0$：它也是一个解。因此，只要允许 $A$ 取任意实数（包括零），上面的解族就包含所有这些解。

**检查：**$\frac{dy}{dx}=2xAe^{x^2}=2xy$。

**常见错误：**写成 $y=e^{x^2}+C$。对数中的常数在取指数后会变成乘法常数。

## 利用已知条件 {#using-a-given-condition}

将两个坐标代入积分后的结果，求出 $C$。若整理后出现两个分支，就用给定条件选出正确的分支。解应取在原方程有定义的区间内。

### 例题 2 — 选择正确的平方根 {#example-2--choose-the-correct-square-root}

**Question:** Solve $\displaystyle\frac{dy}{dx}=\frac{x}{y}$, given $y=2$ when $x=0$.

原方程要求 $y\ne0$。分离变量得

$$\int y\,dy=\int x\,dx,$$

$$\frac{y^2}{2}=\frac{x^2}{2}+C.$$

代入 $(0,2)$：得到 $2=C$。因此 $y^2=x^2+4$。起始值为正，所以选正分支：

$$\boxed{y=\sqrt{x^2+4}}.$$

**检查：**$\frac{dy}{dx}=\frac{x}{\sqrt{x^2+4}}=\frac{x}{y}$，且 $y(0)=2$。此解永远不会取到零，对所有实数 $x$ 都有定义。

**常见错误：**给定条件已经选定一个分支，却仍把正、负两个分支都写出来。

### 例题 3 — 除法前检查常数解 {#example-3--check-constant-solutions-before-dividing}

**Question:** Solve $\displaystyle\frac{dy}{dx}=y(y-2)$, given $y=1$ when $x=0$.

先检查 $y=0$ 和 $y=2$。两者都使 $\frac{dy}{dx}=0$，并且都满足微分方程，但都不满足给定条件。

对所需的非恒定解，

$$\int\frac{1}{y(y-2)}\,dy=\int1\,dx.$$

使用部分分式：

$$\frac{1}{y(y-2)}=-\frac{1}{2y}+\frac{1}{2(y-2)}.$$

$$-\frac12\ln\lvert y\rvert+\frac12\ln\lvert y-2\rvert=x+C.$$

在 $(0,1)$ 处，两个对数都为零，所以 $C=0$。因此

$$\ln\left\lvert\frac{y-2}{y}\right\rvert=2x.$$

在起始点处，该比值为负。在解所在的区间内取

$$\frac{y-2}{y}=-e^{2x},\qquad \boxed{y=\frac{2}{1+e^{2x}}}.$$

**检查：**令 $E=e^{2x}$，导数为 $-\frac{4E}{(1+E)^2}$。同时，

$$y(y-2)=\frac{2}{1+E}\left(\frac{2}{1+E}-2\right)=-\frac{4E}{(1+E)^2}.$$

给定条件得到 $y(0)=1$。对所有实数 $x$，都有 $0<y<2$，所以刚才除掉的两个因子都不为零。

**常见错误：**没有检查符号，就把 $e^{2x}$ 当成该比值。两边取以 $e$ 为底的指数后，得到的是这个比值的绝对值。

## 建立模型 {#forming-a-model}

先确定因变量、它随哪个变量变化，以及变化率的正负。比例常数（constant of proportion）属于模型；积分时出现的任意常数则属于积分结果。这两种常数的作用不同。

下表中 $Q>0$ 且 $k>0$。符号已明确写出。

| 描述 | 微分方程 |
|---|---|
| $Q$ 以与 $Q$ 成正比的速率增加 | $\displaystyle\frac{dQ}{dt}=kQ$ |
| $Q$ 以与 $Q$ 成正比的速率减少 | $\displaystyle\frac{dQ}{dt}=-kQ$ |
| $Q$ 以与 $Q$ 成反比的速率增加 | $\displaystyle\frac{dQ}{dt}=\frac{k}{Q}$ |
| $Q$ 以与 $Q^2$ 成正比的速率减少 | $\displaystyle\frac{dQ}{dt}=-kQ^2$ |

自变量不一定是时间。例如，长度 $l$ 随温度 $\theta$ 变化时，使用 $\frac{dl}{d\theta}$。

**按顺序使用给定信息。**已知某一数值处的变化率，可以直接求出 $k$。起始值用于求积分常数。之后再用另一个时刻的数值求 $k$。

### 例题 4 — 反比例关系 {#example-4--inverse-proportion}

**Question:** The depth $h$ metres of water increases at a rate inversely proportional to $h$. At time $t=0$, $h=1$. After $3$ minutes, $h=2$. Form and solve a differential equation for $h$.

由于水深增加，取 $k>0$：

$$\frac{dh}{dt}=\frac{k}{h},\qquad \int h\,dh=\int k\,dt.$$

$$\frac{h^2}{2}=kt+C.$$

初始条件给出 $C=\frac12$。当 $t=3$、$h=2$ 时，得到 $2=3k+\frac12$，因此 $k=\frac12$。

$$\boxed{h=\sqrt{t+1}\text{ metres},\quad t\ge0}.$$

**检查：**$\frac{dh}{dt}=\frac{1}{2\sqrt{t+1}}=\frac{k}{h}$，并且 $h(0)=1$、$h(3)=2$。正平方根分支符合水深的实际意义。

水深在增加，但随着 $h$ 增大，增加速率会变小。不能因为某个量在增加，就认为它的变化率恒定。

## 指数增长与衰减（exponential growth and decay） {#natural-growth-and-decay}

对于初始值为 $Q_0$ 的正量，与自身成正比的增长可表示为

$$\frac{dQ}{dt}=kQ\quad\Longrightarrow\quad Q=Q_0e^{kt},\quad k>0.$$

与自身成正比的衰减可表示为

$$\frac{dQ}{dt}=-kQ\quad\Longrightarrow\quad Q=Q_0e^{-kt},\quad k>0.$$

要得到这两个结果，都要先分离变量并对 $\frac1Q$ 积分，得到 $\ln Q$。这里 $Q$ 为正，因此对数不需要绝对值符号。

### 例题 5 — 根据后续数值求增长常数 {#example-5--find-the-growth-constant-from-a-later-value}

**Question:** A culture initially contains $400$ cells. Its rate of increase is proportional to the number $N$ present. The number doubles in $3$ hours. Find $N$ at time $t$ hours, and find when it first reaches $1200$.

模型为 $\frac{dN}{dt}=kN$，其中 $k>0$。分离变量并积分：

$$\int\frac1N\,dN=\int k\,dt,\qquad \ln N=kt+C.$$

使用 $N(0)=400$：得到 $C=\ln400$。所以 $N=400e^{kt}$。

由于 $N(3)=800$，$e^{3k}=2$，因此 $k=\frac{\ln2}{3}$，单位为每小时。

$$\boxed{N=400e^{(\ln2)t/3}}.$$

当 $N=1200$ 时，$e^{kt}=3$，所以

$$\boxed{t=\frac{3\ln3}{\ln2}\approx4.75\text{ hours}}.$$

**检查：**数量为 $800$ 对应 $3$ 小时后，为 $1600$ 对应 $6$ 小时后。在这两个时刻之间达到 $1200$，符合预期。

该模型假设相同比例增长规律持续成立，没有考虑营养或空间不足。

### 例题 6 — 半衰期（half-life）与剩余质量 {#example-6--half-life-and-mass-remaining}

**Question:** A sample has mass $80$ g initially and decays at a rate proportional to its remaining mass $m$. Its half-life is $6$ hours. Find $m$ at time $t$ hours and the mass remaining after $18$ hours.

模型为 $\frac{dm}{dt}=-km$，其中 $k>0$。分离变量并积分：

$$\int\frac1m\,dm=\int-k\,dt,\qquad \ln m=-kt+C.$$

初始条件给出 $C=\ln80$，所以 $m=80e^{-kt}$。半衰期意味着 $m(6)=40$：

$$e^{-6k}=\frac12,\qquad k=\frac{\ln2}{6}.$$

$$\boxed{m=80e^{-(\ln2)t/6}\text{ g}}.$$

经过 $18$ 小时，已经经历了三个半衰期：

$$m(18)=80\left(\frac12\right)^3=\boxed{10\text{ g}}.$$

**检查：**$\frac{dm}{dt}=-km<0$（当 $m>0$ 时）。质量每经过 $6$ 小时就减半。

若指数衰减模型写成 $Q=Q_0e^{-kt}$ 且 $k>0$，则半衰期为

$$\boxed{T=\frac{\ln2}{k}}.$$

**常见错误：**把剩余质量和减少的质量混淆。这里 $18$ 小时后减少的质量为 $80-10=70$ g。

## 练习 {#practice}

**独立练习 · 25–35 分钟**

写出分离变量后的积分式；使用条件前先保留任意常数；最后把答案代回原方程检查。建立模型时，要说明每个变量的含义，并保持单位一致。

### Q1 — 通解与特解 {#q1--general-and-particular-solutions}

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

### Q2 — 选择分支 {#q2--choose-the-branch}

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

### Q3 — 将文字关系写成方程 {#q3--form-equations-from-words}

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

### Q4 — 用变化率求模型常数 {#q4--a-rate-determines-the-model-constant}

The positive height $h$ metres of a pile increases at a rate inversely proportional to $h^3$. When $h=2$, the rate is $\frac14$ metres per minute. Initially $h=1$. Find $h$ at time $t$ minutes and when it reaches $3$ metres.

<details markdown="1">
<summary>提示</summary>

先用 $\frac14=\frac{k}{2^3}$ 求出 $k$。然后对 $h^3$ 积分，并使用起始高度。

</details>

<details markdown="1">
<summary>解答与检查</summary>

模型为 $\frac{dh}{dt}=\frac{k}{h^3}$；测得的变化率给出 $k=2$。

$$\int h^3\,dh=\int2\,dt,\qquad \frac{h^4}{4}=2t+C.$$

当 $t=0$ 时，$C=\frac14$。因此

$$\boxed{h=(8t+1)^{1/4}\text{ metres},\quad t\ge0}.$$

当 $h=3$ 时，$81=8t+1$，所以 $\boxed{t=10\text{ minutes}}$。

求导得到 $2(8t+1)^{-3/4}=\frac{2}{h^3}$。该解还满足 $h(0)=1$，并且在 $h=2$ 时给出题目所述的变化率。

</details>

### Q5 — 百分比增长 {#q5--percentage-growth}

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

### Q6 — 衰减、半衰期与减少量 {#q6--decay-half-life-and-the-amount-lost}

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

## 快速参考 {#quick-reference}

| 步骤 | 做法 | 检查 |
|---|---|---|
| 分离变量 | $\displaystyle\int\frac{1}{g(y)}\,dy=\int f(x)\,dx$ | 除以 $g(y)$ 前检查是否有常数解 |
| 积分 | 在一侧加上 $+C$ | 除非已知函数为正，否则保留对数的绝对值 |
| 使用已知条件 | 代入给定数值 | 选择符合条件的分支 |
| 建立模型 | 把变化率和比例关系翻译为方程 | 使用正确的自变量和符号 |
| 求常数 | 区分模型常数 $k$ 和任意常数 | 使用所有已知信息，并统一单位 |
| 增长或衰减 | $Q_0e^{kt}$ 或 $Q_0e^{-kt}$，其中 $k>0$ | 最后计算时再把精确对数值换成近似值 |
| 半衰期 | $\displaystyle T=\frac{\ln2}{k}$，适用于写成 $Q_0e^{-kt}$ 的衰减模型 | 区分剩余量和减少量 |

**如果答案看起来不对：**对答案求导并代回原方程。然后检查给定条件、排除值和变化方向是否符合预期。

**你应当能够：**分离变量、求特解、检查常数解、建立模型，并结合实际情境解释结果。

**学习路径：**[上一节：积分：三角积分与应用](/zh/alevel/a2-mathematics/integration-applications/) · [下一节：数值方法](/zh/alevel/a2-mathematics/numerical-methods/)。
