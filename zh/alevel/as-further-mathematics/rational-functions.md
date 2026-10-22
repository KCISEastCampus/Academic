---
title: "有理函数：图像与值域"
layout: subjects
mathjax: true
grade: as
subject: as-further-mathematics
lang: zh-CN
translation_of: /alevel/as-further-mathematics/rational-functions/
permalink: /zh/alevel/as-further-mathematics/rational-functions/
toc_headings: h2, h3
study_page: true
---

[AS 高数课程](/zh/alevel/as-further-mathematics/) · A1 · FP1.1

本页示范、补步骤、独立任务及再尝试均为**自拟题（self-written）**，没有官方分值。先写方法与理由，再分别展开提示和解答。题干保留英文，中文说明帮助建立推理。

## 有理图像告诉我们什么？ {#model}

**开始：**分解 $x^2-x-2$，核对结果 $(x-2)(x+1)$。**目标：**不用微分，解释分支、交点、不等式及可取得的高度。先修为二次方程、因式分解与符号不等式。

有理函数（rational function）是多项式的商。FP1.1 包括一次/一次、一次/二次、首一二次/首一二次三类。约分后仍保留原分母的禁值；约分后分母零点给竖直渐近线，被约去的零点可能是空点。分子次数较低时水平渐近线为 $y=0$，次数相等时取首项系数比。水平渐近线可以被穿过。

## 示范：连接图像与代数 {#demonstration}

$$f(x)=\frac{x+1}{x-2}=1+\frac3{x-2},\qquad x\ne2.$$

渐近线为 $x=2,y=1$，截距点为 $(-1,0),(0,-1/2)$。2 左侧曲线低于 1，右侧高于 1。与 $y=x$ 联立得 $x^2-3x-1=0$，并保留 $x\ne2$；两根 $x=(3\pm\sqrt{13})/2$ 都合法，且 $y=x$。

![Graph of y=(x+1)/(x−2), labelled intercepts and dashed asymptotes x=2, y=1.](/alevel/as-further-mathematics/diagrams/rational.svg)

求值域时，高度 $k$ 必须对应合法实交点。考虑一个二次/二次函数：

$$g(x)=\frac{x^2+2}{x^2-4x},\quad x\ne0,4;\qquad (1-k)x^2+4kx+2=0.$$

$$k\ne1:\quad D=16k^2+8k-8=8(2k-1)(k+1)\ge0.$$

0 与 4 均不满足该方程。$k=1$ 时降次为 $4x+2=0$，合法解为 $x=-1/2$。所以值域为 $k\le-1$ 或 $k\ge1/2$。$D=0$ 的重根给出确实取得的极值点 $(1,-1),(-2,1/2)$。降次、空点、极限高度必须另查；值域边界不一定是驻点。

## 补步骤与独立选法 {#practice}

**Scaffold (self-written):** Solve $f(x)>0$ by marking signs in the intervals cut by $-1,2$.

<details markdown="1"><summary>补步骤核对</summary>

符号为 $+,-,+$，故 $x<-1$ 或 $x>2$。严格不等式排除零点，2 为禁值。不能同乘符号未知的分母。

</details>

**Independent task (self-written):** For $h(x)=(x^2-1)/(x^2-x-2)$, find domain and range, sketch missing points and asymptotes, and solve $h(x)>2$. Justify excluded heights.

<details markdown="1"><summary>提示</summary>

分解后保留原禁值。空点的高度能否在别处取得？研究 $h(x)-2$ 的符号。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$h(x)=\frac{x-1}{x-2},\quad x\ne-1,2;\qquad h(x)-2=\frac{3-x}{x-2}.$$

空点为 $(-1,2/3)$，渐近线为 $x=2,y=1$。除 1 外每个高度只给一个候选横坐标，但 $2/3$ 只对应禁值 $-1$。值域为除 $1,2/3$ 外的实数；不等式解为 $2<x<3$。

</details>

## 诊断与再尝试 {#retry}

若包含 $-1$，说明约分后恢复了禁值；若解区间跨过 2，应查分母符号。下面独立重试。

**Retry (self-written):** Solve $x/(x^2-1)\ge0$, explaining endpoints.

<details markdown="1"><summary>再尝试核对</summary>

$$x\in(-1,0]\cup(1,\infty).$$

排除两个极点，包含分子零点。这个一次/二次式的水平渐近线为 $y=0$。

</details>

## 来源与范围 {#sources}

本课范围按 9665 v5.2；以下已读原题及配套评分材料用于设计作答证据，本页练习不是原题复制或官方评分标准。

FM01 样卷身份：QP 正文为 **Specimen 2018 Morning**，文件名含 2019/v3，页脚版本有差异；官网配套 MS 为样卷、版权 2017，并非某正式考季的实考 Final MS。

- [OxfordAQA 9665 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf), FP1.1.
- FM01 specimen Q9; QP pp.12–13, MS p.9. [FM01 specimen QP](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9665-FM01-international-as-further-mathematics-specimen-paper-2019-v3-1.pdf) · [Specimen MS](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9665-FM01-international-as-further-mathematics-mark-scheme-2017-v2-1.pdf).

[课程路线](/zh/alevel/as-further-mathematics/#learning-route) · [下一课](/zh/alevel/as-further-mathematics/conics-and-loci/)
