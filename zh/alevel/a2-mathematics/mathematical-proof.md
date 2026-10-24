---
title: 数学证明
layout: subjects
mathjax: true
grade: a2
subject: a2-mathematics
lang: zh-CN
translation_of: /alevel/a2-mathematics/mathematical-proof/
permalink: /zh/alevel/a2-mathematics/mathematical-proof/
toc_headings: h2, h3
reading_layout: true
study_page: true
---

[纯数学](/zh/alevel/a2-mathematics/) · MA03 的数学论证

三的平方是九，是奇数；但只检查这一个数，不能说明其他所有奇数的平方也一样。证明要说明：为什么结论对它所说的每个数都成立。如果声称“所有”都成立，那么只要找到一个允许但不成立的例子，就足以否定它。

- **学习：**从[命题与符号](#statements-and-symbols)开始，然后比较三种论证方法。
- **作业帮助：**说明假设，论证每一步，最后明确写出你证明的结论。
- **复习：**先完成[练习](#practice)，再打开解答。

范围：[OxfordAQA 9660 大纲 v5.2，Unit P2 引言，印刷 p19](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf)。本页训练数学语言、证明与反例，并衔接本单元各主题；配套教材没有单独的证明章节。
{: .lesson-meta}

<div class="lesson-notes" markdown="1">

**起点与先修：**能展开和因式分解，写出偶数 $2k$、奇数 $2k+1$（$k\in\mathbb Z$），并把有理数写成最简分数 $p/q$、$q\ne0$。回补[代数](/zh/alevel/as-mathematics/algebra/#l01)。有理数加减、乘法以及除以非零有理数仍是有理数，例如 $p/q-r/s=(ps-rq)/(qs)$，其中 $q,s\ne0$。不确定时先检验这些运算的分母，再进入反证法。完成后应能说明范围、论证每步、独立选证法或找有效反例；不是只给若干成立的数值。所有题均为自拟教学题，没有官方分值。

</div>

## 命题与符号 {#statements-and-symbols}

先读允许使用哪些数：所有实数、只有整数，还是其中一部分？这些允许的数合起来叫定义域（domain）。本页默认使用实数，限制为整数时会明确说明。一个可以判断真假的说法叫命题（statement）。例如，“$n^2$ 是偶数”并非对每个整数 $n$ 都成立。允许哪些数，会影响需要证明什么。

| 语言或符号 | 含义 | 例子 |
|---|---|---|
| $=$，等于 | 两个数值相等 | $x^2=4$ 在 $x=2$ 或 $x=-2$ 时成立 |
| $\equiv$，恒等于 | 在所有允许的取值下，两个表达式都相等 | $(x+1)^2\equiv x^2+2x+1$ |
| $P\Rightarrow Q$，推出 | 只要 $P$ 成立，$Q$ 就成立 | $x=2\Rightarrow x^2=4$ |
| $P\Leftarrow Q$，由……推出 | 只要 $Q$ 成立，$P$ 就成立 | $x^2=4\Leftarrow x=2$ |
| $P\Leftrightarrow Q$，当且仅当 | 两个方向都成立 | $x^2=4\Leftrightarrow x=2\text{ or }x=-2$ |
{: .wide-table}

在 $P\Rightarrow Q$ 中，知道 $P$ 成立就足以保证 $Q$ 成立，这叫充分条件（sufficient condition）。同时，$Q$ 是 $P$ 成立时必有的结果，这叫必要条件（necessary condition）。“必须有”不表示“单靠它就够了”。例如，$x=2$ 足以保证 $x^2=4$，但不是唯一可能的输入，因为 $x=-2$ 也可以。条件 $x^2=4$ 在 $x=2$ 时必须成立，却不能单靠它判断输入的正负。

用“因为”“所以”和“因此”等词说明每一步的依据。符号 $\therefore$ 表示“因此”。

### 先看命题覆盖什么 {#choose-an-argument}

“每个”要求论证覆盖所有允许的数；“存在”只需要找出一个符合条件的例子。要否定“所有允许值都满足 $P$”，只需“至少有一个允许值不满足 $P$”，不需要“所有值都不满足 $P$”。

对“如果 $P$，那么 $Q$”，用反证法时保留已知的起始条件 $P$，暂时假设声称的结果 $Q$ 不成立。要找反例，也必须满足 $P$ 而不满足 $Q$。如果例子连起始条件都不满足，就没有检验这个说法。

先读允许的数和已知条件。能找到不成立的情况吗？如果看来成立，能从条件出发，用代数走到结论吗？有时可以分类讨论，但这些类别必须包括所有可能。如果假设相反会推出两个不能同时成立的事实，就可以用反证法。

试数可以找到反例，也可以帮助猜测一般规律；但“没有找到失败”不等于“已经证明没有失败”。题目指定证法时，要按要求展示论证；“hence”则应真正用到前面的结果。

<section class="lesson-check" markdown="1">

### 两个论证 {#check-language}

(a) Insert $\Rightarrow$, $\Leftarrow$ or $\Leftrightarrow$ between $x=3$ and $x^2=9$ over $\mathbb R$. State which condition is sufficient and which is necessary for the other. (b) A student solves $x^2=2x$ by dividing by $x$ and concludes $x=2$. Evaluate and repair the argument.

<details markdown="1">
<summary>提示</summary>

分别检验两个方向；除法之前核对除数。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$x=3\Rightarrow x^2=9,\qquad x^2=9\not\Rightarrow x=3\quad(x=-3).$$

所以 $x=3$ 是 $x^2=9$ 的充分而非必要条件；$x^2=9$ 是 $x=3$ 的必要而非充分条件。

$$x^2=2x\Leftrightarrow x(x-2)=0\Leftrightarrow x=0\text{ or }x=2.$$

除以 x 要求 x 非零，原题未给此限制，所以漏掉 x=0。

</details>

</section>

## 直接证明（direct proof） {#direct-proof}

从题目给出的条件出发，逐步走向需要证明的结果。定义往往告诉我们要整理成什么形式：例如，要证明一个整数是奇数，就把它写成“某个整数的两倍再加一”。用字母保留一般性，才能让推理适用于每个允许的数。

<section class="worked-example" markdown="1">

### 例题 1 — 奇数的平方 {#example-1--the-square-of-an-odd-integer}

**Question:** Prove that the square of every odd integer is odd.

设 $n=2k+1$，其中 $k$ 可以是任意整数。这表示了所有奇数，包括负奇数，没有只选一个数来试。将它平方，目标是整理成“整数的两倍再加一”：

$$n^2=(2k+1)^2=4k^2+4k+1=2(2k^2+2k)+1.$$

由于 $2k^2+2k$ 是整数，最后的式子具有 $2m+1$ 的形式，其中 $m$ 是整数。这正好符合奇数的定义，因此 $n^2$ 是奇数。

**检查论证：**这个证明涵盖所有奇数，包括负奇数。只计算 $3^2=9$ 并不能证明这个命题。

</section>

## 反证法（proof by contradiction） {#proof-by-contradiction}

保留题目给出的条件，但暂时假设想证明的结果不成立。顺着这个假设推下去，直到得到两个不能同时成立的事实，这个冲突叫矛盾（contradiction）。要具体写出哪两个事实冲突；这样才能排除临时假设，说明原结论成立。不能把想证明的结论直接当作理由。

<section class="worked-example" markdown="1">

### 例题 2 — 一个无理数平方根 {#example-2--an-irrational-square-root}

**Question:** Prove that $\sqrt3$ is irrational.

假设 $\sqrt3$ 是有理数（rational number）。那么

$$\sqrt3=\frac pq,$$

其中 $p$ 和 $q$ 是没有大于 $1$ 的公因数的整数，且 $q\ne0$。能这样选择，是因为有理数的分数表示可以约成最简分数。这个选择很关键：后面如果推出它们还有公因数，就会发生矛盾。两边平方得 $p^2=3q^2$，所以 $p^2$ 能被 $3$ 整除。

还要说明为什么原来的整数也一定能被三整除。一个整数除以三，要么正好整除，要么比某个三的倍数多一，要么比某个三的倍数少一。因此任意整数属于 $3k$、$3k+1$、$3k-1$ 中一种。将后两种平方：

$$(3k\pm1)^2=3(3k^2\pm2k)+1,$$

余数都是 $1$。因此 $p^2$ 能被 $3$ 整除时，$p$ 只能属于 $3k$ 这一类。

令 $p=3r$。那么 $9r^2=3q^2$，所以 $q^2=3r^2$。用同样的论证可知，$q$ 也能被 $3$ 整除。

这样一来，$p$ 和 $q$ 有公因数 $3$，这与我们选择最简分数的假设矛盾。因此 $\sqrt3$ 是无理数（irrational number）。

**常见错误：**只写“$p$ 和 $q$ 都能被 $3$ 整除”，却没有说明这为什么构成矛盾。

</section>

## 用反例否定命题 {#disproof-by-counter-example}

说“所有允许的数都成立”，就是保证没有一个会失败。只要找到一个允许但失败的情况，这个保证就被打破了；这个例子叫反例（counter-example）。它否定的是“所有都成立”，并不是说“所有都不成立”。

<section class="worked-example" markdown="1">

### 例题 3 — 正乘积 {#example-3--a-positive-product}

**Question:** Disprove: “For all real $a$ and $b$, if $ab>0$, then $a>0$ and $b>0$.”

我们要找乘积为正、却不都是正数的情况。两个负数就可能做到。取 $a=-2$ 和 $b=-3$，它们都是允许的实数。那么 $ab=6>0$，但这两个数都是负数。起始条件成立，声称的结果却失败，因此否定了这个命题。

**常见错误：**使用超出题目范围的数值，或使用不满足假设的数值。几个成立的正数例子不能证明命题对所有实数都成立。

</section>

## 练习 {#practice}

建议用时约 **15–20 分钟**。解释每一步；不要只用代入数值检查来作答。

<section class="lesson-check" markdown="1">

### Q1 {#question-1--consecutive-integers}

Prove directly that the sum of two consecutive integers is odd.

<details markdown="1">
<summary>提示</summary>

把这两个整数写成 $n$ 和 $n+1$，其中 $n$ 是整数。

</details>

<details markdown="1">
<summary>解答与检查</summary>

两数之和是 $n+(n+1)=2n+1$。对每个整数 $n$，这个数都是奇数。

这个论证包括负整数和零，不需要另外分类讨论。

</details>

</section>

<section class="lesson-check" markdown="1">

### Q2 {#question-2--a-rational-number-plus-an-irrational-number}

Prove by contradiction that $2+\sqrt3$ is irrational. You may use the result of Example 2.

<details markdown="1">
<summary>提示</summary>

假设这个和是有理数。两边减去 $2$ 后能得到什么？

</details>

<details markdown="1">
<summary>解答与检查</summary>

假设 $2+\sqrt3=r$，其中 $r$ 是有理数。那么 $\sqrt3=r-2$ 也是有理数，因为有理数减去整数仍是有理数。这与 $\sqrt3$ 是无理数矛盾。

因此 $2+\sqrt3$ 是无理数。这个矛盾依赖例题 2 关于 $\sqrt3$ 的结论；证明过程并未把待证结论当作前提。

</details>

</section>

<section class="lesson-check" markdown="1">

### Q3 {#question-3--test-a-statement}

Disprove: “For every real $x$, $x^2\geq x$.” Is the statement true if its domain is restricted to integers?

<details markdown="1">
<summary>提示</summary>

试一个介于 $0$ 和 $1$ 之间的数。对于整数输入，考虑 $x(x-1)$。

</details>

<details markdown="1">
<summary>解答与检查</summary>

取 $x=\frac12$，则 $x^2=\frac14<\frac12=x$。因此这是实数范围内的反例。

若 $x$ 是整数，则要么 $x\leq0$，要么 $x\geq1$。两种情况下都有 $x(x-1)\geq0$，因此 $x^2\geq x$。所以把范围限制为整数后，命题成立。

这个实数反例不是整数，因此不能否定整数范围内的命题。

</details>

</section>

<section class="lesson-check" markdown="1">

### 再判断一组命题 {#check-method}

For each statement, decide whether it is true and justify your decision. Choose your own argument. (a) For every integer $n$, if $n^2$ is odd, then $n$ is odd. (b) For every non-zero real $x$, $x^2>x$. (c) If $r$ is a non-zero rational number and $t$ is irrational, then $rt$ is irrational.

<details markdown="1">
<summary>提示</summary>

对每个说法分别写：允许哪些数、已知什么、声称得到什么。不必对三个说法用同一方法。

</details>

<details markdown="1">
<summary>解答与检查</summary>

**(a)** 成立。若 $n^2$ 是奇数却 $n$ 不是奇数，因为 $n$ 是整数，可写成 $n=2k$，其中 $k$ 为整数。于是 $n^2=4k^2=2(2k^2)$ 为偶数，与假设矛盾。因此 $n$ 必是奇数。分类覆盖全部整数。

**(b)** 不成立。允许值 $x=\frac12\ne0$ 给出 $x^2=\frac14<x$，在允许范围内，却使说法失败。

**(c)** 成立。若 $rt=s$ 是有理数，则 $t=s/r$ 是有理数，因为 $r$ 是非零有理数；这与 $t$ 无理矛盾。所以 $rt$ 无理。若去掉 $r\ne0$，结论会失败；例如 $r=0$ 时乘积为零。

</details>

</section>

## 根据错误恢复 {#repair}

指出第一步无效推理，回看对应解释；关闭原解答后再做新题。写出首次答案、用过的帮助和重试是否仍需提示。

| 错误 | 恢复动作 | 新题 |
| --- | --- | --- |
| 用单向推出写等价，或除零 | 检查反过来是否成立，以及允许哪些取值；[命题与符号](#statements-and-symbols) | [条件](#repair-logic) |
| 只代入几个正整数 | 用字母表示任意整数，或覆盖所有可能的类别；[直接证明](#direct-proof) | [整数](#repair-direct) |
| 反证没有具体矛盾 | 写相反假设、指出冲突事实；[反证](#proof-by-contradiction) | [倒数](#repair-contradiction) |
| 反例不满足假设 | 分别检查允许的数、起始条件和声称的结果；[反例](#disproof-by-counter-example) | [相等](#repair-counterexample) |

<section class="lesson-check" markdown="1">

### 条件 {#repair-logic}

For real $x$, determine exactly when $\sqrt{x^2}=x$. Express your conclusion using $\Leftrightarrow$.

<details markdown="1">
<summary>提示</summary>

平方根符号表示非负的平方根。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$\sqrt{x^2}=\lvert x\rvert,\qquad\sqrt{x^2}=x\Leftrightarrow x\ge0.$$

实数全范围需包括负数情形；x=-1 时等式失败。

</details>

</section>

<section class="lesson-check" markdown="1">

### 整数 {#repair-direct}

Prove that $n(n+1)$ is even for every integer $n$.

<details markdown="1">
<summary>提示</summary>

按 n 的奇偶分两类，检查是否覆盖负数和零。

</details>

<details markdown="1">
<summary>解答与检查</summary>

若 $n=2k$，则 $n(n+1)=2[k(2k+1)]$。若 $n=2k+1$，则 $n(n+1)=2[(2k+1)(k+1)]$。其中 $k\in\mathbb Z$，方括号内均为整数，且这两类覆盖全部整数，所以乘积总是偶数。

</details>

</section>

<section class="lesson-check" markdown="1">

### 倒数 {#repair-contradiction}

Let $t$ be a non-zero irrational number. Prove that $1/t$ is irrational.

<details markdown="1">
<summary>提示</summary>

假设倒数为有理数，先判断它是否能为零。

</details>

<details markdown="1">
<summary>解答与检查</summary>

假设 $1/t=q$ 为有理数。因 $t\ne0$，$1/t\ne0$，所以 $q\ne0$。于是 $t=1/q$ 是有理数，与 $t$ 无理矛盾。因此 $1/t$ 无理。除以 $q$ 的步骤已核非零，不靠小数显示。

</details>

</section>

<section class="lesson-check" markdown="1">

### 相等 {#repair-counterexample}

Disprove: for all real $a,b$, if $a^2=b^2$, then $a=b$.

<details markdown="1">
<summary>提示</summary>

找两个不同的允许数，先核平方相等。

</details>

<details markdown="1">
<summary>解答与检查</summary>

取 $a=1$、$b=-1$。它们都是实数，且 $a^2=b^2=1$，但 $a\ne b$。给出的条件成立，但声称的结果失败，因此这个反例可以否定“对所有实数对都成立”的说法。

</details>

</section>

## 稍后回顾 {#review-later}

在另一节混合复习时，遮住方法表再完成下题；不能把看完解答后的重抄当作独立证明。

<section class="lesson-check" markdown="1">

### 一个不等式 {#review-inequality}

Decide whether each claim is true and justify your decision: (a) for every positive real $x$, $x+1/x\ge2$; (b) for every non-zero real $x$, $x+1/x\ge2$. For any true claim, state when equality holds.

<details markdown="1">
<summary>提示</summary>

从可知非负的表达式出发时，注意除法对不等号的影响。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$(x-1)^2\ge0\Rightarrow x^2+1\ge2x.$$

**(a)** $x>0$，除以 $x$ 不改变不等号，得 $x+1/x\ge2$，等号当且仅当 $x=1$。这是对任意正实数的论证。**(b)** 不成立：取 $x=-1\ne0$，左边为 $-2<2$。前面的证明除以的是正数。现在允许负数，这一步就不能对每个输入都保持不等号方向。

</details>

</section>

## 快速参考 {#quick-reference}

| 任务 | 方法 | 检查 |
|---|---|---|
| 直接证明 | 从假设出发，使用代数或已知结论 | 覆盖所有允许的取值 |
| 用反证法证明 | 假设相反命题成立，并推出不可能的结果 | 指明矛盾，并写出结论 |
| 用反例否定命题 | 给出一个不成立的允许情形 | 满足假设，但不满足结论 |
| 使用 $\Leftrightarrow$ | 分别论证两个方向 | 只证明一个推出关系还不能说明等价 |

**你应当能够：**使用数学语言进行说明，完成直接证明和反证法证明，并用反例否定命题。

**学习路径：**[上一节：向量](/zh/alevel/a2-mathematics/vectors/) · [返回纯数学主题索引](/zh/alevel/a2-mathematics/)。

**下一步：**完成[移动点全参数任务](/zh/alevel/a2-mathematics/vectors/#review-point)，并在稍后的混合复习中回到[不等式](#review-inequality)。用允许值、每步依据和结论检查自己的证明。
{: #next-step}

<details markdown="1">
<summary>来源与核验范围</summary>

范围为 9660 MA03 Unit P2 引言的数学语言、论证及证明方法。January 2024 Q12(a)（QP p26、MS p21）实读用于核对全参数成立的共同关系与三分量一致性；该题不考查反证法或反例。

**其他资格补充教学依据：**作者（Sagan）实读 AQA A-level Mathematics 7357/2，June 2023 Q10(b)(c)，QP pp16–17、MS p16。配对材料支持：反例须在允许范围内，并明确比较、使原结论失败；反证须保留原假设、否定结论、推出矛盾并作结论。MA03 范围仍由 9660 大纲确定；本页全部任务仍为自拟题，不移植 7357 分值或评价目标。

[9660 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf) · [January 2024 QP](https://aqamat.alevelclouds.com/24_01_QP_P2.pdf) / [MS](https://aqamat.alevelclouds.com/24_01_MS_P2.pdf)

其他资格：[AQA 7357/2 June 2023 QP](https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2023/june/AQA-73572-QP-JUN23.PDF) / [MS](https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2023/june/AQA-73572-MS-JUN23.PDF)

</details>
