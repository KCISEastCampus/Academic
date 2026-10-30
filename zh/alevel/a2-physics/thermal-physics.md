---
title: 热学
layout: subjects
mathjax: true
grade: a2
subject: a2-physics
lang: zh-CN
translation_of: /alevel/a2-physics/thermal-physics/
permalink: /zh/alevel/a2-physics/thermal-physics/
toc_headings: h2, h3, h4
study_page: true
---

[A2 物理](/zh/alevel/a2-physics/) · PH04 · 第一章 · 3.11 热学

解释内能如何改变，计算加热与传导中的能量，用气体定律和分子运动解释压强。英文题干和公式保留，讲解、提示与解答使用中文；图内保留英文标签。

- **学习：**从[模型选择](#method)开始，再学习[内能与第一定律](#internal-energy)、[比热容与比潜热](#specific-heat-and-latent-heat)、[热传导](#conduction)、[气体定律](#ideal-gases)与[分子运动论](#kinetic-theory)。
- **作业帮助：**按题型查看[能量符号](#example-first-law)、[流动与热损失](#example-continuous-flow)、[传导](#example-conduction)、[气体定律](#example-gas-law)或[活塞做功](#example-gas-work)的例题，先写系统与固定量。
- **复习：**关闭提示和解答，先做[练习](#practice)，再用[常见错误](#common-errors)定位需要重学的部分。

**开始前：**复习 [AS 物理](/zh/alevel/as-physics/)中的能量守恒、功率与 SI 单位。温度比用开尔文，压强用绝对压强；先把质量、体积和时间换成 SI 单位，中间计算保留额外位数。

本章覆盖大纲 3.11.1–3.11.4 与必做实验 8、9。例题和练习的改编或自拟来源见页末，未设置官方分值。

**分析原始记录：**[RP8 加热](#data-specific-heat) · [RP9 玻意耳](#data-boyle) · [RP9 查理](#data-charles)。活动使用构造数据，不代替实际操作。

**分四段学习：**[1. 能量、量热与 RP8](#internal-energy) → [2. 稳态流动与传导](#continuous-flow) → [3. 气体状态、功与 RP9](#ideal-gases) → [4. 分子解释](#kinetic-theory)。每段先完成相关例题和记录任务，再做综合[练习](#practice)。连续流量热仍是核心路线的一部分。

## 计算前先选择模型 {#method}

**学习目标：**从物理过程选择能量平衡，说明适用条件，用统一单位计算，再用过程特征或测量结果检查答案。

**先试一试：**对下面三个情境，只判断什么量在变、该用什么模型，暂不计算。

1. Ice melts while its temperature stays constant.
2. Liquid enters and leaves a heater steadily.
3. A sealed rigid gas container cools.

<details markdown="1">
<summary>核对模型选择</summary>

1. 物态改变，用比潜热，不能只用温升计算。温度不变不代表内能不变。
2. 每秒都有质量流过，用质量流率做功率平衡，不能代入整箱质量。
3. 气体量、体积固定，压强随绝对温度改变。密封并不代表恒压。

</details>

| 题目线索 | 先做的判断 | 模型与条件 |
| --- | --- | --- |
| 同时有加热与做功 | 画出系统边界，确定正负 | 第一定律；外界对系统做功为正 |
| 升降温或熔化、沸腾 | 把过程分成不同阶段 | 各温变阶段用比热容，各物态变化阶段用比潜热 |
| 连续稳定流动并加热 | 找每秒流过的质量 | 功率平衡；热损失不可忽略时须计入 |
| 能量穿过墙体 | 确认平板几何与两面温度 | 稳态传导；题目给整体 U 值时使用该值 |
| 气体状态改变 | 列出气体量、压强、体积、温度中哪些固定 | 理想气体方程，或在相应固定条件下导出的比值关系 |
| 活塞移动 | 判断体积变化量与方向 | 恒压做功；再把对外做功换成对气体做功 |
| 给出分子运动信息 | 区分单个粒子与整份气样 | 分子压强或平均平动动能 |

按**选模型 → 计算 → 检查**使用例题：先遮住解答，独立写出方程与条件；核对时比较第一步，不能只对最终数字。

## 内能、加热与做功 {#internal-energy}

<span id="energy-stored-and-transferred"></span>

**内能（internal energy）**是粒子随机运动和相互作用相关的微观能量之和，即随机动能与势能之和。它不包含物体整体运动的动能，也不包含物体作为整体的重力势能。**温度（temperature）**描述热状态；对理想气体，温度反映分子的平均平动动能。温度不等于总内能：同温下，更大的一份物质可以具有更多内能。

**热量（heat）**是因温差而从高温处向低温处传递的能量。物体储存的是内能，不能说物体“含有热量”。做功也是传递能量的方式，例如压缩气体，或通过电路向加热器输入能量。

热力学第一定律就是系统的能量守恒：

$$\Delta U=Q+W$$

这里 $Q>0$ 表示系统**吸热**，$W>0$ 表示外界**对系统做功**。系统放热时 $Q$ 为负；系统对外做功时 $W$ 为负。先明确系统边界：系统包含电热器和金属块时，电能输入按功处理；若系统只包含金属块，加热器传给它的能量按加热处理。同一笔输入不能重复计算。

### 例题 1：第一定律的符号 {#example-first-law}

*改编自 PH04 January 2024 Q1.2.*

A gas expands, doing 350 J of work on its surroundings while receiving 20 J by heating. Find the change in internal energy.

**1. 选模型与定符号。**以气体为系统。气体**对外**做功，因此 $W=-350\,\mathrm J$；同时 $Q=+20\,\mathrm J$。

**2. 计算。**将两项传能各计入一次第一定律。

$$\Delta U=Q+W=20-350=\boxed{-330\,\mathrm J}.$$

**3. 检查：**即使吸收了热量，它的内能仍减少 330 J，因为对外做功更多。350 J 输出来自 20 J 吸热与 330 J 内能减少，能量平衡。

## 温度变化与物态变化 {#specific-heat-and-latent-heat}

**比热容（specific heat capacity）** $c$ 是不发生物态变化时，单位质量物质升温一开尔文所需的能量。若 $c$ 恒定，且能量平衡中没有另需计入的做功项：

$$Q=mc\Delta\theta$$

单位为 $\mathrm{J\,kg^{-1}\,K^{-1}}$。温差 $1\,^{\circ}\mathrm C$ 与温差 $1\,\mathrm K$ 数值相同。升温时 $\Delta\theta>0$，降温时温度变化为负。

**比潜热（specific latent heat）** $l$ 是单位质量物质在恒温物态变化中吸收或释放的能量。熔化、沸腾吸热；凝固、液化放热。能量大小为：

$$Q=ml$$

$l$ 的单位为 $\mathrm{J\,kg^{-1}}$。纯物质在固定压强下达到平衡的物态变化中，温度和平均随机动能不变，而粒子势能改变。加热曲线的平台段**不代表没有能量输入**。跨越多个阶段时，要把升温项和物态变化项分段相加，不能只算一次总温升。

<img src="/assets/img/physics-thermal-heating.svg" alt="加热曲线示意：冰升温、零摄氏度熔化平台、水升温；平台处继续输入能量，粒子势能增加。固定压强，图不按比例绘制。" width="560" height="330" loading="lazy">

**读图：**上升段温度增加；熔化平台上温度不变，能量仍在输入。横轴是输入能量，不能把这幅示意图的斜率直接当作温度随时间变化的速率。

### 检查点：冰与水 {#checkpoint-state-change}

Ice melts at constant temperature. Does its internal energy remain constant? Explain in terms of particles.

<details markdown="1">
<summary>核对你的解释</summary>

不会。吸收的能量使结构改变，粒子势能增加；温度不变，表示平均随机动能不变。因此内能增加。

</details>

## 必做实验 8：电学法测比热容 {#required-practical-8}

**阅读方法前先画图（自拟题）：** Draw a labelled arrangement for measuring the specific heat capacity of a metal block electrically. Place the ammeter, voltmeter, heater, temperature sensor and insulation. State which measured quantities give electrical energy and which give the block's temperature rise. Identify one energy transfer that the simplest calculation neglects.

<details markdown="1">
<summary>核对装置与条件</summary>

电流表串联，电压表跨接加热器。标明金属块、加热器和温度传感器之间良好的热接触，以及外部保温。电功率与时间给出输入能量，两次温度读数给出温升；还须考虑环境和装置吸收的能量。

</details>

测金属块质量 $m$。把电热器与温度计放入紧密配合的孔中，使用少量适当的导热接触材料改善接触，并为块体保温。电流表串联，电压表**跨接电热器**。测量 $V$、$I$、加热时间 $t$ 和温升 $\Delta\theta$。若电功率近似恒定，热损失和装置自身热容可忽略：

$$E=VIt,\qquad c\approx\frac{VIt}{m\Delta\theta}$$

等时间间隔记录温度，画温度—时间图。在近似直线的一段取斜率 $s=\Delta\theta/\Delta t$，估算 $c\approx VI/(ms)$。用多个读数的拟合直线，避免只取一次很小的温升。检查 $V$、$I$ 是否保持恒定。记录仪器分辨率并重复实验；温差的不确定度取决于**两个端点读数**。

电能也会加热电热器、温度计，并可能流向环境。若把全部电能都算给金属块，算出的 $c$ 通常**偏大**。保温减少热损失；良好接触和考虑热滞后可减少起始读数的误导。仅重复实验不能消除这些系统效应。比较实验时应使用相近温度范围，因为热损失随物体与室温之差改变。

使用合适的低压电源，避免触碰热部件，取出电热器前先断电。浸入式或插入式加热器不能脱离规定介质通电。实际操作前由教师检查装置。

### 检查点：不确定度与热损失 {#checkpoint-practical}

A thermometer gives readings of 20.0 and 22.0 degrees Celsius, each with an uncertainty of ±0.1 K. Estimate the percentage uncertainty in the temperature rise using addition of absolute uncertainties. Would a larger temperature rise remove heat-loss bias?

<details markdown="1">
<summary>核对实验诊断</summary>

温升为 $\Delta\theta=2.0\,\mathrm K$。绝对不确定度相加得到 $\delta(\Delta\theta)=0.2\,\mathrm K$，所以 $0.2/2.0\times100\%=10\%$。若其他测量量精确，这就是它对计算比热容的近似百分比不确定度贡献。

读数不确定度相同时，较大温升可减小这一百分比贡献，却不能消除热损失：与室温的温差变大，损失反而可能增加。要区分测量不确定度与能量损失造成的系统偏差，不能声称一项改进同时消除了两者。

</details>

### 例题 2：利用加热图像 {#example-specific-heat}

*自拟题。*

A 0.50 kg block is heated at 12 V and 2.0 A. Its temperature rises steadily at $0.053\,\mathrm{K\,s^{-1}}$. Estimate its specific heat capacity, ignoring losses and apparatus heat capacity.

**1. 选模型。**图像给出温升速率，不是温差。忽略损失时，电功率等于金属块能量增加的速率：$VI=mcs$。

**2. 计算。**变形求比热容。

$$c=\frac{VI}{ms}=\frac{12\times2.0}{0.50\times0.053}.$$

$$\boxed{c=9.1\times10^2\,\mathrm{J\,kg^{-1}\,K^{-1}}}.$$

**3. 检查：**把未舍入值代回，可得到测得的功率 $24\,\mathrm W$。这是在题设假设下的估算，并没有校正热损失。功率和质量固定时，加热图线斜率越大，比热容越小。

### 数据探究：一组加热记录 {#data-specific-heat}

*自拟题；教学构造数据，不代表完成了 RP8 实验。*

A 0.500 kg block starts at room temperature. The heater voltage is 12.0 V and current 2.00 A throughout. Temperature readings have uncertainty ±0.1 K. Treat the mass, power and times as exact for this analysis; their uncertainties would also matter in an actual experiment.

| Time / s | Thermometer reading / °C |
| --- | --- |
| 0 | 20.0 |
| 30 | 20.9 |
| 60 | 22.3 |
| 90 | 23.7 |
| 120 | 25.1 |
| 150 | 26.4 |
| 180 | 27.6 |
| 240 | 29.9 |
| 300 | 31.9 |
| 360 | 33.7 |

1. Plot temperature against time. Choose an interval you can reasonably approximate by a straight line, justify it, and estimate an **apparent** specific heat capacity using the fitted gradient. Show your construction; do not simply join every point.
2. Compare your gradient with a fit over 180–360 s. Can one constant straight line describe the whole record within the reading uncertainty? Explain the early and late behaviour without claiming the material's true specific heat capacity has been measured exactly.
3. Propose one change addressing early readings and one addressing late readings. Explain why a larger number of repeats alone is insufficient. Which further measurements would help separate energy absorbed by the apparatus from energy lost to the room?

本题是**自拟题，读数为构造教学数据**，不表示 RP8 实际操作已完成。先独立作图、选区间并说明理由，再查看提示和分析。

<details markdown="1">
<summary>提示</summary>

先比较连续区间的温升。温度计响应未必瞬时完成；块体与室温差增大时，热损失也可能增大。$c_{\mathrm{app}}=VI/(ms)$ 只是在给定近似下的估算，选取区间不等于已消除全部损失。

</details>

<details markdown="1">
<summary>分析与再尝试</summary>

可以折中选择 60–150 s，避开最明显的初始滞后与后段弯曲。这是近似选择，不是唯一正确区间。拟合其中四个读数得到：

$$s\approx0.0457\,\mathrm{K\,s^{-1}}.$$

$$\begin{aligned}
c_{\mathrm{app}}&\approx\frac{24.0}{0.500\times0.0457}\\
&\approx1.05\times10^3\,\mathrm{J\,kg^{-1}\,K^{-1}}.
\end{aligned}$$

180–360 s 拟合得到：

$$s\approx0.0338\,\mathrm{K\,s^{-1}}.$$

$$c_{\mathrm{app}}\approx1.42\times10^3\,\mathrm{J\,kg^{-1}\,K^{-1}}.$$

起初温度计逐渐响应，斜率增大，随后斜率减小。后段变化不能由 ±0.1 K 读数不确定度下的同一条直线解释。损失增大使加热块体的净功率低于 24 W；若仍把全部输入归给块体，表观比热容偏大。数据尚未分离块体与电热器的热容，也不能唯一确定每种弯曲原因。

改善测温接触并考虑响应时间，针对起始滞后；改善保温，针对后段损失。重复能显示散布，不能校正这些偏差。可在相近温度测冷却速率以估计热损失，并独立测装置热容以作装置修正；两种修正都要说明假设。

**再尝试：**同一块体、相同温度范围内，降低功率一定改进估计吗？不一定。加热时间变长、损失占输入的比例增大，可能使偏差更大，即使温度变化更容易跟踪。

</details>

## 测比潜热与背景融冰修正 {#latent-heat-measurement}

融冰实验测量状态变化，区别于 RP8 中的温升测量。需要区分电热器供能与环境传入的能量。

### 例题 3：扣除背景融冰 {#example-latent-heat}

*改编自 PH04 January 2024 Q3.1.*

Without an electrical heater, 16.0 g of ice melts in 10.0 min. With a 32 W heater operating, 41.6 g melts in 5.0 min. Assume the background melting rate is unchanged. Determine the specific latent heat of fusion.

**1. 选模型并修正测量。**冰已在熔化，用比潜热。先把两次质量换算到**相同时间**。5.0 min 内，环境本身会融化 $8.0\,\mathrm g$。加热器额外融化的质量为 $41.6-8.0=33.6\,\mathrm g=0.0336\,\mathrm{kg}$。

**2. 计算。**只有额外融化的质量归因于电能输入。

$$l=\frac{Pt}{\Delta m}=\frac{32\times300}{0.0336}.$$

$$\boxed{l=2.86\times10^5\,\mathrm{J\,kg^{-1}}}.$$

**3. 检查：**若不扣背景，把全部融冰质量都归因于加热器，计算的 $l$ 会**偏小**。这与金属块实验中的热损失误差方向不同。背景修正假设冰已在熔点、收集可靠，且两次实验中环境供热功率相同。

## 连续流动系统 {#continuous-flow}

稳定流体经过电热器。令 $\dot m=\Delta m/\Delta t$ 为质量流率。进出口温度稳定时，装置中储存的能量不再随时间变化。忽略其他能量变化，电功率等于流体吸收的功率与热损失功率之和：

$$P=\dot m c(\theta_{\mathrm{out}}-\theta_{\mathrm{in}})+P_{\mathrm{loss}}$$

题目给出每秒流过的质量时，不能代入整箱流体的总质量。热损失可忽略时，$c=P/(\dot m\Delta\theta)$。若两次稳态实验有**相同的进出口温度**，可近似认为损失相同，相减消去：

$$P_2-P_1=(\dot m_2-\dot m_1)c\Delta\theta$$

改变温度范围可能改变热损失，从而使上述消去不再成立。

### 例题 4：消去稳态热损失 {#example-continuous-flow}

*自拟题。*

A liquid flows through an electrical heater. In two steady runs, the inlet and outlet temperatures remain at 20.0 and 35.0 degrees Celsius. Power is 80.0 W at a mass flow rate of $1.00\times10^{-3}\,\mathrm{kg\,s^{-1}}$, and 140 W at $2.00\times10^{-3}\,\mathrm{kg\,s^{-1}}$. Assume equal heat-loss powers. Determine the specific heat capacity and heat-loss power.

**1. 选模型。**分别写两次功率平衡。相同进出口温度支持等热损失假设；仅温升相同，不保证向室内的热损失相同。

$$80.0=(1.00\times10^{-3})c(15.0)+P_{\mathrm{loss}}$$

$$140=(2.00\times10^{-3})c(15.0)+P_{\mathrm{loss}}$$

**2. 相减并计算。**第二式减第一式，再把求得的比热容代回任意一次实验。

$$\begin{aligned}
c&=\frac{140-80.0}{(2.00-1.00)\times10^{-3}\times15.0}\\
&=\boxed{4.00\times10^3\,\mathrm{J\,kg^{-1}\,K^{-1}}}.
\end{aligned}$$

$$P_{\mathrm{loss}}=80.0-(1.00\times10^{-3})(4000)(15.0)=\boxed{20.0\,\mathrm W}.$$

**3. 检查。**第二次实验中，液体吸收 $120\,\mathrm W$，环境得到 $20.0\,\mathrm W$，合计正好是输入的 $140\,\mathrm W$。接着做[练习 3](#question-3)，不要照抄这里的数字。

## 热传导与 U 值 {#conduction}

热传导（conduction）通过粒子相互作用传能，不伴随物质整体流动。固体中的振动传递能量；金属中可移动电子也传能。稳态时，各位置温度不变，但能量仍持续流过。

均匀平板的厚度为 $L$、截面积为 $A$、两面温差为 $\Delta\theta$ 时，传热速率的**大小**为：

$$P=\frac{Q}{t}=\frac{kA\Delta\theta}{L}=U_{\mathrm{value}}A\Delta\theta$$

$$U_{\mathrm{value}}=\frac{k}{L}$$

热导率（thermal conductivity）$k$ 的单位为 $\mathrm{W\,m^{-1}\,K^{-1}}$。U 值（传热系数）的单位为 $\mathrm{W\,m^{-2}\,K^{-1}}$。相同面积与温差下，U 值越小，每秒传递的能量越少。本章处理平行平面；$U=k/L$ 适用于**单层均匀平板**，不能直接套到复合墙体或弯曲容器。若题目给出整体 U 值，应使用该值。

U 值与内能 $U$ 不是同一物理量。热导率 $k$ 也不同于后文的玻尔兹曼常量 $k_{\mathrm B}$。功率单位是瓦；若功率恒定，一段时间的损失能量为 $E=Pt$。使用平板公式前，先把毫米换成米。

### 例题 5：容器底部的热传导 {#example-conduction}

*改编自 PH04 January 2024 Q3.2.*

Model a flat base as a uniform slab with $k=0.12\,\mathrm{W\,m^{-1}\,K^{-1}}$, area $1.75\times10^{-2}\,\mathrm{m^2}$, thickness 1.7 mm and face temperature difference 5.5 K. Calculate conduction power and the ratio of a 32 W heater power to this power.

**1. 选模型与换单位。**采用单层均匀平板的稳态传导，已知温差是两表面间的温差。

$$L=1.7\times10^{-3}\,\mathrm m.$$

**2. 计算功率并比较。**

$$P=\frac{kA\Delta\theta}{L}=\frac{0.12\times1.75\times10^{-2}\times5.5}{1.7\times10^{-3}}.$$

$$\boxed{P=6.8\,\mathrm W},\qquad \boxed{\frac{32}{P}=4.7}.$$

**3. 检查：**求比值时保留未舍入的功率。例题 3 中，加热器融冰与背景融冰的质量比为 $33.6/8.0=4.2$。差异提示仅计算底部的模型未必包含全部背景传热；侧壁、暴露表面等其他路径也可能供热。模型与实验不符时，应检查假设，不能强行让测量值吻合。

## 经验气体定律与绝对温度 {#ideal-gases}

<span id="gas-laws"></span>

气体定律是由实验测量建立的**经验规律（empirical laws）**。每条规律都有气体量固定和特定条件。绝对温度为 $T/\mathrm K=\theta/^{\circ}\mathrm C+273.15$。气体定律中的温度比必须用开尔文，不能用摄氏度。绝对零度为 $0\,\mathrm K=-273.15\,^{\circ}\mathrm C$，是理想气体模型的零温极限；真实气体通常在达到外推的零体积之前就已凝结。

| 固定条件 | 关系 | 常用图像 |
| --- | --- | --- |
| 恒温，气体量固定（玻意耳） | $pV=\text{constant}$ | $p$ 对 $1/V$：过原点的直线 |
| 恒压，气体量固定（查理） | $V/T=\text{constant}$ | $V$ 对以 K 为单位的 $T$：过原点的直线 |
| 恒容，气体量固定 | $p/T=\text{constant}$ | $p$ 对以 K 为单位的 $T$：过原点的直线 |

压强必须是从真空起算的**绝对压强**。若仪表显示相对于大气的表压，须加上大气压。还要固定气体量：这些比值关系不适用于漏气的敞开容器。

## 摩尔数、分子数与气体方程 {#gas-equation}

$$pV=nRT=Nk_{\mathrm B}T,\qquad N=nN_{\mathrm A},\qquad R=N_{\mathrm A}k_{\mathrm B}$$

$p$ 用 Pa，$V$ 用 $\mathrm{m^3}$，$T$ 用 K，$n$ 用 mol。分子数 $N$ 是计数，不是质量。摩尔质量 $M$ 用 $\mathrm{kg\,mol^{-1}}$，样品总质量为 $m_{\mathrm{gas}}$，单分子质量为 $m_0$：

$$n=\frac{m_{\mathrm{gas}}}{M},\qquad m_0=\frac{M}{N_{\mathrm A}},\qquad m_{\mathrm{gas}}=Nm_0$$

常用常量为 $R=8.31\,\mathrm{J\,mol^{-1}\,K^{-1}}$、$k_{\mathrm B}=1.38\times10^{-23}\,\mathrm{J\,K^{-1}}$、$N_{\mathrm A}=6.02\times10^{23}\,\mathrm{mol^{-1}}$；考试以题目提供值为准。记住 $1\,\mathrm{cm^3}=10^{-6}\,\mathrm{m^3}$、$1\,\mathrm{kPa}=10^3\,\mathrm{Pa}$。

### 例题 6：冷却后的压强 {#example-gas-law}

*自拟题。*

A sealed rigid container holds gas at 120 kPa and $27\,^{\circ}\mathrm C$. Find its pressure at $7\,^{\circ}\mathrm C$, assuming ideal-gas behaviour.

**1. 选模型与固定量。**密封使气体量不变，刚性使体积不变。理想气体方程中的 $nR/V$ 因此不变，得到 $p/T=\text{constant}$。

**2. 换算温度并计算。**取 $T_1=300.15\,\mathrm K$、$T_2=280.15\,\mathrm K$：

$$p_2=p_1\frac{T_2}{T_1}=120\times\frac{280.15}{300.15}=\boxed{112\,\mathrm{kPa}}.$$

**3. 检查：**气体量与体积固定时，冷却应使压强降低；112 kPa 小于原来的 120 kPa，与过程相符。若用 $7/27$ 就错了：摄氏温度之比不是绝对温度之比。

## 气体膨胀做功 {#gas-work}

面积为 $A$ 的活塞移动 $\Delta x$，则 $\Delta V=A\Delta x$。对抗恒定外压 $p_{\mathrm{ext}}$ 时，力为 $p_{\mathrm{ext}}A$，因此：

$$W_{\mathrm{by}}=p_{\mathrm{ext}}\Delta V,\qquad W_{\mathrm{on}}=-p_{\mathrm{ext}}\Delta V$$

膨胀时 $\Delta V$ 为正：气体**对外**做功为正，外界**对气体**做功为负。应把 $W_{\mathrm{on}}$ 代入 $\Delta U=Q+W$。对缓慢且机械平衡的过程，气体压强近似等于外压；$p$–$V$ 图线下面积给出气体对外做功。只有压强恒定，才能直接用矩形面积 $p\Delta V$。

<img src="/assets/img/physics-thermal-pv.svg" alt="恒压膨胀的压强—体积图：100千帕下，体积从0.002增至0.005立方米；阴影面积为300焦耳，表示气体对外做功，外界对气体做功为负300焦耳。" width="560" height="330" loading="lazy">

**读图：**膨胀沿箭头向右，图下面积给出气体对外做功的大小。把它代入第一定律时，先转换为外界对气体做功的符号。图中数据用于[练习 6](#question-6)。

### 例题 7：压缩与能量守恒 {#example-gas-work}

*自拟题。*

A gas is compressed slowly under a constant external pressure of 150 kPa, from $4.0\times10^{-3}\,\mathrm{m^3}$ to $2.0\times10^{-3}\,\mathrm{m^3}$. During compression it releases 750 J by heating. Calculate the work done on the gas and its change in internal energy.

**1. 选模型与定符号。**以气体为系统。压缩时体积变化为负，外界对气体做功为正；向外传出热量，所以 $Q=-750\,\mathrm J$。

$$\Delta V=V_{\mathrm f}-V_{\mathrm i}=-2.0\times10^{-3}\,\mathrm{m^3}.$$

**2. 先算功，再用第一定律。**

$$W_{\mathrm{on}}=-p_{\mathrm{ext}}\Delta V.$$

$$W_{\mathrm{on}}=-(150\times10^3)(-2.0\times10^{-3})=\boxed{+300\,\mathrm J}.$$

$$\Delta U=Q+W=-750+300=\boxed{-450\,\mathrm J}.$$

**3. 检查。**向外传出的 750 J 来自外界做功输入的 300 J 与内能减少的 450 J。压缩不一定升温，过程中也可能向外传能。与[练习 6](#question-6)的膨胀比较，功的符号正好反过来。

## 必做实验 9：玻意耳定律与查理定律 {#required-practical-9}

**阅读方法前先画图（自拟题）：** Sketch separate arrangements for testing Boyle's law and Charles's law with a fixed gas sample. Mark the sample boundary, measured quantities and the quantity held constant in each. Show where connecting-tube volume must be included and where a boundary must move. Explain why sealing the sample does not always mean fixing its volume.

<details markdown="1">
<summary>核对装置与条件</summary>

玻意耳装置应有密闭气体、绝对压强传感器及缓慢可调的边界；体积包括连接管，每次改变后等待温度平衡。查理装置应有可自由移动的标记或活塞，以及搅拌的恒温水浴；固定气量可在近似恒定外压下膨胀。密闭固定的是气量，不一定固定体积。

</details>

**玻意耳定律：**用合适的注射器或压强—体积装置封住固定气样。恒温下测量多组体积与对应的**绝对压强**。缓慢改变体积，每次等待温度稳定，检查漏气。画 $p$ 对 $1/V$；近似过原点的直线支持 $pV$ 恒定。计入已知的连接管体积。快速压缩会使气体升温，即时读数未必代表等温状态。

**查理定律：**封住固定气样，让边界自由移动，例如用液体标记封闭一段空气柱，使压强近似保持大气压。用搅拌水浴改变温度；达到热平衡后再测气体温度与体积。对均匀毛细管，柱长与体积成正比。检查标记能自由移动、气体保持密封。画 $V$ 对以 K 为单位的 $T$，或把 $V$—摄氏温度图外推，估算绝对零度。这是在检验模型，不是要求把装置真的冷却到绝对零度。

使用符合压强额定值的装置，固定接头，防止热水烫伤与玻璃破损。学生自制装置不用汞。说明控制条件的目的：封住气样保证气体量不变；等待保证温度稳定；可移动边界使查理实验保持恒压。

### 数据探究：玻意耳定律 {#data-boyle}

*自拟题；教学构造数据，不代表完成了 RP9 实验。*

A sealed gas sample settles at 296 K after each slow volume change. The pressure sensor reads **absolute** pressure with uncertainty ±0.5 kPa. Syringe volumes have uncertainty ±0.2 cm³; the connecting tube adds a fixed 2.0 cm³. Treat that tube volume and the temperature as exact for this task.

| Syringe volume / cm³ | Settled absolute pressure / kPa |
| --- | --- |
| 40.0 | 100.0 |
| 35.0 | 113.5 |
| 30.0 | 131.3 |
| 25.0 | 155.6 |
| 20.0 | 190.9 |
| 15.0 | 247.1 |

1. Decide which volume belongs in Boyle's law. Plot pressure against the reciprocal of that volume, fit a line without forcing it through zero, and estimate the amount of gas. Check the intercept and the products against the stated uncertainties.
2. Compare with a plot using only the syringe volume. Why would its systematic curvature not by itself show that Boyle's law fails?
3. On a separate rapid compression to 20.0 cm³, the immediate pressure is 205.0 kPa before settling to 190.9 kPa. Explain the direction of the change. State what you would measure or control before including the immediate reading in the fit.

本题是**自拟题，使用构造数据**。先判断体积与压强的含义，再拟合和检查实验条件，不把数据练习当作实际实验。

<details markdown="1">
<summary>提示</summary>

使用全部封闭气体的体积、绝对压强及固定气量。注意坐标单位：$1\,\mathrm{kPa\,cm^3}=10^{-3}\,\mathrm{Pa\,m^3}$。即时与稳定读数未必对应相同气体温度。

</details>

<details markdown="1">
<summary>分析与再尝试</summary>

先加连接管体积：$V=V_{\mathrm{syringe}}+2.0\,\mathrm{cm^3}$。乘积约为 $4.20\times10^3\,\mathrm{kPa\,cm^3}$，舍入引起的散布远小于给定测量不确定度。对修正后体积的倒数拟合，斜率约为 $4.20\times10^3\,\mathrm{kPa\,cm^3}$，截距与零相容。换为 SI 单位：

$$pV\approx4.20\,\mathrm{Pa\,m^3}.$$

$$\begin{aligned}
n&\approx\frac{4.20}{8.31\times296}\\
&=1.71\times10^{-3}\,\mathrm{mol}.
\end{aligned}$$

未修正图线弯曲，是因为横轴漏计了部分气体体积，其乘积也不恒定；这属于装置模型错误，不能单独证明气体定律失败。修正数据在当前不确定度内支持模型，不证明范围外仍精确成立。

快速压缩时，外界做功后能量尚未来得及充分传出，温度与压强升高。最终体积不变时，冷却到 296 K 附近使压强下降。需等待热平衡、监测温度并排查漏气，再将读数作为等温数据。

**再尝试：**若传感器给的是表压，只加 2.0 cm³ 就够了吗？不够，还要加大气压得到绝对压强。

</details>

### 数据探究：查理定律 {#data-charles}

*自拟题；教学构造数据，不代表完成了 RP9 实验。*

A fixed air sample is trapped in a uniform capillary by a movable liquid marker. While the marker moves freely, pressure remains approximately atmospheric. The table gives equilibrated bath temperatures (uncertainty ±0.2 K) and air-column lengths (uncertainty ±0.2 mm). The marker is seen to stick during the final 80.0 °C reading.

| Temperature / °C | Air-column length / mm |
| --- | --- |
| 10.0 | 56.6 |
| 20.0 | 58.7 |
| 30.0 | 60.6 |
| 40.0 | 62.7 |
| 50.0 | 64.6 |
| 60.0 | 66.7 |
| 70.0 | 68.6 |
| 80.0 | 68.7 |

1. Plot length against Celsius temperature. Decide which points can test a constant-pressure model, giving an experimental reason. Fit the usable readings and estimate the zero-length Celsius temperature.
2. Re-express the relationship using kelvin. Explain why zero length is an extrapolation, and why the 80.0 °C result cannot immediately be used to reject Charles's law.
3. Specify how to repeat that reading so it becomes a valid model test, rather than merely deleting an inconvenient point.

本题是**自拟题，使用构造数据**。根据独立操作观察判断模型条件；不能仅因为读数偏离预期而删点。

<details markdown="1">
<summary>提示</summary>

截面积均匀时，柱长与体积成正比。标记卡住后，气体可能无法膨胀以维持题设压强。判断依据应是实验观察，不是读数离预期直线有多远。

</details>

<details markdown="1">
<summary>分析与再尝试</summary>

用 10–70 °C 检验恒压模型，同时调查并重做已有独立卡滞观察的末次读数。拟合得到：

$$\frac{l}{\mathrm{mm}}\approx0.200\frac{\theta}{^{\circ}\mathrm C}+54.64.$$

$$\theta_0\approx-273\,^{\circ}\mathrm C.$$

$$\frac{l}{\mathrm{mm}}\approx0.200\frac{T}{\mathrm K}+0.01.$$

开尔文关系的小截距在读数不确定度内与零相容，支持测量范围内体积与绝对温度成正比；不能据此断言真实气样能一直保持气态直到外推零体积温度。

标记卡住会使恒压条件失效，末次读数不能直接检验题设条件下的查理定律。恢复自由移动且不丢失封闭气样，检查压强条件，等待温度平衡后重测。保留故障及重测记录，不悄悄替换。

**再尝试：**若温度计始终高读 2 K，图仍可为直线，但摄氏横截距向较不负的方向移动 2 K。重复实验不能消除这一校准偏差。

</details>

## 气体分子运动论 {#kinetic-theory}

### 模型假设与布朗运动证据 {#kinetic-model-and-evidence}

<span id="molecular-model"></span>

**布朗运动（Brownian motion）**是可见悬浮颗粒的不规则随机运动，例如空气中的烟粒。不可见的气体分子从各方向不均衡地撞击它们。看到的运动亮点**不是气体分子本身**。这为微观粒子存在并持续随机运动提供证据。

简单理想气体模型假设：大量相同粒子随机运动；粒子自身体积相对容器可忽略；除碰撞外不存在分子间作用力；碰撞持续时间可忽略；粒子之间及粒子与壁的碰撞均为弹性碰撞。方向随机意味着三个垂直方向的速度分量平方平均值相等。真实气体在稀薄、远离凝结条件时最接近此模型。

### 从动量传递理解压强 {#pressure-and-momentum}

**1. 一次碰撞。**取质量为 $m_0$、非零速度分量为 $c_x$ 的分子，容器为边长 $L$ 的立方体。弹性碰撞使法向动量反向，传给壁的动量大小为 $\Delta p_{\mathrm{wall}}=2m_0\lvert c_x\rvert$。

**2. 每秒传递的动量。**在简化的撞壁计算中，两次撞击同一面壁的时间间隔为 $\Delta t=2L/\lvert c_x\rvert$。力就是动量传递速率：

$$F_1=\frac{\Delta p_{\mathrm{wall}}}{\Delta t}=\frac{m_0c_x^2}{L}.$$

**3. 整份气样与三个方向。**把各分子的贡献相加，再除以壁面积 $L^2$。方向随机使 $\langle c_x^2\rangle=\langle c^2\rangle/3$；利用 $V=L^3$ 得到：

$$pV=Nm_0\langle c_x^2\rangle=\frac13Nm_0\langle c^2\rangle=\frac13Nm_0c_{\mathrm{rms}}^2$$

这里 $c_{\mathrm{rms}}=\sqrt{\langle c^2\rangle}$ 是**均方根速率**，不是平均速率，也不是平均速度。静止气体的平均速度可为零，但均方根速率大于零。用密度 $\rho=m_{\mathrm{gas}}/V$，也可写成 $p=\rho c_{\mathrm{rms}}^2/3$。不要把总质量代入 $m_0$ 后再乘一次 $N$。

恒温压缩时，体积减小使分子撞壁更频繁；平均速率和单次碰撞的平均动量变化不变。单位壁面积每秒接收的动量增加，因此压强增大。恒容升温则使分子速率增加，既提高碰撞频率，也增加单次碰撞的平均动量传递。

恒压升温时，分子运动更快；若边界可自由移动，气体膨胀使单位体积分子数减少，从而抵消速率增加对压强的影响。对固定气体量，这对应查理定律中的体积随绝对温度增加。解释时要同时说出分子速率与数密度的变化。

### 温度与分子能量 {#molecular-energy}

把分子压强方程与 $pV=Nk_{\mathrm B}T$ 联立，得到：

$$\frac12m_0c_{\mathrm{rms}}^2=\frac32k_{\mathrm B}T=\frac{3RT}{2N_{\mathrm A}}$$

$$c_{\mathrm{rms}}=\sqrt{\frac{3k_{\mathrm B}T}{m_0}}=\sqrt{\frac{3RT}{M}}$$

这里是**每个分子的平均平动动能**。相同温度下，不同理想气体的平均平动动能相同；较轻分子的均方根速率更大。绝对温度加倍时，平均平动动能加倍，均方根速率变为原来的 $\sqrt2$。

对**仅计平动能的单原子理想气体**，$U=\tfrac32Nk_{\mathrm B}T=\tfrac32nRT$。不能把此总内能方程用于所有气体：复杂分子的转动、振动也可能储能。气体定律来自实验；分子运动论提供微观解释与可检验的预测。

#### 例题 8：使用气体总质量 {#example-molecular-speed}

*改编自 PH04 January 2024 Q2.*

A spherical container holds $6.3\times10^{-4}\,\mathrm{kg}$ of gas at 102 kPa. The mean square molecular speed is $2.53\times10^5\,\mathrm{m^2\,s^{-2}}$ and there are $1.3\times10^{22}$ molecules. Determine the volume, radius and mean translational kinetic energy per molecule.

**1. 选模型。**由于 $Nm_0$ 就是气体总质量，使用分子压强方程时不再乘一次分子数。

**2. 先求体积，再求半径。**

$$\begin{aligned}
V&=\frac{m_{\mathrm{gas}}c_{\mathrm{rms}}^2}{3p}\\
&=\frac{6.3\times10^{-4}\times2.53\times10^5}{3\times102\times10^3}.
\end{aligned}$$

$$\boxed{V=5.21\times10^{-4}\,\mathrm{m^3}}.$$

$$r=\left(\frac{3V}{4\pi}\right)^{1/3}=\boxed{5.0\times10^{-2}\,\mathrm m}.$$

**3. 回到单分子求能量。**

$$m_0=\frac{6.3\times10^{-4}}{1.3\times10^{22}}=4.85\times10^{-26}\,\mathrm{kg}.$$

$$\overline{E}_{\mathrm{k}}=\tfrac12m_0c_{\mathrm{rms}}^2=\boxed{6.1\times10^{-21}\,\mathrm J}.$$

**4. 检查：**题目给出的已是**均方速率**，不能再平方。半径单位为米，不是立方米。还可用 $N\overline{E}_{\mathrm{k}}=\tfrac32pV$ 独立核对总平动动能，代入时保留未舍入值。

## 练习 {#practice}

练习 1–9 为**自拟题**；练习 10 改编自 PH04 January 2024 Q3.4 的实验评价。未设置官方分值。先写方程与适用条件，再代入 SI 数值，最后解释结果。

**练习路线：**各知识点先学对应例题，再分三轮完成下面的题。记录第一次尝试后，才展开提示或解答。

| 轮次 | 题目 | 应写出的内容 |
| --- | --- | --- |
| 建立模型 | [1](#question-1)、[2](#question-2)、[5](#question-5)、[8](#question-8) | 系统边界或固定量、方程、SI 换算与单位 |
| 组合步骤 | [3](#question-3)、[4](#question-4)、[6](#question-6) | 消去损失、从功率求能量，或把功与第一定律联立 |
| 解释与评价 | [7](#question-7)、[9](#question-9)、[10](#question-10) | 用因果链连接模型、观察结果与改进措施 |

### 练习 1：符号与系统边界 {#question-1}

A gas releases 60 J by heating while 200 J of work is done on it. Calculate its change in internal energy. A student counts the same electrical heater input as both heat and work: explain the error.

<details markdown="1">
<summary>提示</summary>

放热为负，压缩时外界做功为正。先画出所选系统的边界。

</details>

<details markdown="1">
<summary>解答</summary>

$$\Delta U=-60+200=+140\,\mathrm J$$

内能增加。同一次能量输入只跨过系统边界一次，应根据边界归类，不能重复相加。

</details>

### 练习 2：分两阶段加热 {#question-2}

Calculate the energy needed to turn 0.020 kg of ice at $0\,^{\circ}\mathrm C$ into water at $20\,^{\circ}\mathrm C$. Use $l=3.34\times10^5\,\mathrm{J\,kg^{-1}}$ and $c_{\mathrm{water}}=4200\,\mathrm{J\,kg^{-1}\,K^{-1}}$. Neglect losses.

<details markdown="1">
<summary>提示</summary>

先在恒温下熔冰，再让液态水升温。

</details>

<details markdown="1">
<summary>解答</summary>

$$E=ml+mc\Delta\theta.$$

$$E=0.020\times3.34\times10^5+0.020\times4200\times20.$$

$$E=8360\,\mathrm J\approx\boxed{8.4\,\mathrm{kJ}}.$$

冰一开始就在熔点，所以没有冰本身的升温项。

</details>

### 练习 3：流动与热损失 {#question-3}

A liquid's steady temperature rise is 10.0 K. Heater power is 50 W at a mass flow rate of $1.00\times10^{-3}\,\mathrm{kg\,s^{-1}}$, and 90 W at $2.00\times10^{-3}\,\mathrm{kg\,s^{-1}}$. Both runs have the same inlet and outlet temperatures. Find the specific heat capacity and heat-loss power.

<details markdown="1">
<summary>提示</summary>

两次功率平衡相减，消去近似相同的热损失。

</details>

<details markdown="1">
<summary>解答</summary>

$$c=\frac{90-50}{(2.00-1.00)\times10^{-3}\times10.0}=4000\,\mathrm{J\,kg^{-1}\,K^{-1}}$$

$$P_{\mathrm{loss}}=50-1.00\times10^{-3}\times4000\times10.0=10\,\mathrm W$$

相同温度条件支持等热损失假设。若把 50 W 全算成流体吸收的功率，会高估 $c$。

</details>

### 练习 4：U 值与能量 {#question-4}

A uniform slab has conductivity $0.040\,\mathrm{W\,m^{-1}\,K^{-1}}$, thickness 0.080 m and area $12\,\mathrm{m^2}$. Its faces remain at temperatures differing by 20 K. Find the U-value, power loss and energy lost in 2.0 h.

<details markdown="1">
<summary>提示</summary>

先用热导率除以厚度，再求功率，最后乘以秒为单位的时间。

</details>

<details markdown="1">
<summary>解答</summary>

$$U_{\mathrm{value}}=\frac{k}{L}=\frac{0.040}{0.080}=\boxed{0.50\,\mathrm{W\,m^{-2}\,K^{-1}}}.$$

$$P=U_{\mathrm{value}}A\Delta\theta=0.50\times12\times20=\boxed{120\,\mathrm W}.$$

$$E=120\times(2.0\times3600)=8.64\times10^5\,\mathrm J\approx8.6\times10^5\,\mathrm J$$

假设平板稳态传导，没有把其他传热路径算进来。

</details>

### 练习 5：气体量 {#question-5}

A sample occupies $250\,\mathrm{cm^3}$ at absolute pressure 100 kPa and temperature 300 K. Find the amount in moles, the number of molecules and the sample mass if its molar mass is $0.028\,\mathrm{kg\,mol^{-1}}$.

<details markdown="1">
<summary>提示</summary>

先换算体积与压强。求出摩尔数，再求分子数和质量。

</details>

<details markdown="1">
<summary>解答</summary>

$$n=\frac{100\times10^3\times250\times10^{-6}}{8.31\times300}=1.00\times10^{-2}\,\mathrm{mol}$$

$$N=nN_{\mathrm A}=\boxed{6.04\times10^{21}}.$$

$$m_{\mathrm{gas}}=nM=\boxed{2.81\times10^{-4}\,\mathrm{kg}}.$$

后续计算保留未舍入的摩尔数。质量约为 0.281 g，不是 0.281 kg。

</details>

### 练习 6：膨胀与第一定律 {#question-6}

*指导练习：调用前面的 p–V 图，图中已经给出做功数值。*

A gas expands from $2.0\times10^{-3}\,\mathrm{m^3}$ to $5.0\times10^{-3}\,\mathrm{m^3}$ against a constant external pressure of 100 kPa. It receives 750 J by heating. Find the work done by the gas, work done on the gas and change in internal energy.

<details markdown="1">
<summary>提示</summary>

气体对外做功为正，但外界对气体做功为负。

</details>

<details markdown="1">
<summary>解答</summary>

$$W_{\mathrm{by}}=p_{\mathrm{ext}}\Delta V=10^5\times3.0\times10^{-3}=\boxed{300\,\mathrm J}.$$

$$\boxed{W_{\mathrm{on}}=-300\,\mathrm J}.$$

$$\Delta U=750-300=+450\,\mathrm J$$

若在第一定律中代入正 300 J，就混淆了功的约定。

</details>

### 练习 7：实验诊断 {#question-7}

In a Boyle's-law experiment, a student compresses a sealed sample rapidly and reads the pressure immediately. Explain why the reading may be above the constant-temperature prediction and how to improve the method. In a Charles's-law experiment, which boundary condition must change?

<details markdown="1">
<summary>提示</summary>

考虑外界做功、温度达到平衡，以及气体边界能否自由移动。

</details>

<details markdown="1">
<summary>解答</summary>

快速压缩时，外界对气体做功，来不及向外传出多少能量，内能与温度因而上升。在同一体积下，温度越高压强越高。应缓慢压缩，每次等到热平衡再读数。查理实验需允许边界移动，同时保持压强不变，不能同时锁定压强与体积。

</details>

### 练习 8：均方根速率与温度 {#question-8}

Find the rms speed of an ideal gas with molar mass $0.028\,\mathrm{kg\,mol^{-1}}$ at 300 K. Predict the speed at 600 K. Compare its mean translational kinetic energy with that of helium at 300 K.

<details markdown="1">
<summary>提示</summary>

摩尔质量配合摩尔气体常量使用；单分子质量配合玻尔兹曼常量使用，不能混搭。

</details>

<details markdown="1">
<summary>解答</summary>

$$c_{\mathrm{rms}}=\sqrt{\frac{3\times8.31\times300}{0.028}}=5.17\times10^2\,\mathrm{m\,s^{-1}}$$

$$c_{\mathrm{rms},600}=\sqrt2\,c_{\mathrm{rms},300}=7.31\times10^2\,\mathrm{m\,s^{-1}}$$

300 K 时两种气体的每分子平均平动动能相同，均为 $\tfrac32k_{\mathrm B}T=6.21\times10^{-21}\,\mathrm J$。氦的粒子更轻，运动更快。

</details>

### 练习 9：布朗运动与压强 {#question-9}

A microscope shows bright smoke particles moving irregularly in air. State what is being observed and what causes the motion. Explain, using momentum transfer, why an ideal gas exerts greater pressure when compressed at constant temperature.

Now heat two separate fixed samples of the same ideal gas, initially at the same temperature and pressure. One is in a sealed rigid container; the other is beneath a frictionless piston moving slowly against constant external pressure. Neglect changes in gravitational potential energy of the gas itself. Draw each boundary and particle model before and after heating. Predict the changes in pressure, volume, number density and rms molecular speed. Explain how wall collisions account for each pressure result, and correct the claim: “Constant pressure means constant molecular speed.”

<details markdown="1">
<summary>提示</summary>

区分可见悬浮颗粒与撞击它们的不可见分子。先辨认容器固定的量，再使用气体模型。压强是单位时间、单位面积的动量转移，数密度和分子速率分布均有影响。

</details>

<details markdown="1">
<summary>解答与再尝试</summary>

可见对象是烟尘颗粒；随机运动的空气分子不均匀撞击它们，引起不规则运动。等温压缩时，平均分子动能及均方根速率不变。数密度增大，单位时间、单位壁面积的动量转移增大，压强上升。

**刚性容器：**画相同体积及粒子数，加热后用更长的代表性速度箭头。温度与均方根速率增加，数密度不变。平均每次碰撞的动量转移增加，单位壁面积的碰撞也更频繁，所以压强增加。

**恒压活塞：**画较大体积、相同粒子数及更长的代表性速度箭头。温度和均方根速率增加，活塞外移使数密度减小。在 $p=\tfrac13\rho c_{\mathrm{rms}}^2$ 中，质量密度下降抵消均方速率增加。恢复力学平衡后，两者共同使单位时间、单位面积的动量转移及压强不变，不能仅由碰撞次数判断压强。

活塞移动不要求气体泄漏。恒压并不表示速率不变：气体升温并膨胀。箭头表示随机分子速度的代表值，不应画成整齐的向外宏观气流。

**再尝试：**绝对温度加倍。刚性容器压强加倍；恒压下体积加倍、数密度减半。两者均方根速率都变为原来的 $\sqrt2$。

</details>

### 练习 10：改进融冰实验 {#question-10}

*改编题。* A student estimates latent heat by collecting melted ice while an electrical heater operates. The student writes: “Repeat it and use a more powerful heater.” Explain how a suitable increase in heater power could reduce a particular error, and why repetition alone cannot correct an unaccounted background heat input. State one assumption needed when subtracting an unheated background run.

<details markdown="1">
<summary>提示</summary>

把每个改动与能量交换或测量限制联系起来，区分随机波动和系统偏差。

</details>

<details markdown="1">
<summary>解答</summary>

在装置额定范围内，提高电热器功率可减小背景供热在总融冰功率中的比例。重复可降低随机不确定度，却不能消除把全部融冰都归因于电热器的系统偏差。背景扣除要求背景融冰速率近似不变，环境与收集条件可比。应解释因果关系，仅列出改进名称不够。

</details>

## 常见错误 {#common-errors}

若用过提示，记录题号与卡住的步骤：选模型、单位或符号、计算、物理解释。回看表中对应小节，关闭解答，从空白纸重做该题；两天后、一周后再各做一次，用能否独立写出第一步检查进步。

| 如果你这样做 | 错在哪里 | 回到哪里 |
| --- | --- | --- |
| 膨胀时把外界对气体做功写成正值 | 混淆对外做功与对系统做功 | [第一定律](#internal-energy)、[膨胀功](#gas-work) |
| 加热曲线的平台段不计能量 | 温度不变时，物态仍可改变、内能仍可增加 | [比热容与比潜热](#specific-heat-and-latent-heat) |
| 稳态流动的功率平衡用了整箱质量 | 这里计算的是每秒流过的能量 | [连续流动例题](#example-continuous-flow)，再做[练习 3](#question-3) |
| 气体温度比直接用摄氏度 | 气体定律要求绝对温度，并保持题设中的气体量不变 | [气体定律](#ideal-gases) |
| 用气体总质量后又乘分子数 | 把单分子质量与气样总质量混在一起 | [动量传递与压强](#pressure-and-momentum) |
| 只写“重复实验”来消除热损失 | 重复不能自动消除系统偏差；要说明误差来源和修正方法 | [必做实验 8](#required-practical-8)、[背景融冰](#example-latent-heat) |

## 速查 {#quick-reference}

| 用途 | 方程与适用条件 |
| --- | --- |
| 第一定律 | $\Delta U=Q+W$；$W$ 是外界**对系统**做功 |
| 温度变化 | $Q=mc\Delta\theta$；无物态变化，$c$ 恒定 |
| 物态变化 | $Q=ml$；相变温度下的能量大小 |
| 稳态流动 | $P=\dot m c\Delta\theta+P_{\mathrm{loss}}$ |
| 均匀平板 | $P=kA\Delta\theta/L$；$U_{\mathrm{value}}=k/L$ |
| 理想气体 | $pV=nRT=Nk_{\mathrm B}T$；$p$ 为绝对压强，$T$ 用 K |
| 恒定外压 | $W_{\mathrm{on}}=-p_{\mathrm{ext}}\Delta V$ |
| 分子压强 | $pV=\tfrac13Nm_0c_{\mathrm{rms}}^2$；$m_0$ 是单分子质量 |
| 平均平动动能 | $$\overline{E}_{\mathrm{k}}=\tfrac32k_{\mathrm B}T$$ |
| 均方根速率 | $c_{\mathrm{rms}}=\sqrt{3RT/M}$；$M$ 用 $\mathrm{kg\,mol^{-1}}$ |

继续之前，检查能否解释加热曲线的平台，说明第一定律中膨胀功的符号，区分两个必做实验的控制条件，并从分子运动解释压强，而不是说分子“想要散开”。

[课程目录](/zh/alevel/a2-physics/) · [PH03 速查](/zh/alevel/a2-physics/quick-reference/) · [下一课：核半径](/zh/alevel/a2-physics/nuclear-radius/)

<details markdown="1">
<summary>来源与试题表述</summary>

范围依据：[OxfordAQA 物理大纲，版本 5.1](https://www.oxfordaqa.com/wp-content/uploads/2022/08/oxfordaqa-a-level-physics-specification.pdf)，3.11.1–3.11.4，印刷页 28–29，必做实验 8、9。实验指导也参考 [Physics practical handbook](https://www.oxfordaqa.com/oaqaresources/science/teaching/a-level-practical-handbook-physics.pdf)（2018 年版），其中 RP8 见印刷页 75–77。课程范围以大纲为准，不对应某一本教材的章节编号。

RP8 与 RP9 原始记录探究为新增自拟活动，使用构造数据，考查拟合选择、模型条件与偏差，不报告实际实验已完成。

例题 1、3、5、8 和练习 10 分别**改编**自 PH04 January 2024 Q1.2、Q3.1、Q3.2–3.3、Q2、Q3.4，并非逐字重印。数值结果与相关推理已对照正式官方评分标准，并独立重算。例题 2、4、6、7、检查点与练习 1–9 为自拟。答案用于教学，不虚构官方分值。

</details>

{% include exam_topic_practice.html %}
