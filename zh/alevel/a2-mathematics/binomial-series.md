---
title: 二项式级数
layout: subjects
mathjax: true
grade: a2
subject: a2-mathematics
lang: zh-CN
translation_of: /alevel/a2-mathematics/binomial-series/
permalink: /zh/alevel/a2-mathematics/binomial-series/
toc_headings: h2
study_page: true
---

[纯数学](/zh/alevel/a2-mathematics/) · P2.2 二项式级数

按 $x$ 的升幂展开，写出适用范围（range of validity），并用级数求近似值。

- **学习：**从[二项式级数（binomial series）](#the-binomial-series)开始，再学习[部分分式与乘积](#partial-fractions-and-products)和[近似计算](#approximations)。
- **作业帮助：**先找出幂次 $n$，以及公式中替代 $x$ 的整个表达式。检查常数因子和符号。
- **复习：**先在不看解答的情况下尝试[练习](#practice)，然后使用[快速参考](#quick-reference)。

教材：第 2 章，第 2.1–2.2 节（印刷版第 24–30 页）。主要内容包括指数 $n$ 为任意有理数（rational number）时的二项式级数、有理函数（rational function）的级数展开和近似计算。

**开始前：**你应当掌握正整数幂的二项式展开（binomial expansion）、阶乘（factorial）、等比级数（geometric series）和[部分分式（partial fractions）](/zh/alevel/a2-mathematics/partial-fractions/)。

下方例题和练习均为自拟题，并非官方真题。建议练习用时仅供参考，题目没有官方分值。

## 二项式级数 {#the-binomial-series}

当 $\lvert u\rvert<1$ 时，

$$\begin{aligned}
(1+u)^n={}&1+nu+\frac{n(n-1)}{2!}u^2\\
&+\frac{n(n-1)(n-2)}{3!}u^3+\cdots.
\end{aligned}$$

这里 $2!=2$，$3!=6$。每往后一项，分子就多一个因子，阶乘也多乘一个整数。

当 $n$ 为正整数时，展开会在某一项终止，并且对所有实数 $u$ 都成立。当 $n=0$ 时，只要原式有定义，结果就是 $1$。当幂次为负整数或非整数时，要使用无穷级数，并注明 $\lvert u\rvert<1$。本课程所写的适用范围不包含端点；端点处的情况取决于 $n$。

**方法：**

1. 把表达式写成常数乘以 $(1+u)^n$。
2. 找出 $n$ 和 $u$。代入整个 $u$，包括它的符号。
3. 计算每一项的系数，并按 $x$ 的升幂排列。
4. 乘上外部常数。根据 $\lvert u\rvert<1$ 写出适用范围。

“展开到并包括 $x^3$ 项”表示保留常数项、$x$ 项、$x^2$ 项和 $x^3$ 项。有限项的结果是一个**近似值（approximation）**；如果要表示完整级数的等式，必须用 $+\cdots$ 表示剩余各项。

### 例题 1 — 分数次幂 {#example-1--a-fractional-power}

**Question:** Expand $(1+4x)^{\frac12}$ up to and including the term in $x^3$. State the range of validity.

取 $n=\frac12$，$u=4x$：

$$\begin{aligned}
(1+4x)^{\frac12}={}&1+\frac12(4x)\\
&+\frac{\frac12(-\frac12)}{2}(4x)^2\\
&+\frac{\frac12(-\frac12)(-\frac32)}{6}(4x)^3+\cdots\\
={}&\boxed{1+2x-2x^2+4x^3+\cdots}.
\end{aligned}$$

适用范围由 $\lvert4x\rvert<1$ 给出，因此 $\boxed{-\frac14<x<\frac14}$。

**检查：**当 $x=0$ 时，原式和级数都等于 $1$。$x^2$ 项的系数为负，而 $x^3$ 项的系数为正；注意数清负因子的个数。

### 例题 2 — 先提出常数因子 {#example-2--take-out-the-constant-first}

**Question:** Expand $(9-3x)^{-\frac12}$ up to and including the term in $x^3$. State the range of validity.

先写成

$$(9-3x)^{-\frac12}=\frac13\left(1-\frac{x}{3}\right)^{-\frac12}.$$

取 $n=-\frac12$，$u=-\frac{x}{3}$，得到

$$\left(1-\frac{x}{3}\right)^{-\frac12}=1+\frac{x}{6}+\frac{x^2}{24}+\frac{5x^3}{432}+\cdots.$$

每一项都乘以 $\frac13$：

$$(9-3x)^{-\frac12}=\boxed{\frac13+\frac{x}{18}+\frac{x^2}{72}+\frac{5x^3}{1296}+\cdots}.$$

由于 $\left\lvert\frac{x}{3}\right\rvert<1$，适用范围为 $\boxed{-3<x<3}$。

**常见错误：**提出 $9$，而不是 $9^{-\frac12}$。把 $x=0$ 代入原式，检查常数项是否正确。

### 例题 3 — 负整数次幂 {#example-3--a-negative-integer-power}

**Question:** Expand $\frac{1}{(1-2x)^2}$ up to and including the term in $x^3$.

先写成 $(1-2x)^{-2}$。取 $n=-2$，$u=-2x$，

$$\begin{aligned}
(1-2x)^{-2}={}&1+(-2)(-2x)\\
&+\frac{(-2)(-3)}{2}(-2x)^2\\
&+\frac{(-2)(-3)(-4)}{6}(-2x)^3+\cdots\\
={}&\boxed{1+4x+12x^2+32x^3+\cdots}.
\end{aligned}$$

适用范围为 $\boxed{-\frac12<x<\frac12}$。

**检查：**系数不会在某一项后停止。负整数次幂不会展开成有限多项式。

## 部分分式与乘积 {#partial-fractions-and-products}

常用的等比级数有

$$\frac1{1-u}=1+u+u^2+u^3+\cdots,$$

$$\frac1{1+u}=1-u+u^2-u^3+\cdots,$$

两者都要求 $\lvert u\rvert<1$。

展开有理函数时，先做部分分式分解，再分别展开。最终的适用范围必须同时满足**所有**级数的范围要求。

两个级数相乘时，要逐项相乘，再合并同次幂。求 $x^3$ 的系数时，把所有幂次之和为 $3$ 的乘积都算进去。缺少 $x$ 项，不代表没有 $x^2$ 项。

### 例题 4 — 展开有理函数 {#example-4--expand-a-rational-function}

**Question:** Use partial fractions to expand $\frac{3}{(1-x)(1+2x)}$ up to and including the term in $x^3$.

写成

$$\frac{3}{(1-x)(1+2x)}=\frac{A}{1-x}+\frac{B}{1+2x}.$$

于是 $3=A(1+2x)+B(1-x)$。代入 $x=1$ 得到 $A=1$；代入 $x=-\frac12$ 得到 $B=2$。这两个代入用于求多项式恒等式中的常数；原分式在这两个数值处无定义。

$$\begin{aligned}
\frac{3}{(1-x)(1+2x)}
&=(1+x+x^2+x^3+\cdots)\\
&\quad+2(1-2x+4x^2-8x^3+\cdots)\\
&=\boxed{3-3x+9x^2-15x^3+\cdots}.
\end{aligned}$$

第一个级数要求 $\lvert x\rvert<1$；第二个要求 $\lvert2x\rvert<1$。两者同时成立时，适用范围为 $\boxed{-\frac12<x<\frac12}$。

**检查：**将 $3-3x+9x^2-15x^3$ 乘以 $(1-x)(1+2x)=1+x-2x^2$。常数项为 $3$，$x$、$x^2$ 和 $x^3$ 的系数都为零。由于展开只保留到 $x^3$，更高次幂的项仍然存在。

### 例题 5 — 相乘并合并同次幂 {#example-5--multiply-and-collect-powers}

**Question:** Expand $(1+x)\sqrt{1-2x}$ up to and including the term in $x^3$.

先展开，

$$\sqrt{1-2x}=1-x-\frac12x^2-\frac12x^3+\cdots.$$

再乘以 $1+x$：

$$\begin{aligned}
(1+x)\sqrt{1-2x}
&=1+(-1+1)x+\left(-\frac12-1\right)x^2\\
&\quad+\left(-\frac12-\frac12\right)x^3+\cdots\\
&=\boxed{1-\frac32x^2-x^3+\cdots}.
\end{aligned}$$

适用范围仍为 $\boxed{-\frac12<x<\frac12}$。有限因子 $1+x$ 不会增加新的限制。

**检查：**$x$ 项相互抵消。计算 $x^3$ 项时，要同时计入 $1\times(-\frac12x^3)$ 和 $x\times(-\frac12x^2)$。

## 近似计算 {#approximations}

**线性近似（linear approximation）**保留常数项和 $x$ 项；**二次近似（quadratic approximation）**还保留 $x^2$ 项。忽略更高次幂时，要使用 $\approx$。

选择一个接近零的 $u$。级数条件 $\lvert u\rvert<1$ 允许使用无穷展开，但**不保证**只取少数几项就能达到所需精度。

例如，例题 1 中 $x=0.24$ 落在适用范围内，但三次近似的结果是 $1.420096$，而 $\sqrt{1.96}=1.4$。不能只凭“在适用范围内”就断定结果精确到小数点后好几位。

### 例题 6 — 估算平方根 {#example-6--approximate-a-square-root}

**Question:** Use a binomial expansion to estimate $\sqrt{4.08}$ to five decimal places. Check the estimate with a calculator.

写成 $\sqrt{4.08}=2\sqrt{1+0.02}$，因此 $u=0.02$。使用

$$(1+u)^{\frac12}\approx1+\frac{u}{2}-\frac{u^2}{8}+\frac{u^3}{16},$$

得到

$$\sqrt{4.08}\approx2(1+0.01-0.00005+0.0000005)=2.019901.$$

保留五位小数，估算值为 $\boxed{2.01990}$。

**检查：**计算器结果为 $2.019900987\ldots$，四舍五入后相同。估算中第一个被舍去的项为 $2\left(-\frac5{128}\right)(0.02)^4=-0.0000000125$，这可以解释此处的小误差。一般来说，第一个舍去项本身并不能给出整个剩余级数的误差上界。

**常见错误：**直接展开 $(1+3.08)^{\frac12}$。这样会用到 $u=3.08$，不满足 $\lvert u\rvert<1$。

## 练习 {#practice}

建议用时约 **25–35 分钟**。每次展开都要写出适用范围。先尝试题目，再打开解答。

### 题目 1 — 倒数 {#question-1--reciprocal}

Expand $\frac1{1-3x}$ up to and including the term in $x^3$.

<details markdown="1">
<summary>提示</summary>

取 $n=-1$，$u=-3x$；也可以使用 $\frac1{1-u}$ 的等比级数。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$\boxed{\frac1{1-3x}=1+3x+9x^2+27x^3+\cdots},\qquad \boxed{-\frac13<x<\frac13}.$$

把显示的多项式乘以 $1-3x$，得到 $1-81x^4$。直到 $x^3$ 的多余项都会相互抵消。

</details>

### 题目 2 — 外部因子 {#question-2--outside-factor}

Expand $\sqrt{4+x}$ up to and including the term in $x^3$.

<details markdown="1">
<summary>提示</summary>

写成 $\sqrt{4+x}=2\left(1+\frac{x}{4}\right)^{\frac12}$。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$\boxed{\sqrt{4+x}=2+\frac{x}{4}-\frac{x^2}{64}+\frac{x^3}{512}+\cdots}.$$

适用范围为 $\boxed{-4<x<4}$。代入 $x=0$ 时，常数项应当是 $2$。将多项式平方后，得到 $4+x$，且 $x^2$ 和 $x^3$ 项的系数为零；更高次项仍然存在。

</details>

### 题目 3 — 符号 {#question-3--signs}

Expand $(1+x)^{-2}$ up to and including the term in $x^3$. Explain why $1-2x+x^2$ is not the correct expansion.

<details markdown="1">
<summary>提示</summary>

取 $n=-2$。不要把这个式子当成 $(1-x)^2$。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$\boxed{(1+x)^{-2}=1-2x+3x^2-4x^3+\cdots},\qquad \boxed{-1<x<1}.$$

$x^2$ 项的系数为 $\frac{(-2)(-3)}2=3$，不是 $1$。该级数不会终止。乘以 $(1+x)^2$ 后，直到 $x^3$ 的各项都会抵消。

</details>

### 题目 4 — 两个适用范围 {#question-4--two-ranges}

Express $\frac4{(1-2x)(1+x)}$ in partial fractions. Hence expand up to and including the term in $x^3$.

<details markdown="1">
<summary>提示</summary>

解方程 $4=A(1+x)+B(1-2x)$。使用两个适用范围的重合部分。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$\frac4{(1-2x)(1+x)}=\frac{\frac83}{1-2x}+\frac{\frac43}{1+x}.$$

因此

$$\boxed{\frac4{(1-2x)(1+x)}=4+4x+12x^2+20x^3+\cdots}.$$

两个条件分别是 $\lvert2x\rvert<1$ 和 $\lvert x\rvert<1$，所以适用范围为 $\boxed{-\frac12<x<\frac12}$。乘以 $1-x-2x^2$，检查到 $x^3$ 的各项系数都抵消，且常数项为 $4$。

</details>

### 题目 5 — 乘积 {#question-5--a-product}

Expand $(1+2x)(1-x)^{-\frac12}$ up to and including the term in $x^3$.

<details markdown="1">
<summary>提示</summary>

先展开 $(1-x)^{-\frac12}$，再把对各次幂有贡献的乘积都算进去。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$(1-x)^{-\frac12}=1+\frac12x+\frac38x^2+\frac5{16}x^3+\cdots.$$

所以

$$\boxed{(1+2x)(1-x)^{-\frac12}=1+\frac52x+\frac{11}{8}x^2+\frac{17}{16}x^3+\cdots}.$$

适用范围为 $\boxed{-1<x<1}$。三次项的系数为 $\frac5{16}+2\left(\frac38\right)=\frac{17}{16}$。

</details>

### 题目 6 — 选择合适的展开形式 {#question-6--choose-a-useful-form}

Use a binomial expansion to estimate $\sqrt{8.91}$ to five decimal places. Check with a calculator. Explain why using $(1+7.91)^{\frac12}$ is unsuitable.

<details markdown="1">
<summary>提示</summary>

写成 $\sqrt{8.91}=3\sqrt{1-0.01}$。先保留到 $u^3$ 项，再四舍五入。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$\begin{aligned}
\sqrt{8.91}&=3\sqrt{1-0.01}\\
&\approx3(1-0.005-0.0000125-0.0000000625)\\
&=2.9849623125.
\end{aligned}$$

所以保留五位小数的估算值为 $\boxed{2.98496}$。计算器结果为 $2.984962311\ldots$，确认了舍入后的数值。这里 $u=-0.01$ 满足 $\lvert u\rvert<1$，而 $u=7.91$ 不满足。

</details>

## 快速参考 {#quick-reference}

| 任务 | 方法 | 检查 |
|---|---|---|
| 展开 $(1+u)^n$ | 使用二项式级数 | 代入整个 $u$，包括它的符号 |
| 展开 $(a+bx)^n$，其中 $a>0$ | 写成 $a^n\left(1+\frac{b}{a}x\right)^n$ | 每一项都乘以 $a^n$ |
| 写出适用范围 | 在这里，无穷级数使用 $\lvert u\rvert<1$ | 合并多个级数时，同时应用所有范围 |
| 展开有理函数 | 先做部分分式分解 | 合并后核对各项系数 |
| 展开乘积 | 合并同次幂的项 | 计算所求次幂时，不要漏掉任何乘积 |
| 求近似值 | 选择较小的 $\lvert u\rvert$，并忽略更高次幂 | 使用 $\approx$，检查是否达到所需精度 |

**如果答案看起来不对：**检查外部因子、符号、阶乘、漏掉的乘积和适用范围。函数本身可能在某处有定义，但这里的展开不一定在该处有效。

**你应当能够：**展开负整数次幂和分数次幂、组合多个级数、写出适用范围，并选择有效的近似形式。

**学习路径：**[上一节：部分分式](/zh/alevel/a2-mathematics/partial-fractions/) · [下一节：三角函数与公式](/zh/alevel/a2-mathematics/trigonometric-functions-and-formulae/) · [返回纯数学主题目录](/zh/alevel/a2-mathematics/)。
