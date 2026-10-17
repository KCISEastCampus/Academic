---
title: "基因表达：调控与细胞身份"
layout: subjects
mathjax: true
grade: a2
subject: a2-biology
study_page: true
toc_headings: 'h2, h3'
lang: zh-CN
permalink: /zh/alevel/a2-biology/gene-expression/
translation_of: /alevel/a2-biology/gene-expression/
---

[BL04 · Control](/zh/alevel/a2-biology/paper-4/) · 3.4.9

## 相同基因组，不同细胞行为 {#start}

神经元和肌纤维可以有基本相同的基因组，却含有不同蛋白质。关键在于哪些基因被表达、表达多少，以及信息在哪一层受到调控。先修见[遗传信息](/zh/alevel/a2-biology/prerequisites/#information)与[细胞分裂](/zh/alevel/a2-biology/prerequisites/#division)。

<!-- task:BL04-E0 -->
**E0 · Self-written / 自拟题**

Name the process from DNA to RNA and the process from mRNA to a polypeptide. Does a cell need to change a gene's base sequence every time it changes the amount of its protein product?
<!-- /task:BL04-E0 -->

<details markdown="1">
<summary>E0 · 检查</summary>

转录以 DNA 为模板产生 RNA，翻译用 mRNA 组装多肽。改变表达量不必改变 DNA 序列。DNA 本身不被翻译；被表达的蛋白质编码基因的信息先转录、再翻译。

</details>

## DNA 可接近性与表观调控 {#epigenetics}

DNA 与组蛋白组成染色质。转录因子和 RNA 聚合酶能否接近 DNA，会影响基因能否转录。**表观遗传调控（epigenetic regulation）**在不改变 DNA 碱基序列的情况下改变基因活动，其中某些状态可在细胞分裂后保持；不代表每种获得性状态都会永久遗传给后代。

**DNA 甲基化（methylation）**在特定位点添加甲基。启动子区域甲基化增加常会干扰转录因子结合，并招募与染色质不易接近有关的蛋白，从而降低转录。作用取决于位置和基因背景，不能说“所有甲基化 DNA 都关闭”。

**组蛋白乙酰化（histone acetylation）**通常降低组蛋白正电荷，减弱与负电 DNA 的相互作用，使染色质更易接近；乙酰化减少则倾向于更紧密包装及较低转录。这些是调控趋势，并不表示一个标记就能决定每个基因的全部表达。

![信息流由染色质中的DNA经转录到mRNA，再经翻译到蛋白；分别标出甲基化和组蛋白乙酰化对转录的调控，以及小RNA对mRNA的作用，不画成改变DNA序列。](/assets/images/a2-biology/bl04-expression.svg)

*自绘示意，实线箭头表示信息流，标明的调控连接作用于具体步骤；非分子比例图。*

### 先辨认受影响的基因，再连接癌症 {#cancer}

抑癌蛋白可限制细胞周期、支持 DNA 修复，或在损伤严重时帮助启动凋亡。沉默抑癌基因会移除其中某种控制。相反，促进分裂的原癌基因活动增加，可加强致癌信号。因此异常甲基化的后果取决于哪些基因增强、哪些减弱；癌症是多步骤过程，不是加上任何甲基就必然发生。

**机制示范 · Self-written / 自拟题：**功能正常的抑癌基因启动子甲基化增加 → 可接近性/转录降低 → 相应蛋白减少 → 细胞周期制约或损伤响应减弱 → 异常细胞可能更容易分裂。每一环都要有明确分子或过程，只写“甲基化致癌”漏掉了基因和机制。

## RNA 干扰发生在转录之后 {#rnai}

小 RNA 能调节已有 mRNA 的命运及利用。**微 RNA（miRNA）**由前体 RNA 形成，**小干扰 RNA（siRNA）**常来自双链 RNA 的加工。引导链与蛋白复合物结合，经互补碱基配对识别靶 mRNA。

标准沉默机制中，高度互补可引导 mRNA 切割并随后降解；其他相互作用可抑制翻译并促进 mRNA 不稳定。蛋白量因此减少，但基因并没有被删除或突变。这里核心是识别方式、被影响的 RNA 与蛋白结果，不是死背所有加工酶名。

大纲较宽泛的表述包括基因活动增加或减少。本页直接机制是沉默；放到网络中也可间接增加另一基因的活动，例如沉默一个编码抑制因子的 mRNA。如果题目提供其他情境依赖的作用，应按证据解释，不宣称所有小 RNA 的结果都完全相同。

<!-- task:BL04-E1 -->
**E1 · Self-written / 自拟题**

Complete a typical RNA-interference chain: a small RNA associates with a protein complex → its sequence recognises complementary ____ → cleavage/degradation or reduced ____ → less target protein. State why this does not itself remove the target gene from the genome.
<!-- /task:BL04-E1 -->

<details markdown="1">
<summary>E1 · 提示</summary>

小 RNA 与哪种分子配对？哪个过程读取 mRNA 来合成蛋白？

</details>

<details markdown="1">
<summary>E1 · 解释</summary>

靶 mRNA → translation。小 RNA 引导蛋白复合物到达 RNA，引起切割/降解或抑制翻译。DNA 序列仍在基因组里，所以干扰停止、产生新 mRNA 后，表达可能恢复。

</details>

## 用不同层级的读数判断机制 {#evidence}

下表是构造教学数据，相对单位以未处理对照为 100；并非临床实测或从官方试卷改编的数据。

<!-- task:BL04-gene-expression-data -->

| Treatment | Target mRNA / relative units | Target protein / relative units |
| --- | --- | --- |
| Untreated control | 100 | 100 |
| A | 30 | 35 |
| B | 95 | 25 |

<!-- /task:BL04-gene-expression-data -->

<!-- task:BL04-E2 -->
**E2 · Self-written / 自拟题**

The table contains constructed mean values measured at one time, with no uncertainty estimates supplied. Compare A and B with the control. Explain why reduced transcription is a plausible explanation for A but is not established by the data. Suggest a different regulatory level for B and one measurement that would distinguish competing explanations.
<!-- /task:BL04-E2 -->

<details markdown="1">
<summary>E2 · 提示</summary>

一个时点的量同时取决于产生和清除。除转录外还要考虑 mRNA 稳定性，除翻译外还要考虑蛋白降解。

</details>

<details markdown="1">
<summary>E2 · 解释</summary>

A 的 mRNA 比对照低 70%、蛋白低 65%；B 的 mRNA 只低 5%，蛋白却低 75%。A 符合转录减少，但 mRNA 加速降解也能造成同样的低量。B 符合翻译受抑制或蛋白降解加快。

可测新合成 RNA 检验转录，测 mRNA 衰减检验稳定性，或测蛋白合成/降解来区分 B 的解释。需要生物重复、相同取样时间及不确定度；表中无误差信息，不能判定 95 与 100 是否可靠不同，也不能声称显著。蛋白量变化还可能滞后于 mRNA。

</details>

<!-- task:BL04-E3 -->
**E3 · Self-written / 自拟题**

A treatment reduces methylation near the promoter of a tumour-suppressor gene in cultured cells. Explain a possible route to slower cell division. State two additional results needed before concluding that this mechanism explains the effect, and two reasons why this is not yet evidence of an effective treatment for human patients.
<!-- /task:BL04-E3 -->

<details markdown="1">
<summary>E3 · 提示</summary>

分清靶点作用、基因表达、细胞行为和患者结果，对照要能检查处理的其他影响。

</details>

<details markdown="1">
<summary>E3 · 解释</summary>

启动子甲基化减少可能提高转录及抑癌蛋白，增强细胞周期制约。应测靶 mRNA/蛋白是否增加，并用合适的特异功能丧失比较等办法，证明分裂变化依赖这个功能基因；还要有未处理和载体/溶剂对照，检查一般毒性，因为毒性也可减慢分裂。

培养细胞不能证明药物能送达人组织、剂量安全、长期安全或适用于多种肿瘤。分裂较慢也不等于肿瘤被清除。这些是证据要求，不是给患者的治疗建议。

</details>

## 分化与干细胞潜能 {#stem-cells}

分化来自不同基因组合的表达，产生建立特定结构和功能的蛋白。特化细胞多数 DNA 在当时没有用于制造蛋白，而且许多基因组 DNA 本来就不编码蛋白，包括调控序列。细胞分化时通常不会把所有“没用到的基因”丢掉。

**干细胞（stem cell）**能自我更新并产生分化后代；潜能（potency）描述能形成哪些后代，而不是分裂速度。

| 潜能 | 可产生的后代 | 情境 |
| --- | --- | --- |
| Totipotent，全能 | 胚胎和胚外组织，可支持完整个体形成 | 受精卵及哺乳动物极早胚胎的有限阶段 |
| Pluripotent，多能 | 三个胚层的身体细胞，但单独不足以形成带完整支持性胚外组织的个体 | 胚胎干细胞；由分化细胞重编程的诱导多能干细胞 |
| Multipotent，多向潜能 | 一个组织谱系内多种相关细胞 | 产生血细胞谱系的造血干细胞 |
| Unipotent，单向潜能 | 一种分化谱系，并可自我更新 | 某些组织特异的更新细胞群 |

成年组织通常主要依靠受组织限制的 multipotent 或 unipotent 细胞，不能由此推断每个成熟组织天然含大量 pluripotent 细胞；把成体细胞重编程为诱导多能细胞是另一个过程。

应用需要受控分化、存活、整合及正确功能。未分化细胞可能不当增殖，移植细胞可能被排斥，重编程和培养还可能引入或选择不良变化。评价要把恢复组织的潜力与这些风险、来源可得性、同意、胚胎伦理、成本和公平获取联系起来；不能只列伦理词语。

<!-- task:BL04-E4 -->
**E4 · Self-written / 自拟题**

A team wants to replace damaged nerve cells. Compare an embryonic pluripotent-cell source with a patient's reprogrammed induced pluripotent cells. Give a potential benefit, a biological risk and an ethical or practical issue for each. State what evidence would demonstrate successful function rather than simply cell survival.
<!-- /task:BL04-E4 -->

<details markdown="1">
<summary>E4 · 提示</summary>

两种来源都是 pluripotent。分清来源特有问题与各种细胞移植共同面对的问题。

</details>

<details markdown="1">
<summary>E4 · 一种平衡评价</summary>

胚胎细胞有广泛分化潜能，但要控制不当生长，供者来源还可能免疫不匹配；胚胎使用涉及同意和胚胎道德地位。患者来源诱导多能细胞也有广泛潜能，可减少免疫不匹配并避免破坏胚胎，但重编程、患者原有突变、培养变化及残留未分化细胞风险仍需检查，准备也可能昂贵而缓慢。

两者都要证明目标神经细胞身份、恰当电响应、与宿主回路连接，以及相对对照的相关功能改善，并作长期安全随访。仅细胞活着不能证明正确整合或功能恢复。

</details>

## 诊断与重试 {#retry}

“DNA 被翻译”混淆信息层级；“mRNA 少证明转录停止”漏掉降解；“pluripotent 能形成整个个体”混淆多能与全能。

<!-- task:BL04-E5 -->
**E5 · Self-written / 自拟题 — retry**

A scientist proposes reducing methylation at every promoter to prevent cancer. Evaluate the proposal by comparing a tumour-suppressor gene with a gene that promotes cell division. Explain why “less methylation is always safer” is not a valid rule.
<!-- /task:BL04-E5 -->

<details markdown="1">
<summary>E5 · 提示</summary>

恢复抑制分裂的“刹车”和增强促进分裂的“加速器”，后果不同。

</details>

<details markdown="1">
<summary>E5 · 解释</summary>

去甲基化可能恢复被沉默的抑癌基因，也可能增强促分裂基因或扰乱正常表达。结果取决于位点、基因功能、已有突变和细胞背景，因此全局去甲基化方案需要基因特异证据及安全评价，不能把较少甲基化普遍视为保护。

</details>

## 来源与连接 {#sources}

[OxfordAQA 9610 大纲 v5.1](https://www.oxfordaqa.com/wp-content/uploads/2022/08/oxfordaqa-a-level-biology-specification.pdf)，§3.4.9；[官方资料入口](https://www.oxfordaqa.com/qualification/international-as-and-a-level-biology-9610/)。已读 BL04 May/June 2025 Q7 的 MS v1.0 Final pp.16–18，用于校准特定基因的癌症推理与模型证据局限。本页题目、构造数据、反馈均自拟，不是官方题或分值。

把表达变化与[遗传](/zh/alevel/a2-biology/inheritance/)比较，再学习[基因技术](/zh/alevel/a2-biology/gene-technology/)和[实验设计](/zh/alevel/a2-biology/experimental-design/)。
