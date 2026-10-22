---
title: "平面变换与一般不变直线"
layout: subjects
mathjax: true
grade: as
subject: as-further-mathematics
lang: zh-CN
translation_of: /alevel/as-further-mathematics/transformations/
permalink: /zh/alevel/as-further-mathematics/transformations/
toc_headings: h2, h3
study_page: true
---

[AS 高数课程](/zh/alevel/as-further-mathematics/) · B2 · FPP1.1

本页示范、补步骤、独立任务及再尝试均为**自拟题（self-written）**，没有官方分值。先写方法与理由，再分别展开提示和解答。题干保留英文，中文说明帮助建立推理。

## 哪些对象保持不变？ {#model}

**开始：**把矩阵作用于 $(1,0)^T,(0,1)^T$。**目标：**建立平面变换、排列复合次序，并区分不变点与不变直线。先修为矩阵乘法、直线与三角。二阶矩阵保持原点不动，不能表示非零平移；两列分别为基向量的像。

$$R_\theta=\begin{pmatrix}\cos\theta&-\sin\theta\\\sin\theta&\cos\theta\end{pmatrix},\quad
S_\phi=\begin{pmatrix}\cos2\phi&\sin2\phi\\\sin2\phi&-\cos2\phi\end{pmatrix}.$$

R 逆时针旋转 θ；S 关于与 x 正轴夹角 φ 的过原点直线反射。反射式可由先把镜线旋至 x 轴、反射、再旋回推得。

$$\text{x-stretch: }\begin{pmatrix}s&0\\0&1\end{pmatrix};\quad
\text{y-stretch: }\begin{pmatrix}1&0\\0&s\end{pmatrix};\quad
\text{enlargement: }sI_2;\quad
H=\begin{pmatrix}1&k\\0&1\end{pmatrix}.$$

H 为平行 x 轴剪切：$(x,y)\mapsto(x+ky,y)$。交换非对角位置则为平行 y 轴剪切。较不熟悉的不变点线剪切可由题目告知。面积倍率为 $\lvert\det M\rvert$；负行列式反转方向，零行列式使面积退化。

![Unit basis triangle and its image under shear x′=x+y, y′=y, with labelled corresponding vertices and unchanged base; both areas are 1/2.](/alevel/as-further-mathematics/diagrams/shear.svg)

## 示范：顺序与一般直线 {#demonstration}

先作 $R_{\pi/2}$ 再关于 x 轴反射，复合为 $S_0R_{\pi/2}$；最先执行的矩阵最靠近向量。

$$S_0R_{\pi/2}=\begin{pmatrix}0&-1\\-1&0\end{pmatrix}.$$

不变点满足 $M\mathbf r=\mathbf r$。不变直线作为点集映回自身，但线上点可以移动。对可逆 $M=\begin{pmatrix}a&b\\c&d\end{pmatrix}$ 及 $y=mx+k$，代入 $(x,mx+k)$，在 $y'=mx'+k$ 中同时比较系数与常数项：

$$c+dm=m(a+bm),\qquad (d-mb-1)k=0.$$

竖线另查，$x=h$ 要求 $b=0$ 且 $(a-1)h=0$。可逆性确保像覆盖整条线；奇异矩阵还应检查是否塌缩成单点。

**Demonstration (self-written):** For $M=\operatorname{diag}(2,1)$, all horizontal lines $y=k$ and the vertical line $x=0$ are invariant; only the points on $x=0$ are individually fixed.

非零截距线族不可遗漏；只设 $y=mx$ 会少掉无穷多条线。

## 补步骤与独立选法 {#practice}

**Scaffold (self-written):** Identify $\begin{pmatrix}1&0\\2&1\end{pmatrix}$, state its area factor and find its fixed points.

<details markdown="1"><summary>补步骤核对</summary>

平行 y 轴、因子 2 的剪切；面积倍率 1；$2x=0$ 给出 $x=0$ 上每个点不动。

</details>

**Independent task (self-written):** Find every invariant line of $M=\begin{pmatrix}2&1\\0&1\end{pmatrix}$, distinguishing lines of fixed points. Identify $S=\begin{pmatrix}1/2&\sqrt3/2\\\sqrt3/2&-1/2\end{pmatrix}$ and the image area of a triangle of area 6 under MS, with S applied first.

<details markdown="1"><summary>提示</summary>

设 $y=mx+k$ 并保留常数条件；另查竖线。S 可对照反射公式的基向量像；面积用乘积行列式。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$m=m(2+m)\Rightarrow m(m+1)=0;\qquad -mk=0.$$

$m=0$ 时任意 $y=k$ 成立；$m=-1$ 时只能 $k=0$，得到 $y=-x$。因 b 为 1，没有竖直不变线。不变点满足 $x+y=0$，所以 $y=-x$ 逐点固定，水平线族并非逐点固定。

$$2\phi=\pi/3\Rightarrow\phi=\pi/6;\qquad \lvert\det(MS)\rvert=\lvert2(-1)\rvert=2\Rightarrow A'=12.$$

S 的镜线为 $y=x/\sqrt3$；复合变换反转方向。

</details>

## 诊断与再尝试 {#retry}

漏截距条件会把不变方向误当完整直线；判断逐点不动时，试代线上非原点。

**Retry (self-written):** Find all invariant lines and fixed points of $\operatorname{diag}(1,3)$.

<details markdown="1"><summary>再尝试核对</summary>

所有竖线 $x=h$ 及水平线 $y=0$ 不变；$y=0$ 上各点不动。

</details>

## 来源与范围 {#sources}

本课范围按 9665 v5.2；以下已读原题及配套评分材料用于设计作答证据，本页练习不是原题复制或官方评分标准。

- [OxfordAQA 9665 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf), FPP1.1.
- FM02 June 2024 Q2, Q5; QP pp.4–5,10–11, MS pp.5,10–11. [FM02 June 2024 QP](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-question-paper.pdf) · [Final MS](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-mark-scheme.pdf).

[上一课](/zh/alevel/as-further-mathematics/matrix-algebra/) · [课程路线](/zh/alevel/as-further-mathematics/#learning-route) · [下一课](/zh/alevel/as-further-mathematics/linearisation/)
