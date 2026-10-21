---
title: 变压器与输电
layout: subjects
mathjax: true
grade: a2
subject: a2-physics
lang: zh-CN
translation_of: /alevel/a2-physics/transformers-and-power-transmission/
permalink: /zh/alevel/a2-physics/transformers-and-power-transmission/
toc_headings: h2, h3, h4
study_page: true
---

[A2 物理](/zh/alevel/a2-physics/) · PH03 · 3.10.6 · RP7

变压器能升压，却不能创造功率。先追踪变化的磁通，再核算损耗，最后辨明输电比较中保持什么不变。

**开始前：**回顾[法拉第定律](/zh/alevel/a2-physics/electromagnetic-induction/)与[有效值](/zh/alevel/a2-physics/alternating-current/)。[RP7 探究](#data-transformer-efficiency)包含测量决策和数据分析，阅读本页不等于完成实物实验。

## 同一变化磁通，两个绕组 {#transformer-principle}

初级交流电流使共同铁芯中的磁通变化，该变化磁通在次级感应电动势；次级回路闭合后才有次级电流。若每匝链过同一铁芯磁通：

$$\varepsilon_p=-N_p\frac{\mathrm d\Phi}{\mathrm dt},\qquad\varepsilon_s=-N_s\frac{\mathrm d\Phi}{\mathrm dt}.$$

在理想电压模型中忽略绕组电阻和漏磁，取电动势大小之比：

$$\boxed{\frac{V_s}{V_p}=\frac{N_s}{N_p}}.$$

有效值须与有效值比较，峰值与峰值比较，不能混用。次级匝数多则升压，少则降压。简单变压器改变幅值，**不改变频率**。能量由电磁场传递，不是电荷从一个绝缘绕组流入另一个。

直流接通暂态结束后，稳定电流产生稳定磁通，没有持续次级感应电动势；但开关接通或断开可产生短暂信号。直流下绕组电阻很小，还可能造成过大初级电流和发热，不要用不合适的直流电源试接。

### 例题 1：电压与频率 {#example-1}

*Adapted from OxfordAQA 9630 PH03 January 2020 Q35; QP p.43 and MS p.9 (key C) read. Open calculation replaces the options.*

An ideal transformer has $N_p=300$ and $N_s=600$. Its primary sine voltage has peak $10\,\mathrm V$ at $20\,\mathrm{Hz}$. Find the secondary peak and frequency, then its rms voltage.

$$V_{s0}=10\frac{600}{300}=20\,\mathrm V,\qquad f_s=20\,\mathrm{Hz},\qquad V_{s,\mathrm{rms}}=\frac{20}{\sqrt2}\approx14\,\mathrm V.$$

匝数比改变电压幅值，不改变共同磁通每秒完成的周期数。

## 理想电流与实际效率 {#efficiency-and-losses}

对输送功率的理想变压器，采用常见的电阻负载模型：

$$P_{\mathrm{in}}=P_{\mathrm{out}},\qquad V_pI_p=V_sI_s,\qquad\frac{I_s}{I_p}=\frac{N_p}{N_s}.$$

同样传输功率下，升压会减小电流；若把电压和电流都乘匝数比，就凭空创造了功率。实际装置存在损耗：

$$\eta=\frac{P_{\mathrm{out}}}{P_{\mathrm{in}}},\qquad P_{\mathrm{loss}}=P_{\mathrm{in}}-P_{\mathrm{out}}.$$

百分效率另乘 100。PH03 给定功率模型及下方手册任务用 $V_{\mathrm{rms}}I_{\mathrm{rms}}$ 估计功率。对电阻输出，这个乘积成立，但它不普遍等于所有交流装置的真实输入功率。真实变压器探究可用合适的交流功率计检查输入；否则报告 VI 近似及其局限。本页不新增功率因数计算。

应把每种机制连到对应的设计改进，而不是只背损耗名称：

| 机制 | 怎样发生、怎样减小 |
| --- | --- |
| 铜损 | 绕组电阻引起焦耳热；同样电流下，适当加粗并使用低电阻率导线可减小发热。 |
| 涡流发热 | 铁芯磁通变化在导电材料中感生环流；互相绝缘的叠片切断较大环路并增大环路电阻。 |
| 磁滞发热 | 磁化方向反复变化会耗散能量；合适的软磁材料可减小每周期耗散。 |
| 漏磁 | 部分初级磁通未链过次级，耦合减弱；良好闭合的共同铁芯及合理绕组位置可减小漏磁。漏磁本身不表示未链过的场能全部转为热。 |

### 例题 2：使用实际输入功率 {#example-2}

A transformer delivers $12\,\mathrm{V\ rms}$ at $2.0\,\mathrm{A\ rms}$ to a resistive load. Its true input power is measured as $30\,\mathrm W$. Find efficiency and loss. Can the ideal current-ratio equation also be assumed exactly?

$$P_{\mathrm{out}}=24\,\mathrm W,\qquad\eta=\frac{24}{30}=0.80=80\%,\qquad P_{\mathrm{loss}}=6.0\,\mathrm W.$$

输入输出功率并不相等，若再把理想电流关系当作精确关系，就与已知损耗矛盾。理想匝数规则可近似描述电压，不代表整台装置没有损耗。

## RP7：决定测什么、怎样测 {#rp7-method}

<img src="/assets/img/physics-transformer-meters.svg" alt="Measurement schematic: an isolated low-voltage AC source feeds the primary with series ammeter and parallel voltmeter; a separate secondary circuit has series ammeter, variable resistive load and a parallel voltmeter. Both windings share a closed core." width="520" height="500" data-lazy-ignore="true">

研究效率怎样随次级负载/电流变化。采集前先决定有意义、又不超过线圈、电源、变阻器及表计额定值的电流范围。从较大负载电阻和教师核准的低压隔离交流电源开始。使用量程适当的交流表；电流表串联，电压表并联在对应绕组/负载两端，不能把电流表直接跨接电源。

固定匝数、铁芯组合及频率；每次都读取**带负载时**的初级电压，电源可能下垂。读数间断电，并冷却后重复一组，限制温度变化。每个负载点一起记录四项量及分辨率/不确定度。重复可以检查离散，却不能修正错误的量程模式、接线或功率模型。不要故意短接次级，更不要把裸露实验装置接到市电；执行学校对具体装置的风险评估。

## RP7 数据探究：自己计算效率 {#data-transformer-efficiency}

*Adapted data task: seven selected rows from OxfordAQA 9630 Practical handbook, Version 2, September 2018, [p.74](https://www.oxfordaqa.com/oaqaresources/science/teaching/a-level-practical-handbook-physics.pdf), sorted here by secondary current. Only the four original meter readings are retained. They are official example data, not this school’s measurements. Tasks and uncertainty assumptions are self-written.*

Use the handbook VI approximation for this exercise: estimate input and output powers from the rms meter products and report the resulting estimated efficiency. Subscripts p and s mean primary and secondary. For a teaching uncertainty comparison only, take every voltage reading as ±0.1 V and current reading as ±0.01 A. These uncertainty values are supplied here, not taken from the original table.

| $V_p$ / V | $I_p$ / A | $V_s$ / V | $I_s$ / A |
| --- | --- | --- | --- |
| 12.0 | 1.36 | 22.0 | 0.56 |
| 12.1 | 1.79 | 21.6 | 0.78 |
| 11.8 | 2.14 | 20.4 | 1.00 |
| 11.5 | 2.64 | 19.3 | 1.26 |
| 11.2 | 3.07 | 18.2 | 1.50 |
| 11.0 | 3.47 | 17.1 | 1.70 |
| 10.8 | 3.84 | 16.4 | 1.89 |

1. Calculate estimated input power, output power, loss and efficiency for every row. Plot efficiency vertically against secondary current. Describe the broad trend using data, without assuming it must always increase.
2. Does primary voltage stay constant? Explain one consequence for a claim that only secondary current changed.
3. For the 1.00 A row, estimate a conservative fractional uncertainty in efficiency using the supplied first-order rule: add the four fractional meter uncertainties. Is the exact position of a maximum established by this small sample?
4. Choose one change to reduce copper loss and one to reduce core heating, explaining the mechanism. State a measurement that would test whether the VI input approximation is adequate.

<details markdown="1">
<summary>提示</summary>

每行先分别计算两个功率，再用输出除输入。相对不确定度是各项不确定度除以该行读数，不能统一除以一个标称值。

</details>

<details markdown="1">
<summary>分析与再尝试</summary>

按表中顺序，估计效率约为 75.5%、77.8%、80.8%、80.1%、79.4%、76.2%、74.7%。在采样负载范围中段附近有较宽的峰。1.00 A 一行：

$$P_{\mathrm{in}}=25.252\,\mathrm W,\quad P_{\mathrm{out}}=20.4\,\mathrm W,\quad P_{\mathrm{loss}}=4.852\,\mathrm W,\quad\eta\approx0.808.$$

初级电压总体从约 12 V 降至 10.8 V，次级电压也下降，不能称初级电压严格不变。低负载时，近似持续的铁芯损耗占输入比例较大；高电流时绕组发热增大。但这些记录不能分离所有损耗机制。

$$\frac{\Delta\eta}{\eta}\approx\frac{0.1}{20.4}+\frac{0.01}{1.00}+\frac{0.1}{11.8}+\frac{0.01}{2.14}\approx0.028.$$

效率绝对不确定度约 ±0.023，即 **±2.3 个百分点**，不是效率的 ±2.3%。这个保守一阶估计不是统计置信区间。邻点差异及稀疏采样不足以确定精确最佳点。用适当交流功率计测真实输入，可检查 VI 近似。**再尝试：**若报告给出 110%，保留原始读数并检查接线、是否同一负载点、量程/校准及功率定义，不能把结果直接截成 100%。

</details>

## 输电：先说明哪一端功率不变 {#power-transmission}

<img src="/assets/img/physics-transmission-model.svg" alt="Transmission model showing source, ideal step-up transformer, a two-wire line represented by total loop resistance, receiving voltage and a resistive load. Source and receiving powers are labelled separately." width="520" height="350" data-lazy-ignore="true">

采用总电阻 $R_{\mathrm{line}}$ 为去线与回线电阻之和的简化线路，忽略其他线路效应，使用有效值：

$$\Delta V=IR_{\mathrm{line}},\qquad P_{\mathrm{line}}=I^2R_{\mathrm{line}},\qquad P_{\mathrm{send}}=P_{\mathrm{receive}}+P_{\mathrm{line}}.$$

发送功率相同时，$I=P_{\mathrm{send}}/V_{\mathrm{send}}$。提高发送电压减小电流、线压降和线路发热；损耗不同，接收功率便会略有不同。若题目固定接收功率和接收电压，则先由接收端求电流，再加线压降求发送电压，不能混用两端。真实电网还有其他约束，此处按给定 PH03 模型处理。

### 例题 3：比较两种发送电压 {#example-3}

A station sends $100\,\mathrm{kW}$ through a line with total resistance $10\,\Omega$. Compare sending voltages 10 kV and 20 kV. Find line current, heating loss, voltage drop and received power. Treat transformers as ideal.

10 kV 时：$I=10\,\mathrm A$，损耗 $=1.0\,\mathrm{kW}$，压降 $=100\,\mathrm V$，接收功率 $=99.0\,\mathrm{kW}$。

20 kV 时：$I=5.0\,\mathrm A$，损耗 $=0.25\,\mathrm{kW}$，压降 $=50\,\mathrm V$，接收功率 $=99.75\,\mathrm{kW}$。

固定发送功率时，发送电压加倍使损耗变为四分之一、压降减半。检查：接收电压分别为 9.90 和 19.95 kV，乘各自电流应得到接收功率。接收端再用降压变压器得到合适负载电压，但不能把损失的能量变回来。

## 练习 {#practice}

### 练习 1：检查凭空增功率的说法 {#question-1}

*Self-written.*

An ideal transformer has turns ratio $N_s/N_p=5$. It supplies a resistive load with 50 W from a 10 V rms primary. Determine primary current, secondary voltage and secondary current. Diagnose the claim “both voltage and current increase fivefold”.

<details markdown="1">
<summary>提示</summary>

先守恒功率，再判断电流比。

</details>

<details markdown="1">
<summary>解答与再尝试</summary>

$$I_p=5.0\,\mathrm A,\qquad V_s=50\,\mathrm V,\qquad I_s=1.0\,\mathrm A.$$

电压电流若都加五倍，功率就变为 25 倍。**再尝试：**输出仍为 50 W、实际效率为 80%，输入须为 62.5 W，不能再把理想电流关系当作精确关系。

</details>

### 练习 2：解释两种设计选择 {#question-2}

*Adapted from OxfordAQA 9630 PH03 Specimen 2019/V2.0 Q5; QP p.12 and MS p.10 read. The explanation task is retained; no official marks are assigned here.*

Explain how two distinct transformer loss mechanisms occur and how suitable design or material choices reduce each one. Give a linked explanation for each, rather than a list of names.

<details markdown="1">
<summary>提示</summary>

每种选择都连接成因、能量转移和改进为何有效。

</details>

<details markdown="1">
<summary>解答与再尝试</summary>

一种有效组合是涡流发热与铜损。变化磁通在铁芯中驱动环流并耗散能量，绝缘叠片切断较大环路、增大其电阻；绕组电流产生电阻热，同电流下加粗低电阻导线可减小它。也可解释磁滞及软磁材料。**再尝试：**说明为什么叠片之间需要绝缘，而不只是电接触的多张金属片。

</details>

### 练习 3：固定接收端条件 {#question-3}

*Self-written.*

A resistive load must receive $40\,\mathrm{kW}$ at 2.0 kV through a line of total resistance $4.0\,\Omega$. Find current, line loss, sending voltage and sending power. Repeat for the same received power at 4.0 kV.

<details markdown="1">
<summary>提示</summary>

已知接收端电压，求发送端应加上压降，而不是减去。

</details>

<details markdown="1">
<summary>解答与再尝试</summary>

2.0 kV 时：$I=20\,\mathrm A$，损耗 $=1.6\,\mathrm{kW}$，$V_{\mathrm{send}}=2080\,\mathrm V$，$P_{\mathrm{send}}=41.6\,\mathrm{kW}$。

4.0 kV 时：$I=10\,\mathrm A$，损耗 $=0.40\,\mathrm{kW}$，$V_{\mathrm{send}}=4040\,\mathrm V$，$P_{\mathrm{send}}=40.4\,\mathrm{kW}$。

**再尝试：**接收功率和电压不变，线路电阻减半，电流不变，线路损耗减半。

</details>

### 练习 4：解释空载读数 {#question-4}

*Self-written.*

A real transformer has its secondary open. Its primary AC meter still records current. Does this prove that power is being delivered to the secondary load? Explain what other measurements are needed to distinguish current, true input power and output power.

<details markdown="1">
<summary>提示</summary>

次级开路没有持续负载电流，但初级仍涉及磁化和损耗。

</details>

<details markdown="1">
<summary>解答与再尝试</summary>

不能。次级负载电流为零时，负载功率为零；初级电流可用于建立交变磁化并供给损耗，仅有电流不能确定真实交流输入功率。应使用合适功率计，并按正确模式记录电压电流。**再尝试：**次级空载电压不为零，不表示负载功率不为零。

</details>

### 练习 5：改变铁芯电阻率 {#question-5}

*Adapted from OxfordAQA 9630 PH03 June 2024 Q20; QP p.33 and MS p.21 (key C) read. An explanation replaces the options; comparable flux is explicitly assumed.*

Two otherwise comparable conducting cores experience the same changing flux. Explain why higher electrical resistivity can reduce eddy-current heating. Does this remove the need to consider hysteresis or winding resistance?

<details markdown="1">
<summary>提示</summary>

区分环路感应电动势与环路电阻。

</details>

<details markdown="1">
<summary>解答与再尝试</summary>

环路几何和磁通变化相近时，感应电动势相近；增大环路电阻可减小环流及该电动势下的发热，但不能消除磁化反转损耗或绕组铜阻。**再尝试：**材料不变也可用绝缘叠片限制环流。

</details>

### 练习 6：综合波形与功率 {#question-6}

*Self-written.*

An ideal transformer has $N_p=240$, $N_s=120$. Its primary sinusoidal peak voltage is $24\,\mathrm V$ at 50 Hz. The secondary feeds a constant $6.0\,\Omega$ load. Determine secondary peak, rms voltage, average load power, primary rms current and output frequency. State one reason a real measurement could differ.

<details markdown="1">
<summary>提示</summary>

先把次级峰值换成有效值，再用电阻功率。

</details>

<details markdown="1">
<summary>解答与再尝试</summary>

$$V_{s0}=12\,\mathrm V,\quad V_{s,\mathrm{rms}}=\frac{12}{\sqrt2}\approx8.5\,\mathrm V,\quad P_{\mathrm{out}}=12\,\mathrm W.$$

$$I_{p,\mathrm{rms}}=\frac{12}{24/\sqrt2}\approx0.71\,\mathrm A,\qquad f_s=50\,\mathrm{Hz}.$$

绕组压降、耦合不完全或负载电阻变化可使实测不同；同样输出下，能量损耗要求更多输入。**再尝试：**理想输入电压固定、负载电阻加倍，输出电压不变，负载电流和功率减半。

</details>

## 速查与 PH03 回顾 {#quick-reference}

| 模型 | 关系 |
| --- | --- |
| 理想电压比，使用同一种电压值 | $V_s/V_p=N_s/N_p$ |
| 理想无损传输 | $V_pI_p=V_sI_s$ |
| 实际效率 | $\eta=P_{\mathrm{out}}/P_{\mathrm{in}}$ |
| 电阻线路，总回路电阻 | $P_{\mathrm{line}}=I^2R_{\mathrm{line}}$；$\Delta V=IR_{\mathrm{line}}$ |

完成 PH03 前，不看公式表，用英文独立说明：机械转动 → 磁通链变化 → 正弦感应电压 → 有效值发热 → 变压后的电压电流 → 线路损耗。其他模型可回课程目录，各选一道圆周运动、场、电容及指数变化任务，关闭解答重新尝试。

[上一课：交流电](/zh/alevel/a2-physics/alternating-current/) · [PH03 课程目录](/zh/alevel/a2-physics/) · [PH04：热学](/zh/alevel/a2-physics/thermal-physics/)

## 来源与范围 {#sources}

OxfordAQA 9630 PH03，[大纲正文 v4.4](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-international-as-and-a-level-physics-specification.pdf) 3.10.6 与 RP7，印刷第 26/38 页（PDF 第 25/37 页），2026-10-21 核对。例题 1 改编 January 2020 [QP](https://drive.google.com/file/d/1u3DieTjGo7oCKuPMLpK01t1dBK72FlEO/view) Q35 第 43 页，配对 [MS](https://drive.google.com/file/d/191UedE9sWTca8lYxRcL0UBTkRDuI1lXl/view) 第 9 页。练习 2 改编 Specimen 2019/V2.0 Q5，[QP](https://www.oxfordaqa.com/oaqaresources/science/assessment/9630-PH03-international-a-level-physics-specimen-paper-v4.2.pdf) 第 12 页与 [MS](https://www.oxfordaqa.com/oaqaresources/science/assessment/9630-PH03-international-a-level-physics-mark-scheme-v4.2.pdf) 第 10 页。练习 5 改编 June 2024 [QP](https://drive.google.com/file/d/1ah7yyGqFtyHdZ4Dxd4JchZM361qUj8gc/view) Q20 第 33 页及 [MS](https://drive.google.com/file/d/1-18EOqSkT4F1sHO9LaevtZaWXNn4aDSM/view) 第 21 页。RP7 方法与四列示例读数选自[实验手册 v2，September 2018](https://www.oxfordaqa.com/oaqaresources/science/teaching/a-level-practical-handbook-physics.pdf) 第 72–74 页；其计算列在此重算，任务未预给。效率按当前大纲的输出/输入定义；教学假定不确定度与原始记录分开说明。Jim Breithaupt 第 21.5 节印刷第 384 页辅助共同磁通解释。其他题目和配图为自拟，不认证完成实物 RP7 或学生学习试用。
