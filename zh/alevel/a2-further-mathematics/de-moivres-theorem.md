---
title: 棣莫弗定理
layout: subjects
mathjax: true
grade: a2
subject: a2-further-mathematics
lang: zh-CN
translation_of: /alevel/a2-further-mathematics/de-moivres-theorem/
permalink: /zh/alevel/a2-further-mathematics/de-moivres-theorem/
toc_headings: "#method, #powers-and-proof, #complex-roots, #roots-of-unity, #trigonometric-identities, #integration, #practice, #diagnose-and-retry, #later-review, #quick-reference"
study_page: true
reading_layout: true
---

[高等纯数学](/zh/alevel/a2-further-mathematics/) · FP2.2 棣莫弗定理

本课学习求复数（complex number）的幂与根，并用同一定理证明三角恒等式（trigonometric identity）及计算积分。

- **学习：**从[方法](#method)开始，再依次学习例题。
- **作业帮助：**查看[幂与证明](#powers-and-proof)、[复数的根](#complex-roots)、[单位根](#roots-of-unity)、[三角恒等式](#trigonometric-identities)或[积分](#integration)。
- **复习：**先尝试[练习](#practice)，再展开解答，最后核对[快速参考](#quick-reference)。

教材：*International A Level Further Mathematics*，第 20 章，第 20.1–20.3 节，印刷页码 234–252；复习与练习见第 253–254 页。

**开始前：**先在 [AS 模与辐角](/zh/alevel/as-further-mathematics/complex-numbers-and-roots/#geometry)恢复象限判断，在[共轭](/zh/alevel/as-further-mathematics/complex-numbers-and-roots/#conjugate)恢复倒数运算。证明卡住时回看[归纳法的假设与归纳步](/zh/alevel/a2-further-mathematics/proof-by-induction/#method)；乘积展开回补[和差角公式](/zh/alevel/a2-mathematics/trigonometric-functions-and-formulae/#compound-angle-formulae)。积分前回补[三角积分](/zh/alevel/a2-mathematics/integration/#trigonometric-integrals)和[指数积分](/zh/alevel/a2-mathematics/integration/#exponential-logarithmic-integrals)，再回到[例 9–10](#integration)检查每项的内层系数。还需会用二项式展开。全课用**弧度**。

**题目身份：**除明确标出官方原题或教学改编的题目外，本课例题与练习均为自拟教学题，不分配官方分值。

## 方法 {#method}

**学习目标：**用棣莫弗定理（De Moivre's theorem）计算整数次幂，找出全部复数根，解释它们在阿尔冈图（Argand diagram，又称复平面图）上的位置，并用复数推导三角函数的结果。

- **求幂或倒数（reciprocal）：**先将复数写成 $r(\cos\theta+i\sin\theta)$。模取相应次幂，辐角乘以指数。
- **求解方程 $z^n=w$：**先求 $w$ 的模与辐角。先写出全部可能的辐角 $\theta+2k\pi$，再除以指数 $n$。
- **用幂次表示倍角（multiple angle）：**展开 $(\cos\theta+i\sin\theta)^n$，再取实部（real part）或虚部（imaginary part）。
- **用倍角表示 $\sin^5\theta$ 这样的幂：**使用 $z=\cos\theta+i\sin\theta$，以及含 $z$ 与 $\frac1z$ 的恒等式。

**展开前先确定方向：**$\sin5\theta$ 与 $\sin^5\theta$ 是不同的表达式。前者是 $5\theta$ 的正弦，后者是 $\sin\theta$ 的五次幂。

## 幂与证明 {#powers-and-proof}

对于每个整数 $n$，

$$\boxed{\begin{aligned}
&(\cos\theta+i\sin\theta)^n\\
&\quad=\cos n\theta+i\sin n\theta.
\end{aligned}}$$

这就是**棣莫弗定理**。若 $z=r(\cos\theta+i\sin\theta)$ 且 $r>0$，则

$$\boxed{z^n=r^n(\cos n\theta+i\sin n\theta).}$$

模为正数。辐角必须对应复数所在的正确象限（quadrant）；只知道 $\tan\theta$，并不能确定象限。

### 正整数情形的证明 {#proof-for-positive-integers}

当 $n=1$ 时，两边均为 $\cos\theta+i\sin\theta$。

假设结论在 $n=k$ 时成立，其中 $k$ 为任意正整数。于是

$$\begin{aligned}
&(\cos\theta+i\sin\theta)^{k+1}\\
&\quad=(\cos k\theta+i\sin k\theta)
       (\cos\theta+i\sin\theta).
\end{aligned}$$

乘积的实部为

$$\cos k\theta\cos\theta-\sin k\theta\sin\theta
=\cos((k+1)\theta).$$

虚部为

$$\sin k\theta\cos\theta+\cos k\theta\sin\theta
=\sin((k+1)\theta).$$

结论在 $n=1$ 时成立；若在 $n=k$ 时成立，就在 $n=k+1$ 时成立。因此，由数学归纳法（mathematical induction），结论对所有正整数 $n$ 都成立。

### 零与负整数 {#zero-and-negative-integers}

当 $n=0$ 时，两边均为 $1$。

对于 $n=-m$，其中 $m$ 为正整数，使用倒数：

$$\begin{aligned}
&(\cos\theta+i\sin\theta)^{-m}\\
&\quad=\frac1{\cos m\theta+i\sin m\theta}\\
&\quad=\cos m\theta-i\sin m\theta\\
&\quad=\cos(-m\theta)+i\sin(-m\theta).
\end{aligned}$$

乘以共轭复数后，分母变为 $1$，因为 $\cos^2m\theta+\sin^2m\theta=1$。

**常见错误：**把整数次幂的公式直接用于分数指数，只给出一个根。若要求全部根，应使用[复数的根](#complex-roots)中的方法。

### 指数形式 {#exponential-form}

可以直接使用恒等式

$$e^{i\theta}=\cos\theta+i\sin\theta.$$

因此，$z=re^{i\theta}$ 称为复数的**指数形式（exponential form）**。由此得到

$$\begin{aligned}
(re^{i\theta})^n&=r^ne^{in\theta},\\
(r_1e^{i\theta_1})(r_2e^{i\theta_2})
&=r_1r_2e^{i(\theta_1+\theta_2)}.
\end{aligned}$$

两个复数相乘时，模相乘，辐角相加；相除时，模相除，辐角相减。相差 $2\pi$ 的整数倍的辐角表示同一个复数。

题目要求**主辐角（principal argument）**时，使用范围 $-\pi<\theta\le\pi$。

<section class="worked-example" markdown="1">

### 例 1：幂及其辐角 {#example-1--a-power-and-its-argument}

**Question:** express $(1-i)^6$ in $a+ib$ form.

$1-i$ 的模为 $\sqrt2$。由于它在第四象限，辐角为 $-\frac\pi4$。

$$\begin{aligned}
1-i&=\sqrt2e^{-i\pi/4},\\
(1-i)^6&=(\sqrt2)^6e^{-3i\pi/2}\\
&=8\left(\cos\frac{3\pi}{2}-i\sin\frac{3\pi}{2}\right)\\
&=\boxed{8i}.
\end{aligned}$$

**检验：**$(1-i)^2=-2i$，所以 $(1-i)^6=(-2i)^3=8i$。最后的模为 $(\sqrt2)^6=8$。

</section>

<section class="worked-example" markdown="1">

### 例 2：负整数次幂 {#example-2--a-negative-power}

**Question:** find $(\sqrt3+i)^{-3}$ in $a+ib$ form.

由于 $\sqrt3+i=2e^{i\pi/6}$，

$$\begin{aligned}
(\sqrt3+i)^{-3}
&=2^{-3}e^{-i\pi/2}\\
&=\boxed{-\frac{i}{8}}.
\end{aligned}$$

**检验：**$(\sqrt3+i)^3=8i$，且 $\frac1{8i}=-\frac i8$。负整数次幂不仅改变辐角，也改变模。

</section>

<span id="roots"></span>

## 复数的根 {#complex-roots}

求解 $z^n=Re^{i\theta}$ 时，假设 $R>0$ 且 $n$ 为正整数，令 $z=\rho e^{i\phi}$。比较模与辐角，得到

$$\rho^n=R,\qquad n\phi=\theta+2k\pi.$$

因此，全部根为

$$\boxed{\begin{aligned}
z_k&=R^{1/n}e^{i(\theta+2k\pi)/n},\\
k&=0,1,\ldots,n-1.
\end{aligned}}$$

共有 **$n$ 个不同的根**。它们位于以原点为圆心、$R^{1/n}$ 为半径的圆上，相邻根的辐角差均为 $\frac{2\pi}{n}$。当 $n\ge3$ 时，它们在阿尔冈图上组成正多边形（regular polygon）。

若 $R=0$，方程为 $z^n=0$，其唯一不同的根为 $0$。利用辐角求根的方法适用于右边非零的情形。

**常见错误：**先除以指数，再加上 $2\pi$。相邻根的辐角差为 $\frac{2\pi}{n}$，而非 $2\pi$。

<section class="worked-example" markdown="1">

### 例 3：三个根及其阿尔冈图 {#example-3--three-roots-and-an-argand-diagram}

**Question:** solve $z^3=8i$. Give the roots in $a+ib$ form and describe their positions.

写成 $8i=8e^{i\pi/2}$。每个根的模为 $8^{1/3}=2$，辐角为

$$\frac{\pi/2+2k\pi}{3}
=\frac\pi6+\frac{2k\pi}{3},
\qquad k=0,1,2.$$

三个辐角分别为 $\frac\pi6$、$\frac{5\pi}{6}$ 和 $\frac{3\pi}{2}$。因此

$$\boxed{\begin{aligned}
z_0&=\sqrt3+i,\\
z_1&=-\sqrt3+i,\\
z_2&=-2i.
\end{aligned}}$$

![方程 z 的三次方等于 8i 的三个根的阿尔冈图：坐标分别为根号 3 加 i、负根号 3 加 i、负 2i，均位于半径为 2 的圆上](/assets/img/further-complex-roots.svg)

三个根在圆 $\lvert z\rvert=2$ 上组成等边三角形（equilateral triangle）。相邻根之间的夹角为 $\frac{2\pi}{3}$。若要求主辐角，最后一个辐角应写为 $-\frac\pi2$。

**检验：**任取一个根，三次方的模均为 $8$，辐角与 $\frac\pi2$ 相差 $2\pi$ 的整数倍。此外，三个根的和为零。

</section>

<section class="lesson-check" markdown="1">

### 先完成一个根的推理链 {#supported-root-arguments}

**Supported attempt (self-written):** For $v^2=-4i$, complete the modulus equation and the argument equation before listing the two roots. Explain why taking just the principal argument after division loses a root.

<details markdown="1">
<summary>提示</summary>

先用 $-4i=4e^{-i\pi/2}$ 写出右边的模与辐角，在除以前加整周。

</details>

<details markdown="1">
<summary>解答与检验</summary>

$$\begin{aligned}
\lvert v\rvert^2&=4,\qquad 2\arg v=-\frac\pi2+2k\pi,\\
v_k&=2e^{i(-\pi/4+k\pi)},\quad k=0,1,\\
v&=\sqrt2-i\sqrt2,\quad-\sqrt2+i\sqrt2.
\end{aligned}$$

相差一整周的右边辐角，除以二后相差半周；两根并不相同。

</details>

</section>

<section class="worked-example" markdown="1">

### 例 4：由平方根求精确三角函数值 {#example-4--an-exact-trigonometric-value-from-square-roots}

**Question:** solve $z^2=\sqrt3+i$, and hence find $\cos\frac\pi{12}$ in surd form.

右边的模为 $2$，辐角为 $\frac\pi6$。两个根为

$$\sqrt2e^{i\pi/12}
\quad\text{and}\quad
\sqrt2e^{i13\pi/12}.$$

为求直角坐标形式（Cartesian form），令 $z=a+ib$。于是

$$a^2-b^2=\sqrt3,\qquad 2ab=1.$$

此外，$\lvert z\rvert=\sqrt2$，所以 $a^2+b^2=2$。相加、相减得到

$$a^2=\frac{2+\sqrt3}{2},
\qquad b^2=\frac{2-\sqrt3}{2}.$$

辐角为 $\frac\pi{12}$ 的根在第一象限。因此

$$a=\frac{\sqrt3+1}{2},
\qquad b=\frac{\sqrt3-1}{2}.$$

这里的根式化简可由平方重建；两个候选值都正：

$$\left(\frac{\sqrt3\pm1}{2}\right)^2
=\frac{4\pm2\sqrt3}{4}=\frac{2\pm\sqrt3}{2}.$$

另一个根的两个符号都相反：

$$\boxed{z=\pm\left(\frac{\sqrt3+1}{2}
+i\frac{\sqrt3-1}{2}\right).}$$

对于第一个根，$a=\sqrt2\cos\frac\pi{12}$。所以

$$\begin{aligned}
\cos\frac\pi{12}&=\frac{a}{\sqrt2}
=\frac{\sqrt3+1}{2\sqrt2}
=\frac{\sqrt2(\sqrt3+1)}4
=\boxed{\frac{\sqrt6+\sqrt2}{4}}.
\end{aligned}$$

**检验：**$a^2-b^2=\sqrt3$ 且 $2ab=1$。正号是根据象限选定的，不能只凭平方根方程来确定。

</section>

## 单位根 {#roots-of-unity}

**$n$ 次单位根（roots of unity）**是方程 $z^n=1$ 的根，即

$$\boxed{z_k=e^{2k\pi i/n},
\qquad k=0,1,\ldots,n-1.}$$

令 $\omega=e^{2\pi i/n}$。这些根也可写为 $1,\omega,\omega^2,\ldots,\omega^{n-1}$。

它们位于单位圆（unit circle）上，相邻辐角差为 $\frac{2\pi}{n}$。当 $n>1$ 时，它们的和为零：

$$1+\omega+\omega^2+\cdots+\omega^{n-1}
=\frac{1-\omega^n}{1-\omega}=0.$$

这里 $\omega^n=1$ 且 $\omega\ne1$。分母为零时，不能使用这一分式。

<section class="worked-example" markdown="1">

### 例 5：余弦之和 {#example-5--a-cosine-sum}

**Question:** use the fifth roots of unity to show that

$$\cos\frac{2\pi}{5}+\cos\frac{4\pi}{5}
=-\frac12.$$

令 $\omega=e^{2\pi i/5}$。单位根的和为零：

$$1+\omega+\omega^2+\omega^3+\omega^4=0.$$

将共轭复数配成对，并利用 $\omega^4=\omega^{-1}$ 与 $\omega^3=\omega^{-2}$：

$$\begin{aligned}
\omega+\omega^4&=2\cos\frac{2\pi}{5},\\
\omega^2+\omega^3&=2\cos\frac{4\pi}{5}.
\end{aligned}$$

因此

$$1+2\cos\frac{2\pi}{5}+2\cos\frac{4\pi}{5}=0,$$

便得到题目要求的结论。

**检验：**虚部之和也为零，因为每对共轭复数的虚部互为相反数。

</section>

<section class="worked-example" markdown="1">

### 例 6：方程两边都有幂 {#example-6--powers-on-both-sides-of-an-equation}

**Question:** solve $16z^4=(z-1)^4$.

先检查 $z=0$：此时得到 $0=1$，所以它不是解。因此可以除以 $16z^4$：

$$\left(\frac{z-1}{2z}\right)^4=1.$$

于是，$\frac{z-1}{2z}$ 可取任意四次单位根 $1,-1,i,-i$。将它记为 $\omega$：

$$z-1=2\omega z
\quad\Rightarrow\quad
z=\frac1{1-2\omega}.$$

代入四个值，得到

$$\boxed{\begin{aligned}
z&=-1,\quad \frac13,\\
z&=\frac{1+2i}{5},\quad\frac{1-2i}{5}.
\end{aligned}}$$

**检验：**对于这四个值，分母 $1-2\omega$ 均不为零。每个答案都满足 $z-1=2\omega z$；将该等式两边取四次方，便得到原方程。

**常见错误：**只取实数的四次单位根。复数单位根还会给出另外两个解。

</section>

## 三角恒等式 {#trigonometric-identities}

### 用幂次表示倍角 {#multiple-angles-in-terms-of-powers}

用二项式定理展开 $(\cos\theta+i\sin\theta)^n$。

- **实部**为 $\cos n\theta$，来自 $i$ 的偶数次幂。
- **虚部**为 $\sin n\theta$，来自 $i$ 的奇数次幂。

虚部是 $i$ 的实数系数，本身不含 $i$。计算时使用 $i^2=-1$、$i^3=-i$ 和 $i^4=1$。

<section class="worked-example" markdown="1">

#### 例 7：三倍角公式 {#example-7--triple-angle-formulae}

**Question:** use De Moivre's theorem to express $\sin3\theta$ in powers of $\sin\theta$, $\cos3\theta$ in powers of $\cos\theta$ and $\tan3\theta$ in powers of $\tan\theta$.

为简化书写，令 $c=\cos\theta$ 和 $s=\sin\theta$：

$$\begin{aligned}
(c+is)^3
&=c^3+3ic^2s-3cs^2-is^3\\
&=(c^3-3cs^2)+i(3c^2s-s^3).
\end{aligned}$$

比较实部与虚部，得到

$$\cos3\theta=c^3-3cs^2,
\qquad
\sin3\theta=3c^2s-s^3.$$

余弦式中使用 $s^2=1-c^2$，正弦式中使用 $c^2=1-s^2$：

$$\boxed{\begin{aligned}
\cos3\theta&=4\cos^3\theta-3\cos\theta,\\
\sin3\theta&=3\sin\theta-4\sin^3\theta.
\end{aligned}}$$

求正切（tangent）时，将虚部除以实部，再将分子、分母同除以 $c^3$。令 $t=\tan\theta$，得到

$$\boxed{\tan3\theta=\frac{3t-t^3}{1-3t^2}.}$$

这一形式要求 $\cos\theta\ne0$ 且 $\cos3\theta\ne0$，使两个正切表达式均有定义。

**检验：**正弦表达式是 $\theta$ 的奇函数（odd function），余弦表达式是偶函数（even function）。当 $\theta=0$ 时，两式分别给出 $0$ 和 $1$。

</section>

### 用倍角表示幂次 {#powers-in-terms-of-multiple-angles}

现在令 $z=\cos\theta+i\sin\theta=e^{i\theta}$。由于 $\lvert z\rvert=1$，

$$\frac1z=\cos\theta-i\sin\theta.$$

因此

$$\boxed{\begin{aligned}
z+\frac1z&=2\cos\theta,\\
z-\frac1z&=2i\sin\theta.
\end{aligned}}$$

对于任意整数 $m$，

$$\boxed{\begin{aligned}
z^m+\frac1{z^m}&=2\cos m\theta,\\
z^m-\frac1{z^m}&=2i\sin m\theta.
\end{aligned}}$$

这些倒数恒等式要求**模为 1（unit modulus）**。若原复数的模为 $r\ne1$，应先使用 $\frac zr=e^{i\theta}$。

<section class="worked-example" markdown="1">

#### 例 8：用倍角表示五次幂 {#example-8--express-a-fifth-power-using-multiple-angles}

**Question:** express $\sin^5\theta$ in terms of sines of multiples of $\theta$.

从 $2i\sin\theta=z-\frac1z$ 出发，将两边取五次方。由于 $(2i)^5=32i$，

$$\begin{aligned}
32i\sin^5\theta
&=z^5-5z^3+10z\\
&\quad-\frac{10}{z}+\frac5{z^3}-\frac1{z^5}\\
&=\left(z^5-\frac1{z^5}\right)
-5\left(z^3-\frac1{z^3}\right)\\
&\quad+10\left(z-\frac1z\right).
\end{aligned}$$

将每对表达式替换成正弦：

$$32i\sin^5\theta
=2i\sin5\theta-10i\sin3\theta+20i\sin\theta.$$

除以 $32i$，得到

$$\boxed{\begin{aligned}
\sin^5\theta
&=\frac1{16}\sin5\theta\\
&\quad-\frac5{16}\sin3\theta+\frac58\sin\theta.
\end{aligned}}$$

**检验：**当 $\theta=\frac\pi2$ 时，右边为 $\frac1{16}+\frac5{16}+\frac58=1$。

</section>

## 积分 {#integration}

### 先改写为倍角项 {#integrate-multiple-angle-terms}

用前面的恒等式把三角函数的幂改写为倍角项，再逐项积分，并检查各项的内层系数。

<section class="worked-example" markdown="1">

#### 例 9：三角函数幂的积分 {#example-9--integrate-a-trigonometric-power}

**Question:** use the result in Example 8 to find $\int\sin^5x\,\mathrm dx$.

对各个倍角项分别积分。注意

$$\int\sin kx\,\mathrm dx=-\frac1k\cos kx+C
\qquad(k\ne0).$$

因此

$$\begin{aligned}
\int\sin^5x\,\mathrm dx
&=\frac1{16}\int\sin5x\,\mathrm dx
-\frac5{16}\int\sin3x\,\mathrm dx
+\frac58\int\sin x\,\mathrm dx\\
&=\frac1{16}\left(-\frac{\cos5x}{5}\right)
-\frac5{16}\left(-\frac{\cos3x}{3}\right)
+\frac58(-\cos x)+C\\
&=\boxed{-\frac1{80}\cos5x+\frac5{48}\cos3x-\frac58\cos x+C}.
\end{aligned}$$

**检验：**求导得到 $\frac1{16}\sin5x-\frac5{16}\sin3x+\frac58\sin x$，由例 8 可知它等于 $\sin^5x$。

**常见错误：**忘记因子 $\frac1k$；对 $\sin kx$ 或 $\cos kx$ 积分时，必须保留这一因子。

</section>

### 用复指数积分 {#integrate-complex-exponentials}

先把被积函数表示为复指数的实部或虚部，积分该复指数，再取所需的实部或虚部，并加上实积分常数。

<section class="worked-example" markdown="1">

#### 例 10：在积分中使用指数形式 {#example-10--use-exponential-form-in-an-integral}

**Question:** find $\int e^{2x}\cos3x\,\mathrm dx$ using exponential form.

由于 $\cos3x$ 是 $e^{3ix}$ 的实部，被积函数就是 $e^{(2+3i)x}$ 的实部。积分时除以内层的非零常系数；等价地作线性换元

$$\begin{aligned}
u&=(2+3i)x,\qquad \mathrm du=(2+3i)\,\mathrm dx,\\
\int e^{(2+3i)x}\,\mathrm dx
&=\frac1{2+3i}\int e^u\,\mathrm du
=\frac{e^u}{2+3i}+C_{\mathbb C}\\
&=\frac{e^{(2+3i)x}}{2+3i}+C_{\mathbb C}.
\end{aligned}$$

将系数有理化（rationalise）：

$$\frac1{2+3i}=\frac{2-3i}{13}.$$

于是

$$\begin{aligned}
&\frac{e^{(2+3i)x}}{2+3i}\\
&\quad=\frac{e^{2x}}{13}(2-3i)(\cos3x+i\sin3x)\\
&\quad=\frac{e^{2x}}{13}\big[(2\cos3x+3\sin3x)
+i(2\sin3x-3\cos3x)\big].
\end{aligned}$$

取实部，再加上实常数：

$$\boxed{\begin{aligned}
&\int e^{2x}\cos3x\,\mathrm dx\\
&\quad=\frac{e^{2x}}{13}(2\cos3x+3\sin3x)+C.
\end{aligned}}$$

**检验：**求导后，余弦的系数为 $\frac{4+9}{13}=1$，正弦的系数为 $\frac{6-6}{13}=0$。

若求正弦的积分，则改取**虚部**。连续两次分部积分也是一种方法，但指数形式能缩短这里的计算。

</section>

## 练习 {#practice}

每题都先独立尝试，再展开提示或解答。第 1–6、9–11 题为**本课自拟练习，无官方分值**；第 11 题承接复指数示范作为拓展；第 7–8 题保留所提供教材转载的 AQA 原题措辞与分值。

<section class="lesson-check" markdown="1">

### 第 1 题：检查象限 {#question-1--a-quadrant-check}

Use De Moivre's theorem to find $(-\sqrt3+i)^4$. Give your answer in $a+ib$ form and in exponential form with a principal argument.

<details markdown="1">
<summary>提示</summary>

模为 $2$，辐角为 $\frac{5\pi}{6}$。辐角乘以 $4$ 后，减去合适的 $2\pi$ 的整数倍。

</details>

<details markdown="1">
<summary>解答与检验</summary>

$$\begin{aligned}
(-\sqrt3+i)^4
&=16e^{10\pi i/3}\\
&=16e^{-2\pi i/3}\\
&=\boxed{-8-8\sqrt3\,i}.
\end{aligned}$$

使用主辐角的指数形式为 $\boxed{16e^{-2\pi i/3}}$。

**检验：**直角坐标形式的模为 $\sqrt{64+192}=16$。实部、虚部均为负，因此主辐角对应第三象限，并写成负角。

</details>

</section>

<section class="lesson-check" markdown="1">

### 第 2 题：正弦与余弦的正确顺序 {#question-2--put-sine-and-cosine-in-the-correct-order}

Simplify $(\sin\theta+i\cos\theta)^6$ into multiple-angle form.

<details markdown="1">
<summary>提示</summary>

写成 $\sin\theta=\cos(\frac\pi2-\theta)$ 和 $\cos\theta=\sin(\frac\pi2-\theta)$。

</details>

<details markdown="1">
<summary>解答与检验</summary>

该复数为 $e^{i(\pi/2-\theta)}$，因此其六次方为

$$\begin{aligned}
e^{i(3\pi-6\theta)}
&=\cos(3\pi-6\theta)+i\sin(3\pi-6\theta)\\
&=\boxed{-\cos6\theta+i\sin6\theta}.
\end{aligned}$$

**检验：**当 $\theta=0$ 时，原表达式为 $i^6=-1$，与所得结果一致。

</details>

</section>

<section class="lesson-check" markdown="1">

### 第 3 题：找齐四个根 {#question-3--all-four-roots}

Solve $z^4=-16$ in $a+ib$ form. State the radius of the circle containing the roots and the angle between adjacent roots. Draw the four roots on an Argand diagram with equal axis scales; label each Cartesian coordinate and argument, the circle and its radius. Explain why your list is complete.

<details markdown="1">
<summary>提示</summary>

使用 $-16=16e^{i\pi}$，再在求根公式中取 $k=0,1,2,3$。

</details>

<details markdown="1">
<summary>解答与检验</summary>

每个根的模均为 $2$，辐角为

$$\frac{\pi+2k\pi}{4}
=\frac\pi4+\frac{k\pi}{2},
\qquad k=0,1,2,3.$$

因此，四个根为

$$\boxed{\begin{aligned}
&\sqrt2+i\sqrt2,\quad-\sqrt2+i\sqrt2,\\
&-\sqrt2-i\sqrt2,\quad\sqrt2-i\sqrt2.
\end{aligned}}$$

它们在以原点为圆心、半径为 $2$ 的圆上组成正方形。相邻根的辐角差为 $\frac\pi2$。

**检验：**任取一个根，四次方的模均为 $16$，辐角为 $\pi$ 的奇数倍，所以值为 $-16$。

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 380" role="img" aria-labelledby="four-root-title four-root-desc" style="width:100%;height:auto">
<title id="four-root-title">四根的自拟核对图；答案内显示</title>
<desc id="four-root-desc">等比例实虚轴，以原点为圆心、半径二的圆内，四个顶点分别为正负根号二的坐标组合，辐角为四十五度起每隔九十度。</desc>
<g fill="none" stroke="currentColor" stroke-width="1.5">
<path d="M55 190H400M225 35V345"/>
<path d="M392 186L400 190L392 194M221 43L225 35L229 43"/>
<circle cx="225" cy="190" r="106.066" stroke-dasharray="4 4"/>
<path d="M300 115H150V265H300Z"/>
<path d="M225 190H331.066" stroke-dasharray="3 3"/>
</g>
<g fill="currentColor" font-size="22" font-family="sans-serif">
<circle cx="300" cy="115" r="4"/><circle cx="150" cy="115" r="4"/>
<circle cx="150" cy="265" r="4"/><circle cx="300" cy="265" r="4"/>
<text x="403" y="184">Re</text><text x="234" y="35">Im</text><text x="203" y="215">O</text>
<text x="270" y="183">r = 2</text>
<text x="306" y="81">(√2, √2)</text><text x="306" y="108">π/4</text>
<text x="144" y="81" text-anchor="end">(−√2, √2)</text><text x="144" y="108" text-anchor="end">3π/4</text>
<text x="144" y="294" text-anchor="end">(−√2, −√2)</text><text x="144" y="321" text-anchor="end">5π/4</text>
<text x="306" y="294">(√2, −√2)</text><text x="306" y="321">7π/4</text>
</g>
</svg>

</details>

</section>

<section class="lesson-check" markdown="1">

### 第 4 题：平移后的根 {#question-4--roots-after-a-translation}

Solve $(z-1)^3=8$ in $a+ib$ form. Describe the positions of the three roots on an Argand diagram.

<details markdown="1">
<summary>提示</summary>

先求 $8$ 的三个立方根，作为 $z-1$ 的值，再将每个结果加上 $1$。

</details>

<details markdown="1">
<summary>解答与检验</summary>

$8$ 的立方根为 $2$、$-1+i\sqrt3$ 和 $-1-i\sqrt3$。因此

$$\boxed{z=3,\quad i\sqrt3,\quad-i\sqrt3.}$$

三个根在圆 $\lvert z-1\rvert=2$ 上组成等边三角形。圆心为 $1+0i$，而非原点。

**检验：**三个值均与圆心相距 $2$，圆心为 $1$。将每个值减去 $1$ 后取三次方，都得到 $8$。

</details>

</section>

<section class="lesson-check" markdown="1">

### 第 5 题：实部与虚部 {#question-5--real-and-imaginary-parts}

Use De Moivre's theorem to show that

$$\cos4\theta=8\cos^4\theta-8\cos^2\theta+1,$$

and, where $\sin\theta\ne0$,

$$\frac{\sin4\theta}{\sin\theta}
=8\cos^3\theta-4\cos\theta.$$

<details markdown="1">
<summary>提示</summary>

展开 $(c+is)^4$，其中 $c=\cos\theta$ 且 $s=\sin\theta$。再使用 $s^2=1-c^2$。

</details>

<details markdown="1">
<summary>解答与检验</summary>

$$\begin{aligned}
(c+is)^4
&=(c^4-6c^2s^2+s^4)\\
&\quad+i(4c^3s-4cs^3).
\end{aligned}$$

取实部并代入 $s^2=1-c^2$，得到

$$\begin{aligned}
\cos4\theta
&=c^4-6c^2(1-c^2)+(1-c^2)^2\\
&=\boxed{8c^4-8c^2+1}.
\end{aligned}$$

取虚部，再除以 $s\ne0$，得到

$$\begin{aligned}
\frac{\sin4\theta}{\sin\theta}
&=4c^3-4c(1-c^2)\\
&=\boxed{8c^3-4c}.
\end{aligned}$$

**检验：**当 $\theta=\frac\pi4$ 时，两式分别给出 $\cos\pi=-1$ 和 $\frac{\sin\pi}{\sin(\pi/4)}=0$。当 $\sin\theta=0$ 时，该商无定义。

</details>

</section>

<section class="lesson-check" markdown="1">

### 第 6 题：余弦的幂及其积分 {#question-6--a-cosine-power-and-its-integral}

Using $z=\cos x+i\sin x$, express $\cos^4x$ in terms of cosines of multiple angles. Hence find $\int\cos^4x\,\mathrm dx$.

<details markdown="1">
<summary>提示</summary>

将 $2\cos x=z+\frac1z$ 取四次方。把 $z^4$ 与 $z^{-4}$ 配对，再把 $z^2$ 与 $z^{-2}$ 配对。

</details>

<details markdown="1">
<summary>解答与检验</summary>

$$\begin{aligned}
16\cos^4x
&=z^4+4z^2+6+\frac4{z^2}+\frac1{z^4}\\
&=2\cos4x+8\cos2x+6.
\end{aligned}$$

因此

$$\boxed{\cos^4x=\frac18\cos4x+\frac12\cos2x+\frac38.}$$

逐项积分，得到

$$\begin{aligned}
\int\cos^4x\,\mathrm dx
&=\frac18\int\cos4x\,\mathrm dx
+\frac12\int\cos2x\,\mathrm dx+\frac38\int1\,\mathrm dx\\
&=\frac18\left(\frac{\sin4x}{4}\right)
+\frac12\left(\frac{\sin2x}{2}\right)+\frac38x+C\\
&=\boxed{\frac1{32}\sin4x+\frac14\sin2x+\frac38x+C}.
\end{aligned}$$

**检验：**求导得到上面的倍角表达式。常数项 $\frac38$ 积分后为 $\frac38x$，并非常数。

</details>

</section>

<section class="lesson-check" markdown="1">

### 第 7 题：AQA——最小正角 {#question-7--aqa-the-smallest-positive-angle}

**来源：**AQA Mathematics 6360，MFP2，June 2007，原卷第 3 题。原题分值：**5 marks**。教材索引：Chapter 20, practice examination question 2, printed p. 253。[Question paper, Q3 (PDF p. 2)](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-AQA/June%202007%20QP%20-%20FP2%20AQA.PDF#page=2); [AQA mark scheme, Q3 (PDF p. 4)](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-AQA/June%202007%20MS%20-%20FP2%20AQA.PDF#page=4). 本轮重新读取题干及配套评分材料（2026-10-23）；链接为 PMT 托管的 AQA 编写材料，部分原卷为压缩排版版本。

Use De Moivre's theorem to find the smallest positive angle $\theta$ for which

$$(\cos\theta+i\sin\theta)^{15}=-i.$$

<details markdown="1">
<summary>提示</summary>

取 $-\frac\pi2$ 为 $-i$ 的一个辐角，但还须包含 $2k\pi$。当 $k=0$ 时，得到的值为负。

</details>

<details markdown="1">
<summary>详细解答与检验</summary>

由棣莫弗定理，

$$\cos15\theta+i\sin15\theta=-i.$$

于是

$$15\theta=-\frac\pi2+2k\pi,
\qquad k\in\mathbb Z,$$

所以

$$\theta=-\frac\pi{30}+\frac{2k\pi}{15}.$$

第一个正值在 $k=1$ 时出现：

$$\boxed{\theta=\frac\pi{10}.}$$

**检验：**$15\theta=\frac{3\pi}{2}$，其余弦为零、正弦为 $-1$。相邻解相差 $\frac{2\pi}{15}$，因此前一个解为负。

**评分材料核对：**应用棣莫弗定理，对应实部与虚部，选取 15θ = 3π/2，得到最小正角 θ = π/10。本课解答已对照上述 AQA 评分材料检查；这些解释由本课编写，并非官方评分细则。

</details>

</section>

<section class="lesson-check" markdown="1">

### 第 8 题：AQA——五倍角恒等式与乘积 {#question-8--aqa-a-fifth-angle-identity-and-a-product}

**来源：**AQA Mathematics 6360，MFP2，June 2011，原卷第 7 题。原题分值：**5 + 3 + 3 + 5 marks**。教材索引：Chapter 20, practice examination question 3, printed p. 253。[Question paper, Q7 (PDF p. 4)](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-AQA/June%202011%20QP%20-%20FP2%20AQA.pdf#page=4); [AQA mark scheme, Q7 (PDF p. 7)](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-AQA/June%202011%20MS%20-%20FP2%20AQA.PDF#page=7). 本轮重新读取题干及配套评分材料（2026-10-23）；链接为 PMT 托管的 AQA 编写材料，部分原卷为压缩排版版本。

**a i** Use De Moivre's theorem to show that

$$\begin{aligned}
\cos5\theta
&=\cos^5\theta-10\cos^3\theta\sin^2\theta\\
&\quad+5\cos\theta\sin^4\theta,
\end{aligned}$$

and find a similar expression for $\sin5\theta$. **(5 marks)**

**a ii** Deduce that

$$\begin{aligned}
&\tan5\theta\\
&\quad=\frac{\tan\theta(5-10\tan^2\theta+\tan^4\theta)}
{1-10\tan^2\theta+5\tan^4\theta}.
\end{aligned}$$

**(3 marks)**

**b** Explain why $t=\tan\frac\pi5$ is a root of the equation

$$t^4-10t^2+5=0$$

and write down the three other roots of this equation in trigonometrical form. **(3 marks)**

**c** Deduce that

$$\tan\frac\pi5\tan\frac{2\pi}{5}=\sqrt5.$$

**(5 marks)**

<details markdown="1">
<summary>提示</summary>

展开 $(c+is)^5$。求正切时，将虚部除以实部。c 小题中，将正根与其相反数配对，并使用根的乘积。

</details>

<details markdown="1">
<summary>详细解答与检验</summary>

**a i** 令 $c=\cos\theta$ 和 $s=\sin\theta$。由二项式定理，

$$\begin{aligned}
(c+is)^5
&=(c^5-10c^3s^2+5cs^4)\\
&\quad+i(5c^4s-10c^2s^3+s^5).
\end{aligned}$$

由棣莫弗定理可识别这两部分：

$$\boxed{\begin{aligned}
\cos5\theta&=c^5-10c^3s^2+5cs^4,\\
\sin5\theta&=5c^4s-10c^2s^3+s^5.
\end{aligned}}$$

**a ii** 将虚部除以实部。当 $c\ne0$ 时，分子、分母同除以 $c^5$。令 $t=\tan\theta$，得到

$$\boxed{\tan5\theta=\frac{t(5-10t^2+t^4)}{1-10t^2+5t^4}.}$$

该公式适用于 $\cos\theta\ne0$ 且 $\cos5\theta\ne0$ 的情形。

**b** 当 $\theta=\frac\pi5$ 时，$\tan5\theta=\tan\pi=0$。分母非零且 $t\ne0$，因此

$$5-10t^2+t^4=0.$$

对 $\theta=\frac{2\pi}{5},\frac{3\pi}{5},\frac{4\pi}{5}$ 也可作同样的推理，得到四个不同的根：

$$\boxed{\tan\frac\pi5,\quad
\tan\frac{2\pi}{5},\quad
\tan\frac{3\pi}{5},\quad
\tan\frac{4\pi}{5}.}$$

**c** 令 $a=\tan\frac\pi5$ 和 $b=\tan\frac{2\pi}{5}$。由于 $\tan(\pi-\theta)=-\tan\theta$，这些根为 $a,b,-b,-a$。

方程 $t^4-10t^2+5=0$ 的根的乘积为 $5$。因此

$$ab(-b)(-a)=a^2b^2=5.$$

$a$ 与 $b$ 均为正，所以 $ab$ 为正。因此

$$\boxed{\tan\frac\pi5\tan\frac{2\pi}{5}=\sqrt5.}$$

**检验：**以 $t^2$ 为未知量的二次方程的根为 $5\pm2\sqrt5$，两者都为正，乘积为 $5$。$ab$ 的符号仍须根据第一象限来判断。

**评分材料核对：**展开五次幂并比较实部与虚部；在 cosθ 非零时除以 cos⁵θ。找齐四个正切根后，还须说明为什么所求乘积取正值 √5。本课解答已对照上述 AQA 评分材料检查；这些解释由本课编写，并非官方评分细则。

</details>

**连接旧知识：**完成此题后，回到[根与多项式的稍后任务](/zh/alevel/a2-further-mathematics/roots-and-polynomials/#later-review)，在没有三角式提示的新条件下重建根与方程。

</section>

<section class="lesson-check" markdown="1">

### 第 9 题：英文证明 {#question-9--an-integer-power-proof}

**Self-written task; no official marks.** Starting from the compound-angle formulae, prove in English that

$$(\cos t-i\sin t)^n=\cos nt-i\sin nt$$

for every integer $n$. Give an induction hypothesis and step for positive integers, then justify zero and negative integers. Do not quote De Moivre's theorem as the proof.

<details markdown="1">
<summary>提示</summary>

先证明正整数，再用模为一说明倒数存在。

</details>

<details markdown="1">
<summary>解答与检验</summary>

Put $v=\cos t-i\sin t$. For $n=1$ the identity is immediate. Assume that it holds for an arbitrary positive integer $k$. Then

$$\begin{aligned}
v^{k+1}&=(\cos kt-i\sin kt)(\cos t-i\sin t)\\
&=(\cos kt\cos t-\sin kt\sin t)
-i(\sin kt\cos t+\cos kt\sin t)\\
&=\cos((k+1)t)-i\sin((k+1)t).
\end{aligned}$$

Thus the statement holds for all positive integers by induction. For zero, both sides equal one. Also

$$v\overline v=\cos^2t+\sin^2t=1,$$

so $v$ is nonzero. For a positive integer $m$,

$$\begin{aligned}
v^{-m}&=\frac1{\cos mt-i\sin mt}
=\frac{\cos mt+i\sin mt}{\cos^2mt+\sin^2mt}\\
&=\cos mt+i\sin mt
=\cos(-mt)-i\sin(-mt).
\end{aligned}$$

The identity therefore holds for every integer.

检查：给出“任意 k”的假设、实际乘积与和差角连接、归纳结论；零和负整数分别说明。若只验证具体 n，尚未证明。收起答案后，以角变量 2t 重写负整数部分，并写出分母为何非零。

</details>

</section>

<section class="lesson-check" markdown="1">

### 第 10 题：从复数根得到精确值 {#question-10--an-exact-value-from-a-complex-root}

**Self-written task; no official marks.** Let $w=a+ib$ lie in the first quadrant and satisfy $w^2=1+i$. Find $a$ and $b$ exactly. Use both the Cartesian and polar forms of $w$ to deduce an exact surd expression for $\cos\frac\pi8$, explaining every sign choice.

<details markdown="1">
<summary>提示</summary>

把平方差、模长平方及象限连接起来。

</details>

<details markdown="1">
<summary>解答与检验</summary>

比较实、虚部，再用模长建立第三个关系。

$$\begin{aligned}
a^2-b^2&=1,\quad 2ab=1,\quad
\lvert w\rvert^2=\lvert1+i\rvert=\sqrt2,\\
a^2+b^2&=\sqrt2,\\
a^2&=\frac{\sqrt2+1}{2},\qquad b^2=\frac{\sqrt2-1}{2},\\
a&=\sqrt{\frac{\sqrt2+1}{2}},\qquad
b=\sqrt{\frac{\sqrt2-1}{2}}.
\end{aligned}$$

第一象限使两个平方根都取正值。指数形式为

$$\begin{aligned}
1+i&=\sqrt2e^{i\pi/4},\qquad w=2^{1/4}e^{i\pi/8},\\
\cos\frac\pi8&=\frac{a}{2^{1/4}}
=\sqrt{\frac{\sqrt2+1}{2\sqrt2}}
=\boxed{\frac{\sqrt{2+\sqrt2}}{2}}.
\end{aligned}$$

检验：由这些正值算得 2ab=1，且平方差为一；除以根的模长，而非原数的模长。若选错符号，收起解答，完成[下方独立重试](#exact-value-retry)。

</details>

</section>

<section class="lesson-check" markdown="1">

#### 重试：符号与单位方向 {#exact-value-retry}

**Self-written retry; no official marks.** A root $w$ of $w^2=1+i$ lies in the third quadrant. Find $w$ and $w/\lvert w\rvert$ exactly. Explain every sign choice.

本题为自拟重试，无官方分值。收起上题解答，独立写出两个精确结果及符号理由，再展开检查。

<details markdown="1">
<summary>精确值重试检查</summary>

$$w=-\sqrt{\frac{\sqrt2+1}{2}}-i\sqrt{\frac{\sqrt2-1}{2}},\qquad
\frac{w}{\lvert w\rvert}=-\frac{\sqrt{2+\sqrt2}}2-i\frac{\sqrt{2-\sqrt2}}2.$$

两部分都负；平方仍为原来的复数。只取正平方根会违反指定象限。

</details>

</section>

<section class="lesson-check" markdown="1">

### 第 11 题：复指数的定积分 {#question-11--a-definite-integral}

**Self-written extension; no official marks.** Evaluate $\int_0^{\pi/2}e^x\sin2x\,\mathrm dx$ using complex exponential form. Show the complex integral, coefficient calculation, selected part, antiderivative and both endpoint values.

<details markdown="1">
<summary>提示</summary>

先把正弦看作虚部；代上限后还须减去非零下限值。

</details>

<details markdown="1">
<summary>解答与检验</summary>

实变量积分可逐实部与虚部分别进行。这里需要虚部。

$$\begin{aligned}
u&=(1+2i)x,\qquad \mathrm du=(1+2i)\,\mathrm dx,\\
\int e^{(1+2i)x}\,\mathrm dx
&=\frac1{1+2i}\int e^u\,\mathrm du
=\frac{e^{(1+2i)x}}{1+2i}+C_{\mathbb C},\\
\frac1{1+2i}&=\frac{1-2i}{5},\\
\frac{e^{(1+2i)x}}{1+2i}
&=\frac{e^x}{5}(1-2i)(\cos2x+i\sin2x)\\
&=\frac{e^x}{5}\big[(\cos2x+2\sin2x)+i(\sin2x-2\cos2x)\big],\\
\int_0^{\pi/2}e^x\sin2x\,\mathrm dx
&=\left[\frac{e^x}{5}(\sin2x-2\cos2x)\right]_0^{\pi/2}\\
&=\frac{e^{\pi/2}}5(\sin\pi-2\cos\pi)
-\frac15(\sin0-2\cos0)\\
&=\boxed{\frac25(e^{\pi/2}+1)}.
\end{aligned}$$

检验：区间内被积函数非负，答案应为正；原函数求导的正弦系数为一、余弦系数为零。若取错实部，回到例 10 识别被积函数，再收起解答重做。

</details>

</section>

## 纠错与独立重试 {#diagnose-and-retry}

以下两项均为自拟教学任务，无官方分值。先写下错误原因，再看反馈；随后关闭所有解答，独立完成新任务。需要提示的任务应在稍后重新独立尝试。

<section class="lesson-check" markdown="1">

**Diagnose:** A learner solves $z^4=1$ by dividing the argument zero by four and gives only $z=1$. Repair the argument step.

<details markdown="1">
<summary>反馈</summary>

除以四以前，应保留全部辐角 $0+2k\pi$。四个根为 $e^{ik\pi/2}$，其中 $k=0,1,2,3$；后续取值只会重复。

</details>

</section>

<section class="lesson-check" markdown="1">

**Independent retry:** The four roots of a monic quartic form a square centred at $1$ with radius $2$. One root is $3$. Find all the roots and construct the quartic. List all arguments of the fourth power of a displacement before dividing by four. Explain why four choices are distinct and later choices repeat.

<details markdown="1">
<summary>提示</summary>

先考虑各根相对于圆心的位移，再利用这些位移相同的四次方。

</details>

<details markdown="1">
<summary>重试解答与检验</summary>

$$\begin{aligned}
w&=z-1,\qquad w^4=16,\\
4\arg w&=0+2k\pi,\qquad
w_k=2e^{ik\pi/2},\quad k=0,1,2,3.
\end{aligned}$$

这四个辐角模整周互不相同；再增加四个指标就多一整周，因此重复。列出全部辐角是本次重试的必要证据。


位移为 $2,2i,-2,-2i$，所以根为 $3,1+2i,-1,1-2i$，且 $(z-1)^4=16$。展开得 $z^4-4z^3+6z^2-4z-15=0$。逐根减去圆心后取四次方，即可检验。

</details>

</section>

## 稍后连接与回顾 {#later-review}

先完成[极坐标面积](/zh/alevel/a2-further-mathematics/polar-coordinates/#areas)，再做下题，记录是否用了提示。

<section class="lesson-check" markdown="1">

### 根、射线与区域 {#later-roots-and-area}

**Later task (self-written):** After completing polar-coordinate areas, return with the solutions closed. Find all roots of $z^3=8$ and plot them. Two adjacent root rays bound a region inside $r=2$. Find the area of the smaller sector, and check the root sum from the polynomial coefficients.

<details markdown="1">
<summary>提示</summary>

先找全根，再判断题目要求圆弧区域还是直线边界。

</details>

<details markdown="1">
<summary>解答与检验</summary>

$$\begin{aligned}
z_k&=2e^{2k\pi i/3},\quad k=0,1,2,\\
z&=2,\quad-1+i\sqrt3,\quad-1-i\sqrt3,\\
\sum z_k&=2-1-1+i\sqrt3-i\sqrt3=0.
\end{aligned}$$

草图是以原点为中心、外接圆半径为二的等边三角形；由正实轴逆时针取一对相邻射线，面积为

$$\begin{aligned}
A&=\frac12\int_0^{2\pi/3}2^2\,\mathrm d\theta
=2\int_0^{2\pi/3}1\,\mathrm d\theta\\
&=[2\theta]_0^{2\pi/3}
=2\left(\frac{2\pi}{3}\right)-2(0)=\boxed{\frac{4\pi}{3}}.
\end{aligned}$$

注意取圆弧扇形而非三角形。根之和为零也与三次式的二次项系数为零一致。

</details>

</section>

## 快速参考 {#quick-reference}

| 任务 | 方法 | 检查要点 |
|---|---|---|
| 整数次幂 | 写成 $z=re^{i\theta}$，再使用 $z^n=r^ne^{in\theta}$ | 模也要取幂，辐角则乘以指数 |
| 倒数或负整数次幂 | 使用 $r^{-n}e^{-in\theta}$ 表示 $z^{-n}$，其中 $n>0$ | 模变为相应幂的倒数 |
| 非零复数的全部根 | $z_k=R^{1/n}e^{i(\theta+2k\pi)/n}$，$k=0,\ldots,n-1$ | 数出 $n$ 个不同的答案 |
| 阿尔冈图 | 共同半径为 $R^{1/n}$，相邻辐角差为 $\displaystyle\frac{2\pi}{n}$ | 若方程含 $z-a$，检查圆心 |
| 单位根 | $1,\omega,\ldots,\omega^{n-1}$，其中 $\omega=e^{2\pi i/n}$ | 当 $n>1$ 时，根的和为零 |
| 用幂次表示倍角 | 展开 $(\cos\theta+i\sin\theta)^n$ | 余弦取实部，正弦取虚部 |
| 用倍角表示幂次 | 将 $z+z^{-1}=2\cos\theta$ 或 $z-z^{-1}=2i\sin\theta$ 取相应次幂 | 这些恒等式要求 $\lvert z\rvert=1$ |
| 正切恒等式 | 虚部除以实部 | 说明正切表达式的定义条件 |
| 积分 | 对倍角表达式积分，或取复指数函数的实部或虚部 | 保留角度系数产生的因子及 $+C$ |
{: .wide-table}

**练习后：**若象限判断错误，重做第 1 题；若正弦、余弦顺序颠倒，重做第 2 题；若漏根，重做第 3–4 题；若三角展开的方向错误，对比第 5、6 题；若最小正角错误，重做第 7 题；若乘积中丢失符号，重做第 8 题。

**你应能够：**证明整数次幂的定理，使用指数形式，求出并画出全部根，沿两个方向推导三角恒等式，得到根式（surd）形式的精确值，并将这些结果用于积分。

本课依据 [OxfordAQA 高等数学 9665 课程大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf) FP2.2。例题解答为教学材料。第 7–8 题保留所提供教材中的 AQA 原题及其分值；题目前附有来源说明，以下解答为本课编写，并非官方评分细则。

**学习路径：**[上一课：级数与极限](/zh/alevel/a2-further-mathematics/series-and-limits/) · [下一课：极坐标](/zh/alevel/a2-further-mathematics/polar-coordinates/) · [返回课程](/zh/alevel/a2-further-mathematics/)。

**学后下一步：**完成本课[稍后任务](#later-review)，再到课程入口的[跨主题综合](/zh/alevel/a2-further-mathematics/#mixed-review)与[延后回顾](/zh/alevel/a2-further-mathematics/#later-review)，记录首次作答、提示使用和重试结果。
