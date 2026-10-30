---
title: 有限级数
layout: subjects
mathjax: true
grade: a2
subject: a2-further-mathematics
lang: zh-CN
translation_of: /alevel/a2-further-mathematics/finite-series/
permalink: /zh/alevel/a2-further-mathematics/finite-series/
toc_headings: "#method, #partial-fractions, #differencing, #other-starting-points, #practice, #diagnose-and-retry, #later-review, #quick-reference"
study_page: true
reading_layout: true
---

[高等纯数学](/zh/alevel/a2-further-mathematics/) · FP2.5 有限级数

无需逐项相加，也能求出级数的和。本课使用部分分式（partial fractions）与差分法（method of differences），保留相消后剩下的项。

- **学习：**从[方法](#method)开始，再逐步学习例题。
- **作业帮助：**根据需要选择[部分分式](#partial-fractions)、[差分法](#differencing)或[其他入手方法](#other-starting-points)。
- **复习：**先尝试[练习](#practice)，再使用[快速参考](#quick-reference)。

**开始前：**需要[幂和与求和符号](/zh/alevel/as-further-mathematics/series/#model)、[改变下限](/zh/alevel/as-further-mathematics/series/#lower-limits)、[部分分式比较系数](/zh/alevel/a2-mathematics/partial-fractions/#method)和[归纳步骤](/zh/alevel/a2-further-mathematics/proof-by-induction/#method)。若不会决定该减去哪些项，回补改变下限后完成例 4；若分式系数不清楚，回补后核对例 1 的恒等式。

**题目身份：**除明确标出官方原题或教学改编的题目外，本课例题与练习均为自拟教学题，不分配官方分值。

## 方法 {#method}

**学习目标：**为有限项的和选择合适的方法，展示各项如何相消，并给出求和上下限正确的公式。

下面的记号表示：从指标为 $a$ 的项开始，加上下一项，一直加到指标为 $b$ 的项：

$$\sum_{r=a}^{b}u_r=u_a+u_{a+1}+\cdots+u_b,$$

$r$ 标出正在加哪一项，称为**求和指标（summation index）**。若 $a$ 和 $b$ 是满足 $a\le b$ 的整数，则共有 $b-a+1$ 项。把这有限个项相加，就得到**有限级数（finite series）**。第一个例题会改写每一项，让其中的负分数与下一项中的正分数相消。

## 部分分式 {#partial-fractions}

<section class="worked-example" markdown="1">

### 例 1：分母指标相邻 {#example-1--consecutive-denominators}

**Question:** find

$$S_n=\sum_{r=1}^{n}\frac{1}{r(r+1)}.$$

先写出

$$\frac{1}{r(r+1)}=\frac{1}{r}-\frac{1}{r+1}.$$

要确定系数，设 $\frac1{r(r+1)}=A/r+B/(r+1)$。通分后

$$1=A(r+1)+Br=(A+B)r+A,$$

所以 $A=1$、$B=-1$。现在展开求和式：

$$\begin{aligned}
S_n
&=\left(1-\frac12\right)
 +\left(\frac12-\frac13\right)\\
&\qquad{}+\cdots
 +\left(\frac1n-\frac1{n+1}\right).
\end{aligned}$$

中间的每个分数都以正号和负号各出现一次。最后只剩下第一个带正号的项与最后一个带负号的项：

$$\boxed{S_n=1-\frac1{n+1}=\frac{n}{n+1}.}$$

**检验：**当 $n=1$ 时，原来的和为 $\frac12$，公式也给出 $\frac12$。

</section>

<section class="worked-example" markdown="1">

### 例 2：指标相差 2 {#example-2--a-gap-of-two}

**Question:** find

$$T_n=\sum_{r=1}^{n}\frac{1}{r(r+2)}.$$

在 $A/r+B/(r+2)$ 中通分，得到 $1=A(r+2)+Br$。比较系数得 $2A=1$ 和 $A+B=0$，所以

$$\frac{1}{r(r+2)}
=\frac12\left(\frac1r-\frac1{r+2}\right).$$

当 $n\ge2$ 时，将各项写成两行：

$$\begin{aligned}
2T_n
&=\left(1+\frac12+\frac13+\cdots+\frac1n\right)\\
&\quad{}-\left(\frac13+\frac14+\cdots+\frac1{n+2}\right).
\end{aligned}$$

共同的项相消，首尾各剩下两项：

$$\boxed{T_n=\frac12\left(1+\frac12-\frac1{n+1}-\frac1{n+2}\right).}$$

当 $n=1$ 时，这个公式也成立：表达式给出 $\frac12(1-\frac13)=\frac13$，符合要求。

**检验：**当 $n=2$ 时，$\frac13+\frac18=\frac{11}{24}$，与公式一致。

**常见错误：**只保留第一项与最后一项。指标偏移量为 2，因此应**在首尾各保留两项**。对于项数较少的和，若展开的相消模式出现重叠，应直接检验公式。

</section>

### 选择方法 {#choose-a-method}

| 各项的形式 | 第一步 |
|---|---|
| 等差级数（arithmetic series）或等比级数（geometric series） | 使用相应的 AS 求和公式 |
| 关于 $r$ 的多项式（polynomial） | 将原来的和拆成 $r$ 的各次幂的和 |
| 分母已因式分解的分式 | 尝试部分分式分解 |
| 形如 $v_r-v_{r+1}$ 的差 | 写出最前面几项与最后面几项 |
| 已给出公式，并要求用数学归纳法证明 | 检验初始情形，再使用 $S_{k+1}=S_k+u_{k+1}$ |

若分式能够拆成错位的项，就先改写，再用差分法求和；多项式则先考虑幂和。改写后，要展开足够多的项，使相消关系清楚可见。展示相消过程前，不要先将每个分式算成一个数。

**常见错误：**题目从其他数值开始求和，却使用从 $r=1$ 开始的求和公式。应写出真正的第一项，或减去前面一段的和。

## 差分法 {#differencing}

**差分法**也称 differencing，利用求和式中各项之间的相消关系。最简单的形式为

$$\boxed{\sum_{r=a}^{b}(v_r-v_{r+1})=v_a-v_{b+1}.}$$

注意最后的指标为 $b+1$，不是 $b$。若差为 $v_r-v_{r+2}$，则首尾各剩下两项。

<section class="worked-example" markdown="1">

### 例 3：分母含三个因式 {#example-3--three-factors-in-the-denominator}

**Question:** find

$$U_n=\sum_{r=1}^{n}\frac{2}{r(r+1)(r+2)}.$$

可以使用下面的差：

$$\begin{aligned}
\frac{2}{r(r+1)(r+2)}
&=\frac{1}{r(r+1)}-\frac{1}{(r+1)(r+2)}.
\end{aligned}$$

这是因为右边通分后的分子为 $(r+2)-r=2$。

令 $v_r=\frac{1}{r(r+1)}$。展开后能看到每个负项如何与下一项相消：

$$\begin{aligned}
U_n&=(v_1-v_2)+(v_2-v_3)+\cdots+(v_n-v_{n+1})\\
&=v_1-v_{n+1}=\frac1{1\cdot2}-\frac1{(n+1)(n+2)}.
\end{aligned}$$

因此

$$\boxed{U_n=\frac12-\frac{1}{(n+1)(n+2)}.}$$

也可以使用部分分式：

$$\frac{2}{r(r+1)(r+2)}
=\frac1r-\frac2{r+1}+\frac1{r+2}.$$

当 $n\ge2$ 时，剩下的项给出

$$U_n=1-\frac12-\frac1{n+1}+\frac1{n+2},$$

与前面的答案相同。当 $n=1$ 时，两个最终公式都给出 $\frac13$。

**检验：**当 $n=2$ 时，原来的和为 $\frac13+\frac1{12}=\frac5{12}$。

**选择较简便的方法：**写成两个分母为二次式的分式之差，有时比拆成三个分母为一次式的分式更容易看清相消关系。

</section>

## 其他入手方法 {#other-starting-points}

<section class="worked-example" markdown="1">

### 例 4：不同的求和下限 {#example-4--a-different-lower-limit}

**Question:** find

$$V_n=\sum_{r=3}^{n}(r^2+2r),\qquad n\ge3.$$

将求和式拆开，并使用标准公式：

$$\begin{aligned}
\sum_{r=1}^{n}r&=\frac{n(n+1)}2,\\
\sum_{r=1}^{n}r^2&=\frac{n(n+1)(2n+1)}6.
\end{aligned}$$

从 $r=1$ 开始的和为

$$\begin{aligned}
\sum_{r=1}^{n}(r^2+2r)
&=\frac{n(n+1)(2n+1)}6+n(n+1)\\
&=\frac{n(n+1)(2n+7)}6.
\end{aligned}$$

减去 $r=1$ 和 $r=2$ 时的项，它们分别为 $3$ 和 $8$：

$$\boxed{V_n=\frac{n(n+1)(2n+7)}6-11.}$$

**检验：**当 $n=3$ 时，只有一项，即 $9+6=15$。公式给出 $\frac{3(4)(13)}6-11=15$。

**常见错误：**求和符号内的常数，每一项都要计算一次。这里 $\sum_{r=3}^{n}c=(n-2)c$，而不是 $c$。

</section>

<section class="worked-example" markdown="1">

### 用数学归纳法证明求和公式 {#proving-a-sum-by-induction}

若题目要求**用数学归纳法证明**，仅展示相消过程并不满足要求。例 1 的数学归纳法证明如下：

**初始情形（initial case）：**$S_1=\frac12=\frac1{1+1}$。

**假设（assumption）：**假设公式在 $n=k$ 时成立，其中 $k$ 为满足 $k\ge1$ 的任意整数。于是 $S_k=\frac{k}{k+1}$。

**归纳步骤（inductive step）：**

$$\begin{aligned}
S_{k+1}
&=S_k+\frac1{(k+1)(k+2)}\\
&=\frac{k}{k+1}+\frac1{(k+1)(k+2)}\\
&=\frac{k(k+2)+1}{(k+1)(k+2)}\\
&=\frac{(k+1)^2}{(k+1)(k+2)}\\
&=\frac{k+1}{k+2}.
\end{aligned}$$

这就是 $n=k+1$ 时的公式。公式在 $n=1$ 时成立。若在 $n=k$ 时成立，则在 $n=k+1$ 时也成立。因此，由数学归纳法，$S_n=\frac{n}{n+1}$ 对所有整数 $n\ge1$ 都成立。

</section>

## 练习 {#practice}

先根据每个和的结构选择方法，并说明理由；若使用相消，写出全部剩余端项。第 4 题与官方第 5 题仍须遵守各自指定的方法。

第 1–4 题为自拟练习题。第 5 题是所提供教材中转载的 AQA 原题。

<section class="lesson-check" markdown="1">

### 第 1 题：比较两个和 {#question-1--odd-denominators}

**a** Find, for integers $n\ge1$,

$$\sum_{r=1}^{n}\frac1{(2r-1)(2r+1)}.$$

**b** Find, for integers $n\ge3$,

$$\sum_{r=3}^{n}(2r-1)^2.$$

For each sum, state your chosen method and explain why it fits the terms. Check the smallest allowed value of $n$.

<details markdown="1">
<summary>提示</summary>

使用 $\frac12\left(\frac1{2r-1}-\frac1{2r+1}\right)$。 b 小题先展开平方，再判断哪些标准幂和可用。

</details>

<details markdown="1">
<summary>解答与检验</summary>

部分分式分解得到

$$\begin{aligned}
&\frac1{(2r-1)(2r+1)}\\
&\qquad=\frac12\left(\frac1{2r-1}-\frac1{2r+1}\right).
\end{aligned}$$

原来的和变为

$$\begin{aligned}
&\frac12\bigg[\left(1-\frac13\right)
+\left(\frac13-\frac15\right)\\
&\qquad{}+\cdots+\left(\frac1{2n-1}-\frac1{2n+1}\right)\bigg].
\end{aligned}$$

相消后，

$$\boxed{\frac12\left(1-\frac1{2n+1}\right)=\frac{n}{2n+1}.}$$

**a 检验：**当 $n=1$ 时，原式和公式均为 $\frac13$；当 $n=2$ 时，$\frac13+\frac1{15}=\frac25$。

**b** 展开后为多项式，使用幂和能直接组合结果，无需分式分解。先从 $r=1$ 求和，再减去 $r=1,2$ 两项：

$$\begin{aligned}
\sum_{r=3}^n(2r-1)^2
&=4\sum_{r=1}^n r^2-4\sum_{r=1}^n r+\sum_{r=1}^n1-(1+9)\\
&=\frac{2n(n+1)(2n+1)}3-2n(n+1)+n-10\\
&=\boxed{\frac{n(4n^2-1)}3-10},\qquad n\ge3.
\end{aligned}$$

当 $n=3$ 时，原和只有 $5^2=25$，公式给出 $35-10=25$。a 小题用部分分式产生错位抵消；b 小题用展开后的幂和。其他方法若推理完整也成立。若未说明为何适用，补上结构理由后再做[后续回顾](#later-review)；若减错项，回补[改变下限](/zh/alevel/as-further-mathematics/series/#lower-limits)。

</details>

</section>

<section class="lesson-check" markdown="1">

### 第 2 题：从 r = 2 开始 {#question-2--start-at-r--2}

Find, for integers $n\ge2$,

$$\sum_{r=2}^{n}\frac1{r^2-1}.$$

<details markdown="1">
<summary>提示</summary>

对 $r^2-1$ 作因式分解。部分分式中的指标偏移量为 2。

</details>

<details markdown="1">
<summary>解答与检验</summary>

$$\frac1{r^2-1}=\frac12\left(\frac1{r-1}-\frac1{r+1}\right).$$

当 $n\ge3$ 时，相消后剩下

$$\boxed{\frac12\left(1+\frac12-\frac1n-\frac1{n+1}\right).}$$

当 $n=2$ 时，同一个表达式给出 $\frac13$，因此公式对每个整数 $n\ge2$ 都成立。

**检验：**第一项为 $\frac1{2^2-1}=\frac13$。若从 $r=1$ 开始，分母就会为零。

</details>

</section>

<section class="lesson-check" markdown="1">

### 第 3 题：较短区间上的和 {#question-3--a-sum-over-a-shorter-interval}

Find

$$\sum_{r=5}^{12}\frac1{r(r+1)(r+2)}.$$

<details markdown="1">
<summary>提示</summary>

使用例 3 中差式的一半。保留 $r=5$ 和 $r=13$ 时的项。

</details>

<details markdown="1">
<summary>解答与检验</summary>

$$\begin{aligned}
&\frac1{r(r+1)(r+2)}\\
&\qquad=\frac12\left[\frac1{r(r+1)}-\frac1{(r+1)(r+2)}\right].
\end{aligned}$$

相消后，和为

$$\boxed{\frac12\left(\frac1{5\cdot6}-\frac1{13\cdot14}\right)
=\frac{19}{1365}.}$$

**检验：**剩下的两个分数都为正，且第一个较大，因此答案为正。

</details>

</section>

<section class="lesson-check" markdown="1">

### 第 4 题：用数学归纳法证明求和公式 {#question-4--prove-a-sum-by-induction}

Prove that, for all integers $n\ge1$,

$$\sum_{r=1}^{n}\frac{2r+1}{r^2(r+1)^2}
=1-\frac1{(n+1)^2}.$$

<details markdown="1">
<summary>提示</summary>

利用 $\frac{2r+1}{r^2(r+1)^2}=\frac1{r^2}-\frac1{(r+1)^2}$ 化简归纳步骤。仍须写出初始情形与结论。

</details>

<details markdown="1">
<summary>解答与检验</summary>

当 $n=1$ 时，左边为 $\frac34$，右边为 $1-\frac14=\frac34$。

假设公式在 $n=k$ 时成立，其中 $k$ 为满足 $k\ge1$ 的任意整数。于是 $S_k=1-\frac1{(k+1)^2}$。加上下一项，得到

$$\begin{aligned}
&S_{k+1}\\
&\quad=1-\frac1{(k+1)^2}\\
&\qquad{}+\frac{2k+3}{(k+1)^2(k+2)^2}\\
&\quad=1-\frac1{(k+1)^2}\\
&\qquad{}+\frac1{(k+1)^2}-\frac1{(k+2)^2}\\
&\quad=1-\frac1{(k+2)^2}.
\end{aligned}$$

这就是 $n=k+1$ 时的公式。公式在 $n=1$ 时成立。若在 $n=k$ 时成立，则在 $n=k+1$ 时也成立。因此，由数学归纳法，公式对所有整数 $n\ge1$ 都成立。

**检验：**当 $n=2$ 时，两项分别为 $\frac34$ 和 $\frac5{36}$。它们的和为 $\frac89$，等于 $1-\frac19$。

</details>

</section>

<section class="lesson-check" markdown="1">

### 第 5 题：AQA 原题练习 {#question-5--original-aqa-practice}

**来源：**AQA Mathematics 6360，MFP2，June 2010，原卷第 2 题。原题分值：**3 + 5 marks**。教材索引：Chapter 18, practice examination question 6, printed p. 218。[Question paper, Q2 (PDF p. 3)](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-AQA/June%202010%20QP%20-%20FP2%20AQA.PDF#page=3); [AQA mark scheme, Q2 (PDF p. 4)](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-AQA/June%202010%20MS%20-%20FP2%20AQA.PDF#page=4). 本次重新读取题干及配套评分材料（2026-10-23）；链接为 PMT 托管的 AQA 编写材料，部分原卷为压缩排版版本。

**a** Express

$$\frac1{r(r+2)}$$

in partial fractions. **(3 marks)**

**b** Use the method of differences to find

$$\sum_{r=1}^{48}\frac1{r(r+2)},$$

giving your answer as a rational number. **(5 marks)**

<details markdown="1">
<summary>提示</summary>

使用例 2。相消后，首尾各保留两项，并用精确分数表示答案。

</details>

<details markdown="1">
<summary>详细解答与检验</summary>

**a** 设

$$\frac1{r(r+2)}=\frac{A}{r}+\frac{B}{r+2}.$$

两边乘以 $r(r+2)$，得 $1=A(r+2)+Br$。比较系数（comparing coefficients），得 $2A=1$ 和 $A+B=0$。因此 $A=\frac12$，$B=-\frac12$。

**b** 代入部分分式，得

$$\begin{aligned}
\sum_{r=1}^{48}\frac1{r(r+2)}
&=\frac12\sum_{r=1}^{48}\left(\frac1r-\frac1{r+2}\right)\\
&=\frac12\biggl[\left(1-\frac13\right)+\left(\frac12-\frac14\right)\\
&\qquad+\left(\frac13-\frac15\right)+\cdots+\left(\frac1{48}-\frac1{50}\right)\biggr].
\end{aligned}$$

分母从 $3$ 到 $48$ 的每个正分式，都与对应的负分式成对抵消；例如，第一对中的 $-\frac13$ 与第三对中的 $+\frac13$ 抵消。最后只剩正项 $1$、$\frac12$ 和负项 $-\frac1{49}$、$-\frac1{50}$。因此

$$\sum_{r=1}^{48}\frac1{r(r+2)}
=\frac12\left(1+\frac12-\frac1{49}-\frac1{50}\right)
=\boxed{\frac{3576}{4900}=\frac{894}{1225}}.$$

**检验：**精确答案略小于 $\frac34$，因为最后减去的两个分数都是较小的正数。

这是本站编写的详细解答，并非官方评分细则。

**评分材料核对：**部分分式的系数为 1/2 和 −1/2。须展示相消过程、保留首尾各两项，并化简为 894/1225。本课解答已对照上述 AQA 评分材料检查；这些解释由本课编写，并非官方评分细则。

</details>

</section>

## 纠错与独立重试 {#diagnose-and-retry}

以下诊断、重试和逆向任务均为自拟教学任务，无官方分值。先写下错误原因，再看反馈；随后关闭所有解答，独立完成新任务。需要提示的任务应在稍后重新独立尝试。

<section class="lesson-check" markdown="1">

**Diagnose:** For Example 2, a learner keeps only

$$\frac12(1-\frac1{n+2})$$

. Which uncancelled terms have been lost?

<details markdown="1">
<summary>反馈</summary>

指标偏移量为二，遗漏的部分为

$$\frac12(\frac12-\frac1{n+1})$$

。只有一项时应直接核对，不能依赖首尾重叠的相消图。

</details>

</section>

<section class="lesson-check" markdown="1">

### 独立重试 {#boundary-retry}

自拟题。先回看[移位抵消](#example-2--a-gap-of-two)，再关闭示范和反馈完成。

Find, for all integers $n\ge2$,

$$W_n=\sum_{r=2}^{n}\frac3{r(r+3)}.$$

Show the uncancelled terms at both ends and check the shortest allowed sum.

<details markdown="1">
<summary>提示</summary>

先通分验证 $1/r-1/(r+3)$；两行的分母分别从哪里开始、到哪里结束？

</details>

<details markdown="1">
<summary>重试解答与检验</summary>

$$\frac3{r(r+3)}=\frac1r-\frac1{r+3}.$$

对于 $n\ge4$，两行是

$$\begin{aligned}
W_n&=\left(\frac12+\frac13+\frac14+\cdots+\frac1n\right)\\
&\quad-\left(\frac15+\frac16+\cdots+\frac1{n+3}\right)\\
&=\boxed{\frac12+\frac13+\frac14-\frac1{n+1}-\frac1{n+2}-\frac1{n+3}}.
\end{aligned}$$

首尾各保留三项。$n=2$ 时，公式中 $1/3$、$1/4$ 相消，得到 $1/2-1/5=3/10$，等于原来的单项；$n=3$ 时给出 $1/2+1/3-1/5-1/6=7/15=3/10+1/6$。所以公式对全部指定整数成立。若仍只留一项，重新标出两行的完整指标范围，再检查首尾各三项。

</details>

</section>

<section class="lesson-check" markdown="1">

### 逆向任务 {#reverse-task}

原来的逆向自拟题保留，用来连接部分和与通项；它不代替端项重试。

**Independent task:** A series has partial sums

$$S_n=\frac{n}{n+1}$$

 for integers $n\ge1$, and $S_0=0$. Recover its general term and verify the first term.

<details markdown="1">
<summary>提示</summary>

单项等于相邻两个部分和的增量。

</details>

<details markdown="1">
<summary>重试解答与检验</summary>

对于 $n\ge1$，

$$u_n=S_n-S_{n-1}=\frac{n}{n+1}-\frac{n-1}{n}=\frac1{n(n+1)}$$

。当 $n=1$ 时，

$$u_1=\frac12=S_1-S_0$$

。将这些增量相加，能恢复给定的部分和。

</details>

</section>

## 学过收敛后回顾 {#later-review}

完成下一课[收敛与部分和](/zh/alevel/a2-further-mathematics/series-and-limits/#convergence)后，不看本页例题完成下面的自拟题。先写选法及理由，再求有限和，最后才能求无穷和。

<section class="lesson-check" markdown="1">

Find $S_n=\sum_{r=3}^n\frac1{r(r+2)}$ for integers $n\ge3$. Hence determine whether $\sum_{r=3}^{\infty}\frac1{r(r+2)}$ converges, and find its sum if it does.

<details markdown="1">
<summary>提示</summary>

用通项的分母结构选择改写；收敛应由部分和的极限判断。

</details>

<details markdown="1">
<summary>解答与恢复</summary>

部分分式产生移位抵消，比逐项计算更适合符号上限：

$$\begin{aligned}
\frac1{r(r+2)}&=\frac12\left(\frac1r-\frac1{r+2}\right),\\
S_n&=\frac12\left[\left(\frac13-\frac15\right)+\cdots+\left(\frac1n-\frac1{n+2}\right)\right]\\
&=\frac12\left(\frac13+\frac14-\frac1{n+1}-\frac1{n+2}\right),\\
\lim_{n\to\infty}S_n&=\frac12\left(\frac13+\frac14\right)=\boxed{\frac7{24}}.
\end{aligned}$$

在 $n=3$ 时，中间的 $1/4$ 抵消，给出 $1/15$，与原来的单项相符。有限部分和趋于有限值才证明该级数收敛；只说通项趋零不足。端项错误回到[端项重试](#boundary-retry)，收敛理由错误回到下一课的收敛定义，再关闭答案重新解释。

</details>

</section>

## 快速参考 {#quick-reference}

| 任务 | 方法 | 检查要点 |
|---|---|---|
| 相邻指标的差 | $\displaystyle \sum_{r=a}^{b}(v_r-v_{r+1})=v_a-v_{b+1}$ | 最后的指标为 $b+1$ |
| 指标偏移量为 2 | 首尾各保留两项 | 对于较短的和，若各项出现重叠，应直接检验 |
| 下限 $a>1$ | 先求出求和至 $a-1$ 的和，再将它从求和至 $b$ 的和中减去 | 只减去 $a$ 之前的各项 |
| 幂的和 | $\displaystyle \sum r=\frac{n(n+1)}2$；$\displaystyle \sum r^2=\frac{n(n+1)(2n+1)}6$；$\displaystyle \sum r^3=\frac{n^2(n+1)^2}4$ | 这些公式从 $r=1$ 开始，到 $r=n$ 结束 |
| 数学归纳法证明 | 将 $u_{k+1}$ 加到假设中的 $S_k$ 上 | 包含初始情形与完整结论 |
{: .wide-table}

**练习后：**若漏掉因子 $\frac12$，重做第 1 题。若保留的项太少，重做第 2 题。若最后的分母错误，重做第 3 题。若题目要求归纳法证明，而你只使用了相消法，重做第 4 题。

**你应能够：**选择合适的方法，展示相消过程，处理不同的求和下限，并给出精确的和。

教材：*International A Level Further Mathematics*，第 18 章第 18.2 节，印刷页码 215–216；复习题与考试练习题见第 217–218 页。
{: .lesson-meta}

本课依据 [OxfordAQA Further Mathematics 9665 课程大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf)中的 FP2.5。例题为教学材料。第 5 题保留了所提供教材中的 AQA 原题与分值。

**学后下一步：**先关闭本章答案，完成课程入口的[跨主题综合任务](/zh/alevel/a2-further-mathematics/#mixed-review)；按入口规定的间隔再做[延后回顾任务](/zh/alevel/a2-further-mathematics/#later-review)。保留独立作答，按目标核对；需要提示的目标再回对应回补段后重试。

**学习路径：**[上一课：数学归纳法](/zh/alevel/a2-further-mathematics/proof-by-induction/) · [返回课程](/zh/alevel/a2-further-mathematics/) · [下一课：级数与极限](/zh/alevel/a2-further-mathematics/series-and-limits/)。

{% include exam_topic_practice.html %}
