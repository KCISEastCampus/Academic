---
title: 力、平衡与摩擦
layout: subjects
mathjax: true
grade: a2
subject: m2
lang: zh-CN
translation_of: /alevel/a2-mathematics/mechanics/forces-equilibrium-and-friction/
permalink: /zh/alevel/a2-mathematics/mechanics/forces-equilibrium-and-friction/
toc_headings: h2
study_page: true
reading_layout: true
---

[A2 力学](/zh/alevel/a2-mathematics/mechanics/) · MA05 · M2.3
{:.lesson-meta}

一本书放在桌上，虽然受到向下的重力，却没有掉下去，因为桌面也在向上支持它。这一课就从这个想法开始：**物体受到哪些力？这些力能不能平衡？**

学完后，你要能画受力图，处理斜着的力，并判断摩擦能否让物体保持静止。

依次学习[一个物体的受力](#force-diagrams)、[分力](#the-resultant-of-coplanar-forces)、[平衡](#concurrent-forces-in-equilibrium)与[摩擦](#friction-and-limiting-equilibrium)。复习时可以直接做[练习](#practice)。

需要的基础是简单方程和直角三角形。忘记了可先看 [AS 受力图](/zh/alevel/as-mathematics/forces/#l24-concept)或[下文的直角三角比值](#triangle-reminder)。
{:.lesson-meta}

下文示范与练习均为自拟题；[来源说明](#sources-and-scope)列明范围与精度约定。
{:.lesson-meta}

## 先选物体，再画它受到的力 {#force-diagrams}

画图前先说清楚研究谁。以桌上的书为例，我们只画**作用在书上的力**：

- 地球向下拉书，这个力叫**重力（weight）**。
- 桌面支持书，把书推离桌面，这个力叫**法向反力（normal reaction）**，也常叫支持力。

“法向”就是垂直于接触面。桌面水平时，支持力向上；墙面竖直时，支持力就水平。它不一定总是向上的。

书也在向下压桌面，但这个力作用在桌面上，不属于书的受力图。书的重力和桌面对书的支持力虽然可以平衡，却不是牛顿第三定律中的一对相互作用力。

小物体的转动不影响题目时，可以把它看成一个点，叫作**质点模型（particle model）**，把各力画在这个点上。杆或梯子则要保留力的真实作用位置，因为还可能转动；[下一课](/zh/alevel/a2-mathematics/mechanics/moments-and-rigid-objects/)会处理这种情况。

| 力 | 怎样判断方向 |
| --- | --- |
| 重力 | 竖直向下 |
| 法向反力 | 垂直接触面，把物体推离表面 |
| 张力（tension） | 沿绷紧的绳，朝绳的另一端拉 |
| 推力（thrust） | 沿受压的杆，推动物体 |
| 摩擦力（friction） | 沿接触面，阻碍滑动或滑动趋势 |
| 外加力 | 按题目指定的方向 |
| 铰链力（hinge force） | 方向未知时，可设两个垂直分量 |

**光滑（smooth）**表示接触面不提供摩擦；**粗糙（rough）**表示可以提供摩擦，但实际摩擦也可能为零。它到底有多大，[后面再算](#friction-and-limiting-equilibrium)。

**合力（resultant）**表示这些力对质点的共同效果，可以用来替代原有各力，不要把它再当作一个额外的力画上去。速度、加速度也不是力。

下文图中的箭头用来表示方向，长度没有按统一的力的比例绘制。

<div class="lesson-check" markdown="1">

### 先试一个物体 {#first-check}

**Question:** A book is at rest on a rough horizontal table. There is no horizontal applied force. Draw the forces acting on the book. A student adds a downward arrow labelled "the book pushes on the table" and says there must be nonzero friction because the table is rough. Assess both suggestions.

<details markdown="1">
<summary>提示</summary>

逐个箭头问：谁施加这个力？谁受到这个力？水平方向有没有另一个力需要平衡？

</details>

<details markdown="1">
<summary>解答与核对</summary>

画向下的重力与向上的支持力，两者大小相等。“书压桌面”的力属于桌面的受力图。这里水平方向不需要其他力来平衡，所以摩擦为零，粗糙面也可以出现这种情况。

如果画入了作用在桌面上的力，回看本节开头，把每个力都说成“……对**书**的力”再判断。

</details>

</div>

## 斜着的力怎样处理 {#the-resultant-of-coplanar-forces}

斜着拉一个把手时，这个拉力既有向右的效果，也有向上的效果。我们用两个**分量（components）**描述它。这不是又加了两个真实的力，而是换一种方式描述同一个拉力。

图中拉力大小为 $P$，与水平正向夹角为 $\theta$。两个分量和原来的力组成一个直角三角形。

![大小为 P 的力斜向右上方，与水平夹角 theta；直角三角形的水平边为 P cos theta，竖直边为 P sin theta。虚线表示投影。](/assets/img/a2-math-mech/force-components-sample.svg)

<span id="triangle-reminder"></span>

在直角三角形中，余弦等于邻边除以斜边，正弦等于对边除以斜边。这里斜边是 $P$，所以

$$\cos\theta=\frac{F_x}{P},\qquad\sin\theta=\frac{F_y}{P}.$$

两边乘以斜边，就得到分量：

$$F_x=P\cos\theta,\qquad F_y=P\sin\theta.$$

如果角是从竖直方向量起，竖直分量才是角旁边的边，应使用余弦。先在草图上找到角，再选式子。

**共面（coplanar）**是指各力位于同一个平面。处理多个力时，要使用同一组互相垂直的方向。这里约定向右、向上为正；向左或向下的分量就带负号。

把所有水平分量相加，得到 $X$；把所有竖直分量相加，得到 $Y$。用单位向量 $\mathbf i$ 表示向右、$\mathbf j$ 表示向上，合力就是

$$\mathbf S=X\mathbf i+Y\mathbf j,\qquad \lvert\mathbf S\rvert=\sqrt{X^2+Y^2}.$$

平方根来自勾股定理。求方向时，先根据正负号画出合力朝哪边，再用分量大小求锐角，最后判断象限。这样不容易把方向弄反。若 $X=0$，非零合力沿竖直方向；若两分量都为零，合力没有方向。

<div class="worked-example" markdown="1">

### 例题 1 — 分量相加并检查象限 {#example-1--add-components-and-check-the-quadrant}

**Question:** Forces $(4\mathbf i+3\mathbf j)\,\mathrm N$, $(-12\mathbf i+7\mathbf j)\,\mathrm N$ and $(2\mathbf i-2\mathbf j)\,\mathrm N$ act on a particle. Find the resultant, its magnitude and its direction. Find the extra force needed for equilibrium.

分别相加两个方向的分量：

$$X=4-12+2=-6,\qquad Y=3+7-2=8.$$

$$\mathbf S=(-6\mathbf i+8\mathbf j)\,\mathrm N,\qquad \lvert\mathbf S\rvert=10\,\mathrm N.$$

合力指向左上方。它与水平负向之间的夹角为

$$\alpha=\tan^{-1}\left(\frac{8}{6}\right)=53.1^\circ.$$

因此从水平正向逆时针量得 $126.9^\circ$，保留一位小数。平衡所需的额外力必须抵消两个分量：

$$\boxed{\mathbf P=(6\mathbf i-8\mathbf j)\,\mathrm N}.$$

**检查：**$\mathbf S+\mathbf P=\mathbf0$。所加力与合力大小相同、方向相反。

**常见错误：**直接报告 $\tan^{-1}(Y/X)$ 得到的负角，不检查象限。

</div>

<div class="worked-example" markdown="1">

### 例题 2 — 分解由角度给定的力 {#example-2--resolve-forces-given-by-angles}

**Question:** Three coplanar forces act on a particle: $10\,\mathrm N$ at $30^\circ$ above the positive horizontal direction, $8\,\mathrm N$ at $150^\circ$ anticlockwise from that direction, and $4\,\mathrm N$ vertically downwards. Find their resultant.

取向右、向上为正：

$$X=10\cos30^\circ+8\cos150^\circ=\sqrt3,$$

$$Y=10\sin30^\circ+8\sin150^\circ-4=5.$$

于是

$$\mathbf S=(\sqrt3\mathbf i+5\mathbf j)\,\mathrm N,$$

$$\lvert\mathbf S\rvert=\sqrt{3+25}=2\sqrt7\,\mathrm N\approx5.29\,\mathrm N.$$

两分量都为正，方向为水平正向上方

$$\theta=\tan^{-1}\left(\frac{5}{\sqrt3}\right)=70.9^\circ$$

，角度保留一位小数。

**检查：**第二个力向左，其水平分量应为负。把三个力的大小相加 $10+8+4$ 会丢失方向信息。

</div>

先关闭帮助，试做 [Q2、Q3](#q2--a-resultant-below-the-negative-horizontal-direction)，再回到[平衡](#concurrent-forces-in-equilibrium)继续。

## 两个方向都要平衡 {#concurrent-forces-in-equilibrium}

力平衡，是指它们合起来不产生加速效果。平衡时加速度为零，所以**每个方向**的合力都为零：

$$\sum F_x=0,\qquad\sum F_y=0.$$

符号 $\sum$ 表示“把这些量加起来”。例如选向右为正，就把向右的分量相加，再减去向左的分量。“总和为零”也就是“向右的总量等于向左的总量”。

平衡可以是一直静止，也可以是速度保持不变。仅仅速率不变还不够：沿圆周运动时，速度方向在变，仍需要合力。

**共点力（concurrent forces）**是指作用线通过同一点的力。这里的例题研究质点。对杆等有大小的刚体，各力平衡后仍可能转动；下一课还要检查力矩。

绷紧的轻绳沿绳拉物体，不能推物体。如果算出了负张力，就说明假设的这种状态无法成立。

<div class="worked-example" markdown="1">

### 例题 3 — 两根绳支承重物 {#example-3--a-load-supported-by-two-strings}

**Question:** A particle of weight $60\,\mathrm N$ is held in equilibrium by two light taut strings. The left string makes $30^\circ$ with the horizontal; the right string makes $60^\circ$. Find their tensions $T_A$ and $T_B$.

![质点受力图：左绳与水平成 30 度、右绳成 60 度，两张力均沿绳向上拉，重力向下](/assets/img/a2-math-mech/two-string-equilibrium.svg)

每根绳沿自身方向把质点拉向另一端。水平方向平衡给出

$$T_B\cos60^\circ-T_A\cos30^\circ=0,$$

$$T_B=\sqrt3T_A.$$

再写竖直平衡并代入：

$$T_A\sin30^\circ+T_B\sin60^\circ=60,$$

$$\frac{T_A}{2}+\frac{3T_A}{2}=60.$$

因此

$$\boxed{T_A=30\,\mathrm N},\qquad\boxed{T_B=30\sqrt3\,\mathrm N\approx52.0\,\mathrm N}.$$

**检查：**向上的分量为 $15\,\mathrm N$ 和 $45\,\mathrm N$，总和等于重力，两张力也均为正。

**常见错误：**写 $T_A+T_B=60$。平衡重力的是张力的竖直分量。

</div>

<div class="worked-example" markdown="1">

### 例题 4 — 从几何求角度 {#example-4--find-the-angle-from-the-geometry}

**Question:** A particle $B$ of weight $20\,\mathrm N$ hangs from a fixed point $A$ on a vertical wall by a light taut string of length $1\,\mathrm m$. A horizontal force pulls $B$ away from the wall and holds it at rest $0.6\,\mathrm m$ from the wall, below $A$. Find the tension and horizontal force.

水平距离为 $0.6\,\mathrm m$，低于 $A$ 的竖直距离为

$$h=\sqrt{1^2-0.6^2}=0.8\,\mathrm m.$$

张力朝向 $A$，所以水平向墙的分量为 $0.6T$，向上分量为 $0.8T$。分别使用平衡条件：

$$0.8T=20\quad\Rightarrow\quad\boxed{T=25\,\mathrm N},$$

$$P=0.6T\quad\Rightarrow\quad\boxed{P=15\,\mathrm N}.$$

**检查：**水平距离不等于绳长。分量比例满足 $0.6^2+0.8^2=1$。

</div>

### 斜面上怎样选方向 {#slope-components}

斜面问题可以选一个方向沿斜面，另一个方向垂直斜面。这样，支持力完全沿垂直斜面的方向；列沿斜面的方程时，就少了这个未知力。

若斜面与水平夹角为 $\alpha$，且 $0<\alpha<90^\circ$，它的垂线也会相对竖直方向倾斜同样的角度。所以，向下的重力与“压入斜面”的方向之间，夹角就是 $\alpha$。

把重力 $W$ 当作直角三角形的斜边，压入斜面的分量是这个角的邻边，所以为 $W\cos\alpha$；沿斜面向下的分量是对边，所以为 $W\sin\alpha$。重力本身仍竖直向下，这只是沿所选方向描述它的两个分量。

<div class="worked-example" markdown="1">

### 例题 5 — 绳与光滑斜面有夹角 {#example-5--a-string-inclined-to-a-smooth-plane}

**Question:** A particle of weight $60\,\mathrm N$ rests on a smooth plane inclined at $30^\circ$ to the horizontal. A light taut string pulls up the slope at $30^\circ$ above the plane, holding the particle in equilibrium. Find its tension and the normal reaction.

选沿斜面向上和垂直斜面向外为正方向。没有摩擦。重力沿斜面向下的分量为 $60\sin30^\circ$，压向斜面的分量为 $60\cos30^\circ$。

绳的夹角是**相对斜面**给出的，所以张力沿斜面的分量为 $T\cos30^\circ$，离开斜面的分量为 $T\sin30^\circ$。

沿斜面：

$$T\cos30^\circ=60\sin30^\circ,$$

$$\boxed{T=20\sqrt3\,\mathrm N\approx34.6\,\mathrm N}.$$

垂直斜面：

$$R+T\sin30^\circ=60\cos30^\circ,$$

$$\boxed{R=20\sqrt3\,\mathrm N\approx34.6\,\mathrm N}.$$

**检查：**$R>0$，接触可能。绳分担了部分重力，使反力减小。

**常见错误：**写 $R=60\cos30^\circ$，漏掉张力的法向分量。如果算得 $R$ 为负，这个接触模型就不成立：斜面不能把物体拉向自身。

</div>

先做 [Q4](#q4--two-strings-with-given-lengths) 与 [Q5](#q5--contact-with-a-smooth-plane)，再回到[摩擦](#friction-and-limiting-equilibrium)继续。

## 摩擦需要多大，最多又有多大 {#friction-and-limiting-equilibrium}

轻轻推一个箱子，箱子没有动，摩擦力就在平衡你的推力。推得更大一些，摩擦也可以随之增大。它不是一开始就达到最大值。

用 $F$ 表示摩擦力的**大小**，$R$ 表示法向反力。**摩擦系数（coefficient of friction）**记作 $\mu$，在这里的接触模型中，它规定了上限：

$$0\leq F\leq\mu R.$$

这句话可以读成：“需要的摩擦，不能小于零，也不能超过最多能提供的摩擦。”摩擦系数没有单位。即使接触更粗糙、上限更高，实际也未必需要更大的摩擦。

物体仍然静止，但已经处在将要滑动的边缘，叫作**极限平衡（limiting equilibrium）**。到了这个边界，才写

$$F=\mu R.$$

所以静止问题先这样想：先看垂直接触面的力，求出支持力；再看沿接触面的力，求出平衡需要多少摩擦；最后比较需要量与上限。如果需要量超过上限，题目假设的静止就不可能维持。

摩擦朝哪边？先想象接触面暂时不提供摩擦，其他力不变，物体会倾向于往哪边滑。摩擦就阻碍这个趋势。外加力改变后，滑动趋势也可能反向。

| 题目怎样说 | 能据此判断什么 |
| --- | --- |
| 静止或平衡 | 先求所需摩擦，再检查 $F\leq\mu R$ |
| 将要运动、将要滑动 | 所需摩擦已经达到 $F=\mu R$ |
| 能保持平衡的最小摩擦系数 | 若 $R>0$，临界值是 $\mu_{\min}=\frac{F}{R}$ |
| 外加力的取值范围 | 力太小、太大时可能向不同方向滑，两端都要检查 |

已经滑动的物体，常用动摩擦模型同样写 $F=\mu R$，方向与相对滑动相反。下面的静止题则是在判断物体会不会开始滑。

<div class="worked-example" markdown="1">

### 例题 6 — 摩擦不一定达到极限 {#example-6--friction-need-not-be-limiting}

**Question:** A particle of weight $50\,\mathrm N$ is at rest on a rough horizontal plane. The coefficient of friction is $0.4$. A horizontal force of $12\,\mathrm N$ acts to the right. Find the friction and decide whether equilibrium is possible.

竖直方向给出 $R=50\,\mathrm N$。水平平衡要求 $F=12\,\mathrm N$、向左。最大可用摩擦为

$$\mu R=0.4(50)=20\,\mathrm N.$$

由于 $12<20$，可以平衡，摩擦**未**达到极限。若外加力逐渐增大，达到 $20\,\mathrm N$ 时才是极限平衡。

**检查：**没有水平外加力时，不需要摩擦。同一粗糙面并不总是产生 $20\,\mathrm N$ 的摩擦。

</div>

<div class="worked-example" markdown="1">

### 例题 7 — 斜向拉力减小反力 {#example-7--an-angled-pull-reduces-the-reaction}

**Question:** A particle of weight $100\,\mathrm N$ rests on a rough horizontal plane. A light taut string pulls to the right at $30^\circ$ above the horizontal. The particle is just about to move when the tension is $40\,\mathrm N$. Find the coefficient of friction.

![粗糙水平面上的质点：40 牛顿拉力与水平成 30 度，反力向上、100 牛顿重力向下、摩擦向左](/assets/img/a2-math-mech/angled-pull-forces.svg)

张力向上的分量减小反力：

$$R+40\sin30^\circ=100\quad\Rightarrow\quad R=80\,\mathrm N.$$

摩擦向左并达到极限。水平分解给出

$$F=40\cos30^\circ=20\sqrt3\,\mathrm N.$$

$$\boxed{\mu=\frac{F}{R}=\frac{\sqrt3}{4}\approx0.433}.$$

**检查：**$80+20=100$，竖直力平衡。误用 $R=100$ 会得到错误的摩擦系数。

若外力斜向下推，其向下分量会**增大** $R$。每次都应写出实际的竖直方向方程。

</div>

<div class="worked-example" markdown="1">

### 例题 8 — 水平推力作用于斜面上的物体 {#example-8--a-horizontal-push-on-an-inclined-plane}

**Question:** A particle of weight $50\,\mathrm N$ rests on a rough plane rising to the right at angle $\alpha$, where $\tan\alpha=\frac34$. The coefficient of friction is $\frac12$. A horizontal force $P\,\mathrm N$ pushes it to the right, with $P\geq0$. Find the range of $P$ for equilibrium and describe the friction direction.

![水平向右推斜面上质点的两幅受力图：即将下滑时摩擦沿斜面向上，即将上滑时摩擦沿斜面向下](/assets/img/a2-math-mech/inclined-plane-friction.svg)

由直角三角形得 $\sin\alpha=\frac35$、$\cos\alpha=\frac45$。水平推力既有沿斜面向上的分量，也有压向斜面的分量。垂直斜面得

$$R=50\cos\alpha+P\sin\alpha=40+\frac35P.$$

设 $f$ 为沿斜面向上的**带符号摩擦分量**。与大小 $F$ 不同，$f$ 可以为负。沿斜面平衡得

$$P\cos\alpha+f=50\sin\alpha,$$

$$f=30-\frac45P.$$

保持静止要求 $\lvert f\rvert\leq\mu R$，因此检查两端边界。

**即将下滑：**摩擦向上，$f=\mu R$：

$$30-\frac45P=\frac12\left(40+\frac35P\right),$$

$$P=\frac{100}{11}\,\mathrm N\approx9.09\,\mathrm N.$$

**即将上滑：**摩擦向下，$f=-\mu R$：

$$\frac45P-30=\frac12\left(40+\frac35P\right),$$

$$P=100\,\mathrm N.$$

不能只求两个边界，还要检查中间的取值。把摩擦不等式的两边分别写出：

$$30-\frac45P\leq\frac12\left(40+\frac35P\right)
\quad\Rightarrow\quad P\geq\frac{100}{11},$$

$$30-\frac45P\geq-\frac12\left(40+\frac35P\right)
\quad\Rightarrow\quad P\leq100.$$

两个条件要同时满足，所以

$$\boxed{\frac{100}{11}\leq P\leq100}.$$

其中 $P$ 的单位为牛顿。此范围内，$P<37.5$ 时摩擦向上，$P=37.5$ 时为零，$P>37.5$ 时向下。

**检查：**全范围内 $R>0$。当 $P=100$，$R=100\,\mathrm N$、$f=-50\,\mathrm N$，极限大小与方向均正确。

**常见错误：**在两个边界都把摩擦画成向上，或用 $R=50\cos\alpha$ 漏掉推力的法向分量。

</div>

## 练习 {#practice}

以下均为自拟题。先关闭提示和解答作答，用过提示就给自己做个记号。绳或接触面问题先画受力图；角度用度数时，计算器设为角度制。向量方向出错时可做[分量重试](#components-retry)；分不清实际摩擦和上限时可做[摩擦重试](#friction-retry)。

<div class="lesson-check" markdown="1">

### Q1 — 粗糙斜面受力图 {#q1--draw-forces-on-a-rough-plane}

A particle of weight $25\,\mathrm N$ rests on a rough plane inclined at angle $\alpha$, where $\tan\alpha=\frac34$. There are no strings or other applied forces. Describe the force diagram, find the normal reaction and friction, and find the least coefficient of friction for equilibrium.

<details markdown="1">
<summary>提示</summary>

没有摩擦时，质点会向下滑。分别沿斜面与垂直斜面分解，使用 $3$–$4$–$5$ 三角形。

</details>

<details markdown="1">
<summary>解答与检查</summary>

画重力竖直向下、反力垂直斜面向外、摩擦沿斜面向上。

$$R=25\cos\alpha=20\,\mathrm N,$$

$$F=25\sin\alpha=15\,\mathrm N.$$

$$\boxed{\mu_{\min}=\frac{15}{20}=\frac34}.$$

**检查：**此结果等于 $\tan\alpha$，符合只有重力与接触力的情形。更大的摩擦系数仍允许平衡，实际摩擦仍为 $15\,\mathrm N$。

</details>

</div>

<div class="lesson-check" markdown="1">

### Q2 — 三个力 {#q2--a-resultant-below-the-negative-horizontal-direction}

Forces $(3\mathbf i-2\mathbf j)\,\mathrm N$, $(-7\mathbf i+5\mathbf j)\,\mathrm N$ and $(\mathbf i-7\mathbf j)\,\mathrm N$ act on a particle. Find the resultant, its magnitude and its direction relative to the negative horizontal direction. Give the extra force needed for equilibrium.

<details markdown="1">
<summary>提示</summary>

分别相加 $\mathbf i$、$\mathbf j$ 的系数，再用两个符号确定方向。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$\mathbf S=(-3\mathbf i-4\mathbf j)\,\mathrm N,\qquad \lvert\mathbf S\rvert=5\,\mathrm N.$$

它指向左下方，与水平负向夹角为

$$\tan^{-1}\left(\frac43\right)=53.1^\circ$$

，位于该方向下方，保留一位小数。需要补上的力为

$$\boxed{(3\mathbf i+4\mathbf j)\,\mathrm N}.$$

**检查：**加上这个力后，两个方向的合力分量都为零。

</details>

</div>

<div class="lesson-check" markdown="1">

### Q3 — 未知的力分量 {#q3--unknown-force-components}

Forces $(P\mathbf i+2\mathbf j)\,\mathrm N$, $(-4\mathbf i+Q\mathbf j)\,\mathrm N$ and $(\mathbf i-7\mathbf j)\,\mathrm N$ act on a particle in equilibrium. Find $P$ and $Q$.

<details markdown="1">
<summary>提示</summary>

两个方向的总分量分别为零；分别列出关于 $P$ 和 $Q$ 的方程。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$P-4+1=0,\qquad 2+Q-7=0.$$

$$\boxed{P=3,\qquad Q=5}.$$

**检查：**$(3,2)+(-4,5)+(1,-7)=(0,0)$。这些是分量的系数，并不是原来的力的大小。

</details>

</div>

<div class="lesson-check" markdown="1">

### Q4 — 已知绳长的两绳问题 {#q4--two-strings-with-given-lengths}

Points $A$ and $C$ are at the same height and $1\,\mathrm m$ apart. A particle $B$ of weight $50\,\mathrm N$ hangs below them in equilibrium from two light taut strings, with $AB=0.8\,\mathrm m$ and $BC=0.6\,\mathrm m$. Find the angle between the strings and their tensions.

<details markdown="1">
<summary>提示</summary>

三条边构成 $0.6$–$0.8$–$1$ 直角三角形。设 $A$ 在左，先求 $A$ 至 $B$ 的水平和竖直距离。

</details>

<details markdown="1">
<summary>解答与检查</summary>

由于 $0.8^2+0.6^2=1^2$，$ABC$ 处的角为 $90^\circ$。取 $A=(0,0)$、$C=(1,0)$，设 $B=(x,-h)$，绳长给出

$$x^2+h^2=0.64,\qquad(1-x)^2+h^2=0.36.$$

相减得 $x=0.64$，再得 $h=0.48$。朝向 $A$ 的张力分量比例为 $(-0.8,0.6)$，朝向 $C$ 的为 $(0.6,0.8)$。

$$0.8T_A=0.6T_C,\qquad0.6T_A+0.8T_C=50.$$

$$\boxed{T_A=30\,\mathrm N,\qquad T_C=40\,\mathrm N}.$$

**检查：**两水平分量大小都为 $24\,\mathrm N$。竖直向上的分量为 $18\,\mathrm N$ 和 $32\,\mathrm N$，和为 $50\,\mathrm N$。

</details>

</div>

<div class="lesson-check" markdown="1">

### Q5 — 光滑斜面接触 {#q5--contact-with-a-smooth-plane}

A particle of weight $40\,\mathrm N$ is held in equilibrium on a smooth plane inclined at $30^\circ$ to the horizontal. A light taut string pulls up the slope at $45^\circ$ above the plane. Find the tension and normal reaction, and check that contact is possible.

<details markdown="1">
<summary>提示</summary>

张力有离开斜面的分量。先沿斜面列平衡，再沿法向列平衡。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$T\cos45^\circ=40\sin30^\circ,$$

$$\boxed{T=20\sqrt2\,\mathrm N\approx28.3\,\mathrm N}.$$

$$R+T\sin45^\circ=40\cos30^\circ,$$

$$\boxed{R=20(\sqrt3-1)\,\mathrm N\approx14.6\,\mathrm N}.$$

**检查：**$R>0$，接触模型可能。张力的切向和法向分量均为 $20\,\mathrm N$。没有摩擦。

</details>

</div>

<div class="lesson-check" markdown="1">

### Q6 — 检查能否静止 {#q6--test-whether-rest-is-possible}

A particle of weight $60\,\mathrm N$ lies on a rough horizontal plane with coefficient of friction $0.3$. A horizontal force of $12\,\mathrm N$ is applied. Find the friction if it stays at rest. Could it stay at rest if the force were increased to $24\,\mathrm N$? Explain.

<details markdown="1">
<summary>提示</summary>

先求平衡所需的摩擦，再与最大可用值比较。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$R=60\,\mathrm N,\qquad\mu R=18\,\mathrm N.$$

外力为 $12\,\mathrm N$ 时，摩擦大小为 $12\,\mathrm N$，方向相反。由于 $12<18$，可以平衡且未达极限。

外力为 $24\,\mathrm N$ 时，需要 $24\,\mathrm N$ 的摩擦，超过 $18\,\mathrm N$，本模型下不能保持静止。

**检查：**$18\,\mathrm N$ 是摩擦的上限，不是第一个情形中的实际摩擦。

</details>

</div>

<div class="lesson-check" markdown="1">

### Q7 — 比较斜向拉与斜向推 {#q7--compare-an-angled-pull-and-an-angled-push}

A particle of weight $60\,\mathrm N$ rests on a rough horizontal plane with $\mu=\frac14$. A force of magnitude $P$ acts to the right at an angle $\beta$ to the horizontal, where $\tan\beta=\frac34$ and $0<\beta<90^\circ$. Find $P$ when the particle is just about to move right in each case: (a) the force acts above the horizontal; (b) it acts below the horizontal. Explain the difference.

<details markdown="1">
<summary>提示</summary>

用 $\sin\beta=\frac35$、$\cos\beta=\frac45$。(a) 中 $R=60-P\sin\beta$，(b) 中符号反转。摩擦达到极限、向左。

</details>

<details markdown="1">
<summary>解答与检查</summary>

(a) 反力减小，水平方向给出

$$\frac45P=\frac14\left(60-\frac35P\right).$$

$$\boxed{P=\frac{300}{19}\,\mathrm N\approx15.8\,\mathrm N}.$$

(b) 向下推使反力增大：

$$\frac45P=\frac14\left(60+\frac35P\right).$$

$$\boxed{P=\frac{300}{13}\,\mathrm N\approx23.1\,\mathrm N}.$$

向下推时法向反力和最大摩擦都较大，因此刚开始向右运动所需的力更大。

**检查：**反力分别为 $\frac{960}{19}\,\mathrm N$、$\frac{960}{13}\,\mathrm N$，均为正。各自的四分之一等于该情形中外力的水平分量。

</details>

</div>

<div class="lesson-check" markdown="1">

### Q8 — 斜面上的水平外力 {#q8--find-both-limiting-cases}

A particle of weight $100\,\mathrm N$ rests on a rough plane rising to the right at angle $\alpha$, where $\tan\alpha=\frac34$. The coefficient of friction is $\frac14$. A horizontal force of magnitude $P\,\mathrm N$ acts to the right. Find the range of $P\geq0$ for equilibrium. State the friction direction at $P=60$ and $P=100$, and find the value of $P$ for which friction is zero.

<details markdown="1">
<summary>提示</summary>

水平推力有压向斜面的分量。设沿斜面向上为正的带符号摩擦，并在两端检验 $\lvert f\rvert\leq\mu R$。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$R=80+\frac35P,\qquad f=60-\frac45P.$$

下边界摩擦沿斜面向上：

$$60-\frac45P=\frac14\left(80+\frac35P\right),$$

$$P=\frac{800}{19}\,\mathrm N\approx42.1\,\mathrm N.$$

上边界摩擦沿斜面向下：

$$\frac45P-60=\frac14\left(80+\frac35P\right),$$

$$P=\frac{1600}{13}\,\mathrm N\approx123\,\mathrm N.$$

两个平衡不等式同时成立的范围为

$$\boxed{\frac{800}{19}\leq P\leq\frac{1600}{13}}.$$

当 $P=60$，$f=12\,\mathrm N$，摩擦向上；当 $P=100$，$f=-20\,\mathrm N$，摩擦向下。$P=75$ 时摩擦为零。

**检查：**$P=60$ 和 $P=100$ 时，摩擦上限分别为 $29\,\mathrm N$ 和 $35\,\mathrm N$；所需摩擦较小，均未达极限。整个范围内反力为正。

</details>

</div>

## 独立检查与再尝试 {#independent-check}

先修复出错原因，再选对应的重试。开始前收起之前的解答。下面的判断题要写理由，不能只报一个数。

若反力方程漏了外力分量，先回看[斜面选轴](#slope-components)与[斜拉时的反力方程](#example-7--an-angled-pull-reduces-the-reaction)，再收起示范，做 [Q7(b)](#q7--compare-an-angled-pull-and-an-angled-push)：这次外力压向表面。检查你的反力是否朝正确方向改变。

<div class="lesson-check" markdown="1">

### 分量再尝试 {#components-retry}

**Question:** Forces $(2\mathbf i+5\mathbf j)\,\mathrm N$ and $(-6\mathbf i-2\mathbf j)\,\mathrm N$ act on a particle. Find the resultant, its magnitude and its direction anticlockwise from the positive horizontal direction. Find an additional force that would produce equilibrium.

<details markdown="1">
<summary>提示</summary>

先判断合力两个分量的正负号，再用反正切求角度。

</details>

<details markdown="1">
<summary>解答与核对</summary>

分量相加，得到

$$\mathbf S=(-4\mathbf i+3\mathbf j)\,\mathrm N,\qquad\lvert\mathbf S\rvert=5\,\mathrm N.$$

合力向左、向上。先求锐角：

$$\alpha=\tan^{-1}\left(\frac34\right)=36.9^\circ.$$

所以题目要求的方向是 $180^\circ-\alpha=143.1^\circ$，需添加的力为 $(4\mathbf i-3\mathbf j)\,\mathrm N$。加上它后，两个分量都抵消。计算器给出的反正切负角本身不能决定象限。

若这里仍有困难，回看[分力三角形与符号](#the-resultant-of-coplanar-forces)，再关闭这些面板重做。

</details>

</div>

<div class="lesson-check" markdown="1">

### 判断一个摩擦说法 {#friction-claim}

**Self-written task.** In Q8 the coefficient of friction is increased, with all other conditions unchanged. A student claims that both endpoints of the equilibrium range must increase. Assess this claim without recalculating the endpoints. Explain what happens if the coefficient is reduced to zero instead.

<details markdown="1">
<summary>提示</summary>

固定一个外加力的取值。改变摩擦系数，改变的是平衡需要量，还是能提供的上限？

</details>

<details markdown="1">
<summary>解答与核对</summary>

固定外加力后，平衡所需的反力和摩擦都没有改变。增大摩擦系数，只提高能提供的摩擦上限。原本可以保持静止的外力取值仍然可以，所以原来的下边界不能上升。“两个边界都必须增大”的说法不成立。

摩擦系数为零时，所需摩擦必须为零。Q8 中对应 $P=75\,\mathrm N$，反力为正。最多能提供多少，与实际需要多少，是两件不同的事。

若你因为系数变了就改变实际摩擦，先回看[推箱子的解释](#friction-and-limiting-equilibrium)，关闭此面板，再做下一题。

</details>

</div>

<div class="lesson-check" markdown="1">

### 改变条件后再试 {#friction-retry}

**Question:** Use the situation in Q8 with $P=60$. The coefficient of friction is now reduced from $\frac14$ to $\frac18$. Can the particle remain at rest? A student says that halving the coefficient must halve the actual friction. Assess this statement. Does your result prove that every value in the old equilibrium range is still possible?

<details markdown="1">
<summary>提示</summary>

重新画出相同的力。先求平衡需要多少摩擦，再算新的上限。

</details>

<details markdown="1">
<summary>解答与核对</summary>

外加力和静止假设都没有改变。垂直斜面与沿斜面的平衡给出

$$R=80+\frac35(60)=116\,\mathrm N,$$

$$f=60-\frac45(60)=12\,\mathrm N.$$

这里摩擦的带符号分量为正，表示沿斜面向上。新上限是

$$\mu R=\frac18(116)=14.5\,\mathrm N.$$

需要量小于上限，因此仍能静止，实际摩擦不变，并没有减半。

这一个取值成功，不能证明原来的整个范围都还成立。原极限边界上，需要量恰好等于原上限；系数减半后，同样的需要量就超过新上限。每个条件都要重新检查，不能用一个成功例子证明整个范围。

</details>

</div>

<div class="lesson-check" markdown="1">

### 摩擦为零说明什么 {#zero-friction-check}

**Question:** A particle rests on a rough surface with zero friction acting. Does this prove the surface is smooth? Explain using the distinction between an actual force and an upper bound.

<details markdown="1">
<summary>提示</summary>

其他力有没有可能已经平衡，根本不需要沿表面的力？

</details>

<details markdown="1">
<summary>解答与核对</summary>

不能。如果平衡不需要切向力，粗糙面上的实际摩擦也可以为零。“光滑”表示这个接触模型不提供摩擦，即使平衡需要非零切向力也无法提供。

</details>

</div>

## 下一课后回来检查 {#later-check}

学完[力矩与刚体平衡](/zh/alevel/a2-mathematics/mechanics/moments-and-rigid-objects/)后，先不看摩擦例题，回来做这道自拟题。研究对象仍按质点处理，不需要列力矩方程。

<div class="lesson-check" markdown="1">

### 换一种接触面 {#wall-check}

**Question:** A particle of weight $40\,\mathrm N$ is pressed against a rough vertical wall by a horizontal force of $100\,\mathrm N$. The coefficient of friction is $0.5$. (a) Draw the forces and decide whether it can remain at rest. (b) An additional force of $60\,\mathrm N$ now acts vertically upwards on the particle. Draw a new force diagram and decide whether rest is still possible. (c) In case (b), the horizontal pressing force is reduced to $50\,\mathrm N$. Recheck your conclusion. Explain the direction of friction in English.

<details markdown="1">
<summary>提示</summary>

墙面沿垂直于自身的方向推物体。先比较重力与新增向上力，再决定摩擦方向。

</details>

<details markdown="1">
<summary>解答与核对</summary>

墙面竖直，所以法向反力是水平的。设水平压力大小为 $P$，新增向上力大小为 $U$，水平平衡给出 $R=P$。

用 $f$ 表示带符号的摩擦分量，规定向上为正。竖直平衡是

$$U+f-40=0,\qquad f=40-U.$$

(a) 中反力为 $100\,\mathrm N$，需要的摩擦向上、大小为 $40\,\mathrm N$，上限是 $0.5(100)=50\,\mathrm N$，可以保持静止。

(b) 中反力不变，但 $f=40-60=-20\,\mathrm N$，表示摩擦向下、大小为 $20\,\mathrm N$，仍小于上限，可以静止。

![反馈受力图：没有额外向上力时，100 N 水平压力与 100 N 墙面反力平衡，向上 40 N 摩擦平衡向下 40 N 重力；另加向上 60 N 后，摩擦改为向下 20 N，水平方向的力不变。](/assets/img/a2-math-mech/wall-friction-feedback.svg)

(c) 中反力改为 $50\,\mathrm N$，上限为 $0.5(50)=25\,\mathrm N$，需要的向下摩擦仍为 $20\,\mathrm N$，所以仍可以静止。

可以用英文这样解释：**“Friction acts upwards in (a), opposing the tendency to slide down. In (b) and (c), it acts downwards because the other vertical forces would tend to move the particle upwards.”**

图中箭头不按力的大小成比例绘制。如果把支持力画成竖直，回看[法向反力](#force-diagrams)；如果一上来就用最大摩擦，回看[需要量与极限](#friction-and-limiting-equilibrium)。

</details>

</div>

## 来源与范围 {#sources-and-scope}

本页全部示范与任务都是**自拟题**，不是官方真题，没有官方分值。范围为 [OxfordAQA 9660 specification v5.2，M2.3](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf)中的质点受力、平衡与摩擦。力矩、重心各有独立课程，本页不代表整个 M2.3。

本次重读 MA05 January 2025 Q2(a)–(c) 的[试卷](/assets/pdf/fx-cg50/references/oxfordaqa-ma05-2025-january-question-paper.pdf#page=4)及配套 [Version 1.0 Final 评分标准](/assets/pdf/fx-cg50/references/oxfordaqa-ma05-2025-january-mark-scheme.pdf#page=6)，核对垂直／沿斜面平衡、极限摩擦及必要的列式步骤。另核对 Q3(a)，用于区分需要合力的圆周运动与本课的平衡模型。

教材对应第 11 章 11.1–11.3 节，印刷 pp.158–170，至 11.4 节之前。本课自拟题的最终数值默认保留三位有效数字，角度一位小数，题目另有要求时依题意；计算中先保留精确值。需要时取 $g=9.8\,\mathrm{m\,s^{-2}}$。真题按卷首与题内说明作答；January 2025 卷的计算器最终答案默认两位有效数字。

## 速查 {#quick-reference}

| 任务 | 方法 | 检查 |
| --- | --- | --- |
| 画受力图 | 选一个物体，画它受到的全部力 | 反力垂直接触面，摩擦沿接触面 |
| 求合力 | 沿共同的两个垂直方向加带符号分量 | 根据象限确定方向 |
| 质点平衡 | 两个方向的合力分量均为零 | 平衡意味着加速度为零 |
| 绳 | 张力沿绳拉，用几何确定角度 | 两张力均非负 |
| 平面接触 | 垂直平面分解 | 包含全部法向分量，并检验 $R\geq0$ |
| 静摩擦 | 先求所需 $F$，再检验 $F\leq\mu R$ | 粗糙不代表极限 |
| 极限平衡 | 用 $F=\mu R$ | 摩擦阻碍题目所述的滑动趋势 |
| 力的范围 | 检查两种滑动方向 | 范围内摩擦可能反向 |

**练习后：**区分受力图、角度、符号、反力和极限条件错误。先重新画图，再关闭解答重做。

**你应能：**求合力、解决共点力平衡、区分实际摩擦与极限值，并检查两种滑动趋势。

**学习路线：**[上一课：向量与运动学](/zh/alevel/a2-mathematics/mechanics/vectors-and-kinematics/) · [下一课：力矩与刚体平衡](/zh/alevel/a2-mathematics/mechanics/moments-and-rigid-objects/) · [力学目录](/zh/alevel/a2-mathematics/mechanics/)。

{% include exam_topic_practice.html %}
