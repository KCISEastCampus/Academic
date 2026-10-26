---
title: "Unit 1 综合复习"
layout: subjects
mathjax: true
grade: as
subject: as-physics
lang: zh-CN
translation_of: /alevel/as-physics/unit-1-review/
permalink: /zh/alevel/as-physics/unit-1-review/
toc_headings: h2, h3
study_page: true
reading_layout: true
---

请在**下一次学习时**使用，先关掉各课正文。题目刻意不标方法：先画模型、写条件与检查，再开提示。以下为自拟综合题，不是预测试卷或官方评分标准。

<h2 id="mixed-tasks">自己选模型</h2>

<div class="lesson-check" markdown="1">
<!-- task:unit1-1 -->
Choose plausible dimensions for a classroom and justify them. Using air density approximately 1.2 kg/m³, estimate the mass of air to the nearest power of ten. Explain how a 20% increase in every chosen dimension affects the mass. Do not treat your estimates as measured data.
<!-- /task:unit1-1 -->
<details markdown="1"><summary>提示</summary>
先选并解释三条长度，再用体积乘密度。
</details>
<details markdown="1"><summary>解答与修复</summary>
可取 8 m × 6 m × 3 m = 144 m³，空气质量约 173 kg，最近数量级为 10² kg。其他有理由的教室估计也可。各边 1.20 倍使体积／质量变 1.20³ = 1.728 倍，不是 1.20 倍。密度也近似，只报数量级，不报虚假小数精度。

修复：[回到对应课](/zh/alevel/as-physics/measurements-and-uncertainties/#practice-estimate)，然后关解答，完成该课改变条件的重试。
</details>
</div>

<div class="lesson-check" markdown="1">
<!-- task:unit1-2 -->
A uniform 4.0 m beam weighs 80 N. It rests on ordinary supports at x = 0 and 3.0 m. A 100 N load is at x = 2.4 m. Find both support reactions and the greatest load position x for which both contacts can remain. Explain what a negative calculated reaction would mean.
<!-- /task:unit1-2 -->
<details markdown="1"><summary>提示</summary>
绕 x=0 取矩，另一支持力降到零是接触极限。
</details>
<details markdown="1"><summary>解答与修复</summary>
绕 x = 0：R_B(3.0) = 80(2.0) + 100(2.4)，得 R_B = 133.3 N，R_A = 46.7 N。左端失去接触时 R_A = 0，180(3.0) = 160 + 100x，x = 3.8 m。更远要求 R_A 负，即普通未固定支座向下拉，超出模型。

修复：[回到对应课](/zh/alevel/as-physics/vectors-and-moments/#practice-beam)，然后关解答，完成该课改变条件的重试。
</details>
</div>

<div class="lesson-check" markdown="1">
<!-- task:unit1-3 -->
A ball leaves a ledge 1.8 m above level ground with velocity components +6.0 m/s horizontally and +2.0 m/s upwards. Take g = 10 m/s² and negligible air resistance. Find landing time, horizontal distance and vertical landing velocity. Explain in English which model assumption fails if appreciable upward lift acts.
<!-- /task:unit1-3 -->
<details markdown="1"><summary>提示</summary>
令竖直位移为 −1.8 m，再选未来的根。
</details>
<details markdown="1"><summary>解答与修复</summary>
共用飞行时间：−1.8 = 2t − 5t²，正根 t = (2 + √40)/10 = 0.832 s；水平距 4.99 m，v_y = 2 − 10t = −6.32 m/s。负根在发射前，应舍去。英文示范：'An appreciable lift force changes the resultant, so a_y is no longer necessarily −g and a_x may also change.'

修复：[回到对应课](/zh/alevel/as-physics/projectile-motion/#force-model-check)，然后关解答，完成该课改变条件的重试。
</details>
</div>


<div class="lesson-check" markdown="1">
<!-- task:unit1-4 -->
A 0.50 kg trolley moving right at 4.0 m/s sticks to a stationary 1.0 kg trolley. A sensor reports common velocity +1.20 m/s. Test a claim of negligible external horizontal impulse and calculate the external impulse required if both velocity readings are correct. Calculate the kinetic-energy change and explain why it cannot identify the cause of a momentum discrepancy. Separately, a 0.15 kg ball changes vertical velocity from −6.0 to +2.0 m/s during 0.030 s of floor contact. With g = 10 m/s², find average floor force.
<!-- /task:unit1-4 -->
<details markdown="1"><summary>提示</summary>
先比较系统总动量，地板力须在合力之外加回重力。
</details>
<details markdown="1"><summary>解答与修复</summary>
初动量 +2.0 kg m/s，实测末动量 +1.80 kg m/s，需外冲量 −0.20 N s，记录不支持外冲量可忽略。若忽略外冲量，共速应为 1.33 m/s。动能由 4.0 变 1.08 J，ΔK = −2.92 J；黏合的能量损失本身不能区分外冲量与错误动量读数。另一个球平均合力 0.15[2−(−6)]/0.030 = 40 N 向上，地板力还加 1.5 N 重力，为 41.5 N。

修复：[动量证据](/zh/alevel/as-physics/momentum-and-impulse/#retry-evidence)及[地板接触](/zh/alevel/as-physics/momentum-and-impulse/#retry-momentum)。
</details>
</div>


<div class="lesson-check" markdown="1">
<!-- task:unit1-5 -->
A wire of length 1.5 m and cross-sectional area 1.0 × 10⁻⁷ m² extends 0.90 mm under an additional load of 12 N, within the proportional region. Estimate Young modulus and energy stored by this additional extension from the unloaded reference. Explain why an unloading curve ending at a permanent extension would change the energy recovery calculation.
<!-- /task:unit1-5 -->
<details markdown="1"><summary>提示</summary>
模量用应力／应变，可回收能量用面积。
</details>
<details markdown="1"><summary>解答与修复</summary>
E = FL/(Ax) = 2.0 × 10¹¹ Pa，线性加载能量 ½Fx = 0.0054 J。永久伸长说明塑性变化，可回收功是实际卸载曲线下面积，不自动等于全部加载三角形。题目的参考态和弹性条件有必要。

修复：[回到对应课](/zh/alevel/as-physics/materials-and-young-modulus/#retry)，然后关解答，完成该课改变条件的重试。
</details>
</div>

<div class="lesson-check" markdown="1">
<!-- task:unit1-6 -->
An instrument gives outputs 1.1, 2.2, 2.9 and 4.2 V at inputs 0, 1, 2 and 3 N. No error bars or repeated readings are supplied. Draw an estimated straight trend, justify a provisional vertical uncertainty from scatter and test whether your chosen line/uncertainty is consistent with every point. Explain why scatter alone cannot rule out a common voltage offset.
<!-- /task:unit1-6 -->
<details markdown="1"><summary>提示</summary>
先试趋势线、算残差，再说明暂定散布带漏掉什么。
</details>
<details markdown="1"><summary>解答与修复</summary>
可用 V = 1.00F + 1.10，残差 0、+0.1、−0.2、+0.1 V；暂取纵向 ±0.2 V 与四点均一致。其他有根据的近似线与带宽也可，须逐点检查。缺重复／仪器资料，这只是粗略散布估计，不是校准不确定度或唯一直线。共同零偏会整体移动所有点而几乎不变散布。

修复：[回到对应课](/zh/alevel/as-physics/measurements-and-uncertainties/#graph-records)，然后关解答，完成该课改变条件的重试。
</details>
</div>

<div class="lesson-check" markdown="1">
<!-- task:unit1-7 -->
A detector records 510, 270 and 150 counts/min at times 0, 5 and 10 min. Background is 30 counts/min. Estimate half-life and expected total count rate at 20 min. Explain why repeated short counts fluctuate, and why subtracting background matters. Separately write the daughter nucleon/proton numbers for alpha decay of A = 226, Z = 88.
<!-- /task:unit1-7 -->
<details markdown="1"><summary>提示</summary>
每点扣背景，再找减半。
</details>
<details markdown="1"><summary>解答与修复</summary>
净计数率 480、240、120 counts/min，半衰期 5 min。20 min 净值 30，总值 60 counts/min。核衰变随机，有限计数会起伏；未扣背景会扭曲减半图样。α 衰变子核 A = 222、Z = 86。

修复：[回到对应课](/zh/alevel/as-physics/radiation-and-safety/#retry)，然后关解答，完成该课改变条件的重试。
</details>
</div>

<div class="lesson-check" markdown="1">
<!-- task:unit1-8 -->
Two ions have the same nucleon number A = 12 and proton number Z = 6. Ion P has charge +e; ion Q has charge +3e. Give their electron counts and compare specific charges using equal approximate masses. A photon of energy 1.20 MeV produces an electron–positron pair near a nucleus. Using rest energy 0.511 MeV for each particle, estimate the energy available as kinetic energy and explain why the nucleus is relevant.
<!-- /task:unit1-8 -->
<details markdown="1"><summary>提示</summary>
电子数为 Z−charge/e，粒子对须比较两个静能。
</details>
<details markdown="1"><summary>解答与修复</summary>
P 有 5 个电子，Q 有 3 个；近似质量相等时比荷之比 1:3。粒子对最多可分到 1.20−1.022 = 0.178 MeV 动能，核反冲还可能分走少量。附近原子核可接收反冲动量，使能量与动量同时守恒。

修复：[回到对应课](/zh/alevel/as-physics/atoms-and-particles/#retry)，然后关解答，完成该课改变条件的重试。
</details>
</div>


<div class="lesson-check" markdown="1">
<!-- task:unit1-motor -->
A 5.0 kg cart moves steadily at 2.0 m/s along a level floor. A motor pulls with 20 N at 60° above the horizontal while a constant 10 N resistance acts backwards. The cart travels 5.0 m, and electrical input power is 40 W. Calculate work by the pull, work by resistance, change in kinetic energy, mechanical output power and efficiency. Check whether ordinary floor contact is possible using g = 10 m/s². Explain why zero resultant work does not mean zero energy input.
<!-- /task:unit1-motor -->
<details markdown="1"><summary>提示</summary>
沿位移分解拉力，再比较输入与机械传递功率。
</details>
<details markdown="1"><summary>解答与修复</summary>
拉力功 +50 J，阻力功 −50 J，总功及 ΔK 为零，与匀速一致。机械输出功率 (20cos60°)(2) = 20 W，效率 50%。竖直拉力 17.3 N 小于重力 50 N，支持力约 32.7 N 为正，接触可成立。输入能量经小车克服阻力并伴随电气／内部损失，动能存量不变不代表没有能量传递。

修复：[功与功率](/zh/alevel/as-physics/work-energy-power/#power-check) · [功率重试](/zh/alevel/as-physics/work-energy-power/#power-retry)
</details>
</div>

<h2 id="review-your-evidence">检查答案提供了什么证据</h2>

模型选择、符号单位、图像或机制、英文解释分别检查。数值对而支座不可能施力，或守恒前提没说明，仍须修复。记录实际困难与重试结果，打勾不代表长期掌握。隔一段时间再自行改一个条件，计算前先预测什么必须改变。


<h2 id="sources-and-next">范围与下一步</h2>

OxfordAQA 9630 PH01 / 3.1–3.3. 题目自拟，数值／示意数据为构造，核查点不是官方评分标准。 [官方大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-international-as-and-a-level-physics-specification.pdf).

[上一课](/zh/alevel/as-physics/radiation-and-safety/) · [下一课](/zh/alevel/as-physics/charge-current-and-potential/) · [课程](/zh/alevel/as-physics/)
