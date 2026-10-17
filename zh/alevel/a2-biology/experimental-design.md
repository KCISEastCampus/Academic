---
title: 实验设计——从问题走向证据
layout: subjects
mathjax: true
grade: a2
subject: a2-biology
study_page: true
toc_headings: h2
lang: zh-CN
permalink: /zh/alevel/a2-biology/experimental-design/
translation_of: /alevel/a2-biology/experimental-design/
---

[A2 生物](/zh/alevel/a2-biology/) · [Paper 5：实验与综合能力](/zh/alevel/a2-biology/paper-5/) · <a href="/alevel/a2-biology/experimental-design/" hreflang="en">English</a>

先选出能回答问题的测量，再解释什么因素可能使结论失真。学完后，你应能针对 RP1–10 分别提出方案、记录原始数据、选择分析方法、评价限制，并说明与操作对应的风险控制。

从[实验单位](#design)开始，再选择：[酶](#rp1)、[渗透](#rp2)、[层析](#rp3)、[有丝分裂](#rp4)、[脉搏](#rp5)、[蒸腾计](#rp6)、[光合](#rp7)、[呼吸](#rp8)、[竞争](#rp9)或[生长方向](#rp10)。最后完成[独立设计](#independent-design)。

**先修：**用 [AS 先修页](/zh/alevel/a2-biology/prerequisites/)回补酶、膜、有丝分裂和运输。计算方法见[数据技能](/zh/alevel/a2-biology/data-skills/)；各实验旁有深入机制页的链接。

本页所有任务和数值记录均为 **Self-written / 自拟题**；数字是构造数据，不是实测结果。建议的范围和时长需要教师用现有材料预实验。阅读、设计或处理网页数据**不等于完成必做实验**；实际操作必须有教师指导、学校批准的方法和本地风险评估。

## 建立能检验的比较 {#design}

**自变量（independent variable）**是主动改变的处理。**因变量（dependent variable）**必须定义成可以记录的量，并写清单位和观察时段。“生长”太模糊：七天内的茎长变化与七天后的干质量回答不同问题。**对照处理（control treatment）**提供比较基线；**控制变量（controlled variables）**是需要保持可比的其他条件，以免它们解释了结果差异。

**实验单位（experimental unit）**是被独立分配处理的最小单位。如果整盆接受同一种浇水处理，盆就是处理单位。同盆十株幼苗属于子样本，不能当成十盆独立处理重复。对同一株读三次长度可以检查读数一致性，但没有抽取三个生物个体。

![教学示意：六个独立花盆，三个分配低密度、三个分配高密度。同盆幼苗共享土壤；盆的编号标出独立处理单位。](/assets/images/a2-biology/bl05-experimental-units.svg)

*原创示意图，不是结果；植物不按比例绘制。每个盆的边框表示共享环境，处理的独立重复发生在不同盆之间。*

**Self-written / 自拟题 · 设计示范。**研究密度时，将六个相同花盆随机分为两个密度，使用同批种子，统一每盆土壤和水量，并随机安排位置。记录每盆存活数和各株高度，先算每盆平均高度，再比较每个密度的三个盆均值。这样可以分清盆间与盆内差异。三盆只是便于起步的设计，并不保证任何研究都有足够样本量；应根据预实验变异和所需精度增加独立盆数。

随机**抽样**帮助样本代表总体；随机**分配**帮助将处理前已有的差异分散到不同处理。两者都不能保证样本完全相同。区组设计（blocking）可在同一层架或同一供体植物等相近起点内比较处理。测量时使用不显示处理的编号有助于减少预期偏差。先规定排除规则，不能看完结果后才选择有利的删点方法；异常值应先调查原因。

评价时区分以下概念：

| 术语 | 在具体方法中的含义 | 改进能解决什么 |
| --- | --- | --- |
| 准确度 accuracy | 接近真实值或参考值的程度 | 校准可纠正天平零点偏移，单纯增加读数不能 |
| 精密度 precision | 指定条件下重复测量的离散程度小 | 更易读的刻度可能降低读数不确定度 |
| 重复性 repeatability | 相同方法、操作者、仪器下的结果一致性 | 统一计时和终点判定 |
| 再现性 reproducibility | 改变操作者或仪器等相关条件后仍能得到一致结果 | 不同小组按充分说明的方法独立比较 |
| 生物变异 biological variation | 生物个体或处理单位间的真实差别 | 抽取独立单位并显示离散程度，不能把一切变异都叫“误差” |

有用的评价写清：**具体问题 → 对读数或推断的影响 → 可实施的改动 → 仍存在的限制**。重复使用漏气装置，并不能修好漏气。

## RP1——酶活性与初始速率 {#rp1}

**问题与原理。**底物浓度怎样影响 catalase（过氧化氢酶）活性？Catalase 降低活化能，加快过氧化氢分解为水和氧气。活性酶量固定时，增加底物可提高有效结合的频率，直到活性位点成为限制。应测初始产氧速率；较晚的气体总量还受底物消耗和实验时长影响。蛋白质产生机制见[先修页](/zh/alevel/a2-biology/prerequisites/)和[基因表达](/zh/alevel/a2-biology/gene-expression/)。

**方法选择与操作。**使用教师准备、过滤后的马铃薯提取液。例如混合 8 cm³ 过氧化氢溶液、1 cm³ 缓冲液、1 cm³ 提取液；过氧化氢储备液浓度为 0、0.25、0.50、1.00、1.25% 时，以相同浓度口径计，最终反应浓度为 0、0.20、0.40、0.80、1.00%。固定总体积、提取液体积、pH 和温度。混合前在 25°C 水浴中平衡温度。用活塞能自由移动的气体注射器收集氧气，混合时开始计时，第一分钟每 10 s 读数。预实验调整酶量，使早期近似线性部分足够长、可测。每个浓度使用至少三份独立制备的提取液；每份提取液可作为一个区组，完成全部浓度。区组内随机安排测量顺序。

**记录与分析。**记录提取液编号、最终浓度 / %、温度 / °C、时间 / s、氧气体积 / cm³。对每次反应求早期线性部分的斜率，单位 cm³ s⁻¹，再汇总独立提取液。零底物对照检验产气是否依赖底物；不加提取液的试剂空白检查非酶因素产气。

**评价与风险控制。**装塞时漏掉气体会低估早期产量，可采用教师批准的密闭混合启动方式。若泡沫稳定性会变化，泡沫高度就不是可靠的气体体积代理。佩戴护目镜；教师配制稀过氧化氢，防止刺激眼睛和皮肤。避免吸入酶气溶胶，放稳水浴，产气反应不能封在没有出气通路的刚性容器中。

<!-- task:rp1 -->
**Self-written / 自拟题 · RP1 decision**

A student obtains 12 cm³ of oxygen after 60 s at both 0.40% and 0.80% hydrogen peroxide. Explain why this does not establish equal initial rates. Specify the extra record needed and one variable that must be held constant.
<!-- /task:rp1 -->

<details markdown="1">
<summary>提示——区分总量和速率</summary>

两条曲线可以到达相同终点体积，早期斜率却不同。

</details>

<details markdown="1">
<summary>解答——RP1 判断</summary>

底物消耗后反应可能减慢，因此 60 s 总量反映的是变化过程的累积。应在开始后的多个短时间间隔记录氧气体积，比较初始斜率。可固定活性酶量、pH 或温度，并解释它如何影响酶活性。终点总量相同，不能推出整个反应过程相同。

</details>

## RP2——渗透与质量百分变化 {#rp2}

**问题与原理。**在指定条件下，外液蔗糖浓度是多少时马铃薯组织没有净质量变化？水通过部分透性膜由较高水势一侧向较低水势一侧净移动，这就是渗透（osmosis）。溶质使水势更负，活细胞内的压力也会影响水势。零净变化支持该条件下近似平衡，并不表示水分子停止移动，也不能直接说明细胞液的蔗糖浓度等于外液。

**方法选择。**切取去皮、等直径、等长度的圆柱。从至少三个马铃薯中，各随机分配一条用于 0.0、0.2、0.4、0.6、0.8 mol dm⁻³ 的每种蔗糖液。先用同样的轻柔吸干方法处理表面并称初始质量，再将每条完全浸入单独编号试管中的指定溶液并开始计时；统一液体体积和温度。经过预实验选择的固定时间，如 60 min，取出、按相同方法吸干并称终质量。另做时间序列预实验检查 60 min 是否足以达到稳定质量，不能直接假定已平衡。

**记录与分析。**记录供体马铃薯编号、浓度、初始和最终质量 / g、时长 / min。以各条初始质量为分母算百分变化，作平均百分变化—浓度图。在零点两侧的数据间插值，并加密该浓度区间。鲜质量含水，不能把变化解释成新生物量的生产。

**评价与风险控制。**吸干程度不一致会留下不同量的表面液体，过度挤压则可能损伤细胞。不同马铃薯存在差异，分析时保留供体区组。打孔器和解剖刀应在切割板上使用，远离手指切割并有教师指导。不能食用实验组织或溶液，及时擦净溢液。

<!-- task:rp2 -->
**Self-written / 自拟题 · RP2 decision**

A cylinder changes from 2.40 g to 2.28 g. Calculate its percentage mass change. A second student weighs an unblotted cylinder at the end. Predict how retained surface solution affects the measured change and explain why more replicates alone do not correct this problem.
<!-- /task:rp2 -->

<details markdown="1">
<summary>提示——分母使用初始质量</summary>

先用终值减初值，再除以初值。表面液体会增加最终读数。

</details>

<details markdown="1">
<summary>解答——RP2 判断</summary>

质量变化为 −0.12 g，百分变化为 −5.0%。残留溶液使测得的终质量偏大：失重显得较少，或增重显得较多。每次都重复这种吸干错误会保留偏差；两次称重前都应统一吸干方法。

</details>

## RP3——层析与有条件的鉴定 {#rp3}

**问题与原理。**叶片提取液是否含有可分离的色素？流动的溶剂携带分子沿纸或薄层板移动。不同色素对流动相和固定相的亲和程度不同，因而迁移距离不同。分离取决于溶剂、固定相及色素本身。只有条件可比时，相同颜色或 $R_f$ 才能支持鉴定；它们不能唯一证明化学身份。色素吸收与作用机制见[光合作用](/zh/alevel/a2-biology/photosynthesis/)。

**方法选择。**用少量教师选定的提取溶剂研磨固定质量叶片。用铅笔画基线，点少量提取液，干燥后可重复点样。将条带放入有盖层析缸，溶剂液面低于基线，展开时不扰动。溶剂前沿到达顶部之前取出，立即标记前沿。条件允许时，把已知参照物与提取液放在同一缸中展开；用独立提取和条带检查再现情况。

**记录与分析。**画出条带顺序和颜色。从基线起，以相同单位测量各条带中心与溶剂前沿的距离，记录溶剂、固定相和提取液编号。色素迁移距离除以前沿迁移距离。条带弥散时，中心位置存在不确定范围，不能靠多写小数位掩盖。

**评价与风险控制。**过大、未干的斑点会拖尾，降低分离效果；应少量多次、干燥后点样。前沿未及时标记，溶剂蒸发后就难以可靠计算。有机溶剂可能易燃、吸入有害，应按学校批准要求使用少量溶剂和通风设备或通风橱，盖好容器、远离火源、佩戴护目镜，并单独收集溶剂废液。不能用明火加热溶剂。

<!-- task:rp3 -->
**Self-written / 自拟题 · RP3 decision**

A band centre is 36 mm above the baseline and the solvent front is 60 mm above it. Calculate its Rf. Another group reports the same Rf using a different solvent. Evaluate the claim that the two bands must be the same pigment.
<!-- /task:rp3 -->

<details markdown="1">
<summary>提示——比值统一了哪一项条件</summary>

比值校正了前沿移动距离，但没有统一分离的化学条件。

</details>

<details markdown="1">
<summary>解答——RP3 判断</summary>

$R_f=0.60$，没有单位。改变溶剂会改变色素的分配与迁移。应将两份样本和已知参照在相同条件下展开；即使条带重合，也可能含有不止一种化合物，因此鉴定仍有条件限制。

</details>

## RP4——根尖压片与有丝分裂指数 {#rp4}

**问题与原理。**指定根尖区域内，有多少比例的细胞正处于有丝分裂？生长根尖含有分裂细胞，较成熟组织的细胞周期分布可能不同。染色让染色体可见，压片帮助分散重叠细胞。有丝分裂指数（mitotic index）是分裂期细胞数除以全部可计数细胞数，分母包含间期。它是一个时间截面的比例，不直接等于“每分钟分裂次数”。

**方法选择。**使用幼嫩洋葱根，按学校批准的固定、酸软化流程处理。规定处理后冲洗，切下末端 2–5 mm，放到载玻片上，加入合适的染色剂和盖玻片，隔着折叠纸巾轻轻垂直下压；不要横向推动盖玻片。先低倍找到分生区，再提高倍数计数。抽取多个独立根尖，按预定路线选择不重叠视野，不挑选“分裂特别多”的视野。

**记录与分析。**记录根尖和视野编号，以及间期、前期、中期、后期、末期细胞数；无法分类的细胞单列。计数前确定分类规则。每个根尖算一个指数，显示根尖间变异。观察绘图要有清楚结构、标注和校准比例尺，不能补画在该分辨率下并未看到的细节。

**评价与风险控制。**重叠或染色不清会使分子、分母都不确定。分裂期变长也可能使指数升高，未必表示细胞产生速度提高。酸、部分染色剂及热液会损伤眼睛和皮肤：使用教师准备的试剂、护目镜以及批准的温度和时长，热试管用夹具。切割应在板上进行，防止压碎盖玻片割伤手指，碎玻璃放入锐器容器。机制见[先修页](/zh/alevel/a2-biology/prerequisites/)和[基因表达](/zh/alevel/a2-biology/gene-expression/)。

<!-- task:rp4 -->
**Self-written / 自拟题 · RP4 decision**

A root sample contains 80 interphase cells, 10 prophase cells, 5 metaphase cells, 3 anaphase cells and 2 telophase cells. Calculate its mitotic index. Explain why selecting only a field with many visible chromosomes biases the estimate.
<!-- /task:rp4 -->

<details markdown="1">
<summary>提示——间期也属于分母</summary>

四个分裂阶段相加作分子，全部可计数细胞作分母。

</details>

<details markdown="1">
<summary>解答——RP4 判断</summary>

100 个细胞中有 20 个处于分裂期，指数为 0.20；若写百分数则为 20%。按凝缩染色体多来选择视野，会使分裂细胞被过度代表，容易高估整个区域的指数。应使用预定抽样路线和独立根尖。

</details>

## RP5——恢复期的脉搏速率 {#rp5}

**问题与原理。**固定、温和的活动结束后，脉搏怎样恢复？活动改变肌肉 ATP 需求和心血管调节；在适当条件下，脉搏可用于估计心率。在一个时段内计数，得到的是该时段平均值，实际心率可能已经逐渐下降。机制见[稳态](/zh/alevel/a2-biology/homeostasis/)和[肌肉](/zh/alevel/a2-biology/muscles/)。

**方法选择。**取得知情同意后，让参与者安静坐姿休息统一时长，检查基线是否稳定。采用教师批准的低强度活动，例如以舒适的固定节奏踏步一分钟，统一时长并保持各参与者的节奏。明确恢复期计数区间，例如 0–15、30–45、60–75、120–135 s，使用相同的腕部测脉法或核查过的传感器，保持姿势一致。不同参与者提供独立的生物观察，同一人的多个恢复时点属于配对测量，不是不同的人。

**记录与分析。**用匿名编号记录参与者，保存基线、实际活动时长、计数区间起止和原始次数，再换算 beats min⁻¹。为各参与者作恢复曲线，并汇总相对于各自基线的变化。重复实验前需充分恢复，并统一休息；比较不同活动时应随机安排次序。

**评价与风险控制。**15 s 计数混合的恢复过程较少，但多算或少算一次就会改变结果 4 beats min⁻¹。60 s 计数的计数分辨率较好，却混合了较早和较晚的恢复状态。必须自愿参与，并提供不运动的替代活动。按学校流程确认健康限制，避免极限运动；出现疼痛、眩晕或异常气促立即停止。清空地面、使用稳定台阶、消毒共享传感器。不能公开姓名，也不能根据课堂数据作医学诊断。

<!-- task:rp5 -->
**Self-written / 自拟题 · RP5 decision**

A participant has 24 beats counted during the first 15 s after activity. Calculate the estimated pulse rate. Explain one advantage and one limitation of replacing this count with a 60 s count starting at the same moment.
<!-- /task:rp5 -->

<details markdown="1">
<summary>提示——区分计数分辨率和变化中的信号</summary>

分别考虑数错一次的影响，以及人在这一分钟内怎样变化。

</details>

<details markdown="1">
<summary>解答——RP5 判断</summary>

估计值为 96 beats min⁻¹。计数 60 s 时，错一次只使结果改变 1 beats min⁻¹，而不是 4。但恢复会持续整分钟，因此测量对象不再是相同的早期恢复时段；心率逐渐下降时，所得平均值可能更低。

</details>

## RP6——用蒸腾计测吸水 {#rp6}

**问题与原理。**空气流动怎样影响带叶枝条吸水？水从叶内表面蒸发，再向外扩散，维持木质部的水分运输。蒸腾计（potometer）实际测的是**吸水速率**；储水变化和其他用水较小、条件稳定时，才可近似作为蒸腾速率的代理。它并未直接收集水蒸气。机制见[先修页](/zh/alevel/a2-biology/prerequisites/)和[植物响应](/zh/alevel/a2-biology/plant-responses/)。

**方法选择。**装置灌满水，在水下切枝，并按装置需要在水下连接，防止空气进入木质部。密封接头、检查漏气，按批准方法向已校准的毛细管引入一个气泡。比较静止空气与带防护罩风扇产生的几个实测低风速，保持光、温度和湿度可比，留出适应时间。测固定时段的位移，用储水装置复位。在多个独立枝条上重复，随机安排处理顺序，保留枝条编号；必要时测叶面积作归一化。

**记录与分析。**记录枝条编号、风速、叶面积、毛细管内半径、气泡初末位置和经过时间。吸水体积等于毛细管横截面积乘位移，再除以时间；需要时再除以叶面积。同枝条的处理响应应作为配对资料比较，不能把每个时间段当成新的植物。

**评价与风险控制。**漏点可能让空气进入或使水绕过测量路径，导致气泡不能代表吸水；偏差方向取决于漏点位置。组织储水变化也会削弱吸水与蒸腾的对应。切割远离手指，小心毛细玻璃；过紧玻璃接头由教师安装。水远离电源插座和风扇，擦净溢液并固定支架。

<!-- task:rp6 -->
**Self-written / 自拟题 · RP6 decision**

A bubble moves 15 mm in 5 min along a capillary of internal radius 0.20 mm. Calculate the water-uptake rate in mm³ min⁻¹. Explain why the result should not be labelled an exact measurement of water lost by transpiration.
<!-- /task:rp6 -->

<details markdown="1">
<summary>提示——位移是长度，不是体积</summary>

先乘圆形横截面积，再除以时间。

</details>

<details markdown="1">
<summary>解答——RP6 判断</summary>

$$\text{rate}=\frac{\pi(0.20)^2\times15}{5}=0.377\ \mathrm{mm^3\,min^{-1}}.$$

测到的是进入枝条的水。其中一部分可能改变组织储水量或参与代谢；条件变化时，吸水还可能滞后于失水。只有这些差别及漏气可忽略时，才可近似估计蒸腾。

</details>

## RP7——限制因素与净光合 {#rp7}

**问题与原理。**光强怎样影响水生植物产氧？光为光合作用供能；高光强时，其他因素可能成为限制。植物呼吸也消耗氧，因此收集到的氧反映净交换。曲线平台本身不能辨认究竟是哪一项限制。机制见[光合作用](/zh/alevel/a2-biology/photosynthesis/)。

**方法选择。**采用大小可比、健康的获准水生植物枝条和固定碳酸氢盐溶液。设置至少五个实测光照水平，需要时加入黑暗基线。光照计比距离更直接；$1/d^2$ 只是在近似点光源、反射等影响较小条件下的估计。用 LED 与控温水浴减少升温，维持温度和溶液组成。平衡后，在预实验选定的固定时段，如 5 min，使用合适的校准装置收集氧气体积。对独立枝条重复，并随机安排处理；如果每枝都接受全部水平，保留枝条编号。

**记录与分析。**记录光强及仪器单位、温度、枝条大小、经过时间和氧气体积。计算净产氧速率，作速率—光强图。根据数据和任务选择合适拟合趋势，不自动逐点连接所有波动。若数气泡，必须说明“气泡体积相近”这一未必成立的假设；可行时优先测气体体积。

**评价与风险控制。**部分氧溶于水，开始逸出的气体未必等于最初产生的全部氧。应先平衡并维持可比收集条件。电灯远离水，防止热灯泡烫伤，小心植物切口与玻璃端部；不要将水族植物或培养水排入自然水域。

<!-- task:rp7 -->
**Self-written / 自拟题 · RP7 decision**

The oxygen-production rate plateaus at high light intensity. Design a comparison to test whether carbon dioxide availability is limiting at that plateau. State one condition to control and one reason why the plateau alone is insufficient evidence.
<!-- /task:rp7 -->

<details markdown="1">
<summary>提示——光强不变时进行干预</summary>

在平台对应光强下改变二氧化碳供给，并与原条件比较。

</details>

<details markdown="1">
<summary>解答——RP7 判断</summary>

维持相同高光强和温度，在原二氧化碳供给及较高溶解二氧化碳供给下比较有独立重复的枝条，同时使 pH 可比并记录。速率增加支持原条件受二氧化碳限制。平台也可能来自温度、生理容量或测量上限；改变碳酸氢盐还可能改变 pH，因此必须处理这一替代解释。

</details>

## RP8——呼吸与气体变化的含义 {#rp8}

**问题与原理。**温度怎样影响萌发种子的耗氧？密闭呼吸计在温度和压力稳定时，用吸收剂除去生成的 CO₂，气体体积减小才可用于估计耗氧。没有吸收剂时，净变化同时包含耗氧和产二氧化碳；净变化为零不等于没有呼吸。气体平衡和 RQ 见[呼吸作用](/zh/alevel/a2-biology/respiration/)。

**方法选择。**使用同种、同萌发阶段、等质量的种子，在独立呼吸计中比较预实验确定的温度，例如 15、20、25、30°C。用可靠隔层使 CO₂ 吸收剂不接触生物材料。另设占据体积相近的惰性玻璃珠装置，检查物理压力和温度变化。按学校装置规定，在与外界连通状态下水浴平衡，然后封闭；在短时、氧充足的测量期间定时记录毛细管位置。每个温度使用独立准备的种子批次，先查漏；不能长期密闭至材料缺氧。

**记录与分析。**记录质量、温度、时间、毛细管内半径、位移，并规定正负方向。用相同单位和方向约定扣除可比的对照漂移。求线性体积变化斜率，再换算单位质量、单位时间耗氧量。结合无吸收剂装置计算 RQ 时，必须保证材料和条件可比，而且耗氧估计不为零。

**评价与风险控制。**即使没有呼吸，温度变化也能让气体膨胀或收缩；平衡温度和设置对照可处理这一问题。漏气会削弱读数解释。碱石灰或碱液等 CO₂ 吸收剂可能有腐蚀性，由教师处理少量试剂，佩戴护目镜并遵循溢漏处理流程。防止吸收剂接触生物和皮肤，固定玻璃装置，使用安全水浴温度。

<!-- task:rp8 -->
**Self-written / 自拟题 · RP8 decision**

A sealed apparatus without a carbon dioxide absorbent shows no net gas-volume change. A matched apparatus with absorbent shows a decrease. Explain how both observations can be consistent with respiration. Give one physical control needed before using the decrease to estimate oxygen uptake.
<!-- /task:rp8 -->

<details markdown="1">
<summary>提示——分别追踪两种气体</summary>

分别考虑气体空间中的氧被消耗和二氧化碳进入。

</details>

<details markdown="1">
<summary>解答——RP8 判断</summary>

没有吸收剂时，耗氧与产二氧化碳体积相等可以相互抵消。有吸收剂时，生成的 CO₂ 被移除，显出耗氧带来的体积减小。应恒温并设匹配惰性对照检查物理漂移，或验证装置密封。解释要求条件匹配；这些读数本身不能唯一辨认呼吸底物。

</details>

## RP9——竞争与接受密度处理的单位 {#rp9}

**问题与原理。**每盆资源供给固定时，增加密度是否降低单株生长？竞争发生于生物使用共同的限制性资源时。密度增加可能减少每株可用资源，但每盆总生物量仍可能增加；两者是不同的因变量。机制见[生态](/zh/alevel/a2-biology/ecology/)和[能量与生产](/zh/alevel/a2-biology/energy-production/)。

**方法选择。**将独立花盆随机分到三个密度，每个密度至少四盆，例如每盆 2、6、12 株大小相近的已萌发幼苗。花盆、土壤量、每盆水和营养供给相同，种子同批、初始阶段相近。若改成每株供水相同，就同时改变了每盆资源总量，回答的是另一个问题。随机安排盆的位置，并按计划轮换位置减少位置影响，但保留盆编号。观察预实验选定的固定时长，例如 14 天，记录初末数量与生长。

**记录与分析。**记录盆编号、指定密度、存活数、单株茎长和最终干质量。用教师控制的干燥设备烘至恒重，按相同方式冷却、复称。先计算每盆均值和总干质量，再比较独立花盆。只报告存活者会隐藏死亡，故应另报存活情况并说明分母。

**评价与风险控制。**植株变矮本身不能辨认竞争的是光、水还是矿质元素；后续资源干预可区分机制。同盆植物不相互独立。使用干净商业培养基，覆盖皮肤伤口，操作后洗手，避免吸入干燥堆肥粉尘，发霉培养物交教师封存处理。热干燥托盘由教师操作，不能把材质不明的塑料放进烘箱。

<!-- task:rp9 -->
**Self-written / 自拟题 · RP9 decision**

A student uses one pot at each of three densities and measures ten leaves per pot. The student claims there are ten independent treatment replicates at each density. Explain the problem and redesign the replication. State why mean dry mass per seedling and total dry mass per pot may lead to different descriptions of the result.
<!-- /task:rp9 -->

<details markdown="1">
<summary>提示——密度是分配给谁的</summary>

同盆所有叶片共享土壤和处理环境。

</details>

<details markdown="1">
<summary>解答——RP9 判断</summary>

密度分配给整盆，叶片是子样本，不能估计独立处理花盆之间的变异。每个密度应随机分配多个独立花盆，先求每盆结果，再比较盆级指标。更多幼苗可以使总质量更大，同时每株更小；必须说清比较对象和分母。

</details>

## RP10——生长方向不等于伸长量 {#rp10}

**问题与原理。**相对重力的初始朝向是否影响根、茎的生长方向？向性（tropism）是相对刺激方向的定向生长。两侧伸长不等导致弯曲，而根、茎对 IAA 的响应可能不同。只测长度不能确定方向。机制见[植物响应](/zh/alevel/a2-biology/plant-responses/)。

**方法选择。**在湿纸上萌发大小相近的幼苗，将独立培养皿随机分配为初始水平或垂直，在暗箱中保持水分和温度可比。标记根、茎初始轴线与重力方向。在开始和预实验选择的时间后，例如 24 h，从同一相机方向拍摄并附比例尺。短暂观察不能造成不同组接受不同的定向光。每种朝向用多个独立皿，皿内幼苗属于子样本。若有慢速回转器可作比较，但它改变的是生物感受到的重力方向随时间的分布，并没有消除重力。

**记录与分析。**记录培养皿和幼苗编号、器官、初末轴线、时间、长度与带正负号的角度变化，事先定义正负方向。根与茎分别比较，使用皿级汇总。均匀伸长改变不等于弯曲；照片必须保留参考轴和朝向。

**评价与风险控制。**光照或干燥不一致会混淆朝向效应。黑暗有助于单独研究重力，但不会自动使其他条件都相同。潮湿培养装置远离电器，接触幼苗后洗手，发霉材料封存后由教师处置。固定旋转装置，手指远离运动部件。

<!-- task:rp10 -->
**Self-written / 自拟题 · RP10 decision**

Horizontal seedlings are placed beside a window. Their shoots bend upwards and towards the window. Explain why this does not isolate a response to gravity. Propose a modified comparison and a measurement that distinguishes direction from growth amount.
<!-- /task:rp10 -->

<details markdown="1">
<summary>提示——分开两个方向性刺激</summary>

改变相对重力的朝向时，保持光环境可比。

</details>

<details markdown="1">
<summary>解答——RP10 判断</summary>

光方向和重力都可能影响弯曲。可在匹配的黑暗条件下，用独立培养皿比较初始水平和垂直幼苗。除了长度变化，还要相对初始轴线和重力方向记录带正负号的角度变化。不能仅由长度增加推断向性。

</details>

## 独立设计与诊断 {#independent-design}

<!-- task:design-transfer -->
**Self-written / 自拟题 · Independent transfer**

A student claims that plants grown in moving air develop a permanently higher rate of water uptake. Design an investigation that distinguishes a developmental effect of growth conditions from an immediate effect of air movement during measurement. Specify allocation, experimental units, measurements, controls, a record table and a limitation. Do not perform the investigation until the teacher approves the procedure.
<!-- /task:design-transfer -->

<details markdown="1">
<summary>提示——把生长处理与测量条件分开</summary>

植物可先在不同环境中生长，随后在共同环境测量。思考叶面积和适应时间怎样影响解释。

</details>

<details markdown="1">
<summary>解答——独立迁移</summary>

将大小相近的植物随机分到流动和静止空气的生长处理，设置独立处理环境，使光、水分供应、温度和湿度可比。如果整个生长箱接受处理，应重复生长箱，而不只是增加同箱植物。生长结束后，在相同测量风速和其他环境条件下，经过规定适应时间测吸水。记录生长箱和植物编号、生长处理、叶面积、毛细管半径、位移和时间，计算每单位时间吸水量，必要时再按叶面积归一化。比较独立处理单位并显示变异。如再加第二个测量风速并随机安排顺序，也可检验即时响应。

共同测量条件下仍有差异，支持处理效应在该测量时段持续存在，却不能证明永久性，也不能直接认定是解剖结构造成；水分状态等残留效应仍可能存在。沿用 RP6 风险控制、检查漏气，避免对具体机制作超出证据的因果论断。

</details>

| 如果你的回答…… | 怎样修复推理 |
| --- | --- |
| 只写“多重复以提高准确度” | 写明独立单位、重复估计哪种变异，以及哪些偏差仍存在 |
| 只列“温度相同”而不解释 | 联系本方法中的酶活性、气体体积或失水机制 |
| 把代理指标直接称为生物过程 | 明确实际测量量，以及从它推断过程所需的条件 |
| 提出改进却没有说明作用 | 说明改进针对哪个读数或替代解释 |

<!-- task:design-retry -->
**Self-written / 自拟题 · Diagnostic retry**

An enzyme assay is repeated ten times with the same leaking gas syringe. Results have a small spread. Explain whether this establishes accuracy, and propose one check that addresses the main problem.
<!-- /task:design-retry -->

<details markdown="1">
<summary>提示——一致不等于接近参考值</summary>

每次实验都可能重复出现同一种气体损失。

</details>

<details markdown="1">
<summary>解答——诊断重试</summary>

离散程度小支持该条件下精密度较高，不证明准确。重复漏气可使收集量持续偏低。先检查注射器和接头，修复或更换漏点，并按批准装置用已知气体体积检查回收情况，再重复生物测量。

</details>

## 来源与下一步 {#sources}

范围：OxfordAQA 9610，大纲 v5.1 §6.1 RP1–10；见[官方资格页](https://www.oxfordaqa.com/qualification/international-as-and-a-level-biology-9610/)及 [v5.1 大纲](https://www.oxfordaqa.com/wp-content/uploads/2022/08/oxfordaqa-a-level-biology-specification.pdf)。课程研究记录了资格页下载入口的另一版本；目标考季应向考点核实，不能按 URL 年份判断正文版本。

方法深度参考了实际读过的 **9610 BL05 January 2025，MS v1.0 Final，Q6.2，p.15**，以及 **June 2025，MS v1.0 Final，Q5.2，p.13；Q6.2，p.14**。这些是来源记录，不是本页转载的考试任务。本页全部操作建议、示范记录和练习均由作者编写，解答不称官方评分标准；不使用 January 缺失 Figure 7 或 June 有争议的相对生长率数据。

接着学习[数据技能](/zh/alevel/a2-biology/data-skills/)，再到[综合写作](/zh/alevel/a2-biology/synoptic-writing/)把方法与限制写成清楚的英文论述。
