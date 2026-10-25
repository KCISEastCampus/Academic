---
layout: subjects
title: "离散随机变量"
mathjax: true
grade: as
subject: as-mathematics
lang: zh-CN
translation_of: /alevel/as-mathematics/random-variables/
permalink: /zh/alevel/as-mathematics/random-variables/
toc_headings: h2
reading_layout: true
study_page: true
---

[AS 数学学习路线](/zh/alevel/as-mathematics/#learning-route) · S1.2 · OxfordAQA 9660 v5.2
{:.lesson-meta}

先读懂解释和完整示范，再拿纸笔做题。提示与解答分别展开。所有题目均为**自拟题**，没有官方分值；保留英文题干，中文帮助你理解和逐步独立表达。

- [数值、概率与平均值](#l19)
- [相加两个新结果，还是重复同一个？](#l20)

## 数值、概率与平均值 {#l19}

目标：建立分布，并为变化后的数值选择规则。先修：[概率](../probability/#l18)。

### 按发生机会给可能数值算平均 {#l19-concept}

随机变量给每个可能结果配一个数；分布列出这些可能数值和各自概率。概率不能为负，总和必须为 1。

均值是加权平均：越可能出现的值，占的分量越大；均值本身不一定是能出现的值。方差衡量与均值相差多少的平方；标准差开平方，把单位变回原来的单位。用 $E(X)$ 表示均值，$p(x)$ 表示 $X=x$ 的概率，$g(x)$ 表示由 x 算出的新数值，例如它的平方。计算时可以使用：

$$\begin{aligned}
E(X)&=\sum_x xp(x),\\
E(g(X))&=\sum_x g(x)p(x),\\
\operatorname{Var}(X)&=E(X^2)-[E(X)]^2.
\end{aligned}$$

求变化后的分布，先列出原来每个数变成什么，保留相应概率；几个结果变成同一个数时，把概率合并。对 $Y=aX+b$，简便规则是 $E(Y)=aE(X)+b$、$\operatorname{Var}(Y)=a^2\operatorname{Var}(X)$、$\operatorname{SD}(Y)=\lvert a\rvert\operatorname{SD}(X)$。每个值都加同样多，只移动位置、不改变分散程度；乘倍数会同时放大偏离均值的距离。

这些简便规则只用于一次式。平方、取倒数时，要列新值再算所需的平均；原来可能取零时，倒数没有定义。“平方后的平均”不能换成“平均后的平方”。

<div class="worked-example" markdown="1">

### 完整示范 {#l19-worked}

**Question:** Let $X$ take values $1,2,4$ with probabilities $k,2k,k$. Find $k$, its mean, variance and standard deviation.

概率总和必须为 1：$k+2k+k=1$，所以 $k=1/4$。加权平均的做法是每个数值乘以它的概率，再相加；求二阶矩时，先把数值平方：

$$\begin{aligned}
E(X)&=1\left(\frac14\right)+2\left(\frac12\right)+4\left(\frac14\right)=\frac94,\\
E(X^2)&=1^2\left(\frac14\right)+2^2\left(\frac12\right)+4^2\left(\frac14\right)=\frac{25}4.
\end{aligned}$$

方差要减的是“平均值的平方”，不是平均值本身：

$$\begin{aligned}
\operatorname{Var}(X)&=\frac{25}4-\left(\frac94\right)^2=\frac{19}{16},\\
\operatorname{SD}(X)&=\frac{\sqrt{19}}4.
\end{aligned}$$

平均值在最小、最大可能值之间。方差不为负，也符合“衡量偏差平方”的意思。

</div>

<div class="lesson-check" markdown="1">

### 带支架尝试 {#l19-scaffold}

**Question:** For this distribution, find the mean, variance and SD of $Y=3-2X$.

<details markdown="1">
<summary>提示</summary>

负乘数使数值次序反转，但不会使方差或标准差变负。

</details>

<details markdown="1">
<summary>解答与核验</summary>

$E(Y)=-3/2$、$\operatorname{Var}(Y)=19/4$、$\operatorname{SD}(Y)=\sqrt{19}/2$。

</details>

</div>

<div class="lesson-check" markdown="1">

### 独立任务 {#l19-independent}

**Question:** A constructed payment in dollars is $C=X^2$, using the distribution above. Find its expected value, variance and standard deviation, and explain why squaring the mean of X is insufficient.

<details markdown="1">
<summary>提示</summary>

列出 C 的值，再另列 C 平方的期望。

</details>

<details markdown="1">
<summary>解答与核验</summary>

付款值为 $1,4,16$，概率为 $1/4,1/2,1/4$。因此 $E(C)=25/4$ 美元，$E(C^2)=289/4$。方差为 $289/4-(25/4)^2=531/16$，单位为美元平方；标准差为 $\sqrt{531}/4$ 美元。把 $E(X)$ 平方得到 $81/16$，不等于 $E(X^2)$。

</details>

</div>

<div class="lesson-check" markdown="1">

### 再做一道独立题 {#l19-independent-distribution}

**Question:** Two fair coins are tossed independently. Let X be the number of heads, and let $Y=5-3X$. Build the distribution of X from the equally likely outcomes. Find the mean, variance and standard deviation of Y.

<details markdown="1">
<summary>提示</summary>

列出 HH、HT、TH、TT，再按 X 的值归类。

</details>

<details markdown="1">
<summary>解答与检查</summary>

四个结果的概率各为 $1/4$。因此 X 取 $0,1,2$ 的概率分别为 $1/4,1/2,1/4$，总和为 1。

$$E(X)=0+\frac12+\frac24=1,\qquad E(X^2)=\frac12+\frac44=\frac32.$$

所以 $\operatorname{Var}(X)=3/2-1=1/2$。使用线性变换的规则：

$$E(Y)=5-3(1)=2,\quad \operatorname{Var}(Y)=9\left(\frac12\right)=\frac92,\quad \operatorname{SD}(Y)=\frac3{\sqrt2}.$$

也可以列出 Y 的值 $5,2,-1$ 及相同的概率，重新加权核对。

</details>

</div>

### 诊断与修正 {#l19-diagnosis}

已知概率分布不使用分母 n−1 的样本标准差公式。应先算加权二阶矩，再减均值平方；若方差为负，说明有计算或建模错误。

分布或线性规则出错，回看[数值与概率](#l19-concept)，再[建立新分布](#l19-retry-distribution)。非线性变换出错，比较[平方值任务](#l19-independent)，关掉解答以后[试倒数](#l19-retry)。

<div class="lesson-check" markdown="1">

### 再尝试 {#l19-retry}

**Question:** For the same X, find the mean and variance of $Z=1/X$, explaining why the definition is valid.

这里的 “the same X” 指[最初的完整示范](#l19-worked)：$X=1,2,4$，对应概率为 $1/4,1/2,1/4$。本题用这张分布，不用后面硬币题的正面个数。

<details markdown="1">
<summary>提示</summary>

支持集不含零；分别求倒数与倒数平方的加权和。

</details>

<details markdown="1">
<summary>解答与核验</summary>

由于 $X\ne0$，定义有效。$E(Z)=9/16$、$E(Z^2)=25/64$，故 $\operatorname{Var}(Z)=25/64-81/256=19/256$。

</details>

</div>

<div class="lesson-check" markdown="1">

### 建立一个新分布 {#l19-retry-distribution}

**Question:** A fair six-sided die is rolled. X is 1 for a score of 1 or 2, and is 4 otherwise. Build its distribution and find the mean, variance and standard deviation of $Y=2X+1$.

<details markdown="1">
<summary>提示</summary>

数一数，有几个等可能点数会给出同一个 X 值。

</details>

<details markdown="1">
<summary>解答与检查</summary>

X 取 1 的概率是 $2/6=1/3$，取 4 的概率是 $4/6=2/3$。于是 $E(X)=1/3+8/3=3$，$E(X^2)=1/3+32/3=11$，所以 $\operatorname{Var}(X)=11-9=2$。得到 $E(Y)=7$、$\operatorname{Var}(Y)=8$、$\operatorname{SD}(Y)=2\sqrt2$。直接核对时，Y 的值为 3 和 9，概率仍相同。

</details>

</div>

## 相加两个新结果，还是重复同一个？ {#l20}

目标：分清独立的新结果与重复同一个结果。先修：[独立性](../probability/#l18)与[方差](#l19)。

### 两个新分数，还是一个分数用两遍？ {#l20-concept}

掷两次骰子，会得到两个结果；只掷一次再把分数乘二，是把同一个结果用两遍。两种做法可能均值相同，但分散程度不一定相同。

均值可以按一次式相加减，不需要独立。方差的下面这条相加规则则要求变量独立，且方差有限：

$$E(aX+bY)=aE(X)+bE(Y),\qquad \operatorname{Var}(aX+bY)=a^2\operatorname{Var}(X)+b^2\operatorname{Var}(Y).$$

算方差时，乘数要平方；所以即使求差，方差贡献仍相加，负号不会产生“负的分散程度”。多个独立变量同样逐项相加。

$2X$ 把同一次偏离放大两倍；$X_1+X_2$ 是两个独立偏离相加。先说清随机对象是什么，再选公式。字母不同不代表独立；如果没说明依赖关系，只有各自方差还不能决定总和的方差。

<div class="worked-example" markdown="1">

### 完整示范 {#l20-worked}

**Question:** Independent daily counts $X_1,X_2$ each have mean 8 and variance 3. Compare the mean and variance of $X_1+X_2$ with those of $2X_1$.

两者均值都为 $16$。独立两天给 $\operatorname{Var}(X_1+X_2)=3+3=6$；同一次结果翻倍给 $\operatorname{Var}(2X_1)=4(3)=12$。均值相同不表示离散度相同，后者把同一个随机偏差放大两倍。

</div>

<div class="lesson-check" markdown="1">

### 带支架尝试 {#l20-scaffold}

**Question:** Independent X and Y have means 5 and 2, variances 4 and 1. Find the mean and variance of $X-Y$.

<details markdown="1">
<summary>提示</summary>

均值相减，方差中负系数须平方。

</details>

<details markdown="1">
<summary>解答与核验</summary>

$E(X-Y)=3$、$\operatorname{Var}(X-Y)=4+1=5$。

</details>

</div>

<div class="lesson-check" markdown="1">

### 独立任务 {#l20-independent}

**Question:** Independent X, Y and Z have means 5, 2, 7 and variances 4, 1, 9 respectively. Find the mean and variance of $W=2X-Y+Z$. If independence is removed, which of your answers is still determined?

<details markdown="1">
<summary>提示</summary>

逐个处理系数，并区分两个公式所需的假设。

</details>

<details markdown="1">
<summary>解答与核验</summary>

$E(W)=10-2+7=15$、$\operatorname{Var}(W)=4(4)+1+9=26$。去掉独立性后，均值仍为 15，但给定资料不足以确定方差。

</details>

</div>

### 诊断与修正 {#l20-diagnosis}

得分中有减号不表示方差相减。独立是结果产生方式的性质，不是换不同字母就自动成立。

比较[新结果与重复结果](#l20-worked)，再做[三个副本的重试](#l20-retry)。

<div class="lesson-check" markdown="1">

### 再尝试 {#l20-retry}

**Question:** Three independent copies of X each have variance 2. Compare the variance of their sum with the variance of $3X$.

<details markdown="1">
<summary>提示</summary>

区分三个独立偏差与同一个偏差放大三倍。

</details>

<details markdown="1">
<summary>解答与核验</summary>

独立和的方差为 $2+2+2=6$；$3X$ 的方差为 $3^2(2)=18$。

</details>

</div>

## 学完之后 {#next-step}

收起解答，检查自己能否独立完成本课各组的再尝试，并解释方法与适用条件。仍有困难时回看对应示范；完成后继续下一课。

[上一课：概率](/zh/alevel/as-mathematics/probability/) · [课程目录](/zh/alevel/as-mathematics/#learning-route) · [下一课：二项分布](/zh/alevel/as-mathematics/binomial/)

学完这条路线后，做[综合题](/zh/alevel/as-mathematics/#mixed-statistics)。在之后一次学习中，关掉解答完成[回顾题](/zh/alevel/as-mathematics/#later-statistics)。

## 来源与范围 {#sources}

<details class="lesson-notes" markdown="1">
<summary>查看范围与评分材料</summary>

按[当前 9660 官方大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf)组织。配套评分材料用于核对作答证据；本页题目全部另行自拟，不能称为官方原题或官方评分标准。

Specification §3.2 S1.2; MA02 January 2025 Q6(c), Q8, MS pp13,15.

[MA01 2025 年 1 月原卷](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-question-paper.pdf) · [配套 MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-mark-scheme.pdf) · [MA02 2025 年 1 月原卷](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-question-paper.pdf) · [配套 MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-mark-scheme.pdf)

完成标准是能独立解释方法与检查条件，不是看完解答。未经过学生试用，不据此宣称学习效果已验证。

</details>
