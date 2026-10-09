---
title: 一阶微分方程
layout: subjects
mathjax: true
grade: a2
subject: a2-further-mathematics
lang: zh-CN
translation_of: /alevel/a2-further-mathematics/first-order-differential-equations/
permalink: /zh/alevel/a2-further-mathematics/first-order-differential-equations/
toc_headings: h2
study_page: true
---

[高等纯数学](/zh/alevel/a2-further-mathematics/) · FP2.10 一阶微分方程

本课学习用积分因子（integrating factor），以及齐次通解（complementary function，CF）加上一个特解（particular integral，PI）的方法，求解一阶线性微分方程（first-order linear differential equation）。再利用初始条件（initial condition）或边界条件（boundary condition），从通解所表示的一族解中确定满足条件的解。

- **学习：**从[标准形式](#standard-form)开始，学习[积分因子](#integrating-factor)，再比较[齐次通解与一个特解](#cf-and-pi)。
- **作业帮助：**查看[化为标准形式](#example-1-normalise-and-solve)、[变系数](#example-2-variable-coefficient)、[三角函数系数](#example-3-trigonometric-coefficient)或[指数项与齐次通解重复](#example-6-repeated-exponential)的例题。
- **复习：**先独立完成[练习](#practice)，再展开解答，最后核对[快速参考](#quick-reference)与[常见错误](#common-pitfalls)。

教材：*International A Level Further Mathematics*，第 25.1、25.3 节，印刷页码 306–307、318–319。

**开始前：**复习乘积法则（product rule）、指数与对数函数的[积分](/zh/alevel/a2-mathematics/integration/)，以及 [P2.8 微分方程](/zh/alevel/a2-mathematics/differential-equations/)。P2.8 介绍可分离变量的方程；本课将方法扩展到未必能分离变量的线性方程。

## 标准形式与一族解 {#standard-form}

**一阶**方程的未知函数记作 $y$，最高阶导数为 $y'=\frac{\mathrm dy}{\mathrm dx}$。当 $y$ 和 $y'$ 都只以一次幂出现，既没有 $yy'$ 这样的乘积，也没有 $y^2$ 或 $\sin y$ 这样的非线性项时，方程就是**线性的（linear）**。

一阶线性方程的标准形式为

$$\boxed{y'+P(x)y=Q(x).}$$

系数 $P$ 和 $Q$ 可以随 $x$ 变化。选取积分因子前，先将整个方程除以 $y'$ 的系数。对于

$$a(x)y'+b(x)y=c(x),$$

标准形式中的系数为 $P=b/a$ 和 $Q=c/a$，适用于 $a(x)\ne0$ 的区间。

**通解（general solution）**含有一个任意常数（arbitrary constant）。**初始条件**（如 $y(0)=2$）规定起点处的函数值；**边界条件**（如 $y(2)=5$）规定某个边界处的函数值。两类条件都可以用来确定常数，从而得到**满足给定条件的解（particular solution）**。

求解时应选取一个区间，使标准形式中的系数在整个区间上连续。如果某个系数在 $x=0$ 处无定义，应分别在 $x>0$ 或 $x<0$ 上求解，不能用同一个积分常数把奇点（singular point）两侧的解连接起来。即使解的表达式在该点有值，也不代表原方程在该点有定义。

## 积分因子 {#integrating-factor}

### 方法为什么成立 {#derive-integrating-factor}

将标准形式的每一项乘以函数 $\mu(x)$：

$$\mu y'+\mu P y=\mu Q.$$

由乘积法则，$(\mu y)'=\mu y'+\mu' y$。若 $\mu'=P\mu$，方程左边就等于这个乘积的导数。解这一关系式，得到**积分因子**

$$\boxed{\mu=e^{\int P(x)\,\mathrm dx}.}$$

这里不写积分中的任意常数，因为积分因子乘以任意非零常数，仍可用于同样的求解步骤。在所选区间上，$\mu$ 不为零，因此可以除以 $\mu$。

现在可以积分：

$$\begin{aligned}
(\mu y)'&=\mu Q,\\
\mu y&=\int\mu Q\,\mathrm dx+C,\\
y&=\boxed{\frac1\mu\left(\int\mu Q\,\mathrm dx+C\right)}.
\end{aligned}$$

### 求解步骤 {#integrating-factor-procedure}

1. 将方程写成 $y'+Py=Q$；如有需要，每一项都要除以相同的系数。
2. 计算 $\mu=e^{\int P\,\mathrm dx}$。
3. 将每一项乘以 $\mu$，并把左边写成 $(\mu y)'$。
4. 积分时写上 $C$，再将每一项除以 $\mu$。
5. 代入给定条件，并将答案代回原方程检验。

当 $P=1/x$ 时，$\int P\,\mathrm dx=\ln|x|$，所以公式给出 $\mu=|x|$。无论选择 $x>0$ 还是 $x<0$ 这一侧的区间，都可以使用 $\mu=x$，因为在各自的区间上，两种积分因子只相差一个非零常数倍。仍然必须排除 $x=0$。

### 例 1：化为标准形式并求解 {#example-1-normalise-and-solve}

> **Original example.** Solve $2y'+4y=6$, given $y(0)=1$.

<details markdown="1">
<summary>提示</summary>

先将方程除以 2，再计算积分因子。系数 $P$ 为 2。

</details>

<details markdown="1">
<summary>解答</summary>

标准形式为 $y'+2y=3$，所以 $\mu=e^{2x}$。于是

$$\begin{aligned}
(e^{2x}y)'&=3e^{2x},\\
e^{2x}y&=\frac32e^{2x}+C,\\
y&=\frac32+Ce^{-2x}.
\end{aligned}$$

当 $x=0$ 时，$1=\frac32+C$，所以 $C=-\frac12$：

$$\boxed{y=\frac32-\frac12e^{-2x}},\qquad x\in\mathbb R.$$

检验：$y'=e^{-2x}$，所以 $2y'+4y=2e^{-2x}+6-2e^{-2x}=6$，且 $y(0)=1$。

</details>

### 例 2：变系数（variable coefficient） {#example-2-variable-coefficient}

> **Original example.** For $x>0$, solve $y'+\frac{2}{x}y=x$, given $y(1)=2$.

<details markdown="1">
<summary>提示</summary>

利用 $\int 2/x\,\mathrm dx=2\ln x$，得到积分因子 $x^2$。

</details>

<details markdown="1">
<summary>解答</summary>

由于 $x>0$，

$$\mu=e^{2\ln x}=x^2.$$

因此

$$\begin{aligned}
(x^2y)'&=x^3,\\
x^2y&=\frac{x^4}{4}+C,\\
y&=\frac{x^2}{4}+\frac{C}{x^2}.
\end{aligned}$$

由初始条件得 $2=\frac14+C$，所以

$$\boxed{y=\frac{x^2}{4}+\frac{7}{4x^2}},\qquad x>0.$$

对通解求导，得 $y'=x/2-2C/x^3$。加上 $(2/x)y=x/2+2C/x^3$ 后，结果为 $x$，与原方程右边一致。

</details>

### 例 3：三角函数系数 {#example-3-trigonometric-coefficient}

> **Adapted example.** On $0<x<\frac\pi2$, solve $y'+\frac{\sec^2x}{\tan x}y=2\tan x$, given $y(\frac\pi4)=1$.

这是改编题：以 OxfordAQA 2018 年 FM03 样卷第 5 题为基础，修改了方程右边与给定条件。求解沿用同样的积分因子方法；本题并非官方原题。

<details markdown="1">
<summary>提示</summary>

分子 $\sec^2x$ 是 $\tan x$ 的导数。之后利用 $\tan^2x=\sec^2x-1$。

</details>

<details markdown="1">
<summary>解答</summary>

在给定区间上，$\tan x>0$，所以

$$\int\frac{\sec^2x}{\tan x}\,\mathrm dx=\ln(\tan x),\qquad \mu=\tan x.$$

将方程各项乘以 $\tan x$，得

$$\begin{aligned}
(y\tan x)'&=2\tan^2x,\\
y\tan x&=2\int(\sec^2x-1)\,\mathrm dx,\\
y\tan x&=2\tan x-2x+C.
\end{aligned}$$

当 $x=\pi/4$ 时，$1=2-\pi/2+C$，所以 $C=\pi/2-1$。于是

$$\boxed{y=\frac{2\tan x-2x+\pi/2-1}{\tan x}},\qquad 0<x<\frac\pi2.$$

检验微分方程时，对 $y\tan x$ 求导，得到 $2\sec^2x-2=2\tan^2x$。按乘积法则展开，再除以 $\tan x$，便得到所需的方程。原方程的系数在区间的两个端点处均无定义。

</details>

## 齐次通解与一个特解 {#cf-and-pi}

### 将解分成两部分 {#general-cf-pi}

对于 $y'+Py=Q$，对应的**齐次方程（homogeneous equation）**为 $y'+Py=0$。它的通解称为**齐次通解（CF）**：

$$\boxed{y_c=Ce^{-\int P\,\mathrm dx}=\frac C\mu.}$$

当 $C=0$ 时，这个公式也包含零解。从积分因子推导，可避免因除以 $y$ 而误丢零解。

**一个特解（PI）**是任意一个函数 $y_p$，它满足完整方程 $y_p'+Py_p=Q$。将两部分相加，得到

$$\boxed{y=y_c+y_p.}$$

确实，$(y_c+y_p)'+P(y_c+y_p)=0+Q$。任意两个解的差都满足齐次方程，因此这个表达式给出了通解。

即使不容易猜出 PI，也可以利用积分因子求得：

$$y_p=\frac1\mu\int\mu Q\,\mathrm dx,$$

这里选取一个不含任意常数的原函数（antiderivative）。任意常数应放在 CF 中。

**区分两个概念：**PI 是用来构成通解的一个特解。满足给定条件的解，通常还包含一个非零的 CF 项。

### 常系数（constant coefficient）方程中如何试设 PI {#simple-pi-trials}

对于 $y'+ay=Q(x)$，若 $a$ 为常数，可以用待定系数法（undetermined coefficients）：先试设 PI 的形式，再代入方程确定系数。

| 方程右边 | 可先尝试的形式 | 使用时要检查 |
|---|---|---|
| 常数，且 $a\ne0$ | $y_p=A$ | 代入求出 $A$ |
| $n$ 次多项式，且 $a\ne0$ | $n$ 次多项式 | 保留所有低次项，并比较系数 |
| $be^{kx}$，且 $k\ne-a$ | $y_p=Ae^{kx}$ | $(k+a)A=b$ |
| $be^{-ax}$ | $y_p=Axe^{-ax}$ | $Ae^{-ax}$ 与 CF 重复，代入后左边为零 |

当 $a=0$ 时，方程就是 $y'=Q$，直接积分即可。当 $P(x)$ 为变系数时，以上试设形式并不普遍适用；若看不出合适的 PI，就使用积分因子。

### 例 4：多项式形式的 PI {#example-4-polynomial-pi}

> **Original example.** Find the general solution of $y'+2y=4x+3$. Hence find the solution satisfying the boundary condition $y(1)=2$.

<details markdown="1">
<summary>提示</summary>

CF 为 $Ce^{-2x}$。试设 $y_p=Ax+B$，注意保留常数项。

</details>

<details markdown="1">
<summary>解答</summary>

由齐次方程得 $y_c=Ce^{-2x}$。试设 $y_p=Ax+B$，代入得

$$A+2(Ax+B)=4x+3.$$

比较系数（comparing coefficients）：$2A=4$，且 $A+2B=3$，所以 $A=2$，$B=1/2$。因此

$$\boxed{y=Ce^{-2x}+2x+\frac12}.$$

由边界条件得 $2=Ce^{-2}+5/2$，于是 $C=-e^2/2$：

$$\boxed{y=2x+\frac12-\frac12e^{2-2x}},\qquad x\in\mathbb R.$$

检验：CF 代入 $y'+2y$ 后得到零，PI 代入后得到 $2+4x+1=4x+3$。当 $x=1$ 时，上述解的值为 $2$。

</details>

### 例 5：指数形式的 PI {#example-5-exponential-pi}

> **Original example.** Solve $y'-3y=2e^x$, given $y(0)=4$, using a CF and a PI.

<details markdown="1">
<summary>提示</summary>

CF 为 $Ce^{3x}$。试设 $y_p=Ae^x$。

</details>

<details markdown="1">
<summary>解答</summary>

由齐次方程得 $y_c=Ce^{3x}$。代入 $y_p=Ae^x$，得

$$Ae^x-3Ae^x=2e^x,$$

所以 $A=-1$。于是 $y=Ce^{3x}-e^x$。利用 $y(0)=4$，得 $C=5$：

$$\boxed{y=5e^{3x}-e^x},\qquad x\in\mathbb R.$$

检验：$y'-3y=(15e^{3x}-e^x)-(15e^{3x}-3e^x)=2e^x$，且 $y(0)=4$。

</details>

### 例 6：指数项与 CF 重复 {#example-6-repeated-exponential}

> **Original example.** Find the general solution of $y'+2y=3e^{-2x}$. Explain why the trial $y_p=Ae^{-2x}$ fails.

<details markdown="1">
<summary>提示</summary>

题目中的试设形式已包含在 CF 中。将它乘以 $x$，或使用积分因子 $e^{2x}$。

</details>

<details markdown="1">
<summary>解答</summary>

CF 为 $Ce^{-2x}$。试设 $Ae^{-2x}$ 时，代入后总有 $y_p'+2y_p=0$；这个结果与 $A$ 的取值无关，因此无法得到方程右边的非零项。

改为试设 $y_p=Axe^{-2x}$。由乘积法则，

$$y_p'=Ae^{-2x}-2Axe^{-2x},\qquad y_p'+2y_p=Ae^{-2x}.$$

于是 $A=3$，且

$$\boxed{y=(C+3x)e^{-2x}},\qquad x\in\mathbb R.$$

积分因子法也能直接得到相同答案：$(e^{2x}y)'=3$，所以 $e^{2x}y=3x+C$。在这个一阶常系数方程中，额外乘上 $x$，便能处理指数项与 CF 重复的问题。

</details>

## 练习 {#practice}

以下六题均为原创练习题。代入条件前，先写出通解；最后通过求导检验答案。上文标注 Original example 的例题为原创题，Adapted example 为改编题。

### 第 1 题：标准形式 {#practice-1}

> Solve $3y'+6y=12$, given $y(0)=5$.

<details markdown="1">
<summary>提示</summary>

将方程除以 3。使用 $\mu=e^{2x}$。

</details>

<details markdown="1">
<summary>解答</summary>

标准形式为 $y'+2y=4$。于是 $(e^{2x}y)'=4e^{2x}$，得到 $y=2+Ce^{-2x}$。当 $x=0$ 时，$C=3$：

$$\boxed{y=2+3e^{-2x}},\qquad x\in\mathbb R.$$

这里 $y'=-6e^{-2x}$；代入得 $3y'+6y=12$，且 $y(0)=5$。

</details>

### 第 2 题：由对数积分求积分因子 {#practice-2}

> For $x>0$, solve $y'+\frac1x y=2$, given $y(2)=5$.

<details markdown="1">
<summary>提示</summary>

使用 $\mu=x$，并将左边识别为 $(xy)'$。

</details>

<details markdown="1">
<summary>解答</summary>

由于 $(xy)'=2x$，积分得 $xy=x^2+C$，所以 $y=x+C/x$。由条件得 $5=2+C/2$，于是

$$\boxed{y=x+\frac6x},\qquad x>0.$$

检验：$y'+y/x=1-6/x^2+1+6/x^2=2$。原方程的系数在 $x=0$ 处无定义。

</details>

### 第 3 题：变系数 {#practice-3}

> Solve $y'+2xy=2x$, given $y(0)=3$.

<details markdown="1">
<summary>提示</summary>

使用 $\mu=e^{x^2}$；它的导数为 $2xe^{x^2}$。

</details>

<details markdown="1">
<summary>解答</summary>

乘以积分因子后，得 $(e^{x^2}y)'=2xe^{x^2}$。于是 $e^{x^2}y=e^{x^2}+C$，且 $y=1+Ce^{-x^2}$。由条件得 $C=2$：

$$\boxed{y=1+2e^{-x^2}},\qquad x\in\mathbb R.$$

检验：$y'=-4xe^{-x^2}$ 与 $2xy$ 中的指数项相消，剩下 $2x$。

</details>

### 第 4 题：多项式 PI 与边界条件 {#practice-4}

> Using a CF and a PI, solve $y'+y=x^2$, given the boundary condition $y(1)=0$.

<details markdown="1">
<summary>提示</summary>

试设 $y_p=Ax^2+Bx+D$，注意保留一次项与常数项。

</details>

<details markdown="1">
<summary>解答</summary>

CF 为 $Ce^{-x}$。代入试设形式，得

$$y_p'+y_p=Ax^2+(2A+B)x+(B+D).$$

因此 $A=1$、$B=-2$，且 $D=2$。通解为 $y=Ce^{-x}+x^2-2x+2$。当 $x=1$ 时，$0=Ce^{-1}+1$，所以 $C=-e$：

$$\boxed{y=x^2-2x+2-e^{1-x}},\qquad x\in\mathbb R.$$

多项式部分产生 $x^2$，指数部分在 $y'+y$ 中相消为零，所以原方程成立，且 $y(1)=0$。

</details>

### 第 5 题：与 CF 重复的指数 PI {#practice-5}

> Find the general solution of $y'-y=4e^x$, then use $y(0)=2$.

<details markdown="1">
<summary>提示</summary>

CF 为 $Ce^x$，所以试设 $y_p=Axe^x$。

</details>

<details markdown="1">
<summary>解答</summary>

对于 $y_p=Axe^x$，有 $y_p'-y_p=Ae^x$，得 $A=4$。于是 $y=(C+4x)e^x$。由初始条件得 $C=2$：

$$\boxed{y=(2+4x)e^x},\qquad x\in\mathbb R.$$

求导得 $y'=(6+4x)e^x$，所以 $y'-y=4e^x$，且 $y(0)=2$。

</details>

### 第 6 题：负半轴上的区间 {#practice-6}

> On $x<0$, solve $y'-\frac1x y=x$, given $y(-1)=2$. Explain why the solution interval cannot include $x=0$.

<details markdown="1">
<summary>提示</summary>

积分因子公式给出 $1/|x|$。在 $x<0$ 上，也可以改用它的常数倍 $\mu=1/x$。

</details>

<details markdown="1">
<summary>解答</summary>

由于 $\int-1/x\,\mathrm dx=-\ln|x|$，在给定区间上使用 $\mu=1/x$。乘以积分因子，得

$$\frac{y'}x-\frac y{x^2}=1,\qquad \left(\frac yx\right)'=1.$$

于是 $y/x=x+C$，且 $y=x^2+Cx$。由条件得 $2=1-C$，所以

$$\boxed{y=x^2-x},\qquad x<0.$$

检验：$y'-y/x=(2x-1)-(x-1)=x$。虽然解的表达式是多项式，但原方程在 $x=0$ 处无定义，因此这个原方程的解应限定在 $x<0$ 上。

</details>

## 快速参考 {#quick-reference}

| 步骤或方法 | 结果 | 检查要点 |
|---|---|---|
| 标准形式 | $y'+P(x)y=Q(x)$ | 每一项都除以 $y'$ 的系数 |
| 积分因子 | $\mu=e^{\int P\,\mathrm dx}$ | 使用标准形式中的 $P$；$\mu$ 中不需要任意常数 |
| 乘积的导数 | $(\mu y)'=\mu Q$ | 方程右边也要乘以积分因子 |
| 通解 | $y=\mu^{-1}(\int\mu Q\,\mathrm dx+C)$ | 每一项都除以 $\mu$ |
| 齐次通解 | $y_c=C/\mu$ | 满足 $y_c'+Py_c=0$ |
| 一个特解 | 任意一个 $y_p$，满足 $y_p'+Py_p=Q$ | 不再添加第二个任意常数 |
| CF + PI | $y=y_c+y_p$ | 两部分相加后，再代入条件 |
| 指数形式的试设 | 对于 $y'+ay=be^{kx}$，可取 $y_p=\frac b{k+a}e^{kx}$，条件是 $k+a\ne0$ | 若 $k=-a$，使用 $y_p=bxe^{-ax}$ |
| 条件与区间 | 代入给定的 $(x,y)$，求出 $C$ | 区间仍须排除奇点 |

## 常见错误 {#common-pitfalls}

- 直接使用 $y$ 的系数，却没有先将 $y'$ 的系数化为 1。
- 只有方程左边乘以积分因子。
- 把左边写成 $(\mu y)'$，却没有检查 $\mu'=P\mu$。
- 忘记 $C$，或最后只将某一项除以 $\mu$。
- 将 PI 当作满足给定条件的最终解。
- 试设的指数 PI 已包含在 CF 中；遇到上文这种重复情形，应将试设形式乘以 $x$。
- 未说明区间上的正负号就去掉 $\ln|x|$ 中的绝对值，或让解的区间跨越奇点。

**练习后：**重新独立完成曾需要提示的题目。写出标准形式、积分因子与乘积的导数，或明确写出 CF 与 PI。最后同时检验方程及其给定条件。

**学习路径：**[上一课：双曲函数](/zh/alevel/a2-further-mathematics/hyperbolic-functions/) · FP2.11 二阶微分方程（准备中） · [高等纯数学](/zh/alevel/a2-further-mathematics/)。

## 资料来源 {#sources}

本课范围依据 OxfordAQA [International A-level Further Mathematics 课程大纲 FP2.10，印刷页码 19](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf)：一阶线性方程、积分因子、CF 加 PI，以及通解和满足条件的解。例 3 改编自 [OxfordAQA 2018 年 FM03 样卷第 5 题](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9665-FM03-international-a-level-further-mathematics-specimen-paper-2019-v3.pdf)的求解方法，并对照[官方评分细则第 5 题](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9665-FM03-international-a-level-further-mathematics-mark-scheme-2016-v1.pdf)核对。解答明确展示标准形式、积分因子、乘积的导数、积分及条件的使用。改编题修改了方程与条件，不表示它具有官方分值。
