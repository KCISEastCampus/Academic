---
title: "稳态：血糖与心率"
layout: subjects
mathjax: true
grade: a2
subject: a2-biology
study_page: true
toc_headings: 'h2, h3'
lang: zh-CN
permalink: /zh/alevel/a2-biology/homeostasis/
translation_of: /alevel/a2-biology/homeostasis/
---

[BL04 · Control](/zh/alevel/a2-biology/paper-4/) · 3.4.6–3.4.8 · RP5

## 追踪变量，不只追踪箭头 {#start}

稳态（homeostasis）在输入不断变化时，把内环境维持在一定范围内，是动态调节，不是每次读数绝对不变。本页把反馈连接到血糖与心率，再评价脉搏实验。可先复习[运输与循环](/zh/alevel/a2-biology/prerequisites/#transport)、膜和酶。

<!-- task:BL04-H0 -->
**H0 · Self-written / 自拟题**

A room becomes colder and a heater switches on. Identify the disturbance, response and effect on the original disturbance. Would switching on extra cooling have the same feedback sign?
<!-- /task:BL04-H0 -->

<details markdown="1">
<summary>H0 · 检查</summary>

扰动是温度下降，加热抵消下降，属于负反馈。若反而加强制冷，就强化原来的下降，是这个假想系统中的正反馈。“正”不等于有益，“负”也不等于响应一定减弱。

</details>

## 反馈要有对象和结果 {#feedback}

感受器检测变化，协调系统处理信息，效应器改变能够影响该变量的过程。**负反馈（negative feedback）**抵消起初的偏离。对于高于和低于正常范围的偏离，分别有相应机制，比只向一个方向作用的控制更精细。由于延迟，读数可在范围附近波动；稳态不要求完全水平的图线。

核心体温和血液 pH 影响酶：低温会减慢许多反应，过热可破坏结构；pH 改变会影响电荷和键合，从而改变活性位点。限制这些变量的变化，有助于代谢途径协调工作。

**正反馈（positive feedback）**加强初始变化。正常体温调节失效时，扰动被放大可导致失控；它也可用于有终点的过程，例如损伤处血小板活化再招募更多血小板，直到问题受到控制。解释时要指出放大何时停止，不能把所有正反馈都当作普通稳态纠偏。

## 血糖的来源、去向与肝脏途径 {#glucose}

餐后消化吸收提供葡萄糖，肝糖原分解及新生葡萄糖也向血液供糖。细胞摄取和呼吸消耗葡萄糖；运动改变需求，进食、禁食和压力改变输入与激素信号。足够葡萄糖支持包括神经系统在内的 ATP 供应，而过多溶解葡萄糖使血液水势更负，也会扰乱水分平衡。

| 过程 | 含义 | 在肝脏的结果 |
| --- | --- | --- |
| Glycogenesis，糖原合成 | 葡萄糖进入糖原 | 储存降低可用于释放的葡萄糖 |
| Glycogenolysis，糖原分解 | 已有糖原被分解 | 肝脏可产生葡萄糖并释放入血 |
| Gluconeogenesis，糖异生 | 由甘油、部分氨基酸等非糖前体合成葡萄糖 | 吸收供糖有限时支持血糖供应 |

糖异生与糖原分解不同：前者用其他底物新合成葡萄糖，后者用已有糖储备。肌糖原主要供肌肉自身使用，并不像肝糖原那样以游离葡萄糖形式供血。

## 胰岛素与升糖激素 {#hormones}

血糖升高时，**胰岛 β 细胞**增加分泌蛋白质激素**胰岛素（insulin）**。胰岛素结合靶细胞表面特异受体，启动内部信号。在肌肉及脂肪细胞中，这使葡萄糖转运蛋白，尤其 GLUT4，更多地进入细胞膜，提高易化摄取。肝脏中，胰岛素促进糖原合成相关途径并降低葡萄糖输出；肝细胞运输不能直接套用同样的 GLUT4 机制。胰岛素促进利用和储存，使原来的血糖升高得到纠正，也减少分泌刺激。

血糖降低时，**胰岛 α 细胞**增加分泌**胰高血糖素（glucagon）**，主要作用于肝脏，促进糖原分解与糖异生。血糖回升至调节范围附近，分泌刺激减弱。

**肾上腺素（adrenaline）**在压力或活动时由肾上腺髓质释放，帮助准备代谢底物。它促进肝糖原分解和葡萄糖输出，对肌糖原的作用则支持局部 ATP 产生。激素协调代谢，不是自己把糖原分解成糖。

![信息流示意：血糖升高促使β细胞分泌胰岛素，加强储存和摄取；血糖降低促使α细胞分泌胰高血糖素，加强肝脏供糖，各响应抵消初始变化。另一图按顺序列出SAN、AVN延迟、His束和Purkinje传导。](/assets/images/a2-biology/bl04-feedback-heart.svg)

*反馈箭头表示因果信息，不是血液流向；心脏部分表示电活动顺序，不是按比例的解剖图。*

**示范 · Self-written / 自拟题：**进食后血糖升高刺激 β 细胞；胰岛素结合表面受体，肌肉/脂肪转运蛋白增加，肝脏储存增加。摄取与储存降低血糖，刺激随之减小。明确起始变量及最终作用，才真正解释了负反馈。

### cAMP 第二信使模型 {#second-messenger}

肝细胞中，胰高血糖素及适当类型的肾上腺素受体被激活后，促使**腺苷酸环化酶（adenyl cyclase）**活化，把 ATP 转为**环磷酸腺苷（cyclic AMP，cAMP）**。cAMP 激活**蛋白激酶（protein kinase）**，经磷酸化改变下游蛋白活性，酶级联再促进糖原分解、调整代谢。一个活化组分可影响多个下游分子，因此少量激素信号可被放大。

激素是细胞外第一信使，cAMP 在细胞内传递信息。受体具有结合位点，不能一律称为酶的活性位点。蛋白激酶磷酸化蛋白，不直接把糖原切成葡萄糖。胰岛素使用不同的信号途径，不能给所有激素套同一个 cAMP 链。

<!-- task:BL04-H1 -->
**H1 · Self-written / 自拟题**

Complete a liver-cell pathway after glucagon binds: membrane receptor → ____ → ____ → protein kinase → altered activity of downstream ____ → increased glucose output. Explain why the protein kinase should not be labelled “the enzyme that directly hydrolyses glycogen”.
<!-- /task:BL04-H1 -->

<details markdown="1">
<summary>H1 · 提示</summary>

分清制造 cAMP 的酶、信使本身，以及实际完成糖原代谢的酶。

</details>

<details markdown="1">
<summary>H1 · 解释</summary>

Adenyl cyclase → cAMP → protein kinase → 下游 enzymes。蛋白激酶改变其他蛋白的磷酸化状态，活化后的代谢酶再完成糖原分解。把它直接标成水解糖原的酶会漏掉关键机制。

</details>

<!-- task:BL04-H2 -->
**H2 · Self-written / 自拟题**

A specific inhibitor prevents cAMP production in liver cells but does not prevent glucagon binding. Predict the immediate effect on the response to glucagon. Explain why observing normal hormone binding alone would not establish normal regulation of blood glucose.
<!-- /task:BL04-H2 -->

<details markdown="1">
<summary>H2 · 提示</summary>

继续追踪受体结合之后的信号；能正常结合只是其中一步。

</details>

<details markdown="1">
<summary>H2 · 解释</summary>

依赖 cAMP 的蛋白激酶激活和下游糖原分解减弱，预期的即时肝葡萄糖输出增加也减弱。结合正常不代表细胞内传递正常；其他途径和长期代偿还可能参与，所以不能仅凭结合数据预测整个人的精确血糖。

</details>

## 糖尿病：机制、表现与证据 {#diabetes}

**1 型糖尿病（Type 1 diabetes）**常由免疫介导的胰岛 β 细胞丧失，造成严重胰岛素不足。**2 型（Type 2）**中，靶组织对胰岛素响应降低，并常逐渐出现相对于需求的分泌不足。2 型风险与遗传易感性、年龄、体脂过多和活动较少等因素有关；群体相关不能证明某因素导致了某个人的疾病，1 型也不能简单解释为吃糖过多。

管理取决于类型及个体需要：1 型需要补充胰岛素，饮食安排帮助供糖与治疗匹配；2 型可能涉及饮食/活动调整、药物，有时也需胰岛素。这些是课程层面的原理，不是个人治疗方案。机制上补充胰岛素可弥补分泌缺乏，但实际响应需要测量，不能仅凭病名假定。

过滤的葡萄糖过多可超过肾脏重吸收能力，留在小管液中的糖使水势更负，减少水重吸收、增加尿液水分丢失，脱水进而引起口渴。这里调用 AS 运输原理，不把完整肾单位/ADH 课程新增为 BL04 必考章节。

<!-- task:BL04-H3 -->
**H3 · Self-written / 自拟题**

A person has persistently high blood glucose and glucose remains in the kidney tubule fluid. Explain how this can increase urine volume and thirst. Explain why these symptoms alone do not distinguish Type 1 from Type 2 diabetes.
<!-- /task:BL04-H3 -->

<details markdown="1">
<summary>H3 · 提示</summary>

从小管液中保留的溶质推到水移动，并区分共同结果与不同病因。

</details>

<details markdown="1">
<summary>H3 · 解释</summary>

葡萄糖降低小管液水势，使回到血液的水减少、尿中丢水增多，水分不足促进口渴。胰岛素分泌缺乏或作用减弱都可造成高血糖，所以这些表现本身不能区分两型，仍需要额外诊断证据。

</details>

## 心脏先产生节律，再受调节 {#heart}

心肌为**肌源性（myogenic）**：收缩指令起于心脏本身，并非每跳都需要运动神经元发令。**窦房结（SAN）**作为起搏点，电活动波传遍心房，引发心房收缩。房室之间的不导电组织阻止直接传播，信号经**房室结（AVN）**延迟，使心室有时间充盈。**His 束**向心尖传导，**Purkinje 组织**再把兴奋分布至心室壁，协调从心尖向上收缩以射血。

自主神经改变 SAN 放电：**交感（sympathetic）**活动提高心率，**副交感（parasympathetic）**包括迷走神经降低心率。它们调节内在节律，并未把肌源性变成神经源性。

**化学感受器（chemoreceptors）**检测与 CO₂ 和 pH 有关的变化。代谢增强可使 CO₂ 增加、pH 降低，输入延髓心血管中枢后，可增强交感并减弱副交感驱动，提高心率。在通气等其他过程也响应的条件下，循环增加帮助运输气体。心率常是效应器响应，不一定是最初受控的变量。

颈动脉窦与主动脉弓的**压力感受器（baroreceptors）**检测牵张。动脉压升高通常加强其向延髓的输入，促使交感减弱、副交感增强，减慢 SAN；压力下降时产生相反调节。心输出量还取决于每搏输出量，所以单靠心率不能直接测出血压或供氧量。

<!-- task:BL04-H4 -->
**H4 · Self-written / 自拟题**

Complete the response to a fall in arterial blood pressure: less stretch of pressure receptors → changed input to the medulla → increased ____ and reduced ____ activity to the SAN → ____ heart rate. Explain how this can oppose the original change, assuming stroke volume and other factors permit it.
<!-- /task:BL04-H4 -->

<details markdown="1">
<summary>H4 · 提示</summary>

选择加快 SAN 的神经分支，再按题述条件把心率连到心输出量。

</details>

<details markdown="1">
<summary>H4 · 解释</summary>

交感增强、副交感减弱 → 心率增加。每搏输出量足够时，心输出量增加，有助于恢复血压。它抵消原来的下降，因此为负反馈；真实血压还受血管和血容量等其他响应影响。

</details>

## RP5：计数时间窗会改变测到的量 {#practical}

<!-- task:BL04-H5 -->
**H5 · Self-written / 自拟题**

A constructed pulse record contains 18 beats during the first 10 s after exercise and 15 during the next 10 s. Calculate the two rates in beats min−1. Explain why counting for longer both reduces the relative effect of a one-beat counting error and may change the biological quantity being estimated. Plan a fair within-person comparison of two safe activity intensities.
<!-- /task:BL04-H5 -->

<details markdown="1">
<summary>H5 · 提示</summary>

把十秒计数换成每分钟。在恢复阶段心率不断变，长计数会平均多个不同状态。

</details>

<details markdown="1">
<summary>H5 · 计算与设计</summary>

$$r_1=18\times\frac{60}{10}=108\ \text{beats min}^{-1},\qquad r_2=15\times\frac{60}{10}=90\ \text{beats min}^{-1}.$$

十秒少计一跳造成 6 beats min−1 的差，六十秒少计一跳则差 1 beat min−1；但较长的运动后计数会平均恢复过程，可能低估运动刚结束时的心率。

在知情同意、可退出及教师认可的安全活动下，用同一人比较两种强度，统一持续时间、环境、计数窗及停止后延迟。两次间恢复到预定静息条件，并平衡顺序；在合适时间重复，如要推广到更多人则纳入多位受试者。记录年龄、体能等相关条件，不能把一个人的多次读数当成多个独立受试者。不适立即停止。这道规划题不等于已完成 RP5。

</details>

## 诊断与重试 {#retry}

缺最终效果的反馈链不完整；只写激素名而不写靶组织容易歧义；没有时间窗的脉搏数据不能可靠地比较变化中的恢复心率。

<!-- task:BL04-H6 -->
**H6 · Self-written / 自拟题 — retry**

A rising CO₂ concentration lowers blood pH. Heart rate increases, improving transport to the lungs, and CO₂ is removed more rapidly. Identify the regulated disturbance and explain why an INCREASE in heart rate can form part of NEGATIVE feedback. Contrast this with a clotting reaction that recruits more platelets.
<!-- /task:BL04-H6 -->

<details markdown="1">
<summary>H6 · 提示</summary>

反馈正负取决于对原扰动的作用，不取决于效应器活动是否增加。

</details>

<details markdown="1">
<summary>H6 · 解释</summary>

扰动是 CO₂ 增加、pH 降低。循环加快可帮助把 CO₂ 运走并排出，作用抵消扰动，所以为负反馈。血小板招募加强原来的活化反应，是局部正反馈；它需要限制终点，而不是靠自身响应把活化恢复到原值。

</details>

## 来源与连接 {#sources}

[OxfordAQA 9610 大纲 v5.1](https://www.oxfordaqa.com/wp-content/uploads/2022/08/oxfordaqa-a-level-biology-specification.pdf)，§3.4.6–3.4.8；[官方资料入口](https://www.oxfordaqa.com/qualification/international-as-and-a-level-biology-9610/)。本页任务、数值与反馈均自拟，不赋予官方分值。

把葡萄糖需求连到[呼吸作用](/zh/alevel/a2-biology/respiration/)，把研究方法连到[实验设计](/zh/alevel/a2-biology/experimental-design/)，机制链用于[综合写作](/zh/alevel/a2-biology/synoptic-writing/)。
