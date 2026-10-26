---
title: "A2 高等统计：课程路线"
layout: subjects
mathjax: true
grade: a2
subject: a2-further-mathematics
lang: zh-CN
permalink: /zh/alevel/a2-further-mathematics/statistics/
reading_layout: true
study_page: true
toc_headings: h2
translation_of: /alevel/a2-further-mathematics/statistics/
---

[全部 A2 高数单元](/zh/alevel/a2-further-mathematics-overview/)
{:.lesson-meta}

## 选择起点 {#start}

OxfordAQA 9665 · FM04 / Further Statistics 2。从一张概率表开始，再学习怎样利用随机样本估计未知量、作出判断。这条路线覆盖 FS2.1–4。本页题目均为自拟教学数据，不是实测数据，也不赋官方分值。

第一次学 MGF？从[第一课](moment-generating-functions/)开始。准备学习推断？确认自己会期望、方差和[普通数学的均值检验](/zh/alevel/a2-mathematics/statistics/mean-tests/)，再进入[估计量](estimators/)。先写出自己的尝试，再打开提示或答案。

## 每一课解决什么问题 {#route}

- [MGF：找回均值与方差](moment-generating-functions/) — 从概率建立函数；分清独立副本与同一变量重复使用。

- [连续与常用 MGF](standard-mgfs/) — 推导 Poisson、指数和正态 MGF，检查输入范围并识别独立和。

- [比较估计规则](estimators/) — 分清偏差、一致性和效率，说明组合估计量的依据。

- [给均值估计配上区间](confidence-intervals/) — 根据条件选择 z 或 t，解释区间并规划样本量。

- [检验有多大机会发现变化](test-power/) — 先固定拒绝规则，再计算指定备择下漏掉变化的概率。

- [比较两个独立组](comparing-means/) — 选择标准误，说明为什么能用 z 或合并 t。

- [保留自然配对](paired-tests/) — 每一对形成一个差值，再检验差的均值。

- [比较变动大小](variance-tests/) — 分清单个方差与方差比，核对尾部、分子和自由度。

- [概率模型是否吻合](goodness-of-fit/) — 把离散或连续概率变成期望频数，检查合并与估计参数。

- [两个分类是否有关联](association-tests/) — 完成列联表检验，并处理 2×2 表的 Yates 校正。

## 学完后，混合选择方法 {#review}

下面故意不把方法写进题名。先说明随机抽样单位与条件，再计算。若用过提示，请把它与独立完成区分记录。

<section class="lesson-check" markdown="1">

### 一次测量研究 {#mixed-a}

**Question:** Eight independent randomly selected devices are measured before and after an adjustment. Define $D=$ before minus after; assume the differences are normally distributed. The summaries are $\sum d=16$, $\sum d^2=60$. At 5%, is there evidence of a reduction? Use $P(T_7>1.895)=0.05$. Give a 95% interval for the mean reduction using $t_{0.975,7}=2.365$. Does this alone establish that the adjustment caused a reduction?

<details markdown="1"><summary>提示</summary>

独立抽样单位是八对，不是十六个互相独立的读数。

</details>

<details markdown="1"><summary>解答</summary>

使用每对的差值。$H_0:\mu_D=0$，$H_1:\mu_D>0$。
$$
\bar d=2,\quad s_D^2=\frac{60-16^2/8}{7}=4,\quad
t=\frac{2}{2/\sqrt8}=2.828>1.895.
$$
拒绝 $H_0$：有证据支持平均减少量为正。区间为
$$
2\pm2.365\frac2{\sqrt8}=(0.328,3.672)\quad\text{approximately}.
$$
零不在双侧 95% 区间内。配对能处理设备间差异，但没有合适对照／随机设计，时间或其他变化也可能解释结果，因此不能仅凭它认定因果。

</details>

</section>

<section class="lesson-check" markdown="1">

### 四个区间 {#mixed-b}

**Question:** Eighty independent observations are recorded in the fixed intervals $[0,0.5)$, $[0.5,1)$, $[1,1.5)$, $[1.5,2]$. The counts are $20,20,30,10$. Test the fully specified uniform model on $[0,2]$ at 5%; the upper 5% chi-square critical value with 3 degrees of freedom is 7.815. Explain why this is not a test of association.

<details markdown="1"><summary>提示</summary>

对每段积分求概率；这里没有从数据估计模型参数。

</details>

<details markdown="1"><summary>解答</summary>

$H_0$ 下每段概率为 $1/4$，所以期望频数都是 $20>5$。
$$
Q=\frac{0^2+0^2+10^2+(-10)^2}{20}=10>7.815.
$$
四组频数受总数约束，未估计参数，所以 $df=4-1=3$。5% 水平下拒绝均匀模型；这不代表已找出正确替代分布。这里只按一个数值变量分组，不是在交叉比较两个分类变量，因此是拟合优度问题。

</details>

</section>

<section class="lesson-check" markdown="1">

### 估计值与精度 {#mixed-c}

**Question:** Independent $X_1,\ldots,X_n$ are exponential with unknown mean $\theta>0$. Derive the MGF of $\bar X$, and show that it is unbiased and consistent for $\theta$. For a large sample with $n=100$, $\bar x=5$ and unbiased sample variance $s^2=25$, give an approximate 95% interval for $\theta$ using $z_{0.975}=1.96$. Is it an exact small-sample normal interval?

<details markdown="1"><summary>提示</summary>

指数分布的率是 $1/	heta$；先算抽样性质，再讨论大样本近似。

</details>

<details markdown="1"><summary>解答</summary>

$$
M_X(t)=\frac1{1-\theta t},\qquad
M_{\bar X}(t)=\left(1-\frac{\theta t}{n}\right)^{-n},\quad t<n/\theta.
$$
$E(\bar X)=\theta$，$\operatorname{Var}(\bar X)=\theta^2/n$，所以无偏且一致（均方误差趋于零）。
$$
5\pm1.96\frac5{\sqrt{100}}=(4.02,5.98).
$$
这里用大样本正态近似及估计的标准误。总体为指数分布，并非正态，不能称为小样本下的精确正态区间。

</details>

</section>

## 隔一段时间再回来 {#later-review}

<section class="lesson-check" markdown="1">

### 改变拒绝规则 {#later-a}

**Question:** A test rejects $H_0:\mu=10$ when $\bar X>10.8$. Independent normal observations have known standard deviation 2 and sample size 25. Find the actual significance level and the power at $\mu=11$. If the threshold is increased while everything else stays fixed, describe both changes. You may use $\Phi(2)=0.97725$ and $\Phi(-0.5)=0.30854$.

<details markdown="1"><summary>提示</summary>

事件不变，分别在两个真实均值下算概率。

</details>

<details markdown="1"><summary>解答</summary>

标准误是 $2/\sqrt{25}=0.4$。$H_0$ 下临界值标准化为 $2$，实际第一类错误概率为 $1-\Phi(2)=0.02275$。在 $\mu=11$ 下标准化为 $-0.5$，功效为 $1-\Phi(-0.5)=0.69146$；$\beta=0.30854$。把阈值调高，会同时减少第一类错误和发现这个固定上侧备择的机会。

</details>

</section>

<section class="lesson-check" markdown="1">

### 先判断比较什么 {#later-b}

**Question:** For each study, name an appropriate FM04 procedure and its key assumptions: (i) two independent normal samples with unknown but equal variances, comparing means; (ii) two independent normal samples comparing standard deviations; (iii) one random sample cross-classified by two binary categories. Can the same denominator and reference distribution be used for all three?

<details markdown="1"><summary>提示</summary>

先判断目标是均值差、方差比，还是频数。

</details>

<details markdown="1"><summary>解答</summary>

(i) 合并双样本 t 检验，自由度 $df=n_1+n_2-2$；需要样本独立、总体正态及方差相等。(ii) F 检验用 $s_1^2/s_2^2$，自由度 $df=(n_1-1,n_2-1)$；要求正态、独立，标准差的假设要先平方。(iii) 列联表关联的卡方检验，自由度 $df=1$，$2\times2$ 表作 Yates 校正，且每格期望严格大于 5；观测需独立并归入互斥类别。三个问题不能共用同一个分母或参考分布。期望不足时，本课程使用的近似无依据。

</details>

</section>

<section class="lesson-check" markdown="1">

### 两个新调查 {#later-c}

**Question:** At 5%, assess whether the population mean measurements differ in each independent random-sampling study; units are seconds. (i) Normal populations have unknown but equal variances. A: $n=6,\bar x=20,s_A^2=9$; B: $m=8,\bar y=17,s_B^2=4$, where sample variances are unbiased. (ii) Populations have finite unknown variances, not assumed equal, and the samples are sufficiently large for a mean-difference normal approximation. A: $(n,\sum x,\sum x^2)=(100,1000,10891)$; B: $(m,\sum y,\sum y^2)=(144,1296,13952)$. Use $t_{0.975,12}\approx2.178813$ or $z_{0.975}\approx1.959964$ as justified. State why the two uncertainty calculations differ.

<details markdown="1"><summary>提示</summary>

先从总体形状、方差信息判断模型，再计算分母。

</details>

<details markdown="1"><summary>解答</summary>

两题都是 $H_0:\mu_A-\mu_B=0$，$H_1:\mu_A-\mu_B\ne0$。
(i) 小样本、总体正态且共同方差未知，使用合并 t：
$$
s_p^2=\frac{5(9)+7(4)}{12}=\frac{73}{12},\quad
SE=\sqrt{\frac{73}{12}\left(\frac16+\frac18\right)}
=\sqrt{\frac{511}{288}},\quad
t=\frac3{SE}\approx2.252200,\quad df=12.
$$
$\lvert t\rvert>2.178813$，拒绝；有证据支持总体均值不同。
(ii) 先分别恢复估计量，使用有依据的大样本近似：
$$
\bar x=10,\quad\bar y=9,\quad
s_A^2=\frac{10891-1000^2/100}{99}=9,\quad
s_B^2=\frac{13952-1296^2/144}{143}=16,
$$
$$
SE=\sqrt{9/100+16/144},\qquad z=\frac1{SE}\approx2.229882.
$$
$\lvert z\rvert>1.959964$，拒绝；近似检验提供总体均值不同的证据。(ii) 没有等方差假设，应分别估计方差，不能擅自合并。大样本支持均值的抽样近似，不要求每个个体值正态。

</details>

</section>

## 范围与来源 {#sources}

<details markdown="1"><summary>资格与阅读来源</summary>

[OxfordAQA 9665](https://www.oxfordaqa.com/qualification/international-as-and-a-level-further-mathematics-9665/)，大纲 v5.2 FS2.1–4；Oxford 2017 Further Mathematics with Statistics 第 29–33 章，并对照 2025 年 1 月、6 月 FM04 配对题卷与评分标准。材料身份与核查边界记录在制作／审查记录，自拟题不赋官方分值。

</details>
