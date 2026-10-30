---
title: 一阶微分方程
layout: subjects
mathjax: true
grade: a2
subject: a2-further-mathematics
lang: zh-CN
translation_of: /alevel/a2-further-mathematics/first-order-differential-equations/
permalink: /zh/alevel/a2-further-mathematics/first-order-differential-equations/
toc_headings: "#standard-form, #integrating-factor, #cf-and-pi, #practice, #diagnose-and-retry, #later-review, #quick-reference, #common-pitfalls, #sources"
study_page: true
reading_layout: true
---

[高等纯数学](/zh/alevel/a2-further-mathematics/) · FP2.10

这次要求的答案是一个函数。题目告诉我们：函数的值和它的导数必须满足某个关系。我们要找出这个函数，再用给定条件确定其中的常数。

先读[方程在说什么](#standard-form)，再跟着[例 1](#example-1-normalise-and-solve)做一遍，然后自己尝试[例 2](#example-2-variable-coefficient)。已经学过的同学可以直接做[练习](#practice)。

**开始前：**会用[乘积法则](/zh/alevel/a2-mathematics/differentiation/#products-and-quotients)展开两个函数相乘后的导数，会算[指数与对数积分](/zh/alevel/a2-mathematics/integration/#exponential-logarithmic-integrals)。不熟时先回看对应示范，再回来。本课接着 [P2.8 可分离变量方程](/zh/alevel/a2-mathematics/differential-equations/)学习；这里的方程不一定能把变量直接分开。

## 标准形式与一族解 {#standard-form}

把未知函数记作 $y$。$y^{\prime}=\frac{\mathrm dy}{\mathrm dx}$ 表示它的变化率，也就是图像在该点的斜率。方程里最高只出现一阶导数，所以称为**一阶（first-order）**。

本课只处理**线性（linear）**方程：$y$ 和 $y^{\prime}$ 都只出现一次幂，没有 $yy^{\prime}$ 这样的相乘，也没有 $y^2$ 或 $\sin y$。它们的系数可以随自变量变化。

一阶线性方程的标准形式为

$$\boxed{y^{\prime}+P(x)y=Q(x).}$$

这里 $P$ 是乘在 $y$ 前面的函数，$Q$ 是右边的函数。先让 $y^{\prime}$ 前面的系数变成 1，这样后面的乘积法则才能对上。对于

$$a(x)y^{\prime}+b(x)y=c(x),$$

标准形式中的系数为 $P=b/a$ 和 $Q=c/a$，适用于 $a(x)\ne0$ 的区间。

**通解（general solution）**含有一个任意常数（arbitrary constant）。**初始条件**（如 $y(0)=2$）规定起点处的函数值；**边界条件**（如 $y(2)=5$）规定某个边界处的函数值。两类条件都可以用来确定常数，从而得到**满足给定条件的解（particular solution）**。

**先看方法在哪一段能用。**在所选区间内，标准形式的系数都应连续。如果在 $x=0$ 处不能化为标准形式，先分别在 $x>0$ 或 $x<0$ 求解，不要直接把两边的常数当成同一个。

解能不能再包含零？要回到原方程另查。如果原式含有 $1/x$，零处无定义；但如果只是导数前面的系数变为零，原方程仍可能有定义。想把解延伸到该点，就要检查函数在那里可微，并满足原式。标准形式在某点失效时，该点称为这个标准形式的奇点（singular point）。

## 积分因子 {#integrating-factor}

### 方法为什么成立 {#derive-integrating-factor}

我们希望左边能写成“某个乘积的导数”。这样只要积分，就能去掉导数。

先看一个具体的乘积。对指数函数和未知函数的乘积求导：

$$(e^{2x}y)^{\prime}=e^{2x}y^{\prime}+2e^{2x}y=e^{2x}(y^{\prime}+2y).$$

这说明：如果方程左边正好是括号中的形式，乘上这个指数函数后，就能合成一个导数。**积分因子（integrating factor）**就是为此选择的乘数，记作 $\mu$（读作 mu）。下面找一般的选法。

将标准形式的每一项乘以函数 $\mu(x)$：

$$\mu y^{\prime}+\mu P y=\mu Q.$$

乘积法则给出 $(\mu y)^{\prime}=\mu y^{\prime}+\mu^{\prime} y$。和相乘后的方程逐项比较：只要 $\mu^{\prime}=P\mu$，两项就能对上。

怎样找到这样的因子？先对 $P$ 积分，把所得的原函数叫作 $F$，所以 $F^{\prime}=P$。再选 $\mu=e^F$：按链式法则求导时，会得到“指数的导数乘原来的指数函数”。检验如下：

$$\mu^{\prime}=F^{\prime}e^F=P\mu.$$

因此可取**积分因子**

$$\boxed{\mu=e^{\int P(x)\,\mathrm dx}.}$$

这里不写积分中的任意常数，因为积分因子乘以任意非零常数，仍可用于同样的求解步骤。在所选区间上，$\mu$ 不为零，因此可以除以 $\mu$。

左边已经合成一个导数。先积分，再除以刚才乘上的因子，就能得到未知函数。下面的通式用于看清这三步，不必先背；例 1 会把每一步算出来：

$$\begin{aligned}
(\mu y)^{\prime}&=\mu Q,\\
\mu y&=\int\mu Q\,\mathrm dx+C,\\
y&=\boxed{\frac1\mu\left(\int\mu Q\,\mathrm dx+C\right)}.
\end{aligned}$$

### 求解步骤 {#integrating-factor-procedure}

1. 将方程写成 $y^{\prime}+Py=Q$；如有需要，每一项都要除以相同的系数。
2. 计算 $\mu=e^{\int P\,\mathrm dx}$。
3. 将每一项乘以 $\mu$，并把左边写成 $(\mu y)^{\prime}$。
4. 积分时写上 $C$，再将每一项除以 $\mu$。
5. 代入给定条件，并将答案代回原方程检验。

当 $P=1/x$ 时，$\int P\,\mathrm dx=\ln\lvert x\rvert $，所以公式给出 $\mu=\lvert x\rvert $。无论选择 $x>0$ 还是 $x<0$ 这一侧的区间，都可以使用 $\mu=x$，因为在各自的区间上，两种积分因子只相差一个非零常数倍。这次计算不含 $x=0$；能否延伸到零，须另查原方程。

<section class="worked-example" markdown="1">

### 例 1：化为标准形式并求解 {#example-1-normalise-and-solve}

> **Original example.** Solve $2y^{\prime}+4y=6$, given $y(0)=1$.

这里完整观看一次示范。未知函数和它的导数都是线性的，可以使用积分因子（integrating factor）。先将**每一项**除以 2：标准形式为 $y^{\prime}+2y=3$，所以 $P=2$、$Q=3$。直接把 4 当作 $P$，匹配的就是另一个方程。

选取 $\mu=e^{2x}$，因为它的导数等于自身的两倍。

这里由 $\int2\,\mathrm dx=2x$ 得到积分因子的指数。下面积分右边时，链式法则给出 $\frac{\mathrm d}{\mathrm dx}e^{2x}=2e^{2x}$，因此原函数必须带有系数 $1/2$。

各项乘以积分因子，得到

$$e^{2x}y^{\prime}+2e^{2x}y=3e^{2x}.$$

由乘积法则，

$$\frac{\mathrm d}{\mathrm dx}(e^{2x}y)=e^{2x}y^{\prime}+2e^{2x}y.$$

正是两个系数相互匹配，才能把左边写成乘积的导数。现在积分，保留任意常数，再将整个结果除以非零积分因子：

$$\begin{aligned}
(e^{2x}y)^{\prime}&=3e^{2x},\\
\int(e^{2x}y)^{\prime}\,\mathrm dx&=3\int e^{2x}\,\mathrm dx,\\
e^{2x}y&=3\left(\frac12e^{2x}\right)+C,\\
e^{2x}y&=\frac32e^{2x}+C,\\
y&=\frac32+Ce^{-2x}.
\end{aligned}$$

得到通解后才使用初始条件。当 $x=0$ 时，$1=\frac32+C$，所以 $C=-\frac12$：

$$\boxed{y=\frac32-\frac12e^{-2x}},\qquad x\in\mathbb R.$$

同时检验原方程和条件：$y^{\prime}=e^{-2x}$，所以 $2y^{\prime}+4y=2e^{-2x}+6-2e^{-2x}=6$，且 $y(0)=1$。标准形式的两个系数在全体实数上连续，因此没有奇点限制这一解的区间。

</section>

<section class="lesson-check" markdown="1">

### 例 2：变系数（variable coefficient） {#example-2-variable-coefficient}

> **Original example.** For $x>0$, solve $y^{\prime}+\frac{2}{x}y=x$, given $y(1)=2$.

这次由你来做，先不看提示。找出 $P$ 和 $Q$，算出积分因子，再检查相乘后的左边能否合成乘积的导数。之后积分、代入条件，最后检验答案。

<details markdown="1">
<summary>提示</summary>

利用 $\int 2/x\,\mathrm dx=2\ln x$，得到积分因子 $x^2$。

</details>

<details markdown="1">
<summary>解答</summary>

由于 $x>0$，

$$\int\frac2x\,\mathrm dx=2\int\frac1x\,\mathrm dx=2\ln x,\qquad \mu=e^{2\ln x}=x^2.$$

每项相乘后得 $x^2y^{\prime}+2xy=x^3$。乘积法则给出 $(x^2y)^{\prime}=x^2y^{\prime}+2xy$，因为 $\mu^{\prime}=2x=(2/x)\mu$。于是

$$\begin{aligned}
(x^2y)^{\prime}&=x^3,\\
x^2y&=\int x^3\,\mathrm dx=\frac{x^{3+1}}{3+1}+C,\\
x^2y&=\frac{x^4}{4}+C,\\
y&=\frac{x^2}{4}+\frac{C}{x^2}.
\end{aligned}$$

由初始条件得 $2=\frac14+C$，所以

$$\boxed{y=\frac{x^2}{4}+\frac{7}{4x^2}},\qquad x>0.$$

对通解求导，得 $y^{\prime}=x/2-2C/x^3$。加上 $(2/x)y=x/2+2C/x^3$ 后，结果为 $x$，与原方程右边一致。

如果右边乘错，回到[第 3 步](#integrating-factor-procedure)：它也要乘以积分因子。如果乘积导数不能还原未知函数的系数，先用[乘积法则](/zh/alevel/a2-mathematics/differentiation/#products-and-quotients)展开核对，再积分。收起这份核对后，用[第 3 题](#practice-3)尝试不同的系数。

</details>

</section>

<section class="lesson-check" markdown="1">

### 例 3：三角函数系数 {#example-3-trigonometric-coefficient}

> **Adapted example.** On $0<x<\frac\pi2$, solve $y^{\prime}+\frac{\sec^2x}{\tan x}y=2\tan x$, given $y(\frac\pi4)=1$.

这是改编题：以 OxfordAQA 2018 年 FM03 样卷第 5 题为基础，修改了方程右边与给定条件。求解沿用同样的积分因子方法；本题并非官方原题。

需要时先回补[三角函数积分](/zh/alevel/a2-mathematics/integration/#trigonometric-integrals)与[换元法](/zh/alevel/a2-mathematics/integration/#substitution)，再尝试本题。

<details markdown="1">
<summary>提示</summary>

分子 $\sec^2x$ 是 $\tan x$ 的导数。之后利用 $\tan^2x=\sec^2x-1$。

</details>

<details markdown="1">
<summary>解答</summary>

在给定区间上，$\tan x>0$。为计算下面的积分，令 $u=\tan x$，则 $\mathrm du=\sec^2x\,\mathrm dx$：

$$\int\frac{\sec^2x}{\tan x}\,\mathrm dx=\int\frac1u\,\mathrm du=\ln\lvert u\rvert=\ln(\tan x),\qquad \mu=\tan x.$$

将方程各项乘以 $\tan x$，得到下面的乘积导数。积分右侧前，先用 $\tan^2x=\sec^2x-1$ 改写：

$$\begin{aligned}
(y\tan x)^{\prime}&=2\tan^2x,\\
y\tan x&=2\int\tan^2x\,\mathrm dx,\\
y\tan x&=2\int\sec^2x\,\mathrm dx-2\int1\,\mathrm dx,\\
y\tan x&=2\tan x-2x+C.
\end{aligned}$$

当 $x=\pi/4$ 时，$1=2-\pi/2+C$，所以 $C=\pi/2-1$。于是

$$\boxed{y=\frac{2\tan x-2x+\pi/2-1}{\tan x}},\qquad 0<x<\frac\pi2.$$

检验微分方程时，对 $y\tan x$ 求导，得到 $2\sec^2x-2=2\tan^2x$。按乘积法则展开，再除以 $\tan x$，便得到所需的方程。原方程的系数在区间的两个端点处均无定义。

</details>

</section>

## 齐次通解与一个特解 {#cf-and-pi}

### 将解分成两部分 {#general-cf-pi}

有时把解分成两部分，会比直接积分更快。第一部分代入方程左边，结果是零；第二部分代入后，恰好得到题目的右边。把它们相加，仍然满足原方程。下面分别给它们命名。

对于 $y^{\prime}+Py=Q$，对应的**齐次方程（homogeneous equation）**为 $y^{\prime}+Py=0$。它的通解称为**齐次通解（CF）**：

$$\begin{aligned}
(\mu y_c)^{\prime}&=0,\\
\mu y_c&=\int0\,\mathrm dx=C,\\
y_c&=Ce^{-\int P\,\mathrm dx}=\frac C\mu.
\end{aligned}$$

当 $C=0$ 时，这个公式也包含零解。从积分因子推导，可避免因除以 $y$ 而误丢零解。

**一个特解（PI）**是任意一个函数 $y_p$，它满足完整方程 $y_p^{\prime}+Py_p=Q$。将两部分相加，得到

$$\boxed{y=y_c+y_p.}$$

确实，$(y_c+y_p)^{\prime}+P(y_c+y_p)=0+Q$。任意两个解的差都满足齐次方程，因此这个表达式给出了通解。

即使不容易猜出 PI，也可以利用积分因子求得：

$$y_p=\frac1\mu\int\mu Q\,\mathrm dx,$$

这里选取一个不含任意常数的原函数（antiderivative）。任意常数应放在 CF 中。

**区分两个概念：**PI 是用来构成通解的一个特解。满足给定条件的解，通常还包含一个非零的 CF 项。

### 常系数（constant coefficient）方程中如何试设 PI {#simple-pi-trials}

对于 $y^{\prime}+ay=Q(x)$，若 $a$ 为常数，可以先选一种求导后仍容易配出右边的函数形式，暂时把系数留空。再代入方程，算出这些系数。这叫**待定系数法（undetermined coefficients）**。它不是随意猜答案：选定的函数必须经得起代入检验。

| 方程右边 | 可先尝试的形式 | 使用时要检查 |
|---|---|---|
| 常数，且 $a\ne0$ | $y_p=A$ | 代入求出 $A$ |
| $n$ 次多项式，且 $a\ne0$ | $n$ 次多项式 | 保留所有低次项，并比较系数 |
| $be^{kx}$，且 $k\ne-a$ | $y_p=Ae^{kx}$ | $(k+a)A=b$ |
| $be^{-ax}$ | $y_p=Axe^{-ax}$ | $Ae^{-ax}$ 与 CF 重复，代入后左边为零 |

当 $a=0$ 时，方程就是 $y^{\prime}=Q$，直接积分即可。当 $P(x)$ 为变系数时，以上试设形式并不普遍适用；若看不出合适的 PI，就使用积分因子。

<section class="worked-example" markdown="1">

### 例 4：多项式形式的 PI {#example-4-polynomial-pi}

> **Original example.** Find the general solution of $y^{\prime}+2y=4x+3$. Hence find the solution satisfying the boundary condition $y(1)=2$.

先计算齐次部分：$\int2\,\mathrm dx=2x$。于是 $(e^{2x}y_c)^{\prime}=0$；两边积分得 $e^{2x}y_c=\int0\,\mathrm dx=C$，因此 CF 为 $Ce^{-2x}$。

右边是一次式，所以试设 $y_p=Ax+B$。一次项求导会得到常数，因此常数项也要先保留。代入得

$$A+2(Ax+B)=4x+3.$$

这个等式要对每个自变量值都成立，所以一次项的系数要相同，常数项也要相同。这叫比较系数（comparing coefficients）：$2A=4$，且 $A+2B=3$，所以 $A=2$，$B=1/2$。把 CF 和 PI 相加：

$$\boxed{y=Ce^{-2x}+2x+\frac12}.$$

由边界条件得 $2=Ce^{-2}+5/2$，于是 $C=-e^2/2$：

$$\boxed{y=2x+\frac12-\frac12e^{2-2x}},\qquad x\in\mathbb R.$$

检验：CF 代入 $y^{\prime}+2y$ 后得到零，PI 代入后得到 $2+4x+1=4x+3$。当 $x=1$ 时，上述解的值为 $2$。

</section>

<section class="lesson-check" markdown="1">

### 例 5：指数形式的 PI {#example-5-exponential-pi}

> **Original example.** Solve $y^{\prime}-3y=2e^x$, given $y(0)=4$, using a CF and a PI.

<details markdown="1">
<summary>提示</summary>

CF 为 $Ce^{3x}$。试设 $y_p=Ae^x$。

</details>

<details markdown="1">
<summary>解答</summary>

先计算齐次部分：$\int(-3)\,\mathrm dx=-3x$。于是 $(e^{-3x}y_c)^{\prime}=0$；两边积分得 $e^{-3x}y_c=\int0\,\mathrm dx=C$，因此 CF 为 $Ce^{3x}$。

右边是指数函数，所以试设 $y_p=Ae^x$：它求导后仍含同样的指数函数，便于配出右边。代入得

$$Ae^x-3Ae^x=2e^x,$$

所以 $A=-1$。于是 $y=Ce^{3x}-e^x$。利用 $y(0)=4$，得 $C=5$：

$$\boxed{y=5e^{3x}-e^x},\qquad x\in\mathbb R.$$

检验：$y^{\prime}-3y=(15e^{3x}-e^x)-(15e^{3x}-3e^x)=2e^x$，且 $y(0)=4$。

</details>

</section>

<section class="worked-example" markdown="1">

### 例 6：指数项与 CF 重复 {#example-6-repeated-exponential}

> **Original example.** Find the general solution of $y^{\prime}+2y=3e^{-2x}$. Explain why the trial $y_p=Ae^{-2x}$ fails.

先计算齐次部分：$\int2\,\mathrm dx=2x$。于是 $(e^{2x}y_c)^{\prime}=0$；两边积分得 $e^{2x}y_c=\int0\,\mathrm dx=C$，因此 CF 为 $Ce^{-2x}$。

先试 $Ae^{-2x}$，代入后总有 $y_p^{\prime}+2y_p=0$，无论 $A$ 取多少都一样。问题不是系数没选对，而是两项总会抵消，无法配出右边的非零项。

改为试设 $y_p=Axe^{-2x}$。由乘积法则，

$$y_p^{\prime}=Ae^{-2x}-2Axe^{-2x},\quad y_p^{\prime}+2y_p=Ae^{-2x}.$$

于是 $A=3$，且

$$\boxed{y=(C+3x)e^{-2x}},\qquad x\in\mathbb R.$$

积分因子法也能直接得到相同答案：$(e^{2x}y)^{\prime}=3$，所以 $e^{2x}y=\int3\,\mathrm dx=3\int1\,\mathrm dx=3x+C$。在这个一阶常系数方程中，额外乘上 $x$，便能处理指数项与 CF 重复的问题。

</section>

## 练习 {#practice}

以下六题均为原创练习题。代入条件前，先写出通解；最后通过求导检验答案。第 1–3 题检验积分因子这一段，首次尝试保持提示与解答关闭；第 4–6 题还会调用后文的方法或区间讨论。上文标注 Original example 的例题为原创题，Adapted example 为改编题。

<section class="lesson-check" markdown="1">

### 第 1 题：给定初值 {#practice-1}

> Solve $3y^{\prime}+6y=12$, given $y(0)=5$.

<details markdown="1">
<summary>提示</summary>

将方程除以 3。使用 $\mu=e^{2x}$。

</details>

<details markdown="1">
<summary>解答</summary>

标准形式为 $y^{\prime}+2y=4$。由 $\int2\,\mathrm dx=2x$，选取 $\mu=e^{2x}$，得到 $(e^{2x}y)^{\prime}=4e^{2x}$。两边积分：

$$e^{2x}y=4\int e^{2x}\,\mathrm dx=4\left(\frac12e^{2x}\right)+C=2e^{2x}+C.$$

除以积分因子得 $y=2+Ce^{-2x}$。当 $x=0$ 时，$C=3$：

$$\boxed{y=2+3e^{-2x}},\qquad x\in\mathbb R.$$

这里 $y^{\prime}=-6e^{-2x}$；代入得 $3y^{\prime}+6y=12$，且 $y(0)=5$。

</details>

</section>

<section class="lesson-check" markdown="1">

### 第 2 题：正区间上的解 {#practice-2}

> For $x>0$, solve $y^{\prime}+\frac1x y=2$, given $y(2)=5$.

<details markdown="1">
<summary>提示</summary>

使用 $\mu=x$，并将左边识别为 $(xy)^{\prime}$。

</details>

<details markdown="1">
<summary>解答</summary>

由 $\int(1/x)\,\mathrm dx=\ln x$，选取 $\mu=x$。于是 $(xy)^{\prime}=2x$，两边积分得

$$xy=2\int x\,\mathrm dx=2\frac{x^2}{2}+C=x^2+C.$$

所以 $y=x+C/x$。由条件得 $5=2+C/2$，于是

$$\boxed{y=x+\frac6x},\qquad x>0.$$

检验：$y^{\prime}+y/x=1-6/x^2+1+6/x^2=2$。原方程的系数在 $x=0$ 处无定义。

</details>

</section>

<section class="lesson-check" markdown="1">

### 第 3 题：一个新方程 {#practice-3}

本题还需要[链式法则](/zh/alevel/a2-mathematics/differentiation/#composite-functions)与[逆链式积分](/zh/alevel/a2-mathematics/integration/#reverse-chain-rule)。如果还不会对复合指数函数求导或积分，先回补这两项技能再尝试。

> Solve $y^{\prime}+2xy=2x$, given $y(0)=3$.

<details markdown="1">
<summary>提示</summary>

使用 $\mu=e^{x^2}$；它的导数为 $2xe^{x^2}$。

</details>

<details markdown="1">
<summary>解答</summary>

由 $\int2x\,\mathrm dx=2(x^2/2)=x^2$，乘以 $\mu=e^{x^2}$ 后得 $(e^{x^2}y)^{\prime}=2xe^{x^2}$。令 $u=x^2$，则 $\mathrm du=2x\,\mathrm dx$：

$$e^{x^2}y=\int2xe^{x^2}\,\mathrm dx=\int e^u\,\mathrm du=e^u+C=e^{x^2}+C.$$

因此 $y=1+Ce^{-x^2}$。由条件得 $C=2$：

$$\boxed{y=1+2e^{-x^2}},\qquad x\in\mathbb R.$$

检验：$y^{\prime}=-4xe^{-x^2}$ 与 $2xy$ 中的指数项相消，剩下 $2x$。

</details>

</section>

<section class="lesson-check" markdown="1">

### 第 4 题：多项式 PI 与边界条件 {#practice-4}

> Using a CF and a PI, solve $y^{\prime}+y=x^2$, given the boundary condition $y(1)=0$.

<details markdown="1">
<summary>提示</summary>

试设 $y_p=Ax^2+Bx+D$，注意保留一次项与常数项。

</details>

<details markdown="1">
<summary>解答</summary>

先计算齐次部分：$\int1\,\mathrm dx=x$。于是 $(e^xy_c)^{\prime}=0$；两边积分得 $e^xy_c=\int0\,\mathrm dx=C$，因此 CF 为 $Ce^{-x}$。

接着试一个二次式作为 PI。代入得

$$y_p^{\prime}+y_p=Ax^2+(2A+B)x+(B+D).$$

因此 $A=1$、$B=-2$，且 $D=2$。通解为 $y=Ce^{-x}+x^2-2x+2$。当 $x=1$ 时，$0=Ce^{-1}+1$，所以 $C=-e$：

$$\boxed{y=x^2-2x+2-e^{1-x}},\qquad x\in\mathbb R.$$

多项式部分产生 $x^2$，指数部分在 $y^{\prime}+y$ 中相消为零，所以原方程成立，且 $y(1)=0$。

</details>

</section>

<section class="lesson-check" markdown="1">

### 第 5 题：一族解与一个条件 {#practice-5}

> Find the general solution of $y^{\prime}-y=4e^x$, then use $y(0)=2$.

<details markdown="1">
<summary>提示</summary>

CF 为 $Ce^x$，所以试设 $y_p=Axe^x$。

</details>

<details markdown="1">
<summary>解答</summary>

这里 $\int(-1)\,\mathrm dx=-x$，齐次方程的乘积积分为 $e^{-x}y_c=\int0\,\mathrm dx=C$，所以 $y_c=Ce^x$。

对于 $y_p=Axe^x$，有 $y_p^{\prime}-y_p=Ae^x$，得 $A=4$。于是 $y=(C+4x)e^x$。由初始条件得 $C=2$：

$$\boxed{y=(2+4x)e^x},\qquad x\in\mathbb R.$$

求导得 $y^{\prime}=(6+4x)e^x$，所以 $y^{\prime}-y=4e^x$，且 $y(0)=2$。

</details>

</section>

<section class="lesson-check" markdown="1">

### 第 6 题：负半轴上的区间 {#practice-6}

> On $x<0$, solve $y^{\prime}-\frac1x y=x$, given $y(-1)=2$. Explain why the solution interval cannot include $x=0$.

<details markdown="1">
<summary>提示</summary>

积分因子公式给出 $1/\lvert x\rvert $。在 $x<0$ 上，也可以改用它的常数倍 $\mu=1/x$。

</details>

<details markdown="1">
<summary>解答</summary>

由于 $\int-1/x\,\mathrm dx=-\ln\lvert x\rvert $，在给定区间上使用 $\mu=1/x$。乘以积分因子，得

$$\frac{y^{\prime}}x-\frac y{x^2}=1,\qquad \left(\frac yx\right)^{\prime}=1.$$

两边积分得 $y/x=\int1\,\mathrm dx=x+C$，因此 $y=x^2+Cx$。由条件得 $2=1-C$，所以

$$\boxed{y=x^2-x},\qquad x<0.$$

检验：$y^{\prime}-y/x=(2x-1)-(x-1)=x$。虽然解的表达式是多项式，但原方程在 $x=0$ 处无定义，因此这个原方程的解应限定在 $x<0$ 上。

</details>

</section>

## 纠错与独立重试 {#diagnose-and-retry}

以下任务均为自拟教学任务，无官方分值。先写下错误原因，再看反馈；随后关闭所有解答，独立完成新任务。如果需要提示，记录使用过的帮助，并在继续学习后完成[回顾任务](#later-review)。

<section class="lesson-check" markdown="1">

**Diagnose:** A learner chooses integrating factor $e^{4x}$ for $2y^{\prime}+4y=6$. Explain which step was omitted.

<details markdown="1">
<summary>反馈</summary>

应先将每一项除以 2。标准形式为 $y^{\prime}+2y=3$，积分因子为 $e^{2x}$。乘积求导时产生的系数必须与标准形式一致。

如果用了原方程中未经标准化的系数，回到[标准形式](#standard-form)，对照[完整示范](#example-1-normalise-and-solve)；再收起示范，完成下面的新任务。

</details>

</section>

<section class="lesson-check" markdown="1">

### 一个新的初值问题 {#normalisation-retry}

> **Independent retry (self-written).** For $x>0$, solve $xy^{\prime}+(2-x)y=x^2e^x$, given $y(1)=0$. State the standard-form coefficients, justify your integrating factor, and check the original equation and condition.

<details markdown="1"><summary>提示</summary>

先看导数的系数。化为标准形式后，把未知函数的系数拆成倒数项与常数项。通过求导检查你选取的积分因子。

</details>

<details markdown="1"><summary>重试解答与检验</summary>

由于 $x>0$，可以将每一项除以 $x$：

$$y^{\prime}+\left(\frac2x-1\right)y=xe^x,\qquad P=\frac2x-1,\quad Q=xe^x.$$

对标准形式的系数积分，得到

$$\int\left(\frac2x-1\right)\,\mathrm dx=2\int\frac1x\,\mathrm dx-\int1\,\mathrm dx=2\ln x-x,\qquad \mu=e^{2\ln x-x}=x^2e^{-x}.$$

对这个因子求导，检查它是否满足所需关系：

$$\mu^{\prime}=(2x-x^2)e^{-x}=\left(\frac2x-1\right)\mu.$$

每一项都乘以积分因子，包括右边，得

$$\begin{aligned}
(x^2e^{-x}y)^{\prime}&=x^3,\\
x^2e^{-x}y&=\int x^3\,\mathrm dx=\frac{x^{3+1}}{3+1}+C,\\
x^2e^{-x}y&=\frac{x^4}{4}+C,\\
y&=e^x\left(\frac{x^2}{4}+\frac{C}{x^2}\right).
\end{aligned}$$

给定条件得 $C=-1/4$，所以

$$\boxed{y=\frac{e^x}{4}(x^2-x^{-2})},\qquad x>0.$$

直接检验时，令 $f=(x^2-x^{-2})/4$，于是 $y=e^xf$、$y^{\prime}=e^x(f+f^{\prime})$。因此

$$xy^{\prime}+(2-x)y=e^x(xf^{\prime}+2f)=e^xx^2.$$

又有 $f(1)=0$，所以初始条件也成立。积分因子在给定区间内非零；这一推理没有在零处做除法，也没有把奇点两侧的解连接起来。

如果系数没有标准化，回到[标准形式](#standard-form)；如果右边或乘积导数不符，回看[求解步骤](#integrating-factor-procedure)。最终数值正确不能替代这些检查。

</details>

</section>

<section class="lesson-check" markdown="1">

### 从解族反推方程 {#recover-equation}

完成重试后，换一个方向：从给定的解族反推它满足的方程。

**Reverse problem (self-written):** Every member of the family $y=x^2+C/x$, on $x>0$, solves the same equation $y^{\prime}+P(x)y=Q(x)$. Recover $P$ and $Q$, and find the member satisfying $y(1)=0$.

<details markdown="1">
<summary>提示</summary>

方程必须对任意积分常数成立，因此该常数的系数必须相消。

</details>

<details markdown="1">
<summary>重试解答与检验</summary>

代入得 $2x-C/x^2+P(x)(x^2+C/x)=Q(x)$。令 $C$ 的系数为零，得到 $P(x)=1/x$；其余项给出 $Q(x)=3x$。由条件得 $C=-1$，所以 $y=x^2-1/x$，范围为 $x>0$。分别核对方程和条件。

</details>

</section>

## 继续学习后再回来 {#later-review}

尝试[下一课的练习](/zh/alevel/a2-further-mathematics/second-order-differential-equations/#practice)后，收起前面解答，再回来完成这一组题。记录自己能否在不借助提示的情况下选法并完成检验。

<section class="lesson-check" markdown="1">

### 两个方程 {#mixed-review}

> **Later review (self-written).** Solve (A) $y^{\prime}=2xy$, with $y(0)=2$; and (B) $xy^{\prime}+y=x^2$, with $y(1)=0$ on $x>0$. Choose and explain a valid method for each, then check both original equations and conditions.

<details markdown="1"><summary>提示</summary>

比较哪个方程能直接分离变量，哪个在标准化后适合写成乘积导数。不一定只有一种正确方法；说明你选择的方法为什么成立。

</details>

<details markdown="1"><summary>回顾解答与回补</summary>

对于 (A)，在非零解上分离变量为 $\mathrm dy/y=2x\,\mathrm dx$，然后积分：

$$\int\frac1y\,\mathrm dy=2\int x\,\mathrm dx,\qquad \ln\lvert y\rvert=2\frac{x^2}{2}+C=x^2+C.$$

两边取指数得 $y=Ke^{x^2}$，其中常数可正可负但非零。由初值得 $K=2$，选出

$$y=2e^{x^2},\qquad x\in\mathbb R.$$

它的导数为 $4xe^{x^2}=2xy$。除以未知函数时漏掉的零解不满足给定初值。使用积分因子也正确；分离变量只是便利的选择，不是唯一允许的方法。

对于 (B)，将各项除以正的自变量，得到标准形式中的系数 $P=1/x$、$Q=x$。在这个区间上先计算积分因子：

$$\int\frac1x\,\mathrm dx=\ln x,\qquad \mu=e^{\ln x}=x\quad(x>0).$$

于是

$$\begin{aligned}
(xy)^{\prime}&=x^2,\\
xy&=\int x^2\,\mathrm dx=\frac{x^{2+1}}{2+1}+C,\\
xy&=\frac{x^3}{3}+C,\\
y&=\frac{x^2}{3}+\frac Cx.
\end{aligned}$$

由条件得 $C=-1/3$：

$$y=\frac{x^2-x^{-1}}3,\qquad x>0.$$

求导得 $y^{\prime}=(2x+x^{-2})/3$；代回得 $xy^{\prime}+y=x^2$，且 $y(1)=0$。如果积分因子出错，回到[标准化](#standard-form)；如果乘积展开不符，回到[方法推导](#derive-integrating-factor)。如果不会分离变量，回补 [P2.8](/zh/alevel/a2-mathematics/differential-equations/)，再收起核对，重做 (A)。记录是否用过提示，不把借助帮助完成算成独立证据。

</details>

</section>

## 快速参考 {#quick-reference}

| 步骤或方法 | 结果 | 检查要点 |
|---|---|---|
| 标准形式 | $y^{\prime}+P(x)y=Q(x)$ | 每一项都除以 $y^{\prime}$ 的系数 |
| 积分因子 | $\mu=e^{\int P\,\mathrm dx}$ | 使用标准形式中的 $P$；$\mu$ 中不需要任意常数 |
| 乘积的导数 | $(\mu y)^{\prime}=\mu Q$ | 方程右边也要乘以积分因子 |
| 通解 | $y=\mu^{-1}(\int\mu Q\,\mathrm dx+C)$ | 每一项都除以 $\mu$ |
| 齐次通解 | $y_c=C/\mu$ | 满足 $y_c^{\prime}+Py_c=0$ |
| 一个特解 | 任意一个 $y_p$，满足 $y_p^{\prime}+Py_p=Q$ | 不再添加第二个任意常数 |
| CF + PI | $y=y_c+y_p$ | 两部分相加后，再代入条件 |
| 指数形式的试设 | 对于 $y^{\prime}+ay=be^{kx}$，可取 $y_p=\frac b{k+a}e^{kx}$，条件是 $k+a\ne0$ | 若 $k=-a$，使用 $y_p=bxe^{-ax}$ |
| 条件与区间 | 代入给定的 $(x,y)$，求出 $C$ | 在允许区间使用方法；标准化排除的点须另查原式 |
{: .wide-table}

## 常见错误 {#common-pitfalls}

- 直接使用 $y$ 的系数，却没有先将 $y^{\prime}$ 的系数化为 1。
- 只有方程左边乘以积分因子。
- 把左边写成 $(\mu y)^{\prime}$，却没有检查 $\mu^{\prime}=P\mu$。
- 忘记 $C$，或最后只将某一项除以 $\mu$。
- 将 PI 当作满足给定条件的最终解。
- 试设的指数 PI 已包含在 CF 中；遇到上文这种重复情形，应将试设形式乘以 $x$。
- 未说明区间上的正负号就去掉 $\ln\lvert x\rvert $ 中的绝对值，或未经另行检查，就把标准形式的方法跨越奇点使用。

**练习后：**重新独立完成曾需要提示的题目。写出标准形式、积分因子与乘积的导数，或明确写出 CF 与 PI。最后同时检验方程及其给定条件。

指数积分遗漏系数时，回看[例 1](#example-1-normalise-and-solve)及[指数积分](/zh/alevel/a2-mathematics/integration/#exponential-logarithmic-integrals)，再尝试 [Q1](#practice-1)。幂函数积分出错时，回补[幂积分](/zh/alevel/a2-mathematics/integration/#power-integrals)，再做[标准化重试](#normalisation-retry)。混淆 CF 和 PI 时，先回看[例 4](#example-4-polynomial-pi)，再做 [Q4](#practice-4)；重复指数处理出错时，先回看[例 6](#example-6-repeated-exponential)，再做 [Q5](#practice-5)。先收起答案，并如实记录是否已经看过同一道题。

学习其他主题后，尝试课程的[跨章综合](/zh/alevel/a2-further-mathematics/#mixed-review)与[延后回顾](/zh/alevel/a2-further-mathematics/#later-review)。

**学习路径：**[上一课：双曲函数](/zh/alevel/a2-further-mathematics/hyperbolic-functions/) · [下一课：二阶微分方程](/zh/alevel/a2-further-mathematics/second-order-differential-equations/) · [高等纯数学](/zh/alevel/a2-further-mathematics/)。

## 资料来源 {#sources}

教材：*International A Level Further Mathematics*，第 25.1、25.3 节，印刷页码 306–307、318–319。积分因子的示范、补步、重试和后续回顾均为自拟教学任务，无官方分值。

本课范围依据 OxfordAQA [International A-level Further Mathematics 课程大纲 FP2.10，印刷页码 19](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf)：一阶线性方程、积分因子、CF 加 PI，以及通解和满足条件的解。例 3 改编自 OxfordAQA 2018 年 FM03 样卷第 5 题的求解方法，并对照官方评分细则第 5 题核对。解答明确展示标准形式、积分因子、乘积的导数、积分及条件的使用。改编题修改了方程与条件，不表示它具有官方分值。

[OxfordAQA Specimen 2018, Q5, QP PDF p. 10](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9665-FM03-international-a-level-further-mathematics-specimen-paper-2019-v3.pdf#page=10); [MS Q5, PDF p. 8](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9665-FM03-international-a-level-further-mathematics-mark-scheme-2016-v1.pdf#page=8). 本轮重新读取 Q5 及评分材料中的方法（2026-10-23）；只借用已注明的方法，不把改编题或新增自拟任务称为原题。

{% include exam_topic_practice.html %}
