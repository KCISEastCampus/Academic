---
title: 烷烃——分离、转化与自由基链
layout: subjects
mathjax: true
grade: as
subject: as-chemistry
lang: zh-CN
translation_of: /alevel/as-chemistry/alkanes/
permalink: /zh/alevel/as-chemistry/alkanes/
toc_headings: h2, h3
study_page: true
reading_layout: true
---

<h2 id="start-here">先分离混合物，再改变选定分子</h2>

原油中的分子可分离、转化，因而有用。哪一步只是分开分子，哪一步断键，哪一步导致污染？本页覆盖 AS §3.3.2.1–4，把这些问题与证据、方程相连。先修为[数键与自由基](/zh/alevel/as-chemistry/organic-foundations/)；下文回补沸腾模型。题目与数据均自拟／构造，无官方分值。先独立做，再分别打开提示或解答。

<div class="lesson-check" markdown="1">
<h3 id="starting-check">饱和是什么意思？</h3>
<!-- task:starting-check -->
Compare CH3CH2CH3, CH2=CHCH3 and cyclohexane. Which are hydrocarbons, which are saturated, and which fit the acyclic alkane formula? Explain without counting only hydrogen atoms.
<!-- /task:starting-check -->
<details markdown="1"><summary>提示</summary>
烃看所含元素，饱和看碳碳键类型。
</details>
<details markdown="1"><summary>解答与检查</summary>
三者均为烃，只含 C/H。propane、cyclohexane 的碳碳键全为单键，都饱和；只有 propane 属无环 CnH2n+2 烷烃，环使 cyclohexane 为 C6H12。propene 有 C=C，不饱和。不能只看氢少就判烯烃。
</details>
</div>

<h2 id="fractionation">沸程是混合物的性质</h2>

**烷烃 alkanes** 是饱和烃，无环系列通式 CnH2n+2。每增 CH2，电子数与接触面积通常增加，分子间 London 色散力更强，分开分子需更多能量，故沸点通常上升。同分异构体中支化可减小接触，使沸点降低；熔点更依赖堆积，不能套“支链越多熔点必越低”的单调规则。

原油主要为烷烃混合物，加热使大部分汽化，进入下热上冷的**分馏柱 fractionating column**。蒸气上升，反复冷凝／汽化；高沸点物质在较低处冷凝，低沸点物质走得更高。馏分仍是有沸程的混合物，不是单一化学式的纯物质。沸腾主要克服分子间作用，不是断分子内 C–C 键。

<div class="table-responsive" role="region" aria-label="示意图，可横向滚动" tabindex="0" style="overflow-x:auto" markdown="1">

![分馏柱示意，下热上冷；长链高沸程馏分从较低处出，短链低沸程馏分从较高处出。](/assets/img/chemistry-as-alkanes-column.svg){: width="680" height="420" style="min-width:680px" }

</div>

<div class="lesson-check" markdown="1">
<h3 id="fraction-check">解释分离，不只排顺序</h3>
<!-- task:fraction-check -->
Constructed fractions A, B and C boil over 40–100, 150–250 and 300–380 °C respectively. Place their outlets from top to bottom. Explain the molecular reason, why each is a range, and whether collecting A converts a C20 molecule into smaller molecules.
<!-- /task:fraction-check -->
<details markdown="1"><summary>提示</summary>
把柱温与冷凝相连，再把沸点与分子间作用相连。
</details>
<details markdown="1"><summary>解答与检查</summary>
上到下 A、B、C。A 通常含较小分子、色散力较弱，能保持蒸气到较冷上部；大分子较低处冷凝。每馏分含多种物质，所以有沸程。分馏不把 C20 变小，后者需化学断键。若写“C–C 键强所以沸点高”，返回[分馏](#fractionation)。
</details>
</div>

<h2 id="cracking">裂解改变有用分子的供应</h2>

**裂解 cracking** 断大烃的 C–C 键生成小分子。例如 C10H22 → C8H18 + C2H4 守恒，但只是可能产物组合，不是唯一工业反应；需要能量，产物混合物还需分离。

**热裂解 thermal cracking** 用高温高压，产物中烯烃比例高，可作化工原料。**催化裂解 catalytic cracking** 用高温、稍加压及 zeolite 沸石，主要制车用燃料组分和芳香烃。催化剂提供另一反应路径，不是消耗来供碳的反应物。本页不要求裂解机理，也不制造唯一温压背诵值。

炼厂可能重质馏分过剩，小分子燃料或聚合原料需求较大，转化可提升收入；仍须算能耗、催化剂、分离、设备、排放与需求变化。“越小必越赚钱”不是定律。

<div class="lesson-check" markdown="1">
<h3 id="process-check">由需求选择工艺</h3>
<!-- task:process-check -->
A refinery has surplus C12H26 and a buyer for ethene. Complete one possible equation C12H26 → C8H18 + … . Choose a cracking process that favours an alkene-rich product mixture, give its conditions and explain one economic benefit and one cost. Why would a zeolite route instead suit a motor-fuel target?
<!-- /task:process-check -->
<details markdown="1"><summary>提示</summary>
先守恒碳，再守恒氢。一个可能方程不等于整个混合物。
</details>
<details markdown="1"><summary>解答与检查</summary>
C12H26 → C8H18 + 2C2H4。选高温高压热裂解以提高烯烃比例；把过剩料转为可售原料，但有能耗／设备／分离成本。高温稍加压 zeolite 催化路线偏向车用燃料／芳香烃。仅凭此方程不能推出实际收率或利润。
</details>
</div>

<div class="lesson-check" markdown="1">
<h3 id="retry-refinery">重试——分离还是转化？</h3>
<!-- task:retry-refinery -->
A student says, “Raise the column temperature to crack all heavy molecules into a pure ethene fraction.” Correct both claims. Then complete C9H20 → C6H14 + … and give one measurement needed before claiming that this conversion is profitable.
<!-- /task:retry-refinery -->
<details markdown="1"><summary>提示</summary>
把分馏柱与反应器的功能分开。
</details>
<details markdown="1"><summary>解答与检查</summary>
分馏柱按沸腾行为分离；裂解需适当反应器／条件，仍生成混合物，不保证纯乙烯。缺 C3H6。要测实际收率／组成并取得成本或售价；计量只给可能上限，不能给商业结论。
</details>
</div>

<h2 id="combustion">氧供应改变燃烧产物</h2>

燃烧向环境传能，使烷烃成为燃料。充足 O2 时碳变 CO2、氢变 H2O。以丙烷为例，先平 C 再 H 最后 O：C3H8 + 5O2 → 3CO2 + 4H2O。热尾气的水可为蒸气，冷却后可成液体，应看语境。缺氧可生成有毒 CO 和固体碳烟，常与 CO2、未燃燃料并存。一个配平方程只描述一种产物组合，不等于完整尾气。

<h2 id="pollution">把污染物与来源、治理对应</h2>

发动机高温使空气 N2 与 O2 反应：N2 + O2 → 2NO，继续氧化可成 NO2。NOx 影响呼吸并参与光化学污染；CO 干扰血液运氧；碳烟伤肺；未燃烃参与光化学烟雾。含硫杂质燃烧生成酸性 SO2，引起酸沉降。即使完全燃烧，CO2 仍会增强温室增暖。

热的**催化转换器 catalytic converter** 使用 Pt/Rh 等催化剂降低多种气态污染：2CO + 2NO → 2CO2 + N2；也可氧化 CO 与未燃烃。但它不除尽颗粒，不消除 CO2 排放，并需适当工作温度。

烟气脱硫用碱性 CaO 或 CaCO3 与酸性 SO2 反应：SO2 + CaO → CaSO3；SO2 + CaCO3 → CaSO3 + CO2。亚硫酸盐可继续氧化：2CaSO3 + O2 → 2CaSO4。减少酸性排放仍有能耗、物料成本及固体副产物／废物。

<div class="lesson-check" markdown="1">
<h3 id="emissions-check">从来源建立解释</h3>
<!-- task:emissions-check -->
Balance propane combustion to (a) CO and water only and (b) C and water only. Explain why NO can occur even when the fuel contains no nitrogen. Give one balanced converter reaction and one CaCO3 desulfurisation reaction. Assess “a converter makes exhaust harmless” in English.
<!-- /task:emissions-check -->
<details markdown="1"><summary>提示</summary>
平 C/H 后数氧。转换器与脱硫装置处理的对象不同。
</details>
<details markdown="1"><summary>解答与检查</summary>
(a) 2C3H8 + 7O2 → 6CO + 8H2O；(b) C3H8 + 2O2 → 3C + 4H2O。N 来自空气 N2，高温与 O2 反应。转换器：2CO + 2NO → 2CO2 + N2；脱硫：SO2 + CaCO3 → CaSO3 + CO2。“无害”无依据：CO2 仍排放，颗粒未除尽，低温／低效时仍余气态污染物。若 NO 方程把 N 归于燃料，回读[污染](#pollution)。
</details>
</div>

<div class="lesson-check" markdown="1">
<h3 id="retry-emissions">新燃料、新论断</h3>
<!-- task:retry-emissions -->
Balance complete combustion of C4H10. A plant changes CaCO3 to CaO but keeps a cold converter. Which acidic gas can the calcium reagent remove, and why does it not solve the cold-converter problem?
<!-- /task:retry-emissions -->
<details markdown="1"><summary>提示</summary>
钙碱与酸性气体反应，不能代替 CO/NO 催化处理。
</details>
<details markdown="1"><summary>解答与检查</summary>
2C4H10 + 13O2 → 8CO2 + 10H2O。CaO 与 SO2 成 CaSO3，可再氧化为 sulfate；它不提供热催化器有效处理 CO/NO 所需路径。燃烧更完全可减 CO／烟，但仍产 CO2。
</details>
</div>

<h2 id="radical-chain">自由基再生使链继续</h2>

甲烷在 UV 下与氯发生**自由基取代 free-radical substitution**。引发时 Cl–Cl 均裂，不是形成离子。传播一步消耗一个自由基又生成另一个，因此一次引发可带来多次反应；终止把两个自由基结合，不再生成自由基。此混合物在强光下危险，以下用于解释，不是课堂混合操作指令。

<div class="worked-example" markdown="1">

**引发 initiation：**Cl2 → 2Cl·（UV）。**传播 propagation：**Cl· + CH4 → HCl + CH3·；CH3· + Cl2 → CH3Cl + Cl·。两步相加消去自由基，净反应 CH4 + Cl2 → CH3Cl + HCl。**终止 termination：**Cl· + Cl· → Cl2；CH3· + Cl· → CH3Cl；CH3· + CH3· → C2H6。

终止也可生成 CH3Cl，但消耗两自由基而不再生。后续 H 可再被替代，生成 CH2Cl2、CHCl3、CCl4，故通常为混合物，不保证纯氯甲烷。

</div>

<div class="lesson-check" markdown="1">
<h3 id="chain-check">改变烷烃，写完整链</h3>
<!-- task:chain-check -->
Construct a UV chlorination mechanism for ethane giving chloroethane: initiation, both propagation steps and all three radical-pair termination types. State which radical is regenerated, and explain why producing C4H10 is evidence of a termination route. Curly arrows are not required.
<!-- /task:chain-check -->
<details markdown="1"><summary>提示</summary>
乙烷失一个 H 后为 C2H5·，逐步核每个原子。
</details>
<details markdown="1"><summary>解答与检查</summary>
Cl2 → 2Cl·；Cl· + C2H6 → HCl + C2H5·；C2H5· + Cl2 → C2H5Cl + Cl·。终止：2Cl· → Cl2；C2H5· + Cl· → C2H5Cl；2C2H5· → C4H10。传播再生 Cl·，两个 ethyl 自由基结合成 butane 后无自由基。即使净式守恒，漏点也失去机理信息。
</details>
</div>

<div class="lesson-check" markdown="1">
<h3 id="retry-chain">诊断错误传播步</h3>
<!-- task:retry-chain -->
A proposed step is CH3· + Cl· → CH3Cl, labelled propagation. Correct the label and write a genuine methane propagation step producing CH3Cl. Explain why replacing all radical dots with minus signs fails charge and electron accounting.
<!-- /task:retry-chain -->
<details markdown="1"><summary>提示</summary>
看产物侧是否再生成自由基。
</details>
<details markdown="1"><summary>解答与检查</summary>
这是终止；传播为 CH3· + Cl2 → CH3Cl + Cl·。点表示中性物种的不成对电子，负号表示多一电子和负电；CH3− + Cl− → CH3Cl 会无故丢失 −2 电荷。
</details>
</div>

<h2 id="later-check">延后回顾——追踪炼厂中的碳</h2>

<div class="lesson-check" markdown="1">
<h3 id="mixed-check">炼厂简报</h3>
<!-- task:mixed-check -->
Write a 120-word English briefing that follows a heavy alkane from crude oil through separation, conversion and fuel use. Include one balanced possible cracking equation, one pollutant from air rather than fuel, and two different controls with their limitations. End by explaining why UV chlorination is substitution, not cracking.
<!-- /task:mixed-check -->
<details markdown="1"><summary>提示</summary>
写各工艺真实作用，不假定每个碳都变成纯可售产物。
</details>
<details markdown="1"><summary>解答与检查</summary>
核对：馏分仍混合物；沸腾克服分子间作用，裂解断 C–C；例如 C10H22 → C8H18 + C2H4；NO 来自 N2/O2；催化器处理 CO/NO 但不除尽颗粒／CO2；钙碱治 SO2 仍有废物／物料成本。氯化用 C–Cl 替代 C–H，保留碳骨架。若控制措施没对应污染物，回读[污染](#pollution)后重新独立写。
</details>
</div>

下一步：[卤代烷](/zh/alevel/as-chemistry/halogenoalkanes/)把极性 C–X 与取代／消去相连。

<h2 id="sources">来源与限制</h2>

[OxfordAQA 9620 specification 5.3，pp.32–33](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-chemistry-specification.pdf#page=32)。补充阅读：Lister、Renshaw，*International A Level Chemistry: AS and A Level*（2016），Ch12，印刷 pp.196–211；实际阅读用户本机扫描件，不分发扫描页。本页题目、示范、检查点及数值数据均自拟／构造，不赋官方分值。
