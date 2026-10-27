---
layout: subjects
title: "坐标与直线"
mathjax: true
grade: igcse
subject: igcse-mathematics
lang: zh-CN
translation_of: /igcse/mathematics/coordinates-and-lines/
permalink: /zh/igcse/mathematics/coordinates-and-lines/
reading_layout: true
study_page: true
toc_headings: "h2"
---

[IGCSE 数学](/zh/igcse/mathematics/#learning-start)

{:.lesson-meta}

## 从这里开始 {#start}

有序数对告诉我们点在哪里，直线方程告诉我们哪些点属于同一条线。我们在坐标、图像和规则之间转换，并始终注意坐标轴尺度。

先会正负数和[代入](/zh/igcse/mathematics/expressions-and-formulae/#substitution)。从坐标、作图、斜率、截距和平行线出发，再建立过已知点的直线与垂线方程。

本页示范、任务与数据均为自拟，无官方分值；数据用于说明，并非实测。先在纸上作答，再打开帮助。

{:.lesson-meta}

## 先横向，再纵向 {#coordinates}

(x,y) 中，x 从原点 (0,0) 横向量，y 纵向量。x 正向右、负向左，y 正向上、负向下。轴上的点有一个坐标为零。象限 I、II、III、IV 从右上逆时针编号，轴上点不属任何象限。

<div class="worked-example" markdown="1">

### 定位一个点 {#example-coordinate}

**Question:** Plot A(−3,2), B(2,−3) and C(0,−2). State where each lies.

坐标轴各取 −4 到 4，单位间距相等。A 先向左 3，再向上 2；B 先右 2，再下 3；C 不横移，沿纵轴向下 2。

A 在第二象限，B 在第四象限，C 在 y 轴负半轴。交换坐标顺序会变成另一个点。

</div>

## 独立使用坐标与直线 {#practice}

<div class="lesson-check" markdown="1">

### 四个象限 {#practice-points}

**Question:** Plot P(2,3), Q(−2,3), R(−2,−3), S(2,−3), T(−4,0). Name the quadrant or axis of each. State which points share an x-coordinate and which share a y-coordinate.

<details markdown="1">

<summary>提示</summary>

x 相同的点竖直对齐。

</details>

<details markdown="1">

<summary>解答与检查</summary>

P、Q、R、S 依次在 I、II、III、IV；T 在 x 轴负半轴。P、S 的 x=2，Q、R 的 x=−2；P、Q 的 y=3，R、S 的 y=−3。四角组成长方形，T 在左侧轴上。Q 若画到下方，回看 y 的正负。

</details>

</div>

## 每横移一步，纵向变多少？ {#gradient}

斜率（gradient）m 是纵变／横变，要用坐标差，不能看纸上角度。正斜率向右上升，负斜率向右下降。分子分母取两点顺序要一致；不同轴尺度会让同斜率看起来不同。

$$m=\frac{y_2-y_1}{x_2-x_1}\qquad(x_2\ne x_1).$$

<div class="worked-example" markdown="1">

### 使用实际刻度 {#example-gradient}

**Question:** A line goes through (10,100) and (30,180). Find its gradient. If x is time in minutes and y is volume in litres, interpret it.

$$m=\frac{180-100}{30-10}=\frac{80}{20}=4\text{ litres per minute}.$$

每多一分钟，体积增加 4 升。只数格子而不看每格代表多少会错。上下同时反向取差结果相同；只反转一处会误改符号。

</div>

## 读懂 y=mx+c {#intercepts}

y=mx+c 中，m 是斜率，c 是纵截距：x=0 时 y=c。横截距在 y=0 上，因此令 y=0 求解；它在另一条轴上，不会自动等于 c。不同的非竖直平行线 m 相同、c 不同。

<div class="worked-example" markdown="1">

### 从规则到图像 {#example-line}

**Question:** Plot $y=2x-1$ for −1≤x≤2 and find its intercepts.

| x | −1 | 0 | 1 | 2 |
| --- | --- | --- | --- | --- |
| y | −3 | −1 | 1 | 3 |

绘点 (−1,−3)、(0,−1)、(1,1)、(2,3)，再用直尺连线；x 每增 1，y 增 2。

![Axes from x=-2 to 3 and y=-4 to 4, showing y=2x−1 through the four tabulated points.](/assets/img/igcse-algebra-line.svg)

$$x=0\Rightarrow y=-1;\qquad y=0\Rightarrow2x-1=0\Rightarrow x=\tfrac12.$$

纵截距点 (0,−1)，横截距点 (½,0)。y=2x+3 与它平行且向上移。

</div>

<div class="lesson-check" markdown="1">

### 读出并构造直线 {#practice-lines}

**Question:** Plot $y=-3x+6$ for 0≤x≤3, using x=0,1,2,3. State its gradient and both intercepts. Which of $y=-3x-4$, $y=3x+6$, $y=-x+6$ is parallel? A water-volume graph passes through (2,7),(6,19), with hours and litres: find and interpret its gradient.

<details markdown="1">

<summary>提示</summary>

横截距令 y=0，平行线比较 x 系数。

</details>

<details markdown="1">

<summary>解答与检查</summary>

| x | 0 | 1 | 2 | 3 |
| --- | --- | --- | --- | --- |
| y | 6 | 3 | 0 | −3 |

$$m=-3,\qquad (0,6),\ (2,0);\qquad \frac{19-7}{6-2}=3\text{ litres per hour}.$$

四点连成下降直线。y=−3x−4 的斜率同为 −3，所以平行。水量每小时增加 3 升；把初始水量当速率会连单位也不符。

</details>

</div>

## 建立直线方程 {#through-points}

已知点 (a,b) 与斜率 m，任一点 (x,y) 相对它的纵变为 y−b，横变为 x−a，故 y−b=m(x−a)。在已知点本身，两边都为零，仍成立。

<div class="worked-example" markdown="1">

### 两点先定斜率 {#example-points}

**Question:** Find the line through (−2,5) and (4,−7).

$$m=\frac{-7-5}{4-(-2)}=-2,\qquad y-5=-2(x+2),\qquad y=-2x+1.$$

代回两点：−2(−2)+1=5，−2(4)+1=−7。只有斜率还不算完整方程。

</div>

<div class="lesson-check" markdown="1">

### 选择所需信息 {#practice-equation}

**Question:** Find the line through (1,4),(5,−4). Then find the line through (−2,3) parallel to $y=3x-7$. Give both in y=mx+c form.

<details markdown="1">

<summary>提示</summary>

两点求第一条斜率，平行关系提供第二条斜率。

</details>

<details markdown="1">

<summary>解答与检查</summary>

$$m=\frac{-4-4}{5-1}=-2,\quad y-4=-2(x-1),\quad y=-2x+6;$$

$$y-3=3(x+2),\quad y=3x+9.$$

第一条用 x=1、5 检查，第二条用 x=−2 检查。沿用原来的 −7 截距会导致新线错过给定点。

</details>

</div>

## 垂直与特殊直线 {#perpendicular}

两条非竖直垂线的有限斜率满足 m₁m₂=−1；原斜率非零时，新斜率为负倒数，如 2 与 −½。水平线 y=b 斜率为零；竖线 x=a 因横变为零，斜率无定义。水平与竖直互相垂直，不能计算 −1/0。

<div class="worked-example" markdown="1">

### 使用垂线斜率 {#example-perpendicular}

**Question:** Find the line through (4,1) perpendicular to $y=2x+1$.

$$m=-\tfrac12,\quad y-1=-\tfrac12(x-4),\quad y=-\tfrac12x+3.$$

检查 2×(−½)=−1，且 x=4 时 y=1。只把 2 变负，不取倒数，得不到垂线。

</div>

<div class="lesson-check" markdown="1">

### 处理不同方向 {#practice-perpendicular}

**Question:** Find the line through (2,−1) perpendicular to $y=-2x+5$. Find the lines through (2,−1) perpendicular to (a) y=4 and (b) x=−3.

<details markdown="1">

<summary>提示</summary>

只有非零有限斜率才用负倒数。

</details>

<details markdown="1">

<summary>解答与检查</summary>

$$m=\tfrac12,\quad y+1=\tfrac12(x-2),\quad y=\tfrac12x-2.$$

(a) x=2 为竖线；(b) y=−1 为水平线。x=2 虽不能写 y=mx+c，仍是完整直线方程。

</details>

</div>

## 修复具体一步 {#retry}

坐标颠倒回看[先横后纵](#coordinates)；只数格求斜率回看[尺度](#gradient)；截距混淆回看[y=mx+c](#intercepts)；斜率对但点错回看[过点式](#through-points)；垂线错回看[特殊情况](#perpendicular)。

<div class="lesson-check" markdown="1">

### 重试定位 {#retry-points}

**Question:** Plot A(−1,−4), B(3,2), C(−2,2), D(0,3). Name their quadrants or axes and explain why C and B lie on a horizontal line.

<details markdown="1">

<summary>提示</summary>

水平线上 y 固定。

</details>

<details markdown="1">

<summary>解答与检查</summary>

A 在 III，B 在 I，C 在 II，D 在 y 轴正半轴。B、C 的 y 都为 2，因此连线水平。y 轴上的点不属于第一象限。

</details>

</div>

<div class="lesson-check" markdown="1">

### 重试读规则 {#retry-lines}

**Question:** Plot $y=2x+4$ for −3≤x≤1. State its gradient, both intercepts and one distinct parallel-line equation. A different line joins (1,8),(4,20), with time in hours and volume in litres: find and interpret its gradient.

<details markdown="1">

<summary>提示</summary>

用 x=−3、−2、−1、0、1 计算 y。

</details>

<details markdown="1">

<summary>解答与检查</summary>

$$y:\ -2,0,2,4,6;\qquad m=2,\quad (0,4),\ (-2,0).$$

五点连直线。平行例子 y=2x−1：斜率相同、截距不同。另一线斜率为 (20−8)/(4−1)=4 升/小时，表示每小时体积增加 4 升。

</details>

</div>

<div class="lesson-check" markdown="1">

### 重试建立直线 {#retry-equation}

**Question:** Find the line through (−1,−1),(3,7). Then find the line through (0,5) perpendicular to it.

<details markdown="1">

<summary>提示</summary>

先算纵变／横变，再匹配各自的点。

</details>

<details markdown="1">

<summary>解答与检查</summary>

$$m=\frac{7-(-1)}{3-(-1)}=2,\quad y+1=2(x+1),\quad y=2x+1;$$

$$m_{\perp}=-\tfrac12,\qquad y=-\tfrac12x+5.$$

第二个点在 y 轴上，截距直接为 5；检查斜率积为 −1。

</details>

</div>

<div class="lesson-check" markdown="1">

### 重试水平与竖直 {#retry-directions}

**Question:** Find the line through (−3,2) perpendicular to y=−5, and the line through (−3,2) perpendicular to x=7. State their gradients where defined.

<details markdown="1">
<summary>提示</summary>

水平线与竖线互相垂直。

</details>

<details markdown="1">
<summary>解答与检查</summary>

第一条为 x=−3，斜率无定义；第二条为 y=2，斜率为零。两条都经过 (−3,2)。不要写出 −1/0，也不要把竖线的斜率当零。

</details>

</div>

## 下一步与稍后回顾 {#next-step}

接着学[二次与联立方程](/zh/igcse/mathematics/quadratics-and-simultaneous-equations/#start)。之后回做 practice-equation，在没有直接给斜率的情况下画两条线。

[学过其他主题后，再做代数混合回顾。](/zh/igcse/mathematics/mixed-review/#algebra-review) 收起解答，记录哪些能无帮助完成。

## 范围与来源 {#sources}

<details markdown="1">

<summary>资格和实际使用的来源</summary>

A10–11，大纲 PDF 15（印刷 16）。本页坐标数据均自拟。

实际读过 1C QP PDF 23 Q27 与 [MS PDF 11](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9260-92601C-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=11)；2C QP PDF 17 Q16(c) 与 [MS PDF 7](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92602C-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=7)。它们用于校准尺度与截距检查，本页不复刻其图。

OxfordAQA International GCSE Mathematics **9260**，大纲 **v5.1**。[资格页](https://www.oxfordaqa.com/qualification/international-gcse-mathematics-9260/)；[大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-gcse-mathematics-specification.pdf)。以下评估材料均为 **Specimen 2018**，网址中的 2016 不是考季。它们用于校准范围和推理，本页没有冒称官方题的任务。

</details>
