---
title: 圆周运动
layout: subjects
mathjax: true
grade: a2
subject: a2-physics
lang: zh-CN
translation_of: /alevel/a2-physics/circular-motion/
permalink: /zh/alevel/a2-physics/circular-motion/
toc_headings: h2, h3, h4
study_page: true
---

[A2 物理](/zh/alevel/a2-physics/) · PH03 · 3.6.1 圆周运动

解释物体为何在速率不变时仍有加速度，联系角速率与线速率，并用实际受力解决圆周运动问题。本页题干保留英文，讲解、提示与解答使用中文；图中保留英文标签。

- **学习：**从[速率与加速度](#speed-and-acceleration)开始，再学习[受力方程](#force-equations)。
- **作业帮助：**画实际力、标圆心，再取指向圆心为正方向。
- **复习：**先做[练习](#practice)，再打开提示与解答。

**开始前：**复习 [AS 物理](/alevel/as-physics/)中的力、矢量与牛顿第二定律。除非另有说明，使用 $g=9.81\,\mathrm{m\,s^{-2}}$。中间计算保留额外位数，最后按合适的有效数字取值。

例题与练习 1–4 为自拟题；练习 5–6 改编自 OxfordAQA PH03 试卷，题干和图示已经简化，属于改编题而非官方原文，未赋予官方分值。图示不按比例绘制。

## 速率与加速度 {#speed-and-acceleration}

**先想一想：**汽车沿圆周以恒定速率行驶，加速度为零吗？

<details markdown="1">
<summary>核对你的解释</summary>

不为零。速率不变，但速度的方向在变；速度变化就意味着存在加速度。合力指向圆心。

</details>

**匀速率圆周运动（uniform circular motion）**指沿圆周以恒定速率运动。速度沿圆周切线，**向心加速度（centripetal acceleration）**指向圆心。

<img src="/assets/img/a2-math-mech/circular-velocity-acceleration.svg" width="400" height="320" data-lazy-ignore="true" alt="速度沿圆周切线，加速度指向圆心">

加速度大小不变，但方向改变，因此加速度矢量并不恒定。

**角速率（angular speed）**$\omega$ 是单位时间内转过的角度。角度用**弧度（radian）**表示，一周为 $2\pi$ 弧度。

**周期（period）**$T$ 是转一周所需的时间；**频率（frequency）**$f$ 是每秒转过的周数，单位为赫兹。

$$f=\frac{1}{T},\qquad \omega=2\pi f=\frac{2\pi}{T}.$$

对半径为 $r$ 的圆周：

$$\boxed{v=r\omega},\qquad \boxed{a=\frac{v^2}{r}=r\omega^2}.$$

$r$ 用米，$T$ 用秒，$\mathrm{rad\,s^{-1}}$ 是 $\omega$ 的单位，$\mathrm{m\,s^{-1}}$ 是 $v$ 的单位，$\mathrm{m\,s^{-2}}$ 是 $a$ 的单位。半径从转轴量到运动物体，不是直径。

每分钟转 $n$ 周时，先除以 $60$ 得到以赫兹为单位的 $f$，再乘 $2\pi$ 求 $\omega$。角度用弧度时，计算器也要设为弧度模式。

### 例题 1：旋转圆盘 {#example-1-a-rotating-disc}

A point $0.15\,\mathrm m$ from the axis of a disc completes $120$ revolutions per minute. Find its frequency, angular speed, linear speed and acceleration.

$$f=\frac{120}{60}=2.0\,\mathrm{Hz}.$$

$$\omega=2\pi(2.0)=4\pi\approx13\,\mathrm{rad\,s^{-1}}.$$

使用未取整的 $\omega$：

$$v=0.15(4\pi)\approx\boxed{1.9\,\mathrm{m\,s^{-1}}}.$$

$$a=0.15(4\pi)^2\approx\boxed{24\,\mathrm{m\,s^{-2}}}.$$

加速度指向转轴，周期为 $T=1/f=0.50\,\mathrm s$。

**检查：**$vT=2\pi r$，即一个周期内走过一个圆周长。

### 半径改变时，哪些量会改变？ {#what-changes-when-the-radius-changes}

比较两个圆周之前，先说明保持哪个量不变。

| 保持不变的量 | 关系式 | 半径变为两倍时 |
|---|---|---|
| 线速率 $v$ | $a=\dfrac{v^2}{r}$ | 加速度减半 |
| 角速率 $\omega$ | $a=r\omega^2$ | 加速度变为两倍 |

同一刚性圆盘上各点角速率相同。离轴越远，线速率和加速度越大。

## 受力方程 {#force-equations}

由牛顿第二定律，指向圆心的合力为：

$$\boxed{F=ma=\frac{mv^2}{r}=mr\omega^2}.$$

**向心力（centripetal force）**描述指向圆心的合力，由张力、摩擦力、引力或支持力等实际力提供。受力图已经画出全部实际力后，不要再添加一个叫“向心力”的力。

1. 画出并标明物体受到的实际力。
2. 标出运动轨迹的圆心。
3. 沿指向圆心的方向分解力，列出 $\text{inward resultant}=mv^2/r$；式中 inward resultant 指向内的合力。
4. 对没有加速度的方向，另列平衡方程。
5. 检查绳子能否保持绷紧、物体能否保持接触。

匀速率圆周运动的合力与速度垂直，不做功，因此只改变运动方向，不改变速率。这里“不做功”指合力；个别力可以做功，只要各力的功相互抵消。

### 例题 2：水平绳的张力 {#example-2-tension-in-a-horizontal-string}

A $0.20\,\mathrm{kg}$ particle moves in a horizontal circle on a smooth table. A horizontal string joins it to a fixed point. The radius is $0.50\,\mathrm m$ and the speed is $3.0\,\mathrm{m\,s^{-1}}$. Find the tension.

Before calculating, draw the particle, circle centre and all actual forces. Identify the vertical force balance and the inward resultant. Do not add a separate force named “centripetal force”.

<details markdown="1">
<summary>核对受力图与计算</summary>

重力向下、支持力向上；没有竖直加速度，两者平衡。张力 $F_T$ 水平指向圆心：

$$F_T=\frac{0.20(3.0)^2}{0.50}=\boxed{3.6\,\mathrm N}.$$

这里 $F_T$ 表示张力，$T$ 表示周期。竖直支持力为 $mg\approx2.0\,\mathrm N$，不是 $3.6\,\mathrm N$。

若绳子最多承受 $5.0\,\mathrm N$：

$$v_{\max}=\sqrt{\frac{F_{T,\max}r}{m}}\approx\boxed{3.5\,\mathrm{m\,s^{-1}}}.$$

**检查：**速率变为两倍，需要四倍张力。

</details>

### 例题 3：汽车通过水平弯道 {#example-3-a-car-on-a-level-bend}

A $750\,\mathrm{kg}$ car follows a level circular bend of radius $40\,\mathrm m$ at $12\,\mathrm{m\,s^{-1}}$. Friction supplies the horizontal inward force. Ignore air resistance. Find the required friction force.

$$F=\frac{750(12)^2}{40}=\boxed{2.7\times10^3\,\mathrm N}.$$

若最大可用摩擦力为 $4.0\times10^3\,\mathrm N$，该半径下的最大速率为：

$$v_{\max}=\sqrt{\frac{(4.0\times10^3)(40)}{750}}\approx\boxed{15\,\mathrm{m\,s^{-1}}}.$$

速率再大，摩擦力便无法提供所需的向内合力，汽车不能沿所述圆周行驶；并不是新增了一个向外的力。

## 坡顶与凹谷底部 {#at-the-top-and-bottom-of-a-curve}

圆弧坡顶的曲率中心在汽车下方，凹谷底部的曲率中心在汽车上方。使用所研究位置的**局部曲率半径**$r$。

<img src="/assets/img/physics-circular-contact.svg" width="400" height="620" data-lazy-ignore="true" alt="坡顶与谷底受力图：重力向下、支持力向上；圆心分别在车的下方和上方">

图中只画实际力。虚线表示指向圆心的方向，不是额外的力。Hill crest 指坡顶，Dip 指凹谷。

在**坡顶**，向下为指向圆心：

$$mg-N=\frac{mv^2}{r}.$$

支持力 $N$ 随速率增大而减小。恰好失去接触时 $N=0$：

$$\boxed{v_{\max}=\sqrt{gr}}.$$

这是**坡顶保持接触的最大速率**。若计算得到 $N<0$，就要求路面把汽车向下拉；普通接触无法做到，说明汽车已经离开路面。

在**凹谷底部**，向上为指向圆心：

$$N-mg=\frac{mv^2}{r}.$$

支持力大于重力，这就是通过谷底时感到接触力更大的原因。

### 例题 4：坡顶接触条件 {#example-4-contact-at-a-hill-crest}

A $1000\,\mathrm{kg}$ car passes over a hill crest of radius $50\,\mathrm m$ at $15\,\mathrm{m\,s^{-1}}$. Find the reaction and the greatest speed for maintaining contact.

$$N=mg-\frac{mv^2}{r}.$$

$$N=9810-4500=5310\,\mathrm N.$$

$$\boxed{N=5.3\times10^3\,\mathrm N\text{ upwards}}.$$

$$v_{\max}=\sqrt{9.81(50)}\approx\boxed{22\,\mathrm{m\,s^{-1}}}.$$

**检查：**$N$ 为正且小于 $mg$；给定速率低于保持接触的上限。

### 竖直绳环为何不同？ {#why-is-a-vertical-loop-different}

绳系质点到达竖直圆周最高点时，张力与重力都指向圆心：

$$F_T+mg=\frac{mv^2}{r}.$$

绳子绷紧要求 $F_T\geq0$，因此 $v\geq\sqrt{gr}$。这里 $\sqrt{gr}$ 是**最小值**，因为张力向内拉；坡顶支持力由路面向外推，同一个表达式对应**最大值**。先画力，再选条件。

竖直圆周中的速率不一定恒定。最高点和最低点仍可列径向方程；忽略摩擦和空气阻力时，可用能量守恒联系两处速率。

## 倾斜力的分解 {#inclined-forces}

实际力未必正对圆心，要使用其分量。

飞机在恒定高度做水平圆周运动时，升力 $L$ 与竖直方向成 $\theta$ 角。本模型中重力为 $mg$，沿运动方向的推力与阻力相互抵消。

<img src="/assets/img/physics-circular-lift.svg" width="400" height="330" data-lazy-ignore="true" alt="升力倾斜：竖直分量平衡重力，水平分量指向圆心">

没有竖直加速度，因此：

$$L\cos\theta=mg.$$

升力的水平分量提供向内合力：

$$L\sin\theta=\frac{mv^2}{r}.$$

两式相除得到：

$$\boxed{\tan\theta=\frac{v^2}{rg}}.$$

此关系要求飞机保持高度做水平圆周运动。如果飞机向下加速，竖直平衡方程就不再适用。

**忽略摩擦**时，倾斜弯道上的汽车也可用同样的方法：把升力换成支持力，并使用路面与水平面的夹角。有摩擦时，必须把摩擦力也列入方程。

## 测量与图像 {#measurements-and-graphs}

测量稳定圆周运动的周期时，以固定标记计时多次完整转动，总时间除以周数；重复并取平均。这样可以减小反应时间造成的百分不确定度，同时要检查速率是否稳定。

半径应从转轴量到运动物体中心，不能把直径当作半径。

研究向内合力时：

| 图像 | 保持不变 | 预期形状与斜率 |
|---|---|---|
| $F$ 对 $v^2$ | 质量 $m$、半径 $r$ | 过原点直线；斜率 $m/r$ |
| $F$ 对 $r$ | 质量 $m$、角速率 $\omega$ | 过原点直线；斜率 $m\omega^2$ |

第二张图并非在线速率固定时检验 $F\propto1/r$。必须说明控制哪一种速率。$F$ 对 $v$ 在固定 $m,r$ 时是曲线而非直线。

这些是圆周运动的实验研究技能；本大纲未将其列为单独编号的必做实验。

## 练习 {#practice}

使用题目指定的模型。问加速度或力时，要给方向。先独立尝试，再打开提示。

### 练习 1：速率与速度 {#question-1-speed-and-velocity}

Explain why a particle moving in a circle at constant speed has acceleration. State the directions of velocity and acceleration. If the inward force is removed and no other force acts, describe its subsequent motion.

<details markdown="1">
<summary>提示</summary>

速度包含方向。移除合力后，使用牛顿第一定律。

</details>

<details markdown="1">
<summary>解答</summary>

速度方向不断变化，因此有加速度。速度沿切线，加速度指向圆心。没有合力后，质点沿释放瞬间的切线以恒定速度做直线运动。

“因为在运动所以有加速度”没有解释速度的变化；“向外飞出”也没有指出切线方向。

</details>

### 练习 2：转速与半径 {#question-2-rotations-and-radius}

A disc rotates at $90$ revolutions per minute. Point A is $0.20\,\mathrm m$ from its axis and point B is $0.40\,\mathrm m$ from its axis. Find the angular speed, the speed and acceleration of A, and the speed and acceleration of B.

<details markdown="1">
<summary>提示</summary>

两点角速率相同，使用 $v=r\omega$ 与 $a=r\omega^2$。

</details>

<details markdown="1">
<summary>解答</summary>

$$\omega=2\pi\left(\frac{90}{60}\right)=3\pi\approx9.4\,\mathrm{rad\,s^{-1}}.$$

$$v_A=0.20(3\pi)\approx1.9\,\mathrm{m\,s^{-1}}.$$

$$a_A=0.20(3\pi)^2\approx18\,\mathrm{m\,s^{-2}}.$$

$$v_B=2v_A\approx3.8\,\mathrm{m\,s^{-1}}.$$

$$a_B=2a_A\approx36\,\mathrm{m\,s^{-2}}.$$

两处加速度都指向转轴，周期为 $2/3\,\mathrm s$。这里角速率固定，所以半径加倍，加速度也加倍。

</details>

### 练习 3：力的上限 {#question-3-a-force-limit}

A $0.30\,\mathrm{kg}$ particle moves on a smooth horizontal table in a circle of radius $0.80\,\mathrm m$. A horizontal string supplies the inward force. Its maximum tension is $6.0\,\mathrm N$.

Find the maximum speed and angular speed. At the same speed, would a radius of $0.40\,\mathrm m$ be possible with this string?

<details markdown="1">
<summary>提示</summary>

在 $F_T=mv^2/r$ 中代入最大张力，再检查较小半径所需的力。

</details>

<details markdown="1">
<summary>解答</summary>

$$v_{\max}=\sqrt{\frac{6.0(0.80)}{0.30}}=\boxed{4.0\,\mathrm{m\,s^{-1}}}.$$

$$\omega_{\max}=\frac{4.0}{0.80}=\boxed{5.0\,\mathrm{rad\,s^{-1}}}.$$

半径较小时：

$$F_T=\frac{0.30(4.0)^2}{0.40}=12\,\mathrm N.$$

超过了 $6.0\,\mathrm N$，绳子不能维持这种运动。速率固定时，半径减半，所需力加倍。

</details>

### 练习 4：坡顶还是谷底？ {#question-4-crest-or-dip}

A $600\,\mathrm{kg}$ car moves at $10\,\mathrm{m\,s^{-1}}$. Find the normal reaction (a) at a hill crest of radius $25\,\mathrm m$ and (b) at the bottom of a dip of the same radius. Find the maximum speed at the crest. What would happen at the crest at $18\,\mathrm{m\,s^{-1}}$? Before calculating, draw the actual forces and mark the circle centre separately for the crest and dip.

<details markdown="1">
<summary>提示</summary>

圆心在坡顶下方、谷底上方。检查 $18\,\mathrm{m\,s^{-1}}$ 时算出的支持力符号。

</details>

<details markdown="1">
<summary>解答</summary>

重力为 $5886\,\mathrm N$，在 $10\,\mathrm{m\,s^{-1}}$ 时所需径向合力为 $2400\,\mathrm N$。

坡顶：$N=5886-2400=3486\,\mathrm N\approx\boxed{3.5\times10^3\,\mathrm N}$。

谷底：$N=5886+2400=8286\,\mathrm N\approx\boxed{8.3\times10^3\,\mathrm N}$。

两处支持力都向上。坡顶保持接触的速率上限为：

$$v_{\max}=\sqrt{9.81(25)}\approx\boxed{16\,\mathrm{m\,s^{-1}}}.$$

在 $18\,\mathrm{m\,s^{-1}}$ 时，圆周方程给出 $N=5886-7776=-1890\,\mathrm N$。这种接触不可能有负支持力；汽车失去接触，原先的圆周轨迹假设失效。

**受力图检查：**两种情况都画重力向下、路面支持力向上。坡顶合力向下，谷底合力向上。“向心力”是径向合力的名称，不是额外相互作用。负支持力表示失去接触、原圆轨道假设失效，不表示路面拉着汽车。

</details>

### 练习 5：飞机转弯 {#question-5-an-aircraft-turning}

**改编自 OxfordAQA PH03, January 2020, Question 3.**

An aircraft of mass $1100\,\mathrm{kg}$ turns in a horizontal circle at constant height. Its wings make an angle of $25^\circ$ to the horizontal, so its lift is $25^\circ$ to the vertical. The radius is $900\,\mathrm m$.

1. Find the lift and the horizontal resultant force.
2. Calculate the speed.
3. The angle is increased while the speed and magnitude of lift remain unchanged. State and explain the initial changes in the motion.

<details markdown="1">
<summary>提示</summary>

先用竖直平衡。第 3 问中，比较升力大小不变时两个分量如何改变。

</details>

<details markdown="1">
<summary>解答</summary>

升力的竖直分量平衡重力：

$$L\cos25^\circ=1100(9.81).$$

$$L=\frac{10791}{\cos25^\circ}\approx\boxed{1.2\times10^4\,\mathrm N}.$$

水平分量提供向心力：

$$F=L\sin25^\circ\approx\boxed{5.0\times10^3\,\mathrm N}.$$

使用未取整的数值：

$$v=\sqrt{\frac{Fr}{m}}=\sqrt{rg\tan25^\circ}.$$

$$v\approx\boxed{64\,\mathrm{m\,s^{-1}}}.$$

倾角增大后，$L\cos\theta$ 减小并低于重力，飞机向下加速、开始失去高度。同时 $L\sin\theta$ 增大；在速率相同的瞬间，更大的水平向内合力对应更小的水平转弯半径。

不能说升力增大：题设保持其大小不变。角度改变后也不能继续使用竖直平衡描述运动。

**检查：**升力大于重力，约为 $12\,\mathrm{kN}$ 而非 $1.2\,\mathrm{kN}$，与原题给出的近似值一致。

</details>

### 练习 6：旋转空间站 {#question-6-a-rotating-space-station}

**改编自 OxfordAQA PH03, June 2024, Question 1.**

A person stands against the outer wall inside a rotating space station. The radius of the person's circular path is taken as $150\,\mathrm m$ and the centripetal acceleration is $9.81\,\mathrm{m\,s^{-2}}$. The person's linear momentum is $2500\,\mathrm{kg\,m\,s^{-1}}$. Ignore gravitational forces from other bodies.

1. State which force supplies the centripetal force and explain how the station simulates gravity.
2. Calculate the person's speed and mass.
3. The person releases a ball. Describe and explain its motion relative to an observer outside the station in an inertial frame, before it hits anything.

<details markdown="1">
<summary>提示</summary>

舱壁提供接触力。先用 $a=v^2/r$，再用 $p=mv$。释放后，舱壁还对球施力吗？

</details>

<details markdown="1">
<summary>解答</summary>

舱壁施加指向空间站中心的支持力，提供向心力。人感到舱壁的接触力，就像站在地面时感到地面支持力一样；旋转并未产生引力场。

$$v=\sqrt{ar}=\sqrt{9.81(150)}.$$

$$v\approx38.4\,\mathrm{m\,s^{-1}}.$$

$$m=\frac{p}{v}=\frac{2500}{\sqrt{9.81(150)}}\approx\boxed{65\,\mathrm{kg}}.$$

释放后，在题设模型中球不受合力。由牛顿第一定律，相对外部惯性观察者，球沿释放瞬间的切线以恒定速度直线运动；没有向内合力，它便不会继续做圆周运动。

上述描述适用于外部惯性观察者；随空间站旋转的人看到的相对轨迹可以不同。

</details>

## 速查 {#quick-reference}

| 用途 | 方程与适用条件 |
|---|---|
| 周期与频率 | $f=\dfrac1T$；完整转一周 |
| 角速率 | $\omega=2\pi f=\dfrac{2\pi}{T}$；单位为弧度每秒 |
| 线速率 | $v=r\omega$；半径从转轴量起 |
| 向内加速度 | $a=\dfrac{v^2}{r}=r\omega^2$ |
| 径向受力方程 | $\text{inward resultant}=\dfrac{mv^2}{r}$ |
| 坡顶 | $mg-N=\dfrac{mv^2}{r}$；保持接触要求 $N\geq0$ |
| 凹谷底部 | $N-mg=\dfrac{mv^2}{r}$ |
| 飞机水平转弯 | $L\cos\theta=mg$，$L\sin\theta=\dfrac{mv^2}{r}$ |

继续之前，检查自己能否解释速度为何变化、换算每分钟转数、识别提供向内合力的实际力，并区分坡顶接触上限与绳子绷紧的下限。

[下一课：简谐运动](/zh/alevel/a2-physics/simple-harmonic-motion/) · [课程目录](/zh/alevel/a2-physics/) · [PH03 速查](/zh/alevel/a2-physics/quick-reference/)

<details markdown="1">
<summary>来源与试题表述</summary>

本课依据 [OxfordAQA 物理大纲](https://www.oxfordaqa.com/wp-content/uploads/2022/08/oxfordaqa-a-level-physics-specification.pdf) 3.6.1。$a=v^2/r$ 的推导不在考试要求内；分力和接触问题结合本节与 AS 的力及牛顿定律。

教材参考：Jim Breithaupt，*Oxford International AQA Examinations: International A Level Physics*，第 15 章，印刷页 273–284。短讲解、图示、检查点和图像技能的安排参考教师 AS 讲义。

飞机与空间站练习改编自 OxfordAQA PH03 January 2020 Q3、June 2024 Q1。英文原页说明讲解曾对照官方评分标准；汉化保留其数据和公式，数值由现有物理回归检查复核，不把教材答案表直接当作依据。

</details>

{% include exam_topic_practice.html %}
