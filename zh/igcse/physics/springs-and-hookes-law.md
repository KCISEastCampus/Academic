---
title: 弹簧与胡克定律
layout: subjects
mathjax: true
grade: igcse
subject: igcse-physics
lang: zh-CN
translation_of: /igcse/physics/springs-and-hookes-law/
permalink: /zh/igcse/physics/springs-and-hookes-law/
toc_headings: h2, h3
study_page: true
---

<h2 id="start-here">能恢复原长，就一定符合胡克定律吗？</h2>

弹簧受力会发生形变。这里需要两种不同的检验：伸长量如何随力变化，以及撤去外力后能否恢复原状。

1. 区分[长度与伸长量](#length-and-extension)。
2. 用加载记录检验[正比模型](#hookes-law)。
3. 为[弹簧必做实验](#spring-practical)作出方法选择。
4. 完成[独立练习](#independent-practice)，再[诊断与重试](#diagnose-and-retry)。

**先修：**[力与运动](/zh/igcse/physics/forces-and-motion/)中的力、重量和平衡。本页任务与记录均为自拟教学材料，并非实测结果，也不代表完成了实体实验。

<h3 id="first-length">先试一试：变化的是哪一个量？</h3>

*自拟题。*

<!-- task:first-length -->

A spring is 50 mm long without a load and 62 mm long with a load. A student records its extension as 62 mm. Correct the record and explain what reference measurement is needed.

<!-- /task:first-length -->

<details markdown="1">
<summary>提示</summary>

比较加载状态和未加载状态。

</details>

<details markdown="1">
<summary>解答与检查</summary>

伸长量为 12 mm。62 mm 是加载后的总长度。加载前应在同一对参考点之间测出原长；只有最终长度，不能确定伸长量。

</details>

<h2 id="length-and-extension">测量变化量，而不是总长度</h2>

用 $L_0$ 表示未加载原长，$L$ 表示加载长度，$e$ 表示伸长量：

$$e=L-L_0$$

拉伸、压缩和弯曲都是形变。**弹性形变（elastic deformation）**是撤去外力后能恢复原状的形变；**非弹性形变（inelastic deformation）**会留下永久变化。必须通过卸载检查恢复情况，不能只凭加载图判断。

拉长的弹簧储存弹性势能，外力做功把能量转入这个储能方式，卸载时可把能量转出。本课求劲度系数不需要额外使用弹性势能公式。

<h2 id="hookes-law">先检验成正比，再使用公式</h2>

在**比例限度（limit of proportionality）**内，力与伸长量成正比。胡克定律是具有适用范围的经验模型：

$$F=ke,\qquad k=\frac{F}{e}$$

这里 F、e 表示拉力和伸长量的大小，k 为**劲度系数（spring constant / stiffness）**。F 用 N、e 用 m 时，k 的单位为 N/m。纵轴为力、横轴为伸长量的直线图中，斜率就是 k；若交换坐标轴，斜率为它的倒数。

**换算示范：**在比例范围内，2.0 N 的力产生 8.0 mm 的伸长量：

$$e=8.0\times10^{-3}\,\mathrm{m},\qquad k=\frac{2.0}{0.0080}=250\,\mathrm{N\,m^{-1}}$$

若计算得到 0.25，单位应为 N/mm，不能写成 N/m。在线性范围内，相同伸长量需要的力越大，k 越大。

**构造加载记录：**原长为 50 mm。完成整组加载后撤去全部载荷，弹簧在给定读数分辨率（1 mm）内恢复为 50 mm。

<!-- record:spring-record -->

| Force / N | Length / mm | Extension / mm |
| --- | --- | --- |
| 0 | 50 | 0 |
| 1 | 54 | 4 |
| 2 | 58 | 8 |
| 3 | 62 | 12 |
| 4 | 67 | 17 |
| 5 | 74 | 24 |

<!-- /record:spring-record -->

<img src="/assets/img/physics-ig-spring.svg" alt="Constructed loading graph with extension in mm horizontally and force in N vertically. Points correspond to the supplied table: (0,0), (4,1), (8,2), (12,3), (17,4), (24,5); no unloading curve is plotted." width="760" height="430">

<h3 id="loading-data">记录支持怎样的结论？</h3>

*自拟题。*

<!-- task:loading-data -->

Use the table and graph to determine the spring constant in the proportional region. Identify the first recorded load that departs from that model. Can the exact limit of proportionality be located from these readings? Does the departure prove permanent deformation?

<!-- /task:loading-data -->

<details markdown="1">
<summary>提示</summary>

先用直线范围，再判断卸载记录检验的是哪一种性质。

</details>

<details markdown="1">
<summary>解答与检查</summary>

前四个点支持劲度系数为 250 N/m。4 N 时模型预测伸长 16 mm，记录却为 17 mm，因此 4 N 是首个记录到偏离的载荷。不能定位精确阈值；应在 3–4 N 间缩小步长，并考虑测量不确定度。卸载后在读数分辨率内恢复到 50 mm，支持本次形变可以恢复，但并不说明全程成正比。非线性不能单独证明永久形变。

</details>

<h2 id="spring-practical">必做实验：让测量真正检验模型</h2>

把弹簧固定在稳固的夹具上，将竖直刻度尺靠近小指针。先记录未加载位置，再逐步增加已知载荷，等待振动停止后平视读数。使用同一弹簧、刻度尺和参考点，记录载荷、长度与伸长量及单位，并按需要重复测量。

轻弹簧支承静止的悬挂物时，拉力等于**全部悬挂物的重量**：

$$F=mg$$

质量必须包含砝码托盘／挂钩。若测参考位置时挂钩仍挂在弹簧上，就应一致地扣除参考载荷，不能把这种状态称为完全未加载。

画力对伸长量图，只在有依据的比例范围内拟合直线。接近偏离处时缩小载荷步长，不强行让一条直线穿过所有点。逐步卸载并复查原长，检验是否恢复；在测量不确定度之外仍有残余伸长，才支持永久形变。

**方法与安全：**固定或压稳支架，防止倾倒；脚避开砝码下方，设置接物托盘，出现过度拉伸风险时停止加载。刻度尺靠近指针、视线正对刻度可减少视差。重复读数用于观察离散，不能消除固定观察角度带来的偏差。以上是实验准备与分析，不能代替实体操作。

<h3 id="hanger-mass">模型中漏掉了什么质量？</h3>

*自拟题。*

<!-- task:hanger-mass -->

A 0.050 kg hanger carries 0.150 kg of added masses. The spring is stationary, its own mass is negligible, and g = 10 N/kg. The extension from the completely unloaded length is 8.0 mm, within the proportional range. Determine the force and spring constant. Explain the bias if only the added masses are counted.

<!-- /task:hanger-mass -->

<details markdown="1">
<summary>提示</summary>

画出悬挂系统，数清弹簧支承的全部物体。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$F=(0.050+0.150)\times10=2.0\,\mathrm{N},\qquad k=\frac{2.0}{0.0080}=250\,\mathrm{N\,m^{-1}}$$

忽略挂钩会得到 1.5 N 和 187.5 N/m，低估劲度系数。伸长量以完全未加载状态为参考，却不计算挂钩重量，前后参考不一致。

</details>

<h3 id="practical-decision">选择有针对性的改进</h3>

*自拟题。*

<!-- task:practical-decision -->

A student reads the spring while it oscillates, always looks down at a ruler behind the pointer, and records only loading data. Propose a change for each problem and say what evidence or error it addresses. Why is “repeat everything five times” insufficient?

<!-- /task:practical-decision -->

<details markdown="1">
<summary>提示</summary>

分别考虑读数离散、观察偏差，以及缺少恢复检验。

</details>

<details markdown="1">
<summary>解答与检查</summary>

先等振动停止再读数；刻度尺靠近指针并平视，减少视差；记录卸载过程并复查原长，检验恢复情况。重复测量可以估计离散，却不能纠正每次相同的观察偏差，也不能代替从未进行的卸载观察。

</details>

<h2 id="independent-practice">独立选用模型</h2>

<h3 id="practice-load">换一根弹簧</h3>

*自拟题。*

<!-- task:practice-load -->

A light spring has unloaded length 80 mm and spring constant 400 N/m. It supports a total mass of 0.30 kg at rest. Use g = 10 N/kg. The proportional model is valid up to a force of 4.0 N. Determine the final length and check that your method is applicable.

<!-- /task:practice-load -->

<details markdown="1">
<summary>提示</summary>

先确定拉力，再预测长度。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$F=0.30\times10=3.0\,\mathrm{N},\quad e=\frac{3.0}{400}=0.0075\,\mathrm{m}=7.5\,\mathrm{mm}$$

最终长度为 87.5 mm。3.0 N 小于给定的 4.0 N 比例限度，且静止、轻弹簧条件允许把拉力取为全部悬挂物重量。

</details>

<h3 id="practice-extrapolation">计算值不一定有依据</h3>

*自拟题。*

<!-- task:practice-extrapolation -->

Use the constructed loading record above. A student predicts that 6.0 N gives 24 mm extension because the low-load spring constant is 250 N/m. Evaluate this prediction. Another spring returns to 50 mm after a 3 N test but to 53 mm after a separate 5 N test. What can be concluded about recovery, assuming the readings resolve 1 mm?

<!-- /task:practice-extrapolation -->

<details markdown="1">
<summary>提示</summary>

检查线性模型范围，并区分两根弹簧的证据。

</details>

<details markdown="1">
<summary>解答与检查</summary>

6 N 的预测把已在 4、5 N 处失效的模型继续外推，不能据此可靠确定伸长量。另一根弹簧在 3 N 测试后于分辨率内恢复，而在 5 N 测试后留下可分辨的 3 mm 残余伸长，支持后一次测试出现永久形变。这不能定位精确弹性限度，也不能改写第一根弹簧的卸载证据。

</details>

<h2 id="diagnose-and-retry">检查参考、单位和模型范围</h2>

| 错误 | 修正 |
| --- | --- |
| 用最终长度充当伸长量 | 减去未加载原长。 |
| 把 N/mm 写成 N/m | 先把伸长量换为米。 |
| 图像弯曲就判断永久形变 | 检查卸载证据。 |
| 把同一个 k 无限外推 | 核对比例范围。 |
| 认为重复能消除所有误差 | 分别分析离散与固定偏差。 |

<h3 id="retry-reference">重试：改变求问方向</h3>

*自拟题。*

<!-- task:retry-reference -->

Within its proportional range, a spring has length 72 mm under a 1.0 N force and 82 mm under a 3.0 N force. Find its spring constant and unloaded length. Explain why 72 mm is not the unloaded length.

<!-- /task:retry-reference -->

<details markdown="1">
<summary>提示</summary>

比较力的变化与伸长量的变化，未知原长会消去。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$k=\frac{3.0-1.0}{(82-72)\times10^{-3}}=200\,\mathrm{N\,m^{-1}}$$

1.0 N 时伸长量为 5.0 mm，因此原长为 67 mm。72 mm 是已经受到非零拉力时的长度，并非原长。

</details>

<h2 id="sources-and-next">范围与下一步</h2>

范围：OxfordAQA International GCSE Physics 9203，3.1.1 中的形变、力与伸长量关系，以及弹簧必做实验。本页任务、数值和图中记录均为自拟或构造材料，没有套用官方分值。范围依据为[官方大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-international-gcse-physics-specification.pdf)。

[上一课：力与运动](/zh/igcse/physics/forces-and-motion/) · [返回 IGCSE 物理](/zh/igcse/physics/)。质心与力矩目前仍为[复习笔记](/zh/igcse/physics/#%EF%B8%8F-17-centre-of-mass--18-moments)，尚未制作成完整学习页。
