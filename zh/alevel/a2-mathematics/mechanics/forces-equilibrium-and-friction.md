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
---

[A2 力学](/zh/alevel/a2-mathematics/mechanics/) · M2.3 静力与力

先选定一个物体并画出它受到的力，再沿两个互相垂直的方向分解，使用平衡条件。写 $F=\mu R$ 前，先判断摩擦是否达到极限。

- **学习：**从[受力图](#force-diagrams)开始，再学习[合力](#the-resultant-of-coplanar-forces)、[平衡](#concurrent-forces-in-equilibrium)和[摩擦](#friction-and-limiting-equilibrium)。
- **作业帮助：**斜面问题可选沿斜面和垂直斜面的坐标轴，并标明正方向。
- **复习：**关闭解答完成[练习](#practice)，检查摩擦方向及接触是否可能。

教材：第 11 章 11.1–11.3 节（印刷 pp.158–170，至 11.4 节之前）。力矩与刚体平衡另设一课。

**开始前：**掌握重力、张力、法向反力、基本三角关系与向量分量。需要时复习[数学建模](/zh/alevel/a2-mathematics/mechanics/mathematical-modelling/)。未另行给定时取 $g=9.8\,\mathrm{m\,s^{-2}}$。计算中保留精确值；本课自拟题的最终数值默认三位有效数字，角度默认一位小数，题目另有要求时依题意。

全部例题和练习均为自拟题，不是官方真题，不设官方分值。

## 受力图 {#force-diagrams}

先写明研究对象。图中只画**作用在该物体上的力**。它施加给另一个物体的力属于另一个物体的受力图。

| 力 | 方向与作用位置 |
| --- | --- |
| 重力（weight） | 竖直向下，通过重心 |
| 法向反力（normal reaction） | 垂直接触面，推离接触面 |
| 张力（tension） | 沿拉紧的绳，朝绳的另一端拉 |
| 推力（thrust） | 沿受压的杆推动物体 |
| 摩擦力（friction） | 沿接触面，阻碍相对滑动或滑动趋势 |
| 外加力 | 按题目指定的方向 |
| 铰链力（hinge force） | 方向通常未知，可设两个垂直分量 |

光滑接触没有摩擦。粗糙接触**可能**有摩擦；“粗糙”不代表摩擦必定非零或必定达到极限。

图示强调方向，箭头长度未按统一的力的比例绘制。

质点的各力可画在同一点。杆或梯子必须保留作用位置：移动力的作用点可能改变转动效果。均匀杆的重力作用在中点。

**不要把合力再画成一个额外的力。**合力用于替代原有各力，描述它们对质点的共同效果。速度和加速度也不是力。

## 共面力的合力 {#the-resultant-of-coplanar-forces}

共面力（coplanar forces）位于同一平面。沿同一组互相垂直的方向分解各力，再分别相加带符号的分量。

取 $\mathbf i$ 向右、$\mathbf j$ 向上，合力可写成

$$\mathbf S=X\mathbf i+Y\mathbf j,\qquad \lvert\mathbf S\rvert=\sqrt{X^2+Y^2}.$$

大小为 $P$ 的力，其方向从水平正向逆时针量得 $\theta$ 时，

$$F_x=P\cos\theta,\qquad F_y=P\sin\theta.$$

若角度从竖直方向量起，竖直分量应使用余弦。画出角与分量的关系，不要只背“水平用余弦”。

求方向时先看 $X$、$Y$ 的符号，再由分量大小求参考角并判断象限。若 $X=0$，合力竖直；若两分量均为零，合力没有方向。

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

## 共点力的平衡 {#concurrent-forces-in-equilibrium}

共点力（concurrent forces）的作用线通过同一点。质点平衡时加速度为零，因此

$$\sum F_x=0,\qquad\sum F_y=0.$$

平衡可以是静止，也可以是匀速直线运动。**只有速率恒定还不够：**方向变化也意味着速度变化。

刚体的合力为零并不足以保证平衡。不同作用线上的力仍可能使它转动；下一课还需要力矩条件。

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

### 例题 4 — 从几何求角度 {#example-4--find-the-angle-from-the-geometry}

**Question:** A particle $B$ of weight $20\,\mathrm N$ hangs from a fixed point $A$ on a vertical wall by a light taut string of length $1\,\mathrm m$. A horizontal force pulls $B$ away from the wall and holds it at rest $0.6\,\mathrm m$ from the wall, below $A$. Find the tension and horizontal force.

水平距离为 $0.6\,\mathrm m$，低于 $A$ 的竖直距离为

$$h=\sqrt{1^2-0.6^2}=0.8\,\mathrm m.$$

张力朝向 $A$，所以水平向墙的分量为 $0.6T$，向上分量为 $0.8T$。分别使用平衡条件：

$$0.8T=20\quad\Rightarrow\quad\boxed{T=25\,\mathrm N},$$

$$P=0.6T\quad\Rightarrow\quad\boxed{P=15\,\mathrm N}.$$

**检查：**水平距离不等于绳长。分量比例满足 $0.6^2+0.8^2=1$。

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

## 摩擦与极限平衡 {#friction-and-limiting-equilibrium}

粗糙接触的摩擦系数（coefficient of friction）为 $\mu$，法向反力为 $R$。物体静止时，摩擦力大小满足

$$0\leq F\leq\mu R.$$

摩擦取维持平衡所需的大小，最大为 $\mu R$，也可以为零。处于极限平衡（limiting equilibrium）、即将滑动时，

$$F=\mu R.$$

先判断物体有向哪边滑动的趋势，摩擦方向与该趋势相反。外加力改变时，滑动趋势也可能反转。

| 题目用语 | 处理方法 |
| --- | --- |
| 静止或平衡 | 先求所需摩擦，再检查 $F\leq\mu R$ |
| 即将运动或即将滑动 | 沿阻碍所述趋势的方向使用 $F=\mu R$ |
| 求维持平衡的最小摩擦系数 | 先求 $F$、$R$，再用 $\mu_{\min}=\frac{F}{R}$，条件是 $R>0$ |
| 求外加力的范围 | 检查两个可能的滑动方向 |

通常的滑动摩擦模型在滑动时也使用 $F=\mu R$，方向与相对运动相反。下面只讨论平衡和刚开始滑动的时刻。

### 例题 6 — 摩擦不一定达到极限 {#example-6--friction-need-not-be-limiting}

**Question:** A particle of weight $50\,\mathrm N$ is at rest on a rough horizontal plane. The coefficient of friction is $0.4$. A horizontal force of $12\,\mathrm N$ acts to the right. Find the friction and decide whether equilibrium is possible.

竖直方向给出 $R=50\,\mathrm N$。水平平衡要求 $F=12\,\mathrm N$、向左。最大可用摩擦为

$$\mu R=0.4(50)=20\,\mathrm N.$$

由于 $12<20$，可以平衡，摩擦**未**达到极限。若外加力逐渐增大，达到 $20\,\mathrm N$ 时才是极限平衡。

**检查：**没有水平外加力时，不需要摩擦。同一粗糙面并不总是产生 $20\,\mathrm N$ 的摩擦。

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

两个不等式在两边界之间同时成立，得到

$$\boxed{\frac{100}{11}\leq P\leq100}.$$

其中 $P$ 的单位为牛顿。此范围内，$P<37.5$ 时摩擦向上，$P=37.5$ 时为零，$P>37.5$ 时向下。

**检查：**全范围内 $R>0$。当 $P=100$，$R=100\,\mathrm N$、$f=-50\,\mathrm N$，极限大小与方向均正确。

**常见错误：**在两个边界都把摩擦画成向上，或用 $R=50\cos\alpha$ 漏掉推力的法向分量。

## 练习 {#practice}

建议约 40–50 分钟。每个接触或绳的问题都画受力图；角度以度给出时，计算器使用角度模式。

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

### Q2 — 指向左下方的合力 {#q2--a-resultant-below-the-negative-horizontal-direction}

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

### Q8 — 找出两种极限情况 {#q8--find-both-limiting-cases}

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

## 独立考查 {#independent-check}

**Self-written task.** In Q8 the coefficient of friction is increased, with all other conditions unchanged. A student claims that both endpoints of the equilibrium range must increase. Assess this claim without recalculating the endpoints. Explain what happens if the coefficient is reduced to zero instead.

<details markdown="1">
<summary>推理提示</summary>

固定某个 $P$ 后，平衡所需的带符号摩擦和反力都不依赖 $\mu$。比较改变前后的摩擦不等式。

</details>

<details markdown="1">
<summary>反馈与再尝试</summary>

摩擦系数增大，只增大可用摩擦上限，不改变固定 $P$ 时所需的摩擦。原本可行的取值仍可行，所以下边界不能上升。摩擦系数为零时，所需摩擦必须为零，Q8 给出 $P=75\,\mathrm N$，此时反力为正。最大摩擦增大，不代表实际摩擦必须增大。

**Retry, with this panel closed:** A particle rests on a rough surface with zero friction acting. Does this prove the surface is smooth? Explain using the distinction between an actual force and an upper bound.

</details>

<details markdown="1">
<summary>再尝试核对</summary>

不能。若平衡不需要切向力，粗糙面上的实际摩擦也可为零。“光滑”表示该接触模型始终不提供摩擦，即使平衡需要非零切向力也不能提供。

</details>

## 来源与范围 {#sources-and-scope}

范围：[OxfordAQA 9660 specification v5.2，M2.3](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf)。已结合配套[试卷](/assets/pdf/fx-cg50/references/oxfordaqa-ma05-2025-january-question-paper.pdf)及[最终评分标准](/assets/pdf/fx-cg50/references/oxfordaqa-ma05-2025-january-mark-scheme.pdf)阅读 **MA05 January 2025 Q2、Q3(a)**，核对平衡、极限摩擦与解释要求。本页均为自拟题，使用本页声明的精度约定。

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
