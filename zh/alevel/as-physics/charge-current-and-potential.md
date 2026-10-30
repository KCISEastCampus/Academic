---
title: "电荷、电流与电势差"
layout: subjects
mathjax: true
grade: as
subject: as-physics
lang: zh-CN
translation_of: /alevel/as-physics/charge-current-and-potential/
permalink: /zh/alevel/as-physics/charge-current-and-potential/
toc_headings: h2, h3
study_page: true
reading_layout: true
---

<h2 id="start-here">电荷循环，能量转移</h2>

灯转移电源能量，却不消耗通过它的电荷。约定电流方向是正电荷流向；金属中的自由电子漂移方向相反。你将区分流率与每单位电荷能量，并选择仪表接法。先修：[能量](/zh/alevel/as-physics/work-energy-power/)与比例。

<h2 id="definitions">三个比值回答不同问题</h2>

$$I=\frac{\Delta Q}{\Delta t},\qquad V=\frac{W}{Q},\qquad R=\frac{V}{I}$$

$1\,\mathrm{A}=1\,\mathrm{C\,s^{-1}}$，$1\,\mathrm{V}=1\,\mathrm{J\,C^{-1}}$，$1\,\Omega=1\,\mathrm{V\,A^{-1}}$。电阻是工作点上的比值，不保证电压正比于电流。非稳态时电荷是电流—时间面积；一个瞬时读数乘整个时长，需要恒定电流条件。

<div class="worked-example" markdown="1">
**完整示范——自拟题。**
<!-- task:charge-worked -->
A component carries a steady 0.20 A for 30 s at 6.0 V. Find the charge, transferred energy and resistance. Explain why these results do not establish temperature-independent resistance.
<!-- /task:charge-worked -->

电流与电压恒定，所以 $Q=It=6.0\,\mathrm{C}$，$W=VQ=36\,\mathrm{J}$，$R=30\,\Omega$。稳态串联元件中电荷流率不变，但每单位电荷的能量改变；不同温度下电阻可能不同。
</div>

<h2 id="measurement">让仪表跨在正确边界上</h2>

电流表测通过自己的电荷流，须串入目标支路，理想电阻为零。电压表比较两个端点，应跨接元件，理想电阻无穷大、不吸取电流。真实仪表可能影响电路。使用低压和保护性串联电阻；电流表直接跨接电源可能造成损坏性短路。

<h2 id="charge-check">重新建立各个量</h2>

<div class="lesson-check" markdown="1">
<!-- task:charge-check -->
A component transfers 48 J while 8.0 C passes in 4.0 s. Find pd, current and resistance if both current and pd are steady. Explain in English whether charge is used up. Draw where an ammeter and voltmeter should connect.
<!-- /task:charge-check -->
<details markdown="1"><summary>提示</summary>
分别求每库仑能量与每秒库仑数。
</details>
<details markdown="1"><summary>解答与修复</summary>
$V=6.0\,\mathrm{V}$，$I=2.0\,\mathrm{A}$，$R=3.0\,\Omega$。“Charge is conserved; the component transfers energy, not charge into heat.” 电流表在支路中，电压表跨接端点。如果混淆能量与电荷，回看定义再重试。
</details>
</div>

<h2 id="measurement-check">修正测量方案</h2>

<div class="lesson-check" markdown="1">
<!-- task:meter-check -->
An ideal ammeter is connected directly across a 6.0 V ideal source, while an ideal voltmeter is placed in series with a resistor. Explain why neither arrangement measures the intended quantity. Sketch corrected connections and state how real meter resistances can change the circuit.
<!-- /task:meter-check -->
<details markdown="1"><summary>提示</summary>
先根据仪表的理想电阻预测影响，再画正确接法。
</details>
<details markdown="1"><summary>解答与修复</summary>
理想电流表在理想电源两端提供零电阻路径，这个模型没有有限稳态电流解；真实电流由电源、接线、仪表非理想电阻限制，可能损坏器材。串联理想电压表断开路径，电流为零。正确接法是电流表串联、电压表并联。真实电压表增加支路电流，真实电流表增加串联压降。不能试接错误方案。
</details>
</div>

<h2 id="retry">新工作点与真实仪表</h2>

<div class="lesson-check" markdown="1">
<!-- task:charge-retry -->
In a new steady circuit 12 C passes through a component in 6.0 s, transferring 36 J there. Find current, pd and resistance. A real voltmeter is placed across it and draws a small current: distinguish component current from source current and identify the omitted ideal-meter assumption.
<!-- /task:charge-retry -->
<details markdown="1"><summary>提示</summary>
先求各比值，再对分支点用守恒。
</details>
<details markdown="1"><summary>解答与修复</summary>
$I=2.0\,\mathrm{A}$，$V=3.0\,\mathrm{V}$，$R=1.5\,\Omega$。电源电流等于元件电流加电压表电流；理想电压表模型省略了后者。画出额外支路作检查。以后关闭这些定义再做 [Unit 2 综合](/zh/alevel/as-physics/unit-2-review/)。
</details>
</div>


<h2 id="sources-and-next">范围与下一步</h2>

OxfordAQA 9630 §3.4.1. 题目自拟，数值／示意数据为构造，核查点不是官方评分标准。 [官方大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-international-as-and-a-level-physics-specification.pdf).

[上一课](/zh/alevel/as-physics/unit-1-review/) · [下一课](/zh/alevel/as-physics/resistance-and-resistivity/) · [课程](/zh/alevel/as-physics/)

{% include exam_topic_practice.html %}
