---
title: 双曲函数
layout: subjects
mathjax: true
grade: a2
subject: a2-further-mathematics
lang: zh-CN
translation_of: /alevel/a2-further-mathematics/hyperbolic-functions/
permalink: /zh/alevel/a2-further-mathematics/hyperbolic-functions/
toc_headings: h2
study_page: true
---

[高等纯数学](/zh/alevel/a2-further-mathematics/) · FP2.9 双曲函数

本课按 FP2.9 学习双曲函数（hyperbolic functions）的定义、图像、恒等式、方程、反函数、导数与积分。例题示范如何选择方法并检查定义域（domain）。

- **学习：**从[定义](#definitions)开始，再学习[图像与恒等式](#graphs-and-identities)、[方程](#linear-combinations)、[反双曲函数](#inverse-hyperbolic-functions)、[求导](#differentiation)和[积分](#integration)。
- **作业帮助：**可直接查看[求解方程](#example-2-solve-a-linear-combination)、[反函数的对数公式](#example-4-use-the-logarithmic-forms)、[复合反函数求导](#example-6-differentiate-a-composite-inverse-function)或[标准积分](#standard-integrals)。
- **复习：**先独立完成[练习](#practice)，再查看解答，最后核对[快速参考](#quick-reference)。

教材目录对应第 24 章，印刷页码 288–305（本课内容按 FP2.9 官方范围编排）。

**开始前：**请先熟悉指数与对数运算律（exponential and logarithmic laws）、链式法则（chain rule）、隐函数求导（implicit differentiation）和换元（substitution）。留意每个函数及其导数的定义域。

## 定义 {#definitions}

双曲正弦（**hyperbolic sine**）、双曲余弦（**hyperbolic cosine**）和双曲正切（**hyperbolic tangent**）由指数函数定义：

$$\sinh x=\frac{e^x-e^{-x}}2,\qquad \cosh x=\frac{e^x+e^{-x}}2,\qquad \tanh x=\frac{\sinh x}{\cosh x}=\frac{e^x-e^{-x}}{e^x+e^{-x}}.$$

倒数型双曲函数（reciprocal hyperbolic functions）包括双曲余切（**hyperbolic cotangent**）、双曲正割（**hyperbolic secant**）和双曲余割（**hyperbolic cosecant**）：

$$\operatorname{coth}x=\frac{\cosh x}{\sinh x},\qquad \operatorname{sech}x=\frac1{\cosh x},\qquad \operatorname{cosech}x=\frac1{\sinh x}.$$

由定义可立即得到

$$e^x=\cosh x+\sinh x,\qquad e^{-x}=\cosh x-\sinh x.$$

记号 $\sinh^{-1}x$ 表示函数 $\sinh x$ 的反函数（inverse function）；它并不表示 $1/\sinh x$。倒数函数记作 $\operatorname{cosech}x$。$\cosh^{-1}x$ 和 $\tanh^{-1}x$ 也遵循同样的记号区别。

## 图像与恒等式 {#graphs-and-identities}

### FP2.9 要求熟悉的六个图像 {#six-core-graphs}

为了定义反双曲余弦函数 $\cosh^{-1}x$，先把原函数 $y=\cosh x$ 的定义域限制为 $x\ge0$，此时函数是一一对应的。反函数的值域为 $y\ge0$；将限制后的图像关于直线 $y=x$ 对称，即得反函数图像。另两个反函数图像也分别由对应的基本函数图像关于 $y=x$ 对称得到。

| 函数 | 定义域（domain） | 值域（range） | 对称性与图形特征 | 渐近线（asymptote） |
|---|---|---|---|---|
| $y=\sinh x$ | $\mathbb R$ | $\mathbb R$ | 奇函数（odd function）；递增并经过 $(0,0)$ | 无 |
| $y=\cosh x$ | $\mathbb R$ | $[1,\infty)$ | 偶函数（even function）；在 $(0,1)$ 处取得最小值 | 无 |
| $y=\tanh x$ | $\mathbb R$ | $(-1,1)$ | 奇函数；递增并经过 $(0,0)$ | 水平渐近线：$y=\pm1$ |
| $y=\sinh^{-1}x$ | $\mathbb R$ | $\mathbb R$ | 奇函数；递增并经过 $(0,0)$ | 无 |
| $y=\cosh^{-1}x$ | $[1,\infty)$ | $[0,\infty)$ | 从 $(1,0)$ 开始递增 | 无 |
| $y=\tanh^{-1}x$ | $(-1,1)$ | $\mathbb R$ | 奇函数；递增并经过 $(0,0)$ | 垂直渐近线：$x=\pm1$ |

![FP2.9 的六个图像：上排依次为双曲正弦、双曲余弦和双曲正切，下排依次为它们的反函数。图中标出了原点或转折点、反双曲余弦的非负主值分支、双曲正切的水平渐近线，以及反双曲正切的垂直渐近线。](/assets/img/further-hyperbolic-graphs.svg)

双曲正切 $\tanh x$ 会无限接近水平直线 $y=1$ 和 $y=-1$，但不会取到这两个值。反双曲正切 $\tanh^{-1}x$ 的定义域不包含 $x=1$ 和 $x=-1$。反函数会交换所选分支的定义域和值域。

### 倒数型函数的定义域和值域 {#reciprocal-function-domains}

| 函数 | 定义域 | 值域 | 对称性与渐近线 |
|---|---|---|---|
| $y=\operatorname{coth}x$ | $\mathbb R\setminus\{0\}$ | $(-\infty,-1)\cup(1,\infty)$ | 奇函数；垂直渐近线 $x=0$, 水平渐近线 $y=\pm1$ |
| $y=\operatorname{sech}x$ | $\mathbb R$ | $(0,1]$ | 偶函数；在 $(0,1)$ 处取得最大值，水平渐近线 $y=0$ |
| $y=\operatorname{cosech}x$ | $\mathbb R\setminus\{0\}$ | $\mathbb R\setminus\{0\}$ | 奇函数；垂直渐近线 $x=0$, 水平渐近线 $y=0$ |

倒数型函数不属于 FP2.9 指定熟悉的六个图像，但求导或积分时必须注意它们的定义域。

### 用指数定义证明恒等式 {#identity-proofs}

把定义中的平方展开可得

$$\begin{aligned}
\cosh^2x-\sinh^2x
&=\frac{(e^x+e^{-x})^2-(e^x-e^{-x})^2}{4}\\
&=\frac{4}{4}\\
&=1.
\end{aligned}$$

等式两边除以 $\cosh^2x$，得到第二个恒等式；除以 $\sinh^2x$，得到第三个恒等式，但这一步要求 $x\ne0$。

$$1-\tanh^2x=\operatorname{sech}^2x,\qquad \operatorname{coth}^2x-1=\operatorname{cosech}^2x.$$

证明加法公式时，代入指数定义并将乘积项合并：

$$\begin{aligned}
\sinh(x+y)
&=\frac{e^{x+y}-e^{-x-y}}2\\
&=\frac{e^xe^y-e^{-x}e^{-y}}2\\
&=\frac{(e^x-e^{-x})(e^y+e^{-y})+(e^x+e^{-x})(e^y-e^{-y})}{4}\\
&=\sinh x\cosh y+\cosh x\sinh y.
\end{aligned}$$

同样展开还可得到常用的差角恒等式

$$\cosh(x-y)=\cosh x\cosh y-\sinh x\sinh y.$$

## 求解双曲函数线性组合 {#linear-combinations}

求解 $a\sinh x+b\cosh x=c$ 时，令 $t=e^x$。指数函数恒为正数，所以**必须保留条件 $t>0$**。代入定义并通分，解所得二次方程；舍去所有满足 $t\le0$ 的根，再对每个正根求 $x=\ln t$。

$$a\sinh x+b\cosh x=c
\quad\Longleftrightarrow\quad
(a+b)t^2-2ct+(b-a)=0,\qquad t=e^x>0.$$

当 $a+b=0$ 时，二次项消失，应直接求解剩下的关于 $t$ 的方程。零根或负根都不能取对数。

## 反双曲函数（inverse hyperbolic functions） {#inverse-hyperbolic-functions}

求反双曲函数的对数形式时，可从定义出发解出 $e^y$，并始终记住 $e^y>0$。

### 反双曲正弦 {#inverse-sinh}

令 $y=\sinh^{-1}x$，于是 $x=\sinh y$。再令 $t=e^y>0$：

$$2x=t-\frac1t\quad\Longrightarrow\quad t^2-2xt-1=0.$$

正根为 $t=x+\sqrt{x^2+1}$。因为对任意实数 $x$ 都有 $\sqrt{x^2+1}>\lvert x\rvert$，所以这个根恒为正数。因此

$$\boxed{\sinh^{-1}x=\ln\left(x+\sqrt{x^2+1}\right)},\qquad x\in\mathbb R.$$

### 反双曲余弦 {#inverse-cosh}

令 $y=\cosh^{-1}x$，并取主值分支（principal branch）$y\ge0$，于是 $x=\cosh y$ 且 $t=e^y\ge1$：

$$2x=t+\frac1t\quad\Longrightarrow\quad t^2-2xt+1=0.$$

当 $x\ge1$ 时，根 $t=x+\sqrt{x^2-1}$ 不小于 $1$，对应所选分支。因此

$$\boxed{\cosh^{-1}x=\ln\left(x+\sqrt{x^2-1}\right)},\qquad x\ge1.$$

当 $x=1$ 时，函数值为 $0$；其导数公式只在 $x>1$ 时有定义。

### 反双曲正切 {#inverse-tanh}

令 $y=\tanh^{-1}x$，并设 $t=e^{2y}>0$，则

$$x=\frac{e^{2y}-1}{e^{2y}+1}=\frac{t-1}{t+1}
\quad\Longrightarrow\quad
t=\frac{1+x}{1-x}.$$

当且仅当 $-1<x<1$ 时，该比值为正。因此

$$\boxed{\tanh^{-1}x=\frac12\ln\left(\frac{1+x}{1-x}\right)},\qquad -1<x<1.$$

这个定义域限制不可省略：实数范围内的反双曲正切函数不接受 $x=\pm1$。

## 求导 {#differentiation}

对指数定义求导，即可证明前两个求导公式：

$$\begin{aligned}
\frac{\mathrm d}{\mathrm dx}\sinh x
&=\frac{e^x+e^{-x}}2=\cosh x,\\
\frac{\mathrm d}{\mathrm dx}\cosh x
&=\frac{e^x-e^{-x}}2=\sinh x.
\end{aligned}$$

使用商法则（quotient rule）以及恒等式 $\cosh^2x-\sinh^2x=1$，可证明 $\tanh x$ 的导数公式：

$$\begin{aligned}
\frac{\mathrm d}{\mathrm dx}\tanh x
&=\frac{\cosh^2x-\sinh^2x}{\cosh^2x}\\
&=\operatorname{sech}^2x.
\end{aligned}$$

对其余三个倒数型函数的定义求导：

$$\begin{aligned}
\frac{\mathrm d}{\mathrm dx}\operatorname{sech}x
&=-\frac{\sinh x}{\cosh^2x}=-\operatorname{sech}x\tanh x,\\
\frac{\mathrm d}{\mathrm dx}\operatorname{coth}x
&=\frac{\sinh^2x-\cosh^2x}{\sinh^2x}=-\operatorname{cosech}^2x,\\
\frac{\mathrm d}{\mathrm dx}\operatorname{cosech}x
&=-\frac{\cosh x}{\sinh^2x}=-\operatorname{cosech}x\operatorname{coth}x.
\end{aligned}$$

$\operatorname{coth}$ 和 $\operatorname{cosech}$ 的求导公式要求 $x\ne0$。

若内层函数 $u=u(x)$ 可导，再乘上 $u'=\frac{\mathrm du}{\mathrm dx}$：

$$\boxed{\begin{aligned}
\frac{\mathrm d}{\mathrm dx}\sinh u&=u'\cosh u,&
\frac{\mathrm d}{\mathrm dx}\cosh u&=u'\sinh u,\\
\frac{\mathrm d}{\mathrm dx}\tanh u&=u'\operatorname{sech}^2u,&
\frac{\mathrm d}{\mathrm dx}\operatorname{sech}u&=-u'\operatorname{sech}u\tanh u,\\
\frac{\mathrm d}{\mathrm dx}\operatorname{coth}u&=-u'\operatorname{cosech}^2u,&
\frac{\mathrm d}{\mathrm dx}\operatorname{cosech}u&=-u'\operatorname{cosech}u\operatorname{coth}u.
\end{aligned}}$$

倒数型函数仍须满足相同的限制：$\operatorname{coth}u$ 和 $\operatorname{cosech}u$ 要求 $u\ne0$。

### 反函数的导数 {#inverse-derivatives}

使用隐函数求导，可求出反函数的导数及其定义域。对于 $y=\sinh^{-1}x$，从 $x=\sinh y$ 出发：

$$1=\cosh y\frac{\mathrm dy}{\mathrm dx},\qquad \cosh y=\sqrt{1+\sinh^2y}=\sqrt{1+x^2},$$

因此，$\displaystyle\frac{\mathrm d}{\mathrm dx}\sinh^{-1}x=\frac1{\sqrt{1+x^2}}$ 对所有实数 $x$ 均成立。

对于 $y=\cosh^{-1}x$，所选分支满足 $y>0$；这对应于 $x>1$，因此 $\sinh y>0$：

$$1=\sinh y\frac{\mathrm dy}{\mathrm dx},\qquad \sinh y=\sqrt{\cosh^2y-1}=\sqrt{x^2-1}.$$

所以，$\displaystyle\frac{\mathrm d}{\mathrm dx}\cosh^{-1}x=\frac1{\sqrt{x^2-1}}$ 对 $x>1$ 成立。函数在 $x=1$ 处有定义，但此处导数不是有限值。

对于 $y=\tanh^{-1}x$，使用 $x=\tanh y$ 以及 $\operatorname{sech}^2y=1-\tanh^2y$：

$$1=\operatorname{sech}^2y\frac{\mathrm dy}{\mathrm dx}=(1-x^2)\frac{\mathrm dy}{\mathrm dx}.$$

因此，$\displaystyle\frac{\mathrm d}{\mathrm dx}\tanh^{-1}x=\frac1{1-x^2}$ 对 $-1<x<1$ 成立。

若内层函数 $u=u(x)$ 可导，应用链式法则得到

$$\boxed{\begin{aligned}
\frac{\mathrm d}{\mathrm dx}\sinh^{-1}u&=\frac{u'}{\sqrt{1+u^2}},\\
\frac{\mathrm d}{\mathrm dx}\cosh^{-1}u&=\frac{u'}{\sqrt{u^2-1}},\\
\frac{\mathrm d}{\mathrm dx}\tanh^{-1}u&=\frac{u'}{1-u^2}.
\end{aligned}}$$

第一条公式适用于 $u$ 为实数且可导的所有位置；第二条要求 $u>1$，此时导数才有限；第三条要求 $-1<u<1$。

## 积分 {#integration}

### 标准积分 {#standard-integrals}

每个公式都可由对应的求导公式逆向得到。此处 $a\ne0$；积分区间应当位于被积函数和原函数都有定义的范围内。

| 被积函数（integrand） | 原函数（antiderivative） |
|---|---|
| $\sinh(ax+b)$ | $\displaystyle\frac1a\cosh(ax+b)+C$ |
| $\cosh(ax+b)$ | $\displaystyle\frac1a\sinh(ax+b)+C$ |
| $\operatorname{sech}^2(ax+b)$ | $\displaystyle\frac1a\tanh(ax+b)+C$ |
| $\operatorname{cosech}^2(ax+b)$ | $\displaystyle-\frac1a\operatorname{coth}(ax+b)+C$ |
| $\operatorname{sech}(ax+b)\tanh(ax+b)$ | $\displaystyle-\frac1a\operatorname{sech}(ax+b)+C$ |
| $\operatorname{cosech}(ax+b)\operatorname{coth}(ax+b)$ | $\displaystyle-\frac1a\operatorname{cosech}(ax+b)+C$ |

以下三种反双曲函数积分形式尤其常用。此处 $a>0$：

$$\boxed{\begin{aligned}
\int\frac{\mathrm dx}{\sqrt{x^2+a^2}}&=\sinh^{-1}\left(\frac xa\right)+C,\\
\int\frac{\mathrm dx}{\sqrt{x^2-a^2}}&=\cosh^{-1}\left(\frac xa\right)+C,\qquad x>a,\\
\int\frac{\mathrm dx}{a^2-x^2}&=\frac1a\tanh^{-1}\left(\frac xa\right)+C,\qquad \lvert x\rvert<a.
\end{aligned}}$$

第一种被积函数对所有实数 $x$ 都有实数值。第二个公式适用于 $x>a$；当 $x=a$ 时被积函数无定义。虽然被积函数在 $x<-a$ 时也有实数值，但这里给出的 $\cosh^{-1}(x/a)$ 形式不适用于该区间。第三个反函数形式适用于 $(-a,a)$；在任意不包含 $x=\pm a$ 的区间上，也可写成

$$\int\frac{\mathrm dx}{a^2-x^2}=\frac1{2a}\ln\left|\frac{a+x}{a-x}\right|+C.$$

换元积分法（integration by substitution）中，令 $u=g(x)$ 后，要把每个 $x$ 和 $\mathrm dx$ 都换成新变量，并计入 $\mathrm du=g'(x)\,\mathrm dx$ 带来的因子。不定积分（indefinite integral）要保留积分常数（constant of integration）$+C$。定积分应随换元改变积分限，或者先代回原变量再使用原积分限。

## 例题 {#worked-examples}

### 例题 1 — 由指数定义求精确值 {#example-1-exact-values}

**Question:** Find $\sinh(\ln3)$, $\cosh(\ln3)$, $\tanh(\ln3)$ and $\operatorname{sech}(\ln3)$.

因为 $e^{\ln3}=3$ 且 $e^{-\ln3}=\frac13$，

$$\begin{aligned}
\sinh(\ln3)&=\frac{3-\frac13}{2}=\frac43,\\
\cosh(\ln3)&=\frac{3+\frac13}{2}=\frac53,\\
\tanh(\ln3)&=\frac{\frac43}{\frac53}=\frac45,\\
\operatorname{sech}(\ln3)&=\frac1{\cosh(\ln3)}=\frac35.
\end{aligned}$$

**检查：**$\cosh^2(\ln3)-\sinh^2(\ln3)=\frac{25}{9}-\frac{16}{9}=1$，且 $1-\tanh^2(\ln3)=\frac9{25}=\operatorname{sech}^2(\ln3)$。

### 例题 2 — 求解线性组合并舍去不合条件的根 {#example-2-solve-a-linear-combination}

**Question:** Solve $2\sinh x+\cosh x=2$.

令 $t=e^x$，因此 $t>0$。代入并整理可得

$$\begin{aligned}
2\sinh x+\cosh x=2
&\Longleftrightarrow\frac{2(t-t^{-1})+(t+t^{-1})}{2}=2\\
&\Longleftrightarrow 3t^2-4t-1=0.
\end{aligned}$$

因此

$$t=\frac{2\pm\sqrt7}{3}.$$

由于 $\frac{2-\sqrt7}{3}<0$，舍去该根，因为它不可能等于 $e^x$。保留正根，得到

$$\boxed{x=\ln\left(\frac{2+\sqrt7}{3}\right)}.$$

**检查：**保留的根满足 $e^x>0$，并且满足由原方程得到的二次方程。

### 例题 3 — 使用加法公式（改编方法） {#example-3-use-an-addition-formula}

**Question:** Solve $\cosh(x-\ln3)=2\sinh x$.

本题借鉴 OxfordAQA 2018 年样卷 FM03 第 2 题的解题方法并作了教学改编，并非官方原题。使用 $\cosh(x-y)=\cosh x\cosh y-\sinh x\sinh y$，并代入 $\cosh(\ln3)=\frac53$ 和 $\sinh(\ln3)=\frac43$：

$$\begin{aligned}
\frac53\cosh x-\frac43\sinh x&=2\sinh x,\\
\frac53\cosh x&=\frac{10}{3}\sinh x,\\
\tanh x&=\frac12.
\end{aligned}$$

利用 $\tanh x=\frac{e^{2x}-1}{e^{2x}+1}$，

$$\frac{e^{2x}-1}{e^{2x}+1}=\frac12
\quad\Longrightarrow\quad e^{2x}=3
\quad\Longrightarrow\quad
\boxed{x=\frac12\ln3}.$$

**检查：**由 $e^{2x}=3$ 可得 $\tanh x=\frac{3-1}{3+1}=\frac12$，符合要求。

### 例题 4 — 使用对数形式 {#example-4-use-the-logarithmic-forms}

**Question:** Find $\sinh^{-1}3$, $\cosh^{-1}2$ and $\tanh^{-1}\left(\frac13\right)$.

代入对数形式，并逐一检查输入值是否属于对应定义域：

$$\begin{aligned}
\sinh^{-1}3&=\ln(3+\sqrt{10}),\\
\cosh^{-1}2&=\ln(2+\sqrt3),\\
\tanh^{-1}\left(\frac13\right)&=\frac12\ln\left(\frac{1+\frac13}{1-\frac13}\right)=\frac12\ln2.
\end{aligned}$$

**检查：**前两个对数的真数均为正；$2\ge1$，符合 $\cosh^{-1}$ 的定义域；$\frac13$ 介于 $-1$ 与 $1$ 之间。

### 例题 5 — 对双曲函数的复合式求导 {#example-5-differentiate-a-direct-composite}

**Question:** Differentiate $y=3\sinh(2x)-4\operatorname{coth}x$ and state its domain.

使用链式法则，以及 $\operatorname{coth}x$ 的导数公式：

$$\begin{aligned}
\frac{\mathrm dy}{\mathrm dx}
&=3\cdot2\cosh(2x)-4\left(-\operatorname{cosech}^2x\right)\\
&=\boxed{6\cosh(2x)+4\operatorname{cosech}^2x}.
\end{aligned}$$

当 $x\ne0$ 时，原函数及其导数才有定义，因为 $\operatorname{coth}x$ 和 $\operatorname{cosech}x$ 在零点无定义。

### 例题 6 — 对复合反函数求导 {#example-6-differentiate-a-composite-inverse-function}

**Question:** Differentiate $y=\cosh^{-1}(2x+1)$ and state where the derivative exists.

函数有定义要求 $2x+1\ge1$，即 $x\ge0$。导数公式要求更严格的条件 $2x+1>1$，所以只有 $x>0$ 时导数才存在：

$$\begin{aligned}
\frac{\mathrm dy}{\mathrm dx}
&=\frac2{\sqrt{(2x+1)^2-1}}\\
&=\boxed{\frac1{\sqrt{x(x+1)}}},\qquad x>0.
\end{aligned}$$

**检查：**当 $x=0$ 时，函数值为 $\cosh^{-1}1=0$，但导数表达式的分母为零。因此端点属于函数的定义域，却不属于导数的定义域。

### 例题 7 — 代入标准积分形式 {#example-7-substitute-into-a-standard-integral}

**Question:** Find $\displaystyle\int(2x+1)\operatorname{sech}^2(x^2+x)\,\mathrm dx$.

令 $u=x^2+x$，则 $\mathrm du=(2x+1)\,\mathrm dx$，因此

$$\begin{aligned}
\int(2x+1)\operatorname{sech}^2(x^2+x)\,\mathrm dx
&=\int\operatorname{sech}^2u\,\mathrm du\\
&=\boxed{\tanh(x^2+x)+C}.
\end{aligned}$$

**检查：**对答案求导，得到 $(2x+1)\operatorname{sech}^2(x^2+x)$。

### 例题 8 — 换元化为反双曲正弦的标准积分 {#example-8-scale-an-inverse-hyperbolic-integral}

**Question:** Find $\displaystyle\int\frac{\mathrm dx}{\sqrt{9x^2+4}}$.

将根号内的常数因子提出，并令 $u=\frac{3x}{2}$，于是 $\mathrm dx=\frac23\,\mathrm du$：

$$\begin{aligned}
\int\frac{\mathrm dx}{\sqrt{9x^2+4}}
&=\frac13\int\frac{\mathrm du}{\sqrt{u^2+1}}\\
&=\boxed{\frac13\sinh^{-1}\left(\frac{3x}{2}\right)+C}.
\end{aligned}$$

对所有实数 $x$，被积函数都有实数值。**检查：**对框出的结果求导，得到 $\frac1{\sqrt{9x^2+4}}$。

### 例题 9 — 分母为平方差的积分 {#example-9-integrate-a-scaled-difference-of-squares}

**Question:** Find $\displaystyle\int\frac{\mathrm dx}{16-4x^2}$ and state where the original integrand is defined.

提出因子 $4$，再在标准积分公式中取 $a=2$：

$$\begin{aligned}
\int\frac{\mathrm dx}{16-4x^2}
&=\frac14\int\frac{\mathrm dx}{2^2-x^2}\\
&=\boxed{\frac18\tanh^{-1}\left(\frac x2\right)+C},\qquad \lvert x\rvert<2.
\end{aligned}$$

对应的对数形式为

$$\frac1{16}\ln\left\lvert\frac{2+x}{2-x}\right\rvert+C.$$

原被积函数在 $x\ne\pm2$ 时有定义；原函数须分别在区间 $(-\infty,-2)$、$(-2,2)$ 和 $(2,\infty)$ 上考虑。上面给出的反双曲函数形式仅适用于 $(-2,2)$。

## 练习 {#practice}

练习 1–8 均为本课原创题目，并非官方试题。请先独立作答，再打开提示和解答。第 3 题练习指数换元时只保留正根的做法，与 OxfordAQA 样卷的解题思路相同，但并未照抄试卷题目。

### 练习 1 — 验证恒等式 {#question-1-check-the-identities}

Show from the exponential definitions that $\cosh^2x-\sinh^2x=1$, then deduce $1-\tanh^2x=\operatorname{sech}^2x$.

<details markdown="1">
<summary>提示</summary>

先把两个平方项都写成分母为 $4$ 的分式，展开后相减。再将第一个恒等式两边除以 $\cosh^2x$。

</details>

<details markdown="1">
<summary>解答与检验</summary>

$$\begin{aligned}
\cosh^2x-\sinh^2x
&=\frac{(e^x+e^{-x})^2-(e^x-e^{-x})^2}{4}\\
&=1.
\end{aligned}$$

两边除以 $\cosh^2x$，得到

$$1-\tanh^2x=\frac{\cosh^2x-\sinh^2x}{\cosh^2x}=\frac1{\cosh^2x}=\operatorname{sech}^2x.$$

由于对所有实数 $x$ 都有 $\cosh x>0$，所以分母恒不为零。

</details>

### 练习 2 — 判断定义域与渐近线 {#question-2-read-domains-and-asymptotes}

State the domain and range of $\tanh x$, $\tanh^{-1}x$ and $\operatorname{coth}x$. Give each function's asymptotes and parity where applicable.

<details markdown="1">
<summary>提示</summary>

参考图像表。反函数会交换 $\tanh x$ 的定义域和值域；$\operatorname{coth}x$ 的分母为零时，函数无定义。

</details>

<details markdown="1">
<summary>解答与检验</summary>

$\tanh x$ 的定义域为 $\mathbb R$，值域为 $(-1,1)$；它是奇函数，水平渐近线为 $y=\pm1$。

$\tanh^{-1}x$ 的定义域为 $(-1,1)$，值域为 $\mathbb R$；它是奇函数，垂直渐近线为 $x=\pm1$。

$\operatorname{coth}x$ 的定义域为 $\mathbb R\setminus\{0\}$，值域为 $(-\infty,-1)\cup(1,\infty)$；它是奇函数，渐近线为 $x=0$ 和 $y=\pm1$。

**检验：**值域边界 $(-1,1)$（对应 $\tanh x$）是 $\tanh^{-1}x$ 定义域中不包含的端点。

</details>

### 练习 3 — 指数换元只取正根 {#question-3-keep-only-positive-roots}

Solve $3\sinh x+4\cosh x=4$ by setting $t=e^x$.

<details markdown="1">
<summary>提示</summary>

先记住 $t>0$。通分后因式分解所得二次式，并在取对数前检查每个根的正负。

</details>

<details markdown="1">
<summary>解答与检验</summary>

$$\begin{aligned}
3\sinh x+4\cosh x=4
&\Longleftrightarrow\frac{3(t-t^{-1})+4(t+t^{-1})}{2}=4\\
&\Longleftrightarrow 7t^2-8t+1=0\\
&\Longleftrightarrow (7t-1)(t-1)=0.
\end{aligned}$$

两个根均为正数：$t=\frac17$ 或 $t=1$。因此

$$\boxed{x=-\ln7\quad\text{or}\quad x=0.}$$

把两个解分别代回原方程，可得 $3\sinh(-\ln7)+4\cosh(-\ln7)=4$ 以及 $3\sinh0+4\cosh0=4$。

</details>

### 练习 4 — 应用反函数的对数形式 {#question-4-apply-the-inverse-logarithmic-forms}

Find $\sinh^{-1}(-3)$, $\cosh^{-1}3$ and $\tanh^{-1}\left(\frac13\right)$. State why $\cosh^{-1}(-3)$ is not real.

<details markdown="1">
<summary>提示</summary>

使用三个对数公式代入计算前，先检查每个输入值是否属于相应反函数的定义域。

</details>

<details markdown="1">
<summary>解答与检验</summary>

$$\begin{aligned}
\sinh^{-1}(-3)&=\ln\left(\sqrt{10}-3\right),\\
\cosh^{-1}3&=\ln(3+\sqrt8),\\
\tanh^{-1}\left(\frac13\right)&=\frac12\ln2.
\end{aligned}$$

第一个对数的真数为正，因为 $\sqrt{10}>3$。输入值 $3$ 属于 $[1,\infty)$，该区间是 $\cosh^{-1}$ 的定义域。输入值 $\frac13$ 属于 $(-1,1)$。不存在实数 $y$ 使 $\cosh y=-3$，因为 $\cosh y\ge1$ 对所有实数 $y$ 均成立。

</details>

### 练习 5 — 应用双曲函数求导公式 {#question-5-differentiate-using-direct-rules}

Differentiate $y=2\cosh(3x)-\operatorname{sech}(x^2)$.

<details markdown="1">
<summary>提示</summary>

两项都使用链式法则。第二项要用到 $\frac{\mathrm d}{\mathrm du}\operatorname{sech}u=-\operatorname{sech}u\tanh u$。

</details>

<details markdown="1">
<summary>解答与检验</summary>

$$\begin{aligned}
\frac{\mathrm dy}{\mathrm dx}
&=2\cdot3\sinh(3x)-\left[-2x\operatorname{sech}(x^2)\tanh(x^2)\right]\\
&=\boxed{6\sinh(3x)+2x\operatorname{sech}(x^2)\tanh(x^2)}.
\end{aligned}$$

第二项出现正号，是因为原式减去了 $\operatorname{sech}u$ 的负导数。

</details>

### 练习 6 — 对反函数复合式求导 {#question-6-differentiate-an-inverse-composite}

Differentiate $y=\tanh^{-1}(\sin x)$ and state where the function and derivative are defined.

<details markdown="1">
<summary>提示</summary>

反双曲正切要求 $-1<\sin x<1$。应用链式法则，并使用恒等式 $1-\sin^2x=\cos^2x$。

</details>

<details markdown="1">
<summary>解答与检验</summary>

条件 $-1<\sin x<1$ 排除了 $x=\frac\pi2+k\pi$，其中 $k\in\mathbb Z$。在其他所有实数 $x$ 处，

$$\begin{aligned}
\frac{\mathrm dy}{\mathrm dx}
&=\frac{\cos x}{1-\sin^2x}\\
&=\boxed{\frac1{\cos x}}.
\end{aligned}$$

函数与导数在相邻排除点之间的每个区间内都有定义。化简时除以了 $\cos^2x$，因此不能把已排除的点重新纳入定义域。

</details>

### 练习 7 — 对双曲函数积分换元 {#question-7-substitute-into-a-hyperbolic-integral}

Find $\displaystyle\int 2x\cosh(x^2+1)\,\mathrm dx$.

<details markdown="1">
<summary>提示</summary>

令 $u=x^2+1$，则 $\mathrm du=2x\,\mathrm dx$。

</details>

<details markdown="1">
<summary>解答与检验</summary>

$$\begin{aligned}
\int 2x\cosh(x^2+1)\,\mathrm dx
&=\int\cosh u\,\mathrm du\\
&=\boxed{\sinh(x^2+1)+C}.
\end{aligned}$$

对答案求导，得到 $2x\cosh(x^2+1)$。

</details>

### 练习 8 — 缩放三种标准积分 {#question-8-scale-standard-integrals}

Find $\displaystyle\int\frac{\mathrm dx}{\sqrt{4x^2+9}}$ and $\displaystyle\int\frac{\mathrm dx}{25-4x^2}$, and, for $x>\frac32$, find $\displaystyle\int\frac{\mathrm dx}{\sqrt{4x^2-9}}$. State where each original integrand is defined.

<details markdown="1">
<summary>提示</summary>

第一题令 $u=\frac{2x}{3}$。第二题把分母写成 $5^2-(2x)^2$，并保留 $\mathrm du=2\,\mathrm dx$ 所带来的因子。第三题令 $u=\frac{2x}{3}$，并利用条件 $u>1$。

</details>

<details markdown="1">
<summary>解答与检验</summary>

对于第一题，令 $u=\frac{2x}{3}$，则 $\mathrm dx=\frac32\,\mathrm du$：

$$\int\frac{\mathrm dx}{\sqrt{4x^2+9}}=\boxed{\frac12\sinh^{-1}\left(\frac{2x}{3}\right)+C}.$$

对所有实数 $x$，该被积函数都有定义。

对于第二题，令 $u=2x$，则 $\mathrm dx=\frac12\,\mathrm du$：

$$\begin{aligned}
\int\frac{\mathrm dx}{25-4x^2}
&=\frac12\int\frac{\mathrm du}{25-u^2}\\
&=\boxed{\frac1{10}\tanh^{-1}\left(\frac{2x}{5}\right)+C},\qquad \lvert x\rvert<\frac52.
\end{aligned}$$

原分母在 $x\ne\pm\frac52$ 时不为零。所示反双曲函数形式适用于区间 $(-\frac52,\frac52)$；在其他区间上，应使用对数形式，并分别取积分常数。

对于第三题，令 $u=\frac{2x}{3}$，则 $\mathrm dx=\frac32\,\mathrm du$。由于 $x>\frac32$，所以 $u>1$：

$$\begin{aligned}
\int\frac{\mathrm dx}{\sqrt{4x^2-9}}
&=\frac12\int\frac{\mathrm du}{\sqrt{u^2-1}}\\
&=\boxed{\frac12\cosh^{-1}\left(\frac{2x}{3}\right)+C},\qquad x>\frac32.
\end{aligned}$$

原被积函数在 $\lvert x\rvert>\frac32$ 时有实数值。本题要求求正支 $x>\frac32$ 上的积分，此时所示反双曲余弦形式适用。端点 $x=\frac32$ 不包含在内，因为原被积函数的分母在此处为零。

</details>

## 快速参考 {#quick-reference}

| 内容 | 结果 | 注意条件 |
|---|---|---|
| 定义 | $\sinh x=\frac{e^x-e^{-x}}2$, $\cosh x=\frac{e^x+e^{-x}}2$ | 换元时注意 $e^x>0$ |
| 主要恒等式 | $\cosh^2x-\sinh^2x=1$ | 对所有实数 $x$ |
| 其他恒等式 | $1-\tanh^2x=\operatorname{sech}^2x$, $\operatorname{coth}^2x-1=\operatorname{cosech}^2x$ | 第二个恒等式要求 $x\ne0$ |
| 加法公式 | $\sinh(x+y)=\sinh x\cosh y+\cosh x\sinh y$ | 可由指数定义证明 |
| 线性组合方程 | $a\sinh x+b\cosh x=c$ 可化为 $(a+b)t^2-2ct+(b-a)=0$ | $t=e^x>0$；舍去非正根 |
| 反函数对数公式 | $\sinh^{-1}x=\ln(x+\sqrt{x^2+1})$; $\cosh^{-1}x=\ln(x+\sqrt{x^2-1})$; $\tanh^{-1}x=\frac12\ln\frac{1+x}{1-x}$ | 定义域： $\mathbb R$, $x\ge1$, $-1<x<1$ |
| 导数 | $\sinh' x=\cosh x$, $\cosh' x=\sinh x$, $\tanh' x=\operatorname{sech}^2x$ | 链式法则需乘以内层导数 $u'$ |
| 反函数的导数 | $(\sinh^{-1}x)'=\frac1{\sqrt{1+x^2}}$, $(\cosh^{-1}x)'=\frac1{\sqrt{x^2-1}}$, $(\tanh^{-1}x)'=\frac1{1-x^2}$ | 注意反函数的定义域；$\cosh^{-1}$ 的导数要求 $x>1$ |
| 积分 | 可逆用六个求导公式，或使用三种标准反双曲积分形式 | 按内层导数缩放，注明定义域，并加上 $+C$ |

**练习之后：**把无法在不看提示的情况下完成的解答重新做一遍。对于每个含 $e^x$ 的方程，取对数前先检查正性；对于每个反函数，求导或积分前先检查定义域。

**学习路径：**[上一课：弧长与旋转曲面面积](/zh/alevel/a2-further-mathematics/arc-length-and-surface-area/) · [高等纯数学](/zh/alevel/a2-further-mathematics/)。

## 资料来源 {#sources}

本课范围依据 OxfordAQA《国际 A-level 高等数学大纲》[FP2.9（印刷版第 19 页）](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf) 编排。例题 3 改编自 [OxfordAQA 2018 年样卷 FM03 第 2 题](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9665-FM03-international-a-level-further-mathematics-specimen-paper-2019-v3.pdf)的解题方法，并参考了[该题的官方评分细则](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9665-FM03-international-a-level-further-mathematics-mark-scheme-2016-v1.pdf)。例题中的方程已作改动，因此不是官方原题，也不代表任何官方分值。
