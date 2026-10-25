---
title: AS 数学
layout: subjects
mathjax: true
reading_layout: true
grade: as
subject: as-mathematics
lang: zh-CN
translation_of: /alevel/as-mathematics/
permalink: /zh/alevel/as-mathematics/
toc_headings: "#learning-route, #pure-foundations, #further-pure, #statistics, #mechanics, #how-to-study, #mixed-review, #later-review, #sources-and-scope, #legacy-reference"
---

## 从这里开始 {#learning-route}

从代数与图像出发，逐步学习微积分、统计和力学。需要先具备分数、展开与因式分解的基础；第一次学习请按下方顺序，复习时可直接选择主题。

**[开始第一课：代数](/zh/alevel/as-mathematics/algebra/)**

OxfordAQA AS 数学 9660：MA01（P1）与 MA02（PSM1）。中文页保留英文练习题，也可切换至英文课程。

## 纯数学基础 · MA01 {#pure-foundations}

先学代数和坐标，再用它们理解微积分与数列。

1. **[代数](/zh/alevel/as-mathematics/algebra/)** — 选择恰当的精确形式，解方程，并追踪图像变换。
2. **[坐标几何](/zh/alevel/as-mathematics/coordinate-geometry/)** — 联系直线方程、斜率与交点。
3. **[微分](/zh/alevel/as-mathematics/differentiation/)** — 求梯度和驻点，并说明函数如何变化。
4. **[积分与近似](/zh/alevel/as-mathematics/integration/)** — 由导数还原函数，解释有向面积，并用梯形法近似。
5. **[数列与级数](/zh/alevel/as-mathematics/sequences/)** — 选择等差或等比模型，说明求和方法与收敛条件。

## 继续学习纯数学 · MA02 {#further-pure}

把代数与图像方法用于圆、周期变化和指数关系。

1. **[圆](/zh/alevel/as-mathematics/circles/)** — 把圆的方程与圆心、半径和切线联系起来。
2. **[三角函数](/zh/alevel/as-mathematics/trigonometry/)** — 用弧度、恒等式和图像找全指定区间内的解。
3. **[指数与对数](/zh/alevel/as-mathematics/exponentials-logarithms/)** — 解指数方程，并检查对数的适用条件。

## 统计 · MA02 {#statistics}

先描述事件，再建立随机变量和分布模型。

1. **[概率](/zh/alevel/as-mathematics/probability/)** — 区分条件概率与独立性，选择恰当的概率关系。
2. **[离散随机变量](/zh/alevel/as-mathematics/random-variables/)** — 建立概率分布，计算期望与方差。
3. **[二项分布](/zh/alevel/as-mathematics/binomial/)** — 判断二项模型是否适用，并计算相应概率。

## 力学 · MA02 {#mechanics}

先描述运动，再解释运动为何改变。变加速运动需要微积分基础。

1. **[匀加速直线运动](/zh/alevel/as-mathematics/constant-acceleration/)** — 约定正方向，把运动方程与图像联系起来。
2. **[变加速直线运动](/zh/alevel/as-mathematics/variable-acceleration/)** — 用微积分联系位移、速度和加速度。
3. **[力与牛顿运动定律](/zh/alevel/as-mathematics/forces/)** — 画受力图、选择研究对象，并建立运动方程。
4. **[动量与冲量](/zh/alevel/as-mathematics/momentum/)** — 在明确的系统内使用有向动量与冲量。

## 怎样学完一课 {#how-to-study}

1. 阅读目标、概念与示范，理解为什么选择这个方法。
2. 在纸上完成支架题；卡住时先展开提示，再看解答。
3. 收起解答，独立完成英文题。检查方法、条件与结果，再完成纠错和再尝试。
4. 能解释方法并独立完成再尝试后，用课末的“下一课”继续；否则回到对应示范。

练习均为自拟题，提示与解答分别展开。show／prove 需要推理，hence 需要使用前面结果；计算器核验不能替代题目要求的过程。

## 学完路线后，连接旧知识 {#mixed-review}

这些题把之前学过的知识放在一起，不先告诉你该用哪种方法。学完对应路线再做，首次作答先关掉帮助。全部为自拟题。

<div class="lesson-check" markdown="1">

### 任务 A {#mixed-foundations}

**Question:** For $0\le x\le3$, let $f(x)=x^3-3x^2$. Find its greatest and least values, with reasons. Find the area between its graph and the x-axis on this interval.

<details markdown="1">
<summary>提示</summary>

既检查驻点，也检查区间端点；算面积前先判断曲线在哪一侧。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$f'(x)=3x(x-2)$ 在 $0<x<2$ 为负、在 $2<x<3$ 为正。检查 $f(0)=0,f(2)=-4,f(3)=0$，所以最大值为 0，在 0 和 3 取得；最小值为 −4，在 2 取得。

整个区间里 $x^2(x-3)\le0$，因此：

$$A=-\int_0^3(x^3-3x^2)\,dx=-\left[\frac{x^4}4-x^3\right]_0^3=\frac{27}4.$$

漏掉端点，回看[可行范围](/zh/alevel/as-mathematics/differentiation/#l07-concept)；符号出错，回看[面积](/zh/alevel/as-mathematics/integration/#l08-concept)。

</details>

</div>

<div class="lesson-check" markdown="1">

### 综合任务 B {#mixed-further}

**Question:** A circle has diameter endpoints $A=(-3,0)$ and $B=(5,4)$. Find every real c for which $y=2x+c$ meets the circle at exactly one point, and find each contact point. Translate the circle by $(2,-1)$ and give its new equation.

<details markdown="1">
<summary>提示</summary>

先用两个端点建立圆，再把直线与圆的方程连起来。“只有一个交点”对方程有什么要求？

</details>

<details markdown="1">
<summary>解答与检查</summary>

圆心是直径中点 $(1,2)$，半径平方为 $4^2+2^2=20$，所以圆的方程是 $(x-1)^2+(y-2)^2=20$。代入直线方程：

$$\begin{aligned}
(x-1)^2+(2x+c-2)^2&=20,\\
5x^2+(4c-10)x+(c-2)^2-19&=0.
\end{aligned}$$

只有一个交点，就只有一个重复的实根。判别式为：

$$\begin{aligned}
\Delta&=(4c-10)^2\\
&\quad-20[(c-2)^2-19]\\
&=400-4c^2.
\end{aligned}$$

令它为零，得到 $c=10$ 或 $-10$。

当 $c=10$ 时，重根是 $x=-3$，接触点为 $(-3,4)$；当 $c=-10$ 时，重根是 $x=5$，接触点为 $(5,0)$。两点都满足对应的直线和圆方程。平移把圆心移到 $(3,1)$，半径不变，新方程为 $(x-3)^2+(y-1)^2=20$。

圆的建立出错时，回看[圆心和半径](/zh/alevel/as-mathematics/circles/#l14-concept)；单交点判断出错时，回看[交点个数](/zh/alevel/as-mathematics/coordinate-geometry/#l04-worked)。

</details>

</div>

<div class="lesson-check" markdown="1">

### 任务 C {#mixed-statistics}

**Question:** In a constructed group of 60 equally likely records, 12 are in both A and B, 18 in A only, 8 in B only and 22 in neither. Find $P(A\mid B)$ and decide whether A and B are independent. Four records are then selected independently with replacement. Let X count those in B. Find its mean, variance and $P(X\ge1)$, stating why your model applies.

<details markdown="1">
<summary>提示</summary>

分清条件概率的分母与重复抽取时每次成功的概率。

</details>

<details markdown="1">
<summary>解答与检查</summary>

B 有 $12+8=20$ 条记录，所以 $P(A\mid B)=12/20=3/5$。另外 $P(A)=30/60=1/2$，两者不同，因此 A 与 B 不独立。

每次新抽取以“属于 B”为成功，概率为 $p=20/60=1/3$。次数固定，每次分为两类，独立放回抽取让 p 保持不变。因此 $X\sim\mathrm{Bin}(4,1/3)$，得到：

$$E(X)=\frac43,\qquad\operatorname{Var}(X)=\frac89,\qquad P(X\ge1)=1-\left(\frac23\right)^4=\frac{65}{81}.$$

参照群体混淆，回看[条件概率](/zh/alevel/as-mathematics/probability/#l18-worked)；模型或尾部出错，回看[二项试验](/zh/alevel/as-mathematics/binomial/#l21-concept)。

</details>

</div>

<div class="lesson-check" markdown="1">

### 任务 D {#mixed-mechanics}

**Question:** A 2 kg block moves right at $2\,\mathrm{m\,s^{-1}}$ on a horizontal surface. For 4 s it has a constant horizontal driving force of 10 N right and a constant resistance of 2 N left. Find its acceleration, distance travelled and resultant impulse. State your positive direction and check the impulse in two ways.

<details markdown="1">
<summary>提示</summary>

只看这个物体与有正负号的合力；比较动量变化和合力乘时间。

</details>

<details markdown="1">
<summary>解答与检查</summary>

取向右为正。竖直方向受力平衡；水平方向 $10-2=2a$，所以 $a=4\,\mathrm{m\,s^{-2}}$。4 秒后速度为 $2+4(4)=18\,\mathrm{m\,s^{-1}}$，全过程速度为正，因此路程等于位移：

$$s=2(4)+\frac12(4)(4^2)=40\,\mathrm m.$$

合冲量为 $m(v-u)=2(18-2)=32\,\mathrm{N\,s}$，向右。另用合力乘时间，$(10-2)(4)=32\,\mathrm{N\,s}$，结果一致。按错误回看[单物体受力方程](/zh/alevel/as-mathematics/forces/#l24-concept)、[运动量](/zh/alevel/as-mathematics/constant-acceleration/#l22-concept)或[冲量](/zh/alevel/as-mathematics/momentum/#l25-concept)。

</details>

</div>

## 之后一次学习，再回来试 {#later-review}

学过其他内容后，再回来做对应题目，先不要翻旧解答。写出记得的推理，再沿错误链接修补具体步骤。记下是否用过帮助；这与刚看完答案就做对不是同一种表现。

<div class="lesson-check" markdown="1">

### 回顾 A {#later-foundations}

**Question:** A curve has gradient $2x-4$ and passes through $(0,1)$. Find its equation, all x for which $y\le1$, and the area enclosed by this curve and $y=1$.

<details markdown="1">
<summary>提示</summary>

先找出这条具体的曲线，再确定围成区域的交点。

</details>

<details markdown="1">
<summary>解答与检查</summary>

积分得 $y=x^2-4x+C$，已知点给出 $C=1$。于是 $y\le1$ 等价于 $x(x-4)\le0$，所以 $0\le x\le4$。这段区间里，直线在曲线上方：

$$A=\int_0^4[1-(x^2-4x+1)]\,dx=\left[2x^2-\frac{x^3}3\right]_0^4=\frac{32}3.$$

求导并代入已知点检查曲线。常数遗漏，做[恢复函数的重试](/zh/alevel/as-mathematics/integration/#l08-independent-function)；区间出错，回看[二次式](/zh/alevel/as-mathematics/algebra/#l02-concept)，再在之后一次学习中重做本题。

</details>

</div>

<div class="lesson-check" markdown="1">

### 回顾 B {#later-further}

**Question:** Solve $2\sin^2\theta=\cos\theta$ for $0\le\theta\le2\pi$. Give the angles to 3 decimal places and justify every algebraic value you keep or reject.

<details markdown="1">
<summary>提示</summary>

先用同一种三角量，再从它的值找回所有允许的角。

</details>

<details markdown="1">
<summary>解答与检查</summary>

设 $c=\cos\theta$，并用 $\sin^2\theta=1-c^2$，得到 $2c^2+c-2=0$，所以 $c=(-1\pm\sqrt{17})/4$。负号对应的值小于 −1，不可能是余弦；另一个值介于 0 与 1 之间。令 $\alpha=\arccos((\sqrt{17}-1)/4)$，两个角为 $\alpha,2\pi-\alpha$，约为 $0.675,5.608$ 弧度。两个端点都不满足原方程。

代数出错，回看[求根公式](/zh/alevel/as-mathematics/algebra/#l02-concept)；漏角，回看[完整周期](/zh/alevel/as-mathematics/trigonometry/#l16-concept)。关掉旧解答，再做[新区间方程](/zh/alevel/as-mathematics/trigonometry/#l16-retry)。

</details>

</div>

<div class="lesson-check" markdown="1">

### 回顾 C {#later-statistics}

**Question:** X has values 0, 1 and 3 with probabilities $1/2,1/3,1/6$. Let $C=X^2$. Two independent copies of C are called $C_1,C_2$, and $T=C_1+C_2-1$. Find the mean and variance of C and T, showing which rules apply.

<details markdown="1">
<summary>提示</summary>

平方变换先列新数值；求总量时才使用独立性。

</details>

<details markdown="1">
<summary>解答与检查</summary>

C 取 0、1、9，概率与原来相同。因此 $E(C)=1/3+9/6=11/6$，$E(C^2)=1/3+81/6=83/6$，得到：

$$\operatorname{Var}(C)=\frac{83}6-\left(\frac{11}6\right)^2=\frac{377}{36}.$$

由独立性，$E(T)=11/6+11/6-1=8/3$，$\operatorname{Var}(T)=377/36+377/36=377/18$。常数改变平均值，但不改变分散程度。平方变换出错，回看[变换后的数值](/zh/alevel/as-mathematics/random-variables/#l19-concept)；方差相加出错，回看[独立结果](/zh/alevel/as-mathematics/random-variables/#l20-concept)，再使用那里的重试题。

</details>

</div>

<div class="lesson-check" markdown="1">

### 回顾 D {#later-mechanics}

**Question:** For $0\le t\le3$, a 1.5 kg particle has $a=2-2t$, $v(0)=0$ and $s(0)=3$ in SI units. Find its displacement, distance and resultant impulse over the interval. Explain whether constant-acceleration equations could replace your method.

<details markdown="1">
<summary>提示</summary>

使用两个初始条件；回到起点不一定代表路程为零。

</details>

<details markdown="1">
<summary>解答与检查</summary>

积分得 $v=2t-t^2+C$，速度条件给出 $C=0$。再积分得 $s=t^2-t^3/3+D$，位置条件给出 $D=3$。速度在 $t=2$ 从正变负，各位置为 $s(0)=3,s(2)=13/3,s(3)=3$。

位移为 0；路程为 $(13/3-3)+(13/3-3)=8/3$ m。因为 $v(3)=-3$，合冲量为 $1.5(-3-0)=-4.5\,\mathrm{N\,s}$，方向与正方向相反。加速度随 t 改变，不能对整段运动套用匀加速方程。

常数或转向出错，回看[变加速示范](/zh/alevel/as-mathematics/variable-acceleration/#l23-worked)；冲量符号出错，回看[有向动量](/zh/alevel/as-mathematics/momentum/#l25-concept)，再关掉帮助完成那里的新重试。

</details>

</div>

## 来源与考试范围 {#sources-and-scope}

<details markdown="1">
<summary>查看大纲、评分材料与计算器规定</summary>

依据[当前资格页](https://www.oxfordaqa.com/qualification/international-as-and-a-level-mathematics-9660/)及[官方大纲 v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf)，并参考已记录的 MA01／MA02 January 2025 成对原卷与 Final MS 阅读。各学习页列对应评分证据，不把数据矛盾的 MA02 Q7(b) 当正常模型使用。AS assets 内两份大纲保留为旧 v5.1 存档，当前范围应看官方链接。

符合规定的图形计算器允许使用，不等于批准任意 CAS 或插件配置，见[现行 Handbook](https://www.oxfordaqa.com/wp-content/uploads/2026/09/oxfordaqa-exams-administration-handbook.pdf)。本次未重新验证实体机、考试模式或逐条核对公式册收录。

</details>

## 旧版参考资料 {#legacy-reference}

旧索引仅供查阅及兼容原有书签，学习与练习请使用上方新课程。

<details markdown="1">
<summary>展开旧主题索引与英文速查链接</summary>

<h2 id="assessment-structure">考核结构</h2>

<a href="/alevel/as-mathematics/#assessment-structure" hreflang="en">英文速查：Assessment Structure</a>。


<h2 id="31-international-as-unit-p1-pure-maths">P1：纯数学</h2>

<a href="/alevel/as-mathematics/#31-international-as-unit-p1-pure-maths" hreflang="en">英文速查：3.1 International AS Unit P1 (Pure Maths)</a>。

- <span id="p11-algebra"></span><a href="/alevel/as-mathematics/#p11-algebra" hreflang="en">P1.1：代数（P1.1: Algebra）</a>
- <span id="surds-and-indices"></span><a href="/alevel/as-mathematics/#surds-and-indices" hreflang="en">根式与指数（Surds and Indices）</a>
- <span id="quadratic-functions"></span><a href="/alevel/as-mathematics/#quadratic-functions" hreflang="en">二次函数（Quadratic Functions）</a>
- <span id="polynomials"></span><a href="/alevel/as-mathematics/#polynomials" hreflang="en">多项式（Polynomials）</a>
- <span id="inequalities-and-simultaneous-equations"></span><a href="/alevel/as-mathematics/#inequalities-and-simultaneous-equations" hreflang="en">不等式与联立方程（Inequalities and Simultaneous Equations）</a>
- <span id="functions-and-graphs"></span><a href="/alevel/as-mathematics/#functions-and-graphs" hreflang="en">函数与图像（Functions and Graphs）</a>
- <span id="p12-coordinate-geometry"></span><a href="/alevel/as-mathematics/#p12-coordinate-geometry" hreflang="en">P1.2：坐标几何（P1.2: Coordinate Geometry）</a>
- <span id="straight-lines"></span><a href="/alevel/as-mathematics/#straight-lines" hreflang="en">直线（Straight Lines）</a>
- <span id="line-relationships"></span><a href="/alevel/as-mathematics/#line-relationships" hreflang="en">直线之间的关系（Line Relationships）</a>
- <span id="p13-differentiation"></span><a href="/alevel/as-mathematics/#p13-differentiation" hreflang="en">P1.3：微分（P1.3: Differentiation）</a>
- <span id="fundamental-concepts"></span><a href="/alevel/as-mathematics/#fundamental-concepts" hreflang="en">基本概念（Fundamental Concepts）</a>
- <span id="applications"></span><a href="/alevel/as-mathematics/#applications" hreflang="en">微分的应用（Applications）</a>
- <span id="p14-integration"></span><a href="/alevel/as-mathematics/#p14-integration" hreflang="en">P1.4：积分（P1.4: Integration）</a>
- <span id="basic-integration"></span><a href="/alevel/as-mathematics/#basic-integration" hreflang="en">基本积分（Basic Integration）</a>
- <span id="definite-integrals-and-applications"></span><a href="/alevel/as-mathematics/#definite-integrals-and-applications" hreflang="en">定积分与应用（Definite Integrals and Applications）</a>
- <span id="p15-sequences-and-series"></span><a href="/alevel/as-mathematics/#p15-sequences-and-series" hreflang="en">P1.5：数列与级数（P1.5: Sequences and Series）</a>
- <span id="sequences"></span><a href="/alevel/as-mathematics/#sequences" hreflang="en">数列（Sequences）</a>
- <span id="series"></span><a href="/alevel/as-mathematics/#series" hreflang="en">级数（Series）</a>

<h2 id="32-international-as-unit-psm1-pure-maths-statistics-and-mechanics">PSM1：纯数学、统计学与力学</h2>

<a href="/alevel/as-mathematics/#32-international-as-unit-psm1-pure-maths-statistics-and-mechanics" hreflang="en">英文速查：3.2 International AS Unit PSM1 (Pure Maths, Statistics and Mechanics)</a>。

- <span id="pp11-circles"></span><a href="/alevel/as-mathematics/#pp11-circles" hreflang="en">PP1.1：圆（PP1.1: Circles）</a>
- <span id="circle-geometry"></span><a href="/alevel/as-mathematics/#circle-geometry" hreflang="en">圆的几何性质（Circle Geometry）</a>
- <span id="pp12-trigonometry"></span><a href="/alevel/as-mathematics/#pp12-trigonometry" hreflang="en">PP1.2：三角函数（PP1.2: Trigonometry）</a>
- <span id="trigonometric-fundamentals"></span><a href="/alevel/as-mathematics/#trigonometric-fundamentals" hreflang="en">三角函数基础（Trigonometric Fundamentals）</a>
- <span id="trigonometric-functions-and-equations"></span><a href="/alevel/as-mathematics/#trigonometric-functions-and-equations" hreflang="en">三角函数与方程（Trigonometric Functions and Equations）</a>
- <span id="pp13-exponentials-and-logarithms"></span><a href="/alevel/as-mathematics/#pp13-exponentials-and-logarithms" hreflang="en">PP1.3：指数与对数（PP1.3: Exponentials and Logarithms）</a>
- <span id="exponential-functions"></span><a href="/alevel/as-mathematics/#exponential-functions" hreflang="en">指数函数（Exponential Functions）</a>
- <span id="logarithmic-functions"></span><a href="/alevel/as-mathematics/#logarithmic-functions" hreflang="en">对数函数（Logarithmic Functions）</a>
- <span id="s11-further-probability"></span><a href="/alevel/as-mathematics/#s11-further-probability" hreflang="en">S1.1：进阶概率（S1.1: Further Probability）</a>
- <span id="probability-fundamentals"></span><a href="/alevel/as-mathematics/#probability-fundamentals" hreflang="en">概率基础（Probability Fundamentals）</a>
- <span id="conditional-probability-and-independence"></span><a href="/alevel/as-mathematics/#conditional-probability-and-independence" hreflang="en">条件概率与独立性（Conditional Probability and Independence）</a>
- <span id="s12-discrete-random-variables"></span><a href="/alevel/as-mathematics/#s12-discrete-random-variables" hreflang="en">S1.2：离散随机变量（S1.2: Discrete Random Variables）</a>
- <span id="probability-distributions"></span><a href="/alevel/as-mathematics/#probability-distributions" hreflang="en">概率分布（Probability Distributions）</a>
- <span id="expectation-and-variance"></span><a href="/alevel/as-mathematics/#expectation-and-variance" hreflang="en">期望与方差（Expectation and Variance）</a>
- <span id="s13-bernoulli-and-binomial-distributions"></span><a href="/alevel/as-mathematics/#s13-bernoulli-and-binomial-distributions" hreflang="en">S1.3：伯努利分布与二项分布（S1.3: Bernoulli and Binomial Distributions）</a>
- <span id="bernoulli-distribution"></span><a href="/alevel/as-mathematics/#bernoulli-distribution" hreflang="en">伯努利分布（Bernoulli Distribution）</a>
- <span id="binomial-distribution"></span><a href="/alevel/as-mathematics/#binomial-distribution" hreflang="en">二项分布（Binomial Distribution）</a>
- <span id="m11-motion-in-a-straight-line-with-constant-acceleration"></span><a href="/alevel/as-mathematics/#m11-motion-in-a-straight-line-with-constant-acceleration" hreflang="en">M1.1：匀加速直线运动（M1.1: Motion in a Straight Line with Constant Acceleration）</a>
- <span id="kinematics-fundamentals"></span><a href="/alevel/as-mathematics/#kinematics-fundamentals" hreflang="en">运动学基础（Kinematics Fundamentals）</a>
- <span id="constant-acceleration-equations"></span><a href="/alevel/as-mathematics/#constant-acceleration-equations" hreflang="en">匀加速运动方程（Constant Acceleration Equations）</a>
- <span id="m12-motion-in-a-straight-line-with-variable-acceleration"></span><a href="/alevel/as-mathematics/#m12-motion-in-a-straight-line-with-variable-acceleration" hreflang="en">M1.2：变加速直线运动（M1.2: Motion in a Straight Line with Variable Acceleration）</a>
- <span id="calculus-in-kinematics"></span><a href="/alevel/as-mathematics/#calculus-in-kinematics" hreflang="en">运动学中的微积分（Calculus in Kinematics）</a>
- <span id="m13-forces-and-newtons-laws"></span><a href="/alevel/as-mathematics/#m13-forces-and-newtons-laws" hreflang="en">M1.3：力与牛顿运动定律（M1.3: Forces and Newton’s Laws）</a>
- <span id="forces-and-equilibrium"></span><a href="/alevel/as-mathematics/#forces-and-equilibrium" hreflang="en">力与平衡（Forces and Equilibrium）</a>
- <span id="m14-momentum-and-impulse"></span><a href="/alevel/as-mathematics/#m14-momentum-and-impulse" hreflang="en">M1.4：动量与冲量（M1.4: Momentum and Impulse）</a>
- <span id="momentum-principles"></span><a href="/alevel/as-mathematics/#momentum-principles" hreflang="en">动量原理（Momentum Principles）</a>

</details>
