---
title: 反三角函数的微积分
layout: subjects
mathjax: true
grade: a2
subject: a2-further-mathematics
lang: zh-CN
translation_of: /alevel/a2-further-mathematics/inverse-trigonometric-functions/
permalink: /zh/alevel/a2-further-mathematics/inverse-trigonometric-functions/
toc_headings: "#method, #values-and-graphs, #differentiation, #standard-integrals, #completing-the-square, #definite-integrals, #integration-by-parts, #practice, #diagnose-and-retry, #quick-reference, #sources"
study_page: true
reading_layout: true
---

[高等纯数学](/zh/alevel/a2-further-mathematics/) · FP2.7 反三角函数（inverse trigonometric functions）的微积分

选取反三角函数的正确值，求相关函数的导数，并在变量缩放或配方后应用标准积分公式。

- **学习：**从[方法](#method)开始，再逐一完成例题。
- **作业帮助：**按需要查看[函数值与图像](#values-and-graphs)、[求导](#differentiation)、[标准积分](#standard-integrals)、[配方](#completing-the-square)、[定积分](#definite-integrals)或[分部积分](#integration-by-parts)。
- **复习：**先独立完成[练习](#practice)，再展开解答，最后查看[快速参考](#quick-reference)。

教材：*International A Level Further Mathematics*，第 22 章，第 22.1–22.2 节，印刷页码 270–279；复习与练习见第 280–281 页。

**开始前：**回补[反函数限制](/zh/alevel/a2-mathematics/functions/#inverse-functions)、[链式法则](/zh/alevel/a2-mathematics/differentiation/#composite-functions)、[隐式求导](/zh/alevel/a2-mathematics/differentiation/#implicit-functions)、[换元](/zh/alevel/a2-mathematics/integration/#substitution)、[分部积分](/zh/alevel/a2-mathematics/integration/#integration-by-parts)。回到例 1 先说明主值区间，例 4 写换元系数，例 8 再完成分部积分；端点无定义时回补[反常积分](/zh/alevel/a2-further-mathematics/series-and-limits/#improper-integrals)。全课用弧度。

**题目身份：**除明确标出官方原题或教学改编的题目外，本课例题与练习均为自拟教学题，不分配官方分值。

## 方法 {#method}

**学习目标：**说明定义域（domain）与值域（range），绘制反三角函数图像，求复合函数（composite function）的导数，并用反正弦（inverse sine）或反正切（inverse tangent）求积分的精确值。

- **求反函数的值：**根据指定的值域选择一个角度。计算器给出主值（principal value），并非三角方程的全部解。
- **求导：**识别内层函数 $u$，使用反函数的求导公式，再乘以 $\frac{\mathrm du}{\mathrm dx}$。
- **二次式的倒数：**检查分母是否有实根。若有两个不同的实根，使用部分分式（partial fractions）；若配方后得到平方和，使用反正切。
- **分母含平方根：**先配方，再寻找 $\sqrt{a^2-u^2}$ 的形式。保留积分外的全部系数，并检查平方根为正的范围。
- **计算定积分：**换元时同时改变上下限，或先换回 $x$，再使用原来的上下限。若被积函数在端点处无定义，应写出极限。
- **被积函数本身是反函数：**尝试分部积分，令 $u$ 等于该函数，并取 $\mathrm dv=\mathrm dx$。

**检查解题过程：**写出配方、换元及其导数、标准积分公式，以及代入上下限的步骤。对于“show that”题，应从计算过程推导出题目给定的结果。不定积分（indefinite integral）中保留 $+C$。

## 函数值与图像 {#values-and-graphs}

这里的 $\sin^{-1}x$、$\cos^{-1}x$ 和 $\tan^{-1}x$ 表示**反函数（inverse functions）**，也分别记作 $\operatorname{arcsin}x$、$\operatorname{arccos}x$ 和 $\operatorname{arctan}x$。

例如，$y=\sin^{-1}x$ 表示 $\sin y=x$，且 $-\frac\pi2\le y\le\frac\pi2$。它**不是** $\frac1{\sin x}$；这个倒数应写作 $\operatorname{cosec}x$。

| 函数 | 定义域：允许的 $x$ | 值域：返回的角度 $y$ |
|---|---|---|
| $y=\sin^{-1}x$ | $-1\le x\le1$ | $-\frac\pi2\le y\le\frac\pi2$ |
| $y=\cos^{-1}x$ | $-1\le x\le1$ | $0\le y\le\pi$ |
| $y=\tan^{-1}x$ | $x$ 为任意实数 | $-\frac\pi2<y<\frac\pi2$ |

先将原三角函数限制在一一对应（one-to-one）的区间上，再将它的图像关于 $y=x$ 作镜像：

- 对于反正弦，使用 $y=\sin x$，限制区间为 $-\frac\pi2\le x\le\frac\pi2$。
- 对于反余弦（inverse cosine），使用 $y=\cos x$，限制区间为 $0\le x\le\pi$。
- 对于反正切，使用 $y=\tan x$，限制区间为 $-\frac\pi2<x<\frac\pi2$。

![三种反三角函数的图像：反正弦经过负一、负二分之 pi 和一、二分之 pi；反余弦从负一、pi 到一、零；反正切经过原点，水平渐近线为 y 等于正负二分之 pi](/assets/img/further-inverse-trig-graphs.svg)

反正弦和反正切均为增函数，并经过 $(0,0)$，在该点的斜率为 $1$。反余弦为减函数，经过 $(0,\frac\pi2)$，在该点的斜率为 $-1$，两个端点分别为 $(-1,\pi)$ 和 $(1,0)$。

反正切图像的水平渐近线（horizontal asymptotes）为 $y=\pm\frac\pi2$；图像永远不会达到它们。反正弦和反余弦的定义域包含 $x=\pm1$，但在这些端点处不存在有限的导数。

<section class="worked-example" markdown="1">

### 例 1：在正确的值域内选择角度 {#example-1--choose-the-angle-in-the-correct-range}

**Question:** find $\sin^{-1}(-\frac12)$, $\cos^{-1}(-\frac{\sqrt3}{2})$ and $\tan^{-1}(-1)$. If $\sin^{-1}x=\frac{2\pi}{5}$, find $\cos^{-1}x$.

使用表格中的值域：

$$\boxed{\begin{aligned}
\sin^{-1}\left(-\frac12\right)&=-\frac\pi6,\\
\cos^{-1}\left(-\frac{\sqrt3}{2}\right)&=\frac{5\pi}{6},\\
\tan^{-1}(-1)&=-\frac\pi4.
\end{aligned}}$$

对于 $-1\le x\le1$，

$$\sin^{-1}x+\cos^{-1}x=\frac\pi2.$$

因此

$$\boxed{\cos^{-1}x=\frac\pi2-\frac{2\pi}{5}=\frac\pi{10}.}$$

**检验：**将每个角度代入相应的三角函数，并检查其是否属于要求的值域。例如，$\frac{7\pi}{6}$ 的正弦值也为 $-\frac12$，但该角不在反正弦的值域内。

**常见错误：**认为 $\sin^{-1}(\sin\theta)=\theta$ 对所有角度都成立。只有当 $\theta$ 属于反正弦的值域时，它才成立；否则，应在该值域内选择具有相同正弦值的角度。

</section>

## 求导 {#differentiation}

标准求导公式为

$$\boxed{\begin{aligned}
\frac{\mathrm d}{\mathrm dx}\sin^{-1}x
&=\frac1{\sqrt{1-x^2}},\\
\frac{\mathrm d}{\mathrm dx}\cos^{-1}x
&=-\frac1{\sqrt{1-x^2}},\\
\frac{\mathrm d}{\mathrm dx}\tan^{-1}x
&=\frac1{1+x^2}.
\end{aligned}}$$

反正弦与反余弦的导数公式适用于 $-1<x<1$。反正切的导数公式适用于任意实数 $x$。

<details markdown="1">
<summary>这些导数的正负号从何而来</summary>

若 $y=\sin^{-1}x$，则 $\sin y=x$。使用隐函数求导（implicit differentiation）：

$$\cos y\frac{\mathrm dy}{\mathrm dx}=1.$$

对于 $-1<x<1$，有 $-\frac\pi2<y<\frac\pi2$，所以 $\cos y>0$。因此

$$\begin{aligned}
\frac{\mathrm dy}{\mathrm dx}
&=\frac1{\cos y}\\
&=\frac1{\sqrt{1-\sin^2y}}\\
&=\frac1{\sqrt{1-x^2}}.
\end{aligned}$$

若 $y=\cos^{-1}x$，则 $\cos y=x$，且

$$-\sin y\frac{\mathrm dy}{\mathrm dx}=1.$$

此时 $0<y<\pi$，因此 $\sin y>0$，得到 $\frac{\mathrm dy}{\mathrm dx}=-\frac1{\sqrt{1-x^2}}$。

若 $y=\tan^{-1}x$，则 $\tan y=x$。因此

$$\sec^2y\frac{\mathrm dy}{\mathrm dx}=1.$$

因此

$$\begin{aligned}
\frac{\mathrm dy}{\mathrm dx}
&=\frac1{1+\tan^2y}\\
&=\frac1{1+x^2}.
\end{aligned}$$

</details>

对于可导的内层函数 $u=u(x)$，由链式法则得

$$\boxed{\begin{aligned}
\frac{\mathrm d}{\mathrm dx}\sin^{-1}u
&=\frac{u^{\prime}}{\sqrt{1-u^2}},\\
\frac{\mathrm d}{\mathrm dx}\cos^{-1}u
&=-\frac{u^{\prime}}{\sqrt{1-u^2}},\\
\frac{\mathrm d}{\mathrm dx}\tan^{-1}u
&=\frac{u^{\prime}}{1+u^2}.
\end{aligned}}$$

前两个公式适用于 $-1<u<1$ 的范围。第三个公式适用于 $u$ 有定义且可导的所有位置。

<section class="worked-example" markdown="1">

### 例 2：反余弦函数及其切线 {#example-2--an-inverse-cosine-and-its-tangent}

**Question:** differentiate $y=\cos^{-1}(2x-1)$. Find the tangent at $x=\frac12$.

函数在 $-1\le2x-1\le1$ 时有定义，因此 $0\le x\le1$。对于 $0<x<1$，

$$\begin{aligned}
\frac{\mathrm dy}{\mathrm dx}
&=-\frac2{\sqrt{1-(2x-1)^2}}\\
&=-\frac2{\sqrt{4x-4x^2}}\\
&=\boxed{-\frac1{\sqrt{x(1-x)}}}.
\end{aligned}$$

当 $x=\frac12$ 时，$y=\cos^{-1}0=\frac\pi2$，斜率为 $-2$。因此，切线（tangent）的方程为

$$\boxed{y-\frac\pi2=-2\left(x-\frac12\right).}$$

**检验：**导数在整个 $0<x<1$ 区间内为负，因此图像递减。两个端点属于函数的定义域，但不属于这个导数公式的定义域。

</section>

<section class="worked-example" markdown="1">

### 例 3：多步链式求导 {#example-3--more-than-one-chain-rule-step}

**Question:** differentiate $y=(\sin^{-1}2x)^3$ and $z=\tan^{-1}(\frac{x}{1+x^2})$.

对于 $y$，先对三次幂求导，再对反正弦求导，最后对 $2x$ 求导：

$$\begin{aligned}
\frac{\mathrm dy}{\mathrm dx}
&=3(\sin^{-1}2x)^2\frac2{\sqrt{1-4x^2}}\\
&=\boxed{\frac{6(\sin^{-1}2x)^2}{\sqrt{1-4x^2}}}.
\end{aligned}$$

这个导数公式适用于 $-\frac12<x<\frac12$。

对于 $z$，令 $u=\frac{x}{1+x^2}$。由商法则（quotient rule）得

$$u^{\prime}=\frac{1+x^2-2x^2}{(1+x^2)^2}
=\frac{1-x^2}{(1+x^2)^2}.$$

因此

$$\begin{aligned}
\frac{\mathrm dz}{\mathrm dx}
&=\frac{\frac{1-x^2}{(1+x^2)^2}}
{1+\frac{x^2}{(1+x^2)^2}}\\
&=\frac{1-x^2}{(1+x^2)^2+x^2}\\
&=\boxed{\frac{1-x^2}{x^4+3x^2+1}}.
\end{aligned}$$

分母为正，因此该导数对任意实数 $x$ 都有定义。

**检验：**$z^{\prime}(0)=1$，且 $z^{\prime}$ 在 $x=\pm1$ 时等于零。对于 $y$，若漏掉 $2x$ 的导数，答案会少一半。

</section>

## 标准积分 {#standard-integrals}

对于 $a>0$，

$$\boxed{\int\frac{\mathrm dx}{\sqrt{a^2-x^2}}
=\sin^{-1}\left(\frac xa\right)+C.}$$

第一个被积函数（integrand）在 $-a<x<a$ 时为实数且有定义。

$$\boxed{\int\frac{\mathrm dx}{a^2+x^2}
=\frac1a\tan^{-1}\left(\frac xa\right)+C.}$$

第一个结果也可以写成 $-\cos^{-1}(\frac xa)+C$。两种形式只相差一个常数。

**注意系数：**反正切积分在外面有系数 $\frac1a$，而反正弦积分没有。若不确定，可对结果求导检验。

<section class="worked-example" markdown="1">

### 例 4：保留变量缩放的系数 {#example-4--keep-the-scale-factor}

**Question:** find $\displaystyle\int\frac{\mathrm dx}{16+25x^2}$ and $\displaystyle\int\frac{\mathrm dx}{\sqrt{25-4x^2}}$.

第一个积分令 $u=5x$，于是 $\mathrm du=5\,\mathrm dx$：

$$\begin{aligned}
&\int\frac{\mathrm dx}{16+25x^2}\\
&=\frac15\int\frac{\mathrm du}{4^2+u^2}\\
&=\frac15\cdot\frac14\tan^{-1}\left(\frac u4\right)+C\\
&=\boxed{\frac1{20}\tan^{-1}\left(\frac{5x}{4}\right)+C}.
\end{aligned}$$

第二个积分令 $u=2x$，于是 $\mathrm du=2\,\mathrm dx$：

$$\begin{aligned}
&\int\frac{\mathrm dx}{\sqrt{25-4x^2}}\\
&=\frac12\int\frac{\mathrm du}{\sqrt{5^2-u^2}}\\
&=\boxed{\frac12\sin^{-1}\left(\frac{2x}{5}\right)+C}.
\end{aligned}$$

第二个被积函数在 $-\frac52<x<\frac52$ 时为实数且有定义。

**检验：**两个答案的导数分别为

$$\frac1{20}\frac{5/4}{1+(5x/4)^2}
=\frac1{16+25x^2},$$

$$\frac12\frac{2/5}{\sqrt{1-(2x/5)^2}}
=\frac1{\sqrt{25-4x^2}}.$$

**常见错误：**从平方根中提出 $25$ 时，没有对它开平方。例如，$\sqrt{25-4x^2}=5\sqrt{1-(2x/5)^2}$。

</section>

## 配方 {#completing-the-square}

对于二次式的倒数 $\frac1{ax^2+bx+c}$，其中 $a\ne0$，可利用判别式（discriminant）选择方法：

| 判别式 $b^2-4ac$ | 分母 | 方法 |
|---|---|---|
| 正 | 两个不同的实一次因式 | 使用部分分式，通常得到对数 |
| 零 | 重复的实一次因式 | 改写成负指数幂，再积分 |
| 负 | 没有实一次因式 | 配方后使用反正切 |

对于平方根，应化为 $\sqrt{a^2-u^2}$ 的形式，其中 $a>0$。若根号内是平方**和**，则需使用另一种方法；这将在双曲函数（hyperbolic functions）一课中介绍。

<section class="worked-example" markdown="1">

### 例 5：无实根的二次式的倒数 {#example-5--a-reciprocal-quadratic-with-no-real-roots}

**Question:** find $\displaystyle\int\frac{\mathrm dx}{x^2+6x+25}$.

配方得：

$$x^2+6x+25=(x+3)^2+16.$$

令 $u=x+3$，于是 $\mathrm du=\mathrm dx$。因此

$$\begin{aligned}
&\int\frac{\mathrm dx}{x^2+6x+25}\\
&=\int\frac{\mathrm du}{u^2+4^2}\\
&=\boxed{\frac14\tan^{-1}\left(\frac{x+3}{4}\right)+C}.
\end{aligned}$$

**检验：**求导得

$$\frac14\frac{1/4}{1+((x+3)/4)^2}
=\frac1{(x+3)^2+16}.$$

分母对任意实数 $x$ 均为正。

**同时检查分子。**若分子是分母的导数，应改用对数积分。例如，

$$\begin{aligned}
&\int\frac{2x+6}{x^2+6x+25}\,\mathrm dx\\
&=\int\frac{\mathrm dw}{w}\quad(w=x^2+6x+25,\ \mathrm dw=(2x+6)\,\mathrm dx)\\
&=\ln w+C=\ln(x^2+6x+25)+C.
\end{aligned}$$

</section>

<section class="worked-example" markdown="1">

### 例 6：根号内的二次式 {#example-6--a-quadratic-inside-a-square-root}

**Question:** find $\displaystyle\int\frac{\mathrm dx}{\sqrt{11-8x-4x^2}}$ and state where the integrand is real and defined.

配方得：

$$11-8x-4x^2=15-4(x+1)^2.$$

令 $u=2(x+1)$，于是 $\mathrm du=2\,\mathrm dx$：

$$\begin{aligned}
&\int\frac{\mathrm dx}{\sqrt{11-8x-4x^2}}\\
&=\frac12\int\frac{\mathrm du}{\sqrt{15-u^2}}\\
&=\boxed{\frac12\sin^{-1}\left(\frac{2(x+1)}{\sqrt{15}}\right)+C}.
\end{aligned}$$

分母必须为正，因此 $4(x+1)^2<15$。于是

$$\boxed{-1-\frac{\sqrt{15}}2<x<-1+\frac{\sqrt{15}}2.}$$

**检验：**对答案求导，得到 $\frac1{\sqrt{15-4(x+1)^2}}$。两个边界处的分母都为零，因此必须使用严格不等式。

</section>

## 定积分 {#definite-integrals}

进行 $u=g(x)$ 的换元时，应明确写出新的上下限。若原函数（antiderivative）用新变量表示，不可把 $x$ 的上下限直接代入用 $u$ 表示的原函数。

<section class="worked-example" markdown="1">

### 例 7：端点无定义但积分有限 {#example-7--an-undefined-endpoint-with-a-finite-integral}

**Question:** evaluate $\displaystyle\int_0^2\frac{\mathrm dx}{\sqrt{4-x^2}}$.

被积函数在 $x=2$ 处无定义，因此这是反常积分（improper integral）。先将上限换成 $b<2$，再取极限：

$$\begin{aligned}
I
&=\lim_{b\to2^-}\int_0^b\frac{\mathrm dx}{\sqrt{4-x^2}}\\
&=\lim_{b\to2^-}\int_0^{b/2}\frac{\mathrm du}{\sqrt{1-u^2}}
\quad(u=x/2,\ \mathrm dx=2\,\mathrm du)\\
&=\lim_{b\to2^-}[\sin^{-1}u]_0^{b/2}\\
&=\lim_{b\to2^-}\left(\sin^{-1}\frac b2-\sin^{-1}0\right)\\
&=\boxed{\frac\pi2}.
\end{aligned}$$

**检验：**反正弦函数在 $1$ 处连续，且 $\sin^{-1}1=\frac\pi2$。被积函数在某个端点处无定义，并不一定使积分发散（divergent）。

对于带有变量缩放系数的普通定积分，

$$\begin{aligned}
&\int_0^1\frac{\mathrm dx}{\sqrt{4-3x^2}}\\
&=\frac1{\sqrt3}\int_0^{\sqrt3/2}\frac{\mathrm du}{\sqrt{1-u^2}}
\quad(u=\sqrt3 x/2,\ \mathrm dx=2\,\mathrm du/\sqrt3)\\
&=\frac1{\sqrt3}[\sin^{-1}u]_0^{\sqrt3/2}\\
&=\frac1{\sqrt3}\left(\frac\pi3-0\right)
=\boxed{\frac\pi{3\sqrt3}}.
\end{aligned}$$

</section>

## 分部积分 {#integration-by-parts}

当被积函数本身是 $\sin^{-1}x$ 或 $\tan^{-1}x$ 时，不能直接套用标准的倒数形式积分。使用

$$\int u\,\mathrm dv=uv-\int v\,\mathrm du.$$

选择反三角函数作为 $u$，并取 $\mathrm dv=\mathrm dx$，于是 $v=x$。

<section class="worked-example" markdown="1">

### 例 8：对反正切函数本身积分 {#example-8--integrate-inverse-tangent-itself}

**Question:** find $\displaystyle\int\tan^{-1}x\,\mathrm dx$.

令 $u=\tan^{-1}x$ 和 $\mathrm dv=\mathrm dx$。于是 $\mathrm du=\frac{\mathrm dx}{1+x^2}$，且 $v=x$：

$$\begin{aligned}
&\int\tan^{-1}x\,\mathrm dx\\
&=x\tan^{-1}x-\int\frac{x}{1+x^2}\,\mathrm dx\\
&=x\tan^{-1}x-\frac12\int\frac{\mathrm dw}{w}
\quad(w=1+x^2,\ \mathrm dw=2x\,\mathrm dx)\\
&=x\tan^{-1}x-\frac12\ln w+C\\
&=\boxed{x\tan^{-1}x-\frac12\ln(1+x^2)+C}.
\end{aligned}$$

最后一个积分使用换元 $w=1+x^2$，其中 $\mathrm dw=2x\,\mathrm dx$。

**检验：**由乘积法则（product rule），

$$\begin{aligned}
&\frac{\mathrm d}{\mathrm dx}
\left(x\tan^{-1}x-\frac12\ln(1+x^2)\right)\\
&=\tan^{-1}x+\frac{x}{1+x^2}-\frac{x}{1+x^2}\\
&=\tan^{-1}x.
\end{aligned}$$

</section>

## 练习 {#practice}

先独立尝试每题，再展开提示或解答。第 1–5 题是**为本课编写的原创练习题**。第 6–8 题保留所提供教材中转载的 AQA 题干与分值。解答已独立核算，并与官方评分细则对照。

<section class="lesson-check" markdown="1">

### 第 1 题：主值与图像 {#question-1--principal-values-and-a-graph}

Find $\sin^{-1}(\sin\frac{5\pi}{6})$, $\cos^{-1}(\cos\frac{7\pi}{6})$ and $\tan^{-1}(\tan\frac{3\pi}{4})$. Sketch $y=\tan^{-1}x$, marking its intercept and asymptotes.

<details markdown="1">
<summary>提示</summary>

先计算内层三角函数的值，再在反函数的值域内选择角度。

</details>

<details markdown="1">
<summary>解答与检验</summary>

$$\boxed{\begin{aligned}
\sin^{-1}\left(\sin\frac{5\pi}{6}\right)&=\frac\pi6,\\
\cos^{-1}\left(\cos\frac{7\pi}{6}\right)&=\frac{5\pi}{6},\\
\tan^{-1}\left(\tan\frac{3\pi}{4}\right)&=-\frac\pi4.
\end{aligned}}$$

反正切图像递增且经过 $(0,0)$，在该点的斜率为 $1$。其水平渐近线为 $y=\frac\pi2$ 和 $y=-\frac\pi2$。定义域为任意实数 $x$，值域为 $-\frac\pi2<y<\frac\pi2$。可用[函数值与图像](#values-and-graphs)中的第三幅图检查形状。

**检验：**三个答案都属于要求的值域，而原来的三个角度均不属于相应值域。

</details>

</section>

<section class="lesson-check" markdown="1">

### 三图独立作图与纠错 {#three-graph-task}

**Self-written task — three graphs and an error.** Close or cover the reference figure. On separate labelled axes, sketch $y=\sin^{-1}x$, $y=\cos^{-1}x$ and $y=\tan^{-1}x$. Mark domains, ranges, endpoints or asymptotes, and the direction of change. A learner draws inverse cosine increasing from $(-1,0)$ to $(1,\pi)$. Correct the graph and explain the restriction on cosine that justifies your correction.

本任务为自拟题，无官方分值。提交三幅草图和一段纠错理由；先遮住已学参考图。

<details markdown="1">
<summary>提示</summary>

先限制原函数使其一一对应，再交换横纵坐标。

</details>

<details markdown="1">
<summary>答案与作图判据</summary>

反正弦从 $(-1,-\pi/2)$ 经 $(0,0)$ 增至 $(1,\pi/2)$，定义域 $[-1,1]$、值域 $[-\pi/2,\pi/2]$。反余弦从 $(-1,\pi)$ 经 $(0,\pi/2)$ **递减**至 $(1,0)$，定义域 $[-1,1]$、值域 $[0,\pi]$。余弦在 $[0,\pi]$ 上递减，关于 $y=x$ 反射后仍递减；错误图把端点颠倒了。反正切对所有实输入递增并经过 $(0,0)$，值域 $(-\pi/2,\pi/2)$，水平渐近线 $y=\pm\pi/2$，两条都不能达到。先在自己的三张图上标出这些特征，再与前面的参考图核对。

</details>

</section>

<section class="lesson-check" markdown="1">

### 第 2 题：链式法则与导数的定义域 {#question-2--chain-rule-and-the-derivatives-domain}

Differentiate $y=\sin^{-1}\sqrt{2x}$ and $z=\tan^{-1}(\frac{3x}{2})$. State the range of $x$ where each derivative formula applies.

<details markdown="1">
<summary>提示</summary>

对于 $y$，先确定 $0\le\sqrt{2x}\le1$ 的范围。求导时须同时对平方根和反正弦求导。

</details>

<details markdown="1">
<summary>解答与检验</summary>

对于 $y$，函数的定义域为 $0\le x\le\frac12$。当 $0<x<\frac12$ 时，

$$\begin{aligned}
\frac{\mathrm dy}{\mathrm dx}
&=\frac1{\sqrt{1-2x}}\cdot\frac1{\sqrt{2x}}\\
&=\boxed{\frac1{\sqrt{2x(1-2x)}}}.
\end{aligned}$$

对于 $z$，

$$\begin{aligned}
\frac{\mathrm dz}{\mathrm dx}
&=\frac{3/2}{1+(3x/2)^2}\\
&=\boxed{\frac6{4+9x^2}}.
\end{aligned}$$

该导数适用于任意实数 $x$。

**检验：**两个导数均为正。$y$ 的导数在两个端点处均无定义，尽管 $y$ 本身在这些点处有值。

</details>

</section>

<section class="lesson-check" markdown="1">

### 第 3 题：平方和还是平方根 {#question-3--a-sum-of-squares-or-a-square-root}

Find $\displaystyle\int\frac{\mathrm dx}{9+25x^2}$ and $\displaystyle\int\frac{\mathrm dx}{\sqrt{9-25x^2}}$.

<details markdown="1">
<summary>提示</summary>

两个积分都使用换元 $u=5x$。第一个使用反正切，第二个使用反正弦。

</details>

<details markdown="1">
<summary>解答与检验</summary>

由于 $\mathrm du=5\,\mathrm dx$，

$$\begin{aligned}
&\int\frac{\mathrm dx}{9+25x^2}\\
&=\frac15\int\frac{\mathrm du}{3^2+u^2}\\
&=\frac15\cdot\frac13\tan^{-1}\left(\frac u3\right)+C\\
&=\boxed{\frac1{15}\tan^{-1}\left(\frac{5x}{3}\right)+C},
\end{aligned}$$

$$\begin{aligned}
&\int\frac{\mathrm dx}{\sqrt{9-25x^2}}\\
&=\frac15\int\frac{\mathrm du}{\sqrt{3^2-u^2}}\\
&=\boxed{\frac15\sin^{-1}\left(\frac{5x}{3}\right)+C}.
\end{aligned}$$

第二个被积函数要求 $-\frac35<x<\frac35$。第一个对任意实数 $x$ 均有定义。

**检验：**求导可恢复两个原被积函数。系数 $\frac1{15}$ 和 $\frac15$ 不同，是因为标准反正切积分中额外含有系数 $\frac13$。

</details>

</section>

<section class="lesson-check" markdown="1">

### 第 4 题：对两个二次式配方 {#question-4--complete-two-squares}

Find $\displaystyle\int\frac{\mathrm dx}{2x^2+8x+13}$ and $\displaystyle\int\frac{\mathrm dx}{\sqrt{17+8x-2x^2}}$. State where the second integrand is real and defined.

<details markdown="1">
<summary>提示</summary>

配方后的结果分别为 $2(x+2)^2+5$ 和 $25-2(x-2)^2$。换元时须保留来自 $\mathrm dx$ 的系数。

</details>

<details markdown="1">
<summary>解答与检验</summary>

第一个积分令 $u=\sqrt2(x+2)$，于是 $\mathrm dx=\frac1{\sqrt2}\,\mathrm du$：

$$\begin{aligned}
&\int\frac{\mathrm dx}{2x^2+8x+13}\\
&=\frac1{\sqrt2}\int\frac{\mathrm du}{u^2+5}\\
&=\frac1{\sqrt2}\cdot\frac1{\sqrt5}\tan^{-1}\left(\frac u{\sqrt5}\right)+C\\
&=\boxed{\frac1{\sqrt{10}}\tan^{-1}\left(\frac{2x+4}{\sqrt{10}}\right)+C}.
\end{aligned}$$

第二个积分令 $v=\sqrt2(x-2)$，于是 $\mathrm dx=\frac1{\sqrt2}\,\mathrm dv$：

$$\begin{aligned}
&\int\frac{\mathrm dx}{\sqrt{17+8x-2x^2}}\\
&=\frac1{\sqrt2}\int\frac{\mathrm dv}{\sqrt{25-v^2}}\\
&=\boxed{\frac1{\sqrt2}\sin^{-1}\left(\frac{\sqrt2(x-2)}5\right)+C}.
\end{aligned}$$

第二个被积函数要求 $25-2(x-2)^2>0$，因此

$$\boxed{2-\frac5{\sqrt2}<x<2+\frac5{\sqrt2}.}$$

**检验：**展开两个配方后的式子，应恢复原来的二次式，再对答案求导。第二个答案的导数可化简为 $\frac1{\sqrt{25-2(x-2)^2}}$。

</details>

</section>

<section class="lesson-check" markdown="1">

### 第 5 题：反正切恒等式中缺少的条件 {#question-5--a-missing-condition-in-an-inverse-tangent-identity}

For which real values of $x$ is

$$\tan^{-1}\left(\frac{1+x}{1-x}\right)
=\frac\pi4+\tan^{-1}x$$

true? Justify your answer using the range of inverse tangent.

<details markdown="1">
<summary>提示</summary>

令 $\theta=\tan^{-1}x$。正切加法公式表明两个角度的正切值相同；还必须检查哪个角度属于主值范围。

</details>

<details markdown="1">
<summary>解答与检验</summary>

令 $\theta=\tan^{-1}x$，所以 $-\frac\pi2<\theta<\frac\pi2$。对于 $x\ne1$，

$$\tan\left(\frac\pi4+\theta\right)
=\frac{1+\tan\theta}{1-\tan\theta}
=\frac{1+x}{1-x}.$$

所提出的角度满足 $-\frac\pi4<\frac\pi4+\theta<\frac{3\pi}{4}$。它属于反正切的值域，当且仅当 $\theta<\frac\pi4$，即 $\boxed{x<1}$。

对于 $x>1$，减去 $\pi$ 后得到主值：

$$\tan^{-1}\left(\frac{1+x}{1-x}\right)
=\frac\pi4+\tan^{-1}x-\pi.$$

当 $x=1$ 时，左边无定义。

**检验：**$x=0$ 时两边均为 $\frac\pi4$。当 $x=2$ 时，左边为负，而题目所提出的右边大于 $\frac\pi2$，因此原恒等式在这里不成立。

</details>

</section>

<section class="lesson-check" markdown="1">

### 第 6 题：AQA——配方并求积分的精确值 {#question-6--aqa-complete-the-square-and-find-an-exact-integral}

**AQA 原题。**AQA Mathematics 6360，MFP2，2012 年 1 月，原卷第 6 题；教材第 22 章，模拟考试练习第 1 题，印刷页码 281。同一题亦见于 OxfordAQA FM03 2018 年样卷第 9 题。**8 marks: 2 + 6.** [Question paper, Q6 (PDF p. 3)](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-AQA/January%202012%20QP%20-%20FP2%20AQA.pdf#page=3); [AQA mark scheme, Q6 (PDF p. 7)](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-AQA/January%202012%20MS%20-%20FP2%20AQA.PDF#page=7). 本轮重新核读题干及配套 MS（2026-10-23，PDF 文本）；PMT 托管 AQA 编写材料，部分 QP 为压缩排版。

**(a)** Express $7+4x-2x^2$ in the form $a-b(x-c)^2$, where $a$, $b$ and $c$ are integers. **(2 marks)**

**(b)** By means of a suitable substitution, or otherwise, find the exact value of

$$\int_1^{5/2}\frac{\mathrm dx}{\sqrt{7+4x-2x^2}}.$$

**(6 marks)**

<details markdown="1">
<summary>提示</summary>

使用 $7+4x-2x^2=9-2(x-1)^2$。选择 $u=\sqrt2(x-1)$，并写出新的上下限。

</details>

<details markdown="1">
<summary>详细解答与检验</summary>

**(a)**

$$7+4x-2x^2=\boxed{9-2(x-1)^2},$$

因此，$a=9$、$b=2$、$c=1$。

**(b)** 令 $u=\sqrt2(x-1)$，于是 $\mathrm du=\sqrt2\,\mathrm dx$。换元后的下限为 $u=0$，对应 $x=1$；上限为 $u=\frac{3\sqrt2}{2}$，对应 $x=\frac52$：

$$\begin{aligned}
I
&=\frac1{\sqrt2}\int_0^{3\sqrt2/2}\frac{\mathrm du}{\sqrt{9-u^2}}\\
&=\frac1{\sqrt2}\left[\sin^{-1}\left(\frac u3\right)\right]_0^{3\sqrt2/2}\\
&=\frac1{\sqrt2}\left(\sin^{-1}\frac{\sqrt2}{2}-0\right)\\
&=\boxed{\frac\pi{4\sqrt2}}.
\end{aligned}$$

**检验：**根号内的式子在给定区间上始终为正。答案也可写作 $\frac{\pi\sqrt2}{8}$。

[OxfordAQA Specimen 2018 Q9, QP PDF pp. 15–16](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9665-FM03-international-a-level-further-mathematics-specimen-paper-2019-v3.pdf#page=15); [MS Q9, PDF p. 12](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9665-FM03-international-a-level-further-mathematics-mark-scheme-2016-v1.pdf#page=12). OxfordAQA 官方评分细则第 9 题检查配方、换元、系数、反正弦及上下限的使用。这是本课编写的解答。

</details>

</section>

<section class="lesson-check" markdown="1">

### 第 7 题：AQA——对反正弦进行分部积分 {#question-7--aqa-integrate-inverse-sine-by-parts}

**AQA 原题。**AQA MFP2，2011 年 1 月，第 5 题；教材第 22 章，模拟考试练习第 3 题，印刷页码 281。**8 marks: 2 + 6.** [Question paper, Q5 (PDF p. 3)](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-AQA/January%202011%20QP%20-%20FP2%20AQA.pdf#page=3); [AQA mark scheme, Q5 (PDF p. 5)](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-AQA/January%202011%20MS%20-%20FP2%20AQA.PDF#page=5). 本轮重新核读题干及配套 MS（2026-10-23，PDF 文本）；PMT 托管 AQA 编写材料，部分 QP 为压缩排版。

**(a)** Given that $u=\sqrt{1-x^2}$, find $\frac{\mathrm du}{\mathrm dx}$. **(2 marks)**

**(b)** Use integration by parts to show that

$$\int_0^{\sqrt3/2}\sin^{-1}x\,\mathrm dx=a\sqrt3\pi+b$$

where $a$ and $b$ are rational numbers. **(6 marks)**

<details markdown="1">
<summary>提示</summary>

第 (b) 小题对 $\sin^{-1}x$ 求导，并对 $1$ 积分。将第 (a) 小题的结果变号后，可得到 $\frac{x}{\sqrt{1-x^2}}$ 的一个原函数。

</details>

<details markdown="1">
<summary>详细解答与检验</summary>

**(a)** 由链式法则，

$$\begin{aligned}
\frac{\mathrm du}{\mathrm dx}
&=\frac{-2x}{2\sqrt{1-x^2}}\\
&=\boxed{-\frac{x}{\sqrt{1-x^2}}}.
\end{aligned}$$

**(b)** 由分部积分得

$$\begin{aligned}
&\int\sin^{-1}x\,\mathrm dx\\
&=x\sin^{-1}x-\int\frac{x}{\sqrt{1-x^2}}\,\mathrm dx.
\end{aligned}$$

由第 (a) 小题，

$$\begin{aligned}
w&=1-x^2,\qquad \mathrm dw=-2x\,\mathrm dx,\\
\int\frac{x}{\sqrt{1-x^2}}\,\mathrm dx
&=-\frac12\int w^{-1/2}\,\mathrm dw\\
&=-\frac12(2w^{1/2})+C=-\sqrt{1-x^2}+C.
\end{aligned}$$

因此

$$\begin{aligned}
I
&=\left[x\sin^{-1}x+\sqrt{1-x^2}\right]_0^{\sqrt3/2}\\
&=\left(\frac{\sqrt3}{2}\cdot\frac\pi3+\frac12\right)-\left(0\cdot0+1\right)\\
&=\boxed{\frac{\sqrt3\pi}{6}-\frac12}.
\end{aligned}$$

因此，$\boxed{a=\frac16,\ b=-\frac12}$。

**检验：**对 $x\sin^{-1}x+\sqrt{1-x^2}$ 求导得到 $\sin^{-1}x$，另外两项相消。$\frac{x}{\sqrt{1-x^2}}$ 的原函数中的负号必须保留。

这是本课编写的解答，已对照 AQA 评分细则第 5 题核验。

</details>

</section>

<section class="lesson-check" markdown="1">

### 第 8 题：AQA——利用导数求积分 {#question-8--aqa-use-a-derivative-to-find-an-integral}

**AQA 原题。**AQA MFP2，2007 年 6 月，第 4 题；教材第 22 章，模拟考试练习第 4 题，印刷页码 281。**7 marks: 2 + 5.** 原卷第 4 题。 [Question paper, Q4 (PDF p. 3)](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-AQA/June%202007%20QP%20-%20FP2%20AQA.PDF#page=3); [AQA mark scheme, Q4 (PDF p. 5)](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-AQA/June%202007%20MS%20-%20FP2%20AQA.PDF#page=5). 本轮重新核读题干及配套 MS（2026-10-23，PDF 文本）；PMT 托管 AQA 编写材料，部分 QP 为压缩排版。

**(a)** Differentiate $x\tan^{-1}x$ with respect to $x$. **(2 marks)**

**(b)** Show that

$$\int_0^1\tan^{-1}x\,\mathrm dx
=\frac\pi4-\ln\sqrt2.$$

**(5 marks)**

<details markdown="1">
<summary>提示</summary>

第 (a) 小题使用乘积法则。将得到的恒等式整理后积分，或使用分部积分。

</details>

<details markdown="1">
<summary>详细解答与检验</summary>

**(a)**

$$\begin{aligned}
&\frac{\mathrm d}{\mathrm dx}(x\tan^{-1}x)\\
&=\boxed{\tan^{-1}x+\frac{x}{1+x^2}}.
\end{aligned}$$

**(b)** 整理第 (a) 小题并积分，得

$$\begin{aligned}
&\int_0^1\tan^{-1}x\,\mathrm dx\\
&=[x\tan^{-1}x]_0^1-\int_0^1\frac{x}{1+x^2}\,\mathrm dx\\
&=\left(1\cdot\frac\pi4-0\cdot0\right)-\frac12\int_1^2\frac{\mathrm dw}{w}
\quad(w=1+x^2,\ \mathrm dw=2x\,\mathrm dx)\\
&=\frac\pi4-\frac12[\ln w]_1^2\\
&=\frac\pi4-\frac12(\ln2-\ln1)\\
&=\boxed{\frac\pi4-\ln\sqrt2}.
\end{aligned}$$

**检验：**结果为正且小于 $\frac\pi4$，因为在这个区间内有 $0\le\tan^{-1}x\le\frac\pi4$。

这是本课编写的解答，已对照 AQA 评分细则第 4 题核验。

</details>

</section>

## 纠错与独立重试 {#diagnose-and-retry}

以下任务均为自拟教学任务，无官方分值。先写下错误原因，再看反馈；随后关闭所有解答，独立完成新任务。需要提示的任务应在稍后重新独立尝试。

<section class="lesson-check" markdown="1">

**Diagnose:** A learner writes $\sin^{-1}(\sin(3\pi/4))=3\pi/4$. Correct the value and identify the failed condition.

<details markdown="1">
<summary>反馈</summary>

所给角度不在 $[-\pi/2,\pi/2]$ 内。主值为 $\pi/4$，它具有相同正弦值，并且属于规定区间。

</details>

</section>

<section class="lesson-check" markdown="1">

### 主值同目标重试 {#principal-value-retry}

**Principal-value retry (self-written).** For $\pi/2\le\theta\le3\pi/2$, express $\sin^{-1}(\sin\theta)$ in terms of $\theta$. Check both endpoints and $\theta=\pi$. Explain why simply returning $\theta$ usually fails.

关闭前题反馈，先写出等正弦关系与主值区间，再代三个检查点。

<details markdown="1">
<summary>提示</summary>

试用补角，并检查它在整个区间的位置。

</details>

<details markdown="1">
<summary>重试答案</summary>

$$\sin(\pi-\theta)=\sin\theta,\qquad
-\frac\pi2\le\pi-\theta\le\frac\pi2,$$

$$\boxed{\sin^{-1}(\sin\theta)=\pi-\theta\quad(\pi/2\le\theta\le3\pi/2).}$$

三个检查点依次给 $\pi/2,0,-\pi/2$。原角除左端点外超出反正弦值域；补角却始终在范围内。若仍直接返回原角，回到例 1，说明“同一正弦值”与“合法主值”两个条件后再试。

</details>

</section>

以下保留的任务另考积分与平移后的值域。

<section class="lesson-check" markdown="1">

**Independent retry:** A function has $y^{\prime}=3/(1+9x^2)$ for every real $x$, and $y(0)=\pi/6$. Find the function. Must its values all lie in the principal range of inverse tangent?

<details markdown="1">
<summary>提示</summary>

识别带缩放的反正切导数，再保留加法常数。

</details>

<details markdown="1">
<summary>重试解答与检验</summary>

$$\begin{aligned}
y&=\int\frac3{1+9x^2}\,\mathrm dx
=\int\frac{\mathrm du}{1+u^2}\quad(u=3x,\ \mathrm du=3\,\mathrm dx)\\
&=\tan^{-1}u+C=\tan^{-1}(3x)+C,\\
y(0)&=\tan^{-1}0+C=\pi/6\quad\Longrightarrow\quad C=\pi/6.
\end{aligned}$$

因此 $y=\tan^{-1}(3x)+\pi/6$。值域为 $(-\pi/3,2\pi/3)$，无须限制在反正切的主值范围，因为这里还作了竖直平移。求导可恢复给定导数。

</details>

</section>

**学后下一步：**先关闭本章答案，去课程入口完成[跨主题综合](/zh/alevel/a2-further-mathematics/#mixed-review)；完成后续学习，再做[延后任务](/zh/alevel/a2-further-mathematics/#later-review)。记录首次是否独立、使用了什么提示、错误原因及重试结果；若方法或条件出错，按本章“练习后”返回对应示范，再关闭解答重试。

## 快速参考 {#quick-reference}

| 任务 | 结果或第一步 | 检查要点 |
|---|---|---|
| 反正弦 | $-\frac\pi2\le\sin^{-1}x\le\frac\pi2$ | $-1\le x\le1$ |
| 反余弦 | $0\le\cos^{-1}x\le\pi$ | $-1\le x\le1$ |
| 反正切 | $-\frac\pi2<\tan^{-1}x<\frac\pi2$ | 输入可为任意实数；值域不包含两个端点 |
| 对 $\sin^{-1}u$ 求导 | $\frac{u^{\prime}}{\sqrt{1-u^2}}$ | 保留内层函数的导数；$-1<u<1$ |
| 对 $\cos^{-1}u$ 求导 | $-\frac{u^{\prime}}{\sqrt{1-u^2}}$ | 保留负号；$-1<u<1$ |
| 对 $\tan^{-1}u$ 求导 | $\frac{u^{\prime}}{1+u^2}$ | 检查 $u$ 有定义且可导的范围 |
| $\displaystyle\int\frac{\mathrm dx}{\sqrt{a^2-x^2}}$ | $\sin^{-1}(\frac xa)+C$ | $a>0$，且 $-a<x<a$ |
| $\displaystyle\int\frac{\mathrm dx}{a^2+x^2}$ | $\frac1a\tan^{-1}(\frac xa)+C$ | $a>0$；不要漏掉系数 $\frac1a$ |
| 平移或缩放后的二次式 | 先配方，再换元 | 保留来自 $\mathrm dx$ 的系数 |
| 被积函数为反函数 | 使用分部积分，取 $\mathrm dv=\mathrm dx$ | 对答案求导，检查符号 |
| 定积分 | 改变上下限，或换回 $x$ | 若被积函数在端点处无定义，应写出极限 |
{: .wide-table}

**练习后：**若角度超出了值域，重做第 1 题；若漏掉链式法则的系数或弄错定义域，重做第 2 题；若积分系数错误，重做第 3 题；若配方困难，重做第 4、6 题；若反正切恒等式给出了错误角度，重做第 5 题；若分部积分出现符号错误，重做第 7–8 题。

**你应能够：**绘制三种反三角函数的图像，说明其定义域与值域，使用其导数公式，识别两种标准积分，并在变量缩放、平移或分部积分后展示完整的计算过程。

## 来源与范围 {#sources}

本轮范围核对：2026-10-23，从当前 9665 资格页打开大纲，核对正文 v5.2 及本课条目；没有迁移至 9765。下列试卷／评分材料仅重新读取所注明题目与配套评分部分的 PDF 文本，未完成原卷图像的视觉核验。官方题身份与分值保留，改编与自拟任务不称官方题。

本课范围依据 [OxfordAQA Further Mathematics 9665 课程大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf) FP2.7。例题为教学材料。第 6–8 题保留所提供教材中的 AQA 原题与分值；本课解答在不定积分中使用 $+C$。

**学习路径：**[上一课：极坐标](/zh/alevel/a2-further-mathematics/polar-coordinates/) · [下一课：弧长与旋转曲面面积](/zh/alevel/a2-further-mathematics/arc-length-and-surface-area/) · [返回课程](/zh/alevel/a2-further-mathematics/)。
