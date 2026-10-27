---
layout: subjects
title: "集合与概率"
mathjax: true
grade: igcse
subject: igcse-mathematics
lang: zh-CN
translation_of: /igcse/mathematics/sets-and-probability/
permalink: /zh/igcse/mathematics/sets-and-probability/
reading_layout: true
study_page: true
toc_headings: "h2"
---

## 哪些结果算在里面？ {#start}

从袋中选一个数时，“偶数”“质数”“不是偶数”指不同的结果集合。这一课先说清每个集合里有什么，再判断能否靠计数求概率。

先修是[分数与份额](/zh/igcse/mathematics/fractions-decimals-and-percentages/#find-share)、计数和乘法。本页示范、任务和数据均为**自拟题，无官方分值**；数据是教学构造，不是真实实验记录。先从集合和单次结果，逐步学习事件关系与实验。

## 先看具体成员，再写符号 {#sets}

**集合（set）**是一组归属规则明确的成员，写在花括号里，例如 $A=\{2,4,6\}$。顺序不影响集合，重复写也只算一个成员。$2\in A$ 表示 2 属于 A；$3\notin A$ 表示不属于。$n(A)=3$ 是成员个数。

**全集（universal set）** $\xi$ 是本题考虑的所有对象。**补集（complement）** $A'$ 包含 $\xi$ 内不在 A 中的成员，换全集就可能换补集。**交集（intersection）** $A\cap B$ 是两边都在；**并集（union）** $A\cup B$ 是在 A 或 B，也包括两边都在。除非题目另说，“or”通常包含“both”。

**空集（empty set）** $\varnothing$ 没有成员：$n(\varnothing)=0$。它不同于 $\{0\}$，后者有一个成员 0。求补集之前必须知道全集。

<div class="worked-example" markdown="1">

### 完整示范：先放交集 {#example-venn}

**Question:** Let ξ = {1,2,3,4,5,6,7,8,9,10,11,12}. A is the set of even numbers and B is the set of multiples of 3. Draw a Venn diagram and find P(A ∪ B) when one number is chosen with equal chance.

列出 $A=\{2,4,6,8,10,12\}$ 和 $B=\{3,6,9,12\}$。共同的 6、12 先放重叠区，再放只在 A、只在 B 的成员。剩下的放在两圆之外、全集框之内。

![1 至 12 的 Venn 图：只在 A 为 2、4、8、10；交集 6、12；只在 B 为 3、9；都不在为 1、5、7、11。](/assets/img/igcse-statistics-venn.svg)

四区各有 4、2、2、4 个，总计 12。并集把任意一个圆内的成员各数一次：

$$n(A\cup B)=4+2+2=8=6+4-2,\qquad P(A\cup B)=\frac8{12}=\frac23.$$

直接加 6 和 4 而不减 2，会把共同成员数两遍。$A'=\{1,3,5,7,9,11\}$ 也包括“只在 B”的区域。每个数被选机会相同，才可以用成员数相除。

</div>

<div class="lesson-check" markdown="1">

### 使用记号 {#practice-sets}

**Question:** Let ξ = {1,2,3,4,5,6,7,8,9,10}. A contains the even numbers and B the primes. List A ∩ B, A ∪ B, A′ and A ∩ A′. Give n(A ∩ B) and explain why ∅ differs from {0}.

<details markdown="1">
<summary>提示</summary>

1 不是质数；并集每个成员只算一次。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$A\cap B=\{2\}$，$A\cup B=\{2,3,4,5,6,7,8,10\}$，$A'=\{1,3,5,7,9\}$，$A\cap A'=\varnothing$。所以 $n(A\cap B)=1$。空集没有成员，$\{0\}$ 有一个；2 虽是偶数，仍是质数。

</details>

</div>

## Venn 图里也可以填人数 {#venn}

研究人的分组时，每区填一个**人数**，可以代替逐个列姓名。A 的总人数已包括两边都参加的人。先放交集，再从各自总数减去交集，找出“只在这一边”；最后从全集总数减去圆内三个区域，得到“都不在”。

$$n(A\cup B)=n(A)+n(B)-n(A\cap B).$$

减去一次交集，是去掉多算的那一份。两个圆有四个区域，包括圆外；四区人数之和必须等于全集总数。

<div class="lesson-check" markdown="1">

### 每个人都有去处 {#practice-venn}

**Question:** In a constructed group of 30 people, 18 play chess (A), 14 play badminton (B), and 8 play both. Draw a Venn diagram. For one uniformly random person, find the probabilities of neither, at least one and exactly one activity. Explain why 18 + 14 is not the number doing at least one.

<details markdown="1">
<summary>提示</summary>

先放交集；恰好一种不包含交集。

</details>

<details markdown="1">
<summary>解答与检查</summary>

只在 A 为 $18-8=10$，只在 B 为 $14-8=6$，都不在为 $30-10-8-6=6$：

![解答 Venn 人数：只在 A 为 10，交集 8，只在 B 为 6，都不在为 6，总计 30。](/assets/img/igcse-statistics-venn-check.svg)

$$P(\text{neither})=\frac6{30}=\frac15,\quad P(A\cup B)=\frac{24}{30}=\frac45,\quad P(\text{exactly one})=\frac{16}{30}=\frac8{15}.$$

18 + 14 把共同的八人数了两遍。四区总计 30；“都不在”与“至少一种”的概率和为 1。

</details>

</div>

## 把机会写成数 {#probability-scale}

**结果（outcome）**是一个具体可能结果；**事件（event）**可以包含多个结果，例如“出现偶数”。概率在 0 与 1 之间：不可能为 0，必然为 1，机会各半为 1/2。unlikely 在 0 与 1/2 之间，likely 在 1/2 与 1 之间。始终检查 $0\le P(A)\le1$。

有限模型中，具体结果等可能时才能用：

$$P(A)=\frac{\text{number of favourable outcomes}}{\text{total number of equally likely outcomes}}.$$

公平骰六个面等可能；3 的倍数有 3、6，概率 $2/6=1/3$。不同标签不代表等机会：八个等大扇区写 R,R,R,B,G,G,G,G，三种颜色并非等可能。

一个事件不是发生，就是不发生：

$$P(A')=1-P(A).$$

<div class="lesson-check" markdown="1">

### 数扇区，不是数标签 {#practice-model}

**Question:** A fair spinner has eight equal sectors R,R,R,B,G,G,G,G. Find P(R), P(G), P(not B), P(purple) and P(R or B or G), and describe each chance. A learner says P(R) = 1/3 because there are three colours. Explain.

<details markdown="1">
<summary>提示</summary>

等可能的是每个扇区，不是颜色名称。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$P(R)=3/8$（unlikely），$P(G)=4/8=1/2$（even chance），$P(\text{not B})=7/8$（likely），$P(\text{purple})=0$（impossible），$P(R\text{ or }B\text{ or }G)=1$（certain）。颜色所占扇区数不同，不能把三种颜色平均算机会。

</details>

</div>

## 列齐每一种可能 {#sample-spaces}

**样本空间（sample space）**列出全部可能结果。一次骰子为 $\{1,2,3,4,5,6\}$。连续两次要保留次序：（第一次，第二次）。用表格把每种第一次结果与每种第二次结果配齐。

公平硬币之后独立转公平的 1、2、3 转盘：

| Coin then spinner | 1 | 2 | 3 |
| --- | --- | --- | --- |
| H | (H,1) | (H,2) | (H,3) |
| T | (T,1) | (T,2) | (T,3) |

模型里六个有序对等可能。“H 且奇数”是 (H,1)、(H,3)，概率 $2/6=1/3$。奇数与偶数标签却不等可能，因为三个数字有两个奇数。如果格子里的结果不等可能，就不能一格算相同概率。

<div class="lesson-check" markdown="1">

### 自己列样本空间 {#practice-space}

**Question:** Two independent fair spinners each have equal sectors 1,2,3. Make an ordered-pair sample-space table. Find P(sum = 5) and P(sum is odd). Why are sums 2,3,4,5,6 not equally likely?

<details markdown="1">
<summary>提示</summary>

行是第一次数字，列是第二次。

</details>

<details markdown="1">
<summary>解答与检查</summary>

三行分别为 (1,1)、(1,2)、(1,3)；(2,1)、(2,2)、(2,3)；(3,1)、(3,2)、(3,3)。九个有序对等可能。和为 5 有 (2,3)、(3,2)，得 $2/9$。奇数和有 (1,2)、(2,1)、(2,3)、(3,2)，得 $4/9$。和为 2 只有一格，和为 4 有三格，所以不能按五种“和”平均分概率。

</details>

</div>

## 能同时发生吗？有没有漏掉？ {#events}

**互斥（mutually exclusive）**是在同一次试验中不能同时发生，交集为空。**穷尽（exhaustive）**是覆盖所有可能结果。一次掷骰的奇数与偶数既互斥，又穷尽。

互斥未必穷尽：“1”与“2”漏掉 3、4、5、6。穷尽未必互斥：“不大于 4”与“不小于 3”覆盖所有面，却在 3、4 重叠。

一套互斥且穷尽的结果，概率和为 1。互斥的 A、B 没有交集需要扣除：

$$P(A\cup B)=P(A)+P(B).$$

有重叠时，就像 Venn 例题那样，共同部分只数一次。“不能同时发生”不等于独立，见[组合与条件概率](/zh/igcse/mathematics/combined-and-conditional-probability/#independence)。

<div class="lesson-check" markdown="1">

### 分别判断两种性质 {#practice-events}

**Question:** On one fair die roll, A = even and B = greater than 4. Are A,B mutually exclusive? Exhaustive? Find P(A ∪ B). Then find P(odd or 6), explaining when simple addition is valid.

<details markdown="1">
<summary>提示</summary>

先列出实际的面，再选规则。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$A=\{2,4,6\}$ 与 $B=\{5,6\}$ 共享 6，不互斥；并集 $\{2,4,5,6\}$ 漏掉 1、3，不穷尽。$P(A\cup B)=4/6=2/3$。奇数与 6 互斥，所以 $P(\text{odd or 6})=3/6+1/6=2/3$。数值相同，区域计数的依据却不同。

</details>

</div>

## 实验能确定什么？ {#experiments}

理论概率来自模型及假设，例如“公平骰子”。实验则用**相对频率（relative frequency）**估计：成功次数除以试验次数。随机实验重做，次数通常不同；偏离理论值本身不能证明模型错。

教学构造记录中，20 次掷骰出现 5 次六，$5/20=0.25$，而公平模型给出 $1/6$。另 20 次出现两次六，合并为 $7/40=0.175$，更接近 $1/6$；但每个新批次不一定都改善估计。

恰当选择的大样本通常减小概率和总体特征估计的机会波动，却不能保证下一次结果、证明完全公平，或修复抽样偏差。有问题的方法测量再多次，也可能保留同一偏差。

试验 $n$ 次，事件概率为 $p$：

$$\text{expected frequency}=np.$$

公平骰掷 120 次，六的期望次数 $120\times1/6=20$。这是反复多批试验的长期平均计数，不是本批必须出现的次数。若改用实验模型 0.25，则估计期望为 30，必须说明使用哪个模型。

<div class="lesson-check" markdown="1">

### 比较模型与证据 {#practice-experiment}

**Question:** Constructed coin records have 12 heads in 20 tosses, then 36 heads in 80 further tosses. Find each relative frequency and the pooled estimate. Predict expected heads in the next 50 tosses using a fair model and using the pooled estimate. Must either happen exactly? Is fairness proved? Would a larger basketball-team-only survey necessarily estimate whole-school height better?

<details markdown="1">
<summary>提示</summary>

合并次数与总数，不是不加权地平均百分比。区分随机波动与选择偏差。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$12/20=0.6$，$36/80=0.45$。合并估计 $(12+36)/(20+80)=0.48$，不是 $(0.6+0.45)/2=0.525$。公平模型期望 $50\times0.5=25$ 次；估计模型期望 $50\times0.48=24$ 次。两者都不保证发生，有限数据不能证明完全公平。只调查篮球队，无论人数多大都可能偏离全校身高；抽样合适时，增加记录才有助于减小机会波动。

</details>

</div>

## 独立检查 {#practice}

完成[记号](#practice-sets)、[Venn 人数](#practice-venn)、[机会模型](#practice-model)、[样本空间](#practice-space)、[互斥与穷尽](#practice-events)和[实验证据](#practice-experiment)。解释分母和等可能假设。

## 回补后再试 {#retry}

交并补混淆，回到[集合](#sets)，再做 A；漏人或重复计数，回到[Venn](#venn)，再做 B；漏结果或乱加概率，回到[样本空间](#sample-spaces)和[事件](#events)，再做 C；合并比例或把期望当保证，回到[实验](#experiments)，再做 D。先关闭旧解答。

<div class="lesson-check" markdown="1">

### 重试 A {#retry-sets}

**Question:** Let ξ = {0,1,2,3,4,5,6}, A = {0,2,4,6}, B = {1,3,5}. Find A′, A ∩ B, A ∪ B and their sizes. Is {0} empty?

<details markdown="1">
<summary>提示</summary>

0 也可以是成员。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$A'=B$，有 3 个；$A\cap B=\varnothing$，有 0 个；$A\cup B=\xi$，有 7 个。$\{0\}$ 不空，有一个成员。

</details>

</div>

<div class="lesson-check" markdown="1">

### 重试 B {#retry-venn}

**Question:** Among 40 people, 22 choose tea, 18 coffee and 7 neither. Draw a Venn diagram and find P(both) for one uniformly random person.

<details markdown="1">
<summary>提示</summary>

用总数减去都不选的人数，先求并集。

</details>

<details markdown="1">
<summary>解答与检查</summary>

并集 $40-7=33$，交集 $22+18-33=7$。全集框内填只选茶 15、交集 7、只选咖啡 11、都不选 7；总计 40，所以 $P(\text{both})=7/40$。直接相加集合总数会把交集人数算两遍。

</details>

</div>

<div class="lesson-check" markdown="1">

### 重试 C {#retry-events}

**Question:** Toss a fair coin twice independently. List ordered outcomes and find P(exactly one head). Are “at least one head” and “at least one tail” mutually exclusive? Exhaustive?

<details markdown="1">
<summary>提示</summary>

HT 与 TH 是不同的有序结果。

</details>

<details markdown="1">
<summary>解答与检查</summary>

样本空间 $\{HH,HT,TH,TT\}$。恰一次正面有 HT、TH，概率 $2/4=1/2$。两个事件都含 HT、TH，不互斥；并集覆盖全部空间，所以穷尽。

</details>

</div>

<div class="lesson-check" markdown="1">

### 重试 D {#retry-experiment}

**Question:** There are 18 successes in 30 constructed attempts, then 9 in 10 further attempts. Estimate probability using all trials and expected successes in 80 more. Must the next count equal this, and must every new batch improve the estimate?

<details markdown="1">
<summary>提示</summary>

合并计数后再除。

</details>

<details markdown="1">
<summary>解答与检查</summary>

估计 $(18+9)/(30+10)=27/40=0.675$；期望 $80\times0.675=54$。既不保证恰好 54，也不保证每批都改善。增加恰当试验通常有帮助，但仍会随机波动，也没有证明真实概率正好为 0.675。

</details>

</div>

## 带着判断方法继续 {#next-step}

接着学[组合与条件概率](/zh/igcse/mathematics/combined-and-conditional-probability/#start)，随后完成[数据混合回顾](/zh/igcse/mathematics/mixed-review/#data-review)。学过其他主题后，关闭帮助再回到下题。

<div class="lesson-check" markdown="1">

### 稍后回顾 {#later-check}

**Question:** Six equally likely tickets are labelled 1 to 6. A is even and B prime. Draw a Venn diagram and find P(A ∩ B), P(A ∪ B), P(neither). For 60 random selections with replacement, predict the expected intersection count. Would an observed count of 12 alone disprove the model?

<details markdown="1">
<summary>提示</summary>

先把六个标签放进四区。

</details>

<details markdown="1">
<summary>解答与检查</summary>

只在 A 为 $\{4,6\}$，交集 $\{2\}$，只在 B 为 $\{3,5\}$，都不在 $\{1\}$。所求概率为 $1/6$、$5/6$、$1/6$，期望次数 $60\times1/6=10$。12 次可能来自随机波动；一次不一致不能单独证明模型错或对。

</details>

</div>

## 范围与来源 {#sources}

<details markdown="1">
<summary>资格与实际配对阅读</summary>

OxfordAQA International GCSE Mathematics **9260 v5.1**：N9 印刷 p.13（PDF p.12），S9–16 印刷 pp.25–26（PDF pp.24–25）。[官方大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-gcse-mathematics-specification.pdf#page=24)。下一页在这些基础上学习独立事件的乘法与条件概率。

写作前实际配对阅读：Specimen 2018 **9260/1C Q6**，QP p.5 / MS p.4（机会词汇）；**Q12**，QP p.12 / MS p.7；**Q24**，[QP p.20](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9260-92601C-international-gcse-mathematics-specimen-paper-2016-v1.pdf#page=20) / [MS p.10](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9260-92601C-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=10)（Venn 交集）；**9260/2C Q23**，QP p.21 / MS p.9（表格概率）。文件名 2016 不是考季。任务全部自拟，无官方分值，不对构造数据作正式显著性检验。

</details>
