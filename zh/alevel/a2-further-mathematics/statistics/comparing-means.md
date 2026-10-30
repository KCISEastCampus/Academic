---
title: "比较独立均值：先选对不确定性尺度"
layout: subjects
mathjax: true
grade: a2
subject: a2-further-mathematics
lang: zh-CN
permalink: /zh/alevel/a2-further-mathematics/statistics/comparing-means/
reading_layout: true
study_page: true
toc_headings: h2
translation_of: /alevel/a2-further-mathematics/statistics/comparing-means/
---

## 差值也需要比较尺度 {#meaning}

即使总体均值相等，两个样本均值也很少完全相同。要判断差异，就把这个差放到抽样波动的尺度上比较。先看数据怎么来：有两列数据，不代表两列互相独立。本课题目均为自拟题。

先修是[线性组合](/zh/alevel/as-further-mathematics/linear-combinations/)及[单均值检验](/zh/alevel/a2-mathematics/statistics/mean-tests/)。同一对象测两次时，应进入[配对检验](../paired-tests/)。两组内部及相互独立时：

$$
D=\bar X-\bar Y,\quad \delta=\mu_X-\mu_Y,\qquad
E(D)=\delta,\quad \operatorname{Var}(D)=\frac{\sigma_X^2}{n}+\frac{\sigma_Y^2}{m}.
$$

方差里系数要平方，因此相减的两个量，方差仍相加。最后开方得到标准误。分子要减去原假设差值 $\delta_0$，它不一定是零。

## 让已知条件决定方法 {#conditions}

| 条件 | 参照分布与标准误 |
| --- | --- |
| 总体正态，方差已知 | 精确 $z$；$\sqrt{\sigma_X^2/n+\sigma_Y^2/m}$ |
| 大样本独立，方差有限 | 近似 $z$；已知时用总体方差，未知时用 $\sqrt{s_X^2/n+s_Y^2/m}$ |
| 小样本，总体正态，未知但相等的总体方差 | 合并 $t$，$df=n+m-2$ |

其中 $s^2=[\sum x_i^2-(\sum x_i)^2/n]/(n-1)$ 是无偏样本方差。最后一行要把组内平方和按自由度合并：

$$
s_p^2=\frac{(n-1)s_X^2+(m-1)s_Y^2}{n+m-2},\qquad
T=\frac{\bar X-\bar Y-\delta_0}{s_p\sqrt{1/n+1/m}}\sim t_{n+m-2}\quad(H_0).
$$

总体等方差不要求两个样本方差恰好相等；反过来，样本方差接近也不能证明总体等方差。大样本支持的是抽样近似，不能证明独立或消除抽样偏差。小样本、明显偏态且不等方差时，不能硬套表中任何一行。

## 两个完整的选法示范 {#example}

<section class="worked-example" markdown="1">

### 总体波动已知

**Question:** Independent random samples from normal processes A and B give $n=9,\bar x=24$ g and $m=16,\bar y=21$ g. Known population standard deviations are 3 g and 4 g. Test for different population means at 5%, using $z_{0.975}=1.959964$.

$$
H_0:\mu_A-\mu_B=0,\quad H_1:\mu_A-\mu_B\ne0,\qquad
SE=\sqrt{3^2/9+4^2/16}=\sqrt2,\quad z=\frac3{\sqrt2}=2.121.
$$

尽管样本小，总体正态且方差已知，仍可精确使用 $z$。“不同”使用双尾。因为 $\lvert z\rvert>1.959964$，拒绝原假设：5% 水平下有证据支持两总体平均质量不同。检查：两均值方差各为 1，所以差的方差为 2，不能相减成零。

</section>

<section class="worked-example" markdown="1">

### 估计共同方差

**Question:** Independent random samples of size 6 come from normal populations with the same unknown variance. A has mean 18 s and unbiased variance 4; B has mean 15 s and unbiased variance 5. Test the pre-specified claim $\mu_A>\mu_B$ at 5%, using $t_{0.95,10}=1.812461$.

$$
H_0:\mu_A=\mu_B,\quad H_1:\mu_A>\mu_B,\qquad
s_p^2=\frac{5(4)+5(5)}{10}=4.5,\quad
SE=\sqrt{4.5(1/6+1/6)}=\sqrt{1.5},
$$
$$
t=\frac{18-15}{\sqrt{1.5}}=2.449,\qquad df=10.
$$

正态与题设的等方差条件支持合并 $t$。右尾统计量超过 1.812461，所以有证据支持 A 总体平均时间更长。检查分母：$s_p$ 是个体散布，乘上 $\sqrt{1/6+1/6}$ 才变成均值差的散布。

</section>

## 自己选，并说明依据 {#practice}

<section class="lesson-check" markdown="1">

### 服务时间 {#task-a}

**Question:** Independent random samples from finite-variance service-time populations give A: $n=64,\sum x=640,\sum x^2=6652$; B: $m=100,\sum y=950,\sum y^2=9916$ (minutes and squared minutes). Variances are unknown and not assumed equal. The samples are sufficiently large for the mean-difference normal approximation. Test $\mu_A>\mu_B$ at 5%, using $z_{0.95}=1.644854$. State what sample size does not guarantee.

<details markdown="1"><summary>提示</summary>

先分别恢复两个无偏方差，再组成标准误。

</details>

<details markdown="1"><summary>解答</summary>

$$
\bar x=10,\quad\bar y=9.5,\quad
s_A^2=\frac{6652-640^2/64}{63}=4,\quad
s_B^2=\frac{9916-950^2/100}{99}=9.
$$
使用各自方差的近似 z，不合并。
$$
H_0:\mu_A=\mu_B,\quad H_1:\mu_A>\mu_B,\quad
SE=\sqrt{4/64+9/100}=0.390512,\quad z=\frac{0.5}{SE}=1.28037.
$$
没有越过临界值，5% 下证据不足以支持 A 总体均值更大。大样本不能证明独立、消除选择偏差，也不会让单个服务时间变为正态。

</details>

</section>

<section class="lesson-check" markdown="1">

### 声称的差距 {#task-b}

**Question:** Independent normal processes have known population standard deviations 4 and 3. Samples give $n=16,\bar x=31$ and $m=9,\bar y=28$. Test the pre-specified claim $\mu_X-\mu_Y>2$ at 5%, using $z_{0.95}=1.644854$. Explain the null difference.

<details markdown="1"><summary>提示</summary>

先找声称范围的边界，再计算偏离量。

</details>

<details markdown="1"><summary>解答</summary>

$H_0:\delta=2$ 是 $\delta\le2$ 的边界；$H_1:\delta>2$。
$$
SE=\sqrt{16/16+9/9}=\sqrt2,\qquad
z=\frac{31-28-2}{\sqrt2}=0.707107<1.644854.
$$
证据不足以支持差距超过 2。漏减这个 2，就会变成检验是否超过零，问题已经变了。

</details>

</section>

<section class="lesson-check" markdown="1">

### 两家送货公司 {#task-c}

**Question:** Delivery times from two companies are skewed with finite variances. Independent random samples of 100 deliveries from each are sufficiently large for a mean-difference normal approximation. Known population standard deviations are 10 and 8 minutes; sample means are 81 and 78 minutes. At 2%, test whether the population means differ, using $z_{0.99}=2.326348$. Explain why skewness does not by itself invalidate this test.

<details markdown="1"><summary>提示</summary>

先判断近似针对单次送货还是样本均值。这里给的是已知总体方差。

</details>

<details markdown="1"><summary>解答</summary>

样本独立且足够大，使用已知方差作近似正态比较。
$$
H_0:\mu_A=\mu_B,\quad H_1:\mu_A\ne\mu_B,\qquad
SE=\sqrt{10^2/100+8^2/100}=\sqrt{1.64},\qquad
z=\frac{81-78}{\sqrt{1.64}}\approx2.342606.
$$
双尾 2% 在每尾留 1%。$\lvert z\rvert>2.326348$，拒绝；有足够证据支持两公司总体平均送货时间不同。近似针对样本均值的抽样分布，不要求每次送货时间正态。这是近似检验，不是精确检验；无需 t 自由度。

</details>

</section>

## 检查分母的来历 {#retry}

若把方差相减，回到[差的方差](#meaning)；若见两组就合并，回到[条件表](#conditions)。样本量不同时，要按自由度加权，不能直接平均方差。

<section class="lesson-check" markdown="1">

### 不同的样本量 {#retry-a}

**Question:** Independent normal samples have the same unknown population variance. A: $n=5,\bar x=12,s_A^2=9$; B: $m=7,\bar y=8,s_B^2=4$. Test for different population means at 5%, using $t_{0.975,10}=2.228139$. Explain whether 9 and 4 contradict the stated population model.

<details markdown="1"><summary>提示</summary>

每个样本方差先乘自己的自由度。

</details>

<details markdown="1"><summary>解答</summary>

$$
s_p^2=\frac{4(9)+6(4)}{10}=6,\quad
SE=\sqrt{6(1/5+1/7)}=\sqrt{72/35},\quad
t=\frac4{SE}=2.78887,\quad df=10.
$$
对 $H_0:\mu_A=\mu_B$ 与 $\mu_A\ne\mu_B$，因为 $\lvert t\rvert>2.228139$ 而拒绝。有证据支持总体均值不同。样本方差会随机波动，9 与 4 不相等并不直接否定题设的总体等方差。

</details>

</section>

<section class="lesson-check" markdown="1">

### 另一组送货样本 {#retry-b}

**Question:** Two independent random samples of delivery times come from skewed populations with known SDs 6 and 8 minutes. Sample sizes are 100 and 144 and sample means are 12 and 10 minutes. A normal approximation for the mean difference is justified. Test for different population means at 5%, using $z_{0.975}=1.959964$, and explain why pooling an estimated variance is unnecessary.

<details markdown="1"><summary>提示</summary>

两个已知方差分别除以各自样本量；“不同”需要两尾。

</details>

<details markdown="1"><summary>解答</summary>

$$
H_0:\mu_A=\mu_B,\quad H_1:\mu_A\ne\mu_B,\qquad
SE=\sqrt{6^2/100+8^2/144},\qquad
z=\frac{12-10}{SE}\approx2.229882.
$$
$\lvert z\rvert>1.959964$，拒绝；近似检验提供总体平均送货时间不同的证据。总体方差已知，没有需要合并估计的共同未知方差。大样本支持题设的均值近似，但不会自动产生独立性。

</details>

</section>

若因为偏态而否定检验，回看[到底对什么作近似](#conditions)，再收起旧答案完成[新的送货调查](#retry-b)。

## 和其他章节一起再判断 {#later-review}

隔一段时间，合上本页，完成[两个新调查](../#later-c)和[方法选择任务](../#later-b)。先看抽样设计，不能靠数据有几列来选模型。

## 下一步 {#next-step}

[配对观测](/zh/alevel/a2-further-mathematics/statistics/paired-tests/) · [课程路线](/zh/alevel/a2-further-mathematics/statistics/)

{% include exam_topic_practice.html %}
