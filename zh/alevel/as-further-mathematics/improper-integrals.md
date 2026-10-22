---
title: "反常积分：收敛还是发散"
layout: subjects
mathjax: true
grade: as
subject: as-further-mathematics
lang: zh-CN
translation_of: /alevel/as-further-mathematics/improper-integrals/
permalink: /zh/alevel/as-further-mathematics/improper-integrals/
toc_headings: h2, h3
study_page: true
---

[AS 高数课程](/zh/alevel/as-further-mathematics/) · A7 · FP1.7

本页示范、补步骤、独立任务及再尝试均为**自拟题（self-written）**，没有官方分值。先写方法与理由，再分别展开提示和解答。题干保留英文，中文说明帮助建立推理。

## 无界区域何时面积有限？ {#model}

**开始：**把 $x^{-2}$ 从 1 积到有限的 $R>1$。**目标：**识别反常端点，引入截断再用极限判收敛。先修为幂函数、定积分及简单极限，不需高级积分法。无穷不是可以直接代入原函数的数。

$$\int_1^\infty f(x)\,dx=\lim_{R\to\infty}\int_1^R f(x)\,dx;\qquad
\int_0^1 f(x)\,dx=\lim_{\varepsilon\to0^+}\int_\varepsilon^1 f(x)\,dx.$$

第二种形式用于 f 在 0 无界或无定义时。“收敛”要求极限是有限实数；内点奇异处的两侧要分别收敛，不能把发散部分抵消成普通反常积分。

## 示范：比较相近的幂 {#demonstration}

$$\int_1^\infty x^{-2}\,dx=\lim_{R\to\infty}(1-R^{-1})=1;\qquad
\int_1^\infty x^{-1/2}\,dx=\lim_{R\to\infty}2(\sqrt R-1)=\infty.$$

$$\int_0^1 x^{-1/2}\,dx=\lim_{\varepsilon\to0^+}2(1-\sqrt\varepsilon)=2;\qquad
\int_0^1 x^{-2}\,dx=\lim_{\varepsilon\to0^+}(\varepsilon^{-1}-1)=\infty.$$

同一个幂在无穷端收敛，在零端可能发散。一般地，$\int_1^\infty x^{-p}\,dx$ 在 $p>1$ 收敛，$\int_0^1 x^{-p}\,dx$ 在 $p<1$ 收敛。对 $p\ne1$ 用幂函数原函数即可证明；$p=1$ 时对数在两端均发散。这是两个不同端点的极限。

![Area under y=1/x² from x=1 to a finite cutoff R=4; dashed boundary at R and the remaining positive tail are labelled.](/alevel/as-further-mathematics/diagrams/improper.svg)

图只画有限截断，不能证明遗漏尾部趋零。本例尾部等于 $1/R$，这才给出论证。

## 补步骤与独立选法 {#practice}

**Scaffold (self-written):** Evaluate $\int_4^\infty x^{-3/2}\,dx$ with a finite upper bound first.

<details markdown="1"><summary>补步骤核对</summary>

$$\lim_{R\to\infty}[-2x^{-1/2}]_4^R=\lim_{R\to\infty}(1-2/\sqrt R)=1.$$

</details>

**Independent task (self-written):** Decide whether each integral converges and evaluate those that do: $\int_0^4x^{-1/2}\,dx$, $\int_0^1x^{-3/2}\,dx$, and $\int_{-1}^1x^{-2}\,dx$. A calculator returns a finite value after cutting out a small interval around zero: does that settle the last case?

<details markdown="1"><summary>提示</summary>

先找反常端点与内部奇点，再选截断。最后一项须分别检查两侧。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$\int_0^4x^{-1/2}\,dx=\lim_{\varepsilon\to0^+}(4-2\sqrt\varepsilon)=4.$$

$$\int_0^1x^{-3/2}\,dx=\lim_{\varepsilon\to0^+}(2/\sqrt\varepsilon-2)=\infty.$$

$$\int_{-1}^{-\varepsilon}x^{-2}\,dx=\varepsilon^{-1}-1,\qquad \int_{\varepsilon}^1x^{-2}\,dx=\varepsilon^{-1}-1.$$

最后一项两侧均发散，所以反常积分发散。每个有限截断可积，不代表极限有限。

</details>

## 诊断与再尝试 {#retry}

若用同一原函数跨过零，应补回定义域断点；若只说“很大”，应写出变化的截断及极限。

**Retry (self-written):** For which p do both $\int_0^1x^{-p}\,dx$ and $\int_1^\infty x^{-p}\,dx$ converge?

<details markdown="1"><summary>再尝试核对</summary>

没有实数 p：第一项要求 $p<1$，第二项要求 $p>1$；$p=1$ 时两项都发散。

</details>

## 来源与范围 {#sources}

本课范围按 9665 v5.2；以下已读原题及配套评分材料用于设计作答证据，本页练习不是原题复制或官方评分标准。

FM01 样卷身份：QP 正文为 **Specimen 2018 Morning**，文件名含 2019/v3，页脚版本有差异；官网配套 MS 为样卷、版权 2017，并非某正式考季的实考 Final MS。

- [OxfordAQA 9665 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf), FP1.7.
- FM01 specimen Q3; QP pp.4–5, MS p.5. [FM01 specimen QP](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9665-FM01-international-as-further-mathematics-specimen-paper-2019-v3-1.pdf) · [Specimen MS](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9665-FM01-international-as-further-mathematics-mark-scheme-2017-v2-1.pdf).

[上一课](/zh/alevel/as-further-mathematics/rates-and-approximations/) · [课程路线](/zh/alevel/as-further-mathematics/#learning-route) · [下一课](/zh/alevel/as-further-mathematics/matrix-algebra/)
