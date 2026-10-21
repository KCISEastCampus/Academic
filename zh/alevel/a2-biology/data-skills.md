---
title: 数据技能——测量、变异与统计推断
layout: subjects
mathjax: true
grade: a2
subject: a2-biology
study_page: true
toc_headings: 'h2, h3'
lang: zh-CN
permalink: /zh/alevel/a2-biology/data-skills/
translation_of: /alevel/a2-biology/data-skills/
---

[A2 生物](/zh/alevel/a2-biology/) · [Paper 5：实验与综合能力](/zh/alevel/a2-biology/paper-5/) · <a href="/alevel/a2-biology/data-skills/" hreflang="en">English</a>

只有明确测了什么、使用什么单位、抽样允许怎样推断，数字才有意义。本页学习[比例尺](#scale)、[速率](#rates)、[百分比](#percentages)、[SD、SE 与置信区间](#variation)，以及如何按问题选择 [Spearman](#spearman) 或[卡方检验](#chi-squared)。

开始前回顾比值、平均数、平方根、[显微测量](/zh/alevel/a2-biology/prerequisites/#microscopy)和[实验单位](/zh/alevel/a2-biology/experimental-design/#design)。新统计概念会先直接解释，再让你应用。

下面所有数字和练习均为 **自拟题**，使用构造数据，不是真实研究的实测记录。解答用于学习反馈，不是官方评分标准。本页支持实验准备和数据分析。

## 缩放不会改变比例尺比值 {#scale}

放大倍数等于图像长度除以实际长度，两者先统一单位。屏幕图像放大后，显示的放大倍数会改变，所以纸上“×400”不能直接用于任意缩放的网页。与物体嵌在**同一图像**中的比例尺会一起放大，因此只要二者同步缩放、没有变形，它们的**比值**就保持有效。

$$L_{\mathrm{actual}}=\frac{L_{\mathrm{object,image}}}{L_{\mathrm{bar,image}}}\times L_{\mathrm{bar,actual}}.$$

![原创教学示意：细胞轮廓上方以 A 到 B 的括线标出待测长度；另一条水平比例尺代表 20 微米。物体和比例尺属于同一张图，会同步缩放。](/assets/images/a2-biology/bl05-scale-bar.svg)

*这是细胞轮廓示意，不是显微照片，也不代表某一种细胞。A–B 标出测量轴。这张图用于示范，不是下面的独立题。*

**自拟题 · 示范。**绘图坐标中，A–B 为 300 单位，比例尺为 100 单位，所以实际长度为 300/100 × 20 = 60 µm。换一个缩放级别，180 像素和 60 像素仍给出 60 µm。像素单位抵消，无须用尺子量屏幕毫米数。不能把一个缩放级别的物体长度与另一个缩放级别的比例尺长度混用。

光学显微镜的目镜测微尺要在当前物镜下，用载物台测微尺校准。若目镜 10 格对应 25 µm，则每格为 2.5 µm；跨 16 格的物体为 40 µm。更换物镜需重新校准。图像可以有正确比例尺，却仍没有足够分辨率区分相邻结构；单纯放大显示不能恢复缺失细节。

<!-- task:scale-transfer -->
**自拟题 · Independent scale task**

In a single resized image, a structure spans 165 pixels and a scale bar labelled 40 µm spans 55 pixels. Calculate the actual length in µm and mm. A student doubles the displayed image width and claims that the actual structure is now twice as long. Explain the error.
<!-- /task:scale-transfer -->

<details markdown="1">
<summary>提示——先求比值，再换单位</summary>

使用同一缩放级别的两个长度。1 mm = 1000 µm。

</details>

<details markdown="1">
<summary>解答——比例尺题</summary>

比值为 165/55 = 3，所以实际长度为 120 µm = 0.120 mm。显示宽度加倍时两个图上长度同时加倍，比值和实际结构都不变；改变的是显示放大倍数。

</details>

## 速率：说清分子与分母 {#rates}

速率等于变化量除以经过时间。“呼吸速率”需要可操作定义，例如每克材料每小时消耗的氧体积。按质量归一化有助于比较不同大小的样本，但不能保证年龄、物种和代谢状态相同。先检查仪器测的是什么：没有吸收 CO₂ 时，气体体积变化不能直接等同耗氧。见[呼吸作用](/zh/alevel/a2-biology/respiration/)与 [RP8](/zh/alevel/a2-biology/experimental-design/#rp8)。

圆形毛细管的内半径为 $r$，液滴位移为 $l$ 时：

$$\Delta V=\pi r^2l,\qquad R=\frac{\Delta V}{m\Delta t}.$$

半径与位移必须使用相同长度单位。用 mm 计算时得到 mm³；1 cm³ = 1000 mm³，体积换算系数不能照搬长度换算。

**自拟题 · 示范。**某吸收 CO₂、已平衡温度且无漏气的呼吸计中，液滴 5 min 移动 24 mm，内半径 0.25 mm，种子质量 0.40 g；对照漂移可忽略。

$$\Delta V=\pi(0.25)^2(24)=4.7124\ \mathrm{mm^3}.$$

$$R=\frac{4.7124}{0.40\times5}\times60=141.37\ \mathrm{mm^3\,g^{-1}\,h^{-1}}=0.14137\ \mathrm{cm^3\,g^{-1}\,h^{-1}}.$$

乘 60 是把每分钟换成每小时。中间计算保留足够位数，再按输入精度报告，例如这里可写 0.14 cm³ g⁻¹ h⁻¹。不能把直径当半径平方。

时间序列先看图再选区间。近似直线段的拟合斜率给出近似恒定速率，曲线某点的切线斜率给瞬时速率；两端点的斜率则是整个区间平均速率。横轴通常放自变量并标单位，不应默认直线必过原点。类别处理可能更适合不连线的汇总图，而不是连续曲线。对数轴的等间距表示等比值，零值对照应单独展示。

<!-- task:rate-transfer -->
**自拟题 · Independent rate task**

A valid oxygen-uptake measurement uses a capillary of internal diameter 0.80 mm. The fluid moves 10 mm in 4.0 min for 0.25 g of seeds; control drift is negligible. Calculate the rate in cm³ g⁻¹ h⁻¹. Separately, an enzyme produces 0, 0.7, 1.4, 2.0 and 2.5 cm³ of oxygen at 0, 2, 4, 6 and 8 min. Compare the average rate over 0–8 min with the rate over the early linear region. State which better estimates the initial rate.
<!-- /task:rate-transfer -->

<details markdown="1">
<summary>提示——分开处理两套测量</summary>

直径先减半，换算体积和时间，再除以质量。酶数据先比较前两个相同的增量与后面的增量。

</details>

<details markdown="1">
<summary>解答——速率题</summary>

$$R=\frac{\pi(0.40)^2\times10}{4.0\times0.25}\times\frac{60}{1000}=0.30159\ \mathrm{cm^3\,g^{-1}\,h^{-1}}.$$

可报告约 0.30 cm³ g⁻¹ h⁻¹。酶反应全程平均速率为 2.5/8 = 0.3125 cm³ min⁻¹；0–4 min 斜率为 1.4/4 = 0.35 cm³ min⁻¹。现有读数中，早期线性斜率更适合估计初始速率。稀疏的时间序列不能给出零时刻准确的瞬时速率。

</details>

## 百分比、比例与图像 {#percentages}

计算前从问题确定基值。百分变化用起始值；某部分的比例用指定总量；效率则用口径相容的有效输出与相关输入比较。

$$\text{percentage change}=\frac{\text{final}-\text{initial}}{\text{initial}}\times100\%.$$

**自拟题 · 示范。**干质量从 0.80 g 增至 1.00 g，增幅为 25%，不是 20%，因为基值是 0.80 g。存活率由 40% 升至 50%，增加 **10 个百分点（percentage points）**；相对原存活率则增加 25%。输入 800 kJ、转移 200 kJ 的效率是 25%，前提是面积、时间和系统边界口径相容；见[能量与生产](/zh/alevel/a2-biology/energy-production/)。

检查物理界限：初始质量为正、最终质量非负时，质量百分变化不可能低于 −100%。增重除以初始质量是无量纲比值；写“每天”就改变了定义，必须有时间分母。遇到不合理数据，不能靠猜测缺失缩放因子悄悄修正。

<!-- task:percent-transfer -->
**自拟题 · Independent percentage task**

In a constructed experiment, survival is 30 out of 50 seedlings in treatment A and 36 out of 50 in treatment B. Calculate the difference in percentage points and the relative percentage increase in survival from A to B. A separate tissue sample changes from 1.60 g to 1.44 g. Calculate its percentage mass change and identify the denominator in each calculation.
<!-- /task:percent-transfer -->

<details markdown="1">
<summary>提示——“relative to A”规定了基值</summary>

先算两组存活率再比较；质量变化以初始质量为基值。

</details>

<details markdown="1">
<summary>解答——百分比题</summary>

存活率为 60% 和 72%，各自以 50 株为分母。两者相差 12 个百分点。相对增幅为 12/60 × 100 = 20%，以 A 的存活率为基值；也可用 6/30 × 100。组织质量变化为 −0.16/1.60 × 100 = −10%，分母是初始质量，不是最终质量。

</details>

## SD、SE 与 95% 置信区间 {#variation}

**总体（population）**是希望描述的对象集合，**样本（sample）**是实际测量的部分。先定义单位：幼苗、独立花盆和重复读数提供的信息不同。均值描述中心，但可能掩盖离散和异常；中位数较少受极端值影响，极差只使用两个端点。

**标准差（SD）**描述观察值之间的离散程度。**均值标准误（SE）**估计从总体反复独立抽样时，样本均值会波动多少。SE 不是单株幼苗的离散程度。对于同一抽样模型下的独立观察，样本标准差记作 $s$：

$$\bar{x}=\frac{\sum x_i}{n},\qquad s=\sqrt{\frac{\sum(x_i-\bar{x})^2}{n-1}},\qquad SE=\frac{s}{\sqrt{n}}.$$

这三个量与原观察具有相同单位。样本方差分母的 $n-1$ 考虑了均值也由同一样本估计。SD 相近时，独立样本量扩大四倍可使 SE 减半；这不会让生物差异减半，也不能纠正有偏的抽样。

**95% 置信区间（CI）**描述总体均值估计的不确定度。在抽样假设成立时，若不断用同一方法从新样本构建区间，长期约 95% 的区间会包含总体均值。它不表示 95% 的个体观察值位于其中，也不是原假设有 95% 概率为真。

观察独立、总体近似正态、总体 SD 未知时，均值 CI 使用 Student's $t$ 系数。按题目提供的系数或方法计算；本页不额外要求学习完整 $t$ 检验推导。

$$\text{95\% CI}=\bar{x}\pm t_{0.975,n-1}\,SE.$$

常见的均值 ± 约 2SE 是大样本近似，正态系数为 1.96；它并非对所有样本量和分布都准确。极小样本、明显偏斜或异常值需要额外判断，不能机械套用任一规则。

**自拟题 · 示范。**四株独立幼苗的构造生长增量为 2、4、4、6 mm。为本教学例，假定正态总体近似合理。均值为 4 mm，离均差平方和为 8 mm²。

$$s=\sqrt{8/3}=1.633\ \mathrm{mm},\qquad SE=1.633/\sqrt4=0.8165\ \mathrm{mm}.$$

使用题给的三自由度系数 3.182：

$$\text{95\% CI}=4\pm3.182(0.8165)\approx[1.40,6.60]\ \mathrm{mm}.$$

区间较宽，说明四个独立观察对总体均值的估计不精确。对同样四株幼苗反复用尺子读 40 次，并不会产生 40 个独立生物观察。

**判断误差条前先读图注。**SD 条描述个体离散，SE 条描述均值精度，CI 条还取决于置信水平与计算方法。重叠或不重叠都不是普遍适用的显著性检验。比较时应考虑样本量、独立性、配对结构和相应统计模型；“两均值差的 CI”与“两个均值各自的 CI”不是同一个对象。

<!-- task:variation-transfer -->
**自拟题 · Independent uncertainty task**

A random sample of 25 independent seedlings has mean height 12.0 cm and sample SD 5.0 cm. Assuming the stated sampling model is appropriate, calculate SE and a 95% CI using the supplied multiplier 2.064. Explain what the CI estimates. A second group measures 25 leaves from one plant and uses n = 25 to claim equally precise evidence about variation among plants. Evaluate that claim.
<!-- /task:variation-transfer -->

<details markdown="1">
<summary>提示——按目标总体数独立单位</summary>

SE 的分母是样本量的平方根，不是样本量本身。同株的叶片没有抽到 25 株植物。

</details>

<details markdown="1">
<summary>解答——不确定度题</summary>

SE = 5.0/5 = 1.0 cm；区间为 12.0 ± 2.064 cm，约 9.94–14.06 cm。它在抽样假设下估计总体平均高度，不是包含 95% 幼苗的范围。另一组用于株间推断的植物只有一株，叶片子样本不能代替 25 株独立植物。需要增加独立植株，并在分析中保留抽样层级。

</details>

## Spearman 等级相关：包括并列值 {#spearman}

当成对观察的问题是**单调关联**时，可用 Spearman 等级相关：一个变量增加，另一个总体倾向增加或减少，但不要求关系为直线。每行应对应适当的独立观察单位。先看散点图：U 形关系可能很强，却得到接近零的 Spearman 系数。相关本身不能建立因果机制。

### 无并列值 {#spearman-no-ties}

两个变量分别按相同方向排序，例如最小值的秩为 1。**没有并列值**时可用下面的简式；$d_i$ 是第 $i$ 行两个秩之差，$n$ 是配对数。

$$r_s=1-\frac{6\sum d_i^2}{n(n^2-1)}\quad\text{(no ties)}.$$

**自拟题 · 构造数据示范。**六个独立抽取的样地提供硝酸盐浓度和幼苗生物量；假设抽样保证这些配对可视为独立。

| 样地 | 硝酸盐 / mg kg⁻¹ | 生物量 / g | 硝酸盐秩 | 生物量秩 | 秩差平方 |
| --- | --- | --- | --- | --- | --- |
| A | 10 | 3 | 1 | 1 | 0 |
| B | 20 | 5 | 2 | 2 | 0 |
| C | 30 | 8 | 3 | 3 | 0 |
| D | 40 | 12 | 4 | 5 | 1 |
| E | 50 | 10 | 5 | 4 | 1 |
| F | 60 | 15 | 6 | 6 | 0 |

$$r_s=1-\frac{6(2)}{6(36-1)}=0.942857.$$

这表示较强的正等级关联。做显著性判断前，写明无关联的原假设、备择假设（这里考虑两个方向）及预先选定的显著性水平，如 0.05。使用对应样本量和检验方向的临界值表，或有效的精确/置换方法。本例没有并列秩，在独立、可交换配对的原假设下，共有 720 个秩排列，其中 12 个的系数绝对值至少与观察值一样大。精确双侧 p = 12/720 ≈ 0.0167，故在 5% 水平拒绝该原假设。但土壤水分等其他变量仍可能解释关联，并未证明硝酸盐导致变化。

### 有并列值 {#spearman-ties}

**有并列值时，算法要改变。**相同观察值使用所占秩的平均数。例如 1、2、2、4 的秩是 1、2.5、2.5、4。不能任意打破并列，也不能把平均秩代入无并列值简式后当成精确结果。一般的 Spearman 系数等于**秩的 Pearson 相关**，并列值使用平均秩。这是计算 Spearman 的方法，不是另增一套 Pearson 检验课程要求。

$$r_s=\frac{\sum(R_i-\bar R)(S_i-\bar S)}{\sqrt{\sum(R_i-\bar R)^2\sum(S_i-\bar S)^2}}.$$

**自拟题 · 并列秩示范。**将 x = 1、2、2、4 与 y = 1、2、3、4 按行配对。两列平均秩都为 2.5；秩离差乘积和为 4.5，两列离差平方和分别为 4.5 和 5。因此：

$$r_s=\frac{4.5}{\sqrt{4.5\times5}}=0.948683.$$

有并列值的显著性判断应使用明确适用的方法，例如在原假设下保留并列值、置换观察配对。无并列值的临界表不自动适用。如果任一变量是常数，所有秩相等，相关系数无定义。软件报告 p 值时也要检查采用的方法，小样本尤其如此。

### 独立相关任务 {#spearman-task}

<!-- task:spearman-transfer -->
**自拟题 · Independent association task**

Four independent sample pairs have x values 2, 2, 5, 8 and y values 1, 3, 4, 7 in the same row order. Assign ranks to both variables. State how to calculate a valid Spearman coefficient and why the no-ties shortcut is inappropriate. A suitable test on a separate, larger dataset reports p = 0.03 for a preselected two-sided test. State the decision at 5% and explain why this does not prove causation.
<!-- /task:spearman-transfer -->

<details markdown="1">
<summary>提示——并列观察共同占据两个秩位置</summary>

x 的前两个观察应平均第 1、2 秩。p 值以原假设模型为条件，不是因果成立的概率。

</details>

<details markdown="1">
<summary>解答——关联题</summary>

x 的秩为 1.5、1.5、3、4；y 的秩为 1、2、3、4。用一般公式求这两列秩的相关，约为 0.9487。简式假设完整、无并列的秩，x 不符合这一条件。另一数据集的 0.03 < 0.05，在检验假设成立时拒绝给定的无关联原假设。混杂、反向关系等解释仍可能存在；统计关联不是所提出原因的实验性证明。

</details>

## 卡方：模型拟合与独立性 {#chi-squared}

卡方检验比较原假设模型下的**观察计数** $O$ 与**期望计数** $E$。不能用百分比、身高或组均值代替原始计数。类别应互斥，每个独立观察只计一次。期望频数要足够大，才能使用卡方近似；本页小型教学表要求每格期望数至少为 5。若不满足，应考虑适合的精确方法或增加资料；不能看完结果后为了得到喜欢的结论而合并不同生物类别。

$$\chi^2=\sum\frac{(O-E)^2}{E}.$$

### 对遗传比例做拟合优度检验 {#goodness-of-fit}

先确定遗传模型，再检查偏离。1:2:1 模型的期望计数是总数分别乘 1/4、1/2、1/4。原假设说总体比例符合该模型，备择假设说比例不同。如何由配子推导比例见[遗传](/zh/alevel/a2-biology/inheritance/)。

**自拟题 · 构造计数示范。**60 个独立分类的后代中，三种表型观察数为 18、26、16；期望数为 15、30、15。

$$\chi^2=\frac{(18-15)^2}{15}+\frac{(26-30)^2}{30}+\frac{(16-15)^2}{15}=1.20.$$

若有 $k$ 个类别、概率事先固定，且未用这批观察拟合参数，则 $df=k-1$，本题 df = 2。总数已固定，一项计数会受其他项约束，所以减一。若从相同数据估计模型参数，自由度可能进一步减少，不能盲套简式。给定 df = 2 的 5% 临界值为 5.991；1.20 < 5.991，所以**不拒绝**比例模型，p ≈ 0.549。在该模型下，这种偏离还不足以在 5% 水平拒绝。它不证明模型正确，不排除其他比例，也不能断言所有差异都“由偶然造成”。

### 两个分类变量的独立性 {#independence}

这是另一个问题：两个分类变量是否有关联？例如症状有无是否与处理组有关？独立性原假设下，期望计数由行、列总数计算，不使用孟德尔比例。

$$E_{ij}=\frac{(\text{row total})_i(\text{column total})_j}{\text{grand total}},\qquad df=(r-1)(c-1).$$

**自拟题 · 构造独立性示范。**80 株独立幼苗各自随机接受一种处理，在固定时段后各分类一次。表中括号为期望数。

| 处理 | 有症状 | 无症状 | 合计 |
| --- | --- | --- | --- |
| A | 30 (25) | 10 (15) | 40 |
| B | 20 (25) | 20 (15) | 40 |
| 合计 | 50 | 30 | 80 |

$$\chi^2=\frac{25}{25}+\frac{25}{15}+\frac{25}{25}+\frac{25}{15}=5.3333,\qquad df=(2-1)(2-1)=1.$$

这里使用未作连续性校正的普通 Pearson 卡方统计量。给定 df = 1 的 5% 临界值为 3.841，故拒绝独立性，p ≈ 0.0209。A 有症状比例为 75%，B 为 50%，应把效应大小和检验结果一起报告。随机分配和控制条件可增强因果解释，但卡方计算本身不检查是否真的完成分配、盲法或独立处理。如果 A 的幼苗全部共享一个处理托盘，40 株就不自动等于 40 个独立处理单位。

### 独立练习：选择并检验模型 {#chi-model-task}

<!-- task:chi-transfer -->
**自拟题 · Independent model task**

A pre-specified genetic model predicts phenotype proportions 1:2:1. A valid independent sample gives counts 36, 44 and 20. Calculate expected counts, chi-squared and degrees of freedom. Use the supplied 5% critical value 5.991. State a conclusion in context without claiming that a rejected model proves a particular alternative mechanism. Explain why a test of association between treatment group and survival would require a different way of calculating expected counts.
<!-- /task:chi-transfer -->

<details markdown="1">
<summary>提示——先核对总数与原假设模型</summary>

观察总数为 100。三个事先确定的概率决定期望数；独立性表则使用边际总数。

</details>

<details markdown="1">
<summary>解答——模型检验题</summary>

$$E=(25,50,25),\qquad\chi^2=\frac{121}{25}+\frac{36}{50}+\frac{25}{25}=6.56,\qquad df=2.$$

期望数都超过 5。由于 6.56 > 5.991，在 5% 水平拒绝 1:2:1 模型，p ≈ 0.0376。在指定抽样假设下，计数支持偏离该模型，但不能辨认是存活差异、分类错误、连锁还是其他机制造成。处理—存活独立性检验用每格的行总数 × 列总数 / 总数求期望值，自由度由行列数决定，而不是使用给定遗传比例。

</details>

## p 值含义与分析选择 {#inference}

p 值是：**假定原假设模型及其条件成立**时，得到至少与观察结果同样极端的检验统计量的概率。“极端”由检验及事先选定的备择方向定义。它不是原假设为真的概率，不是结果“纯属偶然”的概率，也不是下一次研究重复成功的概率。显著性水平 0.05 是在原假设成立时控制长期错误拒绝率的决策阈值，不保证每一个结论都有 95% 概率正确。

一起报告观察效应、变异、样本单位、统计判断和生物限制。大样本中的很小效应也可能显著；不拒绝可能来自检验能力不足或噪声大，不能据此证明相等。

| 要回答的问题 | 适合的起点 | 解释前检查 |
| --- | --- | --- |
| 独立观察有多分散？ | SD 与适当图像 | 分布、异常值、单位 |
| 总体均值估计有多精确？ | SE 与明确的 CI 方法 | 独立样本量、抽样和分布假设 |
| 成对测量是否单调关联？ | Spearman 秩 | 配对独立性、散点图、并列值、检验方向 |
| 计数是否符合指定遗传比例？ | 卡方拟合优度 | 事先概率、期望频数、自由度 |
| 两个分类变量是否关联？ | 卡方独立性 | 行列总数、独立单位、期望频数、自由度 |

<!-- task:inference-retry -->
**自拟题 · Diagnostic retry**

A report says, “The two mean ± SD bars overlap, so the means are equal. Our p-value of 0.08 proves that the null hypothesis has an 8% probability of being true.” Identify both errors and write a corrected interpretation at a preselected 5% significance level, assuming the reported test was appropriate. State one additional piece of information needed to judge the biological importance of the comparison.
<!-- /task:inference-retry -->

<details markdown="1">
<summary>提示——离散、精度、条件概率是不同对象</summary>

SD 条描述观察值。误差条重叠规则和 p 值都不能给原假设本身分配概率。

</details>

<details markdown="1">
<summary>解答——诊断重试</summary>

SD 条重叠不证明总体均值相等。p = 0.08 > 0.05，所以在 5% 水平不拒绝给定原假设；这表示按选定检验证据不足以拒绝，并非证明相等。原假设和检验条件成立时，统计量至少同样极端的概率为 0.08。要判断生物重要性，应报告均值差及单位，最好还给它的不确定度和相关生物背景。样本量及是否配对也有助于评价证据强度。

</details>

## 来源与范围 {#sources}

课程范围依据 OxfordAQA 9610 v5.1 §7 与 §3.3.6.2：[官方资格页](https://www.oxfordaqa.com/qualification/international-as-and-a-level-biology-9610/)及[大纲](https://www.oxfordaqa.com/wp-content/uploads/2022/08/oxfordaqa-a-level-biology-specification.pdf)。数值例子全部重新构造，不是改编的考试数据。独立性表扩展的是同一计数检验思路，不代表保证未来 BL05 会出现任何特定表格形式。

统计边界另核对了 [NIST：均值置信区间](https://www.itl.nist.gov/div898/handbook/eda/section3/eda352.htm)、[NIST：卡方拟合优度](https://www.itl.nist.gov/div898/handbook/eda/section3/eda35f.htm)及 [SciPy：Spearman 与小样本推断](https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.spearmanr.html)。它们用于保证解释准确，不增加资格要求。计算和反馈由作者编写，不分配官方分值。

用[实验设计](/zh/alevel/a2-biology/experimental-design/)检查计算背后的抽样，再用[综合写作](/zh/alevel/a2-biology/synoptic-writing/)表达证据允许的结论。
