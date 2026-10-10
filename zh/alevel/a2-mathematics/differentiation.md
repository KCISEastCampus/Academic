---
title: 求导与导数
layout: subjects
mathjax: true
grade: a2
subject: a2-mathematics
lang: zh-CN
translation_of: /alevel/a2-mathematics/differentiation/
permalink: /zh/alevel/a2-mathematics/differentiation/
toc_headings: h2
study_page: true
---

[纯数学](/zh/alevel/a2-mathematics/) · P2.6 求导与导数

选择合适的求导法则，求曲线斜率（gradient），并用它求切线（tangent）、法线（normal）和驻点（stationary point）。本页例题与练习的题干保留英文，讲解、提示与解答使用中文。

- **学习：**从[基本导数](#standard-derivatives)开始，再学习[乘积与商](#products-and-quotients)、[复合函数](#composite-functions)和[隐函数](#implicit-functions)。
- **作业帮助：**选择法则前先辨认最外层运算。保留原函数的定义域；求三角函数的导数时使用弧度制。
- **复习：**先在不看解答的情况下尝试[练习](#practice)，然后查看[快速参考](#quick-reference)。

教材：第 5 章第 5.1–5.5 节（印刷版第 58–71 页），并结合本章复习中的应用题。第 5.6–5.7 节讲参数方程及其求导，参见[参数方程课程](/zh/alevel/a2-mathematics/parametric-equations/)。

**开始前：**你应当掌握多项式求导、斜率、直线方程，以及[指数与对数函数](/zh/alevel/a2-mathematics/exponential-and-logarithmic-functions/)和[三角函数与恒等式](/zh/alevel/a2-mathematics/trigonometric-functions-and-formulae/)。

本页所有例题和练习题均为自拟题，并非官方真题。建议练习时间仅供参考；题目没有官方分值。

## 基本导数 {#standard-derivatives}

下列三角函数公式均使用**弧度制（radians）**。每个导数（derivative）都只在原函数有定义且可导（differentiable）的范围内成立。

| $y$ | $\frac{dy}{dx}$ | 定义域限制 |
|---|---|---|
| $e^x$ | $e^x$ | 所有实数 $x$ |
| $\ln x$ | $\frac1x$ | $x>0$ |
| $\sin x$ | $\cos x$ | 所有实数 $x$ |
| $\cos x$ | $-\sin x$ | 所有实数 $x$ |
| $\tan x$ | $\sec^2 x$ | $\cos x\ne0$ |
| $\sec x$ | $\sec x\tan x$ | $\cos x\ne0$ |
| $\cosec x$ | $-\cosec x\cot x$ | $\sin x\ne0$ |
| $\cot x$ | $-\cosec^2 x$ | $\sin x\ne0$ |

和函数逐项求导。常数的导数为零；常数因子可以保留在求导号外。

函数 $e^x$ 的导数仍为自身。由 $y=\ln x$ 可得 $x=e^y$，于是 $\frac{dx}{dy}=e^y=x$，所以 $\frac{dy}{dx}=\frac1x$（适用于 $x>0$）。

### 例题 1 — 求给定点处的斜率 {#example-1--a-gradient-at-a-given-point}

**Question:** Find the gradient of $y=2e^x+\ln x-3\cos x$ at $x=1$.

$$\frac{dy}{dx}=2e^x+\frac1x+3\sin x.$$

代入的是**导函数**，不是原函数：

$$\boxed{m=2e+1+3\sin1=8.9610\ldots}.$$

**检查：**该点满足定义域限制 $x>0$。余弦函数求导会带来负号，因此对 $-3\cos x$ 求导得到 $+3\sin x$。

## 乘积与商 {#products-and-quotients}

若 $y=uv$，其中 $u$ 和 $v$ 都是 $x$ 的函数，乘积法则（product rule）给出

$$\frac{dy}{dx}=u\frac{dv}{dx}+v\frac{du}{dx}.$$

乘积的导数**不等于**两个函数导数的乘积。

若 $y=\frac uv$ 且 $v\ne0$，商法则（quotient rule）给出

$$\frac{dy}{dx}=\frac{v\frac{du}{dx}-u\frac{dv}{dx}}{v^2}.$$

分子中的顺序不要写反：分母乘分子导数，再减去分子乘分母导数。

### 例题 2 — 推导正切函数的导数 {#example-2--derive-the-tangent-derivative}

**Question:** Use the quotient rule to differentiate $\tan x$.

写成 $\tan x=\frac{\sin x}{\cos x}$，于是

$$\begin{aligned}
\frac{d}{dx}(\tan x)
&=\frac{\cos x\cos x-\sin x(-\sin x)}{\cos^2 x}\\
&=\frac{\cos^2 x+\sin^2 x}{\cos^2 x}=\boxed{\sec^2 x}.
\end{aligned}$$

此结果适用于 $\cos x\ne0$。表中的其他倒数三角函数导数也可以用商法则或链式法则（chain rule）推导。

### 例题 3 — 对乘积求导 {#example-3--differentiate-a-product}

**Question:** Differentiate $y=x^2e^{3x}$.

令 $u=x^2$、$v=e^{3x}$。它们的导数分别为 $2x$ 和 $3e^{3x}$；第二个结果用到了链式法则。

$$\boxed{\frac{dy}{dx}=2xe^{3x}+3x^2e^{3x}=xe^{3x}(2+3x)}.$$

**检查：**两个项都不可少。当 $x=0$ 时导数为零；这并不表示函数是常数。

### 例题 4 — 对商求导 {#example-4--differentiate-a-quotient}

**Question:** Differentiate $y=\frac{\ln x}{x}$.

定义域为 $x>0$。令 $u=\ln x$、$v=x$，则

$$\frac{dy}{dx}=\frac{x(\frac1x)-\ln x(1)}{x^2}=\boxed{\frac{1-\ln x}{x^2}}.$$

**检查：**把函数写成 $y=x^{-1}\ln x$ 并使用乘积法则，也会得到相同答案。当 $x=1$ 时，斜率为 $1$。

**计算前先选择：**把分式化简或改写为乘积，可能比使用商法则更简单。例如，对 $y=\frac{x^2+1}{x}=x+\frac1x$ 求导，得到 $1-\frac1{x^2}$，其中 $x\ne0$。

## 复合函数 {#composite-functions}

若 $y=f(u)$ 且 $u=g(x)$，则链式法则给出

$$\frac{dy}{dx}=\frac{dy}{du}\frac{du}{dx}.$$

先对外层函数求导，并保持它的输入不变；然后乘以内层函数的导数。

常用形式如下：

$$\frac{d}{dx}e^{g(x)}=e^{g(x)}g'(x),$$

$$\frac{d}{dx}\ln g(x)=\frac{g'(x)}{g(x)},\qquad g(x)>0,$$

$$\frac{d}{dx}[g(x)]^n=n[g(x)]^{n-1}g'(x),$$

前提是原来的幂函数和导数都有定义。三角函数也要乘以内层导数，例如 $\frac{d}{dx}\sin g(x)=\cos g(x)g'(x)$。

### 例题 5 — 两层求导 {#example-5--two-layers-of-differentiation}

**Question:** Differentiate (a) $\ln(1+x^2)$ and (b) $\cos^3(2x)$.

**(a)** 外层函数是对数，内层函数是 $1+x^2$：

$$\boxed{\frac{d}{dx}\ln(1+x^2)=\frac{2x}{1+x^2}}.$$

对数函数对所有实数 $x$ 都有定义，因为 $1+x^2>0$。

**(b)** 写成 $\cos^3(2x)=[\cos(2x)]^3$：

$$\begin{aligned}
\frac{d}{dx}[\cos(2x)]^3
&=3\cos^2(2x)\big(-2\sin(2x)\big)\\
&=\boxed{-6\cos^2(2x)\sin(2x)}.
\end{aligned}$$

**常见错误：**漏掉内层角度带来的因子 $2$。此外，$\cos^3(2x)$ 不等于 $\cos(6x)$。

### 例题 6 — 已知 x 关于 y 的表达式 {#example-6--when-x-is-given-in-terms-of-y}

**Question:** Given $x=y^3+y$, find $\frac{dy}{dx}$ at $y=1$.

先对 $y$ 求导：

$$\frac{dx}{dy}=3y^2+1.$$

由于这个导数不为零，

$$\frac{dy}{dx}=\frac1{3y^2+1},\qquad \boxed{\left.\frac{dy}{dx}\right|_{y=1}=\frac14}.$$

**检查：**$y=1$ 时 $x=2$，所以斜率对应点 $(2,1)$，而不是 $(1,2)$。如果 $\frac{dx}{dy}=0$，这个倒数公式不能给出有限斜率；应先考察曲线，再判断切线方向。

## 切线、法线与驻点 {#tangents-normals-and-stationary-points}

在正则点 $(a,b)$ 处，若切线斜率 $m$ 有限，则切线方程为

$$y-b=m(x-a).$$

当 $m\ne0$ 时，法线的斜率为 $-\frac1m$。若切线水平（$m=0$），法线是竖直直线 $x=a$。在切线竖直的正则点处，法线水平。

驻点满足 $\frac{dy}{dx}=0$。要给出驻点坐标，而不只是它的 $x$ 值。可以根据 $\frac{dy}{dx}$ 的符号变化或二阶导数（second derivative）来分类：

- 符号由正变负：局部极大值（local maximum）。
- 符号由负变正：局部极小值（local minimum）。
- 若 $y^{\prime\prime}(a)>0$，则为局部极小值；若 $y^{\prime\prime}(a)<0$，则为局部极大值。
- 若 $y^{\prime\prime}(a)=0$，二阶导数判别法不能确定。请改用其他方法。

### 例题 7 — 切线、法线与驻点 {#example-7--tangent-normal-and-a-stationary-point}

**Question:** For $y=xe^{-x}$, find the tangent and normal at $x=0$, then find and classify its stationary point.

使用乘积法则和链式法则可得

$$y'=e^{-x}(1-x),\qquad y^{\prime\prime}=e^{-x}(x-2).$$

当 $x=0$ 时，$y=0$ 且 $m=1$。因此切线为 $\boxed{y=x}$，法线为 $\boxed{y=-x}$。

因为 $e^{-x}>0$，所以 $y'=0$ 只有在 $x=1$ 时成立。驻点为 $\boxed{(1,e^{-1})}$。又因 $y^{\prime\prime}(1)=-e^{-1}<0$，该点是局部极大值点。

**检查：**$y'>0$ 对应 $x<1$，$y'<0$ 对应 $x>1$，这确认了该点是极大值点。在此驻点处，切线为 $y=e^{-1}$，法线为 $x=1$。

## 隐函数（implicit function） {#implicit-functions}

方程可以建立 $x$ 与 $y$ 的关系，却不一定把 $y$ 明确写成 $x$ 的函数。局部求导时，把 $y$ 视为 $x$ 的函数：

$$\frac{d}{dx}(y^2)=2y\frac{dy}{dx},\qquad\frac{d}{dx}(e^y)=e^y\frac{dy}{dx}.$$

若含有混合乘积，则使用乘积法则。例如，

$$\frac{d}{dx}(xy)=y+x\frac{dy}{dx}.$$

对等式两边求导，把所有 $\frac{dy}{dx}$ 项移到一起，再解出导数。如果分母为零，应回到原来的求导关系检查，而不要把这个商当成有限斜率。

### 例题 8 — 隐函数的切线与法线 {#example-8--an-implicit-tangent-and-normal}

**Question:** For $x^2+xy+y^2=7$, find $\frac{dy}{dx}$ and the tangent and normal at $(1,2)$.

逐项求导：

$$2x+y+x\frac{dy}{dx}+2y\frac{dy}{dx}=0.$$

因此

$$\boxed{\frac{dy}{dx}=-\frac{2x+y}{x+2y}},\qquad x+2y\ne0.$$

在 $(1,2)$ 处，$m=-\frac45$。切线和法线分别为

$$\boxed{y-2=-\frac45(x-1)},\qquad\boxed{y-2=\frac54(x-1)}.$$

**检查：**$1+2+4=7$，所以该点在曲线上。两条直线的斜率乘积为 $-1$，且都经过 $(1,2)$。

**一般点：**若 $(a,b)$ 在这条曲线上，把斜率表达式中的 $x,y$ 换成 $a,b$，并使用点 $(a,b)$。切线和法线也可以写成不需要除法的形式：

$$(2a+b)(x-a)+(a+2b)(y-b)=0\qquad\text{(tangent)},$$

$$(a+2b)(x-a)-(2a+b)(y-b)=0\qquad\text{(normal)}.$$

这两种形式也适用于水平线和竖直线。由于 $a^2+ab+b^2=7$，两个系数不可能同时为零。令 $a=1$、$b=2$，即可得到上面的切线和法线。

### 例题 9 — 推导反三角函数（inverse trigonometric function）的导数 {#example-9--derive-an-inverse-trigonometric-derivative}

**Question:** Given $y=\sin^{-1}x$, show that $\frac{dy}{dx}=\frac1{\sqrt{1-x^2}}$ for $-1<x<1$.

写成 $\sin y=x$，并使用隐式求导（implicit differentiation）：

$$\cos y\frac{dy}{dx}=1.$$

反函数的值域为 $-\frac\pi2\le y\le\frac\pi2$，因此在区间内部余弦为正。于是

$$\cos y=\sqrt{1-\sin^2 y}=\sqrt{1-x^2},$$

$$\boxed{\frac{dy}{dx}=\frac1{\sqrt{1-x^2}}},\qquad -1<x<1.$$

**检查：**反函数在 $x=\pm1$ 处有定义，但导数在这些点没有有限值。函数的定义域与导数的定义域可能不同。

同理，基本反三角函数的导数为

$$\frac{d}{dx}\cos^{-1}x=-\frac1{\sqrt{1-x^2}},\qquad -1<x<1,$$

$$\frac{d}{dx}\tan^{-1}x=\frac1{1+x^2},\qquad x\in\mathbb R.$$

复合反三角函数也要使用链式法则。

## 练习 {#practice}

建议用时约 **35–45 分钟**。写明所用法则，保留定义域，并给出精确的斜率和直线方程。

### Q1 — 基本导数与倒数三角函数 {#q1--standard-and-reciprocal-derivatives}

Differentiate $3e^x-2\ln x+4\sin x$. Also differentiate $\sec(3x)$ and $\cot(2x)$, stating their domains.

<details markdown="1">
<summary>提示</summary>

和函数逐项求导。倒数三角函数还需要乘以内层角度的导数。

</details>

<details markdown="1">
<summary>解答与检查</summary>

第一个函数的导数为 $\boxed{3e^x-\frac2x+4\cos x}$，其中 $x>0$。

$$\boxed{\frac{d}{dx}\sec(3x)=3\sec(3x)\tan(3x)},\qquad\cos(3x)\ne0,$$

$$\boxed{\frac{d}{dx}\cot(2x)=-2\cosec^2(2x)},\qquad\sin(2x)\ne0.$$

因子 $3$ 和 $2$ 来自内层角度的导数。分别对 $1/\cos(3x)$ 和 $\cos(2x)/\sin(2x)$ 求导，可以独立验证结果。

</details>

### Q2 — 乘积与切线 {#q2--product-and-tangent}

For $y=x\ln x$, find $\frac{dy}{dx}$ and the tangent at $x=1$.

<details markdown="1">
<summary>提示</summary>

使用乘积法则；写切线方程前，先求该点的 $y$ 坐标。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$\boxed{y'=\ln x+1},\qquad x>0.$$

当 $x=1$ 时，$y=0$ 且 $m=1$，所以切线为 $\boxed{y=x-1}$。它经过 $(1,0)$，且斜率符合要求。

</details>

### Q3 — 商 {#q3--quotient}

Differentiate $y=\frac{e^x}{x+1}$ and state the domain.

<details markdown="1">
<summary>提示</summary>

使用商法则，分母取 $x+1$。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$\boxed{y'=\frac{(x+1)e^x-e^x}{(x+1)^2}=\frac{xe^x}{(x+1)^2}},\qquad x\ne-1.$$

把函数写成乘积 $e^x(x+1)^{-1}$，也会得到相同导数。

</details>

### Q4 — 复合函数 {#q4--composite-functions}

Differentiate $e^{\sin x}$, $\ln(4-x^2)$ and $\sin^2(3x)$. State the logarithm's domain.

<details markdown="1">
<summary>提示</summary>

找出每个表达式的外层函数。最后一个表达式中的平方在正弦函数外面。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$\boxed{\frac{d}{dx}e^{\sin x}=e^{\sin x}\cos x},$$

$$\boxed{\frac{d}{dx}\ln(4-x^2)=-\frac{2x}{4-x^2}},\qquad -2<x<2,$$

$$\boxed{\frac{d}{dx}\sin^2(3x)=6\sin(3x)\cos(3x)=3\sin6x}.$$

最后一个等号使用了二倍角公式。第二个导数中的有理式在区间 $[-2,2]$ 之外也有定义，但原对数函数没有定义；因此必须保留 $-2<x<2$。

</details>

### Q5 — 驻点与竖直法线 {#q5--stationary-point-and-a-vertical-normal}

Find and classify the stationary point of $y=\ln x-x$, then give the normal there.

<details markdown="1">
<summary>提示</summary>

使用 $x>0$，求解 $y'=0$ 并求出 $y^{\prime\prime}$。切线斜率为零时，法线是竖直的。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$y'=\frac1x-1=0$ 得 $x=1$，且 $y=-1$。由于 $y^{\prime\prime}=-\frac1{x^2}<0$，所以 $\boxed{(1,-1)}$ 是局部极大值点。法线为 $\boxed{x=1}$。

导数在 $1$ 处由正变负，也确认了这一分类。不要把 $-1/0$ 当成有限的法线斜率。

</details>

### Q6 — 倒数关系求导 {#q6--reciprocal-derivative}

For $x=y^2+2y$, find $\frac{dy}{dx}$ at $y=1$ and the tangent there.

<details markdown="1">
<summary>提示</summary>

先求 $dx/dy$。题目给出的是 $y$ 坐标。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$\frac{dx}{dy}=2y+2$，所以 $\frac{dy}{dx}=\frac1{2y+2}$，其中 $y\ne-1$。当 $y=1$ 时，该点为 $(3,1)$，斜率为 $\frac14$。

切线为 $\boxed{y-1=\frac14(x-3)}$，并经过 $(3,1)$。当 $y=-1$ 时，原曲线在 $(-1,-1)$ 处有竖直切线，因此这里不能把倒数表达式当成有限斜率。

</details>

### Q7 — 隐式求导 {#q7--implicit-differentiation}

For $x^2+xy+y^2=3$, find the tangent and normal at $(1,1)$.

<details markdown="1">
<summary>提示</summary>

对 $xy$ 使用乘积法则，再把所有 $dy/dx$ 项合并。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$\frac{dy}{dx}=-\frac{2x+y}{x+2y}.$$

在 $(1,1)$ 处，斜率为 $-1$。切线为 $\boxed{y-1=-(x-1)}$，法线为 $\boxed{y=x}$。

该点满足 $1+1+1=3$；两条直线都经过该点，且它们的斜率乘积为 $-1$。

</details>

### Q8 — 反函数求导与链式法则 {#q8--inverse-derivative-and-the-chain-rule}

Use implicit differentiation to derive the derivative of $y=\tan^{-1}x$. Hence differentiate $\tan^{-1}(2x)$. Also differentiate $\sin^{-1}(3x)$ and state where its derivative is finite.

<details markdown="1">
<summary>提示</summary>

写成 $\tan y=x$，然后求导并使用 $\sec^2 y=1+\tan^2 y$。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$\sec^2 y\frac{dy}{dx}=1$，所以 $\boxed{\frac{dy}{dx}=\frac1{1+x^2}}$，对所有实数 $x$ 成立。

$$\boxed{\frac{d}{dx}\tan^{-1}(2x)=\frac2{1+4x^2}},$$

$$\boxed{\frac{d}{dx}\sin^{-1}(3x)=\frac3{\sqrt{1-9x^2}}},\qquad -\frac13<x<\frac13.$$

反正弦函数本身在 $x=\pm\frac13$ 处有定义，但它的导数在这些点没有有限值。当 $x=0$ 时，两个复合函数的导数分别为 $2$ 和 $3$，与内层因子一致。

</details>

## 快速参考 {#quick-reference}

| 任务 | 方法 | 检查 |
|---|---|---|
| 和函数或常数倍 | 逐项求导 | 常数的导数为零 |
| 乘积 | $u v'+v u'$ | 两项都要保留 |
| 商 | $\frac{v u'-u v'}{v^2}$ | 保持分子顺序，并对分母平方 |
| 复合函数 | 外层导数乘以内层导数 | 外层求导时保持输入不变 |
| 已知 $x$ 关于 $y$ 的表达式 | 先求 $dx/dy$，再取倒数 | $dx/dy$ 必须非零，结果才是有限值 |
| 隐函数 | 对每一项求导，再合并 $dy/dx$ 项 | 含 $y$ 的项要用链式法则；$xy$ 要用乘积法则 |
| 切线或法线 | 先求点和斜率 | 水平线和竖直线要分别处理 |
| 驻点 | 解 $y'=0$ 并分类 | 给出两个坐标；$y^{\prime\prime}=0$ 时无法判定 |

**如果答案看起来不对：**检查外层运算、内层导数、符号、弧度制、原函数定义域和点的坐标。数值差分可以帮助发现错误，但不能代替推导。

**你应当能够：**选择并组合求导法则，求直线方程，判断驻点类型，并对隐函数和反函数求导。

**学习路径：**[上一节：指数与对数函数](/zh/alevel/a2-mathematics/exponential-and-logarithmic-functions/) · [下一节：参数方程](/zh/alevel/a2-mathematics/parametric-equations/) · [返回纯数学主题索引](/zh/alevel/a2-mathematics/)。
