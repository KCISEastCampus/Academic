---
title: "原子、原子核与反粒子"
layout: subjects
mathjax: true
grade: as
subject: as-physics
lang: zh-CN
translation_of: /alevel/as-physics/atoms-and-particles/
permalink: /zh/alevel/as-physics/atoms-and-particles/
toc_headings: h2, h3
study_page: true
reading_layout: true
---

<h2 id="start-here">少数偏转，怎样改变模型？</h2>

模型须同时解释常见与罕见观察。卢瑟福式薄箔散射中，多数 α 粒子近乎直行，表明大部分原子体积没有显著阻碍；罕见大角度偏转支持一个微小、质量集中、带正电的原子核，产生强烈局部排斥。弥散正电荷不容易产生同样效果。这是散射模型支持的推断，不是电子轨道的照片。

<h2 id="nucleus">原子核不等于正离子</h2>

$\,{}_Z^AX$ 中，质子数 $Z$，核子数 $A$，中子数 $A-Z$。中性原子有 $Z$ 个电子；正离子失去电子。质子电荷 $+e$，中子零，电子 $-e$。近似质量 $m_p\approx m_n=1.67\times10^{-27}$ kg，$m_e=9.11\times10^{-31}$ kg；相对质量约 1、1、1/1836，相对电荷分别 +1、0、−1。比荷（specific charge）是有符号电荷除以质量，单位 C/kg。先修是比例与这些定义；[光子课](/zh/alevel/as-physics/photons-and-wave-particle-duality/)会进一步说明 eV。

<div class="worked-example" markdown="1">
**完整示范——自拟题。**
<!-- task:atom-worked -->
A helium-4 nucleus contains two protons and two neutrons. Use nucleon mass 1.67 × 10⁻²⁷ kg and elementary charge 1.60 × 10⁻¹⁹ C. Find its specific charge, and compare it with a singly ionised helium-4 atom, neglecting electron mass.
<!-- /task:atom-worked -->

核电荷 $2e=3.20\times10^{-19}$ C，质量 $6.68\times10^{-27}$ kg，比荷为 $4.79\times10^7\,\mathrm{C\,kg^{-1}}$。一价正离子有一个电子，电荷 +e，质量近似相同，比荷为原子核的一半。不能用离子电荷替换质子数。
</div>

<h2 id="atom-check">使用核模型</h2>

<div class="lesson-check" markdown="1">
<!-- task:atom-check -->
An ion has nuclide notation ²⁷₁₃Al and charge +3e. Give proton, neutron and electron numbers and estimate specific charge. Use nucleon mass 1.67 × 10⁻²⁷ kg and elementary charge 1.60 × 10⁻¹⁹ C. Most alpha particles cross thin foil with little deflection, but very few turn back: explain what each observation supports and why neither reveals fixed electron orbits.
<!-- /task:atom-check -->
<details markdown="1"><summary>提示</summary>
先数核子，再数电子；分开观察与推断。
</details>
<details markdown="1"><summary>解答与修复</summary>
13 个质子、14 个中子、10 个电子，比荷 $3(1.60\times10^{-19})/[27(1.67\times10^{-27})]=1.06\times10^7\,\mathrm{C\,kg^{-1}}$。多数直行支持大部分体积为空，罕见反向散射支持集中的正电荷与质量；二者都不确定电子轨迹。若把离子当成原子核，先重建电子数，再做重试。
</details>
</div>

<h2 id="antiparticles">静能相等，身份仍不同</h2>

AS 比较包括电子／正电子、质子／反质子、中子／反中子、中微子／反中微子。对应粒子有相同质量和静能，带电时电荷相反。中性反粒子仍可由其他粒子性质区分，电荷不能单独识别它们。本范围不额外要求夸克分类或原子质量单位计算。

湮灭（annihilation）把静能及初始动能转移给其他粒子。静止电子与正电子可产生两个等能、反向的光子，同时守恒能量与动量；单个光子不能携带零总动量。成对产生至少需要两个静能之和，附近原子核承担反冲动量，即使反冲能量可忽略。本课直接用题给 MeV 静能，AS 不要求 $E=mc^2$ 计算。

<h2 id="energy-check">检验阈值与收支</h2>

<div class="lesson-check" markdown="1">
<!-- task:particle-energy -->
An electron and positron annihilate at rest. Each has rest energy 0.511 MeV. Find the total photon energy and each photon energy for a two-photon outcome. A separate 1.50 MeV photon creates an electron–positron pair near a nucleus. Find the maximum kinetic energy available to the pair if recoil energy is negligible, and explain the role of the nucleus.
<!-- /task:particle-energy -->
<details markdown="1"><summary>提示</summary>
先加两个静能，再给剩余能量分配动能。
</details>
<details markdown="1"><summary>解答与修复</summary>
光子总能量 1.022 MeV，各光子 0.511 MeV，动量相反。电子对动能至多 $1.50-1.022=0.478$ MeV。核反冲允许动量守恒，不是提供缺少的静能。若只数一个静能，用下方新的阈值情境重试。
</details>
</div>

<h2 id="retry">把电荷、身份与能量分开</h2>

<div class="lesson-check" markdown="1">
<!-- task:particle-retry -->
Compare a lithium-7 nucleus (Z = 3) with a lithium-7 ion of charge +2e. Give all proton, neutron and electron numbers and the specific-charge ratio, neglecting electron mass. Assess these claims: an antineutron is identical to a neutron because both are neutral; a 0.90 MeV photon can create an electron–positron pair whose members each have rest energy 0.511 MeV.
<!-- /task:particle-retry -->
<details markdown="1"><summary>提示</summary>
原子核没有电子；成对产生需要两个静能。
</details>
<details markdown="1"><summary>解答与修复</summary>
二者都为 3 个质子、4 个中子。原子核无电子、电荷 +3e；离子有 1 个电子、电荷 +2e，比荷之比 3:2。中性反粒子不必等同于对应粒子，电荷不是唯一性质。0.90 MeV 小于 1.022 MeV 阈值。以后关闭答案进入 [Unit 1 综合](/zh/alevel/as-physics/unit-1-review/)。
</details>
</div>


<h3 id="specific-particles-check">比较粒子比荷</h3>

<div class="lesson-check" markdown="1">
<!-- task:specific-particles-check -->
Use proton mass 1.67 × 10⁻²⁷ kg, electron mass 9.11 × 10⁻³¹ kg and e = 1.60 × 10⁻¹⁹ C. Calculate the signed specific charges of a proton and an electron and their magnitude ratio. Explain why an electron's negative sign and its much larger magnitude have different causes.
<!-- /task:specific-particles-check -->
<details markdown="1"><summary>提示</summary>
比荷 q/m 要保留电荷符号。
</details>
<details markdown="1"><summary>解答与修复</summary>
质子 +9.58 × 10⁷ C/kg，电子 −1.76 × 10¹¹ C/kg；电子绝对值约为质子 1833 倍。符号来自相反电荷，绝对值更大来自质量小。关掉本解答，完成下方独立比荷重试。
</details>
</div>

<h3 id="specific-charge-retry">换条件重试</h3>

<div class="lesson-check" markdown="1">
<!-- task:specific-charge-retry -->
Retry with help closed: a positron has mass 9.11 × 10⁻³¹ kg and charge +1.60 × 10⁻¹⁹ C. Find its signed specific charge. A helium-4 ion (Z = 2) has charge −e; neglect electron mass and use nucleon mass 1.67 × 10⁻²⁷ kg. Give its electron count and signed specific charge. Explain why changing sign does not by itself change mass.
<!-- /task:specific-charge-retry -->
<details markdown="1"><summary>提示</summary>
保留电荷符号，用 Z 与净电荷数电子。
</details>
<details markdown="1"><summary>解答与修复</summary>
正电子比荷 +1.76 × 10¹¹ C/kg；氦负离子有 3 个电子，比荷 −1.60 × 10⁻¹⁹/[4(1.67 × 10⁻²⁷)] = −2.40 × 10⁷ C/kg。电荷符号与质量是不同性质，反粒子与对应粒子质量相同。
</details>
</div>

<h2 id="sources-and-next">范围与下一步</h2>

OxfordAQA 9630 §3.3.1–3.3.2. 题目自拟，数值／示意数据为构造，核查点不是官方评分标准。 [官方大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-international-as-and-a-level-physics-specification.pdf).

[上一课](/zh/alevel/as-physics/materials-and-young-modulus/) · [下一课](/zh/alevel/as-physics/radiation-and-safety/) · [课程](/zh/alevel/as-physics/)

{% include exam_topic_practice.html %}
