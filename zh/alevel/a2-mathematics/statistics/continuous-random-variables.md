---
title: "连续随机变量：曲线下面积告诉我们什么？"
layout: subjects
mathjax: true
grade: a2
subject: s2
reading_layout: true
study_page: true
lang: zh-CN
translation_of: /alevel/a2-mathematics/statistics/continuous-random-variables/
permalink: /zh/alevel/a2-mathematics/statistics/continuous-random-variables/
toc_headings: "#density, #area, #cdf, #quantiles, #moments, #linear, #functions, #combinations, #retry, #later-review, #next-step"
---

[A2 统计课程](/zh/alevel/a2-mathematics/statistics/)
{:.lesson-meta}

消息条数只能是一个个整数，等候时间却可以是2.1秒、2.11秒，或两者之间的任何值。没有一根根分开的概率柱，机会大小该怎样算？

这一课从面积出发，学会累计概率、反求边界，以及变换和合计后的平均与波动。需要会定积分和加权平均；必要时先回补[积分课](/zh/alevel/a2-mathematics/integration/)。前一课是[泊松分布](/zh/alevel/a2-mathematics/statistics/poisson-distribution/)。除标注的改编示范外，题目均为自拟，情境数据为构造数据，不附官方分值。先在纸上尝试，再打开帮助。

## 曲线高度为什么不是概率？ {#density}

连续随机变量可以在一段范围内取值。有概率密度的模型中，单个精确值对应的宽度为零，所以概率为零；这不等于它“不可能出现”。仪器显示“2.1秒”通常代表四舍五入后的一小段范围，这一段可以有正的概率。

密度 $f(x)$ 描述 $x$ 附近的概率有多“挤”。一小条的概率约为 $f(x)\Delta x$，即高度乘宽度。把细条相加，就得到积分。若 $x$ 的单位是秒，密度单位就是每秒；概率本身没有单位。

$$P(a<X<b)=\int_a^b f(x)\,dx.$$

所以 $P(X=a)=0$，区间端点用小于还是小于等于，都不影响这个连续模型的概率。不能把这结论照搬给离散次数。

## 怎样的曲线才是密度？ {#area}

概率不能为负，所有可能结果的总概率必须是1。因此密度在取值范围内非负，范围外为零，整个范围的积分为1。高度可以超过1，总面积不能超过1。

<section class="worked-example" markdown="1">

### 完整示范：越往右，概率越密

**Question:** Let $f(x)=kx$ for $0\le x\le2$, and zero otherwise. Find $k$ and $P(1<X\le2)$.

先用总面积确定高度比例，再只积分题目要的那一段。

$$\begin{aligned}
1&=\int_0^2 kx\,dx\\
 &=k\left[\frac{x^2}{2}\right]_0^2\\
 &=k(2-0),\quad k=\frac12.
\end{aligned}$$

$$\begin{aligned}
P(1<X\le2)&=\int_1^2\frac{x}{2}\,dx\\
 &=\left[\frac{x^2}{4}\right]_1^2\\
 &=1-\frac14=\frac34.
\end{aligned}$$

密度在范围内非负。右半段曲线更高，装了超过一半的概率，答案仍小于1。

</section>

![密度从(0,0)上升到(2,1)，曲线下1到2之间的面积有阴影；纵轴是密度。](/assets/img/ma04-density-area.svg)

阴影这一整块代表事件。横坐标为1的那条竖线没有面积，不增加概率。

<section class="lesson-check" markdown="1">

### 自己试一试 {#check-area}

**Question:** A proposed density is $f(x)=c$ on $0\le x\le0.25$ and zero elsewhere. Find $c$, $P(X=0.1)$ and $P(X>0.1)$. A second proposal is $h(x)=2x-1$ on $0\le x\le2$, zero elsewhere. Can it be a density? Justify your decisions.

<details markdown="1"><summary>提示</summary>

分别检查非负和总面积；分清单点与区间。

</details>

<details markdown="1"><summary>解答与反馈</summary>

矩形面积 $0.25c=1$，所以 $c=4$，高度为4没有问题。$P(X=0.1)=0$，而 $P(X>0.1)=4(0.25-0.1)=0.6$。第二个函数在 $x<0.5$ 时为负，总积分还是2，两项条件都不满足。若把高度直接当概率，回看[面积条件](#area)，再做[新任务](#retry-area)。

</details>

</section>

## 从左往右，把概率存起来 {#cdf}

累计分布函数（CDF）$F(x)$ 是“不超过 $x$ 为止，左边已经累积了多少概率”。它从0开始，只能增加或保持不变，最终到1。有密度的模型中，CDF连续，即使密度本身有跳跃；在可导处，CDF的斜率就是密度。

$$\begin{aligned}
F(x)&=P(X\le x)\\
 &=\int_{-\infty}^x f(t)\,dt,\\
f(x)&=F'(x).
\end{aligned}$$

$$P(a<X\le b)=F(b)-F(a).$$

刚才的密度 $x/2$ 从0开始累积，到2收集完毕。不能只写中间一段，还要检查连接处。

$$F(x)=\begin{cases}
0,&x<0,\\
x^2/4,&0\le x\le2,\\
1,&x>2.
\end{cases}$$

中间公式在0处给0，在2处给1，接起来没有断口。如果密度分几段，进入后一段时要带上前面已经收集的面积，不能重新从零开始。

<section class="worked-example" markdown="1">

### 完整示范：跨过分段点

**Question:** The density of $T$ is $ct^3$ on $2\le t\le4$, $1/10$ on $4<t\le6$, and zero otherwise. Find $c$ and its full CDF. (Adapted from OxfordAQA MA04 January 2025 Q2.)

两段密度的规则不同，所以在4处分开积分。

$$\begin{aligned}
1&=\int_2^4 ct^3\,dt+\int_4^6\frac1{10}\,dt\\
 &=c\left[\frac{t^4}{4}\right]_2^4
   +\left[\frac{t}{10}\right]_4^6\\
 &=60c+\frac15,\\
c&=\frac1{75}.
\end{aligned}$$

当 $2\le t\le4$ 时，从2积到 $t$；到4时已经收集了 $4/5$。当 $4<t\le6$ 时，在这 $4/5$ 上面加上4到 $t$ 的矩形面积。

$$F_T(t)=\begin{cases}
0,&t<2,\\
(t^4-16)/300,&2\le t\le4,\\
4/5+(t-4)/10,&4<t\le6,\\
1,&t>6.
\end{cases}$$

三个边界依次给0、$4/5$、1，接得上。各段内部求导可以回到密度；转折点没有导数，也不妨碍计算概率。

</section>

## 已知概率，反过来找边界 {#quantiles}

分位数就是把计算倒过来：找累计概率达到指定数值的位置。如果给的是右尾概率，先变成左侧累计概率。解完后，要检查答案是否在所用公式对应的范围内。

中位数 $m$ 把面积一分为二，所以 $F(m)=0.5$。它不一定等于均值。

<section class="worked-example" markdown="1">

### 完整示范：右边还剩多少？

**Question:** For $f(x)=x/2$ on $0\le x\le2$, zero elsewhere, find $q$ such that $P(X>q)=0.1$.

右边剩0.1，左边就是0.9。选取值范围内那一段CDF。

$$\begin{aligned}
F(q)&=0.9,\\
q^2/4&=0.9,\\
q&=\sqrt{3.6}\approx1.897.
\end{aligned}$$

负根不在 $0\le q\le2$ 内，舍去。右边只留很小一块，边界应靠右，结果合理。

</section>

<section class="lesson-check" markdown="1">

### 自己试一试 {#check-cdf}

**Question:** A CDF is 0 for $x<0$, $ax^2$ for $0\le x\le1$, $1-b(2-x)^2$ for $1<x\le2$, and 1 for $x>2$. Its density at $x=0.5$ is $0.6$. Find $a,b$, its density on the interior intervals, $P(0.5<X<1.5)$ and its median.

<details markdown="1"><summary>提示</summary>

用0.5处的导数和1处的连续性。找中位数时先确定累计概率0.5在哪段。

</details>

<details markdown="1"><summary>解答与反馈</summary>

$f(0.5)=2a(0.5)=0.6$，所以 $a=0.6$。在1处连续给出 $a=1-b$，故 $b=0.4$。

$$f(x)=\begin{cases}
1.2x,&0<x<1,\\
0.8(2-x),&1<x<2,\\
0,&x<0\text{ or }x>2.
\end{cases}$$

密度在几个孤立连接点取什么值不改变面积。$F(0.5)=0.15$，$F(1.5)=0.9$，相减得 $0.75$。因为 $F(1)=0.6$，中位数在1左边：

$$m=\sqrt{5/6}\approx0.913.$$

若求导时符号错，回看[CDF](#cdf)；若分段选错，回看[反求边界](#quantiles)，再做[新任务](#retry-cdf)。

</details>

</section>

## 把加权平均变成积分 {#moments}

离散变量的均值是“每个值乘它的概率”再相加。连续模型中，小条的概率约为 $f(x)\Delta x$，再乘这个位置的 $x$ 并相加，就得到均值。波动大小则看各结果离均值的距离平方，再求平均。下面的矩公式要求相应积分存在。

$$\begin{aligned}
\mu=E(X)&=\int x f(x)\,dx,\\
E(X^2)&=\int x^2 f(x)\,dx,\\
\operatorname{Var}(X)&=E((X-\mu)^2)\\
 &=E(X^2)-\mu^2,\\
\operatorname{SD}(X)&=\sqrt{\operatorname{Var}(X)}.
\end{aligned}$$

每个积分都要覆盖完整取值范围，遇到密度变段就拆开。方差单位要平方，标准差回到原单位。二阶矩还不是方差，必须再减去均值的平方。

<section class="worked-example" markdown="1">

### 完整示范：平均在哪里，分散有多大？

**Question:** For $f(x)=x/2$ on $0\le x\le2$, zero elsewhere, find $E(X)$, $\operatorname{Var}(X)$ and the standard deviation.

$$\begin{aligned}
E(X)&=\int_0^2 x\frac{x}{2}\,dx\\
 &=\left[\frac{x^3}{6}\right]_0^2=\frac43,\\
E(X^2)&=\int_0^2 x^2\frac{x}{2}\,dx\\
 &=\left[\frac{x^4}{8}\right]_0^2=2,\\
\operatorname{Var}(X)&=2-\left(\frac43\right)^2\\
 &=\frac29,\\
\operatorname{SD}(X)&=\frac{\sqrt2}{3}\approx0.471.
\end{aligned}$$

均值在取值范围内，而且比1大，符合右边概率较多的图像；方差为正。

</section>

## 换单位与整体平移 {#linear}

加同一个常数，会把所有结果一起平移，结果之间的距离不变。乘 $a$ 会把距离放大为原来的绝对倍数，距离平方就变成 $a^2$ 倍。

$$\begin{aligned}
E(aX+b)&=aE(X)+b,\\
\operatorname{Var}(aX+b)&=a^2\operatorname{Var}(X),\\
\operatorname{SD}(aX+b)&=\lvert a\rvert\operatorname{SD}(X).
\end{aligned}$$

例如刚才的 $X$ 若变成 $Y=4-5X$，均值为 $4-5(4/3)=-8/3$，方差为 $25(2/9)=50/9$。负号会反转大小顺序，却不会让方差为负。

<section class="lesson-check" markdown="1">

### 自己试一试 {#check-moments}

**Question:** A variable $U$ has density $3u^2$ on $0\le u\le1$, zero elsewhere. Find its mean, variance and standard deviation. A score is $S=10-4U$. Find its mean and variance, explaining the effect of the minus sign.

<details markdown="1"><summary>提示</summary>

先分别求一阶、二阶矩，再处理分数变化。

</details>

<details markdown="1"><summary>解答与反馈</summary>

$$\begin{aligned}
E(U)&=\int_0^1 3u^3\,du
 =[3u^4/4]_0^1=\frac34,\\
E(U^2)&=\int_0^1 3u^4\,du
 =[3u^5/5]_0^1=\frac35,\\
\operatorname{Var}(U)&=\frac35-\frac9{16}
 =\frac3{80},\\
\operatorname{SD}(U)&=\sqrt{3/80}\approx0.194,\\
E(S)&=10-4(3/4)=7,\\
\operatorname{Var}(S)&=16(3/80)=\frac35.
\end{aligned}$$

负系数反转结果大小顺序，方差却由系数的平方控制。若把 $E(U^2)$ 直接当方差，回看[矩](#moments)；若系数出错，回看[换单位](#linear)，再做[新任务](#retry-moments)。

</details>

</section>

## 先算每次输出，再求平均 {#functions}

非线性变化中，输入多一点，输出未必总是多同样一点。因此一般不能把 $E(g(X))$ 写成 $g(E(X))$。应该先想每个输入 $x$ 会产生什么输出 $g(x)$，再用原密度作加权平均；只求这些矩时，不必先求新变量的密度。

$$\begin{aligned}
Y&=g(X),\\
E(Y)&=\int g(x)f(x)\,dx,\\
E(Y^2)&=\int (g(x))^2f(x)\,dx,\\
\operatorname{Var}(Y)&=E(Y^2)-[E(Y)]^2.
\end{aligned}$$

求 $E(Y^2)$ 时，要把整个输出 $g(x)$ 平方。例如 $g(x)=5x^2$，平方后就要用 $25x^4$。倒数函数还要检查分母，以及所需的矩是否存在。本课例子让输入远离零，不需要瑕积分方法。

<section class="worked-example" markdown="1">

### 完整示范：倒数也能这样平均

**Question:** Let $X$ have density 1 on $1\le x\le2$, zero elsewhere. For $Y=6/X$, find $E(Y)$ and $\operatorname{Var}(Y)$.

这里 $x\ge1$，分母始终远离零。第二次积分前先把 $6/x$ 整体平方。

$$\begin{aligned}
E(Y)&=\int_1^2\frac6x\,dx\\
 &=6[\ln x]_1^2=6\ln2,\\
E(Y^2)&=\int_1^2\frac{36}{x^2}\,dx\\
 &=36[-x^{-1}]_1^2=18,\\
\operatorname{Var}(Y)&=18-36(\ln2)^2\\
 &\approx0.704.
\end{aligned}$$

输出在3到6之间，均值约4.159，落在范围内；它不同于 $6/E(X)=4$。

</section>

<section class="lesson-check" markdown="1">

### 自己试一试 {#check-functions}

**Question:** Let $V$ have density 1 on $0\le v\le1$, zero elsewhere. A loss is $L=5V^2$. Find $E(L)$ and $\operatorname{Var}(L)$. Compare $E(L)$ with $5[E(V)]^2$.

<details markdown="1"><summary>提示</summary>

求损失的二阶矩时，把整个损失平方。

</details>

<details markdown="1"><summary>解答与反馈</summary>

$$\begin{aligned}
E(L)&=5\int_0^1v^2\,dv=\frac53,\\
E(L^2)&=25\int_0^1v^4\,dv=5,\\
\operatorname{Var}(L)&=5-\frac{25}{9}=\frac{20}{9}.
\end{aligned}$$

$E(V)=1/2$，所以 $5[E(V)]^2=5/4$，不是 $5/3$。

若先平均输入再平方，回看[函数的矩](#functions)，再做[新任务](#retry-functions)。

</details>

</section>

## 加几次不同结果，还是同一个结果乘几倍？ {#combinations}

求和时，各部分平均贡献相加。减掉一个结果，会反转它对均值的贡献，却不会消掉它自身的不确定性。若变量相互独立且方差有限，方差先乘系数平方再相加。这个方差规则需要独立性；均值的线性规则不需要独立性。

$$\begin{aligned}
E(aX\pm bY)&=aE(X)\pm bE(Y),\\
\operatorname{Var}(aX\pm bY)
 &=a^2\operatorname{Var}(X)\\
 &\quad+b^2\operatorname{Var}(Y).
\end{aligned}$$

$$\begin{aligned}
S&=\sum_{i=1}^n a_iX_i+c,\\
E(S)&=\sum_{i=1}^n a_iE(X_i)+c,\\
\operatorname{Var}(S)
 &=\sum_{i=1}^n a_i^2\operatorname{Var}(X_i).
\end{aligned}$$

最后一条要求这些 $X_i$ 相互独立。不独立时可能需要协方差项，仅靠各自的矩不能定出合计方差。只知道均值和方差，也不能推定分布形状。

<section class="worked-example" markdown="1">

### 完整示范：三项一起合计

**Question:** Independent continuous variables $A,B,C$ have means $2,3,4$ and variances $1,4,9$, respectively. Find the mean, variance and standard deviation of $W=2A-B+C+5$. Compare the variance of $A_1+A_2+A_3$ with that of $3A$, where $A_1,A_2,A_3$ are independent copies of $A$.

均值保留加减号；方差把系数平方后各项相加。

$$\begin{aligned}
E(W)&=2(2)-3+4+5=10,\\
\operatorname{Var}(W)&=4(1)+4+9=17,\\
\operatorname{SD}(W)&=\sqrt{17}\approx4.12.
\end{aligned}$$

$$\begin{aligned}
\operatorname{Var}(A_1+A_2+A_3)&=3,\\
\operatorname{Var}(3A)&=9.
\end{aligned}$$

三次独立结果的偏高偏低可以部分抵消；同一个随机结果重复三次，每次偏差都一起放大三倍，这三项并不独立。

</section>

<section class="lesson-check" markdown="1">

### 自己试一试 {#check-combinations}

**Question:** Four independent measurements $X_1,X_2,X_3,X_4$ each have mean 10 and variance 4. Define $D=X_1+X_2-X_3-X_4$ and $M=(X_1+X_2+X_3+X_4)/4$. Find their means and variances. Would your variance calculation for $D$ remain valid if $X_3=X_1$ and $X_4=X_2$?

<details markdown="1"><summary>提示</summary>

先判断各项是否独立，再选方差规则。

</details>

<details markdown="1"><summary>解答与反馈</summary>

$E(D)=0$，$\operatorname{Var}(D)=4+4+4+4=16$。$E(M)=10$，$\operatorname{Var}(M)=16/16=1$。改变条件后 $D=0$ 对每次结果都成立，方差为0；不能继续假定各项独立。若减了方差或混淆独立副本与重复使用，回看[合计](#combinations)，再做[新任务](#retry-combinations)。

</details>

</section>

## 回补后，换一个任务再试 {#retry}

先收起前面的解答，选择对应错误的新题，并记录是否用过帮助。

<section class="lesson-check" markdown="1">

### 自己试一试 {#retry-area}

**Question:** A variable is uniform on $[2,2.2]$. Find its density height and the probability that it lies between 2.05 and 2.15. Explain why a density height cannot be read as a probability.

<details markdown="1"><summary>提示</summary>

画总面积为1的矩形。

</details>

<details markdown="1"><summary>解答与反馈</summary>

高度为5，区间概率为 $5(0.1)=0.5$。高度必须乘宽度才得到面积，本身不是概率；仍有困难时回看[密度含义](#density)。

</details>

</section>

<section class="lesson-check" markdown="1">

### 自己试一试 {#retry-cdf}

**Question:** The density is $1/3$ on $[0,1]$, $2/3$ on $(1,2]$, and zero elsewhere. Write the full CDF and find $q$ such that $P(X>q)=1/3$.

<details markdown="1"><summary>提示</summary>

把第一段的面积带入第二段。

</details>

<details markdown="1"><summary>解答与反馈</summary>

先保留第一段面积，再加第二段累计的面积：

$$\frac13+\frac{2(x-1)}3=\frac{2x-1}3.$$

$$F(x)=\begin{cases}
0,&x<0,\\
x/3,&0\le x\le1,\\
(2x-1)/3,&1<x\le2,\\
1,&x>2.
\end{cases}$$

$F(q)=2/3$，用第二段得 $q=1.5$。连接处依次为0、$1/3$、1；若重新从零开始，回看[CDF](#cdf)。

</details>

</section>

<section class="lesson-check" markdown="1">

### 自己试一试 {#retry-moments}

**Question:** A variable has density $2(1-x)$ on $[0,1]$, zero elsewhere. Find its mean and variance. Find the standard deviation of $Z=3-2X$.

<details markdown="1"><summary>提示</summary>

用带权积分，不能直接拿区间中点。

</details>

<details markdown="1"><summary>解答与反馈</summary>

$$\begin{aligned}
E(X)&=[x^2-2x^3/3]_0^1=\frac13,\\
E(X^2)&=[2x^3/3-x^4/2]_0^1=\frac16,\\
\operatorname{Var}(X)&=\frac16-\frac19=\frac1{18},\\
\operatorname{SD}(Z)&=2\sqrt{1/18}=\frac{\sqrt2}{3}.
\end{aligned}$$

零附近密度较大，把均值拉向左边。根据出错步骤回看[矩](#moments)或[线性变化](#linear)。

</details>

</section>

<section class="lesson-check" markdown="1">

### 自己试一试 {#retry-functions}

**Question:** A variable $X$ has density $2/x^2$ on $[1,2]$, zero elsewhere. Check it is a density. For $Y=1/X$, find its mean, variance and standard deviation.

<details markdown="1"><summary>提示</summary>

分别用输出和输出平方乘密度，再积分。

</details>

<details markdown="1"><summary>解答与反馈</summary>

$$\begin{aligned}
\int_1^2 2x^{-2}\,dx&=[-2/x]_1^2=1,\\
E(Y)&=\int_1^2 2x^{-3}\,dx\\
 &=[-x^{-2}]_1^2=\frac34,\\
E(Y^2)&=\int_1^2 2x^{-4}\,dx\\
 &=[-2/(3x^3)]_1^2=\frac7{12},\\
\operatorname{Var}(Y)&=\frac7{12}-\frac9{16}=\frac1{48},\\
\operatorname{SD}(Y)&=\sqrt{1/48}.
\end{aligned}$$

密度非负，且 $x$ 远离零。如果把均值直接代入 $1/x$，回看[函数的矩](#functions)。

</details>

</section>

<section class="lesson-check" markdown="1">

### 自己试一试 {#retry-combinations}

**Question:** Independent $A,B,C$ have means 1, 2, 3 and variances 2, 3, 4. Find the mean, variance and standard deviation of $A-2B+3C$. Is its distribution necessarily normal?

<details markdown="1"><summary>提示</summary>

均值保留符号，方差平方系数；矩与分布形状分开判断。

</details>

<details markdown="1"><summary>解答与反馈</summary>

均值为 $1-4+9=6$，方差为 $2+4(3)+9(4)=50$，标准差为 $\sqrt{50}$。仅凭这些矩，不能断定正态形状。若漏掉独立条件或符号处理，回看[合计](#combinations)。

</details>

</section>

## 学过另一个主题，再回来做 {#later-review}

收起示范，自己选择步骤，并解释积分范围、分段与独立条件。

<section class="lesson-check" markdown="1">

### 自己试一试 {#review-task}

**Question:** A sensor has density $2x$ on $[0,1]$, zero elsewhere. A recorded output is $Y=X^2$. Find $P(Y>0.64)$, $E(Y)$ and $\operatorname{Var}(Y)$. Four independent sensors give outputs with this same model. Find the mean and variance of their total.

<details markdown="1"><summary>提示</summary>

先把输出事件转回允许的输入范围，再分清一次输出的矩与独立多次输出合计的矩。

</details>

<details markdown="1"><summary>解答与反馈</summary>

因 $X\ge0$，$Y>0.64$ 等价于 $X>0.8$。

$$\begin{aligned}
P(Y>0.64)&=\int_{0.8}^1 2x\,dx=0.36,\\
E(Y)&=\int_0^1 2x^3\,dx=\frac12,\\
E(Y^2)&=\int_0^1 2x^5\,dx=\frac13,\\
\operatorname{Var}(Y)&=\frac13-\frac14=\frac1{12}.
\end{aligned}$$

四次独立输出合计的均值为2，方差为 $1/3$。事件错误回看[边界](#quantiles)，矩错误回看[函数](#functions)，合计错误回看[独立合计](#combinations)，然后不借帮助再做对应的新重试。

</details>

</section>

## 下一步：用面积描述等候时间 {#next-step}

接着学[指数分布](/zh/alevel/a2-mathematics/statistics/exponential-distribution/)，把这些面积想法与泊松事件之间的等候时间连起来。

<details markdown="1"><summary>来源与范围</summary>

OxfordAQA 9660 v5.2，S2.2，印刷25–26页／PDF24–25页：[官方大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf)。分段密度示范改编自January 2025 Q2：[试卷PDF6–8页](/assets/pdf/fx-cg50/references/oxfordaqa-ma04-2025-january-question-paper.pdf#page=6)、[配对最终评分标准PDF6–8页](/assets/pdf/fx-cg50/references/oxfordaqa-ma04-2025-january-mark-scheme.pdf#page=6)。保留密度与归一化常数，新增CDF要求，不称官方原题。其他任务自拟。未宣称计算器按键流程或学生学习效果已经验证。

</details>

{% include exam_topic_practice.html %}
