---
layout: subjects
title: "动量与冲量"
mathjax: true
grade: as
subject: as-mathematics
lang: zh-CN
translation_of: /alevel/as-mathematics/momentum/
permalink: /zh/alevel/as-mathematics/momentum/
toc_headings: h2, h3
study_page: true
---

[AS 数学学习路线](/zh/alevel/as-mathematics/#learning-route) · M1.4 · OxfordAQA 9660 v5.2

先用纸笔尝试题目，再按需打开提示；完成后用解答核对方法、条件与结果。所有题目均为**自拟题**，没有官方分值。英文题干、公式、数值与英文页一致；中文解释帮助你逐步独立用英文作答。

- [L25 有向冲量与碰撞约束](#l25)

## L25 · 有向冲量与碰撞约束 {#l25}

目标：选择系统、论证动量守恒条件，并筛选碰撞后速度。先修：L02、L22、L24。

沿统一坐标轴，动量为 $mv$，质量不变时冲量为 $I=m(v-u)$，单位 $\mathrm{N\,s}=\mathrm{kg\,m\,s^{-1}}$。冲量有正负，冲量大小非负。选两粒子为系统，内部碰撞冲量等大反向抵消；若合外冲量为零或可忽略，

$$m_1u_1+m_2u_2=m_1v_1+m_2v_2.$$

只有守恒式不能确定两个后速度，还须其他已知条件。A 在 B 左侧，碰后立即分离时 $v_A<v_B$；相等是共同速度边界。固定墙给球外冲量，球本身动量不守恒。M1 固定光滑表面的正碰只处理垂直表面的运动，不要求恢复定律。动量守恒不能自动推出动能守恒。

![全程向右为正。碰前 A 在左向右、B 在右向左；碰后均向右，B 比 A 快，因此分离。](/alevel/as-mathematics/assets/collision.svg)

### 示范与推理 {#l25-worked}

**Question:** A 2 kg particle A moving right at $5\,\mathrm{m\,s^{-1}}$ collides with a 3 kg particle B moving left at $1\,\mathrm{m\,s^{-1}}$. Afterwards A moves right at $0.5\,\mathrm{m\,s^{-1}}$. External impulse on the pair is negligible. Find B’s velocity and the impulse on A; check separation.

初始总动量为 $2(5)+3(-1)=7\,\mathrm{kg\,m\,s^{-1}}$。守恒给 $1+3v_B=7$，故 $v_B=2\,\mathrm{m\,s^{-1}}$ 向右。A 的冲量为 $2(0.5-5)=-9\,\mathrm{N\,s}$，即大小 9 牛秒、向左。B 得相反冲量 $3[2-(-1)]=9\,\mathrm{N\,s}$。碰撞时 A 在 B 左侧，且 $0.5<2$，因此碰后分离。

### 带支架尝试 {#l25-scaffold}

**Question:** A 0.4 kg ball hits a fixed smooth wall normally at $6\,\mathrm{m\,s^{-1}}$ and rebounds at $4\,\mathrm{m\,s^{-1}}$. Taking towards the wall positive, find its impulse and explain why its momentum is not conserved.

<details markdown="1">
<summary>提示</summary>

反弹速度须取相反符号。

</details>

<details markdown="1">
<summary>解答与核验</summary>

$I=0.4(-4-6)=-4\,\mathrm{N\,s}$。墙给球这个外冲量，所以球的动量改变；冲量大小为 4 牛秒，方向离开墙。

</details>

### 独立任务 {#l25-independent}

**Question:** A 1 kg particle A moving right at $6\,\mathrm{m\,s^{-1}}$ catches a stationary 2 kg particle B. External impulse is negligible. After impact A continues right with speed v and the particles separate immediately. Determine the admissible range of v using momentum and separation, and find the range of impulse magnitudes on A.

<details markdown="1">
<summary>提示</summary>

先用 v 表示 B 的速度，再要求右侧物体运动得更快。

</details>

<details markdown="1">
<summary>解答与核验</summary>

动量给 $6=v+2v_B$，故 $v_B=(6-v)/2$。A 继续向右要求 $v>0$，分离要求 $v<(6-v)/2$，合得 $0<v<2$。A 的冲量为 $v-6$，始终向左，大小为 $6-v$，故 $4<\lvert I\rvert<6\,\mathrm{N\,s}$。两端排除，因为 A 停止或共同后速度均不符合题设。

</details>

### 诊断与修正 {#l25-diagnosis}

把所有速率都写成正数会破坏方向信息；不能擅自增加能量守恒或恢复方程。本组构成 MA02 → MA05 碰撞分析的先修：有向速度、合理系统与可行的后运动。

### 再尝试 {#l25-retry}

**Question:** A 1 kg particle at $4\,\mathrm{m\,s^{-1}}$ rightwards sticks to a stationary 3 kg particle after collision, with negligible external impulse. Find their common velocity and the impulse on the 1 kg particle. Is energy conservation needed?

<details markdown="1">
<summary>提示</summary>

粘在一起提供共同后速度条件。

</details>

<details markdown="1">
<summary>解答与核验</summary>

$4=(1+3)V$ 得 $V=1\,\mathrm{m\,s^{-1}}$ 向右。冲量为 $1(1-4)=-3\,\mathrm{N\,s}$。无需能量守恒假设，题设粘在一起已为动量模型提供足够条件。

</details>

## 学完之后 {#next-step}

你已到达本路线最后一课。收起解答，独立完成本课再尝试，并解释系统选择与方向约定；然后回课程目录，选择仍需巩固的主题。

[上一课：力与牛顿运动定律](/zh/alevel/as-mathematics/forces/) · [课程目录](/zh/alevel/as-mathematics/#learning-route)

## 来源与范围 {#sources}

按[当前 9660 官方大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf)组织。配套评分材料用于核对作答证据；本页题目全部另行自拟，不能称为官方原题或官方评分标准。

Specification §3.2 M1.4; MA02 January 2025 Q11, QP pp22–23, MS pp20–21.

[MA01 2025 年 1 月原卷](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-question-paper.pdf) · [配套 MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-mark-scheme.pdf) · [MA02 2025 年 1 月原卷](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-question-paper.pdf) · [配套 MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-mark-scheme.pdf)

完成标准是能独立解释方法与检查条件，不是看完解答。未经过学生试用，不据此宣称学习效果已验证。
