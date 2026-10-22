---
title: "Matrix algebra and inverse order"
layout: subjects
mathjax: true
grade: as
subject: as-further-mathematics
lang: en
permalink: /alevel/as-further-mathematics/matrix-algebra/
toc_headings: h2, h3
study_page: true
---

[AS Further Mathematics](/alevel/as-further-mathematics/) · B1 · FPP1.1

All demonstrations, scaffolded attempts, independent tasks and retries here are **self-written**, with no official marks. Write your method and reasons before opening hints and solutions separately.

## What determines whether a product exists? {#model}

**Start:** identify the rows and columns of a 2×3 array. **Goal:** compute compatible products up to 3×3, transpose, invert a 2×2 matrix and explain order. A matrix is an array; matching dimensions encode the matching components. Addition/subtraction require equal shapes; scalar multiplication acts on every entry.

$$A_{m\times n}B_{n\times p}=(AB)_{m\times p},\qquad (AB)_{ij}=\sum_{k=1}^n A_{ik}B_{kj}.$$

For one entry, take one row of A and one column of B. $AB$ and $BA$ may have different shapes or only one may exist. $I_n$ has diagonal ones and other entries zero; use the correctly sized identity.

## Demonstration: rectangular and square operations {#demonstration}

$$A=\begin{pmatrix}1&2&0\\-1&0&3\end{pmatrix},\quad B=\begin{pmatrix}1&0\\0&1\\2&-1\end{pmatrix};\qquad
AB=\begin{pmatrix}1&2\\5&-3\end{pmatrix},\quad BA=\begin{pmatrix}1&2&0\\-1&0&3\\3&4&-3\end{pmatrix}.$$

For example the lower-left entry of $AB$ is $(-1)(1)+0(0)+3(2)=5$. Swapping rows with columns gives the transpose. Reversing product order is necessary for both transpose and inverse.

$$(AB)^T=B^TA^T;\qquad (CD)^{-1}=D^{-1}C^{-1}\quad\text{for invertible square }C,D.$$

The inverse formula below is for 2×2, with nonzero determinant. A rectangular matrix does not have a two-sided inverse. AS includes 3×3 arithmetic, but does not require the FM03 course on 3×3 inverses.

$$C=\begin{pmatrix}a&b\\c&d\end{pmatrix},\quad C^{-1}=\frac1{ad-bc}\begin{pmatrix}d&-b\\-c&a\end{pmatrix}\quad(ad-bc\ne0).$$

$$C=\begin{pmatrix}2&1\\1&1\end{pmatrix}\Rightarrow C^{-1}=\begin{pmatrix}1&-1\\-1&2\end{pmatrix};\qquad CC^{-1}=I_2.$$

## Scaffold and independent choice {#practice}

**Scaffold (self-written):** Let $M=\begin{pmatrix}1&2&0\\0&-1&3\\4&0&2\end{pmatrix}$. Find $M^T$, $M(1,2,-1)^T$ and $2M-I_3$.

<details markdown="1"><summary>Scaffold check</summary>

$$M^T=\begin{pmatrix}1&0&4\\2&-1&0\\0&3&2\end{pmatrix},\quad M\begin{pmatrix}1\\2\\-1\end{pmatrix}=\begin{pmatrix}5\\-5\\2\end{pmatrix},\quad 2M-I_3=\begin{pmatrix}1&4&0\\0&-3&6\\8&0&3\end{pmatrix}.$$

</details>

**Independent task (self-written):** Using A, B and C from the demonstration, decide which of $A+B^T$, $A+B$, $A^TB^T$ are defined, and evaluate those that are. With $D=\begin{pmatrix}1&1\\0&2\end{pmatrix}$, find $(CD)^{-1}$ and verify its order by multiplication. For which k is $\begin{pmatrix}k&2\\3&1\end{pmatrix}$ singular?

<details markdown="1"><summary>Hint</summary>

Write every shape first. For the inverse, either invert CD directly or reverse the individual inverse order; verify the result by obtaining the identity.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$A+B^T=\begin{pmatrix}2&2&2\\-1&1&2\end{pmatrix};\qquad A+B\ \text{undefined};\qquad A^TB^T=(BA)^T=\begin{pmatrix}1&-1&3\\2&0&4\\0&3&-3\end{pmatrix}.$$

$$CD=\begin{pmatrix}2&4\\1&3\end{pmatrix};\quad (CD)^{-1}=D^{-1}C^{-1}=\begin{pmatrix}3/2&-2\\-1/2&1\end{pmatrix};\quad (CD)(CD)^{-1}=I_2.$$

$$\det\begin{pmatrix}k&2\\3&1\end{pmatrix}=k-6=0\Rightarrow k=6.$$

</details>

## Diagnose and retry {#retry}

An entry-by-entry “product” ignores the matched row/column sum. An inverse with the same order as the original product usually fails the identity check.

**Retry (self-written):** Solve $CX=(1,0)^T$ for X. Is $C^{-1}D^{-1}$ necessarily $(CD)^{-1}$?

<details markdown="1"><summary>Retry check</summary>

$$X=C^{-1}\begin{pmatrix}1\\0\end{pmatrix}=\begin{pmatrix}1\\-1\end{pmatrix}.$$

No: generally the inverse is $D^{-1}C^{-1}$. Special commuting matrices may coincide, but cannot justify the general claim.

</details>

## Sources and scope {#sources}

Scope follows 9665 v5.2. The paired questions and mark schemes below informed the required evidence; these exercises do not reproduce their questions or award official marks.

- [OxfordAQA 9665 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf), FPP1.1.
- FM02 June 2024 Q2, Q5(b); QP pp.4–5,11, MS pp.5,11. [FM02 June 2024 QP](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-question-paper.pdf) · [Final MS](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-mark-scheme.pdf).

[Previous](/alevel/as-further-mathematics/improper-integrals/) · [Course route](/alevel/as-further-mathematics/#learning-route) · [Next](/alevel/as-further-mathematics/transformations/)
