---
title: "置信区间：给均值估计配上范围"
layout: subjects
mathjax: true
grade: a2
subject: a2-further-mathematics
lang: zh-CN
permalink: /zh/alevel/a2-further-mathematics/statistics/confidence-intervals/
reading_layout: true
study_page: true
toc_headings: h2
translation_of: /alevel/a2-further-mathematics/statistics/confidence-intervals/
---

点估计只给出一个数，我们应该附上多大的不确定范围？本课会选择并计算单个总体均值的区间，解释覆盖率，并由宽度要求反求样本量。

需要样本均值、方差和正态概率。可按需要回补[方差估计](/zh/alevel/a2-mathematics/statistics/estimation/#estimates)、[标准误](/zh/alevel/a2-mathematics/statistics/estimation/#standard-error)、[大样本近似](/zh/alevel/a2-mathematics/statistics/estimation/#clt)或[由正态概率反求临界值](/zh/alevel/a2-mathematics/statistics/normal-distribution/#inverse)。本页示范与任务均为自拟，数据为构造数据，不分配官方分值。

## 均值固定，区间随样本变化 {#meaning}

样本均值是点估计。置信区间（confidence interval）再给出一个范围，但这个范围要来自明确的抽样方法。本课只估计单个总体均值，区间以样本均值为中心对称；它不是“总体中间 95% 的个体数值范围”。

在假设成立时，95% 的方法会在反复抽样得到的区间中约有 95% 覆盖固定真值 μ；精确方法的理论覆盖率是 95%，近似方法则是近似覆盖。某次数据产生数值区间后，固定 μ 要么在里面，要么不在里面；不能再把它解释成固定 μ 对这个已得到区间有 95% 的频率概率。日常报告中的“有 95% 的置信度”指向方法的覆盖性质。

## 由抽样分布建立区间 {#normal-model}

先考虑从 N(μ,σ²) 独立抽样，且 σ² 已知。X̄ 精确服从方差为 σ²/n 的正态分布。σ/√n 是样本均值的标准误（standard error, SE），不是单个观察值的标准差 σ。若要求 100(1−α)% 置信水平，取 q 使标准正态的 P(Z≤q)=1−α/2；两个尾部各留 α/2。

$$
P\left(-q\leq\frac{\bar X-\mu}{\sigma/\sqrt n}\leq q\right)=1-\alpha
\quad\Longrightarrow\quad
P\left(\bar X-q\frac{\sigma}{\sqrt n}\leq\mu\leq\bar X+q\frac{\sigma}{\sqrt n}\right)=1-\alpha.
$$

得到 x̄ 后，计算 h=qσ/√n，区间为 [x̄−h,x̄+h]。半宽（margin of error）是 h，全宽是 2h。例如已知 σ=8、n=16、x̄=50，题给 95% 所用 q=1.960，则 SE=2，半宽 3.92，区间 [46.08,53.92]，全宽 7.84。因为总体正态且方差已知，小样本仍可用这个精确结论。

## 什么条件支持什么区间？ {#choose-model}

| 已知信息 | 标准化均值所用分布 | 区间与性质 |
| --- | --- | --- |
| 独立正态观察值，σ² 已知 | 标准正态 Z，任意样本量 | x̄±qσ/√n；模型下精确 |
| 独立同分布的大样本，正且有限的方差，有正态近似依据 | 由 CLT 得到近似标准正态 | σ 已知：x̄±qσ/√n；σ 未知：x̄±qs/√n；均为近似 |
| 独立正态观察值，σ² 未知，尤其是小样本 | T=(X̄−μ)/(S/√n)∼tₙ₋₁ | x̄±tₙ₋₁,₁₋α/₂s/√n；正态模型下精确 |

“大样本”是在论证均值的抽样分布可近似正态，不是一个适用于所有总体的神奇门槛。强偏态、极端值、相依或无限方差都可能使草率近似失效。本课题目会明确给出适用的大样本情形。小样本若总体不正态，不能仅因 σ 未知就改用 t。总体正态且方差未知时，t 结论对任意 n≥2 都成立；大样本的 z 是近似选择，不表示 t 错了。

方差未知时，用分母为 n−1 的样本方差；减去 n x̄² 是因为离差以估计出的样本均值为中心。方差、标准差、均值的标准误是三个不同量。

$$
S^2=\frac{\sum_{i=1}^n(X_i-\bar X)^2}{n-1},
\qquad
s^2=\frac{\sum x_i^2-(\sum x_i)^2/n}{n-1},
\qquad
\widehat{\operatorname{SE}}(\bar X)=\frac{s}{\sqrt n}.
$$

iid 且方差有限时，E(S²)=σ²。可用 Σ(Xᵢ−X̄)²=ΣXᵢ²−nX̄² 验证，其期望是 n(σ²+μ²)−n(σ²/n+μ²)=(n−1)σ²，因此除以 n−1。开平方不会保留无偏性，不能因此说 S 是 σ 的无偏估计量。正态样本中，用样本估计离散程度后，标准化变量应服从自由度 n−1 的 t 分布。

## 完整示范：从数据到区间 {#example}

<section class="worked-example" markdown="1">

### 示范 {#example-a}

**Question:** Five independent readings, in mg, are 8,9,10,11,12. They are a random sample from a normal population with unknown mean μ and unknown variance. Construct a 95% confidence interval for μ and give its full width. Use t₄,₀.₉₇₅=2.776, meaning P(T₄≤2.776)≈0.975. Does the interval support μ=12 mg? Explain why observing a reading of 12 mg is not a contradiction.

总体正态，样本小且总体方差未知，因此用自由度 4 的 t。先从数据求中心与离散程度，再计算半宽。

$$
\begin{aligned}
\bar x&=\frac{8+9+10+11+12}{5}=10\text{ mg},\\
\sum(x_i-\bar x)^2&=4+1+0+1+4=10\text{ mg}^2,\\
s^2&=\frac{10}{4}=2.5\text{ mg}^2,\\
\frac{s}{\sqrt5}&=\sqrt{\frac{2.5}{5}}=\frac1{\sqrt2}\text{ mg},\\
h&=\frac{2.776}{\sqrt2}=1.962928\ldots\text{ mg},\\
\text{CI}&=\left[10-\frac{2.776}{\sqrt2},10+\frac{2.776}{\sqrt2}\right]
\approx[8.037,11.963]\text{ mg},\\
\text{full width}&=2h=3.925857\ldots\text{ mg}\approx3.926\text{ mg}.
\end{aligned}
$$

两端到 10 的距离相等，可用来检查运算。12 在区间外，因此该区间在对应的双侧 5% 水平下不支持“总体均值是 12 mg”的假设。但它约束的是总体均值，不是个体读数；出现一个 12 mg 的读数完全不矛盾。也不能把统计结论写成“已经证明参数绝不可能是 12”。

</section>

## 由包含关系或宽度反求 {#width}

若半宽 h 已知，而区间要包含假设均值 μ₀，那么样本均值这个中心必须让 μ₀ 落在两端之间。把左右两个不等式都整理，才能得到中心的范围。

$$
\bar x-h\leq\mu_0\leq\bar x+h
\quad\Longleftrightarrow\quad
\mu_0-h\leq\bar x\leq\mu_0+h.
$$

规划时，如果 σ 已知、正态临界值 q 固定，全宽 W=2qσ/√n。要求全宽不超过 w，要解不等式，再取满足条件的最小整数；如果要求的是半宽不超过 e，公式则少一个 2。

$$
W\leq w\quad\Longleftrightarrow\quad
n\geq\left(\frac{2q\sigma}{w}\right)^2;
\qquad
h\leq e\quad\Longleftrightarrow\quad
n\geq\left(\frac{q\sigma}{e}\right)^2.
$$

把选定整数代回检查；需要证明最小时，也检查前一个整数。若 σ 来自先导样本估计，样本量规划只是近似，因为未来样本的离散程度可能不同。小样本 t 规划的临界值也依赖 n，应逐个候选整数使用相应自由度，不能固定一个随意的 t。“严格小于”在边界恰为整数时，也与“不超过”不同。

## 先独立作答，再打开帮助 {#practice}

先保持提示与解答关闭；如果使用帮助，请记下。

<section class="lesson-check" markdown="1">

### 任务 A {#task-a}

**Question:** Select and justify an interval procedure and calculate the interval in each applicable case. All samples are independent random samples. (i) A normal population has known variance 36 mg²; n=9 and x̄=40 mg; use 90% confidence. (ii) A nonnormal population has finite known variance 25 mg²; n=100 and x̄=20 mg; use 95% confidence. A normal approximation for the sample mean is justified. (iii) As in (ii), except the variance is unknown and Σ(xᵢ−x̄)²=2475 mg². (iv) Only six observations from a strongly skewed nonnormal population are available and the variance is unknown. Is a standard small-sample t interval justified from this information? Use z₀.₉₅=1.645 and z₀.₉₇₅=1.960, where P(Z≤zₚ)≈p.

<details markdown="1"><summary>提示</summary>

先找总体形状、方差是否已知，以及均值抽样分布的依据；不能只看 n。

</details>

<details markdown="1"><summary>解答</summary>

$$
\begin{aligned}
\text{(i)}&\quad40\pm1.645\frac6{\sqrt9}=40\pm3.29
&&\Longrightarrow[36.71,43.29]\text{ mg},\\
\text{(ii)}&\quad20\pm1.960\frac5{\sqrt{100}}=20\pm0.98
&&\Longrightarrow[19.02,20.98]\text{ mg},\\
\text{(iii)}&\quad s^2=\frac{2475}{99}=25,\quad20\pm1.960\frac5{10}
&&\Longrightarrow[19.02,20.98]\text{ mg}.
\end{aligned}
$$

(i) 总体正态、方差已知，所以是精确 z；n=9 不会自动迫使使用 t。(ii) 根据题给的大样本依据使用近似 z。(iii) 以估计方差代入近似 z；端点相同，不代表与 (ii) 的信息和依据相同。(iv) 既没有正态总体假设，也没有可用的大样本依据，因此不能据这些资料采用标准 t 区间，需要更多数据或另有依据的方法／模型。

</details>

</section>

<section class="lesson-check" markdown="1">

### 任务 B {#task-b}

**Question:** Six independent observations from a normal population with unknown mean and variance give Σxᵢ=60 s and Σxᵢ²=630 s². Construct a 95% confidence interval for μ. Use t₅,₀.₉₇₅=2.571, meaning P(T₅≤2.571)≈0.975. Assess separately the claims μ=12 s and μ=14 s. State a correct repeated-sampling interpretation.

<details markdown="1"><summary>提示</summary>

先由总和与平方和求离差平方和，再除以 n−1。

</details>

<details markdown="1"><summary>解答</summary>

$$
\bar x=10\text{ s},\quad
\sum(x_i-\bar x)^2=630-\frac{60^2}{6}=30\text{ s}^2,\quad
s^2=\frac{30}{5}=6\text{ s}^2,
\quad\operatorname{SE}=\sqrt{\frac66}=1\text{ s}.
$$

$$
\text{CI}=10\pm2.571=[7.429,12.571]\text{ s}.
$$

总体正态、方差未知、n=6，因此用 t₅。区间包含 12，表示与这个假设均值相容；不包含 14，表示在对应双侧 5% 水平下不支持该均值。包含不等于证明相等。在模型成立时反复使用同一抽样与区间方法，95% 的区间会覆盖同一个固定 μ；题给临界值的舍入只造成微小数值近似。

</details>

</section>

<section class="lesson-check" markdown="1">

### 任务 C {#task-c}

**Question:** A random sample of 16 from a normal population with known standard deviation 4 cm is used to form a 90% confidence interval for μ. The interval includes 20 cm. Find the full range of possible values of x̄ and its smallest possible value. Use z₀.₉₅=1.645, meaning P(Z≤1.645)≈0.95. Give the interval's full width.

<details markdown="1"><summary>提示</summary>

先把“20 在两端之间”写成两个不等式，再解 x̄。

</details>

<details markdown="1"><summary>解答</summary>

$$
h=1.645\frac4{\sqrt{16}}=1.645\text{ cm},\quad
\bar x-1.645\leq20\leq\bar x+1.645
\Longleftrightarrow18.355\leq\bar x\leq21.645\text{ cm}.
$$

最小中心为 18.355 cm，此时 20 恰是区间上端点；全宽是 3.290 cm。题目说“包含”，所以边界可以取到；20 不必等于样本均值。

</details>

</section>

<section class="lesson-check" markdown="1">

### 任务 D {#task-d}

**Question:** Plan independent sampling from a normal population with known standard deviation 6 g. Find the smallest sample size for a 95% confidence interval whose full width is at most 5 g. Then find the answer if the requirement instead refers to a half width of at most 5 g. Use z₀.₉₇₅=1.960, meaning P(Z≤1.960)≈0.975. Verify minimality for the full-width requirement.

<details markdown="1"><summary>提示</summary>

先写“全宽=2×临界值×标准误”，再解 n；不要先把 5 当半宽。

</details>

<details markdown="1"><summary>解答</summary>

$$
\frac{2(1.960)(6)}{\sqrt n}\leq5
\Longleftrightarrow n\geq\left(\frac{23.52}{5}\right)^2=22.127616,
\qquad n_{\min}=23.
$$

n=22 时全宽约 5.01448 g，仍太宽；n=23 时约 4.90426 g，符合要求。全宽随 n 增大而减小，因此 23 最小。若 5 g 指半宽，则 n≥5.531904，最小为 6。差别来自平方前的因子 2，并非置信水平改变。

</details>

</section>

<section class="lesson-check" markdown="1">

### 任务 E {#task-e}

**Question:** Independent observations from a normal population with known standard deviation 4 units give n=64 and x̄=10 units. Construct 95% and 99% confidence intervals using z₀.₉₇₅=1.960 and z₀.₉₉₅=2.576, where P(Z≤zₚ)≈p. Explain why the widths differ. Assess the statements: “95% of individual observations lie in the 95% interval”; “the interval proves μ=10.5”; and “after observing the interval, the fixed μ has a 95% probability of lying in it.” If a new sample of size 256 is used with the same known σ, what is its 95% half width? Is its centre determined?

<details markdown="1"><summary>提示</summary>

分清总体均值、个体数值，以及区间端点的随机性。

</details>

<details markdown="1"><summary>解答</summary>

$$
\begin{aligned}
\operatorname{SE}&=\frac48=0.5,\\
95\%:&\quad10\pm0.980=[9.020,10.980],\\
99\%:&\quad10\pm1.288=[8.712,11.288],\\
n=256:&\quad h=1.960\frac4{16}=0.490.
\end{aligned}
$$

其他信息不变，提高覆盖率要使用更大的临界值，因此区间更宽。三个说法都不成立：区间针对均值，不是 95% 的个体；包含 10.5 只说明相容，不能证明相等；95% 指抽样前方法的覆盖率，不是观察到端点后赋给固定参数的概率。样本量变为四倍，半宽减半；新中心由新样本决定，题目没有给出。

</details>

</section>

## 修复后，用新题再试 {#retry}

<section class="lesson-check" markdown="1">

### 重试 R1 {#retry-a}

**Question:** Four independent observations from a normal population with unknown mean and variance are 4,6,8,10 mm. Find a 90% confidence interval for μ and its full width. Use t₃,₀.₉₅=2.353, meaning P(T₃≤2.353)≈0.95. Show the centred sum of squares, variance estimate, degrees of freedom and standard error.

<details markdown="1"><summary>提示</summary>

估计方差时离差平方和不除以 4；但标准误平方是 s²/4。

</details>

<details markdown="1"><summary>解答</summary>

$$
\bar x=7,\quad\mathrm{SS}=9+1+1+9=20,\quad s^2=\frac{20}{3},\quad\mathrm{df}=3,
\quad\operatorname{SE}=\sqrt{\frac{20/3}{4}}=\sqrt{\frac53}.
$$

$$
h=2.353\sqrt{\frac53}=3.0377099\ldots,\quad
\text{CI}=7\pm h\approx[3.9623,10.0377]\text{ mm},\quad
W=2h\approx6.0754\text{ mm}.
$$

正态且方差未知，故用 t₃；双侧 90% 区间用累计概率 0.95 的临界值。区间估计均值；半宽、全宽都不是 s。

</details>

</section>

<section class="lesson-check" markdown="1">

### 重试 R2 {#retry-b}

**Question:** For independent sampling from a normal population with known σ=5 cm, find the smallest n giving a 95% interval with full width at most 4 cm. Use z₀.₉₇₅=1.960, where P(Z≤1.960)≈0.975. A student rounds the calculated bound to 24. Explain the error by checking both 24 and your chosen n.

<details markdown="1"><summary>提示</summary>

先为全宽写不等式，再决定整数怎样取。

</details>

<details markdown="1"><summary>解答</summary>

$$
n\geq\left(\frac{2(1.960)(5)}4\right)^2=24.01
\quad\Longrightarrow\quad n_{\min}=25.
$$

n=24 时全宽约 4.000833 cm，仍大于 4；n=25 时是 3.92 cm。普通四舍五入不能保证不等式成立。若过早把 4.000833 舍入成 4.00，就会掩盖 24 不合格。

</details>

</section>

A 若选法错误，回看[总体与方差条件](#choose-model)；B 若分母或平方根错误，把离差平方和、s²、SE 分行重建，再做[重试1](#retry-a)；C 若中心范围错误，先写[包含关系的左右两式](#width)；D 若整数取错，做[重试2](#retry-b)；E 若解释错误，先说[抽样前什么在变](#meaning)。

## 学过另一主题后再回来 {#later-review}

隔过另一主题后再做，保持前面的解答关闭。

<section class="lesson-check" markdown="1">

### 稍后任务 {#later-task}

**Question:** Two independent random samples from the same normal population with unknown mean μ and unknown variance have summaries (n,Σx,Σx²)=(4,40,420) and (5,60,730), with readings in seconds. Use all observations to estimate μ and construct a 95% confidence interval. Use t₈,₀.₉₇₅=2.306, meaning P(T₈≤2.306)≈0.975. Does the interval support μ=13 s? Explain why simply taking the unweighted average of the two sample means is not the combined sample mean. Show how you recover the combined spread; do not average the two variance estimates.

<details markdown="1"><summary>提示</summary>

先合并样本量、总和与平方和，再相对于合并均值计算离差。

</details>

<details markdown="1"><summary>解答</summary>

$$
\begin{aligned}
n&=9,\quad\sum x_i=100,\quad\sum x_i^2=1150,\quad\bar x=\frac{100}{9},\\
\mathrm{SS}&=1150-\frac{100^2}{9}=\frac{350}{9},\\
s^2&=\frac{350/9}{8}=\frac{175}{36}\text{ s}^2,\\
\operatorname{SE}&=\sqrt{\frac{175/36}{9}}=\frac{5\sqrt7}{18}\text{ s},\\
h&=2.306\frac{5\sqrt7}{18}=1.6947507\ldots\text{ s},\\
\text{CI}&=\frac{100}{9}\pm h\approx[9.41636,12.80586]\text{ s}.
\end{aligned}
$$

九个观察值相互独立且来自同一正态总体，因此用 t₈。点估计量是九个随机观察值的均值，这次估计值为 100/9 s。区间不包含 13，故在对应双侧 5% 水平下不支持该假设均值。两组均值是 10、12，等权平均为 11；合并均值则按人数加权，等于 100/9。先合并原始平方和，才会同时计入组内波动与两个组均值不同的贡献。

</details>

</section>

## 下一步 {#next-step}

本课比较一个总体均值与一个假设值。后续推断会改变模型与目标；两个独立总体或配对观察不能直接沿用本课的单样本标准误。

[检验功效](/zh/alevel/a2-further-mathematics/statistics/test-power/) · [课程路线](/zh/alevel/a2-further-mathematics/statistics/)
