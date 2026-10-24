---
title: 指数函数与对数函数
layout: subjects
mathjax: true
grade: a2
subject: a2-mathematics
lang: zh-CN
translation_of: /alevel/a2-mathematics/exponential-and-logarithmic-functions/
permalink: /zh/alevel/a2-mathematics/exponential-and-logarithmic-functions/
toc_headings: h2, h3
reading_layout: true
study_page: true
---

[纯数学](/zh/alevel/a2-mathematics/) · P2.5 指数函数与对数函数
{: .lesson-meta}

<div class="lesson-lead" markdown="1">

每年增加同样的百分比，意思是每年把当时的数量乘以同一个倍数。反过来想“要乘多少次才达到这个数”，就需要对数。本课把这两种想法连到图像、方程和模型，并检查哪些输入和答案有意义。

</div>

1. [选择增长或衰减模型](#exponential-growth-and-decay)，说明时间单位并检查阈值。
2. 把[指数函数](#the-exponential-function)与[自然对数](#natural-logarithms)连接起来，再[解方程](#solving-equations)。
3. [描绘对数图像并求反函数](#the-logarithmic-function)，然后做[练习](#practice)，稍后返回[回顾任务](#later-review)。
{: .lesson-routes}

<div class="lesson-notes" markdown="1">

**开始前：**按需回补[指数法则](/zh/alevel/as-mathematics/algebra/#l01)、[二次式分解与不等式](/zh/alevel/as-mathematics/algebra/#l02)、[一般底数的对数与固定倍数变化](/zh/alevel/as-mathematics/exponentials-logarithms/#l17)、[反函数](/zh/alevel/a2-mathematics/functions/#inverse-functions)或[图像变换](/zh/alevel/a2-mathematics/modulus-and-transformations/)。自然对数和 $e$ 的作用在本课介绍，不要求先会求导。

所有例题、任务和数据均为自拟，没有官方分值。提示与解答分别展开，并记录使用的帮助。课后可查[来源与范围](#lesson-sources)。

</div>

## 指数增长与衰减（exponential growth and decay） {#exponential-growth-and-decay}

先想连续几次乘法：每次都把现有数量加倍，就得到原来的 2 倍、4 倍、8 倍。每次减少同样的百分比，也是在重复乘同一个倍数。

如果一个量在**相等的时间间隔内，都乘以同一个倍数**，它就呈指数增长或衰减。用 $A>0$ 表示起初的数量，用 $q>0$ 表示每次乘的倍数。经过 $n$ 个时间间隔，也就是乘了这么多次后，

$$N=Aq^n.$$

- 增加 $p\%$ 时，$q=1+\frac{p}{100}$。
- 减少 $p\%$ 时，$q=1-\frac{p}{100}$，其中 $0<p<100$。
- 增长对应 $q>1$；衰减对应 $0<q<1$；$q=1$ 表示没有变化。

当 $n=0$ 时，$N=A$。每个时间间隔的百分比都以**当时的数量**为基准。每次增加固定数量，得到的是线性模型，不是指数模型。

若已知相隔 $m$ 个时间间隔的两个数量，可用 $q^m=\frac{N_m}{N_0}$ 求变化倍数。时间单位必须一致：若倍数按月计算，时间也要用月表示。

怎样反过来求乘了多少次？对数问的就是“指数是多少”。这里 $\ln$ 用 $e$（约为 $2.71828$）作底数，也就是那个用来乘方的固定数。它遵循 AS 的一般对数法则，能把指数移到前面来计算；[自然对数](#natural-logarithms)一节会进一步解释为什么。

题目常问什么时候第一次超过或低于一个指定数量，这个边界叫阈值（threshold）。未知时间在指数上，取对数就能把它移到前面，变成普通不等式。衰减时 $\ln q<0$，所以除以 $\ln q$ 时必须**改变不等号方向**。若问第几个整年，就找第一个真正满足原不等式的整数；超过不包括恰好等于，不能直接四舍五入。

<section class="worked-example" markdown="1">

### 例题 1 — 增长与首次超过阈值的整年 {#example-1--growth-and-the-first-whole-year}

**Question:** A model starts at $2000$ units and increases by $6\%$ each year. Find the first whole year when the quantity exceeds $3000$.

每年增加 6%，就是保留当年的 100% 再加 6%，因此每年乘 1.06。模型为 $N=2000(1.06)^n$。题目要求“超过”，所以用大于号。先两边除以 2000，剩下的比较是 1.06 的多少次方大于 1.5；再取对数把次数移到前面，因此

$$2000(1.06)^n>3000\quad\Rightarrow\quad n\ln1.06>\ln1.5,$$

$$n>\frac{\ln1.5}{\ln1.06}=6.9585\ldots.$$

时间必须大于刚算出的数，而 7 是第一个满足要求的整数，所以首次超过的整年为 $\boxed{n=7}$。

**检查：**$N_6=2837.04\ldots<3000$，而 $N_7=3007.26\ldots>3000$。这两个相邻年份的数值都符合严格不等式的要求，确认了答案。

</section>

<section class="worked-example" markdown="1">

### 例题 2 — 衰减与负的对数值 {#example-2--decay-and-a-negative-logarithm}

**Question:** A model starts at $5000$ units and decreases by $15\%$ each year. Find the first whole year when the quantity is below $2000$.

减少 15% 就是保留 85%，所以每年乘的倍数为 $0.85$。先写“低于 2000”的不等式，再除以正的初始量、两边取对数，所以

$$5000(0.85)^n<2000\quad\Rightarrow\quad n\ln0.85<\ln0.4.$$

为什么这里的对数为负？底数大于 1，要乘方得到小于 1 的数，就要用负指数。因为 $\ln0.85<0$，两边除以它时必须反向比较，得到

$$n>\frac{\ln0.4}{\ln0.85}=5.6381\ldots.$$

因此 $\boxed{n=6}$。代入检查，得到 $N_5=2218.53\ldots>2000$ 和 $N_6=1885.75\ldots<2000$。

**常见错误：**把 $0.15$ 当作变化倍数。减少 $15\%$ 后，剩余的是当时数量的 $85\%$。

</section>

<section class="lesson-check" markdown="1">

### 暂停，补完一步 {#check-threshold}

<!-- task:check-threshold -->

A model is $N_n=500(0.8)^n$. From $n\ln0.8<\ln0.4$, complete the inequality for $n$ and find the first whole $n$ for which $N_n<200$. Check the neighbouring integers.

<!-- /task:check-threshold -->

<details markdown="1">
<summary>提示</summary>

先判断除数符号；严格阈值题不能四舍五入到最近的整数。

</details>

<details markdown="1">
<summary>解答与检查</summary>

因为 $\ln0.8<0$，

$$n>\frac{\ln0.4}{\ln0.8}=4.1062\ldots.$$

首次满足的整数为 $n=5$。$n=4$ 时数量为 $204.8$，$n=5$ 时为 $163.84$，同时检查了不等号方向和首个满足条件的整数。

</details>

</section>

### 检查模型是否合理 {#check-whether-the-model-is-reasonable}

比较相等时间间隔内的比值，不能只看差值。对于数列 $10,20,40,80$，相邻两项的比值都是 $2$，所以 $N=10(2)^n$ 符合这些数据。

实际数据的比值可能只是近似不变。要说明模型的假设：变化倍数保持不变，也没有额外数量加入或移走。即使模型符合短期数据，条件或可用资源改变后，也可能不再适用。

## 指数函数（exponential function） {#the-exponential-function}

前面每年乘的倍数可以是 1.06、0.85 等。现在选择一个数学中常用的固定底数，记为 $e$。它是无理数（irrational number），$e\approx2.71828$，小数既不终止也不循环。它的一种定义是

$$e=1+\frac1{1!}+\frac1{2!}+\frac1{3!}+\cdots.$$

上式中的阶乘表示从 1 连乘到该整数，各项相加给出这个固定数。用它作底数，**指数函数**为 $f(x)=e^x$：输入是指数，输出是乘方的结果。

- 可以输入的数叫定义域（domain）：这里是所有实数 $x$；能够输出的数叫值域（range）：这里是 $y>0$，因为正数的实数次幂始终为正。
- 函数递增，图像经过 $(0,1)$。
- 图像不碰到 $x$ 轴，所以没有该轴截距（intercept）；向左延伸时高度越来越接近零，但一直为正，因此水平渐近线（horizontal asymptote）为 $y=0$。
- $e^{a+b}=e^ae^b$，且 $e^{-a}=\frac1{e^a}$。

底数满足 $a>0$、$a\ne1$ 时，函数 $a^x$ 是指数函数。以 $e$ 为底的形式在[求导](/zh/alevel/a2-mathematics/differentiation/)中尤其有用。

<section class="worked-example" markdown="1">

### 例题 3 — 描绘变换后的指数函数图像 {#example-3--sketch-a-transformed-exponential-curve}

**Question:** Sketch $y=2-e^{-x}$. State its domain, range, intercepts and asymptote.

从 $e^x$ 开始：关于 $y$ 轴翻折，得到 $e^{-x}$；再关于 $x$ 轴翻折，得到 $-e^{-x}$；最后向上平移 $2$ 个单位。

因为 $e^{-x}>0$，值域为 $\boxed{y<2}$，定义域为所有实数 $x$。函数递增，水平渐近线为 $\boxed{y=2}$。

当 $x=0$ 时，$y=1$，所以 $y$ 轴截距对应点 $(0,1)$。求 $x$ 轴截距时，

$$e^{-x}=2\quad\Rightarrow\quad\boxed{x=-\ln2}.$$

**检查：**随着 $x$ 增大，$e^{-x}$ 趋近于零，所以图像从下方趋近 $2$，但不会达到渐近线。

</section>

## 自然对数（natural logarithm） {#natural-logarithms}

对数是在反过来问指数。例如，2 的几次方是 8？答案是 3。现在改用 $e$ 作底数，问题仍是“几次方得到输入的数”；这种对数叫**自然对数**，记作 $\ln x$。下面等号两边是同一个事实的两种写法：

$$\ln a=b\quad\Longleftrightarrow\quad a=e^b,\qquad a>0.$$

特别地，$\ln1=0$，因为任何非零数的零次幂都是 1；$\ln e=1$，因为一次幂就是底数本身。先乘方再问指数，会回到原指数，所以 $\ln(e^x)=x$ 对实数 $x$ 成立；反过来先问指数再乘方，$e^{\ln x}=x$ 则要求 $x>0$。这个限制来自正数的幂不可能给出零或负数。

教材用 $\log x$ 表示常用对数（common logarithm），底数为 $10$。常用对数和自然对数都能用于解指数方程，但整个计算必须使用同一底数。

### 对数运算法则（laws of logarithms） {#laws-of-logarithms}

这些法则来自指数法则：两个幂相乘时指数相加，所以乘积的对数等于两个对数的和；相除对应相减；一个幂再乘方对应指数相乘。对于 $a>0$、$b>0$ 和实数 $k$，

$$\ln(ab)=\ln a+\ln b,$$

$$\ln\left(\frac ab\right)=\ln a-\ln b,\qquad\ln(a^k)=k\ln a.$$

**先检查每个对数要处理的整个数是否为正。**这个数叫真数（argument），例如对数括号里的整个算式。合并后的表达式可能在原式排除的取值处有定义。例如，$\ln(x^2)$ 在 $x\ne0$ 时有定义，但 $2\ln x$ 要求 $x>0$。对于 $x\ne0$，要兼顾正负两种取值，应使用绝对值（modulus）符号：$\ln(x^2)=2\ln\lvert x\rvert$。

不存在 $\ln(a+b)=\ln a+\ln b$ 这样的法则。

<section class="worked-example" markdown="1">

### 例题 4 — 合并对数并保留定义域 {#example-4--combine-logarithms-and-retain-the-domain}

**Question:** Express $2\ln(x-1)-\ln(x+2)$ as a single logarithm and state its domain.

先问原式能否计算：两个对数各自要求 $x-1>0$ 和 $x+2>0$，同时满足就要 $x>1$。再看怎样合成一个对数：前面的 2 按幂法则移成括号的平方；两个对数相减，按商法则变成两个真数相除。这样得到

$$\boxed{2\ln(x-1)-\ln(x+2)=\ln\left(\frac{(x-1)^2}{x+2}\right)},\qquad x>1.$$

**检查：**当 $x=2$ 时，两种形式都得到 $-\ln4$。虽然合并后的分式在 $x=0$ 时为正，但原来的 $\ln(x-1)$ 在该处无定义。因此不能扩大定义域。

</section>

## 解方程 {#solving-equations}

1. 先检查每个对数的输入必须满足什么条件，也就是原式的定义域限制。
2. 若未知数在指数上，先把乘方的式子单独放一边，再取对数求指数；若一边是一个对数，就改写为乘方关系。
3. 若既有同一个指数式又有它的平方，可以给它一个短名字，例如令 $u=e^x$，这样就能看成二次方程。
4. 把求出的每个候选值代回原方程检查。换元 $u=e^x$ 时，必须保留 $u>0$ 的条件，因为指数式不可能是零或负数。

<section class="worked-example" markdown="1">

### 例题 5 — 舍去不符合定义域的解 {#example-5--reject-an-invalid-logarithmic-root}

**Question:** Solve $\ln(x-1)+\ln(x+1)=\ln8$.

两个对数的输入都要为正，合起来得到定义域 $x>1$。左边是两个对数相加，先用乘积法则合成一个；同底数的对数相等，说明它们所问的是同一个指数，原来的正输入也就相等。于是得到

$$\ln\big((x-1)(x+1)\big)=\ln8\quad\Rightarrow\quad x^2-1=8.$$

于是 $x=3$ 或 $-3$。只有 $\boxed{x=3}$ 属于原定义域。

**检查：**代入 $3$，左边得到 $\ln2+\ln4=\ln8$。代入 $-3$ 时，原式两个真数都为负，所以它不是实数范围内的解。

</section>

<section class="worked-example" markdown="1">

### 例题 6 — 以指数式为未知量的二次方程 {#example-6--a-quadratic-in-an-exponential}

**Question:** Solve $e^{2x}-3e^x-4=0$ exactly.

这道题没有一个可以直接单独取对数的指数式，但第一项正好是第二项中指数式的平方。给反复出现的部分一个短名字，令 $u=e^x>0$。因为 $e^{2x}=(e^x)^2$，原方程就变成普通二次方程：

$$u^2-3u-4=0\quad\Rightarrow\quad(u-4)(u+1)=0.$$

舍去 $u=-1$，因为 $e^x>0$。由 $u=4$ 得 $\boxed{x=\ln4}$。

**检查：**$e^x=4$，且 $e^{2x}=16$，所以 $16-12-4=0$。不要把 $e^{2x}$ 与 $2e^x$ 混淆。

例如，方程 $e^{3x-1}=5$ 两边取对数，得到 $3x-1=\ln5$，所以 $x=\frac{1+\ln5}{3}$。

</section>

## 对数函数（logarithmic function） {#the-logarithmic-function}

函数 $y=\ln x$ 把乘方得到的数送回原指数，所以它是 $y=e^x$ 的反函数。图像上的横、纵坐标因此交换：指数图上的 (0,1) 对应对数图上的 (1,0)。这正是关于 $y=x$ 翻折的效果。

- 定义域：$x>0$；值域：所有实数 $y$。
- 函数递增，图像经过 $(1,0)$。
- 图像没有 $y$ 轴截距，竖直渐近线（vertical asymptote）为 $x=0$。
- 当 $x$ 从正数一侧趋近于零时，$\ln x$ 不断减小，没有下界。

![指数函数与自然对数函数的图像关于虚线 y=x 对称，并标出点 (0,1) 和 (1,0)。](/assets/img/exponential-logarithm-inverses.svg)

<section class="worked-example" markdown="1">

### 例题 7 — 对数函数图像的定义域与渐近线 {#example-7--domain-and-asymptote-of-a-logarithmic-curve}

**Question:** Sketch $y=\ln(2x-4)$ and state its domain, range, intercepts and asymptote.

先看整个对数输入，它必须为正：$2x-4>0$，所以 $\boxed{x>2}$。这个输入可以取遍所有正数，因此输出能取所有实数 $y$。当横坐标从右边接近 2 时，输入接近零，对数就不断减小，故竖直渐近线为 $\boxed{x=2}$。

当 $y=0$ 时，$2x-4=e^0=1$，得到 $x$ 轴截距对应点 $\boxed{(\frac52,0)}$。图像没有 $y$ 轴截距，因为 $x=0$ 不属于定义域。

函数递增。从 $y=\ln x$ 的图像出发，把每个横坐标乘以 $\frac12$，也就是沿 $x$ 轴压缩；再把每个横坐标加 $2$，即沿 $x$ 轴向右移动。纵坐标不变。

**检查：**$x=3$ 时，$y=\ln2$。当 $x$ 从右侧趋近 $2$ 时，真数从正数一侧趋近于零，因此 $y$ 不断减小，没有下界。

</section>

<section class="worked-example" markdown="1">

### 例题 8 — 求反函数及其定义域 {#example-8--find-an-inverse-and-its-domain}

**Question:** Let $f(x)=3-e^{2x}$ for real $x$. Find its range and inverse. Solve $f^{-1}(x)=0$.

因为 $e^{2x}>0$，$f$ 的值域为 $\boxed{y<3}$。函数严格递减，每个输出只对应一个输入，因此能反过来求输入，也就是存在反函数。

要反过来求输入，先从 $y=3-e^{2x}$ 中把指数式单独放一边，再取对数求出指数，最后除以 2：

$$e^{2x}=3-y\quad\Rightarrow\quad x=\frac12\ln(3-y).$$

交换变量，得到

$$\boxed{f^{-1}(x)=\frac12\ln(3-x)},\qquad x<3.$$

反函数的值域为所有实数。令 $f^{-1}(x)=0$，得到 $\ln(3-x)=0$，所以 $\boxed{x=2}$。

**检查：**$f(0)=2$，因此 $f^{-1}(2)=0$。原函数的水平渐近线 $y=3$ 对应反函数的竖直渐近线 $x=3$。

</section>

## 两种模型形式的联系 {#connecting-the-models}

因为 $q=e^{\ln q}$，表达式 $Aq^t$ 也可写成 $Ae^{kt}$，其中 $k=\ln q$。这里 $q$ 表示 $t$ 每增加一个单位时的变化倍数。每单位增加 $8\%$ 时，$q=1.08$，$k=\ln1.08$，不能取 $k=0.08$。

指数曲线可以把模型推广到非整数时刻，但要判断这种推广是否符合实际情境。例如，若数量只在每年末改变，实际更新就应按整数年计算。

关于变化率（rate of change）模型、倍增时间（doubling time）和半衰期（half-life），请继续学习[微分方程](/zh/alevel/a2-mathematics/differential-equations/#natural-growth-and-decay)。

## 练习 {#practice}

建议用时约 **30–40 分钟**。中间计算保留计算器的完整精度，最后再取近似值。求首次超过或低于阈值的整年时，也要检查前一年。

<section class="lesson-check" markdown="1">

### 题目 1 {#q1--growth-and-comparing-models}

<!-- task:q1--growth-and-comparing-models -->

A model has $N=500(1.08)^n$. Find the first whole year when $N>1000$.

Two further models are $A_n=1200(1.04)^n$ and $B_n=1000(1.07)^n$. Find the first whole year when $B_n>A_n$.

<!-- /task:q1--growth-and-comparing-models -->

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

</section>

<section class="lesson-check" markdown="1">

### 题目 2 {#q2--decay-and-model-assumptions}

<!-- task:q2--decay-and-model-assumptions -->

A quantity starts at $800$ and decreases by $10\%$ each year. Find the first whole year when it is below $200$. State one assumption and one reason the model may fail later.

<!-- /task:q2--decay-and-model-assumptions -->

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

</section>

<section class="lesson-check" markdown="1">

### 题目 3 {#q3--two-transformed-graphs}

<!-- task:q3--two-transformed-graphs -->

Sketch (a) $y=1-e^{2x}$ and (b) $y=\ln(3-x)$, labelling intercepts and asymptotes. State the domain and range and describe whether each curve increases or decreases.

<!-- /task:q3--two-transformed-graphs -->

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

</section>

<section class="lesson-check" markdown="1">

### 题目 4 {#q4--logarithm-laws-and-domains}

<!-- task:q4--logarithm-laws-and-domains -->

Express $3\ln(x+1)-\frac12\ln x$ as a single logarithm. State its domain. Also express $\ln(x^2)$ using a logarithm of $\lvert x\rvert$, and explain why $2\ln x$ is insufficient for all its real inputs.

<!-- /task:q4--logarithm-laws-and-domains -->

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

</section>

<section class="lesson-check" markdown="1">

### 题目 5 {#q5--check-the-original-logarithms}

<!-- task:q5--check-the-original-logarithms -->

Solve $\ln(x-2)+\ln x=\ln3$. Also show that $2\ln(x+1)-\ln x=0$ has no real solution.

<!-- /task:q5--check-the-original-logarithms -->

<details markdown="1">
<summary>提示</summary>

第一个方程的定义域为 $x>2$；第二个为 $x>0$。先合并对数，再取指数。

</details>

<details markdown="1">
<summary>解答与检查</summary>

第一个方程给出 $x(x-2)=3$，所以 $(x-3)(x+1)=0$。舍去 $-1$，保留 $\boxed{x=3}$，代入得到 $\ln1+\ln3=\ln3$。

第二个方程给出 $\frac{(x+1)^2}{x}=1$，所以 $x^2+x+1=0$。判别式（discriminant）为 $1-4=-3<0$，因此没有实数解。此外，当 $x>0$ 时，这个分式等于 $x+2+\frac1x\ge4$，其对数不可能为零。

</details>

</section>

<section class="lesson-check" markdown="1">

### 题目 6 {#q6--exponential-equations}

<!-- task:q6--exponential-equations -->

Solve (a) $e^{2x}-5e^x+6=0$ and (b) $e^{2x-1}=7$ exactly.

<!-- /task:q6--exponential-equations -->

<details markdown="1">
<summary>提示</summary>

(a) 令 $u=e^x>0$。(b) 对等式两边取自然对数。

</details>

<details markdown="1">
<summary>解答与检查</summary>

**(a)** $(u-2)(u-3)=0$，两个正值都符合要求。因此 $\boxed{x=\ln2,\ln3}$。把 $e^x=2$ 或 $3$ 代回原二次方程，结果均为零。

**(b)** $2x-1=\ln7$，所以 $\boxed{x=\frac{1+\ln7}{2}}$。此时指数为 $\ln7$，原指数式的值为 $7$。

</details>

</section>

<section class="lesson-check" markdown="1">

### 题目 7 {#q7--inverse-and-a-composite-function}

<!-- task:q7--inverse-and-a-composite-function -->

Let $f(x)=\ln(2x-1)$ for $x>\frac12$ and $g(x)=e^x+1$ for real $x$. Find $f^{-1}(x)$, its domain and range. Find $f(g(x))$ and solve $f(g(x))=\ln5$ exactly. Describe how the graphs of $f$ and $f^{-1}$ are related.

<!-- /task:q7--inverse-and-a-composite-function -->

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

两个图像关于 $y=x$ 对称：例如，$f$ 上的 $(1,0)$ 对应反函数上的 $(0,1)$。

</details>

</section>

<section class="lesson-check" markdown="1">

### 题目 8 {#q8}

<!-- task:q8 -->

The following data are constructed, not measured.

| Time $t$ (months) | Quantity $N$ |
| --- | --- |
| 0 | 240 |
| 2 | 135 |
| 4 | 75.9375 |

Suggest a model $N(t)$ supported by these values and justify your choice. Find the first whole month with $N<100$. Write the same model as $Ae^{kt}$ and state one limitation of extending it beyond the data.

<!-- /task:q8 -->

<details markdown="1">
<summary>提示</summary>

比较相等的两个月间隔；两个月的变化倍数不能直接当作每月倍数。

</details>

<details markdown="1">
<summary>解答与检查</summary>

两个两月比值都为 $0.5625$，支持固定倍数模型。正的每月倍数为 $q=\sqrt{0.5625}=0.75$，所以 $N(t)=240(0.75)^t$。

$$t>\frac{\ln(100/240)}{\ln0.75}=3.04318\ldots.$$

首次满足的整月为 $4$：第 $3$、$4$ 月分别为 $101.25$ 和 $75.9375$。另一形式中，$A=240$，$k=\ln0.75$，单位为每月。拟合三个值不能证明以后倍数保持不变，条件改变可能使预测失效。非整数时刻还需要合理的连续解释。

</details>

</section>

## 修复后再尝试 {#repair}

找到最早判断失效的位置，回看对应讲解，收起答案后做新题。只得到正确数值，却缺定义域或阈值检查，仍不是完整证据。

| 作答中的错误 | 回补位置 | 新尝试 |
| --- | --- | --- |
| 题目 1–2、8 的倍数、时间单位、不等号或首个整时刻错误 | [增长/衰减](#exponential-growth-and-decay)、[负的对数](#example-2--decay-and-a-negative-logarithm)、[模型转换](#connecting-the-models) | [重试 A](#retry-model) |
| 题目 4 合并对数后扩大定义域 | [原真数](#example-4--combine-logarithms-and-retain-the-domain) | [重试 B](#retry-laws) |
| 题目 5–6 接受不合法候选值，或把指数看成系数 | [对数根](#example-5--reject-an-invalid-logarithmic-root)、[指数换元](#example-6--a-quadratic-in-an-exponential) | [重试 C](#retry-equations) |
| 题目 3、7 的渐近线侧别、反函数定义域或复合错误 | [对数图像](#example-7--domain-and-asymptote-of-a-logarithmic-curve)、[反函数](#example-8--find-an-inverse-and-its-domain)、[题目 7](#q7--inverse-and-a-composite-function) | [重试 D](#retry-graphs) |

<section class="lesson-check" markdown="1">

### 重试 A {#retry-model}

<!-- task:retry-model -->

A constant-factor model has $N_0=100$ and $N_2=81$, with time in years. Find the positive annual factor, an expression for $N_n$ and the first whole year with $N_n<81$. State the corresponding $k$ if $N=100e^{kt}$.

<!-- /task:retry-model -->

<details markdown="1">
<summary>提示</summary>

两年对应每年倍数的两次作用；等于阈值不属于低于。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$q^2=0.81$ 给出 $q=0.9$，所以 $N_n=100(0.9)^n$。严格不等式要求 $n>2$，因此首个整年为 $3$；$N_2=81$，$N_3=72.9$。这里 $k=\ln0.9$，单位为每年，不能用 $-0.1$ 代替。

</details>

</section>

<section class="lesson-check" markdown="1">

### 重试 B {#retry-laws}

<!-- task:retry-laws -->

Express $2\ln(x-2)-\ln x$ as one logarithm, retaining the original domain. Is $x=1$ allowed? Explain.

<!-- /task:retry-laws -->

<details markdown="1">
<summary>提示</summary>

先逐个检查原来两个对数括号里的数是否为正，再使用幂和商的对数法则。

</details>

<details markdown="1">
<summary>解答与检查</summary>

原式要求 $x-2>0$ 和 $x>0$，所以 $x>2$。

$$2\ln(x-2)-\ln x=\ln\left(\frac{(x-2)^2}{x}\right),\qquad x>2.$$

$x=1$ 时合并后的真数虽为正，原来的第一个对数却无定义，因此不是允许的输入。

</details>

</section>

<section class="lesson-check" markdown="1">

### 重试 C {#retry-equations}

<!-- task:retry-equations -->

Solve (a) $\ln(x-3)+\ln(x+1)=\ln5$ and (b) $e^{2x}+e^x-6=0$ exactly. Explain every rejected candidate.

<!-- /task:retry-equations -->

<details markdown="1">
<summary>提示</summary>

(a) 先写出原来两个对数各自允许的输入；(b) 给指数式换短名字时，记住这个新未知数只能为正。

</details>

<details markdown="1">
<summary>解答与检查</summary>

(a) 定义域为 $x>3$。由 $(x-3)(x+1)=5$ 得 $(x-4)(x+2)=0$。保留 $x=4$，舍去 $-2$；保留解对应的真数为 $1$ 和 $5$。

(b) 令 $u=e^x>0$。由 $(u+3)(u-2)=0$，舍去 $u=-3$，保留 $u=2$，所以 $x=\ln2$。回代检查为 $4+2-6=0$。

</details>

</section>

<section class="lesson-check" markdown="1">

### 重试 D {#retry-graphs}

<!-- task:retry-graphs -->

Let $f(x)=2+e^{-x}$ for real $x$. Sketch $f$, then find and sketch $f^{-1}$. State both domains, ranges, asymptotes and the intercepts that show their reflection relationship. If $g(x)=\ln x$, find $f(g(x))$ and its domain.

<!-- /task:retry-graphs -->

<details markdown="1">
<summary>提示</summary>

先利用 $e^{-x}>0$；整理关系再交换变量，反函数的输入必须属于原值域。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$f$ 递减，经过 $(0,3)$；随 $x$ 增大从上方趋近 $y=2$，没有 $x$ 轴截距。定义域为全体实数，值域为 $y>2$。

$$f^{-1}(x)=-\ln(x-2),\qquad x>2.$$

反函数的值域为全体实数，递减且经过 $(3,0)$，竖直渐近线为 $x=2$，从右侧趋近。接近此线时输出趋向正无穷；输入 $x$ 无界增大时输出趋向负无穷。它没有 $y$ 轴截距。两个图像关于 $y=x$ 对称，截距与渐近线相互交换。复合函数为 $f(g(x))=2+e^{-\ln x}=2+1/x$，必须保留 $g$ 的条件 $x>0$。化简后的分式在负 $x$ 处有定义，但原复合函数没有。

</details>

</section>

## 稍后返回 {#review}

学完另一主题后，收起所有帮助返回这里。根据关系本身选方法，记录检查过的定义域或边界。

<section class="lesson-check" markdown="1">

### 回顾任务 A {#later-review}

<!-- task:later-review -->

Find the real intersection of $y=\ln(5-e^x)$ and $y=x$. State the domain of the logarithmic expression and explain why there is exactly one intersection.

<!-- /task:later-review -->

<details markdown="1">
<summary>提示</summary>

先确定哪些输入能取对数，再把对数关系改写成乘方关系。要说明只有一个交点，可比较一条曲线下降、另一条上升的方向。

</details>

<details markdown="1">
<summary>解答与检查</summary>

定义域为 $x<\ln5$。对方程两边取指数得 $5-e^x=e^x$，所以交点为

$$(x,y)=\big(\ln(5/2),\ln(5/2)\big).$$

该值属于定义域，真数为 $5/2>0$。在定义域内，对数曲线递减，直线递增，所以至多相交一次；求出的点又保证交点存在。也可说明 $e^x$ 随输入严格增大、不会重复同一个输出，所以 $2e^x=5$ 只能有一个解。若漏正性，回看[原真数](#natural-logarithms)。

</details>

</section>

<section class="lesson-check" markdown="1">

### 回顾任务 B {#later-model}

<!-- task:later-model -->

A continuous model starts at $640$ units and halves every $3$ hours. Find when it first reaches $80$ units and the first whole hour when it is strictly below $80$. State the model and check the boundary.

<!-- /task:later-model -->

<details markdown="1">
<summary>提示</summary>

三小时半衰期给出的是三小时的倍数；区分等于与严格小于。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$N(t)=640(1/2)^{t/3}$。令数量等于 $80$ 得 $(1/2)^{t/3}=1/8$，所以 $t=9$ 小时。模型严格递减，因此恰在 $t>9$ 时低于 $80$。首个整小时为 $10$；第 $9$ 小时仍恰为 $80$，第 $10$ 小时约为 $63.50$。时间单位有误时回看[模型倍数](#exponential-growth-and-decay)；边界等号有误时做[重试 A](#retry-model)。

</details>

</section>

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

## 下一步 {#next-step}

能够独立选择模型、说明局限并在原定义域内求解后，继续学习[求导](/zh/alevel/a2-mathematics/differentiation/)，并保留图像与正性的联系。检查失败时，先做[对应恢复任务](#repair)，隔一段时间后再做[两个回顾任务](#review)。

<details id="lesson-sources" markdown="1">
<summary>来源与范围</summary>

范围：OxfordAQA 9660 MA03 P2.5，连接 P2.1 的反函数、复合与图像，[大纲 v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf)印刷 pp21、23。制作时实读 January 2025 MA03 Q10(b)(i) 的 [QP pp18–19](https://aqamat.alevelclouds.com/25_01_QP_P2.pdf) 与 [MS p15](https://aqamat.alevelclouds.com/25_01_MS_P2.pdf)，核对建立指数二次方程及明确舍去负的指数值；这不代表每个模型或对数任务都由该题核验，本页题目为独立核算的自拟题。原教材定位：第 4 章第 4.1–4.4 节及复习、印刷 pp50–57；本轮未重查原书。微分方程推导在后续链接页。

</details>
