---
title: "可追溯的数值求根"
layout: subjects
mathjax: true
grade: as
subject: as-further-mathematics
lang: zh-CN
translation_of: /alevel/as-further-mathematics/numerical-roots/
permalink: /zh/alevel/as-further-mathematics/numerical-roots/
toc_headings: "#start, #model, #demonstration, #chord, #tangent, #practice, #retry, #later-review, #next-step, #sources"
study_page: true
reading_layout: true
---

[AS 高数课程](/zh/alevel/as-further-mathematics/)

小数近似值和保证含根的区间回答的是不同问题。从题给区间开始记录每次判断，再比较中点、弦和切线的更新。学完后，你应能选法，并准确说明结果能保证什么。

## 开始之前 {#start}

先修是函数代入、直线方程与多项式微分；切线斜率可回补[变化率与近似](/zh/alevel/as-further-mathematics/rates-and-approximations/)。本页均为**自拟题**，无官方分值。先写更新过程再看帮助；求解器输出不能替代指定算法。

## 变号究竟说明什么 {#model}

函数在整个闭区间连续且两端函数值异号，才保证内部经过零。若端点函数值恰为零，已经找到了根。变号本身不证明唯一性，同号也不排除根。连续示例先算原端点：

$$\begin{aligned}f(x)&=x^3-x-1,\\f(1)&=-1,\qquad f(2)=5.\end{aligned}$$

多项式处处连续。本例导数在整个 [1,2] 内为正，所以严格递增，区间内恰有一根；这是另加的唯一性论证：

$$f'(x)=3x^2-1\ge2>0\quad(1\le x\le2).$$

## 逐轮建立保留区间 {#demonstration}

<section class="worked-example" markdown="1">

### 从题给两端开始二分

每步试 c=(a+b)/2。若 f(c)=0 则停止；否则保留两端异号的半区间。下一中点必须来自刚保留的区间，不能换成来源不明的小数。

| Step | Tested c | f(c) | Retained bracket |
| --- | --- | --- | --- |
| 1 | 1.5 | 0.875 | [1,1.5] |
| 2 | 1.25 | −0.296875 | [1.25,1.5] |
| 3 | 1.375 | 0.224609375 | [1.25,1.375] |
| 4 | 1.3125 | −0.051513671875 | [1.3125,1.375] |
| 5 | 1.34375 | 0.082611083984375 | [1.3125,1.34375] |

第一次中点函数值为正，与原右端同号，因此把右端换为 1.5；第二次为负，把左端换为 1.25。继续按这个判断走完表格，保留区间两端一直异号。

五次二分后区间中点是 1.328125，不是最后试过的 1.34375。即使暂未在新区间中点算函数值，也可把它作为近似，因为含根区间已经给出误差界。

</section>

### 把误差保证推出来 {#error-bound}

每次二分把宽度除以二。从宽度 W 开始，二分 n 次后根仍在宽 W/2ⁿ 的区间内，因此它离该区间中点的距离不超过半宽：

$$\begin{aligned}
b_n-a_n&=\frac{W}{2^n},\\
\hat x_n&=\frac{a_n+b_n}{2},\\
\lvert\hat x_n-x_*\rvert&\le\frac{W}{2^{n+1}}.
\end{aligned}$$

本例 W=1，五次后中点误差不超过 0.015625。若要求误差至多 0.001，八次给出的界 1/512≈0.001953125 太大，九次的 1/1024≈0.0009765625 才满足。此界针对保留区间中点；改报端点或把中点再舍入，都需计入额外距离。函数符号与中间精度也须可靠。

## 用两端的弦近似曲线 {#chord}

通过两端函数点的弦具有可算斜率。令直线高度为零，就能找到它与横轴的交点：

$$\begin{aligned}
s&=\frac{f(b)-f(a)}{b-a},\\
0&=f(a)+s(c-a),\\
c&=a-\frac{f(a)(b-a)}{f(b)-f(a)}.
\end{aligned}$$

这就是线性插值（linear interpolation）：两端不同，且函数值差不为零。端点异号时，弦的横轴交点在两端之间；要先算 f(c)，再决定保留哪侧，它不一定把宽度平分。

<section class="worked-example" markdown="1">

### 插值一步后怎样继续

从相同的原区间 [1,2] 开始，

$$c=1-\frac{(-1)(2-1)}{5-(-1)}=\frac76.$$

不要猜它位于根的哪侧，实际算：

$$f(7/6)=-125/216<0.$$

新区间为 [7/6,2]。第二次用更新后的两端作弦，得到

$$c_2=\frac{302}{241}\approx1.253112033.$$

它既不是中点，也不是精确根。第一次负值端点虽向右移，但远少于半区间，不能套二分误差界。

</section>

## 有导数时用切线更新 {#tangent}

在当前近似 xₙ 处，切线使用同一点的导数。令切线高度为零；与弦不同，它需要一个点及该点导数：

$$\begin{aligned}
0&=f(x_n)+f'(x_n)(x_{n+1}-x_n),\\
x_{n+1}&=x_n-\frac{f(x_n)}{f'(x_n)}.
\end{aligned}$$

<section class="worked-example" markdown="1">

### 连续两次 Newton 更新

x₀=1.5 时，高度为 0.875，斜率为 5.75：

$$x_1=1.5-\frac{0.875}{5.75}=\frac{31}{23}.$$

下一步的函数与导数都用 x₁，不能继续用 x₀：

$$\begin{aligned}
x_1&\approx1.34782608695652,\\
x_2&=x_1-\frac{x_1^3-x_1-1}{3x_1^2-1}\\
&=\frac{71749}{54142}\\
&\approx1.32520039895091.
\end{aligned}$$

每步导数都须非零。Newton 可能跳出原区间，在水平切线处失败，也可能循环。相邻近似接近本身不给真误差界；显示位数和这两步计算都不能继承二分保证。

</section>

![For f(x)=x³−x−1, the endpoint chord crosses at 7/6 and the tangent at x=1.5 crosses near 1.348; axes and bracket endpoints are labelled.](/alevel/as-further-mathematics/diagrams/numerical.svg){: width="560" height="490" }

图中的两个横轴交点属于两条不同直线，不是曲线上的函数点。二分则是在当前两端中间选择一个竖直试值位置。

<section class="lesson-check" markdown="1">

#### 任务 1 {#scaffold}

**Scaffold (self-written):** For $x^2-2$ on $[1,2]$, test the midpoint and retain a bracket. Calculate one Newton update from $x_0=1.5$.

<details markdown="1"><summary>提示</summary>

保留异号半区间；Newton 修正中的函数与导数都在旧点求。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$f(1.5)=0.25,\qquad [1,1.5].$$

$$x_1=1.5-\frac{0.25}{3}=\frac{17}{12}.$$

区间由连续性与异号保证，切线近似的误差需另证。若混淆两种输出，比较[区间宽度](#error-bound)与[切线构造](#tangent)。

</details>

</section>

## 独立完成 {#practice}

<section class="lesson-check" markdown="1">

#### 任务 1 {#practice-1}

**Independent task (self-written):** Assess “$1/x$ changes sign on $[-1,1]$, so it has a root there.” For $x^2-3$ on $[1,2]$, find an estimate with guaranteed absolute error no greater than $1/16$, showing every retained interval. Also find the chord estimate from the original endpoints.

<details markdown="1"><summary>提示</summary>

先检查连续性，再选能由宽度保证误差的方法，写全端点更新。

</details>

<details markdown="1"><summary>解答与核对</summary>

第一项无效：1/x 在零处无定义，也没有零点。第二个函数在 [1,2] 连续且导数为正，因此根存在且唯一。

| Tested c | f(c) | Retained bracket |
| --- | --- | --- |
| 1.5 | −0.75 | [1.5,2] |
| 1.75 | 0.0625 | [1.5,1.75] |
| 1.625 | −0.359375 | [1.625,1.75] |

$$\begin{aligned}\hat x&=1.6875,\\\lvert\hat x-x_*\rvert&\le\frac1{16}.\end{aligned}$$

原两端作弦得到

$$c_{\text{chord}}=1-\frac{(-2)(1)}{1-(-2)}=\frac53.$$

弦交点没有上述中点保证。若直接跳到了最后区间，用[重试一](#retry-bracket)重建前面的符号链。

</details>

</section>

<section class="lesson-check" markdown="1">

#### 任务 2 {#practice-2}

**Independent task (self-written):** For $g(x)=x^3-2$ on [1,2], calculate a chord estimate from the endpoints and two Newton updates starting at 1. Sketch the curve with the chord and first tangent, labelling their axis crossings. Retain a valid bracket after the chord step and explain whether either procedure has halved it. Would Newton be defined at a starting value of zero?

<details markdown="1"><summary>提示</summary>

按每条直线真正使用的点或斜率建立，再算弦交点的函数符号。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$\begin{aligned}c&=1-\frac{(-1)(1)}{6-(-1)}=\frac87,\\g(c)&=-\frac{174}{343}<0.\end{aligned}$$

插值后区间为 [8/7,2]，宽 6/7，并未减半。

$$\begin{aligned}x_1&=1-\frac{-1}{3}=\frac43,\\x_2&=\frac43-\frac{10/27}{16/3}\\&=\frac{91}{72}.\end{aligned}$$

草图要画出通过 (1,−1)、(2,6) 的弦，横轴截距 8/7；第一条切线通过 (1,−1)，斜率 3，截距 4/3。单独 Newton 更新并未维护异号区间。起点为零时导数为零，更新无定义。直线构造错或混用弦的分母与导数，回到[弦](#chord)或[切线](#tangent)，再做[重试三](#retry-chord)；漏查零导数则做[重试二](#retry-tangent)。

</details>

</section>

<section class="lesson-check" markdown="1">

#### 任务 3 {#practice-3}

**Independent task (self-written):** For $p(x)=x^2-2$ on [1,2], produce an estimate guaranteed within 1/8 of a root. Show your chosen method and complete update chain. Does $q(x)=x^2-1$ have no roots on [-2,2] because its endpoint values have the same sign?

<details markdown="1"><summary>提示</summary>

根据题目要的保证选方法，不按哪条公式最短来选。

</details>

<details markdown="1"><summary>解答与核对</summary>

第一次中点 1.5 的值为 1/4，保留 [1,1.5]；第二次中点 1.25 的值为 −7/16，保留 [1.25,1.5]。新区间中点 1.375 由连续性与半宽保证误差至多 1/8。

第二项为假：q 有根 −1 与 1，虽然两端函数值都为 3。连续时异号是充分条件，不是必要条件。若把充分条件当必要条件，回看[存在性判断](#model)。

</details>

</section>

## 诊断与再尝试 {#retry}

漏符号，回到原两端重建；误差界错，区分最后试值与新区间中点；Newton 分母为零，先查导数，不是多保留几位。

<section class="lesson-check" markdown="1">

#### Retry 1 {#retry-bracket}

**Retry (self-written):** For $x^2-5$ on [2,3], perform three halvings and report the retained interval, its midpoint and a guaranteed midpoint error. Show every sign and endpoint update.

<details markdown="1"><summary>提示</summary>

从真实端点值开始，每次只平分刚保留的区间。

</details>

<details markdown="1"><summary>解答与核对</summary>

原端点值为 −1 与 4。

| Tested c | f(c) | Retained bracket |
| --- | --- | --- |
| 2.5 | 1.25 | [2,2.5] |
| 2.25 | 0.0625 | [2,2.25] |
| 2.125 | −0.484375 | [2.125,2.25] |

新区间中点为 2.1875，保证误差至多 0.0625。最后试过的值是左端，不能把它代入中点误差界。

</details>

</section>

<section class="lesson-check" markdown="1">

#### Retry 2 {#retry-tangent}

**Retry (self-written):** Is Newton defined for $f(x)=x^3-1$ at $x_0=0$? Give a valid initial bracket instead.

<details markdown="1"><summary>提示</summary>

先查导数，再算候选区间的端点值。

</details>

<details markdown="1"><summary>解答与核对</summary>

不能：$f'(0)=0$。多项式连续，且 f(0)=−1、f(2)=7，因此 [0,2] 合法，其中点恰为根 1。其他合法区间也可以，但须说明连续性并核对端点符号。

</details>

</section>

<section class="lesson-check" markdown="1">

#### Retry 3 {#retry-chord}

**Retry (self-written):** For $x^2-2$ on [1,2], find the chord axis crossing, use its sign to update the bracket, and compare it with one tangent update from x=2. Draw both lines on a curve sketch.

<details markdown="1"><summary>提示</summary>

弦用两个端点高度，切线只用当前点及该点导数。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$c=\frac43,\qquad f(c)=-\frac29.$$

保留区间为 [4/3,2]，宽 2/3，并非 1/2。在 (2,2) 的切线斜率为 4，横轴交点

$$x_1=2-\frac24=\frac32.$$

图上标出 4/3 和 3/2。若弦公式用了导数，就是混了两种构造，回看[弦方程](#chord)。

</details>

</section>

## 学过 Euler 后回顾 {#later-review}

<section class="lesson-check" markdown="1">

#### 任务 1 {#review-1}

**Later review (self-written):** For $r(x)=x^2-6$ on [2,3], find an estimate with guaranteed error at most 1/16, recording every retained interval. Then calculate one tangent update from x=3 and explain why its number of displayed decimals does not supply the same guarantee.

<details markdown="1"><summary>提示</summary>

先选择获得保证的方法；切线的独立计算另列，不混用证据。

</details>

<details markdown="1"><summary>解答与核对</summary>

| Tested c | r(c) | Retained bracket |
| --- | --- | --- |
| 2.5 | 0.25 | [2,2.5] |
| 2.25 | −0.9375 | [2.25,2.5] |
| 2.375 | −0.359375 | [2.375,2.5] |

连续性与异号保证新区间中点 2.4375 的误差至多 1/16。

$$x_1=3-\frac36=2.5.$$

只有切线输出，并没有给出经证实的含根区间半宽。它恰与第一次中点相同，但巧合不能转移后来二分得到的保证。漏保证时回看[宽度论证](#error-bound)。

</details>

</section>

## 下一步 {#next-step}

更新链与误差保证一致后，进入 [Euler 方法](/zh/alevel/as-further-mathematics/euler-method/)。现在做[线性化回顾](/zh/alevel/as-further-mathematics/linearisation/#later-review)，Euler 后回来做[混合复查](#later-review)。

## 来源与范围 {#sources}

本课范围按 9665 v5.2；以下已读原题及配套评分材料用于设计作答证据，本页练习不是原题复制或官方评分标准。

<details markdown="1"><summary>官方来源</summary>

- [OxfordAQA 9665 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf), FPP1.3.
- FM02 June 2024 Q3; QP p.6, MS p.6. [FM02 June 2024 QP](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-question-paper.pdf) · [Final MS](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-mark-scheme.pdf).

</details>

[上一课](/zh/alevel/as-further-mathematics/linearisation/) · [课程路线](/zh/alevel/as-further-mathematics/#learning-route) · [下一课](/zh/alevel/as-further-mathematics/euler-method/)

{% include exam_topic_practice.html %}
