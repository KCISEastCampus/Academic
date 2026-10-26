---
title: "泊松分布：一段时间内发生几次？"
layout: subjects
mathjax: true
grade: a2
subject: s2
lang: zh-CN
translation_of: /alevel/a2-mathematics/statistics/poisson-distribution/
permalink: /zh/alevel/a2-mathematics/statistics/poisson-distribution/
reading_layout: true
study_page: true
toc_headings: "#model, #interval, #probability, #spread, #independent-sums, #binomial-limit, #practice, #retry, #later-review, #next-step"
---

[A2 统计课程](/zh/alevel/a2-mathematics/statistics/)
{:.lesson-meta}

服务台平均每分钟收到三条消息。有的分钟很安静，有的分钟很忙。“平均三条”**不代表每分钟一定收到三条**。

这一课要回答：收到不同条数的机会各有多大？先说清数什么、数多久，再计算。练习请先在纸上尝试，提示与解答可以分别展开。

需要的基础是比例、[概率补集](/zh/alevel/as-mathematics/probability/#l18-concept)和[离散随机变量](/zh/alevel/as-mathematics/random-variables/#l19-concept)。新公式会在下面解释。除标明的 OxfordAQA 原题外，情境和题目均为自拟，不附官方分值。

## 我们到底在数什么？ {#model}

把“一分钟内收到的消息条数”记为 $X$。这一分钟还没结束时，我们不知道它是多少。它可能是 $0,1,2,3,\ldots$，但不可能是 $2.5$ 条。这里的 $X$ 只能取一个个整数，是**离散随机变量**（discrete random variable）。

**泊松分布**（Poisson distribution）是一种描述固定时间或空间范围内“发生次数”的模型。它告诉我们每种次数出现的概率。但不是所有数次数的问题，都适合用它。

对于随时间发生的事件，我们作以下假设：

- **平均发生速度不变。** 允许有时密、有时疏，但如果每天午休都会明显变忙，就不能把这些时段都当成同一个恒定速度。
- **各次发生相互独立。** 一条消息的到来不会引起下一条；互不重叠时段内的次数也相互独立。
- **事件一个个发生。** 时间缩得足够短时，收到两条或更多条的机会，比只收到一条小得多；若总是成批到来，就需要不同模型。

这些是假设，要结合情境检查，不能只看到一个平均数就认定成立。不同的人各自发送消息，可能适合；系统每分钟统一放出十条消息，就不适合这样建模。

记号写作

$$X\sim\operatorname{Po}(\lambda).$$

读作“$X$ 服从均值为 $\lambda$ 的泊松分布”。$\lambda$ 读作 lambda，表示**所选区间内的平均次数**。它可以是 $2.5$，即使某一次的实际条数不可能是 2.5：平均数不一定是某次能出现的结果。

## 数的时间变了，平均次数也要变 {#interval}

假设平均每分钟收到 $r=3$ 条消息，而且平均速度保持不变。数两分钟，平均条数就是 $3\times2=6$；只数半分钟，就是 $3\times0.5=1.5$。

| 数多久 | 这段时间内的平均条数 |
| --- | --- |
| 30 秒 | $\lambda=3\times0.5=1.5$ |
| 1 分钟 | $\lambda=3$ |
| 2 分钟 | $\lambda=3\times2=6$ |

这就是 $\lambda=rt$。单位要配好：若 $r$ 是“每分钟几条”，$t$ 就要用分钟。这里平均速度 $r$ 没变；$\lambda$ 改变，是因为我们数的时间长短变了。

计算前先写一句话：“$X$ 是两分钟内收到的消息条数。”把时间写进定义，就不容易错用一分钟的平均数。

## 怎样算某个次数的概率？ {#probability}

若 $X\sim\operatorname{Po}(\lambda)$，且 $\lambda>0$，那么**恰好**发生 $k$ 次的概率是

$$P(X=k)=\frac{e^{-\lambda}\lambda^k}{k!},\qquad k=0,1,2,\ldots.$$

这里的 $e\approx2.71828$ 是指数函数里的常数，不是另一个待求的数。$k!$ 叫阶乘，表示 $k\times(k-1)\times\cdots\times1$，并规定 $0!=1$。例如 $3!=6$，$5!=120$。

这个公式由泊松模型给出，这里不要求正式推导。它算的是**恰好一个指定次数**，不是“从零到这个次数”的总概率。计算时保留未四舍五入的值，最后才取题目要求的精度。概率应在 $0$ 与 $1$ 之间。

<div class="worked-example" markdown="1">

### 完整示范：数两分钟 {#example-exact}

**Question:** Messages arrive according to a Poisson process at a constant mean rate of 3 per minute. Find the probability of exactly 5 messages in 2 minutes. Give your answer to three significant figures.

令 $X$ 为两分钟内的消息条数。平均数也要属于**两分钟**，所以 $\lambda=3\times2=6$，$X\sim\operatorname{Po}(6)$。“Exactly 5” 就是 $X=5$：

$$\begin{aligned}
P(X=5)&=\frac{e^{-6}6^5}{5!}\\
&=\frac{e^{-6}\times7776}{120}\\
&=0.160623\ldots\approx0.161.
\end{aligned}$$

也就是约 16.1% 的机会。注意两个数的分工：6 是平均条数，5 是题目问的实际条数。结果在 0 与 1 之间，符合概率的要求。

</div>

### “至少”包含不止一个次数 {#integer-boundaries}

如果问“至少两条”，要算的就是 $2,3,4,\ldots$。直接相加没有尽头；换个方向，从总概率 1 中扣掉不想要的 $0$ 和 $1$ 就行。这叫用**补集**。

| 英文表达 | 对应的整数事件 |
| --- | --- |
| Exactly 2：恰好两条 | $X=2$ |
| At least 2：至少两条 | $X\ge2$：$2,3,4,\ldots$ |
| More than 2：超过两条 | $X>2$：$3,4,5,\ldots$ |
| Fewer than 2：少于两条 | $X<2$：$0,1$ |
| At most 2：至多两条 | $X\le2$：$0,1,2$ |

<div class="worked-example" markdown="1">

### 完整示范：至少两条 {#example-tail}

**Question:** For the same message model, find the probability of at least 2 messages in 1 minute. Give your answer to three significant figures.

这次只数一分钟，另记 $Y\sim\operatorname{Po}(3)$。我们要的是 $2,3,4,\ldots$，而不只是 2：

$$\begin{aligned}
P(Y\ge2)&=1-P(Y=0)-P(Y=1)\\
&=1-\frac{e^{-3}3^0}{0!}-\frac{e^{-3}3^1}{1!}\\
&=1-e^{-3}-3e^{-3}\\
&=0.800851\ldots\approx0.801.
\end{aligned}$$

排除的两个概率合计约 0.199，留下约 0.801。这样就包含了所有想要的次数，不必一直加下去。

</div>

## 平均数能告诉我们什么？ {#spread}

泊松分布的均值和方差都等于 $\lambda$；标准差则是 $\sqrt\lambda$：

$$E(X)=\lambda,\qquad\operatorname{Var}(X)=\lambda,\qquad\operatorname{SD}(X)=\sqrt\lambda.$$

**均值**表示把同样长的区间重复观察很多次后，次数的长期平均。**标准差**描述这些次数在均值周围有多分散。方差是标准差的平方，不要把两者当成同一个量。

前面的两分钟消息条数，均值是 6，方差是 6，标准差是 $\sqrt6\approx2.45$。这不表示所有结果与 6 的差都不超过 2.45，更不表示一定收到 6 条。若期望和方差还不熟，先回看 AS 的[加权平均示范](/zh/alevel/as-mathematics/random-variables/#l19-worked)。

## 把几个计数合起来 {#independent-sums}

两个服务台各自数来电。如果两个次数相互独立，而且各自都是泊松分布，那么**总次数**也服从泊松分布。把平均次数相加，不是把标准差相加：

$$\begin{aligned}
X&\sim\operatorname{Po}(a),\\
Y&\sim\operatorname{Po}(b),\\
X+Y&\sim\operatorname{Po}(a+b).
\end{aligned}$$

这里 $a,b>0$，**相互独立**是关键。多个独立泊松计数相加也一样：把各自均值全部相加。大纲允许直接用这个结果，不要求证明。先确认各变量确实组成题目要的总量：速率要先换成实际观察时段内的均值。重叠时段通常共享一些事件，不能当成独立。次数的差可能为负，因此不能把“和”的规则套给“差”。

<div class="worked-example" markdown="1">

### 完整示范：两个来源 {#example-sum}

**Question:** Two independent Poisson call streams have rates 2 and 4 per hour. Find the distribution of their total number of calls in 30 minutes, its standard deviation and the probability of no calls.

令 $X,Y$ 分别为两个来源在半小时内的次数，$S=X+Y$。先把每小时的速率变成半小时内的均值，再利用独立性相加：

$$\begin{aligned}
X&\sim\operatorname{Po}(1),\\
Y&\sim\operatorname{Po}(2),\\
S&\sim\operatorname{Po}(3).
\end{aligned}$$

$$\begin{aligned}
\operatorname{SD}(S)&=\sqrt3\approx1.73,\\
P(S=0)&=e^{-3}\approx0.0498.
\end{aligned}$$

检查一下：总共零次，就意味着两个来源都零次。独立时概率相乘，$e^{-1}e^{-2}=e^{-3}$，与刚才一致。若一个服务台每次来电都会触发另一个来电，就不能假定独立并直接使用这套规则。

</div>

## 试验很多，每次成功机会很小 {#binomial-limit}

二项模型是在固定次数、相互独立、每次成功概率相同的试验中数成功次数。若 $n$ 很大而 $p$ 很小，可以用均值为 $np$ 的泊松分布近似这个计数：

$$X\sim\operatorname{B}(n,p),\qquad \lambda=np.$$

$$P(X=k)\approx\frac{e^{-np}(np)^k}{k!}.$$

可以想象：把成功机会分到越来越多次试验，每次越来越难成功，但保持平均成功次数不变。对应的极限是 $n\to\infty$、$p\to0$，同时固定 $np=\lambda$。这里不要求正式推导概率公式。有限的 $n$ 下仍是近似，因此原二项变量的概率写 $\approx$。没有一个通用数字门槛能保证所有题目的精度。只看 $np$ 小也不够：$\operatorname{B}(4,0.5)$ 的均值是 2，但 $p$ 并不小。先检查二项模型本身的条件，再检查能否近似。

<div class="worked-example" markdown="1">

### 完整示范：少量次品 {#example-approx}

**Question:** Each of 500 parts is independently faulty with probability 0.004. Estimate the probability of at least 2 faulty parts using a suitable approximation. Explain your choice.

令 $D$ 为次品数，精确模型是二项分布。500 次试验很多，每次 0.004 的次品机会很小，所以可用 $V\sim\operatorname{Po}(2)$ 近似，其中 $500\times0.004=2$。至少两个，要扣掉零个和一个：

$$\begin{aligned}
P(D\ge2)&\approx P(V\ge2)\\
&=1-P(V=0)-P(V=1)\\
&=1-e^{-2}(1+2)\\
&\approx0.594.
\end{aligned}$$

精确二项计算约为 0.59454，泊松计算约为 0.59399；这一题的结果接近，可以作为检查，但不能保证其他近似题都有同样精度。

</div>

### 怎样读泊松累计表 {#table-use}

累计表中 $k$ 对应的通常是 $P(V\le k)$，先看表头确认。本题查 1 对应的值约 0.4060，再用 1 减去它。若要 3 到 6（包括两端），就用 6 对应的累计值减去 2 对应的累计值。需要的均值不在表里时，用概率公式算相应各项再相加，不能擅自换成表里邻近的均值。指数键可算 $e^{-\lambda}$；最后一步才舍入。这里没有声称任何机型的按键流程已经实测。

### 为什么均值和方差会相等？ {#moments-limit}

二项变量的均值是 $np$，方差是 $np(1-p)$。固定 $np=\lambda$，让 $p$ 越来越接近零：

$$\begin{aligned}
E(X)&=np=\lambda,\\
\operatorname{Var}(X)&=\lambda(1-p)\\
&\longrightarrow\lambda,\\
\operatorname{SD}(X)&=\sqrt{\lambda(1-p)}\\
&\longrightarrow\sqrt\lambda.
\end{aligned}$$

关键是 $1-p$ 趋向 1。这说明极限下均值、方差和标准差的联系，但不是完整的分布极限证明。有限的二项模型中，方差仍是 $np(1-p)$，并非恰好等于 $np$。

## 收起示范，自己试一试 {#practice}

<section class="lesson-check" markdown="1">

### 任务 1 {#task-model}

**Question:** A printer receives exactly one scheduled job every 10 minutes. A student models the number of jobs in a 10-minute interval by a Poisson distribution with mean 1. Explain why this model is unsuitable, even though the mean is correct.

<details markdown="1"><summary>提示</summary>

比较实际情境中能出现的次数，与这个模型允许出现的次数。

</details>

<details markdown="1"><summary>解答与回补</summary>

实际次数固定为 1；均值为 1 的泊松模型却也给 0、2 等次数分配正概率。到达按时间表安排，并非以恒定平均速度独立随机到来。平均数相同，不足以说明模型合适。回看[模型条件](#model)，再做[新的建模任务](#retry-model)。

</details>

</section>

<section class="lesson-check" markdown="1">

### 任务 2 {#task-interval}

**Question:** Calls arrive according to a Poisson process at a mean rate of 4 per hour. Let X be the number of calls in 30 minutes. State the distribution of X. Find (a) P(X = 0), (b) P(X > 2), giving probabilities to three significant figures.

<details markdown="1"><summary>提示</summary>

先把 30 分钟换成小时。第 (b) 问先列出要排除的整数次数。

</details>

<details markdown="1"><summary>解答与回补</summary>

这里 $t=0.5$ 小时，所以 $\lambda=4\times0.5=2$，$X\sim\operatorname{Po}(2)$。

$$\begin{aligned}
P(X=0)&=e^{-2}\\
&=0.135335\ldots\approx0.135,\\
P(X>2)&=1-P(X=0)\\
&\quad-P(X=1)-P(X=2)\\
&=1-e^{-2}\left(1+2+\frac{2^2}{2!}\right)\\
&=1-5e^{-2}\\
&=0.323323\ldots\approx0.323.
\end{aligned}$$

第 (b) 问从 3 开始，因此也要扣掉 2。均值错了，回看[时间区间](#interval)；边界错了，回看[整数事件](#integer-boundaries)。然后做[新的计数任务](#retry-count)。

</details>

</section>

<section class="lesson-check" markdown="1">

### 任务 3：OxfordAQA 考试原题 {#official-task}

OxfordAQA 9660/MA04，January 2025，Q4(b)(i)(ii)。保留英文原题，分别为 2 分与 3 分。两小问共享下面的情境。

The number of advertisements which appear on an app in a 30-minute period is modelled as a Poisson distribution with a mean of 10

**(i)** Find the probability of less than 5 advertisements appearing in a 30-minute period of using the app. Give your answer to three significant figures.

**(ii)** Find the probability of more than 7 and less than 13 advertisements appearing in a 15-minute period of using the app. Give your answer to three significant figures.

<details markdown="1"><summary>提示</summary>

分别列出两问允许的整数次数，并检查两问的时间区间是否相同。

</details>

<details markdown="1"><summary>解答与评分要点</summary>

第 (i) 问，令 $A$ 为 30 分钟内的广告次数，$A\sim\operatorname{Po}(10)$。“Less than 5” 包含 0 到 4：

$$\begin{aligned}
P(A<5)&=P(A\le4)\\
&=\sum_{k=0}^{4}\frac{e^{-10}10^k}{k!}\\
&=0.0292526\ldots\approx0.0293.
\end{aligned}$$

这里的求和符号表示把 $k=0,1,2,3,4$ 的五个公式值加起来。官方评分标准的方法分对应正确的整数事件，答案分对应 0.0293。

第 (ii) 问，另令 $B$ 为 15 分钟内的次数。时间减半，所以 $\lambda=5$，$B\sim\operatorname{Po}(5)$。符合要求的次数是 8 到 12：

$$\begin{aligned}
P(7<B<13)&=P(B\le12)\\
&\quad-P(B\le7)\\
&=\sum_{k=8}^{12}\frac{e^{-5}5^k}{k!}\\
&=0.131352\ldots\approx0.131.
\end{aligned}$$

从 0–12 中扣掉 0–7，恰好留下 8–12。官方评分标准采用累计表值 0.9980−0.8666，评分点分别对应新均值、概率方法和答案。也可以把五个未提前舍入的公式值相加，得到相同的三位有效数字答案。出错后回看[时间区间](#interval)或[整数事件](#integer-boundaries)，再做[新的计数任务](#retry-count)。

</details>

</section>

<section class="lesson-check" markdown="1">

### 任务 4 {#task-spread}

**Question:** The number of faults in a fixed length of cable is modelled by X ~ Po(2.25). State the mean, variance and standard deviation. A student says, “The model is impossible because a cable cannot have 2.25 faults.” Explain the mistake.

<details markdown="1"><summary>提示</summary>

分清某一次看到的次数，与很多次观察后的平均次数。

</details>

<details markdown="1"><summary>解答与回补</summary>

均值为 $2.25$，方差为 $2.25$，标准差为 $\sqrt{2.25}=1.5$。每一次实际次数是整数，但长期平均不必是整数。回看[均值与分散程度](#spread)，再做[新的分散程度任务](#retry-spread)。

</details>

</section>

<section class="lesson-check" markdown="1">

### 自己判断 {#task-sum}

**Question:** Independent counts A and B have distributions Po(1.2) and Po(0.8). Find P(A + B > 0) and the standard deviation of A + B. A third count C records exactly the same events as A. Can A + C be treated by the same rule? Explain.

<details markdown="1"><summary>提示</summary>

分清两个独立来源，与把同一批事件数两遍。

</details>

<details markdown="1"><summary>解答与回补</summary>

令 $S=A+B$，独立性给出 $S\sim\operatorname{Po}(2)$。

$$\begin{aligned}
P(S>0)&=1-e^{-2}\approx0.865,\\
\operatorname{SD}(S)&=\sqrt2\approx1.41.
\end{aligned}$$

$C=A$，所以 $A+C=2A$ 只能取偶数，不是均值为 2.4 的泊松分布。它的方差实际上是 $4(1.2)=4.8$，不是 2.4。若只相加均值却没看独立性，回看[合并条件](#independent-sums)，再做[重试](#retry-sum)。

</details>

</section>

<section class="lesson-check" markdown="1">

### 自己判断 {#task-approx}

**Question:** A batch contains 1000 independently produced items, each faulty with probability 0.002. Estimate the probability of at most 1 fault and justify your model. Another batch has 5 independent items, each faulty with probability 0.4. Would the same approximation be justified just because the two expected counts agree?

<details markdown="1"><summary>提示</summary>

先写两批各自的 n、p 和 np，再决定能不能用同一种近似。

</details>

<details markdown="1"><summary>解答与回补</summary>

第一批 $n=1000$ 很大，$p=0.002$ 很小，$np=2$；把次品数 $D$ 用 $V\sim\operatorname{Po}(2)$ 近似。

$$\begin{aligned}
P(D\le1)&\approx P(V\le1)\\
&=e^{-2}(1+2)\\
&\approx0.406.
\end{aligned}$$

第二批虽然均值相同，却试验少、每次成功概率不小，应使用精确二项模型，不能由均值相同推出近似合适。若选法或近似号有误，回看[近似条件](#binomial-limit)和[累计表](#table-use)，再做[重试](#retry-approx)。

</details>

</section>

<section class="lesson-check" markdown="1">

### 自己判断 {#task-limit}

**Question:** For each positive integer m, X_m has distribution B(200m, 0.01/m). Find its exact mean and variance. Describe the limits of its variance and standard deviation as m increases without bound. Is its variance exactly equal to its mean for finite m?

<details markdown="1"><summary>提示</summary>

取极限之前，保留方差中的 1-p。

</details>

<details markdown="1"><summary>解答与回补</summary>

均值保持不变，每次的成功概率却趋向零：

$$\begin{aligned}
E(X_m)&=2,\\
\operatorname{Var}(X_m)&=2(1-0.01/m)\\
&\longrightarrow2,\\
\operatorname{SD}(X_m)&\longrightarrow\sqrt2.
\end{aligned}$$

有限的 $m$ 下，方差严格小于 2。提前把它写成 2，是把精确二项值与极限值混在一起。回看[矩的极限](#moments-limit)，再做[重试](#retry-limit)。

</details>

</section>

## 回补后，换一题再试 {#retry}

先收起前面的解答，选择与你的错误对应的新题。对照着原答案写对，不能说明刚才的困难已经解决。

<section class="lesson-check" markdown="1">

### 新任务 A {#retry-model}

**Question:** A help desk has a mean of 6 calls per hour over the whole school day. Every day, almost all calls arrive during the same 10-minute lunch break. Explain why using Po(6) for every one-hour period is unsuitable. Suggest one change to the modelling plan, and one further assumption that would still need checking.

<details markdown="1"><summary>提示</summary>

一天的平均数，可能掩盖一天内部固定的忙闲变化。

</details>

<details markdown="1"><summary>解答</summary>

平均速度随时间改变，不能拿全天平均数代表每个小时。可把午休与较安静的时段分开，对平均速度较稳定的时段分别估计。仍需检查独立性和是否成批到来；只把一天分段，还不能保证泊松模型适用。需要时回看[模型条件](#model)。

</details>

</section>

<section class="lesson-check" markdown="1">

### 新任务 B {#retry-count}

**Question:** Faults along a cable follow a Poisson process with mean rate 0.5 per metre. Find the probability of at most 1 fault in a 6-metre section, to three significant figures. Define your random variable.

<details markdown="1"><summary>提示</summary>

这次区间是长度，不是时间。先列出“at most 1”包含的次数。

</details>

<details markdown="1"><summary>解答</summary>

令 $F$ 为这段 6 米电缆内的故障数。$\lambda=0.5\times6=3$，所以 $F\sim\operatorname{Po}(3)$。

$$\begin{aligned}
P(F\le1)&=P(F=0)+P(F=1)\\
&=e^{-3}+3e^{-3}\\
&=0.199148\ldots\approx0.199.
\end{aligned}$$

从时间改成长度，不改变计数方法。如果误用 0.5 作均值，回看[速度与区间](#interval)；如果漏掉 0，回看[整数事件](#integer-boundaries)。

</details>

</section>

<section class="lesson-check" markdown="1">

### 新任务 C {#retry-spread}

**Question:** A Poisson count has standard deviation 2. State its mean and variance. Explain whether the next observed count must equal the mean.

<details markdown="1"><summary>提示</summary>

先把标准差平方，再用泊松分布的关系。

</details>

<details markdown="1"><summary>解答</summary>

方差为 $2^2=4$，因此均值也为 4。下一次次数可以是 0、1、2 或任意非负整数，平均数不会固定某次结果。若均值答成 2，回看[分散程度](#spread)。

</details>

</section>

<section class="lesson-check" markdown="1">

### 换一题再试 {#retry-sum}

**Question:** A Poisson process has rate 3 per hour. Let U count events in the first 20 minutes and V count events in the next 40 minutes. Find the distribution of U + V and P(U + V = 1). Would the same argument work if V counted the entire first hour?

<details markdown="1"><summary>提示</summary>

先检查两段时间是否重叠。

</details>

<details markdown="1"><summary>解答与回补</summary>

原来的两段时间不重叠，所以在泊松过程中计数独立，均值分别为 1 和 2。

$$\begin{aligned}
U+V&\sim\operatorname{Po}(3),\\
P(U+V=1)&=3e^{-3}\approx0.149.
\end{aligned}$$

若 $V$ 统计整个第一小时，就已经包含 $U$ 数过的事件，不能再假定独立并套用相加规则。需要时回看[独立条件](#independent-sums)。

</details>

</section>

<section class="lesson-check" markdown="1">

### 换一题再试 {#retry-approx}

**Question:** There are 400 independent trials, each with success probability 0.005. Estimate the probability of more than 1 success, explaining any approximation. A cumulative Poisson table has an entry 0.4060 for mean 2 at count 1. Explain how that entry is used.

<details markdown="1"><summary>提示</summary>

先把 more than 1 转成整数事件。

</details>

<details markdown="1"><summary>解答与回补</summary>

$n$ 大、$p$ 小，支持均值 $np=2$ 的泊松近似。令 $D$ 为二项计数，$V\sim\operatorname{Po}(2)$，

$$\begin{aligned}
P(D>1)&\approx1-P(V\le1)\\
&\approx1-0.4060=0.5940.
\end{aligned}$$

表值包含零次和一次，不只是 $P(V=1)$。依错误回看[读表](#table-use)或[近似条件](#binomial-limit)。

</details>

</section>

<section class="lesson-check" markdown="1">

### 换一题再试 {#retry-limit}

**Question:** A binomial variable has mean 3 and success probability p, where p tends to zero while the mean stays fixed. Express n, variance and standard deviation in terms of p, and state the limiting Poisson model. Explain what happens to n.

<details markdown="1"><summary>提示</summary>

先利用均值不变，写出 n 与 p 的关系。

</details>

<details markdown="1"><summary>解答与回补</summary>

沿着 $n$ 为整数的有效二项模型，

$$\begin{aligned}
n&=3/p\longrightarrow\infty,\\
\operatorname{Var}(X)&=3(1-p)\longrightarrow3,\\
\operatorname{SD}(X)&=\sqrt{3(1-p)}\\
&\longrightarrow\sqrt3.
\end{aligned}$$

极限模型为 $\operatorname{Po}(3)$。若只减小 $p$ 而不增加 $n$，就不能保持均值不变。漏掉这些条件时回看[极限过程](#moments-limit)。

</details>

</section>

## 学过别的内容后，再回来做 {#later-review}

学过另一个主题后，收起前面的示范再试。为每种情境自己选模型，并解释为什么适合。如果需要提醒，可以打开提示；用过提示就按“借助提示完成”记录，不算无帮助的检查。

<section class="lesson-check" markdown="1">

### 换两个情境

**Question:** (a) Calls arrive independently at a constant mean rate of 2 per hour, singly rather than in batches. Find the probability of more than 1 call in 30 minutes. (b) Five students each independently have probability 0.2 of needing help. Find the probability that at least 1 of them needs help. State and justify a model for each count. Give probabilities to three significant figures.

<details markdown="1"><summary>提示</summary>

两种情境分别固定了什么：时间区间，还是试验次数？再想想所求事件的补集。需要时回看 [AS 二项模型](/zh/alevel/as-mathematics/binomial/#l21-concept)：$n$ 次相互独立的试验，每次成功概率同为 $p$，零次成功的概率是 $P(X=0)=(1-p)^n$。

</details>

<details markdown="1"><summary>解答与下一次检查</summary>

第 (a) 问，令 $C$ 为半小时内的来电数。给出的假设支持 $C\sim\operatorname{Po}(1)$：

$$\begin{aligned}
P(C>1)&=1-P(C=0)\\
&\quad-P(C=1)\\
&=1-2e^{-1}\\
&=0.264241\ldots\approx0.264.
\end{aligned}$$

第 (b) 问，令 $H$ 为需要帮助的学生人数。五次独立试验，每次成功概率相同，因此 $H\sim\operatorname{B}(5,0.2)$：

$$\begin{aligned}
P(H\ge1)&=1-P(H=0)\\
&=1-0.8^5\\
&=0.67232\approx0.672.
\end{aligned}$$

第 (b) 问直接用精确二项模型；少量固定次数试验，不是选泊松近似的理由。若选模型有困难，回看[泊松条件](#model)与[二项条件](/zh/alevel/as-mathematics/binomial/#l21-concept)，然后收起讲解再判断：若改成四位独立学生、每人需要帮助的概率仍相同，是否仍用第 (b) 问的模型？说明理由。

</details>

</section>

<section class="lesson-check" markdown="1">

### 自己判断 {#later-combine}

**Question:** Two independent production lines each make 200 items. Every item is independently faulty with probability 0.005. Estimate the probability of no faults across both lines. Explain the model, its conditions and why the estimate is not an exact binomial probability.

<details markdown="1"><summary>提示</summary>

先确定总量包含多少次试验，再选模型。

</details>

<details markdown="1"><summary>解答与回补</summary>

两条线总共是 400 次独立试验，每次 $p=0.005$。精确计数为 $\operatorname{B}(400,0.005)$。因为 $n$ 大、$p$ 小，用均值 2 的泊松分布近似：

$$P(D=0)\approx e^{-2}\approx0.135.$$

也可以把每条线分别近似成 $\operatorname{Po}(1)$，再把两个独立的近似计数相加。精确概率是 $0.995^{400}$，不是 $e^{-2}$。条件没检查，回看[近似](#binomial-limit)并做[重试](#retry-approx)；总量合错，回看[独立和](#independent-sums)并做[重试](#retry-sum)。

</details>

</section>

## 接下来学什么？ {#next-step}

本课现在覆盖 S2.1 的模型条件、区间均值、公式与累计表概率、矩、独立和及二项极限近似。收起解答，用独立任务检查哪些方法已经能自己选择和使用。

接着学[连续随机变量](/zh/alevel/a2-mathematics/statistics/continuous-random-variables/)：如果结果能落在一段范围内的任何位置，概率怎样算？也可返回[统计课程](/zh/alevel/a2-mathematics/statistics/)查看完整路线。

<details markdown="1"><summary>来源与范围</summary>

OxfordAQA Mathematics 9660 v5.2，S2.1，印刷第 25 页（PDF 第 24 页）：[当前资格页](https://www.oxfordaqa.com/qualification/international-as-and-a-level-mathematics-9660/)与[官方大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf)。本页覆盖 S2.1，不代表整个 MA04；不要求正式证明分布极限或独立和定理。

原题 Q4(b)(i)(ii)：[MA04 January 2025 试卷，第 12–13 页](/assets/pdf/fx-cg50/references/oxfordaqa-ma04-2025-january-question-paper.pdf#page=12)；实际配对阅读[最终评分标准，第 10 页](/assets/pdf/fx-cg50/references/oxfordaqa-ma04-2025-january-mark-scheme.pdf#page=10)。保留英文题干、数据与要求，解答补充解释。另实际阅读 Q1(c)（试卷第 3 页、评分标准第 4–5 页），核对近似条件和均值。其余示范与练习均自拟，无官方分值；未验证计算器按键流程或学生学习效果。

</details>
