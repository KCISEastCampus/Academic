---
title: "拟合优度：频数与模型是否吻合"
layout: subjects
mathjax: true
grade: a2
subject: a2-further-mathematics
lang: zh-CN
permalink: /zh/alevel/a2-further-mathematics/statistics/goodness-of-fit/
reading_layout: true
study_page: true
toc_headings: h2
translation_of: /alevel/a2-further-mathematics/statistics/goodness-of-fit/
---

模型给概率，样本给频数。本课检查观察频数是否与所提出的分布相容。所有示范和任务均自拟、使用构造数据，不设官方分值。

需要时先回补[Poisson概率](/zh/alevel/a2-mathematics/statistics/poisson-distribution/#probability)、[密度面积](/zh/alevel/a2-mathematics/statistics/continuous-random-variables/#density)和[指数分布均值](/zh/alevel/a2-mathematics/statistics/exponential-distribution/#moments)。

## 从概率到期望频数 {#expected}

拟合优度检验一个随机变量与某个概率模型。每个独立抽取的观测恰好进入一类；各类互斥、完备，模型中的尾部即使观察频数为零也要保留。

$$
E_i=np_i,\qquad \sum_i p_i=1,\qquad \sum_i E_i=\sum_i O_i=n.
$$

$$
p_i=\sum_{x\in C_i}P(X=x)\quad\text{(discrete)},\qquad
p_i=\int_{a_i}^{b_i}f(x)\,dx\quad\text{(continuous)}.
$$

连续变量要在每个区间积分，单点密度高度不是概率。无穷端点用极限；正态模型要覆盖两端尾部，指数模型要覆盖上尾。

## 先合组，再数自由度 {#pooling}

本资格要求每项最终期望频数严格大于5，等于5也不满足。检查的是期望频数，不是观察频数。必要时把相邻且有实际意义的类别合并，同时相加观察和期望频数，再检查。有序取值要保持连续分组，不能为了得到想要的检验结论而挑合并方案。

$$
Q=\sum_{i=1}^{K}\frac{(O_i-E_i)^2}{E_i},\qquad
\nu=K-1-p,\qquad P(\chi^2_\nu\le c_\nu(u))=u.
$$

K是合组后的类别数，p是从本样本估计的独立总体参数个数。总频数固定先减一个自由度；题目给出样本均值仍属于估计信息。真正事前指定的参数不再扣；正态均值与方差都估计则再扣两个。最终必须保留正的自由度。

假设应写明哪个变量服从什么模型，备择为不服从。参数待估计时先写分布族，再估参数，不把拟合值冒充事前已知。总偏离越大越反对模型，因此比较上尾。不拒绝不证明模型或其机制为真。

## 两个完整示范 {#examples}

<section class="worked-example" markdown="1">

### 完整示范 {#example-a}

**Question:** Counts $X$ in 100 independent equal observation periods have frequencies $(40,32,18,8,2,0)$ for $(0,1,2,3,4,\ge5)$. Estimate a Poisson parameter and assess the Poisson family at 5%, using $c_2(0.95)=5.991465$.

$$
H_0:X\sim\operatorname{Poisson}(\lambda)\text{ for some }\lambda>0,
\qquad H_1:X\text{ does not follow a Poisson distribution}.
$$

$$
\hat\lambda=\bar x=\frac{32+2(18)+3(8)+4(2)}{100}=1,\qquad
P(X=x)=\frac{e^{-1}}{x!}.
$$

| Class | O | E before pooling |
| --- | --- | --- |
| 0 | 40 | 36.787944 |
| 1 | 32 | 36.787944 |
| 2 | 18 | 18.393972 |
| 3 | 8 | 6.131324 |
| 4 | 2 | 1.532831 |
| $\ge5$ | 0 | 0.365985 |

$$
E_{\ge5}=100\left[1-e^{-1}\left(1+1+\frac12+\frac16+\frac1{24}\right)\right],
\quad E_{\ge4}=1.898816<5,
\quad E_{\ge3}=100\left[1-e^{-1}\left(1+1+\frac12\right)\right]=8.030140.
$$

| Final class | O | E | Contribution |
| --- | --- | --- | --- |
| 0 | 40 | 36.787944 | 0.280453 |
| 1 | 32 | 36.787944 | 0.623150 |
| 2 | 18 | 18.393972 | 0.008438 |
| $\ge3$ | 10 | 8.030140 | 0.483223 |

$$
\sum O=\sum E=100,\quad Q=1.395265,\quad\nu=4-1-1=2,\quad1.395265<5.991465.
$$

4与上尾合起来仍不足，所以再并入相邻3。最终四类期望频数均大于5。不拒绝，没有足够证据否定这些计数的Poisson模型；估计一个参数，自由度再减一。观察尾部为零不代表模型概率为零。此例尾组为零可算精确均值；若开口尾组非零，需原始观测或另给原始总和。

</section>

<section class="worked-example" markdown="1">

### 完整示范 {#example-b}

**Question:** The pre-specified waiting-time density is $f(t)=e^{-t}$ for $t\ge0$, zero otherwise. For 80 independent observations, the counts in $[0,\ln2)$, $[\ln2,\ln4)$, $[\ln4,\ln8)$ and $[\ln8,\infty)$ are $(36,18,14,12)$. Derive class probabilities and test at 5%, using $c_3(0.95)=7.814728$.

$$
H_0:T\text{ has the specified density},\qquad H_1:T\text{ does not have it}.
$$

$$
\begin{aligned}
p_1&=\int_0^{\ln2}e^{-t}\,dt=[-e^{-t}]_0^{\ln2}=1-\tfrac12=\tfrac12,\\
p_2&=[-e^{-t}]_{\ln2}^{\ln4}=\tfrac12-\tfrac14=\tfrac14,\\
p_3&=[-e^{-t}]_{\ln4}^{\ln8}=\tfrac14-\tfrac18=\tfrac18,\\
p_4&=\lim_{b\to\infty}[-e^{-t}]_{\ln8}^b=\tfrac18.
\end{aligned}
$$

$$
E=(40,20,10,10),\quad
Q=\frac{16}{40}+\frac4{20}+\frac{16}{10}+\frac4{10}=2.6,
\quad\nu=4-1-0=3,\quad2.6<7.814728.
$$

概率相加为一，密度从零到无穷的积分也为一。所有期望频数大于5。不拒绝，没有足够证据否定指定等待模型；没有估计参数。无限区间不意味着概率零，是原函数在无穷端的指数项趋零。

</section>

## 选择、计算与诊断 {#practice}

<section class="lesson-check" markdown="1">

### 自己尝试 {#task-a}

**Question:** Independent observations of the number of successes in two trials have frequencies $(32,36,12)$ for $X=(0,1,2)$. At 5%, assess a Binomial$(2,p)$ family with estimated $p$, then the pre-specified Binomial$(2,0.5)$ model. Explain the different questions. Use $c_1(0.95)=3.841459$ and $c_2(0.95)=5.991465$.

<details markdown="1">

<summary>提示</summary>

先用二项均值估参数，再为指定模型重建期望表。

</details>

<details markdown="1">

<summary>解答</summary>

$$
H_0:X\sim\operatorname{Bin}(2,p)\text{ for some }p,\quad H_1:X\text{ is not in this family}.
$$

$$
\bar x=\frac{36+2(12)}{80}=0.75,\quad\hat p=0.375,\quad
E=(31.25,37.5,11.25).
$$

$$
Q=\frac{0.75^2}{31.25}+\frac{(-1.5)^2}{37.5}+\frac{0.75^2}{11.25}
=0.018+0.060+0.050=0.128,
\quad\nu=3-1-1=1,\quad0.128<3.841459.
$$

$$
H_0:X\sim\operatorname{Bin}(2,0.5),\quad H_1:X\text{ does not follow this specified model};
\quad E=(20,40,20),\quad Q=\frac{144}{20}+\frac{16}{40}+\frac{64}{20}=10.8,
\quad\nu=2,\quad10.8>5.991465.
$$

两次期望条件均满足。拟合分布族不拒绝，指定成功概率一半的模型则拒绝。数据可能与某个二项模型相容，却反对这个具体模型；期望表与自由度同时改变，不能只换临界值。

</details>

</section>

<section class="lesson-check" markdown="1">

### 自己尝试 {#task-b}

**Question:** One hundred independent positive waiting times have raw total 100 minutes and counts $(45,27,15,13)$ in the four intervals of Example B. Test an exponential family at 5%, estimating its rate from $E(T)=1/\lambda$ and deriving interval probabilities by integration. Use $c_2(0.95)=5.991465$.

<details markdown="1">

<summary>提示</summary>

原始总和可算均值，区间中点不能给精确均值。

</details>

<details markdown="1">

<summary>解答</summary>

$$
H_0:T\sim\operatorname{Exp}(\lambda)\text{ for some }\lambda>0,\quad H_1:T\text{ is not exponential};
\quad\bar t=1,\quad\hat\lambda=1\ \mathrm{min}^{-1}.
$$

$$
P(a\le T<b)=\int_a^b\hat\lambda e^{-\hat\lambda t}\,dt
=[-e^{-\hat\lambda t}]_a^b=e^{-\hat\lambda a}-e^{-\hat\lambda b}.
$$

$$
(p_1,p_2,p_3,p_4)=(1/2,1/4,1/8,1/8),\quad
E=(50,25,12.5,12.5),\quad
Q=\frac{25}{50}+\frac4{25}+\frac{6.25}{12.5}+\frac{0.25}{12.5}=1.18,
\quad\nu=4-1-1=2,\quad1.18<5.991465.
$$

最后区间让上端趋无穷，指数项趋零；代入四组端点得到所列概率。全部期望频数大于5，不拒绝，无足够证据否定指数分布族。虽然速率估计碰巧等于示范B的指定值，此题仍须扣一个拟合参数。

</details>

</section>

<section class="lesson-check" markdown="1">

### 自己尝试 {#task-c}

**Question:** A fixed geometric model has $P(X=x)=2^{-(x+1)}$ for $x=0,1,\ldots$. Eighty independent observations give counts $(40,18,12,4,6)$ for $(0,1,2,3,\ge4)$. One student accepts expected counts of exactly 5; another pools 0 with $\ge4$ but leaves 3 separate. Diagnose both and complete a valid 5% test, using $c_3(0.95)=7.814728$.

<details markdown="1">

<summary>提示</summary>

检查期望值，并保持分组连续。

</details>

<details markdown="1">

<summary>解答</summary>

$$
H_0:X\text{ follows the specified geometric model},\quad H_1:X\text{ does not};
\quad P(X\ge4)=1-(1/2+1/4+1/8+1/16)=1/16.
$$

$$
E_{\rm initial}=(40,20,10,5,5),\quad
O_{\rm final}=(40,18,12,10),\quad E_{\rm final}=(40,20,10,10),\quad C_{\rm final}=(0,1,2,\ge3).
$$

$$
Q=0+\frac4{20}+\frac4{10}+0=0.6,\quad\nu=4-1=3,\quad0.6<7.814728.
$$

等于5不满足。把零与远端尾部合并破坏顺序，且仍留下三这一类的期望值5。应合并相邻的两个尾类。不拒绝，未发现足够反对指定几何模型的证据；没有估计参数。

</details>

</section>

## 回补后收起旧答案 {#retry}

参数或自由度错，回到[合组与自由度](#pooling)，逐个写参数来自哪里。概率错，回到[期望频数](#expected)及[连续面积](/zh/alevel/a2-mathematics/statistics/continuous-random-variables/#area)，实际代两端。合组错就检查期望频数并重新数最终类别。

<section class="lesson-check" markdown="1">

### 自己尝试 {#retry-a}

**Question:** Sixty-four independent observations on $X=(0,1,2)$ have frequencies $(26,30,8)$. Estimate $p$ for a Binomial$(2,p)$ family, calculate expected counts and test at 5%, using $c_1(0.95)=3.841459$.

<details markdown="1">

<summary>提示</summary>

用这组样本重新估参数。

</details>

<details markdown="1">

<summary>解答</summary>

$$
H_0:X\sim\operatorname{Bin}(2,p)\text{ for some }p,\quad H_1:X\text{ is not in this family};
\quad\bar x=\frac{30+16}{64}=\frac{23}{32},\quad\hat p=\frac{23}{64}.
$$

$$
E=\left(\frac{1681}{64},\frac{1886}{64},\frac{529}{64}\right)
=(26.265625,29.46875,8.265625),\quad\nu=1.
$$

$$
Q=\frac{(-17/64)^2}{1681/64}+\frac{(34/64)^2}{1886/64}+\frac{(-17/64)^2}{529/64}
=0.0207996<3.841459.
$$

所有期望频数大于5，不拒绝；没有足够证据否定该二项分布族。若用成功概率一半，则检验的是另一个指定模型。

</details>

</section>

<section class="lesson-check" markdown="1">

### 自己尝试 {#retry-b}

**Question:** A specified density is $f(x)=2x$ for $0\le x\le1$, zero elsewhere. Eighty independent observations have counts $(12,18,22,28)$ in $[0,1/2)$, $[1/2,1/\sqrt2)$, $[1/\sqrt2,\sqrt3/2)$ and $[\sqrt3/2,1]$. Derive probabilities and test at 5%, using $c_3(0.95)=7.814728$.

<details markdown="1">

<summary>提示</summary>

积分后代端点的平方。

</details>

<details markdown="1">

<summary>解答</summary>

$$
H_0:X\text{ has the specified density},\quad H_1:X\text{ does not};
\quad\int_0^1 2x\,dx=1,\qquad
P(a\le X<b)=[x^2]_a^b=b^2-a^2.
$$

$$
(0,1/2,1/\sqrt2,\sqrt3/2,1)^2=(0,1/4,1/2,3/4,1),\quad
p_i=1/4,\quad E_i=20.
$$

$$
Q=\frac{64+4+4+64}{20}=6.8<7.814728,\quad\nu=4-1=3.
$$

所有期望频数大于5，不拒绝，没有足够证据否定该密度。概率相等是面积相等，不是区间等宽；端点平方列表表示逐项平方。

</details>

</section>

<section class="lesson-check" markdown="1">

### 自己尝试 {#retry-c}

**Question:** A fixed model gives probabilities $(0.2,0.3,0.25,0.25)$ to ordered categories $(0,1,2,3)$. Twenty independent observations have counts $(3,7,4,6)$. Form valid contiguous pooled categories and test at 5%, using $c_1(0.95)=3.841459$.

<details markdown="1">

<summary>提示</summary>

期望值等于5的格也需处理。

</details>

<details markdown="1">

<summary>解答</summary>

$$
H_0:X\text{ follows the specified model},\quad H_1:X\text{ does not};
\quad E_{\rm initial}=(4,6,5,5).
$$

$$
C_{\rm final}=(\{0,1\},\{2,3\}),\quad
O=(10,10),\quad E=(10,10),\quad Q=0<3.841459,\quad\nu=2-1=1.
$$

不拒绝，两合组期望频数均大于5。合组损失组内差异的信息，因此两组偏离为零不证明原来四项概率正确。

</details>

</section>

## 稍后不看方法再判断 {#later-review}

<section class="lesson-check" markdown="1">

### 自己尝试 {#later-a}

**Question:** A pre-specified model assigns probabilities $(1/4,1/2,1/4)$ to $(0,1,2)$. Sixty-four independent observations have frequencies $(26,30,8)$. Assess the model at 5%, using $c_2(0.95)=5.991465$. Explain why an estimate made in a different task does not reduce the degrees of freedom here.

<details markdown="1">

<summary>提示</summary>

看本次检验是否估计了参数。

</details>

<details markdown="1">

<summary>解答</summary>

$$
H_0:X\text{ has the stated probabilities},\quad H_1:X\text{ does not};
\quad E=(16,32,16),\quad\nu=3-1=2.
$$

$$
Q=\frac{100}{16}+\frac4{32}+\frac{64}{16}=10.375>5.991465.
$$

拒绝，有足够证据反对这些指定概率。本题没有估参数；重试中与某拟合分布族相容，不代表与此指定概率相容。

</details>

</section>

<section class="lesson-check" markdown="1">

### 自己尝试 {#later-b}

**Question:** A team tests the specified density $e^{-t}$ for $t\ge0$ using classes $[0,1)$, $[1,2)$, $[2,3)$, deleting 7 of 50 observations above 3 and renormalising by $1-e^{-3}$. Explain what changed. Restore valid classes and expected counts for the original question, and state whether the supplied information permits a numerical test.

<details markdown="1">

<summary>提示</summary>

先补上遗漏尾部，再检查期望频数。

</details>

<details markdown="1">

<summary>解答</summary>

$$
p=(1-e^{-1},e^{-1}-e^{-2},e^{-2}-e^{-3},e^{-3}),\quad
E=(31.606028,11.627208,4.277411,2.489353).
$$

$$
C_{\rm final}=([0,1),[1,2),[2,\infty)),\quad
E_{\rm final}=(31.606028,11.627208,6.766764),\quad\nu=3-1=2.
$$

删除并重归一化改为研究小于3的条件分布，已不是原问题。原问题应保留全部50次，把最后两区间合并，所有期望值才大于5。最终尾部观察值为7加上未给出的2到3区间人数；其他观察频数也没给，因此不能编造数值统计量或拒绝结论。

</details>

</section>

## 连接不同问题 {#next-step}

拟合优度把一个变量与模型概率比较。接下来对比两个分类变量的关联：其期望表来自行列总数。

[关联检验](/zh/alevel/a2-further-mathematics/statistics/association-tests/) · [课程路线](/zh/alevel/a2-further-mathematics/statistics/)
