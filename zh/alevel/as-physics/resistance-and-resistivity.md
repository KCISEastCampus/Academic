---
title: "电阻、特性曲线与电阻率"
layout: subjects
mathjax: true
grade: as
subject: as-physics
lang: zh-CN
translation_of: /alevel/as-physics/resistance-and-resistivity/
permalink: /zh/alevel/as-physics/resistance-and-resistivity/
toc_headings: h2, h3
study_page: true
reading_layout: true
---

<h2 id="start-here">电阻描述材料，还是整个实验？</h2>

电阻取决于材料、几何和物理条件。灯电流增加会升温，金属丝长度实验也可能意外把温升一起测进去。你将解释特性曲线，把几何因素与电阻率分开。先修：[电学定义](/zh/alevel/as-physics/charge-current-and-potential/)和[圆截面、不确定度](/zh/alevel/as-physics/materials-and-young-modulus/)。

<h2 id="characteristics">先读坐标轴，再读斜率</h2>

欧姆定律是在物理条件不变时 $I\propto V$，图像为过原点直线。I 对 V 的斜率为 $1/R$；V 对 I 则为 R。曲线的工作点电阻仍为该非零点的 V/I；切线描述局部变化率，通常不等于这个比值。

灯丝电流增大时升温，金属晶格振动与电子散射增强，电阻增大；I 对 V 曲线在较大幅值处变缓，反接对应负象限。半导体二极管正向偏置时导电明显，常规工作范围内反向电流很小，但不意味着所有二极管都有同一个固定阈值。

<h2 id="geometry">用电阻率排除试样尺寸</h2>

$$R=\frac{\rho L}{A},\qquad A=\frac{\pi d^2}{4}$$

均匀材料、固定温度下，电阻率 $\rho$ 的单位为 Ω m。长度增加会增加电阻；面积增加提供更多并联导电路径。直径须平方。

<div class="worked-example" markdown="1">
**完整示范——自拟题。**
<!-- task:resistivity-worked -->
A uniform metal wire has length 1.00 m, circular diameter 0.50 mm and resistance 2.0 Ω at fixed temperature. Calculate its resistivity and predict the resistance of the same material at that temperature with twice the length and twice the diameter.
<!-- /task:resistivity-worked -->

$A=1.96\times10^{-7}\,\mathrm{m^2}$，所以 $\rho=RA/L=3.93\times10^{-7}\,\Omega\,\mathrm m$。直径加倍使面积变四倍，长度加倍使电阻变两倍，合起来电阻减半为 1.0 Ω。比例成立需要材料、温度不变。
</div>

<h2 id="characteristic-check">解释三份记录</h2>

<div class="lesson-check" markdown="1">
<!-- task:resistance-characteristic -->
Constructed (V/V,I/A) records are A: (1,0.10),(2,0.20); B: (1,0.20),(2,0.30),(4,0.40); C: (−2,approximately 0),(0.2,approximately 0),(0.8,0.10). Identify an ohmic conductor, filament lamp and diode, sketch their qualitative I-against-V characteristics including negative voltages, and calculate B’s resistance at 4 V. If V is plotted vertically instead, what is the ohmic-line gradient? Does a curved graph’s tangent always give V/I?
<!-- /task:resistance-characteristic -->
<details markdown="1"><summary>提示</summary>
命名前先比较各点 V/I，负电压也保持一致。
</details>
<details markdown="1"><summary>解答与修复</summary>
A 为欧姆导体，R = 10 Ω；B 类似灯，电阻由 5 增至 10 Ω；C 类似二极管。B 在 4 V 时为 10 Ω。A 的 V 对 I 斜率 10 V/A，I 对 V 则为 0.10 A/V；曲线切线不必等于 V/I 或其倒数。B 画成对应正负的曲线，C 反向只有很小电流。若不知不觉换了坐标轴，标清后再重试。
</details>
</div>

<h2 id="wire-check">图线能揭示额外电阻</h2>

<div class="lesson-check" markdown="1">
<!-- task:resistivity-wire -->
For a constructed wire experiment at fixed temperature, lengths 0.25,0.50,0.75,1.00 m give resistances 1.2,2.2,3.2,4.2 Ω. Area is 5.0 × 10⁻⁸ m². Infer resistivity and a possible contact-resistance contribution. Explain why taking R/L from one reading would overestimate resistivity, and choose a procedure to control heating.
<!-- /task:resistivity-wire -->
<details markdown="1"><summary>提示</summary>
取 R 对 L 的斜率，同时保留截距。
</details>
<details markdown="1"><summary>解答与修复</summary>
斜率 4.0 Ω/m，得 $\rho=4.0(5.0\times10^{-8})=2.0\times10^{-7}\,\Omega\,\mathrm m$。0.20 Ω 截距可能来自在本模型中近似恒定的接线／接触电阻。单点 R/L 把额外项算进去，会高估电阻率。用小电流、读数间断电、稳定温度，并改变长度设置的顺序重复；独立检查接触，不能只凭截距断言原因。若几何关系错，用下方新比例重试。
</details>
</div>

<h2 id="temperature-check">温度也是模型的一部分</h2>

NTC 随温度上升而降阻，在这些器件中可移动载流子数量增加起主要作用，电阻—温度校准通常为曲线。超导体在适当条件下，低于依材料而定的临界温度时电阻率为零，不只是普通导体变冷。可用于强电磁铁与减少输电损耗，但冷却仍需要能量；临界磁场计算不在本 AS 范围。

<div class="lesson-check" markdown="1">
<!-- task:resistance-temperature -->
An NTC thermistor has constructed resistances 9,5,3 kΩ at 10,30,50°C. Explain the trend, whether one straight calibration line is justified, and how measuring current might alter the reading. Contrast the metal-wire trend and the ideal resistance change through a superconductor’s critical temperature. Give one useful superconducting application and one energy cost the zero-resistivity statement does not remove.
<!-- /task:resistance-temperature -->
<details markdown="1"><summary>提示</summary>
分清器件温度校准与测量本身造成的温升。
</details>
<details markdown="1"><summary>解答与修复</summary>
相同 20°C 区间分别降 4、2 kΩ，不支持全范围一条精确直线。测量电流可使 NTC 自热、降阻，造成表观温度偏高。普通金属通常随温度上升而增阻，理想超导转变在临界温度以下达到零。强磁场磁体或低损耗电缆是用途，但制冷及其他系统损耗仍存在。在控温浴中减小测量电流重测，可检验自热解释。
</details>
</div>

<h2 id="retry">换几何，换图线斜率</h2>

<div class="lesson-check" markdown="1">
<!-- task:resistance-retry -->
Another wire of the same material is three times as long and has half the original diameter. Predict its resistance ratio at fixed temperature. A lamp has V = 3.0 V and I = 0.20 A, while its local I-against-V tangent gradient is 0.040 A/V: find its operating resistance and compare with the inverse tangent gradient. State a fresh check for a thermistor whose apparent temperature shifts when measuring current increases.
<!-- /task:resistance-retry -->
<details markdown="1"><summary>提示</summary>
面积随直径平方变化；从原点的比值不等于局部切线。
</details>
<details markdown="1"><summary>解答与修复</summary>
电阻比例 $3/(1/2)^2=12$。灯的工作电阻 15 Ω，切线斜率倒数 25 Ω，非欧姆元件不要求二者相等。在外界温度受控时选多个更小测量电流并等待稳定；减小电流后读数收敛，支持自热解释。以后在 [Unit 2 综合](/zh/alevel/as-physics/unit-2-review/)重做这些判断。
</details>
</div>


<h2 id="sources-and-next">范围与下一步</h2>

OxfordAQA 9630 §3.4.2–3.4.3. 题目自拟，数值／示意数据为构造，核查点不是官方评分标准。 [官方大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-international-as-and-a-level-physics-specification.pdf).

[上一课](/zh/alevel/as-physics/charge-current-and-potential/) · [下一课](/zh/alevel/as-physics/dc-circuits-and-potential-dividers/) · [课程](/zh/alevel/as-physics/)

{% include exam_topic_practice.html %}
