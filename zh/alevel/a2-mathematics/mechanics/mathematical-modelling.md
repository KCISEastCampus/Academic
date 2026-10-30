---
title: 数学建模
layout: subjects
mathjax: true
grade: a2
subject: m2
lang: zh-CN
translation_of: /alevel/a2-mathematics/mechanics/mathematical-modelling/
permalink: /zh/alevel/a2-mathematics/mechanics/mathematical-modelling/
toc_headings: h2
study_page: true
reading_layout: true
---

[A2 力学](/zh/alevel/a2-mathematics/mechanics/) · MA05 · M2.1
{:.lesson-meta}

汽车和拖车都有车轮、弹簧和许多运动部件，但预测它们沿直线的加速度时，不必把每个零件都描述一遍。**哪些细节可以省略？省略后为什么能列出这样的方程？**

学完后，你要能在具体情境中解释假设，选定一个物体或整体来列受力方程，再检查结果是否仍符合接触和绳的约束。

依次学习[建模假设](#modelling-assumptions)、[连接体](#connected-bodies)、[升降机](#a-lift-and-its-passenger)与[定滑轮](#a-fixed-pulley)。复习时先关闭帮助，做[练习](#practice)。

需要简单方程，以及 AS 的重力、张力、法向反力和牛顿第二定律。辨认力有困难时，先回看 [AS 受力图](/zh/alevel/as-mathematics/forces/#l24-concept)；[下文的系统解释](#connected-bodies)会说明怎样选择列式对象。
{:.lesson-meta}

本页示范与练习均为 **Self-written／自拟题**，没有官方分值。未另说明时取 $g=9.8\,\mathrm{m\,s^{-2}}$，计算中保留精确值，最终数值保留三位有效数字。[来源说明](#sources-and-scope)区分本页约定和正式试卷的要求。
{:.lesson-meta}

## 建模假设 {#modelling-assumptions}

**数学模型**（mathematical model）用假设简化真实情境，同时保留回答问题所需的特征。

对每个假设都问：**可以忽略什么？因此可以写什么？何时可能失效？**

| 术语 | 在模型中的含义 | 应检查什么 |
| --- | --- | --- |
| 质点（particle） | 把质量集中在一点，忽略大小与形状 | 可描述整体运动，不能分析倾倒或转动 |
| 轻绳或轻杆（light） | 忽略其质量 | 方程中不计其重力与自身惯性 |
| 不可伸长的绳（inextensible） | 绳长不变 | 根据绳长和具体装置确定物体运动的约束 |
| 拉紧的绳（taut） | 绳被拉直 | 可传递张力，松绳不能 |
| 光滑面或滑轮（smooth） | 忽略该接触处的摩擦 | 平面仍可有法向反力；滑轮可改变绳的方向 |
| 粗糙面（rough） | 沿面可能有摩擦 | 选方向前先判滑动趋势 |
| 均匀物体（uniform） | 按对象，单位长度、面积或体积的质量恒定 | 薄片中等面积部分有相同质量；可借助对称性定位重心 |
| 空气阻力可忽略 | 不在力图中计空气阻力 | 对轻而迎风面积大的物体通常较不合理 |
| 只受重力运动 | 运动中只有重力 | 此时不能同时有接触面或拉紧绳的力 |

**质点不等于没有空气阻力。**两者是独立假设。**轻不等于不可伸长。**前者关于质量，后者关于长度。

通常的理想模型中，轻绳跨过光滑滑轮时两边张力相同。轻杆既可传递张力，也可传递**推力**（thrust），即既可拉也可推；绳只能拉。

这些术语各管一件事。轻的弹性绳仍能伸长；质量不可忽略的缆绳也可以不可伸长，两者不能互相代替。即使是一艘大船，只要问题只研究沿直线的运动、尺寸和转动并不影响结果，也可以用质点模型；若研究倾覆，就必须保留物体的大小和形状。

两个质点分别连在同一根绳两端，绳跨过定滑轮且拉紧、不可伸长时，它们速率与加速度大小相等，方向可相反。不能把此结论套到所有绳和滑轮装置。

<div class="worked-example" markdown="1">

### 例题 1 — 为球选择模型 {#example-1--choose-the-model-for-a-ball}

**Question:** A ball is thrown across a field. We want to predict where it first reaches the ground. State two assumptions and explain their limits. Would the same model predict how the ball spins?

1. **把球视为质点。**追踪一点而非整个形状；球的尺寸相对飞行距离很小时可能合理，但不能描述自转。
2. **忽略空气阻力。**释放后只剩重力；近地面还取 $g$ 恒定。对轻球、强风或长距离飞行，忽略空气阻力较不合理。

**检查：**每个假设都有其作用和限制。只说“视为质点”无法解释为什么没有空气阻力。

</div>

## 连接体 {#connected-bodies}

先选**系统（system）**，也就是这条方程要研究的一个或几个物体。来自边界外的力是外力，系统内物体彼此施加的力是内力。同一个绳力，对拖车单独而言是外力，对汽车与拖车整体而言则是内力。

先分别画受力图：重力向下，法向反力垂直接触面，张力沿绷紧的绳拉。每画一个力，都说清谁受到它。绳的两个反向拉力分别作用于两辆车，在任何一辆车自己的受力图上都不能互相抵消。

选正方向，把这个系统受到的外力按符号相加。牛顿第二定律给出

$$\text{resultant external force}=(\text{total mass})\times(\text{acceleration}).$$

只有约束确实给出共同加速度，才能用总质量乘同一个加速度。$a<0$ 表示加速度与所选正向相反，单凭它不能说物体正在倒退。加速度箭头描述运动，**不是额外的力**。

![汽车与拖车分别向右运动的受力图，包含法向反力、重力、张力与驱动力](/assets/img/a2-math-mech/car-trailer-model.svg)

<div class="worked-example" markdown="1">

### 例题 2 — 汽车牵引拖车 {#example-2--a-car-pulls-a-trailer}

**Question:** A car of mass $1000\,\mathrm{kg}$ pulls a trailer of mass $500\,\mathrm{kg}$ along a level straight road. The driving force is $3000\,\mathrm N$. Use a light, taut, inextensible horizontal tow rope and neglect resistance to motion. Find the acceleration and tension. Comment on the model.

把每辆车视为质点。绳使两车间距不变，因此两者向右的加速度同为 $a$；张力记为 $T$。

拖车的水平合力为 $T$，汽车的水平合力为 $3000-T$：

$$T=500a,\qquad 3000-T=1000a.$$

两式相加。张力是组合系统的内力，因此抵消：

$$3000=1500a\quad\Rightarrow\quad\boxed{a=2\,\mathrm{m\,s^{-2}}}.$$

再使用拖车的方程：

$$\boxed{T=500(2)=1000\,\mathrm N}.$$

绳的质量远小于车辆时，“轻绳”可能合理。质点模型适合直线运动，却不能描述车辆转动。忽略阻力是简化：若驱动力相同且有正阻力，加速度会小于 $2\,\mathrm{m\,s^{-2}}$。

**检查：**汽车方程给出 $3000-1000=1000(2)$。竖直方向没有加速度且绳水平，所以各车的法向反力分别平衡自身重力。

**常见错误：**用 $T=1500a$。张力不是加速两车整体的外力；对单独的拖车应写 $T=500a$。

</div>

## 升降机与乘客 {#a-lift-and-its-passenger}

每条方程都须对应明确物体。缆绳张力作用于升降机，地板的法向反力作用于乘客。

对乘客画向上的地板支持力和向下的重力；对升降机单独画图时，还要有乘客向下压地板的力。如果选升降机与乘客整体，地板接触的一对内力会抵消，剩下缆绳拉力和两者的重力。所以下面两条方程的质量不同，向上的力也不同。

<div class="worked-example" markdown="1">

### 例题 3 — 向上运动不一定向上加速 {#example-3--upward-motion-does-not-always-mean-upward-acceleration}

**Question:** A lift has mass $400\,\mathrm{kg}$ and carries a passenger of mass $60\,\mathrm{kg}$. It moves upwards with acceleration $1.2\,\mathrm{m\,s^{-2}}$. Find the cable tension and the normal reaction on the passenger. Then find both forces when it moves upwards at constant speed.

把升降机和乘客视为质点，忽略阻力和缆绳质量；假设乘客保持接触并与升降机一起运动。取向上为正。

以升降机和乘客整体为系统，总质量为 $460\,\mathrm{kg}$：

$$T-460g=460(1.2)\quad\Rightarrow\quad\boxed{T=5060\,\mathrm N}.$$

再单独研究乘客，设法向反力为 $R$：

$$R-60g=60(1.2)\quad\Rightarrow\quad\boxed{R=660\,\mathrm N}.$$

匀速时，即使仍在向上运动，也有 $a=0$：

$$T=460g=4508\,\mathrm N\approx\boxed{4510\,\mathrm N},$$

$$\boxed{R=60g=588\,\mathrm N}.$$

**检查：**向上加速时，两个支承力都大于各自支承的重力。乘客对地板的力大小为 $R$、向下，作用于另一个物体。

若升降机向上但减速，加速度向下。不能从速度方向直接决定加速度的符号。

还要检查接触：地板能向上推乘客，却不能把乘客向下拉。若算得 $R<0$，说明乘客“贴着地板一起运动”的假设已经失效，不能继续用这条方程描述乘客后续的运动。

</div>

## 定滑轮 {#a-fixed-pulley}

从定滑轮向下量，两段悬挂绳长分别为 $y_1$、$y_2$。绕过滑轮的部分长度固定，整根绳又绷紧、不可伸长，因此 $y_1+y_2=\text{constant}$。一边增长多少，另一边就缩短多少。两次求导得到 $a_1+a_2=0$：若都用向下为正，两加速度方向相反、**大小相等**。这个结论来自几何约束，不是来自“绳很轻”。

<div class="worked-example" markdown="1">

### 例题 4 — 解释加速度大小相等 {#example-4--explain-equal-acceleration-magnitudes}

**Question:** Particles of masses $3\,\mathrm{kg}$ and $5\,\mathrm{kg}$ are connected by a light inextensible string passing over a fixed smooth pulley. They are released from rest with the string taut. Find the acceleration and tension while both hang freely.

假设绳保持拉紧，忽略空气阻力，把物体视为质点。绳长固定，因此 $5\,\mathrm{kg}$ 质点下降时，$3\,\mathrm{kg}$ 质点上升相同距离，两者加速度大小相等。轻绳和光滑滑轮使两侧张力同为 $T$。

对较重质点取向下为正，对较轻质点取向上为正：

$$5g-T=5a,\qquad T-3g=3a.$$

两式相加得 $2g=8a$，因此

$$\boxed{a=\frac g4=2.45\,\mathrm{m\,s^{-2}}}.$$

$$T=3(g+a)=36.75\,\mathrm N\approx\boxed{36.8\,\mathrm N}.$$

**检查：**$3g<T<5g$，所以轻质点向上加速、重质点向下加速。用重质点方程也可得 $T=5(g-a)=36.75\,\mathrm N$。

**限制：**若质点触地、绳松弛或装置改变，这组方程可能不再描述后续运动。

</div>

## 练习 {#practice}

建议约 20–25 分钟。每个建模假设都应给理由，不能只写名称。

<div class="lesson-check" markdown="1">

### Q1 — 关于羽毛球的说法 {#q1--separate-two-assumptions}

A student says, "The shuttlecock is a particle, so air resistance is zero." Explain the error and comment on whether ignoring air resistance is reasonable.

<details markdown="1">
<summary>提示</summary>

哪个假设涉及大小和形状？哪个涉及一个力？

</details>

<details markdown="1">
<summary>解答与检查</summary>

质点模型在描述运动时忽略尺寸和形状，不会消除空气阻力。忽略空气阻力是另一假设，对轻且迎风面积大的羽毛球通常很差；更合适的模型应包含阻力。

**检查：**既指出了推理错误，也解释了模型限制的原因。

</details>

</div>

<div class="lesson-check" markdown="1">

### Q2 — 两个悬挂质点 {#q2--identify-what-each-term-changes}

Two hanging particles are connected over a fixed pulley. Explain separately what is gained by a light string, an inextensible taut string and a smooth pulley. Does "light" alone give equal acceleration magnitudes?

<details markdown="1">
<summary>提示</summary>

分别考虑质量、长度与摩擦。

</details>

<details markdown="1">
<summary>解答与检查</summary>

轻绳表示忽略绳质量。拉紧且跨过此定滑轮的绳长固定，使两个质点的位移与加速度大小相等。光滑滑轮不引入摩擦；结合轻绳模型得到两边张力相同。“轻”本身不说明长度是否变化，也不保证加速度大小相等。

**检查：**相等的是大小；两个质点的加速度方向可一上一下。

</details>

</div>

<div class="lesson-check" markdown="1">

### Q3 — 汽车与拖车 {#q3--change-the-car-model}

A car of mass $900\,\mathrm{kg}$ pulls a trailer of mass $300\,\mathrm{kg}$ with a driving force of $2400\,\mathrm N$. A light horizontal tow rope is taut and inextensible. Resistance is $180\,\mathrm N$ on the car and $60\,\mathrm N$ on the trailer, opposing motion. Find the acceleration and tension. Compare the acceleration with a model that neglects resistance.

<details markdown="1">
<summary>提示</summary>

整体使用全部水平外力，再单独研究拖车。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$2400-180-60=1200a\quad\Rightarrow\quad\boxed{a=1.8\,\mathrm{m\,s^{-2}}}.$$

$$T-60=300(1.8)\quad\Rightarrow\quad\boxed{T=600\,\mathrm N}.$$

忽略阻力时 $a=2400/1200=2\,\mathrm{m\,s^{-2}}$，较大。

**检查：**汽车的合力为

$$2400-180-600=1620\,\mathrm N.$$

它等于 $900(1.8)\,\mathrm N$，符合 $F=ma$。

</details>

</div>

<div class="lesson-check" markdown="1">

### Q4 — 升降机中的乘客 {#q4--a-lift-slows-down}

A lift of mass $500\,\mathrm{kg}$ carries a passenger of mass $70\,\mathrm{kg}$. It moves upwards but slows down at $0.8\,\mathrm{m\,s^{-2}}$. Neglect resistance and cable mass. Find the cable tension and the normal reaction on the passenger, assuming the passenger stays in contact with the floor.

<details markdown="1">
<summary>提示</summary>

取向上为正时，加速度为负。

</details>

<details markdown="1">
<summary>解答与检查</summary>

取 $a=-0.8\,\mathrm{m\,s^{-2}}$：

$$T-570g=-570(0.8)\quad\Rightarrow\quad\boxed{T=5130\,\mathrm N}.$$

$$R-70g=-70(0.8)\quad\Rightarrow\quad\boxed{R=630\,\mathrm N}.$$

**检查：**$5130<570g$ 且 $630<70g$，两合力均向下，符合减速条件。反力为正，与保持接触一致。

</details>

</div>

<div class="lesson-check" markdown="1">

### Q5 — 三个预测任务 {#q5--decide-whether-a-particle-model-is-enough}

For each task, explain whether a particle model is suitable: (a) finding a car's acceleration along a straight road; (b) finding the angle at which a ladder slips; (c) finding whether a loaded truck topples on a bend.

<details markdown="1">
<summary>提示</summary>

所求结果是否依赖物体尺寸或力的作用位置？

</details>

<details markdown="1">
<summary>解答与检查</summary>

**(a)** 若只研究直线运动，质点模型可能合适，阻力假设须另说明。**(b)** 不足：梯长和各力作用点决定力矩，需刚性杆模型。**(c)** 不足：货车宽度、重心与接触点均重要，需刚体模型。

**检查：**根据所求问题选模型，不能只根据物体大小决定。

</details>

</div>

## 独立考查 {#independent-check}

出错后先回到对应讲解，收起示范，再做新任务：假设的含义 → [模型重试](#model-retry)；绳的约束 → [连接方式重试](#constraint-retry)；系统边界 → [受力重试](#system-retry)；加速度符号 → [升降机重试](#lift-retry)。

<div class="lesson-check" markdown="1">

### 刹车时的绳 {#rope-check}

**Self-written task.** A car pulls a trailer along a straight level road with a horizontal rope. A student writes a common acceleration and a common tension because “the rope is light”. Identify the missing assumptions. Explain which conclusion must be reconsidered if the rope stretches, and which must be reconsidered if its mass is not negligible. Describe what can happen to the tension when the car brakes and the trailer closes the gap. Do not calculate a force.

<details markdown="1">
<summary>推理提示</summary>

分开考虑长度约束与绳自身的受力平衡。柔软的绳能把拖车向后推吗？

</details>

<details markdown="1">
<summary>解答与核对</summary>

在这个直线、固定连接的装置中，共同加速度需要绳保持拉紧且不可伸长。“轻”只描述质量，不能提供长度约束。绳若伸长，间距可以改变，两车加速度不一定相等。轻绳自身方程中的合力可忽略，因此这里两端张力相同；若绳质量不可忽略，可能需要不同的端力来加速绳。汽车刹车时，拖车可能靠近汽车而使绳松弛。柔软的绳不能传递压缩推力，松弛后张力为零，原来的拉紧绳方程不再适用。

若把质量与长度混为一谈，回看[各假设的区别](#modelling-assumptions)与[绳长约束](#a-fixed-pulley)，再关闭本答案，做下一题。

</details>

</div>

<div class="lesson-check" markdown="1">

### 换一种连接 {#constraint-retry}

**Question:** Replace the rope by a light rigid tow bar. Which part of the braking conclusion changes, and which length constraint can still be used? State the body on which each tow-bar force acts.

<details markdown="1">
<summary>提示</summary>

比较杆受压时能做什么，柔绳又能做什么。

</details>

<details markdown="1">
<summary>解答与核对</summary>

刚性牵引杆既可受拉也可受压，因此刹车时能向后推拖车，同时向前推汽车。这两个力作用于不同物体。直线固定长度的装置仍使两车加速度相同，但若不知道其他外力，还不能确定加速度。

</details>

</div>

<div class="lesson-check" markdown="1">

### 两个下落物体 {#model-retry}

**Question:** A compact ball and an open parachute fall vertically in still air. A student models both as particles under gravity alone and predicts the same acceleration. The parachute is observed falling at constant velocity. Which part of the model could still be useful, and which assumption needs revision? Use a force equation to explain why gravity alone cannot describe the observation.

<details markdown="1">
<summary>提示</summary>

只追踪一个点的模型也可以包含阻力。速度恒定时，加速度是多少？

</details>

<details markdown="1">
<summary>解答与核对</summary>

若只描述降落伞整体沿竖直方向的运动，仍可追踪一个点，不研究它的形状或转动。但匀速给出 $a=0$，只受重力却会得到 $mg=ma$，即向下的加速度 $a=g$。取向下为正，加入向上的空气阻力 $D$ 才能有 $mg-D=0$。这项观察直接挑战“忽略阻力”，不必自动否定针对这项预测的质点模型，也不能据此推得普遍的阻力公式。

若因为“质点”就去掉阻力，回看[假设与适用限制](#modelling-assumptions)。

</details>

</div>

<div class="lesson-check" markdown="1">

### 一辆正在刹车的车 {#system-retry}

**Question:** A tractor of mass $800\,\mathrm{kg}$ and a trailer of mass $200\,\mathrm{kg}$ are joined by a light rigid horizontal tow bar. They move right and slow down at $1\,\mathrm{m\,s^{-2}}$. Resistances of $100\,\mathrm N$ and $50\,\mathrm N$ oppose their motion respectively. A brake force of magnitude $B$ acts left on the tractor; there is no driving force. Find $B$ and the force of the bar on the trailer. Could a flexible rope supply that force? State your systems and positive direction.

<details markdown="1">
<summary>提示</summary>

用整体求刹车力，再单独选拖车求杆力。杆力可以先设一个带符号的向右分量。

</details>

<details markdown="1">
<summary>解答与核对</summary>

取向右为正，因此 $a=-1$。对两车整体，

$$-B-100-50=1000(-1)\quad\Rightarrow\quad B=850\,\mathrm N.$$

对拖车，设杆力向右的分量为 $f$：

$$f-50=200(-1)\quad\Rightarrow\quad f=-150\,\mathrm N.$$

杆对拖车施加向左的 $150\,\mathrm N$ 推力，对牵引车则施加向右的反向力。检查牵引车：$150-100-850=-800=800a$。牵引车在前，柔绳只能把拖车向右拉，不能提供这个压缩推力。换成绳后，就不能继续假定两者共同减速。

若在整体方程里还算入了杆的内力，回看[系统边界](#connected-bodies)。

</details>

</div>

<div class="lesson-check" markdown="1">

### 秤的读数 {#lift-retry}

**Question:** A $50\,\mathrm{kg}$ passenger stands on a scale in a lift moving downwards. The scale reads $540\,\mathrm N$. Neglect other forces on the passenger. Find the acceleration, decide whether the passenger's speed is increasing or decreasing at that instant, and explain why the scale reading is not the cable tension.

<details markdown="1">
<summary>提示</summary>

秤测量地板对乘客的支持力。先选方向列式，再比较加速度与题目给出的速度方向。

</details>

<details markdown="1">
<summary>解答与核对</summary>

单独研究乘客，取向上为正：

$$540-50(9.8)=50a\quad\Rightarrow\quad a=1\,\mathrm{m\,s^{-2}}\text{ upwards}.$$

速度向下、加速度向上，因此速率减小。缆绳的拉力作用于升降机，秤的支持力作用于乘客。支持力为正，与保持接触一致。若因为乘客向下运动就把加速度取向下，回看[升降机的解释](#a-lift-and-its-passenger)。

</details>

</div>

## 学完另一课后回来 {#later-check}

学完[力矩与刚体平衡](/zh/alevel/a2-mathematics/mechanics/moments-and-rigid-objects/)后，关闭之前的解答再作答。

<div class="lesson-check" markdown="1">

### 两项预测 {#later-model-task}

**Question:** Explain why a bus may be treated as a particle to predict its straight-line acceleration, but not to predict toppling. Name the additional geometric information needed for the second task.

<details markdown="1">
<summary>提示</summary>

问题需要研究转动吗？哪些尺寸会影响结果？

</details>

<details markdown="1">
<summary>解答与核对</summary>

平动问题可能只需要总质量和外合力。倾覆还依赖车宽、重心和接触位置，质点模型丢掉了这些信息。可回看 [Q5](#q5--decide-whether-a-particle-model-is-enough)。

</details>

</div>

再做课程入口的[混合任务](/zh/alevel/a2-mathematics/mechanics/#mixed-problems)与[稍后回顾](/zh/alevel/a2-mathematics/mechanics/#later-review)。记录系统、方程依赖的假设与用过的帮助。

## 来源与范围 {#sources-and-scope}

范围为 [OxfordAQA 9660 大纲 v5.2，M2.1](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf)，使用 AS 受力方程分析模型。M2 全段为 printed27–30／PDF26–29（1-based），M2.1 位于 printed28／PDF27。评价解释已对照 **MA05 January 2025 Q5(a)**（[QP p10](/assets/pdf/fx-cg50/references/oxfordaqa-ma05-2025-january-question-paper.pdf#page=10)、[Final v1.0 MS p11](/assets/pdf/fx-cg50/references/oxfordaqa-ma05-2025-january-mark-scheme.pdf#page=11)：水平合力为零及其理由）与 **Q6(a)**（QP p12、MS p12：单位面积质量恒定）。这些材料用于核对所需推理，本页题目仍为 self-written／自拟。教材对应第10章10.1节，印刷 pp.148–150。

## 速查 {#quick-reference}

| 步骤 | 应写内容 |
| --- | --- |
| 选物体 | 为每条方程写明对应物体或组合系统 |
| 说明假设 | 解释 particle、light、taut、inextensible、smooth 的作用 |
| 画力 | 计重力与全部接触力，不把加速度当力 |
| 选方向 | 标正方向，区分速度与加速度 |
| 用模型 | 对每个选定物体用合力 $=ma$ |
| 检查结果 | 核对符号、单位、接触、张力与方程一致性 |
| 评价模型 | 说明哪项忽略因素可能重要，以及原因 |

**练习后：**记录错误属于模型、研究对象、漏力、方向还是计算。关闭解答后重做。

**你应能：**结合情境解释假设、分别列物体方程，并说明一个有效的模型限制。

**学习路线：**[力学目录](/zh/alevel/a2-mathematics/mechanics/) · [下一课：向量与运动学](/zh/alevel/a2-mathematics/mechanics/vectors-and-kinematics/)。

{% include exam_topic_practice.html %}
