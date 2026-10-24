---
title: 参数方程
layout: subjects
mathjax: true
grade: a2
subject: a2-mathematics
lang: zh-CN
translation_of: /alevel/a2-mathematics/parametric-equations/
permalink: /zh/alevel/a2-mathematics/parametric-equations/
toc_headings: h2, h3
reading_layout: true
study_page: true
---

[纯数学](/zh/alevel/a2-mathematics/) · P2.3 参数方程（parametric equations）与 P2.6 求导

<div class="lesson-lead" markdown="1">

同一次选定一个数，用两条规则分别算横坐标和纵坐标，就得到曲线上的一个点。本页从这种描述出发，学习把两条规则合成只含坐标的方程、画出能到达的曲线部分，再求切线斜率。

</div>

- **学习：**从[直角坐标方程](#cartesian-equations)开始，再学习[曲线草图](#sketching-a-curve)和[参数求导](#parametric-differentiation)。
- **作业帮助：**先求参数值，再计算两个坐标和斜率。
- **复习：**先在不看解答的情况下尝试[练习](#practice)，然后查看[快速参考](#quick-reference)。

<div class="lesson-notes" markdown="1">

教材：第 5 章第 5.6–5.7 节（印刷版第 72–77 页）。

**从这里开始：**先用一个参数值算出同一个点的两个坐标，再消参、画轨迹，最后求斜率。需要会[直线约束与点斜式](/zh/alevel/as-mathematics/coordinate-geometry/#l04)、[三角恒等式](/zh/alevel/a2-mathematics/trigonometric-functions-and-formulae/#trigonometric-identities)、[链式法则](/zh/alevel/a2-mathematics/differentiation/#composite-functions)及[切法线和驻点](/zh/alevel/a2-mathematics/differentiation/#tangents-normals-and-stationary-points)。读完表图示范后，自己完成[新轨迹](#check-curve)；学完积分后再做[稍后回顾](#later-review)。

本页所有例题、数据情境与练习均为自拟，并非官方真题或实测数据；题目没有官方分值。提示与解答分别默认关闭。

</div>

## 直角坐标方程 {#cartesian-equations}

先选一个数，再用两条规则算出同一个点的两个坐标。在 $x=f(t)$ 和 $y=g(t)$ 中，共同使用的数 $t$ 称为**参数（parameter）**。每个允许的 $t$ 值都确定曲线上的一个点 $(x,y)$。横、纵坐标必须用同一个取值，不能各选各的；参数可以表示时间，也可以只是帮助描述曲线的数。

怎样把这两条规则改成只含横、纵坐标的关系？这个过程叫**消去参数**，结果叫**直角坐标方程（Cartesian equation）**。常用办法是从一条规则求出参数，再代入另一条。还要把允许的参数范围改写成坐标限制，否则新方程可能多包含原来走不到的点。参数变化时走过的曲线部分叫**轨迹（trace）**。

<section class="worked-example" markdown="1">

### 例题 1：消去参数并保留范围限制 {#example-1-eliminate-a-parameter-and-keep-the-range}

**Question:** Find the Cartesian equation for $x=t^2$, $y=2t+1$, where $t\geq0$.

从 $y=2t+1$ 解参数只需减一再除以二，得到 $t=\frac{y-1}{2}$。选这条规则是因为它没有平方，不必选择正负平方根。把结果代入横坐标规则，并把“参数非负”改写成“纵坐标至少为一”：

$$\boxed{x=\frac{(y-1)^2}{4},\qquad y\geq1.}$$

此外 $x\geq0$。限制 $y\geq1$ 选出顶点及其上方的那一半，称为侧向抛物线的上支。反过来，任意满足这两个框内条件的点，都能用“纵坐标减一再除以二”找回非负参数；代回两条规则恰好得到原来的点。这说明没有多出的点，也没有漏掉的点。

**检查：**$t=2$ 时得到 $(4,5)$，且 $(5-1)^2=4(4)$。点 $(4,-3)$ 虽然满足方程，却不在给定参数范围内。

</section>

<section class="worked-example" markdown="1">

### 例题 2：使用三角恒等式 {#example-2-use-a-trigonometric-identity}

**Question:** Eliminate $\theta$ from $x=3\cos\theta$, $y=2\sin\theta$, where $0\leq\theta\leq\pi$.

先把横坐标除以 3 得到余弦，把纵坐标除以 2 得到正弦。为了去掉角度，不必反求角；把这两个数平方再相加，就能使用 $\cos^2\theta+\sin^2\theta=1$：

$$\boxed{\frac{x^2}{9}+\frac{y^2}{4}=1,\qquad y\geq0.}$$

这表示椭圆的上半部分。随着 $\theta$ 增大，点从 $(3,0)$ 出发，经过 $(0,2)$，到达 $(-3,0)$。余弦连续地从 1 减到 −1，而正弦始终非负，因此上半椭圆上的每一点都能到达。

**检查：**两个端点都包含在内。由于在该区间上 $\sin\theta\geq0$，椭圆的下半部分不包括在内。

</section>

<section class="worked-example" markdown="1">

### 例题 3：保留被排除的点 {#example-3-keep-an-excluded-point}

**Question:** Find the Cartesian equation for

$$x=\frac{t}{1-t},\qquad y=\frac{t^2}{1-t},\qquad t\ne1.$$

先乘去分母，得到 $x(1-t)=t$。展开后，把两个含参数的项放在一起，提取参数作公因子，就得到 $t=\frac{x}{1+x}$。在原方程中 $x=-1$ 不可能取到：代入并交叉相乘会得到 −1=0。再比较原来的两个分式，纵坐标恰好是横坐标乘以参数，即 $y=tx$；这里没有除以横坐标，所以原点也保留：

$$\boxed{y=\frac{x^2}{1+x},\qquad x\ne-1.}$$

每个实数 $x\ne-1$ 都对应一个允许的 $t=\frac{x}{1+x}$。这个分式不可能等于 1，否则分子和分母相等会要求 0=1；因此它不会违反原题排除的参数值。代回两条规则可还原每个允许点，不只是下面检查的一个点。

**检查：**$t=2$ 时得到 $(-2,-4)$，这个点满足直角坐标方程。

</section>

### 从直角坐标形式转为参数形式 {#from-cartesian-to-parametric-form}

反过来时，可以直接用一个坐标的数值作参数。对于 $y=x^2-1$ 且 $x\geq0$，令 $x=t$、$y=t^2-1$，其中 $t\geq0$。意思是先选一个非负数作横坐标，再按原规则算纵坐标。消去 $t$ 后，原方程和原来的横坐标限制都恢复，因而恰好画出所需部分。

另一个常用选择是 $x=a\cos\theta$、$y=b\sin\theta$，用于 $\frac{x^2}{a^2}+\frac{y^2}{b^2}=1$，其中 $a,b>0$。取区间 $0\leq\theta<2\pi$，可以遍历整个椭圆一周。若直角坐标曲线只包含椭圆的一部分，就应相应限制参数范围。

## 曲线草图 {#sketching-a-curve}

按从小到大的顺序列出一些参数值；每次用同一个值算出两个坐标。把点标出，再用只含坐标的方程判断点之间的形状，检查与坐标轴的交点和范围限制。箭头表示参数增大时的顺序。少数几个点能帮助定位，不能证明完整曲线的形状。

<section class="worked-example" markdown="1">

### 例题 4：画出两条分支 {#example-4-sketch-both-branches}

**Question:** Describe the sketch of $x=t^2$, $y=t-2$, for all real $t$.

| $t$ | $-2$ | $-1$ | $0$ | $1$ | $2$ |
|---|---|---|---|---|---|
| $x$ | $4$ | $1$ | $0$ | $1$ | $4$ |
| $y$ | $-4$ | $-3$ | $-2$ | $-1$ | $0$ |

表中每一列都是同一次取值算出的点，不能把不同列的坐标拼在一起。纵坐标规则反过来就是“纵坐标加二等于参数”，代入平方规则，消去 $t$ 得 $x=(y+2)^2$。平方使横坐标非负；纵坐标为 −2 时平方为零，因此顶点为 $(0,-2)$，曲线向右开口。它与 $x$ 轴交于 $(4,0)$。

当 $t$ 从负值增大到零时，纵坐标在 −2 以下并逐渐上升，平方则逐渐减小，所以点从右下方向顶点移动；这一半叫下支。$t>0$ 时，点继续上升并向右远离顶点；这一半叫上支。两部分都包括在内，且 $x\geq0$。

![A sideways parabola with arrows showing increasing parameter values](/assets/img/parametric-parabola.svg)

把表中的 $t=-2,0,2$ 依次对应图上的 $(4,-4)$、$(0,-2)$、$(4,0)$。箭头沿这条有序路线，不能仅根据 $x$ 坐标变大来猜方向：前半段的 $x$ 在减小。图用于检查这一条给定曲线；下一题需要自己画新的轨迹。

**常见错误：**写成 $y=\sqrt{x}-2$ 只保留了 $t\geq0$ 的部分。对所有实数 $t$，两种符号都要考虑：$y=-2\pm\sqrt{x}$。

</section>

<section class="lesson-check" markdown="1">

### 读出一条新轨迹 {#check-curve}

<!-- task:check-curve -->

A curve is given by $x=(t-1)^2$, $y=t+1$, with $-1\le t\le2$.

| $t$ | $-1$ | $0$ | $1$ | $2$ |
|---|---|---|---|---|
| $x$ | $4$ | $1$ | $0$ | $1$ |
| $y$ | $0$ | $1$ | $2$ | $3$ |

**(a)** On your own axes, sketch the complete allowed trace. Mark its endpoints and vertex, and add arrows for increasing $t$. Give a Cartesian equation with sufficient restrictions.

**(b)** Give one parametrisation, including its parameter interval, for $y^2=4x$ with $0\le y\le4$. Show that it covers exactly the required trace.

<!-- /task:check-curve -->

<details markdown="1">
<summary>提示</summary>

按表中的参数顺序追踪相邻点；点之间怎样弯曲，要用只含坐标的方程说明。(b) 可以用一个坐标的数值作新参数，再算出另一个坐标。

</details>

<details markdown="1">
<summary>解答与检查</summary>

**(a)** 从 $t=y-1$ 得 $x=(y-2)^2$，且 $0\le y\le3$。从 $(4,0)$ 沿下支向顶点 $(0,2)$ 移动，再沿上支到 $(1,3)$；三个标记点都包含。$x\ge0$ 单独不足以限定这段曲线，必须保留 $y$ 的范围。用 $(1,1)$ 检查第一段，$(1,3)$ 检查第二段；两点有相同 $x$，但参数不同。

**(b)** 一种选择是 $x=u^2$、$y=2u$、$0\le u\le2$。消参得到 $y^2=4x$，且 $y$ 恰好从 $0$ 到 $4$。反过来，对任意允许的点，取 $u=y/2$ 就落在给定区间，所以没有漏掉轨迹。也可取 $x=u^2/4$、$y=u$、$0\le u\le4$。

</details>

</section>

## 参数求导 {#parametric-differentiation}

分别求 $x$ 和 $y$ 随参数变化的速度。前者是“每单位参数的横向变化”，后者是“每单位参数的纵向变化”。斜率要的是纵向变化除以横向变化，所以应把这两个变化率相除。链式法则把这个关系写成：

$$\frac{dy}{dt}=\frac{dy}{dx}\frac{dx}{dt},\qquad
\boxed{\frac{dy}{dx}=\frac{\frac{dy}{dt}}{\frac{dx}{dt}}},\qquad \frac{dx}{dt}\ne0.$$

单独的 $dy/dt$ 只说明纵坐标随参数变多快，斜率 $dy/dx$ 还要考虑同时发生的横向变化。除法前先检查分母：

- 若 $dy/dt=0$ 且 $dx/dt\ne0$，切线水平：这是驻点（stationary point）。
- 若 $dx/dt=0$ 且 $dy/dt\ne0$，切线竖直；斜率不是有限值。
- 若两者都为零，这个商无法给出斜率。要判断切线，应检查曲线本身或考察极限。

<section class="worked-example" markdown="1">

### 例题 5：求斜率并确定竖直切线 {#example-5-find-a-gradient-and-a-vertical-tangent}

**Question:** For $x=t^2$, $y=t-2$, find the gradient at $t=1$ and the point where the gradient is $2$. Are there stationary points?

$$\frac{dx}{dt}=2t,\qquad \frac{dy}{dt}=1,\qquad \frac{dy}{dx}=\frac1{2t}\quad(t\ne0).$$

横坐标是参数的平方，导数为两倍参数；纵坐标是参数减二，导数为 1。用纵向变化率除以横向变化率，得到上式。当 $t=1$ 时，用这个值同时求两个坐标，得到 $(1,-1)$，斜率为 $\boxed{\frac12}$。

若要求斜率为 $2$，先让导数等于这个数，即 $\frac1{2t}=2$，解得 $t=\frac14$。这只是参数值，还不是点；把它代回两条坐标规则，得到 $\boxed{\left(\frac1{16},-\frac74\right)}$。

不存在驻点，因为 $\frac1{2t}$ 永远不为零。当 $t=0$ 时，顶点 $(0,-2)$ 处的切线竖直，为 $\boxed{x=0}$；法线水平，为 $\boxed{y=-2}$。

**检查：**对 $x=(y+2)^2$ 作隐式求导，得到 $1=2(y+2)\frac{dy}{dx}$；当 $t\ne0$ 时，这与参数求导结果一致。

</section>

## 切线与法线 {#tangents-and-normals}

当参数 $t=a$ 时，先求出点 $(x_0,y_0)$ 和切线斜率 $m$，再使用

$$y-y_0=m(x-x_0).$$

若切线斜率有限且非零，法线斜率为 $-\frac1m$。切线水平时法线竖直；切线竖直时法线水平。

<section class="worked-example" markdown="1">

### 例题 6：法线与第二个交点 {#example-6-a-normal-and-a-second-intersection}

**Question:** Find the normal to $x=t^2$, $y=2t$ at $t=1$, then find where it meets the curve again.

同一个参数值给出点 $(1,2)$。横坐标、纵坐标对参数的导数分别为两倍参数和 2，故 $\frac{dy}{dx}=\frac{2}{2t}=\frac1t$。当 $t=1$ 时，切线斜率为 $1$；与它垂直的法线斜率是负倒数 −1，再用已求出的点写直线：

$$y-2=-(x-1),\qquad \boxed{y=3-x}.$$

第二个交点也必须同时在直线和曲线上。把曲线的两个坐标规则代入同一条直线，就把这个条件改成只含参数的方程；移项再分解：

$$2t=3-t^2\quad\Rightarrow\quad(t-1)(t+3)=0.$$

根 $t=1$ 对应原来的点。另一个根为 $t=-3$，所以另一交点是 $\boxed{(9,-6)}$。

**检查：**$-6=3-9$。两个坐标必须由同一个参数值求出。

</section>

<section class="worked-example" markdown="1">

### 例题 7：求一般点处的切线 {#example-7-a-tangent-at-a-general-point}

**Question:** Find the tangent to $x=3\cos\theta$, $y=2\sin\theta$ at $\theta=\alpha$.

这里 α 表示某个选定但还没有给出数值的角；点的两个坐标都用这个角计算。横坐标对角的导数是负三倍正弦，纵坐标的导数是二倍余弦。纵向除以横向得到斜率，再用该点写点斜式。当 $\sin\alpha\ne0$ 时，

$$\frac{dy}{dx}=-\frac{2\cos\theta}{3\sin\theta},\qquad
y-2\sin\alpha=-\frac{2\cos\alpha}{3\sin\alpha}(x-3\cos\alpha).$$

先乘以 $3\sin\alpha$，再将含坐标的项移到左侧：

$$3y\sin\alpha-6\sin^2\alpha=-2x\cos\alpha+6\cos^2\alpha,$$

$$2x\cos\alpha+3y\sin\alpha=6(\cos^2\alpha+\sin^2\alpha)=6.$$

两边除以 $6$：

$$\boxed{\frac{x\cos\alpha}{3}+\frac{y\sin\alpha}{2}=1.}$$

这个框出的形式也适用于 $\sin\alpha=0$：当 $\alpha=0$ 时切线为 $x=3$；当 $\alpha=\pi$ 时切线为 $x=-3$。不要在除以零之后再处理这些竖直切线，应单独检查。

**检查：**代入点 $(3\cos\alpha,2\sin\alpha)$，左边等于 $1$。当 $\alpha=\frac\pi2$ 时，切线为 $y=2$。

</section>

## 驻点 {#stationary-points}

驻点的切线水平。当 $dx/dt\ne0$、可以使用上面的导数比值时，先解 $dy/dt=0$，检查 $dx/dt\ne0$，再代入两条规则求坐标。如果两个参数导数都为零，这个比值就不能判断切线，需要消去参数或求适当的极限来另查。分类时考察 $dy/dx$ 在点两侧的符号，但必须按 $x$ 增大的方向比较，即从图的左边走向右边。参数增大未必向右；若横坐标反而减小，就要反过来读符号顺序。由负变正表示先降后升，是局部极小值；由正变负表示先升后降，是局部极大值。

OxfordAQA MA03 课程说明不要求求参数曲线或隐函数的二阶导数。这里应使用斜率符号的变化来分类。

<section class="worked-example" markdown="1">

### 例题 8：判断驻点类型 {#example-8-classify-a-stationary-point}

**Question:** Find and classify the stationary point of $x=t^3$, $y=(t+2)^2$.

$$\frac{dy}{dx}=\frac{2(t+2)}{3t^2}\quad(t\ne0).$$

分母非零时，商等于零要求分子为零。由分子中的“参数加二”可知，只有 $t=-2$ 时斜率为零；此时 $dx/dt=12\ne0$，所以可以使用这个比率。代入两个坐标规则，得到 $\boxed{(-8,0)}$。

在 $t=-2$ 附近，$x=t^3$ 随着 $t$ 增大而增大。分母 $3t^2$ 为正，因此 $t<-2$ 时斜率为负，$t>-2$ 时斜率为正。这是一个**局部极小值点**。当 $t=0$ 时，$(0,4)$ 处的切线竖直，因此它不是驻点。

**检查：**$y=(t+2)^2\geq0$，且仅当 $t=-2$ 时等号成立。

</section>

## 练习 {#practice}

建议用时约 **30–40 分钟**。第一次尝试时先不要查看解答。

<section class="lesson-check" markdown="1">

### 题目 1 {#question-1-cartesian-equation-and-restrictions}

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

</section>

<section class="lesson-check" markdown="1">

### 题目 2 {#question-2-a-restricted-ellipse}

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

</section>

<section class="lesson-check" markdown="1">

### 题目 3 {#question-3-tangent-and-normal}

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

</section>

<section class="lesson-check" markdown="1">

### 题目 4 {#question-4-stationary-points}

Find and classify the stationary points of $x=t$, $y=t^3-3t$.

<details markdown="1">
<summary>提示</summary>

求出 $dy/dx$，检查每个驻点两侧的符号。要给出坐标，而不只是参数值。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$\frac{dy}{dx}=3t^2-3=0$ 得 $t=\pm1$。由于 $x=t$，横坐标对参数的导数恒为 1，因此两个零点都确实给出水平切线。随着 $t$ 增大，$x$ 也增大，所以可按参数从小到大的顺序读斜率符号。

$\boxed{(-1,2)}$ 是局部极大值点；$\boxed{(1,-2)}$ 是局部极小值点。斜率在 $x=-1$ 处由正变负，在 $x=1$ 处由负变正。

</details>

</section>

<section class="lesson-check" markdown="1">

### 题目 5 {#question-5-two-zero-derivatives}

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

</section>

<section class="lesson-check" markdown="1">

### 题目 6 {#question-6-another-intersection}

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

</section>

<section class="lesson-check" markdown="1">

### 一般点处的直线 {#check-general}

<!-- task:check-general -->

For $x=2\cos t$, $y=3\sin t$, find equations of the tangent and normal at $t=a$. Give forms that include $a=0$ and $a=\pi/2$, and verify these two cases.

<!-- /task:check-general -->

<details markdown="1">
<summary>提示</summary>

先求点与两个参数导数。可以把直线方程中的分母乘掉；这些特殊值处要直接检查水平或竖直方向。

</details>

<details markdown="1">
<summary>解答与检查</summary>

点为 $(2\cos a,3\sin a)$，且 $dx/dt=-2\sin t$、$dy/dt=3\cos t$。当 $\sin a\ne0$ 时，先用比率求切线，再整理：

$$3x\cos a+2y\sin a=6\quad\text{(tangent)}.$$

当 $\sin a$ 与 $\cos a$ 都不为零时，法线斜率是切线斜率的负倒数：

$$m_n=\frac{2\sin a}{3\cos a},\qquad y-3\sin a=\frac{2\sin a}{3\cos a}(x-2\cos a).$$

乘去分母，得到

$$2\sin a(x-2\cos a)-3\cos a(y-3\sin a)=0\quad\text{(normal)}.$$

当 $a=0$ 时，两式给出切线 $x=2$、法线 $y=0$。当 $a=\pi/2$ 时给出切线 $y=3$、法线 $x=0$。两个参数导数不会同时为零，故每个参数值都确定有效切线和法线。代入曲线上该点的坐标，均满足相应直线。

</details>

</section>

## 修复后再试 {#repair-and-retry}

记录你错的是范围、方向、导数比率还是直线；回看对应段落后收起答案，再独立完成新题。

**若只保留一个平方根或凭 x 的增减画箭头：**回看[表与图的对应](#sketching-a-curve)；要追踪整个参数区间。

<section class="lesson-check" markdown="1">

### 重画另一段曲线 {#retry-trace}

<!-- task:retry-trace -->

For $x=4\cos s$, $y=3\sin s$, where $\pi/2\le s\le3\pi/2$, sketch the trace with endpoints and arrows, and give a Cartesian description with restrictions.

<!-- /task:retry-trace -->

<details markdown="1">
<summary>提示</summary>

检查区间两端及 $s=\pi$；再根据余弦符号限制坐标。

</details>

<details markdown="1">
<summary>解答与检查</summary>

轨迹满足

$$\frac{x^2}{16}+\frac{y^2}{9}=1,\qquad x\le0.$$

方向从 $(0,3)$ 经 $(-4,0)$ 到 $(0,-3)$，两个端点均包含。这是完整左半椭圆，既含 $y>0$ 也含 $y<0$；只写正平方根会丢失后半段。

</details>

</section>

**若按 t 增大直接套用极大/极小符号，或把 0/0 当斜率零：**回看[驻点](#stationary-points)的“按 x 增大”条件与[参数导数](#parametric-differentiation)的三种情况。

<section class="lesson-check" markdown="1">

### 判断点的性质 {#retry-tangent}

<!-- task:retry-tangent -->

**(a)** Find and classify the stationary points of $x=-t$, $y=t^3-3t$, and give their normals.

**(b)** For $x=t^3$, $y=2t^3$, determine the tangent at $t=0$ and explain whether the point is stationary.

<!-- /task:retry-tangent -->

<details markdown="1">
<summary>提示</summary>

在 (a) 中，增大 $x$ 会使 $t$ 减小。(b) 可回到直角坐标曲线判断，而不能代入未定义的比率。

</details>

<details markdown="1">
<summary>解答与检查</summary>

**(a)** $dy/dx=3-3t^2$，所以 $t=\pm1$，且 $dx/dt=-1\ne0$。按 $x$ 增大，$(-1,-2)$ 处斜率由负变正，是局部极小值；$(1,2)$ 处由正变负，是局部极大值。法线分别为 $x=-1$ 与 $x=1$。也可用 $y=-x^3+3x$ 检查分类。

**(b)** 两个参数导数在 $t=0$ 都为零，不能据此确定斜率。但消参得到 $y=2x$，覆盖所有实数 $x$；因此切线为 $y=2x$，斜率 $2$，不是驻点。

</details>

</section>

## 稍后回顾 {#later-review-section}

学完积分后，先不看本页示范完成下面任务，再核对你保留的参数条件。

<section class="lesson-check" markdown="1">

### 连接轨迹与直线 {#later-review}

<!-- task:later-review -->

The curve $x=t^2$, $y=t^3-3t$ has $-2\le t\le2$. Find every parameter value giving a horizontal or vertical tangent. Give each point and its tangent and normal. Mark these points and the direction of increasing $t$ on a sketch, supported by an ordered table.

<!-- /task:later-review -->

<details markdown="1">
<summary>提示</summary>

先列两个参数导数，并分别检查谁为零。表中可选 $t=-2,-1,0,1,2$，不要把不同参数对应的同一 $x$ 当作同一个点。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$dx/dt=2t$，$dy/dt=3t^2-3$。水平切线对应 $t=\pm1$，两个点为 $(1,2)$ 和 $(1,-2)$：切线分别为 $y=2$ 和 $y=-2$，法线均为 $x=1$。竖直切线对应 $t=0$，其 $dy/dt=-3\ne0$，点为 $(0,0)$，切线 $x=0$、法线 $y=0$。

| $t$ | $-2$ | $-1$ | $0$ | $1$ | $2$ |
|---|---|---|---|---|---|
| $(x,y)$ | $(4,-2)$ | $(1,2)$ | $(0,0)$ | $(1,-2)$ | $(4,2)$ |

箭头依照表的先后，而不是一直向右画。形状还可用 $y^2=x(x-3)^2$、$0\le x\le4$ 核对；在 $(3,0)$ 有两个参数值，点沿两个不同方向经过这里，曲线在此相交。这两条经过的曲线部分称为分支。表只是路线证据，不能把点之间直接连成折线当光滑曲线。若错误重现，返回[轨迹重试](#retry-trace)或[点的性质重试](#retry-tangent)。

</details>

</section>

## 快速参考 {#quick-reference}

| 任务 | 方法 | 检查 |
|---|---|---|
| 直角坐标方程 | 代入或使用恒等式消去参数 | 保留范围限制和排除值 |
| 草图 | 描点、求截距，并使用直角坐标方程 | 标出参数增大时的方向 |
| 斜率 | $(dy/dt)/(dx/dt)$ | 检查 $dx/dt\ne0$ |
| 切线或法线 | 先求点和斜率 | 水平线和竖直线要分别处理 |
| 驻点 | 解 $dy/dt=0$，并要求 $dx/dt\ne0$ | 给出两个坐标并分类 |
| 进一步求交点 | 把参数坐标代入直线方程 | 排除原来的点，并检查参数范围 |
{: .wide-table}

**你应当能够：**消去参数、画出允许的曲线、求斜率、切线和法线，并求出驻点及其类型。

**学习路径：**[上一节：求导](/zh/alevel/a2-mathematics/differentiation/) · [下一节：积分：方法选择](/zh/alevel/a2-mathematics/integration/) · [返回纯数学主题索引](/zh/alevel/a2-mathematics/)。


**下一步：**能从参数范围独立确定轨迹和直线后，进入[积分：方法选择](/zh/alevel/a2-mathematics/integration/)。保留本页[稍后回顾](#later-review)作为返回位置。范围依据：[9660 大纲 v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf)，P2.3 与 P2.6；实读 January 2025 MA03 [QP](https://aqamat.alevelclouds.com/25_01_QP_P2.pdf) Q13 及配套 [MS](https://aqamat.alevelclouds.com/25_01_MS_P2.pdf)，参考的是求导、求点、直线与消参的过程要求。本页题目均为自拟题。
