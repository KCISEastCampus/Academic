---
title: 交流电
layout: subjects
mathjax: true
grade: a2
subject: a2-physics
lang: zh-CN
translation_of: /alevel/a2-physics/alternating-current/
permalink: /zh/alevel/a2-physics/alternating-current/
toc_headings: h2, h3, h4
study_page: true
---

[A2 物理](/zh/alevel/a2-physics/) · PH03 · 3.10.5

平均值为零的电压，为什么仍能使电阻发热？把校准后的波形与时间、有效值和能量联系起来。

**开始前：**回顾[转动线圈发电机](/zh/alevel/a2-physics/electromagnetic-induction/#rotating-coil)、周期、正弦曲线与电功率。先尝试[独立示波器任务](#data-scope-records)，再展开分析。

## 描述一个完整周期 {#sinusoidal-values}

交流电流反复改变方向。本页研究零均值的正弦信号：

$$v=V_0\sin(\omega t+\phi),\quad i=I_0\sin(\omega t+\phi),\quad T=\frac1f,\quad\omega=2\pi f.$$

电流与电压同相的写法，仅适用于下文假定的纯电阻负载。$V_0$ 是峰值**大小**，$V_{\mathrm{pp}}=2V_0$ 是负峰到正峰的差。相邻异号峰只隔半周期；完整周期应从一个点量到下一个同相点。负电压说明极性，不表示电压大小为负。

## 有效值：匹配热效应 {#rms-and-power}

有效电流是：在**相同电阻**、相同时间内产生相同平均热功率的恒定直流电流。电阻瞬时功率为 $p=i^2R$，平方消除了正负号。一个完整正弦周期中，正弦平方的平均值为一半：

$$I_{\mathrm{rms}}=\frac{I_0}{\sqrt2},\qquad V_{\mathrm{rms}}=\frac{V_0}{\sqrt2}.$$

电阻恒定时：

$$\overline P=I_{\mathrm{rms}}^2R=\frac{V_{\mathrm{rms}}^2}{R}=V_{\mathrm{rms}}I_{\mathrm{rms}}=\frac{V_0I_0}{2}.$$

正弦电压的有符号平均值为零，但其平方平均值为正。不能用平均电压代替有效值，也不能把峰值代入有效值功率乘积。峰值除以 $\sqrt2$ 是**正弦波**结果，不能推广到任意波形或负载。

### 例题 1：比较交流与直流发热 {#example-1}

A sinusoidal supply has peak voltage $12\,\mathrm V$ and is connected across a constant $24\,\Omega$ resistor. Find rms voltage, average power and energy transferred in $60\,\mathrm s$. Compare with a steady $12\,\mathrm V$ supply across the same resistor.

$$V_{\mathrm{rms}}=\frac{12}{\sqrt2}\approx8.5\,\mathrm V,\quad\overline P=\frac{12^2}{2(24)}=3.0\,\mathrm W,\quad E=\overline Pt=180\,\mathrm J.$$

12 V 直流给出 $6.0\,\mathrm W$，为交流平均热功率的两倍。交流只是短暂达到 12 V；约 8.5 V 的直流才与它热效应相当。这里把电阻视为不随温度变化。

若题目**给定**正弦市电为 $230\,\mathrm{V\ rms}$，峰值约 $325\,\mathrm V$，峰峰值约 $651\,\mathrm V$。这是根据给定数值的模型计算，不表示各地电网都相同。课堂示波器输入不得直接连接市电。

## 把示波器当作测量仪器 {#oscilloscope-controls}

先用仪器的接地/零位设置确定零参考线，再返回适当输入模式。**DC 耦合**保留信号的直流电平，恒定直流会显示偏离零位的水平线。**AC 耦合**去掉直流分量，不能据此确定未知的绝对直流电平。本页交流读图任务均为零均值正弦波。

- 纵向灵敏度（常标 Y-gain 或 volts/division）把竖直格数换为电压。若给探头倍率，只计入一次；有效灵敏度已包含倍率时不要重乘。
- 时间基准把横格数换为时间。条件允许时量多个完整周期再除以周期数，可减小端点读数带来的相对影响。
- 触发电平/斜率使波形稳定，不改变信号源频率。定量读数须使用校准后的控制。

$$V_0=n_yS_y,\qquad V_{\mathrm{pp}}=n_{\mathrm{pp}}S_y,\qquad T=\frac{n_xS_t}{k},\qquad f=\frac1T.$$

$k$ 是 $n_x$ 个横格包含的完整周期数。零线到峰值的格数不等于峰峰格数。

### 例题 2：先求单周期，再取倒数 {#example-2}

Two complete cycles span 8.0 horizontal divisions at $0.50\,\mathrm{ms/div}$. The trace spans 6.0 vertical divisions peak-to-peak at an effective $2.0\,\mathrm{V/div}$. Find frequency, peak and rms voltage.

$$T=\frac{8.0(0.50\times10^{-3})}{2}=2.0\times10^{-3}\,\mathrm s,\qquad f=500\,\mathrm{Hz}.$$

$$V_{\mathrm{pp}}=12\,\mathrm V,\quad V_0=6.0\,\mathrm V,\quad V_{\mathrm{rms}}\approx4.2\,\mathrm V.$$

误把两周期共 4 ms 当一个周期，会使频率偏小一半；误把 12 V 当峰值，会把有效值算大一倍。

## 独立读图：校准后的波形 {#data-scope-records}

*自拟题；教学构造的示波器波形，不是仪器实拍。*

The bold horizontal centre line is zero volts. Each major square is one division. Effective vertical sensitivity is $2.0\,\mathrm{V/div}$ and time base is $0.50\,\mathrm{ms/div}$; no extra probe factor is needed. Read peak voltage, peak-to-peak voltage, period and frequency, then calculate rms voltage. Estimate the effect on frequency if the two-cycle span has reading uncertainty ±0.2 division. Explain why the trace alone does not give source resistance.

<img src="/assets/img/physics-ac-scope-task.svg" alt="待作答示波器网格图：正弦波以零线为中心，振幅为 2.5 格，水平方向 8 格包含两个完整周期。加粗中线为零参考；图中仅给波形，供学生独立读取。" width="520" height="430" data-lazy-ignore="true">

<details markdown="1">
<summary>提示</summary>

竖直方向从零线量到峰；横向量两个完整周期的总跨度，除以二后再取倒数。毫秒与秒要换算。

</details>

<details markdown="1">
<summary>分析与再尝试</summary>

$$V_0=5.0\,\mathrm V,\quad V_{\mathrm{pp}}=10\,\mathrm V,\quad T=2.0\,\mathrm{ms},\quad f=500\,\mathrm{Hz},\quad V_{\mathrm{rms}}\approx3.5\,\mathrm V.$$

给定总跨度范围得到 $T=1.95$ 至 $2.05\,\mathrm{ms}$，频率约 488 至 513 Hz，大约 ±2.5%；取倒数后上下界略不对称。源电阻需要受控负载测量等额外信息，不能只从幅值推出。**再尝试：**只把时间基准改为 1.0 ms/div，单周期变为 2.0 格，但实际频率仍为 500 Hz。只把有效纵向灵敏度改为 1.0 V/div，峰高变为 5.0 格，小屏幕可能截顶。

</details>

## 练习 {#practice}

### 练习 1：反推示波器设置 {#question-1}

*改编自 OxfordAQA 9630 PH03 June 2024 Q6.4–6.5；已核对 QP pp.20–22与MS pp.17–18。 明确给出图像尺寸，示意图并非原图复制。*

A zero-centred sine trace from a rotating coil has one period spanning 5.0 cm and zero-to-peak height 3.6 cm on the calibrated grid. The frequency is $50\,\mathrm{Hz}$ and rms emf is $1.27\,\mathrm V$. Determine the time base in ms/cm and vertical sensitivity in V/cm, quoting the controls to one significant figure. At 25 Hz the same coil rotates in the same field with unchanged scope controls: sketch the change in period and amplitude.

<details markdown="1">
<summary>提示</summary>

发电机电动势峰值正比于转动频率，不能只改变横向宽度。

</details>

<details markdown="1">
<summary>解答与再尝试</summary>

$$T=20\,\mathrm{ms},\quad\varepsilon_0=1.27\sqrt2\approx1.80\,\mathrm V.$$

时间基准为 $4\,\mathrm{ms/cm}$，纵向灵敏度为 $0.5\,\mathrm{V/cm}$。25 Hz 时峰高减半为 1.8 cm，周期宽度加倍为 10 cm，屏幕未必容得下完整一周期。未指定时可选任意初相。**再尝试：**频率仍为 50 Hz、匝数加倍，幅值加倍但周期不变。

</details>

### 练习 2：连接线圈角度与相位 {#question-2}

*改编自 OxfordAQA 9630 PH03 June 2024 Q6.3；已核对 QP pp.19–20与MS p.17。 重新明确初始取向，以消除相位歧义。*

A generator starts with its positive normal along the field at $t=0$ and has $\varepsilon=\varepsilon_0\sin\omega t$. At what fraction of a period does its normal first make $51^\circ$ with the field? Where is that point horizontally on a trace with 5.0 divisions per period? Is the emf then at its maximum?

<details markdown="1">
<summary>提示</summary>

使用给定的起始方向，每周期转动 360 度。

</details>

<details markdown="1">
<summary>解答与再尝试</summary>

$$\frac{t}{T}=\frac{51}{360}\approx0.142,\qquad x=5.0\frac{51}{360}\approx0.71\ \mathrm{div}.$$

电动势为正，约为 $0.777\varepsilon_0$，尚未最大。**再尝试：**第一个电动势峰出现在 90 度，此时磁通链为零。

</details>

### 练习 3：读取未知直流电平 {#question-3}

*自拟题。*

With DC coupling, a steady trace is 1.5 divisions above the established zero line. The effective sensitivity is $4.0\,\mathrm{V/div}$. Find the voltage. A student selects AC coupling, sees a centred line and reports zero DC voltage. Explain the error.

<details markdown="1">
<summary>提示</summary>

水平线不一定是零，须看零参考线和耦合方式。

</details>

<details markdown="1">
<summary>解答与再尝试</summary>

直流电平为 $+6.0\,\mathrm V$。AC 耦合去掉了直流分量，中心线不能证明原信号的直流电平为零。**再尝试：**在 DC 模式交换探头极性，有符号位移反转。

</details>

### 练习 4：诊断发热计算 {#question-4}

*自拟题。*

A sinusoidal current has peak $0.80\,\mathrm A$ through a constant $50\,\Omega$ resistor. A student writes “average current is zero, so average power is zero”. Correct the reasoning, calculate average power, and compare with steady current 0.80 A.

<details markdown="1">
<summary>提示</summary>

求功率时平均的是电流平方，不是有符号电流。

</details>

<details markdown="1">
<summary>解答与再尝试</summary>

$$I_{\mathrm{rms}}=\frac{0.80}{\sqrt2}\approx0.57\,\mathrm A,\qquad\overline P=\frac{(0.80)^2(50)}{2}=16\,\mathrm W.$$

0.80 A 直流给出 32 W。交流的正负半周都会发热，电流反向不使电阻把热能送回电源。**再尝试：**反转全部端点标签，有符号电流变号，发热不变。

</details>

### 练习 5：区分信号变化与显示变化 {#question-5}

*自拟题。*

A sine wave appears twice as wide between matching peaks after a control is changed. Give two different possible causes, one involving the source and one involving the oscilloscope. State the extra information needed to distinguish them. Would the height necessarily change in each case?

<details markdown="1">
<summary>提示</summary>

周期格数等于实际周期除以每格时间。

</details>

<details markdown="1">
<summary>解答与再尝试</summary>

固定时间基准时，源频率减半使实际周期加倍；也可能是每格时间减半，使同一周期占双倍格数。须查时间基准或独立测频。源频率变化不一定改变幅值，但其他条件不变的转动线圈在频率减半时幅值也减半；只改时间基准则峰高不变。**再尝试：**说明为何屏幕宽度变化本身不能证明每秒能量变化。

</details>

## 速查 {#quick-reference}

| 量 | 零均值正弦信号 |
| --- | --- |
| 峰峰值 | $V_{\mathrm{pp}}=2V_0$ |
| 有效值 | $V_{\mathrm{rms}}=V_0/\sqrt2$；$I_{\mathrm{rms}}=I_0/\sqrt2$ |
| 周期与频率 | $T=1/f$ |
| 恒定纯电阻负载 | $\overline P=V_{\mathrm{rms}}^2/R$ |
| 其他条件不变的匀速发电机 | $\varepsilon_0\propto f$ |

[上一课：电磁感应](/zh/alevel/a2-physics/electromagnetic-induction/) · [课程目录](/zh/alevel/a2-physics/) · [下一课：变压器与输电](/zh/alevel/a2-physics/transformers-and-power-transmission/)

## 来源与范围 {#sources}

OxfordAQA 9630 PH03，[大纲正文 v4.4](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-international-as-and-a-level-physics-specification.pdf) 3.10.5，印刷第 26 页/PDF 第 25 页，2026-10-21 核对。练习 1–2 改编 June 2024 QP Q6.3–6.5 第 19–22 页，配对 MS 第 17–18 页。已检查原相位/示波器图；本页明确重述尺寸和起始方向。示波器图、其他任务及例题均自拟。教材辅助参考 Jim Breithaupt 第 21.4 节印刷第 381 页。此处使用正弦有效值和纯电阻功率模型，不新增阻抗或功率因数计算章节。

{% include exam_topic_practice.html %}
