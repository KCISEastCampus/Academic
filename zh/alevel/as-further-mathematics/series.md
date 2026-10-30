---
title: "有限和与无限级数极限"
layout: subjects
mathjax: true
grade: as
subject: as-further-mathematics
lang: zh-CN
translation_of: /alevel/as-further-mathematics/series/
permalink: /zh/alevel/as-further-mathematics/series/
toc_headings: "#start, #model, #lower-limits, #demonstration, #infinite-sums, #practice, #retry, #later-review, #next-step, #sources"
study_page: true
reading_layout: true
---

[AS 高数课程](/zh/alevel/as-further-mathematics/)

怎样选择标准求和公式或差分法，又怎样用有限部分和解释无限和？先看被加的通项是什么结构，再追踪求和从哪里开始、在哪里结束。

按顺序学习[标准和](#model)与[消项](#demonstration)，再遮住示范完成[独立检查](#practice)。学完应能选择方法、处理改变的下限，并解释无限级数是否存在有限的和。

## 开始前 {#start}

需要的已有知识是 Σ 求和记号、展开括号、简单分式与二次式因式分解。若不熟悉因式分解，先回看 [AS 二次式](/zh/alevel/as-mathematics/algebra/#l02)，再进入独立检查。除非另有更严格的条件，本页 $n$ 均为正整数。本课不以归纳法为先修。

<section class="lesson-check" markdown="1">

### 先修自检

**Entry check (self-written):** Write $\sum_{r=2}^4(2r-1)$ without sigma notation and evaluate it. State how many terms it contains. Expand $(2r-1)(2r+1)$.

<details markdown="1"><summary>提示</summary>

从下限到上限依次代入每个整数，两端都包括在内。展开乘积时，检查四次逐项相乘。

</details>

<details markdown="1"><summary>核对与回补</summary>

指标 $r$ 依次取 $2,3,4$，所以和是 $3+5+7=15$，共有 $4-2+1=3$ 项。Σ 表示把指定各项相加，不是只代入上限。对整数上下限 $1\le m\le n$，项数为 $n-m+1$。

$$\begin{aligned}
(2r-1)(2r+1)&=4r^2+2r-2r-1\\
&=4r^2-1.
\end{aligned}$$

若不熟悉 Σ，先为每个允许的 $r$ 值写一行，再相加。若常数项得到 $+1$，检查 $(-1)(+1)$；若还剩一次项，检查两次交叉相乘。遮住核对内容，重新完成同样两步，再往下学习。

</details>

</section>

## 1. 选择并使用标准和 {#model}

多项式通项可以展开成 $r$ 的不同次幂。求和的线性性质（linearity）允许我们把各部分分别求和，把常数系数提到求和号外。对正整数 $n$，有以下标准公式：

$$\sum_{r=1}^n r=\frac{n(n+1)}2.$$

$$\sum_{r=1}^n r^2=\frac{n(n+1)(2n+1)}6.$$

$$\sum_{r=1}^n r^3=\frac{n^2(n+1)^2}4.$$

根据**展开后**的幂次选公式。“平方的和”不等于“和的平方”；立方和公式则恰好等于一次和的平方。

常数项也要逐项累加。从 $r=1$ 到 $n$，共有 $n$ 个 $1$，所以

$$\sum_{r=1}^n1=n,\qquad \sum_{r=1}^n c=cn$$

其中 $c$ 是与 $r$ 无关的常数。因此，每一项里的 $-1$ 总共贡献 $-n$，不能只写一次 $-1$。

<section class="worked-example" markdown="1">

### 先展开，再选公式

**Demonstration (self-written):** Find a simplified expression for $\sum_{r=1}^n(2r-1)(2r+1)$.

乘积展开后是 $4r^2-1$，因此使用平方和公式。两部分都要求和：

$$\begin{aligned}
&\sum_{r=1}^n(2r-1)(2r+1)\\
&=4\sum_{r=1}^n r^2-\sum_{r=1}^n1\\
&=\frac{2n(n+1)(2n+1)}3-n.
\end{aligned}$$

合并时先通分到分母三，再提取公因式 $n$。接着只展开剩下的括号：

$$\begin{aligned}
&\frac{2n(n+1)(2n+1)}3-n\\
&=\frac{n[2(n+1)(2n+1)-3]}3\\
&=\frac{n[2(2n^2+3n+1)-3]}3\\
&=\frac{n(4n^2+6n-1)}3.
\end{aligned}$$

当 $n=1$ 时，原和为 $1\times3=3$，公式也给出 $3$；当 $n=2$ 时，公式给出 $18=3+15$。这些代入用于检查运算；上面的代数推导才说明结果对所有正整数 $n$ 成立。

</section>

### 改变求和下限 {#lower-limits}

令 $F(n)$ 表示某个通项从 $1$ 到 $n$ 的和，并规定 $F(0)=0$。若要保留从 $m$ 开始的项，只去掉 $m$ 之前的项：

$$\sum_{r=m}^n f(r)=F(n)-F(m-1),\qquad 1\le m\le n.$$

减去 $F(m)$ 会把所需的第一项也删掉。下限是 $3$ 时，应去掉 $r=1$ 和 $r=2$ 两项，保留 $r=3$ 项。

<section class="lesson-check" markdown="1">

#### 停下来补步骤

**Scaffold (self-written):** Use the standard sums to evaluate $\sum_{r=3}^n(3r^2+2r)$ for integer $n\ge3$; first find the sum from 1 to n.

<details markdown="1"><summary>提示</summary>

把平方项与一次项分开求和。得到 $F(n)$ 后，计算 $F(2)$，也可以直接相加最前面的两项。

</details>

<details markdown="1"><summary>步骤核对</summary>

$$\begin{aligned}
&F(n)\\
&=3\frac{n(n+1)(2n+1)}6+2\frac{n(n+1)}2\\
&=\frac{n(n+1)[(2n+1)+2]}2\\
&=\frac{n(n+1)(2n+3)}2.
\end{aligned}$$

不需要的两项分别是 $5$ 和 $16$，所以 $F(2)=21$。于是

$$\sum_{r=3}^n(3r^2+2r)=\frac{n(n+1)(2n+3)}2-21.$$

当 $n=3$ 时，结果是 $54-21=33$，正好等于唯一保留的项。若你减去了 $54$，回看[下限究竟排除哪些项](#lower-limits)。

</details>

</section>

## 2. 保留未抵消的首尾项 {#demonstration}

有时通项本来就是 $f(r)-f(r+k)$，有时可以把分式改写成这种形式。差分法（method of differences）先把有限项相加，再消去数值相同、符号相反的项。位移 $k$ 决定哪些首尾项可能留下；能消项本身并不保证无限级数收敛。

<section class="worked-example" markdown="1">

### 位移为二的分式

**Demonstration (self-written):** Find $S_n=\sum_{r=1}^n1/[r(r+2)]$.

分母的两个因式相差二。将它们的倒数相减：

$$\frac1r-\frac1{r+2}=\frac{(r+2)-r}{r(r+2)}=\frac2{r(r+2)},$$

因此，原来的每一项等于这个差的一半。由于 $r\ge1$，各分母均不为零。

先看具体的有限列表，取 $n=4$：

$$\begin{aligned}
2S_4={}&\left(1-\frac13\right)+\left(\frac12-\frac14\right)\\
&+\left(\frac13-\frac15\right)+\left(\frac14-\frac16\right)\\
={}&1+\frac12-\frac15-\frac16.
\end{aligned}$$

这里 $1/3$ 与 $1/4$ 都各出现一次正项和负项。对一般的 $n\ge3$，把正项、负项分别排列：

$$\begin{aligned}
2S_n={}&\left(1+\frac12+\frac13+\cdots+\frac1n\right)\\
&-\left(\frac13+\cdots+\frac1n+\frac1{n+1}+\frac1{n+2}\right).
\end{aligned}$$

共同部分从 $1/3$ 到 $1/n$；当 $n=3$ 时，共同部分只有 $1/3$。最初两项没有对应负项，最后两项没有对应正项，因此

$$S_n=\frac12\left(1+\frac12-\frac1{n+1}-\frac1{n+2}\right).$$

项数太少时，不要虚构中间的消项区间。当 $n=2$ 时，两组差没有共同项，但仍给出相同公式。当 $n=1$ 小于位移时，直接核对原来唯一的一项：$S_1=1/3$。所得公式给出

$$\frac12\left(1+\frac12-\frac12-\frac13\right)=\frac13,$$

所以结果对所有正整数 $n$ 都成立。

</section>

### 无限和是部分和的极限 {#infinite-sums}

对于从固定下限 $m$ 开始的通项 $a_r$，有限部分和（partial sum）为 $S_n=\sum_{r=m}^n a_r$。只有这些部分和趋于有限极限 $L$ 时，无限级数才有有限的和：

$$\sum_{r=m}^\infty a_r=L\quad\text{means}\quad\lim_{n\to\infty}S_n=L.$$

刚才的分式中，余下的两个末端分式均趋于零：

$$\frac1{n+1}\longrightarrow0,\qquad\frac1{n+2}\longrightarrow0.$$

因此

$$\sum_{r=1}^\infty\frac1{r(r+2)}
=\lim_{n\to\infty}S_n=\frac34.$$

我们先消去有限列表中的项，再取极限；不是“约去无穷处的项”。相反，

$$\begin{aligned}
\sum_{r=1}^n(2r-1)&=2\frac{n(n+1)}2-n\\
&=n^2\longrightarrow\infty,
\end{aligned}$$

所以这个无限级数发散。算几个部分和可以提示趋势，却不能证明极限存在。仅有通项趋于零也不充分：需要部分和本身趋于有限极限。

## 独立检查 {#practice}

不回看示范，说明你选择的方法为什么适合该通项。本页练习均为**自拟题（self-written）**，没有官方分值。提示与解答分别展开；使用提示的作答应记作“借助提示完成”。

<section class="lesson-check" markdown="1">

#### 题目 1 {#practice-1}

**Independent task (self-written):** Find $T_n=\sum_{r=1}^n r^2(r+1)$ in factorised form for positive integer $n$. Hence find $\sum_{r=3}^n r^2(r+1)$ for integer $n\ge3$. Check the latter result at the smallest allowed value of $n$.

<details markdown="1"><summary>提示</summary>

检查通项展开后的结构。第二部分要使用你得到的 $T_n$，并明确哪些较早的项需要去掉。

</details>

<details markdown="1"><summary>解答与检查</summary>

展开得 $r^3+r^2$，所以平方和与立方和都需要使用：

$$\begin{aligned}
T_n&=\sum_{r=1}^n r^3+\sum_{r=1}^n r^2\\
&=\frac{n^2(n+1)^2}4+\frac{n(n+1)(2n+1)}6\\
&=\frac{n(n+1)[3n(n+1)+2(2n+1)]}{12}\\
&=\frac{n(n+1)(3n^2+7n+2)}{12}\\
&=\frac{n(n+1)(3n+1)(n+2)}{12}.
\end{aligned}$$

公分母是十二，公因式是 $n(n+1)$。最后的因式分解可以拆开中间项，再分组提取共同的括号：

$$\begin{aligned}
&3n^2+7n+2\\
&=3n^2+6n+n+2\\
&=3n(n+2)+(n+2)\\
&=(3n+1)(n+2).
\end{aligned}$$

展开两个因式核对。若卡在这一步，回看 [AS 二次式](/zh/alevel/as-mathematics/algebra/#l02)，再遮住步骤，重新分解这个式子。

“Hence”要求使用前面所得结果。$T_2=2+12=14$，所以

$$\begin{aligned}
&\sum_{r=3}^n r^2(r+1)\\
&=T_n-T_2\\
&=\frac{n(n+1)(3n+1)(n+2)}{12}-14.
\end{aligned}$$

当 $n=3$ 时，结果为 $50-14=36=3^2(3+1)$。若漏用一个标准和，回看[展开与线性性质](#model)；若还减去了 $36$，回看[下限](#lower-limits)，再做[再尝试 1](#retry-1)。

</details>

</section>

<section class="lesson-check" markdown="1">

#### 题目 2 {#practice-2}

**Independent task (self-written):** For integer $n\ge3$, find a closed form for $\sum_{r=3}^n1/[r(r+1)]$ and its infinite sum. A student claims that $\sum_{r=1}^\infty 1/[r(r+1)]+\sum_{r=1}^\infty1$ is finite “because most terms cancel”. Assess the claim.

<details markdown="1"><summary>提示</summary>

把分式写成差，列出首尾项。评价该说法时先看有限部分和，再取极限。

</details>

<details markdown="1"><summary>解答与检查</summary>

$$\frac1{r(r+1)}=\frac1r-\frac1{r+1}.$$

当 $n\ge4$ 时，第一组差是 $1/3-1/4$，最后一组是 $1/n-1/(n+1)$。将正负两列分别相加：

$$\begin{aligned}
&\sum_{r=3}^n\frac1{r(r+1)}\\
&=\left(\frac13+\frac14+\cdots+\frac1n\right)\\
&\quad-\left(\frac14+\cdots+\frac1n+\frac1{n+1}\right)\\
&=\frac13-\frac1{n+1}.
\end{aligned}$$

当 $n=3$ 时只有一组差，给出 $1/12=1/3-1/4$，与公式一致。末端分式趋于零，因此从 $r=3$ 开始的无限和是 $1/3$。

题中所评价的说法却从 $r=1$ 开始。两部分相加的有限部分和为

$$\left(1-\frac1{n+1}\right)+n\longrightarrow\infty.$$

所以它发散：一部分的消项不能去掉额外的 $n$。若在评价此说法时使用了 $1/3$，重新核对它的下限。若漏了边界项，回到[有限列表](#demonstration)，再做[再尝试 2](#retry-2)；若极限缺少理由，回看[部分和](#infinite-sums)，再做[再尝试 3](#retry-3)。

</details>

</section>

## 纠错与再尝试 {#retry}

根据困难选择重试。漏掉幂次或减错前缀，回看[标准和](#model)与[下限](#lower-limits)，再做再尝试 1；漏掉首尾项，回看[有限消项](#demonstration)，再做再尝试 2；认为能消项就一定收敛，回看[部分和极限](#infinite-sums)，再做再尝试 3。重新作答前，收起旧解答。

<section class="lesson-check" markdown="1">

#### 再尝试 1 {#retry-1}

**Retry (self-written):** For integer $n\ge4$, find a simplified expression for $\sum_{r=4}^n r^2(2r-1)$. Explain your method and check the result when $n=4$.

<details markdown="1"><summary>提示</summary>

展开通项，先求从 $1$ 到 $n$ 的和，再判断要去掉的前缀应该到 $3$ 还是到 $4$。

</details>

<details markdown="1"><summary>解答与检查</summary>

$$\begin{aligned}
&G(n)\\
&=2\sum_{r=1}^n r^3-\sum_{r=1}^n r^2\\
&=\frac{n^2(n+1)^2}2-\frac{n(n+1)(2n+1)}6\\
&=\frac{n(n+1)[3n(n+1)-(2n+1)]}6\\
&=\frac{n(n+1)(3n^2+n-1)}6.
\end{aligned}$$

去掉 $G(3)=1+12+45=58$，得到

$$\begin{aligned}
&\sum_{r=4}^n r^2(2r-1)\\
&=\frac{n(n+1)(3n^2+n-1)}6-58.
\end{aligned}$$

当 $n=4$ 时，$170-58=112=4^2(2\times4-1)$。若某次幂的系数错误，回看[展开与公式选择](#model)；若在 $n=4$ 时得到空和，说明删掉了所需的第一项，回看[下限](#lower-limits)。

</details>

</section>

<section class="lesson-check" markdown="1">

#### 再尝试 2 {#retry-2}

**Retry (self-written):** For integer $n\ge2$, find $R_n=\sum_{r=2}^n1/[r(r+2)]$ and its infinite sum. Show the uncancelled boundary terms and check $n=2$ directly.

<details markdown="1"><summary>提示</summary>

使用示范中的差分恒等式，但实际列表必须从 $r=2$ 开始。只有一项的和，不存在中间消项区间。

</details>

<details markdown="1"><summary>解答与检查</summary>

当 $n\ge4$ 时，将正负两列分别相加：

$$\begin{aligned}
&2R_n\\
&=\left(\frac12+\frac13+\frac14+\cdots+\frac1n\right)\\
&-\left(\frac14+\cdots+\frac1n+\frac1{n+1}+\frac1{n+2}\right).
\end{aligned}$$

因此

$$R_n=\frac12\left(\frac12+\frac13-\frac1{n+1}-\frac1{n+2}\right).$$

当 $n=3$ 时，两组差是 $(1/2-1/4)$ 与 $(1/3-1/5)$，没有消项，仍给出相同公式。当 $n=2$ 时，原和为 $1/(2\times4)=1/8$；公式也给出 $\tfrac12(1/2+1/3-1/3-1/4)=1/8$。

最后两个分式趋于零，所以无限和为 $\tfrac12(1/2+1/3)=5/12$。若你得到 $3/4$，说明保留了从 $1$ 开始时的边界；将自己的第一组差与[示范](#demonstration)比较。

</details>

</section>

<section class="lesson-check" markdown="1">

#### 再尝试 3 {#retry-3}

**Retry (self-written):** Evaluate $\sum_{r=1}^n[r^3-(r-1)^3]$ and decide whether its infinite series converges.

<details markdown="1"><summary>提示</summary>

写出最前面两组差和最后一组差。消项后，对真正留下的部分取极限。

</details>

<details markdown="1"><summary>解答与检查</summary>

当 $n\ge2$ 时，第一组差是 $1^3-0^3$，最后一组是 $n^3-(n-1)^3$。把有限和分组：

$$\begin{aligned}
&\sum_{r=1}^n[r^3-(r-1)^3]\\
&=(1^3+\cdots+n^3)\\
&\quad-[0^3+1^3+\cdots+(n-1)^3]\\
&=n^3-0^3=n^3.
\end{aligned}$$

当 $n=1$ 时，唯一的一组差同样给出 $1$。由于 $n^3\to\infty$，虽然能消项，这个无限级数仍发散。若你写零，说明误删了没有配对的末项 $n^3$；若写“收敛”，回看[有限极限的要求](#infinite-sums)。

</details>

</section>

## 下一课后的回顾 {#later-review}

学完下一课后，不重读示范，直接回来作答。根据各通项自行选法，并记录是否使用帮助。

<section class="lesson-check" markdown="1">

#### 混合回顾

**Later review (self-written):** For integer $n\ge2$, find closed forms for $A_n=\sum_{r=2}^n(r^3-r^2)$ and $B_n=\sum_{r=2}^n[1/(r+1)-1/(r+2)]$. Explain your choice of method for each. Decide whether each corresponding infinite series has a finite sum, and justify your conclusions.

<details markdown="1"><summary>提示</summary>

比较通项结构，而不是只看下限。得到准确的有限和后，再判断 $n$ 增大时它们的变化。

</details>

<details markdown="1"><summary>解答与检查</summary>

对于 $A_n$，使用立方和与平方和；要去掉的 $r=1$ 项为零：

$$\begin{aligned}
A_n&=\frac{n^2(n+1)^2}4-\frac{n(n+1)(2n+1)}6\\
&=\frac{n(n+1)[3n(n+1)-2(2n+1)]}{12}\\
&=\frac{n(n+1)(3n^2-n-2)}{12}\\
&=\frac{n(n+1)(3n+2)(n-1)}{12}.
\end{aligned}$$

最高次项为 $n^4/4$，因此 $A_n\to\infty$，对应级数发散。对于 $B_n$，相加各组差。当 $n\ge3$ 时，第一组是 $1/3-1/4$，最后一组是 $1/(n+1)-1/(n+2)$：

$$\begin{aligned}
B_n&=\left(\frac13+\cdots+\frac1{n+1}\right)\\
&\quad-\left(\frac14+\cdots+\frac1{n+2}\right)\\
&=\frac13-\frac1{n+2}.
\end{aligned}$$

末端分式趋于零，所以这个级数收敛到 $1/3$。当 $n=2$ 时，直接核对 $A_2=4$、$B_2=1/12$，与两个公式一致。若漏了幂次，回到[标准和](#model)；若首尾错误，回到[有限消项](#demonstration)；若收敛判断没有依据，回到[部分和](#infinite-sums)。

</details>

</section>

## 学完之后 {#next-step}

能够选法并解释理由、保留正确首尾，且不借助帮助完成对应重试后，继续学习[变化率与近似](/zh/alevel/as-further-mathematics/rates-and-approximations/)。把本页[混合回顾](#later-review)留到下一课之后。若尚未完成上一页的[复数延后回顾](/zh/alevel/as-further-mathematics/complex-numbers-and-roots/#later-review)，现在收起那一页的示范，完成回顾。

## 来源与范围 {#sources}

本页全部示范与练习均为**自拟题（self-written）**，没有官方分值。范围为 FP1.5：平方和与立方和的应用、差分法，以及部分和极限存在时的无限和。

<details markdown="1"><summary>官方依据与样卷身份</summary>

本课范围按 9665 v5.2；以下已读原题及配套评分材料用于设计作答证据，本页练习不是原题复制或官方评分标准。

FM01 样卷身份：QP 正文为 **Specimen 2018 Morning**，文件名含 2019/v3，页脚版本有差异；官网配套 MS 为样卷、版权 2017，并非某正式考季的实考 Final MS。

- [OxfordAQA 9665 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf), FP1.5.
- FM01 specimen Q1, Q6; QP pp.2,9, MS pp.4,7. [FM01 specimen QP](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9665-FM01-international-as-further-mathematics-specimen-paper-2019-v3-1.pdf) · [Specimen MS](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9665-FM01-international-as-further-mathematics-mark-scheme-2017-v2-1.pdf).

</details>

[上一课](/zh/alevel/as-further-mathematics/complex-numbers-and-roots/) · [课程路线](/zh/alevel/as-further-mathematics/#learning-route) · [下一课](/zh/alevel/as-further-mathematics/rates-and-approximations/)

{% include exam_topic_practice.html %}
