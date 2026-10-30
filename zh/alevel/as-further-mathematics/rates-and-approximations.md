---
title: "从弦到变化率及近似"
layout: subjects
mathjax: true
grade: as
subject: as-further-mathematics
lang: zh-CN
translation_of: /alevel/as-further-mathematics/rates-and-approximations/
permalink: /zh/alevel/as-further-mathematics/rates-and-approximations/
toc_headings: "#start, #model, #demonstration, #connected-rates, #small-changes, #practice, #retry, #later-review, #next-step, #sources"
study_page: true
reading_layout: true
---

[AS 高数课程](/zh/alevel/as-further-mathematics/)

导数描述极限斜率，不是有限跳变。先从两个点重建导数，再用局部信息连接变化率、估计微小变化。[独立任务](#practice)既要求计算，也要求说明计算成立的条件。

## 开始前 {#start}

先修为展开括号、直线斜率、普通 AS 微分及几何关系。展开有困难时回看 [AS 代数](/zh/alevel/as-mathematics/algebra/#l02)。学完应能由差商推多项式导数，带单位建立相关变化率，并区分近似变化与精确变化。

<section class="lesson-check" markdown="1">

### 先修检查 {#entry}

**Entry check (self-written):** Expand $(x+h)^2-x^2$. Give the gradient between $(1,1)$ and $(2,4)$. If a length decreases at 2 cm per second, write its signed rate.

<details markdown="1"><summary>提示</summary>

斜率是输出变化除以输入变化。

</details>

<details markdown="1"><summary>解答与核对</summary>

展开为 $2xh+h^2$；斜率 $(4-1)/(2-1)=3$；变化率 $-2\ \mathrm{cm\,s^{-1}}$。漏中间项时逐项相乘；符号写正时，重新区分减少量与速率大小。

</details>

</section>

## 从弦到切线 {#model}

对曲线 $y=f(x)$，固定一点 $(x,f(x))$，再取第二点 $(x+h,f(x+h))$。输入 $x$ 的水平间隔 $h$ 可以为正或负，但起初必须非零。弦斜率为

$$m_h=\frac{f(x+h)-f(x)}h,\qquad h\ne0.$$

若 $h$ 从左右趋于零时斜率都趋于同一个有限值，该值就是导数 $f\prime(x)$。先在两点仍不同的时候化简，再取极限；约去之前直接令 $h=0$ 得到的是无定义的商，不是切线斜率。

<section class="worked-example" markdown="1">

### 重建最简单的导数

**Demonstration (self-written):** Find the derivative of $f(x)=x^2$ from the secant gradient.

$$\begin{aligned}
&f(x+h)-f(x)=(x+h)^2-x^2\\
&=2xh+h^2,\\
&m_h=2x+h\quad(h\ne0),\\
&f\prime(x)=\lim_{h\to0}(2x+h)=2x.
\end{aligned}$$

在 $x=1$，取 $h=1$ 得弦斜率 3，切线斜率却为 2。有限间隔的弦并不是切线；让间隔变小，斜率才趋于 2。图中两条线正好表现这个区别。

![Parabola y=x² with a secant joining x=1 and x=2 and the tangent at x=1; points and different slopes are labelled.](/alevel/as-further-mathematics/diagrams/secant.svg){: width="560" height="460" }

</section>

## 先展开实际函数再相消 {#demonstration}

<section class="worked-example" markdown="1">

### 含多项的多项式

**Demonstration (self-written):** For $f(x)=2x^3-3x+1$, find the secant gradient at input $x$, then use it to find the tangent at input 2. Do not start with a derivative rule.

相减时必须减去完整的旧函数值。分别展开平移后的三次项与一次项，再合并：

$$\begin{aligned}
&f(x+h)-f(x)
=2[(x+h)^3-x^3]-3h\\
&=2(3x^2h+3xh^2+h^3)-3h,\\
&m_h=6x^2+6xh+2h^2-3,\\
&f\prime(x)=6x^2-3.
\end{aligned}$$

约去的各项都含非零 $h$，最后一行只能在取极限后得到。输入 2 时弦斜率为 $21+12h+2h^2$，趋于 21；曲线点为 $(2,11)$，故切线 $y-11=21(x-2)$。它既通过该曲线点又具有推得的斜率。可在极限论证之后用求导法则复核，但不能用法则替代题目要求的推导。

</section>

<section class="lesson-check" markdown="1">

### 补全新的差商 {#scaffold}

**Scaffold (self-written):** For $f(x)=x^3$, expand the difference quotient and then take its limit. Do not start with a derivative rule.

<details markdown="1"><summary>提示</summary>

先展开 $(x+h)^3$，再减去 $x^3$。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$\begin{aligned}
&\frac{(x+h)^3-x^3}{h}\\
&=3x^2+3xh+h^2,\\
&f\prime(x)\\
&=\lim_{h\to0}(3x^2+3xh+h^2)\\
&=3x^2.
\end{aligned}$$

首个等号要求 $h\ne0$，极限对每个实输入都成立。

</details>

</section>

## 相关变化率：先确定变量 {#connected-rates}

若 $y=f(x)$ 且输入随时间变化，小段时间先改变输入，再改变输出。函数可微时，链式法则连接瞬时变化率：

$$\frac{dy}{dt}=\frac{dy}{dx}\frac{dx}{dt}.$$

先选几何关系或题设函数再求导，不能先代入当前尺寸，把仍在变化的量当常数。明确每个变化率所对应的量，保留增减符号，并核对单位。

<section class="worked-example" markdown="1">

### 反求半径变化率

**Demonstration (self-written):** A spherical balloon is modelled by $V=4\pi r^3/3$. At $r=2$ cm its volume increases at $12\pi$ cm³ s⁻¹. Find the radius rate.

假设气球始终近似球形，半径可微。先求导，再代入该时刻的半径：

$$\begin{aligned}
&\frac{dV}{dr}=4\pi r^2,\\
&\frac{dV}{dt}=4\pi r^2\frac{dr}{dt},\\
&\frac{dr}{dt}=\frac{12\pi}{16\pi}\\
&=\frac34\ \mathrm{cm\,s^{-1}}.
\end{aligned}$$

体积/时间除以面积给出长度/时间；体积增加对应半径增加。核对的是变化率的含义，不只是算术。

</section>

## 微小变化使用旧点局部斜率 {#small-changes}

可微意味着：当 $\Delta x$ 很小时，精确变化等于线性部分加上一个余项，余项与 $\Delta x$ 的比趋于零。用线性部分作估计：

$$\begin{aligned}
&\Delta y\approx f\prime(x)\Delta x,\\
&f(x+\Delta x)\\
&\approx f(x)+f\prime(x)\Delta x.
\end{aligned}$$

第一式是变化量，第二式是新值；导数取初始输入处的值。不存在一个适用于所有函数、保证指定精度的统一变化百分比；能算精确变化时应比较，并注意定义域。

<section class="worked-example" markdown="1">

### 将估计与精确变化比较

**Demonstration (self-written):** For $y=20x^{-2}$, estimate the change from $x=5$ to $5.1$ and compare with the exact change.

$$\begin{aligned}
&f\prime(x)=-40x^{-3},\\
&f\prime(5)=-0.32,\quad\Delta x=0.1,\\
&\Delta y_{\rm lin}=-0.032,\\
&\Delta y_{\rm exact}=\frac{20}{5.1^2}-\frac{20}{5^2}\\
&=-0.031064975\ldots,\\
&\Delta y_{\rm lin}-\Delta y_{\rm exact}
=-0.000935025\ldots.
\end{aligned}$$

导数为负，故输入增加使输出减少。正输入增大时斜率逐渐没那么负，但估计一直使用旧斜率，所以把减少量的大小估得偏大。新值估计是 $0.768$，不是 $-0.032$。这里 $\Delta y_{\rm lin}$ 是精确算出的线性项名称，它对真实变化才是近似。

</section>

## 独立完成 {#practice}

先写关系与理由，再使用公式；独立尝试时保持提示关闭。

<section class="lesson-check" markdown="1">

### 第 1 题 {#practice-1}

**Independent task (self-written):** For $f(x)=x^3-2x^2+4$, derive its derivative from the difference quotient for a general input. Use that quotient to obtain the tangent at input 2. Explain why setting the increment to zero at the start is invalid.

<details markdown="1"><summary>提示</summary>

减去完整原多项式，按非零增量的幂整理。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$\begin{aligned}
&f(x+h)-f(x)
=3x^2h+3xh^2+h^3\\
&\quad-4xh-2h^2,\\
&\frac{f(x+h)-f(x)}h
=3x^2-4x\\
&\quad+(3x-2)h+h^2,\\
&f\prime(x)=3x^2-4x,\\
&f(2)=4,\\
&f\prime(2)=4,\\
&y-4=4(x-2).
\end{aligned}$$

差商仅在 $h\ne0$ 时成立，取极限才得到适用于全部实输入的导数。直接向原差商代零给出 $0/0$，不是斜率。若平方项处理错误，回看[展开](#demonstration)，再做重试 1。

</details>

</section>

<section class="lesson-check" markdown="1">

### 第 2 题 {#practice-2}

**Independent task (self-written):** A square of side s cm has area decreasing at 6 cm² s⁻¹ when $s=3$ cm. Find its perimeter rate. Separately estimate the change in $\sqrt{x}$ from $x=9$ to $9.06$ and compare with the exact change. Explain the sign and approximation.

<details markdown="1"><summary>提示</summary>

先连面积到边长、再连边长到周长；另一个变化使用初始点斜率。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$\begin{aligned}
&A=s^2,\\
&P=4s,\\
&-6=2(3)\frac{ds}{dt},\\
&\frac{ds}{dt}=-1\ \mathrm{cm\,s^{-1}},\\
&\frac{dP}{dt}=4\frac{ds}{dt}\\
&=-4\ \mathrm{cm\,s^{-1}}.\\[2pt]
&\Delta y_{\rm lin}=\frac{0.06}{2\sqrt9}\\
&=0.01,\\
&\Delta y_{\rm exact}=\sqrt{9.06}-3\\
&=0.009983388\ldots.
\end{aligned}$$

周长减少。平方根估计为正且略偏大，因为输入增加时斜率下降；新值估计为 $3.01$。若变量或单位混淆，回看[相关变化率](#connected-rates)，再做重试 2。

</details>

</section>

<section class="lesson-check" markdown="1">

### 第 3 题 {#practice-3}

**Independent task (self-written):** A cone remains similar to itself with $h=2r$ and $V=\pi r^2h/3$. At $r=3$ cm the radius decreases at $0.05$ cm s⁻¹. Find the height and volume rates and estimate the volume change over the next 2 s. State whether the data determine the exact change. If the radius rate remains constant over those 2 s, calculate the exact change and compare.

<details markdown="1"><summary>提示</summary>

先消去一个几何变量再求导；瞬时变化率不等于恒定变化率。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$\begin{aligned}
&h=2r,\\
&V=\frac23\pi r^3,\\
&\frac{dh}{dt}=2(-0.05)\\
&=-0.1\ \mathrm{cm\,s^{-1}},\\
&\frac{dV}{dt}=2\pi(3)^2(-0.05)\\
&=-0.9\pi\ \mathrm{cm^3\,s^{-1}},\\
&\Delta V_{\rm lin}=(-0.9\pi)(2)\\
&=-1.8\pi\ \mathrm{cm^3}.
\end{aligned}$$

只有瞬时数据不能确定精确的未来体积。在额外的恒定半径变化率假设下，新半径为 $2.9$ cm。此时精确的体积变化为：

$$\begin{aligned}
&\Delta V_{\rm exact}\\
&=\frac{2\pi}{3}(2.9^3-3^3)\\
&=-\frac{2611}{1500}\pi\ \mathrm{cm^3}\\
&\approx-1.740667\pi\ \mathrm{cm^3}.
\end{aligned}$$

估计把减少量算得更大。若把高度当常数，回看[建立关系](#connected-rates)。

</details>

</section>

## 诊断与重试 {#retry}

差商无定义时回看[非零间隔](#model)，做重试 1；漏链式因子或单位错误回看[相关变化率](#connected-rates)，做重试 2；把有限变化的估计写成精确相等，回看[局部近似](#small-changes)，再比较重试中的精确量与估计。

<section class="lesson-check" markdown="1">

### 重试 1 {#retry-1}

**Retry (self-written):** Use the difference quotient for $f(x)=3x^2-2x$. Estimate its change from $x=1$ to $0.99$.

<details markdown="1"><summary>提示</summary>

化简前保留 $h\ne0$；本题输入变化为负。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$\begin{aligned}
&\frac{f(x+h)-f(x)}h\\
&=6x+3h-2,\\
&f\prime(x)=6x-2,\\
&\Delta y_{\rm lin}=4(-0.01)=-0.04.
\end{aligned}$$

取极限才得到导数。精确变化 $-0.0397$，所以线性项是估计，不能与真实变化写成等号。

</details>

</section>

<section class="lesson-check" markdown="1">

### 重试 2 {#retry-2}

**Retry (self-written):** A circle has circumference increasing at $2\pi$ cm s⁻¹ when its radius is 4 cm. Find its area rate and estimate the area increase over 0.1 s. Would a constant circumference rate make this estimate exact?

<details markdown="1"><summary>提示</summary>

先连周长与半径，再连面积与半径。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$\begin{aligned}
&C=2\pi r,\\
&A=\pi r^2,\\
&\frac{dr}{dt}=1\ \mathrm{cm\,s^{-1}},\\
&\frac{dA}{dt}=8\pi\ \mathrm{cm^2\,s^{-1}},\\
&\Delta A_{\rm lin}=0.8\pi\ \mathrm{cm^2}.
\end{aligned}$$

周长变化率恒定时，半径变为 $4.1$ cm，精确变化为 $0.81\pi\ \mathrm{cm^2}$。半径匀速变化不会把二次的面积变化变成线性。

</details>

</section>

## 下一课后的回顾 {#later-review}

<section class="lesson-check" markdown="1">

### 混合回顾 {#review}

**Later review (self-written):** For $f(x)=x^2-3x$, obtain the tangent gradient at input 2 using two points separated by a nonzero increment. Estimate the change in the output when the input falls from 2 to 1.98, and compare with the exact change. If instead the input is increasing at $0.4$ units per second at input 2, find the instantaneous output rate.

<details markdown="1"><summary>提示</summary>

判断哪一问要极限、哪一问要有限变化估计、哪一问涉及时间。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$\begin{aligned}
&\frac{f(2+h)-f(2)}h\\
&=1+h\longrightarrow1,\\
&\Delta y_{\rm lin}=1(-0.02)=-0.02,\\
&\Delta y_{\rm exact}=-0.0196,\\
&\frac{dy}{dt}=1(0.4)=0.4.
\end{aligned}$$

最后一个变化率的单位是输出单位/秒；精确变化与线性项相差增量的平方项。若混淆变化率与变化量，先回看对应概念再重试。

</details>

</section>

## 下一步 {#next-step}

无帮助通过对应重试后，进入[反常积分](/zh/alevel/as-further-mathematics/improper-integrals/)。现在完成[级数回顾](/zh/alevel/as-further-mathematics/series/#later-review)，下一课后再回本页。

## 来源与范围 {#sources}

本页示范及练习均为**自拟题（self-written）**，无官方分值。FP1.7 包括简单多项式的弦切极限、相关变化率与微小变化；几何情境均说明模型假设。

<details markdown="1"><summary>官方来源与样卷身份</summary>

本课范围按 9665 v5.2；以下已读原题及配套评分材料用于设计作答证据，本页练习不是原题复制或官方评分标准。

FM01 样卷身份：QP 正文为 **Specimen 2018 Morning**，文件名含 2019/v3，页脚版本有差异；官网配套 MS 为样卷、版权 2017，并非某正式考季的实考 Final MS。

- [OxfordAQA 9665 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf), FP1.7.
- FM01 specimen Q5; QP pp.7–8, MS p.6. [FM01 specimen QP](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9665-FM01-international-as-further-mathematics-specimen-paper-2019-v3-1.pdf) · [Specimen MS](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9665-FM01-international-as-further-mathematics-mark-scheme-2017-v2-1.pdf).

</details>

[上一课](/zh/alevel/as-further-mathematics/series/) · [课程路线](/zh/alevel/as-further-mathematics/#learning-route) · [下一课](/zh/alevel/as-further-mathematics/improper-integrals/)

{% include exam_topic_practice.html %}
