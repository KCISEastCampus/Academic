---
title: 电极电势与电池 · Electrode potentials
layout: subjects
mathjax: true
lang: zh-CN
grade: a2
subject: a2-chemistry
translation_of: /alevel/a2-chemistry/electrode-potentials/
permalink: /zh/alevel/a2-chemistry/electrode-potentials/
toc_headings: h2, h3, h4
study_page: true
---

[CH03 课程](/zh/alevel/a2-chemistry/) · 3.1.9 · 教材第 20 章，印刷 308–321 页

## 学习目标与先修 {#introduction}

- **学习：**先用[方法选择](#method)，再完成编号示范。
- **作业帮助：**在[方法选择](#method)中确定哪边还原，以及先算什么。
- **复习：**先尝试[练习](#practice)，再打开解析，最后用[快速参考](#quick-reference)。

**开始前：**应能辨认氧化与还原、配平半反应并算稀释后的离子浓度。不确定时先做 [AS 先修检查](/zh/alevel/a2-chemistry/#prerequisites)。总反应必须同时满足原子与电荷守恒。

电极电势帮助我们比较两对物质接受电子的倾向。先复习氧化数与半反应配平，再学习标准电极、反应预测和电池应用。

**先想一想：**$\ce{Zn^{2+} + 2e^- -> Zn}$ 的电势很负，是否说明 Zn²⁺ 是很强的氧化剂？先判断“接受电子”和“放出电子”分别对应哪一个物种。

## 方法选择 {#method}

| 任务 | 第一步 | 学习与复做 |
| --- | --- | --- |
| 建立标准半电池 | 列温度、气压和实际离子浓度 | [E1](#standard-electrodes) → [Q1](#q1)、[Q2](#q2) |
| 写电池表示或预测 EMF | 将选定的还原放右边；减去左边的还原电势 | [例题 1](#example-1) → [Q5](#q5) |
| 判断还原是否继续 | 每一步分别与同一还原剂配对 | [例题 2](#example-2) → [Q3](#q3) |
| 写充电反应 | 先合并放电半反应，再反向 | [例题 3](#example-3) → [Q4](#q4) |
| 解释燃料电池或 RP6 结果 | 辨认电子／离子路径，检查标准条件 | [E3](#cells-and-practical) → [Q6](#q6) |

<span id="e1标准电极测量与电池表示"></span>

## E1：标准电极、测量与电池表示 {#standard-electrodes}

**Standard electrode potential，$E^\circ$** 是在标准条件下，某电极相对于标准氢电极测得的电势。标准氢电极（SHE）的电势定义为 0 V；溶液物种浓度为 1.00 mol dm⁻³，气体压力为 100 kPa，温度通常为 298 K。

SHE 使用铂电极／铂黑表面，让 H₂ 气体与含 H⁺ 的溶液接触：

$$\ce{2H+(aq) + 2e^- <=> H2(g)}.$$

金属—金属离子电极可用该金属浸入其离子溶液；若两种氧化还原物种都在溶液中，则需要惰性的导电电极，例如 Pt。**盐桥 salt bridge** 让离子移动以维持电荷平衡，完成内部回路；电子在外部导线中移动，不能说“电子经过盐桥”。

### 例题 1 — 电池表示与 EMF（自拟） {#example-1}

**Question:** Use the standard reduction potentials Zn²⁺/Zn = −0.76 V and Cu²⁺/Cu = +0.34 V to write a spontaneous cell notation, balanced overall reaction and standard EMF.

**方法：**右侧让电势更正的一对发生还原，左侧让电势更负的一对中的金属发生氧化。电池表示为：

$$\mathrm{Zn(s)\vert Zn^{2+}(aq)\Vert Cu^{2+}(aq)\vert Cu(s)}.$$

单竖线表示相界面，双竖线表示盐桥；同一溶液相中的物种用逗号分隔。按此写法 $E_{cell}^\circ=E_{right}^\circ-E_{left}^\circ$。如右边为 SHE，左边为 Zn²⁺/Zn，测得 $0-(-0.76)=+0.76$ V；反向接线则读数改变符号。

1. 左电极氧化：$\ce{Zn -> Zn^{2+} + 2e^-}$。
2. 右电极还原：$\ce{Cu^{2+} + 2e^- -> Cu}$。
3. 消去电子，减去表中的还原电势：

$$\ce{Zn + Cu^{2+} -> Zn^{2+} + Cu}$$

$$E_{cell}^\circ=0.34-(-0.76)=+1.10\,\mathrm V.$$

**答案与独立检查：**两侧各有一个 Zn 和一个 Cu，电荷都为 +2，两个电子消去。正 EMF 与选定的自发方向一致。电子在外电路由 Zn 流向 Cu，盐桥中的离子传递电荷。交换表笔只改变读数符号，不改变自发反应的化学方向。用 [Q5](#q5)复做。

<span id="真题标准氢电极的条件"></span>

### Q1 — 真题：标准氢电极的条件 {#q1}

**OxfordAQA CH03 · June 2024 · 04.1 · 2 marks**

> State three conditions needed for the standard hydrogen electrode.

<details markdown="1">
<summary>提示</summary>

标准条件不只是“室温”。三种条件都写出数值与单位。

</details>

<details markdown="1">
<summary>评分解析与自查</summary>

MS 第 17 页。

298 K（25 °C）；H₂ 压力 100 kPa；H⁺ 浓度 1.00 mol dm⁻³（本题评分标准以 HCl 溶液表示）。三项正确得 2 分，两项正确得 1 分。不要把 100 kPa 随手改成 1 atm。

</details>

<span id="真题配溶液时真正要标准的是离子浓度"></span>

### Q2 — 真题：配溶液时真正要标准的是离子浓度 {#q2}

**OxfordAQA CH03 · January 2025 · 06.4 · 2 marks**

**课程说明：**原卷的 solution E 是酸化的 $\ce{Cr2O7^{2-}}$／$\ce{Cr^{3+}}$ 半电池溶液。

> A student suggested that solution E should be prepared by mixing equal volumes of 1.00 mol dm⁻³ aqueous acidified potassium dichromate(VI) solution and 1.00 mol dm⁻³ aqueous chromium(III) sulfate solution.
>
> Describe how the mixture should be changed to allow the standard electrode potential for the Cr₂O₇²⁻(aq) / Cr³⁺(aq) electrode to be measured.
>
> Justify your answer.

<details markdown="1">
<summary>提示</summary>

1 mol $\ce{Cr2(SO4)3}$ 提供 2 mol Cr³⁺；1 mol $\ce{K2Cr2O7}$ 提供 1 mol Cr₂O₇²⁻。分别算混合后的离子浓度。

</details>

<details markdown="1">
<summary>评分解析与自查</summary>

MS 第 22 页。

使用 **2.00 mol dm⁻³ K₂Cr₂O₇**，仍与等体积的 **1.00 mol dm⁻³ Cr₂(SO₄)₃** 混合（1 分）。混合后两个氧化还原物种的浓度均为 **1.00 mol dm⁻³**（1 分）。酸化条件也必须满足，不能只检查盐的标签浓度。

**评分模型与配液边界：**上面保留 January 2025 MS p.22 的浓度要求，是理论稀释计算，不是已验证的室温配液方案。[Thermo Fisher 的试剂资料](https://www.fishersci.fi/shop/products/potassium-dichromate-99-5-analysis-thermo-scientific/p-43068)给出 K₂Cr₂O₇ 摩尔质量 294.19 g mol⁻¹、水中 20 °C 溶解度 125 g L⁻¹；2.00 mol dm⁻³ 对应每升最终溶液 588 g，不能据此称所需室温水溶液已可实际配制。真实方案需另外核对温度、介质、溶解度口径和安全条件；不把加热配制或 Cr(VI) 操作作为学生在此执行的要求。

**复做：**不用记结论，从 $n=cV$ 与最终总体积重新推导。

</details>

<span id="e2从电势预测氧化还原方向"></span>

## E2：从电势预测氧化还原方向 {#redox-direction}

电势表通常列出**还原**半反应。$E^\circ$ 越正，左侧氧化态物种通常越容易接受电子，作为氧化剂的能力越强。较负电势对右侧的还原态物种通常有较强还原能力。

做题顺序：**选还原半反应 → 将另一式反向为氧化 → 配平电子 → 相加 → 算电势**。

$$E_{cell}^\circ=E_{reduction}^\circ-E_{oxidation\,couple}^\circ.$$

这里被减去的仍是表中该对物种的**还原电势**。电子数配平时，半反应可以倍乘，**电势不能倍乘**。正电势对应标准条件下有热力学驱动力；实际反应还可能受到速率、非标准浓度等影响，不保证肉眼立即看到变化。

### 例题 2 — 配平电子，不倍乘电势（自拟） {#example-2}

**Question:** Can Zn reduce Ag⁺ under standard conditions? Use Ag⁺/Ag = +0.80 V and Zn²⁺/Zn = −0.76 V. Write the overall equation and standard EMF.

**方法：**保留表中银的还原方向，将锌的半反应反向为氧化。

1. 每个银离子接受一个电子，每个锌原子放出两个电子。
2. 将银的半反应乘 2，再消去两个电子。
3. 锌的**还原电势**只减一次：

$$\ce{Zn + 2Ag+ -> Zn^{2+} + 2Ag}$$

$$E_{cell}^\circ=0.80-(-0.76)=+1.56\,\mathrm V.$$

**答案与独立检查：**标准条件下还原热力学可行。两侧各有一个 Zn、两个 Ag，电荷均为 +2。银的系数为 2，但 +0.80 V 不倍乘：电势是每单位电荷的能量，不是转移的总能量。用同样方法分别测试 [Q3](#q3) 的两步还原。

<span id="真题为什么还原会停在-fe"></span>

### Q3 — 真题：为什么还原会停在 Fe²⁺？ {#q3}

**OxfordAQA CH03 · June 2026 · 06.1 · 2 marks**

**课程说明：**用于本题的 Table 5 条目如下：

| Electrode half-equation | $E^\circ\,/\,\mathrm V$ |
| --- | --- |
| $\ce{Fe^{2+}(aq) + 2e^- -> Fe(s)}$ | −0.44 |
| $\ce{Cu^{2+}(aq) + 2e^- -> Cu(s)}$ | +0.34 |
| $\ce{Fe^{3+}(aq) + e^- -> Fe^{2+}(aq)}$ | +0.77 |

> Use the data in Table 5 to explain why Cu reduces Fe³⁺ in aqueous solution to Fe²⁺ but does not reduce the Fe²⁺ any further.

<details markdown="1">
<summary>提示</summary>

两次都以 Cu 被氧化为 Cu²⁺ 配对。第一步还原 Fe³⁺，第二步还原 Fe²⁺；分别求 $E_{cell}^\circ$。

</details>

<details markdown="1">
<summary>评分解析与自查</summary>

MS 第 19 页。

第一步 $E_{cell}^\circ=0.77-0.34=+0.43$ V，可还原 Fe³⁺ 为 Fe²⁺；第二步 $E_{cell}^\circ=-0.44-0.34=-0.78$ V，没有标准条件下的正电势驱动力。两步判断各 1 分。

第一步总反应为 $\ce{Cu + 2Fe^{3+} -> Cu^{2+} + 2Fe^{2+}}$。Fe³⁺ 的系数是 2，但 +0.77 V 不乘 2。

</details>

<span id="e3电池充电与-rp6"></span>

## E3：电池与充电 {#cells-and-practical}

**一次电池 primary cell** 的反应通常不便逆转；**可充电电池 secondary cell** 用外部电源驱动放电反应的逆反应。判断充电方程式时，先得到放电总反应，再反向。

**氢燃料电池 fuel cell** 持续输入燃料与氧化剂。酸性体系中：

$$\ce{2H2 -> 4H+ + 4e^-}$$

$$\ce{O2 + 4H+ + 4e^- -> 2H2O}.$$

总反应为 $\ce{2H2 + O2 -> 2H2O}$。优点是使用时没有 CO₂ 作为该反应产物；评价还要考虑制氢来源、储运、设备成本和安全，不能直接写“完全没有环境影响”。碱性体系中半反应会改用 OH⁻，但总反应相同。

**大纲要求的碱性氢氧燃料电池**分别为：

$$\ce{2H2 + 4OH^- -> 4H2O + 4e^-}$$

$$\ce{O2 + 2H2O + 4e^- -> 4OH^-}.$$

两式相加，电子和 OH⁻ 消去，再约去两侧的水，得到同一个总反应。H₂ 电极发生氧化，O₂ 电极发生还原；电子经外电路从燃料侧流向氧侧。

**条件变化的定性分析：**对 $\ce{Cu^{2+} + 2e^- <=> Cu}$，增大 Cu²⁺ 浓度使还原倾向增强、电极电势更正；降低 Cu²⁺ 浓度则相反。先从半反应与平衡解释，不能把非标准读数自动当作 $E^\circ$；本课程不要求 Nernst 方程的定量计算。

### 例题 3 — 从放电反向得到充电（自拟） {#example-3}

**Question:** A model rechargeable cell has discharge half-equations $\ce{A -> A^{2+} + 2e^-}$ and $\ce{B^{2+} + 2e^- -> B}$. Write the overall charging equation. A and B denote hypothetical electrode materials, not a claimed practical battery.

**方法：**先合并放电，再将**整个**方程式反向。

1. 消去两个电子：$\ce{A + B^{2+} -> A^{2+} + B}$。
2. 将总反应反向得到充电：$\boxed{\ce{A^{2+} + B -> A + B^{2+}}}$。
3. 外部电源驱动这个逆向反应。

**独立检查：**两侧各有一个 A、一个 B，电荷均为 +2；总反应没有游离电子。只反转一个半反应会使电子位于同侧，无法消去。现在尝试 [Q4](#q4)。

<span id="真题充电方向与电解液选择"></span>

### Q4 — 真题：充电方向与电解液选择 {#q4}

**OxfordAQA CH03 · June 2024 · 04.5–04.6 · 1 + 1 marks**

The half-equations at each of the electrodes in one type of lithium cell are:

| Electrode | Half-equation | $E^\circ\,/\,\mathrm V$ |
| --- | --- | --- |
| Positive | $\ce{Li+ + MnO2 + e^- -> LiMnO2}$ | −0.15 |
| Negative | $\ce{Li+ + e^- -> Li}$ | −3.05 |
{: .wide-table}

> **04.5** Deduce the overall equation for the reaction when this cell is being recharged.
>
> **04.6** Suggest why there must be no water in this cell.

<details markdown="1">
<summary>提示</summary>

放电时 Li 被氧化，而正极半反应按表中方向进行。水是否会与金属 Li 反应？

</details>

<details markdown="1">
<summary>评分解析与自查</summary>

MS 第 18 页。

04.5：$\ce{LiMnO2 -> Li + MnO2}$（1 分）。04.6：金属 Li 会与水反应（1 分），消耗电极材料；不能只写“水导电”。

</details>

## RP6：EMF 的测量与评价 {#rp6-measurement}

**RP6 测量流程：**准备两个半电池，用合适的盐桥连接，以高电阻电压表测开路 EMF；标明温度、浓度和气体压力。高电阻减小电流与体系组成变化。对照预期符号检查接线方向，重复测量，避免污染电极和交叉混合溶液。

### 盐桥的相容性 {#salt-bridge}

**盐桥需要与两边体系相容。**不能与电极物种发生沉淀、酸碱或氧化还原反应。例如含 Cl⁻ 的盐桥可能被强氧化剂氧化；含 OH⁻ 的盐桥会消耗 H⁺，也会使某些金属水合离子沉淀。不要不看体系就统一选择 NaCl。

### RP6 独立任务：分析原始读数 {#rp6-data}

**自拟任务；下方全部读数为教学分析构造，不是学生的实测结果。** Use the Zn/Cu half-cell potentials in Example 1. The positive voltmeter lead is connected to Cu. Before using the records, predict the standard EMF and electron-flow direction, choose between KNO₃ and NaOH for a salt bridge, and justify your choice for these two metal-ion solutions.

All sets use clean electrodes, fresh solutions, a high-resistance voltmeter and 298 K. Concentrations below are in mol dm⁻³. Sets A and B use meter M, checked against a voltage reference. Set C uses meter N; apart from the meter, its stated conditions match A. The 0.001 V display step is a resolution, not an established total uncertainty.

Concentrations and meter selection:

- **A:** Zn²⁺ = 1.00; Cu²⁺ = 1.00; meter M.
- **B:** Zn²⁺ = 1.00; Cu²⁺ = 0.0100; meter M.
- **C:** Zn²⁺ = 1.00; Cu²⁺ = 1.00; meter N.

| Set | Reading 1 / V | Reading 2 / V | Reading 3 / V |
| --- | --- | --- | --- |
| A | 1.096 | 1.098 | 1.097 |
| B | 1.038 | 1.040 | 1.039 |
| C | 1.076 | 1.078 | 1.077 |

An independent check applies a 1.100 V reference to meter N using the same range and polarity. N displays 1.080 V. Assume an additive offset over the narrow voltage range used here; this assumption would need checking for other ranges.

1. Calculate the mean and full range of each set. Compare repeatability before judging agreement with the standard prediction.
2. Use A versus B to judge the effect of concentration. Explain why the B readings must not be labelled standard EMF, or dismissed as a faulty meter merely because they differ from the standard value. No Nernst-equation calculation is required.
3. Use the independent reference check to estimate and correct the offset in C. Does taking many more readings remove this offset? State one further comparison needed before attributing every remaining difference from the standard prediction to measurement error.
4. Propose one change addressing each identified cause, with a reason. For a real experiment, include suitable eye protection, teacher-approved metal-salt handling and waste collection; this data task does not establish completion of practical work.

<details markdown="1">
<summary>提示</summary>

先从两个还原电势预测，再分开三种比较：同一组内的重复读数、保持仪表不变而改变浓度、保持浓度不变而改变仪表。电压基准能独立于电化学模型检查仪表。

</details>

<details markdown="1">
<summary>反馈与再尝试</summary>

标准预测为 +1.10 V，外电路电子从 Zn 流向 Cu。对本题溶液，KNO₃ 避免了 NaOH 接触金属离子时预期出现的氢氧化物沉淀；相容性是化学选择，不只是“能导电”。

| 组别 | 均值 / V | 全极差 / V |
| --- | --- | --- |
| A | 1.097 | 0.002 |
| B | 1.039 | 0.002 |
| C | 1.077 | 0.002 |

三组观察到的极差同样小，支持这批读数有相近的重复性，不代表准确度相同。Cu²⁺ 浓度降低使 Cu 还原电势降低，故电池 EMF 降低；B 是刻意设置的非标准条件。研究浓度影响时保留这一改变，只有比较标准条件时才恢复两边浓度。

仪表 N 在这一范围附近估计有 **−0.020 V 偏移**。给 C 加上 0.020 V，修正均值为 **1.097 V**，与 A 一致。重复测量不能消除偏移，应校准仪表，或作有依据并带不确定度的修正。A 与表列预测仍差 0.003 V；在指定单一原因前，应检查温度、实际离子活度／浓度、液接效应及预测值本身的不确定度和舍入。小极差本身不构成总不确定度预算。

**再尝试：**若基准电压的读数反而为 1.120 V，先说修正方向，再计算。若改进只写“多做几次”，说明它能估计哪一种随机变化，又留下了哪一种系统原因。

</details>

## 练习 {#practice}

合上提示与解析作答。本页 Q 编号用于定位，原年份、原题号和分值仍保留在每组真题旁。

| 题目 | 训练目标 |
| --- | --- |
| [Q1](#q1) | SHE 的条件、数值与单位 |
| [Q2](#q2) | 混合后的离子浓度 |
| [Q3](#q3) | 每一步分别判断，电势不倍乘 |
| [Q4](#q4) | 充电方向与水的相容性 |
| [Q5](#q5) | 表笔反接与非标准浓度；自拟 |
| [Q6](#q6) | 碱性燃料电池的路径与实验局限；自拟 |
| [RP6 数据](#rp6-data) | 均值、重复性、浓度控制与仪表偏移；自拟 |

### Q5 — 符号与浓度检查（自拟） {#q5}

**Question:** In the Zn/Cu cell of Example 1, a student exchanges the voltmeter leads. State the new reading and whether the spontaneous reaction changes. With the original leads restored, Cu²⁺ concentration is then reduced below 1.00 mol dm⁻³ while the other half-cell remains standard. Predict the qualitative change in EMF and explain whether the reading is still a standard EMF.

<details markdown="1">
<summary>提示</summary>

区分测量极性改变与化学条件改变。Cu²⁺ 浓度降低时，还原半反应的平衡倾向哪边？

</details>

<details markdown="1">
<summary>解析与自查</summary>

自拟练习，无官方分值。

反接表笔读数为 −1.10 V，自发反应与电子流向不变。接回原来的表笔，恢复正读数的约定。Cu²⁺ 浓度降低使 Cu 电极电势更负，电池 EMF 减小。该读数不再是标准 EMF，因为 Cu²⁺ 浓度不满足标准条件；这里不求非标准 EMF 的数值。

**检查：**回看[例题 1](#example-1)，区分电池表示的约定与表笔极性。若因移动表笔就反转化学反应，先画外电路并标电子流向，再复做。

</details>

### Q6 — 燃料电池解释与测量（自拟） {#q6}

**Question:** Use the alkaline hydrogen–oxygen half-equations in E3 to obtain the overall reaction. State what carries charge through the external circuit and through the electrolyte. Explain why a high-resistance voltmeter is used in RP6 and why “no CO₂ during operation” does not establish zero environmental impact.

<details markdown="1">
<summary>提示</summary>

消去电子、OH⁻ 与两侧同时出现的水。将电池运行、测量过程与制氢来源分开解释。

</details>

<details markdown="1">
<summary>解析与自查</summary>

自拟练习，无官方分值。

总反应为 2H₂ + O₂ → 2H₂O。电子经过外电路，离子在电解液中传递电荷。电压表高电阻使电流和组成变化尽量小，测得接近开路条件的 EMF。制氢可能使用化石燃料或有相关排放的电力，储运也可能产生环境影响。

**检查：**总反应两侧各有四个 H 原子、两个 O 原子，电荷均为零。若把电子放进盐桥，回到 [E1](#standard-electrodes)，分别画电子与离子箭头，再复做。

</details>

## 快速参考与改错 {#quick-reference}

| 检查项 | 考试陷阱 |
| --- | --- |
| SHE：298 K、100 kPa H₂、1.00 mol dm⁻³ H⁺ | 只写“室温”，或只查盐的浓度 |
| 还原电势：越正，接受电子倾向越强 | 将还原态金属说成强氧化剂 |
| $E_{cell}^\circ=E_{right}^\circ-E_{left}^\circ$；两者都是还原电势 | 减去已经反号的氧化电势 |
| 倍乘半反应以消电子；不倍乘电势 | 混淆能量与每单位电荷的能量 |
| 正标准 EMF 表示热力学可行 | 忽略速率与条件，声称立刻反应 |
| 原子、电荷守恒；总反应中电子消去 | 充电时只反转一个半反应 |
| 外部电子，内部离子 | 声称电子通过盐桥 |
| 盐桥不能与任一半电池反应 | 所有电池都选 NaCl |

| 你的错误 | 回看路径 | 复做 |
| 盐浓度对，离子浓度错 | [E1 混合题](#q2)，数每个化学式的离子 | [Q2](#q2)，分别算最终浓度 |
| EMF 符号或电子方向错 | [例题 1](#example-1) | [Q5](#q5) |
| 电势被倍乘 | [例题 2](#example-2) | [Q3](#q3)，另行检查电荷 |
| 充电总反应还留电子 | [例题 3](#example-3) | [Q4](#q4) |
| 盐桥走电子，或燃料电池“无影响” | [E3 与 RP6](#cells-and-practical) | [Q6](#q6) |

用一句话写出错误原因，再合上解析复做。

<span id="闭卷检查与下一步"></span>

## 闭卷检查与下一步 {#completion}

画出 SHE 并标三个条件；解释为什么盐桥传递离子；从两个半反应写出总反应和 EMF；说明电势为何不随系数倍乘。

**完成标准：**能标出标准条件、正确配平并预测方向与 EMF，解释电势不倍乘，区分电子和离子路径，并从放电得到充电反应。能分析 RP6 原始读数，分开受控的化学改变与仪表偏移，并提出对应改进；已合上解析复做错题。

上一课：[热力学](/zh/alevel/a2-chemistry/thermodynamics/) · [返回课程](/zh/alevel/a2-chemistry/) · 下一课：[酸、碱与缓冲溶液](/zh/alevel/a2-chemistry/acids-bases-and-buffers/)。
