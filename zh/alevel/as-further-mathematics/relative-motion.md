---
title: "向量、拦截与最近距离"
layout: subjects
mathjax: true
grade: as
subject: as-further-mathematics
lang: zh-CN
translation_of: /alevel/as-further-mathematics/relative-motion/
permalink: /zh/alevel/as-further-mathematics/relative-motion/
toc_headings: h2, h3
study_page: true
---

[AS 高数课程](/zh/alevel/as-further-mathematics/) · M1 · FM1.1

本页示范、补步骤、独立任务及再尝试均为**自拟题（self-written）**，没有官方分值。先写方法与理由，再分别展开提示和解答。题干保留英文，中文说明帮助建立推理。

## 路线相交是否就会相遇？ {#model}

**开始：**标出 $(3,4)$ 并求到原点距离。**目标：**建立向量记号、合速度，并在两个分量中检查同一时刻，再求拦截与最近距离。先修为坐标、匀速运动与二次理论。须使用同一惯性参考系、原点、时钟与单位。

单位向量 $\mathbf i,\mathbf j$ 分别沿 x、y 正方向一个单位。分量分别相加；位置向量相减给两点间位移。向量有方向和大小；速率是非负大小。

$$\mathbf r=x\mathbf i+y\mathbf j=\begin{pmatrix}x\\y\end{pmatrix},\quad
\lvert\mathbf r\rvert=\sqrt{x^2+y^2},\quad\overrightarrow{AB}=\mathbf r_B-\mathbf r_A;\qquad
\mathbf r(t)=\mathbf r(0)+\mathbf vt.$$

$$\mathbf r_{BA}=\mathbf r_B-\mathbf r_A=\mathbf r_{BA}(0)+(\mathbf v_B-\mathbf v_A)t;\qquad \mathbf v_{BA}=\mathbf v_B-\mathbf v_A.$$

对运动介质，$\mathbf v_{\rm ground}=\mathbf v_{\rm relative\ medium}+\mathbf v_{\rm medium}$，按首尾相接画向量。例如水流 $4\mathbf i$、相对水游速 $3\mathbf j$，合速度为 $4\mathbf i+3\mathbf j$，相同单位下速率为 5。

![Head-to-tail velocity triangle with components (4,0), (0,3), resultant (4,3) and magnitude 5; a second panel shows relative displacement (6−2t,8) meeting its perpendicular closest point at t=3.](/alevel/as-further-mathematics/diagrams/relative.svg)

## 示范：成功拦截与最近点 {#demonstration}

**Demonstration (self-written):** At $t=0$ s, target B is at $(6,0)$ m with velocity $(0,1)$ m s⁻¹. A leaves the origin at a constant unknown direction and speed 2 m s⁻¹. Find a heading to intercept B for $t>0$.

$$\mathbf v_A t=(6,t),\qquad \mathbf v_A=(6/t,1),\qquad 36/t^2+1=4.$$

$$t=2\sqrt3\ \mathrm s,\quad\mathbf v_A=(\sqrt3,1)\ \mathrm{m\,s^{-1}},\quad\text{heading }\pi/6\text{ above positive x}.$$

此时两者位置均为 $(6,2\sqrt3)$ m。代数上的负时间不合法。另一对粒子的相对位移为 $(6-2t,8)$ m、$0\le t\le5$ s，最小化距离平方：

$$d^2=(6-2t)^2+64=4(t-3)^2+64\Rightarrow d_{\min}=8\ \mathrm m\text{ at }t=3\ \mathrm s.$$

几何上相对点沿水平线运动，原点垂足为 $(0,8)$。若对应时间不在允许区间，应检查端点。相对速度为零时距离不变，不能除以其模平方。

## 补步骤与独立选法 {#practice}

**Scaffold (self-written):** A starts at $(0,0)$ m with velocity $(4,3)$ m s⁻¹; B starts at $(12,0)$ m with velocity $(1,3)$ m s⁻¹. Write relative position B−A and test collision.

<details markdown="1"><summary>补步骤核对</summary>

$$\mathbf r_{BA}(t)=(12-3t,0);\qquad t=4\ \mathrm s,\quad\mathbf r_A=\mathbf r_B=(16,12)\ \mathrm m.$$

</details>

**Independent task (self-written):** A starts at $(0,0)$ m with velocity $(2,0)$ m s⁻¹; B starts at $(6,8)$ m with velocity $(0,-2)$ m s⁻¹. Do they collide for $t\ge0$? Find their closest distance for $t\ge0$, and then for $0\le t\le2$ s. Explain the changed answer geometrically or algebraically.

<details markdown="1"><summary>提示</summary>

碰撞要求两个相对分量在同一时刻为零；距离最小化须服从时间区间。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$\mathbf r_{BA}=(6-2t,8-2t);\qquad 6-2t=0\Rightarrow t=3,\quad8-2t=0\Rightarrow t=4.$$

两个分量给不同时间，所以路线虽相交却不碰撞。

$$d^2=(6-2t)^2+(8-2t)^2=8(t-3.5)^2+2.$$

$$t\ge0:\quad t=3.5\ \mathrm s,\ d_{\min}=\sqrt2\ \mathrm m;\qquad 0\le t\le2:\quad t=2\ \mathrm s,\ d_{\min}=2\sqrt5\ \mathrm m.$$

无限制最近点晚于较短观察区间；在短区间内距离一直下降，故终点最近。

</details>

## 诊断与再尝试 {#retry}

只比较速率会丢掉方向；若最小值给负时间，应恢复时间限制并比较端点。

**Retry (self-written):** A and B have equal velocity $(2,-1)$ m s⁻¹ and initial separation vector $(3,4)$ m. Find their relative velocity and separation for all valid times.

<details markdown="1"><summary>再尝试核对</summary>

$$\mathbf v_{BA}=\mathbf0,\qquad\mathbf r_{BA}=(3,4)\ \mathrm m,\qquad d=5\ \mathrm m.$$

</details>

## 来源与范围 {#sources}

本课范围按 9665 v5.2；以下已读原题及配套评分材料用于设计作答证据，本页练习不是原题复制或官方评分标准。

- [OxfordAQA 9665 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf), FM1.1.
- FM02 June 2024 Q9; QP p.18, MS p.16. [FM02 June 2024 QP](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-question-paper.pdf) · [Final MS](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-mark-scheme.pdf).

[上一课](/zh/alevel/as-further-mathematics/linear-combinations/) · [课程路线](/zh/alevel/as-further-mathematics/#learning-route) · [下一课](/zh/alevel/as-further-mathematics/dimensions/)
