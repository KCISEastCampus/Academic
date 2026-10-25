---
layout: subjects
title: "变加速直线运动"
mathjax: true
grade: as
subject: as-mathematics
lang: zh-CN
translation_of: /alevel/as-mathematics/variable-acceleration/
permalink: /zh/alevel/as-mathematics/variable-acceleration/
toc_headings: h2
reading_layout: true
study_page: true
---

[AS 数学学习路线](/zh/alevel/as-mathematics/#learning-route) · M1.2 · OxfordAQA 9660 v5.2
{:.lesson-meta}

先读懂解释和完整示范，再拿纸笔做题。提示与解答分别展开。所有题目均为**自拟题**，没有官方分值；保留英文题干，中文帮助你理解和逐步独立表达。

- [从加速度找速度与位置](#l23)

## 从加速度找速度与位置 {#l23}

目标：利用对应条件找回速度和位置，再分清位移与路程。先修：[求导](/zh/alevel/as-mathematics/differentiation/#l06)、[积分](/zh/alevel/as-mathematics/integration/#l08)与[方向约定](../constant-acceleration/#l22)。

### 加速度告诉我们速度怎样变 {#l23-concept}

只知道加速度，还不知道最初的速度。先积分，再用速度条件确定第一个常数；位置需要再积分一次，并使用自己的位置条件：

$$\begin{aligned}
v&=\frac{ds}{dt},\qquad a=\frac{dv}{dt},\\
v&=\int a\,dt+C,\\
s&=\int v\,dt+D.
\end{aligned}$$

两个常数回答不同问题，不能混成一个。求得位置后，求导应回到速度，再求一次应回到加速度；最后逐个检查给定条件。

位移是速度的有向积分。求路程要先找速度变号处，分段计算正的路径长度；整段积分后才取绝对值，会漏掉折返路程。中途更换运动模型时，使用交接处的位置和题目规定的速度，加速度不一定相同。这些题用幂函数微积分，不需要后面的微分方程方法。

<div class="worked-example" markdown="1">

### 完整示范 {#l23-worked}

**Question:** A particle has $a=2t-4\,\mathrm{m\,s^{-2}}$, $v(0)=3\,\mathrm{m\,s^{-1}}$ and $s(0)=0$. Find v and s, then displacement and distance from $t=0$ to $t=4$.

加速度是速度的导数。先积分，保留尚不知道的初始速度：

$$v=\int(2t-4)\,dt=t^2-4t+C.$$

在 $t=0$，速度为 3，所以 $3=C$。现在对这条完整的速度表达式积分，求位置：

$$s=\int(t^2-4t+3)\,dt=\frac{t^3}3-2t^2+3t+D.$$

在 $t=0$，位置为 0，所以 $D=0$。这是两个不同的常数，要分别用两个条件确定。对 s 求导会回到 v，再求导会回到 a。

求路程前，先找转向：$v=t^2-4t+3=(t-1)(t-3)$ 的符号依次为正、负、正，在 1 和 3 秒改变。各时刻位置为 $s(0)=0,s(1)=4/3,s(3)=0,s(4)=4/3$ 米。

位移只比较终点与起点，为 $4/3$ m。路程要把三段走过的长度相加：$4/3+4/3+4/3=4$ m。平均速率用这段路程除以 4 秒，得到 $1\,\mathrm{m\,s^{-1}}$。

</div>

<div class="lesson-check" markdown="1">

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

</div>

<div class="lesson-check" markdown="1">

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

</div>

<div class="lesson-check" markdown="1">

### 再做一道独立题 {#l23-independent-conditions}

**Question:** For $0\le t\le2$, a particle has acceleration $a=6t-2$ in SI units. At $t=1$ its velocity is 3 and its position is 5. Find v and s in terms of t, then its displacement from 0 to 2 s. Check both given conditions.

<details markdown="1">
<summary>提示</summary>

第一次积分后使用速度条件，第二次积分后使用位置条件。

</details>

<details markdown="1">
<summary>解答与检查</summary>

先对加速度积分：

$$v=3t^2-2t+C,\qquad 3=3-2+C,\qquad C=2.$$

然后对速度积分，别漏掉刚确定的常数项：

$$s=t^3-t^2+2t+D,\qquad 5=1-1+2+D,\qquad D=3.$$

因此 $v=3t^2-2t+2$，$s=t^3-t^2+2t+3$。求导能回到给定加速度，在 $t=1$ 时速度和位置分别为 3 和 5。位移为 $s(2)-s(0)=11-3=8$ m。

</details>

</div>

### 诊断与修正 {#l23-diagnosis}

加速度变化的整个区间不能直接使用匀加速公式。积分全段后才取绝对值仍会丢失反向路径；应在速度变号处切开。

初始条件丢失，回看[两次积分](#l23-worked)，再[使用两个新条件](#l23-retry-conditions)。回程漏算，回看[速度变号](#l23-worked)，再做[路程重试题](#l23-retry)。

<div class="lesson-check" markdown="1">

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

</div>

<div class="lesson-check" markdown="1">

### 再用一次两个条件 {#l23-retry-conditions}

**Question:** A particle has $a=4t$, $v(0)=-2$ and $s(0)=1$ in SI units. Find its position at $t=2$ by finding v and s first.

<details markdown="1">
<summary>提示</summary>

初始位置并不是速度表达式里的常数。

</details>

<details markdown="1">
<summary>解答与检查</summary>

积分得 $v=2t^2+C$。由 $v(0)=-2$ 得 $C=-2$。再积分得 $s=\frac23t^3-2t+D$。由 $s(0)=1$ 得 $D=1$。所以 $s(2)=16/3-4+1=7/3$ m。对 s 连续求两次导数会得到 $a=4t$。

</details>

</div>

## 学完之后 {#next-step}

收起解答，检查自己能否独立完成本课各组的再尝试，并解释方法与适用条件。仍有困难时回看对应示范；完成后继续下一课。

[上一课：匀加速直线运动](/zh/alevel/as-mathematics/constant-acceleration/) · [课程目录](/zh/alevel/as-mathematics/#learning-route) · [下一课：力与牛顿运动定律](/zh/alevel/as-mathematics/forces/)

学完这条路线后，做[综合题](/zh/alevel/as-mathematics/#mixed-mechanics)。在之后一次学习中，关掉解答完成[回顾题](/zh/alevel/as-mathematics/#later-mechanics)。

## 来源与范围 {#sources}

<details class="lesson-notes" markdown="1">
<summary>查看范围与评分材料</summary>

按[当前 9660 官方大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf)组织。配套评分材料用于核对作答证据；本页题目全部另行自拟，不能称为官方原题或官方评分标准。

Specification §3.2 M1.2; MA02 January 2025 Q10, QP pp20–21, MS pp17–19.

[MA01 2025 年 1 月原卷](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-question-paper.pdf) · [配套 MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-mark-scheme.pdf) · [MA02 2025 年 1 月原卷](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-question-paper.pdf) · [配套 MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-mark-scheme.pdf)

完成标准是能独立解释方法与检查条件，不是看完解答。未经过学生试用，不据此宣称学习效果已验证。

</details>
