---
title: "反常积分：收敛还是发散"
layout: subjects
mathjax: true
grade: as
subject: as-further-mathematics
lang: zh-CN
translation_of: /alevel/as-further-mathematics/improper-integrals/
permalink: /zh/alevel/as-further-mathematics/improper-integrals/
toc_headings: "#start, #model, #demonstration, #finite-endpoints, #power-test, #separate-limits, #practice, #retry, #later-review, #next-step, #sources"
study_page: true
reading_layout: true
---

[AS 高数课程](/zh/alevel/as-further-mathematics/)

区域可以延伸到无穷而面积有限，也可以在有限区间里具有无限面积。判断依据是先取有限截断，再求极限。先学会找出所有反常端点，再完成[独立题](#practice)。

## 开始前 {#start}

先修是定积分、幂与简单极限，指数为 $-1$ 时还需对数。原函数符号不熟时回看 [AS 微积分](/zh/alevel/as-mathematics/integration/)。学完应能识别反常位置、写正确的单侧极限、计算收敛情形，并论证发散；不需要复杂积分技巧。

<section class="lesson-check" markdown="1">

### 先修检查 {#entry}

**Entry check (self-written):** Evaluate $\int_1^R x^{-2}\,dx$ for finite $R>1$. Differentiate your antiderivative to check it. What happens to $1/R$ as $R$ grows without bound?

<details markdown="1"><summary>提示</summary>

使用幂积分规则，再减去下限值。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$\begin{aligned}
&\int_1^R x^{-2}\,dx=[-x^{-1}]_1^R\\
&=1-1/R.
\end{aligned}$$

$-x^{-1}$ 的导数为 $x^{-2}$，且 $1/R\to0$。若积分为负，先检查原函数负号与上限减下限的次序。

</details>

</section>

## 先把反常端点换成有限端点 {#model}

普通定积分要求在有限区间内有合适的被积函数。积分限为无穷、端点处函数无界或区间内部有奇点时，需要额外的极限定义。无穷不是可以代入原函数的数。

$$\begin{aligned}
&\int_1^\infty f(x)\,dx
=\lim_{R\to\infty}\int_1^R f(x)\,dx,\\
&\int_0^1 f(x)\,dx
=\lim_{\varepsilon\to0^+}\int_\varepsilon^1 f(x)\,dx.
\end{aligned}$$

第二式用于零是奇异端点的情形。每次都先在函数有定义的有限区间上积分，再检查极限。收敛要求极限为有限实数；极限无穷或不存在都叫发散，不能当作带无穷符号的有限答案。

## 无穷区间：比较两种尾部 {#demonstration}

<section class="worked-example" markdown="1">

### 求极限，而非只算大截断

**Demonstration (self-written):** Decide whether $\int_1^\infty x^{-2}\,dx$ and $\int_1^\infty x^{-1/2}\,dx$ converge.

$$\begin{aligned}
&\int_1^R x^{-2}\,dx=1-1/R,\\
&\lim_{R\to\infty}(1-1/R)=1.
\end{aligned}$$

第一项收敛于 1。每个有限截断仍遗漏一段正的尾部；尾部面积恰好等于所剩倒数，并趋于零，这才构成证明。

![Area under y=1/x² from x=1 to a finite cutoff R=4; dashed boundary at R and the remaining positive tail are labelled.](/alevel/as-further-mathematics/diagrams/improper.svg){: width="560" height="475" }

$$\begin{aligned}
&\int_1^R x^{-1/2}\,dx
=[2\sqrt x]_1^R\\
&=2(\sqrt R-1),\\
&\lim_{R\to\infty}2(\sqrt R-1)=+\infty.
\end{aligned}$$

第二项发散。两个被积函数都趋于零，但这不足以保证积分收敛，因为累计面积的行为不同。图像和数值截断只能提示差别，极限才作出论证。

</section>

## 有限区间中的无界函数 {#finite-endpoints}

<section class="worked-example" markdown="1">

### 从区间内部趋近零

**Demonstration (self-written):** Compare $\int_0^1 x^{-1/2}\,dx$ with $\int_0^1 x^{-2}\,dx$.

$$\begin{aligned}
&\int_\varepsilon^1 x^{-1/2}\,dx
=2(1-\sqrt\varepsilon),\\
&\lim_{\varepsilon\to0^+}2(1-\sqrt\varepsilon)=2.\\[2pt]
&\int_\varepsilon^1 x^{-2}\,dx
=\varepsilon^{-1}-1,\\
&\lim_{\varepsilon\to0^+}(\varepsilon^{-1}-1)=+\infty.
\end{aligned}$$

第一项虽然被积函数无界，仍收敛于 2；第二项发散。截断从正侧趋于零，是因为积分区间在这一侧。收敛取决于端点附近的累计行为，不只看区间长度或函数是否无界。

</section>

## 证明幂函数的参数条件 {#power-test}

对实数 $p\ne1$，幂积分规则给出两个不同的有限截断式：

$$\begin{aligned}
&\int_1^R x^{-p}\,dx
=\frac{R^{1-p}-1}{1-p},\\
&\int_\varepsilon^1 x^{-p}\,dx
=\frac{1-\varepsilon^{1-p}}{1-p}.
\end{aligned}$$

无穷端：$p>1$ 时 $1-p<0$，所以 $R^{1-p}\to0$，积分值为 $1/(p-1)$；$p<1$ 时上截断的正幂无界，积分也无界。零端：$p<1$ 时 $\varepsilon^{1-p}\to0$，值为 $1/(1-p)$；$p>1$ 时倒数幂无界，正的积分发散。

被排除的参数 $p=1$ 要另用对数：

$$\begin{aligned}
&\int_1^R\frac{dx}{x}=\ln R\longrightarrow+\infty,\\
&\int_\varepsilon^1\frac{dx}{x}
=-\ln\varepsilon\longrightarrow+\infty.
\end{aligned}$$

所以无穷尾部与零端点要求相反的严格条件。这里覆盖了所有实指数及对数边界，不是由几个例子猜出的规则。

## 每个奇点先分开，再相加 {#separate-limits}

若从 $a$ 到 $b$ 的区间在内部 $c$ 处有奇点，应在两侧选择独立截断：

$$\begin{aligned}
&L_-=\lim_{u\to c^-}\int_a^u f(x)\,dx,\\
&L_+=\lim_{v\to c^+}\int_v^b f(x)\,dx.
\end{aligned}$$

只有 $L_-$ 与 $L_+$ 分别有限，普通反常积分才存在，并等于两者之和。两端无穷或有多个奇点时，同样先拆成规则区段，逐个检查反常端点。不能人为关联截断，让发散部分互相抵消。

<section class="worked-example" markdown="1">

### 对称抵消为什么不是收敛

**Demonstration (self-written):** Assess the claim that $\int_{-1}^1 1/x\,dx=0$ because the integrand is odd.

$$\begin{aligned}
&\int_{-1}^{-\varepsilon}\frac{dx}{x}
=\ln\varepsilon\longrightarrow-\infty,\\
&\int_\delta^1\frac{dx}{x}
=-\ln\delta\longrightarrow+\infty.
\end{aligned}$$

两个单侧积分都发散。若强制用相同正截断 $\varepsilon=\delta$，每次和确实为零，但这是另一种关联截断的过程，不是普通反常积分；也不能跨越函数无定义处直接使用微积分基本定理。奇函数对称性不能修复这个定义域断点。

</section>

<section class="lesson-check" markdown="1">

### 补全截断计算 {#scaffold}

**Scaffold (self-written):** Evaluate $\int_4^\infty x^{-3/2}\,dx$ with a finite upper bound first.

<details markdown="1"><summary>提示</summary>

先在有限区间积分，再看上端项。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$\begin{aligned}
&\int_4^R x^{-3/2}\,dx=[-2x^{-1/2}]_4^R\\
&=1-2/\sqrt R,\\
&\lim_{R\to\infty}(1-2/\sqrt R)=1.
\end{aligned}$$

极限有限，所以反常积分收敛于这个值。

</details>

</section>

## 独立完成 {#practice}

计算前先定位奇点，需要时使用独立截断，并说明这些极限为何足以得出结论。

<section class="lesson-check" markdown="1">

### 第 1 题 {#practice-1}

**Independent task (self-written):** Decide whether each integral converges and evaluate those that do: $\int_0^4x^{-1/2}\,dx$, $\int_0^1x^{-3/2}\,dx$, and $\int_{-1}^1x^{-2}\,dx$. A calculator returns a finite value after cutting out a small interval around zero: does that settle the last case?

<details markdown="1"><summary>提示</summary>

先定位端点与内部奇点，再选截断。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$\begin{aligned}
&\int_\varepsilon^4x^{-1/2}\,dx\\
&=4-2\sqrt\varepsilon\to4,\\
&\int_\varepsilon^1x^{-3/2}\,dx
=2/\sqrt\varepsilon-2\to+\infty.\\[2pt]
&\int_{-1}^{-\varepsilon}x^{-2}\,dx
=\varepsilon^{-1}-1\to+\infty,\\
&\int_\delta^1x^{-2}\,dx
=\delta^{-1}-1\to+\infty.
\end{aligned}$$

这里 $\varepsilon,\delta\to0^+$，两截断独立。只有第一项收敛于 4。最后一项两侧都发散，因此积分发散；每个有限截断得到有限数，不代表极限有限。若跨过零一次计算，回看[分开极限](#separate-limits)，再做重试 1。

</details>

</section>

<section class="lesson-check" markdown="1">

### 第 2 题 {#practice-2}

**Independent task (self-written):** A student writes $\int_0^2 1/(x-1)\,dx=[\ln\lvert x-1\rvert]_0^2=0$. Determine whether this conclusion is valid and give the required independent one-sided limits.

<details markdown="1"><summary>提示</summary>

先找所有无定义输入，再考虑端点相减。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$\begin{aligned}
&\int_0^{1-\varepsilon}\frac{dx}{x-1}
=\ln\varepsilon\to-\infty,\\
&\int_{1+\delta}^2\frac{dx}{x-1}
=-\ln\delta\to+\infty.
\end{aligned}$$

分别令 $\varepsilon,\delta\to0^+$，两极限均非有限，所以积分发散。学生的原函数计算跨过奇点；相等截断只掩盖了两个发散过程，并没有消除它们。

</details>

</section>

<section class="lesson-check" markdown="1">

### 第 3 题 {#practice-3}

**Independent task (self-written):** For real $p$, determine when $\int_1^\infty4x^{-p}\,dx$ has a finite value. Find $p$ if that value is 2. For your resulting exponent, does $\int_0^1 4x^{-p}\,dx$ converge? Justify the boundary case as well.

<details markdown="1"><summary>提示</summary>

将特殊指数从幂公式中分离，另外检查。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$\begin{aligned}
&\int_1^R4x^{-p}\,dx\\
&=\frac{4(R^{1-p}-1)}{1-p},\\
&p\ne1.
\end{aligned}$$

无穷积分恰在 $p>1$ 收敛，值 $4/(p-1)$。令其为 2 得 $p=3$，符合条件。$p=1$ 时 $4\ln R\to+\infty$。指数 3 的零端积分发散，有限截断为 $2\varepsilon^{-2}-2\to+\infty$。若把尾部条件用于零端，回看[两种幂极限](#power-test)，再做重试 2。

</details>

</section>

## 诊断与重试 {#retry}

有限截断不是收敛证明，先回看[极限定义](#model)。若原函数计算跨过奇点，回看[独立极限](#separate-limits)，再做重试 1；若指数条件颠倒或漏掉边界，回看[分情况证明](#power-test)，再做重试 2。

<section class="lesson-check" markdown="1">

### 重试 1 {#retry-1}

**Retry (self-written):** Determine whether $\int_0^4 (x-2)^{-2}\,dx$ converges. Write both one-sided cutoff integrals.

<details markdown="1"><summary>提示</summary>

奇点在内部，不在两个外端点。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$\begin{aligned}
&\int_0^{2-\varepsilon}(x-2)^{-2}\,dx\\
&=\varepsilon^{-1}-1/2,\\
&\int_{2+\delta}^4(x-2)^{-2}\,dx\\
&=\delta^{-1}-1/2.
\end{aligned}$$

分别令 $\varepsilon,\delta\to0^+$，两者均趋于 $+\infty$，因此发散。奇点换位置仍须分开检查。

</details>

</section>

<section class="lesson-check" markdown="1">

### 重试 2 {#retry-2}

**Retry (self-written):** For which p do both $\int_0^1x^{-p}\,dx$ and $\int_1^\infty x^{-p}\,dx$ converge?

<details markdown="1"><summary>提示</summary>

写两个严格条件，再查边界。

</details>

<details markdown="1"><summary>解答与核对</summary>

没有实 $p$ 满足：第一项要求 $p<1$，第二项要求 $p>1$；$p=1$ 时两个对数积分都发散。所以 $\int_0^\infty x^{-p}\,dx$ 对任何实指数都不收敛，不能用一端有限来补偿另一端发散。

</details>

</section>

## 下一课后的回顾 {#later-review}

<section class="lesson-check" markdown="1">

### 混合回顾 {#review}

**Later review (self-written):** Evaluate $\int_0^1 x^2\,dx$ and decide whether $\int_0^\infty f(x)\,dx$ converges for the function below. Also assess $\int_{-2}^2 1/x\,dx$. Justify the type of calculation each requires.

$$f(x)=\begin{cases}
x^{-1/2},&0<x\le1,\\
x^{-2},&x>1.
\end{cases}$$

<details markdown="1"><summary>提示</summary>

看定义域与端点，而不只看区间有界与否。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$\begin{aligned}
&\int_0^1x^2\,dx=1/3,\\
&\int_\varepsilon^1x^{-1/2}\,dx\\
&=2(1-\sqrt\varepsilon)\to2,\\
&\int_1^R x^{-2}\,dx=1-1/R\to1.
\end{aligned}$$

第一项是普通定积分；分段函数的两部分各自收敛，和为 3。最后一项有内部奇点：左侧截断 $\ln\varepsilon-\ln2\to-\infty$，右侧 $\ln2-\ln\delta\to+\infty$，所以发散。对称性不能定义普通反常积分；若把两个发散部分绑在一起，回看[截断定义](#model)或[独立极限](#separate-limits)。

</details>

</section>

## 下一步 {#next-step}

无帮助通过对应重试后，进入[矩阵代数](/zh/alevel/as-further-mathematics/matrix-algebra/)。现在完成[变化率回顾](/zh/alevel/as-further-mathematics/rates-and-approximations/#later-review)，下一课后再做本页混合回顾。

## 来源与范围 {#sources}

本页示范及练习均为**自拟题（self-written）**，无官方分值。FP1.7 的范围为简单反常积分；以幂极限及分开奇点说明收敛，不以数值截断代替论证。

<details markdown="1"><summary>官方来源与样卷身份</summary>

本课范围按 9665 v5.2；以下已读原题及配套评分材料用于设计作答证据，本页练习不是原题复制或官方评分标准。

FM01 样卷身份：QP 正文为 **Specimen 2018 Morning**，文件名含 2019/v3，页脚版本有差异；官网配套 MS 为样卷、版权 2017，并非某正式考季的实考 Final MS。

- [OxfordAQA 9665 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf), FP1.7.
- FM01 specimen Q3; QP pp.4–5, MS p.5. [FM01 specimen QP](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9665-FM01-international-as-further-mathematics-specimen-paper-2019-v3-1.pdf) · [Specimen MS](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9665-FM01-international-as-further-mathematics-mark-scheme-2017-v2-1.pdf).

</details>

[上一课](/zh/alevel/as-further-mathematics/rates-and-approximations/) · [课程路线](/zh/alevel/as-further-mathematics/#learning-route) · [下一课](/zh/alevel/as-further-mathematics/matrix-algebra/)

{% include exam_topic_practice.html %}
