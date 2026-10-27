---
title: 环氧乙烷：开环机理与工艺证据
layout: subjects
mathjax: true
grade: as
subject: as-chemistry
lang: zh-CN
translation_of: /alevel/as-chemistry/epoxyethane/
permalink: /zh/alevel/as-chemistry/epoxyethane/
toc_headings: h2, h3
study_page: true
reading_layout: true
---

<h2 id="start-here">为什么这个小环容易打开？</h2>

环氧乙烷 epoxyethane，C₂H₄O，由两个 CH₂ 和一个 O 组成三元环，是工业中间体。把受张力的环醚打开，可得到有用官能团。本页要解释制备、重建水／醇开环机理并评价工艺判断。先修为[化学键](/zh/alevel/as-chemistry/bonding-and-shape/)和[电子对弯箭](/zh/alevel/as-chemistry/halogenoalkanes/#electron-pair-bridge)。题目和图均自拟，工艺比较为构造材料而非工厂测量。

<h2 id="production">选择部分氧化，而不是完全燃烧</h2>

工业用乙烯与氧气在**升温的银催化剂**上反应，控制进料、移热及适当压力。目标部分氧化：

$$\ce{2C2H4 + O2 -> 2C2H4O}$$

O₂为氧化剂，银提供有效催化路径并再生。竞争的完全氧化 $\ce{C2H4 + 3O2 -> 2CO2 + 2H2O}$ 消耗原料却不产环氧乙烷。条件与催化剂有利目标路线才提高选择性，不能认为无限升温或加氧必增目标产物。转化率、选择性、产率与原子经济性不同；目标式全部原子进入一种产物，理论原子经济性100%，实际副反应／损失仍会降低产率。

进料与产物有燃爆风险，反应放热，环氧乙烷有毒且致癌。工业需合适密闭设备、控制气体组成、移热及防泄漏暴露；这是工艺判断，不是在校制备方法。本页不把工厂唯一温压或旧产量数字加作必背要求。

<div class="lesson-check" markdown="1">
<h3 id="process-check">评价生产提议</h3>
<!-- task:process-check -->
Write the partial-oxidation and complete-combustion equations for ethene. Identify the oxidant and desired catalyst. A constructed proposal says “the target reaction has 100% atom economy, so the factory must have 100% yield and no waste; raising temperature alone guarantees improvement”. Evaluate all three claims and name two different controls, each linked to a specific process risk. Do not invent plant operating numbers.
<!-- /task:process-check -->
<details markdown="1"><summary>提示</summary>
区分目标方程与实际可能反应和损失。
</details>
<details markdown="1"><summary>解答与检查</summary>
部分：2C₂H₄+O₂→2C₂H₄O；完全：C₂H₄+3O₂→2CO₂+2H₂O。氧化剂O₂，银催化。原子经济只描述理想目标式；燃烧、未反应及损失降低产率并有废物。温度改变各路径速率，不能保证改善。气体组成控制防可燃混合，移热防放热失控，密闭与泄漏监测防毒性暴露。若混同产率和原子经济，回[不同分母](/zh/alevel/as-chemistry/amount-and-equations/#two-percentages)，再做新提议重试。
</details>
</div>

<h2 id="ring-strain">释放张力，同时守恒原子</h2>

三元环角约60°，远离碳较舒展的四面体环境；角张力加上极性 C–O，使开环较容易。这里没有 C=C，不能凭空画 π 键套烯烃加成。开环断**一条环 C–O**，保留 C–C，新亲核体形成一条键，最终碳仍四键。

酸催化先让环O孤对给质子，形成 O–H；O三键带正，使相连碳更易受亲核进攻。在此酸性模型由**中性水或ROH**给进攻电子对，不把环先质子化后又无解释地使用大量OH−。碱性路径需要另一组自洽条件和步骤，不混入本路线。

<h2 id="water-opening">用水的三步开环追踪电子</h2>

总水解式 $\ce{C2H4O + H2O -> HOCH2CH2OH}$，产物为 **ethane-1,2-diol（乙二醇）**。机理须画出环，单写 C₂H₄O 不能表示连接。

1. 环O孤对→H⁺，质子化环O有三键、带正。
2. 水O孤对→环C，同时该C–环O键对→原环O；原环O成为中性–OH，新接入水O三键带+1。开链中间体 HOCH₂CH₂OH₂⁺，对称环两端选哪一端等效。
3. 第二个水O孤对→新氧鎓O上的H，原O–H键对→该氧鎓O，生成中性二醇及H₃O⁺，再生酸催化剂，总图常简写H⁺。

<div class="worked-example" markdown="1">
**自拟完整电子计数示范。**第二步由+1环与中性水得到仍+1的开链中间体；第三步正离子加中性水得中性二醇与H₃O⁺，总+1。相消催化物种后净加一分子水，第二分子水只转移质子，不生成一碳碎片。

<div role="region" aria-label="水的开环机理" tabindex="0" style="overflow-x:auto" markdown="1">

![原创三步酸催化开环：环O孤对给H+；水O孤对进攻环C同时C–O键对回原O；第二水取氧鎓上的H且O–H键对回O，生成乙二醇及H3O+。](/assets/img/chemistry-as-epoxy-water.svg){: width="700" height="980" style="min-width:650px" }

</div>
</div>

<h2 id="alcohol-opening">改变亲核体，保留环中两碳</h2>

把进攻水换成 **ROH**，同样先质子化再开环。醇O接入后是三键氧鎓 –O⁺(H)R，再脱质子再生酸，产物 **HOCH₂CH₂OR**，不是 HOCH₂CH₂CH₂R；O打断碳的连续连接。甲醇时：

$$\ce{C2H4O + CH3OH -> HOCH2CH2OCH3}$$

完整图从醇O孤对起箭，接入后该O带正，脱质子的键对回该O。水／醇等可用粒子作碱，但必须写相应共轭酸保电荷。原环O提供一端OH，试剂O提供醚连接。

<div class="lesson-check" markdown="1">
<h3 id="opening-check">更换供体并作图</h3>
<!-- task:opening-check -->
Epoxyethane reacts with ethanol under acid catalysis. Draw the cyclic starting structure, the product with every O connectivity shown and the complete mechanism. Include protonation, attacking lone pair, breaking ring bond, intermediate charges and deprotonation/catalyst regeneration. Write the net equation and explain why the product does not have a continuous four-carbon chain. Then explain what changes if water is the nucleophile instead. Explain why the three-membered ring is reactive, comparing its bond angles with a relaxed tetrahedral carbon environment and identifying the role of C–O polarity.
<!-- /task:opening-check -->
<details markdown="1"><summary>提示</summary>
在自己图上把原环O标Oa、试剂O标Ob，沿全过程保持身份。
</details>
<details markdown="1"><summary>解答与检查</summary>
三元环角约60°，远离较舒展的四面体约109.5°；开环缓解角张力，极性C–O使碳易受亲核进攻。产物HOCH₂CH₂OCH₂CH₃，C₂H₄O+C₂H₅OH→C₄H₁₀O₂。环O孤对给H⁺；乙醇O孤对→环C，同时环C–O对回原O；中间体HOCH₂CH₂O⁺(H)CH₂CH₃。碱孤对→该O上的H，O–H对回O，中性醚形成且酸再生。环给C₂、乙醇另给C₂，中间由O连接。水则经HOCH₂CH₂OH₂⁺给二醇。若错加C–C，回[追踪氧](#alcohol-opening)，再换供体重试。
</details>
</div>

<div class="lesson-check" markdown="1">
<h3 id="repair-check">审核电子图</h3>
<!-- task:repair-check -->
An acid-catalysed drawing protonates the ring O but labels it neutral; its next arrow starts at the attacking water H and points to carbon; the final product retains an O with three bonds but no charge, with no proton-transfer step. Identify and repair each defect. Explain why merely replacing water with OH− in this acidic drawing does not supply a coherent corrected pathway.
<!-- /task:repair-check -->
<details markdown="1"><summary>提示</summary>
分别检查价键数、电子对来源与介质。
</details>
<details markdown="1"><summary>解答与检查</summary>
质子化环O三键带+1；进攻从中性水O孤对出发，不从H出发，环C–O对回原O。接入O三键带+1，须画碱给电子对取O上质子且O–H对回O；最终每O两键、酸再生。酸性模型中OH−不是丰富进攻物；碱性法应攻未质子化环，再让烷氧负离子质子化，是另一套一致条件。若只改电荷未改箭尾，回[电子对来源](/zh/alevel/as-chemistry/halogenoalkanes/#electron-pair-bridge)，再独立重画。
</details>
</div>

<h2 id="uses">产物有用，判断仍需有条件</h2>

乙二醇用于防冻混合液与化工原料，但有毒，不能因有OH就当安全。进一步开环可形成醚链；疏水烷基与亲水聚醚／OH部分组合的产物能作 **surfactants（表面活性剂）**，两部分分别与油、水相互作用。用途由结构解释，不是“醚能溶解一切”。

经济收益包括下游材料与理想高原子利用；同时要评价能耗、副燃烧、排放、暴露及使用后废物。产物有用或碳源非石油都不证明零环境成本；本页不冒充实测生命周期总量。

<div class="lesson-check" markdown="1">
<h3 id="use-check">把结构连到决策</h3>
<!-- task:use-check -->
A proposed surfactant has a long alkyl group connected to an oxygen-rich chain ending in OH. Explain the roles of its two regions. Compare this benefit with two distinct production/use limitations of the epoxyethane route. Explain why 100% target atom economy is insufficient to choose the environmentally preferable process.
<!-- /task:use-check -->
<details markdown="1"><summary>提示</summary>
区分分子功能与完整生产／处置记账。
</details>
<details markdown="1"><summary>解答与检查</summary>
非极性烷基与油相作用，富氧／OH部分与水作用，有助界面与混合；不能因此消除环氧乙烷暴露、燃爆／放热、能耗、副产及处置问题。原子经济漏掉转化、能耗与毒性，要比较真实工艺与边界数据。若只列空泛成本，回[具体工艺](#production)，再评价新提议。
</details>
</div>

<h2 id="retry">更换产物或工艺提议</h2>

<div class="lesson-check" markdown="1">
<h3 id="retry-opening">另一种醇</h3>
<!-- task:retry-opening -->
Draw acid-catalysed opening of epoxyethane with propan-1-ol, including all intermediates and proton-transfer arrows. Give the structural product and molecular formula. Compare with water opening in atom count, and explain why no CO2 is required as a byproduct. Does changing from water to propan-1-ol remove the ring strain of the starting epoxyethane? Explain why opening remains favoured by strain relief.
<!-- /task:retry-opening -->
<details markdown="1"><summary>提示</summary>
保留两种来源的O与原C–C，只开一条环C–O。
</details>
<details markdown="1"><summary>解答与检查</summary>
HOCH₂CH₂OCH₂CH₂CH₃，C₅H₁₂O₂；C₂H₄O+C₃H₈O→C₅H₁₂O₂。先环O质子化，丙醇O孤对进攻环C，环C–O对回原O，新三键O标+，再脱质子再生酸；水给C₂H₆O₂。换用丙醇并未改变起始三元环的角张力，开环仍可缓解它。所有原子进入加成物，不必生成CO₂，工业竞争燃烧另算。电荷／氧追踪错时收此答案重画。
</details>
</div>

<div class="lesson-check" markdown="1">
<h3 id="retry-process">更换判断</h3>
<!-- task:retry-process -->
A process converts more ethene after a temperature change, but a larger fraction forms CO2. What further quantities are needed to judge epoxyethane yield and environmental performance? Explain one useful application of the water-opening product and why it does not justify uncontrolled disposal. Return to this question after another topic with help closed.
<!-- /task:retry-process -->
<details markdown="1"><summary>提示</summary>
不要用总原料消耗代替目标产物量。
</details>
<details markdown="1"><summary>解答与检查</summary>
需目标产物／进料、选择性／回收、能耗／移热及明确排放废物边界；转化高不保证目标产率高。乙二醇可作防冻／原料但有毒，仍需受控处置。结论依数据，不能宣布某过程普遍最优。混淆时回[转化与原子经济](#production)，再写有条件的新结论。
</details>
</div>

<h2 id="sources">范围与来源</h2>

[OxfordAQA9620大纲5.3](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-chemistry-specification.pdf)，3.3.4.4。已读用户教材印刷234–235，但不照抄质子化环／OH−混合图；本页统一酸催化、中性水／醇进攻与酸再生。与碱性路径的比较用来核条件，不新增强制工业机理。接[醇](/zh/alevel/as-chemistry/alcohols/)及[混合综合](/zh/alevel/as-chemistry/as-review/)；尚未验证真实操作或学生表现。
