---
layout: subjects
title: "伯努利与二项分布"
mathjax: true
grade: as
subject: as-mathematics
lang: zh-CN
translation_of: /alevel/as-mathematics/binomial/
permalink: /zh/alevel/as-mathematics/binomial/
toc_headings: h2, h3
study_page: true
---

[AS 数学学习路线](/zh/alevel/as-mathematics/#learning-route) · S1.3 · OxfordAQA 9660 v5.2

先用纸笔尝试题目，再按需打开提示；完成后用解答核对方法、条件与结果。所有题目均为**自拟题**，没有官方分值。英文题干、公式、数值与英文页一致；中文解释帮助你逐步独立用英文作答。

- [L21 从伯努利试验到二项矩与尾概率](#l21)

## L21 · 从伯努利试验到二项矩与尾概率 {#l21}

目标：推导矩、选择模型，并准确处理严格尾概率。先修：L13、L18–L20。

伯努利变量 $B$ 以 1 表示成功、0 表示失败，成功概率为 $p$：

$$E(B)=0(1-p)+1p=p,\quad E(B^2)=p,\quad\operatorname{Var}(B)=p-p^2=p(1-p).$$

若 $B_1,\ldots,B_n$ 独立且成功概率均为 $p$，则 $X=\sum_{i=1}^n B_i$ 计数固定次数中的成功。结合独立性与 L20：

$$E(X)=\sum_{i=1}^n p=np,\qquad\operatorname{Var}(X)=\sum_{i=1}^n p(1-p)=np(1-p).$$

$r$ 次成功的位置有 $\binom nr$ 种，每种概率为 $p^r(1-p)^{n-r}$，故 $P(X=r)=\binom nr p^r(1-p)^{n-r}$。四个条件缺一不可：成功或失败、固定次数、各次独立、成功概率相同。无放回抽样不能自动视为二项。标准差为 $\sqrt{np(1-p)}$。

### 示范与推理 {#l21-worked}

**Question:** A constructed model has $X\sim\mathrm{Bin}(5,0.2)$. Find $P(X=2)$, $P(X>1)$, the mean and SD.

$P(X=2)=10(0.2)^2(0.8)^3=0.2048$。又 $P(X>1)=1-(0.8)^5-5(0.2)(0.8)^4=0.26272$。均值为 $1$，方差为 $0.8$，故标准差为 $\sqrt{0.8}$。累计概率表若给 $F(1)=P(X\le1)=0.73728$，同样用 $1-F(1)$ 求右尾，而不是取 $F(2)$。

### 带支架尝试 {#l21-scaffold}

**Question:** For this X, find $P(1\le X\le3)$ using cumulative notation, and evaluate it.

<details markdown="1">
<summary>提示</summary>

减去下端点以下的值，保留端点本身。

</details>

<details markdown="1">
<summary>解答与核验</summary>

$P(1\le X\le3)=F(3)-F(0)=0.99328-0.32768=0.6656$。这里累计值由给定分布计算，并非声称实际查阅了某一版公式册表格。

</details>

### 独立任务 {#l21-independent}

**Question:** A binomial variable has mean 3 and variance 2.4. Find n and p, derive its variance from independent Bernoulli indicators, and find $P(X\ge1)$. Would the same model automatically apply to 15 draws without replacement from 75 objects of which 15 are successes?

<details markdown="1">
<summary>提示</summary>

先用方差除以均值，再求次数，并检查抽样方案是否独立。

</details>

<details markdown="1">
<summary>解答与核验</summary>

$1-p=2.4/3=0.8$，得 $p=0.2,n=15$。每个指标变量方差为 $p-p^2=0.16$，由独立性相加得 $15(0.16)=2.4$。尾概率为 $1-(0.8)^{15}\approx0.964816$。无放回时成功概率会随先前结果改变，不能自动使用二项模型。

</details>

### 诊断与修正 {#l21-diagnosis}

先列事件包含哪些整数，再取补集。仅凭均值不能同时确定 n 与 p；还需方差关系与模型条件。本组不需要正态、泊松近似或假设检验。

### 再尝试 {#l21-retry}

**Question:** For $Y\sim\mathrm{Bin}(4,1/2)$, find $P(Y\ge3)$ and the variance. State the excluded integers in the complementary event.

<details markdown="1">
<summary>提示</summary>

至少三次包括三与四。

</details>

<details markdown="1">
<summary>解答与核验</summary>

$P(Y\ge3)=(4+1)/16=5/16$。补事件包含 $0,1,2$，方差为 $4(1/2)(1/2)=1$。

</details>

## 学完之后 {#next-step}

收起解答，检查自己能否独立完成本课各组的再尝试，并解释方法与适用条件。仍有困难时回看对应示范；完成后继续下一课。

[上一课：离散随机变量](/zh/alevel/as-mathematics/random-variables/) · [课程目录](/zh/alevel/as-mathematics/#learning-route) · [下一课：匀加速直线运动](/zh/alevel/as-mathematics/constant-acceleration/)

## 来源与范围 {#sources}

按[当前 9660 官方大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf)组织。配套评分材料用于核对作答证据；本页题目全部另行自拟，不能称为官方原题或官方评分标准。

Specification §3.2 S1.3; MA02 January 2025 Q6, QP pp12–13, MS p13.

[MA01 2025 年 1 月原卷](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-question-paper.pdf) · [配套 MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-mark-scheme.pdf) · [MA02 2025 年 1 月原卷](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-question-paper.pdf) · [配套 MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-mark-scheme.pdf)

完成标准是能独立解释方法与检查条件，不是看完解答。未经过学生试用，不据此宣称学习效果已验证。
