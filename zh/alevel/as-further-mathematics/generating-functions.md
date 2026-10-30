---
title: "概率生成函数"
layout: subjects
mathjax: true
grade: as
subject: as-further-mathematics
lang: zh-CN
translation_of: /alevel/as-further-mathematics/generating-functions/
permalink: /zh/alevel/as-further-mathematics/generating-functions/
toc_headings: h2, h3
study_page: true
reading_layout: true
---

[AS 高数课程](/zh/alevel/as-further-mathematics/) · S4 · FS1.4

本页示范、补步骤、独立任务及再尝试均为**自拟题（self-written）**，没有官方分值。先写方法与理由，再分别展开提示和解答。题干保留英文，中文说明帮助建立推理。

## 把概率表编码为系数 {#model}

本课要从概率质量推导 Bernoulli、二项、离散均匀、几何四种 PGF，取回概率与矩，并判断何时可用乘积表示和。X 必须取非负整数；t 是占位变量，不是时间或随机结果。t=0 时，k=0 项按多项式约定取 t^0=1，因此该项贡献 P(X=0)，不一定为一。

$$
\begin{aligned}
&G_X(t)=E(t^X)\\
&\quad=\sum_{k=0}^{\infty}P(X=k)t^k,\\
&G_X(1)=1,\\
&G_X(0)=P(X=0),\\
&P(X=k)=\frac{G_X^{(k)}(0)}{k!}.
\end{aligned}
$$

PGF 的系数必须非负且合计一，只检查 t=1 处的函数值并不充分。概率级数在下列范围绝对收敛，并可在收敛半径内部逐项求导。

$$
\lvert t\rvert\le1.
$$

## 导数为什么给出阶乘矩 {#moments}

从定义求导时，概率仍作系数，幂次带来 k 和 k(k−1)。二阶导数的权重不是 k 的平方。前两矩有限时，可在必要时从小于一的一侧取极限。

$$
\begin{aligned}
&G_X'(t)=\sum_{k=1}^{\infty}kP(X=k)t^{k-1},\\
&G_X''(t)\\
&\quad=\sum_{k=2}^{\infty}k(k-1)P(X=k)t^{k-2},\\
&G_X'(1)=E(X),\\
&G_X''(1)=E[X(X-1)],\\
&X^2=X(X-1)+X,\\
&E(X^2)=G_X''(1)+G_X'(1),\\
&\operatorname{Var}(X)\\
&\quad=G_X''(1)+G_X'(1)-[G_X'(1)]^2.
\end{aligned}
$$

以下四类都有有限矩。一般无穷分布的 PGF 在 t=1 处收敛，不保证该处导数有限。若不熟悉概率权重和原点矩，回补[离散均匀推导](/zh/alevel/as-further-mathematics/discrete-uniform/#demonstration)；无穷求和则回补[几何矩基础](/zh/alevel/as-further-mathematics/geometric-distribution/#moment-foundation)。

## 四种模型的连续推导 {#demonstration}

### Bernoulli：两个概率质量 {#bernoulli}

<section class="worked-example" markdown="1">

X 以概率 q 取零、概率 p 取一；每个概率乘其取值对应的 t 幂，只有两项。

$$
\begin{aligned}
&0\le p\le1,\\
&q=1-p,\\
&G_X(t)=qt^0+pt^1=q+pt,\\
&G_X'(1)=p,\\
&G_X''(1)=0,\\
&\operatorname{Var}(X)=0+p-p^2=pq.
\end{aligned}
$$

核对常数和一次项系数即可取回 q、p。p=0 时 PGF 为 1，变量恒零；p=1 时 PGF 为 t，变量恒一；两者方差均零。

</section>

### 二项：识别有限展开 {#binomial}

<section class="worked-example" markdown="1">

n 次独立同概率 Bernoulli 试验，先把二项 PMF 代入定义，再用二项式定理合并有限和，不能直接把最终 PGF 当起点。

$$
\begin{aligned}
&n\ge1\text{ integer},\\
&0\le p\le1,\\
&G_X(t)\\
&\quad=\sum_{k=0}^{n}\binom nk q^{n-k}p^kt^k\\
&\quad=(q+pt)^n,\\
&G_X'(1)=np,\\
&G_X''(1)=n(n-1)p^2,\\
&\operatorname{Var}(X)\\
&\quad=n(n-1)p^2+np-n^2p^2\\
&\quad=np(1-p)=npq.
\end{aligned}
$$

n=1 时二阶导数直接为零，不要机械写通式引入无用负幂。p=0、p=1 时多项式分别为 1 和 t 的 n 次幂。端点 PMF 若出现零的零次幂记号，直接由多项式系数确定概率。

</section>

### 离散均匀：相加等系数 {#uniform}

<section class="worked-example" markdown="1">

X 在一到 n 上均匀，先列 n 个概率项。多项式在所有实数 t 上有定义；只有分式表达才需排除 t=1。

$$
\begin{aligned}
&G_X(t)=\frac1n\sum_{k=1}^{n}t^k\\
&\quad=\frac{t+t^2+\cdots+t^n}{n},\\
&G_X(t)=\frac{t(1-t^n)}{n(1-t)}\quad(t\ne1),\\
&G_X(1)=1,\\
&n\ge1\text{ integer},\\
&G_X'(1)=\frac1n\sum_{k=1}^{n}k=\frac{n+1}2,\\
&G_X''(1)=\frac1n\sum_{k=1}^{n}(k^2-k)\\
&\quad=\frac{(n+1)(2n+1)}6-\frac{n+1}2\\
&\quad=\frac{n^2-1}3,\\
&\operatorname{Var}(X)\\
&\quad=\frac{n^2-1}3+\frac{n+1}2-\frac{(n+1)^2}4\\
&\quad=\frac{n^2-1}{12}.
\end{aligned}
$$

用多项式在 t=1 处求值；分式的零比零是可去奇点，不是模型失效。n=1 时 PGF 为 t、方差为零。

</section>

### 几何：不要漏掉最低次幂 {#geometric}

<section class="worked-example" markdown="1">

X 数到首次成功的试验次数，支持集从一开始；重编号后，等比级数外须保留 pt。

$$
\begin{aligned}
&0<p\le1,\\
&q=1-p,\\
&G_X(t)\\
&\quad=\sum_{k=1}^{\infty}pq^{k-1}t^k\\
&\quad=pt\sum_{j=0}^{\infty}(qt)^j\\
&\quad=\frac{pt}{1-qt}\quad(\lvert qt\rvert<1),\\
&G_X'(t)=\frac{p}{(1-qt)^2},\\
&G_X''(t)=\frac{2pq}{(1-qt)^3},\\
&G_X'(1)=\frac1p,\\
&G_X''(1)=\frac{2q}{p^2},\\
&\operatorname{Var}(X)=\frac{2q}{p^2}+\frac1p-\frac1{p^2}\\
&\quad=\frac q{p^2}.
\end{aligned}
$$

p<1 时收敛半径大于一，故可在 t=1 处计算上述导数。p=1 时直接用 X=1：G=t，均值一、方差零。失败次数从零开始，虽方差相同，PGF 却不同。

</section>

## 何时和变为乘积 {#sums}

独立的非负整数 X、Y，把联合期望展开，独立性才允许将联合概率拆成乘积。t 在零到一之间时求和收敛，由此得到 PGF 恒等式，并由系数确定分布。

$$
\begin{aligned}
&G_{X+Y}(t)\\
&\quad=\sum_{i,j}P(X=i,Y=j)t^{i+j}\\
&\quad=\left(\sum_iP(X=i)t^i\right)\\
&\qquad\cdot\left(\sum_jP(Y=j)t^j\right)\\
&\quad=G_X(t)G_Y(t).
\end{aligned}
$$

若 Y 就是同一随机变量 X，要在 G 中把 t 换成 t 的平方；把 G 自身平方描述的是两个独立副本。上面四类为规定基础，旧笔记的 Poisson 例仅作补充。

$$
G_{2X}(t)=G_X(t^2).
$$

## 先读系数，再脱离公式表推导 {#practice}

<section class="lesson-check" id="scaffold" markdown="1">

**Scaffold (self-written):** For $G(t)=(1+2t+t^2)/4$, read the probability table and use derivatives to find the mean and variance.

先按幂次还原概率表，再由导数求两个矩。

<details markdown="1"><summary>提示</summary>

按幂次读概率，再分清两种二阶矩。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$
\begin{aligned}
&P(X=0)=\frac14,\\
&P(X=1)=\frac12,\\
&P(X=2)=\frac14,\\
&G'(t)=\frac{2+2t}4,\\
&G''(t)=\frac12,\\
&G'(1)=1,\\
&G''(1)=\frac12,\\
&\operatorname{Var}(X)=\frac12+1-1=\frac12.
\end{aligned}
$$

</details>

</section>

<section class="lesson-check" id="practice-1" markdown="1">

**Independent task (self-written):** A count Z has PGF $(0.2+0.8t)^2(t+t^2)/2$. Give an interpretation as a sum of independent variables, find $P(Z=2)$, $E(Z)$ and $\operatorname{Var}(Z)$. Is $H(t)=0.2-0.1t+0.9t^2$ a PGF just because $H(1)=1$?

由系数和因子独立选法，并判断候选函数是否合法。

<details markdown="1"><summary>提示</summary>

匹配两因子的幂次；除了正规化，还要检查系数符号。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$
\begin{aligned}
&Z=X+Y,\\
&X\sim\operatorname{Bin}(2,0.8),\\
&Y\text{ uniform on }\{1,2\},\\
&X,Y\text{ independent},\\
&P(Z=2)\\
&\quad=0.5(2\cdot0.2\cdot0.8)+0.5(0.2^2)\\
&\quad=0.18,\\
&E(Z)=1.6+1.5=3.1,\\
&\operatorname{Var}(Z)=0.32+0.25=0.57.
\end{aligned}
$$

H 不合法：一次项系数 −0.1 不能作概率。乘积解释可以构造有相应边缘 PGF 的独立变量，但并不证明某情境下的实际变量独立。

</details>

</section>

### 逐一独立推导指定分布 {#practice-2}

<section class="lesson-check" id="practice-2-bernoulli" markdown="1">

**Independent derivation A (self-written):** B records success as 1 and failure as 0, with success probability p. From the two probability masses, derive its PGF, mean and variance for 0≤p≤1. Independently check normalisation, the coefficient of t, and both constant-variable boundaries. Do not quote a PGF formula.

从两个概率质量出发，不借用已知 PGF。

<details markdown="1"><summary>提示</summary>

先写概率乘 t 的取值次幂。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$
\begin{aligned}
&G_B(t)=(1-p)t^0+pt^1=1-p+pt,\\
&G_B'(1)=p,\\
&G_B''(1)=0,\\
&\operatorname{Var}(B)=p-p^2=p(1-p),\\
&G_B(1)=1,\\
&[t^1]G_B=p,\\
&p=0:\ G_B=1,\\
&p=1:\ G_B=t.
\end{aligned}
$$

系数检验应能还原原概率表。

</details>

</section>

<section class="lesson-check" id="practice-2-binomial" markdown="1">

**Independent derivation B (self-written):** C counts successes in n independent trials with common probability p, where n≥1. Derive its PGF directly from its probability masses and the binomial theorem, then derive both moments. Test G(1), the coefficient of t² when n=3,p=1/4, and the n=1 and p=0,1 boundaries.

必须由 PMF 展开，并另外检验系数与边界。

<details markdown="1"><summary>提示</summary>

二项展开时将 p 与 t 作为整体。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$
\begin{aligned}
&G_C(t)\\
&\quad=\sum_{k=0}^{n}\binom nk(1-p)^{n-k}(pt)^k\\
&\quad=(1-p+pt)^n,\\
&G_C'(1)=np,\\
&G_C''(1)=n(n-1)p^2,\\
&\operatorname{Var}(C)=np(1-p),\\
&G_C(1)=1,\\
&n=3,\ p=\frac14:\\
&[t^2]G_C=3\left(\frac14\right)^2\frac34=\frac9{64},\\
&E(C)=\frac34,\quad\operatorname{Var}(C)=\frac9{16}.
\end{aligned}
$$

n=1 化为 Bernoulli 多项式，二阶导数为零；p=0、1 时分别为 1 和 t 的 n 次幂，方差均零。

</details>

</section>

<section class="lesson-check" id="practice-2-uniform" markdown="1">

**Independent derivation C (self-written):** U is equally likely on 1,...,n. Derive its polynomial PGF and geometric-sum quotient from the definition. Derive both moments, explain the value at t=1, and test the coefficient of t² for n=4 and the boundary n=1.

分别处理多项式与分式的适用点，并从定义取矩。

<details markdown="1"><summary>提示</summary>

在 t=1 处对有限和求导，不把 t=1 代入零比零分式。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$
\begin{aligned}
&G_U(t)=\frac1n\sum_{k=1}^{n}t^k,\\
&G_U(t)=\frac{t(1-t^n)}{n(1-t)}\quad(t\ne1),\\
&G_U(1)=1,\\
&G_U'(1)=\frac{n+1}2,\\
&G_U''(1)=\frac1n\sum_{k=1}^{n}(k^2-k)\\
&\quad=\frac{n^2-1}3,\\
&\operatorname{Var}(U)=\frac{n^2-1}{12},\\
&n=4:\quad [t^2]G_U=\frac14,\\
&E(U)=\frac52,\quad\operatorname{Var}(U)=\frac54.
\end{aligned}
$$

n=1 时多项式为 t，均值一、方差零；t=1 时是 n 个 1/n 相加。

</details>

</section>

<section class="lesson-check" id="practice-2-geometric" markdown="1">

**Independent derivation D (self-written):** T counts trials through first success in independent trials with probability 0<p≤1. Derive its PGF from the PMF, state the series condition, and derive mean and variance. Test G(0), G(1), the coefficient of t³ for p=1/4, and p=1. Explain why a PGF with a nonzero constant coefficient would be wrong for this T.

独立推导无穷和，并用零点系数、一般系数与边界检验。

<details markdown="1"><summary>提示</summary>

最低幂是一；提出 pt 后再重编号。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$
\begin{aligned}
&G_T(t)\\
&\quad=\sum_{k=1}^{\infty}pq^{k-1}t^k\\
&\quad=pt\sum_{j=0}^{\infty}(qt)^j\\
&\quad=\frac{pt}{1-qt},\\
&\lvert qt\rvert<1,\\
&G_T(1)=1,\\
&G_T'(1)=1/p,\\
&G_T''(1)=2q/p^2,\\
&\operatorname{Var}(T)\\
&\quad=q/p^2,\\
&p=\frac14:\quad [t^3]G_T=\frac9{64},\\
&E(T)=4,\quad\operatorname{Var}(T)=12.
\end{aligned}
$$

G(0)=0，因为试验次数不可能为零。p=1 时 G=t、均值一、方差零；讨论收敛时不能漏掉这个合法边界。

</details>

</section>

<section class="lesson-check" id="practice-3" markdown="1">

**Independent task 3 (self-written):** B is equally likely to be 0 or 1. A student claims the PGF of B+B is the square of its PGF. Derive the actual PGF from the outcomes, find the probability of a sum of 1 and its variance, and explain what experiment the claimed square would describe.

自己辨别复用变量与独立副本，不能只套乘积规则。

<details markdown="1"><summary>提示</summary>

两处 B 是同一次随机结果。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$
\begin{aligned}
&G_{B+B}(t)=\frac12+\frac12t^2,\\
&P(B+B=1)=0,\\
&E(B+B)=1,\\
&\operatorname{Var}(B+B)=1,\\
&[G_B(t)]^2=\frac14+\frac12t+\frac14t^2.
\end{aligned}
$$

所声称的平方表示两个独立 Bernoulli 副本，其和方差为 1/2。

</details>

</section>

## 针对矩、推导或独立性重试 {#retry}

漏二阶原点矩时做重试 1；四种推导中哪一种只是背公式，就从所给概率重新做对应推导重试；无独立条件却用了乘积时做重试 3。

<section class="lesson-check" id="retry-1" markdown="1">

**Retry (self-written):** For $G(t)=(1+t+t^2)/3$, find $P(X=0)$, $E(X^2)$ and variance.

区分二阶阶乘矩和二阶原点矩后再求方差。

<details markdown="1"><summary>提示</summary>

先写阶乘矩转原点矩的恒等式。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$
\begin{aligned}
&P(X=0)=1/3,\\
&G'(1)=1,\\
&G''(1)=2/3,\\
&E(X^2)\\
&\quad=2/3+1\\
&\quad=5/3,\\
&\operatorname{Var}(X)\\
&\quad=5/3-1\\
&\quad=2/3.
\end{aligned}
$$

</details>

</section>

### 改变编码或数据后重建各类 {#retry-2}

<section class="lesson-check" id="retry-2-bernoulli" markdown="1">

**Derivation retry A (self-written):** A trial succeeds with probability p, but F records a failure as 1 and a success as 0. Derive the PGF from the masses and obtain both moments. Check its coefficients and p=0,1.

改变指示变量的编码后重新推导。

<details markdown="1"><summary>提示</summary>

系数跟随记录值，而不是跟随“成功”这个词。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$
\begin{aligned}
&G_F(t)=pt^0+qt^1=p+qt,\\
&G_F(1)=1,\\
&[t^1]G_F=q,\\
&E(F)=q,\\
&\operatorname{Var}(F)=q-q^2=pq,\\
&p=0:\ G_F=t,\\
&p=1:\ G_F=1.
\end{aligned}
$$

</details>

</section>

<section class="lesson-check" id="retry-2-binomial" markdown="1">

**Derivation retry B (self-written):** N counts successes in three independent trials, each with success probability 0.4. Derive its PGF by summing its masses, check the coefficient of t² and normalisation, and obtain its mean and variance by differentiation.

从完整 PMF 重建有限和，并用系数独立检验。

<details markdown="1"><summary>提示</summary>

成功数有四种可能，包含零次。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$
\begin{aligned}
&G_N(t)\\
&\quad=\sum_{k=0}^{3}\binom3k0.6^{3-k}(0.4t)^k\\
&\quad=(0.6+0.4t)^3,\\
&G_N(1)=1,\\
&[t^2]G_N=0.288,\\
&G_N'(1)=1.2,\\
&G_N''(1)=0.96,\\
&\operatorname{Var}(N)=0.96+1.2-1.44=0.72.
\end{aligned}
$$

</details>

</section>

<section class="lesson-check" id="retry-2-uniform" markdown="1">

**Derivation retry C (self-written):** V is uniform on 0,...,m−1. Derive the PGF and its first two factorial moments directly from the finite sum, hence its variance. Check the constant coefficient, G(1) and m=1.

改变支持集起点后重建 PGF 与两矩。

<details markdown="1"><summary>提示</summary>

现在有常数项，不需要整体因子 t。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$
\begin{aligned}
&G_V(t)=\frac1m\sum_{k=0}^{m-1}t^k,\\
&G_V(t)=\frac{1-t^m}{m(1-t)}\quad(t\ne1),\\
&G_V(1)=1,\\
&[t^0]G_V=1/m,\\
&G_V'(1)=\frac{m-1}2,\\
&G_V''(1)=\frac{(m-1)(m-2)}3,\\
&\operatorname{Var}(V)=\frac{m^2-1}{12}.
\end{aligned}
$$

m=1 时 V=0、G=1，两导数及方差均为零。

</details>

</section>

<section class="lesson-check" id="retry-2-geometric" markdown="1">

**Derivation retry D (self-written):** Y counts failures before the first success with probability 0<p≤1 per independent trial. Derive its PGF from the masses and its mean and variance from derivatives. Check G(0), G(1), the coefficient of t² for p=0.4, and p=1.

从失败次数 PMF 重推，不能只把前面公式抄下来。

<details markdown="1"><summary>提示</summary>

求和从零开始，保留收敛条件。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$
\begin{aligned}
&G_Y(t)\\
&\quad=\sum_{k=0}^{\infty}pq^kt^k\\
&\quad=\frac{p}{1-qt},\\
&\lvert qt\rvert<1,\\
&G_Y'(1)=q/p,\\
&G_Y''(1)=2q^2/p^2,\\
&\operatorname{Var}(Y)\\
&\quad=2q^2/p^2+q/p-q^2/p^2\\
&\quad=q/p^2,\\
&G_Y(0)=p,\\
&G_Y(1)=1,\\
&p=0.4:\quad [t^2]G_Y=0.144.
\end{aligned}
$$

p=1 时 Y=0、G=1；均值比试验次数少一，方差不变。

</details>

</section>

<section class="lesson-check" id="retry-3" markdown="1">

**Retry 3 (self-written):** X is uniform on 0,1,2 and Y=2−X. Derive the PGF of their sum from the outcomes. Compare it with the product of their marginal PGFs and explain why the two differ.

先列出和的实际取值，再判断边缘 PGF 能否直接相乘。

<details markdown="1"><summary>提示</summary>

先看和能取哪些值，再考虑求导。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$
\begin{aligned}
&X+Y=2,\\
&G_{X+Y}(t)=t^2,\\
&G_X(t)=G_Y(t)=\frac{1+t+t^2}3,\\
&G_X(t)G_Y(t)\\
&\quad=\frac{1+2t+3t^2+2t^3+t^4}9,\\
&\operatorname{Var}(X+Y)=0.
\end{aligned}
$$

乘积表示独立副本，方差为 4/3；本题一变量决定另一变量，并不独立。

</details>

</section>

## 学完线性组合后再回来 {#later-review}

<section class="lesson-check" id="later-task" markdown="1">

**Later review (self-written):** K counts successes in two fair independent trials. Separately, T counts trials through first success in a fresh sequence of fair independent trials; the sequences are independent. Derive each PGF from its defining probability sum, form the PGF of K+T, and find P(K+T=2), its mean and variance. Check the probability without expanding the whole product.

延后自己识别固定次数与等待次数，独立重建概率和。

<details markdown="1"><summary>提示</summary>

先列哪些取值对的和为二，再做系数核验。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$
\begin{aligned}
&G_K(t)\\
&\quad=\sum_{k=0}^{2}\binom2k\frac{t^k}4,\\
&G_T(t)\\
&\quad=\sum_{r=1}^{\infty}\frac{t^r}{2^r}
\quad(\lvert t\rvert<2).
\end{aligned}
$$

$$
\begin{aligned}
&G_K(t)=\left(\frac{1+t}2\right)^2,\\
&G_T(t)=\frac{t}{2-t},\\
&G_{K+T}(t)\\
&\quad=\left(\frac{1+t}2\right)^2\frac{t}{2-t},\\
&P(K+T=2)\\
&\quad=P(K=0)P(T=2)\\
&\qquad+P(K=1)P(T=1)\\
&\quad=\frac14\frac14+\frac12\frac12\\
&\quad=\frac5{16},\\
&E(K+T)=1+2=3,\\
&\operatorname{Var}(K+T)=\frac12+2=\frac52.
\end{aligned}
$$

</details>

</section>

## 决定下一步 {#next-step}

四种 PGF 都能重建，并能各核验一个系数和两个矩后，再学线性组合。只缺某一类就重做其对应推导重试；阶乘矩混淆时回看求导理由并做重试 1。学完线性组合后完成混合延后回顾，再回到[几何分布延后回顾](/zh/alevel/as-further-mathematics/geometric-distribution/#later-review)，连接失败计数模型。

## 来源与范围 {#sources}

本课范围按 9665 v5.2；以下已读原题及配套评分材料用于设计作答证据，本页练习不是原题复制或官方评分标准。

- [OxfordAQA 9665 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf), FS1.4.
- FM02 June 2024 Q7; QP pp.14–15, MS p.13. [FM02 June 2024 QP](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-question-paper.pdf) · [Final MS](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-mark-scheme.pdf).

[上一课](/zh/alevel/as-further-mathematics/geometric-distribution/) · [课程路线](/zh/alevel/as-further-mathematics/#learning-route) · [下一课](/zh/alevel/as-further-mathematics/linear-combinations/)

{% include exam_topic_practice.html %}
