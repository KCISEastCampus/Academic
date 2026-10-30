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
reading_layout: true
---

[A2 力学](/zh/alevel/a2-mathematics/mechanics/) · MA05 · M2.6
{:.lesson-meta}

汽车保持相同速率，发动机却还在消耗燃料；物体没有发动机，下落时也会越来越快。**能量从哪里来，又到哪里去？** 功用来记录力转移了多少能量，功率则说明转移有多快。

本课要学会选出力沿位移的分量，比较动能与势能，并判断某个速率或距离是否可能。先学[力做功](#work-done-by-a-force)，再看[功率](#power)和[能量账本](#the-work-energy-principle)。复习时先关闭帮助，尝试[练习](#practice)与[独立任务](#independent-method-choice)。

需要简单方程、直角三角形、速度向量的大小和 $F=ma$。有断点可回补[力的分量](/zh/alevel/a2-mathematics/mechanics/forces-equilibrium-and-friction/#the-resultant-of-coplanar-forces)、[摩擦](/zh/alevel/a2-mathematics/mechanics/forces-equilibrium-and-friction/#friction-and-limiting-equilibrium)或[向量与运动学](/zh/alevel/a2-mathematics/mechanics/vectors-and-kinematics/)。未另行说明时采用质点模型，取 $g=9.8\,\mathrm{m\,s^{-2}}$。
{:.lesson-meta}

全部示范与任务均为 **Self-written / 自拟题**，无官方分值。计算中先保留精确值；最终数值默认三位有效数字，角度一位小数，题内另有要求时依题意。图未按比例绘制。[来源与范围](#sources-and-scope)放在页末。
{:.lesson-meta}

## 力所做的功 {#work-done-by-a-force}

想象在地面上拉箱子。同样的距离，沿运动方向的拉力越大，转移的能量越多；同样的拉力，移动越远，转移的能量也越多。如果箱子始终留在地面，竖直拉力方向上并没有位移。所以功既要看**力**，也要看**位移**，不能只看力有多大。

对于**恒力**和直线运动，功等于力在运动方向的分量乘以移动距离：

$$\boxed{W=Fs\cos\theta}.$$

其中 $F$ 是力的大小，$s$ 是距离，$\theta$ 是把**这个力与位移**的起点放在一起时，两箭头的夹角。它不一定是斜坡角，也不一定是力与竖直的夹角。位移向左，就从向左的箭头量角，即使力朝右。力分量三角形中，邻边为 $F\cos\theta$；再乘移动距离 $s$，就得到上式。恒力在位移 $\mathbf d$ 上做功的向量表达式为：

$$W=\mathbf F\cdot\mathbf d.$$

功是标量，单位为**焦耳（J）**；一焦耳等于一牛顿米。单个力的功可以为正、负或零；决定动能是否增大的是所有力做功的**总和**。不做功的力仍可能改变方向，或改变支持力，进而影响摩擦。

力随运动改变时，不能用某一时刻的力乘全程距离。M2.6 要求恒力做功；沿路径对力分量积分是更一般的延伸。不过，若阻力虽然与速率有关，某一段的速率却保持不变，这一段阻力就是恒定的，仍可用力乘距离求功。

| 力的方向 | 该力所做的功 |
| --- | --- |
| 与运动同向 | 正功：向物体输入能量 |
| 与运动反向 | 负功：从物体机械运动中移走能量 |
| 垂直于运动方向 | 零功 |

恒定阻力 $f$ 在距离 $s$ 内始终反向时，**阻力所做的功（work done by resistance）**为 $-fs$；**克服阻力所做的功（work done against resistance）**是正的 $fs$。两种措辞对应不同符号。

物体沿固定平面运动时，法向反力垂直于运动方向，不做功；摩擦沿接触面作用，可以做功。

![物块向右运动，受到斜向拉力与反向摩擦；功由水平力分量和移动距离计算](/assets/img/a2-math-mech/work-force-components.svg)

<div class="worked-example" markdown="1">

### 例题 1：哪些力做功 {#example-1-which-forces-do-work}

**Question:** a block moves $3\,\mathrm m$ to the right on a fixed horizontal plane. A constant force of $40\,\mathrm N$ pulls at $60^\circ$ above horizontal. Friction is $12\,\mathrm N$. Find the work done by each force and the total work.

拉力的水平分量为 $40\cos60^\circ=20\,\mathrm N$：

$$\boxed{W_{\text{pull}}=40(3)\cos60^\circ=60\,\mathrm J}.$$

$$\boxed{W_{\text{friction}}=-12(3)=-36\,\mathrm J}.$$

重力和法向反力都竖直，各自做功为零。因此：

$$\boxed{W_{\text{total}}=60-36=24\,\mathrm J}.$$

**克服**摩擦所做的功为 $36\,\mathrm J$。

**检查：**水平合力为 $20-12=8\,\mathrm N$，其功为 $8(3)=24\,\mathrm J$。若用 $40(3)$，就误把不沿运动方向的竖直分量也计入了功。

</div>

## 克服重力做功 {#work-against-gravity}

在地表附近，把重力 $mg$ 看作常量。物体竖直上升 $h$ 时，**重力所做的功**为 $-mgh$，**克服重力所做的功**为 $mgh$。

斜面问题使用**竖直高度变化**，不能把沿斜面的距离直接当高度。若沿斜面上升距离为 $s$，斜面与水平夹角为 $\alpha$：

$$h=s\sin\alpha,\qquad W_{\text{weight}}=-mgs\sin\alpha.$$

也可以取重力沿坡向下的分量 $mg\sin\alpha$，乘沿坡向上的距离，再加负号，结果相同。固定光滑斜面的反力没有沿坡分量。[斜面选轴](../forces-equilibrium-and-friction/#slope-components)说明了这个分力三角形。

下降时重力做正功。提升过程中物体还可能增加动能，所以提升力做的功不一定只有 $mgh$。

<div class="worked-example" markdown="1">

### 例题 2：匀速提升 {#example-2-lifting-at-constant-speed}

**Question:** a load of mass $20\,\mathrm{kg}$ is lifted vertically through $2\,\mathrm m$ at constant speed in $4\,\mathrm s$. Ignore resistance. Find the work done by the lifting force and by weight, then find the average power of the lifting force.

合力为零，因此提升力为 $20g=196\,\mathrm N$。

$$\boxed{W_{\text{lift}}=196(2)=392\,\mathrm J}.$$

$$\boxed{W_{\text{weight}}=-392\,\mathrm J}.$$

$$\boxed{P_{\text{average}}=\frac{392}{4}=98\,\mathrm W}.$$

**检查：**总功为零，与动能不变一致。速率和功率为：

$$v=\frac24=0.5\,\mathrm{m\,s^{-1}},\qquad P=196(0.5)=98\,\mathrm W.$$

</div>

## 功率 {#power}

**功率（power）**是做功的快慢，单位为**瓦特（W）**；一瓦特等于一焦耳每秒。

两台电动机可以做相同的功，但用时较短的那台平均功率更大。公式中的 $W$ 可以表示功；数值后直立的 $\mathrm W$ 是单位瓦特。

$$\boxed{P_{\text{average}}=\frac{\text{work done}}{\text{time taken}}}.$$

瞬时功率为：

$$P=\frac{\mathrm dW}{\mathrm dt}.$$

若沿运动方向的力分量为 $F_{\parallel}$，速率为 $v$：

$$\boxed{P=F_{\parallel}v}.$$

在很短的时间内，功近似为 $F_{\parallel}\Delta s$。除以 $\Delta t$，再取瞬时变化率，就得到 $P=F_{\parallel}v$。必须使用**同一瞬间**的力和速率。若它们在变化，某一瞬间的乘积不一定等于全程平均值。

对于驱动力 $D$ 与运动同向的车辆，发动机提供的有效机械功率为 $P=Dv$。这是**驱动力**的功率，不是合力的功率；阻力以 $fv$ 的速率移走机械能。

先把单位换成米每秒和瓦特：

$$1\,\mathrm{kW}=1000\,\mathrm W,\qquad 1\,\mathrm{km\,h^{-1}}=\frac5{18}\,\mathrm{m\,s^{-1}}.$$

平均功率不一定等于某一瞬间的功率。若功率恒定且 $v>0$，驱动力 $D=P/v$ 随速率改变；此式不能用于 $v=0$。有限大小的力在静止瞬间的机械功率为零，但发动机仍可能消耗燃料。

<div class="worked-example" markdown="1">

### 例题 3：车辆的功与功率 {#example-3-work-and-power-of-a-vehicle}

**Question:** a vehicle travels at a steady $54\,\mathrm{km\,h^{-1}}$ on a level road. The constant resistance is $2400\,\mathrm N$. Find the engine's mechanical power and the work done by its driving force in $40\,\mathrm s$.

$$v=54\left(\frac5{18}\right)=15\,\mathrm{m\,s^{-1}}.$$

匀速时，驱动力平衡阻力：$D=2400\,\mathrm N$。

$$\boxed{P=2400(15)=36000\,\mathrm W=36\,\mathrm{kW}}.$$

$$\boxed{W=P(40)=1.44\times10^6\,\mathrm J=1.44\,\mathrm{MJ}}.$$

**检查：**经过的距离为 $15(40)=600\,\mathrm m$，用 $D(600)$ 得到相同的功。虽然发动机做正功，合力与动能变化都为零。

</div>

## 斜坡道路上的车辆 {#vehicles-on-inclined-roads}

设车辆上坡，驱动力 $D$ 沿坡向上，恒定阻力 $f$ 沿坡向下。取上坡为正：

$$D-f-mg\sin\alpha=ma.$$

若机械功率为 $P$，速率 $v>0$：

$$\boxed{\frac Pv-f-mg\sin\alpha=ma}.$$

求给定可用功率下的最大稳定速率时，令 $a=0$。若采用恒定阻力模型：

$$v_{\text{steady}}=\frac{P}{f+mg\sin\alpha}.$$

对于下坡运动，改取下坡为正：

$$\frac Pv+mg\sin\alpha-f=ma.$$

若阻力是 $f(v)$，就在同一个受力方程中代入当前速率对应的阻力。水平路面、发动机使用最大可用功率 $P_{\max}$ 时，稳定速率满足 $P_{\max}/v=f(v)$。若阻力随速率增加，速率 $v$ 越大，驱动力越小、阻力越大；正的平衡点就给出此模型的稳定速率上限。不能把恒阻力的公式套到所有阻力模型。

在这个向前驱动的下坡模型中，正的稳定速率要求 $f>mg\sin\alpha$。若重力沿坡分量已超过阻力，继续向前驱动就无法维持匀速，需要制动或采用不同的阻力模型。

<div class="worked-example" markdown="1">

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

</div>

## 动能与势能 {#kinetic-and-potential-energy}

**动能（kinetic energy，KE）**是物体因运动而具有的能量：

$$\boxed{KE=\frac12mv^2}.$$

使用**速率**，即速度的大小。动能是标量，不能为负；静止时动能为零，速率加倍则动能变为四倍。

为理解公式的来源，考虑恒定合力使质点由静止加速并通过距离 $s$。由 $F=ma$ 和 $v^2=2as$，它所做的功为：

$$Fs=mas=\frac12mv^2.$$

**重力势能（gravitational potential energy，PE）**是在恒定重力场中与竖直位置相关的能量：

$$\boxed{PE=mgh}.$$

这种能量属于**物体与地球组成的系统**：提升改变了两者的引力位置关系。把地球和近似均匀的重力场当作固定背景时，通常简称“物体的势能”。势能并不是物体又受到的一股力。

选择**固定的势能零点**，从该水平面竖直向上量 $h$。在零点下方，势能可以为负。更换零点会改变势能的数值，但不会改变两个位置间的势能差。

在本模型中，质点的**机械能（mechanical energy，ME）**为 $KE+PE$。功与这两种能量都以焦耳为单位。

<div class="worked-example" markdown="1">

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

</div>


<div class="lesson-check" markdown="1">

### 同一运动的两种记录 {#energy-level-check}

**Self-written.**

**Question:** A particle of mass $2\,\mathrm{kg}$ has velocity $(-3\mathbf i+4\mathbf j)\,\mathrm{m\,s^{-1}}$ at $A$, $1\,\mathrm m$ above the ground, and velocity $(3\mathbf i-4\mathbf j)\,\mathrm{m\,s^{-1}}$ at $B$, $3\,\mathrm m$ above the ground. Find its KE at each point and the change in PE and ME from $A$ to $B$. Recalculate the two ME values with a fixed zero level $5\,\mathrm m$ above the ground. Assess the claims that reversing velocity makes KE negative and that a negative ME means the motion is impossible.

<details markdown="1">
<summary>提示</summary>

先求两个速度向量的大小。更换零点时，两个位置都要重新量高度。

</details>

<details markdown="1">
<summary>解答与检查</summary>

两个速率都是 $5\,\mathrm{m\,s^{-1}}$，动能均为 $25\,\mathrm J$。取地面为零点：

$$ME_A=25+2g(1)=44.6\,\mathrm J,\qquad ME_B=25+2g(3)=83.8\,\mathrm J.$$

$$\Delta PE=\Delta ME=2g(3-1)=39.2\,\mathrm J.$$

换零点后，两处高度分别为 $-4$、$-2$ 米：

$$ME_A=25+2g(-4)=-53.4\,\mathrm J,\qquad ME_B=25+2g(-2)=-14.2\,\mathrm J.$$

差值仍是 $39.2\,\mathrm J$。两个说法都不成立：速度反向不改变大小的平方；势能零点可选，所以机械能为负不代表运动不可能。这组观测需要非重力做功输入 $39.2\,\mathrm J$，不能当成机械能守恒。若只改变一处高度，或让速度方向决定动能正负，回看[动能与固定零点](#kinetic-and-potential-energy)，再关闭解答做[下一份记录](#energy-level-retry)。

</details>

</div>

## 功能原理 {#the-work-energy-principle}

能量账本比较起点与终点，不一定要逐秒追踪。先选研究对象、起止位置，再列哪些力做功，以及途中是否换了表面或撤去了力。如果问题要求时间或速度方向，通常还需配合另一种方法。

教材所用的**功能原理（work-energy principle）**，把重力以外各力的功与机械能变化作比较；重力已通过势能计入。

$$\boxed{W_{\text{other forces}}=\Delta(KE+PE)}.$$

$\Delta$ 表示末值减初值。左边计入驱动力、摩擦、张力及其他做功的力；右边已有势能时，左边就不要再计重力做功。

等价的另一种写法是把**包括重力在内的全部力**的功，与动能变化比较：

$$\boxed{W_{\text{all forces}}=\Delta KE}.$$

直线运动中，若沿途合力 $F$ 恒定，$Fs=mas$，再用 $v^2-u^2=2as$，便得到 $Fs=\tfrac12m(v^2-u^2)$。这解释了合力功与动能变化的联系。有重力时，把它的功 $-\Delta PE$ 移到另一边，就得到上面的机械能账本；两种写法描述的是同一笔转移。

选定一种写法后贯穿整个计算。**不能既在功中计重力，又把同一次势能变化重复计入。**上升 $h$ 时，两种形式的联系为 $W_{\text{weight}}=-\Delta PE=-mgh$。

若驱动力做功 $W_D$，恒定阻力 $f$ 作用距离为 $s$：

$$W_D-fs=(KE_{\text{final}}+PE_{\text{final}})-(KE_{\text{initial}}+PE_{\text{initial}}).$$

若只有阻力做非重力功，则化为：

$$\text{mechanical energy lost}=fs.$$

机械能已经转移到其他形式，例如内能增加，并没有凭空消失。

斜拉粗糙面上的物体，要先求法向反力，再用滑动摩擦 $f=\mu R$。向上的拉力分量虽然不做功，却能减小 $R$，使摩擦损失减小。撤去外力或换表面时，下一阶段重新记账，不要把上一段已经不存在的力带过去。

<div class="worked-example" markdown="1">

### 例题 6：驱动、摩擦与停止 {#example-6-driving-friction-and-stopping}

**Question:** a block of mass $4\,\mathrm{kg}$ moves at $8\,\mathrm{m\,s^{-1}}$ on a fixed rough horizontal plane. The coefficient of friction is $0.2$. A horizontal force of $12\,\mathrm N$ acts forwards for $5\,\mathrm m$ and is then removed. Find the speed after the first $5\,\mathrm m$ and the further distance before the block stops.

法向反力为 $4g=39.2\,\mathrm N$，滑动摩擦为 $0.2(39.2)=7.84\,\mathrm N$，势能没有变化。

$$12(5)-7.84(5)=\frac12(4)v^2-\frac12(4)(8^2).$$

$$2v^2=148.8,\qquad \boxed{v=\sqrt{74.4}\approx8.63\,\mathrm{m\,s^{-1}}}.$$

撤去拉力后，摩擦移走剩余的 $148.8\,\mathrm J$ 动能：

$$7.84s=148.8,\qquad \boxed{s\approx19.0\,\mathrm m}.$$

**检查：**拉动阶段 $a=(12-7.84)/4=1.04\,\mathrm{m\,s^{-2}}$，故 $v^2=8^2+2(1.04)(5)=74.4$。在撤力处把运动分段，停止阶段不再计入 $12\,\mathrm N$ 的拉力。

</div>

<div class="worked-example" markdown="1">

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

</div>

## 机械能守恒 {#conservation-of-mechanical-energy}

当重力以外各力做的总功为零时，机械能守恒：

$$\boxed{KE_{\text{initial}}+PE_{\text{initial}}=KE_{\text{final}}+PE_{\text{final}}}.$$

这适用于无空气阻力的抛体，或质点沿**固定、光滑**轨道运动且法向反力垂直运动方向的情况；有摩擦耗能或发动机输入能量时，不能原样套用。

质点上升竖直高度 $h$，初速率为 $u$，末速率为 $v$ 时：

$$\frac12mu^2=\frac12mv^2+mgh,\qquad v^2=u^2-2gh.$$

下降竖直高度 $h$ 时，末项符号改变，得到 $v^2=u^2+2gh$，质量约去。能量给出**速率**，不能单独给出方向或时间。抛体最高点仍有水平速度，因此该处速率不一定为零。

“光滑”只排除了摩擦；本模型还要求约束**固定**，法向反力才不做功。运动中的支承面可以转移能量。珠子**穿在导线上**，可以一直受轨迹约束；开放轨道只能推物体，绳只能拉物体。能量结果本身不能证明始终接触或绳一直绷紧。[下一课](../uniform-circular-motion/#contact-and-lifting-off-a-plane)会在水平圆周中检查受力与接触。

遇到碰撞时，先回补 [AS 动量桥接](../momentum-bridge/)。外力冲量可忽略时，系统动量可以守恒，但部分动能仍可转为内能。分别求每个物体碰前、碰后的动能；不能因为动量守恒就认定机械能也守恒。

<div class="worked-example" markdown="1">

### 例题 8：穿在固定光滑导线上的珠子 {#example-8-a-bead-on-a-fixed-smooth-wire}

**Question:** a bead is threaded on a smooth circular wire of radius $1\,\mathrm m$, fixed in a vertical plane. It is projected from the lowest point $A$ at $4.9\,\mathrm{m\,s^{-1}}$. Ignore air resistance. Find the height above $A$ where it first comes to rest and its height relative to the centre $O$.

![珠子穿在固定的竖直光滑圆形导线上，由 A 上升到 B；法向反力垂直轨迹，h 表示竖直上升高度](/assets/img/a2-math-mech/energy-smooth-wire.svg)

取 $A$ 为势能零点。法向反力不做功，所以：

$$\frac12m(4.9^2)=mgh.$$

$$\boxed{h=\frac{4.9^2}{2g}=1.225\,\mathrm m\approx1.23\,\mathrm m}.$$

圆心高出最低点 $1\,\mathrm m$，该最低点为 $A$，因此珠子停止处为：

$$\boxed{1.225-1=0.225\,\mathrm m\text{ above }O}.$$

**检查：**$0<h<2$，在圆形导线的总高度范围内，转折点确实位于导线上。珠子穿在导线上，因此能保持圆形轨迹约束；若只是放在开放轨道上，就可能失去接触，能量计算本身不能检查接触条件。

</div>

## 练习 {#practice}

先尝试，再展开提示。说清模型与哪个力做功，最后用受力、单位或能量比较核验答案。

<div class="lesson-check" markdown="1">

### Q1 — 运动中的物块 {#q1-signed-work}

**Self-written.**

**Question:** A block moves $4\,\mathrm m$ to the right on a fixed horizontal plane. A constant force of $30\,\mathrm N$ pulls at $60^\circ$ above horizontal. Friction is $10\,\mathrm N$. Find the work done by the pull, the work done by friction, the work done against friction and the total work.

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

若本题未通过，回看[力与位移](#work-done-by-a-force)，收起示范后，独立做[返回路段](#work-retry)。

</details>

</div>

<div class="lesson-check" markdown="1">

### Q2 — 上升的重物 {#q2-a-lift-that-speeds-up}

**Self-written.**

**Question:** A constant vertical force lifts a particle of mass $10\,\mathrm{kg}$ from rest through $3\,\mathrm m$. Its final speed is $4\,\mathrm{m\,s^{-1}}$. Ignore resistance. Find the work done by the lifting force and the magnitude of the force.

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

若本题未通过，回看[能量账本](#the-work-energy-principle)，收起示范后，独立做[另一段运动](#stage-retry)。

</details>

</div>

<div class="lesson-check" markdown="1">

### Q3 — 被拉动的物块 {#q3-an-angled-pull-on-a-rough-plane}

**Self-written.**

**Question:** A block of mass $5\,\mathrm{kg}$ is pulled from rest through $5\,\mathrm m$ on a fixed rough horizontal plane. The constant pulling force is $25\,\mathrm N$ at an acute angle $\theta$ above horizontal, where $\cos\theta=4/5$. The coefficient of friction is $0.2$. Find the normal reaction, the work done by the pulling force and the final speed. Assume the block remains in contact with the plane and slides forwards.

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

若本题未通过，回看[反力与摩擦的记账](#the-work-energy-principle)，收起示范后，独立做[另一段运动](#stage-retry)。

</details>

</div>

<div class="lesson-check" markdown="1">

### Q4 — 行驶中的汽车 {#q4-engine-power-at-an-instant}

**Self-written.**

**Question:** A car of mass $800\,\mathrm{kg}$ moves on a level road against constant resistance $400\,\mathrm N$. Its acceleration is $0.5\,\mathrm{m\,s^{-2}}$ when its speed is $72\,\mathrm{km\,h^{-1}}$. Find the engine's mechanical power at that instant. If the engine can supply $24\,\mathrm{kW}$, find its maximum steady speed in this model. At that steady speed, find the work done by the engine in $5\,\mathrm s$ and its average power over the interval.

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

在这个稳定速率下，$W=24000(5)=120000\,\mathrm J$，$P_{\text{average}}=W/5=24000\,\mathrm W$。输入功平衡阻力损失，动能不变。

若本题未通过，回看[驱动力的功率](#power)，收起示范后，独立做[车辆任务](#power-retry)。

</details>

</div>

<div class="lesson-check" markdown="1">

### Q5 — 液体中的质点 {#q5-falling-with-resistance}

**Self-written.**

**Question:** A particle of mass $3\,\mathrm{kg}$ falls vertically through a liquid of depth $4\,\mathrm m$. Its speed increases from $2$ to $5\,\mathrm{m\,s^{-1}}$. The liquid exerts a constant upward resistance $f$. Find $f$, the work done by weight and the work done by resistance.

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

若本题未通过，回看[两种等价账本](#the-work-energy-principle)，收起示范后，独立做[另一段运动](#stage-retry)。

</details>

</div>

<div class="lesson-check" markdown="1">

### Q6 — 斜面上的物块 {#q6-sliding-down-a-rough-plane}

**Self-written.**

**Question:** A block of mass $2\,\mathrm{kg}$ is released from rest on a fixed inclined plane where $\sin\alpha=1/4$. A constant frictional force of $2\,\mathrm N$ opposes its downward motion. Find its speed after moving $4\,\mathrm m$ down the plane, and the distance down the plane when its speed reaches $5\,\mathrm{m\,s^{-1}}$.

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

若本题未通过，回看[高度与能量转移](#the-work-energy-principle)，收起示范后，独立做[另一段运动](#stage-retry)。

</details>

</div>

<div class="lesson-check" markdown="1">

### Q7 — 发射的小球 {#q7-vertical-projection-from-above-the-ground}

**Self-written.**

**Question:** A ball is projected vertically upwards at $14.7\,\mathrm{m\,s^{-1}}$ from a point $1\,\mathrm m$ above the ground. Ignore air resistance. Find its greatest height above the ground and its speed just before hitting the ground.

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

若本题未通过，回看[守恒及其限制](#conservation-of-mechanical-energy)，收起示范后，独立做[飞行任务](#conservation-retry)。

</details>

</div>

<div class="lesson-check" markdown="1">

### Q8 — 导线上的珠子 {#q8-two-motions-on-a-smooth-wire}

**Self-written.**

**Question:** A bead is threaded on a smooth circular wire of radius $0.8\,\mathrm m$, fixed in a vertical plane. Ignore air resistance. (a) It is released from rest at a point level with the centre. Find its speed at the lowest point. (b) What initial speed at the lowest point gives just enough energy to rise through the full vertical height of the wire?

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

若本题未通过，回看[约束条件](#conservation-of-mechanical-energy)，收起示范后，独立做[飞行任务](#conservation-retry)。

</details>

</div>

<!-- motion-transfer:start -->
## 独立选择方法 {#independent-method-choice}

**自拟诊断任务。**题目不指定方法，先自行选择。首次尝试前，保持推理提示和反馈折叠。

<div class="lesson-check" markdown="1">

**Question:** A $2\,\mathrm{kg}$ block is projected at $6\,\mathrm{m\,s^{-1}}$ up a fixed straight rough slope with $\sin\alpha=1/4$. While it slides upwards, a constant frictional force of $1\,\mathrm N$ opposes motion. There is no driving force and air resistance is ignored. Find its speed after $5\,\mathrm m$ and decide whether it can first reach a marker $8\,\mathrm m$ up the slope before stopping. A student writes $36+2g(s/4)-s=v^2$. Explain the error and find where the upward motion ends. Do not model the subsequent motion.

<details markdown="1">
<summary>提示</summary>

题目没有要求时间。说清初始能量来自哪里，以及上滑时能量用于哪两项；开平方前先判断该位置能否到达。

</details>

<details markdown="1">
<summary>解答与检查</summary>

功能原理可避开求时间。固定取发射高度为势能零点，通过势能增加计入一次重力：

$$36=v^2+2g\left(\frac s4\right)+s,\qquad v^2=36-5.9s.$$

在 $s=5$ 时，$v^2=6.5$，所以 $\boxed{v=\sqrt{6.5}\approx2.55\,\mathrm{m\,s^{-1}}}$。若令 $s=8$，上滑模型给出 $v^2=-11.2$，因此这一阶段不能到达标记。上滑结束于：

$$\boxed{s_{\text{stop}}=\frac{36}{5.9}=\frac{360}{59}\approx6.10\,\mathrm m}.$$

学生的重力项符号错误：上升需要能量，而非由重力提供能量；等价地，重力做负功。若算出负的 $v^2$，不能取绝对值再开方，应找出停止点并终止这一阶段。后续静摩擦或反向运动需要另建模型。

独立沿上坡方向列式：$2a=-2g/4-1=-5.9$，因此 $a=-2.95\,\mathrm{m\,s^{-2}}$。再用 $v^2=6^2+2as$ 得到同一表达式与停止距离。第二种方法同时核验了符号与算术。

</details>

</div>

<div class="lesson-check" markdown="1">

<span id="stage-retry"></span>

### 另一段运动 {#retry-change-the-structure}

**Question:** A $2\,\mathrm{kg}$ block starts from rest and slides $4\,\mathrm m$ down a fixed slope with $\sin\alpha=1/4$, against constant friction $1\,\mathrm N$. It then enters a fixed smooth horizontal track through a smooth join of negligible height change; assume no energy is lost at the join. Find its speed on entering the horizontal track and after travelling a further $3\,\mathrm m$ along it. Explain whether friction from the slope belongs in the second stage. Ignore air resistance.

<details markdown="1">
<summary>提示</summary>

在接触面改变处把能量账分段，重新判断水平段有哪些力做功。

</details>

<details markdown="1">
<summary>解答与检查</summary>

斜面阶段的竖直下降量为 $1\,\mathrm m$：

$$2g(1)-1(4)=\frac12(2)v^2,\qquad v^2=15.6.$$

$$\boxed{v_{\text{entry}}=\sqrt{15.6}\approx3.95\,\mathrm{m\,s^{-1}}},\qquad \boxed{v_{\text{after }3\,\mathrm m}=\sqrt{15.6}\approx3.95\,\mathrm{m\,s^{-1}}}.$$

水平段光滑，重力与反力不做功，也无摩擦，故速率不变。不能把斜面上的 $1\,\mathrm N$ 摩擦带入第二阶段。独立受力核验：斜面上 $a=(2g/4-1)/2=1.95\,\mathrm{m\,s^{-2}}$，所以 $v^2=2(1.95)(4)=15.6$；水平段合力为零。要在转向时保留该速率，必须使用题目给定的光滑、无能量损失连接假设。

</details>

</div>
<!-- motion-transfer:end -->


## 修复后重新尝试 {#repair-and-retry}

找到并修复错误原因后，收起之前的解答，再做对应的新任务。借助帮助完成，要记录为有帮助完成，之后再检验独立表现。

<div class="lesson-check" markdown="1">

### 返回的路段 {#work-retry}

**Self-written.**

**Question:** A $2\,\mathrm{kg}$ block is sliding $2\,\mathrm m$ to the left on a fixed horizontal floor. A constant force of $15\,\mathrm N$ acts $30^\circ$ above the rightward horizontal. A friction force of $4\,\mathrm N$ opposes the sliding. Find the work by each force, the work against friction and the total work during this interval. Explain why using $30^\circ$ as the force–displacement angle would be wrong. Assume contact is maintained.

<details markdown="1">
<summary>提示</summary>

从同一点画出向左位移与外力箭头。返回时，摩擦仍与题目给定的滑动方向相反。

</details>

<details markdown="1">
<summary>解答与检查</summary>

外力与位移夹角为 $150^\circ$：

$$W_{\text{pull}}=15(2)\cos150^\circ=-15\sqrt3\,\mathrm J\approx-26.0\,\mathrm J.$$

$$W_{\text{friction}}=-8\,\mathrm J,\quad W_{\text{against friction}}=8\,\mathrm J,\quad W_{\text{total}}=-15\sqrt3-8\approx-34.0\,\mathrm J.$$

重力与反力各自不做功。总功为负，物块在这段减速。取向左为正独立检查：合力为 $-15\cos30^\circ-4$，乘 $2$ 米得到同一总功。竖直方向 $R=2g-15\sin30^\circ=12.1\,\mathrm N>0$。若夹角或符号错误，回看[力与位移](#work-done-by-a-force)；题目的 $30^\circ$ 是从相反的水平向量量起。

</details>

</div>

<div class="lesson-check" markdown="1">

### 另一份能量记录 {#energy-level-retry}

**Self-written.**

**Question:** A particle of mass $1\,\mathrm{kg}$ has velocity $(6\mathbf i-8\mathbf j)\,\mathrm{m\,s^{-1}}$ at $A$, $2\,\mathrm m$ above the ground. At a later point $B$ at ground level its speed is $10\,\mathrm{m\,s^{-1}}$. Find the change in ME, using a fixed zero level $4\,\mathrm m$ above the ground. Would the change differ using the ground as zero? Could these observations describe motion on a fixed smooth track with only weight and the normal reaction acting?

<details markdown="1">
<summary>提示</summary>

先比较两处动能，再考虑高度。区分能量的数值为负与能量发生减少。

</details>

<details markdown="1">
<summary>解答与检查</summary>

两处都有 $KE=\tfrac12(1)(6^2+8^2)=50\,\mathrm J$。相对所选零点的高度是 $-2$、$-4$ 米：

$$ME_A=50-19.6=30.4\,\mathrm J,\quad ME_B=50-39.2=10.8\,\mathrm J,\quad\Delta ME=-19.6\,\mathrm J.$$

改用地面为零点，两个总量同时增加 $39.2\,\mathrm J$，差值不变。固定光滑轨道的反力不做功，重力又已通过势能计入，机械能应守恒。这组观测需要其他能量转移，不能符合所提模型。直接核对：动能相同，下降 $2$ 米，所以 $\Delta ME=mg(-2)=-19.6\,\mathrm J$。零点用错时回看[固定零点](#kinetic-and-potential-energy)。

</details>

</div>

<div class="lesson-check" markdown="1">

### 换一种阻力的车辆 {#power-retry}

**Self-written.**

**Question:** A vehicle of mass $400\,\mathrm{kg}$ has maximum mechanical power $16\,\mathrm{kW}$. On a level road resistance has magnitude $kv^2$ newtons at speed $v\,\mathrm{m\,s^{-1}}$. At full power its acceleration at $10\,\mathrm{m\,s^{-1}}$ is $1\,\mathrm{m\,s^{-2}}$. Find $k$ and the maximum steady speed. The driver later adjusts the power to travel steadily at $8\,\mathrm{m\,s^{-1}}$ for $20\,\mathrm s$. Find the work against resistance and the average engine power during that interval.

<details markdown="1">
<summary>提示</summary>

先求给定瞬间的驱动力。稳定速率时合力为零，但阻力不等于之前速率下的值。

</details>

<details markdown="1">
<summary>解答与检查</summary>

第一瞬间驱动力为 $D=16000/10=1600\,\mathrm N$。由牛顿定律：

$$1600-100k=400(1),\qquad k=12.$$

最大稳定速率时，满功率的驱动力恰好平衡阻力：

$$\frac{16000}{v}=12v^2,\qquad v^3=\frac{4000}{3},\qquad v\approx11.0\,\mathrm{m\,s^{-1}}.$$

速率为 $8\,\mathrm{m\,s^{-1}}$ 时，阻力为 $12(8^2)=768\,\mathrm N$，距离为 $8(20)=160\,\mathrm m$：

$$W_{\text{against resistance}}=768(160)=122880\,\mathrm J\approx1.23\times10^5\,\mathrm J.$$

$$P_{\text{average}}=\frac{122880}{20}=6144\,\mathrm W\approx6.14\,\mathrm{kW}.$$

核对 $Dv=768(8)=6144\,\mathrm W$，小于最大功率，所以降低输出后的匀速路段成立。若用 $mav$ 当发动机功率，回看[某一个力的功率](#power)；若换速率后仍用原阻力，回看[车辆模型](#vehicles-on-inclined-roads)。

</details>

</div>

<div class="lesson-check" markdown="1">

### 水平地面上方的一次飞行 {#conservation-retry}

**Self-written.**

**Question:** A ball is projected from ground level with velocity $(5\mathbf i+12\mathbf j)\,\mathrm{m\,s^{-1}}$, where $\mathbf j$ points vertically upwards. Only its weight acts during flight. Find its greatest height and speed there, and its speed on returning to ground level. Explain which facts about velocity require more than an energy equation.

<details markdown="1">
<summary>提示</summary>

水平方向没有力。列能量账本前，先判断最高点还保留哪一个速度分量。

</details>

<details markdown="1">
<summary>解答与检查</summary>

水平速度始终为 $5\,\mathrm{m\,s^{-1}}$；最高点只有竖直分量为零。初速率是 $13\,\mathrm{m\,s^{-1}}$，不是 $17$。因此

$$\frac12m(13^2)=\frac12m(5^2)+mgH,\qquad H=\frac{72}{g}=\frac{360}{49}\approx7.35\,\mathrm m.$$

最高点速率为 $5\,\mathrm{m\,s^{-1}}$。回到原高度时，守恒又给出速率 $13\,\mathrm{m\,s^{-1}}$。能量本身不给飞行时间或速度方向；返回时竖直分量向下，要根据运动判断，不能靠对动能开一个“负平方根”。独立核对 $0=12^2-2gH$。若把最高点所有速度都设零，回看[守恒及其限制](#conservation-of-mechanical-energy)和[抛体分量](../projectiles/)。

</details>

</div>

## 稍后回来提取 {#later-check}

学完[匀速圆周运动](../uniform-circular-motion/)后，关闭示范回来：解释为什么非零力也能不做功，再独立完成[飞行任务](#conservation-retry)。用入口[混合题](/zh/alevel/a2-mathematics/mechanics/#mixed-problems)检查选法，下次复习再做[稍后回顾](/zh/alevel/a2-mathematics/mechanics/#later-review)。记录首次作答、用过的帮助、修复的错误及稍后表现。

<!-- motion-sources:start -->
## 来源与范围 {#sources-and-scope}

[OxfordAQA 9660 大纲 v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf)，M2.6：printed 29 / PDF 28（1-based）；整个 M2 范围为 printed 27–30 / PDF 26–29。本课按 9660 制作，范围由恒力做功、动能、重力势能、功能原理、机械能守恒及功率确定。

本次配对阅读 MA05 January 2025 [Q1，QP pp.2–3](/assets/pdf/fx-cg50/references/oxfordaqa-ma05-2025-january-question-paper.pdf#page=2)与 [MS pp.4–5](/assets/pdf/fx-cg50/references/oxfordaqa-ma05-2025-january-mark-scheme.pdf#page=4)、[Q7，QP pp.14–15](/assets/pdf/fx-cg50/references/oxfordaqa-ma05-2025-january-question-paper.pdf#page=14)与 [MS pp.13–14](/assets/pdf/fx-cg50/references/oxfordaqa-ma05-2025-january-mark-scheme.pdf#page=13)、[Q8，QP pp.16–17](/assets/pdf/fx-cg50/references/oxfordaqa-ma05-2025-january-question-paper.pdf#page=16)与 [MS pp.15–16](/assets/pdf/fx-cg50/references/oxfordaqa-ma05-2025-january-mark-scheme.pdf#page=15)，评分标准为 Version 1.0 Final。它们分别强调功率中的驱动力、能量法中的竖直落差，以及动量计算后仍须分别计算各物体的动能。本页题目仍为 **Self-written / 自拟题**，无官方分值。

January 2025 卷的计算器答案默认两位有效数字，题内另有规定时依题意；本页自拟题按开头约定。教材对应第 14 章 14.1–14.3 节，印刷 pp.220–237。竖直穿珠导线只作为具有持续约束的能量应用，不把非匀速竖直圆周受力方程列为 MA05 要求。
<!-- motion-sources:end -->

## 方法小结 {#method-summary}

- **功：**说清力的身份，使用沿运动方向的分量；区分阻力做功与克服阻力做功。
- **功率：**平均用 $W/t$，瞬时驱动力用 $Dv$；将 kW 换成 W，km/h 换成 m/s。
- **车辆运动：**将 $D=P/v$ 与受力方程联立；只在稳定速率处令 $a=0$。
- **能量：**动能用速率，势能用固定的竖直零点；重力在总功或势能变化中只计一次。
- **守恒：**检查其他力做的总功是否为零。有阻力时，机械能损失等于克服阻力所做的功。
- **核验：**检查符号、单位、运动方向、相对零点的高度和接触能否保持。

**学习路线：**[上一课：抛体](/zh/alevel/a2-mathematics/mechanics/projectiles/) · [下一课：匀速圆周运动](/zh/alevel/a2-mathematics/mechanics/uniform-circular-motion/) · [力学单元入口](/zh/alevel/a2-mathematics/mechanics/)。

{% include exam_topic_practice.html %}
