---
title: 赫斯定律与键焓
layout: subjects
mathjax: true
grade: as
subject: as-chemistry
lang: zh-CN
translation_of: /alevel/as-chemistry/hess-and-bond-enthalpies/
permalink: /zh/alevel/as-chemistry/hess-and-bond-enthalpies/
toc_headings: h2, h3
study_page: true
reading_layout: true
---

<h2 id="start-here">怎样用可测路线求出未知反应热？</h2>

直接测量有时不便，但相同反应物可以沿另一条路线到达相同产物。关键是保持**用量、物态和条件完全相同**，再按每个箭头的真实方向计算。

先修是[能量账户与标准焓定义](/zh/alevel/as-chemistry/energetics-and-calorimetry/)、[反应比例](/zh/alevel/as-chemistry/amount-and-equations/)和[化学键表示](/zh/alevel/as-chemistry/bonding-and-shape/)。本页对应 AS 3.1.4.3–4，并连接 RP2。全部任务和数据为**自拟／constructed**；题给圆整焓值是练习数据，不是新测量或官方评分点。先做英文任务，再展开帮助。

<h2 id="route-model">先匹配起点与终点，再把箭头相加</h2>

**Hess’s law（赫斯定律）**：初态、终态相同时，反应焓变与路线无关。焓是状态量，绕路不能创造额外能量。中间步骤不必是实际机理，也不必是容易进行的实验反应。

先写带物态的目标方程。若要逆着题给箭头走，反转方程并改变焓变符号。倍乘时，**整条方程与焓值**同时乘相同倍数。各式相加后，只消去两侧完全相同的物种。所得方程确实等于目标时，焓变和才回答所问。液态和气态同式物不能相消，不同组成的溶液也不能随意视为同一终态。

<h2 id="formation-route">用共同的元素参照态连接</h2>

生成焓箭头是**从元素到化合物**。要经元素把反应物转成产物，应先逆转反应物的生成，再生成产物。带入配平系数 $\nu$，得到：

$$\Delta_rH^\circ=\sum_{\mathrm{products}}\nu\Delta_fH^\circ-\sum_{\mathrm{reactants}}\nu\Delta_fH^\circ$$

公式表达的是路线，不意味着所有焓值表都按这个方向相减。参照态元素的标准生成焓按约定为零，零的是**生成焓**，不是绝对能量。

<div class="worked-example" markdown="1">
<h3 id="worked-formation">完整示范：重建生成焓路线</h3>
自拟练习数据，298 K、100 kPa：$\Delta_fH^\circ[\ce{CO(g)}]=-110.5$，$\Delta_fH^\circ[\ce{CO2(g)}]=-393.5$ $\mathrm{kJ\,mol^{-1}}$。求 $\ce{CO(g) + 1/2O2(g) -> CO2(g)}$ 的焓变。

反转 $\ce{C(s,graphite) + 1/2O2(g) -> CO(g)}$，得每摩尔该逆过程 +110.5 kJ。加上 $\ce{C(s,graphite) + O2(g) -> CO2(g)}$，焓为 −393.5 kJ。将两式相加，消去石墨及两侧共同的半摩尔氧气，留下目标式，$\Delta H=+110.5-393.5=\mathbf{-283.0\,kJ\,mol^{-1}}$，按每摩尔 CO 氧化计。目标方程若加倍为整数系数，则每摩尔加倍反应对应 −566.0 kJ。应核对最后留下的方程，不只检查负号。
</div>

<div class="lesson-check" markdown="1">
<h3 id="route-check">自行选择方向与系数</h3>
<!-- task:route-check -->
Constructed exercise data at 298 K and 100 kPa: formation enthalpies are CO(g) −110.5, CO2(g) −393.5 and H2O(g) −241.8 kJ mol−1; H2(g) and O2(g) are reference-state elements. Draw a formation cycle and calculate ΔH for CO(g) + H2O(g) → CO2(g) + H2(g), showing which equations you reverse. Explain why using H2O(l) data instead would not describe this target.
<!-- /task:route-check -->
<details markdown="1"><summary>Hint／提示</summary>
为每种化合物写生成箭头，反转反应物箭头后再消去共同元素。
</details>
<details markdown="1"><summary>Solution and check／解答与检查</summary>
反转 CO 与气态水的生成，得 +110.5 和 +241.8；生成 CO2 得 −393.5；参照态氢气贡献为零。共同元素循环给出 $\Delta H=-393.5-(-110.5-241.8)=\mathbf{-41.2\,kJ\,mol^{-1}}$。各式相加相消后留下题给蒸汽反应。液态水初态焓不同，若用其数据，还须加入汽化步骤。若符号或物态相消有误，回看[路线模型](#route-model)，再[反向并加倍目标](#retry-route)。
</details>
</div>

<h2 id="combustion-route">到达共同的燃烧产物</h2>

燃烧箭头是**从可燃物到完全氧化产物**。目标变化可先发生，再把产物侧燃烧；也可把反应物侧直接燃烧。两条路线必须消耗相同总量氧气，得到等量、同态的 $\ce{CO2}$ 与 $\ce{H2O}$：

$$\Delta_rH^\circ+\sum_{\mathrm{products}}\nu\Delta_cH^\circ=\sum_{\mathrm{reactants}}\nu\Delta_cH^\circ$$

所以燃烧焓求和采用**反应物减产物**，方向与生成焓公式不同，原因在箭头。H2 等反应物本身也会燃烧，其生成的水不能遗漏。

![生成循环从共同元素出发，燃烧循环到共同完全氧化产物；两图的目标箭头连接相同的反应物和产物状态，箭头方向均有标注。](/assets/img/chemistry-as-energy-hess-routes.svg)

<div class="lesson-check" markdown="1">
<h3 id="combustion-check">构造另一条路线</h3>
<!-- task:combustion-check -->
Constructed rounded combustion data at 298 K and 100 kPa, all producing CO2(g) and H2O(l): C2H4(g) −1411, H2(g) −286 and C2H6(g) −1560 kJ mol−1. Draw a combustion cycle for C2H4(g) + H2(g) → C2H6(g), include sufficient O2 on each route, and calculate the target enthalpy. A student reports −1411 − (−1560) = +149. Diagnose the missing chemical step.
<!-- /task:combustion-check -->
<details markdown="1"><summary>Hint／提示</summary>
两侧都应到达 2CO2 和 3H2O，数清 H2 燃烧生成的水。
</details>
<details markdown="1"><summary>Solution and check／解答与检查</summary>
两侧均与 $\ce{7/2O2(g)}$ 燃烧，得到 $\ce{2CO2(g) + 3H2O(l)}$。反应物直达路线为 $-1411-286=-1697$，另一条为 $\Delta H-1560$；相等得每摩尔乙烯氢化 $\mathbf{-137\,kJ\,mol^{-1}}$。+149 漏掉 H2 燃烧，终态水量不相同。若未画箭头就套生成焓的减法方向，回看[共同产物](#combustion-route)，再[由燃烧数据反求未知量](#retry-combustion)。
</details>
</div>

<h2 id="dissolution-cycle">连接两次测得的溶解过程</h2>

官方 RP2 示例把无水、水合硫酸铜分别溶解，连接到共同溶液。设 A 为 $\ce{CuSO4(s)}$ 加足量水的溶解，B 为 $\ce{CuSO4.5H2O(s)}$ 的溶解，后者**每摩尔盐少加五摩尔水**。若最终溶液组成、温度、压力相同，A 就等于先水合再进行 B：

$$\ce{CuSO4(s) + 5H2O(l) -> CuSO4.5H2O(s)}$$
$$\Delta H_{\mathrm{hydration}}=\Delta H_A-\Delta H_B$$

先把每次测量热量换成**每摩尔相应盐**，两种盐的摩尔质量不同。晶体水也进入溶液，必须匹配最终水量。稀释可能产生热量，因此“溶液都蓝色”不证明终态相同。这是初末态匹配，不是 A2 晶格能循环。

<div class="lesson-check" markdown="1">
<h3 id="dissolution-check">判断相减是否成立</h3>
<!-- task:dissolution-check -->
Constructed molar dissolution estimates with matched final solution composition, temperature and pressure are ΔHA = −66.0 kJ mol−1 for CuSO4(s) and ΔHB = +11.0 kJ mol−1 for CuSO4·5H2O(s). Write the hydration equation, draw the two routes to the common solution and find its enthalpy per mole of hydrate formed. Explain why subtracting two raw measured heats from unequal salt amounts would not suffice.
<!-- /task:dissolution-check -->
<details markdown="1"><summary>Hint／提示</summary>
先写 A = 水合 + B，再移项，区分总热量和每摩尔焓。
</details>
<details markdown="1"><summary>Solution and check／解答与检查</summary>
配平方程为 $\ce{CuSO4(s) + 5H2O(l) -> CuSO4.5H2O(s)}$。两固体起点分别连到同一溶液，水合箭头连接两起点。$\Delta H_{\mathrm{hydration}}=-66.0-(+11.0)=\mathbf{-77.0\,kJ\,mol^{-1}}$。不同样品总热量对应不同反应量，须先分别除以各自摩尔数。若直接把 B 相加而未反向，重画箭头，再试[改变终态](#retry-dissolution)。
</details>
</div>

<h2 id="bond-model">用气相键构造近似路线</h2>

**Mean bond enthalpy（平均键焓）**：气态分子中断裂**一摩尔指定种类共价键**所需焓变，在不同分子环境中取平均。断键需能量，形成相应键则释放能量。可想象气态反应物先变成气态原子，再组成气态产物：

$$\Delta H\approx\sum E(\text{bonds broken})-\sum E(\text{bonds formed})$$

从展开结构数键并乘分子系数。双键用题给双键值，不能拿两个单键代替。用相同平均值表示的未变键可以相消。不同分子环境的键不完全相同，因此对具体分子只作近似。Hess 定律本身不是近似，限制在输入的平均值和遗漏的物态变化。若反应物是液态，还须先汽化才进入全气相路线。

<div class="worked-example" markdown="1">
<h3 id="worked-bonds">完整示范：数清变化的键</h3>
自拟圆整平均值：H–H 436、Cl–Cl 243、H–Cl 432 $\mathrm{kJ\,mol^{-1}}$。对于 $\ce{H2(g) + Cl2(g) -> 2HCl(g)}$，断一根 H–H 和一根 Cl–Cl，吸收 $436+243=679$；形成**两根** H–Cl，释放 $2\times432=864$。所以每摩尔该反应 $\Delta H\approx679-864=\mathbf{-185\,kJ\,mol^{-1}}$。负号表示成键释放多于断键吸收，绝非断键会放热。这条原子路线不是实际反应机理。
</div>

<div class="lesson-check" markdown="1">
<h3 id="bond-check">建立键的能量账户</h3>
<!-- task:bond-check -->
Constructed mean bond data in kJ mol−1: C=C 612, C–C 347, C–H 413, H–H 436. Draw displayed structures and estimate ΔH for C2H4(g) + H2(g) → C2H6(g). State the definition of mean bond enthalpy, explain the signs in your calculation, and give two reasons a value using measured formation enthalpies for specified substances might differ.
<!-- /task:bond-check -->
<details markdown="1"><summary>Hint／提示</summary>
数清两边全部键，或消去未变 C–H 后辨认剩余变化。
</details>
<details markdown="1"><summary>Solution and check／解答与检查</summary>
乙烯有四根 C–H、一根 C=C，另有一根 H–H；乙烷有六根 C–H、一根 C–C。因此 $\Delta H\approx612+436-(347+2\times413)=\mathbf{-125\,kJ\,mol^{-1}}$。断键吸收计正，成键释放从中减去。定义须含气态分子、一摩尔指定共价键、不同环境平均。与测量生成焓所得不同，可因平均值不等于这些分子的特定值，也可能比较了不同物态；不表示 Hess 定律失效。若把 C=C 当两根 C–C 或减法相反，回看[键的路线](#bond-model)，再[反求未知键值](#retry-bonds)。
</details>
</div>

<div class="lesson-check" markdown="1">
<h3 id="report-check">独立选择并论证计算</h3>
<!-- task:report-check -->
Constructed standard formation data at 298 K and 100 kPa: CO(g) −110.5, H2O(g) −241.8, H2O(l) −285.8 and CO2(g) −393.5 kJ mol−1. H2(g) is a reference-state element. A report gives −41.2 kJ mol−1 for CO(g) + H2O(l) → CO2(g) + H2(g), saying that a mean-bond calculation proves the value exact. Evaluate the numerical result and the claimed proof, calculate the enthalpy for the stated target, and draw a route that connects it to the steam reaction.
<!-- /task:report-check -->
<details markdown="1"><summary>Hint／提示</summary>
先辨认目标物态再选数据；平均值方法不能认证特定分子的精确结果。
</details>
<details markdown="1"><summary>Solution and check／解答与检查</summary>
液态水目标应得 $-393.5-(-110.5-285.8)=\mathbf{+2.8\,kJ\,mol^{-1}}$。先汽化水需 $-241.8-(-285.8)=+44.0$，再加蒸汽反应 −41.2，合计 +2.8。报告错用气态水数据回答液态水目标；平均键值只提供估计，不能作精确证明，题给圆整数据本身也限制精度。若漏 +44.0，做[匹配状态重试](#retry-route)；以后关闭帮助重做本题，再学[反应速率](/zh/alevel/as-chemistry/kinetics/)。
</details>
</div>

<h2 id="retry">用新任务修复具体错误</h2>

收起第一次解答。以下分别改变方向、终态或求问对象，不只是换数字。

<div class="lesson-check" markdown="1">
<h3 id="retry-route">反向并缩放</h3>
<!-- task:retry-route -->
Using the formation data in report-check, calculate ΔH for 2CO2(g) + 2H2(g) → 2CO(g) + 2H2O(l). Show the equation operations and explain why simply doubling the steam result with an unchanged sign would fail.
<!-- /task:retry-route -->
<details markdown="1"><summary>Hint／提示</summary>
从液态水正向目标开始，不是蒸汽目标。
</details>
<details markdown="1"><summary>Retry solution／重试解答</summary>
液态水正向目标为 +2.8，反转得 −2.8，再将整式与焓值加倍，得到每摩尔题写加倍反应 **−5.6 kJ**。直接倍乘 −41.2 同时保留了错误方向和错误水状态。
</details>
</div>

<div class="lesson-check" markdown="1">
<h3 id="retry-combustion">反求另一种未知量</h3>
<!-- task:retry-combustion -->
Constructed combustion data at 298 K and 100 kPa: C(s,graphite) −393.5, H2(g) −285.8 and CH3OH(l) −726.5 kJ mol−1, all with CO2(g) and H2O(l) as applicable products. Find the standard formation enthalpy of CH3OH(l), writing a balanced defining equation and a cycle with matching oxygen and products.
<!-- /task:retry-combustion -->
<details markdown="1"><summary>Hint／提示</summary>
元素直接燃烧路线应等于先生成甲醇再燃烧。
</details>
<details markdown="1"><summary>Retry solution／重试解答</summary>
目标定义式为 $\ce{C(s,graphite) + 2H2(g) + 1/2O2(g) -> CH3OH(l)}$。循环上方两侧各补 $\ce{3/2O2(g)}$，共同终点为 $\ce{CO2(g) + 2H2O(l)}$。元素直达路线 $-393.5-2(285.8)=-965.1$，因此 $\Delta_fH^\circ-726.5=-965.1$，得 $\mathbf{-238.6\,kJ\,mol^{-1}}$。
</details>
</div>

<div class="lesson-check" markdown="1">
<h3 id="retry-dissolution">核对改变后的终态</h3>
<!-- task:retry-dissolution -->
An author subtracts two molar copper-sulfate dissolution results to find hydration enthalpy. One experiment ends with twice as much water per mole of dissolved CuSO4 as the other, although both are blue and at the same temperature. Explain why colour and molar normalisation are insufficient, and propose what must be matched or additionally measured before a Hess calculation is justified.
<!-- /task:retry-dissolution -->
<details markdown="1"><summary>Hint／提示</summary>
归一化摩尔数不自动归一化最终溶剂量。
</details>
<details markdown="1"><summary>Retry solution／重试解答</summary>
终态溶液组成不同，焓差可包含稀释，直接相减不能只分离出固体水合。应匹配每摩尔盐的总水量（含晶体水）、温度和压力，或另测并计入连接两终态的稀释步骤；颜色不是热力学状态的判据。
</details>
</div>

<div class="lesson-check" markdown="1">
<h3 id="retry-bonds">反求缺失键值并检查物态</h3>
<!-- task:retry-bonds -->
Constructed gas-phase exercise: H2(g) + Br2(g) → 2HBr(g) has ΔH = −103 kJ mol−1. Use H–H = 436 and Br–Br = 193 kJ mol−1 to infer H–Br within the bond-account model. Then explain why applying the same calculation unchanged to liquid Br2(l) as reactant is unjustified, and state the extra type of enthalpy change needed.
<!-- /task:retry-bonds -->
<details markdown="1"><summary>Hint／提示</summary>
未知量是一摩尔 H–Br 键的能量，产物形成两摩尔这种键。
</details>
<details markdown="1"><summary>Retry solution／重试解答</summary>
$-103=436+193-2E$，所以 $2E=732$，模型内 $E=\mathbf{366\,kJ\,mol^{-1}}$。液溴须先汽化，故从液态出发应在气相反应焓上加正的汽化焓，放热较少。不能超出模型和圆整数据把它认证为实验精确键值。
</details>
</div>

<h2 id="sources">范围与后续使用</h2>

OxfordAQA 9620 [大纲5.3](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-chemistry-specification.pdf)，p.17，3.1.4.3–4；[实验手册](https://www.oxfordaqa.com/oaqaresources/science/teaching/a-level-practical-handbook-chemistry-4.2.pdf)，2018，pp.53–57。教材 Lister / Renshaw（2016）已参考 pp.91–96、98–101 及 Practical 2 pp.522–523。题图原创，题给练习值不认证为实验测量。热学模型有误时回[量热法](/zh/alevel/as-chemistry/energetics-and-calorimetry/)，再用[反应速率](/zh/alevel/as-chemistry/kinetics/)区分能量变化与反应快慢。
