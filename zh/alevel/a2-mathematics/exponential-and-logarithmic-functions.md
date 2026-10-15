---
title: 指数函数与对数函数
layout: subjects
mathjax: true
grade: a2
subject: a2-mathematics
lang: zh-CN
translation_of: /alevel/a2-mathematics/exponential-and-logarithmic-functions/
permalink: /zh/alevel/a2-mathematics/exponential-and-logarithmic-functions/
toc_headings: h2
study_page: true
---

[纯数学](/zh/alevel/a2-mathematics/) · P2.5 指数函数与对数函数

建立增长与衰减模型，运用自然对数解方程，并描绘指数函数与对数函数的图像。

- **学习：**先学习[增长与衰减](#exponential-growth-and-decay)，再学习[指数函数](#the-exponential-function)和[自然对数](#natural-logarithms)。
- **作业帮助：**计算前检查变化倍数（multiplier）、时间单位、不等号方向和定义域。
- **复习：**先尝试[练习](#practice)，再打开解答。用[快速参考](#quick-reference)核对方法。

教材：第 4 章第 4.1–4.4 节及复习题（印刷版第 50–57 页）。内容包括指数增长与衰减、指数函数、自然对数和对数函数。

**开始前：**你应当掌握指数运算法则（laws of indices）、一般底数的对数、不等式、[反函数（inverse function）](/zh/alevel/a2-mathematics/functions/)和[图像变换（transformations）](/zh/alevel/a2-mathematics/modulus-and-transformations/)。

本页所有例题和练习均为自拟题，并非官方真题。建议用时仅供参考；题目没有官方分值。

## 指数增长与衰减（exponential growth and decay） {#exponential-growth-and-decay}

如果一个量在**相等的时间间隔内，都乘以同一个倍数**，它就呈指数增长或衰减。设初始量为 $A>0$，每个时间间隔的变化倍数为 $q>0$，经过 $n$ 个时间间隔后，

$$N=Aq^n.$$

- 增加 $p\%$ 时，$q=1+\frac{p}{100}$。
- 减少 $p\%$ 时，$q=1-\frac{p}{100}$，其中 $0<p<100$。
- 增长对应 $q>1$；衰减对应 $0<q<1$；$q=1$ 表示没有变化。

当 $n=0$ 时，$N=A$。每个时间间隔的百分比都以**当时的数量**为基准。每次增加固定数量，得到的是线性模型，不是指数模型。

若已知相隔 $m$ 个时间间隔的两个数量，可用 $q^m=\frac{N_m}{N_0}$ 求变化倍数。时间单位必须一致：若倍数按月计算，时间也要用月表示。

求数量达到某个阈值（threshold）的时间时，先取对数，再解不等式。衰减时 $\ln q<0$，所以除以 $\ln q$ 时必须**改变不等号方向**。若题目要求完整的时间间隔数，应找出满足原严格不等式的第一个整数，不能直接四舍五入。

### 例题 1 — 增长与首次超过阈值的整年 {#example-1--growth-and-the-first-whole-year}

**Question:** A model starts at $2000$ units and increases by $6\%$ each year. Find the first whole year when the quantity exceeds $3000$.

模型为 $N=2000(1.06)^n$，因此

$$2000(1.06)^n>3000\quad\Rightarrow\quad n\ln1.06>\ln1.5,$$

$$n>\frac{\ln1.5}{\ln1.06}=6.9585\ldots.$$

首次超过阈值的整年为 $\boxed{n=7}$。

**检查：**$N_6=2837.04\ldots<3000$，而 $N_7=3007.26\ldots>3000$。这两个相邻年份的数值都符合严格不等式的要求，确认了答案。

### 例题 2 — 衰减与负的对数值 {#example-2--decay-and-a-negative-logarithm}

**Question:** A model starts at $5000$ units and decreases by $15\%$ each year. Find the first whole year when the quantity is below $2000$.

变化倍数为 $0.85$，所以

$$5000(0.85)^n<2000\quad\Rightarrow\quad n\ln0.85<\ln0.4.$$

因为 $\ln0.85<0$，除法后得到

$$n>\frac{\ln0.4}{\ln0.85}=5.6381\ldots.$$

因此 $\boxed{n=6}$。代入检查，得到 $N_5=2218.53\ldots>2000$ 和 $N_6=1885.75\ldots<2000$。

**常见错误：**把 $0.15$ 当作变化倍数。减少 $15\%$ 后，剩余的是当时数量的 $85\%$。

### 检查模型是否合理 {#check-whether-the-model-is-reasonable}

比较相等时间间隔内的比值，不能只看差值。对于数列 $10,20,40,80$，相邻两项的比值都是 $2$，所以 $N=10(2)^n$ 符合这些数据。

实际数据的比值可能只是近似不变。要说明模型的假设：变化倍数保持不变，也没有额外数量加入或移走。即使模型符合短期数据，条件或可用资源改变后，也可能不再适用。

## 指数函数（exponential function） {#the-exponential-function}

数 $e$ 是无理数（irrational number），$e\approx2.71828$。它的一种定义是

$$e=1+\frac1{1!}+\frac1{2!}+\frac1{3!}+\cdots.$$

**指数函数**为 $f(x)=e^x$。

- 定义域（domain）：所有实数 $x$；值域（range）：$y>0$。
- 函数递增，图像经过 $(0,1)$。
- 图像没有 $x$ 轴截距（intercept），水平渐近线（horizontal asymptote）为 $y=0$。
- $e^{a+b}=e^ae^b$，且 $e^{-a}=\frac1{e^a}$。

底数满足 $a>0$、$a\ne1$ 时，函数 $a^x$ 是指数函数。以 $e$ 为底的形式在[求导](/zh/alevel/a2-mathematics/differentiation/)中尤其有用。

### 例题 3 — 描绘变换后的指数函数图像 {#example-3--sketch-a-transformed-exponential-curve}

**Question:** Sketch $y=2-e^{-x}$. State its domain, range, intercepts and asymptote.

从 $e^x$ 开始：关于 $y$ 轴翻折，得到 $e^{-x}$；再关于 $x$ 轴翻折，得到 $-e^{-x}$；最后向上平移 $2$ 个单位。

因为 $e^{-x}>0$，值域为 $\boxed{y<2}$，定义域为所有实数 $x$。函数递增，水平渐近线为 $\boxed{y=2}$。

当 $x=0$ 时，$y=1$，所以 $y$ 轴截距对应点 $(0,1)$。求 $x$ 轴截距时，

$$e^{-x}=2\quad\Rightarrow\quad\boxed{x=-\ln2}.$$

**检查：**随着 $x$ 增大，$e^{-x}$ 趋近于零，所以图像从下方趋近 $2$，但不会达到渐近线。

## 自然对数（natural logarithm） {#natural-logarithms}

以 $e$ 为底的对数称为**自然对数**，记作 $\ln x$。基本关系为

$$\ln a=b\quad\Longleftrightarrow\quad a=e^b,\qquad a>0.$$

特别地，$\ln1=0$、$\ln e=1$，且 $\ln(e^x)=x$ 对实数 $x$ 成立；$e^{\ln x}=x$ 则要求 $x>0$。

教材用 $\log x$ 表示常用对数（common logarithm），底数为 $10$。常用对数和自然对数都能用于解指数方程，但整个计算必须使用同一底数。

### 对数运算法则（laws of logarithms） {#laws-of-logarithms}

对于 $a>0$、$b>0$ 和实数 $k$，

$$\ln(ab)=\ln a+\ln b,$$

$$\ln\left(\frac ab\right)=\ln a-\ln b,\qquad\ln(a^k)=k\ln a.$$

**使用法则前，逐一检查原对数的真数（argument）。**合并后的表达式可能在原式排除的取值处有定义。例如，$\ln(x^2)$ 在 $x\ne0$ 时有定义，但 $2\ln x$ 要求 $x>0$。对于 $x\ne0$，要兼顾正负两种取值，应使用绝对值（modulus）符号：$\ln(x^2)=2\ln\lvert x\rvert$。

不存在 $\ln(a+b)=\ln a+\ln b$ 这样的法则。

### 例题 4 — 合并对数并保留定义域 {#example-4--combine-logarithms-and-retain-the-domain}

**Question:** Express $2\ln(x-1)-\ln(x+2)$ as a single logarithm and state its domain.

原式的真数要求 $x-1>0$ 和 $x+2>0$，合起来得到 $x>1$。

$$\boxed{2\ln(x-1)-\ln(x+2)=\ln\left(\frac{(x-1)^2}{x+2}\right)},\qquad x>1.$$

**检查：**当 $x=2$ 时，两种形式都得到 $-\ln4$。虽然合并后的分式在 $x=0$ 时为正，但原来的 $\ln(x-1)$ 在该处无定义。因此不能扩大定义域。

## 解方程 {#solving-equations}

1. 写出对数的定义域限制。
2. 整理方程，将指数式或对数式单独放在等式一边。
3. 使用对数法则、两边取指数，或令 $u=e^x$，将方程化为二次方程。
4. 把候选解代回原方程检查。换元 $u=e^x$ 时，必须保留 $u>0$ 的条件。

### 例题 5 — 舍去不符合定义域的解 {#example-5--reject-an-invalid-logarithmic-root}

**Question:** Solve $\ln(x-1)+\ln(x+1)=\ln8$.

定义域为 $x>1$。合并对数，得到

$$\ln\big((x-1)(x+1)\big)=\ln8\quad\Rightarrow\quad x^2-1=8.$$

于是 $x=3$ 或 $-3$。只有 $\boxed{x=3}$ 属于原定义域。

**检查：**代入 $3$，左边得到 $\ln2+\ln4=\ln8$。代入 $-3$ 时，原式两个真数都为负，所以它不是实数范围内的解。

### 例题 6 — 以指数式为未知量的二次方程 {#example-6--a-quadratic-in-an-exponential}

**Question:** Solve $e^{2x}-3e^x-4=0$ exactly.

令 $u=e^x>0$。因为 $e^{2x}=(e^x)^2$，

$$u^2-3u-4=0\quad\Rightarrow\quad(u-4)(u+1)=0.$$

舍去 $u=-1$，因为 $e^x>0$。由 $u=4$ 得 $\boxed{x=\ln4}$。

**检查：**$e^x=4$，且 $e^{2x}=16$，所以 $16-12-4=0$。不要把 $e^{2x}$ 与 $2e^x$ 混淆。

例如，方程 $e^{3x-1}=5$ 两边取对数，得到 $3x-1=\ln5$，所以 $x=\frac{1+\ln5}{3}$。

## 对数函数（logarithmic function） {#the-logarithmic-function}

函数 $y=\ln x$ 是 $y=e^x$ 的反函数。它的图像由指数函数图像关于 $y=x$ 翻折得到。

- 定义域：$x>0$；值域：所有实数 $y$。
- 函数递增，图像经过 $(1,0)$。
- 图像没有 $y$ 轴截距，竖直渐近线（vertical asymptote）为 $x=0$。
- 当 $x$ 从正数一侧趋近于零时，$\ln x$ 不断减小，没有下界。

![指数函数与自然对数函数的图像关于虚线 y=x 对称，并标出点 (0,1) 和 (1,0)。](/assets/img/exponential-logarithm-inverses.svg)

### 例题 7 — 对数函数图像的定义域与渐近线 {#example-7--domain-and-asymptote-of-a-logarithmic-curve}

**Question:** Sketch $y=\ln(2x-4)$ and state its domain, range, intercepts and asymptote.

真数必须为正：$2x-4>0$，所以 $\boxed{x>2}$。值域为所有实数 $y$，竖直渐近线为 $\boxed{x=2}$。

当 $y=0$ 时，$2x-4=e^0=1$，得到 $x$ 轴截距对应点 $\boxed{(\frac52,0)}$。图像没有 $y$ 轴截距，因为 $x=0$ 不属于定义域。

函数递增。将 $y=\ln x$ 的图像作单向伸缩，伸缩因子为 $\frac12$，方向平行于 $x$ 轴；再平移 $2$ 个单位，方向为 $x$ 轴正方向。

**检查：**$x=3$ 时，$y=\ln2$。当 $x$ 从右侧趋近 $2$ 时，真数从正数一侧趋近于零，因此 $y$ 不断减小，没有下界。

### 例题 8 — 求反函数及其定义域 {#example-8--find-an-inverse-and-its-domain}

**Question:** Let $f(x)=3-e^{2x}$ for real $x$. Find its range and inverse. Solve $f^{-1}(x)=0$.

因为 $e^{2x}>0$，$f$ 的值域为 $\boxed{y<3}$。函数严格递减，因此存在反函数。

由 $y=3-e^{2x}$，

$$e^{2x}=3-y\quad\Rightarrow\quad x=\frac12\ln(3-y).$$

交换变量，得到

$$\boxed{f^{-1}(x)=\frac12\ln(3-x)},\qquad x<3.$$

反函数的值域为所有实数。令 $f^{-1}(x)=0$，得到 $\ln(3-x)=0$，所以 $\boxed{x=2}$。

**检查：**$f(0)=2$，因此 $f^{-1}(2)=0$。原函数的水平渐近线 $y=3$ 对应反函数的竖直渐近线 $x=3$。

## 两种模型形式的联系 {#connecting-the-models}

因为 $q=e^{\ln q}$，表达式 $Aq^t$ 也可写成 $Ae^{kt}$，其中 $k=\ln q$。这里 $q$ 表示 $t$ 每增加一个单位时的变化倍数。每单位增加 $8\%$ 时，$q=1.08$，$k=\ln1.08$，不能取 $k=0.08$。

指数曲线可以把模型推广到非整数时刻，但要判断这种推广是否符合实际情境。例如，若数量只在每年末改变，实际更新就应按整数年计算。

关于变化率（rate of change）模型、倍增时间（doubling time）和半衰期（half-life），请继续学习[微分方程](/zh/alevel/a2-mathematics/differential-equations/#natural-growth-and-decay)。

## 练习 {#practice}

建议用时约 **30–40 分钟**。中间计算保留计算器的完整精度，最后再取近似值。求首次超过或低于阈值的整年时，也要检查前一年。

### Q1 — 增长与模型比较 {#q1--growth-and-comparing-models}

A model has $N=500(1.08)^n$. Find the first whole year when $N>1000$.

Two further models are $A_n=1200(1.04)^n$ and $B_n=1000(1.07)^n$. Find the first whole year when $B_n>A_n$.

<details markdown="1">
<summary>提示</summary>

比较两个模型时，先除以正的因子 $1000(1.04)^n$，再取对数。

</details>

<details markdown="1">
<summary>解答与检查</summary>

第一个模型给出 $n>\frac{\ln2}{\ln1.08}=9.0064\ldots$，所以 $\boxed{n=10}$。第 $9$ 年，$N=999.50\ldots<1000$；第 $10$ 年，$N=1079.46\ldots>1000$。把 $9.0064\ldots$ 四舍五入为 $9$ 会得到错误的首次年份。

比较两个模型时，

$$\left(\frac{1.07}{1.04}\right)^n>1.2\quad\Rightarrow\quad n>\frac{\ln1.2}{\ln(1.07/1.04)}=6.4112\ldots.$$

因此 $\boxed{n=7}$。比值 $B_n/A_n$ 在第一个检查点小于 $1$，对应 $n=6$；在第二个检查点大于 $1$，对应 $n=7$。

</details>

### Q2 — 衰减与模型假设 {#q2--decay-and-model-assumptions}

A quantity starts at $800$ and decreases by $10\%$ each year. Find the first whole year when it is below $200$. State one assumption and one reason the model may fail later.

<details markdown="1">
<summary>提示</summary>

使用 $800(0.9)^n<200$，除以 $\ln0.9$ 时改变不等号方向。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$n>\frac{\ln0.25}{\ln0.9}=13.1576\ldots\quad\Rightarrow\quad\boxed{n=14}.$$

第 $13$ 年和第 $14$ 年的数量分别为 $203.35\ldots$ 和 $183.01\ldots$，确认了首次低于阈值的年份。

模型假设每年的变化倍数固定为 $0.9$，且没有额外数量加入或移走。若条件改变，或数量降到某个实际下限后不再遵循原规律，模型就可能失效。

</details>

### Q3 — 两个变换后的图像 {#q3--two-transformed-graphs}

State the domain, range, intercepts and asymptote for (a) $y=1-e^{2x}$ and (b) $y=\ln(3-x)$. Describe whether each curve increases or decreases.

<details markdown="1">
<summary>提示</summary>

指数式始终为正；对数式则要解 $3-x>0$。

</details>

<details markdown="1">
<summary>解答与检查</summary>

**(a)** 定义域：所有实数 $x$；值域：$y<1$；两坐标轴截距均对应 $(0,0)$；水平渐近线：$y=1$。函数递减。当输入不断减小时，图像从下方趋近 $1$；此时 $x$ 没有下界。

**(b)** 定义域：$x<3$；值域：所有实数 $y$；$x$ 轴截距对应 $(2,0)$；$y$ 轴截距对应 $(0,\ln3)$；竖直渐近线：$x=3$。函数递减。当 $x$ 从左侧趋近 $3$ 时，$y$ 不断减小，没有下界。

把每个截距对应点代回原方程检查。

</details>

### Q4 — 对数法则与定义域 {#q4--logarithm-laws-and-domains}

Express $3\ln(x+1)-\frac12\ln x$ as a single logarithm. State its domain. Also express $\ln(x^2)$ using a logarithm of $\lvert x\rvert$, and explain why $2\ln x$ is insufficient for all its real inputs.

<details markdown="1">
<summary>提示</summary>

把系数移到真数的指数上，再用商的对数法则。分别检查原式的真数。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$\boxed{\ln\left(\frac{(x+1)^3}{\sqrt x}\right)},\qquad \boxed{x>0}.$$

当 $x=1$ 时，两个表达式都得到 $3\ln2=\ln8$。

对于 $x\ne0$，$\boxed{\ln(x^2)=2\ln\lvert x\rvert}$。当 $x=-2$ 时，原式为 $\ln4$，而 $2\ln x$ 在实数范围内无定义。

</details>

### Q5 — 检查原式中的对数 {#q5--check-the-original-logarithms}

Solve $\ln(x-2)+\ln x=\ln3$. Also show that $2\ln(x+1)-\ln x=0$ has no real solution.

<details markdown="1">
<summary>提示</summary>

第一个方程的定义域为 $x>2$；第二个为 $x>0$。先合并对数，再取指数。

</details>

<details markdown="1">
<summary>解答与检查</summary>

第一个方程给出 $x(x-2)=3$，所以 $(x-3)(x+1)=0$。舍去 $-1$，保留 $\boxed{x=3}$，代入得到 $\ln1+\ln3=\ln3$。

第二个方程给出 $\frac{(x+1)^2}{x}=1$，所以 $x^2+x+1=0$。判别式（discriminant）为 $1-4=-3<0$，因此没有实数解。此外，当 $x>0$ 时，这个分式等于 $x+2+\frac1x\ge4$，其对数不可能为零。

</details>

### Q6 — 指数方程 {#q6--exponential-equations}

Solve (a) $e^{2x}-5e^x+6=0$ and (b) $e^{2x-1}=7$ exactly.

<details markdown="1">
<summary>提示</summary>

(a) 令 $u=e^x>0$。(b) 对等式两边取自然对数。

</details>

<details markdown="1">
<summary>解答与检查</summary>

**(a)** $(u-2)(u-3)=0$，两个正值都符合要求。因此 $\boxed{x=\ln2,\ln3}$。把 $e^x=2$ 或 $3$ 代回原二次方程，结果均为零。

**(b)** $2x-1=\ln7$，所以 $\boxed{x=\frac{1+\ln7}{2}}$。此时指数为 $\ln7$，原指数式的值为 $7$。

</details>

### Q7 — 反函数与复合函数（composite function） {#q7--inverse-and-a-composite-function}

Let $f(x)=\ln(2x-1)$ for $x>\frac12$ and $g(x)=e^x+1$ for real $x$. Find $f^{-1}(x)$, its domain and range. Find $f(g(x))$ and solve $f(g(x))=\ln5$ exactly.

<details markdown="1">
<summary>提示</summary>

求反函数时，先写成 $e^y=2x-1$。构造复合函数时，把整个 $g(x)$ 代入 $f$。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$\boxed{f^{-1}(x)=\frac{e^x+1}{2}}.$$

定义域为所有实数 $x$，值域为 $y>\frac12$。检查式 $f(f^{-1}(x))=\ln(e^x)=x$ 对每个实数 $x$ 都成立。

$$\boxed{f(g(x))=\ln(2e^x+1)}$$

对所有实数 $x$ 都有定义，因为 $2e^x+1>0$，且 $g(x)>1$ 属于 $f$ 的定义域。

由 $2e^x+1=5$ 得 $e^x=2$，所以 $\boxed{x=\ln2}$。代入得到 $\ln(2(2)+1)=\ln5$。

</details>

## 快速参考 {#quick-reference}

| 任务 | 方法 | 检查 |
|---|---|---|
| 百分比增长或衰减 | $Aq^n$，其中 $q=1\pm\frac{p}{100}$ | 每次以当时的数量为基准乘以变化倍数 |
| 求达到阈值的时间 | 取对数并解不等式 | 除以负的对数值时改变不等号方向 |
| 首个完整时间间隔 | 找出满足不等式的第一个整数 | 检查该时间间隔及前一个 |
| 自然对数 | $\ln a=b$ 表示 $a=e^b$ | 真数必须为正 |
| 合并对数 | 积、商和幂的对数法则 | 保留原定义域 |
| 以 $e^x$ 为未知量的二次方程 | 令 $u=e^x$ | 舍去 $u\le0$ |
| 描绘图像 | 写出定义域、值域、截距和渐近线 | 检查图像从渐近线的哪一侧趋近 |
| 求反函数 | 整理方程，再交换变量 | 交换原函数的定义域和值域 |

**如果答案看起来不对：**检查百分比对应的倍数、时间单位、严格不等式、真数是否为正，以及 $e^{2x}$ 与 $2e^x$ 的区别。

**你应当能够：**建立变化倍数不变的模型，求达到阈值的时间，在正确的定义域内使用对数法则，并描绘或求出指数函数与对数函数的反函数。

**学习路径：**[上一节：三角函数与公式](/zh/alevel/a2-mathematics/trigonometric-functions-and-formulae/) · [下一节：求导](/zh/alevel/a2-mathematics/differentiation/) · [返回纯数学主题目录](/zh/alevel/a2-mathematics/)。
