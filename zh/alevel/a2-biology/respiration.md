---
title: "呼吸作用：ATP、气体变化与 RQ"
layout: subjects
mathjax: true
grade: a2
subject: a2-biology
study_page: true
toc_headings: h2
lang: zh-CN
permalink: /zh/alevel/a2-biology/respiration/
translation_of: /alevel/a2-biology/respiration/
---

[BL03 学习目录](/zh/alevel/a2-biology/paper-3/) · OxfordAQA 9610 · 3.3.3 · RP8

请先作答再展开提示或解答。

## 先划清研究边界 {#start}

呼吸作用（respiration）通过一系列细胞反应，把有机底物中的能量转移到 ATP 合成过程。它与空气进出肺的通气不同。ATP 水解可与主动运输、生物合成和运动等过程偶联；细胞必须不断用 ADP 和无机磷酸重新合成 ATP。

学完后，你应能解释碳、电子、质子分别去了哪里，再区分氧耗与呼吸计的净气体变化。若 ATP、氧化还原或梯度仍不熟悉，先补[先修知识](/zh/alevel/a2-biology/prerequisites/#energy-carriers)。呼吸测量样章可以从[气体收支](#gas-balance)开始，再回查机制。

<!-- task:R0 -->
**Self-written / 自拟题 — R0**

A living seed takes up oxygen but its gas chamber keeps the same volume. Does this observation alone show that respiration has stopped? Name the other gas you would need to consider.
<!-- /task:R0 -->

<details markdown="1">
<summary>提示 R0</summary>

把进入气体空间和离开气体空间的量分别列出。

</details>

<details markdown="1">
<summary>核对 R0</summary>

不能。产生的 CO₂ 可以补回消耗的 O₂。净读数是两个过程共同作用的结果，并不分别给出其中任何一个。

</details>

## 糖酵解：先投入 ATP，再得到净收益 {#glycolysis}

糖酵解（glycolysis）发生在细胞质中。ATP 使葡萄糖磷酸化；在六碳中间产物裂解为两个三碳磷酸丙糖前，先投入两个 ATP。磷酸丙糖被氧化为两个丙酮酸（pyruvate），NAD 接受氢／电子成为 reduced NAD。底物水平磷酸化共形成四个 ATP，扣除投入后，**每个葡萄糖净得两个 ATP**，同时生成两个 reduced NAD。

底物水平磷酸化直接把中间产物上的磷酸转移给 ADP，不依赖电子传递链。糖酵解不直接使用氧，却需要持续供应氧化型 NAD；只有葡萄糖并不足以让过程一直运行。

## 线粒体碳反应：连接反应与 Krebs 循环 {#aerobic}

丙酮酸通过主动运输进入线粒体基质。在**连接反应（link reaction）**中，每个三碳丙酮酸发生脱羧和氧化，形成一个 CO₂ 和一个 reduced NAD；剩余的二碳乙酰基与辅酶 A 结合，形成乙酰辅酶 A（acetyl coenzyme A）。辅酶 A 是乙酰基的载体，不会被永久耗尽。

二碳基团与四碳受体结合，形成六碳化合物，进入 **Krebs cycle**。一系列脱羧和氧化反应使每轮循环释放两个 CO₂，形成 reduced NAD、reduced FAD，并通过底物水平磷酸化形成 ATP，最后再生四碳受体。每个葡萄糖对应两轮循环。

| Stage, per glucose | Location | CO₂ released | Reduced coenzymes | Direct ATP gain |
| --- | --- | --- | --- | --- |
| Glycolysis | Cytoplasm | 0 | 2 reduced NAD | 2 net |
| Link reaction | Matrix | 2 | 2 reduced NAD | 0 |
| Krebs cycle, two turns | Matrix | 4 | 6 reduced NAD + 2 reduced FAD | 2 |

这是一张碳与辅酶的收支表，不是固定总 ATP 产量表。后续氧化磷酸化提供大量 ATP；偶联与运输成本等会影响实际总量，不能仅凭此表套用一个永远固定的数。完全氧化时，葡萄糖的六个碳最终以六个 CO₂ 离开。空气中的氧在电子传递末端被还原为水，并不是直接变成脱羧产生的 CO₂。

## 氧化磷酸化为什么需要膜？ {#oxidative-phosphorylation}

Reduced NAD 和 reduced FAD 把电子交给线粒体内膜上的载体，自身被重新氧化。电子沿传递链移动时释放的能量驱动质子**从基质进入膜间隙**。内膜限制质子自由穿过，因此能够维持电化学梯度。质子再**经 ATP synthase 返回基质**，这个流动与 ATP 合成偶联。

氧是末端电子受体，与电子和质子结合形成水。缺氧时，持续电子传递停止，还原型辅酶不能高效再氧化，连接反应与 Krebs cycle 因而不能维持正常的有氧速率。嵴增大了内膜面积，可容纳更多载体与 ATP synthase。

![Teaching schematic: inner mitochondrial membrane separates matrix from intermembrane space; electron transfer pumps protons outward and ATP synthase returns protons to the matrix. Not to scale.](/assets/images/a2-biology/bl03-respiration-membrane.svg)

<!-- task:R1 -->
**Self-written / 自拟题 — R1**

Complete the mechanism in two sentences: a membrane becomes freely permeable to protons → ______ → ATP synthesis by oxidative phosphorylation decreases. Explain why electron transfer and ATP synthesis need not decrease in exactly the same proportion.
<!-- /task:R1 -->

<details markdown="1">
<summary>提示 R1</summary>

分清“建立梯度”所用的能量，以及质子实际沿哪条路径返回。

</details>

<details markdown="1">
<summary>解答 R1</summary>

质子可以不经 ATP synthase 返回，梯度因而减弱，与 ATP 合成偶联的质子流减少。解偶联时电子传递仍可能继续甚至加快，但 ATP 合成明显减少；所以氧耗不能直接当作 ATP 产量计。

</details>

## 缺氧时：关键是再生 NAD {#anaerobic}

发酵没有提取葡萄糖中全部可利用能量。它的关键作用是把 reduced NAD 重新氧化，使糖酵解能继续产生少量 ATP。

在哺乳动物细胞中，丙酮酸接受 reduced NAD 的氢，成为**乳酸盐（lactate）**，这一步不释放 CO₂。在酵母中，丙酮酸先脱去 CO₂ 成为乙醛（ethanal），乙醛再接受 reduced NAD 的氢成为**乙醇（ethanol）**。两条路径都再生 NAD。在这两类途径中，糖酵解之后的转化本身不再增加 ATP 收益。

**解释示范 — Self-written / 自拟题：**“为什么生成乙醇能让糖酵解继续？”不能只停在“制造 NAD”。完整英文链可以写：*Ethanal accepts hydrogen from reduced NAD, regenerating NAD. NAD can then accept hydrogen during oxidation of triose phosphate, allowing glycolysis and substrate-level phosphorylation to continue.*

## 气体收支：先定义正负，再计算 {#gas-balance}

在指定时间内，用 **O** 表示消耗的氧气体积，用 **C** 表示产生的二氧化碳体积，两者均按正量记录。定义 **ΔV = 最终气体体积 − 初始气体体积**，因此体积收缩时 ΔV 为负。比较气体体积时必须保持相同温度和气压。

若 CO₂ 被有效吸收，装置既消耗氧，也不保留新产生的 CO₂，所以 ΔVₐ = −O。没有吸收剂时，ΔVᵦ = C − O。因此，净变化为零可以同时存在两个大小相等的非零流量。配对样本呼吸活性相同时，可由 C = ΔVᵦ + O 求出产 CO₂ 量。要比较**各装置自身的体积变化**，不能拿两个装置的起始体积之差充当氧耗。

$$\Delta V_A=-O,\qquad \Delta V_B=C-O,\qquad RQ=\frac{C}{O}\quad(O>0).$$

![Original gas-balance teaching diagram: oxygen leaves the gas space for the organism; carbon dioxide enters it, or is removed by an absorber. Arrows represent gas transfers, not measured rates.](/assets/images/a2-biology/bl03-gas-balance.svg)

**示范 — Self-written / 自拟题；构造数据：**20 分钟内，可比样本的 ΔVₐ = −2.0 cm³，ΔVᵦ = −0.6 cm³。于是 O = 2.0 cm³，C = −0.6 + 2.0 = 1.4 cm³，RQ = 0.70。B 中的 0.6 cm³ 收缩并不是 B 的氧耗。

毛细管中，位移 x 对应体积 πr²x；用的是**半径**，还须先校准哪一个移动方向表示收缩。若仪器测量定容条件下的压力变化，就必须使用仪器的换算关系，不能直接称作体积变化。

## RQ 是底物证据，不是唯一身份证 {#rq}

葡萄糖完全有氧氧化时，每消耗六个 O₂ 产生六个 CO₂，因此 RQ = 1。脂质自身含氧比例较低，相对于产 CO₂ 量，需要消耗更多氧，典型 RQ 约为 0.7。蛋白质的值常约为 0.8–0.9，取决于氨基酸组成及含氮产物；混合底物也可产生中间值。脂质分解提供甘油和脂肪酸；甘油可进入糖酵解，脂肪酸提供乙酰基。氨基酸脱氨后的碳骨架可从不同位置进入呼吸途径，包括 Krebs cycle 的中间物。

RQ 接近 1 与主要进行碳水化合物有氧呼吸相容，却不能唯一确认葡萄糖。CO₂ 溶解、读数误差、生物合成及混合底物都会影响结果。氧耗为零时，通常的有限 RQ **无定义**：酵母发酵可产 CO₂ 而不耗 O₂，乳酸途径可出现 0/0。不能把所有无氧途径都写成“RQ = infinity”。

## RP8：怎样让比较成立？ {#rp8}

选择一个变量，例如温度或底物浓度。明确生物种类、发育阶段、质量和测量时段，先让装置达到实验温度再密封读数。有氧测量期间要保证氧仍充足。应使用独立生物样本，不能把同一批种子的多次读数当成多份独立重复。用等体积惰性材料设置空白装置可发现物理漂移，但不能替代活体样本的重复。

装置须气密、温度稳定，读体积时气压须可比。黑暗处理防止绿色组织光合消耗 CO₂ 并产生 O₂，并不表示植物只在黑暗中呼吸。还应检查吸收剂容量是否相同，考虑液体溶解 CO₂ 的影响。长时间测量中，种子质量、底物供应和氧供应的变化都可能改变速率。

NaOH 有腐蚀性：佩戴护目镜，使生物与吸收剂隔离，使用教师批准的用量和装置。水浴用于控温；避免压力积聚，安全操作玻璃，按学校要求照顾实验生物。这些是实验准备要求，不表示已实际完成实验。

## June 2025 真实数据探究 {#real-data}

<!-- task:R2 -->
**Adapted / 改编题 — R2**

Source: OxfordAQA International A-level Biology **9610, BL05, June 2025, Q2**, QP pp.10–14, Table 2 on p.12; **MS Version 1.0 Final, pp.8–9, read**. The numerical data are retained. The apparatus is described in words and the tasks below are rewritten; this is not a reproduction of the original question or its marks.

Each respirometer contains **3.5 g of germinating pea seeds** and is kept in darkness. A contains sodium hydroxide solution to absorb CO₂; B contains water without a CO₂ absorbent. Assume gas-tight equipment, stable temperature, comparable pressure when volumes are read, adequate oxygen and comparable respiratory activity of the seed samples.

| Time / h | Gas volume in A / cm³ | Gas volume in B / cm³ |
| --- | --- | --- |
| 0 | 100.0 | 90.0 |
| 5 | 99.0 | 89.5 |
| 9 | 97.5 | 89.5 |
| 17 | 95.0 | 90.0 |
| 30 | 90.0 | 90.5 |
| 37 | 87.0 | 90.0 |
| 48 | 83.5 | 90.0 |

1. Plot gas volume in A against time. Draw a straight line of best fit and use two widely separated points on your line to estimate oxygen consumption in mm³ g⁻¹ h⁻¹, to the nearest whole number. State the sign of the graph's gradient and why the consumption rate is positive.
2. Use the overall pattern in B, together with A, to explain the RQ estimate. Explain why subtracting 90.0 from 100.0 is not a valid way to find oxygen consumption.
3. Suggest the type of respiration and a likely class of substrate. State one reason the substrate cannot be identified uniquely.
4. Explain the purpose of darkness and give one check that would help distinguish gas exchange from physical drift.
<!-- /task:R2 -->

<details markdown="1">
<summary>提示 R2</summary>

A 的斜率是每小时的体积变化。先把 cm³ 换成 mm³，再除以质量。B 用最终减初始体积；围绕同一水平的小幅波动不等于持续趋势。解释中要同时出现两个气体。

</details>

<details markdown="1">
<summary>解答与科学核对 R2</summary>

独立最小二乘拟合给出 A 的斜率约 −0.3559 cm³ h⁻¹，因此：

$$\text{oxygen uptake rate}=\frac{0.3559\times1000}{3.5}\approx102\ \mathrm{mm^3\,g^{-1}\,h^{-1}}.$$

合理的手工作图会略有不同；源 MS 接受 94–106 mm³ g⁻¹ h⁻¹。A 的负斜率表示气体减少，氧耗速率按正量报告。只用首尾观测值会得到约 98，但不能据此展示“使用最佳拟合线”的要求。

B 在 89.5–90.5 cm³ 之间波动，48 小时首尾没有净变化。在题设模型下，C − O ≈ 0，而 A 表明 O 为正，所以 C ≈ O，RQ ≈ 1。两个装置的起始体积不同，它们的差不是气体交换量。

这支持以碳水化合物为底物的有氧呼吸，不能证明只用了葡萄糖。混合底物或气体测量效应均会限制识别。黑暗排除了光合气体交换；惰性材料空白配合恒温水浴，可发现物理漂移。B 近似恒定是对测量与模型的判断，不是说每个中间读数都恰为 90.0。

</details>

## 独立迁移与诊断 {#practice}

<!-- task:R3 -->
**Self-written / 自拟题 — R3**

A capillary of internal diameter 0.80 mm records a 12.0 mm contraction in 15.0 min with 2.00 g of seeds and a CO₂ absorbent. Calculate the oxygen uptake rate in mm³ g⁻¹ h⁻¹. A student then removes the absorbent and observes no movement. Evaluate the claim that removing the absorbent stopped respiration.
<!-- /task:R3 -->

<details markdown="1">
<summary>提示 R3</summary>

半径等于直径的一半。第二个读数究竟能够说明哪一种气体量？

</details>

<details markdown="1">
<summary>解答 R3</summary>

$$\text{rate}=\frac{\pi(0.40)^2(12.0)\times(60/15.0)}{2.00}=12.1\ \mathrm{mm^3\,g^{-1}\,h^{-1}}\quad(3\text{ s.f.}).$$

不加吸收剂时无位移，与产 CO₂ 量等于氧耗相容，不能说明呼吸停止。比较前还要确认样本活性和物理条件一致。

</details>

<!-- task:R4 -->
**Self-written / 自拟题 — R4**

A sealed culture produces ethanol and CO₂, but measured oxygen uptake is zero. Another produces lactate without CO₂ or oxygen uptake. Explain how glycolysis can continue in each culture and whether a finite numerical RQ can identify either substrate.
<!-- /task:R4 -->

<details markdown="1">
<summary>提示 R4</summary>

把 NAD 的必要性与氧的作用分开；除法前先检查分母。

</details>

<details markdown="1">
<summary>解答 R4</summary>

两种培养物都通过还原有机受体来重新氧化 reduced NAD，支持后续糖酵解与 ATP 净生成。乙醇途径的受体是乙醛，乳酸途径的受体是丙酮酸。此处两者均无有限 RQ：分母为零，乳酸情形更是 0/0，不能套用通常的 RQ 规则来识别底物。

</details>

<!-- task:R5 -->
**Self-written / 自拟题 — R5**

Retry: an absorber-containing respirometer warms during the run. Predict how this can affect the apparent oxygen uptake. Propose a temperature control and a blank, and explain why repeating the same uncontrolled procedure cannot remove this error.
<!-- /task:R5 -->

<details markdown="1">
<summary>提示 R5</summary>

升温怎样影响气体体积？这种变化会增强还是抵消耗氧引起的收缩？

</details>

<details markdown="1">
<summary>解答 R5</summary>

在可比气压下，升温使气体膨胀，抵消耗氧引起的收缩，导致氧耗被低估，甚至表现为净膨胀。使用恒温水浴并先平衡温度，设置气体空间和惰性材料体积可比的空白装置来检查物理漂移。重复同样的不控温操作不能消除共有的系统偏差。

</details>

## 来源与继续学习 {#sources}

范围依据 [OxfordAQA 9610 specification v5.1](https://www.oxfordaqa.com/wp-content/uploads/2022/08/oxfordaqa-a-level-biology-specification.pdf), 3.3.3 · RP8. 本页按所读 v5.1 编号组织；未来考季适用版本应经学校核对。 [官方资格与资源入口](https://www.oxfordaqa.com/qualification/international-as-and-a-level-biology-9610/).

除明确标记的改编任务外，例题、练习及反馈均由作者编写，不是官方题目或官方评分标准。构造数据不称实测；网页练习不代表已完成必做实验。

[光合作用](/zh/alevel/a2-biology/photosynthesis/) · [生态能量](/zh/alevel/a2-biology/energy-production/) · [稳态](/zh/alevel/a2-biology/homeostasis/) · [BL05 数据技能](/zh/alevel/a2-biology/data-skills/) · [BL05 实验设计](/zh/alevel/a2-biology/experimental-design/) · [BL05 综合写作](/zh/alevel/a2-biology/synoptic-writing/)
