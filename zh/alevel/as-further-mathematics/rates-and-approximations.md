---
title: "从弦到变化率及近似"
layout: subjects
mathjax: true
grade: as
subject: as-further-mathematics
lang: zh-CN
translation_of: /alevel/as-further-mathematics/rates-and-approximations/
permalink: /zh/alevel/as-further-mathematics/rates-and-approximations/
toc_headings: h2, h3
study_page: true
---

[AS 高数课程](/zh/alevel/as-further-mathematics/) · A6 · FP1.7

本页示范、补步骤、独立任务及再尝试均为**自拟题（self-written）**，没有官方分值。先写方法与理由，再分别展开提示和解答。题干保留英文，中文说明帮助建立推理。

## 弦怎样成为局部模型？ {#model}

**开始：**展开 $(x+h)^2$，再消去 $x^2$。**目标：**由斜率极限推多项式导数，连接带单位的变化率，并区分微小变化估计与精确变化。先修为 AS 微分与几何。构造差商时保留 $h\ne0$，之后才取极限。

$$\frac{(x+h)^2-x^2}{h}=2x+h\quad(h\ne0);\qquad f'(x)=\lim_{h\to0}(2x+h)=2x.$$

![Parabola y=x² with a secant joining x=1 and x=2 and the tangent at x=1; points and different slopes are labelled.](/alevel/as-further-mathematics/diagrams/secant.svg)

切线给出局部线性近似，不代表整条曲线。若 y 随 x 变、x 又随时间变，链式法则连接两种变化率；符号与单位必须同时成立。

$$\frac{dy}{dt}=\frac{dy}{dx}\frac{dx}{dt};\qquad \Delta y\approx f'(x)\Delta x.$$

## 示范：先建关系，再代入 {#demonstration}

**Demonstration (self-written):** A spherical balloon is modelled by $V=4\pi r^3/3$. At $r=2$ cm its volume increases at $12\pi$ cm³ s⁻¹. Find the radius rate.

$$\frac{dV}{dt}=4\pi r^2\frac{dr}{dt}\Rightarrow \frac{dr}{dt}=\frac{12\pi}{16\pi}=\frac34\ \mathrm{cm\,s^{-1}}.$$

球形及半径可微是模型假设。体积变化率除以面积给出长度/时间单位；体积增加时半径变化率应为正。对 $y=20x^{-2}$ 从 $x=5$ 到 $5.1$：

$$f'(5)=-0.32,\quad\Delta y\approx-0.032;\qquad \Delta y_{\rm exact}=\frac{20}{5.1^2}-\frac{20}{5^2}=-0.031064975\ldots$$

估计在整个小区间沿用旧点切线斜率；与精确变化之差约为 $-0.000935025$。写成精确等号会掩盖近似。

## 补步骤与独立选法 {#practice}

**Scaffold (self-written):** For $f(x)=x^3$, expand the difference quotient and then take its limit. Do not start with a derivative rule.

<details markdown="1"><summary>补步骤核对</summary>

$$\frac{(x+h)^3-x^3}{h}=3x^2+3xh+h^2\longrightarrow3x^2.$$

</details>

**Independent task (self-written):** A square of side s cm has area decreasing at 6 cm² s⁻¹ when $s=3$ cm. Find its perimeter rate. Separately estimate the change in $\sqrt{x}$ from $x=9$ to $9.06$ and compare with the exact change. Explain the sign and approximation.

<details markdown="1"><summary>提示</summary>

先连接面积与边长，再连接边长与周长。平方根用初始点导数，并另算精确差。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$A=s^2,\quad \dot A=2s\dot s=-6\Rightarrow\dot s=-1\ \mathrm{cm\,s^{-1}};\qquad P=4s\Rightarrow\dot P=-4\ \mathrm{cm\,s^{-1}}.$$

$$\Delta\sqrt{x}\approx\frac1{2\sqrt9}(0.06)=0.01;\qquad \sqrt{9.06}-3=0.009983388\ldots$$

周长在减少。平方根估计为正且略大，因为 x 增加时切线斜率减小。

</details>

## 诊断与再尝试 {#retry}

没写变量或单位的变化率容易混淆面积与长度。过早令 $h=0$ 得到零分母，不是导数。

**Retry (self-written):** Use the difference quotient for $f(x)=3x^2-2x$. Estimate its change from $x=1$ to $0.99$.

<details markdown="1"><summary>再尝试核对</summary>

$$\frac{f(x+h)-f(x)}h=6x+3h-2\longrightarrow6x-2;\qquad\Delta y\approx4(-0.01)=-0.04.$$

</details>

## 来源与范围 {#sources}

本课范围按 9665 v5.2；以下已读原题及配套评分材料用于设计作答证据，本页练习不是原题复制或官方评分标准。

FM01 样卷身份：QP 正文为 **Specimen 2018 Morning**，文件名含 2019/v3，页脚版本有差异；官网配套 MS 为样卷、版权 2017，并非某正式考季的实考 Final MS。

- [OxfordAQA 9665 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf), FP1.7.
- FM01 specimen Q5; QP pp.7–8, MS p.6. [FM01 specimen QP](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9665-FM01-international-as-further-mathematics-specimen-paper-2019-v3-1.pdf) · [Specimen MS](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9665-FM01-international-as-further-mathematics-mark-scheme-2017-v2-1.pdf).

[上一课](/zh/alevel/as-further-mathematics/series/) · [课程路线](/zh/alevel/as-further-mathematics/#learning-route) · [下一课](/zh/alevel/as-further-mathematics/improper-integrals/)
