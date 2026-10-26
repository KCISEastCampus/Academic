---
title: "估计量：先比较规则，再作选择"
layout: subjects
mathjax: true
grade: a2
subject: a2-further-mathematics
lang: zh-CN
permalink: /zh/alevel/a2-further-mathematics/statistics/estimators/
reading_layout: true
study_page: true
toc_headings: h2
translation_of: /alevel/a2-further-mathematics/statistics/estimators/
---

一个由随机样本算出的规则，怎样估计固定的总体均值？两个规则都能用时，又怎样选择？本课会计算偏差、比较精确性，并说明样本增大后误差怎样变化。

需要期望、方差、独立性和基本极限。可先回补[线性组合中的系数平方](/zh/alevel/as-further-mathematics/linear-combinations/#model)或[按概率加权求矩](/zh/alevel/as-further-mathematics/discrete-uniform/#demonstration)。本页示范与任务均为自拟，数据为构造数据，不分配官方分值。

## 抽样前的规则，抽样后的数值 {#meaning}

总体均值 μ 是总体的固定特征；“不知道”不表示它随本次抽样改变。抽样前，X₁,…,Xₙ 的数值尚未出现。统计量（statistic）是只用样本和已知量就能计算的规则，不需要把未知参数当作输入。用这个规则估计 μ 时，它叫估计量（estimator）；代入某次数据所得的数，才是估计值（estimate）。

$$
\bar X=\frac1n\sum_{i=1}^nX_i,
\qquad
\bar x=\frac1n\sum_{i=1}^nx_i.
$$

观察到 2,4,6,8 后，估计量仍是规则 X̄，这次的估计值是 5。如果 μ 未知，X̄−μ 虽然是研究中有用的随机变量，却不是统计量，因为仅凭样本不能算出它。抽样分布（sampling distribution）描述的是：从同一总体反复抽取同样大小的样本时，统计量怎样变化。

看一个能完整列出的例子：独立抽取两个成功概率为 1/4 的 Bernoulli 观察值，每个值是 0 或 1。样本均值有三种可能；中间的均值对应两种不同的有序样本。

| 样本 | 样本均值 | 概率 |
| --- | --- | --- |
| (0,0) | 0 | 9/16 |
| (0,1) 或 (1,0) | 1/2 | 6/16 |
| (1,1) | 1 | 1/16 |

$$
E(\bar X)=0+\frac12\frac6{16}+\frac1{16}=\frac14,
\qquad
\operatorname{Var}(\bar X)=\left(\frac14\frac6{16}+\frac1{16}\right)-\left(\frac14\right)^2=\frac3{32}.
$$

这张表描述样本均值，不是单个观察值。一般地，若样本独立同分布（iid），均值为 μ、有限方差为 σ²，则 E(X̄)=μ，Var(X̄)=σ²/n；第一条用期望的线性，第二条还用独立性。这两个矩的结论不要求总体正态。

## 先看目标，再看波动 {#bias-efficiency}

偏差（bias）比较的是规则在反复抽样中的平均结果与目标参数。无偏（unbiased）不表示每一次估计都正确，也不保证眼前这次估计很接近真值。

$$
\operatorname{Bias}_\theta(T)=E_\theta(T)-\theta.
\qquad
T\text{ is unbiased for }\theta\text{ if }E_\theta(T)=\theta\text{ for every admissible }\theta.
$$

比较同一参数的无偏估计量时，方差较小表示反复抽样的结果更集中。相对效率（relative efficiency）先写方向再计算：本课“A 相对于 B”的分子是 B 的方差；比值大于 1 表示 A 更有效率。比值要求两个方差正且有限。

$$
\operatorname{Eff}(A\text{ relative to }B)
=\frac{1/\operatorname{Var}(A)}{1/\operatorname{Var}(B)}
=\frac{\operatorname{Var}(B)}{\operatorname{Var}(A)}.
$$

先说明候选范围，再说“这些无偏候选中方差最小”。只比较两个规则，不能宣布其中一个优于所有可能的估计量。若一个规则有偏、另一个无偏，只比较方差也不足以作全面判断。

## 完整示范：先修正，再比较 {#example}

<section class="worked-example" markdown="1">

### 示范 {#example-a}

**Question:** Let X₁,X₂,X₃,X₄ be independent observations from a population with unknown mean μ and finite variance σ²>0. Define A=(X₁+X₂+X₃+X₄)/4 and C=(X₁+X₂+2X₃+2X₄)/4. Find a constant k such that B=kC is unbiased for μ. Compare A and B using their variances and the efficiency of A relative to B. For observed values 2,4,6,8, find both estimates.

两个规则都要估计 μ，因此先检查期望。C 的系数和是 6/4，而不是 1；先修正整个表达式，再比较方差。

$$
\begin{aligned}
E(A)&=\frac{4\mu}{4}=\mu,\\
E(C)&=\frac{6\mu}{4}=\frac32\mu,\\
E(kC)&=\frac32k\mu=\mu\quad\text{for every }\mu
\quad\Longrightarrow\quad k=\frac23,\\
B&=\frac{X_1+X_2+2X_3+2X_4}{6}.
\end{aligned}
$$

独立性使协方差项为零。计算方差时，每个系数都要平方，分母也要平方。

$$
\begin{aligned}
\operatorname{Var}(A)&=\frac{1+1+1+1}{16}\sigma^2=\frac14\sigma^2,\\
\operatorname{Var}(B)&=\frac{1+1+4+4}{36}\sigma^2=\frac5{18}\sigma^2,\\
\operatorname{Var}(B)-\operatorname{Var}(A)&=\frac1{36}\sigma^2>0,\\
\operatorname{Eff}(A\text{ relative to }B)&=\frac{5/18}{1/4}=\frac{10}{9},\\
a&=5,\qquad b=\frac{2+4+12+16}{6}=\frac{17}{3}.
\end{aligned}
$$

在这两个无偏候选中，A 的方差较小。但 μ 未知，不能根据 5 和 17/3 判断这一次谁更接近真值；相对效率的方向与直接比较方差一致，是一个检查。

</section>

## 样本增大后，误差怎样变化？ {#consistency}

一致性（consistency）讨论随样本量增长的一列规则 Tₙ，不是评价某一个已经算出的数。对每个固定的合法参数 θ、每个 ε>0，误差超过 ε 的概率都必须趋于零。

$$
T_n\xrightarrow{P}\theta
\quad\Longleftrightarrow\quad
P_\theta(\lvert T_n-\theta\rvert>\varepsilon)\longrightarrow0.
$$

常用的充分论证是“偏差趋零，方差也趋零”。下面的不等式说明原因：平均平方误差能控制出现大误差的概率。它用于说明逻辑，不额外要求背诵证明。

$$
P_\theta(\lvert T_n-\theta\rvert>\varepsilon)
\leq\frac{E_\theta[(T_n-\theta)^2]}{\varepsilon^2}
=\frac{\operatorname{Var}_\theta(T_n)+[E_\theta(T_n)-\theta]^2}{\varepsilon^2}.
$$

X̄ 的偏差为零，σ²/n→0，所以它对 μ 一致。X̄+1 虽然有同样趋零的方差，却越来越集中在 μ+1 附近，因此对 μ 不一致。反过来，有限样本时有偏的规则，如果偏差最终消失，仍可能一致。

## 合并估计量 {#combinations}

设 U、V 是同一均值的两个独立无偏估计量，方差为 vᵤ、vᵥ。系数和为 1 的加权组合仍无偏。期望公式不需要独立性，下面简化的方差公式需要。

$$
\begin{aligned}
W&=aU+(1-a)V,\qquad E(W)=\mu,\\
\operatorname{Var}(W)&=a^2v_u+(1-a)^2v_v\\
&=(v_u+v_v)\left(a-\frac{v_v}{v_u+v_v}\right)^2
+\frac{v_uv_v}{v_u+v_v}.
\end{aligned}
$$

方差为正时，这一族在 a=vᵥ/(vᵤ+vᵥ) 时方差最小；越精确的规则得到越大的权重。如果 U、V 来自同一总体的两个独立样本，样本量分别是 nᵤ、nᵥ，则权重正好与样本量成比例。这是在合并均值，不能据此直接用同样的权重合并样本方差。

如果两个统计量使用了相同观察值，就要检查重叠；一般的方差还含 2a(1−a)Cov(U,V)。把组合写回原来的独立观察值，往往更容易算对。

## 先独立作答，再打开帮助 {#practice}

先保持提示与解答关闭；如果使用帮助，请记下。

<section class="lesson-check" markdown="1">

### 任务 A {#task-a}

**Question:** Independent observations U₁,…,Uₙ have mean θ/3 and variance θ²/18, where θ>0. Let R=ΣUᵢ. Show that R is biased for θ unless n=3. Find cₙ such that cₙR is unbiased for θ, and determine whether this sequence is consistent. For the observations 1,2,4, state the estimator and its estimate. Explain why an estimate is not a sampling distribution.

<details markdown="1"><summary>提示</summary>

先求 E(R)；修正后算方差时，cₙ 要平方。

</details>

<details markdown="1"><summary>解答</summary>

$$
E(R)=\frac{n\theta}{3},\quad
\operatorname{Bias}_\theta(R)=\left(\frac n3-1\right)\theta,
\quad c_n=\frac3n,\quad
\operatorname{Var}(c_nR)=\frac9{n^2}\frac{n\theta^2}{18}=\frac{\theta^2}{2n}\to0.
$$

因为 θ>0，原规则恰在 n=3 时无偏。修正规则对每个 n 都无偏，固定 θ 后方差趋零，所以一致。n=3 时估计量是 (3/3)ΣUᵢ，估计值是 7。一个数只是一次实现；抽样分布要描述反复抽样时所有可能估计值及其概率。目标是 θ，不能误把单次观察的均值 θ/3 当目标。

</details>

</section>

<section class="lesson-check" markdown="1">

### 任务 B {#task-b}

**Question:** U and V are means of independent samples of sizes 4 and 12 from the same population, whose mean is μ and variance is σ²>0. Consider Wₐ=aU+(1−a)V for real a. Find its mean and variance and determine the value of a giving the smallest variance within this family. Compare that choice with (U+V)/2 by relative efficiency, stating the direction. If u=10 and v=14, find the chosen estimate.

<details markdown="1"><summary>提示</summary>

先代入样本均值的方差，再对 a 配方。

</details>

<details markdown="1"><summary>解答</summary>

$$
\begin{aligned}
E(W_a)&=\mu,\\
\operatorname{Var}(W_a)&=\sigma^2\left(\frac{a^2}{4}+\frac{(1-a)^2}{12}\right)
=\sigma^2\left[\frac13\left(a-\frac14\right)^2+\frac1{16}\right].
\end{aligned}
$$

因此 a=1/4，最小方差为 σ²/16。等权规则的方差是 σ²/12，所以“所选规则相对于等权规则”的效率为 4/3。估计值是 13。这里证明的是给定族内的最小值；等权平均没有充分利用较大样本的精确性。

</details>

</section>

<section class="lesson-check" markdown="1">

### 任务 C {#task-c}

**Question:** For iid observations with mean μ and finite variance σ²>0, consider Pₙ=X̄+1/n and Qₙ=X̄+1. Determine the bias of each and whether each is consistent for μ. A student says, “Any unbiased estimator is consistent.” Disprove this using Hₙ=X₁ and the concrete case Xᵢ∼Bernoulli(1/2). Give a probability that does not tend to zero.

<details markdown="1"><summary>提示</summary>

Pₙ、Qₙ 要同时检查目标位置与离散程度；Hₙ 可取 ε=1/4。

</details>

<details markdown="1"><summary>解答</summary>

$$
\operatorname{Bias}(P_n)=\frac1n,\quad
\operatorname{Bias}(Q_n)=1,\quad
\operatorname{Var}(P_n)=\operatorname{Var}(Q_n)=\frac{\sigma^2}{n}.
$$

Pₙ 的偏差与方差都趋零，因此一致。Qₙ 依概率趋近 μ+1，对 μ 不一致：当 |X̄−μ|<1/2 时，|Qₙ−μ|>1/2，而前一事件的概率趋于 1。Hₙ 虽无偏，却完全不使用后来增加的数据。在给定 Bernoulli 情形中，P(|Hₙ−1/2|>1/4) 对所有 n 都等于 1，已经构成反例。无偏只讨论期望，不保证随着 n 增大而改善。

</details>

</section>

<section class="lesson-check" markdown="1">

### 任务 D {#task-d}

**Question:** X₁,X₂,X₃ are independent with mean μ and variance 8. Let U=(X₁+X₂)/2, V=(X₂+X₃)/2 and W=(U+V)/2. A student calculates Var(W)=2 by treating U and V as independent. Find the correct mean and variance of W. Compare W with Z=(X₁+X₂+X₃)/3 as estimators of μ. For observed values 1,2,9, calculate w and z and explain why their difference does not identify the better estimate on this occasion.

<details markdown="1"><summary>提示</summary>

先把 W 写回 X₁、X₂、X₃；检查共享的 X₂ 获得了多少权重。

</details>

<details markdown="1"><summary>解答</summary>

$$
W=\frac{X_1+2X_2+X_3}{4},\quad E(W)=\mu,\quad
\operatorname{Var}(W)=\frac{8(1+4+1)}{16}=3;
\qquad E(Z)=\mu,\quad\operatorname{Var}(Z)=\frac83.
$$

U、V 共享 X₂，因此 Cov(U,V)=2，遗漏它就会少算方差。Z 在这两个无偏候选中方差较小。此次 w=3.5，z=4，但 μ 未知，不能根据两个数的大小判断本次谁更接近 μ。

</details>

</section>

<section class="lesson-check" markdown="1">

### 任务 E {#task-e}

**Question:** X₁,X₂,X₃ are independent Bernoulli observations with unknown success probability p, where $0<p<1$. Which of X̄, X̄−p and p are statistics, and why? To inspect one sampling distribution, consider the fixed case p=1/2. List every possible value of X̄ and its probability, then find its expectation and variance. For the observed sample (0,1,1), give the estimate of p using X̄. Explain why that estimate need not equal the parameter.

<details markdown="1"><summary>提示</summary>

先数三个观察值中有几个 1；不同的有序样本可能给出相同均值。

</details>

<details markdown="1"><summary>解答</summary>

X̄ 可以只凭样本计算，是统计量。p 未知时，X̄−p 虽是随机变量，却需要额外知道 p 才能计算，因此不是统计量。p 是固定的总体参数，也不是样本统计量。当 p=1/2 时，八个有序样本等可能，按 1 的个数合并就得到下面的抽样分布。

| X̄ 的值 | 0 | 1/3 | 2/3 | 1 |
| --- | --- | --- | --- | --- |
| 概率 | 1/8 | 3/8 | 3/8 | 1/8 |

$$
E(\bar X)=\frac13\frac38+\frac23\frac38+\frac18=\frac12,
\qquad
E(\bar X^2)=\frac19\frac38+\frac49\frac38+\frac18=\frac13,
\qquad
\operatorname{Var}(\bar X)=\frac13-\frac14=\frac1{12}.
$$

样本 (0,1,1) 的估计值是 2/3，只是一次实现，不是整个抽样分布。在 p=1/2 的情形中，这次估计不等于参数，即使估计量无偏。概率和为 1；另用 Var(X̄)=p(1−p)/3=1/12 也可检查答案。

</details>

</section>

## 修复后，用新题再试 {#retry}

<section class="lesson-check" markdown="1">

### 重试 R {#retry-a}

**Question:** For n≥2 iid observations with mean μ and finite variance σ²>0, define Tₙ=(3X₁+X₂+⋯+Xₙ)/(n+2). Determine whether Tₙ is unbiased and consistent for μ. Compare its variance with that of X̄ for each n≥2. Explain both the squared coefficient and the scope of your comparison.

<details markdown="1"><summary>提示</summary>

系数 1 有 n−1 个，系数 3 有一个；它的方差贡献是 9σ²。

</details>

<details markdown="1"><summary>解答</summary>

$$
E(T_n)=\frac{(3+n-1)\mu}{n+2}=\mu,\quad
\operatorname{Var}(T_n)=\frac{n+8}{(n+2)^2}\sigma^2\longrightarrow0,
$$

$$
\operatorname{Var}(T_n)-\operatorname{Var}(\bar X)
=\frac{4(n-1)\sigma^2}{n(n+2)^2}>0\qquad(n\geq2).
$$

Tₙ 无偏且一致，但对每个合法 n，它的方差都大于 X̄。3 乘在同一个 X₁ 上，因此算方差时是 9；一致性不等于有限样本时最有效率。比较范围仍只是这两个规则。

</details>

</section>

A 若目标弄错，回看[规则与参数](#meaning)；B/D 若系数未平方，回看[完整计算](#example)；C 若只写方差趋零，回看[一致性](#consistency)；效率比方向冲突，先检查[分子是谁](#bias-efficiency)。E 若漏算概率，重新列有序样本并合并相同均值。收起旧答案，再做[新重试](#retry-a)。

<section class="lesson-check" markdown="1">

### 新的抽样规则 {#retry-b}

**Question:** Two independent Bernoulli observations have unknown success probability $p$, with $0<p<1$. Let $S=X_1+X_2$. Decide whether $S/2$ and $S-2p$ are statistics. At the fixed case $p=1/3$, construct the sampling distribution of $S/2$ and calculate its expectation and variance. For the sample $(1,0)$, give the estimate using $S/2$ and distinguish it from the parameter.

<details markdown="1"><summary>提示</summary>

先列四个有序样本，再把均值相同的情况合并。

</details>

<details markdown="1"><summary>解答</summary>

$S/2$ 是统计量，因为仅凭数据即可算出。$S-2p$ 还需要未知的 $p$。在 $p=1/3$ 时：

| Value of $S/2$ | $0$ | $1/2$ | $1$ |
| --- | --- | --- | --- |
| Probability | $4/9$ | $4/9$ | $1/9$ |

中间两个有序样本的概率各为 $2/9$。
$$
E(S/2)=\frac12\frac49+\frac19=\frac13,\qquad
E[(S/2)^2]=\frac14\frac49+\frac19=\frac29,\qquad
\operatorname{Var}(S/2)=\frac19.
$$
本次估计值为 $1/2$，而 $p$ 是固定的总体成功概率。即使规则无偏，也不要求每一次估计值恰好等于参数。

</details>

</section>

若抽样分布列错，回到[小样本枚举](#meaning)，再完成[重试 B](#retry-b)中的新分布。

## 学过另一主题后再回来 {#later-review}

隔过另一主题后再做，保持前面的解答关闭。

<section class="lesson-check" markdown="1">

### 稍后任务 {#later-task}

**Question:** Two independent random samples from the same population have sizes 5 and 15 and sample means 8 and 12. The population mean is θ and its finite variance is σ²>0. Construct the mean of all 20 observations as an estimator, find its expectation, variance and realised estimate, and compare its relative efficiency with the equal average of the two sample means. Identify a parameter, an estimator and an estimate in your answer. State what independence allows you to do.

<details markdown="1"><summary>提示</summary>

先由样本量与样本均值还原两组总和。

</details>

<details markdown="1"><summary>解答</summary>

$$
T=\frac{5\bar X_5+15\bar Y_{15}}{20},\quad E(T)=\theta,
\quad\operatorname{Var}(T)=\frac{25(\sigma^2/5)+225(\sigma^2/15)}{400}=\frac{\sigma^2}{20},
\quad t=\frac{40+180}{20}=11.
$$

等权规则 R=(X̄₅+Ȳ₁₅)/2 也无偏，方差为 σ²/15；T 相对于 R 的效率是 4/3。θ 是参数，T 是估计量，11 是本次估计值。独立性让方差计算不含协方差，期望的线性则不依赖独立性。不能据此保证 11 在这次一定比等权估计值 10 更接近 θ。

</details>

</section>

## 下一步 {#next-step}

好的点估计量仍只给出一个数；下一课把抽样波动转化为总体均值的区间。

[置信区间](/zh/alevel/a2-further-mathematics/statistics/confidence-intervals/) · [课程路线](/zh/alevel/a2-further-mathematics/statistics/)
