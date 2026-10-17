---
title: "光合作用：光、电子与碳"
layout: subjects
mathjax: true
grade: a2
subject: a2-biology
study_page: true
toc_headings: h2
lang: zh-CN
permalink: /zh/alevel/a2-biology/photosynthesis/
translation_of: /alevel/a2-biology/photosynthesis/
---

[BL03 学习目录](/zh/alevel/a2-biology/paper-3/) · OxfordAQA 9610 · 3.3.2 · RP7 · RP3 bridge

请先作答再展开提示或解答。

## 植物增长时，什么进入了它？ {#start}

植物干物质中的碳需要碳原子来源；光提供能量，并不提供这些原子。光合作用把能量转移与利用 CO₂ 合成有机物连接起来。学完后，你应能分别追踪碳、电子和质子，解释限制因素，并读懂测到的净速率。叶绿体、酶、ATP 和扩散可到[先修页](/zh/alevel/a2-biology/prerequisites/)回补。

<!-- task:P0 -->
**Self-written / 自拟题 — P0**

A seedling gains dry mass while growing in light. Identify the main external source of carbon in its new organic compounds. Explain why light cannot be that carbon source.
<!-- /task:P0 -->

<details markdown="1">
<summary>提示 P0</summary>

寻找含碳物质，而不是能量来源。

</details>

<details markdown="1">
<summary>核对 P0</summary>

CO₂ 提供被固定进入有机分子的碳原子。光提供能量，能量不是含碳物质。

</details>

## 光反应：膜两侧不能混为一谈 {#light-reactions}

叶绿素与辅助色素吸收特定波长的光，并把能量传递至反应中心。反应中心叶绿素的电子被激发到较高能级，随后转移给电子受体。非循环途径中，光系统 II 失去的电子由**水的光解（photolysis）**补充；释放的氧来自水，不是来自 CO₂ 的裂解。

$$2\mathrm{H_2O}\longrightarrow4\mathrm{H^+}+4e^-+\mathrm{O_2}.$$

电子沿类囊体膜上的载体传递，释放的能量驱动质子**从基质（stroma）进入类囊体腔（lumen）**；光解也把质子释放到腔内。膜限制质子自由通过，因而形成梯度。质子再**经 ATP synthase 从腔内返回基质**，驱动 ADP 磷酸化，这就是光合磷酸化。

在光系统 I，光再次激发电子；电子最终在基质一侧与氢一起使 NADP 还原为 **reduced NADP**。ATP 传递能量，reduced NADP 为固碳提供还原力，两者都不是碳来源。循环电子流可补充 ATP，而不净生成 reduced NADP 或氧；本页核心模型追踪的是从水到 NADP 的非循环传递。

![Teaching schematic of a thylakoid membrane: light and water supply electron transfer; protons enter the lumen and return through ATP synthase to the stroma. ATP and reduced NADP support the Calvin cycle. Not to scale.](/assets/images/a2-biology/bl03-photosynthesis.svg)

## Calvin cycle：既要固定碳，也要再生受体 {#calvin}

在叶绿体基质中，**rubisco** 催化 CO₂ 与五碳核酮糖二磷酸（RuBP）反应。不稳定的六碳产物形成两个三碳甘油酸-3-磷酸（GP）。光反应产生的 ATP 和 reduced NADP 支持 GP 还原为磷酸丙糖（TP）；NADP、ADP 和磷酸则可返回光反应使用。

大部分 TP 在消耗 ATP 的过程中再生 RuBP，使下一轮还能接受 CO₂；部分 TP 离开循环，形成糖类及其他有机物。合成氨基酸还需要氮来源，固定碳本身不能提供氮。

**碳收支示范 — Self-written / 自拟题：**三个 CO₂ 共含三个碳，三个 RuBP 共含十五个碳，生成的六个 GP 继而成为六个 TP，共十八个碳。其中一个 TP（三碳）作为净产物离开，另外五个 TP（十五碳）再生三个 RuBP。两个净 TP 可提供一个己糖的碳骨架；这不表示植物通过一个单独反应直接生成葡萄糖。

<!-- task:P1 -->
**Self-written / 自拟题 — P1**

Complete the carbon account for six CO₂ entering the Calvin cycle: ___ RuBP react; ___ GP form; ___ TP are a net output; the remaining ___ TP regenerate RuBP. Explain why regeneration is essential.
<!-- /task:P1 -->

<details markdown="1">
<summary>提示 P1</summary>

每个 RuBP 有五个碳，每个 GP 或 TP 有三个碳。先用三分子 CO₂ 的示范，再核对那份较小收支的十八个输入碳。

</details>

<details markdown="1">
<summary>解答 P1</summary>

6 个 RuBP；12 个 GP；2 个 TP 为净产物；其余 10 个 TP 再生 RuBP。若不再生，受体会耗尽，即使仍有 CO₂，固碳也不能继续。

</details>

“Light-independent”是说 Calvin 反应本身不直接吸收光，并不表示它与光反应无关。它仍依赖光反应产物及酶调节。刚进入黑暗时，现有 ATP 和 reduced NADP 可能支持短暂活动，却不能让这条途径无限运行。若初期 GP 还原比固碳下降更快，GP 可积累；随后 RuBP 耗竭，固碳也会下降。解释变化时必须说明时间尺度。

## 限制因素：用干预检验解释 {#limiting-factors}

限制因素限制的是**当前条件下**的速率。增加该因素只能使速率上升至另一个过程成为限制。弱光可限制 ATP／reduced NADP 的供应；低 CO₂ 可限制固碳；温度会影响酶控制的反应。过高温度可破坏酶和膜，缺水导致的气孔关闭还可减少 CO₂ 进入。看到平台本身，不能确定到底是哪一个因素在限制。

**比较示范 — Self-written / 自拟题；构造数据：**恒温下，光照从 100 增至 200 任意单位，净产氧从 2 增至 4 单位；光照再增至 400 时，产氧仍为 4。此时增加 CO₂，产氧升到 7。这次干预支持原平台处受到 CO₂ 限制；仅凭光照平台还不能作此判断，也不能说所有光强下都由 CO₂ 限制。

## RP7：测得的产氧通常是净交换 {#rp7}

受光植物同时进行光合与呼吸。净产氧等于光合产氧减去呼吸耗氧。在补偿点，两速率相等；净交换为零不表示两个过程都停止。若用黑暗呼吸速率加上受光净速率来估计总光合，就要说明假设：光下呼吸与测得的暗呼吸速率相同。

$$P_{\mathrm{net}}=P_{\mathrm{gross}}-R,\qquad P_{\mathrm{gross}}=P_{\mathrm{net}}+R.$$

可行时直接测光强。适当几何条件下，小光源的光强可近似随距离平方的倒数改变，但环境光与反射会破坏这个近似。在固定时间内收集气体体积，或使用校准的氧传感器；数气泡假定气泡大小相近，并会漏掉溶解的氧。用水浴控制温度，同时控制 CO₂ 供应、物种、组织量、光谱和适应时间。各水平使用独立植物样本和重复；随机处理次序可减少时间变化与处理混淆。

电灯须远离水，避免灯具烫伤，并按批准的方法操作玻璃和水生生物。写出方案之后，仍须实际检验测量范围及读数稳定性。

## 色素与层析：连接 RP3 {#pigments}

不同色素扩大了可吸收的波长范围。吸收光谱描述吸收了多少光；作用光谱描述在可比照明下，不同波长对应的生物反应速率。两者相似可支持某色素参与反应，但它们测量的不是同一个对象。

层析时，在高于溶剂液面的铅笔基线上点小而浓的色素斑。让溶剂上升，取出后立即标记溶剂前沿；从同一基线量到色素斑中心与前沿。色素因在流动相中的溶解性、与固定相的吸附程度不同而分离。只有溶剂和固定相等条件一致时，Rf 才适合比较；相同 Rf 支持但不能唯一证明同一色素。溶剂可能易燃或有害，使用学校规定的通风装置、护目镜，远离火源。

$$R_f=\frac{\text{distance moved by pigment}}{\text{distance moved by solvent front}}.$$

## 独立解释 {#practice}

<!-- task:P2 -->
**Self-written / 自拟题 — P2**

A chloroplast preparation is supplied with constant light and then given much less CO₂. Predict the immediate effect on GP formation and the likely initial change in RuBP, assuming the regeneration reactions continue briefly. Explain why the supply of light alone cannot maintain sugar production.
<!-- /task:P2 -->

<details markdown="1">
<summary>提示 P2</summary>

先找 rubisco 反应的底物与受体，再考虑 ATP。

</details>

<details markdown="1">
<summary>解答 P2</summary>

CO₂ 固定减少使 GP 形成速率降低。由于 RuBP 仍在再生，却较慢被消耗，它可在初期积累。光可提供 ATP 和 reduced NADP，但两者不能取代 CO₂ 作为碳源。这是初始变化预测；之后的调节与底物不足可继续改变各物质含量。

</details>

<!-- task:P3 -->
**Self-written / 自拟题 — P3**

An aquatic plant releases 6.0 cm³ O₂ h⁻¹ in light and consumes 1.5 cm³ O₂ h⁻¹ in darkness at the same temperature. Estimate gross oxygen production and state the required assumption. A second student moves a hot lamp closer and claims that the larger gas volume proves an effect of light intensity alone. Evaluate this claim and improve the design.
<!-- /task:P3 -->

<details markdown="1">
<summary>提示 P3</summary>

光下读数已被呼吸耗氧抵消了一部分。移动热灯可能改变不止一个条件。

</details>

<details markdown="1">
<summary>解答 P3</summary>

估计总产氧 = 6.0 + 1.5 = 7.5 cm³ O₂ h⁻¹，前提是光下与黑暗中的呼吸速率相同。热灯还可能改变温度，影响生物反应与气体体积。可用恒温水浴或合适的隔热滤光装置，并监测温度和光强；同时控制 CO₂、组织量，使用独立样本重复。

</details>

<!-- task:P4 -->
**Self-written / 自拟题 — P4**

A pigment spot moves 36 mm while the solvent front moves 60 mm. Calculate Rf. A reference pigment has the same Rf in a different solvent. Explain why this does not establish that the pigments are identical.
<!-- /task:P4 -->

<details markdown="1">
<summary>提示 P4</summary>

这个比值没有单位。想一想溶剂会改变什么。

</details>

<details markdown="1">
<summary>解答 P4</summary>

Rf = 36/60 = 0.60。溶剂组成影响色素溶解性和移动，因此不同条件下的数值不能直接比较。应在同样条件下运行参照；即使重合，斑点仍可能包含不同物质。

</details>

<!-- task:P5 -->
**Self-written / 自拟题 — P5**

Retry: oxygen uptake and release are equal at one light intensity. Predict the sign of net oxygen exchange immediately after the light is switched off, assuming aerobic respiration continues. State why 'no net exchange' and 'no metabolism' are different claims.
<!-- /task:P5 -->

<details markdown="1">
<summary>提示 P5</summary>

关灯移除了收支中的一项贡献，并没有消除植物对 ATP 的需求。

</details>

<details markdown="1">
<summary>解答 P5</summary>

净交换会变为吸收氧：光合产氧下降，而呼吸继续耗氧。原补偿点处，相反方向的速率相等，虽净量为零，代谢仍在进行。

</details>

## 来源与继续学习 {#sources}

范围依据 [OxfordAQA 9610 specification v5.1](https://www.oxfordaqa.com/wp-content/uploads/2022/08/oxfordaqa-a-level-biology-specification.pdf), 3.3.2 · RP7 · RP3 bridge. 本页按所读 v5.1 编号组织；未来考季适用版本应经学校核对。 [官方资格与资源入口](https://www.oxfordaqa.com/qualification/international-as-and-a-level-biology-9610/).

除明确标记的改编任务外，例题、练习及反馈均由作者编写，不是官方题目或官方评分标准。构造数据不称实测；网页练习不代表已完成必做实验。

[呼吸与净气体交换](/zh/alevel/a2-biology/respiration/) · [植物响应](/zh/alevel/a2-biology/plant-responses/) · [生态系统生产量](/zh/alevel/a2-biology/energy-production/) · [BL05 数据技能](/zh/alevel/a2-biology/data-skills/) · [BL05 实验设计](/zh/alevel/a2-biology/experimental-design/) · [BL05 综合写作](/zh/alevel/a2-biology/synoptic-writing/)
