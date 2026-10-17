---
title: 简谐运动
layout: subjects
mathjax: true
grade: a2
subject: a2-physics
lang: zh-CN
translation_of: /alevel/a2-physics/simple-harmonic-motion/
permalink: /zh/alevel/a2-physics/simple-harmonic-motion/
toc_headings: h2, h3, h4
study_page: true
---

[A2 物理](/zh/alevel/a2-physics/) · PH03 · 3.6.2 简谐运动

判断简谐运动，读运动和能量图像，并推导弹簧振子与单摆的周期。本页保留英文题干和公式，中文解释方法、提示与解答；图内标签保留英文。

- **学习：**先看[简谐条件](#the-condition-for-shm)，再联系[运动图像](#motion-graphs-and-equations)与[能量](#energy-in-shm)。
- **作业帮助：**从平衡位置量位移，规定正方向；选正弦或余弦方程前，先检查初始位置和速度。
- **复习：**关闭提示与解答，先做[练习](#practice)。

**开始前：**复习[圆周运动](/zh/alevel/a2-physics/circular-motion/)和 [AS 振动系统](/alevel/as-physics/#61-oscillating-systems)。除非另有说明，使用 $g=9.81\,\mathrm{m\,s^{-2}}$。长度换成米，方程中角度用弧度，最后才取整。

例题与练习 1–5 为自拟题；练习 6–7 和能量检查点改编自 OxfordAQA PH03 试卷，题干已经简化，未赋予官方分值。图示不按比例绘制。

## 简谐运动的条件 {#the-condition-for-shm}

**先想一想：**物体围绕固定位置往复运动，就足以证明是简谐运动吗？

<details markdown="1">
<summary>核对你的解释</summary>

不够。仅有振动还不够；简谐运动要求加速度与偏离平衡位置的位移成正比，且指向平衡位置。

</details>

**简谐运动（simple harmonic motion，SHM）**的加速度与偏离固定平衡位置的位移成正比，并始终指向该位置：

$$\boxed{a=-\omega^2x}.$$

$x$ 是相对平衡位置的有符号位移，$\omega$ 为**角频率（angular frequency）**，单位 $\mathrm{rad\,s^{-1}}$。直线振动中 $a$ 沿该直线；单摆中则取沿弧形路径的分量。

负号表示加速度与位移符号相反，并非物体始终减速。朝平衡位置运动时加速，远离平衡位置时减速。

**振幅（amplitude）**$A$ 是位移大小的最大值，两端点间距为 $2A$。**周期**$T$ 是完整振动一次所需时间；**频率**$f$ 是每秒完整振动的次数。

$$\omega=2\pi f=\frac{2\pi}{T}.$$

简谐运动的加速度—位移图是过原点的负斜率直线：

$$\text{gradient}=-\omega^2.$$

仅有负斜率不够：必须是线性关系，且位移从平衡位置量起。理想模型的回复合力也应与这一位移成正比。

### 例题 1：识别简谐运动 {#example-1-recognising-shm}

An oscillator obeys $a=-144x$, where $a$ is in $\mathrm{m\,s^{-2}}$ and $x$ is in metres. Its amplitude is $0.050\,\mathrm m$. Find its angular frequency and period, and its acceleration at $x=+0.030\,\mathrm m$.

与 $a=-\omega^2x$ 比较：

$$\omega^2=144\,\mathrm{s^{-2}},\qquad \omega=12\,\mathrm{rad\,s^{-1}}.$$

$$T=\frac{2\pi}{12}\approx\boxed{0.52\,\mathrm s}.$$

$$a=-144(0.030)=-4.32\,\mathrm{m\,s^{-2}}.$$

加速度大小为 $\boxed{4.3\,\mathrm{m\,s^{-2}}}$，沿负方向指向平衡位置。在 $x=-0.030\,\mathrm m$ 处，大小相同，但方向为正。

**检查：**加速度大小在两个端点最大：

$$a_{\max}=\omega^2A=144(0.050)=7.2\,\mathrm{m\,s^{-2}}.$$

## 运动图像与方程 {#motion-graphs-and-equations}

无阻尼振子在 $x=+A$ 处、$t=0$ 时由静止释放：

$$\boxed{x=A\cos(\omega t)}.$$

位移—时间图的斜率是速度；速度—时间图的斜率是加速度：

$$v=\frac{\mathrm dx}{\mathrm dt}=-A\omega\sin(\omega t).$$

$$a=\frac{\mathrm dv}{\mathrm dt}=-A\omega^2\cos(\omega t).$$

由此得到 $a=-\omega^2x$。微分帮助理解图像；也可以不求导，直接读取图线的斜率。

<img src="/assets/img/physics-shm-motion.svg" width="400" height="640" data-lazy-ignore="true" alt="一个周期内的位移、速度和加速度图：位移从正最大值开始，速度从零变负，加速度从负最大值开始，各图使用独立标度">

各图分别使用 $x/A$、$v/(A\omega)$ 和 $a/(A\omega^2)$ 标度；画出的高度相同，不表示三者单位或大小相同。

| 时间 | $x$ | $v$ | $a$ |
|---|---|---|---|
| $0$ | $+A$ | $0$ | $-\omega^2A$ |
| $T/4$ | $0$ | $-\omega A$ | $0$ |
| $T/2$ | $-A$ | $0$ | $+\omega^2A$ |
| $3T/4$ | $0$ | $+\omega A$ | $0$ |
| $T$ | $+A$ | $0$ | $-\omega^2A$ |

位移与加速度**反相（antiphase）**，相位差为 $\pi$ 弧度，即半周期。速度超前位移 $\pi/2$ 弧度，即四分之一周期。表中的符号给出运动方向。

平衡位置速率最大、简谐加速度为零；端点速率为零、加速度大小最大。折返点并不意味着加速度为零。

### 根据初始条件选择方程 {#choose-the-equation-from-the-starting-conditions}

| $t=0$ 时的条件 | 位移方程 |
|---|---|
| 在 $+A$ 处由静止释放 | $x=A\cos(\omega t)$ |
| 在 $-A$ 处由静止释放 | $x=-A\cos(\omega t)$ |
| 经过平衡位置，沿正方向运动 | $x=A\sin(\omega t)$ |
| 经过平衡位置，沿负方向运动 | $x=-A\sin(\omega t)$ |

其他初始位置需要相位常量，例如 $x=A\cos(\omega t+\phi)$。不能假定所有振动都从端点开始。

### 例题 2：给定时刻的位置与运动方向 {#example-2-position-and-direction-at-a-given-time}

A particle has displacement $x=0.040\cos(5\pi t)$ in metres, with $t$ in seconds. Find its period and its displacement, velocity and acceleration at $t=0.15\,\mathrm s$.

由题得 $A=0.040\,\mathrm m$、$\omega=5\pi\,\mathrm{rad\,s^{-1}}$，因此 $T=0.40\,\mathrm s$。

$$\omega t=5\pi(0.15)=\frac{3\pi}{4}.$$

$$x=0.040\cos\left(\frac{3\pi}{4}\right)\approx\boxed{-0.028\,\mathrm m}.$$

$$v=-0.040(5\pi)\sin\left(\frac{3\pi}{4}\right).$$

$$\boxed{v\approx-0.44\,\mathrm{m\,s^{-1}}}.$$

$$a=-(5\pi)^2x\approx\boxed{+7.0\,\mathrm{m\,s^{-2}}}.$$

最后一步使用未取整的 $x$。质点处在负侧且远离平衡位置，虽然加速度指回平衡位置，但它此时在减速。

**检查：**$T/4<0.15<T/2$，该时刻在第一次经过平衡位置与负端点之间。

## 给定位移时的速率 {#speed-at-a-given-displacement}

由 $x=A\cos(\omega t)$ 和 $v=-A\omega\sin(\omega t)$ 得到：

$$v^2=\omega^2(A^2-x^2).$$

$$\boxed{v=\pm\omega\sqrt{A^2-x^2}}.$$

求**速率**取正的大小；求**速度**则根据运动方向选符号。同一位移通常在一周期内经过两次，方向相反。

在 $x=0$ 时速率最大：

$$\boxed{v_{\max}=\omega A}.$$

在 $x=\pm A$ 时速率为零。$\lvert x\rvert >A$ 超出运动范围，不能代入得到实数速率。

### 例题 3：速率与能量 {#example-3-speed-and-energy}

A $0.20\,\mathrm{kg}$ particle is attached to a spring of spring constant $50\,\mathrm{N\,m^{-1}}$ on a smooth horizontal surface. It is released from rest $0.040\,\mathrm m$ from equilibrium. The spring obeys Hooke's law and damping is negligible.

受力方程为 $ma=-kx$，因此 $\omega^2=k/m=250\,\mathrm{s^{-2}}$。

$$v_{\max}=\sqrt{250}(0.040)\approx\boxed{0.63\,\mathrm{m\,s^{-1}}}.$$

在 $x=+0.024\,\mathrm m$ 处：

$$\lvert v\rvert =\sqrt{250}\sqrt{0.040^2-0.024^2}.$$

$$\boxed{\lvert v\rvert \approx0.51\,\mathrm{m\,s^{-1}}}.$$

质点第一次返回平衡位置时速度为负，之后向外运动时速度为正。仅给位移不能确定速度符号。

## 简谐运动的能量 {#energy-in-shm}

理想无阻尼振子以平衡位置作为势能参考点：

$$E_p=\frac12m\omega^2x^2.$$

$$E_k=\frac12mv^2=\frac12m\omega^2(A^2-x^2).$$

$$\boxed{E_{\text{total}}=\frac12m\omega^2A^2}.$$

水平弹簧满足 $m\omega^2=k$，所以 $E_p=kx^2/2$、$E_{\text{total}}=kA^2/2$。

<img src="/assets/img/physics-shm-energy.svg" width="400" height="570" data-lazy-ignore="true" alt="能量图：势能随位移为开口向上抛物线，动能为开口向下抛物线；每个位移周期内，两种能量各出现两次峰值，总能量恒定">

端点的振动能量全部为势能，平衡位置全部为动能。没有能量传给环境时，总能量不变。

对 $x=A\cos(\omega t)$，有 $E_p=E_{\text{total}}\cos^2(\omega t)$、$E_k=E_{\text{total}}\sin^2(\omega t)$。两种能量的周期均为 $T/2$，因为一次完整振动经过平衡位置两次。不要把相邻动能峰值间隔当作位移周期。

### 续例题 3：用能量独立检查 {#continue-example-3-an-independent-energy-check}

$$E_{\text{total}}=\frac12(50)(0.040)^2=0.040\,\mathrm J.$$

在 $x=+0.024\,\mathrm m$ 处：

$$E_p=\frac12(50)(0.024)^2=0.0144\,\mathrm J.$$

$$E_k=0.040-0.0144=0.0256\,\mathrm J.$$

$$\lvert v\rvert =\sqrt{\frac{2E_k}{m}}=\sqrt{\frac{2(0.0256)}{0.20}}.$$

再次得到 $\lvert v\rvert \approx0.51\,\mathrm{m\,s^{-1}}$，能量法可独立于时间方程检查速率。

### 检查点：动量与能量 {#checkpoint-momentum-and-energy}

**Adapted from OxfordAQA PH03, June 2024, Question 8.** When the magnitude of an oscillator's momentum is greatest, what are its displacement and kinetic energy?

<details markdown="1">
<summary>核对答案</summary>

动量大小为 $m\lvert v\rvert $，在平衡位置最大；此处 $x=0$，动能也最大。加速度为零不等于速率或动量为零。

</details>

阻尼显著时，能量传给环境，振幅逐渐减小，以上固定振幅方程与恒定总能量线不再精确适用。相关效应见 [AS 阻尼与共振](/alevel/as-physics/#62-forced-vibrations-and-resonance)。

## 弹簧振子与单摆 {#massspring-systems-and-pendulums}

使用遵守胡克定律的理想轻弹簧，或由不可伸长轻绳和小摆球组成的单摆。下列计算忽略摩擦与空气阻力。

<img src="/assets/img/physics-shm-models.svg" width="400" height="680" data-lazy-ignore="true" alt="竖直弹簧偏离平衡向下时，向上弹力大于重力；单摆张力指向悬点，重力沿切线的分量指回平衡位置">

### 推导弹簧振子的周期 {#derive-the-period-of-a-massspring-system}

水平弹簧中 $x$ 从平衡位置量起，回复合力为 $F=-kx$：

$$ma=-kx,\qquad a=-\frac{k}{m}x.$$

与 $a=-\omega^2x$ 比较：

$$\omega^2=\frac{k}{m}.$$

代入 $\omega=2\pi/T$ 并整理：

$$\boxed{T=2\pi\sqrt{\frac{m}{k}}}.$$

固定弹簧时 $T\propto\sqrt m$；固定质量时 $T\propto1/\sqrt k$。理想周期不依赖振幅或 $g$；质量变为四倍，周期变为两倍。

两根弹簧共同作用时，先求有效回复力。周期式中的 $k$ 是**整个系统的有效劲度系数**，不一定等于单根弹簧的系数。

### 竖直弹簧：先找平衡位置 {#a-vertical-spring-find-equilibrium-first}

设平衡伸长量为 $e_0$，竖直平衡给出 $ke_0=mg$。向下为正，令 $x$ 为相对该平衡位置的位移，总伸长为 $e_0+x$：

$$ma=mg-k(e_0+x)=-kx.$$

恒定重力与平衡位置的弹力相抵消，因此周期公式相同。不能把从原长量起的总伸长当作 $x$ 代入 $a=-\omega^2x$。

竖直系统中的 $kx^2/2$ 是**相对平衡位置的弹性势能与引力势能之和**，并非仅弹簧弹性势能；后者为 $k(e_0+x)^2/2$。

#### 例题 4：竖直弹簧 {#example-4-a-vertical-spring}

A $0.25\,\mathrm{kg}$ mass hangs from a spring of constant $40\,\mathrm{N\,m^{-1}}$. It oscillates with amplitude $0.020\,\mathrm m$. Find the equilibrium extension, period and acceleration when it is $0.020\,\mathrm m$ below equilibrium.

$$e_0=\frac{mg}{k}=\frac{0.25(9.81)}{40}\approx\boxed{0.061\,\mathrm m}.$$

$$T=2\pi\sqrt{\frac{0.25}{40}}\approx\boxed{0.50\,\mathrm s}.$$

在 $x=+0.020\,\mathrm m$ 处：

$$a=-\frac{40}{0.25}(0.020)=\boxed{-3.2\,\mathrm{m\,s^{-2}}}.$$

加速度向上。物体位于下端折返点，瞬时速度为零。

**用实际受力检查：**弹力 $mg+kx=2.4525+0.80=3.2525\,\mathrm N$ 向上，合力 $0.80\,\mathrm N$ 向上，所以 $a=0.80/0.25=3.2\,\mathrm{m\,s^{-2}}$，方向向上。

### 单摆：模型与周期 {#derive-the-period-of-a-simple-pendulum}

$L$ 为悬点到摆球中心的距离；有符号位移 $x=L\theta$ 从最低点**沿圆弧**量起，$\theta$ 用弧度。

张力指向悬点，没有沿弧线的分量；重力的回复分量给出：

$$ma=-mg\sin\theta.$$

小角度时 $\sin\theta\approx\theta=x/L$，所以：

$$a\approx-\frac{g}{L}x.$$

与简谐条件比较得到 $\omega^2\approx g/L$，从而：

$$\boxed{T\approx2\pi\sqrt{\frac{L}{g}}}.$$

该近似适用于小摆角，通常约 $10^\circ$ 或更小；小角近似必须用弧度。理想小角周期不依赖摆球质量或振幅，随 $\sqrt L$ 增大、随 $\sqrt g$ 增大而减小。

这里 $a$ 是**切向加速度**。最低点的切向加速度为零，但仍有指向悬点的径向加速度 $v^2/L$，因此此时张力大于重力。参见[圆周运动受力方程](/zh/alevel/a2-physics/circular-motion/#force-equations)。

#### 例题 5：单摆的周期与速率 {#example-5-period-and-speed-of-a-pendulum}

A $0.10\,\mathrm{kg}$ bob hangs from a light string of length $0.80\,\mathrm m$. It is released from rest $0.0030\,\mathrm m$ above its lowest point. Find the approximate period and its speed at the lowest point.

$$T\approx2\pi\sqrt{\frac{0.80}{9.81}}\approx\boxed{1.8\,\mathrm s}.$$

速率可由引力势能的减少求得：

$$mgh=\frac12mv^2.$$

$$v=\sqrt{2gh}\approx\boxed{0.24\,\mathrm{m\,s^{-1}}}.$$

**检查模型：**由 $h=L(1-\cos\theta)$ 得初始角约 $5.0^\circ$，小角周期适用。$0.0030\,\mathrm m$ 是高度差，不是沿弧线的振幅。

## 测量与图像 {#measurements-and-graphs}

弹簧与单摆研究属于 **AS 必做实验 4**。PH03 深化相同的运动模型和图像技能，并非新增一个 A2 编号实验。

以平衡位置的固定标记计时至少十次完整振动，开始和结束都取**同方向**经过标记；反方向经过相差半周期。重复取平均，再除以次数。较长的总计时可减小反应时间的百分不确定度。

保持小摆角，$L$ 从悬点量到摆球中心。弹簧实验的振动质量应包含托盘质量；负载要在胡克定律适用范围内，并取足够多、范围合理的数据点。

| 图像 | 保持不变 | 斜率及用途 |
|---|---|---|
| $T^2$ 对振动质量 $m$ | 有效劲度系数 $k$ | $S=4\pi^2/k$；求 $k=4\pi^2/S$ |
| $T^2$ 对摆长 $L$ | $g$，且保持小摆角 | $S=4\pi^2/g$；求 $g=4\pi^2/S$ |
{: .wide-table}

两种理想图像均为过原点直线；实际截距可能来自漏计的托盘质量、弹簧质量或长度零点误差。应先考虑模型和数据，不能强迫拟合线过原点。用拟合线上较大的斜率三角形，不要只用相邻数据点。

若 $t_n$ 为 $n$ 次振动总时间，不确定度为 $\Delta t_n$，则 $T=t_n/n$、$\Delta T=\Delta t_n/n$，前提是 $n$ 计数正确。$T^2$ 的百分不确定度约为 $T$ 的两倍。

## 练习 {#practice}

### 练习 1：检验简谐条件 {#question-1-test-the-condition}

A particle has acceleration $a=-100x$, with $x$ in metres. Explain why this is SHM. Find its frequency and the acceleration at $x=-0.020\,\mathrm m$. Would $a=+100x$ describe SHM about $x=0$?

<details markdown="1">
<summary>提示</summary>

将系数与 $\omega^2$ 比较，用符号判断加速度方向。

</details>

<details markdown="1">
<summary>解答</summary>

加速度与位移成正比，且指向平衡位置。这里 $\omega=10\,\mathrm{rad\,s^{-1}}$、$f=10/(2\pi)\approx1.6\,\mathrm{Hz}$。

在 $x=-0.020\,\mathrm m$ 时，$a=-100(-0.020)=+2.0\,\mathrm{m\,s^{-2}}$，指向平衡位置。正号关系 $a=+100x$ 使加速度远离 $x=0$，因此不是围绕该点的简谐运动。

</details>

### 练习 2：从平衡位置开始 {#question-2-starting-at-equilibrium}

A particle passes through equilibrium in the positive direction at $t=0$. Its amplitude is $0.030\,\mathrm m$ and its period is $0.80\,\mathrm s$. Write an equation for $x(t)$ and find $x$, $v$ and $a$ at $t=0.20\,\mathrm s$.

<details markdown="1">
<summary>提示</summary>

选择初速度为正的正弦方程；所给时间为四分之一周期。

</details>

<details markdown="1">
<summary>解答</summary>

$$\omega=\frac{2\pi}{0.80}=2.5\pi\,\mathrm{rad\,s^{-1}}.$$

$$x=0.030\sin(2.5\pi t).$$

在 $t=0.20\,\mathrm s$ 时，质点位于正端点：

$$x=+0.030\,\mathrm m,\qquad v=0.$$

$$a=-(2.5\pi)^2(0.030)\approx\boxed{-1.9\,\mathrm{m\,s^{-2}}}.$$

瞬时静止，但仍有指向平衡位置的加速度。

</details>

### 练习 3：能量与图像周期 {#question-3-energy-and-graph-periods}

An undamped $0.40\,\mathrm{kg}$ oscillator has period $0.50\,\mathrm s$ and amplitude $0.020\,\mathrm m$. Find the total energy, kinetic energy and speed at $x=+0.010\,\mathrm m$. Find the separation in time of neighbouring kinetic-energy maxima.

<details markdown="1">
<summary>提示</summary>

位移为半振幅时，势能是总能量的四分之一，因为势能正比于 $x^2$。数一数每周期经过平衡位置几次。

</details>

<details markdown="1">
<summary>解答</summary>

$$\omega=4\pi\,\mathrm{rad\,s^{-1}}.$$

$$E_{\text{total}}=\frac12(0.40)(4\pi)^2(0.020)^2.$$

$$\boxed{E_{\text{total}}\approx0.013\,\mathrm J}.$$

$$E_k=\frac34E_{\text{total}}\approx\boxed{0.0095\,\mathrm J}.$$

$$\lvert v\rvert =4\pi\sqrt{0.020^2-0.010^2}.$$

$$\boxed{\lvert v\rvert \approx0.22\,\mathrm{m\,s^{-1}}}.$$

相邻动能峰值间隔为 $T/2=0.25\,\mathrm s$。题设没有指定方向，给定位移处的速度可正可负。

</details>

### 练习 4：竖直弹簧 {#question-4-a-vertical-spring}

A $0.30\,\mathrm{kg}$ mass hangs from a spring of constant $60\,\mathrm{N\,m^{-1}}$. It oscillates with amplitude $0.015\,\mathrm m$. Find the equilibrium extension, period and maximum speed. Find the magnitude and direction of acceleration at the upper turning point.

<details markdown="1">
<summary>提示</summary>

先用 $ke_0=mg$，再从平衡位置量 $x$。向下为正，所以上端点 $x=-A$。

</details>

<details markdown="1">
<summary>解答</summary>

$$e_0=\frac{0.30(9.81)}{60}\approx0.049\,\mathrm m.$$

$$\omega=\sqrt{\frac{60}{0.30}}=\sqrt{200}\,\mathrm{rad\,s^{-1}}.$$

$$T=\frac{2\pi}{\sqrt{200}}\approx0.44\,\mathrm s.$$

$$v_{\max}=\sqrt{200}(0.015)\approx0.21\,\mathrm{m\,s^{-1}}.$$

在 $x=-0.015\,\mathrm m$ 时，$a=-200(-0.015)=+3.0\,\mathrm{m\,s^{-2}}$：向下、指向平衡位置。因为 $e_0>A$，弹簧始终保持伸长。

</details>

### 练习 5：测量单摆 {#question-5-measuring-a-pendulum}

A small-angle pendulum of length $0.90\,\mathrm m$ completes 20 oscillations in $38.0\,\mathrm s$. Use these data to calculate $g$. If the uncertainty in the total timing is $\pm0.2\,\mathrm s$, find the timing contribution to the percentage uncertainty in $g$. Ignore length uncertainty for this calculation. What would doubling the bob mass do to the period?

<details markdown="1">
<summary>提示</summary>

总时间先除以 20，再用周期公式。长度固定时，$g$ 依赖于 $T^{-2}$。

</details>

<details markdown="1">
<summary>解答</summary>

$$T=\frac{38.0}{20}=1.90\,\mathrm s.$$

$$g=\frac{4\pi^2L}{T^2}=\frac{4\pi^2(0.90)}{1.90^2}.$$

$$\boxed{g\approx9.8\,\mathrm{m\,s^{-2}}}.$$

$$\frac{\Delta T}{T}=\frac{0.2}{38.0}.$$

$g$ 的百分不确定度中，计时贡献为 $2(0.2/38.0)(100)\approx1.1\%$。若计入长度不确定度，求最大不确定度估计时还需加上其百分贡献。

摆球质量加倍，理想小角周期不变。

</details>

### 练习 6：解释与推导 {#question-6-explanation-and-derivation}

**Adapted from OxfordAQA PH03, January 2020, Question 1.**

A trolley connected to a horizontal spring oscillates with negligible damping. Its resultant force is $F=-kx$. State two ways to reduce percentage uncertainty when timing its period. Explain the negative sign, then derive the period equation using Newton's second law and the SHM condition.

<details markdown="1">
<summary>提示</summary>

从 $ma=-kx$ 出发，与 $a=-\omega^2x$ 比较，最后使用 $\omega=2\pi/T$。仅写出周期公式不算推导。

</details>

<details markdown="1">
<summary>解答</summary>

计时多次振动并除以次数，重复计时取平均；在平衡位置设固定标记，以同方向经过标记计完整周期。

负号表示合力与偏离平衡位置的位移方向相反，是回复力。

$$ma=-kx\quad\Rightarrow\quad a=-\frac{k}{m}x.$$

与 $a=-\omega^2x$ 比较，得到 $\omega^2=k/m$。

$$\left(\frac{2\pi}{T}\right)^2=\frac{k}{m}.$$

$$\boxed{T=2\pi\sqrt{\frac{m}{k}}}.$$

两式负号相同，并不意味着 $\omega^2$ 或周期为负。

</details>

### 练习 7：移除悬挂物 {#question-7-removing-a-hanging-mass}

**Adapted from OxfordAQA PH03, June 2024, Question 9.**

A mass $M$ hangs from an ideal vertical spring. A second mass $m$ hangs below it on a light thread. The system is at rest and the spring's extension is $\Delta l$. The thread is cut and the mass $M$ oscillates. Express its period in terms of $M$, $m$, $\Delta l$ and $g$, assuming the spring stays stretched throughout.

<details markdown="1">
<summary>提示</summary>

用剪断细线前的平衡求 $k$。之后是哪一个质量在振动？

</details>

<details markdown="1">
<summary>解答</summary>

剪断前，弹簧支撑两个质量：

$$k\Delta l=(M+m)g.$$

剪断后仅有 $M$ 振动，因此：

$$T=2\pi\sqrt{\frac{M}{k}}.$$

$$\boxed{T=2\pi\sqrt{\frac{M\Delta l}{(M+m)g}}}.$$

新的平衡伸长为 $Mg/k$。物体从新平衡位置下方静止开始，振幅为 $mg/k$；剪断后不能把 $M+m$ 当作振动质量。理想模型中始终伸长需 $M>m$；$M=m$ 是上端点恰好零伸长的临界情况。若 $M<m$，则要求弹簧在上端点附近提供压力。

</details>

## 速查 {#quick-reference}

| 用途 | 方程与适用条件 |
|---|---|
| 简谐条件 | $a=-\omega^2x$；位移从平衡位置量起 |
| 周期与频率 | $\omega=2\pi f=2\pi/T$ |
| 从 $+A$ 静止释放 | $x=A\cos(\omega t)$ |
| 此初始条件下的速度 | $v=-A\omega\sin(\omega t)$ |
| 位移 $x$ 处的速率 | $\lvert v\rvert =\omega\sqrt{A^2-x^2}$；$\lvert x\rvert \leq A$ |
| 最大速率 | $v_{\max}=\omega A$；在平衡位置 |
| 最大加速度大小 | $a_{\max}=\omega^2A$；在两端点 |
| 振动总能量 | $E_{\text{total}}=m\omega^2A^2/2$；无阻尼简谐运动 |
| 弹簧振子周期 | $T=2\pi\sqrt{m/k}$；有效 $k$、理想轻弹簧 |
| 单摆周期 | $T\approx2\pi\sqrt{L/g}$；小角度，长度量到摆球中心 |

继续之前，检查能否解释负号、根据初始条件选择方程、从图上判断方向、推导两种周期，并区分位移周期 $T$ 与能量周期 $T/2$。

[下一课：引力场与卫星](/zh/alevel/a2-physics/gravitational-fields-and-satellites/) · [上一课：圆周运动](/zh/alevel/a2-physics/circular-motion/) · [课程目录](/zh/alevel/a2-physics/) · [PH03 速查](/zh/alevel/a2-physics/quick-reference/)

<details markdown="1">
<summary>来源与试题表述</summary>

本课依据 [OxfordAQA 物理大纲](https://www.oxfordaqa.com/wp-content/uploads/2022/08/oxfordaqa-a-level-physics-specification.pdf) 3.6.2，以 AS 振动系统和必做实验 4 为前置知识，包含大纲要求的周期推导、运动与能量图像。

教材参考：Jim Breithaupt，*Oxford International AQA Examinations: International A Level Physics*，第 16 章，印刷页 285–296。短讲解、图像判读、模型与分层练习参考教师 AS 讲义。

练习 6–7 改编自 PH03 January 2020 Q1、June 2024 Q9；动量检查点改编自 June 2024 Q8。英文原页说明编写时参考过官方评分标准，答案经独立推导与检查，未直接照抄教材答案。

</details>
