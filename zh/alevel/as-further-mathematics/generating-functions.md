---
title: "概率生成函数"
layout: subjects
mathjax: true
grade: as
subject: as-further-mathematics
lang: zh-CN
translation_of: /alevel/as-further-mathematics/generating-functions/
permalink: /zh/alevel/as-further-mathematics/generating-functions/
toc_headings: h2, h3
study_page: true
---

[AS 高数课程](/zh/alevel/as-further-mathematics/) · S4 · FS1.4

本页示范、补步骤、独立任务及再尝试均为**自拟题（self-written）**，没有官方分值。先写方法与理由，再分别展开提示和解答。题干保留英文，中文说明帮助建立推理。

## 一个函数怎样编码概率？ {#model}

**开始：**写一个多项式，使常数项为 $P(X=0)$、t 的系数为 $P(X=1)$。**目标：**推导四种指定 PGF，恢复概率与矩，并组合独立变量。X 必须取非负整数；t 是占位变量，不是时间，也不是 X 的取值。

$$G_X(t)=E(t^X)=\sum_{k=0}^\infty P(X=k)t^k,\quad G_X(1)=1;\qquad P(X=k)=\frac{G_X^{(k)}(0)}{k!}.$$

级数在 $\lvert t\rvert\le1$ 收敛。把 1 处导数用作有限矩时，相应矩必须存在，可从收敛半径内部取单侧极限。逐项求导得：

$$G_X'(1)=\sum kP(X=k)=E(X),\qquad G_X''(1)=\sum k(k-1)P(X=k)=E[X(X-1)].$$

$$\operatorname{Var}(X)=G_X''(1)+G_X'(1)-[G_X'(1)]^2.$$

## 推导四种模型 {#demonstration}

**Bernoulli：**X 以概率 q 取 0、概率 p 取 1，其中 $q=1-p$、$0\le p\le1$。直接由定义：

$$G_X(t)=qt^0+pt^1=q+pt;\quad G_X'(1)=p,\quad G_X''(1)=0\Rightarrow\operatorname{Var}(X)=p-p^2=pq.$$

**二项分布：**整数 $n\ge1$，由 n 次独立 Bernoulli 试验组成；可把概率公式代入二项式定理，也可相乘独立 Bernoulli 的 PGF：

$$G_X(t)=\sum_{k=0}^n\binom nk q^{n-k}p^kt^k=(q+pt)^n.$$

$$G_X'(1)=np,\qquad G_X''(1)=n(n-1)p^2\Rightarrow\operatorname{Var}(X)=npq.$$

**离散均匀：**在 $1,\ldots,n$ 上、整数 $n\ge1$，把每个等概率项相加。多项式对所有 t 有定义；分式在 1 处只是可去奇点。

$$G_X(t)=\frac{t+t^2+\cdots+t^n}{n}=\frac{t(1-t^n)}{n(1-t)}\quad(t\ne1),\qquad G_X(1)=1.$$

$$G_X'(1)=\frac1n\sum_{k=1}^n k=\frac{n+1}2,\quad
G_X''(1)=\frac1n\sum_{k=1}^n(k^2-k)=\frac{n^2-1}3.$$

代入方差恒等式得 $(n^2-1)/12$，与直接矩推导一致。

**几何分布：**X 数到首次成功的试验次数，$0<p\le1$、$q=1-p$。提出 pt 后用等比和；$p=1$ 时化为 t。

$$G_X(t)=\sum_{k=1}^\infty pq^{k-1}t^k=pt\sum_{j=0}^\infty(qt)^j=\frac{pt}{1-qt}\quad(\lvert qt\rvert<1).$$

$$G_X'(t)=\frac{p}{(1-qt)^2},\quad G_X''(t)=\frac{2pq}{(1-qt)^3}\Rightarrow E(X)=\frac1p,\quad\operatorname{Var}(X)=\frac q{p^2}.$$

这四种为指定基础；旧参考笔记中的 Poisson 例为补充，不能代替它们。独立 X、Y 的期望可分解，从而证明乘积规则；独立条件不可省。

$$G_{X+Y}(t)=E(t^Xt^Y)=E(t^X)E(t^Y)=G_X(t)G_Y(t).$$

## 补步骤与独立选法 {#practice}

**Scaffold (self-written):** For $G(t)=(1+2t+t^2)/4$, read the probability table and use derivatives to find the mean and variance.

<details markdown="1"><summary>补步骤核对</summary>

$$P(X=0,1,2)=(1/4,1/2,1/4);\qquad G'(1)=1,\quad G''(1)=1/2,\quad\operatorname{Var}(X)=1/2.$$

</details>

**Independent task (self-written):** A count Z has PGF $(0.2+0.8t)^2(t+t^2)/2$. Give an interpretation as a sum of independent variables, find $P(Z=2)$, $E(Z)$ and $\operatorname{Var}(Z)$. Is $H(t)=0.2-0.1t+0.9t^2$ a PGF just because $H(1)=1$?

<details markdown="1"><summary>提示</summary>

把两因子识别为分布；匹配幂次求系数，矩可由导数或独立和规则核对。归一化不是概率的唯一条件。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$Z=X+Y,\quad X\sim\operatorname{Bin}(2,0.8),\quad Y\text{ uniform on }\{1,2\},\quad X,Y\text{ independent}.$$

$$P(Z=2)=0.5(2\cdot0.2\cdot0.8)+0.5(0.2^2)=0.18;\quad E(Z)=1.6+1.5=3.1;\quad\operatorname{Var}(Z)=0.32+0.25=0.57.$$

H 不是 PGF：t 的系数代表负概率。有限 PGF 的系数必须非负且合计为 1。

</details>

## 诊断与再尝试 {#retry}

若把方差直接写成 $G''(1)$，说明混淆了阶乘矩与二阶原点矩；先展开 $X^2=X(X-1)+X$。

**Retry (self-written):** For $G(t)=(1+t+t^2)/3$, find $P(X=0)$, $E(X^2)$ and variance.

<details markdown="1"><summary>再尝试核对</summary>

$$P(X=0)=1/3,\quad G'(1)=1,\quad G''(1)=2/3,\quad E(X^2)=5/3,\quad\operatorname{Var}(X)=2/3.$$

</details>

## 来源与范围 {#sources}

本课范围按 9665 v5.2；以下已读原题及配套评分材料用于设计作答证据，本页练习不是原题复制或官方评分标准。

- [OxfordAQA 9665 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf), FS1.4.
- FM02 June 2024 Q7; QP pp.14–15, MS p.13. [FM02 June 2024 QP](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-question-paper.pdf) · [Final MS](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-mark-scheme.pdf).

[上一课](/zh/alevel/as-further-mathematics/geometric-distribution/) · [课程路线](/zh/alevel/as-further-mathematics/#learning-route) · [下一课](/zh/alevel/as-further-mathematics/linear-combinations/)
