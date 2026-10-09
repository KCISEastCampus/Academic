---
title: 向量
layout: subjects
mathjax: true
grade: a2
subject: a2-mathematics
lang: zh-CN
translation_of: /alevel/a2-mathematics/vectors/
permalink: /zh/alevel/a2-mathematics/vectors/
toc_headings: h2
study_page: true
---

[纯数学](/zh/alevel/a2-mathematics/) · P2.10 向量

用向量描述三维空间中的点和直线。判断两条直线的位置关系，求角度并计算垂直距离。

- **学习：**从[向量与位置向量](#vectors-and-position-vectors)开始，然后学习[直线](#straight-lines)、[两条直线的位置关系](#pairs-of-lines)和[数量积](#scalar-product)。
- **作业帮助：**仔细选择所需向量。位置向量、方向向量以及连接两点的向量作用不同。
- **复习：**先完成[练习](#practice)，再打开提示与解答。

教材：第 9 章，第 9.1–9.9 节（第 124–147 页，印刷页码）。本课介绍本章中关于点与直线的方法。本章不涉及平面方程。

**开始前：**你应当掌握坐标几何、联立方程、勾股定理和余弦的知识。若答案要求用角度制，求反余弦时请使用角度模式。

所有例题与练习题均为自编题，并非官方真题。建议练习时间仅供参考；题目没有官方分值。

## 向量与位置向量 {#vectors-and-position-vectors}

**向量**（vector）既有大小也有方向。**标量**（scalar）只有大小。点 $A$ 的**位置向量**（position vector）是 $\overrightarrow{OA}$，其中 $O$ 为原点。

沿坐标轴正方向的单位向量（Cartesian unit vectors）$\mathbf i$、$\mathbf j$ 和 $\mathbf k$ 分别沿 $x$、$y$ 和 $z$ 轴的正方向。例如，

$$\mathbf a=2\mathbf i-\mathbf j+3\mathbf k=\begin{pmatrix}2\\-1\\3\end{pmatrix}.$$

向量相加、相减或乘以标量时，分别对各**分量**（component）进行运算。乘以正标量时方向不变；乘以负标量时方向相反。向量的模（magnitude）为

$$\lvert\mathbf a\rvert=\sqrt{a_1^2+a_2^2+a_3^2}.$$

若 $\mathbf a\ne\mathbf0$，则 $\frac{\mathbf a}{\lvert\mathbf a\rvert}$ 是沿 $\mathbf a$ 方向的**单位向量**（unit vector），其模为 $1$。

若 $A$ 和 $B$ 的位置向量分别为 $\mathbf a$ 和 $\mathbf b$，则

$$\overrightarrow{AB}=\mathbf b-\mathbf a,\qquad \overrightarrow{OM}=\frac{\mathbf a+\mathbf b}{2},$$

其中 $M$ 是线段 $AB$ 的中点。由**三角形法则**（triangle law）可得 $\overrightarrow{AB}+\overrightarrow{BC}=\overrightarrow{AC}$。

### 例题 1 — 连接两点并求中点 {#example-1--join-two-points-and-find-their-midpoint}

**Question:** $A=(1,-2,3)$ and $B=(5,0,4)$. Find $\overrightarrow{AB}$, the length $AB$, a unit vector in its direction and the midpoint $M$.

用终点的位置向量减去起点的位置向量：

$$\overrightarrow{AB}=\begin{pmatrix}5-1\\0-(-2)\\4-3\end{pmatrix}=\begin{pmatrix}4\\2\\1\end{pmatrix}.$$

$$AB=\sqrt{4^2+2^2+1^2}=\boxed{\sqrt{21}}.$$

所求单位向量为

$$\boxed{\frac1{\sqrt{21}}\begin{pmatrix}4\\2\\1\end{pmatrix}}.$$

取各坐标的平均值可得中点：

$$\boxed{M=\left(3,-1,\frac72\right)}.$$

**检查：**单位向量的模的平方为 $\frac{16+4+1}{21}=1$，且 $\overrightarrow{AM}=\frac12\overrightarrow{AB}$。

**常见错误：**用 $\mathbf a-\mathbf b$ 表示 $\overrightarrow{AB}$。这样得到的是 $\overrightarrow{BA}$，方向相反。

## 直线 {#straight-lines}

一条直线可以用其上一点的位置向量 $\mathbf a$ 和一个非零的**方向向量**（direction vector）$\mathbf b$ 表示：

$$\boxed{\mathbf r=\mathbf a+\lambda\mathbf b,\quad\lambda\in\mathbb R}.$$

$\mathbf r$ 表示直线上一般点的位置向量。若直线经过不同的两点 $A$ 和 $B$，可取 $\mathbf b=\overrightarrow{AB}$。

直线方程的形式并不唯一：用直线上另一个点，或用方向向量的任意非零倍数，在改变参数后都能表示同一条直线。

### 例题 2 — 写出直线方程并检查一个点 {#example-2--find-an-equation-and-check-a-point}

**Question:** Find a vector equation of the line through $A=(1,2,-1)$ and $B=(3,1,3)$. Check whether $P=(5,0,7)$ lies on it, and find where it meets the $xy$-plane.

方向向量为 $\overrightarrow{AB}=(2,-1,4)$，因此直线方程可以写成

$$\boxed{\mathbf r=\begin{pmatrix}1\\2\\-1\end{pmatrix}+\lambda\begin{pmatrix}2\\-1\\4\end{pmatrix}}.$$

其分量方程为 $x=1+2\lambda$、$y=2-\lambda$、$z=-1+4\lambda$。

对于点 $P$，从 $x$ 方程得到 $\lambda=2$。将同一数值代入另外两个方程，得到 $y=0$ 且 $z=7$，所以 $P$ 在该直线上。

在 $xy$ 平面上，$z=0$。因此 $-1+4\lambda=0$，得到 $\lambda=\frac14$，交点为

$$\boxed{\left(\frac32,\frac74,0\right)}.$$

**检查：**$\lambda=0$ 时直线上是点 $A$；$\lambda=1$ 时直线上是点 $B$。

**常见错误：**对每个坐标分别使用不同的参数值。直线上的点必须用同一个参数值满足三个方程。

## 两条直线的位置关系 {#pairs-of-lines}

对于 $\mathbf r=\mathbf a+\lambda\mathbf b$ 和 $\mathbf r=\mathbf c+\mu\mathbf d$，先比较 $\mathbf b$ 和 $\mathbf d$。

| 方向向量 | 接下来检查 | 位置关系 |
|---|---|---|
| 互为标量倍数 | 一条直线上的点是否也在另一条直线上？ | 若是，则为同一直线；若否，则为不同的平行直线 |
| 不互为标量倍数 | 是否存在一对 $(\lambda,\mu)$，能同时满足三个分量方程？ | 若是，则相交；若否，则为异面直线 |

**异面直线**（skew lines）是三维空间中既不平行也不相交的直线。两条直线要分别使用参数；它们相交时参数值不必相同。

### 例题 3 — 检查第三个坐标 {#example-3--check-the-third-coordinate}

**Question:** Find the intersection of

$$L:\quad\mathbf r=\begin{pmatrix}1\\0\\2\end{pmatrix}+\lambda\begin{pmatrix}1\\2\\-1\end{pmatrix},$$

$$M:\quad\mathbf r=\begin{pmatrix}3\\3\\-1\end{pmatrix}+\mu\begin{pmatrix}0\\1\\1\end{pmatrix}.$$

两个方向向量不互为标量倍数。令 $x$ 坐标相等，得到 $1+\lambda=3$，所以 $\lambda=2$。再令 $y$ 坐标相等，得到 $2\lambda=3+\mu$，所以 $\mu=1$。

现在检查 $z$ 坐标：$2-\lambda=0$ 且 $-1+\mu=0$，两者相等。交点为

$$\boxed{(3,4,0)}.$$

**检查：**将 $\lambda=2$ 代入 $L$，将 $\mu=1$ 代入 $M$，会得到相同的三个坐标。

### 例题 4 — 方程相似，位置关系不同 {#example-4--similar-equations-different-relationships}

保留例题 3 中的直线 $L$。将它分别与下面各直线比较。

**(a)** 直线 $N$ 的方程为

$$\mathbf r=\begin{pmatrix}3\\3\\0\end{pmatrix}+\mu\begin{pmatrix}0\\1\\1\end{pmatrix}.$$

$x$ 和 $y$ 方程仍给出 $\lambda=2$、$\mu=1$。但 $z$ 坐标分别是 $0$（$L$ 上）和 $1$（$N$ 上）。两者不相交，且方向不平行。因此它们是**异面直线**。

**(b)** 直线 $R$ 的方程为

$$\mathbf r=\begin{pmatrix}2\\2\\1\end{pmatrix}+s\begin{pmatrix}2\\4\\-2\end{pmatrix}.$$

它的方向向量是 $L$ 的方向向量的两倍。它的起点对应于 $L$ 上 $\lambda=1$ 的点，所以 $R$ 和 $L$ 是**同一条直线**。两个参数的关系是 $\lambda=1+2s$。

**(c)** 将 $R$ 的起点改为 $(2,2,2)$。方向向量不变，但这个点不在 $L$ 上：前两个坐标要求 $\lambda=1$，而这时 $z=1$，不是 $2$。新直线与原直线**平行且不同**。

**常见错误：**认为方向向量互为标量倍数就一定是两条不同的平行直线。也要检查它们是否为同一条直线。

## 数量积 {#scalar-product}

**数量积**（scalar product）是一个数：

$$\mathbf a\cdot\mathbf b=a_1b_1+a_2b_2+a_3b_3.$$

对于非零向量，数量积也等于 $\lvert\mathbf a\rvert\lvert\mathbf b\rvert\cos\theta$，其中 $0\le\theta\le180^\circ$ 是两向量方向之间的夹角。因此

$$\cos\theta=\frac{\mathbf a\cdot\mathbf b}{\lvert\mathbf a\rvert\lvert\mathbf b\rvert}.$$

两个非零向量的数量积为零时，它们互相垂直。零向量没有方向，因此不能将它代入夹角公式。

**求三角形的角：**从该顶点出发使用两个向量。例如求角 $ABC$，应使用 $\overrightarrow{BA}$ 和 $\overrightarrow{BC}$。若改用 $\overrightarrow{AB}$，其中一个方向会相反，所得角就是**补角**（supplementary angle）。

### 例题 5 — 两个向量的夹角 {#example-5--angle-between-two-vectors}

**Question:** Find the angle between $\mathbf a=(1,2,2)$ and $\mathbf b=(2,-1,2)$, to $1$ decimal place.

$$\mathbf a\cdot\mathbf b=2-2+4=4,\qquad \lvert\mathbf a\rvert=\lvert\mathbf b\rvert=3.$$

$$\cos\theta=\frac49,\qquad \boxed{\theta\approx63.6^\circ}.$$

**检查：**数量积为正，所以向量夹角是锐角。使用角度模式求反余弦；计算前不要把 $\frac49$ 四舍五入。

### 例题 6 — 两条直线的锐角 {#example-6--acute-angle-between-lines}

**Question:** Two lines have direction vectors $\mathbf b=(1,1,1)$ and $\mathbf d=(1,-1,-1)$. Find the acute angle between the lines.

它们的数量积为 $-1$，两个模都为 $\sqrt3$。按题目给定的向量方向计算，夹角的余弦为 $-\frac13$，所以夹角是钝角。

直线可以用任意一个方向来描述。若要求两条直线之间的锐角 $\phi$，数量积要取绝对值：

$$\cos\phi=\frac{\lvert\mathbf b\cdot\mathbf d\rvert}{\lvert\mathbf b\rvert\lvert\mathbf d\rvert}=\frac13.$$

$$\boxed{\phi\approx70.5^\circ}.$$

**检查：**反转任意一个方向向量，得到的两直线锐角不变。若题目要求两个有向向量之间的夹角，就不要自动取绝对值。

## 垂足与距离 {#foot-of-the-perpendicular-and-distance}

从点 $P$ 向直线作垂线，垂线与直线垂直相交于垂足（foot of the perpendicular）$H$；此时 $PH$ 与直线成直角。线段 $PH$ 的长度就是点到直线的垂直距离。

1. 写出直线上一般点 $H$：$\mathbf h=\mathbf a+\lambda\mathbf b$。
2. 写出 $\overrightarrow{PH}=\mathbf h-\mathbf p$。
3. 使用 $\overrightarrow{PH}\cdot\mathbf b=0$ 求 $\lambda$。
4. 求出 $H$ 的坐标，然后计算 $\lvert\overrightarrow{PH}\rvert$。

![示意图：A 和 H 位于一条直线上。线段 PH 与直线垂直，表示垂直距离。](/assets/img/vectors-perpendicular.svg)

### 例题 7 — 先求垂足，再求距离 {#example-7--find-the-foot-then-the-distance}

**Question:** Find the foot of the perpendicular from $P=(5,3,5)$ to the line

$$\mathbf r=\begin{pmatrix}1\\0\\1\end{pmatrix}+\lambda\begin{pmatrix}1\\2\\2\end{pmatrix},$$

and hence find the perpendicular distance.

直线上一般点为 $H=(1+\lambda,2\lambda,1+2\lambda)$，因此

$$\overrightarrow{PH}=\begin{pmatrix}\lambda-4\\2\lambda-3\\2\lambda-4\end{pmatrix}.$$

垂直条件为

$$\begin{aligned}0&=(\lambda-4)+2(2\lambda-3)\\&\quad+2(2\lambda-4)=9\lambda-18.\end{aligned}$$

因此 $\lambda=2$，得到 $\boxed{H=(3,4,5)}$。

$$\overrightarrow{PH}=\begin{pmatrix}-2\\1\\0\end{pmatrix},\qquad \boxed{PH=\sqrt5}.$$

**检查：**$H$ 在直线上，且 $(-2)(1)+(1)(2)+(0)(2)=0$。这两个条件都要检查：只有一个向量垂直于直线方向，还不能确定它就是垂足。

**常见错误：**计算 $P$ 到直线起点的距离。通常这不是最短距离。

## 练习 {#practice}

**独立练习 · 30–40 分钟**

写出所用的向量，不要只写数值结果。求交点时检查三个坐标。求距离时，同时检查垂足在直线上，以及连接向量与直线垂直。

### Q1 — 位置、方向与中点 {#q1--position-direction-and-midpoint}

$A=(2,-1,0)$ and $B=(-2,3,4)$. Find $\overrightarrow{AB}$, $AB$, a unit vector in the direction $AB$, and the midpoint of $AB$.

<details markdown="1">
<summary>提示</summary>

用终点的位置减去起点的位置。将所得向量除以它的模，即得单位向量。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$\overrightarrow{AB}=\begin{pmatrix}-4\\4\\4\end{pmatrix},\qquad AB=\sqrt{48}=4\sqrt3.$$

单位向量为 $\frac1{\sqrt3}(-1,1,1)$，中点为 $\boxed{(0,1,2)}$。

单位向量的模的平方为 $\frac13(1+1+1)=1$。中点是 $A+\frac12\overrightarrow{AB}$。

</details>

### Q2 — 经过两点的直线 {#q2--a-line-through-two-points}

Find an equation of the line through $A=(0,1,2)$ and $B=(2,2,-2)$. Does $P=(4,3,-6)$ lie on it? Where does it meet the $xy$-plane?

<details markdown="1">
<summary>提示</summary>

方向向量可以取 $(2,1,-4)$。$xy$ 平面上 $z=0$。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$\boxed{\mathbf r=\begin{pmatrix}0\\1\\2\end{pmatrix}+\lambda\begin{pmatrix}2\\1\\-4\end{pmatrix}}.$$

$\lambda=2$ 时，直线上对应的点为 $(4,3,-6)$，所以 $P$ 在直线上。令 $2-4\lambda=0$，得到 $\lambda=\frac12$，因此与平面的交点为 $\boxed{(1,\frac32,0)}$。

用同一个 $\lambda$ 检查三个坐标。

</details>

### Q3 — 相交还是异面？ {#q3--intersecting-or-skew}

Investigate the lines

$$L:\quad\mathbf r=\begin{pmatrix}0\\0\\1\end{pmatrix}+\lambda\begin{pmatrix}1\\1\\1\end{pmatrix},$$

$$M:\quad\mathbf r=\begin{pmatrix}2\\0\\1\end{pmatrix}+\mu\begin{pmatrix}0\\1\\1\end{pmatrix}.$$

Find their intersection if one exists. Then describe the relationship if the starting point of $M$ is changed to $(2,0,2)$.

<details markdown="1">
<summary>提示</summary>

先确认两个方向向量不互为标量倍数。使用 $x$ 和 $y$ 方程求参数，再检查 $z$ 坐标。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$x$ 方程给出 $\lambda=2$，$y$ 方程给出 $\mu=2$。两条直线都给出 $z=3$，所以交点为 $\boxed{(2,2,3)}$。

若起点改变，两条直线的对应坐标分别是 $z=3$（$L$ 上）和 $z=4$（$M$ 上）。两直线不相交；方向也不平行，所以它们是异面直线。

</details>

### Q4 — 平行还是同一直线？ {#q4--parallel-or-the-same-line}

The line $L$ is $\mathbf r=(1,2,3)+\lambda(2,-1,1)$. Compare it with **(a)** $\mathbf r=(3,1,4)+s(4,-2,2)$ and **(b)** $\mathbf r=(3,1,5)+s(4,-2,2)$.

<details markdown="1">
<summary>提示</summary>

两个方向向量都是 $L$ 的方向向量的两倍。检查每条直线的起点是否在 $L$ 上。

</details>

<details markdown="1">
<summary>解答与检查</summary>

**(a)** 起点对应于 $L$ 上 $\lambda=1$ 的点，因此两者是同一直线。参数关系为 $\lambda=1+2s$。

**(b)** 前两个坐标要求 $\lambda=1$，但这时 $L$ 上的 $z=4$，不是 $5$。这两条直线平行且不同。

</details>

### Q5 — 垂直关系与夹角 {#q5--perpendicularity-and-angles}

**(a)** Find $k$ if $(2,k,1)$ is perpendicular to $(1,-1,3)$.

**(b)** Find the angle between the vectors $(1,0,1)$ and $(-1,1,-1)$, to $1$ decimal place. Then find the acute angle between lines with these directions.

<details markdown="1">
<summary>提示</summary>

(a) 使用数量积为零的条件。(b) 求向量夹角时保留数量积的符号；求两直线的锐角时取其绝对值。

</details>

<details markdown="1">
<summary>解答与检查</summary>

**(a)** $2-k+3=0$，所以 $\boxed{k=5}$。

**(b)** 数量积为 $-2$，两个模分别为 $\sqrt2$ 和 $\sqrt3$：

$$\cos\theta=-\frac2{\sqrt6},\qquad \boxed{\theta\approx144.7^\circ}.$$

两直线的锐角为 $180^\circ-\theta$，所以 $\boxed{35.3^\circ}$。

数量积为负，说明两向量的夹角是钝角。反转其中一个方向，两直线之间的锐角仍不变。

</details>

### Q6 — 垂直距离 {#q6--a-perpendicular-distance}

Find the foot of the perpendicular from $P=(3,2,0)$ to $\mathbf r=(1,0,0)+\lambda(1,1,0)$. Hence find the distance from $P$ to the line.

<details markdown="1">
<summary>提示</summary>

写出 $H=(1+\lambda,\lambda,0)$，并使用 $\overrightarrow{PH}\cdot(1,1,0)=0$。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$\overrightarrow{PH}=(\lambda-2,\lambda-2,0)$。它与方向向量的数量积为 $2\lambda-4$，所以 $\lambda=2$，且 $H=(3,2,0)=P$。

因此 $\boxed{PH=0}$。点本身已经在直线上。点到直线的距离不一定大于零；本题的距离确实为零。

</details>

### Q7 — 先求垂足再测量 {#q7--find-the-foot-before-measuring}

Find the foot of the perpendicular from $P=(4,0,2)$ to $\mathbf r=(0,1,0)+\lambda(1,0,1)$, and find the perpendicular distance.

<details markdown="1">
<summary>提示</summary>

$H=(\lambda,1,\lambda)$。先用数量积求 $\lambda$，再求模。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$\overrightarrow{PH}=(\lambda-4,1,\lambda-2)$。垂直条件给出 $2\lambda-6=0$，所以 $\lambda=3$，且 $\boxed{H=(3,1,3)}$。

$$\overrightarrow{PH}=(-1,1,1),\qquad \boxed{PH=\sqrt3}.$$

点 $H$ 在直线上，且 $(-1)(1)+(1)(0)+(1)(1)=0$。到直线起点的距离是 $\sqrt{21}$，更长。

</details>

## 快速参考 {#quick-reference}

| 任务 | 方法 | 检查 |
|---|---|---|
| 连接 $A$ 到 $B$ | $\overrightarrow{AB}=\mathbf b-\mathbf a$ | 终点减起点 |
| 求长度或单位向量 | $\lvert\mathbf v\rvert$ 或 $\frac{\mathbf v}{\lvert\mathbf v\rvert}$ | 单位方向要求 $\mathbf v\ne\mathbf0$ |
| 求中点 | $\frac12(\mathbf a+\mathbf b)$ | 对各坐标分别取平均 |
| 写直线方程 | $\mathbf r=\mathbf a+\lambda\mathbf b$ | 使用直线上一点和非零方向向量 |
| 判断点是否在直线上 | 代入各分量方程 | 同一个参数值须满足三个方程 |
| 判断两直线的位置关系 | 比较方向，再联立各分量方程 | 检查第三个坐标，并区分同一直线 |
| 求向量夹角 | $\frac{\mathbf a\cdot\mathbf b}{\lvert\mathbf a\rvert\lvert\mathbf b\rvert}$ 给出夹角的余弦 | 保留符号；两个向量均不能为零 |
| 求两直线的锐角 | 对数量积取绝对值 | 使用方向向量，不要用位置向量 |
| 求垂直距离 | 在直线上求 $H$，使 $\overrightarrow{PH}\cdot\mathbf b=0$ | 检查直线方程，再求 $\lvert\overrightarrow{PH}\rvert$ |

**如果答案看起来不对：**检查向量方向、分量符号、参数值和角度模式。最终计算前保留精确的模。

**你应当能够：**表示直线，判断两直线的位置关系，求夹角，并通过确定垂足求垂直距离。

**学习路径：**[上一节：数值方法](/zh/alevel/a2-mathematics/numerical-methods/) · [下一节：数学证明](/zh/alevel/a2-mathematics/mathematical-proof/) · [返回纯数学主题索引](/zh/alevel/a2-mathematics/)。
