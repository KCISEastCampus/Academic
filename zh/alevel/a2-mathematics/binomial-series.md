---
title: 二项式级数
layout: subjects
mathjax: true
grade: a2
subject: a2-mathematics
lang: zh-CN
translation_of: /alevel/a2-mathematics/binomial-series/
permalink: /zh/alevel/a2-mathematics/binomial-series/
toc_headings: h2, h3
reading_layout: true
study_page: true
---

[纯数学](/zh/alevel/a2-mathematics/) · P2.2 二项式级数
{: .lesson-meta}

<div class="lesson-lead" markdown="1">

怎样用 $x$ 的幂帮助计算平方根或倒数？本课先说明无限展开是什么意思，再学习怎样求出各项，以及只取几项时能否得到有用的近似值。

</div>

1. [建立级数](#the-binomial-series)：辨认幂次、加在一后面的整个式子，以及乘在括号前的常数。
2. [组合展开](#partial-fractions-and-products)：保留所需幂次，并同时满足所有范围条件。
3. [使用近似式](#approximations)，再做[独立练习](#practice)，稍后返回[回顾任务](#later-review)。
{: .lesson-routes}

<div class="lesson-notes" markdown="1">

**开始前：**回补[指数与精确值](/zh/alevel/as-mathematics/algebra/#l01)、多项式乘法；有理函数还需要[部分分式](/zh/alevel/a2-mathematics/partial-fractions/#method)。下方补充整数展开与阶乘；开始学习时不要求你已经会无穷展开公式。

<details id="prerequisite-repair" markdown="1">
<summary>回补本课使用的代数</summary>

三个因式相乘得到 $(1+t)^3=1+3t+3t^2+t^3$。阶乘满足 $2!=2\times1=2$、$3!=3\times2\times1=6$。取幂时也要处理外部常数：$(4+4t)^{1/2}=2(1+t)^{1/2}$。乘积的 $x^3$ 项可来自幂次配对 $0+3$、$1+2$、$2+1$ 或 $3+0$。

</details>

所有例题与任务均为自拟题，没有官方分值。提示与解答分别展开；记录自己是否用过帮助。课后可查[来源与范围](#lesson-sources)。

</div>

## 二项式级数 {#the-binomial-series}

前面的整数展开，乘开后只有有限几项。平方根或倒数对应的展开通常不会终止，会一直写下去。按顺序逐项相加，会得到一串总和；在规定范围内，这些总和越来越接近原函数的值。这样的无限相加叫作**无穷级数（infinite series）**。

下面的公式中，n 是幂次，u 表示加在一后面的整个式子；它可能含 x 的倍数、负号或更高次幂。公式旁的条件告诉我们，什么时候不断相加会接近左边原式的值。

当 $\lvert u\rvert<1$ 时，

$$\begin{aligned}
(1+u)^n={}&1+nu+\frac{n(n-1)}{2!}u^2\\
&+\frac{n(n-1)(n-2)}{3!}u^3+\cdots.
\end{aligned}$$

这里 $2!=2$，$3!=6$。计算后一个系数时，保留前面已有的因子，再乘上从 n 依次减一下去的下一个数，分母换成下一个阶乘。公式中的各次幂作用于整个 u。

当 $n$ 为正整数时，展开会在某一项终止，并且对所有实数 $u$ 都成立。当 $n=0$ 时，只要原式有定义，结果就是 $1$。当幂次为负整数或非整数时，要使用无穷级数，并注明 $\lvert u\rvert<1$。本课程所写的适用范围不包含端点；端点处的情况取决于 $n$。

**方法：**

1. 把表达式写成常数乘以 $(1+u)^n$。
2. 找出 $n$ 和 $u$。代入整个 $u$，包括它的符号。
3. 计算每一项的系数，并按 $x$ 的升幂排列。
4. 每一项都乘上括号前的常数。根据 $\lvert u\rvert<1$ 写出适用范围。

“展开到并包括 $x^3$ 项”表示保留常数项、$x$ 项、$x^2$ 项和 $x^3$ 项。有限项的结果是一个**近似值（approximation）**；如果要表示完整级数的等式，必须用 $+\cdots$ 表示剩余各项。

<section class="worked-example" markdown="1">

### 例题 1 — 分数次幂 {#example-1--a-fractional-power}

**Question:** Expand $(1+4x)^{\frac12}$ up to and including the term in $x^3$. State the range of validity.

平方根对应 $n=\frac12$，加在一后面的整个式子是 $u=4x$。公式里每一个 u 都要换成这个整体：二次项中，四和 x 都要平方；三次项中，两者都要立方。

$$\begin{aligned}
(1+4x)^{\frac12}={}&1+\frac12(4x)\\
&+\frac{\frac12(-\frac12)}{2}(4x)^2\\
&+\frac{\frac12(-\frac12)(-\frac32)}{6}(4x)^3+\cdots\\
={}&\boxed{1+2x-2x^2+4x^3+\cdots}.
\end{aligned}$$

适用范围由 $\lvert4x\rvert<1$ 给出：4x 到零的距离要小于一。把左右两个界限都除以四，得到 $\boxed{-\frac14<x<\frac14}$。

**检查：**当 $x=0$ 时，原式和级数都等于 $1$。$x^2$ 项的系数为负，而 $x^3$ 项的系数为正；注意数清负因子的个数。

</section>

<section class="worked-example" markdown="1">

### 例题 2 — 先提出常数因子 {#example-2--take-out-the-constant-first}

**Question:** Expand $(9-3x)^{-\frac12}$ up to and including the term in $x^3$. State the range of validity.

公式要求括号内的常数项是 $1$，这里却是 $9$。先从整个括号提出九，留下的 x 的系数也要除以九。九本身同样要取负二分之一次幂：先开平方得到三，再取倒数，所以括号前是三分之一。

先写成

$$(9-3x)^{-\frac12}=\frac13\left(1-\frac{x}{3}\right)^{-\frac12}.$$

取 $n=-\frac12$，$u=-\frac{x}{3}$，得到下面的展开。一次项中的两个负号相乘变正；后面的每一项都要把 u 连同负号一起取幂。

$$\left(1-\frac{x}{3}\right)^{-\frac12}=1+\frac{x}{6}+\frac{x^2}{24}+\frac{5x^3}{432}+\cdots.$$

每一项都乘以 $\frac13$：

$$(9-3x)^{-\frac12}=\boxed{\frac13+\frac{x}{18}+\frac{x^2}{72}+\frac{5x^3}{1296}+\cdots}.$$

由于 $\left\lvert\frac{x}{3}\right\rvert<1$，适用范围为 $\boxed{-3<x<3}$。

**常见错误：**提出 $9$，而不是 $9^{-\frac12}$。把 $x=0$ 代入原式，检查常数项是否正确。

</section>

<section class="lesson-check" markdown="1">

### 暂停，补完一步 {#check-normalise}

<!-- task:check-normalise -->

For $(4-2x)^{-1/2}$, write the outside factor, $n$ and $u$. Complete the expansion through $x^2$ and state its range.

<!-- /task:check-normalise -->

<details markdown="1">
<summary>提示</summary>

提出 $4$ 后，还要对它取幂。代入整个 $-x/2$。

</details>

<details markdown="1">
<summary>解答与检查</summary>

外部因子为 $1/2$，$n=-1/2$，$u=-x/2$：

$$(4-2x)^{-1/2}=\frac12+\frac{x}{8}+\frac{3x^2}{64}+\cdots,\qquad -2<x<2.$$

常数项与原式在 $x=0$ 时的值一致。

</details>

</section>

<section class="worked-example" markdown="1">

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

**检查：**系数不会在某一项后停止：从负整数继续依次减一，不会出现零因子。负整数次幂不会展开成有限多项式。

</section>

## 部分分式与乘积 {#partial-fractions-and-products}

如果每一项都是前一项乘以同一个式子，就叫作**等比级数（geometric series）**。下面两个形式很有用：

$$\frac1{1-u}=1+u+u^2+u^3+\cdots,$$

$$\frac1{1+u}=1-u+u^2-u^3+\cdots,$$

两者都要求 $\lvert u\rvert<1$。

对于多项式相除得到的分式，部分分式能把它拆成符合这些简单形式的几项。分别展开后，再把同次幂相加。最终展开所用的每一个输入，都必须让**每个**级数的条件成立，只满足其中一个条件不够。

两个级数相乘时，要逐项相乘，再合并同次幂。求 $x^3$ 的系数时，把所有幂次之和为 $3$ 的乘积都算进去。缺少 $x$ 项，不代表没有 $x^2$ 项。

<section class="worked-example" markdown="1">

### 例题 4 — 展开有理函数 {#example-4--expand-a-rational-function}

**Question:** Use partial fractions to expand $\frac{3}{(1-x)(1+2x)}$ up to and including the term in $x^3$.

分母有两个不同的一次因式，给每个因式各写一个分式，便能分别套用前面的等比级数。写成

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

</section>

<section class="worked-example" markdown="1">

### 例题 4b — 重复因子 {#example-repeated-factor}

**Question:** Expand the following function through $x^3$ and state the range:

$$F(x)=\frac{3-x}{(1-x)^2(1+x)}.$$

分母中的一个因式出现了两次。按部分分式页学过的方法，一次、二次分母都要有对应项，另外那个因式也要有一项：

$$F(x)=\frac{A}{1-x}+\frac{B}{(1-x)^2}+\frac{C}{1+x}.$$

两边都乘以原分母，得到 $3-x=A(1-x)(1+x)+B(1+x)+C(1-x)^2$。分别比较常数项、一次项、二次项，得 $A+B+C=3$、$B-2C=-1$、$-A+C=0$，所以 $A=B=C=1$。

中间一项的幂次为 $-2$，因此系数与等比级数不同：

$$\begin{aligned}
F(x)&=(1+x+x^2+x^3+\cdots)\\
&\quad+(1+2x+3x^2+4x^3+\cdots)\\
&\quad+(1-x+x^2-x^3+\cdots)\\
&=3+2x+5x^2+4x^3+\cdots,\qquad -1<x<1.
\end{aligned}$$

**检查：**乘以 $(1-x)^2(1+x)=1-x-x^2+x^3$，直到三次项得到 $3-x$。如果省略平方分母上的那一项，分子恒等式右边每一项都会带有“一减 x”这个因式；输入一时，它们全部为零，要求的分子却等于二，因此不可能还原原分子。

</section>

<section class="worked-example" markdown="1">

### 例题 5 — 相乘并合并同次幂 {#example-5--multiply-and-collect-powers}

**Question:** Expand $(1+x)\sqrt{1-2x}$ up to and including the term in $x^3$.

先展开平方根这一部分，使用二分之一次幂公式；加在一后面的整个式子是负二 x：

$$\sqrt{1-2x}=1-x-\frac12x^2-\frac12x^3+\cdots.$$

再乘以 $1+x$。乘一时，各项幂次不变；乘 x 时，每项的幂次都增加一。把两次乘法得到的同次幂相加：

$$\begin{aligned}
(1+x)\sqrt{1-2x}
&=1+(-1+1)x+\left(-\frac12-1\right)x^2\\
&\quad+\left(-\frac12-\frac12\right)x^3+\cdots\\
&=\boxed{1-\frac32x^2-x^3+\cdots}.
\end{aligned}$$

适用范围仍为 $\boxed{-\frac12<x<\frac12}$。有限因子 $1+x$ 不会增加新的限制。

**检查：**$x$ 项相互抵消。计算 $x^3$ 项时，要同时计入 $1\times(-\frac12x^3)$ 和 $x\times(-\frac12x^2)$。

</section>

## 近似计算 {#approximations}

**线性近似（linear approximation）**保留常数项和 $x$ 项；**二次近似（quadratic approximation）**还保留 $x^2$ 项。忽略更高次幂时，要使用 $\approx$。

选择一个接近零的 $u$，它的幂次越高，数值就越快变小，有利于只取前几项近似。级数条件 $\lvert u\rvert<1$ 允许使用无穷展开，但**不保证**只取少数几项就能达到所需精度。除了范围，还要检查这一次近似是否足够准确。

例如，例题 1 中 $x=0.24$ 落在适用范围内，但三次近似的结果是 $1.420096$，而 $\sqrt{1.96}=1.4$。不能只凭“在适用范围内”就断定结果精确到小数点后好几位。

<section class="worked-example" markdown="1">

### 例题 6 — 估算平方根 {#example-6--approximate-a-square-root}

**Question:** Use a binomial expansion to estimate $\sqrt{4.08}$ to five decimal places. Check the estimate with a calculator.

先找一个接近 4.08、又能准确开平方的数：四很接近，而且 4.08 是四乘以 1.02。这样，平方根里面只比一多一点点。写成 $\sqrt{4.08}=2\sqrt{1+0.02}$，因此 $u=0.02$。使用

$$(1+u)^{\frac12}\approx1+\frac{u}{2}-\frac{u^2}{8}+\frac{u^3}{16},$$

得到

$$\sqrt{4.08}\approx2(1+0.01-0.00005+0.0000005)=2.019901.$$

保留五位小数，估算值为 $\boxed{2.01990}$。

**检查：**计算器结果为 $2.019900987\ldots$，四舍五入后相同。估算中第一个被舍去的项为 $2\left(-\frac5{128}\right)(0.02)^4=-0.0000000125$，这可以解释此处的小误差。一般来说，第一个舍去项本身并不能给出整个剩余级数的误差上界。

**常见错误：**直接展开 $(1+3.08)^{\frac12}$。这样会用到 $u=3.08$，不满足 $\lvert u\rvert<1$。

</section>

## 练习 {#practice}

建议用时约 **25–35 分钟**。每次展开都要写出适用范围。先尝试题目，再打开解答。

<section class="lesson-check" markdown="1">

### 题目 1 {#question-1--reciprocal}

<!-- task:question-1--reciprocal -->

Expand $\frac1{1-3x}$ up to and including the term in $x^3$.

<!-- /task:question-1--reciprocal -->

<details markdown="1">
<summary>提示</summary>

取 $n=-1$，$u=-3x$；也可以使用 $\frac1{1-u}$ 的等比级数。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$\boxed{\frac1{1-3x}=1+3x+9x^2+27x^3+\cdots},\qquad \boxed{-\frac13<x<\frac13}.$$

把显示的多项式乘以 $1-3x$，得到 $1-81x^4$。直到 $x^3$ 的多余项都会相互抵消。

</details>

</section>

<section class="lesson-check" markdown="1">

### 题目 2 {#question-2--outside-factor}

<!-- task:question-2--outside-factor -->

Expand $\sqrt{4+x}$ up to and including the term in $x^3$.

<!-- /task:question-2--outside-factor -->

<details markdown="1">
<summary>提示</summary>

写成 $\sqrt{4+x}=2\left(1+\frac{x}{4}\right)^{\frac12}$。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$\boxed{\sqrt{4+x}=2+\frac{x}{4}-\frac{x^2}{64}+\frac{x^3}{512}+\cdots}.$$

适用范围为 $\boxed{-4<x<4}$。代入 $x=0$ 时，常数项应当是 $2$。将多项式平方后，得到 $4+x$，且 $x^2$ 和 $x^3$ 项的系数为零；更高次项仍然存在。

</details>

</section>

<section class="lesson-check" markdown="1">

### 题目 3 {#question-3--signs}

<!-- task:question-3--signs -->

Expand $(1+x)^{-2}$ up to and including the term in $x^3$. Explain why $1-2x+x^2$ is not the correct expansion.

<!-- /task:question-3--signs -->

<details markdown="1">
<summary>提示</summary>

取 $n=-2$。不要把这个式子当成 $(1-x)^2$。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$\boxed{(1+x)^{-2}=1-2x+3x^2-4x^3+\cdots},\qquad \boxed{-1<x<1}.$$

$x^2$ 项的系数为 $\frac{(-2)(-3)}2=3$，不是 $1$。该级数不会终止。乘以 $(1+x)^2$ 后，直到 $x^3$ 的各项都会抵消。

</details>

</section>

<section class="lesson-check" markdown="1">

### 题目 4 {#question-4--two-ranges}

<!-- task:question-4--two-ranges -->

Express $\frac4{(1-2x)(1+x)}$ in partial fractions. Hence expand up to and including the term in $x^3$.

<!-- /task:question-4--two-ranges -->

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

</section>

<section class="lesson-check" markdown="1">

### 题目 5 {#question-5--a-product}

<!-- task:question-5--a-product -->

Expand $(1+2x)(1-x)^{-\frac12}$ up to and including the term in $x^3$.

<!-- /task:question-5--a-product -->

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

</section>

<section class="lesson-check" markdown="1">

### 题目 6 {#question-6--choose-a-useful-form}

<!-- task:question-6--choose-a-useful-form -->

Use a binomial expansion to estimate $\sqrt{8.91}$ to five decimal places. Check with a calculator. Explain why using $(1+7.91)^{\frac12}$ is unsuitable.

<!-- /task:question-6--choose-a-useful-form -->

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

</section>

<section class="lesson-check" markdown="1">

### 题目 7 {#question-7}

<!-- task:question-7 -->

Expand the following function through $x^3$ and state its range of validity. Show how you obtain the coefficients.

$$G(x)=\frac{2+x}{(1-x)^2(1+x)}.$$

<!-- /task:question-7 -->

<details markdown="1">
<summary>提示</summary>

重复的一次因式需要保留一次、二次分母对应的项。也可以把各自在适用范围内的级数相乘，但计算每个幂次时不能漏掉任何乘积。

</details>

<details markdown="1">
<summary>解答与检查</summary>

一种分解为

$$G(x)=\frac{1}{4(1-x)}+\frac{3}{2(1-x)^2}+\frac{1}{4(1+x)}.$$

因此 $G(x)=2+3x+5x^2+6x^3+\cdots$，范围为 $-1<x<1$。乘以 $1-x-x^2+x^3$，直到三次项得到 $2+x$。正确的直接级数乘法同样有效。

</details>

</section>

## 修复后再尝试 {#repair}

按自己作答中的错误选择一行，回到对应讲解；收起原答案，再做新题。重试要补上原先遗漏的条件或选择依据。

| 作答中的证据 | 回补位置 | 新尝试 |
| --- | --- | --- |
| 题目 1–3 的常数项、符号或输入范围错误 | [例题 2](#example-2--take-out-the-constant-first) | [重试 A](#retry-normalise) |
| 题目 4–5、7 漏系数、分母幂次或两个级数都要满足的条件 | [有理函数](#example-4--expand-a-rational-function)、[重复因子](#example-repeated-factor)、[乘积](#example-5--multiply-and-collect-powers) | [重试 B](#retry-combine) |
| 题目 6 只凭在适用范围内，就声称已经达到所需的小数位精度 | [近似形式的选择与检查](#approximations) | [重试 C](#retry-approximation) |

<section class="lesson-check" markdown="1">

### 重试 A {#retry-normalise}

<!-- task:retry-normalise -->

Expand $(4-2x^2)^{-1/2}$ through $x^4$ and state the range in $x$.

<!-- /task:retry-normalise -->

<details markdown="1">
<summary>提示</summary>

范围条件作用于 $u=-x^2/2$，不能只看 $x$。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$n=-1/2$，外部因子为 $1/2$，得到

$$(4-2x^2)^{-1/2}=\frac12+\frac{x^2}{8}+\frac{3x^4}{64}+\cdots.$$

由 $x^2/2<1$ 得 $-\sqrt2<x<\sqrt2$。每个输入因子都含 $x^2$，所以没有奇数次幂。

</details>

</section>

<section class="lesson-check" markdown="1">

### 重试 B {#retry-combine}

<!-- task:retry-combine -->

Find the expansion through $x^3$ and range of (a) $(1+x)/(1-2x)$ , (b) $(1+2x)/(1-x)^2$ and (c) $(2-x)/((1-2x)(1+x))$. Explain how you check the coefficient of $x^3$ in each and combine the range conditions.

<!-- /task:retry-combine -->

<details markdown="1">
<summary>提示</summary>

每个乘积都要收齐幂次之和为 $3$ 的项；由分母选择所需无穷级数。

</details>

<details markdown="1">
<summary>解答与检查</summary>

(a) $1+3x+6x^2+12x^3+\cdots$，范围为 $-1/2<x<1/2$；三次项系数为 $8+4=12$。

(b) $1+4x+7x^2+10x^3+\cdots$，范围为 $-1<x<1$；三次项系数为 $4+2(3)=10$。

(c) 分解为 $1/(1-2x)+1/(1+x)$，得到 $2+x+5x^2+7x^3+\cdots$。必须同时满足 $\lvert2x\rvert<1$ 和 $\lvert x\rvert<1$，因此 $-1/2<x<1/2$；三次项系数为 $8-1=7$。

分别乘以原分母，直到三次项都还原为分子。

</details>

</section>

<section class="lesson-check" markdown="1">

### 重试 C {#retry-approximation}

<!-- task:retry-approximation -->

Estimate $\sqrt{15.84}$ using an expansion through the cubic term in a suitable small input. Give five decimal places and check with a calculator.

<!-- /task:retry-approximation -->

<details markdown="1">
<summary>提示</summary>

使用 $4\sqrt{1-0.01}$，区分截断近似值与完整无穷级数。

</details>

<details markdown="1">
<summary>解答与检查</summary>

三次近似为 $4(1-0.005-0.0000125-0.0000000625)=3.97994975$。它与计算器数值均舍入为五位小数 $3.97995$。这里通过数值比较核对所求舍入；只检查适用范围不能保证这一点。

</details>

</section>

## 稍后返回 {#review}

学完另一个主题后，不打开例题，返回这里作答。记录自己选择的方法、用过的帮助，以及是否改变过判断。

<section class="lesson-check" markdown="1">

### 回顾任务 {#later-review}

<!-- task:later-review -->

Let $H(x)=(1+x)/\sqrt{1-2x}$. Find its expansion through $x^3$ and the range. Use it to estimate $H(0.01)$ to four decimal places, checking the rounding. A student says that the same four-term expression must be accurate to four decimal places at $x=0.49$ because it is in range. Assess the claim.

<!-- /task:later-review -->

<details markdown="1">
<summary>提示</summary>

保留常数项以及每个幂次的全部乘积；判断精度时，把截断值与原函数比较。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$H(x)=1+2x+\frac52x^2+4x^3+\cdots$，范围为 $-1/2<x<1/2$。在 $0.01$ 处的三次近似为 $1.020254$，原函数值约为 $1.0202540700$；两者均舍入为 $1.0203$。

在 $0.49$ 处，三次式给出 $3.050846$，原函数值却约为 $10.536$。级数在此有效，但这四项不够。系数有误时回看[乘积](#example-5--multiply-and-collect-powers)；精度判断有误时回看[近似计算](#approximations)。

</details>

</section>

## 快速参考 {#quick-reference}

| 任务 | 方法 | 检查 |
|---|---|---|
| 展开 $(1+u)^n$ | 使用二项式级数 | 代入整个 $u$，包括它的符号 |
| 展开 $(a+bx)^n$，其中 $a>0$ | 写成 $a^n\left(1+\frac{b}{a}x\right)^n$ | 每一项都乘以 $a^n$ |
| 写出适用范围 | 在这里，无穷级数使用 $\lvert u\rvert<1$ | 合并多个级数时，同时应用所有范围 |
| 展开有理函数 | 先做部分分式分解 | 合并后核对各项系数 |
| 展开乘积 | 合并同次幂的项 | 计算所求次幂时，不要漏掉任何乘积 |
| 求近似值 | 选择较小的 $\lvert u\rvert$，并忽略更高次幂 | 使用 $\approx$，检查是否达到所需精度 |
{: .wide-table}

**如果答案看起来不对：**检查外部因子、符号、阶乘、漏掉的乘积和适用范围。函数本身可能在某处有定义，但这里的展开不一定在该处有效。

**你应当能够：**展开负整数次幂和分数次幂、组合多个级数、写出适用范围，并选择有效的近似形式。

**学习路径：**[上一节：部分分式](/zh/alevel/a2-mathematics/partial-fractions/) · [下一节：三角函数与公式](/zh/alevel/a2-mathematics/trigonometric-functions-and-formulae/) · [返回纯数学主题目录](/zh/alevel/a2-mathematics/)。

## 下一步 {#next-step}

如果能独立选择输入、合并系数并说明范围，继续学习[三角函数与公式](/zh/alevel/a2-mathematics/trigonometric-functions-and-formulae/)。若某项检查失败，走[对应恢复路线](#repair)，隔一段时间后再返回[回顾任务](#later-review)。

<details id="lesson-sources" markdown="1">
<summary>来源与范围</summary>

范围：OxfordAQA 9660 MA03，P2.2，[大纲 v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf)印刷 p21。制作时实读 January 2025 MA03 Q14(a)–(c) 的 [QP pp26–27](https://aqamat.alevelclouds.com/25_01_QP_P2.pdf) 与 [MS pp21–22](https://aqamat.alevelclouds.com/25_01_MS_P2.pdf)，核对归一化、展开和系数合并步骤。本页题目仍均为自拟题。原教材定位：第 2 章第 2.1–2.2 节、印刷 pp24–30；本轮未重查原书。端点收敛及严格余项界不在本课范围内。

</details>

{% include exam_topic_practice.html %}
