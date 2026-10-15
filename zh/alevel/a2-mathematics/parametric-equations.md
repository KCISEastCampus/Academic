---
title: 参数方程
layout: subjects
mathjax: true
grade: a2
subject: a2-mathematics
lang: zh-CN
translation_of: /alevel/a2-mathematics/parametric-equations/
permalink: /zh/alevel/a2-mathematics/parametric-equations/
toc_headings: h2
study_page: true
---

[纯数学](/zh/alevel/a2-mathematics/) · P2.3 参数方程（parametric equations）与 P2.6 求导

用参数描述曲线，求出它的直角坐标方程（Cartesian equation），并通过参数求导（parametric differentiation）求斜率（gradient）。本页例题与练习的题干保留英文，讲解、提示与解答使用中文。

- **学习：**从[直角坐标方程](#cartesian-equations)开始，再学习[曲线草图](#sketching-a-curve)和[参数求导](#parametric-differentiation)。
- **作业帮助：**先求参数值，再计算两个坐标和斜率。
- **复习：**先在不看解答的情况下尝试[练习](#practice)，然后查看[快速参考](#quick-reference)。

教材：第 5 章第 5.6–5.7 节（印刷版第 72–77 页）。

**开始前：**你应当掌握直线方程、三角恒等式和[求导](/zh/alevel/a2-mathematics/differentiation/)。

本页所有例题和练习题均为自拟题，并非官方真题。建议练习时间仅供参考；题目没有官方分值。

## 直角坐标方程 {#cartesian-equations}

在 $x=f(t)$ 和 $y=g(t)$ 中，变量 $t$ 称为参数（parameter）。每个允许的 $t$ 值都会确定曲线上的一个点 $(x,y)$。

要求直角坐标方程时，需要消去参数。保留坐标的限制条件：单看方程本身，可能会表示出参数范围之外的曲线部分。

### 例题 1：消去参数并保留范围限制 {#example-1-eliminate-a-parameter-and-keep-the-range}

**Question:** Find the Cartesian equation for $x=t^2$, $y=2t+1$, where $t\geq0$.

由 $y=2t+1$ 得 $t=\frac{y-1}{2}$。因此

$$\boxed{x=\frac{(y-1)^2}{4},\qquad y\geq1.}$$

此外 $x\geq0$。限制 $y\geq1$ 选出了侧向抛物线的上支。

**检查：**$t=2$ 时得到 $(4,5)$，且 $(5-1)^2=4(4)$。点 $(4,-3)$ 虽然满足方程，却不在给定参数范围内。

### 例题 2：使用三角恒等式 {#example-2-use-a-trigonometric-identity}

**Question:** Eliminate $\theta$ from $x=3\cos\theta$, $y=2\sin\theta$, where $0\leq\theta\leq\pi$.

使用 $\cos^2\theta+\sin^2\theta=1$：

$$\boxed{\frac{x^2}{9}+\frac{y^2}{4}=1,\qquad y\geq0.}$$

这表示椭圆的上半部分。随着 $\theta$ 增大，点从 $(3,0)$ 出发，经过 $(0,2)$，到达 $(-3,0)$。

**检查：**两个端点都包含在内。由于在该区间上 $\sin\theta\geq0$，椭圆的下半部分不包括在内。

### 例题 3：保留被排除的点 {#example-3-keep-an-excluded-point}

**Question:** Find the Cartesian equation for

$$x=\frac{t}{1-t},\qquad y=\frac{t^2}{1-t},\qquad t\ne1.$$

把 $x(1-t)=t$ 整理后得到 $t=\frac{x}{1+x}$。在原方程中 $x=-1$ 不可能取到。又因为 $y=tx$，

$$\boxed{y=\frac{x^2}{1+x},\qquad x\ne-1.}$$

每个实数 $x\ne-1$ 都对应一个允许的 $t=\frac{x}{1+x}$。

**检查：**$t=2$ 时得到 $(-2,-4)$，这个点满足直角坐标方程。

### 从直角坐标形式转为参数形式 {#from-cartesian-to-parametric-form}

通常可以选一个坐标作为参数。对于 $y=x^2-1$ 且 $x\geq0$，令 $x=t$、$y=t^2-1$，其中 $t\geq0$。消去 $t$，即可检查所得方程及其定义域。

另一个常用选择是 $x=a\cos\theta$、$y=b\sin\theta$，用于 $\frac{x^2}{a^2}+\frac{y^2}{b^2}=1$，其中 $a,b>0$。取区间 $0\leq\theta<2\pi$，可以遍历整个椭圆一周。若直角坐标曲线只包含椭圆的一部分，就应相应限制参数范围。

## 曲线草图 {#sketching-a-curve}

列出一组参数值，计算对应的点，求出截距和范围限制，并标出参数增大时的运动方向。仅凭少数几个点不能确定完整曲线的形状。

### 例题 4：画出两条分支 {#example-4-sketch-both-branches}

**Question:** Describe the sketch of $x=t^2$, $y=t-2$, for all real $t$.

| $t$ | $-2$ | $-1$ | $0$ | $1$ | $2$ |
|---|---|---|---|---|---|
| $x$ | $4$ | $1$ | $0$ | $1$ | $4$ |
| $y$ | $-4$ | $-3$ | $-2$ | $-1$ | $0$ |

消去 $t$ 得 $x=(y+2)^2$。这是一条顶点为 $(0,-2)$、向右开口的侧向抛物线。它与 $x$ 轴交于 $(4,0)$。

当 $t$ 从负值增大到零时，点沿下支向顶点移动。$t>0$ 时，点沿上支远离顶点。两条分支都包括在内，且 $x\geq0$。

![A sideways parabola with arrows showing increasing parameter values](/assets/img/parametric-parabola.svg)

**常见错误：**写成 $y=\sqrt{x}-2$ 只保留了 $t\geq0$ 的部分。对所有实数 $t$，两种符号都要考虑：$y=-2\pm\sqrt{x}$。

## 参数求导 {#parametric-differentiation}

分别对 $x$ 和 $y$ 关于参数求导。由链式法则，

$$\frac{dy}{dt}=\frac{dy}{dx}\frac{dx}{dt},\qquad
\boxed{\frac{dy}{dx}=\frac{\frac{dy}{dt}}{\frac{dx}{dt}}},\qquad \frac{dx}{dt}\ne0.$$

不要把 $dy/dt$ 与斜率 $dy/dx$ 混淆。

- 若 $dy/dt=0$ 且 $dx/dt\ne0$，切线水平：这是驻点（stationary point）。
- 若 $dx/dt=0$ 且 $dy/dt\ne0$，切线竖直；斜率不是有限值。
- 若两者都为零，这个商无法给出斜率。要判断切线，应检查曲线本身或考察极限。

### 例题 5：求斜率并确定竖直切线 {#example-5-find-a-gradient-and-a-vertical-tangent}

**Question:** For $x=t^2$, $y=t-2$, find the gradient at $t=1$ and the point where the gradient is $2$. Are there stationary points?

$$\frac{dx}{dt}=2t,\qquad \frac{dy}{dt}=1,\qquad \frac{dy}{dx}=\frac1{2t}\quad(t\ne0).$$

当 $t=1$ 时，该点为 $(1,-1)$，斜率为 $\boxed{\frac12}$。

若斜率为 $2$，则 $\frac1{2t}=2$，所以 $t=\frac14$，对应点为 $\boxed{\left(\frac1{16},-\frac74\right)}$。

不存在驻点，因为 $\frac1{2t}$ 永远不为零。当 $t=0$ 时，顶点 $(0,-2)$ 处的切线竖直，为 $\boxed{x=0}$；法线水平，为 $\boxed{y=-2}$。

**检查：**对 $x=(y+2)^2$ 作隐式求导，得到 $1=2(y+2)\frac{dy}{dx}$；当 $t\ne0$ 时，这与参数求导结果一致。

## 切线与法线 {#tangents-and-normals}

当参数 $t=a$ 时，先求出点 $(x_0,y_0)$ 和切线斜率 $m$，再使用

$$y-y_0=m(x-x_0).$$

若切线斜率有限且非零，法线斜率为 $-\frac1m$。切线水平时法线竖直；切线竖直时法线水平。

### 例题 6：法线与第二个交点 {#example-6-a-normal-and-a-second-intersection}

**Question:** Find the normal to $x=t^2$, $y=2t$ at $t=1$, then find where it meets the curve again.

该点为 $(1,2)$，且 $\frac{dy}{dx}=\frac{2}{2t}=\frac1t$。当 $t=1$ 时，切线斜率为 $1$，因此法线为

$$y-2=-(x-1),\qquad \boxed{y=3-x}.$$

求交点时，把参数坐标代入直线方程：

$$2t=3-t^2\quad\Rightarrow\quad(t-1)(t+3)=0.$$

根 $t=1$ 对应原来的点。另一个根为 $t=-3$，所以另一交点是 $\boxed{(9,-6)}$。

**检查：**$-6=3-9$。两个坐标必须由同一个参数值求出。

### 例题 7：求一般点处的切线 {#example-7-a-tangent-at-a-general-point}

**Question:** Find the tangent to $x=3\cos\theta$, $y=2\sin\theta$ at $\theta=\alpha$.

当 $\sin\alpha\ne0$ 时，

$$\frac{dy}{dx}=-\frac{2\cos\theta}{3\sin\theta},\qquad
y-2\sin\alpha=-\frac{2\cos\alpha}{3\sin\alpha}(x-3\cos\alpha).$$

整理后，再使用 $\sin^2\alpha+\cos^2\alpha=1$：

$$\boxed{\frac{x\cos\alpha}{3}+\frac{y\sin\alpha}{2}=1.}$$

这个框出的形式也适用于 $\sin\alpha=0$：当 $\alpha=0$ 时切线为 $x=3$；当 $\alpha=\pi$ 时切线为 $x=-3$。不要在除以零之后再处理这些竖直切线，应单独检查。

**检查：**代入点 $(3\cos\alpha,2\sin\alpha)$，左边等于 $1$。当 $\alpha=\frac\pi2$ 时，切线为 $y=2$。

## 驻点 {#stationary-points}

解 $dy/dt=0$，检查 $dx/dt\ne0$，再代入两个坐标的表达式求出坐标。分类时，要考察 $dy/dx$ 在驻点两侧的符号，并按 $x$ 增大的方向比较。符号由负变正表示局部极小值；由正变负表示局部极大值。

OxfordAQA MA03 课程说明不要求求参数曲线或隐函数的二阶导数。这里应使用斜率符号的变化来分类。

### 例题 8：判断驻点类型 {#example-8-classify-a-stationary-point}

**Question:** Find and classify the stationary point of $x=t^3$, $y=(t+2)^2$.

$$\frac{dy}{dx}=\frac{2(t+2)}{3t^2}\quad(t\ne0).$$

当 $t=-2$ 时斜率为零，且 $dx/dt=12\ne0$。该点为 $\boxed{(-8,0)}$。

在 $t=-2$ 附近，$x=t^3$ 随着 $t$ 增大而增大。分母 $3t^2$ 为正，因此 $t<-2$ 时斜率为负，$t>-2$ 时斜率为正。这是一个**局部极小值点**。当 $t=0$ 时，$(0,4)$ 处的切线竖直，因此它不是驻点。

**检查：**$y=(t+2)^2\geq0$，且仅当 $t=-2$ 时等号成立。

## 练习 {#practice}

建议用时约 **30–40 分钟**。第一次尝试时先不要查看解答。

### 题目 1：直角坐标方程与范围限制 {#question-1-cartesian-equation-and-restrictions}

Eliminate $t$ from $x=2t^2$, $y=3t-1$, where $t\leq0$. Describe the part of the curve included.

<details markdown="1">
<summary>提示</summary>

从 $y$ 的方程解出 $t$，再把 $t\leq0$ 改写成对 $y$ 的限制。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$t=\frac{y+1}{3}$，所以 $\boxed{x=\frac{2(y+1)^2}{9},\ y\leq-1}$。这是侧向抛物线的下支，包含顶点 $(0,-1)$；并且 $x\geq0$。

当 $t=-1$ 时，$(x,y)=(2,-4)$，符合方程和范围限制。

</details>

### 题目 2：受限椭圆 {#question-2-a-restricted-ellipse}

For $x=4\cos\theta$, $y=3\sin\theta$, where $0\leq\theta\leq\frac\pi2$, find the Cartesian equation and describe the direction as $\theta$ increases.

<details markdown="1">
<summary>提示</summary>

使用 $\cos^2\theta+\sin^2\theta=1$，并求出两个端点。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$\boxed{\frac{x^2}{16}+\frac{y^2}{9}=1,\ x\geq0,\ y\geq0}$。点沿第一象限的椭圆弧从 $(4,0)$ 移动到 $(0,3)$，方向对应 $\theta$ 增大。

当 $\theta=\frac\pi4$ 时，点 $(2\sqrt2,\frac{3\sqrt2}{2})$ 满足 $\frac12+\frac12=1$。

</details>

### 题目 3：切线与法线 {#question-3-tangent-and-normal}

For $x=t^2+1$, $y=t^3$, find the tangent and normal at $t=2$.

<details markdown="1">
<summary>提示</summary>

先求点的坐标，再计算 $dy/dt$ 除以 $dx/dt$，最后代入 $t=2$。

</details>

<details markdown="1">
<summary>解答与检查</summary>

该点为 $(5,8)$，且 $\frac{dy}{dx}=\frac{3t^2}{2t}=\frac{3t}{2}$，其中 $t\ne0$。切线斜率为 $3$，所以切线为 $\boxed{y-8=3(x-5)}$。

法线为 $\boxed{y-8=-\frac13(x-5)}$。两条直线都经过 $(5,8)$，且它们的斜率乘积为 $-1$。

</details>

### 题目 4：驻点 {#question-4-stationary-points}

Find and classify the stationary points of $x=t$, $y=t^3-3t$.

<details markdown="1">
<summary>提示</summary>

求出 $dy/dx$，检查每个驻点两侧的符号。要给出坐标，而不只是参数值。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$\frac{dy}{dx}=3t^2-3=0$ 得 $t=\pm1$。由于 $x=t$，随着 $t$ 增大，$x$ 也增大，因此两个点都是有效的驻点。

$\boxed{(-1,2)}$ 是局部极大值点；$\boxed{(1,-2)}$ 是局部极小值点。斜率在 $x=-1$ 处由正变负，在 $x=1$ 处由负变正。

</details>

### 题目 5：两个导数都为零 {#question-5-two-zero-derivatives}

For $x=t^3$, $y=t^3$, find the tangent at $t=0$. Explain why direct substitution into the derivative quotient is insufficient.

<details markdown="1">
<summary>提示</summary>

消去 $t$，或者考察 $t\ne0$ 时的斜率。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$dx/dt$ 和 $dy/dt$ 在 $t=0$ 时都为零，因此商式为未定义的 $0/0$。

直角坐标方程为 $y=x$，对所有实数 $x$ 成立。所以 $(0,0)$ 处的切线为 $\boxed{y=x}$，斜率为 $1$。当 $t\ne0$ 时，商为 $3t^2/(3t^2)=1$，与此结果一致。该点不是驻点。

</details>

### 题目 6：另一个交点 {#question-6-another-intersection}

For $x=t^2$, $y=4t$, find the normal at $t=1$ and its other intersection with the curve.

<details markdown="1">
<summary>提示</summary>

求出法线后，把 $x=t^2$ 和 $y=4t$ 代入法线方程，并去掉对应原交点的根。

</details>

<details markdown="1">
<summary>解答与检查</summary>

在 $(1,4)$ 处，$\frac{dy}{dx}=\frac2t=2$，所以法线为 $\boxed{y-4=-\frac12(x-1)}$。

代入后得到 $8t=9-t^2$，所以 $(t-1)(t+9)=0$。另一个参数值为 $t=-9$，对应点为 $\boxed{(81,-36)}$。

检查：$-36-4=-\frac12(81-1)=-40$。

</details>

## 快速参考 {#quick-reference}

| 任务 | 方法 | 检查 |
|---|---|---|
| 直角坐标方程 | 代入或使用恒等式消去参数 | 保留范围限制和排除值 |
| 草图 | 描点、求截距，并使用直角坐标方程 | 标出参数增大时的方向 |
| 斜率 | $(dy/dt)/(dx/dt)$ | 检查 $dx/dt\ne0$ |
| 切线或法线 | 先求点和斜率 | 水平线和竖直线要分别处理 |
| 驻点 | 解 $dy/dt=0$，并要求 $dx/dt\ne0$ | 给出两个坐标并分类 |
| 进一步求交点 | 把参数坐标代入直线方程 | 排除原来的点，并检查参数范围 |

**你应当能够：**消去参数、画出允许的曲线、求斜率、切线和法线，并求出驻点及其类型。

**学习路径：**[上一节：求导](/zh/alevel/a2-mathematics/differentiation/) · [下一节：积分：方法选择](/zh/alevel/a2-mathematics/integration/) · [返回纯数学主题索引](/zh/alevel/a2-mathematics/)。
