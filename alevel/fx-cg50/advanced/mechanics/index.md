---
layout: subjects
title: fx-CG50 进阶：力学
description: 用方程、三角函数、积分与变量存储处理 MA02、MA05 的受力、运动、能量、圆周、力矩和动量题。
lang: zh-CN
author: Eric Shi
study_page: true
cg50_stage: advanced
cg50_part: mechanics
toc_headings: h2, h3
permalink: /alevel/fx-cg50/advanced/mechanics/
---

<link rel="stylesheet" href="{{ '/assets/css/fx-cg50.css' | relative_url }}?v=20261010-routes">

<div class="cg50-guide" markdown="1">

{% include fx-cg50-navigation.html %}

力学题先画受力图、选正方向、建立模型，再用计算器处理数值。下面把进阶中的[方程求解]({{ '/alevel/fx-cg50/advanced/' | relative_url }}#chapter-4)、[三角函数]({{ '/alevel/fx-cg50/beginner/' | relative_url }}#task-4)、[导数与积分]({{ '/alevel/fx-cg50/advanced/' | relative_url }}#chapter-7)用于 MA02 和 MA05；遇到不熟悉的操作，可按链接回顾。

例题采用 **2025 年 1 月**原卷，英文题意为改写，补充练习标为“自拟”。出处：MA02 QP、MA02 MS；MA05 QP、MA05 MS。每题的 Q 编号和 MS 页码对应其 MA 单元。

MA05 本卷默认 $g=9.8\text{ m s}^{-2}$，数值答案取 **2 位有效数字**；明确要求 3 位有效数字或整数角度的小题按该要求。MA02 按对应小题要求作答。中间值保留内部精度。角度为 $60^\circ$、$65^\circ$ 等时用 **度数**；$\sin t$、$\cos 2t$ 等以时间为自变量的表达式用 **弧度**。

需要保存未舍入数值时，在 **计算·矩阵** 输入式后按 **存储键 → ALPHA → 字母所在键 → EXE**。红色 A、B、C 分别位于 `X,θ,T`、`log`、`ln` 键；调用时按 `ALPHA` 加对应键。步骤间的箭头表示依次按键，不是实体存储键。

## 受力、功率与能量 {#mechanics-forces}

先区分外力、内部张力与阻力；功率统一为 W，能量方程检查初末状态。

### MA02：连接粒子：先选两边的正方向 {#ma02-pulley}

**Q9，英文题意改写：Particles of masses $0.7$ kg and $0.4$ kg are connected over a smooth pulley. Find the acceleration after release.** MS p16；模型条件以原卷为准。

取 $0.7$ kg 粒子向下、$0.4$ kg 粒子向上为各自正方向。绳轻且不可伸长、滑轮光滑，因此两边张力相同、加速度大小相同。

$$0.7g-T=0.7a,\qquad T-0.4g=0.4a.$$

1. 相加消去 $T$，得 $a=(0.7-0.4)g/(0.7+0.4)$。
2. **计算·矩阵** 输入 `(0.7 − 0.4) × 9.8 ÷ (0.7 + 0.4) → EXE`，得到 $2.672727\ldots\ \mathrm{m\,s^{-2}}$，按 MS 给 $2.7\ \mathrm{m\,s^{-2}}$。
3. 用未舍入的 $a$ 代入 $T=0.4(g+a)$，可得 $4.9890909\ldots\ \mathrm N$，再代回重粒子的方程检查；此项是额外核验。

**答卷保留：** 两个有正方向的运动方程及消元。不能把两物体的总重量 $1.1g$ 当作驱动合力；内部张力相消后，驱动力来自重量差。

### MA05：摩擦：保留角度精度，再算摩擦系数 {#ma05-friction}

**Q2，英文题意改写：A particle of weight 100 N is in limiting equilibrium on an inclined rough plane. The normal reaction is 82 N. Find the inclination, frictional force and coefficient of friction.** MS p6。

1. 画重力、支持力和摩擦力；粒子将要下滑，摩擦力沿斜面向上。
2. 垂直斜面：$100\cos\alpha=82$。设 **度数**，输入 $\cos^{-1}(82/100)$，反余弦用 `SHIFT → cos`，手动补左右括号，得 $34.91520625\ldots^\circ$。
3. 将角度未舍入值存入 A；按题目要求写 **$35^\circ$**，供后续计算的 A 仍保留完整值。
4. 沿斜面平衡：$F=100\sin\alpha$。输入 $100\sin(A)$，得 $57.23635209\ldots$，写 **$57\text{ N}$**。
5. 极限平衡时 $F=\mu R$。输入 $\sqrt{100^2-82^2}/82$，得 $0.6980042937\ldots$，写 **$\mu=0.70$**。

**答卷保留：** 两个方向的平衡式，以及“极限平衡”才能使用 $F=\mu R$ 的条件。普通静止状态只有 $F\le\mu R$；不要先把 $\alpha$ 舍入成 $35^\circ$ 再算后续答案。

### MA05：功率与变阻力：先统一 W 和 kW {#ma05-power}

**Q1，英文题意改写：A vehicle of mass 18 000 kg has maximum engine power 345 kW and resistance $kv^{9/4}$ N. Its maximum acceleration at 12 m/s is 1.5 m/s². Find $k$, the work against resistance at 18 m/s for 30 s, and the maximum steady speed.** MS pp4–5。

由 $P=Fv$、$F-R=ma$ 得

$$\frac{345000}{12}-k12^{9/4}=18000(1.5).$$

1. **计算·矩阵** 输入 $(345000/12-18000\times1.5)/12^{9/4}$，得 $k=6.529504794\ldots$。分数指数整个放在指数模板内。
2. 将未舍入的结果存入 A：按实体存储键 `→`，再按 `ALPHA → X,θ,T（A） → EXE`。这里的 `→` 是键帽上的存储箭头。
3. Q1(a) 要求 3 位有效数字，答卷写 **$k=6.53$**。
4. Q1(b) 匀速路程为 $18\times30$，阻力为 $A\times18^{9/4}$。输入 $A\times18^{9/4}\times18\times30$，得 $2353082.432\ldots\text{ J}$，写 **$2.4\times10^6\text{ J}$**。
5. Q1(c) 最大稳定速度处 $a=0$，因此 $345000=kv^{13/4}$。输入 $(345000/A)^{4/13}$，得 $28.39304389\ldots$，写 **$28\text{ m s}^{-1}$**。

**答卷保留：** 功率与牵引力的关系、运动方程、阻力做功和 $a=0$ 的理由。计算器不负责决定哪些力进入运动方程。把 345 kW 直接输入为 345 W，会改变整套结果。

### MA05：能量接抛体：离开斜面时的速度作初始条件 {#ma05-energy}

**Q7(a)–(b)，英文题意改写：A 3.2 kg particle starts from rest and slides 2.5 m down a smooth roof at $40^\circ$ to the horizontal. It leaves the roof 6 m above the ground. Use energy to find its leaving speed, then find its horizontal distance from the roof edge when it hits the ground. Air resistance is neglected.** MS p13。

竖直下降高度是 $2.5\sin40^\circ$。光滑斜面上支持力不做功，机械能守恒：

$$mg(2.5\sin40^\circ)=\tfrac12mu^2.$$

1. 设 **度数**，输入 $\sqrt{2\times9.8\times2.5\sin(40)}$，得 $u=5.612182541\ldots\text{ m s}^{-1}$，存入 A；Q7(a) 写 **$5.6\text{ m s}^{-1}$**。
2. 离开屋顶时速度沿斜面向下。取向下为正：$6=u\sin40^\circ\,t+4.9t^2$；水平速度为 $u\cos40^\circ$。
3. 二次方程系数输入 $4.9,A\sin(40),-6$，取正根 $t=0.7980806916\ldots\text{ s}$。舍弃负时间，将完整正根存入 B。
4. **计算·矩阵** 输入 $A\cos(40)B$，得水平距离约 $3.43\text{ m}$，按默认精度写 **$3.4\text{ m}$**。

**答卷保留：** 能量方法、竖直高度、离开屋顶时的速度方向、两方向的运动方程与正时间根。题目指定 energy method，直接用斜面加速度和 SUVAT 不能替代这一要求；后续抛体计算仍用未舍入的 $u$。

## 运动：导数、积分与抛体方程 {#mechanics-motion}

用导数判断最大速度，用积分求位移；抛体先分解速度，再筛选符合时间和几何条件的根。

### MA02：速度函数：最大值、平均速率与分段距离 {#ma02-motion}

**Q10(a)–(c)，英文题意改写：A particle has $v=-0.5t^2+1.9t$ for $0\le t\le2$, then its speed decreases uniformly to zero. Find its maximum velocity and use a total distance of $56/3$ m to determine the stopping time.** MS pp17–19。

#### 前两秒：先求导，再积分

纸上写 $a=dv/dt=1.9-t$，所以驻点在 $t=1.9$，且 $v''=-1<0$。

1. **计算·矩阵** 输入 `(-0.5) × 1.9² + 1.9 × 1.9 → EXE`，得最大速度 $1.805\ \mathrm{m\,s^{-1}}$。
2. 数值积分输入 $-0.5X^2+1.9X$，下限 $0$、上限 $2$，得 $37/15\approx2.4666667$ m。
3. 这段 $v\ge0$，故积分也是距离；除以时间 $2$ 得平均速率 $37/30\ \mathrm{m\,s^{-1}}$。

#### 之后：用三角形面积表示距离

$$v(2)=1.8,\qquad \frac{56}{3}-\frac{37}{15}=16.2.$$

1. 在 **计算·矩阵** 输入 `56 ÷ 3 − 37 ÷ 15 → EXE`，得到剩余距离 $16.2$ m。
2. 匀减速阶段的速度—时间图为三角形，$\frac12(1.8)(T-2)=16.2$。
3. 输入 `2 + 2 × 16.2 ÷ 1.8 → EXE`，得到 $T=20$ s。

**答卷保留：** 最大值的导数判断、积分原函数、平均速率定义、分段距离和三角形模型。其他题目若速度变号，总距离应分段积分 $\lvert v\rvert$，不能把位移绝对值当作距离。

### MA05：抛体：二次方程的两个根对应两次经过 {#ma05-projectile}

**Q4(b)，英文题意改写：A particle is projected at 15 m/s at $60^\circ$ to the horizontal. Find both horizontal distances at height 7 m, to three significant figures, and the time spent above this height.** MS pp9–10。

从

$$x=15\cos(60^\circ)t,\qquad y=15\sin(60^\circ)t-\tfrac12gt^2$$

消去 $t$，代入 $y=7$，得

$$\frac{98}{1125}x^2-\sqrt3x+7=0.$$

1. 按[多项式教程]({{ '/alevel/fx-cg50/advanced/' | relative_url }}#task-15) 进入二次方程，系数填 $98/1125,-\sqrt3,7$。负系数用 `(−)`，根号内为 $3$。
2. 两根为 $5.642940604\ldots$ 和 $14.24029571\ldots$。按 Q4(b)(i) 的 3 位有效数字写 **$5.64\text{ m}$、$14.2\text{ m}$**。
3. 两根分别对应上升和下降经过 $y=7$；只留下较大根会漏掉一个时刻。
4. 在 **计算·矩阵** 用未舍入根求 $(x_{\text{large}}-x_{\text{small}})/(15\cos(60))$。可以重新输入二次公式的精确表达式，或将完整两根存入 A、B；不要抄回 $14.2$、$5.64$。
5. 时间差为 $1.146314014\ldots\text{ s}$，Q4(b)(ii) 按本卷默认精度写 **$1.1\text{ s}$**。

**答卷保留：** 水平、竖直运动方程，消元所得二次式，两个时刻和时间差。若题目要求推导轨迹方程，屏幕上的两个根不能替代推导。

### MA05：向量运动：积分常数由初始条件决定 {#ma05-vector-motion}

**Q9，英文题意改写：A 3 kg particle starts from rest at the origin under the force below. Find its distance from the origin after 2 s, to three significant figures.** MS p17。

$$\mathbf F=(36t^2-18t)\mathbf i+(6\cos t-24\sin2t)\mathbf j+3e^{-t/3}\mathbf k.$$

先除以质量，积分两次，并分别使用 $\mathbf v(0)=\mathbf0$、$\mathbf r(0)=\mathbf0$：

$$\mathbf a=(12t^2-6t)\mathbf i+(2\cos t-8\sin2t)\mathbf j+e^{-t/3}\mathbf k,$$

$$\begin{aligned}
\mathbf v={}&(4t^3-3t^2)\mathbf i\\
&+(2\sin t+4\cos2t-4)\mathbf j\\
&+(3-3e^{-t/3})\mathbf k,
\end{aligned}$$

$$\begin{aligned}
\mathbf r={}&(t^4-t^3)\mathbf i\\
&+(-2\cos t+2\sin2t-4t+2)\mathbf j\\
&+(3t+9e^{-t/3}-9)\mathbf k.
\end{aligned}$$

1. 设 **弧度**。代入 $t=2$ 后，三个坐标分别为 $8$、$-6.681311317\ldots$、$1.620754071\ldots$。
2. 在 **计算·矩阵** 分别算坐标并将未舍入值存入 A、B、C：红色字母键依次为 `X,θ,T`、`log`、`ln`。三角函数括号手动输入，指数 $-2/3$ 整体放在 $e$ 的指数模板内。
3. 输入 $\sqrt{A^2+B^2+C^2}$，得 $10.54830625\ldots$，写 **$10.5\text{ m}$**。
4. 在纸上代入 $t=0$ 检查两个初始条件，再对位置向量微分检查是否回到速度向量。

**答卷保留：** $\mathbf F=3\mathbf a$、两次积分、两个初始条件、坐标代入与向量模。这里求离原点的距离，使用位移向量的模；沿途路程则需要积分速率，二者不相同。

## 圆周运动：径向合力与半径 {#mechanics-circular}

向心力是合力的径向分量。先确定运动半径，再代入速度或角速度关系。

### MA05：圆周运动：摩擦提供向心力 {#ma05-circular}

**Q3(a)，英文题意改写：A 20 kg particle rests 0.3 m from the centre of a rough horizontal rotating disc. The coefficient of friction is 0.45. Show that the greatest angular speed without slipping is 3.83 rad/s to three significant figures.** MS p7。

支持力 $R=mg$，水平向心力由摩擦提供：

$$mr\omega^2\le\mu mg,\qquad \omega_{\max}=\sqrt{\frac{\mu g}{r}}.$$

1. 输入 $\sqrt{0.45\times9.8/0.3}$，得 $3.834057903\ldots$。
2. 按小题要求写 **$3.83\text{ rad s}^{-1}$**。质量约去不意味着没有重力：重力决定支持力和最大摩擦力。

**Q3(b)，英文题意改写：For $\mathbf r=0.3\cos(3t)\mathbf i+0.3\sin(3t)\mathbf j$, find the force on the particle.** MS p8。

先手算两次微分：

$$\mathbf v=-0.9\sin(3t)\mathbf i+0.9\cos(3t)\mathbf j,$$

$$\mathbf a=-2.7\cos(3t)\mathbf i-2.7\sin(3t)\mathbf j,$$

$$\mathbf F=20\mathbf a=-54\cos(3t)\mathbf i-54\sin(3t)\mathbf j.$$

计算器可在 **弧度** 下代入一个时刻，核对 $\lVert\mathbf F\rVert=54\text{ N}$、力指向圆心。数值导数只能检查某一时刻，不能代替这三行含 $t$ 的解析表达式。每次微分都要带上内层 $3t$ 的系数。

### MA05：圆锥摆：半径与绳长分别使用 {#ma05-conical-pendulum}

**自拟操作练习：A 0.5 kg particle moves as a conical pendulum on a 1.2 m string at $30^\circ$ to the vertical. Find the angular speed, period and tension.**

这是圆周运动的补充练习，不是 January 2025 原题。水平圆半径是 $r=L\sin\theta=0.6\text{ m}$，竖直和水平分量分别满足

$$T\cos\theta=mg,\qquad T\sin\theta=m\omega^2r.$$

1. 设 **度数**，输入 $\sqrt{9.8/(1.2\cos(30))}$，得 $\omega=3.070839364\ldots\text{ rad s}^{-1}$，将结果存入 A。
2. 周期输入 $2\pi/A$，得 $2.046080750\ldots\text{ s}$。输入 $\pi$ 用 `SHIFT → ×10ˣ`。
3. 张力输入 $0.5\times9.8/\cos(30)$，得 $5.658032638\ldots\text{ N}$。
4. 本练习统一取 3 位有效数字：**$\omega=3.07\text{ rad s}^{-1}$、周期 $2.05\text{ s}$、张力 $5.66\text{ N}$**。

**答卷保留：** 角度相对竖直的说明和两个分量方程。$\theta=30^\circ$ 在计算器中用度数，并不改变角速度的单位 rad/s。

## 力矩、质心与碰撞 {#mechanics-moments}

力矩用垂直距离，质心用质量加权，动量带方向；分别建模后再计算。

### MA05：力矩：每个力乘自己的垂直距离 {#ma05-moments}

**Q5，英文题意改写：An 11 m rod of mass 25 kg makes $65^\circ$ with the horizontal. A horizontal string of tension 40 N acts 3 m above the smooth floor. The other end touches a rough vertical wall with coefficient of friction 0.4, in limiting equilibrium. Find the distance $d$ from the floor end to the centre of mass.** MS p11；受力位置见 QP Q5 的图。

水平平衡给墙的支持力 $40\text{ N}$，极限摩擦为 $0.4\times40=16\text{ N}$，方向沿墙向下。以地面端 X 为力矩中心：

$$\begin{aligned}
&25gd\cos(65^\circ)+40(3)\\
&\quad=40(11\sin(65^\circ))+16(11\cos(65^\circ)).
\end{aligned}$$

1. 设 **度数**，输入

   $$\frac{11(40\sin(65)+16\cos(65))-120}{25\times9.8\cos(65)}.$$

2. 得 $3.410770837\ldots$，写 **$d=3.4\text{ m}$**。
3. 检查 $0<d<11$，再对照受力图确认每项的顺、逆时针方向。

**答卷保留：** 摩擦方向、水平平衡和力矩方程。张力的力臂是给定的竖直高度 $3$，不是杆上到作用点的长度；重力的力臂是 $d\cos65^\circ$。遇到图形题先读图，不能只照抄这个算式。

### MA05：组合质心：先算质量加权坐标 {#ma05-centre-of-mass}

**Q6，英文题意改写：Particles of masses 2, 4 and 7 kg are at $(-5,0)$, $(5,0)$ and $(0,d)$. A uniform triangular lamina of mass 6 kg has centre of mass $(0,d/3)$. The system is freely suspended at the origin, with its original vertical line making $5^\circ$ with the line to the combined centre of mass. Find $d$.** MS p12。

总质量为 $19\text{ kg}$：

$$\bar x=\frac{2(-5)+4(5)+7(0)+6(0)}{19}=\frac{10}{19},$$

$$\bar y=\frac{2(0)+4(0)+7d+6(d/3)}{19}=\frac{9d}{19}.$$

1. 将粒子与薄片分别列入质量加权和；三角形薄片不能直接当作顶点处的 $6\text{ kg}$ 质点。
2. 自由悬挂时质心在悬点正下方。几何关系为 $\tan5^\circ=\bar x/\bar y=10/(9d)$。
3. 设 **度数**，输入 $10/(9\tan(5))$，得 $12.70005811\ldots$，写 **$d=13\text{ m}$**。

**答卷保留：** 总质量、两个加权坐标的精确形式、悬挂几何关系。角度以竖直方向为基准，所以是水平坐标除以竖直坐标。

### MA05：碰撞：动量带方向，动能取平方 {#ma05-collision}

**Q8，英文题意改写：Spheres X and Y of masses 2 and 5 kg move in the same direction with momenta 19.2 and 7.5 kg m/s. After collision the magnitude of X's momentum is 2.4 kg m/s. Find both possible momenta of Y and the corresponding losses of kinetic energy.** MS pp15–16。

以初始运动方向为正，初始总动量为 $26.7$。碰撞后 X 的动量可能是 **$+2.4$ 或 $-2.4$**：

$$p_Y=26.7-2.4=24.3,$$

$$\text{或}\quad p_Y=26.7-(-2.4)=29.1.$$

1. 两种可能按 Q8(a) 默认精度写 **$24$、$29\text{ kg m s}^{-1}$**，保留未舍入值计算能量。
2. 用 $E_k=p^2/(2m)$。输入 $19.2^2/(2\times2)+7.5^2/(2\times5)$，得 **$97.785\text{ J}$**，这是 Q8(b) 要求证明的初始总动能。
3. X 不改变方向时，输入 $97.785-(2.4^2/4+24.3^2/10)$，得 $37.296\text{ J}$。
4. X 改变方向时，输入 $97.785-((-2.4)^2/4+29.1^2/10)$，得 $11.664\text{ J}$。
5. Q8(c) 要求 3 位有效数字，写 **$37.3\text{ J}$ 或 $11.7\text{ J}$**。

**答卷保留：** 带正负号的动量守恒式、两种可能，以及能量损失是“碰撞前减碰撞后”。动量的大小没有负号，但列守恒方程必须考虑方向；负速度的平方仍给正动能。

## 答卷检查与继续学习 {#mechanics-check}

- 角度与弧度跟着表达式切换，功率统一为 W，质量用 kg，长度用 m。
- 先画受力图；摩擦方向、支持力和力臂由模型决定。
- 圆周半径与绳长分清；向心力是合力的径向分量。
- 速度变号时，总距离分段积分速率；向量位移的模不能代替沿途路程。
- 动量方程保留方向，动能用平方；向量积分保留常数和初始条件。
- 最后按小题要求舍入，中间计算保留未舍入值；show that 题写出模型与过程。

已掌握这些基础模型、正在学习 Further Mathematics 的同学，可继续[高数力学扩展]({{ '/alevel/fx-cg50/further-mechanics/' | relative_url }})，学习弹性、变力、斜面抛射、斜碰撞、简谐与离面问题。

[进阶：数学与统计]({{ '/alevel/fx-cg50/advanced/' | relative_url }}) · [按 MA01–MA05 复习]({{ '/alevel/fx-cg50/advanced/' | relative_url }}#mathematics-units) · [学习路线总览]({{ '/alevel/fx-cg50/' | relative_url }})

编写与组织：**Eric Shi**；GPT 辅助整理、核算与网页制作。[署名与资料来源]({{ '/alevel/fx-cg50/' | relative_url }}#credits)。

</div>
