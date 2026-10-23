---
layout: subjects
title: "数列与级数"
mathjax: true
grade: as
subject: as-mathematics
lang: zh-CN
translation_of: /alevel/as-mathematics/sequences/
permalink: /zh/alevel/as-mathematics/sequences/
toc_headings: h2, h3
study_page: true
---

[AS 数学学习路线](/zh/alevel/as-mathematics/#learning-route) · P1.5 · OxfordAQA 9660 v5.2

先用纸笔尝试题目，再按需打开提示；完成后用解答核对方法、条件与结果。所有题目均为**自拟题**，没有官方分值。英文题干、公式、数值与英文页一致；中文解释帮助你逐步独立用英文作答。

- [L10 等差数列、Σ 与累计量](#l10)
- [L11 有限与无限等比累积](#l11)
- [L12 递推、初值与候选极限](#l12)
- [L13 二项系数与使用展开式](#l13)

## L10 · 等差数列、Σ 与累计量 {#l10}

目标：区分单项与和，并在累计模型中处理整数条件。先修：L01–L02。

等差数列（arithmetic sequence）的相邻差为常数 $d$，因此 $u_n=a+(n-1)d$，$n=1,2,\ldots$。首尾配对可得

$$S_n=\sum_{r=1}^n u_r=\frac n2[2a+(n-1)d].$$

Σ 表示把指定的各项相加，不是乘以末项的项号。特别地，把 $1+2+\cdots+n$ 倒序相加，每对都是 $n+1$，一共 $n$ 对，故

$$\sum_{r=1}^n r=\frac{n(n+1)}2.$$

通项不一定构成等差：$u_n=n^2+1$ 前三项为 $2,5,10$，相邻差不同。总要检查题目从哪个项号开始。

### 示范与推理 {#l10-worked}

**Question:** A constructed savings plan deposits 20 dollars in month 1 and increases each deposit by 5 dollars. Find the month-6 deposit and total deposited in six months.

此处 $a=20,d=5$，故 $u_6=20+5(5)=45$ 美元，而 $S_6=3[40+5(5)]=195$ 美元。列出 $20,25,30,35,40,45$ 可核对单月与累计问题的区别。

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

### 诊断与修正 {#l10-diagnosis}

若写成 $a+nd$，代 $n=1$ 就无法返回首项。预算边界若求得非整数，须按题目不等式选整数，不能机械四舍五入。

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

## L11 · 有限与无限等比累积 {#l11}

目标：建立和式并排除不收敛的候选公比。先修：L02、L10。

等比数列的通项为 $u_n=ar^{n-1}$。用 $S_n$ 减去 $rS_n$，中间项消去：

$$(1-r)S_n=a-ar^n,\qquad S_n=\frac{a(1-r^n)}{1-r}\quad(r\ne1).$$

当 $r=1$ 时有限和为 $na$。首项非零时，无穷和只有在 $\lvert r\rvert<1$ 才存在，因为这时 $r^n\to0$，故 $S_\infty=a/(1-r)$。负公比会交替符号，乘方要保留括号。用无穷和公式解出候选值后仍须检验其条件。

### 示范与推理 {#l11-worked}

**Question:** For $18,6,2,\ldots$, find the sum of the first four terms and the sum to infinity.

公比为 $1/3$，所以 $S_4=18(1-1/81)/(1-1/3)=80/3$。由于 $\lvert1/3\rvert<1$，无穷和为 $18/(1-1/3)=27$。剩余各项为正，因此前四项和小于无穷和。

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

### 诊断与修正 {#l11-diagnosis}

有限和不要求收敛；计算器给出的合理数值也不能保证无穷和存在。应明确写出排除候选值的理由。

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

## L12 · 递推、初值与候选极限 {#l12}

目标：从指定初值逐项生成，并区分固定点与收敛。先修：L02、L10–L11 与代入。

递推用前一项生成后一项，不是把项号直接代进去。必须标明初始项。若 $x_n\to L$ 且 $f$ 在 $L$ 连续，则 $x_{n+1}=f(x_n)$ 推出 $L=f(L)$，但这只给候选值。还要检查指定初值与实际迭代行为；少量屏幕数值只能提示趋势，不能证明一般极限。本组不要求正式稳定性理论。

### 示范与推理 {#l12-worked}

**Question:** Starting with $x_0=0$, generate four further terms of $x_{n+1}=(x_n+6)/2$ and investigate the limit.

计算链为 $x_1=(0+6)/2=3$、$x_2=(3+6)/2=4.5$、$x_3=(4.5+6)/2=5.25$、$x_4=(5.25+6)/2=5.625$。固定点方程给 $L=6$。而 $6-x_{n+1}=(6-x_n)/2$，正的差距每次减半并趋于零。这一额外论证才确认极限，不能只靠固定点方程。

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

### 诊断与修正 {#l12-diagnosis}

不要每一步都重新输入原初值。固定点描述不再改变的值，极限描述指定初值所产生数列的长期行为。

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

## L13 · 二项系数与使用展开式 {#l13}

目标：求正整数幂展开中的项，并使用前面结果作近似。先修：L01 与乘方。

展开 $(a+b)^n$ 时，从 $n$ 个括号中选出 $r$ 个取 $b$，形成 $\binom nr a^{n-r}b^r$，因此

$$(a+b)^n=\sum_{r=0}^n\binom nr a^{n-r}b^r,\qquad \binom nr=\frac{n!}{r!(n-r)!},\quad0!=1.$$

此处 $n$ 是正整数，完整展开是有限且精确的恒等式；舍去项才形成近似。遇到 hence，应展示如何使用前面的展开，包括变量代入与缩放因子。只直接按乘方键不能表达这个连接。本组不是后续的有理幂无穷展开。

### 示范与推理 {#l13-worked}

**Question:** Expand $(1+2x)^4$. Hence estimate $(1.02)^4$ using terms up to $x^2$, and state the omitted contribution.

展开为 $1+8x+24x^2+32x^3+16x^4$。令 $x=0.01$，前三项给 $1.0824$。舍去的贡献为 $32(0.01)^3+16(0.01)^4=0.00003216$，因此是低估，完整值为 $1.08243216$。这里的误差来自完整有限展开的精确核算。

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

### 诊断与修正 {#l13-diagnosis}

若系数漏幂，先写所选项的一般式再化简。截断须用近似号；不能不经论证就把首个舍去项当作通用误差保证。

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

## 学完之后 {#next-step}

收起解答，检查自己能否独立完成本课各组的再尝试，并解释方法与适用条件。仍有困难时回看对应示范；完成后继续下一课。

[上一课：积分与近似](/zh/alevel/as-mathematics/integration/) · [课程目录](/zh/alevel/as-mathematics/#learning-route) · [下一课：圆](/zh/alevel/as-mathematics/circles/)

## 来源与范围 {#sources}

按[当前 9660 官方大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf)组织。配套评分材料用于核对作答证据；本页题目全部另行自拟，不能称为官方原题或官方评分标准。

Specification §3.1 P1.5; MA01 January 2025 Q3 (MS pp8–9), Q6 (pp14–15) and Q9 (pp21–23).

[MA01 2025 年 1 月原卷](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-question-paper.pdf) · [配套 MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-mark-scheme.pdf) · [MA02 2025 年 1 月原卷](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-question-paper.pdf) · [配套 MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-mark-scheme.pdf)

完成标准是能独立解释方法与检查条件，不是看完解答。未经过学生试用，不据此宣称学习效果已验证。
