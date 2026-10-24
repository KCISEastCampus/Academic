---
title: 积分：方法选择
layout: subjects
mathjax: true
grade: a2
subject: a2-mathematics
lang: zh-CN
translation_of: /alevel/a2-mathematics/integration/
permalink: /zh/alevel/a2-mathematics/integration/
toc_headings: h2, h3
study_page: true
reading_layout: true
---

[纯数学](/zh/alevel/a2-mathematics/) · P2.7 积分
{: .lesson-meta}

求导是从函数找变化率；这里倒过来：已经知道导数，要找回原来的函数。例如 $x^2$ 求导得到 $2x$，所以 $2x$ 的一个原函数就是 $x^2$。这种“找回去”的计算是不定积分（indefinite integral）。下面从简单的形式开始，再学习遇到复杂式子时怎样选方法。
{: .lesson-lead}

- **学习：**从[选择方法](#choose-a-method)开始，并在每个[例题](#worked-examples)中说明选择理由。
- **作业帮助：**复习[换元积分法](#substitution)、[分部积分法](#integration-by-parts)或[部分分式](/zh/alevel/a2-mathematics/partial-fractions/#integration)。
- **复习：**先在不看解答的情况下完成[练习](#practice)，然后查看[快速参考](#quick-reference)。
{: .lesson-routes}

<div class="lesson-notes" markdown="1">

教材：第 6 章，第 6.1–6.4 节（第 82–95 页）。不定积分（indefinite integral）的积分常数（constant of integration）记作 $C$。

**开始前：**按需要回补[幂函数积分与有向面积](/zh/alevel/as-mathematics/integration/#l08)、[链式法则](/zh/alevel/a2-mathematics/differentiation/#composite-functions)、[乘积求导](/zh/alevel/a2-mathematics/differentiation/#products-and-quotients)或[部分分式列式](/zh/alevel/a2-mathematics/partial-fractions/#method)。下方[标准形式](#standard-integrals)会在本页讲解。

例 3–4 及 Q3 第二个积分为课程大纲示例；稍后 A 为真题改编，其余例题与任务为自拟；解答均由本站编写。

</div>

## 选择方法 {#choose-a-method}

先认清记号：积分号里面、等待我们处理的函数叫**被积函数**（integrand）；$dx$ 表示对变量 $x$ 积分。找到的原函数还要加 $C$，因为加上任何常数后，求导都会回到同一个函数。

**先看看式子能不能变简单。**例如先展开括号、约分，或者把根式改写成幂，就可能认出会算的形式。约分前不能用的输入，约分后仍然不能用。下面的表是选法提示；第一次读时不必记住全部，先跟着后面的例题做。

| 观察到的形式 | 可先尝试的方法 | 例子 |
|---|---|---|
| 若干幂函数或标准函数的和 | 逐项积分 | $\displaystyle x^2+\frac{1}{\sqrt{x}}$ |
| 复合函数，同时含有内层函数的导数因子 | 逆用链式法则（chain rule in reverse） | $6x(x^2+1)^2$ |
| 分子是分母导数的常数倍 | 使用对数形式（logarithmic form） | $\displaystyle \frac{2x}{x^2+1}$ |
| 换元后每一部分都更简单 | 使用换元积分法（integration by substitution） | $x(x+2)^6$，令 $u=x+2$ |
| 对其中一个因子求导会使乘积更简单 | 尝试分部积分法（integration by parts） | $xe^{2x}$ |
| 分母可因式分解的有理函数（rational function） | 先检查对数形式；必要时做多项式除法并使用部分分式 | $\displaystyle \frac{5}{(x+1)(x+2)}$ |
{: .wide-table}

你不必看到题目就立刻猜中方法。先试一种，看看剩下的积分有没有变简单；同一题也可能有几种正确做法。如果题目指定了换元，就要按要求做。

**先试着选择方法，再开始计算：**比较以下三个积分。

$$\int xe^{x^2}\,dx,\qquad \int xe^{2x}\,dx,\qquad \int \frac{2x}{x^2+1}\,dx.$$

<details markdown="1">
<summary>显示方法选择</summary>

- 对于 $xe^{x^2}$，$x^2$ 的导数是 $2x$：逆用链式法则，或使用换元 $u=x^2$。
- 对于 $xe^{2x}$，对 $x$ 求导会使它简化，而 $e^{2x}$ 易于积分：使用分部积分法。
- 对于 $\frac{2x}{x^2+1}$，分子正好是分母的导数：使用对数形式。

乘积并不总是需要用分部积分法。

</details>

## 标准积分（standard integrals） {#standard-integrals}

下面这些公式可以用求导来检查：对右边求导，应回到左边积分号内的函数。第一次读时，先认出幂、指数、对数和三角函数分别长什么样。

三角函数使用弧度制（radians）。公式中的 $a\ne0$。使用一个结果时，要选一段原式和答案都能计算的区间；不能跨过分母为零等断点，不相连的区间可以各有自己的常数 $C$。

### 幂函数与线性内层 {#power-integrals}

第一条可以读成“指数加 1，再除以加完后的指数”。当 $n=-1$ 时，分母会变成零，所以这时要用下一段的对数公式。根式、负指数等还要保留原式允许的输入范围。下面两式都要求 $n\ne-1$。

$$\int x^n\,dx=\frac{x^{n+1}}{n+1}+C.$$

$$\int (ax+b)^n\,dx=\frac{(ax+b)^{n+1}}{a(n+1)}+C.$$

### 指数与对数形式 {#exponential-logarithmic-integrals}

指数式适用于所有实数 $x$；对数式要求 $ax+b\ne0$。

$$\int e^{ax+b}\,dx=\frac1a e^{ax+b}+C.$$

$$\int\frac1{ax+b}\,dx=\frac1a\ln\lvert ax+b\rvert+C.$$

### 三角函数 {#trigonometric-integrals}

正弦、余弦式适用于所有实数 $x$；正割平方的积分要求 $\cos(ax+b)\ne0$。

$$\int\sin(ax+b)\,dx=-\frac1a\cos(ax+b)+C.$$

$$\int\cos(ax+b)\,dx=\frac1a\sin(ax+b)+C.$$

$$\int\sec^2(ax+b)\,dx=\frac1a\tan(ax+b)+C.$$

**求导检查系数。**例如，

$$\int\sec^2(2x-1)\,dx=\frac12\tan(2x-1)+C.$$

为什么前面要有一半？对右边求导时，里面的 $2x-1$ 会让结果多乘一个 $2$；前面的 $\frac12$ 正好把它抵消。同样的道理，里面是 $ax+b$ 时，要除以 $a$。

## 积分方法与示范 {#worked-examples}

### 化简后逐项积分 {#simplify-and-integrate}

先展开或约分，再使用标准积分；化简后仍保留原式的定义域限制。

<section class="worked-example" markdown="1">

#### 例题 1 — 先化简再选择方法 {#example-1--simplify-before-choosing}

**Question:** Find $\displaystyle\int\frac{x^2+3x}{x}\,dx$ for $x\ne0$.

**先看分式能不能变简单：**分子两项都有一个 $x$，把它约掉后，只剩两个可以分别积分的项。题目给出 $x\ne0$，所以这一步可以做。

$$\frac{x^2+3x}{x}=x+3,\qquad x\ne0.$$

$$\int(x+3)\,dx=\boxed{\frac{x^2}{2}+3x+C}.$$

**检查：**求导后得到 $x+3$，当 $x\ne0$ 时它与原被积函数相同。原式在 $x=0$ 时仍无定义。

</section>

### 逆用链式法则 {#reverse-chain-rule}

“逆用链式法则”就是把复合函数的求导过程倒着看。先找括号里反复出现的那一部分，再看旁边有没有它的导数。这样做是为了猜出一个可能的原函数；猜完必须求导检查，不是只凭外形认答案。

<section class="worked-example" markdown="1">

#### 例题 2 — 逆用链式法则 {#example-2--reverse-the-chain-rule}

**Question:** Find $\displaystyle\int6x(x^2+1)^2\,dx$.

**为什么试这个式子？**括号里的 $x^2+1$ 求导会给出 $2x$，题目旁边正好有一个含 $x$ 的因子。把括号外的平方提高成三次方，求导后会降回平方；因此先试 $(x^2+1)^3$，看看系数是否也对得上。

$$\frac{d}{dx}(x^2+1)^3=3(x^2+1)^2\cdot2x=6x(x^2+1)^2.$$

所以

$$\int6x(x^2+1)^2\,dx=\boxed{(x^2+1)^3+C}.$$

**检查：**求导后等于被积函数。链式法则还要乘上 $x^2+1$ 的导数 $2x$。

</section>

### 换元积分法 {#substitution}

换元（substitution）可以先理解成“给复杂的一部分换个短名字”。但它不只是改名：积分里每一处 $x$，以及表示对 $x$ 积分的 $dx$，都必须一起改写。算完不定积分后，再把短名字换回题目原来的表达式。

<section class="worked-example" markdown="1">

#### 例题 3 — 换元后把所有部分都改写 {#example-3--rewrite-everything-in-the-new-variable}

**Question:** Find $\displaystyle\int x(x+2)^6\,dx$.

**来源：**[OxfordAQA Mathematics (9660) 课程大纲，P2.7，印刷第 23 页](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf)的示例；解答由本站编写。

**为什么换名字？**括号的六次方不方便直接展开。若把 $x+2$ 叫作 $u$，那一大块就成了 $u^6$。剩下的 $x$ 也能写成 $u-2$，所以整个式子都会变得容易积分。这里括号求导只给出 $1$，不会给出前面的 $x$，因此不能直接套上一例的方法。

**过程：**令 $u=x+2$，则 $x=u-2$ 且 $du=dx$。

$$\int x(x+2)^6\,dx=\int(u-2)u^6\,du=\int(u^7-2u^6)\,du.$$

现在只剩幂的积分：把指数加 1，再除以新的指数。最后把 $u$ 换回 $x+2$：

$$\boxed{\frac{(x+2)^8}{8}-\frac{2(x+2)^7}{7}+C}.$$

**检查：**求导得到

$$\begin{aligned}&(x+2)^7-2(x+2)^6\\&\qquad=(x+2)^6[(x+2)-2]\\&\qquad=x(x+2)^6.\end{aligned}$$

**常见错误：**把 $(x+2)$ 改写成 $u$，却仍保留因子 $x$。换元后，要把所有部分都用 $u$ 表示，包括 $dx$。

</section>

### 分部积分法 {#integration-by-parts}

分部积分（integration by parts）用来把一个积分换成另一个更容易的积分。它来自乘积求导：两个函数相乘时，求导会出现两项，把其中一项移到另一边并积分，就得到下面的公式。

选择时，一部分拿去求导，另一部分拿去积分。我们希望求导的那部分变简单，积分的那部分也容易算。公式中的 $u,v$ 只是给两部分取的名字，不是题目额外给的新数据。

$$\int v\frac{du}{dx}\,dx=uv-\int u\frac{dv}{dx}\,dx.$$

<section class="worked-example" markdown="1">

#### 例题 4 — 适合分部积分的乘积 {#example-4--a-product-that-becomes-simpler}

**Question:** Find $\displaystyle\int xe^{2x}\,dx$.

**来源：**9660 大纲 v5.2、P2.7、印刷第 23 页的示例，解答由本站编写。

**为什么这样分？**把 $x$ 拿去求导，它会变成 $1$；把 $e^{2x}$ 拿去积分也很方便。这样，剩下的积分就不会再含那个麻烦的 $x$ 因子。按照上面的公式，把四个要用的量先写全：

$$v=x,\qquad \frac{du}{dx}=e^{2x},\qquad \frac{dv}{dx}=1,\qquad u=\frac{e^{2x}}{2}.$$

公式右边先把 $u$ 和 $v$ 相乘，再减去剩下的积分。第二次对指数函数积分时，还要再除一次 $2$：

$$\int xe^{2x}\,dx=\frac{xe^{2x}}{2}-\frac12\int e^{2x}\,dx=\boxed{\frac{xe^{2x}}{2}-\frac{e^{2x}}{4}+C}.$$

**检查：**分别对两项求导：

$$\left(\frac{e^{2x}}2+xe^{2x}\right)-\frac{e^{2x}}2=xe^{2x}.$$

**常见错误：**使用 $u=e^{2x}$，而不是 $\frac{e^{2x}}2$。应用分部积分法前，先求导检查 $u$。

</section>

#### 应用：对数函数的积分 {#integrating-a-logarithm}

对数函数也可以视为乘积。若要计算 $\int\ln x\,dx$（$x>0$），把被积函数写成 $1\times\ln x$。选择 $v=\ln x$ 和 $du/dx=1$，则 $dv/dx=1/x$ 且 $u=x$：

$$\int\ln x\,dx=x\ln x-\int1\,dx=\boxed{x\ln x-x+C}.$$

求导得到 $\ln x+1-1=\ln x$。

### 识别对数形式 {#logarithmic-form}

遇到分式，先对分母求导，再和分子比较。如果刚好一样，或只差一个常数倍，就可能得到对数。用之前仍要检查分母不能为零；答案只能用在不跨过这些禁值的一段区间上。

<section class="worked-example" markdown="1">

#### 例题 5 — 分式不一定要做部分分式分解 {#example-5--a-fraction-does-not-always-need-partial-fractions}

**Question:** Find $\displaystyle\int\frac{2x+2}{x^2+2x-15}\,dx$.

**选择：**分母的导数是 $2x+2$，恰好等于分子。使用标准对数形式。

$$\boxed{\ln\lvert x^2+2x-15\rvert+C}.$$

**检查：**$\ln\lvert f(x)\rvert$ 的导数是 $\frac{f'(x)}{f(x)}$，其中 $f(x)\ne0$。使用结果时，所选区间不能包含 $x=-5$ 或 $x=3$。

如果分子不符合这种形式，[部分分式](/zh/alevel/a2-mathematics/partial-fractions/#integration)可能会有帮助。先比较次数。如果使用多项式除法，要保留商。

</section>

## 定积分（definite integrals） {#definite-integrals}

不定积分找的是一个函数，定积分要算的是两个端点之间的一个累计值。先找到原函数 $F$，再用“右端点代入的值减去左端点代入的值”，也就是 $F(b)-F(a)$。

**先检查这一整段能不能用。**函数在 $a$ 到 $b$ 之间要连续（continuous），也就是中途不能出现跳跃或没有定义的地方；尤其注意分母为零。遇到这种断点，不能直接把两端代进去就算完。

<section class="worked-example" markdown="1">

### 例题 6 — 换元时也改变积分限 {#example-6--change-the-limits-with-the-variable}

**Question:** Evaluate $\displaystyle\int_0^1 2x(x^2+1)^3\,dx$.

**先改写函数，再改写两个端点：**令 $u=x^2+1$，则 $du=2x\,dx$，正好接住题目中的因子。积分限（limits of integration）指的是起点和终点：原来 $x$ 从 0 走到 1；换成 $u$ 后，就从 1 走到 2，因为 $x=0$ 时 $u=1$，$x=1$ 时 $u=2$。

$$\int_0^1 2x(x^2+1)^3\,dx=\int_1^2 u^3\,du=\left[\frac{u^4}{4}\right]_1^2=\boxed{\frac{15}{4}}.$$

**检查：**用 $x$ 积分得到 $\frac{(x^2+1)^4}{4}$。代入 $x=1$ 和 $x=0$ 会得到相同结果。

你可以用新变量和新积分限，也可以代回原变量并使用原积分限。不要把这两种做法混在一起。

</section>

**积分还是面积？**定积分给出带符号的面积（signed area）。要计算曲线与 $x$ 轴之间的总面积，应在曲线穿过 x 轴处拆分区间，并把正的面积相加。请参见[面积](/zh/alevel/a2-mathematics/integration-applications/#area)中的例题。

## 练习 {#practice}

**独立练习**

开始计算前，先写出方法和理由。用求导检查不定积分。每道题都先自己尝试，再打开提示或解答。

以下教学题没有官方分值。Q3 包含这里注明的一个课程大纲示例，其余练习为自拟。

*第二个积分为 9660 大纲 v5.2、P2.7、印刷第 23 页的示例，解答由本站编写。*

<section class="lesson-check" markdown="1">

### Q1 — 求原函数 {#q1--simplify-first}

Find $\displaystyle\int\frac{x^2+4}{\sqrt{x}}\,dx$ for $x>0$.

<details markdown="1">
<summary>提示</summary>

把被积函数改写为 $x^{\frac32}+4x^{-\frac12}$。

</details>

<details markdown="1">
<summary>解答与检查</summary>

化简后使用幂函数积分法：

$$\boxed{\frac25x^{\frac52}+8\sqrt{x}+C}.$$

求导后得到 $x^{\frac32}+4x^{-\frac12}=\frac{x^2+4}{\sqrt{x}}$。

</details>

</section>

<section class="lesson-check" markdown="1">

### Q2 — 求解并检查 {#q2--recognise-an-inner-derivative}

Find $\displaystyle\int x\cos(x^2)\,dx$.

<details markdown="1">
<summary>提示</summary>

对 $\sin(x^2)$ 求导。怎样选择系数才能得到所需的被积函数？

</details>

<details markdown="1">
<summary>解答与检查</summary>

直接识别，或令 $u=x^2$，得到

$$\boxed{\frac12\sin(x^2)+C}.$$

求导得到 $\frac12\cos(x^2)\cdot2x=x\cos(x^2)$。

</details>

</section>

<section class="lesson-check" markdown="1">

### Q3 — 两个积分 {#q3--choose-how-to-handle-a-product}

Find $\displaystyle\int x\cos(2x)\,dx$.

Also find $\displaystyle\int x\ln x\,dx$ for $x>0$.

<details markdown="1">
<summary>提示</summary>

与 Q2 比较。对 $2x$ 求导不会得到因子 $x$。尝试令 $v=x$，使用分部积分法。

对于对数乘积，选择 $v=\ln x$ 和 $du/dx=x$。

</details>

<details markdown="1">
<summary>解答与检查</summary>

选择 $v=x$ 和 $\frac{du}{dx}=\cos(2x)$，则 $\frac{dv}{dx}=1$ 且 $u=\frac12\sin(2x)$。

$$\begin{aligned}
\int x\cos(2x)\,dx
&=\frac{x\sin(2x)}2-\frac12\int\sin(2x)\,dx\\
&=\boxed{\frac{x\sin(2x)}2+\frac{\cos(2x)}4+C}.
\end{aligned}$$

求导得到

$$\begin{aligned}&\frac12\sin(2x)+x\cos(2x)-\frac12\sin(2x)\\&\qquad=x\cos(2x).\end{aligned}$$

对于第二个积分，$u=x^2/2$ 且 $dv/dx=1/x$，所以

$$\begin{aligned}
\int x\ln x\,dx
&=\frac{x^2\ln x}{2}-\frac12\int x\,dx\\
&=\boxed{\frac{x^2\ln x}{2}-\frac{x^2}{4}+C}.
\end{aligned}$$

求导得到 $x\ln x+\frac x2-\frac x2=x\ln x$。

</details>

</section>

<section class="lesson-check" markdown="1">

### Q4 — 有理式积分 {#q4--a-logarithm-or-partial-fractions}

Find $\displaystyle\int\frac{5}{(x+1)(x+2)}\,dx$.

<details markdown="1">
<summary>提示</summary>

分母是 $x^2+3x+2$。它的导数是否为 $5$ 的常数倍？如果不是，就分解这个分式。

</details>

<details markdown="1">
<summary>解答与检查</summary>

部分分式分解得到 $\frac{5}{x+1}-\frac{5}{x+2}$，因为 $5(x+2)-5(x+1)=5$。

$$\boxed{5\ln\lvert x+1\rvert-5\ln\lvert x+2\rvert+C}.$$

求导后得到这个部分分式分解。在所选区间中不能包含 $x=-1$ 或 $x=-2$。

</details>

</section>

<section class="lesson-check" markdown="1">

### Q5 — 精确值 {#q5--keep-the-variable-and-limits-consistent}

Using $u=x^2+1$, rewrite $\displaystyle\int_0^1\frac{x^3}{x^2+1}\,dx$ entirely in the new variable, giving the differential and both new limits. Then evaluate it exactly.

<details markdown="1">
<summary>提示</summary>

先对换元关系求导。把分子拆成微分所需因子与剩余因子，再把剩余因子也改写成新变量。

</details>

<details markdown="1">
<summary>解答与检查</summary>

被积函数在 $[0,1]$ 上连续。由 $du=2x\,dx$ 得 $x\,dx=\frac12\,du$，剩余因子为 $x^2=u-1$。当 $x=0$ 时 $u=1$；当 $x=1$ 时 $u=2$。所以

$$\begin{aligned}
\int_0^1\frac{x^3}{x^2+1}\,dx
&=\frac12\int_1^2\frac{u-1}{u}\,du\\
&=\frac12[u-\ln u]_1^2\\
&=\boxed{\frac{1-\ln2}{2}}.
\end{aligned}$$

分子中剩余的因子也必须换元，不能在新积分中混用变量。另用 $\frac{x^3}{x^2+1}=x-\frac{x}{x^2+1}$ 直接积分，可检查得到相同数值。结果为正，与被积函数一致。

</details>

</section>

## 诊断与重试 {#diagnose-and-retry}

从第一处错误选择回补，不只比较最终答案。读懂修复后收起原解答，再完成相应的新题。

| 哪里出了问题？ | 回补哪个判断？ | 怎样重新独立检查？ |
| --- | --- | --- |
| 求导后多出内层函数的因子 | [逆用链式法则](#reverse-chain-rule)：比较真正的内层导数，不能只看外层幂 | 重试 A |
| 把乘积的积分写成两个原函数相乘 | [分部积分](#integration-by-parts)：逆用乘积法则，保留余下的积分 | 稍后 A |
| 漏换剩余因子，或保留了原上下限 | [换元](#substitution)与[定积分](#definite-integrals)：全部因子及两个端点都要改写 | 重试 C |
| 把所有分式都当对数，或跨过无定义点 | [对数形式](#logarithmic-form)与[部分分式](/zh/alevel/a2-mathematics/partial-fractions/#method)；[代入上下限](#definite-integrals)之前先检查整个区间 | 重试 B |
{: .wide-table}

<section class="lesson-check" markdown="1">

### 重试 A {#retry-a}

**Question:** Find $\displaystyle\int 2x\cos(3x^2)\,dx$. Justify your coefficient by differentiation.

<details markdown="1">
<summary>提示</summary>

$3x^2$ 的导数是 $6x$。和题目实际给出的因子比较。

</details>

<details markdown="1">
<summary>解答与反馈</summary>

令 $u=3x^2$，则 $du=6x\,dx$，所以 $2x\,dx=\frac13\,du$。

$$\int2x\cos(3x^2)\,dx=\frac13\int\cos u\,du=\boxed{\frac13\sin(3x^2)+C}.$$

求导得到 $\frac13\cos(3x^2)\cdot6x=2x\cos(3x^2)$。若系数写成 $1$，求导后就是原被积函数的三倍。

</details>

</section>

<section class="lesson-check" markdown="1">

### 重试 B {#retry-b}

**Question:** Evaluate $\displaystyle\int_0^1\frac{3x+4}{(x+1)(x+2)}\,dx$ exactly. Would substituting $-3$ and $0$ into the same antiderivative correctly evaluate the integral over $[-3,0]$? Explain.

<details markdown="1">
<summary>提示</summary>

将 $3x+4$ 与展开后的分母导数比较。必要时求部分分式的两个系数；两个区间分别检查。

</details>

<details markdown="1">
<summary>解答与反馈</summary>

分子不是 $2x+3$ 的常数倍。分解为

$$\frac{3x+4}{(x+1)(x+2)}=\frac1{x+1}+\frac2{x+2}.$$

被积函数在 $[0,1]$ 上连续，所以

$$\begin{aligned}
\int_0^1\frac{3x+4}{(x+1)(x+2)}\,dx
&=[\ln(x+1)+2\ln(x+2)]_0^1\\
&=\ln2+2\ln3-2\ln2\\
&=\boxed{\ln(9/2)}.
\end{aligned}$$

但 $[-3,0]$ 包含 $x=-2$ 和 $x=-1$，分母在这两处为零。因此不能直接用“两端的原函数值相减”求这个积分。即使分开几段都找到了原函数，这两个不能代入的点仍然存在。

若分解系数错误，积分前先通分检查。若只错在第二问，应回补区间条件，而不是重复已经掌握的代数。

</details>

</section>

<section class="lesson-check" markdown="1">

### 重试 C {#retry-c}

**Question:** Using $u=x^2+1$, rewrite $\displaystyle\int_0^{\sqrt3}\frac{2x^3}{(x^2+1)^2}\,dx$ entirely in terms of $u$, including the differential and both new limits. Then evaluate it exactly.

<details markdown="1">
<summary>提示</summary>

得到微分后，找出分子中还剩下哪个因子；另把两个原端点分别换成新变量。

</details>

<details markdown="1">
<summary>解答与反馈</summary>

$$du=2x\,dx,\qquad x^2=u-1,\qquad x=0\Rightarrow u=1,\qquad x=\sqrt3\Rightarrow u=4.$$

所以

$$\begin{aligned}
\int_0^{\sqrt3}\frac{2x^3}{(x^2+1)^2}\,dx
&=\int_1^4\frac{u-1}{u^2}\,du\\
&=\int_1^4(u^{-1}-u^{-2})\,du\\
&=\left[\ln u+\frac1u\right]_1^4\\
&=\boxed{\ln4-\frac34}.
\end{aligned}$$

现在微分、每个因子与两个上下限全部使用同一变量。若漏换分子中的剩余因子，回看[例 3](#example-3--rewrite-everything-in-the-new-variable)；若保留原上下限，回看[例 6](#example-6--change-the-limits-with-the-variable)。收起例题后，再独立重建本题换元。

</details>

</section>

## 稍后再做 {#later-review}

学过积分应用或微分方程后，收起解答回来完成。计算前先说明选法；以下教学题没有官方分值。再通过课程[综合回顾](/zh/alevel/a2-mathematics/#mixed-review)练习跨章节选法。

<section class="lesson-check" markdown="1">

### 稍后 A {#later-a}

*改编自 January 2025 MA03 Q8：已改变对数的真数；本改编题不使用官方分值。*

**Question:** Find the exact value of $\displaystyle\int_0^1\ln(3x+1)\,dx$.

<details markdown="1">
<summary>提示</summary>

可以先以对数的真数换元，也可以直接分部积分。写明怎样处理余下的积分和上下限。

</details>

<details markdown="1">
<summary>解答与检查</summary>

对数在整个 $[0,1]$ 上有定义。令 $u=3x+1$，则 $dx=du/3$，新上下限是 $1,4$：

$$\begin{aligned}
\int_0^1\ln(3x+1)\,dx
&=\frac13\int_1^4\ln u\,du\\
&=\frac13\left([u\ln u]_1^4-\int_1^4 1\,du\right)\\
&=\frac13[u\ln u-u]_1^4\\
&=\boxed{\frac{4\ln4-3}{3}}.
\end{aligned}$$

分部积分时，对 $\ln u$ 求导，对 $1$ 积分。下限代入 $u\ln u-u$ 得到 $-1$，不是 $0$。对 $(3x+1)\ln(3x+1)/3-(3x+1)/3$ 求导可还原被积函数。直接分部、始终使用原上下限的正确解法同样成立。

</details>

</section>

<section class="lesson-check" markdown="1">

### 稍后 B {#later-b}

**Question:** Find $\displaystyle\int\frac{x^2}{\sqrt{x^3+1}}\,dx$ on $x>-1$. Explain why the power-rule exception for exponent $-1$ does not apply here.

<details markdown="1">
<summary>提示</summary>

把分母改写成幂。能否用一个新变量同时处理 $x^2\,dx$？

</details>

<details markdown="1">
<summary>解答与检查</summary>

令 $u=x^3+1>0$，所以 $du=3x^2\,dx$：

$$\int\frac{x^2}{\sqrt{x^3+1}}\,dx
=\frac13\int u^{-1/2}\,du
=\boxed{\frac23\sqrt{x^3+1}+C}.$$

新变量的幂是 $-\frac12$，不是 $-1$，所以可以用幂函数积分法则。求导得到 $\frac23\cdot\frac12(x^3+1)^{-1/2}\cdot3x^2$，正好还原被积函数。这里，随着 $x$ 增大，$u$ 也一直增大。虽然 $x=0$ 时 $du/dx=0$，但我们没有除以它；直接求导也确认答案在这一点仍成立。

</details>

</section>

## 快速参考 {#quick-reference}

| 方法 | 核心法则 | 使用前检查 |
|---|---|---|
| 幂函数积分法（power rule） | $\displaystyle\int x^n\,dx=\frac{x^{n+1}}{n+1}+C$ | $n\ne-1$；积分区间应在被积函数的定义域内 |
| 逆用链式法则 | $\displaystyle\int g'(x)[g(x)]^n\,dx=\frac{[g(x)]^{n+1}}{n+1}+C$ | $n\ne-1$；包含 $g(x)$ 的导数 |
| 对数形式 | $\displaystyle\int\frac{f'(x)}{f(x)}\,dx=\ln\lvert f(x)\rvert+C$ | $f(x)\ne0$ 在区间内成立 |
| 换元积分法 | 把整个积分都改写为新变量。定积分要改变积分限。 | 不要混用新旧变量 |
| 分部积分法 | $\displaystyle\int v\frac{du}{dx}\,dx=uv-\int u\frac{dv}{dx}\,dx$ | 剩余积分应当更简单 |
| 部分分式 | 必要时先除法，再分解并逐项积分 | 包含重复因式的每一个幂次，并保留商 |
{: .wide-table}

**如果求导结果不对：**检查链式法则带来的系数、符号，以及换元或多项式除法中是否漏项。

**练习后：**根据[诊断与重试](#diagnose-and-retry)修复具体错误；学完其他主题后再回到[稍后任务](#later-review)。

**你应当能够：**选择一种方法并说明理由，写出过程，使用正确的积分限并检查答案。

继续学习[三角积分与应用](/zh/alevel/a2-mathematics/integration-applications/)，了解恒等式、面积和旋转体体积。打开[部分分式](/zh/alevel/a2-mathematics/partial-fractions/)学习分式分解的完整课程，或使用[积分公式参考](/zh/alevel/a2-mathematics/quick-reference/#p27-integration)查阅标准结果、面积和体积公式。


<details markdown="1">
<summary>来源与范围</summary>

本页覆盖 [9660 大纲 v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf)印刷第 23 页 P2.7 的方法选择；三角恒等式、面积与旋转体体积在下一课继续。

制作时参考了 January 2025 MA03 [试卷](https://aqamat.alevelclouds.com/25_01_QP_P2.pdf) Q8 与[评分标准](https://aqamat.alevelclouds.com/25_01_MS_P2.pdf)第 13 页的分部积分、代数和上下限步骤。这是第三方镜像承载的官方命题材料。稍后 A 改变了对数的真数，已标为改编教学题，不将原 Q8 的分值用于本改编题。

</details>

**学习路径：**[上一节：参数方程](/zh/alevel/a2-mathematics/parametric-equations/) · [下一节：积分：三角积分与应用](/zh/alevel/a2-mathematics/integration-applications/)。
