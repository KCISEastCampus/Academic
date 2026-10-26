---
title: "直流电路与分压器"
layout: subjects
mathjax: true
grade: as
subject: as-physics
lang: zh-CN
translation_of: /alevel/as-physics/dc-circuits-and-potential-dividers/
permalink: /zh/alevel/as-physics/dc-circuits-and-potential-dividers/
toc_headings: h2, h3
study_page: true
reading_layout: true
---

<h2 id="start-here">哪些量由元件共享？</h2>

串联路径上，各元件稳态电流相同；并联支路连接同一对端点，所以电势差相同。这来自电荷与能量守恒，不取决于电阻外观。你将化简网络、核对守恒，并设计传感输出。先修：[电学定义与仪表](/zh/alevel/as-physics/charge-current-and-potential/)。

<h2 id="circuits">按实际连接建立方程</h2>

稳态节点的总流入等于总流出。完整回路中每库仑能量变化的有符号总和为零，要同时计入电源提升与元件压降。串联电阻因同电流下电压相加而相加；并联因同电压下电流相加，有：

$$R_s=R_1+R_2+\cdots,\qquad \frac1{R_p}=\frac1{R_1}+\frac1{R_2}+\cdots$$

由 $W=VQ$、$I=Q/t$，得稳态 $P=VI$、$E=VIt$；再由 $R=V/I$，有工作点上的 $P=I^2R=V^2/R$。这些等式不保证灯的电阻与温度无关。

<h2 id="divider">分压器就是带输出抽头的串联电路</h2>

空载且输出跨 $R_2$ 时：

$$V_{\mathrm{out}}=V_{\mathrm{in}}\frac{R_2}{R_1+R_2}$$

两电阻电流相同，较大电阻分得较大电压。“空载”表示输出电流可忽略。若负载与 $R_2$ 并联，须先求下部并联等效电阻，再用分压关系；不能电路变了还沿用原比例。

![分压示意：R1 在输出节点上方，R2 在下方；输出为节点与下部零伏端点间的电压。可选负载跨接同一对点。](/assets/img/physics-as-divider.svg){: width="480" height="330" }

<div class="worked-example" markdown="1">
**完整示范——自拟题。**
<!-- task:divider-worked -->
A 9.0 V ideal supply feeds a 3.0 kΩ upper resistor and 6.0 kΩ lower resistor in series. Output is across the lower resistor. Find the unloaded output. Then connect a 6.0 kΩ load across that output and calculate the new output and the currents through the upper resistor and load.
<!-- /task:divider-worked -->

空载输出 $9(6)/(3+6)=6.0$ V。接负载后下部等效 $6\parallel6=3$ kΩ，输出 4.5 V。上部电流 $(9-4.5)/3000=1.5$ mA；负载电流 $4.5/6000=0.75$ mA，另 0.75 mA 通过下部分压电阻。节点检查能防止把电源电流当作负载电流。
</div>

<h2 id="network-check">陌生组合</h2>

<div class="lesson-check" markdown="1">
<!-- task:circuit-network -->
A 12 V ideal source supplies a 4.0 Ω resistor in series with a parallel pair of 6.0 Ω and 3.0 Ω. Find source current, each branch current and total power. Verify both a junction relation and an energy-per-charge loop relation.
<!-- /task:circuit-network -->
<details markdown="1"><summary>提示</summary>
先化简并联，再串联；用并联共同电压恢复各支路量。
</details>
<details markdown="1"><summary>解答与修复</summary>
并联电阻 2.0 Ω，总电阻 6.0 Ω，电源电流 2.0 A。并联电压 4.0 V，支路电流 2/3 A、4/3 A，和为 2.0 A。串联电阻压降 8.0 V，各回路均 8.0 + 4.0 = 12 V。总功率 24 W，等于串联 16 W 加并联部分 8 W。若平分了支路电流，回看并联究竟共享哪个量。
</details>
</div>

<h2 id="sensor-check">选择有用的输出趋势</h2>

<div class="lesson-check" markdown="1">
<!-- task:circuit-sensor -->
A 6.0 V unloaded divider has a 2.0 kΩ fixed upper resistor and an NTC lower resistor. Its NTC resistance falls from 4.0 kΩ to 1.0 kΩ on heating. Find both output voltages across the NTC and explain how to reverse the temperature trend at the chosen output. Replace the NTC by a lower LDR whose resistance decreases in brighter light: predict the output change. Describe how a variable resistor or three-terminal sliding contact can provide adjustable output.
<!-- /task:circuit-sensor -->
<details markdown="1"><summary>提示</summary>
先说清输出跨哪两个点，再判断变化。
</details>
<details markdown="1"><summary>解答与修复</summary>
NTC 两端输出由 $6(4)/6=4.0$ V 降至 $6(1)/3=2.0$ V。改取上部固定电阻两端，则由 2.0 升至 4.0 V，趋势反转。下部 LDR 随亮度增大而降阻，也使所定义输出降低。变阻器改变电阻比；跨电源的电阻轨道配滑动抽头可取可调比例。本范围不要求电位差计零示测量。若趋势反了，重画端点，再做下方带负载 LDR 新题。
</details>
</div>

<h2 id="cells-check">电池也取决于连接</h2>

同向串联电池电动势相加，反向则相减。相同理想电池并联保持单节电动势，只分担电流。真实内阻及匹配很重要，“相同”是模型条件，不是任意电池并联的操作建议。

<div class="lesson-check" markdown="1">
<!-- task:circuit-cells -->
Three identical ideal 1.5 V cells are connected in the same polarity, first in series and then in parallel, across 9.0 Ω. Find load voltage and current in each case and current from each parallel cell. Explain why paralleling identical cells does not triple voltage, and state which idealisation must be reconsidered for high currents.
Assume equal parallel-cell current sharing, as the limiting model of matched cells with equal small internal resistances.
<!-- /task:circuit-cells -->
<details markdown="1"><summary>提示</summary>
并联电池连接同一对电势；串联才是依次增加每库仑能量。
</details>
<details markdown="1"><summary>解答与修复</summary>
串联：4.5 V、0.50 A。并联：1.5 V，负载 1/6 A，各电池 1/18 A。并联分担电流，不叠加沿路径的电势提升。高电流须计入内阻、额定条件与温升，[下一课](/zh/alevel/as-physics/emf-and-internal-resistance/)建立这个模型。
</details>
</div>

理想电压源只确定并联端电压，不能单独确定各源分流；本课电池分流数值另采用相同小内阻极限的等分假设。

<h2 id="retry">新的带负载传感电路</h2>

<div class="lesson-check" markdown="1">
<!-- task:circuit-retry -->
An 8.0 V ideal supply feeds equal 4.0 kΩ divider resistors. An 8.0 kΩ load is placed across the lower resistor. Find the loaded output and branch currents. Then replace the lower divider resistor by an LDR, keeping the load: predict the direction of output change when illumination increases. Explain why a source-current measurement is not the load-current measurement.
<!-- /task:circuit-retry -->
<details markdown="1"><summary>提示</summary>
把下部电阻与负载一起化简，保留两个输出支路。
</details>
<details markdown="1"><summary>解答与修复</summary>
下部等效 $4\parallel8=8/3$ kΩ，$V_{\mathrm{out}}=8(8/3)/(4+8/3)=3.20$ V。上部／电源电流 1.20 mA，下部分压支路 0.800 mA，负载 0.400 mA，两支路之和核对节点守恒。更亮使 LDR 及其并联等效电阻下降，输出降低。以后用 [Unit 2 综合](/zh/alevel/as-physics/unit-2-review/)在不靠标题提示时选模型。
</details>
</div>


<h2 id="sources-and-next">范围与下一步</h2>

OxfordAQA 9630 §3.4.4–3.4.5. 题目自拟，数值／示意数据为构造，核查点不是官方评分标准。 [官方大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-international-as-and-a-level-physics-specification.pdf).

[上一课](/zh/alevel/as-physics/resistance-and-resistivity/) · [下一课](/zh/alevel/as-physics/emf-and-internal-resistance/) · [课程](/zh/alevel/as-physics/)
