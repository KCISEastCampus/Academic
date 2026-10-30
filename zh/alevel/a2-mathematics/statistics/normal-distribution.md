---
title: "正态分布：离平均值有多远？"
layout: subjects
mathjax: true
grade: a2
subject: s2
reading_layout: true
study_page: true
lang: zh-CN
translation_of: /alevel/a2-mathematics/statistics/normal-distribution/
permalink: /zh/alevel/a2-mathematics/statistics/normal-distribution/
toc_headings: "#shape, #standardise, #tables, #inverse, #parameters, #normal-sums, #retry, #later-review, #next-step"
---

[A2 统计课程](/zh/alevel/a2-mathematics/statistics/)
{:.lesson-meta}

比平均数高5个单位，算不算特别大？要看平常波动是1个单位，还是20个单位。这一课把偏离改用“几个标准差”来量，再用面积求概率，或反过来找边界和参数。

需要会[用面积求连续概率](/zh/alevel/a2-mathematics/statistics/continuous-random-variables/)和代数。前一课是[指数分布](/zh/alevel/a2-mathematics/statistics/exponential-distribution/)，那种向一边拖尾的形状与本课的对称模型不同。除标注的改编题外，题目均为自拟，情境数据为构造数据，不附官方分值。先在纸上尝试，再打开帮助。

## 先看中心、宽窄和面积 {#shape}

正态分布（normal distribution）是连续、左右对称的钟形模型。大部分结果在中心附近；中心左右等距离处的密度高度相同，对应区域面积也相同。两边尾巴一直延伸。一个量有均值和标准差，并不意味着它一定正态。

$$X\sim N(\mu,\sigma^2),\qquad \sigma>0.$$

均值 $\mu$ 定出中心，它也等于中位数和众数。括号里第二个参数是方差 $\sigma^2$，不是标准差。标准差 $\sigma$ 控制宽窄：它越大，总面积1就摊得越宽，峰顶越低。

![以mu为中心的对称正态密度，mu减sigma到mu加sigma之间的面积有阴影，标为约0.683。](/assets/img/ma04-normal-area.svg)

均值上下一个标准差内的面积约为68.3%，也就是大约三分之二。外侧两条尾巴各约15.9%。这说的是长期比例，不保证每三次观察一定有两次在里面。单个精确端点的概率为零。

$$P(\mu-\sigma<X<\mu+\sigma)\approx0.683.$$

例如 $X\sim N(50,9)$ 的标准差为 $\sigma=3$，所以大约三分之二在47到53之间。是否用钟形模型，要有情境或数据支持。如果研究的是不能为负的量，还要看看模型在零以下放了多少概率；若不可忽略，这个模型在此处就不合适。

<section class="lesson-check" markdown="1">

### 自己试一试 {#check-shape}

**Question:** A measurement is modelled by $X\sim N(12,4)$. State its median and standard deviation. Give an interval containing approximately two thirds of observations, and estimate $P(X>14)$. A second model for a non-negative duration is $T\sim N(1,9)$. Explain one concern about it.

<details markdown="1"><summary>提示</summary>

先认出方差参数，再找离中心的距离；考虑第二个模型在零以下的部分。

</details>

<details markdown="1"><summary>解答与反馈</summary>

中位数为12，标准差为2。区间为 $(10,14)$；$P(X>14)\approx(1-0.683)/2\approx0.159$。等候时间的标准差3相对均值1很大，会给零以下分配相当大的概率，与时间非负冲突。如果把4当标准差，或把高度当面积，回看[形状与参数](#shape)，再做[新任务](#retry-shape)。

</details>

</section>

## 把偏离换成“几个标准差” {#standardise}

减去 $\mu$，把中心移到零；再除以正的 $\sigma$，就把一个标准差变成一个单位。标准化后为负，表示在均值左边；为正，表示在右边。横轴单位变了，事件对应的概率面积没有变。

$$\begin{aligned}
Z&=\frac{X-\mu}{\sigma},\\
Z&\sim N(0,1).
\end{aligned}$$

例如 $N(50,9)$ 中的56，比均值高两个标准差：$(56-50)/3=2$。若除以方差9，距离就量错了。

## 先看表给的是哪一块面积 {#tables}

定义 $\Phi(z)=P(Z\le z)$，即 $z$ 左边的累计面积。下面的教学小表给左侧累计概率，保留四位小数。完整表中，1.2行与0.03列合起来读的是 $\Phi(1.23)$。先读表头；并不是每张正态表都用这个约定。

| $z$ | $\Phi(z)$ |
|---|---|
| 0.00 | 0.5000 |
| 0.50 | 0.6915 |
| 1.00 | 0.8413 |
| 1.23 | 0.8907 |
| 1.50 | 0.9332 |
| 1.96 | 0.9750 |
| 2.00 | 0.9772 |

负数一侧用对称性。右尾是扣掉左侧后剩下的部分；中间一带是两个左侧累计面积的差。

$$\begin{aligned}
\Phi(-z)&=1-\Phi(z),\\
P(Z>z)&=1-\Phi(z),\\
P(a<Z<b)&=\Phi(b)-\Phi(a).
\end{aligned}$$

若表给中心到边界面积 $A(z)=P(0<Z<z)$（$z>0$），则 $\Phi(z)=0.5+A(z)$，$\Phi(-z)=0.5-A(z)$。若是上尾百分位表，数值 $u$ 对应尾概率 $p$ 的意思是 $P(Z>u)=p$，所以 $\Phi(u)=1-p$。先搞清表给哪一块，再决定减0.5还是减1。

<section class="worked-example" markdown="1">

### 完整示范：先翻译事件，再查表

**Question:** Let $X\sim N(100,16)$. Find $P(X>106)$ and $P(96<X<108)$ to three significant figures.

标准差为4。106在均值右边，所以它右边的概率应该小于0.5。

$$\begin{aligned}
P(X>106)&=P(Z>1.5)\\
 &=1-0.9332\\
 &\approx0.0668.
\end{aligned}$$

$$\begin{aligned}
P(96<X<108)&=P(-1<Z<2)\\
 &=\Phi(2)-\Phi(-1)\\
 &=0.9772-(1-0.8413)\\
 &=0.8185\approx0.819.
\end{aligned}$$

中间区间包含均值，向右延伸得比向左远。要减的是累计面积，不是边界处高度。中间计算保留多几位，最后再取精度；用四位小数表可能有末位差异。

</section>

<section class="lesson-check" markdown="1">

### 自己试一试 {#check-probability}

**Question:** A filling amount is modelled by $X\sim N(20,4)$. Find $P(X<19)$, $P(X>22)$ and $P(19<X<23)$ to three significant figures. Explain why $P(X=20)$ is not 0.5.

<details markdown="1"><summary>提示</summary>

先画三种阴影，再把每个边界换成几个标准差。

</details>

<details markdown="1"><summary>解答与反馈</summary>

$$\begin{aligned}
P(X<19)&=\Phi(-0.5)\\
 &=1-0.6915=0.3085\\
 &\approx0.309,\\
P(X>22)&=1-\Phi(1)\\
 &=0.1587\approx0.159,\\
P(19<X<23)&=\Phi(1.5)-\Phi(-0.5)\\
 &=0.9332-0.3085\\
 &=0.6247\approx0.625.
\end{aligned}$$

$P(X=20)=0$，因为单点没有面积；$P(X\le20)=0.5$ 才是整个左半边。若尾部选反，回看[查表与面积](#tables)；若标准化分母错，回看[标准化](#standardise)，再做[新任务](#retry-probability)。

</details>

</section>

## 已知面积，找回原来的边界 {#inverse}

先把已知面积变成左侧累计概率，找对应的标准正态数值，再把单位换回去。边界若低于均值，$z$ 就应为负。

$$x=\mu+\sigma z.$$

下面列出常用标准正态分位数；它们不是实测数据。实际表可能只给较少位数。大纲接受把 $z$ 取两位小数，不强制插值；联立求参数时，先尽量保留表提供的位数。

| Left probability $p$ | $z$ with $\Phi(z)=p$ |
|---|---|
| 0.10 | $-1.2816$ |
| 0.20 | $-0.8416$ |
| 0.80 | $0.8416$ |
| 0.90 | $1.2816$ |
| 0.95 | $1.6449$ |
| 0.975 | $1.9600$ |

<section class="worked-example" markdown="1">

### 完整示范：找边界，也可以找中心

**Question:** (a) $X\sim N(40,25)$. Find $c$ such that $P(X>c)=0.05$. (b) $Y\sim N(\mu,16)$ and $P(Y<20)=0.9$. Find $\mu$. Give answers to three significant figures.

(a) 左侧面积为0.95，所以 $z=1.6449$。(b) 左侧面积为0.9，说明边界20在未知均值上面，不是在下面。

$$\begin{aligned}
c&=40+5(1.6449)\\
 &=48.2245\approx48.2.
\end{aligned}$$

$$\begin{aligned}
\frac{20-\mu}{4}&=1.2816,\\
\mu&=20-4(1.2816)\\
 &=14.8736\approx14.9.
\end{aligned}$$

检查方向：$c>40$，$20>\mu$，都与已知面积一致。

</section>

<section class="lesson-check" markdown="1">

### 自己试一试 {#check-inverse}

**Question:** (a) $X\sim N(30,9)$. Find the central interval symmetric about the mean containing probability 0.90. (b) $Y\sim N(10,\sigma^2)$ and $P(Y<14)=0.975$. Find $\sigma$. Give answers to three significant figures.

<details markdown="1"><summary>提示</summary>

中央区间外的概率分给左右两尾；标准差必须为正。

</details>

<details markdown="1"><summary>解答与反馈</summary>

(a) 每条尾巴为0.05，故边界用 $z=\pm1.6449$。

$$\begin{aligned}
a&=30-3(1.6449)\approx25.1,\\
b&=30+3(1.6449)\approx34.9.
\end{aligned}$$

(b) 中，

$$\begin{aligned}
\frac{14-10}{\sigma}&=1.96,\\
\sigma&=4/1.96\approx2.04.
\end{aligned}$$

(a) 若用 $z=1.2816$，会让每条尾巴各有0.10，而不是两条总共0.10。回看[反求面积](#inverse)，再做[新任务](#retry-inverse)。

</details>

</section>

## 均值和标准差都未知怎么办？ {#parameters}

一个百分位只给一条方程，把中心与宽度联系起来；许多组参数都可能满足它。再有另一个百分位，就在同一个模型上多定了一个位置。把两式相减，可以先找标准差。

<section class="worked-example" markdown="1">

### 完整示范：两块面积定出两个参数

**Question:** A mass $X$ is modelled by $N(\mu,\sigma^2)$. It exceeds 3.8 kg with probability 0.20 and is below 1.9 kg with probability 0.10. Find $\mu$ and $\sigma$ to three significant figures. (Adapted from OxfordAQA MA04 January 2025 Q5(a).)

上面的条件给右边0.20，因此左边为0.80，对应 $z=0.8416$；下面的条件本身就是左边0.10，对应 $z=-1.2816$。这个负号不能丢。

$$\begin{aligned}
3.8&=\mu+0.8416\sigma,\\
1.9&=\mu-1.2816\sigma.
\end{aligned}$$

$$\begin{aligned}
3.8-1.9&=(0.8416+1.2816)\sigma,\\
1.9&=2.1232\sigma,\\
\sigma&=\frac{1.9}{2.1232}\\
 &\approx0.8948757,\\
\mu&=1.9+1.2816\sigma\\
 &\approx3.0468726.
\end{aligned}$$

所以三位有效数字为 $\mu=3.05$ kg、$\sigma=0.895$ kg。均值在两个边界之间，且更靠近3.8，符合两个标准化距离的大小。代回未取整的两式可以恢复给定百分位。这些是题设总体模型的概率，并不证明所有质量都服从正态。

</section>

<section class="lesson-check" markdown="1">

### 自己试一试 {#check-parameters}

**Question:** A length $L$ is modelled by $N(\mu,\sigma^2)$. It is below 8 cm with probability 0.20 and above 14 cm with probability 0.10. Find $\mu$ and $\sigma$ to three significant figures. Give two equations before solving.

<details markdown="1"><summary>提示</summary>

两条条件都先转成左侧累计概率，再给每个边界配带符号的z值。

</details>

<details markdown="1"><summary>解答与反馈</summary>

$$\begin{aligned}
8&=\mu-0.8416\sigma,\\
14&=\mu+1.2816\sigma,\\
6&=2.1232\sigma,\\
\sigma&\approx2.82592\approx2.83,\\
\mu&=8+0.8416\sigma\\
 &\approx10.3783\approx10.4.
\end{aligned}$$

标准差为正，中心在8与14之间。如果把14处的左侧面积也写成0.10，回看[两个参数](#parameters)，再做[新任务](#retry-parameters)。

</details>

</section>

## 什么时候合计结果仍是正态？ {#normal-sums}

连续随机变量课中，独立性让方差可以相加。本课还有额外信息：每一项本身都是正态。相互独立的正态变量作线性组合，结果精确为正态，不只是近似。这里直接使用这个结论，不要求证明。

$$\begin{aligned}
X_i&\sim N(\mu_i,\sigma_i^2),\\
S&=\sum_{i=1}^n a_iX_i+c,\\
\mu_S&=\sum_{i=1}^n a_i\mu_i+c,\\
\sigma_S^2&=\sum_{i=1}^n a_i^2\sigma_i^2,\\
S&\sim N(\mu_S,\sigma_S^2).
\end{aligned}$$

这条规则要求各个 $X_i$ 相互独立。做差相当于用负系数，方差贡献仍为正。特别地，若 $X\sim N(\mu_X,\sigma_X^2)$ 与 $Y\sim N(\mu_Y,\sigma_Y^2)$ 独立：

$$\begin{aligned}
X+Y&\sim N(m_+,v),\\
X-Y&\sim N(m_-,v),\\
m_+&=\mu_X+\mu_Y,\\
m_-&=\mu_X-\mu_Y,\\
v&=\sigma_X^2+\sigma_Y^2.
\end{aligned}$$

若各项不独立，简单方差相加不一定成立。若各项不是正态，和也不会自动变成正态；只有几项任意变量时，不能随意说“大样本近似”。

<section class="worked-example" markdown="1">

### 完整示范：先定合计分布，再算尾部

**Question:** Independent component masses satisfy $A\sim N(10,1)$, $B\sim N(12,4)$ and $C\sim N(8,4)$. A fixed wrapper has mass 2. Find the distribution of $S=A+B+C+2$ and $P(S>35)$ to three significant figures.

三项随机质量独立且正态。固定包装只改变均值，不增加方差。

$$\begin{aligned}
E(S)&=10+12+8+2=32,\\
\operatorname{Var}(S)&=1+4+4=9,\\
S&\sim N(32,9),\\
P(S>35)&=P(Z>1)\\
 &=1-0.8413\approx0.159.
\end{aligned}$$

合计标准差是 $\sqrt9=3$，不是把三项标准差直接相加。先定出合计的波动，才能标准化合计。

</section>

<section class="lesson-check" markdown="1">

### 自己试一试 {#check-sums}

**Question:** Three independent normal measurements $A,B,C$ have means 5, 4, 3 and variances 1, 4, 4. Define $D=2A-B+C$. Find its distribution and $P(D>15)$ to three significant figures. Compare the distributions of $A_1+A_2+A_3$ and $3A$, where $A_1,A_2,A_3$ are independent copies of $A$.

<details markdown="1"><summary>提示</summary>

先核对分布形状所需条件，再处理带符号的均值和系数平方后的方差。

</details>

<details markdown="1"><summary>解答与反馈</summary>

$$\begin{aligned}
E(D)&=10-4+3=9,\\
\operatorname{Var}(D)&=4+4+4=12,\\
D&\sim N(9,12),\\
P(D>15)&=P(Z>\sqrt3)\\
 &\approx1-\Phi(1.73)\\
 &\approx0.0418.
\end{aligned}$$

直接用未取整的 $\sqrt3$ 约为0.0416；按表取整的答案也可接受。独立三次之和为 $N(15,3)$，而 $3A\sim N(15,9)$。均值相同，分散程度不同。若系数或形状判断错，回看[独立正态合计](#normal-sums)，再做[新任务](#retry-sums)。

</details>

</section>

## 回补后，针对困难再试 {#retry}

先收起旧答案，选对应错误的新题。解释自己的选择，不能只写最后数字。

<section class="lesson-check" markdown="1">

### 自己试一试 {#retry-shape}

**Question:** $Y\sim N(40,36)$. Give its mean, variance and standard deviation, an interval containing approximately two thirds of its values, and an estimate of $P(Y<34)$. Does symmetry alone prove that an arbitrary distribution is normal?

<details markdown="1"><summary>提示</summary>

认清参数记号，并想想对称性究竟提供了什么信息。

</details>

<details markdown="1"><summary>解答与反馈</summary>

均值40，方差36，标准差6；区间为 $(34,46)$，左尾约0.159。仅仅对称不能证明是正态钟形；均匀密度也可以对称。参数或模型有疑问时回看[形状](#shape)。

</details>

</section>

<section class="lesson-check" markdown="1">

### 自己试一试 {#retry-probability}

**Question:** $T\sim N(50,16)$. Find $P(T<44)$ and $P(48<T<54)$ to three significant figures.

<details markdown="1"><summary>提示</summary>

标出两个标准化边界，保留正负号。

</details>

<details markdown="1"><summary>解答与反馈</summary>

$$\begin{aligned}
P(T<44)&=\Phi(-1.5)\\
 &=0.0668,\\
P(48<T<54)&=\Phi(1)-\Phi(-0.5)\\
 &=0.8413-0.3085\\
 &=0.5328\approx0.533.
\end{aligned}$$

两块面积都为正且小于1。若负边界处理错，回看[查表](#tables)。

</details>

</section>

<section class="lesson-check" markdown="1">

### 自己试一试 {#retry-inverse}

**Question:** (a) $X\sim N(70,64)$. Find the lower boundary $b$ such that $P(X<b)=0.20$. (b) $Y\sim N(\mu,9)$ and $P(Y>17)=0.10$. Find $\mu$. (c) $W\sim N(20,\sigma^2)$ and $P(W<18)=0.20$. Find $\sigma$. Give answers to three significant figures.

<details markdown="1"><summary>提示</summary>

左侧面积小于0.5，对应负z；右尾0.1意味着左侧0.9。

</details>

<details markdown="1"><summary>解答与反馈</summary>

$$\begin{aligned}
b&=70-8(0.8416)\approx63.3,\\
17&=\mu+3(1.2816),\\
\mu&=13.1552\approx13.2,\\
\frac{18-20}{\sigma}&=-0.8416,\\
\sigma&=2/0.8416\approx2.38.
\end{aligned}$$

各边界相对均值的位置都符合面积要求。如果符号反了，回看[反求](#inverse)。

</details>

</section>

<section class="lesson-check" markdown="1">

### 自己试一试 {#retry-parameters}

**Question:** A normal variable $X$ satisfies $P(X<4)=0.10$ and $P(X>10)=0.10$. Find its mean and standard deviation to three significant figures. Explain how symmetry checks your mean.

<details markdown="1"><summary>提示</summary>

两条外侧尾巴面积相等。

</details>

<details markdown="1"><summary>解答与反馈</summary>

$$\begin{aligned}
4&=\mu-1.2816\sigma,\\
10&=\mu+1.2816\sigma,\\
\mu&=7,\\
\sigma&=3/1.2816\approx2.34.
\end{aligned}$$

尾面积相等，所以均值在中点7，提供另一个检查。联立方程有困难时回看[参数](#parameters)。

</details>

</section>

<section class="lesson-check" markdown="1">

### 自己试一试 {#retry-sums}

**Question:** Four independent normal times $T_1,T_2,T_3,T_4$ each have mean 5 minutes and variance 1 minute squared. Let $S=T_1+T_2+T_3+T_4$. Find its distribution and $P(S<18)$ to three significant figures. Find the distribution of $T_1-T_2$.

<details markdown="1"><summary>提示</summary>

先算方差，再开方得到标准化要用的标准差。

</details>

<details markdown="1"><summary>解答与反馈</summary>

$S\sim N(20,4)$，所以 $P(S<18)=\Phi(-1)\approx0.159$。差为 $N(0,2)$，方差是 $1+1$，不是零。精确正态结果需要各项独立且正态。若漏了条件，回看[正态合计](#normal-sums)。

</details>

</section>

## 学过另一个主题，再回来做 {#later-review}

不看前面的示范，自己安排步骤，并记录是否能先解释分布再计算。

<section class="lesson-check" markdown="1">

### 自己试一试 {#review-task}

**Question:** Two independent rods have lengths $A\sim N(40,4)$ and $B\sim N(30,5)$ in centimetres. A fixed 1 cm overlap gives assembled length $L=A+B-1$. Find $P(66<L<72)$. Find $c$ such that $P(L>c)=0.10$. State what would need reconsidering if the rod lengths were dependent. Give numerical answers to three significant figures.

<details markdown="1"><summary>提示</summary>

哪些量改变中心，哪些改变波动？题目要的是哪块面积？

</details>

<details markdown="1"><summary>解答与反馈</summary>

独立且正态给出 $L\sim N(69,9)$。

$$\begin{aligned}
P(66<L<72)&=P(-1<Z<1)\\
 &=2(0.8413)-1\\
 &=0.6826\approx0.683,\\
c&=69+3(1.2816)\\
 &=72.8448\approx72.8.
\end{aligned}$$

长度若不独立，就不能假定方差仍为9；仅凭各自正态，也不能保证它们的和正态。形状或方差有错回看[正态合计](#normal-sums)，边界有错回看[反求](#inverse)，然后收起本题解答再做对应重试。

</details>

</section>

## 下一步：平均一组数据会怎样？ {#next-step}

接着学[估计](/zh/alevel/a2-mathematics/statistics/estimation/)。样本均值把多次独立观察平均起来，它的波动与单个观察不同。

<details markdown="1"><summary>来源与范围</summary>

OxfordAQA 9660 v5.2 S2.4，印刷26页／PDF25页：[官方大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf)。两参数示范改编自January 2025 Q5(a)：[试卷PDF14页](/assets/pdf/fx-cg50/references/oxfordaqa-ma04-2025-january-question-paper.pdf#page=14)、[配对最终评分标准PDF12页](/assets/pdf/fx-cg50/references/oxfordaqa-ma04-2025-january-mark-scheme.pdf#page=12)。保留数值条件，缩短情境，不称官方原题。Q5(b)在PDF15页使用样本均值，归入估计课。其他任务自拟。教学表给标准正态累计概率与分位数；未宣称计算器具体操作或学生学习效果已验证。

</details>

{% include exam_topic_practice.html %}
