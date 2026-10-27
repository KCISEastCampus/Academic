---
layout: subjects
title: "循环小数"
mathjax: true
grade: igcse
subject: igcse-mathematics
lang: zh-CN
translation_of: /igcse/mathematics/recurring-decimals/
permalink: /zh/igcse/mathematics/recurring-decimals/
reading_layout: true
study_page: true
toc_headings: "h2"
---

[IGCSE 数学](/zh/igcse/mathematics/#learning-start)
{:.lesson-meta}

## 写不完的小数，也可以精确 {#start}

三分之一是精确值，但屏幕上的 0.333333 只写了有限位。本课区分循环值与近似值，并在分数和循环小数之间双向转换。需要会[分数意义](/zh/igcse/mathematics/fractions-decimals-and-percentages/#same-amount)、[除法](/zh/igcse/mathematics/number-operations/#written-methods)，并知道等式两边做相同运算仍保持相等。以下均为自拟题，无官方分值。

## 下一位是什么，由余数决定 {#remainders}

书面除法一次产生一位。把 $\frac38$ 看作 3.000 除以 8：30 里有 3 个 8，余 6；落下 0，60 里有 7 个 8，余 4；再落下 0，40 里有 5 个 8，余 0，所以小数在 0.375 停止。

除数固定时，相同余数会产生相同的下一位与下一余数。非零余数再次出现，过程就会重复。上横线只标真正重复的部分：

$$0.\overline{27}=0.272727\ldots,\qquad0.1\overline6=0.166666\ldots.$$

第二个数中的 1 不重复。省略号必须有明确规律；仅凭计算器显示的有限数字，不能证明它永远循环。

<div class="worked-example" markdown="1">

### 看到余数重新出现 {#example-division}

**Question:** Convert $\frac7{12}$ to a decimal, marking the recurring part.

把 7.000... 除以 12。70 里取 5 个 12，余 10；100 里取 8 个 12，余 4；40 里取 3 个 12，又余 4。

$$70=5\times12+10,\quad100=8\times12+4,\quad40=3\times12+4.$$

余数 4 重现，以后每步都产生 3、余 4：

$$\frac7{12}=0.58\overline3.$$

只有 3 重复。把横线画在 583 上，会变成另一个数。大小检查：7/12 应比一半略大。

</div>

## 先让无限的尾巴对齐 {#align-tails}

乘 10 使小数点移一位，乘 100 移两位。要选择能让两式出现完全相同循环尾巴的移动次数，再相减消掉尾巴，留下有限的等式。这里说的是无限循环的精确值，不是屏幕舍入值。

<div class="worked-example" markdown="1">

### 循环两位的一整块 {#example-pure}

**Question:** Write $0.\overline{27}$ as a fraction in its simplest form.

设 $x=0.272727\ldots$。循环一整块有两位，所以移两位，而不是一位：

$$100x=27.272727\ldots,\qquad x=0.272727\ldots.$$

$$100x-x=27,\qquad99x=27,\qquad x=\frac{27}{99}=\frac3{11}.$$

3 除以 11 会重新得到 0.272727...。分母 99 来自两式的系数差 100-1，不是凭空套口诀。

</div>

<div class="worked-example" markdown="1">

### 前面有不循环的数字 {#example-mixed}

**Question:** Write $0.1\overline6$ as a fraction in its simplest form.

设 $x=0.166666\ldots$。先乘一次 10 越过不循环的 1，再乘一次 10 移过完整的一位循环：

$$10x=1.666666\ldots,\qquad100x=16.666666\ldots.$$

两式的尾巴现在完全相同：

$$100x-10x=15,\qquad90x=15,\qquad x=\frac{15}{90}=\frac16.$$

只做 $10x-x$ 会留下不同的尾巴，右侧不会成为整数。精确值不是 0.16 或 0.17，后两者只是近似值。

</div>

## 两个方向都要会 {#practice}

<div class="lesson-check" markdown="1">

### 追踪余数 {#practice-division}

**Question:** Use division to write $\frac56$ and $\frac7{11}$ as decimals. Mark the exact repeating blocks and show a repeated remainder. Is 0.6364 exactly equal to $\frac7{11}$?

<details markdown="1">
<summary>提示</summary>

每产生一位小数，就记下余数。

</details>

<details markdown="1">
<summary>解答与检查</summary>

5/6 中，50 产生 8、余 2，20 产生 3、又余 2。

$$\frac56=0.8\overline3.$$

7/11 中，70 产生 6、余 4；40 产生 3、余 7，回到了起始余数：

$$\frac7{11}=0.\overline{63}.$$

0.6364 是舍入值，不是精确分数。检查：$0.6364\times11=7.0004\ne7$。

</details>

</div>

<div class="lesson-check" markdown="1">

### 自己选择移几位 {#practice-conversion}

**Question:** Write $0.\overline{36}$ and $0.2\overline{36}$ as fractions in simplest form. Show why your subtraction removes the entire repeating tail.

<details markdown="1">
<summary>提示</summary>

第二个数先越过一位非循环数字，再移过两位的完整循环。

</details>

<details markdown="1">
<summary>解答与检查</summary>

第一个数设 $x=0.363636\ldots$：

$$100x-x=36,\qquad x=\frac{36}{99}=\frac4{11}.$$

第二个数设 $y=0.2363636\ldots$：

$$10y=2.363636\ldots,\qquad1000y=236.363636\ldots.$$

$$990y=234,\qquad y=\frac{234}{990}=\frac{13}{55}.$$

被消去的两条尾巴都从 .363636... 开始且完全相同。不循环的 2 通过 236 减 2 被处理；直接写 236/999 会错误地让三位全部循环。

</details>

</div>

<div class="lesson-check" markdown="1">

### 这个简便说法成立吗？ {#practice-reasoning}

**Question:** A learner claims $0.1\overline8=\frac{18}{99}$. Decide whether this is true, prove your conclusion by aligned equations, and compare $0.\overline9$ with 1 exactly.

<details markdown="1">
<summary>提示</summary>

第一个数的 1 不重复；第二个数也可以先设为字母。

</details>

<details markdown="1">
<summary>解答与检查</summary>

设 $x=0.188888\ldots$：

$$100x-10x=18.888888\ldots-1.888888\ldots=17,\qquad x=\frac{17}{90}.$$

所给分数重复的是 18，与原数不同。再设 $z=0.999999\ldots$：

$$10z-z=9,\qquad9z=9,\qquad z=1.$$

所以 $0.\overline9=1$，不只是约等于 1。有限的 0.999 小于 1；无限循环小数却不是一个有最后一位 9 的有限数字串。

</details>

</div>

## 先修复循环规律，再试 {#retry}

横线位置不对，或只凭计算器判断，回看[余数](#remainders)；分数不对，回看[尾巴对齐](#align-tails)。数值检查能否定错误答案，但转换本身仍需要等式推理。

<div class="lesson-check" markdown="1">

### 再从分数出发 {#retry-division}

**Question:** Convert $\frac{13}{15}$ to a recurring decimal using remainders. Explain why 0.867 is an approximation.

<details markdown="1">
<summary>提示</summary>

第一位之后，观察是否有余数立即重现。

</details>

<details markdown="1">
<summary>解答与检查</summary>

130 除以 15 产生 8、余 10；100 除以 15 产生 6、又余 10。

$$\frac{13}{15}=0.8\overline6,\qquad0.867\times15=13.005\ne13.$$

只有 6 重复。三位小数答案是根据下一位 6 进位得到的。

</details>

</div>

<div class="lesson-check" markdown="1">

### 再比较两种开头 {#retry-conversion}

**Question:** Convert $0.\overline{18}$ and $0.3\overline{18}$ to simplest fractions. Explain why their denominators before simplification differ.

<details markdown="1">
<summary>提示</summary>

第一式比较 100 倍和 1 倍，第二式比较 1000 倍和 10 倍。

</details>

<details markdown="1">
<summary>解答与检查</summary>

设 $x=0.\overline{18}$、$y=0.3\overline{18}$。

$$99x=18,\qquad x=\frac{18}{99}=\frac2{11}.$$

$$1000y=318.181818\ldots,\quad10y=3.181818\ldots,$$

$$990y=315,\qquad y=\frac{315}{990}=\frac7{22}.$$

第二个数要先越过不循环的 3。分母来自两个乘数的差，不能只看眼前写了几位数字。

</details>

</div>

## 后面的计算继续保留精确值 {#next-step}

接着学[百分变化](/zh/igcse/mathematics/percentage-change/#start)。隔一个主题再做[数的综合回顾](/zh/igcse/mathematics/mixed-review/#number-review)。两数在短屏幕上看起来相同，先比较精确分数，再判断是否相等。

## 范围与来源 {#sources}

<details markdown="1">
<summary>范围、层级与参考阅读</summary>

N12：分数与循环小数之间的双向转换。下面的配套分数题只支持精确分数运算要求，并不是官方循环小数题；所读样卷页中未找到专门循环小数题。

[OxfordAQA 9260 大纲 v5.1，PDF p.12](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-gcse-mathematics-specification.pdf)。

9260/2E, **Specimen 2018**, Q6 (exact-fraction prerequisite): [QP PDF p.5](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92602E-international-gcse-mathematics-specimen-paper-2016-v1.pdf#page=5), [MS PDF p.5](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92602E-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=5).

上述试题与配套评分页用于核对教学要求，本页未复刻官方试题。所有示范与任务均为自拟题，无官方分值；情境和图中数据为教学构造。

</details>
