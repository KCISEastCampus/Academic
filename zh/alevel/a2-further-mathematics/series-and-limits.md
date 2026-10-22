---
title: 级数与极限
layout: subjects
mathjax: true
grade: a2
subject: a2-further-mathematics
lang: zh-CN
translation_of: /alevel/a2-further-mathematics/series-and-limits/
permalink: /zh/alevel/a2-further-mathematics/series-and-limits/
toc_headings: h2, h3, h4
study_page: true
---

[高等纯数学](/zh/alevel/a2-further-mathematics/) · FP2.6 级数与极限

本课学习用幂级数（power series）展开函数并求极限（limit），判断级数（series）何时收敛（converges），并通过明确写出取极限的过程，计算反常积分（improper integral）。

- **学习：**从[方法](#method)开始，再依次学习各部分。
- **作业帮助：**查看[收敛性](#convergence)、[麦克劳林级数](#maclaurin-series)、[相关函数](#related-functions)、[极限](#limits)或[反常积分](#improper-integrals)。
- **复习：**先尝试[练习](#practice)，再展开解答，最后核对[快速参考](#quick-reference)。

教材：*International A Level Further Mathematics*，第 19 章，第 19.1–19.4 节，印刷页码 220–230；复习与模拟考试练习见第 231–232 页。

**开始前：**复习[有限级数](/zh/alevel/a2-further-mathematics/finite-series/)、[二项式级数](/zh/alevel/a2-mathematics/binomial-series/)和[积分](/zh/alevel/a2-mathematics/integration/)。你应已掌握阶乘（factorial）、等比级数（geometric series）、求导和分部积分法（integration by parts）。三角函数级数中的角度须使用弧度（radian）。

**题目身份：**除明确标出官方原题或教学改编的题目外，本课例题与练习均为自拟教学题，不分配官方分值。

## 方法 {#method}

**学习目标：**求出并使用麦克劳林展开（Maclaurin expansion），说明其有效范围（range of validity），在相消后求极限，并判断反常积分是否有有限值。

根据问题选择第一步：

- **无穷和：**考察部分和（partial sum）。级数收敛时，各项必须趋于零，但这一条件本身并不足以证明收敛。
- **展开式：**使用标准级数，或计算 $x=0$ 处的各阶导数。代入时，应将替代 $x$ 的整个表达式代入。
- **乘积或复合函数（composite function）：**先判断哪些项会对题目要求的幂次产生贡献。
- **代入后得到 $\frac00$ 的极限：**展开到足够高的次数，找出相消后最先出现的非零项，再除以 $x$ 的公共幂次。
- **反常积分：**先用有限的积分限替代有问题的积分限，积分后再取极限。

**区分记号：**$=\cdots+\cdots$ 表示完整级数，后面还有更多项。只用有限项估算数值时，使用 $\approx$。无穷展开式有效，并不意味着只取少量项的近似在远离 $x=0$ 时仍然准确。

## 收敛性 {#convergence}

对于无穷级数（infinite series）$\sum_{r=1}^{\infty}u_r$，定义其**部分和**为

$$S_n=\sum_{r=1}^{n}u_r.$$

若 $S_n$ 在 $n\to\infty$ 时趋于有限极限，就称级数**收敛（converges）**。这个极限就是级数的和。若不存在有限极限，就称级数**发散（diverges）**。

发散级数不一定趋于 $+\infty$：其部分和也可能趋于 $-\infty$，或持续变化而不趋近于某一个值。

对于等比级数，

$$\sum_{r=0}^{n-1}aq^r=\frac{a(1-q^n)}{1-q},\qquad q\ne1.$$

当 $\lvert q\rvert<1$ 时，$q^n\to0$，于是

$$\boxed{\sum_{r=0}^{\infty}aq^r=\frac{a}{1-q}.}$$

例如，$1+\frac12+\frac14+\cdots=2$。当 $q=1$ 且 $a\ne0$ 时，部分和为 $na$，不存在有限的级数和。

**常见错误：**因为 $u_n\to0$ 就断言级数收敛。这是必要条件（necessary condition），却不能证明收敛。

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

<details markdown="1">
<summary>实用检验：比值判别法（ratio test）</summary>

这一方法有助于解答教材中的收敛性练习。对于非零项，计算

$$L=\lim_{n\to\infty}\left\lvert\frac{u_{n+1}}{u_n}\right\rvert,$$

前提是这一极限存在。

- 若 $L<1$，级数绝对收敛（converges absolutely），即 $\lvert u_n\rvert$ 的和有限。
- 若 $L>1$，级数发散。
- 若 $L=1$，此判别法无法作出结论，需要使用其他论证。

对于 $u_n=\frac{3^n}{n!}$，相邻项的比值为 $\frac3{n+1}\to0$，所以级数收敛。对于调和级数（harmonic series），比值趋于 $1$，此判别法不能解决问题；应使用上面的分组论证。

</details>

## 麦克劳林级数 {#maclaurin-series}

**幂级数**是按 $x$ 的非负整数幂从低到高排列的级数。**麦克劳林级数（Maclaurin series）**是以 $x=0$ 为展开中心的幂级数。

对于可以用这种方式表示的函数，麦克劳林定理（Maclaurin's theorem）给出

$$\begin{aligned}
f(x)={}&f(0)+xf^{\prime}(0)+\frac{x^2}{2!}f^{(2)}(0)\\
&+\frac{x^3}{3!}f^{(3)}(0)+\cdots.
\end{aligned}$$

这里 $f^{(r)}(0)$ 表示在零处取值的第 $r$ 阶导数，因此 $x^r$ 的系数（coefficient）为 $\frac{f^{(r)}(0)}{r!}$。这些导数值必须存在且有限。展开式只能在其有效范围内使用。

**常见错误：**直接把 $f^{(r)}(0)$ 当作系数，忘记除以 $r!$。

### 例 2：由导数求系数 {#example-2--find-coefficients-from-derivatives}

**Question:** use Maclaurin's theorem to expand $f(x)=e^{2x}$ up to and including the term in $x^3$.

各阶导数在零处的值为

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

### 按总次数截断乘积 {#multiply-series}

先确定目标最高次幂。两项相乘时次数相加，保留所有可能贡献目标次数的交叉项，再合并同类项。

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

### 复合展开的内层与外层阶数 {#compose-series}

用一个临时变量表示内层函数，再代入外层的标准展开式。检查内层各项会怎样影响所需的最高次幂后，才截去高阶项。

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

## 极限 {#limits}

函数在某点的值与函数在该点的极限是不同的问题。函数可能在 $x=0$ 处无定义，却仍然在 $x\to0$ 时存在极限。

$\frac00$ 这一形式不能确定极限。分子、分母都应展开到足够高的次数，找出相消后的首个非零项。先约去 $x$ 的某个幂次（此时 $x\ne0$），再让 $x$ 趋于零。

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

### 例 8：无穷上限 {#example-8--an-infinite-upper-bound}

**Question:** evaluate $\int_1^\infty\frac1{x^2}\,\mathrm dx$, showing the limiting process.

对于 $R>1$，

$$\begin{aligned}
\int_1^R x^{-2}\,\mathrm dx
&=\left[-\frac1x\right]_1^R\\
&=1-\frac1R.
\end{aligned}$$

因此

$$\int_1^\infty\frac1{x^2}\,\mathrm dx
=\lim_{R\to\infty}\left(1-\frac1R\right)
=\boxed{1}.$$

**比较：**$\int_1^R\frac1x\,\mathrm dx=\ln R\to+\infty$，因此 $\int_1^\infty\frac1x\,\mathrm dx$ 发散。两种情况下被积函数都趋于零，但仅凭这一点不能判断积分是否收敛。

### 例 9：零处的对数 {#example-9--a-logarithm-at-zero}

**Question:** evaluate $\int_0^1 x\ln x\,\mathrm dx$, showing the limiting process.

$\ln x$ 在 $x=0$ 处无定义。用 $\varepsilon>0$ 替换积分下限。

由分部积分法得

$$\int x\ln x\,\mathrm dx
=\frac{x^2}{2}\ln x-\frac{x^2}{4}+C.$$

于是

$$\begin{aligned}
\int_\varepsilon^1 x\ln x\,\mathrm dx
&=\left[\frac{x^2}{2}\ln x-\frac{x^2}{4}\right]_\varepsilon^1\\
&=-\frac14-\frac{\varepsilon^2}{2}\ln\varepsilon
+\frac{\varepsilon^2}{4}.
\end{aligned}$$

当 $\varepsilon\to0^+$ 时，$\varepsilon^2\ln\varepsilon$ 和 $\varepsilon^2$ 均趋于零。因此积分收敛，且

$$\boxed{\int_0^1 x\ln x\,\mathrm dx=-\frac14.}$$

**检验：**$x\ln x<0$ 在 $0<x<1$ 上成立，因此积分应为负。计算时不能写出 $\ln0$。

### 例 10：无穷区间上的分部积分 {#example-10--integration-by-parts-at-infinity}

**Question:** evaluate $\int_0^\infty xe^{-2x}\,\mathrm dx$, showing the limiting process.

使用分部积分法，取 $u=x$ 和 $\mathrm dv=e^{-2x}\mathrm dx$，得到

$$\int xe^{-2x}\,\mathrm dx
=-\left(\frac{x}{2}+\frac14\right)e^{-2x}+C.$$

对于有限的 $R>0$，

$$\begin{aligned}
\int_0^R xe^{-2x}\,\mathrm dx
&=\frac14-\left(\frac{R}{2}+\frac14\right)e^{-2R}.
\end{aligned}$$

$Re^{-2R}$ 和 $e^{-2R}$ 均在 $R\to\infty$ 时趋于零。因此

$$\boxed{\int_0^\infty xe^{-2x}\,\mathrm dx=\frac14.}$$

**常见错误：**把 $\infty$ 当作可以代入原函数（antiderivative）的数。应使用有限积分限 $R$，并写出其取极限的过程。

## 练习 {#practice}

展开题须说明有效范围；极限题须展示相消后的首个非零项；反常积分题须写出取极限的过程。

第 1–6 题为自拟题。第 7 题为所提供教材中转载的 AQA 原题。第 8 题为根据教材改编的教学练习，原始考试来源已在下文定位，本课不为改编题指定官方分值。

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

### 第 2 题：代入负表达式 {#question-2--a-negative-substitution}

Expand $\ln(1-3x)$ up to and including the term in $x^3$. State the range of validity, including any allowed endpoint.

<details markdown="1">
<summary>提示</summary>

将 $-3x$ 代入 $\ln(1+u)$。解不等式 $-1<-3x\le1$ 时须留意方向。

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

</details>

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

$$\int_\varepsilon^1\frac1x\,\mathrm dx=-\ln\varepsilon.$$

当 $\varepsilon\to0^+$ 时，此式趋于 $+\infty$，所以积分发散。

**b**

$$\int xe^{-3x}\,\mathrm dx
=-\left(\frac{x}{3}+\frac19\right)e^{-3x}+C.$$

所以

$$\int_0^R xe^{-3x}\,\mathrm dx
=\frac19-\left(\frac{R}{3}+\frac19\right)e^{-3R}.$$

由于 $Re^{-3R}\to0$ 且 $e^{-3R}\to0$，反常积分收敛于 $\boxed{\frac19}$。

**检验：**第二个被积函数非负，积分值也为正。

</details>

### 第 7 题：AQA 级数原题练习 {#question-7--original-aqa-series-practice}

**来源：**AQA Mathematics 6360，MFP3，January 2013，原卷第 2 题。原题分值：**1 + 4 marks**。教材索引：Chapter 19, practice examination question 2, printed p. 231。[Question paper, Q2 (PDF p. 2)](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP3/Papers-AQA/January%202013%20QP%20-%20FP3%20AQA.pdf#page=2); [AQA mark scheme, Q2 (PDF p. 4)](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP3/Papers-AQA/January%202013%20MS%20-%20FP3%20AQA.PDF#page=4). 本轮已读取题干及配套评分材料（2026-10-22）；链接为 PMT 托管的 AQA 编写材料，部分原卷为压缩排版版本。

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

### 第 8 题：根据教材改编的积分练习 {#question-8--textbook-derived-integral-practice}

**来源：**根据所提供教材第 19 章模拟考试练习第 5 题改编，印刷页码 232。原题已定位为 AQA Mathematics 6360，MFP3，June 2011，Question 3。[原卷 Q3（PDF 第 2 页）](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP3/Papers-AQA/June%202011%20QP%20-%20FP3%20AQA.pdf#page=2)；[配套 AQA MS Q3（PDF 第 6 页）](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP3/Papers-AQA/June%202011%20MS%20-%20FP3%20AQA.PDF#page=6)。两份正文均于 2026-10-22 实际读取，为 PMT 托管的 AQA 文件。本教学改编不另指定官方分值。

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
\int x^2\ln x\,\mathrm dx
&=\frac{x^3}{3}\ln x-\frac13\int x^2\,\mathrm dx\\
&=\boxed{\frac{x^3}{3}\ln x-\frac{x^3}{9}+C}.
\end{aligned}$$

**b** 被积函数含有 $\ln x$，它在积分下限 $x=0$ 处无定义。

**c** 对于 $\varepsilon>0$，

$$\begin{aligned}
\int_\varepsilon^e x^2\ln x\,\mathrm dx
&=\left[\frac{x^3}{3}\ln x-\frac{x^3}{9}\right]_\varepsilon^e\\
&=\frac{2e^3}{9}
-\frac{\varepsilon^3}{3}\ln\varepsilon+\frac{\varepsilon^3}{9}.
\end{aligned}$$

含 $\varepsilon$ 的两项均在 $\varepsilon\to0^+$ 时趋于零。因此

$$\boxed{\int_0^e x^2\ln x\,\mathrm dx=\frac{2e^3}{9}.}$$

**检验：**对 a 小题的答案求导得到 $x^2\ln x$；额外产生的 $\frac13x^2$ 项相消。

本教学解答已与原题 AQA Q3 评分标准比较：分部积分、端点未定义、显式下限极限，以及对数边界项趋于零。

</details>

## 纠错与独立重试 {#diagnose-and-retry}

以下两项均为自拟教学任务，无官方分值。先写下错误原因，再看反馈；随后关闭所有解答，独立完成新任务。需要提示的任务应在稍后重新独立尝试。

**Diagnose:** A learner truncates $e^{2x}$ after $1+2x$ and concludes that

$$\lim_{x\to0}(e^{2x}-1-2x)/x^2=0$$

. Explain why that truncation cannot decide the limit.

<details markdown="1">
<summary>反馈</summary>

保留的项全部相消，不能据此把余项当成零。分子首个剩余项为 $2x^2$，所以极限为 $2$。除法会使被舍去的项变为常数阶。

</details>

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

本课依据 [OxfordAQA 高等数学 9665 课程大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf) FP2.6。例题解答为教学材料。第 7 题保留所提供教材中的 AQA 原题措辞与分值；第 8 题为根据教材改编的教学练习，已追溯到 AQA MFP3 June 2011 Q3 并读取配套 MS；本课未为改编题指定官方分值。

**学习路径：**[上一课：有限级数](/zh/alevel/a2-further-mathematics/finite-series/) · [下一课：棣莫弗定理](/zh/alevel/a2-further-mathematics/de-moivres-theorem/) · [返回课程](/zh/alevel/a2-further-mathematics/)。
