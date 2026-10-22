---
layout: subjects
title: "三角"
mathjax: true
grade: as
subject: as-mathematics
lang: zh-CN
translation_of: /alevel/as-mathematics/trigonometry/
permalink: /zh/alevel/as-mathematics/trigonometry/
toc_headings: h2, h3
study_page: true
---

[AS 数学学习路线](/zh/alevel/as-mathematics/#learning-route) · PP1.2 · OxfordAQA 9660 v5.2

先用纸笔尝试题目，再按需打开提示；完成后用解答核对方法、条件与结果。所有题目均为**自拟题**，没有官方分值。英文题干、公式、数值与英文页一致；中文解释帮助你逐步独立用英文作答。

- [L15 三角形、弧度、弧与扇形](#l15)
- [L16 周期图像、恒等式与区间全解](#l16)

## L15 · 三角形、弧度、弧与扇形 {#l15}

目标：选择合适的三角关系，并分清弧、弦与区域。先修：基本几何与 L01。

三角形中每条边须与其对角配对，使用

$$\frac a{\sin A}=\frac b{\sin B}=\frac c{\sin C},\qquad a^2=b^2+c^2-2bc\cos A,\qquad A_\triangle=\frac12bc\sin A.$$

正弦定理可能给出正弦相同的两个角，须检查内角和与全部条件。一弧度对应弧长恰等于半径，因此 $180^\circ=\pi$ 弧度。半径 $r$、弧度角 $\theta$ 时，弧长为 $r\theta$，扇形面积为 $r^2\theta/2$。弓形是扇形减去相应三角形，不能与弧长混淆。

### 示范与推理 {#l15-worked}

**Question:** A sector has radius 6 cm and angle $\pi/3$ radians. Find its arc length, sector area and minor-segment area.

弧长为 $2\pi\,\mathrm{cm}$，扇形面积为 $6\pi\,\mathrm{cm^2}$。三角形面积为 $\frac12(6)(6)\sin(\pi/3)=9\sqrt3\,\mathrm{cm^2}$，所以小弓形面积为 $(6\pi-9\sqrt3)\,\mathrm{cm^2}$，应为正且小于扇形面积。

### 带支架尝试 {#l15-scaffold}

**Question:** Two sides of a triangle are 5 cm and 7 cm with included angle $60^\circ$. Find the third side and area exactly.

<details markdown="1">
<summary>提示</summary>

两边与夹角已知，优先考虑余弦定理。

</details>

<details markdown="1">
<summary>解答与核验</summary>

第三边为 $\sqrt{25+49-70\cos60^\circ}=\sqrt{39}\,\mathrm{cm}$，面积为 $35\sqrt3/4\,\mathrm{cm^2}$。

</details>

### 独立任务 {#l15-independent}

**Question:** In a triangle, $a=5$ cm, $b=8$ cm and $A=30^\circ$. Determine all possible values of $B$ to 2 decimal places, justifying whether each can belong to a triangle.

<details markdown="1">
<summary>提示</summary>

反正弦给主值，另一个角可能有相同的正弦。

</details>

<details markdown="1">
<summary>解答与核验</summary>

正弦定理给 $\sin B=8\sin30^\circ/5=0.8$，所以 $B=53.13^\circ$ 或 $126.87^\circ$。两者加上 $30^\circ$ 后均仍留正的第三角，分别为 $96.87^\circ$ 与 $23.13^\circ$，所以两解皆可。

</details>

### 诊断与修正 {#l15-diagnosis}

把度数直接代入弧度弧长公式会造成比例错误。先标清弧与直弦；相减的量必须都是面积。

### 再尝试 {#l15-retry}

**Question:** A sector has radius 4 cm and perimeter 14 cm. Find its angle in radians and area.

<details markdown="1">
<summary>提示</summary>

周长包括两条半径与弧。

</details>

<details markdown="1">
<summary>解答与核验</summary>

弧长为 $14-8=6$ 厘米，故 $\theta=6/4=1.5$ 弧度，面积为 $\frac12(4^2)(1.5)=12\,\mathrm{cm^2}$。

</details>

## L16 · 周期图像、恒等式与区间全解 {#l16}

目标：用图像结构找全区间解，并在代数变形中保留限制。先修：L02、L05、L15。

一个周期内，正弦在 $0,\pi,2\pi$ 为零，在 $\pi/2,3\pi/2$ 取极值；余弦从 1 开始，周期为 $2\pi$。正切周期为 $\pi$，在 $\pi/2+k\pi$ 处有竖直渐近线，其中 $k$ 为整数。使用

$$\sin^2\theta+\cos^2\theta=1,\qquad \tan\theta=\frac{\sin\theta}{\cos\theta}\quad(\cos\theta\ne0).$$

尽量化成一种三角量的方程。先写完整角的区间，再找所有候选解，并检查原分母。草图须标坐标、周期关键点与必要渐近线，不能仅当计算器轨迹。本组不以倍角或复合角公式为先修。

![正弦在 0 至 2π 的一个周期中，零点为 0、π、2π，在 π/2 取最大值 1，在 3π/2 取最小值 −1。](/alevel/as-mathematics/assets/sine.svg)

### 示范与推理 {#l16-worked}

**Question:** Solve $2\sin^2 x+3\cos x=3$ for $0\le x\le2\pi$.

令 $c=\cos x$，则 $2(1-c^2)+3c=3$，即 $(2c-1)(c-1)=0$。故 $\cos x=1/2$ 或 $1$，全解为 $x=0,\pi/3,5\pi/3,2\pi$。两端点是不同的允许值，均须保留。

### 带支架尝试 {#l16-scaffold}

**Question:** Sketch $y=\cos x$ on $0\le x\le2\pi$, labelling its zeros and maximum/minimum values. Solve $\cos x=-1/2$ on the same interval.

<details markdown="1">
<summary>提示</summary>

使用完整周期，并考虑周期中间两侧的位置。

</details>

<details markdown="1">
<summary>解答与核验</summary>

图像经过 $(0,1),(\pi/2,0),(\pi,-1),(3\pi/2,0),(2\pi,1)$；方程解为 $x=2\pi/3,4\pi/3$。

![用于核对草图的余弦图：0、2π 处取最大值，π/2、3π/2 处为零，π 处取最小值。](/alevel/as-mathematics/assets/cosine-check.svg)

</details>

### 独立任务 {#l16-independent}

**Question:** Show that $(1-\sin^2 y)/\cos y=\cos y$ wherever the left side is defined. Hence solve $(1-\sin^2 y)/\cos y=1/2$ for $0\le y<2\pi$, stating the excluded values.

<details markdown="1">
<summary>提示</summary>

先用恒等式，记录约束后才能约分，再解化简后的方程。

</details>

<details markdown="1">
<summary>解答与核验</summary>

在 $\cos y\ne0$ 时，分子为 $\cos^2 y$，相除得 $\cos y$。排除值为 $y=\pi/2,3\pi/2$。使用前面结论，解得 $y=\pi/3,5\pi/3$，两者均符合原约束；这里明确展示了 hence 的连接。

</details>

### 诊断与修正 {#l16-diagnosis}

反三角按键只给主值，不给区间全解。除以某三角因子可能丢解，约掉分母可能掩盖排除值，两类问题都要检查。

### 再尝试 {#l16-retry}

**Question:** Solve $\sin(2x)=1/2$ for $0\le x\le\pi$. State the period and two neighbouring asymptotes of $y=\tan x$.

<details markdown="1">
<summary>提示</summary>

先把整个区间加倍，作为角 2x 的范围。

</details>

<details markdown="1">
<summary>解答与核验</summary>

$0\le2x\le2\pi$ 得 $2x=\pi/6,5\pi/6$，因此 $x=\pi/12,5\pi/12$。正切周期为 $\pi$，相邻渐近线可取 $x=-\pi/2,\pi/2$。

![正切核对图：零点为 0、π，虚线渐近线为 −π/2、π/2、3π/2；分支每隔 π 重复，不能跨渐近线连起来。](/alevel/as-mathematics/assets/tangent-check.svg)

</details>

## 来源与范围 {#sources}

按[当前 9660 官方大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf)组织。配套评分材料用于核对作答证据；本页题目全部另行自拟，不能称为官方原题或官方评分标准。

Specification §3.2 PP1.2; MA02 January 2025 Q4, QP pp8–9, MS pp9–10.

[MA01 2025 年 1 月原卷](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-question-paper.pdf) · [配套 MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-mark-scheme.pdf) · [MA02 2025 年 1 月原卷](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-question-paper.pdf) · [配套 MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-mark-scheme.pdf)

完成标准是能独立解释方法与检查条件，不是看完解答。未经过学生试用，不据此宣称学习效果已验证。
