---
layout: subjects
title: "图形变换"
mathjax: true
grade: igcse
subject: igcse-mathematics
lang: zh-CN
translation_of: /igcse/mathematics/transformations/
permalink: /zh/igcse/mathematics/transformations/
reading_layout: true
study_page: true
toc_headings: "h2"
---

[IGCSE 数学](/zh/igcse/mathematics/#learning-start)
{:.lesson-meta}

## 怎样把移动说清楚？ {#start}

只说“把三角形转一下”，别人不知道绕哪里、向哪边转。这一课要你画出像，完整描述变换，并解释什么没有改变。

先要会坐标和负数：$(3,-2)$ 表示向右3格、向下2格；需要时回看[坐标](/zh/igcse/mathematics/coordinates-and-lines/#start)。准备方格纸。先学单变换，再组合变换，并使用分数与负数比例的放大。

所有示范和任务均为自拟题，不设官方分值；图为教学构造。
{:.lesson-meta}

## 滑动、翻折和转动 {#moves}

**平移（translation）**让每个点沿同一方向移动同样远。列向量 $\binom{3}{-2}$ 表示向右3、向下2，所以 $(x,y)\to(x+3,y-2)$。它是移动多少，不是终点坐标。

**反射（reflection）**把像放到镜线另一侧，与原像点到镜线的垂直距离相等。镜线上的点不动。关于 $x=0$ 反射，x变号；关于 $y=0$ 反射，y变号。关于 $y=x$ 反射，交换坐标；关于 $y=-x$ 反射，交换后都变号。关于 $x=c$ 反射，原像点和像点的横坐标平均数为 c。

**旋转（rotation）**让每个点绕同一中心转过同样的角，到中心的距离不变。绕 O 逆时针90°，$(x,y)$ 变为 $(-y,x)$：$(1,0)$ 转到 $(0,1)$。顺时针90°得 $(y,-x)$，180°得 $(-x,-y)$。中心不是原点时，先转“从中心到点”的位移，再加回中心。

反求平移时，每组都用像坐标减原坐标，必须得到同一位移。反求旋转中心时，连接对应的原像点与像点，选择两组作垂直平分线，所选两线不能平行或重合。交点到各组对应点等距。在那里量转角、判断方向，再检查剩余顶点。只知道边长不变，还不能找到中心。

![单位坐标方格，标有 A(1,1)、B(3,1)、C(1,2) 和镜线 x=0。](/assets/img/igcse-geometry-calculation-transformations.svg)

<div class="worked-example" markdown="1">

### 完整示范：中心不在原点 {#example-turn}

**Question:** Rotate $A(1,1),B(3,1),C(1,2)$ through 90° anticlockwise about $K(1,0)$.

从 K 到三个点的位移是 $(0,1),(2,1),(0,2)$，转后为 $(-1,0),(-1,2),(-2,0)$，再加回 K：

$$A'(0,0),\qquad B'(0,2),\qquad C'(-1,0).$$

A 原来在 K 上方一格，现在在左方一格。AB 原来横着长2，像变成竖着长2。直接对原坐标套原点规则，会绕错中心。

</div>

## 动手画，再描述 {#practice}

<div class="lesson-check" markdown="1">

### 用方格图动手画 {#check-single}

**Question:** Using the triangle shown, draw and label its images under (a) translation $\binom{-2}{3}$, (b) reflection in $x=0$, and (c) rotation 180° about O. Give the nine image coordinates.

<details markdown="1">
<summary>提示</summary>

每个顶点都要动，再按原顺序连接。

</details>

<details markdown="1">
<summary>解答与检查</summary>

按 A、B、C 顺序：(a) $(-1,4),(1,4),(-1,5)$；(b) $(-1,1),(-3,1),(-1,2)$；(c) $(-1,-1),(-3,-1),(-1,-2)$。三种像都保持 AB = 2、AC = 1。反射改变顶点顺逆时针排列，平移和旋转保持。反射中每组对应点到 $x=0$ 等距。

</details>

</div>

<div class="lesson-check" markdown="1">

### 描述要让别人照着做 {#check-description}

**Question:** $P(2,1),Q(4,1),R(2,3)$ map to $P'(0,1),Q'(-2,1),R'(0,3)$. Describe a single transformation fully. What happens to lengths, angles and area? Separately, a translation maps (1,1),(3,1),(1,2) to (-2,3),(0,3),(-2,4), in order; find its vector. A rotation maps (3,1),(4,1),(3,3) to (1,3),(1,4),(-1,3), in order; find its centre, angle and direction. Plot and check every correspondence.

<details markdown="1">
<summary>提示</summary>

找 PP′ 的垂直平分线，再检查另外两组。另两种变换分别比较位移，或先作旋转中心再量转角。

</details>

<details markdown="1">
<summary>解答与检查</summary>

关于 $x=1$ 反射：对应点的中点在此线上，连接线与它垂直。长度、角度、面积均不变。只答 reflection 缺镜线。平移须给向量；旋转须给中心、角度、方向（180°可省方向）；放大须给中心和比例。

平移向量为 $\binom{-3}{2}$：每个像都向左3、向上2。旋转中第一组的垂直平分线为 $y=x$，第三组为 $x=1$，交于 $(1,1)$。相对此中心，$(2,0),(3,0),(2,2)$ 转为 $(0,2),(0,3),(-2,2)$，所以逆时针90°。检查三组，能排除只满足一组的错误中心。

</details>

</div>

## 从一个中心改变大小 {#enlargements}

**放大变换（enlargement）**把从中心 K 到每个点的位移乘以比例因子 k。角度不变，对应长度乘 $\lvert k\rvert$。先用正整数比例。

例如中心 $(1,1)$、比例2，把 $(3,2)$ 变成 $(5,3)$：位移 $(2,1)$ 变为 $(4,2)$。反过来找中心时，延长至少两组对应顶点的连线；非恒等的放大中，它们交于放大中心。再比较从中心出发的有方向距离，求 k。

<div class="lesson-check" markdown="1">

### 放大整个三角形 {#check-positive-enlarge}

**Question:** Draw the enlargement of $A(2,1),B(3,1),C(2,3)$ with centre $K(1,-1)$ and scale factor 2. Label every image vertex and give its coordinates. Check one length and one centre-to-point distance.

<details markdown="1">
<summary>提示</summary>

从K画三条射线，每个位移加倍，再连接像的顶点。

</details>

<details markdown="1">
<summary>解答与检查</summary>

原位移为 $(1,2),(2,2),(1,4)$，加倍再加K得 $A'(3,3),B'(5,3),C'(3,7)$，按顺序连接三点。AB长1，A'B'长2；KA'为KA两倍且在同一射线上。把原坐标直接加倍，会误用O作中心。

</details>

</div>

<div class="lesson-check" markdown="1">

### 反求完整放大指令 {#check-enlarge-description}

**Question:** An enlargement maps (2,1),(4,1),(2,2) to (3,1),(7,1),(3,3), in order. Find its centre and scale factor. Draw corresponding joining lines and verify the description on all three vertices.

<details markdown="1">
<summary>提示</summary>

比较对应边长，再延长两条不同的对应顶点连线。

</details>

<details markdown="1">
<summary>解答与检查</summary>

第一条边由2变4。第一组连线为 $y=1$，第三组为 $y=x$，交于 $K(1,1)$。从K出发，$(1,0),(3,0),(1,1)$ 变为 $(2,0),(6,0),(2,2)$，有方向比例为2。中心与比例合起来才能重建整幅像；只有边长比，缺少中心。

</details>

</div>

$0<k<1$ 时，像在同一射线上，更靠近中心。k 为负时，像在中心另一侧，并不是负长度或关于一条线反射。面积乘 $k^2$。非零比例的放大保持角度和平行关系，一般改变长度和面积。平移、旋转、反射保持长度、角度、周长和面积。反射改变顶点排列方向；负比例放大把每条中心到顶点的方向反过来，但在平面内仍保持顺逆时针排列。

<div class="worked-example" markdown="1">

### 完整示范：负分数比例 {#example-enlarge}

**Question:** Enlarge $A(2,0),B(4,0),C(2,2)$ by $-\frac12$ about O.

坐标本身就是从 O 出发的位移，两个分量都乘 $-\frac12$：

$$A'(-1,0),\quad B'(-2,0),\quad C'(-1,-1).$$

画点并连接。A、A' 在 O 两侧，OA' 为 OA 一半。原面积2，新面积 $2\times\frac14=\frac12$ 平方单位。两个坐标都变号，不能只改一个。

</div>

<div class="lesson-check" markdown="1">

### 同一中心的两个像 {#check-enlarge}

**Question:** Enlarge $A(3,1),B(5,1),C(3,3)$ about $K(1,1)$, first with $k=\frac12$ and then with $k=-2$. Draw both images; state the area factors and explain why K stays fixed.

<details markdown="1">
<summary>提示</summary>

减去中心，乘比例，再加回中心。

</details>

<details markdown="1">
<summary>解答与检查</summary>

比例 $\frac12$：$(2,1),(3,1),(2,2)$，面积乘 $\frac14$；比例 $-2$：$(-3,1),(-7,1),(-3,-3)$，面积乘4。K 到自己的位移为零，乘后仍为零。若第一种像的 A 为 $(1.5,0.5)$，你用了错误中心 O。

</details>

</div>

## 两步变换，先后次序 {#order}

先对每个点做第一步，再对所得的像做第二步，保留中间标记。例如 $P(2,1)$，先平移 $\binom{3}{0}$ 再关于 $x=0$ 反射，得 $(2,1)\to(5,1)\to(-5,1)$。反过来得 $(2,1)\to(-2,1)\to(1,1)$。这个反例说明这两步不能随意交换，不代表所有变换组合都不能交换。

<div class="lesson-check" markdown="1">

### 比较两个顺序 {#check-order}

**Question:** For $P(1,2)$ and $Q(3,1)$ compare reflection in $y=0$ followed by rotation 90° anticlockwise about O with the reverse order.

<details markdown="1">
<summary>提示</summary>

每个点、每个顺序都写两段箭头。

</details>

<details markdown="1">
<summary>解答与检查</summary>

P：$(1,2)\to(1,-2)\to(2,1)$；反序 $(1,2)\to(-2,1)\to(-2,-1)$。Q：$(3,1)\to(3,-1)\to(1,3)$；反序 $(3,1)\to(-1,3)\to(-1,-3)$。终点不同。两种顺序都保持长度，边长改变是计算错误，不能归咎于次序。

</details>

</div>

## 关闭旧解答再重试 {#retry}

缺中心或镜线，回看[单变换](#moves)；正负或大小错，回看[中心位移](#enlargements)；第二步从原图开始，回看[两段箭头](#order)。

整图放大或反求中心有误，回看[正比例作图](#check-positive-enlarge)和[反求完整指令](#check-enlarge-description)，再关闭旧解答做[新的整图重试](#retry-positive-enlarge)。

<div class="lesson-check" markdown="1">

### 重试单变换 {#retry-single}

**Question:** $P(4,2),Q(4,5)$ reflect to $(0,2),(0,5)$. Describe the reflection. Rotate the original P 90° clockwise about $(2,2)$. Separately, a translation maps (0,1),(2,1),(0,2) to (4,-2),(6,-2),(4,-1), in order; find its vector. A rotation maps (2,2),(3,2),(2,4) to (1,1),(1,0),(3,1), in order; give its full description and check all three vertices.

<details markdown="1">
<summary>提示</summary>

先找中点，再用中心到点的位移。

</details>

<details markdown="1">
<summary>解答与检查</summary>

关于 $x=2$ 反射。旋转时相对中心的位移 $(2,0)\to(0,-2)$，所以 $P'=(2,0)$，到中心仍为2。

新平移向量为 $\binom4{-3}$。最后的旋转，第一、第三组连线的垂直平分线为 $y=-x+3$ 和 $y=\frac13x+\frac53$，交于 $(1,2)$。相对位移 $(1,0),(2,0),(1,2)$ 变为 $(0,-1),(0,-2),(2,-1)$，所以绕 $(1,2)$ 顺时针90°。加回中心后，三组像坐标都吻合。

</details>

</div>

<div class="lesson-check" markdown="1">

### 重试整图放大与反求描述 {#retry-positive-enlarge}

**Question:** Enlarge (-1,2),(1,2),(-1,3) by factor 3 about (-2,1); draw and label the complete triangle. Separately, an enlargement maps (1,1),(2,1),(1,3) to (5,3),(8,3),(5,9), in order. Recover its centre and scale factor, using all three pairs to check.

<details markdown="1">
<summary>提示</summary>

作图时放大中心到点的位移；反求时先交对应连线，再比较有方向距离。

</details>

<details markdown="1">
<summary>解答与检查</summary>

第一问位移 $(1,1),(3,1),(1,2)$ 给出像顶点 $(1,4),(7,4),(1,7)$。连接三点：水平边由2变6，竖直边由1变3。第二问连线 $y=\frac12x+\frac12$ 和 $y=\frac13x+\frac13$ 交于 $(-1,0)$。相对位移 $(2,1),(3,1),(2,3)$ 变为 $(6,3),(9,3),(6,9)$，所以中心 $(-1,0)$、比例3。

</details>

</div>

<div class="lesson-check" markdown="1">

### 反求比例 {#retry-enlarge}

**Question:** Centre $(2,0)$ sends $P(6,2)$ to $P'(0,-1)$. Find k and the image of $Q(2,4)$.

<details markdown="1">
<summary>提示</summary>

比较从此中心出发的有方向位移。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$(4,2)\to(-2,-1)$，得 $k=-\frac12$。Q 的位移 $(0,4)$ 变为 $(0,-2)$，加回 K 得 $(2,-2)$。

</details>

</div>

<div class="lesson-check" markdown="1">

### 换顺序重试 {#retry-order}

**Question:** Translate $P(-1,3)$ by $\binom{0}{2}$ then rotate 180° about O. Compare with the reverse order.

<details markdown="1">
<summary>提示</summary>

保留中间点。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$(-1,3)\to(-1,5)\to(1,-5)$；反序 $(-1,3)\to(1,-3)\to(1,-1)$。平移向量的方向在坐标平面中固定。

</details>

</div>

## 学过别的主题再回来 {#next-step}

学[向量与矩阵](/zh/igcse/mathematics/vectors-and-matrices/#start)，把这些移动连到列向量计算，再遮住规则做下面的稍后题。继续到[几何混合回顾](/zh/igcse/mathematics/mixed-review/#geometry-review)。

<div class="lesson-check" markdown="1">

### 稍后回顾 {#later-check}

**Question:** Draw the reflection of $(1,1),(3,1),(1,2)$ in $y=x$. State its area and orientation. An enlargement about O sends $(1,1)$ to $(3,3)$: does it give the same whole-shape image?

<details markdown="1">
<summary>提示</summary>

不能只检查一个顶点。

</details>

<details markdown="1">
<summary>解答与检查</summary>

反射得 $(1,1),(1,3),(2,1)$，面积1平方单位，排列方向反转。放大比例3，得 $(3,3),(9,3),(3,6)$，面积9。两者不同，只匹配一个点不足以判断整个图形的变换。

</details>

</div>

## 范围与来源 {#sources}

<details markdown="1">
<summary>资格与实际阅读</summary>

OxfordAQA International GCSE Mathematics 9260 v5.1，G21；[大纲 PDF 22（印刷23）页](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-gcse-mathematics-specification.pdf#page=22)。本课包含单变换、组合变换，以及正数、分数、负数比例的放大。

实际读过绘图证据：Specimen 2018 1C Q11，[QP PDF 11页](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9260-92601C-international-gcse-mathematics-specimen-paper-2016-v1.pdf#page=11)、[MS PDF 6–7页](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9260-92601C-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=6)；1E Q16，QP PDF 14–15页，MS PDF 8页。本页所有题均自拟，不设官方分值。封面为 Specimen 2018，文件名2016不是考季。

</details>
