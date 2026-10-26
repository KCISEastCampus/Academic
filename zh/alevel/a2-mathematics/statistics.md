---
layout: subjects
title: "A2 数学 · 统计学"
mathjax: true
grade: a2
subject: s2
permalink: /zh/alevel/a2-mathematics/statistics/
reading_layout: true
study_page: true
toc_headings: "#start-learning, #learning-route, #mixed-review, #later-review, #reference-notes"
lang: zh-CN
translation_of: /alevel/a2-mathematics/statistics/
---

[全部 A2 数学单元](/zh/alevel/a2-mathematics-overview/)
{:.lesson-meta}

## 从这里开始 {#start-learning}

一次发生几件事、下一次要等多久、样本能不能支持某个说法——这些问题需要不同的统计模型。本课程先解释问题中的量是什么，再用概率、估计与检验作判断。

从[泊松分布](/zh/alevel/a2-mathematics/statistics/poisson-distribution/)开始。已有基础可从下方直接选课。先做题，再按需打开提示或解答；做错后沿具体回补链接重试。所有下列综合题为自拟题，无官方分值。

先修回补：[AS probability](/zh/alevel/as-mathematics/probability/#l18-concept) · [random variables](/zh/alevel/as-mathematics/random-variables/#l19-concept) · [binomial models](/zh/alevel/as-mathematics/binomial/#l21-concept) · [integration](/zh/alevel/a2-mathematics/integration/).

## 推荐学习顺序 {#learning-route}

1. **[数一段时间内有几次](/zh/alevel/a2-mathematics/statistics/poisson-distribution/)** — 确定区间、检查假设，处理计数、独立相加与有条件的近似。
2. **[用面积表示概率](/zh/alevel/a2-mathematics/statistics/continuous-random-variables/)** — 分清密度与概率，求累计概率、均值、方差及变换后的量。
3. **[还要等多久](/zh/alevel/a2-mathematics/statistics/exponential-distribution/)** — 把没有事件发生与继续等待联系起来，求等待概率或时间界限。
4. **[离平均值有多远](/zh/alevel/a2-mathematics/statistics/normal-distribution/)** — 用面积与标准化求概率，从概率反求参数，处理独立正态变量的和。
5. **[用样本估计总体](/zh/alevel/a2-mathematics/statistics/estimation/)** — 区分一次测量与样本均值，估计离散程度，判断抽样模型是精确还是近似。
6. **[检验次数与比例](/zh/alevel/a2-mathematics/statistics/hypothesis-testing/)** — 写假设、选择尾部，核验整数临界边界，再结合情境下结论。
7. **[检验总体平均数](/zh/alevel/a2-mathematics/statistics/mean-tests/)** — 根据总体、样本量和方差信息选择均值检验，并解释结论的边界。

## 学完后，混合使用 {#mixed-review}

下面不按分布名称分题。先写研究的量、模型和条件，再计算。需要提示也没关系，但请把「借助提示完成」和「独立完成」分开记录。

<details markdown="1">
<summary>统计参考值：先决定方法，再查表</summary>

下表混合列出两种参考分布的分位点；它不替你判断哪一种适用。

| Reference distribution | Upper-tail area | Positive boundary |
| --- | --- | --- |
| Standard normal | 0.05 | 1.6449 |
| Standard normal | 0.025 | 1.9600 |
| Student t, df = 8 | 0.05 | 1.8595 |
| Student t, df = 8 | 0.025 | 2.3060 |

两种分布均对称；左尾边界取相反数。

</details>

<section class="lesson-check" markdown="1">

### 任务 1 {#mixed-a}

**Question:** A help desk receives messages according to a Poisson process at a mean rate of 2 per hour. Find (a) the probability of at least one message in 90 minutes and (b) the probability that the wait for the next message exceeds 45 minutes. Explain why the means or rates used in the two calculations differ.

<details markdown="1">
<summary>提示</summary>

计数先写区间；等待题先想这段时间内发生了几次。

</details>

<details markdown="1">
<summary>解答与检查</summary>

90 分钟计数为 $X\sim\operatorname{Po}(3)$，所以 $P(X\ge1)=1-e^{-3}\approx0.950$。等待题用每小时的率 $r=2$，时间 $t=0.75$ 小时。超过这段时间仍在等，就是 45 分钟内没有消息，因此 $P(T>0.75)=e^{-1.5}\approx0.223$。率始终是每小时 2 次；计数均值随区间改变。

按错误选择回补，然后关上答案，做链接中的新重试：

- 区间选错: [概念 / concept](/zh/alevel/a2-mathematics/statistics/poisson-distribution/#interval) → [新重试 / new retry](/zh/alevel/a2-mathematics/statistics/poisson-distribution/#retry-count).
- 等待与计数混淆: [概念 / concept](/zh/alevel/a2-mathematics/statistics/exponential-distribution/#zero-bridge) → [新重试 / new retry](/zh/alevel/a2-mathematics/statistics/exponential-distribution/#retry-bridge).

</details>

</section>

<section class="lesson-check" markdown="1">

### 任务 2 {#mixed-b}

**Question:** A continuous random variable has density $f(x)=2x/9$ for $0\le x\le3$ and zero elsewhere. Verify that it is a density and find its mean and variance. For $Y=4-2X$, find the mean and variance. Two independent variables $X_1,X_2$ each have this density; find the mean and variance of $X_1+X_2$.

<details markdown="1">
<summary>提示</summary>

先检查非负和总面积。求矩时把数值乘密度再积分；方差中的倍数要平方。

</details>

<details markdown="1">
<summary>解答与检查</summary>

密度非负。依次检查总面积、均值和二次矩：

$$\begin{aligned}
\int_0^3\frac{2x}{9}\,dx
&=\left[\frac{x^2}{9}\right]_0^3=1,\\
E(X)&=\int_0^3\frac{2x^2}{9}\,dx\\
&=\left[\frac{2x^3}{27}\right]_0^3=2,\\
E(X^2)&=\int_0^3\frac{2x^3}{9}\,dx\\
&=\left[\frac{x^4}{18}\right]_0^3=\frac92,\\
\operatorname{Var}(X)&=\frac92-2^2=\frac12.
\end{aligned}$$

$$\begin{aligned}
E(Y)&=4-2(2)=0,\\
\operatorname{Var}(Y)&=(-2)^2\left(\frac12\right)=2.
\end{aligned}$$

独立的两次测量相加，均值为 4、方差为 1。方差直接相加需要独立；期望相加不需要。

按错误选择回补，然后关上答案，做链接中的新重试：

- 矩或倍数方差算错: [概念 / concept](/zh/alevel/a2-mathematics/statistics/continuous-random-variables/#moments) → [新重试 / new retry](/zh/alevel/a2-mathematics/statistics/continuous-random-variables/#retry-moments).
- 独立和差错误: [概念 / concept](/zh/alevel/a2-mathematics/statistics/continuous-random-variables/#combinations) → [新重试 / new retry](/zh/alevel/a2-mathematics/statistics/continuous-random-variables/#retry-combinations).

</details>

</section>

<section class="lesson-check" markdown="1">

### 任务 3 {#mixed-c}

**Question:** Packet masses are independent and normally distributed with unknown mean $\mu$ and known standard deviation 4 g. A random sample of 25 packets has mean 501.5 g. At the 5% level, test the claim that the population mean exceeds 500 g. Choose and justify a test before consulting the statistical reference values. Explain what a Type I error would mean here.

<details markdown="1">
<summary>提示</summary>

假设写总体均值；这里要用样本均值的标准差，而不是一包的标准差。

</details>

<details markdown="1">
<summary>解答与检查</summary>

写 $H_0:\mu=500$、$H_1:\mu>500$。在 $H_0$ 下，$\bar X\sim N(500,16/25)$ 是精确分布；所以 $SE=4/\sqrt{25}=0.8$，$z=(501.5-500)/0.8=1.875$。因为 $1.875>1.6449$，拒绝 $H_0$。在 5% 水平下，有足够证据认为总体均值超过 500 g。I 类错误指 $H_0$ 为真却被拒绝：真实均值为 500 g，却得出有证据表明均值超过 500 g 的结论。这不表示这一次结论有 5% 的概率出错。

按错误选择回补，然后关上答案，做链接中的新重试：

- 标准误错误: [概念 / concept](/zh/alevel/a2-mathematics/statistics/mean-tests/#standard-error) → [新重试 / new retry](/zh/alevel/a2-mathematics/statistics/mean-tests/#retry-se).
- 均值检验选法错误: [概念 / concept](/zh/alevel/a2-mathematics/statistics/mean-tests/#known-normal) → [新重试 / new retry](/zh/alevel/a2-mathematics/statistics/mean-tests/#retry-known).
- 错误类型混淆: [概念 / concept](/zh/alevel/a2-mathematics/statistics/hypothesis-testing/#errors) → [新重试 / new retry](/zh/alevel/a2-mathematics/statistics/hypothesis-testing/#retry-errors).

</details>

</section>

## 隔一段时间再回来 {#later-review}

学完其他主题后，先不看原答案，再做这两题。比较自己第一次与这一次的模型选择和理由；若仍卡住，先补对应概念，再重新作答。

<section class="lesson-check" markdown="1">

### 任务 4 {#later-a}

**Question:** (a) Under a proposed exponential model with mean 5 minutes, find the median waiting time. (b) At a separate desk, independent waiting times have a mildly right-skewed population distribution with finite but unknown mean and variance. A random sample of 100 waits has mean 5.8 minutes and sample standard deviation 5 minutes. Test $H_0:\mu=5$ against $H_1:\mu\ne5$ at the 5% level. Choose and justify a method before consulting the statistical reference values, and explain whether its sampling model is exact or approximate.

<details markdown="1">
<summary>提示</summary>

中位数两边各占一半。检验时区分一个等待时间和 100 个等待时间的平均值。

</details>

<details markdown="1">
<summary>解答与检查</summary>

率为 $r=1/5$。中位数满足 $e^{-m/5}=1/2$，得 $m=5\ln2\approx3.47$ 分钟。(b) 是另一个服务台的轻度右偏、有限方差总体。结合独立性和大样本，这些条件支持中央极限定理近似；总体本身并不是正态。估计 $SE=5/\sqrt{100}=0.5$，所以 $z=(5.8-5)/0.5=1.6$。因为 $-1.96<1.6<1.96$，不拒绝 $H_0$。在 5% 水平下，没有足够证据认为总体均值不同于 5 分钟。这不证明均值就是 5。正态近似和估计的标准误使这个检验属于近似检验。

按错误选择回补，然后关上答案，做链接中的新重试：

- 中位数与尾部错误: [概念 / concept](/zh/alevel/a2-mathematics/statistics/exponential-distribution/#quantiles) → [新重试 / new retry](/zh/alevel/a2-mathematics/statistics/exponential-distribution/#retry-quantile).
- 未知方差或近似条件错误: [概念 / concept](/zh/alevel/a2-mathematics/statistics/mean-tests/#large-samples) → [新重试 / new retry](/zh/alevel/a2-mathematics/statistics/mean-tests/#retry-large-unknown).

</details>

</section>

<section class="lesson-check" markdown="1">

### 任务 5 {#later-b}

**Question:** In 20 independent trials with a common success probability $p$, 7 successes are observed. Test $H_0:p=0.2$ against $H_1:p>0.2$ at the 5% level. Find the smallest upper critical value, show the two neighbouring tail probabilities and state the actual significance level. Choose a probability model and justify whether any approximation is needed.

<details markdown="1">
<summary>提示</summary>

拒绝域在整数计数的上尾；检查第一个满足要求的边界和旁边那个整数。

</details>

<details markdown="1">
<summary>解答与检查</summary>

在 $H_0$ 下，$X\sim B(20,0.2)$。精确二项概率为 $P(X\ge7)\approx0.08669$、$P(X\ge8)\approx0.03214$。所以最小上临界值为 8，拒绝域是 $X\ge8$。实际显著性水平约为 3.21%，由于计数离散，低于名义的 5%。观察值 7 不在拒绝域内，因此不拒绝 $H_0$：没有足够证据认为成功概率超过 0.2。精确二项模型可以直接使用；20 与 0.2 也不是很有说服力的大 $n$、小 $p$ 近似情形。

按错误选择回补，然后关上答案，做链接中的新重试：

- 模型与整数边界错误: [概念 / concept](/zh/alevel/a2-mathematics/statistics/hypothesis-testing/#discrete-choice) → [新重试 / new retry](/zh/alevel/a2-mathematics/statistics/hypothesis-testing/#retry-binomial).
- 显著性或结论错误: [概念 / concept](/zh/alevel/a2-mathematics/statistics/hypothesis-testing/#decision) → [新重试 / new retry](/zh/alevel/a2-mathematics/statistics/hypothesis-testing/#retry-regions).

</details>

</section>

## 范围与参考资料 {#reference-notes}

对应 OxfordAQA 9660 v5.2，Unit S2（MA04）的 S2.1–S2.6。讲解与任务分布在上方七课；计算器按键不是本课程已实机验证的内容。 [Official specification](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf).

[旧英文速查笔记](/alevel/a2-mathematics/statistics/#legacy-reference)保留用于查找原链接，不代替上方学习路线。
