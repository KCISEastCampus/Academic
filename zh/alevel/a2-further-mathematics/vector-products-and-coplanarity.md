---
title: 向量积与共面
layout: subjects
mathjax: true
grade: a2
subject: a2-further-mathematics
lang: zh-CN
translation_of: /alevel/a2-further-mathematics/vector-products-and-coplanarity/
permalink: /zh/alevel/a2-further-mathematics/vector-products-and-coplanarity/
toc_headings: "#cross-product, #area, #triple-product, #practice, #common-pitfalls, #sources"
study_page: true
reading_layout: true
---

[高等纯数学](/zh/alevel/a2-further-mathematics/) · FP2.12 向量与三维坐标几何

一个垂直方向怎样帮助我们测量面积、体积，以及判断点是否共面？本课连接**向量积（vector product / cross product，叉积）**与**标量三重积（scalar triple product）**。[下一课](/zh/alevel/a2-further-mathematics/lines-and-planes/)用这些工具描述直线与平面。

- **学习：**从[叉积](#cross-product)开始，再联系[面积](#area)和[体积](#triple-product)。
- **作业帮助：**比较[共面与平行条件](#example-coplanar-or-parallel)，以及[含参数的体积](#example-volume)。
- **复习：**关闭解答完成[独立练习](#practice)，尝试后再看[速查](#quick-reference)。

**目标：**计算叉积并检查方向；求三角形及平行四边形面积；计算标量三重积；判断向量或四点是否共面；在体积条件下保留全部参数解。

**开始前：**复习 [MA03 向量](/zh/alevel/a2-mathematics/vectors/)中的分量、模、位移向量与点积。使用右手正交单位坐标系。本课坐标均为数学例题数据，不是实测数据。

标为 **Original diagnostic**、**Original example** 和 **Original task** 的内容均为自拟；官方原题与改编题另列来源标识。

若位移相减出错，回补 [MA03 位置与位移](/zh/alevel/a2-mathematics/vectors/#vectors-and-position-vectors)；若垂直判断出错，回补[点积](/zh/alevel/a2-mathematics/vectors/#scalar-product)，再关闭检查重做下面诊断。第 3 题用到的平面方程在本课的[法向桥接](#plane-bridge)先讲清。

## 先修诊断 {#prerequisite-check}

> **Original diagnostic.** Points $A=(1,0,1)$ and $B=(2,2,1)$ are given. Find $\overrightarrow{AB}$ and decide whether it is perpendicular to $\mathbf v=(2,-1,3)$.

<details markdown="1">
<summary>检查</summary>

终点位置减去起点位置：

$$\overrightarrow{AB}=(2,2,1)-(1,0,1)=(1,2,0),\qquad (1,2,0)\cdot(2,-1,3)=0.$$

两个向量都非零，点积为零证明它们垂直。位置向量从原点指向一个点；边向量连接两个顶点，不能混用。

</details>

## 叉积 {#cross-product}

对于两个非零且不平行的向量，$\mathbf a\times\mathbf b$ 同时垂直于二者。若夹角为 $\theta$，它的模为

$$\boxed{\lVert\mathbf a\times\mathbf b\rVert=\lVert\mathbf a\rVert\lVert\mathbf b\rVert\sin\theta},\qquad 0\leq\theta\leq\pi.$$

方向遵循**右手定则（right-hand rule）**：右手四指沿较小转角从第一个向量转向第二个向量，大拇指所指就是叉积方向。若输入向量平行，或某个输入为零，叉积就是没有方向的零向量。

基向量满足

$$\mathbf i\times\mathbf j=\mathbf k,\qquad \mathbf j\times\mathbf k=\mathbf i,\qquad \mathbf k\times\mathbf i=\mathbf j.$$

交换任意一对的次序会变号。用分配律展开，得到分量公式：

$$\boxed{(a_1,a_2,a_3)\times(b_1,b_2,b_3)
=(a_2b_3-a_3b_2,\ a_3b_1-a_1b_3,\ a_1b_2-a_2b_1).}$$

行列式记法表达同一规则；注意中间项展开前的负号：

$$\mathbf a\times\mathbf b=
\begin{vmatrix}\mathbf i&\mathbf j&\mathbf k\\a_1&a_2&a_3\\b_1&b_2&b_3\end{vmatrix}
=(a_2b_3-a_3b_2)\mathbf i-(a_1b_3-a_3b_1)\mathbf j+(a_1b_2-a_2b_1)\mathbf k.$$

### 性质与检验 {#properties}

对于实数 $s,t$：

$$\begin{aligned}
\mathbf b\times\mathbf a&=-\mathbf a\times\mathbf b,\\
\mathbf a\times(\mathbf b+\mathbf c)&=\mathbf a\times\mathbf b+\mathbf a\times\mathbf c,\\
(s\mathbf a)\times(t\mathbf b)&=st(\mathbf a\times\mathbf b),\\
\mathbf a\times\mathbf a&=\mathbf0.
\end{aligned}$$

叉积的结果是**向量**，点积的结果是**标量**。叉积不满足结合律，括号位置会改变结果。例如，

$$\mathbf i\times(\mathbf i\times\mathbf j)=-\mathbf j,\qquad (\mathbf i\times\mathbf i)\times\mathbf j=\mathbf0.$$

计算后，将叉积分别与两个输入向量作点积，两次都应为零。不过，仅凭这项检查还不能确定模和正负方向都正确。

<section class="worked-example" markdown="1">

### 示例：计算并核验 {#example-cross-product}

> **Original example.** For $\mathbf a=(1,2,0)$ and $\mathbf b=(0,1,2)$, find $\mathbf a\times\mathbf b$ and check perpendicularity.

分别计算三个分量。中间分量是 $a_3b_1-a_1b_3$。


$$\mathbf a\times\mathbf b=(2\cdot2-0\cdot1,\ 0\cdot0-1\cdot2,\ 1\cdot1-2\cdot0)=(4,-2,1).$$

$$\begin{aligned}
(4,-2,1)\cdot(1,2,0)&=4-4=0,\\
(4,-2,1)\cdot(0,1,2)&=-2+2=0.
\end{aligned}$$

两次垂直检验都成立。若交换输入次序，结果取负，但模不变。

</section>

## 由两条边求面积 {#area}

相邻边为 $\mathbf a,\mathbf b$ 的平行四边形，面积等于底乘垂直高度。以第一条边为底，高是第二条边的长度乘夹角的正弦。因此

$$\boxed{A_{\mathrm{parallelogram}}=\lVert\mathbf a\times\mathbf b\rVert,\qquad A_{\mathrm{triangle}}=\frac12\lVert\mathbf a\times\mathbf b\rVert.}$$

对于顶点为 $A,B,C$ 的三角形，先选**同一个顶点**作两条边的起点：

$$A_{ABC}=\frac12\lVert(\mathbf b-\mathbf a)\times(\mathbf c-\mathbf a)\rVert.$$

上例平行四边形面积为 $\sqrt{21}$，三角形面积为 $\frac12\sqrt{21}$ 平方单位。交换两边只改变法向方向，两种面积均不变。

![平行六面体示意：从 A 出发的相邻底边 u、v，第三条边 w，垂直底面的法向 N 和虚线垂直高度 h；不按比例。](/assets/img/further-vector-products.svg)

此图连接底面积与下文的垂直高度，是概念示意，不对应独立练习的待求结果。

<section class="lesson-check" markdown="1">

### 补步与纠错 {#repair-area}

> **Original task.** A student uses the vectors in the previous example and writes “triangle area $=\sqrt{4^2+(-2)^2+1^2}$”. Correct the statement. Another student says a zero cross product supplies a normal direction: explain the problem.

<details markdown="1">
<summary>提示</summary>

先判断叉积的模对应哪一种图形，再区分零向量与方向。

</details>

<details markdown="1">
<summary>解答</summary>

$$A_{\mathrm{triangle}}=\frac12\sqrt{4^2+(-2)^2+1^2}=\frac{\sqrt{21}}2.$$

原式是平行四边形的面积。叉积为零表示输入向量线性相关；二者非零时就是平行。零向量不能指定法向方向，两条平行方向也不能唯一确定平面。

</details>

</section>

## 标量三重积与体积 {#triple-product}

取从平行六面体同一顶点出发的三条边 $\mathbf u,\mathbf v,\mathbf w$。底面不退化时，$\mathbf u\times\mathbf v$ 的方向是底面法向，模等于底面积。将第三条边投影到单位法向上，得到**有向高度**：

$$h_{\mathrm{signed}}=\frac{\mathbf w\cdot(\mathbf u\times\mathbf v)}{\lVert\mathbf u\times\mathbf v\rVert}.$$

底面积乘高度的绝对值，得到

$$\boxed{V=\lvert\mathbf w\cdot(\mathbf u\times\mathbf v)\rvert.}$$

绝对值内部的标量称为**标量三重积**。循环换位保持数值不变；交换其中两个向量则变号：

$$\mathbf u\cdot(\mathbf v\times\mathbf w)=\mathbf v\cdot(\mathbf w\times\mathbf u)=\mathbf w\cdot(\mathbf u\times\mathbf v).$$

$$\mathbf u\cdot(\mathbf v\times\mathbf w)=-\mathbf u\cdot(\mathbf w\times\mathbf v).$$

正负号描述取向，不表示负的几何体积。底面退化时，三重积与体积都为零；此时不能除以零底面积。

### 为什么零值表示共面 {#coplanarity}

前两个向量独立时，叉积给出非零法向。第三个向量沿此法向的分量为零，当且仅当它位于前两个向量张成的平面内。前两个向量相关时，三个向量本来也至多张成一个平面。因此，包括退化情形在内，

$$\boxed{\mathbf u,\mathbf v,\mathbf w\text{ are coplanar}\iff\mathbf u\cdot(\mathbf v\times\mathbf w)=0.}$$

这里把自由向量平移至共同起点。判断**四个点**时，应从同一顶点作三个位移向量：

$$A,B,C,D\text{ are coplanar}\iff(\mathbf b-\mathbf a)\cdot\big((\mathbf c-\mathbf a)\times(\mathbf d-\mathbf a)\big)=0.$$

三个位置向量共面检验的是经过原点的平面，通常不能判断四个给定点是否共面。前三点共线时也不能确定唯一平面，尽管对任意第四点，四点检验的三重积都为零。

<section class="worked-example" markdown="1">

### 示例：共面还是平行 {#example-coplanar-or-parallel}

**OxfordAQA 官方原题：**9665/FM03，June 2024，Q2，QP 第 4 页；实际核读配套 MS 第 5 页。各小问描述不同情形。

> The vectors $\mathbf a$, $\mathbf b$ and $\mathbf c$ are given by
>
> $$\mathbf a=\mathbf i+2\mathbf j+3\mathbf k,\qquad \mathbf b=3\mathbf i+3\mathbf j+5\mathbf k,\qquad \mathbf c=-3\mathbf i+t\mathbf j+9\mathbf k$$
>
> where $t$ is a real number.
>
> (a) Find $\mathbf a\times\mathbf b$. **[1 mark]**
>
> (b) In the case when $\mathbf a$, $\mathbf b$ and $\mathbf c$ are coplanar, use a scalar triple product to find the value of $t$. **[3 marks]**
>
> (c) In the case when $\mathbf c$ is parallel to $\mathbf a\times\mathbf b$ find the value of $t$. **[2 marks]**

下面完整示范怎样把两个不同几何条件分别写成方程；随后在独立题中自行选择条件。

(b) 使用的三重积为 $(\mathbf a\times\mathbf b)\cdot\mathbf c$。(c) 写出 $\mathbf c=\lambda(\mathbf a\times\mathbf b)$，检查全部三个分量。


$$\mathbf a\times\mathbf b=(10-9,\ 9-5,\ 3-6)=(1,4,-3).$$

它同时垂直于输入向量：$1+8-9=0$，且 $3+12-15=0$。共面条件给出

$$-3+4t-27=0\quad\Longrightarrow\quad\boxed{t=\frac{15}2}.$$

另一种独立的平行情形给出

$$(-3,t,9)=\lambda(1,4,-3)\quad\Longrightarrow\quad\lambda=-3,\qquad\boxed{t=-12}.$$

第三个分量也吻合：$9=(-3)(-3)$。第一种情形中，第三个向量位于该平面内；第二种情形中，它沿平面的法向。二者的几何条件不同。

</section>

<section class="worked-example" markdown="1">

### 示例：体积条件的两个参数解 {#example-volume}

**改编自 OxfordAQA 9665/FM03，January 2025，Q1**，QP 第 2–3 页；实际核读配套 MS 第 4 页。以“同一顶点的相邻边”文字条件替代原图，坐标与体积保留；此改编不附官方分值。

> A parallelepiped has adjacent edges $AB$, $AC$ and $AD$ from $A$. Its vertices have position vectors
>
> $$\mathbf a=(3,4,2),\quad\mathbf b=(k+4,6,3),\quad\mathbf c=(6,7,3),\quad\mathbf d=(k+5,3,5),\qquad k\in\mathbb R.$$
>
> Its volume is 4 cubic units. Find all possible values of $k$.

先求边向量再作运算。绝对值等于正数时，对应两个带正负号的方程。


$$\overrightarrow{AB}=(k+1,2,1),\quad\overrightarrow{AC}=(3,3,1),\quad\overrightarrow{AD}=(k+2,-1,3).$$

$$\overrightarrow{AB}\times\overrightarrow{AC}=(-1,\ 2-k,\ 3k-3).$$

$$\begin{aligned}
(\overrightarrow{AB}\times\overrightarrow{AC})\cdot\overrightarrow{AD}
&=-(k+2)-(2-k)+3(3k-3)\\
&=9k-13.
\end{aligned}$$

因此

$$\lvert9k-13\rvert=4\quad\Longrightarrow\quad 9k-13=4\ \text{or}\ 9k-13=-4\quad\Longrightarrow\quad\boxed{k=\frac{17}9\ \text{or}\ k=1}.$$

代回分别得到有向三重积 4 和 −4，两者均给出所需的非零体积。只保留正的有向三重积，会漏掉一个有效构型。

</section>

<section class="worked-example" markdown="1">

### 从法向到平面方程 {#plane-bridge}

两条独立面内边的叉积给出非零法向 $\mathbf n$。若已知平面过点 $A$，面内任意位移 $\mathbf r-\mathbf a$ 都垂直于 $\mathbf n$，所以

$$\mathbf n\cdot(\mathbf r-\mathbf a)=0
\iff \mathbf n\cdot\mathbf r=\mathbf n\cdot\mathbf a.$$

例如，过 $(0,1,2)$、法向为 $(1,2,-1)$ 的平面满足

$$x+2(y-1)-(z-2)=0\iff x+2y-z=0.$$

法向非零，因此确为平面；代入已知点得 $0+2-2=0$。用这座桥检查四点题；[下一课](/zh/alevel/a2-further-mathematics/lines-and-planes/#planes)再发展其他平面表示。

</section>

## 独立练习 {#practice}

本节全部是**自拟题**，无官方分值。自行选择方法，先完成完整尝试，再展开解答。

<section class="lesson-check" markdown="1">

### 第 1 题：四个点不等于三个位置向量 {#practice-1}

> Points $A=(1,0,1)$, $B=(2,2,1)$, $C=(1,1,3)$ and $D=(2,3,k)$ are given. Find $k$ so that all four points lie in one plane. Find the area of triangle $ABC$. Explain why using $\mathbf a\cdot(\mathbf b\times\mathbf c)$ alone would answer a different question.

<details markdown="1">
<summary>提示</summary>

选择一个共同顶点；两部分计算都可使用三角形的那两条边。

</details>

<details markdown="1">
<summary>解答</summary>

$$\overrightarrow{AB}=(1,2,0),\quad\overrightarrow{AC}=(0,1,2),\quad\overrightarrow{AD}=(1,3,k-1).$$

$$\overrightarrow{AB}\times\overrightarrow{AC}=(4,-2,1),\qquad (4,-2,1)\cdot(1,3,k-1)=k-3.$$

所以 $k=3$，且

$$A_{ABC}=\frac12\sqrt{16+4+1}=\frac{\sqrt{21}}2.$$

所提的位置向量运算检验原点和前三点是否共面，根本没有使用第四个点。另一个检查是三角形所在的平面：$4x-2y+z=5$，第四点恰好在所求参数值处满足它。

</details>

</section>

<section class="lesson-check" markdown="1">

### 第 2 题：从法向条件反求参数 {#practice-2}

> Let $\mathbf u=(1,1,0)$ and $\mathbf v=(2,s,1)$. Find $s$ so that $\mathbf u\times\mathbf v$ is parallel to $(1,-1,2)$. Is it possible for these two inputs to be parallel for any $s$? Justify both answers.

<details markdown="1">
<summary>提示</summary>

先用参数表示叉积，再与给定方向的倍数逐分量比较。检查该叉积有没有可能为零。

</details>

<details markdown="1">
<summary>解答</summary>

$$\mathbf u\times\mathbf v=(1,-1,s-2)=\lambda(1,-1,2)\quad\Longrightarrow\quad\lambda=1,\qquad s=4.$$

叉积的第一个分量恒为 1，因此不可能为零，两个输入向量不可能平行。“非零倍数”与“零积”不是同一条件。

</details>

</section>

<section class="lesson-check" markdown="1">

### 第 3 题：独立重试 {#practice-3}

> Without reopening Question 1, use $A=(2,1,0)$, $B=(3,1,1)$, $C=(2,3,1)$ and $D=(4,3,h)$. Determine when these four points are coplanar. Check your result using a plane equation and find the area of triangle $ABC$.

<details markdown="1">
<summary>提示</summary>

非零叉积给出法向；通过共同顶点的平面上，每一点的位置向量与该法向的点积都相同。

</details>

<details markdown="1">
<summary>解答</summary>

$$\overrightarrow{AB}=(1,0,1),\quad\overrightarrow{AC}=(0,2,1),\quad\overrightarrow{AD}=(2,2,h).$$

$$\overrightarrow{AB}\times\overrightarrow{AC}=(-2,-1,2),\qquad (-2,-1,2)\cdot(2,2,h)=2h-6.$$

因此 $h=3$。前三点所在平面为 $-2x-y+2z=-5$；代入第四点得到 $-8-3+2h=-5$，再次得到 $h=3$。

$$A_{ABC}=\frac12\sqrt{4+1+4}=\frac32.$$

</details>

</section>

<section class="lesson-check" markdown="1">

### 第 4 题：改变一条边后的体积 {#practice-4}

> Adjacent edges of a parallelepiped are $\mathbf u=(2,1,0)$, $\mathbf v=(1,0,2)$ and $\mathbf w=(0,k,1)$. Its volume is 3 cubic units. Find every possible value of $k$. Without repeating all the component arithmetic, explain what happens to the volume if the third edge is replaced by $\mathbf w+\mathbf u$, or by $2\mathbf w$.

<details markdown="1">
<summary>提示</summary>

体积要取绝对值。底面法向与任意底边垂直，点积对加法满足分配律。

</details>

<details markdown="1">
<summary>解答</summary>

$$\mathbf u\times\mathbf v=(2,-4,-1),\qquad (\mathbf u\times\mathbf v)\cdot\mathbf w=-4k-1.$$

$$\lvert-4k-1\rvert=3\quad\Longrightarrow\quad\boxed{k=-1\ \text{or}\ k=\frac12}.$$

加上一条底边不改变有向垂直高度：

$$\begin{aligned}
(\mathbf u\times\mathbf v)\cdot(\mathbf w+\mathbf u)
&=(\mathbf u\times\mathbf v)\cdot\mathbf w+(\mathbf u\times\mathbf v)\cdot\mathbf u\\
&=(\mathbf u\times\mathbf v)\cdot\mathbf w.
\end{aligned}$$

因此体积仍为 3 立方单位。第三条边加倍使有向高度加倍，体积成为 6 立方单位。这里用的是运算性质，不只是换一组数再代入。

</details>

</section>

## 快速参考 {#quick-reference}

| 任务 | 方法 | 条件或检查 |
| --- | --- | --- |
| 垂直向量 | 叉积 | 输入独立时结果才非零 |
| 平行四边形面积 | 叉积的模 | 同一顶点的相邻边 |
| 三角形面积 | 上述模的一半 | 使用边向量而非任意位置向量 |
| 平行六面体体积 | 标量三重积的绝对值 | 三条相邻边，结果非负 |
| 向量共面 | 标量三重积为零 | 包括相关或含零输入的情形 |
| 点共面 | 从一个顶点作三个位移 | 区分经过原点的平面 |
{: .wide-table}

## 常错反馈与下一次尝试 {#common-pitfalls}

- 中间分量符号错：单独展开，再与**两个**输入向量分别作点积。
- 叉积题只写一个数：保留三个分量；题目问面积或距离时才取模。
- 面积或体积为负：区分有向运算与非负几何量。
- 把零向量称为法向方向：原方向相关，需要再找一个独立方向才能描述平面。
- 体积只得到一个参数解：化简前先列出两个带正负号的方程。
- 位置向量充当边：先减去同一个起点的位置向量。

**学后下一步：**位置向量误作边或平面检查失败，先回[法向桥接](#plane-bridge)，再关闭帮助完成[第 3 题](#practice-3)；绝对值漏支则完成[第 4 题](#practice-4)。随后做课程入口的[跨主题综合](/zh/alevel/a2-further-mathematics/#mixed-review)，隔开一段学习后完成[延后任务](/zh/alevel/a2-further-mathematics/#later-review)，把反射平面的法向与矩阵变换联系起来。

**学习路径：**[上一课：二阶微分方程](/zh/alevel/a2-further-mathematics/second-order-differential-equations/) · [下一课：直线与平面](/zh/alevel/a2-further-mathematics/lines-and-planes/) · [高等纯数学](/zh/alevel/a2-further-mathematics/)。

## 来源与范围 {#sources}

本轮于 **2026-10-23** 重新读取下列 9665 大纲及所列 QP／MS 原文；不是沿用旧报告的已读状态。

- OxfordAQA International A-level Further Mathematics **9665**，Unit FP2/FM03，大纲 **Version 5.2**，[FP2.12，PDF 第 19 页／印刷第 20 页](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf#page=19)。本课涵盖向量积、面积、标量三重积、体积与共面；下一课承接直线与平面几何。
- [June 2024 FM03 QP，Q2 第 4 页](/assets/pdf/fx-cg50/references/oxfordaqa-fm03-2024-june-question-paper.pdf#page=4)与[配套 MS 第 5 页](/assets/pdf/fx-cg50/references/oxfordaqa-fm03-2024-june-mark-scheme.pdf#page=5)：上文原题保留指定的标量三重积方法。
- [January 2025 FM03 QP，Q1 第 2–3 页](/assets/pdf/fx-cg50/references/oxfordaqa-fm03-2025-january-question-paper.pdf#page=2)与[配套 MS 第 4 页](/assets/pdf/fx-cg50/references/oxfordaqa-fm03-2025-january-mark-scheme.pdf#page=4)：上文以相邻边说明替代原图的改编例题。两个正负参数分支均独立重算。

尚未核对公式册中的具体收录项目，因此本课解释推导，不另设必须背诵的公式清单。解答与自拟题由作者编写，来源分值仅属于未改动的官方原题。未宣称核验过计算器按键或课堂学习效果。
