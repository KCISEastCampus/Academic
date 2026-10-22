---
title: "三角方程的完整通解"
layout: subjects
mathjax: true
grade: as
subject: as-further-mathematics
lang: zh-CN
translation_of: /alevel/as-further-mathematics/trigonometric-solutions/
permalink: /zh/alevel/as-further-mathematics/trigonometric-solutions/
toc_headings: h2, h3
study_page: true
---

[AS 高数课程](/zh/alevel/as-further-mathematics/) · A3 · FP1.6

本页示范、补步骤、独立任务及再尝试均为**自拟题（self-written）**，没有官方分值。先写方法与理由，再分别展开提示和解答。题干保留英文，中文说明帮助建立推理。

## 为什么主值还不够？ {#model}

**开始：**在单位圆找出正弦为 $1/2$ 的位置。**目标：**列全含频率、相位、非特殊角的解。除标明角度符号外均用弧度，下面整数参数均属于 $\mathbb Z$。先修为单位圆与普通 AS 恒等式。

反三角函数只返回一个主值；周期方程通常有无穷多解。单位圆中的对称产生第二分支，转一周产生周期。实数解要求正弦、余弦右端 $-1\le k\le1$。

$$\sin\theta=k:\quad\theta=\alpha+2n\pi\ \text{or}\ \pi-\alpha+2n\pi,\quad\alpha=\arcsin k.$$

$$\cos\theta=k:\quad\theta=\pm\beta+2n\pi,\quad\beta=\arccos k;\qquad
\tan\theta=k:\quad\theta=\gamma+n\pi,\quad\gamma=\arctan k.$$

当 $k=\pm1$ 时正弦、余弦两支可能重复；不用重复计数。角度制把 $2\pi,\pi$ 换为 $360^\circ,180^\circ$。

![Unit circle marking two distinct points with y=1/2, at angles π/6 and 5π/6, and labelled cosine and sine axes.](/alevel/as-further-mathematics/diagrams/trig.svg)

## 示范：整体处理角 {#demonstration}

**Demonstration (self-written):** Solve $\sin(2x-\pi/6)=1/2$ for all real x.

$$2x-\pi/6=\pi/6+2n\pi\ \text{or}\ 5\pi/6+2n\pi
\Rightarrow x=\pi/6+n\pi\ \text{or}\ x=\pi/2+n\pi.$$

先解整个角，再还原平移与倍率。x 的周期为 $\pi$ 而非 $2\pi$。每支取一个值代回核对，并用单位圆说明无遗漏。

非特殊值先保留反三角表达式，最后才舍入。若 $\cos(3x+0.2)=0.3$，设 $\beta=\arccos(0.3)$，必须保留两个符号：

$$x=\frac{\pm\arccos(0.3)-0.2+2n\pi}{3}.$$

## 补步骤与独立选法 {#practice}

**Scaffold (self-written):** Complete the two branches for $\cos(2x)=1/\sqrt2$, then divide the entire expression by 2.

<details markdown="1"><summary>补步骤核对</summary>

$$2x=\pm\pi/4+2n\pi\Rightarrow x=\pm\pi/8+n\pi.$$

</details>

**Independent task (self-written):** Solve $2\sin^2x-3\sin x+1=0$ for all real x. Explain why $x=\arcsin(1/2)$ alone is incomplete. Also solve $\tan(3x+\pi/4)=-1$.

<details markdown="1"><summary>提示</summary>

先把正弦整体作为代数未知数。正切周期为 $\pi$，之后才还原系数 3。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$(2\sin x-1)(\sin x-1)=0\Rightarrow x=\pi/6+2n\pi,\ 5\pi/6+2n\pi,\ \pi/2+2n\pi.$$

$$3x+\pi/4=-\pi/4+n\pi\Rightarrow x=-\pi/6+n\pi/3.$$

只给主值遗漏第二支、所有周期重复，还遗漏 $\sin x=1$ 这一根。

</details>

## 诊断与再尝试 {#retry}

若周期仍写 $2\pi$，即使已经还原 $2x$，应把包含整数项的整个右端除以 2。若除以 $\sin x$，先检查是否丢掉零根。

**Retry (self-written):** Solve $\sin x\cos x=0$ and $\sin x=1.2$ over the reals.

<details markdown="1"><summary>再尝试核对</summary>

$$\sin x\cos x=0\Rightarrow x=n\pi/2;\qquad \sin x=1.2:\ \text{no real solution}.$$

</details>

## 来源与范围 {#sources}

本课范围按 9665 v5.2；以下已读原题及配套评分材料用于设计作答证据，本页练习不是原题复制或官方评分标准。

FM01 样卷身份：QP 正文为 **Specimen 2018 Morning**，文件名含 2019/v3，页脚版本有差异；官网配套 MS 为样卷、版权 2017，并非某正式考季的实考 Final MS。

- [OxfordAQA 9665 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf), FP1.6.
- FM01 specimen Q8; QP p.11, MS p.9. [FM01 specimen QP](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9665-FM01-international-as-further-mathematics-specimen-paper-2019-v3-1.pdf) · [Specimen MS](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9665-FM01-international-as-further-mathematics-mark-scheme-2017-v2-1.pdf).

[上一课](/zh/alevel/as-further-mathematics/conics-and-loci/) · [课程路线](/zh/alevel/as-further-mathematics/#learning-route) · [下一课](/zh/alevel/as-further-mathematics/complex-numbers-and-roots/)
