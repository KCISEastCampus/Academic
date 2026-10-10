---
title: 积分：方法选择
layout: subjects
mathjax: true
grade: a2
subject: a2-mathematics
lang: zh-CN
translation_of: /alevel/a2-mathematics/integration/
permalink: /zh/alevel/a2-mathematics/integration/
toc_headings: h2
study_page: true
---

[纯数学](/zh/alevel/a2-mathematics/) · P2.7 积分

选择方法，完成积分，再通过求导检查答案。**被积函数**（integrand）是积分号内的函数。本页题干保留英文，方法、提示与解答使用中文。

- **学习：**从[选择方法](#choose-a-method)开始，并在每个[例题](#worked-examples)中说明选择理由。
- **作业帮助：**复习[换元积分法](#example-3--rewrite-everything-in-the-new-variable)、[分部积分法](#example-4--a-product-that-becomes-simpler)或[部分分式](/zh/alevel/a2-mathematics/partial-fractions/#integration)。
- **复习：**先在不看解答的情况下完成[练习](#practice)，然后查看[快速参考](#quick-reference)。

教材：第 6 章，第 6.1–6.4 节（第 82–95 页）。不定积分（indefinite integral）的积分常数（constant of integration）记作 $C$。

**开始前：**你应当掌握基本求导、链式法则（chain rule）、表达式变形和标准积分。

## 选择方法 {#choose-a-method}

**先化简。**展开括号、约去公因式，或把根式写成幂。然后检查能否使用标准积分。保留原定义域（domain）的限制。

| 观察到的形式 | 可先尝试的方法 | 例子 |
|---|---|---|
| 若干幂函数或标准函数的和 | 逐项积分 | $\displaystyle x^2+\frac{1}{\sqrt{x}}$ |
| 复合函数，同时含有内层函数的导数因子 | 逆用链式法则（chain rule in reverse） | $6x(x^2+1)^2$ |
| 分子是分母导数的常数倍 | 使用对数形式（logarithmic form） | $\displaystyle \frac{2x}{x^2+1}$ |
| 换元后每一部分都更简单 | 使用换元积分法（integration by substitution） | $x(x+2)^6$，令 $u=x+2$ |
| 对其中一个因子求导会使乘积更简单 | 尝试分部积分法（integration by parts） | $xe^{2x}$ |
| 分母可因式分解的有理函数（rational function） | 先检查对数形式；必要时做多项式除法并使用部分分式 | $\displaystyle \frac{5}{(x+1)(x+2)}$ |

同一个积分可能有不止一种解法。选择能使积分更简单的方法。如果题目指定了换元，就按要求使用。

**先试着选择方法，再开始计算：**比较以下三个积分。

$$\int xe^{x^2}\,dx,\qquad \int xe^{2x}\,dx,\qquad \int \frac{2x}{x^2+1}\,dx.$$

<details markdown="1">
<summary>显示方法选择</summary>

- 对于 $xe^{x^2}$，$x^2$ 的导数是 $2x$：逆用链式法则，或使用换元 $u=x^2$。
- 对于 $xe^{2x}$，对 $x$ 求导会使它简化，而 $e^{2x}$ 易于积分：使用分部积分法。
- 对于 $\frac{2x}{x^2+1}$，分子正好是分母的导数：使用对数形式。

乘积并不总是需要用分部积分法。

</details>

## 标准积分（standard integrals） {#standard-integrals}

下表包含教材第 6.1 节中的标准形式。三角函数使用弧度制（radians）。这里 $a\ne0$；每个结果都适用于被积函数和答案均有定义的区间。不同区间上的积分常数可以不同。

| 被积函数 | 积分 | 条件 |
|---|---|---|
| $x^n$ | $\displaystyle\frac{x^{n+1}}{n+1}+C$ | $n\ne-1$ |
| $(ax+b)^n$ | $\displaystyle\frac{(ax+b)^{n+1}}{a(n+1)}+C$ | $n\ne-1$ |
| $e^{ax+b}$ | $\displaystyle\frac1a e^{ax+b}+C$ | 所有实数 $x$ |
| $\displaystyle\frac1{ax+b}$ | $\displaystyle\frac1a\ln\lvert ax+b\rvert+C$ | $ax+b\ne0$ |
| $\sin(ax+b)$ | $\displaystyle-\frac1a\cos(ax+b)+C$ | 所有实数 $x$ |
| $\cos(ax+b)$ | $\displaystyle\frac1a\sin(ax+b)+C$ | 所有实数 $x$ |
| $\sec^2(ax+b)$ | $\displaystyle\frac1a\tan(ax+b)+C$ | $\cos(ax+b)\ne0$ |

**求导检查系数。**例如，

$$\int\sec^2(2x-1)\,dx=\frac12\tan(2x-1)+C.$$

求导时会乘以 $2$，正好抵消系数 $\frac12$。其他线性内层函数也需要除以其系数。

## 例题 {#worked-examples}

### 例题 1 — 先化简再选择方法 {#example-1--simplify-before-choosing}

**Question:** Find $\displaystyle\int\frac{x^2+3x}{x}\,dx$ for $x\ne0$.

**选择：**约去公因式，再对多项式积分。

$$\frac{x^2+3x}{x}=x+3,\qquad x\ne0.$$

$$\int(x+3)\,dx=\boxed{\frac{x^2}{2}+3x+C}.$$

**检查：**求导后得到 $x+3$，当 $x\ne0$ 时它与原被积函数相同。原式在 $x=0$ 时仍无定义。

### 例题 2 — 逆用链式法则 {#example-2--reverse-the-chain-rule}

**Question:** Find $\displaystyle\int6x(x^2+1)^2\,dx$.

**选择：**尝试对 $(x^2+1)^3$ 求导，并检查系数。

$$\frac{d}{dx}(x^2+1)^3=3(x^2+1)^2\cdot2x=6x(x^2+1)^2.$$

所以

$$\int6x(x^2+1)^2\,dx=\boxed{(x^2+1)^3+C}.$$

**检查：**求导后等于被积函数。链式法则还要乘上 $x^2+1$ 的导数 $2x$。

### 例题 3 — 换元后把所有部分都改写 {#example-3--rewrite-everything-in-the-new-variable}

**Question:** Find $\displaystyle\int x(x+2)^6\,dx$.

**来源：**[OxfordAQA Mathematics (9660) 课程大纲，P2.7，印刷第 23 页](https://www.oxfordaqa.com/wp-content/uploads/2023/10/oxfordaqa-a-level-mathematics-specification.pdf)的示例；解答由本站编写。

**选择：**$x+2$ 的导数是 $1$，因此因子 $x$ 不符合标准形式。令 $u=x+2$，把积分改写成 $u$ 的多项式。

**过程：**令 $u=x+2$，则 $x=u-2$ 且 $du=dx$。

$$\int x(x+2)^6\,dx=\int(u-2)u^6\,du=\int(u^7-2u^6)\,du.$$

积分后代回原变量：

$$\boxed{\frac{(x+2)^8}{8}-\frac{2(x+2)^7}{7}+C}.$$

**检查：**求导得到

$$\begin{aligned}&(x+2)^7-2(x+2)^6\\&\qquad=(x+2)^6[(x+2)-2]\\&\qquad=x(x+2)^6.\end{aligned}$$

**常见错误：**把 $(x+2)$ 改写成 $u$，却仍保留因子 $x$。换元后，要把所有部分都用 $u$ 表示，包括 $dx$。

### 例题 4 — 适合分部积分的乘积 {#example-4--a-product-that-becomes-simpler}

**Question:** Find $\displaystyle\int xe^{2x}\,dx$.

**选择：**使用分部积分法：对 $x$ 求导得到 $1$，而 $e^{2x}$ 容易积分。

$$v=x,\qquad \frac{du}{dx}=e^{2x},\qquad \frac{dv}{dx}=1,\qquad u=\frac{e^{2x}}{2}.$$

使用 $\displaystyle\int v\frac{du}{dx}\,dx=uv-\int u\frac{dv}{dx}\,dx$，

$$\int xe^{2x}\,dx=\frac{xe^{2x}}{2}-\frac12\int e^{2x}\,dx=\boxed{\frac{xe^{2x}}{2}-\frac{e^{2x}}{4}+C}.$$

**检查：**分别对两项求导：

$$\left(\frac{e^{2x}}2+xe^{2x}\right)-\frac{e^{2x}}2=xe^{2x}.$$

**常见错误：**使用 $u=e^{2x}$，而不是 $\frac{e^{2x}}2$。应用分部积分法前，先求导检查 $u$。

**对数函数也可以视为乘积。**若要计算 $\int\ln x\,dx$（$x>0$），把被积函数写成 $1\times\ln x$。选择 $v=\ln x$ 和 $du/dx=1$，则 $dv/dx=1/x$ 且 $u=x$：

$$\int\ln x\,dx=x\ln x-\int1\,dx=\boxed{x\ln x-x+C}.$$

求导得到 $\ln x+1-1=\ln x$。

### 例题 5 — 分式不一定要做部分分式分解 {#example-5--a-fraction-does-not-always-need-partial-fractions}

**Question:** Find $\displaystyle\int\frac{2x+2}{x^2+2x-15}\,dx$.

**选择：**分母的导数是 $2x+2$，恰好等于分子。使用标准对数形式。

$$\boxed{\ln\lvert x^2+2x-15\rvert+C}.$$

**检查：**$\ln\lvert f(x)\rvert$ 的导数是 $\frac{f'(x)}{f(x)}$，其中 $f(x)\ne0$。使用结果时，所选区间不能包含 $x=-5$ 或 $x=3$。

如果分子不符合这种形式，[部分分式](/zh/alevel/a2-mathematics/partial-fractions/#integration)可能会有帮助。先比较次数。如果使用多项式除法，要保留商。

## 定积分（definite integrals） {#definite-integrals}

**先检查区间。**使用 $F(b)-F(a)$ 之前，要检查被积函数在从 $a$ 到 $b$ 的区间上是否连续（continuous）。尤其要检查分母是否始终不为零。

### 例题 6 — 换元时也改变积分限 {#example-6--change-the-limits-with-the-variable}

**Question:** Evaluate $\displaystyle\int_0^1 2x(x^2+1)^3\,dx$.

**选择：**令 $u=x^2+1$，则 $du=2x\,dx$。积分限（limits of integration）也要改变：$x=0$ 时 $u=1$，$x=1$ 时 $u=2$。

$$\int_0^1 2x(x^2+1)^3\,dx=\int_1^2 u^3\,du=\left[\frac{u^4}{4}\right]_1^2=\boxed{\frac{15}{4}}.$$

**检查：**用 $x$ 积分得到 $\frac{(x^2+1)^4}{4}$。代入 $x=1$ 和 $x=0$ 会得到相同结果。

你可以用新变量和新积分限，也可以代回原变量并使用原积分限。不要把这两种做法混在一起。

**积分还是面积？**定积分给出带符号的面积（signed area）。要计算曲线与 $x$ 轴之间的总面积，应在曲线穿过 x 轴处拆分区间，并把正的面积相加。请参见[面积](/zh/alevel/a2-mathematics/integration-applications/#area)中的例题。

## 练习 {#practice}

**独立练习 · 20–25 分钟**

开始计算前，先写出方法和理由。用求导检查不定积分。每道题都先自己尝试，再打开提示或解答。

以下题目为自拟练习题，并非官方真题。时间仅供练习参考。这些题目没有官方分值。

### Q1 — 先化简 {#q1--simplify-first}

Find $\displaystyle\int\frac{x^2+4}{\sqrt{x}}\,dx$ for $x>0$.

<details markdown="1">
<summary>提示</summary>

把被积函数改写为 $x^{\frac32}+4x^{-\frac12}$。

</details>

<details markdown="1">
<summary>解答与检查</summary>

化简后使用幂函数积分法：

$$\boxed{\frac25x^{\frac52}+8\sqrt{x}+C}.$$

求导后得到 $x^{\frac32}+4x^{-\frac12}=\frac{x^2+4}{\sqrt{x}}$。

</details>

### Q2 — 逆用链式法则 {#q2--recognise-an-inner-derivative}

Find $\displaystyle\int x\cos(x^2)\,dx$.

<details markdown="1">
<summary>提示</summary>

对 $\sin(x^2)$ 求导。怎样选择系数才能得到所需的被积函数？

</details>

<details markdown="1">
<summary>解答与检查</summary>

直接识别，或令 $u=x^2$，得到

$$\boxed{\frac12\sin(x^2)+C}.$$

求导得到 $\frac12\cos(x^2)\cdot2x=x\cos(x^2)$。

</details>

### Q3 — 选择处理乘积的方法 {#q3--choose-how-to-handle-a-product}

Find $\displaystyle\int x\cos(2x)\,dx$.

Also find $\displaystyle\int x\ln x\,dx$ for $x>0$.

<details markdown="1">
<summary>提示</summary>

与 Q2 比较。对 $2x$ 求导不会得到因子 $x$。尝试令 $v=x$，使用分部积分法。

对于对数乘积，选择 $v=\ln x$ 和 $du/dx=x$。

</details>

<details markdown="1">
<summary>解答与检查</summary>

选择 $v=x$ 和 $\frac{du}{dx}=\cos(2x)$，则 $\frac{dv}{dx}=1$ 且 $u=\frac12\sin(2x)$。

$$\int x\cos(2x)\,dx=\frac{x\sin(2x)}2-\frac12\int\sin(2x)\,dx=\boxed{\frac{x\sin(2x)}2+\frac{\cos(2x)}4+C}.$$

求导得到

$$\begin{aligned}&\frac12\sin(2x)+x\cos(2x)-\frac12\sin(2x)\\&\qquad=x\cos(2x).\end{aligned}$$

对于第二个积分，$u=x^2/2$ 且 $dv/dx=1/x$，所以

$$\int x\ln x\,dx=\frac{x^2\ln x}{2}-\frac12\int x\,dx=\boxed{\frac{x^2\ln x}{2}-\frac{x^2}{4}+C}.$$

求导得到 $x\ln x+\frac x2-\frac x2=x\ln x$。

</details>

### Q4 — 对数形式还是部分分式？ {#q4--a-logarithm-or-partial-fractions}

Find $\displaystyle\int\frac{5}{(x+1)(x+2)}\,dx$.

<details markdown="1">
<summary>提示</summary>

分母是 $x^2+3x+2$。它的导数是否为 $5$ 的常数倍？如果不是，就分解这个分式。

</details>

<details markdown="1">
<summary>解答与检查</summary>

部分分式分解得到 $\frac{5}{x+1}-\frac{5}{x+2}$，因为 $5(x+2)-5(x+1)=5$。

$$\boxed{5\ln\lvert x+1\rvert-5\ln\lvert x+2\rvert+C}.$$

求导后得到这个部分分式分解。在所选区间中不能包含 $x=-1$ 或 $x=-2$。

</details>

### Q5 — 保持变量与积分限一致 {#q5--keep-the-variable-and-limits-consistent}

Evaluate $\displaystyle\int_0^1\frac{2x}{x^2+1}\,dx$.

<details markdown="1">
<summary>提示</summary>

令 $u=x^2+1$，相应的积分限为 $u=1$ 和 $u=2$；也可以直接使用对数形式。

</details>

<details markdown="1">
<summary>解答与检查</summary>

被积函数在 $[0,1]$ 上连续。换元得到

$$\int_1^2\frac1u\,du=[\ln u]_1^2=\boxed{\ln2}.$$

也可以直接算 $[\ln(x^2+1)]_0^1=\ln2$。被积函数非负，因此答案为正，符合预期。

</details>

## 快速参考 {#quick-reference}

| 方法 | 核心法则 | 使用前检查 |
|---|---|---|
| 幂函数积分法（power rule） | $\displaystyle\int x^n\,dx=\frac{x^{n+1}}{n+1}+C$ | $n\ne-1$；积分区间应在被积函数的定义域内 |
| 逆用链式法则 | $\displaystyle\int g'(x)[g(x)]^n\,dx=\frac{[g(x)]^{n+1}}{n+1}+C$ | $n\ne-1$；包含 $g(x)$ 的导数 |
| 对数形式 | $\displaystyle\int\frac{f'(x)}{f(x)}\,dx=\ln\lvert f(x)\rvert+C$ | $f(x)\ne0$ 在区间内成立 |
| 换元积分法 | 把整个积分都改写为新变量。定积分要改变积分限。 | 不要混用新旧变量 |
| 分部积分法 | $\displaystyle\int v\frac{du}{dx}\,dx=uv-\int u\frac{dv}{dx}\,dx$ | 剩余积分应当更简单 |
| 部分分式 | 必要时先除法，再分解并逐项积分 | 包含重复因式的每一个幂次，并保留商 |

**如果求导结果不对：**检查链式法则带来的系数、符号，以及换元或多项式除法中是否漏项。

**练习后：**记下觉得困难的步骤。不看解答再做一次，然后再尝试一道类似题。

**你应当能够：**选择一种方法并说明理由，写出过程，使用正确的积分限并检查答案。

继续学习[三角积分与应用](/zh/alevel/a2-mathematics/integration-applications/)，了解恒等式、面积和旋转体体积。打开[部分分式](/zh/alevel/a2-mathematics/partial-fractions/)学习分式分解的完整课程，或使用[积分公式参考](/zh/alevel/a2-mathematics/quick-reference/#p27-integration)查阅标准结果、面积和体积公式。

**学习路径：**[上一节：参数方程](/zh/alevel/a2-mathematics/parametric-equations/) · [下一节：积分：三角积分与应用](/zh/alevel/a2-mathematics/integration-applications/)。
