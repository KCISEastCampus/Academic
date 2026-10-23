---
title: "平面变换与一般不变直线"
layout: subjects
mathjax: true
grade: as
subject: as-further-mathematics
lang: zh-CN
translation_of: /alevel/as-further-mathematics/transformations/
permalink: /zh/alevel/as-further-mathematics/transformations/
toc_headings: "#start, #model, #shear, #demonstration, #invariant-lines, #practice, #retry, #later-review, #next-step, #sources"
study_page: true
reading_layout: true
---

[AS 高数课程](/zh/alevel/as-further-mathematics/)

一条线作为点集保持原样，并不表示线上每个点都没移动。先把矩阵与两个基向量的像联系，再追踪点、面积和整条线。学完后，你应能建立和识别变换、决定组合次序，并论证不变对象。

## 开始之前 {#start}

先修是[矩阵乘法与逆](/zh/alevel/as-further-mathematics/matrix-algebra/)、坐标直线与弧度制三角。次序不确定时，让一个向量经历两次实际动作。本页均为**自拟题**，无官方分值，先作答再展开帮助。

## 从基向量的像读矩阵 {#model}

第一列是 (1,0) 的像，第二列是 (0,1) 的像。所有向量都是这两个基向量的线性组合，因此两列决定全部像。二阶矩阵固定原点，不能表示非零平移。

$$\begin{pmatrix}a&b\\c&d\end{pmatrix}\begin{pmatrix}x\\y\end{pmatrix}=\begin{pmatrix}ax+by\\cx+dy\end{pmatrix}.$$

逆时针旋转让两个基向量都转过 θ。关于与横轴夹角 φ 的过原点直线反射时，先把镜线旋到横轴，反射，再旋回：

$$R_\theta=\begin{pmatrix}\cos\theta&-\sin\theta\\\sin\theta&\cos\theta\end{pmatrix}.$$

$$\begin{aligned}S_\phi&=R_\phi\begin{pmatrix}1&0\\0&-1\end{pmatrix}R_{-\phi}\\&=\begin{pmatrix}\cos2\phi&\sin2\phi\\\sin2\phi&-\cos2\phi\end{pmatrix}.\end{aligned}$$

沿轴伸缩只改一个坐标，原点中心放缩则以相同因子改变两坐标。把矩阵与基向量的像对应：

$$\begin{aligned}\text{x-stretch: }&\begin{pmatrix}s&0\\0&1\end{pmatrix},\\\text{y-stretch: }&\begin{pmatrix}1&0\\0&s\end{pmatrix},\\\text{enlargement: }&sI_2.\end{aligned}$$

通常伸缩因子 s 为正。零因子会压塌一个方向，负因子还使方向反转。放缩因子为负时，每个位置向量还会反向。

## 剪切与面积 {#shear}

$$\begin{aligned}
H_x&=\begin{pmatrix}1&k\\0&1\end{pmatrix},\\
(x,y)&\mapsto(x+ky,y),\\
H_y&=\begin{pmatrix}1&0\\k&1\end{pmatrix},\\
(x,y)&\mapsto(x,y+kx).
\end{aligned}$$

非零的平行 x 轴剪切保持高度，水平位移与高度成比例，恰好 x 轴上各点固定。平行 y 轴剪切交换两种角色。k=0 时为恒等变换。图示 k=1，底和高都不变，所以面积相同。

![Unit basis triangle and its image under shear x′=x+y, y′=y, with labelled corresponding vertices and unchanged base; both areas are 1/2.](/alevel/as-further-mathematics/diagrams/shear.svg){: width="560" height="440" }

一般情况下，两列像向量张成平行四边形，有向面积为 ad−bc，因此普通面积乘以行列式绝对值。负行列式反转方向，零则压塌面积。

$$\text{area factor}=\lvert\det M\rvert.$$

## 按动作次序复合 {#demonstration}

<section class="worked-example" markdown="1">

### 先旋转，再反射

**Demonstration (self-written):** Apply $R_{\pi/2}$ then reflection in the x-axis.

实际依次作用为

$$\mathbf r\mapsto R_{\pi/2}\mathbf r\mapsto S_0(R_{\pi/2}\mathbf r).$$

最先作用的矩阵最靠近向量，所以

$$S_0R_{\pi/2}=\begin{pmatrix}0&-1\\-1&0\end{pmatrix}.$$

检查 (1,0)：先变为 (0,1)，再为 (0,−1)，符合第一列。倒序作用则得到 (0,1)，结果不同。复合表示关于 y=−x 反射，行列式 −1 对应面积不变、方向反转。

</section>

## 线不变不等于点不动 {#invariant-lines}

不变点满足 Mr=r。不变直线作为点集映回自己，但点可沿线移动。“由不变点组成的直线”要求每点都不动。这里的一般直线允许非零截距，整个平面上的变换仍是线性变换。

$$M\mathbf r=\mathbf r.$$

对可逆 M，代入非竖直线上的任意点，并要求像对每个 x 都满足同一直线方程：

$$\begin{aligned}M&=\begin{pmatrix}a&b\\c&d\end{pmatrix},\\y&=mx+k.\end{aligned}$$

$$\begin{aligned}x'&=(a+bm)x+bk,\\y'&=(c+dm)x+dk,\\mx'+k&=m(a+bm)x+mbk+k.\end{aligned}$$

$$\begin{aligned}c+dm&=m(a+bm),\\(d-mb-1)k&=0.\end{aligned}$$

第一式给方向，第二式限制截距。可逆性保证整条线映回自身。y=mx+k 漏掉竖线：另设 x=h，让 y 任意变化，要求 x′ 始终等于 h，得到

$$b=0,\qquad (a-1)h=0.$$

奇异变换还须检查直线是否塌缩成一点；例如 diag(1,0) 把每条竖线都压成一点。

<section class="worked-example" markdown="1">

### 保留整族截距

**Demonstration (self-written):** For $M=\operatorname{diag}(2,1)$, all horizontal lines $y=k$ and the vertical line $x=0$ are invariant; only the points on $x=0$ are individually fixed.

要说明没有遗漏，非竖线系数条件为 m=2m，因此 m=0；常数条件允许任意 k。竖线条件给 h=0。不变点方程 (2x,y)=(x,y) 要求 x=0、y 任取。点 (1,k) 会移到 (2,k)：水平线还在原处，这个点却移动了。

</section>

<section class="lesson-check" markdown="1">

#### 任务 1 {#scaffold}

**Scaffold (self-written):** Identify the transformation represented by H below, state its area factor and find its fixed points.

$$H=\begin{pmatrix}1&0\\2&1\end{pmatrix}.$$

<details markdown="1"><summary>提示</summary>

求一般点的像，再把两个位移分量设为零。

</details>

<details markdown="1"><summary>解答与核对</summary>

这是平行 y 轴、因子 2 的剪切，面积倍率为 1。不变点满足 $2x=0$，故恰为 $x=0$ 上各点。

</details>

</section>

## 独立完成 {#practice}

<section class="lesson-check" markdown="1">

#### 任务 2 {#practice-2}

**Independent task (self-written):** For the matrices below, find every invariant line of M, distinguishing lines of fixed points. Identify S and the image area of a triangle of area 6 under MS, with S applied first.

$$M=\begin{pmatrix}2&1\\0&1\end{pmatrix},\qquad S=\begin{pmatrix}1/2&\sqrt3/2\\\sqrt3/2&-1/2\end{pmatrix}.$$

<details markdown="1"><summary>提示</summary>

保留系数与常数项两个条件，另查竖线。S 对照反射公式，面积用行列式。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$\begin{aligned}m&=m(2+m),\\m(m+1)&=0,\\-mk&=0.\end{aligned}$$

m=0 时所有 y=k 成立；m=−1 时只能 k=0，即 y=−x。b=1，所以没有竖直不变线。不变点满足 x+y=0，故 y=−x 逐点固定，水平线族不逐点固定。

$$2\phi=\pi/3\Rightarrow\phi=\pi/6.$$

S 关于 $y=x/\sqrt3$ 反射，行列式为 −1。

$$\begin{aligned}\lvert\det(MS)\rvert&=\lvert2(-1)\rvert=2,\\A'&=2(6)=12.\end{aligned}$$

复合反转方向。漏截距族，回到[两个条件](#invariant-lines)，再做[重试一](#retry-lines)。

</details>

</section>

<section class="lesson-check" markdown="1">

#### 任务 3 {#practice-3}

**Independent task (self-written):** A map sends $(1,0)^T$ to $(0,2)^T$ and $(0,1)^T$ to $(-1,0)^T$. Construct its matrix T and describe it as a stretch followed by a rotation. E enlarges about the origin with scale factor 3. Find the matrix for E followed by T, and the image area of a triangle of area 5. What happens to the area if $\operatorname{diag}(1,0)$ acts afterwards?

<details markdown="1"><summary>提示</summary>

把像放成两列，再提出四分之一周旋转。面积伸缩要考虑两个方向。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$\begin{aligned}T&=\begin{pmatrix}0&-1\\2&0\end{pmatrix}\\&=R_{\pi/2}\begin{pmatrix}2&0\\0&1\end{pmatrix}.\end{aligned}$$

先沿 x 轴伸长为二倍，再逆时针转四分之一周。

$$TE=3T=\begin{pmatrix}0&-3\\6&0\end{pmatrix}.$$

行列式 18 给出像面积 90；之后的奇异变换把面积压为零。列放错，回看[基向量](#model)；次序或面积错，做[重试二](#retry-maps)。

</details>

</section>

<section class="lesson-check" markdown="1">

#### 任务 4 {#practice-4}

**Independent task (self-written):** You are told that F below is a shear. Find its fixed points and all invariant lines. Show that each displacement is parallel to its fixed line and explain why area is unchanged.

$$F=\begin{pmatrix}2&-1\\1&0\end{pmatrix}.$$

<details markdown="1"><summary>提示</summary>

求一般点的位移，再用完整直线条件；这次固定线不是坐标轴。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$F\begin{pmatrix}x\\y\end{pmatrix}-\begin{pmatrix}x\\y\end{pmatrix}
=(x-y)\begin{pmatrix}1\\1\end{pmatrix}.$$

位移平行 y=x，且恰在线上为零。

$$\begin{aligned}1&=m(2-m),\\(m-1)^2&=0,\\(m-1)k&=0.\end{aligned}$$

所有 y=x+k 都不变，只有 k=0 逐点固定。b=−1 排除竖线。行列式为一，面积和方向均保持。若只找到了固定线，回看[点集与点](#invariant-lines)。

</details>

</section>

## 诊断与再尝试 {#retry}

漏线族时补常数项或竖线条件；次序错时追踪一个向量的两次动作。重试前收起旧解答。

<section class="lesson-check" markdown="1">

#### Retry 1 {#retry-lines}

**Retry (self-written):** Find all invariant lines and fixed points of $\operatorname{diag}(1,3)$.

<details markdown="1"><summary>提示</summary>

先保留任意截距，直到常数项方程限制它。

</details>

<details markdown="1"><summary>解答与核对</summary>

所有竖线 $x=h$ 与水平线 $y=0$ 不变；$y=0$ 上各点固定。非竖线条件 $3m=m$ 要求 m=0，再由 $2k=0$ 得到截距为零；竖线条件允许任意 h。

</details>

</section>

<section class="lesson-check" markdown="1">

#### Retry 2 {#retry-maps}

**Retry (self-written):** Construct the matrix for a y-stretch of factor 2 followed by reflection in y=x. Apply it to $(1,2)^T$ and find the image area and orientation of a triangle of area 3.

<details markdown="1"><summary>提示</summary>

逐个找基向量的像，或按实际动作顺序乘矩阵。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$\begin{aligned}N&=\begin{pmatrix}0&1\\1&0\end{pmatrix}\begin{pmatrix}1&0\\0&2\end{pmatrix}\\&=\begin{pmatrix}0&2\\1&0\end{pmatrix}.\end{aligned}$$

向量映到 (4,1)。行列式 −2 给出面积 6，方向反转。分步检查：(1,2) 先到 (1,4)，再到 (4,1)。

</details>

</section>

## 学过线性化后回顾 {#later-review}

<section class="lesson-check" markdown="1">

#### 任务 1 {#review-1}

**Later review (self-written):** A map sends $(x,y)$ to $(x+2y,y)$. Find its matrix, every invariant line and its fixed points. Reflection in the y-axis then follows. Find the composite matrix, area factor and image of $(1,1)^T$. Find a matrix that restores every original point.

<details markdown="1"><summary>提示</summary>

不变对象用坐标检验，复合按实际动作次序建立。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$H=\begin{pmatrix}1&2\\0&1\end{pmatrix}.$$

不变线为所有 y=k，不变点恰为 y=0 上各点。系数式 $m=m(1+2m)$ 得 m=0，k 任意。b=2 排除竖线。

$$\begin{aligned}J&=\begin{pmatrix}-1&-2\\0&1\end{pmatrix},\\J^{-1}&=J.\end{aligned}$$

面积倍率一，方向反转，(1,1) 映到 (−3,1)。再次作用 J 可恢复；$J^2=I_2$ 证明对所有点成立。线族不完整时回到[一般条件](#invariant-lines)。

</details>

</section>

## 下一步 {#next-step}

能区分三种不变对象并说明矩阵选择后，继续[线性化](/zh/alevel/as-further-mathematics/linearisation/)。现在先做[矩阵回顾](/zh/alevel/as-further-mathematics/matrix-algebra/#later-review)，下一课后再回到本页复查。

## 来源与范围 {#sources}

本课范围按 9665 v5.2；以下已读原题及配套评分材料用于设计作答证据，本页练习不是原题复制或官方评分标准。

<details markdown="1"><summary>官方来源</summary>

- [OxfordAQA 9665 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf), FPP1.1.
- FM02 June 2024 Q2, Q5; QP pp.4–5,10–11, MS pp.5,10–11. [FM02 June 2024 QP](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-question-paper.pdf) · [Final MS](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-mark-scheme.pdf).

</details>

[上一课](/zh/alevel/as-further-mathematics/matrix-algebra/) · [课程路线](/zh/alevel/as-further-mathematics/#learning-route) · [下一课](/zh/alevel/as-further-mathematics/linearisation/)
