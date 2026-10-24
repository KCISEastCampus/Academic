---
title: 向量
layout: subjects
mathjax: true
grade: a2
subject: a2-mathematics
lang: zh-CN
translation_of: /alevel/a2-mathematics/vectors/
permalink: /zh/alevel/a2-mathematics/vectors/
toc_headings: h2, h3
reading_layout: true
study_page: true
---

[纯数学](/zh/alevel/a2-mathematics/) · P2.10 向量

描述一次移动，既要知道走多远，也要知道朝哪个方向。向量用箭头和坐标的变化记录这次移动。接着用它描述点与直线，求两条直线在哪里相遇、夹角多大，以及点到直线的最短距离。

- **学习：**从[向量与位置向量](#vectors-and-position-vectors)开始，然后学习[直线](#straight-lines)、[两条直线的位置关系](#pairs-of-lines)和[数量积](#scalar-product)。
- **作业帮助：**仔细选择所需向量。位置向量（position vector）、方向向量（direction vector）以及连接两点的向量作用不同。
- **复习：**先完成[练习](#practice)，再打开提示与解答。

教材：第 9 章，第 9.1–9.9 节（第 124–147 页，印刷页码）。本课介绍本章中关于点与直线的方法。本章不涉及平面方程。
{: .lesson-meta}

<div class="lesson-notes" markdown="1">

**起点：**能用终点减起点求坐标变化、用勾股求长度、解两个线性方程，并用余弦求角；缺失时回补 [AS 坐标几何](/zh/alevel/as-mathematics/coordinate-geometry/#l04)和[代数](/zh/alevel/as-mathematics/algebra/#l02)。本页先从平面箭头建立向量，再加入第三分量。逆余弦求角度时用 degree mode。目标是自己选向量、联立全部必要分量，并解释几何约束。复习从[练习](#practice)进入；错误走[恢复](#repair)，后续做[稍后回顾](#review-later)。

</div>

所有例题与练习题均为自编题，并非官方真题。建议练习时间仅供参考；题目没有官方分值。

## 向量与位置向量 {#vectors-and-position-vectors}

向右走五个单位和向上走五个单位，是不同的移动。向量（vector）同时记录走多远、朝哪里；箭头的长度叫向量的大小或模（magnitude）。只记录大小、不带方向的量叫标量（scalar）。要表示点 $A$ 在哪里，可以从原点画箭头 $\overrightarrow{OA}$，其中 $O$ 为原点；这个箭头叫位置向量（position vector）。

### 先把箭头画出来 {#plane-vectors}

在平面上，先记录横向改变多少，再记录竖向改变多少，这就是二维向量的 $x,y$ 两个分量（components）。负数表示沿该坐标轴的负方向移动。先走一个箭头、再走另一个箭头，就是把对应的变化相加；箭头长度用勾股定理求。在同一平面坐标系中

$$\begin{pmatrix}a_1\\a_2\end{pmatrix}+\begin{pmatrix}b_1\\b_2\end{pmatrix}=\begin{pmatrix}a_1+b_1\\a_2+b_2\end{pmatrix},\qquad \lvert\mathbf a\rvert=\sqrt{a_1^2+a_2^2}.$$

向量乘一个数，表示拉长、缩短或反转箭头，每个分量都要乘。例如 $2(\mathbf a-\mathbf b)=2\mathbf a-2\mathbf b$，先尊重括号再分配乘数。相加时要使用相同坐标轴、相同数量的坐标，对应相加。把平面图放进三维的 $xy$ 平面时，明确补上 $z=0$；不能随意丢掉第三个分量。乘零得到没有方向的零向量。两个非零向量平行，就是其中一个等于另一个乘某个非零数。

<section class="worked-example" markdown="1">

#### 平面箭头示范 {#plane-worked}

**Question:** For $A=(1,1)$ and $B=(4,5)$, draw $\overrightarrow{OA}$, $\overrightarrow{AB}$ and $\overrightarrow{OB}$; find $AB$.

在纸上标三点，箭头首尾相接走 $O\to A\to B$，到达的位置与直接走到终点相同。要找从 $A$ 到 $B$ 的移动，每个坐标都用终点减起点。横向增加 $3$、竖向增加 $4$，所以

$$\overrightarrow{AB}=\begin{pmatrix}3\\4\end{pmatrix},\qquad \overrightarrow{OA}+\overrightarrow{AB}=\begin{pmatrix}1\\1\end{pmatrix}+\begin{pmatrix}3\\4\end{pmatrix}=\begin{pmatrix}4\\5\end{pmatrix}=\overrightarrow{OB}.$$

由勾股 $AB=5$。把 $\overrightarrow{AB}$ 平移到原点不改变向量；它不会因此变成位置向量 $\overrightarrow{OB}$。在图上反转 $AB$ 箭头应得到 $(-3,-4)$。

</section>

### 加入第三个分量 {#three-dimensional-vectors}

在空间中，第三个坐标记录沿第三条轴移动多少。箭头 $\mathbf i$、$\mathbf j$ 和 $\mathbf k$ 的长度都为一，分别沿 $x$、$y$ 和 $z$ 轴的正方向，叫坐标轴单位向量（Cartesian unit vectors）。例如，

$$\mathbf a=2\mathbf i-\mathbf j+3\mathbf k=\begin{pmatrix}2\\-1\\3\end{pmatrix}.$$

向量相加、相减或乘以标量时，分别对各**分量**（component）进行运算。乘以正标量时方向不变；乘以负标量时方向相反。向量的模（magnitude）为

$$\lvert\mathbf a\rvert=\sqrt{a_1^2+a_2^2+a_3^2}.$$

有时只需要方向，不需要原来的长度。若 $\mathbf a\ne\mathbf0$，把每个分量都除以原长度，得到 $\frac{\mathbf a}{\lvert\mathbf a\rvert}$。它沿 $\mathbf a$ 的方向，长度为 $1$，叫单位向量（unit vector）。

求两点之间的移动，用终点位置减起点位置；求一半处的位置，就把对应坐标取平均。若 $A$ 和 $B$ 的位置向量分别为 $\mathbf a$ 和 $\mathbf b$，则

$$\overrightarrow{AB}=\mathbf b-\mathbf a,\qquad \overrightarrow{OM}=\frac{\mathbf a+\mathbf b}{2},$$

其中 $M$ 是线段 $AB$ 的中点。由**三角形法则**（triangle law）可得 $\overrightarrow{AB}+\overrightarrow{BC}=\overrightarrow{AC}$。



<section class="worked-example" markdown="1">

#### 例题 1 — 连接两点并求中点 {#example-1--join-two-points-and-find-their-midpoint}

**Question:** $A=(1,-2,3)$ and $B=(5,0,4)$. Find $\overrightarrow{AB}$, the length $AB$, a unit vector in its direction and the midpoint $M$.

题目要的是从第一个点走到第二个点的移动，因此用终点坐标减起点坐标。三个坐标分别计算：

$$\overrightarrow{AB}=\begin{pmatrix}5-1\\0-(-2)\\4-3\end{pmatrix}=\begin{pmatrix}4\\2\\1\end{pmatrix}.$$

$$AB=\sqrt{4^2+2^2+1^2}=\boxed{\sqrt{21}}.$$

长度来自三维的勾股定理。要保持这个方向、把长度改为一，就把三个分量都除以刚才的长度。所求单位向量为

$$\boxed{\frac1{\sqrt{21}}\begin{pmatrix}4\\2\\1\end{pmatrix}}.$$

取各坐标的平均值可得中点：

$$\boxed{M=\left(3,-1,\frac72\right)}.$$

**检查：**单位向量的模的平方为 $\frac{16+4+1}{21}=1$，且 $\overrightarrow{AM}=\frac12\overrightarrow{AB}$。

**常见错误：**用 $\mathbf a-\mathbf b$ 表示 $\overrightarrow{AB}$。这样得到的是 $\overrightarrow{BA}$，方向相反。

</section>

## 直线 {#straight-lines}

要到达直线上的点，可以先到一个固定点，再沿直线向前或向后走。起始位置用位置向量 $\mathbf a$ 表示，沿线的一次移动用非零的方向向量（direction vector）$\mathbf b$ 表示：

$$\boxed{\mathbf r=\mathbf a+\lambda\mathbf b,\quad\lambda\in\mathbb R}.$$

$\mathbf r$ 记录最后到达的位置。式中乘在方向向量前面的数，可以取零、负数、分数或正数；让它取遍所有实数，就走遍整条直线。这个可变的乘数叫参数（parameter）。若直线经过不同的两点 $A$ 和 $B$，可取 $\mathbf b=\overrightarrow{AB}$。

同一条直线可以有不同方程。改从直线上的另一个点出发，或把方向箭头拉长、缩短、反转，只要不是零向量，改变乘数后仍能到达原来那些点。

<section class="worked-example" markdown="1">

### 例题 2 — 写出直线方程并检查一个点 {#example-2--find-an-equation-and-check-a-point}

**Question:** Find a vector equation of the line through $A=(1,2,-1)$ and $B=(3,1,3)$. Check whether $P=(5,0,7)$ lies on it, and find where it meets the $xy$-plane.

先用坐标相减找到沿直线的一次移动：$\overrightarrow{AB}=(2,-1,4)$。选择第一个已知点作为起始位置，方程可以写成

$$\boxed{\mathbf r=\begin{pmatrix}1\\2\\-1\end{pmatrix}+\lambda\begin{pmatrix}2\\-1\\4\end{pmatrix}}.$$

逐个坐标读这个向量方程：$x=1+2\lambda$、$y=2-\lambda$、$z=-1+4\lambda$。一个乘数控制整次移动，所以三个坐标必须使用同一个值。

对于点 $P$，从 $x$ 方程得到 $\lambda=2$。将同一数值代入另外两个方程，得到 $y=0$ 且 $z=7$，所以 $P$ 在该直线上。

在 $xy$ 平面上，$z=0$。因此 $-1+4\lambda=0$，得到 $\lambda=\frac14$，交点为

$$\boxed{\left(\frac32,\frac74,0\right)}.$$

**检查：**$\lambda=0$ 时直线上是点 $A$；$\lambda=1$ 时直线上是点 $B$。

**常见错误：**对每个坐标分别使用不同的参数值。直线上的点必须用同一个参数值满足三个方程。

</section>

<section class="lesson-check" markdown="1">

### 一个平面构型 {#check-plane}

$A=(-1,2)$ and $B=(3,0)$. Draw $\overrightarrow{OA}$, $\overrightarrow{OB}$ and $\overrightarrow{AB}$. Find $\overrightarrow{AB}$, its magnitude and a unit vector in its direction. Find the intersection of the line through $A,B$ with $\mathbf r=(1,-3)+s(0,1)$.

<details markdown="1">
<summary>提示</summary>

先写经过 A、B 的直线，再联立两个分量；不同直线用不同参数。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$\overrightarrow{AB}=(4,-2),\qquad AB=2\sqrt5,\qquad\text{unit vector}=\frac1{\sqrt5}(2,-1).$$

$$\mathbf r=(-1,2)+t(4,-2),\quad -1+4t=1,\quad2-2t=-3+s.$$

得 $t=\frac12$、$s=4$，交点 $(1,1)$。把两个参数分别代回对应直线；箭头应满足 $\overrightarrow{OA}+\overrightarrow{AB}=\overrightarrow{OB}$。

</details>

</section>

## 两条直线的位置关系 {#pairs-of-lines}

对于 $\mathbf r=\mathbf a+\lambda\mathbf b$ 和 $\mathbf r=\mathbf c+\mu\mathbf d$，先比较 $\mathbf b$ 和 $\mathbf d$。

| 方向向量 | 接下来检查 | 位置关系 |
|---|---|---|
| 互为标量倍数 | 一条直线上的点是否也在另一条直线上？ | 若是，则为同一直线；若否，则为不同的平行直线 |
| 不互为标量倍数 | 是否存在一对 $(\lambda,\mu)$，能同时满足三个分量方程？ | 若是，则相交；若否，则为异面直线 |
{: .wide-table}

上表“不相交又不平行”的情况只可能出现在三维空间。同一平面内，两条不平行的直线一定相交，解两个坐标方程即可。在空间中，平面图上看似交叉的直线可能一上一下错开，因此第三个坐标也必须相同。

**异面直线**（skew lines）是三维空间中既不平行也不相交的直线。两条直线要分别使用参数；它们相交时参数值不必相同。

<section class="worked-example" markdown="1">

### 例题 3 — 检查第三个坐标 {#example-3--check-the-third-coordinate}

**Question:** Find the intersection of

$$L:\quad\mathbf r=\begin{pmatrix}1\\0\\2\end{pmatrix}+\lambda\begin{pmatrix}1\\2\\-1\end{pmatrix},$$

$$M:\quad\mathbf r=\begin{pmatrix}3\\3\\-1\end{pmatrix}+\mu\begin{pmatrix}0\\1\\1\end{pmatrix}.$$

两个方向向量不互为标量倍数。令 $x$ 坐标相等，得到 $1+\lambda=3$，所以 $\lambda=2$。再令 $y$ 坐标相等，得到 $2\lambda=3+\mu$，所以 $\mu=1$。

现在检查 $z$ 坐标：$2-\lambda=0$ 且 $-1+\mu=0$，两者相等。交点为

$$\boxed{(3,4,0)}.$$

**检查：**将 $\lambda=2$ 代入 $L$，将 $\mu=1$ 代入 $M$，会得到相同的三个坐标。

</section>

<section class="worked-example" markdown="1">

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

</section>

## 数量积 {#scalar-product}

求夹角时，需要一种能比较两个方向的计算。把两个向量的对应分量相乘，再把乘积加起来，得到的数叫数量积（scalar product），也叫点积（dot product）：

$$\mathbf a\cdot\mathbf b=a_1b_1+a_2b_2+a_3b_3.$$

二维时只加两个对应分量的乘积：$\mathbf a\cdot\mathbf b=a_1b_1+a_2b_2$。先相减得到所需方向，再算数量积；结果是标量，不是新方向向量。

对于非零向量，数量积也等于 $\lvert\mathbf a\rvert\lvert\mathbf b\rvert\cos\theta$，其中 $0\le\theta\le180^\circ$ 是两向量方向之间的夹角。因此

$$\cos\theta=\frac{\mathbf a\cdot\mathbf b}{\lvert\mathbf a\rvert\lvert\mathbf b\rvert}.$$

对于非零向量，夹角为直角时余弦为零，因此数量积为零；反过来，数量积为零也说明夹角是直角。这就给出了判断垂直的方法。零向量没有方向，不能代入夹角公式。

**求三角形的角：**从该顶点出发使用两个向量。例如求角 $ABC$，应使用 $\overrightarrow{BA}$ 和 $\overrightarrow{BC}$。若改用 $\overrightarrow{AB}$，其中一个方向就反过来了，所得角与原来的角加起来是一个平角，叫补角（supplementary angle）。

<section class="worked-example" markdown="1">

### 例题 5 — 两个向量的夹角 {#example-5--angle-between-two-vectors}

**Question:** Find the angle between $\mathbf a=(1,2,2)$ and $\mathbf b=(2,-1,2)$, to $1$ decimal place.

题目已经给出方向，不需要先用点坐标相减。先把对应分量相乘再相加，求出数量积；再用勾股定理分别求长度：

$$\mathbf a\cdot\mathbf b=2-2+4=4,\qquad \lvert\mathbf a\rvert=\lvert\mathbf b\rvert=3.$$

数量积除以两个长度的乘积，得到余弦值；再用反余弦求角度：

$$\cos\theta=\frac49,\qquad \boxed{\theta\approx63.6^\circ}.$$

**检查：**数量积为正，所以向量夹角是锐角。使用角度模式求反余弦；计算前不要把 $\frac49$ 四舍五入。

</section>

<section class="worked-example" markdown="1">

### 例题 6 — 两条直线的锐角 {#example-6--acute-angle-between-lines}

**Question:** Two lines have direction vectors $\mathbf b=(1,1,1)$ and $\mathbf d=(1,-1,-1)$. Find the acute angle between the lines.

它们的数量积为 $-1$，两个模都为 $\sqrt3$。按题目给定的向量方向计算，夹角的余弦为 $-\frac13$，所以夹角是钝角。

直线向两头延伸。把一个方向向量反过来，余弦就变号，选出的就是另一个角。若要求两条直线之间的锐角 $\phi$，就使用数量积的正的大小，用绝对值符号表示：

$$\cos\phi=\frac{\lvert\mathbf b\cdot\mathbf d\rvert}{\lvert\mathbf b\rvert\lvert\mathbf d\rvert}=\frac13.$$

$$\boxed{\phi\approx70.5^\circ}.$$

**检查：**反转任意一个方向向量，得到的两直线锐角不变。若题目要求两个有向向量之间的夹角，就不要自动取绝对值。

</section>

<section class="worked-example" markdown="1">

### 从角的顶点出发 {#vertex-angle}

**Question:** $A=(0,0)$, $B=(2,0)$ and $C=(3,1)$. Find angle $ABC$.

画三角形，在 $B$ 标角。从顶点出发的两条射线是 $BA$ 和 $BC$，故

$$\overrightarrow{BA}=(-2,0),\qquad\overrightarrow{BC}=(1,1),\qquad\cos\angle ABC=\frac{-2}{2\sqrt2}=-\frac1{\sqrt2}.$$

所以 $\angle ABC=135^\circ$。草图应为钝角。若用了 $AB$，会得到 $45^\circ$；这并非舍入误差，而是反转一个方向后的补角。

</section>

## 垂足与距离 {#foot-of-the-perpendicular-and-distance}

想象把点 $P$ 连到直线上一个可以移动的点。我们要找的位置是 $H$，使连线 $PH$ 与直线成直角，这个位置叫垂足（foot of the perpendicular）。线段 $PH$ 的长度就是垂直距离。两个条件要同时成立：终点在直线上，连线与直线方向垂直。

1. 写出直线上一般点 $H$：$\mathbf h=\mathbf a+\lambda\mathbf b$。
2. 写出 $\overrightarrow{PH}=\mathbf h-\mathbf p$。
3. 使用 $\overrightarrow{PH}\cdot\mathbf b=0$ 求 $\lambda$。
4. 求出 $H$ 的坐标，然后计算 $\lvert\overrightarrow{PH}\rvert$。

为什么这是最短距离？对直线上任意另一点 $X$，$HX$ 沿直线，且 $PH\perp HX$。由勾股 $PX^2=PH^2+HX^2\ge PH^2$。三角形面积应用中，若底边为 $AB$，对应高度就是第三顶点到直线 $AB$ 的距离，因此面积为 $\frac12 AB\times PH$；垂足即使在底边延长线上也成立。

![示意图：A 和 H 位于一条直线上。线段 PH 与直线垂直，表示垂直距离。](/assets/img/vectors-perpendicular.svg)

<section class="worked-example" markdown="1">

### 例题 7 — 先求垂足，再求距离 {#example-7--find-the-foot-then-the-distance}

**Question:** Find the foot of the perpendicular from $P=(5,3,5)$ to the line

$$\mathbf r=\begin{pmatrix}1\\0\\1\end{pmatrix}+\lambda\begin{pmatrix}1\\2\\2\end{pmatrix},$$

and hence find the perpendicular distance.

先让候选点沿已知直线移动：$H=(1+\lambda,2\lambda,1+2\lambda)$，这样保证它在直线上。再减去已知点的坐标，求出连接两点的向量：

$$\overrightarrow{PH}=\begin{pmatrix}\lambda-4\\2\lambda-3\\2\lambda-4\end{pmatrix}.$$

接着选出使连线垂直的乘数：把连接向量与直线的方向向量作数量积，并令结果为零：

$$\begin{aligned}0&=(\lambda-4)+2(2\lambda-3)\\&\quad+2(2\lambda-4)=9\lambda-18.\end{aligned}$$

因此 $\lambda=2$，得到 $\boxed{H=(3,4,5)}$。

$$\overrightarrow{PH}=\begin{pmatrix}-2\\1\\0\end{pmatrix},\qquad \boxed{PH=\sqrt5}.$$

**检查：**$H$ 在直线上，且 $(-2)(1)+(1)(2)+(0)(2)=0$。这两个条件都要检查：只有一个向量垂直于直线方向，还不能确定它就是垂足。

**常见错误：**计算 $P$ 到直线起点的距离。通常这不是最短距离。

</section>

## 练习 {#practice}

**独立练习 · 30–40 分钟**

写出所用的向量，不要只写数值结果。求交点时检查三个坐标。求距离时，同时检查垂足在直线上，以及连接向量与直线垂直。

<section class="lesson-check" markdown="1">

### Q1 {#q1--position-direction-and-midpoint}

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

</section>

<section class="lesson-check" markdown="1">

### Q2 {#q2--a-line-through-two-points}

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

</section>

<section class="lesson-check" markdown="1">

### Q3 {#q3--intersecting-or-skew}

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

</section>

<section class="lesson-check" markdown="1">

### Q4 {#q4--parallel-or-the-same-line}

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

</section>

<section class="lesson-check" markdown="1">

### Q5 {#q5--perpendicularity-and-angles}

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

</section>

<section class="lesson-check" markdown="1">

### Q6 {#q6--a-perpendicular-distance}

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

</section>

<section class="lesson-check" markdown="1">

### Q7 {#q7--find-the-foot-before-measuring}

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

</section>

<section class="lesson-check" markdown="1">

### 一个三角形 {#mixed-geometry}

$A=(0,0)$, $B=(4,2)$ and $C=(0,5)$. Draw triangle $ABC$. Find angle $BAC$ to $1$ decimal place, the distance from $C$ to the line $AB$, and the area of the triangle. Show your geometric choices.

<details markdown="1">
<summary>提示</summary>

从角的顶点选向量；再决定哪条线作为底边，怎样找到对应高度。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$\cos\angle BAC=\frac{(4,2)\cdot(0,5)}{\sqrt{20}\times5}=\frac1{\sqrt5},\qquad\angle BAC\approx63.4^\circ.$$

$$H=(4t,2t),\quad\overrightarrow{CH}=(4t,2t-5),\quad\overrightarrow{CH}\cdot(4,2)=20t-10=0.$$

$$t=\frac12,\quad H=(2,1),\quad CH=\sqrt{2^2+(-4)^2}=2\sqrt5.$$

$$\text{Area}=\frac12(2\sqrt5)(2\sqrt5)=10\text{ square units}.$$

画出 $CH$ 并标直角；独立检查：以 $AC=5$ 为底，$B$ 到 $y$ 轴的距离为 $4$，面积也为 $10$。

</details>

</section>

## 根据错误恢复 {#repair}

关闭原答案，按错误回看后再做对应新题。

| 错误 | 恢复动作 | 重试 |
| --- | --- | --- |
| AB 写反或丢掉分量 | 标箭头起终点，回看[平面向量](#plane-vectors) | [方向](#repair-direction) |
| 只核两个坐标/共用参数 | 每条线用自己的乘数，并检查所有坐标，回看[两直线](#pairs-of-lines) | [直线](#repair-lines) |
| 顶点角变成补角 | 从同一顶点重画两箭头，回看[顶点角](#vertex-angle) | [角](#repair-angle) |
| 量到任意起点 | 同时检查终点在线上、连线与直线垂直，回看[垂足](#foot-of-the-perpendicular-and-distance) | [距离](#repair-foot) |

<section class="lesson-check" markdown="1">

### 方向 {#repair-direction}

$P=(2,-1)$ and $Q=(-1,3)$. Draw $\overrightarrow{PQ}$ and $-2\overrightarrow{PQ}$. Find a unit vector in the direction $PQ$ and the magnitude of $-2\overrightarrow{PQ}$.

<details markdown="1">
<summary>提示</summary>

乘负数会反转箭头；长度要乘这个数的正的大小。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$\overrightarrow{PQ}=(-3,4),\quad\text{unit vector}=(-3/5,4/5),\quad-2\overrightarrow{PQ}=(6,-8),\quad\lvert-2\overrightarrow{PQ}\rvert=10.$$

</details>

</section>

<section class="lesson-check" markdown="1">

### 两条直线 {#repair-lines}

Determine the relationship between $L:\mathbf r=(0,1,2)+t(1,2,1)$ and $M:\mathbf r=(2,0,2)+s(0,1,1)$. Justify your answer.

<details markdown="1">
<summary>提示</summary>

先比较方向，再核所有坐标。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$t=2,\qquad1+2t=s\Rightarrow s=5.$$

此时 $L$ 的 $z=4$，$M$ 的 $z=7$，不相交；方向不成倍数，故异面。两个坐标给候选参数，第三个否决它。

</details>

</section>

<section class="lesson-check" markdown="1">

### 一个角 {#repair-angle}

$A=(0,0)$, $B=(1,0)$, $C=(2,1)$. Find angle $ABC$ and the acute angle between the lines $AB$ and $BC$.

<details markdown="1">
<summary>提示</summary>

一个角有指定顶点，直线的锐角可反转方向。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$\overrightarrow{BA}=(-1,0),\quad\overrightarrow{BC}=(1,1),\quad\angle ABC=135^\circ,\quad\text{acute line angle}=45^\circ.$$

</details>

</section>

<section class="lesson-check" markdown="1">

### 一个距离 {#repair-foot}

Find the distance from $P=(1,3)$ to $\mathbf r=t(1,1)$. Give and check the nearest point.

<details markdown="1">
<summary>提示</summary>

先让终点沿直线移动，再找连接向量与直线方向的数量积为零的位置。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$H=(t,t),\quad\overrightarrow{PH}=(t-1,t-3),\quad2t-4=0.$$

$$H=(2,2),\quad PH=\sqrt2,\quad(1,-1)\cdot(1,1)=0.$$

H 满足直线方程，连接向量垂直；两项一起成立。

</details>

</section>

## 稍后回顾 {#review-later}

学完证明后，不看本页方法做下题，再与首次作答比较。

<section class="lesson-check" markdown="1">

### 一个移动点 {#review-point}

$A=(1,0,2)$ and $B=(3,2,0)$. Show that $P=(1+4u,4u,2-4u)$ lies on the line $AB$ for every real $u$. Find the value of $u$ for which $OP$ is perpendicular to $AB$.

<details markdown="1">
<summary>提示</summary>

说明直线中的乘数怎样随 u 变化，所有坐标都要用同一个关系；然后另列垂直条件。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$\overrightarrow{AB}=(2,2,-2),\qquad P=A+(2u)\overrightarrow{AB}.$$

$$\overrightarrow{OP}\cdot\overrightarrow{AB}=2(1+4u)+8u-2(2-4u)=24u-2=0,\quad u=\frac1{12}.$$

参数 $t=2u$ 对任意实数 u 都有效；不能只检验几个 u。

</details>

</section>

## 快速参考 {#quick-reference}

| 任务 | 方法 | 检查 |
|---|---|---|
| 连接 $A$ 到 $B$ | $\overrightarrow{AB}=\mathbf b-\mathbf a$ | 终点减起点 |
| 求长度或单位向量 | $\lvert\mathbf v\rvert$ 或 $\frac{\mathbf v}{\lvert\mathbf v\rvert}$ | 单位方向要求 $\mathbf v\ne\mathbf0$ |
| 求中点 | $\frac12(\mathbf a+\mathbf b)$ | 对各坐标分别取平均 |
| 写直线方程 | $\mathbf r=\mathbf a+\lambda\mathbf b$ | 使用直线上一点和非零方向向量 |
| 判断点是否在直线上 | 代入各分量方程 | 同一个参数值须满足所有分量方程 |
| 判断两直线的位置关系 | 比较方向，再联立各分量方程 | 检查所有分量，并区分同一直线 |
| 求向量夹角 | $\frac{\mathbf a\cdot\mathbf b}{\lvert\mathbf a\rvert\lvert\mathbf b\rvert}$ 给出夹角的余弦 | 保留符号；两个向量均不能为零 |
| 求两直线的锐角 | 对数量积取绝对值 | 使用方向向量，不要用位置向量 |
| 求垂直距离 | 在直线上求 $H$，使 $\overrightarrow{PH}\cdot\mathbf b=0$ | 检查直线方程，再求 $\lvert\overrightarrow{PH}\rvert$ |
{: .wide-table}

**如果答案看起来不对：**检查向量方向、分量符号、参数值和角度模式。最终计算前保留精确的模。

**你应当能够：**表示直线，判断两直线的位置关系，求夹角，并通过确定垂足求垂直距离。

**学习路径：**[上一节：数值方法](/zh/alevel/a2-mathematics/numerical-methods/) · [下一节：数学证明](/zh/alevel/a2-mathematics/mathematical-proof/) · [返回纯数学主题索引](/zh/alevel/a2-mathematics/)。

**下一步：**带着[移动点](#review-point)的全范围论证进入[数学证明](/zh/alevel/a2-mathematics/mathematical-proof/)，完成后回来复查。
{: #next-step}

<details markdown="1">
<summary>来源与核验范围</summary>

范围为 9660 MA03 P2.10。实读 January 2025 MA03 Q4（QP pp8–9、MS pp8–9），核连点方向、模、数量积求角与参数一致性；January 2024 Q12（QP pp26–27、MS pp21–22）核一般参数、垂足、底高面积与角。这里的所有练习仍是自拟题。

[9660 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf) · [January 2024 QP](https://aqamat.alevelclouds.com/24_01_QP_P2.pdf) / [MS](https://aqamat.alevelclouds.com/24_01_MS_P2.pdf) · [January 2025 QP](https://aqamat.alevelclouds.com/25_01_QP_P2.pdf) / [MS](https://aqamat.alevelclouds.com/25_01_MS_P2.pdf)

</details>
