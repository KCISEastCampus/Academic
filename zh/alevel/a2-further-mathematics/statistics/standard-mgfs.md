---
title: "连续与常用 MGF：推导并检查输入范围"
layout: subjects
mathjax: true
grade: a2
subject: a2-further-mathematics
lang: zh-CN
permalink: /zh/alevel/a2-further-mathematics/statistics/standard-mgfs/
reading_layout: true
study_page: true
toc_headings: h2
translation_of: /alevel/a2-further-mathematics/statistics/standard-mgfs/
---

## 从加权平均走向连续模型 {#start}

在[上一课](/zh/alevel/a2-further-mathematics/statistics/moment-generating-functions/#meaning)，我们把每个指数乘上概率再相加。连续变量有无穷多个可能的值：密度提供权重，积分负责“加起来”。这一课先把这个过程做出来，再判断哪些输入可以使用。例题与练习均为自拟题，不赋官方分值。

先修是指数积分和[独立和的规则](/zh/alevel/a2-further-mathematics/statistics/moment-generating-functions/#sums)。正态分布推导会用到[配方](/zh/alevel/as-mathematics/algebra/#l02)。

若分部积分还不熟悉，回补[怎样选择两个因子及处理剩余积分](/zh/alevel/a2-mathematics/integration/#integration-by-parts)。

## 积分范围与那个看似“不能代”的零 {#continuous}

若 $U$ 在 $[0,2]$ 上均匀分布，这段内的密度是 $1/2$，外面是零。只需要对这一段积分。先对 $t\ne0$ 计算：

$$
M_U(t)=\int_0^2 e^{tu}\frac12\,du=\left[\frac{e^{tu}}{2t}\right]_0^2=\frac{e^{2t}-1}{2t}.
$$

当 $t=0$，回到定义即可：指数变成 $1$，积分就是总概率 $1$。分式在零处写不出来，不代表 MGF 不存在；补上 $M_U(0)=1$ 即可。因为取值范围有界，所有实数 $t$ 都能使用。

## 指数分布为什么限制输入 {#exponential}

<section class="worked-example" markdown="1">

### 完整示范：先推导，再代数值

**Question:** Let $X$ have density $f(x)=\lambda e^{-\lambda x}$ for $x\ge0$, with $\lambda>0$. Derive its MGF, including its range of existence.

把两个指数合并。先积到有限的 $b$，再检查让 $b$ 越来越大时会怎样：

$$
\begin{aligned}
M_X(t)&=\lim_{b\to\infty}\lambda\int_0^b e^{-(\lambda-t)x}\,dx\\
&=\lim_{b\to\infty}\frac{\lambda}{\lambda-t}
       \left(1-e^{-(\lambda-t)b}\right)
=\frac{\lambda}{\lambda-t},\qquad t<\lambda.
\end{aligned}
$$

只有 $\lambda-t>0$，最后那个指数才趋向零。若 $t=\lambda$，被积函数是正常数，积到无穷会发散；若更大，被积函数反而增长。所以不能只说“分母不为零”。再求导检查均值与方差：

$$
M_X'(0)=\frac1\lambda,\qquad M_X''(0)=\frac2{\lambda^2},
\qquad \operatorname{Var}(X)=\frac1{\lambda^2}.
$$

</section>

## Poisson 的无穷和怎样化简 {#poisson}

对 $N\sim\operatorname{Poisson}(\lambda)$，$\lambda>0$，先代入每个概率，再把带 $n$ 的因子合在一起。随后识别指数级数 $e^u=\sum_{n=0}^\infty u^n/n!$：

$$
\begin{aligned}
M_N(t)&=\sum_{n=0}^{\infty}e^{tn}e^{-\lambda}\frac{\lambda^n}{n!}
=e^{-\lambda}\sum_{n=0}^{\infty}\frac{(\lambda e^t)^n}{n!}\\
&=\exp\{\lambda(e^t-1)\},\qquad t\in\mathbb R,\\
M_N'(t)&=\lambda e^t M_N(t),\\
M_N''(t)&=(\lambda e^t+\lambda^2e^{2t})M_N(t).
\end{aligned}
$$

所以 $E(N)=\lambda$，$E(N^2)=\lambda+\lambda^2$，方差是 $\lambda$。指数级数对所有实数输入都收敛。

## 配方之后，看见另一条正态密度 {#normal}

对 $Z\sim N(0,1)$，乘上 $e^{tz}$ 后，变化发生在指数里。对它配方：

$$
tz-\frac{z^2}{2}=-\frac{(z-t)^2}{2}+\frac{t^2}{2},
\qquad
M_Z(t)=e^{t^2/2}\int_{-\infty}^{\infty}
 \frac{e^{-(z-t)^2/2}}{\sqrt{2\pi}}\,dz=e^{t^2/2}.
$$

剩下的积分等于 $1$，因为它是一条中心移到 $t$、方差仍为 $1$ 的正态密度的总面积。这里不需要硬求高斯函数的原函数。再把一般正态变量写成 $X=\mu+\sigma Z$，$\sigma>0$，用上一课的变换规则：

$$
M_X(t)=e^{\mu t}M_Z(\sigma t)
=\exp\left(\mu t+\frac{\sigma^2t^2}{2}\right),\qquad t\in\mathbb R.
$$

## 相乘之前，检查独立与输入范围 {#domains}

独立的 $X,Y$ 相加，MGF 才能相乘；可用范围要同时满足两边，即取交集。对 $a+bX$，检查的是 $bt$ 是否在原范围内，负数系数会把不等号方向翻转。若 MGF 在零附近存在，它能唯一确定分布，因此可以通过匹配 MGF 识别和的分布。

$$
X\sim\operatorname{Poisson}(a),\ Y\sim\operatorname{Poisson}(b),\ X\perp Y
\ \Longrightarrow\
M_{X+Y}(t)=e^{(a+b)(e^t-1)}
\ \Longrightarrow\ X+Y\sim\operatorname{Poisson}(a+b).
$$

独立正态变量相加时，指数中的均值与方差分别相加，所以和仍是正态。反过来，$X+X=2X$ 是同一个变量重复使用，要写 $M_X(2t)$，不能平方 MGF。

## 合上示范，自己完成 {#practice}

<section class="lesson-check" markdown="1">

### 有界的密度 {#task-a}

**Question:** A variable $V$ has density $f(v)=2v$ for $0<v<1$, zero otherwise. Derive its MGF, including $t=0$ and its real existence range. Find its mean and variance directly from the density.

<details markdown="1"><summary>提示</summary>

用分部积分处理 $\int ve^{tv}\,dv$；零点回到定义。

</details>

<details markdown="1"><summary>解答</summary>

当 $t\ne0$，分部积分得
选择 $u=v$、$dw=e^{tv}\,dv$，则 $du=dv$、$w=e^{tv}/t$。

$$
\int ve^{tv}\,dv=\frac{ve^{tv}}t-\frac1t\int e^{tv}\,dv
=\frac{ve^{tv}}t-\frac{e^{tv}}{t^2}+C.
$$

$$
M_V(t)=2\left[\frac{ve^{tv}}t-\frac{e^{tv}}{t^2}\right]_0^1
=\frac{2((t-1)e^t+1)}{t^2}.
$$
上限代入为 $2(e^t/t-e^t/t^2)$，下限为 $-2/t^2$；必须用上限减下限。零点由定义 $M_V(0)=\int_0^1 2v\,dv=1$。支撑有界，所以所有实数 $t$ 都可用。
$$
E(V)=\int_0^1 2v^2\,dv=\frac23,\quad
E(V^2)=\int_0^1 2v^3\,dv=\frac12,\quad
\operatorname{Var}(V)=\frac1{18}.
$$

</details>

</section>

<section class="lesson-check" markdown="1">

### 两个等待时间的差 {#task-b}

**Question:** Independent variables $A,B$ are exponential with rates $2,3$ respectively. Find the MGF and existence range of $D=A-B$, then its mean and variance.

<details markdown="1"><summary>提示</summary>

先单独写出 $M_B(-t)$ 的可用范围，再取交集。

</details>

<details markdown="1"><summary>解答</summary>

$$
M_D(t)=\frac2{2-t}\frac3{3+t},\qquad -3<t<2.
$$
第一项要求 $t<2$，第二项要求 $-t<3$。所以取上述交集。独立性给出 $\operatorname{Var}(A-B)=1/4+1/9=13/36$，而 $E(D)=1/2-1/3=1/6$。差的均值相减，方差仍相加。

</details>

</section>

<section class="lesson-check" markdown="1">

### 识别之后，说明理由 {#task-c}

**Question:** Independent $X\sim N(2,3)$ and $Y\sim N(-1,4)$ are given; the second parameter denotes variance. Use MGFs to identify the distribution of $2X-Y$. Can the same product argument be used if $Y=X$?

<details markdown="1"><summary>提示</summary>

先分别变换，再把 $t$ 和 $t^2$ 的系数合起来。

</details>

<details markdown="1"><summary>解答</summary>

$$
M_{2X-Y}(t)=\exp(4t+6t^2)\exp(t+2t^2)
=\exp(5t+8t^2).
$$
它在所有实数 $t$ 上等于 $N(5,16)$ 的 MGF，由唯一性识别分布。若 $Y=X$，不能再相乘，因为不独立；此时 $2X-Y=X$。

</details>

</section>

<section class="lesson-check" markdown="1">

### 从模型重新建立函数 {#task-d}

**Question:** From the probability mass function, derive the MGF of $N\sim\operatorname{Poisson}(3)$. From the density $f(x)=e^{-(x-1)^2/8}/\sqrt{8\pi}$ on the real line, derive the MGF of $X$. State the existence ranges. Do not begin by quoting the final MGF formulas.

<details markdown="1"><summary>提示</summary>

无穷和里识别指数级数；积分里通过配方留下总面积为一的正态密度。

</details>

<details markdown="1"><summary>解答</summary>

$$
M_N(t)=\sum_{n=0}^{\infty}e^{tn}e^{-3}\frac{3^n}{n!}
=e^{-3}\sum_{n=0}^{\infty}\frac{(3e^t)^n}{n!}
=e^{3(e^t-1)}.
$$
对连续变量，先配方：
$$
tx-\frac{(x-1)^2}{8}
=-\frac{(x-1-4t)^2}{8}+t+2t^2,
$$
于是
$$
M_X(t)=e^{t+2t^2}\int_{-\infty}^{\infty}
\frac{e^{-(x-1-4t)^2/8}}{\sqrt{8\pi}}\,dx=e^{t+2t^2}.
$$
最后的积分是均值 $1+4t$、方差 $4$ 的正态密度总面积。两个 MGF 都对所有实数 $t$ 存在。

</details>

</section>

<section class="lesson-check" markdown="1">

### 平移后的等待时间 {#task-e}

**Question:** A variable $X$ has density $2e^{-2(x-1)}$ for $x\ge1$, zero otherwise. Starting from the continuous definition, derive its MGF and existence range. Show a finite upper integration bound, the limiting argument and what happens at or above the boundary. Check the value at zero.

<details markdown="1"><summary>提示</summary>

可以令 $u=x-1$，上下限也要改变；不能只引用指数分布公式。

</details>

<details markdown="1"><summary>解答</summary>

$$
\begin{aligned}
M_X(t)&=\int_1^\infty e^{tx}2e^{-2(x-1)}\,dx\\
&=2e^t\lim_{B\to\infty}\int_0^B e^{-(2-t)u}\,du\\
&=2e^t\lim_{B\to\infty}
 \left[\frac{-e^{-(2-t)u}}{2-t}\right]_0^B\\
&=\frac{2e^t}{2-t}\lim_{B\to\infty}(1-e^{-(2-t)B})
=\frac{2e^t}{2-t},\quad t<2.
\end{aligned}
$$
换元把 $x=1$ 变为 $u=0$，有限上限 $b$ 变为 $B=b-1$。当 $t=2$，以 $u$ 积分时被积函数为正常数 $2e^2$，积分发散；$t>2$ 时它还会增长。所以范围恰为 $t<2$，并有 $M_X(0)=1$。只检查分母非零，不能保证积分收敛。

</details>

</section>

## 先修原因，再做新题 {#retry}

若在 A 题把零排除了，回看[有界例子](#continuous)；若只靠分母不为零，回看[尾部极限](#exponential)；若方差相减，回补[独立和规则](/zh/alevel/a2-further-mathematics/statistics/moment-generating-functions/#sums)。

<section class="lesson-check" markdown="1">

### 换个情形检查 {#retry-a}

**Question:** (i) Derive the MGF of a uniform variable on $[-1,1]$, with its value at zero. (ii) Independent variables $C,D$ each have density $4e^{-4x}$ for $x\ge0$, zero otherwise. First derive $M_C$ by integration, including its limiting condition; then find the MGF and existence range of $C-2D$.

<details markdown="1"><summary>提示</summary>

两部分分别检查有限积分界，以及负数倍输入。

</details>

<details markdown="1"><summary>解答</summary>

$$
M_U(t)=\left[\frac{e^{tu}}{2t}\right]_{-1}^1
=\frac{e^t-e^{-t}}{2t}\quad(t\ne0),\qquad M_U(0)=1.
$$
可用范围为所有实数。
$$
M_C(t)=\lim_{B\to\infty}4\int_0^B e^{-(4-t)x}\,dx
=\lim_{B\to\infty}\frac4{4-t}(1-e^{-(4-t)B})
=\frac4{4-t},\quad t<4.
$$

$$
M_{C-2D}(t)=\frac4{4-t}\frac4{4+2t},\qquad -2<t<4.
$$
条件是 $t<4$ 且 $-2t<4$，不只是分母不为零。

</details>

</section>

## 学完估计后再回来 {#later-review}

<section class="lesson-check" markdown="1">

### 组合估计 {#later-a}

**Question:** Independent $X_1,\ldots,X_n$ each have MGF $\exp\{\lambda(e^t-1)\}$, with $\lambda>0$. Obtain the MGF of $\bar X$, and decide whether $\bar X$ is unbiased and consistent for $\lambda$. Justify the last claim.

<details markdown="1"><summary>提示</summary>

把相乘与缩放规则连接到均值、方差，再说明收敛。

</details>

<details markdown="1"><summary>解答</summary>

$$
M_{\bar X}(t)=\left[M_X(t/n)\right]^n
=\exp\{n\lambda(e^{t/n}-1)\}.
$$
所以 $E(\bar X)=\lambda$，$\operatorname{Var}(\bar X)=\lambda/n$，估计无偏。对任意 $\varepsilon>0$，Chebyshev 不等式给出 $P(\lvert\bar X-\lambda\rvert\ge\varepsilon)\le\lambda/(n\varepsilon^2)\to0$，所以一致。仅有方差趋零还不够，均值也要朝向正确目标。

</details>

</section>

## 下一步 {#next-step}

[估计量：比较不同规则](/zh/alevel/a2-further-mathematics/statistics/estimators/) · [课程路线](/zh/alevel/a2-further-mathematics/statistics/)
