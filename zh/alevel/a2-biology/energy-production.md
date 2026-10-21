---
title: "能量传递、生产量与农业"
layout: subjects
mathjax: true
grade: a2
subject: a2-biology
study_page: true
toc_headings: h2
lang: zh-CN
permalink: /zh/alevel/a2-biology/energy-production/
translation_of: /alevel/a2-biology/energy-production/
---

[BL03 学习目录](/zh/alevel/a2-biology/paper-3/) · OxfordAQA 9610 · 3.3.4

请先作答再展开提示或解答。

## 存量不等于速率 {#start}

一片田地可以现存大量生物量，却在这一周只新增很少。**生物量（biomass）**是在某一时刻的存量；**生产量（production）**关注一段时间内新增的生物量或其中的化学能。比较生态系统前，先说明面积或体积、时间及所测的量。本页把[光合](/zh/alevel/a2-biology/photosynthesis/)和[呼吸](/zh/alevel/a2-biology/respiration/)连到食物网及农业决策。单位和百分比可查[BL05 数据技能](/zh/alevel/a2-biology/data-skills/)。

<!-- task:EN0 -->
**自拟题 — EN0**

A pond contains 5 g m⁻² of algae and 10 g m⁻² of herbivores on one day. Does this show that the herbivores receive more energy per year than the algae fix? Identify the missing measurement.
<!-- /task:EN0 -->

<details markdown="1">
<summary>提示 EN0</summary>

比较某时刻的现存量与某时段内传递的量。

</details>

<details markdown="1">
<summary>解答 EN0</summary>

不能。藻类可以快速增长并被取食，现存量虽小，年生产量却可能高。须测同一年内每单位面积的能量生产／传递，一天的生物量不能给出这个速率。

</details>

## 食物网与三类金字塔 {#pyramids}

生产者把能量固定到有机分子中；初级消费者取食生产者，次级消费者取食初级消费者。食物网箭头**从食物指向消费者**，表示物质与化学能的传递。杂食动物可处于多个营养级，因此不能总把食物网简化为单一链。

**数量金字塔**数个体，一个树可支持许多昆虫，所以可倒置。**生物量金字塔**常按单位面积干质量计，考虑了个体大小，却仍是某时刻存量。快速更新的生产者存量可以支持更大的消费者存量。鲜质量受含水量影响，不适合直接比较化学能储存。

**能量生产或传递金字塔**用相同面积和时间口径，考虑速率和能量含量。在边界清楚的食物链中，消费者生产量小于食物提供的能量，因为部分未被同化，部分用于呼吸。比较开放生态系统时应计入外来食物和边界，不能用存量图代替流量。

## 初级生产：总量、呼吸消耗与净量 {#primary-production}

总初级生产量（GPP）表示生产者把能量固定进有机物的速率，其中一部分用于生产者自身呼吸。净初级生产量（NPP）是剩余可形成新植物生物量的部分，包括后来被吃掉或进入碎屑的组织，并不全都会被收获或取食。

各项须使用一致单位，例如 kJ m⁻² year⁻¹。这里的 R 是**生产者呼吸**，不是整个生态系统全部呼吸。

$$NPP=GPP-R.$$

**收支示范 — 自拟题；构造数据：**GPP = 24 000，生产者 R = 14 000 kJ m⁻² year⁻¹，则 NPP = 10 000 kJ m⁻² year⁻¹。NPP/GPP × 100 = 41.7%，表示扣除生产者呼吸后保留的比例，并不是入射太阳能的固定比例。后者必须以入射光能为分母。

## 消费者生产：先说清边界 {#consumer-production}

植物生产量不会全被吃掉。消费者摄入的食物中，部分随粪便排出，部分化学能随尿液离开，部分在呼吸中转移，其余用于新的生物量，包括繁殖。粪便主要涉及未被同化的物质，尿液包含代谢排泄物，不能把两者视为同一过程。

$$N=I-(F+U+R).$$

| Symbol | Meaning in the consumer account |
| --- | --- |
| I | Chemical energy in ingested food |
| F | Chemical energy in faeces |
| U | Chemical energy in urine |
| R | Energy used in respiration |
| N | Net production of new consumer biomass |

![Original teaching energy budget: ingested energy branches into faeces, urine, respiration and net production. Arrows show destinations; widths are not quantitative. Decomposers can receive organic waste, but heat is not recycled into food.](/assets/images/a2-biology/bl03-energy-budget.svg)

**收支示范 — 自拟题；构造数据：**同一时段 I = 1000 kJ、F = 300 kJ、U = 40 kJ、R = 500 kJ，净生产量为 160 kJ，占**摄入**能量的 16%。若题目改为相对**同化**能量的生产效率，并把同化定义为 I − F，就应以 700 kJ 为分母，得到 22.9%。先读定义，不能挑一个熟悉的百分数直接套。

相邻营养级的生产传递效率可定义为后一级生产量除以前一级生产量再乘 100，面积、时间和能量单位须一致。其数值不总是 10%。

$$\text{transfer efficiency}=\frac{\text{production at next trophic level}}{\text{production at previous trophic level}}\times100\%.$$

呼吸所用能量最终变得较难用于生物做功，其中大量以热散失。能量守恒，并没有消失。粪便、遗体和未被食用的组织可支持分解者食物网，其中元素能够返回植物，但散失的热不会被光合循环利用，生态系统需要持续能量输入。

<!-- task:EN1 -->
**自拟题 — EN1**

Complete the explanation: an animal eats only some of the available plant biomass; some ingested material is ______; some assimilated energy is used in ______. Explain why this limits the number of trophic levels a given producer energy supply can support.
<!-- /task:EN1 -->

<details markdown="1">
<summary>提示 EN1</summary>

先追踪消化道之后的能量，再追踪代谢。不要说能量凭空消失。

</details>

<details markdown="1">
<summary>解答 EN1</summary>

部分以粪便排出，部分用于呼吸。于是只有一部分成为可供下一级利用的新生物量。连续传递后，可支持更高营养级的生产量逐渐减少，固定的生产者供给不能维持无限长食物链。

</details>

## 农业：解释增产机制，也计算代价 {#farming}

除草可减少对光、水和矿质的竞争；防治害虫可减少作物被食用，防病可保护有生产能力的组织。这些措施可提高可供人利用的生产比例，却不能使所有入射光都被利用。施肥能解除矿质限制，灌溉能解除水分限制；收益取决于当时到底受什么限制。

化学农药可能起效快，却可伤害非目标生物、筛选抗性并需要反复施用。生物防治利用害虫的天敌，建立种群需要时间，也可能影响其他物种。综合害虫管理把监测、阈值与多种方法结合，减少不必要处理。去除过多物种会简化食物网，削弱传粉或自然控虫等服务。

畜牧中，减少过多活动、维持适宜温度，可降低活动与体温调节消耗，让较多同化能量用于生长。但供暖本身消耗外部能源，拥挤可加快疾病传播，过度限制运动也影响福利。饲料转化、利润与整个系统的能源效率是不同指标；饲料消化率、死亡率、兽医费用和废物排放也需考虑。

直接食用生产者通常可减少额外营养级的损失，但具体农业决策还取决于不适种作物的土地、人类营养需求、可用副产物及当地条件。结论应以给定证据为条件。

## 独立生产量计算与评价 {#practice}

<!-- task:EN2 -->
**自拟题 — EN2**

In a constructed grassland budget, herbivore net production is 600 kJ m⁻² year⁻¹ and represents 12% of producer NPP. Producer respiration is 7000 kJ m⁻² year⁻¹. Find NPP and GPP. State why adding herbivore respiration to NPP would not calculate producer GPP.
<!-- /task:EN2 -->

<details markdown="1">
<summary>提示 EN2</summary>

先从 12% 反推，再使用生产者收支式。

</details>

<details markdown="1">
<summary>解答 EN2</summary>

NPP = 600/0.12 = 5000 kJ m⁻² year⁻¹。GPP = 5000 + 7000 = 12 000 kJ m⁻² year⁻¹。生产者 GPP 要加回生产者自己的呼吸，食草动物呼吸属于另一个对象与收支。

</details>

<!-- task:EN3 -->
**自拟题 — EN3**

Two constructed livestock budgets, per animal over the same 30 days, are shown below. Calculate net production and N/I × 100 for each. Evaluate whether system B is necessarily the better system for a farm.

| System | I / MJ | F / MJ | U / MJ | R / MJ | External heating / MJ |
| --- | --- | --- | --- | --- | --- |
| A | 120 | 35 | 5 | 60 | 0 |
| B | 120 | 35 | 5 | 45 | 30 |

Include the difference between animal-level feed efficiency and whole-system energy use, and one welfare consideration.
<!-- /task:EN3 -->

<details markdown="1">
<summary>提示 EN3</summary>

外部供暖不是动物摄食收支的一项，但定义农场总投入时仍要计入。

</details>

<details markdown="1">
<summary>解答 EN3</summary>

A：N = 20 MJ，N/I = 16.7%；B：N = 35 MJ，N/I = 29.2%。B 把更多摄入能量保留成生物量，与较低呼吸消耗相符。若扩展为简单比值 N/(I + heating)，A 为 16.7%，B 为 23.3%，但仍漏掉其他农场投入。利润还需能源价格、售价及其他成本。住房可改善热舒适度，但限动或拥挤可能伤害福利、传播疾病，仅凭表不能决定最优方案。

</details>

<!-- task:EN4 -->
**自拟题 — EN4**

A farm starts with an empty building on day 1. Each complete production cycle, including cleaning, lasts 36 days and yields 4000 saleable birds. Calculate the number sold from complete cycles in 365 days. Explain why rounding 365/36 to the nearest whole number can give an invalid production estimate.
<!-- /task:EN4 -->

<details markdown="1">
<summary>提示 EN4</summary>

题目给定的可销售产出只来自已完成周期。

</details>

<details markdown="1">
<summary>解答 EN4</summary>

能完成十个周期：10 × 36 = 360 天，共 40 000 只。未完成周期不能直接贡献完整的 4000 只。应取完整周期数，不是无条件四舍五入。

</details>

<!-- task:EN5 -->
**自拟题 — EN5**

Retry: a pesticide raises harvest but also reduces insect pollinators. Give a mechanism for a possible short-term benefit and a longer-term cost. State one measurement needed before recommending repeated use.
<!-- /task:EN5 -->

<details markdown="1">
<summary>提示 EN5</summary>

区分作物被取食的组织损失与依赖传粉的繁殖。

</details>

<details markdown="1">
<summary>解答 EN5</summary>

杀死取食作物的害虫可立即减少生物量损失。传粉者减少则可能在之后降低依赖传粉作物的果实或种子产量。应在多个生长季比较处理与可比未处理样地的虫损、传粉者数量及繁殖产量，同时记录非目标影响和成本。

</details>

## 来源与继续学习 {#sources}

范围依据 [OxfordAQA 9610 specification v5.1](https://www.oxfordaqa.com/wp-content/uploads/2022/08/oxfordaqa-a-level-biology-specification.pdf), 3.3.4. 本页按所读 v5.1 编号组织；未来考季适用版本应经学校核对。 [官方资格与资源入口](https://www.oxfordaqa.com/qualification/international-as-and-a-level-biology-9610/).

除明确标记的改编任务外，例题、练习及反馈均由作者编写，不是官方题目或官方评分标准。构造数据不称实测；网页练习不代表已完成必做实验。

[种群与竞争](/zh/alevel/a2-biology/ecology/) · [光合作用](/zh/alevel/a2-biology/photosynthesis/) · [呼吸](/zh/alevel/a2-biology/respiration/) · [物质循环](/zh/alevel/a2-biology/nutrient-cycles/) · [BL05 数据技能](/zh/alevel/a2-biology/data-skills/) · [BL05 综合写作](/zh/alevel/a2-biology/synoptic-writing/)
