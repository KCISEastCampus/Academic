---
title: "检验功效：规则能发现变化吗"
layout: subjects
mathjax: true
grade: a2
subject: a2-further-mathematics
lang: zh-CN
permalink: /zh/alevel/a2-further-mathematics/statistics/test-power/
reading_layout: true
study_page: true
toc_headings: h2
translation_of: /alevel/a2-further-mathematics/statistics/test-power/
---

## 同一条规则，两种真实情况 {#rule}

检验是先定规则，再看样本。原假设其实成立却被拒绝，叫第一类错误；在一个指定备择值下，本来应该发现变化却没有拒绝，叫第二类错误。这一课始终保持规则不变，只更换算概率时的真实分布。例题与练习均为自拟题。

先确认自己会[拒绝域](/zh/alevel/a2-mathematics/statistics/hypothesis-testing/)及[正态标准化](/zh/alevel/a2-mathematics/statistics/normal-distribution/)。不拒绝只是证据不足，不代表原假设已被证明。

$$
\beta=P_{\text{specified alternative}}(\text{do not reject }H_0),
\qquad \text{power}=1-\beta.
$$

功效是重复抽样中发现这一个具体变化的机会。它不是 $1-\alpha$：显著性使用原假设分布，功效使用指定备择分布。离散检验的实际第一类错误率可能小于名义显著性水平。

## 临界线只定一次 {#example}

<section class="worked-example" markdown="1">

### 完整示范：灌装量

**Question:** Independent filling volumes are $N(\mu,16)$ ml, where the second parameter is variance. With $n=16$, test $H_0:\mu=50$ against $H_1:\mu>50$ at 5%. Find the rule, then its Type II error probability and power at $\mu=52$. Use $z_{0.95}=1.644854$ and $\Phi(-0.355146)=0.361240$.

总体正态，所以样本均值精确正态。标准误为 $4/\sqrt{16}=1$ ml。备择是增大，故样本均值越大越支持备择：

$$
\bar X\sim N(50,1)\text{ under }H_0,\qquad
\frac{\bar X-50}{1}>1.644854
\ \Longleftrightarrow\ \bar X>51.644854.
$$

接下来保持这条线不动。若真实均值是 52，样本均值分布变为 $N(52,1)$。漏掉变化就是抽到仍落在线左侧的样本均值：

$$
\beta=P_{\mu=52}(\bar X\le51.644854)
=\Phi\left(\frac{51.644854-52}{1}\right)
=0.361240,\qquad \text{power}=0.638760.
$$

检查含义：原假设下误拒绝机会为 5%；真实均值 52 时发现变化的机会约 63.9%。两者都不是“看到一个结果后，假设有多大概率为真”。

</section>

## 需要两条边界时，两条都保留 {#practice}

<section class="lesson-check" markdown="1">

### 双侧规则 {#task-a}

**Question:** A statistic $D$ has exact distribution $N(\delta,0.25)$. Test $\delta=0$ against $\delta\ne0$ at 5%, with equal tails. Find the non-rejection interval, then $\beta$ and power at $\delta=0.6$. Use $z_{0.975}=1.959964$, $\Phi(0.759964)=0.776362$ and $\Phi(-3.159964)=0.000789$.

<details markdown="1"><summary>提示</summary>

先在原假设下定区间，再在备择下标准化两个端点。

</details>

<details markdown="1"><summary>解答</summary>

标准差是 $0.5$。不拒绝区间为 $-c\le D\le c$，其中 $c=0.5(1.959964)=0.979982$。
$$
\beta=\Phi\left(\frac{c-0.6}{0.5}\right)
-\Phi\left(\frac{-c-0.6}{0.5}\right)
=0.776362-0.000789=0.775573,
\qquad \text{power}=0.224427.
$$
即使指定真实差值为正，两条拒绝尾也都属于功效，不能丢掉其中一条。

</details>

</section>

<section class="lesson-check" markdown="1">

### 整数边界 {#task-b}

**Question:** Ten independent items have common defect probability $p$. Test $p=0.2$ against $p>0.2$ using $X\ge k$, where $X$ counts defects and $k$ is the smallest integer giving null rejection probability at most 0.05. Find the rule, actual size, and exact power at $p=0.5$. Explain why $k$ must not be recalculated at $p=0.5$.

<details markdown="1"><summary>提示</summary>

比较相邻整数的二项尾概率，再保留原事件。

</details>

<details markdown="1"><summary>解答</summary>

原假设下 $X\sim\operatorname{Bin}(10,0.2)$。
$$
P_{0.2}(X\ge4)=0.1208738816,\qquad
P_{0.2}(X\ge5)=0.0327934976.
$$
右尾随 $k$ 增大而减小，所以拒绝域为 $X\ge5$；实际第一类错误率是 $0.0327934976$，不是 $0.05$。真实 $p=0.5$ 时，
$$
\beta=P_{0.5}(X\le4)=\frac{1+10+45+120+210}{1024}
=\frac{193}{512},\qquad
\text{power}=\frac{319}{512}=0.623046875.
$$
重新定 $k$ 就是在改检验。这些都是精确的二项概率。

</details>

</section>

## 你到底用了哪个分布 {#retry}

若写了 $1-\alpha$，回看[两种真实情况](#rule)；若把临界线平移了，回到[示范](#example)，先写事件再写概率；若双尾只算了一边，回看[A 题](#task-a)。

<section class="lesson-check" markdown="1">

### 换一个方向 {#retry-a}

**Question:** Independent measurements are $N(\mu,36)$ with $n=36$. Test $\mu=100$ against $\mu<100$ at 1%. Find the rule and its power at $\mu=97$. Use $z_{0.01}=-2.326348$ and $\Phi(0.673652)=0.749734$. Which side of the cutoff represents $\beta$?

<details markdown="1"><summary>提示</summary>

左尾拒绝，补集才是漏掉变化。

</details>

<details markdown="1"><summary>解答</summary>

$SE=1$。拒绝域为 $\bar X<97.673652$。真实均值为 97 时，未拒绝是临界线右侧面积：
$$
\beta=1-\Phi(0.673652)=0.250266,\qquad\text{power}=0.749734.
$$
这块面积是在中心为 97 的分布下计算，不是在原假设分布下。

</details>

</section>

<section class="lesson-check" markdown="1">

### 重新保留两条边界 {#retry-b}

**Question:** A statistic $D$ has exact distribution $N(\delta,1)$. A two-sided 5% test of $\delta=0$ uses equal tails and $z_{0.975}\approx1.96$. Find its non-rejection interval, then $\beta$ and power at $\delta=1.5$. Use $\Phi(0.46)\approx0.677242$ and $\Phi(-3.46)\approx0.000270$. State both rejection events contributing to power.

<details markdown="1"><summary>提示</summary>

改用真实分布时，上下两条原边界都不动。

</details>

<details markdown="1"><summary>解答</summary>

不拒绝区间为 $-1.96\le D\le1.96$。指定备择下：
$$
\beta=P_{1.5}(-1.96\le D\le1.96)
=\Phi(0.46)-\Phi(-3.46)\approx0.676972,\qquad
\text{power}\approx0.323028.
$$
功效包括 $D<-1.96$ 及 $D>1.96$，两者都在 $N(1.5,1)$ 下求概率。只保留右尾，会漏掉一块虽小但不为零的拒绝概率。

</details>

</section>

若漏掉双尾的一边，回看[两侧拒绝事件](#task-a)，收起答案后完成[新双尾重试](#retry-b)。

## 学完均值比较后回来 {#later-review}

<section class="lesson-check" markdown="1">

### 要发现的差值 {#later-a}

**Question:** Two independent normal populations have known variances 9 and 16, with sample sizes 9 and 16. A test rejects a null mean difference of zero for a positive difference at 5%. Find the probability of missing a true difference of 3. Use $z_{0.95}=1.644854$ and $\Phi(-0.476467)=0.316871$.

<details markdown="1"><summary>提示</summary>

先求均值差的标准误。

</details>

<details markdown="1"><summary>解答</summary>

$SE=\sqrt{9/9+16/16}=\sqrt2$。原假设给出临界线 $c=1.644854\sqrt2=2.326175$（近似）。真实差为 3 时，
$$
\beta=\Phi\left(\frac{c-3}{\sqrt2}\right)\approx0.316871,\qquad
\text{power}\approx0.683129.
$$
原假设负责定规则，备择负责计算这次的概率。

</details>

</section>

## 下一步 {#next-step}

[比较独立均值](/zh/alevel/a2-further-mathematics/statistics/comparing-means/) · [课程路线](/zh/alevel/a2-further-mathematics/statistics/)
