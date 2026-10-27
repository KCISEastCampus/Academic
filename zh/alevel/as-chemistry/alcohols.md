---
title: 醇——控制产物与检验证据
layout: subjects
mathjax: true
grade: as
subject: as-chemistry
lang: zh-CN
translation_of: /alevel/as-chemistry/alcohols/
permalink: /zh/alevel/as-chemistry/alcohols/
toc_headings: h2, h3
study_page: true
reading_layout: true
---

<h2 id="start-here">控制产物，需要同时控制反应和分离</h2>

一级醇氧化可得醛或羧酸，为何换装置会改变收集物？酸又怎样让醇失水而自身不被耗尽？本页覆盖 AS §3.3.5.1–2，含 RP4 准备与证据解释。先修为[官能团与电子对弯箭](/zh/alevel/as-chemistry/organic-foundations/)，并理解加热不等于把所有共价键打断。题目、示范、数据均自拟／构造，无官方分值；纸面准备及构造结果不等于完成教师监督的真实实验。

<h2 id="classification">数带 OH 碳的碳邻居</h2>

醇的 OH 连在饱和碳上。先找这个碳再分类：**一级 primary (1°)** 直接连一个碳，**二级 secondary (2°)** 连两个，**三级 tertiary (3°)** 连三个。CH3CH2CH2OH 一级，CH3CH(OH)CH3 二级，(CH3)3COH 三级。OH 个数是另一问题。甲醇没有碳邻居，但表现一级型氧化化学，不能硬说它有一个邻碳。

判断氧化时展开带 OH 碳的键：一级在那里有两个 C–H，二级一个，三级没有。三类都有 O–H 的 H，不能拿它区分氧化行为。

<div class="lesson-check" markdown="1">
<h3 id="classification-check">不被最长链误导</h3>
<!-- task:classification-check -->
Classify CH3CH2CH(OH)CH2CH3, (CH3)2CHCH2OH and CH3C(OH)(CH3)CH2CH3. For each draw the OH-bearing carbon with every directly attached atom/group and count its C-bound H. Is a molecule tertiary merely because it has three OH groups?
<!-- /task:classification-check -->
<details markdown="1"><summary>提示</summary>
忽略远处支链，只数从带 OH 碳出发的键。
</details>
<details markdown="1"><summary>解答与检查</summary>
pentan-3-ol 二级，带 OH 碳一个 H；2-methylpropan-1-ol 一级，该碳两个 H，旁边有支链不使 CH2OH 成三级；2-methylbutan-2-ol 三级，该碳无 H。三个 OH 叫 triol，不自动为三级。若数了总碳数，回到[分类](#classification)。
</details>
</div>

<h2 id="oxidation">关键是碳上是否有氢</h2>

用 **酸化重铬酸钾(VI)，K2Cr2O7/H2SO4** 温热。一级／二级醇使橙色 Cr(VI) 还原成绿色 Cr(III)，有机物被氧化。该反应增加 C–O 成键并去 H，形成羰基 C=O。三级醇若保留三个 C–C 键，就不能再形成这种羰基，故在这些条件下不易氧化；不表示它永不能反应或燃烧。

[O] 是氧化能力的计量简写，不代表游离氧原子，也不是铬氧化机理。本页不要求完整重铬酸氧化机理。

$$\ce{RCH2OH + [O] -> RCHO + H2O}$$

$$\ce{RCHO + [O] -> RCOOH}$$

$$\ce{R2CHOH + [O] -> R2CO + H2O}$$

一级先成**醛 aldehyde**（末端 –CHO），再成**羧酸 carboxylic acid**（–COOH）；二级成**酮 ketone**（C=O 两侧为碳基团）。逐步数 O/H；前两步相加为 RCH2OH + 2[O] → RCOOH + H2O。

<div class="worked-example" markdown="1">

butan-2-ol 的 C2 有一个 H；去该 H 与 O–H 的 H，用一个 [O] 得 CH3COCH2CH3（butan-2-one）及水。butan-1-ol 先得 CH3CH2CH2CHO，保留四碳骨架，再用一 [O] 得 CH3CH2CH2COOH。产物多一碳说明命名／计数错，不是氧化。

</div>

<div class="lesson-check" markdown="1">
<h3 id="oxidation-check">预测结构、方程与观察</h3>
<!-- task:oxidation-check -->
For pentan-1-ol, pentan-3-ol and 2-methylbutan-2-ol, give the organic products under warm acidified K2Cr2O7 with sufficient oxidant and reflux. Write balanced [O] equations where reaction occurs, state the expected reagent colour change and explain the tertiary result using bonds.
<!-- /task:oxidation-check -->
<details markdown="1"><summary>提示</summary>
先核带 OH 碳，回流不能强迫所有结构反应。
</details>
<details markdown="1"><summary>解答与检查</summary>
pentan-1-ol + 2[O] → pentanoic acid + H2O：CH3CH2CH2CH2CH2OH → CH3CH2CH2CH2COOH。pentan-3-ol + [O] → pentan-3-one + H2O：CH3CH2CH(OH)CH2CH3 → CH3CH2COCH2CH3。二者橙转绿。三级带 OH 碳无 H，若成 C=O 需断 C–C，故不易被此条件氧化，单由该醇不预期橙转绿。
</details>
</div>

<h2 id="control-product">蒸出醛；回流使氧化继续</h2>

一级醇制醛，限制氧化剂并**生成即蒸出**，使醛离开氧化混合物，减少进一步氧化；制酸则过量氧化剂并**回流 reflux**，蒸气冷凝返回，保持加热时与氧化剂接触。回流不是反应类型，也不保证纯产物。ethanal 沸点约 21 °C，温暖接收器易损失，故冷却接收重要；减损失不意味着可密封，装置必须通气。

<div class="lesson-check" markdown="1">
<h3 id="method-check">由目标选条件</h3>
<!-- task:method-check -->
Two groups start with propan-1-ol. One wants propanal, the other propanoic acid. Specify oxidant, amount tendency and apparatus for each. Explain why “same reagent, therefore same isolated product” is wrong. If an aldehyde fraction remains in the flask during prolonged heating with excess oxidant, predict the consequence.
<!-- /task:method-check -->
<details markdown="1"><summary>提示</summary>
分开“生成中间体”与“使它脱离后续反应”。
</details>
<details markdown="1"><summary>解答与检查</summary>
都用酸化 K2Cr2O7(VI)。propanal：限制氧化剂、温和加热、及时蒸出；propanoic acid：过量氧化剂、回流。醛持续接触过量氧化剂会继续变酸，所以不能只看试剂名字。若说回流能收醛，追踪冷凝液会发现它返回氧化烧瓶。
</details>
</div>

<div class="lesson-check" markdown="1">
<h3 id="retry-oxidation">支化一级醇重试</h3>
<!-- task:retry-oxidation -->
2-methylpropan-1-ol is oxidised first with immediate distillation, then in a separate experiment with excess acidified dichromate under reflux. Draw and name both target organic products and write the [O] equations. Does branching at the adjacent carbon make this a tertiary alcohol?
<!-- /task:retry-oxidation -->
<details markdown="1"><summary>提示</summary>
保留 CH2OH 的碳，它变成羰基碳。
</details>
<details markdown="1"><summary>解答与检查</summary>
(CH3)2CHCH2OH + [O] → (CH3)2CHCHO + H2O，2-methylpropanal；酸路线总式 (CH3)2CHCH2OH + 2[O] → (CH3)2CHCOOH + H2O，2-methylpropanoic acid。CH2OH 只连一个 C，所以仍一级。
</details>
</div>

<h2 id="rp4">RP4——从反应中收集挥发性产物</h2>

官方手册示例为乙醇氧化并收集 ethanal。本页统一用大纲的酸化**钾**重铬酸盐(VI)，手册钠／钾措辞交替不能成为混用配方理由。这里是教师批准实验的准备，不是居家配方，也不登记为完成实操。

<div class="table-responsive" role="region" aria-label="示意图，可横向滚动" tabindex="0" style="overflow-x:auto" markdown="1">

![蒸馏示意：水浴反应瓶、沸石、温度计球在蒸气支管处，倾斜冷凝管低处进水高处出水，冷却且通气的接收器。](/assets/img/chemistry-as-alcohols-distillation.svg){: width="680" height="480" style="min-width:680px" }

</div>

加热前放沸石，其表面提供平稳成泡位置，减少暴沸。温度计球在支管入口蒸气路径，不浸反应液。冷凝水从夹套低端进、高端出，使夹套充满。冷却且通气接收以减少 ethanal 挥发损失，开放路径避免积压；竖直回流管会把产物送回而非收集。

有机物挥发易燃，用受控水浴／电热、不用明火。酸与 Cr(VI) 有危害，按教师批准小规模、护目、通风、控制加入及分类危险废物处理，分别应对飞溅、暴露与放热。旧手册排放文字不是倾倒铬废液的许可。不要蒸干烧瓶。

<div class="lesson-check" markdown="1">
<h3 id="apparatus-check">纠正装置并解释收集</h3>
<!-- task:apparatus-check -->
A proposed RP4 setup seals the receiver, immerses the thermometer bulb in the reaction, feeds cooling water into the upper condenser port and adds granules to a near-boiling flask. Redraw it safely and justify each repair. Constructed fractions A/B/C have vapour temperatures 22–25/35–50/70–78 °C. Given ethanal b.p. ≈21 °C and ethanol b.p. ≈78 °C, which fraction is most consistent with ethanal-rich material, what might C contain, and why do these data not prove purity?
<!-- /task:apparatus-check -->
<details markdown="1"><summary>提示</summary>
分开追踪蒸气与冷却水。测温范围不是分子指纹。
</details>
<details markdown="1"><summary>解答与检查</summary>
接收器通气；球在蒸气支管；水低进高出；加热前放沸石，避免热液突然沸腾。A 最符合富 ethanal，C 可能富 ethanol；但混合物、水、测温误差和组成变化会影响温度。需参考对照及合适分析，如醛检验与 IR；仅醛阳性仍不证纯。纸面改图不能代替教师监督的装配。
</details>
</div>

<h2 id="tests">区分观察与官能团推断</h2>

用新鲜独立样品温热**Tollens’ reagent**（氨性 Ag(I)）区分简单醛与酮：醛还原出银，常见银镜或灰银沉积，酮在这些条件下无此变化。**Fehling’s A/B** 新混后水浴温热，脂肪醛使蓝液生成砖红 Cu2O 沉淀，简单酮阴性，醛自身被氧化。

Tollens’ 须按中心流程现配并及时处理，不能存放或让残液干燥，以免危险残留。教师监督、小量、护目、无明火。阴性必须有有效试剂、足够时间／温度、对照，不能无条件证明为酮。

<div class="lesson-check" markdown="1">
<h3 id="test-check">阴性不是直接鉴定</h3>
<!-- task:test-check -->
Two pure liquids are known to be propanal and propanone. For both Tollens’ and Fehling’s tests, give the reagent, conditions and observations that distinguish them, using separate fresh aliquots. A third unknown gives no silver with a week-old Tollens’ solution: explain why assigning it as a ketone is invalid, and propose controls and a fresh-sample retry.
<!-- /task:test-check -->
<details markdown="1"><summary>提示</summary>
解释阴性前说明候选范围及试剂有效性。
</details>
<details markdown="1"><summary>解答与检查</summary>
新鲜 Tollens’ 水浴温热：propanal 析银、propanone 不析。另取新鲜样品，用新混 Fehling A/B 水浴温热：前者得砖红 Cu2O 沉淀、后者仍蓝。一周旧 Tollens’ 不宜使用，交教师处置，失效可假阴性；应用现配试剂、已知醛阳性及酮／空白对照、新鲜样品、规定温热时间。第三未知物没限定为这两种，即使有效阴性也不唯一确定。
</details>
</div>

<div class="lesson-check" markdown="1">
<h3 id="retry-analysis">改用氧化产物重试</h3>
<!-- task:retry-analysis -->
A distillate from butan-1-ol oxidation gives a silver deposit with fresh Tollens’ reagent. A student concludes “100% pure butanal”. State what is supported, what is not, and one additional comparison needed. Would orange-to-green acidified dichromate alone distinguish the original primary alcohol from butan-2-ol?
<!-- /task:retry-analysis -->
<details markdown="1"><summary>提示</summary>
不止一种官能团能还原 dichromate。
</details>
<details markdown="1"><summary>解答与检查</summary>
该反应语境下支持馏出液含与醛／butanal 相符的还原物，不定量证明纯度，也不排除未反应 butan-1-ol／水／酸。需适当参考 IR／指纹或其他组成纯度证据。一级二级都能使 dichromate 橙转绿，单靠该颜色不能区分。
</details>
</div>

<h2 id="dehydration">酸把不易离去的 OH 变为水</h2>

用适当酸如浓 H2SO4（或 H3PO4）催化加热，使醇消去水成烯烃，称**脱水 dehydration**。酸中不是 OH 直接以 OH− 离去。用 propan-2-ol 作科学自洽二级醇示范，在含水酸中把催化剂写成 H3O+，便于明确检查再生。

1. 醇 O 孤对 → H3O+ 的一个 H，该 hydronium O–H 键 → 其 O，得 (CH3)2CH–OH2+ 与 H2O；醇氧此时三键、+ 电。
2. C–O 键对 → O，水离去，留下 (CH3)2CH+，为三键二级正碳。
3. 水 O 孤对 → 相邻碳的一个 H；该 C–H 键对 → C–C 之间成 C=C，得 propene 与 H3O+。正催化剂再生，电子对没有凭空消失。

净式 CH3CH(OH)CH3 → CH3CH=CH2 + H2O。计入催化剂，每阶段电荷均 +1。图中省略不反应的其他孤对。一级 ethanol 不需稳定游离一级碳正离子：质子化后失水与去 β-H 可同时发生，不能把二级正离子图不加判断套给所有醇。

<div class="table-responsive" role="region" aria-label="示意图，可横向滚动" tabindex="0" style="overflow-x:auto" markdown="1">

![H3O+ 催化 propan-2-ol 脱水三步：质子化、失水、水接受 β-H 且 C–H 对成 C=C，再生 H3O+。](/assets/img/chemistry-as-alcohols-dehydration.svg){: width="680" height="680" style="min-width:680px" }

</div>

<div class="lesson-check" markdown="1">
<h3 id="dehydration-check">新底物——画全部阶段</h3>
<!-- task:dehydration-check -->
Draw the full acid-catalysed dehydration mechanism of 2-methylpropan-2-ol under heated acidic conditions. Use H3O+ consistently: show protonation, water loss, a water base removing a neighbouring H, formation of C=C and catalyst regeneration. Name the alkene, give the net equation and check charge in each stage.
<!-- /task:dehydration-check -->
<details markdown="1"><summary>提示</summary>
失水的碳连三碳；选邻 methyl 的 H，不选正碳本身。
</details>
<details markdown="1"><summary>解答与检查</summary>
O 对 → hydronium 的 H，O–H → O，成 (CH3)3C–OH2+ + H2O；C–O → O 得 (CH3)3C+ + H2O；水对 → 邻碳 H，该 C–H 对 → C–C 成 (CH3)2C=CH2 + H3O+。产物 2-methylpropene；净式 (CH3)3COH → (CH3)2C=CH2 + H2O。各阶段总 +1，三级 C+ 三键，终烯碳四键。若驱出 OH−，回读[脱水](#dehydration)。
</details>
</div>

<div class="lesson-check" markdown="1">
<h3 id="retry-dehydration">重试——不止一个邻位</h3>
<!-- task:retry-dehydration -->
For heated acid-catalysed dehydration of butan-2-ol, draw the protonated alcohol and secondary carbocation, then draw electron-pair movements removing H from each of the two different neighbouring carbon positions. Give the distinct alkene connectivities and identify which can have E/Z forms. Do not claim that one path is the only possible product.
<!-- /task:retry-dehydration -->
<details markdown="1"><summary>提示</summary>
C1 或 C3 都可给 β-H，不是从原带 OH 碳本身取。
</details>
<details markdown="1"><summary>解答与检查</summary>
CH3CH(OH2+)CH2CH3 失水成 CH3C+(H)CH2CH3。水从 C1 受 H，C–H 对 → C1–C2，得 but-1-ene；从 C3 受 H，C–H 对 → C2–C3，得 but-2-ene，后者可 E/Z。各路都再生 H3O+；but-1-ene 的 CH2 端使它无 E/Z；此处不算比例。
</details>
</div>

<h2 id="carbon-source">醇可把非石油碳源接到聚合物</h2>

植物糖发酵可供非石油碳源 ethanol：C6H12O6 → 2C2H5OH + 2CO2。酸催化脱水 C2H5OH → C2H4 + H2O，ethene 再成 poly(ethene)，把醇与聚合单体相连。同一乙烯分子不因来源不同改变反应性。可再生原料不保证碳中和，种植、土地、肥料、发酵收率、蒸馏／脱水能源、运输及处置都影响全生命周期排放与成本。

<div class="lesson-check" markdown="1">
<h3 id="source-check">用英文评价路线</h3>
<!-- task:source-check -->
Write a balanced route from glucose to an addition-polymer monomer through an alcohol. Explain the reaction type at each stage. Evaluate “this polymer has zero climate impact” with one possible benefit and two pieces of lifecycle information needed.
<!-- /task:source-check -->
<details markdown="1"><summary>提示</summary>
碳源论断比总排放论断范围窄。
</details>
<details markdown="1"><summary>解答与检查</summary>
葡萄糖发酵 → 2 ethanol + 2CO2；ethanol 酸催化脱水／消去 → ethene + water；ethene 加成聚合。可能减少化石原料；需分离加热能源、种植／土地投入和终端处置数据。生长吸 CO2 不等于已核算所有阶段。
</details>
</div>

<h2 id="later-check">延后回顾——选方法、模型、证据</h2>

<div class="lesson-check" markdown="1">
<h3 id="mixed-check">无标签试剂与目标产物</h3>
<!-- task:mixed-check -->
A pure alcohol is either butan-1-ol, butan-2-ol or 2-methylpropan-2-ol. Design an oxidation-and-product-test scheme using fresh aliquots to distinguish the candidates, state the observations and limitations, and explain how the apparatus protects an aldehyde intermediate. Then draw the full dehydration mechanism for the tertiary candidate and give one environmental qualification for a non-petroleum alcohol feedstock.
<!-- /task:mixed-check -->
<details markdown="1"><summary>提示</summary>
两个都会使 dichromate 变绿的醇，要借产物区分。
</details>
<details markdown="1"><summary>解答与检查</summary>
有效酸化 dichromate 温热条件下，三级候选不预期氧化变色；其他两者及时蒸出：butan-1-ol 给醛，新鲜 Tollens／Fehling 阳性；butan-2-ol 给酮，有效对照下阴性。冷却通气收集减少挥发和再接触氧化剂。阴性不能鉴定任意未知物，混合物需更多证据。三级脱水按[三阶段](#dehydration)完整画并再生 H3O+，得 2-methylpropene；生命周期能耗／土地使用限定可再生收益。若借帮助才完成，明日换一组一级二级重试，不复制流程。
</details>
</div>

下一步：[有机分析](/zh/alevel/as-chemistry/organic-analysis/)把这些观察与精确质量及 IR 相连，包含 RP5 决策。

<h2 id="sources">来源与实验状态</h2>

[OxfordAQA 9620 specification 5.3，pp.35](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-chemistry-specification.pdf#page=35)。补充阅读：Lister、Renshaw，*International A Level Chemistry: AS and A Level*（2016），Ch15，印刷 pp.238–247；实际阅读用户本机扫描件，不分发扫描页。本页题目、示范、检查点及数值数据均自拟／构造，不赋官方分值。实读[官方实验手册 RP4 pp.67–70](https://www.oxfordaqa.com/oaqaresources/science/teaching/a-level-practical-handbook-chemistry-4.2.pdf#page=67)。统一使用大纲钾试剂，废物按当前教师批准流程处理，不拼接矛盾／过时示例。此页尚无真实实验或学生试用记录。
