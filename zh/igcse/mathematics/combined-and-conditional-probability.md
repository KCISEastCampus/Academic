---
layout: subjects
title: "组合与条件概率"
mathjax: true
grade: igcse
subject: igcse-mathematics
lang: zh-CN
translation_of: /igcse/mathematics/combined-and-conditional-probability/
permalink: /zh/igcse/mathematics/combined-and-conditional-probability/
reading_layout: true
study_page: true
toc_headings: "h2"
---

## 第一个结果会改变下一次机会吗？ {#start}

抛硬币不会从骰子上拿走某个面；从袋子拿出一个筹码却会改变袋中剩余物。这一点决定了树图第二层该填什么概率。

本页从独立事件的组合，继续到已知条件下的概率。先修是[样本空间](/zh/igcse/mathematics/sets-and-probability/#sample-spaces)、[补事件](/zh/igcse/mathematics/sets-and-probability/#probability-scale)、分数和[双向表](/zh/igcse/mathematics/data-and-averages/#two-way)。所有例题、任务和数据均为**自拟题，无官方分值**，情境为教学构造，并非真实实验测量。

## 独立性是条件，不是捷径 {#independence}

A、B **独立（independent）**，是指知道一件是否发生，不改变另一件的概率。重复操作不自动独立，要看操作方式。

公平硬币与独立的公平骰子有 12 个等可能配对。A 表示正面，B 表示骰子偶数，其中三对同时满足两者：

$$P(A\cap B)=\frac3{12}=\frac14=\frac12\times\frac36=P(A)P(B).$$

已知正面，骰子仍是六面中三个偶数。因此独立事件有：

$$P(A\cap B)=P(A)\times P(B).$$

左边是**交集：两件都发生**，不是并集。本例并集含全部六个正面配对，加三个反面且偶数配对，共 $9/12=3/4$，不是 1/4。列出结果能核对乘法该配哪个符号。

独立不同于互斥。若 A、B 概率都为正，却不能同时发生，则 $P(A\cap B)=0$，而 $P(A)P(B)>0$，所以不独立。“概率都为正”不可漏：零概率事件是这段论证的例外。

<div class="lesson-check" markdown="1">

### 检验独立性的说法 {#practice-independent}

**Question:** A fair die is rolled once. A = even and B = odd. Compute P(A), P(B), P(A ∩ B) and P(A)P(B). Are these events independent or mutually exclusive? Then consider A = heads on a biased coin with P(H) = 2/5 and B = a multiple of 3 on an independent fair die: find P(A ∩ B) and P(A ∪ B).



<details markdown="1">
<summary>提示</summary>

一次骰子能否同时满足两条件？第二个模型先用独立交集乘法，再确保并集只算一次重叠。

</details>

<details markdown="1">
<summary>解答与检查</summary>

一次骰子中 $P(A)=P(B)=1/2$，但 $P(A\cap B)=0$，$P(A)P(B)=1/4$，所以互斥而不独立。独立偏硬币与骰子的交集为 $(2/5)(2/6)=2/15$，并集为 $2/5+1/3-2/15=3/5$。仅仅有“两件事”不能成为把原概率相乘的理由。

</details>

</div>

## 树图把先后顺序保留下来 {#tree}

**树状图（tree diagram）**先画第一阶段的分支，再从每个第一结果画出第二阶段的可能。一个节点出发的各分支互斥又穷尽，所以概率之和为 1。

一个末端代表完整路径。**沿路径相乘**，因为每条支路的概率都是针对已经到达那个节点的情况。不同完整路径若不能同时发生，就把它们的概率**相加**。两阶段独立时，各第一分支后的第二层概率不变；不独立时，要使用当前分支条件下的概率。

<div class="worked-example" markdown="1">

### 完整示范：先找路径，再找事件 {#example-tree}

**Question:** A fair coin is tossed and an independent spinner lands R with probability 1/3 or G with probability 2/3. Draw a tree and find P(H and G) and P(exactly one of H and R).



第一层 H、T 各为 1/2；两条分支之后都画 R 为 1/3、G 为 2/3，因为独立性使转盘概率不变。

![独立概率树：HR 为 1/6、HG 为 1/3、TR 为 1/6、TG 为 1/3，各支路已标概率。](/assets/img/igcse-statistics-tree.svg)

$$P(HG)=\frac12\times\frac23=\frac13.$$

“恰好 H、R 中的一项”是 HG 或 TR；这里根本没有 HH 这条路径，HR 是两条件都满足，不是恰好一项。

$$P(\text{exactly one})=P(HG)+P(TR)=\frac13+\frac16=\frac12.$$

检查每组分支概率和为 1；四个末端 $1/6+1/3+1/6+1/3=1$。不能直接相加原概率 1/2 与 1/3，那样还会把 HR 的交集重复算。

</div>

<div class="lesson-check" markdown="1">

### 画树，分清事件 {#practice-tree}

**Question:** A coin has P(H) = 0.6. It is tossed twice independently with the same probability. Draw a fully labelled tree. Find P(exactly one H), P(at least one H), and the expected number of “at least one H” results in 100 repetitions of this two-toss experiment.



<details markdown="1">
<summary>提示</summary>

恰好一次有两种先后；至少一次可以看补事件。

</details>

<details markdown="1">
<summary>解答与检查</summary>

起点 H 为 0.6、T 为 0.4；两个节点后仍各画 H 0.6、T 0.4。HH、HT、TH、TT 的末端概率分别为 0.36、0.24、0.24、0.16。恰好一次 H 为 $0.24+0.24=0.48$；至少一次为 $1-0.16=0.84$，也可加 HH、HT、TH。期望 $100\times0.84=84$，不是保证。四个末端和为 1；恰好一次必须排除 HH。

</details>

</div>

## 不放回，就要重新数袋子 {#without-replacement}

**放回（with replacement）**是抽出后放回并混匀；**不放回（without replacement）**是把抽到的物品留在外面。固定袋子、放回且充分混匀可以作为独立抽取模型；不放回时，剩余组成取决于第一次抽到什么。

$P(B\mid A)$ 读作“**已知 A** 时 B 的概率”。符号 $\mid$ 表示 A 已成为条件。$P(A)>0$ 时：

$$P(B\mid A)=\frac{P(A\cap B)}{P(A)},\qquad P(A\cap B)=P(A)P(B\mid A).$$

分母把注意范围缩小到 A，不总是最初的全集。独立是 $P(B\mid A)=P(B)$ 的特殊情况；检查条件之前不能直接沿用原概率。

<div class="worked-example" markdown="1">

### 完整示范：每条分支都更新 {#example-dependent}

**Question:** A bag has 3 red and 2 blue counters. Draw two at random without replacement. Draw the tree and find the probabilities of exactly one red and at least one red.



第一层 R 为 3/5，B 为 2/5。抽到 R 后，四枚中剩 2R、2B；抽到 B 后，四枚中剩 3R、1B。第二次分母都是 4，但分子不同。

![3R、2B 不放回树：R 后为 R 2/4、B 2/4；B 后为 R 3/4、B 1/4；RR、RB、BR、BB 概率为 3/10、3/10、3/10、1/10。](/assets/img/igcse-statistics-tree-dependent.svg)

$$P(RB)=\frac35\times\frac24=\frac3{10},\qquad P(BR)=\frac25\times\frac34=\frac3{10}.$$

恰好一枚红有互斥路径 RB、BR，得 $3/10+3/10=3/5$。至少一枚红只排除 BB：

$$P(\text{at least one R})=1-\frac25\times\frac14=\frac9{10}.$$

用 RR、RB、BR 检查：$3/10+3/10+3/10=9/10$。第二次仍用 3/5 或 2/5，就变成了另一种过程的模型。

</div>

<div class="lesson-check" markdown="1">

### 比较已知与未知的第一次结果 {#practice-dependent}

**Question:** A bag has 4 red and 3 blue counters. Two are drawn randomly without replacement. Draw a tree. Find P(exactly one blue), P(second blue given first red), and P(second blue) before knowing the first result. Explain whether the two colour events are independent.



<details markdown="1">
<summary>提示</summary>

尚不知道第一次时，第二次蓝色包含 RB 与 BB。

</details>

<details markdown="1">
<summary>解答与检查</summary>

第一层 R 4/7、B 3/7。R 后：R 3/6、B 3/6；B 后：R 4/6、B 2/6。末端 RR、RB、BR、BB 为 $2/7,2/7,2/7,1/7$，总和 1。

$$P(\text{exactly one B})=\frac47\times\frac36+\frac37\times\frac46=\frac47.$$

$$P(B_2\mid R_1)=\frac36=\frac12,\qquad P(B_2)=\frac27+\frac17=\frac37.$$

已知第一次结果后，第二次蓝色概率改变了（1/2 不等于 3/7），所以不独立。“第二次总体概率没变”不等于“每条第一分支后的概率都没变”。

</details>

</div>

## 表格中先找“已知谁” {#conditional-table}

双向表不需要先假定事件独立。以下是自拟记录：

| Travel mode | Late | On time | Total |
| --- | ---: | ---: | ---: |
| Bus | 12 | 8 | 20 |
| Walk | 6 | 24 | 30 |
| Total | 18 | 32 | 50 |

“已知坐 Bus，迟到的概率”只看 20 位 Bus 使用者，所以 $P(\text{late}\mid\text{bus})=12/20=3/5$。“已知迟到，坐 Bus 的概率”只看 18 位迟到者，所以 $P(\text{bus}\mid\text{late})=12/18=2/3$。“Bus 且迟到”则看全部 50 人，得 $12/50=6/25$。分子相同，比较群体不同。

总体迟到概率为 $18/50=9/25$，不同于 3/5，所以在这份有限群体模型里，迟到与坐 Bus 不独立。若条件比例等于相应总体比例，表格也可以显示独立；要验证，不凭标签猜。

<div class="lesson-check" markdown="1">

### 自己建立比较群体 {#practice-conditional}

**Question:** Of 60 people, 24 cycle and 28 bring water; 16 do both. Build a complete two-way table. Find P(cycle given water), P(water given cycle) and P(cycle and water). Test whether cycling and bringing water are independent in this group.



<details markdown="1">
<summary>提示</summary>

先填交集，再补行列总数。

</details>

<details markdown="1">
<summary>解答与检查</summary>

完整表是：

| | Water | No water | Total |
| --- | ---: | ---: | ---: |
| Cycle | 16 | 8 | 24 |
| Do not cycle | 12 | 24 | 36 |
| Total | 28 | 32 | 60 |

$$P(C\mid W)=\frac{16}{28}=\frac47,\quad P(W\mid C)=\frac{16}{24}=\frac23,\quad P(C\cap W)=\frac{16}{60}=\frac4{15}.$$

但 $P(W)=28/60=7/15$ 不等于 2/3，所以不独立。也可比较乘积 $(24/60)(28/60)=14/75$ 与交集 $4/15=20/75$，两者不同。有条件的题不能自动用 60 作分母。

</details>

</div>

<div class="lesson-check" markdown="1">

### 另一张表，不同结论 {#practice-independent-table}

**Question:** Thirty equally likely cards have these counts: red-even 6, red-odd 4, blue-even 12, blue-odd 8. Build a two-way table with totals and decide whether “red” and “even” are independent. Explain whether independent means mutually exclusive.



<details markdown="1">
<summary>提示</summary>

比较红牌中的偶数比例与所有牌的偶数比例。

</details>

<details markdown="1">
<summary>解答与检查</summary>

红/蓝两行分别为 6、4、总计10 和 12、8、总计20；偶/奇两列总计18、12，全表30。$P(E\mid R)=6/10=3/5=P(E)=18/30$，所以独立。也有 $P(R\cap E)=6/30=1/5=(1/3)(3/5)$。它们不互斥，因为六张牌同时满足两者。

</details>

</div>

## 独立选择模型 {#practice}

完成[独立与互斥](#practice-independent)、[独立树](#practice-tree)、[变化的袋子](#practice-dependent)、[条件表](#practice-conditional)和[用计数检验独立](#practice-independent-table)。解释第二层概率和每个分母，不能只报最后分数。

## 修正模型，再试 {#retry}

没有理由就乘原概率，回到[独立性](#independence)，再做 A；没完成路径就加分支，回到[树图](#tree)，再做 A；没有更新袋子或把条件反过来，回到[不放回](#without-replacement)和[表中比较群体](#conditional-table)，再做 B。先关闭原答案。

<div class="lesson-check" markdown="1">

### 重试 A {#retry-independent}

**Question:** Independent machines pass an item with probabilities 0.9 and 0.8. Draw the two-stage pass/fail tree. Find the probability that exactly one machine fails, and that at least one fails. State the assumption needed to use 0.8 on both second-stage branches.



<details markdown="1">
<summary>提示</summary>

恰好一次失败有两条路径；至少一次还包含两次都失败。

</details>

<details markdown="1">
<summary>解答与检查</summary>

第一层 P/F 为 0.9/0.1；两节点后的第二层 P/F 均为 0.8/0.2。PP、PF、FP、FF 分别为 0.72、0.18、0.08、0.02。恰好一次失败 $0.18+0.08=0.26$；至少一次 $1-0.72=0.28$。第二台通过概率须不受第一台结果影响，即独立；若两台可能共享故障原因，就要重查这个假设。

</details>

</div>

<div class="lesson-check" markdown="1">

### 重试 B {#retry-conditional}

**Question:** A box has 2 green and 3 yellow counters. Two are drawn without replacement. Draw a tree, find P(at least one green), P(second green given first yellow) and P(first yellow given second green).



<details markdown="1">
<summary>提示</summary>

最后一个条件是已知第二次颜色，用 YG 路径除以所有以 G 结束的路径。

</details>

<details markdown="1">
<summary>解答与检查</summary>

第一层 G/Y 为 2/5、3/5；G 后 G/Y 为 1/4、3/4，Y 后为 2/4、2/4。GG、GY、YG、YY 概率为 1/10、3/10、3/10、3/10。至少一绿 $1-3/10=7/10$。$P(G_2\mid Y_1)=2/4=1/2$；$P(Y_1\mid G_2)=(3/10)/(1/10+3/10)=3/4$。反转条件会改变比较群体。末端概率和为 1。

</details>

</div>

## 再联系数据 {#next-step}

前往[数据混合回顾](/zh/igcse/mathematics/mixed-review/#data-review)，稍后与[数与运算](/zh/igcse/mathematics/mixed-review/#number-review)、[代数](/zh/igcse/mathematics/mixed-review/#algebra-review)、[几何](/zh/igcse/mathematics/mixed-review/#geometry-review)连接。学过其他主题后，不看方法标签或旧解答，完成下题。

<div class="lesson-check" markdown="1">

### 稍后的问题 {#later-check}

**Question:** Bag A contains 2 red and 1 blue counter; bag B contains 1 red and 2 blue. Choose a bag with equal chance, then draw one counter randomly. Find P(red) and P(bag A given red). Are choosing A and drawing red independent? If the experiment is repeated 100 times with the bags restored each time, predict the expected red count.



<details markdown="1">
<summary>提示</summary>

树图先分袋子；“已知红色”只看红色末端。

</details>

<details markdown="1">
<summary>解答与检查</summary>

A/B 各为 1/2；A 后 R/B 为 2/3、1/3；B 后为 1/3、2/3。两条红色路径概率为 $1/2\times2/3=1/3$、$1/2\times1/3=1/6$。所以 $P(R)=1/3+1/6=1/2$，$P(A\mid R)=(1/3)/(1/2)=2/3$。由于 $P(R\mid A)=2/3$ 不等于 $P(R)=1/2$，两事件不独立。期望红色次数 $100\times1/2=50$，并非保证。

</details>

</div>

## 范围与来源 {#sources}

<details markdown="1">
<summary>资格、来源阅读与符号</summary>

OxfordAQA International GCSE Mathematics **9260 v5.1**，S17–18，印刷 p.26（PDF p.25）。[官方大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-gcse-mathematics-specification.pdf#page=25)。原 PDF 图像的独立乘法规则印的是交集，纯文本提取可能误读成并集；前文十二结果的计数也独立核对了数学关系。

实际阅读：Specimen 2018 **9260/2E Q4**，[QP p.3](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92602E-international-gcse-mathematics-specimen-paper-2016-v1.pdf#page=3) / [MS p.4](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92602E-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=4)，偏硬币独立重复；**9260/1E Q27**，[QP p.26](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92601E-international-gcse-mathematics-specimen-paper-2016-v1.pdf#page=26) / [MS p.13](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92601E-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=13)，不放回与至少一次；**9260/2C Q23**，QP p.21 / MS p.9，表格概率。来源题用于核对要求，本页全部为新自拟题，无官方分值。不额外要求贝叶斯定理或正式统计检验。

</details>
