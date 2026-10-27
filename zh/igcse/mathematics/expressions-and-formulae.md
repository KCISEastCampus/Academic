---
layout: subjects
title: "代数式与公式"
mathjax: true
grade: igcse
subject: igcse-mathematics
lang: zh-CN
translation_of: /igcse/mathematics/expressions-and-formulae/
permalink: /zh/igcse/mathematics/expressions-and-formulae/
reading_layout: true
study_page: true
toc_headings: "h2"
---

[IGCSE 数学](/zh/igcse/mathematics/#learning-start)

{:.lesson-meta}

## 从这里开始 {#start}

一张票 4 元，三张就是 3×4。张数未知时，用 n 表示，4n 仍能说明费用。代数让同一个计算在数字改变后继续适用。

先会正负数运算和[分数四则](/zh/igcse/mathematics/number-operations/#start)。从字母开始，再学习三个括号、二次项系数不为1的因式分解及复杂公式变形。

本页示范、任务与数据均为自拟，无官方分值；数据用于说明，并非实测。先在纸上作答，再打开帮助。

{:.lesson-meta}

## 用字母表示数 {#letters}

字母代表数，不是物品标签。如果 n 数票的张数，就只能取非负整数。4n 省略乘号，意为 4×n；ab 是两数相乘，不是拼成一个两位数。幂表示重复相乘：x²=x×x，而 2x=x+x。

<div class="worked-example" markdown="1">

### 建立费用规则 {#example-letters}

**Question:** A shop charges 3 dollars for each notebook and 2 dollars for delivery. Write the cost C for n notebooks.

本子的费用重复 n 次，运费只收一次。定义 n 为正整数。

$$C=3n+2.$$

n=4 时为 14 元：四份 3 元加一份 2 元。5n 会把运费对每本都收一遍。

</div>

## 分清式子在说什么 {#language}

**代数式（expression）**如 3x+2 表示一个值；**方程（equation）**如 3x+2=14，表示两边相等，可能只对特定 x 成立；**公式（formula）**联系数量，如 C=3n+2；**恒等式（identity）**如 3(x+2)≡3x+6，对所有允许的 x 成立；**不等式（inequality）**如 3x+2<14，比较大小。

**项（term）**是加减连接的部分，要保留符号：5x−2y+7 的项为 5x、−2y、7。**因子（factor）**则是相乘的部分，如 3 与 (x+2) 是 3(x+2) 的因子；−2y 中的数因子 −2 叫**系数（coefficient）**。

## 逐步独立尝试 {#practice}

<div class="lesson-check" markdown="1">

### 表示并解释 {#practice-language}

**Question:** A taxi charges 5 dollars plus 2 dollars per kilometre. Write a formula for cost C over d kilometres, d≥0. Identify the terms in the cost expression and the factors in 2(d+3). Is 2(d+3)=2d+6 an identity? Is 2d+5=17 an identity? Explain.

<details markdown="1">

<summary>提示</summary>

固定费用与重复费用分开。恒等式要对每个允许输入都成立。

</details>

<details markdown="1">

<summary>解答与检查</summary>

$$C=5+2d.$$

费用式的项为 5、2d；2(d+3) 的因子为 2 与 (d+3)。2(d+3) 展开对所有 d 都等于 2d+6，是恒等式，左边的因子为 2 与 (d+3)。2d+5=17 只在 d=6 成立，不是恒等式；d=0 就是反例。

</details>

</div>

## 谨慎代入数值 {#substitution}

代入（substitution）要把每个字母都换成给定值。负数先加括号再平方；顺序为幂、乘除、加减。

<div class="worked-example" markdown="1">

### 负数输入 {#example-substitution}

**Question:** Evaluate $2a^2-3b$ when $a=-2$ and $b=5$.

$$2(-2)^2-3(5)=2(4)-15=-7.$$

平方作用于整个 −2。不加括号的 −2² 表示 −(2²)=−4，是另一个运算。

</div>

<div class="lesson-check" markdown="1">

### 检查一个说法 {#practice-substitution}

**Question:** For $a=-3$, $b=2$, evaluate $ab$, $a^2-b^2$ and $2a^2$. A learner says $2a^2=(2a)^2$. Use your values to decide.

<details markdown="1">

<summary>提示</summary>

ab 是相乘；2a² 的平方只作用于 a。

</details>

<details markdown="1">

<summary>解答与检查</summary>

$$ab=-6,\qquad a^2-b^2=9-4=5,\qquad 2a^2=18,\qquad (2a)^2=36.$$

说法不成立：先平方后加倍，不等于先加倍再平方。这个反例足以否定所谓恒等式。

</details>

</div>

## 合并同类项与展开 {#expansion}

只有字母及其幂次相同的项才能合并：3x+5x=8x，3x 与 5x² 却不是同类项。展开把外面的因子乘到括号每一项；括号前的负号相当于每一项都乘 −1。

<div class="worked-example" markdown="1">

### 保留每个乘积 {#example-expansion}

**Question:** Expand and simplify $(x+3)(x-2)-2(x-1)$.

第一括号每一项都乘第二括号每一项，再把 −2 分配进去。

$$(x+3)(x-2)=x^2-2x+3x-6=x^2+x-6,$$

$$x^2+x-6-2x+2=x^2-x-4.$$

取 x=0 检查，两种写法都得 −4。这可排查错误，但不是所有 x 的证明；一般性来自展开步骤。

</div>

<div class="lesson-check" markdown="1">

### 写面积代数式 {#practice-expansion}

**Question:** A rectangle has sides (x+4) cm and (x−1) cm, where x>1. Write its area in expanded form. Then simplify $3x^2+2x-x^2+5x$.

<details markdown="1">

<summary>提示</summary>

面积要把两边表达式相乘，不同幂次不能合并。

</details>

<details markdown="1">

<summary>解答与检查</summary>

$$(x+4)(x-1)=x^2+3x-4,\qquad 3x^2+2x-x^2+5x=2x^2+7x.$$

面积为 (x²+3x−4) cm²；x>1 保证边长为正。x=2 代入两式均得 6 cm²。

</details>

</div>

## 三个因子 {#three-brackets}

<div class="worked-example" markdown="1">

### 先处理两个括号 {#example-three}

**Question:** Expand $(x+1)(x-1)(x+2)$.

先做两个括号，避免漏项；再把二次式乘第三括号的每项。

$$(x+1)(x-1)=x^2-1,$$

$$(x^2-1)(x+2)=x^3+2x^2-x-2.$$

取 x=1，原式含零因子，三次式也为零。

</div>

<div class="lesson-check" markdown="1">

### 组合三个因子 {#practice-three}

**Question:** Expand $(x+1)(x+2)(x-3)$ and check your result at x=0 and x=3.

<details markdown="1">

<summary>提示</summary>

先乘前两个，再把最后括号分配到三项。

</details>

<details markdown="1">

<summary>解答与检查</summary>

$$(x^2+3x+2)(x-3)=x^3-3x^2+3x^2-9x+2x-6=x^3-7x-6.$$

x=0 两式均为 −6，x=3 均为零。代值可查漏项，一般等价则由分配展开说明。

</details>

</div>

## 把乘法结构找回来 {#factorising}

因式分解（factorising）逆向使用展开。先找每项共同因子：6x²−9x=3x(2x−3)。对 x²+bx+c，找和为 b、积为 c 的两数，因为 (x+r)(x+s)=x²+(r+s)x+rs。

<div class="worked-example" markdown="1">

### 兼顾中间项与常数项 {#example-factors}

**Question:** Factorise $x^2+x-6$ and $x^2-16$.

3、−2 的和为 1，积为 −6。平方差使用 (u−v)(u+v)=u²−v²。

$$x^2+x-6=(x+3)(x-2),\qquad x^2-16=(x-4)(x+4).$$

乘回去检查每个系数。x²+16 是平方和，不能套用这个实数平方差模式。

</div>

x² 系数不为 1 时，把中间项拆成可分组的两项。2x²+7x+3 的拆分数要积为 2×3=6，和为 7，故取 6 与 1。

$$2x^2+7x+3=2x^2+6x+x+3=2x(x+3)+(x+3)=(2x+1)(x+3).$$

<div class="lesson-check" markdown="1">

### 选择分解方式 {#practice-factors}

**Question:** Factorise fully: $8x^2-12x$, $x^2-5x+6$, $9x^2-25$, and $6x^2+x-2$. Explain how multiplying back checks your last answer.

<details markdown="1">

<summary>提示</summary>

依次考虑公因式、和积配对或平方差；最后一式拆分数积为 −12、和为 1。

</details>

<details markdown="1">

<summary>解答与检查</summary>

$$8x^2-12x=4x(2x-3),\quad x^2-5x+6=(x-2)(x-3),$$

$$9x^2-25=(3x-5)(3x+5),\quad 6x^2+x-2=(3x+2)(2x-1).$$

最后一式的中间乘积 −3x 与 4x 合成 x，首项乘积 6x²，常数积 −2；只配对常数不够。

</details>

</div>

## 改变单独出现的字母 {#rearrange}

公式主元（subject）是单独放在一边的字母。变形要对两边做同样的运算，保持相等；先逆转最外层运算，像逐层拆包装。

<div class="worked-example" markdown="1">

### 按反顺序撤去运算 {#example-rearrange}

**Question:** Make t the subject of $v=u+at$, where $a\ne0$.

两边先减 u，再同除 a。

$$v-u=at,\qquad t=\frac{v-u}{a}.$$

a≠0 才能相除；a=0 时原式只说 v=u，无法确定 t。

</div>

<div class="lesson-check" markdown="1">

### 选择新主元 {#practice-rearrange}

**Question:** Make h the subject of $A=\frac12bh$ ($b>0$). Make r the subject of $C=2\pi r$. Then evaluate h when A=30 cm² and b=12 cm.

<details markdown="1">

<summary>提示</summary>

用两边同除撤去乘法因子。

</details>

<details markdown="1">

<summary>解答与检查</summary>

$$2A=bh,\qquad h=\frac{2A}{b},\qquad r=\frac{C}{2\pi},\qquad h=\frac{2(30)}{12}=5\text{ cm}.$$

检查 ½×12×5=30 cm²；面积除以长度得到长度，单位吻合。

</details>

</div>

## 同一字母出现两次 {#twice}

主元出现两次时，不能只移走其中一次。先清分母，再把含主元的项收在一边，提取主元，最后相除；还要保留分母不能为零的条件。

<div class="worked-example" markdown="1">

### 先收集再相除 {#example-twice}

**Question:** Make x the subject of $y=(3x+2)/(x-1)$, with $x\ne1$.

$$y(x-1)=3x+2,\quad yx-y=3x+2,\quad yx-3x=y+2,$$

$$x(y-3)=y+2,\qquad x=\frac{y+2}{y-3},\quad y\ne3.$$

为什么 y≠3？代 y=3 会要求 3x−3=3x+2，不可能。取 y=8 得 x=2，代原式也得 8。不要除以 x，否则会丢掉原来允许的 x=0。

</div>

<div class="lesson-check" markdown="1">

### 处理所有主元 {#practice-twice}

**Question:** Make x the subject of $y=(4x-1)/(x+2)$, where $x\ne-2$. State the restriction on y. Also make r the subject of $V=\pi r^2h$ for $r>0$, $h>0$.

<details markdown="1">

<summary>提示</summary>

x 要先收集两处；r 则先隔离 r²，由半径条件选择正平方根。

</details>

<details markdown="1">

<summary>解答与检查</summary>

$$yx+2y=4x-1,\quad x(y-4)=-1-2y,\quad x=\frac{1+2y}{4-y},\quad y\ne4.$$

$$r^2=\frac{V}{\pi h},\qquad r=\sqrt{\frac{V}{\pi h}},\quad V>0.$$

y=4 会要求 8=−1，不可能。半径不能选负平方根分支。

</details>

</div>

## 把指数知识接进来 {#indices}

同底数相乘把因子连起来，所以指数相加；相除约掉因子，所以指数相减。这是乘除规则，不能用于两项相加。零次和负次幂要求底数非零。对分数指数，a^(1/n) 表示 n 次方根，还需符合实数开根条件。

$$x^3x^2=x^5,\quad \frac{x^5}{x^2}=x^3\ (x\ne0),\quad 16^{3/4}=(\sqrt[4]{16})^3=8.$$

<div class="lesson-check" markdown="1">

### 使用并辨别规则 {#practice-indices}

**Question:** Simplify $6a^3b^2/(3ab^5)$ for nonzero a,b. Is $x^2+x^3=x^5$ an identity? Evaluate $27^{2/3}$.

<details markdown="1">

<summary>提示</summary>

指数相减用于除法；加法说法可用 x=1 检查。

</details>

<details markdown="1">

<summary>解答与检查</summary>

$$\frac{6a^3b^2}{3ab^5}=\frac{2a^2}{b^3},\qquad 27^{2/3}=(\sqrt[3]{27})^2=9.$$

说法为假：x=1 时左边为 2，右边为 1。完整规则回看[幂与根](/zh/igcse/mathematics/powers-roots-and-standard-form/#start)。

</details>

</div>

## 对准错误再试 {#retry}

固定与重复费用混淆回看[字母](#letters)；负数平方错回看[代入](#substitution)；漏乘回看[展开](#expansion)；系数不符回看[因式](#factorising)；公式错回看[重排](#rearrange)或[两次主元](#twice)；指数规则错回看[指数](#indices)。先收起旧解答。

<div class="lesson-check" markdown="1">

### 重试符号语言 {#retry-language}

**Question:** A club charges 12 dollars membership plus 3 dollars per visit. Write a formula for n visits. Name the terms and factors in 3(n+4). Explain whether 3(n+4)=3n+12 is an identity.

<details markdown="1">

<summary>提示</summary>

找只发生一次的费用。

</details>

<details markdown="1">

<summary>解答与检查</summary>

n 为非负整数，C=12+3n。括号内的项为 n、4；外层因子为 3 与 (n+4)。展开证明对所有 n 恒成立。

</details>

</div>

<div class="lesson-check" markdown="1">

### 重试代入 {#retry-substitution}

**Question:** Evaluate $p^2-2pq$ for $p=-2$, $q=-3$.

<details markdown="1">

<summary>提示</summary>

每个负值加括号。

</details>

<details markdown="1">

<summary>解答与检查</summary>

$$(-2)^2-2(-2)(-3)=4-12=-8.$$

</details>

</div>

<div class="lesson-check" markdown="1">

### 重试展开与合并 {#retry-expansion}

**Question:** Simplify $2(x-3)-(x+4)+3x^2-x^2$.

<details markdown="1">

<summary>提示</summary>

减去括号会改变其中两个项的符号。

</details>

<details markdown="1">

<summary>解答与检查</summary>

$$2x-6-x-4+3x^2-x^2=2x^2+x-10.$$

</details>

</div>

<div class="lesson-check" markdown="1">

### 重试三个因子 {#retry-three}

**Question:** Expand $(x-2)(x+2)(x+1)$.

<details markdown="1">

<summary>提示</summary>

先处理平方差。

</details>

<details markdown="1">

<summary>解答与检查</summary>

$$(x^2-4)(x+1)=x^3+x^2-4x-4.$$

</details>

</div>

<div class="lesson-check" markdown="1">

### 重试因式分解 {#retry-factors}

**Question:** Factorise fully $5x^2-20$, $x^2-2x-8$, and $3x^2-5x-2$.

<details markdown="1">

<summary>提示</summary>

第一式先提取 5，再看平方差。

</details>

<details markdown="1">

<summary>解答与检查</summary>

$$5x^2-20=5(x-2)(x+2),\quad x^2-2x-8=(x-4)(x+2),$$

$$3x^2-5x-2=(3x+1)(x-2).$$

最后一式的中间乘积为 −6x+x=−5x。

</details>

</div>

<div class="lesson-check" markdown="1">

### 重试公式变形 {#retry-rearrange}

**Question:** Make a the subject of $v=u+at$ for $t\ne0$. Then find a if v=14 m/s, u=2 m/s, t=4 s.

<details markdown="1">

<summary>提示</summary>

先撤去加法再撤去乘法。

</details>

<details markdown="1">

<summary>解答与检查</summary>

$$v-u=at,\qquad a=\frac{v-u}{t}=\frac{14-2}{4}=3\text{ m/s}^2.$$

</details>

</div>

<div class="lesson-check" markdown="1">

### 重试两次主元 {#retry-twice}

**Question:** Make x the subject of $y=(2x+3)/(x-1)$, $x\ne1$. State excluded y.

<details markdown="1">

<summary>提示</summary>

先乘掉分母、收集 x 项、提取 x。

</details>

<details markdown="1">

<summary>解答与检查</summary>

$$yx-y=2x+3,\quad x(y-2)=y+3,\quad x=\frac{y+3}{y-2},\quad y\ne2.$$

y=2 会要求 −2=3，因此不允许。

</details>

</div>

<div class="lesson-check" markdown="1">

### 重试幂 {#retry-indices}

**Question:** Simplify $p^7/p^3$ for $p\ne0$, and evaluate $16^{3/4}$. Explain why you cannot simplify $p^7-p^3$ by subtracting exponents.

<details markdown="1">

<summary>提示</summary>

商可以约因子，差不能这样约。

</details>

<details markdown="1">

<summary>解答与检查</summary>

$$p^7/p^3=p^4,\qquad 16^{3/4}=8.$$

减法不是两项之间约乘法因子；p⁷−p³ 可提公因子为 p³(p⁴−1)。

</details>

</div>

## 下一步与稍后回顾 {#next-step}

接着学[代数分式与证明](/zh/igcse/mathematics/algebraic-fractions-and-proof/#start)。学过别的主题后，不看示范重做出租车题与两次主元变形。

[学过其他主题后，再做代数混合回顾。](/zh/igcse/mathematics/mixed-review/#algebra-review) 收起解答，记录哪些能无帮助完成。

## 范围与来源 {#sources}

<details markdown="1">

<summary>资格和实际使用的来源</summary>

A1–6、A22；大纲 PDF 14（印刷 15），A22 在 PDF 17（印刷 18）。A6 与 Number 衔接。

实际读过 2C QP PDF 2 Q1–2、4 Q5、12 Q13 与 [MS PDF 4](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92602C-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=4)、7；1C QP PDF 12 Q13–14 与 [MS PDF 7](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9260-92601C-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=7)；2E QP PDF 13 Q16 与 [MS PDF 9](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92602E-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=9)。

OxfordAQA International GCSE Mathematics **9260**，大纲 **v5.1**。[资格页](https://www.oxfordaqa.com/qualification/international-gcse-mathematics-9260/)；[大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-gcse-mathematics-specification.pdf)。以下评估材料均为 **Specimen 2018**，网址中的 2016 不是考季。它们用于校准范围和推理，本页没有冒称官方题的任务。

</details>
