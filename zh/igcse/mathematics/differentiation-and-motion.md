---
layout: subjects
title: "斜率、微分与运动"
mathjax: true
grade: igcse
subject: igcse-mathematics
lang: zh-CN
translation_of: /igcse/mathematics/differentiation-and-motion/
permalink: /zh/igcse/mathematics/differentiation-and-motion/
reading_layout: true
study_page: true
toc_headings: "h2"
---

[IGCSE 数学](/zh/igcse/mathematics/#learning-start)

{:.lesson-meta}

## 从这里开始 {#start}

改变了多少，改变得多快？先从图像的陡缓理解变化率，再建立多项式曲线的斜率规则。

先会[直线斜率](/zh/igcse/mathematics/coordinates-and-lines/#gradient)、[展开](/zh/igcse/mathematics/expressions-and-formulae/#expansion)和[二次方程](/zh/igcse/mathematics/quadratics-and-simultaneous-equations/#roots)。先解释运动图像，再学习微分与曲线估算。

本页示范、任务与数据均为自拟，无官方分值；数据用于说明，并非实测。先在纸上作答，再打开帮助。

{:.lesson-meta}

## 读一段行程 {#motion}

路程—时间图的高度是累计路程，斜率是路程变化量除以所用时间，即该段平均速率。水平段表示停止。累计路程不会减少；位置或位移图才可以因反向运动而向下。

<div class="worked-example" markdown="1">

### 用各段自己的时间 {#example-motion}

**Question:** A distance–time graph joins (0,0), (4,12), (7,12), (9,20) by straight segments. Time is in seconds and distance in metres. Describe the journey and find overall average speed.

横轴画时间、纵轴画路程。每段有自己的持续时间。

$$\frac{12-0}{4-0}=3\text{ m/s},\quad \frac{12-12}{7-4}=0,\quad \frac{20-12}{9-7}=4\text{ m/s}.$$

物体先以 3 m/s 运动，停 3 s，再以 4 m/s 运动。全程则为：

$$\text{average speed}=\frac{20}{9}\text{ m/s}\approx2.22\text{ m/s}.$$

直接平均 3、0、4，会给不等长时间段同样权重。路程检查：12 + 0 + 8 = 20 m。

</div>

## 独立尝试 {#practice}

<div class="lesson-check" markdown="1">

### 另一段行程 {#practice-motion}

**Question:** Plot a distance–time graph through (0,0), (3,15), (5,15), (8,21). Use seconds and metres. Describe each segment and find overall average speed.

<details markdown="1">

<summary>提示</summary>

用相邻点，且总时间包含停止时段。

</details>

<details markdown="1">

<summary>解答与检查</summary>

$$15/3=5,\quad 0/2=0,\quad (21-15)/(8-5)=2,\quad 21/8=2.625.$$

画上升—水平—较缓上升三段；速率为 5、0、2 m/s，3 至 5 s 停止。全程平均为 2.625 m/s。若直接平均三速率，回看各段持续时间与总时间的区别。

</details>

</div>

## 给每一点一个斜率 {#gradient-function}

曲线并非处处同一斜率。附近两点的连线给平均斜率；第二点靠近第一点时，连线趋近切线，它的斜率就是瞬时斜率。微分（differentiation）得到一个输出斜率的新函数。

对常数 k 和正整数 n，把旧指数乘到前面，再把指数减一。常数不变，因此导数为零。

$$y=kx^n\quad\Longrightarrow\quad \frac{dy}{dx}=knx^{n-1}\quad(n=1,2,3,\ldots).$$

多项式逐项求导。本课求导前仅用非负整数幂；不要求负次或分数次幂、乘积法则、链式法则及三角求导。必要时先展开化简。

<div class="worked-example" markdown="1">

### 高度与斜率不同 {#example-derivative}

**Question:** For $y=x(x+2)+3$, find the gradient function and gradient at $x=2$.

乘积藏住了各次项，先展开。导数描述斜率而非高度。

$$y=x^2+2x+3,\qquad \frac{dy}{dx}=2x+2,\qquad y^{\prime}(2)=6.$$

x = 2 时高度为 11，斜率为 6。从 2 到 2.1 的弦斜率为 (11.61 − 11)/0.1 = 6.1，接近 6，但不能当精确切线计算。

</div>

<div class="lesson-check" markdown="1">

### 建立并使用规则 {#practice-derivative}

**Question:** For $y=2x(x^2-3)+5$, find $dy/dx$, the height at $x=-1$ and the gradient there. Explain the difference.

<details markdown="1">

<summary>提示</summary>

先展开，高度代原式，斜率代导数。

</details>

<details markdown="1">

<summary>解答与检查</summary>

$$y=2x^3-6x+5,\quad \frac{dy}{dx}=6x^2-6,\quad y(-1)=9,\quad y^{\prime}(-1)=0.$$

点 (−1,9) 的切线水平。零斜率并非零高度；常数 5 的导数为零。

</details>

</div>

## 建立切线方程 {#tangent}

原曲线给点，导数给斜率。两者齐全后，用过点直线方程。

<div class="worked-example" markdown="1">

### 由曲线到直线 {#example-tangent}

**Question:** Find the tangent to $y=x^2+2x+3$ at $x=2$.

$y(2)=11,\quad y^{\prime}(2)=6,\quad y-11=6(x-2),\quad y=6x-1.$

![A polynomial curve, its tangent at (2,11), and a rise of 12 over a run of 2 between tangent points (1,5) and (3,17).](/assets/img/igcse-algebra-tangent.svg)

检查：x = 2 代入直线得 11，斜率也为 6。只写 y = 6x 会错过该点。

</div>

<div class="lesson-check" markdown="1">

### 换一个位置 {#practice-tangent}

**Question:** Find the tangent to $y=x^3-2x+1$ at $x=-1$.

<details markdown="1">

<summary>提示</summary>

先求点，再求斜率。

</details>

<details markdown="1">

<summary>解答与检查</summary>

$$y(-1)=2,\quad y^{\prime}=3x^2-2,\quad y^{\prime}(-1)=1,\quad y-2=x+1,\quad y=x+3.$$

直线经过 (−1,2)；斜率若写成 2，就是混淆高度与斜率。

</details>

</div>

## 曲线在哪里变平？ {#stationary}

驻点（stationary point）的导数为零。先求 x，再由原函数求 y。零斜率不能直接分类：导数由正变负是局部极大（local maximum），由负变正是局部极小（local minimum）。

<div class="worked-example" markdown="1">

### 由符号确定形状 {#example-stationary}

**Question:** Find and classify the stationary points of $y=x^3-3x$. Sketch it, marking stationary points and intercepts.

$$y^{\prime}=3x^2-3=3(x-1)(x+1)=0\quad\Longrightarrow\quad x=-1,\ 1.$$

对应高度为 2、−2。把 −2、0、2 代入导数，符号依次正、负、正。

$$(-1,2):\ +\to-\ \text{local maximum};\qquad (1,-2):\ -\to+\ \text{local minimum}.$$

由 x(x²−3)=0 得零点 −√3、0、√3。画平滑三次曲线，从左下上升到极大点，向下过原点到极小点，再升向右上；标出坐标，不能只画一个无标记的 S。

</div>

驻点拐点（stationary point of inflection）变平但不转向，弯曲方向却改变。y=x³ 的导数 3x² 在 0 两侧均正，在 0 为零；左侧趋近 0 时斜率递减，右侧离开 0 时递增。因此 (0,0) 是驻点拐点，应画出曲线穿过水平切线。

<div class="lesson-check" markdown="1">

### 比较两条曲线 {#practice-stationary}

**Question:** Find and classify all stationary points of $p(x)=x^3-12x$ and $q(x)=x^3+4$. Sketch both with stationary points and intercepts, giving evidence for each classification.

<details markdown="1">

<summary>提示</summary>

分区间查符号；对 q 还要考虑经过 0 时斜率怎样变化。

</details>

<details markdown="1">

<summary>解答与检查</summary>

$$p^{\prime}=3(x-2)(x+2),\quad p(-2)=16,\quad p(2)=-16,\quad q^{\prime}=3x^2.$$

p 的导数正、负、正，故极大点 (−2,16)、极小点 (2,−16)；零点 −√12、0、√12。q 两侧斜率都正，先减到零再增大，故 (0,4) 为驻点拐点；横截距 −∛4，纵截距 4。p 画两个转向，q 则在高度 4 上升穿过水平切线。不能把每个驻点都称极小。

</details>

</div>

## 运动图与数值估算 {#estimates}

速度—时间图的高度是速度，斜率是加速度。速度非负时下面积给路程：速度 v 持续 Δt，矩形面积 vΔt 就是米数。三角形与梯形由这些小段组合。速度为负时，有符号面积给位移，路程要把面积大小相加。这是图形面积法，不是 AS 积分。

<div class="worked-example" markdown="1">

### 由读数估路程 {#example-estimates}

**Question:** A smooth non-negative velocity curve has t (s) = 0,1,2,3 and v (m/s) = 0,1,4,9. Estimate distance with trapezia of width 1 s.

先绘点，用直线弦近似每个曲线区间。每个梯形的两条平行边竖直。

$$d\approx\frac{0+1}{2}(1)+\frac{1+4}{2}(1)+\frac{4+9}{2}(1)=9.5\text{ m}.$$

读数之间速度未确定，所以并非精确值。若每段都向上弯，弦在曲线上方，结果偏大；若没有弯曲信息，仅凭数表不能确定误差方向。

</div>

估曲线某点斜率，先画该点切线，再取切线上相距较远的两点算纵变／横变。连接曲线上两个远点算的是平均斜率。

<div class="lesson-check" markdown="1">

### 画图并估算 {#practice-estimates}

**Question:** Plot v=t²+1 for 0≤t≤3 using t=0,0.5,1,1.5,2,2.5,3 (seconds; v in m/s). Draw a tangent at t=1. Choose two well-separated points on your tangent and estimate acceleration there and distance over 0–3 s with trapezia of width 1 s. Explain a limitation.

<details markdown="1">

<summary>提示</summary>

自己画经过 (1,2)、贴合曲线当地方向的切线，再选切线上相隔较远的两点。梯形用整秒时刻曲线高度。

</details>

<details markdown="1">

<summary>解答与检查</summary>

$$v:\ 1,\ 1.25,\ 2,\ 3.25,\ 5,\ 7.25,\ 10;\qquad a\approx(4-0)/(2-0)=2\text{ m/s}^2.$$

$$d\approx\frac{1+2}{2}+\frac{2+5}{2}+\frac{5+10}{2}=12.5\text{ m}.$$

解答参考：准确切线可取 (0,0)、(2,4)，故估计约 2 m/s²。手绘以 1.6–2.4 m/s² 为合理自检范围，但还要检查线是否贴合当地曲线方向、读数是否来自自己切线；这不是官方评分容差。切线在 t=0 的高度并非初速度。梯形在本曲线上方，所以路程偏大；缩短步长可缩小间隙。

</details>

</div>

<div class="lesson-check" markdown="1">

### 另一种图 {#practice-area}

**Question:** Plot the velocity–time graph joining (0,0),(4,6),(7,6),(9,0) with straight lines (seconds and m/s). Find acceleration on each segment and total distance.

<details markdown="1">

<summary>提示</summary>

加速度看斜率，路程看面积。

</details>

<details markdown="1">

<summary>解答与检查</summary>

$$a:\ 6/4=1.5,\quad 0,\quad (0-6)/(9-7)=-3\text{ m/s}^2.$$

$$d=\tfrac12(4)(6)+(3)(6)+\tfrac12(2)(6)=36\text{ m}.$$

画上升—水平—下降。此处负加速度表示减速；速度始终非负，因此面积直接给路程。

</details>

</div>

## 回补后再试 {#retry}

轴混淆回看[运动图](#motion)；高度斜率混淆回看[导数](#gradient-function)；截距错回看[切线](#tangent)；分类错回看[驻点](#stationary)；斜率面积混淆回看[估算](#estimates)。重试前收起旧答案。

<div class="lesson-check" markdown="1">

### 重试行程 {#retry-motion}

**Question:** A distance–time graph joins (0,0),(2,8),(6,8),(10,20). Plot it; find each speed and overall average.

<details markdown="1">

<summary>提示</summary>

停止也计入总时间。

</details>

<details markdown="1">

<summary>解答与检查</summary>

三段斜率为 4、0、3 m/s，画上升—水平—上升。全程平均 20/10=2 m/s，包含停止的四秒。

</details>

</div>

<div class="lesson-check" markdown="1">

### 重试求导 {#retry-derivative}

**Question:** Find the derivative of $y=(x+1)(x^2-x+1)+7$ and its gradient at $x=-2$.

<details markdown="1">

<summary>提示</summary>

先乘开再求导。

</details>

<details markdown="1">

<summary>解答与检查</summary>

$$y=x^3+8,\qquad y^{\prime}=3x^2,\qquad y^{\prime}(-2)=12.$$

常数改变高度，但导数为零。

</details>

</div>

<div class="lesson-check" markdown="1">

### 重试切线 {#retry-tangent}

**Question:** Find the tangent to $y=2x^2-x$ at $x=1$.

<details markdown="1">

<summary>提示</summary>

分开求高度和斜率。

</details>

<details markdown="1">

<summary>解答与检查</summary>

$$y(1)=1,\quad y^{\prime}=4x-1,\quad y^{\prime}(1)=3,\quad y-1=3(x-1),\quad y=3x-2.$$

</details>

</div>

<div class="lesson-check" markdown="1">

### 重试分类 {#retry-stationary}

**Question:** Classify stationary points of $y=-x^3+3x$ and $z=-x^3$. Sketch both, marking stationary points and intercepts.

<details markdown="1">

<summary>提示</summary>

检查零斜率两侧。

</details>

<details markdown="1">

<summary>解答与检查</summary>

$$y^{\prime}=3-3x^2,\qquad z^{\prime}=-3x^2.$$

y 导数负、正、负，故极小点 (−1,−2)，极大点 (1,2)。z 斜率两侧均负，中间为零，弯曲方向改变，所以 (0,0) 为驻点拐点，下降穿过水平切线。y 的横截距为 −√3、0、√3，z 仅在原点截轴；据此标出草图。

</details>

</div>

<div class="lesson-check" markdown="1">

### 重试估算 {#retry-estimates}

**Question:** Plot v=0.5t²+1 for 0≤t≤4, using steps of 0.5 s (velocity in m/s). Draw a tangent at t=1, choose your own two tangent points and estimate acceleration. Estimate distance over 0–4 s using two trapezia of width 2 s. Could the readings at just t=0,2,4 alone determine the distance error direction?

<details markdown="1">

<summary>提示</summary>

先逐点算速度并画平滑曲线。梯形用 0、2、4 s 的速度；加速度须用自己画的切线。

</details>

<details markdown="1">

<summary>解答与检查</summary>

$$d\approx\tfrac12(1+3)(2)+\tfrac12(3+9)(2)=16\text{ m},\quad a\approx(4.5-0.5)/(4-0)=1\text{ m/s}^2.$$

绘图速度依次为 1、1.125、1.5、2.125、3、4.125、5.5、7.125、9。解答参考：t=1 的准确切线经过 (0,0.5)、(4,4.5)，斜率约 1 m/s²；手绘可先用 0.8–1.2 m/s² 自检，同时核对切线方向与选点。此范围不是官方评分容差。仅有三个读数时，中间曲线未定，不能判误差方向；本题额外给出的二次规则向上弯，才支持梯形偏大的判断。

</details>

</div>

## 下一步与稍后回顾 {#next-step}

学过其他主题后，收起答案重做[两曲线任务](#practice-stationary)，再与[图像族](/zh/igcse/mathematics/functions-and-graphs/#families)比较。

[学过其他主题后，再做代数混合回顾。](/zh/igcse/mathematics/mixed-review/#algebra-review) 收起解答，记录哪些能无帮助完成。

## 范围与来源 {#sources}

<details markdown="1">

<summary>资格和实际使用的来源</summary>

A13–15、A17：微分、运动图像解释与曲线斜率／面积估算。大纲 PDF 15–16（印刷 16–17）。

实际读过 [1E MS PDF 11 Q23](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9260-92601E-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=11)、16 Q31 与 QP 22–23、30；[2E MS PDF 9–10 Q17](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92602E-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=9) 与 QP 14。

OxfordAQA International GCSE Mathematics **9260**，大纲 **v5.1**。[资格页](https://www.oxfordaqa.com/qualification/international-gcse-mathematics-9260/)；[大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-gcse-mathematics-specification.pdf)。以下评估材料均为 **Specimen 2018**，网址中的 2016 不是考季。它们用于校准范围和推理，本页没有冒称官方题的任务。

</details>
