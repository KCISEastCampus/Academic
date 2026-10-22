---
title: 抛体
layout: subjects
mathjax: true
grade: a2
subject: m2
lang: zh-CN
translation_of: /alevel/a2-mathematics/mechanics/projectiles/
permalink: /zh/alevel/a2-mathematics/mechanics/projectiles/
toc_headings: h2
study_page: true
---

[A2 力学](/zh/alevel/a2-mathematics/mechanics/) · M2.5 抛体

把抛体运动分成水平和竖直两个分量，求位置、速率、运动方向、飞行时间及高度，再推导轨迹，处理目标和障碍物问题。

- **学习：**从[模型与方程](#the-projectile-model)开始，再学习[最大高度与射程](#greatest-height-and-range)、[从高处发射](#projection-from-a-height)和[轨迹](#the-equation-of-the-path)。
- **作业帮助：**画出原点和落地高度；两个方向的方程必须使用同一个时间。
- **复习：**关闭解答尝试[练习](#practice)，检查符号、时间的根和每个公式的适用条件。

教材：第 13 章 13.3 节（印刷 pp.207–215）。本课术语为抛体（projectile）、发射速度（velocity of projection）、飞行时间（time of flight）、最大高度（greatest height）、射程（range）和轨迹（trajectory）。

**开始前：**复习[牛顿运动定律](/zh/alevel/a2-mathematics/mechanics/newtons-laws-of-motion/)与[向量和运动学](/zh/alevel/a2-mathematics/mechanics/vectors-and-kinematics/)。未另行给定时取 $g=9.8\,\mathrm{m\,s^{-2}}$。计算中保留精确值；本课自拟题最终数值默认三位有效数字、角度一位小数，另有要求时依题意。

全部例题和练习都是自拟题，不是官方真题，不设官方分值。图示用于表达模型，未按比例绘制。

<!-- motion-sources:start -->
## 来源与范围 {#sources-and-scope}

**范围与评价参照：**[OxfordAQA 9660 大纲 v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf) M2.5；方法参照为 MA05 January 2025 Q4、Q7(b)(c)，已配对阅读[题卷](/assets/pdf/fx-cg50/references/oxfordaqa-ma05-2025-january-question-paper.pdf)与[评分标准 Version 1.0 Final](/assets/pdf/fx-cg50/references/oxfordaqa-ma05-2025-january-mark-scheme.pdf)。本页题目仍为自拟题，默认精度按上文约定；真题按该卷及该题的指示处理。本课只考察仅受重力的飞行与水平落地高度，不扩入斜面落点或含阻力抛体。
<!-- motion-sources:end -->

## 抛体模型 {#the-projectile-model}

**抛体（projectile）**在发射后只受重力而自由运动。把物体看作质点，忽略空气阻力，并取 $g$ 为常量。唯一的力是竖直向下的重力，所以加速度为 $-g\mathbf j$，这里 $\mathbf j$ 向上。在这个模型中，物体离手后没有继续向前的推力。

把原点 $O$ 放在发射点，$x$ 轴水平向右，$y$ 轴竖直向上，释放瞬间为 $t=0$。若发射速率为 $V$，方向与水平向上夹角为 $\theta$，初速度分量为：

$$u_x=V\cos\theta,\qquad u_y=V\sin\theta.$$

向水平线下方发射时，可用负角，或直接在 $u_y$ 中写负号。水平速度分量保持不变；竖直分量以 $-g$ 的变化率改变：

$$\dot x=u_x,\qquad \dot y=u_y-gt.$$

上方的点表示对时间求导。积分，并使用 $x(0)=y(0)=0$，得到：

$$\boxed{x=u_xt},\qquad \boxed{y=u_yt-\frac12gt^2}.$$

两个方向使用**同一个时间**。若改把原点放在地面，竖直位置方程要加上初始高度。这些方程只适用于从释放到首次落地或碰撞之前。

![抛体的初速度分量、弯曲轨迹与向下重力；水平和竖直坐标轴都从发射点出发](/assets/img/a2-math-mech/projectile-components.svg)

## 位置、速率与方向 {#position-speed-and-direction}

相对发射点的位置为 $(x,y)$。它到发射点的直线距离为 $\sqrt{x^2+y^2}$，并不是沿弯曲轨迹走过的路程。

$$\text{speed}=\sqrt{\dot x^2+\dot y^2}.$$

运动方向是速度的方向，即轨迹的切线方向。当 $\dot x>0$ 时，与水平线的锐角 $\alpha$ 满足：

$$\tan\alpha=\frac{\lvert\dot y\rvert}{\dot x}.$$

还要说明速度指向水平线上方还是下方。不要使用 $y/x$；那给出的是位置向量的方向。

### 例题 1：一秒后的位置与速度 {#example-1-position-and-velocity-after-one-second}

**Question:** a particle is projected from horizontal ground at $25\,\mathrm{m\,s^{-1}}$ at an acute angle $\theta$ where $\tan\theta=3/4$. Find its position, speed, direction of motion and distance from the launch point at $t=1\,\mathrm s$.

由 $3$–$4$–$5$ 直角三角形，得到 $u_x=20$、$u_y=15$，单位为 $\mathrm{m\,s^{-1}}$。

$$x=20(1)=20,\qquad y=15(1)-4.9(1)^2=10.1.$$

$$\boxed{(x,y)=(20,10.1)\,\mathrm m}.$$

$$\dot x=20,\qquad \dot y=15-9.8=5.2.$$

$$\boxed{\text{speed}=\sqrt{20^2+5.2^2}\approx20.7\,\mathrm{m\,s^{-1}}}.$$

$$\tan\alpha=\frac{5.2}{20},\qquad \boxed{\alpha=14.6^\circ\text{ above horizontal}}.$$

$$\boxed{OP=\sqrt{20^2+10.1^2}\approx22.4\,\mathrm m}.$$

**检查：**$y>0$，物体仍在地面上方；竖直速度为正，说明还在上升。虽然水平速度不变，总速率已经减小。

## 最大高度与射程 {#greatest-height-and-range}

向上发射时，$\dot y=0$ 对应最大高度。水平速度不一定为零，因此抛体在最高点通常**并未静止**。

$$0=u_y-gt,\qquad t_{\text{top}}=\frac{u_y}{g}.$$

把这个时间代入竖直位置方程，得到相对发射点的高度：

$$H=u_y\left(\frac{u_y}{g}\right)-\frac12g\left(\frac{u_y}{g}\right)^2
=\frac{u_y^2}{2g}.$$

这里假定物体到达最高点之前没有碰撞。水平或向下发射时，在落地前的 $t\geq0$ 时间域内，最大高度就是初始高度。

若落点**与发射点同高**，令 $y=0$。当 $u_y>0$ 时：

$$0=t\left(u_y-\frac12gt\right).$$

根 $t=0$ 是发射瞬间。正的落地时间与水平射程为：

$$T=\frac{2u_y}{g},\qquad R=u_xT=\frac{2u_xu_y}{g}.$$

代入初速度的分量表达式，得到：

$$R=\frac{V^2\sin2\theta}{g}.$$

这些结果可以核验答案，但应按教材要求**从分量方程推导**。落点不同高时，不能用它们求飞行时间或落地距离。固定 $V$、发射与落地同高，且 $0<\theta<90^\circ$ 时，射程在 $45^\circ$ 时最大，因为 $\sin2\theta\leq1$。但天花板或障碍物可能限制可用角度。

### 例题 2：从方程求高度与射程 {#example-2-height-and-range-from-the-equations}

**Question:** a projectile leaves horizontal ground with horizontal velocity $14\,\mathrm{m\,s^{-1}}$ and upward velocity $9.8\,\mathrm{m\,s^{-1}}$. Find its greatest height, time of flight and range.

在最高点：

$$0=9.8-9.8t,\qquad t=1\,\mathrm s.$$

$$H=9.8(1)-4.9(1)^2=\boxed{4.9\,\mathrm m}.$$

在落地时：

$$0=9.8t-4.9t^2=4.9t(2-t).$$

舍去发射瞬间的根，得到 $\boxed{T=2\,\mathrm s}$。因此：

$$R=14(2)=\boxed{28\,\mathrm m}.$$

**检查：**这次同高飞行的最高点恰在总飞行时间的一半处；最高点速率是 $14\,\mathrm{m\,s^{-1}}$，不是零。

## 从高处发射 {#projection-from-a-height}

若发射点比水平地面高 $h$，且原点在发射点，落地条件为 $y=-h$。先解竖直方程，选出未来首次实际落地的时间，再用 $x=u_xt$。总飞行时间通常不再等于到最高点时间的两倍。

### 例题 3：从高处向上发射 {#example-3-an-upward-launch-from-a-raised-point}

**Question:** a particle is projected from a point $14.7\,\mathrm m$ above horizontal ground with horizontal velocity $10\,\mathrm{m\,s^{-1}}$ and upward velocity $9.8\,\mathrm{m\,s^{-1}}$. Find its landing time, horizontal landing distance from the foot of the launch point and impact velocity.

![从高处向上发射的抛体；发射高度标为 y 等于零，地面标为 y 等于负 h](/assets/img/a2-math-mech/projectile-raised-launch.svg)

在地面处：

$$-14.7=9.8t-4.9t^2.$$

$$t^2-2t-3=(t-3)(t+1)=0.$$

负根不在释放后的时间域内。因此 $\boxed{T=3\,\mathrm s}$，$\boxed{x=30\,\mathrm m}$。

$$\dot y=9.8-9.8(3)=-19.6\,\mathrm{m\,s^{-1}}.$$

$$\boxed{\mathbf v=10\mathbf i-19.6\mathbf j\,\mathrm{m\,s^{-1}}}.$$

撞地速率为 $\boxed{22.0\,\mathrm{m\,s^{-1}}}$，方向为水平线下方 $\boxed{63.0^\circ}$。

**检查：**$y(3)=-14.7$。返回发射高度只需 $2\,\mathrm s$，落地则更久。最大离地高度为 $14.7+4.9=19.6\,\mathrm m$。

### 例题 4：水平与向下发射 {#example-4-horizontal-and-downward-launches}

**Question:** take $g=10\,\mathrm{m\,s^{-2}}$ in this example. A particle is projected from a point $15\,\mathrm m$ above horizontal ground at $20\,\mathrm{m\,s^{-1}}$. Find its landing time and distance from the foot of the launch point for (a) horizontal projection and (b) projection at $30^\circ$ below horizontal.

**(a)** $u_x=20$，$u_y=0$。在落地时：

$$-15=-5t^2,\qquad \boxed{T=\sqrt3\,\mathrm s\approx1.73\,\mathrm s}.$$

$$\boxed{x=20\sqrt3\,\mathrm m\approx34.6\,\mathrm m}.$$

**(b)** $u_x=10\sqrt3$，$u_y=-10$：

$$-15=-10t-5t^2,\qquad (t-1)(t+3)=0.$$

$$\boxed{T=1\,\mathrm s},\qquad \boxed{x=10\sqrt3\,\mathrm m\approx17.3\,\mathrm m}.$$

**检查：**向下发射落地更早，水平初速度也更小；其撞地竖直速度为 $-20\,\mathrm{m\,s^{-1}}$。不要因为初始竖直速度为负，就把重力加速度改为正；正方向始终是向上。

## 经过指定高度 {#passing-through-a-given-height}

向上发射的物体可能两次经过同一高度：上升一次、下降一次。解竖直方程时保留两个时间，检查它们是否都在实际飞行中，再用 $\dot y$ 的符号判别。若求**达到或高于**某高度的持续时间，应解两根之间的不等式。

### 例题 5：在某高度以上多久 {#example-5-how-long-is-the-projectile-above-a-height}

**Question:** a particle leaves horizontal ground with components $u_x=15$ and $u_y=19.6$, in $\mathrm{m\,s^{-1}}$. Find the times when it is $14.7\,\mathrm m$ above ground, the duration for which it is at least that high, and its horizontal displacement during that interval.

$$14.7=19.6t-4.9t^2,\qquad t^2-4t+3=0.$$

$$\boxed{t=1\,\mathrm s\text{ or }3\,\mathrm s}.$$

开口向下的二次函数说明，$y\geq14.7$ 对应 $1\leq t\leq3$。持续时间为 $\boxed{2\,\mathrm s}$，这段时间的水平位移为：

$$\Delta x=15(3-1)=\boxed{30\,\mathrm m}.$$

**检查：**两个时刻的竖直速度分别是 $+9.8$、$-9.8\,\mathrm{m\,s^{-1}}$，均在 $t=4\,\mathrm s$ 落地之前。

## 轨迹方程 {#the-equation-of-the-path}

**轨迹（trajectory）**是抛体经过的路径。当 $u_x\ne0$，利用 $t=x/u_x$ 消去时间：

$$y=u_y\left(\frac{x}{u_x}\right)-\frac12g\left(\frac{x}{u_x}\right)^2.$$

$$\boxed{y=\frac{u_y}{u_x}x-\frac{g}{2u_x^2}x^2}.$$

代入 $u_x=V\cos\theta$ 和 $u_y=V\sin\theta$，得到：

$$y=x\tan\theta-\frac{gx^2}{2V^2\cos^2\theta}.$$

应展示消去 $t$ 的推导，而不是不写过程直接引用。当 $u_x\ne0$ 时，轨迹是对称轴竖直的抛物线；纯竖直发射则是 $x=0$。只保留释放到首次碰撞之间的那段轨迹。

### 例题 6：检查障碍物 {#example-6-checking-an-obstacle}

**Question:** a projectile leaves horizontal ground with components $u_x=20$ and $u_y=15$, in $\mathrm{m\,s^{-1}}$. A thin wall is $20\,\mathrm m$ horizontally from launch and $9\,\mathrm m$ high. Derive the path and decide whether the particle clears the wall.

$$x=20t,\qquad y=15t-4.9t^2.$$

代入 $t=x/20$，得到：

$$\boxed{y=\frac34x-\frac{49}{4000}x^2}.$$

在墙的位置：

$$y(20)=15-4.9=10.1\,\mathrm m.$$

在质点模型下，物体越过墙顶的余量为 $\boxed{1.1\,\mathrm m}$。

**检查：**到墙处需 $1\,\mathrm s$，代回时间方程得到相同高度。此时物体仍在上升。只知道最大高度，不能判断是否越过特定位置的墙。

## 求未知发射角 {#finding-an-unknown-projection-angle}

给定目标 $(a,b)$ 与发射速率 $V$，把坐标代入已推导的轨迹方程。设 $q=\tan\theta$，使用 $1/\cos^2\theta=1+q^2$，可得到关于 $q$ 的二次方程。实际可能有两个、一个或没有实数角。每个解都要检查角度范围、正的飞行时间和途中障碍。

### 例题 7：到达同一目标的两个角 {#example-7-two-angles-to-reach-one-target}

**Question:** a projectile is launched at $14\,\mathrm{m\,s^{-1}}$ from $O$. Find the acute angles above horizontal for which it passes through $(10,5)$ metres. There are no intervening obstacles.

![从 O 发射并经过同一高处目标的两条轨迹，一条发射角较小，另一条较大](/assets/img/a2-math-mech/projectile-two-paths.svg)

从 $x=14t\cos\theta$ 和 $y=14t\sin\theta-4.9t^2$ 推导轨迹，再代入目标坐标：

$$5=10q-\frac{9.8(10)^2}{2(14)^2}(1+q^2).$$

$$2.5q^2-10q+7.5=0,\qquad (q-1)(q-3)=0.$$

$$\boxed{\theta=45^\circ\text{ or }71.6^\circ}.$$

**检查：**使用 $t=10/(14\cos\theta)$，对每个精确的 $q$ 分别得到约 $1.01$、$2.26\,\mathrm s$，均为正；代回后都得到 $y=5$。核验时使用未舍入的角度。

## 高度限制 {#height-restrictions}

覆盖整段飞行的水平天花板限制的是最大高度，而不是某一个水平位置的高度。应区分**触碰边界**与严格低于边界。薄墙则要在墙的位置检查高度。

### 例题 8：天花板与临界角 {#example-8-a-ceiling-and-a-limiting-angle}

**Question:** a projectile leaves horizontal ground at $14\,\mathrm{m\,s^{-1}}$. A horizontal ceiling is $2.5\,\mathrm m$ above ground and extends over the whole flight. Find the limiting acute angle at which the path just touches the ceiling. State the angle condition for avoiding contact, and the limiting range.

在最高点，$\dot y=0$。代入竖直方程，得到：

$$H=\frac{(14\sin\theta)^2}{2g}.$$

在边界处令 $H=2.5$：

$$196\sin^2\theta=49,\qquad \boxed{\theta=30^\circ}.$$

若要求完全不接触且发射角为锐角，必须有 $\boxed{0<\theta<30^\circ}$。这里没有最大的允许角；$30^\circ$ 是极限值，在该角度会发生接触。

在边界处，$u_y=7$，$u_x=7\sqrt3$。由 $0=7t-4.9t^2$ 的正根得到 $T=10/7\,\mathrm s$。若完整自由飞行，它的射程为：

$$\boxed{R=10\sqrt3\,\mathrm m\approx17.3\,\mathrm m}.$$

这是低于天花板的轨迹所趋近的射程极限，不是碰撞后仍能完成的自由飞行距离。

**检查：**边界轨迹在 $t=5/7\,\mathrm s$ 到达 $y=2.5$。允许角都小于 $30^\circ$，它们的射程随角度增大而趋近此极限；无天花板时的 $45^\circ$ 最优角不符合限制。

## 练习 {#practice}

以下均为自拟题。忽略空气阻力，采用质点模型，除题目指出的障碍外不设其他障碍。未指定其他数值时取 $g=9.8\,\mathrm{m\,s^{-2}}$。

### Q1：速率与方向 {#q1-speed-and-direction}

A projectile leaves horizontal ground with components $u_x=12$ and $u_y=16$, in $\mathrm{m\,s^{-1}}$. Find its position, speed and direction after $1\,\mathrm s$.

<details markdown="1">
<summary>提示</summary>

位置分量用 $(12t,16t-4.9t^2)$，速度分量用 $(12,16-9.8t)$。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$\boxed{(x,y)=(12,11.1)\,\mathrm m}.$$

$$\boxed{\text{speed}=\sqrt{12^2+6.2^2}\approx13.5\,\mathrm{m\,s^{-1}}}.$$

$$\boxed{\alpha=\tan^{-1}(6.2/12)\approx27.3^\circ\text{ above horizontal}}.$$

**检查：**$\dot y=6.2>0$，说明正在上升；$y>0$，说明尚未落地。求速度方向不能用 $11.1/12$。

</details>

### Q2：回到相同高度 {#q2-flight-at-the-same-level}

A particle is projected from horizontal ground with components $u_x=12$ and $u_y=14.7$, in $\mathrm{m\,s^{-1}}$. Derive its time of flight, greatest height and range.

<details markdown="1">
<summary>提示</summary>

落地时令 $y=0$ 并舍去 $t=0$；最大高度处令 $\dot y=0$。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$0=14.7t-4.9t^2=4.9t(3-t),\qquad \boxed{T=3\,\mathrm s}.$$

最高点发生在 $t=14.7/9.8=1.5\,\mathrm s$：

$$H=14.7(1.5)-4.9(1.5)^2=11.025\,\mathrm m\approx\boxed{11.0\,\mathrm m}.$$

$$\boxed{R=12(3)=36\,\mathrm m}.$$

**检查：**最高点在总飞行时间的一半处，此时速率为 $12\,\mathrm{m\,s^{-1}}$。

</details>

### Q3：落地低于发射点 {#q3-landing-below-the-launch-point}

A projectile leaves a point $19.6\,\mathrm m$ above horizontal ground with horizontal component $8\,\mathrm{m\,s^{-1}}$ and upward component $14.7\,\mathrm{m\,s^{-1}}$. Find landing time, horizontal landing distance and impact speed.

<details markdown="1">
<summary>提示</summary>

原点在发射点时，落地条件是 $y=-19.6$。先解竖直方程。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$-19.6=14.7t-4.9t^2,\qquad (t-4)(t+1)=0.$$

$$\boxed{T=4\,\mathrm s},\qquad \boxed{x=32\,\mathrm m}.$$

撞地时，$\dot y=14.7-9.8(4)=-24.5\,\mathrm{m\,s^{-1}}$：

$$\boxed{\text{speed}=\sqrt{8^2+24.5^2}\approx25.8\,\mathrm{m\,s^{-1}}}.$$

**检查：**$y(4)=-19.6$；负根不属于释放后的运动。

</details>

### Q4：水平与向下发射 {#q4-horizontal-and-downward-projection}

Take $g=10\,\mathrm{m\,s^{-2}}$. (a) A particle is projected horizontally at $6\,\mathrm{m\,s^{-1}}$ from height $5\,\mathrm m$. (b) Another particle is projected from height $8\,\mathrm m$ with velocity components $8\,\mathrm{m\,s^{-1}}$ right and $6\,\mathrm{m\,s^{-1}}$ down. Find the landing time and horizontal distance in each case.

<details markdown="1">
<summary>提示</summary>

取向上为正，两个初始竖直分量分别是 $0$、$-6$。

</details>

<details markdown="1">
<summary>解答与检查</summary>

**(a)** $-5=-5t^2$，所以 $\boxed{T=1\,\mathrm s}$，$\boxed{x=6\,\mathrm m}$。

**(b)** $-8=-6t-5t^2$，所以 $5t^2+6t-8=0$，两根为 $0.8$ 和 $-2$：

$$\boxed{T=0.8\,\mathrm s},\qquad \boxed{x=6.4\,\mathrm m}.$$

**检查：**$-6(0.8)-5(0.8)^2=-8$。若把初始竖直分量写成正的 $6$，描述的就是向上发射。

</details>

### Q5：两次经过同一高度 {#q5-two-times-at-one-height}

A projectile leaves horizontal ground with components $u_x=10$ and $u_y=14.7$, in $\mathrm{m\,s^{-1}}$. Find the times when it is $9.8\,\mathrm m$ high, the duration for which it is at least this high and its horizontal displacement during that interval.

<details markdown="1">
<summary>提示</summary>

解 $9.8=14.7t-4.9t^2$，再用两根之间的区间。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$t^2-3t+2=(t-1)(t-2)=0.$$

两个时刻为 $\boxed{1\,\mathrm s\text{ and }2\,\mathrm s}$。持续时间为 $\boxed{1\,\mathrm s}$，水平位移为 $\boxed{10\,\mathrm m}$。

**检查：**竖直速度分别是 $+4.9$、$-4.9\,\mathrm{m\,s^{-1}}$，都在 $t=3\,\mathrm s$ 落地之前。

</details>

### Q6：能否越过墙顶 {#q6-does-it-clear-the-wall}

A projectile leaves horizontal ground with components $u_x=10$ and $u_y=14.7$, in $\mathrm{m\,s^{-1}}$. A thin wall is $20\,\mathrm m$ away and $10\,\mathrm m$ high. Derive the trajectory and decide whether the projectile clears the wall.

<details markdown="1">
<summary>提示</summary>

消去 $t$（利用 $t=x/10$），再检查 $x=20$ 处的高度。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$\boxed{y=1.47x-0.049x^2}.$$

$$y(20)=29.4-19.6=9.8\,\mathrm m.$$

物体**不能**越过墙顶；在墙处算出的高度比墙顶低 $0.2\,\mathrm m$，所以自由飞行模型在碰墙时终止。

**检查：**代入 $t=2$ 得到同一高度。最大高度 $11.025\,\mathrm m$ 虽高于墙顶，但最高点在到墙之前。只比较最大高度并不够。

</details>

### Q7：求出两个角 {#q7-find-both-angles}

A projectile is launched at $14\,\mathrm{m\,s^{-1}}$ and passes through $(10,2.5)$ metres relative to launch. Find both acute projection angles. There are no intervening obstacles.

<details markdown="1">
<summary>提示</summary>

推导轨迹，令 $q=\tan\theta$，并使用 $1/\cos^2\theta=1+q^2$。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$2.5=10q-2.5(1+q^2),\qquad q^2-4q+2=0.$$

$$q=2\pm\sqrt2.$$

$$\boxed{\theta\approx30.4^\circ\text{ or }73.7^\circ}.$$

**检查：**对每个精确的 $q$，使用 $\cos\theta=1/\sqrt{1+q^2}$ 和 $t=10/(14\cos\theta)$。代回原竖直方程都得到 $y=2.5$，且两个时间都为正。

</details>

### Q8：天花板限制 {#q8-a-ceiling-restriction}

Take $g=10\,\mathrm{m\,s^{-2}}$. A projectile leaves horizontal ground at $20\,\mathrm{m\,s^{-1}}$ under a ceiling $5\,\mathrm m$ above ground, extending over the whole flight. Find the limiting acute angle for touching the ceiling, the range of angles avoiding contact and the limiting horizontal range.

<details markdown="1">
<summary>提示</summary>

用竖直速度为零找到最高点时间，再代入高度方程。等号表示触碰，严格不等号表示不接触。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$t_{\text{top}}=\frac{20\sin\theta}{10}=2\sin\theta.$$

$$H=20\sin\theta(2\sin\theta)-5(2\sin\theta)^2=20\sin^2\theta.$$

令 $H=5$，得到 $\boxed{\theta=30^\circ}$。若要求不接触且角为锐角，必须有 $\boxed{0<\theta<30^\circ}$。

在边界处，$u_x=10\sqrt3$，$u_y=10$；$0=10t-5t^2$ 的正根为 $2\,\mathrm s$。水平射程的极限为：

$$\boxed{R=20\sqrt3\,\mathrm m\approx34.6\,\mathrm m}.$$

**检查：**边界轨迹达到高度 $5$ 的时刻是 $t=1$。这个角度会触碰天花板；所算射程是较小角度的飞行所趋近的极限，不是允许的无碰撞最大值。

</details>

<!-- motion-transfer:start -->
## 独立选择方法 {#independent-method-choice}

**自拟诊断任务。**先选择方程并说明它为什么能回答问题，再计算。首次尝试时保持提示与反馈折叠。

**Question:** A particle is projected from a point $4.9\,\mathrm m$ above horizontal ground with velocity components $8\,\mathrm{m\,s^{-1}}$ horizontally and $14.7\,\mathrm{m\,s^{-1}}$ upwards. Ignore air resistance. Find both horizontal positions where it is $14.7\,\mathrm m$ above the ground and state its velocity at each. A student says, "There is only one position because the velocity is zero at the top." Diagnose this claim and find the speed at the top. Take the origin at launch and stop the model at first ground contact.

<details markdown="1">
<summary>推理提示</summary>

先把离地高度换成相对发射点的位移；两个分量共用同一时间。分清竖直速度为零与整个速度为零。

</details>

<details markdown="1">
<summary>反馈与独立核验</summary>

求位置和方向应使用分量方程；同高射程公式不能定位途中某一高度。所求高度相对发射点为 $14.7-4.9=9.8\,\mathrm m$：

$$9.8=14.7t-4.9t^2,\qquad (t-1)(t-2)=0.$$

$$\boxed{x=8\,\mathrm m\text{ at }t=1\,\mathrm s},\qquad \boxed{x=16\,\mathrm m\text{ at }t=2\,\mathrm s}.$$

$$\boxed{\mathbf v(1)=8\mathbf i+4.9\mathbf j\,\mathrm{m\,s^{-1}}},\qquad \boxed{\mathbf v(2)=8\mathbf i-4.9\mathbf j\,\mathrm{m\,s^{-1}}}.$$

两次都在首次落地前：$-4.9=14.7t-4.9t^2$ 的正根为 $(3+\sqrt{13})/2\approx3.30\,\mathrm s$。两次速率均为 $\sqrt{88.01}\approx9.38\,\mathrm{m\,s^{-1}}$，方向分别为水平线上方、下方 $31.5^\circ$。在 $t=1.5\,\mathrm s$，只有竖直速度为零，速率仍为 $\boxed{8\,\mathrm{m\,s^{-1}}}$。最高点离地 $15.925\,\mathrm m$，高于所求高度，故两次经过符合图像。

若只保留一个根，把两个根都代回原高度方程；若把最高点速率写成零，在那里分别写出两个速度分量。独立的能量核验给出 $v^2=8^2+14.7^2-2g(9.8)=88.01$；它能核验速率，但不能选择上升或下降的方向分支。

</details>

### 再尝试：改变问题结构 {#retry-change-the-structure}

**Question:** A different particle is projected horizontally from $19.6\,\mathrm m$ above horizontal ground and first lands $18\,\mathrm m$ from the foot of the launch point. With no air resistance, find its initial speed and impact velocity. Explain which component determines the flight time.

<details markdown="1">
<summary>再尝试提示</summary>

初始竖直分量为零。先求正的落地时间，再使用给定的水平距离。

</details>

<details markdown="1">
<summary>再尝试反馈与检查</summary>

$$-19.6=-4.9t^2,\qquad \boxed{T=2\,\mathrm s},\qquad u_x=\frac{18}{2}=9\,\mathrm{m\,s^{-1}}.$$

$$\boxed{\text{initial speed}=9\,\mathrm{m\,s^{-1}}},\qquad \boxed{\mathbf v=9\mathbf i-19.6\mathbf j\,\mathrm{m\,s^{-1}}}.$$

竖直分量决定落地时间。撞地速率为 $\sqrt{465.16}\approx21.6\,\mathrm{m\,s^{-1}}$，方向为水平线下方 $65.3^\circ$。检查 $x(2)=18$、$y(2)=-19.6$ 与 $v^2=9^2+2g(19.6)$。这次由落点反求未知发射分量，改变了求问方向。

</details>
<!-- motion-transfer:end -->

## 速查 {#quick-reference}

| 所求量 | 从这里开始 |
| --- | --- |
| 时刻 $t$ 的位置 | $x=u_xt$、$y=u_yt-\frac12gt^2$ |
| 速率和方向 | 速度分量 $u_x$、$u_y-gt$ |
| 向上发射的最大高度 | 先令竖直速度为零，再求高度 |
| 落地时间 | 把实际落地高度代入竖直方程 |
| 水平落地距离 | 把落地时间代入 $x=u_xt$ |
| 经过同一高度的两个时刻 | 解竖直二次方程，检查两根是否都在飞行域内 |
| 轨迹或墙 | 消去 $t$，求指定水平位置的高度 |
| 未知发射角 | 代入目标，解关于 $\tan\theta$ 的二次方程 |
| 覆盖整段飞行的天花板 | 比较最大高度与天花板高度，检查严格不等号 |

向上发射且回到同一高度时，推导 $T=2u_y/g$、$H=u_y^2/(2g)$ 和 $R=2u_xu_y/g$ 来核验。发射与落地不同高时，应在分量方程中代入实际高度。

**学习路线：**[上一课：牛顿运动定律](/zh/alevel/a2-mathematics/mechanics/newtons-laws-of-motion/) · [下一课：功与能](/zh/alevel/a2-mathematics/mechanics/work-and-energy/) · [力学单元入口](/zh/alevel/a2-mathematics/mechanics/)。
