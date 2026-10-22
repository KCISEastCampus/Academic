---
title: "线性化、作图与拟合"
layout: subjects
mathjax: true
grade: as
subject: as-further-mathematics
lang: zh-CN
translation_of: /alevel/as-further-mathematics/linearisation/
permalink: /zh/alevel/as-further-mathematics/linearisation/
toc_headings: h2, h3
study_page: true
---

[AS 高数课程](/zh/alevel/as-further-mathematics/) · B3 · FPP1.2

本页示范、补步骤、独立任务及再尝试均为**自拟题（self-written）**，没有官方分值。先写方法与理由，再分别展开提示和解答。题干保留英文，中文说明帮助建立推理。

## 怎样选择直线坐标轴？ {#model}

**开始：**辨认 $Y=mX+c$ 的斜率与截距。**目标：**变换变量、画全部数据点、拟合直线并还原参数。先修为直线、对数。坐标轴标的是变换后的量，不应仍只写原变量名。对数真数必须为正；有量纲读数取对数时，指在规定单位下的数值。

$$y=kx^n\Rightarrow Y=\log_{10}y=nX+\log_{10}k,\quad X=\log_{10}x\quad(x,y,k>0).$$

$$y=ka^x\Rightarrow\log_{10}y=x\log_{10}a+\log_{10}k\quad(y,k,a>0).$$

$$\frac1y=a+\frac bx\Rightarrow Y=a+bX,\quad X=1/x,\ Y=1/y\quad(xy\ne0);\qquad y^2=ax^3+b\Rightarrow Y=y^2,\ X=x^3.$$

根据关系式选变换量。幂律斜率直接为 n，指数律斜率却是 a 的对数。原参数对应对数截距时，须用指数还原。

## 示范：构造数据的作图与拟合 {#demonstration}

这些无量纲数据为**构造数据**，刻意精确符合幂律，不是实测，也不构成实验验证。先画全部变换后数据点，再据整体趋势画直线。

| x | 1 | 2 | 3 | 4 | 5 |
| --- | --- | --- | --- | --- | --- |
| y | 2.5 | 10 | 22.5 | 40 | 62.5 |
| $X=\log_{10}x$ | 0 | 0.30103 | 0.47712 | 0.60206 | 0.69897 |
| $Y=\log_{10}y$ | 0.39794 | 1 | 1.35218 | 1.60206 | 1.79588 |

![All five constructed log10 x, log10 y points plotted on labelled axes with the fitted line Y=2X+0.39794 and grid scales.](/alevel/as-further-mathematics/diagrams/linearisation.svg)

用跨度较大的斜率三角形读得斜率约 2、截距约 $0.39794$，故 $n=2$、$k=10^{0.39794}\approx2.5$，代回所有原数据得到 $y=2.5x^2$。表中的微小偏差来自对数舍入。若数据有散布，应画平衡趋势线而非逐点连接；参数是估计，不证明因果定律。

## 补步骤与独立选法 {#practice}

**Scaffold (self-written):** A plot of $\log_{10}y$ against x is $Y=0.3x+0.7$. Express y in the form $ka^x$ and state the necessary positivity conditions.

<details markdown="1"><summary>补步骤核对</summary>

$$y=10^{0.7}(10^{0.3})^x;\qquad k=10^{0.7},\ a=10^{0.3},\ y>0.$$

</details>

**Independent task (self-written):** The following dimensionless data are constructed: $(x,y)=(1,1/5),(2,2/7),(3,1/3),(6,2/5)$. Test a model $1/y=a+b/x$ by choosing axes and plotting all four points; read off a and b, then predict y at $x=4$. State a value of x at which the model is undefined and explain why a numerical fit does not prove a physical law.

<details markdown="1"><summary>提示</summary>

先列变换表并标轴；读直线参数后还原 y。分别查原式取倒数的限制与还原式零分母。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$X=1/x:\ 1,1/2,1/3,1/6;\qquad Y=1/y:\ 5,7/2,3,5/2.$$

$$Y=2+3X\Rightarrow a=2,\ b=3;\quad y=\frac{x}{2x+3}\Rightarrow y(4)=\frac4{11}.$$

倒数模型要求 $x\ne0,y\ne0$；还原式还要排除 $x=-3/2$。不能悄悄把原模型延伸到 $x=0$。符合构造数据只说明内部一致，不是自然界证据。

</details>

## 诊断与再尝试 {#retry}

若直接把截距当 k，应还原对数；若交换坐标轴，须重新推斜率含义。

**Retry (self-written):** A straight plot of $y^2$ against $x^3$ has gradient 4 and intercept 9. Give the original relation. Is positive y the only possible branch?

<details markdown="1"><summary>再尝试核对</summary>

$$y^2=4x^3+9;\qquad y=\pm\sqrt{4x^3+9}\quad(4x^3+9\ge0).$$

只取正支需要额外情境条件。

</details>

## 来源与范围 {#sources}

本课范围按 9665 v5.2；以下已读原题及配套评分材料用于设计作答证据，本页练习不是原题复制或官方评分标准。

- [OxfordAQA 9665 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf), FPP1.2.
- FM02 June 2024 Q4; QP pp.7–9, MS pp.7–9. [FM02 June 2024 QP](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-question-paper.pdf) · [Final MS](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-mark-scheme.pdf).

[上一课](/zh/alevel/as-further-mathematics/transformations/) · [课程路线](/zh/alevel/as-further-mathematics/#learning-route) · [下一课](/zh/alevel/as-further-mathematics/numerical-roots/)
