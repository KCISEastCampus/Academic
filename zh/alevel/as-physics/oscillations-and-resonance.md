---
title: "振动与共振"
layout: subjects
mathjax: true
grade: as
subject: as-physics
lang: zh-CN
translation_of: /alevel/as-physics/oscillations-and-resonance/
permalink: /zh/alevel/as-physics/oscillations-and-resonance/
toc_headings: h2, h3
study_page: true
reading_layout: true
---

摆的速度不断变化，周期仍可以预测。要分清重复一次所需时间、能量怎样交换，以及受迫运动的能量来自哪里。

<h2 id="before-you-start">开始前</h2>

先会用[能量](/zh/alevel/as-physics/work-energy-power/)、[胡克定律](/zh/alevel/as-physics/materials-and-young-modulus/)和[图线不确定度](/zh/alevel/as-physics/measurements-and-uncertainties/)。本课要预测周期、画能量变化、设计 RP4 的两种装置，并区分受驱动与共振。

<h2 id="period-models">两种周期模型</h2>

位移从平衡位置量起，振幅 A 是位移绝对值的最大值；周期 T 是完整重复一次的时间，频率 f = 1/T。数周期时要回到**同一位置且运动方向相同**，不能每过一次中点就算一次。

弹簧上总振动质量为 m、劲度系数为 k。在运动范围服从胡克定律、弹簧质量可忽略、损失很小时：

$$T=2\pi\sqrt{\frac{m}{k}}.$$

单摆长度 L 从悬点量到摆球质心；绳轻、不可伸长，摆角很小（以弧度描述）：

$$T=2\pi\sqrt{\frac{L}{g}}.$$

弹簧的 m 包括砝码盘等一起振动的负载。理想单摆周期与摆球质量无关。这是 AS 使用的模型；加速度—位移方程及完整简谐相位方程属于 A2。

<h2 id="energy-changes">围绕平衡位置追踪能量</h2>

水平理想弹簧弹性势能为 ½kx²，振动总能量为 ½kA²。竖直弹簧要合并重力势能与弹性势能：它们相对平衡位置的变化仍为 ½kx²，**不是**弹簧绝对弹性势能单独等于此式。中点动能最大，端点动能为零。端点回复合力的大小最大；中点合力为零而速率最大。

![从正端点开始的一周期：T/4 和 3T/4 过中点，T/2 到负端点；势能和动能在一个位移周期内交换两次。](/assets/images/physics-as-oscillation-energy.svg){: width="800" height="380" }

单摆升高时重力势能增加，损失可忽略时与动能交换。能量图的重复周期是位移周期的一半。图是小振动理想模型示意，不是实测记录。

<div class="worked-example" markdown="1">
**完整示范——自拟题。**
<!-- task:spring-worked -->
A 0.50 kg mass oscillates vertically on a spring of stiffness 50 N/m. Its amplitude is 0.040 m about equilibrium. Calculate its period and maximum kinetic energy. Explain why zero velocity at an end does not mean zero resultant force.
<!-- /task:spring-worked -->

周期为 $2\pi\sqrt{0.50/50}=0.628$ s。振动能量及最大动能为 $½(50)(0.040)^2=0.040$ J。端点虽然瞬时静止，弹簧与重力的合力仍指向平衡位置；瞬时速度为零不代表加速度为零。
</div>

<div class="lesson-check" markdown="1">
<!-- task:period-check -->
A pendulum has length 0.80 m. Take g = 9.8 m/s². Predict its period, then predict the period if its length is multiplied by four. Explain why changing the bob mass is not a suitable way to change the ideal small-angle period. Sketch how kinetic and potential energy vary during one cycle starting at an end.
<!-- /task:period-check -->
<details markdown="1"><summary>提示</summary>
先用平方根关系。能量图从摆球较高且静止的端点开始。
</details>
<details markdown="1"><summary>解答与修复</summary>
T = 1.80 s；长度变四倍，周期变两倍，即 3.59 s。理想公式不含摆球质量。0、T/2、T 是端点：势能最大、动能零；T/4、3T/4 过中点：动能最大、势能最小。选定势能零点后两者均非负，总和恒定。
</details>
</div>

<h3 id="energy-displacement-check">把能量画成位移的函数</h3>

<div class="lesson-check" markdown="1">
<!-- task:energy-displacement -->
A horizontal ideal spring has k = 40 N/m and amplitude A = 0.050 m. Sketch potential energy, kinetic energy and total oscillation energy against displacement x from −A to +A. Label their values at x = 0 and ±A, then calculate both energies at x = +0.025 m. How does this graph differ from energy against time?
<!-- /task:energy-displacement -->
<details markdown="1"><summary>提示</summary>
U = ½kx²，K = E_total − U；横轴换了。
</details>
<details markdown="1"><summary>解答与修复</summary>
总能量 0.050 J，为水平线。U 为上开口抛物线，中点 0、端点 0.050 J；K 为倒抛物线，中点 0.050 J、端点 0。x = 0.025 m 时 U = 0.0125 J，K = 0.0375 J。这不是能量随时间的图，横轴也不表示物体总从左向右运动。
</details>
</div>

<h2 id="practical-check">RP4：检验两种模型</h2>

弹簧有 $T^2=(4\pi^2/k)m$，因此 T² 对 m 图的斜率单位是 s²/kg，k = 4π²/斜率。单摆有 $T^2=(4\pi^2/g)L$，g = 4π²/斜率。先决定改变什么量；画出直线不等于已经辨认模型。

一次计多个完整周期，重复后除以周期数。设固定参照标记，不推摆球，小幅且尽量一致。单摆从悬点量到球心并避免视差；弹簧避免横摆和超出弹性范围。固定支架，砝码下设托盘或留空，脸避开运动摆球。真实操作须有现场监督与设备检查。

正式拟合使用全部处理后数据，画不确定度并比较合理斜率，不能把两个端点的计算当精度保证。重复散布可估随机变化，固定反应偏差或长度零点误差仍可能保留。

<div class="lesson-check" markdown="1">
<!-- task:practical-data -->
For a spring, the constructed raw times for **20 complete oscillations** are:

| Mass / kg | Time 1 / s | Time 2 / s | Time 3 / s |
| --- | --- | --- | --- |
| 0.10 | 8.8 | 8.9 | 9.0 |
| 0.20 | 12.5 | 12.6 | 12.7 |
| 0.30 | 15.3 | 15.4 | 15.5 |
| 0.40 | 17.7 | 17.8 | 17.9 |

Choose a graph to estimate spring stiffness. Process the first and last rows, use their line as an estimate, and explain what an intercept might reveal. Use half the repeat range as the timing uncertainty estimate. Find the first row's uncertainty in T².

For a pendulum, constructed lengths 0.25, 0.49, 0.81 m give mean times for 20 cycles of 20.0, 28.0, 36.0 s. Choose and use a different graph to estimate g. Design **both** methods: define length/mass, timing landmarks, controls and risk reduction. Explain why one repeated bob is not 20 independent apparatus setups.
<!-- /task:practical-data -->
<details markdown="1"><summary>提示</summary>
平方的是周期，不是 20 周总时间。平方量的相对不确定度近似加倍。
</details>
<details markdown="1"><summary>解答与修复</summary>
弹簧平均时间为 8.9、12.6、15.4、17.8 s，T = 0.445、0.630、0.770、0.890 s。首末 T² 为 0.1980、0.7921 s²，端点估斜率 1.9803 s²/kg，k ≈ 19.9 N/m，截距接近零。首行时间估计 ±0.1 s，ΔT = 0.005 s，Δ(T²) ≈ 2(0.445)(0.005) = 0.00445 s²。这是一个纵坐标的不确定度，不是拟合 k 的不确定度。

单摆 T = 1.0、1.4、1.8 s，T² = 1.00、1.96、3.24 s²。纵轴 T²、横轴 L，斜率 4.0 s²/m，g ≈ 9.87 m/s²。截距可能来自零点偏差或遗漏的有效质量／长度，不能只据截距就认定原因，需比较模型并重测。计 20 周改善计时分辨能力，但仍共享同一装置的系统误差。
</details>
</div>

<h2 id="damping-and-resonance">自由、受迫与共振</h2>

自由振动在初始扰动后以固有频率运动。阻尼使机械能转移到环境，振幅减小。受迫运动由周期驱动供能，稳定响应跟随驱动频率。驱动接近固有频率时，每周期能量输入可维持较大振幅，这就是共振。

增加阻尼通常降低并拓宽位移振幅响应峰，频率选择不那么尖锐。轻阻尼峰在固有频率附近，不能说所有阻尼下峰频都恰好等于固有频率。可用于调谐振动系统，也可用于限制机器与桥梁的不良振动。

<div class="lesson-check" markdown="1">
<!-- task:resonance-check -->
At the same driving amplitude a lightly damped oscillator has its largest displacement near 2.0 Hz. With extra damping the peak becomes lower and broader. Explain energy transfer, the frequency choice for a large response, and why a bridge should avoid sustained driving near its natural frequency. Does a large driving force alone establish resonance?
<!-- /task:resonance-check -->
<details markdown="1"><summary>提示</summary>
比较驱动与固有频率，再比较输入能量与损失。
</details>
<details markdown="1"><summary>解答与修复</summary>
轻阻尼时在约 2.0 Hz 驱动可产生较大响应。驱动在有利相位反复供能，稳定振幅下平均输入等于耗散。阻尼增加使损失增加、峰降低。桥梁应避免长期受到接近自身模态频率的激励。很大但频率相差很远的力只能说明受迫运动，不能证明共振。
</details>
</div>

<h2 id="retry">修复后换证据</h2>

<div class="lesson-check" markdown="1">
<!-- task:oscillation-retry -->
Retry without the previous solution. A spring gives T² = 0.80m + 0.020, with T in s and m in kg. Estimate k and explain why forcing the line through zero changes the model. A pendulum gives T² = 4.1L + 0.03, with L in m. Estimate g and name a length error that could give a positive intercept. If a spring's amplitude halves with negligible change of period, what fraction of its original oscillation energy remains?
<!-- /task:oscillation-retry -->
<details markdown="1"><summary>提示</summary>
把斜率与截距分开解释。振动能量正比于 A²。
</details>
<details markdown="1"><summary>解答与修复</summary>
k = 4π²/0.80 = 49.3 N/m。强迫过原点舍弃了偏移并改变斜率，应检查弹簧有效质量等原因，不能直接当噪声。g = 4π²/4.1 = 9.63 m/s²。若记录的 L 总比悬点到球心短固定量，T² 图有正截距。振幅减半，能量剩四分之一。周期困难回 period-models；截距困难重新处理 practical-data。
</details>
</div>


<h3 id="resonance-retry">重试共振解释</h3>

<div class="lesson-check" markdown="1">
<!-- task:resonance-retry -->
Retry: a machine has a natural frequency near 5 Hz. It is driven at 12 Hz by a large force; a second trial drives at 5 Hz with the same force amplitude. Predict which is more likely to produce a resonance peak for light damping. Explain how added damping changes the peak and how a steady forced amplitude can persist although energy is continually dissipated.
<!-- /task:resonance-retry -->
<details markdown="1"><summary>提示</summary>
比较频率与平均能量收支，不能只看力大。
</details>
<details markdown="1"><summary>解答与修复</summary>
5 Hz 更接近共振；12 Hz 的大力本身不能证明共振。增加阻尼降低并拓宽位移峰。稳定振幅下驱动每周期补足平均损失，自由阻尼振动则没有持续驱动、能量下降。
</details>
</div>

<h2 id="sources-and-next">范围与下一步</h2>

OxfordAQA 9630 3.5.1–3.5.2 / RP4. 题目自拟，数值／示意数据为构造，核查点不是官方评分标准。 [官方大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-international-as-and-a-level-physics-specification.pdf).

[上一课](/zh/alevel/as-physics/emf-and-internal-resistance/) · [下一课](/zh/alevel/as-physics/progressive-and-stationary-waves/) · [课程](/zh/alevel/as-physics/)

{% include exam_topic_practice.html %}
