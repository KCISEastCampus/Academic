---
title: 矩阵代数与三维变换
layout: subjects
mathjax: true
grade: a2
subject: a2-further-mathematics
lang: zh-CN
translation_of: /alevel/a2-further-mathematics/matrix-algebra/
permalink: /zh/alevel/a2-further-mathematics/matrix-algebra/
toc_headings: "#dimensions-and-order, #determinants-and-volume, #cofactors-and-inverses, #basis-images, #rotations, #reflections, #compositions, #invariant-points-and-lines, #practice, #common-pitfalls, #sources"
study_page: true
reading_layout: true
---

[高等纯数学](/zh/alevel/a2-further-mathematics/) · FP2.13 矩阵代数

一个矩阵怎样同时表示坐标运算和可以逆转的空间变换？本课把三维变换的计算、几何解释与信息是否丢失联系起来。

- **学习：**回顾[维数](#dimensions-and-order)，连接[行列式与体积](#determinants-and-volume)，再构造[逆矩阵](#cofactors-and-inverses)。
- **作业帮助：**比较[旋转](#rotations)、[反射](#reflections)、[组合](#compositions)和[不变点与不变直线](#invariant-points-and-lines)。
- **复习：**先独立完成[练习](#practice)和[独立重试](#independent-retry)，再展开解答。

**目标：**说明乘积维数是否相容；求三阶行列式与逆矩阵；完整描述规定的空间变换；区分固定点、整条映回自身的直线与被压成一点的直线。

**开始前：**复习 [AS 高数（英文先修）](/alevel/as-further-mathematics/)的矩阵加法、数乘、乘法、转置及二阶逆矩阵，以及[直线与平面](/zh/alevel/a2-further-mathematics/lines-and-planes/)中的坐标向量。全文使用矩阵左乘**列向量（column vector）**的约定。除非另作说明，元素和参数均为实数。

先修回补：乘积维数或元素计算出错，回 [AS 矩阵行列乘法](/zh/alevel/as-further-mathematics/matrix-algebra/#demonstration)；转置与逆混淆，回[逆的作用](/zh/alevel/as-further-mathematics/matrix-algebra/#inverse)；作用顺序出错，回[追踪输入](/zh/alevel/as-further-mathematics/transformations/#demonstration)，然后做本课[非交换重试](#order-retry)。先修不必从整个 AS 目录重找。

## 维数与乘法次序 {#dimensions-and-order}

矩阵的阶数（order）先写行数，再写列数。乘积的每个元素来自第一个矩阵的一行与第二个矩阵的一列的点积：

$$A\text{ is }m\times n,\quad B\text{ is }n\times p
\quad\Longrightarrow\quad AB\text{ is }m\times p,\qquad
(AB)_{ij}=\sum_{k=1}^{n}a_{ik}b_{kj}.$$

乘法要求中间维数相同。加法要求两个矩阵同型；数乘则对每个元素乘同一个数。转置交换行与列，一般并不等于求逆。

$$ (A+B)_{ij}=a_{ij}+b_{ij},\qquad (qA)_{ij}=qa_{ij},\qquad
(A^{\mathsf T})_{ij}=a_{ji},\qquad
(AB)^{\mathsf T}=B^{\mathsf T}A^{\mathsf T}.$$

**Original diagnostic.** Let P have order 2 by 3 and Q have order 3 by 2. State the orders of PQ and QP. Can P have a two-sided inverse? If S acts first and R second, which product represents the composition?

**自拟诊断：**P 为二行三列，Q 为三行二列，判断两个乘积的维数、非方阵能否有双侧逆，以及“先 S 后 R”的乘法顺序。

<details markdown="1">
<summary>解答与反馈</summary>

两个乘积分别为二阶与三阶矩阵，因此不可能相等。非方阵没有双侧逆矩阵；下文的求逆方法适用于方阵。让列向量依次经过变换，可见

$$\mathbf x\longmapsto S\mathbf x\longmapsto R(S\mathbf x)=(RS)\mathbf x.$$

若你写成 SR，先追踪一个输入向量依次经过两个变换的结果，再确定乘法次序。

</details>

<section class="worked-example" markdown="1">

### 非方阵的运算示范 {#non-square-example}

**Original example.** Calculate both products for

**自拟例题：**计算下面两个非方阵在两个次序下的乘积。

$$P=\begin{pmatrix}1&0&2\\0&1&-1\end{pmatrix},\qquad
Q=\begin{pmatrix}1&2\\0&1\\1&0\end{pmatrix}.$$

PQ 的第一个元素由第一行与第一列相乘相加得到：

$$ (PQ)_{11}=1(1)+0(0)+2(1)=3.$$

其余位置依次计算，得

$$PQ=\begin{pmatrix}3&2\\-1&1\end{pmatrix},\qquad
QP=\begin{pmatrix}1&2&0\\0&1&-1\\1&0&2\end{pmatrix}.$$

两个次序的乘积都存在，但维数和内容不同。即使两个矩阵都是方阵，乘法一般也不满足交换律。

</section>

## 行列式与体积 {#determinants-and-volume}

三阶方阵沿第一行展开，得到

$$A=\begin{pmatrix}a&b&c\\d&e&f\\g&h&i\end{pmatrix},\qquad
\det A=a(ei-fh)-b(di-fg)+c(dh-eg).$$

符号正负交替。每个括号都是删去对应元素所在行、列后留下的二阶行列式。可以优先选择零较多的行或列展开，但仍须保留对应的余子式符号。

**Original example.** For

**自拟例题：**对下面矩阵沿第一行展开。

$$N=\begin{pmatrix}1&2&0\\0&1&1\\2&0&1\end{pmatrix},\qquad
\det N=1(1)-2(0-2)=5.$$

### 行列式为什么表示体积倍率 {#volume-meaning}

变换矩阵的三列分别是三个单位基向量的像，它们也是单位立方体变换后平行六面体的三条边。三列的数量三重积等于行列式，因此行列式的绝对值就是这个平行六面体的体积。负行列式表示空间定向反转，不是体积为负。

$$\boxed{V_{\mathrm{image}}=\lvert\det A\rvert V_{\mathrm{original}}.}$$

行列式为零表示整个三维空间被压入一个平面、一条直线或一个点；这样的矩阵称为**奇异矩阵（singular matrix）**。行列式非零则变换可逆。仅仅保持体积，不能证明长度和角度也保持不变。

对同阶方阵，有

$$\boxed{\det(AB)=\det A\det B},\qquad
\det I=1,\qquad \det(A^{-1})=\frac1{\det A}.$$

逆矩阵的行列式公式只在逆确实存在时使用。对三阶矩阵，还有

$$\det(qA)=q^3\det A.$$

所有元素同乘 q，会让三个像边向量各自同乘 q，因此行列式不是仅仅同乘一次 q。

**Original check.** Apply N, then a reflection, then an enlargement of scale factor 2 centred at the origin. Find the signed determinant and the volume scale factor of the whole transformation.

**自拟检查：**依次进行 N、反射、以原点为中心比例为 2 的放大。求整体行列式及体积倍率。

<details markdown="1">
<summary>解答</summary>

反射矩阵的行列式为 −1，放大矩阵的行列式为 8。将反射矩阵记为 F，得到

$$\det((2I)FN)=8(-1)(5)=-40,\qquad
\text{volume scale factor}=40.$$

行列式的正负反映定向，体积倍率则非负。

</details>

## 余子式与逆矩阵 {#cofactors-and-inverses}

一个元素的**子式（minor）**是删去其所在行、列后留下的行列式；**代数余子式（cofactor）**还要乘上下列符号：

$$C_{ij}=(-1)^{i+j}\det A_{(i\mid j)},\qquad
\text{signs}=\begin{pmatrix}+&-&+\\-&+&-\\+&-&+\end{pmatrix}.$$

把各代数余子式放回原位置，组成矩阵 C。它的转置称为**伴随矩阵（adjugate）**。A 乘这个转置后，对角位置是原行列式的展开；非对角位置相当于出现重复行的行列式展开，因此为零。于是

$$AC^{\mathsf T}=C^{\mathsf T}A=(\det A)I,\qquad
\boxed{A^{-1}=\frac1{\det A}C^{\mathsf T}},\quad \det A\ne0.$$

<section class="worked-example" markdown="1">

### 完整三阶求逆示范 {#worked-inverse}

沿上面的同一矩阵 N，行列式为 5，所以可以构造逆。每个代数余子式都先删行删列，再使用棋盘符号；下面列出全部九个计算。

$$\begin{aligned}
C_{11}&=1(1)-1(0)=1,&C_{12}&=-[0(1)-1(2)]=2,&C_{13}&=0(0)-1(2)=-2,\\
C_{21}&=-[2(1)-0(0)]=-2,&C_{22}&=1(1)-0(2)=1,&C_{23}&=-[1(0)-2(2)]=4,\\
C_{31}&=2(1)-0(1)=2,&C_{32}&=-[1(1)-0(0)]=-1,&C_{33}&=1(1)-2(0)=1.
\end{aligned}$$

$$C=\begin{pmatrix}1&2&-2\\-2&1&4\\2&-1&1\end{pmatrix},\qquad
C^{\mathsf T}=\begin{pmatrix}1&-2&2\\2&1&-1\\-2&4&1\end{pmatrix},\qquad
N^{-1}=\frac15 C^{\mathsf T}.$$

转置使第一行余子式变成第一列，不能直接把 C 除以 5。乘回时，先检查一个对角和一个非对角元素，再把两侧完整乘积列出：

$$(NN^{-1})_{11}=\frac{1(1)+2(2)+0(-2)}5=1,\qquad
(NN^{-1})_{12}=\frac{1(-2)+2(1)+0(4)}5=0.$$

$$NC^{\mathsf T}=\begin{pmatrix}5&0&0\\0&5&0\\0&0&5\end{pmatrix},\qquad
C^{\mathsf T}N=\begin{pmatrix}5&0&0\\0&5&0\\0&0&5\end{pmatrix}
\quad\Longrightarrow\quad NN^{-1}=N^{-1}N=I.$$

</section>

<section class="lesson-check" markdown="1">

### 暂停：遮住示范后重构 {#inverse-completion}

这是有支架的重构，不作为新输入的独立求逆证据；新输入在[共同任务](#inverse-system-task)。

**Original completion task.** Calculate the cofactor in row 2, column 3, then transpose the completed cofactor matrix and check one off-diagonal entry of the product with N.

**自拟补步：**计算第二行第三列的代数余子式，转置完成的余子式矩阵，并检验乘回 N 后的一个非对角元素。

<details markdown="1">
<summary>提示</summary>

先删去指定的行、列，再处理负号。检验乘积时，用 N 的一行乘候选逆矩阵的一列，不能拿两行相乘。

</details>

<details markdown="1">
<summary>解答</summary>

$$C_{23}=-\det\begin{pmatrix}1&2\\2&0\end{pmatrix}=4,\qquad
C=\begin{pmatrix}1&2&-2\\-2&1&4\\2&-1&1\end{pmatrix}.$$

先转置，再除以行列式：

$$N^{-1}=\frac15\begin{pmatrix}1&-2&2\\2&1&-1\\-2&4&1\end{pmatrix}.$$

例如第一行与第二列的乘积为零；完整乘回结果为

$$ (NN^{-1})_{12}=\frac{-2+2}{5}=0,\qquad NN^{-1}=N^{-1}N=I.$$

若没有转置 C，一个非零的非对角元素就能否定答案。乘回单位阵，比重新扫读九个代数余子式更能检出错误。

</details>

</section>

<section class="worked-example" markdown="1">

### 改编例题：保留参数限制 {#parameter-inverse}

**Adapted example — OxfordAQA 9665/FM03 January 2025 Q13(a), MS p.20.** The matrix and parameter have been changed. Find when the following matrix is nonsingular, then find its inverse in terms of t.

**改编题：**基于 OxfordAQA 9665/FM03 January 2025 Q13(a)，已读 MS p.20；矩阵和参数已更改。先判断何时非奇异，再用参数表示逆矩阵。

$$N_t=\begin{pmatrix}1&2&0\\0&1&1\\t&0&1\end{pmatrix}.$$

除法之前先求行列式。沿用上面的余子式计算，把左下角元素改成变量。


$$\det N_t=1(1)-2(0-t)=1+2t,\qquad t\ne-\frac12.$$

$$C_t=\begin{pmatrix}1&t&-t\\-2&1&2t\\2&-1&1\end{pmatrix},\qquad C_t^{\mathsf T}=\begin{pmatrix}1&-2&2\\t&1&-1\\-t&2t&1\end{pmatrix}.$$

$$
N_t^{-1}=\frac1{1+2t}\begin{pmatrix}1&-2&2\\t&1&-1\\-t&2t&1\end{pmatrix}.$$

最终答案必须保留参数限制。N_t 乘所给分子矩阵，得到

$$N_t\begin{pmatrix}1&-2&2\\t&1&-1\\-t&2t&1\end{pmatrix}=(1+2t)I.$$

在被排除的参数值，乘积恒等式仍然成立，但不能除以零。把候选逆矩阵中的因子约去，不能让奇异矩阵变成可逆矩阵。

</section>

## 从基向量的像构造矩阵 {#basis-images}

把三个标准基向量记为

$$\mathbf e_x=\begin{pmatrix}1\\0\\0\end{pmatrix},\quad
\mathbf e_y=\begin{pmatrix}0\\1\\0\end{pmatrix},\quad
\mathbf e_z=\begin{pmatrix}0\\0\\1\end{pmatrix}.$$

线性意味着对基向量组合进行变换，等于分别变换后再按原系数组合：

$$A(x\mathbf e_x+y\mathbf e_y+z\mathbf e_z)
=xA\mathbf e_x+yA\mathbf e_y+zA\mathbf e_z,\qquad
A=\begin{pmatrix}\vert&\vert&\vert\\A\mathbf e_x&A\mathbf e_y&A\mathbf e_z\\\vert&\vert&\vert\end{pmatrix}.$$

因此，**基向量的像应放在矩阵的列中**。这也解释了本课所有矩阵变换都固定原点。平移还需要额外的常向量，不能只由这样的一个三阶矩阵表示。

## 旋转 {#rotations}

使用右手坐标系，坐标轴保持固定，向量主动旋转。**正向旋转**约定为：**从旋转轴的正半轴一端朝原点看，逆时针转动**。正向四分之一周旋转的基向量变化遵循循环次序：

$$R_x(\tfrac\pi2):\mathbf e_y\mapsto\mathbf e_z,\qquad
R_y(\tfrac\pi2):\mathbf e_z\mapsto\mathbf e_x,\qquad
R_z(\tfrac\pi2):\mathbf e_x\mapsto\mathbf e_y.$$

![分别从 x、y、z 正半轴朝原点观察的示意图。在各自垂直平面内，正向四分之一周旋转把水平基向量箭头转向竖直基向量箭头；旋转轴正方向朝向观察者。](/assets/img/further-matrix-transformations.svg)

该图用来固定观察约定，不用于透视测量。记

$$c=\cos\theta,\qquad s=\sin\theta.$$

绕 x 轴旋转时，x 方向的基向量不变，另外两个基向量的像为

$$R_x\mathbf e_x=\mathbf e_x,\qquad R_x\mathbf e_y=c\mathbf e_y+s\mathbf e_z,\qquad
R_x\mathbf e_z=-s\mathbf e_y+c\mathbf e_z.$$

将这些像放入各列，就得到下面第一个矩阵。按循环次序更换坐标轴，可得到另两个矩阵：

$$R_x(\theta)=\begin{pmatrix}1&0&0\\0&c&-s\\0&s&c\end{pmatrix}.$$

$$R_y(\theta)=\begin{pmatrix}c&0&s\\0&1&0\\-s&0&c\end{pmatrix}.$$

$$R_z(\theta)=\begin{pmatrix}c&-s&0\\s&c&0\\0&0&1\end{pmatrix}.$$

例如绕 y 轴旋转的矩阵，会使 z 基向量朝 x 基向量转动，符合前述约定。每个旋转矩阵的行列式为 1，逆矩阵由角度取相反数得到。完整描述须给出**变换类型、轴、角度及无歧义的方向**；只写“90 度”不完整。

## 反射与放大 {#reflections}

关于坐标平面的反射改变垂直坐标的符号；关于指定对角平面的反射交换两个坐标，第三个坐标不变。FP2.13 指定的六个反射平面及矩阵如下：

$$S_{x=0}=\begin{pmatrix}-1&0&0\\0&1&0\\0&0&1\end{pmatrix},\qquad
S_{y=0}=\begin{pmatrix}1&0&0\\0&-1&0\\0&0&1\end{pmatrix}.$$

$$S_{z=0}=\begin{pmatrix}1&0&0\\0&1&0\\0&0&-1\end{pmatrix},\qquad
S_{x=y}=\begin{pmatrix}0&1&0\\1&0&0\\0&0&1\end{pmatrix}.$$

$$S_{x=z}=\begin{pmatrix}0&0&1\\0&1&0\\1&0&0\end{pmatrix},\qquad
S_{y=z}=\begin{pmatrix}1&0&0\\0&0&1\\0&1&0\end{pmatrix}.$$

每个反射矩阵的行列式都是 −1，且自身就是其逆矩阵。对对角平面，可以比较一般点及其像相对平面的位移：交换 x、y 会固定平面 x=y 中的点，并反转该平面的法向方向。

以**原点为中心**、比例因子为 k 的放大变换（enlargement）具有矩阵

$$E_k=kI=\begin{pmatrix}k&0&0\\0&k&0\\0&0&k\end{pmatrix},\qquad
\det E_k=k^3,\qquad \text{volume scale factor}=\lvert k\rvert^3.$$

负比例因子使每条径向方向反转；比例因子为零则把整个空间压到原点。只沿一个坐标方向拉伸，不是均匀放大。

## 复合变换与逆向问题 {#compositions}

<section class="worked-example" markdown="1">

### 改编例题：描述、组合与检验 {#composition-example}

**Adapted example — OxfordAQA 9665/FM03 June 2024 Q1, MS p.4.** The rotation angle has been reversed. Let

**改编题：**基于 OxfordAQA 9665/FM03 June 2024 Q1，已读 MS p.4；旋转角的方向已反转。设矩阵如下。

$$R=R_y(-\tfrac\pi2)=\begin{pmatrix}0&0&-1\\0&1&0\\1&0&0\end{pmatrix},\qquad
S=S_{x=0}=\begin{pmatrix}-1&0&0\\0&1&0\\0&0&1\end{pmatrix}.$$

> Describe each transformation fully. Find the matrix for S followed by R, and check whether reversing the order gives the same transformation.

完整描述两个变换；求先 S 后 R 的矩阵，并检验反向次序是否相同。

最右边的矩阵先作用。要否定两个乘积相等，找一个基向量使两者的像不同即可。


R 为绕 y 轴的直角旋转，从 y 正半轴朝原点观察为顺时针；S 为关于平面 x=0 的反射。两个次序的乘积为

$$RS=\begin{pmatrix}0&0&-1\\0&1&0\\-1&0&0\end{pmatrix},\qquad
SR=\begin{pmatrix}0&0&1\\0&1&0\\1&0&0\end{pmatrix}.$$

它们把 x 基向量送往相反的 z 方向。组合 RS 交换 x、z 并同时取反，保持 y；这样描述其坐标作用，就不会误把它当成旋转。

</section>

<section class="worked-example" markdown="1">

### 改编例题：在正确的一侧撤销变换 {#reverse-transformation}

**Adapted example — OxfordAQA 9665/FM03 January 2025 Q3, MS p.6.** The rotation axis and the given matrix have been changed. Three nonsingular matrices satisfy

**改编题：**基于 OxfordAQA 9665/FM03 January 2025 Q3，已读 MS p.6；旋转轴和已知矩阵均已更改。三个非奇异矩阵满足下列关系。

$$AR=B,\qquad R=R_z(\theta),\qquad
B=\begin{pmatrix}0&0&1\\s&c&0\\c&-s&0\end{pmatrix}.$$

> Show that A is independent of the rotation angle, and describe the single transformation represented by A.

证明 A 与旋转角无关，并描述 A 表示的单一变换。

在等式右侧乘 R 的逆矩阵。用正弦、余弦恒等式对任意角度化简；只代入一个数值角度不能证明结果与角度无关。


$$\begin{aligned}
A&=BR^{-1}\\
&=\begin{pmatrix}0&0&1\\s&c&0\\c&-s&0\end{pmatrix}
\begin{pmatrix}c&s&0\\-s&c&0\\0&0&1\end{pmatrix}\\
&=\begin{pmatrix}0&0&1\\0&s^2+c^2&0\\c^2+s^2&0&0\end{pmatrix}\\
&=\begin{pmatrix}0&0&1\\0&1&0\\1&0&0\end{pmatrix}.
\end{aligned}$$

结果中不再含角度，故 A 与旋转角无关。它交换 x、z，因此是关于平面 x=z 的反射。在左侧乘逆矩阵并不能分离 A。

</section>

## 不变点与不变直线 {#invariant-points-and-lines}

**不变点／固定点（fixed point）**在变换前后坐标相同。求全部不变点，就是解

$$A\mathbf r=\mathbf r\quad\Longleftrightarrow\quad(A-I)\mathbf r=\mathbf0.$$

本课所说的**不变直线（invariant line）**，是指**整条直线映到同一整条直线**，但线上的点可以移动。不能只检查一个点或一个方向。对一般直线

$$L:\mathbf r=\mathbf a+t\mathbf d,\qquad t\in\mathbb R,\quad\mathbf d\ne\mathbf0,$$

利用线性可得到以下检验：

$$A\mathbf d=\mu\mathbf d,\qquad
A\mathbf a-\mathbf a=\nu\mathbf d,\qquad
A(\mathbf a+t\mathbf d)=\mathbf a+(\nu+\mu t)\mathbf d.$$

方向的像须与原方向平行，且一个基点的像须落在原直线上。若两个条件成立且倍率非零，新参数能遍历所有实数，因此像是整条原直线。若倍率为零，则整线像只有线上一个点，即发生**退化／压缩（collapse）**，两个点集并不相等。

若要求直线上每一点都固定，条件更强：

$$\boxed{A\mathbf a=\mathbf a,\qquad A\mathbf d=\mathbf d.}$$

<section class="worked-example" markdown="1">

### 不经过原点的直线 {#offset-line}

**Original example.** Consider

**自拟例题：**考虑以下矩阵和不经过原点的直线。

$$D=\begin{pmatrix}2&0&0\\0&1&0\\0&0&1\end{pmatrix},\qquad
L:\mathbf r=\begin{pmatrix}0\\1\\0\end{pmatrix}+t\begin{pmatrix}1\\0\\0\end{pmatrix}.$$

固定点方程和直线上一般点的像分别为

$$D\begin{pmatrix}x\\y\\z\end{pmatrix}=\begin{pmatrix}2x\\y\\z\end{pmatrix},\qquad
\text{fixed points: }x=0,\qquad
D\begin{pmatrix}t\\1\\0\end{pmatrix}=\begin{pmatrix}2t\\1\\0\end{pmatrix}.$$

固定点构成一个平面。L 虽然不经过原点，仍映到自身，因为实参数乘 2 后仍遍历全部实数。但只有参数为零的那个点固定；整条线并非逐点固定。

</section>

<section class="lesson-check" markdown="1">

### 暂停：检查是否整线映满 {#collapse-check}

**Original correction task.** Replace the first diagonal entry of D by zero. A student says, “The direction still lies on L, so L is invariant.” Explain the missing check.

**自拟纠错：**把 D 的第一个对角元素改成零。有人说“方向仍在 L 上，所以 L 不变”，指出遗漏的检验。

<details markdown="1">
<summary>解答与反馈</summary>

修改后的矩阵把 L 上每个点都送到同一点：

$$D_0=\begin{pmatrix}0&0&0\\0&1&0\\0&0&1\end{pmatrix},\qquad
D_0\begin{pmatrix}t\\1\\0\end{pmatrix}=\begin{pmatrix}0\\1\\0\end{pmatrix}.$$

像包含于 L，但不是整条 L。若题目使用“mapped into”而非“onto”，应说明自己证明的是哪种性质。方向向量的零像，不能称为一个非零直线方向。

</details>

</section>

## 练习 {#practice}

以下题目均为自拟题。首次尝试时保持提示和解答关闭。写出理由，不只给矩阵元素。

<section class="lesson-check" markdown="1">

### 第1题：由组合结果反求变换 {#practice-1}

> A transformation T is followed by reflection in the plane y=z. The combined matrix is the identity. Find T and explain why your answer is unique.

先进行未知变换 T，再关于平面 y=z 反射，结果为恒等变换。反求 T，并解释唯一性。

<details markdown="1">
<summary>提示</summary>

按实际作用次序列乘积，再用反射矩阵的逆矩阵分离未知量。

</details>

<details markdown="1">
<summary>解答</summary>

$$S_{y=z}T=I\quad\Longrightarrow\quad T=S_{y=z}^{-1}=S_{y=z}
=\begin{pmatrix}1&0&0\\0&0&1\\0&1&0\end{pmatrix}.$$

反射可逆，因此乘它的逆矩阵只得到一个确定的矩阵。连续反射两次，每个点都回到原位置。

</details>

</section>

<section class="lesson-check" markdown="1">

### 第2题：找错并修正逆矩阵 {#practice-2}

> A student proposes one fifth of the cofactor matrix C in the worked inverse as the inverse of N. Use one product entry to disprove this, then give the corrected matrix. Explain what would happen to the inverse problem if two rows of N were identical.

有人将示范中的代数余子式矩阵 C 除以五，当作 N 的逆。用一个乘积元素否定它并改正；再解释 N 出现重复行时会怎样。

<details markdown="1">
<summary>提示</summary>

检验一个非对角元素。代数余子式矩阵还需要转置；重复行会使行列式为零。

</details>

<details markdown="1">
<summary>解答</summary>

$$\left(N\frac C5\right)_{12}=\frac{1(2)+2(1)+0(-1)}5=\frac45\ne0,\qquad
N^{-1}=\frac15\begin{pmatrix}1&-2&2\\2&1&-1\\-2&4&1\end{pmatrix}.$$

重复行会使矩阵奇异，因而不存在逆矩阵。这不是再转置一次就能修好的余子式符号错误。

</details>

</section>

<section class="lesson-check" markdown="1">

### 第3题：自主选择表征 {#practice-3}

> A map sends each point $(x,y,z)$ to $(y,x,-z)$. Construct its matrix from basis images. Describe it as a composition of two specified reflections, find its volume scale factor, and find all fixed points.

由坐标映射构造矩阵，用两个指定反射解释，求体积倍率及全部固定点。

<details markdown="1">
<summary>提示</summary>

用一次交换和一次符号变化表示变换。再解固定点方程；不能由保持体积推断所有点固定。

</details>

<details markdown="1">
<summary>解答</summary>

$$T=\begin{pmatrix}0&1&0\\1&0&0\\0&0&-1\end{pmatrix}
=S_{z=0}S_{x=y},\qquad \det T=(-1)(-1)=1.$$

体积倍率为 1。固定点方程给出

$$y=x,\quad x=y,\quad -z=z\quad\Longrightarrow\quad
\mathbf r=t\begin{pmatrix}1\\1\\0\end{pmatrix},\quad t\in\mathbb R.$$

这条直线上的点恰为所有固定点。本例的两次反射可以交换次序，但这不能推出矩阵乘法一般可交换。

</details>

</section>

<section class="lesson-check" markdown="1">

### 第4题：检验非原点直线 {#practice-4}

> For D in the offset-line example, decide whether each line is mapped onto itself: (i) $(t,2,3)$; (ii) $(1,t,0)$, with t real. For any invariant line, decide whether it is fixed pointwise. Justify each conclusion with a general point.

用 D 检验两条非原点直线是否整条映回自身，并区分是否逐点固定。每个判断都代入一般点说明。

<details markdown="1">
<summary>提示</summary>

除方向外，还要检查不变的常坐标。像直线与原直线平行，并不意味着两者是同一条线。

</details>

<details markdown="1">
<summary>解答</summary>

$$D\begin{pmatrix}t\\2\\3\end{pmatrix}=\begin{pmatrix}2t\\2\\3\end{pmatrix},\qquad
D\begin{pmatrix}1\\t\\0\end{pmatrix}=\begin{pmatrix}2\\t\\0\end{pmatrix}.$$

第一条线映到自身，但参数非零的点会移动。第二条线映到 x 坐标为 2 的平行线，不是不变直线。只检查方向就会漏掉这个问题。

</details>

</section>

<section class="lesson-check" markdown="1">

## 独立重试 {#independent-retry}

**Original task.** A map sends $(x,y,z)$ to $(-x,z,y)$. Without copying a previous matrix, find its matrix and determinant, all fixed points, and the image of the line $(t,1,1)$. Is that line invariant, fixed pointwise or collapsed? Finally decide whether the plane x=1 is mapped to itself. Choose your methods and justify the claims.

**自拟独立重试：**由新坐标映射构造矩阵，求行列式、固定点和指定直线的像；区分不变、逐点固定和退化，再判断指定平面是否不变。自主选法并说明理由。

<details markdown="1">
<summary>解答——独立尝试后再展开</summary>

$$H=\begin{pmatrix}-1&0&0\\0&0&1\\0&1&0\end{pmatrix},\qquad \det H=1,\qquad
\text{fixed points: }x=0,\ y=z.$$

$$H\begin{pmatrix}t\\1\\1\end{pmatrix}=\begin{pmatrix}-t\\1\\1\end{pmatrix}.$$

所有实参数都能取得，因此该线不变；只有参数为零的点固定，也没有压成一点。x 坐标为 1 的平面映到 x 坐标为 −1 的另一平面。单凭行列式不能回答这些点集是否不变。

</details>

</section>

<section class="lesson-check" markdown="1">

### 新输入共同任务：求逆并解方程 {#inverse-system-task}

> **Original task / 自拟题.** Let

$$
K=\begin{pmatrix}1&1&0\\0&1&1\\1&0&2\end{pmatrix},\qquad
\mathbf b=\begin{pmatrix}3\\5\\7\end{pmatrix}.
$$

> (a) Find the determinant, calculate all nine cofactors, transpose to obtain the inverse, and check both matrix products. (b) **Use your inverse from (a)** to solve $K\mathbf x=\mathbf b$, justify uniqueness and check all three original equations. (c) Replace the bottom-right entry by $q$. Determine when the original system has a unique solution and classify it at the excluded value. At that value, what changes if the third entry of the right side is −2?

<details markdown="1">
<summary>提示</summary>

本题也是下一课的共同任务。余子式放回原位置后转置；解列向量应左乘逆。奇异参数要回原方程比较，不能继续除。

</details>

<details markdown="1">
<summary>解答</summary>

$$\det K=1(2)-1(0-1)=3,\qquad
C_{11}=2,\ C_{12}=1,\ C_{13}=-1,\ C_{21}=-2,\ C_{22}=2,\ C_{23}=1,\ C_{31}=1,\ C_{32}=-1,\ C_{33}=1.$$

$$C=\begin{pmatrix}2&1&-1\\-2&2&1\\1&-1&1\end{pmatrix},\quad
M=C^{\mathsf T}=\begin{pmatrix}2&-2&1\\1&2&-1\\-1&1&1\end{pmatrix},\quad K^{-1}=\frac13M.$$

$$KM=\begin{pmatrix}2+1&-2+2&1-1\\1-1&2+1&-1+1\\2-2&-2+2&1+2\end{pmatrix}=3I.$$

$$MK=\begin{pmatrix}2+1&2-2&-2+2\\1-1&1+2&2-2\\-1+1&-1+1&1+2\end{pmatrix}=3I.$$

$$\mathbf x=K^{-1}\mathbf b
=\frac13\begin{pmatrix}2(3)-2(5)+7\\3+2(5)-7\\-3+5+7\end{pmatrix}
=\frac13\begin{pmatrix}3\\6\\9\end{pmatrix}
=\begin{pmatrix}1\\2\\3\end{pmatrix}.$$

$$1+2=3,\qquad2+3=5,\qquad1+2(3)=7.$$

行列式非零保证解唯一，不只是“算到一组数”。若右下元素改为 q：

$$\det K_q=q+1,\qquad q\ne-1\ \Longrightarrow\ \text{a unique solution}.$$

$$q=-1:\quad x+y=3,\quad y+z=5\quad\Longrightarrow\quad x-z=-2\ne7.$$

故 q 为 −1 时原右端无解。若第三式右端同时改成 −2，则第三式与前两式相容；令 x=t，得到 $(x,y,z)=(t,3-t,2+t)$，是三平面的公共直线。奇异只说明不能用逆，不自动等于无解。

</details>

</section>

<section class="lesson-check" markdown="1">

### 次序错误后的独立重试 {#order-retry}

> **Original task / 自拟题.** A transformation $T$ is followed by reflection in $y=z$. The result is a positive $90^\circ$ rotation about the $z$-axis (viewed from the positive axis towards the origin). Find $T$, justify uniqueness, and use one basis vector to show that writing the product in the reverse order gives a different, incorrect candidate.

<details markdown="1">
<summary>提示</summary>

先从一个输入写出两次作用，再列方程；撤销已知反射时保留乘法侧。

</details>

<details markdown="1">
<summary>解答</summary>

$$S=\begin{pmatrix}1&0&0\\0&0&1\\0&1&0\end{pmatrix},\quad R=\begin{pmatrix}0&-1&0\\1&0&0\\0&0&1\end{pmatrix}.$$

$$ST=R\quad\Longrightarrow\quad T=S^{-1}R=SR
=\begin{pmatrix}0&-1&0\\0&0&1\\1&0&0\end{pmatrix}.$$

$$RS=\begin{pmatrix}0&0&-1\\1&0&0\\0&1&0\end{pmatrix}\ne SR.$$

$$\mathbf e_x\xrightarrow{T}\mathbf e_z\xrightarrow{S}\mathbf e_y=R\mathbf e_x,\qquad
\mathbf e_x\xrightarrow{RS}\mathbf e_y\xrightarrow{S}\mathbf e_z\ne R\mathbf e_x.$$

反射的逆存在，故解唯一。上题结果为恒等时，错误次序可能碰巧得到同一候选；这里直接追踪输入，反序无法通过检查。

</details>

</section>

<section class="lesson-check" markdown="1">

### 三个映射 {#transformation-check}

> **Original task / 自拟题.** Without a transformation-type label, describe each matrix fully and justify your descriptions using basis images or a general point:

$$
U=\begin{pmatrix}1&0&0\\0&0&-1\\0&1&0\end{pmatrix},\quad
V=\begin{pmatrix}0&0&1\\0&1&0\\1&0&0\end{pmatrix},\quad
W=\begin{pmatrix}-2&0&0\\0&-2&0\\0&0&-2\end{pmatrix}.
$$

<details markdown="1">
<summary>提示</summary>

先说明坐标怎样变化，再自行辨认变换；检查描述是否包含决定它所需的全部信息。

</details>

<details markdown="1">
<summary>解答</summary>

$$U\mathbf e_x=\mathbf e_x,\quad U\mathbf e_y=\mathbf e_z,\quad U\mathbf e_z=-\mathbf e_y;\qquad
V(x,y,z)^{\mathsf T}=(z,y,x)^{\mathsf T};\qquad W(x,y,z)^{\mathsf T}=(-2x,-2y,-2z)^{\mathsf T}.$$

U：绕 x 轴正向 90° 旋转，从 x 正半轴朝原点看为逆时针。V：关于平面 x=z 反射；平面内点固定，法向 $(1,0,-1)$ 反向。W：以原点为中心、比例因子 −2 的放大，每个径向都反向；不能漏掉负号或中心。

</details>

</section>

## 快速参考 {#quick-reference}

| 任务 | 检查要点 |
| --- | --- |
| 乘积 | 中间维数相同；最右侧变换先作用。 |
| 三阶行列式 | 余子式正负交替，保留所有参数限制。 |
| 逆矩阵 | 求余子式、转置、除以非零行列式、乘回检验。 |
| 体积 | 行列式取绝对值；组合时行列式相乘。 |
| 旋转 | 轴、角度和观察方向；检验基向量。 |
| 反射 | 指明平面，利用变号或交换坐标。 |
| 放大 | 指明原点为中心及有正负号的比例因子。 |
| 固定点 | 像向量与原向量相同。 |
| 不变直线 | 检查方向、一个基点及是否退化；点可以移动。 |

## 常见错误与下一步 {#common-pitfalls}

- **乘法次序错：**追踪一个列向量依次经过变换，再做[非交换重试](#order-retry)。
- **余子式未转置：**检验非对角乘积，再不看答案重构逆矩阵。
- **行列式倍率错：**三条边各乘同一比例，体积乘该比例的立方。
- **旋转描述不完整：**“顺时针”需要观察方向；按本课基向量的像检验。
- **混淆整线不变与逐点固定：**代入线上一般点，并检查新参数能否遍历所有目标值。
- **误把平行像当同线：**像练习4那样再检验一个基点。

**计算器能检查什么／答卷须写什么：**数值乘积、行列式与逆矩阵可以用来核验答案。书面解答仍须说明维数、题目要求时的余子式构造、参数限制、组合次序和几何描述。符号恒等式需要对所有允许参数成立的推理；少量数值试验不是证明。本课不新增计算器按键流程。

**学后下一步：**完成[新输入共同任务](#inverse-system-task)后，在[线性方程组](/zh/alevel/a2-further-mathematics/linear-equations/#joint-inverse-task)解释同一乘法的方程与平面意义；变换识别用[三个映射](#transformation-check)，不变性错因用[独立重试](#independent-retry)。随后完成课程[跨主题综合](/zh/alevel/a2-further-mathematics/#mixed-review)与隔开学习后的[延后任务](/zh/alevel/a2-further-mathematics/#later-review)。

**学习路径：**[上一课：直线与平面](/zh/alevel/a2-further-mathematics/lines-and-planes/) · [下一课：线性方程组](/zh/alevel/a2-further-mathematics/linear-equations/) · [高等纯数学](/zh/alevel/a2-further-mathematics/)。

## 资料来源 {#sources}

本轮于 **2026-10-23** 重新读取所列大纲与 QP／MS 原文；改编仍以 9665 为目标。

范围依据 OxfordAQA International A-level Further Mathematics **9665** [大纲 Version 5.2，FP2.13，印刷 p.21／PDF p.20](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf#page=20)，以 FPP1.1 的矩阵运算为先修。本课覆盖坐标轴旋转、六个指定反射平面、放大、组合、三阶行列式与逆矩阵、体积倍率及不变点／线；特征值在线性方程组之后学习。

制作改编题前已读 [June 2024 QP Q1 p.3、Q11(a) p.18](/assets/pdf/fx-cg50/references/oxfordaqa-fm03-2024-june-question-paper.pdf)及 [MS pp.4,16](/assets/pdf/fx-cg50/references/oxfordaqa-fm03-2024-june-mark-scheme.pdf)，以及 [January 2025 QP Q3 pp.6–7、Q13 pp.26–27](/assets/pdf/fx-cg50/references/oxfordaqa-fm03-2025-january-question-paper.pdf)及 [MS pp.6,20–21](/assets/pdf/fx-cg50/references/oxfordaqa-fm03-2025-january-mark-scheme.pdf)。改编题修改了矩阵、角度或参数；其他任务均为自拟题，不赋予官方分值。正确数值答案不能代替“show”所要求的证明，也不能跳过题目指定使用前问逆矩阵的要求。
