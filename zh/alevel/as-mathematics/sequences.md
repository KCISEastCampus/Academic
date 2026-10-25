---
layout: subjects
title: "数列与级数"
mathjax: true
grade: as
subject: as-mathematics
lang: zh-CN
translation_of: /alevel/as-mathematics/sequences/
permalink: /zh/alevel/as-mathematics/sequences/
toc_headings: h2
reading_layout: true
study_page: true
---

[AS 数学学习路线](/zh/alevel/as-mathematics/#learning-route) · P1.5 · OxfordAQA 9660 v5.2
{:.lesson-meta}

先读懂解释和完整示范，再拿纸笔做题。提示与解答分别展开。所有题目均为**自拟题**，没有官方分值；保留英文题干，中文帮助你理解和逐步独立表达。

- [求一项，还是求总和？](#l10)
- [不断乘同一个数，怎样求和？](#l11)
- [一步一步生成数列](#l12)
- [展开乘方，再估计数值](#l13)

## 求一项，还是求总和？ {#l10}

目标：分清某一项与总和，并使用整数个数。先修：[一次方程](/zh/alevel/as-mathematics/algebra/#l02)。

### 问一笔钱，还是所有钱？ {#l10-concept}

数列（sequence）是一串按顺序排列的数。等差数列每次加同样的数。如果第一项是 $a$、每次增加 $d$，走到第 $n$ 项只走了 $n-1$ 步，所以 $u_n=a+(n-1)d$，其中 $n=1,2,\ldots$。

级数（series）是把项加起来。第一项配最后一项，第二项配倒数第二项，每对总和相同，由此得到：

$$S_n=\sum_{r=1}^n u_r=\frac n2[2a+(n-1)d].$$

$\sum$ 的意思是让编号依次取指定整数，再把对应的项相加，不是乘上最后的编号。把整数列表正着、倒着相加，会得到 $n$ 对，每对是 $n+1$，所以：

$$\sum_{r=1}^n r=\frac{n(n+1)}2.$$

选公式前先问：要某一项，还是总和？不是每串数都等差，例如 $u_n=n^2+1$ 开头是 $2,5,10$。按月存款时，月份必须是整数；求首次达到目标，要核对临界点两边的总额。

<div class="worked-example" markdown="1">

### 完整示范 {#l10-worked}

**Question:** A constructed savings plan deposits 20 dollars in month 1 and increases each deposit by 5 dollars. Find the month-6 deposit and total deposited in six months.

此处 $a=20,d=5$，故 $u_6=20+5(5)=45$ 美元，而 $S_6=3[40+5(5)]=195$ 美元。列出 $20,25,30,35,40,45$ 可核对单月与累计问题的区别。

</div>

<div class="lesson-check" markdown="1">

### 带支架尝试 {#l10-scaffold}

**Question:** Evaluate $\sum_{r=1}^{10}(3r+2)$ using the natural-number sum.

<details markdown="1">
<summary>提示</summary>

拆成自然数和的三倍，加上十个常数。

</details>

<details markdown="1">
<summary>解答与核验</summary>

$3\times55+2\times10=185$。

</details>

</div>

<div class="lesson-check" markdown="1">

### 独立任务 {#l10-independent}

**Question:** An arithmetic savings plan has $S_5=100$ and $S_{10}=325$ dollars. Find its first deposit and common difference. Find the first month at which its total reaches at least 200 dollars.

<details markdown="1">
<summary>提示</summary>

先列首项与公差的两式，再比较相邻整数项数的累计量。

</details>

<details markdown="1">
<summary>解答与核验</summary>

$5a+10d=100$ 与 $10a+45d=325$ 得 $d=5,a=10$。于是 $S_n=(5n^2+15n)/2$。$S_7=175$、$S_8=220$，且每笔存款为正，因此第 8 月首次达到目标。

</details>

</div>

### 诊断与修正 {#l10-diagnosis}

若写成 $a+nd$，代 $n=1$ 就无法返回首项。预算边界若求得非整数，须按题目不等式选整数，不能机械四舍五入。

若错在项数，先区分[一项与总和](#l10-worked)，再做[数项重试](#l10-retry)。若错在首次达标的月份，回看[相邻月份检查](#l10-independent)，再做[新目标题](#l10-retry-threshold)。

<div class="lesson-check" markdown="1">

### 再尝试 {#l10-retry}

**Question:** Find $\sum_{r=4}^{10}(2r-1)$ and state the number of terms.

<details markdown="1">
<summary>提示</summary>

可用前十项减前三项；计数时包括两端。

</details>

<details markdown="1">
<summary>解答与核验</summary>

共 $7$ 项，从 $7$ 到 $19$，和为 $7(7+19)/2=91$。

</details>

</div>

<div class="lesson-check" markdown="1">

### 再试一题 {#l10-retry-threshold}

**Question:** A constructed savings plan deposits 12 dollars in month 1, then increases each monthly deposit by 4 dollars. Find the first month when the total deposited is at least 250 dollars. Justify the whole-number choice.

<details markdown="1">
<summary>提示</summary>

先写总存款，再检查临界值两边的整数月份。

</details>

<details markdown="1">
<summary>解答与检查</summary>

总存款为 $S_n=\frac n2[24+4(n-1)]=2n^2+10n$。令 $S_n=250$，正的临界值是 $n=(-5+\sqrt{525})/2\approx8.96$。

题目要求至少达到目标，不能只按四舍五入选月份。检查相邻整数：$S_8=208<250$，而 $S_9=252\ge250$。每月都存入正数金额，总额不断增加，因此第 9 个月首次达标。

</details>

</div>

## 不断乘同一个数，怎样求和？ {#l11}

目标：解释等比求和，并判断无穷和何时存在。先修：[二次式](/zh/alevel/as-mathematics/algebra/#l02)与[项和总和](#l10)。

### 每次乘同一个数 {#l11-concept}

等差是每次加同样多，等比是每次乘同一个比值。它的第 $n$ 项是 $u_n=ar^{n-1}$。要求和，可以把总和再乘一次 $r$；两行相减时，中间相同的项会抵消：

$$\begin{aligned}
S_n&=a+ar+\cdots+ar^{n-1},\\
rS_n&=ar+ar^2+\cdots+ar^n,\\
(1-r)S_n&=a-ar^n,\\
S_n&=\frac{a(1-r^n)}{1-r}\quad(r\ne1).
\end{aligned}$$

如果 $r=1$，每项都是 $a$，有限总和直接是 $na$，不要除以零。公比为负时，每一步变号，计算乘方要保留括号。

无穷和不是说“把最后一项找出来”，而是不断加下去时，总和越来越接近同一个有限数。首项非零时，恰好在 $\lvert r\rvert<1$ 时成立：此时 $r^n\to0$，得到 $S_\infty=a/(1-r)$。用这个公式解出公比后，还要检查条件；有限项求和没有这个限制。

<div class="worked-example" markdown="1">

### 完整示范 {#l11-worked}

**Question:** For $18,6,2,\ldots$, find the sum of the first four terms and the sum to infinity.

公比为 $1/3$，所以 $S_4=18(1-1/81)/(1-1/3)=80/3$。由于 $\lvert1/3\rvert<1$，无穷和为 $18/(1-1/3)=27$。剩余各项为正，因此前四项和小于无穷和。

</div>

<div class="lesson-check" markdown="1">

### 带支架尝试 {#l11-scaffold}

**Question:** List four terms for $a=12,r=-1/2$ and evaluate their sum.

<details markdown="1">
<summary>提示</summary>

注意符号交替，负公比整体乘方。

</details>

<details markdown="1">
<summary>解答与核验</summary>

四项为 $12,-6,3,-3/2$，所以 $S_4=15/2$。

</details>

</div>

<div class="lesson-check" markdown="1">

### 独立任务 {#l11-independent}

**Question:** A nonzero geometric series has second term $-6$ and sum to infinity $8$. Find its first term and ratio, justifying rejection of any other candidate. Express the sum of its first $2k$ terms.

<details markdown="1">
<summary>提示</summary>

把两个条件联立，先消去首项。

</details>

<details markdown="1">
<summary>解答与核验</summary>

$ar=-6$ 与 $a=8(1-r)$ 得 $4r^2-4r-3=0$，候选 $r=3/2,-1/2$。$3/2$ 的绝对值大于 1，须排除；故 $a=12$。前偶数项和为 $8(1-4^{-k})$，因为 $(-1/2)^{2k}=4^{-k}$。

</details>

</div>

### 诊断与修正 {#l11-diagnosis}

有限和不要求收敛；计算器给出的合理数值也不能保证无穷和存在。应明确写出排除候选值的理由。

回看[有限项相消与极限条件](#l11-concept)，再判断[改变后的公比](#l11-retry)。

<div class="lesson-check" markdown="1">

### 再尝试 {#l11-retry}

**Question:** Find the sum of five terms with $a=7,r=1$. Does the corresponding infinite series converge?

<details markdown="1">
<summary>提示</summary>

公比为 1 时不要使用分母为零的公式。

</details>

<details markdown="1">
<summary>解答与核验</summary>

$S_5=35$。部分和为 $7n$，无界增长，故不存在有限无穷和。

</details>

</div>

## 一步一步生成数列 {#l12}

目标：从实际初值走完递推步骤，并检查候选极限。先修：[代入](/zh/alevel/as-mathematics/algebra/#l02)与[等比变化](#l11)。

### 把刚算出的答案放进下一步 {#l12-concept}

递推式（recurrence）告诉我们，怎样由当前这一项算下一项。从给定初值开始，算出新值，再把新值放进下一步，不要每次都放回初值。编号也要保留：标成零的初值不是第一项。

不动点（fixed point）是经过规则后保持不变的数。如果数列趋近有限数 $L$，而规则 $f$ 在那里连续，由 $x_{n+1}=f(x_n)$ 可得到候选方程 $L=f(L)$。它只是在问“最终不变的数可能是什么”，还没有证明这个初值会走向它。

先追踪实际项，再解释为什么接近，例如与目标的距离每次缩小同样倍数。几个计算器显示值只能提示趋势，不能证明所有后续项。下面用“距离不断减半”说明，不要求正式稳定性理论。

<div class="worked-example" markdown="1">

### 完整示范 {#l12-worked}

**Question:** Starting with $x_0=0$, generate four further terms of $x_{n+1}=(x_n+6)/2$ and investigate the limit.

计算链为 $x_1=(0+6)/2=3$、$x_2=(3+6)/2=4.5$、$x_3=(4.5+6)/2=5.25$、$x_4=(5.25+6)/2=5.625$。固定点方程给 $L=6$。而 $6-x_{n+1}=(6-x_n)/2$，正的差距每次减半并趋于零。这一额外论证才确认极限，不能只靠固定点方程。

</div>

<div class="lesson-check" markdown="1">

### 带支架尝试 {#l12-scaffold}

**Question:** For $u_1=2$ and $u_{n+1}=3u_n-1$, find $u_2,u_3,u_4$.

<details markdown="1">
<summary>提示</summary>

这里初始项号为 1，不是 0。

</details>

<details markdown="1">
<summary>解答与核验</summary>

$u_2=5$、$u_3=14$、$u_4=41$。

</details>

</div>

<div class="lesson-check" markdown="1">

### 独立任务 {#l12-independent}

**Question:** For $x_{n+1}=x_n^2$, find the candidate finite limits. Compare the first three new terms from $x_0=1/2$ and from $x_0=2$. Explain why solving the fixed-point equation alone is insufficient.

<details markdown="1">
<summary>提示</summary>

比较 0 与 1 之间的数和大于 1 的数在不断乘方后怎样变化。

</details>

<details markdown="1">
<summary>解答与核验</summary>

$L=L^2$ 给 $L=0,1$。从 $1/2$ 出发得 $1/4,1/16,1/256$，且 $x_n=(1/2)^{2^n}\to0$。从 2 出发得 $4,16,256$，而 $x_n=2^{2^n}$ 无界。候选 1 只有在从 1 开始保持不变（或适当前项使其进入 1）时实现，并非每个初值都趋于 1。

</details>

</div>

### 诊断与修正 {#l12-diagnosis}

不要每一步都重新输入原初值。固定点描述不再改变的值，极限描述指定初值所产生数列的长期行为。

比较[实际迭代与逐渐缩小的差距](#l12-worked)，再判断[新递推](#l12-retry)。

<div class="lesson-check" markdown="1">

### 再尝试 {#l12-retry}

**Question:** Starting with $x_0=2$, consider $x_{n+1}=-x_n$. Find the first four new terms and decide whether a limit exists.

<details markdown="1">
<summary>提示</summary>

比较奇数项与偶数项。

</details>

<details markdown="1">
<summary>解答与核验</summary>

各项为 $-2,2,-2,2$，交替而不趋近一个值，因此无极限；即使 $L=-L$ 有候选 $0$，也不能改变这一结论。

</details>

</div>

## 展开乘方，再估计数值 {#l13}

目标：求展开系数，并用展开式解释近似。先修：[指数](/zh/alevel/as-mathematics/algebra/#l01-indices)与乘括号。

### 数一数乘括号时有多少种选择 {#l13-concept}

$(a+b)^n$ 有 $n$ 个括号。想得到含 $r$ 个 $b$ 的项，就从其中 $r$ 个括号取 $b$，其余取 $a$。不同选法可能得到相同的项；选法数量就是二项式系数：

$$(a+b)^n=\sum_{r=0}^n\binom nr a^{n-r}b^r,\qquad \binom nr=\frac{n!}{r!(n-r)!},\quad0!=1.$$

阶乘（factorial）就是把正整数一直乘到 1。这里 $n$ 是正整数，所以完整展开只有有限项，而且精确成立。

只留下前几项，才变成近似。先找一个输入，让括号等于题目给的数，再代入保留的项。“Hence”要求你展示与前面结果的联系，包括可能需要乘回的系数。完整有限展开可以用来检查省掉的项；不要把截断写成精确等号，也不要套用后面才学的无穷级数规则。

<div class="worked-example" markdown="1">

### 完整示范 {#l13-worked}

**Question:** Expand $(1+2x)^4$. Hence estimate $(1.02)^4$ using terms up to $x^2$, and state the omitted contribution.

四次幂的二项式系数为 $1,4,6,4,1$。这里括号的第二项是 $2x$，每一项都要把其中的 2 一起乘方：

$$\begin{aligned}
(1+2x)^4&=1+4(2x)+6(2x)^2+4(2x)^3+(2x)^4\\
&=1+8x+24x^2+32x^3+16x^4.
\end{aligned}$$

要用它算 $1.02^4$，先让括号对上：$1+2x=1.02$ 给出 $x=0.01$，不是 0.02。保留到平方项：

$$1.02^4\approx1+8(0.01)+24(0.01)^2=1.0824.$$

省略的两项共为 $32(0.01)^3+16(0.01)^4=0.00003216$。它们为正，所以估计偏低。加回去得到完整值 $1.08243216$。这里能给出误差，是因为我们知道完整的有限展开式，而不只是因为 x 很小。

</div>

<div class="lesson-check" markdown="1">

### 带支架尝试 {#l13-scaffold}

**Question:** Find the coefficient of $x^2$ in $(2-3x)^4$.

<details markdown="1">
<summary>提示</summary>

保留 2 的剩余幂，并把 −3 整体平方。

</details>

<details markdown="1">
<summary>解答与核验</summary>

$\binom42 2^2(-3)^2=216$。

</details>

</div>

<div class="lesson-check" markdown="1">

### 独立任务 {#l13-independent}

**Question:** In $(1+kx)^5$, the coefficient of $x^2$ is 90 and $k<0$. Find $k$ and the coefficient of $x^3$. Use the first three terms to estimate $0.97^5$, showing the substitution.

<details markdown="1">
<summary>提示</summary>

用符号条件筛选根，再把 0.97 与括号对应。

</details>

<details markdown="1">
<summary>解答与核验</summary>

$10k^2=90$ 得 $k=-3$；三次项系数为 $10(-3)^3=-270$。令 $x=0.01$，前三项 $1-15x+90x^2$ 给 $0.859$。这是截断近似，不能与 $0.97^5$ 写成精确等号。

</details>

</div>

### 诊断与修正 {#l13-diagnosis}

若系数漏幂，先写所选项的一般式再化简。截断须用近似号；不能不经论证就把首个舍去项当作通用误差保证。

系数出错，回看[展开解释](#l13-concept)并做[系数重试题](#l13-retry)。代入或误差方向出错，回看[完整近似示范](#l13-worked)，再做[新近似题](#l13-retry-approximation)。

<div class="lesson-check" markdown="1">

### 再尝试 {#l13-retry}

**Question:** Find the coefficient of $x^3$ in $(2+x)^5$ and explain the combinatorial factor.

<details markdown="1">
<summary>提示</summary>

选择哪三个括号贡献 x。

</details>

<details markdown="1">
<summary>解答与核验</summary>

$\binom53 2^2=40$；因子 $10$ 计数从五个括号中选三个的方式。

</details>

</div>

<div class="lesson-check" markdown="1">

### 再用一次展开式 {#l13-retry-approximation}

**Question:** Write the terms through $x^3$ in $(1-2x)^4$. Use them to estimate $0.98^4$ and decide whether your estimate is high or low.

<details markdown="1">
<summary>提示</summary>

先选出使括号等于 0.98 的 x，再看没有保留的那一项。

</details>

<details markdown="1">
<summary>解答与检查</summary>

前四项为 $1-8x+24x^2-32x^3$。由 $1-2x=0.98$ 得 $x=0.01$，代入：

$$0.98^4\approx1-0.08+0.0024-0.000032=0.922368.$$

只省略了一项 $16x^4=0.00000016>0$，所以估计值偏低。完整的有限展开会给出 $0.92236816$。

</details>

</div>

## 学完之后 {#next-step}

收起解答，检查自己能否独立完成本课各组的再尝试，并解释方法与适用条件。仍有困难时回看对应示范；完成后继续下一课。

[上一课：积分与近似](/zh/alevel/as-mathematics/integration/) · [课程目录](/zh/alevel/as-mathematics/#learning-route) · [下一课：圆](/zh/alevel/as-mathematics/circles/)

学完这条路线后，做[综合题](/zh/alevel/as-mathematics/#mixed-foundations)。在之后一次学习中，关掉解答完成[回顾题](/zh/alevel/as-mathematics/#later-foundations)。

## 来源与范围 {#sources}

<details class="lesson-notes" markdown="1">
<summary>查看范围与评分材料</summary>

按[当前 9660 官方大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf)组织。配套评分材料用于核对作答证据；本页题目全部另行自拟，不能称为官方原题或官方评分标准。

Specification §3.1 P1.5; MA01 January 2025 Q3 (MS pp8–9), Q6 (pp14–15) and Q9 (pp21–23).

[MA01 2025 年 1 月原卷](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-question-paper.pdf) · [配套 MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-mark-scheme.pdf) · [MA02 2025 年 1 月原卷](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-question-paper.pdf) · [配套 MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-mark-scheme.pdf)

完成标准是能独立解释方法与检查条件，不是看完解答。未经过学生试用，不据此宣称学习效果已验证。

</details>
