---
title: "离散均匀概率与矩"
layout: subjects
mathjax: true
grade: as
subject: as-further-mathematics
lang: zh-CN
translation_of: /alevel/as-further-mathematics/discrete-uniform/
permalink: /zh/alevel/as-further-mathematics/discrete-uniform/
toc_headings: h2, h3
study_page: true
reading_layout: true
---

[AS 高数课程](/zh/alevel/as-further-mathematics/) · S2 · FS1.2

本页示范、补步骤、独立任务及再尝试均为**自拟题（self-written）**，没有官方分值。先写方法与理由，再分别展开提示和解答。题干保留英文，中文说明帮助建立推理。

## 先数结果，再处理区间 {#model}

本课要能写清等可能的整数支持集，区分严格与含端点条件，独立推导均值和方差，并由矩反求模型。先列严格介于 1.2 和 4.8 的整数：2、3、4。区间长度不是结果个数。

设 a、b 是整数端点，N 为连续整数的个数。各点等可能是模型假设，单有端点并不能推出。支持集外概率为零。

$$
\begin{aligned}
&a\le b,\\
&N=b-a+1,\\
&P(X=x)=\frac1N,\\
&x\in\{a,a+1,\ldots,b\},\\
&P(X=x)=0\quad\text{otherwise}.
\end{aligned}
$$

只数同时落在题目区间和支持集内的整数。CDF 在跳跃处包含该点概率，因此右连续；下取整表示不超过 x 的最大整数。

$$
F(x)=\begin{cases}
0&x<a,\\
\dfrac{\lfloor x\rfloor-a+1}{N}&a\le x<b,\\
1&x\ge b.
\end{cases}
$$

![Discrete uniform distribution on 1,2,3,4: four equal probability bars of height 1/4 and a step CDF with closed right-continuous values and open left limits.](/alevel/as-further-mathematics/diagrams/uniform.svg){: width="560" height="670" }

柱高表示点概率，不是连续密度；柱子等高并不表示柱间的数值也可能取到。

## 推导：从等概率得到两个矩 {#demonstration}

<section class="worked-example" markdown="1">

先回补原点矩与方差定义。有限分布不涉及无穷级数收敛。U 在一到 N 上均匀时，每项权重都是 1/N，使用下列有限和恒等式：

$$
\begin{aligned}
&E(U)=\sum_r rP(U=r),\\
&E(U^2)=\sum_r r^2P(U=r),\\
&\operatorname{Var}(U)=E(U^2)-[E(U)]^2,\\
&\sum_{r=1}^{N}r=\frac{N(N+1)}2,\\
&\sum_{r=1}^{N}r^2=\frac{N(N+1)(2N+1)}6.
\end{aligned}
$$

均值平均取值，二阶原点矩平均取值的平方；先求这两个平均再作差，不能把概率平方。

$$
\begin{aligned}
&E(U)=\frac1N\sum_{r=1}^{N}r\\
&\quad=\frac{N+1}2,\\
&E(U^2)=\frac1N\sum_{r=1}^{N}r^2\\
&\quad=\frac{(N+1)(2N+1)}6,\\
&\operatorname{Var}(U)\\
&\quad=\frac{(N+1)(2N+1)}6\\
&\qquad-\frac{(N+1)^2}4\\
&\quad=\frac{(N+1)(4N+2-3N-3)}{12}\\
&\quad=\frac{N^2-1}{12}.
\end{aligned}
$$

再平移到 X。加常数使每个取值与均值同时移动相同距离，因此离差不变。这给出方差不变的理由。

$$
\begin{aligned}
&X=U+a-1,\\
&E(X)=\frac{N+1}2+a-1=\frac{a+b}2,\\
&X-E(X)=U-E(U),\\
&\operatorname{Var}(X)=\frac{N^2-1}{12}.
\end{aligned}
$$

N=1 时仅取常量 a=b，均值为 a、方差为零，符合两个公式。上面的推导覆盖所有正整数 N，不能只用几个数值例子代替。

</section>

<section class="worked-example" markdown="1">

**Demonstration (self-written):** X is uniform on $\{-2,-1,0,1,2,3,4\}$. Find $P(X>1.5)$ and its moments.

大于 1.5 的可取值为 2、3、4；支持集包含两端点，共七点。

$$
\begin{aligned}
&N=4-(-2)+1=7,\\
&P(X>1.5)=\frac37,\\
&E(X)=\frac{-2+4}2=1,\\
&\operatorname{Var}(X)=\frac{49-1}{12}=4.
\end{aligned}
$$

直接核对：相对均值 1 的离差为 −3 到 3，平方和为 28，除七得方差 4；对称性也核对均值。

</section>

## 等间距需要作变换 {#spaced}

有间隔的取值也可以等可能，但不能把端点跨度当作连续整数公式里的 N。先令 K 在零到 N−1 上均匀再变换；d 非零时仍有 N 个不同取值，离差被乘以 d。

$$
\begin{aligned}
&T=c+dK,\\
&d\ne0,\\
&E(T)=c+d\frac{N-1}2,\\
&T-E(T)=d[K-E(K)],\\
&\operatorname{Var}(T)=d^2\frac{N^2-1}{12}.
\end{aligned}
$$

d 为负时顺序颠倒，方差仍乘 d 的平方。若 d=0，T 为单点常量 c；只有 N>1 时，才不再有 N 个不同取值。

## 计数、推导与改变表征 {#practice}

<section class="lesson-check" id="scaffold" markdown="1">

**Scaffold (self-written):** With X as above, compare $P(X<2)$ and $P(X\le2)$.

用同一支持集比较严格小于和包含端点的概率。

<details markdown="1"><summary>提示</summary>

先列结果再计数。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$
\begin{aligned}
&X<2:\quad -2,-1,0,1,\\
&X\le2:\quad -2,-1,0,1,2,\\
&P(X<2)=\frac47,\\
&P(X\le2)=\frac57.
\end{aligned}
$$

两概率之差恰好是取值 2 的概率。

</details>

</section>

<section class="lesson-check" id="practice-1" markdown="1">

**Independent task (self-written):** U is uniform on $\{1,\ldots,n\}$ with variance 4. Find integer n and $P(2.5<U\le6.2)$. Another student reports variance 3 for such a model: is any positive integer n possible? Justify.

反求整数 n 后再数区间内的整数，另判断方差报告能否成立。

<details markdown="1"><summary>提示</summary>

支持集大小必须是正整数，不能四舍五入。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$
\begin{aligned}
&n^2-1=48,\\
&n=7,\\
&2.5<U\le6.2:\quad U=3,4,5,6,\\
&P(2.5<U\le6.2)=\frac47,\\
&\operatorname{Var}(U)=3\ \Rightarrow\ n^2=37.
\end{aligned}
$$

没有正整数的平方为 37，第二个报告与模型不相容。

</details>

</section>

<section class="lesson-check" id="practice-2" markdown="1">

**Independent task 2 (self-written):** For integers a≤b, X is equally likely on every integer from a to b. Starting from the probability masses and the finite-sum identities above, derive its mean and variance for every such a,b. Show the second raw moment and the cancellation of the shift. Treat the single-point case. Quoting the final formulas alone does not answer this task.

这题要独立从 PMF 推出两个矩，不能只代公式。

<details markdown="1"><summary>提示</summary>

用从一开始的变量重编号，先展开平方，再减均值平方。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$
\begin{aligned}
&N=b-a+1,\\
&X=U+a-1,\\
&P(U=r)=1/N\quad(1\le r\le N),\\
&E(U)=\frac1N\sum_{r=1}^{N}r=\frac{N+1}2,\\
&E(U^2)=\frac1N\sum_{r=1}^{N}r^2\\
&\quad=\frac{(N+1)(2N+1)}6,\\
&E(X)=a-1+\frac{N+1}2=\frac{a+b}2,\\
&E(X^2)=E(U^2)+2(a-1)E(U)\\
&\qquad +(a-1)^2,\\
&\operatorname{Var}(X)=E(X^2)-[E(X)]^2\\
&\quad=E(U^2)-[E(U)]^2\\
&\quad=\frac{(N+1)(2N+1)}6\\
&\qquad-\frac{(N+1)^2}4\\
&\quad=\frac{N^2-1}{12}.
\end{aligned}
$$

N=1 时 X 恒为 a，均值 a、方差零。完整推导必须有两个加权和及平移项的抵消。

</details>

</section>

<section class="lesson-check" id="practice-3" markdown="1">

**Independent task 3 (self-written):** A device displays 2, 5, 8, 11 with equal probabilities. Find its mean, variance and probability of a display at least 7. Explain why treating it as uniform on every integer from 2 to 11 fails. If it always displays 2 instead, give its mean and variance.

自己选择表征处理有间隔的取值，并检查常量边界。

<details markdown="1"><summary>提示</summary>

只有四个等可能标签，间距影响离差而不是标签数。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$
\begin{aligned}
&T=2+3K,\\
&K\in\{0,1,2,3\},\\
&E(K)=\frac32,\\
&\operatorname{Var}(K)=\frac54,\\
&E(T)=2+3\left(\frac32\right)=\frac{13}2,\\
&\operatorname{Var}(T)=9\left(\frac54\right)=\frac{45}4,\\
&P(T\ge7)=P(T\in\{8,11\})=\frac12.
\end{aligned}
$$

十个连续整数模型会把概率给不可能的 3 等取值。常量情况均值 2、方差零。

</details>

</section>

## 按具体缺口重试 {#retry}

端点出错时先列重试 1 的取值；若只引用公式没有推导，重做重试 2 的两个矩；若把间隔当作更多结果，先给重试 3 重编号再计算。

<section class="lesson-check" id="retry-1" markdown="1">

**Retry (self-written):** Y is uniform on $\{-3,-2,-1,0,1,2,3\}$. Find $P(\lvert Y\rvert<2)$, mean and variance.

先把绝对值不等式转成取值范围，再计算两个矩。

<details markdown="1"><summary>提示</summary>

将严格不等式与支持集取交集。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$
\begin{aligned}
&\lvert Y\rvert<2:\quad Y=-1,0,1,\\
&P(\lvert Y\rvert<2)=\frac37,\\
&E(Y)=0,\qquad\operatorname{Var}(Y)=4.
\end{aligned}
$$

这是七个等可能点，不是连续区间。

</details>

</section>

<section class="lesson-check" id="retry-2" markdown="1">

**Retry 2 (self-written):** V is uniform on 0,1,...,m−1 for a positive integer m. Derive both its mean and variance directly from its probability masses and finite sums, including m=1. Explain why shifting the support down by one changes only the mean.

从零起点 PMF 重推两矩，并解释平移的影响。

<details markdown="1"><summary>提示</summary>

和公式上限换成 m−1，但每项概率仍是 1/m。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$
\begin{aligned}
&P(V=k)=1/m\quad(0\le k\le m-1),\\
&\sum_{k=0}^{m-1}k=\frac{m(m-1)}2,\\
&\sum_{k=0}^{m-1}k^2=\frac{m(m-1)(2m-1)}6,\\
&E(V)=\frac{m-1}2,\\
&E(V^2)=\frac{(m-1)(2m-1)}6,\\
&\operatorname{Var}(V)\\
&\quad=\frac{(m-1)(2m-1)}6\\
&\qquad-\frac{(m-1)^2}4\\
&\quad=\frac{m^2-1}{12}.
\end{aligned}
$$

m=1 时 V=0。平移同时改变取值和均值，中心离差不变。

</details>

</section>

<section class="lesson-check" id="retry-3" markdown="1">

**Retry 3 (self-written):** Five equally likely labels are −4, −2, 0, 2, 4. Find the mean, variance and probability that the label is greater than −3 and at most 2. Explain your count and your variance scaling.

这是五个等可能标签；解释计数分母与步长对方差的影响。

<details markdown="1"><summary>提示</summary>

步长为二，离差平方乘四。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$
\begin{aligned}
&V=-4+2K,\\
&K\in\{0,1,2,3,4\},\\
&E(V)=-4+2(2)=0,\\
&\operatorname{Var}(V)=4(2)=8,\\
&-3<V\le2:\quad V=-2,0,2,\\
&P(-3<V\le2)=\frac35.
\end{aligned}
$$

分母是五；若用端点间九个整数，就改变了模型。

</details>

</section>

## 学完几何分布后再回来 {#later-review}

<section class="lesson-check" id="later-task" markdown="1">

**Later review (self-written):** An equally likely consecutive-integer variable has mean 3 and variance 10. Recover its support, justify the integer endpoints, and verify both moments from weighted finite sums rather than only substituting into final formulas. Find the probability it is at least 7.

延后由两矩恢复端点，并重新用有限和核验。

<details markdown="1"><summary>提示</summary>

方差决定点数，均值决定中点。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$
\begin{aligned}
&10=\frac{N^2-1}{12}\ \Rightarrow\ N=11,\\
&a+b=6,\\
&b-a=10,\\
&a=-2,\\
&b=8,\\
&X=U-3,\\
&P(U=r)=1/11,\\
&E(U)=\frac1{11}\sum_{r=1}^{11}r=6,\\
&E(U^2)=\frac1{11}\sum_{r=1}^{11}r^2=46,\\
&E(X)=6-3=3,\\
&\operatorname{Var}(X)=46-6^2=10,\\
&P(X\ge7)=\frac2{11}.
\end{aligned}
$$

两端点为整数，十一个概率合计一；尾部只含 7、8。

</details>

</section>

## 决定下一步 {#next-step}

完成两个矩的推导及变起点重试后，再学几何分布。计数错误时回看 CDF 并列出取值；方差错误时先重建二阶原点矩再减均值平方。学完几何分布后不看笔记做延后回顾；这些矩求和还会用于均匀分布 PGF。

## 来源与范围 {#sources}

本课范围按 9665 v5.2；以下已读原题及配套评分材料用于设计作答证据，本页练习不是原题复制或官方评分标准。

- [OxfordAQA 9665 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf), FS1.2.
- FM02 June 2024 Q8(b)(i); QP pp.16–17, MS p.14. [FM02 June 2024 QP](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-question-paper.pdf) · [Final MS](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-mark-scheme.pdf).

[上一课](/zh/alevel/as-further-mathematics/bayes/) · [课程路线](/zh/alevel/as-further-mathematics/#learning-route) · [下一课](/zh/alevel/as-further-mathematics/geometric-distribution/)

{% include exam_topic_practice.html %}
