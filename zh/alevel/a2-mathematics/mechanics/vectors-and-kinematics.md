---
title: 向量与运动学
layout: subjects
mathjax: true
grade: a2
subject: m2
lang: zh-CN
translation_of: /alevel/a2-mathematics/mechanics/vectors-and-kinematics/
permalink: /zh/alevel/a2-mathematics/mechanics/vectors-and-kinematics/
toc_headings: h2
study_page: true
---

[A2 力学](/zh/alevel/a2-mathematics/mechanics/) · M2.2 运动学

用向量描述一维、二维或三维运动。微分得到速度与加速度；积分并使用给定条件得到位置。

- **学习：**从[位置与位移](#position-and-displacement)开始，再学习[微分](#velocity-and-acceleration)、[积分](#integrating-with-given-conditions)与[质点轨迹](#the-path-of-a-particle)。
- **作业帮助：**计算前判断题目要求向量、大小还是方向。
- **复习：**关闭提示与解答，先尝试[练习](#practice)。

教材：第 10 章 10.2 节及章末复习（印刷 pp.151–157）。本课包含笛卡尔单位向量、变加速度、速率、给定条件及轨迹的直角坐标方程。

**开始前：**复习[向量与位置向量](/zh/alevel/a2-mathematics/vectors/#vectors-and-position-vectors)、[微分](/zh/alevel/a2-mathematics/differentiation/)和[积分](/zh/alevel/a2-mathematics/integration/)。三角函数微积分使用弧度。下文未另说明时，时间单位为秒，位置坐标单位为米。数值角度默认一位小数，另有要求时依题意。

全部例题与练习均为自拟题，不是官方真题。建议练习时间仅供参考，不设官方分值。

## 位置与位移 {#position-and-displacement}

笛卡尔单位向量（Cartesian unit vectors）$\mathbf i$、$\mathbf j$、$\mathbf k$ 分别沿坐标轴正方向，大小均为 $1$。

**位置向量**（position vector）$\mathbf r$ 表示质点相对固定原点 $O$ 的位置。两位置间的**位移**（displacement）为末位置减初位置：

$$\Delta\mathbf r=\mathbf r(t_2)-\mathbf r(t_1).$$

对 $\mathbf q=q_x\mathbf i+q_y\mathbf j+q_z\mathbf k$，其模为

$$\lvert\mathbf q\rvert=\sqrt{q_x^2+q_y^2+q_z^2}.$$

距 $O$ 的距离是 $\lvert\mathbf r\rvert$。位移的模是两个位置间的直线距离。**两者一般都不是沿曲线路径经过的总路程。**

### 例题 1 — 两点间的位移 {#example-1--find-the-displacement-between-two-points}

**Question:** A particle moves from $A=(-1,2,3)$ to $B=(3,-1,5)$. Find its displacement, the straight-line distance $AB$ and a unit vector in the displacement direction.

用末位置减初位置：

$$\overrightarrow{AB}=(3-(-1))\mathbf i+(-1-2)\mathbf j+(5-3)\mathbf k.$$

$$\boxed{\overrightarrow{AB}=4\mathbf i-3\mathbf j+2\mathbf k\ \mathrm m},\qquad\boxed{AB=\sqrt{29}\,\mathrm m}.$$

除以模，得到沿位移方向的单位向量：

$$\boxed{\frac{4\mathbf i-3\mathbf j+2\mathbf k}{\sqrt{29}}}.$$

**检查：**位移加上 $\overrightarrow{OA}$ 应得 $\overrightarrow{OB}$。所求单位向量的模的平方为 $(16+9+4)/29=1$。

## 速度与加速度 {#velocity-and-acceleration}

对每个分量分别按时间求导：

$$\mathbf v=\frac{\mathrm d\mathbf r}{\mathrm dt},\qquad\mathbf a=\frac{\mathrm d\mathbf v}{\mathrm dt}=\frac{\mathrm d^2\mathbf r}{\mathrm dt^2}.$$

| 量 | 含义 | 单位 |
| --- | --- | --- |
| 位置 $\mathbf r$ | 相对原点的位置 | $\mathrm m$ |
| 速度（velocity）$\mathbf v$ | 位置变化率，包含方向 | $\mathrm{m\,s^{-1}}$ |
| 速率（speed）$\lvert\mathbf v\rvert$ | 速度的模 | $\mathrm{m\,s^{-1}}$ |
| 加速度（acceleration）$\mathbf a$ | 速度变化率 | $\mathrm{m\,s^{-2}}$ |

这些单位向量固定，只需对标量系数求导。先求 $\mathbf v$ 再求它的模：**对 $\lvert\mathbf r\rvert$ 求导一般得不到速率**。

### 例题 2 — 三维求导 {#example-2--differentiate-in-three-dimensions}

**Question:** For $t\geq0$, a particle has position

$$\mathbf r=(t^2+1)\mathbf i+(t^3-2t)\mathbf j+3t\mathbf k.$$

Find velocity, acceleration and speed at $t=1$. Find the angle between the velocity and the positive $x$-axis at this time.

$$\mathbf v=2t\mathbf i+(3t^2-2)\mathbf j+3\mathbf k,$$

$$\mathbf a=2\mathbf i+6t\mathbf j.$$

在 $t=1$ 时：

$$\boxed{\mathbf v=2\mathbf i+\mathbf j+3\mathbf k\ \mathrm{m\,s^{-1}}},$$

$$\boxed{\mathbf a=2\mathbf i+6\mathbf j\ \mathrm{m\,s^{-2}}}.$$

速率为 $\boxed{\sqrt{14}\,\mathrm{m\,s^{-1}}}$。

利用与 $\mathbf i$ 的数量积求角 $\theta$：

$$\cos\theta=\frac{\mathbf v\cdot\mathbf i}{\lvert\mathbf v\rvert\lvert\mathbf i\rvert}=\frac2{\sqrt{14}},\qquad\boxed{\theta=57.7^\circ}.$$

**检查：**速度的 $k$ 分量恒定，所以加速度的 $k$ 分量为零。$x$ 分量为正，说明夹角小于 $90^\circ$，这里以 $x$ 轴正向为参考。

**常见错误：**把速度分量相加当作速率。这里速率是 $\sqrt{2^2+1^2+3^2}$，不是 $2+1+3$。

## 使用给定条件积分 {#integrating-with-given-conditions}

逐分量积分。向量积分需要一个**常向量**（constant vector）：

$$\mathbf v=\int\mathbf a\,\mathrm dt+\mathbf C,\qquad\mathbf r=\int\mathbf v\,\mathrm dt+\mathbf D.$$

这里各积分表示选定的一个原函数。$\mathbf C=C_x\mathbf i+C_y\mathbf j+C_z\mathbf k$ 与 $\mathbf D$ 是不同的常向量。单个标量分量写 $+C$；第二次积分应使用另一个常数。

**在题目实际给定的时刻代入。**“Initially”表示 $t=0$，但像 $\mathbf v(1)=\mathbf i$ 这样的条件必须在 $t=1$ 代入。静止表示 $\mathbf v=\mathbf0$，不表示 $\mathbf r=\mathbf0$。

### 例题 3 — 初始位置不为零 {#example-3--position-is-not-initially-zero}

**Question:** A particle has velocity

$$\mathbf v=4t\mathbf i+(3t^2-2)\mathbf j,$$

and initial position $\mathbf r(0)=2\mathbf i+5\mathbf j$. Find its position at $t=2$, its displacement from its initial position and its speed then.

积分得：

$$\mathbf r=2t^2\mathbf i+(t^3-2t)\mathbf j+\mathbf C.$$

当 $t=0$ 时，含时间的项为零，所以 $\mathbf C=2\mathbf i+5\mathbf j$。因此

$$\boxed{\mathbf r=(2t^2+2)\mathbf i+(t^3-2t+5)\mathbf j}.$$

当 $t=2$，$\boxed{\mathbf r(2)=10\mathbf i+9\mathbf j\ \mathrm m}$。位移为

$$\mathbf r(2)-\mathbf r(0)=\boxed{8\mathbf i+4\mathbf j\ \mathrm m}.$$

速度为 $8\mathbf i+10\mathbf j$，所以速率为

$$\boxed{\sqrt{164}=2\sqrt{41}\approx12.8\,\mathrm{m\,s^{-1}}}.$$

距 $O$ 的距离为 $\sqrt{181}\,\mathrm m$，位移的模为 $\sqrt{80}\,\mathrm m$；它们回答不同的问题。

**检查：**在 $t=0$ 代入应恢复题目给出的初始位置；对位置求导应得到原速度。

### 例题 4 — 使用较晚时刻的条件积分两次 {#example-4--integrate-twice-using-conditions-at-a-later-time}

**Question:** A particle has acceleration $\mathbf a=2\mathbf i+6t\mathbf j$. At $t=1$, its velocity is $3\mathbf i+2\mathbf j$ and its position is $4\mathbf i-\mathbf j$. Find $\mathbf v(t)$ and $\mathbf r(t)$, then its position at $t=2$.

先对加速度积分：

$$\mathbf v=2t\mathbf i+3t^2\mathbf j+\mathbf C.$$

在 $t=1$，$2\mathbf i+3\mathbf j+\mathbf C=3\mathbf i+2\mathbf j$，所以 $\mathbf C=\mathbf i-\mathbf j$：

$$\boxed{\mathbf v=(2t+1)\mathbf i+(3t^2-1)\mathbf j}.$$

再次积分，并引入新的常向量：

$$\mathbf r=(t^2+t)\mathbf i+(t^3-t)\mathbf j+\mathbf D.$$

在 $t=1$，$2\mathbf i+\mathbf D=4\mathbf i-\mathbf j$，所以 $\mathbf D=2\mathbf i-\mathbf j$：

$$\boxed{\mathbf r=(t^2+t+2)\mathbf i+(t^3-t-1)\mathbf j}.$$

于是 $\boxed{\mathbf r(2)=8\mathbf i+5\mathbf j\ \mathrm m}$。

**检查：**在 $t=1$ 应同时恢复题目给定的两个向量；对位置求二阶导应得 $2\mathbf i+6t\mathbf j$。

**常见错误：**不代入 $t=1$，直接把题目给的位置和速度当成积分常量。该时刻含时间的项并不为零。

### 例题 5 — 指数与三角分量 {#example-5--exponential-and-trigonometric-components}

**Question:** For $t\geq0$, a particle has velocity

$$\mathbf v=2e^{-t}\mathbf i+\cos t\,\mathbf j-2t\mathbf k,$$

and initial position $3\mathbf i-\mathbf j+\mathbf k$. Find its position and acceleration at time $t$, and its initial speed.

使用弧度积分：

$$\mathbf r=-2e^{-t}\mathbf i+\sin t\,\mathbf j-t^2\mathbf k+\mathbf C.$$

在 $t=0$，$-2\mathbf i+\mathbf C=3\mathbf i-\mathbf j+\mathbf k$，得到 $\mathbf C=5\mathbf i-\mathbf j+\mathbf k$：

$$\boxed{\mathbf r=(5-2e^{-t})\mathbf i+(\sin t-1)\mathbf j+(1-t^2)\mathbf k}.$$

对速度求导得

$$\boxed{\mathbf a=-2e^{-t}\mathbf i-\sin t\,\mathbf j-2\mathbf k}.$$

初始时 $\mathbf v(0)=2\mathbf i+\mathbf j$，所以速率为 $\boxed{\sqrt5\,\mathrm{m\,s^{-1}}}$。

**检查：**$\frac{\mathrm d}{\mathrm dt}(-2e^{-t})=2e^{-t}$。位置的 $k$ 分量为 $1-t^2$，其导数是 $-2t$。

## 质点的轨迹 {#the-path-of-a-particle}

$\mathbf r(t)$ 的分量方程给出轨迹的**参数方程**（parametric equations）。消去 $t$ 得直角坐标方程，同时保留时间区间带来的限制。

速度非零时，速度沿轨迹的切线方向；加速度不一定与它同向。两个非零向量可用 $\mathbf v\cdot\mathbf a=0$ 检验垂直。

![轨迹为 y 等于 x 的平方除以四减二 x，质点位于 (4, -4)，速度向右、加速度向上](/assets/img/a2-math-mech/kinematics-path.svg)

### 例题 6 — 消去时间并比较方向 {#example-6--eliminate-time-and-compare-directions}

**Question:** For $t\geq0$, a particle has position $\mathbf r=2t\mathbf i+(t^2-4t)\mathbf j$. Find the Cartesian equation of its path. Find when velocity and acceleration are perpendicular. Is it at rest then?

分量方程为 $x=2t$、$y=t^2-4t$。由 $t=x/2$ 得

$$\boxed{y=\frac{x^2}{4}-2x,\qquad x\geq0}.$$

求导得：

$$\mathbf v=2\mathbf i+(2t-4)\mathbf j,\qquad\mathbf a=2\mathbf j.$$

两个向量均非零，其数量积为

$$\mathbf v\cdot\mathbf a=2(0)+(2t-4)(2)=4t-8.$$

在 $\boxed{t=2\,\mathrm s}$ 时为零。此时位置为 $(4,-4)$、速度为 $2\mathbf i$。质点**没有静止**，速率仍为 $2\,\mathrm{m\,s^{-1}}$。

**检查：**轨迹在 $(4,-4)$ 处的切线水平，与速度方向一致；加速度向上。在 $t=0$ 时轨迹经过 $(0,0)$。

**常见错误：**只因一个速度分量为零就说停止。静止必须在同一时刻全部速度分量均为零。

## 练习 {#practice}

建议约 35–45 分钟。数值向量及模都要写单位。题目未要求舍入时保留精确值。

### Q1 — 求导与速率 {#q1--differentiate-and-find-speed}

For $t\geq0$, $\mathbf r=(2t^3-t)\mathbf i+(t^2+3)\mathbf j-4t\mathbf k$. Find $\mathbf v(t)$, $\mathbf a(t)$ and the speed at $t=1$.

<details markdown="1">
<summary>提示</summary>

逐个系数求导，再求 $t=1$ 时速度的模。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$\boxed{\mathbf v=(6t^2-1)\mathbf i+2t\mathbf j-4\mathbf k},\qquad\boxed{\mathbf a=12t\mathbf i+2\mathbf j}.$$

在 $t=1$，$\mathbf v=5\mathbf i+2\mathbf j-4\mathbf k\ \mathrm{m\,s^{-1}}$，所以速率 $=\boxed{\sqrt{45}=3\sqrt5\,\mathrm{m\,s^{-1}}}$。

**检查：**恒定的速度分量 $-4$ 在 $k$ 方向产生零加速度。

</details>

### Q2 — 使用初始位置 {#q2--use-an-initial-position}

For $t\geq0$, $\mathbf v=6t\mathbf i+(2t-3)\mathbf j$ and $\mathbf r(0)=-\mathbf i+4\mathbf j$. Find the position at $t=2$ and the displacement over $0\leq t\leq2$.

<details markdown="1">
<summary>提示</summary>

积分后加上常向量。位移是两个位置向量之差。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$\mathbf r=(3t^2-1)\mathbf i+(t^2-3t+4)\mathbf j.$$

$$\boxed{\mathbf r(2)=11\mathbf i+2\mathbf j\ \mathrm m},\qquad\boxed{\Delta\mathbf r=12\mathbf i-2\mathbf j\ \mathrm m}.$$

**检查：**当 $t=0$，位置为 $-\mathbf i+4\mathbf j$；位置求导恢复给定速度。

</details>

### Q3 — 使用 t = 2 的两个条件 {#q3--use-two-conditions-at-t--2}

A particle has acceleration $\mathbf a=4t\mathbf i-2\mathbf j$. At $t=2$, $\mathbf v=3\mathbf i+\mathbf j$ and $\mathbf r=5\mathbf i+2\mathbf j$. Find velocity and position at time $t$.

<details markdown="1">
<summary>提示</summary>

速度用一个常向量，位置再用新的常向量；每次都在 $t=2$ 代入。

</details>

<details markdown="1">
<summary>解答与检查</summary>

积分得 $\mathbf v=2t^2\mathbf i-2t\mathbf j+\mathbf C$。在 $t=2$，$\mathbf C=-5\mathbf i+5\mathbf j$，所以

$$\boxed{\mathbf v=(2t^2-5)\mathbf i+(5-2t)\mathbf j}.$$

再积分并使用给定位置，得到

$$\boxed{\mathbf r=\left(\frac{2t^3}{3}-5t+\frac{29}{3}\right)\mathbf i+(-t^2+5t-4)\mathbf j}.$$

**检查：**在 $t=2$，位置分量为

$$\frac{16}{3}-10+\frac{29}{3}=5,\qquad -4+10-4=2.$$

速度为 $(3,1)$，其导数为 $(4t,-2)$。

</details>

### Q4 — 单个零分量不等于静止 {#q4--a-zero-component-is-not-rest}

For $t\geq0$, $\mathbf v=(t-1)\mathbf i+(t+1)\mathbf j$. Can the particle be at rest? Find its least speed and the time when it occurs.

<details markdown="1">
<summary>提示</summary>

静止要求两个分量同时为零。求最小速率时，可先求速率平方的最小值。

</details>

<details markdown="1">
<summary>解答与检查</summary>

两分量分别在 $t=1$ 和 $t=-1$ 为零，从不同时为零，因此不可能静止。

$$\lvert\mathbf v\rvert^2=(t-1)^2+(t+1)^2=2t^2+2.$$

对 $t\geq0$，最小值在 $\boxed{t=0}$，最小速率为 $\boxed{\sqrt2\,\mathrm{m\,s^{-1}}}$。

**检查：**当 $t=1$，速率仍为 $2\,\mathrm{m\,s^{-1}}$，尽管 $i$ 分量为零。

</details>

### Q5 — 轨迹与垂直向量 {#q5--find-a-path-and-perpendicular-vectors}

For $t\geq0$, $\mathbf r=3t\mathbf i+(t^2-2t)\mathbf j$. Find the Cartesian equation of the path, including its restriction. Find when velocity and acceleration are perpendicular, and give the speed then.

<details markdown="1">
<summary>提示</summary>

轨迹用 $t=x/3$，垂直方向用 $\mathbf v\cdot\mathbf a=0$。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$\boxed{y=\frac{x^2}{9}-\frac{2x}{3},\quad x\geq0}.$$

$\mathbf v=3\mathbf i+(2t-2)\mathbf j$，$\mathbf a=2\mathbf j$。数量积为 $4t-4$，所以在 $\boxed{t=1\,\mathrm s}$ 时垂直，此时速率为 $\boxed{3\,\mathrm{m\,s^{-1}}}$。

**检查：**质点位于 $(3,-1)$，该处轨迹切线水平，两个向量均非零。

</details>

### Q6 — 含正弦与指数的三维运动 {#q6--three-dimensional-motion-with-sine-and-an-exponential}

For $t\geq0$, $\mathbf v=e^t\mathbf i+2\sin t\,\mathbf j+2t\mathbf k$ and $\mathbf r(0)=2\mathbf i+\mathbf k$. Find $\mathbf r(t)$, $\mathbf a(t)$ and the initial speed.

<details markdown="1">
<summary>提示</summary>

用 $\int\sin t\,\mathrm dt=-\cos t+C$。在 $t=0$ 时，$e^t=1$、$\cos t=1$。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$\boxed{\mathbf r=(e^t+1)\mathbf i+(2-2\cos t)\mathbf j+(t^2+1)\mathbf k}.$$

$$\boxed{\mathbf a=e^t\mathbf i+2\cos t\,\mathbf j+2\mathbf k}.$$

初始时 $\mathbf v=\mathbf i$，所以速率 $=\boxed{1\,\mathrm{m\,s^{-1}}}$。

**检查：**在 $t=0$，位置为 $(2,0,1)$。求导恢复给定速度，包括为正的 $2\sin t$ 分量。

</details>

### Q7 — 位置、位移与路程 {#q7--distinguish-position-displacement-and-distance-travelled}

For $0\leq t\leq3$, a particle moves in a straight line with position $\mathbf r=(t^2-4t+3)\mathbf i$. Find its final position vector, displacement, distance from the origin at $t=3$ and total distance travelled.

<details markdown="1">
<summary>提示</summary>

先找速度改变符号的时刻，再把运动分段。

</details>

<details markdown="1">
<summary>解答与检查</summary>

初始时 $\mathbf r(0)=3\mathbf i\ \mathrm m$；最终 $\boxed{\mathbf r(3)=\mathbf0\ \mathrm m}$，所以位移 $=\boxed{-3\mathbf i\ \mathrm m}$，最终距 $O$ 的距离为 $\boxed{0\,\mathrm m}$。

$\mathbf v=(2t-4)\mathbf i$ 在 $t=2$ 改变方向，该时刻坐标为 $-1$。质点先由 $3$ 走到 $-1$，再到 $0$：

$$\boxed{\text{distance travelled}=\lvert-1-3\rvert+\lvert0-(-1)\rvert=5\,\mathrm m}.$$

**检查：**总路程 $5\,\mathrm m$ 大于位移大小 $3\,\mathrm m$，因为质点曾反向。

</details>

## 独立考查 {#independent-check}

**Self-written task.** For $0\leq t\leq2$, particles A and B have positions $\mathbf r_A=t\mathbf i+t^2\mathbf j$ and $\mathbf r_B=(3-t)\mathbf i+\mathbf j$, in metres with time in seconds. Sketch their paths, including their directions of motion. Their paths pass through a common point. Decide whether they collide during the interval and justify your decision. No method is specified.

<details markdown="1">
<summary>推理提示</summary>

轨迹相交可以使用不同的时间参数；碰撞必须在同一时刻同时满足两个分量方程。

</details>

<details markdown="1">
<summary>解答、反馈与再尝试</summary>

A 沿抛物线的一段运动，横坐标递增；B 沿水平线段向左运动：

$$y_A=x_A^2,\quad 0\leq x_A\leq2;\qquad y_B=1,\quad1\leq x_B\leq3.$$

公共点为 $(1,1)$，A 在 $t=1$ 到达，B 在 $t=2$ 到达，并非同一时刻。也可以直接要求横坐标相同：$t=3-t$ 得 $t=\frac32$，但此时纵坐标分别为 $\frac94$ 与 $1$，所以不碰撞。只找到轨迹交点还不够。

**Retry, with this panel closed:** A different particle has position $\mathbf r=\cos t\,\mathbf i+\sin t\,\mathbf j$ for $0\leq t\leq\frac\pi2$. A student differentiates its distance from the origin and concludes that it is at rest. Assess the reasoning. Find its speed and total distance travelled over the interval.

</details>

<details markdown="1">
<summary>再尝试核对</summary>

$$\lvert\mathbf r\rvert=1,\qquad\mathbf v=-\sin t\,\mathbf i+\cos t\,\mathbf j,\qquad\lvert\mathbf v\rvert=1.$$

质点距原点的距离恒定，但位置仍在改变。速率为 $1\,\mathrm{m\,s^{-1}}$，该区间总路程为 $\frac\pi2\,\mathrm m$。对距原点的距离求导衡量径向运动，一般不等于沿轨迹的速率。

</details>

## 来源与范围 {#sources-and-scope}

范围：[OxfordAQA 9660 specification v5.2，M2.2、M2.4](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf)，先修为 A2 纯数微分、积分与向量。已配合[原卷](/assets/pdf/fx-cg50/references/oxfordaqa-ma05-2025-january-question-paper.pdf)及[最终评分标准](/assets/pdf/fx-cg50/references/oxfordaqa-ma05-2025-january-mark-scheme.pdf)阅读 **MA05 January 2025 Q3(b)、Q9**，用于核对分量求导、两次积分和条件使用的作答。本页题目均为自拟。

## 速查 {#quick-reference}

| 所求对象 | 方法 | 检查 |
| --- | --- | --- |
| 速度或加速度 | 各分量分别对 $t$ 求导 | 单位正确，固定单位向量不用求导 |
| 速率 | 求 $\lvert\mathbf v\rvert$ | 是非负标量，不是分量相加 |
| 由速度求位置 | 积分，加 $\mathbf C$，代入给定位置 | 在指定时刻代入，并求导回查 |
| 由加速度求位置 | 积分两次，用不同常量与条件 | 恢复两个给定向量 |
| 位移 | 末位置减初位置 | 是向量，区别于路程 |
| 距 $O$ 的距离 | 求 $\lvert\mathbf r\rvert$ | 依赖所选原点 |
| 静止 | 同时令全部速度分量为零 | 单个分量为零不够 |
| 方向 | 用分量或数量积 | 写参考轴，检查象限 |
| 直角坐标轨迹 | 从分量方程消去 $t$ | 保留时间区间的限制 |
| 速度与加速度垂直 | 用 $\mathbf v\cdot\mathbf a=0$ | 两向量均须非零 |

**练习后：**记录错误属于微分、积分、给定条件、模、方向，还是把所求对象辨认错了。

**你应能：**处理二维与三维运动、使用任意给定时刻的条件、区分速度与速率，并求轨迹的直角坐标方程。

**学习路线：**[上一课：数学建模](/zh/alevel/a2-mathematics/mechanics/mathematical-modelling/) · [力学目录](/zh/alevel/a2-mathematics/mechanics/) · [下一课：力、平衡与摩擦](/zh/alevel/a2-mathematics/mechanics/forces-equilibrium-and-friction/)。
