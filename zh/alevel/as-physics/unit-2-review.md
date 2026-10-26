---
title: "Unit 2 综合复习"
layout: subjects
mathjax: true
grade: as
subject: as-physics
lang: zh-CN
translation_of: /alevel/as-physics/unit-2-review/
permalink: /zh/alevel/as-physics/unit-2-review/
toc_headings: h2, h3
study_page: true
reading_layout: true
---

**隔一段时间后**，不看正文和方法清单完成。PH02 也可能调用 Unit 1 的测量、力、能量与动量。以下为自拟题，需解释模型而非只算数。

<h2 id="mixed-tasks">连接证据</h2>

<div class="lesson-check" markdown="1">
<!-- task:unit2-1 -->
A cell has emf 6.0 V and internal resistance 1.0 Ω. It supplies a 2.0 Ω resistor in series with two parallel 6.0 Ω resistors. Find current, terminal voltage and power dissipated inside the cell. Explain in English why terminal voltage differs from emf while supplying current.
<!-- /task:unit2-1 -->
<details markdown="1"><summary>提示</summary>
先求外电阻等效，再加内阻。
</details>
<details markdown="1"><summary>解答与修复</summary>
并联为 3.0 Ω，外电阻 5.0 Ω，总电阻 6.0 Ω，I = 1.0 A。端电压 6.0−1.0(1.0) = 5.0 V，内耗 I²r = 1.0 W。英文可写：'The source supplies 6 J per coulomb, while 1 J per coulomb is transferred internally, leaving 5 J per coulomb for the external circuit.'

修复：[对应课](/zh/alevel/as-physics/emf-and-internal-resistance/#retry)。先用该课新数据重试，再回来。
</details>
</div>

<div class="lesson-check" markdown="1">
<!-- task:unit2-2 -->
A 10 V supply feeds a 3.0 kΩ upper resistor and a 2.0 kΩ lower resistor. A 2.0 kΩ voltmeter is placed across the lower resistor. Predict the reading and compare it with the unloaded value. Replace the lower resistor by an NTC of the same initial resistance: predict the direction of change on warming, keeping the meter connected.
<!-- /task:unit2-2 -->
<details markdown="1"><summary>提示</summary>
有限电阻电压表并联在下臂，构成负载。
</details>
<details markdown="1"><summary>解答与修复</summary>
负载后下臂 2.0 || 2.0 = 1.0 kΩ，读数 10(1)/(3+1) = 2.5 V；无负载为 4.0 V。升温使 NTC 电阻减小，下臂并联等效电阻及输出电压都下降。无限电阻理想电压表不同。

修复：[对应课](/zh/alevel/as-physics/dc-circuits-and-potential-dividers/#retry)。先用该课新数据重试，再回来。
</details>
</div>

<div class="lesson-check" markdown="1">
<!-- task:unit2-3 -->
Constructed terminal measurements are (I / A, V / V): (0.20, 1.42), (0.50, 1.30), (0.80, 1.18). Choose a graph, estimate cell parameters and predict the terminal voltage at 1.0 A. A later repeat at 0.20 A gives 1.34 V. Explain why a single fixed-parameter model now needs checking, and design a comparison that can distinguish current dependence from time/temperature drift.
<!-- /task:unit2-3 -->
<details markdown="1"><summary>提示</summary>
解释 V–I 斜率／截距，再分开时间变化和电流选择。
</details>
<details markdown="1"><summary>解答与修复</summary>
V 对 I 图斜率 −0.40 Ω、截距 1.50 V，所以 r = 0.40 Ω、emf = 1.50 V。参数不变才可预测 1.0 A 时 1.10 V。后来小电流读数改变，与原固定参数线不符。交错测低电流参考点、改变电流顺序、读数间断电并监测时间／温度，在相近热状态重复。一个后测点不能唯一识别原因。

修复：[对应课](/zh/alevel/as-physics/emf-and-internal-resistance/#data-check)。先用该课新数据重试，再回来。
</details>
</div>

<div class="lesson-check" markdown="1">
<!-- task:unit2-4 -->
A 0.20 kg load on a spring has period 0.50 s. Predict the period at 0.45 kg in the same model. A pendulum has period 1.6 s at length 0.64 m. Choose a length giving 2.0 s. For both experiments explain one controlled quantity and one bias that repeating timing alone cannot remove. Compare energy loss in a free damped oscillator with energy input in a sustained forced oscillator.
<!-- /task:unit2-4 -->
<details markdown="1"><summary>提示</summary>
用平方根比例，区分长度定义和计时散布。
</details>
<details markdown="1"><summary>解答与修复</summary>
弹簧 T = 0.50√(0.45/0.20) = 0.75 s；单摆 L = 0.64(2.0/1.6)² = 1.00 m。保持小振幅及装置几何，固定长度零偏或遗漏砝码盘／弹簧有效质量不会被重复计时消除。自由阻尼使机械能外流、振幅减小；稳定受迫响应需平均输入等于损失，驱动接近固有频率可共振。

修复：[对应课](/zh/alevel/as-physics/oscillations-and-resonance/#retry)。先用该课新数据重试，再回来。
</details>
</div>

<div class="lesson-check" markdown="1">
<!-- task:unit2-5 -->
A string fixed at both ends has length 0.90 m. It displays three loops at 120 Hz. Find wavelength and speed. In another apparatus a grating of spacing 1.5 μm gives a second-order maximum at 45°. Find the light wavelength and the largest allowed order. Explain why the number of string loops and the grating order are different physical labels.
<!-- /task:unit2-5 -->
<details markdown="1"><summary>提示</summary>
弦数半波长，光栅数程差级次。
</details>
<details markdown="1"><summary>解答与修复</summary>
弦 λ = 2(0.90)/3 = 0.60 m，v = 120(0.60) = 72 m/s。光栅 λ = (1.5 × 10⁻⁶)sin 45°/2 = 5.30 × 10⁻⁷ m = 530 nm；d/λ = 2.828，最高级 2。弦的 n 数固定端间半波长，光栅的 n 数相邻缝程差中的整波长。

</details>

分题修复：[弦](/zh/alevel/as-physics/progressive-and-stationary-waves/#retry) · [光栅](/zh/alevel/as-physics/interference-and-diffraction/#retry)
</div>

<div class="lesson-check" markdown="1">
<!-- task:unit2-6 -->
A double-slit pattern has a 24.0 mm distance spanning 8 bright-fringe intervals, slit separation 0.20 mm and screen distance 1.0 m. Estimate wavelength. Explain what further measurements you need to put an uncertainty on it. Separately, an optical fibre has core index 1.50 and cladding index 1.47: test guidance for a core ray at 82° to the boundary normal. Explain why a narrower source spectrum can reduce one kind of pulse broadening but does not eliminate different path lengths.
<!-- /task:unit2-6 -->
<details markdown="1"><summary>提示</summary>
数条纹间隔，导光先检验高到低折射率及临界角。
</details>
<details markdown="1"><summary>解答与修复</summary>
w = 24.0/8 = 3.0 mm，λ = wa/D = 6.0 × 10⁻⁷ m = 600 nm。还需端点位置／跨度、a、D 的不确定度及重复与对齐信息，不能仅据裸数值给唯一定量误差。临界角 arcsin(1.47/1.50) = 78.5°，82° 符合全反射。窄光谱减少材料色散，不能消除模间不同路径的传播时间差。

</details>

分题修复：[双缝](/zh/alevel/as-physics/interference-and-diffraction/#double-slit) · [光纤](/zh/alevel/as-physics/refraction-and-optical-fibres/#retry)
</div>

<div class="lesson-check" markdown="1">
<!-- task:unit2-7 -->
Photons of energy 4.0 eV fall on a surface with work function 2.5 eV. Predict stopping potential and the effect of doubling intensity at the same photon energy. A 30 kV X-ray tube is then compared with a 60 kV tube using the same target: compare maximum photon energies and explain why the target's characteristic line energies need not double. Finally, explain what electron diffraction adds to evidence about matter.
<!-- /task:unit2-7 -->
<details markdown="1"><summary>提示</summary>
每光子／电子能量与粒子数分别比较。
</details>
<details markdown="1"><summary>解答与修复</summary>
最大电子动能 1.5 eV，遏止电压 1.5 V。增强强度在收集可比时增光子到达率／电流，不改遏止电压。X 射线最大能量 30、60 keV；只要均能激发相关跃迁，同一靶的原子能级差固定，特征线能量不必加倍。电子衍射支持物质波行为，局部撞击证据仍在。

分题修复：[光电／能级](/zh/alevel/as-physics/photons-and-wave-particle-duality/#retry) · [X-ray / diffraction](/zh/alevel/as-physics/photons-and-wave-particle-duality/#xray-duality-retry)
</details>
</div>

<div class="lesson-check" markdown="1">
<!-- task:unit2-8 -->
Choose one of RP3, RP4 or RP5. Write an English explanation connecting the raw record, the plotted variables, the fitted parameter and an uncertainty/bias limitation. Then name the second apparatus required in RP4 and in RP5. Explain why a successful web data exercise does not demonstrate that a student can align, operate or safely handle the real apparatus.
<!-- /task:unit2-8 -->
<details markdown="1"><summary>提示</summary>
先选一种实验，写实际原始测量，再写图轴。
</details>
<details markdown="1"><summary>解答与修复</summary>
英文例：'For RP3, each simultaneous terminal voltage and current reading defines a point on a V–I graph. Its intercept estimates emf and the negative gradient estimates internal resistance. A later reference reading can reveal drift; a narrow scatter does not rule out a shared calibration bias.' RP4 是弹簧与单摆，RP5 是双缝与光栅。数据处理不能检验实体对齐、操作、风险控制及独立成功运行。

</details>

按所选实验修复：[RP3](/zh/alevel/as-physics/emf-and-internal-resistance/#retry) · [RP4](/zh/alevel/as-physics/oscillations-and-resonance/#practical-check) · [RP5](/zh/alevel/as-physics/interference-and-diffraction/#practical-check)
</div>

<h2 id="next-study-session">按证据安排下次练习</h2>

分别记录模型选择、表征／图线、数值检查、实验推断和英文解释。出错要写缺的连接，关帮助完成链接重试。之后把一道 Unit 1 与一道 Unit 2 混做。这提供自查路线；记忆保持与实验能力仍需观察学生实际表现。


<h2 id="sources-and-next">范围与下一步</h2>

OxfordAQA 9630 PH02 / 3.4–3.5, with 3.1–3.3 applications. 题目自拟，数值／示意数据为构造，核查点不是官方评分标准。 [官方大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-international-as-and-a-level-physics-specification.pdf).

[上一课](/zh/alevel/as-physics/photons-and-wave-particle-duality/) · [下一课](/zh/alevel/as-physics/measurements-and-uncertainties/) · [课程](/zh/alevel/as-physics/)
