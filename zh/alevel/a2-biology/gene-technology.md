---
title: "基因技术：取得、扩增与表达DNA"
layout: subjects
mathjax: true
grade: a2
subject: a2-biology
study_page: true
toc_headings: h2
lang: zh-CN
permalink: /zh/alevel/a2-biology/gene-technology/
translation_of: /alevel/a2-biology/gene-technology/
---

[BL04 · Control](/zh/alevel/a2-biology/paper-4/) · 3.4.10

## 先区分目标，再选择方法 {#start}

**重组 DNA（recombinant DNA）**把不同来源的 DNA 片段组合起来。取得序列、扩增、转入及表达是不同的成果。本页沿这条链，逐步判断哪些证据支持哪些结论。先修见[DNA 与蛋白质合成](/zh/alevel/a2-biology/prerequisites/#information)及[基因表达调控](/zh/alevel/a2-biology/gene-expression/)。

<!-- task:BL04-G0 -->
**G0 · Self-written / 自拟题**

Distinguish a DNA copy, an mRNA molecule and a protein product. Which of these does an ordinary PCR reaction directly amplify?
<!-- /task:BL04-G0 -->

<details markdown="1">
<summary>G0 · 检查</summary>

普通 PCR 扩增 DNA，不直接制造 mRNA 或蛋白。RNA 需先逆转录，才能进入通常的 DNA PCR；制造蛋白还需要合适系统中的表达过程。

</details>

## 获得 DNA 片段的三种途径 {#obtain}

**由 mRNA 出发：**从表达目标基因的细胞分离成熟 mRNA。**逆转录酶（reverse transcriptase）**以其为模板制造互补 DNA，即 cDNA；经适当准备后，DNA 聚合酶可合成第二条链。成熟真核 mRNA 已剪接，所以对应编码 cDNA 不含原基因组 DNA 的内含子，对不能完成相同真核剪接的细菌宿主尤其有用。

**由 DNA 出发：****限制性内切酶（restriction endonuclease）**识别特定序列并切开糖–磷酸骨架，有些错位切割形成互补的**黏性末端（sticky ends）**，有些形成平末端。合适位点须位于目标片段两侧且不破坏必要序列；用相容酶处理插入片段和载体可得到可匹配末端，不能认为所有限制酶产生一样的末端。

**人工合成：**已知的设计序列可通过化学和酶促方法组装，不必先取得其 mRNA；但仍须验证序列准确，以及是否适用于目标表达系统。

遗传密码近乎通用，所以同一密码子在不同生物中通常指定同一氨基酸，这使转移有用，却不保证每个宿主都能正确转录、剪接、折叠或加工。宿主相容的启动子及其他控制序列仍不可缺。

## PCR：在细胞外复制 DNA {#pcr}

PCR 需要模板 DNA、**两条引物（primers）**、游离 DNA 核苷酸、耐热 DNA 聚合酶及含所需离子的合适缓冲液。两条引物位于目标区域两端，分别结合相反模板链，3′ 端朝向待复制区域。DNA 聚合酶从引物 3′ 端延伸，以 **5′ 到 3′** 方向合成新链，不能无引物凭空起始。

| 阶段 | 实际变化 | 不发生什么 |
| --- | --- | --- |
| 变性，例如约 95°C | 破坏两链配对碱基间氢键，使链分开 | 不是把 DNA 骨架故意切成单核苷酸 |
| 退火，较低且依引物而定的温度 | 引物与互补目标序列配对 | 不能假定所有反应都以 55°C 为最适 |
| 延伸，适用聚合酶常用接近 72°C | 聚合酶以磷酸二酯键连接核苷酸 | 不是把两条旧链接回去 |

这些温度只示范一种常见设置，不是适用于每种聚合酶和引物的固定配方。退火温度太低可增加非特异结合，太高可使正确结合也不足。应比较一组温度的目标产量与特异性，再在有希望的区域细分间隔；已测温度中最好不等于精确最适。

![PCR示意标出反平行模板的5′与3′端，两条引物位于相反两端，新链合成箭头向目标区域内；另一流程分别列出插入、转化、筛选、DNA验证和表达检测。](/assets/images/a2-biology/bl04-gene-technology.svg)

*自绘示意，新链箭头表示合成方向，不是整个 DNA 分子移动。*

新 DNA 在后续循环又成为模板，从而快速扩增。若理想化地每轮完全加倍，n 轮后目标分子数为：

$$N_n=N_0\,2^n.$$

这是可扩增目标拷贝的理想模型，不保证真实产量，也不保证早期产物全为精确长度。试剂会受限，酶活性可下降，反应会进入平台。特异引物与产物分析可辅助识别目标，但长度正确的条带不是完整的序列验证。

## 细胞内扩增与表达 {#recombinant}

**载体（vector）**携带 DNA 进入宿主并允许其维持或复制；质粒载体通常含复制起点和可选择标记。建立适当表达构建体时：

1. 取得目标 DNA，在上游提供宿主相容的**启动子（promoter）**、下游提供**转录终止区（terminator）**，其他翻译信号也须适用。
2. 在合适位置切开插入片段和载体，形成相容末端。互补黏性末端先配对，使骨架相互定位。
3. **DNA 连接酶（ligase）**形成磷酸二酯键，封合糖–磷酸骨架。互补配对负责末端对齐，连接酶不是制造碱基间氢键的酶。
4. 将构建体引入宿主，称**转化（transformation）**；只有部分细胞成功摄取。
5. 选择或筛查候选细胞，验证 DNA 构建体，培养确认的细胞使 DNA 复制，再分别检测表达和产物功能。

转录终止区结束转录，不能与结束翻译的终止密码子混淆；复制起点让质粒复制，启动子让转录起始。可选择标记指出摄取载体等某种性质，不自动证明目标基因序列正确。

**路径示范 · Self-written / 自拟题：**要在细菌中取得人蛋白，可由编码 cDNA 而非含未处理内含子的基因出发，按正确方向与相容控制区组装并验证插入；之后测蛋白及活性。DNA 正确不保证宿主能作每一种所需修饰，因此选择宿主本身也是生物学设计的一部分。

<!-- task:BL04-G1 -->
**G1 · Self-written / 自拟题**

A human protein-coding gene contains introns. Complete a route to a DNA coding sequence suitable for a bacterial expression construct: isolate mature ____ from a cell expressing the gene → use ____ to make cDNA → make the second DNA strand → add compatible ____ and ____ regions in a suitable vector. Explain why the coding sequence alone is insufficient.
<!-- /task:BL04-G1 -->

<details markdown="1">
<summary>G1 · 提示</summary>

成熟转录本提供无内含子的编码模板，但宿主还需要转录指令。

</details>

<details markdown="1">
<summary>G1 · 解释</summary>

mRNA → reverse transcriptase → 相容的 promoter 和 terminator。启动子让宿主 RNA 聚合酶开始转录，终止区规定转录终点；还须有适当翻译信号、方向和阅读框。无内含子解决的是剪接问题，不会自动解决全部表达和蛋白加工问题。

</details>

## 计算与对照 {#evidence}

<!-- task:BL04-G2 -->
**G2 · Self-written / 自拟题**

A constructed PCR calculation starts with 12 double-stranded target molecules and assumes perfect doubling in each of 8 cycles. Calculate the final number. Each cycle takes 20 s for denaturation, 25 s for annealing and 40 s for extension; a final extension takes 5 min. Calculate the total programmed time, excluding heating/cooling transitions. State two reasons actual target yield may be lower than the ideal estimate.
<!-- /task:BL04-G2 -->

<details markdown="1">
<summary>G2 · 提示</summary>

每轮三步时间都相加，额外末次延伸只加一次。理想加倍与实测产量分开处理。

</details>

<details markdown="1">
<summary>G2 · 解答</summary>

$$N_8=12\times2^8=3072.$$

$$t=8(20+25+40)+5\times60=980\ \text{s}=16\ \text{min}\ 20\ \text{s}.$$

引物退火不完全、抑制物、模板损伤、酶活性下降或核苷酸不足等都可降低产量。题给时间不计升降温，真实仪器运行可能更久；分子数也是理想模型，并非实测。

</details>

<!-- task:BL04-gene-technology-data -->

| Reaction | Product at expected target size | Additional products |
| --- | --- | --- |
| Positive-control DNA | Present | Absent |
| No-template control | Present | Absent |
| Sample DNA | Present | Absent |

<!-- /task:BL04-gene-technology-data -->

<!-- task:BL04-G3 -->
**G3 · Self-written / 自拟题**

The table shows constructed PCR observations. Evaluate the claim that the sample definitely contained the target before testing. Explain what the positive control and no-template control test, and propose a response to the result.
<!-- /task:BL04-G3 -->

<details markdown="1">
<summary>G3 · 提示</summary>

未加入模板的反应不应产生目标。区分“能成功扩增”与污染可能模拟的阳性。

</details>

<details markdown="1">
<summary>G3 · 解释</summary>

阳性对照说明这些条件下已知目标可以扩增。无模板对照用于发现污染或非预期扩增，它也出现目标长度产物，使样本结果不可靠：污染可以解释样本条带，不能证明检测前样本已有目标。应寻找污染来源，准备洁净试剂并重做合适对照，再解释样本；序列特异确认还能区分真正目标与同长度的非特异产物。

</details>

<!-- task:BL04-G4 -->
**G4 · Self-written / 自拟题**

A plasmid contains an antibiotic-resistance marker and a separate reporter gene. The intended insertion site lies inside the reporter. A colony survives the antibiotic and has no reporter activity. Explain what each observation supports, why neither proves that the correct target protein is produced, and give the next DNA-level and protein-level checks.
<!-- /task:BL04-G4 -->

<details markdown="1">
<summary>G4 · 提示</summary>

选择说明某条件下存活，筛查提供插入候选，验证和表达还需要下一层证据。

</details>

<details markdown="1">
<summary>G4 · 解释</summary>

抗生素下存活支持抗性标记有功能并可能摄取了质粒。报告基因失活符合插入破坏，但错误插入或报告基因本身突变也能如此。可用跨插入片段 PCR 再测序，验证身份、方向和阅读框；还须检测目标蛋白及生物活性，确认表达和功能。标记本身两者都不能证明。这是概念分析，不是要求在无监督设施外培养改造生物。

</details>

## 应用评价与重试 {#retry}

技术成功有多个层级：序列存在、产物形成、功能正确、生物在相关条件下表现适当，以及结果对人或生态真正有意义。财务与伦理评价要指出谁获益、谁承担成本、有哪些替代方案。

<!-- task:BL04-G5 -->
**G5 · Self-written / 自拟题 — retry**

A genetically modified crop produces more of a dietary precursor in laboratory plants. A company claims this alone proves that introducing it will improve population health. Evaluate the claim using a mechanism, an experimental requirement and an economic or social condition.
<!-- /task:BL04-G5 -->

<details markdown="1">
<summary>G5 · 提示</summary>

从作物成分连接到摄入量及人体利用，实验室浓度本身跳过了这些步骤。

</details>

<details markdown="1">
<summary>G5 · 评价</summary>

前体需在储存和烹饪后仍可利用，被足量食用，并能吸收及有效转化。需要相关田间表现和受控营养证据，单凭实验室浓度不足以证明群体健康收益。种子价格、农民获取、当地适应性、消费者接受度、基因流动，以及食物多样化或补充剂等替代方案都会影响判断。应评价具体作物和社区的证据，不能笼统宣称所有转基因都安全或都有害。

</details>

若把 PCR 当成制造蛋白，回看 G0；若标记存活就写“正确蛋白已确认”，回看证据层级；若写一个温度永远最适，重新区分测试范围和普遍条件。

## 来源与连接 {#sources}

[OxfordAQA 9610 大纲 v5.1](https://www.oxfordaqa.com/wp-content/uploads/2022/08/oxfordaqa-a-level-biology-specification.pdf)，§3.4.10；[官方资料入口](https://www.oxfordaqa.com/qualification/international-as-and-a-level-biology-9610/)。已读 BL04 May/June 2025 Q6 的 MS v1.0 Final pp.14–15，校准连接酶、标记及应用推理。本页任务、数值、图和反馈均自拟，不称官方分值。

将表达连到[基因调控](/zh/alevel/a2-biology/gene-expression/)，传递连到[遗传](/zh/alevel/a2-biology/inheritance/)，对照连到[实验设计](/zh/alevel/a2-biology/experimental-design/)，评价用于[综合写作](/zh/alevel/a2-biology/synoptic-writing/)。
