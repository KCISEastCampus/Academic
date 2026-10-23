---
title: "有理函数：图像与值域"
layout: subjects
mathjax: true
grade: as
subject: as-further-mathematics
lang: zh-CN
translation_of: /alevel/as-further-mathematics/rational-functions/
permalink: /zh/alevel/as-further-mathematics/rational-functions/
toc_headings: "#start, #model, #demonstration, #signs, #range, #quadratic-range, #practice, #retry, #later-review, #next-step, #sources"
study_page: true
reading_layout: true
---

[AS 高数课程](/zh/alevel/as-further-mathematics/)

一个分式为何有分开的分支，又怎样精确求值域？先连接因式与图像，再判断哪些水平线确实与曲线相交。读完三类函数后，收起示范完成[独立检查](#practice)。

## 开始前 {#start}

先修是因式分解、二次方程、判别式与符号；不熟悉时回看 [AS 二次代数](/zh/alevel/as-mathematics/algebra/#l02)。学完应能不用微分，说明草图、交点、不等式与值域的依据。

<section class="lesson-check" markdown="1">

### 先修检查 {#entry}

**Entry check (self-written):** Factor $x^2-x-2$. State where $(x-2)(x+1)$ is positive, zero or negative.

<details markdown="1"><summary>提示</summary>

找出两个零点，各区间取一点。

</details>

<details markdown="1"><summary>解答与核对</summary>

分解为 $(x-2)(x+1)$，零点为 $-1,2$。从左到右符号 $+,-,+$，端点为零。展开核对 $x^2-x-2$；若错，分别标两因式的符号再相乘。

</details>

</section>

## 因式、禁值与渐近线 {#model}

有理函数是多项式的商。本课研究一次/一次、一次/二次、首一二次/首一二次。先记录原分母禁值；约分不能恢复原本不允许的输入。

约分后，分母零点若对应非零分子，就给出竖直渐近线；禁值处若留下有限极限，则标空点。输入绝对值很大时比较首项：分子次数较低则水平渐近线为零，同次则取首项系数比。这只是远处行为，曲线可以穿过水平渐近线。

分子零点只有在原分母非零时才给横轴交点；只有定义域允许输入零时，才能代入找纵轴交点。

<section class="worked-example" markdown="1">

### 从同一图像连接多个判断 {#demonstration}

**Demonstration (self-written):** Sketch $f(x)=(x+1)/(x-2)$ and find its intersections with $y=x$.

$$\begin{aligned}
&f(x)=\frac{x+1}{x-2}\\
&=1+\frac3{x-2},\\
&x\ne2.
\end{aligned}$$

改写把固定高度与变化的分式分开。渐近线 $x=2,y=1$，截点 $(-1,0),(0,-1/2)$。2 左侧曲线低于 1，右侧高于 1，靠近极点时分式无界。这些信息共同确定两支。

![Graph of y=(x+1)/(x−2), labelled intercepts and dashed asymptotes x=2, y=1.](/alevel/as-further-mathematics/diagrams/rational.svg){: width="560" height="440" }

交点同时满足两式；在已排禁值的定义域内，同乘分母才等价：

$$\begin{aligned}
&\frac{x+1}{x-2}=x\\
&\iff x+1=x(x-2)\\
&\iff x^2-3x-1=0,\\
&x=\frac{3\pm\sqrt{13}}2.
\end{aligned}$$

两根均不是 2，所以都合法，且 $y=x$。同时核对二次式与原分母；消元后所得的根在此之前只是候选。

</section>

## 不等式还需要符号 {#signs}

零点与极点把定义域分成符号稳定的区间，两者都要标。同乘符号未知的分母可能改变不等号方向，应化成一个分式或明确分情况。

<section class="lesson-check" markdown="1">

### 补全符号 {#scaffold}

**Scaffold (self-written):** Solve $f(x)>0$ by marking signs in the intervals cut by $-1,2$.

<details markdown="1"><summary>提示</summary>

使用 $f(x)=(x+1)/(x-2)$。

</details>

<details markdown="1"><summary>解答与核对</summary>

符号为 $+,-,+$，故 $x<-1$ 或 $x>2$。严格不等式排除零点，2 为禁值。

</details>

</section>

## 高度需要合法输入 {#range}

令输出为实高度 $k$，在定义域内清去分母，判断有无合法实输入。只有方程仍是二次时才能用判别式；首项系数消失时另解降次方程，始终保留分母禁值。

对第一幅图，$(k-1)x=2k+1$。$k=1$ 要求 $0=3$，无解；其余每个高度都有合法候选，因为

$$\begin{aligned}
&x=\frac{2k+1}{k-1},\\
&x-2=\frac3{k-1}\ne0.
\end{aligned}$$

所以除 1 外的实高度都能取得。取不到渐近线高度是本例的论证结果，不能当成普遍规则。

<section class="worked-example" markdown="1">

### 一次分子与二次分母

**Demonstration (self-written):** Sketch $q(x)=x/(x^2-1)$ and determine its range without calculus.

极点线为 $x=\pm1$，分子在那里非零；唯一轴交点 $(0,0)$。奇函数图像在原点穿过水平渐近线 $y=0$。从左到右四区间符号为负、正、负、正；在极点旁也用因式符号确定趋向正无穷还是负无穷。

$$\begin{aligned}
&q(x)=k\iff kx^2-x-k=0,\\
&x\ne\pm1.\\
&k\ne0:\quad D=1+4k^2>0.\\
&k=0:\quad -x=0.
\end{aligned}$$

输入 $1,-1$ 使多项式分别为 $-1,1$，所以都不可能成为任何高度的根。非零高度有合法实根，零高度有合法输入零。因此值域是全体实数，没有有限的全局最大值或最小值。

</section>

## 二次理论与确实取得的极值 {#quadratic-range}

<section class="worked-example" markdown="1">

### 保留降次情况

**Demonstration (self-written):** Find the range and extremum points of $g(x)=(x^2+2)/(x^2-4x)$ without calculus.

$$\begin{aligned}
&g(x)=k\\
&\iff(1-k)x^2+4kx+2=0,\\
&x\ne0,4.\\
&k\ne1:\quad D=16k^2+8k-8\\
&=8(2k-1)(k+1)\ge0.
\end{aligned}$$

因此 $k\le-1$ 或 $k\ge1/2$。输入 0、4 使多项式分别为 2、18，故所得根不会是禁值。还要检查 $k=1$，降次为 $4x+2=0$，合法输入 $x=-1/2$。应包含这一高度，最终仍是这两个区间。

$$\begin{aligned}
&k=-1:\quad2(x-1)^2=0\\
&\Rightarrow(1,-1),\\
&k=\tfrac12:\quad\tfrac12(x+2)^2=0\\
&\Rightarrow(-2,1/2).
\end{aligned}$$

两边界都能取得：$(1,-1)$ 是负的中间分支的极大点，$(-2,1/2)$ 是所在外支的极小点；整个函数无界，没有全局极值。草图还需极点线 $x=0,4$、无轴交点，以及在 $x=-1/2$ 被穿过的水平渐近线 $y=1$。论证既为全部允许高度保证合法输入，也排除所有空隙高度。

</section>

## 独立完成 {#practice}

收起示范，自己画出并标注草图；如实记录所用帮助。

<section class="lesson-check" markdown="1">

### 第 1 题 {#practice-1}

**Independent task (self-written):** For $h(x)=(x^2-1)/(x^2-x-2)$, find domain and range, sketch missing points and asymptotes, and solve $h(x)>2$. Justify excluded heights.

<details markdown="1"><summary>提示</summary>

分解后保留禁值；空点高度在别处能否取得？研究 $h(x)-2$。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$\begin{aligned}
&h(x)=\frac{x-1}{x-2},\\
&x\ne-1,2,\\
&h(x)-2=\frac{3-x}{x-2}.
\end{aligned}$$

空点 $(-1,2/3)$，渐近线 $x=2,y=1$，轴交点 $(1,0),(0,1/2)$。除 1 外各高度仅有一个候选输入，但 $2/3$ 只对应禁值 $-1$，故值域排除 $1,2/3$；不等式解 $2<x<3$。若恢复禁值，回看[定义域](#model)，再做[重试 3](#retry-3)；区间符号错则做[重试 1](#retry-1)。

</details>

</section>

<section class="lesson-check" markdown="1">

### 第 2 题 {#practice-2}

**Independent task (self-written):** For $u(x)=x/(x^2+1)$, sketch the graph with its intercepts, asymptotes and extrema, and prove its exact range without calculus. Explain what happens when the equation for an input loses its quadratic term.

<details markdown="1"><summary>提示</summary>

考虑高度 $k$；分母能否为零？

</details>

<details markdown="1"><summary>解答与核对</summary>

$$\begin{aligned}
&\frac{x}{x^2+1}=k\\
&\iff kx^2-x+k=0.\\
&k\ne0:\quad1-4k^2\ge0.\\
&k=0:\quad x=0.\\
&k=\pm\tfrac12:\quad x=\pm1.
\end{aligned}$$

定义域为全体实数，值域 $[-1/2,1/2]$。奇函数过 $(0,0)$，无竖直渐近线，两端趋于 $y=0$，取得极值点 $(-1,-1/2),(1,1/2)$。高度 $k=0$ 合法。另用 $(x-1)^2\ge0$ 与 $(x+1)^2\ge0$ 除以正分母，可独立核对边界。若丢掉零，回看[降次](#range)。

</details>

</section>

<section class="lesson-check" markdown="1">

### 第 3 题 {#practice-3}

**Independent task (self-written):** Determine the domain and range of $v(x)=(x^2+1)/(x^2-1)$ without calculus. Sketch its branches and identify any attained extremum. Is the horizontal-asymptote height attained?

<details markdown="1"><summary>提示</summary>

平方非负与 $k=1$ 分开检查。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$\begin{aligned}
&v(x)=k\\
&\iff(1-k)x^2+(1+k)=0.\\
&k=1:\quad2=0.\\
&k\ne1:\quad x^2=\frac{k+1}{k-1}\ge0.
\end{aligned}$$

值域 $k\le-1$ 或 $k>1$。候选平方不可能为 1，否则要求 $1=-1$；输入排除 $\pm1$。偶函数有极点线 $x=\pm1$、渐近线 $y=1$、无横轴交点、纵轴交点 $(0,-1)$。中间分支在零处取得最大高度 $-1$，外支大于 1。高度 1 不可达；比较此降次方程与[合法示范](#quadratic-range)。

</details>

</section>

## 诊断与重试 {#retry}

空点或丢失高度出错时回看[因式](#model)与[合法高度](#range)，再做重试 3；区间错回看[符号](#signs)，再做重试 1；遗漏或凭空加入高度回看[输入方程](#range)，再做重试 2。先收起旧答案。

<section class="lesson-check" markdown="1">

### 重试 1 {#retry-1}

**Retry (self-written):** Solve $x/(x^2-1)\ge0$, explaining endpoints.

<details markdown="1"><summary>提示</summary>

分别标分子与分母零点。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$x\in(-1,0]\cup(1,\infty).$$

排除两极点，包含分子零点。这个一次/二次函数的水平渐近线为 $y=0$。

</details>

</section>

<section class="lesson-check" markdown="1">

### 重试 2 {#retry-2}

**Retry (self-written):** Find the exact range and any extremum of $w(x)=x^2/(x^2+1)$ without calculus. Decide whether its horizontal-asymptote height occurs.

<details markdown="1"><summary>提示</summary>

先查特殊高度，再除以 $1-k$。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$\begin{aligned}
&\frac{x^2}{x^2+1}=k\\
&\iff(1-k)x^2=k.\\
&k=1:\quad0=1.\\
&k\ne1:\quad x^2=\frac{k}{1-k}\ge0.
\end{aligned}$$

值域 $[0,1)$，最小点 $(0,0)$，高度 1 不可达。分母无实零点，可用 $w(x)=1-1/(x^2+1)$ 复核。

</details>

</section>

<section class="lesson-check" markdown="1">

### 再试 3 {#retry-3}

**Retry (self-written):** Simplify $H(x)=(x^2-3x+2)/(x^2-1)$ without changing its domain. Find its exact range and the coordinates of any hole. Prove whether the missing-point height is attained at another input.

<details markdown="1"><summary>提示</summary>

先保留原分母禁值。对一般高度反解输入，再分别检验两个禁值。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$\begin{aligned}
&H(x)=\frac{x-2}{x+1},\\
&x\ne1,-1,\\
&H(x)=k\iff(k-1)x=-k-2.\\
&k=1:\quad0=-3,\\
&k\ne1:\quad x=\frac{-k-2}{k-1}.
\end{aligned}$$

定义域排除 $1,-1$。空点在 $(1,-1/2)$，极点为 $x=-1$。高度 1 不可能；其他高度各只有一个候选输入。该输入永远不等于 $-1$（否则须有 $-2=1$），且恰在 $k=-1/2$ 时等于禁值 1。因此值域为 $\mathbb R\setminus\{1,-1/2\}$，没有其他输入补回空点的高度。若只保留空点却漏掉丢失高度，回看[合法输入论证](#range)。

</details>

</section>

## 下一课后的回顾 {#later-review}

<section class="lesson-check" markdown="1">

### 混合回顾 {#review}

**Later review (self-written):** Find every point where $f(x)=(x+1)/(x-2)$ meets $y=x$, and solve $f(x)<x$. Separately, determine whether $u(x)=x/(x^2+1)$ can equal $3/5$ or zero. Explain how your evidence differs between the two questions.

<details markdown="1"><summary>提示</summary>

只找交点不足以分割定义域；高度需要存在性论证。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$\begin{aligned}
&\frac{x+1}{x-2}=x\\
&\iff x^2-3x-1=0,\\
&a=\frac{3-\sqrt{13}}2,\\
&b=\frac{3+\sqrt{13}}2,\\
&f(x)-x=\frac{-x^2+3x+1}{x-2}.
\end{aligned}$$

交点 $(a,a),(b,b)$，且 $a<2<b$；不等式解 $a<x<2$ 或 $x>b$。高度 $3/5$ 要求 $3x^2-5x+3=0$，判别式 $-11$，所以不可能；零高度在输入零处取得。区间错回看[符号](#signs)，存在性推理不完整回看[值域](#range)。

</details>

</section>

## 下一步 {#next-step}

能解释草图与降次且无帮助通过对应重试后，进入[圆锥曲线与轨迹](/zh/alevel/as-further-mathematics/conics-and-loci/)，下一课后回来完成回顾。

## 来源与范围 {#sources}

本页示范及练习均为**自拟题（self-written）**，无官方分值。FP1.1 包括三类有理函数、轴平行渐近线、交点、不等式及用二次理论求值域与极值。

<details markdown="1"><summary>官方来源与样卷身份</summary>

本课范围按 9665 v5.2；以下已读原题及配套评分材料用于设计作答证据，本页练习不是原题复制或官方评分标准。

FM01 样卷身份：QP 正文为 **Specimen 2018 Morning**，文件名含 2019/v3，页脚版本有差异；官网配套 MS 为样卷、版权 2017，并非某正式考季的实考 Final MS。

- [OxfordAQA 9665 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf), FP1.1.
- FM01 specimen Q9; QP pp.12–13, MS p.9. [FM01 specimen QP](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9665-FM01-international-as-further-mathematics-specimen-paper-2019-v3-1.pdf) · [Specimen MS](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9665-FM01-international-as-further-mathematics-mark-scheme-2017-v2-1.pdf).

</details>

[课程路线](/zh/alevel/as-further-mathematics/#learning-route) · [下一课](/zh/alevel/as-further-mathematics/conics-and-loci/)
