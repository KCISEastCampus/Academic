---
layout: subjects
title: PH03 速查
mathjax: true
grade: a2
subject: a2-physics
lang: zh-CN
translation_of: /alevel/a2-physics/quick-reference/
permalink: /zh/alevel/a2-physics/quick-reference/
toc_headings: h2, h3, h4
study_page: true
---


[返回 PH03 课程目录](/zh/alevel/a2-physics/)。需要完整讲解时，请打开[圆周运动](/zh/alevel/a2-physics/circular-motion/)。本速查覆盖 PH03；尚未有完整学习页的主题会继续补充。

这七个速查算例的原始来源尚未恢复；不认定为官方原题，也不据此标为自拟题。数值已独立核算；来源身份仍待核验。

> **课程**：OxfordAQA International A-level Physics（9630）· 模块制<br>
> **考试结构**：AS = Unit 1 + Unit 2 · A2 = Unit 3 + Unit 4 + Unit 5

# 📕 Unit 3：场及其影响
{: id="-unit-3-fields-and-their-consequences"}

`（大纲章节：3.6–3.10）`

---

## 1. 🔄 圆周与周期运动（3.6）
{: id="1--circular-and-periodic-motion-36"}


### 1.1 角量
{: id="11-angular-quantities"}

* **角位移（$\theta$）**：转过的角度，单位为**弧度**。
    * $1 \text{ revolution} = 2\pi \text{ rad} = 360°$
* **角速度（$\omega$）**：角位移的变化率。
    $$\omega = \frac{\Delta \theta}{\Delta t}$$
    * 单位：rad s$^{-1}$
* **线速度与角速度的关系**：
    $$v = r\omega$$

### 1.2 向心加速度
{: id="12-centripetal-acceleration"}

物体沿圆周做匀速率运动时，仍有指向圆心的**向心加速度**。
$$a = \frac{v^2}{r} = r\omega^2$$

### 1.3 向心力
{: id="13-centripetal-force"}

根据牛顿第二定律，产生向心加速度所需的合力为：
$$F = \frac{mv^2}{r} = mr\omega^2$$

* 向心力**不是一种新的力**，而是已有力指向圆心的合力，例如：
    * 绳的**张力**（如圆锥摆）
    * 轮胎与路面间的**摩擦力**（汽车转弯）
    * **万有引力**（行星与卫星轨道）
    * **支持力**（倾斜弯道上的汽车）
    * **磁场力**（带电粒子垂直进入匀强磁场）

### 1.4 竖直圆周运动
{: id="14-vertical-circular-motion"}

在竖直圆周的顶端与底端，将实际受力向圆心方向分解。这里用 $F_T$ 表示张力，$T$ 留作周期。

| 情形 | 指向圆心的合力方程 | 条件 |
|---|---|---|
| 绳系质点，圆周顶端 | $F_T+mg=\dfrac{mv^2}{r}$ | $F_T\geq0$：$v\geq\sqrt{gr}$（绳保持绷紧的最小速率） |
| 绳系质点，圆周底端 | $F_T-mg=\dfrac{mv^2}{r}$ | 张力大于重力 |
| 汽车过坡顶，圆心在下方 | $mg-N=\dfrac{mv^2}{r}$ | $N\geq0$：$v\leq\sqrt{gr}$（保持接触的最大速率） |
| 汽车过凹处底端，圆心在上方 | $N-mg=\dfrac{mv^2}{r}$ | 支持力大于重力 |
{: .wide-table}

绳系质点在重力场中做竖直圆周运动时，同时受到重力与绳的拉力，速率随高度改变，不能假设匀速率。对道路，$r$ 是局部曲率半径。见[受力图与接触条件](/zh/alevel/a2-physics/circular-motion/#at-the-top-and-bottom-of-a-curve)。

### 1.5 简谐运动（SHM）
{: id="15-simple-harmonic-motion-shm"}

[打开简谐运动完整课程](/zh/alevel/a2-physics/simple-harmonic-motion/)，学习运动与能量图像、周期推导、例题与练习。

* **定义**：加速度与相对于固定平衡位置的位移**成正比**，且**始终指向平衡位置**的周期运动。
    $$a = -\omega^2 x$$
    * $a$ = 加速度（m s$^{-2}$）
    * $x$ = 相对于平衡位置的位移（m）
    * $\omega$ = 角频率（rad s$^{-1}$）

* **位移、速度与加速度**：
    * 位移：$x = A\cos(\omega t)$（也可用 $x = A\sin(\omega t)$，取决于初始条件）
    * 速度：$v = \frac{dx}{dt} = -A\omega\sin(\omega t)$
    * 加速度：$a = \frac{dv}{dt} = -A\omega^2\cos(\omega t) = -\omega^2 x$

* **主要关系**：
    * 最大速率：$v_{\text{max}} = A\omega$（平衡位置处）
    * 最大加速度大小：$a_{\text{max}} = A\omega^2$（两端极限位置处）
    * 周期：$T = \frac{2\pi}{\omega}$
    * 频率：$f = \frac{1}{T} = \frac{\omega}{2\pi}$

### 1.6 简谐运动的例子
{: id="16-examples-of-shm"}


#### 质量块—弹簧系统 {#mass-spring-system}

质量为 $m$ 的物体连接劲度系数为 $k$ 的弹簧：
$$\omega = \sqrt{\frac{k}{m}}, \quad T = 2\pi\sqrt{\frac{m}{k}}$$

#### 单摆 {#simple-pendulum}

质量为 $m$ 的摆球连接长度为 $L$ 的绳，在小角度范围内摆动：
$$\omega = \sqrt{\frac{g}{L}}, \quad T = 2\pi\sqrt{\frac{L}{g}}$$
* 小角度条件下，周期与**质量**、**振幅**无关。

### 1.7 简谐运动图像
{: id="17-graphs-of-shm"}


| 物理量 | 图像形状 | 主要特征 |
|----------|-------------|-------------|
| $x$ 对 $t$ | 正弦或余弦曲线 | 振幅 $A$，周期 $T$ |
| $v$ 对 $t$ | 正弦曲线（相位相差 $\pi/2$） | $x = 0$ 处速率最大 |
| $a$ 对 $t$ | 余弦曲线（相位相差 $\pi$） | $x = \pm A$ 处加速度大小最大 |

* **无阻尼简谐运动的能量**：总能量守恒，在动能与相对于平衡位置的势能之间转换。对弹簧振子：
    * 动能：$E_k = \frac{1}{2}mv^2$，平衡位置（$x = 0$）处最大
    * 势能：$E_p = \frac{1}{2}kx^2$，极限位置（$x = \pm A$）处最大

> **📝 例题（英文题干保留；原始来源待考）**
>
> A mass of 0.20 kg is attached to a spring of spring constant 50 N m$^{-1}$. It is displaced 4.0 cm from equilibrium and released. Calculate:
> (a) The angular frequency
> (b) The maximum velocity
> (c) The maximum acceleration
>
> **解答：**
> 1. (a) $\omega = \sqrt{\frac{k}{m}} = \sqrt{\frac{50}{0.20}} = \sqrt{250} = 15.8$ rad s$^{-1}$
> 2. (b) $v_{\text{max}} = A\omega = 0.040 \times 15.8 = 0.63$ m s$^{-1}$
> 3. (c) $a_{\text{max}} = A\omega^2 = 0.040 \times 250 = 10$ m s$^{-2}$

---

## 2. 🌍 引力场与卫星（3.7）
{: id="2--gravitational-fields-and-satellites-37"}

[打开引力场与卫星完整课程](/zh/alevel/a2-physics/gravitational-fields-and-satellites/)，学习概念、图像、例题与练习。


### 2.1 引力场强
{: id="21-gravitational-field-strength"}

* **定义**：放在场中某点的单位质量所受的引力。
    $$g = \frac{F}{m}$$
    * $g$ 的单位为 N kg$^{-1}$（数值上等于 m s$^{-2}$）。

### 2.2 万有引力定律
{: id="22-newtons-law-of-gravitation"}

任意两个质点互相吸引，引力大小与质量乘积成正比，与距离平方成反比：
$$F = \frac{GMm}{r^2}$$
* $G$ = 万有引力常量 $= 6.67 \times 10^{-11}$ N m$^2$ kg$^{-2}$
* $M, m$ = 两个物体的质量
* $r$ = 两物体中心间的距离
* 这里计算力的大小。力指向另一个质量；若径向向外为正，径向分量为负。

### 2.3 点质量的引力场
{: id="23-gravitational-field-of-a-point-mass"}

距源质量的距离为 $r$，点质量为 $M$ 时，场强为：
$$g = \frac{GM}{r^2}$$

### 2.4 引力势
{: id="24-gravitational-potential"}

* **定义**：将小试探质量从无穷远移到场中某点时，外力对单位质量所做的功。
    $$V = -\frac{GM}{r}$$
    * $V$ 总为**负值**（约定无穷远处 $V = 0$）。
    * 单位：J kg$^{-1}$

### 2.5 引力势能
{: id="25-gravitational-potential-energy"}

质量为 $m$ 的物体在引力势为 $V$ 处的引力势能：
$$E_p = mV = -\frac{GMm}{r}$$

* 在两点间移动时，$\Delta E_p=m\Delta V$。
* 动能不变时，外力做功等于 $\Delta E_p$；引力做功为 $-\Delta E_p$。
* 取径向向外为正，径向场强分量等于势梯度的负值：$g_r=-\dfrac{\mathrm dV}{\mathrm dr}$。用该点的切线读取梯度。

### 2.6 引力场线
{: id="26-gravitational-field-lines"}

* **径向场**：场线指向点质量，向质量会聚。
* **匀强场**：场线平行且等间距（如地表附近）。

### 2.7 轨道运动
{: id="27-orbital-motion"}

卫星绕质量为 $M$ 的行星做圆轨道运动时：
* 引力提供向心力：
    $$\frac{GMm}{r^2} = \frac{mv^2}{r}$$
* 轨道速率：
    $$v = \sqrt{\frac{GM}{r}}$$
* 轨道周期：
    $$T = 2\pi\sqrt{\frac{r^3}{GM}}$$

* **开普勒第三定律**（圆轨道）：
    $$T^2 \propto r^3$$
    * 比较绕同一中心质量的轨道。

* **圆轨道能量**：
    $$E_k=\frac{GMm}{2r},\qquad E_p=-\frac{GMm}{r}$$
    $$E_{\text{total}}=-\frac{GMm}{2r}$$
    * 更高的圆轨道速率更低，但总能量更大，即负值的绝对值更小。

* **地球同步轨道**的周期等于地球自转周期，不一定始终位于同一地面点上方。

* **地球静止轨道**是满足以下条件的圆形同步轨道：
    * 在赤道上方，与地球自转同向。
    * 周期与地球自转相同；题目给出 $24$ 小时时使用该值。
    * 相对于地表位置固定。
    * 高度约为 $3.6 \times 10^7$ m。
    * 用于通信与气象监测。

> **📝 例题（英文题干保留；原始来源待考）**
>
> A satellite orbits Earth at a height of 400 km above the surface. Given $R_E = 6.37 \times 10^6$ m and $M_E = 5.97 \times 10^{24}$ kg, calculate the orbital speed and period.
>
> **解答：**
> 1. $r = R_E + h$<br>$= 6.37 \times 10^6 + 4.00 \times 10^5$<br>$= 6.77 \times 10^6$ m
> 2. $v = \sqrt{\frac{GM}{r}}$<br>$= \sqrt{\frac{6.67 \times 10^{-11} \times 5.97 \times 10^{24}}{6.77 \times 10^6}}$<br>$= \sqrt{5.89 \times 10^7}$<br>$= 7.67 \times 10^3$ m s$^{-1}$
> 3. $T = \frac{2\pi r}{v} = \frac{2\pi \times 6.77 \times 10^6}{7.67 \times 10^3} = 5550$ s $\approx 92.4$ min

---

## 3. ⚡ 电场与电容（3.8）
{: id="3--electric-fields-and-capacitance-38"}

[打开电场完整课程](/zh/alevel/a2-physics/electric-fields/)，学习场与力方向、电势图像、叠加场、粒子偏转与练习。[打开电容完整课程](/zh/alevel/a2-physics/capacitance/)，学习电荷、能量、电介质与练习。

### 3.1 电场强度
{: id="31-electric-field-strength"}

* **定义**：放在场中某点的单位正电荷所受的力。
    $$E = \frac{F}{Q}$$
    * $E$ 的单位为 N C$^{-1}$ 或 V m$^{-1}$。
    * 场强是矢量。对小试探电荷 $q$，有 $\mathbf F=q\mathbf E$；负电荷所受力与场方向相反。

### 3.2 库仑定律
{: id="32-coulombs-law"}

真空中两个点电荷之间的力的大小：
$$F = \frac{\lvert Q_1 Q_2\rvert }{4\pi\varepsilon_0 r^2}$$
* $\varepsilon_0$ = 真空介电常数 $= 8.85 \times 10^{-12}$ C$^2$ N$^{-1}$ m$^{-2}$
* $k = \frac{1}{4\pi\varepsilon_0} = 8.99 \times 10^9$ N m$^2$ C$^{-2}$
* 同号相斥，异号相吸；两者受力等大反向。通常可将空气近似为真空。

#### 示例：两点电荷间的力 {#example-coulomb-force}

> **📝 例题（英文题干保留；原始来源待考）**
>
> Two point charges, $+4.0 \times 10^{-6}$ C and $-3.0 \times 10^{-6}$ C, are separated by 0.20 m. Calculate the force between them and state its nature.
>
> **解答：**
> 1. $F = \frac{1}{4\pi\varepsilon_0} \times \frac{\lvert Q_1 Q_2\rvert }{r^2}$<br>$= 8.99 \times 10^9 \times \frac{4.0 \times 10^{-6} \times 3.0 \times 10^{-6}}{(0.20)^2}$
> 2. $F = 8.99 \times 10^9 \times \frac{1.2 \times 10^{-11}}{0.040}$<br>$= 8.99 \times 10^9 \times 3.0 \times 10^{-10}$<br>$= 2.7$ N
> 3. 此力为**吸引力**（异号电荷）。

### 3.3 点电荷的电场
{: id="33-electric-field-of-a-point-charge"}

$$E_r = \frac{Q}{4\pi\varepsilon_0 r^2}$$

这里是以径向向外为正的有符号分量。大小为 $\lvert Q\rvert /(4\pi\varepsilon_0r^2)$；正源电荷的场向外，负源电荷的场向内。$r$ 从源电荷量起；对球对称带电球体的外部场，则从球心量起。

### 3.4 电势
{: id="34-electric-potential"}

* **定义**：将小试探电荷从无穷远移到场中某点时，外力对单位正电荷所做的功。
    $$V = \frac{Q}{4\pi\varepsilon_0 r}$$
    * 正源电荷对应的 $V$ 为**正**，负源电荷对应的为**负**。
    * 单位：V（伏特）或 J C$^{-1}$

### 3.5 电势能
{: id="35-electric-potential-energy"}

$$E_p = QV = \frac{Q_1 Q_2}{4\pi\varepsilon_0 r}$$

* 保留电荷和电势的符号。对固定小试探电荷 $q$，$\Delta E_p=q\Delta V$。
* 电场做功为 $-q\Delta V$。若只有电场力做功，$\Delta E_k=-q\Delta V$。
* 电势按标量相加，场强按矢量相加。电势为零不代表场强为零。
* 选定坐标 $x$ 后，$E_x=-\mathrm dV/\mathrm dx$。切线给出该点的场强；$E_x$–$x$ 图的有符号面积为 $-\Delta V$。
* 场线垂直穿过等势面；电荷沿等势面移动时，电场不做功。

### 3.6 匀强电场
{: id="36-uniform-electric-field"}

两平行板相距 $d$，板间电势差为 $V$：
$$E = \frac{V}{d}$$
* 场线**平行且等间距**，表示匀强场。
* 场线从**正极板指向负极板**。
* 此处 $V$ 表示电势差大小，不是沿粒子路径的有符号变化；近似适用于远离板边缘的区域。
* 粒子以水平速度 $u$ 进入长度为 $L$ 的竖直电场，若初始竖直速度为零且无其他力，则 $t=L/u$、$y=qE_yL^2/(2mu^2)$。场内轨迹为抛物线，出场后沿切线直线运动。场内只有水平速度保持不变。

### 3.7 引力场与电场比较
{: id="37-comparison-of-gravitational-and-electric-fields"}


| 性质 | 引力场 | 电场 |
|----------|-------------------|----------------|
| 场源 | 质量 | 电荷 |
| 力定律 | $F = \frac{GMm}{r^2}$（大小） | $F = \frac{\lvert Q_1Q_2\rvert }{4\pi\varepsilon_0 r^2}$（大小） |
| 场强 | $g = \frac{GM}{r^2}$（大小，向内） | $E_r = \frac{Q}{4\pi\varepsilon_0 r^2}$（向外为正） |
| 势 | $V = -\frac{GM}{r}$ | $V = \frac{Q}{4\pi\varepsilon_0 r}$ |
| 势能 | $E_p = -\frac{GMm}{r}$ | $E_p = \frac{Q_1Q_2}{4\pi\varepsilon_0 r}$ |
| 作用性质 | 总是吸引 | 吸引或排斥 |
{: .wide-table}

### 3.8 电容
{: id="38-capacitance"}

* **定义**：元件储存电荷的能力，即单位电势差对应的储存电荷量。
    $$C = \frac{Q}{V}$$
    * $C$ = 电容（F，法拉）
    * $Q$ = 任一极板电荷量的大小（C），不是两板电荷量大小之和
    * $V$ = 电势差大小（V）
    * $1 \text{ F} = 1 \text{ C V}^{-1}$

### 3.9 平行板电容器
{: id="39-parallel-plate-capacitor"}

对单板有效重叠面积为 $A$、板间距为 $d$ 的宽大平行板，忽略边缘效应，电介质完全填满间隙时：
$$C = \frac{\varepsilon_0 \varepsilon_r A}{d}$$
* $\varepsilon_r$ = 板间材料的相对介电常数

* 相同几何条件下，$\varepsilon_r=C/C_0$。极性分子倾向转到正端沿场方向；束缚表面电荷产生反向的极化电场。
* 连接恒压电源时 $V$ 固定：完全插入介质使 $C$、$Q$ 和储能增为原来的 $\varepsilon_r$，而 $E=V/d$ 不变。
* 隔离时自由极板电荷 $Q$ 固定：完全插入介质使 $C$ 增为原来的 $\varepsilon_r$，$V$、场强和储能减为原来的该倍数的倒数。这些比较假设几何条件不变。

### 3.10 电容器储能
{: id="310-energy-stored-in-a-capacitor"}

$$E = \frac{1}{2}QV = \frac{1}{2}CV^2 = \frac{Q^2}{2C}$$
* 纵轴画 $V$，横轴画 $Q$。储能是**图线下面积** $\int V\,\mathrm dQ$；电容恒定时，过原点的直线下三角形面积为 $QV/2$。

* 电容固定时，两电压间释放的能量为 $C(V_1^2-V_2^2)/2$，不是 $C(V_1-V_2)^2/2$。

---

## 4. 📉 指数变化（3.9）
{: id="4--exponential-change-39"}


### 4.1 电容器充放电
{: id="41-capacitor-charging-and-discharging"}

[打开电容器充放电完整课程](/zh/alevel/a2-physics/capacitor-charge-and-discharge/)，学习电路、例题、练习与必做实验 6。

当 $R$、$C$ 恒定，其他电阻与漏电可忽略时：

| 物理量 | 从零开始充电 | 从 $V_0$ 开始放电 |
|---|---|---|
| 电容器电压 | $V_C=V_s(1-e^{-t/RC})$ | $V_C=V_0e^{-t/RC}$ |
| 电荷量 | $Q=CV_s(1-e^{-t/RC})$ | $Q=Q_0e^{-t/RC}$ |
| 电流大小 | $I=(V_s/R)e^{-t/RC}$ | $I=(V_0/R)e^{-t/RC}$ |
{: .wide-table}

充电时 $V_s=IR+V_C$。电容器电压上升，电阻电压和电流下降。放电时 $I=V_C/R$，电流随电压下降。流过电阻的传统电流方向反转。这些方程给出大小；使用同一有符号电流约定时，两过程符号相反。

#### 示例：RC 放电 {#example-rc-discharge}

> **📝 例题（英文题干保留；原始来源待考）**
>
> A 4700 μF capacitor is charged to 12 V and then discharged through a 10 kΩ resistor. Calculate:
> (a) The initial charge stored
> (b) The time constant
> (c) The time for the PD to fall to 4.0 V
>
> **解答：**
> 1. (a) $Q_0 = CV_0 = 4700 \times 10^{-6} \times 12 = 0.0564$ C $= 56.4$ mC
> 2. (b) $\tau = RC = 10 \times 10^3 \times 4700 \times 10^{-6} = 47$ s
> 3. (c) $V = V_0 e^{-t/RC} \implies 4.0 = 12 \times e^{-t/47}$
> 4. $\frac{4.0}{12} = e^{-t/47} \implies \ln\left(\frac{1}{3}\right) = -\frac{t}{47}$
> 5. $t = 47 \times \ln 3 = 47 \times 1.099 = 51.6$ s $\approx 52$ s

### 4.2 时间常数（电容器）
{: id="42-time-constant-capacitor"}

$$\tau=RC,\qquad T_{1/2}=RC\ln2.$$

* $t=RC$ 时，放电电荷、电压、电流降至初值的约 36.8%。
* 从零充电时，电荷与电压达到终值的约 63.2%，电流降至初值的约 36.8%。
* $5RC$ 代表过程约完成 99.3%，不是精确终点。
* 放电能量遵循 $E_{\text{stored}}=E_0e^{-2t/RC}$，因此能量减半时间为 $RC\ln2/2$。

### 4.3 充放电图像
{: id="43-charging-and-discharging-graphs"}

* 充电的 $Q$、$V_C$ 上升并趋近固定终值。放电的 $Q$、$V_C$ 和电流大小趋近零；其负斜率逐渐接近零。
* 电流是充电 $Q$ 对 $t$ 图的斜率。放电时，流出电流大小为电荷图斜率的负值。
* 电流大小—时间图的面积给出**转移的电荷**，不一定是剩余电荷。放电时，用初始电荷减去已转移电荷。
* 必做实验 6：放电画 $\ln(V_C/1\,\mathrm V)$ 对时间，充电画 $\ln[(V_s-V_C)/1\,\mathrm V]$ 对时间。斜率为 $m=-1/(RC)$，因此 $RC=-1/m$、$C=-1/(Rm)$。
* 跨接电容器的电压表增加了并联放电路径。输入电阻应远大于 $R$，否则须计入等效电阻。

### 4.4 放射性指数衰变
{: id="44-exponential-decay-in-radioactivity"}

放射性衰变遵循同样的指数规律：
$$N = N_0 e^{-\lambda t}$$
* $N$ = 未衰变原子核数，对应时刻 $t$
* $N_0$ = 初始未衰变原子核数
* $\lambda$ = 衰变常量（s$^{-1}$）

* **活度（$A$）**：单位时间内的衰变数。
    $$A = \lambda N = A_0 e^{-\lambda t}$$

* **半衰期（$t_{1/2}$）**：原子核数衰变至一半所需的时间。
    $$t_{1/2} = \frac{\ln 2}{\lambda} = \frac{0.693}{\lambda}$$

* **平均寿命（$\tau$）**：原子核从开始到衰变的平均存活时间。
    $$\tau = \frac{1}{\lambda}$$

### 4.5 用图像求衰变常量
{: id="45-determining-decay-constants-graphically"}

* 画 $\ln N$（或 $\ln A$）对 $t$ 的图：
    * $\ln N = \ln N_0 - \lambda t$
    * 斜率 $= -\lambda$
    * $y$ 轴截距 $= \ln N_0$

---

## 5. 🧲 磁场（3.10）
{: id="5--magnetic-fields-310"}


### 5.1 磁通密度
{: id="51-magnetic-flux-density"}

* **定义**：垂直于磁场的直导线，单位电流、单位长度所受的力。
    $$B = \frac{F}{IL}$$
    * $B$ = 磁通密度（T，特斯拉）
    * $F$ = 力（N）
    * $I$ = 电流（A）
    * $L$ = 磁场中导线的长度（m）

### 5.2 通电导线所受磁场力
{: id="52-force-on-a-current-carrying-conductor"}

长度为 $L$ 的直导线通过电流 $I$，位于匀强磁场 $B$ 中：
$$F = BIL\sin\theta$$
* $\theta$ = 电流方向与磁场的夹角
* $\theta = 90°$（导线垂直磁场）时力**最大**；$\theta = 0°$（导线平行磁场）时力**为零**。
* **方向**：用**弗莱明左手定则**判断。

### 5.3 弗莱明左手定则
{: id="53-flemings-left-hand-rule"}

* **拇指**：运动（受力）方向
* **食指**：磁场方向（N → S）
* **中指**：传统电流方向

### 5.4 运动电荷所受磁场力
{: id="54-force-on-a-moving-charge"}

电荷量大小为 $Q=\lvert q\rvert $ 的粒子以速率 $v$ 垂直进入大小为 $B$ 的匀强磁场，受力大小为：
$$F = BQv$$
* 这是**质谱仪**与**圆形粒子加速器**的原理。
* 磁场力提供向心力：
    $$BQv = \frac{mv^2}{r} \implies r = \frac{mv}{BQ}$$
* 另用 $q$ 的符号判断受力方向。

### 5.5 磁通量
{: id="55-magnetic-flux"}

* **磁通量（$\Phi$）**：磁通密度与垂直于磁场的投影面积之积。
    $$\Phi = BA\cos\theta$$
    * $B$ = 磁通密度（T）
    * $A$ = 面积（m$^2$）
    * $\theta$ = $B$ 与面积**法线**之间的夹角
    * 单位：Wb（韦伯）

### 5.6 磁通链
{: id="56-magnetic-flux-linkage"}

* **磁通链** $= N\Phi = NBA\cos\theta$
    * $N$ = 线圈匝数

### 5.7 法拉第电磁感应定律
{: id="57-faradays-law-of-electromagnetic-induction"}

感应电动势等于磁通链的变化率的负值：
$$\varepsilon = -N\frac{\Delta \Phi}{\Delta t} = -\frac{\Delta (N\Phi)}{\Delta t}$$

* 负号表示感应电动势方向（楞次定律）。

#### 示例：磁通链变化与平均感应电动势 {#example-induced-emf}

> **📝 例题（英文题干保留；原始来源待考）**
>
> A rectangular coil of 200 turns and area $5.0 \times 10^{-3}$ m$^2$ is placed perpendicular to a uniform magnetic field of strength 0.15 T. The field is removed in 0.10 s. Calculate the average induced emf.
>
> **解答：**
> 1. 初始磁通链：$N\Phi = NBA$<br>$= 200 \times 0.15 \times 5.0 \times 10^{-3}$<br>$= 0.15$ Wb
> 2. 最终磁通链 $= 0$（移去磁场）
> 3. $\varepsilon = -N\frac{\Delta \Phi}{\Delta t} = -\frac{0 - 0.15}{0.10} = +1.5$ V
> 4. 感应电动势大小为 **1.5 V**。

### 5.8 楞次定律
{: id="58-lenzs-law"}

感应电流方向总是使其产生的磁场**阻碍引起感应的变化**。
* 这是**能量守恒**的结果。

### 5.9 动生电动势
{: id="59-motional-emf"}

长度为 $L$ 的直导体在匀强磁场中运动，导体、速度、磁场三者互相垂直时，感应电动势大小为：
$$\lvert \varepsilon\rvert =BLv$$

### 5.10 交流电
{: id="510-alternating-currents"}

* 线圈在匀强磁场中以恒定角速度 $\omega$ 转动，产生正弦电动势：
    $$\varepsilon = NBA\omega \sin(\omega t)$$
* **峰值电动势**：$\varepsilon_0 = NBA\omega$
* **有效值（RMS，均方根值）**：
    $$V_{\text{rms}} = \frac{V_0}{\sqrt{2}} \approx 0.707 V_0$$
    $$I_{\text{rms}} = \frac{I_0}{\sqrt{2}} \approx 0.707 I_0$$
* **峰值因数**：$\frac{V_0}{V_{\text{rms}}} = \sqrt{2}$
* **半周期平均值**：$V_{\text{mean}} = \frac{2V_0}{\pi} \approx 0.637 V_0$

### 5.11 变压器
{: id="511-the-transformer"}

变压器改变交流电压的大小，由**软铁芯**和两个线圈构成：**原线圈**与**副线圈**。

* **变压器方程**（理想变压器）：
    $$\frac{V_s}{V_p} = \frac{N_s}{N_p}$$
    * $V_p, V_s$ = 原线圈与副线圈电压
    * $N_p, N_s$ = 原线圈与副线圈匝数

* **功率关系**（理想变压器，效率 100%）：
    $$V_p I_p = V_s I_s$$

* **类型**：
    * **升压**：$N_s > N_p \implies V_s > V_p$（用于输电）
    * **降压**：$N_s < N_p \implies V_s < V_p$（用于本地配电）

* **实际变压器的能量损耗**：
    * 漏磁
    * 铁芯中的涡流
    * 磁滞损耗
    * 线圈电阻发热

* **电力传输**：
    * 远距离输电采用**高电压、低电流**，减小损耗（$P_{\text{loss}} = I^2 R$）。
    * 发电站升压，居民供电前降压。

> **📝 例题（英文题干保留；原始来源待考）**
>
> A step-up transformer has 400 turns on the primary coil and 8000 turns on the secondary coil. The primary voltage is 230 V. Calculate:
> (a) The secondary voltage
> (b) The secondary current if the primary current is 2.0 A (assume 100% efficiency)
>
> **解答：**
> 1. (a) $\frac{V_s}{V_p} = \frac{N_s}{N_p}$<br>$\implies V_s$<br>$= V_p \times \frac{N_s}{N_p}$<br>$= 230 \times \frac{8000}{400}$<br>$= 4600$ V
> 2. (b) $V_p I_p = V_s I_s$<br>$\implies I_s$<br>$= \frac{V_p I_p}{V_s}$<br>$= \frac{230 \times 2.0}{4600}$<br>$= 0.10$ A

---

## 🧪 Unit 3 必做实验
{: id="-key-required-practicals-unit-3"}

1. **必做实验 6——电容器充放电：**记录电势差随时间的变化。放电分析画 $\ln(V/V_0)$ 对 $t$；斜率为 $-1/(RC)$，时间常数等于斜率的负倒数。
2. **必做实验 7——变压器效率：**接电阻负载，测量输入、输出的有效值电压与电流。用 $V_sI_s/(V_pI_p)$ 求效率，研究效率随负载的变化。

简谐系统探究属于 **AS 必做实验 4**。磁铁穿过线圈、磁通链探究是有用的演示，但不是另列的必做实验。见 [OxfordAQA 大纲](https://www.oxfordaqa.com/wp-content/uploads/2022/08/oxfordaqa-a-level-physics-specification.pdf) 6.1。

---

## 🔗 总结：引力场与电场比较
{: id="-summary-comparing-gravitational-fields-and-electric-fields"}


> 引力场与电场具有相似的数学结构；对照学习有助于理解与复习。

本节：[相似点](#similarities) · [不同点](#differences)。

| | 引力场 | 电场 | 含义 |
|---|---|---|---|
| **力的大小** | $F = G\dfrac{Mm}{r^2}$ | $F = \dfrac{1}{4\pi\varepsilon_0}\dfrac{\lvert Qq\rvert }{r^2}$ | 非负的力大小 |
| **场强大小** | $g = \dfrac{GM}{r^2}$ | $E = \dfrac{\lvert Q\rvert }{4\pi\varepsilon_0 r^2}$ | 方向另外说明 |
| **势能** | $E_p = -G\dfrac{Mm}{r}$ | $E_p = \dfrac{1}{4\pi\varepsilon_0}\dfrac{Qq}{r}$ | 由场中位置决定的能量 |
| **势** | $V = \dfrac{E_p}{m} = -\dfrac{GM}{r}$ | $V = \dfrac{E_p}{q} = \dfrac{Q}{4\pi\varepsilon_0 r}$ | 单位质量或单位电荷对应的势能 |
| **场强与势的关系** | $g_r = -\dfrac{dV}{dr}$ | $E_r = -\dfrac{dV}{dr}$ | 有符号径向分量，向外为正 |
{: .wide-table}

### 相似点 {#similarities}


* 点源的力大小均遵循**平方反比**定律：$F \propto \dfrac{1}{r^2}$。
* 场强都定义为**单位质量或单位电荷所受的力**：$g = \dfrac{F}{m}$、$E = \dfrac{F}{Q}$。
* 势都定义为**单位质量或单位电荷对应的势能**：$V = \dfrac{E_p}{m}$、$V = \dfrac{E_p}{Q}$。
* 都是**保守场**：做功与路径无关，势能只取决于位置。
* 有符号径向场强均为**势梯度的负值**：$g_r = -\dfrac{dV}{dr}$、$E_r = -\dfrac{dV}{dr}$，取向外为正。
* 场强是**矢量**，势是**标量**。径向场方程中，须区分大小与有符号分量。
* 都可用**场线**与**等势面**表示。

### 不同点 {#differences}


* 引力**总是吸引**；电场力可**吸引或排斥**，取决于电荷符号。
* 引力势总为**负**（约定无穷远处 $V = 0$）；电势可**正或负**。
* 引力场由**质量**（恒正）产生；电场由**电荷**（可正可负）产生。
* 电子与质子之间的电场力约为引力的 $2.3\times10^{39}$ 倍。应比较实际粒子的 $k\lvert Qq\rvert $ 与 $GMm$；仅比较 $k$ 和 $G$ 的数值不能确定力的比值，因为单位不同。

---

## 🔗 总结：电场与磁场
{: id="-summary-electric-fields-and-magnetic-fields"}


> 电场与磁场有许多差异，但共同构成**电磁感应**及**变压器、发电机**工作的基础。

本节：[两场联系](#how-electric-and-magnetic-fields-are-connected) · [粒子运动](#charged-particles-in-electric-and-magnetic-fields) · [速度选择器](#velocity-selector-electric--magnetic-fields-combined)。

| | 电场 | 磁场 |
|---|---|---|
| **场源** | 静止或运动电荷 | 电流与永磁体 |
| **作用对象** | 静止或运动的电荷 | 运动电荷 |
| **力定律** | $\mathbf F=q\mathbf E$ | $F=B\lvert q\rvert v\sin\theta$（大小） |
| **力方向** | 与场平行（对 $+$ 电荷） | 垂直 $v$ 与 $B$ |
| **场做功** | 可做功，改变动能 | **不做功**（力 $\perp$ 速度） |
| **对速率的影响** | 可以改变速率 | 不改变速率 |
| **场线** | 开放（从 $+$ 到 $-$） | 闭合，无起点或终点 |

### 电场与磁场如何联系 {#how-electric-and-magnetic-fields-are-connected}

电流产生磁场；磁通链变化产生感应电动势（法拉第定律）；感应电流阻碍引起它的变化（楞次定律）。这些概念解释了发电机与变压器的工作。

### 带电粒子在电场与磁场中的运动 {#charged-particles-in-electric-and-magnetic-fields}


| | 电场中 | 磁场中 |
|---|---|---|
| **力** | $\mathbf F=q\mathbf E$ | $F=B\lvert q\rvert v$（大小，$v \perp B$ 时） |
| **力方向** | 正电荷沿 $E$，负电荷逆 $E$ | 垂直 $v$ 与 $B$，方向取决于电荷符号 |
| **轨迹** | 无其他力、垂直进入匀强场时为抛物线 | 无其他力、$v\perp B$ 时在匀强场中做圆周运动 |
| **速率改变？** | 可以，电场可做功 | 不变，磁场力垂直于速度 |
| **动能改变？** | 可以 | 仅磁场力作用时不变 |
| **主要方程** | $\mathbf a=\dfrac{q\mathbf E}{m}$ | $r=\dfrac{mv}{B\lvert q\rvert}$、$T=\dfrac{2\pi m}{B\lvert q\rvert}$ |
{: .wide-table}

### 速度选择器（电场与磁场组合） {#velocity-selector-electric--magnetic-fields-combined}


对互相垂直的电场与磁场，让粒子速度垂直于两场，并使电场力与磁场力相反。以下大小方程中，$Q=\lvert q\rvert $：
* 电场力：$F_E = QE$
* 磁场力：$F_B = BQv$

两力平衡（$F_E = F_B$）时，粒子**不偏转**通过：
$$QE = BQv \implies v = \frac{E}{B}$$

只选择速率为 $v = \dfrac{E}{B}$ 的粒子。这是质谱仪中**速度选择器**的原理。

> **📝 例题（英文题干保留；原始来源待考）**
>
> A velocity selector has $E = 3.0 \times 10^4$ V m$^{-1}$ and $B = 0.20$ T. A proton ($q = 1.6 \times 10^{-19}$ C, $m = 1.67 \times 10^{-27}$ kg) enters the selector.
>
> (a) What speed must the proton have to pass through undeflected?
> (b) It then enters a region with only the magnetic field. Calculate the radius of its circular path.
>
> **解答：**
> 1. (a) $v = \dfrac{E}{B} = \dfrac{3.0 \times 10^4}{0.20} = 1.5 \times 10^5$ m s$^{-1}$
> 2. (b) $r = \dfrac{mv}{BQ}$<br>$= \dfrac{1.67 \times 10^{-27} \times 1.5 \times 10^5}{0.20 \times 1.6 \times 10^{-19}}$<br>$= 7.8 \times 10^{-3}$ m $= 7.8$ mm
