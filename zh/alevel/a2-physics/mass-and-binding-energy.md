---
title: 质量与结合能
layout: subjects
mathjax: true
grade: a2
subject: a2-physics
lang: zh-CN
translation_of: /alevel/a2-physics/mass-and-binding-energy/
permalink: /zh/alevel/a2-physics/mass-and-binding-energy/
toc_headings: h2, h3, h4
study_page: true
---

[A2 物理](/zh/alevel/a2-physics/) · PH04 · 3.12.2

为什么把粒子结合起来反而能释放能量？先为系统记清质量账，区分原子核与原子，再连接质量差、结合能图像和反应释能。

**开始前：**回顾核素记号、质子中子数、能量守恒与 J/eV 单位。[核半径](/zh/alevel/a2-physics/nuclear-radius/)讨论尺寸模型；本课讨论静能。先完成一个核的质量账，再处理整个反应。

## 起步判断：先认清质量对象 {#checkpoint-mass-objects}

A neutral helium-4 atom and a helium-4 nucleus contain the same numbers of protons and neutrons. Do they have the same mass? What must be tracked before using an atomic mass in a nuclear mass calculation?

<details markdown="1">
<summary>检查对象</summary>

中性原子多了两个电子，质量中还包含电子结合能的贡献。不能把原子质量与自由质子质量混用，却不交代电子账。在本课 MeV 精度下，电子结合能通常可忽略；电子静质量则是另一回事。

</details>

## 静能与原子质量单位 {#mass-energy}

在系统自身静止参考系中比较，静能为 $E_{\mathrm{rest}}=Mc^2$。没有加入物质而增加内能，会增加系统静质量；能量离开则使静质量减小。物体不会仅因运动变快就增加**静质量**。核反应总账须包含逸出的辐射及动能。

$$\Delta E_{\mathrm{rest}}=\Delta M c^2,\qquad 1\,\mathrm{eV}=1.60\times10^{-19}\,\mathrm J,\qquad 1\,\mathrm{MeV}=1.60\times10^{-13}\,\mathrm J.$$

原子质量单位 u 是基态中性碳-12 原子质量的十二分之一；它是质量单位，不是能量单位。常用能量当量为 $1\,\mathrm u\,c^2\approx931.5\,\mathrm{MeV}$。应沿用题给常量，特别是在两个相近质量相减前保留足够位数。

### 例题 1：解释近似换算 {#example-1}

*改编自 OxfordAQA 9630 PH04 June 2024 Q4.1；已核对 QP p.8与MS p.11。 新增舍入精度讨论。*

Using $1\,\mathrm u=1.661\times10^{-27}\,\mathrm{kg}$, $c=3.00\times10^8\,\mathrm{m\,s^{-1}}$ and the joule-to-MeV conversion above, show that the energy equivalent is about 930 MeV. Explain why the intermediate result need not equal 931.5 exactly.

$$1\,\mathrm u\,c^2=(1.661\times10^{-27})(3.00\times10^8)^2\,\mathrm J=1.4949\times10^{-10}\,\mathrm J,$$

$$\frac{1.4949\times10^{-10}}{1.60\times10^{-13}}\,\mathrm{MeV}\approx934\,\mathrm{MeV}\approx930\,\mathrm{MeV}\quad(2\text{ significant figures}).$$

题给常量已经舍入，因此约 930 MeV 的要求与通常的 931.5 MeV 当量在所述精度上相容。质量数值不能不经转换就直接当作能量数值。

## 一个核：质量亏损与结合能 {#mass-defect}

结合能是把一个核完全拆为自由质子和中子、并使末态没有相对动能所需的能量。若反转相同初末状态，自由核子结合成核会释放同样能量。结合后的核静质量低于同一组分离核子的总静质量。

若使用**核质量** $M_{\mathrm{nuc}}$，定义正的质量亏损与总结合能：

$$\delta m=Z m_p+(A-Z)m_n-M_{\mathrm{nuc}},\qquad B=\delta m c^2,\qquad b=\frac BA.$$

<img src="/assets/img/physics-nuclear-binding-levels.svg" alt="结合能讲解示意：相同核子完全分离时的静能高于结合成核后的静能。向上拆核需要能量 B，反向结合释放同样大小的 B；图中未给出数值答案。" width="520" height="330" data-lazy-ignore="true">

总量 $B$ 对应一个核；$b$ 是每核子的平均量。两者都不能不指定反应就直接当作燃料可释放的能量。较大的 $b$ 可用于广泛比较核子结合紧密程度，但不能单独证明所有衰变渠道都被禁止。

### 例题 2：一致使用核质量 {#example-2}

*自拟题；题给质量为经过舍入的教学数值。*

For a helium-4 nucleus use $m_p=1.00728\,\mathrm u$, $m_n=1.00867\,\mathrm u$, $M_{\mathrm{nuc}}=4.00150\,\mathrm u$ and $1\,\mathrm u\,c^2=931.5\,\mathrm{MeV}$. Find mass defect, total binding energy and binding energy per nucleon.

$$\delta m=2(1.00728)+2(1.00867)-4.00150=0.03040\,\mathrm u,$$

$$B=0.03040(931.5)\,\mathrm{MeV}\approx28.3\,\mathrm{MeV},\qquad b=\frac{28.3176}{4}\,\mathrm{MeV}\approx7.08\,\mathrm{MeV}.$$

拆核所需功为正；整个核形成时可释放约 28.3 MeV，不是 7.08 MeV。最后一个数是每核子平均量。逆向检查应把质量亏损加回核质量，恢复分离核子总质量。

## 原子质量：保留电子账 {#atomic-masses}

若题目给中性原子质量，可采用另一条结合能质量账：

$$\delta m\approx Zm({}^{1}\mathrm H)+(A-Z)m_n-M_{\mathrm{atom}}.$$

每个中性氢原子含一个质子和一个电子，电子数与末态中性原子相同；这里忽略电子结合能的小差异。不能因此把氢原子质量换成裸质子质量。反应题先守恒电荷和核子数，再检查电子数是否抵消；正电子、电子或离子必须另记质量账。

## 一个反应：相加初末总量 {#reaction-energy}

定义反应释能 $Q$，放能反应为正：

$$Q=(M_{\mathrm{initial}}-M_{\mathrm{final}})c^2=\sum B_{\mathrm{products}}-\sum B_{\mathrm{reactants}}.$$

用结合能作差时，要求初末具有相同的总核子组成；自由核子也须计入，其核结合能取零。应使用所有核的总结合能并计入个数。释放的能量出现在动能和辐射中，不是完整系统的总能量凭空减少。

### 例题 3：聚变反应中的原子质量账 {#example-3}

*改编自 OxfordAQA 9630 PH04 June 2024 Q4.2；已核对 QP p.8与MS p.11。 明确把题给数值视为中性原子质量，并补充电子数核对与解释。*

Consider the reaction:

$${}^{3}_{2}\mathrm{He}+{}^{3}_{2}\mathrm{He}\rightarrow{}^{4}_{2}\mathrm{He}+2\,{}^{1}_{1}\mathrm p.$$

Use neutral atom masses $M({}^{3}\mathrm{He})=3.016029\,\mathrm u$, $M({}^{4}\mathrm{He})=4.002603\,\mathrm u$, $M({}^{1}\mathrm H)=1.007823\,\mathrm u$, neglect electronic binding-energy differences and use 931.5 MeV per u of mass difference. Find the energy release.

$$\delta m=2(3.016029)-4.002603-2(1.007823)=0.013809\,\mathrm u,\qquad Q=0.013809(931.5)\,\mathrm{MeV}\approx12.9\,\mathrm{MeV}.$$

初末核的总质子数都是四，相应中性原子账的两侧电子数也都是四，因此能用这组原子质量估计核反应能量。题给氢原子值不是裸质子质量。正的质量差与反应释放动能相符。

## 结合能曲线：先看清纵轴 {#binding-energy-graph}

<img src="/assets/img/physics-nuclear-binding-curve.svg" alt="教学构造图：横轴为核子数，纵轴为每核子的平均结合能，单位 MeV。标记点为 A=100 时 8.6 MeV、A=200 时 7.9 MeV。曲线不是同位素实测数据，也未给出反应释能答案。" width="520" height="360" data-lazy-ignore="true">

教学示意曲线在铁、镍附近较高。若末态**总**结合能增加，轻核聚变或重核裂变可以释放能量。图像不是适用于任意反应的万能规则：仍需检查可能产物、守恒和核子总数。纵轴不直接给出整个核的结合能，也不表示反应速率或反应堆条件。

## 数据探究：一次反应还是两次？ {#data-binding-records}

*改编数据任务，来源：OxfordAQA 9630 PH04 June 2024 Q4.3；已核对 QP p.9与MS p.11。 明确给出每周期的反应次数，问题与再尝试均经过改编。数值是题给教学输入，不是本校实测结果。*

A reaction is:

$${}^{2}_{1}\mathrm H+{}^{1}_{1}\mathrm p\rightarrow{}^{3}_{2}\mathrm{He}+\gamma.$$

Use the table of total nuclear binding energies. A specified cycle contains **two copies of this reaction**. Find the energy release per reaction and the contribution per cycle in J. Explain the factor connecting them, and predict the change if there were three copies instead.

| Particle | Total binding energy / pJ |
| --- | --- |
| Deuterium nucleus | 0.35593 |
| Proton | 0 |
| Helium-3 nucleus | 1.23489 |

<details markdown="1">
<summary>提示</summary>

这些是核的总结合能，不能再乘核子数；计入反应次数后，把 pJ 换成 J。

</details>

<details markdown="1">
<summary>分析与再尝试</summary>

$$Q_{\mathrm{event}}=(1.23489-0.35593)\,\mathrm{pJ}=0.87896\,\mathrm{pJ},\qquad Q_{\mathrm{cycle}}=2Q_{\mathrm{event}}=1.75792\times10^{-12}\,\mathrm J.$$

乘二来自反应次数，不是单位换算或核子数。三次反应贡献约 2.64 pJ。**再尝试：**若表里给的是每核子结合能，应先把每个核转为总量，再相减。

</details>

## 练习 {#practice}

### 练习 1：切换到原子质量 {#question-1}

*自拟题。*

For a neutral carbon-12 atom take mass exactly $12\,\mathrm u$, neutral hydrogen mass $1.007825\,\mathrm u$ and neutron mass $1.008665\,\mathrm u$. Neglect electronic binding-energy differences. Find total binding energy and binding energy per nucleon using 931.5 MeV per u. Explain how the electron count is handled.

<details markdown="1">
<summary>提示</summary>

碳核有六个质子和六个中子；末态质量含电子时，应使用氢原子。

</details>

<details markdown="1">
<summary>解答与再尝试</summary>

$$\delta m=6(1.007825)+6(1.008665)-12=0.098940\,\mathrm u,\quad B\approx92.2\,\mathrm{MeV},\quad b\approx7.68\,\mathrm{MeV}.$$

六个氢原子与一个中性碳原子都含六个电子；忽略电子结合能后，电子质量贡献抵消。**再尝试：**为什么把裸质子质量直接与 12 u 混用，会低估结合能？

</details>

### 练习 2：由结合能反推核质量 {#question-2}

*自拟题。*

A nucleus contains eight protons and eight neutrons and has total binding energy 127.6 MeV. Use the free-nucleon masses in Example 2 and 931.5 MeV per u. Find its nuclear mass in u. Should it be greater or smaller than the free-nucleon sum?

<details markdown="1">
<summary>提示</summary>

倒推正质量亏损关系，并保留中间位数。

</details>

<details markdown="1">
<summary>解答与再尝试</summary>

$$M_{\mathrm{nuc}}=8(1.00728)+8(1.00867)-\frac{127.6}{931.5}\approx15.99062\,\mathrm u.$$

结合核比同一组自由核子轻。多列出的中间位数用于复算，不代表实验精度。**再尝试：**组成固定时，结合能增大使核静质量减小。

</details>

### 练习 3：从图高转为反应总量 {#question-3}

*改编自 OxfordAQA 9630 PH04 June 2024 Q14；已核对 QP p.24 已查看原图与MS p.20 答案 D。 核素标签、产物和图上数值改为明确的简化模型，并使用原创教学图。*

Use the two marked points on the teaching binding-energy graph. In a simplified model, a nucleus with nucleon number 200 splits into two identical nuclei of nucleon number 100, with no free neutrons emitted. Estimate total energy release in MeV and explain why subtracting the two graph heights alone is insufficient.

<details markdown="1">
<summary>提示</summary>

纵轴是每核子能量，两侧都要计入全部 200 个核子。

</details>

<details markdown="1">
<summary>解答与再尝试</summary>

$$Q=2(100)(8.6)-200(7.9)=140\,\mathrm{MeV}.$$

图高差是每核子 0.7 MeV，不是一次裂变的总释能。这里已经为简化模型说明产物数和核子总数。**再尝试：**若实际产物含自由中子，须重新列总结合能账；自由中子的核结合能为零。

</details>

### 练习 4：检查符号与系统边界 {#question-4}

*自拟题。*

An excited nucleus emits a 2.0 MeV photon. Neglect recoil energy for this estimate. Use $c=3.00\times10^8\,\mathrm{m\,s^{-1}}$ and $1\,\mathrm{MeV}=1.60\times10^{-13}\,\mathrm J$. Estimate the change of nuclear rest mass, defining change as final minus initial. Has total energy disappeared?

<details markdown="1">
<summary>提示</summary>

末减初的质量变化与正的损失大小符号不同；总能量账要包含光子。

</details>

<details markdown="1">
<summary>解答与再尝试</summary>

$$\Delta M\approx-\frac{2.0(1.60\times10^{-13})}{(3.00\times10^8)^2}\approx-3.6\times10^{-30}\,\mathrm{kg}.$$

核静能降低，光子把能量带走；把两者都包含在内，总能量守恒。**再尝试：**若计入反冲，核静能减少量应包含光子能量和反冲动能。

</details>

### 练习 5：诊断两种质量账 {#question-5}

*自拟题。*

A student calculates helium binding energy using the mass of a neutral helium atom but the masses of two bare protons and two neutrons, then divides the result by four and calls it the total binding energy. Identify both errors and describe a consistent correction without looking up new numbers.

<details markdown="1">
<summary>提示</summary>

先查电子数，再区分总能量与平均量。

</details>

<details markdown="1">
<summary>解答与再尝试</summary>

第一条账只在原子一侧含电子。应使用核质量配裸质子，或使用中性氢原子配中性氦原子，并交代电子结合能近似。除以四后得到每核子结合能，不是总结合能。**再尝试：**原子与核即使核子数相同，质量对象也不同。

</details>

### 练习 6：用英文独立说明机制 {#question-6}

*自拟题。*

Write a short explanation of how fusion of suitable light nuclei or fission of suitable heavy nuclei can release energy. Refer to the vertical axis of the binding-energy graph, total binding energy, rest mass, and the forms carrying released energy. Does a favourable energy balance alone guarantee a rapid reaction?

<details markdown="1">
<summary>提示</summary>

先计入全部核子，再把更大的总结合能连接到更小的总静质量。

</details>

<details markdown="1">
<summary>解答与再尝试</summary>

可行反应的产物总结合能较大、总静质量较小，差额出现在动能与辐射中，总能量守恒。图给每核子平均结合能，因此仍须检查总量与守恒。释能为正不能单独确定速率或消除反应势垒。可参考英文表达：For a suitable reaction, the products have greater total binding energy and lower total rest mass. The difference appears as kinetic energy and radiation. **再尝试：**区分这条能量账与后续要学习的温度、中子条件。

</details>

## 速查 {#quick-reference}

| 质量账 | 关系与条件 |
| --- | --- |
| 核质量 | $\delta m=Zm_p+(A-Z)m_n-M_{\mathrm{nuc}}$ |
| 中性原子质量 | $\delta m\approx Zm({}^{1}\mathrm H)+(A-Z)m_n-M_{\mathrm{atom}}$；忽略电子结合能差 |
| 一个核 | $B=\delta m c^2$；$b=B/A$ |
| 一个反应 | $Q=(M_{\mathrm{initial}}-M_{\mathrm{final}})c^2$；计入每个粒子与个数 |

[上一课：核半径](/zh/alevel/a2-physics/nuclear-radius/) · [PH04 课程目录](/zh/alevel/a2-physics/#ph04-thermal-physics)

## 来源与范围 {#sources}

OxfordAQA 9630 PH04，[大纲正文 v4.4](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-international-as-and-a-level-physics-specification.pdf) 3.12.2，印刷第 28 页/PDF 第 27 页，2026-10-21 核对。June 2024 QP 第 8–9/24 页与配套 MS 第 11/20 页支持例题 1/3、反应数据任务及练习 3；已目视原表与图。本页明确原子质量标签及练习 3 的简化反应模型，避免复制有歧义的粒子标签。Jim Breithaupt 第 24.2–24.3 节印刷第 422–427 页/PDF 第 438–443 页辅助讲解，没有复刻整道教材题。其他示范、任务及教学结合能曲线为自拟。反应堆运行、安全及太阳氢循环仍需后续学习页，本页不代表那些条目完成。
