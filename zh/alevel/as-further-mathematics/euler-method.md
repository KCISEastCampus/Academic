---
title: "Euler 更新及其局限"
layout: subjects
mathjax: true
grade: as
subject: as-further-mathematics
lang: zh-CN
translation_of: /alevel/as-further-mathematics/euler-method/
permalink: /zh/alevel/as-further-mathematics/euler-method/
toc_headings: "#start, #model, #demonstration, #accuracy, #practice, #retry, #later-review, #next-step, #sources"
study_page: true
reading_layout: true
---

[AS 高数课程](/zh/alevel/as-further-mathematics/)

微分方程给的是斜率，并不直接给下一个 y。Euler 方法沿当前斜率走一小段直线，再在新的近似点重算。关键是同步更新 x、y，能向两个方向推进，并区分数值输出与误差保证。

## 开始之前 {#start}

先修是代入、有符号增量与[局部切线近似](/zh/alevel/as-further-mathematics/rates-and-approximations/)。解 f(x)=0 是找横轴交点，沿 y′=f(x,y) 推进则需要初始点，两类任务不同。本页均为**自拟题**，没有官方分值。先写出每步旧点和斜率，再看帮助。

## 把局部斜率变成一步 {#model}

对一个较小的有符号增量 h，真实解的切线近似给出

$$y(x+h)\approx y(x)+h\,y'(x).$$

因为 y′=f(x,y)，就在当前近似点求斜率，用来定义下一个数值。递推式精确定义这个数列，而数列只是对真实解的近似：

$$\begin{aligned}
s_n&=f(x_n,y_n),\\
x_{n+1}&=x_n+h,\\
y_{n+1}&=y_n+h s_n.
\end{aligned}$$

f 的两个输入都来自同一旧行。把 x 换成新值而保留旧 y，就改变了方法。h 的符号由方向决定：向较大 x 走取正，向较小 x 走取负。本课向后推进指在同一显式递推中使用负 h。

先数步数，再计算；每行检查公式定义域，并确认最终 x 正是要求的终点。中间斜率不必过早舍入。给定固定步长若不能落到终点，应说明并查题目要求，不能暗中改最后一步。

## 把一次更新连续算完 {#demonstration}

<section class="worked-example" markdown="1">

### 连续向前走两步

**Demonstration (self-written):** For $y'=x-y$, $y(0)=1$, use $h=0.2$ to estimate $y(0.4)$.

总横向变化为 0.4，因此需走两个 0.2 步。在 (0,1) 处斜率为 −1，第一段横向走 0.2、纵向变 −0.2：

$$\begin{aligned}
s_0&=0-1=-1,\\
y_1&=1+0.2(-1)=0.8,\\
x_1&=0.2.
\end{aligned}$$

然后从近似点 (0.2,0.8) 重新出发，斜率为 −0.6，不能继续用初始斜率，也不能用 x=0.4：

$$\begin{aligned}
s_1&=0.2-0.8=-0.6,\\
y_2&=0.8+0.2(-0.6)=0.68,\\
x_2&=0.4.
\end{aligned}$$

所以 $y(0.4)\approx0.68$。表格只是把同两步集中记录，并非另一种算法。

| Old x | Old y | Old-point slope | New y |
| --- | --- | --- | --- |
| 0 | 1 | −1 | 0.8 |
| 0.2 | 0.8 | −0.6 | 0.68 |

![Euler polygon for y′=x−y from (0,1) with h=0.2; points (0.2,0.8) and (0.4,0.68), slopes and a distinct exact curve are labelled.](/alevel/as-further-mathematics/diagrams/euler.svg){: width="560" height="500" }

每段都沿旧近似点的斜率走。真实曲线的斜率持续变化，而 Euler 在一段内保持同一斜率；因此即使算术完全精确，也会有离散化误差。

</section>

## 改变步长能说明什么 {#accuracy}

为了核查此例，给出下面的精确比较函数。不要求先学会求解析解：对给定函数微分，再代回微分方程与初值即可检验。

$$\begin{aligned}
y(x)&=x-1+2e^{-x},\\
y'(x)&=1-2e^{-x}=x-y(x),\\
y(0)&=1.
\end{aligned}$$

在 0.4 的精确值约为 0.740640092。从同一初值改用 h=0.1，得到

$$\begin{aligned}
y_0&=1,\\
y_1&=0.9,\\
y_2&=0.82,\\
y_3&=0.758,\\
y_4&=0.7122.
\end{aligned}$$

本例小步长更接近：两次绝对误差约为 0.060640092 与 0.028440092。这是此次比较，不是普遍误差界。在有限区间，解足够光滑、f 满足合适正则条件，且步长足够小、推进稳定时，才支持步长趋零的收敛性。有限计算还受舍入与稳定性影响；每次缩步并不自动让每个舍入答案更准。两个数值接近，也不能认证指定误差。

<section class="lesson-check" markdown="1">

#### 任务 1 {#scaffold}

**Scaffold (self-written):** For $y'=2x-y$, $y(0)=2$, $h=0.1$, fill two old-point updates to reach $x=0.2$.

<details markdown="1"><summary>提示</summary>

每次求斜率时，两个值都取自同一旧行。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$\begin{aligned}
y_1&=2+0.1(0-2)=1.8,\\
y_2&=1.8+0.1(0.2-1.8)=1.64.
\end{aligned}$$

第二步旧 x 是 0.1，因此 2x=0.2；若把 0.2 当旧 x，这一项会错误加倍。行号混淆时回看[同步递推](#model)。

</details>

</section>

## 独立完成 {#practice}

<section class="lesson-check" markdown="1">

#### 任务 1 {#practice-1}

**Independent task (self-written):** For $y'=x+y$, $y(0)=1$, estimate $y(-0.2)$ using steps of magnitude 0.1 and show all updates. A student uses $y_1=1-0.1(-0.1+1)=0.91$. Identify the first error. Do your final displayed digits certify the true error?

<details markdown="1"><summary>提示</summary>

由终点决定 h 的符号；向后走时，斜率中仍要用旧 x。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$\begin{aligned}
h&=-0.1,\\
(x_0,y_0)&=(0,1),\\
y_1&=1-0.1(0+1)=0.9,\\
x_1&=-0.1,\\
y_2&=0.9-0.1(-0.1+0.9)\\&=0.82,\\
x_2&=-0.2.
\end{aligned}$$

学生第一行就混用了新 x 与旧 y。保留正确初始点，从首个错步修复，再重算后续行。显示 0.82 不能认证真误差。符号或同步错时，回看[有符号步长](#model)，再做[重试二](#retry-backward)。

</details>

</section>

<section class="lesson-check" markdown="1">

#### 任务 2 {#practice-2}

**Independent task (self-written):** A curve satisfies $y'=x-y$ but now has $y(0)=2$. Estimate y(0.4) first with steps of 0.2 and then with steps of 0.1. Show every old-point slope. Locate the first error in the proposed sequence

$$\begin{aligned}y_1&=1.6,\\y_2&=1.6+0.2(0.4-1.6)\\&=1.36.\end{aligned}$$

The exact comparison function is $y=x-1+3e^{-x}$: verify it and decide which of your two estimates is closer. Does their difference prove a general error bound?

<details markdown="1"><summary>提示</summary>

两次都从新初值重新开始。第二行旧 x 是第一次更新后的 x，不能直接用终点。

</details>

<details markdown="1"><summary>解答与核对</summary>

| h | Old x | Old y | Slope |
| --- | --- | --- | --- |
| 0.2 | 0 | 2 | −2 |
| 0.2 | 0.2 | 1.6 | −1.4 |
| 0.1 | 0 | 2 | −2 |
| 0.1 | 0.1 | 1.8 | −1.7 |
| 0.1 | 0.2 | 1.63 | −1.43 |
| 0.1 | 0.3 | 1.487 | −1.187 |

$$\begin{aligned}
h=0.2:&\quad 2,\ 1.6,\ 1.32,\\
h=0.1:&\quad 2,\ 1.8,\ 1.63,\\
&\quad 1.487,\ 1.3683.
\end{aligned}$$

题给第一步正确，第二步把新 x=0.4 混进旧点斜率，正确应为 x=0.2；从这里往后均须重算。

$$\begin{aligned}
y'(x)&=1-3e^{-x}=x-y(x),\\
y(0)&=2,\\
y(0.4)&\approx1.410960138.
\end{aligned}$$

两次绝对误差约为 0.090960138、0.042660138，因此本例 h=0.1 更近。两次计算相差 0.0483，单凭这个差不能认证任一次真误差。初值错或混用新旧行，回看[向前示范](#demonstration)，再做斜率同时依赖两个坐标的[重试二](#retry-backward)；步数或显示精度问题做[重试一](#retry-forward)；误差说法过强，回看[精度](#accuracy)。

</details>

</section>

## 从首个错行开始修复 {#retry}

保留前面正确的行，从修正后的旧点重算所有后续斜率；只改最终答案不能修复整条轨迹。按出错方向选择重试。

<section class="lesson-check" markdown="1">

#### Retry 1 {#retry-forward}

**Retry (self-written):** For $y'=-2y$, $y(0)=1$, use $h=0.25$ to reach $x=0.5$. Would printing ten decimals prove ten-decimal accuracy?

<details markdown="1"><summary>提示</summary>

可以先找每步乘数，但仍要数清几步才到终点。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$\begin{aligned}
y_1&=1+0.25(-2)=0.5,\\
y_2&=0.5+0.25(-1)=0.25.
\end{aligned}$$

不能，增加显示位数不会减小离散化误差。到 x=0.5 需要两步，只走一步的答案对应错误终点。

</details>

</section>

<section class="lesson-check" markdown="1">

#### Retry 2 {#retry-backward}

**Retry (self-written):** For $y'=2x-y$, $y(0)=2$, estimate y(-0.2) with steps of magnitude 0.1. Show both old-point slopes. Is the step $2-0.1(-0.2-2)=2.22$ a correct first update? Explain.

<details markdown="1"><summary>提示</summary>

增量为负，但第一步斜率中的旧 x 仍为零。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$\begin{aligned}
h&=-0.1,\\
s_0&=2(0)-2=-2,\\
y_1&=2+(-0.1)(-2)=2.2,\\
s_1&=2(-0.1)-2.2=-2.4,\\
y_2&=2.2+(-0.1)(-2.4)=2.44.
\end{aligned}$$

题给更新在 2x 中用了新 x=−0.1，第一步斜率就错。负 h 并不要求斜率为负或 y 必须减小，变化方向由 hs 的乘积决定。

</details>

</section>

## 下一课后的混合回顾 {#later-review}

<section class="lesson-check" markdown="1">

#### 任务 1 {#review-1}

**Later review (self-written):** Choose suitable numerical procedures for these two requests and explain the different evidence they produce. (a) A curve has $y'=x+y$, y(0)=1. Use increments of 0.2 to estimate y(0.4). (b) For $z^2-2=0$ on [1,2], obtain an estimate with guaranteed error at most 1/8. State whether a negative increment from the final approximate point of (a) must recover its earlier values exactly.

<details markdown="1"><summary>提示</summary>

一个请求给出斜率与初值，另一个给出异号区间与误差目标。

</details>

<details markdown="1"><summary>解答与核对</summary>

(a) 旧点斜率依次为 1、1.4：

$$\begin{aligned}
y_1&=1+0.2(1)=1.2,\\
y_2&=1.2+0.2(0.2+1.2)=1.48.
\end{aligned}$$

这是未认证真误差的 Euler 估计。(b) 二分依次试 1.5（值 0.25）、1.25（值 −0.4375），保留 [1.25,1.5]。由连续性，其区间中点 1.375 保证误差至多 1/8。

从 (0.4,1.48) 反向走一步得到

$$\begin{aligned}y_{\text{back}}&=1.48-0.2(0.4+1.48)\\&=1.104.\end{aligned}$$

并非 1.2，因为向后那一步采用了不同旧点斜率。有符号反向推进不等于正向数值步骤的精确逆。选算法混淆时回到[起点区别](#start)，符号错时回看[递推](#model)。

</details>

</section>

## 下一步 {#next-step}

能向两个方向同步更新并解释精度边界后，继续[贝叶斯定理](/zh/alevel/as-further-mathematics/bayes/)。现在做[数值求根回顾](/zh/alevel/as-further-mathematics/numerical-roots/#later-review)，下一课后回来做[混合复查](#later-review)。若仍借助提示，先收起帮助完成对应重试。

## 来源与范围 {#sources}

本课范围按 9665 v5.2；以下已读原题及配套评分材料用于设计作答证据，本页练习不是原题复制或官方评分标准。

<details markdown="1"><summary>官方来源</summary>

- [OxfordAQA 9665 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf), FPP1.3.
- FM02 June 2024 Q1; QP p.3, MS p.4. [FM02 June 2024 QP](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-question-paper.pdf) · [Final MS](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-mark-scheme.pdf).

</details>

[上一课](/zh/alevel/as-further-mathematics/numerical-roots/) · [课程路线](/zh/alevel/as-further-mathematics/#learning-route) · [下一课](/zh/alevel/as-further-mathematics/bayes/)

{% include exam_topic_practice.html %}
