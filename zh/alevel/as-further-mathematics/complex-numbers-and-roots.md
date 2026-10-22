---
title: "复数、Argand 图与二次根"
layout: subjects
mathjax: true
grade: as
subject: as-further-mathematics
lang: zh-CN
translation_of: /alevel/as-further-mathematics/complex-numbers-and-roots/
permalink: /zh/alevel/as-further-mathematics/complex-numbers-and-roots/
toc_headings: h2, h3
study_page: true
---

[AS 高数课程](/zh/alevel/as-further-mathematics/) · A4 · FP1.3 FP1.4

本页示范、补步骤、独立任务及再尝试均为**自拟题（self-written）**，没有官方分值。先写方法与理由，再分别展开提示和解答。题干保留英文，中文说明帮助建立推理。

## 同一对象的代数与几何 {#model}

**开始：**展开 $(x+iy)(x-iy)$，并使用 $i^2=-1$。**目标：**解复数方程、解释 Argand 轨迹并变换二次根。先修为二次方程、坐标、三角。设 $z=x+iy$，实部 $\Re z=x$，虚部 $\Im z=y$，共轭 $\bar z=x-iy$；实部与虚部本身都是实数。

$$z\bar z=x^2+y^2;\qquad \lvert z\rvert=\sqrt{x^2+y^2};\qquad
z=r(\cos\theta+i\sin\theta).$$

$z\ne0$ 时须选对象限；本课主辐角为 $-\pi<\theta\le\pi$。零没有辐角。加减按分量；乘法用 $i^2=-1$；除法要求除数非零，并乘其共轭。例如：

$$\frac{3+2i}{1-i}=\frac{(3+2i)(1+i)}2=\frac12+\frac52i;\qquad -1+i=\sqrt2(\cos(3\pi/4)+i\sin(3\pi/4)).$$

## 示范：比较实虚部，再作解释 {#demonstration}

**Demonstration (self-written):** Solve $z+2\bar z=6-i$.

$$z=x+iy\Rightarrow3x-iy=6-i\Rightarrow x=2,\ y=1,\ z=2+i.$$

复数相等要求实虚部同时相等；代回核对 $(2+i)+2(2-i)=6-i$。$z^2-2z+5=0$ 的根为 $1\pm2i$。非实根共轭成对需要系数为实数，复系数方程不一定满足。

Argand 图横轴为实轴、纵轴为虚轴。$\lvert z-a\rvert=r$ 为圆；$\arg(z-a)=\theta$ 为去掉端点的射线；到两点等距为垂直平分线。组合条件求交集，不能取并集。

![Argand diagram showing the circle centred at 1 of radius 2, a ray at π/4 starting at an excluded endpoint 1, and real and imaginary axes. The independent intersection is not labelled.](/alevel/as-further-mathematics/diagrams/argand.svg)

若根 $\alpha,\beta$ 满足 $az^2+bz+c=0$，其中 $a\ne0$，设 $S=-b/a$、$P=c/a$。用新根和、根积即可建新二次式，不必先求原根。倒数变换要求 $P\ne0$。$z^2-3z+4=0$ 的变换根 $1/\alpha,1/\beta$ 的和为 $3/4$、积为 $1/4$，故新方程为 $4w^2-3w+1=0$。一般多项式根理论和 De Moivre 留给 FM03。

## 补步骤与独立选法 {#practice}

**Scaffold (self-written):** For roots of $z^2-3z+4=0$, complete $\alpha^2+\beta^2=S^2-2P$ and form the quadratic with roots $\alpha^2,\beta^2$.

<details markdown="1"><summary>补步骤核对</summary>

$$S^2-2P=1,\qquad P^2=16\Rightarrow w^2-w+16=0.$$

</details>

**Independent task (self-written):** (a) Solve $(1+i)z+\bar z=4+2i$. (b) Find every z satisfying $\lvert z-1\rvert=2$ and $\arg(z-1)=\pi/4$. (c) If $\alpha,\beta$ solve $z^2-3z+4=0$, form the equation whose roots are $\alpha+1/\alpha$ and $\beta+1/\beta$.

<details markdown="1"><summary>提示</summary>

（a）化为两个实方程；（b）连接距离与方向；（c）用对称和积，先表示 $\alpha/\beta+\beta/\alpha$，所用条件为 $S,P$。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$(1+i)(x+iy)+x-iy=(2x-y)+ix;\quad x=2,\ y=0\Rightarrow z=2.$$

$$z=1+2(\cos(\pi/4)+i\sin(\pi/4))=1+\sqrt2+i\sqrt2.$$

$$S_{\rm new}=S+S/P=15/4;\quad P_{\rm new}=P+\frac{S^2-2P}{P}+\frac1P=\frac92;\quad4w^2-15w+18=0.$$

射线端点因辐角无定义而排除；正半径确保交点在该射线而非反向半直线。

</details>

## 诊断与再尝试 {#retry}

象限错误可能保留相同正切比，却改变复数。新方程符号不对时展开 $(w-u)(w-v)$，根和前应有负号。

**Retry (self-written):** Describe $\lvert z-2\rvert=\lvert z+2\rvert$. Does $z=0$ have a principal argument? Solve $z^2+4=0$.

<details markdown="1"><summary>再尝试核对</summary>

轨迹为虚轴 $x=0$；零没有辐角；方程根为 $\pm2i$。

</details>

## 来源与范围 {#sources}

本课范围按 9665 v5.2；以下已读原题及配套评分材料用于设计作答证据，本页练习不是原题复制或官方评分标准。

FM01 样卷身份：QP 正文为 **Specimen 2018 Morning**，文件名含 2019/v3，页脚版本有差异；官网配套 MS 为样卷、版权 2017，并非某正式考季的实考 Final MS。

- [OxfordAQA 9665 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf), FP1.3 FP1.4.
- FM01 specimen Q2, Q4, Q7; QP pp.3–6,10–11, MS pp.4–5,8. [FM01 specimen QP](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9665-FM01-international-as-further-mathematics-specimen-paper-2019-v3-1.pdf) · [Specimen MS](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9665-FM01-international-as-further-mathematics-mark-scheme-2017-v2-1.pdf).

[上一课](/zh/alevel/as-further-mathematics/trigonometric-solutions/) · [课程路线](/zh/alevel/as-further-mathematics/#learning-route) · [下一课](/zh/alevel/as-further-mathematics/series/)
