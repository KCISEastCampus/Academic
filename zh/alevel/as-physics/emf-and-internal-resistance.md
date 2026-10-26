---
title: 电池接上负载以后：电动势、内阻与 RP3
layout: subjects
mathjax: true
grade: as
subject: as-physics
lang: zh-CN
translation_of: /alevel/as-physics/emf-and-internal-resistance/
permalink: /zh/alevel/as-physics/emf-and-internal-resistance/
toc_headings: h2, h3
study_page: true
reading_layout: true
---

<h2 id="start-here">为什么电流越大，端电压越低？</h2>

电池给电荷转移能量，但一部分在到达外部负载前就在电池内部转为内能。因此，端电压不一定等于电动势。你将预测这个差别，选择 RP3 电路，并用数据检验“内阻不变”模型。

需要时回补[电荷与电势差](/zh/alevel/as-physics/charge-current-and-potential/)、[串联电路](/zh/alevel/as-physics/dc-circuits-and-potential-dividers/)和[图线不确定度](/zh/alevel/as-physics/measurements-and-uncertainties/#gradient-and-intercept)。以下数值记录均为构造。本页训练实验决策与分析，不证明已经操作器材。

<h2 id="energy-model">跟着一库仑电荷走完整个回路</h2>

电动势（emf）$\varepsilon$ 是电源每单位电荷提供的能量，单位是伏特，不是牛顿。端电压 $V$ 是外电路每单位电荷获得的能量。把放电电池表示为理想电动势与内阻 $r$ 串联。稳定电流中，通过 $r$ 与外部负载 $R$ 的电荷相同：

$$\varepsilon=V+Ir,\qquad V=\varepsilon-Ir$$

$$I=\frac{\varepsilon}{R+r}$$

$Ir$ 是每库仑在内部转移的能量，不是消失的电荷。理想电压表接在开路电源上时，$I=0$，$V=\varepsilon$。负载电阻降低，电流增加，端电压下降。模型假定研究的电流、温度和时间范围内 $\varepsilon$、$r$ 近似不变；真实电池可能偏离。充电不属于本式采用的放电符号约定。

<div class="worked-example" markdown="1">
**完整示范——自拟题。**
<!-- task:emf-worked -->
A discharging cell has emf 1.50 V and internal resistance 0.30 Ω. It supplies a 2.70 Ω resistor. Find the current, terminal pd and internal power transfer. Check the power balance.
<!-- /task:emf-worked -->

先研究完整回路求电流：$I=1.50/(2.70+0.30)=0.50\,\mathrm{A}$。端电压 $V=1.50-0.50(0.30)=1.35\,\mathrm{V}$。内部功率 $I^2r=0.075\,\mathrm{W}$，外部功率 $IV=0.675\,\mathrm{W}$。电源功率 $I\varepsilon=0.750\,\mathrm{W}$ 等于二者之和。端电压低于电动势，与能量守恒完全相容。
</div>

<h2 id="rp3-method">决定改变什么、测量什么</h2>

RP3 研究端电压随电流的变化。电流表与可调外部负载串联，电压表接在电池实际两端。题目未另说明时，理想电流表电阻为零，理想电压表电阻无穷大。实际实验还需检查量程、分辨率与仪表对电路的影响。

![RP3 示意：理想电动势和内阻组成模型电池；电流表与可调负载位于外回路，电压表接在电池两端，测量二者合起来的端电压。](/assets/img/physics-as-emf-circuit.svg){: width="560" height="340" }

收集数据前，依据电池额定条件、限流负载及其额定功率选择安全电流范围，从最大外部电阻开始，不能直接短路试验。采用低电压，固定接线，避免电池与电阻过热，读数间断开开关。选择若干分散的负载设置，成对记录电流和端电压。再按相反顺序重复设置：持续漂移可能来自温升或电池消耗，不能当随机散布处理。另行检查传感器零点与电压校准。约定放电电流在外部从 P 经负载流向 Q，图中开关闭合，表示读数时状态。

作 $V$ 对 $I$ 图，是因为模型预言直线：截距为 $\varepsilon$，单位 V；斜率为 $-r$，单位 V/A，即 Ω。向 $I=0$ 外推可估计电动势；强行过原点会抹掉要测的量。曲线或与时间顺序有关的趋势，提示重新检查恒定内阻、仪表负载或电池稳定性。

<h2 id="independent-practice">预测结果，评价证据</h2>

<h3 id="apparatus-check">选择测量接法</h3>
<div class="lesson-check" markdown="1">
<!-- task:emf-apparatus -->
You have a cell, adjustable resistor, switch, ammeter and voltmeter. Sketch an RP3 circuit without consulting the example diagram. Choose the initial resistor setting, state where each meter connects and which paired quantities you will record. Explain why one loaded I,V pair, without a separate emf measurement, cannot determine both emf and internal resistance, and how resistor power rating constrains your choices.
<!-- /task:emf-apparatus -->
<details markdown="1"><summary>提示</summary>
一个仪表测回路电流，另一个比较电池两端。
</details>
<details markdown="1"><summary>解答与修复</summary>
电流表、开关、可调负载与电池串联，电压表跨接电池两端。从最大负载电阻开始，在额定电流与功率内记录多组 I、V。单组读数只给出一条 V = ε − Ir 方程，却有两个未知量；一组范围数据才能识别斜率和截距。用 I²R 或 IV 检查负载功率。若以为一点就足够，下方重试还要处理固定负载方案。
</details>
</div>

<div class="lesson-check" markdown="1">
<h3 id="circuit-check">换一个负载</h3>
<!-- task:emf-load -->
The same 1.50 V, 0.30 Ω model cell is connected first to 2.70 Ω and then to 1.20 Ω. Find the second current and terminal pd. Compare the external powers and explain why “lower load resistance always means greater useful power” cannot hold for every positive load resistance.
<!-- /task:emf-load -->
<details markdown="1"><summary>提示</summary>
完整回路中保留内阻，再考虑负载电阻趋近零时的外部电压。
</details>
<details markdown="1"><summary>解答与修复</summary>
第二次电流为 1.0 A，端电压 1.20 V，外部功率 1.20 W，比原来的 0.675 W 大。但 $R$ 趋近零时，模型给出 $I\to\varepsilon/r$，$V=IR\to0$，负载获得的功率也趋近零。因此不能把这次增加推广到所有负载。这是模型极限，不是短路实验。如果漏了内阻，回看[能量模型](#energy-model)，再做下方新题。
</details>
</div>

<div class="lesson-check" markdown="1">
<h3 id="data-check">读数支持怎样的直线？</h3>
<!-- task:emf-data -->
Constructed paired readings are: I/A = 0.10, 0.20, 0.30, 0.40, 0.50; V/V = 1.47, 1.44, 1.40, 1.38, 1.35. Each voltage has an absolute uncertainty bound ±0.01 V; current uncertainty is negligible for this exercise. Plot the data with error bars, estimate emf and internal resistance, and check whether V = 1.50 − 0.30 I is compatible with every interval. Find the steepest and shallowest compatible gradients and explain why a line through just the middle readings is insufficient.
<!-- /task:emf-data -->
<details markdown="1"><summary>提示</summary>
端点区间约束最大与最小下降量，但仍要检查所有中间区间。
</details>
<details markdown="1"><summary>解答与修复</summary>
合理直线给出约 1.50 V 的电动势与 $r\approx0.30\,\Omega$（最小二乘截距为 1.498 V）。候选直线预言 1.47、1.44、1.41、1.38、1.35 V，全部在界限内。最陡与最缓斜率为 −0.35、−0.25 V/A；对应 $V=1.515-0.35I$ 和 $V=1.485-0.25I$，碰到端点界限，并仍通过其他全部区间。因此在给定假设下 $r$ 的范围为 0.25–0.35 Ω。斜率为负，电阻为正。不能只选两个点而不检验其他观察。如果把散布直接当作内阻变化，回看[方法](#rp3-method)，再分析下方新记录。
</details>
</div>

<div class="lesson-check" markdown="1">
<h3 id="design-check">区分两种解释</h3>
<!-- task:emf-design -->
Later high-current readings lie below the earlier best-fit line. A student concludes that internal resistance increases with current. Give another explanation involving time or measurement, and design an additional comparison to distinguish it. Explain in English why repeating only high-current readings does not settle the issue.
<!-- /task:emf-design -->
<details markdown="1"><summary>提示</summary>
电流和时间可能一起变了。模型参数不是低读数的唯一解释。
</details>
<details markdown="1"><summary>解答与修复</summary>
电池消耗可能让电动势下降，也可能有电池温升或电压校准漂移。高电流读数后重新测低电流设置，允许冷却，并比较升序、降序记录，同时另行核对零点与校准。“Current and elapsed time changed together. Repeating the same late setting cannot separate their effects.” 截距变化指向电动势变化，斜率变化提示有效内阻变化，但都需要证据，不能由单个离群点判定。
</details>
</div>

<h2 id="retry">收起解答，检验一份新记录</h2>

<div class="lesson-check" markdown="1">
<!-- task:emf-retry -->
A second cell gives constructed readings (I/A, V/V): (0.20, 1.16), (0.60, 1.08), (1.00, 1.00), with voltage bounds ±0.01 V. Infer a line, emf and internal resistance. Predict terminal pd at 0.80 A and the load resistance required. A later repeat of the 0.20 A setting gives 1.10 V with the same bound. Decide whether this is compatible with the first reading and say what must be investigated before combining all readings in one fit. For the first three readings only, find the extreme compatible gradients. A student proposes using only one fixed load with the voltmeter in series: correct the circuit and measurement plan, including a comparison that distinguishes elapsed-time drift from a current-dependent change.
<!-- /task:emf-retry -->
<details markdown="1"><summary>提示</summary>
用完整下降量求斜率；把重复设置作为单独的稳定性检查。
</details>
<details markdown="1"><summary>解答与检查</summary>
$V=1.20-0.20I$，所以电动势 1.20 V、内阻 0.20 Ω。电流为 0.80 A 时，$V=1.04\,\mathrm{V}$，$R=V/I=1.30\,\Omega$。重复区间 [1.15,1.17] 与 [1.09,1.11] V 不重叠。把电池当成稳定模型前，应检查时间影响、温升、电池状态与校准。增加点数不能修复恒定参数假设失效。极限直线为 $V=1.215-0.225I$ 与 $V=1.185-0.175I$，均通过全部原始区间，斜率范围 −0.225 至 −0.175 V/A。电压表跨接电池，电流表和可调负载串联，并使用多种负载。高电流测量后重测早期低电流设置，再反向安排设置顺序，可区分时间漂移与电流效应，同时独立检查校准。
</details>
</div>

<h2 id="sources-and-next">范围与延后回顾</h2>

OxfordAQA 9630 §3.4.6、RP3，见[官方大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-international-as-and-a-level-physics-specification.pdf)。题目自拟，数据构造，图为示意；核查点不是官方分值。下次进入 [Unit 2 综合](/zh/alevel/as-physics/unit-2-review/)时先关闭本课答案。

[上一课：直流电路与分压](/zh/alevel/as-physics/dc-circuits-and-potential-dividers/) · [下一课：振动与共振](/zh/alevel/as-physics/oscillations-and-resonance/) · [课程](/zh/alevel/as-physics/)
