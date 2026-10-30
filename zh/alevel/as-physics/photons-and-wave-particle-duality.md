---
title: "光子与波粒二象性"
layout: subjects
mathjax: true
grade: as
subject: as-physics
lang: zh-CN
translation_of: /alevel/as-physics/photons-and-wave-particle-duality/
permalink: /zh/alevel/as-physics/photons-and-wave-particle-duality/
toc_headings: h2, h3
study_page: true
reading_layout: true
---

光能展开、干涉，又以离散能量传给电子。根据问题选择证据；模型要有明确用途和边界。

<h2 id="before-you-start">开始前</h2>

先会[原子结构](/zh/alevel/as-physics/atoms-and-particles/)、[每库仑能量](/zh/alevel/as-physics/charge-current-and-potential/)、[动量](/zh/alevel/as-physics/momentum-and-impulse/)和[衍射](/zh/alevel/as-physics/interference-and-diffraction/)。本课解释能级／光谱、X 射线产生，处理光电数据并使用粒子—波证据。

<h2 id="photons-and-ev">能量以量子传递</h2>

电磁辐射中一个光子能量为：

$$E=hf=\frac{hc}{\lambda}.$$

本课 E = hc/λ 使用真空波长。h 是普朗克常量，单位 J s。电子伏是能量单位：大小为 e 的电荷经过 1 V 电势差获得 1 eV，因此 1 eV = 1.602 × 10⁻¹⁹ J。它不是电压或电荷；keV 是 10³ eV，MeV 是 10⁶ eV。

<h2 id="levels-and-spectra">原子允许的能量</h2>

激发使电子进入更高的允许束缚能级；电离使它离开原子。把电离极限定为零，束缚能级为负。向下跃迁发出 E_high − E_low 的光子；孤立原子单光子吸收需能量匹配能级差。碰撞电子也可激发原子，并保留多余动能。

热的低密度气体在允许光子能量处产生发射线。连续光源前较冷气体移除相应频率，形成暗吸收线。离散谱线支持量子化能量差，而非所有能量都允许。

荧光管中放电加速电子，碰撞激发气体原子（常用汞），退激发产生紫外光，紫外再激发荧光粉涂层并发可见光。存在损失，不能要求每个可见光子能量等于被吸收的紫外光子。

<div class="worked-example" markdown="1">
**完整示范——自拟题。**
<!-- task:levels-worked -->
An atom has levels −5.0, −3.0 and −1.0 eV relative to an ionisation limit of 0 eV. An electron drops from −1.0 to −3.0 eV. Find emitted photon energy and wavelength using h = 6.63 × 10⁻³⁴ J s, c = 3.00 × 10⁸ m/s and 1 eV = 1.602 × 10⁻¹⁹ J. What minimum energy ionises an atom initially at −3.0 eV?
<!-- /task:levels-worked -->

能级差 (−1.0) − (−3.0) = 2.0 eV = 3.204 × 10⁻¹⁹ J。λ = hc/E = 6.21 × 10⁻⁷ m = 621 nm。从 −3.0 eV 到 0 的电离需输入 3.0 eV，不是 −3.0 eV。
</div>

<div class="lesson-check" markdown="1">
<!-- task:levels-check -->
For the same three levels, list all distinct downward-transition photon energies and explain why counting transitions is not always the same as counting different wavelengths. Can a 1.5 eV photon excite an atom from −5.0 eV to either shown higher bound level in the isolated-atom single-photon model? Explain how absorption lines differ from emission lines.
<!-- /task:levels-check -->
<details markdown="1"><summary>提示</summary>
列出所有向下能级对，再把相等能量差归组。不能留下未列出的束缚能量。
</details>
<details markdown="1"><summary>解答与修复</summary>
三条向下跃迁能量为 2.0、2.0、4.0 eV，只有两种不同光子能量／波长。1.5 eV 不匹配从 −5.0 eV 出发的 2.0 或 4.0 eV 间隔，不能造成所述激发。发射在跃迁频率增加光，吸收从连续入射光移除匹配的光。
</details>
</div>

<h2 id="xray-tube">X 射线：减速与内层跃迁</h2>

真空 X 射线管包含加热释放电子的阴极、大加速电势差、金属阳极／靶。电子获得动能 eV。撞靶时大部分能量变热，须冷却。减速产生**连续** X 射线谱：不同相遇中放出不同比例动能。最大光子能量 eV，对应最短波长 hc/(eV)。

部分碰撞击出靶原子的内层电子，高能级电子填空位时产生由靶能级差决定的**特征谱线**。入射能量须足以造成空位，特征线不是整个连续谱的起因。提高加速电压提高最大光子能量；其他条件相同时，提高管电流主要增加电子／光子数。

X 射线可利用骨骼与软组织吸收差异成像，也用于 CT。其电离作用有风险，授权操作用屏蔽、限制光束和有理由的曝光。本课解释产生与证据，不提供操作射线管的流程。

<div class="lesson-check" markdown="1">
<!-- task:xray-check -->
An X-ray tube accelerates electrons through 40 kV before they strike a metal target. Find the largest possible energy of one emitted photon in keV and joules. Explain the continuous spectrum and characteristic lines separately. Explain why increasing tube current at unchanged voltage need not increase the maximum photon energy. Give one medical use and a relevant exposure control.
<!-- /task:xray-check -->
<details markdown="1"><summary>提示</summary>
每个电子最多带来 eV；单光子最大只能取得这份能量。
</details>
<details markdown="1"><summary>解答与修复</summary>
$E_{\max}$ = 40 keV = 6.408 × 10⁻¹⁵ J。不同减速过程形成连续谱，内层空位的跃迁形成靶特征线。电流改变每秒电子数；电压不变，每电子可用能量上限不变。医用例子是放射摄影或 CT；屏蔽、准直、合理且尽量小的曝光控制电离风险。
</details>
</div>

<h2 id="photoelectric-effect">强度不能补救的阈值</h2>

基本光电模型中，一个表面电子吸收一个光子。逸出功 φ 是逃逸所需最小能量，电子逃出前可能另有损失，因此最大动能：

$$E_{k,\max}=hf-\phi,\qquad f_0=\frac{\phi}{h},\qquad eV_s=E_{k,\max}.$$

$V_s$ 是恰能阻止最快电子的反向电势差大小。超过阈频后，增加频率提高最大动能；固定频率增大强度会增加光子数，通常增加光电流（收集条件可比），但不提高最大动能。低于阈频，在此普通单光子模型中照得更强或更久也不发射。即时发射和频率阈值挑战了简单连续供能的经典波解释。

$V_s$ 对 f 图斜率 h/e，横截距 f₀，负纵截距是 −φ/e。负截距是外推，不能解释成阈频以下实际测得“负最大动能”。

<div class="lesson-check" markdown="1">
<!-- task:photoelectric-check -->
A constructed photoelectric record gives:

| Frequency / 10¹⁴ Hz | Stopping potential / V |
| --- | --- |
| 5.0 | 0.17 |
| 6.0 | 0.58 |
| 7.0 | 0.99 |

Estimate h from a Vₛ-versus-f gradient using e = 1.602 × 10⁻¹⁹ C. Estimate threshold frequency and work function. Predict separately the effects of increased intensity at fixed frequency above threshold and increased frequency at fixed photon arrival rate. Why cannot more intense light below threshold eject electrons in this model?
<!-- /task:photoelectric-check -->
<details markdown="1"><summary>提示</summary>
频率用 Hz，保留斜率单位。把光子数量与每光子能量分开。
</details>
<details markdown="1"><summary>解答与修复</summary>
斜率 (0.99−0.17)/(2.0 × 10¹⁴) = 4.10 × 10⁻¹⁵ V s，h ≈ 6.57 × 10⁻³⁴ J s。直线 $V_s$ = (4.10 × 10⁻¹⁵)f − 1.88，因此 f₀ ≈ 4.59 × 10¹⁴ Hz，φ ≈ 1.88 eV = 3.01 × 10⁻¹⁹ J。这是舍入构造记录的估计。固定 f 增强强度，光子到达率和电流增加，$V_s$ 不变；固定光子到达率提高 f，$V_s$ 增大而电流不必增大。阈频以下每个光子不够逃逸，模型中不把多个光子能量拼给一个电子。
</details>
</div>

<h2 id="wave-particle-evidence">电子衍射与模型变化</h2>

德布罗意提出动量对应波长：

$$\lambda=\frac{h}{p}.$$

晶体对电子的衍射支持物质波行为，波模型能预测干涉结构；探测器仍记录一个个局部撞击，累积后构成图样。光子能量解释光电阈值，波传播解释干涉。单独的经典小球图像或纯连续经典供能图像都不能解释全部观察。模型随新证据发展，实验不是拍到电子沿字面正弦轨道走。

<div class="lesson-check" markdown="1">
<!-- task:duality-check -->
Electrons with momentum 2.0 × 10⁻²⁴ kg m/s form a diffraction pattern through a thin crystal. Calculate their de Broglie wavelength using h = 6.63 × 10⁻³⁴ J s. Predict the wavelength and the change of diffraction angles for the same crystal when momentum doubles. Explain what diffraction supports, and why it does not mean electrons have ceased to produce localised detector impacts.
<!-- /task:duality-check -->
<details markdown="1"><summary>提示</summary>
直接用动量，不需电子质量或加速电压公式。
</details>
<details markdown="1"><summary>解答与修复</summary>
λ = 6.63 × 10⁻³⁴/(2.0 × 10⁻²⁴) = 3.315 × 10⁻¹⁰ m ≈ 0.33 nm。p 两倍使 λ 减半。同一晶体的加强程差条件改在更小角度满足，衍射特征向直通束靠近。空间分布支持波动性，局部撞击仍是探测证据；两者不是互斥的探测结果。
</details>
</div>

<div class="lesson-check" markdown="1">
<!-- task:units-check -->
Convert 2.5 keV to joules, 0.20 kWh to joules, and 3.0 mm² to m². Explain where each prefix or power acts. Use 1 eV = 1.602 × 10⁻¹⁹ J.
<!-- /task:units-check -->
<details markdown="1"><summary>提示</summary>
面积要平方整个长度转换；千瓦时包含功率和时间。
</details>
<details markdown="1"><summary>解答与修复</summary>
2.5 keV = 4.005 × 10⁻¹⁶ J ≈ 4.0 × 10⁻¹⁶ J；0.20 kWh = 0.20(1000)(3600) = 7.2 × 10⁵ J；3.0 mm² = 3.0(10⁻³ m)² = 3.0 × 10⁻⁶ m²。k 作用在 eV 或 W，平方作用于完整毫米单位。
</details>
</div>

<h2 id="retry">换一份能量记录</h2>

<div class="lesson-check" markdown="1">
<!-- task:quantum-retry -->
Retry: a metal has work function 2.0 eV. Incident photons have energy 3.2 eV. Find maximum electron kinetic energy in eV and stopping potential. The photon energy is then reduced to 1.8 eV while intensity is doubled. Predict emission. An atom initially at −4.0 eV absorbs 2.5 eV and reaches an allowed level: give that level and its remaining ionisation energy. A separate absorption scan shows narrow lines separated by transparent frequency bands. Explain how this selective absorption supports quantised levels, and why one stipulated 2.5 eV transition alone would not establish forbidden intermediate energies.
<!-- /task:quantum-retry -->
<details markdown="1"><summary>提示</summary>
先扣逸出功；算出负最大动能时应判无发射。
</details>
<details markdown="1"><summary>解答与修复</summary>
$E_{k,\max}$ = 1.2 eV，$V_s$ = 1.2 V。1.8 eV < 2.0 eV，不发生单光子发射，强度两倍不改变结论。激发后能级 −1.5 eV，尚需 1.5 eV 电离。窄线选择性吸收而线间透射，支持特定允许能量差；仅指定一次跃迁也符合连续能量的算术，不能建立中间能量被禁止。波速关系本身不预测允许束缚能级。符号错误回 levels-and-spectra，强度／能量混淆回 photoelectric-effect。
</details>
</div>


<h3 id="tube-and-transition-check">解释荧光管并计算跃迁</h3>

<div class="lesson-check" markdown="1">
<!-- task:tube-and-transition-check -->
In English, explain a fluorescent tube from accelerated electrons through excitation/ionisation of gas to ultraviolet emission and visible emission from the coating. Distinguish excitation from ionisation. Separately a bound electron drops from −1.0 to −4.0 eV: calculate photon wavelength using h = 6.63 × 10⁻³⁴ J s, c = 3.00 × 10⁸ m/s and 1 eV = 1.602 × 10⁻¹⁹ J.
<!-- /task:tube-and-transition-check -->
<details markdown="1"><summary>提示</summary>
碰撞可以提升束缚电子，也可以移除它；涂层是第二个能量传递阶段。
</details>
<details markdown="1"><summary>解答与修复</summary>
英文示范：'Accelerated electrons collide with gas atoms. Excitation raises electrons to higher bound levels; ionisation removes electrons and supplies charged particles that help sustain the discharge. De-excitation emits ultraviolet photons. The phosphor absorbs ultraviolet energy and emits visible photons.' 新跃迁 E = 3.0 eV = 4.806 × 10⁻¹⁹ J，λ = hc/E = 4.14 × 10⁻⁷ m = 414 nm。
</details>
</div>
<h3 id="xray-duality-retry">重试 X 射线与衍射证据</h3>

<div class="lesson-check" markdown="1">
<!-- task:xray-duality-retry -->
Retry: the same target is used in an X-ray tube at 25 kV and 50 kV. Compare maximum photon energies, the cause of the continuum and the possible characteristic-line positions. In a separate fixed-crystal electron experiment the momentum halves: predict de Broglie wavelength and diffraction angles. Explain why increasing electron arrival rate at fixed momentum changes event number rather than this wavelength.
<!-- /task:xray-duality-retry -->
<details markdown="1"><summary>提示</summary>
区分每电子能量、靶能级与粒子动量。
</details>
<details markdown="1"><summary>解答与修复</summary>
X 射线最大能量为 25、50 keV；减速释放不同份额电子能量，形成连续谱。可激发的特征线保留靶能级差，高电压也可能激发额外线。电子动量减半使德布罗意波长两倍，对应衍射特征通常移向更大角，部分级次可变得不允许。同动量增加电子数只增事件数，不改 h/p。
</details>
</div>

<h2 id="sources-and-next">范围与下一步</h2>

OxfordAQA 9630 3.5.9–3.5.11. 题目自拟，数值／示意数据为构造，核查点不是官方评分标准。 [官方大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-international-as-and-a-level-physics-specification.pdf).

[上一课](/zh/alevel/as-physics/refraction-and-optical-fibres/) · [下一课](/zh/alevel/as-physics/unit-2-review/) · [课程](/zh/alevel/as-physics/)

{% include exam_topic_practice.html %}
