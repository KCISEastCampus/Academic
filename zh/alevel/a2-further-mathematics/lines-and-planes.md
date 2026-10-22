---
title: 直线与平面
layout: subjects
mathjax: true
grade: a2
subject: a2-further-mathematics
lang: zh-CN
translation_of: /alevel/a2-further-mathematics/lines-and-planes/
permalink: /zh/alevel/a2-further-mathematics/lines-and-planes/
toc_headings: h2, h3, h4
study_page: true
---

[高等纯数学](/zh/alevel/a2-further-mathematics/) · FP2.12 向量与三维坐标几何

不同方程怎样描述同一条直线或同一个平面？几何关系又怎样检查计算？本课学习转换表征、选择方向与法向，并用垂直投影求距离和反射像。

- **学习：**依次学习[方向与直线](#directions-and-lines)、[平面](#planes)、[相交](#intersections)、[夹角](#angles)和[距离](#distances-and-reflections)。
- **作业帮助：**比较 [June 2024 几何题](#example-june-2024)与 [January 2025 表征转换题](#example-january-2025)。
- **复习：**先做[混合独立练习](#practice)，再看[速查](#quick-reference)。

**目标：**把方向比归一化；写出包括叉积形式在内的三种直线方程；连接两种平面式；求交点、交线并区分平行与包含；求线面角和面面角；推导点线、点面距离及反射像。

**开始前：**复习 [MA03 向量](/zh/alevel/a2-mathematics/vectors/)与[向量积及共面](/zh/alevel/a2-further-mathematics/vector-products-and-coplanarity/)。需要点积、叉积、联立方程与非零方向向量。新例题均使用构造的数学数据。

标为 **Original example** 和 **Original task** 的内容均为自拟；官方原题另列资格、考季、题号及配套评分材料定位。

## 方向与直线方程 {#directions-and-lines}

### 方向比与方向余弦 {#direction-cosines}

非零向量 $\mathbf b=(b_1,b_2,b_3)$ 给出**方向比（direction ratios）**$b_1:b_2:b_3$。任意非零倍数描述同一条无向直线。**方向余弦（direction cosines）**是有向方向与各正坐标轴夹角的余弦：

$$l=\frac{b_1}{\lVert\mathbf b\rVert},\qquad m=\frac{b_2}{\lVert\mathbf b\rVert},\qquad n=\frac{b_3}{\lVert\mathbf b\rVert}.$$

它们就是单位方向向量的分量，因此

$$\boxed{l^2+m^2+n^2=\frac{b_1^2+b_2^2+b_3^2}{\lVert\mathbf b\rVert^2}=1.}$$

例如 $\mathbf b=(2,-1,2)$ 的模为 3，方向余弦为 $(2/3,-1/3,2/3)$。第二分量为负，表示与第二条正坐标轴夹角为钝角。整体反向使三个余弦全部变号；只改变其中一个的正负通常会改变直线方向。

二维也同理：方向 $(3,4)$ 的方向余弦是 $(3/5,4/5)$。例如经过 $(1,2)$、沿此方向的直线为

$$\mathbf r=(1,2)+t(3,4),\qquad 4(x-1)-3(y-2)=0.$$

坐标方程消去了参数，法向量与直线方向垂直。三维中也有同样的连接，不过一个线性坐标方程描述的是平面。

### 空间直线的三种形式 {#line-forms}

设 $\mathbf a=(a_1,a_2,a_3)$ 是直线上一点的位置，$\mathbf b\ne\mathbf0$ 为方向。向量／参数形式为

$$\boxed{\mathbf r=\mathbf a+t\mathbf b,\qquad t\in\mathbb R.}$$

所有分母都非零时，消去参数可得笛卡尔对称式：

$$\boxed{\frac{x-a_1}{b_1}=\frac{y-a_2}{b_2}=\frac{z-a_3}{b_3}.}$$

也可以利用“沿直线的位移与方向平行”，写为

$$\boxed{(\mathbf r-\mathbf a)\times\mathbf b=\mathbf0.}$$

基点处位移为零，也包含在该方程中。只有方向非零时，此式才描述直线；方向为零会使任意位置都满足它。

### 示例：方向分量为零 {#example-zero-component}

> **Original example.** Write the line through $A=(1,2,3)$ with direction $(0,2,-1)$ in parametric, Cartesian and cross-product forms. Explain which coordinate stays fixed.

<details markdown="1">
<summary>提示</summary>

方向中的零分量对应固定坐标，不能把零写成分母。

</details>

<details markdown="1">
<summary>解答</summary>

$$\begin{aligned}
\mathbf r&=(1,2,3)+t(0,2,-1),\\
x&=1,\qquad \frac{y-2}{2}=\frac{z-3}{-1},\\
\big(\mathbf r-(1,2,3)\big)\times(0,2,-1)&=\mathbf0.
\end{aligned}$$

第一坐标固定。展开最后一式，也能得到固定坐标条件及另两坐标之间的关系。若两个方向分量为零，应写出两个固定坐标，让第三个自由变化。

</details>

## 平面的两种形式 {#planes}

一个点 $\mathbf a$ 和两个**不平行**的方向 $\mathbf b,\mathbf c$ 确定平面：

$$\boxed{\mathbf r=\mathbf a+\lambda\mathbf b+\mu\mathbf c,\qquad \lambda,\mu\in\mathbb R,\qquad \mathbf b\times\mathbf c\ne\mathbf0.}$$

两个参数独立变化。平行方向只能描述一条直线；两个方向均为零时只描述一点，不能称为平面。

可取非零法向量 $\mathbf n=\mathbf b\times\mathbf c$。面内的任何位移均与它垂直，因此另一种向量形式为

$$\boxed{(\mathbf r-\mathbf a)\cdot\mathbf n=0\quad\Longleftrightarrow\quad\mathbf r\cdot\mathbf n=d,\qquad d=\mathbf a\cdot\mathbf n.}$$

将法向量写成分量，得到笛卡尔形式：

$$n_1x+n_2y+n_3z=d,\qquad \mathbf n=(n_1,n_2,n_3)\ne\mathbf0.$$

法向量和**常数项**同时乘相同非零数，平面不变。除非法向量为单位向量并妥善处理正负号，否则常数本身不是原点到平面的距离。

### 示例：连接不同表征 {#example-plane}

> **Original example.** A plane passes through $A=(1,0,2)$ with directions $\mathbf b=(1,1,0)$ and $\mathbf c=(0,1,1)$. Obtain both vector forms and a Cartesian equation. Explain why the directions determine a plane.

<details markdown="1">
<summary>提示</summary>

叉积给法向量，代入已知点确定常数。

</details>

<details markdown="1">
<summary>解答</summary>

$$\mathbf n=(1,1,0)\times(0,1,1)=(1,-1,1),\qquad d=(1,0,2)\cdot(1,-1,1)=3.$$

法向量非零，说明两方向独立：

$$\boxed{\mathbf r=(1,0,2)+\lambda(1,1,0)+\mu(0,1,1),\qquad\mathbf r\cdot(1,-1,1)=3,\qquad x-y+z=3.}$$

代入一般参数点得到 $1+\lambda-(\lambda+\mu)+2+\mu=3$，证明整族参数点都在该平面内。

</details>

## 相交与特殊情形 {#intersections}

求直线与平面相交时，把直线的一般点代入平面：

$$\mathbf r=\mathbf a+t\mathbf b,\quad\mathbf r\cdot\mathbf n=d
\quad\Longrightarrow\quad t(\mathbf b\cdot\mathbf n)=d-\mathbf a\cdot\mathbf n.$$

- 参数系数非零，恰有一个交点。
- 参数系数为零而右边非零，直线与平面平行且不相交。
- 两边都为零，直线上的每一点都在平面内。

例如，$\mathbf r=(1,0,0)+t(1,1,1)$ 与 $x+y+z=4$ 相交时，$1+3t=4$，得到 $t=1$ 和交点 $(2,1,1)$。代回两个方程检查。

求两直线交点时，使用**不同参数**，逐坐标联立并核对全部三个坐标。解出两个坐标只产生候选值，不保证第三个坐标一致。空间中不平行的直线可以异面，没有公共点。

### 两平面交线：方向加一个公共点 {#plane-intersection}

两个不平行平面的交线方向同时垂直于两个法向量：

$$\mathbf b=\mathbf n_1\times\mathbf n_2\ne\mathbf0.$$

联立两个坐标方程找一个公共点。可以选方便的坐标值，但必须确认剩下方程相容。最后按题目指定形式写交线：公共点须满足**两个**平面，方向须垂直于**两个**法向量。只有方向还不是直线方程。

若法向量平行，应比较完整方程。法向量成比例且常数也按同一比例变化，则平面重合；否则为不同的平行平面。两种情况下，零叉积都不能提供交线方向。

## 夹角：选对向量 {#angles}

两直线的较小夹角使用方向向量；两平面的较小二面角使用法向量：

$$\cos\alpha=\frac{\lvert\mathbf b_1\cdot\mathbf b_2\rvert}{\lVert\mathbf b_1\rVert\lVert\mathbf b_2\rVert},\qquad
\cos\phi=\frac{\lvert\mathbf n_1\cdot\mathbf n_2\rvert}{\lVert\mathbf n_1\rVert\lVert\mathbf n_2\rVert},\qquad 0\leq\alpha,\phi\leq90^\circ.$$

直线与法向量的较小夹角，与线面角**互余**，因此

$$\boxed{\sin\theta=\frac{\lvert\mathbf b\cdot\mathbf n\rvert}{\lVert\mathbf b\rVert\lVert\mathbf n\rVert},\qquad0\leq\theta\leq90^\circ.}$$

直线与平面平行时分子为零，夹角为零；沿法向的直线与平面夹角为直角。检查这两个极限情形，有助于发现误用余弦的问题。若题目指定有向角或钝角，应按给定方向选择，而不是一律取较小角。

![两幅示意：左图直线穿过平面，theta 是直线与面内投影的夹角，另标虚线法向；右图为垂直剖面，P 与反射像 Q 位于平面两侧，H 在平面上且为二者中点。](/assets/img/further-lines-planes.svg)

此图解释角和反射的定义，不含独立练习的坐标或结果。

## 用投影求距离与反射 {#distances-and-reflections}

### 点到直线 {#point-line-distance}

设点的位置为 $\mathbf p$，直线为 $\mathbf r=\mathbf a+t\mathbf b$。最近点 $H$ 满足垂直条件：

$$\mathbf h=\mathbf a+t\mathbf b,\qquad (\mathbf p-\mathbf h)\cdot\mathbf b=0
\quad\Longrightarrow\quad t=\frac{(\mathbf p-\mathbf a)\cdot\mathbf b}{\mathbf b\cdot\mathbf b}.$$

距离就是点与垂足之间位移的模。也可构造以直线方向为底的平行四边形，其高度就是所求距离：

$$\boxed{D_{\mathrm{point,line}}=\lVert\mathbf p-\mathbf h\rVert=\frac{\lVert(\mathbf p-\mathbf a)\times\mathbf b\rVert}{\lVert\mathbf b\rVert}.}$$

两种方法一致。随意选直线上一点，通常得不到最短距离。

### 点到平面与反射 {#point-plane-reflection}

对于平面 $\mathbf r\cdot\mathbf n=d$，从给定点沿法向到达垂足：

$$\mathbf h=\mathbf p+s\mathbf n,\qquad
(\mathbf p+s\mathbf n)\cdot\mathbf n=d\quad\Longrightarrow\quad s=\frac{d-\mathbf p\cdot\mathbf n}{\mathbf n\cdot\mathbf n}.$$

因此

$$\boxed{D_{\mathrm{point,plane}}=\lvert s\rvert\lVert\mathbf n\rVert=\frac{\lvert\mathbf p\cdot\mathbf n-d\rvert}{\lVert\mathbf n\rVert}.}$$

反射中，垂足是**中点**，不是像点。沿相同方向再走一次同样的位移：

$$\boxed{\mathbf q=2\mathbf h-\mathbf p=\mathbf p+2s\mathbf n.}$$

检查中点是否在平面内，以及原像点到像点的位移是否沿法向。原本就在平面上的点保持不动。January 2025 Q11 使用了这种推理；它不改变 FP2.13 对指定反射矩阵的范围限制。

### 补步并检查投影 {#repair-projection}

> **Original task.** For $P=(1,2,3)$ and the plane $x-y+z=0$, a student proposes $H=(1,0,3)$ because its second coordinate has been removed. Check this claim, find the actual foot, and find the reflection of $P$.

<details markdown="1">
<summary>提示</summary>

先检查所提垂足是否在平面上。应沿平面法向移动，不能任意选一条坐标轴。

</details>

<details markdown="1">
<summary>解答</summary>

所提垂足给出 $1-0+3=4$，不在平面内。使用法向量 $(1,-1,1)$，

$$s=\frac{0-(1-2+3)}3=-\frac23,\qquad \mathbf h=(1,2,3)-\frac23(1,-1,1)=\left(\frac13,\frac83,\frac73\right).$$

$$\mathbf q=2\mathbf h-\mathbf p=\left(-\frac13,\frac{10}3,\frac53\right).$$

垂足满足 $1/3-8/3+7/3=0$。原像点到像点的距离是原像点到垂足距离的两倍。垂直位移与中点条件共同验证反射。

</details>

## 逐步撤去支架的官方题 {#official-problems}

### June 2024：确定对象与作答形式 {#example-june-2024}

**OxfordAQA 官方原题：**9665/FM03，June 2024，Q10，QP 第 16–17 页；实际核读配套 MS 第 14–15 页。最终形式也是题目要求的一部分。

> The plane $\Pi_1$ has vector equation
>
> $$\mathbf r\cdot\begin{pmatrix}1\\1\\3\end{pmatrix}=2.$$
>
> The line $L$ has Cartesian equation
>
> $$\frac{x-7}{2}=1-y=\frac{z-3}{4}.$$
>
> (a) Find the acute angle between the line $L$ and the plane $\Pi_1$. Give your answer to the nearest $0.1^\circ$. **[4 marks]**
>
> (b) The point $P$ has coordinates $(4,1,15)$. Find the shortest distance from $P$ to the line $L$. Give your answer in an exact form. **[4 marks]**
>
> (c) The plane $\Pi_2$ has Cartesian equation $x-3y+2z=1$. Find a vector equation for the line of intersection of the planes $\Pi_1$ and $\Pi_2$. Give your answer in the form $(\mathbf r-\mathbf a)\times\mathbf b=\mathbf0$. **[5 marks]**

先写方向与法向。不看方法标签尝试 (b)；(c) 先找方向，再补出所需的一个点。

<details markdown="1">
<summary>提示</summary>

将公共表达式设为参数，方向为 $(2,-1,4)$。(a) 要用余角。(c) 将两个法向量叉乘；找公共点时，可方便地令第二坐标为零。

</details>

<details markdown="1">
<summary>解答</summary>

直线基点为 $(7,1,3)$，方向为 $(2,-1,4)$；第一个平面的法向量为 $(1,1,3)$。因此

$$\sin\theta=\frac{\lvert2-1+12\rvert}{\sqrt{21}\sqrt{11}}=\frac{13}{\sqrt{231}},\qquad\boxed{\theta=58.8^\circ\text{ to the nearest }0.1^\circ.}$$

求距离时，基点到给定点的位移为 $(-3,0,12)$，可用叉积测量其垂直分量：

$$(-3,0,12)\times(2,-1,4)=(12,36,3),\qquad D=\frac{\sqrt{144+1296+9}}{\sqrt{21}}=\boxed{\sqrt{69}}.$$

另用投影检查：参数为 $t=42/21=2$，垂足为 $(11,-1,11)$，位移 $(-7,2,4)$ 与方向的点积为 $-14-2+16=0$，其模平方为 $49+4+16=69$。

对于交线，

$$\mathbf b=(1,1,3)\times(1,-3,2)=(11,1,-4).$$

在两个平面中令第二坐标为零，得到 $x+3z=2$ 和 $x+2z=1$，故可取公共点 $(-1,0,1)$。按指定形式写为

$$\boxed{\big(\mathbf r-(-1,0,1)\big)\times(11,1,-4)=\mathbf0.}$$

检查点：$-1+0+3=2$，且 $-1-0+2=1$。检查方向：$11+1-12=0$，且 $11-3-8=0$。正确参数式虽然表示同一点集，但单独写它没有完成本题指定的最终形式。

</details>

### January 2025：交点、平面与反射 {#example-january-2025}

**OxfordAQA 官方原题：**9665/FM03，January 2025，Q11，QP 第 20–23 页；实际核读配套 MS 第 17–18 页。两条直线使用不同参数。

> The line $L_1$ has Cartesian equation
>
> $$2x-12=\frac{y-7}{2}=5-z.$$
>
> The line $L_2$ has equation
>
> $$\left(\mathbf r-\begin{pmatrix}8\\w\\6\end{pmatrix}\right)\times\begin{pmatrix}-3\\2\\1\end{pmatrix}=\mathbf0\qquad\text{where }w\text{ is a constant.}$$
>
> (a) It is given that $L_1$ and $L_2$ intersect at a point. Find the value of $w$. **[5 marks]**
>
> (b) It is given that $L_1$ and $L_2$ lie in the plane $\Pi$. Find an equation of the plane $\Pi$. Give your answer in the form $\mathbf r\cdot\mathbf n=d$. **[3 marks]**
>
> (c) The point $P$ has position vector
>
> $$\begin{pmatrix}5\\-3\\1\end{pmatrix}.$$
>
> (i) The point $Q$ is the image of $P$ in a reflection in the plane $\Pi$. Find the position vector of $Q$. **[4 marks]**
>
> (ii) Find the exact distance of $P$ from $\Pi$. **[2 marks]**

<details markdown="1">
<summary>提示</summary>

先把两条直线参数化；第一条直线的第一方向分量是二分之一，而不是 2。联立第一、第三坐标求参数，再用第二坐标。(c) 先到垂足，再沿同样方向走相同位移。

</details>

<details markdown="1">
<summary>解答</summary>

$$\mathbf r_1=(6,7,5)+\lambda(1/2,2,-1),\qquad\mathbf r_2=(8,w,6)+\mu(-3,2,1).$$

第一、第三坐标给出

$$\frac12\lambda+3\mu=2,\qquad\lambda+\mu=-1\quad\Longrightarrow\quad\lambda=-2,\quad\mu=1.$$

公共点为 $(5,3,7)$。剩下的坐标给出 $7+2(-2)=w+2(1)$，所以 $w=1$。

求平面时，将方向叉积缩放为整数法向量：

$$ (1/2,2,-1)\times(-3,2,1)=(4,5/2,7),\qquad \mathbf n=(8,5,14).$$

代入第一条直线的基点，

$$d=(6,7,5)\cdot(8,5,14)=48+35+70=153,\qquad\boxed{\mathbf r\cdot(8,5,14)=153.}$$

两方向与法向量的点积都为零，公共点也满足 $40+15+98=153$。

求反射时，沿过给定点的法线寻找垂足：

$$\mathbf h=(5,-3,1)+s(8,5,14),\qquad (5,-3,1)\cdot(8,5,14)=39,\qquad \mathbf n\cdot\mathbf n=285.$$

$$39+285s=153\quad\Longrightarrow\quad s=\frac25,\qquad \mathbf h=\left(\frac{41}5,-1,\frac{33}5\right).$$

$$\boxed{\mathbf q=(5,-3,1)+\frac45(8,5,14)=\left(\frac{57}5,1,\frac{61}5\right)},\qquad\boxed{D=\frac{2\sqrt{285}}5}.$$

原像点与像点的中点就是垂足。将其中点代入平面，得到 $(328+462)/5-5=153$。原像点与像点代入平面方程后的有向残差分别为 −114 和 114，大小相同、正负相反。这些检验区分反射与投影。

</details>

## 混合独立练习 {#practice}

以下均为**自拟题**，无官方分值。关闭例题后独立完成。写清向量代表哪些几何对象，并将最终结果代回原方程。

### 第 1 题：改变平面条件 {#practice-1}

> A line is given by $\mathbf r=(0,1,2)+t(2,0,-1)$. Write its Cartesian and cross-product forms. Determine its relationship to each plane: $\Pi:x-y+z=4$ and $\Sigma:x+2z=5$. Find any intersection and the smaller angle with $\Pi$. Then find the distance of $P=(1,2,3)$ from $\Pi$ and the reflection of $P$ in $\Pi$.

<details markdown="1">
<summary>提示</summary>

一个坐标固定。先把直线一般点代入各平面，再判断能否除以参数系数。点面距离与线面角所用的位移不同。

</details>

<details markdown="1">
<summary>解答</summary>

$$y=1,\qquad\frac{x}{2}=\frac{z-2}{-1},\qquad\big(\mathbf r-(0,1,2)\big)\times(2,0,-1)=\mathbf0.$$

第一个平面给出 $2t-1+2-t=4$，所以 $t=3$，交点为 $(6,1,-1)$。第二个平面中，对任意参数都有 $2t+2(2-t)=4\ne5$，故直线与其平行且不相交。

$$\sin\theta=\frac{\lvert(2,0,-1)\cdot(1,-1,1)\rvert}{\sqrt5\sqrt3}=\frac1{\sqrt{15}},\qquad\theta\approx15.0^\circ.$$

对于给定点与第一个平面，

$$D=\frac{\lvert1-2+3-4\rvert}{\sqrt3}=\frac2{\sqrt3},\qquad s=\frac{4-2}{3}=\frac23.$$

$$\mathbf h=(1,2,3)+\frac23(1,-1,1)=\left(\frac53,\frac43,\frac{11}3\right),\qquad\mathbf q=\left(\frac73,\frac23,\frac{13}3\right).$$

中点位于平面内：$5/3-4/3+11/3=4$。指向像点的位移与法向量平行。

</details>

### 第 2 题：两个平面与夹角 {#practice-2}

> Let $\Pi_1:x+z=2$ and $\Pi_2:y+z=3$. Find their smaller dihedral angle and their intersection in cross-product form. Write a parametric form of $\Pi_1$ using two nonparallel directions. Explain why the planes $x+z=2$ and $2x+2z=5$ have no intersection.

<details markdown="1">
<summary>提示</summary>

交线方向必须同时位于两个平面内。最后一对平面要同时比较法向量和常数。

</details>

<details markdown="1">
<summary>解答</summary>

$$\mathbf n_1=(1,0,1),\quad\mathbf n_2=(0,1,1),\quad\cos\phi=\frac1{\sqrt2\sqrt2}=\frac12,\quad\phi=60^\circ.$$

$$\mathbf n_1\times\mathbf n_2=(-1,-1,1),\qquad\boxed{\big(\mathbf r-(2,3,0)\big)\times(-1,-1,1)=\mathbf0.}$$

该点满足两个平面，方向与两个法向量的点积均为零。第一个平面的一种表示为

$$\mathbf r=(2,0,0)+\lambda(0,1,0)+\mu(-1,0,1).$$

两个方向不平行，所有点的第一与第三坐标之和都符合条件。最后一对平面不同且平行：第一个方程乘二得到 $2x+2z=4$，与另一个常数不一致。

</details>

### 第 3 题：伪交点与新的重试 {#practice-3}

> A student claims that $\mathbf r=(0,0,0)+t(1,1,1)$ and $\mathbf r=(1,0,0)+s(0,1,2)$ meet at $(1,1,1)$ after solving the first two coordinates. Test the claim. Independently, find the nearest point on $\mathbf r=(1,0,0)+u(0,1,1)$ to $P=(3,2,0)$, and find that distance. Finally, describe how the reflection of $P$ in $x=1$ differs from its nearest point on this line.

<details markdown="1">
<summary>提示</summary>

检查候选交点尚未使用的坐标。新任务中，最短位移须垂直于直线方向；平面反射则沿平面法向。

</details>

<details markdown="1">
<summary>解答</summary>

第一坐标迫使 $t=1$，第二坐标迫使 $s=1$，但两条直线的第三坐标分别为 1 和 2。方向又不平行，所以两线异面而非相交。

对于独立距离任务，

$$\mathbf h=(1,u,u),\quad (\mathbf p-\mathbf h)\cdot(0,1,1)=(3-1,2-u,-u)\cdot(0,1,1)=2-2u=0.$$

故 $u=1$，垂足为 $(1,1,1)$，且

$$D=\sqrt{2^2+1^2+(-1)^2}=\sqrt6.$$

平面反射像为 $(-1,2,0)$，只反转沿平面法向的位移。它与原像点的中点为 $(1,2,0)$，在平面上却不在给定直线上。最近点与反射像是不同对象。

</details>

## 快速参考 {#quick-reference}

| 任务 | 选择哪些向量 | 必要检查 |
| --- | --- | --- |
| 方向余弦 | 归一化后的非零方向 | 分量平方和为一 |
| 直线方程 | 一个点与非零方向 | 零方向分量对应固定坐标 |
| 平面方程 | 点与法向，或两个独立面内方向 | 给定点满足方程 |
| 线面交点 | 直线一般点代入平面 | 检查参数系数为零的分支 |
| 两平面交线 | 法向量叉积和一个公共点 | 点与方向均满足两个约束 |
| 线面角 | 直线方向与平面法向 | 使用余角关系 |
| 面面角 | 两个法向量 | 选择题目所求角 |
| 点线距离 | 线上垂足及垂直于方向的位移 | 垂足在直线上 |
| 点面距离 | 沿法向找到的垂足 | 垂足在平面内 |
| 平面反射 | 垂足作中点 | 到垂足的位移再走一次 |
{: .wide-table}

## 常错反馈与下一次尝试 {#common-pitfalls}

- 把坐标前的乘数当方向分量：先引入参数并解出该坐标。
- 对称式出现零分母：改写为固定坐标条件。
- 用两个平行方向表示平面：叉积为零，无法确定平面。
- 两直线只核对两个坐标：必须检查第三个。
- 把一个平面法向当交线方向：正确方向应与两个法向都垂直。
- 把直线与法向夹角当线面角：检查平行与垂直的极限情形。
- 除以零点积：先判定直线被包含还是不相交。
- 把垂足当反射像：使用中点条件，并重复到垂足的位移。

**继续前：**用简短英文解释线面角为何用正弦，面面角为何用余弦。不看提示重做一道投影题，同时检查垂足的归属与位移的垂直性。即使计算器能核算数值，也需要这些书面证据。

**学习路径：**[上一课：向量积与共面](/zh/alevel/a2-further-mathematics/vector-products-and-coplanarity/) · [下一课：矩阵代数](/zh/alevel/a2-further-mathematics/matrix-algebra/) · [高等纯数学](/zh/alevel/a2-further-mathematics/)。

## 来源与范围 {#sources}

- OxfordAQA International A-level Further Mathematics **9665**，Unit FP2/FM03，大纲 **Version 5.2**，[FP2.12，PDF 第 19 页／印刷第 20 页](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf#page=19)：方向比及余弦、笛卡尔几何、两种平面式、叉积直线式、相交与夹角。
- [June 2024 FM03 QP Q10，第 16–17 页](/assets/pdf/fx-cg50/references/oxfordaqa-fm03-2024-june-question-paper.pdf#page=16)与[配套 MS 第 14–15 页](/assets/pdf/fx-cg50/references/oxfordaqa-fm03-2024-june-mark-scheme.pdf#page=14)：线面角、精确点线距离、按指定叉积形式表示交线。
- [January 2025 FM03 QP Q11，第 20–23 页](/assets/pdf/fx-cg50/references/oxfordaqa-fm03-2025-january-question-paper.pdf#page=20)与[配套 MS 第 17–18 页](/assets/pdf/fx-cg50/references/oxfordaqa-fm03-2025-january-mark-scheme.pdf#page=17)：直线交点、平面方程、反射及精确点面距离。

官方题保留英文题干、数据、指定方法／形式和原分值；解答解释与其他任务由作者编写。距离与反射通过投影推导，并有正式卷直接证据。尚未核对公式册具体条目，故不把这些推导关系标为新增必背要求。未新增计算器按键、未声称异面直线距离是大纲独立条目，也未宣称课堂学习效果已验证。
