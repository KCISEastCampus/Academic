---
title: "等位基因频率、选择与物种形成"
layout: subjects
mathjax: true
grade: a2
subject: a2-biology
study_page: true
toc_headings: 'h2, h3'
lang: zh-CN
permalink: /zh/alevel/a2-biology/evolution/
translation_of: /alevel/a2-biology/evolution/
---

[BL03 学习目录](/zh/alevel/a2-biology/paper-3/) · OxfordAQA 9610 · 3.3.7–3.3.8

请先作答再展开提示或解答。

## 进化关注种群跨代的变化 {#start}

个体可以生长或改变生理状态，却不一定发生进化。进化涉及种群在世代之间的等位基因频率变化。种群遗传学中，计数前先界定可潜在相互交配的群体、地点与时间；基因库包含这个种群中的等位基因。从[遗传](/zh/alevel/a2-biology/inheritance/)及[减数分裂](/zh/alevel/a2-biology/prerequisites/#division)开始，再区分频率计算与因果解释。

<!-- task:EV0 -->
**自拟题 — EV0**

A lizard becomes darker during a cold morning, then returns to its original colour. Does this observation alone establish evolution? State what population-level evidence would be needed.
<!-- /task:EV0 -->

<details markdown="1">
<summary>提示 EV0</summary>

区分可逆表型变化与跨代遗传变化。

</details>

<details markdown="1">
<summary>解答 EV0</summary>

不能，这可能只是同一个体的生理响应。要说明遗传意义上的进化，需有明确种群中等位基因频率跨代改变的证据。

</details>

## 直接数等位基因，不需要先假设 HW 平衡 {#allele-counts}

N 个二倍体个体在一个常染色体位点共有 2N 份等位基因。每个 AA 贡献两个 A，每个 Aa 贡献一个 A。即使存在非随机交配或选择，仍可用这个方法描述样本。对两个等位基因，定义 p 为 A 频率、q 为 a 频率，p + q = 1。显隐性不决定哪种更常见。

$$p=\frac{2n_{AA}+n_{Aa}}{2N},\qquad q=\frac{2n_{aa}+n_{Aa}}{2N},\qquad p+q=1.$$

**计数示范 — 自拟题；构造数据：**100 个个体中，36 个 AA、48 个 Aa、16 个 aa。A 份数 = 2 × 36 + 48 = 120，总共 200 份，因此 p = 0.60、q = 0.40。这里的观测基因型比例恰与 p²、2pq、q² 相符，但直接计数本身并不依赖这个假设。

## Hardy–Weinberg：有条件的模型 {#hardy-weinberg}

若配子携带 A、a 的概率分别为 p、q，随机结合使 AA 概率为 p²、Aa 为 pq + qp = 2pq、aa 为 q²。在理想条件下，等位基因频率跨代保持不变。模型假设种群很大、漂变可忽略、随机交配，而且没有选择、突变或迁移改变基因库。随机交配涉及基因型组合；频率稳定还需其他条件。

用模型产生期望，再与证据比较。能代入这个公式，不表示现实种群必然满足假设。

$$p^2+2pq+q^2=(p+q)^2=1.$$

**反推示范 — 自拟题：**假设种群处于平衡，完全外显的常染色体隐性表型发生率为 1/2500，则 q² = 1/2500 = 0.0004，q = 0.02、p = 0.98，携带者频率 2pq = 0.0392。携带者约占 3.92%，并不是 2%。这个推断依赖隐性模型、表型识别及平衡假设。

若题目已经给出**等位基因频率**，不要再开平方。若给显性表型频率，它对应 p² + 2pq，并不只等于 p²。若存在不完全外显、环境影响或多个基因参与，简单把患病率代入的做法可能失效。

<!-- task:EV1 -->
**自拟题 — EV1**

A population at Hardy–Weinberg equilibrium has a dominant allele A at frequency 0.04. For 10 000 individuals, calculate expected AA, Aa and aa counts. Explain why 0.04 is not the proportion of all individuals showing the dominant phenotype.
<!-- /task:EV1 -->

<details markdown="1">
<summary>提示 EV1</summary>

给定的是 p，不是 p²。显性表型包括两种基因型。

</details>

<details markdown="1">
<summary>解答 EV1</summary>

q = 0.96。AA：0.0016 × 10 000 = 16；Aa：0.0768 × 10 000 = 768；aa：0.9216 × 10 000 = 9216。完全显性时，784 个个体呈显性表型，频率为 0.0784。等位频率数等位基因份数，表型频率数个体。

</details>

## 自然选择：把因果链写完整 {#natural-selection}

突变可产生新等位基因，减数分裂和受精重组等位组合。突变不会因为生物“需要某种解决方案”而定向出现。表型差异还可能来自环境，因此若要解释遗传上的响应，该性状差异须有可遗传基础。

捕食、疾病或竞争等选择压力下，某些表型留下更多能存活、可育的后代，其等位基因因此更常被传递，多代后频率可改变。**适合度（fitness）**是在特定环境中的相对繁殖成功，不只是力量或寿命。选择通过表型发挥作用，进化结果则涉及遗传的等位基因频率。

**机制示范 — 自拟题：**某虚构昆虫种群中，可遗传变异使农药较难与靶标结合。施药后，携带者更容易存活繁殖并传递该等位基因，多代后其频率上升。农药是在变异中进行筛选，不是在指示每只昆虫产生所需突变。无农药环境下，抗性代价可能改变结果。

### 三种选择模式 {#selection-patterns}

这些模式描述指定条件下哪些表型具有更高繁殖成功，并不是个体主动选择的三种适应方式。比较时使用同一性状轴，并区分**相对适合度曲线**与实际个体数分布图。

| Pattern | Favoured phenotypes | Expected tendency if variation is heritable |
| --- | --- | --- |
| Directional | One end of the existing range | Mean can shift towards that end |
| Stabilising | Intermediate phenotypes | Extremes selected against; variation can narrow |
| Disruptive | Both extremes relative to intermediates | Intermediate disadvantage; divergence can be promoted |

![Three original qualitative selection diagrams: relative fitness versus trait value rises towards one extreme for directional selection, peaks centrally for stabilising selection and is higher at both extremes for disruptive selection. These are model fitness curves, not measured population distributions.](/assets/images/a2-biology/bl03-selection.svg)

食物转为较硬种子时，大喙可能占优，这是定向选择模型。若过小后代不耐寒、过大后代出生困难，中间大小可能占优，这是稳定选择模型。若两类食物分别有利于小型和大型取食结构，而中间结构不利，可形成分裂选择。这些是构造示例，实际判断还需存活与繁殖资料。

分裂选择本身不能证明物种形成，交配与重组仍可能连接种群。性状均值近似不变也不能证明没有选择，因为稳定选择可排除两端而不移动中心。

## 漂变、瓶颈与人工选择 {#drift}

**遗传漂变（genetic drift）**是抽样随机性造成的等位频率改变，在小种群或拷贝数很少的等位基因中尤其明显。它可使并无害处的等位基因消失，但不会创造新等位基因，后者来自突变。

**瓶颈（bottleneck）**使种群数量骤减，幸存者可能仅保留不具代表性的一部分等位基因，导致多样性下降、频率改变。即使数量恢复，丢失的等位基因也不会自动回来。奠基者效应同样可使新种群从一个小样本开始。与漂变不同，选择涉及与遗传表型相关的系统性繁殖成功差异；随机性和选择可以同时作用。

**人工选择（artificial selection）**由人选择繁殖个体，增加产量等性状。选择合适亲本、繁殖、测量后代并持续多代；性状须有遗传成分，产量同时也受环境影响。长期只用少数亲本可降低多样性、增加近交，使有害隐性等位基因更易配成纯合。高产可能与抗病、繁殖力或动物福利冲突。应控制饲养环境、记录多个性状，不能只凭一次特别有利条件下的表现选种。

## 物种形成：减少基因流还须发展为生殖隔离 {#speciation}

**异域物种形成（allopatric speciation）**中，地理屏障分开种群、减少基因流。不同选择压力、突变和漂变可造成遗传分化。若差异最终阻止成功交配并产生可育后代，就形成生殖隔离；仅出现地理屏障还不足以宣布已经是两个物种。

**同域物种形成（sympatric speciation）**不要求地理分隔。选择性交配、繁殖时间不同或生态专化，可在同一区域减少基因流。植物染色体加倍可形成与二倍体祖先生殖隔离的多倍体谱系，但还须能建立可持续繁殖，例如与相容多倍体交配或自交。同住一个地方不保证基因自由交流。

受精前屏障包括求偶信号、繁殖时间或配子不相容；受精后屏障包括杂种不存活或不育。判断要依据题给证据：一次未观察到交配，不能强力证明绝对屏障。“可育后代”是有性生物常用的生物学物种模型，对无性生物或无法实际杂交的种群有适用限制。

## 独立推断与诊断 {#practice}

<!-- task:EV2 -->
**自拟题 — EV2**

A storm leaves 12 survivors from an island population of 1200 beetles. A rare neutral allele is absent among the survivors, and population size later returns to 1200. Explain the change without invoking an advantage of the other allele. Explain why restored population size does not establish restored genetic diversity.
<!-- /task:EV2 -->

<details markdown="1">
<summary>提示 EV2</summary>

中性等位基因也可因抽样而丢失。种群大小与等位形式数量不是同一个量。

</details>

<details markdown="1">
<summary>解答 EV2</summary>

瓶颈只留下少量个体，偶然没有携带稀有等位基因者，这属于漂变，不证明另一等位基因有优势。幸存者后代可恢复数量，却仍保留缩小的基因库；消失的等位基因须通过重新迁入或突变才可能再出现。

</details>

<!-- task:EV3 -->
**自拟题 — EV3**

In a constructed seed-eating bird population, small and large beaks each produce more surviving offspring than intermediate beaks. Identify the selection pattern and explain its possible effect on phenotype frequencies. State the extra evidence required before concluding that two species have formed.
<!-- /task:EV3 -->

<details markdown="1">
<summary>提示 EV3</summary>

题目给了繁殖成功差异，却没有给出生殖隔离。

</details>

<details markdown="1">
<summary>解答 EV3</summary>

这是分裂选择。若喙差异可遗传，有助于两个优势表型的等位基因可能相对增加。判断物种形成还需研究基因流与生殖隔离，例如持续的选择性交配、无法产生可存活且可育的杂种。仅有双峰表型分布不足够。

</details>

<!-- task:EV4 -->
**自拟题 — EV4**

A river separates two mammal populations. Their allele frequencies differ after many generations, but controlled crosses produce fertile offspring. Explain how divergence could have arisen and evaluate the claim that geographical isolation proves speciation.
<!-- /task:EV4 -->

<details markdown="1">
<summary>提示 EV4</summary>

区分遗传差异的来源与界定物种的条件。

</details>

<details markdown="1">
<summary>解答 EV4</summary>

基因流减少后，不同选择、漂变和突变可使频率独立改变。地理分隔可启动分化，但可育后代表明已测交配没有完整受精后屏障。还应研究自然交配及其他屏障；地理屏障本身不能证明物种形成已完成。

</details>

<!-- task:EV5 -->
**自拟题 — EV5**

Retry: in a sample of 200 individuals, 80 are AA, 100 are Aa and 20 are aa. Calculate p and q directly. Then calculate Hardy–Weinberg expected counts using these frequencies. Explain why a difference between observed and expected counts is not, by itself, proof of natural selection.
<!-- /task:EV5 -->

<details markdown="1">
<summary>提示 EV5</summary>

先数 400 份等位基因。期望计数是模型输出，不能替换实际观测。

</details>

<details markdown="1">
<summary>解答 EV5</summary>

p = (160 + 100)/400 = 0.65，q = 0.35。期望 AA = 0.4225 × 200 = 84.5，Aa = 0.455 × 200 = 91，aa = 0.1225 × 200 = 24.5。抽样、非随机交配、种群混合或其他假设失效都可造成差异。确认选择原因前还需统计判断和生物证据。

</details>

## 来源与继续学习 {#sources}

范围依据 [OxfordAQA 9610 specification v5.1](https://www.oxfordaqa.com/wp-content/uploads/2022/08/oxfordaqa-a-level-biology-specification.pdf), 3.3.7–3.3.8. 本页按所读 v5.1 编号组织；未来考季适用版本应经学校核对。 [官方资格与资源入口](https://www.oxfordaqa.com/qualification/international-as-and-a-level-biology-9610/).

除明确标记的改编任务外，例题、练习及反馈均由作者编写，不是官方题目或官方评分标准。构造数据不称实测；网页练习不代表已完成必做实验。

[遗传模型](/zh/alevel/a2-biology/inheritance/) · [生态与选择压力](/zh/alevel/a2-biology/ecology/) · [人工选择与农业](/zh/alevel/a2-biology/energy-production/) · [基因型与表达](/zh/alevel/a2-biology/gene-expression/) · [BL05 数据技能](/zh/alevel/a2-biology/data-skills/) · [BL05 综合写作](/zh/alevel/a2-biology/synoptic-writing/)
