---
title: 能量变化与量热法
layout: subjects
mathjax: true
grade: as
subject: as-chemistry
lang: zh-CN
translation_of: /alevel/as-chemistry/energetics-and-calorimetry/
permalink: /zh/alevel/as-chemistry/energetics-and-calorimetry/
toc_headings: h2, h3
study_page: true
reading_layout: true
---

<h2 id="start-here">温度变化能告诉我们多少反应信息？</h2>

温度计测量周围物质的温度，不会直接显示“每摩尔多少千焦”。要得到焓变，先确定研究的反应系统，追踪能量流向，再数清指定反应实际发生了多少；同时判断实验数据是否支持模型。

先修是[物质的量、方程式和限制试剂](/zh/alevel/as-chemistry/amount-and-equations/)及[浓度与测量](/zh/alevel/as-chemistry/solutions-and-titration/)。本页对应 OxfordAQA 9620 AS 3.1.4.1–2 与 RP2 测定焓变的准备；Hess’s law 和 mean bond enthalpy 留在下一专题。**全部任务和数值数据均为自拟／constructed，不是真题或实际实验记录。**独立作答时练习用英文解释；纸面任务不等于完成实操。

<h2 id="system-and-sign">先确定能量跨越哪条边界</h2>

**System（系统）**是所研究的化学变化；**surroundings（环境）**包括升温或降温的主体液体、杯子、温度计和更远的室内环境。在简单反应量热模型中，把反应的化学焓变与周围物质的温度变化分开记账。反应发生在液体内部，两者仍是不同的能量项目，并不是两个分开的烧杯。

**Exothermic（放热）**反应把热量从系统传给环境。在同一指定温度下，产物焓低于反应物，所以 $\Delta H=H_{\mathrm{products}}-H_{\mathrm{reactants}}<0$。**Endothermic（吸热）**变化从环境吸热，$\Delta H>0$。液体是主要热量接受者或来源时，前者使其变暖，后者使其变冷。但外部加热或试剂初温不同也会改变读数，不能脱离条件，仅凭温度上升就断定反应放热。

![两个能量账户：放热时热量离开反应系统且产物焓较低；吸热时热量进入反应系统且产物焓较高，箭头和正负号均有文字标识。](/assets/img/chemistry-as-energy-flow.svg)

Heat 指**因温差而转移的能量**，不是物体内储存的一种物质。温度也不是总能量：同一种材料，质量加倍而温升相同，所需能量加倍。在恒压且没有电功等其他功的条件下，反应系统交换的热量对应焓变。通常敞口杯可近似维持大气压。同一状态变化完全反向时，$\Delta H$ 大小不变、符号相反。

<div class="lesson-check" markdown="1">
<h3 id="energy-check">解释一次观察</h3>
<!-- task:energy-check -->
A rapid reaction in an insulated cup raises the surrounding solution from 20.0 to 25.0 °C without external heating. Identify the system and thermal surroundings, draw the direction of heat transfer, and sketch labelled reactant and product enthalpy levels with a ΔH arrow. Explain the sign of the reaction enthalpy, and the sign for the exact reverse change between the same states. The cup is open to the atmosphere. Explain under what pressure and work conditions the appropriately corrected reaction heat can be identified with an enthalpy change, and why the open cup helps meet these conditions.
<!-- /task:energy-check -->
<details markdown="1"><summary>Hint／提示</summary>
区分化学变化和测温材料；比较反应前后的化学焓。检查压力，以及除了通常膨胀功之外是否还有功或其他能量输入。
</details>
<details markdown="1"><summary>Solution and check／解答与检查</summary>
反应是系统；液体、杯子和温度计是热环境，热量从反应传向它们。画反应物高、产物低的水平线和向下的 $\Delta H$ 箭头：反应放热，$\Delta H$ 为负。完全反向、状态相同的变化为等大正值。只有在**恒压且除通常压力—体积功外无其他功**时，适当校正的反应热才对应 $\Delta H$。敞口使压力近似保持大气压；还须排除电能输入，并计及杯子吸热和外界热交换。保温本身不保证这些条件。若仅凭温度计就判断符号或 $q=\Delta H$，回看[能量账户](#system-and-sign)，再做[改变装置的重试](#retry-energy)。
</details>
</div>

<h2 id="standard-enthalpies">说明一摩尔什么、什么状态、什么条件</h2>

**Standard enthalpy change（标准焓变）** $\Delta H^\circ$ 指各物质处于标准态、压力 **100 kPa 和指定温度**下的变化，常用温度是 298 K。温度仍须说明，“standard”不表示只能取一个温度。元素的参照态是指定条件下最稳定的形态，例如 298 K 时碳用 graphite（石墨），不用 diamond（金刚石）。溶液采用给定的标准溶液约定，本阶段常用浓度 1 $\mathrm{mol\,dm^{-3}}$。杯中温度上升的实验通常只给出一个温度区间内的估计，不能自动加标准符号。

**Standard enthalpy of formation（标准生成焓）** $\Delta_fH^\circ$：在标准条件下，由各组成元素的标准态生成**一摩尔指定物质**的焓变。**Standard enthalpy of combustion（标准燃烧焓）** $\Delta_cH^\circ$：在标准条件下，**一摩尔指定物质**在氧气中完全燃烧，全部反应物、产物均处于标准态时的焓变。“一摩尔”分别指生成或燃烧的指定物质，不是氧气或全部产物的总量。

以 298 K 的液态乙醇为例，定义方程式为：

$$\ce{2C(s,graphite) + 3H2(g) + 1/2O2(g) -> C2H5OH(l)}\qquad(\text{formation})$$

$$\ce{C2H5OH(l) + 3O2(g) -> 2CO2(g) + 3H2O(l)}\qquad(\text{combustion})$$

为让指定物质的系数为 1，可使用分数系数。将 $\ce{H2O(l)}$ 改成 $\ce{H2O(g)}$ 就改变了过程：液态水汽化需能量，因此生成水蒸气时燃烧放热较少。元素处于参照态时，标准生成焓**按约定**为零，不表示其绝对焓或每一种燃烧焓都是零。

<div class="lesson-check" markdown="1">
<h3 id="definitions-check">核对热化学名称</h3>
<!-- task:definitions-check -->
At 298 K and 100 kPa, write the equation defining the standard enthalpy of formation of CO2(g) and the equation defining the standard enthalpy of combustion of CH4(g). Include states and explain which substance the one-mole definition refers to. A report replaces liquid water with water vapour in the methane products but retains the same enthalpy value. Explain why this is invalid and how the combustion enthalpy changes.
<!-- /task:definitions-check -->
<details markdown="1"><summary>Hint／提示</summary>
生成从元素参照态开始；燃烧从一摩尔燃料开始，得到完全氧化产物。
</details>
<details markdown="1"><summary>Solution and check／解答与检查</summary>
$\ce{C(s,graphite) + O2(g) -> CO2(g)}$ 生成一摩尔二氧化碳。$\ce{CH4(g) + 2O2(g) -> CO2(g) + 2H2O(l)}$ 完全燃烧一摩尔甲烷。两种定义均需包含题给温度和压力。水蒸气产物的焓高于液态水产物，改变后的反应焓较不负，不能保留原值。若你用 CO 作生成反应起点或省略物态，回看[定义](#standard-enthalpies)，再[换物质重试](#retry-definitions)。
</details>
</div>

<h2 id="calorimetry-model">把温差转成有明确反应基准的热量</h2>

质量为 $m$ 的物质具有近似恒定比热容 $c$，没有物态变化，且温度近似均匀时：

$$q_{\mathrm{solution}}=mc\Delta T,\qquad \Delta T=T_{\mathrm{after}}-T_{\mathrm{before}}$$

$m$ 用 g，$c$ 用 $\mathrm{J\,g^{-1}\,K^{-1}}$，则 $q$ 为 J。6.8 °C 的**温差**等于 6.8 K，不能给温差加 273。这里 $c$ 是比热容，不是浓度。质量必须对应这个 $c$ 所描述的材料：把**整份稀水溶液**近似为水时，用总溶液质量，不是仅一种试剂的质量。题目明确用只计水的模型时，那是另一种近似。固体溶解后，若 $c$ 指整份溶液，就计入固体质量；忽略它须说明近似，不能悄悄换模型。

若杯子热容及与室内的交换可忽略：

$$q_{\mathrm{reaction}}\approx-q_{\mathrm{solution}}$$

符号相反来自能量守恒。若量热器的已知热容 $C_{\mathrm{cal}}$（单位 $\mathrm{J\,K^{-1}}$）不可忽略，其热量变化 $C_{\mathrm{cal}}\Delta T$ 也须计入环境账户；冷却外推本身不会测出这部分热容。

最后从配平方程确定**实际反应量**。反应系数为 $a,b$ 时，按所写方程计的反应摩尔数，是 $n(A)/a$ 与 $n(B)/b$ 中较小者。反应热从 J 换成 kJ 后除以该量。必须说清基准：每摩尔燃料燃烧、水生成、盐溶解，或**按所写方程发生的反应**。系数全部加倍使最后一种基准的焓变加倍，却不改变同一实际样品释放的总热量。

<div class="worked-example" markdown="1">
<h3 id="worked-neutralisation">完整示范：先选质量，再选摩尔基准</h3>
自拟示范：50.0 cm³、1.00 $\mathrm{mol\,dm^{-3}}$ HCl 与等体积、等浓度 NaOH 混合，两者初温均为 20.0 °C；校正温升 6.8 K。假定反应完全、稀释热可忽略、体积可相加、密度 1.00 $\mathrm{g\,cm^{-3}}$、整份溶液 $c=4.18\,\mathrm{J\,g^{-1}\,K^{-1}}$，杯子热容可忽略，外界热交换已校正。

$$\ce{HCl(aq) + NaOH(aq) -> NaCl(aq) + H2O(l)}$$

反应比例 1:1，两试剂各提供 $1.00\times0.0500=0.0500$ mol，生成水 0.0500 mol。两份溶液都升温，总质量 $(50.0+50.0)\times1.00=100.0$ g。

$$q_{\mathrm{solution}}=100.0\times4.18\times6.8=2842.4\ \mathrm{J}=2.8424\ \mathrm{kJ}$$

溶液获得能量，反应失去能量。每摩尔水生成，也就是每摩尔该方程反应的焓为：

$$\Delta H\approx\frac{-2.8424}{0.0500}=-56.848\ \mathrm{kJ\,mol^{-1}}\approx-57\ \mathrm{kJ\,mol^{-1}}$$

最终保留两位有效数字，受温升精度限制；中间保留未舍入数值。检查：单位为能量／摩尔，负号符合液体变暖；若两体积同时加倍而浓度不变，总热量和反应量都加倍，每摩尔结果不变。这是实验模型估计，不是已确证的标准焓变。
</div>

<div class="lesson-check" markdown="1">
<h3 id="amount-check">报告混合物能告诉你的结果</h3>
<!-- task:amount-check -->
Mix 30.0 cm3 of 1.00 mol dm−3 HCl with 20.0 cm3 of 1.00 mol dm−3 NaOH at the same initial temperature. The corrected rise is 5.4 K. Assume complete 1:1 reaction to NaCl(aq) and H2O(l), negligible dilution heat, additive volumes, density 1.00 g cm−3, whole-solution c = 4.18 J g−1 K−1, negligible cup heat capacity and corrected external heat exchange. Determine the reaction enthalpy per mole of water formed. Explain why using either 20.0 g or 0.0300 mol would be wrong.
<!-- /task:amount-check -->
<details markdown="1"><summary>Hint／提示</summary>
受热质量与反应量回答不同问题；先找限制试剂，再除以摩尔数。
</details>
<details markdown="1"><summary>Solution and check／解答与检查</summary>
受热质量为 50.0 g；NaOH 限制反应，只生成 0.0200 mol 水。$q_{\mathrm{solution}}=50.0\times4.18\times5.4=1128.6$ J。反应焓为 $-1.1286/0.0200=-56.43\approx\mathbf{-56\,kJ\,mol^{-1}}$，按每摩尔水计。20.0 g 漏掉升温的酸溶液；0.0300 mol 把过量未反应酸也算进反应量。若有这类错误，回到[两种不同的量](#calorimetry-model)，再[反向预测温升](#retry-amount)。
</details>
</div>

<h2 id="temperature-time">保留时间记录，不只找最高读数</h2>

混合和探头响应都需要时间，热混合物同时向较冷的室内放热，所以最高读数可能低于快速反应在无外界交换时的温度。在已知混合时刻前后按固定间隔读数，并确认试剂初温相同，否则部分变化只是冷热混合。

<div class="worked-example" markdown="1">
<h3 id="worked-correction">完整示范：估计混合瞬间的温差</h3>
以下为 100.0 g 中和示范的**构造原始读数**，不是实测。120 s 混合，缺测表示正在混合，不表示温度为零。

| Time / s | Temperature / °C | 观察 |
| --- | --- | --- |
| 0 | 20.0 | 混合前 |
| 30 | 20.0 | 混合前 |
| 60 | 20.0 | 混合前 |
| 90 | 20.0 | 混合前 |
| 120 | — | 混合并搅拌 |
| 150 | 26.7 | 已混匀；反应完成 |
| 180 | 26.6 | 冷却 |
| 210 | 26.5 | 冷却 |
| 240 | 26.4 | 冷却 |
| 270 | 26.3 | 冷却 |
| 300 | 26.2 | 冷却 |

以时间为横轴、温度为纵轴作图，分别拟合基线和反应后冷却段，不能用一条线穿过突变。这份简化数据的局部斜率为 $(26.2-26.7)/(300-150)=-0.00333\,\mathrm{K\,s^{-1}}$。向前延至 120 s，比首个反应后读数早 30 s，得 $26.7+0.00333\times30=26.8$ °C；同一时刻基线为 20.0 °C，差为 **6.8 K**，即上例温升。

![构造示范图：混合前 20.0 °C，反应后从 26.7 降至 26.2 °C，虚线外推到 120 s 为 26.8 °C，校正温升 6.8 K。](/assets/img/chemistry-as-energy-extrapolation.svg)

只用读到的 6.7 K，舍入前为 $-56.012\,\mathrm{kJ\,mol^{-1}}$，比校正后的 $-56.848$ 较不负。即使最终舍入结果相近，中间保留数值才看得清校正。真实读数会散布，要选择有依据的拟合，不能强迫各点共线。
</div>

外推近似估计**快速**变化在混合时刻的结果。取反应完成、探头稳定后但尚未明显弯曲的短区间。反应慢、室温变化、蒸发或长时间冷却明显弯曲时，简单直线法可能失效。吸热混合物低于室温时从室内吸热而**回暖**，可同样将反应后的回暖段向前外推。基线若漂移，也要外推，并在同一时刻取两线间距。

<div class="lesson-check" markdown="1">
<h3 id="data-check">选择哪些读数支持估计</h3>
<!-- task:data-check -->
Constructed data: time/s = 0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300; temperature/°C = 21.0, 21.0, 21.0, 21.0, missing, 26.0, 27.6, 27.5, 27.4, 27.3, 27.2. Mix at 120 s; at 150 s the probe is still responding. The rapid reaction is complete and the mixture uniform by 180 s. Plot the raw readings, choose and justify a fitting interval, and estimate the corrected temperature change. Explain what goes wrong if the 150 s point is forced into the same straight cooling line, and give one reason the correction might still be unreliable in a real experiment.
<!-- /task:data-check -->
<details markdown="1"><summary>Hint／提示</summary>
探头仍在接近液体温度时，读数不是冷却证据；比较同一混合时刻的两条线。
</details>
<details markdown="1"><summary>Solution and check／解答与检查</summary>
全部原始点保留，但只用 **180–300 s** 拟合反应后冷却段，基线为 21.0 °C。斜率 $-0.1/30=-0.00333\,\mathrm{K\,s^{-1}}$；从 180 s 向前 60 s 得 $27.6+0.2=27.8$ °C，校正温升 **6.8 K**。图中以虚线标出延至 120 s 的部分。强行计入 150 s 的 26.0 °C 会混淆探头响应和冷却，使拟合偏移。反应尚在继续或冷却弯曲都可能破坏外推条件。若只取最高点或连线穿过突变，回看[时间模型](#temperature-time)，再[分析回暖数据](#retry-data)。
</details>
</div>

<h2 id="uncertainty">一次温差涉及两次读数</h2>

每次读数给定不确定度 ±0.1 °C 时，简单最坏情形是一高一低，因此温差不确定度 **±0.2 K**。6.8 K 温升的百分不确定度为：

$$\text{percentage uncertainty in }\Delta T=\frac{0.2}{6.8}\times100\%=2.94\%\approx2.9\%$$

这是**读数贡献的估计**，不是置信区间或整个 $\Delta H$ 的总不确定度。外推还涉及散点、拟合和区间选择；质量、浓度、热学性质及外界交换也有影响。分辨率不自动等于给定读数不确定度。同一固定校准偏移若两次不变会在相减中抵消，分辨率与响应误差则未必。重复能反映离散程度，平均不能消除系统性热损失。

<div class="lesson-check" markdown="1">
<h3 id="uncertainty-check">公平比较两次测量</h3>
<!-- task:uncertainty-check -->
Two experiments use the same thermometer, with stated independent reading uncertainties ±0.1 °C per reading. Their directly measured temperature changes are 2.0 K and 8.0 K. Use a worst-case addition estimate to find the absolute and percentage uncertainty in each difference. A student claims the second enthalpy result is therefore certainly accurate to 2.5%. Evaluate the claim, including what changes if temperatures come from fitted extrapolations.
<!-- /task:uncertainty-check -->
<details markdown="1"><summary>Hint／提示</summary>
先数清读数次数，再求百分比。读数相对不确定度小，不等于所有模型误差都小。
</details>
<details markdown="1"><summary>Solution and check／解答与检查</summary>
两温差的读数不确定度均 **±0.2 K**，百分比分别 **10%**、**2.5%**。第二次的相对读数贡献较小，但热损失、杯子热容、反应不完全或反应量不确定仍可引入偏差。外推还须考虑拟合与区间选择，不能保证整个结果准确到 2.5%。若用了 ±0.1 除以温差，或把精密度等同准确度，回看[两次读数](#uncertainty)，再[加入固定偏移重试](#retry-uncertainty)。
</details>
</div>

<h2 id="planning-and-evaluation">为问题选择方法</h2>

收集数据前写清反应、预期能量流向和摩尔基准，选择能同时求出热量与反应量的测量。快速溶液反应可用有支撑的聚苯乙烯杯与杯盖减少交换，搅拌使探头代表主体液体。测两试剂初温、实际质量或体积及浓度，定时记录。探头浸入液体且不抵杯底；杯盖应容纳探头与搅拌器，产气反应不可密封。

放热液体高于室温时，未校正热损失使温升和推算 $q$ 偏小，反应焓**较不负**、靠近零。该模型下忽略杯子吸热也是同方向。吸热液体低于室温时，室内传入热量削弱降温，正焓变**偏小**。先比较哪边温度高，再判断方向。杯盖／保温减少交换，时间记录可估计校正，量热器校准处理杯子吸热，三者解决不同问题。

燃料燃烧加热盛水容器时，能量账户相同而装置不同。水的质量为受热质量；**实际燃烧燃料质量除以摩尔质量**是反应量。逸出热气、不完全燃烧和燃料蒸发是额外限制。适宜的封闭式燃烧量热装置改善收集热量，但不能堵住氧气供应。公平比较应控制相关受热质量和几何位置，并报告每指定量的能量，不能仅比原始温升。

真实操作须采用教师批准的方法和风险评估，戴护目镜、固定容器，按要求处理稀酸碱飞溅和弃液。燃料需控制点火、远离火焰加注、适宜通风和防烫；铜盐需指定废液收集。这些纸面题不授权自行操作，也不能证明实际安全操作能力。

<div class="lesson-check" markdown="1">
<h3 id="plan-check">设计比较所需的证据</h3>
<!-- task:plan-check -->
You must compare the molar heat changes of two rapid, complete reactions between dilute aqueous solutions. Available equipment includes glass beakers, supported polystyrene cups with lids, measuring cylinders, a balance, a stopwatch, a stirrer and a temperature probe. Choose a setup and state what you will measure to determine heat and reacted moles. Explain how you will establish a common initial temperature, record a usable time series and compare results fairly. One reaction warms the liquid above room temperature; predict the effect of uncorrected heat loss on its reported ΔH and propose a targeted improvement. Include a relevant risk control and explain what repeats can and cannot establish.
<!-- /task:plan-check -->
<details markdown="1"><summary>Hint／提示</summary>
围绕质量、温度历程和反应量设计，每个控制或改进都要有理由。
</details>
<details markdown="1"><summary>Solution and check／解答与检查</summary>
选有支撑的保温杯、杯盖和浸入可搅拌的探头。量取试剂体积／浓度或称量，按方程找限制量，确定总溶液质量。两试剂在同室达到热平衡并**验证初温**。定时记录混合前读数、混合时刻和反应完成后的短冷却段。使用相同热学假设、装置、探头位置与初始条件，比较**每摩尔指定反应基准的 kJ**。热损失使放热值较不负；保温／杯盖减少损失，有依据的外推估计校正。护目镜和受控稀酸碱操作针对飞溅。重复反映离散程度／重复性，不证明没有系统偏差。若只写取最高温并重复，回到[方法决策](#planning-and-evaluation)，再[换燃烧装置重试](#retry-plan)。
</details>
</div>

<div class="lesson-check" markdown="1">
<h3 id="transfer-check">写出并论证报告</h3>
<!-- task:transfer-check -->
A constructed dissolution experiment adds 5.00 g KCl(s), M = 74.6 g mol−1, to 100.0 g water. All the solid dissolves rapidly. The corrected solution temperature changes from 22.0 to 19.4 °C. Treat the whole 105.0 g solution as having c = 4.18 J g−1 K−1; ignore cup heat capacity and assume external exchange has been corrected. Write KCl(s) → K+(aq) + Cl−(aq), calculate and interpret the molar enthalpy change, and sketch its enthalpy levels. If an uncorrected run instead reaches only 19.8 °C, explain the energy transfer that could cause this and the direction of the enthalpy error. Does this observation establish a standard enthalpy of formation? Justify your answer and propose one additional measurement or check for a stronger experimental report.
<!-- /task:transfer-check -->
<details markdown="1"><summary>Hint／提示</summary>
先自行选择模型、摩尔基准，再比较两次观察，辨认方程描述的变化类型。
</details>
<details markdown="1"><summary>Solution and check／解答与检查</summary>
$\ce{KCl(s) -> K+(aq) + Cl-(aq)}$ 每个化学式单位生成各一个离子，原子及总电荷守恒。$\Delta T=-2.6$ K，$q_{\mathrm{solution}}=105.0\times4.18\times(-2.6)=-1141.14$ J。溶解吸收 $+1.14114$ kJ，盐为 $5.00/74.6=0.067024\ldots$ mol，因此每摩尔 KCl 溶解的 $\Delta H=+17.0258\ldots\approx\mathbf{+17\,kJ\,mol^{-1}}$。画产物高于反应物、箭头向上。室内热量传入液体，使降温只有 2.2 K，未校正结果最终舍入前约为 +14.4 $\mathrm{kJ\,mol^{-1}}$，**偏小**。这是溶解，不是由元素生成；标准温度与全部标准态条件也未建立。检查是否完全溶解、固体初温或探头响应，测更完整时间序列，或校准杯子热容，并说明对应限制。按错误回到[符号](#system-and-sign)、[质量与反应量](#calorimetry-model)或[条件](#standard-enthalpies)，再做下方对应重试。下一专题前不看帮助重做本题。
</details>
</div>

<h2 id="retry">改变条件，再独立尝试</h2>

收起第一次解答，选择对应自己错误的重试，写出新推理后再展开独立答案。这些是新的自拟任务，不是供抄写的订正。

<div class="lesson-check" markdown="1">
<h3 id="retry-energy">另一次观察</h3>
<!-- task:retry-energy -->
A rapid dissolution in an insulated cup open to the atmosphere lowers the liquid temperature without external heating or cooling. Identify the energy-transfer direction and sketch the reaction enthalpy levels. Explain why the sign of the liquid's heat change differs from the sign of the dissolution enthalpy, and predict the sign for the reverse change between the same states. Another report records the same temperature change in a rigid sealed vessel with an unmeasured electrical input and labels the inferred heat ΔH. Evaluate that label: state which pressure, work and energy-account conditions need to be established before the reaction heat can be identified with an enthalpy change.
<!-- /task:retry-energy -->
<details markdown="1"><summary>Hint／提示</summary>
液体变冷时，追踪哪一部分失去热能。同样温差不一定代表相同反应热，也不自动证明所需压力与功的条件。
</details>
<details markdown="1"><summary>Retry solution／重试解答</summary>
热量从周围液体传入溶解系统。液体 $q$ 为负，溶解 $\Delta H$ 为正；产物高于反应物，箭头向上。相同初末态的完全逆变化焓为负。敞口情境中，近似恒定大气压、没有其他功及经校正的热量账户，支持把反应热认作 $\Delta H$。刚性密闭容器本身不证明恒压，未测电能输入也还没有与反应能量分开，所以第二份报告的标签缺乏依据。若你认为保温或相同温差就保证 $q=\Delta H$，应先说明缺少的压力／功条件，排除无关输入后再判断。
</details>
</div>

<div class="lesson-check" markdown="1">
<h3 id="retry-definitions">更换指定物质</h3>
<!-- task:retry-definitions -->
At 298 K and 100 kPa, write the defining formation equation for H2O(l) and complete-combustion equation for C2H5OH(l). Explain why H2O(g) is not interchangeable with H2O(l). A student calls C(diamond) + O2(g) → CO2(g) the defining standard formation equation for CO2 at these conditions. Correct the reference state and explain the error.
<!-- /task:retry-definitions -->
<details markdown="1"><summary>Hint／提示</summary>
检查一摩尔对象、完全氧化产物和元素的最稳定参照形态。
</details>
<details markdown="1"><summary>Retry solution／重试解答</summary>
$\ce{H2(g) + 1/2O2(g) -> H2O(l)}$ 生成一摩尔水；$\ce{C2H5OH(l) + 3O2(g) -> 2CO2(g) + 3H2O(l)}$ 燃烧一摩尔乙醇。水蒸气与液态水焓不同。298 K 下参照态用石墨而非金刚石。金刚石氧化是有效反应，却不是定义标准生成焓的参照过程，焓值不同。
</details>
</div>

<div class="lesson-check" markdown="1">
<h3 id="retry-amount">先预测，再测量</h3>
<!-- task:retry-amount -->
Take the enthalpy of HCl(aq) + NaOH(aq) → NaCl(aq) + H2O(l) as −57.0 kJ per mole of reaction as written. Mix 25.0 cm3 of 1.00 mol dm−3 HCl with 50.0 cm3 of 1.00 mol dm−3 NaOH at the same initial temperature. Assume complete reaction, negligible dilution heat, additive volumes, density 1.00 g cm−3, whole-solution c = 4.18 J g−1 K−1, negligible cup heat capacity and no external heat exchange. Predict the temperature rise. If every equation coefficient is doubled, what enthalpy belongs to one mole of that doubled reaction, and does the actual mixture's predicted rise change?
<!-- /task:retry-amount -->
<details markdown="1"><summary>Hint／提示</summary>
先由反应量求热量，再问它使多少材料升温；区分样品热量和方程归一化。
</details>
<details markdown="1"><summary>Retry solution／重试解答</summary>
HCl 限制水生成量为 0.0250 mol，反应放出 $57.0\times0.0250=1.425$ kJ。全部 75.0 g 溶液升温，$\Delta T=1425/(75.0\times4.18)=\mathbf{4.55\,K}$。加倍方程对应**每摩尔按新方程反应 −114 kJ**；本样品发生新反应 0.0125 mol，所以实际热量和温升不变。若温升加倍了，你把改变写法当成改变样品。
</details>
</div>

<div class="lesson-check" markdown="1">
<h3 id="retry-data">新的时间记录</h3>
<!-- task:retry-data -->
Constructed data: a baseline is constant at 22.0 °C before mixing at 120 s. After a rapid complete dissolution and probe equilibration, readings at 180, 210, 240, 270 and 300 s are 19.2, 19.3, 19.4, 19.5 and 19.6 °C. Plot and extrapolate a suitable segment to estimate the temperature change at mixing. Identify the direction of heat transfer between room and liquid. Would the same straight-line treatment be defensible if dissolution continued for 180 s after mixing? Explain.
<!-- /task:retry-data -->
<details markdown="1"><summary>Hint／提示</summary>
向前外推注意斜率符号，区分继续反应与环境交换。
</details>
<details markdown="1"><summary>Retry solution／重试解答</summary>
回暖斜率 +0.00333 $\mathrm{K\,s^{-1}}$。从 180 s 向前 60 s 得 $19.2-0.2=19.0$ °C，校正 $\Delta T=\mathbf{-3.0\,K}$。较暖室内向冷液体传热，稍后最低读数低估降温幅度。若溶解持续混合后 180 s，就与拟作恢复段的读数重叠，斜率混合反应和外界交换，不能据此证明同样的简单校正成立。
</details>
</div>

<div class="lesson-check" markdown="1">
<h3 id="retry-uncertainty">改变温差与误差类型</h3>
<!-- task:retry-uncertainty -->
Readings have stated uncertainties ±0.1 °C each. A directly observed cooling magnitude is 1.6 K. Find its worst-case reading uncertainty in kelvin and as a percentage. The thermometer also has an unchanged +0.3 °C calibration offset on both readings. Explain the offset's effect on their difference and why this does not eliminate the stated reading uncertainty or establish an unbiased enthalpy result.
<!-- /task:retry-uncertainty -->
<details markdown="1"><summary>Hint／提示</summary>
写出 (Tfinal + offset) − (Tinitial + offset)，其他误差分别考虑。
</details>
<details markdown="1"><summary>Retry solution／重试解答</summary>
最坏情形 **±0.2 K**，百分比 **12.5%**。两次不变的 +0.3 °C 偏移在相减中抵消，不代表分别变化的读数误差、探头滞后、外推不确定度或系统性外界交换消失。若将固定偏移相加成 ±0.6 K，要区分相关的校准误差与分别变化的读数误差。
</details>
</div>

<div class="lesson-check" markdown="1">
<h3 id="retry-plan">换一种装置</h3>
<!-- task:retry-plan -->
A burner loses 0.460 g of ethanol, M = 46.0 g mol−1, while heating 200.0 g water by 10.0 K. Use water c = 4.18 J g−1 K−1 to calculate the heat gained by the water and divide its negative by the apparent fuel amount inferred from mass loss. Report this as an apparent molar combustion estimate from the apparatus. Explain why these measurements alone do not establish complete combustion, absence of evaporation, complete heat capture or negligible container heat capacity, and cannot certify the true complete-combustion enthalpy. Then evaluate two observations separately: soot forms, and fuel evaporates without burning during weighing. Predict how each affects the apparent value relative to complete combustion with perfect heat collection, propose a targeted improvement or check for each, and include one fuel-handling risk control.
<!-- /task:retry-plan -->
<details markdown="1"><summary>Hint／提示</summary>
区分水的升温、燃烧器失重这两项测量，以及什么真正燃烧、热量去了哪里的假设。一种故障改变反应过程，另一种使失重超过燃烧质量。
</details>
<details markdown="1"><summary>Retry solution／重试解答</summary>
水得热 $200.0\times4.18\times10.0=8360$ J，表观燃料量 $0.460/46.0=0.0100$ mol，得到 **−836 $\mathrm{kJ\,mol^{-1}}$，仅为装置给出的表观估计**。水升温和燃烧器失重不能证明全部燃料完全燃烧、没有蒸发、热量全进入水或容器热容可忽略；**这个数并未确证乙醇真实完全燃烧焓**。烟炱表示不完全燃烧，放热比完全氧化少，结果较不负；用合适供氧的燃烧装置／方法并查烟炱，不能仅重复。蒸发增大分母而不供热，也使结果较不负；远离火焰及时盖好并称量，检查非燃烧失重。热气逸出、外界热损失与容器吸热也说明水未必收集了燃烧热。不得向热的或已点燃的燃烧器加注，按教师批准方式操作；多重复本身既不能验证这些假设，也不能修正两种已观察的故障。
</details>
</div>

稍后关闭全部帮助，重做[报告任务](#transfer-check)；Hess’s law 与 bond enthalpies 学习页可用后再继续。[AS 化学入口](/zh/alevel/as-chemistry/)。

<h2 id="sources">范围与阅读来源</h2>

[OxfordAQA 9620 specification，Version 5.3](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-chemistry-specification.pdf)，p.17，3.1.4.1–2 与 RP2。[官方 Practical Handbook](https://www.oxfordaqa.com/oaqaresources/science/teaching/a-level-practical-handbook-chemistry-4.2.pdf)，2018，pp.53–57 的硫酸铜溶解／Hess 为一种可选方案，不要求本页试剂。参考教材 Lister / Renshaw，OUP 2016，pp.81–90，Practical 2 pp.522–523。本页解释、原创图、构造读数及检查任务均重新制作，不展示扫描件；纸面任务不能确证实操完成、标准态测定或学习效果。
