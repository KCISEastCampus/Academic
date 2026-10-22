---
title: "离散均匀概率与矩"
layout: subjects
mathjax: true
grade: as
subject: as-further-mathematics
lang: zh-CN
translation_of: /alevel/as-further-mathematics/discrete-uniform/
permalink: /zh/alevel/as-further-mathematics/discrete-uniform/
toc_headings: h2, h3
study_page: true
---

[AS 高数课程](/zh/alevel/as-further-mathematics/) · S2 · FS1.2

本页示范、补步骤、独立任务及再尝试均为**自拟题（self-written）**，没有官方分值。先写方法与理由，再分别展开提示和解答。题干保留英文，中文说明帮助建立推理。

## 这里的等可能是什么意思？ {#model}

**开始：**列出严格介于 2.5 与 6.2 的整数。**目标：**指定离散支持集、处理端点并推导矩。这里是连续整数上的离散模型，不是连续概率密度。设整数 $a\le b$、$N=b-a+1$；每个点概率为 $1/N$。

$$P(X=x)=1/N\quad(x\in\{a,a+1,\ldots,b\});\qquad P(X=x)=0\quad\text{otherwise}.$$

数出同时属于题目区间与支持集的整数。累积分布函数 CDF 呈阶梯状，在支持点处包含该点概率。

$$F(x)=\begin{cases}0&x<a\\(\lfloor x\rfloor-a+1)/N&a\le x<b\\1&x\ge b.\end{cases}$$

![Discrete uniform distribution on 1,2,3,4: four equal probability bars of height 1/4 and a step CDF with closed right-continuous values and open left limits.](/alevel/as-further-mathematics/diagrams/uniform.svg)

## 推导：先理解矩，再使用公式 {#demonstration}

设 U 在 $1,\ldots,N$ 上均匀，整数 $N\ge1$。用自然数和、平方和公式，再减均值平方。

$$E(U)=\frac1N\sum_{r=1}^Nr=\frac{N+1}2;\qquad E(U^2)=\frac1N\sum_{r=1}^Nr^2=\frac{(N+1)(2N+1)}6.$$

$$\operatorname{Var}(U)=\frac{(N+1)(2N+1)}6-\frac{(N+1)^2}4=\frac{N^2-1}{12}.$$

因 $X=U+a-1$，平移改变均值但不改变方差。$N=1$ 时公式也成立，方差为零。

$$E(X)=\frac{a+b}2;\qquad\operatorname{Var}(X)=\frac{N^2-1}{12}.$$

**Demonstration (self-written):** X is uniform on $\{-2,-1,0,1,2,3,4\}$. Find $P(X>1.5)$ and its moments.

$$N=7,\quad P(X>1.5)=3/7,\quad E(X)=1,\quad\operatorname{Var}(X)=4.$$

## 补步骤与独立选法 {#practice}

**Scaffold (self-written):** With X as above, compare $P(X<2)$ and $P(X\le2)$.

<details markdown="1"><summary>补步骤核对</summary>

$$P(X<2)=4/7;\qquad P(X\le2)=5/7.$$

</details>

**Independent task (self-written):** U is uniform on $\{1,\ldots,n\}$ with variance 4. Find integer n and $P(2.5<U\le6.2)$. Another student reports variance 3 for such a model: is any positive integer n possible? Justify.

<details markdown="1"><summary>提示</summary>

反解方差公式，并保留整数限制；数整数结果，不是量区间长度。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$n^2-1=48\Rightarrow n=7;\qquad U=3,4,5,6\Rightarrow P=4/7.$$

$$\operatorname{Var}(U)=3\Rightarrow n^2=37.$$

没有正整数平方为 37，所以第二个报告与模型不一致。

</details>

## 诊断与再尝试 {#retry}

用区间长度计算相当于把离散模型当连续；非整数支持集大小表示模型核验失败，不能四舍五入修补。

**Retry (self-written):** Y is uniform on $\{-3,-2,-1,0,1,2,3\}$. Find $P(\lvert Y\rvert<2)$, mean and variance.

<details markdown="1"><summary>再尝试核对</summary>

$$P(\lvert Y\rvert<2)=3/7,\qquad E(Y)=0,\qquad\operatorname{Var}(Y)=4.$$

</details>

## 来源与范围 {#sources}

本课范围按 9665 v5.2；以下已读原题及配套评分材料用于设计作答证据，本页练习不是原题复制或官方评分标准。

- [OxfordAQA 9665 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf), FS1.2.
- FM02 June 2024 Q8(b)(i); QP p.17, MS pp.14–15. [FM02 June 2024 QP](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-question-paper.pdf) · [Final MS](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-mark-scheme.pdf).

[上一课](/zh/alevel/as-further-mathematics/bayes/) · [课程路线](/zh/alevel/as-further-mathematics/#learning-route) · [下一课](/zh/alevel/as-further-mathematics/geometric-distribution/)
