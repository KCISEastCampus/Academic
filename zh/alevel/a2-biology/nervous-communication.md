---
title: "神经传递与突触整合"
layout: subjects
mathjax: true
grade: a2
subject: a2-biology
study_page: true
toc_headings: h2
lang: zh-CN
permalink: /zh/alevel/a2-biology/nervous-communication/
translation_of: /alevel/a2-biology/nervous-communication/
---

[BL04 · Control](/zh/alevel/a2-biology/paper-4/) · 3.4.3

## 建立电信号的机制解释 {#start}

目标是解释局部膜电位如何传播，以及突触怎样整合输入。感受器电位见[感受器](/zh/alevel/a2-biology/receptors/)，ATP 来源见[呼吸作用](/zh/alevel/a2-biology/respiration/)。下文电位和时间为教学示例，真实阈值与时程会变化。

<!-- task:BL04-N0 -->
**N0 · Self-written / 自拟题**

Sodium ions are more concentrated outside an axon than inside. Explain why their movement through an open channel can occur without ATP, whereas maintaining this concentration difference requires energy.
<!-- /task:BL04-N0 -->

<details markdown="1">
<summary>N0 · 检查</summary>

开放通道允许离子顺电化学梯度易化扩散，不需在通道处水解 ATP。把离子逆梯度泵回去则需要能量；带电离子本身难以直接穿过疏水的脂双层。

</details>

## 运动神经元与静息膜 {#resting}

运动神经元用树突及胞体接受输入，由长轴突传递动作电位，末端与肌肉交流。周围神经轴突的施旺细胞形成绝缘髓鞘，间隔处的**郎飞结（nodes of Ranvier）**聚集较多电压门控通道。信息从输入区传向末梢，不是一群钠离子一路流完整根轴突。

钠钾泵每个循环水解 ATP，把 **3 Na⁺ 泵出、2 K⁺ 泵入**，建立并维持膜外高 Na⁺、膜内高 K⁺。静息时，泄漏通路使膜对 K⁺ 的通透性远高于 Na⁺；K⁺ 倾向外流，而膜内逐渐形成的负电荷又阻碍继续外流。不同通透性和电化学梯度共同建立负的静息电位，教学常用约 −70 mV。泵也有电效应，但不是每次尖峰的快速开关。

## 动作电位：改变通透性，再恢复 {#action-potential}

| 阶段 | 主要变化 | 结果 |
| --- | --- | --- |
| 阈值与去极化 | 电压门控 Na⁺ 通道开放，Na⁺ 内流 | 去极化进一步开放通道，形成快速正反馈 |
| 复极化 | Na⁺ 通道失活，延迟开放的 K⁺ 通道起作用 | K⁺ 外流，膜内重新变负 |
| 后超极化 | K⁺ 通道逐渐关闭 | 电位短暂低于静息水平 |
| 恢复与维持 | 通道复位，静息通透性恢复，泵维持梯度 | 恢复后膜能再次响应 |

超过阈值后，动作电位具有**全或无（all-or-nothing）**特征：同一健康轴突在相同条件下产生幅度近似相同的动作电位。较强刺激可增加频率，不会让单个尖峰无限升高。

**绝对不应期（absolute refractory period）**内，失活的 Na⁺ 通道不能马上重新开放产生尖峰。随后相对不应期的恢复尚未完成，需要更强刺激。这样能把冲动分开并限制最高频率；正常传播时，后方膜仍处不应期，也有助于信号向前传。

**示范 · Self-written / 自拟题：**在梯度尚存时，即使 ATP 产生被中断，复极化仍可短暂发生，因为 K⁺ 还可经开放通道外流。长时间后梯度耗散会使信号失效，但“泵把 K⁺ 推出去完成每次复极化”是错误的，泵实际把 K⁺ 运入。

## 传播与传导速度 {#conduction}

活动区域的 Na⁺ 内流形成局部电流，使邻近膜去极化达到阈值，下一区域再产生动作电位，因此信号不像被动电变化那样不断衰减。有髓纤维中，电流沿绝缘髓鞘下方快速扩展，动作电位主要在结处再生，称**跳跃式传导（saltatory conduction）**。“跳跃”指再生位置，不表示离子瞬间跨越空间。

较大轴突直径降低内部电流阻力，通常提高速度。在生理范围内升温会加快通道动力学等过程；温度过高则破坏蛋白质及膜功能。比较这些因素时必须控制其他变量。

## 胆碱能突触与神经肌肉接头 {#synapse}

1. 动作电位到达突触前末端，开放电压门控 Ca²⁺ 通道。
2. Ca²⁺ 顺电化学梯度进入，触发囊泡与膜融合，通过胞吐释放**乙酰胆碱（acetylcholine，ACh）**。
3. ACh 扩散过突触间隙，结合互补的突触后受体，开放配体门控阳离子通道；正电荷净内流形成兴奋性突触后电位。
4. 若接收神经元触发区的整合兴奋达到阈值，产生新的动作电位。
5. **乙酰胆碱酯酶（acetylcholinesterase）**水解 ACh，胆碱被末端回收用于重新合成 ACh，囊泡也循环利用。信号终止后，才能形成分开的后续响应。

化学突触通常单向传递，因为释放装置位于突触前，相关受体位于突触后。ATP 支持离子泵、递质再利用和囊泡过程；Ca²⁺ 内流是触发条件，不是能量来源。

![突触示意：动作电位到达后钙离子进入、囊泡融合、乙酰胆碱扩散过间隙并到达突触后受体；乙酰胆碱酯酶终止信号，返回箭头标明胆碱回收。](/assets/images/a2-biology/bl04-synapse.svg)

*自绘非比例图，箭头标签区分离子移动、递质扩散和回收。*

在**神经肌肉接头（neuromuscular junction）**，靶细胞是骨骼肌纤维的运动终板。ACh 形成终板去极化，正常情况下触发肌肉动作电位，进而使肌细胞内释放 Ca²⁺。该接头为兴奋性，通常不是抑制整合的部位；神经元之间的突触则可以兴奋或抑制。后续机制见[肌肉](/zh/alevel/a2-biology/muscles/)。

<!-- task:BL04-N1 -->
**N1 · Self-written / 自拟题**

Complete the causal chain at a cholinergic synapse: presynaptic action potential → opening of ____ channels → ____ enters → vesicles ____ → acetylcholine binds to ____ → postsynaptic ion permeability changes. Explain why acetylcholinesterase is needed.
<!-- /task:BL04-N1 -->

<details markdown="1">
<summary>N1 · 提示</summary>

分清突触前末端的钙内流，与接收膜上以钠内流为主的净正电流。

</details>

<details markdown="1">
<summary>N1 · 解释</summary>

电压门控钙通道开放 → Ca²⁺ 进入 → 囊泡与突触前膜融合 → ACh 结合突触后受体。乙酰胆碱酯酶分解 ACh、终止受体刺激，避免残留递质把本应分开的信号连成持续刺激。

</details>

## 总和与抑制 {#integration}

兴奋性突触后电位是分级且会衰减的。来自同一突触的连续输入若时间足够接近，就能重叠，形成**时间总和（temporal summation）**；不同突触输入共同作用为**空间总和（spatial summation）**。是否达到阈值取决于触发区的最终电位，不能假定每次输入都对应一次输出冲动。

抑制性突触可开放 Cl⁻ 或 K⁺ 通道、增加电导，使达到阈值更困难。它可能造成超极化，也可能通过分流减小兴奋引起的电变化。抑制不是单纯“没有递质”，而是抑制性输入主动造成的改变；不同递质和受体的作用也不同。

<!-- task:BL04-N2 -->
**N2 · Self-written / 自拟题**

A deliberately simplified model starts at −70 mV with a threshold of −55 mV. Each excitatory input contributes +6 mV for 5 ms; an inhibitory input contributes −5 mV for the same interval. Inputs sum only while their effects overlap. Compare: (A) three simultaneous excitatory inputs; (B) three excitatory inputs 10 ms apart; (C) three simultaneous excitatory inputs plus one simultaneous inhibitory input. State the model's predictions and one limitation.
<!-- /task:BL04-N2 -->

<details markdown="1">
<summary>N2 · 提示</summary>

只相加给定时间窗内重叠的输入。这是教学模型，不表示真实突触严格线性相加。

</details>

<details markdown="1">
<summary>N2 · 预测</summary>

A：−70 + 18 = −52 mV，达到阈值。B：每次只到 −64 mV，随后衰减，没有尖峰。C：−70 + 18 − 5 = −57 mV，没有尖峰。真实输入连续衰减，受突触位置和膜电导影响，且可能非线性相互作用，不能用这些算术结果直接预测实际放电频率。

</details>

## 独立预测 {#practice}

<!-- task:BL04-N3 -->
**N3 · Self-written / 自拟题**

Drug X blocks presynaptic voltage-gated calcium channels but does not affect axonal sodium channels. Drug Y blocks postsynaptic acetylcholine receptors. Predict recordings from the presynaptic axon and postsynaptic membrane after stimulation in each case. Explain one measurement that distinguishes X from Y.
<!-- /task:BL04-N3 -->

<details markdown="1">
<summary>N3 · 提示</summary>

判断故障发生在递质释放以前，还是到达接收膜以后。

</details>

<details markdown="1">
<summary>N3 · 解释</summary>

两种药都可保留到达突触前的动作电位，却阻止正常突触后兴奋。X 减少 Ca²⁺ 内流，进而减少 ACh 释放；Y 可保留释放，但阻止受体激活。测 ACh 释放量或突触前 Ca²⁺ 内流可区分两者；只测到“突触后没有尖峰”还不能定位故障。

</details>

<!-- task:BL04-N4 -->
**N4 · Self-written / 自拟题**

Two axons have the same diameter and temperature; only one is myelinated. Explain why conduction differs. Then explain why increasing temperature cannot be assumed to increase conduction speed indefinitely.
<!-- /task:BL04-N4 -->

<details markdown="1">
<summary>N4 · 提示</summary>

把绝缘作用连到哪些膜区域必须再生动作电位，再考虑蛋白质的有效温度范围。

</details>

<details markdown="1">
<summary>N4 · 解释</summary>

髓鞘减少电流泄漏，让局部电流快速达到较远的结，需再生尖峰的连续膜区域较少；无髓膜则沿长度逐段再生。温度效应有范围，过热会损伤通道等蛋白质，不能外推为无限加速。

</details>

## 诊断与重试 {#retry}

若把每次电位变化都归于 ATP，重看泵与通道；若一输入就写一输出，重看总和；若所有突触都写成兴奋性，分清肌肉终板和接受抑制输入的神经元。

<!-- task:BL04-N5 -->
**N5 · Self-written / 自拟题 — retry**

ATP production stops but the ion gradients initially remain. A student predicts that every sodium channel immediately stops conducting. Evaluate this prediction and describe what sustained ATP shortage would eventually do to signalling.
<!-- /task:BL04-N5 -->

<details markdown="1">
<summary>N5 · 提示</summary>

开放通道和驱动离子通过通道的梯度是两个不同条件。

</details>

<details markdown="1">
<summary>N5 · 解释</summary>

立即全部停止的预测不成立，离子起初还能顺残余梯度通过通道。持续缺 ATP 会让泵无法维持梯度，并损害末端过程，最终使静息电位及可靠传递失效。多久失效取决于活动量和残余供能，题目不足以给固定时间。

</details>

## 来源与连接 {#sources}

[OxfordAQA 9610 大纲 v5.1](https://www.oxfordaqa.com/wp-content/uploads/2022/08/oxfordaqa-a-level-biology-specification.pdf)，§3.4.3；[官方资料入口](https://www.oxfordaqa.com/qualification/international-as-and-a-level-biology-9610/)。已读 BL04 May/June 2025 Q2 的 MS v1.0 Final p.7，用于校准泵与通道的解释。本页题目和模型数值均自拟，反馈不是官方评分标准。

把 ATP 供给连到[呼吸作用](/zh/alevel/a2-biology/respiration/)，把因果解释用于[综合写作](/zh/alevel/a2-biology/synoptic-writing/)。
