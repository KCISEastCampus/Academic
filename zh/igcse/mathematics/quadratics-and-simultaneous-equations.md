---
layout: subjects
title: "二次关系与联立方程"
mathjax: true
grade: igcse
subject: igcse-mathematics
lang: zh-CN
translation_of: /igcse/mathematics/quadratics-and-simultaneous-equations/
permalink: /zh/igcse/mathematics/quadratics-and-simultaneous-equations/
reading_layout: true
study_page: true
toc_headings: "h2"
---

[IGCSE 数学](/zh/igcse/mathematics/#learning-start)

{:.lesson-meta}

## 从这里开始 {#start}

一次方程可能有一个解，二次方程则可能有两个、一个或没有实数解。联立方程要同一组数同时满足两式。我们把代数求根与图像交点联系起来。

先会[因式分解](/zh/igcse/mathematics/expressions-and-formulae/#factorising)、[一次方程](/zh/igcse/mathematics/equations-and-inequalities/#balance)和[坐标作图](/zh/igcse/mathematics/coordinates-and-lines/#start)。从因式和图像出发，再学习配方、求根公式与一次二次联立。

本页示范、任务与数据均为自拟，无官方分值；数据用于说明，并非实测。先在纸上作答，再打开帮助。

{:.lesson-meta}

## 为什么因子能给出根 {#roots}

根（root）是 y=0 时的 x。乘积为零，至少一个因子必须为零。所以先把等式整理成一边为零，再因式分解，分别令因子为零。x=0 可能是解时，不能直接除以 x。

<div class="worked-example" markdown="1">

### 保留两个因子的可能 {#example-roots}

**Question:** Solve $x^2-x-6=0$.

$$x^2-x-6=(x-3)(x+2)=0,$$

$$x-3=0\quad\text{or}\quad x+2=0,\qquad x=3\quad\text{or}\quad x=-2.$$

两根都代原式检查：9−3−6=0，4+2−6=0。只写因式分解还没有给出所求数值。

</div>

## 独立求解、作图与解释 {#practice}

<div class="lesson-check" markdown="1">

### 保留所有解 {#practice-roots}

**Question:** Solve $x^2-7x+12=0$, $x(x-4)=0$ and $2x^2+x-3=0$. Check each solution.

<details markdown="1">

<summary>提示</summary>

最后一式把中间项拆成 3x 与 −2x。

</details>

<details markdown="1">

<summary>解答与检查</summary>

$$(x-3)(x-4)=0\Rightarrow x=3,4;\qquad x(x-4)=0\Rightarrow x=0,4;$$

$$(2x+3)(x-1)=0\Rightarrow x=-\tfrac32,1.$$

各解代入都使一个因子为零。第二题若除以 x，会误删 x=0。最后的 −3/2 检查为 2(9/4)−3/2−3=0。

</details>

</div>

## 根、截距与转折点 {#sketch}

y=ax²+bx+c（a≠0）的图为抛物线（parabola）。a>0 开口向上，a<0 向下；纵截距为 (0,c)。转折点是最低或最高点，过它的竖线是对称轴。要画出两侧平滑曲线，而非折线。

<div class="worked-example" markdown="1">

### 由数据建立抛物线 {#example-sketch}

**Question:** Plot $y=x^2-2x-3$ for −2≤x≤4. Mark roots, y-intercept, turning point and symmetry axis.

| x | −2 | −1 | 0 | 1 | 2 | 3 | 4 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| y | 5 | 0 | −3 | −4 | −3 | 0 | 5 |

坐标取 x 从 −2 到 4、y 从 −5 到 6，绘点后平滑连接。开口向上，过横轴 (−1,0)、(3,0)，过纵轴 (0,−3)；最低点 (1,−4)，距 x=1 同样远的点高度相等。

$$x^2-2x-3=(x+1)(x-3),\qquad x_{\text{symmetry}}=1.$$

因式得到的根与作图一致。根是 x 值，最低点则是一对坐标。

</div>

<div class="lesson-check" markdown="1">

### 用图求近似根 {#practice-graph}

**Question:** Plot $y=x^2+x-4$ for −3≤x≤2, using integer x-values. Read both roots to 1 decimal place, estimate the turning point and state the symmetry line.

<details markdown="1">

<summary>提示</summary>

要包含零上、零下的点，并画平滑曲线。

</details>

<details markdown="1">

<summary>解答与检查</summary>

| x | −3 | −2 | −1 | 0 | 1 | 2 |
| --- | --- | --- | --- | --- | --- | --- |
| y | 2 | −2 | −4 | −4 | −2 | 2 |

曲线约在 x=−2.6、1.6 过轴；最低点约 (−0.5,−4.25)，对称轴 x=−0.5。整数格不够读精度时在过轴附近加点。−4 是高度，不是根。稍后的公式可检查精确根为 (−1±√17)/2。

</details>

</div>

## 让转折点显现 {#square}

平方非负，写成 y=a(x−h)²+k 后，转折点 (h,k) 就显现了。对 x²+bx，取 b 的一半放进括号，再减去其平方，补偿多出来的量。

<div class="worked-example" markdown="1">

### 为什么必须补偿 {#example-square}

**Question:** Write $x^2+6x+5$ in completed-square form; find its turning point and solve $x^2+6x+5=0$.

$$(x+3)^2=x^2+6x+9,\quad x^2+6x+5=(x+3)^2-9+5=(x+3)^2-4.$$

平方在 x=−3 最小，因此最低点为 (−3,−4)。求根则为：

$$(x+3)^2=4,\quad x+3=\pm2,\quad x=-1,-5.$$

2²=(−2)²，所以两种符号都需要。两根分别距 x=−3 两单位，符合对称性。

</div>

<div class="lesson-check" markdown="1">

### 改变表达形式 {#practice-square}

**Question:** Complete the square for $y=x^2-4x-1$. State the turning point, symmetry line and exact roots. Check the heights at x=1,3.

<details markdown="1">

<summary>提示</summary>

先写 (x−2)²，再补偿多出的常数。

</details>

<details markdown="1">

<summary>解答与检查</summary>

$$y=(x-2)^2-5,\quad (x-2)^2=5,\quad x=2\pm\sqrt5.$$

最低点 (2,−5)，对称轴 x=2。x=1、3 时 y 均为 −4，检查两侧对称。最低点不是 (−2,−5)，因为括号在 x=2 才为零。

</details>

</div>

若 a≠1，先从 x² 与 x 项提出 a，例如：

$$2x^2+8x+3=2(x^2+4x)+3=2[(x+2)^2-4]+3=2(x+2)^2-5.$$

## 因子不容易找到时 {#formula}

ax²+bx+c=0 且 a≠0 时，求根公式（quadratic formula）与配方等价。系数要带符号，整个分子都要除以 2a。

$$x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}.$$

根号内 Δ=b²−4ac 决定实数根数：正为两个，零为一个重根，负则无实根。负数的平方根不是实数，所以 Δ<0 无实数根，不能硬算一个小数。这里负的是被开方数；负分支例如 −√4=−2 本身是实数。

<div class="worked-example" markdown="1">

### 保留精确根 {#example-formula}

**Question:** Solve $x^2+4x+1=0$ exactly.

$$a=1,\ b=4,\ c=1,\quad x=\frac{-4\pm\sqrt{16-4}}2=\frac{-4\pm2\sqrt3}{2}=-2\pm\sqrt3.$$

配方检查：x²+4x+1=(x+2)²−3，两个根都使原式为零。

</div>

<div class="lesson-check" markdown="1">

### 求解并检查精确解 {#practice-formula}

**Question:** Solve $2x^2+3x-1=0$ exactly and to 3 significant figures. Decide how many real roots $x^2+2x+5=0$ has. Also complete the square for $2x^2+8x+3$.

<details markdown="1">

<summary>提示</summary>

第一题取 a=2、b=3、c=−1；最后一题先从前两项提出 2。

</details>

<details markdown="1">

<summary>解答与检查</summary>

$$x=\frac{-3\pm\sqrt{9+8}}4=\frac{-3\pm\sqrt{17}}4\approx0.281,\ -1.78.$$

$$\Delta=2^2-4(1)(5)=-16<0;\qquad 2x^2+8x+3=2(x+2)^2-5.$$

第二题无实根；(x+1)²+4 恒正。最后曲线最低点 (−2,−5)。开口向上本身不能保证有根。

</details>

</div>

## 同一对数要同时满足两式 {#simultaneous}

联立方程（simultaneous equations）用同一组未知数满足两个条件。消元法把两式相加减去掉一个变量，代入法用相等表达式替换变量；图像交点则同时满足两式。

<div class="worked-example" markdown="1">

### 消元并检查两式 {#example-simultaneous}

**Question:** Solve $2x+y=11$ and $x-y=1$. Also show the solution on a graph.

$$(2x+y)+(x-y)=11+1,\quad 3x=12,\quad x=4,\quad y=3.$$

y 项正负相反，因此相加最省事。检查 2(4)+3=11，4−3=1。作图时画 y=11−2x 过 (0,11)、(5,1)，及 y=x−1 过 (0,−1)、(5,4)，交于 (4,3)。

</div>

<div class="lesson-check" markdown="1">

### 求两种价格 {#practice-simultaneous}

**Question:** Two pens and three notebooks cost 19 dollars. Three pens and one notebook cost 18 dollars. Form two equations, solve for each price, then draw the two lines in price coordinates to check their intersection.

<details markdown="1">

<summary>提示</summary>

设 p 为一支笔价，q 为一本本子价；必要时乘整条方程让系数相同。

</details>

<details markdown="1">

<summary>解答与检查</summary>

$$2p+3q=19,\quad 3p+q=18,\quad q=18-3p,$$

$$2p+3(18-3p)=19,\quad -7p=-35,\quad p=5,\ q=3.$$

笔 5 元、本子 3 元。第一线用 (2,5)、(5,3)、(8,1)，第二线用 (4,6)、(5,3)、(6,0)，相交于 (5,3)。价格均正，两条原费用都吻合。若把 p、q 颠倒，原费用不成立。

</details>

</div>

## 直线与曲线相遇 {#line-curve}

<div class="worked-example" markdown="1">

### 代入完整表达式 {#example-line-curve}

**Question:** Solve $y=x+1$ and $y=x^2-3x+3$.

$$x+1=x^2-3x+3,\quad x^2-4x+2=0,$$

$$x=2\pm\sqrt2,\qquad y=3\pm\sqrt2.$$

两组为 (2+√2,3+√2)、(2−√2,3−√2)，正负号必须对应。它们就是两个交点。两式的 y 是同一量，所以可用 x+1 替换。

</div>

<div class="lesson-check" markdown="1">

### 找出每一组 {#practice-line-curve}

**Question:** Solve $y=2x+3$ and $y=x^2-x-1$. Check both solution pairs in both equations.

<details markdown="1">

<summary>提示</summary>

令两个 y 表达式相等，解所得二次方程。

</details>

<details markdown="1">

<summary>解答与检查</summary>

$$2x+3=x^2-x-1,\quad x^2-3x-4=(x-4)(x+1)=0,$$

$$x=4,-1;\qquad (x,y)=(4,11),\ (-1,1).$$

x=4 时曲线给 16−4−1=11；x=−1 时给 1+1−1=1，直线也都吻合。只报 x 还没求出联立方程的 y。

</details>

</div>

## 代数根未必符合情境 {#modelling}

<div class="worked-example" markdown="1">

### 使用长度限制 {#example-model}

**Question:** A rectangle has sides x cm and (x+2) cm, x>0, and area 15 cm². Find its dimensions.

$$x(x+2)=15,\quad x^2+2x-15=(x+5)(x-3)=0,\quad x=-5,3.$$

−5 不是正长度，故排除。长方形为 3 cm×5 cm，面积 15 cm²。按情境筛根与运算中误删有效根不同。

</div>

<div class="lesson-check" markdown="1">

### 自己列式而非套题 {#practice-model}

**Question:** A positive number is 3 less than another number. Their product is 40. Find both numbers, forming and solving an equation. Explain which algebraic possibility is rejected.

<details markdown="1">

<summary>提示</summary>

设较小为 x，另一数为 x+3。

</details>

<details markdown="1">

<summary>解答与检查</summary>

$$x(x+3)=40,\quad x^2+3x-40=(x+8)(x-5)=0,\quad x=-8,5.$$

只允许 x=5，故两数 5、8。−8、−5 虽然乘积也为 40，却不符正数条件；差 3、积 40 均需检查。

</details>

</div>

## 修复后重试同一能力 {#retry}

漏根回看[零乘积](#roots)；图不完整回看[图像特征](#sketch)；顶点符号错回看[配方](#square)；系数或近似错回看[公式](#formula)；解未配对回看[联立](#simultaneous)、[线与曲线](#line-curve)；长度无效回看[情境](#modelling)。

<div class="lesson-check" markdown="1">

### 重试根与图 {#retry-graph}

**Question:** Plot $y=x^2-4$ using x=−3,−2,−1,0,1,2,3. Solve y=0 and mark the turning point and symmetry line.

<details markdown="1">

<summary>提示</summary>

找对称等高点。

</details>

<details markdown="1">

<summary>解答与检查</summary>

$$y:\ 5,0,-3,-4,-3,0,5;\quad x^2-4=(x-2)(x+2).$$

根 −2、2，最低点 (0,−4)，对称轴 x=0；按表画平滑向上抛物线，不是折线。

</details>

</div>

<div class="lesson-check" markdown="1">

### 重试精确根与顶点 {#retry-square}

**Question:** Complete the square for $x^2+2x-2$, then find its roots and turning point. Solve $3x^2+2x-2=0$ exactly using the formula.

<details markdown="1">

<summary>提示</summary>

第一题取一次系数的一半；第二题明确 a、b、c。

</details>

<details markdown="1">

<summary>解答与检查</summary>

$$x^2+2x-2=(x+1)^2-3,\quad x=-1\pm\sqrt3,$$

$$x=\frac{-2\pm\sqrt{4+24}}6=\frac{-1\pm\sqrt7}{3}.$$

第一式最低点 (−1,−3)，乘回检查；第二式 a=3、b=2、c=−2，正负分支都保留。

</details>

</div>

<div class="lesson-check" markdown="1">

### 重试两个条件 {#retry-simultaneous}

**Question:** Solve $2x+y=8$, $x-y=1$ algebraically and by plotting both lines.

<details markdown="1">

<summary>提示</summary>

相加可消去 y。

</details>

<details markdown="1">

<summary>解答与检查</summary>

$$3x=9,\quad x=3,\quad y=2.$$

画 y=8−2x 过 (0,8)、(4,0)，及 y=x−1 过 (0,−1)、(4,3)。交点 (3,2) 满足两式。

</details>

</div>

<div class="lesson-check" markdown="1">

### 重试配对解 {#retry-line-curve}

**Question:** Solve $y=x+2$ and $y=x^2-2$.

<details markdown="1">

<summary>提示</summary>

令两个 y 表达式相等。

</details>

<details markdown="1">

<summary>解答与检查</summary>

$$x^2-x-4=0,\quad x=\frac{1\pm\sqrt{17}}2,\qquad y=\frac{5\pm\sqrt{17}}2.$$

正分支配正分支，负分支配负分支。y=x+2 检查配对；二次关系 x²=x+4 检查另一曲线。

</details>

</div>

<div class="lesson-check" markdown="1">

### 重试长度模型 {#retry-model}

**Question:** A rectangle has width w cm and length (w+1) cm. Its area is 20 cm². Find the dimensions.

<details markdown="1">

<summary>提示</summary>

面积相乘，并要求 w>0。

</details>

<details markdown="1">

<summary>解答与检查</summary>

$$w(w+1)=20,\quad (w+5)(w-4)=0,\quad w=-5,4.$$

排除 −5，宽 4 cm、长 5 cm，积为 20 cm²。

</details>

</div>

## 下一步与稍后回顾 {#next-step}

继续学[函数与图像](/zh/igcse/mathematics/functions-and-graphs/#start)，或回到[二次不等式](/zh/igcse/mathematics/equations-and-inequalities/#quadratic-inequalities)。稍后去掉方法标题，重做价格题和图解根。

[学过其他主题后，再做代数混合回顾。](/zh/igcse/mathematics/mixed-review/#algebra-review) 收起解答，记录哪些能无帮助完成。

## 范围与来源 {#sources}

<details markdown="1">

<summary>资格和实际使用的来源</summary>

A16、A20–22；大纲 PDF 16–17（印刷 17–18）。

实际读过 2C QP PDF 22 Q24、24 Q27 及 [MS PDF 10–11](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92602C-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=10)；1E QP PDF 24 Q24 及 [MS PDF 12](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9260-92601E-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=12)；2E QP PDF 25 Q28 及 [MS PDF 16–17](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92602E-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=16)；1C QP PDF 18 Q22 及 [MS PDF 9](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9260-92601C-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=9)。

OxfordAQA International GCSE Mathematics **9260**，大纲 **v5.1**。[资格页](https://www.oxfordaqa.com/qualification/international-gcse-mathematics-9260/)；[大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-gcse-mathematics-specification.pdf)。以下评估材料均为 **Specimen 2018**，网址中的 2016 不是考季。它们用于校准范围和推理，本页没有冒称官方题的任务。

</details>
