---
title: "遗传：建立并检验遗传模型"
layout: subjects
mathjax: true
grade: a2
subject: a2-biology
study_page: true
toc_headings: h2
lang: zh-CN
permalink: /zh/alevel/a2-biology/inheritance/
translation_of: /alevel/a2-biology/inheritance/
---

[BL03 学习目录](/zh/alevel/a2-biology/paper-3/) · OxfordAQA 9610 · 3.3.6

请先作答再展开提示或解答。

## 从等位基因、减数分裂与概率开始 {#start}

基因位于某个位点，等位基因是这个基因的不同形式。二倍体在常染色体位点通常有两个等位基因，分处两条同源染色体；纯合子两个相同，杂合子两个不同。**基因型（genotype）**描述遗传组成，**表型（phenotype）**由基因型与环境共同影响。显性等位基因影响杂合子的表型；“显性”不表示常见、更强或更有利。

减数分裂分离同源染色体，使配子在每个位点得到一个等位基因；受精再把配子结合。不熟悉时回查[遗传信息与减数分裂先修](/zh/alevel/a2-biology/prerequisites/#information)。目标是从标注完整的模型预测后代，再判断计数是否与模型相容。概率描述重复事件，四个孩子并不必须呈现 3:1。

<!-- task:I0 -->
**自拟题 — I0**

A plant has genotype Aa at one autosomal locus. State the allele carried by each possible gamete and explain why a gamete does not normally contain Aa at that locus.
<!-- /task:I0 -->

<details markdown="1">
<summary>提示 I0</summary>

追踪减数分裂中同源染色体的分离。

</details>

<details markdown="1">
<summary>解答 I0</summary>

配子携带 A 或 a。减数分裂使同源染色体分开，正常单倍体配子在这个位点只得到一份，不会同时得到两个等位基因。

</details>

## 单因子杂交：先定义符号 {#monohybrid}

**模型示范 — 自拟题：**设一个虚构种子颜色位点，AA 和 Aa 为黄种子，aa 为绿种子。假设完全显性、等概率分离、随机受精及后代存活相同。两个黄色杂合子交配：**Aa × Aa**，各产生概率为 ½ 的 A 与 a 配子。

| Gamete from parent 1 ↓ / parent 2 → | A (½) | a (½) |
| --- | --- | --- |
| A (½) | AA, yellow | Aa, yellow |
| a (½) | Aa, yellow | aa, green |

基因型比例为 1 AA : 2 Aa : 1 aa，表型比例为 3 黄 : 1 绿。**测交（test cross）**把基因型未知的显性表型个体与 aa 交配：AA × aa 全为 Aa，而 Aa × aa 预期为 1 Aa : 1 aa。少量后代全黄不能证明未知亲本是 AA，杂合子也可能偶然产生这种样本。

读家系图要根据指定模型推断基因型，不能只看外观。完全外显的隐性模型中，若无新突变且亲缘记录正确，无症状双亲生出患病孩子，双方都必须携带隐性等位基因；若外显率或遗传模型改变，这个推断也可能改变。

## 双因子杂交：何时可以相乘？ {#dihybrid}

**模型示范 — 自拟题：**某虚构物种中，A/a 控制黄／绿色，B/b 控制光滑／皱缩，各位点完全显性。若两位点独立分配，**AaBb × AaBb** 的双亲都产生 **AB、Ab、aB、ab** 配子，各概率为 ¼。

| Parent 1 ↓ / parent 2 → | AB | Ab | aB | ab |
| --- | --- | --- | --- | --- |
| AB | AABB | AABb | AaBB | AaBb |
| Ab | AABb | AAbb | AaBb | Aabb |
| aB | AaBB | AaBb | aaBB | aaBb |
| ab | AaBb | Aabb | aaBb | aabb |

各格概率为 1/16。A_ 表示 AA 或 Aa，B_ 表示 BB 或 Bb，因此表型比为 **9 A_B_ : 3 A_bb : 3 aaB_ : 1 aabb**，对应黄光滑 : 黄皱缩 : 绿光滑 : 绿皱缩。也可用独立概率得到 P(aa 且 B_) = ¼ × ¾ = 3/16。

这个比例依赖前述条件。连锁改变配子频率，基因相互作用改变基因型到表型的对应，存活差异改变实际计数。不能仅因题目出现两个基因就自动选 9:3:3:1。

<!-- task:I1 -->
**自拟题 — I1**

For the model above, cross AaBb with aabb, assuming independent assortment. List the gametes from each parent and the four offspring genotypes with their probabilities. Explain why the expected phenotype ratio is not 9:3:3:1.
<!-- /task:I1 -->

<details markdown="1">
<summary>提示 I1</summary>

测交亲本只提供一种配子。

</details>

<details markdown="1">
<summary>解答 I1</summary>

AaBb 产生 AB、Ab、aB、ab，各 ¼；aabb 只产生 ab。后代 AaBb、Aabb、aaBb、aabb 各 ¼，四种表型为 1:1:1:1。9:3:3:1 对应的是两个双杂合子在指定显性及独立条件下的交配。

</details>

## 共显性与多等位基因 {#codominance}

**共显性（codominance）**指两个等位基因在杂合子中均有可分辨效应。杂色毛中同时存在红毛和白毛，与形成一种中间颜色素不是同一机制。杂合子呈中间表型的不完全显性，不能仅因后代为 1:2:1 就自动叫共显性。

**模型示范 — 自拟题：**CᴿCᴿ 为红、CᵂCᵂ 为白、CᴿCᵂ 为红白杂色。CᴿCᵂ × CᴿCᵂ 的双亲各产生 Cᴿ 或 Cᵂ 配子，后代为 ¼ 红 CᴿCᴿ、½ 杂色 CᴿCᵂ、¼ 白 CᵂCᵂ。由于三种基因型都可辨认，基因型与表型均呈 1:2:1。

**多等位基因（multiple alleles）**是种群中存在超过两种等位形式；普通二倍体个体在该位点仍只有两个。简化 ABO 模型中，Iᴬ 与 Iᴮ 共显性，二者对 i 均显性。

| Blood-group phenotype | Possible genotypes |
| --- | --- |
| A | IᴬIᴬ or Iᴬi |
| B | IᴮIᴮ or Iᴮi |
| AB | IᴬIᴮ |
| O | ii |

<!-- task:I2 -->
**自拟题 — I2**

Using the simplified ABO model, cross Iᴬi with Iᴮi. List the parental gametes and offspring genotypes and phenotypes. Explain why the existence of three alleles in the population does not give either parent three alleles at this locus.
<!-- /task:I2 -->

<details markdown="1">
<summary>提示 I2</summary>

各亲本列两种配子，每次各取一个结合。

</details>

<details markdown="1">
<summary>解答 I2</summary>

配子分别为 Iᴬ 或 i、Iᴮ 或 i，各 ½。后代 IᴬIᴮ（AB）、Iᴬi（A）、Iᴮi（B）、ii（O）各 ¼。种群多样性描述多个个体间可存在的等位形式，二倍体的常染色体位点仍有两份。

</details>

## X 连锁：保留染色体标记 {#sex-linkage}

对一个 X 连锁隐性性状，定义 Xᴴ 为不患病等位基因、Xʰ 为患病等位基因，并假设 Y 在该位点无对应等位基因。XY 个体只有一份 Xʰ 就可表现该性状；XX 个体在此模型下须为 XʰXʰ。父亲把 X 传给女儿、Y 传给儿子，所以不能把这个 X 连锁等位基因直接传给儿子。

**模型示范 — 自拟题：**XᴴXʰ × XᴴY。母方配子 Xᴴ、Xʰ，父方配子 Xᴴ、Y，各 ½。

| Maternal ↓ / paternal → | Xᴴ | Y |
| --- | --- | --- |
| Xᴴ | XᴴXᴴ, unaffected daughter | XᴴY, unaffected son |
| Xʰ | XᴴXʰ, carrier daughter | XʰY, affected son |

因此预期 ½ 的儿子患病；若两种性别等概率，则所有后代中 ¼ 为患病儿子。一定要区分“儿子中患病的比例”与“后代是患病儿子的概率”。这些是限定遗传模型中的练习概率。

## 常染色体连锁：排列相位决定常见配子 {#linkage}

位于同一染色体上的基因发生连锁。减数分裂时，同源染色体的非姐妹染色单体交换，可形成重组等位组合。必须写明**排列相位**，例如 AB/ab：一条同源染色体携带 AB，另一条携带 ab。只写 AaBb 不能说明相位；Ab/aB 与其不同。

**模型示范 — 自拟题：**相位 AB/ab、重组率 r = 0.20，且假设分离与存活无差异，则亲本型配子 AB、ab 各为 (1 − r)/2 = 0.40，重组型 Ab、aB 各为 r/2 = 0.10。与 ab/ab 测交，可由 AaBb、aabb、Aabb、aaBb 后代反映这些频率，不能强行给四类同为 ¼。

重组率接近 0.50 时，不能区分未连锁基因与同染色体上相距很远的位点。相位也重要：Ab/aB 的常见类别正好相反。重组与表型表达是模型的两个不同部分。

![Original linkage teaching diagram: a homologous chromosome pair carries A with B on one chromosome and a with b on the other. Labels distinguish parental AB and ab from recombinant Ab and aB; this is a teaching model, not an independent task.](/assets/images/a2-biology/bl03-linkage.svg)

## 上位作用：把两位点放进同一途径 {#epistasis}

上位作用（epistasis）是**不同基因**之间的相互作用，一个位点的基因型掩盖或改变另一位点的效应。显隐性则是在同一位点比较不同等位基因。比例由机制推导，“上位作用”不是某一种固定比例的名字。

**模型示范 — 自拟题：**某虚构色素途径中，C_ 允许生成色素，cc 阻断而呈白色；只在已有色素时，B_ 呈黑，bb 呈棕。对 **CcBb × CcBb**，假设独立分配，双亲各产生概率为 ¼ 的 CB、Cb、cB、cb。先列基因型类别，再合并相同表型。

| Genotype class | Probability | Phenotype under this pathway |
| --- | --- | --- |
| C_B_ | 9/16 | Black |
| C_bb | 3/16 | Brown |
| ccB_ | 3/16 | White |
| ccbb | 1/16 | White |

表型比例为 9 黑 : 3 棕 : 4 白。白色的 4/16 合并了两个基因型类别，因为 cc 使色素无法形成，与 B/b 无关。表型比例改变本身不能证明连锁；此处配子仍独立分配。

<!-- task:I3 -->
**自拟题 — I3**

Use the pigment pathway above to cross Ccbb with ccBb. List gametes from each parent, offspring genotypes and expected phenotypes with probabilities. Explain which gene interaction changes the phenotype count.
<!-- /task:I3 -->

<details markdown="1">
<summary>提示 I3</summary>

先判断能否形成色素，再判断色素颜色。

</details>

<details markdown="1">
<summary>解答 I3</summary>

Ccbb 产生 Cb 或 cb，ccBb 产生 cB 或 cb，各 ½。后代 CcBb 黑 ¼、Ccbb 棕 ¼、ccBb 白 ¼、ccbb 白 ¼，表型比为 1 黑 : 1 棕 : 2 白。cc 阻断色素合成，掩盖 B/b 效应。

</details>

## 卡方：用计数检验指定模型 {#chi-squared}

先写原假设：观测后代数与指定比例相容，在该模型下的偏差来自随机抽样。期望值用总后代数乘预测概率，得到**期望计数**，不是百分数。类别须互斥、观察须独立，各期望计数还要足够大以适用卡方近似，学校常用规则是每类至少 5。

若有 k 类、比例预先固定，而且没有用这些计数估计参数，则 df = k − 1。按所选显著性水平比较统计量与临界值。统计量小不能证明模型；统计量大提示不相容，却不能单独确认是连锁、存活差异、计数错误还是另一项假设失效。

$$\chi^2=\sum\frac{(O-E)^2}{E}.$$

**计算示范 — 自拟题；构造数据：**100 个后代在 3:1 模型下期望为 75、25，观测为 78、22。两项贡献为 9/75、9/25，χ² = 0.48。df = 1，5% 临界值为 3.84，因此不拒绝该模型。这不表示模型有 95% 概率正确；显著性水平涉及原模型为真时检验的行为。

取样阶段也重要。某基因型若降低存活，萌发时计数可能符合受精比例，几周后却不符合。例如缺叶绿素幼苗最初可呼吸储存物质，后来需要光合供给时便可能死亡。所以必须记录何时、如何取样。

## 独立选模与重试 {#practice}

<!-- task:I4 -->
**自拟题 — I4**

An AB/ab individual is test-crossed with ab/ab. Constructed offspring counts are 82 AaBb, 78 aabb, 22 Aabb and 18 aaBb. Identify parental and recombinant classes, calculate recombination frequency, and explain why independent assortment is not a suitable starting assumption for predicting equal counts.
<!-- /task:I4 -->

<details markdown="1">
<summary>提示 I4</summary>

测交后代反映杂合亲本的配子；按相位辨认重组组合。

</details>

<details markdown="1">
<summary>解答 I4</summary>

亲本型为 AaBb、aabb，来自 AB、ab；重组型为 Aabb、aaBb，来自 Ab、aB。重组率 = (22 + 18)/200 × 100 = 20%。题设连锁相位及亲本型偏多支持配子频率不等；把估计视作精确值前，还须考虑抽样和存活。

</details>

<!-- task:I5 -->
**自拟题 — I5**

For a fixed 9:3:3:1 model, the constructed counts of four exclusive offspring phenotypes are 88, 32, 28 and 12, total 160. Calculate expected counts and χ². Use df = 3 and the 5% critical value 7.815 to make a conclusion. State one reason that a non-significant result cannot establish every biological assumption of the model.
<!-- /task:I5 -->

<details markdown="1">
<summary>提示 I5</summary>

期望数之和须为 160。各偏差平方后除以各自期望数，再相加。

</details>

<details markdown="1">
<summary>解答 I5</summary>

期望为 90、30、30、10。χ² = 4/90 + 4/30 + 4/30 + 4/10 = 0.711（3 s.f.），低于 7.815，故在 5% 水平不拒绝该固定比例。其他模型也可能产生相容计数，小样本也可能无法检出小差异。因此不能证明独立分配、等存活或完全没有基因相互作用。

</details>

<!-- task:I6 -->
**自拟题 — I6**

Retry: a woman with genotype XᴴXʰ and a man with genotype XʰY have children under the X-linked model above. Predict the affected fraction among daughters and among sons. Show parental gametes and all offspring genotypes; do not reuse the earlier cross without changing the father.
<!-- /task:I6 -->

<details markdown="1">
<summary>提示 I6</summary>

此处每个女儿都从父亲得到 Xʰ，每个儿子得到 Y。

</details>

<details markdown="1">
<summary>解答 I6</summary>

母方配子 Xᴴ、Xʰ，父方 Xʰ、Y，各 ½。后代 XᴴXʰ、XʰXʰ、XᴴY、XʰY 各 ¼。女儿和儿子中各有一半患病；XᴴXʰ 女儿在此模型中是不患病携带者。

</details>

## 组合两种遗传规则 {#combined-model}

共显性并不阻止另一位点独立分配。先在每个位点写出配子中的等位基因，再按独立性组合配子概率；受精后分别判断每个位点的表型，最后合并。不能因为其中一个位点共显性，就直接套上单因子 1:2:1 作为整个后代的比例。

<!-- task:I7 -->
**自拟题 — I7**

Use CᴿCᴿ = red, CᴿCᵂ = roan, CᵂCᵂ = white. At an independent autosomal locus, A_ has horns and aa has no horns. Cross CᴿCᵂAa with CᵂCᵂaa. List all gametes, offspring genotypes and phenotypes with probabilities. Calculate the probability of an offspring being both roan and without horns.
<!-- /task:I7 -->

<details markdown="1">
<summary>提示 I7</summary>

第一亲本在两个位点各有两种等位基因，第二亲本在两位点都纯合。每个配子须同时写一个色素等位基因和一个 A/a 等位基因。

</details>

<details markdown="1">
<summary>解答 I7</summary>

第一亲本配子 CᴿA、Cᴿa、CᵂA、Cᵂa 各 ¼，第二亲本只有 Cᵂa。后代 CᴿCᵂAa（杂色有角）、CᴿCᵂaa（杂色无角）、CᵂCᵂAa（白色有角）、CᵂCᵂaa（白色无角）各 ¼。杂色且无角概率为 ¼；也可算 ½ × ½。此处四种不同表型为 1:1:1:1。

</details>

## 来源与继续学习 {#sources}

范围依据 [OxfordAQA 9610 specification v5.1](https://www.oxfordaqa.com/wp-content/uploads/2022/08/oxfordaqa-a-level-biology-specification.pdf), 3.3.6. 本页按所读 v5.1 编号组织；未来考季适用版本应经学校核对。 [官方资格与资源入口](https://www.oxfordaqa.com/qualification/international-as-and-a-level-biology-9610/).

除明确标记的改编任务外，例题、练习及反馈均由作者编写，不是官方题目或官方评分标准。构造数据不称实测；网页练习不代表已完成必做实验。

[等位基因频率与进化](/zh/alevel/a2-biology/evolution/) · [光合作用](/zh/alevel/a2-biology/photosynthesis/) · [基因表达](/zh/alevel/a2-biology/gene-expression/) · [BL05 数据技能](/zh/alevel/a2-biology/data-skills/) · [BL05 实验设计](/zh/alevel/a2-biology/experimental-design/) · [BL05 综合写作](/zh/alevel/a2-biology/synoptic-writing/)
