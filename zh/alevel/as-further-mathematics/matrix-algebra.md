---
title: "矩阵运算与逆序"
layout: subjects
mathjax: true
grade: as
subject: as-further-mathematics
lang: zh-CN
translation_of: /alevel/as-further-mathematics/matrix-algebra/
permalink: /zh/alevel/as-further-mathematics/matrix-algebra/
toc_headings: h2, h3
study_page: true
---

[AS 高数课程](/zh/alevel/as-further-mathematics/) · B1 · FPP1.1

本页示范、补步骤、独立任务及再尝试均为**自拟题（self-written）**，没有官方分值。先写方法与理由，再分别展开提示和解答。题干保留英文，中文说明帮助建立推理。

## 乘积能否定义由什么决定？ {#model}

**开始：**辨认 2×3 数表的行、列。**目标：**计算至多 3×3 的合法乘积、转置、二阶逆，并解释顺序。矩阵（matrix）是数的排列，维数匹配表示分量匹配。加减要求相同形状，数乘作用于每一项。

$$A_{m\times n}B_{n\times p}=(AB)_{m\times p},\qquad (AB)_{ij}=\sum_{k=1}^n A_{ik}B_{kj}.$$

每项由 A 的一行乘 B 的一列。$AB$ 与 $BA$ 可能形状不同，甚至只有一个存在。单位矩阵 $I_n$ 主对角为 1、其余为零，使用时维数也要正确。

## 示范：非方阵与方阵运算 {#demonstration}

$$A=\begin{pmatrix}1&2&0\\-1&0&3\end{pmatrix},\quad B=\begin{pmatrix}1&0\\0&1\\2&-1\end{pmatrix};\qquad
AB=\begin{pmatrix}1&2\\5&-3\end{pmatrix},\quad BA=\begin{pmatrix}1&2&0\\-1&0&3\\3&4&-3\end{pmatrix}.$$

例如 $AB$ 左下项为 $(-1)(1)+0(0)+3(2)=5$。转置把行变成列；乘积转置和求逆都必须颠倒次序。

$$(AB)^T=B^TA^T;\qquad (CD)^{-1}=D^{-1}C^{-1}\quad\text{for invertible square }C,D.$$

下面的求逆公式限二阶且行列式非零。非方阵没有双侧逆。AS 包含三阶运算，不要求 FM03 的三阶求逆课程。

$$C=\begin{pmatrix}a&b\\c&d\end{pmatrix},\quad C^{-1}=\frac1{ad-bc}\begin{pmatrix}d&-b\\-c&a\end{pmatrix}\quad(ad-bc\ne0).$$

$$C=\begin{pmatrix}2&1\\1&1\end{pmatrix}\Rightarrow C^{-1}=\begin{pmatrix}1&-1\\-1&2\end{pmatrix};\qquad CC^{-1}=I_2.$$

## 补步骤与独立选法 {#practice}

**Scaffold (self-written):** Let $M=\begin{pmatrix}1&2&0\\0&-1&3\\4&0&2\end{pmatrix}$. Find $M^T$, $M(1,2,-1)^T$ and $2M-I_3$.

<details markdown="1"><summary>补步骤核对</summary>

$$M^T=\begin{pmatrix}1&0&4\\2&-1&0\\0&3&2\end{pmatrix},\quad M\begin{pmatrix}1\\2\\-1\end{pmatrix}=\begin{pmatrix}5\\-5\\2\end{pmatrix},\quad 2M-I_3=\begin{pmatrix}1&4&0\\0&-3&6\\8&0&3\end{pmatrix}.$$

</details>

**Independent task (self-written):** Using A, B and C from the demonstration, decide which of $A+B^T$, $A+B$, $A^TB^T$ are defined, and evaluate those that are. With $D=\begin{pmatrix}1&1\\0&2\end{pmatrix}$, find $(CD)^{-1}$ and verify its order by multiplication. For which k is $\begin{pmatrix}k&2\\3&1\end{pmatrix}$ singular?

<details markdown="1"><summary>提示</summary>

先写形状。可直接求 CD 的逆或把各逆倒序相乘；最后用单位矩阵核验。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$A+B^T=\begin{pmatrix}2&2&2\\-1&1&2\end{pmatrix};\qquad A+B\ \text{undefined};\qquad A^TB^T=(BA)^T=\begin{pmatrix}1&-1&3\\2&0&4\\0&3&-3\end{pmatrix}.$$

$$CD=\begin{pmatrix}2&4\\1&3\end{pmatrix};\quad (CD)^{-1}=D^{-1}C^{-1}=\begin{pmatrix}3/2&-2\\-1/2&1\end{pmatrix};\quad (CD)(CD)^{-1}=I_2.$$

$$\det\begin{pmatrix}k&2\\3&1\end{pmatrix}=k-6=0\Rightarrow k=6.$$

</details>

## 诊断与再尝试 {#retry}

逐项相乘没有执行行列求和；乘积求逆不倒序通常无法通过单位矩阵检查。

**Retry (self-written):** Solve $CX=(1,0)^T$ for X. Is $C^{-1}D^{-1}$ necessarily $(CD)^{-1}$?

<details markdown="1"><summary>再尝试核对</summary>

$$X=C^{-1}\begin{pmatrix}1\\0\end{pmatrix}=\begin{pmatrix}1\\-1\end{pmatrix}.$$

不一定，一般应为 $D^{-1}C^{-1}$。某些可交换矩阵可能相同，但不能据此推广。

</details>

## 来源与范围 {#sources}

本课范围按 9665 v5.2；以下已读原题及配套评分材料用于设计作答证据，本页练习不是原题复制或官方评分标准。

- [OxfordAQA 9665 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf), FPP1.1.
- FM02 June 2024 Q2, Q5(b); QP pp.4–5,11, MS pp.5,11. [FM02 June 2024 QP](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-question-paper.pdf) · [Final MS](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-mark-scheme.pdf).

[上一课](/zh/alevel/as-further-mathematics/improper-integrals/) · [课程路线](/zh/alevel/as-further-mathematics/#learning-route) · [下一课](/zh/alevel/as-further-mathematics/transformations/)
