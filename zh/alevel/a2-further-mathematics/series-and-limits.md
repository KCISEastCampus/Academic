---
title: 级数与极限
layout: subjects
mathjax: true
grade: a2
subject: a2-further-mathematics
lang: zh-CN
translation_of: /alevel/a2-further-mathematics/series-and-limits/
permalink: /zh/alevel/a2-further-mathematics/series-and-limits/
toc_headings: "#method, #convergence, #maclaurin-series, #related-functions, #limits, #improper-integrals, #practice, #diagnose-and-retry, #later-review, #quick-reference"
study_page: true
reading_layout: true
---

[高等纯数学](/zh/alevel/a2-further-mathematics/) · FP2.6 级数与极限

本课学习用幂级数（power series）展开函数并求极限（limit），判断级数（series）何时收敛（converges），并通过明确写出取极限的过程，计算反常积分（improper integral）。

- **学习：**从[方法](#method)开始，再依次学习各部分。
- **作业帮助：**查看[收敛性](#convergence)、[麦克劳林级数](#maclaurin-series)、[相关函数](#related-functions)、[极限](#limits)或[反常积分](#improper-integrals)。
- **复习：**先尝试[练习](#practice)，再展开解答，最后核对[快速参考](#quick-reference)。

**开始前：**需要哪一步就回补哪一步，并带着一行计算回来：

- [有限级数的差分](/zh/alevel/a2-further-mathematics/finite-series/#differencing)：能从通项得到部分和；本课再判断其极限。
- [二项式级数](/zh/alevel/a2-mathematics/binomial-series/#the-binomial-series)：能代入整个内层表达式并写出标准范围。
- [基本导数](/zh/alevel/a2-mathematics/differentiation/#standard-derivatives)和[链式求导](/zh/alevel/a2-mathematics/differentiation/#composite-functions)：回来独立计算第 2 题的连续导数。乘积回顾还需要[乘积法则](/zh/alevel/a2-mathematics/differentiation/#products-and-quotients)。
- [幂函数积分](/zh/alevel/a2-mathematics/integration/#power-integrals)、[指数与对数积分](/zh/alevel/a2-mathematics/integration/#exponential-logarithmic-integrals)、[分部积分](/zh/alevel/a2-mathematics/integration/#integration-by-parts)和[定积分代界](/zh/alevel/a2-mathematics/integration/#definite-integrals)：先能算有限积分，再学反常端点。

阶乘是连续正整数相乘，且 $0!=1$、$3!=3\cdot2\cdot1=6$。三角函数的角度使用弧度。

**题目身份：**除明确标出官方原题或教学改编的题目外，本课例题与练习均为自拟教学题，不分配官方分值。

## 方法 {#method}

**学习目标：**求出并使用麦克劳林展开（Maclaurin expansion），说明其有效范围（range of validity），在相消后求极限，并判断反常积分是否有有限值。

不断加进新的项时，我们问：累加的总和会不会趋近于某个有限数？想在零点附近近似一个函数时，我们问：怎样的多项式能在零处与它有相同的函数值和导数？下面从这两个问题开始；供复习时使用的方法集中在[快速参考](#quick-reference)。

## 收敛性 {#convergence}

在 $1+\frac12+\frac14+\cdots$ 中，依次累加得到 $1$、$\frac32$、$\frac74$，等等。加入更多项时，这些总和逐渐趋近 $2$。每个总和都只加了有限项，称为**部分和（partial sum）**。

对于无穷级数（infinite series）$\sum_{r=1}^{\infty}u_r$，记

$$S_n=\sum_{r=1}^{n}u_r.$$

若 $S_n$ 在 $n\to\infty$ 时趋于有限极限，就称级数**收敛（converges）**。这个极限就是级数的和。若不存在有限极限，就称级数**发散（diverges）**。

发散级数不一定趋于 $+\infty$：其部分和也可能趋于 $-\infty$，或持续变化而不趋近于某一个值。

对于等比级数，

$$\sum_{r=0}^{n-1}aq^r=\frac{a(1-q^n)}{1-q},\qquad q\ne1.$$

当 $\lvert q\rvert<1$ 时，$q^n\to0$，于是

$$\boxed{\sum_{r=0}^{\infty}aq^r=\frac{a}{1-q}.}$$

例如，$1+\frac12+\frac14+\cdots=2$。当 $q=1$ 且 $a\ne0$ 时，部分和为 $na$，不存在有限的级数和。

**常见错误：**因为 $u_n\to0$ 就断言级数收敛。这是必要条件（necessary condition），却不能证明收敛。

<section class="worked-example" markdown="1">

### 例 1：各项趋于零，但级数发散 {#example-1--terms-tend-to-zero-but-the-sum-diverges}

**Question:** show that the harmonic series $\sum_{r=1}^{\infty}\frac1r$ diverges.

将首项之后的各项依次分成含 $1,2,4,8,\ldots$ 项的各组：

$$\begin{aligned}
1+\frac12
&+\left(\frac13+\frac14\right)\\
&+\left(\frac15+\frac16+\frac17+\frac18\right)+\cdots.
\end{aligned}$$

对于任意整数 $j\ge1$，从 $r=2^{j-1}+1$ 到 $r=2^j$ 的一组共有 $2^{j-1}$ 项。每项至少为 $\frac1{2^j}$，因此这一组的和至少为

$$2^{j-1}\cdot\frac1{2^j}=\frac12.$$

所以

$$S_{2^m}\ge1+\frac{m}{2}.$$

当 $m\to\infty$ 时，这一下界无限增大。部分和不可能趋于有限数，因此即使 $\frac1r\to0$，该级数仍然发散。

**检验：**每增加一组，至少增加 $\frac12$；单项越来越小，并不能保证总和有限。

</section>

### 比值判别法 {#ratio-test}

这一方法有助于解答教材中的收敛性练习。对于非零项，计算

$$L=\lim_{n\to\infty}\left\lvert\frac{u_{n+1}}{u_n}\right\rvert,$$

前提是这一极限存在。

- 若 $L<1$，级数绝对收敛（converges absolutely），即 $\lvert u_n\rvert$ 的和有限。
- 若 $L>1$，级数发散。
- 若 $L=1$，此判别法无法作出结论，需要使用其他论证。

例如，令 $u_n=\frac{3^n}{n!}$。展开阶乘中的最后一个因子后，

$$\left\lvert\frac{u_{n+1}}{u_n}\right\rvert
=\frac{3^{n+1}}{(n+1)!}\frac{n!}{3^n}
=\frac3{n+1}\longrightarrow0<1.$$

所以该级数收敛。调和级数的比值趋于 $1$，判别法无法决定，应使用上面的分组论证。


## 麦克劳林级数 {#maclaurin-series}

先看二次多项式 $P(x)=a+bx+cx^2$。我们希望它在零处与函数 $f$ 有相同的函数值、一阶导数和二阶导数。求导就能看出各个系数分别控制什么：

$$\begin{aligned}
P(x)&=a+bx+cx^2,& P(0)&=a,\\
P^{\prime}(x)&=b+2cx,& P^{\prime}(0)&=b,\\
P^{(2)}(x)&=2c,& P^{(2)}(0)&=2c.
\end{aligned}$$

因此，要让两者在零处的值、斜率和斜率的变化率分别相同，就需要

$$a=f(0),\qquad b=f^{\prime}(0),\qquad c=\frac{f^{(2)}(0)}{2}.$$

这里除以 $2$，是因为 $cx^2$ 连续求导两次会得到 $2c$。推广到 $x^r$，连续求导 $r$ 次会得到 $r!$；次数更低的项已经消失，次数更高的项仍含有 $x$，在零处也为零。因此，若函数在零点附近可以用幂级数表示，就能得到系数 $f^{(r)}(0)/r!$，它对应 $x^r$ 项。

把多项式按 $x$ 的非负整数幂从低到高继续写下去，就得到**幂级数（power series）**。利用 $f$ 在 $x=0$ 处的各阶导数形成的级数，称为它的**麦克劳林级数（Maclaurin series）**。

对于可以用这种方式表示的函数，麦克劳林定理（Maclaurin's theorem）给出

$$\begin{aligned}
f(x)={}&f(0)+xf^{\prime}(0)+\frac{x^2}{2!}f^{(2)}(0)\\
&+\frac{x^3}{3!}f^{(3)}(0)+\cdots.
\end{aligned}$$

这里 $f^{(r)}(0)$ 表示在零处取值的第 $r$ 阶导数。这些导数值必须存在且有限。即使函数有任意阶导数，也不能仅凭这一点断言它等于自己的麦克劳林级数；只有在级数确实表示原函数的有效范围内，才能使用这个等号。

**区分记号：**$=\cdots+\cdots$ 表示完整级数，后面还有更多项。只用有限项估算数值时，使用 $\approx$。无穷展开式有效，并不意味着只取少量项的近似在远离 $x=0$ 时仍然准确。

**常见错误：**直接把 $f^{(r)}(0)$ 当作系数，忘记除以 $r!$。

<section class="worked-example" markdown="1">

### 例 2：由导数求系数 {#example-2--find-coefficients-from-derivatives}

**Question:** use Maclaurin's theorem to expand $f(x)=e^{2x}$ up to and including the term in $x^3$.

先用链式法则连续求导：

$$f(x)=e^{2x},\quad f^{\prime}(x)=2e^{2x},\quad
f^{(2)}(x)=4e^{2x},\quad f^{(3)}(x)=8e^{2x}.$$

再代入零点，得到导数值为

$$\begin{aligned}
f(0)&=1,& f^{\prime}(0)&=2,\\
f^{(2)}(0)&=4,& f^{(3)}(0)&=8.
\end{aligned}$$

将这些值代入公式：

$$\begin{aligned}
e^{2x}
&=1+2x+\frac4{2!}x^2+\frac8{3!}x^3+\cdots\\
&=\boxed{1+2x+2x^2+\frac43x^3+\cdots}.
\end{aligned}$$

完整展开式对所有实数 $x$ 都有效。只取少量项的近似在 $x$ 接近零时最有用。

**检验：**在 $x$ 的位置代入 $2x$，使用 $e^x$ 的标准展开式，也会得到相同系数。

</section>

### 标准展开式及其有效范围 {#standard-expansions-and-ranges}

除非题目要求推导，否则可以直接使用以下公式。

**指数函数（exponential function；对所有实数 $x$ 有效）：**

$$e^x=1+x+\frac{x^2}{2!}+\frac{x^3}{3!}+\cdots.$$

**正弦函数（sine；对所有实数 $x$ 有效）：**

$$\sin x=x-\frac{x^3}{3!}+\frac{x^5}{5!}-\cdots.$$

**余弦函数（cosine；对所有实数 $x$ 有效）：**

$$\cos x=1-\frac{x^2}{2!}+\frac{x^4}{4!}-\cdots.$$

**对数函数（logarithm）：**

$$\ln(1+x)=x-\frac{x^2}{2}+\frac{x^3}{3}-\frac{x^4}{4}+\cdots,$$

有效范围为 $\boxed{-1<x\le1}$。将 $x$ 替换为 $-x$，得到

$$\ln(1-x)=-x-\frac{x^2}{2}-\frac{x^3}{3}-\frac{x^4}{4}-\cdots,$$

有效范围为 $\boxed{-1\le x<1}$。注意哪一个端点包含在范围内。

**二项式展开（binomial expansion），有理数指数（rational power）$p$：**

$$\begin{aligned}
(1+x)^p={}&1+px+\frac{p(p-1)}{2!}x^2\\
&+\frac{p(p-1)(p-2)}{3!}x^3+\cdots.
\end{aligned}$$

对于负有理数或非整数有理数 $p$，使用 $\lvert x\rvert<1$ 作为标准有效范围。若 $p$ 为正整数，展开式是有限多项式，对所有实数 $x$ 都有效。对于 $p=0$，在原表达式有定义的地方，其值为 $1$。

**有效范围与定义域（domain）不同。**例如，$\ln(1+x)$ 对所有 $x>-1$ 都有定义，但这一麦克劳林级数仅在 $-1<x\le1$ 内有效。

## 代入、乘积与复合展开 {#related-functions}

### 组合对数展开式与有效范围 {#combine-logarithmic-series}

先检查对数拆分是否合法，再分别展开；最终有效范围必须同时满足每个展开式的条件。

<section class="worked-example" markdown="1">

#### 例 3：两个对数与共同有效范围 {#example-3--two-logarithms-and-a-shared-range}

**Question:** expand

$$\ln\left(\frac{1+2x}{1-2x}\right)$$

up to and including the term in $x^3$, and state the range of validity.

在零附近，$1+2x$ 和 $1-2x$ 均为正，因此可将函数写成 $\ln(1+2x)-\ln(1-2x)$。

$$\begin{aligned}
\ln(1+2x)&=2x-2x^2+\frac83x^3+\cdots,\\
\ln(1-2x)&=-2x-2x^2-\frac83x^3-\cdots.
\end{aligned}$$

相减得到

$$\boxed{\ln\left(\frac{1+2x}{1-2x}\right)
=4x+\frac{16}{3}x^3+\cdots.}$$

第一个级数要求 $-\frac12<x\le\frac12$，第二个要求 $-\frac12\le x<\frac12$。两者都必须有效，因此

$$\boxed{-\frac12<x<\frac12.}$$

**检验：**偶数次幂的项相消。当 $x=\frac12$ 时，分母为零；当 $x=-\frac12$ 时，对数的真数（argument of a logarithm）为零。两个端点都不能包含。

</section>

### 按总次数截断乘积 {#multiply-series}

先确定目标最高次幂。两项相乘时次数相加，保留所有可能贡献目标次数的交叉项，再合并同类项。

<section class="worked-example" markdown="1">

#### 例 4：两个级数相乘 {#example-4--multiply-two-series}

**Question:** expand $e^{2x}\sin x$ up to and including the term in $x^4$.

由于 $\sin x$ 从 $x$ 项开始，只需把 $x^3$ 项及以下次数的 $e^{2x}$ 展开式保留下来，就能计算乘积中直到 $x^4$ 的各项：

$$\begin{aligned}
e^{2x}&=1+2x+2x^2+\frac43x^3+\cdots,\\
\sin x&=x-\frac16x^3+\cdots.
\end{aligned}$$

按乘积的总次数合并同类项：

$$\begin{aligned}
e^{2x}\sin x={}&x+2x^2\\
&+\left(2-\frac16\right)x^3\\
&+\left(\frac43-\frac13\right)x^4+\cdots\\
={}&\boxed{x+2x^2+\frac{11}{6}x^3+x^4+\cdots}.
\end{aligned}$$

完整级数对所有实数 $x$ 都有效。

**检验：**$x^4$ 的系数包含乘积 $(2x)(-\frac16x^3)$。不能因为其中一个因式没有 $x^4$ 项，就漏掉交叉相乘产生的项（cross terms）。

</section>

### 复合展开的内层与外层阶数 {#compose-series}

用一个临时变量表示内层函数，再代入外层的标准展开式。检查内层各项会怎样影响所需的最高次幂后，才截去高阶项。

<section class="worked-example" markdown="1">

#### 例 5：指数中的复合函数 {#example-5--a-function-inside-an-exponential}

**Question:** expand $e^{\sin x}$ up to and including the term in $x^4$.

令 $u=\sin x=x-\frac16x^3+\cdots$。于是

$$e^u=1+u+\frac{u^2}{2}+\frac{u^3}{6}+\frac{u^4}{24}+\cdots.$$

为计算到 $x^4$ 的各项，

$$\begin{aligned}
u&=x-\frac16x^3+\cdots,\\
u^2&=x^2-\frac13x^4+\cdots,\\
u^3&=x^3+\cdots,\qquad u^4=x^4+\cdots.
\end{aligned}$$

所以

$$\begin{aligned}
e^{\sin x}={}&1+x+\frac12x^2\\
&+\left(-\frac16+\frac16\right)x^3\\
&+\left(-\frac16+\frac1{24}\right)x^4+\cdots\\
={}&\boxed{1+x+\frac12x^2-\frac18x^4+\cdots}.
\end{aligned}$$

$x^3$ 的系数为零。完整展开式对所有实数 $x$ 都有效。

**常见错误：**只保留 $x$ 项来近似 $\sin x$。它的 $x^3$ 项会同时影响答案中 $x^3$ 和 $x^4$ 的系数。

</section>

## 极限 {#limits}

函数在某点的值与函数在该点的极限是不同的问题。函数可能在 $x=0$ 处无定义，却仍然在 $x\to0$ 时存在极限。

$\frac00$ 这一形式不能确定极限。分子、分母都应展开到足够高的次数，找出相消后的首个非零项。先约去 $x$ 的某个幂次（此时 $x\ne0$），再让 $x$ 趋于零。

<section class="worked-example" markdown="1">

### 例 6：指数展开中的相消 {#example-6--cancellation-in-an-exponential}

**Question:** find

$$\lim_{x\to0}\frac{e^{2x}-1-2x}{x^2}.$$

由于 $e^{2x}=1+2x+2x^2+\frac43x^3+\cdots$，

$$\begin{aligned}
\frac{e^{2x}-1-2x}{x^2}
&=\frac{2x^2+\frac43x^3+\cdots}{x^2}\\
&=2+\frac43x+\cdots.
\end{aligned}$$

当 $x\to0$ 时，剩余的 $x$ 的正整数次幂均趋于零，因此极限为 $\boxed{2}$。

**常见错误：**只展开到 $1+2x$。这些项全部相消，因此不能用于确定极限。

</section>

<section class="worked-example" markdown="1">

### 例 7：同时展开分子与分母 {#example-7--expand-numerator-and-denominator}

**Question:** find

$$\lim_{x\to0}\frac{x-\sin x}{x^2(e^{2x}-1)}.$$

分子的首个非零项为 $\frac16x^3$。分母也从 $x^3$ 项开始：

$$\begin{aligned}
x-\sin x&=\frac16x^3-\frac1{120}x^5+\cdots,\\
x^2(e^{2x}-1)&=2x^3+2x^4+\cdots.
\end{aligned}$$

当 $x\ne0$ 时，分子、分母同除以 $x^3$：

$$\frac{x-\sin x}{x^2(e^{2x}-1)}
=\frac{\frac16-\frac1{120}x^2+\cdots}{2+2x+\cdots}.$$

因此，极限为

$$\boxed{\frac{1/6}{2}=\frac1{12}.}$$

**检验：**分子、分母都从相同幂次 $x^3$ 开始。若只除以 $x^2$，两者仍都趋于零，计算尚未完成。

</section>

### 两个标准极限 {#two-standard-limits}

对于任意实数 $k>0$，

$$\begin{aligned}
&\boxed{\lim_{x\to\infty}x^ke^{-x}=0},\\
&\boxed{\lim_{x\to0^+}x^k\ln x=0}.
\end{aligned}$$

当 $x\to\infty$ 时，指数增长快于 $x$ 的任意固定正幂次。当 $x\to0^+$ 时，因子 $x^k$ 使 $x^k\ln x$ 趋于零，尽管 $\ln x\to-\infty$。

将 $x$ 换成 $ax$，其中 $a>0$，还可得到 $\lim_{x\to\infty}x^ke^{-ax}=0$。

**注意趋近方向：**$\ln x$ 仅在 $x>0$ 时有定义，因此第二个极限是右极限（right-hand limit）。

## 反常积分 {#improper-integrals}

如果积分限为无穷，或被积函数（integrand）在端点或区间内部无定义或无界，该积分称为**反常积分**。

计算时，先使用通常的有限积分限，再取极限：

$$\int_a^\infty f(x)\,\mathrm dx
=\lim_{R\to\infty}\int_a^R f(x)\,\mathrm dx,$$

若下端点 $a$ 处有问题，则使用

$$\int_a^b f(x)\,\mathrm dx
=\lim_{\varepsilon\to0^+}\int_{a+\varepsilon}^b f(x)\,\mathrm dx.$$

只有极限有限时，积分才**收敛**。若取极限的过程没有有限结果，该积分就**发散**。

若区间内部某处有问题，应在该处分开积分，分别检查左右两侧；两侧都必须收敛。方向相反、大小相等的发散不能相消成通常意义下的反常积分。

<section class="worked-example" markdown="1">

### 例 8：无穷上限 {#example-8--an-infinite-upper-bound}

**Question:** evaluate $\int_1^\infty\frac1{x^2}\,\mathrm dx$, showing the limiting process.

由幂函数积分法则，

$$\int x^{-2}\,\mathrm dx=\frac{x^{-1}}{-1}+C=-\frac1x+C.$$

对于 $R>1$，

$$\begin{aligned}
\int_1^R x^{-2}\,\mathrm dx
&=\left[-\frac1x\right]_1^R\\
&=-\frac1R-(-1)=1-\frac1R.
\end{aligned}$$

因此

$$\int_1^\infty\frac1{x^2}\,\mathrm dx
=\lim_{R\to\infty}\left(1-\frac1R\right)
=\boxed{1}.$$

**比较：**对于 $x>0$，对数原函数及代界为

$$\int\frac1x\,\mathrm dx=\ln x+C,\qquad
\int_1^R\frac1x\,\mathrm dx=[\ln x]_1^R=\ln R-\ln1=\ln R.$$

当 $R\to\infty$ 时，$\ln R\to+\infty$，所以 $\int_1^\infty\frac1x\,\mathrm dx$ 发散。两种被积函数都趋于零，仅凭此不能判断积分收敛。

</section>

<section class="worked-example" markdown="1">

### 例 9：零处的对数 {#example-9--a-logarithm-at-zero}

**Question:** evaluate $\int_0^1 x\ln x\,\mathrm dx$, showing the limiting process.

$\ln x$ 在 $x=0$ 处无定义。用 $\varepsilon>0$ 替换积分下限。

选对数作被求导部分，因为求导能去掉对数：

$$\begin{aligned}
u&=\ln x,\quad \mathrm du=\frac1x\,\mathrm dx,\\
\mathrm dv&=x\,\mathrm dx,\quad v=\int x\,\mathrm dx=\frac{x^2}{2}.
\end{aligned}$$

$$\begin{aligned}
\int x\ln x\,\mathrm dx
&=uv-\int v\,\mathrm du\\
&=\frac{x^2}{2}\ln x-\int\frac{x^2}{2}\frac1x\,\mathrm dx\\
&=\frac{x^2}{2}\ln x-\frac12\int x\,\mathrm dx\\
&=\frac{x^2}{2}\ln x-\frac12\frac{x^2}{2}+C\\
&=\frac{x^2}{2}\ln x-\frac{x^2}{4}+C.
\end{aligned}$$

于是

$$\begin{aligned}
\int_\varepsilon^1 x\ln x\,\mathrm dx
&=\left[\frac{x^2}{2}\ln x-\frac{x^2}{4}\right]_\varepsilon^1\\
&=\left(\frac{1^2}{2}\ln1-\frac{1^2}{4}\right)\\
&\quad-\left(\frac{\varepsilon^2}{2}\ln\varepsilon-\frac{\varepsilon^2}{4}\right)\\
&=-\frac14-\frac{\varepsilon^2}{2}\ln\varepsilon
+\frac{\varepsilon^2}{4}.
\end{aligned}$$

当 $\varepsilon\to0^+$ 时，$\varepsilon^2\ln\varepsilon$ 和 $\varepsilon^2$ 均趋于零。因此积分收敛，且

$$\boxed{\int_0^1 x\ln x\,\mathrm dx=-\frac14.}$$

**检验：**$x\ln x<0$ 在 $0<x<1$ 上成立，因此积分应为负。计算时不能写出 $\ln0$。

</section>

<section class="worked-example" markdown="1">

### 例 10：无穷区间上的分部积分 {#example-10--integration-by-parts-at-infinity}

**Question:** evaluate $\int_0^\infty xe^{-2x}\,\mathrm dx$, showing the limiting process.

取多项式作被求导部分。先积分指数因子，除以内层导数 $-2$：

$$\begin{aligned}
u&=x,\quad \mathrm du=\mathrm dx,\\
\mathrm dv&=e^{-2x}\,\mathrm dx,\\
v&=\int e^{-2x}\,\mathrm dx=-\frac12e^{-2x}.
\end{aligned}$$

$$\begin{aligned}
\int xe^{-2x}\,\mathrm dx
&=-\frac x2e^{-2x}+\frac12\int e^{-2x}\,\mathrm dx\\
&=-\frac x2e^{-2x}+\frac12\left(-\frac12e^{-2x}\right)+C\\
&=-\left(\frac x2+\frac14\right)e^{-2x}+C.
\end{aligned}$$

对于有限的 $R>0$，

$$\begin{aligned}
\int_0^R xe^{-2x}\,\mathrm dx
&=\left[-\left(\frac x2+\frac14\right)e^{-2x}\right]_0^R\\
&=-\left(\frac R2+\frac14\right)e^{-2R}-\left[-\left(0+\frac14\right)e^0\right]\\
&=\frac14-\left(\frac{R}{2}+\frac14\right)e^{-2R}.
\end{aligned}$$

$Re^{-2R}$ 和 $e^{-2R}$ 均在 $R\to\infty$ 时趋于零。因此

$$\int_0^\infty xe^{-2x}\,\mathrm dx
=\lim_{R\to\infty}\left[\frac14-\left(\frac R2+\frac14\right)e^{-2R}\right]
=\boxed{\frac14}.$$

**常见错误：**把 $\infty$ 当作可以代入原函数（antiderivative）的数。应使用有限积分限 $R$，并写出其取极限的过程。

</section>

## 练习 {#practice}

展开题须说明有效范围；极限题须展示相消后的首个非零项；反常积分题须写出取极限的过程。

第 1–6 题为自拟题。第 7 题为所提供教材中转载的 AQA 原题。第 8 题为根据教材改编的教学练习，原始考试来源已在下文定位，本课不为改编题指定官方分值。

<section class="lesson-check" markdown="1">

### 第 1 题：收敛范围 {#question-1--a-range-of-convergence}

For which real values of $x$ does

$$\sum_{n=1}^{\infty}n^2\left(\frac{x}{2}\right)^n$$

converge?

<details markdown="1">
<summary>提示</summary>

对于 $x\ne0$，求 $\left\lvert\frac{u_{n+1}}{u_n}\right\rvert$ 及其极限。分别检查 $x=0$ 和两个端点。

</details>

<details markdown="1">
<summary>解答与检验</summary>

对于 $x\ne0$，

$$\left\lvert\frac{u_{n+1}}{u_n}\right\rvert
=\left(\frac{n+1}{n}\right)^2\frac{\lvert x\rvert}{2}
\longrightarrow\frac{\lvert x\rvert}{2}.$$

比值判别法表明，$\lvert x\rvert<2$ 时收敛，$\lvert x\rvert>2$ 时发散。当 $x=0$ 时，各项均为零，所以级数收敛。

当 $x=2$ 时，各项为 $n^2$；当 $x=-2$ 时，各项为 $(-1)^nn^2$。两种情况下各项都不趋于零，因此两个端点的级数均发散。

$$\boxed{-2<x<2.}$$

**检验：**比值极限为 $1$ 时，不能确定任一端点的收敛性；检查各项是否趋于零，才能得出结论。

</details>

</section>

<section class="lesson-check" markdown="1">

### 第 2 题：两种展开 {#question-2--a-negative-substitution}

**a** Expand $\ln(1-3x)$ up to and including the term in $x^3$. State the range of validity, including any allowed endpoint.

**b — Self-written task:** Let $f(x)=\ln(2+x)$. Calculate $f(0)$, $f^{\prime}(0)$, $f^{(2)}(0)$ and $f^{(3)}(0)$ from actual derivatives. Use them to form the Maclaurin expansion through $x^3$. State its range of validity, including any allowed endpoint. Show the derivatives before checking with a standard series.

<details markdown="1">
<summary>提示</summary>

将 $-3x$ 代入 $\ln(1+u)$。解不等式 $-1<-3x\le1$ 时须留意方向。

b 小题对对数连续求导三次；展开范围可在形成系数后用对数拆分检查。

</details>

<details markdown="1">
<summary>解答与检验</summary>

$$\begin{aligned}
&\ln(1-3x)\\
&\quad=(-3x)-\frac{(-3x)^2}{2}+\frac{(-3x)^3}{3}+\cdots\\
&\quad=\boxed{-3x-\frac92x^2-9x^3-\cdots}.
\end{aligned}$$

由 $-1<-3x\le1$ 得

$$\boxed{-\frac13\le x<\frac13.}$$

**检验：**当 $x=-\frac13$ 时，对数为 $\ln2$，相应级数收敛。当 $x=\frac13$ 时，真数为零，函数无定义。

**b**

$$\begin{aligned}
f(x)&=\ln(2+x),& f(0)&=\ln2,\\
f^{\prime}(x)&=\frac1{2+x},& f^{\prime}(0)&=\frac12,\\
f^{(2)}(x)&=-\frac1{(2+x)^2},& f^{(2)}(0)&=-\frac14,\\
f^{(3)}(x)&=\frac2{(2+x)^3},& f^{(3)}(0)&=\frac14.
\end{aligned}$$

$$\begin{aligned}
\ln(2+x)&=\ln2+\frac12x+\frac{-1/4}{2!}x^2+\frac{1/4}{3!}x^3+\cdots\\
&=\ln2+\frac x2-\frac{x^2}{8}+\frac{x^3}{24}+\cdots.
\end{aligned}$$

形成系数后再检查范围：

$$\ln(2+x)=\ln2+\ln\left(1+\frac x2\right),\qquad
-1<\frac x2\le1\quad\Longrightarrow\quad -2<x\le2.$$

零点原函数值与常数项均为 $\ln2$。三阶导数 $\frac14$ 需除以 $3!=6$，才得到三次项系数 $\frac1{24}$。

</details>

</section>

<section class="lesson-check" markdown="1">

### 第 3 题：提出常数因子 {#question-3--factor-out-the-constant}

Expand $(4-x)^{-1/2}$ up to and including the term in $x^3$. State the standard range of validity.

<details markdown="1">
<summary>提示</summary>

写成 $(4-x)^{-1/2}=\frac12(1-\frac{x}{4})^{-1/2}$。

</details>

<details markdown="1">
<summary>解答与检验</summary>

在二项式级数中取 $p=-\frac12$ 和 $u=-\frac{x}{4}$：

$$\begin{aligned}
&\left(1-\frac{x}{4}\right)^{-1/2}\\
&\quad=1+\frac{x}{8}+\frac{3x^2}{128}+\frac{5x^3}{1024}+\cdots.
\end{aligned}$$

每一项乘以 $\frac12$，得到

$$\boxed{\begin{aligned}
&(4-x)^{-1/2}\\
&\quad=\frac12+\frac{x}{16}+\frac{3x^2}{256}+\frac{5x^3}{2048}+\cdots.
\end{aligned}}$$

标准有效范围为 $\left\lvert\frac{x}{4}\right\rvert<1$，因此 $\boxed{-4<x<4}$。

**检验：**当 $x=0$ 时，原表达式为 $\frac12$，所以常数项也必须为 $\frac12$。

</details>

</section>

<section class="lesson-check" markdown="1">

### 第 4 题：内层函数有常数项 {#question-4--the-inner-function-has-a-constant-term}

Expand $e^{\cos x}$ up to and including the term in $x^4$.

<details markdown="1">
<summary>提示</summary>

写成 $e^{\cos x}=e\,e^{\cos x-1}$。新的指数从 $x^2$ 项开始，因此其平方会影响 $x^4$ 项。

</details>

<details markdown="1">
<summary>解答与检验</summary>

令 $v=\cos x-1=-\frac12x^2+\frac1{24}x^4+\cdots$。于是

$$e^{\cos x}=e\left(1+v+\frac{v^2}{2}+\cdots\right).$$

由于 $v^2=\frac14x^4+\cdots$，

$$\begin{aligned}
&e^{\cos x}\\
&\quad=e\left[1-\frac12x^2+\left(\frac1{24}+\frac18\right)x^4+\cdots\right]\\
&\quad=\boxed{e\left(1-\frac12x^2+\frac16x^4+\cdots\right)}.
\end{aligned}$$

完整展开式对所有实数 $x$ 都有效。

**检验：**零处的值为 $e$，而非 $1$。由于 $\cos(-x)=\cos x$，展开式只含偶数次幂。

</details>

</section>

<section class="lesson-check" markdown="1">

### 第 5 题：两个极限 {#question-5--two-limits}

Find

$$\text{a}\quad
\lim_{x\to0}\frac{e^x\cos2x-1-x}{x^2},$$

and

$$\text{b}\quad
\lim_{x\to0}\frac{\sqrt{4+x}-2}{x}.$$

<details markdown="1">
<summary>提示</summary>

a 小题中，乘积保留至 $x^2$ 项；b 小题中，写成 $\sqrt{4+x}=2(1+\frac{x}{4})^{1/2}$。

</details>

<details markdown="1">
<summary>解答与检验</summary>

**a** 使用 $e^x=1+x+\frac12x^2+\cdots$ 和 $\cos2x=1-2x^2+\cdots$。它们的乘积为

$$e^x\cos2x=1+x-\frac32x^2+\cdots.$$

常数项和一次项相消。除以 $x^2$，并令 $x\to0$，得到 $\boxed{-\frac32}$。

**b** 由二项式展开得

$$\sqrt{4+x}=2+\frac{x}{4}-\frac{x^2}{64}+\cdots.$$

减去 $2$，除以 $x$，再令 $x\to0$。极限为 $\boxed{\frac14}$。

**检验：**b 小题有理化后得到 $\frac1{\sqrt{4+x}+2}$（适用于 $x\ne0$），其极限相同。

</details>

</section>

<section class="lesson-check" markdown="1">

### 第 6 题：积分收敛还是发散 {#question-6--convergent-or-divergent-integrals}

Show whether each integral converges. Give its value if it does.

$$\text{a}\quad\int_0^1\frac1x\,\mathrm dx,$$

and

$$\text{b}\quad\int_0^\infty xe^{-3x}\,\mathrm dx.$$

<details markdown="1">
<summary>提示</summary>

a 小题用 $\varepsilon>0$ 替换零；b 小题先使用有限上限 $R$，再作分部积分。

</details>

<details markdown="1">
<summary>解答与检验</summary>

**a**

$$\int\frac1x\,\mathrm dx=\ln x+C\quad(x>0),$$

$$\int_\varepsilon^1\frac1x\,\mathrm dx
=[\ln x]_\varepsilon^1=\ln1-\ln\varepsilon=-\ln\varepsilon.$$

$$\int_0^1\frac1x\,\mathrm dx
=\lim_{\varepsilon\to0^+}(-\ln\varepsilon)=+\infty.$$

当 $\varepsilon\to0^+$ 时，此式趋于 $+\infty$，所以积分发散。

**b**

沿用例 10 的分部积分选择： $u=x$, $\mathrm dv=e^{-3x}\,\mathrm dx$, $v=-\frac13e^{-3x}$.

$$\begin{aligned}
\int xe^{-3x}\,\mathrm dx
&=-\frac x3e^{-3x}+\frac13\int e^{-3x}\,\mathrm dx\\
&=-\left(\frac x3+\frac19\right)e^{-3x}+C.
\end{aligned}$$

所以

$$\begin{aligned}
\int_0^R xe^{-3x}\,\mathrm dx
&=\left[-\left(\frac x3+\frac19\right)e^{-3x}\right]_0^R\\
&=-\left(\frac R3+\frac19\right)e^{-3R}-\left[-\left(0+\frac19\right)e^0\right]\\
&=\frac19-\left(\frac R3+\frac19\right)e^{-3R}.
\end{aligned}$$

$$\int_0^\infty xe^{-3x}\,\mathrm dx
=\lim_{R\to\infty}\left[\frac19-\left(\frac R3+\frac19\right)e^{-3R}\right]=\frac19.$$

由于 $Re^{-3R}\to0$ 且 $e^{-3R}\to0$，反常积分收敛于 $\boxed{\frac19}$。

**检验：**第二个被积函数非负，积分值也为正。

</details>

</section>

<section class="lesson-check" markdown="1">

### 第 7 题：AQA 级数原题练习 {#question-7--original-aqa-series-practice}

**来源：**AQA Mathematics 6360，MFP3，January 2013，原卷第 2 题。原题分值：**1 + 4 marks**。教材索引：Chapter 19, practice examination question 2, printed p. 231。[Question paper, Q2 (PDF p. 2)](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP3/Papers-AQA/January%202013%20QP%20-%20FP3%20AQA.pdf#page=2); [AQA mark scheme, Q2 (PDF p. 4)](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP3/Papers-AQA/January%202013%20MS%20-%20FP3%20AQA.PDF#page=4). 本次重新读取题干及配套评分材料（2026-10-23）；链接为 PMT 托管的 AQA 编写材料，部分原卷为压缩排版版本。

**a** Write down the expansion of $e^{3x}$ in ascending powers of $x$ up to and including the term in $x^2$. **(1 mark)**

**b** Hence, or otherwise, find the term in $x^2$ in the expansion, in ascending powers of $x$, of

$$e^{3x}(1+2x)^{-3/2}.$$

**(4 marks)**

<details markdown="1">
<summary>提示</summary>

对第二个因式使用二项式级数。乘积中的 $x^2$ 项有三个来源。

</details>

<details markdown="1">
<summary>详细解答与检验</summary>

**a**

$$e^{3x}=1+3x+\frac92x^2+\cdots.$$

**b** 由二项式级数得

$$(1+2x)^{-3/2}=1-3x+\frac{15}{2}x^2+\cdots.$$

乘积中 $x^2$ 的系数为

$$\frac92+(3)(-3)+\frac{15}{2}=3.$$

所求的**项**为 $\boxed{3x^2}$。

**检验：**一次项相消，因此乘积从 $1+3x^2+\cdots$ 开始。二项式级数的标准有效范围为 $-\frac12<x<\frac12$，这也是此乘积使用的标准范围。

**评分材料核对：**先将两个因式分别展开至二次项，再相乘；一次项相消，二次项系数为 3。本课解答已对照上述 AQA 评分材料检查；这些解释由本课编写，并非官方评分细则。

</details>

</section>

<section class="lesson-check" markdown="1">

### 第 8 题：根据教材改编的积分练习 {#question-8--textbook-derived-integral-practice}

**来源：**根据所提供教材第 19 章模拟考试练习第 5 题改编，印刷页码 232。原题已定位为 AQA Mathematics 6360，MFP3，June 2011，Question 3。[原卷 Q3（PDF 第 2 页）](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP3/Papers-AQA/June%202011%20QP%20-%20FP3%20AQA.pdf#page=2)；[配套 AQA MS Q3（PDF 第 6 页）](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP3/Papers-AQA/June%202011%20MS%20-%20FP3%20AQA.PDF#page=6)。两份正文均于 2026-10-23 重新读取，为 PMT 托管的 AQA 文件。本教学改编不另指定官方分值。

**a** Find $\int x^2\ln x\,\mathrm dx$.

**b** Explain why $\int_0^e x^2\ln x\,\mathrm dx$ is an improper integral.

**c** Evaluate $\int_0^e x^2\ln x\,\mathrm dx$, showing the limiting process used.

<details markdown="1">
<summary>提示</summary>

使用分部积分法。用 $\varepsilon>0$ 替换积分下限，并利用 $\varepsilon^3\ln\varepsilon\to0$。

</details>

<details markdown="1">
<summary>详细解答与检验</summary>

**a** 取 $u=\ln x$ 和 $\mathrm dv=x^2\mathrm dx$：

$$\begin{aligned}
u&=\ln x,\quad\mathrm du=\frac1x\,\mathrm dx,\\
\mathrm dv&=x^2\,\mathrm dx,\quad v=\int x^2\,\mathrm dx=\frac{x^3}{3}.
\end{aligned}$$

$$\begin{aligned}
\int x^2\ln x\,\mathrm dx
&=\frac{x^3}{3}\ln x-\int\frac{x^3}{3}\frac1x\,\mathrm dx\\
&=\frac{x^3}{3}\ln x-\frac13\int x^2\,\mathrm dx\\
&=\frac{x^3}{3}\ln x-\frac13\frac{x^3}{3}+C\\
&=\boxed{\frac{x^3}{3}\ln x-\frac{x^3}{9}+C}.
\end{aligned}$$

**b** 被积函数含有 $\ln x$，它在积分下限 $x=0$ 处无定义。

**c** 对于 $\varepsilon>0$，

$$\begin{aligned}
\int_\varepsilon^e x^2\ln x\,\mathrm dx
&=\left[\frac{x^3}{3}\ln x-\frac{x^3}{9}\right]_\varepsilon^e\\
&=\left(\frac{e^3}{3}\ln e-\frac{e^3}{9}\right)\\
&\quad-\left(\frac{\varepsilon^3}{3}\ln\varepsilon-\frac{\varepsilon^3}{9}\right)\\
&=\frac{2e^3}{9}
-\frac{\varepsilon^3}{3}\ln\varepsilon+\frac{\varepsilon^3}{9}.
\end{aligned}$$

含 $\varepsilon$ 的两项均在 $\varepsilon\to0^+$ 时趋于零。因此

$$\int_0^e x^2\ln x\,\mathrm dx
=\lim_{\varepsilon\to0^+}\left(\frac{2e^3}{9}-\frac{\varepsilon^3}{3}\ln\varepsilon+\frac{\varepsilon^3}{9}\right)
=\boxed{\frac{2e^3}{9}}.$$

**检验：**对 a 小题的答案求导得到 $x^2\ln x$；额外产生的 $\frac13x^2$ 项相消。

本教学解答已与原题 AQA Q3 评分标准比较：分部积分、端点未定义、显式下限极限，以及对数边界项趋于零。

</details>

</section>

## 纠错与独立重试 {#diagnose-and-retry}

以下两项均为自拟教学任务，无官方分值。先写下错误原因，再看反馈；随后关闭所有解答，独立完成新任务。需要提示的任务应在稍后重新独立尝试。

<section class="lesson-check" markdown="1">

**Diagnose:** A learner truncates $e^{2x}$ after $1+2x$ and concludes that

$$\lim_{x\to0}(e^{2x}-1-2x)/x^2=0$$

. Explain why that truncation cannot decide the limit.

<details markdown="1">
<summary>反馈</summary>

保留的项全部相消，不能据此把余项当成零。分子首个剩余项为 $2x^2$，所以极限为 $2$。除法会使被舍去的项变为常数阶。

</details>

</section>

<section class="lesson-check" markdown="1">

**Independent retry:** Find the real constant $a$ for which

$$\lim_{x\to0}(e^{ax}-1-2x)/x^2$$

 is finite, and evaluate that limit.

<details markdown="1">
<summary>提示</summary>

先检查一次项系数，再计算二次项系数。

</details>

<details markdown="1">
<summary>重试解答与检验</summary>

分子为

$$(a-2)x+\frac{a^2}{2}x^2+\cdots$$

。要使双侧极限有限，必须有 $a=2$，从而消去除法后与 $1/x$ 成比例的项。此时极限为 $a^2/2=2$。

</details>

</section>

### 系数诊断与新重试 {#coefficient-retry}

以下为自拟题，无官方分值。先诊断，再关闭反馈，独立完成新函数的展开。

<section class="lesson-check" markdown="1">

**Diagnose:** A learner finds $f^{(3)}(0)=12$ and writes $12x^3$ as the cubic term. Explain and correct the error.

<details markdown="1">
<summary>反馈</summary>

导数不等于系数；三次项应为 $\frac{12}{3!}x^3=2x^3$. 回看[麦克劳林定义](#maclaurin-series)，在代入表中分别写“导数值”和“除以阶乘后的系数”。

</details>

</section>

<section class="lesson-check" markdown="1">

**Independent retry — self-written:** For $h(x)=\sqrt{1+2x}$, calculate the first three derivatives and their values at zero. Use these derivatives to form the Maclaurin expansion through $x^3$, showing the factorial divisors. State the standard range. Use the binomial series only afterwards as a check.

<details markdown="1">
<summary>提示</summary>

把根式写成幂，每次求导均乘以内层导数；不要把三阶导数直接当作三次项系数。

</details>

<details markdown="1">
<summary>解答与检验</summary>

$$\begin{aligned}
h^{\prime}(x)&=\tfrac12(1+2x)^{-1/2}\cdot2\\
&=(1+2x)^{-1/2},\\
h^{(2)}(x)&=-\tfrac12(1+2x)^{-3/2}\cdot2\\
&=-(1+2x)^{-3/2},\\
h^{(3)}(x)&=-(-\tfrac32)(1+2x)^{-5/2}\cdot2\\
&=3(1+2x)^{-5/2}.
\end{aligned}$$

$$h(0)=1,\quad h^{\prime}(0)=1,\quad h^{(2)}(0)=-1,\quad h^{(3)}(0)=3.$$

$$h(x)=1+x+\frac{-1}{2!}x^2+\frac3{3!}x^3+\cdots
=1+x-\frac{x^2}{2}+\frac{x^3}{2}+\cdots.$$

标准二项式范围为 $\lvert2x\rvert<1$, $-\frac12<x<\frac12$. 若仍漏阶乘，重列导数值与系数两列，再关闭解答重做；根式换了表示，检验的仍是由导数生成系数。

</details>

</section>

## 后续混合调用 {#later-review}

完成[下一章练习](/zh/alevel/a2-further-mathematics/de-moivres-theorem/#practice)后，不看本章解答，完成以下自拟连接任务。课程入口另有跨主题综合与延后任务，链接见本页末尾。

<section class="lesson-check" markdown="1">

**a** For $F(x)=(1+x)e^{-x}$, obtain its Maclaurin expansion through $x^3$ from actual derivatives. Hence find $\lim_{x\to0}(F(x)-1)/x^2$.

**b** Evaluate $\int_0^{\infty}F(x)\,\mathrm dx$, showing the integration and limiting process.

<details markdown="1">
<summary>提示</summary>

a 小题先作乘积求导；b 小题拆成两项，并对含一次幂的项作分部积分。

</details>

<details markdown="1">
<summary>解答与检验</summary>

**a**

$$\begin{aligned}
F^{\prime}(x)&=e^{-x}-(1+x)e^{-x}=-xe^{-x},\\
F^{(2)}(x)&=-e^{-x}+xe^{-x}=(x-1)e^{-x},\\
F^{(3)}(x)&=e^{-x}-(x-1)e^{-x}=(2-x)e^{-x}.
\end{aligned}$$

$$F(0)=1,\quad F^{\prime}(0)=0,\quad F^{(2)}(0)=-1,\quad F^{(3)}(0)=2.$$

$$F(x)=1+0x-\frac{x^2}{2!}+\frac{2x^3}{3!}+\cdots
=1-\frac{x^2}{2}+\frac{x^3}{3}+\cdots.$$

$$\frac{F(x)-1}{x^2}=-\frac12+\frac x3+\cdots\quad(x\ne0),\qquad
\lim_{x\to0}\frac{F(x)-1}{x^2}=-\frac12.$$

**b**

拆分积分，对含一次幂的项按例 10 作分部积分： $u=x$, $\mathrm dv=e^{-x}\,\mathrm dx$, $v=-e^{-x}$.

$$\begin{aligned}
\int(1+x)e^{-x}\,\mathrm dx
&=\int e^{-x}\,\mathrm dx-xe^{-x}+\int e^{-x}\,\mathrm dx\\
&=-e^{-x}-xe^{-x}-e^{-x}+C\\
&=-(x+2)e^{-x}+C.
\end{aligned}$$

$$\begin{aligned}
\int_0^R F(x)\,\mathrm dx
&=[-(x+2)e^{-x}]_0^R\\
&=-(R+2)e^{-R}-[-(0+2)e^0]\\
&=2-(R+2)e^{-R},\\
\int_0^{\infty}F(x)\,\mathrm dx
&=\lim_{R\to\infty}[2-(R+2)e^{-R}]=2.
\end{aligned}$$

末步使用 $Re^{-R}\to0$ 和 $e^{-R}\to0$。a 小题漏阶乘则回系数重试；b 小题漏下限的负号则回例 10 的两端代入，关闭答案后重写同一目标的计算。

</details>

</section>

## 快速参考 {#quick-reference}

| 任务 | 方法 | 检查要点 |
|---|---|---|
| 无穷级数 | 求部分和的极限，或使用合适的收敛性判别法 | $u_n\to0$ 是必要但非充分条件 |
| $x^r$ 的麦克劳林系数 | $\displaystyle \frac{f^{(r)}(0)}{r!}$ | 不要遗漏阶乘 |
| 标准对数展开 | $\ln(1+x)$：$-1<x\le1$ | 代入负表达式时，正确反转不等号方向 |
| 二项式级数 | 代入 $(1+u)^p$；非终止展开式的标准范围为 $\lvert u\rvert<1$ | 先提出常数因子 |
| 乘积与复合函数 | 保留所有会影响所需幂次的项 | 包括交叉项及系数为零的项 |
| 零处的极限 | 展开、相消，再除以最低公共幂次 | 先在 $x\ne0$ 时化简，再取极限 |
| 无穷积分限 | 使用有限积分限 $R$，再令 $R\to\infty$ | 说明剩余边界项均趋于零 |
| 零处的对数 | 使用 $\varepsilon>0$，再令 $\varepsilon\to0^+$ | 当 $k>0$ 时，$\varepsilon^k\ln\varepsilon\to0$ |
{: .wide-table}

**练习后：**若根据单项变小就判断收敛，重做第 1 题；若端点判断错误，重做第 2 题；若丢失常数因子，重做第 3 题；若复合函数展开漏项，重做第 4 题；若求极限时所有项都相消，复习例 6–7；若将零或无穷直接代入原函数，重做第 6、8 题。

**你应能够：**使用全部五种标准展开式，说明相关函数的有效范围，在相消后求极限，并通过取极限的过程计算反常积分或判断其发散。

教材：*International A Level Further Mathematics*，第 19 章，第 19.1–19.4 节，印刷页码 220–230；复习与模拟考试练习见第 231–232 页。
{: .lesson-meta}

本课依据 [OxfordAQA 高等数学 9665 课程大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf) FP2.6。例题解答为教学材料。第 7 题保留所提供教材中的 AQA 原题措辞与分值；第 8 题为根据教材改编的教学练习，已追溯到 AQA MFP3 June 2011 Q3 并读取配套 MS；本课未为改编题指定官方分值。

**学后下一步：**先关闭本章答案，完成课程入口的[跨主题综合任务](/zh/alevel/a2-further-mathematics/#mixed-review)；按入口规定的间隔再做[延后回顾任务](/zh/alevel/a2-further-mathematics/#later-review)。保留独立作答，按目标核对；需要提示的目标再回对应回补段后重试。

**学习路径：**[上一课：有限级数](/zh/alevel/a2-further-mathematics/finite-series/) · [下一课：棣莫弗定理](/zh/alevel/a2-further-mathematics/de-moivres-theorem/) · [返回课程](/zh/alevel/a2-further-mathematics/)。

{% include exam_topic_practice.html %}
