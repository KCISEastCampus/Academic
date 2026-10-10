---
title: 二阶微分方程
layout: subjects
mathjax: true
grade: a2
subject: a2-further-mathematics
lang: zh-CN
translation_of: /alevel/a2-further-mathematics/second-order-differential-equations/
permalink: /zh/alevel/a2-further-mathematics/second-order-differential-equations/
toc_headings: h2
study_page: true
---

[高等纯数学](/zh/alevel/a2-further-mathematics/) · FP2.11 二阶微分方程

本课学习求解常系数二阶线性微分方程（second-order linear differential equation with constant coefficients）：先通过辅助方程（auxiliary equation）求齐次通解（complementary function，CF），再通过代入确定一个特解（particular integral，PI），最后对完整的解使用给定条件。

- **学习：**从[辅助方程](#auxiliary-equation)开始，再学习[齐次通解加上一个特解](#cf-and-pi)和[如何设特解](#pi-trials)。
- **作业帮助：**比较[两个不同实根](#example-1-distinct-roots)、[实重根](#example-2-repeated-roots)、[共轭复根](#example-3-complex-roots)、[三角函数非齐次项](#example-5-trigonometric-pi)和[共振](#example-6-repeated-resonance)的例题。
- **复习：**先独立完成[练习](#practice)，再展开解答，最后核对[快速参考](#quick-reference)与[常见错误](#common-pitfalls)。

教材：*International A Level Further Mathematics*，第 25.2 节，印刷页码 308–317；复习内容见印刷页码 319。

**开始前：**复习乘积法则（product rule）、一元二次方程的复根（complex roots），以及 [FP2.10 一阶微分方程](/zh/alevel/a2-further-mathematics/first-order-differential-equations/)。

## 方程形式与给定条件 {#equation-and-conditions}

本课的方程具有以下形式：

$$\boxed{ay^{\prime\prime}+by^{\prime}+cy=f(x),\qquad a\ne0,}$$

其中 $a,b,c$ 为整数常数，$y^{\prime}=\frac{\mathrm dy}{\mathrm dx}$，$y^{\prime\prime}=\frac{\mathrm d^2y}{\mathrm dx^2}$。最高阶导数为二阶。方程是线性的（linear）：$y$、$y^{\prime}$ 和 $y^{\prime\prime}$ 都只以一次幂出现，彼此之间没有乘积项。

当 $f(x)=0$ 时，方程称为**齐次（homogeneous）**方程；否则称为**非齐次（nonhomogeneous）**方程。本课的非齐次项（forcing function）可以是指数函数、正弦或余弦函数、次数不超过 4 的多项式，以及这些函数的线性组合（linear combination）。

**通解（general solution）**含有两个任意常数（arbitrary constants）。**初始条件（initial conditions）**，如 $y(0)=1$ 和 $y^{\prime}(0)=2$，规定同一点处的函数值或导数值。**边界条件（boundary conditions）**，如 $y(0)=1$ 和 $y(1)=3$，规定不同点处的值。关于 $x\to\infty$ 时函数或导数行为的条件，也可以用来确定常数。使用每一个条件时，都必须代入完整的解，包括其中的 PI。

两个合适且相互独立的条件可以确定常数。但边界条件未必足以确定唯一解：例如，$y^{\prime\prime}+y=0$ 配上 $y(0)=y(\pi)=0$ 后，仍得到 $y=B\sin x$。因此，应实际求解关于常数的方程，不能直接假定解唯一。

## 辅助方程与齐次通解 {#auxiliary-equation}

对于齐次方程 $ay^{\prime\prime}+by^{\prime}+cy=0$，设 $y=e^{mx}$。代入得

$$e^{mx}(am^2+bm+c)=0.$$

由于 $e^{mx}\ne0$，**辅助方程**为

$$\boxed{am^2+bm+c=0.}$$

辅助方程的根决定**齐次通解（CF）**，即对应齐次方程的通解。

| 辅助方程的根 | 齐次通解 |
|---|---|
| 两个不同实根 $m_1,m_2$ | $y_c=Ae^{m_1x}+Be^{m_2x}$ |
| 实重根（repeated real root）$m$ | $y_c=(A+Bx)e^{mx}$ |
| 共轭复根（complex conjugate roots）$\alpha\pm i\beta$，$\beta>0$ | $y_c=e^{\alpha x}(A\cos\beta x+B\sin\beta x)$ |

出现重根时，写出两个 $e^{mx}$ 只能提供一个独立的函数，无法得到两个线性无关函数（linearly independent functions）；第二个应取 $xe^{mx}$。出现共轭复根时，用实数形式的正弦与余弦组合，可以得到两个线性无关的实函数。根也可以为零：$e^{0x}=1$；若零是重根，齐次通解为 $A+Bx$。

### 例题 1：两个不同实根 {#example-1-distinct-roots}

> **Original example.** Solve $2y^{\prime\prime}-2y^{\prime}-4y=0$, given $y(0)=3$ and $y^{\prime}(0)=0$.

本题为自拟例题。

<details markdown="1">
<summary>提示</summary>

将 $2m^2-2m-4$ 因式分解。在使用第二个条件前，先对通解求导。

</details>

<details markdown="1">
<summary>解答</summary>

辅助方程为 $2(m-2)(m+1)=0$，根为 $2,-1$。因此

$$y=Ae^{2x}+Be^{-x},\qquad y^{\prime}=2Ae^{2x}-Be^{-x}.$$

当 $x=0$ 时，$A+B=3$，$2A-B=0$。解得 $A=1$，$B=2$：

$$\boxed{y=e^{2x}+2e^{-x}}.$$

两个指数函数项各自都满足齐次方程。所得解满足 $y(0)=3$ 和 $y^{\prime}(0)=2-2=0$。

</details>

### 例题 2：实重根 {#example-2-repeated-roots}

> **Original example.** Solve $y^{\prime\prime}+4y^{\prime}+4y=0$, given $y(0)=1$ and $y^{\prime}(0)=0$.

本题为自拟例题。

<details markdown="1">
<summary>提示</summary>

辅助方程有重根。取 $(A+Bx)e^{-2x}$，并用乘积法则求导。

</details>

<details markdown="1">
<summary>解答</summary>

由于 $(m+2)^2=0$，通解为 $y=(A+Bx)e^{-2x}$。求导得

$$y^{\prime}=[B-2(A+Bx)]e^{-2x}.$$

给定条件得到 $A=1$ 和 $B-2A=0$，所以 $B=2$：

$$\boxed{y=(1+2x)e^{-2x}}.$$

这里 $y^{\prime}=-4xe^{-2x}$，$y^{\prime\prime}=(-4+8x)e^{-2x}$。因此 $y^{\prime\prime}+4y^{\prime}+4y=0$，且两个初始条件均成立。

</details>

### 例题 3：共轭复根 {#example-3-complex-roots}

> **Original example.** Solve $y^{\prime\prime}+2y^{\prime}+5y=0$, given $y(0)=2$ and $y^{\prime}(0)=0$.

本题为自拟例题。

<details markdown="1">
<summary>提示</summary>

对 $m^2+2m+5$ 配方。指数因子与三角函数的角频率（angular frequency）分别由根的实部和虚部确定。

</details>

<details markdown="1">
<summary>解答</summary>

辅助方程为 $(m+1)^2+4=0$，得 $m=-1\pm2i$。因此

$$y=e^{-x}(A\cos2x+B\sin2x).$$

求导得

$$y^{\prime}=e^{-x}[(-A+2B)\cos2x+(-B-2A)\sin2x].$$

给定条件得到 $A=2$ 和 $-A+2B=0$，所以 $B=1$：

$$\boxed{y=e^{-x}(2\cos2x+\sin2x)}.$$

为检验方程，令 $y=e^{-x}v$。于是 $y^{\prime\prime}+2y^{\prime}+5y=e^{-x}(v^{\prime\prime}+4v)=0$，因为 $v=2\cos2x+\sin2x$ 满足括号内的齐次方程。自变量为零时，函数值和导数值也符合给定条件。

</details>

## 齐次通解加上一个特解 {#cf-and-pi}

**一个特解（PI）**是满足完整方程的某个函数 $y_p$：

$$ay_p^{\prime\prime}+by_p^{\prime}+cy_p=f(x).$$

由方程的线性性质，加上齐次通解便得到原方程的通解：

$$\boxed{y=y_c+y_p.}$$

将 CF 代入方程左边，结果为零；将 PI 代入，结果为 $f(x)$。反过来，原方程任意两个解的差都满足齐次方程，因此将一个 PI 与齐次方程的通解相加，就能得到原方程的全部解。

**PI 与满足给定条件的解（particular solution）是不同概念。**PI 用来组成通解；满足给定条件的解通常还含有 CF 中的项，只是其中的常数已被确定。两个任意常数应放在 CF 中，不要在 PI 中再引入任意常数。

## 如何设特解并检验 {#pi-trials}

使用**待定系数法（undetermined coefficients）**：先根据非齐次项设合适的特解形式，再求导、代入原方程，最后比较系数。

| 非齐次项 | 尚未检查与 CF 是否重复时，先设的特解形式 |
|---|---|
| $Ke^{kx}$ | $Ce^{kx}$ |
| $K\cos\omega x$ 或 $K\sin\omega x$，$\omega\ne0$ | $C\cos\omega x+D\sin\omega x$ |
| 次数为 $n\le4$ 的多项式 | $C_nx^n+\cdots+C_1x+C_0$ |
| 线性组合 | 将各部分对应的特解形式相加，再确定系数 |

三角函数的特解形式应同时含有正弦项和余弦项，即使右边只有其中一种：$by^{\prime}$ 项可能使两者同时出现。多项式的特解形式应包含所有低次项，因为求导会产生低次项。

### 共振：所设形式与齐次通解重复 {#resonance}

如果所设的函数本身就是齐次方程的解，代入方程左边只会得到零。这种重复称为**共振（resonance）**。将整个重复的部分乘以 $x$ 的幂，并选择能消除重复的最低次幂：

- 对于 $e^{kx}$，应取 $xCe^{kx}$ 来处理辅助方程中 $k$ 为单根（simple root）的情况；若是重根，则取 $x^2Ce^{kx}$。
- 对于只有正弦或余弦函数的非齐次项，若辅助方程的根为 $\pm i\omega$，则取 $x(C\cos\omega x+D\sin\omega x)$。
- 对于多项式非齐次项，考察 $m=0$ 在辅助方程中的重数 $s$，并将所设的多项式乘以 $x^s$。这里 $s$ 为 0、1 或 2；零不是辅助方程的根时，重数记为 0。

例如，若 $c=0$ 但 $b\ne0$，常数非齐次项需要用一次函数作为 PI。若 $b=c=0$，方程为 $ay^{\prime\prime}=f(x)$，直接积分两次最简便。此时，四次多项式非齐次项可以对应六次多项式 PI：次数限制针对的是 $f(x)$，并非解的次数。

### 例题 4：指数函数特解 {#example-4-exponential-pi}

> **Original example.** Find the general solution of $y^{\prime\prime}-y=6e^{2x}$.

本题为自拟例题。

<details markdown="1">
<summary>提示</summary>

辅助方程的根为 $1,-1$。非齐次项中的指数函数不在 CF 中，因此设 $Ce^{2x}$。

</details>

<details markdown="1">
<summary>解答</summary>

齐次通解为 $y_c=Ae^x+Be^{-x}$。设 $y_p=Ce^{2x}$，代入得

$$y_p^{\prime\prime}-y_p=(4C-C)e^{2x}=6e^{2x},$$

所以 $C=2$。因此

$$\boxed{y=Ae^x+Be^{-x}+2e^{2x}}.$$

CF 代入方程左边得零；将 $2e^{2x}$ 代入，得到 $6e^{2x}$，因此 $y^{\prime\prime}-y$ 恰好等于题目给定的非齐次项。

</details>

### 例题 5：三角函数特解 {#example-5-trigonometric-pi}

> **Original example.** Find the general solution of $y^{\prime\prime}+y^{\prime}+2y=3\cos x$.

本题为自拟例题。

<details markdown="1">
<summary>提示</summary>

设 $C\cos x+D\sin x$。只设余弦项，无法抵消 $y^{\prime}$ 产生的正弦项。

</details>

<details markdown="1">
<summary>解答</summary>

辅助方程的根为 $(-1\pm i\sqrt7)/2$，因此

$$y_c=e^{-x/2}\left(A\cos\frac{\sqrt7x}{2}+B\sin\frac{\sqrt7x}{2}\right).$$

设 $y_p=C\cos x+D\sin x$，求导得

$$y_p^{\prime}=-C\sin x+D\cos x,\qquad y_p^{\prime\prime}=-C\cos x-D\sin x.$$

代入得

$$y_p^{\prime\prime}+y_p^{\prime}+2y_p=(C+D)\cos x+(D-C)\sin x.$$

因此 $C+D=3$，$D-C=0$，解得 $C=D=3/2$。通解为

$$\boxed{y=e^{-x/2}\left(A\cos\frac{\sqrt7x}{2}+B\sin\frac{\sqrt7x}{2}\right)+\frac32(\cos x+\sin x)}.$$

比较系数的结果确认，将 PI 代入方程左边，恰好得到 $3\cos x$。

</details>

### 例题 6：重根对应的共振 {#example-6-repeated-resonance}

> **Original example.** Find the general solution of $y^{\prime\prime}-4y^{\prime}+4y=8e^{2x}$. Explain why neither $Ce^{2x}$ nor $Cxe^{2x}$ is a suitable PI.

本题为自拟例题。

<details markdown="1">
<summary>提示</summary>

2 是重根。题目提出的两种形式都属于 CF。应设 $Cx^2e^{2x}$。

</details>

<details markdown="1">
<summary>解答</summary>

辅助方程为 $(m-2)^2=0$，所以 $y_c=(A+Bx)e^{2x}$。题目提出的两种形式代入微分方程左边，都只能得到零。

设 $y_p=Cx^2e^{2x}$，则

$$\begin{aligned}
y_p^{\prime}&=C(2x+2x^2)e^{2x},\\
y_p^{\prime\prime}&=C(2+8x+4x^2)e^{2x},\\
y_p^{\prime\prime}-4y_p^{\prime}+4y_p&=2Ce^{2x}.
\end{aligned}$$

因此 $C=4$，得到

$$\boxed{y=(A+Bx+4x^2)e^{2x}}.$$

需要额外乘以 $x^2$，因为 $e^{2x}$ 和 $xe^{2x}$ 都已经出现在 CF 中。

</details>

### 例题 7：混合非齐次项与无穷远处的条件 {#example-7-mixed-forcing}

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

$$y_p^{\prime}=C+E(1-2x)e^{-2x},\qquad y_p^{\prime\prime}=E(4x-4)e^{-2x}.$$

代入得

$$y_p^{\prime\prime}+y_p^{\prime}-2y_p=-2Cx+(C-2D)-3Ee^{-2x}.$$

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

## 练习 {#practice}

以下七题均为自拟题。适用时，指出 CF 与 PI。先写通解，再使用给定条件；最后检验方程和每一个条件。

### 第 1 题：两个不同实根 {#practice-1}

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

### 第 2 题：实重根 {#practice-2}

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

### 第 3 题：纯振荡 {#practice-3}

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

### 第 4 题：四次多项式 {#practice-4}

> Find the general solution of $y^{\prime\prime}+y=x^4$.

<details markdown="1">
<summary>提示</summary>

设 $Cx^4+Dx^3+Ex^2+Fx+G$。比较系数前，应把右边未出现的低次项也包含在所设形式中。

</details>

<details markdown="1">
<summary>解答</summary>

齐次通解为 $A\cos x+B\sin x$。对于所设的多项式，

$$y_p^{\prime\prime}+y_p=Cx^4+Dx^3+(E+12C)x^2+(F+6D)x+(G+2E).$$

比较系数得 $C=1$，$D=0$，$E=-12$，$F=0$，$G=24$。因此

$$\boxed{y=A\cos x+B\sin x+x^4-12x^2+24}.$$

检验：多项式的二阶导数为 $y_p^{\prime\prime}=12x^2-24$，所以 $y_p^{\prime\prime}+y_p=x^4$。

</details>

### 第 5 题：单根对应的指数函数共振 {#practice-5}

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

### 第 6 题：三角函数共振 {#practice-6}

> Solve $y^{\prime\prime}+4y=8\sin2x$, given $y(0)=0$ and $y^{\prime}(0)=0$.

<details markdown="1">
<summary>提示</summary>

通常所设的正弦与余弦组合已包含在 CF 中。将其乘以 $x$，再用乘积法则求导。

</details>

<details markdown="1">
<summary>解答</summary>

齐次通解为 $A\cos2x+B\sin2x$。设 $y_p=x(C\cos2x+D\sin2x)$，求导得

$$y_p^{\prime\prime}+4y_p=-4C\sin2x+4D\cos2x.$$

因此 $C=-2$，$D=0$，通解为 $y=A\cos2x+B\sin2x-2x\cos2x$。

由初始函数值得 $A=0$。完整解的导数为

$$y^{\prime}=-2A\sin2x+2B\cos2x-2\cos2x+4x\sin2x,$$

因此 $2B-2=0$，得 $B=1$：

$$\boxed{y=\sin2x-2x\cos2x}.$$

将 PI 代入方程左边得 $8\sin2x$，CF 代入得零；两个初始条件均成立。如果只对 CF 使用 $y^{\prime}(0)=0$，会得到错误的常数。

</details>

### 第 7 题：零为重根与边界条件 {#practice-7}

> On $0\le x\le1$, solve $y^{\prime\prime}=6x+4$, given $y(0)=1$ and $y(1)=4$. Identify a CF and a PI.

<details markdown="1">
<summary>提示</summary>

辅助方程为 $m^2=0$。积分两次；不能只设一次多项式作为 PI。

</details>

<details markdown="1">
<summary>解答</summary>

零为重根，因此 $y_c=A+Bx$。积分两次得到一个特解 $y_p=x^3+2x^2$，所以

$$y=x^3+2x^2+A+Bx.$$

边界条件给出 $A=1$ 和 $1+2+1+B=4$，因此 $B=0$：

$$\boxed{y=x^3+2x^2+1},\qquad 0\le x\le1.$$

检验：$y^{\prime\prime}=6x+4$，$y(0)=1$，$y(1)=4$。非齐次项是一次多项式，但由于零为重根，PI 是三次多项式。

</details>

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

**学习路径：**[上一课：一阶微分方程](/zh/alevel/a2-further-mathematics/first-order-differential-equations/) · FP2.12 向量与三维坐标几何（准备中） · [高等纯数学](/zh/alevel/a2-further-mathematics/)。

## 资料来源 {#sources}

本课范围依据 [OxfordAQA 国际 A-level 高等数学课程大纲 FP2.11，印刷页码 20](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf)。例题 7 改编自 [2018 年样卷 FM03 第 7 题](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9665-FM03-international-a-level-further-mathematics-specimen-paper-2019-v3.pdf)的方法，并对照[官方评分细则第 7 题](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9665-FM03-international-a-level-further-mathematics-mark-scheme-2016-v1.pdf)核对：代入 PI、比较系数、加上 CF，再使用给定条件，并说明趋于零的乘积极限。本题改变了方程与数值，不对应官方配分。其余例题和练习均为自拟题。
