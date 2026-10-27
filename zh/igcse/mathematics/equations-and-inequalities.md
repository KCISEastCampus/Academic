---
layout: subjects
title: "方程与不等式"
mathjax: true
grade: igcse
subject: igcse-mathematics
lang: zh-CN
translation_of: /igcse/mathematics/equations-and-inequalities/
permalink: /zh/igcse/mathematics/equations-and-inequalities/
reading_layout: true
study_page: true
toc_headings: "h2"
---

[IGCSE 数学](/zh/igcse/mathematics/#learning-start)

{:.lesson-meta}

## 从这里开始 {#start}

方程寻找使两式相等的值，不等式寻找使大小关系成立的所有值。我们从情境列式，并表示解集，而不只“移项”。

先会[代数式与代入](/zh/igcse/mathematics/expressions-and-formulae/#start)；图解任务用[坐标与直线](/zh/igcse/mathematics/coordinates-and-lines/#start)。后面会用到二维区域与二次不等式；最后一段前先学[二次关系](/zh/igcse/mathematics/quadratics-and-simultaneous-equations/#roots)。

本页示范、任务与数据均为自拟，无官方分值；数据用于说明，并非实测。先在纸上作答，再打开帮助。

{:.lesson-meta}

## 保持等式平衡 {#balance}

等式像平衡的天平，两边同加同减一个量，或同乘同除一个非零量，才能保持相等。括号遮住 x 项时先展开。“移项变号”只是两边同做逆运算的简写。

<div class="worked-example" markdown="1">

### 两边都有未知数 {#example-balance}

**Question:** Solve $3(x+2)=2x+11$.

$$3x+6=2x+11,\quad x+6=11,\quad x=5.$$

先两边减 2x，再两边减 6。代回原式：3(5+2)=21，2(5)+11=21。

</div>

有时 x 全部消去：x+2=x+2 对所有实数成立，x+2=x+3 则无解，因为会要求 2=3。不能直接除以可能为零的量而不讨论。

## 求解并解释 {#practice}

<div class="lesson-check" markdown="1">

### 一道新方程 {#practice-equations}

**Question:** Solve $4(2x-1)=3(x+2)+5$. Also decide how many solutions $2(x+1)=2x+2$ and $2(x+1)=2x+3$ have.

<details markdown="1">

<summary>提示</summary>

乘数分配到每一项；x 消去后，判断剩下的命题。

</details>

<details markdown="1">

<summary>解答与检查</summary>

$$8x-4=3x+11,\quad 5x=15,\quad x=3.$$

代回两边均为 20。第二式变成 2=2，所有实数都可；第三式变成 2=3，无解。

</details>

</div>

## 从情境确定未知数 {#model}

<div class="worked-example" markdown="1">

### 由长方形列方程 {#example-model}

**Question:** A rectangle has width w cm and length (w+3) cm. Its perimeter is 26 cm. Find its dimensions.

周长加两条宽、两条长；面积才相乘。设 w>0。

$$2w+2(w+3)=26,\quad 4w+6=26,\quad w=5.$$

宽 5 cm、长 8 cm。检查 2×5+2×8=26 cm，且长度均正。

</div>

<div class="lesson-check" markdown="1">

### 费用决策 {#practice-model}

**Question:** Plan A costs 8 dollars plus 3 dollars per lesson. Plan B costs 20 dollars plus 1 dollar per lesson. For how many lessons do the costs match? Which plan is cheaper for 10 lessons?

<details markdown="1">

<summary>提示</summary>

设 n 为课数，令两种总费用相等。

</details>

<details markdown="1">

<summary>解答与检查</summary>

$$8+3n=20+n,\quad 2n=12,\quad n=6.$$

$$C_A(10)=38,\qquad C_B(10)=30.$$

6 节相同，且为有效整数课数。10 节时 B 便宜 8 元。单节费用低不代表所有课数都便宜，还要计入固定费。

</details>

</div>

## 相等就是相遇点 {#graph-solutions}

图解 f(x)=g(x)，就画 y=f(x) 与 y=g(x)。交点同时有相同 x 和 y，横坐标便是方程的解。读图通常为近似，要说明尺度和精度。

<div class="worked-example" markdown="1">

### 两条直线图 {#example-graph}

**Question:** Use graphs to estimate the solution of $2x+1=6-x$ to 1 decimal place.

坐标取 x 从 0 到 3、y 从 0 到 7，横轴每单位至少分十小格。可绘数据：

| x | 0 | 1 | 2 | 3 |
| --- | --- | --- | --- | --- |
| 2x+1 | 1 | 3 | 5 | 7 |
| 6−x | 6 | 5 | 4 | 3 |

各行点连成直线，在约 (1.67,4.33) 相交，故取一位小数 x≈1.7。代数检查：3x=5 得 x=5/3；不能把纵坐标当所求解。

</div>

<div class="lesson-check" markdown="1">

### 自己画出比较 {#practice-graph}

**Question:** Use graphs to solve $1.5x+0.4=4.1-0.7x$ to 1 decimal place, for 0≤x≤3. Construct a table at x=0,1,2,3 and draw both straight lines. Check algebraically.

<details markdown="1">

<summary>提示</summary>

纵轴取 0–5，横轴用能读到十分位的刻度。

</details>

<details markdown="1">

<summary>解答与检查</summary>

| x | 0 | 1 | 2 | 3 |
| --- | --- | --- | --- | --- |
| 1.5x+0.4 | 0.4 | 1.9 | 3.4 | 4.9 |
| 4.1−0.7x | 4.1 | 3.4 | 2.7 | 2.0 |

$$2.2x=3.7,\quad x=\frac{37}{22}\approx1.6818,\quad x\approx1.7\text{ (1 d.p.)}.$$

交点约 (1.68,2.92)。普通作图支持约 1.7，不支持很多小数。若读成 x=2.9，是把纵坐标认作横坐标。

</details>

</div>

## 一整组符合条件的值 {#inequalities}

x<3 不含端点 3，用空心圆；x≤3 包含端点，用实心圆。加减和方程一样，但同乘同除负数要反向：2<5 乘 −1 后是 −2>−5。要表示整组解，不能只标边界。

<div class="worked-example" markdown="1">

### 除以负数时反向 {#example-inequality}

**Question:** Solve $4-3x\ge10$ and represent it on a number line.

$$-3x\ge6,\qquad x\le-2.$$

减 4，再除 −3 并把 ≥ 反向。−2 画实心圆，向左涂线并加箭头。检查 x=−3 得 13≥10，x=0 不满足。

</div>

<div class="lesson-check" markdown="1">

### 保留端点信息 {#practice-inequality}

**Question:** Solve $-1<2x+3\le7$ and draw the solution set on a number line. Solve $5-2x<11$ and list its integer solutions from −5 to 2.

<details markdown="1">

<summary>提示</summary>

复合不等式的每一部分都要同做运算。

</details>

<details markdown="1">

<summary>解答与检查</summary>

$$-4<2x\le4,\quad -2<x\le2;\qquad -2x<6,\quad x>-3.$$

第一题 −2 空心、2 实心，涂中间；第二题 −3 空心向右，指定窗口内整数为 −2、−1、0、1、2。复合关系变形时只处理一边会漏掉约束。

</details>

</div>

## 二维区域 {#regions}

y≤x+1 选出一个半平面。先画边界 y=x+1；含等号用实线，严格不等用虚线。取一个不在边界上的测试点判定哪一侧；多个不等式取交集，即每条都满足的点。

<div class="worked-example" markdown="1">

### 画出共同部分 {#example-region}

**Question:** On axes from 0 to 5, represent $x\ge0$, $y\ge0$, $x+y\le4$.

前两条保留含坐标轴的第一象限；第三边界连接 (0,4)、(4,0)。测试 (0,0) 得 0≤4，所以保留含原点的一侧。

画顶点 (0,0)、(4,0)、(0,4) 的三角区域；三条边均为实线且包含。点 (3,3) 因坐标和为 6 而在外。

</div>

<div class="lesson-check" markdown="1">

### 另一块允许区域 {#practice-region}

**Question:** Draw and shade the region satisfying $x\ge0$, $y\ge1$, $x+y<5$. State which boundaries are included and decide whether (1,2), (4,1) and (0,1) belong.

<details markdown="1">

<summary>提示</summary>

画 y=1 与过 (0,5)、(5,0) 的线，严格不等号边界用虚线。

</details>

<details markdown="1">

<summary>解答与检查</summary>

涂 y=1 上方、x=0 右侧、x+y=5 下方的重叠区。前两边实线，斜边虚线。几何角点为 (0,1)、(0,5)、(4,1)，但后两个排除。(1,2)、(0,1) 属于，(4,1) 不满足严格和条件。边界相交不代表角点自动包含。

</details>

</div>

## 检查根之间的符号 {#quadratic-inequalities}

二次不等式问图像在哪些区间位于轴上方或下方。先求根，用根划分数轴，再逐区间查符号。根只是边界，不是完整解集。

<div class="worked-example" markdown="1">

### 选择区间 {#example-quadratic}

**Question:** Solve $x^2-x-6>0$.

$$x^2-x-6=(x-3)(x+2).$$

根为 −2、3。测试 −3、0、4，乘积依次正、负、正。所以 x<−2 或 x>3；两根空心，涂向外两条射线。严格不等号不含根。

</div>

<div class="lesson-check" markdown="1">

### 判断另一种符号范围 {#practice-quadratic}

**Question:** Solve $2x^2-5x-3\le0$ and $-x^2+x+6<0$. Show interval reasoning and number lines.

<details markdown="1">

<summary>提示</summary>

第一式先因式分解；第二式可乘 −1，但要反向。

</details>

<details markdown="1">

<summary>解答与检查</summary>

$$2x^2-5x-3=(2x+1)(x-3),\qquad -\tfrac12\le x\le3.$$

$$-x^2+x+6<0\quad\Longleftrightarrow\quad (x-3)(x+2)>0,$$

$$x<-2\quad\text{or}\quad x>3.$$

第一乘积外正内负，涂实心端点 −½、3 之间；第二题涂 −2、3 外侧，端点空心。取 x=0 检查：满足第一题，却不满足第二题。

</details>

</div>

## 回到出错概念 {#retry}

等式不平衡回看[平衡](#balance)；费用式错回看[建模](#model)；交点坐标错回看[图解](#graph-solutions)；反向或端点错回看[不等式](#inequalities)；区域方向错回看[二维区域](#regions)；只报根回看[二次区间](#quadratic-inequalities)。

<div class="lesson-check" markdown="1">

### 重试模型与方程 {#retry-equations}

**Question:** Solve $5(x-2)=2x+8$. Then a rectangle has length (w+2) cm, width w cm and perimeter 20 cm: form an equation and find both lengths.

<details markdown="1">

<summary>提示</summary>

长方形每个方向都要算两条边。

</details>

<details markdown="1">

<summary>解答与检查</summary>

$$5x-10=2x+8,\quad x=6;\qquad 2w+2(w+2)=20,\quad w=4.$$

长方形为 4 cm×6 cm，周长检查 8+12=20 cm；方程 x=6 时两边均为 20。

</details>

</div>

<div class="lesson-check" markdown="1">

### 重试图解相等 {#retry-graph}

**Question:** Plot $y=0.8x+1$ and $y=4-0.3x$ for 0≤x≤4. Read the solution of their equality to 1 decimal place and check.

<details markdown="1">

<summary>提示</summary>

求交点横坐标。

</details>

<details markdown="1">

<summary>解答与检查</summary>

$$1.1x=3,\quad x=30/11\approx2.7\text{ (1 d.p.)}.$$

两线可分别用端点 (0,1)、(4,4.2) 与 (0,4)、(4,2.8) 作图，约交于 (2.73,3.18)。

</details>

</div>

<div class="lesson-check" markdown="1">

### 重试方向与端点 {#retry-inequality}

**Question:** Solve $7-3x\le13$ and $0\le2x+4<10$. Draw each on a number line.

<details markdown="1">

<summary>提示</summary>

除 −3 要反向；第二题各部分都同除正数 2。

</details>

<details markdown="1">

<summary>解答与检查</summary>

$$x\ge-2;\qquad -2\le x<3.$$

第一题 −2 实心向右；第二题 −2 实心、3 空心，涂中间。

</details>

</div>

<div class="lesson-check" markdown="1">

### 重试区域 {#retry-region}

**Question:** Represent $x\ge1$, $y>0$, $x+y\le4$. Does (1,3) belong? Does (2,0)?

<details markdown="1">

<summary>提示</summary>

分别画边界，再保留同时满足三条的点。

</details>

<details markdown="1">

<summary>解答与检查</summary>

涂实线 x=1 右侧、虚线 y=0 上方、实线 x+y=4 下方。(1,3) 包含，(2,0) 不包含。底边及其角点被排除，不因另一边为实线而改变。

</details>

</div>

<div class="lesson-check" markdown="1">

### 重试区间 {#retry-quadratic}

**Question:** Solve $x^2-4x-5\ge0$ and explain why giving x=−1,5 is incomplete.

<details markdown="1">

<summary>提示</summary>

因式分解后，在两根中间测试一个数。

</details>

<details markdown="1">

<summary>解答与检查</summary>

$$(x-5)(x+1)\ge0,\qquad x\le-1\quad\text{or}\quad x\ge5.$$

x=0 得 −5，所以中间不满足。只报根会漏掉外侧所有也满足的数；应画实心端点和向外射线。

</details>

</div>

## 下一步与稍后回顾 {#next-step}

接着学[坐标直线](/zh/igcse/mathematics/coordinates-and-lines/#start)或[二次方程](/zh/igcse/mathematics/quadratics-and-simultaneous-equations/#start)。稍后回到两种课费方案，用不等式判断各自在什么整数课数更便宜。

[学过其他主题后，再做代数混合回顾。](/zh/igcse/mathematics/mixed-review/#algebra-review) 收起解答，记录哪些能无帮助完成。

## 范围与来源 {#sources}

<details markdown="1">

<summary>资格和实际使用的来源</summary>

A19、A22–23；大纲 PDF 16–17（印刷 17–18）。二次方程在下一关联页讲解。

实际读过 1C QP PDF 16 Q20 与 [MS PDF 9](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9260-92601C-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=9)；2C QP PDF 18 Q17 与 [MS PDF 8](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92602C-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=8)。

OxfordAQA International GCSE Mathematics **9260**，大纲 **v5.1**。[资格页](https://www.oxfordaqa.com/qualification/international-gcse-mathematics-9260/)；[大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-gcse-mathematics-specification.pdf)。以下评估材料均为 **Specimen 2018**，网址中的 2016 不是考季。它们用于校准范围和推理，本页没有冒称官方题的任务。

</details>
