---
title: 电极电势与电池 · Electrode potentials
layout: subjects
mathjax: true
lang: zh-CN
grade: a2
subject: a2-chemistry
permalink: /alevel/a2-chemistry/electrode-potentials/
toc_headings: h2
study_page: true
---

[CH03 课程](/alevel/a2-chemistry/) · 3.1.9 · 教材第 20 章，印刷 308–321 页

电极电势帮助我们比较两对物质接受电子的倾向。先复习氧化数与半反应配平，再学习标准电极、反应预测和电池应用。

**先想一想：**$\ce{Zn^{2+} + 2e^- -> Zn}$ 的电势很负，是否说明 Zn²⁺ 是很强的氧化剂？先判断“接受电子”和“放出电子”分别对应哪一个物种。

<span id="standard-electrodes"></span>

## E1：标准电极、测量与电池表示

**Standard electrode potential，$E^\circ$** 是在标准条件下，某电极相对于标准氢电极测得的电势。标准氢电极（SHE）的电势定义为 0 V；溶液物种浓度为 1.00 mol dm⁻³，气体压力为 100 kPa，温度通常为 298 K。

SHE 使用铂电极／铂黑表面，让 H₂ 气体与含 H⁺ 的溶液接触：

$$\ce{2H+(aq) + 2e^- <=> H2(g)}.$$

金属—金属离子电极可用该金属浸入其离子溶液；若两种氧化还原物种都在溶液中，则需要惰性的导电电极，例如 Pt。**盐桥 salt bridge** 让离子移动以维持电荷平衡，完成内部回路；电子在外部导线中移动，不能说“电子经过盐桥”。

**电池表示（自拟示范）：**

$$\mathrm{Zn(s)\vert Zn^{2+}(aq)\Vert Cu^{2+}(aq)\vert Cu(s)}.$$

单竖线表示相界面，双竖线表示盐桥；同一溶液相中的物种用逗号分隔。按此写法 $E_{cell}^\circ=E_{right}^\circ-E_{left}^\circ$。如右边为 SHE，左边为 Zn²⁺/Zn，测得 $0-(-0.76)=+0.76$ V；反向接线则读数改变符号。

### 真题：标准氢电极的条件

**OxfordAQA CH03 · June 2024 · 04.1 · 2 marks**

> State three conditions needed for the standard hydrogen electrode.

<details markdown="1">
<summary>提示：分别检查温度、气体和溶液</summary>

标准条件不只是“室温”。三种条件都写出数值与单位。

</details>

<details markdown="1">
<summary>评分解析：MS 第 17 页</summary>

298 K（25 °C）；H₂ 压力 100 kPa；H⁺ 浓度 1.00 mol dm⁻³（本题评分标准以 HCl 溶液表示）。三项正确得 2 分，两项正确得 1 分。不要把 100 kPa 随手改成 1 atm。

</details>

### 真题：配溶液时真正要标准的是离子浓度

**OxfordAQA CH03 · January 2025 · 06.4 · 2 marks**

原卷的 solution E 是酸化的 $\ce{Cr2O7^{2-}}$／$\ce{Cr^{3+}}$ 半电池溶液。

> A student suggested that solution E should be prepared by mixing equal volumes of 1.00 mol dm⁻³ aqueous acidified potassium dichromate(VI) solution and 1.00 mol dm⁻³ aqueous chromium(III) sulfate solution.
>
> Describe how the mixture should be changed to allow the standard electrode potential for the Cr₂O₇²⁻(aq) / Cr³⁺(aq) electrode to be measured.
>
> Justify your answer.

<details markdown="1">
<summary>提示：稀释一半之前，盐里含几个 Cr³⁺？</summary>

1 mol $\ce{Cr2(SO4)3}$ 提供 2 mol Cr³⁺；1 mol $\ce{K2Cr2O7}$ 提供 1 mol Cr₂O₇²⁻。分别算混合后的离子浓度。

</details>

<details markdown="1">
<summary>评分解析：MS 第 22 页</summary>

使用 **2.00 mol dm⁻³ K₂Cr₂O₇**，仍与等体积的 **1.00 mol dm⁻³ Cr₂(SO₄)₃** 混合（1 分）。混合后两个氧化还原物种的浓度均为 **1.00 mol dm⁻³**（1 分）。酸化条件也必须满足，不能只检查盐的标签浓度。

**复做：**不用记结论，从 $n=cV$ 与最终总体积重新推导。

</details>

<span id="redox-direction"></span>

## E2：从电势预测氧化还原方向

电势表通常列出**还原**半反应。$E^\circ$ 越正，左侧氧化态物种通常越容易接受电子，作为氧化剂的能力越强。较负电势对右侧的还原态物种通常有较强还原能力。

做题顺序：**选还原半反应 → 将另一式反向为氧化 → 配平电子 → 相加 → 算电势**。

$$E_{cell}^\circ=E_{reduction}^\circ-E_{oxidation\,couple}^\circ.$$

这里被减去的仍是表中该对物种的**还原电势**。电子数配平时，半反应可以倍乘，**电势不能倍乘**。正电势对应标准条件下有热力学驱动力；实际反应还可能受到速率、非标准浓度等影响，不保证肉眼立即看到变化。

### 真题：为什么还原会停在 Fe²⁺？

**OxfordAQA CH03 · June 2026 · 06.1 · 2 marks**

用于本题的 Table 5 条目如下：

| Electrode half-equation | $E^\circ\,/\,\mathrm V$ |
| --- | --- |
| $\ce{Fe^{2+}(aq) + 2e^- -> Fe(s)}$ | −0.44 |
| $\ce{Cu^{2+}(aq) + 2e^- -> Cu(s)}$ | +0.34 |
| $\ce{Fe^{3+}(aq) + e^- -> Fe^{2+}(aq)}$ | +0.77 |

> Use the data in Table 5 to explain why Cu reduces Fe³⁺ in aqueous solution to Fe²⁺ but does not reduce the Fe²⁺ any further.

<details markdown="1">
<summary>提示：分别测试两步还原</summary>

两次都以 Cu 被氧化为 Cu²⁺ 配对。第一步还原 Fe³⁺，第二步还原 Fe²⁺；分别求 $E_{cell}^\circ$。

</details>

<details markdown="1">
<summary>评分解析：MS 第 19 页</summary>

第一步 $E_{cell}^\circ=0.77-0.34=+0.43$ V，可还原 Fe³⁺ 为 Fe²⁺；第二步 $E_{cell}^\circ=-0.44-0.34=-0.78$ V，没有标准条件下的正电势驱动力。两步判断各 1 分。

第一步总反应为 $\ce{Cu + 2Fe^{3+} -> Cu^{2+} + 2Fe^{2+}}$。Fe³⁺ 的系数是 2，但 +0.77 V 不乘 2。

</details>

<span id="cells-and-practical"></span>

## E3：电池、充电与 RP6

**一次电池 primary cell** 的反应通常不便逆转；**可充电电池 secondary cell** 用外部电源驱动放电反应的逆反应。判断充电方程式时，先得到放电总反应，再反向。

**氢燃料电池 fuel cell** 持续输入燃料与氧化剂。酸性体系中：

$$\ce{2H2 -> 4H+ + 4e^-},\qquad\ce{O2 + 4H+ + 4e^- -> 2H2O}.$$

总反应为 $\ce{2H2 + O2 -> 2H2O}$。优点是使用时没有 CO₂ 作为该反应产物；评价还要考虑制氢来源、储运、设备成本和安全，不能直接写“完全没有环境影响”。碱性体系中半反应会改用 OH⁻，但总反应相同。

**大纲要求的碱性氢氧燃料电池**分别为：

$$\ce{2H2 + 4OH^- -> 4H2O + 4e^-},\qquad\ce{O2 + 2H2O + 4e^- -> 4OH^-}.$$

两式相加，电子和 OH⁻ 消去，再约去两侧的水，得到同一个总反应。H₂ 电极发生氧化，O₂ 电极发生还原；电子经外电路从燃料侧流向氧侧。

**条件变化的定性分析：**对 $\ce{Cu^{2+} + 2e^- <=> Cu}$，增大 Cu²⁺ 浓度使还原倾向增强、电极电势更正；降低 Cu²⁺ 浓度则相反。先从半反应与平衡解释，不能把非标准读数自动当作 $E^\circ$；本课程不要求 Nernst 方程的定量计算。

### 真题：充电方向与电解液选择

**OxfordAQA CH03 · June 2024 · 04.5–04.6 · 1 + 1 marks**

The half-equations at each of the electrodes in one type of lithium cell are:

| Electrode | Half-equation | $E^\circ\,/\,\mathrm V$ |
| --- | --- | --- |
| Positive | $\ce{Li+ + MnO2 + e^- -> LiMnO2}$ | −0.15 |
| Negative | $\ce{Li+ + e^- -> Li}$ | −3.05 |

> **04.5** Deduce the overall equation for the reaction when this cell is being recharged.
>
> **04.6** Suggest why there must be no water in this cell.

<details markdown="1">
<summary>提示：先求放电反应，然后反向</summary>

放电时 Li 被氧化，而正极半反应按表中方向进行。水是否会与金属 Li 反应？

</details>

<details markdown="1">
<summary>评分解析：MS 第 18 页</summary>

04.5：$\ce{LiMnO2 -> Li + MnO2}$（1 分）。04.6：金属 Li 会与水反应（1 分），消耗电极材料；不能只写“水导电”。

</details>

**RP6 测量流程：**准备两个半电池，用合适的盐桥连接，以高电阻电压表测开路 EMF；标明温度、浓度和气体压力。高电阻减小电流与体系组成变化。对照预期符号检查接线方向，重复测量，避免污染电极和交叉混合溶液。

**盐桥需要与两边体系相容。**不能与电极物种发生沉淀、酸碱或氧化还原反应。例如含 Cl⁻ 的盐桥可能被强氧化剂氧化；含 OH⁻ 的盐桥会消耗 H⁺，也会使某些金属水合离子沉淀。不要不看体系就统一选择 NaCl。

## 闭卷检查与下一步

画出 SHE 并标三个条件；解释为什么盐桥传递离子；从两个半反应写出总反应和 EMF；说明电势为何不随系数倍乘。

下一主题：[酸、碱与缓冲溶液](/alevel/a2-chemistry/acids-bases-and-buffers/)。
