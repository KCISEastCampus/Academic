---
title: 热力学 · Thermodynamics
layout: subjects
mathjax: true
lang: zh-CN
grade: a2
subject: a2-chemistry
translation_of: /alevel/a2-chemistry/thermodynamics/
permalink: /zh/alevel/a2-chemistry/thermodynamics/
toc_headings: h2
study_page: true
---

[CH03 课程](/zh/alevel/a2-chemistry/) · 3.1.8 · 教材第 17 章，印刷 264–283 页

## 学习目标与先修 {#introduction}

- **学习：**从[方法选择](#method)找到任务类型，再完成编号示范。
- **作业帮助：**在[方法选择](#method)中找第一步和对应真题。
- **复习：**合上解析尝试[练习](#practice)，再用[快速参考](#quick-reference)补缺口。

**开始前：**应能配平方程式、辨认状态、计算物质的量并使用 Hess 定律。不确定时先回到 [AS 先修检查](/zh/alevel/a2-chemistry/#prerequisites)，再尝试循环。

这一章把“焓变定义”变成可计算的路径，再用熵与 Gibbs 自由能判断反应是否热力学可行。完成后应能独立画循环、处理符号和系数，并解释实验值与理想模型的差别。

**先想一想：**把固体盐拆成气态离子，与把气态离子放进水里，能量变化为什么通常符号相反？先用一句话解释，再读下面两个定义。

## 方法选择 {#method}

| 任务 | 第一步 | 学习与复做 |
| --- | --- | --- |
| 写焓变定义 | 写 1 mol、起始状态与最终状态 | [定义](#definitions) → [Q1](#q1) |
| 求循环中的未知量 | 固定起终点，标箭头方向 | [例题 2](#example-2) → [Q2](#q2) |
| 求溶解焓 | 拆晶格，再水合每一个离子 | [溶解](#solution) → [Q3](#q3) |
| 解释晶格焓趋势 | 先比较电荷和离子半径，再说吸引 | [离子模型](#solution) → [Q4](#q4) |
| 使用温度实验数据 | 算热量、mol，再确定反应符号和单位 | [Q5](#q5) |
| 判断可行温度或画图 | 将熵与焓的能量单位统一 | [例题 4](#example-4) → [Q7](#q7) |

<span id="t1先把定义写成方程式"></span>

## T1：先把定义写成方程式 {#definitions}

**标准焓变 standard enthalpy change** 指标准条件下、物质处于标准状态时的焓变。标准压力为 100 kPa，温度须说明，通常使用 298 K。定义中的 **one mole** 必须对应指定的物质或变化。

| 焓变 | 含义与例子 | 需要检查什么 |
| --- | --- | --- |
| Formation，$\Delta_fH^\circ$ | 由元素的标准状态形成 1 mol 化合物：$\ce{Ca(s) + 1/2O2(g) -> CaO(s)}$ | 产物恰为 1 mol |
| Atomisation，$\Delta_{at}H^\circ$ | 形成 1 mol 气态原子：$\ce{1/2O2(g) -> O(g)}$ | 双原子元素使用 $1/2$ |
| First ionisation enthalpy | 从 1 mol 气态原子移除电子：$\ce{Ca(g) -> Ca+(g) + e^-}$ | 原子与离子都是气态；吸热 |
| Second ionisation enthalpy | $\ce{Ca+(g) -> Ca^{2+}(g) + e^-}$ | 起点已经是正离子 |
| First electron affinity | $\ce{O(g) + e^- -> O^-(g)}$ | 电子在左侧；O 的第一电子亲和能放热 |
| Second electron affinity | $\ce{O^-(g) + e^- -> O^{2-}(g)}$ | 向负离子加入电子，克服排斥，吸热 |
| Bond dissociation enthalpy | 断开 1 mol 指定的气态共价键：$\ce{Cl2(g) -> 2Cl(g)}$ | 断键吸热；平均键焓是多种分子环境的平均值 |
| Lattice dissociation | 1 mol 固体离子晶体拆成气态离子：$\ce{CaO(s) -> Ca^{2+}(g) + O^{2-}(g)}$ | 拆晶格吸热；不要与 lattice formation 的方向混用 |
| Hydration，$\Delta_{hyd}H^\circ$ | 1 mol 气态离子形成水合离子：$\ce{Ca^{2+}(g) -> Ca^{2+}(aq)}$ | 离子—水吸引形成，放热 |

**写定义的方法：**先写“1 mol 的什么”，再写初始状态、最终状态；用方程式核对。只写“分开离子需要的能量”，缺少 mol 和状态，通常不能拿全分。

**键焓与原子化焓的联系：**对 Cl₂，断开 1 mol Cl–Cl 键得到 2 mol Cl(g)，所以 $\Delta_{at}H^\circ(\mathrm{Cl})=\tfrac12D(\mathrm{Cl-Cl})$。循环中若给出键焓，应先确认它对应几 mol 气态原子。

### 例题 1 — 1 mol 与物理状态（自拟） {#example-1}

**Question:** Write the equation defining the standard enthalpy of hydration of sodium ions. Explain why dissolving sodium chloride is a different enthalpy change.

**方法：**先确定定义中的 1 mol 对应什么，再写初始与最终状态。

1. 指定的是 1 mol 钠**离子**，不是氯化钠。
2. 水合从气态离子开始，形成水合离子：

$$\ce{Na+(g) -> Na+(aq)}.$$

**答案与独立检查：**在标准条件下，水合 1 mol 气态钠离子。两侧各有一个 Na，电荷都为 +1，没有固体盐。NaCl 的溶解从固体开始，包含晶格解离，因此是溶解焓而非水合焓。用 [Q1](#q1) 写出对应的晶格解离定义。

<span id="真题晶格解离焓的定义"></span>

### Q1 — 真题：晶格解离焓的定义 {#q1}

**OxfordAQA CH03 · June 2024 · 01.1 · 2 marks**

> Define enthalpy of lattice dissociation.

<details markdown="1">
<summary>提示</summary>

起点是固体离子化合物，终点是气态离子；检查 “one mole”。

</details>

<details markdown="1">
<summary>评分解析与自查</summary>

MS 第 12 页。

可写：**The enthalpy change when one mole of a solid ionic compound is separated into its gaseous ions.**

评分对应两部分：1 mol 固体离子化合物；分离成气态离子。复做时把定义具体化为 $\ce{CaBr2(s) -> Ca^{2+}(g) + 2Br^-(g)}$，检查 Br⁻ 的系数。

</details>

<span id="t2bornhaber-循环"></span>

## T2：Born–Haber 循环 {#born-haber}

Hess 定律说明，起点与终点相同的两条路径具有相同总焓变。对 CaO，直接路径是元素形成 CaO；间接路径先得到气态原子，再得到气态离子，最后形成晶格。

$$\Delta_fH^\circ=\Delta_{at}H^\circ(\mathrm{Ca})+\Delta_{at}H^\circ(\mathrm O)+IE_1+IE_2+EA_1+EA_2-\Delta_{latt,diss}H^\circ.$$

如果表中给的是 **lattice formation**，最后一步直接加它的负值；如果给的是 **lattice dissociation**，需要反向，所以减去它。不要把所有数值先取绝对值再凭感觉决定符号。

### 例题 2 — 系数与方向检查（自拟） {#example-2}

**Question:** Set up a Born–Haber relationship for $\ce{MgCl2}$ using lattice **dissociation** enthalpy. Explain the chlorine coefficients. No numerical values are supplied.

**方法：**比较直接形成固体的路径与经过气态原子、气态离子的路径。

1. 形成一个 Mg(g) 和两个 Cl(g)。氯的原子化焓取两次，或使用一次 Cl–Cl 键解离焓。
2. Mg 分两步移走两个电子；每个 Cl 原子接受一个电子。
3. 将晶格解离反向，形成固体：

$$\Delta_fH^\circ=\Delta_{at}H^\circ(\mathrm{Mg})+2\Delta_{at}H^\circ(\mathrm{Cl})+IE_1+IE_2+2EA_1-\Delta_{latt,diss}H^\circ.$$

**答案与独立检查：**氯的原子化焓与第一电子亲和能各取两次。逐层数出一个 Mg 和两个 Cl；Mg 移走的两个电子等于氯接受的两个电子。最后一步是放热的晶格形成，因此带负号。现在不看示范尝试 [Q2](#q2)。

<span id="真题从原循环确定物种和焓变"></span>

### Q2 — 真题：从原循环确定物种和焓变 {#q2}

**OxfordAQA CH03 · January 2025 · 01.1–01.3 · 1 + 2 + 2 marks**

Figure 1 shows the Born–Haber cycle for calcium oxide.

![Original Figure 1: calcium oxide Born–Haber cycle with species X and Y, steps A and B, and enthalpy values.](/assets/img/a2-chemistry/ch03-2025-jan-q01-born-haber.png)

> **01.1** Identify species X and species Y. Include state symbols where appropriate.
>
> **01.2** Give the names of the enthalpy changes represented by Step A and Step B.
>
> **01.3** Use Figure 1 to calculate the standard enthalpy of formation of calcium oxide.

<details markdown="1">
<summary>提示</summary>

先检查每层的 Ca 电荷、O 电荷和电子数；然后从元素层走到顶层。Step B 的箭头由固体指向气态离子。

</details>

<details markdown="1">
<summary>评分解析与自查</summary>

MS 第 12 页。

- 01.1：X = Ca²⁺(g)，Y = e⁻；两项正确得 1 分。
- 01.2：A 是 **first electron affinity of oxygen**；B 是 **lattice dissociation enthalpy of calcium oxide**，各 1 分。
- 01.3：间接路径的总和为 $193+248+590+1150-142+844-3513$，得到 **$-630\,\mathrm{kJ\,mol^{-1}}$**。列出正确关系与正确结果各对应 1 分。

**改错复做：**把循环中的晶格箭头反向，并将数据改成 lattice formation；重新列式，答案应保持相同。

</details>

<span id="t3溶解水合与理想离子模型"></span>

## T3：溶解、水合与理想离子模型 {#solution}

**溶解焓 enthalpy of solution** 的起点是固体盐，终点是水合离子。拆晶格需要能量，水合释放能量，合起来可能吸热，也可能放热：

$$\Delta_{sol}H^\circ=\Delta_{latt,diss}H^\circ+\sum\Delta_{hyd}H^\circ.$$

对 $\ce{MgCl2}$，两个 Cl⁻ 各发生一次水合，因此氯离子水合焓乘 2。

**教材勘误：**印刷 273 页（PDF 第 275 页）把 $\ce{NaCl(s) -> Na+(aq) + Cl^-(aq)}$ 的变化误标为 hydration；这个整体过程应为 **solution**。真正的水合从**气态离子**开始。

**Perfect ionic model** 将离子视作球形电荷，成键完全为离子性。电荷越大、离子越小，离子之间吸引越强，通常晶格解离焓越大。小而高电荷密度的阳离子还会极化阴离子，使成键有共价性；此时由 Born–Haber 得到的实验值可能偏离理想模型值。

### 例题 3 — 水合每一个离子（自拟） {#example-3}

**Question:** Use these illustrative model values, all in kJ mol⁻¹: lattice dissociation of MgCl₂ = +2500; hydration of Mg²⁺ = −1900; hydration of Cl⁻ = −350. Calculate the enthalpy of solution. These are self-written practice data, not measured values or official examination data.

**方法：**沿固体盐 → 气态离子 → 水合离子的路径计算。

1. 配平溶解方程式：$\ce{MgCl2(s) -> Mg^{2+}(aq) + 2Cl^-(aq)}$。
2. 晶格解离取一次，Mg 水合取一次，Cl 水合取两次：

$$\Delta_{sol}H=2500-1900+2(-350)=\boxed{-100\,\mathrm{kJ\,mol^{-1}}}.$$

**答案：**−100 kJ mol⁻¹，因此这个模型中的溶解为放热。

**独立检查：**一个 Mg、两个 Cl 守恒，水合离子的电荷和为零。每 mol 盐的水合释放 2600 kJ，比拆晶格所需的 2500 kJ 多 100 kJ。答案按每 mol MgCl₂ 计算，不是每 mol 氯离子；漏掉第二个 Cl 会误得 +250 kJ mol⁻¹。现在用原卷数据计算 [Q3](#q3)。

<span id="真题两个氯离子的水合"></span>

### Q3 — 真题：两个氯离子的水合 {#q3}

**OxfordAQA CH03 · January 2025 · 02.3 · 2 marks**

| Enthalpy change | $\Delta H\,/\,\mathrm{kJ\,mol^{-1}}$ |
| --- | --- |
| Enthalpy of hydration of magnesium ions | −1920 |
| Enthalpy of hydration of chloride ions | −364 |
| Lattice dissociation enthalpy of magnesium chloride | +2493 |

> Use the data in Table 1 to calculate the enthalpy of solution, in kJ mol⁻¹, of magnesium chloride.

<details markdown="1">
<summary>提示</summary>

$\ce{MgCl2(s) -> Mg^{2+}(aq) + 2Cl^-(aq)}$。哪一项必须乘 2？

</details>

<details markdown="1">
<summary>评分解析与自查</summary>

MS 第 13 页。

$$\Delta_{sol}H=2493-1920-2(364)=\boxed{-155\,\mathrm{kJ\,mol^{-1}}}.$$

正确循环关系 1 分，正确结果 1 分。不能因为“拆晶格吸热”就判断整个溶解必定吸热。

</details>

<span id="真题用离子大小解释晶格焓"></span>

### Q4 — 真题：用离子大小解释晶格焓 {#q4}

**OxfordAQA CH03 · June 2026 · 02.4 · 2 marks**

Theoretical lattice dissociation enthalpies: MgCl₂ = 2326 kJ mol⁻¹; CaCl₂ = 2223 kJ mol⁻¹.

> Explain why the value for the enthalpy of lattice dissociation of magnesium chloride is greater than the value for the enthalpy of lattice dissociation of calcium chloride.

<details markdown="1">
<summary>提示</summary>

都是 +2；比较半径，并把它联系到对 Cl⁻ 的吸引。

</details>

<details markdown="1">
<summary>评分解析与自查</summary>

MS 第 13 页。

Mg²⁺ 比 Ca²⁺ 小（或电荷密度更大）；因此与 Cl⁻ 的静电吸引更强，拆开晶格需要更多能量。两条因果链各对应 1 分。不能写成 Mg 的“原子”较小就结束解释。

</details>

<span id="真题量热法与实验评价"></span>

### Q5 — 真题：量热法与实验评价 {#q5}

**OxfordAQA CH03 · June 2024 · 01.4–01.5 · 3 + 1 marks**

> **01.4** A student does an experiment to determine the enthalpy of solution for calcium bromide.
>
> 1.25 g of solid calcium bromide is added from a weighing boat to 25.0 cm³ distilled water in a plastic (polystyrene) cup and the mixture is stirred gently.
>
> When the calcium bromide dissolves, the temperature of the mixture rises from 19.6 °C to 24.9 °C.
>
> Calculate the enthalpy of solution, in kJ mol⁻¹, for calcium bromide.
>
> Assume that the specific heat capacity of the solution is 4.18 J K⁻¹ g⁻¹. Assume that the density of the solution is 1.00 g cm⁻³.
>
> **01.5** Another student repeats the experiment. After the calcium bromide is added into the plastic cup, the student washes the weighing boat with a small volume of distilled water. The student adds the washings to the plastic cup to ensure that all the calcium bromide is transferred.
>
> Explain why adding the washings causes inaccurate results.

Use $M_r(\mathrm{CaBr_2})=199.9$, from the relative atomic masses supplied with the paper.

<details markdown="1">
<summary>提示</summary>

按本题评分模型使用 $m=25.0\,\mathrm g$，先求 $q=mc\Delta T$，再求盐的 mol。解释题关注额外水量与计算用的质量是否一致。

</details>

<details markdown="1">
<summary>评分解析与自查</summary>

MS 第 13 页。

01.4 的三步：$q=25.0\times4.18\times5.3=553.85\,\mathrm J$；$n=1.25/199.9=6.253\times10^{-3}\,\mathrm{mol}$；$\Delta H=-q/(1000n)=\boxed{-88.6\,\mathrm{kJ\,mol^{-1}}}$。温度升高说明反应放热，所以负号不能丢。

01.5：加入洗液改变杯内液体的质量／体积，原来按 25.0 cm³ 计算的 $m$ 不再准确。不能只写“多加水导致误差”，要指出哪一个测量量受影响。

</details>

<span id="t4熵gibbs-自由能与温度"></span>

## T4：熵、Gibbs 自由能与温度 {#entropy}

**Entropy，$S$** 表示能量和粒子可分布的方式。考试常用 disorder 表述，但解释时要落到具体变化：气体比液体或固体有更多可用的运动与分布方式；相近体系中气体 mol 数增加，通常使 $\Delta S$ 增加。

$$\Delta S^\circ=\sum S^\circ(\text{products})-\sum S^\circ(\text{reactants}),\qquad \Delta G^\circ=\Delta H^\circ-T\Delta S^\circ.$$

先乘化学计量系数。$\Delta S$ 常以 J K⁻¹ mol⁻¹ 给出，$\Delta H$ 常以 kJ mol⁻¹ 给出；代入前统一单位，温度用 K。

| $\Delta H$ | $\Delta S$ | $\Delta G<0$ 的条件（视两者不随温度改变） |
| --- | --- | --- |
| 负 | 正 | 所有正温度 |
| 正 | 负 | 无正温度 |
| 负 | 负 | 足够低温 |
| 正 | 正 | 足够高温 |

临界处 $\Delta G=0$，所以 $T=\Delta H/\Delta S$。直线 $\Delta G$—$T$ 图的截距为 $\Delta H$，斜率为 **$-\Delta S$**。发生熔化、沸腾等相变时，相关物质的熵改变，可能出现斜率变化。

**可行不代表快：**$\Delta G<0$ 是热力学条件，反应仍可能因活化能很大而缓慢。催化剂改变路径与速率，不改变 $\Delta G$ 或平衡常数。

### 例题 4 — 可行温度与 Gibbs 图像（自拟） {#example-4}

**Question:** A reaction has $\Delta H^\circ=+40.0\,\mathrm{kJ\,mol^{-1}}$ and $\Delta S^\circ=+100\,\mathrm{J\,K^{-1}\,mol^{-1}}$. Assuming both are constant, find the threshold temperature, calculate Gibbs free energy at 300 K and 500 K, and describe its graph against temperature.

**方法：**统一使用 kJ，再在临界处令 Gibbs 自由能为零。

1. 换算熵：$\Delta S^\circ=+0.100\,\mathrm{kJ\,K^{-1}\,mol^{-1}}$。
2. 写出直线关系：

$$\Delta G^\circ=40.0-0.100T\quad(\mathrm{kJ\,mol^{-1}}).$$

3. 求截距与临界温度：

$$T_{\mathrm{threshold}}=\frac{40.0}{0.100}=400\,\mathrm K.$$

**答案：**300 K 时 Gibbs 自由能为 +10.0 kJ mol⁻¹；500 K 时为 −10.0 kJ mol⁻¹。直线纵截距为 +40.0 kJ mol⁻¹，斜率为 −0.100 kJ K⁻¹ mol⁻¹，在 400 K 穿过零。正向反应在 400 K 以上热力学可行；400 K 是临界点，不能据此声称反应很快。

**独立检查：**温度升高 200 K，自由能减小 20.0 kJ mol⁻¹，与负斜率一致。熵变为正，直线应向下倾斜。用[Q7](#q7)复做，两个符号都反转了。

<span id="真题熔点处的熵变"></span>

### Q6 — 真题：熔点处的熵变 {#q6}

**OxfordAQA CH03 · June 2026 · 04.2 · 2 marks**

| Property of iron | Value |
| --- | --- |
| Melting point / K | 1810 |
| Enthalpy change for melting / kJ mol⁻¹ | 15.4 |

> The melting point of iron is the minimum temperature at which the melting of iron becomes feasible.
>
> Use the data in Table 4 to calculate the entropy change, in J K⁻¹ mol⁻¹, for the melting of iron.

<details markdown="1">
<summary>提示</summary>

令 $\Delta G=0$，整理出 $\Delta S$。最后答案要求 J，先将 15.4 kJ 换成 J。

</details>

<details markdown="1">
<summary>评分解析与自查</summary>

MS 第 16 页。

$$\Delta S=\frac{\Delta H}{T}=\frac{15.4\times1000}{1810}=\boxed{8.51\,\mathrm{J\,K^{-1}\,mol^{-1}}}.$$

关系式／代入 1 分，答案 1 分。复做时解释为什么熔化的熵变为正。

</details>

## 练习 {#practice}

合上所有提示与解析，尝试正文中的题目。记录本页 Q 编号和原卷题号，便于定位错题。

| 题目 | 训练目标 |
| --- | --- |
| [Q1](#q1) | 定义中的 1 mol 与状态 |
| [Q2](#q2) | 物种、箭头方向和 Born–Haber 计算 |
| [Q3](#q3) | 水合系数与溶解焓 |
| [Q4](#q4) | 离子半径 → 吸引 → 晶格焓 |
| [Q5](#q5) | 量热计算、符号、单位和实验评价 |
| [Q6](#q6) | 熔化临界点的熵变 |
| [Q7](#q7) | 低温可行范围与 Gibbs 图像；自拟 |

### Q7 — 可行温度与图像（自拟） {#q7}

**Question:** A reaction has $\Delta H^\circ=-60.0\,\mathrm{kJ\,mol^{-1}}$ and $\Delta S^\circ=-150\,\mathrm{J\,K^{-1}\,mol^{-1}}$. Assume both are temperature-independent. Calculate Gibbs free energy at 300 K and 500 K. Sketch its graph against temperature, label its gradient and threshold, and state the feasible temperature range. Would a catalyst move the threshold?

<details markdown="1">
<summary>提示</summary>

熵换成 kJ 时保留负号；减去负的熵项，得到正斜率。对照[例题 4](#example-4)。

</details>

<details markdown="1">
<summary>解析与自查</summary>

自拟练习，无官方分值。

$$\Delta G^\circ=-60.0+0.150T\quad(\mathrm{kJ\,mol^{-1}}).$$

300 K 时为 −15.0 kJ mol⁻¹；500 K 时为 +15.0 kJ mol⁻¹。纵截距为 −60.0 kJ mol⁻¹，斜率为 +0.150 kJ K⁻¹ mol⁻¹，临界温度为 400 K。正向反应在低于 400 K 的正温度下可行，400 K 为边界。催化剂不改变直线或临界温度。

**检查：**温度升高 200 K，自由能升高 30.0 kJ mol⁻¹，与斜率一致。若误判为高温可行，先回到[熵与 Gibbs](#entropy)，再合上解析重新画图。

</details>

## 快速参考与改错 {#quick-reference}

| 检查项 | 避免的问题 |
| --- | --- |
| 定义：1 mol + 起始状态 + 最终状态 | 把固体盐的溶解误写为气态离子的水合 |
| 循环：起终点相同；箭头反向 → 符号反向 | 混用晶格形成与晶格解离方向 |
| 代入前数出所有离子 | 漏掉第二个卤离子的水合／电子亲和能 |
| 溶液吸收热量与反应热量符号相反 | 温度升高却写正的反应焓变 |
| $\Delta S^\circ=\sum S^\circ(\text{products})-\sum S^\circ(\text{reactants})$；先乘系数 | 两侧相减次序反转 |
| Gibbs 图：截距是焓，斜率是负的熵变 | 熵变为正却画成正斜率 |
| $\Delta G^\circ=\Delta H^\circ-T\Delta S^\circ$；J 或 kJ 统一，温度用 K | 临界温度相差 1000 倍 |

| 你的错误 | 回看路径 | 复做 |
| --- | --- | --- |
| 定义漏状态或 1 mol | [定义](#definitions) | [Q1](#q1) |
| 循环符号或氯的系数错误 | [例题 2](#example-2) | [Q2](#q2)，再做 [Q3](#q3) |
| 大小解释只写“更小” | [离子模型](#solution) | [Q4](#q4)，补吸引与能量 |
| 温度升高写正焓变 | [Q5 解析](#q5)，检查热量接受者与每 mol 单位 | [Q5](#q5)，合上解析 |
| Gibbs 斜率或温度范围反了 | [例题 4](#example-4) | [Q7](#q7)，重新画图 |

改错后用一句话写出错误原因，再合上答案复做。

<span id="闭卷检查与下一步"></span>

## 闭卷检查与下一步 {#completion}

合上解析，画一个 CaBr₂ 的溶解循环；解释为何 Br⁻ 的水合焓出现两次；写出 $\Delta G$—$T$ 图的斜率；各说一句“反应可行”和“反应很快”的判据。

**完成标准：**能独立画循环、解释系数与符号、算熵和 Gibbs 自由能、判断温度范围并检查单位；错题已合上解析复做。

[返回课程](/zh/alevel/a2-chemistry/) · 下一课：[电极电势与电池](/zh/alevel/a2-chemistry/electrode-potentials/)。
