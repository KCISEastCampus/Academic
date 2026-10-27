---
title: 第2族——趋势与化学证据
layout: subjects
mathjax: true
grade: as
subject: as-chemistry
lang: zh-CN
translation_of: /alevel/as-chemistry/group-2/
permalink: /zh/alevel/as-chemistry/group-2/
toc_headings: h2, h3
study_page: true
reading_layout: true
---

<h2 id="start-here">白色固体什么时候能鉴别离子？</h2>

白色固体可能是新生成的产物、未溶解的原料，也可能是污染物。只看颜色不能确定它是什么。这一页先用 Mg–Ba 的外层电子解释反应，再学习怎样选择试验，让观察支持一个具体结论。

先修是原子核与电子层、离子电荷、酸碱反应及配平；化学式比例可回补[物质的量与方程式](/zh/alevel/as-chemistry/amount-and-equations/)，浓度可回看[溶液](/zh/alevel/as-chemistry/solutions-and-titration/#concentration)。本页会解释所需的电子、成键和氧化还原概念。范围为 OxfordAQA 9620 AS §3.2.2，以及 Required practical 3 中第2族与硫酸根部分，不是完整 RP3。所有任务与样品记录均为自拟／构造，无官方分值；纸面决策不能证明实际操作已经熟练。

<div class="lesson-check" markdown="1">
**先作一次判断——自拟题，构造记录。**
<!-- task:observation-check -->
A clear, colourless solution becomes cloudy after a reagent is added. A student writes: “Sulfate is present because barium sulfate is white.” Identify what was actually observed and what was inferred. State two missing pieces of information needed before assessing the inference. No knowledge of a particular test is needed yet.
<!-- /task:observation-check -->
<details markdown="1"><summary>提示</summary>
如果试剂或样品不同，是否也可能出现同样的现象？
</details>
<details markdown="1"><summary>解答与检查</summary>
直接观察是加入试剂后变浑浊，符合形成沉淀的现象；沉淀的化学身份与硫酸根都不是直接“看见”的。至少需要试剂身份，以及样品预处理／可能干扰物的信息；还应知道清洁试剂的对照情况。若观察栏已写 BaSO4，先改成可见现象，再在[证据任务](#evidence-check)中重新区分。
</details>
</div>

<h2 id="electrons-and-reactivity">外层模式相同，受到的吸引不同</h2>

Mg、Ca、Sr、Ba 都有两个外层电子，排布为 **ns²**：Mg [Ne]3s²、Ca [Ar]4s²、Sr [Kr]5s²、Ba [Xe]6s²。方括号代表填满的内层。失去两个外层电子后形成 M²⁺；原子并非一开始就带 2+ 电荷。金属在反应中失去电子，发生**氧化（oxidation）**；它把电子交给其他物种，因此是**还原剂（reducing agent）**。

沿族向下，有电子占据的层数增多，外层电子离核更远，也受到更多内层电子的**屏蔽（shielding）**。虽然质子数增加，但对外层电子而言，距离与屏蔽的增加超过核电荷增加的影响，核对外层电子的吸引减弱。因此**第一电离能（first ionisation energy）**降低。它指从一摩尔气态原子的每个原子中移走一个电子所需的能量：

$$\mathrm{M(g)\rightarrow M^+(g)+e^-}$$

定义不能改成固态金属或生成 M²⁺；移走两个外电子需要先后两次电离。较容易失电子帮助解释 Mg→Ba 与水反应更活泼，但电离能本身不是速率公式。表面覆盖层、温度与暴露面积也影响所见现象。

<div class="table-responsive" role="region" aria-label="外层电子示意图，必要时可横向滚动" tabindex="0" style="overflow-x:auto" markdown="1">

![Mg 与 Ca 的简化原子示意：Mg 有三个占据电子层，Ca 有四个，两者最外层均画两个电子。内层电子不逐个绘出，以内层区域表示。Ca 的外层电子离核较远。图不按真实比例绘制。](/assets/img/chemistry-as-group2-shells.svg){: width="680" height="330" style="min-width:600px" }

</div>

图用于比较层数，不是原子照片或定量受力图。质子数和内层电子数都变化；“向下核内质子更少”是错误解释。

<h3 id="melting">熔化与移走电子是两种过程</h3>

金属是正离子实与离域电子相互吸引形成的巨型结构。熔化破坏有序排列，不是把每个原子变成气态离子。对 Ca→Sr→Ba，离子实增大而每个原子提供的外层电子数相同，对离域电子的吸引总体减弱，熔化所需能量较少。

| 元素 | 第一电离能 / kJ mol−1 | 熔点 / K |
| --- | --- | --- |
| Mg | 738 | 922 |
| Ca | 590 | 1112 |
| Sr | 550 | 1042 |
| Ba | 503 | 998 |

这些是 Lister/Renshaw（2016）印刷 p.160 表1的近似参考数据，不是本班测量。**Mg 不服从这个简单熔点趋势**：Ca 的熔点反而高于 Mg。晶体结构也有影响；大小模型能解释 Ca–Ba 的下降，却不能完整预测 Mg–Ba 全段。不能画成一路下降，也不能说金属熔化是拆开共价分子。

<div class="lesson-check" markdown="1">
<h3 id="trend-check">评价两种解释</h3>
**自拟题。**
<!-- task:trend-check -->
A student predicts that Sr has a smaller radius than Ca because Sr has more protons. Another predicts that Mg must have the highest melting point because it has the highest first ionisation energy in the table. Evaluate both claims. Write a connected English explanation of the radius/ionisation-energy comparison and use the melting data to explain why the second prediction fails. Explain the fall in melting point from Ca to Ba in terms of metallic structure and bonding, and state why this model does not predict Mg's position reliably.
<!-- /task:trend-check -->
<details markdown="1"><summary>提示</summary>
先指出多出哪一层，再区分两种能量变化所涉及的粒子及相互吸引。
</details>
<details markdown="1"><summary>解答与检查</summary>
Sr 多一个占据电子层，外电子离核更远、屏蔽更多，因此半径比 Ca 大、第一电离能更低，尽管其质子数更多。Mg 的 922 K 小于 Ca 的 1112 K。第一电离是气态原子失去电子；熔化改变巨型金属结构，涉及离子实大小、离域电子吸引和晶体结构。Ca→Ba 每个原子提供的外层电子数相同，但正离子实增大，对离域电子的吸引总体减弱，金属键减弱，熔化时破坏有序结构所需能量降低。Mg 的晶体结构不同，所以只按大小不能可靠定位它。完整因果链须承认核电荷增加，再解释它为何没有逆转半径／电离能趋势。若用了“分子间作用力更强”，回看[金属键](#melting)，再做[模型重试](#retry-model)。
</details>
</div>

<h2 id="water-and-oxygen">先说明条件，再选择产物</h2>

镁与冷水反应很慢。短时间内可能不易看到氢气；表面氧化物与难溶氢氧化物层会阻碍接触。“一分钟没有明显变化”不能证明完全不反应。冷水反应表示为：

$$\mathrm{Mg(s)+2H_2O(l)\rightarrow Mg(OH)_2(s)+H_2(g)}$$

加热的镁与**水蒸气（steam）**反应快得多，生成的却是氧化物：

$$\mathrm{Mg(s)+H_2O(g)\rightarrow MgO(s)+H_2(g)}$$

Ca、Sr、Ba 与冷水反应依次更剧烈，生成氢氧化物和氢气。钙与过量水可写为：

$$\mathrm{Ca(s)+2H_2O(l)\rightarrow Ca(OH)_2(aq)+H_2(g)}$$

超过溶解度时，部分 Ca(OH)2 会形成白色悬浊物；`(aq)` 说明溶解部分，不承诺任何浓度下都澄清。Sr/Ba 的氢氧化物更易溶。冒泡是观察；“产生氢气”是由反应模型支持、必要时由教师控制的小量气体检验进一步支持的推断。不要把火焰靠近正在反应的金属来试探。

作为与氧反应的比较，加热镁在氧气中燃烧，发出强烈白光，形成白色氧化物：

$$\mathrm{2Mg(s)+O_2(g)\rightarrow 2MgO(s)}$$

Mg 氧化数由 0 变 +2，氧由 0 变 −2；每个配平方程中总失电子与得电子均为四个。这是氧化还原反应，不产生氢气。在空气中燃烧还可能有其他产物，不能假设得到纯氧化物。较重的第2族金属在适当氧气条件下也能生成过氧化物，因此镁的例子不是所有元素“只生成 MO”的普遍规则。这里的氧气反应是理解模型的补充，不另称 §3.2.2 增列的必考反应清单。

<h3 id="titanium">完整示范：镁为什么能提取钛？</h3>

<div class="worked-example" markdown="1">
**自拟解释——工业反应，不是学校操作规程。** 工业上在高温、惰性气氛下用镁还原 titanium(IV) chloride。因为钛的氧化数变化，选择电子转移模型解释：

$$\mathrm{TiCl_4+2Mg\rightarrow Ti+2MgCl_2}$$

Ti 在 TiCl4 中为 +4，生成单质后为 0，需要得到四个电子。每个 Mg 由 0 变 +2，只提供两个电子，所以每个 Ti 需两个 Mg；Cl 始终为 −1。Mg 是还原剂，自身被氧化，不是催化剂。检查原子：左右均为一个 Ti、四个 Cl、两个 Mg。此处总工业方程没有给定确切操作温度或相态安排，因此不附物态符号。2:1 比例来自电子守恒，不是根据白色产物猜出。
</div>

<div class="lesson-check" markdown="1">
<h3 id="reaction-check">比较三个过程</h3>
**自拟题。**
<!-- task:reaction-check -->
Write balanced equations with states for Ca with excess cold water, Mg with cold water and heated Mg with steam. Explain why Mg does not always give the same oxygen-containing product, and why no obvious bubbles in one minute of the cold-water test does not prove that Mg cannot react with water. Compare Sr and Ba with cold water under matched conditions and justify your prediction. In TiCl4 + 2Mg → Ti + 2MgCl2, identify the reducing agent and the total electron transfer per Ti atom. Finally write the equation for Mg heated in oxygen and state whether hydrogen is expected from that reaction.
<!-- /task:reaction-check -->
<details markdown="1"><summary>提示</summary>
追踪氧的来源是否也含氢，再用氧化数判断谁提供电子。
</details>
<details markdown="1"><summary>解答与检查</summary>
Ca(s) + 2H2O(l) → Ca(OH)2(aq) + H2(g)，超过溶解度时可能有悬浊物；冷水中 Mg(s) + 2H2O(l) → Mg(OH)2(s) + H2(g)；加热镁接触水蒸气时 Mg(s) + H2O(g) → MgO(s) + H2(g)。同一种金属在不同条件下产物不同。冷水反应慢，表面层阻碍接触，所以一分钟没有明显气泡不等于完全没有反应。温度、表面等可比时，预计 Ba 比 Sr 更剧烈：更大的距离／屏蔽减弱外电子受核吸引，较容易失电子。每个 Ti 对应的 Mg 总共提供四个电子，Mg 是还原剂。2Mg(s) + O2(g) → 2MgO(s)；此反应没有氢的来源。若选 Ti 为还原剂，回看[电子转移](#titanium)，关闭答案后重新标注氧化数变化。
</details>
</div>

<h2 id="dissolving-and-reacting">氢氧化物易溶，不等于金属更活泼</h2>

离子固体是延伸的晶格，不是一群独立 M(OH)2 分子。**溶解（dissolving）**把固体中的离子转移到水中。对溶解的少量氢氧化镁：

$$\mathrm{Mg(OH)_2(s)\rightleftharpoons Mg^{2+}(aq)+2OH^-(aq)}$$

由于微溶，大部分仍为固体。沿 Mg→Ca→Sr→Ba，氢氧化物溶解性**增加**。Mg(OH)2 形成悬浊液；Ca(OH)2 微溶，其澄清饱和溶液是石灰水；Sr/Ba 氢氧化物更易溶。同温度下，溶得更多能使饱和溶液含有更多 OH−；任意比较未知浓度的未饱和溶液，不能建立这个趋势。

**硫酸盐方向相反**：MgSO4 可溶，CaSO4 微溶，SrSO4 很难溶，BaSO4 对这些检验可视为不溶。水中的 Ba²⁺ 遇到硫酸根可以生成白色固体，但这不是样品中存在钡金属的证据。

两种溶解性趋势都涉及固体对离子的束缚与水对离子的稳定之间的平衡。换了阴离子，这种关系也变了；只用外电子容易失去，推不出溶解性。AS 需要认识相对趋势，不需要 A2 晶格／水合能定量计算或溶度积计算。

**氧化物还有另一层区别。** CaO 与水反应并放热，形成新化合物：

$$\mathrm{CaO(s)+H_2O(l)\rightarrow Ca(OH)_2(s)}$$

这表示水量有限时的熟化反应（slaking）；水过量时部分氢氧化物会溶解，也可能仍有固体。MgO 与水反应慢得多，短时间冷水比较中主要仍为固体。起始氧化物减少，不是未改变的 MO 简单溶成水中游离氧离子。不能把这些现象标成实测的“氧化物溶解性单调趋势”。

<h3 id="uses">从实际作用选择化合物</h3>

微溶的 Mg(OH)2 用于抗酸药悬浊液。已溶解的 OH− 被酸消耗后，更多固体可继续溶解、反应，从而中和酸；微溶不等于不能中和：

$$\mathrm{Mg(OH)_2(s)+2H^+(aq)\rightarrow Mg^{2+}(aq)+2H_2O(l)}$$

Ca(OH)2 可中和农业土壤酸性、提高 pH，用量必须适合土壤，不能无限增加，也不能换成可溶性钡化合物。医疗 X-ray contrast 造影制剂利用钡强烈吸收 X 射线，同时 BaSO4 极难溶，限制有毒 Ba²⁺ 的释放。这里是专业制备的材料，不是让人服用实验室沉淀。MgSO4 则可溶，有泻剂等医疗用途，并非难溶造影剂。

CaO 或 CaCO3 通过化学反应除去烟气中的酸性 SO2。生成亚硫酸盐阶段的简单总式是：

$$\mathrm{CaO(s)+SO_2(g)\rightarrow CaSO_3(s)}$$

$$\mathrm{CaCO_3(s)+SO_2(g)\rightarrow CaSO_3(s)+CO_2(g)}$$

氧化条件下可进一步转为硫酸盐：$\mathrm{2CaSO_3+O_2\rightarrow2CaSO_4}$。真实湿法装置涉及悬浊液，也可能生成含结晶水的石膏。前两个方程解释酸性气体如何被移除，不代表所有工业固体都是无水亚硫酸盐。减少 SO2 是益处；使用 CaCO3 也会释放 CO2，因此除掉一种污染物不等于完全没有环境代价。

<div class="lesson-check" markdown="1">
<h3 id="use-check">把性质与用途联系起来</h3>
**自拟题。**
<!-- task:use-check -->
A supplier proposes (i) replacing Mg(OH)2 antacid suspension with Ba(OH)2 because it dissolves more, (ii) replacing BaSO4 X-ray contrast with soluble MgSO4, and (iii) using powdered CaCO3 to remove SO2. Evaluate each proposal using chemical properties and one relevant risk or limitation. Write the net ionic equation for Mg(OH)2 neutralising acid and an overall equation for proposal (iii). Explain whether “the powder disappears in acid” proves that it was highly soluble in pure water. How does Ca(OH)2 treatment change acidic soil?
<!-- /task:use-check -->
<details markdown="1"><summary>提示</summary>
区分溶解、消耗酸和吸收 X 射线。有用的反应仍可能产生需要处理的副产物。
</details>
<details markdown="1"><summary>解答与检查</summary>
(i) 拒绝：更易溶不是安全依据；钡化合物可释放有毒 Ba²⁺。Mg(OH)2 虽在水中微溶，仍能中和酸：Mg(OH)2(s) + 2H+(aq) → Mg²⁺(aq) + 2H2O(l)。(ii) 拒绝：可溶的 MgSO4 不具备 BaSO4“强吸收 X 射线＋极难溶”的组合。(iii) 化学上可用：CaCO3(s) + SO2(g) → CaSO3(s) + CO2(g)，但产生 CO2，固体也需处理。粉末在酸中消失可能是反应，不能证明纯水中高度可溶。Ca(OH)2 消耗酸性、提高土壤 pH，过量会超过合适范围。若只按溶解性排序而没解释用途，回看[作用机制](#uses)，再做[证据重试](#retry-evidence)。
</details>
</div>

<h2 id="sulfate-evidence">为什么先加酸，后加氯化钡？</h2>

BaCl2 提供水中的 Ba²⁺。硫酸根浓度足以检出时，形成白色 BaSO4 沉淀：

$$\mathrm{Ba^{2+}(aq)+SO_4^{2-}(aq)\rightarrow BaSO_4(s)}$$

左右均为一个 Ba、一个 S、四个 O，净电荷均为零。来自样品的 Na⁺ 或 Mg²⁺、来自试剂的 Cl− 是旁观离子，应省去。净离子式标出构成新固体的离子，不是把试管中每个离子都抄上去。

碳酸根也能形成白色钡盐沉淀：

$$\mathrm{Ba^{2+}(aq)+CO_3^{2-}(aq)\rightarrow BaCO_3(s)}$$

因此先加 BaCl2，白色固体的解释并不唯一。应另取新鲜样品，**先加稀盐酸（dilute hydrochloric acid）**，小心混匀，直到碳酸根充分反应、溶液保持酸性；让冒泡结束，再加 BaCl2：

$$\mathrm{CO_3^{2-}(aq)+2H^+(aq)\rightarrow CO_2(g)+H_2O(l)}$$

若有 OH−，酸也会中和它：$\mathrm{H^+(aq)+OH^-(aq)\rightarrow H_2O(l)}$。酸化目的是除掉干扰物，不是让 BaSO4 变白。稀 HCl 不引入硫酸根。**不能用 H2SO4 给硫酸根检验酸化**：它会带入正在寻找的离子。稀硝酸也能在此检验中避免带入硫酸根，但应遵循给定方法；换一种检验必须重新考虑酸的选择。HCl 会给后续氯离子检验带入 chloride，因此不同分析应分别另取样品。

少量分次加入，而非一下灌满：保留操作顺序和最初变化的可观察性，保持安全体积，避免过度稀释掩盖少量沉淀。酸必须足以除去可能的碳酸根，不能把“两滴”当万能规定；之后 BaCl2 也需按已验证方法加入足够量。试剂越多不一定越好，白色深浅本身不能定量测硫酸根。

<h3 id="worked-test">完整示范：混合物可以先后出现两种现象</h3>

<div class="worked-example" markdown="1">
**自拟构造情境。** 某溶液可能有 sulfate、carbonate、两者都有或都没有；这个模型只允许这两种相关干扰阴离子。另取样品，因为先前加过的试剂可能已改变组成。加稀 HCl 冒泡；充分反应后液体仍呈酸性，再加 BaCl2 有白色沉淀。同样方法下，试剂空白保持澄清，已知硫酸根参考样品产生白色沉淀。

观察栏分别写“加 HCl 冒泡”和“随后加 BaCl2 产生白色沉淀”。受限模型中，前者通过酸放出 CO2 支持 carbonate，后者在已除去 carbonate 干扰的条件下支持 sulfate。两个净式就是前述碳酸根与酸、钡离子与硫酸根反应。必要时可另用教师批准的石灰水检验支持气体身份：CO2(g) + Ca(OH)2(aq) → CaCO3(s) + H2O(l)，起初石灰水变浑浊；长时间通入过量 CO2 可能重新澄清，所以要记录初始变化。

阳性参考检验试剂和方法能否显示硫酸根，空白检验是否存在污染。它们都不能证明排除了任何可能的未知化学物。“这些条件下检出 sulfate”比“见白色固体”有更明确的证据，也比“样品是纯 Na2SO4”更符合结论边界。
</div>

<div class="lesson-check" markdown="1">
<h3 id="unknown-check">设计一次鉴别</h3>
**自拟题，构造未知样品。**
<!-- task:unknown-check -->
P and Q are clear solutions, each containing exactly one of Na2SO4 or Na2CO3 at a concentration detectable by the validated tests. You have dilute HCl, dilute H2SO4, BaCl2 solution, deionised water and a known sulfate reference. Choose and order tests on fresh portions to identify P and Q; state the observations expected for each, two net ionic equations, a blank and a positive control. Explain why adding BaCl2 directly to both is insufficient and why the acid choice matters. Could a negative sulfate result alone distinguish an arbitrarily dilute sulfate sample from water?
<!-- /task:unknown-check -->
<details markdown="1"><summary>提示</summary>
选择一种预处理，排除造成同样可见结果的另一原因，同时不加入待检离子。
</details>
<details markdown="1"><summary>解答与检查</summary>
分别取新鲜样品，先加稀 HCl；受限模型中 carbonate 冒泡，sulfate 不冒泡。加足酸除去碳酸根、保持酸性后再加 BaCl2：硫酸盐样品出现白色沉淀，原碳酸盐样品应保持澄清。净式为 CO3²−(aq) + 2H+(aq) → CO2(g) + H2O(l)，以及 Ba²⁺(aq) + SO4²−(aq) → BaSO4(s)。去离子水加相同酸／试剂作为空白，应澄清；已知 sulfate 参考相同处理后应沉淀。直接加 BaCl2 可能两者都沉淀；H2SO4 引入 sulfate，使沉淀不能归于原样品。阴性结果也不能排除低于检出限的 sulfate。若方案得到两个相同白色结果，回看[干扰](#sulfate-evidence)，再做[检验重试](#retry-test)。
</details>
</div>

<h2 id="safe-comparison">比较阳离子时不要改变问题</h2>

第2族盐加入 OH− 可形成 M(OH)2，加入 sulfate 可形成 MSO4。Mg 与 Ba 可提供鲜明对比：适当 NaOH 检验中 Mg(OH)2 容易沉淀，MgSO4 则留在溶液；相同条件下的稀 Ba²⁺ 样品可在 NaOH 检验中澄清、遇 sulfate 沉淀。须使用同条件参考样品。不能仅猜白色“更浅”就区分 Ca/Sr；浓度、加入量、混匀和观察时间都会改变表观结果。

氢氧化物与硫酸盐比较要**分别另取新鲜样品**。先看少量试剂的现象，再逐滴加到规定过量，记录固体是否保留，以区分“最初形成”与“随后变化”。过量不是无限加入浓碱，也不表示所有沉淀都应消失。这里的第2族氢氧化物沉淀不预期像某些其他金属那样发生两性再溶解；更广的配合物化学不在本页展开。

这些是方案任务。真实操作须由教师批准并监督：戴防飞溅护目镜，使用规定的稀试剂与小用量，试管不超过半满、管口不朝人，不尝味、不直接闻未知物。可溶性钡盐有毒，要用专用滴管、避免接触，含钡废物按教师要求收集，不能倒入水槽。稀酸碱也可损伤眼睛，应逐滴加入、轻轻混匀，飞溅立即报告。金属与水反应放热并释放易燃氢气；Sr/Ba 演示及镁燃烧须有另外的教师控制、屏挡／护眼与火源控制，不能直视燃烧的镁。重复试验不能代替这些风险控制。

<div class="lesson-check" markdown="1">
<h3 id="cation-check">选择两项比较</h3>
**自拟题，构造参考条件。**
<!-- task:cation-check -->
X and Y are fresh 0.10 mol dm−3 solutions, one MgCl2 and one BaCl2; no other cations are possible. You have 0.10 mol dm−3 NaOH, 0.10 mol dm−3 Na2SO4, dilute HCl, deionised water and known MgCl2/BaCl2 references. Choose a small-volume comparison to identify X and Y. Predict the paired observations, justify separate portions and observing a small addition before adding the prescribed excess, and write the net ionic equations. Include one hazard-specific control. Explain why the same scheme cannot automatically identify Ca2+ and Sr2+ at unknown concentrations; which of their hydroxides is more soluble, and which sulfate is less soluble? Use references to validate the visible patterns under the same method rather than treating them as concentration-independent rules.
<!-- /task:cation-check -->
<details markdown="1"><summary>提示</summary>
每种试剂都用新取样品，寻找互相一致的两个结果，不要把所有试剂倒进同一管。
</details>
<details markdown="1"><summary>解答与检查</summary>
每种未知物分别取等量新鲜样品作 NaOH 与 sulfate 检验，并排设置参考与空白。先观察少量试剂，再观察规定继续加入 NaOH 的结果：前者记录是否形成，后者检查固体是否持续存在，不能先假设过量一定使其溶解。在这些稀溶液条件下，氢氧化物白色沉淀持续存在、硫酸盐检验不沉淀者对应 MgCl2；相反组合对应 BaCl2。净式：Mg²⁺(aq) + 2OH−(aq) → Mg(OH)2(s)，Ba²⁺(aq) + SO4²−(aq) → BaSO4(s)。少量取用／专用滴管、收集有毒含钡废物并戴护目镜防飞溅。Sr(OH)2 比 Ca(OH)2 易溶，SrSO4 比 CaSO4 难溶。未知浓度会改变可见沉淀，Ca/Sr 可能出现重叠结果，因此白色深浅不是通用鉴别法。这里不需 HCl 预处理，它反而会消耗后来加入的 OH−。若用了已加酸样品，先回看[取样选择](#safe-comparison)、完成[证据重试](#retry-evidence)，再用新鲜样品重新设计。
</details>
</div>

<div class="lesson-check" markdown="1">
<h3 id="evidence-check">哪些记录能支持结论？</h3>
**自拟题，构造观察记录。**
<!-- task:evidence-check -->
In sulfate testing, set A gives a white precipitate for an acidified unknown and for the acid/reagent blank; the positive sulfate reference also precipitates. Set B, using fresh apparatus and fresh reagent portions, has a clear blank, a precipitating positive reference and a clear unknown after proper HCl pretreatment and BaCl2 addition. Evaluate the conclusion “A proves sulfate; B proves no sulfate at any concentration.” Separate a possible systematic problem from variation in observing a faint precipitate. Propose a targeted check for each and explain why repeating A three times and taking a majority vote would not repair it.
<!-- /task:evidence-check -->
<details markdown="1"><summary>提示</summary>
先问没有样品时是否也有这个“信号”，再问澄清试管到底能排除什么。
</details>
<details markdown="1"><summary>解答与检查</summary>
A 的空白也沉淀，不能把固体归于未知物，应通过新鲜空白与逐项更换来调查试剂、水、滴管或玻璃器皿污染；不能未经检查就认定某一具体原因。B 支持“此方法未检出 sulfate”，不是任何浓度下绝无 sulfate；阳性参考有效也不能消除检出限。试剂污染可造成系统性假阳性；混匀、观察时间或背景不一致可使微弱浑浊判断波动。前者需隔离／更换来源，后者需统一条件并和参考／空白比较。带同一故障重复三次，只会重现故障。若把有／无现象的多数表决当成溶解度测量，回看[直接观察](#start-here)，再做[改变对照的重试](#retry-evidence)。
</details>
</div>

<h2 id="retry-model">重新建立解释</h2>

先收起前面的答案。以下均为自拟重试，改变条件或推理方向。

<div class="lesson-check" markdown="1">
<!-- task:retry-model -->
A description says: “Ba is easier than Sr to oxidise because it has fewer protons. Its low melting point means less energy is needed for Ba(s) → Ba2+(g) + 2e−, which is its first ionisation.” Repair the explanation and define first ionisation with an equation. With the earlier explanation closed, explain the fall in melting point from Sr to Ba using metallic structure and bonding, then state why this size model cannot be directly extrapolated to Mg. Correct a second claim: “Mg in cold water shows no bubbles for one minute, so only steam can react with Mg.” Predict the cold-water product and contrast it with the steam product using balanced equations with states.
<!-- /task:retry-model -->
<details markdown="1"><summary>提示</summary>
分别修正原因、起始物态与电子数，再区分金属键、反应条件及允许观察的时间。
</details>
<details markdown="1"><summary>解答与检查</summary>
Ba 的质子更多，但多一个占据电子层使屏蔽与距离增加，外电子受核吸引较弱。第一电离应为 Ba(g) → Ba⁺(g) + e−，从气态原子移走一个电子。原题固体到二价气态离子的变化合并了别的过程，不是第一电离；熔化改变金属结构。Sr→Ba 的正离子实增大，每原子提供的外层电子数相同，对离域电子的吸引总体减弱，金属键较弱，熔化时破坏有序结构所需能量降低。Mg 晶体结构不同，不能直接按大小可靠定位，数据也显示 Mg 低于 Ca。第二个说法把缓慢反应误作不可能：镁在冷水中可以很慢地反应，表面层又会阻碍接触。冷水中 Mg(s) + 2H2O(l) → Mg(OH)2(s) + H2(g)；加热镁与蒸汽则为 Mg(s) + H2O(g) → MgO(s) + H2(g)。检查你的说明是否同时保留“质子更多、屏蔽更强、外层吸引更弱”。
</details>
</div>

<h3 id="retry-test">重新审视先前结果</h3>

<div class="lesson-check" markdown="1">
**自拟题，构造情境。**
<!-- task:retry-test -->
R may contain Na2CO3, Na2SO4, both or neither, with any present ions at detectable concentrations. A student adds dilute H2SO4, observes bubbles and then obtains a white precipitate with BaCl2. Can either observation establish the original sulfate content? Redesign the test using a fresh R portion and an acid/reagent blank. For the redesigned test, state the expected two-stage observations if R contains both salts and write the two net ionic equations. Explain whether an already treated portion can be made into a valid original-sulfate test merely by adding HCl later.
<!-- /task:retry-test -->
<details markdown="1"><summary>提示</summary>
追踪哪些离子来自试剂瓶，哪些可能来自 R；后来改加另一种酸不能撤销原先加入的东西。
</details>
<details markdown="1"><summary>解答与检查</summary>
两种现象都不能确定原有 sulfate。受限模型中冒泡支持 carbonate；沉淀可能用的是 H2SO4 带入的 sulfate。另取新鲜 R，先用稀 HCl 足量除去 carbonate，待冒泡结束，再加 BaCl2；同处理空白应澄清，已知 sulfate 参考应沉淀。若两盐都有，HCl 阶段冒泡，随后 BaCl2 阶段出现白色沉淀。净式为 CO3²−(aq) + 2H+(aq) → CO2(g) + H2O(l)，以及 Ba²⁺(aq) + SO4²−(aq) → BaSO4(s)。后来加 HCl 不会除去 H2SO4 带来的 sulfate，原管不能再回答“最初有无 sulfate”。若将冒泡当成 sulfate 证据，关闭答案后重新指出每个变化对应的物种。
</details>
</div>

<h3 id="retry-evidence">对照改变，判断也要改变</h3>

<div class="lesson-check" markdown="1">
**自拟题，构造情境。**
<!-- task:retry-evidence -->
A properly acidified unknown stays clear after BaCl2 addition, but so does a known detectable sulfate reference; the blank is clear. A student repeats all three using the same bottles and gets the same results. What can be concluded about the unknown, and what should be checked next? Separately, a Mg(OH)2 suspension loses solid when dilute acid is added. Explain why this does not reverse the pure-water hydroxide solubility trend, and give the net ionic equation.
<!-- /task:retry-evidence -->
<details markdown="1"><summary>提示</summary>
阴性对照澄清，只提供方法是否有效的一半信息。第二个情境中，溶剂条件已经发生化学变化。
</details>
<details markdown="1"><summary>解答与检查</summary>
阳性参考失败，说明本次没有证明方法具备检出能力；甚至不能称“有效检验未检出未知物”。应换用新鲜已核实材料，检查试剂瓶身份、加入步骤和参考样品配制／浓度，再检验。可重复的失败仍是失败。另一个情境中，酸消耗 hydroxide，使更多固体继续反应：Mg(OH)2(s) + 2H+(aq) → Mg²⁺(aq) + 2H2O(l)。这不是纯水溶解性测量。修复应同时针对对照失效与化学条件变化，不能只说“再做几次”。
</details>
</div>

<h2 id="delayed-check">稍后收起方法标题再回来</h2>

学习另一个化学主题后，收起本页，用英文独立完成下题。记录首次答案、是否用过帮助、具体错误与新尝试。这提供回顾机会，不表示保持效果已经获得验证。

<div class="lesson-check" markdown="1">
**自拟题，构造情境。**
<!-- task:delayed-check -->
A laboratory receives a colourless solution S that may contain sulfate and/or carbonate, and a separate request to reduce acidity in agricultural soil. Choose one coherent sequence to investigate S, explaining how you avoid a misleading white solid, and give an observation/inference pair plus the net ionic equation for the final test. Choose between Ca(OH)2 and Ba(OH)2 for the soil request and explain its chemical action and one risk of excessive treatment. Finally justify the prediction that Ba loses an outer electron more easily than Mg while explaining why that prediction alone cannot rank the water solubilities of their sulfates. State what a white reagent blank would do to your conclusion about S.
<!-- /task:delayed-check -->
<details markdown="1"><summary>提示</summary>
未知溶液、土壤和原子模型是三个不同体系，先分别选定条件，再连接证据。
</details>
<details markdown="1"><summary>解答与检查</summary>
另取 S → 加稀 HCl 并混匀，直至 carbonate 除去、样品保持酸性 → 待可能的冒泡结束 → 加 BaCl2；同时比较同处理的澄清空白与会沉淀的 sulfate 参考。此后白色沉淀是观察，在受限模型中支持可检出的 sulfate；Ba²⁺(aq) + SO4²−(aq) → BaSO4(s)。空白白色时，在解决故障前不能归因于 S。土壤选择 Ca(OH)2，中和酸性并提高 pH；过量可使 pH 不适宜。Ba(OH)2 因可溶性钡化合物有毒，不能安全替代。Ba 外电子距离与内层屏蔽的增加超过核电荷增加影响，第一电离能较低；硫酸盐溶解性则取决于固体与水合离子的关系，不是金属原子失电子。若某一部分失败，回对应讲解、完成重试，再独立尝试这道综合题。
</details>
</div>

从[课程路线](/zh/alevel/as-chemistry/)继续；若净离子式仍困难，回看[溶液中的反应](/zh/alevel/as-chemistry/solutions-and-titration/#titration-model)。更完整的 RP3 鉴别对象仍需另外学习与教师监督下的实际操作。

<h2 id="sources">范围与阅读来源</h2>

[OxfordAQA 9620 大纲 Version 5.3](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-chemistry-specification.pdf)，p.26 §3.2.2、p.27 RP3；[OxfordAQA Practical Handbook（2018）](https://www.oxfordaqa.com/oaqaresources/science/teaching/a-level-practical-handbook-chemistry-4.2.pdf)，第2族与硫酸根方法，pp.58–60、62–65。教材：Lister / Renshaw，*International A Level Chemistry*（OUP，2016），Ch9 pp.159–163。[OpenStax Chemistry §18.9](https://openstax.org/books/chemistry/pages/18-9-occurrence-preparation-and-compounds-of-oxygen)用于氧气／氧化物比较及边界核验，不决定 OxfordAQA 范围。所有任务、对照情境、提示及检查依据均自拟；没有复制官方考题或评分标准。
