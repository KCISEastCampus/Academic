---
title: 牛顿运动定律
layout: subjects
mathjax: true
grade: a2
subject: m2
lang: zh-CN
translation_of: /alevel/a2-mathematics/mechanics/newtons-laws-of-motion/
permalink: /zh/alevel/a2-mathematics/mechanics/newtons-laws-of-motion/
toc_headings: h2
study_page: true
---

[A2 力学](/zh/alevel/a2-mathematics/mechanics/) · M2.4 牛顿运动定律（Newton's laws of motion）

由合力求加速度，处理水平面及斜面上的直线运动，再由随时间变化的力求速度和位置。

- **学习：**从[牛顿定律](#newtons-laws-and-the-resultant-force)开始，再学[直线运动](#linear-motion-with-constant-acceleration)、[连接质点](#connected-particles)及[变加速度运动](#motion-with-variable-acceleration)。
- **作业提示：**明确研究对象，画受力图，选正方向，再将 $\mathbf F=m\mathbf a$ 用于合力。
- **复习：**收起解答完成[练习](#practice)，检查力的方向、接触条件及给定的速度和位置条件。

教材对应：第 13 章 §§13.1–13.2（印刷页 202–207）。本课使用合力（resultant force）、法向反力（normal reaction）、直线运动（linear motion）、常加速度（constant acceleration）、变加速度（variable acceleration）及位置向量（position vector）等术语。

**开始前：**复习[力、平衡与摩擦](/zh/alevel/a2-mathematics/mechanics/forces-equilibrium-and-friction/)、[数学建模](/zh/alevel/a2-mathematics/mechanics/mathematical-modelling/)及[向量与运动学](/zh/alevel/a2-mathematics/mechanics/vectors-and-kinematics/)。除非另有说明，取 $g=9.8\,\mathrm{m\,s^{-2}}$。计算中保留精确值，最终数值保留三位有效数字，角度保留一位小数；题目另有要求时从其要求。

所有例题和练习均为自拟题，并非官方历届试题，不设官方分值。图中箭头表达方向，没有采用统一的力大小比例尺。

本课使用惯性参考系（inertial reference frame），并假定质量恒定。处理碰撞或冲量前，可先做 [AS 动量桥接：方向与能量](/zh/alevel/a2-mathematics/mechanics/momentum-bridge/)，检查合外冲量，并区分动量守恒与动能守恒。它复习 MA02 先修，本课不需要恢复系数。

## 牛顿定律与合力 {#newtons-laws-and-the-resultant-force}

1. 合力为零时，物体保持静止或做匀速直线运动。
2. 对质量恒定的物体，合力等于质量乘加速度：$\mathbf F=m\mathbf a$。
3. 若一个物体对另一个物体施力，后者同时对前者施加等大反向的力。这两个力作用于**不同物体**。

牛顿第二定律中的力，是**所选物体受到的全部外力的合力**。先按符号相加各分量。重力与法向反力作用于同一物体，所以它们不是第三定律的作用力与反作用力对。

$$\sum F_x=ma_x,\qquad \sum F_y=ma_y,\qquad \sum F_z=ma_z.$$

加速度方向与合力方向相同，却不必与速度方向相同：向上运动的物体可以有向下的加速度。质量使用千克、力使用牛顿，加速度单位为 $\mathrm{m\,s^{-2}}$。

## 常加速度直线运动 {#linear-motion-with-constant-acceleration}

沿运动直线选一条轴，再选垂直于它的轴。物体沿固定平面运动且保持接触时，垂直平面的加速度为零。先沿法向列式求反力 $R$，不要直接假设 $R=mg$。

沿运动方向，由合力求带符号加速度。只有加速度恒定时，才能使用

$$v=u+at,\qquad s=ut+\frac12at^2,\qquad v^2=u^2+2as.$$

这里 $s$ 是沿所选轴的位移。这些公式只适用于加速度保持不变的阶段。若物体停下或绳变松，应重新检查受力，再决定后续方程。

### 例 1：粗糙水平面上的斜拉力 {#example-1-an-angled-pull-on-a-rough-horizontal-plane}

**Question:** a $20\,\mathrm{kg}$ block is sliding to the right on a rough horizontal plane. A rope pulls at $30^\circ$ above the horizontal. The coefficient of friction is $0.2$ and the friction magnitude during sliding is modelled as $0.2R$. Find the constant tension needed for acceleration $0.5\,\mathrm{m\,s^{-2}}$ to the right.

![物块向右滑动，重力向下、反力向上、滑动摩擦向左，绳张力与水平成向上三十度](/assets/img/a2-math-mech/sliding-angled-pull.svg)

竖直加速度为零：

$$R+T\sin30^\circ-20g=0,\qquad R=196-\frac T2.$$

滑动摩擦（sliding friction）向左。沿平面列式：

$$T\cos30^\circ-0.2R=20(0.5).$$

$$T\left(\frac{\sqrt3}{2}+0.1\right)=49.2.$$

$$\boxed{T\approx50.9\,\mathrm N},\qquad \boxed{R\approx171\,\mathrm N}.$$

**核对：**张力向上的分量减小了 $R$。使用未舍入值，水平合力为 $10\,\mathrm N$、竖直合力为零。反力为正，确认保持接触。

**常见错误：**使用 $R=20g$。这样忽略绳的竖直分力，导致摩擦算得过大。

### 例 2：沿光滑斜面下滑 {#example-2-motion-down-a-smooth-inclined-plane}

**Question:** a $4\,\mathrm{kg}$ block starts from rest on a smooth plane inclined at $30^\circ$ to the horizontal. Find its acceleration, normal reaction and distance travelled in the first $3\,\mathrm s$. The plane is long enough for this motion.

取沿斜面向下为正。只有重力和法向反力作用。重力沿斜面向下的分量为 $4g\sin30^\circ$，压向斜面的分量为 $4g\cos30^\circ$。

$$4g\sin30^\circ=4a,\qquad \boxed{a=4.9\,\mathrm{m\,s^{-2}}}.$$

$$\boxed{R=4g\cos30^\circ=19.6\sqrt3\,\mathrm N\approx33.9\,\mathrm N}.$$

$$s=\frac12(4.9)(3^2)=22.05\,\mathrm m\approx\boxed{22.1\,\mathrm m}.$$

**核对：**$v=14.7\,\mathrm{m\,s^{-1}}$，平均速率为 $7.35\,\mathrm{m\,s^{-1}}$，乘 $3\,\mathrm s$ 得到相同路程。求加速度时质量约去，求 $R$ 时则不会。

### 例 3：沿粗糙斜面上滑 {#example-3-sliding-up-a-rough-inclined-plane}

**Question:** a $5\,\mathrm{kg}$ block moves up a plane inclined at $30^\circ$ with initial speed $6\,\mathrm{m\,s^{-1}}$. No driving force acts. The coefficient of friction is $0.2$, with friction magnitude $0.2R$ during sliding. Find the time and distance to its first stop. Decide whether it can remain at rest.

![斜面运动的两个阶段：上滑时摩擦沿斜面向下，下滑时摩擦沿斜面向上](/assets/img/a2-math-mech/sliding-incline-stages.svg)

取沿斜面向上为正，反力为 $R=5g\cos30^\circ$。重力分量与滑动摩擦都沿斜面向下：

$$-5g\sin30^\circ-0.2(5g\cos30^\circ)=5a.$$

$$a=-g\left(\frac12+\frac{\sqrt3}{10}\right)\approx-6.60\,\mathrm{m\,s^{-2}}.$$

首次停止前一直使用这个未舍入的加速度：

$$t=\frac{-6}{a}\approx\boxed{0.909\,\mathrm s},\qquad
s=\frac{-36}{2a}\approx\boxed{2.73\,\mathrm m}.$$

停下后，要保持静止，摩擦必须沿斜面向上，大小为 $5g\sin30^\circ=24.5\,\mathrm N$。但其最大值为 $0.2R\approx8.49\,\mathrm N$，不足以支承物块。因此物块开始下滑，摩擦随之反向；下滑加速度大小变为

$$g\left(\frac12-\frac{\sqrt3}{10}\right)\approx\boxed{3.20\,\mathrm{m\,s^{-2}}}.$$

**核对：**上滑阶段速率减少 $6\,\mathrm{m\,s^{-1}}$，用时约 $0.909\,\mathrm s$。停止后不能继续沿用旧加速度，因为摩擦方向已改变。

## 连接质点 {#connected-particles}

对于绕过**固定光滑滑轮的拉紧轻质不可伸长绳**（taut, light, inextensible string），两侧张力相等，两个质点沿绳的加速度大小相等，但加速度向量可以指向不同方向。

对每个质点分别列力方程，正方向须对应同一次绳的运动。相加标量方程消去张力，再代回。检查 $T\geq0$ 及各法向反力非负。若绳变松，或质点到达滑轮或地面，这组方程就不再适用。

### 例 4：粗糙斜面与悬挂质点 {#example-4-a-rough-plane-and-a-hanging-particle}

**Question:** a $4\,\mathrm{kg}$ particle $A$ on a rough $30^\circ$ inclined plane is connected to a hanging $3\,\mathrm{kg}$ particle $B$ by a light inextensible string over a fixed smooth pulley. The string is taut and $B$ is already moving downwards. Sliding friction on $A$ has magnitude $0.25R$. Find the acceleration, tension and resultant force exerted on the pulley by the string. Treat each side of the string as straight, with the inclined side parallel to the plane.

![三十度斜面上的质点 A 绕滑轮连接悬挂质点 B，分别画出两质点受力及绳对滑轮的两张力](/assets/img/a2-math-mech/incline-connected-particles.svg)

对 $A$ 取沿斜面向上为正；垂直斜面的加速度为零：

$$R=4g\cos30^\circ=19.6\sqrt3\,\mathrm N.$$

$$T-4g\sin30^\circ-0.25R=4a.$$

对 $B$ 取竖直向下为正：

$$3g-T=3a.$$

两式相加得

$$a=\frac{29.4-19.6-4.9\sqrt3}{7}
=\frac{9.8-4.9\sqrt3}{7}\approx\boxed{0.188\,\mathrm{m\,s^{-2}}}.$$

结果为正，表示 $B$ 向下加速。由 $B$ 的方程：

$$T=3g-3a\approx\boxed{28.8\,\mathrm N}.$$

绳对滑轮的两个力，一个沿斜面向下，一个竖直向下，夹角为 $60^\circ$。取水平向右、竖直向上为坐标正方向，合力为

$$\mathbf P=-T\cos30^\circ\mathbf i-T(1+\sin30^\circ)\mathbf j.$$

$$\lvert\mathbf P\rvert=T\sqrt3\approx\boxed{49.9\,\mathrm N}.$$

方向在竖直向下的左侧，与竖直向下成 $30^\circ$。这是**绳对滑轮**的力；若滑轮自身重量不可忽略，支承还须平衡它的重量。

**核对：**两个质点方程给出相同加速度。滑轮受到的合力小于 $2T$，因为两张力并不平行同向。

## 二维或三维运动 {#motion-in-two-or-three-dimensions}

使用固定、相互垂直的单位向量 $\mathbf i$、$\mathbf j$，空间情况再加入 $\mathbf k$。先相加全部力向量，再除以质量。在水平面内运动时，重力与竖直支承力可能平衡，此时题给的水平力之和就是水平合力。

加速度恒定时，

$$\mathbf v=\mathbf u+t\mathbf a,\qquad
\mathbf r=\mathbf r_0+t\mathbf u+\frac12t^2\mathbf a.$$

速率（speed）是 $\lvert\mathbf v\rvert$，并非某个速度分量。到原点的距离是 $\lvert\mathbf r\rvert$；相对起点的位移则为 $\mathbf r-\mathbf r_0$。

### 例 5：恒定合力与轨迹 {#example-5-a-constant-resultant-and-the-path}

**Question:** a particle of mass $2\,\mathrm{kg}$ moves in a horizontal plane. Two horizontal forces are $(4\mathbf i+2\mathbf j)\,\mathrm N$ and $(-4\mathbf i+4\mathbf j)\,\mathrm N$. The vertical forces balance. At $t=0$ it is at the origin with velocity $2\mathbf i\,\mathrm{m\,s^{-1}}$. Find its acceleration, velocity, position and Cartesian path for $t\geq0$.

水平合力为 $6\mathbf j\,\mathrm N$，所以

$$\boxed{\mathbf a=3\mathbf j\,\mathrm{m\,s^{-2}}}.$$

$$\boxed{\mathbf v=2\mathbf i+3t\mathbf j},\qquad
\boxed{\mathbf r=2t\mathbf i+\frac32t^2\mathbf j}.$$

速度单位为 $\mathrm{m\,s^{-1}}$，位置单位为米。由 $x=2t$、$y=\frac32t^2$ 消去 $t$：

$$\boxed{y=\frac38x^2,\quad x\geq0}.$$

**核对：**对 $\mathbf r$ 求两次导数得到 $3\mathbf j$，再乘质量得到合力 $6\mathbf j$。代入 $t=0$，位置和速度均满足给定条件。限制 $x\geq0$ 只保留初始时刻以后实际经过的轨迹。

## 变加速度运动 {#motion-with-variable-acceleration}

合力是时间的函数时，先除以质量，再对**每一个分量**积分：

$$\mathbf a=\frac{\mathbf F(t)}m,\qquad
\mathbf v=\int\mathbf a\,dt+\mathbf C,\qquad
\mathbf r=\int\mathbf v\,dt+\mathbf D.$$

这里积分符号表示先选一个原函数，再显式加入常向量。$\mathbf C$ 与 $\mathbf D$ 是相互独立的积分常向量。对标量分量可写 $+C$，第二次积分应使用新的常量。用给定速度确定第一组常量，用给定位置确定第二组。条件可在任意时刻给出，不一定在 $t=0$。

当 $\mathbf a$ 变化时，不可使用常加速度公式。如果合力按位移或速度给出，可能需要建立另一种微分方程；本课例题沿用教材中“力是时间函数”的模型。

### 例 6：随时间变化的力 {#example-6-a-time-dependent-force}

**Question:** a $2\,\mathrm{kg}$ particle moves in a horizontal plane under resultant horizontal force $(4\mathbf i+12t\mathbf j)\,\mathrm N$. Vertical forces balance. It is initially at rest at position $(1,2)$ metres. Find its velocity, position and Cartesian path for $t\geq0$.

$$\mathbf a=2\mathbf i+6t\mathbf j.$$

积分并使用 $\mathbf v(0)=\mathbf0$：

$$\mathbf v=2t\mathbf i+3t^2\mathbf j+\mathbf C,\qquad \mathbf C=\mathbf0.$$

再次积分并使用 $\mathbf r(0)=\mathbf i+2\mathbf j$：

$$\boxed{\mathbf r=(1+t^2)\mathbf i+(2+t^3)\mathbf j}.$$

因为 $t\geq0$，所以 $t=\sqrt{x-1}$，得到

$$\boxed{y=2+(x-1)^{3/2},\quad x\geq1}.$$

**核对：**$\mathbf r'(t)=2t\mathbf i+3t^2\mathbf j$，且 $2\mathbf r''(t)=4\mathbf i+12t\mathbf j$。代入 $t=0$，两个条件都成立。取正平方根的理由是 $t\geq0$。

### 例 7：较晚时刻给定的条件 {#example-7-conditions-at-a-later-time}

**Question:** a $3\,\mathrm{kg}$ particle moves in a horizontal plane under resultant horizontal force $(6t\mathbf i-6\mathbf j)\,\mathrm N$, with balanced vertical forces. At $t=1\,\mathrm s$, its velocity is $(2\mathbf i+\mathbf j)\,\mathrm{m\,s^{-1}}$ and its position is $(4\mathbf i+2\mathbf j)\,\mathrm m$. Find its velocity and position at $t=2\,\mathrm s$.

$$\mathbf a=2t\mathbf i-2\mathbf j.$$

$$\mathbf v=(t^2+C_1)\mathbf i+(-2t+C_2)\mathbf j.$$

在 $t=1$ 时，$1+C_1=2$、$-2+C_2=1$，所以

$$\mathbf v=(t^2+1)\mathbf i+(3-2t)\mathbf j.$$

$$\mathbf r=\left(\frac{t^3}{3}+t+D_1\right)\mathbf i
+(-t^2+3t+D_2)\mathbf j.$$

代入 $t=1$ 的位置，得到 $D_1=8/3$、$D_2=0$。因此 $t=2$ 时，

$$\boxed{\mathbf v=5\mathbf i-\mathbf j\,\mathrm{m\,s^{-1}}}.$$

$$\boxed{\mathbf r=\frac{22}{3}\mathbf i+2\mathbf j\,\mathrm m}.$$

**核对：**代入 $t=1$ 可以还原两个给定向量。$t=2$ 时速率为 $\sqrt{26}\,\mathrm{m\,s^{-1}}$；负的 $y$ 分量表示在所选水平面内沿负 $y$ 方向运动，并不代表速率为负。

## 由位置反求合力 {#finding-force-from-position}

若已知位置，对时间求两次导数得到加速度，再乘质量：

$$\mathbf F=m\frac{d^2\mathbf r}{dt^2}.$$

这给出的是**合力**。只有当某个力是唯一作用力，或其他力的合力为零时，才能把结果等同于那个单独的力。

### 例 8：三维空间中的力 {#example-8-force-in-three-dimensions}

**Question:** a $2\,\mathrm{kg}$ particle has position vector, in metres,

$$\mathbf r=t^2\mathbf i+\sin t\mathbf j+e^{-t}\mathbf k.$$

Find the resultant force at time $t$ and its magnitude at $t=0$. Time is in seconds and the trigonometric argument is in radians.

$$\mathbf v=2t\mathbf i+\cos t\mathbf j-e^{-t}\mathbf k.$$

$$\mathbf a=2\mathbf i-\sin t\mathbf j+e^{-t}\mathbf k.$$

$$\boxed{\mathbf F=4\mathbf i-2\sin t\mathbf j+2e^{-t}\mathbf k\,\mathrm N}.$$

在 $t=0$ 时，$\mathbf F=4\mathbf i+2\mathbf k\,\mathrm N$，所以

$$\boxed{\lvert\mathbf F(0)\rvert=\sqrt{20}\,\mathrm N\approx4.47\,\mathrm N}.$$

**核对：**速度的 $\mathbf k$ 分量为负，但加速度的该分量为正，因为 $-e^{-t}$ 的导数是 $+e^{-t}$。

## 练习 {#practice}

以下为自拟题，使用 $g=9.8\,\mathrm{m\,s^{-2}}$。水平面问题中的 $\mathbf i$ 和 $\mathbf j$ 都在该平面内，并假定竖直重力与支承力平衡。

### Q1：光滑水平面 {#q1-a-smooth-horizontal-plane}

A $4\,\mathrm{kg}$ block is pulled along a smooth horizontal plane by tension $20\,\mathrm N$ at $30^\circ$ above horizontal. Find its horizontal acceleration and normal reaction.

<details markdown="1">
<summary>提示</summary>

先沿竖直方向列式，该方向加速度为零；只有张力的水平分量使物块沿水平加速。

</details>

<details markdown="1">
<summary>解答与核对</summary>

$$R+20\sin30^\circ=4g,\qquad \boxed{R=29.2\,\mathrm N}.$$

$$4a=20\cos30^\circ,\qquad
\boxed{a=\frac{5\sqrt3}{2}\,\mathrm{m\,s^{-2}}\approx4.33\,\mathrm{m\,s^{-2}}}.$$

**核对：**反力为正且小于重量；竖直合力为 $29.2+10-39.2=0$。

</details>

### Q2：沿粗糙斜面下滑 {#q2-sliding-down-a-rough-plane}

A $6\,\mathrm{kg}$ block slides down a $30^\circ$ inclined plane. Sliding friction has magnitude $\mu R$, where $\mu=1/(2\sqrt3)$. Find its acceleration and distance travelled in $2\,\mathrm s$ if its initial downward speed is $1\,\mathrm{m\,s^{-1}}$. It stays on the plane throughout.

<details markdown="1">
<summary>提示</summary>

摩擦沿斜面向上。使用 $R=6g\cos30^\circ$，取沿斜面向下为正。

</details>

<details markdown="1">
<summary>解答与核对</summary>

$$R=3g\sqrt3,\qquad \mu R=\frac32g.$$

$$6a=3g-\frac32g,\qquad \boxed{a=2.45\,\mathrm{m\,s^{-2}}}.$$

$$s=1(2)+\frac12(2.45)(2^2)=\boxed{6.90\,\mathrm m}.$$

**核对：**末速率为 $5.90\,\mathrm{m\,s^{-1}}$；平均速率乘时间给出 $(1+5.9)\times2/2=6.9\,\mathrm m$。

</details>

### Q3：向前运动但减速 {#q3-moving-forwards-while-slowing-down}

An $800\,\mathrm{kg}$ vehicle moves along a horizontal road. Its speed falls from $12$ to $8\,\mathrm{m\,s^{-1}}$ in $10\,\mathrm s$ with constant acceleration. A constant resistance of $600\,\mathrm N$ acts backwards. Find the constant forward driving force.

<details markdown="1">
<summary>提示</summary>

取向前为正。先算带符号加速度，再使用牛顿第二定律。

</details>

<details markdown="1">
<summary>解答与核对</summary>

$$a=\frac{8-12}{10}=-0.4\,\mathrm{m\,s^{-2}}.$$

$$D-600=800(-0.4),\qquad \boxed{D=280\,\mathrm N}.$$

**核对：**向后的合力大小为 $320\,\mathrm N$。车辆减速时仍可有向前驱动力，因为阻力更大。

</details>

### Q4：光滑斜面与滑轮 {#q4-a-smooth-plane-and-a-pulley}

A $4\,\mathrm{kg}$ particle on a smooth $30^\circ$ plane is joined to a hanging $3\,\mathrm{kg}$ particle by a taut light inextensible string over a fixed smooth pulley. The particles are released from rest. Find their acceleration, tension and magnitude of the string's force on the pulley. The inclined side of the string is parallel to the plane.

<details markdown="1">
<summary>提示</summary>

悬挂质点取向下为正，斜面质点取沿斜面向上为正；绳对滑轮的两个张力夹角为 $60^\circ$。

</details>

<details markdown="1">
<summary>解答与核对</summary>

$$T-4g\sin30^\circ=4a,\qquad 3g-T=3a.$$

$$\boxed{a=1.4\,\mathrm{m\,s^{-2}}},\qquad \boxed{T=25.2\,\mathrm N}.$$

悬挂质点向下加速。绳对滑轮的合力大小为

$$\boxed{T\sqrt3=25.2\sqrt3\,\mathrm N\approx43.6\,\mathrm N}.$$

**核对：**$25.2-19.6=4(1.4)$、$29.4-25.2=3(1.4)$。斜面质点的反力 $4g\cos30^\circ>0$，绳张力也为正。

</details>

### Q5：先合力，再求加速度 {#q5-add-forces-before-finding-acceleration}

A $3\,\mathrm{kg}$ particle in a horizontal plane experiences horizontal forces $(8\mathbf i-4\mathbf j)\,\mathrm N$ and $(-2\mathbf i+10\mathbf j)\,\mathrm N$. Initially it is at the origin with velocity $(\mathbf i-\mathbf j)\,\mathrm{m\,s^{-1}}$. Find its velocity, speed and position after $2\,\mathrm s$.

<details markdown="1">
<summary>提示</summary>

合力为 $6\mathbf i+6\mathbf j$。除以质量，再使用常加速度的向量公式。

</details>

<details markdown="1">
<summary>解答与核对</summary>

$$\mathbf a=2\mathbf i+2\mathbf j.$$

$$\mathbf v=(1+2t)\mathbf i+(-1+2t)\mathbf j.$$

$$\mathbf r=(t+t^2)\mathbf i+(-t+t^2)\mathbf j.$$

在 $t=2$ 时，

$$\boxed{\mathbf v=5\mathbf i+3\mathbf j\,\mathrm{m\,s^{-1}}}.$$

$$\boxed{\text{speed}=\sqrt{34}\,\mathrm{m\,s^{-1}}\approx5.83\,\mathrm{m\,s^{-1}}}.$$

$$\boxed{\mathbf r=6\mathbf i+2\mathbf j\,\mathrm m}.$$

**核对：**位置求导得到速度，加速度乘 $3$ 得到题给两个力向量的和。

</details>

### Q6：对变力积分 {#q6-integrate-a-variable-force}

A $3\,\mathrm{kg}$ particle in a horizontal plane has resultant horizontal force $(6\mathbf i+12t\mathbf j)\,\mathrm N$. Initially it is at the origin with velocity $2\mathbf i\,\mathrm{m\,s^{-1}}$. Find its velocity and position at time $t$, then its position at $t=3\,\mathrm s$.

<details markdown="1">
<summary>提示</summary>

加速度为 $2\mathbf i+4t\mathbf j$。第一次积分后使用速度条件，第二次积分后使用位置条件。

</details>

<details markdown="1">
<summary>解答与核对</summary>

$$\boxed{\mathbf v=(2+2t)\mathbf i+2t^2\mathbf j}.$$

$$\boxed{\mathbf r=(2t+t^2)\mathbf i+\frac23t^3\mathbf j}.$$

$$\boxed{\mathbf r(3)=15\mathbf i+18\mathbf j\,\mathrm m}.$$

**核对：**$3\mathbf r''=6\mathbf i+12t\mathbf j$、$\mathbf r(0)=\mathbf0$、$\mathbf v(0)=2\mathbf i$。加速度随时间变化，不能把末加速度代入常加速度公式。

</details>

### Q7：一秒时的条件 {#q7-conditions-at-one-second}

A $2\,\mathrm{kg}$ particle in a horizontal plane has resultant horizontal force $(4t\mathbf i+4\mathbf j)\,\mathrm N$. At $t=1\,\mathrm s$, its velocity is $4\mathbf j\,\mathrm{m\,s^{-1}}$ and its position is $(2\mathbf i+3\mathbf j)\,\mathrm m$. Find its velocity and position at $t=2\,\mathrm s$.

<details markdown="1">
<summary>提示</summary>

对 $2t\mathbf i+2\mathbf j$ 积分。速度的 $\mathbf i$ 分量在 $t=1$ 时为零，不表示该分量的积分常量为零。

</details>

<details markdown="1">
<summary>解答与核对</summary>

$$\mathbf v=(t^2-1)\mathbf i+(2t+2)\mathbf j.$$

$$\mathbf r=\left(\frac{t^3}{3}-t+\frac83\right)\mathbf i
+(t^2+2t)\mathbf j.$$

在 $t=2$ 时，

$$\boxed{\mathbf v=3\mathbf i+6\mathbf j\,\mathrm{m\,s^{-1}}}.$$

$$\boxed{\mathbf r=\frac{10}{3}\mathbf i+8\mathbf j\,\mathrm m}.$$

**核对：**在 $t=1$ 时，位置为 $(2,3)$、速度为 $(0,4)$；速度求导后乘 $2$，恢复题给力。

</details>

### Q8：空间中的合力 {#q8-a-resultant-force-in-space}

A $3\,\mathrm{kg}$ particle has position vector, in metres,

$$\mathbf r=t^3\mathbf i+\cos t\mathbf j+2e^t\mathbf k.$$

Find the resultant force at time $t$ and its magnitude at $t=0$. Time is in seconds and trigonometric arguments are in radians.

<details markdown="1">
<summary>提示</summary>

每个分量分别求两次导数，乘质量，再将力的各分量平方相加并开平方。

</details>

<details markdown="1">
<summary>解答与核对</summary>

$$\mathbf a=6t\mathbf i-\cos t\mathbf j+2e^t\mathbf k.$$

$$\boxed{\mathbf F=18t\mathbf i-3\cos t\mathbf j+6e^t\mathbf k\,\mathrm N}.$$

$$\mathbf F(0)=-3\mathbf j+6\mathbf k\,\mathrm N.$$

$$\boxed{\lvert\mathbf F(0)\rvert=3\sqrt5\,\mathrm N\approx6.71\,\mathrm N}.$$

**核对：**速度为 $3t^2\mathbf i-\sin t\mathbf j+2e^t\mathbf k$，再求导得到所列加速度。即使一个分量为负，力的大小仍为正。

</details>

## 独立诊断：运动方向还是合力方向？ {#independent-task-motion-direction-or-force-direction}

**Self-written task.** A $2\,\mathrm{kg}$ block is moving up a long rough plane inclined at $30^\circ$ with speed $3\,\mathrm{m\,s^{-1}}$. A constant applied force of $6\,\mathrm N$ acts up the plane, parallel to it. The coefficient of friction is $1/(2\sqrt3)$; use this coefficient for both sliding friction and the maximum static friction. A student says: “The force is up the slope and the block is going up, so it must speed up.” Assess the claim. Find its signed acceleration, the time and distance to its first stop, and whether it can then remain at rest. Assume it stays on the plane. Choose your method without assuming the acceleration direction.

<details markdown="1">
<summary>推理提示</summary>

画全受力并选正方向。物块上滑时，摩擦应指向哪里？速度变成零时，改求平衡所需静摩擦，再检查它是否超过上限。

</details>

<details markdown="1">
<summary>反馈与核对</summary>

取沿斜面向上为正。法向方程给出正的反力：

$$R=2g\cos30^\circ=9.8\sqrt3\,\mathrm N,\qquad \mu R=4.9\,\mathrm N.$$

上滑时摩擦和重力分量均向下。$6\,\mathrm N$ 是一个外加力，并非合力：

$$6-2g\sin30^\circ-4.9=2a,\qquad \boxed{a=-4.35\,\mathrm{m\,s^{-2}}}.$$

首次停止前加速度恒定，因此

$$0=3-4.35t,\qquad \boxed{t=\frac{20}{29}\,\mathrm s\approx0.690\,\mathrm s},$$

$$0=3^2+2(-4.35)s,\qquad \boxed{s=\frac{30}{29}\,\mathrm m\approx1.03\,\mathrm m}.$$

停下后，为平衡其他力，所需摩擦为沿斜面**向上**的 $9.8-6=3.8\,\mathrm N$。由于 $3.8<4.9$，物块可以保持静止。摩擦从上滑时向下的 $4.9\,\mathrm N$ 变为平衡时向上的 $3.8\,\mathrm N$；静止时不会自动取极限值。

**核对：**停止前平均速率为 $1.5\,\mathrm{m\,s^{-1}}$，乘 $20/29$ 秒得到 $30/29\,\mathrm m$。静止时 $6+3.8-9.8=0$。若得到 $a=3$，说明误把外加力当成合力；若停后继续使用 $a=-4.35$，说明沿用了已经失效的摩擦模型。

**请用英文补全理由：**“Although the velocity is …, the resultant is …; after stopping …”。

</details>

### 再尝试：空间中的力记录 {#retry-use-a-force-record-in-space}

**Self-written task.** A particle of mass $2\,\mathrm{kg}$ experiences resultant force

$$\mathbf F=(4t\mathbf i-4\mathbf j+12t\mathbf k)\,\mathrm N,\qquad 0\leq t\leq3.$$

Time $t$ is in seconds and $\mathbf i$, $\mathbf j$, $\mathbf k$ are fixed perpendicular unit vectors. At $t=1$, its velocity is $(\mathbf j+2\mathbf k)\,\mathrm{m\,s^{-1}}$ and its position is $(2\mathbf i+3\mathbf j+\mathbf k)\,\mathrm m$. Find its velocity and position at $t=2$ and its distance from its position at $t=1$. Explain why neither a constant-acceleration formula using the final force nor the magnitude of the final position vector answers the whole question.

<details markdown="1">
<summary>再尝试提示</summary>

题给力已是全部外力的合力。除以质量后，各分量分别积分两次；两组条件都在一秒时使用。最后由两位置相减得到位移向量。

</details>

<details markdown="1">
<summary>再尝试核对</summary>

加速度为 $2t\mathbf i-2\mathbf j+6t\mathbf k$。积分并使用 $t=1$ 的速度：

$$\mathbf v=(t^2-1)\mathbf i+(3-2t)\mathbf j+(3t^2-1)\mathbf k.$$

再次积分并使用 $t=1$ 的位置：

$$\mathbf r=\left(\frac{t^3}{3}-t+\frac83\right)\mathbf i+(3t-t^2+1)\mathbf j+(t^3-t+1)\mathbf k.$$

所以

$$\boxed{\mathbf v(2)=3\mathbf i-\mathbf j+11\mathbf k\,\mathrm{m\,s^{-1}}},\qquad \boxed{\mathbf r(2)=\frac{10}{3}\mathbf i+3\mathbf j+7\mathbf k\,\mathrm m}.$$

相对一秒时位置的位移为

$$\mathbf r(2)-\mathbf r(1)=\frac43\mathbf i+6\mathbf k,\qquad \boxed{\text{distance}=\frac{2\sqrt{85}}{3}\,\mathrm m\approx6.15\,\mathrm m}.$$

对位置求两次导数再乘 $2$，可以恢复题给力；在 $t=1$ 时两个给定条件都成立。加速度随时间变化，而 $\lvert\mathbf r(2)\rvert$ 是到原点的距离，不是到一秒时位置的距离。两位置间的距离也不同于沿曲线路径经过的总路程。如果你以“初始静止”为由省略积分常量，应重读条件：题目没有给出这样的初始条件。

</details>

## 速查 {#quick-reference}

| 已知或所求 | 方法与条件 |
| --- | --- |
| 物体所受的力 | 按符号相加各分量，将合力用于 $\mathbf F=m\mathbf a$ |
| 沿固定平面运动 | 保持接触时，法向加速度为零，沿法向列式 |
| 粗糙表面 | 先求 $R$；摩擦反抗滑动或相对滑动趋势 |
| 常加速度 | 使用标量或向量常加速度公式 |
| 连接质点 | 逐体列式；等张力依赖所声明的绳与滑轮模型 |
| 合力是时间函数 | 除以质量、积分两次并使用两组条件 |
| 位置是时间函数 | 求两次导数再乘质量 |
| 速率或力的大小 | 求对应向量的模 |

把答案代回原来的力方程核对。积分得到的运动，应求导恢复力，并代入给定时刻恢复位置与速度。消去时间时，保留时间区间允许的那部分轨迹。

## 来源与范围 {#sources-and-scope}

范围依据：[OxfordAQA Mathematics 9660 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf)，§3.5 M2.4。实际阅读的评分参照为 **9660/MA05 Unit M2，January 2025，Q9**：[试卷 p.18](/assets/pdf/fx-cg50/references/oxfordaqa-ma05-2025-january-question-paper.pdf)与[配套评分标准 Version 1.0 Final，p.17](/assets/pdf/fx-cg50/references/oxfordaqa-ma05-2025-january-mark-scheme.pdf)。该题连接三维合力、两次带条件积分及向量模所表示的距离。本次使用这些仓库存档核对选法和检查要求；本页题目仍均为自拟题，不赋予官方分值。

页首精度约定适用于本页自拟题。January 2025 原卷要求计算器最终答案默认保留两位有效数字，题内另有规定时从其规定；Q9 明确要求三位有效数字。做官方题应遵循原卷及题目指令。

**学习路线：**[上一课：重心](/zh/alevel/a2-mathematics/mechanics/centres-of-mass/) · [力学目录](/zh/alevel/a2-mathematics/mechanics/) · [下一课：抛体运动](/zh/alevel/a2-mathematics/mechanics/projectiles/)。
