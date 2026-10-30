---
title: "向量、拦截与最近距离"
layout: subjects
mathjax: true
grade: as
subject: as-further-mathematics
lang: zh-CN
translation_of: /alevel/as-further-mathematics/relative-motion/
permalink: /zh/alevel/as-further-mathematics/relative-motion/
toc_headings: "#start, #model, #velocity-triangle, #relative-position, #demonstration, #closest-approach, #practice, #retry, #later-review, #next-step, #sources"
study_page: true
reading_layout: true
---

[AS 高数课程](/zh/alevel/as-further-mathematics/)

两条路线相交，就一定会相遇吗？位置图告诉我们物体可以经过哪里；使用同一个时钟，才能判断它们是否同时到达同一位置。本课沿着这个区别，学习怎样选择航向、判断能否拦截，以及在限定观测时间内求最近距离。

依次学习[向量与合速度](#model)、[拦截](#demonstration)和[最近距离](#closest-approach)。做[独立任务](#practice)前先遮住示范。本页示范与练习均为**自拟题（self-written）**，没有官方分值；保留英文题干，中文帮助你重建推理。

## 开始前 {#start}

需要的已有知识是坐标、勾股定理、匀速运动、基本三角和配方。向量记号会在本页建立。若二次式不熟悉，先回看 [AS 代数](/zh/alevel/as-mathematics/algebra/#l02)；确定方向角时，先画直角三角形，再使用反正切。

<section class="lesson-check" markdown="1">

### 先修自检

**Entry check (self-written):** Locate $(3,4)$ and find its distance from the origin. A particle starts at $x=2$ m and moves with velocity $-3$ m s⁻¹. Write its position after $t$ seconds and find its position at $t=2$.

先用坐标和一维运动检查已有知识：位置的正负与距离的大小要分清。

<details markdown="1"><summary>提示</summary>

距离非负。负速度表示位置沿坐标负方向改变；别漏掉初始位置。

</details>

<details markdown="1"><summary>解答与回补</summary>

该点在第一象限，到原点距离为 $\sqrt{3^2+4^2}=5$。粒子的位置是 $x=2-3t$，因此 $x(2)=-4$ m。负号表示位置，不表示距离为负。若漏了初始位置，先分别画出起点和六米的位移；遮住核对内容，重新建立这两个答案，再往下学习。

</details>

</section>

## 1. 先描述运动，再合成速度 {#model}

把每个物体视为在固定地面参考系中做匀速运动的质点。先选共同原点和时钟，说明正方向及模型有效时间。除非另有说明，本页距离用米、时间用秒；涉及航行时，取向东为水平正方向、向北为竖直正方向。

单位向量 $\mathbf i,\mathbf j$ 分别沿两条坐标轴的正方向，长度为一。同一个位置可以写成分量形式或列向量（column vector）：

$$\mathbf r=x\mathbf i+y\mathbf j=\begin{pmatrix}x\\y\end{pmatrix},
\qquad \lvert\mathbf r\rvert=\sqrt{x^2+y^2}.$$

位置从原点量起。位移（displacement）表示位置的改变，应以终点的位置向量减去起点的位置向量：

$$\overrightarrow{AB}=\mathbf r_B-\mathbf r_A.$$

匀速运动在相同时间内发生相同的向量位移，因此

$$\mathbf r(t)=\mathbf r(0)+\mathbf vt.$$

两个分量使用同一段经过时间。速度（velocity）包含方向；速率（speed）是速度的非负大小。速度某个分量为负，并不妨碍速率为正。

### 怎样读速度三角形？ {#velocity-triangle}

在同一段时间内，游泳者相对水的位移，加上水相对地面的位移，才是游泳者相对地面的位移。把这个位移关系除以时间，得到

$$\begin{aligned}
\mathbf v_{\rm ground}
&=\mathbf v_{\rm relative\ medium}\\
&\quad+\mathbf v_{\rm medium}.
\end{aligned}$$

画图时让两个向量首尾相接。合速度（resultant velocity）从第一个向量的尾端指向最后一个向量的箭头端，不是连接两个箭头端。速度图的单位是速度单位，它不是河流的位置地图。

<section class="worked-example" markdown="1">

### 从速度三角形读出对地速率

**Demonstration (self-written):** A current has velocity $4\mathbf i$ m s⁻¹. A swimmer moves at $3\mathbf j$ m s⁻¹ relative to the water. Find the swimmer's ground velocity, speed and direction.

先向东画四个单位的水流速度，再从其箭头端向北画三个单位的游泳速度；合速度指向东北。两项贡献互相垂直，因此用勾股定理，不能直接把两个长度相加：

$$\begin{aligned}
\mathbf v_{\rm ground}&=4\mathbf i+3\mathbf j\ \mathrm{m\,s^{-1}},\\
\lvert\mathbf v_{\rm ground}\rvert&=\sqrt{4^2+3^2}=5\ \mathrm{m\,s^{-1}}.
\end{aligned}$$

方向角为东偏北 $\tan^{-1}(3/4)\approx36.9^\circ$。两个分量都为正，与东北方向一致。一秒后对地位移是向东四米、向北三米，这也检查了速度的解释是否正确。

</section>

![上图：带箭头的速度三角形，先向东四个单位，再向北三个单位，合速度向东北、大小为五。下图：相对位置从 t=0 的 (6,8) 向左运动，经过 t=3 的垂足 (0,8)，到达 t=5 的 (-4,8)；位置坐标轴以米为单位且使用相同比例。](/alevel/as-further-mathematics/diagrams/relative.svg){: width="560" height="690" }

上半图对应刚才的速度相加；下半图将在[最近距离](#closest-approach)中使用，它表示位置，箭头说明相对点随时间沿允许路径运动的方向。

### 先固定“相对谁”，再决定相减顺序 {#relative-position}

描述 B 相对 A 的运动时，可以想象原点跟着 A 平移，坐标轴方向保持不变。必须用**同一时刻** B 的位置减去 A 的位置：

$$\begin{aligned}
\mathbf r_{BA}(t)&=\mathbf r_B(t)-\mathbf r_A(t)\\
&=\mathbf r_{BA}(0)+\mathbf v_{BA}t,\\
\mathbf v_{BA}&=\mathbf v_B-\mathbf v_A.
\end{aligned}$$

碰撞要求相对位置为零向量，即两个分量在同一个合法时刻同时为零。若整体交换相减顺序，初始相对位移和相对速度都会反向，距离不变；若只改其中一个的顺序，就改变了运动模型。仅有路线相交，还没有检查时间。

<section class="lesson-check" markdown="1">

### 建立并检查两个分量

**Scaffold (self-written):** A starts at $(0,0)$ m with velocity $(4,3)$ m s⁻¹; B starts at $(12,0)$ m with velocity $(1,3)$ m s⁻¹. Write relative position B−A and test collision.

先写出 B 相对 A 的位置，再判断两者能否在同一时刻相遇。

<details markdown="1"><summary>提示</summary>

先分别写出两粒子的位置。初始位置和速度都按相同顺序相减；把候选时间代回两个原位置式核对。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$\begin{aligned}
\mathbf r_A(t)&=(4t,3t),\\
\mathbf r_B(t)&=(12+t,3t),\\
\mathbf r_{BA}(t)&=(12-3t,0).
\end{aligned}$$

竖直间距一直为零；水平间距在 $t=4\ \mathrm s$ 时为零，此时 $\mathbf r_A=\mathbf r_B=(16,12)\ \mathrm m$。只要给定速度保持到那时，就会在未来碰撞。若把两个速度相加，先回看[观察者与相减定义](#relative-position)。

</details>

</section>

## 2. 选择真正能够拦截的航向 {#demonstration}

速率已知、固定航向未知时，两个速度分量虽然未知，它们的平方和必须等于给定速率的平方。先要求两者位置相同，再使用速率条件，并筛选允许的时间。

<section class="worked-example" markdown="1">

### 成功拦截，以及速率的可行边界

**Demonstration (self-written):** At $t=0$ s, target B is at $(6,0)$ m with velocity $(0,1)$ m s⁻¹. A leaves the origin at a constant unknown direction and speed 2 m s⁻¹. Find a heading to intercept B for $t>0$.

取水平向右、竖直向上为正。B 会继续向上运动，若只瞄准 B 的初始位置就会错过。经过时间 $t$ 相遇时，A 必须到达 B 的新位置：

$$\begin{aligned}
\mathbf r_B(t)&=(6,t),\\
\mathbf r_A(t)&=\mathbf v_A t=(6,t),\\
\mathbf v_A&=(6/t,1).
\end{aligned}$$

因为 $t>0$，所以可以除以时间。A 的竖直速度分量必须与 B 相同，水平分量则用来缩短最初六米的间距。现在使用 A 的速率条件：

$$\begin{aligned}
36/t^2+1&=4,\\
t^2&=12,\\
t&=2\sqrt3\ \mathrm s,\\
\mathbf v_A&=(\sqrt3,1)\ \mathrm{m\,s^{-1}}.
\end{aligned}$$

代数上的负时间不属于模型。两个分量均为正，比值为 $1/\sqrt3$，所以航向是水平正方向上方 $\pi/6$。分别检查速率与相遇位置：

$$\begin{aligned}
\lvert\mathbf v_A\rvert&=\sqrt{3+1}=2\ \mathrm{m\,s^{-1}},\\
\mathbf r_A(2\sqrt3)&=(6,2\sqrt3)\ \mathrm m,\\
\mathbf r_B(2\sqrt3)&=(6,2\sqrt3)\ \mathrm m.
\end{aligned}$$

保持**相同初始安排**，若把 A 的速率改为非负数 $s$，相遇条件会要求

$$\frac{36}{t^2}=s^2-1.$$

对所有有限的 $t>0$，左边都为正。因此本情境中恰好在 $s>1$ 时可以拦截；此时 $t=6/\sqrt{s^2-1}$ 给出正时间，也能构造满足条件的速度。若 $s=1$，竖直分量一旦匹配 B，就没有水平分量来缩短间距；速率更小时，连所需的竖直分量都无法达到。这个判据依赖这里的几何安排，不能直接套到所有追及问题。

</section>

## 3. 最近点必须在实际运动范围内 {#closest-approach}

相对点以恒速度沿直线运动，它到相对原点的距离就是两物体的间距。在整条直线上，原点到直线的垂足最近：由勾股定理可知，离开垂足后，距离平方会多出一个非负的平方项。但是观测到的可能只是一条线段或未来射线；若运动到不了垂足，就应取允许范围内最近的端点。

<section class="worked-example" markdown="1">

### 把垂线与二次式联系起来

**Demonstration (self-written):** Two particles have relative displacement $(6-2t,8)$ m for $0\le t\le5$ s. Find when they are closest and their separation then. Explain geometrically, and check algebraically.

在下半图中，相对点从 $(6,8)$ 出发，以每秒两米向左运动，高度始终是八米。原点到这条直线的垂足为 $(0,8)$，到达时间 $t=3$ s 在允许区间内，因此垂线长度八米就是最近距离。

距离非负，所以使距离平方最小，也会使距离最小：

$$\begin{aligned}
d^2&=(6-2t)^2+64\\
&=4(t-3)^2+64,\\
d_{\min}&=8\ \mathrm m\quad\text{at }t=3\ \mathrm s.
\end{aligned}$$

两个端点的距离是 $d(0)=10$ m 和 $d(5)=\sqrt{80}$ m，都大于八米。若观测到两秒就结束，相对点只能到达 $(2,8)$，垂足在线段以外。此时最近点是最终端点，对应 $t=2$ s，距离为 $d=\sqrt{68}=2\sqrt{17}$ m。整条直线没有变，改变的是允许发生的那一段运动。

</section>

对任意恒定相对速度，可把相对位置写成 $(a+ut,b+vt)$；其中 $a,b$ 为初始位移分量，$u,v$ 为相对速度分量。展开得到

$$\begin{aligned}
d^2(t)&=(a+ut)^2+(b+vt)^2\\
&=(u^2+v^2)t^2+2(au+bv)t\\
&\quad+a^2+b^2.
\end{aligned}$$

当 $u^2+v^2>0$ 时，配方可确定整条直线上的最近时刻：

$$\begin{aligned}
t_*&=-\frac{au+bv}{u^2+v^2},\\
d^2(t)&=(u^2+v^2)(t-t_*)^2+d^2(t_*).
\end{aligned}$$

这说明了整个时间域内的最小值，而不是只比较几个试值。对闭区间，若 $t_*$ 在区间内就使用它；若它在区间开始之前，就取起点；若在区间结束之后，就取终点。对 $t\ge0$，负的 $t_*$ 意味着最小值在零时刻取得。几何上，这正对应垂足或端点的选择。若 $u=v=0$，距离一直为 $\sqrt{a^2+b^2}$，所有允许时刻都给最小值，不能再除以 $u^2+v^2$。

## 独立检查 {#practice}

先说明你选的原点、坐标方向与时钟，在每幅图中标注单位。题目标题不提示方法；展开提示或解答前，先写出自己的推理，并记录使用过的帮助。

<section class="lesson-check" markdown="1">

### 题目 1 {#practice-1}

**Independent task (self-written):** A river flows east at 4 m s⁻¹. A boat has speed 5 m s⁻¹ relative to the water and must travel due north relative to the ground. Draw and label a head-to-tail velocity triangle. Find its velocity relative to the water, its ground speed and its heading west of north. Explain why pointing the boat due north would fail.

画出并标注三个速度之间的关系，再求所需航向、对地速率，并解释船头朝北为何未必正向北运动。

<details markdown="1"><summary>提示</summary>

对地速度正向北，意味着向东分量为零。相对水的速率，限制的是相对水速度向量的长度，不是对地速度向量的长度。

</details>

<details markdown="1"><summary>解答与核对</summary>

取向东、向北为正。速度三角形的水平贡献必须相互抵消：

$$\begin{aligned}
\mathbf v_{\rm water}&=(-4,3)\ \mathrm{m\,s^{-1}},\\
\mathbf v_{\rm ground}&=(-4,3)+(4,0)\\
&=(0,3)\ \mathrm{m\,s^{-1}}.
\end{aligned}$$

先向东画水流向量，再从箭头端向西、向北画相对水速度，合速度应竖直向上。竖直分量取正，才是向北而非向南。相对水速率为 $\sqrt{(-4)^2+3^2}=5$ m s⁻¹；对地速率为 3 m s⁻¹。航向为北偏西 $\tan^{-1}(4/3)\approx53.1^\circ$。若船头正向北，对地速度会是 $(4,5)$ m s⁻¹，仍会向东漂移。若你把对地速率写成五，回看[给定长度究竟属于哪个向量](#velocity-triangle)，再做[重试 1](#retry-1)。

</details>

</section>

<section class="lesson-check" markdown="1">

### 题目 2 {#practice-2}

**Independent task (self-written):** At time zero, B is 12 m east of A and moves north at 3 m s⁻¹. A starts then with constant speed 5 m s⁻¹ and an unknown fixed heading. Set up a position model and find a heading and time for interception. Would any fixed heading succeed if A's speed were only 3 m s⁻¹? Justify your answer for all positive times.

根据初始位置和运动方向建立模型，求相遇的航向与时间；然后论证速率降低后，对所有正时间是否仍然可行。

<details markdown="1"><summary>提示</summary>

先用可能的相遇时间表示所需速度；位置匹配之后，再使用速度大小条件。

</details>

<details markdown="1"><summary>解答与核对</summary>

以 A 的初始位置为原点，向东、向北为正。对 $t>0$，

$$\begin{aligned}
\mathbf r_B(t)&=(12,3t),\\
\mathbf v_A t&=(12,3t),\\
\mathbf v_A&=(12/t,3),\\
144/t^2+9&=25.
\end{aligned}$$

得到 $t=3$ s、$\mathbf v_A=(4,3)$ m s⁻¹，航向为东偏北 $\tan^{-1}(3/4)\approx36.9^\circ$。两者位置均为 $(12,9)$ m，速率确为五。若速率只有三，条件变为 $144/t^2=0$，对任何有限正时间都不成立；匹配竖直速度后，已经没有分量去缩短向东的间距。若用了负时间或瞄准旧位置，回到[相遇方程](#demonstration)重新建模，再做[重试 2](#retry-2)。

</details>

</section>

<section class="lesson-check" markdown="1">

### 题目 3 {#practice-3}

**Independent task (self-written):** A starts at $(0,0)$ m with velocity $(2,0)$ m s⁻¹; B starts at $(6,8)$ m with velocity $(0,-2)$ m s⁻¹. Do they collide for $t\ge0$? Find their closest distance for $t\ge0$, and then for $0\le t\le2$ s. Explain the changed answer geometrically or algebraically.

先判断是否同刻相遇，再比较未来运动与短观测区间的最近距离，说明时间范围改变了什么。

另画出相对运动路径，标明运动方向、初始点、垂足，以及短时间区间的终点。借助图说明：为什么实际路线相交仍不保证碰撞？

<details markdown="1"><summary>提示</summary>

碰撞要求两个相对分量在同一时刻为零；距离最小化必须服从给定时间区间。相对图表示间距向量，不是任一物体的对地路线。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$\begin{aligned}
\mathbf r_{BA}&=(6-2t,8-2t),\\
6-2t=0&\Rightarrow t=3,\\
8-2t=0&\Rightarrow t=4.
\end{aligned}$$

两个分量在不同时间才为零，所以路线虽相交，却不碰撞。相对图中的路径位于直线 $y=x+2$ 上，从 $(6,8)$ 向西南运动。原点到直线的垂足为 $(-1,1)$，在 $t=3.5$ s 到达；该点不是原点。

$$\begin{aligned}
d^2&=(6-2t)^2+(8-2t)^2\\
&=8(t-3.5)^2+2.
\end{aligned}$$

对未来射线，垂足可以到达；对短区间，垂足则在终点 $(2,4)$ 之后：

$$\begin{aligned}
t\ge0:&\quad t=3.5\ \mathrm s,\quad d_{\min}=\sqrt2\ \mathrm m,\\
0\le t\le2:&\quad t=2\ \mathrm s,\quad d_{\min}=2\sqrt5\ \mathrm m.
\end{aligned}$$

短区间内距离一直下降，所以最终端点最近。若两个碰撞时间不同却仍判为碰撞，回看[同一时刻条件](#relative-position)；若短区间仍用了整条直线的垂足，回看[实际观测线段](#closest-approach)，再做[重试 3](#retry-3)。

</details>

</section>

## 诊断与再尝试 {#retry}

按错误选择：混淆相对水速与对地速率，做重试 1；航向或相遇时间不合法，做重试 2；最近点不在允许时间内，做重试 3；求最近时刻时出现除零，做恒定间距检查。先收起旧解答，再重新作答。

<section class="lesson-check" markdown="1">

### 重试 1 {#retry-1}

**Retry (self-written):** A current flows east at 3 m s⁻¹. A swimmer has speed 5 m s⁻¹ relative to the water and wants to move due north over the ground. Draw a velocity triangle and find the required water-relative velocity, heading and ground speed.

这次改变水流大小；重新作速度三角形，不沿用上一题的角度。

<details markdown="1"><summary>提示</summary>

先抵消向东分量，再根据目标运动方向选择另一分量的正负号。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$\begin{aligned}
\mathbf v_{\rm water}&=(-3,4)\ \mathrm{m\,s^{-1}},\\
\mathbf v_{\rm ground}&=(-3,4)+(3,0)\\
&=(0,4)\ \mathrm{m\,s^{-1}}.
\end{aligned}$$

航向为北偏西 $\tan^{-1}(3/4)\approx36.9^\circ$，对地速率为 4 m s⁻¹。首尾相接后，终点必须位于起点正北方；相对水速度箭头的长度为五。竖直分量若取负，就会朝错误方向运动。若合速度指向东，回看[速度合成](#velocity-triangle)。

</details>

</section>

<section class="lesson-check" markdown="1">

### 重试 2 {#retry-2}

**Retry (self-written):** B starts 8 m north of A and moves east at 1 m s⁻¹. A starts at the same time with speed $\sqrt5$ m s⁻¹ in an unknown fixed direction. Find a velocity and positive time for interception, and check both positions. Explain whether speed 1 m s⁻¹ could succeed.

这次初始间距与目标运动方向交换了角色；重新建模，并检查两个位置是否同时相同。

<details markdown="1"><summary>提示</summary>

这次初始间距沿竖直方向。使用速率条件前，先辨明所需的向东与向北分量。

</details>

<details markdown="1"><summary>解答与核对</summary>

以 A 的初始位置为原点，向东、向北为正，

$$\begin{aligned}
\mathbf r_B(t)&=(t,8),\\
\mathbf v_A&=(1,8/t),\\
1+64/t^2&=5,\\
t&=4\ \mathrm s,\\
\mathbf v_A&=(1,2)\ \mathrm{m\,s^{-1}}.
\end{aligned}$$

两个位置都是 $(4,8)$ m，速率为 $\sqrt{1+4}=\sqrt5$ m s⁻¹。速率为一时，会要求 $64/t^2=0$，有限正时间不可能满足。若把两个分量互换，回看[位置方程](#demonstration)：第一分量始终表示水平方向。

</details>

</section>

<section class="lesson-check" markdown="1">

### 重试 3 {#retry-3}

**Retry (self-written):** Two particles have relative position $(4+2t,3)$ m for $t\ge0$. Sketch the allowed relative path and find the least separation. Explain geometrically why the whole-line perpendicular foot does or does not give an allowed answer.

画出真正允许的运动部分，再判断垂足是否属于这段运动。

<details markdown="1"><summary>提示</summary>

标明初始点与射线的运动方向；再检查到达竖轴所需时间的正负。

</details>

<details markdown="1"><summary>解答与核对</summary>

射线从 $(4,3)$ 开始向右运动。整条直线上的垂足 $(0,3)$ 需要 $t=-2$ s 才能到达，不属于未来的运动范围。

$$d^2=4(t+2)^2+9.$$

对 $t\ge0$，平方项从零时刻起不断增大，故最小值在 $t=0$ 取得，距离为 $d=5$ m。三米是延长直线上的最近距离，不是允许射线上的最近距离。若图把实际运动向负时间延伸，回看[端点规则](#closest-approach)。

</details>

</section>

<section class="lesson-check" markdown="1">

### 恒定间距检查 {#retry-zero}

**Retry (self-written):** A and B have equal velocity $(2,-1)$ m s⁻¹ and initial separation vector $(3,4)$ m. Find their relative velocity and separation for all valid times.

从相同速度与给定初始间距出发，说明整个有效时间域内间距怎样变化。

<details markdown="1"><summary>提示</summary>

先相减速度，再决定能否用求最近时刻的公式。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$\begin{aligned}
\mathbf v_{BA}&=\mathbf0,\\
\mathbf r_{BA}&=(3,4)\ \mathrm m,\\
d&=5\ \mathrm m.
\end{aligned}$$

相对点保持不动，所以每个允许时刻的间距都相同。速度相同不代表碰撞：原来非零的间距会一直保持。若计算中出现除零，回看[相对速度为零的情形](#closest-approach)。

</details>

</section>

## 下一课后的回顾 {#later-review}

学过[量纲](/zh/alevel/as-further-mathematics/dimensions/)后，收起本页示范再回来。自行选择方法，并记录是否使用提示。

<section class="lesson-check" markdown="1">

### 混合回顾

**Later review (self-written):** A starts at $(0,0)$ m with velocity $(1,2)$ m s⁻¹. B starts at $(8,k)$ m with velocity $(-1,1)$ m s⁻¹. Both motions continue for $0\le t\le6$ s. Find the value of $k$ for which they meet and check the meeting position. Now set $k=1$. Find their least separation in this interval and then if observation ends at $t=2$ s. Sketch the relative path to justify the change.

先求能相遇的初始位置参数；再改变初始条件，独立处理两个观测区间，并用图解释结果。

<details markdown="1"><summary>提示</summary>

使用同一个时钟。在你选择的表示中，先判断“相遇”意味着什么；初始条件改变后，再重新考虑运动。

</details>

<details markdown="1"><summary>解答与核对</summary>

沿用题设坐标轴，

$$\begin{aligned}
\mathbf r_A(t)&=(t,2t),\\
\mathbf r_B(t)&=(8-t,k+t),\\
\mathbf r_{BA}(t)&=(8-2t,k-t).
\end{aligned}$$

第一相对分量给出 $t=4$ s，第二分量随即要求 $k=4$；两个原位置式都得到 $(4,8)$ m，时间也在允许范围内。

改变初始条件后，

$$\begin{aligned}
\mathbf r_{BA}(t)&=(8-2t,1-t),\\
d^2&=(8-2t)^2+(1-t)^2\\
&=5t^2-34t+65\\
&=5\left(t-\frac{17}5\right)^2+\frac{36}5.
\end{aligned}$$

六秒区间内，最小值在 $t=17/5$ s 取得，距离为 $d_{\min}=6/\sqrt5$ m。相对点从 $(8,1)$ 沿 $y=x/2-3$ 向西南运动。垂足为 $(6/5,-12/5)$：它与原点连线的斜率是 $-2$，与路径斜率 $1/2$ 互相垂直。若观测到两秒结束，相对点停在 $(4,-1)$，尚未到垂足，因此最小值在 $t=2$ s，距离为 $\sqrt{17}$ m。

若相遇参数错误，回到[同一时刻建模](#relative-position)并做[重试 2](#retry-2)；若最近点超出时间区间，回到[几何范围限制](#closest-approach)并做[重试 3](#retry-3)。条件改变后必须重建初值，不能继续沿用旧碰撞模型。

</details>

</section>

## 下一步 {#next-step}

能在速度三角形中标清参考对象、论证拦截可行或不可能，并用相对路径图及代数共同核对合法最近点，就可以继续。若某项未完成，先做对应重试，再进入[量纲](/zh/alevel/as-further-mathematics/dimensions/)。把[混合回顾](#later-review)留到那一课后；今天一次做对，不代表稍后仍能独立提取。

## 来源与范围 {#sources}

本课对应 **9665 v5.2** 的 **FM1.1**：二维匀速运动。所有示范、学生题与核对均为**自拟题（self-written）**；以下官方题用于参考建模证据，不为本页任务提供官方分值。

<details markdown="1"><summary>官方范围与配套试题</summary>

- [OxfordAQA 9665 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf)，FM1.1，PDF p.14／印刷 p.15；本轮从[当前 9665 资格页](https://www.oxfordaqa.com/qualification/international-as-and-a-level-further-mathematics-9665/)进入。范围包括速度三角形、拦截、最近距离与几何推理，不把本课扩展成二维碰撞课程。
- FM02 June 2024 **Q9(a)(b)**；QP p.18，MS p.16。[原试卷](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-question-paper.pdf) · [Version 1.0 Final 评分标准](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-mark-scheme.pdf)。本轮读取了这组配套页面：按说明的顺序相减速度，再用同一个时间满足两个位移分量。考季名为 June 2024，QP 封面考试日是 16 May 2024。

</details>

[上一课](/zh/alevel/as-further-mathematics/linear-combinations/) · [课程路线](/zh/alevel/as-further-mathematics/#learning-route) · [下一课](/zh/alevel/as-further-mathematics/dimensions/)

{% include exam_topic_practice.html %}
