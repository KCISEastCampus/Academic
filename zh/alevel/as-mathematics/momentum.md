---
layout: subjects
title: "动量与冲量"
mathjax: true
grade: as
subject: as-mathematics
lang: zh-CN
translation_of: /alevel/as-mathematics/momentum/
permalink: /zh/alevel/as-mathematics/momentum/
toc_headings: h2
reading_layout: true
study_page: true
---

[AS 数学学习路线](/zh/alevel/as-mathematics/#learning-route) · M1.4 · OxfordAQA 9660 v5.2
{:.lesson-meta}

先读懂解释和完整示范，再拿纸笔做题。提示与解答分别展开。所有题目均为**自拟题**，没有官方分值；保留英文题干，中文帮助你理解和逐步独立表达。

- [选定系统后的动量与冲量](#l25)

## 选定系统后的动量与冲量 {#l25}

目标：说明动量守恒的系统，并检查碰后运动是否可行。先修：[正方向](../constant-acceleration/#l22)与[力](../forces/#l24)。

### 选了哪个系统，才知道什么能守恒 {#l25-concept}

先选一个正方向。动量是质量乘带符号速度 $mv$。冲量是动量变化；质量恒定时，$I=m(v-u)$，单位为 $\mathrm{N\,s}=\mathrm{kg\,m\,s^{-1}}$。正负号表示方向，大小则不能为负。

两粒子碰撞时，彼此施加的冲量方向相反。把两者合起来，这两个内冲量相消。如果合外冲量为零或可以忽略，总动量才有碰前等于碰后：

$$m_1u_1+m_2u_2=m_1v_1+m_2v_2.$$

一个方程不能求两个未知末速度，还要使用题目真正给出的另一个条件，例如粘在一起。不要自行增加能量守恒或恢复系数定律。

算完还要检查之后怎样运动。A 刚好在 B 左边且两者分离时，需有 $v_A<v_B$；速度相等则是共同运动的边界。只研究球本身时，墙提供外冲量，所以球的动量不守恒。这里 M1 表面碰撞垂直于光滑固定面，不要求恢复系数定律。

![全程向右为正。碰前 A 在左向右、B 在右向左；碰后均向右，B 比 A 快，因此分离。](/alevel/as-mathematics/assets/collision.svg)

<div class="worked-example" markdown="1">

### 完整示范 {#l25-worked}

**Question:** A 2 kg particle A moving right at $5\,\mathrm{m\,s^{-1}}$ collides with a 3 kg particle B moving left at $1\,\mathrm{m\,s^{-1}}$. Afterwards A moves right at $0.5\,\mathrm{m\,s^{-1}}$. External impulse on the pair is negligible. Find B’s velocity and the impulse on A; check separation.

初始总动量为 $2(5)+3(-1)=7\,\mathrm{kg\,m\,s^{-1}}$。守恒给 $1+3v_B=7$，故 $v_B=2\,\mathrm{m\,s^{-1}}$ 向右。A 的冲量为 $2(0.5-5)=-9\,\mathrm{N\,s}$，即大小 9 牛秒、向左。B 得相反冲量 $3[2-(-1)]=9\,\mathrm{N\,s}$。碰撞时 A 在 B 左侧，且 $0.5<2$，因此碰后分离。

</div>

<div class="lesson-check" markdown="1">

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

</div>

<div class="lesson-check" markdown="1">

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

</div>

### 诊断与修正 {#l25-diagnosis}

把所有速率都写成正数会破坏方向信息；不能擅自增加能量守恒或恢复方程。本组构成 MA02 → MA05 碰撞分析的先修：有向速度、合理系统与可行的后运动。

符号或系统选择出错时，回看[碰撞示范](#l25-worked)，再做[黏合碰撞题](#l25-retry)。分离条件出错时，回看[碰后运动检查](#l25-concept)，再求[新的可行范围](#l25-retry-separation)。

<div class="lesson-check" markdown="1">

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

</div>

<div class="lesson-check" markdown="1">

### 再试一题 {#l25-retry-separation}

**Question:** A 2 kg particle A moving right at $6\,\mathrm{m\,s^{-1}}$ catches a stationary 1 kg particle B. The external impulse on the pair is negligible. After impact A continues right with speed v and the particles separate immediately. Find the possible range of v and the range of impulse magnitudes on A, explaining the endpoints.

<details markdown="1">
<summary>提示</summary>

先用 v 表示右侧粒子的末速度，再用“立即分离”给出不等式。

</details>

<details markdown="1">
<summary>解答与检查</summary>

取向右为正。动量守恒给出 $12=2v+v_B$，所以 $v_B=12-2v$。A 继续向右，且分离后的 B 要比左侧的 A 更快，因此 $0<v<v_B$，得到 $0<v<4\,\mathrm{m\,s^{-1}}$。

A 所受冲量为 $I=2(v-6)<0$，方向向左，大小为 $12-2v$。所以 $4<\lvert I\rvert<12\,\mathrm{N\,s}$。速度下界会使 A 停下，上界会使两粒子末速度相同、不再立即分离，因此两个端点都不能取。

</details>

</div>

## 学完之后 {#next-step}

你已到达本路线最后一课。收起解答，独立完成本课再尝试，并解释系统选择与方向约定；然后回课程目录，选择仍需巩固的主题。

[上一课：力与牛顿运动定律](/zh/alevel/as-mathematics/forces/) · [课程目录](/zh/alevel/as-mathematics/#learning-route)

学完这条路线后，做[综合题](/zh/alevel/as-mathematics/#mixed-mechanics)。在之后一次学习中，关掉解答完成[回顾题](/zh/alevel/as-mathematics/#later-mechanics)。

## 来源与范围 {#sources}

<details class="lesson-notes" markdown="1">
<summary>查看范围与评分材料</summary>

按[当前 9660 官方大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf)组织。配套评分材料用于核对作答证据；本页题目全部另行自拟，不能称为官方原题或官方评分标准。

Specification §3.2 M1.4; MA02 January 2025 Q11, QP pp22–23, MS pp20–21.

[MA01 2025 年 1 月原卷](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-question-paper.pdf) · [配套 MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-mark-scheme.pdf) · [MA02 2025 年 1 月原卷](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-question-paper.pdf) · [配套 MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-mark-scheme.pdf)

完成标准是能独立解释方法与检查条件，不是看完解答。未经过学生试用，不据此宣称学习效果已验证。

</details>
