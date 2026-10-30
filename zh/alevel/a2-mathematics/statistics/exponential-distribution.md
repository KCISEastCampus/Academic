---
title: "指数分布：到下一次还要等多久？"
layout: subjects
mathjax: true
grade: a2
subject: s2
lang: zh-CN
translation_of: /alevel/a2-mathematics/statistics/exponential-distribution/
permalink: /zh/alevel/a2-mathematics/statistics/exponential-distribution/
reading_layout: true
study_page: true
toc_headings: "#waiting-model, #zero-bridge, #cdf-density, #moments, #quantiles, #practice, #retry, #later-review, #next-step"
---

[A2 统计课程](/zh/alevel/a2-mathematics/statistics/)
{:.lesson-meta}

来电平均每小时六次，说的是**次数**。换一个问题：从现在开始，到下一次来电还要等多久？平均等待十分钟，不是每十分钟准时来一个电话。

先学[连续随机变量](/zh/alevel/a2-mathematics/statistics/continuous-random-variables/)，理解密度、面积与累计概率；还会用到[泊松计数](/zh/alevel/a2-mathematics/statistics/poisson-distribution/)、指数函数的积分和对数。下面会把这些知识连起来。除标明的 OxfordAQA 原题，其余情境与练习均自拟，不附官方分值。

## 什么时候可以研究“等多久”？ {#waiting-model}

令 $T$ 为从现在到下一次事件的等待时间。次数必须是整数，时间却可以是 2.3 分钟、2.31 分钟，所以它是非负的连续随机变量。当事件按恒定速率的泊松过程发生时，事件之间的间隔可以用**指数分布**（exponential distribution）描述：事件独立、单次发生，研究的时段里平均发生速度不系统改变。

固定时刻表不符合这种情形：每十分钟准时来一班车，等待时间的规律就不同。若每天午休必定特别忙，也不能只用全天平均数就认定一个指数模型合适。要检查事件怎样发生，不能只看均值。

记作 $T\sim\operatorname{Exp}(r)$，其中 $r>0$。这里 $r$ 是**每单位时间平均发生几次**，不是平均等待时间。有些资料把指数分布的率写成 lambda；本课程用 $\lambda=rt$ 表示泊松计数的区间均值，用 $r$ 表示率。用公式前先看参数的定义，不能见到同一个字母就认作同一含义。

## 还没等到，就是一次也没发生 {#zero-bridge}

当 $t\ge0$，令 $N(t)$ 为接下来 $t$ 个时间单位内的次数。在上述过程假设下，

$$N(t)\sim\operatorname{Po}(rt).$$

$$\begin{aligned}
P(T>t)&=P(N(t)=0)\\
&=\frac{e^{-rt}(rt)^0}{0!}\\
&=e^{-rt}.
\end{aligned}$$

“等了 $t$ 还没来”和“这 $t$ 个时间单位内发生零次”说的是同一件事。这是**尾部概率**（survival probability），对应 $t$ 右边的面积。$r$ 与 $t$ 的时间单位相消，指数中的 $rt$ 不带时间单位。若率是每小时，时间就用小时。这一步需要泊松过程的条件；只知道某一个时段的次数是泊松分布，还不足以断定整个等待过程都符合。

<div class="worked-example" markdown="1">

### 完整示范：要等超过多久？ {#example-wait}

**Question:** Calls follow a Poisson process at a rate of 6 per hour. Find the probability that the wait for the next call exceeds 15 minutes.

题目问等待时间，不是次数。令 $T$ 用小时计，15 分钟就是 $0.25$ 小时。超过这个时间才来，是右侧尾部，也就是这段时间内零次来电：

$$\begin{aligned}
P(T>0.25)&=e^{-6(0.25)}\\
&=e^{-1.5}\approx0.223.
\end{aligned}$$

同一时段的泊松均值为 $6(0.25)=1.5$，零次概率与此一致。等待门槛越长，“一直没等到”的概率应该越小，方向也合理。

</div>

## 从累计概率得到密度 {#cdf-density}

累计分布函数（CDF）$F(t)=P(T\le t)$，把 $t$ 及其左边的概率全部加起来。$t$ 非负时，用 1 减掉刚才的右尾；等待时间不可能为负：

$$F(t)=\begin{cases}
0,&t<0,\\
1-e^{-rt},&t\ge0.
\end{cases}$$

$$f(t)=\begin{cases}
re^{-rt},&t\ge0,\\
0,&t<0.
\end{cases}$$

当 $t>0$，对 $1-e^{-rt}$ 求导就得到 $re^{-rt}$。密度 $f(t)$ 是曲线的**高度**，不是恰好等到 $t$ 的概率。曲线从 $r$ 开始下降，越来越接近零；长长的右尾表示偶尔也会等很久。概率看曲线下的面积，所以选用某些时间单位后，若 $r>1$，密度高度可以超过 1，它的单位是时间单位的倒数。单独改变某一点（例如零点）的密度值，不会改变面积或概率。

为什么整条曲线下的面积是 1？因为 $r>0$，当 $b\to\infty$，指数项趋向零：

$$\begin{aligned}
\int_0^b re^{-rt}\,dt
&=\left[-e^{-rt}\right]_0^b\\
&=1-e^{-rb}\\
&\longrightarrow1.
\end{aligned}$$

原函数是 $-e^{-rt}$，因为它求导后正好是 $re^{-rt}$。更一般地，$0\le a<b$ 时，

$$\begin{aligned}
P(a<T<b)&=\int_a^b re^{-rt}\,dt\\
&=\left[-e^{-rt}\right]_a^b\\
&=e^{-ra}-e^{-rb}\\
&=F(b)-F(a).
\end{aligned}$$

$$P(T=a)=0.$$

一个点没有宽度，面积就是零。连续模型里，加不加区间端点都不影响概率，不需要像泊松整数计数那样挪动边界。若题目区间伸到零以下，只积分非负的那一段。

<div class="worked-example" markdown="1">

### 完整示范：在一段时间内等到 {#example-area}

**Question:** A waiting time T in minutes has exponential rate 0.2 per minute. Find P(2 < T < 5) using the density, and check with the CDF.

这是有左右边界的一段时间，要算 2 到 5 的面积，不是 5 处的高度，也不是单独一个右尾。两个端点都在非负定义域内：

$$\begin{aligned}
P(2<T<5)&=\int_2^5 0.2e^{-0.2t}\,dt\\
&=\left[-e^{-0.2t}\right]_2^5\\
&=-e^{-1}-(-e^{-0.4})\\
&=e^{-0.4}-e^{-1}\\
&\approx0.302.
\end{aligned}$$

$$\begin{aligned}
F(5)-F(2)&=(1-e^{-1})\\
&\quad-(1-e^{-0.4})\\
&=e^{-0.4}-e^{-1}.
\end{aligned}$$

两种算法一致。若把上下限倒过来就会得到负值；概率不能为负，可以用来检查减法顺序。

</div>

## 平均等待时间代表什么？ {#moments}

率为 $r$ 的指数等待时间，可以直接使用以下结果，不要求证明：

$$\begin{aligned}
E(T)&=\frac1r,\\
\operatorname{Var}(T)&=\frac1{r^2},\\
\operatorname{SD}(T)&=\frac1r.
\end{aligned}$$

每小时平均来六次，平均等待就是六分之一小时，不是六小时。来得越快，等得越短。均值和标准差用时间单位，方差用时间的平方；它们都不是事件次数。指数分布中均值与标准差相等，是这个分布的特征，不是所有连续变量的通用规则。平均数是长期平均，不是每一次等待，也不一定是中位数。

<div class="worked-example" markdown="1">

### 完整示范：由等待反求率 {#example-moments}

**Question:** A waiting time T is exponential with mean 8 minutes. Find its rate per minute, variance and standard deviation. Find the probability of waiting longer than its mean.

先用倒数关系反求率；整个计算统一用分钟：

$$\begin{aligned}
\frac1r&=8,\qquad r=\frac18,\\
\operatorname{Var}(T)&=8^2=64,\\
\operatorname{SD}(T)&=8.
\end{aligned}$$

$$\begin{aligned}
P(T>8)&=e^{-(1/8)8}\\
&=e^{-1}\approx0.368.
\end{aligned}$$

率是每分钟 0.125 次，方差是 64 平方分钟，标准差是 8 分钟。超过均值的概率不是一半：这个密度曲线不对称。

</div>

## 已知概率，反过来找时间 {#quantiles}

有时未知的是时间门槛。先看题目给的是哪一侧的面积。若给的是累计概率 $0<q<1$，对应的分位数 $t_q$ 满足：

$$\begin{aligned}
1-e^{-rt_q}&=q,\\
e^{-rt_q}&=1-q,\\
-rt_q&=\ln(1-q),\\
t_q&=-\frac{\ln(1-q)}r.
\end{aligned}$$

因为 $0<1-q<1$，它的对数为负，最后时间为正。先把指数项单独放一边，确认其值为正，再取对数。如果给的是右尾概率 $s$，就直接用 $e^{-rt}=s$。累计概率 $q=1$，或尾部恰好为零，都没有有限的时间门槛。

<div class="worked-example" markdown="1">

### 完整示范：等待门槛 {#example-quantile}

**Question:** Events follow a Poisson process of rate 0.5 per minute. Find a time t such that the next event occurs within t minutes with probability 0.9.

“Within” 是在门槛以内，所以给的是累计概率，不是右尾。代入 $r=0.5$：

$$\begin{aligned}
1-e^{-0.5t}&=0.9,\\
e^{-0.5t}&=0.1,\\
-0.5t&=\ln0.1,\\
t&=-2\ln0.1\\
&\approx4.61.
\end{aligned}$$

门槛约为 4.61 分钟。代回后右尾概率为 0.1，累计概率为 0.9，方向与题意一致。

</div>

## 收起示范，自己判断 {#practice}

先在纸上完成，再打开提示或答案。记下有没有用提示；做对应重试前，先把原解答收起。

<section class="lesson-check" markdown="1">

### 自己试一试 {#task-bridge}

**Question:** Arrivals occur independently and singly at a constant mean rate of 6 per hour. Let T be the wait in minutes for the next arrival. Find P(T > 20), state the distribution and parameter of T, and explain the connection with a count. Would the same waiting-time model fit arrivals scheduled exactly 10 minutes apart?

<details markdown="1"><summary>提示</summary>

先把率的单位换成与 T 一致。

</details>

<details markdown="1"><summary>解答与回补</summary>

给出的条件支持恒定速率的泊松过程。换成每分钟，率为 $6/60=0.1$，所以 $T\sim\operatorname{Exp}(0.1)$。

$$\begin{aligned}
P(T>20)&=e^{-0.1(20)}\\
&=e^{-2}\approx0.135.
\end{aligned}$$

这也等于 20 分钟内零次到达的概率，那个计数的均值为 2。按十分钟准时到达不符合独立随机到达，不能用同样的指数模型。率错了，回看[单位与零次桥梁](#zero-bridge)；条件判断错了，回看[模型](#waiting-model)。再做[重试](#retry-bridge)。

</details>

</section>

<section class="lesson-check" markdown="1">

### 自己试一试 {#task-area}

**Question:** A non-negative lifetime T in hours has density f(t) = 0.5 exp(-0.5t) for t >= 0, and zero otherwise. Find its CDF for all real t, P(1 < T < 3) and P(T = 2). Explain why substituting t = 2 in the density does not give the last probability.

<details markdown="1"><summary>提示</summary>

概率看面积；累计函数还要交代零以下的情况。

</details>

<details markdown="1"><summary>解答与回补</summary>

零以下累计概率为零；当 $t\ge0$，

$$\begin{aligned}
F(t)&=\int_0^t0.5e^{-0.5u}\,du\\
&=\left[-e^{-0.5u}\right]_0^t\\
&=1-e^{-0.5t}.
\end{aligned}$$

$$\begin{aligned}
P(1<T<3)&=\int_1^3 0.5e^{-0.5t}\,dt\\
&=\left[-e^{-0.5t}\right]_1^3\\
&=e^{-0.5}-e^{-1.5}\\
&\approx0.383.
\end{aligned}$$

$P(T=2)=0$。代入密度得到的是高度，但一个点没有宽度，面积为零。若漏定义域或算错面积，回看[累计与密度](#cdf-density)，再做[重试](#retry-area)。

</details>

</section>

<section class="lesson-check" markdown="1">

### 自己试一试 {#task-moments}

**Question:** An exponential waiting time T has standard deviation 4 minutes. Find its mean, variance and event rate per minute. Find P(T < 4). Explain why the mean is not the median.

<details markdown="1"><summary>提示</summary>

先用标准差与率的关系，再计算概率。

</details>

<details markdown="1"><summary>解答与回补</summary>

均值和标准差都是 $1/r$，所以均值为 4 分钟，方差为 16 平方分钟，率为每分钟 $1/4$。

$$\begin{aligned}
P(T<4)&=1-e^{-(1/4)4}\\
&=1-e^{-1}\approx0.632.
\end{aligned}$$

小于均值的概率不是 0.5，所以 4 不是中位数。若把率当成等待，或把方差当成标准差，回看[矩](#moments)，再做[重试](#retry-moments)。

</details>

</section>

<section class="lesson-check" markdown="1">

### 自己试一试 {#task-quantile}

**Question:** Events occur as a Poisson process of rate 0.25 per minute. Find a time b such that the probability of waiting longer than b minutes for the next event is 0.2. Give b to three significant figures and check which side of b has probability 0.8.

<details markdown="1"><summary>提示</summary>

先判断 0.2 是左侧还是右侧面积。

</details>

<details markdown="1"><summary>解答与回补</summary>

题目给的是右尾：

$$\begin{aligned}
e^{-0.25b}&=0.2,\\
-0.25b&=\ln0.2,\\
b&=-4\ln0.2\\
&\approx6.44.
\end{aligned}$$

答案为 6.44 分钟；左侧概率是 0.8，即 $P(T\le b)=0.8$。若写成 $1-e^{-0.25b}=0.2$，就把事件反过来了。回看[反求时间](#quantiles)，再做[重试](#retry-quantile)。

</details>

</section>

<section class="lesson-check" markdown="1">

### OxfordAQA 考试原题 {#official-task}

OxfordAQA 9660/MA04，January 2025，Q4(c)，包含 Q4(b) 的共享模型条件。保留该情境及本小问英文原文。

**Question:** The number of advertisements which appear on an app in a 30-minute period is modelled as a Poisson distribution with a mean of 10

An advertisement appears at 10.15 am on the app.
Use an exponential distribution to find the probability that no more advertisements appear until after 10.20 am.

Give your answer to three significant figures.

<details markdown="1"><summary>提示</summary>

先算两个钟表时刻之间隔多久，再把区间平均次数换成每分钟的率。

</details>

<details markdown="1"><summary>解答与回补</summary>

按题目隐含的泊松过程解释，令 $T$ 为从 10.15 am 到下一条广告的等待分钟数。率为每分钟 $r=10/30=1/3$，两个时刻相隔五分钟：

$$\begin{aligned}
P(T>5)&=e^{-(1/3)5}\\
&=e^{-5/3}\\
&=0.188875\ldots\approx0.189.
\end{aligned}$$

最终评分标准第 11 页对应率、指数尾部和结果 0.189。另用这五分钟内的泊松均值 $5/3$ 算零次，得到相同结果。若用 10 作每分钟的率，就是混淆区间均值与率；若用 $1-e^{-5/3}$，算的是相反事件。回看[零事件桥梁](#zero-bridge)，再做[重试](#retry-bridge)。

</details>

</section>

## 回补后，换一题再试 {#retry}

收起前面的解答，选择与你的错误对应的新题；除了算式，也要说清为什么选这个事件。

<section class="lesson-check" markdown="1">

### 自己试一试 {#retry-bridge}

**Question:** Defects occur along a cable according to a Poisson process at a rate of 0.4 per metre. Starting at a fixed point, let L be the distance in metres to the next defect. Find P(L > 3) and the expected number of defects in the next 3 metres. Explain why these two answers describe different quantities. A different cable has defects concentrated in tightly clustered groups separated by long undamaged sections, but the same overall average number per metre. Is the same constant-rate exponential model for gaps justified by this information? Explain.

<details markdown="1"><summary>提示</summary>

区间也可以是一段长度，不一定是时间。

</details>

<details markdown="1"><summary>解答与回补</summary>

$L\sim\operatorname{Exp}(0.4)$；接下来的三米没有故障，等价于 $L>3$。

$$\begin{aligned}
P(L>3)&=e^{-0.4(3)}\\
&=e^{-1.2}\approx0.301,\\
E(N(3))&=0.4(3)=1.2.
\end{aligned}$$

0.301 是概率；1.2 是平均次数，可以大于 1。指数分布的率为每米 0.4，不是区间均值 1.2。需要时回看[桥梁](#zero-bridge)。

相同的全局平均数不能保证相同模型。第二条电缆的聚集现象使独立、恒定率和单次发生的假设值得怀疑；不能只凭每米平均数相同就沿用单一指数间隔模型。需要进一步调查缺陷过程，可能要分段或换模型。若仍只看平均数，回看[条件](#waiting-model)，随后用[泊松条件的新重试](/zh/alevel/a2-mathematics/statistics/poisson-distribution/#retry-model)再判断另一种过程。

</details>

</section>

<section class="lesson-check" markdown="1">

### 自己试一试 {#retry-area}

**Question:** A non-negative waiting time T has density 3 exp(-3t) in minutes, and zero density below zero. Find P(-1 < T < 1/3) and P(T >= 1/3). A student says the density is invalid because f(0) = 3. Explain the mistake.

<details markdown="1"><summary>提示</summary>

只有定义域内的那部分区间贡献面积。

</details>

<details markdown="1"><summary>解答与回补</summary>

第一段伸到了零以下，所以积分实际从零开始：

$$\begin{aligned}
P(-1<T<1/3)&=P(0<T<1/3)\\
&=\int_0^{1/3}3e^{-3t}\,dt\\
&=\left[-e^{-3t}\right]_0^{1/3}\\
&=1-e^{-1}\approx0.632,\\
P(T\ge1/3)&=e^{-1}\approx0.368.
\end{aligned}$$

两者之和为 1，因为边界点的概率为零。密度高度可以超过 1；必须等于 1 的是总面积，不是每一点的高度。需要时回看[密度与定义域](#cdf-density)。

</details>

</section>

<section class="lesson-check" markdown="1">

### 自己试一试 {#retry-moments}

**Question:** The mean exponential waiting time is 30 seconds. Give the event rate per minute, mean in minutes, variance in minutes squared and standard deviation in seconds. Find the probability of waiting more than 1 minute.

<details markdown="1"><summary>提示</summary>

先把均值换成分钟，再取倒数。

</details>

<details markdown="1"><summary>解答与回补</summary>

均值为 0.5 分钟，所以率 $r=2$，单位为每分钟。方差为 $0.5^2=0.25$ 平方分钟；标准差为 0.5 分钟，也就是 30 秒。

$$P(T>1)=e^{-2}\approx0.135.$$

方差不是 0.5，率也不是每分钟 30 次。若混淆，回看[单位与矩](#moments)。

</details>

</section>

<section class="lesson-check" markdown="1">

### 自己试一试 {#retry-quantile}

**Question:** An exponential waiting time has mean 5 minutes. Find its median in minutes. Explain whether the median is larger or smaller than the mean, using your result rather than assuming symmetry.

<details markdown="1"><summary>提示</summary>

中位数把累计概率分到一半；先由均值求率。

</details>

<details markdown="1"><summary>解答与回补</summary>

率为每分钟 $r=1/5$。令中位数为 $m$，

$$\begin{aligned}
1-e^{-m/5}&=0.5,\\
e^{-m/5}&=0.5,\\
m&=-5\ln0.5\\
&=5\ln2\approx3.47.
\end{aligned}$$

中位数约为 3.47 分钟，比均值 5 分钟小；长右尾把均值拉向较大的方向。若尾部写反或时间为负，回看[反求概率](#quantiles)。

</details>

</section>

## 学过别的主题，再回来做 {#later-review}

收起所有示范，从情境重新判断。按一次新尝试记录，也记下用过哪些帮助。

<section class="lesson-check" markdown="1">

### 自己试一试 {#later-task}

**Question:** Messages arrive independently and singly at a constant rate of 12 per hour. Find (a) the probability of exactly 1 message in the next 5 minutes, (b) the probability that the wait for the next message is between 5 and 10 minutes, and (c) a time exceeded by only 10% of waits. State your variables and give time answers in minutes.

<details markdown="1"><summary>提示</summary>

先分清每一问是在数次数，还是在量等待时间。

</details>

<details markdown="1"><summary>解答与回补</summary>

令 $N$ 为五分钟内消息次数，$T$ 为到下一条消息的等待分钟数。过程条件支持 $N\sim\operatorname{Po}(1)$ 与 $T\sim\operatorname{Exp}(0.2)$。

$$P(N=1)=e^{-1}\approx0.368.$$

$$\begin{aligned}
P(5<T<10)&=F(10)-F(5)\\
&=e^{-1}-e^{-2}\\
&\approx0.233.
\end{aligned}$$

$$\begin{aligned}
P(T>c)&=0.1,\\
e^{-0.2c}&=0.1,\\
c&=-5\ln0.1\approx11.5.
\end{aligned}$$

最后的时间门槛约为 11.5 分钟。若混淆次数与等待，回看[桥梁](#zero-bridge)并做[重试](#retry-bridge)；区间概率错，回看[面积](#cdf-density)并做[重试](#retry-area)；阈值错，回看[反求时间](#quantiles)并做[重试](#retry-quantile)。

</details>

</section>

## 接下来学什么？ {#next-step}

现在可以把泊松零次数与等待连接起来，检查过程条件，用累计函数或密度面积算概率，由矩反求率，再由概率反求时间。接着学[正态分布](/zh/alevel/a2-mathematics/statistics/normal-distribution/)：密度曲线由这里的单调下降、长右尾，换成对称的形状。也可回到[统计课程](/zh/alevel/a2-mathematics/statistics/)。

<details markdown="1"><summary>来源与范围</summary>

OxfordAQA Mathematics 9660 v5.2 S2.3，印刷第 26 页（PDF 第 25 页），实际从[当前资格页](https://www.oxfordaqa.com/qualification/international-as-and-a-level-mathematics-9660/)和[官方大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf)核对。核心范围为适用条件、累计函数或密度积分算概率、均值方差标准差；矩的证明不作要求。反求时间任务是同一累计函数与对数的应用；不把记忆性加成必考目标。

原题 Q4(c) 及共享情境：[MA04 January 2025 试卷，第 12–13 页](/assets/pdf/fx-cg50/references/oxfordaqa-ma04-2025-january-question-paper.pdf#page=12)；实际配对阅读[最终评分标准，第 10–11 页](/assets/pdf/fx-cg50/references/oxfordaqa-ma04-2025-january-mark-scheme.pdf#page=10)，另行独算率与尾部。其余示范和任务均自拟，不附官方分值。计算核验不代表计算器按键流程已验证，也不能代替学生独立掌握的证据。

</details>

{% include exam_topic_practice.html %}
