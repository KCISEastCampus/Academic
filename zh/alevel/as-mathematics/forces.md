---
layout: subjects
title: "力与牛顿运动定律"
mathjax: true
grade: as
subject: as-mathematics
lang: zh-CN
translation_of: /alevel/as-mathematics/forces/
permalink: /zh/alevel/as-mathematics/forces/
toc_headings: h2
reading_layout: true
study_page: true
---

[AS 数学学习路线](/zh/alevel/as-mathematics/#learning-route) · M1.3 · OxfordAQA 9660 v5.2
{:.lesson-meta}

先读懂解释和完整示范，再拿纸笔做题。提示与解答分别展开。所有题目均为**自拟题**，没有官方分值；保留英文题干，中文帮助你理解和逐步独立表达。

- [单个物体与连接体的受力](#l24)

## 单个物体与连接体的受力 {#l24}

目标：画清每个物体的力，并解释连接运动所需的假设。先修：[方程](/zh/alevel/as-mathematics/algebra/#l02)与[加速度](../constant-acceleration/#l22)。

### 一次只看一个物体受哪些力 {#l24-concept}

列方程前，先选物体和正方向。合力为零时，速度保持不变，也可能一直静止。对惯性参考系中的恒定质量，牛顿第二定律是 $\sum F=ma$：带正负号相加的是这个物体受到的力，不是旁边物体的力。

重力 $mg$ 向下，支持力垂直于表面。绳沿自身方向拉，刚性杆既能拉也能推；阻力反向于运动。滑动时可用动摩擦模型 $F=\mu R$，静摩擦却不总等于这个值。

水平面上若没有其他竖直外力，也没有竖直加速度，支持力就与重力平衡。摩擦力与滑动速度反向；物体减速时，摩擦力可以与加速度同向。

牛顿第三定律的一对力大小相同、方向相反，但作用在不同物体上。它们不能在一个物体的受力图中互相抵消；只有把两个物体合成系统时，才作为内力相消。

理想绳很轻，使自由直段各处张力相同；光滑轻滑轮或光滑固定支点支持两边等张力。绳绷紧且不可伸长，总长度不变，简单两侧模型中两物体加速度大小才相同。绳松了，这个共同运动约束就失去依据；算出负张力，也是在提醒“只能拉的绳”模型不成立。这里 M1 连接模型用水平或竖直运动，不需要斜向分力。

![3 千克物体受向上 T、向下 3g；2 千克物体受向上 T、向下 2g。重物加速度向下、轻物向上，分别画在各自物体旁。](/alevel/as-mathematics/assets/forces.svg)

<div class="worked-example" markdown="1">

### 完整示范 {#l24-worked}

**Question:** Masses 3 kg and 2 kg hang on opposite sides of a smooth light pulley, joined by a light taut inextensible string. Starting from rest, find the acceleration and tension while both move freely. Use $g=9.8\,\mathrm{m\,s^{-2}}$.

对 3 kg 物体取向下为正，对 2 kg 物体取向上为正。绷紧且不可伸长的绳让两者加速度大小同为 a；轻绳与光滑轻滑轮让张力同为 T。每个物体上，重力和张力方向相反：

$$3g-T=3a,\qquad T-2g=2a.$$

两式相加，内部张力消去：$g=5a$，所以 $a=9.8/5=1.96\,\mathrm{m\,s^{-2}}$。再用较轻物体的方程求张力：

$$T=2g+2a=2(9.8+1.96)=23.52\,\mathrm N.$$

张力大于较轻物体的重力，所以它向上加速；较重物体的重力大于张力，所以它向下加速。张力为正，也符合绳只能拉的模型。结论只适用于两物体自由运动、绳保持绷紧的阶段。

</div>

<div class="lesson-check" markdown="1">

### 带支架尝试 {#l24-scaffold}

**Question:** A 2 kg block slides right on a horizontal surface. A horizontal 10 N force pulls right and $\mu=0.2$. Find the reaction, dynamic friction and acceleration, using $g=9.8\,\mathrm{m\,s^{-2}}$.

<details markdown="1">
<summary>提示</summary>

竖直加速度为零，摩擦反向于已知运动。

</details>

<details markdown="1">
<summary>解答与核验</summary>

$R=19.6$ 牛，摩擦 $0.2R=3.92$ 牛向左，$a=(10-3.92)/2=3.04\,\mathrm{m\,s^{-2}}$ 向右。

</details>

</div>

<div class="lesson-check" markdown="1">

### 独立任务 {#l24-independent}

**Question:** A 600 kg car tows a 400 kg trailer along a horizontal road using a light rigid towbar. The engine drives forward with 1800 N; resistances are 400 N on the car and 200 N on the trailer. Draw separate force diagrams, find the acceleration and towbar force, and state whether the bar is in tension or thrust.

<details markdown="1">
<summary>提示</summary>

先看整个系统求加速度，再看拖车求内部连接力。

</details>

<details markdown="1">
<summary>解答与核验</summary>

每个物体均受向下重力与等大向上支持力。水平方向，车受 1800 牛向前、400 牛阻力与向后的杆力；拖车受等大向前杆力及 200 牛向后阻力。整个系统满足 $1800-400-200=1000a$，得 $a=1.2\,\mathrm{m\,s^{-2}}$。拖车满足 $T-200=400(1.2)$，得 $T=680$ 牛。杆拉动拖车，处于受拉状态；其反向作用在车上，符合第三定律。

![核对受力图：汽车驱动力向右、阻力和拖杆力向左；拖车杆力向右、阻力向左；每个物体重力向下、路面支持力向上。向前为正。](/alevel/as-mathematics/assets/car-trailer-check.svg)

</details>

</div>

<div class="lesson-check" markdown="1">

### 再做一道独立题 {#l24-independent-assumptions}

**Question:** Two hanging particles are connected over a smooth light pulley by a light taut inextensible string. A student says: “inextensible gives equal tension, and light gives equal acceleration magnitudes.” Assess the explanation. State what must be reconsidered if the string has significant mass or becomes slack.

<details markdown="1">
<summary>提示</summary>

把每个假设与它真正支持的结论一一对应。

</details>

<details markdown="1">
<summary>解答与检查</summary>

这段解释把两个作用说反了。轻绳配合光滑轻滑轮，支持两侧使用同一张力。绷紧且不可伸长的绳总长固定，一侧缩短多少，另一侧就伸长多少；在这个固定滑轮模型中，两物体加速度大小相同。

如果绳的质量不能忽略，不能再默认全绳只有一个张力：让绳本身加速可能需要张力差。如果绳松弛，两物体的共同运动约束不再成立，它们可以各自运动。绳只能拉，不能推。

</details>

</div>

<div class="lesson-check" markdown="1">

### 再做一道独立题 {#l24-independent-friction}

**Question:** A 4 kg block is sliding right on a horizontal rough surface. A horizontal 3 N force acts left. The coefficient of dynamic friction is 0.25. Draw its forces, find the normal reaction, friction and acceleration, and explain how its speed changes while it still slides right. Use $g=9.8\,\mathrm{m\,s^{-2}}$.

<details markdown="1">
<summary>提示</summary>

先看竖直方向是否平衡。摩擦方向由运动方向决定，不由加速度决定。

</details>

<details markdown="1">
<summary>解答与检查</summary>

图中应有向下的重力、向上的支持力，以及都向左的外力和滑动摩擦力。竖直方向没有加速度，所以 $R=4g=39.2\,\mathrm N$。摩擦力大小为 $F=0.25R=9.8\,\mathrm N$，方向向左，与向右的滑动相反。

取向右为正，$-3-9.8=4a$，得到 $a=-3.2\,\mathrm{m\,s^{-2}}$。物体向右运动、加速度却向左，所以正在减速。滑动摩擦的这套结果用到物体停下为止，不能直接决定停下后的摩擦力。

</details>

</div>

### 诊断与修正 {#l24-diagnosis}

悬挂系统的两重力沿约束方向相反，不能把总重量当驱动力。第三定律一对力不能都画在同一物体上；阻力方向由实际运动决定，不由想得到的答案符号决定。

力的方向出错时，回看[逐个物体列式](#l24-worked)，再做[制动重试](#l24-retry)。模型假设出错时，回看[绳和滑轮的条件](#l24-concept)，再判断[改变后的模型](#l24-retry-assumptions)。滑动摩擦出错时，回看[有提示的计算](#l24-scaffold)，再试[反向运动](#l24-retry-friction)。

<div class="lesson-check" markdown="1">

### 再尝试 {#l24-retry}

**Question:** A 500 kg trailer moving on a horizontal road is decelerated at $2\,\mathrm{m\,s^{-2}}$. Its resistance is 300 N backwards. Find the towbar force on it and say whether the bar pushes or pulls the trailer.

<details markdown="1">
<summary>提示</summary>

向前为正，保留负加速度。

</details>

<details markdown="1">
<summary>解答与核验</summary>

$F-300=500(-2)$ 得 $F=-700$ 牛，表示杆以 700 牛向后推拖车，处于受压、产生推力的状态，而非受拉。

</details>

</div>

<div class="lesson-check" markdown="1">

### 检查改变后的模型 {#l24-retry-assumptions}

**Question:** In the same fixed-pulley arrangement, the string remains light, taut and inextensible but the pulley is rough. Which of “one common tension” and “equal acceleration magnitudes” can still be used without further information? Explain.

<details markdown="1">
<summary>提示</summary>

分开考虑总长度不变和滑轮处的阻力。

</details>

<details markdown="1">
<summary>解答与检查</summary>

绷紧且不可伸长仍给出两侧加速度大小相同。粗糙接触处可以有张力差，所以不能再默认两侧共用一个张力。列受力方程时要区分两侧张力；要算出数值加速度，还需要滑轮相互作用的额外信息。

</details>

</div>

<div class="lesson-check" markdown="1">

### 再试一题 {#l24-retry-friction}

**Question:** A 5 kg block is sliding left on a horizontal rough surface while a horizontal 8 N force acts right. Its coefficient of dynamic friction is 0.2. Find the normal reaction, friction and acceleration, then explain whether it speeds up or slows down while still sliding left. Use $g=9.8\,\mathrm{m\,s^{-2}}$.

<details markdown="1">
<summary>提示</summary>

题目给的运动方向与自己选的正方向，要分开记。

</details>

<details markdown="1">
<summary>解答与检查</summary>

竖直平衡给出 $R=5g=49\,\mathrm N$。物体向左滑动，所以摩擦力 $F=0.2R=9.8\,\mathrm N$ 向右。取向右为正，$8+9.8=5a$，得到 $a=3.56\,\mathrm{m\,s^{-2}}$，方向向右。它与向左的速度相反，因此物体减速。物体停下后，要重新判断摩擦模型。

</details>

</div>

## 学完之后 {#next-step}

收起解答，检查自己能否独立完成本课各组的再尝试，并解释方法与适用条件。仍有困难时回看对应示范；完成后继续下一课。

[上一课：变加速直线运动](/zh/alevel/as-mathematics/variable-acceleration/) · [课程目录](/zh/alevel/as-mathematics/#learning-route) · [下一课：动量与冲量](/zh/alevel/as-mathematics/momentum/)

学完这条路线后，做[综合题](/zh/alevel/as-mathematics/#mixed-mechanics)。在之后一次学习中，关掉解答完成[回顾题](/zh/alevel/as-mathematics/#later-mechanics)。

## 来源与范围 {#sources}

<details class="lesson-notes" markdown="1">
<summary>查看范围与评分材料</summary>

按[当前 9660 官方大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf)组织。配套评分材料用于核对作答证据；本页题目全部另行自拟，不能称为官方原题或官方评分标准。

Specification §3.2 M1.3; MA02 January 2025 Q9, QP p19, MS p16.

[MA01 2025 年 1 月原卷](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-question-paper.pdf) · [配套 MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-mark-scheme.pdf) · [MA02 2025 年 1 月原卷](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-question-paper.pdf) · [配套 MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-mark-scheme.pdf)

完成标准是能独立解释方法与检查条件，不是看完解答。未经过学生试用，不据此宣称学习效果已验证。

</details>

{% include exam_topic_practice.html %}
