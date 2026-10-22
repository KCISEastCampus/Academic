---
layout: subjects
title: "力与牛顿运动定律"
mathjax: true
grade: as
subject: as-mathematics
lang: zh-CN
translation_of: /alevel/as-mathematics/forces/
permalink: /zh/alevel/as-mathematics/forces/
toc_headings: h2, h3
study_page: true
---

[AS 数学学习路线](/zh/alevel/as-mathematics/#learning-route) · M1.3 · OxfordAQA 9660 v5.2

先用纸笔尝试题目，再按需打开提示；完成后用解答核对方法、条件与结果。所有题目均为**自拟题**，没有官方分值。英文题干、公式、数值与英文页一致；中文解释帮助你逐步独立用英文作答。

- [L24 力、理想化与连接粒子](#l24)

## L24 · 力、理想化与连接粒子 {#l24}

目标：分物体画受力图，并说明等张力或等加速度依赖什么假设。先修：L02、L22。

牛顿第一定律把合力为零与速度不变（包括静止）联系起来。第二定律对惯性系中质量不变的物体给有向合力 $\sum F=ma$。第三定律的一对等大反向相互作用力作用在不同物体上，不是在同一物体上相互抵消。重力 $mg$ 向下，接触支持力垂直表面；绳只能沿绳拉，杆既可拉也可产生推力。阻力反向于运动；滑动时可用动摩擦模型 $F=\mu R$，静摩擦不总等于这个极限值。

轻、绷紧、不可伸长绳跨光滑轻滑轮或光滑固定钉时，两侧张力相等、沿绳的加速度大小相等。绳须保持绷紧；若算出负张力，说明假定模型失效。M1 采用水平或竖直直线运动，连接粒子模型中的施加力恒定，不以斜向力分解为先修。

![3 千克物体受向上 T、向下 3g；2 千克物体受向上 T、向下 2g。重物加速度向下、轻物向上，分别画在各自物体旁。](/alevel/as-mathematics/assets/forces.svg)

### 示范与推理 {#l24-worked}

**Question:** Masses 3 kg and 2 kg hang on opposite sides of a smooth light pulley, joined by a light taut inextensible string. Starting from rest, find the acceleration and tension while both move freely. Use $g=9.8\,\mathrm{m\,s^{-2}}$.

对 3 千克物体：$3g-T=3a$；对 2 千克物体：$T-2g=2a$。两式相加消去内张力，$g=5a$，得 $a=1.96\,\mathrm{m\,s^{-2}}$。于是 $T=2(g+a)=23.52$ 牛。轻物虽受向下重力，仍因张力大于重力而向上加速；正张力与绷紧绳模型一致。

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

### 独立任务 {#l24-independent}

**Question:** A 600 kg car tows a 400 kg trailer along a horizontal road using a light rigid towbar. The engine drives forward with 1800 N; resistances are 400 N on the car and 200 N on the trailer. Draw separate force diagrams, find the acceleration and towbar force, and state whether the bar is in tension or thrust.

<details markdown="1">
<summary>提示</summary>

先看整个系统求加速度，再看拖车求内部连接力。

</details>

<details markdown="1">
<summary>解答与核验</summary>

每个物体均受向下重力与等大向上支持力。水平方向，车受 1800 牛向前、400 牛阻力与向后的杆力；拖车受等大向前杆力及 200 牛向后阻力。整个系统满足 $1800-400-200=1000a$，得 $a=1.2\,\mathrm{m\,s^{-2}}$。拖车满足 $T-200=400(1.2)$，得 $T=680$ 牛。杆拉动拖车，处于受拉状态；其反向作用在车上，符合第三定律。

</details>

### 诊断与修正 {#l24-diagnosis}

悬挂系统的两重力沿约束方向相反，不能把总重量当驱动力。第三定律一对力不能都画在同一物体上；阻力方向由实际运动决定，不由想得到的答案符号决定。

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

## 学完之后 {#next-step}

收起解答，检查自己能否独立完成本课各组的再尝试，并解释方法与适用条件。仍有困难时回看对应示范；完成后继续下一课。

[上一课：变加速直线运动](/zh/alevel/as-mathematics/variable-acceleration/) · [课程目录](/zh/alevel/as-mathematics/#learning-route) · [下一课：动量与冲量](/zh/alevel/as-mathematics/momentum/)

## 来源与范围 {#sources}

按[当前 9660 官方大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf)组织。配套评分材料用于核对作答证据；本页题目全部另行自拟，不能称为官方原题或官方评分标准。

Specification §3.2 M1.3; MA02 January 2025 Q9, QP p19, MS p16.

[MA01 2025 年 1 月原卷](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-question-paper.pdf) · [配套 MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-mark-scheme.pdf) · [MA02 2025 年 1 月原卷](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-question-paper.pdf) · [配套 MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-mark-scheme.pdf)

完成标准是能独立解释方法与检查条件，不是看完解答。未经过学生试用，不据此宣称学习效果已验证。
