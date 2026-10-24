---
title: 特征值与特征向量
layout: subjects
mathjax: true
grade: a2
subject: a2-further-mathematics
lang: zh-CN
translation_of: /alevel/a2-further-mathematics/eigenvalues-and-eigenvectors/
permalink: /zh/alevel/a2-further-mathematics/eigenvalues-and-eigenvectors/
toc_headings: "#definition, #characteristic-equation, #two-by-two, #three-by-three, #repeated-eigenvalues, #invariant-directions, #practice, #repeated-retry, #common-pitfalls, #sources"
study_page: true
reading_layout: true
---

[高等纯数学](/zh/alevel/a2-further-mathematics/) · FP2.13 特征值与特征向量

矩阵通常会改变向量的长度和方向。但有些向量只沿原来的直线伸长、缩短或反向。怎样找到这些特别的向量？

- **学习：**从[定义](#definition)出发，推导[特征方程](#characteristic-equation)，再比较[二阶](#two-by-two)与[三阶](#three-by-three)示范。
- **作业帮助：**查看[参数与根](#parameter-example)、[重复特征值](#repeated-eigenvalues)及[不变直线的联系](#invariant-directions)。
- **复习：**先做[综合练习](#practice)，再关闭解释完成[独立重试](#independent-retry)。

**目标：**建立并展开二阶、三阶特征方程；求实特征值及对应的非零特征向量；解释零、负值和重复特征值；从方程判断独立方向数，而非直接数根的重数。

**开始前：**完成[矩阵代数](/zh/alevel/a2-further-mathematics/matrix-algebra/)、[线性方程组](/zh/alevel/a2-further-mathematics/linear-equations/)及[根与多项式](/zh/alevel/a2-further-mathematics/roots-and-polynomials/)。需要行列式、齐次方程组、因式分解及根与系数关系。FP2.13 的范围为**实特征值**，包括重复值；本课不需要对角化。

一般实矩阵也可能具有非实特征值；本课只处理 FP2.13 规定的实特征值情形。下文所有自由参数均为实数。

若矩阵乘向量不能逐行算，回[行列乘法](/zh/alevel/as-further-mathematics/matrix-algebra/#demonstration)后重做[像的检查](#image-check)；若自由参数或非零限制不清，先做[齐次方程第 6 题](/zh/alevel/a2-further-mathematics/linear-equations/#question-6)；若根系数比较出错，回[根与系数](/zh/alevel/a2-further-mathematics/roots-and-polynomials/#roots-and-coefficients)后重建本课参数例题。

## 定义与初步判断 {#definition}

先看两个向量经过同一个变换后有什么不同。向量乘上矩阵后得到的结果，称为它的**像（image）**。

<section class="worked-example" markdown="1">

### 比较两个变换结果 {#direction-start}

**Self-written illustration.** Compare the images of the two vectors under

**自拟示范：**比较两个向量经过下面矩阵变换后的结果。

$$D_0=\begin{pmatrix}2&0\\0&3\end{pmatrix}.$$

$$\mathbf p=\begin{pmatrix}1\\0\end{pmatrix},\qquad
\mathbf q=\begin{pmatrix}1\\1\end{pmatrix}.$$

按行相乘相加：

$$\begin{aligned}
D_0\mathbf p&=\begin{pmatrix}2(1)+0(0)\\0(1)+3(0)\end{pmatrix}\\
&=\begin{pmatrix}2\\0\end{pmatrix}=2\mathbf p.
\end{aligned}$$

第一个向量仍在水平轴上，长度变成原来的两倍。

$$\begin{aligned}
D_0\mathbf q&=\begin{pmatrix}2(1)+0(1)\\0(1)+3(1)\end{pmatrix}\\
&=\begin{pmatrix}2\\3\end{pmatrix}.
\end{aligned}$$

第二个向量原来的两个分量相等，变换后却不相等。找不到同一个数，让原来的两个分量都乘上它后得到这个结果，所以方向改变了。

</section>

第一个向量就叫**特征向量（eigenvector）**，它对应的倍数 2 叫**特征值（eigenvalue）**。一般地，对实方阵 A，用下面的式子表示：

$$\boxed{A\mathbf v=\lambda\mathbf v,\qquad\mathbf v\ne\mathbf0.}$$

这句话的意思是：“用 A 变换这个向量”，结果与“把它乘上一个数 lambda”相同。这个普通的数也叫标量（scalar）。

向量本身不能为零：零向量不管乘什么数都满足等式，不能告诉我们哪个方向特别。但**特征值**可以为零，表示一个非零向量变换后变成零。这样的矩阵无法还原变换，称为奇异矩阵（singular matrix）。

- 正特征值表示沿同一射线伸缩。
- 负特征值反转射线方向，但仍在同一条过原点的直线上。
- 特征值为 1 时，该方向上的每个点都固定。
- 特征值为 0 时，该方向被压到原点。

<section class="lesson-check" markdown="1">

### 检查向量的像 {#image-check}

**Original diagnostic.** For the following matrix, calculate the images of both given vectors. Which is an eigenvector, and what is its eigenvalue?

**自拟诊断：**计算下面两个给定向量的像，判断谁是特征向量，并说明对应特征值。

$$A=\begin{pmatrix}2&1\\1&2\end{pmatrix},\qquad
\mathbf u=\begin{pmatrix}1\\1\end{pmatrix},\qquad
\mathbf w=\begin{pmatrix}1\\0\end{pmatrix}.$$

<details markdown="1">
<summary>解答与反馈</summary>

$$A\mathbf u=\begin{pmatrix}3\\3\end{pmatrix}=3\mathbf u,\qquad
A\mathbf w=\begin{pmatrix}2\\1\end{pmatrix}.$$

第一个向量是特征值 3 对应的特征向量；第二个像不是第二个输入向量的标量倍数，所以第二个输入不是特征向量。用分量比例判断时，零分量也必须满足条件；只除非零的第一分量，会漏掉第二分量的矛盾。

</details>

</section>

## 推导特征方程 {#characteristic-equation}

给定一个向量，我们可以直接乘回去检查。要找出所有可能的特征值，就需要建立关于那个倍数的方程。先把等式右边移到左边；I 是单位矩阵，乘它不会改变向量：

$$A\mathbf v=\lambda\mathbf v
\quad\Longleftrightarrow\quad(A-\lambda I)\mathbf v=\mathbf0.$$

这是一组右边全是零的联立方程，叫**齐次方程组（homogeneous system）**。如果系数矩阵有逆，左乘这个逆就只能得到零向量。我们需要**非零**向量，所以系数矩阵必须没有逆，也就是行列式等于零。反过来，行列式为零的方阵确实能让这组齐次方程有非零解。因此得到**特征方程（characteristic equation）**：

$$\boxed{\det(A-\lambda I)=0.}$$

标量只从对角元素中减去。也可以使用另一种同样有效的行列式约定：

$$\det(\lambda I-A)=(-1)^n\det(A-\lambda I),\qquad A\text{ of order }n.$$

三阶时两种多项式整体差一个负号，但根相同。利用根与系数关系时，必须从头到尾使用一致的约定。

### 求根后怎样求特征向量 {#finding-vectors}

对每个特征值，代回齐次方程组，用自由参数写出全部解，排除全零情况，并乘回核验。不能对特征值处的系数矩阵求逆——此时它本来就应当奇异。

$$A\mathbf v=\lambda\mathbf v\quad\Longrightarrow\quad
A(q\mathbf v)=\lambda(q\mathbf v),\qquad q\ne0.$$

非零数乘一个特征向量，得到的仍是同一特征值对应的特征向量。只有题目要求时才需要单位长度；方便时可选整数分量。

<section class="worked-example" markdown="1">

## 二阶矩阵示范 {#two-by-two}

对诊断题中的矩阵，展开行列式：

$$\det(A-\lambda I)
=\det\begin{pmatrix}2-\lambda&1\\1&2-\lambda\end{pmatrix}
=(2-\lambda)^2-1=(\lambda-3)(\lambda-1).$$

代入第一个根，解方程组：

$$\lambda=3:\quad -x+y=0,\quad x-y=0
\quad\Longrightarrow\quad\mathbf v=t\begin{pmatrix}1\\1\end{pmatrix},\quad t\ne0.$$

令行列式等于零，得到两个根 1、3。上面解出了根 3 的全部非零向量；取 t=1 乘回检查：

$$A\begin{pmatrix}1\\1\end{pmatrix}=\begin{pmatrix}3\\3\end{pmatrix}=3\begin{pmatrix}1\\1\end{pmatrix}.$$

</section>

<section class="lesson-check" markdown="1">

### 暂停：解另一个根 {#other-root-task}

**Original completion task.** Find all eigenvectors for the other root and check one directly.

**自拟补步：**求另一个根对应的全部特征向量，并直接检验一个。

<details markdown="1">
<summary>提示</summary>

写出两个齐次方程。它们实际上给出同一个约束，所以剩一个自由参数。

</details>

<details markdown="1">
<summary>解答</summary>

$$\lambda=1:\quad x+y=0,\quad
\mathbf v=t\begin{pmatrix}1\\-1\end{pmatrix},\quad t\ne0,\qquad
A\begin{pmatrix}1\\-1\end{pmatrix}=\begin{pmatrix}1\\-1\end{pmatrix}.$$

这个方向上的直线逐点固定。特征值 3 对应的特征向量则在另一条整线映回自身的直线上，其非零点会移动。

</details>

</section>

## 三阶矩阵与参数 {#three-by-three}

<section class="worked-example" markdown="1">

### 改编例题：从特征方程到几何方向 {#parameter-example}

**Adapted example — OxfordAQA 9665/FM03 June 2024 Q11(b), MS pp.16–17.** The matrix and roots condition have been changed. Let

**改编题：**基于 OxfordAQA 9665/FM03 June 2024 Q11(b)，已读 MS pp.16–17；矩阵与根的条件均已更改。设矩阵如下。

$$M_c=\begin{pmatrix}c&0&0\\0&2&1\\0&1&2\end{pmatrix}.$$

> The three distinct eigenvalues have pairwise-product sum 11. Show that $c=2$, find the three eigenvalues, and find an eigenvector corresponding to the least eigenvalue. Establish the characteristic equation before using the roots condition.

三个互异特征值的两两乘积之和为 11。先建立特征方程，再证明参数为 2，求三个特征值及最小值对应的一个特征向量。

沿第一行展开。首一三次多项式的一次项系数，等于三个根两两乘积之和。求出最小根后，再解全部三个分量方程。


使用首一多项式约定，方便直接比较系数：

$$\begin{aligned}
\det(\lambda I-M_c)
&=(\lambda-c)\big((\lambda-2)^2-1\big)\\
&=(\lambda-c)(\lambda-1)(\lambda-3)\\
&=\lambda^3-(c+4)\lambda^2+(4c+3)\lambda-3c.
\end{aligned}$$

题给条件于是给出

$$\lambda_1\lambda_2+\lambda_1\lambda_3+\lambda_2\lambda_3=4c+3=11
\quad\Longrightarrow\quad c=2.$$

由因式分解，三个互异特征值为

$$\lambda=1,\ 2,\ 3.$$

对最小特征值，分量方程为

$$\lambda=1:\quad x=0,\quad y+z=0,\quad y+z=0.$$

因此其全部特征向量及一次乘回检验为

$$\mathbf v=t\begin{pmatrix}0\\1\\-1\end{pmatrix},\quad t\ne0,\qquad
M_2\begin{pmatrix}0\\1\\-1\end{pmatrix}=\begin{pmatrix}0\\1\\-1\end{pmatrix}.$$

第一分量为零不构成问题；完整向量非零即可。特征方程和系数比较排除了其他参数可能，而猜一个参数再代回，并没有完成“show that”要求的证明。

</section>

### 用迹与行列式检验 {#coefficient-checks}

对二阶和三阶矩阵，展开首一特征多项式可得：特征值之和等于对角元素之和，即**迹（trace）**；特征值之积等于行列式。重根须按重数计入：

$$\lambda_1+\lambda_2=\operatorname{tr}A,\qquad
\lambda_1\lambda_2=\det A\qquad(n=2).$$

$$\lambda_1+\lambda_2+\lambda_3=\operatorname{tr}A,\qquad
\lambda_1\lambda_2\lambda_3=\det A\qquad(n=3).$$

本例中和为 6、积为 6。这些检验有助于发现展开中的符号错误，但不能提供特征向量，也不能替代题目要求的特征方程推导。

## 重复特征值 {#repeated-eigenvalues}

一个根的**代数重数（algebraic multiplicity）**，是其因子在特征多项式中出现的次数；它**不能**直接告诉你有几个独立特征向量。若所选向量组中没有任何向量能由其余向量线性组合得到，就称它们线性无关；标量倍数只提供一个独立方向。

<section class="worked-example" markdown="1">

### 相同重根，不同解族 {#repeated-comparison}

**Original comparison.** Consider

**自拟比较：**考虑以下两个矩阵。

$$B=\begin{pmatrix}2&1\\0&2\end{pmatrix},\qquad
C=\begin{pmatrix}2&0\\0&2\end{pmatrix}.$$

两者的特征方程完全相同：

$$\det(B-\lambda I)=\det(C-\lambda I)=(2-\lambda)^2=0.$$

对 B，在特征值 2 处的方程给出

$$\begin{pmatrix}0&1\\0&0\end{pmatrix}\begin{pmatrix}x\\y\end{pmatrix}=\mathbf0
\quad\Longrightarrow\quad y=0,\qquad
\mathbf v=t\begin{pmatrix}1\\0\end{pmatrix},\quad t\ne0.$$

这里只有一个独立方向。对 C，齐次方程却不再施加任何限制：

$$C\mathbf v=2\mathbf v\quad\text{for every }\mathbf v\ne\mathbf0.$$

两个坐标单位向量就是两个独立的例子。两个矩阵都各有无穷多个特征向量，但独立方向数不同。把同一个向量重写一次或乘另一个数，并不会产生线性无关性。

</section>

<section class="lesson-check" markdown="1">

### 三阶重根任务 {#repeated-three-by-three}

**Original task.** Find all eigenvectors of the following matrix. State the maximum number of independent eigenvectors associated with each eigenvalue.

**自拟题：**求下面矩阵的全部特征向量，并说明每个特征值最多对应几个线性无关的特征向量。

$$F=\begin{pmatrix}2&0&0\\0&2&0\\0&0&3\end{pmatrix}.$$

<details markdown="1">
<summary>提示</summary>

行列式可以直接分解，但仍须把齐次方程组解完。对这个特定矩阵，重根对应两个自由分量。

</details>

<details markdown="1">
<summary>解答</summary>

$$\det(\lambda I-F)=(\lambda-2)^2(\lambda-3)=0.$$

$$\lambda=2:\quad z=0,\quad
\mathbf v=\begin{pmatrix}a\\b\\0\end{pmatrix},\quad(a,b)\ne(0,0).$$

该平面内最多能选出两个线性无关的向量，例如 x、y 坐标单位向量。对另一个特征值，

$$\lambda=3:\quad x=y=0,\quad
\mathbf v=t\begin{pmatrix}0\\0\\1\end{pmatrix},\quad t\ne0.$$

只有一个独立方向。结论来自分量方程，而非只看重数，不需要使用对角化定理。

</details>

</section>

## 特征向量与不变方向 {#invariant-directions}

对过原点、以某个特征向量为方向的直线，一般点的变换为

$$L:\mathbf r=t\mathbf v,\qquad A(t\mathbf v)=\lambda t\mathbf v.$$

若特征值非零，新参数可遍历全部实数，因此直线**整条映回自身**。负特征值反转参数方向；零特征值把整条线压到原点；特征值 1 则使直线逐点固定。

对不经过原点的直线，只有方向的像与原方向平行还不够。还要使用矩阵代数课的两个条件：

$$L:\mathbf r=\mathbf a+t\mathbf v,\qquad
A\mathbf v=\lambda\mathbf v,\qquad
A\mathbf a-\mathbf a=\nu\mathbf v.$$

附加的基点条件保证像仍在同一直线上，非零特征值进一步保证像是整条线。特征向量本身描述的是过原点的方向，不能单独识别所有非原点不变直线。

## 综合练习 {#practice}

以下均为自拟题，不赋予官方分值。每题先独立尝试，再展开提示。凡题目要求“show”，必须给出确立结论的计算过程。

<section class="lesson-check" markdown="1">

### 第1题：诊断三个候选向量 {#practice-1}

> For A in the second-order example, a student lists the zero vector, $(1,-1)$ with eigenvalue 3, and $(2,2)$ with eigenvalue 3. Identify every error and justify your decision by multiplication or by the definition.

逐项检验三个候选及所称特征值，用定义或直接乘回说明每个判断。

<details markdown="1">
<summary>提示</summary>

排除零向量。一个确实是特征向量的向量，也可能被配上错误的特征值。

</details>

<details markdown="1">
<summary>解答</summary>

零向量永远不是特征向量。其余两项检验为

$$A\begin{pmatrix}1\\-1\end{pmatrix}=\begin{pmatrix}1\\-1\end{pmatrix}
\ne3\begin{pmatrix}1\\-1\end{pmatrix},\qquad
A\begin{pmatrix}2\\2\end{pmatrix}=\begin{pmatrix}6\\6\end{pmatrix}=3\begin{pmatrix}2\\2\end{pmatrix}.$$

第二项是特征值 1 而非 3 对应的特征向量；第三项正确。不要求向量必须是单位向量。

</details>

</section>

<section class="lesson-check" markdown="1">

### 第2题：零与负特征值 {#practice-2}

> Find all real eigenvalues and eigenvectors of G below. Explain the effect on each corresponding line through the origin and find all fixed points.

求 G 的所有实特征值与特征向量，解释各方向直线的像，并求全部固定点。

$$G=\begin{pmatrix}0&0&0\\0&-2&0\\0&0&1\end{pmatrix}.$$

<details markdown="1">
<summary>提示</summary>

保留零根。求固定点时解倍率为 1 的方程，并注意作为一个点的零向量也应包括在内。

</details>

<details markdown="1">
<summary>解答</summary>

$$\det(\lambda I-G)=\lambda(\lambda+2)(\lambda-1)=0.$$

$$\begin{aligned}
\lambda=0&:\quad\mathbf v=t\begin{pmatrix}1\\0\\0\end{pmatrix},\quad t\ne0,\\
\lambda=-2&:\quad\mathbf v=t\begin{pmatrix}0\\1\\0\end{pmatrix},\quad t\ne0,\\
\lambda=1&:\quad\mathbf v=t\begin{pmatrix}0\\0\\1\end{pmatrix},\quad t\ne0.
\end{aligned}$$

x 轴被压到原点；y 轴整条映回自身，方向反转、长度变成两倍；z 轴逐点固定。全部固定点为

$$\mathbf r=t\begin{pmatrix}0\\0\\1\end{pmatrix},\qquad t\in\mathbb R.$$

原点是固定点，尽管零向量不是特征向量。

</details>

</section>

<section class="lesson-check" markdown="1">

### 第3题：重因子不等于独立向量 {#practice-3}

> Show that J below has a repeated real eigenvalue. Find all eigenvectors for each eigenvalue and state how many independent directions belong to the repeated one. Check an eigenvector directly.

证明 J 有重复实特征值，求每个值对应的全部特征向量，说明重根对应的独立方向数，并直接核验一个向量。

$$J=\begin{pmatrix}2&1&0\\0&2&0\\0&0&3\end{pmatrix}.$$

<details markdown="1">
<summary>提示</summary>

代入重根后，仍要保留第一行给出的约束；对角元素变零不代表整行约束消失。

</details>

<details markdown="1">
<summary>解答</summary>

$$\det(\lambda I-J)=(\lambda-2)^2(\lambda-3)=0.$$

对重复特征值，方程迫使第二和第三分量都为零：

$$\lambda=2:\quad y=z=0,\quad
\mathbf v=t\begin{pmatrix}1\\0\\0\end{pmatrix},\quad t\ne0.$$

虽然代数重数为 2，这里只有一个独立方向。对另一个特征值，

$$\lambda=3:\quad -x+y=0,\quad -y=0,\quad
\mathbf v=t\begin{pmatrix}0\\0\\1\end{pmatrix},\quad t\ne0.$$

例如可直接检验

$$J\begin{pmatrix}1\\0\\0\end{pmatrix}=2\begin{pmatrix}1\\0\\0\end{pmatrix}.$$

把它与 F 比较：特征多项式相同，但重根对应的特征向量族不同。

</details>

</section>

<section class="lesson-check" markdown="1">

### 第4题：不用试值反求参数 {#practice-4}

> For M_c in the adapted example, the product of all three eigenvalues, counted with multiplicity, is 9. Determine c. Then find all eigenvectors for every distinct eigenvalue, including any repeated eigenvalue. Do not assume that the earlier distinct-root condition still holds.

修改参数例题的条件：三个特征值按重数计算的乘积为 9。求参数及每个不同特征值对应的全部特征向量；不要沿用之前根互异的条件。

<details markdown="1">
<summary>提示</summary>

利用首一多项式的常数项，或利用行列式。求出新参数后，重新解齐次方程组。

</details>

<details markdown="1">
<summary>解答</summary>

$$3c=9\quad\Longrightarrow\quad c=3,\qquad
\det(\lambda I-M_3)=(\lambda-3)^2(\lambda-1).$$

$$\lambda=3:\quad z=y,\quad
\mathbf v=\begin{pmatrix}a\\b\\b\end{pmatrix},\quad(a,b)\ne(0,0).$$

这里有两个独立方向。对剩下的根，

$$\lambda=1:\quad x=0,\ z=-y,\quad
\mathbf v=t\begin{pmatrix}0\\1\\-1\end{pmatrix},\quad t\ne0.$$

条件改变会同时改变参数和重数，不能继续沿用上一个例题“根互异”的假设。

</details>

</section>

<section class="lesson-check" markdown="1">

## 重根的同目标重试 {#repeated-retry}

若把重数当独立向量数，先回[重根比较](#repeated-comparison)，再选尚未看解答的[第 3 题](#practice-3)或[第 4 题](#practice-4)。两题均已看过时，关闭帮助完成下面新题；后面的 distinct-root 混合重试不能代替此项。

> **Original task / 自拟题.** For the matrix

$$
T=\begin{pmatrix}4&0&1\\0&4&0\\0&0&4\end{pmatrix},
$$

> derive the characteristic equation and find all eigenvectors. Give a largest independent collection and prove that no larger collection is possible. Compare with $T_0=4I$: the characteristic equations agree, but do the maximum independent collections have the same size? Check representative vectors by multiplication; multiplicity alone is not a justification.

<details markdown="1">
<summary>提示</summary>

代入根后，保留所有非对角项；先写完整解族，再证明所选向量独立且能表示所有解。

</details>

<details markdown="1">
<summary>解答</summary>

$$\det(\lambda I-T)=\det\begin{pmatrix}\lambda-4&0&-1\\0&\lambda-4&0\\0&0&\lambda-4\end{pmatrix}=(\lambda-4)^3=0.$$

$$(T-4I)\begin{pmatrix}x\\y\\z\end{pmatrix}=\begin{pmatrix}z\\0\\0\end{pmatrix}=\mathbf0
\iff z=0,\qquad\mathbf v=\begin{pmatrix}a\\b\\0\end{pmatrix},\quad(a,b)\ne(0,0).$$

$$T\mathbf e_x=4\mathbf e_x,\qquad T\mathbf e_y=4\mathbf e_y,\qquad
\mathbf v=a\mathbf e_x+b\mathbf e_y.$$

两个单位向量线性无关，因为其线性组合为零会使两个系数都为零；所有解都在它们张成的平面内，故最多两个独立向量。虽然根的重数为 3，不能凭空补第三个。对另一个矩阵：

$$\det(\lambda I-T_0)=(\lambda-4)^3=0,\qquad
(T_0-4I)\mathbf v=\mathbf0\quad\text{for every }\mathbf v,\qquad T_0\mathbf e_i=4\mathbf e_i\ (i=x,y,z).$$

它的任意非零向量都是特征向量；三个坐标单位向量线性无关，且张成三维空间，故最大数为 3。同一个特征多项式，前者两个、后者三个，区别来自齐次约束。

</details>

</section>

<section class="lesson-check" markdown="1">

## 独立重试 {#independent-retry}

**Original task.** A map sends $(x,y,z)$ to $(y,x,2z)$. Construct its matrix and characteristic equation, find all eigenvectors, and identify the lines through the origin that are fixed pointwise. Decide whether the line $(t,t,1)$, with t real, maps onto itself. Choose and explain your own checks.

**自拟独立重试：**由坐标映射构造矩阵和特征方程，求全部特征向量及逐点固定的过原点直线；判断指定非原点直线是否映到自身，自主选择核验方法。

<details markdown="1">
<summary>解答——独立尝试后再展开</summary>

$$K=\begin{pmatrix}0&1&0\\1&0&0\\0&0&2\end{pmatrix},\qquad
\det(\lambda I-K)=(\lambda^2-1)(\lambda-2).$$

$$\begin{aligned}
\lambda=1&:\quad\mathbf v=t\begin{pmatrix}1\\1\\0\end{pmatrix},\quad t\ne0,\\
\lambda=-1&:\quad\mathbf v=t\begin{pmatrix}1\\-1\\0\end{pmatrix},\quad t\ne0,\\
\lambda=2&:\quad\mathbf v=t\begin{pmatrix}0\\0\\1\end{pmatrix},\quad t\ne0.
\end{aligned}$$

只有特征值 1 对应方向的直线逐点固定。对非原点直线，

$$K\begin{pmatrix}t\\t\\1\end{pmatrix}=\begin{pmatrix}t\\t\\2\end{pmatrix}.$$

它映到另一条平行线。其方向是特征向量，但基点未满足同线条件。特征值之和为 2、积为 −2，分别与迹和行列式一致。

</details>

</section>

## 快速参考 {#quick-reference}

| 问题 | 应提供的证据 |
| --- | --- |
| 是特征向量吗？ | 向量非零，像等于所称的标量倍数。 |
| 求特征值 | 建立特征行列式并解方程。 |
| 求特征向量 | 对每个根解奇异齐次方程组，排除零解。 |
| 重根 | 解实际方程；重数不直接计数独立方向。 |
| 检验根 | 使用迹和行列式，重根按重数计入。 |
| 固定点 | 特征值为 1 的解，再包括原点。 |
| 非原点不变直线 | 方向条件、基点条件与不退化条件。 |

## 常见错误与下一步 {#common-pitfalls}

- **每个元素都减特征值：**只有对角元素改变。
- **混用行列式约定：**比较根与系数前，先写清首一三次多项式。
- **接纳零向量：**单参数应非零；双参数则不能同时为零。
- **删掉零或负特征值：**回看练习2的几何解释，再乘回核验。
- **按重数凭空补向量：**比较 B 与 C、F 与 J，解实际方程。
- **只检查一个分量：**所有分量必须服从同一个标量倍数。

**学后下一步：**重根错因按[同目标重试](#repeated-retry)重新检验；方向与非原点直线混淆则做[混合独立重试](#independent-retry)。写一段英文说明重复根与独立方向数的区别。然后完成课程[跨主题综合](/zh/alevel/a2-further-mathematics/#mixed-review)和隔开学习后的[延后任务](/zh/alevel/a2-further-mathematics/#later-review)，再次联系解集、特征方向与反射的几何意义。

**计算器能检查什么／答卷须写什么：**计算器可以核验数值根和矩阵向量乘积，但不能替代题目要求的行列式展开、用根与系数关系证明参数、非零向量条件或重根解释。本课不新增按键流程，也不要求对角化定理。

**学习路径：**[上一课：线性方程组](/zh/alevel/a2-further-mathematics/linear-equations/) · [矩阵代数](/zh/alevel/a2-further-mathematics/matrix-algebra/) · [高等纯数学](/zh/alevel/a2-further-mathematics/)。

## 资料来源 {#sources}

本轮于 **2026-10-23** 重新读取下列 9665 大纲及 June 2024 Q11(b) 的 QP／MS 原文。新增重根题按大纲和同类特征方程／齐次方程方法核查，不冒称官方题或官方分值。

范围依据 OxfordAQA International A-level Further Mathematics **9665** [大纲 Version 5.2，FP2.13，印刷 p.21／PDF p.20](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf#page=20)：二阶、三阶矩阵的特征方程、特征值与特征向量，仅考虑实特征值，包括重复值。

参数例题改编自 [June 2024 FM03 Q11(b)，QP pp.20–21](/assets/pdf/fx-cg50/references/oxfordaqa-fm03-2024-june-question-paper.pdf)的任务结构，已对照 [MS pp.16–17](/assets/pdf/fx-cg50/references/oxfordaqa-fm03-2024-june-mark-scheme.pdf)：先推导特征方程，再把根系数与条件相连，求特征值，最后求最小特征值对应的特征向量。本课已改矩阵和根条件，不是官方原题，也没有官方分值。其他例练均为自拟题。重复根任务依据大纲明确范围补足，不假定这一道正式题覆盖全部情况。
