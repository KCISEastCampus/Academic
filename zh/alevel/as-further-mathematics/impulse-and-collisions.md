---
title: "变力冲量与一维碰撞"
layout: subjects
mathjax: true
grade: as
subject: as-further-mathematics
lang: zh-CN
translation_of: /alevel/as-further-mathematics/impulse-and-collisions/
permalink: /zh/alevel/as-further-mathematics/impulse-and-collisions/
toc_headings: "#start, #model, #demonstration, #signed-area, #collision-model, #wall-model, #practice, #retry, #later-review, #next-step, #sources"
study_page: true
reading_layout: true
---

[AS 高数课程](/zh/alevel/as-further-mathematics/)

短暂接触也能显著改变速度。关键是先选研究对象或系统、规定正方向，再辨认这段时间内哪些力提供冲量。本页先把带符号的力图连到速度变化，再区分两粒子碰撞与固定墙碰撞。

本页示范与练习均为**自拟题（self-written）**，没有官方分值。每题先独立作答，再按需展开各自的提示与解答。英文题干保留，中文帮助理解和订正。

## 开始前 {#start}

先修为带符号速度、动量、定积分、三角形／梯形面积及联立方程。动量和动能可回补 [AS 动量](/zh/alevel/as-mathematics/momentum/)，积分可回补 [AS 积分](/zh/alevel/as-mathematics/integration/)，N s 与 kg m s⁻¹ 的联系见[量纲页](/zh/alevel/as-further-mathematics/dimensions/#units)。

动能检查使用 $K=\tfrac12mv^2$：动能是非负标量，带符号速度也要先平方。

<section class="lesson-check" markdown="1">

### 区分速率与速度 {#entry-check}

**Entry check (self-written):** Right is positive. A 2 kg particle has velocity −3 m s⁻¹. State its speed, momentum and kinetic energy. A constant net force of +4 N acts for 0.5 s. Find its impulse and the resulting velocity.

保持同一正方向，分别报告速率、动量、动能，再处理恒力作用。

<details markdown="1"><summary>提示</summary>

速率取大小，动量保留速度符号。冲量对应动量变化，不是末动量。

</details>

<details markdown="1"><summary>解答与回补</summary>

$$\begin{aligned}\text{speed}&=3\ \mathrm{m\,s^{-1}},\\p&=-6\ \mathrm{kg\,m\,s^{-1}},\\K&=\tfrac12(2)(-3)^2=9\ \mathrm J,\\J&=4(0.5)=2\ \mathrm{N\,s},\\v&=-3+2/2=-2\ \mathrm{m\,s^{-1}}.\end{aligned}$$

正向力使负速度的绝对值减小，不一定使运动反向。若得到正的末速度，先分别重建初、末动量再继续。

</details>

</section>

## 1. 选系统，再求带符号冲量 {#model}

把每个物体视为正的恒定质量粒子，沿同一直线运动；固定正轴，明确所研究事件的起止时刻。光滑表示没有切向摩擦，并不表示没有法向接触力。碰撞时间短，只能在其他冲量相对接触冲量可忽略时，才略去它们。

### 从力到动量改变 {#impulse}

对单个粒子，F 是沿所选正轴的合力。牛顿第二定律给出动量变化率；对整个区间积分，就是累加每一小段带符号的贡献。

$$\begin{aligned}p&=mv,\qquad F=\frac{dp}{dt},\\J&=\int_{t_1}^{t_2}F(t)\,dt\\&=p(t_2)-p(t_1)=m(v-u).\end{aligned}$$

冲量单位 N s 等于 kg m s⁻¹。恒力才可直接写 $J=F\Delta t$；变力要积分或求图的带符号面积。平均力只有在提供相同总冲量时才能替代变力：非零时长下 $F_{\rm av}=J/\Delta t$。峰值力或末时刻的力通常不等于平均力。

对两粒子整体，内部冲量大小相等、方向相反，在总量中抵消。只有**该系统所受外冲量**为零或可忽略时，总动量才守恒。粒子单独作为系统时，墙的冲量属于外冲量，不能使用粒子动量守恒。

## 2. 连续处理一个力脉冲 {#demonstration}

<section class="worked-example" markdown="1">

### 正冲量不一定使速度反向

**Demonstration (self-written):** A 2 kg particle initially moves at −1 m s⁻¹. Its net force is $F(t)=6t(1-t)$ N for $0\le t\le1$ s. Find its final velocity.

以题设符号为固定正方向。本页数值力函数中的 t 表示以秒计的时间数值，表达式给出以牛顿计的力数值，所需量纲包含在数值系数中。力随时间变化，且在给定区间非负，因此用积分，不能拿末时刻的力乘时长。

$$\begin{aligned}J&=\int_0^1(6t-6t^2)\,dt\\&=[3t^2-2t^3]_0^1\\&=1\ \mathrm{N\,s},\\2(v-(-1))&=1,\\v&=-0.5\ \mathrm{m\,s^{-1}}.\end{aligned}$$

核对：动量从 −2 变为 −1 kg m s⁻¹，确实增加 1。冲量为正，末速度仍可为负。起止两端的力都是零，中间面积却不为零。

</section>

## 力改变符号时 {#signed-area}

力图在时间轴上方贡献正冲量，在下方贡献负冲量。要按符号相加，而非把所有几何面积当正数。能推也能拉的驱动器可产生两种符号的力；下面是这样的轨道外力，不把普通墙面接触错误地画成把粒子拉回的负力。

<section class="worked-example" markdown="1">

### 连接力图与速度

**Demonstration (self-written):** A 2 kg particle on a horizontal rail has initial velocity −1 m s⁻¹. A powered actuator provides net force $F(t)=4-2t$ N for $0\le t\le3$ s. Find the impulse and final velocity, and interpret the force zero at t=2 s.

![Net force against time: a straight line from (0 s,4 N) through (2 s,0 N) to (3 s,−2 N). The region above the axis is marked plus and hatched differently from the minus region below.](/alevel/as-further-mathematics/diagrams/signed-force.svg){: width="560" height="420" }

直线在两秒处过零。第一个三角形贡献 +4 N s，第二个贡献 −1 N s，总冲量为 +3 N s；积分可交叉核对。

$$\begin{aligned}J&=\int_0^3(4-2t)\,dt\\&=[4t-t^2]_0^3=3\ \mathrm{N\,s},\\v(3)&=-1+3/2=0.5\ \mathrm{m\,s^{-1}},\\v(2)&=-1+4/2=1\ \mathrm{m\,s^{-1}}.\end{aligned}$$

不带符号的总面积为 5 N s，不能当冲量。两秒处加速度由正变负，但速度为 +1 m s⁻¹，并非运动反向。末速度对应的动量变化也确为 +3 kg m s⁻¹。

</section>

## 3. 建立两粒子碰撞模型 {#collision-model}

设 A 在 B 左侧，向右为正。碰前若 $u_A>u_B$，两者接近，接近速率是带符号速度之差；碰后常规分离状态要求 $v_B\ge v_A$。恢复系数 e 比较分离速率与接近速率。

$$\begin{aligned}v_B-v_A&=e(u_A-u_B),\\0&\le e\le1.\end{aligned}$$

这是沿同一直线的直接碰撞，常规模型不允许额外能量释放到相对运动中。区间包含 e=0（紧接碰后速度相同）及 e=1（弹性碰撞）。e=0 并不建立永久黏合。算出区间外的 e，说明数据与常规模型不符，或需要另一个物理模型，不能取绝对值掩盖。

若 A+B 的外冲量可忽略，再列

$$\begin{aligned}m_Au_A+m_Bu_B\\=m_Av_A+m_Bv_B.\end{aligned}$$

恢复系数单独不能确定两个速度；动量单独不能确定碰后保留多少相对运动。正质量、确实接近的条件下，两者提供两个独立方程。

<section class="worked-example" markdown="1">

### 跟踪一次碰撞的符号 {#two-particles}

**Demonstration (self-written):** A (2 kg) has initial velocity 3 m s⁻¹; B (1 kg) has velocity −1 m s⁻¹. They collide on a smooth horizontal line with negligible external impulse and $e=1/2$.

![Before impact, A of mass 2 kg is left of B of mass 1 kg; A moves right at 3 m s⁻¹ and B left at 1 m s⁻¹. After impact, A moves right at 1 m s⁻¹ and B right at 3 m s⁻¹. A separate arrow marks right as positive; velocity arrows use a common scale.](/alevel/as-further-mathematics/diagrams/collision-line.svg){: width="560" height="460" }

接近速率是 4 m s⁻¹，而非 2。选 A+B 整体使接触冲量抵消，再用带符号初动量与恢复系数关系。

$$\begin{aligned}2v_A+v_B&=2(3)+1(-1)=5,\\v_B-v_A&=\tfrac12(3-(-1))=2,\\v_A&=1\ \mathrm{m\,s^{-1}},\\v_B&=3\ \mathrm{m\,s^{-1}}.\end{aligned}$$

总动量仍为 5 kg m s⁻¹，B 比 A 快，满足分离。再分别把 A、B 单独作为系统，此时接触冲量就是各自的外冲量。

$$\begin{aligned}J_A&=2(1-3)=-4\ \mathrm{N\,s},\\J_B&=1(3-(-1))=4\ \mathrm{N\,s},\\K_{\rm before}&=\tfrac12(2)(3^2)+\tfrac12(1)(1^2)\\&=9.5\ \mathrm J,\\K_{\rm after}&=\tfrac12(2)(1^2)+\tfrac12(1)(3^2)\\&=5.5\ \mathrm J.\end{aligned}$$

两个冲量等大反向，核对了整体计算。平动动能减少 4 J，因此不能把动能守恒作为这次碰撞的第二个方程；减少的动能转为其他形式，并非能量被消灭。

</section>

一般核对也应覆盖整个常规 e 区间。用 V 表示质心速度、μ 表示约化质量；把动能按总动量与相对速率展开，可得

$$\begin{aligned}S&=m_A+m_B>0,\\V&=\frac{m_Au_A+m_Bu_B}{S},\\\mu&=\frac{m_Am_B}{S},\quad q=u_A-u_B>0,\\u_A&=V+\tfrac{m_B}{S}q,\\u_B&=V-\tfrac{m_A}{S}q,\\v_A&=V-\tfrac{m_B}{S}eq,\\v_B&=V+\tfrac{m_A}{S}eq.\end{aligned}$$

把这些速度代入质量乘速度平方的动能式，交叉项抵消，得到

$$\begin{aligned}K_{\rm before}&=\tfrac12 SV^2+\tfrac12\mu q^2,\\K_{\rm after}&=\tfrac12 SV^2+\tfrac12\mu e^2q^2,\\K_{\rm loss}&=\tfrac12\mu(1-e^2)q^2\ge0.\end{aligned}$$

这个恒等式由展开得到，没有预先假定动能守恒。质量为正且确实接近时，仅 e=1 的损失为零。e=0 表示此刻相对平动动能全部移走，但整体共同运动仍可存在。

## 4. 改变边界：固定墙 {#wall-model}

规定**背离墙面为正**。入射速率 u 为正，但带符号初速度为 −u。对固定光滑墙的正碰，墙速度为零；若其他冲量可忽略，则

$$\begin{aligned}v&=eu,\qquad u>0,\\J_{\rm wall}&=m(v+u),\\0\le e\le1&\iff 0\le v\le u.\end{aligned}$$

末行等价关系用了 u>0，因此除以 u 不改变不等号方向。若要求严格向外反弹，就加上 v>0，排除无反弹端点。固定墙可以传递动量；其固定接触点不发生宏观平移，非弹性损失涉及变形等内部过程。不要对粒子单独用动量守恒，也不要默认所有碰撞弹性。

## 5. 自己选择关系 {#practice}

<section class="lesson-check" markdown="1">

### 保持墙面方向约定 {#scaffold-wall}

**Scaffold (self-written):** A 0.5 kg particle approaches a fixed wall at 4 m s⁻¹. Positive is away from the wall, and $e=0.75$. Find signed velocities and the wall's impulse on the particle.

先给入射速度加方向符号，再判断末速度与冲量。

<details markdown="1"><summary>提示</summary>

入射带符号速度为负；先由恢复系数求向外末速度，再对粒子用冲量关系。

</details>

<details markdown="1"><summary>解答与回补</summary>

$$\begin{aligned}u_{\rm signed}&=-4\ \mathrm{m\,s^{-1}},\\v&=0.75(4)=3\ \mathrm{m\,s^{-1}},\\J&=0.5(3-(-4))\\&=3.5\ \mathrm{N\,s}.\end{aligned}$$

正冲量背离墙面，反弹速率低于 4 m s⁻¹，符合条件。若把两个速率直接相减，回看[墙面模型](#wall-model)，再做[墙面重试](#retry-wall)。

</details>

</section>

<section class="lesson-check" markdown="1">

### 构图并解读 {#practice-area}

**Independent task (self-written):** A 2 kg particle on a rail initially has velocity +1 m s⁻¹. A powered actuator supplies the net force whose force–time graph joins (0 s,0 N), (1 s,4 N), (3 s,−4 N), (4 s,0 N) by straight segments. Draw and label the graph, find the total impulse and final velocity, and find when the velocity is greatest. Does a change in force sign imply a reversal of motion?

自行按数据作带单位的图，求冲量与末速度，判断速度何时最大，并解释力变号与运动方向之间的关系。

<details markdown="1"><summary>提示</summary>

先找零点并分开带符号面积。由加速度符号判断速度极值，再检查那里的速度。

</details>

<details markdown="1"><summary>解答与回补</summary>

$$\begin{aligned}t_{\rm interior\ zero}&=2\ \mathrm s,\\J_+&=2+2=4\ \mathrm{N\,s},\\J_-&=-2-2=-4\ \mathrm{N\,s},\\J&=0,\qquad v(4)=1\ \mathrm{m\,s^{-1}},\\v(2)&=1+4/2=3\ \mathrm{m\,s^{-1}}.\end{aligned}$$

图经过给定顶点，并在 (2,0) 过轴。速度先增加，到两秒后减少，所以最大值为两秒时的 3 m s⁻¹；全过程在 1 至 3 m s⁻¹ 之间，没有反向。总冲量为零只表示初末动量相同，不表示中间速度恒定。

若把负面积按正数相加，回看[带符号面积](#signed-area)，再做[面积重试](#retry-area)。若把力为零等同于速度为零，重新求该时刻的动量。

</details>

</section>

<section class="lesson-check" markdown="1">

### 两个运动物体 {#practice-pair}

**Independent task (self-written):** A is to the left of B on a smooth horizontal line. Their masses are 1 kg and 2 kg, and their initial velocities are +4 and −1 m s⁻¹, respectively. They collide with negligible external impulse and $e=1/2$. Choose a system and draw signed before/after arrows. Find both final velocities, each contact impulse and the kinetic-energy loss. Check approach, separation and physical reasonableness.

独立选择系统，画碰前碰后的带符号箭头；给出速度、冲量与动能变化，并核对碰撞条件。

<details markdown="1"><summary>提示</summary>

全程保持同一正方向。求末速度时看 A+B 整体，求各自冲量时再看单个粒子。

</details>

<details markdown="1"><summary>解答与回补</summary>

$$\begin{aligned}v_A+2v_B&=4-2=2,\\v_B-v_A&=\tfrac12(4-(-1))=\tfrac52,\\v_A&=-1\ \mathrm{m\,s^{-1}},\\v_B&=\tfrac32\ \mathrm{m\,s^{-1}},\end{aligned}$$

$$\begin{aligned}J_A&=1(-1-4)=-5\ \mathrm{N\,s},\\J_B&=2(\tfrac32+1)=5\ \mathrm{N\,s},\end{aligned}$$

$$\begin{aligned}K_{\rm before}&=9\ \mathrm J,\end{aligned}$$

$$\begin{aligned}K_{\rm after}&=\tfrac12+\tfrac94=\tfrac{11}4\ \mathrm J,\\K_{\rm loss}&=\tfrac{25}4\ \mathrm J.\end{aligned}$$

碰后 A 箭头向左，B 向右；碰前接近速率为 5 m s⁻¹，碰后分离速率为 2.5 m s⁻¹。初末总动量均为 2 kg m s⁻¹，冲量抵消且动能不增加。A 反向可以成立，不能擅自要求两个末速度都为正。

若方向或系统出错，回看[完整碰撞示范](#two-particles)，再做[两粒子重试](#retry-pair)。

</details>

</section>

<section class="lesson-check" markdown="1">

### 入射速率未知的接触 {#practice-wall}

**Independent task (self-written):** A 1 kg particle approaches a fixed wall with speed u. Positive is away from the wall. The net contact force is $F(t)=12t(1-t)$ N for $0\le t\le1$ s; other impulse is negligible. Assume a conventional restitution model $0\le e\le1$ and nonnegative outward velocity immediately after contact. Find the impulse, express the final signed velocity and e in terms of u, and find the physically permitted range of u. Explain which boundaries correspond to no rebound and an elastic impact.

同时使用给定的力、速度方向和常规碰撞条件，求出速率范围并解释端点。

<details markdown="1"><summary>提示</summary>

初速度为 −u。先积分，再同时施加向外末速度非负与恢复系数区间条件。

</details>

<details markdown="1"><summary>解答与回补</summary>

$$\begin{aligned}J&=\int_0^1(12t-12t^2)\,dt\\&=[6t^2-4t^3]_0^1=2\ \mathrm{N\,s}.\end{aligned}$$

$$\begin{aligned}v&=2-u,\\e&=\frac{2-u}{u},\quad u>0,\\0\le2-u&\le u,\\1\le u&\le2\ \mathrm{m\,s^{-1}}.\end{aligned}$$

因为 u>0，双重不等式对所有允许的 u 都与常规条件等价：左边给出 u≤2，右边给出 u≥1。反过来，区间内每个 u 都满足两项条件，因此这个范围对题设的冲量／恢复系数端点模型也充分。

在 $u=2$ 时，v 为零且 $e=0$，没有立即反弹；在 $u=1$ 时，$v=u$ 且 $e=1$，为弹性碰撞。要求严格正反弹须排除 $u=2$。这些端点条件没有规定完整变形／接触过程；仅凭力脉冲、没有碰撞假设，不能推出此范围。

若只得一个边界，回看[墙面不等式](#wall-model)，再做[墙面重试](#retry-wall)。

</details>

</section>

## 6. 回补并重试 {#retry}

按错误选择重试，重新画图，保持前面的解答关闭。

<section class="lesson-check" markdown="1">

### 另一段力的过程 {#retry-area}

**Retry (self-written):** A 1 kg particle initially has velocity +2 m s⁻¹. Its net force graph consists of straight segments joining (0 s,−2 N), (2 s,2 N), (3 s,0 N). Draw it, find the signed impulse and final velocity, and explain why the total geometric area is not the impulse.

重新构图并解释面积符号，不照搬上一题的零点或面积。

<details markdown="1"><summary>提示</summary>

第一段中途过轴，要在过轴处分开面积。

</details>

<details markdown="1"><summary>解答与回补</summary>

$$\begin{aligned}t_{\rm crossing}&=1\ \mathrm s,\\J_-&=-1\ \mathrm{N\,s},\\J_+&=1+1=2\ \mathrm{N\,s},\\J&=1\ \mathrm{N\,s},\\v&=2+1=3\ \mathrm{m\,s^{-1}}.\end{aligned}$$

不带符号面积共 3 N s，但轴下部分必须扣除。若仍全相加，在第一秒标出负加速度箭头，再回看[带符号面积](#signed-area)。

</details>

</section>

<section class="lesson-check" markdown="1">

### 核对另一对粒子 {#retry-pair}

**Retry (self-written):** A of mass 3 kg is left of B of mass 1 kg on a smooth horizontal line. Initial velocities are +2 and 0 m s⁻¹. External impulse is negligible and $e=1/3$. Draw signed before/after arrows and find final velocities, contact impulses and kinetic-energy loss.

保持方向与系统明确，核对全部结果而非只解两个速度。

<details markdown="1"><summary>提示</summary>

初总动量为正；碰后分离速率是碰前接近速率的三分之一。

</details>

<details markdown="1"><summary>解答与回补</summary>

$$\begin{aligned}3v_A+v_B&=6,\\v_B-v_A&=\tfrac23,\\v_A&=\tfrac43\ \mathrm{m\,s^{-1}},\\v_B&=2\ \mathrm{m\,s^{-1}},\end{aligned}$$

$$\begin{aligned}J_A&=3(\tfrac43-2)=-2\ \mathrm{N\,s},\\J_B&=2\ \mathrm{N\,s},\end{aligned}$$

$$\begin{aligned}K_{\rm after}&=\tfrac83+2=\tfrac{14}3\ \mathrm J,\\K_{\rm loss}&=6-\tfrac{14}3=\tfrac43\ \mathrm J.\end{aligned}$$

两个末速度箭头都向右，且 B 更快；总动量为 6，两个冲量抵消。若符号仍错，从箭头图重建[恢复系数关系](#collision-model)，不要只背公式。

</details>

</section>

<section class="lesson-check" markdown="1">

### 判断两种冲量声明 {#retry-wall}

**Retry (self-written):** A 2 kg particle approaches a fixed wall at 3 m s⁻¹. Positive is away from the wall and other impulse is negligible. One measurement gives a wall impulse of +9 N s. Find final velocity and e. Would an impulse of +3 N s instead describe a completed conventional impact with nonnegative outward final velocity? Justify both decisions. For the same mass and approach speed, determine the full range of signed wall impulses compatible with a completed conventional impact and nonnegative outward final velocity. Explain both boundary cases.

对两种测量结果分别作有依据的判断，再求同样质量与入射速率下完整常规碰撞所允许的全部带符号墙面冲量，并解释边界。

<details markdown="1"><summary>提示</summary>

两种情况初速度都为负；若得到负末速度，要解释其物理含义。

</details>

<details markdown="1"><summary>解答与回补</summary>

$$\begin{aligned}2(v+3)&=9,\\v&=1.5\ \mathrm{m\,s^{-1}},\\e&=\tfrac12,\\2(v+3)&=3,\\v&=-1.5\ \mathrm{m\,s^{-1}}.\end{aligned}$$

第一种满足反弹和常规恢复系数区间；第二种仍朝墙运动，不能表示题设已经完成且末速度向外非负的碰撞。它可能属于更早的某个时刻，但那是另一个时间区间。若把它当反弹，回看[墙面模型](#wall-model)。

$$\begin{aligned}J&=2(v+3),\\0&\le v\le3\ \mathrm{m\,s^{-1}},\\6\ \mathrm{N\,s}&\le J\le12\ \mathrm{N\,s}.\end{aligned}$$

两个不等式缺一不可：向外末速度非负给下界，e≤1 所要求的 v≤3 给上界。质量为正，所以这些条件与整个冲量区间等价。J=6 N s 时 v=0、e=0；J=12 N s 时 v=3 m s⁻¹、e=1。更大的冲量会使反弹速率超过入射速率，不符合常规模型。

</details>

</section>

<section class="lesson-check" markdown="1">

### 恢复系数为零的端点 {#retry-zero}

**Retry (self-written):** Two equal 1 kg masses collide on a line with initial velocities 2 and 0 m s⁻¹, negligible external impulse and $e=0$. Find final velocities and kinetic-energy loss. Must they stay attached forever?

求碰后瞬时状态，并区分它与之后长期运动的结论。

<details markdown="1"><summary>提示</summary>

把相同末速度与总动量守恒联立。永久黏合还需要额外物理条件。

</details>

<details markdown="1"><summary>解答与回补</summary>

$$\begin{aligned}v_A&=v_B,\quad v_A+v_B=2,\\v_A&=v_B=1\ \mathrm{m\,s^{-1}},\end{aligned}$$

$$\begin{aligned}K_{\rm before}&=2\ \mathrm J,\quad K_{\rm after}=1\ \mathrm J,\\K_{\rm loss}&=1\ \mathrm J.\end{aligned}$$

这里只能推出紧接碰后速度相同，不能单凭此认定永久黏合。若误用了弹性动能守恒，对照[碰撞模型](#collision-model)中的 e=0 与 e=1。

</details>

</section>

## 延后回顾 {#later-review}

另一次学习后回来，收起本页示范。下面两个过程的系统边界和方向约定不同，先分别画图再选关系。

<section class="lesson-check" markdown="1">

### 分析两个过程 {#review-task}

**Later review (self-written):** A and B, each of mass 1 kg, move on a smooth horizontal line with A initially left of B. Their initial velocities are +4 and 0 m s⁻¹ and their collision has $e=1/2$ with negligible external impulse. Find their final velocities and the kinetic-energy loss. In a separate subsequent experiment B approaches a fixed smooth wall normally at the speed it had just after this collision. Now take positive away from the wall. The wall force rises linearly from zero at 0 s to peak H at 0.2 s, then falls linearly to zero at 0.4 s; other impulse is negligible. Sketch both processes. Find the range of the positive peak force H for a completed conventional impact with nonnegative outward final velocity, and identify the boundary cases.

分别处理两粒子碰撞和另一次墙面接触，明确第二过程重新规定正方向；作图，求峰值力范围并解释端点。

<details markdown="1"><summary>提示</summary>

先由两粒子碰撞求 B 的速率，再按新轴给入射速度加符号。三角形力过程决定冲量，完整常规碰撞还要满足额外条件。

</details>

<details markdown="1"><summary>解答与回补</summary>

$$\begin{aligned}v_A+v_B&=4,\quad v_B-v_A=2,\\v_A&=1\ \mathrm{m\,s^{-1}},\\v_B&=3\ \mathrm{m\,s^{-1}},\\K_{\rm loss}&=8-5=3\ \mathrm J.\end{aligned}$$

墙面实验中，用 h 表示 H 以牛顿计的数值。B 在新轴下的初速度为 −3 m s⁻¹。力图是底边 0.4 s、高为 H 的三角形，因此

$$\begin{aligned}J&=\tfrac12(0.4)h=\tfrac h5\ \mathrm{N\,s},\\v&=\tfrac h5-3\ \mathrm{m\,s^{-1}},\\e&=\tfrac h{15}-1,\\0\le\tfrac h5-3&\le3,\\15\le h&\le30.\end{aligned}$$

所以 H 在 15 至 30 N 之间，包含端点。15 N 时 v=0、e=0；30 N 时 v=3 m s⁻¹、e=1。区间内每个峰值都满足端点模型；若严格反弹则排除 15 N。不能把第一过程的正方向直接套用到第二过程，使入射速度也误写成正数。

系统或方向错则重试[两粒子](#retry-pair)或[墙面](#retry-wall)；面积错则重试[力图](#retry-area)。最后返回[量纲页的延后回顾](/zh/alevel/as-further-mathematics/dimensions/#later-review)，判断另一种冲量捷径是否成立。

</details>

</section>

## 下一步 {#next-step}

不回看正文，解释动量何时守恒、面积为什么要带符号，以及恢复系数区间为冲量计算增加了什么约束。记录错误属于系统、符号还是模型条件，做对应重试，之后再回做综合题。回到[课程路线](/zh/alevel/as-further-mathematics/#learning-route)选择下一学习主题。

## 来源与范围 {#sources}

范围为 OxfordAQA 9665 v5.2、FM1.3，不迁移到 9765。实际读过下列原题及配套评分材料，用于核对模型和作答证据；本页题目与检查点为自拟。

- [Current 9665 qualification page](https://www.oxfordaqa.com/qualification/international-as-and-a-level-further-mathematics-9665/) and [9665 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf), FM1.3.
- FM02 June 2024 Q11(a)(b), Q12(a)(b): [QP pp.21–23](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-question-paper.pdf#page=21), [Final MS pp.18–20](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-mark-scheme.pdf#page=18).

[上一课](/zh/alevel/as-further-mathematics/dimensions/) · [课程路线](/zh/alevel/as-further-mathematics/#learning-route)
