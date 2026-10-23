---
title: 数学归纳法
layout: subjects
mathjax: true
grade: a2
subject: a2-further-mathematics
lang: zh-CN
translation_of: /alevel/a2-further-mathematics/proof-by-induction/
permalink: /zh/alevel/a2-further-mathematics/proof-by-induction/
toc_headings: "#method, #series-and-sequences, #divisibility, #other-applications, #practice, #diagnose-and-retry, #later-review, #quick-reference"
study_page: true
reading_layout: true
---

[高等纯数学](/zh/alevel/a2-further-mathematics/) · FP2.4 数学归纳法

证明一个命题对给定范围内的每个整数都成立。本课学习如何利用 $n=k$ 时成立的假设，证明下一个情形也成立。

- **学习：**从[方法](#method)开始，再学习一份完整的证明。
- **作业帮助：**根据题型选择[级数与数列](#series-and-sequences)、[整除性](#divisibility)或[其他应用](#other-applications)。
- **复习：**先尝试[练习](#practice)，再展开解答，最后使用[快速参考](#quick-reference)。

**开始前：**按需要回补后，回来完成对应步骤：

- [求和符号与幂和](/zh/alevel/as-further-mathematics/series/#model)：能写出部分和的下一项，再做例 1。
- [指数运算](/zh/alevel/as-mathematics/algebra/#l01)与[因式分解](/zh/alevel/as-mathematics/algebra/#l03)：能拆开下一次幂并提公因式，再做整除性证明。
- [复数运算](/zh/alevel/as-further-mathematics/complex-numbers-and-roots/#model)：能用虚数单位平方处理乘积；例 4 当场列出需要的和角关系。
- [乘积求导](/zh/alevel/a2-mathematics/differentiation/#products-and-quotients)与[链式求导](/zh/alevel/a2-mathematics/differentiation/#composite-functions)：能对假设中的导数式再求一次导，回来做例 5。
- [矩阵乘法示范](/zh/alevel/as-further-mathematics/matrix-algebra/#demonstration)：能按行乘列算出每个元素，回来做例 6。

**题目身份：**除明确标出官方原题或教学改编的题目外，本课例题与练习均为自拟教学题，不分配官方分值。

## 方法 {#method}

**学习目标：**针对级数（series）、递推关系（recurrence relation）、整除性（divisibility）命题，或其他含有正整数的公式，写出完整的数学归纳法证明（proof by induction）。

检验几个数值可以帮助发现错误，但**不能**证明命题对每个整数都成立。

数学归纳法证明包含四个部分：

1. **初始情形（initial case）：**证明命题对范围内的第一个整数成立，通常是 $n=1$。
2. **假设（assumption）：**假设命题在 $n=k$ 时成立，其中 $k$ 是给定范围内的任意整数。写出 $n=k$ 时的命题。
3. **归纳步骤（inductive step）：**利用这一假设，证明命题在 $n=k+1$ 时也成立。
4. **结论（conclusion）：**说明初始情形成立，并且若命题在 $n=k$ 时成立，则在 $n=k+1$ 时也成立。由数学归纳法，得出命题对给定范围内的所有整数都成立。

$n=k$ 时成立的假设称为**归纳假设（induction hypothesis）**。你要证明的是：*若命题在 $k$ 时成立，则在 $k+1$ 时也成立*。你并没有假设命题已经对所有 $n$ 成立。

### 如何选择下一步 {#choose-the-next-step}

| 命题类型 | 归纳步骤的起点 | 要证明的内容 |
|---|---|---|
| 级数的和 | $S_{k+1}=S_k+u_{k+1}$ | 加上下一项，再得到以 $k+1$ 替换 $n$ 后的公式 |
| 递推关系 | 定义 $u_{k+1}$ 的递推规则 | 代入归纳假设中 $u_k$ 的表达式 |
| 整除性 | $k+1$ 时的表达式 | 将其写成 $k$ 时表达式的整数倍，再加上除数的一个整数倍 |
| 幂 | $A^{k+1}=A^kA$，或 $z^{k+1}=z^kz$ | 再乘一次，然后化简 |
| $n$ 阶导数（nth derivative） | 对假设中的 $k$ 阶导数求导 | 得到 $k+1$ 阶导数的公式 |

**化简前：**先写出 $k+1$ 时需要得到的公式。替换 $n$ 的**每一处**出现，包括括号内和指数中的部分。

**常见错误：**从希望得到的 $k+1$ 时的公式出发，并将它当作已成立的结果。应从已知表达式出发，再使用归纳假设。

证明应使用完整的句子。结论中要包含初始情形，以及从 $k$ 到 $k+1$ 的推理联系；不要只写“由数学归纳法得证”。若题目从 $n=2$ 开始，应检验 $n=2$，并得出命题对所有整数 $n\ge2$ 都成立的结论。

## 级数与数列 {#series-and-sequences}

<section class="worked-example" markdown="1">

### 例 1：平方和 {#example-1--a-sum-of-squares}

**Question:** prove that, for all integers $n\ge1$,

$$\sum_{r=1}^{n}r^2=\frac{n(n+1)(2n+1)}{6}.$$

**初始情形：**当 $n=1$ 时，左边为 $1$，右边为 $\frac{1(2)(3)}{6}=1$。

**假设：**假设公式在 $n=k$ 时成立，其中 $k$ 为满足 $k\ge1$ 的任意整数。于是

$$S_k=\sum_{r=1}^{k}r^2=\frac{k(k+1)(2k+1)}{6}.$$

**归纳步骤：**加上下一项 $(k+1)^2$：

$$\begin{aligned}
S_{k+1}
&=S_k+(k+1)^2\\
&=\frac{k(k+1)(2k+1)}{6}+(k+1)^2\\
&=\frac{(k+1)[k(2k+1)+6(k+1)]}{6}\\
&=\frac{(k+1)(2k^2+7k+6)}{6}\\
&=\frac{(k+1)(k+2)(2k+3)}{6}.
\end{aligned}$$

这就是 $n=k+1$ 时所需的公式，因为 $2(k+1)+1=2k+3$。

**结论：**公式在 $n=1$ 时成立。若在 $n=k$ 时成立，则在 $n=k+1$ 时也成立。因此，由数学归纳法，公式对所有整数 $n\ge1$ 都成立。

**检验：**当 $n=2$ 时，两边都等于 $5$。这检验了计算，而归纳步骤证明了普遍结论。

</section>

<section class="worked-example" markdown="1">

### 例 2：递推关系 {#example-2--a-recurrence-relation}

**Question:** a sequence is defined by

$$u_1=3,\qquad u_{n+1}=u_n+2n+1.$$

Prove that $u_n=n^2+2$ for all integers $n\ge1$.

**初始情形：**$u_1=3=1^2+2$。

**假设：**假设公式在 $n=k$ 时成立，其中 $k$ 为满足 $k\ge1$ 的任意整数。于是 $u_k=k^2+2$。

**归纳步骤：**在递推关系中取 $n=k$：

$$\begin{aligned}
u_{k+1}&=u_k+2k+1\\
&=k^2+2+2k+1\\
&=(k+1)^2+2.
\end{aligned}$$

这就是 $k+1$ 时所需的公式。

**结论：**公式在 $n=1$ 时成立。若在 $n=k$ 时成立，则在 $n=k+1$ 时也成立。因此，由数学归纳法，$u_n=n^2+2$ 对所有整数 $n\ge1$ 都成立。

**检验：**由递推关系得 $u_2=6$ 和 $u_3=11$，均与公式一致。

</section>

### 需要用到前两项时 {#when-two-previous-terms-are-needed}

若递推关系同时使用 $u_n$ 和 $u_{n+1}$ 来定义 $u_{n+2}$，就要检验**两个初始情形**。假设 $u_k$ 和 $u_{k+1}$ 都满足公式，再利用它们证明 $u_{k+2}$ 也满足公式。第 2 题练习的就是这种形式。

## 整除性 {#divisibility}

说 $u_n$ 能被 $d$ 整除，意味着 $u_n=dm$，其中 $m$ 是某个整数。

在归纳步骤中，可以尝试写成

$$u_{k+1}=a u_k+d b,$$

其中 $a$ 和 $b$ 都是整数。若 $u_k$ 能被 $d$ 整除，则右边的两项都能被 $d$ 整除。

**选择合适的 $a$ 来化简幂。**例如，若 $u_k$ 含有 $7^k$ 和 $4^k$，减去 $7u_k$ 或 $4u_k$ 就能消去其中一个幂。有时只需考虑 $u_{k+1}-u_k$。

**常见错误：**证明 $d u_{k+1}$ 能被 $d$ 整除。对任意整数 $u_{k+1}$，这一点自动成立，不能说明 $u_{k+1}$ 本身是否能被 $d$ 整除。

<section class="worked-example" markdown="1">

### 例 3：证明能被 6 整除 {#example-3--proving-divisibility-by-6}

**Question:** prove that $7^n+4^n+1$ is divisible by $6$ for all integers $n\ge1$.

设 $u_n=7^n+4^n+1$。

**初始情形：**$u_1=7+4+1=12$，能被 $6$ 整除。

**假设：**假设结论在 $n=k$ 时成立，其中 $k$ 为满足 $k\ge1$ 的任意整数。于是 $u_k$ 能被 $6$ 整除。

**归纳步骤：**

$$\begin{aligned}
u_{k+1}-u_k
&=6\cdot7^k+3\cdot4^k\\
&=6\left(7^k+2^{2k-1}\right).
\end{aligned}$$

由于 $k\ge1$，所以 $2k-1\ge1$，括号内的表达式是整数。因此 $u_{k+1}-u_k$ 能被 $6$ 整除。根据假设，$u_k$ 能被 $6$ 整除，故 $u_{k+1}$ 也能被 $6$ 整除。

**结论：**结论在 $n=1$ 时成立。若在 $n=k$ 时成立，则在 $n=k+1$ 时也成立。因此，由数学归纳法，$7^n+4^n+1$ 能被 $6$ 整除，这对所有整数 $n\ge1$ 都成立。

**检验：**$u_2=49+16+1=66$。证明整除性时，要说明提取 $6$ 后剩下的因子为什么是整数。

</section>

## 其他应用 {#other-applications}

<section class="worked-example" markdown="1">

### 例 4：棣莫弗定理（De Moivre's theorem） {#example-4--de-moivres-theorem}

**Question:** prove that, for every positive integer $n$,

$$\begin{aligned}
(\cos\theta+i\sin\theta)^n
&=\cos(n\theta)+i\sin(n\theta).
\end{aligned}$$

这里的证明适用于**正整数次幂**。定理的进一步应用将在后面的棣莫弗定理一课中学习。

**初始情形：**当 $n=1$ 时，两边均为 $\cos\theta+i\sin\theta$。

**假设：**假设公式在 $n=k$ 时成立，其中 $k$ 为满足 $k\ge1$ 的任意整数。

**归纳步骤：**记 $z=\cos\theta+i\sin\theta$。由假设，

$$\begin{aligned}
z^{k+1}
&=z^kz\\
&=[\cos(k\theta)+i\sin(k\theta)]\\
&\qquad{}\times(\cos\theta+i\sin\theta).
\end{aligned}$$

展开乘积，并利用 $i^2=-1$，得到实部（real part）

$$\begin{aligned}
&\cos(k\theta)\cos\theta-\sin(k\theta)\sin\theta\\
&\qquad=\cos((k+1)\theta),
\end{aligned}$$

以及虚部（imaginary part）

$$\begin{aligned}
&\sin(k\theta)\cos\theta+\cos(k\theta)\sin\theta\\
&\qquad=\sin((k+1)\theta).
\end{aligned}$$

这里使用的是和角公式。因此

$$z^{k+1}=\cos((k+1)\theta)+i\sin((k+1)\theta).$$

**结论：**定理在 $n=1$ 时成立。若在 $n=k$ 时成立，则在 $n=k+1$ 时也成立。因此，由数学归纳法，定理对所有正整数 $n$ 都成立。

**常见错误：**在证明棣莫弗定理时，用棣莫弗定理本身来说明乘法结果。应使用和角公式。

</section>

<section class="worked-example" markdown="1">

### 例 5：n 阶导数 {#example-5--an-nth-derivative}

**Question:** for $f(x)=e^x\sin x$, prove that, for all integers $n\ge1$,

$$f^{(n)}(x)=2^{n/2}e^x\sin\left(x+\frac{n\pi}{4}\right).$$

这里的 $f^{(n)}$ 表示 $n$ 阶导数，不是 $n$ 次幂。角度使用弧度（radian）。

**初始情形：**由乘积法则（product rule），

$$\begin{aligned}
f^{\prime}(x)&=e^x(\sin x+\cos x)\\
&=\sqrt2\,e^x\sin\left(x+\frac{\pi}{4}\right).
\end{aligned}$$

这就是 $n=1$ 时的公式，其中使用了 $\sin t+\cos t=\sqrt2\sin(t+\frac{\pi}{4})$。

**假设：**假设公式在 $n=k$ 时成立，其中 $k$ 为满足 $k\ge1$ 的任意整数。令 $\phi=x+\frac{k\pi}{4}$。

**归纳步骤：**对假设中的表达式求导。由于 $\frac{\mathrm d\phi}{\mathrm dx}=1$，

$$\begin{aligned}
f^{(k+1)}(x)
&=2^{k/2}e^x(\sin\phi+\cos\phi)\\
&=2^{(k+1)/2}e^x
  \sin\left(x+\frac{(k+1)\pi}{4}\right).
\end{aligned}$$

这就是 $k+1$ 时所需的表达式。

**结论：**公式在 $n=1$ 时成立。若在 $n=k$ 时成立，则在 $n=k+1$ 时也成立。因此，由数学归纳法，公式对所有整数 $n\ge1$ 都成立。

**检验：**求两次导数得 $f^{(2)}(x)=2e^x\cos x$，与 $2e^x\sin(x+\frac{\pi}{2})$ 一致。

</section>

<section class="worked-example" markdown="1">

### 例 6：矩阵的幂 {#example-6--a-matrix-power}

**Question:** given

$$A=\begin{pmatrix}3&2\\0&1\end{pmatrix},$$

prove that, for all integers $n\ge1$,

$$A^n=\begin{pmatrix}3^n&3^n-1\\0&1\end{pmatrix}.$$

**初始情形：**在公式中取 $n=1$，得到

$$\begin{pmatrix}3&2\\0&1\end{pmatrix}=A.$$

**假设：**假设公式在 $n=k$ 时成立，其中 $k$ 为满足 $k\ge1$ 的任意整数。

**归纳步骤：**使用矩阵乘法，而不是将对应位置的元素相乘：

$$\begin{aligned}
A^{k+1}
&=A^kA\\
&=\begin{pmatrix}3^k&3^k-1\\0&1\end{pmatrix}
  \begin{pmatrix}3&2\\0&1\end{pmatrix}\\
&=\begin{pmatrix}3^{k+1}&2\cdot3^k+3^k-1\\0&1\end{pmatrix}\\
&=\begin{pmatrix}3^{k+1}&3^{k+1}-1\\0&1\end{pmatrix}.
\end{aligned}$$

这就是 $k+1$ 时所需的矩阵。

**结论：**公式在 $n=1$ 时成立。若在 $n=k$ 时成立，则在 $n=k+1$ 时也成立。因此，由数学归纳法，公式对所有整数 $n\ge1$ 都成立。

**检验：**相乘得到

$$A^2=\begin{pmatrix}9&8\\0&1\end{pmatrix}.$$

不要将 $A$ 中的每个元素分别平方。

</section>

## 练习 {#practice}

先不看解答，尝试完成每个证明。写出初始情形、假设、归纳步骤与结论。

第 1–5 题为自拟练习题。第 6 题是所提供教材中转载的 AQA 原题。

<section class="lesson-check" markdown="1">

### 第 1 题：立方和 {#question-1--a-sum-of-cubes}

Prove that, for all integers $n\ge1$,

$$\sum_{r=1}^{n}r^3=\frac{n^2(n+1)^2}{4}.$$

<details markdown="1">
<summary>提示</summary>

将 $(k+1)^3$ 加到假设中的和上。提取 $\frac{(k+1)^2}{4}$，再对剩下的二次式作因式分解。

</details>

<details markdown="1">
<summary>解答与检验</summary>

当 $n=1$ 时，两边都等于 $1$。

假设公式在 $n=k$ 时成立，其中 $k$ 为满足 $k\ge1$ 的任意整数。于是 $S_k=\frac{k^2(k+1)^2}{4}$，所以

$$\begin{aligned}
S_{k+1}
&=S_k+(k+1)^3\\
&=\frac{k^2(k+1)^2}{4}+(k+1)^3\\
&=\frac{(k+1)^2[k^2+4(k+1)]}{4}\\
&=\frac{(k+1)^2(k+2)^2}{4}.
\end{aligned}$$

这就是 $n=k+1$ 时所需的公式。公式在 $n=1$ 时成立。若在 $n=k$ 时成立，则在 $n=k+1$ 时也成立。因此，由数学归纳法，公式对所有整数 $n\ge1$ 都成立。

**检验：**$1^3+2^3=9=\frac{2^2\cdot3^2}{4}$。

</details>

</section>

<section class="lesson-check" markdown="1">

### 第 2 题：两个初始情形 {#question-2--two-initial-cases}

A sequence has $u_1=1$, $u_2=3$ and

$$u_{n+2}=3u_{n+1}-2u_n.$$

Prove that $u_n=2^n-1$ for all integers $n\ge1$.

<details markdown="1">
<summary>提示</summary>

检验 $n=1$ 和 $n=2$。假设公式在 $k$ 和 $k+1$ 时都成立，再利用递推关系求出 $u_{k+2}$。

</details>

<details markdown="1">
<summary>解答与检验</summary>

公式给出 $2^1-1=1=u_1$ 和 $2^2-1=3=u_2$。

设 $k$ 为满足 $k\ge1$ 的任意整数。假设公式在 $n=k$ 和 $n=k+1$ 时都成立。于是 $u_k=2^k-1$ 和 $u_{k+1}=2^{k+1}-1$，所以

$$\begin{aligned}
u_{k+2}
&=3(2^{k+1}-1)-2(2^k-1)\\
&=(6-2)2^k-1\\
&=2^{k+2}-1.
\end{aligned}$$

公式在 $n=1$ 和 $n=2$ 时都成立。若在 $n=k$ 和 $n=k+1$ 时都成立，则在 $n=k+2$ 时也成立。因此，由数学归纳法，公式对所有整数 $n\ge1$ 都成立。

**检验：**$u_3=3(3)-2(1)=7=2^3-1$。

</details>

</section>

<section class="lesson-check" markdown="1">

### 第 3 题：选择合适的倍数 {#question-3--choose-a-useful-multiple}

Prove that $11^n-3^n$ is divisible by $8$ for all integers $n\ge1$.

<details markdown="1">
<summary>提示</summary>

设 $u_n=11^n-3^n$，并化简 $u_{k+1}-3u_k$。

</details>

<details markdown="1">
<summary>解答与检验</summary>

当 $n=1$ 时，$u_1=11-3=8$，能被 $8$ 整除。

假设结论在 $n=k$ 时成立，其中 $k$ 为满足 $k\ge1$ 的任意整数。于是 $u_k$ 能被 $8$ 整除，且

$$u_{k+1}-3u_k=8\cdot11^k.$$

根据假设，$u_k$ 能被 $8$ 整除。此外，$11^k$ 是整数。因此 $u_{k+1}=3u_k+8\cdot11^k$ 能被 $8$ 整除。

结论在 $n=1$ 时成立。若在 $n=k$ 时成立，则在 $n=k+1$ 时也成立。因此，由数学归纳法，$11^n-3^n$ 能被 $8$ 整除，这对所有整数 $n\ge1$ 都成立。

**检验：**$u_2=121-9=112=8(14)$。

</details>

</section>

<section class="lesson-check" markdown="1">

### 第 4 题：另一个矩阵 {#question-4--a-different-matrix}

Given

$$B=\begin{pmatrix}1&0\\5&1\end{pmatrix},$$

prove that, for all integers $n\ge1$,

$$B^n=\begin{pmatrix}1&0\\5n&1\end{pmatrix}.$$

<details markdown="1">
<summary>提示</summary>

使用 $B^{k+1}=B^kB$。左下角的元素应变为 $5(k+1)$。

</details>

<details markdown="1">
<summary>解答与检验</summary>

当 $n=1$ 时，公式给出 $B$。

假设公式在 $n=k$ 时成立，其中 $k$ 为满足 $k\ge1$ 的任意整数。于是

$$B^k=\begin{pmatrix}1&0\\5k&1\end{pmatrix}.$$

然后

$$\begin{aligned}
B^{k+1}
&=B^kB\\
&=\begin{pmatrix}1&0\\5k&1\end{pmatrix}
  \begin{pmatrix}1&0\\5&1\end{pmatrix}\\
&=\begin{pmatrix}1&0\\5(k+1)&1\end{pmatrix}.
\end{aligned}$$

这就是 $n=k+1$ 时的公式。公式在 $n=1$ 时成立。若在 $n=k$ 时成立，则在 $n=k+1$ 时也成立。因此，由数学归纳法，公式对所有整数 $n\ge1$ 都成立。

**检验：**

$$B^2=\begin{pmatrix}1&0\\10&1\end{pmatrix}.$$

</details>

</section>

<section class="lesson-check" markdown="1">

### 第 5 题：含余弦的导数 {#question-5--a-derivative-with-cosine}

For $g(x)=e^x\cos x$, prove that, for all integers $n\ge1$,

$$g^{(n)}(x)=2^{n/2}e^x\cos\left(x+\frac{n\pi}{4}\right).$$

<details markdown="1">
<summary>提示</summary>

使用 $\cos t-\sin t=\sqrt2\cos(t+\frac{\pi}{4})$。

</details>

<details markdown="1">
<summary>解答与检验</summary>

当 $n=1$ 时，

$$\begin{aligned}
g^{\prime}(x)&=e^x(\cos x-\sin x)\\
&=\sqrt2\,e^x\cos\left(x+\frac{\pi}{4}\right).
\end{aligned}$$

假设公式在 $n=k$ 时成立，其中 $k$ 为满足 $k\ge1$ 的任意整数。令 $\phi=x+\frac{k\pi}{4}$。对假设中的表达式求导，得到

$$\begin{aligned}
&g^{(k+1)}(x)\\
&\quad=2^{k/2}e^x(\cos\phi-\sin\phi)\\
&\quad=2^{(k+1)/2}e^x
  \cos\left(x+\frac{(k+1)\pi}{4}\right).
\end{aligned}$$

这就是 $n=k+1$ 时的公式。公式在 $n=1$ 时成立。若在 $n=k$ 时成立，则在 $n=k+1$ 时也成立。因此，由数学归纳法，公式对所有整数 $n\ge1$ 都成立。

**检验：**二阶导数为

$$\begin{aligned}
g^{(2)}(x)&=-2e^x\sin x\\
&=2e^x\cos\left(x+\frac{\pi}{2}\right).
\end{aligned}$$

注意这里的负号。

</details>

</section>

<section class="lesson-check" markdown="1">

### 第 6 题：AQA 原题练习 {#question-6--original-aqa-practice}

**来源：**AQA Mathematics 6360，MFP2，June 2006，原卷第 6 题。原题分值：**4 + 4 marks**。教材索引：Chapter 18, practice examination question 5, printed p. 218。[Question paper, Q6 (PDF p. 4)](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-AQA/June%202006%20QP%20-%20FP2%20AQA.PDF#page=4); [AQA mark scheme, Q6 (PDF p. 6)](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-AQA/June%202006%20MS%20-%20FP2%20AQA.PDF#page=6). 本次重新读取题干及配套评分材料（2026-10-23）；链接为 PMT 托管的 AQA 编写材料，部分原卷为压缩排版版本。

**a** The function $f$ is given by

$$f(n)=15^n-8^{n-2}.$$

Express

$$f(n+1)-8f(n)$$

in the form $k\times15^n$. **(4 marks)**

**b** Prove by induction that $15^n-8^{n-2}$ is a multiple of $7$ for all integers $n\ge2$. **(4 marks)**

<details markdown="1">
<summary>提示</summary>

a 小题中，$8$ 的幂相消。b 小题从 $n=2$ 开始，再使用 a 小题得到的恒等式（identity）。

</details>

<details markdown="1">
<summary>详细解答与检验</summary>

**a**

$$\begin{aligned}
f(n+1)-8f(n)
&=15^{n+1}-8^{n-1}\\
&\qquad{}-8(15^n-8^{n-2})\\
&=(15-8)15^n\\
&=7\times15^n.
\end{aligned}$$

因此 $k=7$。

**b 初始情形：**当 $n=2$ 时，

$$f(2)=225-1=224=7(32).$$

**假设：**假设结论在 $n=m$ 时成立，其中 $m$ 为满足 $m\ge2$ 的任意整数。于是 $f(m)$ 是 $7$ 的倍数。这里使用 $m$，以免将归纳指标与 a 小题中的系数 $k$ 混淆。

**归纳步骤：**由 a 小题得

$$f(m+1)=8f(m)+7\cdot15^m.$$

根据假设，$f(m)$ 是 $7$ 的倍数。此外，$15^m$ 是整数。因此右边的两项都是 $7$ 的倍数，故 $f(m+1)$ 是 $7$ 的倍数。

**结论：**结论在 $n=2$ 时成立。若在 $n=m$ 时成立，则在 $n=m+1$ 时也成立。因此，由数学归纳法，$15^n-8^{n-2}$ 是 $7$ 的倍数，这对所有整数 $n\ge2$ 都成立。

**检验：**$f(3)=3375-8=3367=7(481)$。不能从 $n=1$ 开始这个证明，因为此时 $8^{n-2}$ 不是整数。

这是本站编写的详细解答，并非官方评分细则。

**评分材料核对：**第 (a) 小题得到 7 × 15ⁿ。第 (b) 小题须验证 n = 2、陈述归纳假设、在归纳步中调用 (a)，并得出对所有整数 n ≥ 2 成立的结论。本课解答已对照上述 AQA 评分材料检查；这些解释由本课编写，并非官方评分细则。

</details>

</section>

## 纠错与独立重试 {#diagnose-and-retry}

以下两项均为自拟教学任务，无官方分值。先写下错误原因，再看反馈；随后关闭所有解答，独立完成新任务。需要提示的任务应在稍后重新独立尝试。

<section class="lesson-check" markdown="1">

**Diagnose:** A learner checks the first three cases and writes, “The pattern continues, so the result holds for all positive integers.” What logical step is missing?

<details markdown="1">
<summary>反馈</summary>

几个数值不能说明任意一个成立的情形都能推出下一个情形。需要对允许范围内的任意整数作归纳假设，利用它证明下一步，再与初始情形连接。

</details>

</section>

<section class="lesson-check" markdown="1">

**Independent retry:** Prove by induction, in complete English sentences, that

$$\sum_{r=1}^n r2^{r-1}=(n-1)2^n+1$$

 for all integers $n\ge1$.

<details markdown="1">
<summary>提示</summary>

在假设中的和后加上真正的下一项 $(k+1)2^k$。

</details>

<details markdown="1">
<summary>重试解答与检验</summary>

For $n=1$, both sides are $1$. Assume the formula holds for an arbitrary integer $k\ge1$. Then $S_{k+1}=(k-1)2^k+1+(k+1)2^k=k2^{k+1}+1$, the required formula at $k+1$. The initial case and this implication prove the result for all integers $n\ge1$ by induction.

</details>

</section>

## 后续调用与回顾 {#later-review}

先到[有限级数第 4 题](/zh/alevel/a2-further-mathematics/finite-series/#question-4--prove-a-sum-by-induction)，独立选择归纳假设并写出下一项。学完[麦克劳林系数](/zh/alevel/a2-further-mathematics/series-and-limits/#maclaurin-series)后，再关闭第 5 题解答，完成以下连接任务。

<section class="lesson-check" markdown="1">

**Self-written task:** Use your proved formula in Question 5 to find the coefficient of $x^4$ in the Maclaurin expansion of $g(x)=e^x\cos x$. Explain why the fourth derivative itself is not the coefficient.

<details markdown="1">
<summary>提示</summary>

先在已证明的通式中令 $n=4$，再在 $x=0$ 处求值；最后除以阶乘。

</details>

<details markdown="1">
<summary>解答与检验</summary>

$$g^{(4)}(0)=2^{4/2}e^0\cos\pi=-4,\qquad
\frac{g^{(4)}(0)}{4!}=\frac{-4}{24}=-\frac16.$$

四阶导数是 $-4$，而四次项系数是 $-\frac16$。若漏掉阶乘，回到麦克劳林系数定义后，独立重做该连接。

</details>

</section>

## 快速参考 {#quick-reference}

| 证明的部分 | 应写出的内容 |
|---|---|
| 初始情形 | 将第一个允许的整数代入两边，或检验整除性 |
| 假设 | 假设命题在 $n=k$ 时成立，其中 $k$ 为给定范围内的任意整数 |
| 归纳步骤 | 利用这一假设，准确得到 $k+1$ 时的命题 |
| 结论 | 写明初始情形、到下一个情形的推理联系，以及 $n$ 的完整范围 |
| 使用前两项的递推关系 | 检验两个初始情形；假设两个相邻情形成立，再证明下一个情形 |

**练习后：**若加错了下一项，重做第 1 题。若在使用前两项的递推关系中只检验了一个初始情形，重做第 2 题。若幂没有化简成功，比较例 3 与第 3 题。若证明从错误的整数开始，重做第 6 题。

**你应能够：**解释为什么检验几个例子并不构成证明，写出归纳假设，在下一个情形中使用它，并在结论中写明正确的范围。

教材：*International A Level Further Mathematics*，第 18 章第 18.1 节，印刷页码 208–215；复习题与考试练习题见第 217–218 页。
{: .lesson-meta}

本课依据 [OxfordAQA Further Mathematics 9665 课程大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf)中的 FP2.4。例题为教学材料。第 6 题保留了所提供教材中的 AQA 原题与分值。

[FM03 June 2024 Q7, MS PDF pp. 10–11](/assets/pdf/fx-cg50/references/oxfordaqa-fm03-2024-june-mark-scheme.pdf#page=10); [FM03 January 2025 Q5, MS PDF p. 8](/assets/pdf/fx-cg50/references/oxfordaqa-fm03-2025-january-mark-scheme.pdf#page=8). 2026-10-23 重新读取：评分证据包含正确起始情形、任意归纳假设、由假设得到下一步及覆盖完整范围的结论。

**学后下一步：**先关闭本章答案，完成课程入口的[跨主题综合任务](/zh/alevel/a2-further-mathematics/#mixed-review)；按入口规定的间隔再做[延后回顾任务](/zh/alevel/a2-further-mathematics/#later-review)。保留独立作答，按目标核对；需要提示的目标再回对应回补段后重试。

**学习路径：**[上一课：根与多项式](/zh/alevel/a2-further-mathematics/roots-and-polynomials/) · [返回课程](/zh/alevel/a2-further-mathematics/) · [下一课：有限级数](/zh/alevel/a2-further-mathematics/finite-series/)。
