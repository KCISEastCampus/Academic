---
title: 绝对值函数与变换
layout: subjects
mathjax: true
grade: a2
subject: a2-mathematics
lang: zh-CN
translation_of: /alevel/a2-mathematics/modulus-and-transformations/
permalink: /zh/alevel/a2-mathematics/modulus-and-transformations/
toc_headings: h2
study_page: true
---

[纯数学](/zh/alevel/a2-mathematics/) · P2.1 代数与函数

学习描绘绝对值图像、组合函数图像变换（transformations）以及解含绝对值的方程。每次变换都用原图像上的一个点来检查。

教材：第 1 章，第 1.4–1.5 节（第 8–13 页）。例题 7 的题目为课程大纲示例；其余例题和所有练习均为自拟教学题。

- **学习：**从[绝对值图像](#modulus-graphs)开始，再学习例题。
- **作业帮助：**查看[组合变换](#combinations-of-transformations)或[方程与不等式](#equations-and-inequalities)。
- **复习：**先尝试[练习题](#practice)，再打开解答。

**开始前：**你应当会描绘直线和二次函数图像、解线性方程以及求定义域和值域。如有需要，先复习[函数](/zh/alevel/a2-mathematics/functions/)。

## 绝对值图像 {#modulus-graphs}

实数的**绝对值（modulus）**表示它到零的距离，因此绝对值总是非负的：$\lvert-3\rvert=3$，且 $\lvert0\rvert=0$。

$$\lvert x\rvert=\begin{cases}x,&x\geq0,\\-x,&x<0.\end{cases}$$

### 判断绝对值符号里面是什么 {#decide-what-is-inside-the-modulus}

| 图像 | 保留部分 | 需要翻折的部分 |
|---|---|---|
| $y=\lvert f(x)\rvert$ | $x$ 轴上方及轴上的部分 | 将 $x$ 轴下方的部分关于 $x$ 轴翻折 |
| $y=f(\lvert x\rvert)$ | $x\geq0$ 的部分 | 将这部分关于 $y$ 轴翻折，得到 $x<0$ 的部分 |

对于 $y=\lvert f(x)\rvert$，定义域不变。对于 $y=f(\lvert x\rvert)$，输入 $x$ 只有在 $\lvert x\rvert$ 属于 $f$ 的定义域时才允许。表中的图像规则只适用于允许的非负输入值。

### 例题 1 — 两种绝对值图像并不相同 {#example-1--the-two-modulus-graphs-are-different}

**Question:** For $f(x)=x-1$, defined for all real $x$, sketch $y=\lvert f(x)\rvert$ and $y=f(\lvert x\rvert)$. State their ranges.

![比较 y 等于 x 减一的绝对值与 x 的绝对值减一这两个图像。虚线表示原图像 y 等于 x 减一。](/assets/img/modulus-graphs.svg)

**绝对值在函数外：**$y=\lvert x-1\rvert$。原图像在 $x$ 轴下方的部分对应 $x<1$；将这部分关于 $x$ 轴翻折。

$$y=\begin{cases}x-1,&x\geq1,\\1-x,&x<1.\end{cases}$$

最低点是 $(1,0)$，值域为 $y\geq0$。

**绝对值在函数内：**$y=\lvert x\rvert-1$。保留原图像中 $x\geq0$ 的部分，再将它关于 $y$ 轴翻折。

$$y=\begin{cases}x-1,&x\geq0,\\-x-1,&x<0.\end{cases}$$

最低点是 $(0,-1)$，值域为 $y\geq-1$。

**检查：**当 $x=-2$ 时，第一个图像的函数值为 $3$，第二个为 $1$。绝对值符号放在函数内部，并不会使所有输出都变为非负数。

### 例题 2 — 只翻折二次函数的一部分 {#example-2--reflect-only-part-of-a-quadratic}

**Question:** Sketch $y=\lvert x^2-4\rvert$.

先画出 $y=x^2-4$。它与 $x$ 轴交于 $(-2,0)$ 和 $(2,0)$；当 $-2<x<2$ 时，图像位于该轴下方。

只把中间这一段关于 $x$ 轴翻折，外侧两段保持不变：

$$y=\begin{cases}x^2-4,&x\leq-2\text{ or }x\geq2,\\4-x^2,&-2<x<2.\end{cases}$$

新图像经过 $(-2,0)$、$(0,4)$ 和 $(2,0)$。值域为 $y\geq0$。

**常见错误：**把整条抛物线都翻折。例如，$(3,5)$ 仍在 $(3,5)$，因为它的输出已经是正数。

## 组合函数图像变换 {#combinations-of-transformations}

从 $y=f(x)$ 开始。描述每次变换时，说明变换所沿的坐标轴、方向，以及伸缩因子（scale factor）或平移向量（translation vector）。

| 新图像 | 变换 | 点 $(p,q)$ 移至 |
|---|---|---|
| $y=f(x-a)+b$ | 沿向量 $\begin{pmatrix}a\\\\b\end{pmatrix}$ 平移 | $(p+a,q+b)$ |
| $y=af(x)$，$a>0$ | 沿平行于 $y$ 轴的方向单向伸缩（one-way stretch），伸缩因子为 $a$ | $(p,aq)$ |
| $y=f(ax)$，$a>0$ | 沿平行于 $x$ 轴的方向单向伸缩，伸缩因子为 $\displaystyle\frac1a$ | $(\displaystyle\frac pa,q)$ |
| $y=-f(x)$ | 关于 $x$ 轴翻折（reflection） | $(p,-q)$ |
| $y=f(-x)$ | 关于 $y$ 轴翻折 | $(-p,q)$ |

**函数内部的变化：**改变输入坐标。**函数外部的变化：**改变输出坐标。伸缩因子介于 $0$ 与 $1$ 之间时，图像沿所述方向变窄或变矮。

### 例题 3 — 先因式分解输入表达式，再确定变换顺序 {#example-3--factorise-the-input-before-choosing-the-order}

**Question:** Describe a sequence of transformations from $y=f(x)$ to $y=2f(2x-4)-1$.

先写成 $2x-4=2(x-2)$。一种正确的变换顺序如下：

| 步骤 | 变换 | 变换后的图像 |
|---|---|---|
| 1 | 沿平行于 $x$ 轴的方向单向伸缩，伸缩因子为 $\displaystyle\frac12$ | $y=f(2x)$ |
| 2 | 沿 $\begin{pmatrix}2\\\\0\end{pmatrix}$ 平移 | $y=f(2(x-2))$ |
| 3 | 沿平行于 $y$ 轴的方向单向伸缩，伸缩因子为 $2$ | $y=2f(2(x-2))$ |
| 4 | 沿 $\begin{pmatrix}0\\\\-1\end{pmatrix}$ 平移 | $y=2f(2x-4)-1$ |

**用一个点检查：**如果原图像上有点 $(p,q)$，新的输入必须满足 $2x-4=p$。因此，

$$x=\frac p2+2,\qquad y=2q-1.$$

当 $f(x)=\lvert x\rvert$ 时，点 $(0,0)$、$(1,1)$ 和 $(-1,1)$ 分别移至 $(2,-1)$、$(\frac52,1)$ 和 $(\frac32,1)$。

**常见错误：**做完水平伸缩后再向右平移 $4$。根据因式分解后的输入，这一步应该向右平移 $2$。先向右平移 $4$ 再做水平伸缩，则是另一种正确的变换顺序。

### 例题 4 — 先翻折，再平移 {#example-4--reflection-followed-by-translation}

**Question:** Describe how to obtain $y=3-x^2$ from $y=x^2$.

1. 关于 $x$ 轴翻折，得到 $y=-x^2$。
2. 沿 $\begin{pmatrix}0\\\\3\end{pmatrix}$ 平移，得到 $y=-x^2+3$。

最低点 $(0,0)$ 变成最高点 $(0,3)$。点 $(2,4)$ 变成 $(2,-1)$。

**检查顺序：**如果先向上平移 $3$，再翻折，会得到 $y=-(x^2+3)=-x^2-3$，这是不同的图像。

## 方程与不等式 {#equations-and-inequalities}

### 分类讨论求解绝对值方程 {#solve-a-modulus-equation-in-cases}

1. 找出绝对值符号内表达式等于零的位置，以此划分不同情况。
2. 为每种情况写出相应的方程和适用条件。
3. 分别求解，并检查解是否满足对应条件。
4. 将每个符合条件的答案代回原方程。

画草图有助于判断预期的交点个数。如果方程为 $\lvert u(x)\rvert=v(x)$，那么每个解还必须满足 $v(x)\geq0$。

### 例题 5 — 检查两个解 {#example-5--check-both-solutions}

**Question:** Solve $\lvert2x-3\rvert=x+1$.

表达式 $2x-3$ 在 $x=\frac32$ 时为零。

**情况 1：$x\geq\frac32$。**此时 $2x-3=x+1$，得到 $x=4$，满足本情况的条件。

**情况 2：$x<\frac32$。**此时 $3-2x=x+1$，得到 $x=\frac23$，同样满足本情况的条件。

$$\boxed{x=\frac23\text{ or }x=4}.$$

**检查：**当 $x=4$ 时，两边都等于 $5$。当 $x=\frac23$ 时，两边都等于 $\frac53$。

### 例题 6 — 绝对值不等式 {#example-6--a-modulus-inequality}

**Question:** Solve $\lvert x-1\rvert<2$.

$x$ 到 $1$ 的距离必须小于 $2$，因此 $x$ 位于 $-1$ 与 $3$ 之间。

代数解法为

$$-2<x-1<2\quad\Longrightarrow\quad\boxed{-1<x<3}.$$

由于这是严格不等式，不包含端点。若题目是 $\lvert x-1\rvert\leq2$，答案则为 $-1\leq x\leq3$。

**常用法则：**对于 $a>0$，

$$\lvert u\rvert<a\iff-a<u<a,$$

$$\lvert u\rvert>a\iff u<-a\text{ or }u>a.$$

界限为负数时不能使用这些法则。绝对值不可能为负，所以 $\lvert u\rvert<-2$ 无解。

### 例题 7 — 等式两边都有绝对值 {#example-7--modulus-on-both-sides}

**Question:** Solve $\lvert x+2\rvert<3\lvert x\rvert$.

**来源：**[OxfordAQA Mathematics (9660) 课程大纲，P2.1，印刷第 21 页](https://www.oxfordaqa.com/wp-content/uploads/2023/10/oxfordaqa-a-level-mathematics-specification.pdf)的示例；解答由本站编写。

先找出图像 $y=\lvert x+2\rvert$ 和 $y=3\lvert x\rvert$ 的交点。两边都非负，因此两边同时平方不会改变等式的解：

$$(x+2)^2=9x^2\quad\Rightarrow\quad(2x+1)(x-1)=0.$$

边界值为 $x=-\frac12$ 和 $x=1$。两条 V 形图像在这些交点处交换上下位置。在三个区间内各取一个值进行检验：

| 区间 | 测试输入 | 比较结果 | 是否满足 |
|---|---|---|---|
| $x<-\frac12$ | $-1$ | $1<3$ | 是 |
| $-\frac12<x<1$ | $0$ | $2<0$，不成立 | 否 |
| $x>1$ | $2$ | $4<6$ | 是 |

因此，$\boxed{x<-\frac12\text{ or }x>1}$。这是严格不等式，因此不包含边界值。

**代数检查：**两边都非负，所以该不等式等价于 $(x+2)^2<9x^2$，也就是 $(2x+1)(x-1)>0$。解得相同的两个区间。

**常见错误：**套用 $\lvert u\rvert<a$ 的法则时，误把 $3\lvert x\rvert$ 当作固定常数。

## 练习 {#practice}

请在纸上描图并标出重要点。每道题都先自己尝试，再打开提示或解答。

### 题目 1 — 绝对值在函数内还是函数外？ {#question-1--inside-or-outside}

For $f(x)=x+2$, defined for all real $x$, sketch $y=\lvert f(x)\rvert$ and $y=f(\lvert x\rvert)$. State the minimum point and range of each graph.

<details markdown="1">
<summary>提示</summary>

把两个表达式分别写成 $\lvert x+2\rvert$ 和 $\lvert x\rvert+2$。找出每个绝对值符号内的表达式何时为零。

</details>

<details markdown="1">
<summary>解答与检查</summary>

对于 $y=\lvert x+2\rvert$，最低点是 $(-2,0)$，值域为 $y\geq0$。

对于 $y=\lvert x\rvert+2$，最低点是 $(0,2)$，值域为 $y\geq2$。

**检查：**当 $x=-3$ 时，两个函数的输出分别为 $1$ 和 $5$。

</details>

### 题目 2 — 二次函数的绝对值图像 {#question-2--a-quadratic-modulus-graph}

Sketch $y=\lvert x^2-9\rvert$. State its intercepts and range, and give a formula for each part.

<details markdown="1">
<summary>提示</summary>

求 $x^2-9$ 的零点。只翻折满足 $x^2-9<0$ 的部分。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$y=\begin{cases}x^2-9,&x\leq-3\text{ or }x\geq3,\\9-x^2,&-3<x<3.\end{cases}$$

$x$ 轴截距为 $(-3,0)$ 和 $(3,0)$，$y$ 轴截距为 $(0,9)$，值域为 $y\geq0$。

**检查：**当 $x=2$ 时，$y=5$；当 $x=4$ 时，$y=7$。这两个结果都与原绝对值表达式相符。

</details>

### 题目 3 — 组合变换 {#question-3--a-combination-of-transformations}

Describe a sequence of transformations from $y=f(x)$ to $y=-3f(2x+6)+4$. Find the new coordinates of the point $(2,5)$.

<details markdown="1">
<summary>提示</summary>

写成 $2x+6=2(x+3)$。求点的新坐标时，解 $2x+6=2$，再对 $5$ 依次应用函数外部的变换。

</details>

<details markdown="1">
<summary>解答与检查</summary>

1. 沿平行于 $x$ 轴的方向单向伸缩，伸缩因子为 $\frac12$。
2. 沿 $\begin{pmatrix}-3\\\\0\end{pmatrix}$ 平移。
3. 沿平行于 $y$ 轴的方向单向伸缩，伸缩因子为 $3$。
4. 关于 $x$ 轴翻折。
5. 沿 $\begin{pmatrix}0\\\\4\end{pmatrix}$ 平移。

新坐标为 $(-2,-11)$：$2(-2)+6=2$，且 $-3(5)+4=-11$。

**检查：**一般来说，$(p,q)$ 会变成 $(\frac p2-3,4-3q)$。

</details>

### 题目 4 — 排除不符合分类条件的答案 {#question-4--reject-an-answer-from-the-wrong-case}

Solve $\lvert2x-3\rvert=3x+1$.

<details markdown="1">
<summary>提示</summary>

以 $x=\frac32$ 为界分类。每个解都必须满足它所属情况的条件。

</details>

<details markdown="1">
<summary>解答与检查</summary>

当 $x\geq\frac32$ 时，方程 $2x-3=3x+1$ 得到 $x=-4$。由于 $-4<\frac32$，舍去。

当 $x<\frac32$ 时，方程 $3-2x=3x+1$ 得到 $x=\frac25$，符合条件。

$$\boxed{x=\frac25}.$$

**检查：**代入原方程后，两边都等于 $\frac{11}{5}$。当 $x=-4$ 时，左边为 $11$，右边为 $-11$，所以它不是解。

</details>

### 题目 5 — 解集有两个区间的不等式 {#question-5--an-inequality-with-two-intervals}

Solve $\lvert2x+1\rvert\geq5$.

<details markdown="1">
<summary>提示</summary>

绝对值符号内的表达式必须不小于 $5$，或不大于 $-5$。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$2x+1\geq5\quad\text{or}\quad2x+1\leq-5.$$

因此，

$$\boxed{x\leq-3\text{ or }x\geq2}.$$

**检查：**两个端点处的绝对值都是 $5$，因此端点包括在解集中。$x=0$ 时，绝对值为 $1$，所以这个值不属于这两个区间。

</details>

### 题目 6 — 比较两个绝对值图像 {#question-6--compare-two-modulus-graphs}

Solve $\lvert x-1\rvert\leq2\lvert x\rvert$. Find the intersection points of the two graphs and explain which intervals satisfy the inequality.

<details markdown="1">
<summary>提示</summary>

两边都非负。对相等时的等式两边平方，找出边界值，再检验各个区间。

</details>

<details markdown="1">
<summary>解答与检查</summary>

等式 $(x-1)^2=4x^2$ 可化为 $(3x-1)(x+1)=0$。两图像的交点为 $(-1,2)$ 和 $(\frac13,\frac23)$。

该不等式等价于 $(3x-1)(x+1)\geq0$，因此解为 $\boxed{x\leq-1\text{ or }x\geq\frac13}$。

输入值 $-2$、$0$ 和 $1$ 对应的比较结果分别为 $3\leq4$、$1\leq0$ 和 $0\leq2$。这些结果符合三个区间内的图像位置。两个交点对应的输入值都包括在解集中。

</details>

## 快速参考 {#quick-reference}

| 任务 | 第一步 | 检查 |
|---|---|---|
| 画 $y=\lvert f(x)\rvert$ | 找出 $f(x)<0$ 的部分，并把它们关于 $x$ 轴翻折 | 所有输出都非负 |
| 画 $y=f(\lvert x\rvert)$ | 保留 $x\geq0$ 的允许部分，并关于 $y$ 轴翻折 | 新图像关于 $y$ 轴对称 |
| 组合变换 | 因式分解 $f$ 内部的表达式 | 用已知点跟踪每一步 |
| 解绝对值方程 | 在绝对值符号内的表达式等于零处分类 | 检查分类条件和原方程 |
| 解绝对值不等式 | 找到相等时的边界，并比较图像或检验区间 | 检查端点是否包括；只有两边非负时才平方 |

**能解释吗？**为什么 $\lvert x-1\rvert$ 和 $\lvert x\rvert-1$ 不同？为什么 $f(2x)$ 的水平伸缩因子是 $\frac12$？为什么必须检查分类求得的解是否符合对应条件？

[返回主题目录](/zh/alevel/a2-mathematics/) · [查看全部参考笔记](/zh/alevel/a2-mathematics/quick-reference/#modulus-function)

**学习路径：**[上一节：函数](/zh/alevel/a2-mathematics/functions/) · [下一节：代数分式与多项式除法](/zh/alevel/a2-mathematics/algebraic-fractions-and-division/)。
