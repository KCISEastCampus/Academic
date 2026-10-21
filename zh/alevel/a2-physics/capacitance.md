---
title: 电容
layout: subjects
mathjax: true
grade: a2
subject: a2-physics
lang: zh-CN
translation_of: /alevel/a2-physics/capacitance/
permalink: /zh/alevel/a2-physics/capacitance/
toc_headings: h2, h3, h4
study_page: true
---

[A2 物理](/zh/alevel/a2-physics/) · PH03 · 3.8.4 电容器

解释电容器如何储存电荷和能量，计算电容，并预测几何或电介质变化后的结果。英文题干和公式保留，讲解、提示与解答使用中文；图内保留英文标签。

- **学习：**先看[电荷与电容](#charge-and-capacitance)，再联系[图像](#graphs-and-constant-current)与[储能](#energy-stored)。
- **作业帮助：**选公式前先确认不变量：接理想电源时电势差固定，隔离时自由电荷固定。
- **复习：**关闭提示和解答，先做[练习](#practice)。

**开始前：**复习[电场](/zh/alevel/a2-physics/electric-fields/)。除非另有说明，使用 $\varepsilon_0=8.85\times10^{-12}\,\mathrm{F\,m^{-1}}$ 和 $e=1.60\times10^{-19}\,\mathrm C$。将 $\mathrm{mF}$、$\mathrm{\mu F}$、$\mathrm{nF}$、$\mathrm{pF}$ 换为法拉，长度、面积换成 SI 单位。中间计算保留额外位数。

例题和练习 1–5 为自拟题；练习 6–8 改编自 PH03 试卷，题干简化，未赋予官方分值。图示不按比例绘制。固定电阻充放电及必做实验 6 在下一课。

## 电荷与电容 {#charge-and-capacitance}

**先想一想：**极板带 $+Q$ 和 $-Q$ 电荷，“储存电荷”指 $2Q$、零，还是 $Q$？

<details markdown="1">
<summary>核对你的解释</summary>

储存电荷为 $Q$，即任一极板电荷的大小。理想模型中两板净电荷合计为零，但分离的电荷仍可储能。

</details>

**电容器（capacitor）**由彼此绝缘的两个导体组成。接电源后，一板得到电子而带负电，另一板失去等量电子而带正电。理想电容器的电子通过外电路移动，不穿过绝缘间隙。

**电容（capacitance）**是储存电荷与板间电势差之比：

$$\boxed{C=\frac{Q}{V}}.$$

$Q$ 是任一极板电荷的大小，$V$ 是电势差大小。单位为**法拉（farad）**，$1\,\mathrm F=1\,\mathrm{C\,V^{-1}}$。电容为 $1\,\mathrm F$ 的电容器每板储存 $1\,\mathrm C$ 电荷时，板间电势差为 $1\,\mathrm V$。

几何固定、介质线性时，$C$ 恒定；增大 $V$，$Q$ 同比例增加。电容较大意味着在**相同**电势差下储存更多电荷，并非升高电压使该电容器的电容变大。

$$Q=CV,\qquad V=\frac{Q}{C}.$$

### 例题 1：电荷与电子数 {#example-1-charge-and-electrons}

A $220\,\mathrm{\mu F}$ capacitor is charged to $9.0\,\mathrm V$. Find its stored charge and the number of excess electrons on its negative plate.

$$C=220\times10^{-6}\,\mathrm F.$$

$$Q=CV=1.98\times10^{-3}\,\mathrm C.$$

$$\boxed{Q=2.0\,\mathrm{mC}}.$$

两板约带 $+2.0\,\mathrm{mC}$、$-2.0\,\mathrm{mC}$。多余电子数为：

$$N=\frac{Q}{e}\approx\boxed{1.2\times10^{16}}.$$

**检查：**正板失去相同数量的电子。用 $Q=CV$ 时，不要把两板电荷大小相加。

## 图像与恒定电流 {#graphs-and-constant-current}

电容恒定时，$Q=CV$ 给出过原点直线：

- **$Q$ 纵轴、$V$ 横轴**时，斜率 $=C$。
- **$V$ 纵轴、$Q$ 横轴**时，斜率 $=1/C$。

计算前先读坐标轴与单位。斜率单位 $\mathrm{\mu C\,V^{-1}}$ 对应电容单位 $\mathrm{\mu F}$，不是法拉。

恒定电流 $I$ 流过时间 $\Delta t$，增加的电荷为 $\Delta Q=I\Delta t$。固定 $C$ 时：

$$I=C\frac{\Delta V}{\Delta t}.$$

$$\boxed{C=\frac{I}{\text{gradient of a }V\text{–}t\text{ graph}}}.$$

因此恒流充电时电势差线性上升。只有初始未充电且电流恒定时，$Q=It$ 才等于总储存电荷。

测量时电流表串联，高阻电压表并联在电容器两端。使用合适的恒流源或调节可变电阻来保持电流。记录不同时刻的 $V$，画 $V$ 对 $t$ 图并拟合直线，由斜率求电容。恒压电源加固定电阻**不能**保持充电电流恒定，这在下一课学习。

### 例题 2：从非零电压开始充电 {#example-2-charging-from-a-non-zero-voltage}

A capacitor charges at a constant current of $20\,\mathrm{\mu A}$. The gradient of its $V$–$t$ graph is $0.050\,\mathrm{V\,s^{-1}}$. Find its capacitance and the time needed to increase its potential difference from $2.0\,\mathrm V$ to $8.0\,\mathrm V$.

$$C=\frac{20\times10^{-6}}{0.050}=\boxed{400\,\mathrm{\mu F}}.$$

使用电压变化量，不是最终电压：

$$\Delta t=\frac{8.0-2.0}{0.050}=\boxed{120\,\mathrm s}.$$

$$\Delta Q=I\Delta t=\boxed{2.4\,\mathrm{mC}}.$$

**检查：**末态电荷为 $C(8.0)=3.2\,\mathrm{mC}$，包含初始的 $0.80\,\mathrm{mC}$ 以及这 $120\,\mathrm s$ 内补充的电荷。

## 平行板电容器 {#parallel-plate-capacitors}

宽大平行板、间隙均匀且忽略边缘效应时：

$$\boxed{C=\frac{\varepsilon_0\varepsilon_r A}{d}}.$$

$A$ 是**一块极板的重叠面积**，$d$ 是板间距，$\varepsilon_r$ 为**相对介电常数（relative permittivity，也称 dielectric constant）**。该式要求介质完全填充间隙。真空 $\varepsilon_r=1$，空气通常可近似为 1。

面积越大，电容越大；间距越大，电容越小。相同几何下，相对介电常数越大，电容越大。此几何公式中没有施加电压 $V$。

空隙中 $E_{\text{field}}=V/d$、$Q/A=\varepsilon_0E_{\text{field}}$，得到 $Q/V=\varepsilon_0A/d$。完全填充线性电介质后，电容乘以 $\varepsilon_r$。

**常见错误：**把两板面积相加，把 $\mathrm{cm^2}$ 当作 $\mathrm{cm}$ 换算，或不考虑几何便将部分填充代入简单公式。

### 例题 3：极板几何 {#example-3-plate-geometry}

A parallel-plate capacitor has overlapping area $0.012\,\mathrm{m^2}$ and separation $0.50\,\mathrm{mm}$. A dielectric of relative permittivity 3.0 fills the gap. Find its capacitance and charge at $12\,\mathrm V$.

$$d=5.0\times10^{-4}\,\mathrm m.$$

$$C=\frac{(8.85\times10^{-12})(3.0)(0.012)}{5.0\times10^{-4}}.$$

$$\boxed{C=6.4\times10^{-10}\,\mathrm F=640\,\mathrm{pF}}.$$

使用未取整电容：

$$Q=CV\approx\boxed{7.6\,\mathrm{nC}}.$$

场强为 $V/d=2.4\times10^4\,\mathrm{V\,m^{-1}}$。相同介质下，面积加倍、间距减半，电容成为四倍。

## 储存的能量 {#energy-stored}

充电分离正负电荷，需要克服逐渐增大的电势差做功，能量储存在电场中。补充小电荷 $\Delta q$ 所需功约为 $V\Delta q$，其中电势差取当时值。

总储能是 **$V$ 纵轴、$Q$ 横轴图下的面积**。$C$ 恒定时，图线过原点，三角形面积给出：

$$\boxed{E_{\text{stored}}=\frac12QV}.$$

代入 $Q=CV$ 得到另两种常用形式：

$$\boxed{E_{\text{stored}}=\frac12CV^2}.$$

$$\boxed{E_{\text{stored}}=\frac{Q^2}{2C}}.$$

储能单位为焦耳，下标 stored 用于区别能量和场强。电容不变时，电压加倍、电荷加倍，储能变为四倍。

<img src="/assets/img/physics-capacitance-graphs.svg" alt="电荷对电压图斜率为 C；电压对电荷图斜率为 1/C，其下三角形面积给出电容器储能" width="400" height="600" data-lazy-ignore="true">

电容恒定时交换坐标轴，三角形的数值面积仍为 $QV/2$。但功的推导累加的是 $V\Delta Q$，且交换坐标后斜率改变；两图不能套同一斜率规则。

从 $V_1$ 放电到非零 $V_2$ 时，释放的能量为：

$$\boxed{\Delta E_{\text{released}}=\frac12C(V_1^2-V_2^2)}.$$

不是 $\tfrac12C(V_1-V_2)^2$。应从初始能量减去末态剩余能量。其他位置有损耗时，器件获得的有用能量可小于释放能量。

### 例题 4：脉冲后的剩余能量 {#example-4-energy-remaining-after-a-pulse}

A $470\,\mathrm{\mu F}$ capacitor falls from $12\,\mathrm V$ to $5.0\,\mathrm V$ while powering a pulse. Find its initial stored energy, remaining energy and released energy.

$$E_1=\frac12(470\times10^{-6})(12)^2\approx0.034\,\mathrm J.$$

$$E_2=\frac12(470\times10^{-6})(5.0)^2\approx0.0059\,\mathrm J.$$

用未取整值相减：

$$\boxed{\Delta E_{\text{released}}=0.028\,\mathrm J}.$$

**检查：**尚未完全放电，释放能量必小于初始储能。

初始未充电的电容器经电阻接电压 $V_s$ 的理想恒压源，充满时电源提供 $QV_s=CV_s^2$；仅 $CV_s^2/2$ 储存，另一半在电阻耗散。结论仅适用于这种充电方式，不能推广到一切充电方法。

## 电介质与极性分子 {#dielectrics-and-polar-molecules}

**电介质（dielectric）**是绝缘体，增加电容，但不提供跨越间隙的导电路径。

**极性分子（polar molecule）**的正负电荷中心分离。无外场时取向通常随机；在场中趋向**转动**，正端沿场、负端逆场。通常热运动会阻止完全整齐排列。

介质发生**极化（polarisation）**：面向正板的表面出现束缚负电荷，面向负板的表面出现束缚正电荷，产生反向场。材料整体仍电中性，极化不是自由电荷穿过绝缘体。非极性分子也可因正负电荷分布略微位移而极化。

几何相同、完全填充时：

$$\boxed{\varepsilon_r=\frac{C}{C_0}}.$$

$C_0$ 是空隙电容。相对介电常数无单位。在**相同**电势差下也有 $\varepsilon_r=Q/Q_0$；但隔离电容器的自由电荷固定，不能用此电荷比描述插入过程。

<img src="/assets/img/physics-capacitance-dielectric.svg" alt="极性分子转动，负端朝正板、正端朝负板，极化场与极板场相反；接电源固定电压，隔离固定自由电荷" width="400" height="620" data-lazy-ignore="true">

## 接电源还是隔离？ {#connected-or-isolated}

计算变化前，先说明连接状态与固定量。假设理想电源、无显著漏电、线性介质完全插入，且极板面积和间距不变。

### 保持连接恒压电源 {#still-connected-to-a-constant-voltage-supply}

电源保持 $V$ 不变。插介质使 $C$ 乘以 $\varepsilon_r$，更多自由电荷经外电路到极板，$Q=CV$ 同倍增加；储能 $CV^2/2$ 也同倍增加。

间隙合场仍为 $V/d$，因此不变。新增自由电荷抵消极化反向场的影响。不能不看连接状态就说“介质使场减弱”。

### 断开并隔离 {#disconnected-and-isolated}

自由电荷没有进出路径，故 $Q$ 固定。插介质使 $C$ 乘以 $\varepsilon_r$，但 $V=Q/C$ 除以该倍数；合场 $V/d$ 和储能 $Q^2/(2C)$ 也除以该倍数。

电荷守恒不要求储能不变。电容器可将介质吸入，减少的储能可转为机械功或其他能量转移，取决于插入过程。接电源时还必须计入电源供能。

| 完全插入后 | 接恒压源 | 隔离 |
|---|---|---|
| 固定量 | $V$ | $Q$ |
| 电容 | $\varepsilon_r C_0$ | $\varepsilon_r C_0$ |
| 极板自由电荷 | $\varepsilon_r Q_0$ | $Q_0$ |
| 电势差 | $V_0$ | $V_0/\varepsilon_r$ |
| 场强大小 | $E_0$ | $E_0/\varepsilon_r$ |
| 储能 | $\varepsilon_r E_{\text{stored},0}$ | $E_{\text{stored},0}/\varepsilon_r$ |
{: .wide-table}

下标 0 表示各情况原来的空隙数值。表格要求几何不变；若 $d$ 改变，应重新用 $E_{\text{field}}=V/d$ 计算，而不是照抄场强那一行。

### 例题 5：相同介质，两种连接 {#example-5-the-same-dielectric-two-different-connections}

A capacitor has empty-gap capacitance $22\,\mathrm{\mu F}$ and is initially charged to $12\,\mathrm V$. A dielectric of relative permittivity 4.0 completely fills the gap without changing the plate separation. Find its capacitance, charge, voltage and energy after insertion in the two connection cases.

初态：

$$Q_0=C_0V_0=264\,\mathrm{\mu C}.$$

$$E_{\text{stored},0}=\frac12C_0V_0^2=1.584\,\mathrm{mJ}.$$

两种情况下均有 $C=4C_0=88\,\mathrm{\mu F}$。

**接电源：**$V=12\,\mathrm V$，所以 $Q=1056\,\mathrm{\mu C}\approx1.1\,\mathrm{mC}$；能量增加到 $6.336\,\mathrm{mJ}\approx\boxed{6.3\,\mathrm{mJ}}$。电源提供额外电荷，场强不变。

**隔离：**$Q=264\,\mathrm{\mu C}$，因此 $V=Q/C=\boxed{3.0\,\mathrm V}$；能量减少到 $0.396\,\mathrm{mJ}\approx\boxed{0.40\,\mathrm{mJ}}$，场强成为原来的四分之一。

**检查：**电容变大未必储能变大。连接状态决定最方便的能量公式。

## 练习 {#practice}

变化题先写“固定 $V$”或“固定 $Q$”，并解释原因；写出方程与单位。

### 练习 1：电容与净电荷 {#question-1-capacitance-and-net-charge}

A capacitor stores $60\,\mathrm{\mu C}$ at $12\,\mathrm V$. Find its capacitance, the charge on each plate and the net charge of the two plates together. What charge is stored at $18\,\mathrm V$ if its geometry and dielectric remain unchanged?

<details markdown="1">
<summary>提示</summary>

给出的储存电荷是一块极板的电荷大小，不是两板之和。

</details>

<details markdown="1">
<summary>解答</summary>

$$C=\frac{60\times10^{-6}}{12}=\boxed{5.0\,\mathrm{\mu F}}.$$

两板带 $+60\,\mathrm{\mu C}$ 和 $-60\,\mathrm{\mu C}$，净电荷合计为零。在 $18\,\mathrm V$ 时有 $Q=CV=\boxed{90\,\mathrm{\mu C}}$，电容仍为 $5.0\,\mathrm{\mu F}$。

</details>

### 练习 2：改变板间距 {#question-2-changing-plate-separation}

An air-gap capacitor remains connected to an ideal constant-voltage supply. Its plate separation is doubled while overlapping area stays fixed. State how capacitance, charge, field strength and stored energy change. Repeat for a capacitor disconnected and isolated before the separation changes.

<details markdown="1">
<summary>提示</summary>

两种情况下均有 $C\propto1/d$；连接状态决定 $V$ 或 $Q$ 固定。

</details>

<details markdown="1">
<summary>解答</summary>

**接电源：**固定 $V$，电容、电荷减半，场强 $V/d$ 减半，储能 $CV^2/2$ 减半。

**隔离：**固定 $Q$，电容减半、电压加倍，储能 $Q^2/(2C)$ 加倍。$V$ 与 $d$ 同时加倍，所以场强不变。分开相吸极板需要机械功，理想隔离系统中该功使储能增加。

</details>

### 练习 3：图轴与单位 {#question-3-graph-axes-and-units}

*自拟题；教学示意图，不是实验数据。*

The graph has potential difference vertically and charge horizontally. Read the coordinates of states A and B. Determine the capacitance and the gradient in SI units. The capacitor discharges from A to B: shade the area representing the energy released and estimate that energy. Explain why the entire triangle below A is not the released energy.

<img src="/assets/img/physics-capacitance-practice.svg" alt="独立读图任务：横轴为电荷量，纵轴为电势差，两轴均标明刻度。状态 A、B 标在同一直线上；学生据图判断电容和能量变化。" width="520" height="410" data-lazy-ignore="true">

<details markdown="1">
<summary>提示</summary>

用两个相隔较远的点求斜率，注意微库仑刻度。求功时，只对实际转移的电荷累加 $V\Delta Q$。

</details>

<details markdown="1">
<summary>解答与再尝试</summary>

图中 A 为 $(40\,\mathrm{\mu C},8.0\,\mathrm V)$，B 为 $(15\,\mathrm{\mu C},3.0\,\mathrm V)$。

$$C=\frac{40\times10^{-6}}{8.0}=\boxed{5.0\,\mathrm{\mu F}}.$$

$$\frac{\Delta V}{\Delta Q}=\frac{8.0-3.0}{(40-15)\times10^{-6}}=\boxed{2.0\times10^5\,\mathrm{V\,C^{-1}}}.$$

应涂出两个电荷坐标之间、直线下方的梯形：

$$\Delta E_{\text{released}}\approx\frac{8.0+3.0}{2}(40-15)\times10^{-6}=137.5\,\mathrm{\mu J}\approx\boxed{1.4\times10^{-4}\,\mathrm J}.$$

A 下方整个三角形表示 $160\,\mathrm{\mu J}$，但 B 处仍有 $22.5\,\mathrm{\mu J}$。两者相减与梯形面积一致。允许图像分辨率内的读数误差；只用电压差构成三角形会漏算部分功。

**再尝试：**电容不变，改为从 A 放电至零，现在应取哪个面积？取 A 下方整个三角形，释放能量为 $160\,\mathrm{\mu J}$。

</details>

### 练习 4：输送给器件的能量 {#question-4-energy-delivered-to-a-device}

A $1000\,\mathrm{\mu F}$ capacitor falls from $10\,\mathrm V$ to $6.0\,\mathrm V$. What energy is released? If 75% reaches a device as useful energy, find that useful energy. Explain why the capacitor's initial energy is not the released energy.

<details markdown="1">
<summary>提示</summary>

先求初末储能之差，再乘效率。

</details>

<details markdown="1">
<summary>解答</summary>

$$\Delta E_{\text{released}}=\frac12(0.0010)(10^2-6.0^2).$$

$$\boxed{\Delta E_{\text{released}}=0.032\,\mathrm J}.$$

有用能量为 $0.75(0.032)=\boxed{0.024\,\mathrm J}$。初能量 $0.050\,\mathrm J$，但仍有 $0.018\,\mathrm J$ 留在 $6.0\,\mathrm V$ 的电容器中。

</details>

### 练习 5：解释介质作用 {#question-5-explaining-dielectric-action}

A dielectric of relative permittivity 2.5 fully fills an air-gap capacitor without changing its geometry. Describe how polar molecules respond to the field. How could you determine the relative permittivity using a capacitance meter? At fixed voltage, what happens to free plate charge and resultant field strength?

<details markdown="1">
<summary>提示</summary>

区分介质内的束缚电荷和电源供给金属极板的自由电荷。

</details>

<details markdown="1">
<summary>解答</summary>

极性分子趋向转动，正端沿场、负端逆场，使面向正板的表面有束缚负电荷，另一面有束缚正电荷。极化场与极板自由电荷的场相反。

空隙时测 $C_0$，完全插入介质后测 $C$，保持重叠面积和间距相同，再求 $\varepsilon_r=C/C_0$。若取走介质片会使极板移动，应以间隔件固定间距。

固定电压时，电容与极板自由电荷增加到 2.5 倍，额外自由电荷由电源提供。合场仍为 $V/d$，不改变，介质仍是绝缘体。

</details>

### 练习 6：恒定充电电流 {#question-6-a-constant-charging-current}

**改编自 OxfordAQA PH03, January 2020, Question 23.**

A $180\,\mathrm{mF}$ capacitor is charged by a constant current for $36\,\mathrm s$. Its potential difference rises from $3.0\,\mathrm V$ to $9.0\,\mathrm V$. Find the current.

<details markdown="1">
<summary>提示</summary>

毫法换为法拉，使用给定时间内储存电荷的变化量。

</details>

<details markdown="1">
<summary>解答</summary>

$$\Delta Q=C\Delta V.$$

$$(0.180)(9.0-3.0)=1.08\,\mathrm C.$$

$$I=\frac{\Delta Q}{36}=\boxed{0.030\,\mathrm A=30\,\mathrm{mA}}.$$

最终电荷包含在 $3.0\,\mathrm V$ 时已有的电荷，不能用 $C(9.0)/36$ 求充电电流。

</details>

### 练习 7：隔离后插入介质 {#question-7-dielectric-insertion-after-isolation}

**改编自 OxfordAQA PH03, January 2020, Question 22.** A relative permittivity is supplied here to extend the original comparison.

A parallel-plate capacitor is charged and then isolated. A dielectric of relative permittivity 3.0 fully fills the gap, with no change in geometry or loss of free plate charge. Give the new capacitance, potential difference and stored energy in terms of their initial values. Explain what stays fixed.

<details markdown="1">
<summary>提示</summary>

隔离固定电荷而非电压，选固定电荷的能量公式。

</details>

<details markdown="1">
<summary>解答</summary>

自由电荷保持 $Q_0$，因为没有与电源相连的导电路径。电容变成 $3C_0$，因此：

$$\boxed{V=\frac{V_0}{3}}.$$

$$\boxed{E_{\text{stored}}=\frac{E_{\text{stored},0}}{3}}.$$

电压与储能都减小，与原题比较一致；仅凭电容增加，不能断言储能增加。

</details>

### 练习 8：插介质后的场强 {#question-8-field-strength-after-inserting-a-dielectric}

**改编自 OxfordAQA PH03, June 2024, Question 17.**

An air-gap capacitor initially stores charge $Q_0$ and has field strength $E_0$. The supply is disconnected, then a dielectric completely fills the gap without changing plate separation. State how free plate charge and resultant field strength change. How would the answer differ if the original constant-voltage supply stayed connected?

<details markdown="1">
<summary>提示</summary>

使用 $V=Q/C$ 与 $E_{\text{field}}=V/d$；板间距不变。

</details>

<details markdown="1">
<summary>解答</summary>

**断开：**自由电荷仍为 $Q_0$，电容增加使电压减小，合场降为 $E_0/\varepsilon_r$，低于 $E_0$，与原题答案一致。

**连接：**电压不变，自由电荷增至 $\varepsilon_rQ_0$，合场仍为 $E_0$；电源补充电荷以维持电压。

</details>

## 速查 {#quick-reference}

| 用途 | 方程与适用条件 |
|---|---|
| 电容 | $C=Q/V$；$Q$ 为单板电荷大小 |
| 平行板 | $C=\varepsilon_0\varepsilon_rA/d$；间隙均匀且完全填充 |
| 相对介电常数 | $\varepsilon_r=C/C_0$；几何相同 |
| 恒定电流 | $\Delta Q=I\Delta t$ |
| 恒流图像求电容 | $C=I/(\Delta V/\Delta t)$ |
| 储能 | $E_{\text{stored}}=QV/2=CV^2/2=Q^2/(2C)$ |
| 释放能量 | $C(V_1^2-V_2^2)/2$；固定 $C$ |
| 接理想电源 | $V$ 固定；自由电荷可变 |
| 隔离电容器 | 自由 $Q$ 固定；电压可变 |

继续之前，检查能否识别单板电荷、解释两种图轴的斜率、由图推导储能、解释极性分子转动，并在预测变化前选对固定量。

[上一课：电场](/zh/alevel/a2-physics/electric-fields/) · [课程目录](/zh/alevel/a2-physics/) · [下一课：电容器充放电](/zh/alevel/a2-physics/capacitor-charge-and-discharge/)

<details markdown="1">
<summary>来源与试题表述</summary>

本课依据 [OxfordAQA 物理大纲](https://www.oxfordaqa.com/wp-content/uploads/2022/08/oxfordaqa-a-level-physics-specification.pdf) 3.8.4：电容、平行板几何、相对介电常数、介质作用与储能。固定电阻充放电及必做实验 6 在下一课 3.9.1。

教材参考：Jim Breithaupt，*Oxford International AQA Examinations: International A Level Physics*，19.1–19.3，印刷页 339–345。教学组织参考 AS 讲义；储能使用下标以区别电场强度。

练习 6–8 改编自 PH03 January 2020 Q23、Q22 和 June 2024 Q17。英文原页说明编写时参考过官方评分标准；答案、能量变化和连接条件经过独立检查，未直接照抄教材答案。

</details>
