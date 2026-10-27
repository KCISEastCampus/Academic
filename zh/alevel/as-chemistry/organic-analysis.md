---
title: 有机分析：检验、精确质量与红外证据
layout: subjects
mathjax: true
grade: as
subject: as-chemistry
lang: zh-CN
translation_of: /alevel/as-chemistry/organic-analysis/
permalink: /zh/alevel/as-chemistry/organic-analysis/
toc_headings: h2, h3
study_page: true
reading_layout: true
---

<h2 id="start-here">几条独立线索能确认什么？</h2>

澄清溶液、一次变色或一个质谱峰通常不能独自确认身份。本页设计检验、用精确质量区分分子式，再把构造红外谱与参考指纹联合解释。先修是[官能团](/zh/alevel/as-chemistry/organic-foundations/)、[醇的氧化](/zh/alevel/as-chemistry/alcohols/)及[质荷比](/zh/alevel/as-chemistry/atomic-structure/#tof)。以下题目、数据与光谱均**自拟／构造**，非官方题或实测。RP5为纸面准备及评价，不证明已完成实际操作。

<h2 id="test-design">分开观察、推断与检验选择</h2>

醛有–CHO，酮的C=O两侧接碳基，羧酸有–COOH。醇的OH连在饱和碳上，–COOH中的OH不把羧酸变成醇。结构能解释检验为什么重叠。

| 问题与方法 | 应记录的观察 | 可作推断与限制 |
| --- | --- | --- |
| 新鲜少量样品加溴水，按要求振荡 | 橙／棕色褪去 | 在限定候选中支持可反应不饱和物；其他物质也能消耗溴。阴性需试剂／对照有效。 |
| 新鲜一份加酸化重铬酸钾(VI)，水浴温热 | 橙变绿 | 一级／二级醇和醛都能氧化；单次变色不能确认醇，也不能区分前两类。 |
| 新鲜Tollens或按指定条件用Fehling温热 | 银镜／灰银，或砖红沉淀 | 在本页简单候选中支持醛；不是对所有有机物普适。这里的酮阴性。 |
| 新鲜一份加碳酸盐，并用石灰水检验气体 | 冒泡，石灰水浑浊 | 支持酸放出CO₂；其他酸也可反应，需候选背景。 |

例如 $\ce{2CH3COOH + Na2CO3 -> 2CH3COONa + H2O + CO2}$ 把气体现象与酸的反应联系。“观察到CO₂”混合了观察与结论；实际看到冒泡，气体检验才支持CO₂身份。

使用**分开标记的新鲜小份 aliquots**，避免先前氧化剂、酸或溴改变后一次被测物。相同条件下做试剂空白及已知阳性，分别查污染和试剂失效；必要时加入适当已知阴性。若方法失效／低于检出限，阴性不证明不存在。含水未知物不能把钠当专属醇检验，水和酸也反应。

<div class="worked-example" markdown="1">
**自拟设计示范。**样品限为丙醛或丙酮，两者同分子式且都有C=O，精确质量及单个羰基峰不能区分。新鲜一份用Tollens，同时做已知醛阳性及空白；有银支持该候选集中的丙醛；阴性只有在阳性成功时才支持丙酮。另一份取得独立光谱证据。
</div>

真实实验需监督下少量、护目镜及合适通风；溴、酸化重铬酸盐有害，Cr(VI)按规定收集，不用明火加热易燃液体而用水浴。Tollens须新配并按批准流程及时处置，不能储存或任残留干燥。实际操作前须读本地风险评估。

<div class="lesson-check" markdown="1">
<h3 id="unknown-check">先设计RP5判断，再看结果</h3>
<!-- task:unknown-check -->
Four separate pure unknowns are drawn without repetition from cyclohexene, ethanol, ethanal and ethanoic acid. Propose a small-scale test plan that identifies them within this set. For each decision state reagent/conditions, observable result and inference. Use fresh aliquots and explain why dichromate alone cannot separate two candidates. Include a blank, an effective positive control and one risk control linked to its hazard. Finally explain why the same plan would not necessarily identify every component of a mixture.
<!-- /task:unknown-check -->
<details markdown="1"><summary>提示</summary>
由候选结构支持的差别入手，观察与物质名分开。
</details>
<details markdown="1"><summary>解答与检查</summary>
新鲜一份加碳酸盐：冒泡、气体使石灰水浑浊→本集合乙酸；另份Tollens／Fehling并有有效已知醛对照，银／砖红沉淀→乙醛。先排除这两种，余者溴水褪色支持环己烯；余下乙醇可另份酸化重铬酸盐温热橙变绿支持。乙醛也还原重铬酸盐，故颜色不是醇专属。须一起说明候选排除与阳性／对照。空白不应阳性，已知能反应样品查试剂；易燃物用水浴，或说明具体Cr(VI)废液／通风控制。混合物可多项阳性且相互遮蔽，纯物质与有限候选假设关键。若复用反应过样品或凭非专属颜色定名，回[选检验](#test-design)再换集合重试。
</details>
</div>

<h2 id="exact-mass">分开分子式证据与结构证据</h2>

标称分子质量使用取整的同位素质量，可能对应多种式；高分辨测量可区分**精确质量 exact mass**。先明确峰是单电荷分子离子M⁺，非碎片、M²⁺或[M+H]⁺；题目须给离子身份或相应证据。本页用给定中性同位素质量求和，按题设约定忽略M⁺的电子质量修正。

<div class="worked-example" markdown="1">
取¹²C=12.0000、¹H=1.0078、¹⁶O=15.9949。C₂H₄O与C₃H₈标称均44，但精确和分别为 $2(12.0000)+4(1.0078)+15.9949=44.0261$ 与 $3(12.0000)+8(1.0078)=44.0624$。若明确M⁺为44.0261±0.0005，只能说**在这些候选中**支持C₂H₄O，不能区分乙醛及其结构异构体；只测有限集合，不能声称无限分子式搜索唯一。
</div>

<div class="lesson-check" markdown="1">
<h3 id="mass-check">区分相同标称质量</h3>
<!-- task:mass-check -->
A constructed M+ measurement of a pure compound is 46.0417 ± 0.0005. The ion is singly charged and unfragmented; neglect electron mass. Candidates are C2H6O and CH2O2. Use 12C = 12.0000, 1H = 1.0078, 16O = 15.9949 to calculate both masses and select the supported formula. Explain why this does not select ethanol rather than methoxymethane. What information would first be needed if the 46.0417 peak had no stated ion identity?
<!-- /task:mass-check -->
<details markdown="1"><summary>提示</summary>
把质量和与误差区间比较，再问异构体到底改变了什么。
</details>
<details markdown="1"><summary>解答与检查</summary>
C₂H₆O：24.0000+6.0468+15.9949=46.0417；CH₂O₂：12.0000+2.0156+31.9898=46.0054。差0.0363远大于±0.0005，列表中支持前者。乙醇与甲氧基甲烷元素／同位素组成相同，精确质量同，需官能团／结构证据；未定身份须先查分子／碎片／质子化及电荷，再由m/z谈分子质量。若只凭整数46，回[标称与精确](#exact-mass)再换式重试。
</details>
</div>

<h2 id="infrared">先读坐标，再指认化学键</h2>

红外频率与允许的分子振动匹配、且振动改变偶极矩时可吸收；键伸缩／弯曲，不是每吸收一次就断键。横轴是**波数 cm⁻¹**，惯例从左到右递减，与频率成正比。纵轴若是**透过率%**，向下谷表示更多吸收；若为吸光度则方向不同。

用[本资格官方数据册Table A](https://www.oxfordaqa.com/oaqaresources/science/assessment/9620-international-a-level-chemistry-data-booklet-2016-v1.pdf)：醇O–H 3230–3550 cm⁻¹、酸O–H 2500–3000、C=O 1680–1750、C–O 1000–1300。这是范围非普适单点；峰宽与重叠重要，酸O–H可与C–H重叠。足够灵敏条件下缺失强预期峰有用，不保证绝对零浓度。

<div class="worked-example" markdown="1">
构造参考出现3230–3550宽谷、近1100的C–O特征，却无可检出的1680–1750 C=O；在简单候选中支持醇而非羧酸，不能区分所有醇。精确质量约束式，再用受控氧化／检验约束类别；几条独立线索优于重复一次推断。
</div>

<h2 id="fingerprints">用参考指纹，但不过度声称纯度</h2>

**指纹区 fingerprint region**约1500 cm⁻¹以下包含多种振动的复杂图样。与相近条件的真实参考比较整体，不能只找一条重合峰。近似匹配支持身份，多出的不匹配峰可能提示杂质或样品变化，但不能证明绝对纯：微量可低于检出限或被重叠遮住，也要查取样、分辨率与背景。

下面是供独立题使用的简化构造谱，非实测图库；其峰位／深度亦以文字给出，不靠颜色或图片才能作答，图省略真实细结构。

<div role="region" aria-label="构造红外比较" tabindex="0" style="overflow-x:auto" markdown="1">

![构造透过率谱U、参考A及参考B，波数由4000向500递减。U与A有1715谷及相同指纹，U另有近3400浅宽谷。等效数值记录紧随图后。](/assets/img/chemistry-as-analysis-ir.svg){: width="900" height="650" style="min-width:760px" }

</div>

等效构造记录：基线均约90%透过，2950附近均有C–H吸收。U与A的谷中心为1715（降至20%）、1360（65%）、1220（50%）、1090（60%）、950（70%）。U另有覆盖3230–3550的宽谷，3400附近至78%；A在那里无检出谷。B无1680–1750谷，有3230–3550宽吸收（至25%），指纹1170（45%）、1050（35%）、890（60%）。均无2500–3000羧酸OH宽带。这些数值与图是同一简化构造记录，非第二套测量。

<div class="lesson-check" markdown="1">
<h3 id="spectrum-check">联合质量、检验与光谱</h3>
<!-- task:spectrum-check -->
Use the constructed U/A/B record above. A is a reference for propanone; B is a reference for propan-2-ol. The major molecular species in U has formula C3H6O from a stated M+ record. A controlled Tollens test is negative. Identify the supported major component, citing the carbonyl region, expected OH region, fingerprint and test evidence separately. Explain the additional shallow U feature and why it does not justify a quantitative impurity percentage. A report calls U “proved 100% pure”. Evaluate that claim and propose one check on the extra feature.
<!-- /task:spectrum-check -->
<details markdown="1"><summary>提示</summary>
共享图样可支持主要身份，多出特征限制纯度判断；不能把透过率直接当组成百分比。
</details>
<details markdown="1"><summary>解答与检查</summary>
本参考集支持主要为丙酮：C₃H₆O相符，1715在C=O范围，低波数整体匹配A；有效对照下Tollens阴性与酮而非丙醛一致。主要谱不具B强宽OH及指纹，但U多出浅宽OH区特征，可能含OH杂质（包括水），也可能取样／背景，不能唯一指一种杂质。未给校准／光程／浓度模型，78%透过不等于22%杂质。干净干燥取样、合适背景复测，比较新份及适当参考。即使完全匹配亦不证明检出限下零杂质。若只凭一峰或忽略额外带，回[参考限制](#fingerprints)再换证据重试。
</details>
</div>

<h2 id="atmosphere">把分子吸收连到能量收支</h2>

地表受太阳辐射加热后发射红外，CO₂、CH₄、H₂O的部分振动能在相应频率吸收；分子碰撞交换能量，大气也向不同方向发射辐射，改变向太空逸出能量。同温度下温室吸收增强，最初外逸减少，地表／低层大气升温，直到改变条件下重新达到进出能量平衡；不是凭空造能量。

并非每个振动都红外活性，须改变偶极矩。对称平衡构型CO₂无永久净偶极，但有极性键和红外活性模式；不能因N₂／O₂也碰撞就推成同样温室行为。这与臭氧层屏蔽紫外不同；不把教材旧浓度表当今日数值，也不能由一条谱带量化一种气体全部气候作用。

<div class="lesson-check" markdown="1">
<h3 id="climate-check">修复能量解释</h3>
<!-- task:climate-check -->
A report says “CO2 cannot absorb IR because it is nonpolar; greenhouse gases make new energy and mainly block ultraviolet, so one strong laboratory band proves a fixed amount of global warming.” Repair each claim using molecular vibration and an energy-balance argument. State why the spectrum alone cannot give that quantitative climate conclusion.
<!-- /task:climate-check -->
<details markdown="1"><summary>提示</summary>
区分永久偶极与振动时的改变，再区分吸收机制与整个大气预测。
</details>
<details markdown="1"><summary>解答与检查</summary>
红外活性要求振动改变偶极矩，CO₂虽无永久净偶极仍有此模式。温室气体吸收／发射相关外逸IR并交换能量，不造能量；臭氧／UV屏蔽不同。增强吸收在同温下先减外逸，随后升温至新收支平衡；浓度、路径、重叠、发射、反馈及条件都重要，一条带非校准的全球温度预测。若只写“困住热”，重建地表→IR→分子吸收发射→收支链，再用完整英文表达。
</details>
</div>

<h2 id="retry">稍后用新候选与记录重试</h2>

<div class="lesson-check" markdown="1">
<h3 id="retry-tests">新有限集合</h3>
<!-- task:retry-tests -->
A pure sample is either but-1-ene, butan-2-ol, butanal or butanoic acid. Design a minimum defensible sequence using separate fresh portions and controls. Explain why a negative Tollens result alone cannot choose butan-2-ol, and why acidified dichromate cannot distinguish butanal from butan-2-ol.
<!-- /task:retry-tests -->
<details markdown="1"><summary>提示</summary>
选择能改变剩余候选的检验，说明阴性后还剩什么。
</details>
<details markdown="1"><summary>解答与检查</summary>
碳酸盐及确认CO₂支持丁酸；新鲜受控Tollens／Fehling支持丁醛；排除两者后另份溴水褪色支持丁-1-烯，剩下醇再以受控氧化支持。写出上述现象／条件；初始集Tollens阴性仍有烯、醇、酸；醛与二级醇温热均还原酸化重铬酸盐。加有效对照、不得带入先前试剂，并把控制连具体危险；观察推断仍混时收答案重写。
</details>
</div>

<div class="lesson-check" markdown="1">
<h3 id="retry-mass">新精确质量比较</h3>
<!-- task:retry-mass -->
A stated singly charged M+ value is 58.0417 ± 0.0005, neglecting electron mass. Compare C3H6O and C2H2O2 using the same atomic masses. Which is supported in this pair? Explain why exact mass cannot distinguish propanal from propanone, and name independent evidence that can.
<!-- /task:retry-mass -->
<details markdown="1"><summary>提示</summary>
逐原子计数，分子式与连接是两种问题。
</details>
<details markdown="1"><summary>解答与检查</summary>
C₃H₆O=36+6.0468+15.9949=58.0417；C₂H₂O₂=24+2.0156+31.9898=58.0054，列表支持前者。丙醛与丙酮同式同精确质量；限定简单集合可用有效醛检验及相同条件参考指纹区分。若凭质量唯一结构，回[式的限制](#exact-mass)再综合。
</details>
</div>

<div class="lesson-check" markdown="1">
<h3 id="retry-spectrum">不标方法的证据组合</h3>
<!-- task:retry-spectrum -->
A different pure sample has formula C2H4O2, a strong trough near 1720 cm−1 and a very broad absorption from 2500 to 3000 cm−1. It gives effervescence with carbonate and the gas makes limewater milky. Choose between ethanoic acid and methyl methanoate, justify the positive and exclusion evidence, and explain why an exact fingerprint match still would not certify absolute purity. Return after another topic and answer with all help closed.
<!-- /task:retry-spectrum -->
<details markdown="1"><summary>提示</summary>
联合结构、谱区和反应，不只对一个数字。
</details>
<details markdown="1"><summary>解答与检查</summary>
支持乙酸：两者都可有C=O且同式，但宽酸OH加碳酸盐／确认CO₂支持COOH；甲酸甲酯没有此OH，也不在此检验中作该酸。匹配参考支持身份，检出限下／重叠杂质仍可能，不能证明绝对纯。若只凭羰基，回[谱区](#infrared)，再用英文解释独立气体证据。
</details>
</div>

<h2 id="sources">范围、来源与下一步</h2>

[OxfordAQA大纲5.3](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-chemistry-specification.pdf)3.3.6.1–3及RP5；[官方实验手册](https://www.oxfordaqa.com/oaqaresources/science/teaching/a-level-practical-handbook-chemistry-4.2.pdf)RP5页71–73；[9620数据册](https://www.oxfordaqa.com/oaqaresources/science/assessment/9620-international-a-level-chemistry-data-booklet-2016-v1.pdf)Table A。实际读用户Lister/Renshaw(2016)教材印刷248–255；不含A2 NMR、色谱或系统碎裂。所有题和谱原创教学构造，无官方分值；接[全课程混合综合](/zh/alevel/as-chemistry/as-review/)。未做真实学生试用及实验操作考查。
