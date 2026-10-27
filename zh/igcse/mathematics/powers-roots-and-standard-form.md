---
layout: subjects
title: "幂、根与标准式"
mathjax: true
grade: igcse
subject: igcse-mathematics
lang: zh-CN
translation_of: /igcse/mathematics/powers-roots-and-standard-form/
permalink: /zh/igcse/mathematics/powers-roots-and-standard-form/
reading_layout: true
study_page: true
toc_headings: "h2"
---

[IGCSE 数学](/zh/igcse/mathematics/#learning-start)
{:.lesson-meta}

## 把重复相乘写短一些 {#start}

边长 5 的正方形，面积是 5 乘 5；棱长 5 的立方体，体积是三个 5 相乘。幂数的是重复因数，根则把这个过程倒过来。需要会[乘法、符号和倒数](/zh/igcse/mathematics/number-operations/#operation-order)。以下均为自拟题，无官方分值。先学幂与整数指数，再把根与分数指数、精确根式连接起来。

## 到底重复乘的是谁？ {#powers-and-roots}

$3^4=3\times3\times3\times3=81$ 中，3 是底数（base），4 是指数（index）。指数不是拿来直接乘底数的。常见幂可由连续乘法认出：

$$2,4,8,16,32,64;\quad3,9,27,81;\quad4,16,64,256;\quad5,25,125,625.$$

平方根问的是：哪个非负数平方后得到原数？所以 $\sqrt{49}=7$。方程 $x^2=49$ 有 7、-7 两解，但平方根符号只选 7。立方根可以为负：$\sqrt[3]{-125}=-5$。更高次的根也是倒推，例如 $\sqrt[4]{81}=3$。

括号决定负号是否也被重复相乘：

$$(-3)^2=9,\qquad-3^2=-(3^2)=-9.$$

## 指数法则来自数因数 {#index-laws}

<div class="worked-example" markdown="1">

### 从因数看法则 {#example-indices}

**Question:** Simplify $2^3\times2^4$, $2^5\div2^2$, $(2^3)^2$, $2^0$ and $2^{-3}$.

乘法把三份因数 2 与四份因数 2 接起来；除法从五份中约去两份；幂的幂是把整组重复：

$$2^3\times2^4=2^7=128,\quad
2^5\div2^2=2^3=8,\quad
(2^3)^2=2^6=64.$$

把除法法则延续到指数差为零、为负的情况：

$$2^3\div2^3=1=2^0,\qquad
2^2\div2^5=\frac1{2^3}=2^{-3}=\frac18.$$

因此对非零底数 $a$ 和整数指数，

$$a^m a^n=a^{m+n},\qquad \frac{a^m}{a^n}=a^{m-n},\qquad(a^m)^n=a^{mn}.$$

负指数表示倒数，不表示答案为负。加法不能套这个乘法规律：$2^3+2^4=8+16=24$，不是 128。底数非零的条件防止除以零；这些规则不定义 $0^0$。

</div>

## 用标准式看清数量级 {#standard-form}

正数的标准式（standard form）为 $A\times10^n$，其中 $1\le A<10$，$n$ 是整数。系数记录有效数字，10 的幂记录大小：

$$5800000=5.8\times10^6,\qquad0.00072=7.2\times10^{-4}.$$

显示 7.2E-4 表示 $7.2\times10^{-4}$，不是 7.2 减 4。负数可以把负号放在正数标准式前；零单独处理。

<div class="worked-example" markdown="1">

### 分别处理系数和数量级 {#example-standard-form}

**Question:** Calculate $(3\times10^5)(4\times10^{-3})$, $(6\times10^7)/(2\times10^3)$ and $3.2\times10^5+4.7\times10^4$.

乘除分别处理系数与幂，再把系数调回规定范围：

$$12\times10^2=1.2\times10^3,\qquad
\frac{6\times10^7}{2\times10^3}=3\times10^4.$$

加法先把两项写成同一个 10 的幂，统一单位：

$$3.2\times10^5+0.47\times10^5=3.67\times10^5.$$

普通写法检查：320000+47000=367000。相加时直接加指数，会改变原来的量。

</div>

## 独立检查 {#practice}

<div class="lesson-check" markdown="1">

### 先读清幂 {#practice-powers}

**Question:** Find $(-4)^3$, $-4^2$, $\sqrt{144}$, $\sqrt[3]{-64}$ and $\sqrt[4]{625}$. Write 64 as a power of 2 and as a power of 4, and write 81 as a power of 3. Explain why $\sqrt{144}$ is not -12.

<details markdown="1">
<summary>提示</summary>

先确定整个底数；区分根号与平方方程的解。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$(-4)^3=-64,\quad-4^2=-16,\quad\sqrt{144}=12,\quad
\sqrt[3]{-64}=-4,\quad\sqrt[4]{625}=5.$$

$$64=2^6=4^3,\qquad81=3^4.$$

平方根符号选非负根；-12 是平方方程的一个解，不是主平方根的值。

</details>

</div>

<div class="lesson-check" markdown="1">

### 运用并检查法则 {#practice-indices}

**Question:** Simplify $(x^4x^{-7})/x^{-1}$ for $x\ne0$. Evaluate $5^0$ and $3^{-2}$. A learner claims $(2^3)^4=2^7$. Explain the mistake using factors.

<details markdown="1">
<summary>提示</summary>

先合并分子；除法减去整个分母指数。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$\frac{x^4x^{-7}}{x^{-1}}=x^{-3-(-1)}=x^{-2}=\frac1{x^2},\qquad
5^0=1,\quad3^{-2}=\frac19.$$

四组三个因数共有 12 个，所以 $(2^3)^4=2^{12}$。3+4 对应两个幂相乘，不对应幂的幂。

</details>

</div>

<div class="lesson-check" markdown="1">

### 比较与合并大小 {#practice-standard-form}

**Question:** A display reads 6.4E-5. Write this as an ordinary decimal. Calculate $(8\times10^{-3})(5\times10^6)$ and $(9\times10^7)/(3\times10^{-2})$ in standard form. Find the difference between $4.1\times10^6$ and $7\times10^5$.

<details markdown="1">
<summary>提示</summary>

求差前先统一 10 的幂。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$6.4\times10^{-5}=0.000064.$$

$$40\times10^3=4\times10^4,\qquad
\frac{9\times10^7}{3\times10^{-2}}=3\times10^9.$$

$$4.1\times10^6-0.7\times10^6=3.4\times10^6.$$

除法的指数是 7-(-2)，不是 7-2。最终系数都在包含 1、不包含 10 的范围。

</details>

</div>

## 指数也能表示根 {#fractional-powers}

对正数 $a$，把 $a^{1/n}$ 定义为它的正 $n$ 次方根；把这个根重复乘 $n$ 次正好得到 $a$，与指数法则吻合。$a^{m/n}$ 就是先开根再取整数 $m$ 次幂；指数前的负号再要求取倒数。

$$16^{3/4}=(\sqrt[4]{16})^3=2^3=8,\qquad
27^{-2/3}=\frac1{(\sqrt[3]{27})^2}=\frac19.$$

这里用正底数，避免偶次根以及不同分数写法造成实数定义域歧义；并不是说负数的任何分数次幂都有实数值。

<div class="lesson-check" markdown="1">

### 换一种表示 {#practice-fractional-powers}

**Question:** Evaluate $81^{3/4}$ and $32^{-2/5}$ exactly. Rewrite $a^{5/2}$ using a root for $a>0$, and simplify $a^{1/2}a^{3/2}$.

<details markdown="1">
<summary>提示</summary>

分母决定开几次根，分子决定几次幂。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$81^{3/4}=3^3=27,\qquad32^{-2/5}=\frac1{2^2}=\frac14.$$

$$a^{5/2}=(\sqrt a)^5,\qquad a^{1/2}a^{3/2}=a^2.$$

负指数把 4 变成倒数，不是变成 -4。

</details>

</div>

## 不急着把无理数换成近似值 {#surds}

Surd 保留无理根的精确值。非负数的根可以相乘、相除，却不能把和的根拆成根的和。先提出平方因子，再合并相同根式：

$$\sqrt{72}=\sqrt{36\times2}=6\sqrt2,\qquad
\sqrt{18}+2\sqrt8=3\sqrt2+4\sqrt2=7\sqrt2.$$

$$\sqrt3\,\sqrt{12}=\sqrt{36}=6,\qquad
\sqrt{9+16}=5\ne3+4.$$

分母只有一个根时，上下同乘这个根，就是乘以 1：

$$\frac3{\sqrt5}=\frac{3\sqrt5}{5}.$$

两项分母则用共轭（conjugate）：两项相同，中间符号相反。乘开后交叉项抵消，留下平方差。

<div class="worked-example" markdown="1">

### 选择能消掉分母根号的乘数 {#example-surds}

**Question:** Rationalise $\frac4{3-\sqrt2}$.

3 不等于 $\sqrt2$，所以原分母非零。上下同乘共轭：

$$\frac4{3-\sqrt2}
=\frac{4(3+\sqrt2)}{(3-\sqrt2)(3+\sqrt2)}
=\frac{12+4\sqrt2}{9-2}
=\frac{12+4\sqrt2}{7}.$$

分母展开为 $9+3\sqrt2-3\sqrt2-2=7$。两式数值检查都约为 2.5224；数值检查支持代数推理，但不能代替推理。

</div>

<div class="lesson-check" markdown="1">

### 保持精确形式 {#practice-surds}

**Question:** Simplify $\sqrt{50}-\sqrt8$ and $\sqrt6\,\sqrt{24}$. Rationalise $\frac5{\sqrt3}$ and $\frac3{2+\sqrt3}$. Explain why $\sqrt{4+9}\ne\sqrt4+\sqrt9$.

<details markdown="1">
<summary>提示</summary>

先找平方因子；两项分母才需要共轭。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$\sqrt{50}-\sqrt8=5\sqrt2-2\sqrt2=3\sqrt2,\qquad
\sqrt6\,\sqrt{24}=\sqrt{144}=12.$$

$$\frac5{\sqrt3}=\frac{5\sqrt3}{3},\qquad
\frac3{2+\sqrt3}=\frac{3(2-\sqrt3)}{4-3}=6-3\sqrt3.$$

最后的分母非零，因为 2 不等于 $\sqrt3$。若所说等式成立，就会有 $\sqrt{13}=5$，平方得到 13=25，矛盾。

</details>

</div>

## 找到错误背后的法则 {#retry}

符号错回看[根的意义](#powers-and-roots)，指数错回看[数因数](#index-laws)，标准式错回看[数量级](#standard-form)，分数指数与根式计算则回看[分数指数](#fractional-powers)和[精确根式](#surds)。收起旧答案后再试。

<div class="lesson-check" markdown="1">

### 再读幂与根 {#retry-powers}

**Question:** Find $(-5)^2$, $-5^2$, $\sqrt[3]{-216}$ and $\sqrt[4]{256}$. Write 125 as a power of 5.

<details markdown="1">
<summary>提示</summary>

把根再取相应次幂检查。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$(-5)^2=25,\quad-5^2=-25,\quad\sqrt[3]{-216}=-6,\quad\sqrt[4]{256}=4,\quad125=5^3.$$

只有括起来的负底数才把负号一起平方。

</details>

</div>

<div class="lesson-check" markdown="1">

### 再用指数法则 {#retry-indices}

**Question:** Simplify $(y^3)^2y^{-8}$ for $y\ne0$, and explain why $y^3+y^2$ does not simplify to $y^5$.

<details markdown="1">
<summary>提示</summary>

括号的幂先得到六个因数。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$(y^3)^2y^{-8}=y^{6-8}=y^{-2}=\frac1{y^2}.$$

法则连接的是乘积中的因数，不是和中的项。例如 $y=2$ 时，原和为 12，而 $y^5=32$。

</details>

</div>

<div class="lesson-check" markdown="1">

### 再检查数量级 {#retry-standard-form}

**Question:** Write 0.0000081 in standard form. Calculate $(1.2\times10^4)+(8\times10^3)$ and $(6\times10^{-4})/(2\times10^2)$ in standard form.

<details markdown="1">
<summary>提示</summary>

加法统一指数，除法减指数。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$0.0000081=8.1\times10^{-6},\qquad
1.2\times10^4+0.8\times10^4=2\times10^4,\qquad
\frac{6\times10^{-4}}{2\times10^2}=3\times10^{-6}.$$

把和改成普通写法检查：12000+8000=20000。

</details>

</div>

<div class="lesson-check" markdown="1">

### 再试分数指数 {#retry-fractional-powers}

**Question:** Calculate $64^{-2/3}$ and $16^{5/4}$, and simplify $b^{3/4}/b^{1/4}$ for $b>0$.

<details markdown="1">
<summary>提示</summary>

先开根再取幂；负指数另取倒数。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$64^{-2/3}=\frac1{4^2}=\frac1{16},\quad
16^{5/4}=2^5=32,\quad
\frac{b^{3/4}}{b^{1/4}}=b^{1/2}=\sqrt b.$$

除法减去分数指数，与整数指数的规则相同。

</details>

</div>

<div class="lesson-check" markdown="1">

### 再算精确根式 {#retry-surds}

**Question:** Simplify $\sqrt{75}+2\sqrt{12}$, and rationalise $\frac2{\sqrt7}$ and $\frac5{3+\sqrt2}$.

<details markdown="1">
<summary>提示</summary>

先改成相同根式的倍数；展开共轭乘积。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$\sqrt{75}+2\sqrt{12}=5\sqrt3+4\sqrt3=9\sqrt3.$$

$$\frac2{\sqrt7}=\frac{2\sqrt7}{7},\qquad
\frac5{3+\sqrt2}=\frac{5(3-\sqrt2)}{9-2}=\frac{15-5\sqrt2}{7}.$$

两次变形都是乘以 1，分母均非零。

</details>

</div>

## 知道何时精确、何时近似 {#next-step}

接着学[准确度与上下界](/zh/igcse/mathematics/accuracy-and-bounds/#start)。隔一个主题再做[数的综合回顾](/zh/igcse/mathematics/mixed-review/#number-review)；也在[代数综合](/zh/igcse/mathematics/mixed-review/#algebra-review)中调用指数法则。

## 范围与来源 {#sources}

<details markdown="1">
<summary>范围、层级与参考阅读</summary>

N5–N8、A6；标准式显示的解释也支持 N10。本页接着处理分数指数、surds 精确计算及有理化。这里不暗示特定计算器或 CAS 获准。

[OxfordAQA 9260 大纲 v5.1，PDF pp.11,14](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-gcse-mathematics-specification.pdf)。

9260/2C, **Specimen 2018**, Q4: [QP PDF p.4](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92602C-international-gcse-mathematics-specimen-paper-2016-v1.pdf#page=4), [MS PDF p.4](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92602C-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=4).

9260/2C, **Specimen 2018**, Q21: [QP PDF p.19](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92602C-international-gcse-mathematics-specimen-paper-2016-v1.pdf#page=19), [MS PDF p.9](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92602C-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=9).

9260/1E, **Specimen 2018**, Q14: [QP PDF p.12](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92601E-international-gcse-mathematics-specimen-paper-2016-v1.pdf#page=12), [MS PDF p.7](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92601E-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=7).

9260/1E, **Specimen 2018**, Q26: [QP PDF p.25](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92601E-international-gcse-mathematics-specimen-paper-2016-v1.pdf#page=25), [MS PDF p.13](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92601E-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=13).

上述试题与配套评分页用于核对教学要求，本页未复刻官方试题。所有示范与任务均为自拟题，无官方分值；情境和图中数据为教学构造。

</details>
