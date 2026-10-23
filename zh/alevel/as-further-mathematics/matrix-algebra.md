---
title: "矩阵运算与逆序"
layout: subjects
mathjax: true
grade: as
subject: as-further-mathematics
lang: zh-CN
translation_of: /alevel/as-further-mathematics/matrix-algebra/
permalink: /zh/alevel/as-further-mathematics/matrix-algebra/
toc_headings: "#start, #model, #demonstration, #transpose, #inverse, #practice, #retry, #later-review, #next-step, #sources"
study_page: true
reading_layout: true
---

[AS 高数课程](/zh/alevel/as-further-mathematics/)

为什么交换运算次序，连答案的形状都会改变？先从行、列的匹配建立矩阵乘法，再用这个结构解释转置和逆序。学完后，你应能判断运算是否合法，计算非方阵和三阶矩阵，并说明二阶逆为何成立。

## 开始之前 {#start}

先修是有符号数运算、展开括号与联立一次方程。行列乘法出错时，先把每一对因子写全再相加；方程整理可回补 [AS 代数](/zh/alevel/as-mathematics/algebra/)。本页均为**自拟题**，没有官方分值。每题先尝试，再按需展开提示或解答，并记录是否借助提示。

## 先由形状决定能做什么 {#model}

矩阵（matrix）是按行、列排列的数表，维数按“行数 × 列数”写。加减比较对应位置，因此形状必须相同；数乘作用于每一项。单位矩阵主对角为一、其余为零，与维数匹配的矩阵相乘时保持它不变。

$$\begin{aligned}I_2&=\begin{pmatrix}1&0\\0&1\end{pmatrix},\\I_3&=\begin{pmatrix}1&0&0\\0&1&0\\0&0&1\end{pmatrix}.\end{aligned}$$

相乘时，前一个矩阵的一行要与后一个矩阵的一列逐项配对，因此内侧维数必须相等；配对后相乘求和。外侧维数决定结果的形状：

$$\begin{aligned}A_{m\times n}B_{n\times p}&=(AB)_{m\times p},\\(AB)_{ij}&=\sum_{k=1}^n A_{ik}B_{kj}.\end{aligned}$$

非方阵左右两边所需的单位矩阵大小不同：

$$I_mA=A=AI_n.$$

## 把一行和一列完整配对 {#demonstration}

<section class="worked-example" markdown="1">

### 同一对非方阵，交换次序计算

**Demonstration (self-written):** Calculate both products for

$$\begin{aligned}A&=\begin{pmatrix}1&2&0\\-1&0&3\end{pmatrix},\\B&=\begin{pmatrix}1&0\\0&1\\2&-1\end{pmatrix}.\end{aligned}$$

A 为二行三列，B 为三行二列，两种次序都能相乘，但 AB 是二阶、BA 是三阶。求 AB 左下项时，取 A 的第二行与 B 的第一列：

$$(AB)_{21}=(-1)(1)+0(0)+3(2)=5.$$

BA 的第三行由 B 的第三行决定，因此等于 A 的第一行乘二，再减去第二行。其余位置继续按同一规则计算，得到

$$AB=\begin{pmatrix}1&2\\5&-3\end{pmatrix}.$$

$$BA=\begin{pmatrix}1&2&0\\-1&0&3\\3&4&-3\end{pmatrix}.$$

末项可另查：$2(0)+(-1)(3)=-3$。两个结果形状不同，已经足以说明它们不相等；矩阵乘法一般不满足交换律。

</section>

## 转置为什么要倒序 {#transpose}

转置把行变成列、列变成行。乘积转置后，原来参与配对的行、列角色互换，因此因子次序也反过来。对任意维数相容的矩阵，可逐项证明：

$$\begin{aligned}((AB)^T)_{ij}&=(AB)_{ji}\\&=\sum_k A_{jk}B_{ki}\\&=\sum_k (B^T)_{ik}(A^T)_{kj}\\&=(B^TA^T)_{ij}.\end{aligned}$$

$$(AB)^T=B^TA^T.$$

中间一步交换的是普通数的乘法次序，并没有假设矩阵可以交换。这个逐项论证也适用于非方阵。

## 用逆矩阵撤销运算 {#inverse}

方阵的逆必须在左右两侧都能撤销原运算。对于二阶矩阵，直接相乘可以看出行列式为何决定能否求逆：

$$\begin{aligned}C&=\begin{pmatrix}a&b\\c&d\end{pmatrix},\\E&=\begin{pmatrix}d&-b\\-c&a\end{pmatrix}.\end{aligned}$$

$$CE=EC=(ad-bc)I_2.$$

$$\begin{aligned}C^{-1}&=\frac1{ad-bc}\begin{pmatrix}d&-b\\-c&a\end{pmatrix}\end{aligned}$$

$$ad-bc\ne0.$$

行列式为零时矩阵是奇异的：两行线性相关，或存在零行，原来的不同输入无法全部恢复，因此没有双侧逆。非方阵也没有双侧逆：列多于行时，总有不同输入得到同一输出；行多于列时，则不能到达所有可能的输出。任一种障碍都使两个方向无法同时还原。本页包含三阶运算，手算求逆只限二阶。

<section class="worked-example" markdown="1">

### 核验一个逆，再解释乘积的逆

下列矩阵的行列式为 $2(1)-1(1)=1$，所以可以求逆：

$$\begin{aligned}C&=\begin{pmatrix}2&1\\1&1\end{pmatrix},\\C^{-1}&=\begin{pmatrix}1&-1\\-1&2\end{pmatrix}.\end{aligned}$$

相乘可得 $CC^{-1}=C^{-1}C=I_2$。乘积 CD 先作用 D，再作用 C。要恢复原输入，应先用 C 的逆撤销 C，再用 D 的逆撤销 D：

$$\begin{aligned}
(CD)(D^{-1}C^{-1})&=C(DD^{-1})C^{-1}\\&=I,\\
(D^{-1}C^{-1})(CD)&=D^{-1}(C^{-1}C)D\\&=I.
\end{aligned}$$

因此 $(CD)^{-1}=D^{-1}C^{-1}$。这里用的是结合律，只有重新分组，没有交换因子。论证适用于所有可逆矩阵对，并非只验证了一个数值例。

</section>

<section class="lesson-check" markdown="1">

#### 任务 1 {#scaffold}

**Scaffold (self-written):** For the matrix M below, find $M^T$, $M(1,2,-1)^T$ and $2M-I_3$.

$$M=\begin{pmatrix}1&2&0\\0&-1&3\\4&0&2\end{pmatrix}.$$

<details markdown="1"><summary>提示</summary>

先写结果形状。转置交换索引，数乘则不改变位置。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$M^T=\begin{pmatrix}1&0&4\\2&-1&0\\0&3&2\end{pmatrix}.$$

$$M\begin{pmatrix}1\\2\\-1\end{pmatrix}=\begin{pmatrix}5\\-5\\2\end{pmatrix}.$$

$$2M-I_3=\begin{pmatrix}1&4&0\\0&-3&6\\8&0&3\end{pmatrix}.$$

例如中间分量是 $0(1)+(-1)(2)+3(-1)=-5$。最后一个运算只在主对角位置减一。若混淆了这些规则，回看[形状与运算](#model)，收起解答后再做。

</details>

</section>

## 独立完成 {#practice}

把示范结果移出视线。合法与不合法的运算都要说明理由；只写最后的数表，不能说明运算为何成立。

<section class="lesson-check" markdown="1">

#### 任务 1 {#practice-1}

**Independent task (self-written):** Using A, B and C from the demonstration, decide which of $A+B^T$, $A+B$, $A^TB^T$ are defined, and evaluate those that are. For D below, find $(CD)^{-1}$ and verify its order by multiplication. For which k is K singular?

$$D=\begin{pmatrix}1&1\\0&2\end{pmatrix},\qquad K=\begin{pmatrix}k&2\\3&1\end{pmatrix}.$$

<details markdown="1"><summary>提示</summary>

先写形状。可直接求 CD 的逆，也可把各逆倒序相乘；最后用单位矩阵核验。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$A+B^T=\begin{pmatrix}2&2&2\\-1&1&2\end{pmatrix}.$$

A+B 的形状不一致，无法相加。转置乘积先核对维数：

$$A^TB^T=(BA)^T=\begin{pmatrix}1&-1&3\\2&0&4\\0&3&-3\end{pmatrix}.$$

$$\begin{aligned}CD&=\begin{pmatrix}2&4\\1&3\end{pmatrix},\\D^{-1}&=\begin{pmatrix}1&-1/2\\0&1/2\end{pmatrix}.\end{aligned}$$

$$\begin{aligned}
(CD)^{-1}&=D^{-1}C^{-1}\\
&=\begin{pmatrix}3/2&-2\\-1/2&1\end{pmatrix}.
\end{aligned}$$

把结果放在 CD 左、右相乘都得到 $I_2$，故逆矩阵成立。参数矩阵则有

$$\det\begin{pmatrix}k&2\\3&1\end{pmatrix}=k-6=0\Rightarrow k=6.$$

形状判断错，做[重试一](#retry-shapes)；逆序错，做[重试二](#retry-order)。若漏掉奇异参数，先回看[行列式条件](#inverse)，现在只做[回顾一](#review-1)中的参数小问；其中的复合变换留待稍后完成。

</details>

</section>

<section class="lesson-check" markdown="1">

#### 任务 2 {#practice-2}

**Independent task (self-written):** Using M from the scaffold, calculate $M^2$ and $M^2-2M+I_3$. Explain whether squaring every individual entry would give $M^2$. Check one diagonal and one off-diagonal entry independently.

<details markdown="1"><summary>提示</summary>

先按行乘列算平方，再对矩阵多项式逐项加减。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$M^2=\begin{pmatrix}1&0&6\\12&1&3\\12&8&4\end{pmatrix}.$$

$$M^2-2M+I_3=\begin{pmatrix}0&-4&6\\12&4&-3\\4&8&1\end{pmatrix}.$$

首个对角项为 $1(1)+2(0)+0(4)=1$；位置 (2,1) 是 $0(1)+(-1)(0)+3(4)=12$。逐项平方在 (2,1) 会得到零，因此不是矩阵平方。若用了逐项平方，回到[行列示范](#demonstration)，再做[重试一](#retry-shapes)。

</details>

</section>

## 先修复规则，再尝试 {#retry}

单位矩阵检查失败，先查逆矩阵；答案形状错，问题发生在更早的维数判断。先回到对应讲解，收起旧答案后再尝试。

<section class="lesson-check" markdown="1">

#### Retry 1 {#retry-shapes}

**Retry (self-written):** For U and V below, decide which of UV, VU and U+V exist and calculate the valid results. Verify $(UV)^T=V^TU^T$.

$$U=\begin{pmatrix}1&0&2\end{pmatrix},\qquad V=\begin{pmatrix}2\\-1\\3\end{pmatrix}.$$

<details markdown="1"><summary>提示</summary>

先看外侧维数：一个乘积只有一行一列，另一个有三行三列。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$\begin{aligned}UV&=\begin{pmatrix}8\end{pmatrix},\\VU&=\begin{pmatrix}2&0&4\\-1&0&-2\\3&0&6\end{pmatrix}.\end{aligned}$$

U+V 无定义。一阶矩阵转置后不变，且 $V^TU^T=(8)$。做维数检查时，应保留 UV 是一行一列矩阵这一点。

</details>

</section>

<section class="lesson-check" markdown="1">

#### Retry 2 {#retry-order}

**Retry (self-written):** Solve $CX=(1,0)^T$ for X. Is $C^{-1}D^{-1}$ necessarily $(CD)^{-1}$?

<details markdown="1"><summary>提示</summary>

在左侧乘逆矩阵。要否定“一般总能同序”的说法，一个反例就足够。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$X=C^{-1}\begin{pmatrix}1\\0\end{pmatrix}=\begin{pmatrix}1\\-1\end{pmatrix}.$$

代回可查 $CX=(1,0)^T$。不一定；一般应为 $D^{-1}C^{-1}$。

$$C^{-1}D^{-1}=\begin{pmatrix}1&-1\\-1&3/2\end{pmatrix}.$$

它与任务一求出的逆不同。某些可交换矩阵对可能相同，但这不能证明一般结论。

</details>

</section>

## 学过变换后再回来 {#later-review}

<section class="lesson-check" markdown="1">

#### 任务 1 {#review-1}

**Later review (self-written):** For P and Q below, a vector is multiplied first by P and then by Q. Find the combined matrix and a matrix which restores every original vector. Verify your result for $(1,1)^T$. For which t is $P-tI_2$ singular?

$$P=\begin{pmatrix}1&2\\0&1\end{pmatrix},\qquad Q=\begin{pmatrix}0&-1\\1&0\end{pmatrix}.$$

<details markdown="1"><summary>提示</summary>

先把作用在向量上的实际次序写出，再决定矩阵乘积。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$\begin{aligned}QP&=\begin{pmatrix}0&-1\\1&2\end{pmatrix},\\(QP)^{-1}&=P^{-1}Q^{-1}\\&=\begin{pmatrix}2&1\\-1&0\end{pmatrix}.\end{aligned}$$

测试向量先变成 $(-1,3)^T$，再恢复到 $(1,1)^T$。一般成立还可由两个方向的乘积都是 $I_2$ 核验。

$$\det(P-tI_2)=(1-t)^2=0\Longleftrightarrow t=1.$$

次序错，回看[撤销乘积](#inverse)；漏参数，回看同处的行列式条件。

</details>

</section>

## 下一步 {#next-step}

能独立解释维数并核验逆序后，进入[平面变换](/zh/alevel/as-further-mathematics/transformations/)，之后回来做[混合回顾](#later-review)。三阶运算仍错时，按行列规则检查后重做任务二，不能只用二阶例子代替。

## 来源与范围 {#sources}

本课范围按 9665 v5.2；以下已读原题及配套评分材料用于设计作答证据，本页练习不是原题复制或官方评分标准。

<details markdown="1"><summary>官方来源</summary>

- [OxfordAQA 9665 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf), FPP1.1.
- FM02 June 2024 Q2, Q5(b); QP pp.4–5,11, MS pp.5,11. [FM02 June 2024 QP](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-question-paper.pdf) · [Final MS](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-mark-scheme.pdf).

</details>

[上一课](/zh/alevel/as-further-mathematics/improper-integrals/) · [课程路线](/zh/alevel/as-further-mathematics/#learning-route) · [下一课](/zh/alevel/as-further-mathematics/transformations/)
