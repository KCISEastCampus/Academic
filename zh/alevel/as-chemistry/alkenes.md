---
title: 烯烃——电子对、加成与聚合链
layout: subjects
mathjax: true
grade: as
subject: as-chemistry
lang: zh-CN
translation_of: /alevel/as-chemistry/alkenes/
permalink: /zh/alevel/as-chemistry/alkenes/
toc_headings: h2, h3
study_page: true
reading_layout: true
---

<h2 id="start-here">双键为何吸引亲电试剂？</h2>

烯烃是不饱和烃，含 C=C。本页覆盖 AS §3.3.4.1–3：亲电加成、竞争产物路径与加成聚合；§3.3.4.4 在[环氧乙烷](/zh/alevel/as-chemistry/epoxyethane/)另教。先用[有机基础](/zh/alevel/as-chemistry/organic-foundations/)核对碳价态、E/Z 与弯箭语言。题目、示范、数据均自拟／构造，无官方分值；记录是否使用了关闭的提示。

<h2 id="double-bond">富电子区可以供出电子对</h2>

C=C 含两共享对。教学模型用沿核间轴的 σ 键与平面上下有电子密度的 π 键解释；π 电子对可被**亲电试剂 electrophile** 接受而成共价键。亲电体不必是孤立正离子，HBr 中 δ+ 的 H 就是例子。加成使用 π 对但保留 C–C σ 键，在原双键两端成两个新键；不像裂解那样拆开碳骨架。

<div class="lesson-check" markdown="1">
<h3 id="electron-start">找电子来源</h3>
<!-- task:electron-start -->
Draw propene and polar H–Br. Mark partial charges on HBr, circle the alkene electron pair that can start an arrow and state what an electrophile accepts. Why would starting an arrow at Hδ+ be wrong?
<!-- /task:electron-start -->
<details markdown="1"><summary>提示</summary>
箭尾必须标已有电子。
</details>
<details markdown="1"><summary>解答与检查</summary>
Hδ+–Brδ−；C=C π 键供对给 H。H 受对而非供对，完整弯箭从双键出发，不从正 H 出发。若把初始试剂直接画成 H+，应区分极性 HBr 与断键后形成的离子。
</details>
</div>

<h2 id="electrophilic-addition">HBr——两步机理与主要路径理由</h2>

以 propene 为例，先画 C=C 电子对 → H–Br 的 H，同时 H–Br 键 → Br。若 H 加在末端 C，中间成为 CH3–C+(H)–CH3：二级碳正离子，三键、有空轨道。再由 Br− 孤对 → C+，得 2-bromopropane。离子阶段 +1 与 −1 相加仍为零。

另一方向使正电荷留末端，CH3CH2CH2+ 为一级碳正离子，Br− 进攻得 1-bromopropane。烷基供电子，稳定邻近正碳，三级 > 二级 > 一级。普通离子加成条件下，更稳定中间体路径一般有利，2-bromo 为主要产物。这不预言精确比例或绝对单一产物；此处不引入自由基／过氧化物 HBr 加成。

<div class="table-responsive" role="region" aria-label="示意图，可横向滚动" tabindex="0" style="overflow-x:auto" markdown="1">

![HBr 加 propene 的完整双步弯箭，二级碳正离子与 Br− 捕获；另比较一级碳正离子次要路径。](/assets/img/chemistry-as-alkenes-hbr.svg){: width="680" height="500" style="min-width:680px" }

</div>

<div class="lesson-check" markdown="1">
<h3 id="addition-check">换烯烃，保留电子账目</h3>
<!-- task:addition-check -->
For 2-methylpropene + HBr under ordinary ionic-addition conditions, draw both possible first steps and carbocations, then both complete product routes with all curly arrows and charges. Name major and minor products and justify the preference using carbon neighbours, not “H goes where there are more H” alone.
<!-- /task:addition-check -->
<details markdown="1"><summary>提示</summary>
展开 (CH3)2C=CH2，数正碳直接相连的碳。
</details>
<details markdown="1"><summary>解答与检查</summary>
主要：π 对 → 末端 CH2 所加的 H，H–Br → Br，得 (CH3)3C+ 与 Br−；Br 孤对 → C+，成 2-bromo-2-methylpropane。次要：H 加中央碳，得 (CH3)2CHCH2+，再受 Br− 进攻，成 1-bromo-2-methylpropane。三级因烷基供电子比一级稳定。每个 C+ 三键，终产物碳四键；若中间体画成四键又加正号，先重数 H。
</details>
</div>

<h2 id="three-reagents">第二阶段由供对物与介质决定</h2>

<h3 id="sulfuric-acid">冷浓硫酸加到 C=C</h3>

把 H2SO4 写成 H–O–SO3H 以突出变化键。冷浓酸加乙烯时，C=C 对 → H，O–H 键 → O，得到 CH3CH2+ 与 HSO4−。HSO4− 负氧的孤对进攻 C+，形成 CH3CH2–O–SO3H，即 ethyl hydrogensulfate，新键是 C–O 不是 C–S。不对称烯烃仍需比较两种碳正离子。随后稀释／加热可水解成醇并再生硫酸，那是后续操作，不能提前塞入冷浓酸加成机理。

<div class="table-responsive" role="region" aria-label="示意图，可横向滚动" tabindex="0" style="overflow-x:auto" markdown="1">

![乙烯与 H–O–SO3H 先成乙基正离子和 HSO4−，负氧孤对形成产物 C–O 键。](/assets/img/chemistry-as-alkenes-sulfate.svg){: width="680" height="440" style="min-width:680px" }

</div>

<h3 id="bromine">Br2——区分反应模型与溴水检验</h3>

烯烃电子密度使 Br2 产生诱导偶极，靠近的 Br 为 δ+。干燥、惰性非水介质中加成得到邻二溴产物，原双键两碳各一个 Br。较完整且科学自洽的电子对模型用**溴鎓 bromonium ion**：C=C 对 → 近 Br，Br–Br 键 → 远 Br，近 Br 孤对 → 另一烯碳，闭成三元桥，正电在桥 Br 上。之后 Br− 向一个碳供对，该碳与桥 Br 的键对返回 Br，桥打开。不需稳定五键碳或游离开放碳正离子。桥式模型用于守住电子账目，不增加高级反式加成立体化学考点。

<div class="table-responsive" role="region" aria-label="示意图，可横向滚动" tabindex="0" style="overflow-x:auto" markdown="1">

![非水干燥介质中 Br2 经溴鎓桥加成：第一阶段三箭、开桥两箭，生成 1,2-dibromoethane。](/assets/img/chemistry-as-alkenes-bromine.svg){: width="680" height="560" style="min-width:680px" }

</div>

**溴水检验 bromine-water test** 用独立少量样品与溴水在室温、无 UV 下振荡；烯烃通常使橙／棕色迅速消失。先记颜色变化，再推断不饱和。水可作为竞争亲核体产生 bromohydrin，因此不能把水相定性检验写成保证纯二溴产物的制备。其他还原性物质也可使溴褪色；在限定候选集中证据较强，却不能唯一证明任何未知物。卤素试剂须教师监督、小规模、适当通风使用。

<div class="lesson-check" markdown="1">
<h3 id="reagent-check">新底物上比较两种试剂</h3>
<!-- task:reagent-check -->
For but-1-ene, draw the complete major-route mechanism with (a) cold concentrated H2SO4 and (b) Br2 in dry inert nonaqueous medium. Include the intermediate, every electron-pair arrow, charges and product structures. For (a) show which atom of HSO4− bonds to carbon. For (b) draw and open the bromonium bridge. Finally explain why “bromine water gave only pure 1,2-dibromobutane” is unsupported.
<!-- /task:reagent-check -->
<details markdown="1"><summary>提示</summary>
保留四碳骨架，产物原子连接必须与供对位置一致。
</details>
<details markdown="1"><summary>解答与检查</summary>
(a) C=C → H，酸 O–H → O；H 加 C1，成 CH3–C+(H)–CH2CH3 与 HSO4−，负氧孤对 → C2，得 CH3CH(OSO3H)CH2CH3（butan-2-yl hydrogensulfate）。(b) 三支初始箭使 Br 桥连 C1/C2 并释放 Br−；Br− 孤对 → 桥中一碳，该 C–桥 Br 键 → Br，得 BrCH2CHBrCH2CH3。带反离子计总电荷均零。水相中水竞争，褪色既不证纯度，也不证唯一该产物。若画 C–S，回看[硫酸](#sulfuric-acid)。
</details>
</div>

<div class="lesson-check" markdown="1">
<h3 id="evidence-check">分开现象与产物推断</h3>
<!-- task:evidence-check -->
Samples P and Q are known to be hexane or hex-1-ene. With fresh bromine-water portions at room temperature without UV, P remains orange and Q becomes colourless. Identify them within this candidate set, give a control and one limitation, and state what further evidence would be needed to claim a pure isolated product.
<!-- /task:evidence-check -->
<details markdown="1"><summary>提示</summary>
颜色检验与产物分析回答不同问题。
</details>
<details markdown="1"><summary>解答与检查</summary>
限定候选下 P 为 hexane、Q 为 hex-1-ene；设试剂空白和已知烯烃阳性对照，同量、混合、时间。失效／过稀试剂会误导，候选外其他反应性官能团也能褪色。纯度／组成需分离后适当分析对照，不能只靠褪色。
</details>
</div>

<div class="lesson-check" markdown="1">
<h3 id="retry-addition">重试——自行选择电子箭头</h3>
<!-- task:retry-addition -->
Draw a complete HBr major-route mechanism for pent-1-ene and name the major product. Then draw ethene with H2SO4 and replace the mistaken arrow “sulfur atom → C+” with a correct arrow and product. Predict the dry-Br2 product of cyclohexene as a connectivity drawing; stereochemical labels are not required.
<!-- /task:retry-addition -->
<details markdown="1"><summary>提示</summary>
不添碳，不拆环。
</details>
<details markdown="1"><summary>解答与检查</summary>
pent-1-ene 末端受质子后在 C2 成二级正离子，再由 Br− → C2 得主要 2-bromopentane，优于一级路径。乙烯／硫酸中应 HSO4− 负氧孤对 → CH3CH2+，成 CH3CH2OSO3H。cyclohexene 仍保留六碳环，在原双键两碳加 Br，得 1,2-dibromocyclohexane。若拆六碳环，要区分开溴鎓小桥与断六碳骨架。
</details>
</div>

<h2 id="polymers">重复单元保留所有侧基</h2>

**加成聚合 addition polymerisation** 把许多烯烃相连，不脱去小分子。C=C 改 C–C，原双键两碳各向下一单元延伸一条键；括号应截过这两条主链键，外写 n，不能只括侧基。通式 n CH2=CHR → [–CH2–CH(R)–]n 守住所有原子。poly(propene)、poly(chloroethene)（PVC）、poly(tetrafluoroethene) 按单体命名；重复单元分别为 –CH2–CH(CH3)–、–CH2–CHCl–、–CF2–CF2–。

<div class="table-responsive" role="region" aria-label="示意图，可横向滚动" tabindex="0" style="overflow-x:auto" markdown="1">

![propene 变两碳重复单元，保留 methyl 侧基；另给四碳链段让学生转换。](/assets/img/chemistry-as-alkenes-polymer.svg){: width="680" height="300" style="min-width:680px" }

</div>

<div class="lesson-check" markdown="1">
<h3 id="polymer-check">三个方向互译</h3>
<!-- task:polymer-check -->
(a) Draw the repeat unit of poly(tetrafluoroethene), with brackets, n and bonds crossing both brackets. (b) From the chain segment –CH2–CHCl–CH2–CHCl–, extract one smallest repeat unit and give its IUPAC polymer name. (c) From –CH2–CH(CH2CH3)–CH2–CH(CH2CH3)–, recover the monomer with a displayed C=C and name it. Explain which side groups remain.
<!-- /task:polymer-check -->
<details markdown="1"><summary>提示</summary>
先标两碳主链块，再改变键级。
</details>
<details markdown="1"><summary>解答与检查</summary>
(a) [–CF2–CF2–]n，两端主链键穿出括号；(b) [–CH2–CHCl–]n，poly(chloroethene)；(c) CH2=CHCH2CH3，but-1-ene。F、Cl、ethyl 都保留；聚合不把侧链都变成新双键，也不丢原子。若 (c) 得 ethene，是丢了 ethyl 侧基。
</details>
</div>

<h2 id="materials">链不易反应，性能仍可调</h2>

聚烯烃有强、基本非极性的饱和 C–C/C–H 主链，已无单体 C=C 可作普通加成，因此许多日常条件下不易反应；不代表不能燃烧或降解。链间色散力在众多接触点累积，总作用可显著。PVC 的 C–Cl 还引入永久偶极，不能臆造链间共价交联来解释普通 PVC。

硬 PVC 适合管道／窗框；**增塑剂 plasticiser** 进入链间，改变堆积、减弱有效作用，使链更易滑动，软 PVC 适合电线绝缘。它不是靠把主链 C–C 都切断来软化。配方、柔韧、耐久的受控证据推动材料认识和产品发展；还需老化与添加剂流失数据。废物持久、回收困难、增塑剂可能迁移，要与寿命长、少更换等收益一起权衡，不能靠“塑料”一词直接判断。

<div class="lesson-check" markdown="1">
<h3 id="materials-check">用数据限定材料论断</h3>
<!-- task:materials-check -->
Constructed results for otherwise matched PVC strips: 0%, 10%, 20% plasticiser require 30, 18, 9 N respectively to bend to the same angle. Propose a controlled comparison, explain the trend at chain level and choose a strip for flexible cable covering. Does this prove the additive is environmentally safe or that C–C bonds were broken? Give two further measurements.
<!-- /task:materials-check -->
<details markdown="1"><summary>提示</summary>
同弯角所需力在这里衡量柔性，不测毒性或主链断键。
</details>
<details markdown="1"><summary>解答与检查</summary>
控制尺寸、PVC 批次、温度、弯曲速率，重复独立制片。增塑剂多、所需力低，符合链更易移动；该组数据 20% 最柔软。不证环境安全或主链断裂。需测添加剂迁移／老化、强度／绝缘性、适当毒性。新证据可改变最佳配方，单一柔性数据不能定全部用途。
</details>
</div>

<div class="lesson-check" markdown="1">
<h3 id="retry-polymer">陌生重复单元重试</h3>
<!-- task:retry-polymer -->
A repeat unit is [–CH(CH3)–CH(CH3)–]n. Draw the monomer and name it. Then explain in English why this polymer should not rapidly decolourise bromine water merely because it was made from an alkene.
<!-- /task:retry-polymer -->
<details markdown="1"><summary>提示</summary>
两个主链碳各连 methyl，恢复 C=C 时都保留。
</details>
<details markdown="1"><summary>解答与检查</summary>
单体 CH3CH=CHCH3，but-2-ene。聚合主链只余 C–C 单键，原 π 键已用于成链，故无普通烯烃加成位点。这个结论只针对给定检验，不等于绝对惰性。
</details>
</div>

<h2 id="later-check">延后回顾——选路径、换表示</h2>

<div class="lesson-check" markdown="1">
<h3 id="mixed-check">原料路线决策</h3>
<!-- task:mixed-check -->
A sample contains pent-1-ene. Without opening earlier help: give a bromine-water observation with one limit; draw the complete HBr major-route mechanism; draw one repeat unit of its addition polymer and recover the monomer from your unit. Write an English paragraph contrasting addition, substitution and elimination using the bond changes and necessary conditions.
<!-- /task:mixed-check -->
<details markdown="1"><summary>提示</summary>
按变化键判反应类型。
</details>
<details markdown="1"><summary>解答与检查</summary>
溴水橙／棕色消失，支持给定样品有 C=C，不证纯度。HBr 经二级 C2+、再 Br− 捕获得主要 2-bromopentane；第一步两箭与捕获箭均要画。聚合单元 [–CH2–CH(CH2CH2CH3)–]n，逆推 CH2=CHCH2CH2CH3。加成消耗 C=C 而不脱基团；水相 OH− 取代 C–X；热乙醇羟基试剂偏向消去 H/X 成 C=C。若英文段落无条件，回读[卤代烷](/zh/alevel/as-chemistry/halogenoalkanes/)再重写。
</details>
</div>

继续[环氧乙烷](/zh/alevel/as-chemistry/epoxyethane/)学习工业部分氧化和水／醇的完整酸催化开环，或到[醇](/zh/alevel/as-chemistry/alcohols/)研究消去形成烯烃。

<h2 id="sources">来源与范围</h2>

[OxfordAQA 9620 specification 5.3，pp.34](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-chemistry-specification.pdf#page=34)。补充阅读：Lister、Renshaw，*International A Level Chemistry: AS and A Level*（2016），Ch14，印刷 pp.222–233；实际阅读用户本机扫描件，不分发扫描页。本页题目、示范、检查点及数值数据均自拟／构造，不赋官方分值。溴鎓模型另与 [OpenStax §8.2](https://openstax.org/books/organic-chemistry/pages/8-2-halogenation-of-alkenes-addition-of-x2) 核对，不加入高级立体结果要求。图均原创，不复制教材图。
