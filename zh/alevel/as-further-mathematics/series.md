---
title: "有限和与无限级数极限"
layout: subjects
mathjax: true
grade: as
subject: as-further-mathematics
lang: zh-CN
translation_of: /alevel/as-further-mathematics/series/
permalink: /zh/alevel/as-further-mathematics/series/
toc_headings: h2, h3
study_page: true
---

[AS 高数课程](/zh/alevel/as-further-mathematics/) · A5 · FP1.5

本页示范、补步骤、独立任务及再尝试均为**自拟题（self-written）**，没有官方分值。先写方法与理由，再分别展开提示和解答。题干保留英文，中文说明帮助建立推理。

## 为什么必须保留边界项？ {#model}

**开始：**展开 $(2r-1)(2r+1)=4r^2-1$。**目标：**选择标准求和或消项，改变下限并以极限证明无限和。先修为 Σ 记号与代数；归纳法不作为 FM01 核心先修。

求和具有线性，先展开多项式再用以下公式。应会使用与解释，本课不声称官方公式册没有提供它们。

$$\sum_{r=1}^n r=\frac{n(n+1)}2,\quad\sum_{r=1}^n r^2=\frac{n(n+1)(2n+1)}6,\quad\sum_{r=1}^n r^3=\frac{n^2(n+1)^2}4.$$

$$\sum_{r=1}^n(2r-1)(2r+1)=4\sum_{r=1}^nr^2-n=\frac{n(4n^2+6n-1)}3.$$

下限为 m 时减去到 $m-1$ 的和，而不是到 m 的和。消项必须列出足够项，保留所有未抵消的边界。

## 示范：步长为二的消项及极限 {#demonstration}

$$\frac1{r(r+2)}=\frac12\left(\frac1r-\frac1{r+2}\right).$$

$$S_n=\sum_{r=1}^n\frac1{r(r+2)}=\frac12\left[1+\frac12-\frac1{n+1}-\frac1{n+2}\right].$$

第一排为 $1,1/2,1/3,1/4,\ldots$，第二排为 $1/3,1/4,\ldots,1/(n+1),1/(n+2)$。位移为二，所以首尾各留下两项。无限级数定义为部分和极限，不能含糊地约去“无穷处的项”。

$$\sum_{r=1}^\infty\frac1{r(r+2)}=\lim_{n\to\infty}S_n=\frac34.$$

相反，$\sum_{r=1}^n(2r-1)=n^2\to\infty$，所以相应级数发散。算几个部分和只能提示趋势，不能代替极限论证。

## 补步骤与独立选法 {#practice}

**Scaffold (self-written):** Use the standard sums to evaluate $\sum_{r=3}^n(3r^2+2r)$ for integer $n\ge3$; first find the sum from 1 to n.

<details markdown="1"><summary>补步骤核对</summary>

$$\sum_{r=1}^n(3r^2+2r)=\frac{n(n+1)(2n+3)}2;\qquad \sum_{r=3}^n(3r^2+2r)=\frac{n(n+1)(2n+3)}2-21.$$

</details>

**Independent task (self-written):** For integer $n\ge3$, find a closed form for $\sum_{r=3}^n1/[r(r+1)]$ and its infinite sum. A student claims that $\sum_{r=1}^\infty 1/[r(r+1)]+\sum_{r=1}^\infty1$ is finite “because most terms cancel”. Assess the claim.

<details markdown="1"><summary>提示</summary>

把分式写成差，列出首尾项。评价该说法时先看有限部分和，再取极限。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$\frac1{r(r+1)}=\frac1r-\frac1{r+1}\Rightarrow\sum_{r=3}^n\frac1{r(r+1)}=\frac13-\frac1{n+1}\longrightarrow\frac13.$$

所声称合并后的部分和为 $1-1/(n+1)+n$，趋于无穷；消项不能去掉额外的 n。

</details>

## 诊断与再尝试 {#retry}

若最小 n 代入不符，应重新数首尾项；若只给数值极限，应指出哪一项趋于零。

**Retry (self-written):** Evaluate $\sum_{r=1}^n[r^3-(r-1)^3]$ and decide whether its infinite series converges.

<details markdown="1"><summary>再尝试核对</summary>

$$\sum_{r=1}^n[r^3-(r-1)^3]=n^3;\qquad n^3\to\infty\quad\text{(divergent)}.$$

</details>

## 来源与范围 {#sources}

本课范围按 9665 v5.2；以下已读原题及配套评分材料用于设计作答证据，本页练习不是原题复制或官方评分标准。

FM01 样卷身份：QP 正文为 **Specimen 2018 Morning**，文件名含 2019/v3，页脚版本有差异；官网配套 MS 为样卷、版权 2017，并非某正式考季的实考 Final MS。

- [OxfordAQA 9665 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf), FP1.5.
- FM01 specimen Q1, Q6; QP pp.2,9, MS pp.4,7. [FM01 specimen QP](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9665-FM01-international-as-further-mathematics-specimen-paper-2019-v3-1.pdf) · [Specimen MS](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9665-FM01-international-as-further-mathematics-mark-scheme-2017-v2-1.pdf).

[上一课](/zh/alevel/as-further-mathematics/complex-numbers-and-roots/) · [课程路线](/zh/alevel/as-further-mathematics/#learning-route) · [下一课](/zh/alevel/as-further-mathematics/rates-and-approximations/)
