---
layout: subjects
title: "匀加速直线运动"
mathjax: true
grade: as
subject: as-mathematics
lang: zh-CN
translation_of: /alevel/as-mathematics/constant-acceleration/
permalink: /zh/alevel/as-mathematics/constant-acceleration/
toc_headings: h2, h3
study_page: true
---

[AS 数学学习路线](/zh/alevel/as-mathematics/#learning-route) · M1.1 · OxfordAQA 9660 v5.2

先用纸笔尝试题目，再按需打开提示；完成后用解答核对方法、条件与结果。所有题目均为**自拟题**，没有官方分值。英文题干、公式、数值与英文页一致；中文解释帮助你逐步独立用英文作答。

- [L22 方向、图像与匀加速度](#l22)

## L22 · 方向、图像与匀加速度 {#l22}

目标：把运动图像与有向量、总路程联系起来。先修：L02、L04 与单位。

先选原点与正方向。位移是有正负的位置变化，路程是路径总长度；速度有正负，速率是其大小。s–t 图斜率为速度，v–t 图斜率为加速度；v–t 图的有向面积为位移，a–t 图的有向面积为速度变化。s–t 图弯曲不代表加速度一定变化。只有匀加速度时使用

$$v=u+at,\quad s=ut+\tfrac12at^2,\quad v^2=u^2+2as,\quad s=\tfrac12(u+v)t.$$

忽略空气阻力、向上为正时，竖直运动加速度为 $-9.8\,\mathrm{m\,s^{-2}}$。最高点虽速度为零，加速度仍向下。平均速率用总路程除以总时间；平均速度使用位移。

![向上为正，速度从 t=0 的 14.7 线性下降，在 1.5 秒为零，3 秒为 −14.7；加速度恒为 −9.8。](/alevel/as-mathematics/assets/motion.svg)

### 示范与推理 {#l22-worked}

**Question:** A ball is projected vertically upwards at $14.7\,\mathrm{m\,s^{-1}}$ and returns to the launch height. Neglect air resistance and take $g=9.8\,\mathrm{m\,s^{-2}}$. Find the time to its highest point, maximum height, total flight time, distance and average speed.

$v=14.7-9.8t=0$ 得 $t=1.5$ 秒。最大高度为 $14.7(1.5)-4.9(1.5)^2=11.025$ 米。令 $s=14.7t-4.9t^2=0$ 得 $t=0$ 或 $3$ 秒，后一次返回只取 3 秒。总路程 $22.05$ 米，故平均速率为 $7.35\,\mathrm{m\,s^{-1}}$。位移为零，因此平均速度为零。这些值按自拟数据保留，避免过早舍入。

### 带支架尝试 {#l22-scaffold}

**Question:** A particle has initial velocity $4\,\mathrm{m\,s^{-1}}$ and constant acceleration $2\,\mathrm{m\,s^{-2}}$. Find its velocity and displacement after 3 s and relate the displacement to its v–t graph.

<details markdown="1">
<summary>提示</summary>

图像是一条起始高度非零的直线。

</details>

<details markdown="1">
<summary>解答与核验</summary>

$v=10\,\mathrm{m\,s^{-1}}$、$s=21$ 米。梯形面积为 $(4+10)3/2=21$ 米，其斜率正好是给定加速度。

</details>

### 独立任务 {#l22-independent}

**Question:** A continuous v–t graph consists of straight segments joining $(0,0),(4,8),(7,8),(10,-4)$, with time in seconds and velocity in metres per second. Sketch it, determine each acceleration, and find displacement, distance and average speed over 10 s.

<details markdown="1">
<summary>提示</summary>

在最后一段速度变号处再分割。

</details>

<details markdown="1">
<summary>解答与核验</summary>

三个开时间区间内加速度分别为 $2,0,-4\,\mathrm{m\,s^{-2}}$。$t=9$ 秒速度再次为零。有向面积给位移 $16+24+8-2=46$ 米，路程为 $16+24+8+2=50$ 米，因此平均速率为 $5\,\mathrm{m\,s^{-1}}$。理想化接点处斜率突变，不指定唯一瞬时加速度。

</details>

### 诊断与修正 {#l22-diagnosis}

负速度表示沿所选正方向的反向运动，不是负路程。两端速率的算术平均不是通用平均速率公式，尤其不能跨折返或多阶段机械使用。

### 再尝试 {#l22-retry}

**Question:** A particle starts with velocity $6\,\mathrm{m\,s^{-1}}$ and acceleration $-2\,\mathrm{m\,s^{-2}}$ for 5 s. Find its displacement and total distance.

<details markdown="1">
<summary>提示</summary>

计算路程前先找零速度时刻。

</details>

<details markdown="1">
<summary>解答与核验</summary>

在 $t=3$ 秒折返。位移为 $30-25=5$ 米，前行 $9$ 米、返回 $4$ 米，总路程为 $13$ 米。

</details>

## 来源与范围 {#sources}

按[当前 9660 官方大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf)组织。配套评分材料用于核对作答证据；本页题目全部另行自拟，不能称为官方原题或官方评分标准。

Specification §3.2 M1.1; MA02 January 2025 Q10 motion-graph evidence, MS pp17–19.

[MA01 2025 年 1 月原卷](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-question-paper.pdf) · [配套 MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-mark-scheme.pdf) · [MA02 2025 年 1 月原卷](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-question-paper.pdf) · [配套 MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-mark-scheme.pdf)

完成标准是能独立解释方法与检查条件，不是看完解答。未经过学生试用，不据此宣称学习效果已验证。
