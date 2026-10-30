---
title: "行波与驻波"
layout: subjects
mathjax: true
grade: as
subject: as-physics
lang: zh-CN
translation_of: /alevel/as-physics/progressive-and-stationary-waves/
permalink: /zh/alevel/as-physics/progressive-and-stationary-waves/
toc_headings: h2, h3
study_page: true
reading_layout: true
---

水波向外走，漂浮标记主要上下动。波把能量传到别处，介质粒子在局部振动。要区分图样传播和介质运动。

<h2 id="before-you-start">开始前</h2>

先会[周期与频率](/zh/alevel/as-physics/oscillations-and-resonance/)、图轴和比例。本课读时空记录、叠加位移、预测谐波，并解释声与微波证据。

<h2 id="progressive-waves">先读坐标，再用波速公式</h2>

行波把扰动与能量传到别处，不整体搬运介质。振幅是位移最大值；波长 λ 是相位完整重复一次的空间距离。位移—距离图是瞬时快照，位移—时间图追踪一个位置；前者给 λ，后者给 T。单张快照不能给传播速率。

$$v=f\lambda,\qquad f=\frac1T.$$

相位描述振动进行到哪一步。均匀正弦行波中，间距 Δx 的相位差为 $2\pi\Delta x/\lambda$ 弧度，或 $360^\circ\Delta x/\lambda$，按完整周期取余。同相需位移和**运动阶段**相同，不能只看一张快照里高度相等。

横波的振动方向垂直传播方向，例如弦波和电磁波；纵波平行，例如空气中的声。疏密区向前传播，粒子在原位置附近来回动；压强／密度最大不代表粒子向上位移。

<div class="worked-example" markdown="1">
**完整示范——自拟题。**
<!-- task:wave-worked -->
A progressive wave has wavelength 0.80 m and frequency 5.0 Hz. Two points 0.20 m apart lie along its direction of travel. Find wave speed and their phase difference. Does a displacement–distance snapshot alone give frequency? Explain.
<!-- /task:wave-worked -->

v = 5.0 × 0.80 = 4.0 m/s。间距是 λ/4，相位差 π/2 rad 或 90°。快照能给空间尺度，若要频率还需时间信息或已知速率。
</div>

所有电磁波在真空速率相同，c ≈ 3.00 × 10⁸ m/s。振动的是电场与磁场，不是材料粒子，传播不需要介质。

<div class="lesson-check" markdown="1">
<!-- task:electromagnetic-check -->
A radio wave has frequency 1.0 × 10⁸ Hz and vacuum wavelength 3.0 m. A visible-light wave has frequency 6.0 × 10¹⁴ Hz and vacuum wavelength 5.0 × 10⁻⁷ m. Compare their speeds. Explain what oscillates in these waves and why a material medium is not required.
<!-- /task:electromagnetic-check -->
<details markdown="1"><summary>提示</summary>
分别算 fλ，别把波长不同当速率不同。
</details>
<details markdown="1"><summary>解答与修复</summary>
两者都是 3.0 × 10⁸ m/s。电场与磁场振动；真空没有介质粒子要跟着振动。不能把普通弦／声波的介质解释套到所有波。
</details>
</div>

<h2 id="ultrasound">用传播信号定位</h2>

超声是高于人耳可听范围的声，通常指高于约 20 kHz。脉冲在组织界面反射，往返时间可用于定位。耦合剂减少皮肤与空气界面的反射。回波强度还取决于界面和衰减，不能把它当直接照片或自动诊断。

<div class="lesson-check" markdown="1">
<!-- task:wave-check -->
An ultrasound echo returns 160 μs after transmission. Sound speed in tissue is 1540 m/s. Estimate the reflector depth and explain the factor of two. Give one limitation when interpreting a real medical echo.
<!-- /task:wave-check -->
<details markdown="1"><summary>提示</summary>
微秒先转秒；记录时间包含去程和回程。
</details>
<details markdown="1"><summary>解答与修复</summary>
深度 = vt/2 = 1540(160 × 10⁻⁶)/2 = 0.1232 m ≈ 12.3 cm。假设包括沿路平均声速符合给定值，并识别了正确回波。不同组织声速、衰减、多次反射都限制推断；这是模型计算，不是医疗解读。
</details>
</div>

<h2 id="superposition">逐位置、逐时刻加位移</h2>

在线性模型中，波重叠处合位移等于各波位移的代数和。波可穿过彼此，某瞬间抵消并不摧毁其传能能力。

同频、等振幅、反向传播的两列波可形成驻波。波节在所有时刻位移均为零，相邻波节距 λ/2；中间波腹振幅最大。同一波瓣内各点同相，相邻波瓣反相。理想驻波沿弦无净能量传输，与单列行波不同；实际损失需持续输入来维持。

<div class="lesson-check" markdown="1">
<!-- task:superposition-check -->
At equally spaced positions x = 0, 1, 2, 3, 4 cm, two waves have instantaneous displacements (in mm):
A: 0, +2, 0, −2, 0; B: 0, −1, 0, +1, 0.
Plot A, B and their sum on the same scale. At a later instant both displacements are reversed. Give the new sum. Does a point where the sum is zero in just one snapshot have to be a permanent node? Explain how two identical opposite-travelling waves form a stationary pattern.
<!-- /task:superposition-check -->
<details markdown="1"><summary>提示</summary>
带符号逐项相加；检查“所有时刻”的要求。
</details>
<details markdown="1"><summary>解答与修复</summary>
合位移为 0、+1、0、−1、0 mm，后来为 0、−1、0、+1、0 mm。三条记录应保留正负并用同一尺度。一张快照的零点不足以认定波节，驻波甚至会所有位置同时经过零。反向波不断叠加，在波节持续抵消、波腹最大加强。
</details>
</div>

<h3 id="stationary-formation">用相反传播的分波重建驻波</h3>

![三时刻分波图：实线向右、虚线向左，t=0 重合，t=1 s 反向，t=2 s 再次重合但反号；尚未给合波。](/assets/images/physics-as-stationary-components.svg){: width="780" height="560" }

<div class="lesson-check" markdown="1">
<!-- task:stationary-formation-task -->
The diagram gives two sinusoidal component waves of amplitude 1.0 mm and wavelength 4.0 cm, travelling in opposite directions at 1.0 cm/s. Trace and add them at t = 0, 1.0 and 2.0 s. Mark the persistent nodes of the resultant, distinguishing them from temporary zeros. From the spatial record find wavelength; from the right-moving wave's displacement at x = 1 cm (+1, 0, −1, 0, +1 mm at t = 0, 1, 2, 3, 4 s), find period and check wave speed. Explain why a table of isolated zeros alone would not prove a permanent node.
<!-- /task:stationary-formation-task -->
<details markdown="1"><summary>提示</summary>
逐位置加位移；过零不等于永久不动。
</details>
<details markdown="1"><summary>解答与修复</summary>
t=0 合波为 0、+2、0、−2、0 mm；t=1 s 处处为零；t=2 s 为 0、−2、0、+2、0 mm。持续节点在 x=0、2、4 cm，x=1、3 cm 是波腹。λ=4.0 cm，T=4.0 s，v=1.0 cm/s。单独三个快照不能证明所有时刻为零；这里还用了已声明的等振幅、同频、反向连续正弦波模型。若将 t=1 s 所有零都当波节，应回到“所有时刻”的定义。
</details>
</div>

<h2 id="string-harmonics">固定弦选出的图样</h2>

固定端位移为零，第 n 谐波在 L 中放入 n 个半波长：

$$L=\frac{n\lambda_n}{2},\qquad v=\sqrt{\frac{F}{\mu}},\qquad f_n=\frac{n}{2L}\sqrt{\frac{F}{\mu}}.$$

F 是张力，μ 是 kg/m 表示的线密度，n = 1、2、3……。第一谐波只有一个波瓣，模型要求弦均匀柔软、两端近似固定。

用振动器、弦、滑轮和悬挂负载检验。量波节间的振动长度，并用已知弦长和质量求 μ；只有滑轮摩擦小、负载稳定时才近似 F = mg。每次只改变 L、F、μ 中一个，保持谐波级次 n 不变，调驱动至清晰图样，记录频率及波瓣数，再比较 f 与 1/L、√F 或 1/√μ；若 n 改变，须改比 f/n。先数波瓣再确定 n。固定滑轮与负载，限制振幅使负载保持受支承。

<div class="lesson-check" markdown="1">
<!-- task:string-check -->
A string fixed at both ends has length 0.60 m, tension 24 N and mass per unit length 0.0060 kg/m. Find its wave speed and first three harmonic frequencies. Sketch the second harmonic, marking nodes and antinodes. Predict what happens to the first harmonic if tension is multiplied by four, then if the same string length is doubled at unchanged tension.
<!-- /task:string-check -->
<details markdown="1"><summary>提示</summary>
先算 v。第二谐波需在固定端之间画两个波瓣。
</details>
<details markdown="1"><summary>解答与修复</summary>
v = √(24/0.0060) = 63.2 m/s，f₁ = 52.7 Hz、f₂ = 105 Hz、f₃ = 158 Hz。第二谐波波节在 0、0.30、0.60 m，波腹在 0.15、0.45 m，相邻瓣反向运动。F 四倍使 f₁ 两倍；其余不变时 L 两倍使 f₁ 减半。
</details>
</div>

<h2 id="polarisation-check">其他介质与偏振</h2>

空气柱中的入射与反射声可形成驻波，压强波节与位移波节不同。麦克风测压强变化；理想模型里位移波节是压强波腹。微波发射器与反射板也可形成驻波，沿波束移动接收器可取样。

偏振限制横向振动的方向。偏振片的透射轴选择一种电场方向；理想交叉偏振片强烈抑制透射。接收天线相对电场转动时信号改变。普通纵向声没有不同横向振动方向可选择。本阶段不要求马吕斯定律计算。

<div class="lesson-check" markdown="1">
<!-- task:polarisation-task -->
A microwave receiver gives alternating maxima and minima as it moves towards a metal reflector. Adjacent minima are 1.5 cm apart. Find wavelength and explain the incident/reflected-wave model. In a separate test an aerial is rotated about the beam direction and the signal drops. What property is supported? Explain why an ideal longitudinal sound wave cannot be polarised in this way.
<!-- /task:polarisation-task -->
<details markdown="1"><summary>提示</summary>
相邻波节距是半波长；区分电场方向与传播方向。
</details>
<details markdown="1"><summary>解答与修复</summary>
λ = 3.0 cm。入射与反射微波叠加成驻波，相邻波节距 λ/2。接收随方向改变，支持电场的横向偏振。声粒子沿传播方向运动，绕该方向旋转不能筛选不同横向振动。
</details>
</div>

<h2 id="retry">换图样、换表征</h2>

<div class="lesson-check" markdown="1">
<!-- task:wave-retry -->
Retry: a 1.20 m string displays three loops at 90 Hz. Find wavelength, wave speed and first harmonic frequency. At unchanged tension and length, mass per unit length is multiplied by four. Predict the new frequency for the same pattern. Two snapshots of a right-moving pulse are 0.030 s apart; a crest moves 0.12 m. Find its speed and explain why no particle need travel the 0.12 m with that crest.
<!-- /task:wave-retry -->
<details markdown="1"><summary>提示</summary>
三个波瓣就是三个半波长。先用比例再算数。
</details>
<details markdown="1"><summary>解答与修复</summary>
λ = 2L/3 = 0.80 m，v = 90(0.80) = 72 m/s，f₁ = 90/3 = 30 Hz。μ 四倍使 v 减半，同图样频率变 45 Hz。脉冲速率 0.12/0.030 = 4.0 m/s。波峰是移动的相位／扰动标记，介质粒子在局部振动。数瓣出错回 string-harmonics，粒子运动出错回 progressive-waves。
</details>
</div>


<h3 id="phase-sound-check">联系相位与声测量</h3>

<div class="lesson-check" markdown="1">
<!-- task:phase-sound-check -->
A travelling sinusoidal wave has wavelength 1.20 m. Points P and Q are 0.90 m apart along propagation. Find their phase difference in degrees and radians. A microphone then scans a stationary sound field and finds adjacent pressure-amplitude minima 0.17 m apart. Find sound wavelength and explain whether these pressure minima are particle-displacement nodes or antinodes. Retry with adjacent pressure minima 0.25 m apart and a wave-point separation λ/2.
<!-- /task:phase-sound-check -->
<details markdown="1"><summary>提示</summary>
用空间周期比例；麦克风测的是压强。
</details>
<details markdown="1"><summary>解答与修复</summary>
P、Q 相位差 270° = 3π/2 rad，模 360° 与 −90° 等价；交换有序相位差的先后则改变符号。相邻压强波节距 λ/2，因此声波 λ = 0.34 m；理想纵驻波中它们是位移波腹。重试 λ = 0.50 m，相位差 180° = π rad；不可把压强与位移波节画在同一位置。
</details>
</div>

<h2 id="sources-and-next">范围与下一步</h2>

OxfordAQA 9630 3.5.3–3.5.5. 题目自拟，数值／示意数据为构造，核查点不是官方评分标准。 [官方大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-international-as-and-a-level-physics-specification.pdf).

[上一课](/zh/alevel/as-physics/oscillations-and-resonance/) · [下一课](/zh/alevel/as-physics/interference-and-diffraction/) · [课程](/zh/alevel/as-physics/)

{% include exam_topic_practice.html %}
