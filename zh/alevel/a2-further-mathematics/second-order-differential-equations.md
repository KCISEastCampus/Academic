---
title: 二阶微分方程
layout: subjects
mathjax: true
grade: a2
subject: a2-further-mathematics
lang: zh-CN
translation_of: /alevel/a2-further-mathematics/second-order-differential-equations/
permalink: /zh/alevel/a2-further-mathematics/second-order-differential-equations/
toc_headings: "#equation-and-conditions, #auxiliary-equation, #cf-and-pi, #pi-trials, #practice, #diagnose-and-retry, #quick-reference, #common-pitfalls, #sources"
study_page: true
reading_layout: true
---

[高等纯数学](/zh/alevel/a2-further-mathematics/) · FP2.11

一阶方程把函数和它的变化率联系起来。这一章再加上“变化率怎样变化”，也就是二阶导数。我们仍然要找一个函数，使它代入方程后，两边相等。

先读[方程在说什么](#equation-and-conditions)，跟着[例 1](#example-1-distinct-roots)求出一个完整答案，再比较其他根型。右边不为零时，再学习[把解分成两部分](#cf-and-pi)。复习时可直接做[练习](#practice)。

**开始前：**会对指数和三角函数求导，会用[乘积法则](/zh/alevel/a2-mathematics/differentiation/#products-and-quotients)。解二次方程出现负判别式时，可回看[复二次根](/zh/alevel/as-further-mathematics/complex-numbers-and-roots/#conjugate)里的配方示范。后半章接着[一阶 CF 与 PI](/zh/alevel/a2-further-mathematics/first-order-differential-equations/#cf-and-pi)学习；直接积分的例子会用到[幂函数积分](/zh/alevel/a2-mathematics/integration/#power-integrals)。

## 方程形式与给定条件 {#equation-and-conditions}

未知函数仍记作 $y$。$y^{\prime}$ 是它的变化率；再对变化率求导，得到 $y^{\prime\prime}$。因此，二阶导数告诉我们变化率本身怎样改变。

本课把这三个量按固定系数相加：

$$\boxed{ay^{\prime\prime}+by^{\prime}+cy=f(x),\qquad a\ne0,}$$

其中 $a,b,c$ 为整数常数，$y^{\prime}=\frac{\mathrm dy}{\mathrm dx}$，$y^{\prime\prime}=\frac{\mathrm d^2y}{\mathrm dx^2}$。最高阶导数为二阶。方程是线性的（linear）：$y$、$y^{\prime}$ 和 $y^{\prime\prime}$ 都只以一次幂出现，彼此之间没有乘积项。

如果 $f(x)=0$，也就是右边为零，方程叫作**齐次（homogeneous）**方程；否则叫作**非齐次（nonhomogeneous）**方程。本课的右边可以是指数函数、正弦或余弦函数、次数不超过 4 的多项式。也可以把这些函数各乘一个常数再相加，这叫线性组合（linear combination）。

**通解（general solution）**含有两个任意常数（arbitrary constants）。给定条件帮助我们确定它们。**初始条件（initial conditions）**，如 $y(0)=1$ 和 $y^{\prime}(0)=2$，告诉我们同一点处的函数值和斜率。**边界条件（boundary conditions）**，如 $y(0)=1$ 和 $y(1)=3$，告诉我们不同点处的值。

条件还可以说明 $x\to\infty$ 时函数或导数的变化。每次都要把条件代入完整答案；后面的例子会说明，漏掉其中一部分就会算错常数。

条件要提供足够且不重复的信息，才能确定常数。是否足够，要把关于常数的方程列出来，实际解一次。

<details markdown="1">
<summary>两个条件一定能选出唯一解吗？</summary>

不一定。条件必须提供足够且互不重复的信息。例如，$y^{\prime\prime}+y=0$ 配上 $y(0)=y(\pi)=0$ 后，仍得到 $y=B\sin x$。任意常数都能满足这两个边界条件。所以要实际列出并解关于常数的方程，不能只数条件的个数。

</details>

## 辅助方程与齐次通解 {#auxiliary-equation}

先处理右边为零的情况。为什么会想到指数函数？因为它求导后，仍是原来的指数函数，只多一个系数。试设 $y=e^{mx}$，其中 $m$ 是暂时不知道的常数：

$$\begin{aligned}y&=e^{mx},\\y^{\prime}&=me^{mx},\\y^{\prime\prime}&=m^2e^{mx}.\end{aligned}$$

把这三行代入 $ay^{\prime\prime}+by^{\prime}+cy=0$。每一项都有相同的指数因子，提出来便得到

$$e^{mx}(am^2+bm+c)=0.$$

由于 $e^{mx}\ne0$，**辅助方程**为

$$\boxed{am^2+bm+c=0.}$$

这样就把“找函数”变成了“解一个关于指数中常数的二次方程”。先看一道具体题。

<section class="worked-example" markdown="1">

### 例题 1：两个不同实根 {#example-1-distinct-roots}

> **Original example.** Solve $2y^{\prime\prime}-2y^{\prime}-4y=0$, given $y(0)=3$ and $y^{\prime}(0)=0$.

本题为自拟示范。方程右边是零，先用辅助方程找出指数函数，再用两个条件确定它们前面的常数。

将原方程的三个系数原样放进二次式，得 $2m^2-2m-4=0$，即 $2(m-2)(m+1)=0$，根为 $2,-1$。两个指数函数各自都满足方程。方程是线性的，所以它们的任意常数倍相加后仍满足方程：

$$y=Ae^{2x}+Be^{-x},\qquad y^{\prime}=2Ae^{2x}-Be^{-x}.$$

当 $x=0$ 时，$A+B=3$，$2A-B=0$。解得 $A=1$，$B=2$：

$$\boxed{y=e^{2x}+2e^{-x}}.$$

两个指数函数项各自都满足齐次方程。所得解满足 $y(0)=3$ 和 $y^{\prime}(0)=2-2=0$。

</section>

### 再比较三种根型 {#root-types}

辅助方程的根决定**齐次通解（complementary function，CF）**，也就是右边为零时的通解。表的第一行概括刚才的例题，接下来两例说明另外两种情况。

| 辅助方程的根 | 齐次通解 |
|---|---|
| 两个不同实根 $m_1,m_2$ | $y_c=Ae^{m_1x}+Be^{m_2x}$ |
| 实重根（repeated real root）$m$ | $y_c=(A+Bx)e^{mx}$ |
| 共轭复根（complex conjugate roots）$\alpha\pm i\beta$，$\beta>0$ | $y_c=e^{\alpha x}(A\cos\beta x+B\sin\beta x)$ |

出现重根时，写出两个 $e^{mx}$ 只能提供一个独立的函数，无法得到两个线性无关函数（linearly independent functions）；第二个应取 $xe^{mx}$。出现共轭复根时，用实数形式的正弦与余弦组合，可以得到两个线性无关的实函数。根也可以为零：$e^{0x}=1$；若零是重根，齐次通解为 $A+Bx$。

<section class="worked-example" markdown="1">

### 例题 2：实重根 {#example-2-repeated-roots}

> **Original example.** Solve $y^{\prime\prime}+4y^{\prime}+4y=0$, given $y(0)=1$ and $y^{\prime}(0)=0$.

本题为自拟示范。根重复时，不能把同一个函数写两遍：$Ae^{mx}+Be^{mx}=(A+B)e^{mx}$，仍然只有一个可调的系数。第二个函数要换成多乘一个自变量的形式。

由于 $(m+2)^2=0$，通解为 $y=(A+Bx)e^{-2x}$。这是两个函数相乘；求导时，两边的函数都要轮流求导，另一边保持不变：

$$y^{\prime}=[B-2(A+Bx)]e^{-2x}.$$

给定条件得到 $A=1$ 和 $B-2A=0$，所以 $B=2$：

$$\boxed{y=(1+2x)e^{-2x}}.$$

这里 $y^{\prime}=-4xe^{-2x}$，$y^{\prime\prime}=(-4+8x)e^{-2x}$。因此 $y^{\prime\prime}+4y^{\prime}+4y=0$，且两个初始条件均成立。

</section>

<section class="worked-example" markdown="1">

### 例题 3：共轭复根 {#example-3-complex-roots}

> **Original example.** Solve $y^{\prime\prime}+2y^{\prime}+5y=0$, given $y(0)=2$ and $y^{\prime}(0)=0$.

本题为自拟示范。辅助方程出现复根时，最后的函数仍可写成实数形式：实部决定外面的指数因子，虚部的大小决定里面正弦、余弦变化的快慢。

辅助方程为 $(m+1)^2+4=0$，得 $m=-1\pm2i$。因此

$$y=e^{-x}(A\cos2x+B\sin2x).$$

求导得

$$\begin{aligned}y^{\prime}&=e^{-x}\bigl[(-A+2B)\cos2x\\&\qquad+(-B-2A)\sin2x\bigr].\end{aligned}$$

给定条件得到 $A=2$ 和 $-A+2B=0$，所以 $B=1$：

$$\boxed{y=e^{-x}(2\cos2x+\sin2x)}.$$

为检验方程，令 $y=e^{-x}v$。于是 $y^{\prime\prime}+2y^{\prime}+5y=e^{-x}(v^{\prime\prime}+4v)=0$，因为 $v=2\cos2x+\sin2x$ 满足括号内的齐次方程。自变量为零时，函数值和导数值也符合给定条件。

</section>

## 齐次通解加上一个特解 {#cf-and-pi}

右边不为零时，CF 还不够：它代入左边只能给出零。我们再找一个函数，让它代入左边后，正好得到所需的右边。这个函数叫**一个特解（particular integral，PI）**，记作 $y_p$：

$$ay_p^{\prime\prime}+by_p^{\prime}+cy_p=f(x).$$

把两部分相加。由于方程是线性的，代入后得到的结果也相加：零加上题目右边，正好还是题目右边。因此通解为

$$\boxed{y=y_c+y_p.}$$

将 CF 代入方程左边，结果为零；将 PI 代入，结果为 $f(x)$。反过来，原方程任意两个解的差都满足齐次方程，因此将一个 PI 与齐次方程的通解相加，就能得到原方程的全部解。

**PI 与满足给定条件的解（particular solution）是不同概念。**PI 用来组成通解；满足给定条件的解通常还含有 CF 中的项，只是其中的常数已被确定。两个任意常数应放在 CF 中，不要在 PI 中再引入任意常数。

## 如何设特解并检验 {#pi-trials}

先看右边是什么函数，选一种求导后能配出它的形式。系数先留作字母，再通过求导、代入和比较系数把它们算出来。这叫**待定系数法（undetermined coefficients）**。下面的表是选形式的起点；代入后能否得到右边，才是检验。

| 非齐次项 | 尚未检查与 CF 是否重复时，先设的特解形式 |
|---|---|
| $Ke^{kx}$ | $Ce^{kx}$ |
| $K\cos\omega x$ 或 $K\sin\omega x$，$\omega\ne0$ | $C\cos\omega x+D\sin\omega x$ |
| 次数为 $n\le4$ 的多项式 | $C_nx^n+\cdots+C_1x+C_0$ |
| 线性组合 | 将各部分对应的特解形式相加，再确定系数 |

三角函数的特解形式应同时含有正弦项和余弦项，即使右边只有其中一种：$by^{\prime}$ 项可能使两者同时出现。多项式的特解形式应包含所有低次项，因为求导会产生低次项。

<section class="worked-example" markdown="1">

### 多项式特解 {#polynomial-demonstration}

> **Self-written example.** Find the general solution of $y^{\prime\prime}+y=x^2+1$.

这是自拟示范，无官方分值。右边有二次项，就先试完整的二次式。不要只写右边已有的项：二次项求两次导数会变成常数，会影响常数项的比较。这里零不是辅助方程的根，不需要额外乘自变量。

$$\begin{aligned}
m^2+1&=0\quad\Longrightarrow\quad y_c=A\cos x+B\sin x,\\
y_p&=Cx^2+Dx+E,\quad y_p^{\prime}=2Cx+D,\quad y_p^{\prime\prime}=2C,\\
y_p^{\prime\prime}+y_p&=Cx^2+Dx+(E+2C)=x^2+0x+1,\\
C&=1,\quad D=0,\quad E+2=1\quad\Longrightarrow\quad E=-1,\\
y&=\boxed{A\cos x+B\sin x+x^2-1}.
\end{aligned}$$

检验：PI 贡献 $2+(x^2-1)=x^2+1$，CF 贡献零。练习 Q4 改变了次数，要重新比较所有系数。

</section>

<section class="worked-example" markdown="1">

### 零为重根时 {#zero-root-demonstration}

> **Self-written example.** Find the general solution of $y^{\prime\prime}=2x$.

这是自拟示范，无官方分值。这里只有二阶导数，直接积分两次最方便：第一次找出一阶导数，第二次找出函数。每次积分各带来一个常数。辅助多项式是 $m^2$，对应的 CF 正是 $A+Bx$。

$$\begin{aligned}
y^{\prime}&=\int2x\,\mathrm dx=2\frac{x^2}{2}+B=x^2+B,\\
y&=\int(x^2+B)\,\mathrm dx=\frac{x^3}{3}+Bx+A.
\end{aligned}$$

PI $x^3/3$ 的二阶导数为 $2x$。非齐次项一次，PI 却三次；把一次试探式乘以 $x^2$ 才消除重零根的重复。Q7 还要使用边界条件。

</section>

### 共振：所设形式与齐次通解重复 {#resonance}

如果试设形式已经在 CF 里，代入左边就会互相抵消，只剩零。无论怎样调系数，都配不出非零的右边。这种重复叫**共振（resonance）**。要换一种形式：给重复的整部分多乘一个 $x$；如果仍然抵消，再乘一个。具体规则如下，后面的例子会实际检验：

- 对于 $e^{kx}$，应取 $xCe^{kx}$ 来处理辅助方程中 $k$ 为单根（simple root）的情况；若是重根，则取 $x^2Ce^{kx}$。
- 对于只有正弦或余弦函数的非齐次项，若辅助方程的根为 $\pm i\omega$，则取 $x(C\cos\omega x+D\sin\omega x)$。
- 对于多项式非齐次项，考察 $m=0$ 在辅助方程中的重数 $s$，并将所设的多项式乘以 $x^s$。这里 $s$ 为 0、1 或 2；零不是辅助方程的根时，重数记为 0。

例如，若 $c=0$ 但 $b\ne0$，常数非齐次项需要用一次函数作为 PI。若 $b=c=0$，方程为 $ay^{\prime\prime}=f(x)$，直接积分两次最简便。此时，四次多项式非齐次项可以对应六次多项式 PI：次数限制针对的是 $f(x)$，并非解的次数。

<section class="worked-example" markdown="1">

### 例题 4：指数函数特解 {#example-4-exponential-pi}

> **Original example.** Find the general solution of $y^{\prime\prime}-y=6e^{2x}$.

本题为自拟示范。先求右边为零时的 CF。再看题目的右边：指数函数求导后形式不变，因此可以从相同的指数形式开始试 PI。

齐次通解为 $y_c=Ae^x+Be^{-x}$。设 $y_p=Ce^{2x}$，代入得

$$\begin{aligned}
y_p&=Ce^{2x},\qquad y_p^{\prime}=2Ce^{2x},\qquad y_p^{\prime\prime}=4Ce^{2x},\\
y_p^{\prime\prime}-y_p&=(4C-C)e^{2x}=6e^{2x}.
\end{aligned}$$

所以 $C=2$。因此

$$\boxed{y=Ae^x+Be^{-x}+2e^{2x}}.$$

CF 代入方程左边得零；将 $2e^{2x}$ 代入，得到 $6e^{2x}$，因此 $y^{\prime\prime}-y$ 恰好等于题目给定的非齐次项。

</section>

<section class="worked-example" markdown="1">

### 例题 5：三角函数特解 {#example-5-trigonometric-pi}

> **Original example.** Find the general solution of $y^{\prime\prime}+y^{\prime}+2y=3\cos x$.

本题为自拟示范。右边虽然只有余弦，求一次导数却会出现正弦。因此 PI 先同时保留这两项，再由代入结果决定各自的系数。

辅助方程的根为 $(-1\pm i\sqrt7)/2$，因此

$$y_c=e^{-x/2}\left(A\cos\frac{\sqrt7x}{2}+B\sin\frac{\sqrt7x}{2}\right).$$

设 $y_p=C\cos x+D\sin x$，求导得

$$\begin{aligned}y_p^{\prime}&=-C\sin x+D\cos x,\\y_p^{\prime\prime}&=-C\cos x-D\sin x.\end{aligned}$$

代入得

$$\begin{aligned}y_p^{\prime\prime}+y_p^{\prime}+2y_p&=(C+D)\cos x\\&\quad+(D-C)\sin x.\end{aligned}$$

因此 $C+D=3$，$D-C=0$，解得 $C=D=3/2$。通解为

$$\boxed{\begin{aligned}y={}&e^{-x/2}\left(A\cos\frac{\sqrt7x}{2}+B\sin\frac{\sqrt7x}{2}\right)\\&+\frac32(\cos x+\sin x).\end{aligned}}$$

比较系数的结果确认，将 PI 代入方程左边，恰好得到 $3\cos x$。

</section>

<section class="worked-example" markdown="1">

### 单根对应的共振 {#simple-resonance-demonstration}

> **Self-written example.** Find the general solution of $y^{\prime\prime}-y=4e^x$.

**完整示范（自拟，无官方分值）。** 根为 $1,-1$。通常的 $Ce^x$ 代入给 $Ce^x-Ce^x=0$，无法产生非零右边。改试下一种形式，并实际代入确定系数。

$$\begin{aligned}
y_p&=Cxe^x,\\
y_p^{\prime}&=C(1+x)e^x,\qquad y_p^{\prime\prime}=C(2+x)e^x,\\
y_p^{\prime\prime}-y_p&=C[(2+x)-x]e^x=2Ce^x=4e^x,\\
C&=2,\qquad y=\boxed{Ae^x+Be^{-x}+2xe^x}.
\end{aligned}$$

PI 恰好贡献 $4e^x$。这里只需一个 $x$，因为 1 为单根；接下来与重根例比较。

</section>

<section class="worked-example" markdown="1">

### 例题 6：重根对应的共振 {#example-6-repeated-resonance}

> **Original example.** Find the general solution of $y^{\prime\prime}-4y^{\prime}+4y=8e^{2x}$. Explain why neither $Ce^{2x}$ nor $Cxe^{2x}$ is a suitable PI.

本题为自拟示范。先检查题目提出的两种形式为什么都失败，再寻找不会被左边抵消的形式。

辅助方程为 $(m-2)^2=0$，所以 $y_c=(A+Bx)e^{2x}$。题目提出的两种形式代入微分方程左边，都只能得到零。


先实际检验两种失败试探式，不能只凭“乘过 x”判断：

$$\begin{aligned}
v&=Ce^{2x},\quad v^{\prime}=2Ce^{2x},\quad v^{\prime\prime}=4Ce^{2x},\\
v^{\prime\prime}-4v^{\prime}+4v&=C(4-8+4)e^{2x}=0,\\
w&=Cxe^{2x},\quad w^{\prime}=C(1+2x)e^{2x},\quad w^{\prime\prime}=C(4+4x)e^{2x},\\
w^{\prime\prime}-4w^{\prime}+4w&=C[(4+4x)-4(1+2x)+4x]e^{2x}=0.
\end{aligned}$$

设 $y_p=Cx^2e^{2x}$，则

$$\begin{aligned}
y_p^{\prime}&=C(2x+2x^2)e^{2x},\\
y_p^{\prime\prime}&=C(2+8x+4x^2)e^{2x},\\
y_p^{\prime\prime}-4y_p^{\prime}+4y_p&=C[(2+8x+4x^2)-4(2x+2x^2)+4x^2]e^{2x}\\
&=2Ce^{2x}.
\end{aligned}$$

因此 $C=4$，得到

$$\boxed{y=(A+Bx+4x^2)e^{2x}}.$$

需要额外乘以 $x^2$，因为 $e^{2x}$ 和 $xe^{2x}$ 都已经出现在 CF 中。

</section>

<section class="worked-example" markdown="1">

### 正弦余弦共振 {#trig-resonance-demonstration}

> **Self-written example.** Find the general solution of $y^{\prime\prime}+y=2\cos x$.

**完整示范（自拟，无官方分值）。** 辅助根为 $\pm i$，通常的正弦余弦组合已在 CF 中，代入为零。把整个试探式乘以 $x$，保留两个系数直到代入决定它们。

$$\begin{aligned}
y_p&=x(C\cos x+D\sin x),\\
y_p^{\prime}&=C\cos x+D\sin x+x(-C\sin x+D\cos x),\\
y_p^{\prime\prime}&=-2C\sin x+2D\cos x-x(C\cos x+D\sin x),\\
y_p^{\prime\prime}+y_p&=-2C\sin x+2D\cos x=0\sin x+2\cos x,\\
C&=0,\quad D=1,\qquad y=\boxed{A\cos x+B\sin x+x\sin x}.
\end{aligned}$$

PI 贡献 $2\cos x$，因为含 $x$ 的项已相消。Q6 改变频率与非齐次项，还要求对总解使用条件。

</section>

<section class="lesson-check" markdown="1">

### 例题 7：混合非齐次项与无穷远处的条件 {#example-7-mixed-forcing}

这题把前面学过的方法放在一起，请先独立尝试。求出通解后，再使用两个条件；其中一个条件告诉你，自变量不断增大时，导数要趋近什么值。先不展开帮助。

> **Adapted example.** For $x\ge0$, solve $y^{\prime\prime}+y^{\prime}-2y=4x-6e^{-2x}$, given $y(0)=2$ and $y^{\prime}\to-2$ as $x\to\infty$.

本题为改编题，改变了 OxfordAQA 2018 年样卷 FM03 第 7 题的方程与条件，保留了多项式 PI 加上发生共振的指数函数 PI 的方法，然后对完整的解使用给定条件。本题并非官方原题。

<details markdown="1">
<summary>提示</summary>

辅助方程的根为 $1,-2$。设 $y_p=Cx+D+Exe^{-2x}$。使用极限条件时，分别判断 $e^{-2x}$ 和 $xe^{-2x}$ 的极限。

</details>

<details markdown="1">
<summary>解答</summary>

辅助方程 $(m+2)(m-1)=0$ 给出 $y_c=Ae^{-2x}+Be^x$。指数函数非齐次项与 CF 中单根对应的项重复，因此设

$$y_p=Cx+D+Exe^{-2x}.$$

求导得

$$\begin{aligned}y_p^{\prime}&=C+E(1-2x)e^{-2x},\\y_p^{\prime\prime}&=E(4x-4)e^{-2x}.\end{aligned}$$

代入得

$$\begin{aligned}
y_p^{\prime\prime}+y_p^{\prime}-2y_p
&=C-2(Cx+D)+E[(4x-4)+(1-2x)-2x]e^{-2x}\\
&=-2Cx+(C-2D)-3Ee^{-2x}.
\end{aligned}$$

与 $4x-6e^{-2x}$ 比较系数，得

$$-2C=4,\qquad C-2D=0,\qquad -3E=-6.$$

因此 $C=-2$，$D=-1$，$E=2$。先写出通解，再使用给定条件：

$$y=Ae^{-2x}+Be^x-2x-1+2xe^{-2x}.$$

求导得

$$y^{\prime}=-2Ae^{-2x}+Be^x-2+2e^{-2x}-4xe^{-2x}.$$

当 $x\to\infty$ 时，$e^{-2x}\to0$。还需单独说明 $xe^{-2x}=x/e^{2x}\to0$，因为指数函数的增长快于一次函数。因此，导数要趋于 $-2$，必须有 $B=0$；任何非零的 $Be^x$ 都会发散。

再由 $y(0)=A-1=2$，得 $A=3$：

$$\boxed{y=(3+2x)e^{-2x}-2x-1},\qquad x\ge0.$$

检验：将指数函数部分代入方程左边得 $-6e^{-2x}$，多项式部分代入得 $4x$。自变量为零时，函数值为 2，且导数趋于 $-2$。

</details>

</section>

## 练习 {#practice}

按 Q5、Q2、Q6、Q1、Q7、Q3、Q4 的顺序混合练习。打开提示前，说明辅助方程的根如何决定 CF，以及所选 PI 试探式为何不与 CF 重复。

以下七题均为自拟题。适用时，指出 CF 与 PI。先写通解，再使用给定条件；最后检验方程和每一个条件。

<section class="lesson-check" markdown="1">

### 练习 1 {#practice-1}

> Solve $y^{\prime\prime}-5y^{\prime}+6y=0$, given $y(0)=1$ and $y^{\prime}(0)=0$.

<details markdown="1">
<summary>提示</summary>

将辅助方程左边因式分解为 $(m-2)(m-3)$，再解两个联立方程，确定常数。

</details>

<details markdown="1">
<summary>解答</summary>

辅助方程的根为 2 和 3，所以 $y=Ae^{2x}+Be^{3x}$。给定条件得到 $A+B=1$ 和 $2A+3B=0$。解得 $A=3$，$B=-2$：

$$\boxed{y=3e^{2x}-2e^{3x}}.$$

两个指数函数项各自都满足方程，因为指数中的系数分别是辅助方程的根。此外，$y(0)=1$，$y^{\prime}(0)=6-6=0$。

</details>

</section>

<section class="lesson-check" markdown="1">

### 练习 2 {#practice-2}

> Solve $y^{\prime\prime}-2y^{\prime}+y=0$, given $y(0)=0$ and $y^{\prime}(0)=2$.

<details markdown="1">
<summary>提示</summary>

取 $(A+Bx)e^x$，不要写成两个 $e^x$ 项。

</details>

<details markdown="1">
<summary>解答</summary>

辅助方程为 $(m-1)^2=0$，所以 $y=(A+Bx)e^x$，$y^{\prime}=(A+B+Bx)e^x$。由条件得 $A=0$，$B=2$：

$$\boxed{y=2xe^x}.$$

这里 $y^{\prime}=2(1+x)e^x$，$y^{\prime\prime}=2(2+x)e^x$，代入得 $y^{\prime\prime}-2y^{\prime}+y=0$。两个初始值也符合题目要求。

</details>

</section>

<section class="lesson-check" markdown="1">

### 练习 3 {#practice-3}

> Solve $y^{\prime\prime}+9y=0$, given $y(0)=1$ and $y^{\prime}(0)=6$.

<details markdown="1">
<summary>提示</summary>

辅助方程的根为 $\pm3i$，实部为零。

</details>

<details markdown="1">
<summary>解答</summary>

通解为 $y=A\cos3x+B\sin3x$。由 $y^{\prime}=-3A\sin3x+3B\cos3x$，配合给定条件得 $A=1$，$B=2$：

$$\boxed{y=\cos3x+2\sin3x}.$$

求导两次得 $y^{\prime\prime}=-9y$；自变量为零时，$y=1$，$y^{\prime}=6$。

</details>

</section>

<section class="lesson-check" markdown="1">

### 练习 4 {#practice-4}

> Find the general solution of $y^{\prime\prime}+y=x^4$.

<details markdown="1">
<summary>提示</summary>

设 $Cx^4+Dx^3+Ex^2+Fx+G$。比较系数前，应把右边未出现的低次项也包含在所设形式中。

</details>

<details markdown="1">
<summary>解答</summary>

齐次通解为 $A\cos x+B\sin x$。对于所设的多项式，

$$\begin{aligned}
y_p&=Cx^4+Dx^3+Ex^2+Fx+G,\\
y_p^{\prime}&=4Cx^3+3Dx^2+2Ex+F,\\
y_p^{\prime\prime}&=12Cx^2+6Dx+2E,\\
y_p^{\prime\prime}+y_p&=Cx^4+Dx^3+(E+12C)x^2\\
&\quad+(F+6D)x+(G+2E).
\end{aligned}$$

比较系数得 $C=1$，$D=0$，$E=-12$，$F=0$，$G=24$。因此

$$\boxed{y=A\cos x+B\sin x+x^4-12x^2+24}.$$

检验：多项式的二阶导数为 $y_p^{\prime\prime}=12x^2-24$，所以 $y_p^{\prime\prime}+y_p=x^4$。

</details>

</section>

<section class="lesson-check" markdown="1">

### 练习 5 {#practice-5}

> Find the general solution of $y^{\prime\prime}-3y^{\prime}+2y=5e^x$.

<details markdown="1">
<summary>提示</summary>

1 是单根。设 $Cxe^x$。

</details>

<details markdown="1">
<summary>解答</summary>

辅助方程的根为 1 和 2，齐次通解为 $y_c=Ae^x+Be^{2x}$。设 $y_p=Cxe^x$，则

$$y_p^{\prime}=C(1+x)e^x,\qquad y_p^{\prime\prime}=C(2+x)e^x.$$

因此 $y_p^{\prime\prime}-3y_p^{\prime}+2y_p=-Ce^x$，得 $C=-5$：

$$\boxed{y=Ae^x+Be^{2x}-5xe^x}.$$

上述代入过程检验了 PI；辅助方程则检验了 CF。

</details>

</section>

<section class="lesson-check" markdown="1">

### 练习 6 {#practice-6}

> Solve $y^{\prime\prime}+4y=8\sin2x$, given $y(0)=0$ and $y^{\prime}(0)=0$.

<details markdown="1">
<summary>提示</summary>

通常所设的正弦与余弦组合已包含在 CF 中。将其乘以 $x$，再用乘积法则求导。

</details>

<details markdown="1">
<summary>解答</summary>

齐次通解为 $A\cos2x+B\sin2x$。设 $y_p=x(C\cos2x+D\sin2x)$，求导得

$$\begin{aligned}
y_p^{\prime}&=C\cos2x+D\sin2x+x(-2C\sin2x+2D\cos2x),\\
y_p^{\prime\prime}&=-4C\sin2x+4D\cos2x-4x(C\cos2x+D\sin2x),\\
y_p^{\prime\prime}+4y_p&=-4C\sin2x+4D\cos2x\\
&=8\sin2x+0\cos2x.
\end{aligned}$$

因此 $C=-2$，$D=0$，通解为 $y=A\cos2x+B\sin2x-2x\cos2x$。

由初始函数值得 $A=0$。完整解的导数为

$$\begin{aligned}y^{\prime}&=-2A\sin2x+2B\cos2x\\&\quad-2\cos2x+4x\sin2x,\end{aligned}$$

因此 $2B-2=0$，得 $B=1$：

$$\boxed{y=\sin2x-2x\cos2x}.$$

将 PI 代入方程左边得 $8\sin2x$，CF 代入得零；两个初始条件均成立。如果只对 CF 使用 $y^{\prime}(0)=0$，会得到错误的常数。

</details>

</section>

<section class="lesson-check" markdown="1">

### 练习 7 {#practice-7}

> On $0\le x\le1$, solve $y^{\prime\prime}=6x+4$, given $y(0)=1$ and $y(1)=4$. Identify a CF and a PI.

<details markdown="1">
<summary>提示</summary>

辅助方程为 $m^2=0$。积分两次；不能只设一次多项式作为 PI。

</details>

<details markdown="1">
<summary>解答</summary>

把两次积分分别写出，每次保留一个常数：

$$\begin{aligned}
y^{\prime}&=\int(6x+4)\,\mathrm dx
=6\frac{x^2}{2}+4x+B=3x^2+4x+B,\\
y&=\int(3x^2+4x+B)\,\mathrm dx\\
&=3\frac{x^3}{3}+4\frac{x^2}{2}+Bx+A=x^3+2x^2+Bx+A.
\end{aligned}$$

零为重根，因此 $y_c=A+Bx$。积分两次得到一个特解 $y_p=x^3+2x^2$，所以

$$y=x^3+2x^2+A+Bx.$$

边界条件给出 $A=1$ 和 $1+2+1+B=4$，因此 $B=0$：

$$\boxed{y=x^3+2x^2+1},\qquad 0\le x\le1.$$

检验：$y^{\prime\prime}=6x+4$，$y(0)=1$，$y(1)=4$。非齐次项是一次多项式，但由于零为重根，PI 是三次多项式。

</details>

</section>

## 纠错与独立重试 {#diagnose-and-retry}

以下任务均为自拟教学任务，无官方分值。先写下错误原因，再看反馈；随后关闭所有解答，独立完成新任务。需要提示的任务应在稍后重新独立尝试。

<section class="lesson-check" markdown="1">

**Diagnose:** For $y^{\prime\prime}-4y^{\prime}+4y=8e^{2x}$, a learner tries $y_p=Cxe^{2x}$. Test the trial before trying to determine $C$.

<details markdown="1">
<summary>反馈</summary>

代入后对任意 $C$ 都得到零，因为该试探式属于 CF。改用 $Cx^2e^{2x}$，代入后得到 $2Ce^{2x}$，所以 $C=4$。对于重根，只多乘一个 $x$ 仍然不够。

</details>

</section>

<section class="lesson-check" markdown="1">

**Independent retry:** A homogeneous constant-coefficient equation has general solution $y=(A+Bx)e^{-x}$ and leading coefficient 1. Recover its differential equation. Then solve the equation with the same left side and right side $6e^{-x}$, given $y(0)=1$ and $y^{\prime}(0)=0$.

<details markdown="1">
<summary>提示</summary>

从整个解族反推辅助多项式，再检查非齐次项是否与解族重合。

</details>

<details markdown="1">
<summary>重试解答与检验</summary>

辅助多项式为 $(m+1)^2$，故原齐次方程为 $y^{\prime\prime}+2y^{\prime}+y=0$。非齐次右边与重根重复，先检验新的试探式，再对总解使用条件：

$$\begin{aligned}
y_p&=Cx^2e^{-x},\\
y_p^{\prime}&=C(2x-x^2)e^{-x},\\
y_p^{\prime\prime}&=C(2-4x+x^2)e^{-x},\\
y_p^{\prime\prime}+2y_p^{\prime}+y_p
&=C[(2-4x+x^2)+2(2x-x^2)+x^2]e^{-x}\\
&=2Ce^{-x}=6e^{-x}\quad\Longrightarrow\quad C=3,\\
y&=(A+Bx+3x^2)e^{-x},\\
y^{\prime}&=[B+6x-(A+Bx+3x^2)]e^{-x},\\
y(0)&=A=1,\qquad y^{\prime}(0)=B-A=0,\\
y&=\boxed{(1+x+3x^2)e^{-x}}.
\end{aligned}$$

代回左边得到 $6e^{-x}$；两个初始条件也由上式分别核对。

</details>

</section>

**学后下一步：**先关闭本章答案，去课程入口完成[跨主题综合](/zh/alevel/a2-further-mathematics/#mixed-review)；完成后续学习，再做[延后任务](/zh/alevel/a2-further-mathematics/#later-review)。记录首次是否独立、使用了什么提示、错误原因及重试结果；若方法或条件出错，按本章“练习后”返回对应示范，再关闭解答重试。

## 快速参考 {#quick-reference}

| 步骤 | 应写出的内容 | 检查要点 |
|---|---|---|
| CF | 解 $am^2+bm+c=0$ | 保留原方程的系数，包括 $a$ |
| 两个不同实根 | $Ae^{m_1x}+Be^{m_2x}$ | 两个线性无关的指数函数 |
| 实重根 | $(A+Bx)e^{mx}$ | 第二项必须包含因子 $x$ |
| 共轭复根 | $e^{\alpha x}(A\cos\beta x+B\sin\beta x)$ | 实部决定指数因子；虚部决定角频率 |
| PI | 设合适形式、求导、代入、比较系数 | 包含正弦与余弦项，以及所有低次多项式项 |
| 共振 | 将重复部分乘以 $x$ 或 $x^2$ | 根据根的重数选择幂次，再代入检验 |
| 通解 | $y=y_c+y_p$ | 恰好含两个任意常数 |
| 给定条件 | 使用完整的 $y$ 和完整的 $y^{\prime}$ | 逐项判断极限 |
| 最后检验 | 计算 $ay^{\prime\prime}+by^{\prime}+cy$ | 结果应为 $f(x)$，并满足每一个条件 |
{: .wide-table}

## 常见错误 {#common-pitfalls}

- 遇到重根时，写成同一个指数函数的两个倍数。
- 写 CF 时，把复根的实部与虚部作用弄反。
- 所设 PI 已包含在 CF 中；或遇到指数函数对应重根时，只乘一次 $x$。
- 只设正弦项或余弦项，却没有检查求导产生的项。
- 比较系数前，漏掉多项式的低次项。
- 在 $c=0$ 时，仍假定 PI 的多项式次数一定与非齐次项相同。
- 未加上 PI 就对 CF 使用给定条件；或计算 $y^{\prime}$ 时漏掉 PI 的导数。
- 断言 $xe^{-kx}\to0$ 时，仅以 $e^{-kx}\to0$ 为理由；应说明 $k>0$ 时这个乘积的极限。

**练习之后：**凡是展开过提示的题目，都再独立做一次。写出辅助方程、CF、所设 PI 及代入过程；先写通解，再使用给定条件。

**学习路径：**[上一课：一阶微分方程](/zh/alevel/a2-further-mathematics/first-order-differential-equations/) · [下一课：向量积与共面](/zh/alevel/a2-further-mathematics/vector-products-and-coplanarity/) · [高等纯数学](/zh/alevel/a2-further-mathematics/)。

## 资料来源 {#sources}

教材：*International A Level Further Mathematics*，第 25.2 节，印刷页码 308–317；复习见 p.319。

本轮范围核对：2026-10-23，从当前 9665 资格页打开大纲，核对正文 v5.2 及本课条目；没有迁移至 9765。下列试卷／评分材料仅重新读取所注明题目与配套评分部分的 PDF 文本，未完成原卷图像的视觉核验。官方题身份与分值保留，改编与自拟任务不称官方题。

本课范围依据 [OxfordAQA 国际 A-level 高等数学课程大纲 FP2.11，印刷页码 20](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf)。例题 7 改编自 2018 年样卷 FM03 第 7 题的方法，并对照官方评分细则第 7 题核对：代入 PI、比较系数、加上 CF，再使用给定条件，并说明趋于零的乘积极限。本题改变了方程与数值，不对应官方配分。其余例题和练习均为自拟题。

[OxfordAQA Specimen 2018, Q7, QP PDF p. 12](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9665-FM03-international-a-level-further-mathematics-specimen-paper-2019-v3.pdf#page=12); [MS Q7, PDF p. 10](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9665-FM03-international-a-level-further-mathematics-mark-scheme-2016-v1.pdf#page=10). 本轮重新读取对应题干及评分材料（2026-10-23，PDF 文本）；只借用已注明的方法，不把改编题或新增自拟任务称为原题。
