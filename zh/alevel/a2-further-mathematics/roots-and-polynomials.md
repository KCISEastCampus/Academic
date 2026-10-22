---
title: 根与多项式
layout: subjects
mathjax: true
grade: a2
subject: a2-further-mathematics
lang: zh-CN
translation_of: /alevel/a2-further-mathematics/roots-and-polynomials/
permalink: /zh/alevel/a2-further-mathematics/roots-and-polynomials/
toc_headings: h2, h3, h4
study_page: true
---

[高等纯数学](/zh/alevel/a2-further-mathematics/) · FP2.1 根与多项式

利用多项式（polynomial）的系数了解它的根（roots），求出其余的根，包括非实数根（non-real roots），并检验答案。

- **学习：**从[方法](#method)开始，再逐一完成例题。
- **作业帮助：**选择有关[根与系数](#roots-and-coefficients)、[复数根](#complex-roots)或[实数根](#real-roots)的例题。
- **复习：**先尝试[练习](#practice)，再查看[快速参考](#quick-reference)。

教材：*International A Level Further Mathematics*，第 17 章，第 17.1–17.2 节，印刷页码 198–206。

**开始前：**复习 [AS 高等数学](/alevel/as-further-mathematics/#3-complex-numbers-fp13)中的复数。你应当掌握因式定理（factor theorem）、多项式除法、二次方程求根公式及求导。记住 $i^2=-1$。

**题目身份：**除明确标出官方原题或教学改编的题目外，本课例题与练习均为自拟教学题，不分配官方分值。

## 方法 {#method}

**学习目标：**运用根与系数的关系，建立具有指定根的方程，并在已知一个复数根时求出所有根。

方程 $f(x)=0$ 的根是一个 $x$ 值，代入后使 $f(x)$ 等于零。根据因式定理，若 $f(\alpha)=0$，则 $x-\alpha$ 是一个因式。

一个 $n$ 次多项式有 $n$ 个复数根，**重根按重数计算（counting repeated roots）**。其中部分或全部根可以是实数。例如，$(x-1)^2(x+2)=0$ 的根为 $1,1,-2$；根 $1$ 出现两次。

**先选择解题方法：**

- **要求根的和或积？**将方程按降幂排列，再比较系数。通常不需要先解出所有根。
- **要求建立具有新根的方程？**求出新根的和、各对根的乘积之和及所有根的乘积，或用新变量表示原变量后代入原方程。
- **已知一个非实数根？**使用它的共轭复数前，先确认所有系数都是实数。
- **要求判断实数根的个数？**求导，并检查驻点处的函数值。仅凭变号，只能说明某个区间内至少有一个实数根。

## 根与系数（roots and coefficients） {#roots-and-coefficients}

### 三次方程（cubic equations） {#cubic-equations}

设 $ax^3+bx^2+cx+d=0$，其中 $a\ne0$，根为 $\alpha,\beta,\gamma$。于是

$$ax^3+bx^2+cx+d=a(x-\alpha)(x-\beta)(x-\gamma).$$

展开这些因式：

$$\begin{aligned}
&a(x-\alpha)(x-\beta)(x-\gamma)\\
&\quad=ax^3-a(\alpha+\beta+\gamma)x^2\\
&\qquad+a(\alpha\beta+\beta\gamma+\gamma\alpha)x\\
&\qquad-a\alpha\beta\gamma.
\end{aligned}$$

比较系数，得到

$$\boxed{\begin{aligned}
\alpha+\beta+\gamma&=-\frac{b}{a},\\
\alpha\beta+\beta\gamma+\gamma\alpha&=\frac{c}{a},\\
\alpha\beta\gamma&=-\frac{d}{a}.
\end{aligned}}$$

这些关系对实数根与非实数根都成立。遇到重根时，每次出现都要计入。

**常见错误：**$\alpha\beta+\beta\gamma+\gamma\alpha$ 是各对根的乘积之和，不能与 $\alpha\beta\gamma$ 混淆。

### n 次多项式 {#polynomials-of-degree-n}

对于 $a_nx^n+a_{n-1}x^{n-1}+\cdots+a_1x+a_0=0$，其中 $a_n\ne0$，有

$$\boxed{\begin{aligned}
\text{sum of roots}&=-\frac{a_{n-1}}{a_n},\\
\text{product of roots}&=(-1)^n\frac{a_0}{a_n}.
\end{aligned}}$$

当 $n\ge2$ 时，各对根的乘积之和为 $\frac{a_{n-2}}{a_n}$。依次取一个、两个、三个、四个根相乘时，系数关系中的符号交替变化。所有根的乘积等于 $\frac{a_0}{a_n}$（$n$ 为偶数时），或 $-\frac{a_0}{a_n}$（$n$ 为奇数时）。

**注意缺项：**在 $2x^4-3x+5=0$ 中，$x^3$ 和 $x^2$ 的系数都是零。因此，根的和以及各对根的乘积之和均为零；四个根的乘积为 $\frac{5}{2}$。

### 例 1：不解方程，直接利用系数 {#example-1--find-information-without-solving}

The roots of $2x^3-3x^2-8x+12=0$ are $\alpha,\beta,\gamma$. Find their sum, their product and $\alpha^2+\beta^2+\gamma^2$.

这里 $a=2$、$b=-3$、$c=-8$、$d=12$。因此

$$\alpha+\beta+\gamma=\frac{3}{2},\qquad
\alpha\beta+\beta\gamma+\gamma\alpha=-4,\qquad
\alpha\beta\gamma=-6.$$

展开根的和的平方：

$$\alpha^2+\beta^2+\gamma^2
=(\alpha+\beta+\gamma)^2-2(\alpha\beta+\beta\gamma+\gamma\alpha).$$

所以

$$\boxed{\alpha^2+\beta^2+\gamma^2=\left(\frac{3}{2}\right)^2-2(-4)=\frac{41}{4}.}$$

**检验：**该多项式可分解为 $(2x-3)(x-2)(x+2)$，根为 $\frac{3}{2},2,-2$。它们的和、积及平方和都与上面的结果相同。因式分解可用来检验，但求这些结果并不需要先分解。

### 例 2：建立具有新根的方程 {#example-2--form-an-equation-with-new-roots}

Using the roots in Example 1, find a cubic equation with roots $\alpha\beta,\beta\gamma,\gamma\alpha$.

设新根为 $u,v,w$。它们的和为

$$u+v+w=\alpha\beta+\beta\gamma+\gamma\alpha=-4.$$

各对新根的乘积之和为

$$\begin{aligned}
uv+vw+wu
&=\alpha\beta^2\gamma+\alpha\beta\gamma^2+\alpha^2\beta\gamma\\
&=\alpha\beta\gamma(\alpha+\beta+\gamma)=-6\times\frac{3}{2}=-9.
\end{aligned}$$

所有新根的乘积为

$$uvw=(\alpha\beta\gamma)^2=36.$$

所求方程为 $t^3-(u+v+w)t^2+(uv+vw+wu)t-uvw=0$，因此

$$\boxed{t^3+4t^2-9t-36=0.}$$

**检验：**新根为 $3,-4,-3$。展开 $(t-3)(t+4)(t+3)$，可得到相同的三次多项式。使用 $t$ 这样的新变量，可以区分新方程与原方程。

## 复数根 {#complex-roots}

### 共轭复数根（complex conjugate pairs） {#complex-conjugate-pairs}

若多项式的**所有系数均为实数**，且 $p+qi$ 是一个非实数根，则 $p-qi$ 也是根。其中 $p,q$ 为实数，且 $q\ne0$。这两个根构成一对**共轭复数根**。

为什么？对于实系数多项式，对 $f(z)$ 取共轭后得到 $f(\overline z)$。若 $f(z)=0$，则 $f(\overline z)=\overline0=0$ 也成立。

对应的两个一次因式相乘，可得到一个实系数二次多项式：

$$\begin{aligned}
&[z-(p+qi)][z-(p-qi)]\\
&\quad=[(z-p)-qi][(z-p)+qi]\\
&\quad=(z-p)^2+q^2\\
&\quad=z^2-2pz+p^2+q^2.
\end{aligned}$$

**常见错误：**常数项是 $p^2+q^2$，而不是 $p^2-q^2$，因为 $i^2=-1$。

### 例 3：求三次方程的其余根 {#example-3--find-the-other-roots-of-a-cubic}

Show that $1+2i$ is a root of $f(z)=z^3-5z^2+11z-15$. Hence solve $f(z)=0$.

先计算

$$(1+2i)^2=-3+4i,\qquad (1+2i)^3=-11-2i.$$

代入，得到

$$f(1+2i)=(-11-2i)-5(-3+4i)+11(1+2i)-15=0.$$

所有系数都是实数，所以 $1-2i$ 也是根。这两个根对应的因式为

$$[z-(1+2i)][z-(1-2i)]=(z-1)^2+4=z^2-2z+5.$$

用这个二次多项式除原三次多项式，或比较系数：

$$z^3-5z^2+11z-15=(z^2-2z+5)(z-3).$$

因此

$$\boxed{z=1+2i,\quad 1-2i,\quad 3.}$$

**检验：**根的和为 $5$，各对根的乘积之和为 $11$，所有根的乘积为 $15$。答案应列出全部三个根。

### 例 4：含未知系数的四次多项式 {#example-4--a-quartic-with-an-unknown-coefficient}

The polynomial $f(z)=z^4-6z^3+kz^2-18z+10$, where $k$ is real, has a root $1+i$. Find $k$ and all the other roots.

由于 $(1+i)^2=2i$、$(1+i)^3=-2+2i$、$(1+i)^4=-4$，有

$$\begin{aligned}
f(1+i)&=-4-6(-2+2i)+2ki-18(1+i)+10\\
&=(2k-30)i=0.
\end{aligned}$$

因此 $k=15$。所有系数均为实数，所以 $1-i$ 也是根。这对根给出因式 $z^2-2z+2$，多项式除法得到

$$z^4-6z^3+15z^2-18z+10=(z^2-2z+2)(z^2-4z+5).$$

解剩下的二次方程：

$$z=\frac{4\pm\sqrt{16-20}}{2}=2\pm i.$$

全部四个根为

$$\boxed{1+i,\quad 1-i,\quad 2+i,\quad 2-i.}$$

**检验：**根的和为 $6$，所有根的乘积为 $(1^2+1^2)(2^2+1^2)=10$。展开两个二次因式，可以检验包括 $k$ 在内的每一个系数。

### 例 5：系数不全为实数时 {#example-5--when-the-coefficients-are-not-all-real}

The equation $z^2-(3+i)z+2+2i=0$ has a root $1+i$. Find the other root.

$z$ 的系数不是实数，所以不能直接断定 $1-i$ 也是根。两个根的和为 $3+i$。若另一个根为 $\beta$，则

$$(1+i)+\beta=3+i,\qquad \boxed{\beta=2.}$$

**检验：**$(1+i)\times2=2+2i$，与常数项一致。这两个根并不构成共轭复数对。

## 实数根（real roots） {#real-roots}

实系数三次多项式至少有一个实数根。其余两个根可以都是实数，也可以是一对非实数的共轭复数。

要判断实数根的个数，先求导：

- 若 $f^{\prime}(x)$ 恒正或恒负，则三次函数严格递增或严格递减，恰有一个实数根。
- 若有两个驻点（stationary points），且两处函数值异号，则有三个不同的实数根。
- 若两个驻点处的函数值均为正，或均为负，则恰有一个实数根。
- 若有两个驻点，且其中一处函数值为零，则存在一个二重根（double root）。使用根与系数的关系时，应将它计入两次。

若只有一个驻点，应检查其类型。例如，$f(x)=x^3$ 在零点处有水平拐点（stationary point of inflection），零是它的三重根（triple root）。

### 例 6：确定实数根及两个复数根实部（real part）的范围 {#example-6--bound-a-real-root-and-the-real-parts-of-two-complex-roots}

Let $f(x)=x^3-3x^2+4x-5$.

**1. Show that there is exactly one real root.**

$$f^{\prime}(x)=3x^2-6x+4=3(x-1)^2+1>0$$

对每一个实数 $x$ 都成立。因此该三次函数严格递增；两端的函数值分别趋于相反方向的无穷，所以图像恰好与 $x$ 轴相交一次。

**2. Find an interval containing the real root $\alpha$.**

$$f(2)=-1,\qquad f(3)=7.$$

多项式连续，且两端函数值变号，因此 $2<\alpha<3$。

**3. Bound the real parts of the non-real roots.**

将其余两个根写为 $p+qi$ 和 $p-qi$，其中 $p,q$ 为实数，且 $q\ne0$。三个根的和为 $3$，因此

$$\alpha+(p+qi)+(p-qi)=3,\qquad p=\frac{3-\alpha}{2}.$$

利用 $2<\alpha<3$，得到

$$\boxed{0<p<\frac{1}{2}.}$$

**检查推理：**变号帮助确定根的位置；导数说明它是唯一的实数根。完成这两步，才能断定其余两个根是非实数。

## 练习 {#practice}

先在纸上独立尝试。需要时再展开提示，完成后利用解答逐步检验。

第 1–6 题是自拟题，没有官方分值。第 7 题是所提供教材收录的 AQA 原题，来自另一项考试资格，并非 OxfordAQA FM03 试卷。

### 第 1 题：系数与平方和 {#question-1--coefficients-and-sums-of-squares}

The roots of $3x^3+6x^2-9x-12=0$ are $\alpha,\beta,\gamma$. Find their sum, their product and $\alpha^2+\beta^2+\gamma^2$.

<details markdown="1">
<summary>提示</summary>

每个分母中都要保留最高次项系数 $3$。展开 $(\alpha+\beta+\gamma)^2$。

</details>

<details markdown="1">
<summary>解答与检验</summary>

根的和为 $-2$，各对根的乘积之和为 $-3$，所有根的乘积为 $4$。

$$\boxed{\alpha^2+\beta^2+\gamma^2=(-2)^2-2(-3)=10.}$$

将方程除以 $3$，得到 $x^3+2x^2-3x-4=0$，可核对相同的三个系数比值。

</details>

### 第 2 题：五次多项式 {#question-2--a-polynomial-of-degree-five}

Let $f(x)=2x^5-3x^4+4x^3-x+8$. Show that $-1$ is a root. Find the sum and product of the other four roots, counting repeated roots.

<details markdown="1">
<summary>提示</summary>

先求全部五个根的和与积。从根的和中减去已知根，用所有根的乘积除以已知根。

</details>

<details markdown="1">
<summary>解答与检验</summary>

$$f(-1)=-2-3-4+1+8=0.$$

全部根的和为 $\frac{3}{2}$，积为 $(-1)^5\frac{8}{2}=-4$。因此，其余四个根的和与积为

$$\boxed{\text{sum}=\frac{5}{2},\qquad \text{product}=4.}$$

多项式除法得到 $f(x)=(x+1)(2x^4-5x^3+9x^2-9x+8)$。四次多项式的根的和为 $\frac{5}{2}$，积为 $\frac{8}{2}=4$，与两个答案一致。

</details>

### 第 3 题：将每个根平移 {#question-3--shift-each-root}

The roots of $x^3-2x^2-x+2=0$ are $\alpha,\beta,\gamma$. Find a cubic equation with roots $\alpha+1,\beta+1,\gamma+1$.

<details markdown="1">
<summary>提示</summary>

令 $t=x+1$，将 $x=t-1$ 代入原方程。

</details>

<details markdown="1">
<summary>解答与检验</summary>

$$(t-1)^3-2(t-1)^2-(t-1)+2=0$$

整理得到

$$\boxed{t^3-5t^2+6t=0.}$$

原方程可分解为 $(x-2)(x-1)(x+1)=0$。每个根加上 $1$ 后得到 $3,2,0$，与 $t(t-2)(t-3)=0$ 一致。

</details>

### 第 4 题：求四次方程的所有根 {#question-4--find-all-roots-of-a-quartic}

Given that $1+i$ is a root of $z^4-8z^3+31z^2-46z+34=0$, find the other roots.

<details markdown="1">
<summary>提示</summary>

所有系数都是实数。利用共轭根建立因式 $z^2-2z+2$，再进行多项式除法。

</details>

<details markdown="1">
<summary>解答与检验</summary>

$1-i$ 也是根。多项式除法得到

$$z^4-8z^3+31z^2-46z+34=(z^2-2z+2)(z^2-6z+17).$$

第二个二次方程为 $(z-3)^2+8=0$，根为 $3\pm2\sqrt{2}i$。因此其余三个根为

$$\boxed{1-i,\quad 3+2\sqrt{2}i,\quad 3-2\sqrt{2}i.}$$

代入 $z=3\pm2\sqrt{2}i$，得到 $(z-3)^2+8=-8+8=0$，所以这两个值都使原多项式等于零。全部四个根的和为 $8$，所有根的乘积为 $2(9+8)=34$。展开因式还可以核对系数 $31$ 和 $-46$。

</details>

### 第 5 题：复数系数 {#question-5--a-complex-coefficient}

The equation $z^2-(4-i)z+k=0$ has a root $1+i$. Find the other root and the complex constant $k$.

<details markdown="1">
<summary>提示</summary>

利用根的和求出另一个根，再利用根的积求 $k$。这里不能使用共轭根定理。

</details>

<details markdown="1">
<summary>解答与检验</summary>

根的和为 $4-i$，所以另一个根为 $(4-i)-(1+i)=3-2i$。

$$\boxed{k=(1+i)(3-2i)=5+i.}$$

展开 $[z-(1+i)][z-(3-2i)]$，得到 $z^2-(4-i)z+5+i$，与所求结果一致。

</details>

### 第 6 题：恰有一个实数根 {#question-6--exactly-one-real-root}

Show that $x^3+3x+2=0$ has exactly one real root $\alpha$ and that $-1<\alpha<0$. Find an interval containing the real part of each non-real root.

<details markdown="1">
<summary>提示</summary>

先求导，判断实数根的个数；再利用变号及三个根的和。

</details>

<details markdown="1">
<summary>解答与检验</summary>

对于 $f(x)=x^3+3x+2$，$f^{\prime}(x)=3x^2+3>0$ 对所有实数 $x$ 成立。该三次函数严格递增，因此恰有一个实数根。

由于 $f(-1)=-2$、$f(0)=2$，根据连续性可得 $-1<\alpha<0$。

非实数根为 $p\pm qi$。它们与 $\alpha$ 的总和为零，所以 $p=-\frac{\alpha}{2}$，从而

$$\boxed{0<p<\frac{1}{2}.}$$

$\alpha$ 为负，所以实部范围为正。在共轭根相加时，虚部抵消。

</details>

### 第 7 题：AQA 原题练习 {#question-7--original-aqa-practice}

**来源：**AQA Mathematics 6360，MFP2，January 2006，原卷第 2 题。原题分值：**5 + 5 marks**。教材索引：Chapter 17, practice examination question 4, printed p. 206。[Question paper, Q2 (PDF p. 2)](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-AQA/January%202006%20QP%20-%20FP2%20AQA.PDF#page=2); [AQA mark scheme, Q2 (PDF p. 3)](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-AQA/January%202006%20MS%20-%20FP2%20AQA.PDF#page=3). 本轮已读取题干及配套评分材料（2026-10-22）；链接为 PMT 托管的 AQA 编写材料，部分原卷为压缩排版版本。

The cubic equation

$$x^3+px^2+qx+r=0$$

where $p$, $q$ and $r$ are real, has roots $\alpha$, $\beta$ and $\gamma$.

**a** Given that

$$\alpha+\beta+\gamma=4\quad\text{and}\quad\alpha^2+\beta^2+\gamma^2=20$$

find the values of $p$ and $q$. **(5 marks)**

**b** Given further that one root is $3+i$, find the value of $r$. **(5 marks)**

<details markdown="1">
<summary>提示</summary>

利用根的和求 $p$，再展开根的和的平方，求各对根的乘积之和。b 部分利用共轭根，并通过根的和求出实数根。

</details>

<details markdown="1">
<summary>解答与检验</summary>

**a** 由于 $\alpha+\beta+\gamma=-p=4$，所以 $p=-4$。另外

$$20=4^2-2(\alpha\beta+\beta\gamma+\gamma\alpha),$$

因此 $\alpha\beta+\beta\gamma+\gamma\alpha=-2$，从而 $q=-2$。

**b** 所有系数均为实数，所以 $3-i$ 也是根。第三个根为 $4-(3+i)-(3-i)=-2$。

$$\alpha\beta\gamma=(3+i)(3-i)(-2)=10(-2)=-20.$$

对三次方程，$\alpha\beta\gamma=-r$，因此

$$\boxed{p=-4,\quad q=-2,\quad r=20.}$$

**检验：**$(x+2)(x^2-6x+10)=x^3-4x^2-2x+20$。根的平方和为 $(3+i)^2+(3-i)^2+(-2)^2=20$。

这里给出的是本课编写的解答，并非官方评分细则。解答中应展示系数关系、平方恒等式、使用共轭根的理由及根的乘积计算。

**评分材料核对：**利用根的和、平方和恒等式及共轭根，得到 p = −4、q = −2、r = 20。本课解答已对照上述 AQA 评分材料检查；这些解释由本课编写，并非官方评分细则。

</details>

## 纠错与独立重试 {#diagnose-and-retry}

以下两项均为自拟教学任务，无官方分值。先写下错误原因，再看反馈；随后关闭所有解答，独立完成新任务。需要提示的任务应在稍后重新独立尝试。

**Diagnose:** A learner says that a root $1+i$ of $z^2-(2+i)z+1+i=0$ forces $1-i$ to be another root. Identify the missing condition and correct the conclusion.

<details markdown="1">
<summary>反馈</summary>

系数并非全为实数，因此不能使用共轭根定理。由根的和得 $(2+i)-(1+i)=1$；原多项式确实为 $(z-1)(z-1-i)$。

</details>

**Independent retry:** A real monic cubic has one root $2$, sum of roots $6$ and product of roots $10$. Find the other roots and the cubic, without assuming that the other roots are real.

<details markdown="1">
<summary>提示</summary>

先求其余两根的和与积，再建立它们满足的二次方程。

</details>

<details markdown="1">
<summary>重试解答与检验</summary>

其余两根的和为 $4$、积为 $5$，所以满足 $z^2-4z+5=0$。它们为 $2\pm i$；三次方程为 $z^3-6z^2+13z-10=0$，由 $(z-2)(z^2-4z+5)$ 展开得到。再检查三个系数关系。

</details>

## 快速参考 {#quick-reference}

| 任务 | 方法 | 检验 |
|---|---|---|
| 三次方程：根的和、两两乘积之和及所有根的积 | 依次为 $\displaystyle -\frac{b}{a},\ \frac{c}{a},\ -\frac{d}{a}$，对应 $ax^3+bx^2+cx+d=0$ | 注意最高次项系数及符号 |
| 根的平方和 | 将根的和平方，再减去两倍的各对根乘积之和 | 包含所有交叉项 |
| $n$ 次方程：所有根的乘积 | $\displaystyle (-1)^n\frac{a_0}{a_n}$ | 重根按重数计入；判断 $n$ 是奇数还是偶数 |
| 已知根 $p+qi$ | 实系数多项式还有根 $p-qi$ | 建立 $(z-p)^2+q^2$，再进行除法 |
| 复数系数 | 代入检验，并使用根与系数的关系 | 不能直接假设根成共轭对 |
| 实数根的个数 | 求导并检查驻点处的函数值 | 变号只能说明区间内至少有一个根 |
{: .wide-table}

**练习后：**若符号出错，重做第 1 题；若遗漏根，重做第 4 题；若对复数系数误用了共轭根定理，对比例 5 和第 5 题；若找到了根的区间却没有证明唯一性，复习例 6。

**你应当能够：**从系数读出根的和与积，建立具有新根的方程，由一个已知复数根求出所有根，并说明何时一定存在共轭根。

本课依据 [OxfordAQA 高等数学 9665 课程大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf)的 FP2.1。例 1–6 为教学例题；练习第 1–6 题为自拟题；第 7 题保留所提供教材中的 AQA 原题及分值。

**学习路径：**[返回课程目录](/zh/alevel/a2-further-mathematics/) · [下一课：数学归纳法](/zh/alevel/a2-further-mathematics/proof-by-induction/)。
