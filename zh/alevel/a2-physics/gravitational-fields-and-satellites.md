---
title: 引力场与卫星
layout: subjects
mathjax: true
grade: a2
subject: a2-physics
lang: zh-CN
translation_of: /alevel/a2-physics/gravitational-fields-and-satellites/
permalink: /zh/alevel/a2-physics/gravitational-fields-and-satellites/
toc_headings: h2, h3, h4
study_page: true
---

[A2 物理](/zh/alevel/a2-physics/) · PH03 · 3.7.1–3.7.4 引力场与卫星

描述引力场、计算势能变化、读取场的图像，并解释卫星的速率、周期和能量。题干与公式保留英文形式，讲解、提示和解答使用中文；图中保留英文标签。

- **学习：**从[引力与场强](#force-and-field-strength)开始，再联系[势与势能](#potential-and-potential-energy)及[圆轨道](#circular-orbits)。
- **作业帮助：**画受力，从行星中心量距离，区分场强、势和势能。
- **复习：**关闭提示和解答，先做[练习](#practice)。

**开始前：**复习[圆周运动](/zh/alevel/a2-physics/circular-motion/)及 [AS 物理](/alevel/as-physics/)的能量守恒。除非另有说明，使用 $G=6.67\times10^{-11}\,\mathrm{N\,m^2\,kg^{-2}}$、地球质量 $M=5.97\times10^{24}\,\mathrm{kg}$、地球半径 $R=6.37\times10^6\,\mathrm m$。千米换成米，中间计算保留额外位数。

例题和练习 1–6 为自拟题；练习 7–8 改编自 OxfordAQA PH03 试卷，题干已经简化，未赋予官方分值。图示不按比例绘制。

## 引力与场强 {#force-and-field-strength}

**先想一想：**卫星离地面 $400\,\mathrm{km}$，万有引力定律中应直接代入 $400\,\mathrm{km}$ 吗？

<details markdown="1">
<summary>核对你的解释</summary>

不应。距离从地球中心量起，使用 $r=R+h$；$R$ 是地球半径，$h$ 是离地面高度。

</details>

**万有引力定律（Newton's law of gravitation）：**任意两个质点相互吸引，力的大小与质量乘积成正比，与距离平方成反比：

$$\boxed{F=\frac{GMm}{r^2}}.$$

该式给出力的**大小**，方向指向另一质量。即使两物体质量差异很大，相互作用力仍等大反向；加速度却不一定相等。

质点模型中 $r$ 是两质点间距。球对称行星与其外部小物体之间，应使用从行星中心量起的距离。这些外部场公式不描述行星内部。

某点的**引力场强（gravitational field strength）**，是该点小试探物体所受引力与其质量之比：

$$\boxed{g=\frac{F}{m}=\frac{GM}{r^2}}.$$

场强是**矢量**。$GM/r^2$ 给出大小，方向指向源质量，单位 $\mathrm{N\,kg^{-1}}$，等价于 $\mathrm{m\,s^{-2}}$。仅受引力时，自由落体的加速度等于合引力场强。

不要混淆万有引力常量 $G$ 与随位置变化的 $g$。$r$ 加倍，场强变为四分之一；改变试探质量会改变受力，不改变场强。

<img src="/assets/img/physics-gravity-field.svg" alt="径向引力场线指向球形行星并垂直于等势面；另图区分行星半径 R、离地高度 h 和距中心距离 r" width="400" height="640" data-lazy-ignore="true">

### 例题 1：地球上空的场强 {#example-1-field-strength-above-earth}

A satellite has mass $500\,\mathrm{kg}$ and is $400\,\mathrm{km}$ above Earth's surface. Find the field strength and gravitational force there.

先求到地球中心的距离：

$$r=R+h=6.37\times10^6+4.00\times10^5.$$

$$r=6.77\times10^6\,\mathrm m.$$

$$g=\frac{GM}{r^2}\approx\boxed{8.69\,\mathrm{N\,kg^{-1}}}.$$

$$F=mg\approx\boxed{4.34\times10^3\,\mathrm N}.$$

场和力都指向地心。卫星仍受显著引力；宇航员与飞船一起自由下落，在理想模型中没有支撑接触力，所以可能感到失重。

**常见错误：**认为轨道上引力为零，或在任何高度都使用地表的 $g$。

## 引力势与势能 {#potential-and-potential-energy}

某点的**引力势（gravitational potential）**$V$，是外力将小试探质量从无穷远移到该点、动能不变时，单位质量所对应的外力功。选择无穷远处 $V=0$。

对质点，或球对称行星外部：

$$\boxed{V=-\frac{GM}{r}}.$$

引力势是**标量**，单位 $\mathrm{J\,kg^{-1}}$。孤立正质量附近的有限距离处为负：引力吸引物体，把它移到无穷远需要外力做正功；反过来从无穷远缓慢移入，外力做负功。

**引力势能（gravitational potential energy）**是由引力场中位置决定的能量。试探质量为 $m$ 时：

$$\boxed{E_p=mV=-\frac{GMm}{r}}.$$

势描述场本身，势能还依赖试探质量。不能把势的单位写为焦耳，也不能把势能单位写为 $\mathrm{J\,kg^{-1}}$。

从位置 1 移到位置 2：

$$\boxed{\Delta E_p=m(V_2-V_1)}.$$

动能不变时，外力功等于 $\Delta E_p$，**引力功**等于 $-\Delta E_p$。若速率变化，还要计入 $\Delta E_k$；无其他能量转移时，外力功等于 $\Delta E_k+\Delta E_p$。

远离孤立行星，$V$ 与 $E_p$ 都**负得更少**，因此增大。近地表 $g$ 近似恒定时有 $\Delta E_p\approx mg\Delta h$；高度变化较大则使用 $m\Delta V$。

### 例题 2：提升载荷 {#example-2-lifting-a-payload}

A $500\,\mathrm{kg}$ payload moves from Earth's surface to a height of $400\,\mathrm{km}$, with no change in kinetic energy. Ignore Earth's rotation and air resistance. Find the work done by an external agent.

$$V_1=-\frac{GM}{R}\approx-6.25\times10^7\,\mathrm{J\,kg^{-1}}.$$

$$V_2=-\frac{GM}{R+h}\approx-5.88\times10^7\,\mathrm{J\,kg^{-1}}.$$

用未取整值求差：

$$W_{\text{external}}=\Delta E_p.$$

$$\Delta E_p=GMm\left(\frac{1}{R}-\frac{1}{R+h}\right).$$

$$\boxed{W_{\text{external}}=1.85\times10^9\,\mathrm J}.$$

引力做功 $-1.85\times10^9\,\mathrm J$。这里没有计入让载荷获得轨道速率所需的能量，因此不是送入轨道的全部能量。

**检查：**势从较负值变为较不负值，即势增大，所需外力功为正。

## 图像、等势面与叠加场 {#graphs-equipotentials-and-combined-fields}

孤立球形行星外部，$g$ 的**大小**按 $1/r^2$ 变化，随 $r$ 增大趋于零。势按 $-1/r$ 变化，图线位于零下方并趋向零。

<img src="/assets/img/physics-gravity-graphs.svg" alt="行星外部的场强大小随距离平方反比衰减；负引力势趋向零；圆轨道动能为正，势能与总能量为负" width="400" height="720" data-lazy-ignore="true">

场是势的**负梯度**。取向外为正，径向分量为：

$$\boxed{g_r=-\frac{\mathrm dV}{\mathrm dr}}.$$

曲线某点的斜率要用该点**切线**求，$V/r$ 不是斜率。因为 $V$ 向外增大，其斜率为正，$g_r$ 为负，表示场向内；大小为 $GM/r^2$。

对固定试探质量的势能图：

$$F_r=-\frac{\mathrm dE_p}{\mathrm dr},\qquad g_r=\frac{F_r}{m}.$$

场强大小对 $r$ 图在两半径之间的面积，给出向外移动时的势增加量；乘以试探质量才是势能增加量。

**等势面（equipotential）**上势相同，沿其移动不改变势或势能，引力不做功。场线与等势面垂直。孤立球形行星周围为同心球面，截面画为圆。相同势差下，等势面越密，场越强。近地表小范围内可近似为匀强场、水平等势平面。

### 例题 3：读取势的梯度 {#example-3-reading-a-potential-gradient}

At a point on a $V$–$r$ graph, a tangent rises by $1.0\times10^7\,\mathrm{J\,kg^{-1}}$ over an outward distance of $2.0\times10^6\,\mathrm m$. Find the field strength there.

$$\frac{\Delta V}{\Delta r}=\frac{1.0\times10^7}{2.0\times10^6}=5.0\,\mathrm{N\,kg^{-1}}.$$

场强为 $\boxed{5.0\,\mathrm{N\,kg^{-1}}}$，**向内**。向外取正时 $g_r=-5.0\,\mathrm{N\,kg^{-1}}$。计算斜率的两点必须在切线上，不能随意取曲线上相距很远的两点。

### 多个源质量 {#more-than-one-source-mass}

场强按**矢量**叠加，要考虑方向；势按**标量**叠加，要保留符号。

两个孤立质量之间，场方向相反，存在大小相等、合场为零的位置；质量不等时，该点靠近较小质量。但两个势都为负，合势并不为零。

**核对解释：**沿两质量连线的势最大处，斜率为零，因此沿线合场为零；由对称性，横向分量也为零。但势本身不为零。试探物体沿连线略偏离便会加速远离，故沿线是不稳定平衡。

## 圆轨道 {#circular-orbits}

小卫星绕球形行星做圆周运动，且仅受引力时，引力提供所需向心力：

$$\frac{GMm}{r^2}=\frac{mv^2}{r}.$$

约去卫星质量并整理：

$$\boxed{v=\sqrt{\frac{GM}{r}}}.$$

由圆周长求周期：

$$T=\frac{2\pi r}{v}.$$

$$\boxed{T=2\pi\sqrt{\frac{r^3}{GM}}}.$$

$$\boxed{T^2=\frac{4\pi^2}{GM}r^3}.$$

绕**同一中心质量**的圆轨道满足 $T^2\propto r^3$。$T^2$ 对 $r^3$ 图为过原点直线，斜率为 $4\pi^2/(GM)$。该模型假设卫星质量远小于行星，其速率和周期不依赖卫星质量。

圆轨道越大，**速率越低、周期越长**。不能把此速率式套到任意受推进力的飞船，或椭圆轨道的每一点。

### 例题 4：低轨道速率与周期 {#example-4-speed-and-period-in-low-orbit}

Find the speed and period of the satellite $400\,\mathrm{km}$ above Earth from Example 1.

$$v=\sqrt{\frac{GM}{6.77\times10^6}}.$$

$$\boxed{v=7.67\times10^3\,\mathrm{m\,s^{-1}}}.$$

$$T=\frac{2\pi(6.77\times10^6)}{v}.$$

$$\boxed{T=5.55\times10^3\,\mathrm s\approx92.4\,\mathrm{min}}.$$

**检查：**$v^2/r=8.69\,\mathrm{m\,s^{-2}}$，等于例题 1 的场强。引力就是向内合力，不要再添加一个独立的“向心力”。

## 轨道能量 {#orbital-energy}

沿用相同的理想圆轨道模型：

$$E_k=\frac12mv^2=\frac{GMm}{2r}.$$

$$E_p=-\frac{GMm}{r}.$$

$$\boxed{E_{\text{total}}=E_k+E_p=-\frac{GMm}{2r}}.$$

动能为正，势能为负，总能量为负。势能大小是动能的两倍。孤立系统的总能量为负，意味着卫星必须获得能量才能到达无穷远。

比较两个圆轨道，增大 $r$ 会减小 $E_k$，但 $E_p$ 增加得更多，因此总能量**增加**、负得更少。进入更高圆轨道需要供能，尽管最终速率更低。转移路径不能处处使用圆轨道速率公式。

### 例题 5：转入更高圆轨道 {#example-5-moving-to-a-higher-circular-orbit}

A $500\,\mathrm{kg}$ satellite moves from a circular orbit $400\,\mathrm{km}$ above Earth to one $800\,\mathrm{km}$ above Earth. Find its net gain in mechanical energy, ignoring losses.

$$r_1=6.77\times10^6\,\mathrm m.$$

$$r_2=7.17\times10^6\,\mathrm m.$$

$$\Delta E_{\text{total}}=\frac{GMm}{2}\left(\frac{1}{r_1}-\frac{1}{r_2}\right).$$

$$\boxed{\Delta E_{\text{total}}=8.20\times10^8\,\mathrm J}.$$

变化为正：势能增加 $1.64\times10^9\,\mathrm J$，动能减少 $8.20\times10^8\,\mathrm J$。这是卫星机械能的净增加，不等于真实火箭的化学能消耗或燃料用量。

<details markdown="1">
<summary>能量拓展：逃逸速率</summary>

物体从距中心 $r$ 处发射，假设行星孤立、不自转、无后续推进或阻力，则临界逃逸条件是总机械能为零，在无穷远速率趋于零：

$$\frac12mv_{\text{escape}}^2-\frac{GMm}{r}=0.$$

$$v_{\text{escape}}=\sqrt{\frac{2GM}{r}}.$$

该值为同半径圆轨道速率的 $\sqrt2$ 倍，给定常量下地表约为 $11.2\,\mathrm{km\,s^{-1}}$。若其他天体引力不可忽略，应按实际路径使用叠加势与能量变化，不能直接套孤立行星公式。

</details>

## 地球同步与地球静止轨道 {#geosynchronous-and-geostationary-orbits}

**地球同步（geosynchronous）**卫星的周期与地球自转相同，但不一定停留在地面同一点上方。

**地球静止（geostationary）**卫星是一种特殊的同步卫星。要相对地面同一点保持不动，必须：

- 周期等于地球自转周期；
- 轨道为赤道平面内的圆；
- 运行方向与地球自转相同。

地面天线可用固定方向通信，适合通信和持续观测同一区域，但不能直接位于两极上空。低极地轨道则可随着地球在其下方转动而覆盖不同地区。

题目给定 $T=24\,\mathrm h=86400\,\mathrm s$ 时按此值计算。更精确地说应取恒星日，约 $86164\,\mathrm s$；一次计算中不要混用。见 [ESA 对轨道类型的解释](https://www.esa.int/Enabling_Support/Space_Transportation/Types_of_orbits)。

### 例题 6：轨道半径与高度 {#example-6-orbit-radius-and-height}

Using $T=86400\,\mathrm s$, find the radius and height of a geostationary orbit.

$$r^3=\frac{GMT^2}{4\pi^2}.$$

$$r=\left(\frac{GMT^2}{4\pi^2}\right)^{1/3}.$$

$$\boxed{r=4.22\times10^7\,\mathrm m}.$$

使用未取整的轨道半径减去地球半径：

$$h=r-R\approx\boxed{3.59\times10^7\,\mathrm m}.$$

半径约 $42200\,\mathrm{km}$，离地高度约 $35900\,\mathrm{km}$。把轨道半径当高度，便漏掉了地球自身的半径。

## 练习 {#practice}

写出方程、代入、单位和需要的方向；解释物理原因，而不只引用公式。

### 练习 1：距离与质量的改变 {#question-1-changing-distance-and-mass}

At distance $r$ from an isolated point mass, a test mass $m$ experiences force magnitude $F$, field-strength magnitude $g$ and potential $V$. It is replaced by mass $2m$ at distance $2r$. Give the new force, field strength, potential and potential energy in terms of the original values.

<details markdown="1">
<summary>提示</summary>

力和场强按 $1/r^2$ 变化，势按 $-1/r$ 变化。哪些量还依赖试探质量？

</details>

<details markdown="1">
<summary>解答</summary>

新引力为 $F/2$、场强为 $g/4$、势为 $V/2$。由于 $V$ 为负，$V/2$ 比 $V$ 负得更少。新势能 $(2m)(V/2)=mV$，等于原值。

源质量没有改变；试探质量不决定场强或势。

</details>

### 练习 2：两个吸引质量 {#question-2-two-attracting-masses}

Two small isolated masses, $4M$ and $M$, are separated by distance $d$. Find the point between them where the resultant gravitational field is zero. Is the potential there zero?

<details markdown="1">
<summary>提示</summary>

令 $x$ 为距 $4M$ 的距离，令场强大小相等，不是势相等。

</details>

<details markdown="1">
<summary>解答</summary>

两场方向相反：

$$\frac{4GM}{x^2}=\frac{GM}{(d-x)^2}.$$

两质量之间的距离均为正，所以 $x=2(d-x)$：

$$\boxed{x=\frac{2d}{3}}.$$

该点距较小质量 $d/3$。势按标量相加：

$$V=-\frac{4GM}{2d/3}-\frac{GM}{d/3}.$$

$$\boxed{V=-\frac{9GM}{d}}.$$

合场为零，但势仍为负。

</details>

### 练习 3：场、势与功 {#question-3-field-potential-and-work}

At distance $2R$ from Earth's centre, find the field strength and potential. How much external work is needed to move a $100\,\mathrm{kg}$ object slowly from there to infinity, without changing its kinetic energy?

<details markdown="1">
<summary>提示</summary>

各式代入 $r=2R$；最终势为零。

</details>

<details markdown="1">
<summary>解答</summary>

$$g=\frac{GM}{(2R)^2}\approx\boxed{2.45\,\mathrm{N\,kg^{-1}}}.$$

场指向地心。

$$V=-\frac{GM}{2R}\approx\boxed{-3.13\times10^7\,\mathrm{J\,kg^{-1}}}.$$

$$W_{\text{external}}=100(0-V).$$

$$\boxed{W_{\text{external}}=3.13\times10^9\,\mathrm J}.$$

克服引力需要正的外力功，不要把必须提供的能量写成负值。

</details>

### 练习 4：势能梯度 {#question-4-potential-energy-gradient}

A potential-energy graph for a $37\,\mathrm{kg}$ rock has a tangent gradient of $+1.4\,\mathrm{J\,m^{-1}}$ at a point. The positive direction is along increasing distance on the horizontal axis. Find the force component and the field-strength component. Explain what happens at a maximum of this graph along the line joining two source masses.

<details markdown="1">
<summary>提示</summary>

先由负斜率得到力，再除以岩石质量得到场强。

</details>

<details markdown="1">
<summary>解答</summary>

$$F=-1.4\,\mathrm N.$$

$$g=\frac{-1.4}{37}\approx\boxed{-0.038\,\mathrm{N\,kg^{-1}}}.$$

力和场均沿负方向。势能本身除以质量得到的是势，不是场强。

最大值处切线水平，两吸引力平衡、合场为零，势能仍可为负。沿连线的小位移使岩石远离这个不稳定平衡位置。

</details>

### 练习 5：比较圆轨道 {#question-5-comparing-circular-orbits}

Two satellites of the same mass orbit the same isolated planet in circular orbits. Satellite B has twice the orbit radius of satellite A. Give the ratios $v_B/v_A$, $T_B/T_A$, $E_{kB}/E_{kA}$ and $E_{\text{total},B}/E_{\text{total},A}$. Does B have greater or smaller total energy?

<details markdown="1">
<summary>提示</summary>

使用圆轨道公式中 $r$ 的幂次，并记住总能量为负。

</details>

<details markdown="1">
<summary>解答</summary>

$$\frac{v_B}{v_A}=\frac{1}{\sqrt2},\qquad\frac{T_B}{T_A}=2^{3/2}.$$

$$\frac{E_{kB}}{E_{kA}}=\frac12,\qquad\frac{E_{\text{total},B}}{E_{\text{total},A}}=\frac12.$$

B 的总能量**更大**：负值的一半负得更少。从 A 圆轨道转到 B 圆轨道需要供能，尽管最终速率更低。

</details>

### 练习 6：同步卫星 {#question-6-a-synchronous-satellite}

A satellite has the same period as Earth's rotation, but its circular orbit is inclined to the equator. Is it geosynchronous? Is it geostationary? Explain why a fixed ground antenna cannot always point at it.

<details markdown="1">
<summary>提示</summary>

周期相同只是一个条件。还需要什么，才能始终在同一地面点上方？

</details>

<details markdown="1">
<summary>解答</summary>

周期相同，因此是地球同步卫星；轨道不在赤道平面，因此不是地球静止卫星。轨道运动中南北位置变化，相对地面站的方向也会变化。

</details>

### 练习 7：仅地球引力不够时 {#question-7-when-earths-field-is-not-enough}

**Adapted from OxfordAQA PH03, January 2020, Question 4.**

The Moon's orbital period is $27.3$ days. A satellite at distance $4.5\times10^5\,\mathrm{km}$ from Earth's centre has the same angular speed. Calculate its angular speed, Earth's field strength there, and the centripetal acceleration required. Explain why Earth's gravity alone cannot give the stated circular motion.

<details markdown="1">
<summary>提示</summary>

天换成秒、千米换成米，再比较 $GM/r^2$ 与 $\omega^2r$。

</details>

<details markdown="1">
<summary>解答</summary>

$$T=27.3(86400)=2.35872\times10^6\,\mathrm s.$$

$$\omega=\frac{2\pi}{T}\approx\boxed{2.66\times10^{-6}\,\mathrm{rad\,s^{-1}}}.$$

$$r=4.5\times10^8\,\mathrm m.$$

$$g_{\text{Earth}}=\frac{GM}{r^2}.$$

$$\boxed{g_{\text{Earth}}=2.0\times10^{-3}\,\mathrm{N\,kg^{-1}}}.$$

$$a=\omega^2r\approx\boxed{3.2\times10^{-3}\,\mathrm{m\,s^{-2}}}.$$

所需向内加速度大于地球场强，只有地球引力不够。原来的地月系统中，卫星在地月连线上越过月球时，月球也提供向内引力。应使用**合场**，先检查假设再决定能否使用仅地球引力的圆轨道公式。

</details>

### 练习 8：地月之间的能量障碍 {#question-8-an-energy-barrier-between-moon-and-earth}

**Adapted from OxfordAQA PH03, June 2024, Question 3.** The maximum energy is supplied here instead of being read from the paper's graph.

A $37\,\mathrm{kg}$ rock moves from the Moon towards Earth along the line joining their centres. Its combined gravitational potential energy is $-1.4\times10^8\,\mathrm J$ at the launch point and reaches a maximum of $-4.8\times10^7\,\mathrm J$ between the bodies. Treat the bodies as fixed and ignore other forces. Explain why the energy is negative and why there is a maximum. Find the limiting minimum launch speed needed to reach the maximum.

<details markdown="1">
<summary>提示</summary>

使用叠加势能的增加量；临界情况在势能最大处动能为零。

</details>

<details markdown="1">
<summary>解答</summary>

无穷远势能为零。由于引力吸引，把岩石移到无穷远需要正功，因此有限位置的势能为负。

远离月球使月球贡献的势能增大，靠近地球使地球贡献的势能减小。最大值处两引力平衡、合场为零。

$$\begin{aligned}
\Delta E_p&=(-4.8\times10^7)\\
&\quad-(-1.4\times10^8).
\end{aligned}$$

$$\Delta E_p=9.2\times10^7\,\mathrm J.$$

$$\frac12mv^2=\Delta E_p.$$

$$v=\sqrt{\frac{2(9.2\times10^7)}{37}}.$$

$$\boxed{v=2.2\times10^3\,\mathrm{m\,s^{-1}}}.$$

略高于此临界速率，岩石便可越过势能最大处；之后地球引力更强，岩石向地球加速。因地球引力也有贡献，不能直接用孤立月球的逃逸速率公式。

</details>

## 速查 {#quick-reference}

| 物理量 | 方程与适用条件 |
|---|---|
| 引力大小 | $F=\dfrac{GMm}{r^2}$；质点或球形行星外部 |
| 场强大小 | $g=\dfrac{GM}{r^2}$；指向源质量 |
| 引力势 | $V=-\dfrac{GM}{r}$；无穷远为零 |
| 势能 | $E_p=mV$；依赖试探质量 |
| 势能变化 | $\Delta E_p=m\Delta V$ |
| 径向场分量 | $g_r=-\dfrac{\mathrm dV}{\mathrm dr}$；向外为正 |
| 圆轨道速率 | $v=\sqrt{\dfrac{GM}{r}}$；仅受引力 |
| 圆轨道周期 | $T=2\pi\sqrt{\dfrac{r^3}{GM}}$ |
| 圆轨道动能 | $E_k=\dfrac{GMm}{2r}$ |
| 圆轨道总能量 | $E_{\text{total}}=-\dfrac{GMm}{2r}$ |
| 轨道半径与高度 | $r=R+h$；$r$ 从中心量起 |

继续之前，检查能否区分 $g$、$V$、$E_p$，解释负势、读取切线斜率、推导轨道方程，并解释更高圆轨道为何速率更低却需要更多能量。

[下一课：电场](/zh/alevel/a2-physics/electric-fields/) · [上一课：简谐运动](/zh/alevel/a2-physics/simple-harmonic-motion/) · [课程目录](/zh/alevel/a2-physics/) · [PH03 速查](/zh/alevel/a2-physics/quick-reference/)

<details markdown="1">
<summary>来源与试题表述</summary>

本课依据 [OxfordAQA 物理大纲](https://www.oxfordaqa.com/wp-content/uploads/2022/08/oxfordaqa-a-level-physics-specification.pdf) 3.7.1–3.7.4，包含势梯度、场与势图像、圆轨道能量和同步轨道。

教材参考：Jim Breithaupt，*Oxford International AQA Examinations: International A Level Physics*，第 17 章，印刷页 297–316。定义与符号遵循原页的大纲、教材依据，明确功和方向约定；教学组织参考教师 AS 讲义。

练习 7–8 改编自 PH03 January 2020 Q4、June 2024 Q3。英文原页说明编写时参考过官方评分标准；练习 8 的势能最大值是评分标准认可范围内的代表值，并非本页重新从原图读数。答案经独立推导和检查，未直接照抄教材答案。

</details>
