---
title: 热力学 · Thermodynamics
layout: subjects
mathjax: true
lang: zh-CN
grade: a2
subject: a2-chemistry
permalink: /alevel/a2-chemistry/thermodynamics/
toc_headings: h2
study_page: true
---

[CH03 课程](/alevel/a2-chemistry/) · 3.1.8 · 教材第 17 章，印刷 264–283 页

这一章把“焓变定义”变成可计算的路径，再用熵与 Gibbs 自由能判断反应是否热力学可行。完成后应能独立画循环、处理符号和系数，并解释实验值与理想模型的差别。

**先想一想：**把固体盐拆成气态离子，与把气态离子放进水里，能量变化为什么通常符号相反？先用一句话解释，再读下面两个定义。

<span id="definitions"></span>

## T1：先把定义写成方程式

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

### 真题：晶格解离焓的定义

**OxfordAQA CH03 · June 2024 · 01.1 · 2 marks**

> Define enthalpy of lattice dissociation.

<details markdown="1">
<summary>提示：定义中要出现哪些状态？</summary>

起点是固体离子化合物，终点是气态离子；检查 “one mole”。

</details>

<details markdown="1">
<summary>评分解析：MS 第 12 页</summary>

可写：**The enthalpy change when one mole of a solid ionic compound is separated into its gaseous ions.**

评分对应两部分：1 mol 固体离子化合物；分离成气态离子。复做时把定义具体化为 $\ce{CaBr2(s) -> Ca^{2+}(g) + 2Br^-(g)}$，检查 Br⁻ 的系数。

</details>

<span id="born-haber"></span>

## T2：Born–Haber 循环

Hess 定律说明，起点与终点相同的两条路径具有相同总焓变。对 CaO，直接路径是元素形成 CaO；间接路径先得到气态原子，再得到气态离子，最后形成晶格。

$$\Delta_fH^\circ=\Delta_{at}H^\circ(\mathrm{Ca})+\Delta_{at}H^\circ(\mathrm O)+IE_1+IE_2+EA_1+EA_2-\Delta_{latt,diss}H^\circ.$$

如果表中给的是 **lattice formation**，最后一步直接加它的负值；如果给的是 **lattice dissociation**，需要反向，所以减去它。不要把所有数值先取绝对值再凭感觉决定符号。

**示范（自拟）：**对 $\ce{MgCl2}$，必须生成两个 Cl(g)，所以氯的原子化焓和第一电子亲和能都乘 2；Mg 则需要第一、第二电离焓各一次。

### 真题：从原循环确定物种和焓变

**OxfordAQA CH03 · January 2025 · 01.1–01.3 · 1 + 2 + 2 marks**

Figure 1 shows the Born–Haber cycle for calcium oxide.

![Original Figure 1: calcium oxide Born–Haber cycle with species X and Y, steps A and B, and enthalpy values.](/assets/img/a2-chemistry/ch03-2025-jan-q01-born-haber.png)

> **01.1** Identify species X and species Y. Include state symbols where appropriate.
>
> **01.2** Give the names of the enthalpy changes represented by Step A and Step B.
>
> **01.3** Use Figure 1 to calculate the standard enthalpy of formation of calcium oxide.

<details markdown="1">
<summary>提示：按原子与电子守恒补图</summary>

先检查每层的 Ca 电荷、O 电荷和电子数；然后从元素层走到顶层。Step B 的箭头由固体指向气态离子。

</details>

<details markdown="1">
<summary>评分解析：MS 第 12 页</summary>

- 01.1：X = Ca²⁺(g)，Y = e⁻；两项正确得 1 分。
- 01.2：A 是 **first electron affinity of oxygen**；B 是 **lattice dissociation enthalpy of calcium oxide**，各 1 分。
- 01.3：间接路径的总和为 $193+248+590+1150-142+844-3513$，得到 **$-630\,\mathrm{kJ\,mol^{-1}}$**。列出正确关系与正确结果各对应 1 分。

**改错复做：**把循环中的晶格箭头反向，并将数据改成 lattice formation；重新列式，答案应保持相同。

</details>

<span id="solution"></span>

## T3：溶解、水合与理想离子模型

**溶解焓 enthalpy of solution** 的起点是固体盐，终点是水合离子。拆晶格需要能量，水合释放能量，合起来可能吸热，也可能放热：

$$\Delta_{sol}H^\circ=\Delta_{latt,diss}H^\circ+\sum\Delta_{hyd}H^\circ.$$

对 $\ce{MgCl2}$，两个 Cl⁻ 各发生一次水合，因此氯离子水合焓乘 2。

**教材勘误：**印刷 273 页（PDF 第 275 页）把 $\ce{NaCl(s) -> Na+(aq) + Cl^-(aq)}$ 的变化误标为 hydration；这个整体过程应为 **solution**。真正的水合从**气态离子**开始。

**Perfect ionic model** 将离子视作球形电荷，成键完全为离子性。电荷越大、离子越小，离子之间吸引越强，通常晶格解离焓越大。小而高电荷密度的阳离子还会极化阴离子，使成键有共价性；此时由 Born–Haber 得到的实验值可能偏离理想模型值。

### 真题：两个氯离子的水合

**OxfordAQA CH03 · January 2025 · 02.3 · 2 marks**

| Enthalpy change | $\Delta H\,/\,\mathrm{kJ\,mol^{-1}}$ |
| --- | --- |
| Enthalpy of hydration of magnesium ions | −1920 |
| Enthalpy of hydration of chloride ions | −364 |
| Lattice dissociation enthalpy of magnesium chloride | +2493 |

> Use the data in Table 1 to calculate the enthalpy of solution, in kJ mol⁻¹, of magnesium chloride.

<details markdown="1">
<summary>提示：先写溶解的化学方程式</summary>

$\ce{MgCl2(s) -> Mg^{2+}(aq) + 2Cl^-(aq)}$。哪一项必须乘 2？

</details>

<details markdown="1">
<summary>评分解析：MS 第 13 页</summary>

$$\Delta_{sol}H=2493-1920-2(364)=\boxed{-155\,\mathrm{kJ\,mol^{-1}}}.$$

正确循环关系 1 分，正确结果 1 分。不能因为“拆晶格吸热”就判断整个溶解必定吸热。

</details>

### 真题：用离子大小解释晶格焓

**OxfordAQA CH03 · June 2026 · 02.4 · 2 marks**

Theoretical lattice dissociation enthalpies: MgCl₂ = 2326 kJ mol⁻¹; CaCl₂ = 2223 kJ mol⁻¹.

> Explain why the value for the enthalpy of lattice dissociation of magnesium chloride is greater than the value for the enthalpy of lattice dissociation of calcium chloride.

<details markdown="1">
<summary>提示：两种阳离子的电荷是否相同？</summary>

都是 +2；比较半径，并把它联系到对 Cl⁻ 的吸引。

</details>

<details markdown="1">
<summary>评分解析：MS 第 13 页</summary>

Mg²⁺ 比 Ca²⁺ 小（或电荷密度更大）；因此与 Cl⁻ 的静电吸引更强，拆开晶格需要更多能量。两条因果链各对应 1 分。不能写成 Mg 的“原子”较小就结束解释。

</details>

### 真题：量热法与实验评价

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
<summary>提示：热由溶液吸收，反应的符号是什么？</summary>

按本题评分模型使用 $m=25.0\,\mathrm g$，先求 $q=mc\Delta T$，再求盐的 mol。解释题关注额外水量与计算用的质量是否一致。

</details>

<details markdown="1">
<summary>评分解析：MS 第 13 页</summary>

01.4 的三步：$q=25.0\times4.18\times5.3=553.85\,\mathrm J$；$n=1.25/199.9=6.253\times10^{-3}\,\mathrm{mol}$；$\Delta H=-q/(1000n)=\boxed{-88.6\,\mathrm{kJ\,mol^{-1}}}$。温度升高说明反应放热，所以负号不能丢。

01.5：加入洗液改变杯内液体的质量／体积，原来按 25.0 cm³ 计算的 $m$ 不再准确。不能只写“多加水导致误差”，要指出哪一个测量量受影响。

</details>

<span id="entropy"></span>

## T4：熵、Gibbs 自由能与温度

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

### 真题：熔点处的熵变

**OxfordAQA CH03 · June 2026 · 04.2 · 2 marks**

| Property of iron | Value |
| --- | --- |
| Melting point / K | 1810 |
| Enthalpy change for melting / kJ mol⁻¹ | 15.4 |

> The melting point of iron is the minimum temperature at which the melting of iron becomes feasible.
>
> Use the data in Table 4 to calculate the entropy change, in J K⁻¹ mol⁻¹, for the melting of iron.

<details markdown="1">
<summary>提示：在临界温度，ΔG 是多少？</summary>

令 $\Delta G=0$，整理出 $\Delta S$。最后答案要求 J，先将 15.4 kJ 换成 J。

</details>

<details markdown="1">
<summary>评分解析：MS 第 16 页</summary>

$$\Delta S=\frac{\Delta H}{T}=\frac{15.4\times1000}{1810}=\boxed{8.51\,\mathrm{J\,K^{-1}\,mol^{-1}}}.$$

关系式／代入 1 分，答案 1 分。复做时解释为什么熔化的熵变为正。

</details>

## 闭卷检查与下一步

合上解析，画一个 CaBr₂ 的溶解循环；解释为何 Br⁻ 的水合焓出现两次；写出 $\Delta G$—$T$ 图的斜率；各说一句“反应可行”和“反应很快”的判据。

接着学习 [电极电势与电池](/alevel/a2-chemistry/electrode-potentials/)。
