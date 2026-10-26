---
title: "矩母函数：找回平均值与离散程度"
layout: subjects
mathjax: true
grade: a2
subject: a2-further-mathematics
lang: zh-CN
translation_of: /alevel/a2-further-mathematics/statistics/moment-generating-functions/
permalink: /zh/alevel/a2-further-mathematics/statistics/moment-generating-functions/
reading_layout: true
study_page: true
toc_headings: "#meaning, #moments, #example, #transform, #sums, #practice, #retry, #later-review, #next-step"
---

[A2 高等统计](/zh/alevel/a2-further-mathematics/statistics/)
{:.lesson-meta}

一张概率表告诉我们：哪些值可能出现，每个值有多大概率。直接用表就能求平均值，为什么还要把它写成函数？因为同一个函数既能帮助我们求不同的平均值，也能处理由原变量变出来的新变量。

这一课会带你把函数写出来，不先背公式。你需要会[按概率求平均值](/zh/alevel/as-further-mathematics/discrete-uniform/#demonstration)，以及对指数函数使用链式法则。例如，对 $t$ 求导时，$e^{3t}$ 变成 $3e^{3t}$。本页全部示范与任务均为自拟题，不附官方分值。

## 把每个取值换成一个指数式 {#meaning}

先看一个自拟游戏：得分 $X$ 只可能是 $0$ 或 $2$，各有 $1/2$ 的概率。它的平均值是 $0\times1/2+2\times1/2=1$。

现在概率不动，只把每个取值 $x$ 换成 $e^{tx}$。这里的 $t$ 是我们可以选择的**函数输入**，不是时间，也不是随机得到的分数。

| 取值 $x$ | 概率 | 在新平均值中贡献的部分 |
| --- | --- | --- |
| $0$ | $1/2$ | $e^{0t}/2=1/2$ |
| $2$ | $1/2$ | $e^{2t}/2$ |

把最后一列加起来，就得到**矩母函数（moment generating function，MGF）**：

$$
M_X(t)=E(e^{tX})=\frac12+\frac12e^{2t}.
$$

$M$ 是函数的名称，下标告诉我们它属于哪个随机变量。任何有限概率表都能用同一办法：

$$
M_X(t)=\sum_x e^{tx}P(X=x).
$$

当 $t=0$ 时，每个指数式都变成 $1$。因此 $M_X(0)$ 就是全部概率的和，必须等于 $1$。这是一个有用的检查，但不能仅凭这个条件，就认定随便一个函数是矩母函数。

这个有限例子对所有实数 $t$ 都能计算。无限分布和连续分布要小心：要使用这里的求矩规则，矩母函数须在包含零点的某个开区间内保持有限。对概率密度为 $f_X$ 的连续变量，定义改为在它的取值范围上积分：

$$
M_X(t)=\int_{\text{support}}e^{tx}f_X(x)\,dx.
$$

连续分布的具体推导留到后面的课。不要假定每种分布都在零点附近有矩母函数。

## 为什么求导能找回平均值？ {#moments}

每一项里的 $x$ 是一个可能的取值。现在对 **$t$** 求导，$x$ 保持不变；链式法则会把一个 $x$ 乘到前面：

$$
\begin{aligned}
M_X'(t)&=\sum_x x e^{tx}P(X=x),\\
M_X'(0)&=\sum_x xP(X=x)=E(X).
\end{aligned}
$$

再求一次导数，每个取值又多乘一个自己：

$$
\begin{aligned}
M_X''(t)&=\sum_x x^2 e^{tx}P(X=x),\\
M_X''(0)&=E(X^2),\\
\operatorname{Var}(X)&=M_X''(0)-[M_X'(0)]^2.
\end{aligned}
$$

$E(X)$ 和 $E(X^2)$ 分别叫一阶矩和二阶矩。可以先把“矩”理解为：按概率对 $X$ 或 $X^2$ 求平均。二阶矩还不是方差，要再减去平均值的平方。

有限表可以直接逐项求导。无限求和与积分中的相应规则，需要前面说明的存在条件。

如果你已经学过 [PGF](/zh/alevel/as-further-mathematics/generating-functions/#moments)，注意区别：PGF 对 $t^X$ 求平均，在 $1$ 处取导数；二阶导数得到的是 $E[X(X-1)]$。MGF 对 $e^{tX}$ 求平均，在 $0$ 处取导数；二阶导数已经是 $E(X^2)$，不用再加 PGF 中的修正项。

## 完整算一次，再换个办法检查 {#example}

<section class="worked-example" markdown="1">

### 求平均值与方差

**Question:** A random variable $X$ takes values $0$ and $2$, each with probability $1/2$. Find its MGF and use it to find its mean and variance. Check directly from the probabilities.

上面的表已经给出矩母函数。先对整个式子求导，再代入 $t=0$：

$$
\begin{aligned}
M_X(t)&=\frac12+\frac12e^{2t},\\
M_X'(t)&=e^{2t},&
M_X'(0)&=1,\\
M_X''(t)&=2e^{2t},&
M_X''(0)&=2.
\end{aligned}
$$

所以 $E(X)=1$、$E(X^2)=2$，而 $\operatorname{Var}(X)=2-1^2=1$。

再直接从概率表计算，交叉检查：

$$
\begin{aligned}
E(X)&=0\times\frac12+2\times\frac12=1,\\
E(X^2)&=0^2\times\frac12+2^2\times\frac12=2,\\
\operatorname{Var}(X)&=E(X^2)-[E(X)]^2=1.
\end{aligned}
$$

两种方法一致。如果先把 $t=0$ 代进去，只剩常数 $1$，再求导就找不回原来的信息了。

</section>

## 变量变了，函数怎样跟着变？ {#transform}

设新得分是 $Y=a+bX$。$a$ 把所有分数一起平移，$b$ 把它们按倍数改变；$b$ 也可以是负数。把新得分放回定义：

$$
\begin{aligned}
M_Y(t)&=E(e^{t(a+bX)})\\
&=e^{at}E(e^{(bt)X})\\
&=e^{at}M_X(bt).
\end{aligned}
$$

平移对应外面的 $e^{at}$；倍数改变的是 $M_X$ 的**输入**，把 $t$ 换成 $bt$。直接把整个函数乘以 $b$，是另一回事。

例如上面的游戏，令 $Y=1-X$：

$$
M_Y(t)=e^tM_X(-t)=\frac12e^t+\frac12e^{-t}.
$$

这也能从分数看出来：新分数是 $1$ 和 $-1$，概率不变。它的平均值为 $0$、方差为 $1$，也符合 $E(Y)=1-E(X)$ 和 $\operatorname{Var}(Y)=(-1)^2\operatorname{Var}(X)$。

如果原函数只在某段范围内存在，还要保证 $bt$ 落在那段范围内。解出 $t$ 的范围时，若 $b$ 为负，除以它要把不等号反向。

## 独立玩两次，还是把一次得分翻倍？ {#sums}

设 $X_1$ 和 $X_2$ 是 $X$ 的两个**独立副本**：分布相同，但一次结果不影响另一次。独立性让联合概率能拆成两个概率的乘积。对有限分布：

$$
\begin{aligned}
M_{X_1+X_2}(t)
&=\sum_{x_1,x_2} e^{t(x_1+x_2)}
 P(X_1=x_1)P(X_2=x_2)\\
&=\left(\sum_{x_1}e^{tx_1}P(X_1=x_1)\right)
 \left(\sum_{x_2}e^{tx_2}P(X_2=x_2)\right)\\
&=M_{X_1}(t)M_{X_2}(t).
\end{aligned}
$$

使用时，$t$ 要在两个矩母函数都存在的范围内。对前面的游戏，两次独立得分之和满足

$$
M_{X_1+X_2}(t)
=\left(\frac12+\frac12e^{2t}\right)^2
=\frac14+\frac12e^{2t}+\frac14e^{4t}.
$$

总分可能是 $2$：一次得 $0$，另一次得 $2$。

如果把**同一次**得分重复相加，$X+X=2X$，结果却只能是 $0$ 或 $4$：

$$
M_{2X}(t)=M_X(2t)=\frac12+\frac12e^{4t}.
$$

写成两个符号，不代表两个变量就独立。“一次得分翻倍”与“独立玩两次”有不同的分布。若还分不清倍数和独立相加，先回看[线性组合](/zh/alevel/as-further-mathematics/linear-combinations/#model)。

## 收起例题，自己试一试 {#practice}

先不展开答案。如果用了提示，检查时记下自己借助了哪一步。

<section class="lesson-check" markdown="1">

### 任务 A {#task-a}

**Question:** $W$ takes values $-1,0,2$ with probabilities $1/4,1/2,1/4$. Find its MGF, mean, second moment and variance. Check using the probability table.

<details markdown="1"><summary>提示</summary>

每个取值各写一项：概率乘上对应指数式。先求导，再代入零。

</details>

<details markdown="1"><summary>解答</summary>

$$
\begin{aligned}
M_W(t)&=\frac14e^{-t}+\frac12+\frac14e^{2t},\\
M_W'(t)&=-\frac14e^{-t}+\frac12e^{2t},\\
M_W''(t)&=\frac14e^{-t}+e^{2t}.
\end{aligned}
$$

所以 $M_W(0)=1$、$E(W)=1/4$、$E(W^2)=5/4$。

$$
\operatorname{Var}(W)=\frac54-\left(\frac14\right)^2=\frac{19}{16}.
$$

直接计算时，一阶矩是 $(-1)/4+0+2/4=1/4$，二阶矩是 $1/4+0+4/4=5/4$。取值可以为负，概率仍须为正。如果把二阶矩写成 $19/16$，你已经减去了平均值的平方，算成方差了。

</details>

</section>

<section class="lesson-check" markdown="1">

### 任务 B {#task-b}

**Question:** For $W$ in Task A, let $Y=3-2W$. Starting from the definition, justify the MGF transformation you use. Find $M_Y(t)$ and the mean and variance of $Y$. Check the possible values and probabilities directly.

<details markdown="1"><summary>提示</summary>

把定义中的 $W$ 换成 $3-2W$。注意 $-2$ 应当改变哪一处。

</details>

<details markdown="1"><summary>解答</summary>

$$
\begin{aligned}
M_Y(t)&=E(e^{t(3-2W)})\\
&=e^{3t}E(e^{(-2t)W})\\
&=e^{3t}M_W(-2t)\\
&=\frac14e^{5t}+\frac12e^{3t}+\frac14e^{-t}.
\end{aligned}
$$

可能取值是 $5,3,-1$，概率分别为 $1/4,1/2,1/4$。平均值是 $5/2$，二阶矩是 $11$，方差是 $11-25/4=19/4$。

用线性规则核对：$E(Y)=3-2(1/4)=5/2$，$\operatorname{Var}(Y)=(-2)^2(19/16)=19/4$。负号不会让方差变成负数。如果把 $M_W(t)$ 整体乘了 $-2$，回看[新变量怎样放进定义](#transform)。

</details>

</section>

<section class="lesson-check" markdown="1">

### 任务 C {#task-c}

**Question:** $W_1$ and $W_2$ are independent copies of $W$ in Task A. Let $S=W_1+W_2$ and $T=2W_1$. Find their MGFs, means and variances. Do $S$ and $T$ have the same distribution? Explain.

<details markdown="1"><summary>提示</summary>

先分清哪个是重新独立取一次结果，哪个是把已得到的结果翻倍。只要找到一项不同的方差，就能否定分布相同。

</details>

<details markdown="1"><summary>解答</summary>

$$
\begin{aligned}
M_S(t)&=\left(\frac14e^{-t}+\frac12+\frac14e^{2t}\right)^2,\\
M_T(t)&=\frac14e^{-2t}+\frac12+\frac14e^{4t}.
\end{aligned}
$$

两个平均值都是 $1/2$。独立相加得 $\operatorname{Var}(S)=2(19/16)=19/8$；倍数变化得 $\operatorname{Var}(T)=4(19/16)=19/4$。所以分布不同，不能只看平均值相等。还可以检查取值：$S$ 能等于 $-1$，$T$ 却不能。

</details>

</section>

## 找到错因，再用新题重试 {#retry}

漏了取值或概率，回看[加权表](#meaning)。代错求导点，或混淆二阶矩与方差，回看[导数的含义](#moments)，再做重试 A。倍数放错位置，回看[变量变换](#transform)，再做重试 B。没有独立性却直接乘函数，回看[独立相加](#sums)，再做重试 C。重试前先收起原答案。

<section class="lesson-check" markdown="1">

### 重试 A {#retry-a}

**Question:** $M_R(t)=(2e^{-2t}+e^t)/3$. Recover the possible values and their probabilities. Find the mean and variance of $R$ in two ways.

<details markdown="1"><summary>提示</summary>

把每一项与 $p e^{tx}$ 比较。前面的系数是概率，不是取值。

</details>

<details markdown="1"><summary>解答</summary>

$R=-2,1$，概率为 $2/3,1/3$。

$$
M_R'(t)=\frac{-4e^{-2t}+e^t}{3},\qquad
M_R''(t)=\frac{8e^{-2t}+e^t}{3}.
$$

因此 $E(R)=-1$、$E(R^2)=3$，而 $\operatorname{Var}(R)=3-(-1)^2=2$。直接计算：$(-2)(2/3)+1/3=-1$，$4(2/3)+1/3=3$，得到同一方差。

</details>

</section>

<section class="lesson-check" markdown="1">

### 重试 B {#retry-b}

**Question:** Using $R$ in Retry A, define $V=2-R$. Find its MGF and check its mean and variance from its possible values.

<details markdown="1"><summary>提示</summary>

先把整个 $2-R$ 放进 $e^{tV}$，再取期望。

</details>

<details markdown="1"><summary>解答</summary>

$$
M_V(t)=e^{2t}M_R(-t)=\frac23e^{4t}+\frac13e^t.
$$

$V=4,1$，概率为 $2/3,1/3$。于是 $E(V)=3$、$E(V^2)=11$、$\operatorname{Var}(V)=2$。平移改变平均值，乘以 $-1$ 不改变方差。

</details>

</section>

<section class="lesson-check" markdown="1">

### 重试 C {#retry-c}

**Question:** $B_1$ and $B_2$ are independent copies of a variable taking $0$ with probability $2/3$ and $1$ with probability $1/3$. Compare the MGFs and variances of $B_1+B_2$ and $2B_1$.

<details markdown="1"><summary>提示</summary>

先求一次试验的矩母函数与方差，再分清两个式子各描述哪种操作。

</details>

<details markdown="1"><summary>解答</summary>

一次试验有 $M_B(t)=2/3+e^t/3$，方差为 $1/3-(1/3)^2=2/9$。

$$
M_{B_1+B_2}(t)=\left(\frac23+\frac13e^t\right)^2,\qquad
M_{2B_1}(t)=\frac23+\frac13e^{2t}.
$$

方差分别为 $4/9$ 与 $8/9$。第一种结果可能为 $1$，第二种不可能。

</details>

</section>

## 过一段时间，再处理新组合 {#later-review}

另一次学习时，先收起例题再做下面这题。题目不指定要用哪条性质。

<section class="lesson-check" markdown="1">

### 混合回顾题

**Question:** A random variable $A$ has $M_A(t)=(e^t+e^{3t})/2$. An independent copy is $A'$. Set $P=A-A'$ and $Q=A-2$. Find their MGFs, means and variances. Explain why equal means do not make these distributions equal.

<details markdown="1"><summary>提示</summary>

先找回原来的概率分布，再判断“independent copy”给了什么信息。

</details>

<details markdown="1"><summary>解答</summary>

$A=1,3$，概率相同，所以 $E(A)=2$，$\operatorname{Var}(A)=1$。

$$
\begin{aligned}
M_P(t)&=M_A(t)M_A(-t)
=\frac14e^{-2t}+\frac12+\frac14e^{2t},\\
M_Q(t)&=e^{-2t}M_A(t)
=\frac12e^{-t}+\frac12e^t.
\end{aligned}
$$

平均值都为零。但 $P$ 的方差为 $2$，$Q$ 的方差为 $1$。取值也不同：$P=-2,0,2$，而 $Q=-1,1$。符号或输入代错，回看[变量变换](#transform)；无理由就把函数相乘，回看[独立相加](#sums)，再做对应的新重试。

</details>

</section>

## 下一步学什么？ {#next-step}

继续学习[连续与常用 MGF](/zh/alevel/a2-further-mathematics/statistics/standard-mgfs/)，从定义推导函数，并检查输入范围。若还不熟悉积到无穷时的极限，先回补[反常积分](/zh/alevel/as-further-mathematics/improper-integrals/#model)。也可以返回 [FM04 学习路线](/zh/alevel/a2-further-mathematics/statistics/)选择主题。

<details markdown="1"><summary>来源与本页范围</summary>

OxfordAQA 9665 v5.2，FS2.1。本样章包括有限分布起步、矩、仿射变换与有限独立和；只介绍连续定义，不声称覆盖全部标准分布推导或 FM04。

制作前阅读了 *International A Level Further Mathematics with Statistics*（Oxford，2017）第29章印刷370–374页，以及 January 2025 FM04 Q8 和对应评分标准17–18页。June 2025 Q2/MS5–6页用于规划后续积分路线。本页题目与解答全部自拟，不附官方分值。资格与范围见[当前资格页](https://www.oxfordaqa.com/qualification/international-as-and-a-level-further-mathematics-9665/)和[大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf)。

</details>
