---
title: 溶液与滴定
layout: subjects
mathjax: true
grade: as
subject: as-chemistry
lang: zh-CN
translation_of: /alevel/as-chemistry/solutions-and-titration/
permalink: /zh/alevel/as-chemistry/solutions-and-titration/
toc_headings: h2, h3
study_page: true
reading_layout: true
---

<h2 id="start-here">未知样品里到底有多少溶质？</h2>

颜色变化是观察，未知浓度是推断；推断还需要样品体积、滴定液的已知浓度和配平反应。本页把它们连接起来，对应 **Required practical 1：配制定容溶液并进行简单酸碱滴定**。

你需要[质量换摩尔与反应比例](/zh/alevel/as-chemistry/amount-and-equations/)。你将选择配制步骤、处理滴定管原始读数，并解释操作错误怎样使计算结果改变方向。所有数值数据均为自拟构造。本页是准备与分析，真实实验须遵从教师批准的方法和风险评估，戴护目镜，使用移液管吸球，按要求处理稀酸碱；溅洒时按指导报告和冲洗，不能用口吸取溶液。

<h2 id="concentration">浓度的体积指整个溶液</h2>

浓度 $c$ 是溶质物质的量除以**最终溶液体积**，不是除以加入的水体积：

$$c=\frac{n}{V},\qquad n=cV$$

$c$ 用 $\mathrm{mol\,dm^{-3}}$ 时，$V$ 用 dm³。1000 cm³ = 1 dm³，因此 25.00 cm³ = 0.02500 dm³。0.1000 $\mathrm{mol\,dm^{-3}}$ 的溶液取 25.00 cm³，含 $0.1000\times0.02500=0.002500$ mol 溶质。均匀混合后，取样体积变小意味着 mol 数减少，不表示浓度降低。

无损失、无反应的稀释保持溶质 mol 数不变，最终体积增大。对**同一种被转移的溶质**，由此得到 $c_1V_1=c_2V_2$。这不是通用滴定公式，反应的两种物质须服从配平系数。$\mathrm{g\,dm^{-3}}$ 表示单位体积质量，除以 $\mathrm{g\,mol^{-1}}$ 的摩尔质量才变成 $\mathrm{mol\,dm^{-3}}$。

<h2 id="preparing-solution">把已知量配到已知最终体积</h2>

**标准溶液（standard solution）**的浓度准确已知。要配制 250.0 cm³、0.05000 $\mathrm{mol\,dm^{-3}}$ 的无水碳酸钠，取 $M(\ce{Na2CO3})=106.0\,\mathrm{g\,mol^{-1}}$。需要 $0.05000\times0.2500=0.01250$ mol，即 **1.325 g**。前提是所用物质纯净、干燥、无水；若瓶内是水合物，摩尔质量不同，不能继续用无水物数值。

用分辨率合适的天平称量，记录实际转移质量，例如用差量法。先在烧杯中用少于最终体积的去离子水溶解，再经漏斗转入 250.0 cm³ 容量瓶。冲洗烧杯、玻璃棒和漏斗，把洗液一并转入。这叫**定量转移（quantitative transfer）**：称到的溶质必须全部到达定容体积中。如果溶解使溶液变热，应等它恢复到容量瓶校准温度再定容。

加水接近刻度线后，用滴管补加，在视线与刻度同高时让凹液面最低点接触刻度。塞紧后多次倒转混匀。容量瓶确定的是最终溶液体积，不能把固体加入 250.0 cm³ 水就认定最终仍是 250.0 cm³。如果超过刻度，倒走部分混合溶液会同时带走溶质和水，不能恢复目标浓度。按指导重新配制，不能把目标浓度当作已经测得的浓度。

最后用实际质量、实际定容体积计算浓度。标签说明物质、水合状态、浓度与日期，避免后来用错标准液。

<div class="lesson-check" markdown="1">
<h3 id="preparation-check">判断这次配制得到了什么</h3>
<!-- task:preparation-check -->
A student needs 250.0 cm3 of 0.04000 mol dm−3 anhydrous Na2CO3 solution, using pure dry solid of M = 106.0 g mol−1. Calculate the required mass. Choose between a measuring cylinder and a volumetric flask for the final volume and justify it. The balance records an actual transferred mass of 1.055 g. Calculate the actual concentration if the final volume is 250.0 cm3. Explain why “add the solid to 250.0 cm3 of water” is not equivalent.
<!-- /task:preparation-check -->
<details markdown="1"><summary>提示</summary>
区分目标浓度与实际浓度，分母应描述最终混合物。
</details>
<details markdown="1"><summary>解答与检查</summary>
目标质量 $0.04000\times0.2500\times106.0=\mathbf{1.060\,g}$。容量瓶针对固定最终体积校准，细颈也便于比普通量筒更准确地对齐刻度。实际浓度 $(1.055/106.0)/0.2500=\mathbf{0.03981\,mol\,dm^{-3}}$。把固体加入已知水体积，并不能确定最终溶液体积。如果忽略称量记录而直接报告 0.04000，回看[实际配制](#preparing-solution)，再做[配制重试](#retry-preparation)。
</details>
</div>


<div class="lesson-check" markdown="1">
<h3 id="preparation-procedure">纠正配制步骤</h3>
<!-- task:preparation-procedure -->
A student dissolves a weighed carbonate sample in warm water, transfers the solution without rinsing the beaker or funnel, fills the still-warm volumetric flask to its mark and takes an aliquot without mixing. Correct the sequence and explain what each correction protects. Could calculation alone certify that the student has performed the method competently?
<!-- /task:preparation-procedure -->
<details markdown="1"><summary>提示</summary>
追踪真正进入容量瓶的溶质，以及冷却后溶液的体积与均匀程度。
</details>
<details markdown="1"><summary>解答与检查</summary>
把烧杯、玻璃棒和漏斗的洗液转入容量瓶，回收已称溶质；转移不完全会使实际浓度低于按原称量计算的值。等溶液恢复到校准温度后再最终定容，塞紧并反复倒转混匀，然后取样，使 aliquot 能代表整瓶。计算不能证明操作能力，还须监督下观察仪器使用与测量。若漏掉理由，回看[配制](#preparing-solution)，关闭解释后重新说明改正顺序。
</details>
</div>

<h2 id="titration-model">由终点建立化学比较</h2>

碳酸钠与强酸完全中和时：

$$\ce{Na2CO3(aq) + 2HCl(aq) -> 2NaCl(aq) + CO2(g) + H2O(l)}$$

每个碳酸根消耗两个氢离子，相应净离子方程式为：

$$\ce{CO3^2-(aq) + 2H+(aq) -> CO2(g) + H2O(l)}$$

两边都有一个 C、两个 H、三个 O，总电荷都为零。钠离子和氯离子是旁观离子。这种完全中和终点可用甲基橙；酚酞终点对应碳酸根中和的另一阶段，不能当成同样的终点。指示剂须适合题目的具体反应，这里不要求提前推导 A2 的 pH 滴定曲线。

**等当点（equivalence point）**是化学计量上的点，指示剂的**终点（endpoint）**是用来近似定位它的颜色变化。两者都不等于定义“pH 为 7”，也不自动完全重合。只加少量指示剂，减少它自身消耗酸碱的影响，并使用一致的判色标准。向碳酸钠加酸，应按方法在由黄色变成首次持久橙色时停止，并按教师批准的方法统一判色，不能故意继续加到强酸性。


第一阶段 $\ce{CO3^2-(aq) + H+(aq) -> HCO3-(aq)}$；第二阶段 $\ce{HCO3-(aq) + H+(aq) -> CO2(g) + H2O(l)}$。每阶段每 mol 原始碳酸根各消耗 1 mol H+，合计 2 mol。

<div class="lesson-check" markdown="1">
<h3 id="endpoint-check">判断观察对应哪个反应</h3>
<!-- task:endpoint-check -->
An acid is added to carbonate. Method A stops when phenolphthalein first loses its pink colour at the carbonate-to-hydrogencarbonate stage. Method B uses the first persistent methyl-orange orange endpoint for complete neutralisation. Which method matches CO3^2− + 2H+ → CO2 + H2O? Explain how many moles of H+ each stage consumes per mole of original carbonate, and why continuing to deep red is unsuitable.
<!-- /task:endpoint-check -->
<details markdown="1"><summary>提示</summary>
比较每个碳酸根接受一个和两个氢离子后剩下的物种。
</details>
<details markdown="1"><summary>解答与检查</summary>
B 对应完全反应。第一阶段每 mol 碳酸根消耗 1 mol H+，生成碳酸氢根；第二阶段再消耗 1 mol，生成 CO2 和水。A 停在第一阶段，不能套总反应 1:2 比例。深红意味着超过规定橙色判据而加入过量酸。若只凭颜色选，回看[模型](#titration-model)，关闭解答后从物种重新解释两阶段。
</details>
</div>

<h2 id="apparatus-decisions">根据物质的量选择操作</h2>

用容量移液管和吸球量取固定体积碳酸钠到锥形瓶。移液管先用水清洗，再用待移取溶液润洗，否则残留水会稀释这个 aliquot（定量取样）。按移液管设计自然放液，不要擅自吹出校准时本应残留的最后液体。

滴定管先用水清洗，再用所装酸液润洗。记录初读数前充满尖嘴并排除气泡，移去加液漏斗。透明溶液读凹液面最低点，视线同高；滴定管刻度向下增大。titre（滴定体积）是**末读数减初读数**，初读数不必为零。

<div class="table-responsive" role="region" aria-label="滴定装置示意图，可左右滚动" tabindex="0" style="overflow-x:auto" markdown="1">

![示意图：滴定管位于白瓷板上的锥形瓶上方。放大刻度向下递增，虚线视线与凹液面最低点同高。旁边另画带吸球的移液管，表示用于量取固定样品。](/assets/img/chemistry-as-titration.svg){: width="720" height="420" style="min-width:720px" }

</div>

窄屏可左右滚动查看图中文字，或点图放大。

图解释仪器作用，不表示真实尺寸。滴入时摇动锥形瓶，用去离子水把瓶壁溅液洗下，白瓷板帮助看清终点。洗下的水改变体积，但不改变已转移的碳酸钠 mol 数，因此不改变需要的酸量。锥形瓶不必干燥，但须清洁、没有能参与反应的污染物。

先粗滴定位，再在预期终点附近逐滴加入，按题目或方法的一致性标准取得 concordant titres（一致滴定值）。粗滴不与精滴一同平均。遇到无法解释的不一致值，应调查并补做，不能只为得到好看的均值而挑数。读数一致表示重复性好，不证明不存在系统偏差。

<h2 id="raw-data">从原始读数推到浓度</h2>

<div class="worked-example" markdown="1">
**完整示范——自拟构造读数，不是实测。**
<!-- task:worked-titration -->
25.00 cm3 aliquots of 0.05000 mol dm−3 Na2CO3 are titrated with HCl of unknown concentration, using methyl orange at complete neutralisation. Accurate titres within 0.10 cm3 are concordant. The burette readings are listed below. Find a defensible mean titre and the acid concentration. Use the reaction Na2CO3 + 2HCl → 2NaCl + CO2 + H2O.
<!-- /task:worked-titration -->

| 次数 | 初读数 / cm³ | 末读数 / cm³ |
| --- | --- | --- |
| 粗滴 Rough | 0.00 | 25.90 |
| 1 | 0.40 | 25.50 |
| 2 | 1.20 | 26.20 |
| 3 | 0.70 | 25.75 |

每次末减初，得到 25.90（粗滴）、25.10、25.00、25.05 cm³。精滴 1–3 的极差恰好为 0.10 cm³，满足题设标准。排除粗滴是依据方法，不是因为它使答案变差。平均 $(25.10+25.00+25.05)/3=\mathbf{25.05\,cm^3}$。

每份样品含 $0.05000\times0.02500=0.001250$ mol 碳酸钠。方程式要求酸为它的两倍：

$$n(\ce{HCl})=2(0.001250)=0.002500\,\mathrm{mol}$$

$$c(\ce{HCl})=\frac{0.002500}{0.02505}=0.09980\,\mathrm{mol\,dm^{-3}}$$

反算检查：25.05 cm³ 这种酸提供约 0.002500 mol，正好是碳酸钠的两倍。体积接近不表示浓度接近，因为这里化学计量比为 2:1。求的是**滴定管内酸**的浓度，分母要用它的平均 titre，不能习惯性代入移液体积。
</div>

<div class="lesson-check" markdown="1">
<h3 id="sample-check">处理新的测量记录</h3>
<!-- task:sample-check -->
A 25.00 cm3 aliquot of NaOH of unknown concentration is titrated with 0.1000 mol dm−3 HCl. The indicator endpoint is an adequate estimate of complete neutralisation. HCl + NaOH → NaCl + H2O. Constructed readings, in cm3, are: rough initial 0.00, final 20.80; run 1 initial 0.60, final 20.65; run 2 initial 1.10, final 21.10; run 3 initial 0.30, final 21.00. Accurate titres within 0.10 cm3 are concordant. Calculate each titre, select a provisional concordant mean, explain why another accurate run is sensible, and infer the NaOH concentration. Write the net ionic equation and check charge.
<!-- /task:sample-check -->

[先重试原始读数筛选](#retry-readings)。
<details markdown="1"><summary>提示</summary>
这次未知物在锥形瓶里。区分平均滴入体积和固定取样体积。
</details>
<details markdown="1"><summary>解答与检查</summary>
titre 为 20.80（粗滴）、20.05、20.00、20.70 cm³。1、2 相差 0.05 cm³，暂定均值 **20.025 cm³**，报告到两位小数为 **20.03 cm³**。第 3 次不一致，应检查终点或操作问题并补做；这只是有依据的暂定推断，不能认定已经查明故障。计算保留未舍入均值：酸量 $0.1000\times0.020025=0.0020025$ mol；1:1 比例给出 $c(\ce{NaOH})=0.0020025/0.02500=\mathbf{0.08010\,mol\,dm^{-3}}$。净式 $\ce{H+(aq) + OH-(aq) -> H2O(l)}$ 两边各有两个 H、一个 O，总电荷都为零。若没检查方程式便套 $c_1V_1=c_2V_2$，比较[碳酸钠示范](#raw-data)与本题，再做[重试](#retry-titration)。
</details>
</div>

<h2 id="uncertainty-and-bias">把不确定度与偏差追踪到算式里</h2>

假设题目给出滴定管每次读数不确定度为 ±0.05 cm³。一个 titre 要作**两次读数之差**，绝对界限相加得到 ±0.10 cm³。对 25.05 cm³，贡献为 $0.10/25.05\times100=0.40\%$。这是题设下的读数最坏界限贡献，不是实验总不确定度；移液管校准、标准液浓度与终点判断也会影响。应使用题给仪器数据和合成规则，不能把某一固定值用于所有仪器。

**系统偏差（systematic bias）**使结果持续向某方向偏移。碳酸钠标准液示范中，$c(\ce{HCl})=2c(\ce{carbonate})V_{\text{aliquot}}/V_{\text{titre}}$。过滴使分母过大，推得酸浓度偏低。若滴定管尖嘴起初有气泡，滴入时一部分液体先填充尖嘴，记录体积包括了没有进入锥形瓶的液体，也导致同样方向。重复错误方法仍可能得到一致但有偏差的结果。

**随机变化（random variation）**使读数不规则波动；细致重复和合理均值可减小它对估计的影响。精密度、重复性提高不自动等于准确度提高。同高读数针对视差，统一终点判色有助精密度，修复漏液活塞针对损失。改进建议要说明在改变哪个原因。

<div class="lesson-check" markdown="1">
<h3 id="fault-check">追踪两种不同错误</h3>
<!-- task:fault-check -->
In the carbonate-standard experiment above, consider two separate faults. A: the pipette contains deionised water and is not rinsed with the carbonate solution before delivering the aliquot. The calculation still uses the stated standard concentration. B: extra deionised water is added only to the conical flask after a correct aliquot has been transferred. For each, predict the effect on the required acid titre and on the calculated acid concentration. Would three identical repeats necessarily reveal fault A? Give a targeted correction.
<!-- /task:fault-check -->
<details markdown="1"><summary>提示</summary>
追踪实际进入锥形瓶的碳酸钠 mol 数，再看计算中假定了多少。
</details>
<details markdown="1"><summary>解答与检查</summary>
A 在移液管内稀释样品，到达锥形瓶的碳酸钠 mol 数较少，titre 偏小。仍用原本预期的碳酸钠量除以偏小 titre，就把酸浓度算得**偏高**。使用前用待移取溶液润洗移液管。若每次都同样稀释，三次结果可能很一致，并不能消除或揭示所有偏差。B 不改变碳酸钠 mol 数，因此在该理想化下，等当点所需酸量、titre 和计算浓度都**不变**。液体更稀，不表示需要中和的量更少。若把两者视为相同稀释，回看[仪器操作理由](#apparatus-decisions)，再做下面两种重试。
</details>
</div>


<div class="lesson-check" markdown="1">
<h3 id="uncertainty-check">区分读数界限与整个实验</h3>
<!-- task:uncertainty-check -->
A titre is 18.40 cm3. Each burette reading has stated bound ±0.04 cm3. Add absolute bounds to estimate the titre bound and its percentage contribution. A report calls this the total uncertainty and claims concordant repeats exclude bias. Evaluate both claims. Close the answer, then retry for 12.00 cm3 with each reading ±0.03 cm3.
<!-- /task:uncertainty-check -->
<details markdown="1"><summary>提示</summary>
titre 是两次读数之差，另列出读数以外的来源。
</details>
<details markdown="1"><summary>解答与检查</summary>
界限为 ±0.08 cm³，0.08/18.40 × 100 = 0.43%。只算一次读数会错误地把界限减半。它没有包括终点判断、移液体积和标准液浓度；一致读数也不能排除反复出现的系统错误。
</details>
<details markdown="1"><summary>重试解答与检查</summary>
重试为 ±0.06 cm³、0.50%，仍只是题定读数贡献。若出错，回看[两次读数的解释](#uncertainty-and-bias)，关闭解答后重做新数值。
</details>
</div>

<h2 id="retry-preparation">重建配制判断</h2>

关闭此前答案，再做以下自拟题。

<div class="lesson-check" markdown="1">
<!-- task:retry-preparation -->
0.5300 g of pure dry anhydrous Na2CO3 (M = 106.0 g mol−1) is quantitatively transferred into a 250.0 cm3 volumetric flask and made to the mark. Calculate its concentration. 25.00 cm3 is then transferred to another 250.0 cm3 volumetric flask and diluted to the mark without loss. Calculate the second concentration. Explain what would be wrong with preparing the first solution by filling the flask to the mark before adding the solid.
<!-- /task:retry-preparation -->
<details markdown="1"><summary>提示</summary>
先使用实际质量。第二步守恒的只是被移取那一份样品中的溶质。
</details>
<details markdown="1"><summary>解答与检查</summary>
第一份量为 $0.5300/106.0=0.005000$ mol，浓度 **0.02000 $\mathrm{mol\,dm^{-3}}$**。移取的样品含 $0.02000\times0.02500=0.0005000$ mol，定容到 0.2500 dm³ 后为 **0.002000 $\mathrm{mol\,dm^{-3}}$**。加固体前先灌到刻度，无法确定最终溶液体积；应先溶解、定量转移，再定容。第二份浓度是十分之一，因为只取了十分之一体积的原液，却稀释到原来的总体积。
</details>
</div>


<div class="lesson-check" markdown="1">
<h3 id="retry-readings">用新记录重新筛选</h3>
<!-- task:retry-readings -->
Constructed burette readings (initial, final) in cm3 are: rough (0.00, 23.90), accurate 1 (0.50, 23.85), accurate 2 (1.00, 24.40), accurate 3 (0.20, 24.10). Accurate titres within 0.10 cm3 are concordant. Calculate all titres, choose a provisional mean and justify further work. Do not infer the cause of a discordant reading from its number alone.
<!-- /task:retry-readings -->
<details markdown="1"><summary>提示</summary>
先相减，再比较精滴 titre。
</details>
<details markdown="1"><summary>解答与检查</summary>
titre 为 23.90（粗滴）、23.35、23.40、23.90 cm³。精滴 1–2 的暂定均值为 23.375 cm³，报告 23.38 cm³。按方法排除粗滴；精滴 3 不一致，应检查方法并取得更多一致精滴，不能只由数值认定原因。若全部平均或未相减，回看[原始数据](#raw-data)，关闭答案后重新解释筛选。
</details>
</div>

<h2 id="retry-titration">改变反应，也改变未知物的位置</h2>

<div class="lesson-check" markdown="1">
<!-- task:retry-titration -->
A 25.00 cm3 aliquot of H2SO4 of unknown concentration is completely neutralised by a concordant mean titre of 24.60 cm3 of 0.1000 mol dm−3 NaOH. Assume a suitable endpoint. Write the balanced equation with Na2SO4 and H2O as the products, then determine the acid concentration. If the delivered NaOH had been diluted by residual water in the burette but the calculation used 0.1000 mol dm−3, would the acid concentration be reported too high or too low? Explain using the changed titre and one correction.
<!-- /task:retry-titration -->
<details markdown="1"><summary>提示</summary>
与碳酸钠示范相比，已知液和未知样品换了位置，重新推导系数比。
</details>
<details markdown="1"><summary>解答与检查</summary>
$\ce{H2SO4(aq) + 2NaOH(aq) -> Na2SO4(aq) + 2H2O(l)}$。NaOH 为 0.002460 mol，酸为其一半，即 0.001230 mol，酸浓度 **0.04920 $\mathrm{mol\,dm^{-3}}$**。NaOH 被稀释后，需要更大 titre 才能中和同量酸；继续用标称浓度计算会高估 NaOH mol 数，因此高估酸浓度。加液前应以所装 NaOH 润洗滴定管。对比这里的**偏高**与“酸在滴定管中过滴”导致另一未知量偏低：方向取决于具体算式，不能只背故障名称。
</details>
</div>

稍后不看提示完成[定量化学综合练习](/zh/alevel/as-chemistry/quantitative-review/)。若混淆 aliquot 与 titre、重复性与准确度，再返回对应段落。[课程入口](/zh/alevel/as-chemistry/)。

<h2 id="sources">范围与阅读来源</h2>

[OxfordAQA 9620 大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-chemistry-specification.pdf)，3.1.2.2、3.1.2.5 与 RP1；[官方化学实验手册](https://www.oxfordaqa.com/oaqaresources/science/teaching/a-level-practical-handbook-chemistry-4.2.pdf)，页 21、28、44–52。手册中的酸碱方法只是示例，不强制使用本页试剂。教材：Lister / Renshaw（OUP，2016），§§2.2、2.5，印刷页 34–35、47；Practical 1，印刷页 521–522。本页任务、读数和检查点均为自拟，准备、估计不确定度及纸面作答不能证明真实操作已经完成。
