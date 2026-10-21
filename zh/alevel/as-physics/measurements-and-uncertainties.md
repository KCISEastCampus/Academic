---
title: 测量与不确定度
layout: subjects
mathjax: true
grade: as
subject: as-physics
lang: zh-CN
translation_of: /alevel/as-physics/measurements-and-uncertainties/
permalink: /zh/alevel/as-physics/measurements-and-uncertainties/
toc_headings: h2, h3
study_page: true
---

<h2 id="start-here">读数很集中，结果就准确吗？</h2>

**测量不只是写出一个数：修正量、不确定度和有效数字，分别有什么证据？** 从原始读数走向可检查的测量结果。

- **学习：**从[单位](#units-and-estimates)与[测量质量](#measurement-quality)开始。
- **应用：**连接[零点修正](#zero-correction)、[不确定度合成](#combining-uncertainties)和[误差棒](#graph-records)。
- **独立检查：**在[练习](#independent-practice)中自己选法，再[诊断错误并重试](#diagnose-and-retry)。

**开始前：**会比例、百分数、乘方、平均值和直线斜率。给出的不确定度，是在特定模型下的界限或估算，不自动等于已知误差，也不自动表示统计置信区间。

本页任务均为自拟题，记录为构造教学数据；阅读或处理这些记录不代表完成实体实验。

<h3 id="first-judgement">先判断：一致性与准确度</h3>

*自拟题。*

<!-- task:first-judgement -->
A micrometer gives repeated readings of 30.42 mm, 30.43 mm and 30.42 mm for one object. With the jaws fully closed it reads +0.20 mm. A student says: “The readings agree closely, so 30.42 mm must be accurate.”

Is the reasoning sufficient? Identify one check that the repeated readings alone cannot replace. You do not need an uncertainty formula yet.
<!-- /task:first-judgement -->

<details markdown="1">
<summary>提示</summary>

把读数的离散程度与仪器闭合时的零点示值分开判断。

</details>

<details markdown="1">
<summary>解答与检查</summary>

读数接近支持这些条件下的精密度和重复性，却不能直接证明准确。闭合时的正示值提示需要检查并修正零点偏移。重复同一套带偏差的操作不能消除它；零点或参考标准检查提供不同的证据，真实值不能只由读数集中来确定。

</details>

<h2 id="units-and-estimates">先检查单位与数量级</h2>

本课使用的 SI 基本单位包括质量 kg、长度 m、时间 s、电流 A、温度 K、物质的量 mol。常见导出单位有力 N、能量 J、功率 W 和电荷 C。

| Prefix | T | G | M | k | c | m | $\mu$ | n | p | f |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Multiplier | $10^{12}$ | $10^9$ | $10^6$ | $10^3$ | $10^{-2}$ | $10^{-3}$ | $10^{-6}$ | $10^{-9}$ | $10^{-12}$ | $10^{-15}$ |

前缀先作用于单位，再进行乘方：

$$1\,\mathrm{mm^2}=(10^{-3}\,\mathrm{m})^2=10^{-6}\,\mathrm{m^2}$$

$$1\,\mathrm{kWh}=1000\,\mathrm{W}\times3600\,\mathrm{s}=3.6\times10^6\,\mathrm{J}$$

先估量级，再保留更多位数。0.5 kg 水占据 500 cm³，其密度量级为 $10^3\,\mathrm{kg\,m^{-3}}$。如果换算后大了百万倍，应检查长度单位的立方换算。量级估算不等于精密测量。

<h2 id="measurement-quality">测量质量中的术语各指什么？</h2>

| 术语 | 应检查什么？ |
| --- | --- |
| 准确度（accuracy） | 与参考值或真实值的接近程度；读数集中不能单独证明。 |
| 精密度（precision） | 一组测量值集中到什么程度。 |
| 重复性（repeatability） | 同方法、同观察者、同仪器与条件下，结果的一致性。 |
| 再现性（reproducibility） | 改变相关条件、观察者或仪器后，结果的一致性。 |
| 分辨率（resolution） | 仪器能够区分的最小变化。 |

**随机影响**使读数产生不可预测的波动，重复并取合适的平均值可减小其对结果的影响，但不保证准确。**系统影响**产生持续偏差，如零点偏移或比例系数错误；应检查校准或更换方法，不能只增加重复次数。

分辨率与最终不确定度要分开。清晰模拟刻度的半个最小分度可以是一种读数估计；数字仪器规格、反应时间、对准与校准可能要求其他界限。应说明依据，不能给所有仪器统一套一个不确定度。

用半极差等方法估计重复读数的波动，只描述这组小样本，不能证明不会出现更大波动，也不能掩盖另一个校准贡献。

<h2 id="zero-correction">修正零点，同时保留修正量的不确定度</h2>

零点示值为正，表示仪器读得偏高，应减去测得的零点示值，不能靠改变不确定度的正负来修正。

**示范例题——构造读数。** 螺旋测微器示值为 $2.38\pm0.01\,\mathrm{mm}$，独立测得的零点示值为 $+0.04\pm0.01\,\mathrm{mm}$。把题给不确定度视为保守界限。

$$d=2.38-0.04=2.34\,\mathrm{mm}$$

$$\Delta d=0.01+0.01=0.02\,\mathrm{mm}$$

结果写成 $d=(2.34\pm0.02)\,\mathrm{mm}$。不确定度为正，不会因为减去零点修正量就变小。

$$\text{fractional uncertainty}=\frac{0.02}{2.34}=0.00855,\qquad \text{percentage uncertainty}=0.855\%$$

绝对、相对和百分比不确定度是描述同一结果的三种形式，不是三项独立来源。应说明界限包括哪些因素；增加物体读数次数不能平均掉共享的零点校准不确定度。

<h2 id="combining-uncertainties">根据测量模型选择合成规则</h2>

对于小不确定度，允许各不确定输入独立变化时，以下一阶规则可给出保守估计。$\Delta a$ 表示非负的绝对不确定度。这些不是统计标准差的合成规则。

| Model | Conservative first-order rule |
| --- | --- |
| $y=a+b$ or $y=a-b$ | $\Delta y=\Delta a+\Delta b$ |
| $y=ab$ or $y=a/b$ | $\Delta y/\lvert y\rvert\approx\Delta a/\lvert a\rvert+\Delta b/\lvert b\rvert$ |
| $y=x^n$ | $\Delta y/\lvert y\rvert\approx\lvert n\rvert\Delta x/\lvert x\rvert$ |

相对不确定度规则要求分母非零、乘方有定义；$\pi$ 等已知常数不产生测量不确定度。相对不确定度很大，或两个量的差接近零时，应进一步检查实际界限，不能把一阶百分比当成精确结果。

**示范选法：圆柱体积。** 半径为 $r=(1.50\pm0.02)\,\mathrm{mm}$，长度为 $L=(40.0\pm0.5)\,\mathrm{mm}$，模型为均匀圆柱：

$$V=\pi r^2L=\pi(1.50)^2(40.0)=282.74\,\mathrm{mm^3}$$

$$\frac{\Delta V}{V}\times100\%\approx2\left(\frac{0.02}{1.50}\right)100\%+\left(\frac{0.5}{40.0}\right)100\%=3.92\%$$

$$\Delta V\approx11.1\,\mathrm{mm^3},\qquad V=(283\pm11)\,\mathrm{mm^3}$$

半径平方使其相对不确定度贡献乘以二；直接把以毫米为单位的绝对不确定度加到体积上，量纲就不成立。中间步骤保留计算位数，最终中心值的小数位与不确定度相配；这里保留两位不确定度有效数字，便于比较。

<h3 id="difference-and-correlation">两个读数与一个共享零点</h3>

*自拟题。*

<!-- task:difference-and-correlation -->
Two positions on one scale are $x_1=(12.4\pm0.1)\,\mathrm{cm}$ and $x_2=(18.6\pm0.1)\,\mathrm{cm}$. The quoted bounds describe independent reading effects.

1. Find the length between positions and its conservative uncertainty.
2. Both indications also contain the same fixed +0.3 cm zero offset, not included in the reading bounds. Does it change this length?
3. Would a scale-factor error necessarily cancel in the same way? Explain.
<!-- /task:difference-and-correlation -->

<details markdown="1">
<summary>提示</summary>

把共享偏移分别写进两个读数的差式。区分固定相加的偏移与按比例放大的错误。

</details>

<details markdown="1">
<summary>解答与检查</summary>

独立读数影响的绝对不确定度相加：

$$L=18.6-12.4=6.2\,\mathrm{cm},\qquad \Delta L=0.1+0.1=0.2\,\mathrm{cm}.$$

相对不确定度为 $0.2/6.2=0.0323$，约为 $3.2\%$。

设共享偏移为 $z$：

$$L=(x_2-z)-(x_1-z)=x_2-x_1.$$

只要两次读数间偏移不变，它就精确抵消；不能把同一个共享偏移当成两项独立量再加两次。比例系数错误会乘到差值上，通常不会抵消。抵消的条件是相同的加性影响，而不只是“系统误差”这个名称。

</details>

<h2 id="graph-records">用整组误差棒约束直线</h2>

用已知施力校准一个力传感器。下表为构造记录，每个输出 $U$ 的题给界限为 $\pm0.20\,\mathrm{V}$；本任务忽略力的不确定度。

<!-- task:calibration-record -->

| Force $F$ / N | 0 | 1 | 2 | 3 | 4 |
| --- | --- | --- | --- | --- | --- |
| Output $U$ / V | 0.50 | 1.50 | 2.50 | 3.50 | 4.50 |

<!-- /task:calibration-record -->

<img src="/assets/img/physics-as-error-bars.svg" alt="构造校准点：施力 0、1、2、3、4 牛顿，对应输出 0.50、1.50、2.50、3.50、4.50 伏。每个纵向误差棒向上下各延伸 0.20 伏，图中没有拟合线。" width="760" height="430">

使用 $U=mF+b$。斜率单位为 $\mathrm{V\,N^{-1}}$，截距单位为 V；没有物理依据时不要强迫直线经过原点。

**先示范判断一条线。** 候选线为 $U=0.95F+0.60$，U 用伏、F 用牛顿，其预测值依次为 0.60、1.55、2.50、3.45、4.40 V。每个预测值都落在对应纵向区间内，因此在题给界限模型下可以接受；直线不必通过每个中心点。

估计不确定度时，比较最佳拟合线与可接受的最陡、最缓直线。候选线必须与每个相关误差区间相容；只连接首尾的极端点，不保证能满足中间点。截距界限同样要由整组记录检查。没有画误差棒时，也应根据散布或测量信息说明依据，不能任意选择极端线。

<h3 id="gradient-and-intercept">既求拟合值，也求界限</h3>

*自拟题。*

<!-- task:gradient-and-intercept -->
For the force-sensor records:

1. Draw the best straight line and determine its gradient and intercept.
2. Find the steepest and shallowest lines compatible with all five vertical intervals. Check every point.
3. Determine the largest and smallest possible intercepts. Report conservative symmetric uncertainties about the central fit.
4. What additional evidence is needed before calling the non-zero intercept an instrument fault?
<!-- /task:gradient-and-intercept -->

<details markdown="1">
<summary>提示</summary>

首尾区间约束跨 4 N 的输出增量，再检查中间点。在零施力处，截距必须落在第一条误差棒范围内。

</details>

<details markdown="1">
<summary>解答与检查</summary>

中心拟合线给出 $m=1.00\,\mathrm{V\,N^{-1}}$ 和 $b=0.50\,\mathrm{V}$。

$$m_{\max}=\frac{4.70-0.30}{4}=1.10\,\mathrm{V\,N^{-1}},\qquad m_{\min}=\frac{4.30-0.70}{4}=0.90\,\mathrm{V\,N^{-1}}$$

最陡线预测值为 0.30、1.40、2.50、3.60、4.70 V；最缓线为 0.70、1.60、2.50、3.40、4.30 V，两条线都满足全部五个区间。

$$\Delta m=0.10\,\mathrm{V\,N^{-1}},\qquad b_{\min}=0.30\,\mathrm{V},\qquad b_{\max}=0.70\,\mathrm{V}$$

可报告 $m=(1.00\pm0.10)\,\mathrm{V\,N^{-1}}$、$b=(0.50\pm0.20)\,\mathrm{V}$。这两个分别求出的范围，不表示其中任意斜率与截距组合都可接受。

记录表明在本模型下零施力输出不为零；是否属于故障，还应核对传感器规定的零载输出、去皮、施力装置和校准。非零截距不自动等于测量错误。

</details>

<h2 id="independent-practice">独立选法，并说明结果依据</h2>

先关闭解答。说明模型，先换单位再计算，并辨认每个题给不确定度包括什么。

<h3 id="practice-density">未标明方法的组合问题</h3>

*自拟题。*

<!-- task:practice-density -->
A uniform circular wire has mass $m=(8.50\pm0.05)\,\mathrm{g}$, radius $r=(0.60\pm0.01)\,\mathrm{mm}$ and length $L=(1.00\pm0.01)\,\mathrm{m}$. Treat the bounds as independent and use a first-order conservative estimate.

Determine its density in SI units and a suitable absolute uncertainty. Which measurement should be improved first if the sole aim is to reduce the calculated fractional uncertainty, with the other bounds unchanged? Explain your choice.
<!-- /task:practice-density -->

<details markdown="1">
<summary>提示</summary>

先由半径、长度建立体积，再用质量除以体积。比较各项相对贡献，注意乘方。

</details>

<details markdown="1">
<summary>解答与检查</summary>

取 $m=0.00850\,\mathrm{kg}$、$r=0.00060\,\mathrm{m}$：

$$\rho=\frac{m}{\pi r^2L}=7.52\times10^3\,\mathrm{kg\,m^{-3}}$$

$$\frac{\Delta\rho}{\rho}\times100\%\approx\left(\frac{0.05}{8.50}+2\frac{0.01}{0.60}+\frac{0.01}{1.00}\right)100\%=4.92\%$$

$$\Delta\rho\approx0.37\times10^3\,\mathrm{kg\,m^{-3}},\qquad \rho=(7.5\pm0.4)\times10^3\,\mathrm{kg\,m^{-3}}$$

半径项约为 3.33%，质量项为 0.588%，长度项为 1.00%；在题定目标下，半径贡献最大，优先改进它。不过应先检查零点及直径／半径是否混淆：换成分辨率更高的仪器，不保证实际界限一定更小。

</details>

<h3 id="practice-timing">选择计时方案</h3>

*自拟题。*

<!-- task:practice-timing -->
An oscillator has a period close to 2.0 s. A manual stopwatch measurement has a quoted total timing uncertainty of ±0.2 s, already including starting and stopping effects.

Compare timing one complete oscillation with timing 20 complete oscillations and dividing by 20. Estimate the period uncertainty in each case. State one condition that must hold for the longer method, and one error that repeating the timing would not automatically remove.
<!-- /task:practice-timing -->

<details markdown="1">
<summary>提示</summary>

把 20 次计数视为准确。总时间及其绝对不确定度都除以 20，不要重复加入题目已包含的启停反应时间。

</details>

<details markdown="1">
<summary>解答与检查</summary>

测一次时，相对不确定度约为 $0.2/2.0=10\%$。20 次振动的总时间约为 40 s：

$$T=\frac{40}{20}=2.0\,\mathrm{s},\qquad \Delta T=\frac{0.2}{20}=0.01\,\mathrm{s},\qquad \frac{\Delta T}{T}=0.5\%$$

较长计时期间周期应足够稳定，完整振动次数也须计数正确。秒表比例校准错误，或始终有偏差的启停判断，不保证因重复而消失。这里使用题给总界限，并非把它规定为所有手工计时的通用值。

</details>

<h3 id="practice-estimate">估量级，避免虚假精度</h3>

*自拟题。*

<!-- task:practice-estimate -->
Estimate the mass of air in a classroom of dimensions 8 m by 6 m by 3 m. Use an air density of order 1 kg m⁻³. Give the nearest order of magnitude and explain why reporting many significant figures would not be justified.
<!-- /task:practice-estimate -->

<details markdown="1">
<summary>提示</summary>

先估体积，再用题给密度；密度本身只是近似量级。

</details>

<details markdown="1">
<summary>解答与检查</summary>

体积约为 $8\times6\times3=144\,\mathrm{m^3}$；质量约为 $1\times144\approx10^2\,\mathrm{kg}$，取最接近的数量级。尺寸和密度都是估算值，计算器多显示几位不能证明更准确。

</details>

<h2 id="diagnose-and-retry">纠正模型，再检查算术</h2>

| 你的结论 | 应回去检查什么？ |
| --- | --- |
| 重复测量能消除所有误差 | 区分[波动与校准](#measurement-quality)。 |
| 相减就要减不确定度 | 检查[独立界限与共享影响](#difference-and-correlation)。 |
| 半径对体积只贡献一次 | 重建[测量方程](#combining-uncertainties)。 |
| 首尾极端点连线一定可以接受 | 检查[每一条误差棒](#graph-records)。 |
| 非零截距证明仪器坏了 | 核对[零载输出的物理模型](#gradient-and-intercept)。 |

<h3 id="retry-shared-offset">换一种测量情境再判断</h3>

*自拟题。*

<!-- task:retry-shared-offset -->
The same thermometer indicates 15.0°C before heating and 25.0°C after heating. It has an unchanged +0.5°C zero offset. A student subtracts the offset from the temperature rise as well.

Correct the student's calculation. Would a multiplicative calibration error also cancel? Give an English explanation.
<!-- /task:retry-shared-offset -->

<details markdown="1">
<summary>提示</summary>

先分别修正两个温度读数，再相减。

</details>

<details markdown="1">
<summary>解答与检查</summary>

修正后的两个温度为 14.5°C 和 24.5°C：

$$\Delta\theta=(25.0-0.5)-(15.0-0.5)=10.0\,^\circ\mathrm{C}.$$

英文解释可写：“The same additive offset cancels in a difference, but a multiplicative calibration factor scales the difference and does not generally cancel.” 其他读数不确定度仍要分别处理，这个计算只讨论共享零点。

</details>

<h2 id="sources-and-next">范围与下一步</h2>

范围：OxfordAQA International AS Physics 9630，PH01，3.1.1–3.1.3。本样章发展部分测量能力；简短误差棒记录不能代替带实测散布的数据训练，也不证明已掌握全部实验技能。

范围以[官方大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-international-as-and-a-level-physics-specification.pdf)为准。题目、数据和反馈为自拟，未赋予官方分值。不把三角／对数函数的不确定度合成或统计置信区间作为本课要求。

[下一课：向量与力矩](/zh/alevel/as-physics/vectors-and-moments/) · [返回 AS 物理](/zh/alevel/as-physics/) · [现有力学笔记](/zh/alevel/as-physics/#2--mechanics-321--328) · [在 A2 电容记录中应用测量判断](/zh/alevel/a2-physics/capacitor-charge-and-discharge/#data-rc-records)。

