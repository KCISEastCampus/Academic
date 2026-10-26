---
title: "均值检验：平均数差多少才算反常？"
layout: subjects
mathjax: true
grade: a2
subject: s2
lang: zh-CN
translation_of: /alevel/a2-mathematics/statistics/mean-tests/
permalink: /zh/alevel/a2-mathematics/statistics/mean-tests/
reading_layout: true
study_page: true
toc_headings: "#standard-error, #critical-values, #known-normal, #unknown-normal, #large-samples, #practice, #retry, #later-review, #next-step"
---

[A2 统计课程](/zh/alevel/a2-mathematics/statistics/)
{:.lesson-meta}

样本平均数几乎不会刚好等于广告上的平均数。同样差一克，在一种调查里可能很平常，在另一种调查里却是很强的证据。我们要比较的是：**样本平均数平时会波动多少**，不只是单个物品的数值有多分散。

先学[假设检验](/zh/alevel/a2-mathematics/statistics/hypothesis-testing/)。样本均值分布与方差估计可回看[估计](/zh/alevel/a2-mathematics/statistics/estimation/)；面积及标准化回看[正态分布](/zh/alevel/a2-mathematics/statistics/normal-distribution/)。除要求质疑条件的题目外，下面样本均按独立随机观察处理。January 2025 题均标改编，其余数据为自拟教学数据，不是实测，不附官方分值。

## 标准误：平均数自己会波动多少？ {#standard-error}

用 X 表示一次观察，总体均值为 μ，总体标准差为 σ。想象反复抽取大小都为 n 的独立样本，每次算平均数。这些平均数本身也有一个分布，叫**样本均值的抽样分布**；它的标准差就是**标准误**（standard error，SE）。它描述“换一批样本，平均数会变多少”，不是测量仪器做错了多少。

$$\begin{aligned}
\bar X&=\frac{X_1+\cdots+X_n}{n},\\
E(\bar X)&=\mu,\\
\operatorname{Var}(\bar X)&=\frac{n\sigma^2}{n^2}
=\frac{\sigma^2}{n},\\
\operatorname{SE}(\bar X)&=\frac{\sigma}{\sqrt n}.
\end{aligned}$$

独立性让方差可以相加；总和除以 n，方差要除以 n 的平方，再开方才得到 SE。样本量变成四倍，SE 减半，但单个观察值不会因此变得更集中。总体方差未知时，用样本标准差 s 估计 SE：

$$\begin{aligned}
s^2&=\frac{\sum_{i=1}^n(x_i-\bar x)^2}{n-1},\\
\widehat{\operatorname{SE}}(\bar X)&=\frac{s}{\sqrt n}.
\end{aligned}$$

分母 n−1 使 s 的平方成为总体方差的无偏估计；帽子表示“估计”，不是“已经精确知道”。检验统计量把“样本均值与 H0 均值的差”换算成多少个 SE：正数在 H0 均值上方，负数在下方。接下来选哪种参照分布，取决于总体条件及 σ 是否已知。

## 本课可直接使用的临界值 {#critical-values}

表里的 c 都是**正的上尾临界值**，右边面积为 q。下尾用 −c。5%双尾把每边分到0.025，落在 −c 与 c 之外才拒绝。这些是分位数的近似小数，不是精确恒等式；比较前不要过早把统计量舍入。

$$P(Z>c)=q,\qquad Z\sim N(0,1).$$

| q | c |
| --- | --- |
| 0.10 | 1.281552 |
| 0.05 | 1.644854 |
| 0.025 | 1.959964 |
| 0.01 | 2.326348 |
| 0.005 | 2.575829 |

$$P(T_\nu>c)=q.$$

| df $\nu$ | q = 0.05 | q = 0.025 |
| --- | --- | --- |
| 5 | 2.015048 | 2.570582 |
| 7 | 1.894579 | 2.364624 |
| 9 | 1.833113 | 2.262157 |

连续对称参照分布中，单尾 p 值是统计量以外、H1 所指方向的尾面积；双尾 p 值是统计量绝对值以外一个尾面积的两倍。也可直接比较相应临界值。本页给足题目需要的边界，不要求你在不熟悉的设备上计算 t 尾概率。

## 总体正态，而且总体方差已知 {#known-normal}

如果**总体本来就是正态分布**，而且总体方差已知，那么独立样本的均值在任何正整数样本量下都精确服从正态分布。不能看到样本小就自动选 t。在 H0 均值 μ0 下：

$$\begin{aligned}
\bar X&\sim N\left(\mu_0,\frac{\sigma^2}{n}\right),\\
Z&=\frac{\bar X-\mu_0}{\sigma/\sqrt n}
\sim N(0,1).
\end{aligned}$$

N 的第二个参数是方差。先给总体均值写 H0，按调查方向写 H1，再用 SE 标准化、比较正确尾部的边界，最后用情境中的话说明证据。

<div class="worked-example" markdown="1">

### 完整示范：接近边界也不能随意进位 {#known-example}

**Question:** Lap times are normally distributed. Before a tyre change the mean was 205 seconds and the population standard deviation was 30 seconds. Assume that standard deviation is unchanged. Ten independent randomly selected new lap times have total 2205 seconds. Test the claim that the population mean lap time has increased, at the 5% level.

改编自 MA04 January 2025 Q3，明确补写独立抽样条件。总体正态，总体标准差按题意已知且不变，因此即使只有10次观察，也能用精确 z 检验。

$$\begin{aligned}
H_0&:\mu=205,\\
H_1&:\mu>205,\\
\bar x&=\frac{2205}{10}=220.5,\\
\operatorname{SE}&=\frac{30}{\sqrt{10}}
\approx9.48683,\\
z&=\frac{220.5-205}{30/\sqrt{10}}\\
&=1.633843\ldots.
\end{aligned}$$

“增加”用上尾，5%边界为1.644854。1.633843小于边界，所以不拒绝 H0。等价地，右尾 p 值约0.05115，略大于0.05。不能先把两个数都四舍五入成1.6，再说它们相等。

**英文情境结论：** At the 5% significance level, there is insufficient evidence that the population mean lap time has increased.

意思是增加的证据还不够，不是证明轮胎没有任何影响。

</div>

## 总体正态，但总体方差未知 {#unknown-normal}

总体 σ 未知时，只能用 s 代替。s 也会随样本改变，分母就多了一层不确定性。独立样本来自正态总体时，这个统计量精确服从 **Student t 分布**，不再是精确标准正态：

$$T=\frac{\bar X-\mu_0}{S/\sqrt n}
\sim t_{n-1}\quad\text{under }H_0.$$

**自由度**（degrees of freedom）为 n−1。因为各数据与样本均值的偏差之和为0，前 n−1 个偏差确定后，最后一个不再自由。t 分布对称，但尾部比标准正态厚，尤其自由度小时；较大的临界值反映估计 σ 带来的不确定性。总体正态需要情境支持，不能套上 t 公式就让小样本、强偏态的问题变有效。

<div class="worked-example" markdown="1">

### 完整示范：分散程度也要从样本估 {#t-example}

**Question:** Packet masses are normally distributed with unknown population variance. An independent random sample has masses, in grams, 8.99, 8.96, 8.99, 9.02, 8.95, 8.98, 8.97, 9.01. The advertised population mean is 9 grams. Find the sample mean and unbiased variance estimate, then test at 5% whether the population mean is less than advertised.

改编并合并 MA04 January 2025 Q7(a)(b)，不是 Q6 或 Q8。没有给总体方差，需要先算 s 的平方，再用7自由度的 t。方差计算要做两个接近数的相减，因此不能提前把样本均值取近似。

$$\begin{aligned}
n&=8,\\
\sum x_i&=71.87,\\
\sum x_i^2&=645.6661,\\
\bar x&=71.87/8=8.98375,\\
s^2&=\frac{645.6661-71.87^2/8}{7}\\
&=\frac{0.0039875}{7}\\
&=\frac{319}{560000}\\
&=0.000569642857\ldots.
\end{aligned}$$

方差单位是克的平方；SE 单位才是克。接着给总体均值写假设，再标准化：

$$\begin{aligned}
H_0&:\mu=9,\\
H_1&:\mu<9,\\
s&=\sqrt{319/560000},\\
\widehat{\operatorname{SE}}&=\frac{s}{\sqrt8}\\
&\approx0.00843833,\\
t&=\frac{8.98375-9}{s/\sqrt8}\\
&=-1.925737\ldots.
\end{aligned}$$

7自由度、下尾5%边界为 −1.894579。−1.925737更小，落在下尾拒绝域，所以拒绝 H0。表上常写成 −1.895，本题结论相同。

**英文情境结论：** At the 5% significance level, there is sufficient evidence that the population mean packet mass is less than 9 grams.

结论说的是总体均值偏低，不是每一包都少于9克。

</div>

## 总体不正态时，大样本能做什么？ {#large-samples}

如果观察相互独立、来自同一总体，而且总体方差有限，**中心极限定理**说明：样本量足够大时，样本平均数的分布近似正态。变得近似正态的是平均数，不是原来每个数据。样本大也不能修复抽样偏差、相关性，或总体方差不有限的问题。

不存在“n 达到30就保证可以”的万能界线。强偏态、极罕见大值或很厚的尾部可能需要远多于30个数据。本课题目明确给出有限方差、适度偏态并说明样本足够大时，才采用近似。只有少量非正态数据，不能光靠套公式就宣称精确 z 或精确 t 成立。

大样本时用 **z 近似**。总体方差已知，用 σ；未知则用 s 估计 SE。在这里总体不正态的情形，下面两种都只是近似：

$$\begin{aligned}
Z&=\frac{\bar X-\mu_0}{\sigma/\sqrt n}
\ \dot\sim\ N(0,1),\\
Z&=\frac{\bar X-\mu_0}{S/\sqrt n}
\ \dot\sim\ N(0,1).
\end{aligned}$$

带点的记号表示“近似服从”。用了 s，并不自动意味着精确 t；精确 t 仍需要总体正态。反过来，如果总体确实正态、方差未知，大样本时 t 结果仍成立，只是它的边界会越来越接近 z。

<div class="worked-example" markdown="1">

### 完整示范：分散程度从哪里来？ {#large-example}

**Question:** (a) Waiting times have a moderately skewed distribution with known finite variance 4 minutes squared. An independent random sample of 100, stipulated sufficiently large for the mean approximation, has mean 4.4 minutes. Test whether the population mean differs from 4 minutes at 5%. (b) A different moderately skewed finite-variance population has unknown variance. A sufficiently large independent random sample of 64 gives mean 12.75 and unbiased sample variance 9. Test whether its population mean exceeds 12 at 5%.

两种情境均为自拟，都没有假定总体正态。(a) 总体方差已知，故 σ = 2，用双尾 z 近似：

$$\begin{aligned}
H_0&:\mu=4,\quad H_1:\mu\ne4,\\
\operatorname{SE}&=2/\sqrt{100}=0.2,\\
z&=(4.4-4)/0.2=2.
\end{aligned}$$

(a) 的5%双尾边界是 ±1.959964。2超过上边界，拒绝 H0：按大样本近似，有充分证据认为总体平均等待时间与4分钟不同。(b) 要从样本估计分散程度：

$$\begin{aligned}
H_0&:\mu=12,\quad H_1:\mu>12,\\
s&=\sqrt9=3,\\
\widehat{\operatorname{SE}}&=3/\sqrt{64}=0.375,\\
z&=(12.75-12)/0.375=2.
\end{aligned}$$

(b) 是上尾5%，边界1.644854。拒绝 H0：按大样本近似，有充分证据认为这个总体均值超过12。即使统计量同为2，H1 不同也要用不同边界。两问都不能称精确检验。

</div>

## 收起示范，独立完成 {#practice}

<section class="lesson-check" markdown="1">

### 自己试一试 {#task-se}

**Question:** Individual masses X are normally distributed with population mean 40 grams and standard deviation 10 grams. Independent random samples contain 25 items each. State the distribution of the sample mean and interpret its standard error. A student uses 10 grams as the standard error. Explain the mistake. What changes, and what does not, if the sample size is multiplied by four?

<details markdown="1"><summary>提示</summary>

先跟踪方差，再开平方。

</details>

<details markdown="1"><summary>解答与回补</summary>

$$\begin{aligned}
\bar X&\sim N(40,4),\\
\operatorname{SE}&=10/\sqrt{25}=2\text{ g}.
\end{aligned}$$

反复换样本时，平均数的标准差是2克，单个物品的标准差才是10克。n 变成四倍，SE 变成1克；单个物品的标准差与均值40不变。总体正态使这里的均值分布精确成立。混淆两种分散程度，回看[SE](#standard-error)，再做[新题](#retry-se)。

</details>

</section>

<section class="lesson-check" markdown="1">

### 自己试一试 {#task-known}

**Question:** Fill volumes are normally distributed with known population variance 16 millilitres squared. An independent random sample of 16 has mean 48.8 millilitres. At 5%, investigate whether the population mean is less than the advertised 50 millilitres. Choose and justify a method, give hypotheses, calculate a statistic, use the supplied critical values and write an English conclusion.

<details markdown="1"><summary>提示</summary>

总体分散程度是已知还是估计？

</details>

<details markdown="1"><summary>解答与回补</summary>

$$\begin{aligned}
H_0&:\mu=50,\quad H_1:\mu<50,\\
\sigma&=4,\\
\operatorname{SE}&=4/4=1,\\
z&=(48.8-50)/1=-1.2.
\end{aligned}$$

总体正态且方差已知，独立随机样本支持精确 z。−1.2大于 −1.644854，不拒绝。英文结论：At the 5% significance level, there is insufficient evidence that the population mean fill volume is less than 50 millilitres. 若因样本小选 t，回看[已知方差](#known-normal)；若拿 +1.645 比，回看[尾部边界](#critical-values)。再做[新题](#retry-known)。

</details>

</section>

<section class="lesson-check" markdown="1">

### 自己试一试 {#task-unknown}

**Question:** A normal population of component lengths has unknown variance. An independent random sample of 10 gives mean 102 millimetres and unbiased sample variance 9 millimetres squared. At 5%, investigate whether the population mean differs from 100 millimetres. Choose a method, justify its reference distribution and degrees of freedom, calculate the statistic and write an English conclusion.

<details markdown="1"><summary>提示</summary>

样本方差不等于已知总体方差。

</details>

<details markdown="1"><summary>解答与回补</summary>

$$\begin{aligned}
H_0&:\mu=100,\quad H_1:\mu\ne100,\\
s&=3,\quad\mathrm{df}=9,\\
t&=\frac{102-100}{3/\sqrt{10}}\\
&=2.108185\ldots.
\end{aligned}$$

正态总体，分散程度由样本估计，用精确 t。9自由度、5%双尾边界 ±2.262157；2.108185在中间，不拒绝。英文结论：At the 5% significance level, there is insufficient evidence that the population mean length differs from 100 millimetres. 这题若误用 z 会错误地拒绝。回看[未知方差](#unknown-normal)或[临界值](#critical-values)，再做[新题](#retry-unknown)。

</details>

</section>

<section class="lesson-check" markdown="1">

### 自己试一试 {#task-large-known}

**Question:** A moderately skewed population of delivery times has known finite variance 36 minutes squared. An independent random sample of 144, sufficiently large for the mean approximation, has mean 21 minutes. Investigate whether the population mean exceeds 20 minutes at 5%. Select and justify a method, calculate the statistic, and conclude in English. Would knowing the variance alone justify the same reference distribution for a sample of 9 from a strongly skewed population?

<details markdown="1"><summary>提示</summary>

需要近似正态的是哪个分布？

</details>

<details markdown="1"><summary>解答与回补</summary>

$$\begin{aligned}
H_0&:\mu=20,\quad H_1:\mu>20,\\
\operatorname{SE}&=6/\sqrt{144}=0.5,\\
z&=(21-20)/0.5=2.
\end{aligned}$$

独立、同一有限方差总体、样本足够大，CLT 支持 z 近似。2大于1.644854，拒绝。英文结论：At the 5% significance level, there is sufficient evidence that the population mean delivery time exceeds 20 minutes, using a large-sample approximation. 已知方差不会让非正态小样本均值自动正态；9个强偏态观察没有这个依据。回看[大样本](#large-samples)，再做[新题](#retry-large-known)。

</details>

</section>

<section class="lesson-check" markdown="1">

### 自己试一试 {#task-large-unknown}

**Question:** A moderately skewed finite-variance population of service times has unknown variance. A sufficiently large independent random sample of 100 has mean 7.6 minutes and unbiased sample variance 4 minutes squared. Investigate whether the population mean is less than 8 minutes at 5%. Choose and justify a method, calculate a statistic and conclude in English. Explain why replacing this sample by only 6 highly skewed observations would not justify an exact t test.

<details markdown="1"><summary>提示</summary>

估计 SE 与选择精确参照分布是两件事。

</details>

<details markdown="1"><summary>解答与回补</summary>

$$\begin{aligned}
H_0&:\mu=8,\quad H_1:\mu<8,\\
s&=2,\\
\widehat{\operatorname{SE}}&=2/10=0.2,\\
z&=(7.6-8)/0.2=-2.
\end{aligned}$$

样本足够大且独立、总体方差有限，用估计 SE 的 z 近似，不是精确 t。−2小于 −1.644854，拒绝。英文结论：At the 5% significance level, there is sufficient evidence that the population mean service time is less than 8 minutes, using a large-sample approximation. 6个强偏态数据既不满足精确 t 的正态总体条件，也不够支持这里的 CLT 近似。回看[大样本条件](#large-samples)，再做[新题](#retry-large-unknown)。

</details>

</section>

## 对准错误，换一题 {#retry}

<section class="lesson-check" markdown="1">

### 换一题再试 {#retry-se}

**Question:** An individual observation has population standard deviation σ. Independent samples of size 36 have sample-mean standard error 1.5 units. Find σ and the sample-mean variance. A student says the individual observations must be normally distributed because their means are approximately normal. Assess this claim.

<details markdown="1"><summary>提示</summary>

反过来还原根号 n 的缩放。

</details>

<details markdown="1"><summary>解答与回补</summary>

$$\begin{aligned}
\sigma&=1.5\sqrt{36}=9,\\
\operatorname{Var}(\bar X)&=1.5^2=2.25.
\end{aligned}$$

即使原始观察不正态，均值也可能由 CLT 得到近似正态。不能从均值近似正态反推总体正态。回看[SE](#standard-error)或[CLT](#large-samples)。

</details>

</section>

<section class="lesson-check" markdown="1">

### 换一题再试 {#retry-known}

**Question:** A normal population has known standard deviation 3 units. An independent random sample of 9 has mean 103 units. Test at 5% whether the population mean differs from 100 units. Justify your method and write the conclusion in English. Explain why a table with 8 degrees of freedom is unnecessary.

<details markdown="1"><summary>提示</summary>

给的是什么分散程度？

</details>

<details markdown="1"><summary>解答与回补</summary>

$$\begin{aligned}
H_0&:\mu=100,\quad H_1:\mu\ne100,\\
\operatorname{SE}&=3/\sqrt9=1,\\
z&=(103-100)/1=3.
\end{aligned}$$

总体正态且 σ 已知，支持精确 z。3大于1.959964，拒绝。英文结论：At the 5% significance level, there is sufficient evidence that the population mean differs from 100 units. σ 没有从样本估计，所以不需要 t 自由度。回看[正态已知方差](#known-normal)。

</details>

</section>

<section class="lesson-check" markdown="1">

### 换一题再试 {#retry-unknown}

**Question:** An independent random sample of 6 from a normal population with unknown variance has mean 19 and unbiased sample variance 1. Investigate at 5% whether the population mean has fallen below 20. Choose a method and degrees of freedom, calculate the statistic and conclude in English.

<details markdown="1"><summary>提示</summary>

这里小样本可用，是因为题目给了总体条件。

</details>

<details markdown="1"><summary>解答与回补</summary>

$$\begin{aligned}
H_0&:\mu=20,\quad H_1:\mu<20,\\
s&=1,\quad\mathrm{df}=5,\\
t&=\frac{19-20}{1/\sqrt6}\\
&=-2.449490\ldots.
\end{aligned}$$

总体正态、方差未知，用精确 t。5自由度下尾5%边界为 −2.015048，拒绝。英文结论：At the 5% significance level, there is sufficient evidence that the population mean is below 20. 若用了6自由度或 z，回看[未知方差](#unknown-normal)。

</details>

</section>

<section class="lesson-check" markdown="1">

### 换一题再试 {#retry-large-known}

**Question:** A moderately skewed finite-variance population has known standard deviation 5 units. A sufficiently large independent random sample of 100 gives mean 49. Test whether the population mean is below 50 at 5% and conclude in English. A second researcher instead records 100 almost identical readings from one object; explain why the sample size alone does not justify the same standard error.

<details markdown="1"><summary>提示</summary>

独立性是公式条件，不是可有可无。

</details>

<details markdown="1"><summary>解答与回补</summary>

$$\begin{aligned}
H_0&:\mu=50,\quad H_1:\mu<50,\\
\operatorname{SE}&=5/10=0.5,\\
z&=(49-50)/0.5=-2.
\end{aligned}$$

CLT 支持 z 近似。−2小于 −1.644854，拒绝。英文结论：At the 5% significance level, there is sufficient evidence that the population mean is below 50 units, using a large-sample approximation. 同一个物体的相关读数不是100个独立总体观察，均值方差不能直接除以100。回看[SE 的独立条件](#standard-error)与[大样本](#large-samples)。

</details>

</section>

<section class="lesson-check" markdown="1">

### 换一题再试 {#retry-large-unknown}

**Question:** A sufficiently large independent random sample of 64 from a moderately skewed finite-variance population gives mean 30.8 and unbiased sample variance 10.24. The population variance is unknown. Investigate whether the population mean differs from 30 at 5%, and conclude in English. State what must be checked before treating 64 as sufficient in another population.

<details markdown="1"><summary>提示</summary>

这次两边的变化都算。

</details>

<details markdown="1"><summary>解答与回补</summary>

$$\begin{aligned}
H_0&:\mu=30,\quad H_1:\mu\ne30,\\
s&=3.2,\\
\widehat{\operatorname{SE}}&=3.2/8=0.4,\\
z&=(30.8-30)/0.4=2.
\end{aligned}$$

估计 SE 后用 z 近似；2大于1.959964，拒绝。英文结论：At the 5% significance level, there is sufficient evidence that the population mean differs from 30, using a large-sample approximation. 换总体要重新检查独立性、抽样代表性、有限方差、偏态与极端大值；64本身不是万能保证。回看[大样本](#large-samples)。

</details>

</section>

## 换过主题，再回来判断 {#later-review}

<section class="lesson-check" markdown="1">

### 自己试一试 {#review-methods}

**Question:** For each investigation, decide whether an exact or approximate mean test is justified and explain why. Do not calculate a statistic. (a) Nine independent random observations from a normal population, unknown variance. (b) Nine independent random observations from a strongly skewed population, known variance. (c) An independent random sample of 200 from a moderately skewed finite-variance population, unknown variance, with the sample stipulated sufficiently large. A student says, “All three are z tests because sample means are normal.” Correct the statement.

<details markdown="1"><summary>提示</summary>

分别检查总体形状、方差信息和样本量。

</details>

<details markdown="1"><summary>解答与回补</summary>

(a) 总体正态、方差未知，用8自由度精确 t。(b) 给出的条件不支持精确 z 或精确 t；已知方差不能修复偏态小样本。(c) 用估计 SE 的大样本 z 近似。正态总体的均值才精确正态；CLT 给的是有条件的近似。回看[正态未知方差](#unknown-normal)或[大样本边界](#large-samples)，再不看帮助重做对应新题。

</details>

</section>

## 把全课知识连起来 {#next-step}

进入课程[综合练习](/zh/alevel/a2-mathematics/statistics/#mixed-review)，不靠章节标题判断模型与方法。隔一段学习再做[延后检查](/zh/alevel/a2-mathematics/statistics/#later-review)。记录自己是独立完成、用过提示，还是回补后才完成。

<details markdown="1"><summary>来源与范围</summary>

OxfordAQA Mathematics 9660 v5.2，S2.6，印刷第27页（PDF第26页）：[资格页](https://www.oxfordaqa.com/qualification/international-as-and-a-level-mathematics-9660/)与[大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf)。本课覆盖三类均值检验，包括大样本已知及未知方差的 z 近似；检验语言及精确计数检验见上一课。圈速例改编 [January 2025 Q3，QP 第10页](/assets/pdf/fx-cg50/references/oxfordaqa-ma04-2025-january-question-paper.pdf#page=10)，配对 [MS 第9页](/assets/pdf/fx-cg50/references/oxfordaqa-ma04-2025-january-mark-scheme.pdf#page=9)。包装例改编 [Q7(a)(b)，QP 第20–21页](/assets/pdf/fx-cg50/references/oxfordaqa-ma04-2025-january-question-paper.pdf#page=20)，配对 [MS 第15–16页](/assets/pdf/fx-cg50/references/oxfordaqa-ma04-2025-january-mark-scheme.pdf#page=15)。临界值片段是供学习使用的数学分位数近似，不是官方表格原件。其余题自拟；不声称计算器按键或学习效果已验证。

</details>
