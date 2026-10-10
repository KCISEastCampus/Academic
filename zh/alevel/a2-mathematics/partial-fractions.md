---
title: 部分分式
layout: subjects
mathjax: true
grade: a2
subject: a2-mathematics
lang: zh-CN
translation_of: /alevel/a2-mathematics/partial-fractions/
permalink: /zh/alevel/a2-mathematics/partial-fractions/
toc_headings: h2
study_page: true
---

[纯数学](/zh/alevel/a2-mathematics/) · P2.1 代数与 P2.7 积分

学习如何把代数分式（algebraic fraction）分解为部分分式（partial fractions），逐项积分并检查答案。本页题干保留英文，方法、提示与解答使用中文。

- **学习：**先学习[方法](#method)，再完成例题。
- **作业帮助：**复习[例题](#worked-examples)或[积分](#integration)。
- **复习：**先尝试[练习](#practice)，之后再查看[快速参考](#quick-reference)。

教材：第 1.7–1.8 节（第 14–19 页）和第 6.4 节（第 91–95 页）。不定积分（indefinite integral）的积分常数（constant of integration）记作 $C$。

**开始前：**你应当会因式分解（factorisation）、多项式除法（algebraic division）、比较系数（comparing coefficients）以及基本函数的积分。如有需要，请复习[代数分式与多项式除法](/zh/alevel/a2-mathematics/algebraic-fractions-and-division/)。

## 方法 {#method}

**学习目标：**判断代数分式是否需要先做除法，写出部分分式形式，求出常数并检查符号。

先试一试：写出每个分解的形式，不要求出常数。

$$\frac{5x+1}{(x-1)(x+2)},\qquad \frac{x^2+1}{(x-1)(x+2)}.$$

如果你对两个式子都用了相同的形式，请检查分子与分母的次数（degree）。

**选择第一步**

| 结构 | 第一步 | 理由 |
|---|---|---|
| 分子次数 ≥ 分母次数 | 先做多项式除法 | 再把真分式（proper fraction）分解为部分分式。保留商。 |
| 不同的一次因式（distinct linear factors） | 每个因式对应一个常数分子 | 例如，$\displaystyle \frac{A}{x-1}+\frac{B}{x+2}$ |
| 重复因式（repeated factor） $(x-a)^2$ | 同时包含 $\displaystyle \frac{A}{x-a}+\frac{B}{(x-a)^2}$ | 一直写到最高次幂对应的每一项 |

第一个式子是真分式。分解第二个式子之前，先把它改写为 $1+\frac{-x+3}{(x-1)(x+2)}$。

**先约去公因式。**保留原定义域（domain）的限制：使原分母为零的值仍然要排除。

**找错误：为什么要检查常数？**

下面的分解中符号正确吗？

$$\frac{-5}{(4x-1)(3x-2)}\overset{?}{=}-\frac{4}{4x-1}+\frac{3}{3x-2}.$$

<details markdown="1">
<summary>显示检查过程</summary>

把右边通分后，分子为 $-4(3x-2)+3(4x-1)=5$，与原分子 $-5$ 符号相反。

正确的分解是

$$\frac{-5}{(4x-1)(3x-2)}=\frac{4}{4x-1}-\frac{3}{3x-2}.$$

快速检查时，可以代入 $x=0$：原式的值是 $-\frac{5}{2}$，错误分解的值却是 $\frac{5}{2}$。代入一个数可能就能发现错误。要完整检查恒等式，请将分式相加并化简。

</details>

## 例题 {#worked-examples}

### 例题 1 — 不同的一次因式 {#worked-example-1--different-linear-factors}

Express $\displaystyle\frac{5x+1}{(x-1)(x+2)}$ in partial fractions.

**1. 选择形式。**分子次数较低，并且两个因式不同，因此

$$\frac{5x+1}{(x-1)(x+2)}=\frac{A}{x-1}+\frac{B}{x+2},\qquad x\ne1,-2.$$

**2. 乘以分母。**得到的多项式恒等式（polynomial identity）对所有 $x$ 都成立：

$$5x+1\equiv A(x+2)+B(x-1).$$

**3. 选择一个能使其中一项为零的值。**令 $x=1$，得到 $6=3A$，所以 $A=2$。令 $x=-2$，得到 $-9=-3B$，所以 $B=3$。

将这些值代入多项式恒等式。原分式在 $x=1$ 和 $x=-2$ 时无定义。

$$\boxed{\frac{5x+1}{(x-1)(x+2)}=\frac{2}{x-1}+\frac{3}{x+2}}$$

**4. 将分式相加进行检查。**$2(x+2)+3(x-1)=5x+1$，得到原分子。

**重复的一次因式**

对于 $(x-a)^2$，只写 $\frac{B}{(x-a)^2}$ 并不完整：还要包含分母为 $x-a$ 的项。计算后某个系数可能为零，但在算出之前不要省略对应的项。

### 例题 2 — 重复因式 {#worked-example-2--a-repeated-factor}

Express $\displaystyle\frac{2x^2+2x-18}{x(x-3)^2}$ in partial fractions.

$$\frac{2x^2+2x-18}{x(x-3)^2}=\frac{A}{x}+\frac{B}{x-3}+\frac{C}{(x-3)^2},\qquad x\ne0,3.$$

乘以分母：

$$2x^2+2x-18\equiv A(x-3)^2+Bx(x-3)+Cx.$$

- 令 $x=0$：$-18=9A$，所以 $A=-2$。
- 令 $x=3$：$6=3C$，所以 $C=2$。
- 这两个代入值只能确定两个常数。比较 $x^2$ 的系数：$2=A+B$，所以 $B=4$。

$$\boxed{\frac{2x^2+2x-18}{x(x-3)^2}=-\frac{2}{x}+\frac{4}{x-3}+\frac{2}{(x-3)^2}}$$

**检查：**重新通分后得到原分子：

$$\begin{aligned}&-2(x-3)^2+4x(x-3)+2x\\&\qquad=2x^2+2x-18.\end{aligned}$$

接下来，把这些分解用于[积分](#integration)，然后尝试[练习](#practice)。

## 积分 {#integration}

不确定某个积分适合用哪种方法？请先看[积分：方法选择](/zh/alevel/a2-mathematics/integration/#choose-a-method)。

**先选择方法：**如果被积函数（integrand）是分母含一次因式的代数分式，可以尝试部分分式。先检查分子是否为分母导数的常数倍。如果是，就使用标准形式 $\int \frac{f'(x)}{f(x)}\,dx$。例如，$\int\frac{2x+2}{x^2+2x-15}\,dx=\ln\lvert x^2+2x-15\rvert+C$。

**分别积分各项**

| 项 | 积分 | 检查要点 |
|---|---|---|
| $\displaystyle \frac{A}{ax+b}$ | $\displaystyle \frac{A}{a}\ln\lvert ax+b\rvert$ | 除以 $a$，因为它是 $ax+b$ 的导数。使用绝对值符号（modulus signs）。 |
| $\displaystyle \frac{B}{(ax+b)^2}$ | $\displaystyle -\frac{B}{a(ax+b)}$ | 使用幂函数积分法（power rule），不要用对数 |
| 多项式商 | 逐项积分 | 包含除法得到的商 |

这里 $a\ne0$。不定积分要加上 $C$。每个结果都应用于分母不为零的区间。

### 例题 3 — 除法、部分分式与积分 {#worked-example-3--division-decomposition-integration}

Find $\displaystyle\int\frac{x^2}{(x+5)(x-3)}\,dx$.

**1. 为什么先做除法？**分子和分母都是二次多项式，因此先做多项式除法并保留商 $1$：

$$\frac{x^2}{(x+5)(x-3)}=1+\frac{-2x+15}{(x+5)(x-3)}.$$

**2. 把真分式分解为部分分式。**写成 $-2x+15\equiv A(x-3)+B(x+5)$。

- 令 $x=-5$：$25=-8A$，所以 $A=-\frac{25}{8}$。
- 令 $x=3$：$9=8B$，所以 $B=\frac{9}{8}$。

$$\frac{x^2}{(x+5)(x-3)}=1-\frac{25}{8(x+5)}+\frac{9}{8(x-3)}.$$

**3. 逐项积分。**

$$\boxed{\int\frac{x^2}{(x+5)(x-3)}\,dx=x-\frac{25}{8}\ln\lvert x+5\rvert+\frac{9}{8}\ln\lvert x-3\rvert+C}$$

**4. 求导检查。**求导后得到 $1-\frac{25}{8(x+5)}+\frac{9}{8(x-3)}$。重新通分后，分子为

$$(x+5)(x-3)-\frac{25}{8}(x-3)+\frac{9}{8}(x+5)=x^2.$$

### 重复因式——回看例题 2 {#repeated-factors--return-to-example-2}

分别积分前面得到的三项：

$$\int\frac{2x^2+2x-18}{x(x-3)^2}\,dx=-2\ln\lvert x\rvert+4\ln\lvert x-3\rvert-\frac{2}{x-3}+C.$$

最后一项来自 $\int2(x-3)^{-2}\,dx=-2(x-3)^{-1}$。只有一次因式的幂为 $-1$ 时才使用对数。

## 练习 {#practice}

**独立练习 · 15–20 分钟**

先在纸上完成。只有遇到困难时才打开提示，然后显示解答并检查你的过程。

以下题目为自拟练习题，并非官方真题。时间仅供练习参考。这些题目没有官方分值。

### Q1 — 基本分解 {#q1--basic-decomposition}

Express $\displaystyle\frac{7x+1}{(x-1)(x+2)}$ in partial fractions. Check your answer by adding the fractions.

<details markdown="1">
<summary>提示：怎样求常数？</summary>

写成 $\frac{A}{x-1}+\frac{B}{x+2}$，乘以分母，再代入 $x=1$ 和 $x=-2$。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$7x+1\equiv A(x+2)+B(x-1)$。因此 $8=3A$ 且 $-13=-3B$。

$$\boxed{\frac{7x+1}{(x-1)(x+2)}=\frac{8}{3(x-1)}+\frac{13}{3(x+2)}}$$

重新通分后，分子为 $\frac{8(x+2)+13(x-1)}{3}=7x+1$。原式要求 $x\ne1,-2$。

</details>

### Q2 — 重复因式 {#q2--a-repeated-factor}

Express $\displaystyle\frac{3x+5}{(x+1)^2}$ in partial fractions. Hence find $\displaystyle\int\frac{3x+5}{(x+1)^2}\,dx$.

<details markdown="1">
<summary>提示：必须包含哪一项？</summary>

同时包含 $\frac{A}{x+1}$ 和 $\frac{B}{(x+1)^2}$。乘以分母，再比较 $x$ 的系数和常数项。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$3x+5\equiv A(x+1)+B$，所以 $A=3$ 且 $B=2$。

$$\frac{3x+5}{(x+1)^2}=\frac{3}{x+1}+\frac{2}{(x+1)^2}.$$

$$\boxed{3\ln\lvert x+1\rvert-\frac{2}{x+1}+C}$$

求导后得到 $\frac{3}{x+1}+\frac{2}{(x+1)^2}$；通分后得到原式。注意 $x\ne-1$。

</details>

### Q3 — 选择方法 {#q3--choose-the-method}

Find $\displaystyle\int\frac{2x^2+3x+4}{(x+1)(x+2)}\,dx$. Check your result by differentiation.

<details markdown="1">
<summary>提示：先比较次数</summary>

先做除法，得到 $2+\frac{-3x}{(x+1)(x+2)}$，再分解余下的真分式。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$-3x\equiv A(x+2)+B(x+1)$，所以 $A=3$ 且 $B=-6$。

$$\boxed{2x+3\ln\lvert x+1\rvert-6\ln\lvert x+2\rvert+C}$$

求导后得到 $2+\frac{3}{x+1}-\frac{6}{x+2}$。重新通分后，分子为

$$\begin{aligned}&2(x+1)(x+2)+3(x+2)-6(x+1)\\&\qquad=2x^2+3x+4.\end{aligned}$$

原式要求 $x\ne-1,-2$。

</details>

### Q4 — 定积分（definite integral） {#q4--definite-integral}

Evaluate $\displaystyle\int_0^1\frac{5}{(2x+1)(x+2)}\,dx$, giving your answer in an exact logarithmic form.

<details markdown="1">
<summary>提示：线性项的系数怎样影响积分？</summary>

去分母后，代入 $x=-\frac{1}{2}$ 和 $x=-2$ 求出常数。积分时要除以 $2$，对应的项为 $\frac{A}{2x+1}$。两个因式在 $x=0$ 到 $x=1$ 的区间内都为正，因此分母不会为零。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$5\equiv A(x+2)+B(2x+1)$，得到 $A=\frac{10}{3}$ 和 $B=-\frac{5}{3}$。

$$\int_0^1\frac{5}{(2x+1)(x+2)}\,dx=\left[\frac{5}{3}\ln(2x+1)-\frac{5}{3}\ln(x+2)\right]_0^1=\boxed{\frac{5}{3}\ln2}.$$

方括号中的表达式在上限处为 $0$，在下限处为 $-\frac{5}{3}\ln2$。用上限值减去下限值，结果为正，符合被积函数在整个区间内为正的预期。对 $\frac{5}{3}\ln(2x+1)$ 求导得到 $\frac{10}{3(2x+1)}$，其中包含链式法则带来的系数 $2$。

</details>

## 快速参考 {#quick-reference}

- **求部分分式之前：**约去公因式，并保留原定义域的限制。如果分子次数大于或等于分母次数，先做多项式除法。
- **重复因式：**包含每一个幂次，例如 $\frac{A}{x-a}+\frac{B}{(x-a)^2}$。
- **积分：**$\int \frac{A}{ax+b}\,dx=\frac{A}{a}\ln\lvert ax+b\rvert+C$；$\int \frac{B}{(ax+b)^2}\,dx=-\frac{B}{a(ax+b)}+C$，其中 $a\ne0$。
- **检查：**将部分分式相加；对积分结果求导；检查分母在积分上下限之间不会为零。

**练习后：选择下一步**

| 遇到的困难 | 复习 | 下次尝试时的提醒 |
|---|---|---|
| 不确定如何开始 | [选择方法](#method) | 先比较次数，再检查因式 |
| 漏掉重复因式对应的项 | [例题 2](#worked-example-2--a-repeated-factor) | 写出直到最高次幂的每一项 |
| 常数的符号错误 | [符号错误例题](#method) | 重新通分，检查是否得到原分子 |
| 对数项的系数错误 | [积分法则](#integration) | 求导检查链式法则带来的系数 |
| 答案正确但过程不完整 | 例题 3 和 Q4 | 写出恒等式、积分过程和代入上下限 |

记下题号和你觉得困难的步骤。两天后，不看解答再做一次。一周后，用不同的系数再做一道类似的题。

**你应当能够：**写出部分分式、求出常数、进行积分，并通过通分和求导检查答案。

本主题对应 [OxfordAQA Mathematics 9660 课程说明](https://www.oxfordaqa.com/wp-content/uploads/2023/10/oxfordaqa-a-level-mathematics-specification.pdf)中的 P2.1 和 P2.7。例题用于教学；Q1–Q4 是自拟练习题。官方真题练习请使用 MA03 试卷及对应的评分标准。

**学习路径：**[上一节：代数分式与多项式除法](/zh/alevel/a2-mathematics/algebraic-fractions-and-division/) · [下一节：二项式级数](/zh/alevel/a2-mathematics/binomial-series/)。
