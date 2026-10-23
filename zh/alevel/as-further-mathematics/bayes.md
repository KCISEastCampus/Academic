---
title: "贝叶斯：改变样本空间"
layout: subjects
mathjax: true
grade: as
subject: as-further-mathematics
lang: zh-CN
translation_of: /alevel/as-further-mathematics/bayes/
permalink: /zh/alevel/as-further-mathematics/bayes/
toc_headings: h2, h3
study_page: true
reading_layout: true
---

[AS 高数课程](/zh/alevel/as-further-mathematics/) · S1 · FS1.1

本页示范、补步骤、独立任务及再尝试均为**自拟题（self-written）**，没有官方分值。先写方法与理由，再分别展开提示和解答。题干保留英文，中文说明帮助建立推理。

## 先改变样本空间，再分清条件方向 {#model}

本课要独立画两或三来源的完整树，解释观察后的分母，并反求未知分支率。条件概率把样本空间限定为竖线后的事件，该事件概率必须为正。

$$
\begin{aligned}
&P(A\mid B)=\frac{P(A\cap B)}{P(B)},\\
&P(B)>0.
\end{aligned}
$$

来源互斥且完备，即每次恰好来自一个来源；各来源下再分观察事件与补事件。来源与结果不必独立。这里 r 只取二或三。

这里的两或三来源模型假定各来源先验为正，才能解释来源内条件概率。先验为零的来源应先移除；若仅剩一个来源，且观察事件可能发生，其后验就是一。

$$
\begin{aligned}
&P(B)=\sum_{i=1}^{r}P(A_i)P(B\mid A_i),\\
&P(A_j\mid B)\\
&\quad=\frac{P(A_j)P(B\mid A_j)}{P(B)},\\
&r\in\{2,3\},\\
&P(B)>0.
\end{aligned}
$$

先画并标明来源分支，再在各来源下画 B 及补事件，标条件概率；沿路径相乘写联合概率。第一层合计一、每对第二层合计一、全部叶子也合计一。圈出所有符合观察的叶子相加作分母，再选所求来源的叶子作分子。观察事件概率为零时，后验无定义。

若联合概率还不熟悉，先回到 [AS 概率](/zh/alevel/as-mathematics/probability/#l18)，再做补步骤题，之后独立画新树。

## 示范：重建观察到的总体 {#demonstration}

<section class="worked-example" markdown="1">

**Demonstration (self-written):** Sources A, B, C supply respectively 0.5, 0.3, 0.2 of items, with defect probabilities 0.02, 0.04, 0.10. An item is selected at random from the combined output. Given it is defective, find its source-C probability.

![Three-source probability tree: A 0.5, B 0.3, C 0.2; each splits to defective and not defective with probabilities 0.02/0.98, 0.04/0.96, 0.10/0.90. Leaf joint probabilities are shown.](/alevel/as-further-mathematics/diagrams/bayes.svg){: width="560" height="665" }

这幅图属于示范。分母包含全部三条次品路径；分子还须包含选中 C 的概率，不能只用 C 内的次品率。

$$
\begin{aligned}
&P(A\cap D)=0.5(0.02)=0.010,\\
&P(B\cap D)=0.3(0.04)=0.012,\\
&P(C\cap D)=0.2(0.10)=0.020,\\
&P(D)=0.010+0.012+0.020=0.042,\\
&P(C\mid D)=\frac{0.020}{0.042}=\frac{10}{21}.
\end{aligned}
$$

用构造频数核对：假想 10,000 件，三来源分别有 5,000、3,000、2,000 件，次品为 100、120、200 件。所求是 420 件次品中的 200 件。这是构造计数，不是实测。C 只占产量 20%，但占次品的比例更高；0.10 回答的是反向条件。

</section>

## 示范：反求未知发生率 {#inverse}

<section class="worked-example" markdown="1">

**Demonstration 2 (self-written):** Two equally likely sources have alert rates r and 0.2. Given an alert, the first source has probability 0.6. Find r and check the model.

两个来源先验各一半，观察后反求第一来源的警报率。先写后验再解方程，未知率同时影响分子和分母。

$$
\begin{aligned}
&0.6=\frac{0.5r}{0.5r+0.5(0.2)},\\
&0.6(r+0.2)=r,\\
&0.12=0.4r,\\
&r=0.3.
\end{aligned}
$$

核对：警报总概率为 0.25，第一来源警报叶子为 0.15，比值为 0.6。条件事件概率正，r 也在合法范围；每道反求题都要检查这两点。

</section>

## 补全分支，再独立画树 {#practice}

<section class="lesson-check" id="scaffold" markdown="1">

**Scaffold (self-written):** Complete the not-defective leaves of the same tree and calculate $P(C\mid D^c)$.

沿示范树补出非次品叶子，再把总体限制到非次品。

<details markdown="1"><summary>提示</summary>

先在各来源内取补概率，再沿路径相乘。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$
\begin{aligned}
&P(A\cap D^c)=0.49,\\
&P(B\cap D^c)=0.288,\\
&P(C\cap D^c)=0.18,\\
&P(D^c)=0.958,\\
&P(C\mid D^c)=\frac{0.18}{0.958}=\frac{90}{479}.
\end{aligned}
$$

六叶合计为一。

</details>

</section>

<section class="lesson-check" id="practice-1" markdown="1">

**Independent task (self-written):** A randomly selected sample was processed by laboratory A with probability 0.6 or B with probability 0.4. Pass probabilities are 0.9 for A and 0.75 for B. Draw and label a complete probability tree. A sample fails; find the probability B processed it, and explain why 0.25 is not the answer.

先自行画完整树，标分支与叶概率，再解释条件方向。

<details markdown="1"><summary>提示</summary>

圈出全部失败叶子，不只是 B 的失败。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$
\begin{aligned}
&P(F\mid A)=0.1,\\
&P(F\mid B)=0.25,\\
&P(A\cap F)=0.06,\\
&P(B\cap F)=0.10,\\
&P(A\cap F^c)=0.54,\\
&P(B\cap F^c)=0.30,\\
&P(F)=0.06+0.10=0.16,\\
&P(B\mid F)=\frac{0.10}{0.16}=\frac58.
\end{aligned}
$$

完整树第一层为 0.6/0.4，第二层为 0.9/0.1、0.75/0.25；四叶合计一。0.25 的条件是 B，题目条件却是失败。

</details>

</section>

<section class="lesson-check" id="practice-2" markdown="1">

**Independent task 2 (self-written):** Sources A, B, C have shares 0.2, 0.5, 0.3 and alert probabilities 0.1, 0.2, 0.4 respectively. Draw a new complete probability tree, label every branch and joint-probability leaf, and find the probability of C given an alert. Check your tree in two ways.

独立画三来源树，核对各处分支和全部叶子。

<details markdown="1"><summary>提示</summary>

每个来源都要有警报与无警报分支。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$
\begin{aligned}
&P(A\cap L)=0.02,\\
&P(A\cap L^c)=0.18,\\
&P(B\cap L)=0.10,\\
&P(B\cap L^c)=0.40,\\
&P(C\cap L)=0.12,\\
&P(C\cap L^c)=0.18,\\
&P(L)=0.24,\\
&P(C\mid L)=\frac{0.12}{0.24}=\frac12.
\end{aligned}
$$

第一层为 0.2/0.5/0.3，第二层为 0.1/0.9、0.2/0.8、0.4/0.6。各处分支合计一；六叶也合计一（警报 0.24，无警报 0.76）。必须有自己画的树，不能只报后验。

</details>

</section>

<section class="lesson-check" id="practice-3" markdown="1">

**Independent task 3 (self-written):** A and B supply 0.4 and 0.6 of items. Their defect rates are r and 0.1. Given a defect, A has probability 0.5. Find r and check that the proposed model is admissible.

把后验写成含 r 的方程，再检查范围与分母。

<details markdown="1"><summary>提示</summary>

分支发生率不等于后验。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$
\begin{aligned}
&\frac12=\frac{0.4r}{0.4r+0.6(0.1)},\\
&0.2r+0.03=0.4r,\\
&r=0.15,\\
&P(D)=0.12.
\end{aligned}
$$

两条次品叶子均为 0.06；发生率合法，条件事件可以发生。

</details>

</section>

## 按错因选择同目标重试 {#retry}

条件反向时做重试 1，用语言说出分母；树不完整时在白纸上做重试 2；发生率不合法时回看反求示范再做重试 3。后验超过一，通常是分母漏了符合观察的路径。

<section class="lesson-check" id="retry-1" markdown="1">

**Retry (self-written):** In the laboratory task, a sample passes. Find the probability it came from A.

观察结果改为通过，重新选择后验的分子与分母。

<details markdown="1"><summary>提示</summary>

这次圈出通过叶子。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$
\begin{aligned}
&P(F^c)=0.54+0.30=0.84,\\
&P(A\mid F^c)=\frac{0.54}{0.84}=\frac9{14}.
\end{aligned}
$$

新的观察总体是全部通过样本。

</details>

</section>

<section class="lesson-check" id="retry-2" markdown="1">

**Retry 2 (self-written):** A, B, C process shares 0.25, 0.25, 0.5 of samples; their pass rates are 0.8, 0.6, 0.9. Draw and label a complete tree on blank paper. Given a failure, find the probability of C and verify all leaf probabilities sum to one.

重画三来源完整树，不照抄前题叶概率。

<details markdown="1"><summary>提示</summary>

先在各来源内取通过率的补概率。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$
\begin{aligned}
&P(A\cap F)=0.05,\\
&P(A\cap F^c)=0.20,\\
&P(B\cap F)=0.10,\\
&P(B\cap F^c)=0.15,\\
&P(C\cap F)=0.05,\\
&P(C\cap F^c)=0.45,\\
&P(F)=0.20,\\
&P(C\mid F)=\frac14.
\end{aligned}
$$

第二层为 0.8/0.2、0.6/0.4、0.9/0.1，六叶合计一。

</details>

</section>

<section class="lesson-check" id="retry-3" markdown="1">

**Retry 3 (self-written):** A and B have shares 0.25 and 0.75, defect rates r and 0.2. Given a defect, A has probability 0.4. Find and check r.

反求第一来源的次品率，再代回检查概率条件。

<details markdown="1"><summary>提示</summary>

分开写 A 次品联合概率与全部次品概率。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$
\begin{aligned}
&0.4=\frac{0.25r}{0.25r+0.75(0.2)},\\
&0.10r+0.06=0.25r,\\
&r=0.4,\\
&P(D)=0.25.
\end{aligned}
$$

分子为 0.10，代回得 0.10/0.25=0.4。

</details>

</section>

## 学完另一统计章后再回来 {#later-review}

<section class="lesson-check" id="later-task" markdown="1">

**Later review (self-written):** Three suppliers have shares 0.5, 0.25, 0.25 and alert rates 0.1, 0.2, 0.4. Without notes, draw a complete tree and find the first supplier probability given an alert and given no alert. Would conditioning on an alert still be defined if all three alert rates were zero? Explain.

延后独立画树，选择两种分母并处理不可能条件。

<details markdown="1"><summary>提示</summary>

分别确定两种观察总体，再判断警报能否发生。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$
\begin{aligned}
&P(A\cap L)=0.05,\\
&P(A\cap L^c)=0.45,\\
&P(B\cap L)=0.05,\\
&P(B\cap L^c)=0.20,\\
&P(C\cap L)=0.10,\\
&P(C\cap L^c)=0.15,\\
&P(L)=0.20,\\
&P(L^c)=0.80,\\
&P(A\mid L)=\frac14,\\
&P(A\mid L^c)=\frac{0.45}{0.80}=\frac9{16}.
\end{aligned}
$$

若警报率全为零，警报事件概率为零，相应条件概率无定义，不能写为零。

</details>

</section>

## 决定下一步 {#next-step}

能独立画新树并解释后验分母后，再学离散均匀。树对但比值反时，回看观察总体示范并重做重试 1；反求卡住时，先写联合概率再重做反求示范。学完下一统计章后，不看笔记完成延后回顾。

## 来源与范围 {#sources}

本课范围按 9665 v5.2；以下已读原题及配套评分材料用于设计作答证据，本页练习不是原题复制或官方评分标准。

- [OxfordAQA 9665 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf), FS1.1.
- FM02 June 2024 Q6; QP p.13, MS p.12. [FM02 June 2024 QP](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-question-paper.pdf) · [Final MS](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-mark-scheme.pdf).

[上一课](/zh/alevel/as-further-mathematics/euler-method/) · [课程路线](/zh/alevel/as-further-mathematics/#learning-route) · [下一课](/zh/alevel/as-further-mathematics/discrete-uniform/)
