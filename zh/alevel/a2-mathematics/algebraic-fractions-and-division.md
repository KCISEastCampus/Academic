---
title: 代数分式与多项式除法
layout: subjects
mathjax: true
grade: a2
subject: a2-mathematics
lang: zh-CN
translation_of: /alevel/a2-mathematics/algebraic-fractions-and-division/
permalink: /zh/alevel/a2-mathematics/algebraic-fractions-and-division/
toc_headings: h2, h3
reading_layout: true
study_page: true
---

[纯数学](/zh/alevel/a2-mathematics/) · P2.1 代数与函数
{: .lesson-meta}

怎样换一种写法，同时保持分式的值不变？先练约分和加减乘除，再用除法把整块的多项式与剩下的分式分开。全过程都要记住原来的计算允许哪些输入。

教材：第 1 章，第 1.6–1.7 节（第 13–16 页）。四则运算作为前置内容复习。下方例题和练习均为自拟教学题。

- **学习：**从[化简](#simplification)开始，再完成例题。
- **作业帮助：**查看[分式运算](#operations-with-fractions)或[多项式除法](#algebraic-division)。
- **复习：**先尝试[练习题](#practice)，再打开解答。
{: .lesson-routes}

<div class="lesson-notes" markdown="1">

**开始前：**会展开和合并同类项、分解二次式（[AS 代数 L02](/zh/alevel/as-mathematics/algebra/#l02)），并代入多项式（[L03](/zh/alevel/as-mathematics/algebra/#l03)）。有一道题要找两个未知系数，解答会说明怎样用两个方程相减，消去其中一个未知数。先回补[允许哪些输入](/zh/alevel/a2-mathematics/functions/#domain-and-range)，再问“改写后哪些输入仍然不能用？”本页先练习保持限制，再学习除法与余数。复习入口为[独立练习](#practice)，错误后转[新重试](#repair-and-retry)，后续课程用[稍后回顾](#later-review)。

</div>

## 化简 {#simplification}

分数的分子、分母也可以放入含 x 的算式。两者都是多项式时，这个分式在分母非零处给出的规则，叫作**有理函数（rational function）**。例如，

$$f(x)=\frac{x^2-9}{x^2+x-6}.$$

分母不能为零。约去任何因式之前，先找出这些限制条件。

### 先因式分解 {#factorise-first}

1. 分解分子和分母。
2. 写出原分母为零时需要排除的数值。
3. 约去公因式。
4. 化简后仍保留原来的限制条件。

**因式（factor）**是与其余部分相乘的整块；**项（term）**则是相加或相减的一块。约分是把整个分子、分母同时除以同一个非零因式，不能只从和式里划掉某一项。例如，

$$\frac{x(x+2)}{x(x+5)}=\frac{x+2}{x+5},\qquad x\ne0,-5,$$

但不能在 $\frac{x+2}{x+5}$ 中约去两个 $x$，因为它们不是相乘的因式。

<section class="worked-example" markdown="1">

### 例题 1 — 约去因式后仍有定义域限制 {#example-1--a-cancelled-factor-still-gives-a-restriction}

**Question:** Simplify $\displaystyle\frac{x^2-9}{x^2+x-6}$ and state its domain.

要找出能整体约去的因式，先分解。分子是两个平方相减；分母则找两个乘积为负六、和为一的数。得到：

$$\frac{x^2-9}{x^2+x-6}=\frac{(x-3)(x+3)}{(x+3)(x-2)}.$$

原分母在 $x=-3$ 和 $x=2$ 时为零。其他实数输入值都可以约去公因式 $x+3$：

$$\boxed{\frac{x^2-9}{x^2+x-6}=\frac{x-3}{x-2},\qquad x\ne-3,2}.$$

定义域为所有实数 $x$，但要排除 $-3$ 和 $2$。

**检查：**当 $x=0$ 时，两个表达式都等于 $\frac32$。当 $x=-3$ 时，单看化简后的表达式会得到 $\frac65$，但原分式无定义。必须保留这个限制。

</section>

### 分式中含有分数 {#fractions-within-a-fraction}

如果分子或分母中含有分数系数，就用它们分母的公倍数同时乘以分子和分母。例如，

$$\frac{\frac12x+1}{\frac14x-2}=\frac{2x+4}{x-8},\qquad x\ne8.$$

这里分子和分母都乘以了 $4$。结果中没有可以约去的公因式。

## 分式运算 {#operations-with-fractions}

规则与数值分数相同。下表中的字母代表表达式：每个分母都必须非零。

| 运算 | 法则 | 检查要点 |
|---|---|---|
| 加法 | $\displaystyle\frac ab+\frac cd=\frac{ad+bc}{bd}$ | 使用公分母；先因式分解可避免不必要的展开 |
| 减法 | $\displaystyle\frac ab-\frac cd=\frac{ad-bc}{bd}$ | 整个第二个分子都要减去 |
| 乘法 | $\displaystyle\frac ab\times\frac cd=\frac{ac}{bd}$ | 展开之前先约去公因式 |
| 除法 | $\displaystyle\frac ab\div\frac cd=\frac ab\times\frac dc$ | 除数也必须非零，因此 $c\ne0$ |
{: .wide-table}

乘积 $bd$ 是一个公分母。如果 $b$ 和 $d$ 有公因式，也可以使用较小的公分母。

<section class="worked-example" markdown="1">

### 例题 2 — 减去整个分子 {#example-2--subtract-the-whole-numerator}

**Question:** Express $\displaystyle\frac{2}{x-1}-\frac{x}{x+2}$ as a single fraction.

两个分式相减，要先把分母变成相同的。使用 $(x-1)(x+2)$，并且 $x\ne1,-2$。第一个分子、分母同乘第二个因式；第二个分子、分母同乘第一个因式。这样每个分式的值都没变：

$$\frac{2}{x-1}-\frac{x}{x+2}=\frac{2(x+2)-x(x-1)}{(x-1)(x+2)}.$$

减号要作用于第二个分子的全部内容，所以先保留括号，再展开：

$$2x+4-(x^2-x)=-x^2+3x+4.$$

因此，

$$\boxed{\frac{2}{x-1}-\frac{x}{x+2}=\frac{-x^2+3x+4}{(x-1)(x+2)},\qquad x\ne1,-2}.$$

分子可因式分解为 $-(x-4)(x+1)$，所以没有因式可以与分母约去。

**检查：**当 $x=0$ 时，两个表达式都等于 $-2$。

**常见错误：**写成 $-x(x-1)=-x^2-x$。正确展开是 $-x^2+x$。

</section>

<section class="worked-example" markdown="1">

### 例题 3 — 除法会增加一项限制 {#example-3--division-adds-a-restriction}

**Question:** Simplify $\displaystyle\frac{x^2-9}{x^2-1}\div\frac{x-3}{x+1}$ and state all restrictions.

原来的分母要求 $x\ne1,-1$。除数也不能为零，因此还要排除 $x=3$。

乘以除数的倒数，再因式分解：

$$\frac{x^2-9}{x^2-1}\times\frac{x+1}{x-3}
=\frac{(x-3)(x+3)(x+1)}{(x-1)(x+1)(x-3)}.$$

约去公因式，但保留全部三项限制：

$$\boxed{\frac{x+3}{x-1},\qquad x\ne-1,1,3}.$$

**检查：**当 $x=0$ 时，原式等于 $9\div(-3)=-3$，与答案一致。

**常见错误：**只保留 $x\ne1$，因为它是最终分母中唯一看得见的限制。当 $x=3$ 时，原式要求除以零。

</section>

## 多项式除法 {#algebraic-division}

先回想整数除法：十七里面有三组五，还剩二。

$$17=5\times3+2,\qquad \frac{17}{5}=3+\frac25.$$

多项式除法沿用“除式乘商，再加剩下的部分”这个关系。但停止条件不同：整数比较余下的数与除数的大小；多项式比较最高次幂，没有余下部分，或余下部分的最高次幂比除式低时才停止。

非零多项式的**次数（degree）**是其中变量 $x$ 的最高次幂。例如，$3x^2-7$ 的次数为 $2$。

| 分式类型 | 次数关系 | 第一步 |
|---|---|---|
| 真分式 | 分子次数小于分母次数 | 视情况化简或使用部分分式（partial fractions） |
| 假分式（improper fraction） | 分子次数大于或等于分母次数 | 使用多项式除法（algebraic division） |

例如，$\frac{x+1}{x^2+2}$ 是真分式，而 $\frac{x^2+1}{x^2+2}$ 是假分式。次数相等时仍然需要做除法。

**商（quotient）** $Q(x)$ 告诉我们除式要乘以什么。乘回后还要加上的部分，叫作**余数（remainder）** $R(x)$，这样才能还原被除的多项式。若 F 是原多项式、G 是除式，就有

$$F(x)=G(x)Q(x)+R(x).$$

因此，在 $G(x)\ne0$ 时，

$$\frac{F(x)}{G(x)}=Q(x)+\frac{R(x)}{G(x)}.$$

如果余数不为零，它的次数必须小于 $G$ 的次数。余数为零表示除法能整除。

<section class="worked-example" markdown="1">

### 例题 4 — 整理简单的分子 {#example-4--rearrange-a-simple-numerator}

**Question:** Express $\displaystyle\frac{3x+5}{x-2}$ as a constant plus a proper fraction.

分母的几倍能得到分子中的 x 项？取三倍就能做到，但三倍分母的常数项是负六，原分子需要的是正五，所以还得加十一来补足：

$$3x+5=3(x-2)+11.$$

因此，

$$\boxed{\frac{3x+5}{x-2}=3+\frac{11}{x-2},\qquad x\ne2}.$$

**检查：**将答案乘以 $x-2$：$3(x-2)+11=3x+5$。

</section>

**余数为什么能靠代入求出？**除以一次式 $ax+b$（$a\ne0$）时，余数次数低于 $1$，所以是常数 $R$。恒等式为

$$F(x)\equiv(ax+b)Q(x)+R.$$

选择 $x=-b/a$，是因为它能让除式变成零。乘着 $Q(x)$ 的整项就变成零，只剩下 $R=F(-b/a)$。这里代入的是没有除法的多项式恒等式；原分式在这个输入处仍然不能计算。若题目给两个未知系数和两个余数条件，就分别找出使两个除式为零的输入，得到两个方程，再求这两个未知数。

<section class="worked-example" markdown="1">

### 例题 5 — 余数定理与比较系数（comparison of coefficients） {#example-5--remainder-theorem-and-comparison-of-coefficients}

**Question:** Express $\displaystyle\frac{2x^3+3x^2-5x+4}{x+2}$ as a quadratic expression plus a proper fraction.

余数定理（remainder theorem）指出，$F(x)$ 除以 $x-a$ 时，余数为 $F(a)$。

这里 $x+2=x-(-2)$，所以余数是

$$F(-2)=2(-2)^3+3(-2)^2-5(-2)+4=10.$$

分子的最高次幂是三，除式的最高次幂是一。因此商的最高次幂必须是二，乘回去才会得到三次项。用三个未知系数表示这个商，写出多项式恒等式：

$$2x^3+3x^2-5x+4\equiv(x+2)(Ax^2+Bx+C)+10.$$

展开右边。两边要对每个输入都相等，同次幂前面的数就必须分别相同。这就是**比较系数（comparison of coefficients）**：

$$2x^3+3x^2-5x+4\equiv Ax^3+(2A+B)x^2+(2B+C)x+2C+10.$$

| 系数 | 方程 | 结果 |
|---|---|---|
| $x^3$ | $A=2$ | $A=2$ |
| $x^2$ | $2A+B=3$ | $B=-1$ |
| $x$ | $2B+C=-5$ | $C=-3$ |

常数项也符合要求：$2C+10=-6+10=4$。

$$\boxed{\frac{2x^3+3x^2-5x+4}{x+2}=2x^2-x-3+\frac{10}{x+2},\qquad x\ne-2}.$$

可以把 $-2$ 代入**多项式**，但不能代入原分式，因为原分式在该处无定义。

#### 用长除法（long division）再做一次 {#the-same-example-by-long-division}

长除法会得到相同的商和余数。按降幂顺序写出各项；若缺少某次幂，也要写出系数为零的那一项。

每一步先处理最高次幂的那一项，叫作**首项（leading term）**。要用以 x 开头的除式消去二倍 x 的三次方，商就先选二倍 x 的平方。把整个除式乘回这个选择，再减去整个乘积。对余下部分重复这个动作，下表逐行展示：

| 当前表达式 | 下一个商项 | 减去 | 新余式 |
|---|---|---|---|
| $2x^3+3x^2-5x+4$ | $2x^2$ | $2x^2(x+2)$ | $-x^2-5x+4$ |
| $-x^2-5x+4$ | $-x$ | $-x(x+2)$ | $-3x+4$ |
| $-3x+4$ | $-3$ | $-3(x+2)$ | $10$ |
{: .wide-table}

现在只剩常数，而除式还含 x；余数次数已经比除式低，可以停止。把三次选出的商项合起来，商为 $2x^2-x-3$。

**任一方法都可这样检查：**展开 $(x+2)(2x^2-x-3)+10$，得到 $2x^3+3x^2-5x+4$。

**除式是另一个一次式时：**若除式为 $kx-b$ 且 $k\ne0$，常数余数是 $F(\frac bk)$。求商的系数时仍须考虑首项系数 $k$。

</section>

### 因式定理 {#factor-theorem}

如果除完什么也没剩下，除式就是一个因式：它与商相乘，正好得到原多项式。**因式定理（factor theorem）**把这个意思写成：$ax+b$ 是 $F(x)$ 的一个因式，当且仅当 $F(-\frac ba)=0$；其中 $a\ne0$。这就是余数为零时的余数定理。

例如，对于 $F(x)=2x^3+x^2-8x-4$，除式 $2x+1$ 在 $x=-\frac12$ 时为零。由于

$$F\left(-\frac12\right)=-\frac14+\frac14+4-4=0,$$

$2x+1$ 是一个因式。除法得到

$$\begin{aligned}F(x)&=(2x+1)(x^2-4)\\&=(2x+1)(x-2)(x+2).\end{aligned}$$

展开即可检查因式分解是否正确。

**常见错误：**代入 $-b$ 而不是 $-\frac ba$，这是除式为 $ax+b$ 时的常见错误。

<section class="worked-example" markdown="1">

### 例题 6 — 使用部分分式前先做除法 {#example-6--divide-before-using-partial-fractions}

**Question:** Express $\displaystyle\frac{x^2+6x-1}{(x-1)(x+2)}$ as a polynomial plus a proper fraction.

分母是 $x^2+x-2$。分子、分母的最高次幂都是二，因此这是假分式，做部分分式前先除法。取一份分母，就能解释掉分子的最高次项。

从分子中减去一个分母：

$$x^2+6x-1=(x^2+x-2)+(5x+1).$$

所以，

$$\boxed{\frac{x^2+6x-1}{(x-1)(x+2)}=1+\frac{5x+1}{(x-1)(x+2)},\qquad x\ne1,-2}.$$

余数的次数为 $1$，小于分母的次数 $2$。扣除商后得到的分式现在是真分式。

[部分分式的第一个例题](/zh/alevel/a2-mathematics/partial-fractions/#worked-example-1--different-linear-factors)说明这个余数分式等于 $\frac2{x-1}+\frac3{x+2}$。因此，完整结果是

$$1+\frac2{x-1}+\frac3{x+2},\qquad x\ne1,-2.$$

**检查：**通分后得到原分子：

$$\begin{aligned}&(x-1)(x+2)+2(x+2)+3(x-1)\\&\qquad=x^2+6x-1.\end{aligned}$$

**常见错误：**只写两个部分分式，漏掉商 $1$。

</section>

## 练习 {#practice}

写出因式分解或除法过程。列明所有限制条件，然后先检查答案，再打开解答。

<section class="lesson-check" markdown="1">

### 题目 1 {#question-1--keep-the-original-domain}

Simplify $\displaystyle\frac{x^2-4}{x^2-5x+6}$ and state its domain.

<details markdown="1">
<summary>提示</summary>

分解两个多项式。约去因式后，哪个数值会看不出来？

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$\frac{(x-2)(x+2)}{(x-2)(x-3)}=\frac{x+2}{x-3},\qquad x\ne2,3.$$

定义域为所有实数 $x$，但要排除 $2$ 和 $3$。

**检查：**当 $x=0$ 时，两个表达式都等于 $-\frac23$。单看化简后的表达式会得到 $-4$；但当 $x=2$ 时，原分式无定义。

</details>

</section>

<section class="lesson-check" markdown="1">

### 题目 2 {#question-2--a-shared-denominator-factor}

Express $\displaystyle\frac1{x-2}-\frac3{(x-2)(x+1)}$ as a single fraction in its simplest form. State the restrictions.

<details markdown="1">
<summary>提示</summary>

使用 $(x-2)(x+1)$ 作为公分母。第一个分子只需乘以 $x+1$。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$\frac{x+1-3}{(x-2)(x+1)}=\frac{x-2}{(x-2)(x+1)}=\frac1{x+1},\qquad x\ne2,-1.$$

**检查：**当 $x=0$ 时，原式等于 $-\frac12+\frac32=1$，与化简结果相同。约去因式并不意味着可以取 $x=2$。

</details>

</section>

<section class="lesson-check" markdown="1">

### 题目 3 {#question-3--check-the-divisor-too}

Simplify $\displaystyle\frac{x^2-1}{x^2-4}\div\frac{x+1}{x-2}$ and state all restrictions.

<details markdown="1">
<summary>提示</summary>

排除两个原分母为零的数值，以及使除数为零的数值。然后乘以除数的倒数。

</details>

<details markdown="1">
<summary>解答与检查</summary>

分母限制为 $x\ne-2,2$。除数在 $x=-1$ 时为零，所以也要排除该值。

$$\frac{(x-1)(x+1)}{(x-2)(x+2)}\times\frac{x-2}{x+1}=\frac{x-1}{x+2},\qquad x\ne-2,-1,2.$$

**检查：**当 $x=0$ 时，原式为 $\frac14\div(-\frac12)=-\frac12$，与答案一致。

</details>

</section>

<section class="lesson-check" markdown="1">

### 题目 4 {#question-4--find-a-quotient-and-remainder}

Express $\displaystyle\frac{x^2+4}{x-2}$ as a polynomial plus a proper fraction. Check the remainder using the remainder theorem.

<details markdown="1">
<summary>提示</summary>

商是一次多项式。余数为 $F(2)$，其中 $F(x)=x^2+4$。

</details>

<details markdown="1">
<summary>解答与检查</summary>

余数为 $F(2)=8$。恒等式为

$$x^2+4=(x-2)(x+2)+8.$$

因此，

$$\frac{x^2+4}{x-2}=x+2+\frac8{x-2},\qquad x\ne2.$$

**检查：**展开 $(x-2)(x+2)+8=x^2-4+8=x^2+4$。

</details>

</section>

<section class="lesson-check" markdown="1">

### 后续任务 {#factor-follow-up}

 For $P(x)=2x^3-3x^2-8x+12$, show that $2x-3$ is a factor, then factorise $P(x)$ fully.

<details markdown="1">
<summary>提示</summary>

先解 $2x-3=0$，再把得到的输入代入多项式。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$P(\frac32)=\frac{27}{4}-\frac{27}{4}-12+12=0$。根据因式定理，$2x-3$ 是一个因式。除法得到

$$\boxed{P(x)=(2x-3)(x^2-4)=(2x-3)(x-2)(x+2).}$$

展开各因式，检查是否得到原多项式。

</details>

</section>

<section class="lesson-check" markdown="1">

### 题目 5 {#question-5--a-quadratic-divisor}

Express $\displaystyle\frac{x^3+2x^2+3x+4}{x^2-1}$ as a polynomial plus a proper fraction. State its domain and verify the identity. After studying Partial Fractions, return and decompose the proper fraction.

<details markdown="1">
<summary>提示</summary>

用除式 $x^2-1$ 做长除法。非零余数现在可能是一次式。列出部分分式时要保留商。

</details>

<details markdown="1">
<summary>解答与检查</summary>

从被除式中减去 $x(x^2-1)$，余下 $2x^2+4x+4$。再减去 $2(x^2-1)$，余下 $4x+6$。

商为 $x+2$，余数为 $4x+6$：

$$\frac{x^3+2x^2+3x+4}{x^2-1}=x+2+\frac{4x+6}{(x-1)(x+1)},\qquad x\ne1,-1.$$

**学完下一页后再核对：**对于真分式，写成

$$4x+6\equiv A(x+1)+B(x-1).$$

令 $x=1$，得到 $A=5$。令 $x=-1$，得到 $B=-1$。因此，

$$\boxed{x+2+\frac5{x-1}-\frac1{x+1},\qquad x\ne1,-1}.$$

**检查：**$5(x+1)-(x-1)=4x+6$。加上商后，得到原分子：

$$\begin{aligned}&(x^2-1)(x+2)+(4x+6)\\&\qquad=x^3+2x^2+3x+4.\end{aligned}$$

</details>

</section>

<section class="lesson-check" markdown="1">

### 题目 6 {#check-remainders}

<!-- task:check-remainders -->
Let $P(x)=2x^3+bx^2+cx+1$. The remainder on division by $2x-1$ is $4$, and the remainder on division by $x+1$ is $-2$. Find $b$ and $c$, showing the equations used.
<!-- /task:check-remainders -->

<details markdown="1">
<summary>提示</summary>

先解两个除式为零时的 $x$，分别代入 $P$，不要把余数本身当成输入。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$P\left(\frac12\right)=\frac14+\frac b4+\frac c2+1=4\quad\Rightarrow\quad b+2c=11.$$

$$P(-1)=-2+b-c+1=-2\quad\Rightarrow\quad b-c=-1.$$

第一个方程减去第二个：$3c=12$，所以 $c=4$。再由 $b-c=-1$ 得 $b=3$。

$$\boxed{b=3,\qquad c=4}.$$

检查 $P(\frac12)=4$、$P(-1)=-2$。把 $1$ 代入第一个条件会丢失除式的首项系数；回看余数恒等式后做 R3。

</details>

</section>

## 恢复与新尝试 {#repair-and-retry}

收起原解答，按错误选新题。等式变形和定义域要分别核对。

| 错误 | 恢复动作 | 新任务 |
| --- | --- | --- |
| 约去项，或丢掉不可用输入 | 回看[因式相消](#factorise-first)，先列原分母零点 | [R1](#retry-domain) |
| 把乘除限制混为一谈 | 回看[除法例题](#example-3--division-adds-a-restriction)，另查除数是否为零 | [R2](#retry-operations) |
| 除式中 x 前面的数不是一时，代错输入 | 回看[余数示范](#example-5--remainder-theorem-and-comparison-of-coefficients)，先求哪个输入使除式为零 | [R3](#retry-remainder) |
| 漏商或余数次数不对 | 回看[除法恒等式](#algebraic-division)，展开 GQ+R | [R4](#retry-division) |

<section class="lesson-check" markdown="1">

### R1 {#retry-domain}

<!-- task:retry-domain -->
Simplify $\displaystyle\frac{x^2+x-6}{x^2-4}$ and give the domain of the original expression. Explain whether $x=2$ becomes allowed.
<!-- /task:retry-domain -->

<details markdown="1">
<summary>提示</summary>

先分解分子和分母；“化简后的公式有值”与“原式允许输入”是两件事。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$\frac{(x+3)(x-2)}{(x-2)(x+2)}=\frac{x+3}{x+2},\qquad x\ne-2,2.$$

在 $x=2$ 处原式仍无定义。取 $x=0$，两式都为 $\frac32$，但这一次代值只能作检查，恒等关系由因式分解保证。

</details>

</section>

<section class="lesson-check" markdown="1">

### R2 {#retry-operations}

<!-- task:retry-operations -->
Let $A(x)=\displaystyle\frac{x^2-4}{x-1}$ and $B(x)=\displaystyle\frac{x-2}{x+1}$. Simplify $A(x)B(x)$ and $A(x)\div B(x)$, stating every restriction for each. Explain any difference.
<!-- /task:retry-operations -->

<details markdown="1">
<summary>提示</summary>

乘积要求两个式子有定义；商还要求 $B(x)\ne0$。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$A(x)B(x)=\frac{(x-2)^2(x+2)}{(x-1)(x+1)},\qquad x\ne-1,1.$$

$$A(x)\div B(x)=\frac{(x+2)(x+1)}{x-1},\qquad x\ne-1,1,2.$$

乘积在 $x=2$ 有定义且为零；商在此处除以零，必须排除。约去因式后不能删除这项限制。

</details>

</section>

<section class="lesson-check" markdown="1">

### R3 {#retry-remainder}

<!-- task:retry-remainder -->
For $H(x)=4x^3-4x^2-7x+4$, determine the remainder on division by $2x-1$. Decide whether $2x-1$ is a factor and find the quotient.
<!-- /task:retry-remainder -->

<details markdown="1">
<summary>提示</summary>

先算 $H(\frac12)$；若余数为零，用商乘回除式核验因式。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$H\left(\frac12\right)=\frac12-1-\frac72+4=0.$$

$$H(x)=(2x-1)(2x^2-x-4).$$

因此余数为 $0$，$2x-1$ 是因式，商为 $2x^2-x-4$。展开得到原多项式；这验证的是多项式恒等式，未声称原分式在 $x=\frac12$ 有定义。

</details>

</section>

<section class="lesson-check" markdown="1">

### R4 {#retry-division}

<!-- task:retry-division -->
Express $\displaystyle\frac{2x^3+x^2+1}{x^2-1}$ as a polynomial plus a proper fraction. State the quotient, remainder and original domain, and check the identity.
<!-- /task:retry-division -->

<details markdown="1">
<summary>提示</summary>

每一步先用最高次项相除。余数可以是一次式；化简剩下的分式时，原来不能用的输入仍要排除。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$2x^3+x^2+1=(x^2-1)(2x+1)+(2x+2).$$

$$\frac{2x^3+x^2+1}{x^2-1}=2x+1+\frac{2x+2}{x^2-1}=2x+1+\frac2{x-1},\qquad x\ne-1,1.$$

商为 $2x+1$，余数为 $2x+2$，其次数 $1<2$。展开右边恒等式的乘积再加余数，得到原分子。最后相消不使 $x=-1$ 可用。

</details>

</section>

## 稍后回顾 {#review}

学完部分分式后，不看例题完成，说明为什么这样开始。

<section class="lesson-check" markdown="1">

### 回顾任务 {#later-review}

<!-- task:later-review -->
Write $\displaystyle\frac{x^3-2x^2+x-2}{x^2-4}$ as a polynomial plus a proper fraction in its simplest form, keeping the original domain. Find the remainder when the original numerator is divided by $x-2$, and explain how that agrees with your simplification.
<!-- /task:later-review -->

<details markdown="1">
<summary>提示</summary>

分组因式分解与长除法都可以。将等式乘回原分母，分别核验化简和定义域。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$x^3-2x^2+x-2=(x-2)(x^2+1),\qquad x^2-4=(x-2)(x+2).$$

$$\frac{x^3-2x^2+x-2}{x^2-4}=x-2+\frac5{x+2},\qquad x\ne-2,2.$$

记本题原分子为 $P$。余数为 $P(2)=0$，与分子包含因式 $x-2$ 一致。用 $(x+2)(x-2)+5=x^2+1$ 检查除法。若直接除以原二次分母，商仍是 $x-2$，但余数为 $5x-10$，不是 $5$；“余数”必须说明是除以哪个多项式。若漏掉输入 $2$，返回 R1；若余数混淆，返回 R4。

</details>

</section>

## 快速参考 {#quick-reference}

| 任务 | 方法 | 检查 |
|---|---|---|
| 化简 | 因式分解，再约去公因式 | 保留原定义域限制 |
| 加法或减法 | 使用公分母 | 减去分子时要加括号 |
| 乘法 | 分子与分子相乘，分母与分母相乘 | 展开前先约去因式 |
| 除法 | 乘以倒数 | 排除使除数为零的数值 |
| 多项式除法 | 求商与余数 | 展开“除式 × 商 + 余数” |
| 使用余数定理 | 对于除式 $ax+b$，计算 $F(-\frac ba)$，其中 $a\ne0$ | 代入多项式，而不是分式 |
| 使用因式定理 | 检查余数是否为零 | 展开因式分解结果进行检查 |
| 准备做部分分式 | 如果是假分式，先做除法 | 最终答案中保留商 |

**能解释吗？**为什么约去一个因式后，某个输入仍可能被排除？除法为什么比乘法多一项检查？余数什么时候是常数，什么时候可能是一次式？

[下一节：部分分式](/zh/alevel/a2-mathematics/partial-fractions/) · [返回主题目录](/zh/alevel/a2-mathematics/) · [查看全部参考笔记](/zh/alevel/a2-mathematics/quick-reference/#algebraic-fractions)

<details markdown="1">
<summary>范围与来源</summary>

[OxfordAQA 9660 大纲 v5.2，P2.1](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf)。

参考的官方题与配套评分材料（官方出版物镜像）：January 2025 Q1, QP p3 / MS p4. [January 2025 QP](https://aqamat.alevelclouds.com/25_01_QP_P2.pdf) · [MS](https://aqamat.alevelclouds.com/25_01_MS_P2.pdf).

本页课堂例题、练习、重试与回顾为自拟教学材料，没有官方分值。

</details>

**学习路径：**[上一节：绝对值函数与变换](/zh/alevel/a2-mathematics/modulus-and-transformations/) · [下一节：部分分式](/zh/alevel/a2-mathematics/partial-fractions/)。
