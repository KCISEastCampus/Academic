---
title: 有限级数
layout: subjects
mathjax: true
grade: a2
subject: a2-further-mathematics
lang: zh-CN
translation_of: /alevel/a2-further-mathematics/finite-series/
permalink: /zh/alevel/a2-further-mathematics/finite-series/
toc_headings: h2
study_page: true
---

[高等纯数学](/zh/alevel/a2-further-mathematics/) · FP2.5 有限级数

无需逐项相加，也能求出级数的和。本课使用部分分式（partial fractions）与差分法（method of differences），保留相消后剩下的项。

- **学习：**从[方法](#method)开始，再逐步学习例题。
- **作业帮助：**根据需要选择[部分分式](#partial-fractions)、[差分法](#differencing)或[其他入手方法](#other-starting-points)。
- **复习：**先尝试[练习](#practice)，再使用[快速参考](#quick-reference)。

教材：*International A Level Further Mathematics*，第 18 章第 18.2 节，印刷页码 215–216；复习题与考试练习题见第 217–218 页。

**开始前：**复习[部分分式](/zh/alevel/a2-mathematics/partial-fractions/)与[数学归纳法（proof by induction）](/zh/alevel/a2-further-mathematics/proof-by-induction/)。应能够展开括号，并使用求和符号（summation notation）。

## 方法 {#method}

**学习目标：**为有限项的和选择合适的方法，展示各项如何相消，并给出求和上下限正确的公式。

**有限级数（finite series）**是有限个项的和。在下面的求和式中：

$$\sum_{r=a}^{b}u_r=u_a+u_{a+1}+\cdots+u_b,$$

$r$ 是求和指标（summation index）。若 $a$ 和 $b$ 是满足 $a\le b$ 的整数，则共有 $b-a+1$ 项。

### 选择方法 {#choose-a-method}

| 各项的形式 | 第一步 |
|---|---|
| 等差级数（arithmetic series）或等比级数（geometric series） | 使用相应的 AS 求和公式 |
| 关于 $r$ 的多项式（polynomial） | 将原来的和拆成 $r$ 的各次幂的和 |
| 分母已因式分解的分式 | 尝试部分分式分解 |
| 形如 $v_r-v_{r+1}$ 的差 | 写出最前面几项与最后面几项 |
| 已给出公式，并要求用数学归纳法证明 | 检验初始情形，再使用 $S_{k+1}=S_k+u_{k+1}$ |

**用部分分式改写每一项，再用差分法求和。**改写后，要展开足够多的项，使相消关系清楚可见。展示相消过程前，不要先将每个分式算成一个数。

**常见错误：**题目从其他数值开始求和，却使用从 $r=1$ 开始的求和公式。应写出真正的第一项，或减去前面一段的和。

## 部分分式 {#partial-fractions}

### 例 1：分母指标相邻 {#example-1--consecutive-denominators}

**Question:** find

$$S_n=\sum_{r=1}^{n}\frac{1}{r(r+1)}.$$

先写出

$$\frac{1}{r(r+1)}=\frac{1}{r}-\frac{1}{r+1}.$$

将右边通分即可得到这个恒等式（identity）。现在展开求和式：

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

### 例 2：指标相差 2 {#example-2--a-gap-of-two}

**Question:** find

$$T_n=\sum_{r=1}^{n}\frac{1}{r(r+2)}.$$

部分分式分解得到

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

## 差分法 {#differencing}

**差分法**也称 differencing，利用求和式中各项之间的相消关系。最简单的形式为

$$\boxed{\sum_{r=a}^{b}(v_r-v_{r+1})=v_a-v_{b+1}.}$$

注意最后的指标为 $b+1$，不是 $b$。若差为 $v_r-v_{r+2}$，则首尾各剩下两项。

### 例 3：分母含三个因式 {#example-3--three-factors-in-the-denominator}

**Question:** find

$$U_n=\sum_{r=1}^{n}\frac{2}{r(r+1)(r+2)}.$$

可以使用下面的差：

$$\begin{aligned}
\frac{2}{r(r+1)(r+2)}
&=\frac{1}{r(r+1)}-\frac{1}{(r+1)(r+2)}.
\end{aligned}$$

这是因为右边通分后的分子为 $(r+2)-r=2$。

令 $v_r=\frac{1}{r(r+1)}$。每一项为 $v_r-v_{r+1}$，所以

$$\boxed{U_n=\frac12-\frac{1}{(n+1)(n+2)}.}$$

也可以使用部分分式：

$$\frac{2}{r(r+1)(r+2)}
=\frac1r-\frac2{r+1}+\frac1{r+2}.$$

当 $n\ge2$ 时，剩下的项给出

$$U_n=1-\frac12-\frac1{n+1}+\frac1{n+2},$$

与前面的答案相同。当 $n=1$ 时，两个最终公式都给出 $\frac13$。

**检验：**当 $n=2$ 时，原来的和为 $\frac13+\frac1{12}=\frac5{12}$。

**选择较简便的方法：**写成两个分母为二次式的分式之差，有时比拆成三个分母为一次式的分式更容易看清相消关系。

## 其他入手方法 {#other-starting-points}

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

## 练习 {#practice}

第 1–3 题应展示所用的部分分式或差式，以及相消后剩下的项。第 4 题应写出完整的数学归纳法证明。

第 1–4 题为自拟练习题。第 5 题是所提供教材中转载的 AQA 原题。

### 第 1 题：奇数分母 {#question-1--odd-denominators}

Find, for integers $n\ge1$,

$$\sum_{r=1}^{n}\frac1{(2r-1)(2r+1)}.$$

<details markdown="1">
<summary>提示</summary>

使用 $\frac12\left(\frac1{2r-1}-\frac1{2r+1}\right)$。

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

**检验：**当 $n=2$ 时，$\frac13+\frac1{15}=\frac25$。

</details>

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

### 第 5 题：AQA 原题练习 {#question-5--original-aqa-practice}

**来源：**AQA MFP2，2010 年 6 月；教材将其转载为第 18 章考试练习第 6 题，印刷页码 218。保留原题措辞与分值。

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
&=\frac12\left(1+\frac12-\frac1{49}-\frac1{50}\right)\\
&=\boxed{\frac{3576}{4900}=\frac{894}{1225}}.
\end{aligned}$$

中间的项相消，是因为带正号的分式的分母从 $1$ 到 $48$，带负号的分式的分母从 $3$ 到 $50$。

**检验：**精确答案略小于 $\frac34$，因为最后减去的两个分数都是较小的正数。

这是本站编写的详细解答，并非官方评分细则。

</details>

## 快速参考 {#quick-reference}

| 任务 | 方法 | 检查要点 |
|---|---|---|
| 相邻指标的差 | $\displaystyle \sum_{r=a}^{b}(v_r-v_{r+1})=v_a-v_{b+1}$ | 最后的指标为 $b+1$ |
| 指标偏移量为 2 | 首尾各保留两项 | 对于较短的和，若各项出现重叠，应直接检验 |
| 下限 $a>1$ | 先求出求和至 $a-1$ 的和，再将它从求和至 $b$ 的和中减去 | 只减去 $a$ 之前的各项 |
| 幂的和 | $\displaystyle \sum r=\frac{n(n+1)}2$；$\displaystyle \sum r^2=\frac{n(n+1)(2n+1)}6$；$\displaystyle \sum r^3=\frac{n^2(n+1)^2}4$ | 这些公式从 $r=1$ 开始，到 $r=n$ 结束 |
| 数学归纳法证明 | 将 $u_{k+1}$ 加到假设中的 $S_k$ 上 | 包含初始情形与完整结论 |

**练习后：**若漏掉因子 $\frac12$，重做第 1 题。若保留的项太少，重做第 2 题。若最后的分母错误，重做第 3 题。若题目要求归纳法证明，而你只使用了相消法，重做第 4 题。

**你应能够：**选择合适的方法，展示相消过程，处理不同的求和下限，并给出精确的和。

本课依据 [OxfordAQA Further Mathematics 9665 课程大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf)中的 FP2.5。例题为教学材料。第 5 题保留了所提供教材中的 AQA 原题与分值。

**学习路径：**[上一课：数学归纳法](/zh/alevel/a2-further-mathematics/proof-by-induction/) · [返回课程](/zh/alevel/a2-further-mathematics/) · [下一课：级数与极限](/zh/alevel/a2-further-mathematics/series-and-limits/)。
