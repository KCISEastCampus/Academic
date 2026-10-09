---
title: 数值方法
layout: subjects
mathjax: true
grade: a2
subject: a2-mathematics
lang: zh-CN
translation_of: /alevel/a2-mathematics/numerical-methods/
permalink: /zh/alevel/a2-mathematics/numerical-methods/
toc_headings: h2
study_page: true
---

[纯数学](/zh/alevel/a2-mathematics/) · P2.9 数值方法（numerical methods）

定位方程的根（root），通过迭代（iteration）改进近似值，并用相应的纵坐标（ordinate）估算定积分（definite integral）。

- **学习：**从[定位根](#locating-roots)开始，然后学习[迭代](#iteration)和[数值积分](#numerical-integration)。
- **作业帮助：**检查函数的连续性（continuity）、重排方式（rearrangement）、条带（strip）的宽度，以及求积公式所需的函数值位置。
- **复习：**先在不看解答的情况下完成[练习](#practice)。用[快速参考](#quick-reference)检查你的设置。

教材：第 8 章，第 8.1–8.3 节（第 114–123 页，印刷页码）。本课介绍教材中的迭代法、中点纵坐标法（mid-ordinate rule）和辛普森法则（Simpson's rule）。梯形法则（trapezium rule）属于先前学过的内容，并非本课的重点。

**开始前：**你应当掌握函数图像、求导、计算器操作和[定积分](/zh/alevel/a2-mathematics/integration-applications/)的知识。三角函数使用弧度制（radians）。

所有例题与练习题均为自编题，并非官方真题。建议练习时间仅供参考；题目没有官方分值。

## 定位根 {#locating-roots}

将方程写成 $f(x)=0$。若 $f$ 在 $[a,b]$ 上**连续（continuous）**，且 $f(a)$ 和 $f(b)$ 异号（opposite signs），那么 $a$ 和 $b$ 之间至少有一个根。

若要证明某个区间内存在根，应给出两个端点处的函数值，说明函数连续，并解释函数值变号（change of sign）。若要证明该区间内恰有一个根，还需要更多信息，例如函数在整个区间上严格递增。

### 例题 1 — 证明区间内有根 {#example-1--show-a-root-lies-in-an-interval}

**Question:** Show that $x^3-x-1=0$ has a root between $1$ and $2$, then locate it in an interval of width $0.01$.

令 $f(x)=x^3-x-1$。这是多项式，因此连续。又因为

$$f(1)=-1,\qquad f(2)=5,$$

端点函数值异号，所以 $(1,2)$ 内有一个根。

在该区间内试取数值，得到

$$f(1.32)=-0.020032,\qquad f(1.33)=0.022637.$$

因此根位于 $\boxed{(1.32,1.33)}$ 内，该区间宽度为 $0.01$。

**检查：**导数 $f'(x)=3x^2-1>0$ 在整个区间 $[1,2]$ 上均成立。因此 $f$ 在这个区间内严格递增，区间内的根唯一。

**常见错误：**当函数不连续时，仅凭端点函数值异号就断定区间内有根。例如，$f(x)=\frac1x$ 在 $-1$ 和 $1$ 处的函数值异号，但 $f$ 在 $0$ 处无定义，而且没有根。

函数值没有变号，并不能证明区间内无根。例如，$x^2$ 在 $0$ 处有根，但在根的两侧都为正。

## 迭代 {#iteration}

将 $f(x)=0$ 重排（rearrangement）为 $x=g(x)$。从近似值 $x_0$ 出发，计算

$$x_{n+1}=g(x_n).$$

每次计算的输出都是下一步的输入。**下一步计算要保留计算器的完整精度。**除非题目要求每步都取近似值，否则只对最终报告的数值进行四舍五入。

教材常从 $x_1$ 开始编号。本课从 $x_0$ 开始；请按题目使用的下标编号。

### 例题 2 — 进行迭代并检查精度 {#example-2--iterate-and-check-the-reported-accuracy}

**Question:** Use $x_{n+1}=\sqrt[3]{x_n+1}$ with $x_0=1$ to find the root of $x^3-x-1=0$ to $3$ decimal places.

这个重排是有效的，因为由 $x^3=x+1$ 可得 $x=\sqrt[3]{x+1}$。

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

这些数值表明，根为 $x=1.325$（精确到小数点后 $3$ 位）。使用原函数检查相应的舍入区间（rounding interval）：

$$f(1.3245)\approx-0.000929319,$$

$$f(1.3255)\approx0.003337556.$$

唯一的根位于这两个数之间。这个区间内的每个数舍入后均为 $\boxed{1.325}$，精确到小数点后 $3$ 位。

**常见错误：**认为连续两个近似值舍入后相同就能证明精度。它们只能提示答案；要验证精度，应找到一个合适的变号区间。

### 收敛与发散 {#convergence-and-divergence}

若连续的近似值逐渐接近根，则迭代**收敛**（convergence）；若它们逐渐远离根，则迭代**发散**（divergence）。同一个方程的不同重排方式，迭代表现可能不同。

在根 $\alpha$ 附近，$\lvert g'(x)\rvert<1$ 是一个有用的局部收敛（local convergence）条件。应从足够接近根的数值开始，并保证迭代始终处于合适的定义域内。只检查一个无关点处的导数是不够的。

- 若 $g'$ 在根附近为正，迭代值可能从根的一侧逐步接近。
- 若 $g'$ 在根附近为负，迭代值可能在根的两侧交替变化，但仍然收敛。
- 若 $\lvert g'(\alpha)\rvert>1$，附近的起始值通常会逐渐远离根。
- 若 $\lvert g'(\alpha)\rvert=1$，这个判据不能判断迭代行为。

对于例题 2，

$$g'(x)=\frac{1}{3(x+1)^{2/3}}.$$

在 $[1,2]$ 上，该导数为正且小于 $1$，并且 $g$ 将该区间映射到自身。因此，起始值 $1$ 是合适的。

### 例题 3 — 有效的重排也可能失败 {#example-3--a-valid-rearrangement-can-fail}

**Question:** Investigate $x_{n+1}=x_n^3-1$ with $x_0=1$ for the same equation $x^3-x-1=0$.

重排为 $x=x^3-1$ 在代数上是成立的。但在根 $\alpha\approx1.325$ 附近，

$$g'(x)=3x^2,\qquad g'(\alpha)\approx5.27>1.$$

迭代得到的前几项为

$$x_0=1,\quad x_1=0,\quad x_2=-1,\quad x_3=-2,\quad x_4=-9.$$

这些数值逐渐远离所求的根。**应改变重排方式**，而不是只继续计算这个数列的更多项。

### 阶梯图（staircase diagram）与蛛网图（cobweb diagram） {#staircase-and-cobweb-diagrams}

在同一组坐标轴上画出 $y=g(x)$ 和 $y=x$。两图像的交点满足 $g(x)=x$，所以它们是该迭代的**不动点（fixed point）**。

1. 从 $x_0$ 出发，在 $x$ 轴上标出起点，竖直向上到 $y=g(x)$；此时高度为 $x_1=g(x_0)$。
2. 水平移动到 $y=x$。此时两个坐标都为 $x_1$。
3. 再竖直移动到曲线，求出 $x_2$；随后水平移动到直线。
4. 重复上述步骤，并标明移动方向。若步骤逐渐靠近交点，表示收敛；若逐渐远离交点，则表示发散。

![阶梯图和蛛网图：迭代步骤逐渐接近 y=g(x) 与 y=x 的交点](/assets/img/numerical-iteration.svg)

上图使用例题 2 中的 $g(x)=\sqrt[3]{x+1}$，起始值为 $x_0=1$。各步形成**阶梯图**，逐渐接近不动点 $\alpha\approx1.325$。

下图使用 $g(x)=\frac2{x+1}$，起始值为 $x_0=0.4$。后续数值约为 $1.429$、$0.824$、$1.097$ 和 $0.954$。它们在不动点 $1$ 两侧交替变化，形成逐渐缩小的**蛛网图**。这个迭代用于求方程 $x^2+x-2=0$ 的正根。

**检查：**图示可以说明迭代行为，但不能单独证明答案精确到指定位数；应使用原方程检查舍入区间。

## 数值积分（numerical integration） {#numerical-integration}

将 $[a,b]$ 分成 $n$ 个宽度相等的**条带**（strip），每个条带的宽度为

$$h=\frac{b-a}{n}.$$

**纵坐标**（ordinate）表示竖直高度 $y=f(x)$。两种求积法使用不同位置处的高度。它们用于估算定积分；若曲线与坐标轴相交，要求总面积，必须在交点处分段，并分别处理正负号。

### 中点纵坐标法 {#the-mid-ordinate-rule}

使用每个条带中心（midpoint）处的高度。若条带边界为 $x_i=a+ih$，则中点为 $x_{i+1/2}=a+(i+\frac12)h$，对应高度为 $y_{i+1/2}=f(x_{i+1/2})$。

$$\int_a^b f(x)\,dx\approx h\left(y_{1/2}+y_{3/2}+\cdots+y_{n-1/2}\right).$$

$n$ 个条带对应 $n$ 个中点高度。将这些高度相加，再乘以 $h$。

![四个宽度为 0.5 的矩形近似表示 y=x^2 在 0 到 2 之间的面积，每个矩形的高度取该条带中点处的函数值。](/assets/img/numerical-mid-ordinate.svg)

### 例题 4 — 取中点，不取端点 {#example-4--choose-the-midpoints-not-the-endpoints}

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

### 辛普森法则 {#simpsons-rule}

使用各条带边界处的纵坐标，包括两个端点。$n+1$ 个纵坐标对应 $n$ 个条带。辛普森法则以两个条带为一组，因此 **$n$ 必须是偶数**，且**纵坐标的个数必须是奇数**。

对于等间距纵坐标 $y_i=f(a+ih)$，

$$\begin{aligned}
I\approx\frac h3\big[&(y_0+y_n)\\
&+4(y_1+y_3+\cdots+y_{n-1})\\
&+2(y_2+y_4+\cdots+y_{n-2})\big].
\end{aligned}$$

两个端点的权重（weight）为 $1$。内部权重按 $4,2,4,2,\ldots,4$ 交替。

### 例题 5 — 使用权重 {#example-5--apply-the-weights}

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

### 例题 6 — 根据表格计算 {#example-6--work-from-a-table}

**Question:** Use Simpson's rule to estimate the integral from $0$ to $2$ for a function with the following ordinates.

| $x$ | 0 | 0.5 | 1 | 1.5 | 2 |
|---|---|---|---|---|---|
| $y$ | 1 | 1.4 | 2.1 | 3.5 | 5.2 |

五个纵坐标对应四个条带，因此 $h=0.5$：

$$\begin{aligned}I\approx\frac{0.5}{3}\big[&(1+5.2)\\&+4(1.4+3.5)+2(2.1)\big].\end{aligned}$$

$$\boxed{I\approx5}.$$

**检查：**表中位置等距，且条带数为偶数。没有函数或中点处的函数值时，该表格无法提供使用相同四个条带进行中点估算所需的高度。

**常见错误：**用区间长度除以纵坐标的个数。五个边界纵坐标形成四个条带，不是五个。

## 练习 {#practice}

**独立练习 · 25–35 分钟**

定位根时写出函数值。迭代时记录题目给定的起始下标，并保留计算器完整精度。数值积分时写出 $h$，列出取值位置，并在计算前标明权重。

### Q1 — 定位一个根 {#q1--locate-a-root}

Show that $\ln x+x-2=0$ has a root between $1.55$ and $1.56$. Explain why the root in this interval is unique.

<details markdown="1">
<summary>提示</summary>

令 $f(x)=\ln x+x-2$。检查定义域，并检查区间上 $f'(x)$ 的符号。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$f(1.55)\approx-0.0117451,\qquad f(1.56)\approx0.0046858.$$

函数在 $x>0$ 时连续，因此函数值异号说明 $(1.55,1.56)$ 内有根。此外，在这个区间上 $f'(x)=\frac1x+1>0$，所以该区间内的根唯一。

</details>

### Q2 — 迭代时不要对下一步输入取近似 {#q2--iterate-without-rounding-the-next-input}

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

</details>

### Q4 — 中点纵坐标的位置 {#q4--mid-ordinate-positions}

Use the mid-ordinate rule with $4$ strips to estimate $\displaystyle\int_1^3\ln x\,dx$, giving your estimate to $4$ decimal places.

<details markdown="1">
<summary>提示</summary>

条带宽度为 $0.5$。从中点 $1.25$ 开始，不要用端点 $1$。

</details>

<details markdown="1">
<summary>解答与检查</summary>

中点为 $1.25$、$1.75$、$2.25$ 和 $2.75$。

$$I\approx0.5[\ln1.25+\ln1.75+\ln2.25+\ln2.75].$$

$$\boxed{I\approx1.3026}.$$

精确结果为 $[x\ln x-x]_1^3=3\ln3-2\approx1.29584$。本题中点纵坐标的估算大于定积分的精确值。

</details>

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

**如果答案看起来不对：**检查原方程、起始下标、计算器角度模式、条带数量、取值位置和权重。中间步骤保留更多有效数字，最后按要求取近似值。

**你应当能够：**论证一个根所在的区间，使用并判断迭代方法，验证近似值的精度，并用正确的数据应用两种数值积分法。

**学习路径：**[上一节：微分方程](/zh/alevel/a2-mathematics/differential-equations/) · [下一节：向量](/zh/alevel/a2-mathematics/vectors/)。
