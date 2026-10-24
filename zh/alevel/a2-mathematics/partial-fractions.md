---
title: 部分分式
layout: subjects
mathjax: true
grade: a2
subject: a2-mathematics
lang: zh-CN
translation_of: /alevel/a2-mathematics/partial-fractions/
permalink: /zh/alevel/a2-mathematics/partial-fractions/
toc_headings: h2, h3
reading_layout: true
study_page: true
---

[纯数学](/zh/alevel/a2-mathematics/) · P2.1 代数与 P2.7 积分
{: .lesson-meta}

学习如何把代数分式（algebraic fraction）分解为部分分式（partial fractions），逐项积分并检查答案。本页题干保留英文，方法、提示与解答使用中文。

- **学习：**先学习[方法](#method)，再完成例题。
- **作业帮助：**复习[例题](#worked-examples)或[积分](#integration)。
- **复习：**先尝试[练习](#practice)，之后再查看[快速参考](#quick-reference)。
{: .lesson-routes}

教材：第 1.7–1.8 节（第 14–19 页）和第 6.4 节（第 91–95 页）。不定积分（indefinite integral）的积分常数（constant of integration）记作 $C$。

<div class="lesson-notes" markdown="1">

**开始前：**先会[多项式除法](/zh/alevel/a2-mathematics/algebraic-fractions-and-division/#algebraic-division)与比较系数。分解部分只需代数；到积分部分前，再回补[基本积分](/zh/alevel/a2-mathematics/integration/#standard-integrals)与[对数积分](/zh/alevel/a2-mathematics/integration/#logarithmic-form)。本页先学习“怎样拆且仍相等”，再问“怎样逐项积分且条件成立”。复习从[练习](#practice)开始，用[恢复与新尝试](#repair-and-retry)修复错误，并在后续课完成[回顾任务](#later-review)。

</div>

## 方法 {#method}

**学习目标：**判断代数分式是否需要先做除法，写出部分分式形式，求出常数并检查符号。

部分分式把通分相加倒过来：寻找较简单的分式，使它们相加后分子恰好等于原分子。这是恒等式，不是只在某一个输入处相等。

先用已学的次数判断起点；下面才学习怎样选择分解形式。

<section class="lesson-check" markdown="1">

### 先修检查 {#check-degrees}

<!-- task:check-degrees -->
Which expression needs algebraic division before it can be written as a sum of proper fractions? Explain using degrees.

$$\frac{5x+1}{(x-1)(x+2)},\qquad \frac{x^2+1}{(x-1)(x+2)}.$$
<!-- /task:check-degrees -->

<details markdown="1">
<summary>提示</summary>

比较每个分子与分母的次数；次数相等算哪一种？

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$\frac{x^2+1}{(x-1)(x+2)}=1+\frac{-x+3}{(x-1)(x+2)}.$$

第一个是真分式；第二个的次数相等，先除法并保留商 $1$。如果忘了这个判断，回看上一页的除法恒等式。

</details>

</section>

**选择第一步**

| 结构 | 第一步 | 理由 |
|---|---|---|
| 分子次数 ≥ 分母次数 | 先做多项式除法 | 再把真分式（proper fraction）分解为部分分式。保留商。 |
| 不同的一次因式（distinct linear factors） | 每个因式对应一个常数分子 | 例如，$\displaystyle \frac{A}{x-1}+\frac{B}{x+2}$ |
| 重复因式（repeated factor） $(x-a)^2$ | 同时包含 $\displaystyle \frac{A}{x-a}+\frac{B}{(x-a)^2}$ | 一直写到最高次幂对应的每一项 |
{: .wide-table}

本单元分母的范围到重复一次因式；不要求不可约二次因式的分解形式。

**先约去公因式。**保留原定义域（domain）的限制：使原分母为零的值仍然要排除。

<section class="lesson-check" markdown="1">

### 检查一个分解 {#check-signs}

Are the signs in this decomposition correct?

$$\frac{-5}{(4x-1)(3x-2)}\overset{?}{=}-\frac{4}{4x-1}+\frac{3}{3x-2}.$$

<details markdown="1">
<summary>提示</summary>

把右边通分；先保留各分子的正负号。

</details>

<details markdown="1">
<summary>显示检查过程</summary>

把右边通分后，分子为 $-4(3x-2)+3(4x-1)=5$，与原分子 $-5$ 符号相反。

正确的分解是

$$\frac{-5}{(4x-1)(3x-2)}=\frac{4}{4x-1}-\frac{3}{3x-2}.$$

快速检查时，可以代入 $x=0$：原式的值是 $-\frac{5}{2}$，错误分解的值却是 $\frac{5}{2}$。代入一个数可能就能发现错误。要完整检查恒等式，请将分式相加并化简。

</details>

</section>

## 例题 {#worked-examples}

<section class="worked-example" markdown="1">

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

</section>

**重复的一次因式**

对于 $(x-a)^2$，只写 $\frac{B}{(x-a)^2}$ 并不完整：还要包含分母为 $x-a$ 的项。计算后某个系数可能为零，但在算出之前不要省略对应的项。

为什么需要两项？只写平方分母上的常数，清分母后只能重建一个常数分子；同时加入一次分母上的项，清分母后才能得到一般的一次分子。



<section class="worked-example" markdown="1">

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

</section>

## 积分 {#integration}

不确定某个积分适合用哪种方法？请先看[积分：方法选择](/zh/alevel/a2-mathematics/integration/#choose-a-method)。

**先选择方法：**如果被积函数（integrand）是分母含一次因式的代数分式，可以尝试部分分式。先检查分子是否为分母导数的常数倍。如果是，就使用标准形式 $\int \frac{f'(x)}{f(x)}\,dx$。例如，$\int\frac{2x+2}{x^2+2x-15}\,dx=\ln\lvert x^2+2x-15\rvert+C$。

线性式的系数为什么要除掉？链式法则给出

$$\frac{d}{dx}\ln\lvert ax+b\rvert=\frac{a}{ax+b},\qquad \frac{d}{dx}(ax+b)^{-1}=-a(ax+b)^{-2}.$$

因此积分时分别乘以 $1/a$ 和 $-1/a$。第二个是幂 $-2$ 的积分，不是对数。

**分别积分各项**

| 项 | 积分 | 检查要点 |
|---|---|---|
| $\displaystyle \frac{A}{ax+b}$ | $\displaystyle \frac{A}{a}\ln\lvert ax+b\rvert$ | 除以 $a$，因为它是 $ax+b$ 的导数。使用绝对值符号（modulus signs）。 |
| $\displaystyle \frac{B}{(ax+b)^2}$ | $\displaystyle -\frac{B}{a(ax+b)}$ | 使用幂函数积分法（power rule），不要用对数 |
| 多项式商 | 逐项积分 | 包含除法得到的商 |
{: .wide-table}

这里 $a\ne0$。不定积分要加上 $C$。每个结果都应用于分母不为零的区间。

<section class="worked-example" markdown="1">

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

</section>

### 重复因式——回看例题 2 {#repeated-factors--return-to-example-2}

分别积分前面得到的三项：

$$\int\frac{2x^2+2x-18}{x(x-3)^2}\,dx=-2\ln\lvert x\rvert+4\ln\lvert x-3\rvert-\frac{2}{x-3}+C.$$

最后一项来自 $\int2(x-3)^{-2}\,dx=-2(x-3)^{-1}$。只有一次因式的幂为 $-1$ 时才使用对数。

## 练习 {#practice}

**独立练习 · 15–20 分钟**

先在纸上完成。只有遇到困难时才打开提示，然后显示解答并检查你的过程。

以下题目为自拟练习题，并非官方真题。时间仅供练习参考。这些题目没有官方分值。

<section class="lesson-check" markdown="1">

### 题目 1 {#q1--basic-decomposition}

Express $\displaystyle\frac{7x+1}{(x-1)(x+2)}$ in partial fractions. Check your answer by adding the fractions.

<details markdown="1">
<summary>提示</summary>

写成 $\frac{A}{x-1}+\frac{B}{x+2}$，乘以分母，再代入 $x=1$ 和 $x=-2$。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$7x+1\equiv A(x+2)+B(x-1)$。因此 $8=3A$ 且 $-13=-3B$。

$$\boxed{\frac{7x+1}{(x-1)(x+2)}=\frac{8}{3(x-1)}+\frac{13}{3(x+2)}}$$

重新通分后，分子为 $\frac{8(x+2)+13(x-1)}{3}=7x+1$。原式要求 $x\ne1,-2$。

</details>

</section>

<section class="lesson-check" markdown="1">

### 题目 2 {#q2--a-repeated-factor}

Express $\displaystyle\frac{3x+5}{(x+1)^2}$ in partial fractions. Hence find $\displaystyle\int\frac{3x+5}{(x+1)^2}\,dx$.

<details markdown="1">
<summary>提示</summary>

同时包含 $\frac{A}{x+1}$ 和 $\frac{B}{(x+1)^2}$。乘以分母，再比较 $x$ 的系数和常数项。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$3x+5\equiv A(x+1)+B$，所以 $A=3$ 且 $B=2$。

$$\frac{3x+5}{(x+1)^2}=\frac{3}{x+1}+\frac{2}{(x+1)^2}.$$

$$\boxed{3\ln\lvert x+1\rvert-\frac{2}{x+1}+C}$$

求导后得到 $\frac{3}{x+1}+\frac{2}{(x+1)^2}$；通分后得到原式。注意 $x\ne-1$。

</details>

</section>

<section class="lesson-check" markdown="1">

### 题目 3 {#q3--choose-the-method}

Find $\displaystyle\int\frac{2x^2+3x+4}{(x+1)(x+2)}\,dx$. Check your result by differentiation.

<details markdown="1">
<summary>提示</summary>

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

</section>

<section class="lesson-check" markdown="1">

### 题目 4 {#q4--definite-integral}

Evaluate $\displaystyle\int_0^1\frac{5}{(2x+1)(x+2)}\,dx$, giving your answer in an exact logarithmic form.

<details markdown="1">
<summary>提示</summary>

去分母后，代入 $x=-\frac{1}{2}$ 和 $x=-2$ 求出常数。积分时要除以 $2$，对应的项为 $\frac{A}{2x+1}$。两个因式在 $x=0$ 到 $x=1$ 的区间内都为正，因此分母不会为零。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$5\equiv A(x+2)+B(2x+1)$，得到 $A=\frac{10}{3}$ 和 $B=-\frac{5}{3}$。

$$\int_0^1\frac{5}{(2x+1)(x+2)}\,dx=\left[\frac{5}{3}\ln(2x+1)-\frac{5}{3}\ln(x+2)\right]_0^1=\boxed{\frac{5}{3}\ln2}.$$

方括号中的表达式在上限处为 $0$，在下限处为 $-\frac{5}{3}\ln2$。用上限值减去下限值，结果为正，符合被积函数在整个区间内为正的预期。对 $\frac{5}{3}\ln(2x+1)$ 求导得到 $\frac{10}{3(2x+1)}$，其中包含链式法则带来的系数 $2$。

</details>

</section>

<section class="lesson-check" markdown="1">

### 题目 5 {#check-three-factors}

<!-- task:check-three-factors -->
Express $\displaystyle\frac{5x^2+7x}{(x-1)(x+1)(2x+1)}$ in partial fractions, stating the restrictions. Hence find an indefinite integral and verify it.
<!-- /task:check-three-factors -->

<details markdown="1">
<summary>提示</summary>

每个不同的一次因式用一个常数分子；清分母后，可用三个根求常数。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$5x^2+7x\equiv A(x+1)(2x+1)+B(x-1)(2x+1)+D(x-1)(x+1).$$

依次令 $x=1,-1,-\frac12$，得到 $12=6A$、$-2=2B$、$-\frac94=-\frac34D$，所以 $A=2,B=-1,D=3$。

$$\frac{5x^2+7x}{(x-1)(x+1)(2x+1)}=\frac2{x-1}-\frac1{x+1}+\frac3{2x+1},\qquad x\ne1,-1,-\frac12.$$

$$\int\frac{5x^2+7x}{(x-1)(x+1)(2x+1)}\,dx=2\ln\lvert x-1\rvert-\ln\lvert x+1\rvert+\frac32\ln\lvert2x+1\rvert+C.$$

求导得到右侧三个分式；通分后分子为 $2(x+1)(2x+1)-(x-1)(2x+1)+3(x^2-1)=5x^2+7x$。积分式用于不跨越任一被排除输入的区间。

</details>

</section>

<section class="lesson-check" markdown="1">

### 题目 6 {#check-methods}

<!-- task:check-methods -->
Find each integral and explain your choice of first step. Verify both results.

$$I=\int\frac{2x+3}{(x+1)(x+2)}\,dx,\qquad J=\int\frac{x+3}{(x+1)(x+2)}\,dx.$$
<!-- /task:check-methods -->

<details markdown="1">
<summary>提示</summary>

展开分母并求导，比较两个分子。正确的部分分式方法也可接受。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$I=\ln\lvert(x+1)(x+2)\rvert+C.$$

因为分母的导数是 $2x+3$，$I$ 可直接识别对数形式。对于 $J$，分子不是这个导数的常数倍；用 $x+3\equiv A(x+2)+B(x+1)$，得到 $A=2,B=-1$。

$$J=2\ln\lvert x+1\rvert-\ln\lvert x+2\rvert+C.$$

求导后分别回到原被积函数。两式均在不跨越 $-2,-1$ 的区间内使用。若两题均正确使用部分分式，数学仍成立；应能说明第一题还有更直接的起点。

</details>

</section>

## 恢复与新尝试 {#repair-and-retry}

| 错误 | 恢复动作 | 新任务 |
| --- | --- | --- |
| 漏项或常数符号错 | 回看[重复因式](#worked-example-2--a-repeated-factor)和[通分检查](#check-signs)，重新建立分子恒等式 | [R1](#retry-form) |
| 对数系数或平方分母积分错 | 回看[积分的导数检查](#integration)，先对自己写的原函数求导 | [R1](#retry-form) |
| 忘了商或未先比较次数 | 回看[例3](#worked-example-3--division-decomposition-integration)，保留除法恒等式 | [R2](#retry-integral) |
| 没检查定积分条件 | 回看[积分区间限制](#integration)，在区间上找分母零点 | [稍后回顾](#later-review) |

收起旧答案再做新题；若靠提示完成，后续课再检验一次。

<section class="lesson-check" markdown="1">

### R1 {#retry-form}

<!-- task:retry-form -->
Express $\displaystyle\frac{6x+1}{(2x-1)^2}$ in partial fractions. Hence find an indefinite integral, stating its interval restriction and verifying your result.
<!-- /task:retry-form -->

<details markdown="1">
<summary>提示</summary>

要写出一次幂与二次幂两项；先清分母再求常数。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$6x+1\equiv A(2x-1)+B\quad\Rightarrow\quad A=3,\quad B=4.$$

$$\frac{6x+1}{(2x-1)^2}=\frac3{2x-1}+\frac4{(2x-1)^2}.$$

$$\int\frac{6x+1}{(2x-1)^2}\,dx=\frac32\ln\lvert2x-1\rvert-\frac2{2x-1}+C.$$

区间不能跨越 $x=\frac12$。求导第一项得 $3/(2x-1)$，第二项得 $4/(2x-1)^2$，通分重建 $6x+1$。把第二项写成对数会得到错误分母幂次。

</details>

</section>

<section class="lesson-check" markdown="1">

### R2 {#retry-integral}

<!-- task:retry-integral -->
Find $\displaystyle\int\frac{x^2+4x+1}{x(x+1)}\,dx$ and verify the result on its allowed intervals.
<!-- /task:retry-integral -->

<details markdown="1">
<summary>提示</summary>

先比较次数，再检查余下分式的因式。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$x^2+4x+1=x(x+1)+(3x+1),\qquad 3x+1\equiv1(x+1)+2x.$$

$$\frac{x^2+4x+1}{x(x+1)}=1+\frac1x+\frac2{x+1}.$$

$$\int\frac{x^2+4x+1}{x(x+1)}\,dx=x+\ln\lvert x\rvert+2\ln\lvert x+1\rvert+C.$$

区间不跨越 $x=-1,0$。求导并通分得到 $x(x+1)+(x+1)+2x=x^2+4x+1$。若原函数少了 $x$，漏掉的正是除法的商。

</details>

</section>

## 稍后回顾 {#review}

学完下一主题后，先自行判断条件与方法，不根据标题猜第一步。

<section class="lesson-check" markdown="1">

### 回顾任务 {#later-review}

<!-- task:later-review -->
A student applies an antiderivative at the endpoints to report a finite value for $\displaystyle\int_0^2\frac1{(x-1)(x+1)}\,dx$. Is this a valid ordinary definite-integral calculation? Explain. Then evaluate $\displaystyle\int_2^3\frac1{(x-1)(x+1)}\,dx$ exactly and check its sign.
<!-- /task:later-review -->

<details markdown="1">
<summary>提示</summary>

先检查两个积分各自的整个区间，再考虑端点代值。

</details>

<details markdown="1">
<summary>解答与检查</summary>

第一种计算无效：被积函数在区间内部的 $x=1$ 无定义，不能直接用端点相减当作普通定积分。本题只要求识别条件失败，不要求学习反常积分的极限理论。

第二个区间 $[2,3]$ 不含分母零点，且被积函数为正。清分母得 $1\equiv A(x+1)+B(x-1)$，因此 $A=\frac12,B=-\frac12$。

$$\int_2^3\frac1{(x-1)(x+1)}\,dx=\left[\frac12\ln\lvert x-1\rvert-\frac12\ln\lvert x+1\rvert\right]_2^3=\boxed{\frac12\ln\frac32}.$$

结果为正，符合图像在 $x$ 轴上方；求导恢复被积函数。若只检查了端点没有检查内部，回看积分区间条件，再给出为何第二个区间允许套公式的解释。

</details>

</section>

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
| 常数的符号错误 | [符号错误例题](#check-signs) | 重新通分，检查是否得到原分子 |
| 对数项的系数错误 | [积分法则](#integration) | 求导检查链式法则带来的系数 |
| 答案正确但过程不完整 | 例题 3 和 Q4 | 写出恒等式、积分过程和代入上下限 |

记下题号、所用帮助和出错步骤。先选上方的新重试，再在后续课程完成[稍后回顾](#later-review)。

**你应当能够：**写出部分分式、求出常数、进行积分，并通过通分和求导检查答案。

本主题对应 [OxfordAQA Mathematics 9660 课程说明](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf)中的 P2.1 和 P2.7。例题用于教学；Q1–Q6 是自拟练习题。官方真题练习请使用 MA03 试卷及对应的评分标准。

<details markdown="1">
<summary>范围与来源</summary>

[OxfordAQA 9660 大纲 v5.2，P2.1](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf)，部分分式积分另对应 P2.7。

参考的官方题与配套评分材料（官方出版物镜像）：January 2025 Q14(a), QP p26 / MS p21; January 2024 Q10(a), QP p22 / MS p18. [January 2025 QP](https://aqamat.alevelclouds.com/25_01_QP_P2.pdf) · [MS](https://aqamat.alevelclouds.com/25_01_MS_P2.pdf) · [January 2024 QP](https://aqamat.alevelclouds.com/24_01_QP_P2.pdf) · [MS](https://aqamat.alevelclouds.com/24_01_MS_P2.pdf).

本页课堂例题、练习、重试与回顾为自拟教学材料，没有官方分值。

</details>

**学习路径：**[上一节：代数分式与多项式除法](/zh/alevel/a2-mathematics/algebraic-fractions-and-division/) · [下一节：二项式级数](/zh/alevel/a2-mathematics/binomial-series/)。
