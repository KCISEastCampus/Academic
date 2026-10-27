---
title: 周期性——解释趋势的转折
layout: subjects
mathjax: true
grade: as
subject: as-chemistry
lang: zh-CN
translation_of: /alevel/as-chemistry/periodicity/
permalink: /zh/alevel/as-chemistry/periodicity/
toc_headings: h2, h3
study_page: true
reading_layout: true
---

<h2 id="start-here">三种趋势为什么形状不同？</h2>

Na–Ar 的第一电离能总体上升，原子大小总体减小，熔点却先上升再急降。“质子更多”不能独自解释三者。我们先辨认每次比较的粒子与过程，再选择相应模型。

先修见[电子排布](/zh/alevel/as-chemistry/atomic-structure/)及[结构与吸引](/zh/alevel/as-chemistry/structure-and-forces/)。范围为 OxfordAQA 9620 AS §3.2.1：s/p/d/f 区分类及第三周期元素性质；第三周期氧化物／氯化物反应是另一项 A2 内容。全部任务与检查依据自拟，不赋官方分值。

<h2 id="classification">从电子结构读出位置</h2>

元素按**质子数（proton number）**排序，不按相对原子质量。中性原子的质子数也给出电子数。**周期（period）**对应最高的已占据主电子层；**区（block）**对应该区域依次填充的亚层：左侧 s，右侧 p，中部 d，通常另排下方两行的是 f。下方两行属于第6、7周期，不是额外的周期。

例如 Mg，Z = 12，为 [Ne]3s²：最高主层为3，因此第3周期、s区。Al，Z = 13，为 [Ne]3s²3p¹，属于第3周期、p区。Fe 的 [Ar]3d⁶4s² 属第4周期、d区；若只看最高 n 的4s²，会错判为s区。He 为1s²，是电子排布上的s区例外，但因满层及其化学性质放在稀有气体一列。不必背出所有f区排布才能辨认该区域。

<div class="lesson-check" markdown="1">
<h3 id="classify-check">定位一个陌生标记</h3>
**自拟题。**
<!-- task:classify-check -->
Neutral atoms A, B and C have configurations [Ne]3s2 3p5, [Ar]4s2 and [Ar]3d6 4s2. Give each period and block, identify A using its electron count, and explain why C is not s block. A diagram labels the detached lower rows “periods 8 and 9”. Correct the label and state their block. Explain why sorting by relative atomic mass could be a different rule from sorting by proton number.
<!-- /task:classify-check -->
<details markdown="1"><summary>提示</summary>
周期看最高占据主层，区看该区域填充的亚层；[Ne]代表十个电子。
</details>
<details markdown="1"><summary>解答与检查</summary>
A 有17电子，是Cl：第3周期、p区。B为第4周期、s区；C为第4周期、d区，因为该系列填充3d，虽然4s也占据。下方f区两行属于第6、7周期。相对原子质量是按同位素丰度加权的质量量度，质子数计数核电荷并定义元素，两者不同，排序不必相同。若混淆周期与区，回看[位置](#classification)，再做[重试](#retry-periodicity)。
</details>
</div>

<h2 id="radius">同周期增加质子，不另加最外主层</h2>

Na–Ar 的电子进入第3主层，核内质子数增加。内层屏蔽大体相似，同一外层新增的电子不能完全屏蔽增加的核电荷。净吸引加强，外层电子分布向核靠拢，因此按可比定义测量的原子半径总体减小。不能说屏蔽恰为零，也不能说每换一个元素就增加一层。

原子半径是依模型定义的量，不是硬球边界。共价半径常取适当成键原子间距的一半；金属半径、van der Waals半径使用不同接触方式。Ar 在此系列中没有普通可比的共价半径，不能把表中 Ar 的范德华半径硬接到 Na–Cl 共价半径之后，解释成同一种测量突然反转。吸引模型可讨论整个 Na–Ar，但数值比较必须保留定义。

<h2 id="ionisation">同时解释总体上升和两次下降</h2>

第一电离从气态原子移走一个电子，形成气态1+离子：

$$\mathrm{X(g)\rightarrow X^+(g)+e^-}$$

同一主层、相近内层屏蔽下，Na→Ar 核吸引增强，电子总体更难移走。只说“电子更多所以能量更大”不够；还要看电子在哪里、彼此怎样作用。

![Na–Ar 第一电离能的构造近似练习记录：总体上升，但Mg到Al、P到S分别下降。图中标出全部元素与能量值，连线仅引导读取离散元素，不表示存在分数元素。](/assets/img/chemistry-as-periodicity-ionisation.svg){: width="680" height="360" }

图中 kJ mol−1 练习值为构造的粗略记录：Na 500、Mg 740、Al 580、Si 790、P 1010、S 1000、Cl 1250、Ar 1520。它们表达化学模式，不是新实验数据或建议的参考精度；连线只引导离散点之间的阅读。

<div class="worked-example" markdown="1">
**完整解释示范——自拟。** Al质子更多，为何第一电离能反而低于Mg？Mg为[Ne]3s²，Al为[Ne]3s²3p¹。Al移走的3p电子能量更高、屏蔽更多，尽管核多一个质子，仍较容易移走。这里换的是亚层，不是新增主层；两者均为n=3。说Al多出第四层与其排布矛盾。

P/S是另一种转折。P的3p³让三个p轨道各单独占据；S的3p⁴使其中一个轨道出现电子对。成对电子间排斥使S较容易移走一个电子。两者移走的均为3p电子，不能照抄Mg/Al的“新亚层”解释。
</div>

<div class="lesson-check" markdown="1">
<h3 id="trend-check">解释一个转折点</h3>
**自拟题，使用图中的构造记录。**
<!-- task:trend-check -->
Sketch the three 3p orbitals for P and S using arrows to represent electrons. Explain why S has a lower first ionisation energy than P despite its higher proton number. Then explain why Cl is above S and why the general atomic-radius trend across Na–Cl is downward. A student calls both Mg→Al and P→S “starting a new shell”. Repair both statements using the relevant configurations.
<!-- /task:trend-check -->
<details markdown="1"><summary>提示</summary>
等能p轨道先分别占据再成对；两个下降需要不同解释。
</details>
<details markdown="1"><summary>解答与检查</summary>
P：[↑][↑][↑]；S：[↑↓][↑][↑]，哪个轨道成对可以等价选择。配对排斥使S较容易失去一个电子，并非从P到S才开始3p。Cl也有成对p电子，但相近屏蔽下更高核电荷使移走电子比S困难。Na–Cl更强吸引使同一主层靠近核。Mg→Al从移走3s变为能量更高、屏蔽更多的3p；P→S则是在3p内改变配对。两者都没新增主层。若解释只剩“质子更多”，用[重试](#retry-periodicity)补上相竞争的电子因素。
</details>
</div>

<h2 id="melting">先判断熔化时要分开什么</h2>

熔化不是让孤立原子电离。沿周期，结构及熔化时破坏的吸引都会改变：

| 元素／指定形态 | 结构 | 近似熔点 / K |
| --- | --- | --- |
| Na | 巨型金属结构 | 371 |
| Mg | 巨型金属结构 | 922 |
| Al | 巨型金属结构 | 933 |
| Si | 巨型共价结构 | 1683 |
| P，白磷P4 | 简单分子结构 | 317 |
| S，单斜硫S8 | 简单分子结构 | 392 |
| Cl，Cl2 | 简单分子结构 | 172 |
| Ar | 单原子 | 84 |

近似参考值与指定形态来自 Lister/Renshaw（2016）p.150。不同同素异形体结构不同，不能写“所有磷均在317 K熔化”。

Na→Al 每原子提供更多离域电子，正离子实也更小／电荷更大，对离域电子吸引总体增强，因此熔化需更多能量；不是中性分子间的吸引。Si则有共价网络，熔化须破坏相当部分网络成键，能量需求很高。

白磷、硫、氯熔化主要分开分子，分子内多数P–P、S–S、Cl–Cl键保留。非极性分子间是London dispersion forces（色散力）；较大、电子云更易极化的S8比分子P4、Cl2有更强色散吸引，因此此比较中S8熔点较高。Ar为单独原子，色散吸引弱，在这里熔点最低。分子形状／堆积也有影响，所以电子数是有依据的比较，不是精确熔点公式。

<div class="lesson-check" markdown="1">
<h3 id="structure-check">解释熔点记录的变化</h3>
**自拟题，参考值见上表。**
<!-- task:structure-check -->
Explain the rise Na→Al, the high melting point of Si, and the sharp fall Si→white P4 using the particles and attractions involved. Explain why S8 melts above Cl2 although both are simple molecular. Identify which of these comparisons would be incorrectly described as “breaking stronger covalent bonds inside the molecules”, and explain Ar's low value. State why the phosphorus allotrope must be specified.
<!-- /task:structure-check -->
<details markdown="1"><summary>提示</summary>
区分金属吸引、共价网络、完整分子或原子之间的吸引。
</details>
<details markdown="1"><summary>解答与检查</summary>
Na→Al每原子离域电子更多，正离子实更小／电荷更大，金属吸引增强。Si需破坏共价网络；白磷P4只有分子间较弱吸引，熔化无需拆开Si式网络。S8比Cl2电子更多、电子云更易极化，分子间色散力更强。把S8/Cl2熔点差说成分子内共价键更强是错的，熔化时这些键大体保留。Ar是单原子、色散吸引弱。磷的同素异形体结构不同，数值只适用于指定形态。若每一种情况都用了同一个“键”，做[结构重试](#retry-structure)。
</details>
</div>

<h2 id="retry-periodicity">换一种说法，重建解释</h2>

先收起之前答案；重试与综合任务均自拟。

<div class="lesson-check" markdown="1">
<!-- task:retry-periodicity -->
A student says: “Al is in period 4 because 3p is an extra shell; S has lower first ionisation energy than P because S begins that 3p subshell. Atomic radius increases Na→Cl because there are more electrons.” Correct all three statements with configurations and a causal explanation. Then classify [Kr]5s1 by period/block and explain why its outer electron need not be held as strongly as an electron in shell 4 merely because its nucleus contains more protons.
<!-- /task:retry-periodicity -->
<details markdown="1"><summary>提示</summary>
把n与s/p分开检查，再比较距离、屏蔽与核吸引。
</details>
<details markdown="1"><summary>解答与检查</summary>
Al仍在第3周期，3s/3p共享n=3。P为3p³，S为3p⁴，下降来自成对排斥，不是开始填3p。Na–Cl电子进入同一主层，核电荷增加、内层屏蔽相近，吸引增强，可比半径减小。[Kr]5s¹为第5周期、s区；与适当的上方同族元素比较，新外层更远、屏蔽更多，可以超过核电荷增加的作用。纠错必须指出电子安排如何变化，不能只是把每个箭头反向。
</details>
</div>

<h3 id="retry-structure">用性质检验结构解释</h3>

<div class="lesson-check" markdown="1">
<!-- task:retry-structure -->
A student draws separate Si4 molecules to explain elemental silicon's high melting point, and says white P4 melts by breaking every P–P bond. Repair the two models and explain the Si/P4 melting difference. Would replacing white phosphorus with a different allotrope leave that argument's numerical melting value automatically valid? Explain.
<!-- /task:retry-structure -->
<details markdown="1"><summary>提示</summary>
先判断基本实体是有限分子还是延伸网络，再命名被破坏的吸引。
</details>
<details markdown="1"><summary>解答与检查</summary>
单质Si是巨型共价网络，不是独立Si4分子。白磷由P4分子组成，熔化主要克服分子间吸引。网络破坏比分子分开需更多能量，因此熔点差很大。换同素异形体必须核对自己的结构／数值，不能因为也叫磷就沿用317 K。若仍把两者都当分子，先在纸上分别画小段网络与两个分开的P4单元。
</details>
</div>

<h2 id="mixed-check">稍后重新面对证据</h2>

<div class="lesson-check" markdown="1">
**自拟题；学过另一个主题后，不看前面答案再做。**
<!-- task:mixed-check -->
A Period 3 element X has [Ne]3s2 3p1. Identify its block, compare its radius and first ionisation energy with Mg, and explain why the two comparisons need different electron arguments. Compare its melting point with Si and explain the structural reason. A list mixes Na–Cl covalent radii with an Ar van der Waals radius. Can that list alone prove a reversal of a single radius trend at Ar? Justify your answer in English.
<!-- /task:mixed-check -->
<details markdown="1"><summary>提示</summary>
用排布识别元素，但半径、移走电子、熔化要分成不同过程。
</details>
<details markdown="1"><summary>解答与检查</summary>
X为Al，p区；同一主层内核吸引增强，可比半径小于Mg；但Al移走的3p电子比Mg的3s能量高／屏蔽多，因此第一电离能较低。Al熔点低于Si，分别是金属结构与巨型共价网络。半径表在Ar处换了定义，不能仅据此证明同一测量量发生反转。记录漏掉哪条因果链，回[半径](#radius)、[电离](#ionisation)或[熔化](#melting)，关闭答案后再试。
</details>
</div>

下一步比较[第2族](/zh/alevel/as-chemistry/group-2/)或[卤素](/zh/alevel/as-chemistry/halogens/)；[返回课程](/zh/alevel/as-chemistry/)。

<h2 id="sources">范围与来源</h2>

[OxfordAQA 9620大纲Version 5.3](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-chemistry-specification.pdf)，p.25 §3.2.1。教材：Lister/Renshaw，*International A Level Chemistry*（OUP，2016），pp.147–148、150–154。电离图为构造近似练习数据的原创图，熔点表注明教材近似来源。全部问题、反馈与重试自拟，不是复制官方试题或评分标准。
