---
title: "折射与光纤"
layout: subjects
mathjax: true
grade: as
subject: as-physics
lang: zh-CN
translation_of: /alevel/as-physics/refraction-and-optical-fibres/
permalink: /zh/alevel/as-physics/refraction-and-optical-fibres/
toc_headings: h2, h3
study_page: true
reading_layout: true
---

光线跨边界能改变方向；数字光脉冲即使仍被导引，也可能展宽。先追一条光线，再追一个脉冲。

<h2 id="before-you-start">开始前</h2>

先会正弦、反正弦、[波速与频率](/zh/alevel/as-physics/progressive-and-stationary-waves/)和[脉冲计时](/zh/alevel/as-physics/progressive-and-stationary-waves/#ultrasound)。本课画边界光线、检验全反射条件，并区分三种光纤限制。

<h2 id="refraction">角度从法线量</h2>

折射率 n = c/v，比较真空光速 c 与材料内相速 v。光跨边界满足：

$$n_1\sin\theta_1=n_2\sin\theta_2.$$

n 越大速率越小。斜入射进入更大 n 的材料，光线向法线偏折。频率由光源和边界连续性保持，波长则因 v = fλ 而改变。垂直入射时方向不变，速率和波长仍可变。

<div class="worked-example" markdown="1">
**完整示范——自拟题。**
<!-- task:refraction-worked -->
Light travels from air (n = 1.00) into glass (n = 1.50) at 40.0° to the normal. Find the refracted angle and speed in the glass using c = 3.00 × 10⁸ m/s. State which of frequency and wavelength changes.
<!-- /task:refraction-worked -->

sin θ₂ = sin 40.0°/1.50 = 0.4285，θ₂ = 25.4°；v = c/n = 2.00 × 10⁸ m/s。频率不变，波长近似变为空气中的 1/1.50。若从表面量角，必须先取余角，不能在同一法线角设定中直接代入 50°。
</div>

<h2 id="total-internal-reflection">全反射要同时满足两个条件</h2>

光须**从较高折射率进入较低折射率**，且入射角超过临界角 C。临界状态折射光沿界面，θ₂ = 90°：

$$\sin C=\frac{n_{\rm lower}}{n_{\rm higher}}.$$

低于 C 有透射，通常也有反射；高于 C 的理想界面无传播的透射光，反射角等于入射角。恰好 C 是掠射极限，不能只说“角度大”就全反射。

<div class="lesson-check" markdown="1">
<!-- task:ray-check -->
A ray inside water (n = 1.33) meets a water–air boundary at 50.0° to the normal. Determine whether it is totally internally reflected. Sketch the incident and resulting ray, marking the normal. A second ray in air meets water at 80°. Can it undergo total internal reflection at this entry boundary? Explain.
<!-- /task:ray-check -->
<details markdown="1"><summary>提示</summary>
先比较折射率次序及临界角，再决定是否能求折射角。
</details>
<details markdown="1"><summary>解答与修复</summary>
C = arcsin(1.00/1.33) = 48.8°。水内 50.0° 超过 C，故反射角为 50.0°，空气侧不画传播的折射光。空气到水为低 n 到高 n，即使 80° 也不能全反射；折射线向法线偏。
</details>
</div>

<h2 id="fibre-model">阶跃型光纤</h2>

阶跃型光纤有均匀高折射率纤芯，外包低折射率包层，两者边界折射率突然改变。适当光线反复全反射。入射角从每个边界的**法线**量，不是从光纤轴量。包层提供可控制的低 n 边界，隔离邻近纤芯，并使导光区域不直接受表面污染或接触影响；并非所有入射光都能被导引。

![阶跃光纤示意：高折射率纤芯夹在低折射率包层之间，光线在边界反射，入射角从法线量。](/assets/images/physics-as-fibre.svg){: width="760" height="320" }

<h2 id="dispersion-and-absorption">脉冲包含多条路径与波长</h2>

- **吸收 absorption**：光能转为材料内能，接收强度下降。选择低吸收波段和材料；中继或放大可补强度，但不能复原全部失真。
- **模间色散 modal dispersion**：不同允许路径／模式的传播时间不同，短脉冲展宽，邻近比特可能重叠。足够窄、支持单模的纤芯可减弱此机制。
- **材料色散 material dispersion**：折射率随波长变化，光源若有一定波长范围，就有不同传播时间。更窄光谱以及适当波段／材料可减弱展宽。

前者减少能量，后两者分散到达时间。信号很亮，也可能无法分开脉冲；不能把三个名称都解释成同一种衰减。

<div class="lesson-check" markdown="1">
<!-- task:fibre-check -->
A step-index fibre has core index 1.48 and cladding index 1.46. Calculate the core–cladding critical angle. Explain what happens to a ray incident inside the core at 85.0° to the boundary normal. Distinguish absorption, modal dispersion and material dispersion, then suggest a suitable change to reduce each source of signal loss or pulse broadening.
<!-- /task:fibre-check -->
<details markdown="1"><summary>提示</summary>
折射率比必须按物理可行次序。脉冲宽度和能量分开看。
</details>
<details markdown="1"><summary>解答与修复</summary>
C = arcsin(1.46/1.48) ≈ 80.6°。85.0° 超过 C，且从高 n 到低 n，因此理想光线全反射。吸收减少能量，可选低损耗波段／材料；模间色散分散路径时间，可用窄芯单模；材料色散分散不同波长时间，可缩窄光谱、选波段。包层保证导引，但不自动解决所有色散。
</details>
</div>

<h2 id="retry">重新检验条件</h2>

<div class="lesson-check" markdown="1">
<!-- task:fibre-retry -->
Retry: a ray travels from glass n = 1.60 to a liquid n = 1.40 at 60.0° to the normal. Predict the result and, if transmitted, calculate its angle. Two narrow light pulses in a fibre overlap after a long distance although received total energy remains almost unchanged. Explain why this observation suggests dispersion rather than absorption; why would making the source dimmer not directly fix the overlap?
<!-- /task:fibre-retry -->
<details markdown="1"><summary>提示</summary>
用数值检验临界角，再判断全反射。注意接收能量这个证据。
</details>
<details markdown="1"><summary>解答与修复</summary>
C = arcsin(1.40/1.60) = 61.0°。60.0° 小于 C，故有透射；sin θ₂ = (1.60/1.40)sin 60° = 0.98974，θ₂ ≈ 81.8°，还可能有部分反射。能量近似保留而脉冲重叠，符合到达时间分散，不像以吸收为主。调暗只缩小能量，不消除路径或波长的传播时间差。折射条件错误回 total-internal-reflection，脉冲错误回 dispersion-and-absorption。
</details>
</div>


<h2 id="sources-and-next">范围与下一步</h2>

OxfordAQA 9630 3.5.8. 题目自拟，数值／示意数据为构造，核查点不是官方评分标准。 [官方大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-international-as-and-a-level-physics-specification.pdf).

[上一课](/zh/alevel/as-physics/interference-and-diffraction/) · [下一课](/zh/alevel/as-physics/photons-and-wave-particle-duality/) · [课程](/zh/alevel/as-physics/)

{% include exam_topic_practice.html %}
