---
title: "估计：一个样本能告诉我们多少？"
layout: subjects
mathjax: true
grade: a2
subject: s2
lang: zh-CN
translation_of: /alevel/a2-mathematics/statistics/estimation/
permalink: /zh/alevel/a2-mathematics/statistics/estimation/
reading_layout: true
study_page: true
toc_headings: "#population, #unbiased, #estimates, #sampling, #standard-error, #clt, #practice, #retry, #later-review, #next-step"
---

[A2 统计课程](/zh/alevel/a2-mathematics/statistics/)
{:.lesson-meta}

工厂生产了几千袋食品，我们只称其中几袋。它们的平均重量能代表整批吗？换几袋，算出的数就可能变。这一课把“这次算出的数”和“这种算法长期表现怎样”分开。

学完后，你要能说清估计的对象、算出估计值，并判断样本均值该用什么分布。若标准化或正态记号中的方差还不熟，先回看[正态分布](/zh/alevel/a2-mathematics/statistics/normal-distribution/)。下面用到平均数、离差平方和及独立变量的和。除标为改编题的内容外，情境和题目均为自拟，不附官方分值。

## 整批的量，还是这几袋的量？ {#population}

**总体（population）**是想研究的全部对象，**样本（sample）**是实际观察的一部分。先划清范围：“今天这一批”不等于“工厂今后生产的所有袋子”。

**参数（parameter）**描述总体或总体模型，例如均值 $\mu$、方差 $\sigma^2$。**统计量（statistic）**只用样本观测来计算，不含未知总体参数，样本均值、样本方差就是统计量。用于猜总体参数的计算规则叫**估计量（estimator）**，这一次得到的数字叫**估计值（estimate）**。

从有限总体取容量为 $n$ 的**简单随机样本（simple random sample）**，指所有可能的 $n$ 个对象组合被选中的机会相同。只让每个人机会相同还不够；固定搭档总是一起被选，会让某些组合不可能出现。S2.5不直接考抽样实施方法，但要理解含义。

下面的抽样分布公式使用同一个总体模型中的独立观测：各次均值、方差相同且有限。从很小的有限总体中不放回取走很大一部分，各次并不独立，不能直接套独立公式。本课不增加有限总体修正的计算要求。

<div class="worked-example" markdown="1">

### 完整示范：先说清研究对象 {#example-population}

**Question:** A factory wants to describe the masses of all bags produced on Monday. It weighs a simple random sample of 12 bags and obtains a mean of 501 g. Identify the population, sample, parameter of interest and statistic.

总体是星期一生产的全部袋子，样本是被称重的12袋。参数是星期一全部袋子的平均重量，它尚未知。统计量是12个读数的平均数；这次的值501 g估计该参数。它不能直接说明星期二的总体均值。

</div>

## 无偏，为什么仍然可能估错？ {#unbiased}

抽样前，各次观测记为随机变量 $X_1,\ldots,X_n$，平均数 $\bar X$ 也会随样本变化。抽样后，具体读数是 $x_1,\ldots,x_n$，这次均值是 $\bar x$。大写表示“还可能变化的量”，小写表示“这次已经得到的数”。

$$\bar X=\frac1n\sum_{i=1}^nX_i.$$

估计量 $T$ 对参数 $\theta$ **无偏（unbiased）**，指期望等于该参数。想象按同一规则反复抽取同样大小的样本，每次算一个估计值。这些估计值的长期平均落在真参数上，而不是长期偏高或偏低。

$$E(T)=\theta.$$

无偏不表示每次等于真值，也不保证每次误差小。它说的是重复估计的中心，不是对某次的保证。有偏方法偶尔也可能碰巧算中。

<div class="worked-example" markdown="1">

### 完整示范：无偏方法也会算不中 {#example-unbiased}

**Question:** A population gives X = 0 or X = 10 with equal probabilities. Use one observation X to estimate its mean. Is the estimator unbiased, and will any one estimate equal the true mean?

$$\mu=0\times\frac12+10\times\frac12=5.$$

规则 $T=X$ 满足 $E(T)=5=\mu$，所以无偏。但每次只能估成0或10，没有一次等于5。高估和低估在期望上抵消。“长期中心正确”和“这次估得准”是两件事。

</div>

## 用样本怎样估计均值和方差？ {#estimates}

用样本均值估计 $\mu$。若各次均值都是 $\mu$，期望的运算法则说明它为什么无偏：

$$\begin{aligned}E(\bar X)&=\frac1n\sum_{i=1}^nE(X_i)\\&=\frac{n\mu}{n}=\mu.\end{aligned}$$

当 $n>1$ 时，总体方差的常用无偏估计量是 $S^2$；代入数据得到 $s^2$：

$$S^2=\frac{\sum_{i=1}^n(X_i-\bar X)^2}{n-1}.$$

$$s^2=\frac{\sum_{i=1}^n(x_i-\bar x)^2}{n-1}.$$

为什么用 $n-1$？样本均值已经尽量靠近这组数据，围绕它的离差通常比围绕真均值的离差偏小。而且离差相加为零，知道前 $n-1$ 个，最后一个就被决定了。除以 $n-1$ 正是修正这种低估。独立同分布抽样下，$E(S^2)=\sigma^2$，不要求总体正态。

$s$ 估计总体标准差，但开平方不会自动保留无偏性：不能因为 $S^2$ 无偏，就说 $S$ 也无偏。方差单位是原单位的平方，标准差使用原单位。

若只给汇总数据，展开离差平方得到离差平方和 $Q$：

$$\begin{aligned}Q&=\sum(x_i-\bar x)^2\\&=\sum x_i^2-2\bar x\sum x_i+n\bar x^2\\&=\sum x_i^2-n\bar x^2,\\s^2&=\frac{Q}{n-1}.\end{aligned}$$

<div class="worked-example" markdown="1">

### 完整示范：酱料包（改编题） {#example-estimates}

**Question:** A random sample of 8 sauce packets from a normal population has masses, in grams, 8.99, 8.96, 8.99, 9.02, 8.95, 8.98, 8.97, 9.01. Estimate the population mean and variance without rounding intermediate values.

改编自 OxfordAQA MA04 January 2025 Q7(a)(i)(ii)：保留原数据，重写教学题干。目标是总体参数，所以用样本均值和分母为 $n-1$ 的方差。

$$\begin{aligned}n&=8,\\\sum x_i&=71.87,\\\sum x_i^2&=645.6661,\\\bar x&=\frac{71.87}{8}=8.98375\ \mathrm{g}.\end{aligned}$$

$$\begin{aligned}Q&=645.6661\\&\quad-8(8.98375)^2\\&=0.0039875,\\s^2&=\frac{0.0039875}{7}\\&=\frac{319}{560000}\ \mathrm{g}^2\\&\approx0.000569643\ \mathrm{g}^2.\end{aligned}$$

离差平方和非负，读数接近，小方差合理。结果与配套评分标准一致。保留精确均值：两个大数相减得到很小的方差，若先把均值舍入再平方，可能造成很大相对误差。

</div>

## 一个读数、总和、均值：问哪一个？ {#sampling}

**抽样分布（sampling distribution）**描述相同大小的样本反复抽取时，统计量怎样变化，不是某组内部各读数的分布。对方差同为 $\sigma^2$ 的独立观测，先定义总和 $T$，再除以 $n$：

$$T=\sum_{i=1}^nX_i,\qquad\bar X=\frac{T}{n}.$$

$$\begin{aligned}E(T)&=n\mu,\\\operatorname{Var}(T)&=n\sigma^2,\\E(\bar X)&=\mu,\\\operatorname{Var}(\bar X)&=\frac1{n^2}\operatorname{Var}(T)\\&=\frac{\sigma^2}{n}.\end{aligned}$$

缩放变量时，方差乘缩放倍数的平方：先加独立方差，再除以 $n^2$。这些均值、方差不要求正态。但精确正态形状需要总体正态。若各个 $X_i$ 正态且独立，则

$$\begin{aligned}X_i&\sim N(\mu,\sigma^2),\\T&\sim N(n\mu,n\sigma^2),\\\bar X&\sim N\left(\mu,\frac{\sigma^2}{n}\right).\end{aligned}$$

这是模型内的精确结论，小样本也成立。$N(\mu,\sigma^2)$ 第二项是方差。平均数的中心不变，但比单个读数波动小。

<div class="worked-example" markdown="1">

### 完整示范：平均后为什么更稳定？ {#example-sampling}

**Question:** Independent bag masses follow N(500, 16), in grams. A sample contains 16 bags. Find the probability that its mean exceeds 502 g. Compare the mean and standard deviation of one bag, the total and the sample mean.

总体已正态，不用先检查样本是否充分大。单袋均值500 g、标准差4 g；16袋总和均值8000 g、标准差16 g；平均数均值500 g、标准差只有1 g。

$$\begin{aligned}\bar X&\sim N(500,1),\\Z&=\frac{\bar X-500}{1},\\P(\bar X>502)&=P(Z>2)\\&=1-\Phi(2)\approx0.0228.\end{aligned}$$

这里 $\Phi(z)=P(Z\le z)$ 是标准正态左侧累计概率。题目要右尾，所以从1扣掉左侧面积。分母用4 g，就变成问单袋，而不是平均数。

</div>

## 样本均值会波动多少？ {#standard-error}

样本均值的**标准误（standard error，SE）**是它的抽样分布的标准差，描述换样本后平均数怎样波动，不是各读数的分散程度，也不是本次估计与真值的实际差。

$$\operatorname{SE}(\bar X)=\frac{\sigma}{\sqrt n}.$$

若 $\sigma$ 未知，用 $s$ 估计标准误。抽样前的估计量使用 $S$，代入数据后使用 $s$。

$$\widehat{\operatorname{SE}}=\frac{s}{\sqrt n}.$$

把参数换成估计值，不会让它变成已知真值。即使总体正态，精确抽样分布中也是真实的 $\sigma^2/n$。代入 $s^2/n$ 后不能称为精确数值正态模型。后面的均值检验会处理这种额外不确定性。

<div class="worked-example" markdown="1">

### 完整示范：估计平均数的不确定程度 {#example-se}

**Question:** For the eight sauce packets above, estimate the population standard deviation and the standard error of the sample mean. Explain the difference.

$$\begin{aligned}s&=\sqrt{\frac{319}{560000}}\\&\approx0.0238672\ \mathrm{g},\\\widehat{\operatorname{SE}}&=\frac{s}{\sqrt8}\\&\approx0.00843833\ \mathrm{g}.\end{aligned}$$

第一个数估计单包有多分散，第二个数估计每次取8包算出的均值有多分散。都没有给出8.98375 g与未知真均值的距离。同一总体的样本量 $n$ 变成4倍，真实标准误减半，不是四分之一。

</div>

## 总体不正态，还能研究平均数吗？ {#clt}

等待时间可能右偏：多数时候等得短，偶尔等很久。但许多独立等待时间的平均数可能接近正态。**中心极限定理（Central Limit Theorem，CLT）**说，独立同分布、均值有限且方差有限并为正时，随着 $n$ 增大，标准化均值趋近标准正态分布：

$$Z_n=\frac{\bar X-\mu}{\sigma/\sqrt n}.$$

样本充分大时，可近似使用

$$\bar X\approx N\left(\mu,\frac{\sigma^2}{n}\right).$$

近似的是**均值分布**，不是总体或每个 $X_i$ 变成正态。没有通用的“30个就够”。轻微偏斜与极度偏斜、尾部很重的总体，所需样本量可能不同；极端尾概率更要谨慎。增加相关读数不自动建立独立性。形状或独立性不清楚时，要说明局限。

大样本中可以用 $s^2$ 估计未知方差，但仍有估计误差，不会变成精确结果。强偏斜总体的小样本不能自动获得正态依据。

<div class="worked-example" markdown="1">

### 完整示范：很多次等待的平均值 {#example-clt}

**Question:** Independent waiting times have an exponential distribution with mean 6 minutes. Use a normal approximation for 100 times to estimate the probability that their mean is less than 6.6 minutes. Explain what is approximate.

指数变量的标准差等于均值，所以 $\sigma=6$ 分钟。100个独立观测来自这个有限方差模型，近似的是均值分布，单次等待仍偏斜。

$$\begin{aligned}\operatorname{SE}(\bar X)&=\frac6{\sqrt{100}}=0.6,\\\bar X&\approx N(6,0.36),\\P(\bar X<6.6)&\approx\Phi\left(\frac{6.6-6}{0.6}\right)\\&=\Phi(1)\approx0.841.\end{aligned}$$

在抽样模型下，均值6、方差0.36精确；正态形状和据此算出的概率才是近似。CLT没有给有限样本的精确概率或统一精度保证。

</div>

## 收起示范，自己判断 {#practice}

先写判断，再打开提示。用过提示应记为“借助提示完成”，不算无帮助的独立证据。

<section class="lesson-check" markdown="1">

### 任务 1 {#task-population}

**Question:** A school wants the mean journey time of all 240 students in one year group. It records 18 students and calculates 24.5 minutes. Identify the population, sample, target parameter and statistic. A rule gives each student the same chance but only allows preassigned groups of 18 to be selected. Is this necessarily a simple random sample? Explain.

<details markdown="1"><summary>提示</summary>

检查每一种18人组合，而不只看每个人的机会。

</details>

<details markdown="1"><summary>解答与回补</summary>

总体是240人的通勤时间，样本是实际记录的18个时间。参数是240人的总体平均通勤时间；统计量是18个时间的样本均值，这次为24.5分钟。不一定是简单随机样本：固定分组排除了许多18人组合。只保证个人机会相同不够。回看[总体与抽样](#population)，再做[新任务 A](#retry-population)。

</details>

</section>

<section class="lesson-check" markdown="1">

### 任务 2 {#task-unbiased}

**Question:** An estimator T for a population mean of 20 takes values 18 and 22 with equal probabilities. Another estimator U always equals 21. Decide which, if either, is unbiased. A single sample gave T = 18. Does this disprove your decision? Explain in English.

<details markdown="1"><summary>提示</summary>

先算每种规则的期望，再判断一次结果能说明什么。

</details>

<details markdown="1"><summary>解答与回补</summary>

$E(T)=20$，$E(U)=21$，所以 $T$ 无偏，$U$ 长期偏高。可写成：“The estimate 18 has an error of −2, but unbiasedness concerns the expected value over repeated samples, not exact agreement in every sample.” 这次误差−2未推翻长期均值20。若只凭单次误差判断，回看[无偏含义](#unbiased)，再做[新任务 B](#retry-unbiased)。

</details>

</section>

<section class="lesson-check" markdown="1">

### 任务 3 {#task-estimates}

**Question:** Six independent measurements from one population have sum 48 cm and sum of squares 394 square centimetres. Estimate the population mean and variance. A student reports variance 10/6 square centimetres. Explain whether that is the required estimate.

<details markdown="1"><summary>提示</summary>

先算均值，再判断估计总体时应使用哪个分母。

</details>

<details markdown="1"><summary>解答与回补</summary>

$$\begin{aligned}\bar x&=\frac{48}{6}=8\ \mathrm{cm},\\Q&=394-6(8)^2=10,\\s^2&=\frac{10}{5}=2\ \mathrm{cm}^2.\end{aligned}$$

$Q$ 除以6描述本组平均离差平方，但估计总体方差时偏低，这里应除以 $n-1$。若减错量或分母用了6，回看[方差计算](#estimates)，再做[新任务 C](#retry-estimates)。

</details>

</section>

<section class="lesson-check" markdown="1">

### 任务 4 {#task-sampling}

**Question:** Ten independent lap times follow a normal population model with mean 205 seconds and standard deviation 30 seconds. Find the distributions of the sample mean and total. Find the probability that the sample mean is at least 220.5 seconds, to three significant figures. Is a large-sample argument needed?

<details markdown="1"><summary>提示</summary>

辨认问哪个随机量，再找分布形状的依据。

</details>

<details markdown="1"><summary>解答与回补</summary>

改编自 OxfordAQA MA04 January 2025 Q3：以抽样分布任务替换假设检验。

$$\begin{aligned}\bar X&\sim N(205,90),\\\operatorname{SD}(\bar X)&=\frac{30}{\sqrt{10}},\\T&\sim N(2050,9000),\\z&=\frac{15.5\sqrt{10}}{30}\\&=1.633843\ldots,\\P(\bar X\ge220.5)&=1-\Phi(z)\\&\approx0.0511.\end{aligned}$$

不需要 CLT：独立正态观测即使只有10次，均值也精确正态。概率数值舍入；查 $z=1.63$ 的正态表约0.0516。方差900描述单次观测。回看[抽样分布](#sampling)，再做[新任务 D](#retry-sampling)。

</details>

</section>

<section class="lesson-check" markdown="1">

### 任务 5 {#task-se}

**Question:** A sample of 25 independent lengths has mean 40 mm and unbiased variance estimate 25 square millimetres. Estimate the standard error of the mean. Can you claim that the mean has the exact distribution N(40, 1)? If sample size increases to 100 from the same population, what happens to the true standard error?

<details markdown="1"><summary>提示</summary>

哪些数只是估计值？哪些真参数已知？

</details>

<details markdown="1"><summary>解答与回补</summary>

$$\begin{aligned}\widehat{\operatorname{SE}}&=\frac{\sqrt{25}}{\sqrt{25}}=1\ \mathrm{mm},\\\frac{\operatorname{SE}_{\mathrm{new}}}{\operatorname{SE}_{\mathrm{old}}}&=\sqrt{\frac{25}{100}}=\frac12.\end{aligned}$$

真均值、方差未知，甚至没有给总体正态，不能声称精确数值正态。同一总体的真实标准误减半，但新样本的 $s$ 可能不同，估计标准误不必恰好减半。回看[标准误](#standard-error)，再做[新任务 E](#retry-se)。

</details>

</section>

<section class="lesson-check" markdown="1">

### 任务 6 {#task-clt}

**Question:** For each case, decide whether a normal model for the sample mean is exact, potentially a reasonable approximation, or not justified by the information. Explain. (a) Four independent observations from a normal population. (b) Four independent observations from a strongly right-skewed population. (c) Four hundred independent observations from a mildly skewed population with finite variance. (d) Thirty consecutive sensor readings with strongly correlated errors. Does the number 30 settle any doubtful case? (e) In case (c), the population mean is 10 and standard deviation is 4. Estimate $P(9.6<\bar X<10.2)$, choosing and explaining your method. Give three significant figures.

<details markdown="1"><summary>提示</summary>

把形状、独立性、样本量分开检查。

</details>

<details markdown="1"><summary>解答与回补</summary>

(a)精确。(b)没有依据：强右偏总体取4次，均值不一定近似正态。(c)CLT支持合理近似，但尾部和所求概率仍影响精度。(d)相关读数不能直接用独立抽样 CLT。30不是通用门槛。(c)单次观测仍不正态。回看[CLT 条件](#clt)，再做[新任务 F](#retry-clt)。

(e) 大量独立观察来自轻度偏斜总体，可用正态模型近似均值的分布；总体本身仍偏斜。

$$\begin{aligned}
\operatorname{SE}(\bar X)&=4/\sqrt{400}=0.2,\\
\bar X&\overset{\mathrm{approx}}{\sim}N(10,0.04),\\
P(9.6<\bar X<10.2)
&\approx\Phi(1)-\Phi(-2)\\
&\approx0.8413-0.0228\\
&\approx0.819.
\end{aligned}$$

若标准误或概率方向有误，先回看[均值的分布](#sampling)与[中央极限定理](#clt)，再做[新重试](#retry-clt)。反求界限请查[正态反求](/zh/alevel/a2-mathematics/statistics/normal-distribution/#inverse)。

</details>

</section>

## 回补之后，换一种问法再试 {#retry}

选与你错误对应的新题，收起原解答。这里改变表述或求问方向，不只是换数字。

<section class="lesson-check" markdown="1">

### 任务 A {#retry-population}

**Question:** A library has books A, B, C and D. To estimate their mean mass, a rule chooses either AB or CD with equal probabilities. Every book has selection probability one half. Is this a simple random sample of two? Identify a parameter and a possible statistic.

<details markdown="1"><summary>提示</summary>

找出不会出现的组合。

</details>

<details markdown="1"><summary>解答与回补</summary>

不是：AC、AD、BC、BD都不出现。简单随机样本要求6种组合机会相同。4本书的总体平均质量是参数，选中两本的均值是统计量。若只看个人机会，回看[抽样含义](#population)。

</details>

</section>

<section class="lesson-check" markdown="1">

### 任务 B {#retry-unbiased}

**Question:** An estimator T equals mu − 2 with probability p and mu + 1 with probability 1 − p. Find p so that T is unbiased for mu. Must the possible errors have equal size or equal probability?

<details markdown="1"><summary>提示</summary>

平衡乘上概率后的误差。

</details>

<details markdown="1"><summary>解答与回补</summary>

$$\begin{aligned}E(T)&=p(\mu-2)\\&\quad+(1-p)(\mu+1)\\&=\mu+1-3p,\\E(T)=\mu&\ \Longrightarrow\ p=\frac13.\end{aligned}$$

误差不必等大，概率不必相同，乘上概率后抵消即可，概率也合法。若直接认定 $p=1/2$，回看[无偏含义](#unbiased)。

</details>

</section>

<section class="lesson-check" markdown="1">

### 任务 C {#retry-estimates}

**Question:** Five measurements have mean 8 cm. Their squared deviations from their sample mean average 3.2 square centimetres. Estimate the population variance. If 10 cm is added to every measurement, what are the new estimates of mean and variance? Explain without inventing raw data.

<details markdown="1"><summary>提示</summary>

先还原离差平方和。读数和均值一起平移。

</details>

<details markdown="1"><summary>解答与回补</summary>

$$\begin{aligned}s^2&=\frac{5\times3.2}{4}=4\ \mathrm{cm}^2,\\\bar y&=\bar x+10=18\ \mathrm{cm},\\s_y^2&=s_x^2=4\ \mathrm{cm}^2.\end{aligned}$$

原先用5作分母，先乘5还原，再除以4。平移后离差不变，方差不变。若方差也加10，回看[方差公式](#estimates)。

</details>

</section>

<section class="lesson-check" markdown="1">

### 任务 D {#retry-sampling}

**Question:** Nine independent measurements come from a normal population with mean 12. Their total T has standard deviation 6. Find the population variance, the distribution of their sample mean, and the probability that their mean is less than 11, to three significant figures.

<details markdown="1"><summary>提示</summary>

已知标准差属于总和。

</details>

<details markdown="1"><summary>解答与回补</summary>

$$\begin{aligned}E(T)&=9\times12=108,\\\operatorname{Var}(T)&=36,\\9\sigma^2&=36\ \Longrightarrow\ \sigma^2=4,\\\bar X&\sim N\left(12,\frac49\right),\\P(\bar X<11)&=\Phi\left(\frac{11-12}{2/3}\right)\\&=\Phi(-1.5)\approx0.0668.\end{aligned}$$

平均数标准差是 $2/3$，不是6或2。若缩放出错，回看[先总和再平均](#sampling)。

</details>

</section>

<section class="lesson-check" markdown="1">

### 任务 E {#retry-se}

**Question:** A researcher wants the true standard error to be one third of its value for samples of size 16 from the same population. What sample size is required? In an actual sample of size 16, s = 12. Estimate its standard error and explain why this does not reveal the true estimation error.

<details markdown="1"><summary>提示</summary>

标准误涉及样本量的平方根，真均值仍未知。

</details>

<details markdown="1"><summary>解答与回补</summary>

$$\begin{aligned}n_{\mathrm{new}}&=9n_{\mathrm{old}},\\n_{\mathrm{new}}&=9\times16=144,\\\widehat{\operatorname{SE}}&=\frac{12}{\sqrt{16}}=3.\end{aligned}$$

估计标准误为3，单位与测量相同，估计重复均值的分散程度，不是本次均值与 $\mu$ 的实际差。若答48，回看[样本量与标准误](#standard-error)。

</details>

</section>

<section class="lesson-check" markdown="1">

### 任务 F {#retry-clt}

**Question:** A report says: “We averaged 100 independent observations from a strongly skewed population with finite mean and variance, so the population is now normal and every tail probability is exact.” Correct the report. Would 100 readings of one object with a shared random calibration error justify the independent-sampling formula? (b) A separate mildly skewed population has mean 50 and standard deviation 6. For 100 independent observations, estimate a cut-off $c$ such that $P(\bar X>c)=0.05$. Explain why your result is not exact; the normal-distribution lesson provides statistical reference values.

<details markdown="1"><summary>提示</summary>

分开总体形状、平均数和精确性。

</details>

<details markdown="1"><summary>解答与回补</summary>

可能近似正态的是均值的抽样分布，总体仍偏斜。100次不保证正态尾概率精确。共有的随机校准误差引入相关性，也不会因平均而消失，不能直接用独立公式。回看[CLT 边界](#clt)。

(b) 对平均值作大样本近似，不是把单次观察说成正态。

$$\begin{aligned}
\operatorname{SE}(\bar X)&=6/\sqrt{100}=0.6,\\
\frac{c-50}{0.6}&\approx1.6449,\\
c&\approx50+0.6(1.6449)\\
&=50.98694\approx51.0.
\end{aligned}$$

这是近似值；样本量并不保证尾部概率精确。标准误错误请回看[标准误](#standard-error)，之后用[延后题(d)](#review-mixed)再检查。

</details>

</section>

## 学过别的主题后，再回来判断 {#later-review}

不看示范，自己辨认随机量、选择依据。尝试用英文说明，再按反馈选回补任务。

<section class="lesson-check" markdown="1">

### 任务 Review {#review-mixed}

**Question:** (a) Thirty-six independent waiting times from a right-skewed population have sum 360 minutes and sum of squares 3740 square minutes. Estimate the population mean, variance and standard error of the mean. Can you assert an exact numerical normal distribution for that mean? Explain. (b) In a different model, independent measurements V follow N(10, 4). Find the probability that the total of 36 measurements exceeds 372, to three significant figures. (c) A friend says an unbiased rule must give the true mean for the next sample. Respond with a counterexample. (d) For 100 independent observations from a mildly skewed population of mean 8 and standard deviation 3, estimate $P(\bar X<8.3)$. State the model conditions and whether the probability is exact.

<details markdown="1"><summary>提示</summary>

分清估计值与参数；需要时把总和变成均值。

</details>

<details markdown="1"><summary>解答与回补</summary>

$$\begin{aligned}\bar w&=\frac{360}{36}=10,\\s^2&=\frac{3740-36(10)^2}{35}=4,\\\widehat{\operatorname{SE}}&=\frac2{\sqrt{36}}=\frac13.\end{aligned}$$

(a)不能称精确数值正态：总体偏斜，参数也只是估计。CLT近似还需考虑针对这种形状和所求概率，独立样本是否充分大；36不自动保证。单位依次为分钟、平方分钟、分钟。

$$\begin{aligned}T&=\sum_{i=1}^{36}V_i,\\\bar V&\sim N\left(10,\frac19\right),\\P(T>372)&=P\left(\bar V>\frac{31}{3}\right)\\&=1-\Phi(1)\approx0.159.\end{aligned}$$

(b)给定模型内，舍入前精确。(c)等概率取0或10的总体，用一次观测估计均值5，规则无偏，但每次都不等于5。计算：[估计公式](#estimates)→[重试 C](#retry-estimates)；缩放：[抽样分布](#sampling)→[重试 D](#retry-sampling)；不确定性：[标准误](#standard-error)→[重试 E](#retry-se)；模型：[CLT](#clt)→[重试 F](#retry-clt)；无偏：[含义](#unbiased)→[重试 B](#retry-unbiased)。

(d) 同一个轻度偏斜、有限方差总体的大量独立观察支持中央极限定理。这是近似概率，不是总体正态时的精确计算。

$$\begin{aligned}
\operatorname{SE}(\bar X)&=3/\sqrt{100}=0.3,\\
P(\bar X<8.3)&\approx\Phi\left(\frac{8.3-8}{0.3}\right)\\
&=\Phi(1)\approx0.841.
\end{aligned}$$

若标准误或概率方向有误，先回看[均值的分布](#sampling)与[中央极限定理](#clt)，再做[新重试](#retry-clt)。反求界限请查[正态反求](/zh/alevel/a2-mathematics/statistics/normal-distribution/#inverse)。

</details>

</section>

## 下一步：怎样判断一个说法？ {#next-step}

样本均值估计总体均值，标准误说明估计怎样波动。接下来[假设检验](/zh/alevel/a2-mathematics/statistics/hypothesis-testing/)问：若某个说法成立，眼前结果是否足够反常？本页覆盖S2.5，不引入置信区间，也不提前完成均值检验。

<details markdown="1"><summary>来源与范围</summary>

OxfordAQA 9660 v5.2，S2.5，印刷第26页／PDF第25页：[资格页](https://www.oxfordaqa.com/qualification/international-as-and-a-level-mathematics-9660/)及[大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf#page=25)。不直接考抽样实施方法。

酱料包示范改编自[January 2025 Q7(a)，QP第20页](/assets/pdf/fx-cg50/references/oxfordaqa-ma04-2025-january-question-paper.pdf#page=20)，核对[最终MS第15页](/assets/pdf/fx-cg50/references/oxfordaqa-ma04-2025-january-mark-scheme.pdf#page=15)。任务4改编自[Q3，QP第10页](/assets/pdf/fx-cg50/references/oxfordaqa-ma04-2025-january-question-paper.pdf#page=10)，核对[MS第9页](/assets/pdf/fx-cg50/references/oxfordaqa-ma04-2025-january-mark-scheme.pdf#page=9)。重写题干故称改编题，不称逐字原题。其余自拟，无官方分值。数值核算不等于计算器按键验证或学习效果证据。

</details>
