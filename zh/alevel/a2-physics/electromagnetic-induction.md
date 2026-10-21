---
title: 电磁感应
layout: subjects
mathjax: true
grade: a2
subject: a2-physics
lang: zh-CN
translation_of: /alevel/a2-physics/electromagnetic-induction/
permalink: /zh/alevel/a2-physics/electromagnetic-induction/
toc_headings: h2, h3, h4
study_page: true
---

[A2 物理](/zh/alevel/a2-physics/) · PH03 · 3.10.3–3.10.4

怎样的变化才会产生感应电动势？转移的能量从哪里来？先建立磁通模型，再连接图像、方向与能量平衡。

**开始前：**回顾[磁力与方向](/zh/alevel/a2-physics/magnetic-fields-and-moving-charges/)、面积、斜率与电功率。初学按顺序阅读；复习时可先尝试[练习](#practice)，保持解答关闭。

## 磁通不等于磁通链 {#flux-linkage}

对匀强磁场中的平面面积，先规定面积法线。$\theta$ 是**场与法线**的夹角，不是场与线圈平面的夹角：

$$\Phi=BA\cos\theta,\qquad \Psi=N\Phi=NBA\cos\theta.$$

$\Phi$ 是单匝磁通；$\Psi$ 是每匝都链过相同磁通时，$N$ 匝的磁通链。磁通单位为韦伯：$1\,\mathrm{Wb}=1\,\mathrm{T\,m^2}$。磁通链常记 Wb turns，匝数本身无量纲。若各匝磁通不同，应逐匝相加。

<img src="/assets/img/physics-flux-normal.svg" alt="Worked geometry: theta is measured from the area normal to the field. A separate edge-on view shows that field parallel to the coil plane gives zero flux." width="520" height="380" data-lazy-ignore="true">

场垂直线圈平面时磁通大小最大，平行平面时为零。反转所选法线会反转磁通符号，不会改变真实磁场。线圈整体在不变的匀强场内部平移，面积与方向不变，磁通链不变。

### 例题 1：求匝数 {#example-1}

*Adapted from OxfordAQA 9630 PH03 June 2024 Q6.1–6.2; QP p.19 and MS p.16 read. The angle convention is stated explicitly.*

A coil has $A=7.5\times10^{-4}\,\mathrm{m^2}$ and $B=4.2\times10^{-2}\,\mathrm T$. Its normal is $51^\circ$ to the field and its flux linkage is $2.4\times10^{-3}\,\mathrm{Wb}$ (turns dimensionless). Find the number of turns and explain why rotation can induce an emf even though field strength is constant.

$$N=\frac{2.4\times10^{-3}}{(4.2\times10^{-2})(7.5\times10^{-4})\cos51^\circ}\approx121.$$

匝数须为整数；按两位有效数字写 120 也合适。转动使角度变化，因而磁通链变化；变化率通过法拉第定律决定电动势。只报定律名称或抄公式，没有解释什么在变，因果链仍不完整。

## 法拉第定律：读取变化，而非图高 {#faraday-sign}

先固定环路正向及与它满足右手关系的正法线：

$$\overline\varepsilon=-\frac{\Delta\Psi}{\Delta t},\qquad \varepsilon=-\frac{\mathrm d\Psi}{\mathrm dt}.$$

前式给出一段时间的平均值，后式给出瞬时值。电动势大小是磁通链—时间图斜率的大小；负号则相对既定方向决定符号。若图中已给 $\Psi=N\Phi$，**不能再乘 N**。$1\,\mathrm V=1\,\mathrm{Wb\,s^{-1}}$。

很大的磁通若恒定，电动势仍可为零；磁通经过零点时若变化很快，电动势可以不为零。开路线圈可以有端电动势，却没有持续传导电流。

### 例题 2：平均电动势 {#example-2}

A 120-turn coil has single-turn flux decreasing uniformly from $3.0\,\mathrm{mWb}$ to $1.0\,\mathrm{mWb}$ in $40\,\mathrm{ms}$. Find the signed emf for this flux convention.

$$\Delta\Psi=120(1.0-3.0)\times10^{-3}=-0.24\,\mathrm{Wb},\qquad \overline\varepsilon=-\frac{-0.24}{0.040}=\boxed{+6.0\,\mathrm V}.$$

区间内变化率恒定，因此平均与瞬时电动势相等。交换表笔端点会使读数符号反转，大小不变。

## 楞次定律：反抗引起感应的变化 {#lenz-energy}

把磁体移向接有灵敏中央零位电表的线圈，磁通链变化使电表偏转；保持静止，读数回零；移开磁体，偏转反向。反转磁极或交换表笔，符号也反转；更快移动通常增大读数。这些是实验预测，不代表你已经操作。

北极靠近闭合线圈的近端时，感应磁场使近端成为北极，排斥靠近；从磁体一侧看，常规电流逆时针。移开北极时近端成为南极，电流反向。感应磁场反抗的是**变化**，不一定与原场反向：外磁通减小时，感应场可与原场同向。

若维持运动，外界须克服电磁阻碍做功；电路发热来自这部分功。若无人维持，能量可来自动能或重力势能的减少。若感应一边帮助运动，一边又给电阻供能而没有输入，就违背能量守恒。

## 运动导杆与涡流 {#moving-conductor}

<img src="/assets/img/physics-induction-rod.svg" alt="Worked circuit: a vertical rod slides right on rails in a field into the page. A resistor closes the loop at the left. Motion, field and rod are mutually perpendicular; no force or current answers are drawn." width="520" height="400" data-lazy-ignore="true">

在图示几何中，向右运动的正电荷受向上的磁力，导杆上端电势更高。孤立导杆稳定分离电荷后，电力与磁力平衡。令 $E=\varepsilon/L$：

$$qE=qvB\quad\Rightarrow\quad\varepsilon=BLv.$$

这个大小公式要求导杆、速度、磁场互相垂直；沿场平移不会产生这样的电动势。闭合电阻回路中，导杆电流向上，磁力向左。忽略导轨/导杆电阻、并保持匀速时：

$$I=\frac{BLv}{R},\quad F_{\mathrm{ext}}=BIL,\quad F_{\mathrm{ext}}v=I\varepsilon=I^2R.$$

在此理想模型中，断开电路后持续电流和制动力消失，但电荷分离及端电动势仍可存在。

### 例题 3：追踪能量 {#example-3}

For the closed rail circuit take $B=0.50\,\mathrm T$, $L=0.20\,\mathrm m$, $v=3.0\,\mathrm{m\,s^{-1}}$ and $R=2.0\,\Omega$. Find emf, current, external force and input power.

$$\varepsilon=0.30\,\mathrm V,\quad I=0.15\,\mathrm A,\quad F_{\mathrm{ext}}=0.015\,\mathrm N,\quad P=0.045\,\mathrm W.$$

再由 $I^2R=0.045\,\mathrm W$ 检查能量。电阻不变、速率加倍时，电动势和电流加倍，维持匀速的外力也加倍，功率变为四倍。

块状导体内部也能形成闭合的**涡流（eddy currents）**，不需要外接导线回路。其场可阻碍运动，电阻使能量转移为热，因此磁体在导电管中可无接触减速。开槽会切断较大的电流环路；变压器铁芯叠片正是用这个原理减小不需要的发热。非磁性导体同样可以有涡流。

## 转动线圈：从磁通连接交流电 {#rotating-coil}

取正法线与磁场同向的时刻为 $t=0$，并令 $\theta=\omega t$。匀速转动时：

$$\Psi=NBA\cos\omega t,\qquad \varepsilon=NBA\omega\sin\omega t,\qquad \omega=2\pi f.$$

峰值为 $\varepsilon_0=NBA\omega$。磁通链最大时斜率、电动势为零；磁通链过零时，电动势大小最大。在这个约定下，两曲线相隔四分之一周期。加快转动会**同时**改变幅值与周期。发电机把机械输入转为电输出，带负载时须提供额外驱动力矩。

## 图像探究：自己确定电动势 {#data-flux-graph}

*Self-written; constructed teaching graph, not measured records.*

The graph shows total linkage $\Psi$ in Wb turns (turns dimensionless). Positive normal is out of the page; positive loop direction is anticlockwise viewed on the page. Sketch signed emf on the same time scale, calculate its value on each straight segment, and find its signed time-area. Explain why the ideal corners do not define unique instantaneous emf values. Do not multiply by the coil turn count again.

<img src="/assets/img/physics-induction-flux-task.svg" alt="Task graph of total flux linkage against time: vertices at 0 s and 0 Wb, 0.20 s and 0.060 Wb, 0.50 s and 0.060 Wb, 0.60 s and 0 Wb. Only linkage is plotted; the emf graph is left for the student." width="520" height="390" data-lazy-ignore="true">

<details markdown="1">
<summary>提示</summary>

水平段斜率为零；下降段斜率为负，别漏掉法拉第定律的负号。

</details>

<details markdown="1">
<summary>分析与再尝试</summary>

三个开区间的电动势依次为 $-0.30\,\mathrm V$、$0$ 和 $+0.60\,\mathrm V$。有向时间面积为：

$$(-0.30)(0.20)+0(0.30)+(0.60)(0.10)=0\,\mathrm{V\,s}=-\Delta\Psi.$$

磁通链回到起点，因此净面积为零，尽管过程中电动势并非一直为零。折角处斜率突变，理想图不能定义唯一瞬时斜率，真实仪器会使过渡圆滑。**再尝试：**用一半时间完成相同变化。电动势大小加倍、持续时间减半，各段有向面积不变。面积关系是定律推论，并非新增一个大纲点名要求。

</details>

## 练习 {#practice}

### 练习 1：改变模型条件 {#question-1}

*Self-written.*

A closed coil is wholly inside a uniform steady field. Compare the emf when it (a) translates without rotation, (b) rotates, and (c) leaves the field region. Explain why the presence of a field alone cannot answer the question.

<details markdown="1">
<summary>提示</summary>

追踪磁通链，不只看线圈是否运动。

</details>

<details markdown="1">
<summary>解答与再尝试</summary>

(a) 面积与方向不变时为零。(b) 角度变化，一般有电动势，但某些瞬间仍为零。(c) 链过磁场的面积离开时一般有电动势。**再尝试：**改为开路，电动势仍可有，持续电流则没有。

</details>

### 练习 2：由电动势反推磁通链 {#question-2}

*Adapted from OxfordAQA 9630 PH03 January 2020 Q34; QP p.42 and MS p.9 (key B) read. Algebra and an open sketch replace the graph options; the initial phase is restated.*

Over a full cycle, an emf is $\varepsilon=\varepsilon_0\sin\omega t$. The linkage has zero mean. Sketch linkage with a positive value at $t=0$, mark its extrema and zero crossings, and derive its amplitude.

<details markdown="1">
<summary>提示</summary>

对你猜测的曲线求导，再检查负号。

</details>

<details markdown="1">
<summary>解答与再尝试</summary>

$$\Psi=\frac{\varepsilon_0}{\omega}\cos\omega t.$$

磁通链从正最大值开始，四分之一周期过零，半周期到负最小值；幅值为电动势幅值除以角频率。**再尝试：**反转电动势极性，在相同零均值条件下，磁通链曲线整体变号。

</details>

### 练习 3：解释经过线圈的磁体 {#question-3}

*Adapted from OxfordAQA 9630 PH03 January 2020 Q5.2/Q5.4; QP pp.18/20 and MS p.8 read. An explicitly described trace replaces the original plotted trace; exact timing is not reused.*

A magnet on a trolley passes beneath a stationary coil. The measured emf has two lobes of opposite sign with a zero interval between them. Explain the signs and the zero interval using linkage. Predict changes if the trolley accelerates so that it passes the second lobe faster than the first.

<details markdown="1">
<summary>提示</summary>

把每段曲线连到变化率和符号，而不是只报定律名称。

</details>

<details markdown="1">
<summary>解答与再尝试</summary>

磁通链先沿一个方向变，之后反向变化，楞次定律给出反号电动势。零段表示该时段磁通链不变，不一定没有场。同样的空间变化用更短时间完成时，峰更高、更窄；若第二段通过得更快，后峰更高更窄，峰间时间缩短。**再尝试：**交换表笔，符号反转，宽度不变。

</details>

### 练习 4：反推发电机频率 {#question-4}

*Adapted from OxfordAQA 9630 PH03 January 2020 Q32; QP p.40 and MS p.9 (key C) read. Open calculation and a transfer task replace the choices.*

A 40-turn coil of area $0.20\,\mathrm{m^2}$ rotates uniformly in $1.5\,\mathrm{mT}$. Its peak emf is $0.24\,\mathrm V$. Determine its rotation frequency and predict peak emf when frequency doubles.

<details markdown="1">
<summary>提示</summary>

先换算毫特斯拉，区分角频率与频率。

</details>

<details markdown="1">
<summary>解答与再尝试</summary>

$$f=\frac{0.24}{2\pi(40)(0.20)(1.5\times10^{-3})}\approx\boxed{3.2\,\mathrm{Hz}}.$$

频率加倍，峰值为 $0.48\,\mathrm V$，周期减半。**再尝试：**改为匝数加倍，幅值加倍但周期不变。

</details>

### 练习 5：改变回路条件 {#question-5}

*Self-written.*

Use Example 3 geometry and values. Replace the $2.0\,\Omega$ load with $4.0\,\Omega$ while keeping the rod speed fixed. Find emf, current, driving force and heating power. Then state what survives when the circuit is opened.

<details markdown="1">
<summary>提示</summary>

运动决定电动势，电阻改变电流和制动力。

</details>

<details markdown="1">
<summary>解答与再尝试</summary>

$$\varepsilon=0.30\,\mathrm V,\quad I=0.075\,\mathrm A,\quad F_{\mathrm{ext}}=0.0075\,\mathrm N,\quad P=0.0225\,\mathrm W.$$

开路时端电动势仍可存在，但此模型的持续电流和磁制动力消失。**再尝试：**重新闭合却撤去驱动，导杆减速，不能再把匀速功率当作不随时间变化。

</details>

### 练习 6：解释无接触制动 {#question-6}

*Self-written.*

A magnet falls through a conducting nonmagnetic tube more slowly than through a plastic tube. Explain the energy path and predict how a long insulating slit along the conducting tube could affect the fall. Does a slower fall prove that all energy is stored magnetically?

<details markdown="1">
<summary>提示</summary>

先找闭合的感应电流路径和电阻。

</details>

<details markdown="1">
<summary>解答与再尝试</summary>

磁通变化在导体中驱动涡流，其磁效应阻碍相对运动；重力势能除转为动能外，还经电阻转为热。绝缘纵缝切断主要环流路径，可减弱制动。缓慢或匀速下降不代表能量一直储存在场中。**再尝试：**解释为什么管壁不必是铁磁性材料。

</details>

## 速查 {#quick-reference}

| 先检查什么 | 关系 |
| 角度从法线量起，匀强场 | $\Psi=NBA\cos\theta$ |
| 已给总磁通链 | $\overline\varepsilon=-\Delta\Psi/\Delta t$ |
| 导杆、速度与场互相垂直 | $\varepsilon=BLv$ |
| 闭合电阻回路，匀速 | $F_{\mathrm{ext}}v=I^2R$ |
| 线圈匀速转动 | $\varepsilon_0=NBA(2\pi f)$ |

[上一课：磁场与运动电荷](/zh/alevel/a2-physics/magnetic-fields-and-moving-charges/) · [课程目录](/zh/alevel/a2-physics/) · [下一课：交流电](/zh/alevel/a2-physics/alternating-current/)

## 来源与范围 {#sources}

范围：OxfordAQA 9630 PH03，[大纲正文 v4.4](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-international-as-and-a-level-physics-specification.pdf) 3.10.3–3.10.4，印刷第 25–26 页/PDF 第 24–25 页，2026-10-21 核对。January 2020 改编题配对读取 [QP](https://drive.google.com/file/d/1u3DieTjGo7oCKuPMLpK01t1dBK72FlEO/view) 第 17–20/40/42 页与 [MS](https://drive.google.com/file/d/191UedE9sWTca8lYxRcL0UBTkRDuI1lXl/view) 第 8–9 页；Q34 为图像相位转换提供直接依据。例题 1 配对读取 June 2024 [QP](https://drive.google.com/file/d/1ah7yyGqFtyHdZ4Dxd4JchZM361qUj8gc/view) 第 19 页与 [MS](https://drive.google.com/file/d/1-18EOqSkT4F1sHO9LaevtZaWXNn4aDSM/view) 第 16 页。Jim Breithaupt 第 21.2–21.3 节印刷第 374/378 页辅助说明，其余题目、数据和图示为自拟材料。图像面积是定律的教学推论。本页不是另一个编号必做实验，也不代表完成了实物操作。
