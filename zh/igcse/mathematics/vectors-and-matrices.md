---
layout: subjects
title: "向量与矩阵"
mathjax: true
grade: igcse
subject: igcse-mathematics
lang: zh-CN
translation_of: /igcse/mathematics/vectors-and-matrices/
permalink: /zh/igcse/mathematics/vectors-and-matrices/
reading_layout: true
study_page: true
toc_headings: "h2"
---

[IGCSE 数学](/zh/igcse/mathematics/#learning-start)
{:.lesson-meta}

## 用一组数描述移动 {#start}

两个数可以表示“向右多少，再向上多少”。一个方形数表又可以规定怎样改变这两个数。先学数表的运算，再用有方向的移动解释几何。

先要会带符号数的乘法、[坐标](/zh/igcse/mathematics/coordinates-and-lines/#start)及[单变换](/zh/igcse/mathematics/transformations/#moves)。逐步连接向量几何、矩阵乘法、单位矩阵、单位方形变换及矩阵组合。

题目和图均为自拟教学构造，不设官方分值。
{:.lesson-meta}

## 左边取一行，右边取一列 {#matrix-products}

**矩阵（matrix）**是长方形排列的数。大小写成“行数 × 列数”：$2\times1$ 是上下两个数的一列，$2\times2$ 是两行两列。先后次序很重要。

乘积中每一个位置，都由“左边的一行”和“右边的一列”算出：对应位置相乘，再相加。不是两个矩阵相同位置的数直接相乘。

<div class="worked-example" markdown="1">

### 完整示范：两个输出分别怎样来？ {#example-products}

**Question:** Find $M\binom{3}{4}$ and $MN$ for the matrices below.

$$
M=\begin{pmatrix}1&2\\0&1\end{pmatrix},
\qquad N=\begin{pmatrix}2&0\\3&1\end{pmatrix}.
$$

第一个输出用第一行，第二个输出用第二行：

$$
M\binom34
=\binom{1(3)+2(4)}{0(3)+1(4)}
=\binom{11}{4}.
$$

求 MN，要算四次“行乘列”：

$$
MN=\begin{pmatrix}
1(2)+2(3)&1(0)+2(1)\\
0(2)+1(3)&0(0)+1(1)
\end{pmatrix}
=\begin{pmatrix}8&2\\3&1\end{pmatrix}.
$$

单查第一列：它就是 $M\binom23=\binom83$。交换顺序会得到另一个结果：

$$
NM=\begin{pmatrix}2&4\\3&7\end{pmatrix}.
$$

若乘的是标量，例如3，要把**每个**元素都乘3：

$$
3M=\begin{pmatrix}3&6\\0&3\end{pmatrix}.
$$

</div>

## 什么也不改变的矩阵 {#identity}

$$
I=\begin{pmatrix}1&0\\0&1\end{pmatrix},
\qquad I\binom xy=\binom xy.
$$

第一行留下 x，第二行留下 y。对任意 $2\times2$ 矩阵 M，都有 $MI=IM=M$。这就是**单位矩阵（identity matrix）**，相当于乘法里的1。四个元素都是1的矩阵不是单位矩阵。

## 独立检查运算 {#practice}

<div class="lesson-check" markdown="1">

### 四个位置、两个顺序 {#check-products}

**Question:** Let
$$
A=\begin{pmatrix}2&-1\\1&3\end{pmatrix},
\quad B=\begin{pmatrix}0&1\\2&-1\end{pmatrix}.
$$
Find $A\binom{-1}{2}$, $AB$, $BA$, $-2A$ and $AI$. Explain why $AB$ cannot be replaced by $BA$.

<details markdown="1">
<summary>提示</summary>

逐格指出用了哪行、哪列；两个顺序分别算。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$
A\binom{-1}{2}=\binom{-4}{5},\quad
AB=\begin{pmatrix}-2&3\\6&-2\end{pmatrix},
\quad BA=\begin{pmatrix}1&3\\3&-5\end{pmatrix}.
$$

$$
-2A=\begin{pmatrix}-4&2\\-2&-6\end{pmatrix},
\qquad AI=A.
$$

例如 AB 右上为 $2(1)+(-1)(-1)=3$。BA 左上为 $0(2)+1(1)=1$，而 AB 左上为-2。指出一个不同位置就能否定相等。若只把对角元素乘-2，就没有把标量乘到每个元素。

</details>

</div>

## 把有方向的移动接起来 {#vectors}

**向量（vector）**既有大小，也有方向。$\overrightarrow{AB}$ 是从 A 到 B 的移动，反过来为 $\overrightarrow{BA}=-\overrightarrow{AB}$。相等向量可以不在同一位置，但必须等长、同方向。

若 $A(1,2)$、$B(4,1)$，则 $\overrightarrow{AB}=\binom3{-1}$：终点减起点。标量把向量伸缩，负标量还使方向反转。若 $\mathbf a=\binom31$、$\mathbf b=\binom{-1}2$：

$$
\mathbf a+\mathbf b=\binom23,\quad
\mathbf a-\mathbf b=\binom4{-1},\quad
-2\mathbf a=\binom{-6}{-2}.
$$

画向量和时，把 b 的尾接在 a 的头；从最初起点到最后终点的箭头就是和。画差时，加上第二个向量反向后的箭头。

![O到A再到B的箭头展示首尾相接，O到B为合向量。坐标为O(0,0)、A(3,1)、B(2,3)。](/assets/img/igcse-geometry-calculation-vectors.svg)

分量上的加法说明**交换律** $\mathbf a+\mathbf b=\mathbf b+\mathbf a$ 和**结合律** $(\mathbf a+\mathbf b)+\mathbf c=\mathbf a+(\mathbf b+\mathbf c)$。起点、终点相同，走不同路线得到的合向量相同。减法不能交换。

<div class="lesson-check" markdown="1">

### 把运算画出来 {#check-vectors}

**Question:** Let $\mathbf u=\binom2{-1}$ and $\mathbf v=\binom13$. On a unit grid draw u followed by v from O, and draw the resultant. Calculate $\mathbf u+\mathbf v$, $\mathbf u-\mathbf v$ and $2\mathbf v-\mathbf u$. From O draw separate head-to-tail routes and resultants for $\mathbf u-\mathbf v$ and $2\mathbf v-\mathbf u$, and draw the single arrow $-2\mathbf v$. Label starts and endpoints; explain the direction and length of the negative multiple. Explain graphically why $\mathbf v+\mathbf u$ has the same endpoint as $\mathbf u+\mathbf v$.

<details markdown="1">
<summary>提示</summary>

每走一段记终点，减法按分量处理。

</details>

<details markdown="1">
<summary>解答与检查</summary>

路线 $(0,0)\to(2,-1)\to(3,2)$，合向量 $\binom32$。差为 $\binom1{-4}$，$2\mathbf v-\mathbf u=\binom07$。反序路线 $(0,0)\to(1,3)\to(3,2)$，是同一平行四边形的另两条边，终点同为对角顶点。

差的路线为 $(0,0)\to(2,-1)\to(1,-4)$，第二箭头是v的反向。另一条路线为 $(0,0)\to(2,6)\to(0,7)$，第二箭头是 $-\mathbf u=\binom{-2}1$。每个合向量都从O直接指向最后终点。$-2\mathbf v=\binom{-2}{-6}$ 从O指向 $(-2,-6)$，与v反向、长度两倍。乘-2要改变两个分量，不只是上下方向的分量。

</details>

</div>

## 分组不改变箭头顺序 {#grouping}

把连续三支箭头分成不同组，总位移不变，这叫结合律；它保持箭头顺序，交换律才交换顺序。减去一个向量，要反转整个被减向量，所以去掉减号后的括号时，里面每一项都要反向。

<div class="lesson-check" markdown="1">

### 把三支箭头分组 {#check-associativity}

**Question:** Use the u and v above and let $\mathbf w=\binom{-2}2$. Calculate $(\mathbf u+\mathbf v)+\mathbf w$ and $\mathbf u+(\mathbf v+\mathbf w)$. Draw the two grouped head-to-tail routes from O, label the intermediate endpoints, and explain which law they demonstrate. Has the order u,v,w changed?

<details markdown="1">
<summary>提示</summary>

先画连续三支箭头，每对括号把其中连续两支替换为合向量。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$
\mathbf u+\mathbf v=\binom32,\quad\mathbf v+\mathbf w=\binom{-1}5,\quad
(\mathbf u+\mathbf v)+\mathbf w=\binom14=\mathbf u+(\mathbf v+\mathbf w).
$$

第一组路线为 $(0,0)\to(3,2)\to(1,4)$，第二组为 $(0,0)\to(2,-1)\to(1,4)$。两者都把同一路线 $(0,0)\to(2,-1)\to(3,2)\to(1,4)$ 合并成两段。这展示结合律，并没有交换u和v，只改变分组。

</details>

</div>

## 让向量计算成为证明 {#proof}

一个数值图可以提示两线平行，但证明须对满足条件的所有图形成立。

<div class="worked-example" markdown="1">

### 完整示范：中点连线为什么平行？ {#example-proof}

**Question:** In a non-degenerate triangle OAB, M and N are the midpoints of OA and OB. Prove that MN is parallel to AB and half its length.

设 $\overrightarrow{OA}=\mathbf a$、$\overrightarrow{OB}=\mathbf b$。中点给出 $\overrightarrow{OM}=\frac12\mathbf a$、$\overrightarrow{ON}=\frac12\mathbf b$。按要找的起点和终点选路线：

$$
\overrightarrow{MN}=\overrightarrow{MO}+\overrightarrow{ON}
=-\tfrac12\mathbf a+\tfrac12\mathbf b
=\tfrac12(\mathbf b-\mathbf a)
=\tfrac12\overrightarrow{AB}.
$$

三角形不退化，所以 AB 非零。MN 是 AB 的正数倍，同方向、长度一半，因此 MN 平行于 AB。负号来自 MO，不是 OM。只引用中位线定理，没有展示题目要求的向量论证。

</div>

证明共线时，从同一个点出发写两个向量，证明一个是另一个的倍数。只有方向平行，不能证明两条分开的直线重合。

<div class="lesson-check" markdown="1">

### 换一个比例证明 {#check-proof}

**Question:** OAB is non-degenerate. $\overrightarrow{OA}=\mathbf a$, $\overrightarrow{OB}=\mathbf b$. P lies on OA with $OP:PA=2:1$ and Q lies on OB with $OQ:QB=2:1$. Prove by vectors that PQ is parallel to AB. If R has $\overrightarrow{OR}=2\mathbf b-\mathbf a$, prove that A,B,R are collinear.

<details markdown="1">
<summary>提示</summary>

先把部分比转成占整段的比例；第二问从 A 同时出发。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$\overrightarrow{OP}=\frac23\mathbf a$、$\overrightarrow{OQ}=\frac23\mathbf b$，所以 $\overrightarrow{PQ}=\frac23(\mathbf b-\mathbf a)=\frac23\overrightarrow{AB}$。AB 非零，故 PQ 平行 AB。又 $\overrightarrow{AR}=\overrightarrow{OR}-\overrightarrow{OA}=2\mathbf b-2\mathbf a=2\overrightarrow{AB}$。两向量同从 A 出发，因此 R 在直线 AB 上、B 的外侧。把比例写成 $\frac21$ 而非 $\frac23$，会使 P 落到题定线段外。

</details>

</div>

## 从单位方形建立矩阵 {#unit-square}

画 O(0,0)、A(1,0)、B(1,1)、C(0,1)，得到单位方形。A 是沿 x 方向走一步，C 是沿 y 方向走一步，因此变换矩阵的**第一列写 A 的像，第二列写 C 的像**。

绕 O 逆时针90°时，A 到 (0,1)，C 到 (-1,0)，所以：

$$
R=\begin{pmatrix}0&-1\\1&0\end{pmatrix},
\quad R\binom xy=\binom{-y}{x}.
$$

B 到 (-1,1)，就是两列向量之和。四个像点都要画出，按顺序连接。下面的矩阵也可通过检查 A 和 C 重建：

$$
R_{180}=\begin{pmatrix}-1&0\\0&-1\end{pmatrix},
\qquad R_{270}=\begin{pmatrix}0&1\\-1&0\end{pmatrix}.
$$

这里角度都按逆时针。四条要求的反射线对应：

$$
F_{x=0}=\begin{pmatrix}-1&0\\0&1\end{pmatrix},
\qquad F_{y=0}=\begin{pmatrix}1&0\\0&-1\end{pmatrix}.
$$

$$
F_{y=x}=\begin{pmatrix}0&1\\1&0\end{pmatrix},
\qquad F_{y=-x}=\begin{pmatrix}0&-1\\-1&0\end{pmatrix}.
$$

以 O 为中心放大，矩阵是 $kI$。这些矩阵都使 O 不动。非零平移使 O 移动，所以不能用这种作用于位置列向量的 $2\times2$ 矩阵表示。这里按大纲列出变换类型，不额外把任意错切当作必学变换。

<div class="lesson-check" markdown="1">

### 读出并画出单位方形的像 {#check-square}

**Question:** A transformation sends A(1,0) to (0,-1) and C(0,1) to (-1,0). Find its matrix, describe it fully, and draw the image of OABC. Then draw the image of the original square under enlargement factor $-\frac12$ about O.

<details markdown="1">
<summary>提示</summary>

给定像写成列，另外检查 B。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$
F=\begin{pmatrix}0&-1\\-1&0\end{pmatrix}.
$$

它是关于 $y=-x$ 反射。O、A'、B'、C' 为 $(0,0),(0,-1),(-1,-1),(-1,0)$。比例 $-\frac12 I$ 的四点为 $(0,0),(-\frac12,0),(-\frac12,-\frac12),(0,-\frac12)$，分别依顺序连接。交换两列会改变变换，A、C 的标记不能忽略。

</details>

</div>

## 右边的矩阵先作用 {#composition}

先做 F，再做 R，得到 $R(F\mathbf x)=(RF)\mathbf x$。**右边矩阵先做。**矩阵乘法的结合律允许这样改括号，但一般不能交换左右。

<div class="worked-example" markdown="1">

### 完整示范：先反射，后旋转 {#example-composition}

**Question:** Reflect in $y=0$, then rotate 90° anticlockwise about O. Find one matrix for the combination.

$$
RF=\begin{pmatrix}0&-1\\1&0\end{pmatrix}
\begin{pmatrix}1&0\\0&-1\end{pmatrix}
=\begin{pmatrix}0&1\\1&0\end{pmatrix}.
$$

结果是关于 $y=x$ 反射。选一个不对称点检查：$(2,1)\to(2,-1)\to(1,2)$，与 $RF\binom21=\binom12$ 一致。只检查 O 没有帮助，这些矩阵都会使 O 不动。

</div>

<div class="lesson-check" markdown="1">

### 比较两种乘积 {#check-composition}

**Question:** F reflects in $x=0$ and R rotates 90° anticlockwise about O. Find the matrix for F then R, and for R then F. Describe each combined transformation. Use (2,3) to check the order.

<details markdown="1">
<summary>提示</summary>

先 F 后 R 写 RF，两个乘积分别算。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$
RF=\begin{pmatrix}0&-1\\-1&0\end{pmatrix},
\qquad FR=\begin{pmatrix}0&1\\1&0\end{pmatrix}.
$$

RF 是关于 $y=-x$ 反射，得 $(-3,-2)$；FR 是关于 $y=x$ 反射，得 $(3,2)$。直接路线分别为 $(2,3)\to(-2,3)\to(-3,-2)$ 和 $(2,3)\to(-3,2)\to(3,2)$。

</details>

</div>

## 找到出错的那一步 {#retry}

元素错，回看[行乘列](#matrix-products)；方向错，回看[起终点](#vectors)；平行或共线无理由，回看[证明](#proof)；列或顺序错，回看[单位方形](#unit-square)或[组合](#composition)。先关闭旧解答。

差或负数倍的图画错，回到[向量作图](#vectors)，反转应反转的箭头，再做[新路线](#retry-vectors)。把分组和交换或减法混淆，回看[分组](#grouping)，再做[三箭头重试](#retry-associativity)。

<div class="lesson-check" markdown="1">

### 重试矩阵乘法 {#retry-products}

**Question:** For $A$ and $B$ below find $AB$, $3B$ and $IB$.
$$
A=\begin{pmatrix}1&-2\\0&1\end{pmatrix},\quad
B=\begin{pmatrix}2&1\\-1&0\end{pmatrix}.
$$

<details markdown="1">
<summary>提示</summary>

左上为 $1(2)+(-2)(-1)$。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$
AB=\begin{pmatrix}4&1\\-1&0\end{pmatrix},
\quad 3B=\begin{pmatrix}6&3\\-3&0\end{pmatrix},\quad IB=B.
$$
左上是4不是2，两个乘积都要计入。

</details>

</div>

<div class="lesson-check" markdown="1">

### 重试有向路线 {#retry-vectors}

**Question:** A(1,-1), B(4,2), C(0,3). Draw AB then BC. Find AB, BC and AC as columns and verify the route identity. Now let s=AB and t=BC as directed vectors. On separate unit grids starting at O, draw the head-to-tail route and resultant for s-t and for 2t-s, and the single arrow -2t. Give all intermediate endpoints and explain each reversed arrow.

<details markdown="1">
<summary>提示</summary>

每段都用终点减起点。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$\overrightarrow{AB}=\binom33$、$\overrightarrow{BC}=\binom{-4}1$、$\overrightarrow{AC}=\binom{-1}4$。相加验证 $\overrightarrow{AB}+\overrightarrow{BC}=\overrightarrow{AC}$。合向量要从 A 画，不是从 O。

另画的方格图，把这些位移移到O出发。差的路线为 $(0,0)\to(3,3)\to(7,2)$，加上 $-\mathbf t=\binom4{-1}$，合向量为 $\binom72$。第二条路线为 $(0,0)\to(-8,2)\to(-11,-1)$，加上 $-\mathbf s=\binom{-3}{-3}$，合向量为 $\binom{-11}{-1}$。$-2\mathbf t=\binom8{-2}$ 指向 $(8,-2)$，与t反向、长度两倍。原题从A到C的合向量与这些从O出发的图，起点要求不同。

</details>

</div>

<div class="lesson-check" markdown="1">

### 重试分组，不是交换 {#retry-associativity}

**Question:** Let $\mathbf r=\binom1{-2}$, $\mathbf s=\binom{-3}1$, $\mathbf t=\binom24$. Calculate and draw both $(\mathbf r+\mathbf s)+\mathbf t$ and $\mathbf r+(\mathbf s+\mathbf t)$ from O, labelling intermediate endpoints. A learner uses associativity to claim $\mathbf r-(\mathbf s+\mathbf t)=(\mathbf r-\mathbf s)+\mathbf t$. Calculate both sides and correct the claim.

<details markdown="1">
<summary>提示</summary>

加法分组保持三个有向移动；括号前的减号反转整个和。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$
\mathbf r+\mathbf s=\binom{-2}{-1},\quad\mathbf s+\mathbf t=\binom{-1}5,\quad
(\mathbf r+\mathbf s)+\mathbf t=\binom03=\mathbf r+(\mathbf s+\mathbf t).
$$

画 $(0,0)\to(-2,-1)\to(0,3)$ 和 $(0,0)\to(1,-2)\to(0,3)$，它们都对路线 $(0,0)\to(1,-2)\to(-2,-1)\to(0,3)$ 分组，没有调换顺序。

$$
\mathbf r-(\mathbf s+\mathbf t)=\binom2{-7},\qquad
(\mathbf r-\mathbf s)+\mathbf t=\binom61.
$$

两边不同。正确式子为 $\mathbf r-(\mathbf s+\mathbf t)=\mathbf r-\mathbf s-\mathbf t$：s和t都须反向。加法结合律不能用来改变减号。

</details>

</div>

<div class="lesson-check" markdown="1">

### 重试证明 {#retry-proof}

**Question:** In non-degenerate triangle OAB, P and Q lie one quarter of the way from O to A and B. Prove PQ is parallel to AB. If $\overrightarrow{OS}=3\mathbf b-2\mathbf a$, prove A,B,S are collinear.

<details markdown="1">
<summary>提示</summary>

共线时用共同起点。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$\overrightarrow{PQ}=\frac14(\mathbf b-\mathbf a)=\frac14\overrightarrow{AB}$，AB 非零，故平行。$\overrightarrow{AS}=3\mathbf b-3\mathbf a=3\overrightarrow{AB}$，共同起点 A 给出 A、B、S 共线。论证适用于任意非退化三角形，不只某个坐标例子。

</details>

</div>

<div class="lesson-check" markdown="1">

### 重试两列 {#retry-square}

**Question:** A unit-square transformation sends (1,0) to (0,1) and (0,1) to (1,0). Find its matrix, name the transformation and draw all image vertices.

<details markdown="1">
<summary>提示</summary>

像按给定顺序写成列。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$
M=\begin{pmatrix}0&1\\1&0\end{pmatrix}.
$$
关于 $y=x$ 反射，O、A'、B'、C' 为 $(0,0),(0,1),(1,1),(1,0)$。B 在镜线上，因此不动。

</details>

</div>

<div class="lesson-check" markdown="1">

### 重试组合 {#retry-composition}

**Question:** S is reflection in y=x and R is a 90° clockwise rotation about O. Find the matrix for S then R and the matrix for R then S. Describe each combination. Check both orders on (2,1), keeping the intermediate point.

<details markdown="1">
<summary>提示</summary>

第一步先作用在列向量上，所以它的矩阵写在右边。分别计算两个不同的乘积。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$
S=\begin{pmatrix}0&1\\1&0\end{pmatrix},\quad
R=\begin{pmatrix}0&1\\-1&0\end{pmatrix},
$$

$$
RS=\begin{pmatrix}1&0\\0&-1\end{pmatrix},\qquad
SR=\begin{pmatrix}-1&0\\0&1\end{pmatrix}.
$$
先S后R得到关于 $y=0$ 反射：$(2,1)\to(1,2)\to(2,-1)$。先R后S得到关于 $x=0$ 反射：$(2,1)\to(1,-2)\to(-2,1)$。乘积与终点都不同，能暴露次序颠倒；只查O则不能。

</details>

</div>

## 稍后再连接起来 {#next-step}

学过另一个主题再回来做下面题。到[几何混合回顾](/zh/igcse/mathematics/mixed-review/#geometry-review)和[变换重试](/zh/igcse/mathematics/transformations/#retry)，检查自己能否重建，而不只是背矩阵。

<div class="lesson-check" markdown="1">

### 重新建立关系 {#later-check}

**Question:** A transformation sends each point (x,y) to (-y,-x). Rebuild its matrix from the unit square. Find the image of the movement $\binom{3}{-2}$. Does applying the transformation twice return every point to its original position? Show why.

<details markdown="1">
<summary>提示</summary>

算矩阵的平方，不能只检查一个点回来。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$
M=\begin{pmatrix}0&-1\\-1&0\end{pmatrix},\quad
M\binom3{-2}=\binom2{-3},\quad
M^2=I.
$$
所以任意点都有 $M^2\binom xy=\binom xy$。这才是一般证明，单个点只算核查。

</details>

</div>

## 范围与来源 {#sources}

<details markdown="1">
<summary>范围与实际阅读</summary>

OxfordAQA International GCSE Mathematics 9260 v5.1，[G22–26，大纲 PDF 22、印刷23页](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-gcse-mathematics-specification.pdf#page=22)。包括向量几何、G23（2×2乘2×2或2×1、标量乘法）和G24单位矩阵。变换矩阵限定为绕 O 的90°/180°/270°旋转、所列过原点四条镜线及绕 O 放大。不额外要求行列式、逆矩阵、点积或 i/j 记法。

实际阅读：Specimen 2018 1E Q4，QP PDF 3/MS PDF 4；Q16，[QP PDF 14–15](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9260-92601E-international-gcse-mathematics-specimen-paper-2016-v1.pdf#page=14)/[MS PDF 8](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9260-92601E-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=8)。完整向量平行论证参考2E Q27，[QP PDF 24](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9260-92602E-international-gcse-mathematics-specimen-paper-2016-v1.pdf#page=24)/[MS PDF 15](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9260-92602E-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=15)。本页题全自拟，无官方分值，四卷封面身份为 Specimen 2018。

</details>
