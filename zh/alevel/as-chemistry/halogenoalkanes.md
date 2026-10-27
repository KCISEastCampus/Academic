---
title: 卤代烷——选择反应并画出机理
layout: subjects
mathjax: true
grade: as
subject: as-chemistry
lang: zh-CN
translation_of: /alevel/as-chemistry/halogenoalkanes/
permalink: /zh/alevel/as-chemistry/halogenoalkanes/
toc_headings: h2, h3
study_page: true
reading_layout: true
---

<h2 id="start-here">同一种起始物，为什么有不同产物？</h2>

卤代烷（halogenoalkane）的卤素连在饱和碳上。替换卤素可以得到醇、腈或胺；若同时移走相邻碳上的氢，还可以得到烯烃。只知道起始结构，不能确定哪种产物更有利。我们还需要试剂、溶剂和温度，以及能交代每一条成断键和电荷变化的模型。

本页将训练选择条件、画电子对移动、评价反应速率证据。你需要会读简单结构式，知道原子和电荷守恒；下面的先修桥梁会直接讲解新用到的电子对语言。复习时可以先做[综合任务](#mixed-check)，再按错误回补。本页对应 OxfordAQA 9620 AS §3.3.3.1–2，不扩展为 A2 的胺和腈后续化学。

**所有示范、任务及检查点均为自拟（constructed），不赋官方分值。** 图为原创示意图。请记录有没有打开提示；借助帮助做对仍是有价值的练习，但不能计作无帮助的独立表现。

<div class="lesson-check" markdown="1">
<h3 id="structure-start">先读懂起始结构</h3>
<!-- task:structure-start -->
Expand CH3CH2Br so that every bond to each carbon is shown. Count the bonds around each carbon. Compare it with CH3CHBrCH3: which carbon is bonded to Br, and how many carbon atoms are directly attached to that carbon? Do not predict a reaction yet.
<!-- /task:structure-start -->
<details markdown="1"><summary>提示</summary>
每个中性碳有四条键。CH2 除了另外两条键，还包含两条 C–H 键。
</details>
<details markdown="1"><summary>解答与检查</summary>
溴乙烷的第一个碳有三条 H 键和一条 C 键；第二个碳有两条 H 键、一条 C 键和一条 Br 键。2-bromopropane 的中间碳分别连着 H、Br 和另外两个碳。因此，带 Br 的碳在前者有一个碳邻居，在后者有两个。如果出现五键碳，先把缩写基团展开，再添加其他键。这种数键方法将用于检查机理，而不只是记图。
</details>
</div>

<h2 id="electron-pair-bridge">追踪电子，不是移动原子标签</h2>

这些例子中，碳通常有四条键；中性氧有两条键、两对孤对电子；中性氮有三条键、一对孤对电子。**孤对电子（lone pair）**是外层未参与成键的一对电子。OH− 有一条 O–H 键和三对氧孤对；NH3 有三条 N–H 键和一对氮孤对。图中只画参与反应的孤对，其他未反应孤对省略。代表共价键的一条线已经表示一对电子，不能再在同一条键上多加一对点。

卤素比碳更强地吸引 C–X 成键电子，因此键具有极性：$\ce{C^{\delta+}-X^{\delta-}}$。部分电荷 δ 描述中性分子内部的不均等共享，**不表示**起始碳已经是游离 C+。**亲核试剂（nucleophile）**提供电子对形成共价键。OH−、CN− 带负电；NH3 虽然中性，也有可提供的电子对。

完整箭头的**弯箭（curly arrow）**表示一对电子移动。尾端必须从看得见的孤对或键出发，箭头端到达接受电子对的原子或键。普通直反应箭头只连接反应物和产物，不能代替电子弯箭。取代时，亲核试剂向缺电子的碳提供电子对，C–X 键电子对随 X 离去。这是**异裂（heterolytic bond breaking）**：离去基团为 X−，不是自由基或 X+。

CH3CH2– 始终代表同一个二碳片段；R 表示仍连在原位的烷基片段。消去图中，即使其余基团使用缩写，也必须展开真正发生变化的那条 C–H 键。**邻碳**指与带 X 的碳直接通过 C–C 键相连的碳。需要回补时可读[有机基础](/zh/alevel/as-chemistry/organic-foundations/)和[化学键与形状](/zh/alevel/as-chemistry/bonding-and-shape/)；本页桥梁提供继续学习所需的知识。

<h2 id="substitution">用电子对供体替换卤素</h2>

卤代烷与氢氧化钠或氢氧化钾**水溶液**一起温热，有利于取代生成醇。需要加热时可以回流（reflux）：冷凝管把蒸气冷凝回反应器，减少挥发性物质损失；回流不是反应类型。Na+、K+ 是旁观离子，所以机理画分开的 OH−，不能把 KOH 画成共价 K–O–H 分子。富水介质是关键；水相制备有时会加一些乙醇，帮助有机物与水混合。

<div class="worked-example" markdown="1">
**完整示范——溴乙烷与水溶液中的 hydroxide（自拟）。**

先找与 Br 相连的碳：C–Br 有极性，而且要被替换的就是这条键。画出 OH− 的一对氧孤对，从该孤对画弯箭到这个碳，再从 C–Br 键画第二条弯箭到 Br。在这里的入门取代模型中，两次移动共同描述成键与断键；不要额外画一个独立、稳定的五键碳中间体。

<div class="table-responsive" role="region" aria-label="氢氧根取代示范图，可横向滚动" tabindex="0" style="overflow-x:auto" markdown="1">

![OH− 的氧孤对指向带 Br 的碳；C–Br 键电子对移向 Br。产物为乙醇和 Br−。](/assets/img/chemistry-as-halogenoalkanes-substitution.svg){: width="680" height="340" style="min-width:680px" }

</div>

$$\ce{CH3CH2Br + OH- -> CH3CH2OH + Br-}$$

检查变化：C–Br 变成 C–O，碳仍是四键，产物氧有两条键。两边都有两个碳、五个连在碳上的氢、一个连在氧上的氢、一个氧和一个溴；净电荷两边都是 −1。这是亲核取代；在水相反应中以 OH 替换卤素，也常称**水解（hydrolysis）**。
</div>

双箭图是针对所示底物的 AS 概要模型，不证明所有卤代烷都走相同的详细路径。本页不要求推导 SN1/SN2 速率定律或立体化学结果。

<div class="lesson-check" markdown="1">
<h3 id="mechanism-check">补全一个新结构</h3>
<!-- task:mechanism-check -->
1-bromopropane is warmed with aqueous NaOH to favour substitution. Copy the incomplete scaffold below, add the reacting species with its charge and lone pair, draw the complete curly-arrow mechanism, and give the organic product and leaving ion. Check atoms and total charge. Explain why an arrow starting at the carbon and pointing to oxygen would be wrong.
<!-- /task:mechanism-check -->

<div class="table-responsive" role="region" aria-label="未完成底物图，可横向滚动" tabindex="0" style="overflow-x:auto" markdown="1">

![待补骨架：CH3 连着 CH2，再连着 CH2Br；未提供试剂、电子弯箭或产物。](/assets/img/chemistry-as-halogenoalkanes-practice.svg){: width="680" height="340" style="min-width:680px" }

</div>

<details markdown="1"><summary>提示</summary>
找出必须断开的原有键，再找试剂上哪一对电子能形成替代的新键。
</details>
<details markdown="1"><summary>解答与检查</summary>
产物为 propan-1-ol，CH3CH2CH2OH，以及 Br−。OH− 氧孤对 → 末端碳；C–Br 键 → Br。若从碳画到氧，就颠倒了电子来源：这里的碳接受电子对。净电荷保持 −1，C3 碳链不变。

<div class="table-responsive" role="region" aria-label="取代解答图，可横向滚动" tabindex="0" style="overflow-x:auto" markdown="1">

![解答：OH− 氧孤对移向末端碳，C–Br 键电子对移向 Br，生成 propan-1-ol 和 Br−。](/assets/img/chemistry-as-halogenoalkanes-practice-substitution-answer.svg){: width="680" height="370" style="min-width:680px" }

</div>

若弯箭起点有误，回看[电子对桥梁](#electron-pair-bridge)，关闭本解答，再做[改变底物的重试](#retry-mechanism)。
</details>
</div>

<h2 id="other-nucleophiles">供体改变，新官能团也改变</h2>

碳仍失去 X，但供体原子决定新形成的键。**腈（nitrile）**含 –C≡N；**一级胺（primary amine）**含连着一个碳基团的 –NH2。这里先建立辨认产物所需的结构，不提前加入这些物质的后续反应。

<h3 id="cyanide">氰离子让碳链多一个碳</h3>

与溶于含水乙醇的 KCN 或 NaCN 一起加热，常用回流。在此反应中，CN− 用**碳端**孤对成键，形成新的 C–C 键；CN 内部的三键保留。所以溴乙烷得到 CH3CH2C≡N，即 **propanenitrile（丙腈）**：腈基的碳必须计入三碳主链。若写成 CH3CH2N≡C，就改变了连接次序。

<div class="table-responsive" role="region" aria-label="氰离子取代示范图，可横向滚动" tabindex="0" style="overflow-x:auto" markdown="1">

![CN− 碳端孤对进攻带 Br 的碳，C–Br 键电子对移向 Br；二碳溴乙烷变成三碳 propanenitrile 和 Br−。](/assets/img/chemistry-as-halogenoalkanes-cyanide.svg){: width="680" height="340" style="min-width:680px" }

</div>

$$\ce{CH3CH2Br + CN- -> CH3CH2CN + Br-}$$

电荷保持 −1，新增碳来自 CN−。负号表示整个离子的净电荷，不是弯箭应当出发的位置；箭尾从碳孤对出发。腈的水解、还原不属于本页。

<h3 id="ammonia">中性氨先生成带电中间体</h3>

用**过量浓氨的乙醇溶液，在合适设备中加热加压**。氨易挥发，需要可承压的专用设备，不能临时密封普通试管。N 孤对形成新 C–N 键后，氮有四条键并带 +1；这里的中间体为 CH3CH2NH3+，属于**烷基铵离子（alkylammonium ion）**。第二个 NH3 接受质子：它的孤对指向与 N 相连的 H，原 N–H 键电子对回到原来的 N，胺因而重新获得孤对。因此不能像处理 OH− 一样，把中性 NH3 直接替换进去就结束。

<div class="table-responsive" role="region" aria-label="氨取代与脱质子两步示范图，可横向滚动" tabindex="0" style="overflow-x:auto" markdown="1">

![第一步：中性 NH3 的氮孤对进攻带 Br 的碳，C–Br 键电子对移向 Br。第二步：另一 NH3 接受四键正电氮上的 H，原 N–H 键电子对回到 N；生成乙胺、NH4+ 和 Br−。](/assets/img/chemistry-as-halogenoalkanes-ammonia.svg){: width="680" height="610" style="min-width:680px" }

</div>

$$\ce{CH3CH2Br + NH3 -> CH3CH2NH3+ + Br-}$$

$$\ce{CH3CH2NH3+ + NH3 -> CH3CH2NH2 + NH4+}$$

总反应为 $\ce{CH3CH2Br + 2NH3 -> CH3CH2NH2 + NH4+ + Br-}$。第一步两边净电荷均为零，第二步两边均为 +1；总反应净电荷为零。过量 NH3 有利于一级胺生成，减少胺进一步取代的机会，但不保证产物纯净。进一步烷基化机理留到 A2。

这些是需要在纸面解释的反应选择，不是无人监督的实验配方。氰化物剧毒，不能接触酸，否则可能释放 HCN；使用必须遵守专门批准的方法。挥发性卤代烷和氨需要合适通风；乙醇易燃，应远离明火；氢氧化物有腐蚀性。实际操作需要教师批准、护目镜、适用装置及受控废物收集。完成本页不表示已经完成真实实验。

<div class="lesson-check" markdown="1">
<h3 id="route-check">把两条路线转成机理</h3>
<!-- task:route-check -->
Starting with CH3CH2CH2Cl, choose reagents, solvent and heating conditions for (A) a nitrile with four carbon atoms and (B) a primary amine with three carbon atoms. Draw and name each organic product. Draw complete curly-arrow mechanisms for both routes, including the intermediate charge and proton-transfer arrows where needed. Write balanced net equations and explain why a neutral molecule can be a nucleophile.
<!-- /task:route-check -->
<details markdown="1"><summary>提示</summary>
先判断试剂是否带来一个新碳，再数氮给出孤对前后的键数。
</details>
<details markdown="1"><summary>解答与检查</summary>
A：KCN/NaCN 的含水乙醇溶液，加热回流，得到 CH3CH2CH2C≡N，即 butanenitrile。CN− 碳孤对 → 带 Cl 的碳；C–Cl 键 → Cl。净反应 $\ce{CH3CH2CH2Cl + CN- -> CH3CH2CH2CN + Cl-}$，两边电荷均为 −1。

B：过量浓 NH3 的乙醇溶液，在适当设备中加热加压，得到 CH3CH2CH2NH2，即 propan-1-amine。N 孤对 → 带 Cl 的碳；C–Cl 键 → Cl，生成 CH3CH2CH2NH3+ 和 Cl−。随后第二个 NH3 孤对 → 与 N 相连的 H，原 N–H 键 → N。总反应 $\ce{CH3CH2CH2Cl + 2NH3 -> CH3CH2CH2NH2 + NH4+ + Cl-}$，净电荷为零。中性 NH3 也能作亲核试剂，因为它有能形成新键的孤对。

用 [CN 图](#cyanide)和 [NH3 图](#ammonia)检查自己画的箭尾，不能只核对分子式。若漏了新增碳或正电中间体，回补相应解释后做[反向选路线重试](#retry-routes)。
</details>
</div>

<h2 id="competing-pathways">同一个 OH− 可以有两种角色</h2>

OH− 向**碳**提供电子对时，作为亲核试剂替换 X；接受**邻碳上的质子**时，作为碱。从相邻两个碳上移去 H 和 X，使 C=C 能形成，这叫**消去（elimination）**。两种反应彼此竞争；改变条件改变倾向，不是让另一条反应绝对停止。

| NaOH/KOH 的条件 | 较有利路线 | OH− 的角色及预期官能团 |
| --- | --- | --- |
| 富水的水溶液；必要时温热 | 取代 | 亲核试剂进攻碳；得到醇 |
| 热的浓乙醇溶液，含水很少 | 消去 | 碱接受邻碳 H+；得到烯烃 |

温度也影响反应快慢，不能只凭加热判断路线：水相取代也常加热。水相制备中少量乙醇可以只是共溶剂。**仅看到乙醇不能判定消去**：前面的乙醇氨、氰化物条件都用于取代。试剂、溶剂和有关加热条件必须一起说清。底物结构也很关键：应寻找可用的邻碳 C–H 键，不能假定每一种卤代烷都能消去。

<div class="lesson-check" markdown="1">
<h3 id="conditions-check">预测结果并说明限度</h3>
<!-- task:conditions-check -->
Two portions of CH3CHBrCH3 are treated separately: A with warm aqueous KOH, B with hot concentrated KOH in ethanol containing little water. Give the favoured organic product and the role of OH− in each. Write balanced net equations. A student says “B contains ethanol, so only one product can form.” Evaluate that claim and explain why the temperature statement alone would not distinguish A from B.
<!-- /task:conditions-check -->
<details markdown="1"><summary>提示</summary>
比较进攻碳与移去邻碳上的氢。需要同时给出倾向和限制。
</details>
<details markdown="1"><summary>解答与检查</summary>
A 较有利于 propan-2-ol：$\ce{CH3CHBrCH3 + OH- -> CH3CH(OH)CH3 + Br-}$，OH− 作亲核试剂。B 较有利于 propene：$\ce{CH3CHBrCH3 + OH- -> CH2=CHCH3 + H2O + Br-}$，OH− 作碱。两式两边净电荷都为 −1。取代和消去可以并存，溶剂不能证明产物纯净。两组都加热，因此还必须考虑溶剂组成和试剂条件。若解释成“热就是消去”，回看[条件比较](#competing-pathways)，再做[改变碳骨架的重试](#retry-conditions)。
</details>
</div>

<h2 id="elimination">三个相连的电子对移动形成双键</h2>

<div class="worked-example" markdown="1">
**完整示范——2-bromopropane 与热乙醇 KOH（自拟）。**

先定位带 Br 的碳，再找邻碳上的 C–H 键。该分子对称，从任一端选择 H 都得到同一种 propene 连接方式。明确展开该 H，画 OH− 氧孤对 → H；该 C–H 键 → C–C 键，增加一条 π 键；C–Br 键 → Br。三个移动生成水、丙烯和 Br−，属于同一个消去概要，不是一串电子缺失却稳定存在的分子。

<div class="table-responsive" role="region" aria-label="消去机理示范图，可横向滚动" tabindex="0" style="overflow-x:auto" markdown="1">

![三个弯箭：OH− 氧孤对移向邻碳 H，该 C–H 键电子对移向相邻 C–C 键，C–Br 键电子对移向 Br；产物是丙烯、水和 Br−。](/assets/img/chemistry-as-halogenoalkanes-elimination.svg){: width="680" height="370" style="min-width:680px" }

</div>

检查 $\ce{C3H7Br + OH- -> C3H6 + H2O + Br-}$：两边 C = 3、H = 8、O = 1、Br = 1，净电荷 = −1。“失去 HBr”描述的是从有机分子移走哪些原子；在这个碱性混合物中，净产物为水和溴离子，不是积累游离 HBr。OH− 没有把氧插进烯烃。图表现成断键，不表示精确三维几何或实测反应轨迹。
</div>

<div class="lesson-check" markdown="1">
<h3 id="elimination-check">改变条件后重新使用骨架</h3>
<!-- task:elimination-check -->
Use the same incomplete 1-bromopropane scaffold from the earlier task. This time the conditions are hot concentrated KOH in ethanol with little water. Draw a complete mechanism for the favoured route, including the specific C–H bond that changes, every electron-pair arrow, and all products and charges. Explain why removing H from the carbon bearing Br would not give the required alkene.
<!-- /task:elimination-check -->
<details markdown="1"><summary>提示</summary>
新双键的两个碳必须原本就是邻居。追踪哪一对电子供应增加的那条键。
</details>
<details markdown="1"><summary>解答与检查</summary>
移走中间碳上的 H，它与末端 CH2Br 相邻。氧孤对 → 此 H；该 C–H 键 → 中间碳与末端碳之间的键；C–Br 键 → Br。产物为 CH3CH=CH2（propene）、H2O 和 Br−。若 H 和 Br 都从同一碳上移走，就没有这里要求的邻碳 C–H 电子对来形成 C=C。

<div class="table-responsive" role="region" aria-label="消去解答图，可横向滚动" tabindex="0" style="overflow-x:auto" markdown="1">

![解答：OH− 接受中间碳上的 H，该 C–H 电子对形成中间碳与末端碳的 C=C，C–Br 电子对随 Br 离去；生成丙烯、水和 Br−。](/assets/img/chemistry-as-halogenoalkanes-practice-elimination-answer.svg){: width="680" height="370" style="min-width:680px" }

</div>

若从 H 画弯箭，或选错失去 H 的碳，回看[三个电子对移动](#elimination)。收起本解答后在纸上重画，再做[新骨架重试](#retry-conditions)。
</details>
</div>

<h2 id="rate-evidence">解释速率趋势，再问实际测到了什么</h2>

对**相同碳骨架、相同条件**下可比的氯代、溴代、碘代烷，水解通常按 RCl < RBr < RI 变快。C–I 比 C–Br 弱，C–Br 比 C–Cl 弱；碘代物的 C–X 更容易断裂。很强的 C–F 键使氟代物在普通水解条件下反应慢得多。碳卤键焓很重要，但其数值并不等于溶液反应的活化能；不能只凭它比较不同骨架或溶剂下的速率。

极性解释碳为什么会受到进攻，却不能直接给出观察到的卤素速率次序。“C–Cl 更极性，所以 RCl 必比 RI 快”忽略了必须断裂的键有多强。这里比较的是分子内 C–X 键，不是分子间作用力或沸点。

一种定性证据路线使用硝酸银水溶液和乙醇–水介质。水参与水解，乙醇帮助难溶于水的有机物混合。释放的卤离子生成 $\ce{Ag+(aq) + X-(aq) -> AgX(s)}$：AgCl 白色、AgBr 奶油色、AgI 黄色。**沉淀**是卤离子释放的观察证据；硝酸银不直接测醇浓度。这个比较体系不同于上面的热乙醇 KOH 制备，不能再加入 KOH，否则氧化银沉淀会干扰观察。

先让各混合物在受控水浴中达到同温，混合时开始计时，并保持底物浓度／物质的量、总体积、溶剂比例、硝酸银浓度、混合方式和观察标准一致。较快达到规定浑浊程度可定性支持卤离子释放较快；但不同沉淀的溶解度和可见性不同，首次可见时间不表示精确相同的转化程度，更不是速率常数。要测数值速率，需要经校准的浓度–时间测量。重复用于估计离散程度，空白用于检查试剂污染。使用水浴避免乙醇附近明火的点燃危险，但不能代替通风及教师化学风险评估；含银废液须单独收集。

<div class="lesson-check" markdown="1">
<h3 id="evidence-check">这些证据支持什么结论？</h3>
<!-- task:evidence-check -->
Constructed demonstration results, not measurements: equal-concentration solutions of 1-chlorobutane, 1-bromobutane and 1-iodobutane are compared at the same bath temperature, solvent ratio, silver nitrate concentration and total volume. Times to first visible precipitate are 180 s, 65 s and 12 s respectively. State the qualitative rate order and explain it using the bond that changes. Identify the expected precipitate in the iodoalkane tube and write its ionic formation equation. Explain the roles of water and ethanol. Explain why these times neither establish an exact rate ratio of 15:1 for iodo/chloro nor identify a unique detailed substitution pathway. Suggest a control, a way to assess repeatability and one safety choice with a reason.
<!-- /task:evidence-check -->
<details markdown="1"><summary>提示</summary>
把有机物断键与随后可见沉淀分开。想一想：“可见”是否保证三管发生了相同的浓度变化？
</details>
<details markdown="1"><summary>解答与检查</summary>
这些匹配条件下，结果支持 RI 比 RBr 快，RBr 比 RCl 快。三者中 C–I 最弱，更易断开；C–Cl 最强。黄色 AgI 形成：$\ce{Ag+(aq) + I-(aq) -> AgI(s)}$。水是水解试剂，乙醇帮助有机组分与水相混合。

180/12 = 15 是沉淀出现时间之比，不是已证实的反应速率比；可见性和溶解度不保证同样的转化程度，这个观察量也不能区分详细取代路径。例如保持底物浓度和溶剂比例相等；各条件重复并比较离散程度，不能只信一个时间。试剂空白可检查卤离子污染。乙醇易燃，采用远离明火的水浴；遵守批准的通风安排并分收含银废物。若按极性排列，或把浑浊直接当醇浓度，回看[证据链](#rate-evidence)，再做[比较重试](#retry-evidence)。
</details>
</div>

<h2 id="repair-and-retry">修复原因，再换条件重试</h2>

做下列自拟重试前，收起此前解答。若化学正确但英文解释不完整，应补电子来源、去向和条件，不是堆更多彼此分离的关键词。

<div class="lesson-check" markdown="1">
<h3 id="retry-mechanism">更小的起始分子</h3>
<!-- task:retry-mechanism -->
CH3Br is warmed with aqueous NaOH. Draw the substitution mechanism, product and charges. Then decide whether this same molecule can undergo the neighbouring-carbon elimination described on this page, even with hot ethanolic KOH. Justify your answer from its structure.
<!-- /task:retry-mechanism -->
<details markdown="1"><summary>提示</summary>
先画出全部碳，再寻找邻碳 C–H 键。
</details>
<details markdown="1"><summary>重试解答与检查</summary>
OH− 氧孤对 → C；C–Br 键 → Br，得到 CH3OH 和 Br−，电荷 −1 守恒。CH3Br 只有一个碳，没有邻碳，不能按这里的消去方式得到烯烃。热乙醇不能凭空创造缺少的 C–C 键。如果从 Br 画箭到 OH−，回看[电子来源](#electron-pair-bridge)。
</details>
</div>

<div class="lesson-check" markdown="1">
<h3 id="retry-routes">从目标反向选择</h3>
<!-- task:retry-routes -->
From 1-bromobutane, a chemist needs (A) pentanenitrile and separately (B) butan-1-amine. Give suitable reagents and conditions, structural formulae and balanced net equations. Draw the N-containing intermediate and all proton-transfer arrows for B. Explain why swapping the two reagents would miss the target carbon count.
<!-- /task:retry-routes -->
<details markdown="1"><summary>提示</summary>
把腈基碳计入碳链，比较 C 上的孤对与 N 上的孤对。
</details>
<details markdown="1"><summary>重试解答与检查</summary>
A：KCN/NaCN 的含水乙醇溶液，加热回流。$\ce{CH3CH2CH2CH2Br + CN- -> CH3CH2CH2CH2CN + Br-}$，得到 pentanenitrile。B：过量浓 NH3 的乙醇溶液，在适当装置中加热加压。$\ce{CH3CH2CH2CH2Br + 2NH3 -> CH3CH2CH2CH2NH2 + NH4+ + Br-}$。中间体 CH3CH2CH2CH2NH3+ 的 N 有四条键、带正电；第二个 NH3 孤对指向与原 N 相连的 H，原 N–H 键电子对返回 N。CN− 多带来一个碳，NH3 不带来碳。若把中间体写成中性，先用[氮的键数](#ammonia)修复，再重画。
</details>
</div>

<div class="lesson-check" markdown="1">
<h3 id="retry-conditions">换一个碳骨架</h3>
<!-- task:retry-conditions -->
Compare 2-bromobutane with (A) warm aqueous KOH and (B) hot concentrated KOH in ethanol with little water. Predict the favoured product type in each and draw all different alkene connectivities possible in B (do not distinguish E/Z here and do not rank major/minor products). Draw one full mechanism for B. Explain why listing possible structures does not prove their experimental proportions.
<!-- /task:retry-conditions -->
<details markdown="1"><summary>提示</summary>
带 Br 的碳左右各有一个碳，分别检查有没有可移走的 H。
</details>
<details markdown="1"><summary>重试解答与检查</summary>
A 较有利于 CH3CH(OH)CH2CH3，butan-2-ol。B 较有利于消去：可能的连接方式为 CH2=CHCH2CH3（but-1-ene）和 CH3CH=CHCH3（but-2-ene）。画前者时，OH− 孤对 → 末端 C1 的 H，C1–H 键 → C1–C2，C2–Br 键 → Br，另外生成 H2O 和 Br−；也可选 C3–H 键得到 C2=C3。题目没有组成测量或选择性数据，不能推出产物百分比，取代也仍可竞争。若漏了一个位置，展开[邻碳 C–H 键](#elimination)后重试；不要从结构图编造产物比例规则。
</details>
</div>

<div class="lesson-check" markdown="1">
<h3 id="retry-evidence">有变量改变的比较</h3>
<!-- task:retry-evidence -->
A new comparison uses 1-chloropropane at 25 °C and 1-iodopropane at 45 °C in otherwise matching ethanol–water/silver nitrate mixtures. The iodoalkane gives visible precipitate first. Can this isolate the effect of changing Cl to I? Redesign the comparison, predict the qualitative order at equal conditions, and state what repeating the original comparison would and would not repair.
<!-- /task:retry-evidence -->
<details markdown="1"><summary>提示</summary>
列出所有改变的变量。重复一致不会自动消除混杂变量。
</details>
<details markdown="1"><summary>重试解答与检查</summary>
不能，温度和卤素都改变了。使用相同水浴温度，先使两组溶液达到该温度；保持浓度、溶剂比例、混合和终点观察程序匹配。相同条件下预计 RI 水解较快，因为 C–I 比 C–Cl 弱。重复可估计离散程度，却不能消除温度混杂，也不能把可见沉淀时间变成精确速率常数。若把全部差异归因于键强，回看[受控比较](#rate-evidence)。
</details>
</div>

<h2 id="mixed-check">不告诉方法时，自己作出选择</h2>

<div class="lesson-check" markdown="1">
**自拟独立任务。**
<!-- task:mixed-check -->
A bottle contains CH3CH2CH2CH2Br. For two separate preparations the targets are but-1-ene and butan-1-amine. Choose reagents and conditions for each target, draw the products and give balanced net equations. Draw the complete electron-pair mechanism for the alkene route. A proposed amine mechanism shows neutral nitrogen with four bonds followed directly by loss of H with no electron arrow. Correct both errors. Finally write an English paragraph explaining why the same starting molecule can give these different products; use no sentence frame or list of isolated keywords. Include a limitation on the product prediction.
<!-- /task:mixed-check -->
<details markdown="1"><summary>提示</summary>
先决定碳骨架要发生什么变化，再检查试剂电子对的去向和氮的电荷。
</details>
<details markdown="1"><summary>解答与检查</summary>
制 but-1-ene 用含水很少的热浓乙醇 KOH：$\ce{CH3CH2CH2CH2Br + OH- -> CH3CH2CH=CH2 + H2O + Br-}$。OH− 孤对 → CH2Br 邻碳上的 H；该 C–H 电子对 → 两碳之间的 C–C 键；C–Br 电子对 → Br。制 butan-1-amine 用过量浓乙醇氨，在适当设备中加热加压：$\ce{CH3CH2CH2CH2Br + 2NH3 -> CH3CH2CH2CH2NH2 + NH4+ + Br-}$。烷基铵中间体的四键 N 必须带 +；脱去质子时原 N–H 电子对必须返回 N，另一个 NH3 用孤对接受该质子。

一种可接受的英文解释为：“Hot ethanolic hydroxide acts as a base and removes a proton from the neighbouring carbon. The C–H electron pair forms a C=C bond while bromide leaves. Excess ethanolic ammonia instead supplies a nitrogen lone pair to the carbon bearing bromine. The positively charged alkylammonium intermediate loses a proton to form the amine. These conditions favour the target routes but do not guarantee pure products.” 其他科学自洽的表达也可。若只列试剂，补电子对的因果解释；若条件或箭头错，回到[竞争](#competing-pathways)或[氨机理](#ammonia)，先做相应重试，再重新完成本题。
</details>
</div>

<h2 id="later-check">学过另一个主题后再回来</h2>

合上页面，在纸上解释一个 OH− 机理。学过另一个主题后，先做下面的新任务，再展开答案。记录用过的帮助和错误；即时做对不等于已经证明长期保持。

<div class="lesson-check" markdown="1">
<!-- task:later-check -->
Starting from CH3CH2CH2Cl, plan separate routes to CH3CH2CH2CN and CH3CH=CH2. Give reagents and conditions and draw both complete mechanisms. In English, explain why one route changes the carbon count and the other does not. Then explain why comparing this chloroalkane with a different carbon skeleton under different conditions would not isolate the effect of the halogen on rate.
<!-- /task:later-check -->
<details markdown="1"><summary>提示</summary>
对每个目标，指出新键和电子对来源；区分产物结构与实验比较证据。
</details>
<details markdown="1"><summary>解答与检查</summary>
腈路线用 KCN/NaCN 的含水乙醇溶液，加热回流：CN− 碳孤对 → 末端碳；C–Cl 键 → Cl，生成 CH3CH2CH2CN 和 Cl−。烯烃路线用含水很少的热浓乙醇 KOH：O 孤对 → 中间碳的 H；该 C–H 键 → 中间碳至末端碳的 C–C 键；C–Cl → Cl，生成 propene、H2O 和 Cl−。CN− 提供新碳；消去只从原 C3 骨架移走 H 和 Cl，没有增加碳。改变骨架和条件会引入其他速率差异来源，不能单独检验卤素效应。漏掉 CN 碳回到[供体模型](#cyanide)，漏 C–H 箭头回到[消去](#elimination)，速率过度结论回到[证据](#rate-evidence)。
</details>
</div>

下一步把这些产物连接到[烯烃](/zh/alevel/as-chemistry/alkenes/)、[醇](/zh/alevel/as-chemistry/alcohols/)和[有机分析](/zh/alevel/as-chemistry/organic-analysis/)。也可返回[AS 化学入口](/zh/alevel/as-chemistry/)。

<h2 id="sources">范围与来源</h2>

- [OxfordAQA 9620 资格页](https://www.oxfordaqa.com/qualification/international-as-and-a-level-chemistry-9620/)及所链 [specification 5.3，p.33](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-chemistry-specification.pdf#page=33)：AS 的 OH−、CN−、NH3 取代，C–X 键焓和竞争消去。本页不要求 SN1/SN2 分类、速率定律推导或光学结果。
- Lister、Renshaw，*AQA Chemistry*，2016，Ch13，印刷 pp.212–220，实际阅读用户扫描件。仅作教学补充，其英国 AQA 试题和更宽内容不决定 OxfordAQA 范围；不分发扫描页或复制教材图。
- [OxfordAQA CH02 Specimen 2018 试卷，pp.17–18](https://www.oxfordaqa.com/oaqaresources/science/assessment/9620-CH02-international-a-level-chemistry-specimen-paper-2016-v1.pdf#page=17)及[配套评分标准，pp.13–15](https://www.oxfordaqa.com/oaqaresources/science/assessment/9620-CH02-international-a-level-chemistry-mark-scheme-2016-v1.pdf#page=13)，Q08.2–08.3：用于核对箭头起点、氮电荷和消去表示。上面是新编任务，不是附官方分值的原题复刻。
- [Pearson Edexcel AS Chemistry 样卷，2015，Paper 2 Q6(a)，印刷 pp.66–67／PDF pp.72–73](https://qualifications.pearson.com/content/dam/pdf/A%20Level/Chemistry/2015/Specification%20and%20sample%20assessments/AS-Chemistry-2015-SAMs.pdf#page=72)：水解比较的补充示例，不是 OxfordAQA required practical，也不是本页构造时间的来源；不移入其余考试局深度。
