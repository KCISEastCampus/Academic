---
title: 函数、复合函数与反函数
layout: subjects
mathjax: true
grade: a2
subject: a2-mathematics
lang: zh-CN
translation_of: /alevel/a2-mathematics/functions/
permalink: /zh/alevel/a2-mathematics/functions/
toc_headings: h2
study_page: true
---

[纯数学](/zh/alevel/a2-mathematics/) · P2.1 代数与函数

学习如何求定义域（domain）和值域（range）、构造复合函数（composite function）以及求反函数（inverse function）。每一步都要检查输入值是否符合条件。

教材：第 1 章，第 1.1–1.3 节（第 2–8 页）。下方例题和练习均为自拟教学题。

- **学习：**从[定义域和值域](#domain-and-range)开始，再学习例题。
- **作业帮助：**查看[复合函数](#composite-functions)或[反函数](#inverse-functions)。
- **复习：**先尝试[练习题](#practice)，再打开解答。可用[快速参考](#quick-reference)核对方法。

**开始前：**你应当会代入数值、解简单方程、配方和描绘基本图像。

## 定义域和值域 {#domain-and-range}

**函数（function）**对其定义域内的每个输入值，都恰好对应一个输出值。例如，$f(x)=x^2$ 是一个函数：$f(-2)=4$，只有这一个输出。表达式 $\pm\sqrt{x}$ 在 $x>0$ 时会给出两个输出，因此它不能定义一个以 $x$ 为自变量的函数。

- **定义域（domain）**是所有允许输入值组成的集合。
- **值域（range）**是该定义域对应的所有输出值组成的集合。

函数可以写成 $f(x)=x^2$ 或 $f:x\mapsto x^2$。也要写明它的定义域。改变定义域可能会改变值域。

### 先找出允许的输入值 {#find-the-allowed-inputs-first}

| 检查对象 | 条件 | 例子 |
|---|---|---|
| 分母 | 不能为零 | $\displaystyle\frac{1}{x-2}$ 要求 $x\ne2$ |
| 平方根 | 根号内的表达式不能为负 | $\sqrt{x-3}$ 要求 $x\geq3$ |
| 对数 | 真数（argument）必须为正 | $\ln(x+1)$ 要求 $x>-1$ |
| 题目给定的定义域 | 按题目给出的限制处理 | $x^2$ 在 $x\geq2$ 时的值域为 $f(x)\geq4$ |

如果题目要求最大的实数定义域，就取表达式有定义的所有实数输入值。如果题目给了较小的定义域，就按题目指定的定义域处理。

### 例题 1 — 转折点（turning point）可能位于定义域内部 {#example-1--a-turning-point-can-lie-inside-the-domain}

**Question:** The function $f$ is defined by $f(x)=(x-1)^2+2$ for $-1\leq x\leq3$. Find its range.

**思路：**除了区间端点，还要检查转折点。

图像是一条抛物线，最低点为 $(1,2)$。由于 $x=1$ 属于定义域，最小输出值为 $2$。

在两个端点处，

$$f(-1)=6,\qquad f(3)=6.$$

图像连续，并且会取到最小值与最大值之间的每一个值。因此，

$$\boxed{2\leq f(x)\leq6}.$$

**检查：**$f(0)=3$ 落在值域内。函数不可能取到 $7$，因为在这个定义域上 $(x-1)^2\leq4$。

**常见错误：**只看区间端点的函数值。两个端点处的值都是 $6$，但值域并不只是 $\lbrace6\rbrace$。

### 一一函数与多对一函数 {#one-to-one-and-many-to-one}

**一一函数（one-to-one function）**会把不同输入映射为不同输出。**多对一函数（many-to-one function）**可能把两个或更多不同输入映射为同一个输出。

在例题 1 中，$f(-1)=f(3)=6$，所以 $f$ 是多对一函数。如果把定义域限制为 $1\leq x\leq3$，输出就会随着 $x$ 增大而增大，因此函数是一一函数。

在图像上，水平线检验（horizontal line test）可以这样理解：水平线与一一函数的图像至多相交一次。这有助于判断反函数是否存在。

### 例题 2 — 分段函数与有限定义域 {#example-2--a-piecewise-function-and-a-finite-domain}

**分段函数（piecewise function）**在定义域的不同部分使用不同的表达式。代入之前，先选对对应的表达式。

**Question:** For real $x$, let

$$p(x)=\begin{cases}x^2,&x\leq0,\\2x+1,&x>0.\end{cases}$$

Find $p(-2)$, $p(0)$ and $p(2)$, and state the range. Then find the range when the domain is restricted to $\lbrace-2,0,2\rbrace$.

第一段给出 $p(-2)=4$ 和 $p(0)=0$。第二段给出 $p(2)=5$。

对于所有实数输入，第一段会给出所有不小于零的输出；第二段给出的输出都大于 $1$。因此，整个值域是 $\boxed{p(x)\geq0}$。

若定义域是有限集合，只允许三个输入值，因此值域为 $\boxed{\lbrace0,4,5\rbrace}$。它的图像由三个互不相连的点组成，不是一条连续曲线。

**草图检查：**对于整个实数定义域，画出 $y=x^2$，只保留 $x\leq0$ 的部分，并在 $(0,0)$ 处画实心点；再画 $y=2x+1$，只保留 $x>0$ 的部分，并在 $(0,1)$ 处画空心点。$x=0$ 仍然只有一个输出值。

## 复合函数 {#composite-functions}

**复合函数（composite function）**是一个函数作用在另一个函数的输出上。记号 $fg(x)$ 表示 $f(g(x))$：先应用 $g$，再应用 $f$。

$$x\xrightarrow{g}g(x)\xrightarrow{f}f(g(x)).$$

**要检查两点：**输入 $x$ 必须属于 $g$ 的定义域；$g(x)$ 的输出也必须属于 $f$ 的定义域。

### 例题 3 — 顺序会改变表达式与定义域 {#example-2--order-changes-the-formula-and-the-domain}

**Question:** Let $f(x)=2x-3$ for $x\in\mathbb R$, and $g(x)=\sqrt{x}$ for $x\geq0$. Find $fg(x)$ and $gf(x)$, with their domains and ranges.

**求 $fg(x)$。**先应用 $g$：

$$fg(x)=f(\sqrt{x})=\boxed{2\sqrt{x}-3}.$$

输入必须满足 $x\geq0$。$g$ 的输出都在 $f$ 的定义域内，因为 $f$ 接受所有实数。最小输出值为 $-3$，在 $x=0$ 时取到。

**定义域：**$x\geq0$。**值域：**$fg(x)\geq-3$。

**求 $gf(x)$。**先应用 $f$：

$$gf(x)=g(2x-3)=\boxed{\sqrt{2x-3}}.$$

输出 $2x-3$ 必须属于 $g$ 的定义域，因此

$$2x-3\geq0\quad\Rightarrow\quad x\geq\frac32.$$

**定义域：**$x\geq\frac32$。**值域：**$gf(x)\geq0$。

**检查顺序：**$fg(4)=1$，但 $gf(4)=\sqrt5$。通常，$fg$ 和 $gf$ 是不同的函数。

**常见错误：**把 $fg(x)$ 当成乘积 $f(x)g(x)$。这里的乘积会是 $(2x-3)\sqrt{x}$，这是另一个表达式。

### 找出错误 — 哪种顺序需要加限制？ {#spot-the-error--which-order-needs-the-restriction}

设 $f(x)=\sqrt{x}$，其中 $x\geq0$；$g(x)=x-2$，其中 $x\in\mathbb R$。一位学生写道：

$$gf(x)=\sqrt{x}-2,\qquad x\geq2.$$

<details markdown="1">
<summary>显示修正</summary>

表达式正确，但定义域应为 $x\geq0$。函数 $g$ 接受负数输入，也可能给出负数输出，因此 $\sqrt{x}-2$ 不需要非负。

另一种顺序是 $fg(x)=\sqrt{x-2}$，它确实要求 $x\geq2$。

</details>

## 反函数 {#inverse-functions}

**反函数（inverse function）**会撤销原函数的作用。它把 $f$ 的值域映回 $f$ 的定义域，记作 $f^{-1}$。

**记号 $f^{-1}(x)$ 并不表示 $\frac{1}{f(x)}$。**

只有在指定的定义域上是一一函数，函数才有反函数。如果两个输入得到同一个输出，那么反向映射时一个输入就会对应两个答案。

### 求反函数 {#find-an-inverse}

1. 检查函数是否为一一函数，并使用题目指定的定义域。
2. 写出 $y=f(x)$。
3. 交换 $x$ 与 $y$。
4. 整理方程，解出 $y$（make y the subject）。若需要选择正负号，依据定义域选择。
5. 写明 $f^{-1}$ 的定义域和值域。

定义域和值域互换：

| 原函数 | 反函数 |
|---|---|
| $f$ 的定义域 | $f^{-1}$ 的值域 |
| $f$ 的值域 | $f^{-1}$ 的定义域 |

### 例题 4 — 先限制定义域，再选择平方根 {#example-3--restrict-the-domain-before-choosing-a-square-root}

**Question:** Let $f(x)=(x-1)^2+2$ for $x\geq1$. Find $f^{-1}$, including its domain and range.

**检查：**这是抛物线递增的部分，所以 $f$ 是一一函数。它的值域为 $f(x)\geq2$。

写成 $y=(x-1)^2+2$，再交换 $x$ 与 $y$：

$$x=(y-1)^2+2\quad\Rightarrow\quad y-1=\pm\sqrt{x-2}.$$

反函数的输出必须属于原函数的定义域，因此 $y\geq1$。选择正平方根：

$$\boxed{f^{-1}(x)=1+\sqrt{x-2}}.$$

**$f^{-1}$ 的定义域：**$x\geq2$。**$f^{-1}$ 的值域：**$f^{-1}(x)\geq1$。

**两个方向都要检查：**

$$f(f^{-1}(x))=(\sqrt{x-2})^2+2=x,\qquad x\geq2.$$

$$f^{-1}(f(x))=1+\sqrt{(x-1)^2}=1+\lvert x-1\rvert=x,\qquad x\geq1.$$

最后一步用到了 $x\geq1$。一般来说，$\sqrt{a^2}=\lvert a\rvert$，不一定等于 $a$。

**常见错误：**把两个平方根都作为反函数。反函数本身也是函数，所以每个允许的输入只能有一个输出。

### 图像会发生什么变化？ {#what-happens-to-the-graph}

把 $y=f(x)$ 的图像沿直线 $y=x$ 反射，就得到 $y=f^{-1}(x)$ 的图像。点 $(a,b)$ 会变成 $(b,a)$。

例题 4 中，点 $(1,2)$ 和 $(2,3)$ 位于 $f$ 的图像上；它们分别对应 $(2,1)$ 和 $(3,2)$，位于 $f^{-1}$ 的图像上。

![非负 x 上 y 等于 x 平方的图像及其反函数 y 等于 x 平方根关于 y 等于 x 对称。点 (2,4) 与 (4,2) 互换。](/assets/img/functions-inverse.svg)

图中使用了更简单的一组函数：$f(x)=x^2$（$x\geq0$）和 $f^{-1}(x)=\sqrt{x}$。例题 4 也遵循同样的反射规律。

### 例题 5 — 排除的输入会成为排除的输出 {#example-4--an-excluded-input-becomes-an-excluded-output}

**Question:** Let $h(x)=3+\frac{1}{x-2}$ for $x\ne2$. Find $h^{-1}$, including its domain and range.

分式永远不会等于零，因此 $h(x)\ne3$。每个不等于 $3$ 的输出都恰好来自一个输入，所以 $h$ 是一一函数。

交换 $x$ 与 $y$ 后，原式 $y=3+\frac{1}{x-2}$ 可写为：

$$x=3+\frac{1}{y-2}\quad\Rightarrow\quad x-3=\frac{1}{y-2}\quad\Rightarrow\quad y=2+\frac{1}{x-3}.$$

$$\boxed{h^{-1}(x)=2+\frac{1}{x-3}}.$$

**$h^{-1}$ 的定义域：**$x\ne3$。**$h^{-1}$ 的值域：**$h^{-1}(x)\ne2$。

**检查：**$h(4)=\frac72$，而 $h^{-1}(\frac72)=4$。此外，

$$h(h^{-1}(x))=3+\frac{1}{\frac{1}{x-3}}=x,\qquad x\ne3.$$

## 练习 {#practice}

**独立练习 · 20–25 分钟**

请先在纸上完成每道题，再打开提示或解答。题目要求定义域和值域时都要写明，并解释任何限制。以下均为自拟练习题，没有官方分值。练习用时仅供参考。

### Q1 — 平方根函数的定义域和值域 {#q1--domain-and-range-of-a-square-root}

Find the largest possible real domain and the range of $f(x)=\sqrt{5-x}$.

<details markdown="1">
<summary>提示</summary>

根号内的表达式不能为负。当 $x$ 越来越小时，输出值会怎样变化？

</details>

<details markdown="1">
<summary>解答与检查</summary>

$5-x\geq0$，所以**定义域**为 $x\leq5$。输出非负且没有上界，因此**值域**为 $f(x)\geq0$。

对于任意输出 $y\geq0$，输入 $x=5-y^2$ 都符合定义域，并且 $f(x)=y$。这说明每个非负输出值都能取到。

</details>

### Q2 — 限制定义域并不总能得到反函数 {#q2--a-restricted-domain-does-not-always-give-an-inverse}

Let $f(x)=x^2$ for $-2\leq x\leq1$. Find its range. Does it have an inverse function on this domain? Explain your answer.

<details markdown="1">
<summary>提示</summary>

除了端点，还要检查 $x=0$。比较 $f(-1)$ 与 $f(1)$。

</details>

<details markdown="1">
<summary>解答与检查</summary>

最小输出值为 $0$，在 $x=0$ 时取到；最大输出值为 $4$，在 $x=-2$ 时取到。**值域**为 $0\leq f(x)\leq4$。

在题目给定的定义域上，**不存在反函数**：$f(-1)=f(1)=1$，所以 $f$ 是多对一函数。若把定义域限制为 $-2\leq x\leq0$，就能得到一一函数，但那是重新设置了定义域。

</details>

### Q3 — 构造复合函数时保留给定定义域 {#q3--keep-the-stated-domains-when-forming-composites}

Let $f(x)=3x+1$ for $x\in\mathbb R$ and $g(x)=x^2$ for $x\geq0$. Find $fg(x)$ and $gf(x)$, with their domains and ranges.

<details markdown="1">
<summary>提示</summary>

对于 $gf$，$f$ 的输出必须是 $g$ 允许的输入。虽然 $x^2$ 对负数 $x$ 也有定义，但题目给定的函数 $g$ 只接受 $x\geq0$。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$fg(x)=3x^2+1,\qquad x\geq0,\qquad fg(x)\geq1.$$

$$gf(x)=(3x+1)^2,\qquad x\geq-\frac13,\qquad gf(x)\geq0.$$

对于 $gf$，解不等式 $3x+1\geq0$ 来求定义域。不要因为最后的平方表达式对所有实数 $x$ 都有定义，就扩大原函数的定义域。

检查运算顺序：$fg(1)=4$，而 $gf(1)=16$。

</details>

### Q4 — 求有理函数的反函数 {#q4--find-the-inverse-of-a-rational-function}

Let $f(x)=\frac{2x+1}{x-3}$ for $x\ne3$. Find $f^{-1}$, and state its domain and range.

<details markdown="1">
<summary>提示</summary>

可以写成 $f(x)=2+\frac{7}{x-3}$。哪个输出值会被排除？交换 $x$ 与 $y$ 后，等式两边乘以 $y-3$，再合并含 $y$ 的项。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$f$ 的值域是除 $2$ 以外的所有实数。每个允许的输出值都只对应一个输入，因此反函数存在。

$$x=\frac{2y+1}{y-3}\quad\Rightarrow\quad xy-3x=2y+1\quad\Rightarrow\quad y(x-2)=3x+1.$$

$$\boxed{f^{-1}(x)=\frac{3x+1}{x-2}}.$$

**定义域：**$x\ne2$。**值域：**$f^{-1}(x)\ne3$。

检查一组对应值：$f(4)=9$，且 $f^{-1}(9)=4$。要完整检查公式，把它代入 $f$：

$$f(f^{-1}(x))=\frac{\frac{2(3x+1)}{x-2}+1}{\frac{3x+1}{x-2}-3}=\frac{\frac{7x}{x-2}}{\frac{7}{x-2}}=x,\qquad x\ne2.$$

</details>

### Q5 — 选择负平方根 {#q5--choose-the-negative-square-root}

Let $f(x)=(x+2)^2-1$ for $x\leq-2$. Find $f^{-1}$, including its domain and range. Check $f^{-1}(f(x))$ on the original domain.

<details markdown="1">
<summary>提示</summary>

反函数的输出必须不大于 $-2$。交换 $x$ 与 $y$ 后，选择满足 $y+2\leq0$ 的平方根。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$f$ 在 $x\leq-2$ 上是一一函数，值域为 $f(x)\geq-1$。

$$x=(y+2)^2-1\quad\Rightarrow\quad y+2=-\sqrt{x+1}.$$

$$\boxed{f^{-1}(x)=-2-\sqrt{x+1}}.$$

**定义域：**$x\geq-1$。**值域：**$f^{-1}(x)\leq-2$。

$$f^{-1}(f(x))=-2-\sqrt{(x+2)^2}=-2-\lvert x+2\rvert.$$

由于 $x\leq-2$，$\lvert x+2\rvert=-(x+2)$，所以结果等于 $x$。

检查一组对应值：$f(-4)=3$，且 $f^{-1}(3)=-4$。

</details>

### Q6 — 选择函数的正确分段 {#q6--select-the-correct-part-of-a-function}

Let $h(x)=x+2$ for $x<1$ and $h(x)=x^2$ for $x\geq1$. Find $h(-2)$ and $h(1)$, and state the range for all real inputs. Then state the range for the domain $\lbrace-2,0,1,2\rbrace$.

<details markdown="1">
<summary>提示</summary>

边界 $x=1$ 属于第二段。分别求出两段的值域，再合并。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$h(-2)=0$ 且 $h(1)=1$。第一段的输出都小于 $3$；第二段的输出都不小于 $1$。两段合起来能覆盖所有实数输出，所以整个值域为 $\boxed{\mathbb R}$。

在有限定义域中，输出值为 $0,2,1,4$，因此值域是 $\boxed{\lbrace0,1,2,4\rbrace}$。不要把这些输出之间的数值也包括进来：只允许四个输入值。

</details>

## 快速参考 {#quick-reference}

| 任务 | 方法 | 检查 |
|---|---|---|
| 求定义域 | 使用题目给定的定义域，并检查分母、平方根和对数 | 每个输入值都符合条件吗？ |
| 求值域 | 根据图像判断，或改写函数表达式；检查转折点和端点 | 所声称的每个输出值都能取到吗？ |
| 求 $fg(x)$ | 把 $g(x)$ 代入 $f$ | $x$ 属于 $g$ 的定义域，且 $g(x)$ 属于 $f$ 的定义域 |
| 求反函数 | 检查是否为一一函数，交换 $x$ 与 $y$，再整理 | 交换定义域和值域，并选择正确的正负号 |
| 检查反函数 | 化简 $f(f^{-1}(x))$ 和 $f^{-1}(f(x))$ | 在各自允许的定义域上，两者都等于 $x$ |
| 画反函数图像 | 关于 $y=x$ 反射 | $(a,b)$ 变为 $(b,a)$ |

**练习后：**记下错误出在表达式、运算顺序、定义域、值域还是平方根符号。复习对应例题，再不看解答重做一次。

**你应当能够：**写出定义域和值域，构造两个顺序的复合函数，说明反函数是否存在，并在限制条件正确的情况下求出反函数。

返回[纯数学主题目录](/zh/alevel/a2-mathematics/)或查看[函数公式参考](/zh/alevel/a2-mathematics/quick-reference/#functions)。

**学习路径：**[主题目录](/zh/alevel/a2-mathematics/) · [下一节：绝对值函数与变换](/zh/alevel/a2-mathematics/modulus-and-transformations/)。
