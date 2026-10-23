---
title: 线性方程组与三个平面
layout: subjects
mathjax: true
grade: a2
subject: a2-further-mathematics
lang: zh-CN
translation_of: /alevel/a2-further-mathematics/linear-equations/
permalink: /zh/alevel/a2-further-mathematics/linear-equations/
toc_headings: "#constraints-and-elimination, #inverse-matrices, #singular-systems, #parameters, #practice, #feedback-and-retry, #continue-learning, #sources"
study_page: true
reading_layout: true
---

[高等纯数学](/zh/alevel/a2-further-mathematics/) · FP2.14 线性方程组的解（Solution of linear equations）

判断一组线性约束有唯一解、无解还是无穷多解，把消元法与逆矩阵方法连接到平面的公共交集。

- **学习：**从[约束与消元](#constraints-and-elimination)开始，再比较[逆矩阵](#inverse-matrices)、[奇异方程组](#singular-systems)与[含参数的讨论](#parameters)。
- **作业帮助：**除以含参数的式子前先保留例外值；行列式为零不能单独判断解是否存在。
- **复习：**先做[练习](#practice)，再打开提示或解答；按[反馈与重试](#feedback-and-retry)定位错误后重新尝试。

**开始前：**会解二元联立方程，理解[直线与平面](/zh/alevel/a2-further-mathematics/lines-and-planes/)，并复习[矩阵乘法与逆矩阵](/zh/alevel/a2-further-mathematics/matrix-algebra/)。本课讨论至多三个未知数、至多三个线性方程。

未标改编的例题与练习均为自拟题，不给官方分值。改编考试示例的原卷、题号和实际读过的官方评分标准见[来源](#sources)。

若二元消元尚不稳，先做下面[起步检查](#starting-check)；右端未同步运算，回[等价变形](#equivalent-equations)后重做[第 2 题](#question-2)。若只会使用现成的逆，先回[三阶求逆示范](/zh/alevel/a2-further-mathematics/matrix-algebra/#worked-inverse)，再独立完成[共同任务](#joint-inverse-task)。平面几何不清则回[法向与平面](/zh/alevel/a2-further-mathematics/lines-and-planes/#planes)。

## 约束与消元 {#constraints-and-elimination}

<section class="lesson-check" markdown="1">

### 先明确“解”意味着什么 {#starting-check}

**Try first.** Find all pairs satisfying $x+y=3$ and $x-y=1$. Explain how you know your answer satisfies both equations.

<details markdown="1">
<summary>核对</summary>

两式相加得 $2x=4$，因此 $x=2$、$y=1$。代回得到 $2+1=3$ 与 $2-1=1$。只在其中一条直线上的点，或尚未检查第二个条件的计算器结果，都不能证明是公共解。

</details>

</section>

三未知数的线性方程可以写成

$$ax+by+cz=d.$$

当 $(a,b,c)\ne(0,0,0)$ 时，它的解构成一个平面。联立方程的解必须满足**每一个**方程；几何上要在全部平面的公共交集中，而不只是某两个平面的交线上。

三个系数全为零时要另看：$0=0$ 不限制未知数，而 $0=5$ 不可能成立。消元产生零行时，这个区别决定方程组是否一致。

写成 $A\mathbf x=\mathbf b$ 时，$A$ 的每一行按同样变量顺序记录一个方程的系数。右端 $\mathbf b$ 也是条件的一部分；系数矩阵相同而 $\mathbf b$ 改变，解集可以完全不同。

### 为什么消元不改变解集 {#equivalent-equations}

可以交换方程、将一个方程乘**非零**数，或将一个方程替换为它与另一方程某倍数的和。这些操作都可逆，因此保留联立方程的解集。右端必须和系数一起操作。

乘零会抹掉一个约束。除以含参数的式子前，先排除使除数为零的参数值，并保留这些值单独讨论。

<section class="worked-example" markdown="1">

### 例 1：求解并核验 {#example-1}

**Question:** Solve the following system and interpret its solution geometrically.

$$\begin{aligned}
x+y+z&=6 &&(1)\\
2x-y+z&=3 &&(2)\\
x+2y-z&=2 &&(3)
\end{aligned}$$

第二式减去第一式的两倍，第三式减去第一式，得到

$$-3y-z=-9,\qquad y-2z=-4.$$

由后一个关系有 $y=2z-4$，代入前式：

$$-3(2z-4)-z=-9\ \Rightarrow\ -7z=-21\ \Rightarrow\ z=3.$$

于是 $y=2$、$x=1$。每个未知数都被确定，公共交集只有一点 $(1,2,3)$。逐式检查为 $1+2+3=6$、$2-2+3=3$ 和 $1+4-3=2$。

</section>

<section class="lesson-check" markdown="1">

### 暂停：等价变形 {#elimination-pause}

**Complete a step.** If you had obtained $3y+z=9$ instead, would the answer change? Explain before reading on.

<details markdown="1">
<summary>核对</summary>

不会：它是消元式整体乘以 $-1$。若把 $-3y-z=-9$ 改成 $3y+z=-9$，右端没有同步乘负一，就改变了原来的约束。

</details>

</section>

## 逆矩阵法 {#inverse-matrices}

方阵系数矩阵满足 $\det A\ne0$ 时，$A^{-1}$ 存在。左乘得到

$$A\mathbf x=\mathbf b\ \Rightarrow\ A^{-1}A\mathbf x=A^{-1}\mathbf b\ \Rightarrow\ \boxed{\mathbf x=A^{-1}\mathbf b}.$$

乘法顺序不能交换：未知量是列向量，$\mathbf bA^{-1}$ 的维数并不相容。可逆性也证明唯一性：若 $A\mathbf u=A\mathbf v$，左乘 $A^{-1}$ 得 $\mathbf u=\mathbf v$。

<section class="worked-example" markdown="1">

### 例 2：使用给定的逆矩阵 {#example-2}

**Question:** Given the matrices below, verify the supplied inverse and use it to solve $A\mathbf x=\mathbf b$.

$$A=\begin{pmatrix}1&1&0\\0&1&1\\1&0&1\end{pmatrix},\qquad
A^{-1}=\frac12\begin{pmatrix}1&-1&1\\1&1&-1\\-1&1&1\end{pmatrix},\qquad
\mathbf b=\begin{pmatrix}5\\7\\6\end{pmatrix}.$$

令 M 为分子中的整数矩阵，行乘列得到：

$$AM=\begin{pmatrix}1+1&-1+1&1-1\\1-1&1+1&-1+1\\1-1&-1+1&1+1\end{pmatrix}=2I,\qquad
MA=\begin{pmatrix}1+1&1-1&-1+1\\1-1&1+1&1-1\\-1+1&-1+1&1+1\end{pmatrix}=2I.$$

因此给定矩阵确为双侧逆。按题目指定方法左乘右端：

$$\mathbf x=\frac12\begin{pmatrix}5-7+6\\5+7-6\\-5+7+6\end{pmatrix}
=\begin{pmatrix}2\\3\\4\end{pmatrix}.$$

核对 $2+3=5$、$3+4=7$ 与 $2+4=6$。题目若要求 **use your inverse**，就应展示这个乘法。FP2.14 一般接受不同解法，并不取消某道题连接前面结果的具体要求。

</section>

<section class="lesson-check" markdown="1">

### 共同任务：自行构造逆，再用于方程 {#joint-inverse-task}

完成矩阵课的[新输入共同任务](/zh/alevel/a2-further-mathematics/matrix-algebra/#inverse-system-task)，保持其提示和解答关闭。它要求自己从行列式、九个代数余子式及转置构造逆，再 **use your inverse from (a)** 解右端，并讨论奇异参数下的一致性。只完成本课例 2 的“给定逆乘右端”，还没有完成这项产出。

保留 (a) 的求逆工作与 (b) 的实际矩阵乘法，逐行代回三个原方程；把唯一解、公共直线或无公共点与各参数条件对应。题目与分别关闭的提示／答案集中在同一入口，不另复制一套结果。

</section>

## 奇异方程组与几何 {#singular-systems}

方阵满足 $\det A=0$ 时称为**奇异矩阵（singular matrix）**。它没有逆矩阵，所以不能使用逆矩阵法；但这**并不能**判断 $A\mathbf x=\mathbf b$ 是否有解。

<section class="worked-example" markdown="1">

### 例 3：右端项不能丢 {#example-3}

**Question:** Compare the solution sets of the systems below. In system B only the right-hand side of the second equation has changed.

$$\begin{array}{ll}
\text{A:}&x+y+z=1,\quad 2x+2y+2z=2,\quad x-y+z=3,\\
\text{B:}&x+y+z=1,\quad 2x+2y+2z=3,\quad x-y+z=3.
\end{array}$$

A 中第二式是第一式的两倍，没有新增限制。第一式减去第三式得到 $2y=-2$，所以 $y=-1$、$x+z=2$。全部解为

$$\boxed{\mathbf x=\begin{pmatrix}2\\-1\\0\end{pmatrix}+t\begin{pmatrix}-1\\0\\1\end{pmatrix},\quad t\in\mathbb R.}$$

公共交集是一条直线，列出的三个平面中有两个重合。B 中第二式减去第一式的两倍得到 $0=1$，因此无解：前两个平面平行且不重合。两个系统的奇异系数矩阵完全相同。

</section>

### 区分公共交集的形态 {#plane-configurations}

| 代数结果 | 公共解集 | 三个真正平面的几何解释 |
| --- | --- | --- |
| 每个变量都确定 | 一个点 | 三个独立的平面约束交于该点。 |
| 一个自由参数 | 一条直线 | 例如三个不同平面共一条线，或两个重合平面与另一个平面相交。 |
| 两个自由参数 | 一个平面 | 三个平面重合。 |
| 产生矛盾式 | 空集 | 可能有不同的平行平面，也可能两两相交却没有共同交点。 |

![三个平面的构造示意：分别具有公共点、公共直线，以及两两相交却无公共点；虚线区别遮挡边，图不按比例。](/assets/img/further-linear-equations.svg)

图示展示可能的配置，不能代替方程判断。无公共点不意味着三个平面全都平行；两两的交线可以是三条平行直线，形成三棱柱配置。

方程更少或出现零系数行时，直接看还剩多少独立约束。三个未知数只受一个真正平面限制时，有两个自由参数；若所有系数都为零且所有右端也为零，则每个向量都满足系统。

## 参数：先分开例外值 {#parameters}

<section class="worked-example" markdown="1">

### 例 4：一个模型的三种结果 {#example-4}

**Question:** Discuss all real values of $k$ and $h$ for the following system. Give any infinite family parametrically.

$$\begin{aligned}
x+y+z&=3 &&(1)\\
x+2y+3z&=6 &&(2)\\
2x+3y+(k+4)z&=h &&(3)
\end{aligned}$$

进行 $(3)-(1)-(2)$ 得到

$$kz=h-9.$$

除之前先保留 $k=0$。

- 当 $k\ne0$，第三个坐标确定。第二式减第一式得 $y+2z=3$，再由第一式得 $x=z$。系统有唯一解：

$$\boxed{z=\frac{h-9}{k},\quad y=3-\frac{2(h-9)}{k},\quad x=\frac{h-9}{k}.}$$

- 当 $k=0$ 且 $h=9$，消元式为 $0=0$，第三个平面相对于前两个没有新增约束。公共直线为

$$\boxed{\mathbf x=\begin{pmatrix}0\\3\\0\end{pmatrix}+t\begin{pmatrix}1\\-2\\1\end{pmatrix},\quad t\in\mathbb R.}$$

- 当 $k=0$ 且 $h\ne9$，消元式不可能成立，没有满足全部平面的点。三个法向量两两不平行，所以是三棱柱配置，而不是三个平行平面。

在 $k=0$、$h=9$ 时，把一般解代入原三式，左端分别恒为 $3$、$6$ 和 $9$，都不随 $t$ 改变。对 $k\ne0$，代入第三式得到 $9+kz=h$，检查了最后一个约束。

</section>

<section class="worked-example" markdown="1">

### 例 5：考试题中的完整论证 {#example-5}

**改编题：**依据 OxfordAQA 9665/FM03 January 2025 Q8，原卷第 14–15 页，已对照配套 MS 第 13 页。任务措辞缩写，保留原方程与参数，不沿用官方分值。

**Question:** The three planes below do not meet at a unique point. Find the possible values of $k$. For $k=3$, justify the number of simultaneous solutions and describe the configuration.

$$\begin{aligned}
2x-y+3z&=1,\\
x+(k-1)y-z&=3,\\
(k-3)x-y+z&=1.
\end{aligned}$$

系数矩阵的行列式为

$$\begin{aligned}
\det A&=2(k-2)+(1+k-3)+3[-1-(k-1)(k-3)]\\
&=-3k^2+15k-18=-3(k-2)(k-3).
\end{aligned}$$

行列式非零会产生唯一解，与条件矛盾，故 $k=2$ 或 $k=3$。这只是找到例外值，还没有判断这些值下是否有解。

当 $k=3$，第一式减第二式的两倍得 $-5y+5z=-5$；第三式的五倍却为 $-5y+5z=5$。二者矛盾，所以**无解**。每对法向量都不平行，而三个法向量线性相关；三条两两交线相互平行，对应三棱柱配置。

</section>

<section class="lesson-check" markdown="1">

### 暂停：另一例外值 {#exceptional-pause}

**Try a further check.** What happens at the other exceptional value, $k=2$?

<details markdown="1">
<summary>提示</summary>

先比较第二和第三式，暂时不用展开长消元。

</details>

<details markdown="1">
<summary>解答</summary>

它们分别为 $x+y-z=3$ 与 $-x-y+z=1$，左端相加为零，右端却为 4，因此仍无解。这个追加问题是自拟题；原卷要求详细判断的是 $k=3$。

</details>

</section>

## 独立练习 {#practice}

以下为自拟题。除非题目指定，否则自行选择方法。一般解要代回所有原式；判断无解要写矛盾。第一次尝试时保持提示和答案收起。

<section class="lesson-check" markdown="1">

### 练习 1 {#question-1}

Find all solutions of $x+y+z=4$ and $x-y+z=0$. Describe the common set geometrically.

<details markdown="1">
<summary>提示</summary>

先相减，再判断剩下的两个未知数是否都被确定。

</details>

<details markdown="1">
<summary>解答</summary>

相减得 $2y=4$，所以 $y=2$、$x+z=2$。因此

$$\boxed{\mathbf x=\begin{pmatrix}2\\2\\0\end{pmatrix}+t\begin{pmatrix}-1\\0\\1\end{pmatrix},\quad t\in\mathbb R.}$$

任意实数 $t$ 都使原式左端分别为 4 与 0。两个不平行平面交于一条直线，只给其中一点并未回答全部解。

</details>

</section>

<section class="lesson-check" markdown="1">

### 练习 2 {#question-2}

Solve $x+y+z=1$, $2x-y+z=-4$ and $x+2y-z=3$. Verify the result in all three equations and explain why it is unique.

<details markdown="1">
<summary>提示</summary>

从后两式消去 $x$，注意右端的符号。

</details>

<details markdown="1">
<summary>解答</summary>

消元式为 $-3y-z=-6$ 与 $y-2z=2$，所以 $y=2$、$z=0$、$x=-1$。检查 $-1+2+0=1$、$-2-2+0=-4$ 和 $-1+4-0=3$。消元确定了每一个变量；也可检查系数行列式为 7，不为零。公共点唯一，为 $(-1,2,0)$。

</details>

</section>

<section class="lesson-check" markdown="1">

### 练习 3 {#question-3}

Discuss, for every real $k$, the system $x+y+z=3$, $x+2y+3z=6$, $2x+3y+(k+4)z=9$. A student divides a reduced equation by $k$ and reports one solution for every $k$. Correct the argument.

<details markdown="1">
<summary>提示</summary>

第三式减去前两式，保留不能除的情形。

</details>

<details markdown="1">
<summary>解答</summary>

消元式为 $kz=0$。对 $k\ne0$，有 $z=0$、$y=3$、$x=0$，公共交集只有 $(0,3,0)$。当 $k=0$ 时不产生约束，每个 $(t,3-2t,t)$ 都是解。学生报告的点在零参数时仍满足条件，但漏掉了其余公共直线；找到一个可行解不等于证明解唯一。

</details>

</section>

<section class="lesson-check" markdown="1">

### 练习 4 {#question-4}

Three planes have equations $x+y+z=1$, $x+2y+3z=2$, $2x+3y+4z=5$. A student states: “The determinant is zero, so the three planes are parallel.” Evaluate both the algebraic conclusion and the geometric claim.

<details markdown="1">
<summary>提示</summary>

将第三式与前两式的和比较；再逐对比较法向量。

</details>

<details markdown="1">
<summary>解答</summary>

前两式推出 $2x+3y+4z=3$，与第三式矛盾，因此没有公共解。第三行系数是前两行之和，行列式确实为零；但法向量 $(1,1,1)$、$(1,2,3)$、$(2,3,4)$ 没有任何两个成比例。平面两两相交，三条平行交线形成三棱柱配置。学生的几何判断错误。

</details>

</section>

<section class="lesson-check" markdown="1">

### 练习 5 {#question-5}

The first two planes are $x+y+z=3$ and $x+2y+3z=6$. Construct a third plane for each outcome: one common point; one common line; no common point while every pair of planes intersects. Justify your choices.

<details markdown="1">
<summary>提示</summary>

先写前两平面交线的参数式，将这个一般点代入你提出的第三个平面。

</details>

<details markdown="1">
<summary>解答</summary>

交线为 $(t,3-2t,t)$。一组可行选择为：

- $x=0$：确定 $t=0$，只有公共点 $(0,3,0)$。
- $2x+3y+4z=9$：所有 $t$ 都满足，保留整条公共直线。
- $2x+3y+4z=10$：在前两者交线上左端恒为 9，所以没有公共点。其法向量 $(2,3,4)$ 与两个原法向量都不平行，因此每对平面仍相交。

答案可以不同，但必须证明公共交集及额外的两两相交条件，不能只给行列式。

</details>

</section>

<section class="lesson-check" markdown="1">

### 练习 6 {#question-6}

Solve $B\mathbf v=\mathbf0$ for the matrix below. State precisely how the solution set changes if $\mathbf v$ must be nonzero.

$$B=\begin{pmatrix}0&1&0\\0&0&0\\0&0&1\end{pmatrix}.$$

<details markdown="1">
<summary>提示</summary>

按每行写出标量方程，包括系数全为零的那一行。

</details>

<details markdown="1">
<summary>解答</summary>

三行方程是 $v_2=0$、$0=0$、$v_3=0$，所以 $\mathbf v=(t,0,0)$，其中 $t$ 可取任意实数。若要求非零，只排除 $t=0$，而不是排除整条方向直线。求特征向量时会用到这个区别。

</details>

</section>

## 反馈与重试 {#feedback-and-retry}

| 如果你的作答出现…… | 原因 | 下一步 |
| --- | --- | --- |
| “行列式为零，所以无解” | 把奇异性和不一致混同。 | 比较例 3 两组系统，连同右端一起检查。 |
| 无穷多解只写一个点 | 擅自固定了自由参数。 | 参数化整个公共集，符号代回验证。 |
| 漏掉例外参数 | 除法删除了一种情形。 | 除之前先分零/非零两支。 |
| “无解意味着平面平行” | 把共同相交与两两相交混同。 | 逐对检查法向量，再判断公共集。 |
| 解不满足原第三式 | 只用了部分约束。 | 代回全部原式，不仅看消元后的两式。 |

<section class="lesson-check" markdown="1">

### 换右端后重试 {#parameter-retry}

**Retry without a method label.** Replace the right-hand side 9 in Question 3 by 10. Classify the system for every real $k$ and justify its geometry when $k=0$.

<details markdown="1">
<summary>重试后核对</summary>

消元式是 $kz=1$。对 $k\ne0$ 有唯一解 $(1/k,3-2/k,1/k)$；当 $k=0$ 时不可能成立，三个两两不平行的平面没有公共点。与练习 3 比较：系数矩阵未变，但例外值下的一致性变了。

</details>

</section>

## 速查 {#quick-reference}

| 情形 | 判断与证据 |
| --- | --- |
| 方阵系数行列式非零 | 唯一解；用消元或 $A^{-1}\mathbf b$，题目指定方法时从其要求。 |
| 行列式为零 | 逆矩阵不可用，继续消元检查一致性。 |
| 消元产生矛盾 | 无解，写出实际矛盾。 |
| 一致且有自由变量 | 写完整参数解及公共几何对象。 |
| 除数含参数 | 先单独保留使除数为零的参数。 |
| 几何解释 | 说明公共交集；两两关系须有法向量/方程证据。 |

## 继续学习 {#continue-learning}

**学后下一步：**参数除法或奇异分类出错，先回例 3／例 4，再关闭帮助做[换右端重试](#parameter-retry)；“非零解”不清，先做[第 6 题](#question-6)，再进入特征向量。完成课程[跨主题综合](/zh/alevel/a2-further-mathematics/#mixed-review)，隔开学习后做[延后任务](/zh/alevel/a2-further-mathematics/#later-review)，把解集与特征向量、反射的几何意义联系起来。

上一篇：[矩阵代数](/zh/alevel/a2-further-mathematics/matrix-algebra/)。下一篇：[特征值与特征向量](/zh/alevel/a2-further-mathematics/eigenvalues-and-eigenvectors/)，届时齐次方程组必须有**非零**解。

完成推理后，可用 [fx-CG50 矩阵指南](/alevel/fx-cg50/further-mathematics/#fm-matrices)检查数值。数值输出或报错都不能证明所有参数情形的分类。

## 来源 {#sources}

本轮于 **2026-10-23** 重读下列 9665 大纲、January 2025 Q8 与 Q13(b) 所列 QP／MS 原文。

范围依据 [OxfordAQA Further Mathematics 9665，Version 5.2，FP2.14，印刷第 21 页 / PDF 第 20 页](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf#page=20)。例 5 改编自 [January 2025 FM03 Q8，原卷第 14–15 页](/assets/pdf/fx-cg50/references/oxfordaqa-fm03-2025-january-question-paper.pdf#page=14)，已对照[配套官方 MS 第 13 页](/assets/pdf/fx-cg50/references/oxfordaqa-fm03-2025-january-mark-scheme.pdf#page=13)。指定方法的区别也对照了同卷 Q13(b)，原卷第 27 页 / MS 第 21 页。其余例题、练习、反馈与解答均为自拟，讲解不称官方评分标准。平面配置图是构造示意，不是实测数据。
