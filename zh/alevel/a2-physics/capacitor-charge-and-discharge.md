---
title: 电容器充放电
layout: subjects
mathjax: true
grade: a2
subject: a2-physics
lang: zh-CN
translation_of: /alevel/a2-physics/capacitor-charge-and-discharge/
permalink: /zh/alevel/a2-physics/capacitor-charge-and-discharge/
toc_headings: h2, h3, h4
study_page: true
---

[A2 物理](/zh/alevel/a2-physics/) · PH03 · 3.9.1 电容器充放电

解释充放电电流为什么变化，计算所需时间，并在必做实验 6 中用图像求电容。英文题干与公式保留，讲解、提示和解答使用中文；图内保留英文标签。

- **学习：**从[电路](#the-circuit)开始，比较[放电](#discharging)与[充电](#charging)。
- **作业帮助：**先判断充电还是放电，代入前确定初末电压。
- **复习：**先做[练习](#practice)，再检查[实验方法](#required-practical-6)。

**开始前：**复习[电容](/zh/alevel/a2-physics/capacitance/)，尤其 $Q=CV$ 与 $E_{\text{stored}}=CV^2/2$。电阻和电容换为 SI 单位，使用自然对数 $\ln$，最后才取整。

例题与练习 1–5 为自拟题；练习 6–8 改编自 PH03 试卷，简化题干并提供读数，不需要原图。未赋予官方分值，图示为原创且不按比例绘制。

## 电路 {#the-circuit}

**先想一想：**未充电的电容器经固定电阻接恒压源，电源电压不变，充电电流就不变吗？

<details markdown="1">
<summary>核对你的解释</summary>

不是。电源电压由电阻与电容器分担；电容电压升高时，电阻电压降低。电阻固定，因此 $I=V_R/R$ 减小。这与上一课的恒流充电不同。

</details>

假定电容 $C$、电阻 $R$ 恒定，电源理想，电容漏电和其他电阻可忽略。真实电表可增加放电通路，实验部分会讨论。

$V_s$ 为**电源电压**，$V_C$ 为**电容器两端电压**，充电过程中二者不同。

用转换开关，将同一电阻—电容支路接至电源正端或公共回路端：

- **充电：**电源、电阻、电容器组成串联电路。
- **放电：**电源与支路断开，电阻和电容器形成闭合回路。
- 电流表串联在支路中，高阻电压表或电压传感器并联电容器。

<img src="/assets/img/physics-rc-circuit.svg" alt="转换开关将电阻、电流表、电容串联支路接电源正端充电，或接回路端放电；电压表跨接电容器" width="400" height="420" data-lazy-ignore="true">

刚切到放电时，极板极性不变，但电阻中的**传统电流方向反转**，现在由已充电的电容器驱动电流。

本课 $I$ 表示电流**大小**，两种状态均取正。若两种状态统一使用同一有符号正方向，则放电与充电电流异号。画图先说明约定。

## 放电 {#discharging}

初始电压 $V_0$、电荷 $Q_0=CV_0$。放电时电阻跨接电容器，因此：

$$I=\frac{V_C}{R}=\frac{Q}{RC}.$$

电荷离开极板，$Q$ 减小，故 $V_C=Q/C$ 及电流均减小，每秒流出的电荷越来越少。

$$\frac{\mathrm dQ}{\mathrm dt}=-I=-\frac{Q}{RC}.$$

减少速率与剩余量成正比，得到**指数衰减（exponential decrease）**，不是线性衰减：

$$\boxed{Q=Q_0e^{-t/RC}}.$$

$$\boxed{V_C=V_0e^{-t/RC}}.$$

$$\boxed{I=I_0e^{-t/RC}},\qquad I_0=\frac{V_0}{R}.$$

$e\approx2.718$ 是自然对数底数，不是元电荷。因 $C$ 与 $R$ 恒定，三个量按相同百分比衰减。相等时间内减少的是相同**比例**，不是相同伏数或库仑数。

### 例题 1：电压、电荷与电流 {#example-1-voltage-charge-and-current}

A $100\,\mathrm{\mu F}$ capacitor starts at $8.0\,\mathrm V$ and discharges through $100\,\mathrm{k\Omega}$. Find its voltage, charge and current after $15\,\mathrm s$.

$$RC=(100\times10^3)(100\times10^{-6}).$$

$$RC=10\,\mathrm s.$$

$$V_C=8.0e^{-15/10}=\boxed{1.8\,\mathrm V}.$$

使用未取整电压：

$$Q=CV_C=\boxed{180\,\mathrm{\mu C}}.$$

$$I=\frac{V_C}{R}=\boxed{18\,\mathrm{\mu A}}.$$

**检查：**三者都为初值的 $e^{-1.5}\approx0.223$。此处若用 $I=Q/t$，就会用错误电荷求平均量，而非瞬时电流。

## 充电 {#charging}

从未充电状态开始，由基尔霍夫电压定律：

$$V_s=IR+V_C.$$

$$I=\frac{V_s-V_C}{R}.$$

初始 $V_C=0$，全部电源电压加在电阻上，$I_0=V_s/R$。随着 $V_C$ 增大，$V_s-V_C$ 减小，电流下降，电容电压趋近电源电压。

$$\boxed{V_C=V_s(1-e^{-t/RC})}.$$

$$\boxed{Q=CV_s(1-e^{-t/RC})}.$$

$$\boxed{I=\frac{V_s}{R}e^{-t/RC}}.$$

这些表达式假定**初始未充电**。$CV_s$ 是最终电荷，不是任意时刻电荷。充电电压指数式**趋近上限**，不是指数增长 $V_se^{t/RC}$。

若初始电压为同极性的 $V_i$，更一般的表达式为：

$$V_C=V_s+(V_i-V_s)e^{-t/RC}.$$

仅在给出非零初始电压时使用；常见未充电情况取 $V_i=0$。

### 例题 2：分担电源电压 {#example-2-supply-voltage-is-shared}

An uncharged $220\,\mathrm{\mu F}$ capacitor charges from $6.0\,\mathrm V$ through $47\,\mathrm{k\Omega}$. Find the capacitor voltage, resistor voltage and current after one time constant.

$$RC=(47\times10^3)(220\times10^{-6}).$$

$$RC=10.34\,\mathrm s.$$

在 $t=RC$ 时，$e^{-t/RC}=e^{-1}$：

$$V_C=6.0(1-e^{-1})=\boxed{3.8\,\mathrm V}.$$

$$V_R=V_s-V_C=\boxed{2.2\,\mathrm V}.$$

$$I=\frac{V_R}{R}=\boxed{47\,\mathrm{\mu A}}.$$

**检查：**用未取整值确认 $V_C+V_R=6.0\,\mathrm V$。电容约达到最终电压的 63%，电流降到初值的约 37%。

## 时间常数与减半时间 {#time-constant-and-time-to-halve}

**时间常数（time constant）**为：

$$\boxed{\tau=RC}.$$

单位为秒：$\Omega\,\mathrm F=(\mathrm{V/A})(\mathrm{C/V})=\mathrm{C/A}=\mathrm s$。

- 放电一个时间常数后，$Q$、$V_C$、$I$ 都降到初值的 $e^{-1}\approx0.368$。
- 从零充电时，$Q$ 与 $V_C$ 升至末值的 $1-e^{-1}\approx0.632$；电流降至 $0.368I_0$。
- 增大 $R$ 或 $C$ 都使过程变慢，任一加倍都会使 $\tau$ 加倍。

时间常数**不是减半时间**。放电时：

$$\frac12=e^{-T_{1/2}/RC}.$$

$$\boxed{T_{1/2}=RC\ln2\approx0.693RC}.$$

每多经过 $T_{1/2}$，剩余电荷、电压、电流再次减半。充电时减半的是**未达到的差值**$V_s-V_C$。从零达到末电压一半也需 $RC\ln2$。

在 $5RC$ 时，放电电压比例为 $e^{-5}\approx0.00674$，即 0.674%；从零充电约达末值的 99.3%，可视为实际中“基本完成”，但理想指数在有限时间内不会真正达到极限。

### 例题 3：达到指定电压 {#example-3-reaching-a-specified-voltage}

For $R=100\,\mathrm{k\Omega}$ and $C=100\,\mathrm{\mu F}$, $RC=10\,\mathrm s$.

**从 $8.0\,\mathrm V$ 放电至 $2.0\,\mathrm V$：**

$$\frac{2.0}{8.0}=e^{-t/10}.$$

$$t=10\ln\left(\frac{8.0}{2.0}\right)=\boxed{14\,\mathrm s}.$$

**从零充电到 $6.0\,\mathrm V$，电源为 $8.0\,\mathrm V$：**

$$\frac{6.0}{8.0}=1-e^{-t/10}.$$

剩余比例为 $1-6.0/8.0=0.25$，故时间同样为 $10\ln4\approx\boxed{14\,\mathrm s}$。

**检查：**两者都是将相应剩余量降到四分之一。充电题不能直接把 $V_C/V_s$ 代入放电方程。

## 图像判读 {#reading-graphs}

### 形状与端点 {#shapes-and-end-points}

放电时 $Q$、$V_C$ 与电流大小开始下降快，之后趋零。**斜率为负，但负得越来越少**；若曲线越来越陡、突然结束或穿过时间轴，都不符合该理想模型。

从零充电时，$Q$ 和 $V_C$ 起初上升快，之后趋于末值；电流从 $V_s/R$ 下降至零。

<img src="/assets/img/physics-rc-graphs.svg" alt="归一化充放电图：一个时间常数处分别为 0.632 和 0.368；在相同参数与电压下，两种电流大小按同一指数衰减" width="400" height="650" data-lazy-ignore="true">

同一 $R$、$C$、$V_s$ 下，从零充电的电流大小曲线与从 $V_0=V_s$ 放电相同。若使用统一有符号电流，放电曲线应反射到时间轴下方。

### 斜率 {#gradients}

- **充电 $Q$ 对 $t$ 图**的斜率为充电电流 $I=\mathrm dQ/\mathrm dt$。
- **放电 $Q$ 对 $t$ 图**的斜率为 $-I$，其中 $I$ 是流出电流的大小。
- $V_C$ 对 $t$ 图的斜率大小乘 $C$，得到电流大小。

放电曲线在 $t=0$ 处的切线与时间轴交于 $t=RC$；充电电压曲线在 $t=0$ 处的切线与末电压线交于 $t=RC$。画切线，不是跨两远点的割线。37% 法或对数线性拟合通常更易准确使用。

### 面积 {#areas}

**电流大小—时间图**下的面积为转移电荷：

$$\Delta Q_{\text{moved}}=\int I\,\mathrm dt.$$

从 $t=0$ 到 $t=T$ 放电时，面积给出**流失电荷** $Q_0-Q(T)$，因此：

$$Q(T)=Q_0-\Delta Q_{\text{moved}}.$$

从 $T$ 到无穷远的面积是仍可流出的剩余电荷 $Q(T)$。充电从零时刻到 $T$ 的面积为增加电荷；仅初始未充电时等于储存电荷。电压—时间图面积不是电荷。

#### 例题 4：流失电荷与剩余电荷 {#example-4-charge-lost-and-charge-remaining}

A $100\,\mathrm{\mu F}$ capacitor discharges from $8.0\,\mathrm V$ through $100\,\mathrm{k\Omega}$. Find the charge represented by the area under its current graph from zero to $10\,\mathrm s$, and the charge remaining then.

$$Q_0=CV_0=800\,\mathrm{\mu C}.$$

$$Q(10)=800e^{-1}\approx\boxed{290\,\mathrm{\mu C}}.$$

面积代表流失的电荷：

$$Q_0-Q(10)\approx\boxed{510\,\mathrm{\mu C}}.$$

**检查：**用未取整值，流失量与剩余量之和为 $800\,\mathrm{\mu C}$。零到 $10\,\mathrm s$ 的阴影面积不直接给剩余电荷。

## 放电中的能量 {#energy-during-discharge}

储能依赖电压的**平方**。结合 $V_C=V_0e^{-t/RC}$ 和 $E_{\text{stored}}=CV_C^2/2$：

$$\boxed{E_{\text{stored}}=E_0e^{-2t/RC}}.$$

能量减半时间为 $RC\ln2/2$，是电压减半时间的一半。电压降至一半时，能量仅剩四分之一。理想电阻放电中，电容器损失的能量在电阻上耗散。

### 例题 5：电压比例不等于能量比例 {#example-5-voltage-fraction-is-not-energy-fraction}

In Example 1, the initial energy is:

$$E_0=\frac12(100\times10^{-6})(8.0)^2.$$

$$E_0=3.2\,\mathrm{mJ}.$$

经过 $15\,\mathrm s$，$t/RC=1.5$，所以：

$$E_{\text{stored}}=3.2e^{-3}=\boxed{0.16\,\mathrm{mJ}}.$$

$$E_{\text{lost}}\approx\boxed{3.0\,\mathrm{mJ}}.$$

**检查：**能量剩余 $e^{-3}\approx0.0498$，而电压剩余 $e^{-1.5}\approx0.223$；能量相减前保留额外位数。

## 必做实验 6 {#required-practical-6}

研究电容器充放电，用**对数线性作图（log-linear plotting）**确定时间常数 $RC$。

### 收集有效读数 {#collecting-useful-readings}

1. 搭建上述转换电路，使用合适低压源，不超过电容额定电压。电解电容注意极性；改接前断电，操作前经电阻放电。
2. 测量 $R$，选择 $R$ 和 $C$，使电压变化足够慢，可在多个时间常数内采集多组读数。快速变化可用传感器与数据记录器。
3. 高输入电阻电表或传感器并联电容，充至电压基本稳定，记为 $V_0$。
4. 切到放电，并从 $t=0$ 开始记录；等时间间隔读电压，每次实验保持 $R$、$C$ 不变。
5. 重新充到相同初电压后重复，比较重复测量；研究充电时先将电容放空，并单独记录 $V_s$。

电表不应形成显著额外放电通路。若电表电阻 $R_V$ 与 $R$ 可比，放电等效电阻为：

$$R_{\text{eff}}=\left(\frac1R+\frac1{R_V}\right)^{-1}.$$

这会加快放电。应使 $R_V$ 远大于 $R$，或在模型中计入电表电阻；高阻表不等于电流严格为零。

### 对数线性分析 {#log-linear-analysis}

放电方程取自然对数：

$$y=\ln\left(\frac{V_C}{1\,\mathrm V}\right).$$

$$y_0=\ln\left(\frac{V_0}{1\,\mathrm V}\right).$$

$$y=y_0-\frac{t}{RC}.$$

用伏特表示的数值构成无量纲对数。$\ln(V_C/1\,\mathrm V)$ 对 $t$ 应为直线，且：

$$\boxed{m=-\frac1{RC}},\qquad \boxed{RC=-\frac1m}.$$

$$\boxed{C=-\frac1{Rm}}.$$

斜率单位为 $\mathrm{s^{-1}}$。拟合可用数据，在**最佳拟合线**取相隔较远的两点，不用相邻测量点。直线不必过原点，截距是初始电压数值的对数。

充电中指数衰减的是**距末电压的差值**：

$$V_s-V_C=V_se^{-t/RC}.$$

画 $\ln[(V_s-V_C)/1\,\mathrm V]$ 对 $t$，不是 $\ln(V_C/1\,\mathrm V)$，斜率同为 $-1/RC$。不能对零或负差值取对数。

<img src="/assets/img/physics-rc-log.svg" alt="放电电压从 8 V 指数下降，时间常数 10 s；自然对数对时间为斜率负 0.100 每秒的直线" width="400" height="600" data-lazy-ignore="true">

很小的放电电压或充电剩余差值有较大相对不确定度。放电时近似 $\Delta(\ln V)\approx\Delta V/V$。可说明理由排除低于仪器有效分辨率的读数，不能只删除不合预期的点。若后续仍符合模型，开关或计时延迟只改变截距，不改变斜率。

充电时 $V_s$ 的不确定度也影响差值，接近末电压时尤其明显。对数图弯曲可提示电阻变化、漏电、仪器负载或模型不适合；先检查电路和读数，不要强行拟合直线。

若用 $\log_{10}$ 代替 $\ln$，斜率为 $-1/(RC\ln10)$，自然对数公式不能原样照搬。

#### 例题 6：拟合直线与不确定度 {#example-6-a-fitted-line-and-uncertainty}

A discharge experiment uses $R=100\,\mathrm{k\Omega}$. The best-fit natural-log line has gradient $-0.100\,\mathrm{s^{-1}}$. Acceptable steepest and shallowest lines give $-0.105$ and $-0.095\,\mathrm{s^{-1}}$. The resistance uncertainty is 2%.

$$RC=-\frac1{-0.100}=\boxed{10.0\,\mathrm s}.$$

$$C=\frac{10.0}{100\times10^3}=\boxed{100\,\mathrm{\mu F}}.$$

用可接受斜率范围的一半估计不确定度：

$$\Delta m=\frac{0.105-0.095}{2}=0.005\,\mathrm{s^{-1}}.$$

斜率不确定度为 5%。因 $C=1/(R\lvert m\rvert)$，相加百分不确定度得到约 $2\%+5\%=7\%$，即 $C=(100\pm7)\,\mathrm{\mu F}$。这是近似界限估计，不代表独立随机误差总要这样相加。

**检查：**斜率为负，时间常数与电容为正。最陡和最缓直线应有误差棒或合理数据散布依据。

### 数据探究：选择区间并检验拟合 {#data-rc-records}

*Self-written; constructed teaching data, not measurements from a completed practical.*

A capacitor discharges through a $100\,\mathrm{k\Omega}$ resistor (uncertainty 2%). A high-input-resistance sensor has voltage uncertainty ±0.02 V; take timing uncertainty as negligible here. The switch closes at $t=0$.

| Time / s | Capacitor voltage / V |
| --- | --- |
| 0 | 8.00 |
| 5 | 4.86 |
| 10 | 2.93 |
| 15 | 1.79 |
| 20 | 1.08 |
| 25 | 0.66 |
| 30 | 0.40 |
| 35 | 0.24 |
| 40 | 0.15 |
| 45 | 0.09 |
| 50 | 0.05 |
| 55 | 0.03 |
| 60 | 0.02 |

1. Plot a suitable transformed graph. Choose and justify a fitting interval using the sensor uncertainty; do not remove a reading merely because it misses your line. Show the line and two separated points used to determine its gradient.
2. Estimate the time constant and capacitance. Inspect residuals (observed value minus fitted value) over your chosen interval. Use voltage error bars, or their transformed equivalents, to explain why late readings give weak evidence about curvature.
3. A student says a straight log plot proves the voltmeter has no effect. Assess this claim. Then explain how a resistance that increases during the run would change the gradient.

这是**自拟题与构造教学数据**，不是已完成实际实验的测量。先自行选坐标和拟合区间；用原始读数作图，再估算参数并评价模型。

<details markdown="1">
<summary>提示</summary>

参考前文的对数线性分析。0.40 V 处电压相对不确定度为 5%；0.02 V 处为 100%，下界到达零，无法取对数。恒定的并联负载与随时间改变的电阻有不同后果。

</details>

<details markdown="1">
<summary>分析与再尝试</summary>

一个有依据的选择是 0–30 s；其他说明充分的区间及图上读数也可接受。对这七个自然对数读数作最小二乘拟合：

$$y\approx2.0781-(0.09985\,\mathrm{s^{-1}})t.$$

$$RC\approx10.0\,\mathrm s,\qquad C\approx100\,\mathrm{\mu F}.$$

该区间内残差很小且正负交替，与给定电压不确定度内的舍入相符，没有显示系统弯曲。先画不确定度范围，再判断可接受斜率；估计 $C$ 的不确定度还要考虑电阻。100 μF 是估计值，不是电容的精确真值。

末段电压的相对不确定度很大，取对数使散布更明显，不能据此断言指数模型失效。下界为零时，不能把该下界画到对数坐标上。

恒定输入电阻并联会使有效电阻变小但保持恒定，因此图仍可为直线；忽略它会低估 $RC$ 及电容。若放电中电阻增大，负对数斜率的绝对值变小，曲线逐渐变缓。这是可检验的解释，不是唯一原因的证明。

**再尝试：**若记录在开关闭合 3 s 后才开始，而电阻恒定，哪项拟合量改变？截距改变；斜率、时间常数与电容估计不变。

</details>

## 练习 {#practice}

先写正确充电或放电方程。图像题先识别坐标轴，再解释斜率或面积含义。

### 练习 1：一个时间常数 {#question-1-one-time-constant}

An uncharged $470\,\mathrm{\mu F}$ capacitor charges from a $12\,\mathrm V$ supply through $10\,\mathrm{k\Omega}$. Find the time constant, initial current, and capacitor voltage and current at one time constant. Explain why current decreases.

<details markdown="1">
<summary>提示</summary>

在 $t=RC$ 时，电流比例用 $e^{-1}$，电容电压比例用 $1-e^{-1}$。

</details>

<details markdown="1">
<summary>解答</summary>

$$RC=(10\times10^3)(470\times10^{-6}).$$

$$\boxed{RC=4.7\,\mathrm s}.$$

$$I_0=\frac{12}{10\times10^3}=\boxed{1.2\,\mathrm{mA}}.$$

$$V_C=12(1-e^{-1})=\boxed{7.6\,\mathrm V}.$$

$$I=1.2e^{-1}=\boxed{0.44\,\mathrm{mA}}.$$

电容电压升高，固定电阻上的电压降低，因此电流减小。电源电压虽固定，电阻电压并不固定。

</details>

### 练习 2：电压两次减半 {#question-2-voltage-halves-twice}

A $68\,\mathrm{\mu F}$ capacitor discharges from $9.0\,\mathrm V$ through $20\,\mathrm{k\Omega}$. Find its time to halve, the time to reach $2.25\,\mathrm V$, and the fraction of initial energy remaining at that voltage.

<details markdown="1">
<summary>提示</summary>

$2.25\,\mathrm V$ 是 $9.0\,\mathrm V$ 的四分之一；能量正比于电压平方。

</details>

<details markdown="1">
<summary>解答</summary>

$$RC=(20\times10^3)(68\times10^{-6}).$$

$$RC=1.36\,\mathrm s.$$

$$T_{1/2}=1.36\ln2=\boxed{0.94\,\mathrm s}.$$

$$t=1.36\ln4=\boxed{1.9\,\mathrm s}.$$

能量比例为 $(2.25/9.0)^2=\boxed{1/16}$，即 6.25%。电荷和电压各减半两次，能量却减少到十六分之一。

</details>

### 练习 3：斜率与面积 {#question-3-a-gradient-and-an-area}

At one instant on a discharge voltage graph, the tangent gradient is $-0.30\,\mathrm{V\,s^{-1}}$. Capacitance is $200\,\mathrm{\mu F}$. Find the current magnitude. During the first $5.0\,\mathrm s$, the area under the current-magnitude graph is $0.40\,\mathrm{mC}$. If initial charge is $1.0\,\mathrm{mC}$, find the charge remaining.

<details markdown="1">
<summary>提示</summary>

使用 $I=C\lvert \mathrm dV_C/\mathrm dt\rvert $；面积为该时间段内转移的电荷。

</details>

<details markdown="1">
<summary>解答</summary>

$$I=(200\times10^{-6})(0.30)=\boxed{60\,\mathrm{\mu A}}.$$

电容器失去电荷，电荷斜率为负，但电流大小为正。剩余电荷为 $1.0-0.40=\boxed{0.60\,\mathrm{mC}}$。

</details>

### 练习 4：充到 90% {#question-4-charging-to-90}

An uncharged $1000\,\mathrm{\mu F}$ capacitor charges through $2.2\,\mathrm{k\Omega}$ from $5.0\,\mathrm V$. Find the time to reach 90% of its final voltage and the current then. Can you use $Q=It$ with the instantaneous current to find its total charge?

<details markdown="1">
<summary>提示</summary>

距末值的差是 0.10，而不是 0.90；电流在变化。

</details>

<details markdown="1">
<summary>解答</summary>

$$RC=2.2\,\mathrm s,\qquad e^{-t/RC}=0.10.$$

$$t=2.2\ln10=\boxed{5.1\,\mathrm s}.$$

$$I=\frac{5.0-4.5}{2200}=\boxed{0.23\,\mathrm{mA}}.$$

不能。用单一瞬时电流代入 $Q=It$ 就假设电流恒定。这里应使用 $Q=CV_C=\boxed{4.5\,\mathrm{mC}}$ 或变化电流曲线下的面积。

</details>

### 练习 5：电压表改变了电路 {#question-5-the-voltmeter-changes-the-circuit}

A capacitor discharges through $1.0\,\mathrm{M\Omega}$. A voltmeter of input resistance $10\,\mathrm{M\Omega}$ is across it. Find the effective discharge resistance. If the measured time constant is divided by $1.0\,\mathrm{M\Omega}$ to estimate capacitance, is that estimate too high or too low? Explain how to reduce the effect.

<details markdown="1">
<summary>提示</summary>

电压表是额外并联电阻，此次放电应使用 $RC=R_{\text{eff}}C$。

</details>

<details markdown="1">
<summary>解答</summary>

$$R_{\text{eff}}=\frac{(1.0)(10)}{1.0+10}\,\mathrm{M\Omega}.$$

$$\boxed{R_{\text{eff}}\approx0.91\,\mathrm{M\Omega}}.$$

测得时间常数约为无负载值的 $0.909$；除以 $1.0\,\mathrm{M\Omega}$ 会得到约 $0.909C$，低估约 9.1%。应使用输入电阻更大的表，或计入 $R_{\text{eff}}$ 后计算 $C$。

</details>

### 练习 6：对数图与并联电阻 {#question-6-a-log-plot-and-parallel-resistors}

**Adapted from OxfordAQA PH03, January 2020, Question 2.** The numerical readings below describe an idealised straight-line plot; they replace the original plotted readings.

A capacitor initially at $5.0\,\mathrm V$ discharges through parallel resistors $R_1$ and $R_2$. A plot of $\ln(Q/1\,\mathrm C)$ against time has intercept $-7.40$ and gradient $-0.0127\,\mathrm{s^{-1}}$. $R_1=3.2\,\mathrm{M\Omega}$. Determine initial charge, capacitance, time constant and $R_2$. How does removing $R_2$ change the initial discharge rate after recharging to the same voltage?

<details markdown="1">
<summary>提示</summary>

对截距取指数。对数斜率为 $-1/(R_{\text{eff}}C)$，其中两电阻并联。

</details>

<details markdown="1">
<summary>解答</summary>

$$Q_0=e^{-7.40}\,\mathrm C.$$

$$\boxed{Q_0=6.1\times10^{-4}\,\mathrm C}.$$

$$C=\frac{Q_0}{5.0}\approx\boxed{120\,\mathrm{\mu F}}.$$

$$RC=-\frac1{-0.0127}=\boxed{79\,\mathrm s}.$$

用未取整数值求 $R_{\text{eff}}=RC/C\approx0.644\,\mathrm{M\Omega}$，再得：

$$\frac1{R_2}=\frac1{R_{\text{eff}}}-\frac1{R_1}.$$

$$\boxed{R_2\approx0.81\,\mathrm{M\Omega}}.$$

移除 $R_2$，电阻从 $R_{\text{eff}}$ 增大到 $R_1$；电容不变，时间常数增大。相同初电压下 $I_0=V_0/R$ 更小，所以初始电荷流失速率减小。需用电阻和电流解释，不能只说“放电更慢”。

原图允许一定读数范围；官方 $R_2$ 约为 $0.84\,\mathrm{M\Omega}$。本页明确提供的读数得到上面独立计算的结果。

</details>

### 练习 7：电流读数与流失电荷 {#question-7-current-readings-and-charge-lost}

**Adapted from OxfordAQA PH03, June 2024, Question 5.1–5.3.** Explicit readings replace the original graph.

A charged capacitor discharges through $220\,\mathrm{k\Omega}$. Initial current magnitude is $28.5\,\mathrm{\mu A}$ and its time to halve is $1.83\,\mathrm s$. Find the initial capacitor voltage, time constant and capacitance. Explain how the area under the current graph from zero to $6.0\,\mathrm s$ can be used to find charge remaining, and calculate that remaining charge.

<details markdown="1">
<summary>提示</summary>

使用 $V_0=I_0R$、$RC=T_{1/2}/\ln2$ 和 $Q(t)=Q_0e^{-t/RC}$，给定面积代表转移电荷。

</details>

<details markdown="1">
<summary>解答</summary>

$$V_0=(28.5\times10^{-6})(220\times10^3).$$

$$\boxed{V_0=6.3\,\mathrm V}.$$

$$RC=\frac{1.83}{\ln2}\approx2.64\,\mathrm s.$$

$$C=\frac{RC}{220\times10^3}\approx\boxed{12\,\mathrm{\mu F}}.$$

用未取整值可得 $Q_0=CV_0\approx75.2\,\mathrm{\mu C}$。零到 $6.0\,\mathrm s$ 的面积为转移电荷，要从 $Q_0$ 中减去。也可以：

$$Q(6.0)=Q_0e^{-6.0/RC}.$$

$$\boxed{Q(6.0)\approx7.8\,\mathrm{\mu C}}.$$

该时段约转移 $67\,\mathrm{\mu C}$。初电压与电容在官方图像读数允许范围内与答案一致。

</details>

### 练习 8：电路与两条电流曲线 {#question-8-a-circuit-and-two-current-curves}

**Adapted from OxfordAQA PH03, June 2024, Question 5.4–5.5.**

Describe how to connect the ammeter, resistor, capacitor and changeover switch to measure current during both charge and discharge. For the same $R$, $C$ and supply voltage, compare the charging current-magnitude curve from an uncharged capacitor with the discharge curve from a capacitor fully charged to the supply voltage.

<details markdown="1">
<summary>提示</summary>

开关两位置都要使电流表留在电阻—电容支路。比较初电流与时间常数。

</details>

<details markdown="1">
<summary>解答</summary>

电阻、电流表、电容串联，支路接转换开关动触点；两固定触点分别接电源正端和回路端。电容另一端接公共回路端，形成不含电源的放电回路。参看本课开头电路图。

两种电流大小均从 $V_s/R$ 开始，按 $e^{-t/RC}$ 衰减，曲线重合；负斜率逐渐变得不那么负，趋于零但不会突然截断。放电电流反向，使用有符号电流时两曲线异号。

</details>

## 速查 {#quick-reference}

| 物理量 | 方程或解释 |
|---|---|
| 时间常数 | $\tau=RC$ |
| 放电电压 | $V_C=V_0e^{-t/RC}$ |
| 放电电荷 | $Q=Q_0e^{-t/RC}$ |
| 放电电流大小 | $I=(V_0/R)e^{-t/RC}$ |
| 从零充电 | $V_C=V_s(1-e^{-t/RC})$；$Q=CV_C$ |
| 充电电流 | $I=(V_s/R)e^{-t/RC}$ |
| 电荷或电压减半时间 | $T_{1/2}=RC\ln2$ |
| 放电至比例 $f$ | $t=-RC\ln f$ |
| 从零充电至比例 $f$ | $t=-RC\ln(1-f)$ |
| 对数线性斜率 | $m=-1/(RC)$，使用自然对数 |
| 电流大小图下面积 | 该时段转移的电荷 |
| 放电能量 | $E_{\text{stored}}=E_0e^{-2t/RC}$ |

继续之前，检查能否解释电流减小、画出三类图、区分时间常数与减半时间、解释斜率和面积，并用对数线性图求 $RC$。

[上一课：电容](/zh/alevel/a2-physics/capacitance/) · [课程目录](/zh/alevel/a2-physics/) · [放射性参考笔记](/zh/alevel/a2-physics/quick-reference/#44-exponential-decay-in-radioactivity)

<details markdown="1">
<summary>来源与试题表述</summary>

本课依据 [OxfordAQA 物理大纲](https://www.oxfordaqa.com/wp-content/uploads/2022/08/oxfordaqa-a-level-physics-specification.pdf) 3.9.1 与必做实验 6。教材参考：Jim Breithaupt，*Oxford International AQA Examinations: International A Level Physics*，19.4，印刷页 346–349。短讲解、电路推理与实验分析参考教师 AS 讲义。

练习 6–8 改编自 PH03 January 2020 Q2、June 2024 Q5。英文原页说明编写时参考过官方评分标准；本页明确提供数值读数，改编答案经独立检查，未照抄教材答案。新增原始记录探究是自拟题，使用构造数据，不设置官方分值；数据分析练习不表示实际实验已完成。后续放射性和磁场不属于本学习页。

</details>
