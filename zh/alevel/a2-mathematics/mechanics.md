---
title: A2 力学
layout: subjects
mathjax: true
grade: a2
subject: m2
lang: zh-CN
translation_of: /alevel/a2-mathematics/mechanics/
permalink: /zh/alevel/a2-mathematics/mechanics/
toc_headings: h2
study_page: true
reading_layout: true
---

力学研究两件常见的事：物体为什么保持平衡，又为什么改变运动？这套 MA05 课程从“先看哪个物体、有哪些力”开始，再一步步连接图、方向和方程。

**第一次学：**从[数学建模](mathematical-modelling/)开始，按下面的顺序走。已有基础时，可以直接进入相应主题的练习，再按错误回看讲解。

**学完一段：**做[综合题](#mixed-problems)；完成全单元后，隔开一段学习再做[稍后回顾](#later-review)。每题先自己作答，再按需要打开提示和解答。中文课保留英文题干。

**只想查公式：**使用[中文速查](quick-reference/)，查完可返回对应学习页。

<span id="study-a-topic"></span>

## 建模与运动学 {#modelling-and-kinematics}

先说明模型保留和省略了什么，再用位置随时间的变化描述运动。

1. <span id="m21-mathematical-modelling"></span><span id="mathematical-modelling"></span>[数学建模](/zh/alevel/a2-mathematics/mechanics/mathematical-modelling/)：假设、分体受力图与模型限制。
2. <span id="m22-kinematics"></span><span id="vectors-and-kinematics"></span>[向量与运动学](/zh/alevel/a2-mathematics/mechanics/vectors-and-kinematics/)：位置、速度、加速度和路径。

## 力与平衡 {#forces-and-equilibrium}

先掌握力的分解，再学习力矩和重心。

1. <span id="m23-statics-and-forces"></span><span id="forces-equilibrium-and-friction"></span>[力、平衡与摩擦](/zh/alevel/a2-mathematics/mechanics/forces-equilibrium-and-friction/)：合力、平衡、极限摩擦及独立纠错。
2. <span id="moments-and-rigid-objects-in-equilibrium"></span>[力矩与刚体平衡](/zh/alevel/a2-mathematics/mechanics/moments-and-rigid-objects/)：梁、倾倒、梯子与铰接杆。
3. <span id="centres-of-mass"></span>[重心](/zh/alevel/a2-mathematics/mechanics/centres-of-mass/)：质点系、组合体与悬挂。

## 运动与能量 {#motion-and-energy}

用力方程研究加速度，用能量关系研究速率和距离。进入碰撞能量题前，先做[AS 动量诊断与桥接](/zh/alevel/a2-mathematics/mechanics/momentum-bridge/)，检查方向、系统外冲量及动能变化。

1. <span id="m24-newtons-laws-of-motion"></span><span id="newtons-laws-of-motion"></span>[牛顿运动定律](/zh/alevel/a2-mathematics/mechanics/newtons-laws-of-motion/)：斜面、连接体与变力。
2. <span id="m25-projectiles"></span><span id="projectiles"></span>[抛体](/zh/alevel/a2-mathematics/mechanics/projectiles/)：飞行时间、最大高度、射程与轨迹。
3. <span id="m26-work-and-energy"></span><span id="work-and-energy"></span>[功与能](/zh/alevel/a2-mathematics/mechanics/work-and-energy/)：功、功率与机械能。
4. <span id="m27-uniform-circular-motion"></span><span id="uniform-circular-motion"></span>[匀速圆周运动](/zh/alevel/a2-mathematics/mechanics/uniform-circular-motion/)：角速度、径向加速度与圆锥摆。

## 综合题 {#mixed-problems}

完成相关章节后再做。题目不指定方法；先判断有哪些阶段和约束。以下均为自拟题。

<div class="lesson-check" markdown="1">

### 梁与包裹 {#mixed-a}

**Self-written task.** A uniform horizontal beam AB has length $4\,\mathrm m$ and mass $8\,\mathrm{kg}$. It rests on two small supports: one at A and one $3\,\mathrm m$ from A. A parcel of mass $4\,\mathrm{kg}$ is placed at B. Each support can push upwards but cannot pull downwards. Find the centre of mass of the beam and parcel, and both support forces. The parcel mass is then increased. Find its greatest mass for which equilibrium is possible with both supports available.

<details markdown="1">

<summary>提示</summary>

以 A 为坐标起点。均匀梁的重力作用在中点。求出支承力后，还要检查支架是否能给出这个方向的力。

</details>

<details markdown="1">

<summary>解答与检查</summary>

先求梁和包裹的总质心，距离都从 A 量起：

$$\bar x=\frac{8(2)+4(4)}{8+4}=\frac83\,\mathrm m.$$

设 A 处向上的支承力为 S，另一个为 R。以 A 为支点比较两边的转动作用：

$$3R=8g(2)+4g(4),\qquad R=\frac{32g}{3}\,\mathrm N.$$

向上的总力也必须等于总重力：

$$S+R=12g,\qquad S=\frac{4g}{3}\,\mathrm N.$$

把包裹质量改为 m 后，仍列同样的两个平衡关系。质量增加时，A 处支承力先减到零：

$$R=\frac{(16+4m)g}{3},\qquad S=\frac{(8-m)g}{3}.$$

$$S\geq0\quad\Longrightarrow\quad m\leq8\,\mathrm{kg}.$$

极限时，总质心正好在离 A 3 m 的支架上方。再加重就需要 A 处向下拉梁；题目中的支架做不到。

若转动平衡不清楚，回到[力矩课](/zh/alevel/a2-mathematics/mechanics/moments-and-rigid-objects/#equilibrium-under-parallel-forces)；若质量加权的位置算错，回到[重心课](centres-of-mass/#a-system-of-particles)。

</details>

</div>

<div class="lesson-check" markdown="1">

### 平台边缘 {#mixed-b}

**Self-written task.** A particle of mass $2\,\mathrm{kg}$ starts from rest on a horizontal platform. A constant horizontal pulling force of $10\,\mathrm N$ acts for $4\,\mathrm m$, while a constant resistance of $2\,\mathrm N$ opposes the motion. At the edge both horizontal forces cease. The particle leaves horizontally from height $4.9\,\mathrm m$ above level ground. Neglect air resistance during flight and use $g=9.8\,\mathrm{m\,s^{-2}}$. Find its speed at the edge, horizontal distance travelled during flight, and velocity just before impact. Explain why a single constant-acceleration vector cannot describe both stages.

<details markdown="1">

<summary>提示</summary>

把平台上和空中的运动分开。到边缘时，哪些力消失了？第二段的初速度来自第一段的末速度。

</details>

<details markdown="1">

<summary>解答与检查</summary>

平台上，重力和支持力都垂直于位移，不做功。两个水平力合起来做的功为：

$$W=(10-2)(4)=32\,\mathrm J,\qquad \frac12(2)u^2=32,\qquad u=4\sqrt2\,\mathrm{m\,s^{-1}}.$$

也可以先求平台上的加速度为 4，再用恒加速度关系求出同一速率。飞行从边缘重新计时，取右方、上方为正：

$$x=4\sqrt2\,t,\qquad y=-4.9t^2.$$

$$-4.9=-4.9t^2\quad\Longrightarrow\quad t=1\,\mathrm s,\qquad x=4\sqrt2\,\mathrm m.$$

$$\mathbf v=4\sqrt2\,\mathbf i-9.8\,\mathbf j\quad\mathrm{m\,s^{-1}}.$$

速度必须同时交代大小和方向。碰地速率约为 11.3，方向约为水平线下方 60.0 度。两段的加速度不同：

$$\mathbf a_{\mathrm{platform}}=4\mathbf i,\qquad \mathbf a_{\mathrm{flight}}=-9.8\mathbf j\quad\mathrm{m\,s^{-2}}.$$

检查：碰地动能应等于平台上增加的 32 J，再加飞行中损失的重力势能。

若重复计算重力，回到[功与能](work-and-energy/#the-work-energy-principle)；若混淆飞行方向或落地高度，回到[抛体](projectiles/#projection-from-a-height)。

</details>

</div>

<div class="lesson-check" markdown="1">

### 转盘数据 {#mixed-c}

**Self-written task.** A particle of mass $0.5\,\mathrm{kg}$ rests on a rough horizontal disc. While it moves with the disc its position relative to the centre is $\mathbf r=(0.8\cos2t)\mathbf i+(0.8\sin2t)\mathbf j$ metres, where $t$ is in seconds. The coefficient of friction is $0.4$. Show that the path is circular and find its speed and acceleration. Decide whether this motion is possible without slipping. The disc is then set to rotate steadily at $3\,\mathrm{rad\,s^{-1}}$. Can the particle remain at the same radius? Find the limiting angular speed for this radius. Use $g=9.8\,\mathrm{m\,s^{-2}}$.

<details markdown="1">

<summary>提示</summary>

先检查到圆心的距离，再求导。需要的水平力要与接触处能提供的摩擦力比较。

</details>

<details markdown="1">

<summary>解答与检查</summary>

$$\lvert\mathbf r\rvert^2=0.8^2(\cos^22t+\sin^22t)=0.64.$$

半径始终为 0.8 m。分别求一次、二次导数：

$$\mathbf v=-1.6\sin2t\,\mathbf i+1.6\cos2t\,\mathbf j,\qquad \lvert\mathbf v\rvert=1.6\,\mathrm{m\,s^{-1}}.$$

$$\mathbf a=-3.2\cos2t\,\mathbf i-3.2\sin2t\,\mathbf j=-4\mathbf r.$$

加速度大小为 3.2，方向指向圆心。摩擦力提供向心合力，不要另外再加一股“向心力”。竖直方向的支持力平衡重力：

$$R=0.5g=4.9\,\mathrm N,\qquad F_{\max}=0.4R=1.96\,\mathrm N.$$

$$F_{\mathrm{needed}}=0.5(3.2)=1.6\,\mathrm N<1.96\,\mathrm N.$$

所以第一种运动可以维持。再检查题目提出的更高角速度：

$$F_{\mathrm{needed}}=0.5(0.8)(3^2)=3.6\,\mathrm N>1.96\,\mathrm N.$$

此时不能在原半径保持圆周运动。3.6 N 是“若要保持圆周所需的力”，不是地面实际能给出的摩擦力。临界条件为：

$$0.5(0.8)\omega^2=1.96,\qquad \omega=\sqrt{4.9}\approx2.21\,\mathrm{rad\,s^{-1}}.$$

求导不清楚时回到[向量与运动学](vectors-and-kinematics/#velocity-and-acceleration)；向心方向或接触条件不清楚时回到[圆周运动](uniform-circular-motion/#forces-in-a-horizontal-circle)。

</details>

</div>

## 稍后回顾 {#later-review}

学完全部章节后，隔开一段学习再回来。先收起笔记，把不确定的地方和所用提示记下来；即时做对不等于已经长期掌握。

<div class="lesson-check" markdown="1">

### 两个物体、一根绳 {#later-a}

**Self-written task.** A $2\,\mathrm{kg}$ particle on a smooth horizontal table is connected to a hanging $1\,\mathrm{kg}$ particle by a light inextensible string over a fixed smooth pulley. The straight string segments are horizontal and vertical. Both particles are released from rest; the hanging particle is initially $2\,\mathrm m$ above the floor. Find the acceleration and string tension before it reaches the floor, and the time of its first contact with the floor. Explain why those same equations cannot simply be continued after contact. Use $g=9.8\,\mathrm{m\,s^{-2}}$.

<details markdown="1">

<summary>提示</summary>

沿每个物体的运动方向取正。绳约束的是加速度大小，不是说两个物体的加速度方向相同。

</details>

<details markdown="1">

<summary>解答与检查</summary>

绳绷紧时，分别给两个物体列受力方程：

$$T=2a,\qquad g-T=a.$$

$$a=\frac g3,\qquad T=\frac{2g}{3}\,\mathrm N.$$

悬挂物从静止开始下降 2 m：

$$2=\frac12\left(\frac g3\right)t^2,\qquad t=\sqrt{\frac{12}{g}}\approx1.11\,\mathrm s.$$

将结果代回两个方程都成立，且张力为正。碰地时增加了地面的作用力，悬挂物不能继续按原加速度向下运动。后续还取决于碰撞及绳是否绷紧，必须重新建模，不能直接延长旧方程。

若方程里的力不属于选定物体，回到[建模](mathematical-modelling/#connected-bodies)和[牛顿定律](newtons-laws-of-motion/#connected-particles)。

</details>

</div>

<div class="lesson-check" markdown="1">

### 接触前后 {#later-b}

**Self-written task.** A $1\,\mathrm{kg}$ trolley moving at $6\,\mathrm{m\,s^{-1}}$ meets a stationary $2\,\mathrm{kg}$ trolley on a smooth horizontal track. They stick together. External horizontal impulse during the collision is negligible. The joined trolleys then move up a smooth ramp, with no further driving force. Find their speed just after the collision, the kinetic energy lost in the collision, and their greatest vertical rise up the ramp. Explain which conservation statement is justified in each stage. Use $g=9.8\,\mathrm{m\,s^{-2}}$.

<details markdown="1">

<summary>提示</summary>

碰撞时选两个小车作为整体。粘在一起时动能是否仍不变？上坡段要用碰后的速度开始计算。

</details>

<details markdown="1">

<summary>解答与检查</summary>

$$1(6)+2(0)=(1+2)v,\qquad v=2\,\mathrm{m\,s^{-1}}.$$

在题目给出的外冲量条件下，碰撞过程动量守恒；动能并不守恒：

$$KE_{\mathrm{before}}=\frac12(1)(6^2)=18\,\mathrm J,\qquad KE_{\mathrm{after}}=\frac12(3)(2^2)=6\,\mathrm J.$$

$$\text{kinetic energy lost}=18-6=12\,\mathrm J.$$

上光滑斜坡后，支持力不做功，剩余动能转为重力势能：

$$6=3gh,\qquad h=\frac2g\approx0.204\,\mathrm m.$$

若把最初的 18 J 全部拿来上坡，就把碰撞中已经转移的能量又用了一次。系统或方向不清楚时回到[动量回补](momentum-bridge/#choose-the-system-before-conserving-momentum)；上坡关系不清楚时回到[功与能](work-and-energy/#the-work-energy-principle)。

</details>

</div>

<div class="lesson-check" markdown="1">

### 绳牵着的运动 {#later-c}

**Self-written task.** A particle of mass $0.4\,\mathrm{kg}$ is attached to a light string of length $1.25\,\mathrm m$. The other end is fixed. The particle describes a horizontal circle with constant angular speed $\sqrt{9.8}\,\mathrm{rad\,s^{-1}}$, with the string taut. Find the angle the string makes with the vertical, the circle radius, tension and period. A student says that constant speed means the forces balance. Explain the error. Use $g=9.8\,\mathrm{m\,s^{-2}}$.

<details markdown="1">

<summary>提示</summary>

圆的半径是绳长的水平部分。张力的一个分量平衡重力，另一个分量不断改变速度方向。

</details>

<details markdown="1">

<summary>解答与检查</summary>

$$r=1.25\sin\theta,\qquad T\cos\theta=0.4g,\qquad T\sin\theta=0.4r\omega^2.$$

这里的圆有非零半径，代入半径关系后可约去正弦因子：

$$T=0.4(1.25)\omega^2=4.9\,\mathrm N.$$

$$\cos\theta=\frac{0.4g}{4.9}=0.8,\qquad \theta\approx36.9^\circ,\qquad r=1.25(0.6)=0.75\,\mathrm m.$$

$$\tau=\frac{2\pi}{\omega}=\frac{2\pi}{\sqrt{9.8}}\approx2.01\,\mathrm s.$$

只有竖直方向的力平衡。速率虽然不变，速度方向仍在改变，所以水平方向必须有向心合力。把张力分量代回，应分别得到重力与向心合力。

若半径或力的方向错了，回到[圆锥摆](/zh/alevel/a2-mathematics/mechanics/uniform-circular-motion/#the-conical-pendulum)。

</details>

</div>

## 速查 {#quick-reference}

<span id="key-formulae-summary"></span><span id="exam-style-question"></span>

[公式与方法](quick-reference/#key-formulae-summary)及[保留的补充问题](quick-reference/#further-questions)。复习时先独立完成相应课的练习，再查提示。

<details markdown="1">
<summary>范围、来源与精度</summary>

九课对应 M2.1–M2.7；力矩和重心都属于 M2.3。[OxfordAQA 9660 specification v5.2，§3.5](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf)为范围依据，*AQA A2 Maths: Pure and Mechanics* Chapters 10–15 为教学辅助。

本课程不是 FM05：不把恢复系数、抛体在斜面落点、竖直非匀速圆周运动列为 MA05 必修。重心不要求积分方法。

自拟题按各课声明的精度要求。真实考试按原卷与题内要求：例如 January 2025 MA05 卷首默认计算器最终结果为两位有效数字，部分题另要求精确值、三位有效数字或最接近整数的角度，不能全卷统一改成三位有效数字。

</details>

**先修：**[AS 数学](/zh/alevel/as-mathematics/)、[动量桥接](/zh/alevel/a2-mathematics/mechanics/momentum-bridge/)，及 A2 纯数的[向量](/zh/alevel/a2-mathematics/vectors/)、[微分](/zh/alevel/a2-mathematics/differentiation/)、[积分](/zh/alevel/a2-mathematics/integration/)。

A2 数学其他单元：[纯数学 MA03](/zh/alevel/a2-mathematics/) · [统计 MA04（英文）](/alevel/a2-mathematics/statistics/)。
