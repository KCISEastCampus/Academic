---
title: "可追溯的数值求根"
layout: subjects
mathjax: true
grade: as
subject: as-further-mathematics
lang: zh-CN
translation_of: /alevel/as-further-mathematics/numerical-roots/
permalink: /zh/alevel/as-further-mathematics/numerical-roots/
toc_headings: h2, h3
study_page: true
---

[AS 高数课程](/zh/alevel/as-further-mathematics/) · B4 · FPP1.3

本页示范、补步骤、独立任务及再尝试均为**自拟题（self-written）**，没有官方分值。先写方法与理由，再分别展开提示和解答。题干保留英文，中文说明帮助建立推理。

## 近似值能保证什么？ {#model}

**开始：**算 $f(x)=x^3-x-1$ 的 $f(1),f(2)$，得到 $-1,5$。**目标：**解释并完整执行区间、弦与切线更新。先修为函数代入、直线、多项式导数。端点变号还须整个区间连续才能保证根；唯一性需另证，本例由 $f'(x)=3x^2-1>0$ 在 $[1,2]$ 上成立而保证。

## 示范：三种不同更新 {#demonstration}

**二分法（bisection）：**试当前中点，保留端点异号的一半；若中点恰好为根则停止。

| Step | $a$ | $b$ | $c$ | $f(c)$ | Retained bracket |
| --- | --- | --- | --- | --- | --- |
| 1 | 1 | 2 | 1.5 | 0.875 | [1,1.5] |
| 2 | 1 | 1.5 | 1.25 | −0.296875 | [1.25,1.5] |
| 3 | 1.25 | 1.5 | 1.375 | 0.224609375 | [1.25,1.375] |
| 4 | 1.25 | 1.375 | 1.3125 | −0.051513671875 | [1.3125,1.375] |
| 5 | 1.3125 | 1.375 | 1.34375 | 0.082611083984375 | [1.3125,1.34375] |

保留后区间中点为 $1.328125$，绝对误差不超过 $0.015625$；它不是最后试过的中点。二分 $n$ 次后宽度为 $1/2^n$，中点误差不超过 $1/2^{n+1}$。至少九次二分才能保证误差不超过 $0.001$。

**线性插值（linear interpolation）：**两端点的弦与横轴相交于 $c$。**Newton 法：**当前点切线的横轴截距给下一近似；导数须非零。

$$c=a-\frac{f(a)(b-a)}{f(b)-f(a)};\qquad x_{n+1}=x_n-\frac{f(x_n)}{f'(x_n)}.$$

$$c=1-\frac{(-1)(2-1)}{5-(-1)}=\frac76;\qquad x_0=1.5,\quad x_1=1.5-\frac{0.875}{5.75}=1.347826086\ldots$$

![For f(x)=x³−x−1, the endpoint chord crosses at 7/6 and the tangent at x=1.5 crosses near 1.348; axes and bracket endpoints are labelled.](/alevel/as-further-mathematics/diagrams/numerical.svg)

插值不一定平分区间；Newton 法可能跳出区间或在零导数处失败。两者都不能直接沿用二分误差界。相邻值接近、显示小数位数多都不能保证根误差；保留中间精度并另证误差界。

## 补步骤与独立选法 {#practice}

**Scaffold (self-written):** For $x^2-2$ on $[1,2]$, test the midpoint and retain a bracket. Calculate one Newton update from $x_0=1.5$.

<details markdown="1"><summary>补步骤核对</summary>

$$f(1.5)=0.25,\quad [1,1.5];\qquad x_1=1.5-\frac{0.25}{3}=\frac{17}{12}.$$

</details>

**Independent task (self-written):** Assess “$1/x$ changes sign on $[-1,1]$, so it has a root there.” For $x^2-3$ on $[1,2]$, find an estimate with guaranteed absolute error no greater than $1/16$, showing every retained interval. Also find the chord estimate from the original endpoints.

<details markdown="1"><summary>提示</summary>

先查连续性。选择能以区间宽度保证误差的方法；数更新次数而非小数位数。

</details>

<details markdown="1"><summary>解答与核对</summary>

第一项无效：$1/x$ 在 0 无定义且没有零点。第二个函数在区间连续且严格递增。

$$[1,2]\xrightarrow{c=1.5,\ f=-0.75}[1.5,2]\xrightarrow{c=1.75,\ f=0.0625}[1.5,1.75]\xrightarrow{c=1.625,\ f=-0.359375}[1.625,1.75].$$

$$\hat x=1.6875,\quad \lvert\hat x-x_*\rvert\le\frac1{16};\qquad c_{\text{chord}}=1-\frac{(-2)(1)}{1-(-2)}=\frac53.$$

弦截距估计不附带上述中点保证。

</details>

## 诊断与再尝试 {#retry}

缺端点更新就无法追踪结果；若直接用了求解器，须由符号重建区间。Newton 法失败时先查分母，而非仅增加位数。

**Retry (self-written):** Is Newton defined for $f(x)=x^3-1$ at $x_0=0$? Give a valid initial bracket instead.

<details markdown="1"><summary>再尝试核对</summary>

不能，因 $f'(0)=0$。连续且端点异号给出区间 $[0,2]$；中点恰为根 1。

</details>

## 来源与范围 {#sources}

本课范围按 9665 v5.2；以下已读原题及配套评分材料用于设计作答证据，本页练习不是原题复制或官方评分标准。

- [OxfordAQA 9665 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf), FPP1.3.
- FM02 June 2024 Q3; QP p.6, MS p.6. [FM02 June 2024 QP](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-question-paper.pdf) · [Final MS](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-mark-scheme.pdf).

[上一课](/zh/alevel/as-further-mathematics/linearisation/) · [课程路线](/zh/alevel/as-further-mathematics/#learning-route) · [下一课](/zh/alevel/as-further-mathematics/euler-method/)
