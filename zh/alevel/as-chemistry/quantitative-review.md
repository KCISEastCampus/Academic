---
title: 定量化学综合练习
layout: subjects
mathjax: true
grade: as
subject: as-chemistry
lang: zh-CN
translation_of: /alevel/as-chemistry/quantitative-review/
permalink: /zh/alevel/as-chemistry/quantitative-review/
toc_headings: h2, h3
study_page: true
reading_layout: true
---

<h2 id="start-here">判断证据允许你计算什么</h2>

完成前三页后使用本页，学完另一个主题后再回来重做。首次保持提示和答案关闭，说明为什么选择的方法适用。以下均为自拟任务和构造数据，不是官方考试题或真实实验，没有规定用时和官方分值。

先修为[物质的量与方程式](/zh/alevel/as-chemistry/amount-and-equations/)、[化学式与气体](/zh/alevel/as-chemistry/formulae-and-gases/)、[溶液与滴定](/zh/alevel/as-chemistry/solutions-and-titration/)。题名不提示方法。每一步写清所研究的样品和实体，单独一个没有推理的数字不能充分说明理解。

<h2 id="mixed-tasks">从测量出发作答</h2>

<div class="lesson-check" markdown="1">
<h3 id="unknown-check">一个固体样品</h3>
<!-- task:unknown-check -->
A 1.20 g solid contains MgCO3 and an inert impurity that neither reacts nor releases gas under the conditions used. Excess HCl converts all MgCO3 to MgCl2, CO2 and H2O. Pure dry CO2 is collected without loss: 249 cm3 at 100 kPa and 300 K. Use R = 8.31 J mol−1 K−1, Mg = 24.3, C = 12.0 and O = 16.0. Write the balanced reaction, estimate the mass percentage of MgCO3 in the solid and state whether a similar result from three repeats proves the method is accurate. If some CO2 escaped but the calculation assumed no loss, predict the change in inferred purity.
<!-- /task:unknown-check -->
<details markdown="1"><summary>提示</summary>
样品质量包含不会产生所测气体的东西。先求气体 mol 数，再按原子守恒连接原物质。
</details>
<details markdown="1"><summary>解答与检查</summary>
$\ce{MgCO3(s) + 2HCl(aq) -> MgCl2(aq) + CO2(g) + H2O(l)}$。换算 $p=100000$ Pa、$V=249\times10^{-6}$ $\mathrm{m^3}$。气体量 $pV/(RT)=0.00998797\ldots$ mol，1:1 比例给出同量碳酸镁。碳酸镁质量 $0.00998797\ldots\times84.3=0.841986\ldots$ g，纯度 $0.841986\ldots/1.20\times100=\mathbf{70.2\%}$。小于 100%，与题设惰性杂质相容。重复一致支持重复性，不排除共同偏差。漏气使收集体积、推得碳酸镁量和纯度都**偏低**。如果用气体质量除以总样品质量，回看[反应比例](/zh/alevel/as-chemistry/amount-and-equations/#reaction-ratios)；如果把 249 直接当 m³，回看[气体单位](/zh/alevel/as-chemistry/formulae-and-gases/#gas-model)。
</details>
</div>

<div class="lesson-check" markdown="1">
<h3 id="evidence-check">一份报告的结论</h3>
<!-- task:evidence-check -->
A pure molecular compound contains 40.0% C, 6.67% H and the remainder O by mass. An independent measurement gives Mr = 180. Use C = 12.0, H = 1.0 and O = 16.0. Determine the empirical and molecular formulae. A report concludes “it must be glucose, because the formula matches”. Evaluate this conclusion. Which part of your own answer would remain justified if the Mr measurement were withdrawn?
<!-- /task:evidence-check -->
<details markdown="1"><summary>提示</summary>
分别问：什么决定原子比例、什么决定分子大小、什么决定具体成键排列？
</details>
<details markdown="1"><summary>解答与检查</summary>
氧由差值得 53.33%。取 100 g，原子量约为 3.333、6.67、3.333 mol，最简比 1:2:1，经验式 **$\ce{CH2O}$**，单位相对质量 30.0。$180/30.0=6$，分子式 **$\ce{C6H12O6}$**。这支持分子式，不支持唯一身份：其他化合物也可以具有这个式子。若撤去分子质量测量，只能保留经验式及其组成比例，倍数未知。若从百分数直接指定结构，回看[化学式证据的含义](/zh/alevel/as-chemistry/formulae-and-gases/#composition-model)。
</details>
</div>

<div class="lesson-check" markdown="1">
<h3 id="record-check">两份实验记录</h3>
<!-- task:record-check -->
A 25.00 cm3 aliquot of a sodium carbonate solution is fully neutralised by 0.1000 mol dm−3 HCl with a suitable indicator. Each carbonate consumes two HCl. Constructed accurate burette readings (initial, final), in cm3, are run 1 (0.10, 25.30), run 2 (0.50, 25.75), run 3 (1.00, 26.15). The stated concordance range is 0.10 cm3. Select a mean titre and calculate carbonate concentration. Each individual burette reading has stated uncertainty ±0.05 cm3: estimate the percentage reading contribution to the titre using summed absolute bounds. A second record gives very concordant titres but consistently overshoots the true endpoint. Explain the direction of its carbonate-concentration bias and why the first uncertainty estimate does not cover that fault.
<!-- /task:record-check -->
<details markdown="1"><summary>提示</summary>
先区分两读数之差、titre 平均、化学计量三步。这次未知物在锥形瓶内。
</details>
<details markdown="1"><summary>解答与检查</summary>
titre 是 **25.20、25.25、25.15 cm³**，极差 0.10，全部符合标准，平均 **25.20 cm³**。酸量 $0.1000\times0.02520=0.002520$ mol，碳酸钠为其一半 0.001260 mol，浓度 $0.001260/0.02500=\mathbf{0.05040\,mol\,dm^{-3}}$。titre 用两次读数，界限相加为 ±0.10 cm³，百分比贡献 $0.10/25.20\times100=\mathbf{0.40\%}$。它描述给定读数不确定度，不覆盖故意移后的终点或其他全部不确定度。过滴使 titre 增大，在已知酸浓度下算出酸量、碳酸钠量和浓度都**偏高**。重复可以保留偏差。若背成“过滴一定偏低”，比较[酸在滴定管中的示范](/zh/alevel/as-chemistry/solutions-and-titration/#uncertainty-and-bias)所求未知量的不同。
</details>
</div>

<div class="lesson-check" markdown="1">
<h3 id="route-check">比较两条路线</h3>
<!-- task:route-check -->
Hydrogen is the only desired product in two proposed idealised routes: A, CH4 + H2O → CO + 3H2; B, CH4 + 2H2O → CO2 + 4H2. Use C = 12.0, H = 1.0 and O = 16.0. Check both equations, compare their atom economies for hydrogen, and find the maximum H2 mass for route B starting with 16.0 g CH4 and excess steam. If 6.00 g H2 is recovered, determine its percentage yield. Can atom economy and yield alone justify recommending route B to a community? State a specific further question about hazards, waste or energy that affects that judgement.
<!-- /task:route-check -->
<details markdown="1"><summary>提示</summary>
质量分配要包含系数。比较路线时，哪些产物被视为有用物会影响结论。
</details>
<details markdown="1"><summary>解答与检查</summary>
两式 C、H、O 都守恒。A 的化学计量反应物质量 $16.0+18.0=34.0$，目标质量 $3(2.0)=6.0$，原子经济性 **17.6%**。B 为 $4(2.0)/(16.0+2(18.0))\times100=\mathbf{15.4\%}$。每个甲烷生成更多氢，不保证氢的原子经济性更高，因为分母也加入了更多水。B 中 1.00 mol 甲烷最多生成 4.00 mol 氢，即 **8.00 g**，实际回收产率 **75.0%**。还需问需要多少热、热怎样供应，或含碳副产物怎样处理，不能仅凭两个百分数决定社区推荐。题设明确 CO 不是目标产物；若出售或再利用它，目标产物的核算范围会改变。若漏乘系数，回看[百分数定义](/zh/alevel/as-chemistry/amount-and-equations/#two-percentages)。
</details>
</div>

<h2 id="recovery">找到失败的判断，再重试</h2>

根据自己的过程选择回补：实体或限制物问题，回到[物质的量重试](/zh/alevel/as-chemistry/amount-and-equations/#retry-amount)；经验式与分子式混淆，做[化学式重试](/zh/alevel/as-chemistry/formulae-and-gases/#retry-formula)；配制或终点偏差，做[滴定重试](/zh/alevel/as-chemistry/solutions-and-titration/#retry-preparation)；百分数分母混淆，做[过程重试](/zh/alevel/as-chemistry/amount-and-equations/#retry-process)。关闭示范答案再做，照抄订正不算独立证据。

<div class="lesson-check" markdown="1">
<h3 id="later-check">学过另一个主题后再回来</h3>
<!-- task:later-check -->
A 1.06 g sample contains Na2CO3 and inert material. It is quantitatively dissolved and made up to 250.0 cm3. A 25.00 cm3 aliquot consumes a mean 18.00 cm3 of 0.1000 mol dm−3 HCl at complete neutralisation. Use M(Na2CO3) = 106.0 g mol−1 and the 1:2 carbonate:HCl ratio. Determine the mass percentage of carbonate in the original sample. If the same aliquot had been diluted with extra water in its conical flask, would the result change? If the original 250.0 cm3 flask had instead been overfilled, with its actual volume ignored in the calculation, predict the direction of the reported purity bias. Explain in English without a provided sentence structure.
<!-- /task:later-check -->
<details markdown="1"><summary>提示</summary>
区分少量定量取样、全部配好的溶液、原始固体，只有其中一个包含原始全部碳酸钠量。
</details>
<details markdown="1"><summary>解答与检查</summary>
酸为 0.001800 mol，样品碳酸钠为 0.0009000 mol。总体积含十份这样的样品，为 0.009000 mol，即 **0.9540 g** 碳酸钠。纯度 $0.9540/1.06\times100=\mathbf{90.0\%}$。正确取样后向锥形瓶加水不变 mol 数及 titre，因此该模型中纯度不变。原容量瓶超过刻度则稀释了每个 25.00 cm³ 样品，titre 减小。仍把偏小样品量乘假设的十倍，会低估原碳酸钠，报告纯度**偏低**。这与取好 aliquot 后加水不是同一件事。若丢了十倍，先画样品边界再选公式。
</details>
</div>

记录首次结果、用过的帮助、修复的判断和稍后重做结果。一次做对支持当前这道任务的表现，不能证明永久掌握。[返回课程](/zh/alevel/as-chemistry/)。

<h2 id="sources">范围与来源身份</h2>

本页回顾 OxfordAQA 9620 AS 3.1.2 与 RP1，以[现行大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-chemistry-specification.pdf)为范围依据。所有任务和数值为自拟，不是复制的试卷，不赋官方分值。路线比较是指定目标产物下的简化计算，不是实测工业或环境评估。其余 AS 化学与必做实验尚不在本批学习路线内。
