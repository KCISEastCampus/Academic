---
title: 磁场与运动电荷
layout: subjects
mathjax: true
grade: a2
subject: a2-physics
lang: zh-CN
translation_of: /alevel/a2-physics/magnetic-fields-and-moving-charges/
permalink: /zh/alevel/a2-physics/magnetic-fields-and-moving-charges/
toc_headings: h2, h3, h4
study_page: true
---

[A2 物理](/zh/alevel/a2-physics/) · PH03 · 3.10.1–3.10.2

为什么磁场能使粒子轨迹弯曲，却不直接增加它的动能？本章先连接受力方向、圆周运动和装置，再选择方程。题干保留英文，讲解与反馈使用中文。

- **学习：**[电流与力](#current-and-field) → [运动电荷](#moving-charges) → [圆轨道](#circular-paths) → [速度选择](#velocity-selector)与[回旋加速器](#cyclotron)。
- **分析数据：**为[天平原始记录](#data-magnetic-balance)自己选择作图方法。
- **复习：**关闭提示和解答，先做[练习](#practice)。

**开始前：**回顾[径向合力](/zh/alevel/a2-physics/circular-motion/)与[电场力及功](/zh/alevel/a2-physics/electric-fields/)。使用 $e=1.60\times10^{-19}\,\mathrm C$、$m_e=9.11\times10^{-31}\,\mathrm{kg}$、$m_p=1.67\times10^{-27}\,\mathrm{kg}$ 和 $g=9.81\,\mathrm{m\,s^{-2}}$。本页 $q$ 表示带符号电荷，$\lvert q\rvert$ 为其大小，代入前先统一 SI 单位。

例题、原创示意图及天平记录为自拟材料；改编题的试卷和配套评分标准见[来源](#sources)，未设置官方分值。图示不按比例；除非另有说明，计算采用匀强场、垂直入射、碰撞及其他力可忽略、非相对论运动等条件。

## 电流、磁场与特斯拉 {#current-and-field}

**先想一想：**直导线中电流向右，磁场入纸面。电流反向时有什么变化？先确定研究对象是受力的导线；支架或磁体是另一个物体。

叉号表示**入纸面**，可想成箭尾；点号表示**出纸面**，可想成箭头朝向自己。两者都表示垂直于图面的方向。

直导线与匀强磁场垂直时，力的大小为：

$$\boxed{F=BIL}.$$

$L$ 是**磁场内部**的有效导线长度，$I$ 是常规电流，$B$ 是磁感应强度。特斯拉定义为：

$$1\,\mathrm T=1\,\mathrm{N\,A^{-1}\,m^{-1}}.$$

1 m 导线垂直于场、通过 1 A 电流时，若受力为 1 N，磁感应强度即为 1 T。垂直条件属于定义，不能省略。

使用**弗莱明左手定则（Fleming’s left-hand rule）**：食指沿磁场，中指沿常规电流，拇指沿受力。开头的情形受力向上。只反转电流或磁场，力反向；两者同时反转，力恢复原方向。电流与场平行时没有磁力，上式直接乘积适用于垂直情形。

<img src="/assets/img/physics-magnetic-wire.svg" alt="Worked model: current rightwards, field into the page, upward force on the independently supported wire and downward reaction on the magnet on a balance." width="520" height="440" data-lazy-ignore="true">

### 例题 1：有效长度与反作用力 {#example-1}

A wire has $0.060\,\mathrm m$ inside a $0.12\,\mathrm T$ field perpendicular to its $2.5\,\mathrm A$ current. The wire is fixed independently of the magnet. Find the magnetic force and the change in a tared balance reading beneath the magnet if the wire force is upwards.

本模型只计算处于场内的长度：

$$F=(0.12)(2.5)(0.060)=\boxed{0.018\,\mathrm N}.$$

磁体受到等大、向下的反作用力，天平示数增加：

$$\Delta m_{\mathrm{display}}=\frac{0.018}{9.81}\approx1.8\times10^{-3}\,\mathrm{kg}\approx\boxed{+1.8\,\mathrm g}.$$

这是显示的等效质量变化，不是磁体本身质量改变。作用反作用力作用于不同物体，不会在导线自己的受力图中抵消。

## 运动电荷：方向与能量 {#moving-charges}

粒子速度与场垂直时：

$$\boxed{F=B\lvert q\rvert v}.$$

正电荷的速度方向就是常规电流方向；负电荷则先把电流方向反转，再用左手定则。因此电子向右、磁场入纸面时，电子受力向下。本模型中静止电荷、理想中性粒子或沿场方向运动的电荷不受磁力。

磁力垂直于瞬时速度，对自由粒子不做功，因此仅有静磁场时动能与速率不变。速度仍可因**方向**变化而改变。这里讨论的是粒子的磁力；连接电源的电动机导线仍可由电源获得能量。

<details markdown="1">
<summary>核对解释</summary>

“不做功就没有加速度”不成立。垂直力改变方向，也就改变速度，即使速率恒定。不要在磁力之外再添加一个向心力。

</details>

## 圆轨道与电场加速 {#circular-paths}

在匀强 $B$ 中垂直入射，其他力可忽略时，磁力提供向内的合力：

$$B\lvert q\rvert v=\frac{mv^2}{r}\quad\Rightarrow\quad\boxed{r=\frac{mv}{B\lvert q\rvert}}.$$

先由方向确定圆心在哪一侧；这个大小关系本身不决定转向。场和电荷固定时，动量越大，半径越大。轨道周期为：

$$T=\frac{2\pi r}{v}=\boxed{\frac{2\pi m}{B\lvert q\rvert}}.$$

质量、电荷和场固定时，理想周期与速率无关。速率增大，圆周长也按相同比例增大。

### 例题 2：电子轨道 {#example-2}

An electron enters a $0.50\,\mathrm{mT}$ field at $2.0\times10^6\,\mathrm{m\,s^{-1}}$, perpendicular to the field. Calculate its radius and period. Explain whether it slows down in the ideal field.

先换算毫特斯拉，半径使用电荷大小：

$$r=\frac{(9.11\times10^{-31})(2.0\times10^6)}{(0.50\times10^{-3})(1.60\times10^{-19})}\approx\boxed{0.023\,\mathrm m}.$$

$$T=\frac{2\pi m_e}{Be}\approx\boxed{7.2\times10^{-8}\,\mathrm s}.$$

速率不变。半径为正，电子的负电荷改变转向。若存在碰撞或额外电场，就需调整模型。

入射速率可以由电场建立。粒子从静止跨越大小为 $U$ 的电势变化，极性使其加速且损失可忽略时：

$$\frac12mv^2=\lvert q\rvert U.$$

再与磁轨道关系结合：

$$\boxed{\frac{m}{\lvert q\rvert}=\frac{B^2r^2}{2U}}.$$

两个阶段使用不同原理：电场做功供给动能，随后磁力弯曲轨迹。电压不是速率；若初动能不能忽略，须计入能量平衡。

## 速度选择与质量分离 {#velocity-selector}

考虑正离子向右经过上正、下负的平行板。电场力向下，磁场 $B_s$ 入纸面时磁力向上。直行离子束满足：

$$\lvert q\rvert E=\lvert q\rvert vB_s\quad\Rightarrow\quad\boxed{v=\frac{E}{B_s}}.$$

非零电荷可约去，是因为两种力都正比于同一个电荷。还必须两力反向，只比较大小不够。在图示场方向下，较快正离子初始向上偏，较慢者向下偏。负离子的两力同时反向，但选出的速率不变。

<img src="/assets/img/physics-magnetic-selector.svg" alt="Worked schematic: a rightward positive-ion beam between positive upper and negative lower plates, with field into the page; a separate magnetic-only analyser returns semicircular paths to a detector on the entry line." width="520" height="740" data-lazy-ignore="true">

选出的离子可进入另一个没有电场的磁场 $B_a$。若走半圆回到入射直线，测得的返回距离是**直径** $2r$。速率、电荷相同时，半径正比于质量；两种同位素在探测器上的间距为：

$$\Delta s=2\Delta r=\frac{2v\Delta m}{B_a\lvert q\rvert}.$$

题目没有说明相等，就不能把 $B_a$ 换成 $B_s$。质量电荷比不同时，经相同电压加速的离子通常不会具有相同速率。

### 例题 3：选定速率 {#example-3}

A selector has $E=1.2\times10^4\,\mathrm{V\,m^{-1}}$ and $B_s=0.080\,\mathrm T$, arranged with opposite electric and magnetic forces. Find the selected speed. Does doubling the ion charge double that speed?

$$v=\frac{1.2\times10^4}{0.080}=\boxed{1.5\times10^5\,\mathrm{m\,s^{-1}}}.$$

同一速率下电荷加倍，两种力都加倍，所以抵消时的速率不变。这不表示后续分析场中的轨道半径相同。

## 回旋加速器：偏转与增能 {#cyclotron}

真空中的两个中空 D 形电极（dees）置于垂直于其平面的磁场中。每个 dee 内电场近似为零，磁力使粒子以恒定速率走半圆；跨间隙时电场对粒子做正功。每次加速跨隙后，速率与半径增大。单个 dee 内的轨迹是固定半径圆弧，不是半径连续增大的螺旋。

<img src="/assets/img/physics-cyclotron-model.svg" alt="Worked cyclotron schematic with two dees, an into-page magnetic field, two fixed-radius semicircular arcs and accelerating gap crossings. Dimensions are schematic." width="520" height="500" data-lazy-ignore="true">

由圆周运动得到半圈时间与驱动频率：

$$t_{\mathrm{half}}=\frac{\pi r}{v}=\frac{\pi m}{B\lvert q\rvert},\qquad f=\frac{B\lvert q\rvert}{2\pi m}.$$

间隙电压每半圈反向，使粒子沿相反方向进行下一次跨隙时仍被加速。质量、电荷和场固定时，半圈时间不随半径增大而变长，这使非相对论模型可以使用恒定驱动频率。每次加速跨过大小为 $U_g$ 的间隙电压，动能增加：

$$\Delta E_k=\lvert q\rvert U_g.$$

若最大可用半径为 $R$：

$$v_{\max}=\frac{B\lvert q\rvert R}{m},\qquad E_{k,\max}=\frac{B^2q^2R^2}{2m}.$$

应检查预测速率远小于光速。相对论同步修正和详细工程结构不属于本页范围。

## 数据探究：天平与导线 {#data-magnetic-balance}

*Self-written; constructed teaching records, not a completed practical.*

A magnet rests on a balance. A straight horizontal wire is fixed to a separate support; $L=0.040\,\mathrm m$ lies in the uniform field, directed into the page. Positive current is **to the left**. The balance is tared with zero current. Each mass-change reading has uncertainty ±0.01 g; take current and length uncertainties as negligible for this task.

| Current / A | Change in balance reading / g |
| --- | --- |
| 0 | 0.00 |
| 1 | -0.33 |
| 2 | -0.65 |
| 3 | -0.98 |
| 4 | -1.31 |
| 5 | -1.63 |

1. Draw separate force diagrams for wire and magnet. Explain the reading sign without saying that the magnet loses mass.
2. Choose and plot quantities that allow you to estimate $B$ from all the records. State the meaning and units of the gradient. Inspect the intercept and scatter before deciding whether to force a line through the origin.
3. A student uses the full wire length, $0.050\,\mathrm m$, instead of the in-field length. Predict the bias in the estimate. Suggest a check that repeating readings alone cannot replace.

<details markdown="1">
<summary>提示</summary>

先把克换为千克，再将示数变化与力联系。两个物体受等大反向的磁力。理想调零装置在零电流时变化为零，但仍要检查拟合截距及不确定度。

</details>

<details markdown="1">
<summary>分析与再尝试</summary>

电流向左、磁场入纸面，导线受力向下，磁体受到向上的反作用力。天平所需的向上支持力减小，调零后的等效质量示数为负。带符号的示数变化满足：

$$\Delta m_{\mathrm{display}}g=-BIL.$$

以显示的克数对安培作直线拟合，斜率为 $s\approx-0.3263\,\mathrm{g\,A^{-1}}$，截距约 $-0.0010\,\mathrm g$。将斜率换算：

$$B=-\frac{(s\times10^{-3})g}{L}\approx\boxed{0.080\,\mathrm T}.$$

所有残差均小于 0.004 g，与给定读数不确定度相容。近零截距与调零相容，却不能证明没有系统误差。可接受斜率范围应由不确定度条说明，而不是抄拟合的更多位数。

分母误用 0.050 m 时，估计值为适当值的 0.040/0.050 = 0.80，即偏低 20%。应检查实际场区和导线方向，重复读数不能修正错误的有效长度。真实实验须限制电源发热、读数间断电，并由教师检查低压装置。

**再尝试：**改为向右的电流，同时保留纵轴向上表示显示质量的正值。力的方向与示数斜率反转，推得的 $B$ 大小不变。

</details>

## 练习 {#practice}

计算前先确定场区、保持量与受力方向；解释题须把力或能量转移与观察到的变化连接起来。

### 练习 1：画力与轨迹 {#question-1}

*Self-written.*

Particles A, B and C enter the field shown with the same rightward velocity. A is positive, B negative and C neutral; A and B have equal masses and equal charge magnitudes. Copy the diagram, add the initial magnetic forces and sketch the subsequent paths. State what changes if the field is reversed.

<img src="/assets/img/physics-magnetic-track-task.svg" alt="Particles A positive, B negative and C neutral enter a uniform field out of the page with equal rightward velocity. Force arrows and later paths have not been drawn." width="520" height="410" data-lazy-ignore="true">

<details markdown="1">
<summary>提示</summary>

点号表示出纸面。先判断正电荷，再对负电荷反转受力。

</details>

<details markdown="1">
<summary>解答与再尝试</summary>

A 初始向下弯，B 向上弯，本模型中半径相等；C 直行。磁力始终垂直轨迹、指向各自圆心。反转场时 A、B 转向交换，半径大小及 C 的路径不变。**再尝试：**使 A 在进入前静止，静止时没有磁力。

</details>

### 练习 2：抬起导线 {#question-2}

*Adapted from OxfordAQA 9630 PH03 January 2020 Q27; QP p.37 and MS p.9 read. Numerical values and an open derivation replace the original options.*

A uniform wire of density $8.9\times10^3\,\mathrm{kg\,m^{-3}}$ and cross-sectional area $1.0\times10^{-6}\,\mathrm{m^2}$ rests on supports, lying horizontally left-to-right in the plane of the page. Its whole length is in a uniform $0.20\,\mathrm T$ field directed into the page. Choose the current direction so magnetic force is upwards. Derive the current needed for lift-off, calculate it and explain why the length cancels.

<details markdown="1">
<summary>提示</summary>

刚失去接触时支持力为零。用密度、横截面积与长度表示导线质量。

</details>

<details markdown="1">
<summary>解答与再尝试</summary>

常规电流须向右。刚离开支架时支持力为零：

$$BIL=\rho ALg\quad\Rightarrow\quad I=\frac{\rho Ag}{B}\approx\boxed{0.44\,\mathrm A}.$$

磁力与重力都正比于同一个完整长度。若只有部分导线在场中，不能这样约去。**再尝试：**密度与场不变，横截面积加倍，所需电流也加倍。

</details>

### 练习 3：反推粒子性质 {#question-3}

*Self-written.*

Positive ions start with negligible kinetic energy and are accelerated through $1000\,\mathrm V$. They then enter a separate uniform $0.20\,\mathrm T$ magnetic field at right angles, following a radius of $0.112\,\mathrm m$. Determine their mass-to-charge ratio. Can this determine mass alone? If each ion carries charge $+2e$, find its mass.

<details markdown="1">
<summary>提示</summary>

先由电场功建立速率关系，再对后续轨道写磁力。消去速率，不能把电压当速度。

</details>

<details markdown="1">
<summary>解答与再尝试</summary>

$$\frac{m}{\lvert q\rvert}=\frac{(0.20)^2(0.112)^2}{2(1000)}\approx\boxed{2.5\times10^{-7}\,\mathrm{kg\,C^{-1}}}.$$

单独求质量还需要电荷。若 $q=+2e$：

$$m=(2.5088\times10^{-7})(3.20\times10^{-19})\approx\boxed{8.0\times10^{-26}\,\mathrm{kg}}.$$

**再尝试：**加速电压不变，分析场加倍，入射速率不变、半径减半；将新的场与半径代入，质量电荷比不变。

</details>

### 练习 4：比较 α 与 β 轨迹 {#question-4}

*Adapted from OxfordAQA 9630 PH03 January 2020 Q28; QP p.38 and MS p.9 read. Open explanation and mass data replace the original diagram choices.*

An alpha particle and a beta-minus electron enter the same uniform field with the same non-relativistic velocity perpendicular to the field. Compare their turning directions and radius magnitudes. Use alpha mass $6.64\times10^{-27}\,\mathrm{kg}$ and charge $+2e$. Would “the alpha path has greater curvature because its charge is larger” be valid?

<details markdown="1">
<summary>提示</summary>

速率与场固定时，比较质量除以电荷大小；曲率是半径的倒数。

</details>

<details markdown="1">
<summary>解答与再尝试</summary>

两者电荷异号，因此转向相反。

$$\frac{r_\alpha}{r_\beta}=\frac{m_\alpha/(2e)}{m_e/e}=\frac{6.64\times10^{-27}}{2(9.11\times10^{-31})}\approx\boxed{3.6\times10^3}.$$

α 轨迹弯曲得少得多。质量的增加主导了比较，不能只看电荷。该判断与原选择题 B 一致。**再尝试：**改为等动量比较，固定量改变，此时 α 半径为电子的一半。

</details>

### 练习 5：两个磁场区域 {#question-5}

*Adapted from OxfordAQA 9630 PH03 Specimen 2019/V2.0 Q4.2–4.5; QP pp.10–11 and MS pp.8–9 read. The geometry is restated explicitly and the task is regrouped.*

A selector has $E=2.0\times10^4\,\mathrm{V\,m^{-1}}$ and $B_s=0.14\,\mathrm T$, with opposite electric and magnetic forces. Singly charged nickel ions pass into a magnetic-only analyser. Each makes a semicircle back to the entrance line. A nickel-58 ion returns $0.28\,\mathrm m$ from entry P. Take each nucleon mass as $1.7\times10^{-27}\,\mathrm{kg}$ and each ion charge as $+e$.

Determine the selected speed and explain its independence of ion charge. Find the analyser flux density and the detector separation for nickel-58 and nickel-60. State why the 0.28 m distance cannot be used directly as a radius.

<details markdown="1">
<summary>提示</summary>

先平衡选择器中的力，再使用分析场中的半径；两种同位素具有同一选定速率。中间数值保留额外位数。

</details>

<details markdown="1">
<summary>解答与再尝试</summary>

$$v=\frac{E}{B_s}=\frac{2.0\times10^4}{0.14}\approx\boxed{1.4\times10^5\,\mathrm{m\,s^{-1}}}.$$

两种力的大小都含同一个非零电荷，因此可约去。分析场中的返回距离为直径，所以 $r_{58}=0.14\,\mathrm m$，$m_{58}=58(1.7\times10^{-27})\,\mathrm{kg}$。

$$B_a=\frac{m_{58}v}{er_{58}}\approx\boxed{0.63\,\mathrm T}.$$

保留未舍入数值，并使用共同速率：

$$r_{60}=\frac{60}{58}r_{58},\qquad \Delta s=2(r_{60}-r_{58})\approx\boxed{9.7\times10^{-3}\,\mathrm m}.$$

结果与配套评分标准范围一致。把 0.28 m 当半径，会使推得的场减半。**再尝试：**选定速率不变，分析场加倍，两半径及探测器间距均减半。

</details>

### 练习 6：回旋加速器的计时与能量 {#question-6}

*Adapted from OxfordAQA 9630 PH03 January 2020 Q30; QP p.40 and MS p.9 read. Numerical timing and energy tasks are self-written additions.*

A proton cyclotron has uniform field $0.50\,\mathrm T$ and maximum usable radius $0.20\,\mathrm m$. Explain why a proton has acceleration but constant speed inside a dee, and why the gap voltage must reverse. Calculate the driving frequency. Starting with negligible kinetic energy, it makes 40 accelerating gap crossings, each through $1.0\,\mathrm{kV}$. Find its kinetic energy and radius after those crossings, and check whether it fits.

<details markdown="1">
<summary>提示</summary>

区分垂直于速度的磁力与间隙电场做功。驱动电压每整圈完成一周期，不是每半圈一周期。

</details>

<details markdown="1">
<summary>解答与再尝试</summary>

dee 内的磁力改变速度方向却不做功。每半圈后间隙电压须反转，使下一次跨隙仍增能；这与原 Q30 的 A 一致。

$$f=\frac{Be}{2\pi m_p}\approx\boxed{7.6\,\mathrm{MHz}}.$$

$$E_k=40e(1000)=\boxed{6.4\times10^{-15}\,\mathrm J}=40\,\mathrm{keV}.$$

$$v=\sqrt{\frac{2E_k}{m_p}}\approx2.8\times10^6\,\mathrm{m\,s^{-1}},\qquad r=\frac{m_pv}{Be}\approx\boxed{0.058\,\mathrm m}.$$

半径小于 0.20 m，速率也远小于光速。**再尝试：**跨隙次数仍为 40、场不变，将间隙电压加倍。动能加倍，速率与半径都变为原来的 $\sqrt2$，理想驱动频率不变。

</details>

### 练习 7：辨认保持量 {#question-7}

*Self-written.*

Two positive ions have the same charge; ion B has twice the mass of ion A. Each starts from rest and is accelerated through the same potential difference. They then enter the same magnetic-only analyser at right angles. Predict the ratios of their speeds, radii and orbital periods. Would both also pass unchanged through a selector set to transmit ion A at its original speed? Justify each comparison.

<details markdown="1">
<summary>提示</summary>

相同电压固定的是单位电荷所获能量，不固定速率或动量。

</details>

<details markdown="1">
<summary>解答与再尝试</summary>

$$\frac{v_B}{v_A}=\frac1{\sqrt2},\qquad \frac{r_B}{r_A}=\sqrt2,\qquad \frac{T_B}{T_A}=2.$$

相同电荷与电压给出相同动能。重离子更慢，但动量与半径更大。理想周期由质量电荷比决定，与速率无关。选择器按 A 的速率调节，B 的磁力与电场力不抵消，因此偏转。**再尝试：**若改为等速率，半径比变为 2，且可通过同一选择器；应说清改变了哪种制备条件。

</details>

## 速查 {#quick-reference}

| 模型 | 关系与条件 |
| --- | --- |
| 导线与场垂直 | $F=BIL$；使用场内有效长度 |
| 粒子与场垂直 | $F=B\lvert q\rvert v$；由电荷符号判断方向 |
| 仅磁场圆轨道 | $r=mv/(B\lvert q\rvert)$ |
| 整圈周期 | $T=2\pi m/(B\lvert q\rvert)$ |
| 从静止加速 | $E_k=\lvert q\rvert U$ |
| 交叉场两力反向 | 非零电荷直行时 $v=E/B_s$ |
| 回旋加速器驱动频率 | $f=B\lvert q\rvert/(2\pi m)$；非相对论 |
| 一次加速跨隙 | $\Delta E_k=\lvert q\rvert U_g$ |

继续前，先不看公式表，独立说明一条完整链：场与运动方向 → 实际受力 → 轨迹或功 → 某个条件改变后的预测。

[上一课：放射性衰变](/zh/alevel/a2-physics/radioactive-decay/) · [PH03 课程目录](/zh/alevel/a2-physics/) · [下一主题：电磁感应——速查笔记](/zh/alevel/a2-physics/quick-reference/#55-magnetic-flux)

## 来源与范围 {#sources}

范围为 OxfordAQA International A-level Physics 9630 PH03 的 3.10.1–3.10.2。2026-10-21 由[当前资格页](https://www.oxfordaqa.com/qualification/international-as-and-a-level-physics-9630/)进入[正文版本 4.4 的大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-international-as-and-a-level-physics-specification.pdf)，对应印刷第 25 页/PDF 第 24 页。回旋加速器是点名应用；速度选择器和同位素分析由样卷支持。磁通、感应、交流与变压器属于后续学习。

练习 2、4、6 分别使用 January 2020 PH03 Q27、Q28、Q30：[QP](https://drive.google.com/file/d/1u3DieTjGo7oCKuPMLpK01t1dBK72FlEO/view) 第 37–38/40 页与 [MS Version 1.0 Final](https://drive.google.com/file/d/191UedE9sWTca8lYxRcL0UBTkRDuI1lXl/view) 第 9 页已配对阅读，原选择题答案依次为 B、B、A。新增数值与推导任务为自拟扩展，未编造官方分值。

练习 5 改编自 OxfordAQA 9630 PH03 Specimen 2019/V2.0 Q4.2–4.5，已配对阅读 [QP](https://www.oxfordaqa.com/oaqaresources/science/assessment/9630-PH03-international-a-level-physics-specimen-paper-v4.2.pdf) 第 10–11 页和 [MS](https://www.oxfordaqa.com/oaqaresources/science/assessment/9630-PH03-international-a-level-physics-mark-scheme-v4.2.pdf) 第 8–9 页。题干和几何条件在此重新组织、明确，配图为原创示意。不能用文件名覆盖正文的 Specimen 2019/V2.0 身份。

教材辅助参考：Jim Breithaupt，*Oxford International AQA Examinations: International A Level Physics*，第 20 章 20.1–20.3，印刷第 357–366 页。天平活动为原创构造数据，借鉴 June 2024 PH03 Q16 的导线/磁体反作用情境（QP 第 31 页/MS 第 21 页），重新指定电流和读数方向。它不是研究变压器效率的 RP7，也不代表实际实验已完成。答案、方向和能量关系均独立核验。
