---
title: "干涉与衍射"
layout: subjects
mathjax: true
grade: as
subject: as-physics
lang: zh-CN
translation_of: /alevel/as-physics/interference-and-diffraction/
permalink: /zh/alevel/as-physics/interference-and-diffraction/
toc_headings: h2, h3
study_page: true
reading_layout: true
---

窄缝能让光展开，两缝又产生明暗相间区域。两者都涉及叠加，但可测间距属于不同模型。

<h2 id="before-you-start">开始前</h2>

先会[相位和叠加](/zh/alevel/as-physics/progressive-and-stationary-waves/)、正弦与正切。本课选图样模型、推导光栅条件，并设计 RP5 两种测波长方法。

<h2 id="coherence">从程差到加强</h2>

相干源有相同频率及恒定相位差。初始同相时，程差 nλ 加强；振幅相等时，(n + ½)λ 相消。两个独立灯的相对相位通常变化很快，无法形成稳定条纹；分割同一光源可得到相干性。

光、微波、声都能干涉。声实验用相干扬声器和沿测量路径移动的麦克风，固定频率并考虑房间反射。某处声音小，仍需检查程差模型才能判断波节。

<h2 id="double-slit">双缝：量多个间隔</h2>

窄而接近的双缝中心距 a，屏距 D 足够远时，向 θ 方向传播的程差近似 a sin θ。亮纹满足 a sin θ = nλ。小角度要用**弧度**，sin θ ≈ tan θ ≈ θ，屏上位移 y ≈ Dθ，因此：

$$w=\frac{\lambda D}{a}.$$

w 是相邻亮纹距。需 D 远大于 a、角度小，且单缝衍射足够让光束重叠。a 较大时，单位屏距的相位变化更快，条纹更密。

<div class="worked-example" markdown="1">
**完整示范——自拟题。**
<!-- task:fringe-worked -->
Monochromatic light of wavelength 600 nm passes through two narrow slits separated by 0.30 mm. A screen is 2.0 m away. Find adjacent bright-fringe spacing and state the approximation. Explain why doubling the slit separation changes the spacing.
<!-- /task:fringe-worked -->

w = (600 × 10⁻⁹)(2.0)/(0.30 × 10⁻³) = 0.0040 m = 4.0 mm。w/D = 0.0020，符合小角度。λ、D 不变，a 两倍使 w 减半。这里是缝中心距，不是每条缝的宽。
</div>

白光的中央零程差亮纹为白色；邻近各色因波长不同而分开，紫色靠中心、红色更远，外侧图样逐渐重叠而模糊。

<div class="lesson-check" markdown="1">
<!-- task:fringe-check -->
In a constructed double-slit record, the distance from bright fringe −5 to bright fringe +5 is 32.0 ± 0.5 mm; screen distance D = 1.50 ± 0.01 m; slit separation a = 0.250 ± 0.005 mm. Estimate wavelength and a simple upper fractional uncertainty. A student divides 32.0 mm by 11 because 11 bright fringes were counted. Diagnose the error. Choose a measurement that reduces the fractional position uncertainty.
<!-- /task:fringe-check -->
<details markdown="1"><summary>提示</summary>
数端点间隔，不是亮纹个数。乘除量把相对不确定度估计相加。
</details>
<details markdown="1"><summary>解答与修复</summary>
只有 10 个间隔，w = 3.20 mm；λ = wa/D = 5.33 × 10⁻⁷ m = 533 nm。相对界限 ≈ 0.5/32.0 + 0.005/0.250 + 0.01/1.50 = 0.0423，约 4.2%，对应 23 nm。这是按给定独立测量估计形成的简单界限，不是统计置信区间。11 条纹围出 10 个空隙。扩大可辨认条纹的测量跨度、重复端点读数可减小位置相对不确定度，不能消除缝距校准偏差。
</details>
</div>

<h2 id="single-slit">单缝：孔径控制展开</h2>

衍射是波通过孔或边缘时展开，孔径与波长接近时明显。单色单缝图样有宽而亮的中央极大，两侧极大较窄、较暗。缝越窄图样越宽。白光中央白色，旁侧呈色，红光展开更远。本课定性预测图样，不要求强度—角度公式。

不能把单缝宽度代入双缝中心距公式。真实双缝的细干涉条纹也位于衍射包络之内。

<h2 id="grating">推导光栅条件</h2>

光栅有很多等间距平行缝。正入射时，从相邻缝沿同一远场方向 θ 出射的光，额外程差为 **d sin θ**：由缝距 d 与出射光线的垂线构成直角三角形。相邻光线全部加强需此差等于 nλ：

$$d\sin\theta=n\lambda.$$

![正入射光栅：相邻缝距 d，平行出射光与法线成 theta；d 沿传播方向的投影给出程差 d sin theta。](/assets/images/physics-as-grating.svg){: width="740" height="350" }

θ 从直通法线方向量，不是从光栅表面量。若每米 N 条，d = 1/N。零级 θ = 0，对齐时 ±n 级对称。sin θ ≤ 1，所以 nλ ≤ d；θ = 90° 是掠射极限，通常不能在屏上观察。多缝产生尖锐主极大，可用于测波长和分析光谱。

<div class="lesson-check" markdown="1">
<!-- task:grating-check -->
A grating has 600 lines per mm. Normally incident monochromatic light gives a first-order maximum at 22.0°. Find wavelength, predict the second-order angle, and find the largest possible order. Explain what changes if wavelength increases at the same grating.
<!-- /task:grating-check -->
<details markdown="1"><summary>提示</summary>
先把每毫米线数改成每米，再检查 sin θ ≤ 1。
</details>
<details markdown="1"><summary>解答与修复</summary>
d = 1/(600 × 10³) = 1.667 × 10⁻⁶ m；λ = d sin 22.0° = 6.24 × 10⁻⁷ m = 624 nm。二级 sin θ₂ = 2 sin 22° = 0.7492，θ₂ = 48.5°。d/λ = 2.669，最大级次 2。波长增加使仍存在的各级角度增加，并可能减少允许级数，不改变 d。
</details>
</div>

<h3 id="derive-grating-check">独立重建光栅推导</h3>

<div class="lesson-check" markdown="1">
<!-- task:derive-grating -->
Close the displayed equation and recreate the normal-incidence grating construction. Let A and B be adjacent slits a distance d apart and draw a perpendicular from B to the ray from A at C. Show which triangle angle equals θ, obtain AC, and derive the bright-order condition. State why normal incidence and the order n matter.
<!-- /task:derive-grating -->
<details markdown="1"><summary>提示</summary>
AB = d，BC 垂直 AC。将缝距投影到传播方向。
</details>
<details markdown="1"><summary>解答与修复</summary>
AB 沿光栅面，出射线与法线夹 θ，因此三角形 ABC 在 B 处角为 θ。AC 是该角对边，AC = d sin θ。正入射时入射侧无额外程差，出射相邻缝加强需 AC = nλ，故 d sin θ = nλ。n 是整数程差级次；斜入射时还要考虑入射路径差。
</details>
</div>
<h3 id="pattern-check">从程差与孔径预测</h3>

<div class="lesson-check" markdown="1">
<!-- task:coherence-pattern -->
Two loudspeakers are driven in phase at the same fixed frequency. Sound wavelength is 0.68 m. At P their path difference is 0.34 m; at Q it is 0.68 m. Predict reinforcement/cancellation, assuming equal amplitudes and negligible other reflections. Explain why two independent unsynchronised sound sources may not preserve these locations. Separately, predict how a monochromatic single-slit central maximum changes if slit width halves, then if red light replaces blue light. Describe the central region with white light.
<!-- /task:coherence-pattern -->
<details markdown="1"><summary>提示</summary>
以 λ 的分数表示程差，单缝宽不是双缝距。
</details>
<details markdown="1"><summary>解答与修复</summary>
P 程差 λ/2，相消；Q 程差 λ，加强。独立未同步源的相位差变化，固定位置不再保持同一干涉状态。单缝宽减半使中央极大更宽，红光波长较长也更宽。白光中央白色，旁侧有色且红色展开较远。
</details>
</div>

<div class="lesson-check" markdown="1">
<!-- task:retry-pattern-geometry -->
Retry: with the same coherent speakers a new point has path difference 0.51 m. Is it an exact constructive or destructive location? Explain. A single slit is widened at unchanged wavelength: predict central-maximum width. For a normal-incidence grating, a student writes d cos θ = nλ while θ is measured from the normal; redraw the projection and diagnose the error.
<!-- /task:retry-pattern-geometry -->
<details markdown="1"><summary>提示</summary>
0.51/0.68 = 0.75，既非整数亦非半整数。
</details>
<details markdown="1"><summary>解答与修复</summary>
0.75λ 不对应精确加强或相消。单缝变宽，中央极大变窄。θ 从法线量时投影为 d sin θ；d cos θ 只可能用于互余角的另一种定义，不能不换角名直接套用。重新画垂线核验。
</details>
</div>

<h2 id="practical-check">RP5：两种方法、不同测量</h2>

双缝：对齐学校批准的低功率单色源、双缝和垂直中央光线的屏。D 从缝面量到屏，a 用校准缝信息；一次量多个条纹间距。画 w 对 D 图，斜率 λ/a，每个设置都检查小角度。

光栅：保持正入射，从直通方向量各级 θ，可用合适角度尺或屏上几何 θ = arctan(y/D)。大角度用精确正弦，不能把角度的“度数”当 θ。画 sin θ 对 n，斜率 λ/d。两侧重复；条件允许时用相应 ±n 级夹角的一半，并另查对齐。

光束低于眼睛，固定元件、设置光束终止挡板，避免直射或镜面反射入眼。不要透过光栅看激光源。遵守现场批准的激光流程；模拟图样和数据不代表实际操作完成。

<div class="lesson-check" markdown="1">
<!-- task:practical-task -->
Design both RP5 wavelength methods: double slit and diffraction grating. Specify apparatus, distance/angle definitions, alignment, repeated readings, a graph or comparison, and laser controls. For a grating, explain why observing angles on both sides helps diagnose a zero/alignment error. A student calls diffraction by a single slit proof of two-slit interference. Explain the missing distinction.
<!-- /task:practical-task -->
<details markdown="1"><summary>提示</summary>
每个方法先写量什么，再选方程。
</details>
<details markdown="1"><summary>解答与修复</summary>
可行方案需包含上述距离／角度、控制、重复端点或角度读数及不确定度。对称级角度绝对值应相等，共同角度零偏会使两侧读数不等，半夹角可去掉这个零偏，但不能修复所有入射与对齐问题。单孔径图样源于孔径内的叠加；没有双缝却称为双源条纹，会误认装置与间距模型。
</details>
</div>

<h2 id="retry">换方法，保留物理意义</h2>

<div class="lesson-check" markdown="1">
<!-- task:interference-retry -->
Retry: a grating has spacing 2.0 μm. Its second-order maximum is at 30°. Find wavelength and the highest allowed order; identify the limiting geometry if sin θ = 1. Separately, two slits give 3.0 mm fringe spacing at D = 1.2 m. D is increased to 1.8 m without changing source or slits. Predict the new spacing and say why broadening a single slit would not be analysed by this double-slit formula.
<!-- /task:interference-retry -->
<details markdown="1"><summary>提示</summary>
光栅式保留级次 n，固定双缝时 w 正比于 D。
</details>
<details markdown="1"><summary>解答与修复</summary>
λ = d sin 30°/2 = 0.50 μm = 500 nm。n ≤ d/λ = 4；四级是 θ = 90° 的数学掠射极限，可在有限角观察的最高级为 3。双缝间距变 4.5 mm。单缝宽控制衍射包络，不是双源间距。级次错误回 grating，模型混淆回 single-slit。
</details>
</div>


<h2 id="sources-and-next">范围与下一步</h2>

OxfordAQA 9630 3.5.6–3.5.7 / RP5. 题目自拟，数值／示意数据为构造，核查点不是官方评分标准。 [官方大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-international-as-and-a-level-physics-specification.pdf).

[上一课](/zh/alevel/as-physics/progressive-and-stationary-waves/) · [下一课](/zh/alevel/as-physics/refraction-and-optical-fibres/) · [课程](/zh/alevel/as-physics/)

{% include exam_topic_practice.html %}
