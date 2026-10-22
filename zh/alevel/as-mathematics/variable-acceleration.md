---
layout: subjects
title: "变加速直线运动"
mathjax: true
grade: as
subject: as-mathematics
lang: zh-CN
translation_of: /alevel/as-mathematics/variable-acceleration/
permalink: /zh/alevel/as-mathematics/variable-acceleration/
toc_headings: h2, h3
study_page: true
---

[AS 数学学习路线](/zh/alevel/as-mathematics/#learning-route) · M1.2 · OxfordAQA 9660 v5.2

先用纸笔尝试题目，再按需打开提示；完成后用解答核对方法、条件与结果。所有题目均为**自拟题**，没有官方分值。英文题干、公式、数值与英文页一致；中文解释帮助你逐步独立用英文作答。

- [L23 微积分与分段运动的连接](#l23)

## L23 · 微积分与分段运动的连接 {#l23}

目标：由条件确定积分常数，并处理变加速运动路程。先修：L06–L08、L22。

位置 $s$、速度 $v$、加速度 $a$ 满足

$$v=\frac{ds}{dt},\quad a=\frac{dv}{dt},\quad v=\int a\,dt+C,\quad s=\int v\,dt+D.$$

每次积分各有独立常数，第一步用速度条件，第二步用位置条件。一个区间内位移为速度积分；路程须在每个变号处切开，再加各段正路径长度。切换运动模型时要连接位置与题设速度，加速度可改变。题目只使用 P1 幂函数微积分，不要求后续三角函数或微分方程方法。

### 示范与推理 {#l23-worked}

**Question:** A particle has $a=2t-4\,\mathrm{m\,s^{-2}}$, $v(0)=3\,\mathrm{m\,s^{-1}}$ and $s(0)=0$. Find v and s, then displacement and distance from $t=0$ to $t=4$.

积分并代入条件得 $v=t^2-4t+3=(t-1)(t-3)$、$s=t^3/3-2t^2+3t$。以 1 与 3 秒分界，速度依次为正、负、正。位置为 $s(0)=0,s(1)=4/3,s(3)=0,s(4)=4/3$ 米。因此位移 $4/3$ 米，总路程 $4/3+4/3+4/3=4$ 米，平均速率为 $1\,\mathrm{m\,s^{-1}}$。

### 带支架尝试 {#l23-scaffold}

**Question:** A particle has $a=6t$, $v(0)=2$ and $s(0)=5$ in SI units. Find v and s and its displacement in the first 2 s.

<details markdown="1">
<summary>提示</summary>

初始加速度为零不表示初速度为零。

</details>

<details markdown="1">
<summary>解答与核验</summary>

$v=3t^2+2$、$s=t^3+2t+5$。位移为 $s(2)-s(0)=12$ 米。

</details>

### 独立任务 {#l23-independent}

**Question:** For $0\le t\le2$, a particle has velocity $v=3t^2$ in SI units. After 2 s it decelerates uniformly to rest at time T. Its total distance from 0 to T is 26 m. Find T, the later acceleration, and the time and value of the greatest speed.

<details markdown="1">
<summary>提示</summary>

用第一段末速度连接第二段图像。

</details>

<details markdown="1">
<summary>解答与核验</summary>

第一段路程为 $[t^3]_0^2=8$ 米，连接速度为 $12\,\mathrm{m\,s^{-1}}$。余下路程为 18 米，由后段三角形面积 $12(T-2)/2=18$ 得 $T=5$ 秒，后段加速度为 $-12/3=-4\,\mathrm{m\,s^{-2}}$。速率先增到 $t=2$ 的 12，再下降，因此该处为最大速率与发生时刻。

</details>

### 诊断与修正 {#l23-diagnosis}

加速度变化的整个区间不能直接使用匀加速公式。积分全段后才取绝对值仍会丢失反向路径；应在速度变号处切开。

### 再尝试 {#l23-retry}

**Question:** Position is $s=t^3-3t^2$ metres for $0\le t\le3$. Find acceleration at 1 s and total distance over the interval.

<details markdown="1">
<summary>提示</summary>

加速度用求导，路程用速度符号分段。

</details>

<details markdown="1">
<summary>解答与核验</summary>

$v=3t(t-2)$、$a=6t-6$，故 $a(1)=0$。0、2、3 秒的位置为 $0,-4,0$ 米，总路程为 $8$ 米。

</details>

## 来源与范围 {#sources}

按[当前 9660 官方大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf)组织。配套评分材料用于核对作答证据；本页题目全部另行自拟，不能称为官方原题或官方评分标准。

Specification §3.2 M1.2; MA02 January 2025 Q10, QP pp20–21, MS pp17–19.

[MA01 2025 年 1 月原卷](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-question-paper.pdf) · [配套 MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-mark-scheme.pdf) · [MA02 2025 年 1 月原卷](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-question-paper.pdf) · [配套 MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-mark-scheme.pdf)

完成标准是能独立解释方法与检查条件，不是看完解答。未经过学生试用，不据此宣称学习效果已验证。
