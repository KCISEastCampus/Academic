---
title: "几何分布与矩的推导"
layout: subjects
mathjax: true
grade: as
subject: as-further-mathematics
lang: zh-CN
translation_of: /alevel/as-further-mathematics/geometric-distribution/
permalink: /zh/alevel/as-further-mathematics/geometric-distribution/
toc_headings: "#start, #model, #tails, #moment-foundation, #demonstration, #failures, #practice, #retry, #later-review, #next-step, #sources"
study_page: true
reading_layout: true
---

[AS 高数课程](/zh/alevel/as-further-mathematics/)

要等多少次才能首次成功？均值与方差的公式又是怎样得来的？先明确计数对象，再把成败序列转成概率，由分布本身推导矩。

依次学习[模型](#model)与[矩的推导](#demonstration)，再收起示范完成[独立任务](#practice)。学完应能解释模型为什么适用、区分不同尾部事件，并推导均值和方差，包括边界情形。题干保留英文，中文解释帮助你重建推理。

## 开始前 {#start}

需要独立事件的乘法、条件概率、期望及基本微分。分母随条件改变的含义可回看 [AS 概率](/zh/alevel/as-mathematics/probability/#l18)，无限和可回看[部分和与极限](/zh/alevel/as-further-mathematics/series/#infinite-sums)。下文会补出所需的矩定义和等比级数求导关系，不要求先学过 PGF。

<section class="lesson-check" markdown="1">

### 先修自检

**Entry check (self-written):** Independent trials have success probability $0.4$. Find the probability of the sequence failure, failure, success. Separately, $Z$ takes values 1 and 2 with probability $1/2$ each. Find $E(Z)$, $E(Z^2)$ and $\operatorname{Var}(Z)$.

<details markdown="1"><summary>提示</summary>

按顺序相乘三个事件的概率。第二部分先把每个取值或取值的平方乘以对应概率，再求和。

</details>

<details markdown="1"><summary>核对与回补</summary>

该序列的概率是 $0.6\times0.6\times0.4=0.144$。独立性使我们可以相乘；题目已指定唯一顺序，不需要再乘排列数。

$$\begin{aligned}
E(Z)&=1\left(\frac12\right)+2\left(\frac12\right)=\frac32,\\
E(Z^2)&=1^2\left(\frac12\right)+2^2\left(\frac12\right)=\frac52,\\
\operatorname{Var}(Z)&=\frac52-\left(\frac32\right)^2=\frac14.
\end{aligned}$$

若你平方的是概率而非取值，先列两行表格，分别记录取值、概率和取值平方。也可直接检查：两个取值离均值都是 $1/2$，离差平方都是 $1/4$。若错在事件概率，先回到上方链接的 AS 课程回补，再继续。

</details>

</section>

## 1. 计到首次成功 {#model}

先定义什么算成功。每次试验只有两种结果，各次相互独立，而且每次成功概率都是同一个 $p$，其中 $0<p\le1$。一直试验到首次成功为止。设 $q=1-p$，令 $X$ 计数**直到首次成功且包括该次的试验次数**。

当 $0<p<1$ 时，支持集（概率为正的取值）是 $1,2,3,\ldots$。对于“失败、失败、成功”，有 $X=3$：成功前恰有两次失败。一般地，$X=k$ 要求前 $k-1$ 次失败、接着成功。由独立性得

$$P(X=k)=q^{k-1}p,\qquad k=1,2,\ldots.$$

指数数的是失败次数，不是成功发生的试验序号。首次成功已固定结果顺序，因此不需要二项式系数。要检查这些概率是否构成完整分布，先加有限项，再让上限增加：

$$\begin{aligned}
\sum_{k=1}^n P(X=k)&=p\frac{1-q^n}{1-q}=1-q^n,\\
\lim_{n\to\infty}(1-q^n)&=1\qquad(0<q<1).
\end{aligned}$$

虽然没有固定的最后一次试验，永远不成功的概率仍为零。若 $p=0$，首次成功不会发生，不属于这里取有限整数值的等待模型。若 $p=1$，则必有 $X=1$：支持集缩为 $\{1\}$，其余取值的概率都为零。没有失败因子的空乘积等于一；边界处直接用事件判断，不必尝试解释 $0^0$。

不放回抽样一般会改变下一次概率，也使试验相互依赖。使用几何模型需要明确的“独立且成功概率不变”机制，仅有“遇到首次成功就停止”还不够。

### 把尾部读成事件 {#tails}

对整数 $k\ge0$，$X>k$ 表示前 $k$ 次全部失败，并不规定下一次的结果。因此

$$P(X>k)=q^k,\qquad P(X\le k)=1-q^k.$$

对整数 $k\ge1$，$X\ge k$ 只要求前 $k-1$ 次没有成功：

$$P(X\ge k)=q^{k-1}.$$

| 文字条件 | 事件 | 已经要求的失败 |
| --- | --- | --- |
| 超过四次试验 | $X>4$ | 前四次 |
| 至少四次试验 | $X\ge4$ | 前三次 |
| 第四次或之前成功 | $X\le4$ | 前四次全失败的补事件 |

当 $k=0$ 时，$P(X>0)=1$。当 $p=1$ 时，对每个整数 $k\ge1$ 都有 $P(X>k)=0$。条件概率仍要求条件事件的概率为正：在 $p=1$ 时不可能发生的事件，不能用来作分母。

## 2. 从概率建立矩 {#moment-foundation}

离散变量的概率为 $P(X=k)$ 时，期望是以概率为权重的取值平均；二阶原点矩则平均取值的平方。方差是取值到均值距离的平方的平均：

$$\begin{aligned}
E(X)&=\sum_k kP(X=k),\\
E(X^2)&=\sum_k k^2P(X=k),\\
\operatorname{Var}(X)&=E[(X-E(X))^2]\\
&=E(X^2)-[E(X)]^2.
\end{aligned}$$

最后一个等式来自展开平方，并把 $E(X)$ 视为常量。不要把 $E(X^2)$ 换成 $[E(X)]^2$。

等比级数可以产生所需的加权和。求导时使用另一个变量 $t$，把模型参数 $p$ 固定。有限和中的余项含 $t^{n+1}$，当 $\lvert t\rvert<1$ 时它趋于零：

$$\begin{aligned}
\sum_{k=0}^n t^k&=\frac{1-t^{n+1}}{1-t},\\
S(t)=\sum_{k=0}^\infty t^k&=\frac1{1-t}
\qquad(\lvert t\rvert<1).
\end{aligned}$$

幂级数在收敛半径内可以逐项求导；这里使用的是这条规则，不是说任意无限和都能求导。普通链式法则给出 $(1-t)^{-1}$ 的正导数：幂次带来的负号与 $1-t$ 求导带来的负号抵消。

### 连续推导均值与方差 {#demonstration}

<section class="worked-example" markdown="1">

#### 从概率权重到两个矩

**Derivation (self-written):** Starting from $P(X=k)=pq^{k-1}$, derive $E(X)$ and $\operatorname{Var}(X)$ for every $0<p\le1$, where $q=1-p$.

先取 $0<p<1$，于是 $0<q<1$。对 $t$ 求一次导数，再求一次：

$$\begin{aligned}
S'(t)&=\sum_{k=1}^\infty kt^{k-1}=\frac1{(1-t)^2},\\
S''(t)&=\sum_{k=2}^\infty k(k-1)t^{k-2}\\
&=\frac2{(1-t)^3}.
\end{aligned}$$

一阶导数恰好产生均值定义中需要的系数 $k$ 和幂次 $k-1$。令 $t=q$，再乘以概率中的因子 $p$：

$$\begin{aligned}
E(X)&=p\sum_{k=1}^\infty kq^{k-1}\\
&=\frac{p}{(1-q)^2}=\frac1p.
\end{aligned}$$

二阶导数给出 $k(k-1)$，并不是 $k^2$，所以它对应阶乘矩 $E[X(X-1)]$。求导后的幂次是 $k-2$，而概率里是 $q^{k-1}$；再乘一个 $q$ 才能补回这一位：

$$\begin{aligned}
E[X(X-1)]&=p\sum_{k=2}^\infty k(k-1)q^{k-1}\\
&=pq\sum_{k=2}^\infty k(k-1)q^{k-2}\\
&=\frac{2pq}{(1-q)^3}=\frac{2q}{p^2}.
\end{aligned}$$

由于 $k=1$ 项为零，求和下限可以从二开始。对固定的 $0<q<1$，一阶、二阶矩级数的相邻项比值都趋于 $q<1$，因此它们收敛；后面不会出现两个发散矩相减的情况。

先用对每个取值都成立的恒等式 $X^2=X(X-1)+X$，把阶乘矩转为二阶原点矩，再减去均值的平方：

$$\begin{aligned}
E(X^2)&=\frac{2q}{p^2}+\frac1p\\
&=\frac{2q+p}{p^2}=\frac{2-p}{p^2},\\
\operatorname{Var}(X)&=\frac{2q+p-1}{p^2}\\
&=\frac{q}{p^2}.
\end{aligned}$$

化简使用了 $p+q=1$。方差非负；成功越稀少，等待次数的波动越大，与结果一致。最后单独检查 $p=1$：此时 $X=1$ 是常量，均值为一、方差为零，与公式相符，也不需要除以 $q$。至此覆盖了整个允许范围。

</section>

<section class="worked-example" markdown="1">

#### 先读成败序列，再计算 {#probability-example}

**Demonstration (self-written):** For $p=0.25$, find $P(X=3)$, $P(X>4)$ and the moments.

此处 $q=0.75$。第三次首次成功固定了“两次失败，接着成功”；超过四次才成功只固定前四次失败，不需要再乘成功概率：

$$\begin{aligned}
P(X=3)&=0.75^2(0.25)=0.140625,\\
P(X>4)&=0.75^4=0.31640625,\\
E(X)&=4,\qquad\operatorname{Var}(X)=12.
\end{aligned}$$

换一个说法核对：“至少四次”的概率是 $0.75^3=0.421875$，与“超过四次”不同。矩使用刚才推导的公式。均值以试验次数计量，方差以次数的平方计量；均值是四，并不表示首次成功一定发生在第四次。

</section>

### 改成计失败次数 {#failures}

令 $Y$ 计首次成功前的失败次数。对于同一条结果序列，这个计数总比总试验次数少一，因此

$$\begin{aligned}
&Y=X-1,\\
&P(Y=j)=q^jp,\\
&j=0,1,2,\ldots.
\end{aligned}$$

当 $0<p<1$ 时，支持集从零开始。每个取值都减一，均值也减一；但取值离各自均值的距离没有改变：

$$\begin{aligned}
E(Y)&=E(X)-1=\frac{q}{p},\\
Y-E(Y)&=(X-1)-(E(X)-1)\\
&=X-E(X),\\
\operatorname{Var}(Y)&=\operatorname{Var}(X)=\frac{q}{p^2}.
\end{aligned}$$

当 $p=1$ 时，必有 $Y=0$，支持集为 $\{0\}$。平移改变均值，不改变方差，不能把两者都减一。

<section class="lesson-check" markdown="1">

#### 停下来连接计数与概率

**Scaffold (self-written):** Explain why $P(X=1)=p$, and fill the missing exponent in $P(X=5)=q^{\square}p$.

<details markdown="1"><summary>提示</summary>

写出在首次成功处结束的完整序列。指数只计其中的失败次数。

</details>

<details markdown="1"><summary>解答与核对</summary>

第一次成功前没有失败，第五次首次成功前有四次失败，因此空格应为 4。

</details>

</section>

## 独立检查 {#practice}

收起示范，写出事件和推理，不只填答案；第二题要求亲自推导两个矩。本页任务均为**自拟题（self-written）**，没有官方分值。提示与解答分别展开，记录自己用过哪些帮助。

<section class="lesson-check" markdown="1">

#### 题目 1 {#practice-1}

**Independent task (self-written):** A geometric X satisfies $P(X>2)=0.36$. Find p, $P(X=4\mid X>2)$, $E(X)$ and $\operatorname{Var}(X)$. Would the same model apply to drawing cards without replacement until a red card appears? Explain.

<details markdown="1"><summary>提示</summary>

q 要取非负平方根；先弄清条件事件，再除以其概率。抽牌情境须检查独立性和成功概率是否固定。

</details>

<details markdown="1"><summary>解答与核对</summary>

因为 $q$ 是概率，所以舍去负平方根。$X=4$ 与 $X>2$ 的交集仍是 $X=4$：

$$\begin{aligned}
&q^2=0.36\\
&\Rightarrow q=0.6,\\
&p=0.4,\\
&P(X=4\mid X>2)\\
&\quad=\frac{q^3p}{q^2}\\
&\quad=qp=0.24.
\end{aligned}$$

$$\begin{aligned}
&E(X)=2.5,\\
&\operatorname{Var}(X)=3.75.
\end{aligned}$$

分母为正。已知前两次失败后，第四次才首次成功还需要第三次失败、第四次成功。不放回抽牌不满足独立且概率固定的条件，需要放回或另有明确的独立试验机制。若错在尾部或条件分母，回看[事件](#tails)，再做[再尝试 3](#retry-3)。

</details>

</section>

<section class="lesson-check" markdown="1">

#### 题目 2 {#practice-2}

**Independent task (self-written):** A random variable $T$ has $P(T=k)=p(1-p)^{k-1}$ for $k=1,2,\ldots$, where $0<p\le1$. Starting from these probabilities, derive its mean and variance for every allowed $p$. Justify the infinite-sum operations, distinguish the two second moments, and check the endpoint. Quoting geometric moment formulas is not a derivation.

<details markdown="1"><summary>提示</summary>

寻找一个求导后能产生矩定义中权重的和。每次求导后既检查系数，也检查指数。常量变量直接计算。

</details>

<details markdown="1"><summary>解答与核对</summary>

记 $q=1-p$。当 $0<p<1$ 时，在 $\lvert t\rvert<1$ 内使用表示等比幂级数的 $S(t)=(1-t)^{-1}$。在该范围内可以逐项求导，得到 $S'(t)=(1-t)^{-2}$ 和 $S''(t)=2(1-t)^{-3}$。于是

$$\begin{aligned}
E(T)&=pS'(q)=\frac{p}{(1-q)^2}=\frac1p,\\
E[T(T-1)]&=pqS''(q)=\frac{2q}{p^2},\\
E(T^2)&=E[T(T-1)]+E(T)\\
&=\frac{2q+p}{p^2},\\
\operatorname{Var}(T)&=E(T^2)-[E(T)]^2\\
&=\frac{2q+p-1}{p^2}=\frac{q}{p^2}.
\end{aligned}$$

每一步都要与加权概率和对应：$S''$ 产生 $k(k-1)q^{k-2}$，所以要乘 $pq$，不能只乘 $p$。矩级数的相邻项比值趋于 $q<1$，因此各和有限。当 $p=1$ 时，必有 $T=1$，均值为一、方差为零。

若把二阶导数直接当成 $E(T^2)$，先展开 $T(T-1)$。若方差中缺少 $q$，对照[连续推导](#demonstration)检查幂次。修复该步后收起解答，做[再尝试 2](#retry-2)；一个数值例子不能证明对全部 $p$ 都成立。

</details>

</section>

<section class="lesson-check" markdown="1">

#### 题目 3 {#practice-3}

**Independent task (self-written):** A device responds to each request independently with probability $0.2$. Let $N$ be the number of requests up to and including its first response, and $B$ the number of responses in the first three requests. Find $P(N\ge5)$, $P(B=1)$ and $E(N-1)$. Decide whether each variable has a geometric distribution and justify your decisions. If the response probability changes to 1, give both supports and decide whether $P(N>5\mid N>2)$ is defined.

<details markdown="1"><summary>提示</summary>

一个变量计等待时间，另一个只观察固定次数。列出固定窗口里唯一一次响应可能出现的位置。边界处另行判断条件事件。

</details>

<details markdown="1"><summary>解答与核对</summary>

等待次数 $N$ 满足几何分布的条件。$N\ge5$ 只要求前四次失败。$B=1$ 有三种互斥序列：成功—失败—失败、失败—成功—失败、失败—失败—成功：

$$\begin{aligned}
P(N\ge5)&=0.8^4=0.4096,\\
P(B=1)&=3(0.2)(0.8)^2=0.384,\\
E(N-1)&=5-1=4.
\end{aligned}$$

$B$ 的支持集为 $\{0,1,2,3\}$，计数固定试验次数中的成功数，服从二项分布而非几何分布。成功概率为一时，必有 $N=1$、$B=3$，支持集分别为 $\{1\}$、$\{3\}$。由于 $N>2$ 的概率为零，所问条件概率没有定义，不能写成零。计数错误回看[模型](#model)；尾部或不可能条件的错误回看[事件定义](#tails)，再做[再尝试 3](#retry-3)。

</details>

</section>

## 纠错与再尝试 {#retry}

按错误选择任务。计数差一位：回看[计数约定](#failures)，做再尝试 1。遗漏权重、幂次或二阶矩转换：回看[连续推导](#demonstration)，做再尝试 2。模型或尾部判断错误：回看[事件解释](#tails)，做再尝试 3。重做前先收起旧答案。

<section class="lesson-check" markdown="1">

#### 再尝试 1 {#retry-1}

**Retry (self-written):** For independent trials with $p=0.4$, let Y count failures before success. Find $P(Y=0)$, $E(Y)$ and $\operatorname{Var}(Y)$.

<details markdown="1"><summary>提示</summary>

最短序列是立即成功。把失败次数与总试验次数联系起来，再比较两个变量相对于各自均值的离差。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$\begin{aligned}
&P(Y=0)=0.4,\\
&E(Y)=1.5,\\
&\operatorname{Var}(Y)=3.75.
\end{aligned}$$

零次失败意味着第一次就成功。总试验次数减一，均值从 $2.5$ 降到 $1.5$，离差却不变，因此方差仍为 $3.75$。

</details>

</section>

<section class="lesson-check" markdown="1">

#### 再尝试 2 {#retry-2}

**Retry (self-written):** Let $Y$ count failures before first success in independent trials with constant success probability $0<p\le1$. Starting from $P(Y=j)=p(1-p)^j$ for $j=0,1,2,\ldots$, derive $E(Y)$ and $\operatorname{Var}(Y)$ directly. Do not quote the moments of a trial count. Explain convergence, the conversion of the second moment, and the case $p=1$.

<details markdown="1"><summary>提示</summary>

这次概率中的幂次是 $j$。普通等比级数每求导一次，幂次就会减少；形成期望前要把它补回来。再确认二阶导数给出的究竟是什么权重。

</details>

<details markdown="1"><summary>解答与核对</summary>

当 $0<p<1$ 时，令 $q=1-p$，在 $\lvert t\rvert<1$ 内使用收敛幂级数 $S(t)=(1-t)^{-1}$。这次需要的权重分别是 $jq^j$ 和 $j(j-1)q^j$，所以

$$\begin{aligned}
&E(Y)=pqS'(q)\\
&\quad=\frac{pq}{(1-q)^2}=\frac{q}{p},\\
&E[Y(Y-1)]=pq^2S''(q)\\
&\quad=\frac{2q^2}{p^2},\\
&E(Y^2)=\frac{2q^2}{p^2}+\frac{q}{p},\\
&\operatorname{Var}(Y)\\
&\quad=\frac{2q^2+pq-q^2}{p^2}\\
&\quad=\frac{q(q+p)}{p^2}=\frac{q}{p^2}.
\end{aligned}$$

相邻项比值趋于 $q<1$，矩级数收敛；求导也在收敛半径内进行。当 $p=1$ 时，必有 $Y=0$，所问均值与方差都为零。阶乘矩漏掉 $q^2$，说明求导后没有补回幂次；原点矩漏掉 $E(Y)$，说明混淆了 $Y^2$ 与 $Y(Y-1)$。

</details>

</section>

<section class="lesson-check" markdown="1">

#### 再尝试 3 {#retry-3}

**Retry (self-written):** Independent tests detect a fault with probability $0.1$ on each test. Let $T$ count tests to the first detection. Find $P(T\ge3)$ and $P(T>5\mid T>2)$. In a different experiment, ten items contain exactly one faulty item and are checked in random order without replacement. Can the same geometric model describe its first faulty-item position? Compare the probabilities of no fault in the first five checks.

<details markdown="1"><summary>提示</summary>

逐一数清事件实际要求了几次失败。第二个实验中，考虑唯一故障品等可能出现的位置，以及等待次数最多能有多少。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$\begin{aligned}
&P(T\ge3)=0.9^2=0.81,\\
&P(T>5\mid T>2)\\
&\quad=\frac{0.9^5}{0.9^2}\\
&\quad=0.9^3=0.729.
\end{aligned}$$

第二个实验的首次故障位置最多为十；每移走一件正常品，下一次概率都会改变，因此几何条件不成立。故障品等可能在十个位置中的任意一个，前五次没有故障的概率为 $5/10=0.5$；独立检测中则为 $0.9^5=0.59049$。第一次成功概率相同，不代表两种机制产生同一模型。

</details>

</section>

## 学完 PGF 后回来检查 {#later-review}

学完下一课后，先不重读示范，回来重建推理，而不是抄某个已命名分布的公式。记录是否用过提示；若推导仍依赖帮助，之后再收起帮助重新检查。

<section class="lesson-check" markdown="1">

#### 混合回顾

**Later review (self-written):** A variable $W$ has probabilities $P(W=j)=ca^j$ for $j=0,1,2,\ldots$, where $0\le a<1$ and $c$ is constant. Find $c$, derive the mean and variance from these probabilities, and find $P(W\ge3)$. For $a>0$, find $P(W=2\mid W\ge1)$. Explain separately what happens when $a=0$; interpret $a^0$ as 1.

<details markdown="1"><summary>提示</summary>

求矩前先保证总概率为一。检查支持集起点，并说明二阶导数给出的矩。在条件概率中先求条件事件的概率。

</details>

<details markdown="1"><summary>解答与核对</summary>

当 $0<a<1$ 时，先用等比和归一化，再在收敛半径内求导，得到加权和：

$$\begin{aligned}
&1=\frac{c}{1-a}\Rightarrow c=1-a,\\
&E(W)=\frac{ca}{(1-a)^2}\\
&\quad=\frac{a}{1-a},\\
&E[W(W-1)]\\
&\quad=\frac{2ca^2}{(1-a)^3}\\
&\quad=\frac{2a^2}{(1-a)^2},\\
&\operatorname{Var}(W)\\
&\quad=E[W(W-1)]+E(W)\\
&\qquad-[E(W)]^2\\
&\quad=\frac{2a^2+a(1-a)-a^2}{(1-a)^2}\\
&\quad=\frac{a}{(1-a)^2}.
\end{aligned}$$

几何衰减保证这些矩收敛。尾部从实际包含的第一个取值开始相加，不要把非严格不等号换成严格不等号：

$$\begin{aligned}
P(W\ge3)&=\frac{ca^3}{1-a}=a^3,\\
P(W\ge1)&=a,\\
P(W=2\mid W\ge1)&=\frac{ca^2}{a}=a(1-a).
\end{aligned}$$

当 $a=0$ 时，归一化给出 $c=1$，必有 $W=0$。均值、方差及尾概率都为零；条件事件概率为零，因此该条件概率没有定义。归一化错误回看[概率和](#model)；矩的错误回看[推导](#demonstration)并做再尝试 2；事件边界错误回看[尾部](#tails)并做再尝试 3。

</details>

</section>

## 下一步 {#next-step}

当你能解释模型条件、无帮助推导两个矩、完成对应错误的重试，并处理常量边界时，继续学习[概率生成函数](/zh/alevel/as-further-mathematics/generating-functions/)，用函数编码同一个概率分布。学完后先不打开示范，完成本页[混合回顾](#later-review)。若目前只会代公式，先做[再尝试 2](#retry-2)。

## 来源与范围 {#sources}

全部示范与学生任务均为**自拟题（self-written）**，没有官方分值。范围按 OxfordAQA 9665 v5.2 的 FS1.3：适用条件、概率，以及均值和方差的知识与推导。试验次数从一开始，失败次数从零开始，并单独处理 $p=1$。条件尾概率题是条件概率的应用，不另列为新增大纲主题。

<details markdown="1"><summary>官方来源与本轮实际阅读</summary>

本轮从当前 9665 资格页进入下列大纲，重新读取 FS1.3，并读取 FM02 June 2024 Q8(a) 及配套 Final MS。Q8(a) 用于核对由累计概率建立方程反求参数的作答证据；推导要求依据 FS1.3，不能只凭这一道题判断。本页没有复制官方原题。

- [OxfordAQA 9665 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf), FS1.3.
- FM02 June 2024 Q8(a); QP p.16, MS p.14. [FM02 June 2024 QP](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-question-paper.pdf) · [Final MS](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-mark-scheme.pdf).

</details>

[上一课](/zh/alevel/as-further-mathematics/discrete-uniform/) · [课程路线](/zh/alevel/as-further-mathematics/#learning-route) · [下一课](/zh/alevel/as-further-mathematics/generating-functions/)