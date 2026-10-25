---
layout: subjects
title: 力学速查
mathjax: true
grade: a2
subject: m2
lang: zh-CN
translation_of: /alevel/a2-mathematics/mechanics/quick-reference/
permalink: /zh/alevel/a2-mathematics/mechanics/quick-reference/
toc_headings: h2
study_page: true
reading_layout: true
---

[A2 力学](/zh/alevel/a2-mathematics/mechanics/) · MA05 Unit M2
{:.lesson-meta}

学过一个主题后，可以在这里查方法，并确认使用条件。需要完整解释、示范和练习时，从[主题入口](/zh/alevel/a2-mathematics/mechanics/)返回课程。九节核心课覆盖 M2.1–M2.7，本页供配合课程查阅。

复习时可直接看[公式汇总](#key-formulae-summary)或[保留的补充题](#further-questions)。各节都链接到相关课程的具体段落；如果不清楚某一步为什么成立，先沿链接回课，再使用公式。

下文三个短例题是保留的教学示范，不附官方分值。[来源说明](#sources-and-scope)区分了已核对的试卷资料与这些示范，并说明补充题的来源状态。
{:.lesson-meta}

## M2.1：数学建模 {#m21-mathematical-modelling}

模型把实际情境简化成可以处理的问题。要说明每个假设省略了什么，以及在本题中是否合理。

| 假设 | 含义与条件 |
|---|---|
| 质点（particle） | 描述运动时忽略大小和形状；这不等于忽略空气阻力 |
| 轻绳或轻杆（light string or rod） | 忽略其质量；杆可以拉也可以推，绳只能拉 |
| 不可伸长的绳（inextensible string） | 绳长固定；按实际连接方式建立各物体运动的关系 |
| 绷紧的绳跨过一个固定光滑滑轮 | 在通常的轻绳模型中，两侧张力相同；两端质点都自由悬垂时，加速度大小相同 |
| 光滑表面（smooth surface） | 接触处没有摩擦，支持力垂直于表面 |
| 粗糙表面（rough surface） | 静摩擦在 $0\leq F\leq\mu R$ 内调节；极限平衡时才有 $F=\mu R$ |
| 空气阻力可忽略 | 受力中不计空气阻力；这是与“质点”分开的假设 |
| 只在重力作用下运动 | 重力是唯一的力，加速度竖直向下、大小为 $g$；地面附近通常用 $g=9.8\,\mathrm{m\,s^{-2}}$，题目另有说明时按题目取值 |

需要模型的完整示范和练习，回到[数学建模：建模假设](/zh/alevel/a2-mathematics/mechanics/mathematical-modelling/#modelling-assumptions)。

## M2.2：运动学 {#m22-kinematics}

位置、速度、加速度的关系，对每个分量分别求导或积分：

$$\mathbf v=\frac{\mathrm d\mathbf r}{\mathrm dt},\qquad\mathbf a=\frac{\mathrm d\mathbf v}{\mathrm dt}.$$

积分时加入常向量，再代入题目指定时刻的条件。第二次积分需要另一个常向量，不能沿用第一次的常量。

| 要求什么 | 方法 |
|---|---|
| 速率（speed） | $\lvert\mathbf v\rvert$ |
| 到原点的距离 | $\lvert\mathbf r\rvert$ |
| 位移（displacement） | $\mathbf r(t_2)-\mathbf r(t_1)$ |
| 静止 | 同一时刻所有速度分量都为零 |
| 直角坐标下的轨迹 | 从坐标方程消去时间，并保留时间范围 |

需要推理、示范和练习，回到[速度与加速度](/zh/alevel/a2-mathematics/mechanics/vectors-and-kinematics/#velocity-and-acceleration)或[带条件的积分](/zh/alevel/a2-mathematics/mechanics/vectors-and-kinematics/#integrating-with-given-conditions)。

## M2.3：静力学与力 {#m23-statics-and-forces}

[力、平衡与摩擦：受力图](/zh/alevel/a2-mathematics/mechanics/forces-equilibrium-and-friction/#force-diagrams)讲解受力图、合力、共点力平衡与摩擦。[力矩与刚体：力的力矩](/zh/alevel/a2-mathematics/mechanics/moments-and-rigid-objects/#the-moment-of-a-force)处理梁、倾倒、梯子、铰链和支钉；[质心：质点系](/zh/alevel/a2-mathematics/mechanics/centres-of-mass/#a-system-of-particles)处理多个质点、组合薄板和悬挂。

### 受力图 {#force-diagrams}

- 找出作用在所选物体上的全部力：重力（$mg$）、张力（$T$）、推力、法向支持力（$R$）、摩擦力（$F$）及其他外加力。
- 清楚标出各力。

### 平衡条件 {#equilibrium-conditions}

对质点或一组共点力，平衡要求合力为零：在两个互相垂直的方向上有 $\sum F_x=0$ 和 $\sum F_y=0$。刚体还要求对任意点的合力矩为零。平衡意味着加速度为零；只有速率不变，并不能保证平衡。

### 共面力的合力 {#resultant-of-coplanar-forces}

选定两个共同的垂直方向，把各力的分量带符号相加。若合力为 $X\mathbf i+Y\mathbf j$，大小为 $\sqrt{X^2+Y^2}$。给出方向前先检查两个分量的正负；能与它平衡的力为 $-X\mathbf i-Y\mathbf j$。

### 摩擦 {#friction}

- **极限摩擦力：**$F_{\text{max}} = \mu R$
- 静摩擦满足 $0\leq F\leq\mu R$，只有极限平衡时取等号。方向与接触处将要发生的相对滑动相反。
- 沿表面法线分解，求出 $R$；斜拉或斜推会改变支持力。检查 $R\geq0$。若要找外加力的范围，两种可能滑动方向都要检查，摩擦方向可能反转。

这里 $\mu$ 是摩擦系数，$R$ 是该接触处的法向支持力。

不确定摩擦方向，或不知道能否取等号时，回到[摩擦与极限平衡](/zh/alevel/a2-mathematics/mechanics/forces-equilibrium-and-friction/#friction-and-limiting-equilibrium)。

### 力矩 {#moments}

- **力对某点的力矩：**大小为 $Fd$，其中 $d$ 是该点到力的作用线的垂直距离。
- 先约定顺时针／逆时针的正负。
- 力斜着作用在杆上时，力矩大小为 $Fr\sin\theta$，其中 $r$ 是沿杆量到作用点的距离，$\theta$ 是杆与力的夹角。可以分解力，也可以找垂距；不要把同一个角度投影两次。

### 刚体平衡 {#rigid-bodies-in-equilibrium}

- 刚体需要同时满足 $\sum F_x = 0$、$\sum F_y = 0$、$\sum M = 0$。
- 选一个能消去未知力的取矩点，先取矩，再分解力；可换一个点取矩复核。
- 刚要倾倒时，即将离开的接触点支持力为零。只能推的支承不能提供负的法向支持力；铰链力的某个分量为负，则表示实际方向与假设相反。
- 光滑墙的支持力垂直于墙；光滑支钉在接触处对杆的支持力垂直于杆。每个粗糙接触处都要用自己的 $F\leq\mu R$ 检查。

### 质心 {#centres-of-mass}

| 形状 | 质心位置 |
|-------|----------------|
| 均匀杆 | 中点 |
| 均匀矩形薄板 | 两条对角线的交点 |
| 均匀圆形薄板 | 圆心 |
| 均匀三角形薄板 | 三条中线的交点；从一边中点向对面顶点走全长的三分之一 |

**质点系：**

$$\bar{x} = \frac{\sum m_i x_i}{\sum m_i}, \quad \bar{y} = \frac{\sum m_i y_i}{\sum m_i}$$

**组合物体：**合并各部分质量及其质量矩，挖去的材料要扣除。只有各部分单位面积质量相同时，才能用面积代替质量。附加质点和杆仍须使用实际质量。

**自由悬挂：**只有重力和一个支承力、且处于稳定平衡时，质心在悬点正下方。若由两根竖直绳支承，应由力平衡及力矩求两根绳的张力。

需要几何解释时，回到[组合薄板](/zh/alevel/a2-mathematics/mechanics/centres-of-mass/#composite-laminae)、[悬挂物体](/zh/alevel/a2-mathematics/mechanics/centres-of-mass/#suspended-bodies)或[两根绳支承](/zh/alevel/a2-mathematics/mechanics/centres-of-mass/#support-by-two-strings)。

## M2.4：牛顿运动定律 {#m24-newtons-laws-of-motion}

完整示范、受力图与练习见[牛顿定律与合力](/zh/alevel/a2-mathematics/mechanics/newtons-laws-of-motion/#newtons-laws-and-the-resultant-force)。遇到变化的力，可回到[变加速度运动](/zh/alevel/a2-mathematics/mechanics/newtons-laws-of-motion/#motion-with-variable-acceleration)。

### 牛顿第二定律 {#newtons-second-law}

$$\mathbf{F} = m\mathbf{a}$$

这里 $\mathbf F$ 是所选物体受到的合力。保持接触时，沿法线方向求支持力；斜拉的力会改变它。只有加速度恒定的一段，才能用恒加速度公式。滑动停止或反向后，要重新判断摩擦。

### 应用 {#applications}

**1. 恒加速度直线运动（斜面）：**

- 沿斜面和平行于其法线的方向分解。
- 重力沿斜面向下的分量为 $mg\sin\theta$。只有其他力都没有法向分量，且物体没有法向加速度时，才有 $R=mg\cos\theta$。在通常的滑动摩擦模型中，$F=\mu R$；其方向由接触处的相对运动决定。

**2. 变加速度：**

- 若合力是时间的函数，先用 $\mathbf a=\mathbf F(t)/m$，对各分量积分两次，分别代入速度与位置条件。
- 对直线运动，若速度可以写成位移的可微函数，可以使用 $F=m\frac{dv}{dt}=mv\frac{dv}{ds}$。

**3. 二维／三维运动：**

- 对每个分量使用 $\mathbf{F} = m\mathbf{a}$。

<div class="worked-example" markdown="1">

### 例题 {#example}

A particle of mass $2\,\mathrm{kg}$ has resultant force $\mathbf F=(4t\mathbf i+6\mathbf j)\,\mathrm N$, where time is in seconds. Find its acceleration at $t=2\,\mathrm s$.

**解答：**

$$\mathbf{a} = \frac{\mathbf{F}}{m} = \frac{4t}{2}\mathbf{i} + \frac{6}{2}\mathbf{j} = 2t\mathbf{i} + 3\mathbf{j}$$

在 $t=2\,\mathrm s$ 时：

$$\boxed{\mathbf a=(4\mathbf i+3\mathbf j)\,\mathrm{m\,s^{-2}}}.$$

**检查：**把加速度的每个分量乘回质量，应还原该时刻题目给出的合力。加速度不一定与运动方向相同。

</div>

---

## M2.5：抛体 {#m25-projectiles}

推导与完整示范见[抛体模型](/zh/alevel/a2-mathematics/mechanics/projectiles/#the-projectile-model)。起落高度不同时，回到[从高处抛出](/zh/alevel/a2-mathematics/mechanics/projectiles/#projection-from-a-height)；目标、墙和天花板问题见[轨迹方程](/zh/alevel/a2-mathematics/mechanics/projectiles/#the-equation-of-the-path)及[高度限制](/zh/alevel/a2-mathematics/mechanics/projectiles/#height-restrictions)。

### 假设 {#assumptions}

- 质点的加速度为竖直向下的常量 $g$。
- 忽略空气阻力。
- 运动发生在一个竖直平面内。

### 运动方程（从 $t=0$ 开始） {#equations-of-motion-from-t0}

以抛出点为原点，水平为 $x$ 方向，竖直向上为 $y$ 方向。初速大小为 $V$，与水平线向上成 $\alpha$ 角：

$$u_x = V\cos\alpha,\quad u_y = V\sin\alpha$$

| 分量 | 方程 |
|-----------|----------|
| 水平 | $x = (V\cos\alpha)t$ |
| 竖直 | $y = (V\sin\alpha)t - \frac{1}{2}gt^2$ |

### 常见求问 {#key-quantities}

考试中应从水平、竖直分量方程出发，不直接套特殊情形的成品公式。

| 要求什么 | 方法与条件 |
|---|---|
| 飞行时间 | 把落地高度代入竖直方程，取实际飞行的正时间 |
| 最大高度 | 向上抛出时令竖直速度 $V\sin\alpha-gt=0$；分清相对抛出点的高度和离地高度 |
| 水平射程 | 先求飞行时间，再代入 $x=(V\cos\alpha)t$ |

若起落同高，且 $0<\alpha<90^\circ$，由方程可以解出 $T=\frac{2V\sin\alpha}{g}$ 和 $R=\frac{V^2\sin2\alpha}{g}$。这些是需要从方程推得的特殊结果，不能直接用于从悬崖抛出的情形。

### 轨迹方程 {#equation-of-trajectory}

当 $V\cos\alpha\ne0$ 时，从分量方程消去 $t$：

$$y = x\tan\alpha - \frac{gx^2}{2V^2\cos^2\alpha}$$

<div class="worked-example" markdown="1">

### 例题 {#example-1}

A particle is projected at $20\,\mathrm{m\,s^{-1}}$ at $30^\circ$ above the horizontal and lands at its launch height. Neglect air resistance and take $g=9.8\,\mathrm{m\,s^{-2}}$. Find its range.

落地时 $y=0$：

$$0=20\sin30^\circ\,t-4.9t^2=t(10-4.9t).$$

正的飞行时间为 $t=10/4.9\,\mathrm s$，因此

$$x=20\cos30^\circ\left(\frac{10}{4.9}\right)=\frac{200\sqrt3}{9.8}\approx35.3\,\mathrm m.$$

根 $t=0$ 对应抛出的瞬间；求落地时间时取另一个根。

</div>

---

## M2.6：功与能量 {#m26-work-and-energy}

完整解释、图、示范和练习见[力所做的功](/zh/alevel/a2-mathematics/mechanics/work-and-energy/#work-done-by-a-force)。需要选择能量方程时，回到[功—能原理](/zh/alevel/a2-mathematics/mechanics/work-and-energy/#the-work-energy-principle)；车辆驱动力问题见[斜坡道路上的车辆](/zh/alevel/a2-mathematics/mechanics/work-and-energy/#vehicles-on-inclined-roads)。

### 做功 {#work-done}

- 恒力 $\mathbf{F}$ 作用下，位移为 $\mathbf{d}$ 时：
  $$W = \mathbf{F} \cdot \mathbf{d} = Fd\cos\theta$$
- 单位为焦耳（J）。

这里 $\theta$ 是力与位移的夹角；取的是力沿该位移方向的分量。

### 动能 {#kinetic-energy}

$$KE = \frac{1}{2}mv^2$$

### 重力势能（地面附近） {#gravitational-potential-energy-near-earths-surface}

沿用教材，把重力势能记为 $PE$；有些资料用 $GPE$ 表示同一个量。

$$PE=mgh.$$

从固定的零势能面竖直向上量 $h$。零面以下的势能可以为负；两个位置的势能差不因所选的固定零面而改变。

### 功—能原理 {#work-energy-principle}

$$W_{\text{total}} = \Delta KE = KE_{\text{final}} - KE_{\text{initial}}$$

这里的总功包含重力做功。等价地，重力以外各力做功的总和等于 $\Delta(KE+PE)$。重力只计一次：用它做的功，或用势能的变化。

### 机械能守恒 {#conservation-of-mechanical-energy}

若没有通过驱动力、摩擦等其他力做功而输入或损失能量，则

$$KE_{\text{initial}}+PE_{\text{initial}}=KE_{\text{final}}+PE_{\text{final}}.$$

### 功率 {#power}

一段时间的平均功率为 $P_{\mathrm{average}}=\frac{W}{\Delta t}$。瞬时功率为 $P=\frac{\mathrm dW}{\mathrm dt}=Fv$，其中 $F$ 是力沿运动方向的分量，$v$ 是速率。功率单位为瓦特。只有功率恒定时，才能在整段运动中直接把平均功率当作瞬时功率。

发动机功率应使用驱动力 $D$，所以 $P=Dv$。这里 $f$ 是阻碍运动的阻力，$\alpha$ 是道路与水平线的夹角。匀速上坡时，$D=f+mg\sin\alpha$；匀速下坡时，$D=f-mg\sin\alpha$。后一式若要表示正向驱动力，需要 $f>mg\sin\alpha$。用 $D=P/v$ 时必须有 $v>0$。

---

## M2.7：匀速圆周运动 {#m27-uniform-circular-motion}

完整解释、图、示范和练习见[角速率](/zh/alevel/a2-mathematics/mechanics/uniform-circular-motion/#angular-speed-and-angular-velocity)及[径向加速度](/zh/alevel/a2-mathematics/mechanics/uniform-circular-motion/#radial-acceleration)。需要受力图时，回到[水平圆中的力](/zh/alevel/a2-mathematics/mechanics/uniform-circular-motion/#forces-in-a-horizontal-circle)。

### 基本关系 {#key-relationships}

质点在半径为 $r$ 的圆上，以恒定角速率 $\omega$ 运动时：

| 物理量 | 公式 |
|----------|---------|
| 线速率 | $v = r\omega$ |
| 向心加速度 | $a = r\omega^2 = \frac{v^2}{r}$ |
| 向心力 | $F = m a = m r\omega^2 = \frac{mv^2}{r}$ |

### 方向 {#direction}

- 向心加速度始终指向圆心。
- 所需向心力由张力、摩擦、重力、支持力等实际的力提供。

受力图画实际的力；这些力朝圆心的合力就是向心力，不要再多画一个力。水平圆周运动的竖直合力为零。加速度的大小不变，但方向一直改变。

用 $\omega$ 表示 $v=r\omega$ 中的角速率。若要说明角速度方向，另写顺时针或逆时针。周期为 $\tau=2\pi/\omega$；$T$ 留作张力符号。

### 圆锥摆 {#conical-pendulum}

![圆锥摆：张力沿绳，重力竖直向下，夹角从竖直方向量起](/assets/img/a2-math-mech/conical-pendulum-forces.svg)

质量为 $m$ 的质点系在长为 $L$ 的绳上，在水平圆中运动，绳与竖直方向成 $\theta$ 角。

**竖直平衡：**$T\cos\theta = mg$

**水平圆周运动：**$T\sin\theta = m r \omega^2$，其中 $r = L\sin\theta$

消去 $T$：

$$\tan\theta = \frac{r\omega^2}{g} \quad \text{or} \quad \omega = \sqrt{\frac{g}{L\cos\theta}}$$

这里 $\theta$ 从竖直方向量起，半径为 $r=L\sin\theta$，不能把它当作 $L$。要形成半径非零的圆，需要 $L\omega^2>g$。

受力三角形与半径的解释见[圆锥摆](/zh/alevel/a2-mathematics/mechanics/uniform-circular-motion/#the-conical-pendulum)。

### 极限与接触 {#limits-and-contact}

- 粗糙水平转盘或水平弯道上，$mv^2/r\leq\mu mg$；只有刚要滑动时取等号。
- 在半径为 $a$ 的光滑半球碗内，设质点位于碗心下方深度 $d$ 处，则 $r^2+d^2=a^2$ 且 $d=g/\omega^2$；非零半径的水平圆要求 $0<d<a$。
- 绷紧的绳固定在光滑水平面上方高 $h$ 处，质点仍与平面接触时有 $R=m(g-h\omega^2)$。圆心在绳的固定端正下方。保持接触需要 $R\geq0$；刚离面时 $R=0$。
- 在半顶角为 $\alpha$ 的光滑圆锥内，分解得到 $R\sin\alpha=mg$ 和 $R\cos\alpha=mr\omega^2$。支持力垂直于圆锥侧面。

各情形的几何不同，可分别回到[摩擦与道路弯道](/zh/alevel/a2-mathematics/mechanics/uniform-circular-motion/#friction-and-road-bends)、[光滑碗内运动](/zh/alevel/a2-mathematics/mechanics/uniform-circular-motion/#motion-inside-a-smooth-bowl)、[接触与离面](/zh/alevel/a2-mathematics/mechanics/uniform-circular-motion/#contact-and-lifting-off-a-plane)或[光滑圆锥内运动](/zh/alevel/a2-mathematics/mechanics/uniform-circular-motion/#motion-inside-a-smooth-cone)。

<div class="worked-example" markdown="1">

### 例题 {#example-2}

A particle moves in a horizontal circle of radius $0.5\,\mathrm m$ at $4\,\mathrm{m\,s^{-1}}$. Find its radial acceleration and the time for one revolution.

$$a=\frac{v^2}{r}=\frac{4^2}{0.5}=32\,\mathrm{m\,s^{-2}}.$$

$$\omega=\frac{v}{r}=\frac{4}{0.5}=8\,\mathrm{rad\,s^{-1}}.$$

$$\tau=\frac{2\pi}{\omega}=\frac\pi4\,\mathrm s.$$

**检查：**用圆周长除以速率，也会得到同一个周期。速率虽然恒定，加速度仍指向圆心。

</div>

---

## 公式汇总 {#key-formulae-summary}

| 主题 | 公式与条件 |
|-------|---------|
| 向量运动学 | $\mathbf{v} = \frac{d\mathbf{r}}{dt}$，$\mathbf{a} = \frac{d\mathbf{v}}{dt}$ |
| 极限摩擦 | $F_{\text{max}} = \mu R$ |
| 力矩 | 大小为 $Fd$；$d$ 是到作用线的垂距，另说明顺时针或逆时针 |
| 质点系的质心 | $\bar{x} = \frac{\sum m_i x_i}{\sum m_i}$ |
| 抛体的飞行时间与射程 | 用真实落地高度解分量方程 |
| 抛体的最大高度 | 向上抛出时，令竖直速度 $=0$ 求 $y$，并检查此前没有碰撞 |
| 功 | $W=Fd\cos\theta$；力恒定，位移大小为 $d$ |
| 动能 | $KE = \frac{1}{2}mv^2$ |
| 功率 | 瞬时有 $P=F_{\parallel}v$；向前的驱动力用 $P=Dv$ |
| 匀速圆周运动 | $a=\frac{v^2}{r}=r\omega^2$，方向朝圆心，且 $r>0$ |

## 补充题 {#further-questions}

以下四题从旧笔记保留。原始试卷出处尚未核定，因此不称为已经确认的官方真题。它们结合了上面速查中的不同方法。

先尝试作答，再按需要打开提示或解答。若还不熟悉方法，可沿每题的回课链接学习；这四题供课程练习之外补充复习。

<div class="lesson-check" markdown="1">

### 平衡 {#equilibrium}

![杆 AB 在 A 接触水平地面，在 T 与圆心为 O、半径为 a 的半圆柱相切；杆与地面成 theta 角](/assets/img/a2-math-mech/MA05_example_q1.png)

A uniform rod $AB$, of length $2a$, is resting with its end $A$ on rough horizontal ground and a point $T$ on the rod in contact with a rough fixed prism of semicircular cross-section, of radius $a$. The rod lies in a vertical plane which is perpendicular to the axis of the prism, as shown in the figure above.

The coefficient of friction between the rod and the ground at $A$ and between the rod and the prism at $T$ is $\mu$, where $0 < \mu < 1$.

When the rod is inclined at an angle $\theta$ to the horizontal, where $\tan \theta = \frac{3}{4}$, the rod is at the point of slipping.

Determine the value of $\mu$.

需要回补时，查看[摩擦](/zh/alevel/a2-mathematics/mechanics/forces-equilibrium-and-friction/#friction-and-limiting-equilibrium)和[平面内的刚体平衡](/zh/alevel/a2-mathematics/mechanics/moments-and-rigid-objects/#equilibrium-of-a-rigid-object-in-a-plane)。
{:.lesson-meta}

<details markdown="1">
<summary>提示 Hint</summary>

半径 $OT$ 垂直于杆。求 $AT$ 时先看三角形 $AOT$，再对 $A$ 取矩。临界状态下，$A$ 处的摩擦向右，$T$ 处的摩擦沿杆向上。

</details>

<details markdown="1">
<summary>解答与检查 Solution and check</summary>

设杆的重量为 $W$，地面的法向支持力为 $R_A$，圆柱的法向支持力为 $R_T$。已知角度给出 $\sin\theta=3/5$ 和 $\cos\theta=4/5$。由直角三角形 $AOT$：

$$AT=a\cot\theta=\frac{4a}{3}.$$

杆往下落时，中点高度降低，倾角减小。相切条件使杆脚向左移动、远离 $O$，杆在 $T$ 处沿自身方向向下滑。因此，地面摩擦向右，圆柱处的摩擦沿杆向上。两处都达到极限，摩擦力大小分别为 $\mu R_A$ 和 $\mu R_T$。

对 $A$ 取矩。$T$ 处摩擦沿杆，作用线经过 $A$，所以不产生力矩：

$$R_T\left(\frac{4a}{3}\right)=W(a\cos\theta),\qquad R_T=\frac35W.$$

沿竖直方向分解：

$$R_A+R_T\cos\theta+\mu R_T\sin\theta=W,$$

$$R_A=\frac{13-9\mu}{25}W.$$

沿水平方向分解：

$$\mu R_A+\mu R_T\cos\theta=R_T\sin\theta.$$

代入得 $\mu(13-9\mu)+12\mu=9$，因此：

$$9\mu^2-25\mu+9=0.$$

只有一个根在零与一之间：

$$\boxed{\mu=\frac{25-\sqrt{301}}{18}\approx0.425}.$$

**检查：**两处法向支持力都为正。用未舍入的根代回，可得水平、竖直合力和对 $A$ 的合力矩都为零。另一个根大于一，不满足题目条件。

</details>

</div>

<span id="centre-of-mass"></span>

保留的薄板题及其解答见[质心](#centres-of-mass-1)。

<div class="lesson-check" markdown="1">

### 圆周运动 {#circular-motion}

本题结合圆周运动与刚体力矩，供补充复习；倾斜道路上的倾倒并未被单独列为 M2.7 的必学要求。需要回补时，查看[水平圆中的力](/zh/alevel/a2-mathematics/mechanics/uniform-circular-motion/#forces-in-a-horizontal-circle)和[力矩](/zh/alevel/a2-mathematics/mechanics/moments-and-rigid-objects/#the-moment-of-a-force)。
{:.lesson-meta}

![汽车在外侧较高的倾斜弯道上沿水平圆运动；G 位于 AB 中点，AB 为 2d，G 到路面的垂距为 h](/assets/img/a2-math-mech/MA05-circular-motion.png)

A car travels at constant speed $v$ in a horizontal circle of radius $r$ on a road banked at angle $\theta$ above the horizontal. In the cross-section shown, its centre of mass $G$ is midway between $A$ and $B$, with $AB=2d$. Its perpendicular distance from the road is $h$. Model the car as a rigid body with contact points directly below $A$ and $B$. Assume there is enough friction to prevent sliding.

The offsets from $A$ and $B$ to their road contacts are perpendicular to the road, each of length $h$. Take $r,d,h>0$ and $0\leq\theta<90^\circ$.

At the limit of toppling towards the outside of the bend, the inner contact loses its reaction. The car is about to topple about the **outer contact below $B$**, not about $G$. Show that

$$v^2=\frac{rg(d+h\tan\theta)}{h-d\tan\theta},$$

provided $h\cos\theta>d\sin\theta$.

<details markdown="1">
<summary>提示 Hint</summary>

临界倾倒时，只有外侧接触点提供接触力。它的竖直分量平衡重力，水平分量提供朝圆心的加速度。对 $G$ 取矩，两个分量都要保留。

</details>

<details markdown="1">
<summary>解答与检查 Solution and check</summary>

设外侧接触点的总接触力中，朝圆心的水平分量为 $Q_x$，向上的竖直分量为 $Q_y$。总接触力包含法向支持力与摩擦力，其方向通常不垂直于路面。

汽车没有竖直加速度，水平加速度朝圆心，因此：

$$Q_y=mg,\qquad Q_x=\frac{mv^2}{r}.$$

相对 $G$，外侧接触点向右的水平距离为 $d\cos\theta+h\sin\theta$，向下的竖直距离为 $h\cos\theta-d\sin\theta$。尚未倾倒时，这个截面内对 $G$ 的合力矩为零。重力经过 $G$，其力矩为零，两个接触力分量给出：

$$Q_y(d\cos\theta+h\sin\theta)=Q_x(h\cos\theta-d\sin\theta).$$

代入两分量，约去 $m$ 后整理：

$$v^2=rg\frac{d\cos\theta+h\sin\theta}{h\cos\theta-d\sin\theta}=\frac{rg(d+h\tan\theta)}{h-d\tan\theta}.$$

**检查：**水平路面上，$\theta=0$ 给出 $v^2=rgd/h$。质心越高，这个倾倒临界速度越低。要有这一有限临界值，分母必须为正；如果摩擦不足，汽车可能先滑动，此式就不是实际的极限速度。

</details>

</div>

<div class="lesson-check" markdown="1">

### 抛体运动 {#projectile-motion}

A particle is projected at an angle $\alpha$ above the horizontal, from a vertical cliff face of height $H$ above level horizontal ground. It first hits the ground at a horizontal distance $D$, from the bottom of the cliff edge.

Assuming that air resistance can be ignored, show that the greatest height achieved by the particle from the level horizontal ground is
$$H + \frac{D^2 \tan^2 \alpha}{4(H + D \tan \alpha)}.$$

需要回补时，查看[从高处抛出](/zh/alevel/a2-mathematics/mechanics/projectiles/#projection-from-a-height)和[最大高度与射程](/zh/alevel/a2-mathematics/mechanics/projectiles/#greatest-height-and-range)。
{:.lesson-meta}

<details markdown="1">
<summary>提示 Hint</summary>

以抛出点为原点，落地时 $x=D$、$y=-H$。先消去时间求初速，再令竖直速度为零，找最大高度。

</details>

<details markdown="1">
<summary>解答与检查 Solution and check</summary>

设初速大小为 $u$，且 $0<\alpha<90^\circ$。以抛出点为原点、竖直向上为正。落地时：

$$D=u\cos\alpha\,t,\qquad -H=u\sin\alpha\,t-\frac12gt^2.$$

把 $t=D/(u\cos\alpha)$ 代入竖直方程：

$$-H=D\tan\alpha-\frac{gD^2}{2u^2\cos^2\alpha}.$$

因此：

$$u^2=\frac{gD^2}{2(H+D\tan\alpha)\cos^2\alpha}.$$

最高点的竖直速度为零，所以 $t_{\text{top}}=u\sin\alpha/g$。代入高度方程：

$$h_{\text{max}}=H+\frac{u^2\sin^2\alpha}{2g}.$$

再代入 $u^2$ 的表达式：

$$\boxed{h_{\text{max}}=H+\frac{D^2\tan^2\alpha}{4(H+D\tan\alpha)}}.$$

**检查：**向上抛出时，最大离地高度应大于 $H$。当 $\alpha$ 趋近零，额外上升的高度趋近零。高度从地面量起，所以必须包含 $H$。

</details>

</div>

<div class="lesson-check" markdown="1">

### 质心 {#centres-of-mass-1}

![挖去圆孔的组合圆形薄板：悬点为 X，附加质点在 Q，图中标出两圆的位置与尺寸](/assets/img/a2-math-mech/MA05-centre-of-mass.png)

A composite uniform lamina is modelled by the finite region bounded by two circular discs, shown shaded in the figure above. The details, of the sizes and relative positions of these discs, are as follows.

The straight line $POQ$ is a diameter of the larger circular disc, of radius $12a$, whose centre is at the point $O$. The smaller circular disc, of radius $6a$, has its centre at $O'$, so that $O'$ lies on $OQ$ with $\lVert O'Q\rVert=9a$.

A heavy particle is attached to the lamina at $Q$.

The straight line $XOY$ is perpendicular to $POQ$.

When the lamina is freely suspended from $X$ and hangs in equilibrium, with $P$ higher than $Q$, $POQ$ is inclined at $\arctan\frac{5}{12}$ to the horizontal.

Determine the ratio of the mass of the particle to the mass of the lamina.

需要回补时，查看[组合薄板](/zh/alevel/a2-mathematics/mechanics/centres-of-mass/#composite-laminae)和[悬挂物体](/zh/alevel/a2-mathematics/mechanics/centres-of-mass/#suspended-bodies)。
{:.lesson-meta}

<details markdown="1">
<summary>提示 Hint</summary>

先扣除圆孔的面积矩，求薄板质心。附加质点后，整体质心必须在 $X$ 正下方；用悬挂角求它在物体原坐标系中的 $x$ 坐标。

</details>

<details markdown="1">
<summary>解答与检查 Solution and check</summary>

以 $O$ 为原点，$OQ$ 为 $x$ 轴正向，$OX$ 为 $y$ 轴正向。于是 $Q=(12a,0)$、$X=(0,12a)$、$O'=(3a,0)$。

设薄板的单位面积质量为 $\rho$。从完整大圆扣去小圆孔：

$$M=\rho\pi a^2(144-36)=108\rho\pi a^2.$$

剩余薄板的质心为：

$$x_L=\frac{144(0)-36(3a)}{144-36}=-a,\qquad y_L=0.$$

设附加质点的质量为 $m$。整体质心 $G$ 的坐标为：

$$\bar x=\frac{-Ma+12am}{M+m},\qquad \bar y=0.$$

因为 $P$ 高于 $Q$，物体顺时针转过 $\theta$ 角。要使 $G$ 在 $X$ 下方，转动后 $\overrightarrow{XG}$ 的水平分量必须为零：

$$\bar x\cos\theta-12a\sin\theta=0.$$

所以 $\bar x=12a\tan\theta=5a$。代回质量矩方程：

$$-M+12m=5(M+m),\qquad 7m=6M.$$

$$\boxed{\frac mM=\frac67}.$$

**检查：**此质量比给出 $\bar x=5a$，位于薄板质心 $-a$ 与质点位置 $12a$ 之间。用 $\sin\theta=5/13$、$\cos\theta=12/13$，可得 $X$ 到 $G$ 的向下距离为 $5a\sin\theta+12a\cos\theta=13a>0$；整体质心确实在悬点下方。

</details>

</div>

---

## 来源与范围 {#sources-and-scope}

本速查对应 OxfordAQA Mathematics **9660**、MA05 Unit M2，[大纲 v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf)印刷页 27–30（PDF 第 26–29 页），供配合九节核心课查阅。综合题需要 AS 动量时，可使用[动量回补](/zh/alevel/a2-mathematics/mechanics/momentum-bridge/)。

制作时实际查阅了配对的 [January 2025 MA05 试卷](/assets/pdf/fx-cg50/references/oxfordaqa-ma05-2025-january-question-paper.pdf)及[评分标准 Version 1.0 Final](/assets/pdf/fx-cg50/references/oxfordaqa-ma05-2025-january-mark-scheme.pdf)，用于核对方法与解释要求：Q6（QP 第 12–13 页、MS 第 12 页）的质量矩与悬挂；Q7（QP 第 14–15 页、MS 第 13–14 页）的能量与后续抛体。这里的页码也就是 PDF 页码。上面的保留题并未被认定为这两道官方题。

计算中保留精确值，最后按题目要求取精度。January 2025 卷通常要求计算器答案给两位有效数字；但 Q6(b) 要求精确值，Q7(c) 要求三位有效数字。这些指令不能用来给本页教学例题套上官方分值或统一精度规则。

四道补充题保留旧题干和图，只补清了倾斜路面题的接触点几何。原始出处仍未核定，不改称自拟题，也不称已确认的官方题；所附解答是教学核查，不是官方评分标准。
