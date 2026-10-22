---
layout: subjects
title: "离散随机变量"
mathjax: true
grade: as
subject: as-mathematics
lang: zh-CN
translation_of: /alevel/as-mathematics/random-variables/
permalink: /zh/alevel/as-mathematics/random-variables/
toc_headings: h2, h3
study_page: true
---

[AS 数学学习路线](/zh/alevel/as-mathematics/#learning-route) · S1.2 · OxfordAQA 9660 v5.2

先用纸笔尝试题目，再按需打开提示；完成后用解答核对方法、条件与结果。所有题目均为**自拟题**，没有官方分值。英文题干、公式、数值与英文页一致；中文解释帮助你逐步独立用英文作答。

- [L19 单个变量：分布、矩与变换](#l19)
- [L20 独立和差与重复计分](#l20)

## L19 · 单个变量：分布、矩与变换 {#l19}

目标：建立有限分布，并区分线性与非线性变换。先修：L01、L18。

随机变量把每个结果对应到数值。有限分布要求概率非负且总和为 1。均值是概率加权的中心，不必是实际可取值；方差衡量平方离差，标准差单位则与原变量相同：

$$E(X)=\sum_x xp(x),\quad E(g(X))=\sum_x g(x)p(x),\quad \operatorname{Var}(X)=E(X^2)-[E(X)]^2.$$

对 $Y=aX+b$，$E(Y)=aE(X)+b$、$\operatorname{Var}(Y)=a^2\operatorname{Var}(X)$、$\operatorname{SD}(Y)=\lvert a\rvert\operatorname{SD}(X)$。平移改变中心但不改变离散度。非线性变换须直接列值并计算所需的两个矩；负幂要求支持集中没有零。若变换后有重复值，应合并相应概率。

### 示范与推理 {#l19-worked}

**Question:** Let $X$ take values $1,2,4$ with probabilities $k,2k,k$. Find $k$, its mean, variance and standard deviation.

$4k=1$ 得 $k=1/4$。矩为 $E(X)=(1+4+4)/4=9/4$、$E(X^2)=(1+8+16)/4=25/4$。所以方差为 $25/4-81/16=19/16$，标准差为 $\sqrt{19}/4$。均值在 1 与 4 之间，方差为正。

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

### 诊断与修正 {#l19-diagnosis}

已知概率分布不使用分母 n−1 的样本标准差公式。应先算加权二阶矩，再减均值平方；若方差为负，说明有计算或建模错误。

### 再尝试 {#l19-retry}

**Question:** For the same X, find the mean and variance of $Z=1/X$, explaining why the definition is valid.

<details markdown="1">
<summary>提示</summary>

支持集不含零；分别求倒数与倒数平方的加权和。

</details>

<details markdown="1">
<summary>解答与核验</summary>

由于 $X\ne0$，定义有效。$E(Z)=9/16$、$E(Z^2)=25/64$，故 $\operatorname{Var}(Z)=25/64-81/256=19/256$。

</details>

## L20 · 独立和差与重复计分 {#l20}

目标：先辨认随机对象，再组合其均值和方差。先修：L18–L19。

期望的线性性不要求独立。对方差有限的独立变量：

$$E(aX+bY)=aE(X)+bE(Y),\qquad \operatorname{Var}(aX+bY)=a^2\operatorname{Var}(X)+b^2\operatorname{Var}(Y).$$

差的方差中各贡献仍相加，因为系数要平方。多个独立变量同样逐个加方差贡献。重复同一次得分与重新独立试验不同：$2X$ 把同一次结果用两次，$X_1+X_2$ 使用两个独立结果。如果未给独立性等依赖信息，仅凭边缘方差不能确定和的方差。

### 示范与推理 {#l20-worked}

**Question:** Independent daily counts $X_1,X_2$ each have mean 8 and variance 3. Compare the mean and variance of $X_1+X_2$ with those of $2X_1$.

两者均值都为 $16$。独立两天给 $\operatorname{Var}(X_1+X_2)=3+3=6$；同一次结果翻倍给 $\operatorname{Var}(2X_1)=4(3)=12$。均值相同不表示离散度相同，后者把同一个随机偏差放大两倍。

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

### 诊断与修正 {#l20-diagnosis}

得分中有减号不表示方差相减。独立是结果产生方式的性质，不是换不同字母就自动成立。

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

## 来源与范围 {#sources}

按[当前 9660 官方大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf)组织。配套评分材料用于核对作答证据；本页题目全部另行自拟，不能称为官方原题或官方评分标准。

Specification §3.2 S1.2; MA02 January 2025 Q6(c), Q8, MS pp13,15.

[MA01 2025 年 1 月原卷](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-question-paper.pdf) · [配套 MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-mark-scheme.pdf) · [MA02 2025 年 1 月原卷](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-question-paper.pdf) · [配套 MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-mark-scheme.pdf)

完成标准是能独立解释方法与检查条件，不是看完解答。未经过学生试用，不据此宣称学习效果已验证。
