---
title: 极坐标
layout: subjects
mathjax: true
grade: a2
subject: a2-further-mathematics
lang: zh-CN
translation_of: /alevel/a2-further-mathematics/polar-coordinates/
permalink: /zh/alevel/a2-further-mathematics/polar-coordinates/
toc_headings: h2, h3, h4
study_page: true
---

[高等纯数学](/zh/alevel/a2-further-mathematics/) · FP2.3 极坐标（polar coordinates）

用距离和角度描述一个点的位置。本课学习转换方程、绘制极坐标曲线的草图，并选用正确的角度上下限计算面积。

- **学习：**从[方法](#method)开始，再逐一完成例题。
- **作业帮助：**按需要查看[坐标](#coordinates)、[方程](#equations)、[绘图](#sketching)、[交点](#intersections)或[面积](#areas)。
- **复习：**先独立完成[练习](#practice)，再展开解答，最后查看[快速参考](#quick-reference)。

教材：*International A Level Further Mathematics*，第 21 章，第 21.1–21.3 节，印刷页码 256–266；复习与练习见第 267–269 页。

**开始前：**复习[模与辐角](/zh/alevel/a2-further-mathematics/de-moivres-theorem/#powers-and-proof)、[三角函数](/zh/alevel/a2-mathematics/trigonometric-functions-and-formulae/)和[积分](/zh/alevel/a2-mathematics/integration/)。你应掌握扇形面积、二倍角恒等式，并能根据点所在的象限确定角度。全课使用**弧度（radians）**。

## 方法 {#method}

**学习目标：**在极坐标与直角坐标（Cartesian coordinates）之间转换，用正半径绘制曲线草图，求交点并计算指定区域的面积。

- **转换一个点的坐标：**使用 $x=r\cos\theta$ 和 $y=r\sin\theta$；反向转换时，先求 $r=\sqrt{x^2+y^2}$，再根据象限确定 $\theta$。
- **转换方程：**将 $r^2$ 换成 $x^2+y^2$，将 $r\cos\theta$ 换成 $x$，将 $r\sin\theta$ 换成 $y$。先将方程乘以 $r$ 往往有助于转换。
- **绘制草图：**检查角度的定义域（domain）、对称性、$r$ 的零点，以及几个容易计算的点。只画出 $r>0$ 的部分。
- **计算面积：**先画出所求区域，确定边界对应的角度，再使用 $\frac12\int r^2\,\mathrm d\theta$。若作为边界的曲线发生变化，应分段积分。

**课程约定：**极点以外的点采用 $r>0$。$r=0$ 表示极点，可作为边界点或曲线经过的点。不要把 $r$ 的负值画成额外的环瓣（loop）。

## 坐标 {#coordinates}

**极点（pole）**是固定点 $O$。**极轴（initial line）**是量取角度的起始射线，通常取 $x$ 轴的正半轴。

一个点的极坐标记作 $(r,\theta)$：

- $r$ 是该点到极点的距离。
- $\theta$ 是从极轴沿逆时针方向量取的角度；负角沿顺时针方向量取。

两种坐标之间的关系为

$$\boxed{\begin{aligned}
x&=r\cos\theta,\qquad y=r\sin\theta,\\
r^2&=x^2+y^2.
\end{aligned}}$$

对于原点以外的点，$r=\sqrt{x^2+y^2}>0$。若 $x\ne0$，则 $\tan\theta=\frac yx$，但仅用反正切（inverse tangent）求出的角度可能落在错误的象限。对于 $y$ 轴上的点，直接取 $\theta=\frac\pi2$ 或 $-\frac\pi2$。

相差 $2\pi$ 整数倍的角度表示同一个点。题目要求主值（principal value）时，使用 $-\pi<\theta\le\pi$。在极点处，角度不唯一。

### 例 1：双向转换点的坐标 {#example-1--convert-points-in-both-directions}

**Question:** convert $P=(4,\frac\pi6)$ from polar to Cartesian coordinates. Convert $Q=(-1,-\sqrt3)$ from Cartesian to polar coordinates, using a principal angle.

对于 $P$，

$$\begin{aligned}
x&=4\cos\frac\pi6=2\sqrt3,\\
y&=4\sin\frac\pi6=2.
\end{aligned}$$

因此，$P$ 的直角坐标为 $\boxed{(2\sqrt3,2)}$。

对于 $Q$，

$$r=\sqrt{(-1)^2+(-\sqrt3)^2}=2.$$

参考角（reference angle）为 $\frac\pi3$，但两个坐标都为负。该点位于第三象限，因此角度的主值为 $-\frac{2\pi}{3}$：

$$\boxed{Q=\left(2,-\frac{2\pi}{3}\right)
\quad\text{in polar coordinates}.}$$

**检验：**$2\cos(-\frac{2\pi}{3})=-1$，且 $2\sin(-\frac{2\pi}{3})=-\sqrt3$。若取 $\frac\pi3$，则两个坐标都会为正。

## 方程 {#equations}

转换方程时，应保留 $\theta$ 的允许范围。直角坐标方程描述的曲线可能比限制了角度定义域的极坐标方程更完整。

### 例 2：经过极点的圆 {#example-2--a-circle-through-the-pole}

**Question:** find a polar equation for $x^2+y^2=4x$. State the centre and radius of the circle.

代入坐标关系式：

$$r^2=4r\cos\theta.$$

对于 $r>0$，将方程除以 $r$：

$$\boxed{r=4\cos\theta.}$$

正半径对应的部分为 $-\frac\pi2<\theta<\frac\pi2$。在两个端点处，$r=0$ 表示极点。

写成直角坐标形式，

$$x^2-4x+y^2=0
\quad\Rightarrow\quad
(x-2)^2+y^2=4.$$

该圆的圆心为 $(2,0)$，半径为 $2$。

**检验：**极轴上距离极点最远的点满足 $r=4$。该圆在极点处与 $y$ 轴相切。

**常见错误：**将方程除以 $r$ 后，忘记单独检查极点。

### 例 3：直线 {#example-3--a-straight-line}

**Question:** find the Cartesian equation of

$$r=2\sec\left(\frac\pi3-\theta\right).$$

将方程乘以 $\cos(\frac\pi3-\theta)$，再展开：

$$\begin{aligned}
2
&=r\cos\left(\frac\pi3-\theta\right)\\
&=r\cos\frac\pi3\cos\theta
+r\sin\frac\pi3\sin\theta\\
&=\frac12x+\frac{\sqrt3}{2}y.
\end{aligned}$$

因此

$$\boxed{x+\sqrt3\,y=4.}$$

要使 $r$ 为正，分母必须为正。能够覆盖整条直线的一个角度区间为 $-\frac\pi6<\theta<\frac{5\pi}{6}$。在这个区间的两个端点处，正割函数（secant）无定义，并非等于零。

**检验：**直线与坐标轴的交点为 $(4,0)$ 和 $(0,\frac4{\sqrt3})$。直线上的每个点都满足 $\frac12x+\frac{\sqrt3}{2}y=2>0$，符合要求。

## 绘制草图 {#sketching}

先查看题目指定的角度定义域。列表前，先确定 $r>0$ 的范围。

- $r=k$，其中 $k>0$，表示以极点为圆心的圆。
- $r=a\cos\theta$，其中 $a>0$，表示圆心为 $(\frac a2,0)$、半径为 $\frac a2$ 的圆。
- $r=a\sin\theta$，其中 $a>0$，表示圆心为 $(0,\frac a2)$、半径为 $\frac a2$ 的圆。
- 若将 $\theta$ 替换为 $-\theta$ 后，方程与定义域均不变，则曲线关于极轴对称。
- 若将 $\theta$ 替换为 $\pi-\theta$ 后，方程与定义域均不变，则曲线关于直线 $\theta=\frac\pi2$ 对称。

检查 $r$ 的零点和最大值。选取简单角度描点，再用平滑曲线连接。**环瓣**从极点出发，最终回到极点。若某个区间上 $r<0$ 或函数无定义，不要跨过这个区间将两部分连接起来。

### 例 4：三个环瓣 {#example-4--three-loops}

**Question:** sketch $r=2\cos3\theta$ for $-\pi\le\theta\le\pi$, using positive radii.

零点满足 $\cos3\theta=0$。对于极轴两侧的这个环瓣，

$$-\frac\pi6<\theta<\frac\pi6,$$

且其两个端点满足 $r=0$。可选取以下点：

| 角度 $\theta$ | 半径 $r$ | 位置 |
|---|---|---|
| $-\frac\pi6$ | $0$ | 极点 |
| $-\frac\pi{12}$ | $\sqrt2$ | 极轴下方 |
| $0$ | $2$ | 环瓣的顶端 |
| $\frac\pi{12}$ | $\sqrt2$ | 极轴上方 |
| $\frac\pi6$ | $0$ | 极点 |

另外两个正半径区间为

$$\left(-\frac{5\pi}{6},-\frac\pi2\right)
\quad\text{and}\quad
\left(\frac\pi2,\frac{5\pi}{6}\right).$$

它们的中间角度分别为 $-\frac{2\pi}{3}$ 和 $\frac{2\pi}{3}$。共有三个全等的环瓣，每个环瓣的最大半径均为 $2$。

**检验：**将 $\theta$ 增加 $\frac{2\pi}{3}$ 后，$\cos3\theta$ 不变，因此三个环瓣可通过旋转相互重合。

### 例 5：排除负半径部分 {#example-5--exclude-a-negative-radius-part}

**Question:** sketch $r=1+2\cos\theta$ for $-\pi\le\theta\le\pi$.

曲线关于极轴对称。求解 $r=0$：

$$1+2\cos\theta=0
\quad\Rightarrow\quad
\theta=\pm\frac{2\pi}{3}.$$

因此，只有在以下区间内才有 $r>0$：

$$\boxed{-\frac{2\pi}{3}<\theta<\frac{2\pi}{3}.}$$

两个端点都表示极点。重要的点包括：

| 角度 $\theta$ | 半径 $r$ | 直角坐标位置 |
|---|---|---|
| $0$ | $3$ | $(3,0)$ |
| $\frac\pi3$ | $2$ | $(1,\sqrt3)$ |
| $\frac\pi2$ | $1$ | $(0,1)$ |
| $\frac{2\pi}{3}$ | $0$ | 极点 |

将上半部分关于极轴作镜像，即得下半部分。

![三幅独立的极坐标草图：r 等于 4 cos theta 的圆、r 等于 2 cos 3 theta 的三个正半径环瓣，以及 r 等于 1 加 2 cos theta 的正半径部分，不含内环瓣](/assets/img/further-polar-curves.svg)

**检验：**当 $\theta=\pi$ 时，公式给出 $r=-1$。按照本课程约定，不应在草图上画出这个点。某些绘图工具会用负半径绘制额外的内环瓣；应将它排除。

## 交点 {#intersections}

对于半径为正的两条曲线 $r=f(\theta)$ 和 $r=g(\theta)$，同一射线上的非极点交点满足 $f(\theta)=g(\theta)$。只保留同时属于两个定义域且满足 $r>0$ 的解。

**单独检查极点。**两条曲线可能在不同角度下经过极点，因此只在同一角度令半径相等，可能漏掉这个交点。

### 例 6：交点与弦长 {#example-6--intersections-and-a-chord}

**Question:** the curve $r=4(1-\cos\theta)$, $0\le\theta<2\pi$, meets the circle $x^2+y^2=4$ at $A$ and $B$. Find their polar coordinates and the length of $AB$.

圆的极坐标方程为 $r=2$。令两个正半径相等：

$$\begin{aligned}
4(1-\cos\theta)&=2,\\
\cos\theta&=\frac12.
\end{aligned}$$

在给定定义域内，$\theta=\frac\pi3$ 或 $\frac{5\pi}{3}$。因此

$$\boxed{A=\left(2,\frac\pi3\right),
\qquad B=\left(2,\frac{5\pi}{3}\right).}$$

它们的直角坐标分别为 $(1,\sqrt3)$ 和 $(1,-\sqrt3)$，所以

$$\boxed{AB=2\sqrt3.}$$

**检验：**这条弦（chord）为竖直线段，长度为 $2(2\sin\frac\pi3)$。极点位于第一条曲线上，但不在圆上，因此不是另一个交点。

## 面积 {#areas}

若 $r=f(\theta)$ 围成的区域由射线从 $\theta=\alpha$ 扫过至 $\theta=\beta$，则该区域的面积为

$$\boxed{A=\frac12\int_\alpha^\beta r^2\,\mathrm d\theta.}$$

一个很窄的角度小片近似为扇形，其面积为 $\frac12r^2\,\mathrm d\theta$。将这些小片的面积相加，就得到上述积分。

所选区间必须使曲线的半径非负，并且所求区域恰好被扫过**一次**。对于完整的环瓣，应找出它在极点处的两个端点。即使将 $r$ 平方，也不能使负半径区间符合课程约定。

### 例 7：一个环瓣的面积 {#example-7--area-of-one-loop}

**Question:** find the area of one loop of $r=2\cos3\theta$.

使用例 4 中极轴两侧的环瓣。其积分下限与上限分别为 $-\frac\pi6$ 和 $\frac\pi6$：

$$\begin{aligned}
A
&=\frac12\int_{-\pi/6}^{\pi/6}4\cos^23\theta\,\mathrm d\theta\\
&=\int_{-\pi/6}^{\pi/6}(1+\cos6\theta)\,\mathrm d\theta\\
&=\left[\theta+\frac16\sin6\theta\right]_{-\pi/6}^{\pi/6}\\
&=\boxed{\frac\pi3}.
\end{aligned}$$

**检验：**利用对称性，将 $0$ 到 $\frac\pi6$ 之间的面积乘以二，也会得到同一答案。三个环瓣的总面积为 $\pi$。

**常见错误：**求一个环瓣的面积时使用整周角，或在 $r$ 为负的区间上积分。

### 例 8：螺线围成的扇形区域 {#example-8--a-spiral-sector}

**Question:** find the area bounded by $r=2\theta$ and the two radii $\theta=\frac\pi2$ and $\theta=\pi$.

在这个区间内，半径从 $\pi$ 增加到 $2\pi$。所求区域位于两条射线与这段螺线（spiral）之间：

$$\begin{aligned}
A
&=\frac12\int_{\pi/2}^{\pi}(2\theta)^2\,\mathrm d\theta\\
&=2\left[\frac{\theta^3}{3}\right]_{\pi/2}^{\pi}\\
&=\frac23\left(\pi^3-\frac{\pi^3}{8}\right)\\
&=\boxed{\frac{7\pi^3}{12}}.
\end{aligned}$$

**检验：**该区域位于第二象限。题目指定的第一条半径方向为 $\theta=\frac\pi2$，因此积分不能从零开始。

### 公共区域与分段边界 {#common-regions}

公共区域在每条射线上取较小半径；若边界曲线发生变化，应在交点对应的角度处分段积分。

#### 例 9：边界曲线发生变化 {#example-9--the-bounding-curve-changes}

**Question:** find the area inside both $r=1+\cos\theta$ and $r=\sqrt3\sin\theta$.

第一条曲线是心形线（cardioid）。第二条曲线是极轴上方的圆，圆心为 $(0,\frac{\sqrt3}{2})$，半径为 $\frac{\sqrt3}{2}$。只有心形线的上半部分可能包含公共区域，因此考虑 $0\le\theta\le\pi$。

求两个半径相等时的角度：

$$1+\cos\theta=\sqrt3\sin\theta.$$

利用半角恒等式（half-angle identities），

$$\begin{aligned}
2\cos^2\frac\theta2
&=2\sqrt3\sin\frac\theta2\cos\frac\theta2,\\
\cos\frac\theta2
\left(\cos\frac\theta2-\sqrt3\sin\frac\theta2\right)
&=0.
\end{aligned}$$

解为极点处的 $\theta=\pi$，以及 $\theta=\frac\pi3$，后者满足 $r=\frac32$。将非极点交点记作 $P$。

![心形线 r 等于 1 加 cos theta 与圆 r 等于根号 3 sin theta 的内部公共区域；边界曲线在极坐标为二分之三、三分之 pi 的交点 P 处发生变化](/assets/img/further-polar-overlap.svg)

当 $0<\theta<\frac\pi3$ 时，圆的半径较小；当 $\frac\pi3<\theta<\pi$ 时，心形线的半径较小。因此

$$\begin{aligned}
A
&=\frac12\int_0^{\pi/3}3\sin^2\theta\,\mathrm d\theta\\
&\quad+\frac12\int_{\pi/3}^{\pi}(1+\cos\theta)^2\,\mathrm d\theta.
\end{aligned}$$

第一部分使用 $\sin^2\theta=\frac12(1-\cos2\theta)$：

$$\begin{aligned}
A_1
&=\frac34\left[\theta-\frac12\sin2\theta\right]_0^{\pi/3}\\
&=\frac\pi4-\frac{3\sqrt3}{16}.
\end{aligned}$$

第二部分先展开平方，再使用 $\cos^2\theta=\frac12(1+\cos2\theta)$：

$$\begin{aligned}
A_2
&=\frac12\left[\frac32\theta+2\sin\theta
+\frac14\sin2\theta\right]_{\pi/3}^{\pi}\\
&=\frac\pi2-\frac{9\sqrt3}{16}.
\end{aligned}$$

因此

$$\boxed{A=A_1+A_2=\frac{3\pi}{4}-\frac{3\sqrt3}{4}.}$$

**检验：**公共区域的面积小于整个圆的面积，后者为 $\frac{3\pi}{4}$。在每条射线上，公共区域均取**较小的半径**。

### 两曲线之间的区域 {#area-between-curves}

对于同一角度区间上位于外侧曲线与内侧曲线之间的区域，使用

$$A=\frac12\int_\alpha^\beta
\left(r_{\text{outer}}^2-r_{\text{inner}}^2\right)\,\mathrm d\theta.$$

不要使用 $\frac12\int(r_{\text{outer}}-r_{\text{inner}})^2\,\mathrm d\theta$。先画草图，判断所求区域需要用两部分面积相减，还是需要在边界曲线变化处进行分段。

## 练习 {#practice}

先独立尝试每题，再展开提示或解答。第 1–5 题是**为本课编写的原创练习题**。第 6–8 题保留所提供教材中转载的 AQA 题干与分值。

### 第 1 题：坐标与象限 {#question-1--coordinates-and-a-quadrant}

Convert the Cartesian point $(2,-2\sqrt3)$ to polar coordinates using a principal angle. Convert the polar point $(3,\frac{5\pi}{6})$ to Cartesian coordinates.

<details markdown="1">
<summary>提示</summary>

先求点到极点的距离。给定的直角坐标点位于第四象限。

</details>

<details markdown="1">
<summary>解答与检验</summary>

对于 $(2,-2\sqrt3)$，

$$r=\sqrt{4+12}=4,\qquad\theta=-\frac\pi3.$$

其极坐标为 $\boxed{(4,-\frac\pi3)}$。

对于 $(3,\frac{5\pi}{6})$，

$$\begin{aligned}
x&=3\cos\frac{5\pi}{6}=-\frac{3\sqrt3}{2},\\
y&=3\sin\frac{5\pi}{6}=\frac32.
\end{aligned}$$

其直角坐标为 $\boxed{(-\frac{3\sqrt3}{2},\frac32)}$。

**检验：**第一个点满足 $x>0,y<0$，第二个点满足 $x<0,y>0$。两组坐标都给出要求的到极点的距离。

</details>

### 第 2 题：转换方程并保留定义域 {#question-2--convert-and-keep-the-domain}

Find a polar equation for $xy=2$. State where positive radii are possible in $-\pi<\theta\le\pi$.

<details markdown="1">
<summary>提示</summary>

使用 $xy=r^2\cos\theta\sin\theta$ 和 $\sin2\theta=2\sin\theta\cos\theta$。

</details>

<details markdown="1">
<summary>解答与检验</summary>

$$r^2\cos\theta\sin\theta=2
\quad\Rightarrow\quad
\boxed{r^2\sin2\theta=4.}$$

对于正的 $r$，也可写成

$$r=\frac2{\sqrt{\sin2\theta}}.$$

分母必须为非零实数，因此 $\sin2\theta>0$。在指定定义域内，

$$\boxed{-\pi<\theta<-\frac\pi2
\quad\text{or}\quad
0<\theta<\frac\pi2.}$$

**检验：**这两个区间对应第一、第三象限，其中 $x$ 与 $y$ 同号。极点和坐标轴上的点都不在 $xy=2$ 上。

</details>

### 第 3 题：正半径环瓣 {#question-3--positive-radius-loops}

Sketch $r=2\sin2\theta$ for $0\le\theta\le2\pi$, using this course's radius convention. State the number of loops and find the area of one loop.

<details markdown="1">
<summary>提示</summary>

求出 $\sin2\theta>0$ 的范围。一个环瓣从 $\theta=0$ 延伸至 $\theta=\frac\pi2$。

</details>

<details markdown="1">
<summary>解答与检验</summary>

正半径对应的区间为

$$0<\theta<\frac\pi2
\quad\text{and}\quad
\pi<\theta<\frac{3\pi}{2}.$$

区间的端点表示极点。共有**两个环瓣**，分别位于第一、第三象限。它们的顶端半径为 $2$，对应角度分别为 $\theta=\frac\pi4$ 和 $\frac{5\pi}{4}$。

一个环瓣的面积为

$$\begin{aligned}
A
&=\frac12\int_0^{\pi/2}4\sin^22\theta\,\mathrm d\theta\\
&=\int_0^{\pi/2}(1-\cos4\theta)\,\mathrm d\theta\\
&=\left[\theta-\frac14\sin4\theta\right]_0^{\pi/2}\\
&=\boxed{\frac\pi2}.
\end{aligned}$$

**检验：**两个环瓣可通过旋转 $\pi$ 相互重合，因此总面积为 $\pi$。画出四个环瓣就包含了负半径，不符合这里使用的约定。

</details>

### 第 4 题：圆的一部分 {#question-4--part-of-a-circle}

Find the area swept by $r=4\cos\theta$ between $\theta=0$ and $\theta=\frac\pi4$.

<details markdown="1">
<summary>提示</summary>

使用题目给定的角度上下限，而非整个圆所对应的范围。对 $\cos^2\theta$ 使用二倍角恒等式。

</details>

<details markdown="1">
<summary>解答与检验</summary>

$$\begin{aligned}
A
&=\frac12\int_0^{\pi/4}16\cos^2\theta\,\mathrm d\theta\\
&=4\left[\theta+\frac12\sin2\theta\right]_0^{\pi/4}\\
&=\boxed{\pi+2}.
\end{aligned}$$

**检验：**整个圆的面积为 $4\pi$，上半圆的面积为 $2\pi$。指定区域的面积小于这两个面积。这里的角度以极点为顶点量取，并非以圆心为顶点。

</details>

### 第 5 题：不同角度下的极点交点 {#question-5--a-pole-intersection-at-different-angles}

The circles $r=2\cos\theta$ and $r=2\sin\theta$ meet at the pole and at one other point. Find that point and the area inside both circles.

<details markdown="1">
<summary>提示</summary>

公共区域位于第一象限。先求 $\sin\theta=\cos\theta$ 成立时的角度，再在该角度两侧分别使用较小的半径。

</details>

<details markdown="1">
<summary>解答与检验</summary>

第一个圆在 $\theta=\pm\frac\pi2$ 时经过极点；第二个圆在 $\theta=0$ 或 $\pi$ 时经过极点。虽然角度不同，但它们表示同一个点。

对于第一象限中的非极点交点，

$$\begin{aligned}
2\cos\theta&=2\sin\theta,\\
\theta&=\frac\pi4,\qquad r=\sqrt2.
\end{aligned}$$

因此，另一个交点为 $\boxed{(\sqrt2,\frac\pi4)}$，其直角坐标为 $(1,1)$。

当 $0<\theta<\frac\pi4$ 时，$2\sin\theta$ 较小；当 $\frac\pi4<\theta<\frac\pi2$ 时，$2\cos\theta$ 较小。因此

$$\begin{aligned}
A
&=\frac12\int_0^{\pi/4}4\sin^2\theta\,\mathrm d\theta\\
&\quad+\frac12\int_{\pi/4}^{\pi/2}4\cos^2\theta\,\mathrm d\theta\\
&=\left[\theta-\frac12\sin2\theta\right]_0^{\pi/4}\\
&\quad+\left[\theta+\frac12\sin2\theta\right]_{\pi/4}^{\pi/2}\\
&=\boxed{\frac\pi2-1}.
\end{aligned}$$

**检验：**每个圆的半径均为 $1$，因此公共面积必须小于 $\pi$。两部分积分区域关于直线 $y=x$ 对称，所以面积相等。

</details>

### 第 6 题：AQA——直角坐标方程 {#question-6--aqa-a-cartesian-equation}

**来源：**AQA Mathematics 6360，MFP3，June 2014，原卷第 3 题。原题分值：**4 marks**。教材索引：Chapter 21, practice examination question 2, printed p. 267。[原卷](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP3/Papers-AQA/June%202014%20QP%20-%20FP3%20AQA.PDF)、[AQA 评分材料](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP3/Papers-AQA/June%202014%20MS%20-%20FP3%20AQA.PDF)。

A curve has polar equation $r(4-3\cos\theta)=4$. Find its Cartesian equation in the form $y^2=f(x)$.

<details markdown="1">
<summary>提示</summary>

展开方程并使用 $r\cos\theta=x$。先将 $r$ 单独置于等号一边，再平方。

</details>

<details markdown="1">
<summary>详细解答与检验</summary>

$$4r-3x=4
\quad\Rightarrow\quad
r=1+\frac34x.$$

平方并使用 $r^2=x^2+y^2$：

$$\begin{aligned}
x^2+y^2
&=\left(1+\frac34x\right)^2\\
&=1+\frac32x+\frac9{16}x^2.
\end{aligned}$$

因此

$$\boxed{y^2=1+\frac32x-\frac7{16}x^2.}$$

**检验：**当 $\theta=0$ 时，$r=4$，且点 $(4,0)$ 满足方程。直角坐标曲线满足 $-\frac47\le x\le4$，因此 $1+\frac34x$ 在整个区间内均为正；平方没有引入负半径分支（branch）。

**评分材料核对：**先得到 4r = 4 + 3x，再代入 r² = x² + y²，整理为题目要求的直角坐标方程。本课解答已对照上述 AQA 评分材料检查；这些解释由本课编写，并非官方评分细则。

</details>

### 第 7 题：AQA——以原点为极点的圆 {#question-7--aqa-a-circle-using-the-origin-as-pole}

**来源：**AQA Mathematics 6360，MFP3，June 2013，原卷第 2 题。原题分值：**4 marks**。教材索引：Chapter 21, practice examination question 3, printed p. 267。[原卷](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP3/Papers-AQA/June%202013%20QP%20-%20FP3%20AQA.pdf)、[AQA 评分材料](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP3/Papers-AQA/June%202013%20MS%20-%20FP3%20AQA.PDF)。

The Cartesian equation of a circle is $(x+8)^2+(y-6)^2=100$.

Using the origin $O$ as the pole and the positive $x$-axis as the initial line, find the polar equation of this circle, giving your answer in the form

$$r=p\sin\theta+q\cos\theta.$$

<details markdown="1">
<summary>提示</summary>

先展开平方项。圆经过原点，因此常数项相消。

</details>

<details markdown="1">
<summary>详细解答与检验</summary>

展开得

$$x^2+y^2+16x-12y=0.$$

代入极坐标关系式：

$$r^2+16r\cos\theta-12r\sin\theta=0.$$

对于 $r>0$，将方程除以 $r$：

$$\boxed{r=12\sin\theta-16\cos\theta.}$$

因此，$p=12$，且 $q=-16$。

**检验：**直角坐标中的圆心为 $(-8,6)$，半径为 $10$。圆心到原点的距离也是 $10$，因此圆经过极点。极坐标方程的零点保留了这个边界点。

**评分材料核对：**展开圆方程，使用 x = r cosθ、y = r sinθ，得到 r = 12 sinθ − 16 cosθ。本课解答已对照上述 AQA 评分材料检查；这些解释由本课编写，并非官方评分细则。

</details>

### 第 8 题：AQA——环瓣的面积 {#question-8--aqa-area-of-a-loop}

**来源（改编题：题图重绘）：**AQA Mathematics 6360，MFP3，January 2009，原卷第 3 题。原题分值：**6 marks**。教材索引：Chapter 21, practice examination question 1, printed p. 267。[原卷](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP3/Papers-AQA/January%202009%20QP%20-%20FP3%20AQA.PDF)、[AQA 评分材料](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP3/Papers-AQA/January%202009%20MS%20-%20FP3%20AQA.PDF)。 题图按原卷重绘，保留曲线、极点、始线和题目条件。

The diagram shows a sketch of a loop, the pole $O$ and the initial line.

![Redrawn sketch of the AQA loop above the initial line, starting and ending at the pole O](/assets/img/further-polar-practice-loop.svg)

The polar equation of the loop is

$$r=(2+\cos\theta)\sqrt{\sin\theta},
\qquad0\le\theta\le\pi.$$

Find the area enclosed by the loop.

<details markdown="1">
<summary>提示</summary>

环瓣在 $\sin\theta=0$ 处开始与结束。将 $r$ 平方即可消去平方根。积分时使用 $u=2+\cos\theta$。

</details>

<details markdown="1">
<summary>详细解答与检验</summary>

半径在 $0<\theta<\pi$ 时为正，在两个端点处为零。因此

$$A=\frac12\int_0^\pi(2+\cos\theta)^2\sin\theta\,\mathrm d\theta.$$

使用 $u=2+\cos\theta$ 和 $\mathrm du=-\sin\theta\,\mathrm d\theta$。换元后的下限为 $u=3$，对应 $\theta=0$；上限为 $u=1$，对应 $\theta=\pi$：

$$\begin{aligned}
A
&=-\frac12\int_3^1u^2\,\mathrm du\\
&=\frac12\left[\frac{u^3}{3}\right]_1^3\\
&=\frac{27-1}{6}\\
&=\boxed{\frac{13}{3}}.
\end{aligned}$$

**检验：**交换积分上下限可消去负号。面积为正；该环瓣并不关于 $y$ 轴对称，因此不能把半个环瓣的面积乘以二。

**评分材料核对：**使用从 0 到 π 的 r² 积分的一半；可展开或换元积分，得到面积 13/3。本课解答已对照上述 AQA 评分材料检查；这些解释由本课编写，并非官方评分细则。

</details>

## 快速参考 {#quick-reference}

| 任务 | 方法 | 检查要点 |
|---|---|---|
| 极坐标转直角坐标 | $x=r\cos\theta$，$y=r\sin\theta$ | 坐标符号应与象限一致 |
| 直角坐标转极坐标 | $r=\sqrt{x^2+y^2}$；根据位置确定角度 | 仅用反正切可能选错象限 |
| 转换方程 | 使用 $r^2=x^2+y^2$、$r\cos\theta=x$、$r\sin\theta=y$ | 保留原定义域，并检查极点 |
| 绘制曲线草图 | 找出正半径区间、零点、对称性与简单点 | 排除负半径和无定义的区间 |
| 求交点 | 令同一射线上的正半径相等 | 单独检查极点，即使两曲线在不同角度下经过它 |
| 一个环瓣 | 在两个端点之间计算 $\displaystyle A=\frac12\int_\alpha^\beta r^2\,\mathrm d\theta$ | 所求环瓣应恰好被扫过一次 |
| 公共区域 | 每条射线上取较小半径 | 在边界曲线发生变化处将积分分段 |
| 外侧面积减内侧面积 | 对 $\frac12(r_{\text{outer}}^2-r_{\text{inner}}^2)$ 积分 | 两个半径先各自平方再相减，不是先相减再平方 |
{: .wide-table}

**练习后：**若选错象限，重做第 1 题；若转换后的方程具有不正确的定义域，重做第 2 题；若草图包含负半径，重做第 3 题；若求面积时用了整条曲线的范围，而非给定扇形的范围，重做第 4 题；若漏掉极点或边界变化，重做第 5 题；若坐标方程转换困难，重做第 6–7 题；若换元后得到负面积，重做第 8 题。

**你应能够：**转换点的坐标与曲线方程，绘制正半径曲线，找出全部交点，并利用草图为指定区域建立面积积分。

本课范围依据 [OxfordAQA Further Mathematics 9665 课程大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf) FP2.3。例题为教学材料。第 6–8 题保留所提供教材中的 AQA 原题与分值。

**学习路径：**[上一课：棣莫弗定理](/zh/alevel/a2-further-mathematics/de-moivres-theorem/) · [下一课：反三角函数的微积分](/zh/alevel/a2-further-mathematics/inverse-trigonometric-functions/) · [返回课程](/zh/alevel/a2-further-mathematics/)。
