---
title: 有机基础——结构、命名与电子语言
layout: subjects
mathjax: true
grade: as
subject: as-chemistry
lang: zh-CN
translation_of: /alevel/as-chemistry/organic-foundations/
permalink: /zh/alevel/as-chemistry/organic-foundations/
toc_headings: h2, h3
study_page: true
reading_layout: true
---

<h2 id="start-here">不同画法，怎样判断是不是同一种分子？</h2>

本页为后续有机课建立语言：读结构、命名、辨异构、表达电子移动，覆盖 AS §3.3.1.1–3。先数键，不从反应导图背起。普通中性结构中碳通常四键，氢与卤素一键，氧两键，氮三键；双键按两键计。孤对电子是不参与成键的电子对。

所有示范和题目均自拟／构造，无官方分值。先尝试再打开帮助，记录使用过的提示；[延后综合题](#later-check)不直接告诉你用哪种方法。

<div class="lesson-check" markdown="1">
<h3 id="bond-start">从键数开始</h3>
<!-- task:bond-start -->
For CH3CH2OH, state the atoms directly bonded to each carbon and to oxygen. Draw every C–H and O–H bond. Why is CH3CH3OH, with all these groups joined in sequence, not a valid neutral structure?
<!-- /task:bond-start -->
<details markdown="1"><summary>提示</summary>
把下标中的氢展开为独立的键。
</details>
<details markdown="1"><summary>解答与检查</summary>
第一 C 连三个 H 和第二 C；第二 C 连两个 H、C、O；O 连 C 与 H，并有两对孤对。把 CH3–CH3–OH 连起来会让第二个碳有三个 C–H 加 C–C、C–O，共五键，应改成 CH3–CH2–OH。若把“基团数”当“键数”，先展开再继续。
</details>
</div>

<h2 id="representations">六种表示，信息量不同</h2>

**分子式 molecular formula** 给实际原子数，如 C2H6O；**实验式 empirical formula** 给最简整数比，该例仍是 C2H6O，而 C2H4 的实验式为 CH2。**通式 general formula** 表示一族，如无环烷烃 CnH2n+2，不能唯一确定分子。**结构式 structural formula** 如 CH3CH2OH 给基团连接；**全展开式 displayed formula** 画每个原子和键；**键线式 skeletal formula** 只画碳骨架：未标元素的端点、拐点为 C，省略其 H，按四键补足；杂原子及连在它上面的 H 要写出。

下图把丙-1-醇的结构式、全展开式、键线式相连。先数三个碳再补 H；指向字母 O 的线是 C–O 键，O 不能再算一个碳。旋转图或把链画弯，不改变连接关系。

<div class="table-responsive" role="region" aria-label="示意图，可横向滚动" tabindex="0" style="overflow-x:auto" markdown="1">

![丙-1-醇的三种表示；标明碳端点、拐点与显式氧。](/assets/img/chemistry-as-foundations-representations.svg){: width="680" height="360" style="min-width:680px" }

</div>

<div class="lesson-check" markdown="1">
<h3 id="representation-check">转换时守住原子数</h3>
<!-- task:representation-check -->
Draw displayed and skeletal formulae for CH3CH(OH)CH2CH3. Give its molecular and empirical formulae. State which of these representations distinguishes it from CH3CH2CH2CH2OH, and why the general formula CnH2n+2O cannot identify either molecule.
<!-- /task:representation-check -->
<details markdown="1"><summary>提示</summary>
OH 连第二个碳。只有所有原子数有公因子时才约简。
</details>
<details markdown="1"><summary>解答与检查</summary>
画四碳链，OH 连 C2。分子式 C4H10O，实验式仍 C4H10O；展开式两端 CH3，中间 CH(OH)、CH2；键线式四碳折线第二顶点连 OH。结构式／展开式／键线式能区别 OH 位置，分子式／实验式／通式不能。若得 C4H9O，漏掉了 O–H 的氢。
</details>
</div>

<h2 id="naming">名字记录连接，不记录纸上形状</h2>

**官能团 functional group** 决定特征反应。**同系物系列 homologous series** 有相同官能团和通式，相邻成员差 CH2；官能团使化学性质相似，分子大小和分子间作用使物性逐渐改变。仅有相同通式不够：烯烃与环烷烃均可有 CnH2n，却不是同一系列。

选包含主要官能团与 C=C 的合适最长链，编号先使主要官能团定位数较小，再处理不饱和键／取代基。meth-/eth-/prop-/but-/pent-/hex- 依次为一至六碳。AS 命名范围为每条链／每个环最多六碳；cyclo- 表示环，环的拐点也算 C。取代基按英文字母顺序，排序时不计 di-/tri-；重复的定位数都要写，数字间用逗号，数字与词间用连字符。

| 官能团／系列 | 结构／命名示例 |
| --- | --- |
| alkane / alkene | C–C / C=C；hexane / hex-2-ene |
| halogenoalkane | C–X；1-bromopropane |
| alcohol | C–OH；butan-2-ol |
| aldehyde | 末端 –CHO，其碳计入链；propanal |
| ketone | 两碳之间 –CO–；butan-2-one |
| carboxylic acid | –COOH 的碳为 C1；propanoic acid |
| nitrile | –C≡N 的碳计入且为 C1；propanenitrile |
| amine | –NH2；propan-1-amine |

最后几类用于命名 AS 产物和鉴定，不在这里扩展 A2 的完整反应体系。后面的醚比较中，R–O–R′ 的 O 连两个碳基团，无 O–H。把较短碳基团加 O 作为另一碳链上的 alkoxy 取代基：CH3–O–CH3 为 methoxymethane，CH3CH2–O–CH2CH3 为 ethoxyethane。methoxy 表示 CH3O–，ethoxy 表示 CH3CH2O–。这个命名桥梁不增加完整醚反应单元。

<div class="worked-example" markdown="1">

CH3CH(CH3)CH2CH2OH 选含 OH 的四碳链，不能只选纸上较直的三碳片段。从 OH 端编号得 3-methylbutan-1-ol；反向重画检验：主链四碳、支链一碳、OH 在 C1。cyclohexane 为六碳环，每碳两个 H，C6H12；它饱和，但不属于无环烷烃。

</div>

<div class="lesson-check" markdown="1">
<h3 id="naming-check">双向读名称</h3>
<!-- task:naming-check -->
Name CH3CHBrCH2CH2CH3 and CH3CH(Cl)CH(Br)CH3. Draw 2-methylpentan-2-ol and cyclopentene. Explain why ethanol and propan-1-ol are homologues but ethene and cyclopropane are not.
<!-- /task:naming-check -->
<details markdown="1"><summary>提示</summary>
定位数组合相同时，让字母顺序靠前的取代基得较小号。cyclopentene 的双键在环上。
</details>
<details markdown="1"><summary>解答与检查</summary>
2-bromopentane；2-bromo-3-chlorobutane（编号平手时 bromo 在 chloro 前）。醇为 (CH3)2C(OH)CH2CH2CH3。cyclopentene 为五碳环内一个双键，C5H8。乙醇／丙-1-醇同为 OH 系列且差 CH2；乙烯／环丙烷虽同通式却官能结构不同。后面命名腈若少算一碳，要把 C≡N 的碳计入。
</details>
</div>

<div class="lesson-check" markdown="1">
<h3 id="retry-structure">换一种表示重试</h3>
<!-- task:retry-structure -->
Draw a skeletal formula for 2,2-dimethylbutane, then give its molecular and empirical formulae. Name CH3CH2CN and draw hexan-3-one.
<!-- /task:retry-structure -->
<details markdown="1"><summary>提示</summary>
先重建主链，再加支链，不是用支链替掉主链碳。
</details>
<details markdown="1"><summary>解答与检查</summary>
结构 CH3C(CH3)2CH2CH3，分子式 C6H14，实验式 C3H7。CH3CH2CN 是 propanenitrile，不是 ethanenitrile；hexan-3-one 为 CH3CH2COCH2CH2CH3。核对所有顶点／端点及羰基／腈基碳。
</details>
</div>

<h2 id="isomers">分子式相同，连接未必相同</h2>

**结构异构 structural isomerism** 指相同分子式、不同结构式。链异构改变碳骨架（butane／2-methylpropane）；位置异构改变同一官能团的位置（butan-1-ol／butan-2-ol）；官能团异构改变官能团（ethanol／methoxymethane，均 C2H6O）。醚只作结构比较，不增加完整醚反应考点。分类前先核对分子式。

<div class="lesson-check" markdown="1">
<h3 id="isomer-check">先判断，再分类</h3>
<!-- task:isomer-check -->
Draw one chain isomer and one position isomer of pent-1-ene. Are propanal and propanone structural isomers? Are CH3CH2CH2OH and HOCH2CH2CH3 isomers? Justify using formulae and connections.
<!-- /task:isomer-check -->
<details markdown="1"><summary>提示</summary>
先把阅读方向反过来，再判断结构是否真的不同。
</details>
<details markdown="1"><summary>解答与检查</summary>
例如 2-methylbut-1-ene 为链异构，pent-2-ene 为位置异构，均 C5H10。propanal CH3CH2CHO 与 propanone CH3COCH3 均 C3H6O，是官能团异构。两种醇写法均为 propan-1-ol，并非异构。若加支链后氢数变了，先核碳价态。
</details>
</div>

<h2 id="ez">E/Z 要求双键两端各连不同基团</h2>

**立体异构 stereoisomerism** 为结构式（连接）相同、空间排列不同。C=C 周围近似平面且限制旋转；扭转一端会破坏额外的成键。若任一双键碳连两个相同基团，就不存在 E/Z 对。

分别在每个双键碳上按 **CIP 优先级** 比较：直接相连原子的原子序数较大者优先，Br > Cl > O > C > H。若平手，比较下一层原子，按原子序数降序排列，直到第一个不同处。CH2OH 与 CH2CH3 都从 C 开始，但 (O,H,H) 胜过 (C,H,H)，所以前者优先。两端优先基团同侧为 **Z**，异侧为 **E**。不比较整个基团的质量或画得多大；“相同基团同侧”不是通用规则。

<div class="table-responsive" role="region" aria-label="示意图，可横向滚动" tabindex="0" style="overflow-x:auto" markdown="1">

![E/Z 示范：优先的 Br 与 Cl 在异侧，定为 E；第二个骨架留待学生判断。](/assets/img/chemistry-as-foundations-ez.svg){: width="680" height="340" style="min-width:680px" }

</div>

<div class="lesson-check" markdown="1">
<h3 id="ez-check">用优先级，处理第一层平手</h3>
<!-- task:ez-check -->
Use the unassigned right-hand structure in the figure. On its left C, CH2OH is above and CH2CH3 below; on its right C, CH3 is above and H below. Assign E or Z with a complete priority explanation, then draw its partner. Decide whether CH2=C(CH3)CH2CH3 can have E/Z isomers.
<!-- /task:ez-check -->
<details markdown="1"><summary>提示</summary>
先查是否满足资格，再在每端独立比较。
</details>
<details markdown="1"><summary>解答与检查</summary>
左端 CH2OH 因下一层 O 胜过 C 而优先；右端 CH3 胜 H。两优先基团都在上方，为 Z；交换右端 CH3/H 即得 E，连接不变。CH2=C(CH3)CH2CH3 一端有两个 H，不能 E/Z。若把左端 CH2OH 与右端 CH3 比较了，要重来：优先级在每个 C 内分别判。
</details>
</div>

<div class="lesson-check" markdown="1">
<h3 id="retry-ez">脱离示范图重试</h3>
<!-- task:retry-ez -->
Draw both E and Z isomers of hex-2-ene. Then decide whether 2-methylbut-2-ene has E/Z isomers. Explain what must change to interconvert E and Z, compared with rotating a single C–C bond.
<!-- /task:retry-ez -->
<details markdown="1"><summary>提示</summary>
hex-2-ene 每端比较碳基团与 H。
</details>
<details markdown="1"><summary>解答与检查</summary>
hex-2-ene 的 CH3 与 CH2CH2CH3 优先，异侧 E、同侧 Z。2-methylbut-2-ene 的 C2 连两个 methyl，无 E/Z。E/Z 互变须破坏双键的旋转限制，普通单键旋转不会改变连接，也不会产生这种异构对。
</details>
</div>

<h2 id="mechanism-language">机理同时交代电子与原子</h2>

**自由基 radical** 有不成对电子，以点表示，如 Cl·。**均裂 homolysis** 把成键电子对均分，例如 UV 下 Cl2 → 2Cl·。AS 自由基机理要写配平步骤与自由基点，不要求弯箭。**异裂 heterolysis** 把一对电子都交给一个原子，形成离子。

电子对机理使用完整箭头的弯箭，从现有键或孤对出发，指向接收该对电子的原子／键。亲核体供对，亲电体受对。直 → 连反应阶段，⇌ 表平衡，直的配位键供受箭头描述成键关系；都不能代替电子移动弯箭。δ 部分电荷表示不均等共享，正式 +/− 则标带电物种。

<div class="worked-example" markdown="1">

CH3Br + OH− → CH3OH + Br− 中，O 孤对形成 C–O 键，C–Br 键电子对交给 Br。两箭都要画，不能给碳留下稳定五键；两边总电荷 −1。相比之下 Cl2 → 2Cl· 为均裂，不生成 Cl−。[卤代烷](/zh/alevel/as-chemistry/halogenoalkanes/)有完整示范图及中性 NH3 供对。

</div>

<div class="lesson-check" markdown="1">
<h3 id="arrow-check">修复电子账目</h3>
<!-- task:arrow-check -->
A drawing for CH3CH2Br + OH− starts an arrow at carbon toward O, and another at Br toward the C–Br bond; the products are CH3CH2OH + Br·. Redraw the correct mechanism with lone pairs and charges. Write a balanced homolysis equation for Br2 under UV and explain why it is different.
<!-- /task:arrow-check -->
<details markdown="1"><summary>提示</summary>
箭尾标已有电子，不标需要电子的原子。
</details>
<details markdown="1"><summary>解答与检查</summary>
O 孤对 → 连 Br 的 C；C–Br 键 → Br。产物 Br− 才守恒总电荷 −1。UV：Br2 → 2Br·，每个原子各一电子。点不是负号；前者为异裂取代，后者均裂。若箭从正中心出发，回读上一段。
</details>
</div>

<div class="lesson-check" markdown="1">
<h3 id="retry-arrows">换中性供体重试</h3>
<!-- task:retry-arrows -->
H2O accepts H+ using an O lone pair. Draw this electron-pair step, show all O–H bonds in the product, and give its charge. Does H+ supply the new bond pair?
<!-- /task:retry-arrows -->
<details markdown="1"><summary>提示</summary>
比较 O 供对前后的键数。
</details>
<details markdown="1"><summary>解答与检查</summary>
O 孤对 → H+，形成 H3O+：三个 O–H 键、一孤对，总电荷仍 +1。H+ 接受电子对，不提供电子；这是后续酸催化开环与脱水的电荷桥梁。
</details>
</div>

<h2 id="later-check">隔天再做——自己选择检查方法</h2>

<div class="lesson-check" markdown="1">
<h3 id="mixed-check">连接、空间与电子</h3>
<!-- task:mixed-check -->
Without the examples, compare CH3CH2CH2CH2OH, CH3CH(OH)CH2CH3 and CH3CH2OCH2CH3: give formulae, names and isomer relationships. Draw E-1-bromo-1-chloroprop-1-ene and explain both priorities in English. Finally state one electron source that can start a curly arrow and one reason a radical step needs a dot.
<!-- /task:mixed-check -->
<details markdown="1"><summary>提示</summary>
分开三个问题：原子数、连接、空间排列。
</details>
<details markdown="1"><summary>解答与检查</summary>
三者均 C4H10O；butan-1-ol／butan-2-ol 为位置异构；ethoxyethane 与它们为官能团异构。E 烯烃：左碳 Br/Cl 中 Br 优先，右碳 CH3/H 中 CH3 优先，把 Br 与 CH3 画异侧。孤对或键可作电子对来源；点标不成对电子。若把 E/Z 叫结构异构，返回 [E/Z](#ez)。
</details>
</div>

接着学[烷烃](/zh/alevel/as-chemistry/alkanes/)的分离、燃料和自由基链，再到[卤代烷](/zh/alevel/as-chemistry/halogenoalkanes/)与[烯烃](/zh/alevel/as-chemistry/alkenes/)画电子对机理。

<h2 id="sources">来源与边界</h2>

[OxfordAQA 9620 specification 5.3，pp.31–32](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-chemistry-specification.pdf#page=31)。补充阅读：Lister、Renshaw，*International A Level Chemistry: AS and A Level*（2016），Ch11，印刷 pp.182–195；实际阅读用户本机扫描件，不分发扫描页。本页题目、示范、检查点及数值数据均自拟／构造，不赋官方分值。
