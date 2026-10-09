---
title: 代数分式与多项式除法
layout: subjects
mathjax: true
grade: a2
subject: a2-mathematics
lang: zh-CN
translation_of: /alevel/a2-mathematics/algebraic-fractions-and-division/
permalink: /zh/alevel/a2-mathematics/algebraic-fractions-and-division/
toc_headings: h2
study_page: true
---

[纯数学](/zh/alevel/a2-mathematics/) · P2.1 代数与函数

学习化简代数分式（algebraic fraction），进行加减乘除，并把假分式（improper fraction）写成多项式与真分式（proper fraction）之和。原式中的限制条件要保留。

教材：第 1 章，第 1.6–1.7 节（第 13–16 页）。四则运算作为前置内容复习。下方例题和练习均为自拟教学题。

- **学习：**从[化简](#simplification)开始，再完成例题。
- **作业帮助：**查看[分式运算](#operations-with-fractions)或[多项式除法](#algebraic-division)。
- **复习：**先尝试[练习题](#practice)，再打开解答。

**开始前：**你应当会因式分解二次式、展开括号和合并同类项。如有需要，先复习[定义域](/zh/alevel/a2-mathematics/functions/#domain-and-range)。

## 化简 {#simplification}

**有理函数（rational function）**是分子和分母都是多项式的分式。例如，

$$f(x)=\frac{x^2-9}{x^2+x-6}.$$

分母不能为零。约去任何因式之前，先找出这些限制条件。

### 先因式分解 {#factorise-first}

1. 分解分子和分母。
2. 写出原分母为零时需要排除的数值。
3. 约去公因式。
4. 化简后仍保留原来的限制条件。

如果一个**因式（factor）**乘在整个分子和分母上，就可以约去；但不能约去和式中的某一项。例如，

$$\frac{x(x+2)}{x(x+5)}=\frac{x+2}{x+5},\qquad x\ne0,-5,$$

但不能在 $\frac{x+2}{x+5}$ 中约去两个 $x$，因为它们不是相乘的因式。

### 例题 1 — 约去因式后仍有定义域限制 {#example-1--a-cancelled-factor-still-gives-a-restriction}

**Question:** Simplify $\displaystyle\frac{x^2-9}{x^2+x-6}$ and state its domain.

先分解两个多项式：

$$\frac{x^2-9}{x^2+x-6}=\frac{(x-3)(x+3)}{(x+3)(x-2)}.$$

原分母在 $x=-3$ 和 $x=2$ 时为零。其他实数输入值都可以约去公因式 $x+3$：

$$\boxed{\frac{x^2-9}{x^2+x-6}=\frac{x-3}{x-2},\qquad x\ne-3,2}.$$

定义域为所有实数 $x$，但要排除 $-3$ 和 $2$。

**检查：**当 $x=0$ 时，两个表达式都等于 $\frac32$。当 $x=-3$ 时，单看化简后的表达式会得到 $\frac65$，但原分式无定义。必须保留这个限制。

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

乘积 $bd$ 是一个公分母。如果 $b$ 和 $d$ 有公因式，也可以使用较小的公分母。

### 例题 2 — 减去整个分子 {#example-2--subtract-the-whole-numerator}

**Question:** Express $\displaystyle\frac{2}{x-1}-\frac{x}{x+2}$ as a single fraction.

公分母是 $(x-1)(x+2)$，并且 $x\ne1,-2$。

$$\frac{2}{x-1}-\frac{x}{x+2}=\frac{2(x+2)-x(x-1)}{(x-1)(x+2)}.$$

仔细展开分子：

$$2x+4-(x^2-x)=-x^2+3x+4.$$

因此，

$$\boxed{\frac{2}{x-1}-\frac{x}{x+2}=\frac{-x^2+3x+4}{(x-1)(x+2)},\qquad x\ne1,-2}.$$

分子可因式分解为 $-(x-4)(x+1)$，所以没有因式可以与分母约去。

**检查：**当 $x=0$ 时，两个表达式都等于 $-2$。

**常见错误：**写成 $-x(x-1)=-x^2-x$。正确展开是 $-x^2+x$。

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

## 多项式除法 {#algebraic-division}

非零多项式的**次数（degree）**是其中变量 $x$ 的最高次幂。例如，$3x^2-7$ 的次数为 $2$。

| 分式类型 | 次数关系 | 第一步 |
|---|---|---|
| 真分式 | 分子次数小于分母次数 | 视情况化简或使用部分分式（partial fractions） |
| 假分式（improper fraction） | 分子次数大于或等于分母次数 | 使用多项式除法（algebraic division） |

例如，$\frac{x+1}{x^2+2}$ 是真分式，而 $\frac{x^2+1}{x^2+2}$ 是假分式。次数相等时仍然需要做除法。

除法会得到一个商（quotient）$Q(x)$ 和一个余数（remainder）$R(x)$：

$$F(x)=G(x)Q(x)+R(x).$$

因此，在 $G(x)\ne0$ 时，

$$\frac{F(x)}{G(x)}=Q(x)+\frac{R(x)}{G(x)}.$$

如果余数不为零，它的次数必须小于 $G$ 的次数。余数为零表示除法能整除。

### 例题 4 — 整理简单的分子 {#example-4--rearrange-a-simple-numerator}

**Question:** Express $\displaystyle\frac{3x+5}{x-2}$ as a constant plus a proper fraction.

把分子写成分母的倍数再加上余数：

$$3x+5=3(x-2)+11.$$

因此，

$$\boxed{\frac{3x+5}{x-2}=3+\frac{11}{x-2},\qquad x\ne2}.$$

**检查：**将答案乘以 $x-2$：$3(x-2)+11=3x+5$。

### 例题 5 — 余数定理与比较系数（comparison of coefficients） {#example-5--remainder-theorem-and-comparison-of-coefficients}

**Question:** Express $\displaystyle\frac{2x^3+3x^2-5x+4}{x+2}$ as a quadratic expression plus a proper fraction.

余数定理（remainder theorem）指出，$F(x)$ 除以 $x-a$ 时，余数为 $F(a)$。

这里 $x+2=x-(-2)$，所以余数是

$$F(-2)=2(-2)^3+3(-2)^2-5(-2)+4=10.$$

商是二次多项式。写出多项式恒等式

$$2x^3+3x^2-5x+4\equiv(x+2)(Ax^2+Bx+C)+10.$$

展开右侧并比较系数：

$$2x^3+3x^2-5x+4\equiv Ax^3+(2A+B)x^2+(2B+C)x+2C+10.$$

| 系数 | 方程 | 结果 |
|---|---|---|
| $x^3$ | $A=2$ | $A=2$ |
| $x^2$ | $2A+B=3$ | $B=-1$ |
| $x$ | $2B+C=-5$ | $C=-3$ |

常数项也符合要求：$2C+10=-6+10=4$。

$$\boxed{\frac{2x^3+3x^2-5x+4}{x+2}=2x^2-x-3+\frac{10}{x+2},\qquad x\ne-2}.$$

可以把 $-2$ 代入**多项式**，但不能代入原分式，因为原分式在该处无定义。

### 用长除法（long division）再做一次 {#the-same-example-by-long-division}

长除法会得到相同的商和余数。按降幂顺序写出各项；若缺少某次幂，也要写出系数为零的那一项。

每一步都用当前余式的首项除以除式的首项。将除式乘以这个结果，再相减。

| 当前表达式 | 下一个商项 | 减去 | 新余式 |
|---|---|---|---|
| $2x^3+3x^2-5x+4$ | $2x^2$ | $2x^2(x+2)$ | $-x^2-5x+4$ |
| $-x^2-5x+4$ | $-x$ | $-x(x+2)$ | $-3x+4$ |
| $-3x+4$ | $-3$ | $-3(x+2)$ | $10$ |

当常数余数的次数低于一次除式的次数时，停止计算。商为 $2x^2-x-3$。

**任一方法都可这样检查：**展开 $(x+2)(2x^2-x-3)+10$，得到 $2x^3+3x^2-5x+4$。

**除式是另一个一次式时：**若除式为 $kx-b$ 且 $k\ne0$，常数余数是 $F(\frac bk)$。求商的系数时仍须考虑首项系数 $k$。

### 因式定理 {#factor-theorem}

因式定理（factor theorem）指出，$ax+b$ 是多项式 $F(x)$ 的一个因式，当且仅当 $F(-\frac ba)=0$；其中 $a\ne0$。这就是余数为零时的余数定理。

例如，对于 $F(x)=2x^3+x^2-8x-4$，除式 $2x+1$ 在 $x=-\frac12$ 时为零。由于

$$F\left(-\frac12\right)=-\frac14+\frac14+4-4=0,$$

$2x+1$ 是一个因式。除法得到

$$\begin{aligned}F(x)&=(2x+1)(x^2-4)\\&=(2x+1)(x-2)(x+2).\end{aligned}$$

展开即可检查因式分解是否正确。

**常见错误：**代入 $-b$ 而不是 $-\frac ba$，这是除式为 $ax+b$ 时的常见错误。

### 例题 6 — 使用部分分式前先做除法 {#example-6--divide-before-using-partial-fractions}

**Question:** Express $\displaystyle\frac{x^2+6x-1}{(x-1)(x+2)}$ as a polynomial plus a proper fraction.

分母是 $x^2+x-2$。它与分子的次数相同，因此这是一个假分式。

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

## 练习 {#practice}

写出因式分解或除法过程。列明所有限制条件，然后先检查答案，再打开解答。

### 题目 1 — 保留原定义域 {#question-1--keep-the-original-domain}

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

### 题目 2 — 分母有公因式 {#question-2--a-shared-denominator-factor}

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

### 题目 3 — 除数也要检查 {#question-3--check-the-divisor-too}

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

### 题目 4 — 求商和余数 {#question-4--find-a-quotient-and-remainder}

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

**Follow-up:** For $P(x)=2x^3-3x^2-8x+12$, show that $2x-3$ is a factor, then factorise $P(x)$ fully.

<details markdown="1">
<summary>解答与检查</summary>

$P(\frac32)=\frac{27}{4}-\frac{27}{4}-12+12=0$。根据因式定理，$2x-3$ 是一个因式。除法得到

$$\boxed{P(x)=(2x-3)(x^2-4)=(2x-3)(x-2)(x+2).}$$

展开各因式，检查是否得到原多项式。

</details>

### 题目 5 — 二次除式 {#question-5--a-quadratic-divisor}

Express $\displaystyle\frac{x^3+2x^2+3x+4}{x^2-1}$ as a polynomial plus a proper fraction. Then express that proper fraction in partial fractions.

<details markdown="1">
<summary>提示</summary>

用除式 $x^2-1$ 做长除法。非零余数现在可能是一次式。列出部分分式时要保留商。

</details>

<details markdown="1">
<summary>解答与检查</summary>

从被除式中减去 $x(x^2-1)$，余下 $2x^2+4x+4$。再减去 $2(x^2-1)$，余下 $4x+6$。

商为 $x+2$，余数为 $4x+6$：

$$\frac{x^3+2x^2+3x+4}{x^2-1}=x+2+\frac{4x+6}{(x-1)(x+1)},\qquad x\ne1,-1.$$

对于真分式，写成

$$4x+6\equiv A(x+1)+B(x-1).$$

令 $x=1$，得到 $A=5$。令 $x=-1$，得到 $B=-1$。因此，

$$\boxed{x+2+\frac5{x-1}-\frac1{x+1},\qquad x\ne1,-1}.$$

**检查：**$5(x+1)-(x-1)=4x+6$。加上商后，得到原分子：

$$\begin{aligned}&(x^2-1)(x+2)+(4x+6)\\&\qquad=x^3+2x^2+3x+4.\end{aligned}$$

</details>

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

**学习路径：**[上一节：绝对值函数与变换](/zh/alevel/a2-mathematics/modulus-and-transformations/) · [下一节：部分分式](/zh/alevel/a2-mathematics/partial-fractions/)。
