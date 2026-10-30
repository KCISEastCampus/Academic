---
title: 电场
layout: subjects
mathjax: true
grade: a2
subject: a2-physics
lang: zh-CN
translation_of: /alevel/a2-physics/electric-fields/
permalink: /zh/alevel/a2-physics/electric-fields/
toc_headings: h2, h3, h4
study_page: true
---

[A2 物理](/zh/alevel/a2-physics/) · PH03 · 3.8.1–3.8.3 电场

计算电力、场强与电势，叠加电场，并解释带电粒子在平行板间的运动。题干、公式保留英文形式，中文解释方法与答案；图中保留英文标签。

- **学习：**从[电力与场强](#force-and-field-strength)开始，再区分[电势与势能](#potential-and-potential-energy)。
- **作业帮助：**分别画场与力的箭头，能量计算保留电荷符号，距离全部换成米。
- **复习：**关闭提示和解答，先做[练习](#practice)。

**开始前：**复习[引力场与卫星](/zh/alevel/a2-physics/gravitational-fields-and-satellites/)及 AS 匀加速方程。除非另有说明，使用 $\varepsilon_0=8.85\times10^{-12}\,\mathrm{F\,m^{-1}}$、$k=1/(4\pi\varepsilon_0)\approx8.99\times10^9\,\mathrm{N\,m^2\,C^{-2}}$、$e=1.60\times10^{-19}\,\mathrm C$、电子质量 $m_e=9.11\times10^{-31}\,\mathrm{kg}$ 与 $g=9.81\,\mathrm{m\,s^{-2}}$。$Q$ 表示源电荷，$q$ 表示小试探电荷。中间计算保留额外位数。

例题与练习 1–5 为自拟题；练习 6–8 改编自 OxfordAQA PH03 试卷，题干已简化，未赋予官方分值。图示不按比例绘制。电容在下一课学习。

## 电力与场强 {#force-and-field-strength}

**先想一想：**在电场同一点放入正电荷和电子，两者受力方向相同吗？

<details markdown="1">
<summary>核对你的解释</summary>

不同。场的方向按正试探电荷受力定义，电子带负电，受力与场方向相反。

</details>

某点的**电场强度（electric field strength）**是单位正试探电荷在该点所受的力。它是矢量，单位为 $\mathrm{N\,C^{-1}}$ 或 $\mathrm{V\,m^{-1}}$。

任意小试探电荷的受力为：

$$\boxed{\mathbf F=q\mathbf E}.$$

$q>0$ 时受力沿场，$q<0$ 时逆场；力的大小为 $\lvert q\rvert E$，其中 $E$ 为场强大小。试探电荷应足够小，不显著改变源电荷分布。

**库仑定律（Coulomb's law）**给出真空中两个点电荷之间的力，其大小为：

$$\boxed{F=\frac{\lvert Q_1Q_2\rvert }{4\pi\varepsilon_0r^2}=\frac{k\lvert Q_1Q_2\rvert }{r^2}}.$$

$r$ 为电荷间距。同号相斥、异号相吸；无论电荷大小是否相同，相互作用力都等大反向。此类计算通常可将空气视为真空。

**电场线（field lines）**表示正试探电荷受力方向，切线给出该点场方向。场线从正电荷出发、指向负电荷，互不相交；同一规范绘制的图中，场线越密，场越强。孤立点电荷的场线呈径向；宽大异号平行板之间，远离边缘时近似平行且等间距。

<img src="/assets/img/physics-electric-fields.svg" alt="等量异号电荷间场线从正指负；等量正电荷周围场线向外弯曲，中点合场为零" width="400" height="560" data-lazy-ignore="true">

### 例题 1：点电荷间的力 {#example-1-force-between-point-charges}

Point charges $+3.0\,\mathrm{nC}$ and $-8.0\,\mathrm{nC}$ are separated by $60\,\mathrm{mm}$. Find the force magnitude and state whether it is attractive or repulsive.

$$r=0.060\,\mathrm m.$$

$$F=\frac{k(3.0\times10^{-9})(8.0\times10^{-9})}{(0.060)^2}.$$

$$\boxed{F=6.0\times10^{-5}\,\mathrm N}.$$

两电荷异号，因此相互**吸引**，各自被拉向另一电荷。这里用电荷大小算力的大小，再单独说明方向。

**常见错误：**没有规定坐标轴，就报告负的力大小。大小非负；电荷符号决定吸引还是排斥。

## 电势与势能 {#potential-and-potential-energy}

某点的**绝对电势（absolute electric potential）**$V$，是外力将小正试探电荷从无穷远移到该点、动能不变时，单位正电荷对应的外力功。取无穷远 $V=0$。

电势是**标量**，单位为伏特，$1\,\mathrm V=1\,\mathrm{J\,C^{-1}}$。两点电势之差为电势差，$\Delta V=V_2-V_1$。

对孤立点电荷：

$$\boxed{V=\frac{Q}{4\pi\varepsilon_0r}=\frac{kQ}{r}}.$$

保留源电荷符号：$V$ 对正源为正、负源为负。电势没有方向；负电势表示低于所选零点，并非指向源的箭头。

向外为正时，径向场强分量为：

$$E_r=\frac{kQ}{r^2}.$$

场强**大小**为 $k\lvert Q\rvert /r^2$。负源的 $E_r<0$ 表示场指向内。

这些公式也适用于球对称带电球的外部，$r$ 从球心量起；不能用于导体球内部。静电平衡时导体内部场为零、电势恒定，却不一定为零。附近电荷可改变导体表面电荷分布及外部场形状。

小试探电荷 $q$ 的**电势能（electric potential energy）**为：

$$\boxed{E_p=qV}.$$

$q$ 与 $V$ 的符号都要保留。正电势处的电子势能为负。两个孤立点电荷相互作用势能为 $kQ_1Q_2/r$，同号为正、异号为负，以无限远分离为零点。

在两点间移动时：

$$\boxed{\Delta E_p=q(V_2-V_1)=q\Delta V}.$$

**电场力做功**等于 $-\Delta E_p$；动能不变时外力功等于 $\Delta E_p$。若只有电场力做功：

$$\boxed{\Delta E_k=-q\Delta V}.$$

静止释放的正电荷向较低电势加速，负电荷向较高电势加速；仅受电力时，两者均损失势能、获得动能。

### 例题 2：场、电势与电子 {#example-2-field-potential-and-an-electron}

A point is $0.10\,\mathrm m$ from an isolated charge of $+4.0\,\mathrm{nC}$. Find the field-strength magnitude and potential there. Then find the force and potential energy of an electron at that point.

$$E=\frac{k(4.0\times10^{-9})}{(0.10)^2}.$$

$$\boxed{E=3.6\times10^3\,\mathrm{N\,C^{-1}}}.$$

电场方向**背离**正源电荷。

$$V=\frac{k(4.0\times10^{-9})}{0.10}\approx\boxed{+3.6\times10^2\,\mathrm V}.$$

电子满足 $q=-e$，其受力大小为：

$$F=eE\approx\boxed{5.8\times10^{-16}\,\mathrm N}.$$

电子受力**指向**源，与电场相反；其势能为：

$$E_p=(-e)V\approx\boxed{-5.8\times10^{-17}\,\mathrm J}.$$

**检查：**源决定场与电势；电子的电荷决定其受力与势能，并不会将场本身反向。

## 图像与等势面 {#graphs-and-equipotentials}

点电荷场强大小按 $1/r^2$ 变化，电势按 $1/r$ 变化并保留源电荷符号，两者在无穷远趋零。正源的 $V$ 随 $r$ 增大而下降至零；负源则从零下方上升至零。

<img src="/assets/img/physics-electric-graphs.svg" alt="正负点电荷的有符号径向场强与电势图；场强大小与距离平方成反比，电势与距离成反比，远处均趋零" width="400" height="560" data-lazy-ignore="true">

沿坐标 $x$ 规定正方向后，场分量为**电势的负梯度**：

$$\boxed{E_x=-\frac{\mathrm dV}{\mathrm dx}}.$$

曲线某点用切线求斜率，$V/x$ 并非斜率。近似匀强场的小范围可用 $E_x\approx-\Delta V/\Delta x$。

$E_x$ 对 $x$ 图的有符号面积等于电势变化的**负值**：

$$\Delta V=-\int_{x_1}^{x_2}E_x\,\mathrm dx.$$

匀强场中为 $\Delta V=-E_x\Delta x$，再乘 $q$ 才得到势能变化；没有电荷因子，场图面积不能直接给能量。

**等势面（equipotential）**上电势恒定，固定电荷沿其移动时电势与势能不变，电场力不做功。场线垂直于等势面。孤立点电荷周围为同心球面，截面画为圆；理想平行板间为平行于极板的平面。相同电势差下，等势面越密，电场越强。

**常见错误：**把等势面当成场强为零的区域。电势沿面不变，但在垂直方向仍可改变。

## 电场与电势的叠加 {#combining-fields-and-potentials}

场强按**矢量**相加，考虑方向；电势按**标量**相加，保留符号。先求场，再用 $\mathbf F=q\mathbf E$ 求试探电荷受力。

两个等量正电荷中点：场相消，正电势相加。等量异号电荷中点：电势相消，场同向相加。因此，**场为零不意味着电势为零，电势为零也不意味着场为零**。

### 例题 3：互相垂直的电场 {#example-3-fields-at-right-angles}

Take right as $+x$ and up as $+y$. A $+2.0\,\mathrm{nC}$ source is $0.10\,\mathrm m$ to the left of point P. A $-3.0\,\mathrm{nC}$ source is $0.10\,\mathrm m$ above P. Find the resultant field and potential at P.

正源产生向右的场，负源产生向上、指向该源的场：

$$E_x=1.798\times10^3\,\mathrm{N\,C^{-1}}.$$

$$E_y=2.697\times10^3\,\mathrm{N\,C^{-1}}.$$

用勾股定理求大小：

$$E=\sqrt{E_x^2+E_y^2}\approx\boxed{3.2\times10^3\,\mathrm{N\,C^{-1}}}.$$

$$\theta=\tan^{-1}\left(\frac{E_y}{E_x}\right)\approx\boxed{56^\circ}.$$

场方向为正轴上方 $56^\circ$，该轴为 $x$ 方向。电势则按符号相加：

$$\begin{aligned}
V&=\frac{k(2.0\times10^{-9})}{0.10}\\
&\quad+\frac{k(-3.0\times10^{-9})}{0.10}.
\end{aligned}$$

$$\boxed{V=-90\,\mathrm V}.$$

负电势不意味着合场向下或向左；场的矢量方向由源的位置与电荷符号确定。

## 平行板间的匀强场 {#uniform-fields-between-plates}

宽大平行板间远离边缘处，场近似均匀，大小与方向恒定；垂直于极板，从正板指向负板。边缘附近场线弯曲，匀强近似变差。

令 $U=V_{\text{high}}-V_{\text{low}}>0$ 为间距 $d$ 的两板之间的电势差大小，则：

$$\boxed{E=\frac{U}{d}}.$$

教材也写成 $E=V/d$，其中 $V$ 表示板间电势差大小。这里改用 $U$，以区别某点电势 $V$ 和粒子路径上的有符号电势变化 $\Delta V$。

**推导：**小正电荷 $q$ 沿场从高势板移到低势板，电场力做功 $Fd=qEd$，势能减少 $qU$，因此 $qEd=qU$，得到 $E=U/d$。

若 $x$ 从高势板向低势板增加，电势图为斜率 $-U/d$ 的直线。沿电场方向电势降低。

### 例题 4：电子由静止加速 {#example-4-an-electron-accelerated-from-rest}

Parallel plates are $20\,\mathrm{mm}$ apart with potential difference magnitude $250\,\mathrm V$. An electron starts from rest just inside the lower-potential plate and reaches the higher-potential plate. Ignore gravity and other energy transfers. Find the field strength, force magnitude, kinetic energy gain and final speed.

$$E=\frac{250}{0.020}=\boxed{1.25\times10^4\,\mathrm{V\,m^{-1}}}.$$

$$F=eE=\boxed{2.00\times10^{-15}\,\mathrm N}.$$

电子受力指向高势板。对其运动有 $\Delta V=+250\,\mathrm V$、$q=-e$：

$$\Delta E_k=-(-e)(250).$$

$$\boxed{\Delta E_k=4.00\times10^{-17}\,\mathrm J}.$$

$$\frac12m_ev^2=eU.$$

$$v=\sqrt{\frac{2eU}{m_e}}\approx\boxed{9.37\times10^6\,\mathrm{m\,s^{-1}}}.$$

**检查：**电子虽移向高电势，因带负电，动能仍增加。此处用非相对论模型，适用于速率远低于光速的情况。

## 横向穿过匀强场 {#motion-across-a-uniform-field}

带电粒子以水平速率 $u$ 进入水平板间，初速度与电场垂直。忽略重力、空气阻力和粒子间作用，取 $+y$ 向上。

- 水平电力为零，水平速度保持 $u$。
- 竖直力 $F_y=qE_y$ 恒定，因此竖直加速度为 $a_y=qE_y/m$。
- 初始 $v_y=0$，所以 $x=ut$、$y=\tfrac12a_yt^2$、$v_y=a_yt$。

场区水平长度为 $L$ 时：

$$\boxed{t=\frac{L}{u}}.$$

$$\boxed{y=\frac{qE_yL^2}{2mu^2}}.$$

消去时间得 $y=qE_yx^2/(2mu^2)$，场内轨迹为**抛物线**。$y$ 的符号给出偏转方向。离场后若无其他力，则沿切线直线运动。场内水平速率保持 $u$，但获得竖直速度后，总速率通常增大。

<img src="/assets/img/physics-electric-plates.svg" alt="电场从上方正板向下方负板；水平射入的电子向上偏转，离场后沿切线直线运动；正电荷受力向下" width="400" height="620" data-lazy-ignore="true">

### 例题 5：电子偏转 {#example-5-electron-deflection}

An electron enters horizontally midway between plates with speed $2.0\times10^7\,\mathrm{m\,s^{-1}}$. The plates are $0.040\,\mathrm m$ long and $0.020\,\mathrm m$ apart, with potential difference magnitude $100\,\mathrm V$. The upper plate is positive. Find the deflection and direction of motion as the electron leaves the field.

场向下，因此 $E_y=-U/d=-5.0\times10^3\,\mathrm{V\,m^{-1}}$。负电子向上加速：

$$a_y=\frac{(-e)(-5.0\times10^3)}{m_e}.$$

$$a_y=+8.78\times10^{14}\,\mathrm{m\,s^{-2}}.$$

穿越时间由水平速度决定：

$$t=\frac{0.040}{2.0\times10^7}=2.0\times10^{-9}\,\mathrm s.$$

$$y=\frac12a_yt^2\approx\boxed{+1.8\,\mathrm{mm}}.$$

该偏转小于半板间距 $10\,\mathrm{mm}$，所以本模型中电子不会撞上极板。

$$v_y=a_yt\approx1.76\times10^6\,\mathrm{m\,s^{-1}}.$$

$$\theta=\tan^{-1}\left(\frac{v_y}{u}\right)\approx\boxed{5.0^\circ}.$$

离场方向为水平上方 $5.0^\circ$；计算角度时使用未取整值。

**检查：**动能增加 $m_ev_y^2/2$。向上移动使 $\Delta V=Ey>0$，电子势能减少 $eEy$，两种结果一致。

**常见错误：**用变化的总速率求穿越时间、假设总速率不变，或把完整板间距当成粒子竖直位移。

## 电场与引力场的比较 {#comparing-electric-and-gravitational-fields}

两种场都可隔空施力，点源满足平方反比关系；场强为矢量、势为标量，场线垂直等势面，场为势的负梯度。

| 特征 | 引力场 | 电场 |
|---|---|---|
| 小物体受力 | $\mathbf F=m\mathbf g$ | $\mathbf F=q\mathbf E$ |
| 势能变化 | $m\Delta V$ | $q\Delta V$ |
| 源的属性 | 质量 | 电荷 |
| 相互作用 | 吸引 | 吸引或排斥 |
| 孤立源的势 | 以无穷远为零时为负 | 与源电荷同号 |

### 例题 6：电子与质子之间的力 {#example-6-forces-between-an-electron-and-a-proton}

Compare the magnitudes of the electric and gravitational forces between an electron and a proton at separation $r$. Use $G=6.67\times10^{-11}\,\mathrm{N\,m^2\,kg^{-2}}$ and proton mass $m_p=1.67\times10^{-27}\,\mathrm{kg}$.

$$F_{\text{electric}}=\frac{ke^2}{r^2}.$$

$$F_{\text{gravity}}=\frac{Gm_em_p}{r^2}.$$

求比值时，距离消去：

$$\frac{F_{\text{electric}}}{F_{\text{gravity}}}=\frac{ke^2}{Gm_em_p}.$$

$$\boxed{\frac{F_{\text{electric}}}{F_{\text{gravity}}}=2.3\times10^{39}}.$$

两种力在这里都为吸引力，但电力大得多。比值无量纲，在点粒子模型中与 $r$ 无关。中子增加核质量却不增加电荷，不能给中子赋予 $+e$ 电荷。

## 练习 {#practice}

写方程、代入、单位和所需方向。电势及能量计算保留电荷符号。

### 练习 1：改变间距 {#question-1-changing-the-separation}

Two point charges have force magnitude $F$ at separation $r$. Both charge magnitudes are doubled and their separation becomes $3r$. Find the new force in terms of $F$. If force magnitude is plotted against $1/r^2$ for fixed charges, what does the gradient represent?

<details markdown="1">
<summary>提示</summary>

分别处理电荷乘积和距离平方的倍数变化。

</details>

<details markdown="1">
<summary>解答</summary>

$$\boxed{F_{\text{new}}=\frac49F}.$$

电荷大小乘积变为四倍，$r^2$ 变为九倍。固定电荷时 $F=k\lvert Q_1Q_2\rvert (1/r^2)$，图线过原点，斜率为 $k\lvert Q_1Q_2\rvert $。

</details>

### 练习 2：同号电荷之间的零场点 {#question-2-zero-field-between-like-charges}

Two positive point charges, $+Q$ and $+4Q$, are separated by distance $d$. Find the point between them where the resultant field is zero. Find its potential in terms of $k$, $Q$ and $d$.

<details markdown="1">
<summary>提示</summary>

令 $x$ 为距 $+Q$ 的距离。源之间场反向，势相加。

</details>

<details markdown="1">
<summary>解答</summary>

$$\frac{kQ}{x^2}=\frac{4kQ}{(d-x)^2}.$$

源之间距离为正，故 $d-x=2x$，得到 $\boxed{x=d/3}$，靠近较小电荷。

$$V=\frac{kQ}{d/3}+\frac{4kQ}{2d/3}.$$

$$\boxed{V=\frac{9kQ}{d}}.$$

场为零，但电势为正。

</details>

### 练习 3：异号电荷之间的零电势 {#question-3-zero-potential-between-unlike-charges}

Point charges $+Q$ and $-Q$ are separated by distance $2a$. Find the potential and field-strength magnitude at their midpoint. State the force direction on an electron there.

<details markdown="1">
<summary>提示</summary>

中点的两个电势异号；先分别画出各源的场箭头，再叠加。

</details>

<details markdown="1">
<summary>解答</summary>

$$V=\frac{kQ}{a}-\frac{kQ}{a}=\boxed{0}.$$

两场都从正源指向负源：

$$\boxed{E=\frac{2kQ}{a^2}}.$$

电子受力逆场、朝正源。该点电子势能为零，但受力不为零。

</details>

### 练习 4：斜率、面积与能量 {#question-4-gradient-area-and-energy}

*自拟题；教学示意图，不是实验数据。*

The upper graph shows the potential of a fixed negative point source, with zero potential at infinity. Positive radial direction is outwards. A small test charge does not disturb the source.

1. Draw a tangent at P, at $r=0.20\,\mathrm m$, and estimate the signed radial field component. Sketch the signed field against radius and relate its area from $0.10\,\mathrm m$ to $0.30\,\mathrm m$ to the potential change.
2. A $+3.0\,\mathrm{nC}$ test charge moves from $0.10\,\mathrm m$ to $0.30\,\mathrm m$. Use graph readings to find its potential-energy change and the work done by the field.
3. The lower panel shows equipotential circles for the same source. Draw a field arrow through A, explain what the spacing says about field strength, and find the work done by the field when the same charge moves from A to B. Does this imply zero field at A?

<img src="/assets/img/physics-electric-practice.svg" alt="上图为负源电荷的电势随径向距离变化，P 点位于 0.20 m。下图为标记 −100 V、−200 V、−300 V 的同心等势线，A、B 都在 −200 V 圆周上；场方向箭头留待补画。" width="520" height="920" data-lazy-ignore="true">

<details markdown="1">
<summary>提示</summary>

使用 $E_r=-\mathrm dV/\mathrm dr$ 与 $\Delta E_p=q\Delta V$。场线与等势线垂直；等电势差之间的间距可用于比较场强。

</details>

<details markdown="1">
<summary>解答与再尝试</summary>

P 点电势切线斜率为正，约为 $+9.0\times10^2\,\mathrm{V\,m^{-1}}$。因此：

$$\boxed{E_r\approx-9.0\times10^2\,\mathrm{N\,C^{-1}}}.$$

方向向内。合理切线给出的大小约 0.8–1.0 千牛每库仑可接受。场强草图位于零线下方，小半径处更负，随半径增大趋近零；其大小按距离平方反比减小。

图中约有 $V(0.10)=-360\,\mathrm V$、$V(0.30)=-120\,\mathrm V$：

$$\Delta V\approx+240\,\mathrm V,\qquad \int_{0.10}^{0.30}E_r\,\mathrm dr=-\Delta V\approx-240\,\mathrm V.$$

$$\Delta E_p\approx(3.0\times10^{-9})(240)=\boxed{+7.2\times10^{-7}\,\mathrm J}.$$

$$W_{\text{field}}=-\Delta E_p\approx\boxed{-7.2\times10^{-7}\,\mathrm J}.$$

电荷逆着向内的力移动；若动能不变，外界须供能。通过 A 画径向向内、垂直于圆的箭头。每级均相差 100 V，靠近源处间距更小，说明场更强；比较间距前必须先核对电势差。

A、B 均为 $-200\,\mathrm V$，所以 $\Delta V=0$，两点之间电场做功为零。A 处电场不为零：沿圆的切向移动与力垂直。零功不能证明零力。

**再尝试：**将测试电荷改为等量负电荷，电势与电场不变，势能变化和电场做功反号。

</details>

### 练习 5：板间粒子束 {#question-5-a-beam-between-plates}

An electron enters horizontally at $1.5\times10^7\,\mathrm{m\,s^{-1}}$ midway between plates. Their separation is $0.020\,\mathrm m$ and their length is $0.030\,\mathrm m$. The uniform field is $2.0\times10^3\,\mathrm{V\,m^{-1}}$ downwards. Find the time in the field and the upward deflection at exit. State the path inside and outside the field.

<details markdown="1">
<summary>提示</summary>

水平速度不变；电子竖直加速度与场方向相反。

</details>

<details markdown="1">
<summary>解答</summary>

$$t=\frac{0.030}{1.5\times10^7}=\boxed{2.0\times10^{-9}\,\mathrm s}.$$

$$a_y=\frac{e(2.0\times10^3)}{m_e}.$$

$$y=\frac12a_yt^2\approx\boxed{+0.70\,\mathrm{mm}}.$$

小于 $d/2=10\,\mathrm{mm}$，电子可不撞板而离开。场内为抛物线，场外若无其他力则为切线直线。场内只有水平速率恒定。

</details>

### 练习 6：加入一个中子 {#question-6-adding-a-neutron}

**改编自 OxfordAQA PH03, January 2020, Question 16.**

A deuterium nucleus contains one proton and one neutron. Take its mass as $3.34\times10^{-27}\,\mathrm{kg}$ and its charge as $+e$. Find the ratio of the electric force magnitude to the gravitational force magnitude on an electron at distance $r$. Use $G=6.67\times10^{-11}\,\mathrm{N\,m^2\,kg^{-2}}$.

<details markdown="1">
<summary>提示</summary>

对比例题 6：核质量改变，但电荷仍是 $+e$。

</details>

<details markdown="1">
<summary>解答</summary>

$$\frac{F_{\text{electric}}}{F_{\text{gravity}}}=\frac{ke^2}{Gm_e(3.34\times10^{-27})}.$$

$$\boxed{\frac{F_{\text{electric}}}{F_{\text{gravity}}}=1.1\times10^{39}}.$$

核质量约为质子的两倍，引力约加倍，电力不变；比值约为电子—质子情况的一半，与 $r$ 无关。

</details>

### 练习 7：静止油滴 {#question-7-a-stationary-oil-drop}

**改编自 OxfordAQA PH03, June 2024, Question 4.**

An oil drop of mass $m$ is stationary between horizontal parallel plates. The upper plate is positive. Their potential difference magnitude is $U$ and their separation is $d$. Ignore forces due to air.

1. Show that its charge is $q=-mgd/U$, explaining the sign with a force balance.
2. For $U=16\,\mathrm V$, $d=1.5\,\mathrm{mm}$ and $q=-4.8\times10^{-19}\,\mathrm C$, point X is $1.5\,\mathrm{\mu m}$ directly below the drop's centre, well outside its surface and away from plate edges. Find the resultant field at X, including the plate field and the drop's field. Treat the drop's field as that of a point charge and ignore redistribution of charge on the plates.
3. Suggest two changes that can each make the drop accelerate downwards, keeping its mass unchanged.

<details markdown="1">
<summary>提示</summary>

板间场向下，但油滴电力必须向上。X 处分别画负油滴的场和极板的场。

</details>

<details markdown="1">
<summary>解答</summary>

取向下为正。重力为 $+mg$，板间场为 $E=U/d>0$。平衡要求：

$$mg+q\frac{U}{d}=0.$$

$$\boxed{q=-\frac{mgd}{U}}.$$

符号来自受力平衡：为平衡重力，电力必须逆向下的场，所以油滴带负电。只说“带负电”不算解释符号。受力平衡用极板场，油滴不会对自身产生净力。

X 处极板场向下：

$$E_{\text{plates}}=\frac{16}{1.5\times10^{-3}}.$$

$$E_{\text{plates}}=1.07\times10^4\,\mathrm{V\,m^{-1}}.$$

负油滴的场**向上**、指向油滴，大小为：

$$E_{\text{drop}}=\frac{k(4.8\times10^{-19})}{(1.5\times10^{-6})^2}.$$

$$E_{\text{drop}}=1.92\times10^3\,\mathrm{V\,m^{-1}}.$$

方向相反，故大小相减：

$$E_{\text{resultant}}=E_{\text{plates}}-E_{\text{drop}}.$$

$$\boxed{E_{\text{resultant}}=8.7\times10^3\,\mathrm{V\,m^{-1}}}.$$

合场**向下**。计算油滴场的距离是 $1.5\,\mathrm{\mu m}$，不是 X 到极板的距离。

可减小 $U$ 而固定 $d$，或增大 $d$ 而固定 $U$；两者均使向上电力小于重力，油滴向下加速。质量不变时，减小负电荷的大小也可。

</details>

### 练习 8：等势面上交换位置 {#question-8-exchanging-positions-on-an-equipotential}

**改编自 OxfordAQA PH03, June 2024, Question 18.**

Small test charges $+3.0\,\mathrm{\mu C}$ and $-3.0\,\mathrm{\mu C}$ occupy two positions on the same equipotential surface of $25\,\mathrm{kV}$. Ignore their effect on the source field and their mutual interaction. Find each charge's potential energy in this external field. What is the net work done by the external field when their positions are exchanged? Must the field strength on that surface be zero?

<details markdown="1">
<summary>提示</summary>

每个电荷的初末电势相同，要区分势能的值与势能变化。

</details>

<details markdown="1">
<summary>解答</summary>

正电荷：

$$E_p=(3.0\times10^{-6})(25\times10^3).$$

$$\boxed{E_p=+0.075\,\mathrm J}.$$

负电荷有 $\boxed{E_p=-0.075\,\mathrm J}$。交换位置时，各自 $\Delta V=0$，因此各自 $\Delta E_p=q\Delta V=0$；外部电场总功为 $\boxed{0\,\mathrm J}$。原因是各电荷初末电势相同，而非两电荷符号抵消。

场不一定为零。场可垂直于等势面，电势沿该垂直方向变化。

</details>

## 速查 {#quick-reference}

| 物理量 | 方程与适用条件 |
|---|---|
| 库仑力大小 | $F=\dfrac{k\lvert Q_1Q_2\rvert }{r^2}$；真空中的点电荷 |
| 试探电荷受力 | $\mathbf F=q\mathbf E$；$q<0$ 时逆场 |
| 径向场分量 | $E_r=\dfrac{kQ}{r^2}$；向外为正 |
| 点电荷电势 | $V=\dfrac{kQ}{r}$；无穷远为零 |
| 势能 | $E_p=qV$；保留两者符号 |
| 势能变化 | $\Delta E_p=q\Delta V$ |
| 电场力做功 | $W_{\text{field}}=-q\Delta V$ |
| 由电势求场分量 | $E_x=-\dfrac{\mathrm dV}{\mathrm dx}$ |
| 匀强场大小 | $E=\dfrac{U}{d}$；$U$ 为板间电势差大小 |
| 穿越时间 | $t=\dfrac{L}{u}$；水平速度恒定 |
| 匀强场偏转 | $y=\dfrac{qE_yL^2}{2mu^2}$；初始 $v_y=0$，无其他力 |

继续之前，检查能否区分场与力方向、保留能量计算的电荷符号、正确叠加场与势、使用切线和面积，并解释偏转时为何只有水平速度不变。

[下一课：电容](/zh/alevel/a2-physics/capacitance/) · [上一课：引力场与卫星](/zh/alevel/a2-physics/gravitational-fields-and-satellites/) · [课程目录](/zh/alevel/a2-physics/) · [PH03 速查](/zh/alevel/a2-physics/quick-reference/)

<details markdown="1">
<summary>来源与试题表述</summary>

本课依据 [OxfordAQA 物理大纲](https://www.oxfordaqa.com/wp-content/uploads/2022/08/oxfordaqa-a-level-physics-specification.pdf) 3.8.1–3.8.3，包含亚原子粒子间力的比较、匀强场推导、轨迹、势梯度与场图面积。3.8.4 电容留到下一课。

教材参考：Jim Breithaupt，*Oxford International AQA Examinations: International A Level Physics*，第 18 章，印刷页 317–338。$U$ 表示电势差大小，以区别有符号的 $\Delta V$；$Q$ 和 $q$ 区分源与试探电荷。教学安排参考教师 AS 讲义。

练习 6–8 改编自 PH03 January 2020 Q16、June 2024 Q4 和 Q18。英文原页说明编写时参考过官方评分标准；油滴几何和假设已明确写出，不依赖原试卷图。数值和方向经独立推导检查，未直接照抄教材答案。

</details>

{% include exam_topic_practice.html %}
