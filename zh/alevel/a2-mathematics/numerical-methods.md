---
title: 数值方法
layout: subjects
mathjax: true
grade: a2
subject: a2-mathematics
lang: zh-CN
translation_of: /alevel/a2-mathematics/numerical-methods/
permalink: /zh/alevel/a2-mathematics/numerical-methods/
toc_headings: h2, h3
reading_layout: true
study_page: true
---

[纯数学](/zh/alevel/a2-mathematics/) · P2.9 数值方法（numerical methods）
{: .lesson-meta}

<div class="lesson-lead" markdown="1">

本课有两个目标：求根时，找出**哪个输入让函数值为零**；数值积分时，用容易计算的小块近似**曲线与横轴之间的带符号面积**。近似值还需要证据支持，不能只看计算器的小数位数。

</div>

按下面的顺序学习，每段先看示范，再自己补一步：

1. [定位根](#locating-roots)：保留一对异号端点，逐步缩小根所在的区间。
2. [迭代](#iteration)：把上一次输出作为下一次输入，再判断它是否接近根。
3. [数值积分](#numerical-integration)：看清取值位置，用矩形或抛物线近似曲线。
{: .lesson-routes}

<div class="lesson-notes" markdown="1">

**先修：**会读函数图像并代入求值（可回补[代入与根的关系](/zh/alevel/as-mathematics/algebra/#l03)）；用[导数判断单调性](/zh/alevel/as-mathematics/differentiation/#l07)，区分[有向积分与总面积](/zh/alevel/a2-mathematics/integration-applications/#area)。Q3 还需要[链式求导](/zh/alevel/a2-mathematics/differentiation/#composite-functions)，Q4 需要[对数函数的积分](/zh/alevel/a2-mathematics/integration/#integrating-a-logarithm)。三角函数使用弧度制。复习时直接做[独立练习](#practice)，需要公式时查[快速参考](#quick-reference)。

*本页示范和练习均为自拟题；提示与解答分别展开。*

</div>

## 1. 定位根：把区间缩小 {#locating-roots}

先想象图像。根是让函数值变成零的输入，对应曲线与横轴相交的位置。若一条连续曲线从横轴下方走到上方，中途就必须经过零：这正是“变号”的作用。它告诉你根在两端之间，还没有告诉你根的精确位置。

将方程写成 $f(x)=0$。若 $f$ 在 $[a,b]$ 上**连续（continuous）**，且 $f(a)$ 和 $f(b)$ 异号（opposite signs），那么 $a$ 和 $b$ 之间至少有一个根。

若要证明某个区间内存在根，应给出两个端点处的函数值，说明函数连续，并解释函数值变号（change of sign）。若要证明该区间内恰有一个根，还需要更多信息，例如函数在整个区间上严格递增。

<section class="worked-example" markdown="1">

### 例题 1 — 证明区间内有根 {#example-1--show-a-root-lies-in-an-interval}

**Question:** Show that $x^3-x-1=0$ has a root between $1$ and $2$, then locate it in an interval of width $0.01$.

令 $f(x)=x^3-x-1$。这是多项式，因此连续。又因为

$$f(1)=-1,\qquad f(2)=5,$$

端点函数值异号，所以 $(1,2)$ 内有一个根。

**怎样选下一个试值？**下面用逐位递增试探演示一种可复现的选择；不是先知道答案才挑 $1.32$ 和 $1.33$，也不是唯一可用的搜索法。

**第一轮：**已知根在 $(1,2)$，从 $1.1$ 起每次增加 $0.1$，计算到首次出现异号端点：

| $x$ | $f(x)=x^3-x-1$ |
|---|---|
| 1.1 | -0.769 |
| 1.2 | -0.472 |
| 1.3 | -0.103 |
| 1.4 | 0.344 |

从 $1.1$ 到 $1.3$ 都为负，到 $1.4$ 首次变正。因此保留 $(1.3,1.4)$，舍去其余部分。

**第二轮：**从新的左端点向右，每次增加 $0.01$：

| $x$ | $f(x)$ |
|---|---|
| 1.31 | -0.061909 |
| 1.32 | -0.020032 |
| 1.33 | 0.022637 |

现在 $f(1.32)<0<f(1.33)$，且函数连续，所以根位于 $\boxed{(1.32,1.33)}$，区间宽度为 $0.01$。每一轮都保留一对异号端点；若试值恰好使 $f(x)=0$，就已经找到精确根。

**检查：**导数 $f'(x)=3x^2-1>0$ 在整个区间 $[1,2]$ 上均成立。因此 $f$ 在这个区间内严格递增，区间内的根唯一。

</section>

**常见错误：**当函数不连续时，仅凭端点函数值异号就断定区间内有根。例如，$f(x)=\frac1x$ 在 $-1$ 和 $1$ 处的函数值异号，但 $f$ 在 $0$ 处无定义，而且没有根。

函数值没有变号，并不能证明区间内无根。例如，$x^2$ 在 $0$ 处有根，但在根的两侧都为正。

<section class="lesson-check" markdown="1">

#### 停下来试一试：再缩小一位 {#check-refine-bracket}


<!-- task:refine-bracket -->

For $f(x)=x^3-x-1$, start from $(1.32,1.33)$ and locate the root in an interval of width $0.001$. Show the trial values you use and state why the interval contains a root.

<!-- /task:refine-bracket -->

<details markdown="1">
<summary>提示</summary>

从 $1.321$ 开始，每次增加 $0.001$，直到与左端点异号。区间宽度本身不是小数位数的证明。

</details>

<details markdown="1">
<summary>解答与检查</summary>

| $x$ | $f(x)$ |
|---|---|
| 1.321 | -0.015800839 |
| 1.322 | -0.011561752 |
| 1.323 | -0.007314733 |
| 1.324 | -0.003059776 |
| 1.325 | 0.001203125 |

多项式连续且在原区间严格递增。异号端点给出唯一根在 $(1.324,1.325)$；但这个区间跨过三位小数的舍入边界 $1.3245$，所以还不能证明三位小数答案。

</details>

</section>

## 2. 迭代：把输出送回输入 {#iteration}

先把它看成重复使用的运算规则。给规则一个输入，算出输出，再把这个输出送回同一条规则。若数值逐渐停在某个位置，输入和输出就趋于相同；这个位置叫不动点。为了让不动点也是所求的根，先把原方程等价改写成“输入＝规则的输出”。

将 $f(x)=0$ 重排（rearrangement）为 $x=g(x)$。从近似值 $x_0$ 出发，计算

$$x_{n+1}=g(x_n).$$

每次计算的输出都是下一步的输入。**下一步计算要保留计算器的完整精度。**除非题目要求每步都取近似值，否则只对最终报告的数值进行四舍五入。

教材常从 $x_1$ 开始编号。本课从 $x_0$ 开始；请按题目使用的下标编号。

<section class="worked-example" markdown="1">

### 例题 2 — 进行迭代并检查精度 {#example-2--iterate-and-check-the-reported-accuracy}

**Question:** Use $x_{n+1}=\sqrt[3]{x_n+1}$ with $x_0=1$ to find the root of $x^3-x-1=0$ to $3$ decimal places.

这个重排是有效的，因为由 $x^3=x+1$ 可得 $x=\sqrt[3]{x+1}$。

**先看前两步怎样产生。**起始值不是第一次输出：

$$x_0=1,\qquad x_1=g(x_0)=\sqrt[3]{1+1}=\sqrt[3]{2}\approx1.25992105.$$

$$x_2=g(x_1)=\sqrt[3]{\sqrt[3]{2}+1}\approx1.31229384.$$

<details markdown="1">
<summary>继续计算：完整迭代记录</summary>

| $n$ | $x_n$，显示到小数点后 8 位 |
|---|---|
| 0 | 1.00000000 |
| 1 | 1.25992105 |
| 2 | 1.31229384 |
| 3 | 1.32235382 |
| 4 | 1.32426874 |
| 5 | 1.32463263 |
| 6 | 1.32470175 |
| 7 | 1.32471488 |
| 8 | 1.32471737 |

</details>

这些数值提示三位小数答案为 $1.325$，但还需独立验证。三位小数的末位单位为 $0.001$，半个单位为 $0.0005$，因此候选值的舍入边界是

$$1.325-0.0005=1.3245,\qquad1.325+0.0005=1.3255.$$

用原函数检查这两个边界，而不是只看迭代表是否“稳定”：

$$f(1.3245)\approx-0.000929319,$$

$$f(1.3255)\approx0.003337556.$$

唯一的根位于这两个数之间。这个区间内的每个数舍入后均为 $\boxed{1.325}$，精确到小数点后 $3$ 位。

</section>

**常见错误：**认为连续两个近似值舍入后相同就能证明精度。它们只能提示答案；要验证精度，应找到一个合适的变号区间。

### 把迭代画成图 {#staircase-and-cobweb-diagrams}

在同一组坐标轴上画出 $y=g(x)$ 和 $y=x$。两图像的交点满足 $g(x)=x$，所以它们是该迭代的**不动点（fixed point）**。

1. 从 $x_0$ 出发，在 $x$ 轴上标出起点，沿竖直方向移动到 $y=g(x)$；此时高度为 $x_1=g(x_0)$。
2. 水平移动到 $y=x$。此时两个坐标都为 $x_1$。
3. 再竖直移动到曲线，求出 $x_2$；随后水平移动到直线。
4. 重复上述步骤，并标明移动方向。若步骤逐渐靠近交点，表示收敛；若逐渐远离交点，则表示发散。

图为局部放大，起点 $(x_0,0)$ 在图框下方；初始竖线从下边界进入。

第二次输入是完整的 $x_1$，不是重新输入 $1$，也不是先把 $x_1$ 舍入为 $1.26$。下面把这两次计算画成图；字母标记的位置与紧接的坐标表对应。

![例题 2 的首两次迭代：A、C 在曲线上，B、D 在 y=x 上；依次竖直求输出、水平把输出变为下一输入。](/assets/img/numerical-iteration-steps.svg){: width="653" height="499" style="aspect-ratio: 653 / 499"}

为什么还要画直线？曲线上 A 点的纵坐标是刚算出的输出。水平移到 B 点，纵坐标不变；因为 B 在对角线上，它的横坐标也等于这个输出。这样，原来的输出就变成了下一次的输入。对角线负责“换输入”，不是另一条要代入的迭代规则。

| 点 | 坐标 | 含义 |
|---|---|---|
| A | $(x_0,x_1)$ | 竖直移到曲线，读出 $x_1=g(x_0)$ |
| B | $(x_1,x_1)$ | 水平移到 $y=x$，新横坐标是 $x_1$ |
| C | $(x_1,x_2)$ | 再移到曲线，读出 $x_2=g(x_1)$ |
| D | $(x_2,x_2)$ | 再移到直线，下一次输入是 $x_2$ |

<section class="lesson-check" markdown="1">

#### 停下来试一试：接上第三步 {#check-next-iteration}


<!-- task:next-iteration -->

Using the unrounded $x_2$, calculate $x_3=\sqrt[3]{x_2+1}$ to $8$ decimal places. On the step diagram, give the coordinates of the next point on the curve and the next point on $y=x$ after $D=(x_2,x_2)$.

<!-- /task:next-iteration -->

<details markdown="1">
<summary>提示</summary>

把上一次完整输出整体放进立方根内；竖直移动时横坐标不变，水平移动时纵坐标不变。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$x_3=\sqrt[3]{\sqrt[3]{\sqrt[3]{2}+1}+1}\approx1.32235382.$$

$$E=(x_2,x_3),\qquad F=(x_3,x_3).$$
E 位于曲线上，F 位于直线上。若把 $1.31229384$ 当作精确的 $x_2$，只是使用了显示值；迭代时应继续保留内部精度。

</details>

</section>

上图把[例题 2 的数值迭代](#example-2--iterate-and-check-the-reported-accuracy)画成从一侧靠近根的阶梯。下面换成负斜率的函数，观察为什么“跨到另一侧”不一定是发散。

![g(x)=2/(x+1) 从 x0=0.4 开始的蛛网图；早期四次迭代在不动点 1 两侧交替并缩小。](/assets/img/numerical-cobweb-steps.svg){: width="624" height="461" style="aspect-ratio: 624 / 461"}

这里 $g(x)=\frac2{x+1}$，起始值为 $x_0=0.4$，后续值约为 $1.429$、$0.824$、$1.097$、$0.954$。它求解的是 $x^2+x-2=0$ 的正根，不是前面那个三次方程。第一轮路径用实线和箭头，后续路径用虚线；每次仍然是竖直到曲线、水平到直线。

**检查：**图示可以说明迭代行为，但不能单独证明答案精确到指定位数；应使用原方程检查舍入区间。

### 收敛与发散 {#convergence-and-divergence}

若连续的近似值逐渐接近根，则迭代**收敛**（convergence）；若它们逐渐远离根，则迭代**发散**（divergence）。同一个方程的不同重排方式，迭代表现可能不同。

从图上看：收敛时，相邻步骤逐渐挤向交点；发散时，步骤离交点越来越远。导数表示曲线的局部斜率，用来判断一小段输入偏差会被缩小还是放大；斜率的正负则影响是否换到根的另一侧。

在根 $\alpha$ 附近，$\lvert g'(x)\rvert<1$ 是一个有用的局部收敛（local convergence）条件。应从足够接近根的数值开始，并保证迭代始终处于合适的定义域内。只检查一个无关点处的导数是不够的。

- 若 $g'$ 在根附近为正，迭代值可能从根的一侧逐步接近。
- 若 $g'$ 在根附近为负，迭代值可能在根的两侧交替变化，但仍然收敛。
- 若 $\lvert g'(\alpha)\rvert>1$，附近的起始值通常会逐渐远离根。
- 若 $\lvert g'(\alpha)\rvert=1$，这个判据不能判断迭代行为。

对于例题 2，

$$g'(x)=\frac{1}{3(x+1)^{2/3}}.$$

在 $[1,2]$ 上，该导数为正且小于 $1$，并且 $g$ 将该区间映射到自身。因此，起始值 $1$ 是合适的。

<details id="iteration-extension" markdown="1">
<summary>进一步比较：斜率、误差与迭代快慢</summary>

**为什么斜率有用？**把输入与不动点的差记作小误差 $e_n=x_n-\alpha$。在曲线可作局部直线近似时，下一次误差约为

$$e_{n+1}\approx g'(\alpha)e_n.$$

斜率绝对值小于 1 会缩小小误差，大于 1 会放大；负号使误差换边。这是理解局部判据的直觉，不是对任意起点的保证。

**用同一不动点比较快慢与发散。**下面三种自拟线性模型均有不动点 $1$，都从 $x_0=0.6$ 出发。每幅图显示前三次迭代，坐标比例相同；这样只改变斜率，比较更清楚。

![相同比例的三个迭代图：斜率 0.2 快速靠近 1，0.8 较慢靠近 1，负 1.2 在 1 两侧交替远离。](/assets/img/numerical-iteration-behaviour.svg){: width="1008" height="365" style="aspect-ratio: 1008 / 365"}

| $g(x)$ | $x_0$ | $x_1$ | $x_2$ | $x_3$ |
|---|---|---|---|---|
| $1+0.2(x-1)$ | 0.6 | 0.92 | 0.984 | 0.9968 |
| $1+0.8(x-1)$ | 0.6 | 0.68 | 0.744 | 0.7952 |
| $1-1.2(x-1)$ | 0.6 | 1.48 | 0.424 | 1.6912 |

负斜率不等于发散：前面的蛛网在缩小，这里的负斜率模型却在放大。要同时看符号和绝对值；对于非线性函数，还要检查根附近的行为与实际迭代所在的区间。

</details>

<section class="worked-example" markdown="1">

### 例题 3 — 有效的重排也可能失败 {#example-3--a-valid-rearrangement-can-fail}

**Question:** Investigate $x_{n+1}=x_n^3-1$ with $x_0=1$ for the same equation $x^3-x-1=0$.

重排为 $x=x^3-1$ 在代数上是成立的。但在根 $\alpha\approx1.325$ 附近，

$$g'(x)=3x^2,\qquad g'(\alpha)\approx5.27>1.$$

迭代得到的前几项为

$$x_0=1,\quad x_1=0,\quad x_2=-1,\quad x_3=-2,\quad x_4=-9.$$

这些数值逐渐远离所求的根。**应改变重排方式**，而不是只继续计算这个数列的更多项。

</section>

## 3. 数值积分：把小块加起来 {#numerical-integration}

先想“拼小块”，再记公式。曲线下的积分不方便直接算时，可以把区间切成等宽条带，用简单形状近似每一小段。中点法在条带中心取一个高度，形成矩形；Simpson 在连续两个条带的三个边界点取高度，形成一段抛物线。两法不同的根源是**取在哪里、用什么形状近似**。

将 $[a,b]$ 分成 $n$ 个宽度相等的**条带**（strip），每个条带的宽度为

$$h=\frac{b-a}{n}.$$

**纵坐标**（ordinate）表示竖直高度 $y=f(x)$。两种求积法使用不同位置处的高度。它们用于估算定积分；若曲线与坐标轴相交，要求总面积，必须在交点处分段，并分别处理正负号。

### 中点纵坐标法 {#the-mid-ordinate-rule}

每个矩形的“宽×高”就是这一小块的估计。所有矩形等宽，因此可以先把高度相加，再乘一次宽度；公式中的半下标只是提醒你取条带的中心。

使用每个条带中心（midpoint）处的高度。若条带边界为 $x_i=a+ih$，则中点为 $x_{i+1/2}=a+(i+\frac12)h$，对应高度为 $y_{i+1/2}=f(x_{i+1/2})$。

$$\int_a^b f(x)\,dx\approx h\left(y_{1/2}+y_{3/2}+\cdots+y_{n-1/2}\right).$$

$n$ 个条带对应 $n$ 个中点高度。将这些高度相加，再乘以 $h$。

![四个宽度为 0.5 的矩形近似表示 y=x^2 在 0 到 2 之间的面积，每个矩形的高度取该条带中点处的函数值。](/assets/img/numerical-mid-ordinate.svg){: width="672" height="480" style="aspect-ratio: 672 / 480"}

<section class="worked-example" markdown="1">

#### 例题 4 — 取中点，不取端点 {#example-4--choose-the-midpoints-not-the-endpoints}

**Question:** Estimate $\displaystyle\int_0^2x^2\,dx$ using the mid-ordinate rule with $4$ strips.

条带宽度为 $h=\frac{2-0}{4}=0.5$。中点依次为 $0.25$、$0.75$、$1.25$ 和 $1.75$。

| 中点 $x$ | 高度 $y=x^2$ |
|---|---|
| 0.25 | 0.0625 |
| 0.75 | 0.5625 |
| 1.25 | 1.5625 |
| 1.75 | 3.0625 |

$$\begin{aligned}I&\approx0.5(0.0625+0.5625\\&\qquad+1.5625+3.0625).\end{aligned}$$

$$\boxed{I\approx2.625}.$$

**检查：**定积分的精确值为 $\frac83\approx2.66667$。本题的中点纵坐标结果偏小，但并非所有中点估算都会偏小。

**常见错误：**使用 $0$、$0.5$、$1$ 和 $1.5$。这些是左端点，并非中点。

**改进估计：**将条带数从 $4$ 增加到 $8$，此时 $h=0.25$。重新计算 $0.125$、$0.375$、$\ldots$、$1.875$ 处的高度，得到 $I\approx2.65625$，比 $2.625$ 更接近 $\frac83$：绝对误差（absolute error）从约 $0.04167$ 减少到 $0.01042$。

本例中细分后误差变小。一般应比较细分前后的估计，若已知精确积分，也要比较绝对误差；不能保证每个函数在每次细分后都更准确。

</section>

### 辛普森法则 {#simpsons-rule}

使用各条带边界处的纵坐标，包括两个端点。$n+1$ 个纵坐标对应 $n$ 个条带。辛普森法则以两个条带为一组，因此 **$n$ 必须是偶数**，且**纵坐标的个数必须是奇数**。

**为什么以两个条带为一组？**中点法用矩形；Simpson 用一条通过三个等距点的抛物线近似曲线，再求这条抛物线下的积分。三个点跨越两个宽度为 $h$ 的条带。

![在 0、1、2 处通过 e^x 三个点的抛物线近似；相邻点间距 h，三个点跨两个条带，抛物线与原曲线并非处处重合。](/assets/img/numerical-simpson-pair.svg){: width="634" height="432" style="aspect-ratio: 634 / 432"}

图中用 $h=1$ 展示一对条带；下面例题 5 用 $h=0.5$ 展示两对条带。

一对条带的估计为

$$I_{\mathrm{pair}}\approx\frac h3(y_0+4y_1+y_2).$$

<section class="lesson-check" markdown="1">

#### 停下来试一试：共享端点算几次？ {#check-shared-weight}


<!-- task:shared-weight -->

The first pair of strips contributes $\frac h3(y_0+4y_1+y_2)$ and the next pair contributes $\frac h3(y_2+4y_3+y_4)$. Add them and give the five weights in order. Explain the weight of $y_2$.

<!-- /task:shared-weight -->

<details markdown="1">
<summary>提示</summary>

两组的内部点不同，但 $y_2$ 同时是第一组的右端点和第二组的左端点。不要把求和误认为把面积重叠计算：两组区间只共享边界。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$\begin{aligned}
I&\approx\frac h3[(y_0+4y_1+y_2)+(y_2+4y_3+y_4)]\\
&=\frac h3(y_0+4y_1+2y_2+4y_3+y_4).
\end{aligned}$$
权重为 $1,4,2,4,1$。共享的 $y_2$ 在两个公式中各贡献一次，所以相加为 2；不是因为中间高度需要“算两遍面积”。更多成对条带按同样方式连接。

</details>

</section>

**把成对公式接起来。**最外面的两个端点只出现一次；两端之间，每对的中心贡献权重 4，两对共享的边界贡献权重 2。因此得到一般公式：

对于等间距纵坐标 $y_i=f(a+ih)$，

$$\begin{aligned}
I\approx\frac h3\big[&(y_0+y_n)\\
&+4(y_1+y_3+\cdots+y_{n-1})\\
&+2(y_2+y_4+\cdots+y_{n-2})\big].
\end{aligned}$$

两个端点的权重（weight）为 $1$。内部权重按 $4,2,4,2,\ldots,4$ 交替。

<section class="worked-example" markdown="1">

#### 例题 5 — 使用权重 {#example-5--apply-the-weights}

**Question:** Estimate $\displaystyle\int_0^2e^x\,dx$ using Simpson's rule with $4$ strips. Give the estimate to $4$ decimal places.

这里 $h=0.5$，共有 $5$ 个纵坐标。表格显示的数值已取近似；计算时使用计算器的完整精度。

| $i$ | $x_i$ | $y_i=e^{x_i}$ | 权重 |
|---|---|---|---|
| 0 | 0 | 1.000000 | 1 |
| 1 | 0.5 | 1.648721 | 4 |
| 2 | 1 | 2.718282 | 2 |
| 3 | 1.5 | 4.481689 | 4 |
| 4 | 2 | 7.389056 | 1 |

$$I\approx\frac{0.5}{3}\big[(1+e^2)+4(e^{0.5}+e^{1.5})+2e\big].$$

$$\boxed{I\approx6.3912}.$$

**检查：**定积分的精确值为 $e^2-1\approx6.38906$。这里辛普森法则给出的是近似值，并非精确值。

</section>

<details id="integration-comparison" markdown="1">
<summary>比较与细分：同一积分用两种方法</summary>

**改进估计：**使用 $8$ 个条带，此时 $h=0.25$，共有 $9$ 个边界纵坐标，仍按原来的交替权重计算，得到 $I\approx6.389193725$。与 $e^2-1$ 比较，绝对误差从约 $0.00215409$ 减少到 $0.00013763$。细分时，辛普森法则的条带数仍须是偶数。

**同一个积分，两种方法。**沿用例题 5 的 $e^x$、区间和四个条带；中点法改取条带中心，不能直接重用边界高度。

$$\begin{aligned}
M_4&=0.5(e^{0.25}+e^{0.75}+e^{1.25}+e^{1.75})\\
&\approx6.322985533.
\end{aligned}$$

| 条带数 | 中点法估计 | 绝对误差 | Simpson 估计 | 绝对误差 |
|---|---|---|---|---|
| 4 | 6.322985533 | 0.066070566 | 6.391210187 | 0.002154088 |
| 8 | 6.372448212 | 0.016607887 | 6.389193725 | 0.000137626 |

精确值是 $e^2-1$。本例中两法细分后都更准确，且 Simpson 的误差较小；这不是“任何函数都如此”的证明。对本例相同条带数，两法需要的高度位置不同、数量也不同，因此不能把这当成等计算成本比较。Q4 的 $\ln x$ 会检验中点法并非总偏小。

</details>

<section class="worked-example" markdown="1">

#### 例题 6 — 根据表格计算 {#example-6--work-from-a-table}

**Question:** Use Simpson's rule to estimate the integral from $0$ to $2$ for a function with the following ordinates.

| $x$ | 0 | 0.5 | 1 | 1.5 | 2 |
|---|---|---|---|---|---|
| $y$ | 1 | 1.4 | 2.1 | 3.5 | 5.2 |

五个纵坐标对应四个条带，因此 $h=0.5$：

$$\begin{aligned}I\approx\frac{0.5}{3}\big[&(1+5.2)\\&+4(1.4+3.5)+2(2.1)\big].\end{aligned}$$

$$\boxed{I\approx5}.$$

**检查：**表中位置等距，且条带数为偶数。没有函数或中点处的函数值时，该表格无法提供使用相同四个条带进行中点估算所需的高度。

**常见错误：**用区间长度除以纵坐标的个数。五个边界纵坐标形成四个条带，不是五个。

</section>

## 独立练习 {#practice}

**独立练习 · 30–45 分钟**

定位根时写出函数值。迭代时记录题目给定的起始下标，并保留计算器完整精度。数值积分时写出 $h$，列出取值位置，并在计算前标明权重。

<section class="lesson-check" markdown="1">

### Q1 — 定位一个根 {#q1--locate-a-root}

Starting from $[1,2]$, locate a root of $\ln x+x-2=0$ in an interval of width $0.01$. Show how you choose your trial values. Explain why the root in this interval is unique.

<details markdown="1">
<summary>提示</summary>

令 $f(x)=\ln x+x-2$。检查定义域，并检查区间上 $f'(x)$ 的符号。

</details>

<details markdown="1">
<summary>解答与检查</summary>

一种选择是先以 $0.1$ 递增试探，首次变号后保留 $(1.5,1.6)$，再以 $0.01$ 递增：

| $x$ | $\ln x+x-2$ (rounded) |
|---|---|
| 1 | -1 |
| 2 | 0.693147 |
| 1.1 | -0.804690 |
| 1.2 | -0.617678 |
| 1.3 | -0.437636 |
| 1.4 | -0.263528 |
| 1.5 | -0.094535 |
| 1.6 | 0.070004 |
| 1.51 | -0.077890 |
| 1.52 | -0.061290 |
| 1.53 | -0.044732 |
| 1.54 | -0.028218 |
| 1.55 | -0.011745 |
| 1.56 | 0.004686 |

因此保留 $(1.55,1.56)$。也可使用其他给出有效异号区间的搜索过程。

$$f(1.55)\approx-0.0117451,\qquad f(1.56)\approx0.0046858.$$

函数在 $x>0$ 时连续，因此函数值异号说明 $(1.55,1.56)$ 内有根。此外，在这个区间上 $f'(x)=\frac1x+1>0$，所以该区间内的根唯一。

</details>

</section>

<section class="lesson-check" markdown="1">

### Q2 — 计算与精度 {#q2--iterate-without-rounding-the-next-input}

For $x^3+x-1=0$, use $x_{n+1}=\frac{1}{1+x_n^2}$ with $x_0=0.5$.

**(a)** Show that the rearrangement is valid. **(b)** Give $x_1$, $x_2$ and $x_3$ to $6$ decimal places. **(c)** Continue to estimate the root to $3$ decimal places, and verify the reported accuracy by a sign change.

<details markdown="1">
<summary>提示</summary>

因式分解等式 $x^3+x=x(1+x^2)$。(c) 用原多项式检验舍入区间两端的函数值。

</details>

<details markdown="1">
<summary>解答与检查</summary>

**(a)** $x(1+x^2)=1$ 可得 $x=\frac1{1+x^2}$。对于实数 $x$，分母始终为正。

**(b)** 每一步都保留完整精度，得到

$$x_1=0.800000,\quad x_2=0.609756,\quad x_3=0.728968.$$

**(c)** 继续迭代得到根的近似值 $\boxed{x\approx0.682}$，保留小数点后 $3$ 位。令 $f(x)=x^3+x-1$，

$$f(0.6815)\approx-0.001982607,$$

$$f(0.6825)\approx0.000412766.$$

多项式连续，且 $f'(x)=3x^2+1>0$ 对所有实数 $x$ 成立。因此唯一根位于这个舍入区间内，验证了 $0.682$ 保留小数点后 $3$ 位的结果。

</details>

</section>

<section class="lesson-check" markdown="1">

### Q3 — 比较两种重排方式 {#q3--compare-two-rearrangements}

For the root $\alpha\approx0.6823$ of $x^3+x-1=0$, compare the local convergence of

$$g_1(x)=\frac1{1+x^2},\qquad g_2(x)=1-x^3.$$

Sketch a cobweb diagram for $g_1$ starting at $x_0=0.7$. Use at least three iterations to show how the values approach the intersection with $y=x$.

<details markdown="1">
<summary>提示</summary>

分别求两个函数的导数，并在 $\alpha$ 附近比较导数的绝对值。导数为负时，迭代仍可能收敛。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$g_1'(x)=-\frac{2x}{(1+x^2)^2},\qquad g_2'(x)=-3x^2.$$

在 $x=0.6823$ 处，$\lvert g_1'\rvert\approx0.635<1$，但 $\lvert g_2'\rvert\approx1.397>1$。

从足够接近的起始值开始，第一种迭代会收敛。其导数为负，说明迭代值可能在根的两侧交替。第二种迭代中，根附近的起始值通常会逐渐远离根。

画图时，取 $x_1\approx0.6711$、$x_2\approx0.6895$ 和 $x_3\approx0.6778$。画出竖直移至 $y=g_1(x)$ 的线段，再画水平移至 $y=x$ 的线段。它们在 $\alpha$ 两侧交替并逐渐靠近。

![Q3 解答自检：g1=1/(1+x^2) 从 0.7 开始的前三次蛛网迭代，在约 0.6823 两侧交替。](/assets/img/numerical-practice-cobweb.svg){: width="605" height="442" style="aspect-ratio: 605 / 442"}

</details>

</section>

<section class="lesson-check" markdown="1">

### Q4 — 中点纵坐标的位置 {#q4--mid-ordinate-positions}

Use the mid-ordinate rule with $4$ strips to estimate $\displaystyle\int_1^3\ln x\,dx$, giving your estimate to $4$ decimal places.

Repeat with $8$ strips. Compare both estimates with the exact integral and explain whether increasing the number of strips improved the estimate.

<details markdown="1">
<summary>提示</summary>

条带宽度为 $0.5$。从中点 $1.25$ 开始，不要用端点 $1$。

使用 $8$ 个条带时，$h=0.25$；从 $1.125$ 开始，取 $8$ 个中点高度。比较绝对误差时，使用未舍入的估计值。

</details>

<details markdown="1">
<summary>解答与检查</summary>

中点为 $1.25$、$1.75$、$2.25$ 和 $2.75$。

$$I\approx0.5[\ln1.25+\ln1.75+\ln2.25+\ln2.75].$$

$$\boxed{I\approx1.3026}.$$

精确结果为 $[x\ln x-x]_1^3=3\ln3-2\approx1.29584$。本题中点纵坐标的估算大于定积分的精确值。

使用 $8$ 个条带时，中点为 $1.125$、$1.375$、$\ldots$、$2.875$，得到 $I\approx1.297564013$，保留 $4$ 位小数为 $\boxed{1.2976}$。绝对误差从约 $0.00680837$ 减少到 $0.00172715$，所以这次细分改进了估计。

</details>

</section>

<section class="lesson-check" markdown="1">

### Q5 — 辛普森法则与精确值检查 {#q5--simpsons-rule-and-an-exact-check}

Use Simpson's rule with $4$ strips to estimate $\displaystyle\int_0^2x^3\,dx$. Compare your result with the exact integral.

<details markdown="1">
<summary>提示</summary>

使用五个边界纵坐标，位置为 $0$、$0.5$、$1$、$1.5$ 和 $2$，对应权重为 $1,4,2,4,1$。

</details>

<details markdown="1">
<summary>解答与检查</summary>

当 $h=0.5$ 时，高度为 $0$、$0.125$、$1$、$3.375$ 和 $8$。

$$\begin{aligned}I\approx\frac{0.5}{3}\big[&(0+8)\\&+4(0.125+3.375)+2(1)\big].\end{aligned}$$

$$\boxed{I\approx4}.$$

精确积分为 $[\frac{x^4}{4}]_0^2=4$。两者相同：对于等距纵坐标，辛普森法则对三次多项式给出精确结果。不要因此认为它对所有函数都精确。

</details>

</section>

<section class="lesson-check" markdown="1">

### Q6 — 判断数据是否适用 {#q6--decide-whether-the-data-is-suitable}

**(a)** Four boundary ordinates are given at $x=0$, $1$, $2$, $3$. Can you use the standard Simpson's rule with all four?

**(b)** Five boundary ordinates are given at $x=0$, $0.4$, $1$, $1.5$, $2$. Is their count enough to justify using the standard rule?

**(c)** Five equally spaced boundary ordinates cover $0\le x\le2$. How many strips are there, and what is $h$? Does the table also give a mid-ordinate estimate with those same strips?

<details markdown="1">
<summary>提示</summary>

同时检查条带数量和宽度是否相等。边界处的高度不是中点高度。

</details>

<details markdown="1">
<summary>解答与检查</summary>

**(a)** 不可以。四个边界纵坐标形成三个条带，是奇数个条带。标准辛普森法则需要成对的条带。

**(b)** 不可以。虽然五个纵坐标形成偶数个条带，但各条带宽度不相等。标准公式要求纵坐标等距。

**(c)** 有四个条带，宽度为 $h=\frac{2}{4}=0.5$。使用这些条带进行中点估算，需要 $0.25$、$0.75$、$1.25$ 和 $1.75$ 处的高度，而边界表格没有提供这些数据。

</details>

</section>

<section class="lesson-check" markdown="1">

### Q7 — 读取表格 {#q7--choose-from-the-data}

<!-- task:choose-data -->

A function is sampled at the positions below. The values are constructed teaching data.

| $x$ | 0.2 | 0.6 | 1.0 | 1.4 | 1.8 |
|---|---|---|---|---|---|
| $f(x)$ | 0.8 | 1.1 | 1.4 | 1.2 | 0.9 |

Estimate $\displaystyle\int_0^2 f(x)\,dx$ using a rule justified by these data. State your sample positions, strip boundaries and width, show your working, and explain what the table does and does not justify.

<!-- /task:choose-data -->

<details markdown="1">
<summary>提示</summary>

画出区间和给定位置。它们是五个等宽条带的中心，还是覆盖整个区间的边界？先检查位置，再检查个数。

</details>

<details markdown="1">
<summary>解答与检查</summary>

五个条带的边界为 $0,0.4,0.8,1.2,1.6,2$，给定位置正好是各条带中点。因此选中点纵坐标法：

$$h=0.4,\qquad I\approx0.4(0.8+1.1+1.4+1.2+0.9)=\boxed{2.16}.$$
五个等距值并不足够：标准 Simpson 需要整个积分区间的等距边界高度。这里没有 $0$ 与 $2$ 处的值；若把这五点当成边界，覆盖的只是 $[0.2,1.8]$，不能据此估计所问的整个区间。没有额外假设时不能补造端点。



</details>

</section>

## 纠错后再尝试 {#repair-and-retry}

先完成 Q1–Q7。按错误选择下面的任务，收起原答案后重新作答；提示不算独立完成。

<section class="lesson-check" markdown="1">

### 检查证据 {#retry-evidence}

<!-- task:retry-evidence -->

For each claim, decide whether the evidence is sufficient and justify your decision.

**(a)** $f(x)=1/x$ has opposite signs at $-1$ and $1$, so it has a zero between them.

**(b)** $p(x)=x(x^2-1)$ changes sign between $-2$ and $2$, so it has exactly one zero there.

**(c)** An iteration for $q(x)=x^3+x-1=0$ prints $0.6823$ on two successive lines. Does that alone prove the root is $0.6823$ to four decimal places? Supply a justified rounding bracket.

<!-- /task:retry-evidence -->

<details markdown="1">
<summary>提示</summary>

将存在性、唯一性和舍入精度分开检查。使用异号论证之前先检查连续性。

</details>

<details markdown="1">
<summary>解答与检查</summary>

**(a)** 不充分：$f$ 在 $0$ 处无定义，不能在整个区间上使用连续变号论证；它没有零点。回看[变号的条件](#locating-roots)。

**(b)** 不充分：连续性只能保证至少一个零点，不能保证唯一。这里 $p(x)=0$ 的解为 $-1,0,1$。回看 [Q1 的唯一性论证](#q1--locate-a-root)。

**(c)** 不充分：重复显示的数字不能给出真根的范围。所需舍入区间为 $[0.68225,0.68235)$。

$$q(0.68225)\approx-0.000186461,\qquad q(0.68235)\approx0.000053199.$$

连续性与异号端点保证内部有根；$q'(x)=3x^2+1>0$ 保证唯一。因此真根舍入为 $0.6823$。若只引用计算器显示，回看[精度核验](#example-2--iterate-and-check-the-reported-accuracy)。

</details>

</section>

<section class="lesson-check" markdown="1">

### 重新作图 {#retry-graph}

<!-- task:retry-graph -->

Sketch $y=g(x)=\frac12x+1$ and $y=x$. Starting at $x_0=0$, draw three complete graphical iterations. Label each point on the curve and each point on the diagonal with its coordinates. Explain how a horizontal step supplies the next input and describe the approach to the intersection.

<!-- /task:retry-graph -->

<details markdown="1">
<summary>提示</summary>

先计算三个输出，再区分 $(x_n,x_{n+1})$ 与 $(x_{n+1},x_{n+1})$。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$x_1=1,\qquad x_2=1.5,\qquad x_3=1.75.$$

从 $(0,0)$ 开始，交替竖直、水平连接

$$ (0,1)\to(1,1)\to(1,1.5)\to(1.5,1.5)\to(1.5,1.75)\to(1.75,1.75). $$

第一、三、五个点在曲线上，其余点在对角线上。水平移动保持输出高度；到对角线时，同一个数也成为横坐标，即下一输入。阶梯位于不动点 $(2,2)$ 下方，从左侧逐步接近。由 $x_{n+1}-2=\frac12(x_n-2)$ 可知误差每次减半。只列数字、没有两条图线及连接线段，尚未完成作图。若交换了坐标，回看[坐标解释](#staircase-and-cobweb-diagrams)。

</details>

</section>

<section class="lesson-check" markdown="1">

### 解释近似模型 {#retry-geometry}

<!-- task:retry-geometry -->

**(a)** For $\displaystyle\int_0^1(2-x)\,dx$, sketch the curve and the two rectangles used by the mid-ordinate rule with two equal strips. Label each width and height, then evaluate the estimate. Explain why adding heights alone is not an integral estimate.

**(b)** For Simpson's rule on six equal strips, write the contributions of the three adjacent pairs of strips before collecting terms. Explain the weight of each shared boundary ordinate.

<!-- /task:retry-geometry -->

<details markdown="1">
<summary>提示</summary>

(a) 取条带中心；(b) 每对条带的权重为 $1,4,1$，检查哪些端点被相邻两对共用。

</details>

<details markdown="1">
<summary>解答与检查</summary>

**(a)** 边界为 $0,0.5,1$，矩形宽均为 $0.5$，高度为 $f(0.25)=1.75$、$f(0.75)=1.25$。分别在对应条带内画矩形，顶边在条带中心与直线相交。

$$I\approx0.5(1.75+1.25)=1.5.$$

宽乘高才近似每块有向面积；只加高度遗漏了横向尺度。直线使每个条带内多出与缺少的三角形恰好抵消，所以此题结果精确；曲线一般不能保证这样抵消。模型不清楚时回看[中点法解释](#the-mid-ordinate-rule)。

**(b)** 边界高度记为 $y_0,\ldots,y_6$，

$$\frac h3[(y_0+4y_1+y_2)+(y_2+4y_3+y_4)+(y_4+4y_5+y_6)]
=\frac h3[y_0+4y_1+2y_2+4y_3+2y_4+4y_5+y_6].$$

两对条带共用的内部边界 $y_2,y_4$ 各以权重 $1$ 出现两次，故合并为 $2$；最外侧端点只出现一次。若把所有内部纵坐标都赋权重 $4$，回看[成对条带解释](#simpsons-rule)。

</details>

</section>

<section class="lesson-check" markdown="1">

### 重新判断数据 {#retry-data}

<!-- task:retry-data -->

Heights are now supplied at $0,0.5,1,1.5,2$ for an integral over $[0,2]$. Without calculating, choose a rule that uses these values directly, state its strip width and weights, and identify the extra sample positions needed to use the other rule on the same four strips.

<!-- /task:retry-data -->

<details markdown="1">
<summary>提示</summary>

判断给定位置是条带边界还是中心。

</details>

<details markdown="1">
<summary>解答与检查</summary>

选 Simpson 法则：四个等宽条带覆盖完整所问区间，$h=0.5$，权重为 $1,4,2,4,1$。相同条带的中点法还需要 $0.25,0.75,1.25,1.75$ 处的值。若只凭数据个数选法，回看 [Q7 的位置检查](#q7--choose-from-the-data)。

</details>

</section>

## 稍后回顾 {#later-review-section}

<section class="lesson-check" markdown="1">

### 稍后回顾：选择与论证 {#later-review}

<!-- task:later-review -->

Return after studying the next topic, with notes and previous answers closed. Record your first attempt before opening help.

**(a)** Solve $\ln x+x-2=0$ numerically on $[1,2]$ to two decimal places. Choose and explain your numerical procedure; justify existence, uniqueness and the final rounding.

**(b)** Constructed measurements of a function are $f(0)=1$, $f(0.5)=2$, $f(1)=3$, $f(1.5)=2$, $f(2)=1$. Estimate $\displaystyle\int_0^2 f(x)\,dx$ using a rule justified by these data. Show the positions, width and weights, and explain whether this table alone proves your estimate is accurate to two decimal places.

<!-- /task:later-review -->

<details markdown="1">
<summary>提示</summary>

(a) 可用变号搜索，不必一定迭代；(b) 区分规则可用与误差有保证。

</details>

<details markdown="1">
<summary>解答与检查</summary>

**(a)** 令 $F(x)=\ln x+x-2$。它在 $[1,2]$ 上连续；$F(1)=-1$，$F(2)=\ln2>0$。又有 $F'(x)=1/x+1>0$，所以根唯一。可先试 $1.5$（负）、$1.6$（正），再试 $1.55$（负）、$1.56$（正）。为保证两位小数，检查舍入界点：

$$F(1.555)\approx-0.00352445,\qquad F(1.565)\approx0.01288582.$$

唯一根严格位于这两点之间，故舍入为 $1.56$。只停在 $1.55$ 至 $1.56$ 的区间还不足以证明此舍入。也可选择迭代法，但最终精度仍须论证。有困难时回看[舍入论证](#example-2--iterate-and-check-the-reported-accuracy)。

**(b)** 四个等宽条带覆盖完整区间，可选 Simpson 法则。

$$h=0.5,\qquad I\approx\frac{0.5}{3}[1+1+4(2+2)+2(3)]=4.$$

另一种合理选择是两个条带的中点法：边界为 $0,1,2$，宽为 $1$，中心为 $0.5,1.5$，估计为 $1(2+2)=4$。须说明使用的分割，不必用完所有数据。Simpson 计算的给定位置是边界，不是这四个条带的中心。表格没有限制采样点之间的变化，因此不能保证两位小数；还需要函数或误差的额外信息。选法有误时回看[数据条件](#q6--decide-whether-the-data-is-suitable)；若把估计改变当作精度证明，回看[细分比较](#integration-comparison)。

</details>

</section>

## 快速参考 {#quick-reference}

| 任务 | 第一步 | 必要检查 |
|---|---|---|
| 定位一个根 | 写出 $f(x)=0$；计算区间端点处的函数值 | 连续性和异号端点保证至少有一个根 |
| 证明区间内根唯一 | 检查函数图像或导数 | 严格递增或严格递减可以证明唯一性 |
| 进行迭代 | 重排为 $x=g(x)$；使用 $x_{n+1}=g(x_n)$ | 保留完整精度；在合适的定义域内开始 |
| 检查局部收敛 | 在根附近求 $g'(x)$ | $\lvert g'\rvert<1$ 是有用的局部判据；等于 1 时需进一步分析 |
| 验证小数位数 | 在舍入边界处计算原函数值 | 在要求的舍入范围内找出变号区间 |
| 中点纵坐标法 | 求 $h$ 和 $n$ 个中点高度 | 取条带中心，不取边界 |
| 辛普森法则 | 求 $h$ 和 $n+1$ 个边界纵坐标 | 等间距、偶数个条带；权重为 $1,4,2,\ldots,4,1$ |
{: .wide-table}

**如果答案看起来不对：**检查原方程、起始下标、计算器角度模式、条带数量、取值位置和权重。中间步骤保留更多有效数字，最后按要求取近似值。

**你应当能够：**论证一个根所在的区间，使用并判断迭代方法，验证近似值的精度，用正确的数据应用两种数值积分法，并比较增加条带数前后的估计值。

<details id="lesson-sources" markdown="1">
<summary>教材、范围与题目来源</summary>

教材：第 8 章，第 8.1–8.3 节（第 114–123 页，印刷页码）。本课介绍教材中的迭代法、中点纵坐标法（mid-ordinate rule）和辛普森法则（Simpson's rule）。梯形法则（trapezium rule）属于先前学过的内容，并非本课的重点。

所有例题与练习题均为自编题，并非官方真题。建议练习时间仅供参考；题目没有官方分值。

范围按 OxfordAQA 9660 / MA03 P2.9。作答步骤参考 January 2025 MA03 Q2(a)、Q2(b)(i–ii) 及配套评分标准；本课没有复用这些真题。

[OxfordAQA 9660 specification，P2.9，印刷第 24 页](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf)。

</details>

**下一步：**学完下一主题后回到[稍后回顾](#later-review)，先不看笔记完成混合任务。

**学习路径：**[上一节：微分方程](/zh/alevel/a2-mathematics/differential-equations/) · [下一节：向量](/zh/alevel/a2-mathematics/vectors/)。
