---
layout: subjects
title: "数与运算"
mathjax: true
grade: igcse
subject: igcse-mathematics
lang: zh-CN
translation_of: /igcse/mathematics/number-operations/
permalink: /zh/igcse/mathematics/number-operations/
reading_layout: true
study_page: true
toc_headings: "h2"
---

[IGCSE 数学](/zh/igcse/mathematics/#learning-start)
{:.lesson-meta}

## 计算时，数的意义不能丢 {#start}

余额可能低于零，丝带可以剪成分数长度，两个周期事件也可能再次同时发生。它们需要的运算不同。先看数位，再用逆运算检查。需要会计数、乘法表；分数意义可回看[分数课](/zh/igcse/mathematics/fractions-decimals-and-percentages/#same-amount)。以下均为自拟题，无官方分值。

## 同一个数字，换个位置就不同 {#place-value}

305.047 中，3 表示 300，4 表示 0.04，7 表示 0.007。向左一位，位值乘 10；向右一位，位值除以 10。零负责占位，所以 3.05 和 3.5 不同；在小数末尾添零则不改变大小：$3.50=3.5$。0.047 乘 100 得 4.7，数字相对小数点移动两位；305 除以 1000 得 0.305。

## 负数与方向 {#signed-numbers}

数轴上向右走，数就增大，所以 $-4<-1<0<2$。离零更远不一定更大，负数都在零左边。不同值可写 $a\ne b$；如果允许相等，用 $\le$ 或 $\ge$。

![从负四到四等距标刻的数轴，右端箭头表示向右数值增大。](/assets/img/igcse-number-integer-line.svg)

加正数向右，加负数向左。减法用来撤销加法：去掉一笔亏损，余额就增加。

$$-3+5=2,\qquad -3-5=-8,\qquad -3-(-5)=-3+5=2.$$

乘法可以从规律理解：$(-3)\times2=-6$，$(-3)\times1=-3$，$(-3)\times0=0$，所以下一步 $(-3)\times(-1)=3$，每步结果增加 3。因此乘除同号得正，异号得负；除法可用乘法检查。零不能作除数。

## 把书面计算写清楚 {#written-methods}

<div class="worked-example" markdown="1">

### 加减法的进位与借位 {#example-written-add}

**Question:** Work out 27.68 + 4.57 and 30.02 - 4.57 using written methods.

把小数点对齐，让百分位对百分位，而不是对十位。加法中 8+7=15 个百分之一，写 5，向十分位进 1；十分位 6+5+1=12，写 2，再进 1；个位 7+4+1=12，向十位进 1。

$$\begin{array}{r}27.68\\+\,4.57\\\hline32.25\end{array}$$

减法中，从 3 个十借出 1 个十换成 10 个一；再把 1 个一换成 10 个十分之一；再把 1 个十分之一换成 10 个百分之一。上面变成 2 个十、9 个一、9 个十分之一、12 个百分之一，然后逐列相减：

$$\begin{array}{r}30.02\\-\,4.57\\\hline25.45\end{array}$$

反向检查：$25.45+4.57=30.02$。估计 28+5 约 33、30-5 约 25，也与答案大小相符。

</div>

<div class="worked-example" markdown="1">

### 乘法部分积与除法余数 {#example-written-multiply}

**Question:** Work out 3.24 times 1.5 and 12.6 divided by 0.4 without a calculator.

先算整数乘法，把 15 分成 5 和 10，而不是 5 和 1：

$$\begin{array}{r}324\\\times\,15\\\hline1620\\3240\\\hline4860\end{array}$$

原来两个数分别乘了 100 和 10 才变成整数，结果要除回 1000：

$$3.24\times1.5=4.860=4.86.$$

除法把被除数、除数同时乘 10，商不变。126 除以 4：12 里面有 3 个 4，再落下 6；取 1 个 4 后余 2。商写小数点，在余数后添零，20 里面有 5 个 4：

$$12.6\div0.4=126\div4=31.5.$$

检查：$31.5\times0.4=12.6$。被除数为正数、除数大于 0 且小于 1 时，商会比被除数大。若输入是 $-12.6\div0.4$，先用同样方法求绝对值，再按符号规则得 -31.5。绝对值增大，数值却变小：$-31.5<-12.6$，它在零的左侧更远处。

</div>

## 分数加减要先统一每份大小 {#fraction-arithmetic}

对正分数，真分数（proper fraction）的分子小于分母，例如 $\frac34$；假分数（improper fraction）如 $\frac74$，至少包含一个整体。带分数把整体与余下的部分写在一起：

$$1\frac34=\frac{1\times4+3}{4}=\frac74,\qquad -1\frac34=-\left(1+\frac34\right)=-\frac74.$$

加减要统一单位：三分之一和四分之一都能改成十二分之一。乘法是取一份中的一份：三分之二的四分之三，就是十二分之六。除以非零分数时乘它的倒数，因为一个数与倒数相乘等于 1。

<div class="worked-example" markdown="1">

### 分数的四种运算 {#example-fractions}

**Question:** Calculate $\frac23+\frac14$, $\frac23-\frac14$, $\frac23\times\frac34$ and $-1\frac12\div\frac34$.

只有加减需要先通分：

$$\frac23+\frac14=\frac8{12}+\frac3{12}=\frac{11}{12},\qquad
\frac23-\frac14=\frac8{12}-\frac3{12}=\frac5{12}.$$

乘法可在分子分母之间约去公因数，因为那是在上下同时除以同一个非零数：

$$\frac23\times\frac34=\frac6{12}=\frac12.$$

除法先把带分数改写。若商为 $q$，便有 $q\times\frac34=-\frac32$；再乘 $\frac43$，就能留下 $q$：

$$-\frac32\div\frac34=-\frac32\times\frac43=-2.$$

检查：$-2\times\frac34=-\frac32$。分母直接相加，是把大小不同的份当成同一种单位了。

</div>

## 先决定运算的先后 {#operation-order}

括号把一段计算组成整体；接着算幂和根，再从左向右算同级乘除，最后从左向右算同级加减。乘法并不优先于同级除法。分数线也把整个分子、整个分母分别括在一起。

$$18\div3\times2=6\times2=12,\qquad
\frac{3+5}{2^2}=8\div4=2.$$

非零数 $a$ 的倒数是 $1/a$，所以 $-\frac23$ 的倒数是 $-\frac32$。计算器检查时要明确输入括号；它不会替你判断题目原本怎样分组。

## 该找因数，还是倍数？ {#factors-multiples}

因数（factor）能把整数整除；倍数（multiple）是用它乘整数得到的。能被 2 整除的是偶数，否则是奇数。质数（prime）是大于 1、恰有两个正因数的整数。因此 1 不是质数；2 既是质数也是偶数；9 是奇数却不是质数。

质因数分解把数一直拆到质数：$24=2\times12=2\times2\times6=2^3\times3$，$36=2^2\times3^2$。这里 $2^3$ 就是三个因数 2 的简写。最大公因数（HCF）只取两边都有的那些质因数；最小公倍数（LCM）则要取足，使两边都能整除它：

$$\operatorname{HCF}(24,36)=2^2\times3=12,\qquad
\operatorname{LCM}(24,36)=2^3\times3^2=72.$$

12 是两种数量都能整分的最大组大小；72 则是按 24 或 36 往上数时第一次共同到达的正总量。虽然用同一组分解，问的却是不同问题。

## 自己选择并说明 {#practice}

<div class="lesson-check" markdown="1">

### 比较数值 {#practice-order}

**Question:** Order $-0.4,\ -\frac38,\ 0.04,\ -\frac25$ from smallest to largest, using equality where needed. State the value of the 4 in 7.046 and calculate 7.046 times 100.

<details markdown="1">
<summary>提示</summary>

可先把分数写成小数；负数放在零左边。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$-0.4=-\frac25<-\frac38<0.04.$$

4 表示 0.04，且 $7.046\times100=704.6$。-0.4 比 -0.375 更靠左，所以更小，不能只比较离零的距离。

</details>

</div>

<div class="lesson-check" markdown="1">

### 算清一笔余额 {#practice-arithmetic}

**Question:** Calculate $-18+7$, $-18-(-7)$, $(-6)(-4)$ and $24\div(-3)$. A balance is -12.75 dollars. A payment of 28.60 dollars is added and a fee of 4.85 dollars is subtracted. Find the new balance using written addition/subtraction. Also calculate $-2.35\times1.2$ and $-8.4\div(-0.6)$ with written methods; check both by an inverse operation.

<details markdown="1">
<summary>提示</summary>

先求大小；加减按小数点对齐，乘除最后检查符号。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$-18+7=-11,\quad-18-(-7)=-11,\quad(-6)(-4)=24,\quad24\div(-3)=-8.$$

$$-12.75+28.60=15.85,\qquad15.85-4.85=11.00.$$

乘法中，$235\times12=2350+470=2820$，再除以 1000：

$$-2.35\times1.2=-2.82,\qquad-8.4\div(-0.6)=84\div6=14.$$

书面除法：8 里取 1 个 6 余 2，落下 4，24 里取 4 个 6。检查：$-2.82\div1.2=-2.35$、$14\times(-0.6)=-8.4$。余额可逆向检查：$11+4.85-28.60=-12.75$。

</details>

</div>

<div class="lesson-check" markdown="1">

### 保留精确值 {#practice-fractions}

**Question:** Calculate $-\frac56+\frac34$, $1\frac16-(-\frac23)$, $-\frac78\times\frac4{21}$ and $2\frac14\div(-\frac38)$. Give exact simplified answers and check the division.

<details markdown="1">
<summary>提示</summary>

先化带分数；加减统一每份大小，除法乘倒数。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$-\frac56+\frac34=-\frac{10}{12}+\frac9{12}=-\frac1{12}.$$

$$1\frac16-(-\frac23)=\frac76+\frac46=\frac{11}6=1\frac56.$$

$$-\frac78\times\frac4{21}=-\frac16,\qquad
2\frac14\div(-\frac38)=\frac94\times(-\frac83)=-6.$$

检查：$-6\times(-\frac38)=\frac94$。负乘负得正，逆向检查回到了正的被除数。

</details>

</div>

<div class="lesson-check" markdown="1">

### 步骤真的符合算式吗？ {#practice-order-of-operations}

**Question:** A learner writes $24\div6\times2=2$. Explain the error, evaluate $5-2(3-7)+\sqrt{16}$, and give the reciprocal of $-\frac45$.

<details markdown="1">
<summary>提示</summary>

同级乘除从左往右；先算括号再乘。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$24\div6\times2=4\times2=8.$$

错误是在没有括号的地方先把 6 与 2 乘在一起。

$$5-2(3-7)+\sqrt{16}=5-2(-4)+4=5+8+4=17.$$

倒数是 $-\frac54$，与 $-\frac45$ 相乘得 1。

</details>

</div>

<div class="lesson-check" markdown="1">

### 相同数字，不同问题 {#practice-factors}

**Question:** There are 48 red beads and 60 blue beads. Make the greatest possible number of identical bags using all beads. How many bags, and what is in each? Two signals flash every 48 s and 60 s; they flash together now. When do they next flash together? Give prime factorisations of 48 and 60. Classify 1, 2, 9 and 10 as odd/even and prime/not prime.

<details markdown="1">
<summary>提示</summary>

袋数必须能整除两种珠子数量；再次同时闪的时间必须是两个间隔的倍数。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$48=2^4\times3,\qquad60=2^2\times3\times5.$$

最多 12 袋，每袋 4 颗红珠、5 颗蓝珠。下一次同时闪在 240 秒后：

$$\operatorname{HCF}=2^2\times3=12,\qquad\operatorname{LCM}=2^4\times3\times5=240.$$

1 是奇数、非质数；2 是偶数、质数；9 是奇数、非质数；10 是偶数、非质数。若信号答 12 秒，两种信号连一个完整间隔都没过，不成立。

</details>

</div>

## 修复概念后再试 {#retry}

先回到对应概念：[位值与大小](#place-value)、[书面四则](#written-methods)、[分数运算](#fraction-arithmetic)、[运算顺序](#operation-order)、[因数与倍数](#factors-multiples)。记录是否用了提示。

<div class="lesson-check" markdown="1">

### 再比较一次 {#retry-order}

**Question:** Insert $<$, $>$ or $=$ between $-\frac7{10}$ and -0.68. What does the 7 mean in 0.0705? Divide 70.5 by 100.

<details markdown="1">
<summary>提示</summary>

在数轴上比较 -0.70 和 -0.68。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$-\frac7{10}<-0.68,\qquad70.5\div100=0.705.$$

7 表示 0.07。从 -0.70 向右走才到 -0.68，因此后者更大。

</details>

</div>

<div class="lesson-check" markdown="1">

### 再做书面计算 {#retry-arithmetic}

**Question:** Use written methods for $8.07+3.96$, $20.01-8.76$, $-1.6\times2.4$ and $-7.2\div0.3$. Check one by an inverse operation.

<details markdown="1">
<summary>提示</summary>

加减竖式对齐数位；除法把两数同时乘 10。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$8.07+3.96=12.03,\qquad20.01-8.76=11.25.$$

加法需要从百分位、十分位进位；减法从十位跨过零位换单位。

$$-1.6\times2.4=-\frac{16\times24}{100}=-3.84,\qquad-7.2\div0.3=-72\div3=-24.$$

16 乘 24 的部分积为 64、320。检查：$-24\times0.3=-7.2$。

</details>

</div>

<div class="lesson-check" markdown="1">

### 再做精确运算 {#retry-fractions}

**Question:** Calculate $-\frac34+\frac56$, $-1\frac14-\frac23$, $-\frac35\times(-\frac{10}9)$ and $-\frac56\div1\frac23$.

<details markdown="1">
<summary>提示</summary>

负带分数的负号作用于整个带分数。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$-\frac34+\frac56=\frac1{12},\qquad
-1\frac14-\frac23=-\frac54-\frac23=-\frac{23}{12}.$$

$$-\frac35\times(-\frac{10}9)=\frac23,\qquad
-\frac56\div1\frac23=-\frac56\times\frac35=-\frac12.$$

除法检查：$-\frac12\times\frac53=-\frac56$。

</details>

</div>

<div class="lesson-check" markdown="1">

### 再判断分组 {#retry-order-of-operations}

**Question:** Evaluate $30\div5\times3-2^2$ and $(30\div5)(3-2)^2$. Give the reciprocal of -4.

<details markdown="1">
<summary>提示</summary>

第二式的括号改变了分组。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$30\div5\times3-2^2=6\times3-4=14,\qquad
(30\div5)(3-2)^2=6\times1=6.$$

-4 的倒数是 $-\frac14$，两者乘积为 1。

</details>

</div>

<div class="lesson-check" markdown="1">

### 再选择方法 {#retry-factors}

**Question:** Find the shortest ribbon length that can be cut into either 18 cm or 30 cm pieces with no waste. Then find the greatest number of identical packs made from 18 pencils and 30 erasers, using all items. Explain the different choices. Also classify 15, 17 and 18 as odd/even and prime/not prime.

<details markdown="1">
<summary>提示</summary>

一个要找公倍数，另一个要找公因数。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$18=2\times3^2,\qquad30=2\times3\times5.$$

丝带最短 90 cm；能做 6 包，每包 3 支铅笔、5 块橡皮。

$$\operatorname{LCM}=2\times3^2\times5=90,\qquad\operatorname{HCF}=2\times3=6.$$

90 能被任一种剪切长度整除；6 则能整除两种物品的数量。15 是奇数、非质数；17 是奇数、质数；18 是偶数、非质数。2 到 8 中没有整数能整除 17；如果因数在 9 到 16，它的另一个配对因数就要严格位于 1 与 2 之间，不可能是整数。因此正因数只有 1 和 17。

</details>

</div>

## 把检查习惯带到下一课 {#next-step}

接着学[幂、根与标准式](/zh/igcse/mathematics/powers-roots-and-standard-form/#start)。隔一个主题后收起本页，做[数与运算综合回顾](/zh/igcse/mathematics/mixed-review/#number-review)；若卡在选运算，回补具体概念。

## 范围与来源 {#sources}

<details markdown="1">
<summary>范围、层级与参考阅读</summary>

N1–N4 及 N7 的精确分数部分：排序、正负数书面四则、位值、顺序、倒数、质因数、HCF 与 LCM。这些基础支持后续页的幂和 surds。

[OxfordAQA 9260 大纲 v5.1，PDF pp.10–11](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-gcse-mathematics-specification.pdf)。

9260/1C, **Specimen 2018**, Q21(a)(b): [QP PDF p.17](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9260-92601C-international-gcse-mathematics-specimen-paper-2016-v1.pdf#page=17), [MS PDF p.9](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9260-92601C-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=9).

9260/2C, **Specimen 2018**, Q7: [QP PDF p.6](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92602C-international-gcse-mathematics-specimen-paper-2016-v1.pdf#page=6), [MS PDF p.5](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92602C-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=5).

9260/2E, **Specimen 2018**, Q6: [QP PDF p.5](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92602E-international-gcse-mathematics-specimen-paper-2016-v1.pdf#page=5), [MS PDF p.5](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92602E-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=5).

上述试题与配套评分页用于核对教学要求，本页未复刻官方试题。所有示范与任务均为自拟题，无官方分值；情境和图中数据为教学构造。

</details>
