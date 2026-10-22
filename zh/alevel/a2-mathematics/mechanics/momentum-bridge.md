---
title: AS 动量桥接：方向与能量
layout: subjects
mathjax: true
grade: a2
subject: m2
lang: zh-CN
translation_of: /alevel/a2-mathematics/mechanics/momentum-bridge/
permalink: /zh/alevel/a2-mathematics/mechanics/momentum-bridge/
toc_headings: h2
study_page: true
---

[A2 力学](/zh/alevel/a2-mathematics/mechanics/) · MA05 所需的 MA02 M1.4 先修

碰撞计算前，你能判断什么量守恒吗？在学习[功与能](/zh/alevel/a2-mathematics/mechanics/work-and-energy/)前，先用这段桥接复习 AS 的动量与冲量，再连接 A2 的能量分析。这里不需要恢复系数。

**开始前：**掌握一维带符号速度、牛顿第二定律、三角形面积和动能。在同一惯性参考系中分析。下列自拟题不设官方分值；能用精确值时保留精确值，否则保留三位有效数字。正式考试题按原卷和题目的精度要求作答。

## 先修诊断 {#check-your-starting-point}

**Self-written diagnostic.** (a) A particle of mass $2\,\mathrm{kg}$ has velocity $-3\,\mathrm{m\,s^{-1}}$. State its momentum, including direction. (b) Does constant nonzero velocity imply zero momentum? (c) Two particles have equal nonzero momentum magnitudes but different masses. Must their kinetic energies be equal?

<details markdown="1">
<summary>诊断反馈</summary>

(a) $p=-6\,\mathrm{kg\,m\,s^{-1}}$，沿负方向。(b) 不代表动量为零，而是动量保持不变。(c) 不一定。将速率关系代入动能式，得到

$$E_k=\frac{p^2}{2m}.$$

在相同的非零动量大小下，质量较小者动能较大。如果 (a) 使用了速率而丢掉方向，先画正方向箭头再试；如果 (b) 答“是”，请区分一个量与它的变化率。

</details>

## 从力到冲量 {#from-force-to-impulse}

一维动量（momentum）是带符号的量：

$$p=mv,\qquad [p]=\mathrm{kg\,m\,s^{-1}}.$$

质量恒定时，牛顿第二定律把合力与动量变化联系起来。一个时间段内的合**冲量**（impulse）为

$$J=\Delta p=m(v-u)=\int_{t_0}^{t_1}F(t)\,dt.$$

在力—时间图上，冲量是带符号面积：时间轴下方贡献负冲量。恒力的冲量等于力乘作用时间。牛顿秒与动量的单位等价。冲量不是功：功取决于位移，不是经过的时间。

### 例题 — 速度反向 {#example--a-velocity-reversal}

**Question:** A particle of mass $2\,\mathrm{kg}$ has initial velocity $-1\,\mathrm{m\,s^{-1}}$. A resultant force $F(t)=6t\,\mathrm N$ acts in the positive direction for $0\leq t\leq2\,\mathrm s$. Find its velocity at the end of the interval.

力—时间图从零直线上升至十二牛顿，三角形面积为十二牛顿秒。用积分得到相同的带符号冲量：

$$J=\int_0^2 6t\,dt=[3t^2]_0^2=12\,\mathrm{N\,s}.$$

保留初速度的符号：

$$12=2(v-(-1))\quad\Rightarrow\quad v=5\,\mathrm{m\,s^{-1}}.$$

**检查：**动量从负二变成正十千克米每秒，变化为正十二。把初速度换成速率会得到错误末速度。质点先减速、停止，再反向；力为正不要求初速度也为正。

## 先选系统，再使用动量守恒 {#choose-the-system-before-conserving-momentum}

以两个质点为系统，它们之间的碰撞力属于内力；这一对力的冲量在系统总和中抵消。只有碰撞期间的**合外冲量为零或可忽略**，总动量才守恒：

$$m_Au_A+m_Bu_B=m_Av_A+m_Bv_B.$$

两个质点必须使用同一个正方向。光滑水平面去除了水平摩擦，但墙仍可对质点施加水平外冲量。质点撞墙反弹时，不能把单个质点的动量当作守恒量。

动能（kinetic energy）是标量：

$$E_{\mathrm{before}}=\frac12m_Au_A^2+\frac12m_Bu_B^2,\qquad E_{\mathrm{after}}=\frac12m_Av_A^2+\frac12m_Bv_B^2.$$

动量守恒本身不保证这两者相等。动能减少量等于初动能减末动能。在没有储能释放的被动碰撞模型中，减少量不能为负。其他碰撞模型若能释放能量，必须说明来源。

### 例题 — 大小可能隐藏两种方向 {#example--a-magnitude-can-hide-two-directions}

**Question:** Particles $A$ and $B$ of masses $2\,\mathrm{kg}$ and $3\,\mathrm{kg}$ move on a smooth horizontal line. Initially $A$, to the left of $B$, moves right at $5\,\mathrm{m\,s^{-1}}$ and $B$ is at rest. After their collision the magnitude of the momentum of $A$ is $2\,\mathrm{kg\,m\,s^{-1}}$. Neglect external horizontal impulse. Find the possible velocities and decreases in total kinetic energy. Check that the particles can separate.

取向右为正。初始总动量为十，初动能为二十五焦耳。题目给的是末动量的**大小**，所以

$$2v_A=\pm2\quad\Rightarrow\quad v_A=1\text{ or }-1\,\mathrm{m\,s^{-1}}.$$

对每个分支分别使用总动量：

$$10=2v_A+3v_B.$$

| 分支 | A 的末速度 | B 的末速度 | 末动能 | 动能减少量 |
| --- | --- | --- | --- | --- |
| A 继续向右 | $1$ | $\frac83$ | $\frac{35}{3}\,\mathrm J$ | $\frac{40}{3}\,\mathrm J$ |
| A 反向 | $-1$ | $4$ | $25\,\mathrm J$ | $0\,\mathrm J$ |

表中速度单位为米每秒，向右为正。例如第一个分支：

$$E_{\mathrm{after}}=\frac12(2)(1)^2+\frac12(3)\left(\frac83\right)^2=\frac{35}{3}\,\mathrm J.$$

两个分支均满足动量守恒、动能不增加；右边质点的速度也都大于左边质点，碰后间距增大。因此已知条件允许两种分支，不能直接假定 A 继续向右。如果再给出“动能没有损失”，才能选定第二个分支。

## 独立练习 {#independent-practice}

### Q1 — 读取力—时间记录 {#q1--read-a-forcetime-record}

**Self-written task.** A trolley of mass $0.5\,\mathrm{kg}$ has initial velocity $-4\,\mathrm{m\,s^{-1}}$. Its resultant force varies linearly from zero at time zero to $3\,\mathrm N$ at $t=1\,\mathrm s$, then linearly to zero at $t=2\,\mathrm s$. The force is nonnegative throughout. Find its final velocity and the change in kinetic energy. Explain why the sign of impulse alone does not determine the sign of the energy change.

![构造的力—时间图：依次连接零秒零牛顿、一秒三牛顿、两秒零牛顿，各轴标有量与单位](/assets/img/a2-math-mech/momentum-force-time.svg)

<details markdown="1">
<summary>提示</summary>

用带符号面积求冲量，先求末速度，再平方计算动能。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$J=\frac12(2)(3)=3\,\mathrm{N\,s},\qquad 3=0.5(v+4),\qquad v=2\,\mathrm{m\,s^{-1}}.$$

$$\Delta E_k=\frac12(0.5)(2^2-(-4)^2)=-3\,\mathrm J.$$

小车反向后，末速率比初速率小。冲量描述带符号的动量变化，不是转移的能量。速度为负时正向力做负功，反向后做正功。如果把冲量当成功而算出正能量变化，先检查单位与图像横轴的变量。

</details>

### Q2 — 检验一个碰撞方案 {#q2--test-a-proposed-collision}

**Self-written task.** Two particles each have mass $1\,\mathrm{kg}$. Initially A is to the left of B, moving right at $3\,\mathrm{m\,s^{-1}}$, and B is at rest. They collide on a smooth horizontal line with negligible external impulse and no release of stored energy. The final momentum magnitude of A is $1\,\mathrm{kg\,m\,s^{-1}}$. Find all algebraic velocity branches and decide which fit this model. State the kinetic-energy decrease for every admissible branch. No method is specified.

<details markdown="1">
<summary>提示</summary>

保留给定大小的两个符号，分别检查守恒、分离和能量限制。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$v_A=\pm1,\qquad v_A+v_B=3.$$

两分支为 $(v_A,v_B)=(1,2)$ 和 $(-1,4)$，速度单位为米每秒。初动能为 $4.5\,\mathrm J$，两种末动能分别为 $2.5\,\mathrm J$ 和 $8.5\,\mathrm J$。两组速度都允许分离，但第二组动能增加，违反题目给定的被动模型。因此只有第一组可行，动能减少 $2\,\mathrm J$。

**反馈：**这里动量守恒是必要条件，却不是唯一的模型检查。不能只因速度为负就删去一个分支，应检查实际条件。

</details>

### 再尝试 — 改变系统边界 {#retry--change-the-system-boundary}

**Self-written task.** A particle of mass $0.5\,\mathrm{kg}$ approaches a fixed wall with velocity $3\,\mathrm{m\,s^{-1}}$ and rebounds with velocity $-2\,\mathrm{m\,s^{-1}}$. A student says its momentum is conserved because the floor is smooth. Assess the statement and find the impulse exerted by the wall and the decrease in kinetic energy. Neglect other impulses during impact.

<details markdown="1">
<summary>再尝试核对</summary>

墙在单质点系统之外，对它提供外冲量：

$$J=0.5(-2-3)=-2.5\,\mathrm{N\,s}.$$

冲量方向远离墙。动能减少量为

$$\frac12(0.5)(3^2-(-2)^2)=1.25\,\mathrm J.$$

地面光滑不能去掉墙的力。先选系统，再辨认外冲量。

</details>

## 真题连接与下一步 {#examination-connection-and-next-step}

评分参照为 **OxfordAQA 9660/MA05，January 2025，Q8**，已配合该卷最终评分标准阅读：[试卷](/assets/pdf/fx-cg50/references/oxfordaqa-ma05-2025-january-question-paper.pdf) · [评分标准](/assets/pdf/fx-cg50/references/oxfordaqa-ma05-2025-january-mark-scheme.pdf)。它连接 AS 动量、方向分支和能量。本页题目均为自拟，没有转载成官方题或赋予官方分值。

范围：[9660 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf)，M1.4、M2.6 及 AS 先修。January 2025 卷默认计算器最终答案保留两位有效数字，题内要求可覆盖；这不替代本页开头为自拟题声明的精度约定。

继续学习[功与能](/zh/alevel/a2-mathematics/mechanics/work-and-energy/)，或返回 [AS 数学](/zh/alevel/as-mathematics/)。前进前请用英文补全：**“Momentum is conserved because …; kinetic energy …; the negative sign means …”**，理由须来自所选系统与模型。
