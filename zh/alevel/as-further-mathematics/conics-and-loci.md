---
title: "圆锥曲线、轨迹与相切"
layout: subjects
mathjax: true
grade: as
subject: as-further-mathematics
lang: zh-CN
translation_of: /alevel/as-further-mathematics/conics-and-loci/
permalink: /zh/alevel/as-further-mathematics/conics-and-loci/
toc_headings: h2, h3
study_page: true
---

[AS 高数课程](/zh/alevel/as-further-mathematics/) · A2 · FP1.1 FP1.2

本页示范、补步骤、独立任务及再尝试均为**自拟题（self-written）**，没有官方分值。先写方法与理由，再分别展开提示和解答。题干保留英文，中文说明帮助建立推理。

## 重根为什么表示相切？ {#model}

**开始：**分别写出 $(x,y)$ 到 $(0,2)$ 与 $y=-2$ 的距离。**目标：**由距离建轨迹，画四类圆锥曲线，并把交点与二次根联系起来。先修为距离公式、配方、判别式。两边非负时平方才保持等价。

$$\sqrt{x^2+(y-2)^2}=\lvert y+2\rvert\iff x^2=8y.$$

轨迹（locus）是满足条件的完整点集，不只是草图上的几个点。到竖线 $x=a$ 的距离为 $\lvert x-a\rvert$，到横线 $y=b$ 的距离为 $\lvert y-b\rvert$。

以下取 $a,b,c>0$。方程决定轴、顶点与渐近线；背焦点公式不能代替作图。

$$y^2=4ax;\qquad \frac{x^2}{a^2}+\frac{y^2}{b^2}=1;\qquad
\frac{x^2}{a^2}-\frac{y^2}{b^2}=1;\qquad xy=c^2.$$

抛物线顶点为原点、向右开口；椭圆轴截点为 $(\pm a,0),(0,\pm b)$；双曲线过 $(\pm a,0)$，渐近于 $y=\pm(b/a)x$；直角双曲线位于第一、三象限，以坐标轴为渐近线。

![Four labelled conic sketches: y²=4x, x²/9+y²/4=1, x²/4−y²=1 with asymptotes, and xy=1 with axis asymptotes.](/alevel/as-further-mathematics/diagrams/conics.svg)

## 示范：方程、变换与切线 {#demonstration}

平移 $(h,k)$ 时在原式代入 $x-h,y-k$；沿 x 轴伸长 $s>0$ 倍时代入 $x/s$；关于 $y=x$ 反射时交换 x、y。下面各变换**分别**作用于 $y^2=4x$：

$$\text{translate }(2,-1):\ (y+1)^2=4(x-2);\quad
\text{x-stretch }2:\ y^2=2x;\quad \text{reflect}:\ x^2=4y.$$

求从 $(-1,0)$ 引出的切线时，非竖直候选线为 $y=m(x+1)$；代入 $y^2=4x$。

$$m^2x^2+(2m^2-4)x+m^2=0;\qquad D=16(1-m^2).$$

重根要求 $D=0$，故 $m=\pm1$。切线为 $y=\pm(x+1)$，切点为 $(1,\pm2)$。$m=0$ 时降次，得到经过顶点的横轴而非切线；过外点的竖线 $x=-1$ 没有交点。$m\ne0$ 时，$D>0,=0,<0$ 分别表示两交点、一个重交点、无实交点。

![Parabola tangents from (−1,0) touch (1,±2); a separate panel shows translation by (2,−1), with original and image vertices labelled.](/alevel/as-further-mathematics/diagrams/conic-tangents.svg)

## 补步骤与独立选法 {#practice}

**Scaffold (self-written):** Translate $xy=1$ by $(3,-2)$. Name its asymptotes before expanding.

<details markdown="1"><summary>补步骤核对</summary>

$$(x-3)(y+2)=1;\qquad x=3,\quad y=-2.$$

</details>

**Independent task (self-written):** Find the locus equidistant from $(2,0)$ and $x=-2$. Reflect it in $y=x$. Find all lines through $(-4,0)$ tangent to the original locus. Explain why your list is complete.

<details markdown="1"><summary>提示</summary>

先写距离再平方。设过给定点的一般直线，用重根条件，并另查零斜率与竖线。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$\sqrt{(x-2)^2+y^2}=\lvert x+2\rvert\iff y^2=8x;\qquad \text{reflection}:\ x^2=8y.$$

$$y=m(x+4)\Rightarrow m^2x^2+(8m^2-8)x+16m^2=0,\quad D=64(1-2m^2).$$

$$m=\pm\frac1{\sqrt2},\qquad y=\pm\frac{x+4}{\sqrt2};\qquad \text{contact }(4,\pm4\sqrt2).$$

$m=0$ 时直线穿过顶点；$x=-4$ 不可能与 $x\ge0$ 的曲线相交。因此没有遗漏竖直或降次切线。

</details>

## 诊断与再尝试 {#retry}

平移符号写反会使顶点位置错误，可代入新顶点检查。降次后只有一根，并不自动表示相切。

**Retry (self-written):** Find intersections of $y=x$ with $x^2/9+y^2/4=1$, then reflect $x^2/4-y^2=1$ in $y=x$.

<details markdown="1"><summary>再尝试核对</summary>

$$(x,y)=\left(\frac6{\sqrt{13}},\frac6{\sqrt{13}}\right),\left(-\frac6{\sqrt{13}},-\frac6{\sqrt{13}}\right);\qquad \frac{y^2}{4}-x^2=1.$$

</details>

## 来源与范围 {#sources}

本课范围按 9665 v5.2；以下已读原题及配套评分材料用于设计作答证据，本页练习不是原题复制或官方评分标准。

FM01 样卷身份：QP 正文为 **Specimen 2018 Morning**，文件名含 2019/v3，页脚版本有差异；官网配套 MS 为样卷、版权 2017，并非某正式考季的实考 Final MS。

- [OxfordAQA 9665 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf), FP1.1 FP1.2.
- FM01 specimen Q10; QP pp.14–15, MS p.10. [FM01 specimen QP](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9665-FM01-international-as-further-mathematics-specimen-paper-2019-v3-1.pdf) · [Specimen MS](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9665-FM01-international-as-further-mathematics-mark-scheme-2017-v2-1.pdf).

[上一课](/zh/alevel/as-further-mathematics/rational-functions/) · [课程路线](/zh/alevel/as-further-mathematics/#learning-route) · [下一课](/zh/alevel/as-further-mathematics/trigonometric-solutions/)
