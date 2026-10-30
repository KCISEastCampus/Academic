---
title: "方差检验：比较总体的波动"
layout: subjects
mathjax: true
grade: a2
subject: a2-further-mathematics
lang: zh-CN
permalink: /zh/alevel/a2-further-mathematics/statistics/variance-tests/
reading_layout: true
study_page: true
toc_headings: h2
translation_of: /alevel/a2-further-mathematics/statistics/variance-tests/
---

样本可能更分散，却不代表总体一定更分散。本课检验总体波动，先分清方差与标准差。所有示范和任务均自拟，数据为构造，不设官方分值。

需要先会无偏样本方差、原假设及拒绝域。需要时回补[比较总体的条件判断](/zh/alevel/a2-further-mathematics/statistics/comparing-means/#conditions)。

## 一个总体：先选尾部 {#chi-square}

对正态总体的独立随机观测，下面的抽样分布连接样本方差和总体方差。由于已经估计样本均值，离差之和固定为零，因此少一个自由度。

$$
S^2=\frac{\sum_{i=1}^n(X_i-\bar X)^2}{n-1},\qquad
Q=\frac{(n-1)S^2}{\sigma_0^2}\sim\chi^2_{n-1}\quad(H_0:\sigma^2=\sigma_0^2).
$$

标准差假设进入分母时必须平方。例如标准差为2毫米，方差为4平方毫米。正态性是此结果的条件；不能因为样本大，就自动对任意非正态总体使用这个精确检验。

用左侧累计概率定义分位数：

$$
P(\chi^2_{\nu}\le c_{\nu}(p))=p.
$$

| Alternative | Rejection region at level $\alpha$ |
| --- | --- |
| $\sigma^2>\sigma_0^2$ | $Q>c_{n-1}(1-\alpha)$ |
| $\sigma^2<\sigma_0^2$ | $Q<c_{n-1}(\alpha)$ |
| $\sigma^2\ne\sigma_0^2$ | $Q<c_{n-1}(\alpha/2)$ or $Q>c_{n-1}(1-\alpha/2)$ |

表内分位数用左侧累计概率定义。样本方差越大，统计量越大，所以“总体方差增加”选上尾；双侧5%检验每尾留2.5%。不拒绝并不证明总体方差恰等于假设值。

<section class="worked-example" markdown="1">

### 完整示范 {#example-a}

**Question:** Eleven independent rod lengths are sampled randomly from a normal population. The unbiased sample variance is $9\ \mathrm{mm}^2$. Test at 5% whether the population SD exceeds $2\ \mathrm{mm}$, using $c_{10}(0.95)=18.307$.

$$
H_0:\sigma=2,\quad H_1:\sigma>2,\qquad
Q=\frac{10\times9}{2^2}=22.5>18.307,\quad\nu=10.
$$

拒绝原假设。在5%水平，有足够证据认为杆长度的总体标准差超过2毫米。方差单位相消，统计量无量纲；统计量偏大，与上尾备择一致。

</section>

## 两个总体：比值与方向一起检查 {#f-ratio}

两组独立正态总体的随机样本，可以用无偏样本方差之比。总体方差相等时有下列F分布，分子对应的自由度写在前面。

$$
H_0:\sigma_A^2=\sigma_B^2,\qquad
F=\frac{S_A^2}{S_B^2}\sim F_{n_A-1,n_B-1}.
$$

$$
P(F_{a,b}\le f_{a,b}(p))=p,\qquad
f_{a,b}(p)=\frac{1}{f_{b,a}(1-p)}.
$$

备择认为A总体方差较大时，A/B偏大支持它，故选上尾；认为A较小时选下尾。取倒数要同时交换自由度和尾部。有的表标的是上尾概率，其“上尾5%”对应本页的0.95分位数。不能只为让比值大于1而换分子，忘记原来的研究方向。

$$
H_1:\sigma_A^2\ne\sigma_B^2:\quad
F<f_{a,b}(\alpha/2)\ \text{or}\ F>f_{a,b}(1-\alpha/2).
$$

$$
H_0:\frac{\sigma_A}{\sigma_B}=k\ (k>0):\quad
F=\frac{S_A^2/S_B^2}{k^2}\sim F_{n_A-1,n_B-1}.
$$

第二式用于指定标准差比，必须平方；若指定的是方差比，就直接用方差比。精确F检验要求样本独立、总体正态。同一对象重复测量，不能自动当成两组独立样本。

<section class="worked-example" markdown="1">

### 完整示范 {#example-b}

**Question:** Independent normal samples from processes A and B have $n_A=11,s_A^2=18$ and $n_B=21,s_B^2=6$, with variances in square millimetres. At 5%, test whether A has greater population variance. Use $f_{10,20}(0.95)=2.347878$.

$$
H_0:\sigma_A^2=\sigma_B^2,\quad H_1:\sigma_A^2>\sigma_B^2,\qquad
F=\frac{18}{6}=3>2.347878,\quad(\nu_1,\nu_2)=(10,20).
$$

$$
F'=\frac13<\frac{1}{2.347878}=0.425917,\quad(\nu_1',\nu_2')=(20,10).
$$

拒绝原假设，有足够证据认为A总体方差较大。倒数计算用下尾，是对同一主张的检查，不能改成另一个上尾检验。

</section>

## 自己判断 {#practice}

<section class="lesson-check" markdown="1">

### 自己尝试 {#task-a}

**Question:** A normal random sample of 11 independent observations has $s^2=9\ \mathrm{mm}^2$. A two-sided 5% test of $H_0:\sigma=k$ is not rejected. Find the possible positive $k$, using $c_{10}(0.025)=3.246973$ and $c_{10}(0.975)=20.483177$. Explain why two 5% tail cutoffs would be wrong.

<details markdown="1">

<summary>提示</summary>

先写不拒绝事件，再取倒数。

</details>

<details markdown="1">

<summary>解答</summary>

$$
3.246973\le\frac{90}{k^2}\le20.483177
\ \Longrightarrow\ \frac{90}{20.483177}\le k^2\le\frac{90}{3.246973}
\ \Longrightarrow\ 2.09615\le k\le5.26480\ \mathrm{mm}.
$$

正数取倒数要反向，最后再开方。左右各5%合计是10%。此处按严格拒绝域约定保留边界，连续分布恰好等于边界的概率为零；不能用舍入值强行判边界。

</details>

</section>

<section class="lesson-check" markdown="1">

### 自己尝试 {#task-b}

**Question:** Independent normal samples give $n_A=11,s_A^2=4$ and $n_B=21,s_B^2=9$. The claim is $\sigma_A^2>\sigma_B^2$. A student uses $9/4$ and an upper tail because the larger observed variance is on top. Diagnose and complete the 5% test, given $f_{10,20}(0.95)=2.347878$ and $f_{20,10}(0.05)=0.425917$.

<details markdown="1">

<summary>提示</summary>

先说清备择成立时哪个比值应偏大。

</details>

<details markdown="1">

<summary>解答</summary>

$$
H_0:\sigma_A^2=\sigma_B^2,\quad H_1:\sigma_A^2>\sigma_B^2,\qquad
F=\frac49=0.444444<2.347878,\quad(\nu_1,\nu_2)=(10,20).
$$

$$
F'=\frac94=2.25>0.425917,\quad(\nu_1',\nu_2')=(20,10).
$$

不拒绝，没有足够证据支持A总体方差更大。倒数必须比较下尾，而2.25不在下尾拒绝域。按观察方差大小选分子可能改变研究方向；不拒绝也不证明相等。

</details>

</section>

<section class="lesson-check" markdown="1">

### 自己尝试 {#task-c}

**Question:** The same 15 instruments are measured under two settings, with normal marginal distributions. Can the independent F test compare their variances? Would two independent samples of 200 from strongly skewed populations automatically justify the exact F test? Explain separately.

<details markdown="1">

<summary>提示</summary>

分开核对样本之间的独立性与总体正态性。

</details>

<details markdown="1">

<summary>解答</summary>



两种描述都不足以支持此精确检验。同一仪器重复测量可使两组方差相关；独立大样本也不能自动修复总体强偏态。应指出所需模型或设计不足，不强行计算统计量。

</details>

</section>

<section class="lesson-check" markdown="1">

### 关于相对波动的说法 {#task-ratio}

**Question:** Independent random samples from normal processes A and B have $n_A=11,n_B=21$, with unbiased variances $s_A^2=48,s_B^2=6$ in square millimetres. At 5%, test the pre-specified claim that the population SD ratio $\sigma_A/\sigma_B$ exceeds 2. Use $f_{10,20}(0.95)=2.347878$. State the ordered degrees of freedom and explain why comparing $48/6$ directly with this cutoff is wrong.

<details markdown="1"><summary>提示</summary>

原假设给的是标准差之比，先变为方差之比，再把样本比值归一化。

</details>

<details markdown="1"><summary>解答</summary>

$$
H_0:\sigma_A/\sigma_B=2,\quad H_1:\sigma_A/\sigma_B>2,\qquad
F=\frac{48/6}{2^2}=2,\qquad(\nu_1,\nu_2)=(10,20).
$$
“大于”使用右尾。$2<2.347878$，不拒绝；证据不足以支持 A 的总体标准差超过 B 的两倍，不代表已经证明比值为 2。原假设中的方差比是 4，不是 1；直接使用样本比值 8，会检验错误的原假设。正态与独立随机抽样支持这里的 F 分布。

</details>

</section>

## 按错因恢复 {#retry}

尾部或反求出错，回到[单总体尾部](#chi-square)重写事件；比值错误，回到[方差比](#f-ratio)标明分子与方向；条件错误则先找独立抽样单位。收起原解答再做新题。

<section class="lesson-check" markdown="1">

### 自己尝试 {#retry-a}

**Question:** A normal sample of 21 independent observations has $\sum(x_i-\bar x)^2=160\ \mathrm{mm}^2$. Find positive SD values not rejected by a two-sided 5% test. Use $c_{20}(0.025)=9.590777$ and $c_{20}(0.975)=34.169607$.

<details markdown="1">

<summary>提示</summary>

离差平方和已经是检验量分子。

</details>

<details markdown="1">

<summary>解答</summary>

$$
s^2=\frac{160}{20}=8,\qquad
9.590777\le\frac{160}{k^2}\le34.169607,\qquad
2.16391\le k\le4.08445\ \mathrm{mm}.
$$

分子为160，不再乘20；取倒数时反向，再开方得到标准差。

</details>

</section>

<section class="lesson-check" markdown="1">

### 自己尝试 {#retry-b}

**Question:** Independent normal samples have $n_A=11,s_A^2=3$ and $n_B=21,s_B^2=12$. Test $\sigma_A<\sigma_B$ at 5%, using $f_{10,20}(0.05)=0.360488$. Check with $f_{20,10}(0.95)=2.774016$.

<details markdown="1">

<summary>提示</summary>

标准差顺序与方差顺序相同。

</details>

<details markdown="1">

<summary>解答</summary>

$$
H_0:\sigma_A^2=\sigma_B^2,\quad H_1:\sigma_A^2<\sigma_B^2,\quad
F=\frac3{12}=0.25<0.360488,\quad(\nu_1,\nu_2)=(10,20).
$$

$$
F'=4>2.774016,\quad(\nu_1',\nu_2')=(20,10).
$$

拒绝，有足够证据认为A总体标准差较小。取倒数后换自由度和尾部，结论一致。

</details>

</section>

<section class="lesson-check" markdown="1">

### 自己尝试 {#retry-c}

**Question:** Choose the design that can support an independent F test: (a) 40 independent units randomly assigned to two disjoint groups of 20, with normal outcomes within each population; (b) 20 units each measured twice, with normal margins. State what still needs checking.

<details markdown="1">

<summary>提示</summary>

每个抽样对象画一行，看是否跨组重复。

</details>

<details markdown="1">

<summary>解答</summary>



选(a)，仍检查组内独立、正态模型及抽样对象是否支持所要推断的总体。(b)没有给出两样本独立性。

</details>

</section>

## 稍后再判断 {#later-review}

学习其他主题后，收起示范再做。记录是否使用提示；刚订正会做不代表稍后仍能独立判断。

<section class="lesson-check" markdown="1">

### 自己尝试 {#later-a}

**Question:** A laboratory claims its normally distributed measurement error has SD below 2 units. Eleven independent errors have unbiased sample variance 1. Assess the claim at 5%, using $c_{10}(0.05)=3.940299$.

<details markdown="1">

<summary>提示</summary>

由主张决定备择方向。

</details>

<details markdown="1">

<summary>解答</summary>

$$
H_0:\sigma=2,\quad H_1:\sigma<2,\qquad
Q=\frac{10\times1}{4}=2.5<3.940299,\quad\nu=10.
$$

拒绝，有足够证据认为总体误差标准差小于2单位。

</details>

</section>

<section class="lesson-check" markdown="1">

### 自己尝试 {#later-b}

**Question:** Two independent normal samples each contain 11 observations and have variances 16 and 4. At 5%, assess whether their population variances differ. Use $f_{10,10}(0.025)=0.269049$ and $f_{10,10}(0.975)=3.716792$. Explain why the one-sided cutoff 2.978237 is unsuitable.

<details markdown="1">

<summary>提示</summary>

“不同”需要两尾。

</details>

<details markdown="1">

<summary>解答</summary>

$$
H_0:\sigma_A^2=\sigma_B^2,\quad H_1:\sigma_A^2\ne\sigma_B^2,\qquad
F=4>3.716792,\quad(\nu_1,\nu_2)=(10,10).
$$

拒绝，有足够证据认为总体方差不同。双侧5%每尾2.5%；5%单上尾值把过多概率放在上尾。

</details>

</section>

<section class="lesson-check" markdown="1">

### 换一个比值再检验 {#retry-ratio}

**Question:** Independent random samples from normal processes A and B have $n_A=11,n_B=21$, with unbiased variances $s_A^2=40.5,s_B^2=6$ in square millimetres. At 5%, test whether $\sigma_A/\sigma_B>1.5$, using $f_{10,20}(0.95)=2.347878$. State the null, normalization, tail and ordered degrees of freedom.

<details markdown="1"><summary>提示</summary>

A 仍在分子，假设的标准差比须平方；尾部跟随备择方向。

</details>

<details markdown="1"><summary>解答</summary>

$$
H_0:\sigma_A/\sigma_B=1.5,\quad H_1:\sigma_A/\sigma_B>1.5,\qquad
F=\frac{40.5/6}{1.5^2}=3,\qquad(\nu_1,\nu_2)=(10,20).
$$
$3>2.347878$，在右尾拒绝；5% 水平下有足够证据支持 A 的总体标准差超过 B 的 1.5 倍。样本方差比本身为 6.75，必须再除以原假设的方差比 2.25。

</details>

</section>

若标准差比没有平方，回看[非单位比值](#f-ratio)，收起旧答案，再做[新比值重试](#retry-ratio)。

## 下一步 {#next-step}

接下来区分：总体波动的主张、整个分布的拟合、两个分类变量的关联。始终说明抽样单位、条件及情境结论。

[拟合优度](/zh/alevel/a2-further-mathematics/statistics/goodness-of-fit/) · [课程路线](/zh/alevel/a2-further-mathematics/statistics/)

{% include exam_topic_practice.html %}
