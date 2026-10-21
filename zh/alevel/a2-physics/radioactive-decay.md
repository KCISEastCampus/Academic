---
title: 放射性指数变化
layout: subjects
mathjax: true
grade: a2
subject: a2-physics
lang: zh-CN
translation_of: /alevel/a2-physics/radioactive-decay/
permalink: /zh/alevel/a2-physics/radioactive-decay/
toc_headings: h2, h3, h4
study_page: true
---

[A2 物理](/zh/alevel/a2-physics/) · PH03 · 3.9.2 放射性的指数变化

**单个原子核的衰变不可预测，为什么总体却有可预测的半衰期？** 从原子核模型理解活度，再用计数记录检验模型，而不是直接接受一条画好的光滑曲线。

- **学习：**从[随机衰变](#random-decay)与[恒定概率模型](#model-constant-probability)开始，再将方程与[图像](#decay-graphs)、[测量](#counting-and-background)联系起来。
- **数据分析：**先尝试[原始记录探究](#data-decay-records)，再展开提示或分析。
- **复习：**关闭解答完成[练习](#practice)，并用英文解释方法选择。

**开始前：**通过 [AS 物理](/alevel/as-physics/)回顾衰变类型、半衰期与本底辐射。复习[电容器放电](/zh/alevel/a2-physics/capacitor-charge-and-discharge/)中的指数图像。使用自然对数，并保持时间单位一致。

例题、检查点与计数探究均为自拟题；所有计数记录均为**构造教学数据**，不是已完成实验的实测结果。练习 3–4 是根据 OxfordAQA PH03 试卷制作的改编题，题目表述与任务已有修改，不设置官方分值。来源见页末。

**核心路线：**完成概率模型、例题 1–2、两组图像任务与计数探究的基础部分。标为“进一步理解”或“挑战”的内容可随后阅读；衰变曲线与自然对数图仍是核心内容。

## 随机衰变 {#random-decay}

**Try first:** a sample has a half-life of 60 s. A student says that every nucleus will decay exactly 60 s after it is formed. Is that what half-life means? Explain what it says about a large sample.

<details markdown="1">
<summary>核对你的推理</summary>

半衰期描述的是总体：60 s 后，大样品中约有一半原子核尚未衰变。它没有为单个原子核安排固定的衰变时刻。有些核更早衰变，有些则能经历多个半衰期而不衰变。

</details>

对一个给定的不稳定原子核，我们无法预测它何时衰变。在本课采用的模型下，同一核素的相同原子核在相等短时间内的衰变概率恒定：一个尚未衰变的原子核不会仅仅因为存在时间更长，就变得更容易衰变。

**随机（random）**指单个原子核的衰变时刻不可预测。**自发（spontaneous）**指衰变不需要外界触发；在本课的学校物理模型中，普通的温度、压强或化学状态变化不会控制衰变常量。移动探测器可以改变计数率，却不会因此改变放射源的活度。

**衰变常量**描述单位时间内的衰变概率。在足够短的时间间隔内，衰变概率近似为 $\lambda\Delta t$；此近似要求 $\lambda\Delta t\ll1$。

<details markdown="1">
<summary>进一步理解：有限时间内的衰变概率</summary>

在有限时间间隔内，衰变概率为 $1-e^{-\lambda\Delta t}$，不会超过一。不能把短时间近似推广到任意长的时段。核心要求是解释恒定衰变概率，并使用下文的指数模型。

</details>

当原子核数目很大时，相等短时间内发生衰变的核数近似正比于尚未衰变的核数。单次结果会涨落，但大量原子核呈现可重复的统计趋势。“随机”并不表示每个核都必须在一个半衰期后衰变，也不表示相等时间内衰变的核数相等。

### 检查点：随机不等于没有规律 {#checkpoint-random-decay}

*自拟题。*

Two samples contain the same isotope. Sample P has twice as many undecayed nuclei as sample Q. Compare their expected activities. Does a nucleus that has survived for a long time have a greater probability of decaying in the next second?

<details markdown="1">
<summary>解释</summary>

P 的预期活度是 Q 的两倍，因为可发生衰变的原子核数目是两倍。在条件不变时，一个长期未衰变的原子核在下一秒内发生衰变的概率，与其他相同原子核相同。较小样品的相对涨落可能更大，但这不会改变该核素的衰变常量。

</details>

### 建模：概率相同，原子核越来越少 {#model-constant-probability}

*自拟题；构造概率模型，不是使用放射源完成的实验。*

Represent 1000 undecayed nuclei by counters. In each 20 s model interval, independently assign each remaining counter a random integer from 1 to 5, with all five outcomes equally likely. Remove a counter if its number is 5; never return removed counters. The probability of removal is 0.20 in every interval.

| Interval number | Time / s | Expected number remaining | Expected number removed in this interval |
| --- | --- | --- | --- |
| 0 | 0 | 1000 | — |
| 1 | 20 | ? | ? |
| 2 | 40 | ? | ? |
| 3 | 60 | ? | ? |

1. Complete the expected-value table. Does the same number, or the same fraction of the surviving population, disappear each interval?
2. One illustrative run leaves 792, 642 and 504 counters after the three intervals. These counts are constructed examples of possible outcomes. Do they contradict constant removal probability? Explain.
3. A student removes exactly 200 counters every interval until none remain. Explain why this models a different rule. Predict what happens to the expected number removed in the first interval if the starting population is doubled.

<details markdown="1">
<summary>提示：将规则用于剩下的原子核</summary>

每行以上一行的剩余数量为起点，乘以 0.80 得到预期剩余量；两者之差就是预期移除量。

</details>

<details markdown="1">
<summary>模型反馈</summary>

| Interval number | Time / s | Expected number remaining | Expected number removed in this interval |
| --- | --- | --- | --- |
| 0 | 0 | 1000 | — |
| 1 | 20 | 800 | 200 |
| 2 | 40 | 640 | 160 |
| 3 | 60 | 512 | 128 |

每轮的预期剩余比例都是 0.80，因此预期数量按等比规律下降。实际移除量会涨落，示例计数不必等于期望值；仅凭这三行结果，也不能证明概率恒定。

每轮固定移除 200 个会产生直线下降：移除量占当时剩余数量的比例越来越大。概率模型则因剩余核数减少，而产生越来越少的预期移除量。初始数量加倍时，第一轮的预期移除量加倍为 400，但每个核的概率不变。被移除的计数物不再放回，对应核模型中没有补充来源。

</details>

## 指数模型 {#exponential-model}

令 $N$ 为**所研究核素尚未衰变的原子核数**，不是包含子体在内的全部原子数。在 $t=0$ 时，核数为 $N_0$。对衰变常量 $\lambda$ 恒定的单一核素，光滑的宏观模型为：

$$\frac{\mathrm dN}{\mathrm dt}=-\lambda N.$$

负号表示核数减少。这个微分方程描述总体的预期变化趋势；单次实测的衰变记录是离散的，并且存在涨落。

恒定衰变概率，使相等时间间隔内的剩余比例相同，正如前面的计数物模型。对应的连续总体模型为：

$$\boxed{N=N_0e^{-\lambda t}}.$$

**活度**是取正值的衰变速率：

$$\boxed{A=-\frac{\mathrm dN}{\mathrm dt}=\lambda N=A_0e^{-\lambda t}}.$$

一贝可勒尔表示每秒一次衰变。若活度以 Bq 为单位，$\lambda$ 应使用 $\mathrm{s^{-1}}$。指数中的时间可以统一用小时，但不能把单位为 $\mathrm{h^{-1}}$ 的衰变常量与以 Bq 表示的活度直接组合来求核数。

**适用条件：**只追踪一种核素，没有补充来源，且衰变常量恒定。若样品含多种放射性核素，或子体的活度不可忽略，测得的**总活度**可能不再是单一指数函数。母体核素仍可遵循自身的衰变规律。

<details markdown="1">
<summary>进一步理解：积分推导与活度图下的面积</summary>

分离变量，并将核数从 $N_0$ 积分到 $N$：

$$\int_{N_0}^{N}\frac{\mathrm dN'}{N'}=-\lambda\int_0^t\mathrm dt'.$$

$$\ln\left(\frac{N}{N_0}\right)=-\lambda t.$$

两边取指数，就得到上文的核数方程。此推导帮助理解；先掌握模型的含义与使用方法。

母体活度—时间图下的面积，表示该时段内发生衰变的母体核数：

$$\int_0^t A\,\mathrm dt=N_0-N(t).$$

这不是剩余核数。$N$–$t$ 图斜率的大小给出活度；$A$–$t$ 图的斜率单位不同，不能当作活度。

</details>

## 半衰期 {#half-life}

半衰期是某核素尚未衰变的预期核数或活度减半所需的时间：

$$\boxed{T_{1/2}=\frac{\ln2}{\lambda}}.$$

$$\boxed{\frac{N}{N_0}=\frac{A}{A_0}=2^{-t/T_{1/2}}}.$$

每再经过一个半衰期，**剩余量**都会减半，依次为初值的二分之一、四分之一、八分之一；不是每个时间间隔都减少同样的数量。指数关系也能处理非整数个半衰期。

<details markdown="1">
<summary>进一步理解：半衰期公式从哪里来</summary>

在指数方程中令 $N/N_0=1/2$，两边取自然对数：

$$\ln\left(\frac12\right)=-\lambda T_{1/2}.$$

对数为负，因此移项后得到正的半衰期。核心技能是使用此关系，并用对数重排指数方程；第一次计算前不必先完成这段证明。

</details>

### 例题 1：非整数个半衰期 {#example-1-half-life}

A single-isotope source has initial activity $1600\,\mathrm{Bq}$ and half-life $12.0\,\mathrm{min}$. Find its activity after $30.0\,\mathrm{min}$.

经过的时间为 2.5 个半衰期，因此只连续减半两次或三次都不能得到所求结果：

$$A=1600\times2^{-30.0/12.0}=\boxed{283\,\mathrm{Bq}}.$$

**检查：**结果介于两个半衰期后的 400 Bq 与三个半衰期后的 200 Bq 之间。两个时间都用分钟，因此指数无量纲。

## 从质量到活度 {#mass-to-activity}

若样品中所研究核素的质量为 $m$，摩尔质量为 $M$，则：

$$n=\frac{m}{M},\qquad \boxed{N=\frac{m}{M}N_A}.$$

$m$ 与 $M$ 中的质量单位必须一致。这里的质量是所研究核素的质量，不是载液、容器或整个探测器的质量。本课使用 $N_A=6.02\times10^{23}\,\mathrm{mol^{-1}}$。

### 例题 2：先确定物理量，再选方程 {#example-2-mass}

A sample contains $1.20\times10^{-13}\,\mathrm{kg}$ of a single radioactive isotope with molar mass $0.0600\,\mathrm{kg\,mol^{-1}}$ and half-life $8.00\,\mathrm h$. Find its initial number of nuclei and activity.

先将该核素的质量换算成原子核数：

$$N_0=\frac{1.20\times10^{-13}}{0.0600}(6.02\times10^{23})=\boxed{1.20\times10^{12}}.$$

活度使用 Bq 时，时间须换为秒：

$$\lambda=\frac{\ln2}{8.00\times3600}=2.4068\times10^{-5}\,\mathrm{s^{-1}}.$$

$$A_0=\lambda N_0=\boxed{2.90\times10^7\,\mathrm{Bq}}.$$

最后相乘时使用未取整的核数。活度大不一定意味着质量大，因为活度还取决于半衰期。不能直接把质量当作 $N$。

## 计数与本底 {#counting-and-background}

**Try first:** a detector records 600 counts in 60 s with a source present. A separate background run gives 120 counts in 240 s. Can you subtract 120 directly from 600 to find the source contribution? Explain before calculating.

<details markdown="1">
<summary>核对你的推理</summary>

两次记录的时长不同，应比较**计数率**：总计数率为每秒 10 次，本底计数率为每秒 0.50 次。估计来自样品的计数率为每秒 9.5 次。这是探测计数率，不能直接当作源的活度。

</details>

探测器只能记录一部分辐射。设 $C_{\text{total}}$ 为时长 $\Delta t$ 的含源记录中的总计数，$C_b$ 为时长 $\Delta t_b$ 的本底记录中的计数：

$$r_b=\frac{C_b}{\Delta t_b},\qquad r=\frac{C_{\text{total}}}{\Delta t}-r_b.$$

这里的 $r$ 是扣除本底后，对来自源的探测计数率的估计。当源与探测器的几何关系、吸收条件、探测器响应和辐射产额均保持不变时，修正后的计数率与活度成正比。仅凭这种比例关系，就能追踪相对变化并求半衰期。

<details markdown="1">
<summary>进一步理解：从计数率求绝对活度</summary>

若有效探测比例已知且保持不变，可使用：

$$r=\varepsilon A.$$

有效探测比例 $\varepsilon$ 包含上述固定因素。因此，修正后的计数率可以反映活度的**相对变化**，却不一定能给出绝对活度。若要得到 $A$ 本身，必须知道 $\varepsilon$ 或具有等效的校准信息。

</details>

<img src="/assets/img/physics-decay-measurement.svg" alt="测量模型：尚未衰变的原子核通过活度等于衰变常量乘核数的关系决定活度。只有固定比例的辐射形成来自源的探测计数率；本底计数率叠加其上，并在记录时段内累积为计数。先将计数除以记录时长，再扣除本底计数率。" width="400" height="500" data-lazy-ignore="true">

**保持不变：**核素与样品位置、源到探测器的距离、吸收材料、探测器设置及相关本底条件。移动源会改变探测几何关系，并不能说明核素的衰变常量改变。计数率过高时，探测器响应与活度成正比的简单假设也可能失效。

以上是解释数据的原则。实际操作放射源必须使用学校批准的装置，并遵守教师监督下的辐射操作规程；本网页及其构造记录不代表已完成实际实验。

### 例题 3：本底记录不必与含源记录等时长 {#example-3-background}

*进一步应用：用给定的校准信息估计绝对活度。*

A detector records 720 counts in 60 s with a source present and 300 background counts in 300 s. The effective detection fraction is 0.20. Estimate the source activity, assuming it changes negligibly during each run.

$$r_b=\frac{300}{300}=1.0\,\mathrm{s^{-1}}.$$

$$r=\frac{720}{60}-1.0=11\,\mathrm{s^{-1}}.$$

$$A=\frac{r}{0.20}=\boxed{55\,\mathrm{Bq}}.$$

60 s 含源记录中应扣除的本底计数**期望值**为 60 次，不是另一次记录的 300 次。本底计数会涨落；扣除本底是估计来自源的贡献，而不是辨认哪些具体计数来自本底。

## 衰变曲线与对数图 {#decay-graphs}

对单一核素，$N$ 与 $A$ 都趋向零，其负斜率逐渐变得不那么负。用衰变曲线估计半衰期时，选一个纵坐标值及其一半，读出两者的时间差，再在曲线另一段可用区间重复检查。若计数率未扣本底，应将**高于本底的部分**减半，而不是将相对于零的总高度减半。

对探测条件固定、修正后为正的计数率，选择一个固定参考计数率 $r_{\text{ref}}$，例如 $1\,\mathrm{s^{-1}}$：

$$y=\ln\left(\frac{r}{r_{\text{ref}}}\right)=\ln\left(\frac{r_0}{r_{\text{ref}}}\right)-\lambda t.$$

对数作用于无量纲比值。作 $y$ 对 $t$ 的图，有：

$$m=-\lambda,\qquad \boxed{T_{1/2}=-\frac{\ln2}{m}}.$$

在有依据的最佳拟合直线上选取相距较远的两点求斜率，而不是选两个相邻且有噪声的读数。改变固定参考计数率只会改变截距，不会改变斜率；截距不一定为零。

<details markdown="1">
<summary>进一步理解：换一种对数底数</summary>

若改用以 10 为底的对数，则：

$$m_{10}=-\frac{\lambda}{\ln10}.$$

不能把常用对数图的斜率原样代入自然对数图的公式。修正后为零或负的计数率没有实数对数；应检查其不确定度与本底估计，而不是人为指定一个很小的正值。

</details>

### 读图示范：同一来源的两种表示 {#graph-walkthrough}

*自拟理想模型；图像为构造曲线，不是实测。*

下图两个面板描述同一个单一核素来源，其初始活度为 $A_0=800\,\mathrm{Bq}$。下图使用无量纲比值 $A/A_0$。

<img src="/assets/img/physics-decay-graphs.svg" alt="同一理想来源的读图示范：在 0、40、80 s 时，活度依次为 800、400、200 Bq。上图标出相等的减半时间；下图的活度与初始活度之比取自然对数后成为直线，斜率三角形横跨 0 至 80 s，纵向从 0 至负 1.386。" width="460" height="720" data-lazy-ignore="true">

上图从 800 降至 400 Bq 用了 40 s，从 400 降至 200 Bq 又用了 40 s。每段的绝对减少量不同，但剩余活度减半所需的时间相同。

下图在直线上选取相距较远的两点，并保留斜率的符号：

$$m=\frac{-1.386-0}{80-0}\approx-0.0173\,\mathrm{s^{-1}}.$$

$$T_{1/2}=-\frac{\ln2}{m}\approx\boxed{40\,\mathrm s}.$$

两种方法给出相同结果。对数无量纲，因此斜率单位为每秒的倒数，不是 Bq 每秒。此处零截距来自选用 $A_0$ 作为参考值，并非所有对数图都经过原点。

### 检查点：独立读取另一组图像 {#checkpoint-decay-graphs}

*自拟题；构造教学曲线。*

The upper graph shows total detector count rate, including constant background of 4.0 counts per second. The lower graph shows the natural logarithm of the background-corrected source rate divided by a reference rate of 1 count per second. Detection conditions are fixed.

<img src="/assets/img/physics-decay-graph-practice.svg" alt="独立读图任务的两幅图。上图是总探测计数率随时间的曲线，水平本底线为每秒 4 次；下图是修正后计数率与参考计数率之比的自然对数随时间的图。两幅图均有坐标轴标签和网格，没有标出半衰期或斜率。" width="460" height="720" data-lazy-ignore="true">

1. Estimate the half-life from the upper curve. State the two total-rate levels you used and explain the background correction.
2. Choose two widely separated points on the lower line. Estimate its gradient with a unit, then calculate a half-life and compare the two estimates.
3. A student halves the initial total rate without accounting for background. Predict whether the resulting half-life is too short or too long, and explain.

<details markdown="1">
<summary>提示：减半的是源的贡献</summary>

先扣除水平本底，再确定源的贡献减半对应的高度。下图纵向变化无量纲，横向变化是时间。

</details>

<details markdown="1">
<summary>读图反馈</summary>

初始总计数率为每秒 28 次，因此源的贡献为 24。其一半为 12，对应总计数率为每秒 16 次，曲线约在 50 s 时达到该值。随后从每秒 16 次降至 10 次又用了 50 s；此时源的贡献从 12 减半为 6。

例如，下方直线经过约 $(0,3.18)$ 与 $(100,1.79)$ 两点：

$$m\approx\frac{1.79-3.18}{100-0}=-0.0139\,\mathrm{s^{-1}}.$$

$$T_{1/2}\approx\frac{\ln2}{0.0139}\approx\boxed{50\,\mathrm s}.$$

允许合理的读图精度，两种方法的一致性比末位数字更重要。把总计数率从 28 减半到 14，实际上要等到源的贡献降至 10，而不是 12，因此等待时间过长。下图的非零截距与所选参考计数率相容。

</details>

### 本底为什么会改变表观半衰期 {#background-bias}

未修正的计数率等于源的贡献**加上**本底。源变弱时，本底占总计数率的比例越来越大。未扣本底的对数图会弯曲并逐渐变平，因此用单一指数拟合时，通常会低估衰变常量、高估半衰期。

重复计数和延长记录时间可以减小随机抽样涨落，却不能消除持续存在的本底偏差或几何条件的变化。修正后的低计数率尤其具有较大的相对不确定度，因为它是两个有涨落的计数量相减所得。剔除数据点必须有测量上的依据，不能仅仅因为它影响直线拟合。

## 数据探究：建立衰变图像 {#data-decay-records}

*自拟题；构造教学数据，不是已完成实验的实测记录。*

A detector stays in the same position relative to a single-isotope source. Each source run lasts 10 s. Under the same background conditions, a separate 600 s run without the source gives 120 counts. Use the midpoint of each recording interval for the time coordinate.

| Recording interval / s | Midpoint / s | Total counts |
| --- | --- | --- |
| 0–10 | 5 | 102 |
| 30–40 | 35 | 73 |
| 60–70 | 65 | 52 |
| 90–100 | 95 | 37 |
| 120–130 | 125 | 27 |
| 150–160 | 155 | 20 |

**Core task:**

1. Calculate the background rate and each corrected source count rate. State the unit and explain why a count rate is not automatically an activity in Bq.
2. Plot a decay curve and choose a transformed graph to test the single-exponential model. Show your line, gradient and half-life estimate; give the gradient's unit.
3. In English, explain how random individual decays can produce an approximately stable half-life for a large sample. Identify one change to the measurement conditions that could spoil the model test without changing the isotope's decay constant.

<details markdown="1">
<summary>提示 1：辨认实际测量的量</summary>

先将每次计数除以各自的记录时长。本底记录远长于含源记录。你需要的是一个本底**计数率**，不是每行都减去 120。

</details>

<details markdown="1">
<summary>提示 2：选择坐标轴与检查方法</summary>

先扣除本底，再取对数。使用无量纲的计数率比值，以记录区间中点为时间坐标作图，将斜率与衰变常量联系起来。再检查未变换的计数率是否大致每隔相等时间减半。

</details>

<details markdown="1">
<summary>分析与反馈</summary>

$$r_b=\frac{120}{600}=0.200\,\mathrm{s^{-1}}.$$

修正后的计数率依次为每秒 10.0、7.1、5.0、3.5、2.5 和 1.8 次。有效探测比例固定时，它们与活度成正比；但不知道该比例的数值，就不能确定绝对活度。

对这些构造读数取自然对数，再做最小二乘拟合，得到：

$$m\approx-0.01149\,\mathrm{s^{-1}},\qquad T_{1/2}\approx60.3\,\mathrm s.$$

合理的手绘拟合会得到约 60 s。计数率从 5 s 时的 10.0 降至 65 s 时的 5.0，再于 125 s 降至 2.5，可用来检查结果。手绘图不要求达到软件拟合结果的小数位精度。

可用的英文机制解释是：“Each surviving nucleus has the same constant probability of decay per unit time. With many nuclei, fluctuations are small relative to the number present, so the population follows an approximately reproducible exponential decrease.” 移动源或改变吸收条件，会改变探测计数率，但不会改变半衰期。

**诊断错误：**算出负的半衰期，通常是拟合斜率的符号处理错误。忽略本底后得到偏长的半衰期，则有明确的物理原因。把全部计数当成源的衰变次数，是混淆测量结果与核衰变过程。

</details>

### 挑战：本底与记录时段 {#challenge-decay-records}

*自拟题；完成基础任务后，使用同一组构造记录继续。*

1. Fit the uncorrected rates instead. Compare the half-life with your corrected result and explain why the later points are more affected by background and relative fluctuations.
2. Explain why interval midpoints are used. Does a rate averaged over 10 s equal the instantaneous rate at that midpoint? What must be reconsidered if the recording durations differ?

<details markdown="1">
<summary>挑战反馈</summary>

拟合未扣本底的计数率约得 63.5 s，比修正后的 60.3 s 更长。本底使后期总计数率相对于源自身的贡献偏高。较长的本底记录能改善估计，但不能消除涨落；较低的修正计数率是两个有涨落的量相减所得，相对不确定度较大。

每次读数覆盖一个时段，中点是代表性时间，不表示所有计数都在该时刻发生。指数变化的区间平均值并不精确等于中点瞬时值。衰变常量恒定、探测条件固定且记录时长相等时，两者的比值对每行都相同，因此指数斜率保持不变。若记录时长不同，就须重新考虑平均过程，不能只改时间坐标。这里不要求推导平均因子。

</details>

### 再尝试：改变记录条件 {#retry-counting}

*自拟题；构造教学数据。完成基础任务后选做，先检查弱信号，再取对数。*

A new background run gives 150 counts in 300 s. A source run now lasts 20 s and gives 46 counts. Find the corrected count rate. A later 20 s source run gives 8 counts: can its corrected rate be used on a real logarithmic graph? Explain what should be investigated instead.

<details markdown="1">
<summary>再尝试反馈</summary>

$$r_b=\frac{150}{300}=0.50\,\mathrm{s^{-1}}.$$

$$r=\frac{46}{20}-0.50=\boxed{1.8\,\mathrm{s^{-1}}}.$$

对后一次记录：

$$r=\frac{8}{20}-0.50=-0.10\,\mathrm{s^{-1}}.$$

这个负估计值不表示物理活度为负。根据这份记录，源的贡献太弱，无法可靠地与涨落及本底区分。它的实数对数没有定义。应检查本底稳定性和不确定度，在条件不变时收集更适合分析的数据；不能擅自替换成正数，也不能据此断言源已停止衰变。

</details>

## 练习 {#practice}

先独立尝试每道题，再展开提示与解答。练习 1、2、5 为自拟题；练习 3–4 为下文注明来源的改编题。答案与反馈为本课编写，不是官方评分标准。先完成练习 1–4；练习 1 的校准部分与练习 5 的常用对数图属于进一步应用。

### 练习 1：测量改变，还是核衰变改变？ {#question-1}

A source run gives 94 counts in 20 s. Background gives 210 counts in 300 s, and the activity changes negligibly during the run. Find the corrected source count rate. The source is then moved farther from the detector and the corrected rate halves. Has one half-life necessarily elapsed? Explain. Further application: the effective detection fraction for the original position is 0.25; estimate the original activity.

<details markdown="1">
<summary>提示</summary>

区分计数率、探测比例与活度，判断测量条件是否保持不变。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$r=\frac{94}{20}-\frac{210}{300}=\boxed{4.0\,\mathrm{s^{-1}}}.$$

不一定。移动源会改变被探测到的比例。只有相关探测条件固定时，修正后的计数率减半才反映活度减半。

进一步应用的结果为：

$$A=\frac{94/20-210/300}{0.25}=\boxed{16\,\mathrm{Bq}}.$$

检查：源贡献的探测计数率为每秒 4.0 次，小于活度，因为只探测到了其中四分之一。

</details>

### 练习 2：选择方法 {#question-2}

A single-isotope source initially has activity $4.8\,\mathrm{kBq}$ and half-life $6.0\,\mathrm h$. How long does it take for its activity to fall to $0.70\,\mathrm{kBq}$? Explain why rounding the time to a whole number of half-lives is unsuitable.

<details markdown="1">
<summary>提示</summary>

取对数前先求剩余比例。两个活度使用相同单位。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$t=\frac{6.0}{\ln2}\ln\left(\frac{4.8}{0.70}\right)\approx\boxed{17\,\mathrm h}.$$

未取整的时间约为 16.7 h。检查：12 h 后活度为 1.2 kBq，18 h 后为 0.60 kBq。给定阈值介于两者之间，所以两个或三个完整半衰期都不能给出指定活度。

</details>

### 练习 3：活度是一个速率 {#question-3}

*改编题：OxfordAQA 9630 PH03，January 2020，Q26；已配对阅读 QP 第 36 页与 MS 第 9 页。取消原选择题形式，并增加后续任务。*

A gallium-67 sample has initial activity $37\,\mathrm{MBq}$ and half-life $78\,\mathrm h$. Determine its initial number of undecayed gallium-67 nuclei. Then find the activity after $117\,\mathrm h$, assuming no replenishment, and state the value and sign of $\mathrm dN/\mathrm dt$ then. Explain why dividing activity by elapsed time does not give the number of nuclei remaining.

<details markdown="1">
<summary>提示</summary>

将 Bq 与衰变常量联系起来时，时间用秒。求后期活度时，使用无量纲的半衰期倍数。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$\lambda=\frac{\ln2}{78\times3600}\approx2.47\times10^{-6}\,\mathrm{s^{-1}}.$$

$$N_0=\frac{37\times10^6}{\lambda}\approx\boxed{1.5\times10^{13}}.$$

$$A=37\times2^{-117/78}\approx\boxed{13\,\mathrm{MBq}}.$$

$$\frac{\mathrm dN}{\mathrm dt}=-A\approx-1.3\times10^7\,\mathrm{s^{-1}}.$$

此时已过 1.5 个半衰期，活度应介于初值的二分之一与四分之一之间。衰变速率除以时间的单位为时间的负二次方，并不是核数。应使用该核素的衰变常量，将活度与尚未衰变的核数联系起来。

</details>

### 练习 4：哪一部分质量发生了变化？ {#question-4}

*改编题：OxfordAQA 9630 PH03，June 2024，Q7；已配对阅读 QP 第 23 页与 MS 第 19 页。省略探测器寿命的陈述；以下任务直接使用给定的活度端点，不指定经过时间。*

The activity of americium-241 in a source decreases from $39\,\mathrm{kBq}$ to $32\,\mathrm{kBq}$. Its half-life is $432\,\mathrm y$ and its molar mass is $0.241\,\mathrm{kg\,mol^{-1}}$. Use a year of 365 days and $N_A=6.02\times10^{23}\,\mathrm{mol^{-1}}$. Calculate the decrease in mass of **undecayed Am-241**. Explain why this is not the same as the decrease in total mass of a detector containing it. Suggest why a radioactive daughter might contribute little activity even though it is not stable.

<details markdown="1">
<summary>提示</summary>

两个端点适用相同的母体衰变常量。先将活度变化换算成母体核数变化，再换算成该核素的质量变化。注意区分“半衰期长”与“稳定”。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$\lambda=\frac{\ln2}{432\times365\times24\times3600}\approx5.09\times10^{-11}\,\mathrm{s^{-1}}.$$

以下两个差值均表示取正值的减少量：

$$\Delta N=\frac{(39-32)\times10^3}{\lambda}\approx1.38\times10^{14}.$$

$$\Delta m=\frac{\Delta N}{6.02\times10^{23}}(0.241)\approx\boxed{5.5\times10^{-11}\,\mathrm{kg}}.$$

这是已转变的母体核素的质量，不是离开探测器的物质总质量。核算整个系统的质量时，还须考虑子体核和其他衰变产物。这不是结合能或质量亏损计算。

半衰期长得多的子体，其衰变常量小得多，因此对当时存在的子体核数而言，可能只贡献很低的活度。“具有放射性”不等于活度高，“更稳定”也不等于完全稳定。这是一种可能的解释，不能推广为所有放射性子体都如此。

</details>

### 练习 5：检查图像表征 {#question-5}

*进一步应用：区分对数底数。*

A graph of $\log_{10}(r/r_{\text{ref}})$ against time in seconds has gradient $-0.0040\,\mathrm{s^{-1}}$ under fixed detection conditions. Estimate the half-life. A student instead uses the negative of this gradient as the decay constant. Identify the error and state one test of the single-exponential interpretation beyond obtaining a fitted line.

<details markdown="1">
<summary>提示</summary>

检查对数的底数。仅有一条拟合直线，不能证明探测几何关系和本底处理合适。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$\lambda=0.0040\ln10\approx0.00921\,\mathrm{s^{-1}}.$$

$$T_{1/2}=\frac{\ln2}{0.0040\ln10}\approx\boxed{75\,\mathrm s}.$$

该学生使用的规则适用于自然对数图，而不是以 10 为底的对数图。可以检查残差或连续减半所需的时间，独立检查本底，并确认几何条件固定。结果一致，支持模型在已检验条件下适用，但不证明已排除所有可能的其他解释。

</details>

## 速查 {#quick-reference}

| 物理量或任务 | 关系与条件 |
| --- | --- |
| 剩余母体核数 | $N=N_0e^{-\lambda t}$；单一核素、衰变常量恒定、无补充来源 |
| 取正值的活度 | $A=\lambda N$；活度用 Bq 时，衰变常量须用 $\mathrm{s^{-1}}$ |
| 半衰期 | $T_{1/2}=\ln2/\lambda$；剩余母体核数减半 |
| 核素质量换算为核数 | $N=(m/M)N_A$；质量单位一致 |
| 修正后的探测计数率 | $r=C_{\text{total}}/\Delta t-r_b$；相减的是计数率 |
| 由计数率求绝对活度 | $A=r/\varepsilon$；有效探测比例已知且固定 |
| 自然对数计数率图 | 斜率 $m=-\lambda$；修正后的计数率为正，探测条件固定 |

继续之前，检查能否区分核数、活度、计数与计数率；解释随机性和恒定衰变概率；选用一致单位；通过两类图像估计半衰期；诊断本底或几何条件引起的偏差。间隔一段时间后，改变记录时长，重新尝试一道数据处理题，既给出数值，也用英文解释。

[上一课：电容器充放电](/zh/alevel/a2-physics/capacitor-charge-and-discharge/) · [PH03 课程目录](/zh/alevel/a2-physics/) · [下一课：磁场与运动电荷](/zh/alevel/a2-physics/magnetic-fields-and-moving-charges/)

<details markdown="1">
<summary>来源与范围</summary>

本课对应 OxfordAQA International AS and A-level Physics **9630**，PH03 Unit 3，大纲 **3.9.2**。2026 年 10 月 21 日，[资格页面](https://www.oxfordaqa.com/qualification/international-as-and-a-level-physics-9630/)链接到 [Version 4.4 大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-international-as-and-a-level-physics-specification.pdf)，对应印刷页第 25 页、PDF 第 24 页。[Version 5.1 官方文件](https://www.oxfordaqa.com/wp-content/uploads/2022/08/oxfordaqa-a-level-physics-specification.pdf)的印刷页第 26 页、PDF 第 25 页列有相同的相关要求。版本标签不一致，不能据此认定大纲已正式变更。

练习 3 是根据 PH03 January 2020 Q26 制作的改编题（QP 第 36 页，MS 第 9 页）；练习 4 根据 PH03 June 2024 Q7 改编（QP 第 23 页，MS 第 19 页）。本项目取得的试卷与评分标准副本已配对阅读，选定答案已独立复算。若把所有给定中心值都视为精确值，原 Q7 的寿命与取整后的活度端点不能按指数模型精确闭合；本改编题省略寿命，明确使用给定端点。它不是未经修改的官方原题。

补充教材：Jim Breithaupt，*International A Level Physics*，Oxford University Press，2016 年首次出版，ISBN 978-0-19-837603-3，19.5 节，所提供副本的印刷页第 350–352 页、PDF 第 366–368 页。已核读这三页正文与原图，用于补充解释，不代替大纲或评分标准。本课概率模型表与两组图像均为自编教学材料。

本底修正和几何条件控制，将 AS 辐射知识与 PH03 指数分析联系起来。固定时段的平均、探测器校准与常用对数换算用于帮助解释，并不构成另一个编号的必做实验。本课不把平均寿命作为另行明列的必学要求。PH04 的结合能、裂变和聚变不在本课范围内。构造数据、网页准备或页面构建成功，都不能证明已完成真实实验或已验证学生的学习成效。

</details>
