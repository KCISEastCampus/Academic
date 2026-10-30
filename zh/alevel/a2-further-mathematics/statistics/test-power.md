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

检验是先定规则，再看样本。原假设其实成立却被拒绝，叫第一类错误；在一个指定备择值下，本来应该发现变化却没有拒绝，叫第二类错误。这一课始终保持规则不变，只更换算概率时的真实分布。除明确标注的教学改编外，例题与练习均为自拟题。

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

## 已知功效，反过来找均值 {#inverse-problems}

前面给真实均值，问漏检的机会；现在把问题倒过来。拒绝线仍由原假设确定，未知的是用来算概率的分布中心。若反向查正态不熟，先回看[反向正态问题](/zh/alevel/a2-mathematics/statistics/normal-distribution/#inverse)。

<section class="worked-example" markdown="1">

### 完整示范：均值在哪里 {#inverse-example}

**Question:** Independent observations have distribution $N(\mu,16)$, where the second parameter is variance. With a random sample of size 16, test $H_0:\mu=50$ against $H_1:\mu<50$ at 5%. At the true mean $m<50$, the power is one-third of the Type II error probability. Find $m$. Use $z_{0.05}=-1.644854$ and $z_{0.25}=-0.674490$.

这是自拟示范。先把“发现”和“漏掉”这两个互补事件换成概率。用p暂记功效，再在原假设下定线：

$$p=\text{power},\qquad p=\frac{1-p}{3}.$$

$$p=\frac14,\qquad\beta=\frac34.$$

$$SE=\frac4{\sqrt{16}}=1.$$

$$c=50-1.644854=48.355146.$$

$$\text{Reject }H_0\text{ when }\bar X<c.$$

线定好就不移动。真实均值换成m时，只换抽样分布；“发现变化”仍是落在线左边：

$$\bar X\sim N(m,1),\qquad
P_m(\bar X<c)=\frac14.$$

$$\begin{aligned}
\Phi(c-m)&=0.25,\\
c-m&=-0.674490.
\end{aligned}$$

$$\begin{aligned}
m&=48.355146+0.674490\\
&\approx49.030.
\end{aligned}$$

检查：这个均值在备择方向。若功效更低，分布中心要往右移，固定线左边的概率才会减少。因此真实均值更大，而不是把线改到右边。

</section>

<section class="lesson-check" markdown="1">

### 自己完成一个新问题 {#task-inverse}

**Question:** Independent observations have distribution $N(\mu,36)$, where the second parameter is variance. A random sample of size 36 tests $H_0:\mu=100$ against $H_1:\mu>100$ at 5%. At the true mean, the Type II error probability is twice the power. Find the true mean, showing the fixed rule and probability equation. If this test has a smaller power at another mean in the alternative, is that mean greater or smaller? Explain. Use $z_{0.95}=1.644854$ and $z_{2/3}=0.430727$.

<details markdown="1"><summary>提示</summary>

先写发现与漏检的关系，再分别写出原假设和真实均值下的抽样分布。

</details>

<details markdown="1"><summary>解答与检查</summary>

用p暂记功效。

$$\beta=2p,\qquad \beta+p=1.$$

$$p=\frac13,\qquad\beta=\frac23.$$

$$SE=\frac6{\sqrt{36}}=1.$$

$$c=100+1.644854=101.644854.$$

$$\begin{aligned}
P_\mu(\bar X\le c)&=\frac23,\\
\Phi(c-\mu)&=\frac23.
\end{aligned}$$

$$c-\mu=0.430727,\qquad\mu\approx101.214.$$

原假设给右尾规则；真实均值下，线左边是不拒绝，所以用β对应的分位数。另一个备择均值若更小，分布中心左移，固定线右侧的拒绝概率变小，功效随之下降。只写“β变大”没有解释发生了什么。列式出错时回看[固定线的示范](#inverse-example)，再收起答案做[新的反向重试](#retry-inverse)。

</details>

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

## 两端都是整数，怎样定界 {#discrete-boundaries}

先在原假设下找哪些整数会导致拒绝，再换真实p算功效。下面次数较小，直接用二项概率，不套教材大样本例题的正态近似。

<section class="worked-example" markdown="1">

### 完整示范：两边各试相邻整数 {#discrete-example}

**Question:** A count $X$ has distribution $\operatorname{Bin}(20,p)$. Test $H_0:p=0.2$ against $H_1:p\ne0.2$ at a nominal 5% level. Each rejection tail must have null probability at most 0.025 and must be as large as that permits. Find the rule and actual size, then the Type II error probability and power at $p=0.15$. Use exact binomial probabilities.

这是June 2025 FM04 Q5的教学改编：简化情境，并明确每尾预算，新增实际size求问；不附官方分值。

每边最多放0.025的概率，但次数只能取整数。先试一个端点，再试紧邻整数，看看还能不能扩大拒绝域：

| $H_0$ 下的事件 | 概率 |
| --- | --- |
| $X\le0$ | 0.011529 |
| $X\le1$ | 0.069175 |
| $X\ge9$ | 0.009982 |
| $X\ge8$ | 0.032143 |

$$\begin{aligned}
R&=\{X=0\}\cup\{X\ge9\},\\
A&=\{1\le X\le8\}.
\end{aligned}$$

$$\begin{aligned}
\text{actual size}&=P_{0.2}(R)\\
&\approx0.011529+0.009982\\
&=0.021511.
\end{aligned}$$

左边可以拒绝0，却不能把1也收进去；右边从9开始可以，从8开始就超出每尾预算。所以两边的不拒绝端点是1和8。实际size是原假设成立时两边拒绝概率之和，未必用完名义5%。

现在保持这两个端点，只换成真实分布：

$$\begin{aligned}
\beta&=P_{0.15}(1\le X\le8)\\
&=P_{0.15}(X\le8)-P_{0.15}(X\le0)\\
&\approx0.959912.
\end{aligned}$$

$$\begin{aligned}
\text{power}&=P_{0.15}(X=0)+P_{0.15}(X\ge9)\\
&=1-\beta\approx0.040088.
\end{aligned}$$

减去的是0及以下的概率，才能保留从1开始的事件。真实p虽低于原假设值，原检验仍是双尾，两侧拒绝都属于功效。

</section>

<section class="lesson-check" markdown="1">

### 一条新规则 {#task-discrete}

**Question:** For $X\sim\operatorname{Bin}(12,p)$, test $H_0:p=0.3$ against $H_1:p\ne0.3$ at a nominal 10% level. Each rejection tail must have null probability at most 0.05 and must be as large as that permits. Find the non-rejection region, justify both endpoints, and calculate the actual size. At $p=0.5$, find the Type II error probability and power. State the events used.

<details markdown="1"><summary>提示</summary>

左右尾分别比较相邻整数，然后保持事件不变。

</details>

<details markdown="1"><summary>解答与检查</summary>

$$\begin{aligned}
P_{0.3}(X\le0)&\approx0.013841,\\
P_{0.3}(X\le1)&\approx0.085025,\\
P_{0.3}(X\ge7)&\approx0.038601,\\
P_{0.3}(X\ge6)&\approx0.117849.
\end{aligned}$$

$$\begin{aligned}
R&=\{X=0\}\cup\{X\ge7\},\\
A&=\{1\le X\le6\}.
\end{aligned}$$

$$\begin{aligned}
\text{actual size}&\approx0.013841+0.038601\\
&=0.052442.
\end{aligned}$$

$$\begin{aligned}
\beta&=P_{0.5}(1\le X\le6)\\
&=\frac{\displaystyle\sum_{j=1}^{6}\binom{12}{j}}{2^{12}}\\
&=\frac{2509}{4096}.
\end{aligned}$$

$$\begin{aligned}
\text{power}&=P_{0.5}(X=0)+P_{0.5}(X\ge7)\\
&=\frac{1587}{4096}\approx0.387451.
\end{aligned}$$

两个相邻尾比较分别证明左右界不能再向内扩。不拒绝域保留整数1和6；算补集时不能误删端点。实际size使用原假设，β与功效使用指定真实p。若把每尾当成恰好0.05，回看[整数边界示范](#discrete-example)；再用[新报告](#retry-discrete)检查判断。

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

<section class="lesson-check" markdown="1">

### 重新检查原来的决定 {#retry-inverse}

**Question:** A statistic $D$ has exact distribution $N(\delta,2)$, where 2 is variance. A 2.5% test of $H_0:\delta=0$ against $H_1:\delta<0$ rejects when $D/\sqrt2<-1.959964$. At the true value, the Type II error probability is three times the power. Find $\delta$. An analyst instead uses $(D-\delta)/\sqrt2<-1.959964$ as the decision rule when calculating power. Does that evaluate the original test? Explain. Use $z_{0.25}=-0.674490$.

<details markdown="1"><summary>提示</summary>

先把题给规则还原成D的不等式，再用真实分布算该事件概率。

</details>

<details markdown="1"><summary>解答与检查</summary>

用p暂记功效。

$$p=\frac14,\qquad\beta=\frac34.$$

$$c=-1.959964\sqrt2.$$

$$\begin{aligned}
P_\delta(D<c)&=\frac14,\\
\frac{c-\delta}{\sqrt2}&=-0.674490.
\end{aligned}$$

$$\begin{aligned}
\delta&=c+0.674490\sqrt2\\
&\approx-1.818.
\end{aligned}$$

原规则的线是 $D<c$。错误写法却变成 $D<\delta-1.959964\sqrt2$，把线随真实均值一起移动了；拒绝概率会固定约为0.025，算的是另一个检验。可以用真实均值标准化原事件，但必须同时变换原来的c。卡住时回看[固定边界](#example)及[反向示范](#inverse-example)。

</details>

</section>

<section class="lesson-check" markdown="1">

### 检查一份报告 {#retry-discrete}

**Question:** For $X\sim\operatorname{Bin}(10,p)$, a nominal 10% test of $H_0:p=0.4$ against $H_1:p\ne0.4$ requires each rejection tail to have null probability at most 0.05 and to be as large as permitted. A report proposes rejection for $X\le1$ or $X\ge7$, claiming that both tails meet the requirement. Assess the claim, give the corrected rule with boundary evidence, and find its actual size and power at $p=0.6$.

<details markdown="1"><summary>提示</summary>

逐边检查是否满足预算，并证明相邻边界不能再扩大。

</details>

<details markdown="1"><summary>解答与检查</summary>

$$\begin{aligned}
P_{0.4}(X\le1)&=0.0463574016,\\
P_{0.4}(X\le2)&=0.1672897536,\\
P_{0.4}(X\ge7)&=0.0547618816,\\
P_{0.4}(X\ge8)&=0.0122945536.
\end{aligned}$$

$$\begin{aligned}
R&=\{X\le1\}\cup\{X\ge8\},\\
A&=\{2\le X\le7\}.
\end{aligned}$$

$$\begin{aligned}
\text{actual size}&=0.0463574016+0.0122945536\\
&=0.0586519552.
\end{aligned}$$

$$\begin{aligned}
\beta&=P_{0.6}(2\le X\le7)\\
&=0.8310325248,\\
\text{power}&=1-\beta=0.1689674752.
\end{aligned}$$

原报告右侧概率超预算，应从8开始；左侧满足且不能再扩大。随后在真实p下算修正后同一事件，不是沿用报告的错误规则。若又漏一尾，先写出两个拒绝事件，再回看[边界示范](#discrete-example)。

</details>

</section>

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

<section class="lesson-check" markdown="1">

### 稍后再看两组样本 {#later-inverse}

**Question:** Independent random samples of sizes 9 and 16 come from independent normal populations $A$ and $B$, with known population variances 9 and 16 respectively. A 5% test examines $H_0:\mu_A=\mu_B$ against $H_1:\mu_A>\mu_B$. When the true value of $\mu_B$ is 40, the probability of missing the difference is four times the probability of detecting it. Find the true value of $\mu_A$, explaining how the rule is set. If $\mu_B$ then decreases by 1 while everything else stays fixed, does the power rise or fall? Explain. Use $z_{0.95}=1.644854$ and $z_{0.8}=0.841621$.

<details markdown="1"><summary>提示</summary>

先从独立样本建立均值差的分布，再决定拒绝事件。

</details>

<details markdown="1"><summary>解答与检查</summary>

用p暂记功效。

$$D=\bar X_A-\bar X_B,\qquad\delta=\mu_A-\mu_B.$$

$$\operatorname{Var}(D)=\frac99+\frac{16}{16}=2.$$

$$D\sim N(\delta,2),\qquad c=1.644854\sqrt2.$$

$$\text{Reject when }D>c.$$

$$\beta=4p,\qquad p+\beta=1.$$

$$p=\frac15,\qquad\beta=\frac45.$$

$$\Phi\left(\frac{c-\delta}{\sqrt2}\right)=0.8.$$

$$\begin{aligned}
\delta&=c-0.841621\sqrt2\\
&\approx1.136.
\end{aligned}$$

$$\mu_A=40+\delta\approx41.136.$$

B的真实均值下降而A不变，均值差增加，差值分布中心右移；固定右界以外的概率增加，功效上升。检验仍以零差值定界，不随真实B均值移动。模型出错回看[均值差条件](/zh/alevel/a2-further-mathematics/statistics/comparing-means/#conditions)，反求出错回看[前面的新问题](#task-inverse)。

</details>

</section>

## 下一步 {#next-step}

[比较独立均值](/zh/alevel/a2-further-mathematics/statistics/comparing-means/) · [课程路线](/zh/alevel/a2-further-mathematics/statistics/)


<details class="lesson-notes" markdown="1"><summary>来源与学习范围</summary>

教材：Oxford University Press（2017），International A Level Further Mathematics with Statistics，32.1节，印刷415–418页。范围对照9665 v5.2 FS2.4的功效条目：针对指定备择计算，不要求推导完整功效函数。反向求一个参数参考June 2026 FM04 Q10，配套MS pp.16–17，Version 1.0 Final；双尾示范参考June 2025 Q5与MS p.9，Version 1.0 Final。新题条件和每尾预算写在题干中，不把本题规则当成所有双侧检验唯一的约定。

[9665 Specification](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf) · [June 2026 QP](https://drive.google.com/file/d/1tL6Bbjx9_3rs3oq0CxUetH0DBTvkE43r/view) · [June 2025 QP](https://drive.google.com/file/d/1FTxQ-X2OSM6MRZHAAKbTk8-Gp1Vqx7z4/view) · [June 2025 MS](https://drive.google.com/file/d/1VRTlOTfUIP2agmgWRMxOBJLAUS1AwvQA/view)

</details>

{% include exam_topic_practice.html %}
