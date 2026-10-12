---
layout: subjects
title: fx-CG50 · MA04：统计 S2
description: 泊松与指数分布、分段密度、临界区、z/t 检验、标准误和样本量的计算检查。
lang: zh-CN
author: Eric Shi
study_page: true
cg50_stage: advanced
cg50_unit: ma04
toc_headings: h2, h3
permalink: /alevel/fx-cg50/mathematics/ma04/
---

<link rel="stylesheet" href="{{ '/assets/css/fx-cg50.css' | relative_url }}?v=20261010-routes">

<div class="cg50-guide" markdown="1">

{% include fx-cg50-navigation.html %}

S2 的核心是**选对分布、参数、尾部和检验模型**。本页真题题意为英文改写，参考 [MA04 January 2025 QP]({{ '/assets/pdf/fx-cg50/references/oxfordaqa-ma04-2025-january-question-paper.pdf' | relative_url }}) 与[配套 MS]({{ '/assets/pdf/fx-cg50/references/oxfordaqa-ma04-2025-january-mark-scheme.pdf' | relative_url }})。

先回顾[统计数据与样本标准差]({{ '/alevel/fx-cg50/advanced/' | relative_url }}#task-24)、[离散概率边界]({{ '/alevel/fx-cg50/advanced/' | relative_url }}#task-27)、[正态分位数]({{ '/alevel/fx-cg50/advanced/' | relative_url }}#task-29)。$N(\mu,\sigma^2)$ 的第二个参数是方差，菜单里的 $\sigma$ 输入标准差。

## 二项临界区：检查边界及相邻值 {#ma04-binomial-test}

**Q1(b)，英文题意改写：Find and justify the critical region for $H_0:p=0.2$ against $H_1:p\ne0.2$, using $X\sim\operatorname{Bin}(50,0.2)$ at the 10% significance level.** MS pp4–5。

此题双尾检验按每尾 $5\%$ 寻找边界。

1. **分布 → 二项分布**：$n=50,p=0.2$。
2. 左尾依次输入 $x=5,6$，读取完整概率。
3. 右尾依次输入 $x=16,15$。右尾包含输入的整数边界，不需再加 $1$。

| 事件 | 概率 | 与每尾 $0.05$ 比较 |
| --- | --- | --- |
| $X\le5$ | $0.04802721937\ldots$ | 不超过 |
| $X\le6$ | $0.1033982275\ldots$ | 超过 |
| $X\ge16$ | $0.03080342278\ldots$ | 不超过 |
| $X\ge15$ | $0.06072207963\ldots$ | 超过 |

所以临界区为 **$X\le5$ 或 $X\ge16$**。两端概率总和约 $0.07883$，小于名义 $10\%$；离散变量通常不能使实际显著性水平恰好等于指定值。

原题观测 $X=17$，在临界区内，故拒绝 $H_0$。**答卷保留：** 假设、显著性水平、四个边界概率、临界区与判断；只给边界而不展示相邻概率，未充分完成 justify。

## 泊松概率：换算时间，处理严格区间 {#ma04-poisson}

**Q4(b)，英文题意改写：The number of advertisements is Poisson with mean 2.5 per 7.5 minutes. Find the probability of fewer than 5 in 30 minutes, and of more than 7 but fewer than 13 in 15 minutes.** MS p10。

先统一时间尺度：每分钟率 $r=2.5/7.5=1/3$；30 分钟 $\lambda=10$，15 分钟 $\lambda=5$。

$$P(X=k)=e^{-\lambda}\frac{\lambda^k}{k!}.$$

下面用有限求和输入泊松概率，便于直接检查事件的上下限：

1. 在 **计算·矩阵** 按 `OPTN → F4（计算）→ F6 → F3（Σ(）`，调出[求和模板]({{ '/alevel/fx-cg50/further-mathematics/numerical-calculus/' | relative_url }}#fm-task-21)。
2. 被加项输入 $e^{-10}10^X/(X!)$，求和变量 X、下限 $0$、上限 $4$。$e^{(\ )}$ 用 `SHIFT → ln`；在 X 后按 `OPTN → F6 → F3（概率）→ F1（x!）` 输入阶乘。核对阶乘作用于 X，而不是整个分母。
3. 从被加项按上方向键到上限，输入 $4$；按下方向键，再按左方向键到等号左边输入 X；按右方向键到等号右边输入下限 $0$。核对屏幕上限为 $4$、下方为 X=0。
4. 执行得 $P(X<5)=P(X\le4)=0.02925268808\ldots$，三位有效数字为 $0.0293$。
5. 第二问把参数改为 $5$，被加项 $e^{-5}5^X/(X!)$，下限 $8$、上限 $12$。
6. 得 $P(7<X<13)=0.1313528224\ldots$，三位有效数字为 $0.131$。

<div class="cg50-screens">
<figure><img src="{{ '/assets/img/fx-cg50/ma/ma04-poisson.png' | relative_url }}" width="384" height="216" loading="lazy" data-lazy-ignore alt="对均值 10 的泊松概率从 X=0 到 4 求和，结果为 0.02925268808"><figcaption>有限求和的上下限直接对应整数事件 X≤4。</figcaption></figure>
</div>

若使用泊松累积分布菜单，第二问应等价于 $P(X\le12)-P(X\le7)$；核对菜单结果与上面的有限和相同。不要把边界写成 $7,13$。

**答卷保留：** 按时间换算的 $\lambda$、整数事件与概率。泊松过程模型还需要恒定平均率、独立发生和短时间内多次发生的概率可忽略等条件；计算器不会判断这些假设是否合理。

## 指数等待时间与泊松近似 {#ma04-exponential}

**Q4(c)，英文题意改写：Using the same advertisement rate, find the probability that the waiting time exceeds 5 minutes.** MS p11。

等待时间 $T$ 是连续变量，率为每分钟 $r=1/3$：

$$P(T>t)=e^{-rt}.$$

1. **计算·矩阵** 按 `SHIFT → ln` 调出指数模板，输入 $-5/3$，右方向键离开后 `EXE`。
2. 得 $0.1888756028\ldots$，三位有效数字为 $0.189$。
3. 用泊松视角复核：5 分钟内零次发生的概率 $P(N=0)=e^{-5/3}$ 相同。

自拟补充检查：指数左尾为 $1-e^{-rt}$；分位数由 $1-e^{-rt}=q$ 得 $t=-\ln(1-q)/r$。平均等待时间是 $1/r=3$ 分钟，不能把每分钟率 $1/3$ 当作平均分钟数。

**Q1(c)–(d)，英文题意改写：Approximate $\operatorname{Bin}(80,0.05)$ by a Poisson distribution, then find a 5% lower-tail critical region under mean 4.** MS pp4–5。

当 $n$ 大、$p$ 小时，泊松近似的均值 $\lambda=np=4$。对检验 $H_0:\lambda=4,\ H_1:\lambda<4$：

1. 计算 $P(W=0)=e^{-4}=0.01831563889\ldots$。
2. 计算 $P(W\le1)=e^{-4}(1+4)=0.09157819444\ldots$。
3. $0.0183<0.05<0.0916$，临界区只有 **$W=0$**。原题观测 $W=1$，不在临界区，故不拒绝 $H_0$。

**答卷保留：** 近似条件、参数、两个边界概率。Binomial 的真实概率与其 Poisson 近似应明确区分。

## 分段密度：积分给出概率和矩 {#ma04-density}

**Q2，英文题意改写：For the piecewise density below, find its normalising constant, mean and variance, and investigate $4-5T$.** MS pp6–8。

$$f(t)=\begin{cases}
ct^3,&2\le t\le4,\\
\frac1{10},&4<t\le6,\\
0,&\text{otherwise}.
\end{cases}$$

### 先归一化，再求两个矩

$$\int_2^4ct^3\,dt+\int_4^6\frac1{10}\,dt=60c+\frac15=1,
\qquad c=\frac1{75}.$$

1. **计算·矩阵** 用定积分模板分别算两段；先以 $c=1/75$ 检查总面积为 $1$。
2. 均值输入两个积分相加：$\int_2^4X^4/75\,dX+\int_4^6X/10\,dX$，得 $3.645333333\ldots$。
3. 二阶矩输入 $\int_2^4X^5/75\,dX+\int_4^6X^2/10\,dX$，得 $14.02666667\ldots$。
4. 方差用**未舍入的**二阶矩减均值平方，得 $0.7382115556\ldots$，三位有效数字为 $0.738$。

纸上保留精确值：

$$E(T)=\frac{1367}{375},\qquad E(T^2)=\frac{1052}{75}.$$

$$\operatorname{Var}(T)=\frac{1052}{75}-\left(\frac{1367}{375}\right)^2.$$

### 线性变换与 CDF

$$E(4-5T)=4-5E(T)=-\frac{1067}{75}.$$

$$\operatorname{Var}(4-5T)=25\operatorname{Var}(T)\approx18.5.$$

方差乘系数的**平方**，常数平移不改变方差。不能把 $4$ 也加到方差上。

自拟补充检查：由同一密度求 CDF：

$$F(t)=\begin{cases}
0,&t<2,\\
\frac{t^4-16}{300},&2\le t\le4,\\
0.8+\frac{t-4}{10},&4<t\le6,\\
1,&t>6.
\end{cases}$$

用 **计算·矩阵** 代入 $t=2,4,6$，核对 $F(t)=0,0.8,1$；各接点连续，且全程不下降。求概率可用 $F(b)-F(a)$，密度值 $f(t)$ 本身不是点概率。

**答卷保留：** 分段区间、归一化、$tf(t)$ 与 $t^2f(t)$ 的积分、方差公式。题目要求 exact 时，数值积分不能代替原函数与分数答案。

## z 检验：标准误不是单个数据的标准差 {#ma04-z-test}

**Q3，英文题意改写：Lap times are normal with known $\sigma=30$ s. A sample of 10 has total 2205 s. Test whether the mean has increased from 205 s at the 5% level.** MS p9。

$$H_0:\mu=205,\qquad H_1:\mu>205.$$

$$\bar x=220.5,\qquad z=\frac{220.5-205}{30/\sqrt{10}}.$$

1. **计算·矩阵** 输入 $(2205/10-205)/(30/\sqrt{10})$，得 $z=1.633843458\ldots$。
2. **分布 → 正态分布** 选右尾，$x=z,\sigma=1,\mu=0$；使用完整 z 值，得 $p\approx0.0511$。
3. 因 $p>0.05$，不拒绝 $H_0$。也可用右尾 $5\%$ 临界值 $1.644853627\ldots$ 比较，结论相同。

**答卷保留：** 两个假设、已知总体标准差的条件、$\sigma/\sqrt n$、统计量、尾概率与情境结论：**There is insufficient evidence at the 5% level that the mean lap time has increased.**

$\sigma/\sqrt n$ 是样本均值的标准误（standard error），不是样本数据的标准差。此题统计量接近边界，不要把它先舍入到 $1.6$。

## t 检验：使用样本标准差和自由度 {#ma04-t-test}

**Q7，英文题意改写：Use the eight recorded masses to estimate the variance and test whether the normal population mean is below 9 g at the 5% level.** MS pp15–16。

数据：$8.99,\ 8.96,\ 8.99,\ 9.02,\ 8.95,\ 8.98,\ 8.97,\ 9.01$。

1. 按[单变量统计教程]({{ '/alevel/fx-cg50/advanced/' | relative_url }}#task-24)，使用一列完整输入八个值。先检查没有混入旧值；频数设为 **1**，不要沿用 MA02 的权重列表。
2. 执行单变量计算，核对 $n=8,\bar x=8.98375$，读取**样本**标准差 $s_x$，约 $0.02386719207$。
3. 在 **计算·矩阵** 计算 $s_x^2$，与 $319/560000\approx0.0005696428571\ \mathrm{g^2}$ 核对。
4. 使用完整的 $\bar x,s_x$，计算 $t=(\bar x-9)/(s_x/\sqrt8)$，得 $-1.925737248\ldots$。
5. 自由度 $8-1=7$。按考试提供的 t 表读取单尾 $5\%$ 临界值 $-1.895$。
6. $-1.9257<-1.895$，拒绝 $H_0$。

$$H_0:\mu=9,\qquad H_1:\mu<9.$$

**答卷保留：** 样本均值、无偏方差估计、总体正态假设、t 统计量、自由度和比较。英文结论：**There is sufficient evidence at the 5% level that the mean mass is less than 9 g.**

总体方差未知，不能把 $s_x$ 当作已知 $\sigma$ 后改用标准正态检验；也不能从计算器读取总体标准差 $\sigma_x$ 来替代 $s_x$。使用 t 表时核对它标的是单尾面积还是双尾面积。

## 反求分位数，再决定整数样本量 {#ma04-sample-size}

**Q5(b)，英文题意改写：Find the least $n$ such that a sample mean from $N(0.80,0.25^2)$ is below 0.82 with probability greater than 0.74.** MS p12。

由

$$P(\bar X<0.82)=\Phi\left(\frac{0.02\sqrt n}{0.25}\right)>0.74$$

得 $\frac{0.02\sqrt n}{0.25}>\Phi^{-1}(0.74)$。

1. 按[反求分位数教程]({{ '/alevel/fx-cg50/advanced/' | relative_url }}#task-29)，在标准正态左尾输入概率 $0.74$，得 $z_{0.74}=0.6433454054\ldots$。
2. 用未舍入值计算 $(z_{0.74}\times0.25/0.02)^2$，得 $64.67082979\ldots$。
3. $n$ 是正整数且不等式严格，最小取 **$65$**。代回检查 $n=64$ 的概率约 $0.7389<0.74$，$n=65$ 的概率约 $0.7405>0.74$。

**答卷保留：** 样本均值分布、标准化、分位数不等式与整数取值。这里要求向上取满足条件的整数，不能四舍五入样本量。

## 单元完成检查 {#ma04-check}

- 泊松参数随时间长度变化；指数率与平均等待时间互为倒数。
- 连续密度通过积分给概率；CDF 接点连续、单调且介于 $0,1$。
- 检验尾部由 $H_1$ 决定，临界区用未舍入概率决定。
- 已知总体 $\sigma$ 用 z；正态总体且 $\sigma$ 未知的小样本用 t 和 $n-1$ 自由度。
- “不拒绝”不等于证明 $H_0$ 为真；结论写回情境。

[下一单元：MA05 力学 M2]({{ '/alevel/fx-cg50/mathematics/ma05/' | relative_url }}) · [返回考试应用路线]({{ '/alevel/fx-cg50/mathematics/' | relative_url }})。

</div>
