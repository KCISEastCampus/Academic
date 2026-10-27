---
layout: subjects
title: "代数分式与证明"
mathjax: true
grade: igcse
subject: igcse-mathematics
lang: zh-CN
translation_of: /igcse/mathematics/algebraic-fractions-and-proof/
permalink: /zh/igcse/mathematics/algebraic-fractions-and-proof/
reading_layout: true
study_page: true
toc_headings: "h2"
---

[IGCSE 数学](/zh/igcse/mathematics/#learning-start)

{:.lesson-meta}

## 从这里开始 {#start}

带字母的分数仍遵守分数运算。新问题是分母可能变成零。先追踪哪些值允许，再用代数说明对所有允许值成立的结论。

先会[分数四则](/zh/igcse/mathematics/number-operations/#start)与[展开和因式](/zh/igcse/mathematics/expressions-and-formulae/#factorising)。先从数字分母和等价论证出发，再用同样的推理处理代数分母和一般证明。

本页示范、任务与数据均为自拟，无官方分值；数据用于说明，并非实测。先在纸上作答，再打开帮助。

{:.lesson-meta}

## 从普通分数规则开始 {#numeric-denominators}

加减先通分，因为相加的份必须同样大；乘法分子分母分别相乘；除以非零分数等于乘它的倒数。含几项的整个分子要保留括号。

<div class="worked-example" markdown="1">

### 把份数变成同样大小 {#example-numeric}

**Question:** Simplify $(x+1)/3-(x-2)/4$ and $(2x/3)\div(5/6)$.

$$\frac{x+1}{3}-\frac{x-2}{4}=\frac{4(x+1)-3(x-2)}{12}=\frac{4x+4-3x+6}{12}=\frac{x+10}{12}.$$

$$\frac{2x}{3}\div\frac56=\frac{2x}{3}\times\frac65=\frac{4x}{5}.$$

减号作用于 (x−2) 整体。取 x=2 检查相减：1−0=1，(2+10)/12=1。这些固定非零分母不会限制 x。

</div>

## 先做再看帮助 {#practice}

<div class="lesson-check" markdown="1">

### 使用四则运算 {#practice-numeric}

**Question:** Simplify $(x+2)/6+(x-1)/3$, $(x+2)/6-(x-1)/3$, $(3x/4)(2/5)$ and $(3x/4)\div(9/8)$.

<details markdown="1">

<summary>提示</summary>

前两式通成六分之一，除法把第二个分数取倒数。

</details>

<details markdown="1">

<summary>解答与检查</summary>

$$\frac{x+2+2(x-1)}6=\frac{x}{2},\qquad \frac{x+2-2(x-1)}6=\frac{4-x}{6},$$

$$\frac{3x}{4}\times\frac25=\frac{3x}{10},\qquad \frac{3x}{4}\times\frac89=\frac{2x}{3}.$$

若相减得 −x/6，是漏了常数。取 x=0，原相减式为 2/6+1/3=2/3。

</details>

</div>

## 什么可以约掉？ {#conditions}

零不能作除数。先从原式记录限制，再化简。约分只能约共同的非零因子，不能看到加法里同样的字母就划掉。

<div class="worked-example" markdown="1">

### 先分解再约分 {#example-cancel}

**Question:** Simplify $(x^2-9)/(x^2+x-6)$, stating all restrictions.

$$x^2-9=(x-3)(x+3),\qquad x^2+x-6=(x+3)(x-2),$$

$$\frac{x^2-9}{x^2+x-6}=\frac{(x-3)(x+3)}{(x+3)(x-2)}=\frac{x-3}{x-2},\quad x\ne-3,2.$$

x+3 非零才能约。新公式在 x=−3 虽然能算出数，原式却无定义，所以限制仍要保留。x=3 时分子零而分母非零，值为零是允许的。

</div>

## 合并有理式 {#operations}

<div class="worked-example" markdown="1">

### 建立公分母 {#example-operations}

**Question:** Write $2/(x-1)+3/(x+2)$ as a single fraction.

$$\frac{2}{x-1}+\frac{3}{x+2}=\frac{2(x+2)+3(x-1)}{(x-1)(x+2)}=\frac{5x+1}{(x-1)(x+2)},\quad x\ne1,-2.$$

第一分数上下都乘 x+2，在允许值上它非零。把分母直接相加会改变每份的大小。

</div>

<div class="worked-example" markdown="1">

### 除数也不能为零 {#example-division}

**Question:** Simplify $(x^2-4)/(x+1)\div((x-2)/(x+3))$.

$$\frac{x^2-4}{x+1}\div\frac{x-2}{x+3}=\frac{(x-2)(x+2)}{x+1}\times\frac{x+3}{x-2}=\frac{(x+2)(x+3)}{x+1}.$$

原分母排除 −1、−3；除数在 x=2 时为零，还要排除 2。因此 x≠−1、−3、2，即使某些因子约掉了也一样。取 x=0：原式 −4÷(−2/3)=6，简式也为 6。

</div>

<div class="lesson-check" markdown="1">

### 化简并保留条件 {#practice-fractions}

**Question:** Simplify each expression, stating every excluded x: (a) $(x^2-4)/(x^2-x-6)$; (b) $1/(x-1)-2/(x+1)$; (c) $((x+2)/(x-1))((x-1)/(x+3))$; (d) $((x+2)/(x-1))\div((x+2)/(x+3))$.

<details markdown="1">

<summary>提示</summary>

(a) 先因式分解；(b) 通分；(d) 除了原分母，还检查除数为零的位置。

</details>

<details markdown="1">

<summary>解答与检查</summary>

$$\text{(a)}\quad \frac{(x-2)(x+2)}{(x-3)(x+2)}=\frac{x-2}{x-3},\quad x\ne3,-2;$$

$$\text{(b)}\quad \frac{x+1-2(x-1)}{(x-1)(x+1)}=\frac{3-x}{(x-1)(x+1)},\quad x\ne1,-1;$$

$$\text{(c)}\quad \frac{x+2}{x+3},\quad x\ne1,-3;\qquad \text{(d)}\quad \frac{x+3}{x-1},\quad x\ne1,-3,-2.$$

(c) 中 x=−2 允许，乘积为零；(d) 中同一输入使除数为零，所以禁止。定义域取决于原运算，不只看最后公式。

</details>

</div>

## 解释等价，或找出反例 {#equivalence}

说明两式等价，要用对所有声明输入都有效的规则变形。试几个数能发现错误，却不能证明恒等；要否定“总是成立”，只需一个允许的反例。

<div class="worked-example" markdown="1">

### 用结构而非抽样 {#example-equivalence}

**Question:** Show that $4(x-2)+3x$ and $7x-8$ are equivalent for all real x.

$$4(x-2)+3x=4x-8+3x=7x-8.$$

分配律与合并同类项对每个实数都成立，因此支持一般结论。若右边写成 7x−7，两边始终差 1，反而对所有 x 都不成立。

</div>

<div class="lesson-check" markdown="1">

### 判断两个说法 {#practice-argument}

**Question:** Show that $(x+2)^2-x^2=4x+4$ for every real x. A learner claims $(x+2)^2=x^2+4$ for every x. Explain the missing part and give a counterexample.

<details markdown="1">

<summary>提示</summary>

平方要写成两个括号相乘，不能分别平方就结束。

</details>

<details markdown="1">

<summary>解答与检查</summary>

$$(x+2)^2-x^2=x^2+4x+4-x^2=4x+4.$$

漏了两个交叉乘积 2x+2x。取 x=1，左为 9，所声称的右边为 5；反例否定说法。只试 x=0 会掩盖错误。

</details>

</div>

## 从任意整数到结论 {#proof}

偶整数可写 2n，奇整数可写 2n+1，其中 n 为整数。相邻整数差 1，相邻奇数或相邻偶数差 2。先定义 n，最后把所得式与要证明的性质连起来。

<div class="worked-example" markdown="1">

### 一个完整的一般论证 {#example-proof}

**Question:** Prove that the sum of any two consecutive integers is odd.

令 n 为任意整数，下一整数为 n+1。

$$n+(n+1)=2n+1.$$

因为 n 是整数，2n+1 为奇数，所以任意两相邻整数的和是奇数。列几个数字组合无法涵盖所有整数，包括负整数。

</div>

<div class="lesson-check" markdown="1">

### 写出一般证明 {#practice-proof}

**Question:** (a) Prove that the square of any odd integer is odd. (b) Prove that the larger square minus the smaller square of two consecutive positive even integers is a multiple of 4 but not of 8. State your integer definitions.

<details markdown="1">

<summary>提示</summary>

(a) 用 2n+1；(b) 用 2n、2n+2，n 为正整数，展开并提取因子。

</details>

<details markdown="1">

<summary>解答与检查</summary>

$$\text{(a)}\quad (2n+1)^2=4n^2+4n+1=2(2n^2+2n)+1.$$

$$\text{(b)}\quad (2n+2)^2-(2n)^2=8n+4=4(2n+1).$$

(a) n 为任意整数，2n²+2n 仍为整数，因此是 2k+1 型奇数。(b) n 为正整数，4(2n+1) 是 4 的倍数，而除以 4 后为奇数，所以不是 8 的倍数。两项结论都要写，不能展开后就停止。

</details>

</div>

## 找出原因，再重试 {#retry}

公分母错误回看[普通规则](#numeric-denominators)；漏限制或错约项回看[条件](#conditions)；除法错回看[运算](#operations)；只举例回看[等价](#equivalence)；漏整数或结论回看[证明](#proof)。

<div class="lesson-check" markdown="1">

### 重试分式四则 {#retry-numeric}

**Question:** Simplify $(2x-1)/4+(x+1)/2$, $(2x-1)/4-(x+1)/2$, $(x/3)(9/2)$ and $(x/3)\div(2/9)$.

<details markdown="1">

<summary>提示</summary>

通成四分之一，给整个分子加括号。

</details>

<details markdown="1">

<summary>解答与检查</summary>

$$\frac{4x+1}{4},\qquad -\frac34,\qquad \frac{3x}{2},\qquad \frac{3x}{2}.$$

</details>

</div>

<div class="lesson-check" markdown="1">

### 重试限制与约分 {#retry-fractions}

**Question:** Simplify $(x^2-1)/(x^2-3x+2)$, $1/x+1/(x+1)$, and $((x-1)/(x+2))\div((x-1)/(x+3))$. State restrictions.

<details markdown="1">

<summary>提示</summary>

先写原限制，除数也必须非零。

</details>

<details markdown="1">

<summary>解答与检查</summary>

$$\frac{x+1}{x-2},\ x\ne1,2;\qquad \frac{2x+1}{x(x+1)},\ x\ne0,-1;$$

$$\frac{x+3}{x+2},\quad x\ne-2,-3,1.$$

最后的 x≠1 来自除数为零，不是原分母为零。

</details>

</div>

<div class="lesson-check" markdown="1">

### 重试恒等论证 {#retry-argument}

**Question:** Is $(x-1)(x+1)=x^2+1$ an identity? Correct it and justify the correction for every real x.

<details markdown="1">

<summary>提示</summary>

保留交叉乘积与常数符号。

</details>

<details markdown="1">

<summary>解答与检查</summary>

$$(x-1)(x+1)=x^2+x-x-1=x^2-1.$$

原说法假；x=0 得 −1 与 1。分配展开证明修正后的式子对所有实数成立。

</details>

</div>

<div class="lesson-check" markdown="1">

### 重试一般论证 {#retry-proof}

**Question:** Prove that the product of two consecutive integers is even. Then prove that the sum of two consecutive odd integers is a multiple of 4.

<details markdown="1">

<summary>提示</summary>

相邻整数中必有一个偶数；相邻奇数可写成 2n+1、2n+3。

</details>

<details markdown="1">

<summary>解答与检查</summary>

令 n 为任意整数。如果 n 偶，则 n(n+1) 有偶因子；如果 n 奇，则 n+1 偶。两种情况乘积都被 2 整除。

$$(2n+1)+(2n+3)=4n+4=4(n+1).$$

n+1 为整数，所以和为 4 的倍数。这是一般结论，不只是小数字的模式。

</details>

</div>

## 下一步与稍后回顾 {#next-step}

接着学[方程与不等式](/zh/igcse/mathematics/equations-and-inequalities/#start)。学过图像后，再比较 practice-fractions 的乘法与除法，解释允许输入为何不同。

[学过其他主题后，再做代数混合回顾。](/zh/igcse/mathematics/mixed-review/#algebra-review) 收起解答，记录哪些能无帮助完成。

## 范围与来源 {#sources}

<details markdown="1">

<summary>资格和实际使用的来源</summary>

A7–8，大纲 PDF 14（印刷 15）。分式推理从数字分母开始，再进入代数分母与一般证明。

实际读过 1E QP PDF 16 Q17、25 Q25 与 [MS PDF 9–10](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9260-92601E-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=9)、12；2E QP PDF 18 Q21 与 [MS PDF 12](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92602E-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=12)。

OxfordAQA International GCSE Mathematics **9260**，大纲 **v5.1**。[资格页](https://www.oxfordaqa.com/qualification/international-gcse-mathematics-9260/)；[大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-gcse-mathematics-specification.pdf)。以下评估材料均为 **Specimen 2018**，网址中的 2016 不是考季。它们用于校准范围和推理，本页没有冒称官方题的任务。

</details>
