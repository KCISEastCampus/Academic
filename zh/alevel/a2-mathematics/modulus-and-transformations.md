---
title: 绝对值函数与变换
layout: subjects
mathjax: true
grade: a2
subject: a2-mathematics
lang: zh-CN
translation_of: /alevel/a2-mathematics/modulus-and-transformations/
permalink: /zh/alevel/a2-mathematics/modulus-and-transformations/
toc_headings: h2, h3
reading_layout: true
study_page: true
---

[纯数学](/zh/alevel/a2-mathematics/) · P2.1 代数与函数
{: .lesson-meta}

学习描绘绝对值图像、组合函数图像变换（transformations）以及解含绝对值的方程与不等式。每次变换都用原图像上的一个点来检查。

教材：第 1 章，第 1.4–1.5 节（第 8–13 页）。例题 7 的题目为课程大纲示例；其余例题和所有练习均为自拟教学题。

- **学习：**从[绝对值图像](#modulus-graphs)开始，再学习例题。
- **作业帮助：**查看[组合变换](#combinations-of-transformations)或[方程与不等式](#equations-and-inequalities)。
- **复习：**先尝试[练习题](#practice)，再打开解答。
{: .lesson-routes}

<div class="lesson-notes" markdown="1">

**开始前：**会画直线、二次函数并解线性方程（[AS 代数 L02](/zh/alevel/as-mathematics/algebra/#l02)）；会跟踪变换前后的一个点（[L05](/zh/alevel/as-mathematics/algebra/#l05)）。遇到输入限制先回补[定义域和值域](/zh/alevel/a2-mathematics/functions/#domain-and-range)。本页从“改输入还是改输出”开始，再用坐标检验变换，最后根据图像关系解方程与不等式。复习可从[独立练习](#practice)开始；[恢复与新尝试](#repair-and-retry)和[稍后回顾](#later-review)可直接定位。

</div>

## 绝对值图像 {#modulus-graphs}

在数轴上，一个数可以在零的左边或右边，但它到零的距离不会是负数。这个距离叫作**绝对值（modulus）**：$\lvert-3\rvert=3$，且 $\lvert0\rvert=0$。原来的数非负，就保留它；原来的数为负，就改变符号，得到正的距离。于是有下面两种写法：

$$\lvert x\rvert=\begin{cases}x,&x\geq0,\\-x,&x<0.\end{cases}$$

### 判断绝对值符号里面是什么 {#decide-what-is-inside-the-modulus}

这里有两种不同的计算顺序：可以先按函数规则算出结果，再取这个结果到零的距离；也可以先取输入到零的距离，再交给函数计算。先分清顺序，再判断图像该翻折哪一部分。

| 图像 | 保留部分 | 需要翻折的部分 |
|---|---|---|
| $y=\lvert f(x)\rvert$ | $x$ 轴上方及轴上的部分 | 将 $x$ 轴下方的部分关于 $x$ 轴翻折 |
| $y=f(\lvert x\rvert)$ | $x\geq0$ 的部分 | 将这部分关于 $y$ 轴翻折，得到 $x<0$ 的部分 |
{: .wide-table}

对于 $y=\lvert f(x)\rvert$，原函数收到的输入没有变，所以允许输入哪些数也不变。对于 $y=f(\lvert x\rvert)$，先取输入 $x$ 到零的距离。真正送进原规则的是这个距离 $\lvert x\rvert$，这个距离必须是 $f$ 允许的输入。按表中规则翻折时，只使用原规则允许的非负输入部分。

<section class="worked-example" markdown="1">

### 例题 1 — 两种绝对值图像并不相同 {#example-1--the-two-modulus-graphs-are-different}

**Question:** For $f(x)=x-1$, defined for all real $x$, sketch $y=\lvert f(x)\rvert$ and $y=f(\lvert x\rvert)$. State their ranges.

![比较 y 等于 x 减一的绝对值与 x 的绝对值减一这两个图像。虚线表示原图像 y 等于 x 减一。](/assets/img/modulus-graphs.svg)

**先计算，再取绝对值：**$y=\lvert x-1\rvert$。先减一，再取结果到零的距离。原图像在 $x$ 轴下方的条件是 $x<1$，所以把这一部分关于 $x$ 轴翻折，让负的高度变成正的高度。两种情况分别写成：

$$y=\begin{cases}x-1,&x\geq1,\\1-x,&x<1.\end{cases}$$

最低点是 $(1,0)$，值域为 $y\geq0$。

**先取绝对值，再计算：**$y=\lvert x\rvert-1$。先取输入到零的距离，再减一。保留原图像中 $x\geq0$ 的部分。负输入现在会使用与其正数搭档相同的距离，所以把这部分关于 $y$ 轴翻折，就得到负输入一侧的图像：

$$y=\begin{cases}x-1,&x\geq0,\\-x-1,&x<0.\end{cases}$$

最低点是 $(0,-1)$，值域为 $y\geq-1$。

**检查：**当 $x=-2$ 时，第一个图像的函数值为 $3$，第二个为 $1$。绝对值符号放在函数内部，并不会使所有输出都变为非负数。

</section>

<section class="worked-example" markdown="1">

### 例题 2 — 只翻折二次函数的一部分 {#example-2--reflect-only-part-of-a-quadratic}

**Question:** Sketch $y=\lvert x^2-4\rvert$.

先画出 $y=x^2-4$。它与 $x$ 轴交于 $(-2,0)$ 和 $(2,0)$；当 $-2<x<2$ 时，图像位于该轴下方。

只把中间这一段关于 $x$ 轴翻折，外侧两段保持不变：

$$y=\begin{cases}x^2-4,&x\leq-2\text{ or }x\geq2,\\4-x^2,&-2<x<2.\end{cases}$$

新图像经过 $(-2,0)$、$(0,4)$ 和 $(2,0)$。值域为 $y\geq0$。

**常见错误：**把整条抛物线都翻折。例如，$(3,5)$ 仍在 $(3,5)$，因为它的输出已经是正数。

</section>

## 组合函数图像变换 {#combinations-of-transformations}

从 $y=f(x)$ 开始。图像变换就是改变图上各点的位置。沿一个方向把距离乘同一个倍数，叫伸缩，这个倍数叫**伸缩因子（scale factor）**；把所有点移动同样的距离，叫平移。描述时要说明坐标轴、方向和倍数，或写出平移向量（translation vector）：上面的数记横向移动，下面的数记纵向移动。

| 新图像 | 变换 | 点 $(p,q)$ 移至 |
|---|---|---|
| $y=f(x-a)+b$ | 沿向量 $\binom{a}{b}$ 平移 | $(p+a,q+b)$ |
| $y=af(x)$，$a>0$ | 沿平行于 $y$ 轴的方向单向伸缩（one-way stretch），伸缩因子为 $a$ | $(p,aq)$ |
| $y=f(ax)$，$a>0$ | 沿平行于 $x$ 轴的方向单向伸缩，伸缩因子为 $\displaystyle\frac1a$ | $(\displaystyle\frac pa,q)$ |
| $y=-f(x)$ | 关于 $x$ 轴翻折（reflection） | $(p,-q)$ |
| $y=f(-x)$ | 关于 $y$ 轴翻折 | $(-p,q)$ |
{: .wide-table}

改变送进函数的数，会改变点的横坐标；改变函数算出的答案，会改变点的纵坐标。伸缩因子介于 $0$ 与 $1$ 之间时，图像沿所述方向变窄或变矮。

水平伸缩为什么取倒数？原图像上的点 $(p,q)$ 表示：输入 p，得到 q。要让 $f(ax)$ 得到同一个原输出，必须仍把 $p$ 送进原规则 $f$。先解 $ax=p$，得到 $x=p/a$；纵坐标仍为 $q$。对更一般的 $Af(Bx+C)+D$（$B\ne0$），大写字母代表描述这些变化的固定数。先让送进旧规则的数等于旧输入，再改变旧输出：

$$Bx+C=p,\qquad x=\frac{p-C}{B},\qquad y=Aq+D.$$

这样可以检验任意正确变换顺序，不依赖背诵“里面反着来”。

<section class="worked-example" markdown="1">

### 例题 3 — 先因式分解输入表达式，再确定变换顺序 {#example-3--factorise-the-input-before-choosing-the-order}

**Question:** Describe a sequence of transformations from $y=f(x)$ to $y=2f(2x-4)-1$.

先写成 $2x-4=2(x-2)$。这样便于看出水平的两步：先把横坐标缩为一半，再把得到的图像右移二。随后把高度变成两倍，再下移一。下表逐步保留完整算式，方便检查顺序：

| 步骤 | 变换 | 变换后的图像 |
|---|---|---|
| 1 | 沿平行于 $x$ 轴的方向单向伸缩，伸缩因子为 $\displaystyle\frac12$ | $y=f(2x)$ |
| 2 | 沿 $\binom{2}{0}$ 平移 | $y=f(2(x-2))$ |
| 3 | 沿平行于 $y$ 轴的方向单向伸缩，伸缩因子为 $2$ | $y=2f(2(x-2))$ |
| 4 | 沿 $\binom{0}{-1}$ 平移 | $y=2f(2x-4)-1$ |
{: .wide-table}

**用一个点检查：**如果原图像上有点 $(p,q)$，新的输入必须满足 $2x-4=p$。因此，

$$x=\frac p2+2,\qquad y=2q-1.$$

当 $f(x)=\lvert x\rvert$ 时，点 $(0,0)$、$(1,1)$ 和 $(-1,1)$ 分别移至 $(2,-1)$、$(\frac52,1)$ 和 $(\frac32,1)$。

**常见错误：**做完水平伸缩后再向右平移 $4$。根据因式分解后的输入，这一步应该向右平移 $2$。先向右平移 $4$ 再做水平伸缩，则是另一种正确的变换顺序。

</section>

<section class="worked-example" markdown="1">

### 例题 4 — 先翻折，再平移 {#example-4--reflection-followed-by-translation}

**Question:** Describe how to obtain $y=3-x^2$ from $y=x^2$.

1. 关于 $x$ 轴翻折，得到 $y=-x^2$。
2. 沿 $\binom{0}{3}$ 平移，得到 $y=-x^2+3$。

最低点 $(0,0)$ 变成最高点 $(0,3)$。点 $(2,4)$ 变成 $(2,-1)$。

**检查顺序：**如果先向上平移 $3$，再翻折，会得到 $y=-(x^2+3)=-x^2-3$，这是不同的图像。

</section>

<section class="lesson-check" markdown="1">

### 暂停尝试 {#check-point}

<!-- task:check-point -->
A point $(6,-2)$ lies on $y=f(x)$. For $y=-2f(3x)+1$, complete the input-matching equation and find the new point.
<!-- /task:check-point -->

<details markdown="1">
<summary>提示</summary>

先让送入 $f$ 的数仍为 $6$，再改变原来的输出 $-2$。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$3x=6\Rightarrow x=2,\qquad y=-2(-2)+1=5.$$

新点为 $(2,5)$。若写成 $(18,5)$，把输入的三倍误当成了坐标的三倍；回看输入匹配方程。

</details>

</section>

## 方程与不等式 {#equations-and-inequalities}

### 分类讨论求解绝对值方程 {#solve-a-modulus-equation-in-cases}

1. 找出绝对值里面的算式何时等于零，从这些位置检查它何时为负、何时非负。
2. 每种情况分别判断：保留这个算式，还是改变它的符号？写出相应方程，并把本情况的条件写在旁边。
3. 分别求解，并检查解是否满足对应条件。
4. 将每个符合条件的答案代回原方程。

画草图有助于判断预期的交点个数。如果方程为 $\lvert u(x)\rvert=v(x)$，那么每个解还必须满足 $v(x)\geq0$。

<section class="worked-example" markdown="1">

### 例题 5 — 检查两个解 {#example-5--check-both-solutions}

**Question:** Solve $\lvert2x-3\rvert=x+1$.

不能对所有输入都用同一个算式去掉绝对值，要先判断里面的数是否为负。表达式 $2x-3$ 在 $x=\frac32$ 时为零，这里把两种情况分开。

**情况 1：$x\geq\frac32$。**绝对值里面的数非负，保留符号。于是 $2x-3=x+1$，得到 $x=4$。它满足写出这个方程时所用的条件。

**情况 2：$x<\frac32$。**绝对值里面的数为负，要改变符号才得到它到零的距离。于是 $3-2x=x+1$，得到 $x=\frac23$，同样满足本情况的条件。两种情况已经包括全部实数输入，没有漏掉另一种情况。

$$\boxed{x=\frac23\text{ or }x=4}.$$

**检查：**当 $x=4$ 时，两边都等于 $5$。当 $x=\frac23$ 时，两边都等于 $\frac53$。

</section>

<section class="worked-example" markdown="1">

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

</section>

<section class="worked-example" markdown="1">

### 例题 7 — 等式两边都有绝对值 {#example-7--modulus-on-both-sides}

**Question:** Solve $\lvert x+2\rvert<3\lvert x\rvert$.

**来源：**[OxfordAQA Mathematics (9660) 课程大纲，P2.1，印刷第 21 页](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf)的示例；解答由本站编写。

我们要找第一个图像低于第二个图像的位置。先找图像 $y=\lvert x+2\rvert$ 和 $y=3\lvert x\rvert$ 的交点，用这些输入把要比较的范围分开。两边都非负，因此同时平方不会改变等式的解：

$$(x+2)^2=9x^2\quad\Rightarrow\quad(2x+1)(x-1)=0.$$

请在同一坐标系画两条 V 形图：顶点 $(-2,0)$ 属于 $y=\lvert x+2\rvert$，顶点 $(0,0)$ 属于 $y=3\lvert x\rvert$；交点是 $(-\frac12,\frac32)$ 与 $(1,3)$。所求区间对应第一个图像严格在第二个下方。草图与下面的区间检验互相检查。

边界值为 $x=-\frac12$ 和 $x=1$。两条 V 形图像在这些交点处交换上下位置。在三个区间内各取一个值进行检验：

| 区间 | 测试输入 | 比较结果 | 是否满足 |
|---|---|---|---|
| $x<-\frac12$ | $-1$ | $1<3$ | 是 |
| $-\frac12<x<1$ | $0$ | $2<0$，不成立 | 否 |
| $x>1$ | $2$ | $4<6$ | 是 |

因此，$\boxed{x<-\frac12\text{ or }x>1}$。这是严格不等式，因此不包含边界值。

**代数检查：**两边都非负，所以该不等式等价于 $(x+2)^2<9x^2$，也就是 $(2x+1)(x-1)>0$。两个因式同为负数或同为正数时，乘积为正；在两个根之间，它们一正一负。这就证明了上面的两个区间全部成立；只试几个输入本身不能证明整个区间。

**常见错误：**套用 $\lvert u\rvert<a$ 的法则时，误把 $3\lvert x\rvert$ 当作固定常数。

</section>

## 练习 {#practice}

请在纸上描图并标出重要点。每道题都先自己尝试，再打开提示或解答。

<section class="lesson-check" markdown="1">

### 题目 1 {#question-1--inside-or-outside}

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

</section>

<section class="lesson-check" markdown="1">

### 题目 2 {#question-2--a-quadratic-modulus-graph}

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

</section>

<section class="lesson-check" markdown="1">

### 题目 3 {#question-3--a-combination-of-transformations}

Describe a sequence of transformations from $y=f(x)$ to $y=-3f(2x+6)+4$. Find the new coordinates of the point $(2,5)$.

<details markdown="1">
<summary>提示</summary>

写成 $2x+6=2(x+3)$。求点的新坐标时，解 $2x+6=2$，再对 $5$ 依次应用函数外部的变换。

</details>

<details markdown="1">
<summary>解答与检查</summary>

1. 沿平行于 $x$ 轴的方向单向伸缩，伸缩因子为 $\frac12$。
2. 沿 $\binom{-3}{0}$ 平移。
3. 沿平行于 $y$ 轴的方向单向伸缩，伸缩因子为 $3$。
4. 关于 $x$ 轴翻折。
5. 沿 $\binom{0}{4}$ 平移。

新坐标为 $(-2,-11)$：$2(-2)+6=2$，且 $-3(5)+4=-11$。

**检查：**一般来说，$(p,q)$ 会变成 $(\frac p2-3,4-3q)$。

</details>

</section>

<section class="lesson-check" markdown="1">

### 题目 4 {#question-4--reject-an-answer-from-the-wrong-case}

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

</section>

<section class="lesson-check" markdown="1">

### 题目 5 {#question-5--an-inequality-with-two-intervals}

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

</section>

<section class="lesson-check" markdown="1">

### 题目 6 {#question-6--compare-two-modulus-graphs}

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

</section>

## 恢复与新尝试 {#repair-and-retry}

根据错误回看指定推理，收起旧解答后再做一题。

| 错误 | 恢复动作 | 新任务 |
| --- | --- | --- |
| 取绝对值的先后顺序弄错，或遗漏输入限制 | 回看[两种图像](#example-1--the-two-modulus-graphs-are-different)，说清先取距离还是先按函数计算，再写允许的输入 | [R1](#retry-graphs) |
| 平移方向、伸缩因子或顺序不对 | 回看[组合变换](#combinations-of-transformations)，先解输入匹配方程 | [R2](#retry-transform) |
| 分类答案不满足原条件 | 回看[分类步骤](#solve-a-modulus-equation-in-cases)，保留每种情况的区间 | [R3](#retry-equation) |
| 不等式只保留交点，或区间方向错 | 回看[图像比较](#example-7--modulus-on-both-sides)，标交点后检验图像上下关系 | [稍后回顾](#later-review) |

<section class="lesson-check" markdown="1">

### R1 {#retry-graphs}

<!-- task:retry-graphs -->
Let $f(x)=x-2$ for $1\leq x\leq4$. Sketch $y=\lvert f(x)\rvert$ and $y=f(\lvert x\rvert)$. State both domains and ranges and label their endpoints.
<!-- /task:retry-graphs -->

<details markdown="1">
<summary>提示</summary>

原函数只接受 $[1,4]$。分别检查输入为 $x$ 和输入为 $\lvert x\rvert$ 的条件。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$y=\lvert x-2\rvert$ 的定义域为 $[1,4]$，值域为 $[0,2]$。画折线段 $(1,1)\to(2,0)\to(4,2)$。

$y=\lvert x\rvert-2$ 要求 $1\leq\lvert x\rvert\leq4$，所以定义域为 $[-4,-1]\cup[1,4]$，值域为 $[-1,2]$。画两段线段 $(-4,2)\to(-1,-1)$ 和 $(1,-1)\to(4,2)$，四个端点都是实心点。不能连接中间被排除的 $-1<x<1$。

</details>

</section>

<section class="lesson-check" markdown="1">

### R2 {#retry-transform}

<!-- task:retry-transform -->
The domain of $f$ is $0\leq x\leq4$, and $(1,3)$ lies on its graph. Describe a sequence from $y=f(x)$ to $y=-2f(4-x)+1$, find the image of $(1,3)$ and state the new domain.
<!-- /task:retry-transform -->

<details markdown="1">
<summary>提示</summary>

先解 $4-x=1$ 来检查变换顺序。定义域要满足 $0\leq4-x\leq4$。

</details>

<details markdown="1">
<summary>解答与检查</summary>

一种顺序：关于 $y$ 轴反射，向右平移 $4$，沿 $y$ 轴方向伸缩因子 $2$，关于 $x$ 轴反射，向上平移 $1$。

$$4-x=1\Rightarrow x=3,\qquad y=-2(3)+1=-5.$$

点为 $(3,-5)$；定义域为 $[0,4]$。若先向右平移 $4$ 再关于 $y$ 轴反射，会把输入变成 $-x-4$，不能得到所求函数。

</details>

</section>

<section class="lesson-check" markdown="1">

### R3 {#retry-equation}

<!-- task:retry-equation -->
Solve $\lvert x+1\rvert=2x-1$, showing why each candidate is accepted or rejected.
<!-- /task:retry-equation -->

<details markdown="1">
<summary>提示</summary>

分类点来自 $x+1=0$；解还要满足右边非负。

</details>

<details markdown="1">
<summary>解答与检查</summary>

当 $x\geq-1$ 时，$x+1=2x-1$，得到 $x=2$，符合条件。当 $x<-1$ 时，$-x-1=2x-1$，得到 $x=0$，不符合该情况，舍去。唯一解为 $\boxed{x=2}$；原式两边都为 $3$。候选 $0$ 的右边为 $-1$，也不可能等于绝对值。

</details>

</section>

## 稍后回顾 {#review}

在下一主题后完成，不先看速查。用草图与代数互查，记录是否借助提示。

<section class="lesson-check" markdown="1">

### 回顾任务 {#later-review}

<!-- task:later-review -->
Sketch $y=\lvert x-2\rvert$ and $y=2\lvert x+1\rvert$ on the same axes. Label their vertices and intersections, then solve $\lvert x-2\rvert\geq2\lvert x+1\rvert$, explaining the graph order. Separately, $(4,-1)$ lies on $y=f(x)$; find its image on $y=f(2-3x)+4$.
<!-- /task:later-review -->

<details markdown="1">
<summary>提示</summary>

相等给出区间边界。平方前说明两边的符号；对点变换匹配输入。

</details>

<details markdown="1">
<summary>解答与检查</summary>

顶点为 $(2,0)$ 和 $(-1,0)$。两边非负，故平方保持等式与不等式：

$$(x-2)^2\geq4(x+1)^2\iff -3x(x+4)\geq0.$$

交点为 $(-4,6)$ 和 $(0,2)$。在 $-4\leq x\leq0$ 内，第一个图像在第二个上方或与其相交；外侧次序相反。因此解为 $\boxed{[-4,0]}$，包含两个交点输入。比如 $x=-1$ 时 $3\geq0$，$x=1$ 时 $1\not\geq4$。

点变换满足 $2-3x=4$，所以新点为 $(-\frac23,3)$。若图像区间错，回看例7；若横坐标错，回看输入匹配再做 R2。

</details>

</section>

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

<details markdown="1">
<summary>范围与来源</summary>

[OxfordAQA 9660 大纲 v5.2，P2.1](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf)。

参考的官方题与配套评分材料（官方出版物镜像）：January 2025 Q6(c), QP p13 / MS p11; January 2024 Q2, QP p3 / MS p5. [January 2025 QP](https://aqamat.alevelclouds.com/25_01_QP_P2.pdf) · [MS](https://aqamat.alevelclouds.com/25_01_MS_P2.pdf) · [January 2024 QP](https://aqamat.alevelclouds.com/24_01_QP_P2.pdf) · [MS](https://aqamat.alevelclouds.com/24_01_MS_P2.pdf).

本页课堂例题、练习、重试与回顾为自拟教学材料，没有官方分值。 模值例7保留为大纲示例，解答为本站编写。

</details>

**学习路径：**[上一节：函数](/zh/alevel/a2-mathematics/functions/) · [下一节：代数分式与多项式除法](/zh/alevel/a2-mathematics/algebraic-fractions-and-division/)。

{% include exam_topic_practice.html %}
