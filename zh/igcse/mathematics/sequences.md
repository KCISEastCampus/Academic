---
layout: subjects
title: "数列与第 n 项"
mathjax: true
grade: igcse
subject: igcse-mathematics
lang: zh-CN
translation_of: /igcse/mathematics/sequences/
permalink: /zh/igcse/mathematics/sequences/
reading_layout: true
study_page: true
toc_headings: "h2"
---

[IGCSE 数学](/zh/igcse/mathematics/#learning-start)

{:.lesson-meta}

## 从这里开始 {#start}

数列（sequence）把数按顺序排列。“求下一项”和“求第 100 项”是不同任务。先分清走下一步的规则与直接按位置求值的规则。

先会整数运算、[幂](/zh/igcse/mathematics/powers-roots-and-standard-form/#start)、[一次方程](/zh/igcse/mathematics/equations-and-inequalities/#balance)与[展开](/zh/igcse/mathematics/expressions-and-formulae/#expansion)。从数形规律和线性数列出发，再建立二次通项。

本页示范、任务与数据均为自拟，无官方分值；数据用于说明，并非实测。先在纸上作答，再打开帮助。

{:.lesson-meta}

## 按步骤还是按位置？ {#rules}

项（term）是数列里的一个数；位置 n 未另说明时从 1 开始。项间规则（term-to-term）需要首项并说明如何求下一项；位置规则（position-to-term）直接由 n 求值，不必先算前面。仅给有限几项不能数学上唯一决定后续，要结合声明的规则或类型。

<div class="worked-example" markdown="1">

### 同一起点，不同求法 {#example-rules}

**Question:** A sequence starts at 4 and adds 3 each time. Write the first five terms, then give a direct rule for term n.

$$4,7,10,13,16;\qquad t_n=4+3(n-1)=3n+1.$$

从第 1 项到第 n 项只走 n−1 步，不是 n 步。n=1 得 4，n=5 得 16。只写“n 乘 3”会漏掉起始偏移。

</div>

## 独立使用与建立规则 {#practice}

<div class="lesson-check" markdown="1">

### 用两种规则 {#practice-rules}

**Question:** (a) Start at 7 and subtract 3 each time: write the first five terms and a direct rule. (b) A different sequence has nth term n²−1: write terms 1,2,3,4 and term 10. Explain why n²−1 is not the instruction “square the previous term, then subtract 1”.

<details markdown="1">

<summary>提示</summary>

(b) 代入项号，不是把上一项输出代回。

</details>

<details markdown="1">

<summary>解答与检查</summary>

$$\text{(a)}\quad 7,4,1,-2,-5;\qquad t_n=7-3(n-1)=10-3n;$$

$$\text{(b)}\quad 0,3,8,15;\qquad t_{10}=10^2-1=99.$$

位置规则的 n 是项号，不是该项的数值。若对首项 0 做“平方减一”，下一项会得 −1，而不是正确的 3。

</details>

</div>

## 能拼成熟悉形状的数 {#families}

三角数把点排成 1、2、3、… 个一行；平方数排成 n 行、每行 n 点；立方数由 n 层、每层 n×n 个小立方体组成。形状的意思有助于识别与生成。

| n | 1 | 2 | 3 | 4 | 5 |
| --- | --- | --- | --- | --- | --- |
| Triangular | 1 | 3 | 6 | 10 | 15 |
| Square n² | 1 | 4 | 9 | 16 | 25 |
| Cube n³ | 1 | 8 | 27 | 64 | 125 |

三角数每次添下一行：从 1 起依次加 2、3、4、…。两个 n 行的同样三角形可拼成 n 行、n+1 列的长方形，因此每个有 n(n+1)/2 个点。n=3 时 1+2+3=6，两份正好 3×4=12。

$$T_n=\frac{n(n+1)}2,\qquad S_n=n^2,\qquad C_n=n^3.$$

<div class="worked-example" markdown="1">

### 不只找数，还找位置 {#example-families}

**Question:** Find the sixth triangular, square and cube numbers. Is 36 a square number, and if so which one?

$$T_6=6(7)/2=21,\quad S_6=6^2=36,\quad C_6=6^3=216.$$

36 是第六个平方数，因为 6²=36。三角数也可用第五个 15 加 6 得 21。三角数不是简单的 n²/2，拼成的长方形有 n+1 列。

</div>

<div class="lesson-check" markdown="1">

### 使用数形数列 {#practice-families}

**Question:** The lists 1,3,6,10,…; 1,4,9,16,…; 1,8,27,64,… follow the named triangular, square and cube families. Find each next term and each eighth term. Explain why 64 belongs to both square and cube families, giving its position in each.

<details markdown="1">

<summary>提示</summary>

三角数所添下一行，点数就是下一项号。

</details>

<details markdown="1">

<summary>解答与检查</summary>

$$\text{next}:\ 15,25,125;\qquad T_8=36,\quad S_8=64,\quad C_8=512;$$

$$64=8^2=4^3.$$

64 是第八个平方数与第四个立方数。数形族可以重叠，同一个值在不同数列的位置不同。

</details>

</div>

## 固定增量给出线性规则 {#linear}

等差数列（arithmetic progression）的相邻差 d 固定，首项 a 时通项为 a+d(n−1)。也可从 dn 开始，加一个偏移使首项吻合；还应检查后面几项，以免差数错了。

<div class="worked-example" markdown="1">

### 从数表到远处的项 {#example-linear}

**Question:** A linear sequence is 5,9,13,17,… . Find its nth term and decide whether 101 belongs.

$$d=4,\qquad t_n=5+4(n-1)=4n+1.$$

$$4n+1=101\Rightarrow4n=100\Rightarrow n=25.$$

101 是第 25 项。项号必须为正整数；即使方程算出 n=2.5，也不是数列的位置。

</div>

<div class="lesson-check" markdown="1">

### 求规则与判断归属 {#practice-linear}

**Question:** A linear sequence begins 8,11,14,17,… . Find its nth term and 50th term. Decide whether 152 and 153 belong, showing your reasoning. A second linear sequence has first term 20 and difference −4: give its nth term.

<details markdown="1">

<summary>提示</summary>

把通项等于候选值，检查项号是否为正整数。

</details>

<details markdown="1">

<summary>解答与检查</summary>

$$t_n=3n+5,\quad t_{50}=155;\quad 3n+5=152\Rightarrow n=49,$$

$$3n+5=153\Rightarrow n=148/3;\qquad u_n=20-4(n-1)=24-4n.$$

152 在第 49 项；153 对应 148/3，不是整数项号，所以不属于。递减数列开始 20、16、12，符合负差。

</details>

</div>

## 增量按固定速度改变 {#quadratic}

二次数列通项为 an²+bn+c，a≠0。第一阶差不固定，第二阶差恒为 2a。因为相邻差为 a[(n+1)²−n²]+b=2an+a+b，每走一步增加 2a。因此二阶差的一半给 a；从原各项减去 an²，剩下线性数列。

<div class="worked-example" markdown="1">

### 减去平方部分 {#example-quadratic}

**Question:** Find the nth term of the quadratic sequence 4,9,16,25,36,… .

| n | 1 | 2 | 3 | 4 | 5 |
| --- | --- | --- | --- | --- | --- |
| tₙ | 4 | 9 | 16 | 25 | 36 |
| subtract n² | 3 | 5 | 7 | 9 | 11 |

一阶差为 5、7、9、11，二阶差为 2、2、2，所以 a=1。余下数列通项为 2n+1，重新合并：

$$t_n=n^2+2n+1=(n+1)^2.$$

n=1 得 4、n=3 得 16、n=5 得 36。平方形式认出它们是从 2² 开始的平方数，可检查差分方法，而非跳过解释。

</div>

<div class="lesson-check" markdown="1">

### 建立并使用二次规则 {#practice-quadratic}

**Question:** A quadratic sequence begins 6,13,24,39,58,… . Find its nth term and sixth term. Decide whether 82 can be a term, explaining the position argument.

<details markdown="1">

<summary>提示</summary>

求一阶二阶差，减去 an²，再找余下的线性规则。

</details>

<details markdown="1">

<summary>解答与检查</summary>

$$\text{first differences}:\ 7,11,15,19;\quad \text{second}:\ 4,4,4;\quad a=2.$$

| n | 1 | 2 | 3 | 4 | 5 |
| --- | --- | --- | --- | --- | --- |
| tₙ−2n² | 4 | 5 | 6 | 7 | 8 |

$$t_n=2n^2+n+3,\quad t_6=81,\quad t_7=108.$$

tₙ₊₁−tₙ=4n+3 对正整数 n 恒正，所以严格递增。82 在相邻的 81 与 108 之间，没有整数位置。求出一个小数根不能说明它属于数列。

</details>

</div>

<div class="lesson-check" markdown="1">

### 判断适合哪种规则 {#practice-choice}

**Question:** One sequence is declared linear or quadratic and begins 3,7,13,21,31,… . Decide which type, derive an nth term and explain whether the instruction “add 4 each time” remains valid after the first step.

<details markdown="1">

<summary>提示</summary>

比较所有一阶差，而不只第一步。

</details>

<details markdown="1">

<summary>解答与检查</summary>

$$\text{differences}:\ 4,6,8,10;\quad \text{second}:\ 2,2,2,$$

$$t_n-n^2:\ 2,3,4,5,6;\qquad t_n=n^2+n+1.$$

在题设类型限制下为二次。“每次加 4”只对第一步，加到 7 会得 11 而非 13。若不说明类型，有限项本身还允许其他延续。

</details>

</div>

## 修复规则，再独立开始 {#retry}

把数值当项号回看[两种规则](#rules)；混淆族或位置回看[数形](#families)；多走一步回看[线性](#linear)；把差数当通项回看[二次](#quadratic)。收起旧解答。

<div class="lesson-check" markdown="1">

### 重试项间与位置规则 {#retry-rules}

**Question:** Start at 2 and double each term: list five terms. A different sequence has tₙ=3n−2: give its first five terms and term 20. Explain the different meanings of “double” and “3n”.

<details markdown="1">

<summary>提示</summary>

前者作用于上一项，后者作用于项号。

</details>

<details markdown="1">

<summary>解答与检查</summary>

$$2,4,8,16,32;\qquad 1,4,7,10,13;\quad t_{20}=58.$$

加倍是项间操作；3n 是项号先乘 3 再减 2。重复加倍的差不固定。

</details>

</div>

<div class="lesson-check" markdown="1">

### 重试数形族 {#retry-families}

**Question:** Find the seventh triangular, square and cube numbers. Is 125 square, cube, or both? State the position if it belongs.

<details markdown="1">

<summary>提示</summary>

分别用 n(n+1)/2、n²、n³。

</details>

<details markdown="1">

<summary>解答与检查</summary>

$$T_7=28,\quad S_7=49,\quad C_7=343;\qquad 125=5^3.$$

125 是第五个立方数，不是平方数，因为 11²=121、12²=144 把它夹住，中间没有整数平方。

</details>

</div>

<div class="lesson-check" markdown="1">

### 重试归属判断 {#retry-linear}

**Question:** A linear sequence is 14,9,4,−1,… . Find its nth term, term 8, and decide whether −36 belongs.

<details markdown="1">

<summary>提示</summary>

差数为负，项号仍须为正。

</details>

<details markdown="1">

<summary>解答与检查</summary>

$$t_n=14-5(n-1)=19-5n,\quad t_8=-21,$$

$$19-5n=-36\Rightarrow n=11.$$

−36 为第 11 项；项值为负不代表项号为负。

</details>

</div>

<div class="lesson-check" markdown="1">

### 重试变化的差 {#retry-quadratic}

**Question:** A quadratic sequence begins 1,6,15,28,45,… . Find its nth term and decide whether 66 belongs.

<details markdown="1">

<summary>提示</summary>

二阶差为 4，先减 2n²。

</details>

<details markdown="1">

<summary>解答与检查</summary>

$$t_n-2n^2:\ -1,-2,-3,-4,-5;\quad t_n=2n^2-n,$$

$$2n^2-n=66\Rightarrow(2n+11)(n-6)=0\Rightarrow n=6\text{ or }-\tfrac{11}{2}.$$

只有 n=6 为正整数，所以 66 是第六项；检查 2(36)−6=66。另一代数根不是项号，应排除。

</details>

</div>

## 下一步与稍后回顾 {#next-step}

接着学[微分与运动](/zh/igcse/mathematics/differentiation-and-motion/#start)，再混合复习[数与代数](/zh/igcse/mathematics/mixed-review/#number-review)。学过其他主题后，收起差分示范回做 practice-choice 并解释规则。

[学过其他主题后，再做代数混合回顾。](/zh/igcse/mathematics/mixed-review/#algebra-review) 收起解答，记录哪些能无帮助完成。

## 范围与来源 {#sources}

<details markdown="1">

<summary>资格和实际使用的来源</summary>

A24–26，大纲 PDF 17（印刷 18）。有限项总与题设的类型假定合用，不新增等差或等比级数求和要求。

实际读过 2E QP PDF 15 Q18 与配套 [MS PDF 11](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92602E-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=11)；其中明确使用二阶差与减去 an²。本页使用不同自拟数列。

OxfordAQA International GCSE Mathematics **9260**，大纲 **v5.1**。[资格页](https://www.oxfordaqa.com/qualification/international-gcse-mathematics-9260/)；[大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-gcse-mathematics-specification.pdf)。以下评估材料均为 **Specimen 2018**，网址中的 2016 不是考季。它们用于校准范围和推理，本页没有冒称官方题的任务。

</details>
