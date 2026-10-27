---
layout: subjects
title: "数据与平均数"
mathjax: true
grade: igcse
subject: igcse-mathematics
lang: zh-CN
translation_of: /igcse/mathematics/data-and-averages/
permalink: /zh/igcse/mathematics/data-and-averages/
reading_layout: true
study_page: true
toc_headings: "h2"
---

## 一个“平均值”会藏住什么？ {#start}

两组人的平均通勤时间可以相同，实际经历却很不一样。这一课先整理每人的记录，再找合适的概括，并说明概括遗漏了什么。

先修是排序、加法、除法和[分数与百分数](/zh/igcse/mathematics/fractions-decimals-and-percentages/#find-share)。本页示范、任务和数据均为**自拟题，无官方分值**，数据是教学构造。先在纸上作答，再打开帮助。先比较中心，再学习中间一半和百分位数。

## 记下来的究竟是什么？ {#data-types}

“最喜欢的运动”是**定性数据（qualitative）**：它是类别，不是大小。“书的本数”是**离散数据（discrete）**：一个一个数，通常取整数。“通勤时间”是**连续数据（continuous）**：它是测量值，原则上在一个区间里还能继续细分。记录成 12 分钟，只是读数取整；时间本身没有变成“计数”。

计算前先读标题、单位、总体（population，想研究的整个群体）和样本（sample，实际记录的对象）。只调查早晨坐公交的人，不一定代表所有出行者。恰当地选取更大样本通常能减小随机波动，却不能修复选人方式造成的偏差。

## 频数数的是“出现几次” {#frequency}

八个人报告的图书馆到访次数是：

0, 2, 1, 0, 3, 1, 2, 1。

**频数（frequency）**就是某个数值出现的记录数。列表可整理成：

| Visits $x$ | Frequency $f$ | Total visits $xf$ |
| --- | ---: | ---: |
| 0 | 2 | 0 |
| 1 | 3 | 3 |
| 2 | 2 | 4 |
| 3 | 1 | 3 |
| Total | 8 | 10 |

这里有八个人，却有十次到访。两种总数不要混淆。**未分组数据（ungrouped）**保留具体数值；**分组数据（grouped）**把值放进区间，会损失一些细节。连续时间用 $0\le t<10$ 和 $10\le t<20$ 分组，10 属于第二组，不能重复计数。

<div class="lesson-check" markdown="1">

### 先读清，再计算 {#practice-data}

**Question:** A list records favourite colour, number of siblings, and height rounded to the nearest cm. Classify each variable. For visits 0, 2, 1, 0, 3, 1, 2, 1, find the frequency of at least two visits and the proportion of people with no visits. Explain why the total number of visits is not the denominator.



<details markdown="1">
<summary>提示</summary>

取整后的测量仍是测量。分母应该数满足或可能满足条件的人。

</details>

<details markdown="1">
<summary>解答与检查</summary>

颜色是定性数据；兄弟姐妹人数是离散数据；身高是连续数据。至少到访两次有 $2+1=3$ 人。没有到访的占 $2/8=1/4$。分母是八个人，不是十次到访，因为题目问人的比例。

</details>

</div>

## 同一个人，记录两个特征 {#two-way}

**双向表（two-way table）**让两个特征保持联系。例如行写交通方式，列写时间组。每个人只进入一个内部格子；总计最后再相加，不把同一个人额外当作一条记录。

六条记录是 Walk–8、Bus–12、Walk–9、Bus–18、Walk–15、Bus–7（时间单位：分钟）。第一人应放在 Walk 且少于 10 分钟的格子：

| Mode | $t<10$ min | $t\ge10$ min | Total |
| --- | ---: | ---: | ---: |
| Walk | 2 | 1 | 3 |
| Bus | 1 | 2 | 3 |
| Total | 3 | 3 | 6 |

若是不分组的类别，也可让行写 A/B 班、列写 Walk/Bus。类别不需要数值区间，但行、列的总计仍须一致。

<div class="lesson-check" markdown="1">

### 自己设计表格 {#practice-table}

**Question:** Design a two-way table, including totals, for these eight (mode, time in min) records: (Walk,6), (Bus,14), (Walk,12), (Bus,8), (Walk,9), (Bus,16), (Walk,7), (Bus,10). Use time groups below 10 and at least 10. What fraction of walkers take at least 10 minutes?



<details markdown="1">
<summary>提示</summary>

行放方式，列放两个时间组。最后一问只看步行的人。

</details>

<details markdown="1">
<summary>解答与检查</summary>

完整表如下。四个步行者中一人至少用 10 分钟，所以是 $1/4$。用全部八人作分母，会回答另一个问题。

| Mode | $t<10$ | $t\ge10$ | Total |
| --- | ---: | ---: | ---: |
| Walk | 3 | 1 | 4 |
| Bus | 1 | 3 | 4 |
| Total | 4 | 4 | 8 |

</details>

</div>

## “典型”有三种说法 {#averages}

**均值（mean）**相当于把总量平均分：所有值的和除以个数。**中位数（median）**是从小到大排好后的中间值；个数为偶数时，取中间两个值的平均。**众数（mode）**是出现最多的值；可以不止一个，也可以没有。**极差（range）**是最大值减最小值，说的是分散程度，不是平均数。

先看想回答什么，再选概括方式。最喜欢的颜色可以找众数，“平均颜色”却没有意义。一个特别大的数会把均值往上拉，中位数可能变化很小。只给均值或中位数，都不能说明波动大小。

<div class="worked-example" markdown="1">

### 完整示范：同一组数，概括不同 {#example-averages}

**Question:** For delivery times 2, 2, 3, 5, 18 minutes, find the mean, median, mode and range. Which average better describes a usual delivery?



数列已经排好。总时间是 $2+2+3+5+18=30$，分给五次配送：

$$\text{mean}=30\div5=6\text{ min}.$$

第三个数是中位数，为 3 分钟。2 分钟出现两次，是众数。极差是 $18-2=16$ 分钟。若问平常的一次配送，这里中位数 3 分钟更合适，因为一次特别长的配送把均值拉到 6 分钟。若关心总时间，均值仍很有用：$5\times6=30$ 分钟。不能只因为 18 不方便就删掉它。

</div>

<div class="lesson-check" markdown="1">

### 比较两组 {#practice-averages}

**Question:** Times in minutes are A: 4, 5, 5, 6, 10, 12 and B: 6, 7, 7, 7, 7, 8. Find each mean, median, mode and range. Use centre and spread to advise someone who values both short and predictable times.



<details markdown="1">
<summary>提示</summary>

排好序，找两个中间位置。不同的概括可能支持不同选择。

</details>

<details markdown="1">
<summary>解答与检查</summary>

A 的总和是 42，所以均值 $42/6=7$ 分钟，中位数 $(5+6)/2=5.5$ 分钟，众数 5 分钟，极差 $12-4=8$ 分钟。B 总和也是 42：均值 7 分钟，中位数 $(7+7)/2=7$ 分钟，众数 7 分钟，极差 $8-6=2$ 分钟。A 的中位数低，但分散得多；B 在这份样本中更稳定，且均值相同。要说清取舍，不能断言对每个人都有唯一最好选择，也不能把六条记录当成总体定论。

</details>

</div>

## 只剩频数表时怎样算？ {#grouped}

对于保留具体数值的频数表，要先用“数值乘频数”：一个人到访 3 次，贡献的是 3 次到访，不是 1 次。最后除以**频数总和**，不是除以表格行数。

$$\text{mean}=\frac{\sum fx}{\sum f}.$$

$\sum$ 的意思是“把这些都加起来”。前面的到访表给出均值 $10/8=1.25$ 次。找中位数要跟踪位置：第 4、5 个值都是 1，所以中位数是 1；众数是 1，极差是 3。

区间表失去了具体值，可以用上下界正中间的**组中点（midpoint）**代表该组。**估计均值**是 $\sum fm/\sum f$，其中 $m$ 是中点。这需要中点能合理代表组内数据，所以不能说成精确均值。频数最高的组叫**众数组（modal class）**，并不意味着中点就是确定的众数。

<div class="worked-example" markdown="1">

### 完整示范：估计，不是假装精确 {#example-grouped}

**Question:** Times lie in 0 ≤ t < 10, 10 ≤ t < 20 and 20 ≤ t < 40 minutes, with frequencies 4, 8 and 8. Estimate the mean and state the modal classes.



中点分别是 $(0+10)/2=5$、$(10+20)/2=15$、$(20+40)/2=30$ 分钟。按人数加权，不按行数平均：

$$\text{estimated mean}=\frac{4\times5+8\times15+8\times30}{20}=\frac{380}{20}=19\text{ min}.$$

按频数比较，10–20 和 20–40 都是众数组，都有 8 人。仅凭分组记录，不能还原精确均值、中位数或极差。不等组距时，直方图最高的**密度**柱表示每分钟宽度内最集中，含义不同，见[面积与高度](/zh/igcse/mathematics/statistical-diagrams/#unequal-histograms)。

</div>

<div class="lesson-check" markdown="1">

### 利用还保留的信息 {#practice-grouped}

**Question:** A frequency table has values x = 1, 2, 4 and frequencies 2, 5, 3. Find the exact mean and median. A second table gives times 0 ≤ t < 5, 5 ≤ t < 15, 15 ≤ t < 25 minutes with frequencies 2, 6, 2. Estimate its mean, identify its modal class and explain why the second mean is not exact.



<details markdown="1">
<summary>提示</summary>

精确中位数看累计位置。只有区间表需要用中点代表。

</details>

<details markdown="1">
<summary>解答与检查</summary>

第一表总频数 10，总数值 $1\times2+2\times5+4\times3=24$。均值 $24/10=2.4$；第 5、6 个值都是 2，中位数是 2。第二表中点是 2.5、10、20：

$$\text{estimated mean}=\frac{2\times2.5+6\times10+2\times20}{10}=10.5\text{ min}.$$

众数组是 $5\le t<15$。组内真实时间不知道，用中点替代才产生了估计。只平均三个中点会忽略中间一组有六个人。

</details>

</div>

## 看中间一半 {#quartiles}

中位数把排好序的数据分成两半。**下四分位数** $Q_1$ 大约标出走过四分之一的位置；**上四分位数** $Q_3$ 大约标出四分之三的位置。**四分位距** $IQR=Q_3-Q_1$ 描述中间一半数据占多宽，比极差较少受极端值影响。

本页的小型原始数列采用“下半组与上半组各自找中位数”；个数为奇数时，不把整体中位数放进任何半组。小样本四分位有不同约定，题目指定方法时按题目。分组数据的估读方法见[累积频数图](/zh/igcse/mathematics/statistical-diagrams/#cumulative)。

第 $p$ **百分位数（percentile）**是一个数值，大约有 $p\%$ 的数据低于它。在总计 $n$ 个值的累积图上，要到累计人数 $pn/100$ 处读取。它是分布中的位置，不是考试得分百分比。

<div class="worked-example" markdown="1">

### 完整示范：先定位，再相减 {#example-quartiles}

**Question:** For ordered times 2, 4, 5, 7, 8, 10, 12, 16 minutes, find the median, quartiles and IQR using medians of halves.



中间值是 7 和 8，中位数 $(7+8)/2=7.5$ 分钟。下半组为 2、4、5、7，上半组为 8、10、12、16：

$$Q_1=(4+5)/2=4.5,\qquad Q_3=(10+12)/2=11,\qquad IQR=11-4.5=6.5\text{ min}.$$

四分位数与原数据一样用分钟作单位；两者相减是分散程度，不是分数 1/2。

</div>

<div class="lesson-check" markdown="1">

### 解释比较 {#practice-quartiles}

**Question:** Ordered times A are 1, 3, 4, 6, 8, 10, 11, 17 minutes. Find the median, Q1, Q3 and IQR using medians of halves. Group B has median 8 minutes and IQR 3 minutes. Compare typical time and middle-half spread. Can you conclude that every A time is shorter than every B time?



<details markdown="1">
<summary>提示</summary>

把中心与分散程度分别比较。分位数比较不等于每一对个体比较。

</details>

<details markdown="1">
<summary>解答与检查</summary>

A 中位数 $(6+8)/2=7$，$Q_1=(3+4)/2=3.5$，$Q_3=(10+11)/2=10.5$，$IQR=10.5-3.5=7$ 分钟。A 的中位数稍低（7 对 8 分钟），中间一半却更分散（7 对 3 分钟）。不能断言每个 A 都比每个 B 短，因为这些概括没有给出 B 的所有值。

</details>

</div>

## 独立检查 {#practice}

收起帮助，完成上面的[分类与提取](#practice-data)、[双向表](#practice-table)、[平均数与比较](#practice-averages)、[频数计算](#practice-grouped)和[四分位](#practice-quartiles)。除了算出数值，还要解释为什么这样选。

## 找到具体困难，再重试 {#retry}

类型或计数混淆，回到[记录的是什么](#data-types)和[频数](#frequency)，再做 A；总计或比较群体用错，回到[双向表](#two-way)，再做 B；平均数没有加权、没有排序或解释过头，回到[平均数](#averages)或[分组估计](#grouped)，再做 C/D；四分位问题回到[中间一半](#quartiles)，再做 E。先关闭原解答。

<div class="lesson-check" markdown="1">

### 重试 A {#retry-data}

**Question:** A survey records bus route number, travel time to the nearest minute and number of changes. Classify each. In the list of changes 0, 1, 1, 2, 0, 1, how many passengers make fewer than two changes?



<details markdown="1">
<summary>提示</summary>

写成数字也可能只是标签。

</details>

<details markdown="1">
<summary>解答与检查</summary>

线路号码是定性数据（标签），时间是连续数据，换乘次数是离散数据。少于两次包括零次和一次，共五人。

</details>

</div>

<div class="lesson-check" markdown="1">

### 重试 B {#retry-table}

**Question:** Design an ungrouped two-way table for (class, drink): (A,Water), (B,Tea), (A,Tea), (B,Water), (A,Water), (B,Tea). Add totals and find the fraction of class B choosing water.



<details markdown="1">
<summary>提示</summary>

每条记录只进入一个格子。以 B 班为比较群体。

</details>

<details markdown="1">
<summary>解答与检查</summary>

行 A/B，列 Water/Tea/Total：A 为 2/1/3，B 为 1/2/3，总计为 3/3/6。B 班选水比例为 $1/3$，不是 $1/6$。

</details>

</div>

<div class="lesson-check" markdown="1">

### 重试 C {#retry-averages}

**Question:** Times are 3, 3, 4, 4, 6, 22 minutes. Find all three averages and the range. Which average would you quote for a usual journey, and what extra information would you include?



<details markdown="1">
<summary>提示</summary>

排序后看第 3、4 个位置；补上分散程度。

</details>

<details markdown="1">
<summary>解答与检查</summary>

总和 42，均值 $42/6=7$ 分钟。中位数 $(4+4)/2=4$ 分钟；众数为 3、4 分钟；极差 $22-3=19$ 分钟。描述平常时间可报中位数 4 分钟，同时给极差 19 分钟揭示波动；长时间记录把均值拉高。

</details>

</div>

<div class="lesson-check" markdown="1">

### 重试 D {#retry-grouped}

**Question:** Lengths in cm lie in 0 ≤ l < 4, 4 ≤ l < 8, 8 ≤ l < 12 with frequencies 1, 6, 3. Estimate the mean. Would knowing only these intervals allow an exact range?



<details markdown="1">
<summary>提示</summary>

用频数给中点 2、6、10 加权。

</details>

<details markdown="1">
<summary>解答与检查</summary>

估计均值 $(1\times2+6\times6+3\times10)/10=6.8$ cm。精确极差不知道，首末组的边界未必是真实测量值。把 $12-0$ 当成精确极差是在补造数据。

</details>

</div>

<div class="lesson-check" markdown="1">

### 重试 E {#retry-quartiles}

**Question:** Using medians of halves, find Q1, median, Q3 and IQR for 2, 3, 5, 6, 9, 10, 14, 20. Explain how the range and IQR react if 20 is replaced by 50.



<details markdown="1">
<summary>提示</summary>

先定位两半的中间位置，再改变最后一个数。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$Q_1=4$，中位数 7.5，$Q_3=12$，$IQR=8$。极差从 18 增至 48；四分位和 IQR 不变，因为决定它们的中间值没变。这说明对这次极端值改变不敏感，并非对所有数据改变都不敏感。

</details>

</div>

## 画成图，再回来检查 {#next-step}

接着学[统计图](/zh/igcse/mathematics/statistical-diagrams/#start)。学过另一个主题后，回来做下题，再做[数据混合回顾](/zh/igcse/mathematics/mixed-review/#data-review)，记录自己不用帮助能完成什么。

<div class="lesson-check" markdown="1">

### 稍后回顾 {#later-check}

**Question:** A club reports a mean attendance of 18 over five meetings. The first four attendances are 12, 18, 20 and 16. Find the fifth attendance, median and range. Explain why a different club with mean 18 need not have the same range.



<details markdown="1">
<summary>提示</summary>

先还原总数，再找缺失值。

</details>

<details markdown="1">
<summary>解答与检查</summary>

总数 $5\times18=90$；前四次共 66，第五次是 24。排序为 12、16、18、20、24，中位数 18，极差 12。另一组 18、18、18、18、18 均值相同，极差却为 0，所以均值不能确定分散程度。

</details>

</div>

## 范围与来源 {#sources}

<details markdown="1">
<summary>资格、实际阅读与边界</summary>

OxfordAQA International GCSE Mathematics **9260**，大纲 **v5.1** 印刷 pp.24–26（PDF pp.23–25）：S1–3、S5–7，并联系 S13 的抽样限制。本页从数据记录与平均数继续到四分位、IQR 和百分位。[官方大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-gcse-mathematics-specification.pdf#page=23)。

写作前实际阅读了 Specimen 2018 **9260/2E Q10** 的组中点加权估计题：[QP PDF p.9](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92602E-international-gcse-mathematics-specimen-paper-2016-v1.pdf#page=9)、[MS PDF p.7](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92602E-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=7)；也读了 **9260/2C Q23**（QP p.21 / MS p.9）的表格读取题。文件名里的 2016 不是考季。本页所有任务是自拟题，不是官方题或评分标准。不要求标准差、正式统计检验或特定计算器操作。

</details>
