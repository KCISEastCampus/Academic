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
---

[A2 力学](/zh/alevel/a2-mathematics/mechanics/) · M2.1 数学建模

为真实情境选择一个简单模型。说明各假设的含义、它如何支持所列方程，以及在什么情况下合理。

- **学习：**从[建模假设](#modelling-assumptions)开始，再学习[连接体](#connected-bodies)、[升降机与乘客](#a-lift-and-its-passenger)和[定滑轮](#a-fixed-pulley)。
- **作业帮助：**分别画出各物体；每幅图只放作用在该物体上的力。
- **复习：**先尝试[练习](#practice)，再打开提示与解答。

教材：第 10 章 10.1 节（印刷 pp.148–150）。章末复习也要求解释假设是否合理。下文的力计算使用 AS 力学的牛顿第二定律。

**开始前：**应掌握重力、张力、法向反力及 $F=ma$。题目未另给定时取 $g=9.8\,\mathrm{m\,s^{-2}}$。计算中保留精确值；本课自拟题最终数值默认三位有效数字，另有要求时依题意。

全部例题与练习均为自拟题，不是官方真题，不设官方分值。

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
| 均匀物体（uniform） | 质量分布均匀 | 可由对称性确定重心 |
| 空气阻力可忽略 | 不在力图中计空气阻力 | 对轻而迎风面积大的物体通常较不合理 |
| 只受重力运动 | 运动中只有重力 | 此时不能同时有接触面或拉紧绳的力 |

**质点不等于没有空气阻力。**两者是独立假设。**轻不等于不可伸长。**前者关于质量，后者关于长度。

通常的理想模型中，轻绳跨过光滑滑轮时两边张力相同。轻杆既可传递张力，也可传递**推力**（thrust），即既可拉也可推；绳只能拉。

两个质点分别连在同一根绳两端，绳跨过定滑轮且拉紧、不可伸长时，它们速率与加速度大小相等，方向可相反。不能把此结论套到所有绳和滑轮装置。

### 例题 1 — 为球选择模型 {#example-1--choose-the-model-for-a-ball}

**Question:** A ball is thrown across a field. We want to predict where it first reaches the ground. State two assumptions and explain their limits. Would the same model predict how the ball spins?

1. **把球视为质点。**追踪一点而非整个形状；球的尺寸相对飞行距离很小时可能合理，但不能描述自转。
2. **忽略空气阻力。**释放后只剩重力；近地面还取 $g$ 恒定。对轻球、强风或长距离飞行，忽略空气阻力较不合理。

**检查：**每个假设都有其作用和限制。只说“视为质点”无法解释为什么没有空气阻力。

## 连接体 {#connected-bodies}

先分别画物体，标力，再选正方向。加速度箭头描述运动，**不是额外的力**。

![汽车与拖车分别向右运动的受力图，包含法向反力、重力、张力与驱动力](/assets/img/a2-math-mech/car-trailer-model.svg)

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

## 升降机与乘客 {#a-lift-and-its-passenger}

每条方程都须对应明确物体。缆绳张力作用于升降机，地板的法向反力作用于乘客。

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

## 定滑轮 {#a-fixed-pulley}

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

## 练习 {#practice}

建议约 20–25 分钟。每个建模假设都应给理由，不能只写名称。

### Q1 — 分清两个假设 {#q1--separate-two-assumptions}

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

### Q2 — 辨认每个术语的作用 {#q2--identify-what-each-term-changes}

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

### Q3 — 改变汽车模型 {#q3--change-the-car-model}

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

### Q4 — 升降机减速 {#q4--a-lift-slows-down}

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

### Q5 — 判断质点模型是否足够 {#q5--decide-whether-a-particle-model-is-enough}

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

## 独立考查 {#independent-check}

**Self-written task.** A car pulls a trailer along a straight level road with a horizontal rope. A student writes a common acceleration and a common tension because “the rope is light”. Identify the missing assumptions. Explain which conclusion must be reconsidered if the rope stretches, and which must be reconsidered if its mass is not negligible. Describe what can happen to the tension when the car brakes and the trailer closes the gap. Do not calculate a force.

<details markdown="1">
<summary>推理提示</summary>

分开考虑长度约束与绳自身的受力平衡。柔软的绳能把拖车向后推吗？

</details>

<details markdown="1">
<summary>反馈与再尝试</summary>

在这个直线、固定连接的装置中，共同加速度需要绳保持拉紧且不可伸长。“轻”只描述质量，不能提供长度约束。绳若伸长，间距可以改变，两车加速度不一定相等。轻绳自身方程中的合力可忽略，因此这里两端张力相同；若绳质量不可忽略，可能需要不同的端力来加速绳。汽车刹车时，拖车可能靠近汽车而使绳松弛。柔软的绳不能传递压缩推力，松弛后张力为零，原来的拉紧绳方程不再适用。

**Retry, with this panel closed:** Replace the rope by a light rigid tow bar. Which part of the braking conclusion changes, and which length constraint can still be used? State the body on which each tow-bar force acts.

</details>

<details markdown="1">
<summary>再尝试核对</summary>

刚性牵引杆既可受拉也可受压，因此刹车时能向后推拖车，同时向前推汽车。这两个力作用于不同物体。直线固定长度的装置仍使两车加速度相同，但若不知道其他外力，还不能确定加速度。

</details>

## 来源与范围 {#sources-and-scope}

范围依据为 [OxfordAQA 9660 specification v5.2，M2.1](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf)。解释类作答参考已读的 **MA05 January 2025 Q5(a)、Q6(a)**，以及配套[试卷](/assets/pdf/fx-cg50/references/oxfordaqa-ma05-2025-january-question-paper.pdf)与[最终评分标准](/assets/pdf/fx-cg50/references/oxfordaqa-ma05-2025-january-mark-scheme.pdf)。这些用于核对所需推理类型，本页题目仍是自拟题。

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
