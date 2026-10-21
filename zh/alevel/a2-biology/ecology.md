---
title: "生态学：种群、证据与演替"
layout: subjects
mathjax: true
grade: a2
subject: a2-biology
study_page: true
toc_headings: h2
lang: zh-CN
permalink: /zh/alevel/a2-biology/ecology/
translation_of: /alevel/a2-biology/ecology/
---

[BL03 学习目录](/zh/alevel/a2-biology/paper-3/) · OxfordAQA 9610 · 3.3.1 · RP9

请先作答再展开提示或解答。

## 从数量走向解释 {#start}

“阴处植物较少”是在描述一个模式。要解释它，还需提出机制，并用证据把光照作用与土壤水分、取食等其他差异分开。本页通过种群变化、抽样、竞争实验和演替建立这种区分。物种、平均数和植物资源需求可到[先修页](/zh/alevel/a2-biology/prerequisites/)回补。

<!-- task:E0 -->
**自拟题 — E0**

In a pond, there are fish of one species, several plant species, water and sediment. Identify one population, the community and the ecosystem. Explain why the fish population alone is not the ecosystem.
<!-- /task:E0 -->

<details markdown="1">
<summary>提示 E0</summary>

依次扩大边界：一个物种、所有生物，再加非生物环境。

</details>

<details markdown="1">
<summary>核对 E0</summary>

该物种全部鱼构成一个种群。所有生物种群共同组成群落。群落连同非生物环境构成生态系统，水和沉积物也属于这个系统。

</details>

## 生态位与种群数量变化 {#populations}

栖息地（habitat）是生物生活的地方；**生态位（niche）**包含它利用的资源、与其他生物的关系及耐受条件。两个物种可住在同一栖息地，却在不同时段或高度取食，减少竞争。适应特征用于解释物种在哪里能够持续生存，并不是说生物有意选择某个“角色”。

出生、死亡、迁入和迁出共同改变种群数量。温度、水分、pH、盐度、光照等是非生物因素，其作用要通过生理机制解释：弱光可降低光合与生长，干旱可降低存活。非生物因素并非越多越好，例如超过耐受范围的温度会降低生物表现。

$$\Delta N=(B+I)-(D+E).$$

这里 N 为种群数量，B、I、D、E 分别为同一时段的出生、迁入、死亡、迁出数量。平坦曲线可能掩盖大量个体更替，只要增加和减少相等。早期快速增长可随着人均资源减少而放缓；环境容纳量取决于当时环境，并非永远固定。

**种内竞争（intraspecific competition）**发生在同种个体间，它们通常需求相近；**种间竞争（interspecific competition）**发生在不同物种间。只有共享资源受到限制时才构成竞争，不需要身体接触或争斗。密度升高后，人均资源减少，可降低生长或繁殖并增加死亡。

捕食可减少猎物数量；猎物增加又可能在稍后支持更多捕食者，随后猎物减少可再引起捕食者减少。这条机制能产生时间滞后，但食物、疾病和天气也可同时影响两个种群。仅凭两条波动曲线，不能确认全部因果。

## 抽样：方法要匹配生物与问题 {#sampling}

研究不易移动的生物时，先划定调查区域，再用随机坐标放置样方。预先约定边界个体怎样计数。根据问题选择密度、出现频率或百分比盖度；难以分辨独立个体时，盖度尤其适合。不同物种可能层叠，因此各物种盖度之和不一定低于 100%。

使用足够多的独立样方位置，既报告均值，也报告变异。如果不同生境差别很大，可在各层内随机取样，再按各层面积加权。随手抛样方或挑容易到达的地点，不等同于随机坐标。

研究环境梯度时，可沿样线按规定间隔放样方，同时记录非生物变量，并在独立地点重复样线。这估计的是随位置改变的模式，不自动成为整个生境的无偏估计。观察到相关之后仍需考虑其他解释。

**估计示范 — 自拟题；构造数据：**五个 0.25 m² 样方计数为 3、5、4、2、6，平均每样方 4 个，即每平方米 16 个。若取样能代表整个 200 m² 区域，可估计共有 3200 个个体。这是估计，不是逐个普查；只有五个样方可能不能充分反映斑块分布。

$$\text{density}=\frac{\text{mean count per quadrat}}{\text{quadrat area}},\qquad \widehat N=\text{density}\times\text{total area}.$$

对能移动的动物，有时可使用标志重捕：先标记 M 个并释放，待其混合后再捕 C 个，其中 R 个带标记，估计总数为 MC/R。条件包括种群在时段内较封闭、标记不脱落且不伤害动物、混合充分、捕获机会相近。避陷阱行为或标记脱落均会使结果偏离；若没有重捕到标记个体，这个简单估计无定义。操作须减少干扰并遵守许可要求，公式本身并不构成操作动物的充分依据。

## RP9：把竞争变成可检验实验 {#competition}

研究幼苗密度时，使用相同物种、种子批次、盆面积、土量和营养浓度。明确因变量，例如固定时段后每株存活幼苗的平均干质量，同时记录萌发和存活。保持光照、供水和温度可比。密度是在每盆设置的，因此**独立接受处理的盆才是实验单位**；同盆幼苗共享资源。

每种密度设置多盆，随机分配位置；若有光梯度，可轮换位置。先计算各盆均值，再比较独立盆的均值。同一盆的二十株，不是二十次独立密度处理。密度升高可能同时使每盆总生物量增加、每株生物量下降；两者回答不同问题。

区分种内和种间影响时，可比较目标物种单种与混种，明确总密度及具体比较关系。另一物种的影响还可能通过遮光或化学抑制发生；应以证据辨认机制，不能把所有生长下降都简单贴上“竞争”。

使用获准的土壤／堆肥，洗手、避免吸入粉尘，在监督下使用烘干设备，不把引入物种释放到室外。

<!-- task:E1 -->
**自拟题 — E1**

Four pots at each density are independently assigned and grown for 21 days. The mean total dry masses per pot are 1.2 g with 4 surviving plants and 1.6 g with 16 surviving plants. Calculate mean dry mass per plant at each density. Complete the causal chain from increased density to lower mass per plant, and state why the result does not show that total production decreased.
<!-- /task:E1 -->

<details markdown="1">
<summary>提示 E1</summary>

分别用每盆质量除以该盆存活株数。指出一种限制资源及它影响的过程。

</details>

<details markdown="1">
<summary>解答 E1</summary>

每株质量分别为 0.30 g 与 0.10 g。密度增加可减少每株可得光照或矿质离子，从而降低光合或生长物质合成，使生长下降。每盆总干质量却从 1.2 增到 1.6 g。仅有处理均值还不能判断显著性，还须查看独立盆之间的变异。

</details>

## 演替：生物改变下一阶段的生存条件 {#succession}

初生演替（primary succession）从几乎没有发育土壤的表面开始，例如新裸露岩石。先锋种能耐受初始环境，其活动和死亡可促进风化、有机物积累，改善保水和养分条件，让需求不同的后续物种定居。

后来的物种又继续改变环境。较高植物可减少近地面光照，竞争排除早期定居者；根和凋落物也改变土壤。因此解释应写成**物种特征 → 环境改变 → 定居或竞争成功改变**，不能只背植物名称的先后顺序。

在当时气候和条件下，可能形成相对稳定的顶极群落，但干扰、放牧、火和环境变化都能使演替改向或中断。生物多样性常随演替改变，却不一定每一步都增加。次生演替发生在干扰后仍保留土壤的地点，过程可有所不同。

**机制示范 — 自拟题：**土壤形成后草本定居，随后灌木造成遮阴。灌木不是“想要替代”草，而是高度改变了光条件，降低不耐阴草本的竞争成功，同时可能支持其他物种。

## 保护：先明确目标，再看证据 {#conservation}

保护栖息地有时需要**管理演替**，不只是放任不管。放牧或割草可抑制木本增长，维持某些物种需要的开放生境；另一些地方则适合恢复林地。必须说清保护对象或生态系统服务、干预机制及代价。

保护可保留遗传多样性、食物网、土壤、水调节及未来资源，也可具有伦理价值。应同时比较成本、生计和机会成本。用一致的抽样方式、可行的未处理／参照区域和多年监测判断结果；一次前后计数不能排除天气等变化。

## 独立证据任务 {#practice}

<!-- task:E2 -->
**自拟题 — E2**

A student puts one tray of 40 seedlings in shade and one tray of 10 seedlings in full light. The shaded seedlings have lower mean mass. Explain two reasons why the result cannot isolate an effect of density, and redesign the experiment to test density.
<!-- /task:E2 -->

<details markdown="1">
<summary>提示 E2</summary>

既要找混杂变量，也要找哪一级缺少独立重复。

</details>

<details markdown="1">
<summary>解答 E2</summary>

光照和密度同时不同，两者都可能解释质量差。每种密度仅有一盘独立处理。应在可比光照下为每种密度设多盘，随机位置，控制盘面积、土量、水与种子批次，在固定时段比较各盘均值，并记录存活。

</details>

<!-- task:E3 -->
**自拟题 — E3**

A reserve stops mowing. After five years, shrub cover rises and a rare grassland orchid declines. Explain a plausible mechanism, one alternative explanation and evidence needed to decide whether mowing should resume. Include one trade-off.
<!-- /task:E3 -->

<details markdown="1">
<summary>提示 E3</summary>

把兰花所需资源与植被变化连接，再区分合理解释与证明。

</details>

<details markdown="1">
<summary>解答 E3</summary>

灌木遮光可降低兰花光合、生长或繁殖；干旱、取食或传粉改变也可能参与。应比较光照、兰花存活与繁殖，并长期监测重复的割草／参照样地。恢复割草可能保护开放生境物种，却减少灌木生境或干扰巢中动物；决定取决于保护目标及操作时间。

</details>

<!-- task:E4 -->
**自拟题 — E4**

Retry: 60 animals are marked and released. In a later sample of 50, 10 are marked. Estimate the population. Predict the direction of bias if some marks were lost before recapture, keeping the actual number of animals and capture behaviour unchanged.
<!-- /task:E4 -->

<details markdown="1">
<summary>提示 E4</summary>

想想 MC/R 中哪一项被低估。

</details>

<details markdown="1">
<summary>解答 E4</summary>

估计种群 = 60 × 50 / 10 = 300。标记脱落使被识别的重捕数 R 偏小，所以估计偏大。提高算术精度不能修复抽样假设失效。

</details>

## 来源与继续学习 {#sources}

范围依据 [OxfordAQA 9610 specification v5.1](https://www.oxfordaqa.com/wp-content/uploads/2022/08/oxfordaqa-a-level-biology-specification.pdf), 3.3.1 · RP9. 本页按所读 v5.1 编号组织；未来考季适用版本应经学校核对。 [官方资格与资源入口](https://www.oxfordaqa.com/qualification/international-as-and-a-level-biology-9610/).

除明确标记的改编任务外，例题、练习及反馈均由作者编写，不是官方题目或官方评分标准。构造数据不称实测；网页练习不代表已完成必做实验。

[能量传递](/zh/alevel/a2-biology/energy-production/) · [物质循环](/zh/alevel/a2-biology/nutrient-cycles/) · [选择与种群](/zh/alevel/a2-biology/evolution/) · [BL05 实验设计](/zh/alevel/a2-biology/experimental-design/) · [BL05 数据技能](/zh/alevel/a2-biology/data-skills/) · [BL05 综合写作](/zh/alevel/a2-biology/synoptic-writing/)
