---
title: 功与能
layout: subjects
mathjax: true
grade: a2
subject: m2
lang: zh-CN
translation_of: /alevel/a2-mathematics/mechanics/work-and-energy/
permalink: /zh/alevel/a2-mathematics/mechanics/work-and-energy/
toc_headings: h2
study_page: true
---

[A2 力学](/zh/alevel/a2-mathematics/mechanics/) · M2.6 功与能

**碰撞先修：**比较碰撞前后的动能前，先尝试 [AS 动量桥接](/zh/alevel/a2-mathematics/mechanics/momentum-bridge/)。使用动量守恒前，检查系统所受外力冲量，并讨论所有可能的方向分支。

求力所做的功，用功率解决车辆运动问题，再比较动能和势能来求速率与距离。

- **学习：**从[力做功](#work-done-by-a-force)开始，再学习[功率](#power)和[功能原理](#the-work-energy-principle)。
- **作业帮助：**说清是哪一个力做功；选定固定的势能零点，检查是否存在阻力。
- **复习：**关闭解答尝试[练习](#practice)，检查符号、单位及机械能是否守恒。

教材：第 14 章 *Work, Power and Energy*，14.1–14.3 节（印刷 pp.220–237）。本课术语为功（work done）、驱动力（driving force）、功率（power）、动能（kinetic energy）、势能（potential energy）、功能原理（work-energy principle）和机械能守恒（conservation of mechanical energy）。

**开始前：**复习[牛顿运动定律](/zh/alevel/a2-mathematics/mechanics/newtons-laws-of-motion/)与[力、平衡和摩擦](/zh/alevel/a2-mathematics/mechanics/forces-equilibrium-and-friction/)。未另行给定时取 $g=9.8\,\mathrm{m\,s^{-2}}$。计算中保留精确值；本课自拟题最终数值默认三位有效数字、角度一位小数，另有要求时依题意。

未另作说明时，把物体看作质点。全部例题和练习都是自拟题，不是官方真题，不设官方分值。图示用于表达模型，未按比例绘制。

<!-- motion-sources:start -->
## 来源与范围 {#sources-and-scope}

**范围与评价参照：**[OxfordAQA 9660 大纲 v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf) M2.6；方法参照为 MA05 January 2025 Q1、Q7(a)、Q8，已配对阅读[题卷](/assets/pdf/fx-cg50/references/oxfordaqa-ma05-2025-january-question-paper.pdf)与[评分标准 Version 1.0 Final](/assets/pdf/fx-cg50/references/oxfordaqa-ma05-2025-january-mark-scheme.pdf)。本页题目仍为自拟题，不设官方分值；默认精度见上文，真题按该卷及该题处理。穿珠导线例题只使用能量和持续的轨迹约束，不引入 FM05 竖直非匀速圆周的受力方程。
<!-- motion-sources:end -->

## 力所做的功 {#work-done-by-a-force}

对于**恒力**和直线运动，功等于力在运动方向的分量乘以移动距离：

$$\boxed{W=Fs\cos\theta}.$$

其中 $F$ 是力的大小，$s$ 是距离，$\theta$ 是力与运动方向的夹角。恒力在位移 $\mathbf d$ 上做功的向量表达式为：

$$W=\mathbf F\cdot\mathbf d.$$

功是标量，单位为**焦耳（J）**；一焦耳等于一牛顿米。若力随运动改变，不能用某一时刻的力乘全程距离；应把各段的功相加。沿直线运动时，可对沿运动方向的力分量关于位移积分。

| 力的方向 | 该力所做的功 |
| --- | --- |
| 与运动同向 | 正功：向物体输入能量 |
| 与运动反向 | 负功：从物体机械运动中移走能量 |
| 垂直于运动方向 | 零功 |

恒定阻力 $f$ 在距离 $s$ 内始终反向时，**阻力所做的功（work done by resistance）**为 $-fs$；**克服阻力所做的功（work done against resistance）**是正的 $fs$。两种措辞对应不同符号。

物体沿固定平面运动时，法向反力垂直于运动方向，不做功；摩擦沿接触面作用，可以做功。

![物块向右运动，受到斜向拉力与反向摩擦；功由水平力分量和移动距离计算](/assets/img/a2-math-mech/work-force-components.svg)

### 例题 1：哪些力做功 {#example-1-which-forces-do-work}

**Question:** a block moves $3\,\mathrm m$ to the right on a fixed horizontal plane. A constant force of $40\,\mathrm N$ pulls at $60^\circ$ above horizontal. Friction is $12\,\mathrm N$. Find the work done by each force and the total work.

拉力的水平分量为 $40\cos60^\circ=20\,\mathrm N$：

$$\boxed{W_{\text{pull}}=40(3)\cos60^\circ=60\,\mathrm J}.$$

$$\boxed{W_{\text{friction}}=-12(3)=-36\,\mathrm J}.$$

重力和法向反力都竖直，各自做功为零。因此：

$$\boxed{W_{\text{total}}=60-36=24\,\mathrm J}.$$

**克服**摩擦所做的功为 $36\,\mathrm J$。

**检查：**水平合力为 $20-12=8\,\mathrm N$，其功为 $8(3)=24\,\mathrm J$。若用 $40(3)$，就误把不沿运动方向的竖直分量也计入了功。

## 克服重力做功 {#work-against-gravity}

在地表附近，把重力 $mg$ 看作常量。物体竖直上升 $h$ 时，**重力所做的功**为 $-mgh$，**克服重力所做的功**为 $mgh$。

斜面问题使用**竖直高度变化**，不能把沿斜面的距离直接当高度。若沿斜面上升距离为 $s$，斜面与水平夹角为 $\alpha$：

$$h=s\sin\alpha,\qquad W_{\text{weight}}=-mgs\sin\alpha.$$

下降时重力做正功。提升过程中物体还可能增加动能，所以提升力做的功不一定只有 $mgh$。

### 例题 2：匀速提升 {#example-2-lifting-at-constant-speed}

**Question:** a load of mass $20\,\mathrm{kg}$ is lifted vertically through $2\,\mathrm m$ at constant speed in $4\,\mathrm s$. Ignore resistance. Find the work done by the lifting force and by weight, then find the average power of the lifting force.

合力为零，因此提升力为 $20g=196\,\mathrm N$。

$$\boxed{W_{\text{lift}}=196(2)=392\,\mathrm J}.$$

$$\boxed{W_{\text{weight}}=-392\,\mathrm J}.$$

$$\boxed{P_{\text{average}}=\frac{392}{4}=98\,\mathrm W}.$$

**检查：**总功为零，与动能不变一致。速率和功率为：

$$v=\frac24=0.5\,\mathrm{m\,s^{-1}},\qquad P=196(0.5)=98\,\mathrm W.$$

## 功率 {#power}

**功率（power）**是做功的快慢，单位为**瓦特（W）**；一瓦特等于一焦耳每秒。

$$\boxed{P_{\text{average}}=\frac{\text{work done}}{\text{time taken}}}.$$

瞬时功率为：

$$P=\frac{\mathrm dW}{\mathrm dt}.$$

若沿运动方向的力分量为 $F_{\parallel}$，速率为 $v$：

$$\boxed{P=F_{\parallel}v}.$$

对于驱动力 $D$ 与运动同向的车辆，发动机提供的有效机械功率为 $P=Dv$。这是**驱动力**的功率，不是合力的功率；阻力以 $fv$ 的速率移走机械能。

先把单位换成米每秒和瓦特：

$$1\,\mathrm{kW}=1000\,\mathrm W,\qquad 1\,\mathrm{km\,h^{-1}}=\frac5{18}\,\mathrm{m\,s^{-1}}.$$

平均功率不一定等于某一瞬间的功率。若功率恒定且 $v>0$，驱动力 $D=P/v$ 随速率改变；此式不能用于 $v=0$。有限大小的力在静止瞬间的机械功率为零，但发动机仍可能消耗燃料。

### 例题 3：车辆的功与功率 {#example-3-work-and-power-of-a-vehicle}

**Question:** a vehicle travels at a steady $54\,\mathrm{km\,h^{-1}}$ on a level road. The constant resistance is $2400\,\mathrm N$. Find the engine's mechanical power and the work done by its driving force in $40\,\mathrm s$.

$$v=54\left(\frac5{18}\right)=15\,\mathrm{m\,s^{-1}}.$$

匀速时，驱动力平衡阻力：$D=2400\,\mathrm N$。

$$\boxed{P=2400(15)=36000\,\mathrm W=36\,\mathrm{kW}}.$$

$$\boxed{W=P(40)=1.44\times10^6\,\mathrm J=1.44\,\mathrm{MJ}}.$$

**检查：**经过的距离为 $15(40)=600\,\mathrm m$，用 $D(600)$ 得到相同的功。虽然发动机做正功，合力与动能变化都为零。

## 斜坡道路上的车辆 {#vehicles-on-inclined-roads}

设车辆上坡，驱动力 $D$ 沿坡向上，恒定阻力 $f$ 沿坡向下。取上坡为正：

$$D-f-mg\sin\alpha=ma.$$

若机械功率为 $P$，速率 $v>0$：

$$\boxed{\frac Pv-f-mg\sin\alpha=ma}.$$

求给定可用功率下的最大稳定速率时，令 $a=0$。若采用恒定阻力模型：

$$v_{\text{steady}}=\frac{P}{f+mg\sin\alpha}.$$

对于下坡运动，改取下坡为正：

$$\frac Pv+mg\sin\alpha-f=ma.$$

在这个向前驱动的下坡模型中，正的稳定速率要求 $f>mg\sin\alpha$。若重力沿坡分量已超过阻力，继续向前驱动就无法维持匀速，需要制动或采用不同的阻力模型。

### 例题 4：上坡的稳定速率与加速度 {#example-4-steady-speed-and-acceleration-uphill}

**Question:** a car of mass $1000\,\mathrm{kg}$ has mechanical power $29.4\,\mathrm{kW}$. Constant resistance is $980\,\mathrm N$. The uphill road angle satisfies:

$$\sin\alpha=\frac1{20}.$$

Find its maximum steady speed uphill and its acceleration when moving uphill at $10\,\mathrm{m\,s^{-1}}$. Also find the maximum steady speeds on a level road and down the same slope at this power.

重力沿坡向下的分量为 $1000g/20=490\,\mathrm N$。上坡匀速时：

$$\frac{29400}{v}=980+490,\qquad \boxed{v=20\,\mathrm{m\,s^{-1}}}.$$

在 $v=10$ 时，驱动力为 $29400/10=2940\,\mathrm N$：

$$1000a=2940-980-490,\qquad \boxed{a=1.47\,\mathrm{m\,s^{-2}}}.$$

在水平道路上：

$$\boxed{v=\frac{29400}{980}=30\,\mathrm{m\,s^{-1}}}.$$

下坡时，重力帮助驱动力：

$$\frac{29400}{v}+490-980=0,\qquad \boxed{v=60\,\mathrm{m\,s^{-1}}}.$$

**检查：**下坡时 $f-mg\sin\alpha=490>0$，所以该模型存在正的稳定速率。这些计算假定阻力恒定；实际阻力常随速率增加。

## 动能与势能 {#kinetic-and-potential-energy}

**动能（kinetic energy，KE）**是物体因运动而具有的能量：

$$\boxed{KE=\frac12mv^2}.$$

使用**速率**，即速度的大小。动能是标量，不能为负；静止时动能为零，速率加倍则动能变为四倍。

为理解公式的来源，考虑恒定合力使质点由静止加速并通过距离 $s$。由 $F=ma$ 和 $v^2=2as$，它所做的功为：

$$Fs=mas=\frac12mv^2.$$

**重力势能（gravitational potential energy，PE）**是在恒定重力场中与竖直位置相关的能量：

$$\boxed{PE=mgh}.$$

选择**固定的势能零点**，从该水平面竖直向上量 $h$。在零点下方，势能可以为负。更换零点会改变势能的数值，但不会改变两个位置间的势能差。

在本模型中，质点的**机械能（mechanical energy，ME）**为 $KE+PE$。功与这两种能量都以焦耳为单位。

### 例题 5：向量速度与势能零点 {#example-5-vector-velocity-and-a-zero-level}

**Question:** a particle of mass $2\,\mathrm{kg}$ has velocity

$$\mathbf v=(3\mathbf i+4\mathbf j)\,\mathrm{m\,s^{-1}}.$$

It is $2.5\,\mathrm m$ above the ground. Find its kinetic, potential and mechanical energy using the ground as the zero level. Then use a fixed zero level $3\,\mathrm m$ above the ground.

速率为 $\sqrt{3^2+4^2}=5\,\mathrm{m\,s^{-1}}$：

$$\boxed{KE=\frac12(2)(5^2)=25\,\mathrm J}.$$

取地面为零点时：

$$\boxed{PE=2g(2.5)=49\,\mathrm J},\qquad \boxed{ME=74\,\mathrm J}.$$

换用新的零点后，$h=2.5-3=-0.5\,\mathrm m$：

$$\boxed{PE=-9.8\,\mathrm J},\qquad \boxed{ME=15.2\,\mathrm J}.$$

**检查：**动能不变。这个质点在任意位置的势能都减小 $2g(3)=58.8\,\mathrm J$，所以位置间的能量差不变。不能把速度分量直接相加来求速率。

## 功能原理 {#the-work-energy-principle}

教材所用的**功能原理（work-energy principle）**，把重力以外各力的功与机械能变化作比较；重力已通过势能计入。

$$\boxed{W_{\text{other forces}}=\Delta(KE+PE)}.$$

$\Delta$ 表示末值减初值。左边计入驱动力、摩擦、张力及其他做功的力；右边已有势能时，左边就不要再计重力做功。

等价的另一种写法是把**包括重力在内的全部力**的功，与动能变化比较：

$$\boxed{W_{\text{all forces}}=\Delta KE}.$$

选定一种写法后贯穿整个计算。**不能既在功中计重力，又把同一次势能变化重复计入。**上升 $h$ 时，两种形式的联系为 $W_{\text{weight}}=-\Delta PE=-mgh$。

若驱动力做功 $W_D$，恒定阻力 $f$ 作用距离为 $s$：

$$W_D-fs=(KE_{\text{final}}+PE_{\text{final}})-(KE_{\text{initial}}+PE_{\text{initial}}).$$

若只有阻力做非重力功，则化为：

$$\text{mechanical energy lost}=fs.$$

机械能已经转移到其他形式，例如内能增加，并没有凭空消失。

### 例题 6：驱动、摩擦与停止 {#example-6-driving-friction-and-stopping}

**Question:** a block of mass $4\,\mathrm{kg}$ moves at $8\,\mathrm{m\,s^{-1}}$ on a fixed rough horizontal plane. The coefficient of friction is $0.2$. A horizontal force of $12\,\mathrm N$ acts forwards for $5\,\mathrm m$ and is then removed. Find the speed after the first $5\,\mathrm m$ and the further distance before the block stops.

法向反力为 $4g=39.2\,\mathrm N$，滑动摩擦为 $0.2(39.2)=7.84\,\mathrm N$，势能没有变化。

$$12(5)-7.84(5)=\frac12(4)v^2-\frac12(4)(8^2).$$

$$2v^2=148.8,\qquad \boxed{v=\sqrt{74.4}\approx8.63\,\mathrm{m\,s^{-1}}}.$$

撤去拉力后，摩擦移走剩余的 $148.8\,\mathrm J$ 动能：

$$7.84s=148.8,\qquad \boxed{s\approx19.0\,\mathrm m}.$$

**检查：**拉动阶段 $a=(12-7.84)/4=1.04\,\mathrm{m\,s^{-2}}$，故 $v^2=8^2+2(1.04)(5)=74.4$。在撤力处把运动分段，停止阶段不再计入 $12\,\mathrm N$ 的拉力。

### 例题 7：沿粗糙斜面上拉 {#example-7-work-up-a-rough-plane}

**Question:** a block of mass $5\,\mathrm{kg}$ is pulled $4\,\mathrm m$ up a fixed plane inclined at $30^\circ$ to horizontal. Its speed rises from $2$ to $6\,\mathrm{m\,s^{-1}}$. The pulling force is constant and parallel to the plane. Friction is $8\,\mathrm N$. Find the work done by the pulling force and its magnitude.

![物块沿粗糙斜面上移，标出沿坡距离 s 和竖直高度 h；驱动力的功用于增加动能、势能及克服摩擦](/assets/img/a2-math-mech/work-energy-slope.svg)

竖直上升高度为 $h=4\sin30^\circ=2\,\mathrm m$。

$$\Delta KE=\frac12(5)(6^2-2^2)=80\,\mathrm J.$$

$$\Delta PE=5g(2)=98\,\mathrm J,\qquad fs=8(4)=32\,\mathrm J.$$

设拉力为 $D$。由功能原理：

$$4D-32=80+98.$$

$$\boxed{W_D=210\,\mathrm J},\qquad \boxed{D=52.5\,\mathrm N}.$$

**检查：**用全部力做功的形式得到 $210-32-98=80\,\mathrm J=\Delta KE$。此外，$a=(6^2-2^2)/(2\cdot4)=4$，且 $52.5-8-5g\sin30^\circ=5(4)$。

## 机械能守恒 {#conservation-of-mechanical-energy}

当重力以外各力做的总功为零时，机械能守恒：

$$\boxed{KE_{\text{initial}}+PE_{\text{initial}}=KE_{\text{final}}+PE_{\text{final}}}.$$

这适用于无空气阻力的抛体，或质点沿**固定、光滑**轨道运动且法向反力垂直运动方向的情况；有摩擦耗能或发动机输入能量时，不能原样套用。

质点上升竖直高度 $h$，初速率为 $u$，末速率为 $v$ 时：

$$\frac12mu^2=\frac12mv^2+mgh,\qquad v^2=u^2-2gh.$$

下降竖直高度 $h$ 时，末项符号改变，得到 $v^2=u^2+2gh$，质量约去。能量给出**速率**，不能单独给出方向或时间。抛体最高点仍有水平速度，因此该处速率不一定为零。

### 例题 8：穿在固定光滑导线上的珠子 {#example-8-a-bead-on-a-fixed-smooth-wire}

**Question:** a bead is threaded on a smooth circular wire of radius $1\,\mathrm m$, fixed in a vertical plane. It is projected from the lowest point $A$ at $4.9\,\mathrm{m\,s^{-1}}$. Ignore air resistance. Find the height above $A$ where it first comes to rest and its height relative to the centre $O$.

![珠子穿在固定的竖直光滑圆形导线上，由 A 上升到 B；法向反力垂直轨迹，h 表示竖直上升高度](/assets/img/a2-math-mech/energy-smooth-wire.svg)

取 $A$ 为势能零点。法向反力不做功，所以：

$$\frac12m(4.9^2)=mgh.$$

$$\boxed{h=\frac{4.9^2}{2g}=1.225\,\mathrm m\approx1.23\,\mathrm m}.$$

圆心高出最低点 $1\,\mathrm m$，该最低点为 $A$，因此珠子停止处为：

$$\boxed{1.225-1=0.225\,\mathrm m\text{ above }O}.$$

**检查：**$0<h<2$，在圆形导线的总高度范围内，转折点确实位于导线上。珠子穿在导线上，因此能保持圆形轨迹约束；若只是放在开放轨道上，就可能失去接触，能量计算本身不能检查接触条件。

## 练习 {#practice}

先尝试，再展开提示。说清模型与哪个力做功，最后用受力、单位或能量比较核验答案。

### Q1：功的正负 {#q1-signed-work}

A block moves $4\,\mathrm m$ to the right on a fixed horizontal plane. A constant force of $30\,\mathrm N$ pulls at $60^\circ$ above horizontal. Friction is $10\,\mathrm N$. Find the work done by the pull, the work done by friction, the work done against friction and the total work.

<details markdown="1">
<summary>提示</summary>

把拉力分解到运动方向；重力和法向反力都垂直于运动方向。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$\boxed{W_{\text{pull}}=30(4)\cos60^\circ=60\,\mathrm J}.$$

$$\boxed{W_{\text{friction}}=-40\,\mathrm J},\qquad \boxed{W_{\text{against friction}}=40\,\mathrm J}.$$

$$\boxed{W_{\text{total}}=20\,\mathrm J}.$$

**检查：**水平合力为 $30\cos60^\circ-10=5\,\mathrm N$，其功为 $5(4)=20\,\mathrm J$。

</details>

### Q2：加速上升的提升 {#q2-a-lift-that-speeds-up}

A constant vertical force lifts a particle of mass $10\,\mathrm{kg}$ from rest through $3\,\mathrm m$. Its final speed is $4\,\mathrm{m\,s^{-1}}$. Ignore resistance. Find the work done by the lifting force and the magnitude of the force.

<details markdown="1">
<summary>提示</summary>

提升力必须同时提供动能与势能的增加。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$\Delta KE=\frac12(10)(4^2)=80\,\mathrm J,\qquad \Delta PE=10g(3)=294\,\mathrm J.$$

$$\boxed{W_{\text{lift}}=374\,\mathrm J},\qquad \boxed{F=\frac{374}{3}\approx125\,\mathrm N}.$$

**检查：**用 $v^2=2as$ 求加速度，再用 $F-mg=ma$：

$$a=\frac{4^2}{2\cdot3}=\frac83,\qquad F=10g+10\left(\frac83\right)=\frac{374}{3}.$$

若只用 $mgh$，就漏掉了动能的增加。

</details>

### Q3：粗糙水平面上的斜拉力 {#q3-an-angled-pull-on-a-rough-plane}

A block of mass $5\,\mathrm{kg}$ is pulled from rest through $5\,\mathrm m$ on a fixed rough horizontal plane. The constant pulling force is $25\,\mathrm N$ at an acute angle $\theta$ above horizontal, where $\cos\theta=4/5$. The coefficient of friction is $0.2$. Find the normal reaction, the work done by the pulling force and the final speed. Assume the block remains in contact with the plane and slides forwards.

<details markdown="1">
<summary>提示</summary>

向上的拉力分量使法向反力减小；先用正确反力求摩擦，再使用功能原理。

</details>

<details markdown="1">
<summary>解答与检查</summary>

由 $\sin\theta=3/5$：

$$\boxed{R=5g-25\left(\frac35\right)=34\,\mathrm N}.$$

摩擦为 $0.2R=6.8\,\mathrm N$。拉力所做的功为：

$$\boxed{W_D=25(5)\left(\frac45\right)=100\,\mathrm J}.$$

$$100-6.8(5)=\frac12(5)v^2,\qquad \boxed{v=\sqrt{26.4}\approx5.14\,\mathrm{m\,s^{-1}}}.$$

**检查：**$R>0$，向前的力分量 $20\,\mathrm N$ 大于摩擦。此外，$a=(20-6.8)/5=2.64$，故 $v^2=2(2.64)(5)=26.4$。

</details>

### Q4：发动机的瞬时功率 {#q4-engine-power-at-an-instant}

A car of mass $800\,\mathrm{kg}$ moves on a level road against constant resistance $400\,\mathrm N$. Its acceleration is $0.5\,\mathrm{m\,s^{-2}}$ when its speed is $72\,\mathrm{km\,h^{-1}}$. Find the engine's mechanical power at that instant. If the engine can supply $24\,\mathrm{kW}$, find its maximum steady speed in this model.

<details markdown="1">
<summary>提示</summary>

先从 $D-f=ma$ 求驱动力，再用 $P=Dv$；求稳定速率时才令 $a=0$。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$v=72\left(\frac5{18}\right)=20\,\mathrm{m\,s^{-1}}.$$

$$D=800(0.5)+400=800\,\mathrm N.$$

$$\boxed{P=800(20)=16000\,\mathrm W=16\,\mathrm{kW}}.$$

在最大稳定速率处，$D=400$：

$$\boxed{v=\frac{24000}{400}=60\,\mathrm{m\,s^{-1}}}.$$

**检查：**第一个瞬间，阻力以 $400(20)=8\,\mathrm{kW}$ 的功率移走机械能；另外 $8\,\mathrm{kW}$ 增加动能，因为 $mav=800(0.5)(20)=8000\,\mathrm W$。

</details>

### Q5：有阻力的竖直下落 {#q5-falling-with-resistance}

A particle of mass $3\,\mathrm{kg}$ falls vertically through a liquid of depth $4\,\mathrm m$. Its speed increases from $2$ to $5\,\mathrm{m\,s^{-1}}$. The liquid exerts a constant upward resistance $f$. Find $f$, the work done by weight and the work done by resistance.

<details markdown="1">
<summary>提示</summary>

势能损失既提供动能增加，也提供克服阻力所需的能量。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$\text{PE lost}=3g(4)=117.6\,\mathrm J.$$

$$\Delta KE=\frac12(3)(5^2-2^2)=31.5\,\mathrm J.$$

$$4f=117.6-31.5=86.1,\qquad \boxed{f\approx21.5\,\mathrm N}.$$

$$\boxed{W_{\text{weight}}=117.6\,\mathrm J},\qquad \boxed{W_{\text{resistance}}=-86.1\,\mathrm J}.$$

**检查：**总功 $117.6-86.1=31.5\,\mathrm J=\Delta KE$。阻力小于重力 $29.4\,\mathrm N$，与向下速率增加一致。核验时用未舍入值 $f=21.525\,\mathrm N$。

</details>

### Q6：沿粗糙斜面下滑 {#q6-sliding-down-a-rough-plane}

A block of mass $2\,\mathrm{kg}$ is released from rest on a fixed inclined plane where $\sin\alpha=1/4$. A constant frictional force of $2\,\mathrm N$ opposes its downward motion. Find its speed after moving $4\,\mathrm m$ down the plane, and the distance down the plane when its speed reaches $5\,\mathrm{m\,s^{-1}}$.

<details markdown="1">
<summary>提示</summary>

沿坡距离为 $s$ 时，竖直下降量为 $s/4$；动能增加等于势能损失减去 $2s$。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$\frac12(2)v^2=2g\left(\frac s4\right)-2s=2.9s.$$

在 $s=4$ 时：

$$\boxed{v=\sqrt{11.6}\approx3.41\,\mathrm{m\,s^{-1}}}.$$

在 $v=5$ 时：

$$25=2.9s,\qquad \boxed{s\approx8.62\,\mathrm m}.$$

**检查：**沿坡向下的合力为 $2g/4-2=2.9\,\mathrm N$，所以 $a=1.45\,\mathrm{m\,s^{-2}}$，进而 $v^2=2as=2.9s$。这里机械能不守恒。

</details>

### Q7：从地面上方向上竖直发射 {#q7-vertical-projection-from-above-the-ground}

A ball is projected vertically upwards at $14.7\,\mathrm{m\,s^{-1}}$ from a point $1\,\mathrm m$ above the ground. Ignore air resistance. Find its greatest height above the ground and its speed just before hitting the ground.

<details markdown="1">
<summary>提示</summary>

这是纯竖直发射，因此在最高点瞬间静止。取地面为固定势能零点。

</details>

<details markdown="1">
<summary>解答与检查</summary>

在最大高度 $H$ 处：

$$\frac12m(14.7^2)+mg(1)=mgH.$$

$$\boxed{H=1+\frac{14.7^2}{2g}=12.025\,\mathrm m\approx12.0\,\mathrm m}.$$

在地面处：

$$\frac12mv^2=\frac12m(14.7^2)+mg(1).$$

$$\boxed{v=\sqrt{235.69}\approx15.4\,\mathrm{m\,s^{-1}}}.$$

**检查：**地面低于发射点，因此撞地速率大于发射速率。撞地速度向下；能量本身只给出速率。

</details>

### Q8：光滑导线上的两种运动 {#q8-two-motions-on-a-smooth-wire}

A bead is threaded on a smooth circular wire of radius $0.8\,\mathrm m$, fixed in a vertical plane. Ignore air resistance. (a) It is released from rest at a point level with the centre. Find its speed at the lowest point. (b) What initial speed at the lowest point gives just enough energy to rise through the full vertical height of the wire?

<details markdown="1">
<summary>提示</summary>

(a) 的竖直下降量是一个半径；(b) 的竖直上升量是两个半径。

</details>

<details markdown="1">
<summary>解答与检查</summary>

**(a)** $\frac12mv^2=mg(0.8)$：

$$\boxed{v=\sqrt{15.68}\approx3.96\,\mathrm{m\,s^{-1}}}.$$

**(b)** $\frac12mu^2=mg(1.6)$：

$$\boxed{u=\sqrt{31.36}=5.6\,\mathrm{m\,s^{-1}}}.$$

**检查：**两问的质量都约去；法向反力不做功。珠子穿在导线上，因此保持约束；开放轨道上的质点或绳系质点还需另查接触或张力条件。

(b) 给出越过最高点的**临界速率**。在理想模型的临界情况下，珠子趋近最高点时速率趋于零；要真正越过最高点，初速率必须更大。

</details>

<!-- motion-transfer:start -->
## 独立选择方法 {#independent-method-choice}

**自拟诊断任务。**题目不指定方法，先自行选择。首次尝试前，保持推理提示和反馈折叠。

**Question:** A $2\,\mathrm{kg}$ block is projected at $6\,\mathrm{m\,s^{-1}}$ up a fixed straight rough slope with $\sin\alpha=1/4$. While it slides upwards, a constant frictional force of $1\,\mathrm N$ opposes motion. There is no driving force and air resistance is ignored. Find its speed after $5\,\mathrm m$ and decide whether it can first reach a marker $8\,\mathrm m$ up the slope before stopping. A student writes $36+2g(s/4)-s=v^2$. Explain the error and find where the upward motion ends. Do not model the subsequent motion.

<details markdown="1">
<summary>推理提示</summary>

题目没有要求时间。说清初始能量来自哪里，以及上滑时能量用于哪两项；开平方前先判断该位置能否到达。

</details>

<details markdown="1">
<summary>反馈与独立核验</summary>

功能原理可避开求时间。固定取发射高度为势能零点，通过势能增加计入一次重力：

$$36=v^2+2g\left(\frac s4\right)+s,\qquad v^2=36-5.9s.$$

在 $s=5$ 时，$v^2=6.5$，所以 $\boxed{v=\sqrt{6.5}\approx2.55\,\mathrm{m\,s^{-1}}}$。若令 $s=8$，上滑模型给出 $v^2=-11.2$，因此这一阶段不能到达标记。上滑结束于：

$$\boxed{s_{\text{stop}}=\frac{36}{5.9}=\frac{360}{59}\approx6.10\,\mathrm m}.$$

学生的重力项符号错误：上升需要能量，而非由重力提供能量；等价地，重力做负功。若算出负的 $v^2$，不能取绝对值再开方，应找出停止点并终止这一阶段。后续静摩擦或反向运动需要另建模型。

独立沿上坡方向列式：$2a=-2g/4-1=-5.9$，因此 $a=-2.95\,\mathrm{m\,s^{-2}}$。再用 $v^2=6^2+2as$ 得到同一表达式与停止距离。第二种方法同时核验了符号与算术。

</details>

### 再尝试：改变问题结构 {#retry-change-the-structure}

**Question:** A $2\,\mathrm{kg}$ block starts from rest and slides $4\,\mathrm m$ down a fixed slope with $\sin\alpha=1/4$, against constant friction $1\,\mathrm N$. It then enters a fixed smooth horizontal track through a smooth join of negligible height change; assume no energy is lost at the join. Find its speed on entering the horizontal track and after travelling a further $3\,\mathrm m$ along it. Explain whether friction from the slope belongs in the second stage. Ignore air resistance.

<details markdown="1">
<summary>再尝试提示</summary>

在接触面改变处把能量账分段，重新判断水平段有哪些力做功。

</details>

<details markdown="1">
<summary>再尝试反馈与检查</summary>

斜面阶段的竖直下降量为 $1\,\mathrm m$：

$$2g(1)-1(4)=\frac12(2)v^2,\qquad v^2=15.6.$$

$$\boxed{v_{\text{entry}}=\sqrt{15.6}\approx3.95\,\mathrm{m\,s^{-1}}},\qquad \boxed{v_{\text{after }3\,\mathrm m}=\sqrt{15.6}\approx3.95\,\mathrm{m\,s^{-1}}}.$$

水平段光滑，重力与反力不做功，也无摩擦，故速率不变。不能把斜面上的 $1\,\mathrm N$ 摩擦带入第二阶段。独立受力核验：斜面上 $a=(2g/4-1)/2=1.95\,\mathrm{m\,s^{-2}}$，所以 $v^2=2(1.95)(4)=15.6$；水平段合力为零。要在转向时保留该速率，必须使用题目给定的光滑、无能量损失连接假设。

</details>
<!-- motion-transfer:end -->

## 方法小结 {#method-summary}

- **功：**说清力的身份，使用沿运动方向的分量；区分阻力做功与克服阻力做功。
- **功率：**平均用 $W/t$，瞬时驱动力用 $Dv$；将 kW 换成 W，km/h 换成 m/s。
- **车辆运动：**将 $D=P/v$ 与受力方程联立；只在稳定速率处令 $a=0$。
- **能量：**动能用速率，势能用固定的竖直零点；重力在总功或势能变化中只计一次。
- **守恒：**检查其他力做的总功是否为零。有阻力时，机械能损失等于克服阻力所做的功。
- **核验：**检查符号、单位、运动方向、相对零点的高度和接触能否保持。

**学习路线：**[上一课：抛体](/zh/alevel/a2-mathematics/mechanics/projectiles/) · [下一课：匀速圆周运动](/zh/alevel/a2-mathematics/mechanics/uniform-circular-motion/) · [力学单元入口](/zh/alevel/a2-mathematics/mechanics/)。
